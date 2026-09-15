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

/** 显式检查（`checkSshNow`）临时需要关注的主机：不在任何来源集合里也要纳入采样。 */
const adhocIds = new Set<string>();

/** 等待某批主机探测结果的挂起请求。 */
interface SshWaiter {
  ids: Set<string>;
  resolve: (items: Record<string, SshStatusItem>) => void;
}
const sshWaiters = new Set<SshWaiter>();

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

/** WS 端点（同源，走与 REST 相同的 apiBase）。 */
function wsUrl(): string {
  const secure = typeof location !== "undefined" && location.protocol === "https:";
  const host = typeof location !== "undefined" ? location.host : "127.0.0.1";
  return `${secure ? "wss:" : "ws:"}//${host}${apiBase}/push`;
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
    // 服务端不保留断线前的订阅：重连后必须重发，故清掉两个指纹。
    sentPathsKey = "";
    sentSshKey = "";
    sendSubscriptions();
  };
  sock.onmessage = (ev) => onMessage(ev.data);
  // 错误一律交由 onclose 统一收尾（重连在 onclose 里排程）。
  sock.onerror = () => {};
  sock.onclose = () => {
    if (ws === sock) ws = null;
    sentPathsKey = "";
    sentSshKey = "";
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
}

/** 收到服务端帧：按类型分发给文件 / SSH 订阅者。 */
function onMessage(data: unknown): void {
  if (typeof data !== "string") return;
  let msg: { type?: string; items?: Record<string, unknown> };
  try {
    msg = JSON.parse(data) as { type?: string; items?: Record<string, unknown> };
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
  }
}

/** 集合变化后重新计算：都为空则断开连接，否则确保已连接并同步订阅。 */
function apply(): void {
  const hasWork = unionPaths().length > 0 || unionSshIds().length > 0;
  if (!hasWork) {
    stopped = true;
    sentPathsKey = "";
    sentSshKey = "";
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
