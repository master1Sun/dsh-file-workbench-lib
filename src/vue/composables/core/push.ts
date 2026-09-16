/**
 * 工作台推送客户端（WebSocket）——取代定时轮询的两类订阅：
 *  1. **文件落盘改动**：原先每 2.5s 轮询一次 `/mtimes`；
 *  2. **SSH 主机连通性**：原先每 30s 轮询一次 `/ssh/ping`。
 *
 * ⛔ 两类订阅共用**同一条** WS 连接，而不是各开一条：宿主是 `node:http`（HTTP/1.1），
 * 浏览器对同源只允许约 6 条并发长连接，每加一类订阅就多占一条迟早会排队卡死
 * （终端多开即栽在这上面，见 topics/terminal.md）。
 *
 * 用法：
 *  - 文件：每个编辑器面板 `setWatchPaths(key, paths)` 声明自己关心的文件集合（覆盖式），
 *    用 `onMtimeChange(cb)` 订阅变更；本模块把各面板集合取并集发给 host。
 *  - SSH：SSH store `setSshWatchIds(key, ids)` 声明关心的主机（覆盖式），用 `onSshStatus(cb)`
 *    订阅状态；`checkSshNow(ids)` 请求立刻探测并等待结果（相当于原来的 `POST /ssh/ping`）。
 *
 * 断线自动重连，且**重连后重发全部订阅**（服务端不保留断线前的订阅）；两类集合都为空时
 * 直接断开，不留空连接。
 */
import { apiBase } from "./useApi";
import { wsEndpointUrl } from "./ws-url";

/** 一次文件变更的落盘信息（`null` = 该路径已不存在）。 */
export interface MtimeItem {
  mtimeMs: number;
  size: number;
}

/** 一台 SSH 主机的探测结果。 */
export interface SshStatusItem {
  alive: boolean;
  error?: string;
}

/** 文件变更回调。 */
export type MtimeChange = (path: string, item: MtimeItem | null) => void;

/** SSH 状态回调。 */
export type SshStatusChange = (items: Record<string, SshStatusItem>) => void;

/** 各来源（编辑器面板）声明的关注文件集合，键为面板标识。 */
const pathSources = new Map<string, string[]>();
/** 各来源声明的关注 SSH 主机集合，键为来源标识。 */
const sshSources = new Map<string, string[]>();

const mtimeListeners = new Set<MtimeChange>();
const sshListeners = new Set<SshStatusChange>();
/** 会话实时流事件回调（sessionSse 消费）。 */
const sessionListeners = new Set<(ev: Record<string, unknown>) => void>();

/** 显式检查（`checkSshNow`）临时需要关注的主机：不在任何来源集合里也要纳入采样。 */
const adhocIds = new Set<string>();

/** 等待某批主机探测结果的挂起请求。 */
interface SshWaiter {
  ids: Set<string>;
  resolve: (items: Record<string, SshStatusItem>) => void;
}
const sshWaiters = new Set<SshWaiter>();

/** 当前要挂会话实时流的会话 id（null = 无选中，不挂载）。 */
let sessionWatchId: string | null = null;
/** 上次实际发出的会话订阅指纹；重连后必须重置以触发重发。 */
let sentSessionKey: string | null = "\u0000unset";

let ws: WebSocket | null = null;
let retryTimer = 0;
/** 上次实际发出的文件订阅指纹（避免重复发送同一份集合）。 */
let sentPathsKey = "";
/** 上次实际发出的主机订阅指纹；重连后必须重置以触发重发。 */
let sentSshKey = "";
/** 尚未送达的显式检查（连接建立后补发）。 */
const pendingChecks = new Set<string>();
/** 是否处于「已停止」态（两类集合都为空）：此时不建连、不重连。 */
let stopped = true;

/* ------------------------------------------------------------------ *
 * 跨 bundle 单例槽：关掉「上一份 bundle」遗留的推送 WS
 *
 * ⛔ DSH 有可能**重新注入本 bundle**（页面存活期间再插一次 `<script>`，见
 * `sessionSse.ts` 与 `terminalStore.ts` 里同款坑的注释）。bundle 一换，本模块的 `ws` /
 * `retryTimer` / `stopped` 全部重置，而**旧实例的 WebSocket 不会因为失去引用就被回收** ——
 * 它是一条活的连接。没人关它 → 每注入一次就多占一条同源长连接。
 *
 * 这条连接平时可能没建（没有文件/SSH 关注集时 `apply()` 会让它保持断开）；但只要**配置了 SSH
 * 主机**，ssh store 的 `setSshWatchIds` 就会把它连上。于是重新注入几次后，泄漏的旧 push WS
 * 叠上 mux SSE / session SSE / dsh 客户端自身的连接，把浏览器约 6 条同源配额占满，后续的
 * `/exec-input` 被浏览器永久排队 —— 表现为「开了 SSH 终端后敲键盘无响应」（SSH 主机让 push WS
 * 真正上线，把本来逼近上限的连接数顶过线）。故把自己的关闭入口登记到 `globalThis`，新实例
 * 开工前先关掉旧实例的。
 * （`sessionSse.ts` 已用同样手法保护了 `/stream/session`，`terminalStore.ts` 保护了 mux 流。）
 * ------------------------------------------------------------------ */
const PUSH_WS_SLOT = "__DSH_FW_PUSH_WS__";
interface PushSlot {
  dispose: () => void;
}

/** 关闭上一份 bundle 遗留的推送 WS：停掉重连循环并关连接（含 ws 本身）。 */
function disposePushWs(): void {
  // 先置 stopped，旧的 connect()/scheduleRetry() 再被触发时直接放弃，绝不再开新连接。
  stopped = true;
  if (retryTimer) {
    window.clearTimeout(retryTimer);
    retryTimer = 0;
  }
  const sock = ws;
  ws = null;
  try {
    sock?.close();
  } catch {
    /* 已关闭：忽略 */
  }
}

const selfSlot: PushSlot = { dispose: () => disposePushWs() };

/** 接管全局槽：关掉「上一份 bundle」留下的推送 WS（同 bundle 重新求值同对象，跳过）。 */
function adoptPushSlot(): void {
  const g = globalThis as unknown as Record<string, unknown>;
  const prev = g[PUSH_WS_SLOT] as PushSlot | undefined;
  if (prev && prev !== selfSlot && typeof prev.dispose === "function") {
    try {
      prev.dispose();
    } catch {
      /* 旧实例可能已随 DOM 一起失效，忽略 */
    }
  }
  g[PUSH_WS_SLOT] = selfSlot;
}

// 模块被求值（含 DSH 重新注入 bundle）时立即接管槽：关掉上一份遗留的推送 WS，避免重复注入累积连接。
adoptPushSlot();

/* ------------------------------------------------------------------ *
 * 订阅集合
 * ------------------------------------------------------------------ */

/** 所有来源关注路径的并集（排序后作为订阅内容与指纹）。 */
function unionPaths(): string[] {
  const set = new Set<string>();
  for (const list of pathSources.values()) for (const p of list) set.add(p);
  return [...set].sort();
}

/** 所有来源关注主机（含临时检查项）的并集。 */
function unionSshIds(): string[] {
  const set = new Set<string>(adhocIds);
  for (const list of sshSources.values()) for (const id of list) set.add(id);
  return [...set].sort();
}

/** 清掉既不在来源集合、也不在等待列表里的临时检查项。 */
function pruneAdhoc(): void {
  if (!adhocIds.size) return;
  const kept = new Set<string>();
  for (const list of sshSources.values()) for (const id of list) kept.add(id);
  for (const w of sshWaiters) for (const id of w.ids) kept.add(id);
  for (const id of [...adhocIds]) if (!kept.has(id)) adhocIds.delete(id);
}

/* ------------------------------------------------------------------ *
 * 连接
 * ------------------------------------------------------------------ */

/**
 * 由 REST 基址推导推送通道的 WS 端点（纯函数，便于回归断言）。
 *
 * ⛔ 不能写成 `` `${wsScheme}//${location.host}${apiBase}/push` ``：宿主桥接注入的 `apiBase`
 * 是**绝对 URL**（`src/client/index.tsx` 里 `${window.location.origin}${PREFIX}`），再拼一次
 * `location.host` 会得到 `ws://127.0.0.1:3080http://127.0.0.1:3080/api/...` 这种畸形地址 ——
 * `new WebSocket()` 直接失败，连接永不建立（表现为 SSH 指示灯一直「未检测」、外部改动推送静默失效）。
 * 用 `URL` 统一解析：绝对地址取它自身的 host，相对路径（vite dev 的 `VITE_API_BASE`）按当前页解析。
 */
export function pushWsUrl(apiBase: string, href: string): string {
  return wsEndpointUrl(apiBase, href, "push");
}

/** 当前页面下的 WS 端点。 */
function wsUrl(): string {
  const href = typeof location !== "undefined" ? location.href : "http://127.0.0.1/";
  return pushWsUrl(apiBase, href);
}

/**
 * 推送通道当前是否可用（WS 已连上）。
 *
 * 上层据此决定是否回落 REST 兜底：长连接可能被中间代理 / 网关拦掉（或宿主版本较旧没有
 * `/push` 路由），此时所有订阅都收不到推送 —— 而症状是**完全静默**（界面永远停在「未检测」），
 * 不留任何错误痕迹。故必须给调用方一个可查询的通道状态。
 */
export function isPushOnline(): boolean {
  return ws !== null && ws.readyState === WebSocket.OPEN;
}

function scheduleRetry(): void {
  if (stopped || retryTimer) return;
  retryTimer = window.setTimeout(() => {
    retryTimer = 0;
    connect();
  }, 1500);
}

function connect(): void {
  if (stopped) return;
  if (ws && (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING)) return;
  let sock: WebSocket;
  try {
    sock = new WebSocket(wsUrl());
  } catch {
    scheduleRetry();
    return;
  }
  ws = sock;
  sock.onopen = () => {
    // 服务端不保留断线前的订阅：重连后必须重发，故清掉各指纹。
    sentPathsKey = "";
    sentSshKey = "";
    sentSessionKey = "\u0000unset";
    sendSubscriptions();
  };
  sock.onmessage = (ev) => onMessage(ev.data);
  // 错误一律交由 onclose 统一收尾（重连在 onclose 里排程）。
  sock.onerror = () => {};
  sock.onclose = () => {
    if (ws === sock) ws = null;
    sentPathsKey = "";
    sentSshKey = "";
    sentSessionKey = "\u0000unset";
    scheduleRetry();
  };
}

/** 把当前文件 / 主机订阅（含待发检查）同步给 host；未连上时只返回，onopen 会补发。 */
function sendSubscriptions(): void {
  if (!ws || ws.readyState !== WebSocket.OPEN) return;

  const paths = unionPaths();
  const pathsKey = paths.join("\n");
  if (pathsKey !== sentPathsKey) {
    sentPathsKey = pathsKey;
    ws.send(JSON.stringify({ type: "watch", paths }));
  }

  const ids = unionSshIds();
  const sshKey = ids.join("\n");
  if (sshKey !== sentSshKey) {
    sentSshKey = sshKey;
    ws.send(JSON.stringify({ type: "ssh-watch", ids }));
  }

  if (pendingChecks.size) {
    const check = [...pendingChecks];
    pendingChecks.clear();
    ws.send(JSON.stringify({ type: "ssh-check", ids: check }));
  }

  if (sessionWatchId !== sentSessionKey) {
    sentSessionKey = sessionWatchId;
    // id 为 null 也要发：连接可能因其他订阅而存活，服务端需要显式停止会话流。
    ws.send(JSON.stringify({ type: "session-watch", id: sessionWatchId }));
  }
}

/** 收到服务端帧：按类型分发给文件 / SSH / 会话订阅者。 */
function onMessage(data: unknown): void {
  if (typeof data !== "string") return;
  let msg: { type?: string; items?: Record<string, unknown>; ev?: unknown };
  try {
    msg = JSON.parse(data) as { type?: string; items?: Record<string, unknown>; ev?: unknown };
  } catch {
    return;
  }
  if (msg.type === "changed" && msg.items) {
    const items = msg.items as Record<string, MtimeItem | null>;
    for (const [path, item] of Object.entries(items)) {
      for (const cb of mtimeListeners) cb(path, item);
    }
    return;
  }
  if (msg.type === "ssh-status" && msg.items) {
    const items = msg.items as Record<string, SshStatusItem>;
    for (const cb of sshListeners) cb(items);
    // 唤醒等待这批主机的显式检查（交集非空即可：一帧可能同时覆盖多台）。
    for (const w of [...sshWaiters]) {
      if (!Object.keys(items).some((id) => w.ids.has(id))) continue;
      sshWaiters.delete(w);
      w.resolve(items);
    }
    return;
  }
  if (msg.type === "session-ev" && msg.ev && typeof msg.ev === "object") {
    for (const cb of sessionListeners) cb(msg.ev as Record<string, unknown>);
  }
}

/** 集合变化后重新计算：都为空则断开连接，否则确保已连接并同步订阅。 */
function apply(): void {
  const hasWork = unionPaths().length > 0 || unionSshIds().length > 0 || sessionWatchId !== null;
  if (!hasWork) {
    stopped = true;
    sentPathsKey = "";
    sentSshKey = "";
    sentSessionKey = "\u0000unset";
    if (retryTimer) {
      window.clearTimeout(retryTimer);
      retryTimer = 0;
    }
    const sock = ws;
    ws = null;
    try {
      sock?.close();
    } catch {
      /* 已关闭：忽略 */
    }
    return;
  }
  if (stopped) {
    // 重新启用：需要重发订阅。
    sentPathsKey = "";
    sentSshKey = "";
    sentSessionKey = "\u0000unset";
  }
  stopped = false;
  connect();
  sendSubscriptions();
}

/* ------------------------------------------------------------------ *
 * 文件改动
 * ------------------------------------------------------------------ */

/** 声明某面板当前关注的文件集合（覆盖式）。 */
export function setWatchPaths(key: string, paths: string[]): void {
  pathSources.set(key, paths);
  apply();
}

/** 撤销某面板的文件声明（面板卸载时调用）。 */
export function clearWatchPaths(key: string): void {
  pathSources.delete(key);
  apply();
}

/** 订阅文件变更；返回退订函数。 */
export function onMtimeChange(cb: MtimeChange): () => void {
  mtimeListeners.add(cb);
  return () => mtimeListeners.delete(cb);
}

/* ------------------------------------------------------------------ *
 * SSH 连通性
 * ------------------------------------------------------------------ */

/** 声明某来源当前关注的 SSH 主机（覆盖式）。 */
export function setSshWatchIds(key: string, ids: string[]): void {
  sshSources.set(key, ids);
  apply();
}

/** 撤销某来源的 SSH 声明。 */
export function clearSshWatchIds(key: string): void {
  sshSources.delete(key);
  apply();
}

/** 订阅 SSH 状态变化；返回退订函数。 */
export function onSshStatus(cb: SshStatusChange): () => void {
  sshListeners.add(cb);
  return () => sshListeners.delete(cb);
}

/**
 * 请求立刻探测指定主机并等待结果（取代 `POST /ssh/ping`）。
 *
 * 返回结果帧里的条目；超时或连接不可用时返回空对象，**不抛错** ——
 * 调用方只关心「能不能连上」，网络层的原因不值得打断交互（指示灯会如实体现在状态里）。
 */
export function checkSshNow(ids: string[], timeoutMs = 12_000): Promise<Record<string, SshStatusItem>> {
  const wanted = [...new Set(ids.filter(Boolean))];
  if (!wanted.length) return Promise.resolve({});
  for (const id of wanted) adhocIds.add(id);
  apply();
  return new Promise((resolve) => {
    let timer = 0;
    /** 收尾：无论拿到结果还是超时，都只结算一次。 */
    const settle = (items: Record<string, SshStatusItem>): void => {
      if (timer) window.clearTimeout(timer);
      sshWaiters.delete(waiter);
      pruneAdhoc();
      apply();
      resolve(items);
    };
    const waiter: SshWaiter = { ids: new Set(wanted), resolve: settle };
    sshWaiters.add(waiter);
    timer = window.setTimeout(() => settle({}), timeoutMs);
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({ type: "ssh-check", ids: wanted }));
    } else {
      // 尚未连上：交由 onopen 的 sendSubscriptions 补发。
      for (const id of wanted) pendingChecks.add(id);
    }
  });
}

/* ------------------------------------------------------------------ *
 * 会话实时流（并入本连接：原先的 /stream/session SSE 占 HTTP 池配额）
 * ------------------------------------------------------------------ */

/**
 * 设置当前要挂会话实时流的会话 id（覆盖式；null = 停止）。
 *
 * 只有 sessionSse 一个消费者，故用单槽而不是多来源并集。重连后由 sendSubscriptions 自动重发。
 */
export function setSessionWatchId(id: string | null): void {
  sessionWatchId = id;
  apply();
}

/** 订阅会话实时流事件（snapshot / files / status）；返回退订函数。 */
export function onSessionEvent(cb: (ev: Record<string, unknown>) => void): () => void {
  sessionListeners.add(cb);
  return () => sessionListeners.delete(cb);
}
