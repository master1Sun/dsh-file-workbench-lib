<template>
  <div ref="rootRef" class="vs-pane" :data-theme="theme" :style="rootStyle">
    <!-- 顶栏：标题 + 项目目录 + 操作 -->
    <div class="vs-topbar">
      <span class="vs-brand">{{ t("vsBrand") }}</span>
      <span class="vs-sep"></span>
      <span class="vs-proj" :title="vsState.projectDir ?? ''">{{ vsState.projectDir || t("vsNoProject") }}</span>
      <span class="vs-spacer"></span>
      <button class="vs-btn" @click="selectProject">{{ t("vsOpenFolder") }}</button>
      <button class="vs-btn" :disabled="!vsState.activeTab || saving" @click="saveActive">{{ t("vsSave") }}</button>
    </div>

    <div class="vs-body">
      <!-- 左栏：项目目录树 -->
      <div class="vs-left" :style="leftStyle">
        <ProjectTree
          ref="treeRef"
          :root="vsState.projectDir"
          :active-path="vsState.activeTab"
          @open-file="openFile"
          @file-removed="onFileRemoved"
          @file-renamed="onFileRenamed"
        />
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
          :active="vsState.activeTab"
          @select="selectTab"
          @close="closeTab"
          @save="savePath"
          @close-save="closeSaveTab"
          @close-others="closeOthers"
          @close-right="closeRight"
          @close-all="closeAllOpen"
        />
        <div class="vs-editor-wrap">
          <div v-if="!vsState.activeTab" class="vs-empty">
            <div class="vs-empty-hint">{{ t("vsEmptyHint") }}</div>
            <button class="vs-btn" @click="selectProject">{{ t("vsOpenFolder") }}</button>
          </div>
          <div v-else-if="activeLoading" class="vs-loading-big">{{ t("vsLoading") }}</div>
          <div v-else-if="activeError" class="vs-error">{{ activeError }}</div>
          <CodeEditor
            v-else
            ref="editorRef"
            :key="vsState.activeTab"
            :path="vsState.activeTab"
            :initial-content="activeContent"
            :initial-view="initialView"
            :readonly="readonlyActive"
            :dark="theme === 'dark'"
            @change="onEditorChange"
            @cursor="onCursor"
            @view="onEditorView"
            @contextmenu="onEditorMenu"
          />
        </div>
        <!-- 状态栏 -->
        <div class="vs-status">
          <span v-if="readonlyActive" class="vs-status-readonly">{{ t("vsReadonly") }}</span>
          <span class="vs-status-spacer"></span>
          <span class="vs-status-seg">{{ languageLabel }}</span>
          <span class="vs-status-seg">Ln {{ cursor.line }}, Col {{ cursor.col }}</span>
          <span class="vs-status-seg">UTF-8</span>
        </div>
      </div>
    </div>

    <!-- 终端统一由 App 层单例 TerminalDialog 承载（常驻、切换面板不卸载、不重复打开）。
         编辑器内「在终端打开」直接调用 openTerminal() 设置 wb.termOpen，由同一终端响应。 -->

    <!-- 编辑器右键菜单（格式化内容等） -->
    <ContextMenu v-if="edMenuOpen" :items="edMenuItems" :x="edMenuX" :y="edMenuY" @close="edMenuOpen = false" />

    <!-- 全局确认 / 输入弹窗（project tree 的 confirmDialog 渲染所需） -->
    <confirm-dialog />
    <!-- 选择文件夹弹窗（替代原生目录选择器） -->
    <folder-picker-dialog
      v-model="pickerVisible"
      :initial-dir="vsState.projectDir"
      @confirm="onPickFolder"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, reactive, ref } from "vue";
import ProjectTree from "./ProjectTree.vue";
import TabBar, { type TabInfo } from "./TabBar.vue";
import CodeEditor from "./CodeEditor.vue";
import FolderPickerDialog from "./FolderPickerDialog.vue";
import ConfirmDialog from "../../common/ConfirmDialog.vue";
import ContextMenu from "../../common/ContextMenu.vue";
import type { MenuItem } from "../../../../shared/types";
import { vsState, vsReady, initVSCodeState, persistVSCode, fileViewOf, rememberFileView } from "../../../stores/vscode";
import * as api from "../../../composables/core/useApi";
import { confirmDialog } from "../../../composables/core/dialog";
import { toast } from "../../../stores/workbench";
import { t } from "../../../composables/core/i18n";
import { useTheme } from "../../../composables/core/theme";
import { prefs } from "../../../composables/core/settings";
import { languageLabelFor } from "./langResolver";

/** VS Code 面板使用的独立根 key（与工作区 default 互不干扰）。 */
const VS_KEY = "vscode";

const rootRef = ref<HTMLElement | null>(null);
const theme = useTheme(rootRef);

const rootStyle = computed<Record<string, string | undefined>>(() => ({
  fontSize: `${prefs.fontSize ?? 13}px`,
  "--vs-fs-scale": String((prefs.fontSize ?? 13) / 13),
}));

/** 各打开文件的内容与 dirty 标记（不持久化，内容以磁盘为准）。 */
const contents = reactive<Record<string, { content: string; dirty: boolean }>>({});
/** 正在加载内容的路径集合。 */
const loadingPaths = reactive(new Set<string>());
/** 打开失败（读取错误）的路径 → 错误信息。 */
const errors = reactive<Record<string, string>>({});
/** 保存中标记。 */
const saving = ref(false);
/** 选择文件夹弹窗可见性。 */
const pickerVisible = ref(false);
/** 目录树实例（挂载后显式重建一次，兜住「切回面板内容为空」）。 */
const treeRef = ref<InstanceType<typeof ProjectTree> | null>(null);
/** 光标位置（状态栏）。 */
const cursor = reactive({ line: 1, col: 1 });

/** 计算某路径是否落在 projectDir 内（用于判定编辑器只读）。 */
function isWithin(root: string, target: string): boolean {
  if (!root) return false;
  const r = root.replace(/[\\/]+$/, "").toLowerCase();
  const p = target.replace(/[\\/]+$/, "").toLowerCase();
  return p === r || p.startsWith(`${r}\\`) || p.startsWith(`${r}/`);
}

const tabs = computed<TabInfo[]>(() =>
  vsState.openTabs.map((path) => ({ path, dirty: contents[path]?.dirty ?? false })),
);

const activeContent = computed<string>(() => (vsState.activeTab ? (contents[vsState.activeTab]?.content ?? "") : ""));
const activeLoading = computed<boolean>(() => (vsState.activeTab ? loadingPaths.has(vsState.activeTab) : false));
const activeError = computed<string | undefined>(() => (vsState.activeTab ? errors[vsState.activeTab] : undefined));
const readonlyActive = computed<boolean>(
  () => !vsState.activeTab || !vsState.projectDir || !isWithin(vsState.projectDir, vsState.activeTab),
);
const languageLabel = computed<string>(() => (vsState.activeTab ? languageLabelFor(vsState.activeTab) : "Plain Text"));
/** 当前激活文件上次的查看器位置（滚动 + 光标），建编辑器时还原。 */
const initialView = computed<{ scrollTop?: number; anchor?: number }>(() => fileViewOf(vsState.activeTab));

/* ---------- 编辑器右键菜单 ---------- */
const editorRef = ref<InstanceType<typeof CodeEditor> | null>(null);
const edMenuOpen = ref(false);
const edMenuX = ref(0);
const edMenuY = ref(0);

const edMenuItems = computed<MenuItem[]>(() => [
  {
    label: t("vsFormat"),
    icon: "code",
    disabled: !vsState.activeTab || readonlyActive.value,
    onClick: formatActive,
  },
  { separator: true },
  {
    label: t("vsSave"),
    icon: "save",
    disabled: !vsState.activeTab || saving.value,
    onClick: () => void saveActive(),
  },
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

/** 弹窗确认：设置项目目录并注册为独立根；**选择新文件夹时关闭右侧所有已打开文件**。 */
async function onPickFolder(dir: string): Promise<void> {
  const changed = dir !== vsState.projectDir;
  vsState.projectDir = dir;
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
  for (const p of Object.keys(contents)) delete contents[p];
  for (const p of Object.keys(errors)) delete errors[p];
  vsState.openTabs = [];
  vsState.activeTab = null;
}

/** 打开一个文件：加入标签并加载内容。 */
async function openFile(path: string): Promise<void> {
  if (!vsState.openTabs.includes(path)) vsState.openTabs.push(path);
  vsState.activeTab = path;
  await loadContent(path);
  persistVSCode();
}

/** 加载（或重载）文件内容。 */
async function loadContent(path: string): Promise<void> {
  if (loadingPaths.has(path)) return;
  loadingPaths.add(path);
  delete errors[path];
  try {
    const { content } = await api.readFile(path);
    contents[path] = { content, dirty: false };
  } catch (e) {
    errors[path] = (e as Error).message;
  } finally {
    loadingPaths.delete(path);
  }
}

function selectTab(path: string): void {
  vsState.activeTab = path;
  if (!contents[path] && !errors[path]) void loadContent(path);
  persistVSCode();
}

function onEditorChange(value: string): void {
  if (!vsState.activeTab) return;
  const c = contents[vsState.activeTab];
  if (c) {
    c.content = value;
    c.dirty = true;
  }
}

function onCursor(line: number, col: number): void {
  cursor.line = line;
  cursor.col = col;
}

/** 记录编辑器滚动 / 光标位置（按路径暂存，节流落盘），供下次打开还原。 */
function onEditorView(v: { scrollTop: number; anchor: number }): void {
  if (vsState.activeTab) rememberFileView(vsState.activeTab, v);
}

/** 保存当前激活文件。 */
async function saveActive(): Promise<void> {
  if (!vsState.activeTab) return;
  await savePath(vsState.activeTab);
}

/** 保存指定路径（若只读/越界，host 守卫会拦截并提示）。 */
async function savePath(path: string): Promise<void> {
  const c = contents[path];
  if (!c) return;
  saving.value = true;
  try {
    await api.saveFile(path, c.content, VS_KEY);
    c.dirty = false;
    toast("ok", t("vsSaved"));
  } catch (e) {
    toast("error", (e as Error).message);
  } finally {
    saving.value = false;
  }
}

/** 关闭标签（有未保存改动时确认）。 */
async function closeTab(path: string): Promise<void> {
  const c = contents[path];
  if (c?.dirty) {
    const ok = await confirmDialog({ title: t("vsUnsavedTitle"), message: t("vsUnsavedMsg") });
    if (!ok) return;
  }
  delete contents[path];
  delete errors[path];
  vsState.openTabs = vsState.openTabs.filter((p) => p !== path);
  if (vsState.activeTab === path) {
    vsState.activeTab = vsState.openTabs[vsState.openTabs.length - 1] ?? null;
  }
  persistVSCode();
}

/* ---------- 标签右键菜单动作（复用 closeTab 的未保存确认逻辑） ---------- */

/** 保存并关闭：先落盘（dirty 归零），再关闭，避免二次确认。 */
async function closeSaveTab(path: string): Promise<void> {
  await savePath(path);
  await closeTab(path);
}

/** 关闭除指定标签外的全部标签。 */
async function closeOthers(path: string): Promise<void> {
  for (const p of [...vsState.openTabs]) {
    if (p !== path) await closeTab(p);
  }
}

/** 关闭指定标签右侧的全部标签。 */
async function closeRight(path: string): Promise<void> {
  const idx = vsState.openTabs.indexOf(path);
  if (idx < 0) return;
  for (const p of vsState.openTabs.slice(idx + 1)) await closeTab(p);
}

/** 关闭全部标签（有未保存改动时逐个确认）。 */
async function closeAllOpen(): Promise<void> {
  for (const p of [...vsState.openTabs]) await closeTab(p);
}

/** 目录树删除文件：直接移除对应标签（不二次确认）。 */
function onFileRemoved(path: string): void {
  delete contents[path];
  delete errors[path];
  vsState.openTabs = vsState.openTabs.filter((p) => p !== path);
  if (vsState.activeTab === path) vsState.activeTab = vsState.openTabs[vsState.openTabs.length - 1] ?? null;
  persistVSCode();
}

/** 目录树重命名文件：同步更新标签路径与内容键。 */
function onFileRenamed(from: string, to: string): void {
  const c = contents[from];
  if (c) {
    contents[to] = c;
    delete contents[from];
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

/* ---------- 全局快捷键：Ctrl/Cmd + S 保存 ---------- */
function onKeydown(e: KeyboardEvent): void {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
    e.preventDefault();
    void saveActive();
  }
}

onMounted(async () => {
  await initVSCodeState();
  if (vsState.projectDir) {
    try {
      await api.setRoot(vsState.projectDir, VS_KEY);
    } catch {
      /* ignore */
    }
  }
  if (vsState.activeTab) void loadContent(vsState.activeTab);
  // 最后才放行目录树建树（见 vsReady 的说明）：状态与 host 根都就绪，避免首屏空树。
  vsReady.value = true;
  // 显式补一次建树：切走再切回 / 换项目后，目录树可能因为 root 与 vsReady 都没变化
  // 而不再触发 watch（新实例只跑一次 immediate），这里兜底确保内容一定加载。
  await nextTick();
  await treeRef.value?.rebuild();
  window.addEventListener("keydown", onKeydown);
  // 关页面前把节流中的位置变更落盘（persistVSCodeSoon 只保证 400ms 内合并）。
  window.addEventListener("beforeunload", persistVSCode);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKeydown);
  window.removeEventListener("beforeunload", persistVSCode);
  document.removeEventListener("mousemove", onMove);
  document.removeEventListener("mouseup", onUp);
  // 面板卸载（切 tab / 关面板）时兜底落盘当前位置。
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
  font-weight: 600;
  letter-spacing: 0.4px;
  color: var(--dsh-fg, #c9d1d9);
}
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
  background: var(--dsh-bg2, #161b22);
  border-right: 1px solid var(--dsh-border, #30363d);
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
  padding: 0 10px;
  background: var(--dsh-bg2, #161b22);
  border-top: 1px solid var(--dsh-border, #30363d);
  font-size: 12px;
  color: var(--dsh-fg-weak, #8b949e);
}
.vs-status-readonly {
  color: #d29922;
}
.vs-status-spacer {
  flex: 1;
}
.vs-status-seg {
  margin-left: 14px;
  white-space: nowrap;
}
</style>
