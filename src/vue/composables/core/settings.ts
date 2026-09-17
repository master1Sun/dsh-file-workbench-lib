/**
 * 前端持久化状态：界面偏好 / 收藏 / 布局。
 *
 * 不再使用 localStorage —— 统一经 host 的 /persist 接口写入后端 JSON 配置文件
 * （{DSH_HOME|~/.dsh}/file/dsh-file-workbench/data/workbench-state.json）。
 *
 * - prefs：显示隐藏文件 / 默认视图 / 排序 / 主题 / 字体 / 强调色 / root 开关 / 终端与记事本选项。
 * - favorites：收藏的文件/目录路径（NavPane 收藏分组）。
 * - layout：导航分组展开态 + 资源管理器「导航树:文件列表」分隔比例。
 *
 * 启动时由 initPersist() 异步拉取并填充（首次渲染先用默认值，不阻塞挂载）。
 */
import { reactive, ref } from "vue";
import type { ViewMode } from "../../../shared/types";
import * as api from "./useApi";
import { loadTermWins } from "../domain/terminalStore";

export interface Prefs {
  /** 是否显示隐藏文件。 */
  showHidden: boolean;
  /** 资源管理器查看选项（Win11 档位）。 */
  view: "huge" | "large" | "medium" | "small" | "list" | "details" | "content" | "tiles";
  /** 是否显示文件扩展名（Win11「查看 ▸ 显示 ▸ 文件扩展名」）。 */
  showExtensions: boolean;
  sortKey: "name" | "size" | "type" | "mtime";
  asc: boolean;
  /** 主题模式：auto 跟随宿主/系统；dark/light 强制覆盖。 */
  theme: "auto" | "dark" | "light";
  /** 界面字体族；空串表示用默认。 */
  fontFamily: string;
  /** 界面字号（px）。 */
  fontSize: number;
  /** 强调色；空串表示用主题默认绿色。 */
  accentColor: string;
  /** root 开关：开启后允许操作工作区根目录之外的文件；关闭时工作区外仅可查看。 */
  allowOutsideRoot: boolean;
  /** 详情视图左边三列宽（px，可拖拽，name 固定有宽保证文件名可见）；mtime 列自动填充剩余空间。 */
  colWidths: { name: number; size: number; type: number };
  /** 终端默认 shell：cmd / powershell（仅影响后续新建的终端）。 */
  termShell: "cmd" | "powershell";
  /** 终端字号（px）。 */
  termFontSize: number;
  /** 记事本（txt 编辑器）「格式 ▸ 自动换行」开关；持久化后下次打开沿用。 */
  txtWordWrap: boolean;
  /** 记事本（txt 编辑器）「查看 ▸ 状态栏」开关；持久化后下次打开沿用。 */
  txtShowStatus: boolean;
  /** VS 面板左栏底部 Git 记录栏的展开高度（px，拖拽顶边调整）；0 = 用默认上限。 */
  vsGitBarH: number;
  /** 文件编辑器自动保存：编辑停顿 1 秒后静默写入磁盘。 */
  autoSave: boolean;
  /** 文件编辑器 Minimap（右侧块状缩略渲染）开关。 */
  vsMinimap: boolean;
}

const defaults: Prefs = {
  showHidden: true,
  view: "details",
  showExtensions: true,
  sortKey: "name",
  asc: true,
  theme: "auto",
  /** 字体族；哨兵值 "default" 表示跟随宿主默认字体栈（不用空串，见下）。 */
  fontFamily: "default",
  fontSize: 13,
  accentColor: "",
  allowOutsideRoot: false,
  colWidths: { name: 300, size: 96, type: 160 },
  termShell: "cmd",
  termFontSize: 13,
  /** 记事本默认不自动换行、显示状态栏（与 Win10 记事本初始状态一致）。 */
  txtWordWrap: false,
  txtShowStatus: true,
  vsGitBarH: 0,
  autoSave: false,
  vsMinimap: true,
};

/** 启动初始值一律用默认；initPersist() 拉取成功后再用后端值覆盖。 */
export const prefs = reactive<Prefs>({ ...defaults });

/** 合法的查看方式档位（Win11 全档位），用于校验后端/持久化数据。 */
const VALID_VIEWS: readonly string[] = ["huge", "large", "medium", "small", "list", "details", "content", "tiles"];

/** 仅取 Prefs 中合法字段，丢弃未知/非法值（防御后端脏数据）。 */
function sanitizePrefs(raw: unknown): Partial<Prefs> {
  if (!raw || typeof raw !== "object") return {};
  const src = raw as Record<string, unknown>;
  const out: Partial<Prefs> = {};
  if (typeof src.showHidden === "boolean") out.showHidden = src.showHidden;
  if (typeof src.showExtensions === "boolean") out.showExtensions = src.showExtensions;
  if (VALID_VIEWS.includes(String(src.view))) out.view = src.view as Prefs["view"];
  if (["name", "size", "type", "mtime"].includes(String(src.sortKey))) out.sortKey = src.sortKey as Prefs["sortKey"];
  if (typeof src.asc === "boolean") out.asc = src.asc;
  if (["auto", "dark", "light"].includes(String(src.theme))) out.theme = src.theme as Prefs["theme"];
  // 空串归到哨兵 "default"：el-select 把 "" 视作空值，会显示 placeholder（"Select"）而非「默认」。
  if (typeof src.fontFamily === "string") out.fontFamily = src.fontFamily.trim() || "default";
  if (typeof src.fontSize === "number" && src.fontSize > 0) out.fontSize = src.fontSize;
  if (typeof src.accentColor === "string" && /^#[0-9a-fA-F]{3,8}$/.test(src.accentColor))
    out.accentColor = src.accentColor;
  if (typeof src.allowOutsideRoot === "boolean") out.allowOutsideRoot = src.allowOutsideRoot;
  const cw = src.colWidths;
  if (cw && typeof cw === "object") {
    const n = (v: unknown, d: number): number => (typeof v === "number" && Number.isFinite(v) && v >= 40 ? v : d);
    out.colWidths = {
      name: n((cw as Record<string, unknown>).name, defaults.colWidths.name),
      size: n((cw as Record<string, unknown>).size, defaults.colWidths.size),
      type: n((cw as Record<string, unknown>).type, defaults.colWidths.type),
    };
  }
  if (src.termShell === "powershell" || src.termShell === "cmd") out.termShell = src.termShell;
  if (typeof src.termFontSize === "number" && src.termFontSize >= 8 && src.termFontSize <= 36)
    out.termFontSize = src.termFontSize;
  if (typeof src.txtWordWrap === "boolean") out.txtWordWrap = src.txtWordWrap;
  if (typeof src.txtShowStatus === "boolean") out.txtShowStatus = src.txtShowStatus;
  if (typeof src.vsGitBarH === "number" && src.vsGitBarH >= 0) out.vsGitBarH = src.vsGitBarH;
  if (typeof src.autoSave === "boolean") out.autoSave = src.autoSave;
  if (typeof src.vsMinimap === "boolean") out.vsMinimap = src.vsMinimap;
  return out;
}

/** 后端读回并填充响应式状态。组件挂载后调用一次即可。 */
export async function initPersist(): Promise<void> {
  const state = await api.loadPersist().catch(() => null);
  if (!state) return;
  Object.assign(prefs, { ...defaults, ...sanitizePrefs(state.prefs) });
  if (Array.isArray(state.favorites)) favorites.value = state.favorites.map(String);
  if (state.layout && typeof state.layout === "object") {
    const l = state.layout as Record<string, unknown>;
    const ng = l.navGroups;
    if (ng && typeof ng === "object") {
      const g = ng as Record<string, unknown>;
      Object.assign(layout.navGroups, layoutDefaults.navGroups);
      if (typeof g.home === "boolean") layout.navGroups.home = g.home;
      if (typeof g.myComputer === "boolean") layout.navGroups.myComputer = g.myComputer;
      if (typeof g.favorites === "boolean") layout.navGroups.favorites = g.favorites;
      if (typeof g.ssh === "boolean") layout.navGroups.ssh = g.ssh;
    }
    if (typeof l.explorerSplit === "number" && l.explorerSplit > 0.05 && l.explorerSplit < 0.95)
      layout.explorerSplit = l.explorerSplit;
  }
  if (state.termWin && typeof state.termWin === "object") {
    const tw = state.termWin as Record<string, unknown>;
    if (typeof tw.w === "number" && tw.w > 0) termWin.w = tw.w;
    if (typeof tw.h === "number" && tw.h > 0) termWin.h = tw.h;
    if (typeof tw.x === "number") termWin.x = tw.x;
    if (typeof tw.y === "number") termWin.y = tw.y;
  }
  // 每终端独立窗口的几何按 tab id 持久化，落盘由 store 侧处理。
  if (state.termWins && typeof state.termWins === "object") {
    loadTermWins(state.termWins);
  }
  if (state.folderViews && typeof state.folderViews === "object") {
    for (const key of Object.keys(folderViews)) delete folderViews[key];
    const fv = state.folderViews as Record<string, unknown>;
    for (const [key, val] of Object.entries(fv)) {
      if (VALID_VIEWS.includes(String(val))) folderViews[key] = String(val) as Prefs["view"];
    }
  }
}

export function savePrefs(): void {
  // 内存 prefs 已响应式更新；后端写为异步落盘，不阻塞 UI。
  void api.savePersist("prefs", { ...prefs });
}

// ---- 布局：导航分组展开态 + 资源管理器分隔比例 ----

/** 主导航各分组的展开态。 */
export interface NavGroups {
  /** 主文件夹：展开后显示其子项（图库）。 */
  home: boolean;
  myComputer: boolean;
  favorites: boolean;
  /** SSH 远端主机分组（列出已配置主机，点击进入远端根）。 */
  ssh: boolean;
}

export interface Layout {
  /** 主导航各分组展开态。 */
  navGroups: NavGroups;
  /** 资源管理器「导航树 : 文件列表」分隔比例（左栏占比 0–1，默认 0.3 ≈ 3:7）。 */
  explorerSplit: number;
}
const layoutDefaults: Layout = {
  navGroups: { home: true, myComputer: true, favorites: true, ssh: true },
  explorerSplit: 0.3,
};
export const layout = reactive<Layout>({ ...layoutDefaults });

/** 界面布局态变化后落盘到后端 JSON（调用方在各交互结束时触发）。 */
export function saveLayout(): void {
  void api.savePersist("layout", { ...layout });
}

// ---- 终端浮窗几何（位置/尺寸），独立于布局分组持久化 ----

/** 终端浮窗几何：x/y 为 -1 表示锚定右下角（未手动拖拽过）；w/h 为当前尺寸。 */
export interface TermWin {
  x: number;
  y: number;
  w: number;
  h: number;
}
const termWinDefault: TermWin = { x: -1, y: -1, w: 680, h: 460 };
export const termWin: TermWin = { ...termWinDefault };

/** 终端浮窗几何变化后落盘（拖动/缩放结束时调用，防抖由组件侧处理）。 */
export function saveTermWin(): void {
  void api.savePersist("termWin", { ...termWin });
}

// ---- 按目录记忆「查看方式」（Win11 文件夹视图记忆） ----

/**
 * 每个目录/区域各自记住的查看方式；未记录的回落到全局默认 `prefs.view`。
 * key 为目录绝对路径，虚拟区域用固定键：`computer`（此电脑）、`recycle`（回收站）。
 *
 * 与 Win11 一致：在某处切换视图只影响该处；只有在「设置」里改默认视图
 * 才会清空本表、让全部区域同步到新默认值（见 resetFolderViews）。
 */
export const folderViews = reactive<Record<string, Prefs["view"]>>({});

/**
 * 当前区域正在生效的查看方式（由文件列表/此电脑面板写入，供命令栏等外部面板
 * 显示 ✓ 用）。它与 `prefs.view`（全局默认）是两回事：某目录单独设过视图时，
 * 这里反映的是该目录自己的值。
 */
export const activeView = ref<Prefs["view"]>(prefs.view);

/** 取某区域当前的查看方式（未单独记过则跟随全局默认）。 */
export function getFolderView(key: string): Prefs["view"] {
  return folderViews[key] ?? prefs.view;
}

/** 只改当前区域的查看方式并落盘（不影响其它目录，也不改全局默认）。 */
export function setFolderView(key: string, view: Prefs["view"]): void {
  folderViews[key] = view;
  void api.savePersist("folderViews", { ...folderViews });
}

/**
 * 「设置 → 默认视图」变更时调用：清空所有按目录的记忆，
 * 于是全部区域（含此电脑/回收站）都回落到新的全局默认值 —— 即「同步全部」。
 */
export function resetFolderViews(): void {
  for (const key of Object.keys(folderViews)) delete folderViews[key];
  void api.savePersist("folderViews", { ...folderViews });
}

// ---- 收藏 ----
export const favorites = ref<string[]>([]);

function persistFavorites(): void {
  void api.savePersist("favorites", favorites.value);
}

export function isFavorite(path: string): boolean {
  return favorites.value.includes(path);
}

export function toggleFavorite(path: string): boolean {
  const i = favorites.value.indexOf(path);
  if (i >= 0) {
    favorites.value.splice(i, 1);
    persistFavorites();
    return false;
  }
  favorites.value.push(path);
  persistFavorites();
  return true;
}

export type { ViewMode };
