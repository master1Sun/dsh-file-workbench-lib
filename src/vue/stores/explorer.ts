/**
 * 三列布局下的共享浏览状态（导航列与文件列表列共用）。
 * 单例 reactive + action，供 NavPane / FileListPane / 顶部工具栏协同。
 */
import { computed, reactive } from "vue";
import * as api from "../composables/core/useApi";
import { wb, openFolder } from "./workbench";
import type { BrowseListing, DriveInfo, FsEntry, MyComputerItem, RecycleEntry } from "../../shared/types";

export const explorer = reactive({
  /** 主目录入口（工作区/下载/用户主目录/各磁盘）。 */
  homeItems: [] as MyComputerItem[],
  /** 当前列出给第 2 列的目录。 */
  listing: null as BrowseListing | null,
  /** 正在加载/刷新目录中（用于列表刷新动画）。 */
  loading: false,
  loadErr: "",
  /** 第 2 列当前视图：普通文件列表 / Windows 系统回收站 / 「此电脑」（设备和驱动器）。 */
  view: "files" as "files" | "recycle" | "computer",
  /** 回收站当前条目列表（view === "recycle" 时展示）。 */
  recycleItems: [] as RecycleEntry[],
  /** 回收站列表加载中。 */
  recycleLoading: false,
  /** 回收站列表加载错误。 */
  recycleErr: "",
  /** 「此电脑」磁盘列表（含容量/卷标，view === "computer" 与导航树磁盘子项共用）。 */
  drives: [] as DriveInfo[],
  /** 磁盘列表加载中。 */
  drivesLoading: false,
  /** 磁盘列表加载错误。 */
  drivesErr: "",
});

export async function loadHome(): Promise<void> {
  explorer.loadErr = "";
  try {
    explorer.homeItems = (await api.myComputer(wb.key)).items;
  } catch (e) {
    explorer.loadErr = (e as Error).message;
  }
}

/* 浏览历史栈（供 Alt+← / Alt+→ 前进后退，行为同资源管理器）。 */
const nav = reactive({ history: [] as string[], idx: -1 });

/** 浏览历史里的「此电脑」标记：不是真实路径，用于后退/前进时还原顶层视图。 */
export const THIS_PC = "\u0001thispc";

/** 回收站视图在列表里使用的占位「路径」（虚拟位置，非真实文件系统路径）。 */
export const RECYCLE_PLACEHOLDER = "回收站";

/** 是否为可浏览的真实绝对路径（排除「回收站」「此电脑」等虚拟位置占位，避免无意义报错）。 */
export function isBrowsablePath(p: string): boolean {
  const s = p.trim();
  // 远端引用（`ssh://<hostId>/<path>`）：能否浏览由远端连接决定，不是本地路径语义，
  // 故单独放行——否则 browseTo 会在进入远程子目录时静默 no-op。
  if (s.startsWith("ssh://")) return true;
  return /^[A-Za-z]:[\\/]/.test(s) || /^[\\/]{1,2}[^\\/]/.test(s) || /^[\\/]$/.test(s);
}

/** 是否可后退（供工具栏按钮禁用态）。 */
export const canGoBack = computed(() => nav.idx > 0);
/** 是否可前进（供工具栏按钮禁用态）。 */
export const canGoForward = computed(() => nav.idx < nav.history.length - 1);
/** 是否可返回上级（「此电脑」/「回收站」是顶层虚拟位置，禁用它）。 */
export const canGoUp = computed(() => explorer.view === "files");

/** 入栈：与当前条目去重后记录（刷新/回退等非用户导航不记录）。 */
function recordHistory(target: string, record: boolean): void {
  if (!record) return;
  const norm = target === THIS_PC ? target : target.replace(/[\\/]+$/, "");
  const last = nav.history[nav.idx] === THIS_PC ? THIS_PC : (nav.history[nav.idx]?.replace(/[\\/]+$/, "") ?? "");
  if (norm !== last) {
    nav.history.length = nav.idx + 1;
    nav.history.push(norm);
    nav.idx = nav.history.length - 1;
  }
}

export async function browseTo(path: string, record = true): Promise<void> {
  // 虚拟位置占位（「回收站」等）不是真实路径，交给对应视图处理，避免发出必然失败的 browse 请求。
  if (!isBrowsablePath(path)) return;
  // 普通目录浏览会退出回收站/此电脑视图（进入回收站走 enterRecycle，进入此电脑走 openThisPc）。
  explorer.view = "files";
  recordHistory(path, record);
  explorer.loadErr = "";
  explorer.loading = true;
  try {
    explorer.listing = await api.browse(path, wb.key);
  } catch (e) {
    explorer.loadErr = (e as Error).message;
  } finally {
    explorer.loading = false;
  }
}

/* ---------- 「此电脑」视图（Win11：右侧「设备和驱动器」） ---------- */

/** 加载驱动器列表（含容量/卷标）。 */
export async function loadDrives(): Promise<void> {
  explorer.drivesErr = "";
  explorer.drivesLoading = true;
  try {
    explorer.drives = (await api.drives()).drives ?? [];
  } catch (e) {
    explorer.drivesErr = (e as Error).message;
  } finally {
    explorer.drivesLoading = false;
  }
}

/** 进入「此电脑」视图：右侧展示「设备和驱动器」，左侧导航树该项高亮。 */
export async function openThisPc(record = true): Promise<void> {
  recordHistory(THIS_PC, record);
  explorer.view = "computer";
  explorer.loadErr = "";
  explorer.listing = null;
  await loadDrives();
}

/** 统一「前往」入口：区分「此电脑」标记与真实目录路径（供后退/前进/地址栏复用）。 */
export async function openLocation(target: string, record = true): Promise<void> {
  if (target === THIS_PC) await openThisPc(record);
  else await browseTo(target, record);
}

/** 浏览历史后退（Alt+←）。 */
export function goBack(): void {
  if (nav.idx > 0) {
    nav.idx -= 1;
    void openLocation(nav.history[nav.idx], false);
  }
}

/** 浏览历史前进（Alt+→）。 */
export function goForward(): void {
  if (nav.idx < nav.history.length - 1) {
    nav.idx += 1;
    void openLocation(nav.history[nav.idx], false);
  }
}

/** 归位“我的电脑”主目录：始终回到“我的电脑”主目录默认入口（主目录/工作区/首个磁盘）。 */
export async function goHome(): Promise<void> {
  const items = explorer.homeItems;
  const target =
    items.find((i) => i.type === "home")?.path ??
    items.find((i) => i.type === "workspace")?.path ??
    items.find((i) => i.type === "drive")?.path;
  if (target) await browseTo(target);
}

export async function goUp(): Promise<void> {
  // 「此电脑」/「回收站」是顶层虚拟位置（Win11 的「向上」在此禁用），不做任何跳转。
  if (explorer.view !== "files") return;
  if (!explorer.listing) return;
  if (explorer.listing.parent) await browseTo(explorer.listing.parent);
  else await goHome();
}

/**
 * 一键回到当前会话目录（工具栏罗盘按钮，唯一会主动切换工作目录的入口）。
 * 这里顺带把工作区根切到会话目录，保证读目录内的写操作不被 root 守卫拒绝。
 */
export async function goSessionDir(): Promise<boolean> {
  const dir = window.__DSH_FILE_WORKBENCH__?.getSessionDir?.();
  if (!dir) return false;
  const prevRoot = wb.root;
  try {
    await openFolder(dir);
  } catch {
    return false;
  }
  if (wb.root !== prevRoot) await loadHome();
  await browseTo(dir);
  return true;
}

export function refreshListing(): Promise<void> {
  // 显式刷新 = 用户要最新数据：先作废相应的读缓存，否则会拿到 30s 内的旧结果（点了像没反应）。
  // （`browse` 没进缓存，所以文件视图的刷新本来就走真请求。）
  api.invalidateReadCache("mycomputer");
  api.invalidateReadCache("drives");
  // 「此电脑」视图刷新即重新读取磁盘列表。
  if (explorer.view === "computer") return loadDrives();
  // 回收站视图的列表由回收站接口提供，不能拿占位「路径」去 browse（否则报“不是绝对路径”）。
  if (explorer.view === "recycle") return refreshRecycle();
  // 刷新是原地重载，不写入浏览历史。
  return explorer.listing ? browseTo(explorer.listing.path, false) : Promise.resolve();
}

/* ---------- Windows 系统回收站视图 ---------- */

/** 把回收站条目映射成 FsEntry（path 用回收站稳定 key，附带原位置/删除时间），让文件列表按同一套 UI 渲染。 */
function recycleToFsEntries(): FsEntry[] {
  return (explorer.recycleItems ?? []).map((it) => {
    const ms = Date.parse(it.dateDeleted);
    return {
      name: it.name,
      path: it.fullPath,
      isDir: it.isDir,
      isSymlink: false,
      broken: false,
      hidden: false,
      size: it.size || 0,
      mtime: Number.isNaN(ms) ? undefined : ms,
      recycleFullPath: it.fullPath,
      originalPath: it.originalPath,
      dateDeleted: it.dateDeleted,
    } satisfies FsEntry;
  });
}

/** 重新加载系统回收站条目列表，并把它作为「当前目录」挂到 listing，复用文件列表的渲染。 */
export async function loadRecycle(): Promise<void> {
  explorer.recycleErr = "";
  explorer.recycleLoading = true;
  explorer.loading = true;
  explorer.loadErr = "";
  try {
    const items = (await api.recycleList()).items;
    explorer.recycleItems = Array.isArray(items) ? items : [];
    explorer.listing = {
      path: RECYCLE_PLACEHOLDER,
      name: RECYCLE_PLACEHOLDER,
      entries: recycleToFsEntries(),
      truncated: false,
    };
  } catch (e) {
    explorer.recycleErr = (e as Error).message;
    explorer.loadErr = (e as Error).message;
    explorer.listing = null;
  } finally {
    explorer.recycleLoading = false;
    explorer.loading = false;
  }
}

/** 进入回收站视图并加载条目。 */
export async function enterRecycle(): Promise<void> {
  explorer.view = "recycle";
  await loadRecycle();
}

/** 离开回收站视图，回到普通文件浏览。 */
export function exitRecycle(): void {
  explorer.view = "files";
}

/** 刷新回收站（原地重载列表）。 */
export function refreshRecycle(): Promise<void> {
  return loadRecycle();
}

/**
 * 会话同步（由宿主在会话激活/切换时调用）：
 * 只刷新「当前打开的位置」，绝不主动跳转到会话工作目录——
 * 位置切换是显式动作，仅由工具栏「回到当前会话目录」按钮（goSessionDir）触发。
 * 这样切走右侧面板再切回来、或在多个任务会话间来回切换时，浏览位置保持不变。
 */
export async function syncToSession(): Promise<void> {
  const dir = window.__DSH_FILE_WORKBENCH__?.getSessionDir?.() ?? null;
  if (!dir) return;
  // 仅原地刷新当前视图（目录 / 回收站 / 此电脑），不改变浏览位置。
  await refreshListing();
}

export const currentListingPath = computed(() => explorer.listing?.path ?? "");

/**
 * 「首次定位」是否由本次调用消费掉。
 * 右侧面板切走会卸载 Vue 实例、切回会重新挂载（见 RightPaneBridge），而 App 的 onMounted
 * 每次挂载都会执行；若每次都重新定位，用户切回时会被强行带回会话工作目录。
 * 这里用模块级标记保证整页生命周期内只定位一次。
 */
let initialLocationDone = false;
export function takeInitialLocation(): boolean {
  if (initialLocationDone) return false;
  initialLocationDone = true;
  return true;
}