/**
 * 会话实时数据源：与后端 /stream/session SSE 保持连接，把当前选中会话的
 * 「触碰文件集」与「运行态」实时落到响应式状态，供导航面板 / 活动面板 /
 * 自动预览共同消费（替代旧的 window 桥订阅 + 轮询方案）。
 *
 * 活动会话的选择发生在浏览器（宿主无法独立感知），因此前端通过桥的
 * subscribeCurrentSessionId 上报当前选中的会话 id，据此（重）连 SSE；无选中时断开。
 */
import { reactive } from "vue";

/** 会话实时状态（模块级单例）。 */
export const sessionSse = reactive({
  /** 当前已连（或最近选中）的会话 id；null 表示未选中会话。 */
  sessionId: null as string | null,
  /** EventSource 是否已处于 open 状态。 */
  connected: false,
  /** 当前会话触碰过的文件（绝对路径，后端 SSE 整表推送）。 */
  files: [] as string[],
  /** 当前会话是否正在运行。 */
  running: false,
});

interface SseEvent {
  type?: string;
  sessionId?: string;
  cwd?: string;
  files?: string[];
  running?: boolean;
}

let es: EventSource | null = null;
let unsubSessionId: (() => void) | null = null;
let disposed = false;

function close(): void {
  try {
    es?.close();
  } catch {
    /* ignore */
  }
  es = null;
  sessionSse.connected = false;
}

function handle(d: SseEvent): void {
  if (!d || typeof d !== "object") return;
  if (d.sessionId && d.sessionId !== sessionSse.sessionId) return;
  switch (d.type) {
    case "snapshot":
    case "files":
      sessionSse.files = Array.isArray(d.files) ? d.files : [];
      sessionSse.running = d.running === true;
      sessionSse.connected = true;
      break;
    case "status":
      sessionSse.running = d.running === true;
      sessionSse.connected = true;
      break;
    default:
      break;
  }
}

function open(sid: string): void {
  close();
  sessionSse.sessionId = sid;
  const apiBase = window.__DSH_FILE_WORKBENCH__?.apiBase ?? "";
  try {
    es = new EventSource(`${apiBase}/stream/session?session=${encodeURIComponent(sid)}`);
  } catch {
    es = null;
    return;
  }
  es.onopen = () => {
    sessionSse.connected = true;
  };
  es.onerror = () => {
    // 宿主短暂中止/网络抖动：保持连接对象，onmessage 恢复时自动重连。
    sessionSse.connected = false;
  };
  es.onmessage = (ev) => {
    try {
      handle(JSON.parse(ev.data) as SseEvent);
    } catch {
      /* 忽略非 JSON 帧（如心跳注释） */
    }
  };
}

/**
 * 建立会话实时推送：订阅当前选中会话 id，变更即（重）连后端 SSE。
 * 返回注销函数；工作台卸载时应调用以释放连接。已连接时重复调用不重复开流。
 */
export function connectSessionSse(): () => void {
  if (disposed) {
    // 重新初始化（同一 bundle 二次挂载）
    disposed = false;
  }
  if (unsubSessionId) return () => disconnectSessionSse();
  const br = window.__DSH_FILE_WORKBENCH__;
  if (!br || typeof br.subscribeCurrentSessionId !== "function") {
    // 桥不可用：无法得知活动会话，放弃连接。
    return () => undefined;
  }
  unsubSessionId = br.subscribeCurrentSessionId((sid) => {
    if (sid) open(sid);
    else {
      close();
      sessionSse.sessionId = null;
    }
  });
  return () => disconnectSessionSse();
}

/** 释放会话实时推送：断开 SSE 并停掉会话 id 订阅。 */
export function disconnectSessionSse(): void {
  disposed = true;
  try {
    if (unsubSessionId) {
      unsubSessionId();
      unsubSessionId = null;
    }
  } catch {
    /* ignore */
  }
  close();
  sessionSse.sessionId = null;
  sessionSse.files = [];
  sessionSse.running = false;
}