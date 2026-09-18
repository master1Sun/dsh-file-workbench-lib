/**
 * 文件编辑器「搜索」面板的持久化状态。
 *
 * 面板本身用 `v-if` 挂载（切走即卸载），故其内部 ref 会随之丢失。这里把**按钮开关**
 * （大小写 / 整词 / 正则 / 视图模式 / 替换行与高级区展开态）与**搜索内容 + 结果**
 * 提升到模块级、按项目目录分槽缓存，实现：
 *  - 切走再回来：恢复上次的查询、开关与命中结果（不必重搜）；
 *  - 切换项目 / 项目被移除：旧项目的缓存不再匹配当前目录 → 自动清空。
 *
 * 开关是全局偏好（跨项目沿用），查询/结果是按项目隔离的数据。二者分开存：
 *  - `prefs`：单个对象，落 localStorage；
 *  - `byProject`：Map<projectDir, ProjectSearchState>，仅内存（结果可能较大，不落盘）。
 */
import { reactive } from "vue";

export type SearchViewMode = "list" | "tree";

/** 跨项目沿用的搜索开关偏好。 */
export interface SearchPrefs {
  caseSensitive: boolean;
  wholeWord: boolean;
  regex: boolean;
  preserveCase: boolean;
  viewMode: SearchViewMode;
  replaceOpen: boolean;
  advancedOpen: boolean;
}

/** 单个项目内的搜索数据（查询串 + 范围 glob + 上次命中的原始结果）。 */
export interface ProjectSearchState {
  q: string;
  include: string;
  exclude: string;
  replacement: string;
  /** 上次 grep 返回的原始 outcome（供恢复展示；换项目/清除时置空）。 */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  outcome: any | null;
  searched: boolean;
}

const PREFS_KEY = "dsh-file-workbench.vscode.search.prefs";

const DEFAULT_PREFS: SearchPrefs = {
  caseSensitive: false,
  wholeWord: false,
  regex: false,
  preserveCase: true,
  viewMode: "list",
  replaceOpen: false,
  advancedOpen: false,
};

function loadPrefs(): SearchPrefs {
  try {
    const raw = localStorage.getItem(PREFS_KEY);
    if (!raw) return { ...DEFAULT_PREFS };
    return { ...DEFAULT_PREFS, ...(JSON.parse(raw) as Partial<SearchPrefs>) };
  } catch {
    return { ...DEFAULT_PREFS };
  }
}

function emptyProject(): ProjectSearchState {
  return { q: "", include: "", exclude: "", replacement: "", outcome: null, searched: false };
}

const prefs = reactive<SearchPrefs>(loadPrefs());
/** 按项目目录分槽的搜索数据（仅内存，随会话存活）。 */
const byProject = reactive(new Map<string, ProjectSearchState>());

/** 写入并持久化某个开关偏好。 */
function setPref<K extends keyof SearchPrefs>(key: K, value: SearchPrefs[K]): void {
  prefs[key] = value;
  try {
    localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
  } catch {
    /* 隐私模式无法持久化时，至少保留当前会话内存态 */
  }
}

/** 读取某项目的搜索数据；无记录则给一份空的。 */
function getProject(dir: string): ProjectSearchState {
  let s = byProject.get(dir);
  if (!s) {
    s = emptyProject();
    byProject.set(dir, s);
  }
  return s;
}

/** 覆盖写回某项目的搜索数据。 */
function saveProject(dir: string, patch: Partial<ProjectSearchState>): void {
  const cur = getProject(dir);
  Object.assign(cur, patch);
}

/** 丢弃某项目的搜索数据（项目被移除时调用）。 */
function clearProject(dir: string): void {
  byProject.delete(dir);
}

export function useSearchStore() {
  return { prefs, setPref, getProject, saveProject, clearProject };
}
