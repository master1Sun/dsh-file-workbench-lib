/**
 * 终端资源路由：常驻 shell（/exec-stream + /exec-input）。
 *
 * 为每个终端会话保持一个常驻 cmd/powershell 进程（Windows ConPTY 伪控制台，node-pty），
 * 输出经 SSE 实时流式转发，前端按键经 /exec-input 写入。会话级工作目录（cd）由服务端维护，
 * 供标签页标题等使用（提示符本身由 shell 输出）。
 *
 * ConPTY 给子进程真实控制台：退格逐字符删除（xterm 的 Backspace 默认发 \x7f 即 DEL，
 * ConPTY 语义正是逐字符删除）、回车即时执行、全屏 TTY 程序与中文输出均正常（与 VS Code 终端同方案）。
 * node-pty 为原生模块，缺失时直接报错（不提供降级交互终端）。
 */
import { stat } from "node:fs/promises";
import { resolve } from "node:path";
import { homedir } from "node:os";
import { spawnSync } from "node:child_process";

import { FsError, isProtectedPath, requireAbsolute } from "../fs/fs-tree.js";
import { getRoot } from "../store/root-store.js";
import {
  json,
  readBody,
  type RouteMatcher,
} from "./routes-util.js";
import type { MuxTermStreamEvent, TermStreamEvent } from "../../shared/types.js";

/** 支持的终端 shell：cmd（默认）或 powershell。 */
export type TermShell = "cmd" | "powershell";

/** 终端会话 → 当前工作目录（会话级记忆；cd 由服务端维护）。 */
const sessionCwd = new Map<string, string>();

/** ConPTY（node-pty）进程的最小鸭子类型（node-pty 为原生模块，不做静态类型依赖）。 */
interface PtyProcess {
  /** 由 node-pty 写入的系统进程 PID（用于 Windows 进程树终止）。 */
  pid?: number;
  write(data: string): void;
  kill(signal?: string): void;
  onData(cb: (data: string) => void): void;
  onExit(cb: (ev: { exitCode?: number; signal?: number }) => void): void;
}

/** node-pty 模块的 spawn 形状。 */
interface PtyFactory {
  spawn(file: string, args: string[], options: Record<string, unknown>): PtyProcess;
}

/** 常驻 shell 会话（/exec-stream 流式模型）。 */
interface ShellSession {
  /** 会话 id（= sessions 的键）：多路复用帧用它区分来源。 */
  id: string;
  pty: PtyProcess;
  shell: TermShell;
  cwd: string;
  /** 当前挂接的 SSE 转发器（前端连接）；断开连接不销毁会话。 */
  sinks: Set<import("node:http").ServerResponse>;
  heartbeat: NodeJS.Timeout | null;
  closed: boolean;
}

const sessions = new Map<string, ShellSession>();

/**
 * 多路复用 SSE 转发器：**所有终端会话共用这一组连接**（前端只开一条）。
 *
 * 必须复用连接的原因：宿主是 `node:http`（HTTP/1.1），浏览器对同一源只允许约 6 条并发连接。
 * 若每个终端会话各占一条 SSE，开几个终端就把配额占满，后续的 `/exec-stream`、`/exec-input`
 * 被浏览器永久排队——表现为「后开的终端一直空白且无法输入」。
 */
const muxSinks = new Set<import("node:http").ServerResponse>();
/** 多路复用心跳计时器（有客户端时存在）。 */
let muxHeartbeat: NodeJS.Timeout | null = null;

/** 构造一个 SSE 数据帧（`data: <json>\n\n`）。 */
function sseFrame(ev: unknown): string {
  return `data: ${JSON.stringify(ev)}\n\n`;
}

/**
 * 惰性加载 node-pty（原生模块）：不可用（未安装/加载失败）返回 null。
 * 用 `undefined` 标记尚未探测，避免每次请求重复 try/catch。
 */
let ptyFactory: PtyFactory | null | undefined;
async function loadPty(): Promise<PtyFactory | null> {
  if (ptyFactory === undefined) {
    try {
      const mod = (await import("node-pty")) as { default?: PtyFactory };
      ptyFactory = mod.default ?? (mod as unknown as PtyFactory);
    } catch {
      ptyFactory = null;
    }
  }
  return ptyFactory;
}

/** 常驻 shell 的派生命令（Windows：cmd 裸启动交互模式；POSIX：交互式 bash）。 */
function shellCommand(shell: TermShell): { file: string; args: string[] } {
  if (process.platform === "win32") {
    // ConPTY 下 powershell 无需编码初始化参数（控制台 I/O 已为 Unicode）。
    if (shell === "powershell") return { file: "powershell.exe", args: ["-NoLogo", "-NoProfile"] };
    return { file: "cmd.exe", args: [] };
  }
  return { file: "bash", args: ["-i"] };
}

/**
 * 向会话的所有订阅者广播一个事件帧：既发给该会话的专用 SSE（兼容旧端点），
 * 也发给多路复用流（帧上补 `session`，供前端把输出分发到对应终端标签）。
 */
function broadcast(s: ShellSession, ev: TermStreamEvent): void {
  const frame = sseFrame(ev);
  for (const res of s.sinks) {
    try {
      res.write(frame);
    } catch {
      /* 转发器已损坏，由 req close 清理 */
    }
  }
  const muxFrame = sseFrame({ ...ev, session: s.id });
  for (const res of muxSinks) {
    try {
      res.write(muxFrame);
    } catch {
      /* 转发器已损坏，由 req close 清理 */
    }
  }
}

/** 结束会话：清理心跳、关闭转发器、从表中移除。 */
function endSession(session: string, s: ShellSession): void {
  if (s.closed) return;
  s.closed = true;
  if (s.heartbeat) clearInterval(s.heartbeat);
  for (const res of s.sinks) {
    try {
      res.end();
    } catch {
      /* ignore */
    }
  }
  s.sinks.clear();
  if (sessions.get(session) === s) sessions.delete(session);
}

/**
 * 终止终端会话对应的后端进程树。
 *
 * Windows 下 node-pty 的 kill() 只杀掉 ConPTY 外壳（cmd/powershell）本身，外壳里启动的子进程
 * （npm、python、node 等）会成为孤儿残留到任务管理器。这里先用 taskkill /T 以进程树方式强制
 * 终结（含孙进程），再走 node-pty 兜底；POSIX 直接用 pty.kill()（连同子进程同与会话终止）。
 */
function killSessionTree(s: ShellSession): void {
  if (process.platform === "win32" && typeof s.pty.pid === "number") {
    try {
      spawnSync("taskkill", ["/pid", String(s.pty.pid), "/T", "/F"], { stdio: "ignore" });
    } catch {
      /* taskkill 不可用或进程已退出：回退到 node-pty 兜底 */
    }
  }
  try {
    s.pty.kill();
  } catch {
    /* ignore */
  }
}

/** 派生常驻 shell 并接线输出 → 转发器、exit → 收尾（ConPTY 输出已由 node-pty 转为文本）。 */
async function spawnShellSession(session: string, shell: TermShell, cwd: string): Promise<ShellSession> {
  const ptyMod = await loadPty();
  if (!ptyMod) {
    throw new Error("node-pty (ConPTY) is unavailable: cannot start an interactive terminal");
  }
  const { file, args } = shellCommand(shell);
  const child = ptyMod.spawn(file, args, {
    name: "xterm-256color",
    cols: 100,
    rows: 30,
    cwd,
    env: process.env,
  });
  const s: ShellSession = { id: session, pty: child, shell, cwd, sinks: new Set(), heartbeat: null, closed: false };
  sessions.set(session, s);
  child.onData((data) => broadcast(s, { type: "output", text: data }));
  child.onExit((ev) => {
    broadcast(s, { type: "exit", code: ev.exitCode ?? -1 });
    endSession(session, s);
  });
  return s;
}

/** 从输入行识别 cd / chdir 目标（供服务端同步会话 cwd；其余行返回 null）。 */
function detectCd(line: string, shell: TermShell): { target: string } | null {
  const cmd = line.trim();
  if (!cmd) return null;
  if (shell === "powershell") {
    const m = cmd.match(/^(?:cd|sl|set-location)\s+(?:-path\s+)?['"]?([^'"]+)['"]?$/i);
    return m ? { target: m[1] } : null;
  }
  if (shell === "cmd") {
    const m = cmd.match(/^(?:cd|chdir)\b\s*(.*)$/i);
    if (!m) return null;
    return { target: m[1].replace(/^\/d\s+/i, "") };
  }
  const m = cmd.match(/^cd\b\s*(.*)$/);
  return m ? { target: m[1] } : null;
}

/** 当前 host 进程是否以管理员（Windows）/ root（POSIX）身份运行；懒探测 + 缓存（进程生命周期内不变）。 */
let elevatedCache: boolean | undefined;
export function hostIsElevated(): boolean {
  if (elevatedCache === undefined) elevatedCache = detectElevated();
  return elevatedCache;
}

/**
 * 探测提权状态。
 *
 * Windows：ConPTY 子进程继承 host 自身令牌，所以「终端能否提权」== 「dsh web 是否提权」。
 * 用 `whoami /groups` 的完整性级别 SID 判定——SID 不随系统语言变化，比匹配本地化的
 * 「管理员 / Administrators」字样可靠：S-1-16-12288（High，已提权）、S-1-16-16384（SYSTEM）
 * 视为提权；普通用户进程为 S-1-16-8192（Medium）。
 * POSIX：uid 0 即 root。
 */
function detectElevated(): boolean {
  if (process.platform !== "win32") {
    return typeof process.getuid === "function" && process.getuid() === 0;
  }
  try {
    const r = spawnSync("whoami", ["/groups"], { encoding: "utf8", windowsHide: true });
    return /S-1-16-(12288|16384)\b/i.test(r.stdout ?? "");
  } catch {
    return false;
  }
}

/** 资源路由：常驻流式终端（输出 / 输入 / 终止）。 */
export const terminalResource: RouteMatcher = async (req, res, seg, _q, method, host) => {
  void host;

  // --- 流式终端：GET /exec-stream?session=&shell=&cwd=&key= —— 常驻 shell + SSE 输出 ---
  if (seg[0] === "exec-stream" && seg.length === 1 && method === "GET") {
    const session = _q.get("session")?.trim() || "default";
    const shell: TermShell = _q.get("shell") === "powershell" ? "powershell" : "cmd";
    const cwd = resolveSessionCwd(session, _q.get("cwd") ?? undefined, _q.get("key") ?? undefined);
    const s = await ensureSession(session, shell, cwd);

    res.writeHead(200, sseHeaders());
    // 先发一次当前 cwd（前端同步标签标题），再挂接转发器接收后续输出。
    res.write(sseFrame({ type: "cwd", cwd: s.cwd } as TermStreamEvent));
    s.sinks.add(res);
    if (!s.heartbeat) {
      s.heartbeat = setInterval(() => {
        for (const r of s.sinks) {
          try {
            r.write(": ping\n\n");
          } catch {
            /* ignore */
          }
        }
      }, 15000);
    }
    // 客户端断开：摘掉转发器；shell 保持常驻（跨连接存活，供重连/标签切换）。
    req.on("close", () => {
      s?.sinks.delete(res);
    });
    return true;
  }

  // --- 派生会话：POST /exec-open { session, shell, cwd, key } —— 只保证会话存在，不挂 SSE ---
  // 多路复用模式下前端只开一条 /exec-mux-stream，会话本身必须由这里显式建立，
  // 否则「尚无该会话」时复用流上永远不会有它的输出。幂等：同 shell 同 cwd 直接复用既有会话。
  if (seg[0] === "exec-open" && seg.length === 1 && method === "POST") {
    const body = (await readBody(req)) as {
      session?: string;
      shell?: string;
      cwd?: string;
      key?: string;
    } | null;
    const session = body?.session?.trim() || "default";
    const shell: TermShell = body?.shell === "powershell" ? "powershell" : "cmd";
    const cwd = resolveSessionCwd(session, body?.cwd, body?.key);
    const s = await ensureSession(session, shell, cwd);
    return (json(res, 200, { ok: true, data: { cwd: s.cwd } }), true);
  }

  // --- 多路复用流：GET /exec-mux-stream?key= —— **一条连接覆盖全部会话**（帧上带 session） ---
  if (seg[0] === "exec-mux-stream" && seg.length === 1 && method === "GET") {
    res.writeHead(200, sseHeaders());
    // 快照：把已存在会话的 cwd 先补发一遍，前端据此同步已打开标签的标题。
    for (const s of sessions.values()) {
      if (!s.closed) {
        res.write(sseFrame({ type: "cwd", session: s.id, cwd: s.cwd } as MuxTermStreamEvent));
      }
    }
    muxSinks.add(res);
    if (!muxHeartbeat) {
      muxHeartbeat = setInterval(() => {
        for (const r of muxSinks) {
          try {
            r.write(": ping\n\n");
          } catch {
            /* ignore */
          }
        }
      }, 15000);
    }
    // 客户端断开：摘掉转发器；shell 会话保持常驻（重连后经 /exec-open 复用即可）。
    req.on("close", () => {
      muxSinks.delete(res);
      if (!muxSinks.size && muxHeartbeat) {
        clearInterval(muxHeartbeat);
        muxHeartbeat = null;
      }
    });
    return true;
  }

  // --- 终端输入：POST /exec-input { session, data } —— 写入常驻 shell 的 stdin ---
  if (seg[0] === "exec-input" && seg.length === 1 && method === "POST") {
    const body = (await readBody(req)) as { session?: string; data?: string } | null;
    const session = body?.session?.trim() || "default";
    const data = body?.data ?? "";
    const s = sessions.get(session);
    if (!s || s.closed) {
      return (json(res, 404, { ok: false, error: "terminal session is not running; reconnect the stream first" }), true);
    }
    // cd：同步服务端会话 cwd（提示符由 shell 自身输出，这里仅用于标签标题/初始目录）。
    const cd = detectCd(data, s.shell);
    if (cd) {
      const target = cd.target.trim() || homedir();
      const next = resolve(s.cwd, target);
      if (!isProtectedPath(next)) {
        const st = await stat(next).catch(() => null);
        if (st && st.isDirectory()) {
          s.cwd = next;
          sessionCwd.set(session, next);
          broadcast(s, { type: "cwd", cwd: next });
        }
      }
    }
    try {
      // ConPTY 控制台输入：Enter(\r) 即时执行，粘贴多行统一换行为 \r；
      // 退格（xterm 默认发 \x7f）由控制台编辑器逐字符删除，无需字节转换。
      s.pty.write(data.replace(/\r\n|\r|\n/g, "\r"));
    } catch (e) {
      return (json(res, 500, { ok: false, error: e instanceof Error ? e.message : String(e) }), true);
    }
    return (json(res, 200, { ok: true, data: { ok: true } }), true);
  }

  // --- 终止：POST /exec-kill { session } —— 常驻 shell 会话清理 ---
  if (seg[0] === "exec-kill" && seg.length === 1 && method === "POST") {
    const body = (await readBody(req)) as { session?: string } | null;
    const session = body?.session?.trim() || "default";
    const s = sessions.get(session);
    if (s) {
      killSessionTree(s);
      endSession(session, s);
    }
    return (json(res, 200, { ok: true, data: { killed: Boolean(s) } }), true);
  }

  // --- 终端权限态：GET /term-env —— 当前 host 进程是否提权（供终端栏显示「管理员」徽标） ---
  if (seg[0] === "term-env" && seg.length === 1 && method === "GET") {
    return (json(res, 200, { ok: true, data: { elevated: hostIsElevated() } }), true);
  }

  return false;
};

/** 路径规范化比较（统一分隔符与小写，Windows 不区分大小写）。 */
function normalizePath(p: string): string {
  const n = p.replace(/\\/g, "/").replace(/\/+$/, "").toLowerCase();
  return n;
}

/** 终端 SSE 响应头（专用流与多路复用流共用）。 */
function sseHeaders(): Record<string, string> {
  return {
    "content-type": "text/event-stream; charset=utf-8",
    "cache-control": "no-cache, no-transform",
    connection: "keep-alive",
    "x-accel-buffering": "no",
  };
}

/**
 * 解析会话工作目录：显式 cwd > 会话记忆 > 工作区根 > 家目录。
 *
 * 远端（ssh）目录首版没有交互式 shell：不能拿 `ssh://` 引用去 `requireAbsolute`（会报
 * 「不是绝对路径」），安静回落到本机主目录，标签标题由随后的 cwd 事件如实回传。
 */
function resolveSessionCwd(session: string, rawCwd: string | undefined, key: string | undefined): string {
  let cwd = rawCwd?.trim() || sessionCwd.get(session) || getRoot(key) || homedir();
  if (cwd.startsWith("ssh://")) cwd = homedir();
  cwd = requireAbsolute(cwd);
  if (isProtectedPath(cwd)) {
    throw new FsError("forbidden", "terminal rejected: working directory is a protected read-only area", 403);
  }
  return cwd;
}

/** 取得（必要时派生）常驻 shell 会话；shell 或 cwd 变化时先终止旧会话再重建。 */
async function ensureSession(session: string, shell: TermShell, cwd: string): Promise<ShellSession> {
  let s = sessions.get(session);
  if (s && (s.shell !== shell || normalizePath(s.cwd) !== normalizePath(cwd))) {
    killSessionTree(s);
    endSession(session, s);
    s = undefined;
  }
  if (!s) {
    s = await spawnShellSession(session, shell, cwd);
    sessionCwd.set(session, cwd);
  }
  return s;
}
