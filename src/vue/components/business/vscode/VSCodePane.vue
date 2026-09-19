<template>
  <div ref="rootRef" class="vs-pane" :data-theme="theme" :style="rootStyle">
    <!-- 顶栏：标题 + 文件菜单 + 最近项目 + 当前项目路径。空间不足时文本标签折叠成图标。 -->
    <div ref="topbarRef" class="vs-topbar" :class="{ compact: topbarCompact }">
      <span class="vs-brand" :title="t('vsBrand')">
        <icon class="vs-topbar-ico" name="code" :size="14" />
        <span class="vs-topbar-txt">{{ t("vsBrand") }}</span>
      </span>
      <span class="vs-sep"></span>
      <!-- 「文件」菜单：打开文件夹 / 最近项目（子菜单）/ 克隆检出 / 保存（对齐 VS Code 的菜单组织方式）。
           顶栏不再放「项目路径」「最近项目」两个按钮 —— 路径移到左栏头部、最近项目并入本菜单。 -->
      <button ref="fileBtnRef" class="vs-btn vs-btn-menu" :class="{ open: fileMenuOpen }" :title="t('vsMenuFile')" @click="openFileMenu">
        <icon class="vs-topbar-ico" name="folder" :size="13" />
        <span class="vs-topbar-txt">{{ t("vsMenuFile") }}</span>
        <span class="vs-caret"></span>
      </button>
      <!-- 最近项目快捷下拉：按钮上直接显示当前项目名（过长省略，完整路径在 tooltip），
           展开列出最近项目（当前项打勾置灰、右侧 × 可单条移除）＋ 打开文件夹 / 清空全部。
           与「文件」菜单同源，只是把最高频的「切项目」提到顶栏一键可达。 -->
      <span class="vs-sep"></span>
      <button
        ref="recentBtnRef"
        class="vs-btn vs-btn-menu vs-recent-btn"
        :class="{ open: recMenuOpen }"
        :title="recentBtnTitle"
        @click="openRecentMenu"
      >
        <icon class="vs-topbar-ico" name="clock" :size="13" />
        <span class="vs-topbar-txt vs-recent-name">{{ recentShortLabel }}</span>
        <span class="vs-caret"></span>
      </button>
      <span class="vs-sep"></span>
      <span class="vs-project-path" :title="vsState.projectDir ?? t('vsNoProject')">{{ projectLabel }}</span>
      <!-- <button
        v-if="!rightFolded"
        class="vs-btn vs-editor-fold-btn"
        :title="t('vsFoldEditor')"
        :aria-label="t('vsFoldEditor')"
        @click="rightFolded = true"
      >
        <icon name="chevronsRight" :size="13" />
      </button> -->
      <span class="vs-spacer"></span>
      <!-- 快速打开：假输入框（按钮），点击 / Ctrl+P 弹出居中搜索浮层（对齐 VS Code 的 Quick Open） -->
      <button
        class="vs-quickopen-trigger"
        :title="t('vsQuickOpenPlaceholder')"
        :disabled="!vsState.projectDir"
        @click="openQuickOpen"
      >
        <icon name="search" :size="13" />
        <span class="vs-quickopen-ph">{{ indexLoading ? t("vsSearchIndexing") : t("vsQuickOpenPlaceholder") }}</span>
        <span class="vs-quickopen-kbd">Ctrl+P</span>
      </button>
    </div>

    <!-- 有已启用但因未打开项目而隐藏的扩展时，给一条醒目引导（纯提示，点击可开项目见下）。 -->
    <button v-if="hiddenExtCount > 0" class="vs-exthint" type="button" :title="t('vsOpenFolder')" @click="selectProject">
      <icon name="puzzle" :size="13" />
      <span>{{ t("vsExtNeedProject", { n: hiddenExtCount }) }}</span>
    </button>

    <div class="vs-body" :class="{ 'right-folded': rightFolded, 'side-right': vsState.sidebarSide === 'right' }">
      <!-- 左栏 = 40px 竖向图标条（Activity Bar）+ 内容区。图标条可右键：隐藏/显示视图、
           图标置顶/置底、侧栏整体移到左/右侧（仿 VS Code）；位置与隐藏项持久化。 -->
      <div class="vs-left" :style="leftStyle">
        <div
          class="vs-activity"
          :class="{ btm: vsState.activityBar.position === 'bottom' }"
          @contextmenu.prevent="openActBarMenu"
        >
          <button
            v-for="v in actBarItems"
            :key="v.id"
            class="vs-act-btn"
            :class="{ active: leftTab === v.id }"
            :disabled="v.disabled"
            :title="v.title"
            @click="selectLeftTab(v.id)"
            @contextmenu.prevent.stop="openActViewMenu(v, $event)"
          >
            <icon v-if="hasIcon(v.icon ?? '')" :name="v.icon ?? ''" :size="17" />
            <span v-else class="vs-act-letter">{{ activityLetter(v.title) }}</span>
          </button>
        </div>
        <!-- 内容区：直接显示当前视图（树 / 搜索 / Git 记录） -->
        <div class="vs-left-main">
          <ProjectTree
            v-show="leftTab === 'files'"
            ref="treeRef"
            :root="vsState.projectDir"
            :active-path="vsState.activeTab"
            @open-file="openFile"
            @file-removed="onFileRemoved"
            @file-renamed="onFileRenamed"
            @project-missing="handleProjectMissing"
            @remove-project="removeProject"
          />
          <!-- 全局内容搜索：按文件分组展示命中行，点击打开文件并跳到对应行 -->
          <VSSearchPanel v-if="leftTab === 'search'" :project-dir="vsState.projectDir || ''" @open="onSearchOpen" />
          <!-- Git 提交记录视图（原左栏底部横条，现作为独立视图占满内容区；非 git 仓库时组件自隐藏） -->
          <vs-git-bar v-show="leftTab === 'git'" class="vs-git-view" @open-diff="showDiffPane" />
          <!-- 非 Git/SVN 仓库（分支探测无结果）时给空态提示，避免 Git 视图一片空白 -->
          <div v-if="leftTab === 'git' && !statusBranch" class="fw-empty vs-git-empty">{{ t("vsGitNoRepo") }}</div>
          <!-- 外部插件扩展视图：动态挂载（mount(el, ctx)，框架无关） -->
          <div v-if="activeExtView" ref="extHostRef" class="vs-ext-view"></div>
        </div>
      </div>
      <!-- 右栏被折叠时：分隔条与右栏隐藏，左栏右缘出现竖排把手，点击展开编辑区 -->
      <!-- <button v-if="rightFolded" class="vs-unfold-handle" :title="t('vsUnfoldEditor')" @click="rightFolded = false">
        <icon name="chevronsLeft" :size="12" />
      </button> -->
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
            <icon class="vs-empty-ico" name="code" :size="44" />
            <div class="vs-empty-title">{{ t("vsEmptyTitle") }}</div>
            <div class="vs-empty-hint">{{ t("vsEmptyHint") }}</div>
            <div class="vs-empty-actions">
              <button class="vs-btn" @click="selectProject">{{ t("vsOpenFolder") }}</button>
              <button class="vs-btn" @click="openClone('git')">{{ t("menuCloneGit") }}</button>
            </div>
          </div>
          <div v-else-if="activeLoading" class="vs-loading-big">
            <span class="vs-loading-spin" aria-hidden="true"></span>
            <span>{{ t("vsLoading") }}</span>
          </div>
          <div v-else-if="activeError" class="vs-error">{{ activeError }}</div>
          <!-- 非文本文件：不进编辑器，避免把二进制当文本渲染 / 保存 -->
          <div v-else-if="activeBuffer?.binary" class="vs-empty">
            <div class="vs-empty-hint">{{ t("vsBinaryHint") }}</div>
            <button class="vs-btn" @click="openActiveExternal">{{ t("vsOpenExternal") }}</button>
          </div>
          <CodeEditor
            v-else
            ref="editorRef"
            :path="vsState.activeTab"
            :slot="store.slot"
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
        <!-- 状态栏：左组（分支 / 只读 / 冲突）+ 右组（行列 / 编码 / 行尾 / 语言），对齐 VS Code -->
        <div class="vs-status">
          <button
            v-if="statusBranch"
            class="vs-status-seg vs-status-btn"
            :title="vsState.projectDir ?? ''"
            @click="selectLeftTab('git')"
          >
            <icon name="git" :size="11" />
            {{ statusBranch }}
          </button>
          <span v-if="readonlyActive" class="vs-status-readonly">{{ t("vsReadonly") }}</span>
          <!-- 外部改动冲突：本地有未保存改动且磁盘已被改写；点击可选择以磁盘版本覆盖 -->
          <button v-if="activeConflict" class="vs-status-conflict" @click="resolveConflict">
            {{ t("vsConflictBadge") }}
          </button>
          <!-- 插件注册项统一收进底部「扩展」按钮：点开弹出菜单逐条展示（statusbar.register / registerMenu）。
               无任何注册项时不显示该入口。 -->
          <button
            v-if="hasExtEntries"
            ref="extMenuBtnRef"
            class="vs-status-seg vs-status-btn vs-status-ext"
            :class="{ open: extMenuOpen }"
            :title="t('vsMenuExtensions')"
            @click="openExtMenu"
          >
            <icon name="grid" :size="11" />
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
    <!-- 底部「扩展」菜单：插件注册条目列表，从状态栏向上弹出（statusbar.register / registerMenu） -->
    <ContextMenu v-if="extMenuOpen" :items="extMenuItems" :x="extMenuX" :y="extMenuY" :anchor-x="extMenuAnchorX" placement="top" fit-width @close="extMenuOpen = false" />
    <!-- 顶栏「最近项目」下拉（与文件菜单同一组件，各自独立状态） -->
    <ContextMenu v-if="recMenuOpen" :items="recMenuItems" :x="recMenuX" :y="recMenuY" @close="recMenuOpen = false" />
    <!-- 快速打开浮层：居中（上 12%），backdrop 点击 / Esc 关闭，方向键 + 回车选择（对齐 VS Code Quick Open） -->
    <div v-if="searchOpen" class="vs-quickopen-backdrop" @mousedown.self="closeSearch">
      <div class="vs-quickopen" @mousedown.stop>
        <input
          ref="searchInputRef"
          v-model="searchQ"
          class="vs-quickopen-input"
          :placeholder="indexLoading ? t('vsSearchIndexing') : t('vsQuickOpenPlaceholder')"
          @input="onSearchInput"
          @keydown.down.prevent="moveSearch(1)"
          @keydown.up.prevent="moveSearch(-1)"
          @keydown.enter.prevent="openSearchResult()"
          @keydown.esc.prevent="closeSearch"
        />
        <div class="vs-quickopen-list">
          <template v-if="searchResults.length > 0">
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
          </template>
          <div v-else-if="searchQ.trim() && !indexLoading" class="vs-search-note">{{ t("vsSearchNoResult") }}</div>
        </div>
      </div>
    </div>
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
    <!-- Activity Bar 右键菜单：单个视图（隐藏…）或空白处（显示清单 + 置顶/置底 + 侧栏左右） -->
    <ContextMenu v-if="actMenuOpen" :items="actMenuItems" :x="actMenuX" :y="actMenuY" @close="actMenuOpen = false" />

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

<script lang="ts">
/**
 * ⛔ **本块是模块作用域**：每次挂载只执行一次，跨「卸载 → 重建」存活。
 *
 * 为什么必须写在这里：`<script setup>` 的顶层代码其实被编译进 `setup()`，**每次挂载都会重跑**
 * （已用 `vue/compiler-sfc` 实测确认）。凡是「只在页面加载后第一次挂载时做一次」的守卫，
 * 放进 `<script setup>` 就等于失效 —— 每次切面板都会重跑一遍，正是「切换请求好几遍接口」的成因之一。
 */

/**
 * 已自愈过的编辑器实例槽位：自愈只需在**页面加载后首次挂载**时跑一次。
 *
 * 自愈会给项目根与每个已打开标签各发一次 `/detail` 探测（`healRestoredState`）；面板切走再切回
 * 会重新挂载，守卫若随挂载重置，每次切换都要多打 1+N 个探测请求（远端项目尤其明显）。
 */
const healedSlots = new Set<string>();

/**
 * 已预取过文件索引的「槽 + 项目根」集合。
 *
 * 预取是一次**全量递归扫描**——全项目最贵的一次读。它只为「首次 Ctrl+P 立刻有结果」，
 * 因此同一个项目预取一次就够；放在组件里会被「切面板卸载重建」反复触发。
 * （`api.projectFiles` 本身也有 30s 结果缓存兜底，这里是第二道闸。）
 */
const indexPrefetched = new Set<string>();
</script>

<script setup lang="ts">
import { computed, inject, nextTick, onBeforeUnmount, onMounted, reactive, ref, watch, watchEffect } from "vue";
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
import { useContextMenu } from "../../../composables/ui/useContextMenu";
import type { EolStyle, MenuItem, TextEncoding } from "../../../../shared/types";
import {
  VS_STORE_KEY,
  clearEditorState,
  clearEditorStates,
  defaultVSCodeStore,
  getEditorStateCache,
  getLiveEditorView,
  onEditorDocChange,
  onEditorSelectionChange,
  type OpenBuffer,
  type VSCodeStore,
} from "../../../stores/vscode";
import { listUserPlugins, contributionsOfPluginId, contributionsOf, allContributions, type ContributionSet } from "../../../stores/userPlugins";
import * as api from "../../../composables/core/useApi";
import { clearPendingEditorProject, floatTab, openNewEditorTab, takePendingEditorFile, takePendingEditorProject } from "../../../composables/core/sidebarRight";
import { confirmDialog, choiceDialog } from "../../../composables/core/dialog";
import { toast, openNewTerminal } from "../../../stores/workbench";
import { t } from "../../../composables/core/i18n";
import { openCloneDialog } from "../../../composables/core/cloneDialog";
import { clearWatchPaths, onMtimeChange, setWatchPaths } from "../../../composables/core/push";
import { useTheme } from "../../../composables/core/theme";
import { prefs, savePrefs } from "../../../composables/core/settings";
import { diffLines } from "../../../composables/domain/lineDiff";
import { hasIcon } from "../../../composables/ui/icons";
import { activityText, activityLetter, listActivityViews, listStatusBarItems, listExtensionMenuItems, executeCommand, isCommandRunning, ensureInjectedViewScrollable, viewIconForCommand, ACTIVITY_API_VERSION, type ActivityContext, type EditorAccess, type StatusBarItem, type StatusCommandContext } from "../../../stores/activityBar";
import { tasks } from "../../../composables/session/tasks";
import { registerPluginManagerView } from "./pluginManagerView";
import { languageLabelFor } from "./langResolver";
import { sshParentOf, sshProjectLabelOf } from "../../../stores/ssh";

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
/** 顶栏「项目」可读标签：SSH 远端引用显示「主机名 · 远端路径」（如 `MyServer · /etc/nginx`），
 * 而非只剩主机名；本地路径原样显示；无项目时回落到 i18n 文案。 */
const projectLabel = computed<string>(() =>
  vsState.projectDir ? (api.isRemoteRef(vsState.projectDir) ? sshProjectLabelOf(vsState.projectDir) : vsState.projectDir) : t("vsNoProject"),
);
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

/**
 * 外部改动检测的来源标识：本面板把已打开标签的路径集合登记到推送通道（WebSocket），
 * 由 host 侧 stat 到变化时推送过来 —— 取代了原先每 2.5s 一次的 `/mtimes` 轮询。
 * 多编辑器面板共用一条连接，路径在 host 侧去重后只 stat 一次。
 */
const WATCH_KEY = `vscode:${store.slot}`;

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
  // 远端项目：按引用语义取上一级（远端根之上没有目录 → 从「我的电脑」开始）。
  // 不能走 win32 切分：`ssh://id/` 会被切出 `ssh:/` 这种既非本地路径也非引用的畸形串。
  if (api.isRemoteRef(d)) return sshParentOf(d) || null;
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
/** 左栏视图（Activity Bar 图标条切换）：'files' / 'search' / 'git' 为内置，其余为外部插件注册的 id。 */
const EDITOR_VIEW_KEY = "dsh-file-workbench.vscode.activeView";
function loadEditorView(): string {
  try {
    return localStorage.getItem(EDITOR_VIEW_KEY) ?? "files";
  } catch {
    return "files";
  }
}
const leftTab = ref<string>(loadEditorView());
/** 右侧编辑区是否已折叠（Activity Bar 右键与自动窄屏折叠共用）。 */
const rightFolded = ref(false);

function selectLeftTab(id: string): void {
  leftTab.value = id;
  try {
    localStorage.setItem(EDITOR_VIEW_KEY, id);
  } catch {
    /* 隐私模式等场景无法持久化时，保留当前挂载周期内的状态。 */
  }
}

// 项目目录被清空（关闭项目 / 空白窗口）时，若停在搜索 / Git 视图则退回文件视图（对应按钮已禁用）。
watch(
  () => vsState.projectDir,
  (dir) => {
    if (!dir && leftTab.value !== "files") leftTab.value = "files";
  },
);

/* ---------- 状态栏分支名（git 优先，svn 兜底；与 VSGitBar 同一探测口径） ---------- */
const statusBranch = ref<string>("");
watch(
  () => vsState.projectDir,
  async (dir) => {
    statusBranch.value = "";
    if (!dir) return;
    try {
      const p = await api.gitPanel(dir);
      if (p.inRepo && p.repo) statusBranch.value = p.branch || "HEAD";
      else {
        const s = await api.svnInfo(dir);
        if (s.inRepo && s.svnAvailable) statusBranch.value = s.revision ? `r${s.revision}` : "svn";
      }
    } catch {
      /* 探测失败（离线等）不在状态栏显示分支 */
    }
  },
  { immediate: true },
);

/** 左栏搜索结果点击：相对路径 → 绝对路径后打开并跳行。 */
function onSearchOpen(rel: string, ln: number): void {
  if (!vsState.projectDir) return;
  void openFile(absOf(rel, vsState.projectDir), { line: ln });
}
/** 光标位置（状态栏）。 */
const cursor = reactive({ line: 1, col: 1 });
/** 外部改动推送的退订函数（面板卸载时调用）。 */
let offMtime: (() => void) | null = null;

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

/**
 * 取父级引用：远端引用走 POSIX 语义（`ssh://id/a/b` → `ssh://id/a`），本地路径按 `/` 或 `\` 切。
 *
 * 远端引用**绝不能**进 win32 切分：`ssh://4563a636/` 会被切成 `ssh:/` 这种既非本地路径、
 * 也非合法引用的畸形串。远端根之上无法再上溯时原样返回。
 */
function parentRefOf(p: string): string {
  if (api.isRemoteRef(p)) return sshParentOf(p) || p;
  return dirnameOf(p) || p;
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

// 四组菜单（文件/编码/行尾/编辑器）的开关与坐标统一收敛到公共 composable，
// 仅条目由各自的 computed 生成；锚定在元素矩形上的用 openMenuAt。
const {
  cmOpen: encMenuOpen, cmX: encMenuX, cmY: encMenuY, openMenuAt: openEncMenuAt,
} = useContextMenu();
/** 状态栏菜单锚定在被点的段上；ContextMenu 会自行把菜单收敛进视口。 */
function openEncMenu(e: MouseEvent): void {
  const r = (e.currentTarget as HTMLElement | null)?.getBoundingClientRect();
  openEncMenuAt(r?.left ?? 0, r?.top ?? 0);
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

const {
  cmOpen: eolMenuOpen, cmX: eolMenuX, cmY: eolMenuY, openMenuAt: openEolMenuAt,
} = useContextMenu();
function openEolMenu(e: MouseEvent): void {
  const r = (e.currentTarget as HTMLElement | null)?.getBoundingClientRect();
  openEolMenuAt(r?.left ?? 0, r?.top ?? 0);
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
const {
  cmOpen: fileMenuOpen, cmX: fileMenuX, cmY: fileMenuY, openMenuAt: openFileMenuAt,
} = useContextMenu();

function openFileMenu(): void {
  const r = fileBtnRef.value?.getBoundingClientRect();
  // 菜单打开时其全屏 backdrop 会盖住整个面板，点击按钮区域实际是「点 backdrop 关闭」，
  // 所以这里只需负责打开。
  openFileMenuAt(r?.left ?? 0, (r?.bottom ?? 0) + 2);
}

/** 当前文件是否可保存（非只读、非二进制、有缓冲区）。 */
const canSave = computed<boolean>(() => !!activeBuffer.value && !activeBuffer.value.binary && !readonlyActive.value);
/** 有未保存改动的标签。 */
const dirtyPaths = computed<string[]>(() => vsState.openTabs.filter((p) => buffers[p]?.dirty));

const fileMenuItems = computed<MenuItem[]>(() => [
  { label: t("vsOpenFolder"), icon: "folderOpen", onClick: selectProject },
  {
    // 新建文件 / 新建文件夹：落在项目根（目录树中也可在任意目录右键新建）。
    label: t("vsNewFile"),
    icon: "fileOut",
    disabled: !vsState.projectDir,
    onClick: () => treeRef.value?.createFileAtRoot(),
  },
  {
    label: t("vsNewFolder"),
    icon: "folder",
    disabled: !vsState.projectDir,
    onClick: () => treeRef.value?.createFolderAtRoot(),
  },
  {
    // 打开最近项目：子菜单列出历史记录（当前项目打勾并置灰），底部「清空全部」。
    // 取代旧的顶栏独立「最近项目」按钮（顶栏瘦身）。
    label: t("vsMenuRecent"),
    icon: "clock",
    disabled: vsState.recentProjects.length === 0,
    children: [
      ...vsState.recentProjects.map((p) => ({
        label: basename(p) || p,
        checked: p === vsState.projectDir,
        disabled: p === vsState.projectDir,
        onClick: () => void onPickFolder(p),
      })),
      { separator: true },
      { label: t("vsRecentClearAll"), icon: "trash", disabled: vsState.recentProjects.length === 0, onClick: () => void confirmClearAll() },
    ],
  },
  { separator: true },
  // 克隆 / 检出仓库：目标默认「项目目录的父目录」，完成后以 onPickFolder 打开（含未保存确认）。
  { label: t("menuCloneGit"), icon: "git", onClick: () => void openClone("git") },
  { label: t("menuCloneSvn"), icon: "svn", onClick: () => void openClone("svn") },
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
  {
    // 查看本地改动：未保存缓冲区 vs 磁盘内容，以伪标签 diff 展示（host 无法 diff 内存内容，客户端计算）。
    label: t("vsMenuLocalDiff"),
    icon: "fileOut",
    disabled: !(activeBuffer.value?.dirty && !activeBuffer.value.binary),
    onClick: () => void showLocalDiff(),
  },
]);

/* ---------- 顶栏「最近项目」快捷下拉（按钮上显示当前项目名） ---------- */

const recentBtnRef = ref<HTMLElement | null>(null);
const {
  cmOpen: recMenuOpen, cmX: recMenuX, cmY: recMenuY, openMenuAt: openRecMenuAt,
} = useContextMenu();

/** 按钮上的项目短名：取末段文件夹名；远端根引用（末段为空）回落到「主机名 · 路径」全标签。 */
const recentShortLabel = computed<string>(() => {
  const d = vsState.projectDir;
  if (!d) return t("vsNoProject");
  const b = basename(d);
  if (b) return b;
  return api.isRemoteRef(d) ? sshProjectLabelOf(d) : d;
});
/** 悬浮提示：完整项目路径 + 用途说明（按钮上只放得下短名）。 */
const recentBtnTitle = computed<string>(() =>
  vsState.projectDir ? `${projectLabel.value} · ${t("vsRecentProjects")}` : t("vsRecentProjects"),
);

/**
 * 下拉条目：打开文件夹 / 最近项目（当前项打勾置灰，右侧 × 单条移除）/ 清空全部。
 * 列表读 `vsState.recentProjects`（store 经 publishRecents 广播的权威镜像），
 * 与文件菜单里的「打开最近」子菜单同源，改一处即同步。
 */
const recMenuItems = computed<MenuItem[]>(() => [
  { label: t("vsOpenFolder"), icon: "folderOpen", onClick: selectProject },
  { separator: true },
  ...vsState.recentProjects.map((p) => ({
    label: basename(p) || p,
    checked: p === vsState.projectDir,
    disabled: p === vsState.projectDir,
    trailing: { icon: "close", title: t("vsRecentForgetTitle"), onClick: () => void forgetRecent(p) },
    onClick: () => void onPickFolder(p),
  })),
  { separator: true },
  {
    label: t("vsRecentClearAll"),
    icon: "trash",
    disabled: vsState.recentProjects.length === 0,
    onClick: () => void confirmClearAll(),
  },
]);

/** 菜单打开时其全屏 backdrop 会盖住按钮，点击按钮区域实际是「点 backdrop 关闭」，这里只负责打开。 */
function openRecentMenu(): void {
  const r = recentBtnRef.value?.getBoundingClientRect();
  openRecMenuAt(r?.left ?? 0, (r?.bottom ?? 0) + 2);
}

/** 单条移除：确认后从最近项目列表摘掉（不关闭当前项目，下次切换会重新记入）。 */
async function forgetRecent(p: string): Promise<void> {
  const name = basename(p) || p;
  const ok = await confirmDialog({
    title: t("vsRecentForgetTitle"),
    message: t("vsRecentForgetConfirm", { name }),
  });
  if (!ok) return;
  store.forgetProject(p);
  toast("ok", t("vsRecentForgot", { name }));
}

/* ---------- 「最近项目」（已并入顶栏文件菜单的子菜单） ---------- */

/**
 * 打开克隆 / 检出弹窗（文件编辑器入口）。
 *
 * 目标父目录默认「项目目录的父目录」——与「选择项目文件夹」弹窗的起始位置一致（停在父目录才能
 * 看到刚克隆出来的项目本身）。完成后调用 `onPickFolder` 打开新目录；它会先确认未保存改动，
 * 再 `setRoot` 注册独立根并清空旧标签，等价于「在文件编辑器里打开这个仓库」。
 */
function openClone(kind: "git" | "svn"): void {
  const parent = projectPickerDir.value;
  const dir = parent ?? vsState.projectDir ?? "";
  openCloneDialog({
    kind,
    dir,
    key: VS_KEY,
    onDone: ({ path }) => {
      void onPickFolder(path);
    },
  });
}

/**
 * 「清空全部最近项目」：弹确认框，确认才清空全部记录并落盘。
 * 入口在文件菜单的「打开最近」子菜单底部。
 */
async function confirmClearAll(): Promise<void> {
  if (vsState.recentProjects.length === 0) return;
  const ok = await confirmDialog({
    title: t("vsRecentClearAllTitle"),
    message: t("vsRecentClearAllConfirm"),
  });
  if (ok) {
    store.clearRecentProjects();
    toast("ok", t("vsRecentCleared"));
  }
}

/**
 * 项目根目录已被外部删除（由目录树探测到后转发）：从「最近项目」移除该目录并关闭它。
 * 目录都已不存在，无需确认——提示反而打扰；未保存的改动也随之失效，一并丢弃。
 */
async function handleProjectMissing(dir: string): Promise<void> {
  forgetAndClose(dir);
  toast("info", t("vsProjectGone"));
}

/**
 * 在目录树根节点右键「移出项目」：确认后从「最近项目」移除并关闭该项目。
 * 当前项目有未保存改动时，先按「切换项目」的口径确认一次，避免静默丢数据。
 */
async function removeProject(dir: string): Promise<void> {
  const hasDirty = vsState.projectDir === dir && dirtyPaths.value.length > 0;
  const ok = await confirmDialog({
    title: hasDirty ? t("vsUnsavedTitle") : t("vsRemoveProjectTitle"),
    message: hasDirty
      ? t("vsSwitchLoseMsg", { n: String(dirtyPaths.value.length) })
      : t("vsRemoveProjectConfirm", { name: basename(dir) || dir }),
  });
  if (!ok) return;
  forgetAndClose(dir);
  toast("ok", t("vsProjectRemoved"));
}

/**
 * 从「最近项目」移除并从当前项目关闭：两处事件（目录被删 / 用户主动移出）共用，避免重复逻辑。
 * 若被移除的正是当前打开的项目，则清掉全部标签并把 projectDir 置空（目录树回到「未选择项目目录」）。
 */
function forgetAndClose(dir: string): void {
  store.forgetProject(dir);
  if (vsState.projectDir === dir) {
    closeAllTabs();
    vsState.projectDir = null;
    persistVSCode();
  }
}

/* ---------- 快速打开（居中浮层：按文件名搜索项目内文件，Ctrl+P） ---------- */

/** 结果条数上限（够用即可，避免长列表拖慢渲染）。 */
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

/** 打开快速打开浮层：建立索引 + 聚焦输入框（顶栏假输入框点击 / Ctrl+P 两个入口）。 */
function openQuickOpen(): void {
  if (!vsState.projectDir) return;
  searchOpen.value = true;
  searchActive.value = 0;
  void ensureFileIndex();
  void nextTick(() => searchInputRef.value?.focus());
}

function onSearchInput(): void {
  searchActive.value = 0;
}

function closeSearch(): void {
  searchOpen.value = false;
  searchQ.value = "";
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

/* ---------- 插件上下文门面（ctx）：必须在下方 allActViews / watchEffect 消费前完成初始化 ---------- */
const projectListeners = new Set<(dir: string | null) => void>();
const themeListeners = new Set<(t: "dark" | "light") => void>();
const activeFileListeners = new Set<(path: string | null) => void>();
watch(
  () => vsState.projectDir,
  (d) => projectListeners.forEach((f) => f(d)),
);
watch(theme, (t) => themeListeners.forEach((f) => f(t)));
watch(
  () => vsState.activeTab,
  (p) => activeFileListeners.forEach((f) => f(p)),
);

/* ---------- v1 插件编辑器门面（ctx.editor）：把活动 CodeMirror 视图按最小 API 暴露 ---------- */
/** 本面板当前挂载的活动视图（按槽隔离；无激活文件或卸载期间为 null）。 */
function editorView(): import("@codemirror/view").EditorView | null {
  if (!vsState.activeTab) return null;
  return (getLiveEditorView(store.slot) as import("@codemirror/view").EditorView | undefined) ?? null;
}
/** 文档 / 选区监听者集合：首次有订阅时向 store fan-out 表登记，末次退订时注销。 */
const extDocListeners = new Set<(text: string, changes: unknown) => void>();
const extSelListeners = new Set<(sel: import("@codemirror/state").EditorSelection) => void>();
let offStoreDoc: (() => void) | null = null;
let offStoreSel: (() => void) | null = null;

/** 传给插件的上下文门面：getter 保证插件读到的 projectDir / theme / activeFile 永远是最新值。 */
const extCtx: ActivityContext = {
  apiVersion: ACTIVITY_API_VERSION,
  get projectDir() {
    return vsState.projectDir;
  },
  get theme() {
    return theme.value;
  },
  get activeFile() {
    return vsState.activeTab;
  },
  onProjectChange(fn) {
    projectListeners.add(fn);
    fn(vsState.projectDir);
    return () => projectListeners.delete(fn);
  },
  onThemeChange(fn) {
    themeListeners.add(fn);
    fn(theme.value);
    return () => themeListeners.delete(fn);
  },
  onDidChangeActiveFile(fn) {
    activeFileListeners.add(fn);
    fn(vsState.activeTab);
    return () => activeFileListeners.delete(fn);
  },
  openFile: (path, opts) => openFile(path, opts),
  listOpenFiles: () => [...vsState.openTabs],
  openDiff: (title, lines) => showDiffPane({ title, lines }),
  toast: (level, msg) => toast(level, msg),
  editor: {
    get view() {
      return editorView();
    },
    getText: () => editorView()?.state.doc.toString() ?? "",
    isDirty: () => (vsState.activeTab ? buffers[vsState.activeTab]?.dirty ?? false : false),
    onDidChangeTextDocument(fn) {
      const wrapped = (text: string, changes: unknown) => fn({ text, changes: changes as import("@codemirror/state").ChangeSet | null });
      extDocListeners.add(wrapped);
      if (!offStoreDoc) offStoreDoc = onEditorDocChange(store.slot, (t, c) => extDocListeners.forEach((l) => l(t, c)));
      // 立即以当前内容回调一次（无文件时不回调，避免误导插件）。
      const v = editorView();
      if (v) fn({ text: v.state.doc.toString(), changes: null });
      return () => {
        extDocListeners.delete(wrapped);
        if (extDocListeners.size === 0 && offStoreDoc) {
          offStoreDoc();
          offStoreDoc = null;
        }
      };
    },
    getSelection: () => editorView()?.state.selection ?? null,
    onDidChangeSelection(fn) {
      const wrapped = (sel: import("@codemirror/state").EditorSelection) => fn(sel);
      extSelListeners.add(wrapped);
      if (!offStoreSel) offStoreSel = onEditorSelectionChange(store.slot, (s) => extSelListeners.forEach((l) => l(s as import("@codemirror/state").EditorSelection)));
      const v = editorView();
      if (v) fn(v.state.selection);
      return () => {
        extSelListeners.delete(wrapped);
        if (extSelListeners.size === 0 && offStoreSel) {
          offStoreSel();
          offStoreSel = null;
        }
      };
    },
    applyEdit(changes) {
      const v = editorView();
      if (!v || !changes.length) return false;
      v.dispatch({ changes });
      return true;
    },
    setDecorations(deco) {
      const v = editorView();
      if (!v) return;
      // deco 为插件用 @codemirror/view 构建好的扩展（Decoration + ViewPlugin/StateField），
      // 或 null 清除。宿主不代建 RangeSet——避免与 CM6 版本细节耦合。
      editorRef.value?.setExtension(deco);
    },
    createDecorations(spec) {
      // 同源页插件拿不到真实 CM6 实例，改由宿主工厂把纯 JSON spec 编译成装饰层。
      // 首建即应用到当前激活文件（内部按 path 暂存、切文件自动显隐）；update() 就地重绘。
      editorRef.value?.setDecorationsSpec(spec.items);
      return {
        extension: [],
        update(items) {
          editorRef.value?.setDecorationsSpec(items);
        },
      };
    },
  } as EditorAccess,
};

const { cmOpen: edMenuOpen, cmX: edMenuX, cmY: edMenuY, openMenuAt: openEdMenuAt } = useContextMenu();

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
  { separator: true },
  // 编辑器缩略图（Minimap，右侧块状缩略渲染）开关：入口只在本右键菜单，即时生效。
  {
    label: t("vsMinimap"),
    checked: prefs.vsMinimap,
    onClick: () => {
      prefs.vsMinimap = !prefs.vsMinimap;
      savePrefs();
    },
  },
  { separator: true },
  // 编辑技巧提示（不可点击）：多光标是 CodeMirror 原生能力，零成本提示给用户。
  { label: t("vsMultiCursorHint"), disabled: true },
]);

function onEditorMenu(pos: { x: number; y: number }): void {
  openEdMenuAt(pos.x, pos.y);
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
  if (req.dir === vsState.projectDir) {
    // 项目没变，但请求可能还带了「打开某文件」的意图（同一主机下点另一个远端文件）：
    // 必须就地消费掉，否则它会滞留到下一次挂载，凭空弹出一个文件 tab。
    const sameReqFile = takePendingEditorFile();
    if (sameReqFile) await openFile(sameReqFile);
    return;
  }
  await onPickFolder(req.dir);
  // 随项目一并投递的「打开某文件 tab」（SSH 等把引用当项目根的场景）：项目就绪后再开 tab，
  // 缓冲区才能从正确的根加载。无则跳过。本条请求消费后即清空，避免切面板重挂载时重复开。
  const pendingFile = takePendingEditorFile();
  if (pendingFile) await openFile(pendingFile);
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

/** 关闭右侧所有已打开文件（清空标签 + 内容/错误缓存 + 编辑器文档缓存）。 */
function closeAllTabs(): void {
  for (const p of Object.keys(buffers)) delete buffers[p];
  for (const p of Object.keys(errors)) delete errors[p];
  for (const p of Object.keys(docRevs)) delete docRevs[p];
  clearEditorStates(store.slot);
  vsState.openTabs = [];
  vsState.activeTab = null;
}

/**
 * 自愈历史遗留的编辑器状态（旧版本 bug 留下的持久化数据）。
 *
 *  1. `projectDir` 指向**文件**（老版本把「收藏里的文件」直接当项目目录打开）→ 改成它所在的目录，
 *     并把该文件作为标签打开；否则目录树去列一个文件永远失败（「无法访问此文件夹」）。
 *  2. `openTabs` 里混进的**目录**（老版本把被点的 SSH 目录当文件投递给编辑器）→ 摘掉。
 *     否则每次恢复都会去 `/read` 一个目录，host 以 400 `not a file` 拒绝，刷新也消不掉。
 *
 * 一律以 `detail` 的真实结果为准；探不到（主机离线 / 引用已失效）时**原样保留**，绝不误删用户数据。
 *
 * （去重守卫 `healedSlots` 声明在模块作用域块里 —— 见本文件顶部 `<script lang="ts">`。）
 */
async function healRestoredState(): Promise<void> {
  if (healedSlots.has(VS_KEY)) return;
  healedSlots.add(VS_KEY);
  let changed = false;
  const project = vsState.projectDir;
  if (project) {
    const det = await api.detailOrNull(project);
    if (det && !det.isDir) {
      const parent = parentRefOf(project);
      if (parent && parent !== project) {
        vsState.projectDir = parent;
        if (!vsState.openTabs.includes(project)) vsState.openTabs.push(project);
        vsState.activeTab = project;
        changed = true;
      }
    }
  }
  const tabs = [...vsState.openTabs];
  if (tabs.length === 0) {
    if (changed) persistVSCode();
    return;
  }
  const probed = await Promise.all(tabs.map(async (p) => ((await api.detailOrNull(p))?.isDir ? p : null)));
  const dirs = new Set(probed.filter((p): p is string => !!p));
  if (dirs.size === 0) {
    if (changed) persistVSCode();
    return;
  }
  for (const p of dirs) {
    delete buffers[p];
    delete errors[p];
    delete docRevs[p];
  }
  vsState.openTabs = vsState.openTabs.filter((p) => !dirs.has(p));
  if (vsState.activeTab && dirs.has(vsState.activeTab)) {
    vsState.activeTab = vsState.openTabs[vsState.openTabs.length - 1] ?? null;
  }
  // 立刻落盘：不改的话下次挂载还得再自愈一遍（每次都要多打一轮探测请求）。
  persistVSCode();
}

/** 打开一个文件：加入标签并加载内容；opts.line 传入时打开后跳到该行（左栏搜索结果跳转用）。 */
async function openFile(path: string, opts?: { line?: number }): Promise<void> {
  diffPane.value = null; // 打开文件时关闭提交文件详情
  rightFolded.value = false; // 右栏被自动折叠时，点文件 = 用户要看内容，手动展开（宽度再次跨越阈值才重新评估）
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
    // ⛔ 先等一次 DOM 刷新再自增：读取期间若编辑器已按「空内容」挂载，它此刻的 docRev
    // 还是旧值；下一个微任务里组件尚未重渲染，watcher 却已能看到新值 —— 时序正确。
    // 若读取完成时组件**正要**挂载（activeTab 恢复的首帧），await nextTick 保证挂载
    // 发生在本行之前，新 rev 直接成为它的初始 prop，docRev watcher 随后照常触发重建。
    await nextTick();
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
  rightFolded.value = false; // diff 展示在右栏，折叠中先展开
  diffPane.value = p;
}

/**
 * 查看本地改动：重读磁盘内容与未保存缓冲区做行级 diff（客户端 LCS，见 domain/lineDiff），
 * 以伪标签 diff 视图展示 —— 对齐 VS Code 的「与磁盘版本对比」。
 */
async function showLocalDiff(): Promise<void> {
  const path = vsState.activeTab;
  const b = path ? buffers[path] : undefined;
  if (!path || !b || b.binary) return;
  try {
    const disk = await api.readFile(path);
    const r = diffLines(disk.content, b.content);
    showDiffPane({
      title: `${basename(path)} · ${t("vsLocalDiffTitle")}`,
      lines: r ? r.lines : [t("vsLocalDiffTooBig")],
    });
  } catch (e) {
    toast("error", (e as Error).message);
  }
}

/* ---------- 自动保存（设置开关；编辑停顿 1 秒后静默写入） ---------- */
const AUTO_SAVE_DELAY_MS = 1000;
const autoSaveTimers = new Map<string, ReturnType<typeof setTimeout>>();

function scheduleAutoSave(path: string): void {
  if (!prefs.autoSave) return;
  const t0 = autoSaveTimers.get(path);
  if (t0) clearTimeout(t0);
  autoSaveTimers.set(
    path,
    setTimeout(() => {
      autoSaveTimers.delete(path);
      if (buffers[path]?.dirty) void savePath(path, { quiet: true });
    }, AUTO_SAVE_DELAY_MS),
  );
}

function cancelAutoSave(path: string): void {
  const t0 = autoSaveTimers.get(path);
  if (t0) clearTimeout(t0);
  autoSaveTimers.delete(path);
}

/* ---------- 外部插件扩展视图（Activity Bar 注册表消费，见 stores/activityBar.ts） ---------- */
const extViews = computed(listActivityViews); // 注册表 ref → 注册/注销（含热更新）会触发重渲染
const extHostRef = ref<HTMLElement | null>(null);
/** 当前激活的扩展视图（leftTab 命中插件 id 时）。 */
const activeExtView = computed(() => extViews.value.find((v) => v.id === leftTab.value));

/* ---------- Activity Bar 右键控制（隐藏/显示视图、图标置顶/置底、侧栏左/右侧，仿 VS Code） ---------- */
interface ActBarView {
  id: string;
  title: string;
  /** 插件视图的原始完整标题：菜单标签被图标文本回退截断时，hover 靠它看到全名。 */
  fullTitle?: string;
  icon?: string;
  disabled?: boolean;
}
/** Activity Bar 上的**全部**视图（内置 + 插件；插件按 when() 过滤），供渲染与右键菜单共用。 */
const allActViews = computed<ActBarView[]>(() => [
  { id: "files", title: t("vsLeftTabFiles"), icon: "folder" },
  { id: "search", title: t("vsLeftTabSearch"), icon: "search", disabled: !vsState.projectDir },
  { id: "git", title: t("vsLeftTabGit"), icon: "git", disabled: !vsState.projectDir },
  ...extViews.value
    .filter((v) => !v.when || v.when(extCtx))
    .map((v) => ({ id: v.id, title: activityText(v.title), fullTitle: activityText(v.title), icon: v.icon })),
]);
/**
 * 「扩展视图」清单只列**当前注册中**的视图：插件被禁用后其视图已从注册表撤销，
 * 若仍沿用持久化的 hidden 名单参与计数/展示，会出现「(3/3) 却一个都不勾」的鬼影条目——
 * 用户重新启用插件时旧隐藏态还会直接生效，看起来像「勾选没反应」。
 */
const registeredExtIds = computed(() => new Set(extViews.value.map((v) => v.id)));
/** 实际渲染的图标：全部视图去掉被隐藏的。 */
const actBarItems = computed<ActBarView[]>(() => allActViews.value.filter((v) => !vsState.activityBar.hidden.includes(v.id)));

// 把已注销/未注册插件遗留在持久化 hidden 名单里的 id 收敛掉。
// ⚠️ 插件 bootstrap（enablePlugin 异步 eval）可能晚于本组件挂载——用 watch 持续收敛而非只跑一次，
// 但只在名单真正变短时写回，避免与插件注册互相触发死循环。
watch(
  () => [extViews.value.map((v) => v.id).join(","), vsState.activityBar.hidden.join(",")] as const,
  () => {
    const ids = registeredExtIds.value;
    // 内置视图 id 不在扩展注册表里，白名单外单独放行。
    const builtinIds = new Set(["files", "search", "git", "host.plugin-manager"]);
    const stale = vsState.activityBar.hidden.filter((id) => !ids.has(id) && !builtinIds.has(id));
    if (!stale.length) return;
    vsState.activityBar.hidden = vsState.activityBar.hidden.filter((id) => !stale.includes(id));
    persistVSCode();
  },
  { immediate: true },
);

/**
 * 「已启用但因未打开项目而被 when() 挡住」的扩展数——用于顶栏提示。
 * 内置插件视图几乎都带 `when: ctx => !!ctx.projectDir`（无项目即隐藏），故没开项目时点了启用
 * 侧边栏也不会出现图标，用户会误以为「没反应」。这里统计这类项，给出可点击的引导条。
 */
const hiddenExtCount = computed<number>(() => {
  if (vsState.projectDir) return 0;
  const gatedViewIds = new Set(extViews.value.filter((v) => typeof v.when === "function").map((v) => v.id));
  if (!gatedViewIds.size) return 0;
  let n = 0;
  for (const p of listUserPlugins()) {
    if (!p.enabled) continue;
    if (contributionsOfPluginId(p.id).some((vid) => gatedViewIds.has(vid))) n++;
  }
  return n;
});

// 保证「当前激活视图」始终是可见视图之一：持久化的旧值 / 刚被隐藏或卸载的插件视图
// 都会让左栏没有任何按钮处于激活态（内容区却仍显示树），此时回退到文件视图。
watch(
  actBarItems,
  (items) => {
    if (!items.some((v) => v.id === leftTab.value)) leftTab.value = "files";
  },
  { immediate: true },
);

function hideActView(id: string): void {
  if (!vsState.activityBar.hidden.includes(id)) vsState.activityBar.hidden.push(id);
  // 隐藏的正是当前视图：退回文件视图（files 自身被隐藏时内容区仍显示树，仅图标消失）。
  if (leftTab.value === id) leftTab.value = "files";
  persistVSCode();
}
function showActView(id: string): void {
  vsState.activityBar.hidden = vsState.activityBar.hidden.filter((x) => x !== id);
  persistVSCode();
}
function toggleActView(id: string): void {
  if (vsState.activityBar.hidden.includes(id)) showActView(id);
  else hideActView(id);
}

const actMenuOpen = ref(false);
const actMenuX = ref(0);
const actMenuY = ref(0);
/** 'view' = 在某个图标上右键；'bar' = 图标条空白处右键（完整清单）。 */
const actMenuMode = ref<"view" | "bar">("bar");
const actMenuTarget = ref<ActBarView | null>(null);

/** 图标条位置切换：图标组对齐顶部 / 底部。 */
const actPositionItem = computed<MenuItem>(() => ({
  label: vsState.activityBar.position === "top" ? t("vsActBarBottom") : t("vsActBarTop"),
  icon: "panellayout",
  onClick: () => {
    vsState.activityBar.position = vsState.activityBar.position === "top" ? "bottom" : "top";
    persistVSCode();
  },
}));
/** 侧栏整体左/右侧切换（仿 VS Code 的 Side Bar 位置）。 */
const actSideItem = computed<MenuItem>(() => ({
  label: vsState.sidebarSide === "left" ? t("vsSideRight") : t("vsSideLeft"),
  icon: "float",
  onClick: () => {
    vsState.sidebarSide = vsState.sidebarSide === "left" ? "right" : "left";
    persistVSCode();
  },
}));

const actEditorFoldItem = computed<MenuItem>(() => ({
  label: rightFolded.value ? t("vsUnfoldEditor") : t("vsFoldEditor"),
  icon: rightFolded.value ? "chevronsRight" : "chevronsLeft",
  onClick: () => {
    rightFolded.value = !rightFolded.value;
  },
}));

const actMenuItems = computed<MenuItem[]>(() => {
  if (actMenuMode.value === "view" && actMenuTarget.value) {
    const v = actMenuTarget.value;
    return [
      { label: t("vsActHide", { name: v.title }), icon: "close", onClick: () => hideActView(v.id) },
      { separator: true },
      actEditorFoldItem.value,
      { separator: true },
      actPositionItem.value,
      actSideItem.value,
    ];
  }
  const extItems = allActViews.value
    .filter((v) => !["files", "search", "git", "host.plugin-manager"].includes(v.id))
    .map((v) => ({
      label: v.title,
      icon: v.icon ?? "",
      title: v.fullTitle,
      // 注册中的视图默认显示；仅尊重仍在注册表内的显式隐藏（stale watch 会即时清理，
      // 禁用→重新启用的插件因此总是以「显示」回归）。
      checked: !vsState.activityBar.hidden.includes(v.id),
      onClick: () => toggleActView(v.id),
    }));
  return [
    ...allActViews.value
      .filter((v) => !extItems.length || ["files", "search", "git", "host.plugin-manager"].includes(v.id))
      .map((v) => ({
        label: v.title,
        icon: v.icon ?? "",
        title: v.fullTitle,
        checked: !vsState.activityBar.hidden.includes(v.id),
        disabled: v.disabled,
        onClick: () => toggleActView(v.id),
      })),
    ...(extItems.length
      ? [{ label: `${t("vsActExtViews")} (${extItems.filter((i) => i.checked).length}/${extItems.length})`, icon: "grid", children: extItems }]
      : []),
    { separator: true },
    actEditorFoldItem.value,
    { separator: true },
    actPositionItem.value,
    actSideItem.value,
  ];
});

function openActViewMenu(v: ActBarView, e: MouseEvent): void {
  const r = (e.currentTarget as HTMLElement | null)?.getBoundingClientRect();
  actMenuX.value = r?.right ?? e.clientX;
  actMenuY.value = r?.bottom ?? e.clientY;
  actMenuMode.value = "view";
  actMenuTarget.value = v;
  actMenuOpen.value = true;
}
function openActBarMenu(e: MouseEvent): void {
  actMenuX.value = e.clientX;
  actMenuY.value = e.clientY;
  actMenuMode.value = "bar";
  actMenuTarget.value = null;
  actMenuOpen.value = true;
}

/** 状态栏按钮的「稳定壳」：插件运行中反复 register 只更新目标（内容可变），
 *  owner 由宿主按注册表快照盖章、插件不可伪造。撤销贡献点时按 owner 一并剔除——
 *  修复禁用插件后其状态栏条目仍留在「扩展」菜单里的问题。 */
interface StatusItemShell {
  target: StatusBarItem | null;
  owner: string | null;
}
const statusShells = new Map<string, StatusItemShell>();

/** 从注册表快照解析某条目的归属插件：views/commands/menu 命中即其 id；都不属于宿主内置 → orphan。 */
function resolveStatusOwner(item: StatusBarItem): string | null {
  const match = (c: ContributionSet) =>
    c.views.includes(item.id) || c.commands.includes(item.commandId) || c.menu.includes(item.id);
  for (const [pid, c] of allContributions()) if (match(c)) return pid;
  // dev 示例命令归宿主，永不过滤。
  return item.commandId === "demo.statusPing" ? null : "orphan";
}

/** 有效状态栏项：插件反复 register 时保留最新目标，但 owner 以首次盖章为准；
 *  已撤销插件（含孤儿）的条目被过滤，宿主内置与启用中插件的保留。 */
const validStatusItems = computed<StatusBarItem[]>(() => {
  const items = listStatusBarItems();
  const ids = new Set(items.map((i) => i.id));
  for (const id of [...statusShells.keys()]) if (!ids.has(id)) statusShells.delete(id);
  for (const it of items) {
    let shell = statusShells.get(it.id);
    if (!shell) shell = { target: it, owner: resolveStatusOwner(it) };
    else shell.target = it; // 内容跟随最新注册，owner 不变
    statusShells.set(it.id, shell);
  }
  return items.filter((it) => {
    const o = statusShells.get(it.id)?.owner;
    return o === null || (!!o && o !== "orphan" && !!contributionsOf(o));
  });
});

/** 传给命令处理器 / when 谓词的状态上下文（读时取最新值）。 */
function statusCtx(): StatusCommandContext {
  return { path: vsState.activeTab, projectDir: vsState.projectDir };
}

/* ---------- 底部「扩展」按钮：把插件注册项收进一个弹出菜单逐条展示 ---------- */

const extMenuBtnRef = ref<HTMLElement | null>(null);
const {
  cmOpen: extMenuOpen, cmX: extMenuX, cmY: extMenuY, openMenuAt: openExtMenuAt,
} = useContextMenu();
/** 弹窗锚定 x（按钮中心），传给 ContextMenu.anchorX。 */
const extMenuAnchorX = ref(0);

/** 点底部「扩展」→ 在其上方弹出气泡菜单：水平居中对准按钮，下缘箭头指向按钮。 */
function openExtMenu(): void {
  const r = extMenuBtnRef.value?.getBoundingClientRect();
  if (!r) return;
  extMenuAnchorX.value = r.left + r.width / 2;
  openExtMenuAt(0, r.top - 10);
}

/**
 * 下拉条目：合并两套注册表——状态栏项（statusbar.register）与扩展菜单项（statusbar.registerMenu），
 * 按 order 升序统一列出。when(ctx) 为假者置灰禁用；点击即 executeCommand(commandId, ctx)。
 * 命令返回 Promise 且仍在执行 → 该行显示 spinner、点击改开任务面板（去哪看的指引）；
 * 完成/失败的 toast 由插件自己发（宿主不代答结果内容）。
 */
const extMenuItems = computed<MenuItem[]>(() => {
  // 读这两个 ref 建立依赖：激活文件 / 项目变化时，when(ctx) 结论会随之重算。
  void vsState.activeTab;
  void vsState.projectDir;
  const ctx = statusCtx();
  const merged: StatusBarItem[] = [
    ...validStatusItems.value,
    ...listExtensionMenuItems(),
  ].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  return merged.map((reg) => {
    const running = isCommandRunning(reg.commandId);
    return {
      label: reg.text,
      icon: reg.icon || viewIconForCommand(extViews.value, reg.commandId),
      title: running ? t("vsExtRunning") : reg.tooltip,
      // 实时 tooltip：textFn（插件的节流进度读取器）优先，静态字段兜底。
      // 此前插件靠「进度→同 id 重新 register」刷新文案，数组引用每 tick 都换、
      // 菜单跟着重定位重渲染抖动——textFn 把更新收敛到纯文本节点。
      hintFn: () => (running ? t("vsExtRunning") : reg.textFn?.() ?? reg.tooltip),
      disabled: !running && !!reg.when && !reg.when(ctx),
      running,
      onClick: () => {
        if (running) {
          tasks.setOpen(true);
          return;
        }
        try {
          const r = executeCommand(reg.commandId, ctx);
          // 命令返回 Promise（异步长任务）→ 挂上失败兜底提示；成功通知归插件自己发。
          if (r instanceof Promise) {
            r.catch((e) => toast("error", `${reg.text}: ${(e as Error)?.message ?? String(e)}`));
          }
        } catch (e) {
          toast("error", (e as Error).message);
        }
      },
    };
  });
});

/** 是否存在任一注册项（决定底部「扩展」入口是否显示）。 */
const hasExtEntries = computed<boolean>(() => validStatusItems.value.length + listExtensionMenuItems().length > 0);

// 切换视图 / 注册表变化 / when() 结论翻转时重挂载；离开视图（含面板卸载）走插件的清理函数。
watchEffect(
  (onCleanup) => {
    const v = activeExtView.value;
    const el = extHostRef.value;
    if (!v || !el || (v.when && !v.when(extCtx))) return;
    const cleanup = v.mount(el, extCtx);
    // 注入内容自带 overflow:hidden 包裹层时会被裁切、外层不出现滚动条 → 鼠标滚不动：兜底。
    ensureInjectedViewScrollable(el);
    const ro = new ResizeObserver(() => ensureInjectedViewScrollable(el));
    ro.observe(el);
    onCleanup(() => {
      ro.disconnect();
      if (typeof cleanup === "function") {
        try {
          cleanup();
        } catch {
          /* 插件清理抛错不阻断面板 */
        }
      }
      el.replaceChildren();
    });
  },
  { flush: "post" },
);

function onEditorChange(value: string): void {
  const b = vsState.activeTab ? buffers[vsState.activeTab] : undefined;
  if (!b) return;
  b.content = value;
  b.dirty = true;
  // 自动保存（设置开关）：编辑停顿 1 秒后静默写入磁盘。
  if (vsState.activeTab) scheduleAutoSave(vsState.activeTab);
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
  const tab = vsState.activeTab;
  if (!tab) return;
  const b = buffers[tab];
  // 无本地改动时不重复保存/弹提示（对齐 VS Code：Ctrl+S 多次仅首次落盘并提示）。
  if (!b || !b.dirty) return;
  await savePath(tab);
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

/* ---------- 外部改动检测（host 侧 WebSocket 推送） ---------- */

/**
 * 处理某标签对应的文件在磁盘上被改动（由 host 推送，非轮询）。
 *  - 缓冲区**干净** → 磁盘变了就是外部改过，直接静默重载（本地没有可丢的内容）；
 *  - 缓冲区**有未保存改动** → 只打冲突标记，等用户决定覆盖还是放弃，**绝不自动重载**。
 */
async function applyExternalChange(
  path: string,
  item: { mtimeMs: number; size: number } | null,
): Promise<void> {
  const b = buffers[path];
  if (!b || b.binary) return;
  if (!item) return; // 文件已删除：不自动关标签，交由用户处理
  if (Math.abs(item.mtimeMs - b.mtime) < 1) return;
  if (b.dirty) {
    if (!b.conflict) b.conflict = true;
    return;
  }
  await loadContent(path, { force: true });
  toast("info", t("vsReloadedExternal", { name: basename(path) }));
}

/**
 * 登记/更新本面板关注的路径集合，并订阅推送。
 *
 * 只关心**本面板已打开的标签**：其他面板的变更由各自的订阅处理（推送通道会分发给所有监听者，
 * 这里按 openTabs 过滤即可）。
 */
function initExternalWatch(): void {
  offMtime = onMtimeChange((path, item) => {
    if (!vsState.openTabs.includes(path)) return;
    void applyExternalChange(path, item);
  });
  watch(
    () => vsState.openTabs.slice(),
    (paths) => setWatchPaths(WATCH_KEY, paths),
    { immediate: true },
  );
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
  const path = vsState.activeTab;
  if (!path) return;
  // 远端文件只能用内置编辑器查看，不能用本机默认程序打开。
  if (api.isRemoteRef(path)) {
    toast("error", t("remoteNoExternal"));
    return;
  }
  void api.openExternal(path);
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
    // VS Code 式三选：保存并关闭 / 不保存关闭 / 取消。保存失败（冲突被取消）时不关闭，内容不丢。
    const c = await choiceDialog({
      title: t("vsUnsavedTitle"),
      message: t("vsUnsavedMsg"),
      choices: [
        { id: "save", text: t("vsCloseSave"), primary: true },
        { id: "discard", text: t("vsCloseDiscard") },
        { id: "cancel", text: t("cancel") },
      ],
    });
    if (c === "save") {
      const ok = await savePath(path, { quiet: true });
      if (!ok) return;
    } else if (c !== "discard") {
      return;
    }
  }
  delete buffers[path];
  delete errors[path];
  delete docRevs[path];
  cancelAutoSave(path);
  // 同时丢弃该文件的编辑器文档缓存：重开时按磁盘内容重建，避免复用陈旧状态。
  clearEditorState(store.slot, path);
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
  const closeOne = (p: string): void => {
    delete buffers[p];
    delete errors[p];
    delete docRevs[p];
    cancelAutoSave(p);
    clearEditorState(store.slot, p);
    vsState.openTabs = vsState.openTabs.filter((q) => q !== p);
  };
  if (dirty.length > 1) {
    // 多个脏标签：一次三选（全部保存并关闭 / 全部不保存关闭 / 取消），而不是逐个弹窗。
    const c = await choiceDialog({
      title: t("vsUnsavedTitle"),
      message: t("vsCloseManyMsg", { n: String(dirty.length) }),
      choices: [
        { id: "save", text: t("vsCloseSaveAll"), primary: true },
        { id: "discard", text: t("vsCloseDiscardAll") },
        { id: "cancel", text: t("cancel") },
      ],
    });
    if (c !== "save" && c !== "discard") return;
    // 保存模式：保存失败的（冲突被取消）保留标签，不丢内容。
    const failed = new Set<string>();
    if (c === "save") {
      for (const p of dirty) {
        if (!(await savePath(p, { quiet: true }))) failed.add(p);
      }
    }
    for (const p of paths) {
      if (c === "save" && failed.has(p)) continue;
      closeOne(p);
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
  cancelAutoSave(path);
  // 文件已删除：同步丢弃其编辑器文档缓存，避免随后 swapTo 把已删路径的状态写回缓存。
  clearEditorState(store.slot, path);
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
  // 文档缓存跟着改名迁移到新路径，避免「激活文件被改名」时编辑器整体重建。
  const edCache = getEditorStateCache(store.slot);
  const edState = edCache.get(from);
  if (edState) {
    edCache.delete(from);
    edCache.set(to, edState);
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
  let f = (e.clientX - rect.left) / rect.width;
  // 侧栏在右侧时布局是 row-reverse：分隔条从右侧算，占比取反。
  if (vsState.sidebarSide === "right") f = 1 - f;
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
  // Ctrl+P：快速打开（对齐 VS Code）。须拦截浏览器打印，并弹出居中搜索浮层。
  if (key === "p") {
    if (isTextEntryFocused(e.target)) return;
    e.preventDefault();
    openQuickOpen();
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

/* ---------- 右栏自动折叠：面板拖窄收起编辑区（只留项目树），拖宽恢复 ----------
 * 与顶栏 compact 同一套宽度响应思路，但对象是左右分栏的**右栏**（标签 + 编辑器 + 状态栏）：
 * 触发源是面板自身宽度（`rootRef`，ResizeObserver）——拖 DSH 右侧面板的宽度分隔条
 * **不会触发 window resize**（这也是窗口宽度版联动「没有生效」的原因），必须观察面板元素。
 * 迟滞带（560 折叠 / 680 恢复）防抖动；没开项目时不折叠（右栏「打开文件夹」空态比空树更有用）。
 * 点击树里的文件 / 打开 diff 会手动展开（用户意图优先，直到宽度再次跨越阈值才重新评估）。 */
/** 面板宽度 ≤ 此值时折叠右栏（编辑区）。 */
const RIGHT_FOLD_BELOW = 560;
/** 面板宽度 ≥ 此值时恢复右栏；与上者之间是迟滞死区。 */
const RIGHT_UNFOLD_ABOVE = 680;
let foldRO: ResizeObserver | null = null;

function evalRightFold(): void {
  const w = rootRef.value?.clientWidth ?? 0;
  if (w <= RIGHT_FOLD_BELOW && vsState.projectDir) rightFolded.value = true;
  else if (w >= RIGHT_UNFOLD_ABOVE) rightFolded.value = false;
}

onMounted(async () => {
  // 宿主内置「插件管理」视图：注册（幂等）并在首次挂载时引导加载用户/内置插件。
  registerPluginManagerView();
  // 顶栏宽度监听：内容放不下（会折行）时把文本标签折叠成图标。
  if (topbarRef.value) {
    topbarRO = new ResizeObserver(() => evalTopbarCompact());
    topbarRO.observe(topbarRef.value);
    evalTopbarCompact();
  }
  // 面板宽度监听：拖窄到放不下编辑区时收起右栏（只留项目树），拖宽恢复。
  if (rootRef.value) {
    foldRO = new ResizeObserver(() => evalRightFold());
    foldRO.observe(rootRef.value);
    evalRightFold();
  }
  await initVSCodeState();
  // 恢复本会话内、上次面板卸载时暂存的未保存缓冲区（切面板不丢改动）。
  const stashed = takeStashedBuffers();
  for (const [path, buf] of Object.entries(stashed)) {
    if (vsState.openTabs.includes(path)) buffers[path] = buf;
  }
  // 自愈旧版本留下的坏状态（projectDir 是文件 / 标签里混入目录），必须在 setRoot 与加载内容之前。
  await healRestoredState();
  // 项目根注册（`api.setRoot`）**不在这里做**：`ProjectTree.rebuild()` 在列目录之前会注册一次，
  // 两边都调等于每次挂载白打一个请求。这里只保证自愈后的目录已被 rebuild 用上（见下方 vsReady）。
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
  // 外部改动改为 push：登记本面板的标签路径集合，由 host 侧 stat 到变化时推过来。
  initExternalWatch();
  // 后台预取一次项目文件索引：让首次 Ctrl+P / 聚焦搜索框立刻有结果。
  // ⛔ 必须按「槽 + 项目根」去重（见 indexPrefetched 的说明）：这是一次**全量递归扫描**，
  //    而切右侧面板 tab 会卸载重建整个面板 —— 不去重就是每切一次重扫一遍整个项目。
  const idxKey = `${VS_KEY}:${vsState.projectDir ?? ""}`;
  if (vsState.projectDir && !indexPrefetched.has(idxKey)) {
    indexPrefetched.add(idxKey);
    void ensureFileIndex();
  }
  // 兜底：宿主未下发 tab 信息钩子（拿不到导航参数）时，取用工作台投递的待打开目录。
  const pendingDir = takePendingEditorProject();
  if (pendingDir) store.requestOpenProject(pendingDir);
  // 挂载前就投递过来的「打开某项目」请求在这里补做（挂载后的请求由 watch 处理）。
  // 随项目一并投递的「打开某文件 tab」由 applyExternalProject 在项目就绪后消费。
  if (store.projectRequest.value) await applyExternalProject();
});

onBeforeUnmount(() => {
  topbarRO?.disconnect();
  topbarRO = null;
  foldRO?.disconnect();
  foldRO = null;
  window.removeEventListener("keydown", onKeydown);
  window.removeEventListener("beforeunload", onBeforeUnload);
  window.removeEventListener("beforeunload", persistVSCode);
  document.removeEventListener("mousemove", onMove);
  document.removeEventListener("mouseup", onUp);
  // 撤销外部改动订阅（并释放本面板登记的那批路径）。
  offMtime?.();
  offMtime = null;
  clearWatchPaths(WATCH_KEY);
  // 面板卸载（切 tab / 关面板）时：先暂存未保存内容，再兜底落盘当前位置。
  stashOpenBuffers({ ...buffers });
  persistVSCode();
});
</script>

<style scoped>
.vs-pane {
  position: relative;
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
.vs-topbar.compact .vs-quickopen-trigger { width: 28px; padding: 0; justify-content: center; }
.vs-topbar.compact .vs-quickopen-ph,
.vs-topbar.compact .vs-quickopen-kbd { display: none; }
/* 紧凑档：最近项目按钮退化为定宽时钟图标（与快速打开一致），项目名让位给地址栏与搜索 */
.vs-topbar.compact .vs-recent-btn { width: 28px; padding: 0; justify-content: center; }
.vs-sep {
  width: 1px;
  height: 16px;
  background: var(--dsh-border, #30363d);
}
.vs-spacer {
  flex: 1;
}
/* ---------- 快速打开（顶栏假输入框 + 居中浮层） ---------- */
/* 触发器：长得像输入框的按钮，右侧带 Ctrl+P 键位提示 */
.vs-quickopen-trigger {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 24px;
  width: 220px;
  max-width: 34vw;
  padding: 0 8px;
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 4px;
  background: var(--dsh-bg, #0d1117);
  color: var(--dsh-fg-weak, #8b949e);
  cursor: pointer;
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  transition: border-color 0.12s, background 0.12s, color 0.12s;
}
.vs-quickopen-trigger:hover:not(:disabled) {
  border-color: var(--dsh-accent, #2f81f7);
  color: var(--dsh-fg, #c9d1d9);
}
.vs-quickopen-trigger:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.vs-quickopen-ph {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
}
.vs-quickopen-kbd {
  flex: 0 0 auto;
  padding: 0 5px;
  height: 16px;
  line-height: 15px;
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 3px;
  font-size: calc(10px * var(--dsh-fs-scale, 1));
  opacity: 0.8;
}
/* 浮层：面板内居中（顶部 12%），backdrop 半透明遮罩点击关闭 */
.vs-quickopen-backdrop {
  position: absolute;
  inset: 0;
  z-index: 400;
  background: rgba(0, 0, 0, 0.32);
}
.vs-quickopen {
  position: absolute;
  top: 12%;
  left: 50%;
  transform: translateX(-50%);
  width: min(560px, 86%);
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 8px;
  background: var(--dsh-bg2, #161b22);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  animation: vs-quickopen-in 0.12s ease-out;
}
@keyframes vs-quickopen-in {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(-6px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}
.vs-quickopen-input {
  width: 100%;
  height: 32px;
  padding: 0 12px;
  border: none;
  border-bottom: 1px solid var(--dsh-border, #30363d);
  background: var(--dsh-bg, #0d1117);
  color: var(--dsh-fg, #c9d1d9);
  font-size: calc(13px * var(--dsh-fs-scale, 1));
  outline: none;
  box-sizing: border-box;
}
.vs-quickopen-input:focus {
  border-bottom-color: var(--dsh-accent, #2f81f7);
}
.vs-quickopen-list {
  max-height: 320px;
  overflow: auto;
  padding: 4px;
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
}.vs-search-name {
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
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  transition: background 0.12s, color 0.12s, border-color 0.12s;
}
.vs-btn:hover:not(:disabled) {
  background: var(--dsh-hover, rgba(255, 255, 255, 0.08));
  border-color: var(--dsh-accent, #2f81f7);
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
  border-color: var(--dsh-accent, #2f81f7);
}
.vs-caret {
  width: 0;
  height: 0;
  border-left: 3.5px solid transparent;
  border-right: 3.5px solid transparent;
  border-top: 4px solid currentColor;
  opacity: 0.75;
}
/* 顶栏「最近项目」下拉按钮：显示当前项目名，过长省略（完整路径在 title）。
   max-width 防止长目录名把右侧搜索框挤出顶栏。 */
.vs-recent-btn {
  max-width: 200px;
}
.vs-recent-name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.vs-project-path {
  flex: 0 1 280px;
  min-width: 80px;
  overflow: hidden;
  color: var(--dsh-fg-weak, #8b949e);
  direction: rtl;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.vs-topbar.compact .vs-project-path { display: none; }
.vs-editor-fold-btn {
  flex: 0 0 28px;
  width: 28px;
  padding: 0;
  justify-content: center;
}
.vs-exthint {
  display: flex;
  align-items: center;
  gap: 7px;
  width: 100%;
  padding: 5px 12px;
  border: none;
  border-bottom: 1px solid var(--dsh-border, #30363d);
  background: color-mix(in srgb, var(--dsh-warn, #d29922) 14%, var(--dsh-bg, #0d1117));
  color: var(--dsh-fg, #c9d1d9);
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  text-align: left;
  cursor: pointer;
}
.vs-exthint:hover {
  background: color-mix(in srgb, var(--dsh-warn, #d29922) 22%, var(--dsh-bg, #0d1117));
}
.vs-exthint svg {
  flex: 0 0 auto;
  color: var(--dsh-warn, #d29922);
}
.vs-body {
  display: flex;
  align-items: stretch;
  flex: 1;
  min-height: 0;
}
/* 侧栏在右侧：整体行方向反转（编辑区在左、侧栏在右），边框方向随之对调 */
.vs-body.side-right {
  flex-direction: row-reverse;
}
/* 侧栏在右侧时其内部也反转：活动栏贴最外侧（右缘），内容区朝编辑区一侧。 */
.vs-body.side-right .vs-left {
  flex-direction: row-reverse;
  border-right: none;
  border-left: none;
}
.vs-body.side-right .vs-activity {
  border-right: none;
  border-left: 1px solid var(--dsh-border, #30363d);
}
/* 右栏自动折叠：面板拖窄时收起编辑区（含分隔条），项目树占满整栏；拖宽自动恢复。 */
.vs-body.right-folded .vs-split,
.vs-body.right-folded .vs-right {
  display: none;
}
.vs-body.right-folded .vs-left {
  flex: 1 1 100%;
  border-right: none;
}
.vs-left {
  flex: 0 0 auto;
  min-width: 0;
  height: 100%;
  overflow: hidden;
  display: flex;
  background: var(--dsh-bg2, #161b22);
  border-right: 1px solid var(--dsh-border, #30363d);
}
/* ── Activity Bar：40px 竖向图标条（对齐 VS Code），active 态左侧 accent 竖条 ── */
.vs-activity {
  flex: 0 0 40px;
  width: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 6px 0;
  border-right: 1px solid var(--dsh-border, #30363d);
  background: var(--dsh-bg, #0d1117);
  user-select: none;
}
/* 图标组对齐底部（右键菜单「活动栏移到底部」） */
.vs-activity.btm {
  justify-content: flex-end;
}
.vs-act-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: var(--dsh-fg-weak, #8b949e);
  cursor: pointer;
  transition: background 0.12s, color 0.12s;
}
.vs-act-btn:hover:not(:disabled) {
  background: var(--dsh-hover, rgba(255, 255, 255, 0.08));
  color: var(--dsh-fg, #c9d1d9);
}
.vs-act-btn.active {
  color: var(--dsh-fg, #c9d1d9);
}
.vs-act-btn.active::before {
  content: "";
  position: absolute;
  left: -4px;
  top: 6px;
  bottom: 6px;
  width: 2px;
  border-radius: 1px;
  background: var(--dsh-accent, #2f81f7);
}
.vs-act-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
/* 无合法图标名的扩展：显示 title 首字符 */
.vs-act-letter {
  font-size: 14px;
  font-weight: 600;
}
/* 外部插件视图容器：占满内容区 */
.vs-ext-view {
  flex: 1 1 auto;
  min-height: 0;
  overflow: auto;
}
/* 插件运行时注入的 DOM 没有 scoped 标记，必须 :deep() 穿透（dev 演示插件用） */
.vs-ext-view :deep(.vs-ext-demo) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 100%;
  padding: 16px;
  text-align: center;
}
.vs-ext-view :deep(.vs-ext-demo-title) {
  color: var(--dsh-fg, #c9d1d9);
  font-weight: 600;
}
.vs-ext-view :deep(.vs-ext-demo-info) {
  color: var(--dsh-fg-weak, #8b949e);
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  word-break: break-all;
  max-width: 100%;
}
.vs-ext-view :deep(.vs-ext-demo-tip) {
  color: var(--dsh-fg-muted, #6e7681);
  font-size: calc(11px * var(--dsh-fs-scale, 1));
}
/* ── 内容区：当前视图（树 / 搜索 / Git 记录） ── */
.vs-left-main {
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
/* 目录树 / 搜索 / Git 视图占满左侧内容区 */
.vs-left-main :deep(.vs-tree) {
  flex: 1 1 auto;
  min-height: 0;
  height: auto;
}
/* Git 提交记录视图化：占满内容区（原本是左栏底部限高 260px 的横条） */
.vs-left-main :deep(.vs-git-view.vs-gitbar) {
  flex: 1 1 auto;
  max-height: none;
  border-top: none;
}
/* 非 Git/SVN 仓库时的空态：占满内容区垂直居中 */
.vs-git-empty {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* 右栏折叠后的展开把手：骑在左栏右缘中部的竖条按钮 */.vs-unfold-handle {
  position: relative;
  z-index: 6;
  flex: 0 0 auto;
  align-self: center;
  width: 14px;
  height: 56px;
  margin-left: -7px;
  margin-right: -7px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 7px;
  background: var(--dsh-bg2, #161b22);
  color: var(--dsh-fg-weak, #8b949e);
  cursor: pointer;
  transition: background 0.12s, color 0.12s;
}
.vs-unfold-handle:hover {
  background: var(--dsh-hover, rgba(255, 255, 255, 0.08));
  color: var(--dsh-accent, #2f81f7);
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
  background: var(--dsh-accent, #2f81f7);
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
  color: var(--dsh-danger, #f85149);
}
/* 空态：大图标 + 主标题 + 副提示 + 操作按钮组（用户没打开文件时看得最久的界面） */
.vs-empty-ico {
  color: var(--dsh-fg-muted, #6e7681);
  opacity: 0.8;
}
.vs-empty-title {
  color: var(--dsh-fg, #c9d1d9);
  font-size: calc(15px * var(--dsh-fs-scale, 1));
  font-weight: 600;
}
.vs-empty-actions {
  display: flex;
  gap: 8px;
  margin-top: 4px;
}
/*
 * 打开文件的加载动画：内容到位前编辑器区域是空的，只给文字会像「卡住了」。
 * 取色与全局 `.fw-loading` 一致（边框用弱色、顶边用强调色），尺寸放大到适配整块空白区。
 */
.vs-loading-spin {
  width: 22px;
  height: 22px;
  flex: 0 0 auto;
  border: 2px solid var(--dsh-border, #30363d);
  border-top-color: var(--dsh-accent, #2f81f7);
  border-radius: 50%;
  box-sizing: border-box;
  animation: vs-loading-spin 0.7s linear infinite;
}
@keyframes vs-loading-spin {
  to {
    transform: rotate(360deg);
  }
}
.vs-status {
  display: flex;
  align-items: center;
  height: 24px;
  padding: 0 6px;
  background: var(--dsh-bg2, #161b22);
  border-top: 1px solid var(--dsh-border, #30363d);
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  color: var(--dsh-fg-weak, #8b949e);
}
.vs-status-readonly {
  color: var(--dsh-warn, #d29922);
  padding: 0 4px;
}
/* 外部改动冲突徽标：可点击（选择以磁盘版本覆盖本地改动） */
.vs-status-conflict {
  height: 18px;
  padding: 0 7px;
  margin-left: 6px;
  border: 1px solid var(--dsh-warn, #d29922);
  border-radius: 9px;
  background: transparent;
  color: var(--dsh-warn, #d29922);
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  cursor: pointer;
  transition: background 0.12s;
}
.vs-status-conflict:hover {
  background: color-mix(in srgb, var(--dsh-warn, #d29922) 14%, transparent);
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
  background: var(--dsh-hover, rgba(255, 255, 255, 0.08));
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
