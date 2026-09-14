<template>
  <div ref="treeRef" class="vs-tree" @scroll.passive="onScroll" @contextmenu.prevent="onBlankMenu($event)">
    <div v-if="!root" class="vs-tree-empty">{{ t("vsNoProject") }}</div>
    <template v-else>
      <div
        v-for="n in visibleNodes"
        :key="n.path"
        class="vs-tree-row"
        :class="{ 'is-active': n.path === activePath }"
        :style="{ paddingLeft: n.depth * 12 + 6 + 'px' }"
        @click.stop="onRowClick(n)"
        @contextmenu.prevent.stop="openMenu(n, $event)"
      >
        <span class="vs-caret" @click.stop="toggle(n)">
          <span v-if="n.isDir">{{ n.expanded ? '▾' : '▸' }}</span>
        </span>
        <span class="vs-ico" :class="n.isDir ? 'ico-dir' : 'ico-file'"></span>
        <span class="vs-name" :title="n.path">{{ n.name }}</span>
        <span
          v-if="gitBadgeOf(n)"
          class="vs-git-badge"
          :class="'st-' + gitBadgeOf(n)"
          :title="gitBadgeTitleOf(n)"
          >{{ gitBadgeLabelOf(n) }}</span
        >
        <span v-if="n.loading" class="vs-loading">…</span>
      </div>
    </template>

    <!-- 右键菜单：与工作台文件列表同一套 ContextMenu + 同一份 Git/SVN 菜单构建器（repoMenu） -->
    <ContextMenu v-if="cmOpen" :items="cmItems" :x="cmX" :y="cmY" @close="cmOpen = false" />

    <!-- Git 差异弹窗（与文件列表同构） -->
    <el-dialog v-model="gitDiffOpen" class="vs-diff-dialog" :title="t('gitDiffTitle')" width="760px" append-to-body>
      <pre class="vs-diff-body">{{ gitDiffText || t('gitDiffEmpty') }}</pre>
      <template #footer>
        <el-button type="primary" @click="gitDiffOpen = false">{{ t('gitDiffClose') }}</el-button>
      </template>
    </el-dialog>

    <!-- 提交弹窗 / Git / SVN 管理面板：直接复用工作台既有实现（QuickCommit / GitPanel / SvnPanel） -->
    <QuickCommit v-model="quickCommitOpen" :dir="panelDir" @done="refreshBadges" />
    <GitPanel v-model="gitPanelOpen" :dir="panelDir" @update:model-value="onGitPanelToggle" />
    <SvnPanel v-model="svnPanelOpen" :dir="panelDir" @update:model-value="onSvnPanelToggle" />
  </div>
</template>

<script setup lang="ts">
/**
 * 项目目录树（VS Code 风格）：懒加载（/list 按需展开）、展开/折叠 + 滚动位置持久化、右键菜单，
 * 并在节点上显示 Git 状态徽标。
 *
 * 右键菜单复用工作台既有的两套实现，不自造轮子：
 *  - 菜单容器 = 公共 `ContextMenu.vue`（teleport + 主题对齐 + 子菜单）；
 *  - Git / SVN 子菜单 = `composables/domain/repoMenu` 的 `gitMenuFor` / `svnMenuFor`
 *    （与文件列表 FileListPane 共用同一份构建器，入口/分组/文案完全一致）。
 * 另外提供：复制相对/绝对路径（复用 `copyText`）、在终端打开（复用 `openTerminal` + TerminalDialog）。
 *
 * 采用扁平渲染：整棵树以 `nodes` 表（path → 节点）存储，visibleNodes 按「祖先全展开」做 DFS 展平。
 *
 * 展开态持久化：`vsState.expanded` 为**权威集合**，展开/折叠时**增量**增删（不再从可见节点反推，
 * 避免异步递归加载尚未完成时把深层展开路径误删）。
 *
 * 默认展开：首次打开某项目（该根不在 `vsState.expandedSeeded` 中）时自动展开根 + 一级子目录
 * （跳过 node_modules/.git 等重量级目录，并限 20 个目录以内），写进 `expanded`；此后一律按
 * `expanded` 还原——包括根节点自身，用户折叠过就保持折叠。
 */
import { computed, nextTick, reactive, ref, watch } from "vue";
import * as api from "../../../composables/core/useApi";
import { confirmDialog, promptDialog } from "../../../composables/core/dialog";
import { copyText } from "../../../composables/ui/clipboard";
import { openTerminal, toast } from "../../../stores/workbench";
import { t } from "../../../composables/core/i18n";
import type { FsEntry, GitFileStatus, MenuItem } from "../../../../shared/types";
import { vsState, vsReady, persistVSCode, persistVSCodeSoon } from "../../../stores/vscode";
import { gitState, gitStatusOf, refreshGitStatus } from "../../../composables/domain/git";
import { refreshSvnStatus, svnState } from "../../../composables/domain/svn";
import { gitMenuFor, svnMenuFor, type RepoMenuActions } from "../../../composables/domain/repoMenu";
import ContextMenu from "../../common/ContextMenu.vue";
import QuickCommit from "../git/QuickCommit.vue";
import GitPanel from "../git/GitPanel.vue";
import SvnPanel from "../git/SvnPanel.vue";

/** VS Code 面板使用的独立根 key（与工作区 default 互不干扰，使项目目录内 CRUD 受 guardWsRoot 放行）。 */
const VS_KEY = "vscode";

export interface TreeEntry {
  path: string;
  name: string;
  isDir: boolean;
  depth: number;
  expanded: boolean;
  loaded: boolean;
  loading: boolean;
  /**
   * 该节点在 git/svn 状态查询中的「归属目录」：文件为其所在目录，目录为其父目录，
   * 根节点为自身路径。状态徽标按 `owner` 目录查询、以 `name` 为键读取。
   */
  owner: string;
  /** 子节点 path 列表（仅目录）。 */
  children: string[];
}

const props = defineProps<{
  /** 项目根目录绝对路径。 */
  root: string | null;
  /** 当前激活（打开）的文件路径，用于高亮。 */
  activePath?: string | null;
}>();

const emit = defineEmits<{
  (e: "open-file", path: string): void;
  (e: "file-removed", path: string): void;
  (e: "file-renamed", from: string, to: string): void;
}>();

const nodes = reactive<Record<string, TreeEntry>>({});
const rootPath = ref<string | null>(null);
const treeRef = ref<HTMLElement | null>(null);

/** 当前根节点（若有）。 */
const root = computed<TreeEntry | null>(() => (rootPath.value ? nodes[rootPath.value] ?? null : null));

/** 展平可见节点（DFS，仅展开分支可见）。 */
const visibleNodes = computed<TreeEntry[]>(() => {
  const out: TreeEntry[] = [];
  const r = root.value;
  if (!r) return out;
  const walk = (n: TreeEntry): void => {
    out.push(n);
    if (n.expanded) {
      for (const cp of n.children) {
        const c = nodes[cp];
        if (c) walk(c);
      }
    }
  };
  walk(r);
  return out;
});

function makeNode(path: string, name: string, isDir: boolean, depth: number, owner: string): TreeEntry {
  return { path, name, isDir, depth, owner, expanded: false, loaded: false, loading: false, children: [] };
}

function parentDir(p: string): string {
  return p.replace(/[\\/][^\\/]+$/, "");
}

/**
 * 依据持久化的 `vsState.expanded` 递归展开某节点下已加载的子目录。
 * 用于：首次还原 / 折叠后再展开时恢复子层展开态。
 */
function applyExpansion(node: TreeEntry): void {
  if (!node.isDir) return;
  for (const cp of node.children) {
    const c = nodes[cp];
    if (!c || !c.isDir || !vsState.expanded.includes(c.path)) continue;
    c.expanded = true;
    if (!c.loaded) void loadChildren(c);
    else applyExpansion(c);
  }
}

/**
 * 加载某目录的子项（/list），刷新 children，并异步探测该目录的 git/svn 状态（徽标数据）。
 *
 * 请求被主动取消（`cancelAll`，例如另一面板卸载）时不报错，而是**静默重试一次**：
 * 否则初次进入面板时列表会被取消成「展开了却没有内容」。
 */
async function loadChildren(node: TreeEntry, retry = false): Promise<void> {
  // 始终通过响应式代理操作节点：build() 里先 `nodes[path] = r` 再拿到的 r 是裸对象，
  // 直接改裸对象会绕过 Vue 的 Proxy set 陷阱 → 视图不刷新（表现为「展开了却没有内容，
  // 折叠再展开才出来」）。统一从 nodes 表取回代理再改。
  const live = nodes[node.path] ?? node;
  node = live;
  if (node.loading) return;
  node.loading = true;
  // 探测该目录的 git/svn 状态：徽标随响应式缓存到达后自动渲染，不阻塞子项展示。
  void refreshGitStatus(node.path);
  void refreshSvnStatus(node.path);
  try {
    // 用既有 /list 路由（已在运行 host 中）列出任意绝对目录，避免依赖新增 /browse 路由。
    const listing = await api.listDir(node.path, VS_KEY);
    const entries: FsEntry[] = listing.entries
      .filter((e) => !e.hidden)
      .sort((a, b) => Number(b.isDir) - Number(a.isDir) || a.name.localeCompare(b.name, "zh"));
    node.children = [];
    for (const e of entries) {
      const child = nodes[e.path] ?? makeNode(e.path, e.name, e.isDir, node.depth + 1, node.path);
      child.name = e.name;
      child.isDir = e.isDir;
      child.depth = node.depth + 1;
      child.owner = node.path;
      nodes[e.path] = child;
      node.children.push(e.path);
    }
    node.loaded = true;
    // 还原持久化的展开态：曾展开过的目录自动展开并继续加载其子项。
    applyExpansion(node);
  } catch (e) {
    node.loading = false;
    if (api.isAbortError(e)) {
      // 被打断（取消/卸载竞态）：静默重试一次；仍失败就保持空列表，不刷错误提示。
      if (!retry) {
        await new Promise((r) => setTimeout(r, 150));
        await loadChildren(node, true);
      }
      return;
    }
    toast("error", (e as Error).message);
  } finally {
    node.loading = false;
  }
}

/** 切换展开/折叠；目录首次展开时懒加载，并把展开态增量写入持久化集合。 */
function toggle(node: TreeEntry): void {
  if (!node.isDir) return;
  node.expanded = !node.expanded;
  markExpanded(node.path, node.expanded);
  if (node.expanded) {
    if (!node.loaded) void loadChildren(node);
    else applyExpansion(node);
  }
}

function onRowClick(node: TreeEntry): void {
  if (node.isDir) toggle(node);
  else emit("open-file", node.path);
}

/**
 * 增量更新持久化的展开集合（仅增删该路径本身；子层集合保留，便于再次展开时恢复）。
 * @param persistNow 为 false 时只改内存不落盘（批量播种默认展开时用，结束时统一落盘）。
 */
function markExpanded(path: string, on: boolean, persistNow = true): void {
  const set = new Set(vsState.expanded);
  const had = set.has(path);
  if (on) set.add(path);
  else set.delete(path);
  if (had === on) return;
  vsState.expanded = [...set];
  if (persistNow) persist();
}

/* ---------- 默认展开（首次打开某项目时） ---------- */

/**
 * 首次打开某项目时的默认展开层数：根 + 一层子目录。
 * 再深就属于用户主动探索，交给持久化记忆。
 */
const DEFAULT_EXPAND_DEPTH = 1;
/** 默认展开时跳过的重量级 / 无关目录（避免首屏上百个请求与无意义展开）。 */
const AUTO_EXPAND_SKIP = new Set([
  "node_modules",
  ".git",
  ".svn",
  ".hg",
  "dist",
  "build",
  "out",
  ".next",
  ".nuxt",
  ".cache",
  "coverage",
  "vendor",
  "target",
  ".venv",
  "venv",
  "__pycache__",
  "bin",
  "obj",
]);
/** 默认展开的目录数上限（含各级），超出即停，避免大仓库首屏请求风暴。 */
const AUTO_EXPAND_LIMIT = 20;

/**
 * 按「默认展开」策略展开 node 下的子目录（depthLeft 为剩余层数，budget 为全局目录数预算）。
 * 被展开的目录会同步写入 `vsState.expanded`，等价于用户手动展开过，之后由持久化记忆。
 */
async function expandByDefault(node: TreeEntry, depthLeft: number, budget: { n: number }): Promise<void> {
  if (!node.isDir || depthLeft <= 0) return;
  for (const cp of [...node.children]) {
    if (budget.n >= AUTO_EXPAND_LIMIT) return;
    const c = nodes[cp];
    if (!c || !c.isDir) continue;
    if (AUTO_EXPAND_SKIP.has(c.name.toLowerCase())) continue;
    budget.n += 1;
    c.expanded = true;
    markExpanded(c.path, true, false);
    if (!c.loaded) await loadChildren(c);
    else applyExpansion(c);
    await expandByDefault(c, depthLeft - 1, budget);
  }
}

/**
 * 首次打开某项目（该根未在 `expandedSeeded` 中）：默认展开根 + 一级目录，并记入播种集合。
 * 之后严格按 `expanded` 还原，用户折叠成什么样就恢复成什么样。
 */
async function seedDefaultExpansion(rootNode: TreeEntry): Promise<void> {
  rootNode.expanded = true;
  markExpanded(rootNode.path, true, false);
  await expandByDefault(rootNode, DEFAULT_EXPAND_DEPTH, { n: 0 });
  if (!vsState.expandedSeeded.includes(rootNode.path)) {
    vsState.expandedSeeded = [...vsState.expandedSeeded, rootNode.path];
  }
  persist();
}

/* ---------- 左栏滚动位置持久化（下次打开停在原位） ---------- */

function onScroll(): void {
  const el = treeRef.value;
  if (!el) return;
  vsState.treeScroll = el.scrollTop;
  persistVSCodeSoon();
}

/** 把持久化的滚动位置贴回树容器（在节点渲染完后调用）。 */
async function restoreScroll(): Promise<void> {
  await nextTick();
  const el = treeRef.value;
  if (el) el.scrollTop = vsState.treeScroll || 0;
}

/** rebuild 的世代号：并发/连续重建时丢弃旧一轮的异步结果，避免把内容写进已被清空的树。 */
let rebuildGen = 0;

/** 依据 root 重建树。 */
async function rebuild(): Promise<void> {
  const gen = ++rebuildGen;
  for (const k of Object.keys(nodes)) delete nodes[k];
  if (!props.root) {
    rootPath.value = null;
    return;
  }
  // 先把项目根注册给 host（写操作受 guardWsRoot 放行，且与工作台 root 解耦）；
  // 放在列目录之前，避免初次进入时「根尚未注册」导致后续写操作被拦截。失败不阻塞浏览。
  try {
    await api.setRoot(props.root, VS_KEY);
  } catch {
    /* 注册失败不影响浏览；写操作将在守卫处被拦截并提示 */
  }
  if (gen !== rebuildGen) return;
  const name = props.root.split(/[\\/]/).filter(Boolean).pop() ?? props.root;
  // 根节点归属自身：其右键菜单的仓库探测走 gitInRepo(root)（已随根目录展开刷新）。
  const r = makeNode(props.root, name, true, 0, props.root);
  nodes[props.root] = r;
  rootPath.value = props.root;
  // 后续一律用响应式代理（nodes[props.root]）操作根节点：裸对象 r 直接改属性不触发 Vue 重渲染
  // —— 这正是「初次进入展开却没有内容、折叠再展开才显示」的根因。
  const rootNode = nodes[props.root];

  // 「本项目一个展开项都没有」等同首次访问：即便播种过（例如上次把根折叠了、子层也没展开），
  // 也按默认策略展开根 + 一级目录，避免刷新后只剩一个孤零零的根节点看着像空树。
  const rootNorm = props.root.replace(/[\\/]+$/, "").toLowerCase();
  const hasExpandedUnderRoot = vsState.expanded.some((p) => {
    const n = p.replace(/[\\/]+$/, "").toLowerCase();
    return n === rootNorm || n.startsWith(`${rootNorm}\\`) || n.startsWith(`${rootNorm}/`);
  });
  const seeded = vsState.expandedSeeded.includes(props.root) && hasExpandedUnderRoot;
  if (seeded) {
    // 已播种过：严格按持久化集合还原（含根节点自身，用户折叠过根就保持折叠）。
    rootNode.expanded = vsState.expanded.includes(props.root);
    await loadChildren(rootNode);
  } else {
    // 首次打开：先加载根的子项，再按默认策略展开（根 + 一级目录），最后记入播种集合。
    rootNode.expanded = true;
    await loadChildren(rootNode);
    if (gen !== rebuildGen) return;
    await seedDefaultExpansion(rootNode);
  }
  if (gen !== rebuildGen) return;
  // 空树自愈：根是展开的却一个子项都没有（请求被取消 / 卸载竞态的典型症状），
  // 静默重拉最多两轮；真正空的目录也只是多两次请求，代价可忽略。
  for (let i = 0; i < 3 && rootNode.expanded && rootNode.children.length === 0; i += 1) {
    await new Promise((res) => setTimeout(res, [200, 600, 1500][i]));
    if (gen !== rebuildGen) return;
    rootNode.loaded = false;
    await loadChildren(rootNode);
  }
  if (gen !== rebuildGen) return;
  await restoreScroll();
}

/** 供父面板在「状态就绪 / 重新激活」时显式重建（切回面板、换项目后确保有内容）。 */
defineExpose({ rebuild });

// 只在 `vsReady`（持久化已加载 + 项目根已注册）后建树：
// 否则会在状态刚写入、host 根还没注册、另一面板可能正在全局取消请求时抢跑，
// 导致初次进去「展开着却没有内容」，必须手动折叠再展开才加载得出来。
watch(
  () => [props.root, vsReady.value] as const,
  () => {
    if (!vsReady.value) return;
    void rebuild();
  },
  { immediate: true },
);

/* ---------- Git 状态徽标 ---------- */

const GIT_LABEL: Record<GitFileStatus, string> = {
  "": "",
  untracked: "?",
  added: "A",
  modified: "M",
  deleted: "D",
};

/** 节点的 git 状态：按 owner 目录查询、以节点名取键；根节点不显示徽标。 */
function gitBadgeOf(node: TreeEntry): GitFileStatus {
  if (node.depth === 0) return "";
  return gitStatusOf(node.owner, node.name);
}
function gitBadgeLabelOf(node: TreeEntry): string {
  return GIT_LABEL[gitBadgeOf(node)];
}
function gitBadgeTitleOf(node: TreeEntry): string {
  const st = gitBadgeOf(node);
  if (st === "untracked") return t("gitBadgeUntracked");
  if (st === "added") return t("gitBadgeAdded");
  if (st === "modified") return t("gitBadgeModified");
  if (st === "deleted") return t("gitBadgeDeleted");
  return "";
}

/* ---------- 右键菜单 ---------- */
const cmOpen = ref(false);
const cmX = ref(0);
const cmY = ref(0);
/** 当前右键目标（打开菜单时固定）。 */
const cmTarget = ref<TreeEntry | null>(null);
/** 本次右键是否来自**空白处**（目标节点仍是项目根，但菜单取「空白区」那一套项）。 */
const cmBlank = ref(false);
/**
 * 菜单项以 computed 生成：`gitMenuFor`/`svnMenuFor` 依据**响应式**的 git/svn 状态缓存判断
 * 是否在仓库/工作副本，因此右键后异步探测回来的结果会自动补上 Git/SVN 子菜单。
 */
const cmItems = computed<MenuItem[]>(() =>
  cmTarget.value ? (cmBlank.value ? buildBlankMenu(cmTarget.value) : buildMenu(cmTarget.value)) : [],
);

function openMenu(node: TreeEntry, e: MouseEvent): void {
  cmBlank.value = false;
  cmTarget.value = node;
  cmX.value = e.clientX;
  cmY.value = e.clientY;
  // 打开菜单时补探一次目标归属目录的 git/svn 状态（未展开过的目录也能拿到子菜单）。
  const dir = menuDirOf(node);
  void refreshGitStatus(dir);
  void refreshSvnStatus(dir);
  cmOpen.value = true;
}

/**
 * 左栏**空白处**右键：作用对象是项目根，但只呈现与具体节点无关的动作
 * （在根上新建 / 折叠全部 / 刷新 / 终端 / 路径 / Git 与 SVN），
 * 不出现「打开 / 重命名 / 删除」这类必须针对某一项的项——避免误操作。
 */
function onBlankMenu(e: MouseEvent): void {
  const rootNode = props.root ? nodes[props.root] : undefined;
  // 未选择项目 / 树尚未建好：不弹空菜单（左栏已有「打开文件夹」入口）。
  if (!rootNode) return;
  cmBlank.value = true;
  cmTarget.value = rootNode;
  cmX.value = e.clientX;
  cmY.value = e.clientY;
  void refreshGitStatus(rootNode.path);
  void refreshSvnStatus(rootNode.path);
  cmOpen.value = true;
}

/** 菜单上下文目录（判断是否在仓库/工作副本、以及面板作用目录）。 */
function menuDirOf(node: TreeEntry): string {
  return node.owner || node.path;
}

function buildMenu(node: TreeEntry): MenuItem[] {
  const dir = menuDirOf(node);
  const items: MenuItem[] = [];
  items.push(
    node.isDir
      ? { label: t("menuOpen"), icon: "folderOpen", onClick: () => toggle(node) }
      : { label: t("menuOpen"), icon: "arrowRight", onClick: () => emit("open-file", node.path) },
  );
  items.push({ separator: true });
  items.push(
    { label: t("vsNewFile"), icon: "file", onClick: () => void actNewFile(node) },
    { label: t("vsNewFolder"), icon: "folder", onClick: () => void actNewFolder(node) },
    { label: t("vsRename"), icon: "edit", onClick: () => void actRename(node) },
    { label: t("vsDelete"), icon: "trash", onClick: () => void actDelete(node) },
  );
  // Git / SVN 子菜单：与文件列表共用同一构建器（repoMenu），保证完全一致。
  items.push(...gitMenuFor(dir, node.path, repoAct));
  items.push(...svnMenuFor(dir, node.path, repoAct));
  items.push(
    { separator: true },
    { label: t("menuCopyRelPath"), icon: "link", onClick: () => void copyRelPath(node.path) },
    { label: t("menuCopyAbsPath"), icon: "link", onClick: () => void copyAbsPath(node.path) },
    { label: t("menuOpenTerminal"), icon: "terminal", onClick: () => openTerminalHere(node) },
    { label: t("vsAddToSession"), icon: "sparkle", onClick: () => actAddToSession(node) },
    { separator: true },
    { label: t("vsRefresh"), icon: "refresh", onClick: () => void actRefresh(node) },
  );
  return items;
}

/** 空白处菜单：把项目根当目标，仅保留「与具体条目无关」的动作。 */
function buildBlankMenu(rootNode: TreeEntry): MenuItem[] {
  const dir = rootNode.path;
  return [
    { label: t("vsNewFile"), icon: "file", onClick: () => void actNewFile(rootNode) },
    { label: t("vsNewFolder"), icon: "folder", onClick: () => void actNewFolder(rootNode) },
    { separator: true },
    { label: t("vsExpandAll"), icon: "chevronDown", onClick: () => void doExpandAll() },
    { label: t("vsCollapseAll"), icon: "chevronRight", onClick: collapseAll },
    // Git / SVN 子菜单：与节点菜单共用同一构建器（作用目录 = 项目根）。
    ...gitMenuFor(dir, dir, repoAct),
    ...svnMenuFor(dir, dir, repoAct),
    { separator: true },
    { label: t("menuCopyRelPath"), icon: "link", onClick: () => void copyRelPath(dir) },
    { label: t("menuCopyAbsPath"), icon: "link", onClick: () => void copyAbsPath(dir) },
    { label: t("menuOpenTerminal"), icon: "terminal", onClick: () => openTerminalHere(rootNode) },
    { label: t("vsAddToSession"), icon: "sparkle", onClick: () => actAddToSession(rootNode) },
    { separator: true },
    { label: t("vsRefresh"), icon: "refresh", onClick: () => void actRefresh(rootNode) },
  ];
}

/**
 * 折叠全部：所有子层收起，只留根（与 VS Code 的「折叠全部」一致）。
 * 持久化集合收敛为「仅根展开」，并记入已播种，避免下次重建被当成首次访问又全展开。
 */
function collapseAll(): void {
  const rootNode = props.root ? nodes[props.root] : undefined;
  if (!rootNode) return;
  for (const n of Object.values(nodes)) n.expanded = n.depth === 0;
  vsState.expanded = [rootNode.path];
  vsState.expandedSeeded = [...new Set([...vsState.expandedSeeded, rootNode.path])];
  persist();
}

/**
 * 「展开全部」的目录数预算。
 *
 * 目录树是**懒加载**的：每展开一个目录都要发一次 `/list`（外加 git/svn 状态探测），
 * 因此不能像 VS Code 那样无条件全展开——大仓库会瞬间打出成百上千个请求。
 * 这里按目录数封顶，命中上限即停止并提示用户「只看展开了多少」。
 */
const EXPAND_ALL_LIMIT = 120;

/**
 * 展开全部：自根递归展开，跳过 `AUTO_EXPAND_SKIP` 里的重量级目录（node_modules/.git 等）。
 *
 * 展开过程中**不落盘**（`markExpanded(..., false)`），全部结束后统一持久化一次，避免逐目录写状态。
 * @returns 是否因预算用尽而提前停止。
 */
async function expandAll(): Promise<boolean> {
  const rootNode = props.root ? nodes[props.root] : undefined;
  if (!rootNode) return false;
  let budget = EXPAND_ALL_LIMIT;
  let truncated = false;

  const walk = async (path: string): Promise<void> => {
    if (budget <= 0) {
      truncated = true;
      return;
    }
    budget -= 1;
    const node = nodes[path];
    if (!node?.isDir) return;
    node.expanded = true;
    markExpanded(node.path, true, false);
    if (!node.loaded) await loadChildren(node);
    for (const childPath of [...node.children]) {
      const child = nodes[childPath];
      if (!child?.isDir) continue;
      if (AUTO_EXPAND_SKIP.has(child.name.toLowerCase())) continue;
      await walk(childPath);
      if (budget <= 0) {
        truncated = true;
        return;
      }
    }
  };

  await walk(rootNode.path);
  persist();
  return truncated;
}

/** 菜单入口：展开全部并把「因预算提前停止」如实告知用户。 */
async function doExpandAll(): Promise<void> {
  const truncated = await expandAll();
  if (truncated) toast("info", t("vsExpandAllLimited", { n: String(EXPAND_ALL_LIMIT) }));
}

/* ---------- Git / SVN 管理面板与命令（复用既有实现） ---------- */

const gitPanelOpen = ref(false);
const svnPanelOpen = ref(false);
const quickCommitOpen = ref(false);
const gitDiffOpen = ref(false);
const gitDiffText = ref("");
/** 面板作用目录：右键目标所在目录（目录节点取自身），缺省用项目根。 */
const panelDir = ref("");

/** 注入给共享菜单构建器的 UI 动作（面板 / 提交 / diff / 变更后刷新）。 */
const repoAct: RepoMenuActions = {
  openGitPanel: () => {
    panelDir.value = cmTarget.value ? menuDirOf(cmTarget.value) : props.root ?? "";
    gitPanelOpen.value = true;
  },
  openSvnPanel: () => {
    panelDir.value = cmTarget.value ? menuDirOf(cmTarget.value) : props.root ?? "";
    svnPanelOpen.value = true;
  },
  openCommit: () => {
    panelDir.value = cmTarget.value ? menuDirOf(cmTarget.value) : props.root ?? "";
    quickCommitOpen.value = true;
  },
  showGitDiff: (text: string) => {
    gitDiffText.value = text;
    gitDiffOpen.value = true;
  },
  afterMutate: async (dir: string) => {
    await refreshGitStatus(dir);
    await refreshSvnStatus(dir);
  },
};

/**
 * 面板关/开切换：面板内的操作会改动工作区，关闭时统一刷新徽标缓存 + 重载当前展开目录，
 * 使树上的角标与面板保持一致。
 */
function onGitPanelToggle(v: boolean): void {
  gitPanelOpen.value = v;
  if (!v) void refreshBadges();
}
function onSvnPanelToggle(v: boolean): void {
  svnPanelOpen.value = v;
  if (!v) void refreshBadges();
}

/** 重探已探测过的目录（有界集合，即当前已展开过的那些目录）。 */
async function refreshBadges(): Promise<void> {
  const dirs = new Set<string>([...Object.keys(gitState.dirs), ...Object.keys(svnState.dirs)]);
  if (props.root) dirs.add(props.root);
  await Promise.all([...dirs].flatMap((d) => [refreshGitStatus(d), refreshSvnStatus(d)]));
}

/* ---------- 复制路径 / 在终端打开 ---------- */

/** 相对项目根的路径（不在根内时回退为绝对路径）。 */
function relPathOf(p: string): string {
  const rootDir = (props.root ?? "").replace(/[\\/]+$/, "");
  if (rootDir && p.toLowerCase().startsWith(rootDir.toLowerCase())) {
    return p.slice(rootDir.length).replace(/^[\\/]+/, "");
  }
  return p;
}

async function copyRelPath(path: string): Promise<void> {
  const ok = await copyText(relPathOf(path));
  toast(ok ? "ok" : "error", ok ? t("menuPathCopied") : t("menuPathCopyFail"));
}

async function copyAbsPath(path: string): Promise<void> {
  const ok = await copyText(path);
  toast(ok ? "ok" : "error", ok ? t("menuPathCopied") : t("menuPathCopyFail"));
}

/** 在终端打开：文件夹直接以该目录启动；文件则以所在目录启动（复用工作台终端）。 */
function openTerminalHere(node: TreeEntry): void {
  openTerminal(node.isDir ? node.path : parentDir(node.path));
}

/* ---------- 添加到会话（引用文件 / 文件夹到 DSH 会话） ---------- */

/**
 * 把当前右键目标作为引用追加到 DSH 会话输入框：优先写入官方结构化引用 chip
 * （`source: "reference"`），通道不可用时由桥接层降级为 `@路径` 文本。
 */
function actAddToSession(node: TreeEntry): void {
  const ok = window.__DSH_FILE_WORKBENCH__?.appendSessionReference?.(node.path, node.isDir) ?? false;
  // if (ok) toast("ok", t("vsAddToSessionOk"));
  // else toast("error", t("vsAddToSessionFail"));
  if(!ok) toast("error", t("vsAddToSessionFail"));
}

/* ---------- 新建 / 重命名 / 删除 / 刷新 ---------- */

function containerOf(node: TreeEntry): TreeEntry {
  return node.isDir ? node : nodes[parentDir(node.path)] ?? node;
}

async function actNewFile(node: TreeEntry): Promise<void> {
  const dir = containerOf(node);
  const name =
    (await promptDialog({
      title: t("vsNewFile"),
      message: t("vsNewFileName"),
      placeholder: "untitled.txt",
      initial: "untitled.txt",
    })) ?? null;
  if (!name) return;
  const full = `${dir.path.replace(/[\\/]+$/, "")}/${name}`;
  try {
    await api.touch(full, VS_KEY);
    await refreshNode(dir);
    emit("open-file", full);
  } catch (e) {
    toast("error", (e as Error).message);
  }
}

async function actNewFolder(node: TreeEntry): Promise<void> {
  const dir = containerOf(node);
  const name =
    (await promptDialog({
      title: t("vsNewFolder"),
      message: t("vsNewFolderName"),
      placeholder: "new-folder",
      initial: "new-folder",
    })) ?? null;
  if (!name) return;
  const full = `${dir.path.replace(/[\\/]+$/, "")}/${name}`;
  try {
    await api.mkdir(full, VS_KEY);
    await refreshNode(dir);
  } catch (e) {
    toast("error", (e as Error).message);
  }
}

async function actRename(node: TreeEntry): Promise<void> {
  const parent = parentDir(node.path);
  const base = node.name;
  const name =
    (await promptDialog({ title: t("vsRename"), message: t("vsRenameName"), placeholder: base, initial: base })) ?? null;
  if (!name || name === base) return;
  const to = `${parent.replace(/[\\/]+$/, "")}/${name}`;
  try {
    await api.rename(node.path, to, VS_KEY);
    emit("file-renamed", node.path, to);
    const pNode = nodes[parent];
    if (pNode) await refreshNode(pNode);
  } catch (e) {
    toast("error", (e as Error).message);
  }
}

async function actDelete(node: TreeEntry): Promise<void> {
  const ok = await confirmDialog({ title: t("vsDelete"), message: `${t("vsDeleteConfirm")}「${node.name}」？` });
  if (!ok) return;
  const parent = parentDir(node.path);
  try {
    await api.remove(node.path, VS_KEY);
    emit("file-removed", node.path);
    const pNode = nodes[parent];
    if (pNode) await refreshNode(pNode);
  } catch (e) {
    toast("error", (e as Error).message);
  }
}

async function actRefresh(node: TreeEntry): Promise<void> {
  await refreshNode(node.isDir ? node : nodes[parentDir(node.path)] ?? node);
}

/** 刷新某目录节点（强制重新拉取子项，保持展开态）。 */
async function refreshNode(node: TreeEntry): Promise<void> {
  node.loaded = false;
  node.expanded = true;
  markExpanded(node.path, true);
  await loadChildren(node);
}

/** 持久化 VS Code 状态（路径/激活/展开/比例/滚动位置）。 */
function persist(): void {
  persistVSCode();
}
</script>

<style scoped>
.vs-tree {
  height: 100%;
  overflow: auto;
  font-size: 13px;
  user-select: none;
  color: var(--dsh-fg, #c9d1d9);
}
.vs-tree-empty {
  padding: 10px;
  color: var(--dsh-fg-weak, #8b949e);
}
.vs-tree-row {
  display: flex;
  align-items: center;
  height: 22px;
  line-height: 22px;
  cursor: pointer;
  white-space: nowrap;
  padding-right: 8px;
}
.vs-tree-row:hover {
  background: var(--dsh-hover, rgba(255, 255, 255, 0.06));
}
.vs-tree-row.is-active {
  background: var(--dsh-accent-soft, rgba(35, 134, 54, 0.22));
}
.vs-caret {
  width: 14px;
  text-align: center;
  color: var(--dsh-fg-weak, #8b949e);
  flex: 0 0 auto;
}
.vs-ico {
  width: 16px;
  height: 16px;
  margin-right: 4px;
  flex: 0 0 auto;
  display: inline-block;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  background-color: currentColor;
}
.ico-dir {
  -webkit-mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='black' d='M1.5 3.5h5l1.5 1.5h6.5v8h-13z'/></svg>");
  mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='black' d='M1.5 3.5h5l1.5 1.5h6.5v8h-13z'/></svg>");
  color: #dcb67a;
}
.ico-file {
  -webkit-mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='black' d='M3.5 1.5h6l3 3v10h-9z'/></svg>");
  mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='black' d='M3.5 1.5h6l3 3v10h-9z'/></svg>");
}
.vs-name {
  overflow: hidden;
  text-overflow: ellipsis;
}
.vs-loading {
  margin-left: 4px;
  color: var(--dsh-fg-weak, #8b949e);
}
/* git 状态徽标（? 未跟踪 / A 新增 / M 修改 / D 删除） */
.vs-git-badge {
  margin-left: 5px;
  flex: 0 0 auto;
  font-size: 10px;
  line-height: 14px;
  padding: 0 4px;
  border-radius: 3px;
  font-weight: 700;
}
.vs-git-badge.st-untracked {
  color: #8b949e;
  border: 1px solid #8b949e88;
}
.vs-git-badge.st-added {
  color: #238636;
  border: 1px solid #238636;
}
.vs-git-badge.st-modified {
  color: #d29922;
  border: 1px solid #d29922;
}
.vs-git-badge.st-deleted {
  color: #f85149;
  border: 1px solid #f8514988;
}
</style>

<!-- 非 scoped：el-dialog 经 append-to-body 渲染于 body，scoped 选择器无法命中弹窗内容 -->
<style>
.vs-diff-dialog .el-dialog__body {
  padding: 8px 12px;
}
.vs-diff-body {
  margin: 0;
  max-height: 60vh;
  overflow: auto;
  font-family: var(--dsh-mono, Consolas, "Courier New", monospace);
  font-size: 12px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-all;
  color: var(--dsh-fg, #c9d1d9);
}
</style>
