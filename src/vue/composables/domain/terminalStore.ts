/**
 * 终端状态与流式连接（模块级单例）。
 *
 * 终端从前是「常驻挂载」的独立浮窗，关闭会话即销毁。改造为 dockview 停靠面板后，
 * 面板关闭会卸载组件，因此把多终端的状态（会话/cwd/输出缓冲/流连接）下沉到这里，
 * 使其跨面板关闭/重开存活——后端 shell 进程保持运行，UI 状态也不丢。
 *
 * 输出模型：xterm.js 渲染原始 ANSI 字节，因此每个标签只保留一段累积的输出文本
 * （output），供 xterm 重放与跨面板存活；不再维护结构化行。
 */
import { ref, type Ref } from "vue";
import {
  killExec,
  openTerminalSession,
  sendTerminalInput,
  streamTerminal,
  streamTerminalMux,
  termEnv,
} from "../core/useApi";
import type { MuxTermStreamEvent } from "../../../shared/types";

export interface TermTab {
  id: string;
  /** 稳定唯一的终端名序号（关闭其他终端后不重排）。 */
  name: number;
  /** 后端终端会话 id（常驻 shell 的归属 key）。 */
  session: string;
  cwd: string;
  /** 该终端使用的 shell：cmd / powershell。 */
  shell: "cmd" | "powershell";
  /** 累积的原始输出（含 ANSI 转义），供 xterm 重放；超过上限从头截断。 */
  output: string;
  /** SSE 输出流是否在线（断开时自动重连）。 */
  connected: boolean;
  /** 当前流连接的取消控制器（stopStream 时中止）。 */
  streamAbort?: AbortController;
  /**
   * 终端建立后自动执行一次的命令（远端目录「在终端打开」→ `ssh` 登录命令）。
   * 只在首次建流时发送一次，重连不重复。
   */
  initCmd?: string;
}

/** 当前全部终端标签；跨面板开合存活。 */
export const termTabs: Ref<TermTab[]> = ref([]);
/** 当前激活的终端 id。 */
export const termActiveId: Ref<string> = ref("");

/**
 * host 进程权限态：true=管理员/root，false=普通权限，null=尚未探测。
 *
 * ConPTY 子进程继承 host 令牌，所以这个值就等于「终端里命令的权限级别」；
 * 放在模块级单例供终端浮窗与最小化 dock 共用，避免各自重复请求。
 */
export const termElevated: Ref<boolean | null> = ref(null);

/**
 * 折叠态悬浮按钮的位置（视口坐标 px）：`null` = 默认贴右缘垂直居中。
 *
 * 用户拖动后写入具体坐标，此后整个「折叠按钮 + 悬停展开的会话列表」以 left/top 定位。
 * 放在模块级单例里（而非组件内），保证面板开合 / 应用重挂载后位置不丢。
 */
export const termDockPos: Ref<{ x: number; y: number } | null> = ref(null);

/**
 * 迷你窗预览：每个终端标签最近输出的纯文本末段（已剥离 ANSI），供最小化后的小窗展示。
 *
 * 与 `output`（含 ANSI、上限 4MB）分开维护 —— 这里只保留小窗需要的末段纯文本，且走独立
 * 响应式结构，确保输出流式到达时小窗预览能实时刷新（`output` 的写入不经过响应式代理，
 * 直接绑定不会触发重渲染）。
 */
export const termPreviews: Ref<Record<string, string>> = ref({});
/** 小窗预览文本上限（字符）：保留末段即可，避免无界增长。 */
const MAX_PREVIEW = 1500;
/** 匹配 ANSI 转义序列（CSI … 终止于字母 / @ / ~）。 */
const ANSI_RE = /\x1b\[[0-9;?]*[ -/]*[@-~]/g;
/** 把一段输出追加进对应标签的小窗预览（剥离 ANSI、超长截断头部）。 */
function pushPreview(id: string, text: string): void {
  const clean = text.replace(ANSI_RE, "");
  if (!clean) return;
  const cur = termPreviews.value[id] ?? "";
  let next = cur + clean;
  if (next.length > MAX_PREVIEW) next = next.slice(next.length - MAX_PREVIEW);
  termPreviews.value = { ...termPreviews.value, [id]: next };
}
/** 取某标签的小窗预览（末段纯文本）。 */
export function termPreviewOf(id: string): string {
  return termPreviews.value[id] ?? "";
}
/** 移除某标签的小窗预览（关闭终端时调用）。 */
function clearPreview(id: string): void {
  if (termPreviews.value[id] === undefined) return;
  const next = { ...termPreviews.value };
  delete next[id];
  termPreviews.value = next;
}

/**
 * 探测一次 host 权限态（幂等：已探测成功则直接返回）。
 *
 * 失败时**保持 null**（而非写入 false）并留待下次挂载重试：探测失败多为 host 尚未就绪，
 * 若缓存成 false 会把「未知」永久显示成「普通权限」——这比暂时不显示徽标更糟。
 */
export async function loadTermElevation(): Promise<void> {
  if (termElevated.value !== null) return;
  try {
    const env = await termEnv();
    termElevated.value = env.elevated === true;
  } catch {
    /* host 未就绪 / 无该路由：保持未知，下次挂载再试 */
  }
}

/** 终端名序号：单调递增，关闭终端后不回收复用，保证每个名字唯一。 */
let nameSeq = 0;
export function nextTermName(): number {
  nameSeq += 1;
  return nameSeq;
}

/** 单个终端输出缓冲上限：超出从头部截断最早段，防止无界增长拖垮内存。 */
const MAX_OUTPUT = 4 * 1024 * 1024;
function capOutput(text: string): string {
  return text.length > MAX_OUTPUT ? text.slice(text.length - MAX_OUTPUT) : text;
}

/** 挂接在组件上的实时输出回调（组件挂载期间把新块写入激活的 xterm 实例）。 */
type OutputSink = (chunk: string) => void;
const outputSinks = new Map<string, OutputSink>();

/** 注册/注销某终端标签的实时输出回调（组件挂载/卸载时调用）。 */
export function setOutputSink(tabId: string, fn: OutputSink | null): void {
  if (fn) outputSinks.set(tabId, fn);
  else outputSinks.delete(tabId);
}

/* ---------- 输出流：所有终端共用一条多路复用 SSE ---------- */

/**
 * 复用流的取消控制器（null = 未连接）。
 *
 * ⛔ 不要退回「每个终端一条 /exec-stream」：宿主是 `node:http`（HTTP/1.1），浏览器对同一源
 * 只允许约 6 条并发连接。每终端一条 SSE 会在开几个终端后把配额占满，之后 `/exec-stream`
 * 与 `/exec-input` 被浏览器**永久排队**——表现为「后开的终端一直空白、且无法输入」。
 */
let muxAbort: AbortController | null = null;
/** 复用流使用的 host 工作区 key（首个终端建立时确定）。 */
let muxKey = "";
/** `/exec-open` 是否可用；老 host 无该端点（404）时回退到「每终端一条」的旧模型。 */
let muxSupported: boolean | null = null;

/** 按 `session` 把复用流的帧分发到对应终端标签。 */
function onMuxEvent(ev: MuxTermStreamEvent): void {
  const tab = termTabs.value.find((t) => t.session === ev.session);
  if (!tab) return;
  if (ev.type === "output") {
    tab.output = capOutput(tab.output + ev.text);
    outputSinks.get(tab.id)?.(ev.text);
    pushPreview(tab.id, ev.text);
  } else if (ev.type === "cwd") {
    tab.cwd = ev.cwd;
  } else if (ev.type === "exit") {
    // shell 退出（用户敲了 exit / 进程崩溃）：按既有行为重新派生，保持标签可用。
    tab.connected = false;
    window.setTimeout(() => void reopenShell(tab), 300);
  }
}

/** shell 退出后重新派生（与旧模型 500ms 重连即派生新 shell 的行为一致）。 */
async function reopenShell(tab: TermTab): Promise<void> {
  // 标签可能已被关闭、或已由 restartShell/startStream 重新连上：两种都不该再介入。
  if (!termTabs.value.includes(tab) || tab.connected) return;
  tab.output = "";
  termPreviews.value = { ...termPreviews.value, [tab.id]: "" };
  try {
    const r = await openTerminalSession({
      session: tab.session,
      shell: tab.shell,
      cwd: tab.cwd || undefined,
      key: muxKey,
    });
    if (r?.cwd) tab.cwd = r.cwd;
    tab.connected = true;
  } catch {
    tab.connected = false;
  }
}

/** 确保复用流已连接（幂等）：整页只此一条终端长连接；断开后 500ms 重连（后端会话常驻，重连续传）。 */
function ensureMux(): void {
  if (muxAbort) return;
  const ctrl = new AbortController();
  muxAbort = ctrl;
  const run = async (): Promise<void> => {
    if (ctrl.signal.aborted) return;
    try {
      await streamTerminalMux(onMuxEvent, { key: muxKey }, ctrl.signal);
    } catch {
      /* 网络层失败：走下方统一重连（主动 abort 时不重连） */
    }
    if (ctrl.signal.aborted) {
      if (muxAbort === ctrl) muxAbort = null;
      return;
    }
    // 后端会话常驻：重连即续传新输出。
    window.setTimeout(() => void run(), 500);
  };
  void run();
}

/** 关闭复用流（已无在连终端时调用，避免空占一条连接）。 */
function stopMux(): void {
  muxAbort?.abort();
  muxAbort = null;
}

/** 若已无在连终端，则收起复用流。 */
function maybeStopMux(): void {
  if (termTabs.value.some((t) => t.connected)) return;
  stopMux();
}

/**
 * 远端目录「在终端打开」：shell 就绪后自动敲入 ssh 登录命令。
 * 只发一次——后续重连是同一会话的续传，不该再登录一次，否则远端会多出一个 ssh 连接。
 */
function sendInitCmd(tab: TermTab): void {
  const initCmd = tab.initCmd;
  if (!initCmd) return;
  tab.initCmd = undefined;
  window.setTimeout(() => {
    if (tab.connected) void sendTerminalInput(tab.session, `${initCmd}\r`);
  }, 800);
}

/** 旧模型回退：每个终端各占一条 /exec-stream（仅在老 host 缺少 /exec-open 时使用）。 */
function legacyStream(tab: TermTab, key?: string): void {
  const ctrl = new AbortController();
  tab.streamAbort = ctrl;
  const connect = async (): Promise<void> => {
    if (!tab.connected || ctrl.signal.aborted) return;
    try {
      await streamTerminal(
        (ev) => onMuxEvent({ ...ev, session: tab.session }),
        { session: tab.session, cwd: tab.cwd || undefined, key, shell: tab.shell },
        ctrl.signal,
      );
    } catch {
      /* 网络层失败：走下方统一重连 */
    }
    if (tab.connected && !ctrl.signal.aborted) {
      window.setTimeout(() => void connect(), 500);
    } else {
      tab.connected = false;
    }
  };
  sendInitCmd(tab);
  void connect();
}

/**
 * 建立终端标签的输出流：优先「共用一条复用流 + `/exec-open` 显式建会话」，
 * 老 host（无 `/exec-open`）自动回退到「每终端一条 `/exec-stream`」。
 */
export function startStream(tab: TermTab, key?: string): void {
  if (tab.connected) return;
  tab.connected = true;
  if (key) muxKey = key;
  if (muxSupported === false) {
    legacyStream(tab, key);
    return;
  }
  void openTerminalSession({
    session: tab.session,
    shell: tab.shell,
    cwd: tab.cwd || undefined,
    key,
  })
    .then((r) => {
      muxSupported = true;
      if (r?.cwd) tab.cwd = r.cwd;
      sendInitCmd(tab);
      ensureMux();
    })
    .catch((e: unknown) => {
      // 404 = 老 host 没有该端点：永久回退到旧模型；其余错误只影响本次（下次仍试复用流）。
      if ((e as { status?: number } | null)?.status === 404) muxSupported = false;
      legacyStream(tab, key);
    });
}

/* ---------- 输入合并：xterm 每敲一个字符触发一次 onData，逐字符 POST 会刷屏 ---------- */

/**
 * 合并窗口（ms）：窗口内到达的按键拼成一个请求再发。
 * 16ms 约一帧，远低于人类可感知的输入延迟（约 100ms），但能合并按键自动重复等连续输入。
 */
const INPUT_FLUSH_MS = 16;
/** 缓冲区达到该长度立即发送（粘贴大段文本时不再等待窗口）。 */
const INPUT_FLUSH_LEN = 512;
/** 需要立即发送的控制字符：回车（执行）、Ctrl+C（中断）、Ctrl+D / Ctrl+Z（结束输入）。 */
const INPUT_IMMEDIATE = /[\r\n\x03\x04\x1a]/;

interface InputQueue {
  /** 待发送输入（按到达顺序拼接）。 */
  pending: string;
  /** 合并窗口计时器 id（0 表示未排程）。 */
  timer: number;
  /**
   * 是否有请求在途。HTTP 不保证跨连接的到达顺序：并发 POST 可能乱序，
   * 输入错序会直接打乱命令，因此在途期间不发送下一段，严格串行。
   */
  inFlight: boolean;
}

/** 每个后端会话一个输入队列（键为 tab.session）。 */
const inputQueues = new Map<string, InputQueue>();

function inputQueue(session: string): InputQueue {
  let q = inputQueues.get(session);
  if (!q) {
    q = { pending: "", timer: 0, inFlight: false };
    inputQueues.set(session, q);
  }
  return q;
}

/** 立即发送队列中的输入；无数据或已有请求在途时保持排队（在途回来后会自动补发）。 */
function flushInput(session: string): void {
  const q = inputQueue(session);
  if (q.timer) {
    window.clearTimeout(q.timer);
    q.timer = 0;
  }
  if (!q.pending || q.inFlight) return;
  const data = q.pending;
  q.pending = "";
  q.inFlight = true;
  void sendTerminalInput(session, data)
    .catch(() => {
      /* 会话已销毁/网络抖动：静默丢弃（输入失败无补救手段） */
    })
    .finally(() => {
      const cur = inputQueues.get(session);
      if (!cur) return;
      cur.inFlight = false;
      if (cur.pending) flushInput(session);
      else if (!cur.timer) inputQueues.delete(session);
    });
}

/**
 * 终端输入：合并按键后批量写入后端 shell（供 xterm 的 onData 调用）。
 *
 * xterm 对每个按键单独触发 onData，直接转发会变成「敲一个字母一个 HTTP 请求」，
 * 网络面板刷屏且可能因并发而错序。这里用「合并窗口 + 立即规则 + 串行发送」三件套：
 * 普通按键在 16ms 窗口内合并，回车/中断/大段粘贴立即发送，同一会话同时只允许一个在途请求。
 */
export function queueTerminalInput(session: string, data: string): void {
  if (!data) return;
  // 流未连接（shell 未就绪/重连中）时丢弃，与原先「未连接不发送」的行为一致。
  const tab = termTabs.value.find((t) => t.session === session);
  if (tab && !tab.connected) return;
  const q = inputQueue(session);
  q.pending += data;
  if (INPUT_IMMEDIATE.test(data) || q.pending.length >= INPUT_FLUSH_LEN) {
    flushInput(session);
    return;
  }
  if (!q.timer) q.timer = window.setTimeout(() => flushInput(session), INPUT_FLUSH_MS);
}

/** 强制发送某会话的待发输入（切标签/卸载前调用，避免丢掉最后几个字符）。 */
export function flushTerminalInput(session: string): void {
  flushInput(session);
}

/**
 * 丢弃某会话的待发输入（销毁会话时调用：后端进程即将终止，再发过去只会 404）。
 * 不传 session 则清空全部会话队列。
 */
export function dropTerminalInput(session?: string): void {
  if (session) {
    const q = inputQueues.get(session);
    if (q && q.timer) window.clearTimeout(q.timer);
    inputQueues.delete(session);
    return;
  }
  for (const [key, q] of inputQueues) {
    if (q.timer) window.clearTimeout(q.timer);
    inputQueues.delete(key);
  }
}

/** 断开终端标签的输出流（不杀后端 shell；closeTab/restartShell/closeAll 时调用）。 */
export function stopStream(tab: TermTab): void {
  tab.connected = false;
  tab.streamAbort?.abort();
  tab.streamAbort = undefined;
  // 流已断、会话即将被 kill：缓冲里未发出的按键不再有意义。
  dropTerminalInput(tab.session);
}

/** 重启终端 shell：换 shell 或重置会话时调用，先断开流并终止后端进程，再以新配置重连。 */
export async function restartShell(tab: TermTab, key?: string): Promise<void> {
  stopStream(tab);
  tab.output = "";
  termPreviews.value = { ...termPreviews.value, [tab.id]: "" };
  await killExec(tab.session).catch(() => {});
  startStream(tab, key);
}

/** 关闭终端标签：断开流 + 终止后端常驻进程 + 移除标签。 */
export function closeTermTab(id: string): void {
  const idx = termTabs.value.findIndex((t) => t.id === id);
  const tab = termTabs.value[idx];
  if (!tab) return;
  stopStream(tab);
  void killExec(tab.session).catch(() => {});
  termTabs.value.splice(idx, 1);
  clearPreview(id);
  maybeStopMux();
  if (termActiveId.value === id) {
    const next = termTabs.value[idx] ?? termTabs.value[idx - 1] ?? termTabs.value[0];
    termActiveId.value = next ? next.id : "";
  }
}

/** 关闭全部终端：断开所有流 + 终止所有后端常驻进程 + 清空标签（面板/浮窗整体关闭时调用）。 */
export async function closeAllTerminals(): Promise<void> {
  const tabs = termTabs.value.slice();
  termTabs.value = [];
  termActiveId.value = "";
  termPreviews.value = {};
  // 已无终端：收起复用流，不留空连接。
  stopMux();
  await Promise.all(
    tabs.map((t) => {
      stopStream(t);
      return killExec(t.session).catch(() => {});
    }),
  );
}
