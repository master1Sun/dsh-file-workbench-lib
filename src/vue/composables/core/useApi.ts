/**
 * API 客户端：封装对 host /api/dsh-file-workbench 的调用。
 *
 * 基址解析优先级：
 *   1. window.__DSH_FILE_WORKBENCH__?.apiBase（client 桥接注入，DOH running）
 *   2. import.meta.env.VITE_API_BASE（独立 vite dev 联调）
 *   3. 默认 '/api/dsh-file-workbench'
 */
import { ElMessage } from "element-plus";
import { computed, reactive } from "vue";
import type {
  ApiResponse,
  BrowseListing,
  DriveInfo,
  FileDetail,
  FsListing,
  GitAction,
  GitDirStatus,
  GitLogItem,
  GitPanel,
  GitRunResult,
  MyComputerItem,
  RecycleEntry,
  ReplaceOutcome,
  SearchHit,
  TaskArchiveMap,
  TaskLogRecord,
} from "../../../shared/types";
import { t } from "./i18n";

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
      if (!opts?.silent) ElMessage.error(t("errNetwork"));
      throw e instanceof Error ? e : new Error(String(e));
    }
    const payload = (await res.json().catch(() => ({ ok: false, error: "bad response" }))) as ApiResponse<T>;
    if (!payload.ok) {
      const err = payload.error || `HTTP ${res.status}`;
      // 工作区外操作被禁止的前端提示（服务端以 403 + “outside root/workspace” 标识）。
      if (res.status === 403 && /outside (root|workspace)/i.test(err)) {
        if (!opts?.silent) ElMessage.error(t("workspaceOutside"));
      } else if (!opts?.silent) {
        ElMessage.error(mapError(res.status, err));
      }
      throw new Error(err);
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

/** 取/设工作区根。 */
export function fetchRoot(key?: string): Promise<{ root: string }> {
  return request("GET", `/root${qs({ key })}`);
}
export function setRoot(path: string, key?: string): Promise<{ root: string }> {
  return request("POST", "/root", { key, path });
}

/** 列单层目录。 */
export function listDir(path: string, key?: string): Promise<FsListing> {
  return request("GET", `/list${qs({ key, path })}`);
}

/** 取父路径。 */
export function fetchParent(path: string, key?: string): Promise<{ root: string; parent?: string }> {
  return request("GET", `/parent${qs({ key, path })}`);
}

/** 保存文件。 */
export function saveFile(path: string, content: string, key?: string): Promise<{ path: string }> {
  return request("POST", "/save", { key, path, content });
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
  return request("POST", "/replace", {
    key: opts.key,
    scope: opts.scope,
    q,
    replacement,
    caseSensitive: opts.caseSensitive,
    regex: opts.regex,
  });
}

/** “我的电脑”顶层入口（盘符/Home/下载/工作区/回收站）。 */
export function myComputer(key?: string): Promise<{ items: MyComputerItem[] }> {
  return request("GET", `/mycomputer${qs({ key })}`);
}

/** 驱动器列表（「此电脑」的「设备和驱动器」视图：含容量与卷标）。 */
export function drives(): Promise<{ drives: DriveInfo[] }> {
  return request("GET", "/drives");
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

/** 恢复（还原）回收站条目到原路径。 */
export function recycleRestore(fullPath: string): Promise<{ restored: boolean }> {
  return request("POST", "/recycle-restore", { fullPath });
}

/** 彻底删除回收站条目（不可恢复）。 */
export function recycleDelete(fullPath: string): Promise<{ deleted: boolean }> {
  return request("POST", "/recycle-delete", { fullPath });
}

/** 清空回收站（后端异步执行，调用后轮询 recycleCount 展示进度）。 */
export function recycleEmpty(): Promise<{ started: boolean }> {
  return request("POST", "/recycle-empty", {});
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
  return new Promise<void>((resolve) => {
    const params = new URLSearchParams({ session: opts.session, shell: opts.shell });
    if (opts.cwd) params.set("cwd", opts.cwd);
    if (opts.key) params.set("key", opts.key);
    const es = new EventSource(`${apiBase}/exec-stream?${params.toString()}`);
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
        const ev = JSON.parse(msg.data) as import("../../../shared/types").TermStreamEvent;
        onEvent(ev);
      } catch {
        /* 心跳帧（": ping"）或非 JSON：忽略 */
      }
    };
    // 关键：SSE 是长连接，Promise 必须挂到这里才 resolve。
    // 若同步返回，调用方的 await 会立刻结束→误判「已断开」→每 500ms 新建一条连接，
    // 旧连接从不关闭，很快占满浏览器每域名 6 条连接上限，后续 /exec-input 被永久排队（表现为终端无法输入）。
    es.onerror = finish;
    if (signal) {
      if (signal.aborted) finish();
      else signal.addEventListener("abort", finish, { once: true });
    }
  });
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
  return request("POST", "/mkdir", { key, path });
}

/** 重命名/移动。 */
export function rename(from: string, to: string, key?: string): Promise<{ path: string }> {
  return request("POST", "/rename", { key, from, to });
}

/** 删除。 */
export function remove(path: string, key?: string): Promise<{ path: string }> {
  return request("DELETE", `/remove${qs({ key, path })}`);
}

/** 新建文本文件。 */
export function touch(path: string, key?: string): Promise<{ path: string }> {
  return request("POST", "/touch", { key, path });
}

/** 复制 src 到 destDir（粘贴-复制）。 */
export function copyEntry(src: string, destDir: string, key?: string): Promise<{ path: string }> {
  return request("POST", "/copy", { key, src, destDir });
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
    return payload.data as { path: string };
  } finally {
    api.pending--;
  }
}

/** 属性（stat 详情）。 */
export function detail(path: string): Promise<FileDetail> {
  return request("GET", `/detail${qs({ path })}`);
}

/** 读取文本文件内容（编辑 .txt 用；大文件由后端以 413 拒绝）。 */
export function readFile(path: string): Promise<{ content: string; size: number }> {
  return request("GET", `/read${qs({ path })}`);
}

/** 压缩单文件或目录为 .zip（to 缺省放源同目录）。 */
export function compress(path: string, to?: string, key?: string): Promise<{ path: string }> {
  return request("POST", "/compress", { key, path, to });
}

/** 解压 .zip 到 destDir（缺省为 zip 所在目录）。 */
export function extract(zipPath: string, destDir?: string, key?: string): Promise<{ destDir: string; count: number }> {
  return request("POST", "/extract", { key, zipPath, destDir });
}

/** 用系统默认程序打开 / 在资源管理器中打开。 */
export function openExternal(path: string): Promise<{ path: string }> {
  return request("POST", "/openExternal", { path });
}

/* ---------- Git ---------- */

/** 取某目录下各子项的 git 状态聚合（状态徽标）。非仓库目录返回 inRepo:false。 */
export function gitStatus(dir: string): Promise<GitDirStatus> {
  return request("GET", `/git/status${qs({ path: dir })}`);
}

/** 取某路径相对最近提交的改动文本（右键「查看改动」）。 */
export function gitDiff(path: string): Promise<GitAction> {
  return request("GET", `/git/diff${qs({ path })}`);
}

/** 暂存一个文件/目录（git add）。 */
export function gitAdd(path: string): Promise<GitAction> {
  return request("POST", "/git/add", { path });
}

/** 把文件/目录加入仓库根 .gitignore（git ignore）。 */
export function gitIgnore(path: string): Promise<GitAction> {
  return request("POST", "/git/ignore", { path });
}

/** 提交当前暂存的全部改动（git commit）。 */
export function gitCommit(path: string, message: string): Promise<GitAction> {
  return request("POST", "/git/commit", { path, message });
}

/** 丢弃工作区改动（git checkout -- <path>）。 */
export function gitDiscard(path: string): Promise<GitAction> {
  return request("POST", "/git/discard", { path });
}

/** 取消暂存（git restore --staged）。 */
export function gitUnstage(path: string): Promise<GitAction> {
  return request("POST", "/git/unstage", { path });
}

/** 取仓库级快照（Git 面板：未暂存/已暂存/未跟踪）。 */
export function gitPanel(path: string): Promise<GitPanel> {
  return request("GET", `/git/panel${qs({ path })}`);
}

/** 取提交历史（Git 面板）。 */
export function gitLog(path: string, count = 20): Promise<GitLogItem[]> {
  return request("GET", `/git/log${qs({ path, count: String(count) })}`);
}

/** 分支操作（create / checkout / delete）。 */
export function gitBranch(path: string, action: "create" | "checkout" | "delete", name: string): Promise<GitAction> {
  return request("POST", "/git/branch", { path, action, name });
}

/** 远程同步（fetch / pull / push）。 */
export function gitSync(path: string, action: "fetch" | "pull" | "push"): Promise<GitAction> {
  return request("POST", "/git/sync", { path, action });
}

/** 命令台：在仓库根执行任意 git 命令（args 不含开头的 git）。 */
export function gitRun(path: string, args: string[]): Promise<GitRunResult> {
  return request("POST", "/git/run", { path, args });
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
    return request("GET", `/svn/info${qs({ path })}`);
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