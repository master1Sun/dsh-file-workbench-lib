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
import type { TermStreamEvent } from "../../shared/types.js";

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

/** 向会话的所有 SSE 转发器广播一个事件帧。 */
function broadcast(s: ShellSession, ev: TermStreamEvent): void {
  const frame = `data: ${JSON.stringify(ev)}\n\n`;
  for (const res of s.sinks) {
    try {
      res.write(frame);
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
  const s: ShellSession = { pty: child, shell, cwd, sinks: new Set(), heartbeat: null, closed: false };
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
    let cwd = _q.get("cwd")?.trim() || sessionCwd.get(session) || getRoot(_q.get("key") ?? undefined) || homedir();
    cwd = requireAbsolute(cwd);
    if (isProtectedPath(cwd)) {
      throw new FsError("forbidden", "terminal rejected: working directory is a protected read-only area", 403);
    }

    let s = sessions.get(session);
    // 已存在但 shell 或 cwd 变化：先终止旧会话再重新派生。
    if (s && (s.shell !== shell || normalizePath(s.cwd) !== normalizePath(cwd))) {
      killSessionTree(s);
      endSession(session, s);
      s = undefined;
    }
    if (!s) {
      s = await spawnShellSession(session, shell, cwd);
      sessionCwd.set(session, cwd);
    }

    res.writeHead(200, {
      "content-type": "text/event-stream; charset=utf-8",
      "cache-control": "no-cache, no-transform",
      connection: "keep-alive",
      "x-accel-buffering": "no",
    });
    // 先发一次当前 cwd（前端同步标签标题），再挂接转发器接收后续输出。
    res.write(`data: ${JSON.stringify({ type: "cwd", cwd: s.cwd } as TermStreamEvent)}\n\n`);
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
