/**
 * VS Code 编辑器面板的持久化状态（项目目录 / 已开标签 / 激活标签 / 展开节点 / 左栏比例 /
 * 目录树滚动位置 / 每个文件的查看器位置）。
 *
 * 写入 host 的 /persist（key="vscode"），与文件工作台的 prefs 同库但独立 key。
 * 标签内容不持久化（内容在磁盘上，重开时重新读取），只持久化路径、激活态与浏览位置，
 * 使下次打开仍停在关闭前的位置。
 */
import { reactive, ref } from "vue";
import * as api from "../composables/core/useApi";
import type { EolStyle, TextEncoding } from "../../shared/types";

/** 单个打开文件的查看器位置（编辑器滚动 + 光标）。 */
export interface FileViewState {
  /** 编辑器滚动位置（px）。 */
  scrollTop?: number;
  /** 光标在文档中的字符偏移。 */
  anchor?: number;
}

/**
 * 一个已打开文件的编辑缓冲区。
 *
 * 文档内容一律以 `\n` 表示换行（编辑器内部只用 LF）；`encoding` / `hasBom` / `eol`
 * 是随文件往返的元数据，保存时由 host 按它们还原字节，避免 CRLF 被静默改成 LF、
 * GBK 文件被写成乱码。`mtime` 是「外部改动检测」的基线（读/写时刷新）。
 */
export interface OpenBuffer {
  /** 已归一为 `\n` 的文本。 */
  content: string;
  /** 是否有未保存改动。 */
  dirty: boolean;
  encoding: TextEncoding;
  hasBom: boolean;
  eol: EolStyle;
  /** 最近一次读/写时的落盘时间（毫秒戳）。 */
  mtime: number;
  /** 探测为非文本文件：不给编辑器，只提示用系统程序打开。 */
  binary: boolean;
  /** 检测到磁盘已被外部改写、而本地缓冲区又有未保存改动时的冲突标记。 */
  conflict: boolean;
}

export interface VSCodeState {
  /** 项目根目录（独立选择，与工作区 root 解耦）。 */
  projectDir: string | null;
  /** 最近打开过的项目目录（去重、新的在前，最多 10 条），供顶栏下拉一键切换。 */
  recentProjects: string[];
  /** 已打开的文件绝对路径列表（标签顺序）。 */
  openTabs: string[];
  /** 当前激活标签的绝对路径。 */
  activeTab: string | null;
  /** 目录树中已展开的目录绝对路径。 */
  expanded: string[];
  /**
   * 已应用过「默认展开」的项目根路径。
   *
   * 首次打开某项目时自动展开根 + 一级目录；之后严格按 `expanded` 还原。
   * 用独立集合记录「播种过」的根，避免用户把全部目录折叠后（expanded 为空）
   * 下次打开又被当成首次访问而重新全展开。
   */
  expandedSeeded: string[];
  /** 左栏（目录树）占比 0–1。 */
  split: number;
  /** 底部终端停靠面板高度（px；最小化时只保留标题条）。 */
  termHeight: number;
  /** 左栏目录树的滚动位置（px）。 */
  treeScroll: number;
  /** 各打开文件的查看器位置（键 = 文件绝对路径）。 */
  views: Record<string, FileViewState>;
}

const defaults: VSCodeState = {
  projectDir: null,
  recentProjects: [],
  openTabs: [],
  activeTab: null,
  expanded: [],
  expandedSeeded: [],
  split: 0.26,
  termHeight: 260,
  treeScroll: 0,
  views: {},
};

export const vsState = reactive<VSCodeState>({ ...defaults });

/**
 * 持久化状态已就绪、且项目根已向 host 注册完毕。
 *
 * 目录树**必须**等这个标记才建树：否则它会在 `initVSCodeState()` 刚把 projectDir 写进响应式
 * 状态时就抢跑（此时 `/root` 尚未注册、另一面板可能正在卸载并全局取消请求），
 * 表现为「初次进去是展开的却没有内容」，要手动折叠再展开才出来。
 */
export const vsReady = ref(false);

/** 最近项目列表上限。 */
const RECENT_MAX = 10;

/**
 * 记录一个项目目录到「最近项目」：去重后置顶，最多 10 条。
 *
 * 纯内存变更（与 `projectDir` 一起由 `persistVSCode()` 落盘）；调用方负责触发落盘。
 */
export function rememberProject(dir: string): void {
  const key = dir.trim();
  if (!key) return;
  vsState.recentProjects = [key, ...vsState.recentProjects.filter((p) => p !== key)].slice(0, RECENT_MAX);
}

let loaded = false;

/** 读回单条查看器位置（做类型与范围校验，脏数据丢弃）。 */
function parseView(raw: unknown): FileViewState | null {
  if (!raw || typeof raw !== "object") return null;
  const v = raw as Record<string, unknown>;
  const out: FileViewState = {};
  if (typeof v.scrollTop === "number" && Number.isFinite(v.scrollTop) && v.scrollTop >= 0) {
    out.scrollTop = v.scrollTop;
  }
  if (typeof v.anchor === "number" && Number.isFinite(v.anchor) && v.anchor >= 0) {
    out.anchor = v.anchor;
  }
  return out.scrollTop === undefined && out.anchor === undefined ? null : out;
}

async function loadOnce(): Promise<void> {
  if (loaded) return;
  loaded = true;
  const data = (await api.loadPersist().catch(() => null)) as Record<string, unknown> | null;
  const raw = (data?.vscode as Record<string, unknown>) ?? {};
  if (typeof raw.projectDir === "string") vsState.projectDir = raw.projectDir;
  if (Array.isArray(raw.recentProjects)) {
    vsState.recentProjects = [
      ...new Set(raw.recentProjects.filter((s): s is string => typeof s === "string" && s !== "")),
    ].slice(0, RECENT_MAX);
  }
  // 当前项目必须在「最近项目」里：首版没有历史记录时也能立即作为最近项出现。
  if (vsState.projectDir) rememberProject(vsState.projectDir);
  if (Array.isArray(raw.openTabs)) vsState.openTabs = raw.openTabs.filter((s) => typeof s === "string");
  if (typeof raw.activeTab === "string") vsState.activeTab = raw.activeTab;
  if (Array.isArray(raw.expanded)) vsState.expanded = raw.expanded.filter((s) => typeof s === "string");
  if (Array.isArray(raw.expandedSeeded)) {
    vsState.expandedSeeded = raw.expandedSeeded.filter((s) => typeof s === "string");
  }
  if (typeof raw.split === "number" && raw.split > 0.1 && raw.split < 0.9) vsState.split = raw.split;
  if (typeof raw.termHeight === "number" && Number.isFinite(raw.termHeight) && raw.termHeight >= 100) {
    vsState.termHeight = Math.min(1200, raw.termHeight);
  }
  if (typeof raw.treeScroll === "number" && Number.isFinite(raw.treeScroll) && raw.treeScroll >= 0) {
    vsState.treeScroll = raw.treeScroll;
  }
  if (raw.views && typeof raw.views === "object") {
    const views: Record<string, FileViewState> = {};
    for (const [k, v] of Object.entries(raw.views as Record<string, unknown>)) {
      const parsed = parseView(v);
      if (parsed) views[k] = parsed;
    }
    vsState.views = views;
  }
  // 激活标签若已不在列表，回退到第一个（或 null）。
  if (vsState.activeTab && !vsState.openTabs.includes(vsState.activeTab)) {
    vsState.activeTab = vsState.openTabs[0] ?? null;
  }
}

/** 启动时拉取已持久化的 VS Code 状态（不阻塞挂载，先以默认值渲染）。 */
export async function initVSCodeState(): Promise<void> {
  await loadOnce().catch(() => undefined);
}

/** 把当前 VS Code 状态落盘（路径/激活/展开/比例/位置变化后调用）。 */
export function persistVSCode(): void {
  // 查看器位置走非响应式暂存（见 viewStaging），只在落盘时合并进载荷，
  // 避免滚动时反复写响应式状态触发整树重渲染。
  const views: Record<string, FileViewState> = { ...vsState.views, ...viewStaging };
  void api.savePersist("vscode", { ...vsState, views });
}

let pending: ReturnType<typeof setTimeout> | null = null;

/**
 * 节流落盘：滚动 / 光标这类高频变更用，合并 400ms 内的多次调用，
 * 避免逐帧写 /persist。关闭 / 切换文件前应显式调用 persistVSCode() 兜底。
 */
export function persistVSCodeSoon(): void {
  if (pending !== null) return;
  pending = setTimeout(() => {
    pending = null;
    persistVSCode();
  }, 400);
}

/**
 * 查看器位置的非响应式暂存（键 = 文件绝对路径）。
 *
 * 滚动 / 光标变化频率极高，若写进 `vsState` 会让所有依赖它的组件逐帧重渲染；
 * 这里先落在普通对象上，只在 `persistVSCode()` 落盘时合并进载荷。
 */
const viewStaging: Record<string, FileViewState> = {};

/** 记录某文件的查看器位置（并按需节流落盘）。 */
export function rememberFileView(path: string, view: FileViewState): void {
  if (!path) return;
  const prev = viewStaging[path];
  if (prev && prev.scrollTop === view.scrollTop && prev.anchor === view.anchor) return;
  viewStaging[path] = { ...view };
  persistVSCodeSoon();
}

/** 读取某文件的查看器位置（无记录返回空对象）。 */
export function fileViewOf(path: string | null): FileViewState {
  if (!path) return {};
  return viewStaging[path] ?? vsState.views[path] ?? {};
}

/* ---------- 未保存缓冲的跨面板暂存 ---------- */

/**
 * 「文件编辑器」面板在 DSH 里是随 tab 激活/失活挂载卸载的（host 会 unmount 非激活面板），
 * 而 buffer 内容按设计不落盘（以磁盘为准）。于是「切到别的 tab 再切回来」会丢掉未保存的编辑。
 * 这里在卸载时把 **dirty** 的缓冲区留在模块级暂存里（模块不随面板卸载而重置），
 * 重新挂载时恢复——既不需要持久化内容，也不会静默丢改动。
 */
let dirtyStash: Record<string, OpenBuffer> = {};

/** 面板卸载前暂存未保存的缓冲区（只留 dirty 项，干净缓冲下次从磁盘重读即可）。 */
export function stashOpenBuffers(buffers: Record<string, OpenBuffer>): void {
  dirtyStash = {};
  for (const [path, buf] of Object.entries(buffers)) {
    if (buf.dirty) dirtyStash[path] = { ...buf };
  }
}

/** 取出并清空暂存（重新挂载时调用一次，避免同一份内容被反复恢复）。 */
export function takeStashedBuffers(): Record<string, OpenBuffer> {
  const out = dirtyStash;
  dirtyStash = {};
  return out;
}
