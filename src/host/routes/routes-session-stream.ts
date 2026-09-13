/**
 * 会话实时流资源路由：后端 SSE 实时推送「当前会话触碰文件 + 活动会话运行态」。
 *
 * 端点：GET /api/dsh-file-workbench/stream/session?session=<id>&cwd=<urlencoded>
 *
 * 前端（浏览器端）上报当前选中的会话 id（活动会话选择本质在浏览器，宿主无法独立感知），
 * 宿主在此侧的持久连接里：解析该会话 → 首次全量快照 → 订阅宿主 `session/event` 总线
 * 事件驱动地推送增量/运行态。未在内存运行的旧会话回退一次性读磁盘转写做快照。
 *
 * 参考：routes-terminal.ts 的 /exec-stream SSE 先例（text/event-stream、req close、心跳）。
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
interface HostCtx {
  get(name: string): unknown;
  on(name: string, handler: (...args: unknown[]) => void): unknown;
  off?(name: string, handler: (...args: unknown[]) => void): void;
}

/** 写一条 SSE 事件帧。 */
function writeFrame(res: import("node:http").ServerResponse, ev: SessionStreamEvent): void {
  try {
    res.write(`data: ${JSON.stringify(ev)}\n\n`);
  } catch {
    /* 连接已损坏，由 req close 清理 */
  }
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

/** 资源路由：会话实时 SSE。 */
export const sessionStreamResource: RouteMatcher = async (req, res, seg, q, method, host) => {
  if (seg[0] !== "stream" || seg[1] !== "session" || method !== "GET") return false;

  const sessionId = (q.get("session") ?? "").trim();
  if (!sessionId) return false; // 缺 session：交回 404 统一处理

  const ctx = host?.ctxProvider?.() as unknown as HostCtx | undefined;
  const runningOf = (): boolean => {
    try {
      return (ctx?.get("agents") as HostAgents | undefined)?.get?.(sessionId)?.status === "running";
    } catch {
      return false;
    }
  };

  res.writeHead(200, {
    "content-type": "text/event-stream; charset=utf-8",
    "cache-control": "no-cache, no-transform",
    connection: "keep-alive",
    "x-accel-buffering": "no",
  });

  // 宿主 context/sessions/agents 任不可得：仅发一个 status 帧后关闭（无法提供实时能力）。
  if (!ctx || !ctx.get?.("sessions") || !ctx.get?.("agents")) {
    writeFrame(res, { type: "status", sessionId, running: runningOf() });
    res.end();
    return true;
  }

  const sessions = ctx.get("sessions") as HostSessions;
  const agents = ctx.get("agents") as HostAgents;

  // 解析会话：优先活 agent.session，其次 sessions 存储。
  const agent = agents.get?.(sessionId);
  const liveSession = agent?.session ?? sessions.get?.(sessionId);
  const cwd = liveSession?.header?.cwd ?? q.get("cwd") ?? undefined;

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
  writeFrame(res, { type: "snapshot", sessionId, cwd, files: files(), running: runningOf() });

  let receivedLive = false;
  let disposed = false;
  let heartbeat: NodeJS.Timeout | null = null;

  // 心跳：保持连接与代理不被缓冲。
  heartbeat = setInterval(() => {
    try {
      res.write(": ping\n\n");
    } catch {
      /* ignore */
    }
  }, 15000);

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
    try {
      res.end();
    } catch {
      /* ignore */
    }
  };
  req.on("close", cleanup);

  // 订阅宿主 session/event 总线，只处理目标会话。
  const handler = (session: HostSessionEvent | undefined, ev: unknown): void => {
    if (disposed) return;
    const sid = (session as { id?: string } | undefined)?.id ?? (session as { header?: { id?: string } } | undefined)?.header?.id;
    if (sid !== undefined && sid !== sessionId) return;
    receivedLive = true;
    // 从事件增量收集文件后整表推送（基于内存 events 重新全量，保证演进一致）。
    addFiles(collectSessionFiles([ev], cwd));
    writeFrame(res, { type: "files", sessionId, cwd, files: files(), running: runningOf() });
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
      offLive = () => (ctx.off as Function)?.( "session/event", handler);
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
    writeFrame(res, { type: "files", sessionId, cwd: cwd ?? hist.cwd, files: files(), running: runningOf() });
  }, 10000);

  return true;
};