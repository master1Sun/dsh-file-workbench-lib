/**
 * 会话实时流：后端实时推送「当前会话触碰文件 + 活动会话运行态」。
 *
 * 两个出口共用同一套来源逻辑（createSessionStreamSource）：
 *  1. SSE 路由 GET /api/dsh-file-workbench/stream/session?session=<id>&cwd=<urlencoded>
 *     （保留给 e2e / 旧客户端；前端已改走 push WS，不再占用 HTTP/1.1 连接池配额）；
 *  2. push WS（ws-push.ts）的 `session-watch` 消息 —— **浏览器对同一源只允许约 6 条并发
 *     HTTP 长连接**，SSE 每条占一个配额；WS 不占。会话流并入推送通道后，前端常驻长连接
 *     全部落在 WS 上，/exec-input 等 REST 请求不再被排队。
 *
 * 前端（浏览器端）上报当前选中的会话 id（活动会话选择本质在浏览器，宿主无法独立感知），
 * 宿主在此侧的持久订阅里：解析该会话 → 首次全量快照 → 订阅宿主 `session/event` 总线
 * 事件驱动地推送增量/运行态。未在内存运行的旧会话回退一次性读磁盘转写做快照。
 */
import { opendir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { homedir } from "node:os";
import { decompress } from "fzstd";

import { collectSessionFiles, canonicalKey } from "../../shared/session-files.js";
import type { SessionStreamEvent } from "../../shared/types.js";
import type { RouteMatcher } from "./routes-util.js";

/** DSH 会话根目录：跟随 DSH_HOME，未设置时退回用户主目录下 .dsh（与 routes-fs 一致）。 */
function dshHomeDir(): string {
  return process.env.DSH_HOME || join(homedir(), ".dsh");
}
function sessionsRootDir(): string {
  return join(dshHomeDir(), "sessions");
}

/** 宿主侧 `sessions` 服务的最小形状（ctx.get("sessions")）。 */
interface HostSessions {
  get(id: string): { header?: { cwd?: string }; events?: unknown[] } | undefined;
  [k: string]: unknown;
}
/** 宿主侧 `agents` 服务的最小形状（ctx.get("agents")）。 */
interface HostAgents {
  get(id: string): { status?: string; session?: { header?: { cwd?: string }; events?: unknown[] } } | undefined;
  [k: string]: unknown;
}
/** 宿主 `session/event` 总线的回调参数：(session, event)。 */
interface HostSessionEvent {
  header?: { cwd?: string; id?: string };
  id?: string;
  [k: string]: unknown;
}

/** 宿主 context 的最小形状（@deepseek-ai/cordis 的 Context 在此处仅需 get/on/off）。 */
export interface HostCtx {
  get(name: string): unknown;
  on(name: string, handler: (...args: unknown[]) => void): unknown;
  off?(name: string, handler: (...args: unknown[]) => void): void;
}

/** 一次性读磁盘转写（{DSH_HOME}/sessions/<cwd编码>/<会话id>/session.jsonl.zstd）收集文件。
 *  不依赖 cwd→目录名编码：枚举 sessions 根下两级目录，命中与 id 同名子目录即可。 */
async function readTranscriptFiles(sessionId: string): Promise<{ files: string[]; cwd?: string }> {
  const rootDir = await opendir(sessionsRootDir()).catch(() => undefined);
  if (!rootDir) return { files: [] };
  for await (const cwdDir of rootDir) {
    if (!cwdDir.isDirectory()) continue;
    const groupDir = await opendir(join(sessionsRootDir(), cwdDir.name)).catch(() => undefined);
    if (!groupDir) continue;
    for await (const ses of groupDir) {
      if (!ses.isDirectory() || ses.name !== sessionId) continue;
      const raw = await readFile(join(sessionsRootDir(), cwdDir.name, ses.name, "session.jsonl.zstd")).catch(() => null);
      if (!raw) return { files: [] };
      let txt: string;
      try {
        txt = Buffer.from(decompress(raw)).toString("utf8");
      } catch {
        return { files: [] };
      }
      const events = txt
        .split("\n")
        .map((l) => {
          try {
            return JSON.parse(l);
          } catch {
            return null;
          }
        })
        .filter((e): e is unknown => !!e);
      return { files: collectSessionFiles(events, undefined), cwd: cwdDir.name };
    }
  }
  return { files: [] };
}

/** 会话实时来源的参数。 */
export interface SessionSourceOpts {
  /** 目标会话 id。 */
  sessionId: string;
  /** 活动会话 cwd 提示（浏览器侧带来；宿主内存里有会话时以宿主为准）。 */
  cwdHint?: string;
  /** 宿主 context（不可得时只发一个 status 帧后结束）。 */
  ctx?: HostCtx | undefined;
  /** 事件出口（SSE 直写帧；WS 包一层 `{ type: "session-ev", ev }` 再发）。 */
  send: (ev: SessionStreamEvent) => void;
  /** 心跳间隔（ms）；0/缺省 = 不心跳（SSE 需要，WS 有协议级 ping 不需要）。 */
  heartbeatMs?: number;
}

/**
 * 建立一路「当前会话触碰文件 + 运行态」实时订阅，返回清理函数（幂等）。
 *
 * SSE 路由与 push WS 的 session-watch 都走这里：改快照/增量/磁盘转写兜底逻辑只改这一处。
 */
export function createSessionStreamSource(opts: SessionSourceOpts): () => void {
  const { sessionId, cwdHint, ctx, send } = opts;
  const runningOf = (): boolean => {
    try {
      return (ctx?.get("agents") as HostAgents | undefined)?.get?.(sessionId)?.status === "running";
    } catch {
      return false;
    }
  };

  let disposed = false;
  const cleanup = (): void => {
    if (disposed) return;
    disposed = true;
    if (heartbeat) clearInterval(heartbeat);
    if (anyFailedTimer) clearTimeout(anyFailedTimer);
    try {
      offLive?.();
    } catch {
      /* ignore */
    }
  };

  // 宿主 context/sessions/agents 任不可得：仅发一个 status 帧后结束（无法提供实时能力）。
  if (!ctx || !ctx.get?.("sessions") || !ctx.get?.("agents")) {
    send({ type: "status", sessionId, running: runningOf() });
    return cleanup;
  }

  const sessions = ctx.get("sessions") as HostSessions;
  const agents = ctx.get("agents") as HostAgents;

  // 解析会话：优先活 agent.session，其次 sessions 存储。
  const agent = agents.get?.(sessionId);
  const liveSession = agent?.session ?? sessions.get?.(sessionId);
  const cwd = liveSession?.header?.cwd ?? cwdHint ?? undefined;

  // 按规范化键累积（避免同一文件的不同写法产生重复），保留首次出现的展示写法。
  const collected = new Map<string, string>();
  const addFiles = (files: string[]): void => {
    for (const f of files) {
      const key = canonicalKey(f);
      if (!collected.has(key)) collected.set(key, f);
    }
  };
  addFiles(collectSessionFiles(liveSession?.events, cwd));
  const files = (): string[] => [...collected.values()];

  // 首次快照。
  send({ type: "snapshot", sessionId, cwd, files: files(), running: runningOf() });

  let receivedLive = false;
  let heartbeat: NodeJS.Timeout | null = null;

  // 心跳：保持连接与代理不被缓冲（仅 SSE 出口需要；WS 有协议级 ping）。
  if (opts.heartbeatMs && opts.heartbeatMs > 0) {
    heartbeat = setInterval(() => {
      try {
        (send as (ev: unknown) => void)({ type: "__ping__" } as unknown as SessionStreamEvent);
      } catch {
        /* ignore */
      }
    }, opts.heartbeatMs);
  }

  // 订阅宿主 session/event 总线，只处理目标会话。
  const handler = (session: HostSessionEvent | undefined, ev: unknown): void => {
    if (disposed) return;
    const sid = (session as { id?: string } | undefined)?.id ?? (session as { header?: { id?: string } } | undefined)?.header?.id;
    if (sid !== undefined && sid !== sessionId) return;
    receivedLive = true;
    // 从事件增量收集文件后整表推送（基于内存 events 重新全量，保证演进一致）。
    addFiles(collectSessionFiles([ev], cwd));
    send({ type: "files", sessionId, cwd, files: files(), running: runningOf() });
  };
  let offLive: (() => void) | undefined;
  try {
    offLive = (ctx.on as Function)("session/event", handler) as (() => void) | undefined;
  } catch {
    offLive = undefined;
  }
  // 若 ctx.on 未返回可调用的注销函数，退路用 ctx.off。
  if (typeof offLive !== "function") {
    try {
      offLive = () => (ctx.off as Function)?.("session/event", handler);
    } catch {
      offLive = undefined;
    }
  }

  // 劣质实时安全网：live 解析成功但 10s 内未收到任何 session/event（作用域/版本差异时），
  // 转磁盘转写重读并刷新一次快照，随后仍保持订阅继续尝试。
  let anyFailedTimer: NodeJS.Timeout | null = null;
  anyFailedTimer = setTimeout(async () => {
    if (disposed || receivedLive) return;
    const hist = await readTranscriptFiles(sessionId);
    if (disposed) return;
    addFiles(hist.files);
    send({ type: "files", sessionId, cwd: cwd ?? hist.cwd, files: files(), running: runningOf() });
  }, 10000);

  return cleanup;
}

/**
 * 资源路由：会话实时 SSE（保留出口；前端主链路已改走 push WS 的 session-watch）。
 */
export const sessionStreamResource: RouteMatcher = async (req, res, seg, q, method, host) => {
  if (seg[0] !== "stream" || seg[1] !== "session" || method !== "GET") return false;

  const sessionId = (q.get("session") ?? "").trim();
  if (!sessionId) return false; // 缺 session：交回 404 统一处理

  const ctx = host?.ctxProvider?.() as unknown as HostCtx | undefined;

  res.writeHead(200, {
    "content-type": "text/event-stream; charset=utf-8",
    "cache-control": "no-cache, no-transform",
    connection: "keep-alive",
    "x-accel-buffering": "no",
  });

  /** 写一条 SSE 事件帧；心跳复用同一出口（`__ping__` 转成注释行）。 */
  const writeFrame = (ev: SessionStreamEvent): void => {
    try {
      if ((ev as { type?: string }).type === "__ping__") {
        res.write(": ping\n\n");
        return;
      }
      res.write(`data: ${JSON.stringify(ev)}\n\n`);
    } catch {
      /* 连接已损坏，由 req close 清理 */
    }
  };

  const cleanup = createSessionStreamSource({
    sessionId,
    cwdHint: q.get("cwd") ?? undefined,
    ctx,
    send: writeFrame,
    heartbeatMs: 15000,
  });
  req.on("close", () => {
    cleanup();
    try {
      res.end();
    } catch {
      /* ignore */
    }
  });

  return true;
};
