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
import { killExec, sendTerminalInput, streamTerminal } from "../core/useApi";

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
}

/** 当前全部终端标签；跨面板开合存活。 */
export const termTabs: Ref<TermTab[]> = ref([]);
/** 当前激活的终端 id。 */
export const termActiveId: Ref<string> = ref("");

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

/** 建立终端标签的 SSE 输出流；意外断开（shell 退出/网络抖动）后自动重连，后端会续派新 shell。 */
export function startStream(tab: TermTab, key?: string): void {
  if (tab.connected) return;
  tab.connected = true;
  const ctrl = new AbortController();
  tab.streamAbort = ctrl;
  const connect = async (): Promise<void> => {
    if (!tab.connected || ctrl.signal.aborted) return;
    try {
      await streamTerminal(
        (ev) => {
          if (ev.type === "output") {
            tab.output = capOutput(tab.output + ev.text);
            outputSinks.get(tab.id)?.(ev.text);
          } else if (ev.type === "cwd") {
            tab.cwd = ev.cwd;
          }
        },
        { session: tab.session, cwd: tab.cwd || undefined, key, shell: tab.shell },
        ctrl.signal,
      );
    } catch {
      /* 网络层失败：走下方统一重连（主动 abort 时不重连） */
    }
    if (tab.connected && !ctrl.signal.aborted) {
      // 后端会话常驻：重连即续传新输出 / 派生新 shell。
      window.setTimeout(() => void connect(), 500);
    } else {
      tab.connected = false;
    }
  };
  void connect();
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
  await Promise.all(
    tabs.map((t) => {
      stopStream(t);
      return killExec(t.session).catch(() => {});
    }),
  );
}
