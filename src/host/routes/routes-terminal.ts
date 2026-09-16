/**
 * 终端资源路由：常驻 shell（/exec-stream + /exec-input + /exec-open + /exec-resize + /exec-kill）。
 *
 * 两种后端，前端通过 `/exec-open` 的 `kind` 选择：
 * - `local`（默认）：本机 cmd/powershell，Windows ConPTY 伪控制台（node-pty）；
 * - `ssh`：远端 shell，经 ssh2 打开 shell 通道 —— **先用主机配置里已存的凭据自动登录**，
 *   失败（改密 / 口令过期 / 私钥被撤 / 没存凭据）再回落**手动输入密码**
 *   （`tryKeyboard` 键盘交互式认证，提示打到终端、`/exec-input` 回灌应答）。
 *
 * 输出统一经 SSE 转发（一条多路复用流覆盖全部会话），输入经 `/exec-input` 写入后端。
 * 会话级工作目录（cd）由服务端维护，供标签页标题等使用（提示符本身由 shell 输出）。
 *
 * ConPTY 给子进程真实控制台：退格逐字符删除（xterm 的 Backspace 默认发 \x7f 即 DEL，
 * ConPTY 语义正是逐字符删除）、回车即时执行、全屏 TTY 程序与中文输出均正常（与 VS Code 终端同方案）。
 * node-pty 为原生模块，缺失时直接报错（不提供降级交互终端）。
 */
import { readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";
import { homedir } from "node:os";
import { spawnSync } from "node:child_process";
import type { IncomingMessage } from "node:http";
import type { Duplex } from "node:stream";
import type { WebUpgradeRoute } from "@deepseek-ai/dsh-host-webserver";

import { FsError, isProtectedPath, requireAbsolute } from "../fs/fs-tree.js";
import { getRoot } from "../store/root-store.js";
import { getHost, type SshHostConfig } from "../ssh/ssh-hosts.js";
import {
  defaultKnownHostsPath,
  parseKnownHosts,
  shellQuoteSingle,
  verifyHostKey,
  type KnownHostsEntry,
} from "../ssh/ssh-core.js";
import ssh2 from "ssh2";
const { Client } = ssh2;
import {
  json,
  readBody,
  PREFIX,
  type RouteMatcher,
} from "./routes-util.js";
import { WsConn, acceptKey } from "./ws-conn.js";
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
  /** 调整伪终端尺寸（列/行）。老版本 node-pty 可能没有，按可选处理。 */
  resize?(cols: number, rows: number): void;
  onData(cb: (data: string) => void): void;
  onExit(cb: (ev: { exitCode?: number; signal?: number }) => void): void;
}

/** node-pty 模块的 spawn 形状。 */
interface PtyFactory {
  spawn(file: string, args: string[], options: Record<string, unknown>): PtyProcess;
}

/**
 * ssh2 shell 通道的最小鸭子类型（ssh2 为运行时依赖，不做静态类型依赖）。
 * 只用到「写输入 / 改窗口尺寸 / 收数据 / 收关闭」四件事。
 */
interface SshShellStream {
  write(data: string): void;
  setWindow(rows: number, cols: number, height: number, width: number): void;
  close(): void;
  end(): void;
  on(event: "data", cb: (data: Buffer) => void): void;
  on(event: "close", cb: () => void): void;
  stderr?: { on(event: "data", cb: (data: Buffer) => void): void } | null;
}

/** ssh2 Client（类型来自 ambient.d.ts 的 `declare module "ssh2"` 垫片；运行时为真实 ssh2）。 */
type SshClient = import("ssh2").Client;

/**
 * 会话后端类型。
 * - `local`：本机 ConPTY shell（cmd / powershell），现状不变；
 * - `ssh`：远端 shell，走 ssh2 通道**先用已存凭据自动登录，失败再手动输密码**，
 *   不需要本机 ssh 客户端。
 */
export type TermKind = "local" | "ssh";

/** 常驻 shell 会话（/exec-stream 流式模型）。 */
interface ShellSession {
  /** 会话 id（= sessions 的键）：多路复用帧用它区分来源。 */
  id: string;
  /** 后端类型：local（ConPTY）或 ssh（ssh2 通道）。 */
  kind: TermKind;
  /** 本机 ConPTY 进程（仅 kind=local）。 */
  pty?: PtyProcess;
  /** 远端 shell 通道（仅 kind=ssh）。 */
  ssh?: SshShellStream;
  /** 远端主机 id（仅 kind=ssh）。 */
  hostId?: string;
  /** 远端目录（仅 kind=ssh）：登录后 cd 到这里。 */
  remote?: string;
  /**
   * 键盘交互式认证态：仅 kind=ssh 手动输密码登录期间存在。
   * 此时 `/exec-input` 的输入被截获为口令行，回灌给 ssh2 的 `keyboard-interactive`
   * 认证回调，而非写入 shell 通道（shell 尚未建好）。
   */
  authPending?: {
    /** 服务器本轮要求回答的 prompt（含是否回显标记）。 */
    prompts: { prompt: string; echo: boolean }[];
    /** 收集满后回交给 ssh2 的回调。 */
    finish: (responses: string[]) => void;
    /** 已收集的应答（按 prompt 顺序）。 */
    collected: string[];
    /** 当前正在收集的 prompt 下标。 */
    idx: number;
    /** 当前 prompt 的待提交输入缓冲（支持退格 / 整行提交）。 */
    buffer: string;
  } | null;
  /** 该会话的 ssh2 客户端是否由本会话独占（手动输密码登录为 true；连接池复用为 false）。 */
  sshOwned?: boolean;
  /** 手动输密码登录时独占的 ssh2 客户端（会话结束需整体 end()，而非只关 shell 通道）。 */
  sshClient?: SshClient;
  /**
   * 本机 shell 类型。kind=ssh 时无意义（远端 shell 由 sshd 决定），恒为 "cmd"。
   * 保留字段是为了让「本机会话」的所有既有分支（cd 识别等）无需加判空。
   */
  shell: TermShell;
  cwd: string;
  /** 当前伪终端列/行（用于 resize 去重与重建时沿用）。 */
  cols: number;
  rows: number;
  /** 当前挂接的 SSE 转发器（前端连接）；断开连接不销毁会话。 */
  sinks: Set<import("node:http").ServerResponse>;
  heartbeat: NodeJS.Timeout | null;
  closed: boolean;
}

const sessions = new Map<string, ShellSession>();

/**
 * 多路复用转发器的最小出口：SSE 响应与 WS 连接各包一份（前端主链路已改走 `/exec-mux-ws`
 * WebSocket —— **WS 不占浏览器 HTTP/1.1 同源连接池**，SSE 出口保留给 e2e / 旧客户端）。
 */
interface MuxSink {
  send: (ev: MuxTermStreamEvent) => void;
  ping: () => void;
}
/** 多路复用 SSE 转发器：**所有终端会话共用这一组连接**（前端只开一条）。 */
const muxSinks = new Set<MuxSink>();
/** 多路复用心跳计时器（有客户端时存在）。 */
let muxHeartbeat: NodeJS.Timeout | null = null;

/** 摘掉一个转发器；最后一个摘掉时停心跳。 */
function removeMuxSink(sink: MuxSink): void {
  muxSinks.delete(sink);
  if (!muxSinks.size && muxHeartbeat) {
    clearInterval(muxHeartbeat);
    muxHeartbeat = null;
  }
}

/** 有客户端接入时确保心跳在跑（SSE 写注释行；WS 发协议级 ping）。 */
function ensureMuxHeartbeat(): void {
  if (muxHeartbeat) return;
  muxHeartbeat = setInterval(() => {
    for (const r of muxSinks) r.ping();
  }, 15000);
  muxHeartbeat.unref?.();
}

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
  const muxEv = { ...ev, session: s.id } as MuxTermStreamEvent;
  for (const sink of muxSinks) {
    try {
      sink.send(muxEv);
    } catch {
      /* 转发器已损坏，由断开事件清理 */
    }
  }
}

/** 结束会话：清理心跳、关闭转发器、从表中移除。 */
function endSession(session: string, s: ShellSession): void {
  if (s.closed) return;
  s.closed = true;
  s.authPending = null; // 认证未完成即结束：丢弃待回应的口令回调，避免后台 await 悬挂。
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
  // 远端会话：只关掉这条 shell 通道，**保留连接池里的底层连接** —— 文件浏览 / SFTP / 连通性
  // 探测都复用它，一并 dispose 会让「关掉终端」顺带把文件树打断。
  if (s.kind === "ssh") {
    try {
      s.ssh?.close();
    } catch {
      /* 通道已关闭 */
    }
    // 手动输密码路径独占整条 ssh2 连接（不走连接池）：会话终止时整体断开，
    // 否则这条连接会带着登录态泄漏在后台。
    if (s.sshOwned) {
      try {
        s.sshClient?.end();
      } catch {
        /* 连接已断 */
      }
    }
    return;
  }
  if (process.platform === "win32" && typeof s.pty?.pid === "number") {
    try {
      spawnSync("taskkill", ["/pid", String(s.pty.pid), "/T", "/F"], { stdio: "ignore" });
    } catch {
      /* taskkill 不可用或进程已退出：回退到 node-pty 兜底 */
    }
  }
  try {
    s.pty?.kill();
  } catch {
    /* ignore */
  }
}

/**
 * 把前端输入写进会话后端。
 *
 * - 本机 ConPTY：换行统一成 `\r`（控制台输入语义，Enter 即时执行）；
 * - 远端 pty：**原样透传** —— xterm 发出的字节就是真实终端会发出的字节（回车是 `\r`，
 *   远端线路规程会自行处理），做二次转换反而会破坏 Ctrl 组合键与括号粘贴序列。
 */
function writeToSession(s: ShellSession, data: string): void {
  if (s.kind === "ssh") {
    s.ssh?.write(data);
    return;
  }
  s.pty?.write(data.replace(/\r\n|\r|\n/g, "\r"));
}

/** 调整会话伪终端尺寸（前端 fit 后上报；两种后端各自实现，尺寸未变则跳过）。 */
function resizeSession(s: ShellSession, cols: number, rows: number): void {
  if (s.cols === cols && s.rows === rows) return;
  s.cols = cols;
  s.rows = rows;
  try {
    if (s.kind === "ssh") s.ssh?.setWindow(rows, cols, 0, 0);
    else s.pty?.resize?.(cols, rows);
  } catch {
    /* 通道/进程已结束：忽略 */
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
    cols: DEFAULT_COLS,
    rows: DEFAULT_ROWS,
    cwd,
    env: process.env,
  });
  const s: ShellSession = {
    id: session,
    kind: "local",
    pty: child,
    shell,
    cwd,
    cols: DEFAULT_COLS,
    rows: DEFAULT_ROWS,
    sinks: new Set(),
    heartbeat: null,
    closed: false,
  };
  sessions.set(session, s);
  child.onData((data) => broadcast(s, { type: "output", text: data }));
  child.onExit((ev) => {
    broadcast(s, { type: "exit", code: ev.exitCode ?? -1 });
    endSession(session, s);
  });
  return s;
}

/** 新会话的默认伪终端尺寸（前端 fit 后会立刻通过 /exec-resize 纠正）。 */
const DEFAULT_COLS = 100;
const DEFAULT_ROWS = 30;

/**
 * 派生**远端** shell 会话：**先自动登录，失败再手动输密码**。
 *
 * ① **自动登录**：用主机配置里已存的凭据（口令 / 私钥）静默连一次，成功即直接开 shell ——
 *    日常「在终端打开远端目录」无需再敲口令，也不依赖本机 ssh 客户端（Windows 常没装
 *    OpenSSH，退化成本机 `ssh` 命令会直接报「不是内部或外部命令」，用户反而连不上）。
 * ② **手动输密码**：已存凭据失效（远端改密 / 口令过期 / 私钥被撤）或压根没存时回落。
 *    ⛔ 必须回落而不是直接报错 —— 2026-09-16 产品决策的要害是「**不静默失败**」，
 *    自动登录失败时把原因打进终端并交回人工输入，比直接判定登录失败更符合原意。
 *    手动路径：独立 ssh2 连接（不走连接池）→ `tryKeyboard` 让远端弹口令提示 →
 *    `/exec-input` 把敲的口令回灌给 `keyboard-interactive` 回调 → 认证完成后开 shell。
 *
 * ⛔ 连接期错误（连不通 / 主机键不匹配）必须在返回前抛 FsError 且**不留会话**（smoke 依赖
 *    这两条不变量，前端也据此退化成本机 ssh）；主机可达且（自动登录成功 或 口令提示已送达）
 *    后才返回 200 kind=ssh，之后的认证在后台等用户输密码。
 */
async function spawnSshShellSession(session: string, hostId: string, remote: string): Promise<ShellSession> {
  const cfg = await getHost(hostId); // 未知 hostId → FsError 404 冒泡，前端提示「主机没配」。
  const s: ShellSession = {
    id: session,
    kind: "ssh",
    hostId,
    remote,
    // 远端 shell 由 sshd 按登录用户决定，这里的 shell 字段对 ssh 分支无意义。
    shell: "cmd",
    cwd: remote,
    cols: DEFAULT_COLS,
    rows: DEFAULT_ROWS,
    sinks: new Set(),
    heartbeat: null,
    closed: false,
    sshOwned: true,
  };
  sessions.set(session, s);
  broadcast(
    s,
    { type: "output", text: `\x1b[2m[ssh] 正在连接 ${cfg.user}@${cfg.host}:${cfg.port || 22} …\x1b[0m\r\n` },
  );
  // known_hosts 校验与连接池同策略（acceptNew：未知键自动接受，不匹配仍硬拒）。
  const entries = await readKnownHostsEntries();

  /* ① 自动登录：已存凭据先静默试一次。 */
  const stored = await storedAuthOf(cfg);
  if (stored) {
    try {
      const auto = await connectWithStoredAuth(cfg, hostId, stored, entries);
      s.sshClient = auto;
      // 会话可能已在连接期间被关闭（用户关了终端）：别把这条登录态连接泄漏在后台。
      if (s.closed) {
        try {
          auto.end();
        } catch {
          /* 已断开 */
        }
        return s;
      }
      if (await openShellAfterAuth(s, auto, remote)) return s;
      // 认证过了但 sshd 拒绝分配 pty（极罕见）：不留半成品会话，抛错走本机 ssh 降级。
      endSession(session, s);
      throw new FsError("fs-error", "ssh 已登录但无法打开远端 shell", 502);
    } catch (e) {
      if (!isAuthFailure(e)) {
        // 连不通 / 主机键不匹配：不留会话（smoke：「连不通主机不留会话」），走本机 ssh 降级。
        endSession(session, s);
        if (e instanceof FsError) throw e;
        throw new FsError("fs-error", `ssh 连接失败：${errText(e)}`, 502);
      }
      // 凭据失效：明确告知原因后转入手动输入（绝不静默失败）。
      broadcast(
        s,
        {
          type: "output",
          text: `\x1b[33m[ssh] 已保存的凭据登录失败（${errText(e)}），请手动输入密码。\x1b[0m\r\n`,
        },
      );
    }
  }

  /* ② 手动输密码：独立 ssh2 连接 + keyboard-interactive。 */
  const client = new Client();
  s.sshClient = client; // 独占连接，killSessionTree 会整体 end()。
  const auth = connectForManualPassword(s, client, cfg, entries);
  // ⛔ settle 的失败回调必须**先于** await handshake 挂上：连不通时 handshake 与 settle 同时
  //    reject，若先 await 再 throw，settle 会变成无人接管的 unhandled rejection（进程崩溃，
  //    smoke 的 ECONNREFUSED 用例实测踩过）。挂在前面还有个好处：失败文案先写进终端，
  //    再走 endSession 收尾，用户能看到失败原因而不是一片空白。
  void auth.settle.then(
    (c) => {
      void openShellAfterAuth(s, c, remote).then((ok) => {
        if (!ok && !s.closed) endSession(s.id, s);
      });
    },
    (err: unknown) => {
      broadcast(s, { type: "output", text: `\r\n\x1b[31m[ssh] 登录失败：${errText(err)}\x1b[0m\r\n` });
      broadcast(s, { type: "output", text: `\x1b[2m[ssh] 关闭此终端重新打开即可重试。\x1b[0m\r\n` });
      // 认证彻底失败（口令错 / 服务器不支持键盘交互式 / 连接中断）：清理会话，不留僵尸。
      if (!s.closed) endSession(session, s);
    },
  );
  try {
    await auth.handshake;
  } catch (e) {
    // 连不通 / 主机键不匹配：不留会话（smoke：「连不通主机不留会话」），抛错走本机 ssh 降级。
    endSession(session, s);
    if (e instanceof FsError) throw e;
    throw new FsError("fs-error", `ssh 连接失败：${errText(e)}`, 502);
  }
  // 主机可达、口令提示已送达：立即返回 200（前端继续走 ssh 直连 UI），认证在后台等用户输完密码。
  return s;
}

/** 已存凭据的可用形态：口令，或已读入内存的私钥。 */
type StoredAuth = { kind: "password"; password: string } | { kind: "key"; privateKey: Buffer; passphrase?: string };

/**
 * 取主机配置里已存的凭据（供终端自动登录）。
 * 返回 null = 没有可用凭据（未存口令 / 私钥读不到）→ 直接走手动输密码。
 */
async function storedAuthOf(cfg: SshHostConfig): Promise<StoredAuth | null> {
  if (cfg.auth.type === "password") {
    return cfg.auth.password ? { kind: "password", password: cfg.auth.password } : null;
  }
  try {
    return {
      kind: "key",
      privateKey: await readFile(expandHome(cfg.auth.privateKeyPath)),
      passphrase: cfg.auth.passphrase || undefined,
    };
  } catch {
    return null; // 私钥文件缺失/不可读：不阻塞，交给手动输入（用户可能改用口令）。
  }
}

/** `~` 展开（私钥路径常写作 `~/.ssh/id_rsa`）。 */
function expandHome(p: string): string {
  if (!p) return p;
  if (p === "~") return homedir();
  if (p.startsWith("~/")) return `${homedir()}${p.slice(1)}`;
  return p;
}

/**
 * 用**已存凭据**建一条独立 ssh2 连接（自动登录）。
 *
 * 与手动路径同构：都不走连接池（终端独占一条连接），known_hosts 策略一致。
 * 只解析到「认证结果」：ready → 以客户端 resolve；连接层 / 认证层失败 → reject。
 *
 * ⛔ `keyboard-interactive` 只在「**单个不回显 prompt**」时用已存口令自动应答：
 *    多 prompt 或回显 prompt 可能是用户名 / 二次验证码，猜填等于把口令发给非口令类提示；
 *    这类情况交空应答让认证失败，回落手动输入由用户自己看提示填。
 */
function connectWithStoredAuth(
  cfg: { host: string; port: number; user: string },
  hostId: string,
  auth: StoredAuth,
  knownHosts: KnownHostsEntry[],
): Promise<SshClient> {
  const client = new Client();
  return new Promise<SshClient>((resolveP, reject) => {
    let settled = false;
    /** 主机键校验失败的详细原因：ssh2 只报 "Host denied"，优先用它 reject 用户才看得到指纹。 */
    let hostKeyErr: unknown = null;
    const finish = (fn: () => void): void => {
      if (settled) return;
      settled = true;
      fn();
    };
    client.on("keyboard-interactive", (_name, _instructions, _lang, prompts, done) => {
      if (auth.kind === "password" && prompts.length === 1 && !prompts[0].echo) {
        done([auth.password]);
        return;
      }
      done(prompts.map(() => ""));
    });
    client.on("ready", () =>
      finish(() => {
        resolveP(client);
      }),
    );
    client.on("error", (err: Error) =>
      finish(() => {
        try {
          client.end();
        } catch {
          /* 已断开 */
        }
        reject(hostKeyErr ?? err);
      }),
    );
    client.on("close", () => finish(() => reject(hostKeyErr ?? new Error("ssh 连接已关闭"))));
    const verifier = (key: Buffer, verify: (ok: boolean) => void): void => {
      let err: unknown = null;
      try {
        verifyHostKey(cfg.host, cfg.port, key, knownHosts, { acceptNew: true, hostId });
      } catch (e) {
        err = e;
      }
      verify(err == null);
      if (err) hostKeyErr = err;
    };
    const opts: Record<string, unknown> = {
      host: cfg.host,
      port: cfg.port || 22,
      username: cfg.user,
      readyTimeout: 15_000,
      keepaliveInterval: 15_000,
      hostVerifier: verifier,
    };
    if (auth.kind === "password") {
      opts.password = auth.password;
      // 服务器只开 keyboard-interactive 时也需要它（上面挂了自动应答）。
      opts.tryKeyboard = true;
    } else {
      opts.privateKey = auth.privateKey;
      if (auth.passphrase) opts.passphrase = auth.passphrase;
    }
    client.connect(opts);
  });
}

/**
 * 错误是否属于**认证失败**（区别于连不通 / 主机键不匹配等连接层失败）。
 * 只有认证失败才值得「回落手动输密码」；连接层失败必须照旧抛错、不留会话。
 */
function isAuthFailure(e: unknown): boolean {
  const m = e instanceof Error ? e.message : String(e);
  return /all configured authentication methods failed|permission denied|authentication failed|encrypted private key|invalid user|invalid password|publickey/i.test(
    m,
  );
}

/** 在会话上挂接已开好的 shell 通道：接线输出 / 退出 / 自动 cd（连接池与交互式路径共用）。 */
function wireShell(s: ShellSession, stream: SshShellStream, remote: string): void {
  s.ssh = stream;
  s.authPending = null; // 认证完成，后续输入走 shell 通道。
  const onData = (d: Buffer | string): void => {
    broadcast(s, { type: "output", text: typeof d === "string" ? d : d.toString("utf8") });
  };
  stream.on("data", onData);
  // 部分实现的错误输出走 stderr 通道，一并转给前端，否则用户看不到失败原因。
  stream.stderr?.on("data", onData);
  stream.on("close", () => {
    broadcast(s, { type: "exit", code: 0 });
    endSession(s.id, s);
  });
  // 登录到目标目录。`shell` 通道已是**登录 shell**（sshd 负责加载 profile），默认就落在用户家目录，
  // 因此只有目标确实是某个子目录时才需要补一条 cd。
  // ⛔ 别对「远端根」(`/`) 发 cd：文件工作台把 `ssh://<hostId>/` 记为远端根，它语义上就是
  //    「这台主机的根」，而登录 shell 本来就在 `~`；再敲一条 `cd '/'` 既不是用户想去的目录，
  //    又会在终端里留下一条多余的可见命令（tty 会把它回显出来）。
  if (remote && remote !== "/") {
    try {
      stream.write(`cd ${shellQuoteSingle(remote)}\n`);
    } catch {
      /* 通道已断：让 close 流程收尾 */
    }
  }
}

/**
 * 手动密码认证的两阶段句柄：
 * - `handshake`：TCP/SSH 握手 + 首个口令提示送达（或判定需走 password 回退）→ resolve；
 *   连不通 / 主机键不匹配 → reject（调用方据此在 HTTP 层报错、不留会话）。
 * - `settle`：认证最终结果。口令正确（ready）→ resolve；口令错 / 连接中断 → reject。
 */
interface ManualAuthHandle {
  handshake: Promise<void>;
  /**
   * 认证通过时以**当前在用的 ssh2 客户端** resolve。
   * ⛔ password 回退（retryWithPassword）会换新客户端重连，`ready` 落在新客户端上——
   *    若 settle 只 resolve 空值，调用方只能拿闭包里的首连 client（已被 end()），
   *    对它 shell() 必报 "Not connected"，SSH 终端输完密码即死（2026-09-16 实测）。
   */
  settle: Promise<SshClient>;
}

/**
 * 发起「手动输密码」连接：独立 ssh2 客户端，`tryKeyboard` 打开键盘交互式认证。
 *
 * ⛔ **`tryKeyboard: true` 必须显式传**：ssh2 只有在它开启时才会尝试 keyboard-interactive
 *    认证方法，并把远端提示经 `'keyboard-interactive'` 事件交给我们 —— 不传则认证直接失败，
 *    用户永远见不到口令提示（ssh2 1.17 没有 `tryKeyboardAuth` 这个选项，别记错名字）。
 *
 * **认证方法回退**：并非所有 sshd 都开了 keyboard-interactive（不少只开 `password` 认证）。
 * ssh2 在「配置里没有任何可用认证方法」时会报
 * `All configured authentication methods failed` —— 据此判定「服务器不支持键盘交互式」，
 * 转而收集用户口令、带着 `password` 选项重连一轮（`passwordTried` 保证只重试一次）。
 *
 * 首个 `keyboard-interactive` 提示一到达就 resolve `handshake`：`/exec-open` 立即返回 200，
 * 此后用户敲的每个字符经 `/exec-input` → `feedAuthInput` 收集，回车时 `finish(responses)`
 * 推进认证；口令错时远端会再次弹提示（同一 handler 重新挂起 `authPending`），可反复重试。
 */
function connectForManualPassword(
  s: ShellSession,
  client: SshClient,
  cfg: { host: string; port: number; user: string },
  knownHosts: KnownHostsEntry[],
): ManualAuthHandle {
  let hsDone = false;
  let authDone = false;
  let hsResolve!: () => void;
  let hsReject!: (e: unknown) => void;
  let authResolve!: (c: SshClient) => void;
  let authReject!: (e: unknown) => void;
  const handshake = new Promise<void>((res, rej) => {
    hsResolve = res;
    hsReject = rej;
  });
  const settle = new Promise<SshClient>((res, rej) => {
    authResolve = res;
    authReject = rej;
  });

  /** 当前在用的 ssh2 客户端（password 回退会换新客户端重连，killSessionTree 要拿到最新的）。 */
  let curClient = client;
  /** 用户已提交的口令（ki 提示先到就攒着，ki handler 直接用它应答）。 */
  let password: string | null = null;
  /** 服务器给过 keyboard-interactive 提示（区分「ki 不可用」与真正的认证失败）。 */
  let kiSeen = false;
  /** 已经用 password 认证试过一轮（只回退一次，再失败就是真失败）。 */
  let passwordTried = false;
  /** 正在换客户端重连：旧客户端的 close/error 不得触发终局失败。 */
  let switching = false;
  /**
   * 已转入口令收集（password 回退等待用户输入）：旧客户端随后的 close 是预期内的
   * 善后事件（认证失败后连接必然断开），绝不能当成终局失败把会话关掉 ——
   * 否则用户还没输密码就看到「ssh 连接已关闭」。
   */
  let awaitingPassword = false;

  /** 终局失败：settle（和未 resolve 的 handshake）一并 reject。 */
  const fail = (err: unknown): void => {
    if (!authDone) {
      authDone = true;
      authReject(err);
    }
    if (!hsDone) {
      hsDone = true;
      hsReject(err);
    }
  };
  const hsSettle = (): void => {
    if (!hsDone) {
      hsDone = true;
      hsResolve();
    }
  };

  /** 主机键校验与连接池同策略（acceptNew：未知键自动接受，不匹配仍硬拒）。两轮连接共用。 */
  const hostVerifier = (key: Buffer, verify: (ok: boolean) => void): void => {
    let err: unknown = null;
    try {
      verifyHostKey(cfg.host, cfg.port, key, knownHosts, { acceptNew: true, hostId: s.hostId });
    } catch (e) {
      err = e;
    }
    verify(err == null);
    if (err) {
      // 校验失败 ssh2 会补发 'error'；这里抢先把详细原因（含指纹）带给握手层。
      fail(err);
    }
  };

  /** 给一个客户端挂上全部事件接线。ki 与 password 两轮连接共用同一套状态机。 */
  const wire = (c: SshClient): void => {
    c.on("keyboard-interactive", (_name, instructions, _lang, prompts, finish) => {
      kiSeen = true;
      // 口令已经提前敲进来了（如 password 回退路上 ki 又可用）：直接应答，不再等输入。
      if (password != null) {
        finish([password]);
        return;
      }
      hsSettle();
      broadcast(
        s,
        { type: "output", text: `\x1b[33m[ssh] 请输入 ${cfg.user}@${cfg.host} 的密码（输入不回显）：\x1b[0m` },
      );
      // 远端可能多轮 / 多 prompt（token + 密码等）：每轮重新挂起，等 /exec-input 逐行回灌。
      const text =
        (instructions ? `\r\n${instructions.replace(/\s+$/, "")}\r\n` : "") +
        prompts.map((p) => p.prompt).join("");
      broadcast(s, { type: "output", text });
      s.authPending = { prompts, finish, collected: [], idx: 0, buffer: "" };
    });
    c.on("ready", () => {
      hsSettle();
      if (!authDone) {
        authDone = true;
        // ⛔ resolve 事件源客户端本身（而非调用方闭包里的首连 client）：
        //    password 回退换新客户端重连后，ready 落在新客户端上。
        authResolve(c);
      }
    });
    c.on("error", (err: Error) => {
      // ⛔ 按「事件源是否仍是当前客户端」判断，而不是只靠 switching 时序标志：
      //    retryWithPassword 同步把 switching 复位后，被 end() 的旧 client 的 close/error
      //    事件才迟到 —— 只看标志会把新连接误判成善后事件，settle 被误 reject，
      //    SSH 终端刚输完密码就报「ssh 连接已关闭」（2026-09-16 e2e 红测实测）。
      if (c !== curClient || switching || awaitingPassword) return;
      // 服务器不支持 keyboard-interactive（只开 password 认证）→ ssh2 找不到可用认证方法。
      // 转入「收集口令 → 带 password 重连」；只回退一次。
      if (!kiSeen && !passwordTried && /authentication methods failed/i.test(err.message)) {
        hsSettle(); // 连接层是通的（错误发生在认证阶段），exec-open 可以先返回了。
        awaitingPassword = true;
        askPasswordForPasswordAuth();
        return;
      }
      // password 认证也被拒：把 ssh2 的天书翻译成人话。
      if (passwordTried && /authentication methods failed/i.test(err.message)) {
        err = new Error("口令不正确，或服务器拒绝了密码登录");
      }
      fail(err);
    });
    c.on("close", () => {
      if (c !== curClient || switching || awaitingPassword) return;
      // close 在正常断开时也会触发：已 settle 的 promise 原样忽略（done 标志位挡住）。
      fail(new Error("ssh 连接已关闭"));
    });
  };

  /** keyboard-interactive 不可用：让用户输口令，整行提交后带 password 重连。 */
  function askPasswordForPasswordAuth(): void {
    broadcast(
      s,
      { type: "output", text: `\x1b[33m[ssh] 请输入 ${cfg.user}@${cfg.host} 的密码（输入不回显，回车提交）：\x1b[0m` },
    );
    // 合成一个「单 prompt」收集器，完全复用 feedAuthInput 的缓冲 / 退格 / Ctrl+C 机制；
    // 整行提交时 finish 被调用 → 转入 password 认证重连。
    s.authPending = {
      prompts: [{ prompt: "", echo: false }],
      finish: (responses: string[]) => {
        const pwd = responses[0];
        if (!pwd) {
          // Ctrl+C / 空行：中止登录。
          broadcast(s, { type: "output", text: "\r\n\x1b[2m[ssh] 已取消登录。\x1b[0m\r\n" });
          endSession(s.id, s);
          return;
        }
        void retryWithPassword(pwd);
      },
      collected: [],
      idx: 0,
      buffer: "",
    };
  }

  /** 用收集到的口令换一个新客户端、以 password 认证重连（ssh2 不支持同一连接重试认证）。 */
  async function retryWithPassword(pwd: string): Promise<void> {
    password = pwd;
    passwordTried = true;
    awaitingPassword = false;
    switching = true;
    s.authPending = null;
    try {
      curClient.end();
    } catch {
      /* 旧连接可能已断 */
    }
    const c = new Client();
    curClient = c;
    s.sshClient = c;
    wire(c);
    switching = false;
    c.connect({
      host: cfg.host,
      port: cfg.port || 22,
      username: cfg.user,
      password: pwd,
      readyTimeout: 15_000,
      keepaliveInterval: 15_000,
      hostVerifier,
    });
  }

  wire(client);
  client.connect({
    host: cfg.host,
    port: cfg.port || 22,
    username: cfg.user,
    tryKeyboard: true,
    readyTimeout: 15_000,
    keepaliveInterval: 15_000,
    hostVerifier,
  });
  return { handshake, settle };
}

/**
 * 认证通过后开 shell 通道（自动登录与手动输密码两条路径共用 `wireShell` 接线）。
 *
 * @returns 通道是否建立成功。失败只把原因写进终端、**不结束会话** —— 由调用方决定后续：
 *   自动登录路径要据此决定是否回落手动输入，手动路径才直接收尾。
 */
async function openShellAfterAuth(s: ShellSession, client: SshClient, remote: string): Promise<boolean> {
  try {
    const stream = await new Promise<SshShellStream>((res, rej) => {
      client.shell({ term: "xterm-256color", cols: s.cols, rows: s.rows }, (err, st) =>
        err ? rej(err) : res(st as SshShellStream),
      );
    });
    wireShell(s, stream, remote);
    return true;
  } catch (e) {
    broadcast(s, { type: "output", text: `\r\n\x1b[31m[ssh] 打开远端 shell 失败：${errText(e)}\x1b[0m\r\n` });
    return false;
  }
}

/** 读取 known_hosts（与连接池同一份文件）；读不到按空表处理（acceptNew 会放行未知键）。 */
async function readKnownHostsEntries(): Promise<KnownHostsEntry[]> {
  try {
    return parseKnownHosts(await readFile(defaultKnownHostsPath(), "utf8"));
  } catch {
    return [];
  }
}

/**
 * 把 `/exec-input` 的输入在「键盘交互式认证中」截获为口令行，回灌给 ssh2 认证回调。
 *
 * ⛔ 只在 `s.authPending` 存在时调用：此时 shell 还没建好，输入绝不能写进 shell 通道。
 * 非回显 prompt（密码）不回显到终端（远端键盘交互式也会关回显），远端看到的只有真实口令。
 */
function feedAuthInput(s: ShellSession, data: string): void {
  const ap = s.authPending;
  if (!ap) return;
  for (const ch of data) {
    if (ch === "\r" || ch === "\n") {
      ap.collected.push(ap.buffer);
      ap.buffer = "";
      ap.idx += 1;
      if (ap.idx >= ap.prompts.length) {
        const finish = ap.finish;
        s.authPending = null;
        finish(ap.collected);
        return;
      }
      // 还有下一个 prompt 待填，继续等下一行。
      continue;
    }
    if (ch === "\x03") {
      // Ctrl+C：中止认证。
      s.authPending = null;
      ap.finish([]);
      return;
    }
    if (ch === "\x7f" || ch === "\b") {
      ap.buffer = ap.buffer.slice(0, -1);
      continue;
    }
    ap.buffer += ch;
    // 仅回显 echo=true 的 prompt（如 username 类）；密码 prompt 不回显。
    if (ap.prompts[ap.idx]?.echo) {
      broadcast(s, { type: "output", text: ch });
    }
  }
}

/** 错误 → 可读文本（SshError 的 message 已含 stage 语义）。 */
function errText(e: unknown): string {
  return e instanceof Error ? e.message : String(e);
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
    const s = await ensureSession(session, { kind: "local", shell, cwd });

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

  // --- 派生会话：POST /exec-open { session, kind, shell?, cwd?, hostId?, remote?, key? } ---
  // 多路复用模式下前端只开一条 /exec-mux-stream，会话本身必须由这里显式建立，
  // 否则「尚无该会话」时复用流上永远不会有它的输出。
  // 幂等：同后端参数（本机=同 shell 同 cwd；ssh=同主机同远端目录）时复用既有会话。
  // kind="ssh" → 远端 shell（手动输密码登录，见 spawnSshShellSession）。
  if (seg[0] === "exec-open" && seg.length === 1 && method === "POST") {
    const body = (await readBody(req)) as {
      session?: string;
      kind?: string;
      shell?: string;
      cwd?: string;
      hostId?: string;
      remote?: string;
      key?: string;
    } | null;
    const session = body?.session?.trim() || "default";
    const s =
      body?.kind === "ssh"
        ? await ensureSession(session, {
            kind: "ssh",
            hostId: body?.hostId?.trim() ?? "",
            remote: normalizeRemote(body?.remote),
          })
        : await ensureSession(session, {
            kind: "local",
            shell: body?.shell === "powershell" ? "powershell" : "cmd",
            cwd: resolveSessionCwd(session, body?.cwd, body?.key),
          });
    // 响应里**必须**回带实际建立的后端类型：前端据此判断「宿主是否真的支持 ssh 直连」。
    // ⛔ 不能只靠「有没有报错」——老宿主不认识 kind 字段，会把它当本机会话照建成功，
    // 前端就会以为已登录远端（实际拿到一个本机 cmd），且再也不发降级用的 ssh 命令。
    return (json(res, 200, { ok: true, data: { cwd: s.cwd, kind: s.kind } }), true);
  }

  // --- 多路复用流：GET /exec-mux-stream?key= —— **一条连接覆盖全部会话**（帧上带 session） ---
  // 保留出口（e2e / 旧客户端）；前端主链路走 /exec-mux-ws（WS 不占 HTTP 池配额）。
  if (seg[0] === "exec-mux-stream" && seg.length === 1 && method === "GET") {
    res.writeHead(200, sseHeaders());
    const sink: MuxSink = {
      send: (ev) => {
        try {
          res.write(sseFrame(ev));
        } catch {
          /* 连接已损坏，由 close 清理 */
        }
      },
      ping: () => {
        try {
          res.write(": ping\n\n");
        } catch {
          /* ignore */
        }
      },
    };
    // 快照：把已存在会话的 cwd 先补发一遍，前端据此同步已打开标签的标题。
    for (const s of sessions.values()) {
      if (!s.closed) {
        sink.send({ type: "cwd", session: s.id, cwd: s.cwd } as MuxTermStreamEvent);
      }
    }
    muxSinks.add(sink);
    ensureMuxHeartbeat();
    // 客户端断开：摘掉转发器；shell 会话保持常驻（重连后经 /exec-open 复用即可）。
    req.on("close", () => removeMuxSink(sink));
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
    // 键盘交互式手动输密码中：把输入截获为口令行，回灌认证回调（shell 尚未建好，绝不写进通道）。
    if (s.authPending) {
      feedAuthInput(s, data);
      return (json(res, 200, { ok: true, data: { ok: true } }), true);
    }
    // cd：同步服务端会话 cwd（提示符由 shell 自身输出，这里仅用于标签标题/初始目录）。
    // ⛔ 只对本机会话做：远端路径既不是本机绝对路径，`stat` 也探不到 —— 对 ssh 会话做这一步
    // 只会白跑一次本地文件系统探测，还可能把 cwd 写成畸形值。
    const cd = s.kind === "local" ? detectCd(data, s.shell) : null;
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
      // 本机 ConPTY：Enter(\r) 即时执行，粘贴多行统一换行为 \r；
      // 退格（xterm 默认发 \x7f）由控制台编辑器逐字符删除，无需字节转换。
      // 远端 pty：原样透传（见 writeToSession）。
      writeToSession(s, data);
    } catch (e) {
      return (json(res, 500, { ok: false, error: e instanceof Error ? e.message : String(e) }), true);
    }
    return (json(res, 200, { ok: true, data: { ok: true } }), true);
  }

  // --- 终端尺寸：POST /exec-resize { session, cols, rows } —— 前端 fit 后上报 ---
  // 不报尺寸的后果：远端 pty 永远停在默认 100×30，vim/top 之类全屏程序会错行乱画。
  // 会话不存在时返回 ok:false 而不是 404/500 —— 前端 fit 是高频动作，会话可能刚被关掉，
  // 报错只会刷控制台，没有可恢复动作。
  if (seg[0] === "exec-resize" && seg.length === 1 && method === "POST") {
    const body = (await readBody(req)) as { session?: string; cols?: number; rows?: number } | null;
    const session = body?.session?.trim() || "default";
    const cols = clampDim(body?.cols);
    const rows = clampDim(body?.rows);
    const s = sessions.get(session);
    if (!s || s.closed || !cols || !rows) {
      return (json(res, 200, { ok: true, data: { ok: false } }), true);
    }
    resizeSession(s, cols, rows);
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
 * 远端（ssh）引用不能进这套本机路径语义：`ssh://` 过不了 `requireAbsolute`（会报「不是绝对
 * 路径」），安静回落到本机主目录。远端会话走 `/exec-open` 的 `kind:"ssh"` 分支，不经过这里；
 * 这里只作为「老前端把 ssh 引用当 cwd 传进来」的防御。
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

/** 会话尺寸下限/上限（前端字号极小或极大时给的极端值要挡住）。 */
function clampDim(v: unknown): number {
  const n = Math.trunc(Number(v) || 0);
  if (!Number.isFinite(n) || n <= 0) return 0;
  return Math.min(Math.max(n, 2), 1000);
}

/** 远端目录规范化：保证绝对 POSIX 路径、去掉末尾斜杠（`/` 本身保留）。 */
function normalizeRemote(raw: string | undefined): string {
  const t = (raw ?? "").trim().replace(/\\/g, "/");
  if (!t) return "/";
  const abs = t.startsWith("/") ? t : `/${t}`;
  const trimmed = abs.replace(/\/+$/, "");
  return trimmed || "/";
}

/**
 * 会话「想要的后端参数」：本机（shell + cwd）或远端（hostId + remote 目录）。
 * 用它而不是零散参数，是为了让「是否需要重建会话」的判断只有一处。
 */
type SessionWant =
  | { kind: "local"; shell: TermShell; cwd: string }
  | { kind: "ssh"; hostId: string; remote: string };

/** 既有会话是否已满足请求的后端参数（否则先终止再重建）。 */
function sessionSatisfies(s: ShellSession, want: SessionWant): boolean {
  if (s.kind !== want.kind) return false;
  if (want.kind === "ssh") {
    return s.hostId === want.hostId && normalizeRemote(s.remote) === want.remote;
  }
  return s.shell === want.shell && normalizePath(s.cwd) === normalizePath(want.cwd);
}

/** 取得（必要时派生）常驻会话；后端参数变化时先终止旧会话再重建。 */
async function ensureSession(session: string, want: SessionWant): Promise<ShellSession> {
  let s = sessions.get(session);
  if (s && !sessionSatisfies(s, want)) {
    killSessionTree(s);
    endSession(session, s);
    s = undefined;
  }
  if (!s) {
    if (want.kind === "ssh") {
      if (!want.hostId) throw new FsError("bad-request", "hostId is required for an ssh terminal", 400);
      s = await spawnSshShellSession(session, want.hostId, want.remote);
    } else {
      s = await spawnShellSession(session, want.shell, want.cwd);
      sessionCwd.set(session, want.cwd);
    }
  }
  return s;
}

/* ------------------------------------------------------------------ *
 * 终端多路复用流 · WebSocket 出口：升级路由 /exec-mux-ws
 *
 * 为什么要有 WS 出口：宿主是 `node:http`（HTTP/1.1），浏览器对同一源只允许约 6 条并发
 * HTTP 连接。终端页的 mux SSE 每条占一个配额——叠加 session SSE / push 通道后逼近上限，
 * `/exec-input` 等 REST 请求被浏览器永久排队（「终端无响应 / 整页请求假死」）。
 * **WS 连接不计入该配额**：mux 输出迁移到 WS 后，终端页对 HTTP 池的占用为 0。
 * 协议：服务端 → 客户端每帧一条 JSON（同 MuxTermStreamEvent，无 `data:` 包装）；
 *       客户端 → 服务端无消息（保活靠服务端 15s 协议级 ping）。
 * ------------------------------------------------------------------ */

/** 处理一次 /exec-mux-ws 升级请求。 */
function handleExecMuxUpgrade(req: IncomingMessage, socket: Duplex, head: Buffer): void {
  const key = req.headers["sec-websocket-key"];
  if (typeof key !== "string" || !key) {
    socket.destroy();
    return;
  }
  socket.write(
    "HTTP/1.1 101 Switching Protocols\r\n" +
      "Upgrade: websocket\r\n" +
      "Connection: Upgrade\r\n" +
      `Sec-WebSocket-Accept: ${acceptKey(key)}\r\n\r\n`,
  );

  const sink: MuxSink = {
    send: (ev) => conn.sendJson(ev),
    ping: () => conn.ping(),
  };
  const conn = new WsConn(
    socket,
    () => {
      /* 客户端帧：本协议不用 */
    },
    () => removeMuxSink(sink),
  );

  // 快照：把已存在会话的 cwd 先补发一遍（与 SSE 出口一致）。
  for (const s of sessions.values()) {
    if (!s.closed) {
      sink.send({ type: "cwd", session: s.id, cwd: s.cwd } as MuxTermStreamEvent);
    }
  }
  muxSinks.add(sink);
  ensureMuxHeartbeat();
  // 升级时可能已有紧随其后的字节被读出，补喂给解析器（否则会丢首帧）。
  if (head?.length) conn.feed(head);
}

/** 升级路由：`/api/dsh-file-workbench/exec-mux-ws`（必须是精确路径）。 */
export function makeExecMuxUpgrade(): WebUpgradeRoute {
  return { path: `${PREFIX}/exec-mux-ws`, handler: handleExecMuxUpgrade };
}
