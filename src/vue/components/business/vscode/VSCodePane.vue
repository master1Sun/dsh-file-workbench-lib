<template>
  <div ref="rootRef" class="vs-pane" :data-theme="theme" :style="rootStyle">
    <!-- 顶栏：标题 + 「文件」下拉菜单 + 项目目录。空间不足时文本标签折叠成图标（compact） -->
    <div ref="topbarRef" class="vs-topbar" :class="{ compact: topbarCompact }">
      <span class="vs-brand" :title="t('vsBrand')">
        <icon class="vs-topbar-ico" name="code" :size="14" />
        <span class="vs-topbar-txt">{{ t("vsBrand") }}</span>
      </span>
      <span class="vs-sep"></span>
      <!-- 「文件」菜单：打开文件夹 / 保存 / 另存为 / 全部保存（对齐 VS Code 的菜单组织方式） -->
      <button ref="fileBtnRef" class="vs-btn vs-btn-menu" :class="{ open: fileMenuOpen }" :title="t('vsMenuFile')" @click="openFileMenu">
        <icon class="vs-topbar-ico" name="folder" :size="13" />
        <span class="vs-topbar-txt">{{ t("vsMenuFile") }}</span>
        <span class="vs-caret"></span>
      </button>
      <span class="vs-proj" :title="vsState.projectDir ?? ''">{{ vsState.projectDir || t("vsNoProject") }}</span>
      <span class="vs-spacer"></span>
      <!-- 快速打开：按文件名搜索当前项目内的文件（Ctrl+P），结果下拉可键盘上下选择 -->
      <div class="vs-search">
        <input
          ref="searchInputRef"
          v-model="searchQ"
          class="vs-search-input"
          :placeholder="indexLoading ? t('vsSearchIndexing') : t('vsQuickOpenPlaceholder')"
          :disabled="!vsState.projectDir"
          @focus="onSearchFocus"
          @input="onSearchInput"
          @blur="onSearchBlur"
          @keydown.down.prevent="moveSearch(1)"
          @keydown.up.prevent="moveSearch(-1)"
          @keydown.enter.prevent="openSearchResult()"
          @keydown.esc.prevent="closeSearch"
        />
        <div v-if="searchOpen && searchResults.length > 0" class="vs-search-pop">
          <div
            v-for="(r, i) in searchResults"
            :key="r.abs"
            class="vs-search-row"
            :class="{ active: i === searchActive }"
            :title="r.abs"
            @mousedown.prevent="openSearchResult(i)"
            @mouseenter="searchActive = i"
          >
            <span class="vs-search-name">{{ r.name }}</span>
            <span class="vs-search-dir">{{ r.dir }}</span>
          </div>
          <div v-if="indexTruncated" class="vs-search-note">{{ t("vsSearchTruncated") }}</div>
        </div>
        <div v-else-if="searchOpen && searchQ.trim() && !indexLoading" class="vs-search-pop">
          <div class="vs-search-note">{{ t("vsSearchNoResult") }}</div>
        </div>
      </div>
      <!-- 最近项目：一键切回打开过的项目目录（当前项目标记并置灰） -->
      <button ref="recentBtnRef" class="vs-btn vs-btn-menu" :class="{ open: recentMenuOpen }" :title="t('vsRecentProjects')" @click="openRecentMenu">
        <icon class="vs-topbar-ico" name="clock" :size="13" />
        <span class="vs-topbar-txt">{{ t("vsRecentProjects") }}</span>
        <span class="vs-caret"></span>
      </button>
    </div>

    <div class="vs-body">
      <!-- 左栏：顶部「文件 / 搜索」tab + 项目目录树 + 底部 Git 提交记录栏（只占左栏） -->
      <div class="vs-left" :style="leftStyle">
        <!-- 左栏 tab：默认「文件」（目录树），可切「搜索」（全局内容搜索，点击命中行跳转） -->
        <div class="vs-left-tabs">
          <button class="vs-left-tab" :class="{ active: leftTab === 'files' }" :title="t('vsLeftTabFiles')" @click="leftTab = 'files'">
            <icon name="folder" :size="12" />
            <span>{{ t("vsLeftTabFiles") }}</span>
          </button>
          <!-- 未打开项目目录时搜索不可用（置灰禁用）；title 说明原因 -->
          <button
            class="vs-left-tab"
            :class="{ active: leftTab === 'search' }"
            :disabled="!vsState.projectDir"
            :title="vsState.projectDir ? t('vsLeftTabSearch') : t('vsSearchNeedsProject')"
            @click="leftTab = 'search'"
          >
            <icon name="search" :size="12" />
            <span>{{ t("vsLeftTabSearch") }}</span>
          </button>
        </div>
        <ProjectTree
          v-show="leftTab === 'files'"
          ref="treeRef"
          :root="vsState.projectDir"
          :active-path="vsState.activeTab"
          @open-file="openFile"
          @file-removed="onFileRemoved"
          @file-renamed="onFileRenamed"
        />
        <!-- 全局内容搜索：按文件分组展示命中行，点击打开文件并跳到对应行 -->
        <VSSearchPanel v-if="leftTab === 'search'" :project-dir="vsState.projectDir || ''" @open="onSearchOpen" />
        <!-- Git 提交记录栏：非 git 仓库时整个不渲染；文件详情按钮 → 右栏展示 diff -->
        <vs-git-bar @open-diff="showDiffPane" />
      </div>
      <!-- 拖拽分隔条 -->
      <div
        class="vs-split"
        :class="{ dragging }"
        role="separator"
        aria-orientation="vertical"
        @mousedown.prevent="startDrag"
      ></div>
      <!-- 右栏：标签 + 编辑器 + 状态栏 -->
      <div class="vs-right">
        <TabBar
          :tabs="tabs"
          :active="activeTabId"
          @select="selectTab"
          @close="closeTab"
          @save="savePath"
          @close-save="closeSaveTab"
          @close-others="closeOthers"
          @close-right="closeRight"
          @close-all="closeAllOpen"
        />
        <div class="vs-editor-wrap">
          <!-- 提交文件详情（diff）：来自左栏 Git 记录栏的文件按钮，选中任何标签页时自动关闭 -->
          <div v-if="diffPane" class="vs-diffpane">
            <GitDiffView :lines="diffPane.lines" :empty="t('gitDiffEmpty')" />
          </div>
          <div v-else-if="!vsState.activeTab" class="vs-empty">
            <div class="vs-empty-hint">{{ t("vsEmptyHint") }}</div>
            <button class="vs-btn" @click="selectProject">{{ t("vsOpenFolder") }}</button>
          </div>
          <div v-else-if="activeLoading" class="vs-loading-big">{{ t("vsLoading") }}</div>
          <div v-else-if="activeError" class="vs-error">{{ activeError }}</div>
          <!-- 非文本文件：不进编辑器，避免把二进制当文本渲染 / 保存 -->
          <div v-else-if="activeBuffer?.binary" class="vs-empty">
            <div class="vs-empty-hint">{{ t("vsBinaryHint") }}</div>
            <button class="vs-btn" @click="openActiveExternal">{{ t("vsOpenExternal") }}</button>
          </div>
          <CodeEditor
            v-else
            ref="editorRef"
            :key="vsState.activeTab"
            :path="vsState.activeTab"
            :initial-content="activeContent"
            :initial-view="initialView"
            :doc-rev="activeDocRev"
            :readonly="readonlyActive"
            :dark="theme === 'dark'"
            @change="onEditorChange"
            @cursor="onCursor"
            @view="onEditorView"
            @contextmenu="onEditorMenu"
          />
        </div>
        <!-- 状态栏：行/列 + 编码 + 行尾 + 语言（编码与行尾可点击切换，对齐 VS Code） -->
        <div class="vs-status">
          <span v-if="readonlyActive" class="vs-status-readonly">{{ t("vsReadonly") }}</span>
          <!-- 外部改动冲突：本地有未保存改动且磁盘已被改写；点击可选择以磁盘版本覆盖 -->
          <button v-if="activeConflict" class="vs-status-conflict" @click="resolveConflict">
            {{ t("vsConflictBadge") }}
          </button>
          <span class="vs-status-spacer"></span>
          <span class="vs-status-seg">Ln {{ cursor.line }}, Col {{ cursor.col }}</span>
          <button class="vs-status-seg vs-status-btn" :disabled="!vsState.activeTab" @click="openEncMenu">
            {{ encodingLabel }}
          </button>
          <button class="vs-status-seg vs-status-btn" :disabled="!vsState.activeTab" @click="openEolMenu">
            {{ eolLabel }}
          </button>
          <span class="vs-status-seg">{{ languageLabel }}</span>
        </div>
      </div>
    </div>

    <!-- 终端统一由 App 层单例 TerminalDialog 承载（常驻、切换面板不卸载、不重复打开）。
         编辑器内「在终端打开」直接调用 openTerminal() 设置 wb.termOpen，由同一终端响应。 -->

    <!-- 顶栏「文件」菜单 -->
    <ContextMenu
      v-if="fileMenuOpen"
      :items="fileMenuItems"
      :x="fileMenuX"
      :y="fileMenuY"
      @close="fileMenuOpen = false"
    />
    <!-- 顶栏「最近项目」菜单 -->
    <ContextMenu
      v-if="recentMenuOpen"
      :items="recentMenuItems"
      :x="recentMenuX"
      :y="recentMenuY"
      @close="recentMenuOpen = false"
    />
    <!-- 状态栏：编码选择器 -->
    <ContextMenu
      v-if="encMenuOpen"
      :items="encMenuItems"
      :x="encMenuX"
      :y="encMenuY"
      @close="encMenuOpen = false"
    />
    <!-- 状态栏：行尾选择器 -->
    <ContextMenu
      v-if="eolMenuOpen"
      :items="eolMenuItems"
      :x="eolMenuX"
      :y="eolMenuY"
      @close="eolMenuOpen = false"
    />
    <!-- 编辑器右键菜单（格式化内容等） -->
    <ContextMenu v-if="edMenuOpen" :items="edMenuItems" :x="edMenuX" :y="edMenuY" @close="edMenuOpen = false" />

    <!-- 全局确认 / 输入弹窗（project tree 的 confirmDialog 渲染所需） -->
    <confirm-dialog />
    <!-- 选择文件夹弹窗（替代原生目录选择器） -->
    <path-picker-dialog
      v-model="pickerVisible"
      :initial-dir="projectPickerDir"
      @confirm="onPickFolder"
    />
    <!-- 另存为弹窗：浏览到目标文件夹 + 填文件名（替代手输绝对路径的输入框） -->
    <path-picker-dialog
      v-model="saveAsVisible"
      mode="file"
      :initial-dir="saveAsDir"
      :initial-name="saveAsName"
      @confirm="onSaveAsConfirm"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, inject, nextTick, onBeforeUnmount, onMounted, reactive, ref, watch } from "vue";
import ProjectTree from "./ProjectTree.vue";
import TabBar, { type TabInfo } from "./TabBar.vue";
import CodeEditor from "./CodeEditor.vue";
import PathPickerDialog from "./PathPickerDialog.vue";
import VsGitBar from "./VSGitBar.vue";
import VSSearchPanel from "./VSSearchPanel.vue";
import GitDiffView from "../git/GitDiffView.vue";
import Icon from "../../common/Icon.vue";
import ConfirmDialog from "../../common/ConfirmDialog.vue";
import ContextMenu from "../../common/ContextMenu.vue";
import type { EolStyle, MenuItem, TextEncoding } from "../../../../shared/types";
import { VS_STORE_KEY, defaultVSCodeStore, type OpenBuffer, type VSCodeStore } from "../../../stores/vscode";
import * as api from "../../../composables/core/useApi";
import { clearPendingEditorProject, floatTab, openNewEditorTab, takePendingEditorProject } from "../../../composables/core/sidebarRight";
import { confirmDialog } from "../../../composables/core/dialog";
import { toast, openNewTerminal } from "../../../stores/workbench";
import { t } from "../../../composables/core/i18n";
import { useTheme } from "../../../composables/core/theme";
import { prefs } from "../../../composables/core/settings";
import { languageLabelFor } from "./langResolver";

/**
 * 本面板所属的**文件编辑器实例**。
 *
 * 面板可以同时挂载多份（DSH 右侧栏分栏 / 浮窗各一份），实例由 `main.ts` 按 DSH tab id
 * 分槽后 provide 下来 —— 每份实例有独立的项目目录、标签、展开态与未保存缓冲。
 * 注入缺失时（独立调试、旧版宿主）退化为槽 1 的兜底实例，行为与改造前一致。
 */
const store: VSCodeStore = inject(VS_STORE_KEY) ?? defaultVSCodeStore();
/** 存储字段的本地别名：模板与既有逻辑沿用改造前的命名，避免大范围改写。 */
const vsState = store.state;
const vsReady = store.ready;
/** 本实例在宿主侧的独立根 key（`vscode` / `vscode-2` / …），读写守卫按它隔离。 */
const VS_KEY = store.rootKey;
const initVSCodeState = (): Promise<void> => store.init();
const persistVSCode = (): void => store.persist();
const rememberProject = (dir: string): void => store.rememberProject(dir);
const fileViewOf = (path: string | null): { scrollTop?: number; anchor?: number } => store.fileViewOf(path);
const rememberFileView = (path: string, view: { scrollTop?: number; anchor?: number }): void =>
  store.rememberFileView(path, view);
const stashOpenBuffers = (buffers: Record<string, OpenBuffer>): void => store.stashOpenBuffers(buffers);
const takeStashedBuffers = (): Record<string, OpenBuffer> => store.takeStashedBuffers();

/** 外部改动检测轮询间隔：足以发现外部保存，又不至于把 host 打满。 */
const POLL_MS = 2500;

const rootRef = ref<HTMLElement | null>(null);
const theme = useTheme(rootRef);

const rootStyle = computed<Record<string, string | undefined>>(() => ({
  fontSize: `${prefs.fontSize ?? 13}px`,
  "--vs-fs-scale": String((prefs.fontSize ?? 13) / 13),
}));

/** 各打开文件的缓冲区（内容 + dirty + 编码/行尾元数据，不持久化，以磁盘为准）。 */
const buffers = reactive<Record<string, OpenBuffer>>({});
/** 正在加载内容的路径集合。 */
const loadingPaths = reactive(new Set<string>());
/** 打开失败（读取错误）的路径 → 错误信息。 */
const errors = reactive<Record<string, string>>({});
/** 各文件的内容修订号：内容被外部替换（重载 / 换编码）后自增，驱动编辑器重建。 */
const docRevs = reactive<Record<string, number>>({});
/** 保存中标记。 */
const saving = ref(false);
/** 选择文件夹弹窗可见性。 */
const pickerVisible = ref(false);
/**
 * 选择文件夹弹窗的起始目录：**项目目录的父目录**，而不是项目目录本身。
 *
 * 若直接用 `vsState.projectDir`，每次「选择项目文件夹」都会把弹窗定位进该文件夹内部；
 * 停在父目录则重开时看到项目目录本身（可再次选中），不会一打开就「进入文件夹内」。
 * 项目目录为空（空白窗口）或无父级（盘符根）时回退到 null（弹窗从「我的电脑」开始）。
 */
const projectPickerDir = computed<string | null>(() => {
  const d = vsState.projectDir;
  if (!d) return null;
  const norm = d.replace(/[\\/]+$/, "");
  const i = Math.max(norm.lastIndexOf("/"), norm.lastIndexOf("\\"));
  if (i <= 0) return null;
  const parent = norm.slice(0, i);
  return /^[A-Za-z]:$/.test(parent) ? null : parent;
});
/** 另存为弹窗可见性 + 初始目录 / 初始文件名（打开时按当前文件算出）。 */
const saveAsVisible = ref(false);
const saveAsDir = ref<string | null>(null);
const saveAsName = ref("");
/** 目录树实例（挂载后显式重建一次，兜住「切回面板内容为空」）。 */
const treeRef = ref<InstanceType<typeof ProjectTree> | null>(null);
/** 左栏 tab：'files' = 目录树（默认），'search' = 全局内容搜索。 */
const leftTab = ref<"files" | "search">("files");

// 项目目录被清空（关闭项目 / 空白窗口）时，若正停在搜索 tab 则退回文件 tab（搜索按钮已禁用）。
watch(
  () => vsState.projectDir,
  (dir) => {
    if (!dir && leftTab.value === "search") leftTab.value = "files";
  },
);

/** 左栏搜索结果点击：相对路径 → 绝对路径后打开并跳行。 */
function onSearchOpen(rel: string, ln: number): void {
  if (!vsState.projectDir) return;
  void openFile(absOf(rel, vsState.projectDir), { line: ln });
}
/** 光标位置（状态栏）。 */
const cursor = reactive({ line: 1, col: 1 });
/** 外部改动检测的定时器句柄。 */
let pollTimer: number | null = null;

/** 文件名（提示文案用）。 */
function basename(p: string): string {
  return p.split(/[\\/]/).filter(Boolean).pop() ?? p;
}

/** 所在目录（另存为弹窗的默认起始位置）。只到盘符（`C:`）时补上分隔符，使其可作为目录使用。 */
function dirnameOf(p: string): string {
  const i = Math.max(p.lastIndexOf("/"), p.lastIndexOf("\\"));
  if (i < 0) return "";
  const dir = i === 0 ? p.slice(0, 1) : p.slice(0, i);
  return /^[A-Za-z]:$/.test(dir) ? `${dir}${p[i]}` : dir;
}

/** 计算某路径是否落在 projectDir 内（用于判定编辑器只读）。 */
function isWithin(root: string, target: string): boolean {
  if (!root) return false;
  const r = root.replace(/[\\/]+$/, "").toLowerCase();
  const p = target.replace(/[\\/]+$/, "").toLowerCase();
  return p === r || p.startsWith(`${r}\\`) || p.startsWith(`${r}/`);
}

/* 「变更详情」伪标签：路径 = vs-diff://<标题>，TabBar 用 basename 显示标题。 */
const DIFF_PREFIX = "vs-diff://";

const tabs = computed<TabInfo[]>(() => {
  const list: TabInfo[] = vsState.openTabs.map((path) => ({
    path,
    dirty: buffers[path]?.dirty ?? false,
    conflict: buffers[path]?.conflict ?? false,
  }));
  // diff 详情打开时在末尾追加一个伪标签（不进 openTabs、不持久化）
  if (diffPane.value) list.push({ path: DIFF_PREFIX + diffPane.value.title, dirty: false, icon: "fileOut" });
  return list;
});

/** TabBar 高亮：diff 详情打开时高亮伪标签，否则高亮真实文件标签。 */
const activeTabId = computed<string | null>(() =>
  diffPane.value ? DIFF_PREFIX + diffPane.value.title : vsState.activeTab,
);

/** 是否为「变更详情」伪标签路径。 */
function isDiffTab(path: string): boolean {
  return path.startsWith(DIFF_PREFIX);
}

const activeBuffer = computed<OpenBuffer | undefined>(() =>
  vsState.activeTab ? buffers[vsState.activeTab] : undefined,
);
const activeContent = computed<string>(() => activeBuffer.value?.content ?? "");
const activeDocRev = computed<number>(() => (vsState.activeTab ? (docRevs[vsState.activeTab] ?? 0) : 0));
const activeLoading = computed<boolean>(() => (vsState.activeTab ? loadingPaths.has(vsState.activeTab) : false));
const activeError = computed<string | undefined>(() => (vsState.activeTab ? errors[vsState.activeTab] : undefined));
/**
 * 当前文件是否只读：项目目录内始终可写；项目目录外与「文件工作台」的 `canOperatePath`
 * 保持同一口径——仅在 root 开关（`prefs.allowOutsideRoot`）打开时放行。
 *
 * 这个口径必须一致：另存为到项目外（如桌面）的文件，若这里仍按「项目外即只读」判定，
 * 用户刚存出去的文件会立刻变成只读、连再次保存都不行。
 */
const readonlyActive = computed<boolean>(() => {
  const path = vsState.activeTab;
  if (!path || !vsState.projectDir) return true;
  if (isWithin(vsState.projectDir, path)) return false;
  return !prefs.allowOutsideRoot;
});
const activeConflict = computed<boolean>(() => activeBuffer.value?.conflict === true);
const languageLabel = computed<string>(() => (vsState.activeTab ? languageLabelFor(vsState.activeTab) : "Plain Text"));
/** 当前激活文件上次的查看器位置（滚动 + 光标），建编辑器时还原。 */
const initialView = computed<{ scrollTop?: number; anchor?: number }>(() => fileViewOf(vsState.activeTab));

/* ---------- 编码 / 行尾的展示与切换 ---------- */

/** 可选编码（顺序即菜单顺序）；BOM 作为 UTF-8/UTF-16 的独立选项，不再单列一个「编码」。 */
const ENCODING_CHOICES: Array<{ encoding: TextEncoding; hasBom: boolean; label: string }> = [
  { encoding: "utf8", hasBom: false, label: "UTF-8" },
  { encoding: "utf8", hasBom: true, label: "UTF-8 with BOM" },
  { encoding: "utf16le", hasBom: true, label: "UTF-16 LE" },
  { encoding: "utf16be", hasBom: true, label: "UTF-16 BE" },
  { encoding: "gb18030", hasBom: false, label: "GB18030" },
  { encoding: "big5", hasBom: false, label: "Big5" },
  { encoding: "latin1", hasBom: false, label: "Latin-1" },
];

const ENCODING_LABELS: Record<TextEncoding, string> = {
  utf8: "UTF-8",
  utf16le: "UTF-16 LE",
  utf16be: "UTF-16 BE",
  gb18030: "GB18030",
  big5: "Big5",
  latin1: "Latin-1",
  binary: "Binary",
};

const eolLabel = computed<string>(() => (activeBuffer.value?.eol ?? "lf").toUpperCase());
const encodingLabel = computed<string>(() => {
  const b = activeBuffer.value;
  if (!b) return "UTF-8";
  const base = ENCODING_LABELS[b.encoding];
  const supportsBom = b.encoding === "utf8" || b.encoding === "utf16le" || b.encoding === "utf16be";
  return b.hasBom && supportsBom ? `${base} BOM` : base;
});

const encMenuOpen = ref(false);
const encMenuX = ref(0);
const encMenuY = ref(0);
/** 状态栏菜单锚定在被点的段上；ContextMenu 会自行把菜单收敛进视口。 */
function openEncMenu(e: MouseEvent): void {
  const r = (e.currentTarget as HTMLElement | null)?.getBoundingClientRect();
  encMenuX.value = r?.left ?? 0;
  encMenuY.value = r?.top ?? 0;
  encMenuOpen.value = true;
}
const encMenuItems = computed<MenuItem[]>(() => {
  const b = activeBuffer.value;
  return ENCODING_CHOICES.map((c) => ({
    label: c.label,
    checked: !!b && b.encoding === c.encoding && b.hasBom === c.hasBom,
    disabled: !b || b.binary,
    onClick: () => void reopenWithEncoding(c.encoding, c.hasBom),
  }));
});

const eolMenuOpen = ref(false);
const eolMenuX = ref(0);
const eolMenuY = ref(0);
function openEolMenu(e: MouseEvent): void {
  const r = (e.currentTarget as HTMLElement | null)?.getBoundingClientRect();
  eolMenuX.value = r?.left ?? 0;
  eolMenuY.value = r?.top ?? 0;
  eolMenuOpen.value = true;
}
const eolMenuItems = computed<MenuItem[]>(() => {
  const b = activeBuffer.value;
  const mk = (eol: EolStyle, label: string): MenuItem => ({
    label,
    checked: b?.eol === eol,
    disabled: !b || b.binary,
    onClick: () => setEol(eol),
  });
  return [mk("lf", "LF"), mk("crlf", "CRLF"), mk("cr", "CR")];
});

/**
 * 切换行尾样式：只改元数据并把缓冲区标记为 dirty（字节要到保存时才变）——
 * 与 VS Code 一致，改行尾本身就是一次「待保存的改动」。
 */
function setEol(eol: EolStyle): void {
  const path = vsState.activeTab;
  const b = path ? buffers[path] : undefined;
  if (!path || !b || b.eol === eol) return;
  b.eol = eol;
  b.dirty = true;
}

/** 以指定编码重新从磁盘读取（内容与元数据一起刷新）；有未保存改动时先确认。 */
async function reopenWithEncoding(encoding: TextEncoding, hasBom: boolean): Promise<void> {
  const path = vsState.activeTab;
  const b = path ? buffers[path] : undefined;
  if (!path || !b) return;
  if (b.encoding === encoding && b.hasBom === hasBom) return;
  if (b.dirty) {
    const ok = await confirmDialog({ title: t("vsUnsavedTitle"), message: t("vsReopenLoseMsg") });
    if (!ok) return;
  }
  await loadContent(path, { encoding, hasBom, force: true });
  toast("ok", t("vsEncodingSwitched", { enc: encodingLabel.value }));
}

/* ---------- 顶栏「文件」菜单 ---------- */

const fileBtnRef = ref<HTMLElement | null>(null);
const fileMenuOpen = ref(false);
const fileMenuX = ref(0);
const fileMenuY = ref(0);

function openFileMenu(): void {
  const r = fileBtnRef.value?.getBoundingClientRect();
  fileMenuX.value = r?.left ?? 0;
  fileMenuY.value = (r?.bottom ?? 0) + 2;
  // 菜单打开时其全屏 backdrop 会盖住整个面板，点击按钮区域实际是「点 backdrop 关闭」，
  // 所以这里只需负责打开。
  fileMenuOpen.value = true;
}

/** 当前文件是否可保存（非只读、非二进制、有缓冲区）。 */
const canSave = computed<boolean>(() => !!activeBuffer.value && !activeBuffer.value.binary && !readonlyActive.value);
/** 有未保存改动的标签。 */
const dirtyPaths = computed<string[]>(() => vsState.openTabs.filter((p) => buffers[p]?.dirty));

const fileMenuItems = computed<MenuItem[]>(() => [
  { label: t("vsOpenFolder"), icon: "folderOpen", onClick: selectProject },
  { separator: true },
  // 多窗口：在当前分栏的 tab 条上**平级**再开一个编辑器 / 把本编辑器弹出为浮窗。
  { label: t("vsNewWindow"), icon: "panellayout", onClick: newEditorWindow },
  { label: t("vsFloatWindow"), icon: "float", disabled: !store.tabId, onClick: floatThisWindow },
  // 新建终端：在当前编辑器项目目录下开一个独立的终端标签页（全局单例、多标签）。
  { label: t("vsNewTerminal"), icon: "terminal", onClick: newTerminalInEditor },
  { separator: true },
  {
    label: t("vsSave"),
    icon: "save",
    hint: "Ctrl+S",
    disabled: !canSave.value,
    onClick: () => void saveActive(),
  },
  {
    label: t("vsSaveAs"),
    icon: "save",
    hint: "Ctrl+Shift+S",
    disabled: !canSave.value,
    onClick: () => saveAs(),
  },
  {
    label: t("vsSaveAll"),
    disabled: dirtyPaths.value.length === 0,
    onClick: () => void saveAll(),
  },
]);

/* ---------- 顶栏「最近项目」菜单 ---------- */

const recentBtnRef = ref<HTMLElement | null>(null);
const recentMenuOpen = ref(false);
const recentMenuX = ref(0);
const recentMenuY = ref(0);

/** 路径尾部片段（菜单右侧提示：从左侧截断，保留辨识度最高的尾部）。 */
function shortenDir(p: string, max = 32): string {
  if (!p) return "";
  return p.length <= max ? p : `…${p.slice(p.length - max + 1)}`;
}

/**
 * 最近项目菜单：列出打开过的项目目录（当前项目标记并置灰），底部附「清除记录」
 * （子菜单：逐条移除 / 清空全部）与「打开文件夹…」。
 * 切换复用 `onPickFolder`——它已经带有未保存改动的确认与标签清理；清除操作立即落盘。
 */
const recentMenuItems = computed<MenuItem[]>(() => {
  const items: MenuItem[] = vsState.recentProjects.map((p) => ({
    label: basename(p) || p,
    hint: shortenDir(dirnameOf(p)),
    checked: p === vsState.projectDir,
    disabled: p === vsState.projectDir,
    onClick: () => void onPickFolder(p),
  }));
  items.push({ separator: true });
  items.push({
    label: t("vsRecentClear"),
    icon: "trash",
    disabled: vsState.recentProjects.length === 0,
    children: [
      ...vsState.recentProjects.map<MenuItem>((p) => ({
        label: basename(p) || p,
        hint: shortenDir(dirnameOf(p)),
        icon: "close",
        onClick: () => store.forgetProject(p),
      })),
      { separator: true },
      {
        label: t("vsRecentClearAll"),
        icon: "trash",
        disabled: vsState.recentProjects.length === 0,
        onClick: () => store.clearRecentProjects(),
      },
    ],
  });
  items.push({ label: t("vsOpenFolder"), icon: "folderOpen", onClick: selectProject });
  return items;
});

function openRecentMenu(): void {
  const r = recentBtnRef.value?.getBoundingClientRect();
  // 传按钮右缘作 x：ContextMenu 会自行向左收进视口，视觉上等价于右对齐。
  recentMenuX.value = r?.right ?? 0;
  recentMenuY.value = (r?.bottom ?? 0) + 2;
  recentMenuOpen.value = true;
}

/* ---------- 快速打开（按文件名搜索项目内文件，Ctrl+P） ---------- */

/** 搜索结果条数上限（够用即可，避免长列表拖慢渲染）。 */
const SEARCH_LIMIT = 50;
/** 索引复用窗口：超过此时长再重新拉取（新增/删除文件后不至于一直用旧索引）。 */
const INDEX_TTL_MS = 30_000;

const searchInputRef = ref<HTMLInputElement | null>(null);
const searchQ = ref("");
const searchOpen = ref(false);
const searchActive = ref(0);
/** 项目文件索引（相对路径，'/' 分隔）与其对应的项目目录、抓取时间。 */
const fileIndex = ref<string[]>([]);
const indexDir = ref("");
const indexAt = ref(0);
const indexLoading = ref(false);
const indexTruncated = ref(false);

interface SearchHitRow {
  /** 绝对路径。 */
  abs: string;
  /** 文件名。 */
  name: string;
  /** 所在目录（相对项目根，展示用）。 */
  dir: string;
}

/** 相对路径 → 绝对路径（分隔符跟随项目目录，避免混用 `/` 与 `\`）。 */
function absOf(rel: string, dir: string): string {
  const sep = dir.includes("\\") ? "\\" : "/";
  return `${dir.replace(/[\\/]+$/, "")}${sep}${rel.split("/").join(sep)}`;
}

/**
 * 轻量模糊匹配打分（越小越靠前，不命中返回 null）：
 *  0 = 文件名包含查询（最可能是想要的）→ 1 = 路径包含查询 → 2 = 字符按序散落命中。
 * 刻意不做子序列加权的复杂打分：排序稳定可预期，且全量遍历几千条路径也不卡。
 */
function fuzzyScore(rel: string, q: string): number | null {
  const slash = rel.lastIndexOf("/");
  if (rel.slice(slash + 1).includes(q)) return 0;
  if (rel.includes(q)) return 1;
  let i = 0;
  for (const ch of q) {
    i = rel.indexOf(ch, i);
    if (i < 0) return null;
    i += 1;
  }
  return 2;
}

const searchResults = computed<SearchHitRow[]>(() => {
  const dir = vsState.projectDir;
  if (!dir) return [];
  const all = fileIndex.value;
  const toRow = (rel: string): SearchHitRow => {
    const i = rel.lastIndexOf("/");
    return { abs: absOf(rel, dir), name: i < 0 ? rel : rel.slice(i + 1), dir: i < 0 ? "" : rel.slice(0, i) };
  };
  const q = searchQ.value.trim().toLowerCase();
  if (!q) return all.slice(0, SEARCH_LIMIT).map(toRow);

  const scored: Array<{ rel: string; score: number }> = [];
  for (const rel of all) {
    const score = fuzzyScore(rel.toLowerCase(), q);
    if (score !== null) scored.push({ rel, score });
  }
  scored.sort((a, b) => a.score - b.score || a.rel.length - b.rel.length || (a.rel < b.rel ? -1 : 1));
  return scored.slice(0, SEARCH_LIMIT).map((s) => toRow(s.rel));
});

/** 拉取（或复用）项目文件索引；项目目录变化或缓存过期时重新抓取。 */
async function ensureFileIndex(): Promise<void> {
  const dir = vsState.projectDir;
  if (!dir || indexLoading.value) return;
  if (indexDir.value === dir && Date.now() - indexAt.value < INDEX_TTL_MS) return;
  indexLoading.value = true;
  try {
    const r = await api.projectFiles(dir, VS_KEY);
    fileIndex.value = r.files;
    indexTruncated.value = r.truncated;
    indexDir.value = dir;
    indexAt.value = Date.now();
  } catch {
    // 抓取失败（host 未就绪 / 目录不可读）：留空索引，输入时不弹错。
    fileIndex.value = [];
    indexDir.value = "";
  } finally {
    indexLoading.value = false;
  }
}

function onSearchFocus(): void {
  searchOpen.value = true;
  searchActive.value = 0;
  void ensureFileIndex();
}

function onSearchInput(): void {
  searchOpen.value = true;
  searchActive.value = 0;
}

function onSearchBlur(): void {
  searchOpen.value = false;
}

function closeSearch(): void {
  searchOpen.value = false;
  searchInputRef.value?.blur();
}

/** 上下键移动高亮（循环）。 */
function moveSearch(delta: number): void {
  const n = searchResults.value.length;
  if (n === 0) return;
  searchOpen.value = true;
  searchActive.value = (searchActive.value + delta + n) % n;
}

/** 打开命中项（缺省用当前高亮项）。 */
function openSearchResult(index?: number): void {
  const hit = searchResults.value[index ?? searchActive.value];
  if (!hit) return;
  searchOpen.value = false;
  searchQ.value = "";
  searchInputRef.value?.blur();
  void openFile(hit.abs);
}

/* ---------- 编辑器右键菜单 ---------- */
const editorRef = ref<InstanceType<typeof CodeEditor> | null>(null);
const edMenuOpen = ref(false);
const edMenuX = ref(0);
const edMenuY = ref(0);

const edMenuItems = computed<MenuItem[]>(() => [
  {
    label: t("vsFormat"),
    icon: "code",
    disabled: !vsState.activeTab || readonlyActive.value || activeBuffer.value?.binary === true,
    onClick: formatActive,
  },
  { separator: true },
  {
    label: t("vsSave"),
    icon: "save",
    hint: "Ctrl+S",
    disabled: !canSave.value || saving.value,
    onClick: () => void saveActive(),
  },
  { label: t("vsSaveAs"), icon: "save", disabled: !canSave.value, onClick: () => saveAs() },
  { label: t("vsSaveAll"), disabled: dirtyPaths.value.length === 0, onClick: () => void saveAll() },
]);

function onEditorMenu(pos: { x: number; y: number }): void {
  edMenuX.value = pos.x;
  edMenuY.value = pos.y;
  edMenuOpen.value = true;
}

/**
 * 格式化当前文件：JSON 走结构化重排，其余交给 CodeMirror 的语言缩进服务
 * （见 CodeEditor.format）。只读 / 视图未就绪时提示失败原因。
 */
function formatActive(): void {
  if (!vsState.activeTab) return;
  const ok = editorRef.value?.format() ?? false;
  if (ok) toast("ok", t("vsFormatOk"));
  else toast("error", t("vsFormatFail", { msg: readonlyActive.value ? t("vsReadonly") : "" }));
}

/* ---------- 终端 ----------
 * 终端统一由 App 层单例 TerminalDialog 承载（见 App.vue）。编辑器内的「在终端打开」
 * 直接调用 openTerminal() 设置 wb.termOpen，即由那一个常驻终端响应——既不会让
 * 文件编辑器与文件工作台同时打开两份终端，也不会因切换面板而卸载重建（App 层组件始终存活）。 */

/** 选择 / 切换项目目录：打开应用内“选择文件夹”弹窗（替代原生目录选择器）。 */
function selectProject(): void {
  pickerVisible.value = true;
}

/* ---------- 多窗口（同分栏平级再开 / 浮窗） ---------- */

/**
 * 新建编辑器窗口：在**当前分栏的 tab 条上平级**再开一个编辑器 tab（**不做分栏**）。
 *
 * 宿主对页 tab 的唯一性判定是「每分栏每 kind 至多一个」（页地址 = `sidebar://<kind>`），
 * 因此「平级多开」的做法是由 client 侧给每个新 tab 分配一个尚未占用的 kind
 * （`vscode` / `vscode-2` / …）再 `openTab`；新 tab 落在当前活动分栏，即用户点按钮时所在的
 * 那一格，所以不会把右侧栏分成两格。池满（8 个）时会顶替编号最小的那一个。
 *
 * 新实例是**空白窗口**（经 `params.fresh` 下发）：既不恢复持久化状态，也不继承任何项目目录。
 */
function newEditorWindow(): void {
  // 先落盘当前实例：池满替换时被顶替的那一份可能正是自己，别把它的最新状态丢掉。
  persistVSCode();
  if (!openNewEditorTab({ fresh: true })) toast("info", t("vsNewWindowLimit"));
}

/** 把本编辑器弹出为独立浮窗（浮窗与停靠面板共用同一份实例状态）。 */
function floatThisWindow(): void {
  if (!store.tabId) return;
  floatTab(store.tabId);
}

/**
 * 新建终端：在当前编辑器的项目目录下开一个独立终端标签页。
 *
 * 终端是全局单例（多标签），`openNewTerminal` 会按「已开则追加标签、未开则打开并自建首屏标签」
 * 处理；请求的目录经 `wb.termRequestCwd` 落到新建标签上，因此新终端直接停在项目目录里。
 */
function newTerminalInEditor(): void {
  openNewTerminal(vsState.projectDir ?? "");
}

/**
 * 处理外部「在文件编辑器中打开某项目」的请求。
 *
 * 请求由桥接层从该 tab 的导航参数里取出后投递
 * （`openTab('vscode', { params: { projectDir } })` → `useTabInfo().tab.navigation.params`）。
 * 复用 `onPickFolder`：它已包含未保存改动的确认、host 根注册与标签清理。
 */
async function applyExternalProject(): Promise<void> {
  // 先等持久化状态就绪：请求可能在 init 尚未完成时到达（工作台右键「在文件编辑器中打开」
  // 新开窗口的典型时序）—— 若不等，init 稍后的「恢复/继承项目目录」会把这里刚设置的目录
  // 覆盖掉，表现为「打开的不是右键选中的文件夹」。
  await store.init();
  // 等待期间可能有更新的请求到达：以最新一条为准。
  const req = store.projectRequest.value;
  if (!req) return;
  // 先消费请求再切换：切换过程里可能弹确认框（用户取消也不该反复追问）。
  store.projectRequest.value = null;
  // 参数通道已送达 → 作废兜底投递，避免切面板重挂载时把用户后来换掉的项目又跳回来。
  clearPendingEditorProject();
  if (req.dir === vsState.projectDir) return;
  await onPickFolder(req.dir);
}

// 外部请求的监听放在 setup 顶层（自动随组件卸载失效）；挂载瞬间就存在的请求由 onMounted 补做。
watch(
  () => store.projectRequest.value?.n,
  () => void applyExternalProject(),
);

/** 弹窗确认：设置项目目录并注册为独立根；**选择新文件夹时关闭右侧所有已打开文件**。 */
async function onPickFolder(dir: string): Promise<void> {
  const changed = dir !== vsState.projectDir;
  // 换项目会清空右侧全部标签：有未保存改动必须先确认，否则静默丢数据。
  if (changed && dirtyPaths.value.length > 0) {
    const ok = await confirmDialog({
      title: t("vsUnsavedTitle"),
      message: t("vsSwitchLoseMsg", { n: String(dirtyPaths.value.length) }),
    });
    if (!ok) return;
  }
  vsState.projectDir = dir;
  // 记入「最近项目」，并让快速打开的文件索引失效（下次搜索按新项目重新抓取）。
  rememberProject(dir);
  indexDir.value = "";
  indexAt.value = 0;
  // 注册为独立根，使项目目录内 CRUD 受 host guardWsRoot 放行（与工作区 root 解耦）。
  try {
    await api.setRoot(dir, VS_KEY);
  } catch {
    /* 注册失败不影响浏览；写操作将在守卫处被拦截并提示 */
  }
  // 换了项目目录：右侧已打开的旧文件不再属于当前项目，全部关闭。
  if (changed) closeAllTabs();
  persistVSCode();
}

/** 关闭右侧所有已打开文件（清空标签 + 内容/错误缓存）。 */
function closeAllTabs(): void {
  for (const p of Object.keys(buffers)) delete buffers[p];
  for (const p of Object.keys(errors)) delete errors[p];
  for (const p of Object.keys(docRevs)) delete docRevs[p];
  vsState.openTabs = [];
  vsState.activeTab = null;
}

/** 打开一个文件：加入标签并加载内容；opts.line 传入时打开后跳到该行（左栏搜索结果跳转用）。 */
async function openFile(path: string, opts?: { line?: number }): Promise<void> {
  diffPane.value = null; // 打开文件时关闭提交文件详情
  if (!vsState.openTabs.includes(path)) vsState.openTabs.push(path);
  vsState.activeTab = path;
  // 已有缓冲区（含跨面板暂存恢复的未保存内容）不再覆盖。
  if (!buffers[path]) await loadContent(path);
  if (opts?.line) {
    // 等编辑器挂载完成再跳行（内容加载后 v-else 分支才渲染 CodeEditor）。
    await nextTick();
    editorRef.value?.revealLine(opts.line);
  }
  persistVSCode();
}

interface LoadOptions {
  /** 显式指定编码（状态栏切换）；缺省由 host 自动探测。 */
  encoding?: TextEncoding;
  hasBom?: boolean;
  /** true 时丢弃本地未保存改动（外部改动重载 / 换编码）。 */
  force?: boolean;
}

/**
 * 加载（或重载）文件内容与编码 / 行尾元数据。
 *
 * 已有未保存改动且未显式 force 时不覆盖：外部改动触发的自动重载虽然带 force，
 * 但只在缓冲区干净时才会发生（见 pollExternal）。
 */
async function loadContent(path: string, opts: LoadOptions = {}): Promise<void> {
  if (loadingPaths.has(path)) return;
  if (buffers[path]?.dirty && !opts.force) return;
  loadingPaths.add(path);
  delete errors[path];
  try {
    const res = await api.readFile(path, { encoding: opts.encoding, hasBom: opts.hasBom });
    buffers[path] = {
      content: res.content,
      dirty: false,
      encoding: res.encoding,
      hasBom: res.hasBom,
      eol: res.eol,
      mtime: res.mtime,
      binary: res.binary,
      conflict: false,
    };
    // 内容换了一茬：让编辑器整体重建（丢弃旧撤销栈与选区）。
    docRevs[path] = (docRevs[path] ?? 0) + 1;
  } catch (e) {
    // 超过 host 8MB 编辑上限（413）：给明确指引，而不是裸的英文报错。
    errors[path] = e instanceof api.ApiError && e.status === 413 ? t("vsTooLarge") : (e as Error).message;
  } finally {
    loadingPaths.delete(path);
  }
}

function selectTab(path: string): void {
  if (isDiffTab(path)) return; // 伪标签：详情已在展示，无需处理
  diffPane.value = null; // 切换标签页时关闭提交文件详情
  vsState.activeTab = path;
  if (!buffers[path] && !errors[path]) void loadContent(path);
  persistVSCode();
}

/* ── 提交文件详情（diff）：由左栏 Git 记录栏的文件详情按钮打开，以伪标签形式占据顶部标签栏 ── */
const diffPane = ref<{ title: string; lines: string[] } | null>(null);

function showDiffPane(p: { title: string; lines: string[] }): void {
  diffPane.value = p;
}

function onEditorChange(value: string): void {
  const b = vsState.activeTab ? buffers[vsState.activeTab] : undefined;
  if (!b) return;
  b.content = value;
  b.dirty = true;
}

function onCursor(line: number, col: number): void {
  cursor.line = line;
  cursor.col = col;
}

/** 记录编辑器滚动 / 光标位置（按路径暂存，节流落盘），供下次打开还原。 */
function onEditorView(v: { scrollTop: number; anchor: number }): void {
  if (vsState.activeTab) rememberFileView(vsState.activeTab, v);
}

/* ---------- 保存 ---------- */

/** 保存当前激活文件。 */
async function saveActive(): Promise<void> {
  if (!vsState.activeTab) return;
  await savePath(vsState.activeTab);
}

interface SaveOptions {
  /** true 时跳过外部改动冲突检测（用户在确认框里选择了覆盖）。 */
  force?: boolean;
  /** true 时不弹「已保存」提示（批量保存时避免刷屏）。 */
  quiet?: boolean;
}

/**
 * 保存指定路径：把文档内容连同原编码 / 原行尾 / 原 BOM 一起交给 host 还原字节，
 * 并带上读取时的 mtime 做外部改动冲突检测。
 *
 * @returns 是否成功写入（冲突被取消 / 出错时为 false）。
 */
async function savePath(path: string, opts: SaveOptions = {}): Promise<boolean> {
  const b = buffers[path];
  if (!path || !b || b.binary) return false;
  saving.value = true;
  try {
    const res = await api.saveFile(path, b.content, {
      key: VS_KEY,
      encoding: b.encoding,
      hasBom: b.hasBom,
      eol: b.eol,
      expectedMtime: b.mtime,
      force: opts.force,
    });
    b.dirty = false;
    b.conflict = false;
    // 刷新基线：否则刚写下的文件会被下一轮轮询判成「外部改动」。
    b.mtime = res.mtime;
    if (!opts.quiet) toast("ok", t("vsSaved"));
    return true;
  } catch (e) {
    if (e instanceof api.ApiError && e.code === "mtime-conflict") {
      // 冲突由用户决定：此处先复位保存态，避免确认框期间按钮一直转。
      saving.value = false;
      const ok = await confirmDialog({
        title: t("vsConflictTitle"),
        message: t("vsConflictMsg", { name: basename(path) }),
      });
      if (ok) return await savePath(path, { ...opts, force: true });
      return false;
    }
    toast("error", (e as Error).message);
    return false;
  } finally {
    saving.value = false;
  }
}

/** 全部保存：逐个落盘（冲突只在对应文件上弹确认，其余照常保存）。 */
async function saveAll(): Promise<void> {
  const pending = dirtyPaths.value.slice();
  if (pending.length === 0) {
    toast("info", t("vsNoDirty"));
    return;
  }
  let ok = 0;
  for (const p of pending) {
    if (await savePath(p, { quiet: true })) ok++;
  }
  if (ok === pending.length) toast("ok", t("vsAllSaved", { n: String(ok) }));
}

/**
 * 另存为：打开路径选择弹窗（可浏览任意文件夹 + 填文件名 / 手填绝对路径）。
 * 默认定位到**当前文件所在目录**，文件名预填当前文件名。
 */
function saveAs(): void {
  const from = vsState.activeTab;
  const b = from ? buffers[from] : undefined;
  if (!from || !b || b.binary) return;
  saveAsDir.value = dirnameOf(from) || vsState.projectDir;
  saveAsName.value = basename(from);
  saveAsVisible.value = true;
}

/**
 * 另存为落盘（弹窗确认后回调）。不做 mtime 冲突检测（目标是另一个文件），
 * 已存在时二次确认覆盖。
 *
 * 与 VS Code 一致：成功后**当前标签改绑到新路径**（原路径标签移除）。
 * 若只打开新文件而不摘掉原标签，原标签会残留一份「内容已写到别处、却仍标记未保存」
 * 的脏缓冲区，之后一次 Ctrl+S 就会把内容又写回原文件。
 */
async function onSaveAsConfirm(target: string): Promise<void> {
  const from = vsState.activeTab;
  const b = from ? buffers[from] : undefined;
  if (!from || !b || b.binary || target === from) return;
  // 目标是已打开且**有未保存改动**的标签：覆盖会连带丢掉那份改动，先让用户处理。
  if (vsState.openTabs.includes(target) && buffers[target]?.dirty) {
    toast("error", t("vsSaveAsBlockedDirty", { name: basename(target) }));
    return;
  }
  // 存在性探测：目标不存在（404）是另存为的常规路径，走 silent 探测 —— 不能因为探测命中
  // 「文件不存在」就弹「服务器错误」。探测本身失败时中止（提示已由探测方发出），
  // 避免在未做覆盖确认的情况下写入同名文件。
  let targetExists = false;
  try {
    targetExists = await api.exists(target);
  } catch {
    return;
  }
  if (targetExists) {
    const ok = await confirmDialog({
      title: t("vsSaveAsTitle"),
      message: t("vsOverwriteMsg", { path: target }),
    });
    if (!ok) return;
  }
  saving.value = true;
  try {
    await api.saveFile(target, b.content, {
      key: VS_KEY,
      encoding: b.encoding,
      hasBom: b.hasBom,
      eol: b.eol,
    });
    toast("ok", t("vsSavedAs", { path: basename(target) }));
    // 改绑标签：原路径与目标路径的缓冲区都清掉，再由 openFile 从磁盘重读
    // （内容就是刚写下的，mtime 基线自然正确，不会被下一轮轮询误判为外部改动）。
    delete buffers[from];
    delete errors[from];
    delete docRevs[from];
    delete buffers[target];
    delete errors[target];
    delete docRevs[target];
    vsState.openTabs = vsState.openTabs.filter((p) => p !== from && p !== target);
    await openFile(target);
  } catch (e) {
    toast("error", (e as Error).message);
  } finally {
    saving.value = false;
  }
}

/* ---------- 外部改动检测（批量 mtime 轮询） ---------- */

/**
 * 轮询所有已打开标签的落盘时间。
 *  - 缓冲区**干净** → 磁盘变了就是外部改过，直接静默重载（本地没有可丢的内容）；
 *  - 缓冲区**有未保存改动** → 只打冲突标记，等用户决定覆盖还是放弃，**绝不自动重载**。
 * 一次请求批量查询全部标签，页面不可见时跳过，避免后台空转。
 */
async function pollExternal(): Promise<void> {
  if (typeof document !== "undefined" && document.hidden) return;
  const paths = vsState.openTabs.slice();
  if (paths.length === 0) return;
  let items: Record<string, { mtimeMs: number; size: number } | null>;
  try {
    ({ items } = await api.mtimes(paths));
  } catch {
    // 轮询失败（host 未就绪 / 网络抖动）静默略过，下一轮再试。
    return;
  }
  for (const path of paths) {
    const b = buffers[path];
    if (!b || b.binary) continue;
    const cur = items[path];
    if (!cur) continue; // 文件已删除：不自动关标签，交由用户处理
    if (Math.abs(cur.mtimeMs - b.mtime) < 1) continue;
    if (b.dirty) {
      if (!b.conflict) b.conflict = true;
      continue;
    }
    await loadContent(path, { force: true });
    toast("info", t("vsReloadedExternal", { name: basename(path) }));
  }
}

/** 冲突处理：把磁盘版本读进来覆盖本地缓冲（等价于放弃本地改动）。 */
async function resolveConflict(): Promise<void> {
  const path = vsState.activeTab;
  const b = path ? buffers[path] : undefined;
  if (!path || !b) return;
  const ok = await confirmDialog({
    title: t("vsConflictTitle"),
    message: t("vsConflictMsgReload", { name: basename(path) }),
  });
  if (!ok) return;
  await loadContent(path, { force: true });
}

/** 用系统默认程序打开当前（非文本）文件。 */
function openActiveExternal(): void {
  if (vsState.activeTab) void api.openExternal(vsState.activeTab);
}

/* ---------- 关闭标签 ---------- */

/** 关闭标签（有未保存改动时确认）。 */
async function closeTab(path: string): Promise<void> {
  if (isDiffTab(path)) {
    diffPane.value = null; // 伪标签：直接关闭详情，回到此前激活的真实标签
    return;
  }
  const b = buffers[path];
  if (b?.dirty) {
    const ok = await confirmDialog({ title: t("vsUnsavedTitle"), message: t("vsUnsavedMsg") });
    if (!ok) return;
  }
  delete buffers[path];
  delete errors[path];
  delete docRevs[path];
  vsState.openTabs = vsState.openTabs.filter((p) => p !== path);
  if (vsState.activeTab === path) {
    vsState.activeTab = vsState.openTabs[vsState.openTabs.length - 1] ?? null;
  }
  persistVSCode();
}

/* ---------- 标签右键菜单动作（复用 closeTab 的未保存确认逻辑） ---------- */

/** 保存并关闭：先落盘（dirty 归零），再关闭，避免二次确认。 */
async function closeSaveTab(path: string): Promise<void> {
  const ok = await savePath(path, { quiet: true });
  if (!ok) return; // 保存失败 / 冲突被取消：保持标签打开，不丢内容
  await closeTab(path);
}

/**
 * 批量关闭：多个标签都有未保存改动时，只问一次「全部保存并关闭？」，
 * 而不是逐个弹确认；保存失败/冲突被取消的标签保留不动。
 * 只有 0/1 个脏标签时退化为原有的逐个 closeTab（单文件确认）。
 */
async function closeMany(paths: string[]): Promise<void> {
  const dirty = paths.filter((p) => buffers[p]?.dirty);
  if (dirty.length > 1) {
    const ok = await confirmDialog({
      title: t("vsUnsavedTitle"),
      message: t("vsCloseManyMsg", { n: String(dirty.length) }),
    });
    if (!ok) return;
    const failed = new Set<string>();
    for (const p of dirty) {
      if (!(await savePath(p, { quiet: true }))) failed.add(p);
    }
    for (const p of paths) {
      if (failed.has(p)) continue;
      delete buffers[p];
      delete errors[p];
      delete docRevs[p];
      vsState.openTabs = vsState.openTabs.filter((q) => q !== p);
    }
    if (vsState.activeTab && !vsState.openTabs.includes(vsState.activeTab)) {
      vsState.activeTab = vsState.openTabs[vsState.openTabs.length - 1] ?? null;
    }
    persistVSCode();
    return;
  }
  for (const p of paths) await closeTab(p);
}

/** 关闭除指定标签外的全部标签。 */
async function closeOthers(path: string): Promise<void> {
  if (isDiffTab(path)) return; // 伪标签：不参与真实标签的批量关闭
  await closeMany(vsState.openTabs.filter((p) => p !== path));
}

/** 关闭指定标签右侧的全部标签。 */
async function closeRight(path: string): Promise<void> {
  if (isDiffTab(path)) return; // 伪标签恒在最右，无「右侧」可关
  const idx = vsState.openTabs.indexOf(path);
  if (idx < 0) return;
  await closeMany(vsState.openTabs.slice(idx + 1));
}

/** 关闭全部标签（多个未保存时一次确认全部保存）。 */
async function closeAllOpen(): Promise<void> {
  await closeMany([...vsState.openTabs]);
}

/** 目录树删除文件：直接移除对应标签（不二次确认）。 */
function onFileRemoved(path: string): void {
  delete buffers[path];
  delete errors[path];
  delete docRevs[path];
  vsState.openTabs = vsState.openTabs.filter((p) => p !== path);
  if (vsState.activeTab === path) vsState.activeTab = vsState.openTabs[vsState.openTabs.length - 1] ?? null;
  persistVSCode();
}

/**
 * 目录树重命名文件：同步更新标签路径与缓冲区键。
 *
 * 只做**精确路径**匹配——重命名父目录时其下已打开的标签不会被重映射，
 * 以免把「新路径下的同名文件」误判为同一个文件而串内容。
 */
function onFileRenamed(from: string, to: string): void {
  const b = buffers[from];
  if (b) {
    buffers[to] = b;
    delete buffers[from];
  }
  if (docRevs[from] !== undefined) {
    docRevs[to] = docRevs[from];
    delete docRevs[from];
  }
  delete errors[from];
  if (errors[to]) delete errors[to];
  vsState.openTabs = vsState.openTabs.map((p) => (p === from ? to : p));
  if (vsState.activeTab === from) vsState.activeTab = to;
  persistVSCode();
}

/* ---------- 左栏拖拽分隔条 ---------- */
const dragging = ref(false);
const leftStyle = computed<Record<string, string>>(() => ({
  width: `calc(${Math.round(vsState.split * 1000) / 10}% - 3px)`,
}));
function onMove(e: MouseEvent): void {
  if (!dragging.value || !rootRef.value) return;
  const rect = rootRef.value.getBoundingClientRect();
  if (rect.width <= 0) return;
  const f = (e.clientX - rect.left) / rect.width;
  vsState.split = Math.min(0.85, Math.max(0.15, f));
}
function onUp(): void {
  if (!dragging.value) return;
  dragging.value = false;
  document.removeEventListener("mousemove", onMove);
  document.removeEventListener("mouseup", onUp);
  document.body.style.userSelect = "";
  document.body.style.cursor = "";
  persistVSCode();
}
function startDrag(): void {
  dragging.value = true;
  document.addEventListener("mousemove", onMove);
  document.addEventListener("mouseup", onUp);
  document.body.style.userSelect = "none";
  document.body.style.cursor = "col-resize";
}

/* ---------- 全局快捷键 ---------- */
/**
 * 焦点是否落在「应独占按键」的控件上（输入框 / 文本域 / 下拉）。
 *
 * 只用于 Ctrl+P：终端（xterm 的输入捕获就是 textarea）与各类输入框里 Ctrl+P 有其自身含义，
 * 不能被抢。刻意**不**检查 `contenteditable`——CodeMirror 编辑器正是 contenteditable，
 * 而编辑器里必须能用 Ctrl+P；也刻意不用这套判断拦 Ctrl+S（那会让编辑器里存不了盘）。
 */
function isTextEntryFocused(el: EventTarget | null): boolean {
  const tag = (el as HTMLElement | null)?.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";
}

function onKeydown(e: KeyboardEvent): void {
  if (!(e.ctrlKey || e.metaKey)) return;
  const key = e.key.toLowerCase();
  // Ctrl+P：快速打开（对齐 VS Code）。须拦截浏览器打印，并把焦点交给搜索框。
  if (key === "p") {
    if (isTextEntryFocused(e.target)) return;
    e.preventDefault();
    if (!vsState.projectDir) return;
    searchInputRef.value?.focus();
    void ensureFileIndex();
    return;
  }
  if (key !== "s") {
    // Ctrl+W：关闭当前标签（伪标签优先）。浏览器普通标签页可能拦截不了该组合键，
    // 但嵌入 shell / 部分浏览器内可用；Ctrl+PageUp/PageDown 是可靠的切标签方案。
    if (key === "w") {
      e.preventDefault();
      if (diffPane.value) diffPane.value = null;
      else if (vsState.activeTab) void closeTab(vsState.activeTab);
      return;
    }
    if (key === "pagedown" || key === "pageup") {
      e.preventDefault();
      cycleTab(key === "pagedown" ? 1 : -1);
      return;
    }
    return;
  }
  e.preventDefault();
  if (e.shiftKey) saveAs();
  else void saveActive();
}

/** Ctrl+PageUp/PageDown：在真实标签间循环切换（伪标签不参与，切换即关闭详情）。 */
function cycleTab(delta: number): void {
  const list = vsState.openTabs;
  if (list.length < 2) return;
  const idx = vsState.activeTab ? list.indexOf(vsState.activeTab) : -1;
  const next = ((idx < 0 ? 0 : idx + delta) + list.length) % list.length;
  selectTab(list[next]);
}

/** 关页面前的未保存拦截：让浏览器弹原生确认（切面板走暂存，见 stashOpenBuffers）。 */
function onBeforeUnload(e: BeforeUnloadEvent): void {
  if (dirtyPaths.value.length > 0) {
    e.preventDefault();
    // 部分浏览器只有写入 returnValue 才会弹确认。
    e.returnValue = "";
  }
}

/* ── 顶栏紧凑模式：宽度不够放下全部文本（文本会折行）时，把「文件编辑器 / 文件 / 最近项目」折叠成图标 ── */
const topbarRef = ref<HTMLElement | null>(null);
const topbarCompact = ref(false);
let topbarRO: ResizeObserver | null = null;

/**
 * 确定性评估：临时移除 compact（直接操作 DOM，绕过 Vue 异步更新）测展开态溢出量，
 * 放不下就折回 compact。每次评估都从展开态测起，状态由当前宽度唯一决定——
 * 不会出现「折叠后内容变窄 → 以为放得下 → 退出 → 又溢出」的震荡，
 * 因此拉宽后必然恢复文字（旧实现按 compact 态 scrollWidth 判断，震荡后卡死在图标态）。
 */
function evalTopbarCompact(): void {
  const bar = topbarRef.value;
  if (!bar) return;
  bar.classList.remove("compact");
  const overflow = bar.scrollWidth - bar.clientWidth;
  const compact = overflow > 1;
  bar.classList.toggle("compact", compact);
  topbarCompact.value = compact;
}

onMounted(async () => {
  // 顶栏宽度监听：内容放不下（会折行）时把文本标签折叠成图标。
  if (topbarRef.value) {
    topbarRO = new ResizeObserver(() => evalTopbarCompact());
    topbarRO.observe(topbarRef.value);
    evalTopbarCompact();
  }
  await initVSCodeState();
  // 恢复本会话内、上次面板卸载时暂存的未保存缓冲区（切面板不丢改动）。
  const stashed = takeStashedBuffers();
  for (const [path, buf] of Object.entries(stashed)) {
    if (vsState.openTabs.includes(path)) buffers[path] = buf;
  }
  if (vsState.projectDir) {
    try {
      await api.setRoot(vsState.projectDir, VS_KEY);
    } catch {
      /* ignore */
    }
  }
  // 暂存里已有内容的文件不重读磁盘，否则会把未保存的改动覆盖掉。
  if (vsState.activeTab && !buffers[vsState.activeTab]) void loadContent(vsState.activeTab);
  // 最后才放行目录树建树（见 vsReady 的说明）：状态与 host 根都就绪，避免首屏空树。
  vsReady.value = true;
  // 显式补一次建树：切走再切回 / 换项目后，目录树可能因为 root 与 vsReady 都没变化
  // 而不再触发 watch（新实例只跑一次 immediate），这里兜底确保内容一定加载。
  await nextTick();
  await treeRef.value?.rebuild();
  window.addEventListener("keydown", onKeydown);
  // 关页面前把节流中的位置变更落盘（persistVSCodeSoon 只保证 400ms 内合并）+ 未保存拦截。
  window.addEventListener("beforeunload", onBeforeUnload);
  window.addEventListener("beforeunload", persistVSCode);
  pollTimer = window.setInterval(() => void pollExternal(), POLL_MS);
  void pollExternal();
  // 后台预取一次项目文件索引：让首次 Ctrl+P / 聚焦搜索框立刻有结果。
  void ensureFileIndex();
  // 兜底：宿主未下发 tab 信息钩子（拿不到导航参数）时，取用工作台投递的待打开目录。
  const pendingDir = takePendingEditorProject();
  if (pendingDir) store.requestOpenProject(pendingDir);
  // 挂载前就投递过来的「打开某项目」请求在这里补做（挂载后的请求由 watch 处理）。
  if (store.projectRequest.value) await applyExternalProject();
});

onBeforeUnmount(() => {
  topbarRO?.disconnect();
  topbarRO = null;
  window.removeEventListener("keydown", onKeydown);
  window.removeEventListener("beforeunload", onBeforeUnload);
  window.removeEventListener("beforeunload", persistVSCode);
  document.removeEventListener("mousemove", onMove);
  document.removeEventListener("mouseup", onUp);
  if (pollTimer !== null) {
    window.clearInterval(pollTimer);
    pollTimer = null;
  }
  // 面板卸载（切 tab / 关面板）时：先暂存未保存内容，再兜底落盘当前位置。
  stashOpenBuffers({ ...buffers });
  persistVSCode();
});
</script>

<style scoped>
.vs-pane {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-height: 0;
  overflow: hidden;
  font-family: var(--dsh-font, "Segoe UI", system-ui, sans-serif);
  color: var(--dsh-fg, #c9d1d9);
  background: var(--dsh-bg, #0d1117);
}
.vs-topbar {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 36px;
  padding: 0 10px;
  background: var(--dsh-bg2, #161b22);
  border-bottom: 1px solid var(--dsh-border, #30363d);
  font-size: 12px;
}
.vs-brand {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-weight: 600;
  letter-spacing: 0.4px;
  color: var(--dsh-fg, #c9d1d9);
  white-space: nowrap;
}
/* 顶栏紧凑模式：正常态只显示文本；空间不足（.compact）时文本换成图标，避免折行 */
.vs-topbar .vs-topbar-ico { display: none; color: var(--dsh-fg, #c9d1d9); }
.vs-topbar.compact .vs-topbar-ico { display: inline-flex; }
.vs-topbar.compact .vs-topbar-txt { display: none; }
.vs-topbar.compact .vs-sep { display: none; }
.vs-topbar.compact .vs-search-input { width: 120px; }
.vs-sep {
  width: 1px;
  height: 16px;
  background: var(--dsh-border, #30363d);
}
.vs-proj {
  color: var(--dsh-fg-weak, #8b949e);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 40%;
}
.vs-spacer {
  flex: 1;
}
/* ---------- 快速打开（顶栏搜索框 + 结果下拉） ---------- */
.vs-search {
  position: relative;
  flex: 0 0 auto;
}
.vs-search-input {
  width: 190px;
  height: 24px;
  padding: 0 8px;
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 4px;
  background: var(--dsh-bg, #0d1117);
  color: var(--dsh-fg, #c9d1d9);
  font-size: 12px;
  outline: none;
  transition: width 0.12s ease;
}
.vs-search-input:focus {
  width: 280px;
  border-color: var(--dsh-accent, #2f81f7);
}
.vs-search-input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.vs-search-pop {
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  z-index: 400;
  width: 380px;
  max-height: 300px;
  overflow: auto;
  padding: 4px;
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 6px;
  background: var(--dsh-bg2, #161b22);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}
.vs-search-row {
  display: flex;
  align-items: baseline;
  gap: 8px;
  height: 24px;
  padding: 0 8px;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
}
.vs-search-row.active {
  background: var(--dsh-accent-soft, rgba(47, 129, 247, 0.18));
}
.vs-search-name {
  color: var(--dsh-fg, #c9d1d9);
  overflow: hidden;
  text-overflow: ellipsis;
}
/* 所在目录：右对齐 + rtl，使超长路径从左侧截断（保留最有辨识度的尾部） */
.vs-search-dir {
  flex: 1;
  min-width: 0;
  color: var(--dsh-fg-weak, #8b949e);
  font-size: 11px;
  text-align: right;
  overflow: hidden;
  text-overflow: ellipsis;
  direction: rtl;
}
.vs-search-note {
  padding: 6px 8px;
  color: var(--dsh-fg-weak, #8b949e);
  font-size: 11px;
}
.vs-btn {
  height: 24px;
  padding: 0 10px;
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 4px;
  background: var(--dsh-bg, #0d1117);
  color: var(--dsh-fg, #c9d1d9);
  cursor: pointer;
  font-size: 12px;
}
.vs-btn:hover:not(:disabled) {
  background: var(--dsh-hover, rgba(255, 255, 255, 0.08));
}
.vs-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
/* 「文件」菜单按钮：带下拉箭头，展开时高亮 */
.vs-btn-menu {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  white-space: nowrap;
}
.vs-btn-menu.open {
  background: var(--dsh-hover, rgba(255, 255, 255, 0.08));
  border-color: var(--dsh-accent, #238636);
}
.vs-caret {
  width: 0;
  height: 0;
  border-left: 3.5px solid transparent;
  border-right: 3.5px solid transparent;
  border-top: 4px solid currentColor;
  opacity: 0.75;
}
.vs-body {
  display: flex;
  align-items: stretch;
  flex: 1;
  min-height: 0;
}
.vs-left {
  flex: 0 0 auto;
  min-width: 0;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: var(--dsh-bg2, #161b22);
  border-right: 1px solid var(--dsh-border, #30363d);
}
/* 左栏顶部 tab：文件 / 搜索 */
.vs-left-tabs {
  flex: 0 0 auto;
  display: flex;
  gap: 2px;
  padding: 3px 6px;
  border-bottom: 1px solid var(--dsh-border, #30363d);
  user-select: none;
}
.vs-left-tab:disabled {
  opacity: 0.38;
  cursor: not-allowed;
}
.vs-left-tab:disabled:hover {
  background: transparent;
}
.vs-left-tab {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: var(--dsh-fg-weak, #8b949e);
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  cursor: pointer;
  white-space: nowrap;
}
.vs-left-tab:hover {
  background: var(--dsh-hover, rgba(255, 255, 255, 0.08));
  color: var(--dsh-fg, #c9d1d9);
}
.vs-left-tab.active {
  color: var(--dsh-fg, #c9d1d9);
  background: var(--dsh-hover, rgba(255, 255, 255, 0.1));
  font-weight: 600;
}
/* 搜索 tab 时目录树隐藏，搜索面板吃掉剩余高度（.vs-sp 自带 flex:1） */
/* 目录树吃掉剩余高度，Git 记录栏固定在左栏底部。 */
.vs-left :deep(.vs-tree) {
  flex: 1 1 auto;
  min-height: 0;
  height: auto;
}
.vs-split {
  flex: 0 0 6px;
  width: 6px;
  height: 100%;
  cursor: col-resize;
  position: relative;
  background: transparent;
}
.vs-split::after {
  content: "";
  position: absolute;
  left: 2px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--dsh-border, #30363d);
  transition: background 0.12s;
}
.vs-split:hover::after,
.vs-split.dragging::after {
  background: var(--dsh-accent, #238636);
}
.vs-right {
  flex: 1 1 0;
  min-width: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.vs-editor-wrap {
  flex: 1;
  min-height: 0;
  position: relative;
}
.vs-empty,
.vs-loading-big,
.vs-error {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: var(--dsh-fg-weak, #8b949e);
  font-size: 13px;
  padding: 20px;
  text-align: center;
}
.vs-error {
  color: #f85149;
}
.vs-status {
  display: flex;
  align-items: center;
  height: 22px;
  padding: 0 6px;
  background: var(--dsh-bg2, #161b22);
  border-top: 1px solid var(--dsh-border, #30363d);
  font-size: 12px;
  color: var(--dsh-fg-weak, #8b949e);
}
.vs-status-readonly {
  color: #d29922;
  padding: 0 4px;
}
/* 外部改动冲突徽标：可点击（选择以磁盘版本覆盖本地改动） */
.vs-status-conflict {
  height: 18px;
  padding: 0 7px;
  margin-left: 6px;
  border: 1px solid #d29922;
  border-radius: 9px;
  background: transparent;
  color: #d29922;
  font-size: 11px;
  cursor: pointer;
}
.vs-status-conflict:hover {
  background: rgba(210, 153, 34, 0.14);
}
.vs-status-spacer {
  flex: 1;
}
.vs-status-seg {
  margin-left: 10px;
  white-space: nowrap;
}
/* 状态栏上可点击的段（编码 / 行尾）：无边框按钮，悬停才显形 */
.vs-status-btn {
  height: 18px;
  padding: 0 4px;
  border: none;
  border-radius: 3px;
  background: transparent;
  color: inherit;
  font: inherit;
  cursor: pointer;
}
.vs-status-btn:hover:not(:disabled) {
  background: var(--dsh-hover, rgba(255, 255, 255, 0.1));
  color: var(--dsh-fg, #c9d1d9);
}
.vs-status-btn:disabled {
  cursor: default;
  opacity: 0.6;
}
/* ── 提交文件详情（diff）：覆盖编辑区的只读视图（标题在顶部伪标签上，无内部标题栏） ── */
.vs-diffpane {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  min-height: 0;
  background: var(--dsh-bg, #0d1117);
  z-index: 5;
}
/* 长行自动换行，不出横向滚动条（只作用于本视图，GitPanel 的 diff 仍保持不换行） */
.vs-diffpane :deep(.fw-diff-body) {
  overflow-x: hidden;
}
.vs-diffpane :deep(.fw-diff-line) {
  white-space: pre-wrap;
  word-break: break-all;
}
</style>
