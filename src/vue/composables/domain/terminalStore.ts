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
  resizeTerminalSession,
  savePersist,
  sendTerminalInput,
  streamTerminal,
  streamTerminalMux,
  termEnv,
} from "../core/useApi";
import type { MuxTermStreamEvent } from "../../../shared/types";
import { t } from "../core/i18n";
import { toast } from "../core/toast";
import {
  officialTermApi,
  officialTermAvailable,
  type OtDataDetail,
  type OtStatusDetail,
} from "./officialTerm";

/** 远端 ssh 会话信息（有值即「该终端登录在远端」）。 */
export interface TermSshInfo {
  /** 主机 id（`ssh://<hostId>/…` 里的那段）。 */
  hostId: string;
  /** 登录后 cd 到的远端目录（POSIX 绝对路径）。 */
  remote: string;
  /** 展示标签（主机名或 `user@host`）：建会话时固化，避免主机列表刷新后标签变成裸 id。 */
  label: string;
}

export interface TermTab {
  id: string;
  /** 稳定唯一的终端名序号（关闭其他终端后不重排）。 */
  name: number;
  /** 后端终端会话 id（常驻 shell 的归属 key）。 */
  session: string;
  cwd: string;
  /** 该终端使用的 shell：cmd / powershell。**ssh 会话该字段无意义**（远端 shell 由 sshd 决定）。 */
  shell: "cmd" | "powershell";
  /**
   * 远端 ssh 会话：由宿主用**已配置的凭据**（口令/私钥）开 ssh2 shell 自动登录，
   * 不依赖本机 ssh 客户端、也不会弹口令提示。
   * 直连失败后**保留**该字段（供页脚「重连」重试），同时把 `sshDegraded` 置真。
   */
  ssh?: TermSshInfo;
  /**
   * ssh 直连已降级运行：当前这个会话其实是**本机 shell** 在跑 `fallbackCmd` 里的 ssh 命令。
   * 用于 UI 区分（徽标/文案按本机显示，但仍提供「重连」重试直连）。
   */
  sshDegraded?: boolean;
  /** ssh 直连失败降级时，本机 shell 里要敲的 ssh 登录命令（仅 ssh 标签用）。 */
  fallbackCmd?: string;
  /**
   * 输出后端：`"official"` = 宿主官方终端（`ctx.webTerminals`，**仅本机 shell**，
   * 工作目录固定为会话工作区；PTY 生命周期/重连/清理全归官方）；缺省 = 插件自建
   * exec 会话（/exec-open + 复用流）。SSH 标签永远是自建后端（官方没有远端主机概念）。
   */
  backend?: "official";
  /** 累积的原始输出（含 ANSI 转义），供 xterm 重放；超过上限从头截断。 */
  output: string;
  /** SSE 输出流是否在线（断开时自动重连）。 */
  connected: boolean;
  /** 当前流连接的取消控制器（stopStream 时中止）。 */
  streamAbort?: AbortController;
  /**
   * 终端建立后自动执行一次的命令（本机 shell 场景：远端目录「在终端打开」→ `ssh` 登录命令）。
   * 只在首次建流时发送一次，重连不重复。**ssh 直连成功时不会发**（已自动登录）。
   */
  initCmd?: string;
  /**
   * 本次窗口应当在挂载后**主动获取键盘焦点**（由用户显式动作打开时置真）。
   *
   * ⛔ 不加这个的后果就是「敲键盘完全没反应」：右键「在终端打开」是**在文件列表上**触发的，
   * 焦点仍留在列表/body，而 xterm 只有拿到焦点才会把按键交给 `onData`；标题栏又因拖动
   * 而 `mousedown.prevent`（反而更不聚焦）—— 用户看到窗口弹出来了、提示符也在，就是打不出字。
   * 开机还原出来的窗口不抢焦点（页面刚加载就把焦点从用户手上夺走很讨厌）。
   */
  focusPending?: boolean;
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
 * 已最小化的终端标签集合（**每个窗口独立**最小化 / 还原）。
 *
 * 此前是一个全局布尔（`wb.termMinimized`），导致「最小化任一个 = 全部一起最小化、
 * 还原 = 全部一起还原」；这里改为按 tab id 记录，各窗口互不影响。
 * 整体替换（不可变）以保持响应式。
 */
export const termMinimized: Ref<Record<string, true>> = ref({});
/** 某终端窗口是否已最小化。 */
export function isTermMinimized(id: string): boolean {
  return termMinimized.value[id] === true;
}
/** 最小化某终端窗口（仅本窗口，不影响其它）。 */
export function minimizeTerminal(id: string): void {
  if (termMinimized.value[id]) return;
  termMinimized.value = { ...termMinimized.value, [id]: true };
}
/** 还原某终端窗口（仅本窗口）。 */
export function restoreTerminal(id: string): void {
  if (!termMinimized.value[id]) return;
  const next = { ...termMinimized.value };
  delete next[id];
  termMinimized.value = next;
}
/** 清空全部最小化标记（关闭全部终端 / 整窗退出时调用）。 */
export function clearTermMinimized(): void {
  if (Object.keys(termMinimized.value).length) termMinimized.value = {};
}

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
/** 把一段输出追加进对应标签的小窗预览（剥离 ANSI、超长截断头部）。
 *  整段只剩空白（ConPTY 清屏 / 光标移动常产生）时直接丢弃，避免预览尾部堆一串空行。 */
function pushPreview(id: string, text: string): void {
  const clean = text.replace(ANSI_RE, "");
  if (!clean.trim()) return;
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

/**
 * 跨 bundle 单例槽：关掉「上一份 bundle」遗留的 mux EventSource。
 *
 * ⛔ DSH 有可能**重新注入本 bundle**（页面存活期间再插一次 `<script>`，见
 * `sessionSse.ts` 里同款坑的注释）。bundle 一换，本模块的 `muxAbort` / `ensureMux`
 * 全部重置，而**旧实例的 mux EventSource 不会因为失去引用就被回收** —— 它是一条活的
 * HTTP 长连接。没人关它 → 每注入一次就多一条长连接，同源只有约 6 条配额，攒够了整个
 * 前端被排队卡死：后发的 `/exec-input` 一直 pending（表现为「敲键盘无响应」），shell
 * 切换时的 `/exec-open` 也拿不到连接（表现为「切换无效」）。
 * 故把自己的关闭入口登记到 `globalThis`：新实例开工前先关掉旧实例的。
 * （`sessionSse.ts` 已用同样手法保护了 `/stream/session`，这里补齐终端复用流这一条。）
 */
const MUX_SSE_SLOT = "__DSH_FW_TERM_MUX_SSE__";
interface MuxSlot {
  dispose: () => void;
}

/** 接管全局槽：关掉「上一份 bundle」留下的 mux 连接（同 bundle 重复调用时槽是同对象，跳过）。 */
function adoptMuxSlot(): void {
  const g = globalThis as unknown as Record<string, unknown>;
  const prev = g[MUX_SSE_SLOT] as MuxSlot | undefined;
  if (prev && typeof prev.dispose === "function") {
    try {
      prev.dispose();
    } catch {
      /* 旧实例可能已随 DOM 一起失效，忽略 */
    }
  }
}

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
    tab.connected = false;
    // 远端会话结束（用户敲 exit / 连接断开）**不自动重连**：自动重连等于「退出登录后立刻又被
    // 登录回去」，用户会以为「退不出去」。改为写一行提示，由页脚的「重连」按钮显式触发。
    // 本机会话沿用既有行为：重新派生 shell，保持标签可用。
    if (tab.ssh) {
      pushPreview(tab.id, "\n[ssh] session closed\n");
      tab.output = capOutput(tab.output + "\r\n\x1b[33m[ssh] session closed — 点「重连」重新登录\x1b[0m\r\n");
      return;
    }
    window.setTimeout(() => void reopenShell(tab), 300);
  }
}

/** 错误 → 可读文本（ApiError 的 message 里带宿主给的原因）。 */
function errText(e: unknown): string {
  const m = (e as { message?: string } | null)?.message;
  return m || String(e);
}

/**
 * 建立一个会话的后端，返回宿主持有的工作目录。
 *
 * 三条路径，按优先级：
 * 1. **ssh 直连**（`tab.ssh` 有值）：宿主用已存凭据开 ssh2 shell → 自动登录，无口令提示；
 *    成功以宿主回执的 `kind === "ssh"` 为准（老宿主会静默退化成本机会话，见下）；
 * 2. **ssh 失败降级**：把原因写进终端，置 `sshDegraded`，再起本机 shell 并自动敲 `fallbackCmd`
 *    里的 ssh 登录命令 —— 至少让用户能手动输口令进远端，而不是对着一个死终端；
 * 3. **本机 shell**：原有行为。
 */
async function openSessionFor(tab: TermTab, key?: string): Promise<{ cwd: string }> {
  if (tab.ssh) {
    const info = tab.ssh;
    try {
      const r = await openTerminalSession({
        session: tab.session,
        kind: "ssh",
        hostId: info.hostId,
        remote: info.remote,
        key,
      });
      // 握手校验：宿主必须回带 kind="ssh"。老宿主（或未重启的宿主进程）不认识 kind 字段，
      // 会把它当本机会话照建成功 —— 不校验就会「以为登录了远端，其实是个本机 cmd」，
      // 且因为没报错，降级分支永远不会触发，用户看到一个没有 ssh 命令的裸 cmd。
      if (r?.kind !== "ssh") throw new Error("宿主未启用远端终端（缺少 /exec-open 的 kind 支持），请重启 dsh web");
      tab.sshDegraded = false;
      return r;
    } catch (e) {
      const msg = errText(e);
      tab.output = capOutput(
        tab.output + `\r\n\x1b[33m[ssh] 自动登录 ${info.label} 失败：${msg}\x1b[0m\r\n` +
          `\x1b[2m[ssh] 已回退到本机 ssh 客户端，请手动输入口令；修好后可用页脚「重连」再试直连。\x1b[0m\r\n`,
      );
      pushPreview(tab.id, `[ssh] auto login failed: ${msg}\n`);
      tab.sshDegraded = true;
      tab.cwd = "";
      const r = await openTerminalSession({ session: tab.session, kind: "local", shell: tab.shell, key });
      // 本机 shell 是新起的，降级用的 ssh 命令必须**重新武装**再敲（不能沿用已消费的 initCmd）。
      tab.initCmd = tab.fallbackCmd;
      sendInitCmd(tab);
      return r;
    }
  }
  const r = await openTerminalSession({
    session: tab.session,
    kind: "local",
    shell: tab.shell,
    cwd: tab.cwd || undefined,
    key,
  });
  sendInitCmd(tab);
  return r;
}

/** 会话结束后重新建立（本机 shell 重新派生；ssh 已断开时不再自动调用）。 */
async function reopenShell(tab: TermTab): Promise<void> {
  // 标签可能已被关闭、或已由 restartShell/startStream 重新连上：两种都不该再介入。
  if (!termTabs.value.includes(tab) || tab.connected) return;
  tab.output = "";
  termPreviews.value = { ...termPreviews.value, [tab.id]: "" };
  if (tab.backend === "official") {
    // 官方终端重开 = 关掉已退出的旧进程，起新官方终端（同 key 先 close 再 create）。
    officialTermApi()?.close(tab.id);
    tab.connected = true;
    void attachOfficial(tab);
    return;
  }
  try {
    const r = await openSessionFor(tab, muxKey || undefined);
    if (r?.cwd) tab.cwd = r.cwd;
    tab.connected = true;
    ensureMux();
  } catch {
    tab.connected = false;
  }
}

/** 确保复用流已连接（幂等）：整页只此一条终端长连接；断开后 500ms 重连（后端会话常驻，重连续传）。 */
function ensureMux(): void {
  if (muxAbort) return;
  // 接管全局槽：关掉上一份 bundle 遗留的 mux 连接（见 MUX_SSE_SLOT 注释），避免重复注入累积长连接。
  adoptMuxSlot();
  const ctrl = new AbortController();
  muxAbort = ctrl;
  const selfSlot: MuxSlot = { dispose: () => stopMux() };
  (globalThis as unknown as Record<string, unknown>)[MUX_SSE_SLOT] = selfSlot;
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
    if (!tab.connected) return;
    if (tab.backend === "official") officialTermApi()?.write(tab.id, `${initCmd}\r`);
    else void sendTerminalInput(tab.session, `${initCmd}\r`);
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

/* ---------- 官方终端后端（ctx.webTerminals，经 OfficialTerminalBridge）---------- */

/** 官方桥事件是否已挂。window 级监听全模块只挂一份，按 detail.tag 分发到标签。 */
let otListenersBound = false;

/** 官方后端的标签查找：tag 即 tab.id，且只认 official 后端（防串线）。 */
function otTabOf(tag: string): TermTab | undefined {
  return termTabs.value.find((t) => t.id === tag && t.backend === "official");
}

/** 官方桥输出帧 → 与复用流 output 分支同款的「三写」（缓冲/xterm sink/预览）。 */
function onOtData(d: OtDataDetail): void {
  const tab = otTabOf(d.tag);
  if (!tab) return;
  // snapshot（首连/重连第一帧）按普通文本写入即可：首连时 xterm 为空，写入即正确；
  // 重连时官方整机快照含定位重绘序列，追加写入后终端会自我校正。
  tab.output = capOutput(tab.output + d.text);
  outputSinks.get(tab.id)?.(d.text);
  pushPreview(tab.id, d.text);
}

/** 官方桥状态 → 驱动 tab.connected / cwd / 自动重开。 */
function onOtStatus(d: OtStatusDetail): void {
  const tab = otTabOf(d.tag);
  if (!tab) return;
  if (d.cwd && d.cwd !== tab.cwd) tab.cwd = d.cwd;
  if (d.exited) {
    tab.connected = false;
    // 与自建后端的本机行为对齐：进程退出后自动重开一个，标签常驻可用。
    // （官方语义是「退出不重建」，重开 = 新官方终端，见 reopenShell 的 official 分支。）
    window.setTimeout(() => void reopenShell(tab), 300);
    return;
  }
  if (d.phase === "connected" && !tab.connected) {
    tab.connected = true;
    // initCmd（「在终端打开」的自动命令）等 shell 就绪后再敲，与 sendInitCmd 同一节拍。
    sendInitCmd(tab);
  } else if (d.phase === "failed" && d.error) {
    const line = `\r\n\x1b[33m[term] ${d.error}\x1b[0m\r\n`;
    tab.output = capOutput(tab.output + line);
    outputSinks.get(tab.id)?.(line);
  }
  // disconnected/connecting 不动 connected：官方的 RemoteStream 自己重连并以 snapshot 续传，
  // 期间把 connected 打假只会让用户这几十毫秒里的按键被队列丢弃。
}

/** 挂官方桥事件（幂等）。 */
function ensureOtListeners(): void {
  if (otListenersBound || typeof window === "undefined") return;
  otListenersBound = true;
  window.addEventListener("dshfw-ot-data", (ev) => onOtData((ev as CustomEvent<OtDataDetail>).detail));
  window.addEventListener("dshfw-ot-status", (ev) => onOtStatus((ev as CustomEvent<OtStatusDetail>).detail));
}

/**
 * 建立官方终端：先挂事件监听再 create（数据从 create 内部的订阅就开始推，顺序反了丢首帧）。
 * create 中途标签被关时补一个 close，避免留下无主进程占会话终端配额。
 */
async function attachOfficial(tab: TermTab): Promise<void> {
  const api = officialTermApi();
  if (!api) {
    // 桥中途消失（bundle 重注入窗口期）：回退插件自建后端。
    tab.backend = undefined;
    tab.connected = false;
    startStream(tab);
    return;
  }
  ensureOtListeners();
  // 官方终端固定在**会话工作区**开 shell（TerminalCreateRequest 没有 cwd 字段），
  // tab.cwd 以官方回执为准；tab.cwd 里的旧值只影响 UI 首帧面包屑，一帧即被纠正。
  const r = await api.create(tab.id, { cols: 80, rows: 24 }).catch(() => null);
  if (r === null) {
    tab.backend = undefined;
    tab.connected = false;
    startStream(tab);
    return;
  }
  if (!termTabs.value.includes(tab)) {
    api.close(tab.id);
    return;
  }
  if (r.cwd) tab.cwd = r.cwd;
}

/**
 * 建立终端标签的输出流。后端选择（按优先级）：
 *
 * 0. **官方终端**（`backend = "official"`）：非 ssh 标签且宿主官方终端服务可用时，
 *    进程层交给 `ctx.webTerminals`（PTY 创建/重连/清理全归官方，见 OfficialTerminalBridge）。
 *    SSH 标签不适用——官方只有本地 shell——继续走插件自建通道；
 * 1. **共用一条复用流 + `/exec-open` 显式建会话**，老 host（无 `/exec-open`）自动回退
 *    「每终端一条 `/exec-stream`」。会话后端（本机 shell / 远端 ssh）的选择在
 *    `openSessionFor` 里；本函数只管「建立 + 挂流」。
 */
export function startStream(tab: TermTab, key?: string): void {
  if (tab.connected) return;
  tab.connected = true;
  if (key) muxKey = key;
  if (!tab.ssh && officialTermAvailable()) {
    tab.backend = "official";
    void attachOfficial(tab);
    return;
  }
  tab.backend = undefined;
  if (muxSupported === false) {
    legacyStream(tab, key);
    return;
  }
  // ⛔ 先挂复用流、再建会话：顺序反了会把「会话已建立 → 流才挂上」这段窗口里的输出全丢掉。
  //    本机丢的是首屏提示符；ssh 更明显 —— 登录横幅 + 自动 cd 的回显都在这段里（登录要
  //    100ms~数秒）。复用流端点本身不建会话（只回一次快照 cwd），提前挂上没有任何副作用。
  ensureMux();
  void openSessionFor(tab, key)
    .then((r) => {
      muxSupported = true;
      if (r?.cwd) tab.cwd = r.cwd;
    })
    .catch((e: unknown) => {
      // 404 = 老 host 没有该端点：永久回退到旧模型（那条没用的复用流一并收掉，别留着占配额）。
      // 其余错误只影响本次（ssh 连不上已由 openSessionFor 内部降级处理，不会走到这里）。
      if ((e as { status?: number } | null)?.status === 404) {
        muxSupported = false;
        if (!termTabs.value.some((t) => t.connected)) stopMux();
      }
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
  if (!q.pending) return;
  // 官方后端：write 是命令式且官方内部已串行化，无 HTTP 在途概念，直接发完清队。
  const tab = termTabs.value.find((t) => t.session === session);
  if (tab?.backend === "official") {
    const data = q.pending;
    q.pending = "";
    officialTermApi()?.write(tab.id, data);
    if (!q.pending && !q.timer) inputQueues.delete(session);
    return;
  }
  if (q.inFlight) return;
  const data = q.pending;
  q.pending = "";
  q.inFlight = true;
  void sendTerminalInput(session, data)
    .catch((e: unknown) => {
      onInputFailed(session, e);
    })
    .finally(() => {
      const cur = inputQueues.get(session);
      if (!cur) return;
      cur.inFlight = false;
      if (cur.pending) flushInput(session);
      else if (!cur.timer) inputQueues.delete(session);
    });
}

/** 同一会话「输入写失败」提示的最小间隔（ms）：连敲一串键只提示一次。 */
const INPUT_FAIL_NOTICE_MS = 3000;
/** session → 上次提示时刻。 */
const inputFailNoted = new Map<string, number>();
/** 正在重建会话的 session 集合（连续按键会同时触发多次恢复，必须防重入）。 */
const sessionRecovering = new Set<string>();

/**
 * 输入写入失败的处理：**绝不静默**。
 *
 * ⛔ 原先这里是个空 catch（「输入失败无补救手段」），后果是 `/exec-input` 一旦失败 ——
 *    宿主重启过（→404）、会话被回收、403/500 —— 用户看到的就是「敲键盘完全没反应，
 *    连一点报错都没有」，既像没聚焦、又像卡死，完全无从判断。这正是本项目「静默失败
 *    最难查」那条教训的复发点。现在：原因写进终端 + 限流 toast；
 *    若是「后端已经没有这个会话了」(404)，顺手把会话重建起来，让输入恢复可用。
 */
function onInputFailed(session: string, e: unknown): void {
  const tab = termTabs.value.find((t) => t.session === session);
  if (!tab) return;
  const msg = errText(e);
  const now = Date.now();
  if (now - (inputFailNoted.get(session) ?? 0) >= INPUT_FAIL_NOTICE_MS) {
    inputFailNoted.set(session, now);
    const line = `\r\n\x1b[31m[term] ${t("termInputFailed", { msg })}\x1b[0m\r\n`;
    // 双写：终端里可见（用户就在看它），toast 兜住「窗口被最小化 / 不在视口内」的情况。
    tab.output = capOutput(tab.output + line);
    outputSinks.get(tab.id)?.(line);
    toast("warning", t("termInputFailed", { msg }));
  }
  // 会话已不在后端（宿主重启 / 被回收）：重建它，否则这个窗口会一直「打不进字」。
  if ((e as { status?: number } | null)?.status === 404) void recoverSession(tab);
}

/**
 * 重建一个已失效的后端会话：先断开当前流（`connected=false`，否则 reopenShell 会直接返回），
 * 再按原配置（含 ssh 直连）重开。重入安全 —— 用户连敲时会有多个 404 同时在飞。
 */
async function recoverSession(tab: TermTab): Promise<void> {
  if (sessionRecovering.has(tab.session) || !termTabs.value.includes(tab)) return;
  sessionRecovering.add(tab.session);
  try {
    stopStream(tab);
    await reopenShell(tab);
  } finally {
    sessionRecovering.delete(tab.session);
  }
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
  // 官方后端：只摘输出流，进程保留（同官方 unmount 语义）；杀进程由 killTabBackend 负责。
  if (tab.backend === "official") officialTermApi()?.detach(tab.id);
  tab.streamAbort?.abort();
  tab.streamAbort = undefined;
  // 流已断、会话即将被 kill：缓冲里未发出的按键不再有意义。
  dropTerminalInput(tab.session);
  // 会话重建后后端 pty 会回到默认尺寸，尺寸记忆必须一并清掉，否则重连后不会再上报。
  termSizes.delete(tab.session);
}

/** 终止一个标签的后端进程：官方后端走桥的 close，自建后端走 /exec-kill。 */
function killTabBackend(tab: TermTab): Promise<void> {
  if (tab.backend === "official") {
    officialTermApi()?.close(tab.id);
    return Promise.resolve();
  }
  return killExec(tab.session).catch(() => {}) as Promise<void>;
}

/* ---------- 伪终端尺寸上报 ---------- */

/**
 * 各会话最近一次上报的尺寸（`${cols}x${rows}`）。用于**去重**。
 *
 * 必要性：`fit()` 由 ResizeObserver 驱动，窗口拖动时每秒能触发几十次；不去重就是每秒几十个
 * POST。远端 pty 尤其在意——尺寸没变还 `setWindow` 会让全屏程序反复重绘。
 */
const termSizes = new Map<string, string>();

/**
 * 上报某会话的伪终端尺寸（前端 xterm `fit()` 之后调用）。
 *
 * 不上报的后果：后端 pty 永远停在默认 100×30，`vim` / `top` / `less` 这类全屏程序会错行乱画、
 * 光标位置漂移，而普通命令输出看着又「基本正常」，很难联想到是尺寸没同步。
 */
export function resizeTerminal(session: string, cols: number, rows: number): void {
  if (!cols || !rows) return;
  const sig = `${cols}x${rows}`;
  if (termSizes.get(session) === sig) return;
  termSizes.set(session, sig);
  // 官方后端：尺寸走桥的 resize（内部调官方 view.resize）。
  const tab = termTabs.value.find((t) => t.session === session);
  if (tab?.backend === "official") {
    officialTermApi()?.resize(tab.id, cols, rows);
    return;
  }
  void resizeTerminalSession(session, cols, rows).catch(() => {
    /* 会话可能刚被关闭（老 host 还可能是 404）：静默失败，下次 fit 再试 */
  });
}

/** 重启终端 shell：换 shell 或重置会话时调用，先断开流并终止后端进程，再以新配置重连。 */
export async function restartShell(tab: TermTab, key?: string): Promise<void> {
  const wasOfficial = tab.backend === "official";
  stopStream(tab);
  tab.output = "";
  termPreviews.value = { ...termPreviews.value, [tab.id]: "" };
  await killTabBackend(tab);
  // 官方进程已被 close：换 shell 对官方终端无意义（shell 由官方偏好决定），
  // 直接按原后端重开一个；自建后端沿用原逻辑。
  if (wasOfficial) tab.backend = undefined;
  startStream(tab, key);
}

/** 关闭终端标签：断开流 + 终止后端常驻进程 + 移除标签。 */
export function closeTermTab(id: string): void {
  const idx = termTabs.value.findIndex((t) => t.id === id);
  const tab = termTabs.value[idx];
  if (!tab) return;
  stopStream(tab);
  void killTabBackend(tab);
  termTabs.value.splice(idx, 1);
  clearPreview(id);
  // 关掉的窗口若处于最小化态，清掉它的标记，避免残留在 dock 列表里。
  restoreTerminal(id);
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
  clearTermMinimized();
  // 已无终端：收起复用流，不留空连接。
  stopMux();
  await Promise.all(
    tabs.map((t) => {
      stopStream(t);
      return killTabBackend(t).catch(() => {});
    }),
  );
}

/* ---------- 每终端独立窗口：几何（位置/尺寸）持久化 ---------- */

/** 单个终端窗口的几何信息（视口坐标 px）。 */
export interface WinGeom {
  x: number;
  y: number;
  w: number;
  h: number;
}

/**
 * 每窗口一份几何，跨面板开合 / 刷新存活（与 termDockPos 同级，模块级单例）。
 * 不放在响应式对象里：窗口拖拽/缩放是高频更新，落到持久化由组件侧防抖处理。
 */
const termWinGeom = new Map<string, WinGeom>();
/** 新窗口级联序号：让后开的窗口错开位置，不层层完全重叠。 */
let spawnSeq = 0;

/** 取某标签已存几何（无则返回 undefined，组件侧回落到级联默认位）。 */
export function getWinGeom(id: string): WinGeom | undefined {
  return termWinGeom.get(id);
}
/** 写入某标签几何并落盘。 */
export function setWinGeom(id: string, g: WinGeom): void {
  termWinGeom.set(id, g);
  persistTermWins();
}
/** 清除某标签几何（关闭终端时调用）。 */
export function clearWinGeom(id: string): void {
  if (termWinGeom.delete(id)) persistTermWins();
}
/** 落盘全部窗口几何（keyed by tab id）。 */
function persistTermWins(): void {
  void savePersist("termWins", Object.fromEntries(termWinGeom));
}
/** 启动时由 settings.initPersist 回填已存几何（防御脏数据）。 */
export function loadTermWins(raw: unknown): void {
  if (!raw || typeof raw !== "object") return;
  const obj = raw as Record<string, unknown>;
  for (const [k, v] of Object.entries(obj)) {
    if (!v || typeof v !== "object") continue;
    const g = v as Record<string, unknown>;
    if (
      typeof g.x === "number" && typeof g.y === "number" &&
      typeof g.w === "number" && typeof g.h === "number"
    ) {
      termWinGeom.set(k, { x: g.x, y: g.y, w: g.w, h: g.h });
    }
  }
}

/** 默认窗口尺寸 + 右下角锚定坐标。 */
function defaultGeom(): WinGeom {
  const w = 680;
  const h = 460;
  return {
    w,
    h,
    x: Math.max(12, window.innerWidth - w - 24),
    y: Math.max(12, window.innerHeight - h - 24),
  };
}

/** 新窗口级联位置：在默认位基础上按序号向右上偏移，避免完全重叠（环绕 8 格）。 */
export function nextSpawnGeom(): WinGeom {
  spawnSeq += 1;
  const base = defaultGeom();
  const off = (spawnSeq % 8) * 30;
  return {
    w: base.w,
    h: base.h,
    x: Math.max(12, base.x - off),
    y: Math.max(12, base.y - off),
  };
}

/* ---------- 终端会话创建 / 销毁（供多窗口模式复用） ---------- */

/** 生成稳定唯一 id（会话与标签各一份，互不相关）。 */
function newSessionId(): string {
  return `t${Date.now().toString(36)}${Math.random().toString(36).slice(2, 10)}`;
}

/**
 * 建一个终端会话（一个常驻 shell），推入标签列表并启动输出流。
 * cwd / 启动命令 / shell / ssh 由调用方从 wb.termRequest* 解析后传入，避免 store 反向依赖 workbench。
 */
export function createTerminal(
  key: string,
  opts?: {
    cwd?: string;
    initCmd?: string;
    shell?: "cmd" | "powershell";
    /** 有值即远端 ssh 会话（宿主用已存凭据自动登录）。 */
    ssh?: TermSshInfo;
    /** ssh 直连失败降级时，本机 shell 里要敲的 ssh 登录命令。 */
    fallbackCmd?: string;
    /** 是否由**用户显式动作**打开（右键「在终端打开」/「新建终端」）：挂载后主动聚焦。 */
    focus?: boolean;
  },
): TermTab {
  const tab: TermTab = {
    id: newSessionId(),
    name: nextTermName(),
    session: newSessionId(),
    cwd: opts?.cwd ?? "",
    shell: opts?.shell ?? "cmd",
    ssh: opts?.ssh,
    fallbackCmd: opts?.fallbackCmd || undefined,
    output: "",
    connected: false,
    initCmd: opts?.initCmd || undefined,
    focusPending: opts?.focus === true,
  };
  termTabs.value.push(tab);
  termActiveId.value = tab.id;
  startStream(tab, key);
  return tab;
}

/** 关闭一个终端会话：断开流 + 终止后端进程 + 清几何 + 清预览。 */
export function removeTerminal(id: string): void {
  closeTermTab(id);
  clearWinGeom(id);
}

/**
 * 取用「挂载后应主动聚焦」标记（取一次即清，避免每次重新挂载都抢焦点）。
 * 供 TerminalWindow 在挂载时询问；返回 true 表示本次是用户显式打开。
 */
export function takeTermFocus(id: string): boolean {
  const tab = termTabs.value.find((t) => t.id === id);
  if (!tab?.focusPending) return false;
  tab.focusPending = false;
  return true;
}
