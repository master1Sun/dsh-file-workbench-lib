/**
 * 文件编辑器面板的持久化状态（项目目录 / 已开标签 / 激活标签 / 展开节点 / 左栏比例 /
 * 目录树滚动位置 / 每个文件的查看器位置）。
 *
 * ## 按实例分槽（多编辑器窗口）
 *
 * DSH 右侧栏的页 tab 只在**目标分栏内**去重：同一 kind 在另一个分栏（或浮窗）里会另开一份。
 * 于是「文件编辑器」可以同时存在多个实例（两格分栏 + 浮窗）。但本模块原本是模块级单例，
 * 两个实例会互相镜像 —— 因此改为**按实例分槽**：
 *
 *   - 每个实例拿到一个**槽号**（从 1 起，取当前未被占用的最小整数），槽号即持久化身份；
 *   - 槽号由 DSH 的 tab id 映射而来（`acquireVSCodeSlot`），tab id 在页面生命周期内稳定，
 *     所以「切面板卸载 → 再挂载」会拿回同一个槽、同一份状态与未保存缓冲；
 *   - 每个槽有**独立的 host 根 key**（`vscode` / `vscode-2` / …），项目目录内的写操作彼此隔离；
 *   - 全部槽共用**同一个持久化 key**（`vscode`），载荷升级为 `{ version: 2, slots: {...} }`，
 *     旧版平铺载荷在读取时自动迁移到槽 1 —— 因此**不需要改 host 的持久化白名单**。
 *
 * 槽号在一个页面生命周期内只增不回收（tab id 关闭后不会再出现）。
 *
 * ## 「最近项目」是全局共享的
 *
 * 每次右键/按钮都可能新开一个槽（tab id 唯一），若把最近项目存在各槽状态里，
 * 新槽永远看到空列表 —— 因此列表存在持久化载荷的**顶层**（`recents` 字段），
 * 全部槽读写同一份；旧版存在槽状态里的记录在加载时合并进来（读旧写新迁移）。
 *
 * 两种开法：
 *  - 「新建编辑器窗口」按钮（`openTab(kind, { params: { fresh: true } })`）：明确要求**空白**，
 *    经 `markFresh()` 标记后 `init()` 既不恢复持久化状态、也不继承任何项目目录；
 *  - 主编辑器（guide 入口）等其它路径：新槽若无持久化数据，继承已有槽最近的项目目录，
 *    避免「打开第二个编辑器是空白」。
 *
 * 面板内容不落盘（内容在磁盘上，重开时重新读取），只持久化路径、激活态与浏览位置。
 */
import { reactive, ref, type InjectionKey, type Ref } from "vue";
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
  /**
   * 本槽视角的「最近项目」快照（渲染用；权威数据在持久化载荷顶层 `recents`，
   * 由所有实例共享 —— 见文件头「最近项目是全局共享的」一节）。
   */
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

function defaults(): VSCodeState {
  return {
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
}

/** 最近项目列表上限。 */
const RECENT_MAX = 10;
/** 持久化载荷里最多保留的实例槽数（超出的最旧槽被丢弃，避免载荷无限膨胀）。 */
const MAX_SLOTS = 8;

/** 一个编辑器实例在宿主侧的独立根 key（项目目录内 CRUD 受 guardWsRoot 按 key 放行）。 */
export function rootKeyForSlot(slot: number): string {
  return slot <= 1 ? "vscode" : `vscode-${slot}`;
}

/* ---------- 持久化文件（全槽共用一个 key: "vscode"） ---------- */

interface VSCodePersistFile {
  version: 2;
  /** 全部实例共享的「最近项目」（去重、新的在前）。旧版载荷没有该字段，读取时从各槽合并。 */
  recents: string[];
  slots: Record<string, VSCodeState>;
}

let persistFile: VSCodePersistFile = { version: 2, recents: [], slots: {} };
let loadPromise: Promise<void> | null = null;

/** 全部实例共享的「最近项目」运行时副本（与 persistFile.recents 同步）。 */
let sharedRecents: string[] = [];

/** 校验并去重一个最近项目数组（脏数据丢弃、限长）。 */
function normalizeRecents(raw: unknown): string[] {
  if (!Array.isArray(raw)) return [];
  return [...new Set(raw.filter((x): x is string => typeof x === "string" && x !== ""))].slice(0, RECENT_MAX);
}

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

/** 把一个任意载荷解析为一份干净的状态（缺字段取默认值，脏数据丢弃）。 */
function parseState(raw: Record<string, unknown>): VSCodeState {
  const s = defaults();
  if (typeof raw.projectDir === "string") s.projectDir = raw.projectDir;
  if (Array.isArray(raw.recentProjects)) {
    s.recentProjects = [...new Set(raw.recentProjects.filter((x): x is string => typeof x === "string" && x !== ""))].slice(
      0,
      RECENT_MAX,
    );
  }
  if (s.projectDir) s.recentProjects = [s.projectDir, ...s.recentProjects.filter((p) => p !== s.projectDir)].slice(0, RECENT_MAX);
  if (Array.isArray(raw.openTabs)) s.openTabs = raw.openTabs.filter((x): x is string => typeof x === "string");
  if (typeof raw.activeTab === "string") s.activeTab = raw.activeTab;
  if (Array.isArray(raw.expanded)) s.expanded = raw.expanded.filter((x): x is string => typeof x === "string");
  if (Array.isArray(raw.expandedSeeded)) s.expandedSeeded = raw.expandedSeeded.filter((x): x is string => typeof x === "string");
  if (typeof raw.split === "number" && raw.split > 0.1 && raw.split < 0.9) s.split = raw.split;
  if (typeof raw.termHeight === "number" && Number.isFinite(raw.termHeight) && raw.termHeight >= 100) {
    s.termHeight = Math.min(1200, raw.termHeight);
  }
  if (typeof raw.treeScroll === "number" && Number.isFinite(raw.treeScroll) && raw.treeScroll >= 0) s.treeScroll = raw.treeScroll;
  if (raw.views && typeof raw.views === "object") {
    const views: Record<string, FileViewState> = {};
    for (const [k, v] of Object.entries(raw.views as Record<string, unknown>)) {
      const parsed = parseView(v);
      if (parsed) views[k] = parsed;
    }
    s.views = views;
  }
  // 激活标签若已不在列表，回退到第一个（或 null）。
  if (s.activeTab && !s.openTabs.includes(s.activeTab)) s.activeTab = s.openTabs[0] ?? null;
  return s;
}

/**
 * 归一化持久化载荷：v2 原样读取（顶层 recents 缺失时从各槽合并 —— 兼容共享化之前的版本）；
 * 旧版（单实例、平铺结构）迁移为槽 1；其它情况返回空载荷。**读旧写新**——升级后无需回滚兼容。
 */
function normalizePersist(raw: unknown): VSCodePersistFile {
  if (!raw || typeof raw !== "object") return { version: 2, recents: [], slots: {} };
  const r = raw as Record<string, unknown>;
  if (r.version === 2 && r.slots && typeof r.slots === "object") {
    const slots: Record<string, VSCodeState> = {};
    for (const [k, v] of Object.entries(r.slots as Record<string, unknown>)) {
      if (v && typeof v === "object") slots[k] = parseState(v as Record<string, unknown>);
    }
    let recents = normalizeRecents(r.recents);
    if (!recents.length) {
      // 旧 v2 载荷：recents 存在各槽状态里 → 按槽号顺序合并成全局列表。
      const merged: string[] = [];
      for (const k of Object.keys(slots).sort((a, b) => Number(a) - Number(b))) {
        for (const p of slots[k]?.recentProjects ?? []) if (!merged.includes(p)) merged.push(p);
      }
      recents = merged.slice(0, RECENT_MAX);
    }
    return { version: 2, recents, slots };
  }
  // 旧版：{ projectDir, openTabs, ... } 平铺 → 槽 1（迁移，历史用户无感）。
  if (typeof r.projectDir === "string" || Array.isArray(r.openTabs)) {
    const s1 = parseState(r);
    return { version: 2, recents: [...s1.recentProjects], slots: { "1": s1 } };
  }
  return { version: 2, recents: [], slots: {} };
}

/**
 * 拉取全量持久化状态一次（所有槽共用）。
 *
 * 两个作用：① 避免 N 个编辑器实例各发一次 `/persist`；② 保证各槽读到的是**同一份**载荷，
 * 之后 `persist()` 的「改自己的槽再整体写回」才不会互相覆盖其他槽。
 */
function loadPersistFile(): Promise<void> {
  if (!loadPromise) {
    loadPromise = (async () => {
      const data = (await api.loadPersist().catch(() => null)) as Record<string, unknown> | null;
      persistFile = normalizePersist(data?.vscode);
    })();
  }
  return loadPromise;
}

/* ---------- 实例槽分配 ---------- */

/** 槽号 → 实例（页面生命周期内常驻，使「卸载再挂载」拿回同一份状态与未保存缓冲）。 */
const stores = new Map<number, VSCodeStore>();
/** DSH tab id（或匿名键）→ 槽号。 */
const slotOfTab = new Map<string, number>();

/**
 * 取（必要时分配）一个实例槽号。
 *
 * @param tabId - DSH 右侧栏 tab id（页面生命周期内稳定）。缺失时回退到固定的匿名键，
 *   使独立调试（vite dev）或旧版宿主下退化为「单实例共享」而不是每次挂载都新建槽。
 */
export function acquireVSCodeSlot(tabId?: string | null): number {
  const key = tabId || "@default";
  const exists = slotOfTab.get(key);
  if (exists !== undefined) return exists;
  const live = new Set(slotOfTab.values());
  let n = 1;
  while (live.has(n)) n++;
  slotOfTab.set(key, n);
  return n;
}

/** 取指定槽的实例（不存在则创建）。 */
export function getVSCodeStore(slot: number): VSCodeStore {
  let s = stores.get(slot);
  if (!s) {
    s = createVSCodeStore(slot);
    stores.set(slot, s);
  }
  return s;
}

/** Vue provide/inject 键：面板根提供，子组件（目录树）注入。 */
export const VS_STORE_KEY: InjectionKey<VSCodeStore> = Symbol("dsh-file-workbench/vscode-store");

/** 外部「在文件编辑器中打开某目录」的请求（由桥接层投递，面板消费）。 */
export interface ProjectRequest {
  dir: string;
  /** 自增序号：同一目录被重复请求时也要触发一次（watch 才不会漏）。 */
  n: number;
}

/** 一个编辑器实例的全部状态与操作。 */
export interface VSCodeStore {
  /** 实例槽号（从 1 起）。 */
  readonly slot: number;
  /** 宿主根 key（`vscode` / `vscode-2` / …）：读写守卫、项目文件索引都按它隔离。 */
  readonly rootKey: string;
  /** 响应式状态。 */
  readonly state: VSCodeState;
  /** 持久化已就绪、且项目根已向 host 注册完毕。 */
  readonly ready: Ref<boolean>;
  /** 本实例对应的 DSH tab id（缺失时为 null）。 */
  readonly tabId: string | null;
  /** 本实例所在分栏 id（浮窗时为其浮窗 pane id）。 */
  readonly panelId: string | null;
  /** 外部「在文件编辑器中打开某目录」的请求（未消费时为 null）。 */
  readonly projectRequest: Ref<ProjectRequest | null>;
  /** 登记本实例的 tab 身份（挂载时调用）。 */
  bindTab(tabId: string | null, panelId: string | null): void;
  /** 标记为「新建空白窗口」：init() 时不恢复、不继承任何项目目录。 */
  markFresh(): void;
  /** 启动时拉取本槽的持久化状态（不阻塞挂载，先以默认值渲染）。 */
  init(): Promise<void>;
  /** 把当前状态落盘。 */
  persist(): void;
  /** 节流落盘（滚动 / 光标这类高频变更用）。 */
  persistSoon(): void;
  /** 记录一个项目目录到「最近项目」（去重、置顶、限长；全局共享并落盘）。 */
  rememberProject(dir: string): void;
  /** 从「最近项目」移除一条记录（立即落盘）。 */
  forgetProject(dir: string): void;
  /** 清空「最近项目」全部记录（立即落盘）。 */
  clearRecentProjects(): void;
  /** 读取某文件的查看器位置（无记录返回空对象）。 */
  fileViewOf(path: string | null): FileViewState;
  /** 记录某文件的查看器位置（节流落盘）。 */
  rememberFileView(path: string, view: FileViewState): void;
  /** 面板卸载前暂存未保存的缓冲区（只留 dirty 项）。 */
  stashOpenBuffers(buffers: Record<string, OpenBuffer>): void;
  /** 取出并清空暂存的未保存缓冲区。 */
  takeStashedBuffers(): Record<string, OpenBuffer>;
  /** 投递一次「在本实例中打开该目录」的请求。 */
  requestOpenProject(dir: string): void;
}

function createVSCodeStore(slot: number): VSCodeStore {
  const state = reactive<VSCodeState>(defaults());
  const ready = ref(false);
  const projectRequest = ref<ProjectRequest | null>(null);
  let tabId: string | null = null;
  let panelId: string | null = null;
  /** init() 的在途/已完成 Promise（重复调用返回同一份，供外部等它结束 —— 见 applyExternalProject）。 */
  let initPromise: Promise<void> | null = null;
  /** 为 true 时本实例从空白开始（由「新建编辑器窗口」按钮下发，仅首次 init 生效一次）。 */
  let freshWindow = false;
  let pending: ReturnType<typeof setTimeout> | null = null;
  let reqSeq = 0;

  /**
   * 查看器位置的非响应式暂存（键 = 文件绝对路径）。
   *
   * 滚动 / 光标变化频率极高，若写进 `state` 会让所有依赖它的组件逐帧重渲染；
   * 这里先落在普通对象上，只在 `persist()` 落盘时合并进载荷。
   */
  const viewStaging: Record<string, FileViewState> = {};

  /**
   * 「面板在 DSH 里随 tab 激活/失活挂载卸载」的补偿：buffer 内容按设计不落盘（以磁盘为准），
   * 而模块不随面板卸载重置 —— 卸载时把 **dirty** 缓冲区留在本实例的暂存里，
   * 重新挂载时恢复，既不持久化内容也不会静默丢改动。
   */
  let dirtyStash: Record<string, OpenBuffer> = {};

  /** 槽号最小的、已落过盘的其它槽 —— 新槽没有项目时继承它的项目目录。 */
  function inheritedProjectDir(): string | null {
    const nums = Object.keys(persistFile.slots)
      .map(Number)
      .filter((n) => Number.isFinite(n) && n !== slot)
      .sort((a, b) => a - b);
    for (const n of nums) {
      const p = persistFile.slots[String(n)]?.projectDir;
      if (p) return p;
    }
    return null;
  }

  /** 载荷瘦身：保留在用槽 + 其它槽里编号最大的若干个（丢弃最旧的历史槽）。 */
  function pruneSlots(): void {
    const keys = Object.keys(persistFile.slots);
    if (keys.length <= MAX_SLOTS) return;
    const live = new Set([...slotOfTab.values()].map(String));
    live.add(String(slot));
    const removable = keys.filter((k) => !live.has(k)).sort((a, b) => Number(a) - Number(b));
    for (const k of removable.slice(0, keys.length - MAX_SLOTS)) delete persistFile.slots[k];
  }

  function persistNow(): void {
    persistFile.slots[String(slot)] = { ...state, views: { ...state.views, ...viewStaging } };
    persistFile.recents = [...sharedRecents];
    pruneSlots();
    void api.savePersist("vscode", persistFile);
  }

  function persistSoon(): void {
    if (pending !== null) return;
    pending = setTimeout(() => {
      pending = null;
      persistNow();
    }, 400);
  }

  function rememberProject(dir: string): void {
    const key = dir.trim();
    if (!key) return;
    sharedRecents = [key, ...sharedRecents.filter((p) => p !== key)].slice(0, RECENT_MAX);
    state.recentProjects = [...sharedRecents];
    persistSoon();
  }

  function forgetProject(dir: string): void {
    sharedRecents = sharedRecents.filter((p) => p !== dir);
    state.recentProjects = [...sharedRecents];
    persistNow();
  }

  function clearRecentProjects(): void {
    sharedRecents = [];
    state.recentProjects = [];
    persistNow();
  }

  return {
    slot,
    rootKey: rootKeyForSlot(slot),
    state,
    ready,
    projectRequest,
    get tabId() {
      return tabId;
    },
    get panelId() {
      return panelId;
    },
    bindTab(nextTabId, nextPanelId) {
      tabId = nextTabId;
      panelId = nextPanelId;
    },
    markFresh() {
      freshWindow = true;
    },
    init(): Promise<void> {
      // 幂等且**可等待**：外部项目请求可能在持久化加载完成前到达（工作台右键新开窗口），
      // 调用方（applyExternalProject）必须能等到 init 结束再切目录，否则 init 稍后的
      // 「恢复/继承项目目录」会把刚设置的目录覆盖掉（曾表现为「打开的不是选中的文件夹」）。
      if (!initPromise) {
        initPromise = (async () => {
          await loadPersistFile().catch(() => undefined);
          sharedRecents = [...persistFile.recents];
          if (freshWindow) {
            // 「新建编辑器窗口」明确要求空白：不恢复持久化状态、也不继承任何项目目录。
            // 保持 defaults() 的空状态（projectDir = null），打开即是一张白纸。
          } else {
            const data = persistFile.slots[String(slot)];
            if (data) {
              Object.assign(state, data, { views: { ...data.views } });
            } else if (!state.projectDir) {
              // 非新建（如主编辑器）：新槽继承已有槽的项目目录，避免「第二个编辑器是空白」。
              // `!state.projectDir` 兜底：极端时序下外部请求已先设置目录时不覆盖。
              const inherited = inheritedProjectDir();
              if (inherited) {
                state.projectDir = inherited;
                rememberProject(inherited);
              }
            }
          }
          // 「最近项目」全局共享：以共享列表为主，合并本槽历史记录（旧版本数据迁移）。
          const merged = [...new Set([...sharedRecents, ...state.recentProjects])].slice(0, RECENT_MAX);
          sharedRecents = [...merged];
          state.recentProjects = [...merged];
          if (state.projectDir) rememberProject(state.projectDir);
        })();
      }
      return initPromise;
    },
    persist: persistNow,
    persistSoon,
    rememberProject,
    forgetProject,
    clearRecentProjects,
    fileViewOf(path) {
      if (!path) return {};
      return viewStaging[path] ?? state.views[path] ?? {};
    },
    rememberFileView(path, view) {
      if (!path) return;
      const prev = viewStaging[path];
      if (prev && prev.scrollTop === view.scrollTop && prev.anchor === view.anchor) return;
      viewStaging[path] = { ...view };
      persistSoon();
    },
    stashOpenBuffers(buffers) {
      dirtyStash = {};
      for (const [path, buf] of Object.entries(buffers)) {
        if (buf.dirty) dirtyStash[path] = { ...buf };
      }
    },
    takeStashedBuffers() {
      const out = dirtyStash;
      dirtyStash = {};
      return out;
    },
    requestOpenProject(dir) {
      const d = dir?.trim();
      if (!d) return;
      projectRequest.value = { dir: d, n: ++reqSeq };
    },
  };
}

/* ---------- 兜底门面 ---------- */

/**
 * 注入缺失时的兜底实例（槽 1）。
 *
 * 正式路径是 `main.ts` 的 `mountPane` 按 tab id 分配槽并 `app.provide(VS_STORE_KEY, …)`；
 * 这里只保证组件拿不到注入时不会崩（独立调试 / 旧版宿主）。
 */
export function defaultVSCodeStore(): VSCodeStore {
  return getVSCodeStore(1);
}
