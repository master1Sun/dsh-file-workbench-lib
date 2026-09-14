/**
 * 工作台全局状态（模块级单例，便于多个组件共享）。
 */
import { reactive, ref } from "vue";
import { ElMessage } from "element-plus";
import * as api from "../composables/core/useApi";
import { t as translate } from "../composables/core/i18n";
import { prefs } from "../composables/core/settings";

export interface SearchState {
  q: string;
  hits: { name: string; path: string; isDir: boolean; broken: boolean; byContent?: boolean; snippet?: string }[];
  truncated: boolean;
  running: boolean;
  /** 最近一次搜索的实际范围目录。 */
  scope: string;
}

export interface WorkbenchState {
  /** 键（预留：按 DSH 会话隔离）。 */
  key: string;
  /** 工作区根（绝对路径）。 */
  root: string;
  /** 资源管理器当前展示目录。 */
  explorerPath: string;
  search: SearchState;
  /** 终端浮窗显示态（右键「在终端打开」置真）。 */
  termOpen: boolean;
  /** 终端是否已最小化到底部状态栏（会话保持存活；状态栏显示可点击的还原按钮）。 */
  termMinimized: boolean;
  /** 打开终端时请求的工作目录（空串 → 用工作区根）；TerminalDialog 挂载时消费。 */
  termRequestCwd: string;
}

export const wb = reactive<WorkbenchState>({
  key: "default",
  root: "",
  explorerPath: "",
  search: { q: "", hits: [], truncated: false, running: false, scope: "" },
  termOpen: false,
  termMinimized: false,
  termRequestCwd: "",
});

/** 顶部搜索框内容（共享响应式，输入即刻驱动列表区切换到结果面板）。 */
export const searchTerm = ref("");
export function setSearchTerm(v: string): void {
  searchTerm.value = v;
}

/** 文件搜索选项：区分大小写 / 正则模式（切换后立即按当前关键字重搜）。 */
export const searchCase = ref(false);
export const searchRegex = ref(false);

export function toast(kind: "error" | "ok" | "info", message: string): void {
  const opts = { message, duration: 3000 };
  if (kind === "error") ElMessage.error(opts);
  else if (kind === "info") ElMessage.info(opts);
  else ElMessage.success(opts);
}

/** 打开终端浮窗：path 非空时让首屏终端落在该目录（「在终端打开」场景）；最小化态自动还原。 */
export function openTerminal(path = ""): void {
  wb.termRequestCwd = path;
  wb.termOpen = true;
  wb.termMinimized = false;
}

/**
 * 「新建终端」请求序号：终端浮窗**已打开**时，从「文件」菜单点「新建终端」会自增它，
 * TerminalDialog 监听后新增一个终端标签页（首屏若没有则 onMounted 已自建，无需走这里）。
 */
export const termNewSeq = ref(0);

/**
 * 新建一个终端：终端未开则打开（首屏标签页落到 path），已开则追加一个标签页。
 *
 * 仅在「文件编辑器」的「文件」菜单下使用 —— 让新建的终端直接落在当前编辑器项目目录下。
 */
export function openNewTerminal(path = ""): void {
  wb.termRequestCwd = path;
  if (!wb.termOpen) {
    wb.termOpen = true;
    wb.termMinimized = false;
  } else {
    termNewSeq.value++;
  }
}

/** 设置工作区根并回到根目录。 */
export async function openFolder(path: string): Promise<string> {
  const { root } = await api.setRoot(path, wb.key);
  // 目标根与当前根相同（reload 后 syncToSession 把根重定向到同一会话目录）时不执行清空。
  if (root === wb.root) return root;
  wb.root = root;
  wb.explorerPath = root;
  wb.search.hits = [];
  wb.search.q = "";
  return root;
}

/**
 * 判断某路径当前是否可「写操作」（新建/改名/删除/压缩等）。
 * 工作区根目录内始终可操作；根目录外仅在开启 root 开关（prefs.allowOutsideRoot）时允许，
 * 否则只能查看（只读）。
 */
export function canOperatePath(path: string): boolean {
  if (!wb.root) return true;
  if (isWithinRoot(wb.root, path)) return true;
  return prefs.allowOutsideRoot;
}

/** 归一化后判断 target 是否位于 base（base 自身或下级）内。 */
function isWithinRoot(base: string, target: string): boolean {
  const norm = (v: string): string => v.replace(/[\\/]+/g, "/").replace(/\/$/, "");
  const b = norm(base).toLowerCase();
  const t = norm(target).toLowerCase();
  return t === b || t.startsWith(`${b}/`);
}

export async function ensureRoot(): Promise<void> {
  if (wb.root) return;
  const { root } = await api.fetchRoot(wb.key);
  if (root) {
    wb.root = root;
    wb.explorerPath = root;
    return;
  }
  // 默认打开当前会话（对话）的工作目录；不可得再退回系统目录选择器。
  const sessionDir = window.__DSH_FILE_WORKBENCH__?.getSessionDir?.();
  if (sessionDir) {
    await openFolder(sessionDir);
    return;
  }
  // 无根：尝试用宿主注入的选择器
  const picker = window.__DSH_FILE_WORKBENCH__?.pickDirectory;
  if (picker) {
    const picked = await picker();
    if (picked) await openFolder(picked);
  }
}

/** 在当前资源管理器目录下新建。 */
export async function createEntry(name: string, isDir: boolean): Promise<void> {
  const parent = wb.explorerPath || wb.root;
  if (!parent) throw new Error(translate("openFolderFirst"));
  const target = `${parent.replace(/[\\/]+$/, "")}/${name}`;
  if (isDir) await api.mkdir(target, wb.key);
  else await api.saveFile(target, "", { key: wb.key });
  toast("ok", isDir ? translate("dirCreated") : translate("fileCreated"));
}

export async function renameEntry(from: string, toName: string): Promise<void> {
  const parent = from.slice(0, Math.max(from.lastIndexOf("/"), from.lastIndexOf("\\")));
  const to = `${parent}/${toName}`;
  await api.rename(from, to, wb.key);
  toast("ok", translate("renamed"));
}

export async function removeEntry(path: string): Promise<void> {
  await api.remove(path, wb.key);
  toast("ok", translate("deleted"));
}

/**
 * 打开一个文件查看。
 * 文件查看统一走 DSH 右侧原生查看器 —— 宿主桥提供 openInSidebar 时把打开改道到 DSH；
 * 桥缺失（本地 dev / 独立调试）时仅提示，不再自建预览标签。
 */
export async function openPreview(path: string): Promise<void> {
  const bridge = window.__DSH_FILE_WORKBENCH__;
  if (bridge?.openInSidebar) {
    bridge.openInSidebar(path);
    return;
  }
}

/** 搜索请求自增序号：仅最新一次请求的结果生效，迟到的旧结果直接丢弃（防慢搜索竞态）。 */
let searchSeq = 0;

export async function runSearch(q: string, scopeDir?: string): Promise<void> {
  wb.search.q = q;
  if (!q.trim()) {
    wb.search.hits = [];
    wb.search.truncated = false;
    return;
  }
  const base = (scopeDir || wb.root || "").replace(/[\\/]+$/, "");
  if (!base) return;
  const seq = ++searchSeq;
  wb.search.running = true;
  try {
    const { matches, truncated, byContent, snippets } = await api.search(q, {
      key: wb.key,
      path: base,
      limit: 2000,
      caseSensitive: searchCase.value,
      regex: searchRegex.value,
    });
    if (seq !== searchSeq) return; // 已被更新的搜索取代 → 丢弃本次结果
    const contentSet = new Set(byContent ?? []);
    wb.search.hits = matches.map((m) => {
      const name = m.slice(m.lastIndexOf("/") + 1);
      return { name, path: `${base}/${m}`, isDir: false, broken: false, byContent: contentSet.has(m), snippet: snippets?.[m] };
    });
    wb.search.truncated = truncated;
    wb.search.scope = base;
  } finally {
    if (seq === searchSeq) wb.search.running = false;
  }
}
