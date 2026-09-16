/**
 * API 客户端：封装对 host /api/dsh-file-workbench 的调用。
 *
 * 基址解析优先级：
 *   1. window.__DSH_FILE_WORKBENCH__?.apiBase（client 桥接注入，DOH running）
 *   2. import.meta.env.VITE_API_BASE（独立 vite dev 联调）
 *   3. 默认 '/api/dsh-file-workbench'
 */
import { computed, reactive } from "vue";
import { toastError } from "./toast";
import { cachedRead, invalidateRead } from "./readCache";
import type {
  ApiResponse,
  BrowseListing,
  DriveInfo,
  EolStyle,
  FileDetail,
  FileTextRead,
  FileTextSaved,
  FsListing,
  GitAction,
  GitDirStatus,
  GitLogItem,
  GitPanel,
  GitRunResult,
  MyComputerItem,
  RecycleEntry,
  ReplaceOutcome,
  RepoCloneKind,
  RepoCloneRequest,
  RepoCloneResult,
  SearchHit,
  TaskArchiveMap,
  TaskLogRecord,
  TextEncoding,
  TextReadOptions,
} from "../../../shared/types";
import { t } from "./i18n";
import { wsEndpointUrl } from "./ws-url";

export const PREFIX = "/api/dsh-file-workbench";

function resolveApiBase(): string {
  if (typeof window !== "undefined" && window.__DSH_FILE_WORKBENCH__?.apiBase) {
    return window.__DSH_FILE_WORKBENCH__.apiBase.replace(/\/$/, "");
  }
  const env = (import.meta.env?.VITE_API_BASE as string | undefined) ?? "";
  return env ? env.replace(/\/$/, "") : PREFIX;
}

export const apiBase = resolveApiBase();

/* ---------- 全局请求状态：序号 / 进行中计数 / 可取消 ---------- */

/** 全局请求跟踪：每次请求分配自增 seq，pending 反映在途请求数（供全局 loading 指示）。 */
export const api = reactive<{ seq: number; pending: number }>({ seq: 0, pending: 0 });

/** 在途请求的 AbortController，按 seq 索引，供 cancelRequest/cancelAll 全局取消。 */
const outstanding = new Map<number, AbortController>();

/** 按执行序号取消单个在途请求。 */
export function cancelRequest(seq: number): void {
  outstanding.get(seq)?.abort();
}

/** 取消所有在途请求（例如工作台卸载/切换会话时清理陈旧请求）。 */
export function cancelAll(): void {
  for (const c of outstanding.values()) c.abort();
  outstanding.clear();
}

/** 读全局在途请求数（响应式，供 UI 展示加载态）。 */
export function useApiStatus(): { pending: import("vue").ComputedRef<number>; seq: import("vue").ComputedRef<number> } {
  return { pending: computed(() => api.pending), seq: computed(() => api.seq) };
}

/** 请求被主动取消时抛出的信号错误，调用方可据此静默处理竞态/卸载清理。 */
export class AbortRequestError extends Error {
  constructor() {
    super("request aborted");
    this.name = "AbortRequestError";
  }
}

/**
 * 携带 HTTP 状态与业务错误码的 API 错误。
 * 调用方按 `code` 分支处理（如 `mtime-conflict` 弹确认后带 force 重试）。
 */
export class ApiError extends Error {
  constructor(
    message: string,
    readonly status: number,
    readonly code?: string,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

/**
 * 由**调用方**分支处理的错误码：这类错误不自动弹 toast，避免与调用方的
 * 确认弹窗/自定义提示重复。新增码时必须同时在前端补齐对应处理，否则用户会「点了没反应」。
 */
const CALLER_HANDLED_CODES = new Set(["mtime-conflict"]);

/* ---------- 统一请求封装：错误码映射 / 可取消 / 静默 ---------- */

interface RequestOptions {
  /** 合并外部取消信号（优先级高于内部自动 controller）。 */
  signal?: AbortSignal;
  /** silent=true 时不自动弹 toast，由调用方自行提示（常用于竞态守护的内部探测请求）。 */
  silent?: boolean;
}

/** HTTP 状态码 → 面向用户的友好提示。 */
function mapError(status: number, message: string): string {
  switch (status) {
    case 403:
      return t("errForbidden");
    case 404:
      return t("errNotFound");
    case 409:
      return t("errNoRoot");
    case 413:
      return t("errTooLarge");
    case 500:
      return t("errServer");
    default:
      return message;
  }
}

/** 判断错误是否为请求被主动取消。 */
export function isAbortError(e: unknown): boolean {
  return e instanceof AbortRequestError || (e instanceof DOMException && e.name === "AbortError");
}

async function request<T>(method: string, url: string, body?: unknown, opts?: RequestOptions): Promise<T> {
  const seq = ++api.seq;
  api.pending++;
  // 每请求自带内部控制信号：既可被 cancelRequest/cancelAll 取消，也可合并外部 signal。
  const controller = new AbortController();
  outstanding.set(seq, controller);
  const onExternalAbort = () => controller.abort();
  if (opts?.signal) {
    if (opts.signal.aborted) controller.abort();
    else opts.signal.addEventListener("abort", onExternalAbort, { once: true });
  }
  const init: RequestInit = { method, headers: {}, signal: controller.signal };
  if (body !== undefined) {
    init.headers = { "content-type": "application/json" };
    init.body = JSON.stringify(body);
  }
  try {
    let res: Response;
    try {
      res = await fetch(`${apiBase}${url}`, init);
    } catch (e) {
      // 网络层失败 / 主动中止发生在真正拿到响应之前。
      if (controller.signal.aborted) throw new AbortRequestError();
      if (!opts?.silent) toastError(t("errNetwork"));
      throw e instanceof Error ? e : new Error(String(e));
    }
    const payload = (await res.json().catch(() => ({ ok: false, error: "bad response" }))) as ApiResponse<T>;
    if (!payload.ok) {
      const err = payload.error || `HTTP ${res.status}`;
      const callerHandled = !!payload.code && CALLER_HANDLED_CODES.has(payload.code);
      if (callerHandled) {
        // 交由调用方分支处理（例如 mtime 冲突 → 确认覆盖）：此处静默，不重复提示。
      } else if (res.status === 403 && /outside (root|workspace)/i.test(err)) {
        // 工作区外操作被禁止的前端提示（服务端以 403 + “outside root/workspace” 标识）。
        if (!opts?.silent) toastError(t("workspaceOutside"));
      } else if (!opts?.silent) {
        toastError(mapError(res.status, err));
      }
      throw new ApiError(err, res.status, payload.code);
    }
    return payload.data as T;
  } finally {
    api.pending--;
    outstanding.delete(seq);
    opts?.signal?.removeEventListener("abort", onExternalAbort);
  }
}

const qs = (params: Record<string, string | undefined>) => {
  const sp = new URLSearchParams();
  for (const [k, v] of Object.entries(params)) if (v) sp.set(k, v);
  const s = sp.toString();
  return s ? `?${s}` : "";
};

/*
 * ── 只读接口的结果缓存 ────────────────────────────────────────────────────────
 *
 * 下面这批**幂等只读**接口一律经 `cachedRead()` 出去：切面板导致的「卸载→重建」
 * 不会再把列目录 / git 状态 / 仓库探测 / 文件索引重新问一遍（详见 readCache.ts 的说明）。
 *
 * ⛔ 铁律：
 *  - 只给只读接口用。**`readFile` 绝不可进缓存**（外部改动检测、另存为重读都依赖真正读盘）；
 *    `exists` 同理（刚写完的文件存在性必须现问）。
 *  - 每个 key 必须完整编码入参（含 `key` 根标识），否则不同根/不同目录会互相命中。
 *  - 写接口成功后必须 `invalidateRead(...)`，否则用户会遇到「改了不生效」——
 *    见下面各写接口里的调用。
 */

/** 列单层目录（结果缓存 30s：同目录重复列在「切走再切回」场景下是纯浪费）。 */
export function listDir(path: string, key?: string): Promise<FsListing> {
  return cachedRead(`list:${key ?? ""}:${path}`, () => request<FsListing>("GET", `/list${qs({ key, path })}`));
}

/**
 * 写操作的统一包装：**成功后作废读缓存**。
 *
 * 目录内容 / 文件状态 / 仓库状态可能已经变了，刚才缓存的列目录与 git 状态不再可信。
 * 缓存本身很小，整体清掉比逐个推断影响范围更不容易漏 —— 漏一个就是用户侧的
 * 「刚建的文件刷新看不到」「提交后徽标还挂在那」。
 */
function writeThen<T>(p: Promise<T>): Promise<T> {
  return p.then((v) => {
    invalidateRead();
    return v;
  });
}

/** 只作废 `git` 前缀的写包装：git 写操作不影响目录内容，没必要连列目录缓存一起清。 */
function writeThenGit<T>(p: Promise<T>): Promise<T> {
  return p.then((v) => {
    invalidateRead("git");
    return v;
  });
}

/**
 * 供「刷新」这类**显式要求最新数据**的动作使用：作废指定前缀的读缓存
 * （`"list"` / `"git"` / `"svn"` / `"files"`；缺省全部）。
 *
 * 必须显式调的场合：用户点了刷新按钮 / 右键刷新 / 面板关闭后重算徽标 ——
 * 这些动作的语义就是「不要用缓存」，否则点了没反应。
 */
export function invalidateReadCache(prefix = ""): number {
  return invalidateRead(prefix);
}

/** 取/设工作区根。 */
export function fetchRoot(key?: string): Promise<{ root: string }> {
  return request("GET", `/root${qs({ key })}`);
}
export function setRoot(path: string, key?: string): Promise<{ root: string }> {
  return request("POST", "/root", { key, path });
}

/** 取父路径。 */
export function fetchParent(path: string, key?: string): Promise<{ root: string; parent?: string }> {
  return request("GET", `/parent${qs({ key, path })}`);
}

/** 保存文件（编码 / 行尾 / BOM 按原样还原；带 expectedMtime 时做外部改动冲突检测）。 */
export interface SaveTextOptions {
  key?: string;
  encoding?: TextEncoding;
  hasBom?: boolean;
  eol?: EolStyle;
  /** 读取时拿到的 mtime：磁盘已变动时服务端返回 412 + code=mtime-conflict。 */
  expectedMtime?: number;
  /** true 时跳过冲突检测，强制覆盖。 */
  force?: boolean;
}

export function saveFile(path: string, content: string, opts: SaveTextOptions = {}): Promise<FileTextSaved> {
  return writeThen(
    request<FileTextSaved>("POST", "/save", {
      key: opts.key,
      path,
      content,
      encoding: opts.encoding,
      hasBom: opts.hasBom,
      eol: opts.eol,
      expectedMtime: opts.expectedMtime,
      force: opts.force,
    }),
  );
}

/**
 * 批量查询文件落盘时间（**旧版轮询接口**，已不再调用）。
 * 「外部改动检测」改为推送通道，见 `composables/core/push.ts`；此处仅作兼容保留。
 */
export function mtimes(
  paths: string[],
): Promise<{ items: Record<string, { mtimeMs: number; size: number } | null> }> {
  return request("POST", "/mtimes", { paths }, { silent: true });
}

/** 项目文件索引（「快速打开」用）：返回相对路径列表（'/' 分隔）+ 是否被预算截断。 */
export function projectFiles(path: string, key?: string): Promise<{ files: string[]; truncated: boolean }> {
  // 这是**全量递归扫描**，全项目最贵的一次读；缓存它收益最大（切面板不该重扫一遍）。
  return cachedRead(`files:${key ?? ""}:${path}`, () =>
    request<{ files: string[]; truncated: boolean }>("GET", `/files${qs({ key, path })}`),
  );
}

/** 搜索（可指定任意绝对目录作范围，path 缺省用工作区根）。caseSensitive/regex 控制匹配模式。 */
export function search(
  q: string,
  opts: { key?: string; path?: string; limit?: number; caseSensitive?: boolean; regex?: boolean } = {},
): Promise<{ matches: string[]; byContent?: string[]; snippets?: Record<string, string>; truncated: boolean; scope: string }> {
  return request(
    "GET",
    `/search${qs({
      key: opts.key,
      q,
      path: opts.path,
      limit: opts.limit?.toString(),
      case: opts.caseSensitive ? "1" : undefined,
      regex: opts.regex ? "1" : undefined,
    })}`,
  );
}

/** 跨文件批量替换（仅限工作区根内；scope 缺省用工作区根）。 */
export function batchReplace(
  q: string,
  replacement: string,
  opts: { key?: string; scope?: string; caseSensitive?: boolean; regex?: boolean } = {},
): Promise<ReplaceOutcome> {
  return writeThen(
    request<ReplaceOutcome>("POST", "/replace", {
      key: opts.key,
      scope: opts.scope,
      q,
      replacement,
      caseSensitive: opts.caseSensitive,
      regex: opts.regex,
    }),
  );
}

/** 全局内容搜索（grep 式）：按行命中、按文件分组，供左栏「搜索」tab 展示与跳转。
 *  sub：限定在项目内某子目录下搜索（相对项目根的文件夹路径，可空）。 */
export function grep(
  q: string,
  opts: { key?: string; path?: string; sub?: string; caseSensitive?: boolean; regex?: boolean } = {},
): Promise<{
  files: Array<{ rel: string; hits: Array<{ ln: number; text: string }> }>;
  total: number;
  truncated: boolean;
  scope: string;
}> {
  return request(
    "GET",
    `/grep${qs({
      key: opts.key,
      q,
      path: opts.path,
      sub: opts.sub || undefined,
      case: opts.caseSensitive ? "1" : undefined,
      regex: opts.regex ? "1" : undefined,
    })}`,
  );
}

/**
 * 是否远端引用（`ssh://<hostId>/<path>`）。远端根下不支持「用本机程序打开」「压缩/解压」
 * 等依赖本地文件系统的操作，UI 需据此提前拦截，而不是等 host 返回 501。
 */
export function isRemoteRef(path: string): boolean {
  return path.startsWith("ssh://");
}

/** “我的电脑”顶层入口（盘符/Home/下载/工作区/回收站）。 */
export function myComputer(key?: string): Promise<{ items: MyComputerItem[] }> {
  return cachedRead(`mycomputer:${key ?? ""}`, () => request<{ items: MyComputerItem[] }>("GET", `/mycomputer${qs({ key })}`));
}

/** 驱动器列表（「此电脑」的「设备和驱动器」视图：含容量与卷标）。 */
export function drives(): Promise<{ drives: DriveInfo[] }> {
  // 选择文件夹弹窗每次挂载都会问一遍，但盘符几乎不变。
  return cachedRead("drives", () => request<{ drives: DriveInfo[] }>("GET", "/drives"));
}

/* ── SSH 远端主机管理 ── */

/** 主机配置（host 侧已抹去机密：只有 authType 与 hasSecret 标记）。 */
export interface SshHostPublic {
  id: string;
  name: string;
  host: string;
  port: number;
  user: string;
  authType: "password" | "key";
  hasSecret: boolean;
  privateKeyPath?: string;
  createdAt: string;
}

export interface SshTestResult {
  ok: boolean;
  banner?: string;
  error?: string;
  stage?: string;
  fingerprint?: string;
}

export function sshHosts(): Promise<{ hosts: SshHostPublic[] }> {
  return request("GET", "/ssh/hosts", undefined, { silent: true });
}

export function sshAdd(body: {
  name?: string;
  host: string;
  port: number;
  user: string;
  auth: { type: "password"; password: string } | { type: "key"; privateKeyPath: string };
}): Promise<{ host: SshHostPublic }> {
  return request("POST", "/ssh/add", body);
}

export function sshUpdate(body: {
  id: string;
  name?: string;
  host?: string;
  port?: number;
  user?: string;
  auth?: { type: "password"; password?: string } | { type: "key"; privateKeyPath?: string };
}): Promise<{ host: SshHostPublic }> {
  return request("POST", "/ssh/update", body);
}

export function sshRemove(id: string): Promise<{ id: string }> {
  return request("POST", "/ssh/remove", { id });
}

/**
 * 测试连接：`{ id }` 走已保存的配置；也可内联 `{ host, port, user, auth }` 试一套
 * 还没保存的凭据（添加表单的「测试连接」用这条路径）。
 */
export function sshTest(body: {
  id?: string;
  host?: string;
  port?: number;
  user?: string;
  auth?: { type?: string; password?: string; privateKeyPath?: string };
}): Promise<SshTestResult> {
  return request("POST", "/ssh/test", body);
}

/**
 * 连接冒烟：复用已缓存连接跑一次 `echo ok`，判断主机此刻是否在线（**旧版接口**，已不再调用）。
 * 连接指示灯与「添加后立刻验证」都改走推送通道的显式检查（`push.ts` 的 `checkSshNow`）；
 * 此处仅作兼容保留。
 */
export function sshPing(id: string): Promise<{ alive: boolean; error?: string }> {
  return request("POST", "/ssh/ping", { id }, { silent: true });
}

/**
 * 把远端文件取回本机临时文件，返回可直接交给官方查看器的本地绝对路径。
 * 宿主侧的文件查看器只认本机路径（远端 `ssh://` 引用它解析不了），故远端一律先落地再打开。
 */
export function sshCacheFile(path: string): Promise<{ path: string; name: string; size: number }> {
  return request("POST", "/ssh/cache", { path });
}

/* ---------- Windows 系统回收站 ---------- */

/** 列出系统回收站条目。 */
export function recycleList(): Promise<{ items: RecycleEntry[] }> {
  return request("GET", "/recycle-list");
}

/** 系统回收站条目数（清空进度轮询用）。 */
export function recycleCount(): Promise<{ count: number }> {
  return request("GET", "/recycle-count");
}

/** 恢复（还原）回收站条目到原路径。会往原目录写回文件 → 读缓存作废。 */
export function recycleRestore(fullPath: string): Promise<{ restored: boolean }> {
  return writeThen(request<{ restored: boolean }>("POST", "/recycle-restore", { fullPath }));
}

/** 彻底删除回收站条目（不可恢复）。 */
export function recycleDelete(fullPath: string): Promise<{ deleted: boolean }> {
  return writeThen(request<{ deleted: boolean }>("POST", "/recycle-delete", { fullPath }));
}

/** 清空回收站（后端异步执行，调用后轮询 recycleCount 展示进度）。 */
export function recycleEmpty(): Promise<{ started: boolean }> {
  return writeThen(request<{ started: boolean }>("POST", "/recycle-empty", {}));
}

/** 浏览任意绝对目录（不受工作区限制）。 */
export function browse(path: string, key?: string): Promise<BrowseListing> {
  return request("GET", `/browse${qs({ key, path })}`);
}

/** 构造任意文件的下载链接（走 /download 路由，触发浏览器下载）。 */
export function downloadHref(path: string): string {
  return `${apiBase}/download?path=${encodeURIComponent(path)}`;
}

/** 构造 PDF 的内联预览链接（走 /download?inline=1，Content-Type: application/pdf）。
 *  Chromium 对 iframe 加载 data: URL 的 PDF 会白屏，必须用真实 URL 直接加载。 */
export function pdfHref(path: string): string {
  return `${apiBase}/download?inline=1&path=${encodeURIComponent(path)}`;
}

/** 构造图片文件的内联链接（走 /_read-image 路由，Content-Type 为 image/*，用于栅格缩略图）。 */
export function thumbHref(path: string): string {
  return `${apiBase}/_read-image?path=${encodeURIComponent(path)}`;
}

/**
 * 终端：打开一个常驻 shell 会话的 SSE 流（输出/工作目录）。
 * 位置参数签名（onEvent, opts, signal）与 terminalStore 保持一致；onEvent 收到每个 stream 事件帧。
 */
export function streamTerminal(
  onEvent: (ev: import("../../../shared/types").TermStreamEvent) => void,
  opts: { session: string; shell: "cmd" | "powershell"; cwd?: string; key?: string },
  signal?: AbortSignal,
): Promise<void> {
  const params = new URLSearchParams({ session: opts.session, shell: opts.shell });
  if (opts.cwd) params.set("cwd", opts.cwd);
  if (opts.key) params.set("key", opts.key);
  return openEventStream(`/exec-stream?${params.toString()}`, onEvent, signal);
}

/**
 * 终端：打开**一条覆盖全部会话**的多路复用流（无论开几个终端都只占一条连接）。
 *
 * 帧里多带 `session` 字段，由调用方按会话分发。之所以必须复用：宿主是 `node:http`（HTTP/1.1），
 * 浏览器对同一源只允许约 6 条并发连接——每个终端各占一条 SSE 时，开几个终端就会把配额耗尽，
 * 新会话的 `/exec-stream` 与 `/exec-input` 会被浏览器**永久排队**（一直空白、且无法输入）。
 *
 * ⛔ 传输用 **WebSocket**（`/exec-mux-ws`）而不是 SSE：SSE 每条占一个 HTTP/1.1 同源连接池
 * 配额——终端页叠加 session 流 / push 通道后逼近 6 条上限，`/exec-input` 等 REST 请求被浏览器
 * 排队（「敲键盘无响应 / 整页请求假死」）。WS 连接不计入该配额，终端页对 HTTP 池占用为 0。
 * 帧格式：服务端每帧一条 JSON（同 MuxTermStreamEvent，无 SSE 的 `data:` 包装）。
 */
export function streamTerminalMux(
  onEvent: (ev: import("../../../shared/types").MuxTermStreamEvent) => void,
  opts: { key?: string },
  signal?: AbortSignal,
): Promise<void> {
  const href = typeof location !== "undefined" ? location.href : "http://127.0.0.1/";
  const url =
    wsEndpointUrl(apiBase, href, "exec-mux-ws") +
    (opts.key ? `?key=${encodeURIComponent(opts.key)}` : "");
  return new Promise<void>((resolve) => {
    let ws: WebSocket;
    try {
      ws = new WebSocket(url);
    } catch {
      resolve();
      return;
    }
    let settled = false;
    /** 关闭并结束 Promise：连接出错、服务端关闭、或外部 abort。 */
    const finish = (): void => {
      if (settled) return;
      settled = true;
      try {
        signal?.removeEventListener("abort", onAbort);
      } catch {
        /* ignore */
      }
      try {
        ws.close();
      } catch {
        /* 已关闭：忽略 */
      }
      resolve();
    };
    const onAbort = (): void => finish();
    signal?.addEventListener("abort", onAbort);
    ws.onmessage = (ev) => {
      try {
        onEvent(JSON.parse(String(ev.data)) as import("../../../shared/types").MuxTermStreamEvent);
      } catch {
        /* 非 JSON 帧：忽略 */
      }
    };
    ws.onclose = finish;
    // 错误必随 onclose，统一在 finish 收尾；resolve 语义与旧 SSE 版一致（挂到断开才结束）。
    ws.onerror = () => {};
  });
}

/**
 * 打开一条 SSE 连接并把每个数据帧交给 `onEvent`；连接出错 / 服务端关闭 / 被 abort 时结束。
 *
 * 关键：SSE 是长连接，Promise 必须挂到 `onerror` 才 resolve。
 * 若同步返回，调用方的 await 会立刻结束 → 误判「已断开」→ 每 500ms 新建一条连接，
 * 旧连接从不关闭，很快占满浏览器每域名 6 条连接上限，后续 /exec-input 被永久排队（表现为终端无法输入）。
 */
function openEventStream<T>(url: string, onEvent: (ev: T) => void, signal?: AbortSignal): Promise<void> {
  return new Promise<void>((resolve) => {
    const es = new EventSource(`${apiBase}${url}`);
    let settled = false;
    /** 关闭并结束 Promise：连接出错、服务端关闭、或外部 abort。 */
    const finish = (): void => {
      if (settled) return;
      settled = true;
      try {
        es.close();
      } catch {
        /* 已关闭：忽略 */
      }
      resolve();
    };
    es.onmessage = (msg) => {
      try {
        onEvent(JSON.parse(msg.data) as T);
      } catch {
        /* 心跳帧（": ping"）或非 JSON：忽略 */
      }
    };
    es.onerror = finish;
    if (signal) {
      if (signal.aborted) finish();
      else signal.addEventListener("abort", finish, { once: true });
    }
  });
}

/**
 * 终端：派生（或复用）后端常驻 shell 会话，返回该会话当前工作目录。
 *
 * 多路复用流只负责接收输出，会话本身必须由这里显式建立——否则「没有任何会话」时
 * 复用流上永远不会有该会话的输出。幂等：同 session 同 shell 同 cwd 时直接复用既有会话。
 */
/**
 * 终端会话的派生参数：本机 shell，或**远端 ssh**（凭据取自主机配置，自动登录、不弹口令）。
 * 判别用 `kind`；不带 `kind` 时按本机处理（兼容旧调用点）。
 */
export type TermSessionOpen =
  | { session: string; kind?: "local"; shell: "cmd" | "powershell"; cwd?: string; key?: string }
  | { session: string; kind: "ssh"; hostId: string; remote: string; key?: string };

/**
 * 终端：派生一个常驻会话。返回宿主**实际**建立的后端类型（`kind`）。
 *
 * `kind` 是握手信号：老宿主不认识 `kind:"ssh"`，会把请求当本机会话照建成功 —— 只看有没有
 * 报错无法区分「已登录远端」与「拿到一个本机 cmd」，故一律以回执里的 kind 为准。
 */
export function openTerminalSession(body: TermSessionOpen): Promise<{ cwd: string; kind?: "local" | "ssh" }> {
  return request<{ cwd: string; kind?: "local" | "ssh" }>("POST", "/exec-open", body);
}

/**
 * 终端：上报伪终端尺寸（前端 fit 后调用）。
 * silent：fit 是高频动作，会话可能刚被关掉 —— 失败没有可恢复动作，不该弹提示刷屏。
 * 老 host 无该路由（404）时静默失败，终端只是尺寸不准，不影响使用。
 */
export function resizeTerminalSession(session: string, cols: number, rows: number): Promise<unknown> {
  return request("POST", "/exec-resize", { session, cols, rows }, { silent: true });
}

/**
 * 终端：向常驻 shell 写入输入（Enter 即时执行，由服务端转 \r）。
 * silent=true：输入失败不弹 toast——按键是高频流，逐次提示会刷屏；
 * 顺序与合并由 terminalStore 的输入队列负责。
 */
export function sendTerminalInput(session: string, data: string): Promise<unknown> {
  return request("POST", "/exec-input", { session, data }, { silent: true });
}

/** 终端：终止常驻 shell 会话（含 Windows 进程树清理）。 */
export function killExec(session: string): Promise<unknown> {
  return request("POST", "/exec-kill", { session });
}

/**
 * 终端：查询 host 进程权限态（是否以管理员 / root 运行）。
 * ConPTY 子进程继承 host 令牌，因此该值即「终端里命令的权限级别」。
 */
export function termEnv(): Promise<{ elevated: boolean }> {
  return request("GET", "/term-env");
}

/** 子代理（0.1.5）：经宿主 ctx.subagents 建立官方子代理会话（失败回退一次性运行）。 */
export function spawnSubagent(
  path: string,
  isDir: boolean,
  instruction: string,
  session?: string,
): Promise<{
  ok: boolean;
  sessionId?: string;
  runId?: string;
  provider?: string;
  mode?: "continuable" | "oneshot";
  output?: string;
  error?: string;
}> {
  return request("POST", "/subagent/spawn", { path, isDir, instruction, session });
}

/** 建目录。 */
export function mkdir(path: string, key?: string): Promise<{ path: string }> {
  return writeThen(request<{ path: string }>("POST", "/mkdir", { key, path }));
}

/** 重命名/移动。 */
export function rename(from: string, to: string, key?: string): Promise<{ path: string }> {
  return writeThen(request<{ path: string }>("POST", "/rename", { key, from, to }));
}

/** 删除。 */
export function remove(path: string, key?: string): Promise<{ path: string }> {
  return writeThen(request<{ path: string }>("DELETE", `/remove${qs({ key, path })}`));
}

/** 新建文本文件。 */
export function touch(path: string, key?: string): Promise<{ path: string }> {
  return writeThen(request<{ path: string }>("POST", "/touch", { key, path }));
}

/** 复制 src 到 destDir（粘贴-复制）。 */
export function copyEntry(src: string, destDir: string, key?: string): Promise<{ path: string }> {
  return writeThen(request<{ path: string }>("POST", "/copy", { key, src, destDir }));
}

/** 上传文件字节到目标目录（浏览器 File 直接作请求体，后端流式落盘）。 */
export async function uploadFile(destDir: string, file: File, key?: string): Promise<{ path: string }> {
  api.pending++;
  try {
    const res = await fetch(`${apiBase}/upload${qs({ dir: destDir, name: file.name, key })}`, {
      method: "POST",
      body: file,
    });
    const payload = (await res.json().catch(() => ({ ok: false, error: "bad response" }))) as ApiResponse<{ path: string }>;
    if (!payload.ok) {
      throw new Error(payload.error || `HTTP ${res.status}`);
    }
    // 目录内容变了：列目录缓存必须作废，否则「上传完看不到新文件」。
    invalidateRead();
    return payload.data as { path: string };
  } finally {
    api.pending--;
  }
}

/** 属性（stat 详情）。 */
export function detail(path: string): Promise<FileDetail> {
  return request("GET", `/detail${qs({ path })}`);
}

/**
 * 目标是否存在（**silent** 存在性探测）。
 *
 * 与 `detail()` 的区别在于语义：只有当服务端**明确**回答「不存在」时才返回 false，
 * 且这种情况属于预期结果（另存为新文件），不能弹错误提示。
 *  - 404 → `false`，静默；
 *  - 其它失败（网络中断 / 500 / 被取消）→ 提示后**抛出**，绝不能退化成 `false`：
 *    调用方把「探测失败」当成「不存在」就会跳过覆盖确认，直接写坏同名文件。
 *
 * `opts.silent` 供**后台巡检**类调用方使用（如窗口重新获得焦点时核对项目根是否还在）：
 * 语义完全不变（失败依旧抛出、依旧不降级成 `false`），只是**不弹提示** ——
 * 否则宿主抖动一下、焦点每切一次就弹一条用户看不懂的错误。
 */
export async function exists(path: string, opts?: { silent?: boolean }): Promise<boolean> {
  try {
    await request<FileDetail>("GET", `/detail${qs({ path })}`, undefined, { silent: true });
    return true;
  } catch (e) {
    if (e instanceof ApiError && e.status === 404) return false;
    if (!isAbortError(e) && !opts?.silent) {
      toastError(e instanceof ApiError ? mapError(e.status, e.message) : t("errNetwork"));
    }
    throw e;
  }
}

/**
 * 静默取路径详情：路径不存在 / 连不上 / 未知主机一律返回 `null`，**不弹提示**。
 *
 * 用于「先探类型再决定动作」的场景（如编辑器判断一个 SSH 引用是文件还是目录）：
 * 这类探测失败本身是预期结果，不该打断用户。需要区分「不存在」与「探测失败」时用 `exists()`。
 */
export async function detailOrNull(path: string): Promise<FileDetail | null> {
  try {
    return await request<FileDetail>("GET", `/detail${qs({ path })}`, undefined, { silent: true });
  } catch {
    return null;
  }
}

/**
 * 读取文本文件内容（编辑用；大文件由后端以 413 拒绝）。
 * 返回内容 + 编码 / 行尾 / BOM / mtime 元数据；编码可显式覆盖以支持状态栏手动切换。
 *
 * ⛔ **绝不缓存**：外部改动检测、换编码重读、另存为重读都依赖「真的读了一次盘」。
 * 缓存它会让用户看到旧内容、甚至把旧内容写回文件。
 */
export function readFile(path: string, opts: TextReadOptions = {}): Promise<FileTextRead> {
  return request(
    "GET",
    `/read${qs({
      path,
      encoding: opts.encoding,
      bom: opts.hasBom === undefined ? undefined : opts.hasBom ? "1" : "0",
    })}`,
  );
}

/** 压缩单文件或目录为 .zip（to 缺省放源同目录）。会在源目录写出 .zip → 读缓存作废。 */
export function compress(path: string, to?: string, key?: string): Promise<{ path: string }> {
  return writeThen(request<{ path: string }>("POST", "/compress", { key, path, to }));
}

/** 解压 .zip 到 destDir（缺省为 zip 所在目录）。会在目标目录写出文件 → 读缓存作废。 */
export function extract(zipPath: string, destDir?: string, key?: string): Promise<{ destDir: string; count: number }> {
  return writeThen(request<{ destDir: string; count: number }>("POST", "/extract", { key, zipPath, destDir }));
}

/** 用系统默认程序打开 / 在资源管理器中打开。 */
export function openExternal(path: string): Promise<{ path: string }> {
  return request("POST", "/openExternal", { path });
}

/* ---------- Git ---------- */

/** 取某目录下各子项的 git 状态聚合（状态徽标）。非仓库目录返回 inRepo:false。 */
export function gitStatus(dir: string): Promise<GitDirStatus> {
  // 目录树每列一层目录就问一次；切面板重建时整批重问纯属浪费。
  return cachedRead(`gitstatus:${dir}`, () => request<GitDirStatus>("GET", `/git/status${qs({ path: dir })}`));
}

/** 取某路径相对最近提交的改动文本（右键「查看改动」）。 */
export function gitDiff(path: string): Promise<GitAction> {
  return request("GET", `/git/diff${qs({ path })}`);
}

/** 暂存一个文件/目录（git add）。 */
export function gitAdd(path: string): Promise<GitAction> {
  return writeThenGit(request<GitAction>("POST", "/git/add", { path }));
}

/** 把文件/目录加入仓库根 .gitignore（git ignore）。 */
export function gitIgnore(path: string): Promise<GitAction> {
  return writeThenGit(request<GitAction>("POST", "/git/ignore", { path }));
}

/** 提交当前暂存的全部改动（git commit）。 */
export function gitCommit(path: string, message: string): Promise<GitAction> {
  return writeThenGit(request<GitAction>("POST", "/git/commit", { path, message }));
}

/** 丢弃工作区改动（git checkout -- <path>）——会改写工作树文件，读缓存整体作废。 */
export function gitDiscard(path: string): Promise<GitAction> {
  return writeThen(request<GitAction>("POST", "/git/discard", { path }));
}

/** 取消暂存（git restore --staged）。 */
export function gitUnstage(path: string): Promise<GitAction> {
  return writeThenGit(request<GitAction>("POST", "/git/unstage", { path }));
}

/** 取仓库级快照（Git 面板：未暂存/已暂存/未跟踪）。 */
export function gitPanel(path: string): Promise<GitPanel> {
  return cachedRead(`gitpanel:${path}`, () => request<GitPanel>("GET", `/git/panel${qs({ path })}`));
}

/** 取提交历史（Git 面板）。 */
export function gitLog(path: string, count = 20): Promise<GitLogItem[]> {
  return cachedRead(`gitlog:${path}:${count}`, () => request<GitLogItem[]>("GET", `/git/log${qs({ path, count: String(count) })}`));
}

/** 分支操作（create / checkout / delete）。checkout 会改写工作树 → 读缓存整体作废。 */
export function gitBranch(path: string, action: "create" | "checkout" | "delete", name: string): Promise<GitAction> {
  const p = request<GitAction>("POST", "/git/branch", { path, action, name });
  return action === "checkout" ? writeThen(p) : writeThenGit(p);
}

/** 远程同步（fetch / pull / push）。pull 会改写工作树 → 读缓存整体作废。 */
export function gitSync(path: string, action: "fetch" | "pull" | "push"): Promise<GitAction> {
  const p = request<GitAction>("POST", "/git/sync", { path, action });
  return action === "pull" ? writeThen(p) : writeThenGit(p);
}

/** 命令台：在仓库根执行任意 git 命令（args 不含开头的 git）。 */
export function gitRun(path: string, args: string[]): Promise<GitRunResult> {
  return request("POST", "/git/run", { path, args });
}

/**
 * 克隆（git）/ 检出（svn）仓库到本地新目录。
 *
 * 走 `writeThen`（**全量**失效读缓存）：新目录会出现在文件列表里，且它本身可能就是一个
 * 仓库（影响父目录的 git 状态徽标）—— 只失效 `git` 前缀不够，目录树会停在旧快照上。
 *
 * 超时给足：git 走宿主侧 10 分钟上限、svn 同理；前端 request 不另设超时（大仓库要慢）。
 */
export function cloneRepo(kind: RepoCloneKind, body: RepoCloneRequest): Promise<RepoCloneResult> {
  return writeThen(request<RepoCloneResult>("POST", kind === "git" ? "/git/clone" : "/svn/checkout", body));
}

/** GitHub Release 创建（幂等）：origin 为 GitHub 时用本机凭据创建/复用 release。 */
export function gitGhRelease(
  path: string,
  tag: string,
  name: string,
  body: string,
): Promise<{ created: boolean; url: string; skipped?: string }> {
  return request("POST", "/git/gh-release", { path, tag, name, body });
}

/** GitHub Releases 列表（最近 20 条）：origin 非 GitHub / 无凭据时返回 skipped。 */
export function gitGhReleases(path: string): Promise<{
  list: Array<{ tag: string; name: string; url: string; date: string }>;
  skipped?: string;
}> {
  return request("GET", `/git/gh-releases${qs({ path })}`);
}

/** 读取 git user 全局配置（name/email）。 */
export function gitGetUserConfig(): Promise<{ name: string; email: string }> {
  return request("GET", "/git/config");
}

/** 设置 git user 全局配置。 */
export function   gitSetUserConfig(name: string, email: string): Promise<GitAction> {
    return request("POST", "/git/config", { name, email });
  }

  /* ---------- SVN（直接调用 svn CLI） ---------- */

  /** SVN 工作副本 / 环境探测结果。 */
  export interface SvnInfo {
    inRepo: boolean;
    root: string | null;
    /** 本机是否安装了 `svn` 命令行（否则所有操作不可用）。 */
    svnAvailable: boolean;
    url: string | null;
    revision: string | null;
    /** 相对仓库根的路径（如 `/trunk/src`），便于展示。 */
    relativeUrl: string | null;
  }

  /** svn 命令执行结果（失败/非零退出码也正常返回，由前端判断）。 */
  export interface SvnRunResult {
    code: number;
    stdout: string;
    stderr: string;
  }

  /** 检测给定目录是否处于 SVN 工作副本内，并返回仓库信息。 */
  export function svnInfo(path: string): Promise<SvnInfo> {
    return cachedRead(`svninfo:${path}`, () => request<SvnInfo>("GET", `/svn/info${qs({ path })}`));
  }

  /** 在给定目录的 SVN 工作副本上执行任意子命令，返回原始输出。 */
  export function svnRun(path: string, args: string[]): Promise<SvnRunResult> {
    return request("POST", "/svn/run", { path, args });
  }

/** 读取全量持久化状态（偏好/收藏/布局，后端 JSON 配置文件）。 */
export function loadPersist(): Promise<Record<string, unknown>> {
  return request("GET", "/persist");
}

/** 覆盖写入单个持久化 key。 */
export function savePersist(key: string, value: unknown): Promise<{ k: string }> {
  return request("POST", "/persist", { k: key, v: value });
}

/** 后台任务归档日志：读取（跨会话保留的历史任务）。 */
export async function loadTaskLogs(): Promise<TaskLogRecord[]> {
  const d = await request<Record<string, unknown>>("GET", "/persist?k=taskLogs");
  const arr = Array.isArray(d?.taskLogs) ? d.taskLogs : [];
  return arr as TaskLogRecord[];
}

/** 后台任务归档日志：整体覆写（追加归档 / 清除历史共用）。 */
export function saveTaskLogs(logs: TaskLogRecord[]): Promise<{ k: string }> {
  return request("POST", "/persist", { k: "taskLogs", v: logs });
}

/** 后台任务归档：读取全量（{ 日期: 记录[] }，逐日独立 JSON 文件）。 */
export async function loadTaskArchives(): Promise<TaskArchiveMap> {
  const d = await request<{ map?: Record<string, unknown> }>("GET", "/task-archives");
  return (d?.map ?? {}) as TaskArchiveMap;
}

/** 后台任务归档：整体覆写（归档追加 / 清空共用）。 */
export function saveTaskArchives(map: TaskArchiveMap): Promise<{ ok: boolean }> {
  return request("POST", "/task-archives", { map });
}

export type { SearchHit };