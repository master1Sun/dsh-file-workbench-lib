/**
 * 会话实时数据源：把当前选中会话的「触碰文件集」与「运行态」实时落到响应式状态，
 * 供导航面板 / 活动面板 / 自动预览共同消费。
 *
 * ⛔ 传输已并入**推送 WS**（push.ts 的 `session-watch` 订阅），不再直连 `/stream/session`
 * SSE：宿主是 `node:http`（HTTP/1.1），浏览器对同一源只允许约 6 条并发 HTTP 长连接，
 * SSE 每条占一个配额——叠加终端 mux 流 / push 通道后逼近上限，`/exec-input` 等 REST
 * 请求被浏览器永久排队（「终端无响应 / 整页请求假死」）。WS 不占该配额。
 * 事件帧由服务端包成 `{ type: "session-ev", ev }` 推来；断线重连与订阅重发都在 push.ts。
 *
 * 活动会话的选择发生在浏览器（宿主无法独立感知），因此前端通过桥的
 * subscribeCurrentSessionId 上报当前选中的会话 id，据此（重）设订阅；无选中时停掉。
 */
import { reactive } from "vue";

import { onSessionEvent, setSessionWatchId } from "../core/push";

/** 会话实时状态（模块级单例）。 */
export const sessionSse = reactive({
  /** 当前已连（或最近选中）的会话 id；null 表示未选中会话。 */
  sessionId: null as string | null,
  /** 是否已收到过服务端帧（快照/增量/status）。 */
  connected: false,
  /** 当前会话触碰过的文件（绝对路径，后端整表推送）。 */
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

/** 本模块是否已订阅 push 的会话事件（防止重复挂监听）。 */
let listening = false;
let unsubSessionId: (() => void) | null = null;

/**
 * 跨 bundle 单例槽。
 *
 * ⛔ DSH 有可能**重新注入本 bundle**（页面存活期间再插一次 `<script>`）。bundle 一换，
 * 本模块的 `unsubSessionId` 全部重置，而旧实例通过桥订阅的回调、以及 push.ts 里
 * `sessionWatchId` 的旧引用都不会自动清掉。故把自己的关闭入口登记到 `globalThis`：
 * 新实例开工前先执行旧实例的 dispose（清桥订阅 + 停会话流订阅）。
 * （push.ts 自身的 WS 泄漏由它的 PUSH_WS_SLOT 守卫负责，这里只管本模块的状态。）
 */
const SSE_SLOT = "__DSH_FW_SESSION_SSE__";
interface SseSlot {
  dispose: () => void;
}
const selfSlot: SseSlot = { dispose: () => disconnectSessionSse() };

/** 接管全局槽：关掉「上一份 bundle」留下的订阅（同 bundle 重复调用时是同一个对象，跳过）。 */
function adoptGlobalSlot(): void {
  const g = globalThis as unknown as Record<string, unknown>;
  const prev = g[SSE_SLOT] as SseSlot | undefined;
  if (prev && prev !== selfSlot) {
    try {
      prev.dispose();
    } catch {
      /* 旧实例可能已随 DOM 一起失效，忽略 */
    }
  }
  g[SSE_SLOT] = selfSlot;
}

function handle(raw: unknown): void {
  const d = raw as SseEvent | null;
  if (!d || typeof d !== "object") return;
  // 未选中会话（已停订/断开中）：不落地任何帧，避免状态被残余推送填脏。
  if (!sessionSse.sessionId) return;
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
  // 同一会话：直接复用（指纹去重在 push.ts 的 sendSubscriptions 里，这里也拦一道）。
  // ⛔ 别无条件切换：服务端每接一路会话流都要重做一次**全量快照**（解析会话 + 订阅宿主
  //    session/event 总线），而且切换空窗里 files/running 会被打断。桥侧因重渲染等原因
  //    重复回推同一 id 是常事，这条守卫就是为此存在。
  if (sessionSse.sessionId === sid) return;
  sessionSse.sessionId = sid;
  setSessionWatchId(sid);
}

/**
 * 建立会话实时推送：订阅当前选中会话 id，变更即切换 push WS 上的会话流。
 *
 * ⛔ **这是一条与会话（而非面板）绑定的订阅：建好之后不要随面板卸载断开。**
 * 切右侧面板会让整个 Vue 应用卸载重建，若在卸载时停掉、挂载时重开，症状就是
 * 「每切一次面板就重做一次全量快照」——`files`/`running` 先被清空再重填（界面闪一下）、
 * 停订空窗里推送还会丢。调用方（`main.ts`）因此**只建不断**，靠下面的单例守卫防重复。
 *
 * 返回注销函数（仅调试 / 极端场景用；正常路径不需要）。
 */
export function connectSessionSse(): () => void {
  // 接管全局槽：清掉上一份 bundle 留下的订阅（详见 SSE_SLOT 注释）。
  adoptGlobalSlot();
  if (unsubSessionId) return () => disconnectSessionSse();
  if (!listening) {
    listening = true;
    onSessionEvent(handle);
  }
  const br = window.__DSH_FILE_WORKBENCH__;
  if (!br || typeof br.subscribeCurrentSessionId !== "function") {
    // 桥不可用：无法得知活动会话，放弃订阅。
    return () => undefined;
  }
  unsubSessionId = br.subscribeCurrentSessionId((sid) => {
    if (sid) open(sid);
    else {
      setSessionWatchId(null);
      sessionSse.sessionId = null;
    }
  });
  return () => disconnectSessionSse();
}

/** 释放会话实时推送：停掉会话流订阅与桥订阅（仅调试 / 极端场景）。 */
export function disconnectSessionSse(): void {
  try {
    if (unsubSessionId) {
      unsubSessionId();
      unsubSessionId = null;
    }
  } catch {
    /* ignore */
  }
  setSessionWatchId(null);
  sessionSse.sessionId = null;
  sessionSse.files = [];
  sessionSse.running = false;
  sessionSse.connected = false;
}
