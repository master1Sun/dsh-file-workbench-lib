/**
 * 工作台推送通道（WebSocket）：把原先的定时轮询改为服务端主动推送。
 *
 * 目前承载三类订阅：
 *  1. **文件落盘改动**（取代每 2.5s 一次的 `/mtimes` 轮询）；
 *  2. **SSH 主机连通性**（取代每 30s 一次的 `/ssh/ping` 轮询）；
 *  3. **会话实时流**（`session-watch`，取代独立的 `/stream/session` SSE —— 那条 SSE 占
 *     HTTP/1.1 连接池配额，并入本 WS 后浏览器池里只剩 REST 请求可用）。
 *
 * ⛔ 三者共用同一条连接，而不是各开一条：宿主是 `node:http`（HTTP/1.1），浏览器对同一源只允许
 * 约 6 条并发连接，长连接各自占一条 —— 早前终端多开即因连接被占满而排队卡死（见 topics/terminal.md）。
 * 推送通道同理：每加一类订阅就多一条长连接，迟早复现同类故障。
 *
 * 协议（均为 JSON 文本帧）：
 *   客户端 → 服务端  `{ type: "watch", paths: string[] }`     覆盖式设置本连接关注的**文件路径**
 *   客户端 → 服务端  `{ type: "ssh-watch", ids: string[] }`   覆盖式设置本连接关注的**SSH 主机**
 *   客户端 → 服务端  `{ type: "ssh-check", ids: string[] }`   请求立刻探测这些主机并**无条件回推**
 *   客户端 → 服务端  `{ type: "session-watch", id: string | null }` 挂载/切换/停止会话实时流
 *   服务端 → 客户端  `{ type: "ready" }`                      握手完成
 *   服务端 → 客户端  `{ type: "changed", items: { [path]: { mtimeMs, size } | null } }`
 *                    —— 仅在某路径 mtime/size 相对**上次采样**变化时推送；`null` 表示已不存在
 *   服务端 → 客户端  `{ type: "ssh-status", items: { [id]: { alive, error? } } }`
 *                    —— 连通性相对上次探测变化时推送；新订阅 / 显式检查时无条件回推
 *   服务端 → 客户端  `{ type: "session-ev", ev: SessionStreamEvent }`
 *                    —— 会话实时流事件（snapshot / files / status，见 routes-session-stream.ts）
 *
 * 收益：浏览器侧不再周期性发请求（省掉往返与路由开销），反应时间从「最多等一个前端轮询周期」
 * 变成「一个服务端采样周期」；多条连接的订阅在此取并集后只探测一次。
 *
 * ⛔ 为什么自己实现握手与帧编解码：插件运行期只能依赖 `package.json` 里声明的依赖，`ws` 不在
 * 其中（宿主 profile 的 node_modules 里也装不到）。RFC6455 的服务端最小子集——握手 + 文本帧
 * 编码 + ping/pong/close——不到 200 行，独立实现比引入原生依赖链更稳。
 */
import { stat } from "node:fs/promises";
import type { IncomingMessage } from "node:http";
import type { Duplex } from "node:stream";
import type { WebUpgradeRoute } from "@deepseek-ai/dsh-host-webserver";

import { connFor } from "../ssh/ssh-hosts.js";
import { PREFIX } from "./routes-util.js";
import { createSessionStreamSource, type HostCtx } from "./routes-session-stream.js";
// RFC6455 最小实现已提取为共享模块：/push 与 /exec-mux-ws 两处升级路由共用。
import { WsConn, acceptKey } from "./ws-conn.js";

/** 文件采样间隔（ms）：本地 stat 很便宜，取 1s 让外部保存几乎即时反映到界面。 */
const FILE_SAMPLE_MS = 1000;
/** SSH 探测间隔（ms）：复用连接池里的常驻连接跑一次 echo，代价约一个 RTT，可远密于原 30s 轮询。 */
const SSH_SAMPLE_MS = 15_000;
/** SSH 探测超时（ms）：网络挂起时必须能收敛，否则一次探测会卡住整轮采样。 */
const SSH_PROBE_TIMEOUT_MS = 8_000;

/* ------------------------------------------------------------------ *
 * 订阅
 * ------------------------------------------------------------------ */

/** 一条连接的订阅：关注的文件路径 + SSH 主机 + 会话流，以及无条件回推的待办集合。 */
interface PushSub {
  paths: Set<string>;
  sshIds: Set<string>;
  /**
   * 本轮探测必须**无条件**回推给本订阅的主机 id（新订阅 / 显式 ssh-check 时置入）。
   * 否则「基线不推送」的规则会让新接入的界面一直停在「未知」，最多等一个采样周期。
   */
  force: Set<string>;
  /** 当前挂载的会话实时流 id（null = 未订阅）。 */
  sessionId: string | null;
  /** 会话实时流的清理函数（换会话 / 断开时调用；null = 未挂载）。 */
  sessionCleanup: (() => void) | null;
  send: (value: unknown) => void;
  close: () => void;
}

const subs = new Set<PushSub>();

/* ── 文件落盘改动 ── */

/** 各路径上次采样到的指纹（`mtimeMs:size`，`gone` = 不存在）；多连接共享，避免重复 stat。 */
const lastSeen = new Map<string, string>();

/** 路径指纹。 */
function fingerprintOf(st: { mtimeMs: number; size: number } | null): string {
  return st ? `${st.mtimeMs}:${st.size}` : "gone";
}

/** 所有订阅关注的路径并集。 */
function unionPaths(): Set<string> {
  const wanted = new Set<string>();
  for (const s of subs) for (const p of s.paths) wanted.add(p);
  return wanted;
}

/** 采样一轮文件：只把**相对上次采样**发生变化的路径推给关心它的连接。 */
async function sampleFiles(): Promise<void> {
  const wanted = unionPaths();
  if (!wanted.size) return;

  /** 本轮发生变化的路径及其新状态。 */
  const changed = new Map<string, { mtimeMs: number; size: number } | null>();
  await Promise.all(
    [...wanted].map(async (path) => {
      const st = await stat(path).catch(() => null);
      const item = st ? { mtimeMs: st.mtimeMs, size: st.size } : null;
      const fp = fingerprintOf(item);
      const prev = lastSeen.get(path);
      lastSeen.set(path, fp);
      // 首次见到该路径：只记基线，不推送（否则订阅瞬间会误报一次「外部改动」）。
      if (prev !== undefined && prev !== fp) changed.set(path, item);
    }),
  );
  if (!changed.size) return;

  for (const s of subs) {
    const mine: Record<string, { mtimeMs: number; size: number } | null> = {};
    let hit = false;
    for (const [path, item] of changed) {
      if (!s.paths.has(path)) continue;
      mine[path] = item;
      hit = true;
    }
    if (hit) s.send({ type: "changed", items: mine });
  }
}

/** 丢弃已无人关注的路径基线，避免 `lastSeen` 随访问过的文件无限增长。 */
function gcSeen(): void {
  const alive = unionPaths();
  for (const p of [...lastSeen.keys()]) if (!alive.has(p)) lastSeen.delete(p);
}

/* ── SSH 连通性 ── */

/** 一台主机的探测结果。 */
export interface SshStatusItem {
  alive: boolean;
  error?: string;
}

/** 各主机上次探测结果的指纹；多连接共享，避免重复探测同一主机。 */
const lastSsh = new Map<string, string>();

/** 主机状态指纹（连通性相同但错误文案变了也算变化，便于红灯悬停提示刷新）。 */
function sshFingerprintOf(st: SshStatusItem): string {
  return st.alive ? "up" : `down:${st.error ?? ""}`;
}

/** 所有订阅关注的 SSH 主机并集。 */
function unionSshIds(): Set<string> {
  const wanted = new Set<string>();
  for (const s of subs) for (const id of s.sshIds) wanted.add(id);
  return wanted;
}

/** 探测单台主机：复用连接池的常驻连接跑一次 echo；任何失败都收敛成 `{ alive: false, error }`。 */
async function probeSshHost(id: string): Promise<SshStatusItem> {
  let timer: NodeJS.Timeout | null = null;
  try {
    const conn = await connFor(id);
    const r = await Promise.race([
      conn.exec("echo ok", { timeoutMs: SSH_PROBE_TIMEOUT_MS }),
      new Promise<never>((_, reject) => {
        // 连接池自身有超时，但这里再加一道兜底：采样计时器不能被单台主机的挂起拖住。
        timer = setTimeout(() => reject(new Error("ssh probe timeout")), SSH_PROBE_TIMEOUT_MS);
        timer.unref?.();
      }),
    ]);
    return { alive: r.code === 0 };
  } catch (error) {
    return { alive: false, error: error instanceof Error ? error.message : String(error) };
  } finally {
    if (timer) clearTimeout(timer);
  }
}

/** 是否已有一次探测在进行（避免显式检查与定时采样并发打同一批主机）。 */
let probing = false;
/** 探测期间又有新请求：本轮结束后立即补一轮。 */
let probeAgain = false;

/** 探测一轮 SSH：变化的主机推给关心它的连接；显式要求的主机无条件回推。 */
async function sampleSsh(): Promise<void> {
  if (probing) {
    probeAgain = true;
    return;
  }
  const wanted = [...unionSshIds()];
  if (!wanted.length) return;
  probing = true;
  try {
    const results = new Map<string, SshStatusItem>();
    await Promise.all(
      wanted.map(async (id) => {
        results.set(id, await probeSshHost(id));
      }),
    );

    /** 相对上次探测发生变化的主机。 */
    const changed = new Set<string>();
    for (const [id, st] of results) {
      const fp = sshFingerprintOf(st);
      const prev = lastSsh.get(id);
      lastSsh.set(id, fp);
      // 首次见到该主机：只记基线（新订阅方由 `force` 无条件回推覆盖）。
      if (prev !== undefined && prev !== fp) changed.add(id);
    }

    for (const s of subs) {
      const items: Record<string, SshStatusItem> = {};
      let hit = false;
      for (const [id, st] of results) {
        if (!s.sshIds.has(id)) continue;
        if (!changed.has(id) && !s.force.has(id)) continue;
        items[id] = st;
        hit = true;
      }
      // 已回推过的强制项可以清掉；本轮未覆盖到的（主机刚被移除等）留到下一轮。
      for (const id of [...s.force]) if (results.has(id)) s.force.delete(id);
      if (hit) s.send({ type: "ssh-status", items });
    }
  } finally {
    probing = false;
  }
  if (probeAgain) {
    probeAgain = false;
    void sampleSsh();
  }
}

/** 丢弃已无人关注的主机基线。 */
function gcSsh(): void {
  const alive = unionSshIds();
  for (const id of [...lastSsh.keys()]) if (!alive.has(id)) lastSsh.delete(id);
}

/* ------------------------------------------------------------------ *
 * 计时器
 * ------------------------------------------------------------------ */

/** 文件采样计时器（有路径订阅时存在）。 */
let fileTimer: NodeJS.Timeout | null = null;
/** SSH 采样计时器（有主机订阅时存在）。 */
let sshTimer: NodeJS.Timeout | null = null;

/** 按订阅情况启动/停止两个采样计时器：无订阅即停，不留空转。 */
function syncTimers(): void {
  if (unionPaths().size && !fileTimer) {
    fileTimer = setInterval(() => void sampleFiles(), FILE_SAMPLE_MS);
    fileTimer.unref?.();
  } else if (!unionPaths().size && fileTimer) {
    clearInterval(fileTimer);
    fileTimer = null;
    lastSeen.clear();
  }

  if (unionSshIds().size && !sshTimer) {
    sshTimer = setInterval(() => void sampleSsh(), SSH_SAMPLE_MS);
    sshTimer.unref?.();
  } else if (!unionSshIds().size && sshTimer) {
    clearInterval(sshTimer);
    sshTimer = null;
    lastSsh.clear();
  }
}

/* ------------------------------------------------------------------ *
 * 升级入口
 * ------------------------------------------------------------------ */

/** 客户端消息。 */
interface PushMessage {
  type?: string;
  paths?: unknown;
  ids?: unknown;
  /** `session-watch` 的目标会话 id（显式 null = 停止会话流）。 */
  id?: unknown;
}

/** 从任意值里取出非空字符串数组。 */
function stringsOf(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((x): x is string => typeof x === "string" && !!x);
}

/** 处理一次升级请求：完成握手并登记订阅。 */
function handleUpgrade(ctxProvider: (() => HostCtx | undefined) | undefined, req: IncomingMessage, socket: Duplex, head: Buffer): void {
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

  const sub: PushSub = { paths: new Set(), sshIds: new Set(), force: new Set(), sessionId: null, sessionCleanup: null, send: () => {}, close: () => {} };
  /** 卸载当前会话流（换会话 / 显式停止 / 断开时）。 */
  const dropSession = (): void => {
    try {
      sub.sessionCleanup?.();
    } catch {
      /* ignore */
    }
    sub.sessionCleanup = null;
    sub.sessionId = null;
  };
  const conn = new WsConn(
    socket,
    (text) => {
      let msg: PushMessage;
      try {
        msg = JSON.parse(text) as PushMessage;
      } catch {
        return; // 非 JSON：忽略
      }
      if (msg.type === "watch") {
        // 覆盖式设置：一次消息即代表该连接当前关心的完整集合。
        sub.paths = new Set(stringsOf(msg.paths));
        gcSeen();
        syncTimers();
        return;
      }
      if (msg.type === "session-watch") {
        // 会话实时流并入本连接（取代独立的 /stream/session SSE，省一条 HTTP 池配额）。
        dropSession();
        const id = typeof msg.id === "string" ? msg.id.trim() : "";
        if (!id) return; // 显式空：只停止
        sub.sessionId = id;
        sub.sessionCleanup = createSessionStreamSource({
          sessionId: id,
          ctx: ctxProvider?.(),
          // 会话事件包一层 `session-ev` 再发，避免与会话类型名直接碰撞。
          send: (ev) => sub.send({ type: "session-ev", ev }),
        });
        return;
      }
      if (msg.type === "ssh-watch") {
        const ids = new Set(stringsOf(msg.ids));
        const added = [...ids].filter((id) => !sub.sshIds.has(id));
        sub.sshIds = ids;
        // 新接入的主机立刻回推一次（否则界面要等一个采样周期才有状态可显示）。
        for (const id of added) sub.force.add(id);
        gcSsh();
        syncTimers();
        if (added.length) void sampleSsh();
        return;
      }
      if (msg.type === "ssh-check") {
        // 显式检查：调用方在等结果（如「添加主机」后立刻验证），必须无条件回推。
        const ids = stringsOf(msg.ids);
        if (!ids.length) return;
        for (const id of ids) sub.force.add(id);
        // 显式检查的主机若尚未被订阅，先并入订阅集合，否则采样阶段会直接跳过它。
        for (const id of ids) sub.sshIds.add(id);
        syncTimers();
        void sampleSsh();
      }
    },
    () => {
      dropSession();
      subs.delete(sub);
      gcSeen();
      gcSsh();
      syncTimers();
    },
  );
  sub.send = (value) => conn.sendJson(value);
  sub.close = () => conn.destroy();
  subs.add(sub);
  syncTimers();
  conn.sendJson({ type: "ready" });
  // 升级时可能已有紧随其后的字节被读出，补喂给解析器（否则会丢首帧）。
  if (head?.length) conn.feed(head);
}

/** 升级路由：`/api/dsh-file-workbench/push`（必须是精确路径）。 */
export function makePushUpgrade(ctxProvider?: () => HostCtx | undefined): WebUpgradeRoute {
  return { path: `${PREFIX}/push`, handler: (req, socket, head) => handleUpgrade(ctxProvider, req, socket, head) };
}
