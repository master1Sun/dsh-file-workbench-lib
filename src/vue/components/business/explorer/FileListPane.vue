<template>
  <div class="fw-fl" @keydown="onKeyNav">
    <!-- 隐藏文件选择框：右键“上传文件”触发 -->
    <input ref="fileInputRef" type="file" multiple class="fw-hidden-input" @change="onFileInputChange" />
    <!-- 顶部：快速筛选（多选操作条已移除，操作统一走命令栏/右键菜单） -->
    <div v-if="explorer.listing && !explorer.loadErr" class="fw-fl-tool">
      <el-input
        v-model="filterText"
        size="small"
        clearable
        :placeholder="t('filterPlaceholder')"
        class="fw-filter"
      >
        <template #prefix><icon name="search" :size="14" class="fw-search-ico" /></template>
      </el-input>
    </div>

    <div v-if="explorer.loadErr" class="fw-err">{{ explorer.loadErr }}</div>
    <div v-else-if="explorer.listing" ref="wrapRef" class="fw-table-wrap" tabindex="0" @scroll="v.onScroll" @click="onWrapClick" @contextmenu.prevent="onBlankCtx" @dragover.prevent="dragOverBody" @drop.prevent="dropMove($event, null)" @mousedown="onWrapMouseDown">
      <!-- 拉框多选的半透明选择框 -->
      <div v-if="bandBox" class="fw-band" :style="{ left: bandBox.x + 'px', top: bandBox.y + 'px', width: bandBox.w + 'px', height: bandBox.h + 'px' }"></div>
      <!-- 详细信息（默认） -->
      <table v-if="viewMode === 'details'" class="fw-table">
        <thead>
          <tr>
            <th class="col-name" :class="{ active: sortKey === 'name' }" :style="colW('name')" @click="setSort('name')">
              {{ t('colName') }}<span v-if="sortKey === 'name'" class="fw-sort">{{ asc ? '▲' : '▼' }}</span>
              <span class="fw-col-resize" :class="{ on: resizeCol === 'name' }" @mousedown.prevent.stop="startResize($event, 'name')" @click.stop></span>
            </th>
            <th class="col-size" :class="{ active: sortKey === 'size' }" :style="colW('size')" @click="setSort('size')">
              {{ t('colSize') }}<span v-if="sortKey === 'size'" class="fw-sort">{{ asc ? '▲' : '▼' }}</span>
              <span class="fw-col-resize" :class="{ on: resizeCol === 'size' }" @mousedown.prevent.stop="startResize($event, 'size')" @click.stop></span>
            </th>
            <th class="col-type" :class="{ active: sortKey === 'type' }" :style="colW('type')" @click="setSort('type')">
              {{ t('colType') }}<span v-if="sortKey === 'type'" class="fw-sort">{{ asc ? '▲' : '▼' }}</span>
              <span class="fw-col-resize" :class="{ on: resizeCol === 'type' }" @mousedown.prevent.stop="startResize($event, 'type')" @click.stop></span>
            </th>
            <th class="col-mtime" :class="{ active: sortKey === 'mtime' }" @click="setSort('mtime')">
              {{ t('colModified') }}<span v-if="sortKey === 'mtime'" class="fw-sort">{{ asc ? '▲' : '▼' }}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="v.range.value.padBefore" class="fw-vspacer"><td :colspan="4" :style="{ height: v.range.value.padBefore + 'px' }"></td></tr>
          <tr
            v-for="e in visibleRows"
            :key="e.path"
            class="fw-row"
            :data-path="e.path"
            :class="{ 'is-dir': e.isDir, hidden: e.hidden, broken: e.broken, selected: isSel(e) }"
            :title="rowTitle(e)"
            :draggable="!inRecycle"
            @mouseenter="hoverEntry(e)"
            @mouseleave="hoverClear(e)"
            @dragstart="dragStart($event, e)"
            @dragover.prevent="e.isDir && dragOver(e.path)"
            @drop.prevent.stop="e.isDir && dropMove($event, e.path)"
            @click="onRowClick($event, e)"
            @dblclick="onRowDblClick($event, e)"
            @contextmenu.prevent.stop="onFileCtx($event, e)"
          >
            <td class="col-name">
              <span class="fw-n">
                <span class="fw-ico"><icon :name="e.isDir ? 'folder' : 'file'" :size="13" /></span>
                <span class="fw-label">{{ dispName(e) }}</span>
                <span v-if="gitBadge(e)" class="fw-git-badge" :class="'st-' + gitBadge(e)" :title="gitBadgeTitle(e)"><icon name="git" :size="10" />{{ gitBadgeLabel(e) }}</span>
                <span v-if="e.hidden" class="fw-weak">●</span>
                <span v-if="e.broken" class="fw-broken-tag" :title="t('brokenLink')">broken</span>
              </span>
            </td>
            <td class="col-size">{{ formatSize(e) }}</td>
            <td class="col-type">{{ typeOf(e) }}</td>
            <td class="col-mtime">{{ formatDate(e) }}</td>
          </tr>
          <tr v-if="v.range.value.padAfter" class="fw-vspacer"><td :colspan="4" :style="{ height: v.range.value.padAfter + 'px' }"></td></tr>
          <tr v-if="explorer.listing.inaccessible">
            <td :colspan="4" class="fw-empty-cell fw-inaccessible">{{ explorer.listing.inaccessible }}</td>
          </tr>
          <tr v-else-if="!filteredRows.length">
            <td :colspan="4" class="fw-empty-cell">{{ emptyMsg }}</td>
          </tr>
        </tbody>
      </table>

      <!-- 列表 -->
      <div v-else-if="viewMode === 'list'" class="fw-mode fw-list" :style="{ paddingTop: v.range.value.padBefore + 'px', paddingBottom: v.range.value.padAfter + 'px' }">
        <div
          v-for="e in visibleRows"
          :key="e.path"
          class="fw-list-row"
          :data-path="e.path"
          :class="{ 'is-dir': e.isDir, hidden: e.hidden, broken: e.broken, selected: isSel(e) }"
          :title="rowTitle(e)"
          :draggable="!inRecycle"
          @mouseenter="hoverEntry(e)"
          @mouseleave="hoverClear(e)"
          @dragstart="dragStart($event, e)"
          @dragover.prevent="e.isDir && dragOver(e.path)"
          @drop.prevent.stop="e.isDir && dropMove($event, e.path)"
          @click="onRowClick($event, e)"
          @dblclick="onRowDblClick($event, e)"
          @contextmenu.prevent.stop="onFileCtx($event, e)"
        >
          <span class="fw-ico"><icon :name="e.isDir ? 'folder' : 'file'" :size="14" /></span>
          <span class="fw-list-name">{{ dispName(e) }}</span>
          <span v-if="gitBadge(e)" class="fw-git-badge" :class="'st-' + gitBadge(e)" :title="gitBadgeTitle(e)"><icon name="git" :size="10" />{{ gitBadgeLabel(e) }}</span>
          <span v-if="e.broken" class="fw-broken-tag" :title="t('brokenLink')">broken</span>
        </div>
        <div v-if="explorer.listing.inaccessible || !filteredRows.length" class="fw-empty-cell" :class="{ 'fw-inaccessible': !!explorer.listing.inaccessible }">
          {{ emptyMsg }}
        </div>
      </div>

      <!-- 图标（超大/大/中/小：平铺网格，图标尺寸随档位变化） -->
      <div v-else-if="viewMode === 'grid'" class="fw-mode fw-grid" :class="'fw-grid-' + view">
        <div
          v-for="e in filteredRows"
          :key="e.path"
          class="fw-tile"
          :data-path="e.path"
          :class="{ 'is-dir': e.isDir, hidden: e.hidden, selected: isSel(e) }"
          :title="rowTitle(e)"
          :draggable="!inRecycle"
          @mouseenter="hoverEntry(e)"
          @mouseleave="hoverClear(e)"
          @dragstart="dragStart($event, e)"
          @dragover.prevent="e.isDir && dragOver(e.path)"
          @drop.prevent.stop="e.isDir && dropMove($event, e.path)"
          @click="onRowClick($event, e)"
          @dblclick="onRowDblClick($event, e)"
          @contextmenu.prevent.stop="onFileCtx($event, e)"
        >
          <template v-if="isImage(e)">
            <span class="fw-tile-thumb">
              <img :src="thumbHref(e.path)" :alt="e.name" loading="lazy" draggable="false" />
            </span>
          </template>
          <span v-else class="fw-tile-ico"><icon :name="e.isDir ? 'folder' : 'file'" :size="gridIcon" /></span>
          <span class="fw-tile-name">{{ dispName(e) }}<span v-if="gitBadge(e)" class="fw-git-badge" :class="'st-' + gitBadge(e)" :title="gitBadgeTitle(e)"><icon name="git" :size="10" />{{ gitBadgeLabel(e) }}</span></span>
        </div>
        <div v-if="explorer.listing.inaccessible || !filteredRows.length" class="fw-empty-cell" :class="{ 'fw-inaccessible': !!explorer.listing.inaccessible }">
          {{ emptyMsg }}
        </div>
      </div>

      <!-- 内容视图：名称 + 类型两行居左，修改日期/大小两行居右（Win11 对齐） -->
      <div v-else-if="viewMode === 'content'" class="fw-mode fw-content">
        <div
          v-for="e in filteredRows"
          :key="e.path"
          class="fw-content-row"
          :data-path="e.path"
          :class="{ 'is-dir': e.isDir, hidden: e.hidden, selected: isSel(e) }"
          :title="rowTitle(e)"
          :draggable="!inRecycle"
          @mouseenter="hoverEntry(e)"
          @mouseleave="hoverClear(e)"
          @dragstart="dragStart($event, e)"
          @dragover.prevent="e.isDir && dragOver(e.path)"
          @drop.prevent.stop="e.isDir && dropMove($event, e.path)"
          @click="onRowClick($event, e)"
          @dblclick="onRowDblClick($event, e)"
          @contextmenu.prevent.stop="onFileCtx($event, e)"
        >
          <span class="fw-ico"><icon :name="e.isDir ? 'folder' : 'file'" :size="20" /></span>
          <span class="fw-c-main">
            <span class="fw-c-name">{{ dispName(e) }}<span v-if="e.broken" class="fw-broken-tag">broken</span></span>
            <span class="fw-c-type">{{ t('colType') }}: {{ typeOf(e) }}</span>
          </span>
          <span class="fw-c-meta">
            <span>{{ t('colModified') }}: {{ formatDate(e) }}</span>
            <span>{{ t('colSize') }}: {{ e.isDir ? '' : formatSize(e) }}</span>
          </span>
        </div>
        <div v-if="explorer.listing.inaccessible || !filteredRows.length" class="fw-empty-cell" :class="{ 'fw-inaccessible': !!explorer.listing.inaccessible }">
          {{ emptyMsg }}
        </div>
      </div>

      <!-- 平铺视图：图标居左，名称/类型/大小三行居右（Win7 平铺风格） -->
      <div v-else-if="viewMode === 'tiles'" class="fw-mode fw-tiles">
        <div
          v-for="e in filteredRows"
          :key="e.path"
          class="fw-tile2"
          :data-path="e.path"
          :class="{ 'is-dir': e.isDir, hidden: e.hidden, selected: isSel(e) }"
          :title="rowTitle(e)"
          :draggable="!inRecycle"
          @mouseenter="hoverEntry(e)"
          @mouseleave="hoverClear(e)"
          @dragstart="dragStart($event, e)"
          @dragover.prevent="e.isDir && dragOver(e.path)"
          @drop.prevent.stop="e.isDir && dropMove($event, e.path)"
          @click="onRowClick($event, e)"
          @dblclick="onRowDblClick($event, e)"
          @contextmenu.prevent.stop="onFileCtx($event, e)"
        >
          <template v-if="isImage(e)">
            <span class="fw-tile-thumb"><img :src="thumbHref(e.path)" :alt="e.name" loading="lazy" draggable="false" /></span>
          </template>
          <span v-else class="fw-tile-ico"><icon :name="e.isDir ? 'folder' : 'file'" :size="34" /></span>
          <span class="fw-t2-body">
            <span class="fw-t2-name">{{ dispName(e) }}</span>
            <span class="fw-t2-type">{{ typeOf(e) }}</span>
            <span class="fw-t2-size">{{ e.isDir ? '' : formatSize(e) }}</span>
          </span>
        </div>
        <div v-if="explorer.listing.inaccessible || !filteredRows.length" class="fw-empty-cell" :class="{ 'fw-inaccessible': !!explorer.listing.inaccessible }">
          {{ emptyMsg }}
        </div>
      </div>

      <div v-if="explorer.listing.truncated" class="fw-empty-small">{{ t('resultsSuffixTruncated') }}</div>
    </div>

    <!-- 刷新/加载动画：遮罩 + 居中旋转指示器 -->
    <div v-if="explorer.loading" class="fw-refreshing">
      <div class="fw-refreshing-spinner"></div>
    </div>

    <!-- 底部信息（项目数 / 选中数 · 状态文本 + 视图切换按钮）已并入最底部 footer：
         列表只往 listStatus 写状态，由 explorer/StatusBar.vue 统一渲染，
         避免「列表内底栏 + 全局底栏」上下两条重复占用高度。
         （见 composables/session/listStatus.ts） -->

    <!-- 右键菜单 -->
    <ContextMenu v-if="cmOpen" :items="cmItems" :x="cmX" :y="cmY" @close="cmOpen = false" />

    <!-- 属性对话框 -->
    <el-dialog
      v-model="propOpen"
      class="fw-prop-dialog"
      :title="t('menuProperties')"
      width="420px"
      :close-on-click-modal="false"
    >
      <div v-if="propData" class="fw-prop-body">
        <div class="fw-prop-row"><span class="k">{{ t('propName') }}</span><span class="v">{{ propData.name }}</span></div>
        <div class="fw-prop-row"><span class="k">{{ t('propPath') }}</span><span class="v">{{ propData.path }}</span></div>
        <div class="fw-prop-row"><span class="k">{{ t('propKind') }}</span><span class="v">{{ propData.isDir ? t('typeFolder') : (propData.ext || t('typeFile')) }}</span></div>
        <div class="fw-prop-row"><span class="k">{{ t('propSize') }}</span><span class="v">{{ formatSize({ isDir: propData.isDir, size: propData.size }) }}</span></div>
        <div class="fw-prop-row"><span class="k">{{ t('propModified') }}</span><span class="v">{{ formatDate({ mtime: propData.mtime }) }}</span></div>
      </div>
      <template #footer>
        <el-button type="primary" @click="propOpen = false">{{ t('confirmOk') }}</el-button>
      </template>
    </el-dialog>

    <!-- Git 改动对话框 -->
    <el-dialog
      v-model="gitDiffOpen"
      class="fw-gitdiff-dialog"
      :title="t('gitDiffTitle')"
      width="680px"
      :close-on-click-modal="false"
    >
      <pre class="fw-gitdiff-body">{{ gitDiffText || t('gitDiffEmpty') }}</pre>
      <template #footer>
        <el-button type="primary" @click="gitDiffOpen = false">{{ t('gitDiffClose') }}</el-button>
      </template>
    </el-dialog>

    <!-- Git 面板 -->
    <!-- Git 快捷提交 / 管理面板：回收站是虚拟视图（占位「路径」非绝对路径），传空目录
         避免其 dir watcher 拿占位值请求 git 接口报「不是绝对路径」 -->
    <QuickCommit v-model="quickCommitOpen" :dir="inRecycle ? '' : explorer.listing?.path ?? ''" @done="refreshGitStatus(explorer.listing?.path ?? '')" />

    <!-- Git 管理面板（完整 Git 能力：状态/分支/暂存/命令台） -->
    <GitPanel v-model="gitPanelOpen" :dir="inRecycle ? '' : explorer.listing?.path ?? ''" />
    <SvnPanel v-model="svnPanelOpen" :dir="inRecycle ? '' : explorer.listing?.path ?? ''" />

    <!-- 文本编辑器（.txt 编辑 / 保存） -->
    <TxtEditor v-model="txtEditorOpen" :path="txtEditorPath" @saved="onTxtSaved" />
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch, watchEffect } from "vue";
import * as api from "../../../composables/core/useApi";
import { thumbHref } from "../../../composables/core/useApi";
import { explorer, browseTo, goBack, goForward, goUp, refreshListing, refreshRecycle } from "../../../stores/explorer";
import { wb, toast, openPreview, canOperatePath, openTerminal } from "../../../stores/workbench";
import { useI18n } from "../../../composables/core/i18n";
import { dragPath } from "../../../composables/ui/dnd";
import { copyPaths, cutPaths, clearClipboard, clipboardHas, clipboardOf } from "../../../composables/ui/clipboard";
import { confirmDialog, promptDialog } from "../../../composables/core/dialog";
import { listStatus, setListViewSwitcher, resetListStatus } from "../../../composables/session/listStatus";
import {
  prefs,
  savePrefs,
  toggleFavorite,
  isFavorite,
  getFolderView,
  setFolderView,
  activeView,
} from "../../../composables/core/settings";
import { gitInRepo, gitStatusOf, refreshGitStatus } from "../../../composables/domain/git";
import { refreshSvnStatus } from "../../../composables/domain/svn";
import {
  gitMenuFor as gitMenuForShared,
  svnMenuFor as svnMenuForShared,
  type RepoMenuActions,
} from "../../../composables/domain/repoMenu";
import ContextMenu from "../../common/ContextMenu.vue";
import Icon from "../../common/Icon.vue";
import QuickCommit from "../git/QuickCommit.vue";
import GitPanel from "../git/GitPanel.vue";
import SvnPanel from "../git/SvnPanel.vue";
import TxtEditor from "./TxtEditor.vue";
import { useUniformVirtual } from "../../../composables/ui/virtual";
import { startTask } from "../../../composables/session/tasks";
import { sessionSse } from "../../../composables/session/sessionSse";
import { fileExtType } from "../../../composables/core/fileTaskMeta";
import type { FsEntry, FileDetail, GitFileStatus, MenuItem, ViewMode } from "../../../../shared/types";
import type { Prefs } from "../../../composables/core/settings";
import { fileCmdState, setFileCmdRunner } from "../../../stores/fileCommands";

const { t } = useI18n();

/** 是否处于回收站视图（操作走回收站语义：还原 / 永久删除 / 清空）。 */
const inRecycle = computed(() => explorer.view === "recycle");

type SortKey = "name" | "size" | "type" | "mtime";
const sortKey = ref<SortKey>(prefs.sortKey);
const asc = ref(prefs.asc);
/** 详情视图固定列最小宽度（px）。 */
const MIN_COL_W = 40;
/** 当前正在拖拽调整宽度的列；null 表示未在拖拽。 */
const resizeCol = ref<"name" | "size" | "type" | null>(null);
let resizeStartX = 0;
let resizeStartW = 0;

/** 详情视图左边三列宽内联样式；mtime 列不加宽（自动填充剩余空间）。 */
function colW(col: "name" | "size" | "type"): Record<string, string> {
  return { width: `${prefs.colWidths[col]}px` };
}

function startResize(e: MouseEvent, col: "name" | "size" | "type"): void {
  resizeCol.value = col;
  resizeStartX = e.clientX;
  resizeStartW = prefs.colWidths[col];
  document.addEventListener("mousemove", onResizeMove);
  document.addEventListener("mouseup", onResizeEnd);
}

function onResizeMove(e: MouseEvent): void {
  const col = resizeCol.value;
  if (!col) return;
  prefs.colWidths[col] = Math.max(MIN_COL_W, resizeStartW + (e.clientX - resizeStartX));
}

function onResizeEnd(): void {
  if (resizeCol.value) savePrefs();
  resizeCol.value = null;
  document.removeEventListener("mousemove", onResizeMove);
  document.removeEventListener("mouseup", onResizeEnd);
}

onBeforeUnmount(() => {
  document.removeEventListener("mousemove", onResizeMove);
  document.removeEventListener("mouseup", onResizeEnd);
});
/** Windows 查看选项（“查看”子菜单的实际选中项，Win11 全档位）。 */
type ViewOption = Prefs["view"];
/**
 * 当前区域在「按目录视图记忆」里的键：回收站为 `recycle`，其余为目录绝对路径。
 * 切视图只写当前键（Win11 行为：每个文件夹各记各的），全局同步只在设置里改默认视图时发生。
 */
const viewKey = computed(() => (inRecycle.value ? "recycle" : (explorer.listing?.path ?? "")));
const view = ref<ViewOption>(getFolderView(viewKey.value));
/** 由查看选项派生出的渲染模式：图标档位 → 网格；内容/平铺 → 独立视图。 */
const viewMode = computed<ViewMode>(() => {
  const v = view.value;
  if (v === "huge" || v === "large" || v === "medium" || v === "small") return "grid";
  if (v === "content" || v === "tiles") return v;
  return v;
});
/** 图标档位对应的图标尺寸（px）。 */
const gridIcon = computed(() => {
  const v = view.value;
  return v === "small" ? 20 : v === "medium" ? 32 : v === "large" ? 48 : 72;
});
// 设置面板「默认视图」保存后，实时同步到当前打开的列表（而非等到重挂载）。
// 设置里改默认视图会先清空按目录记忆（resetFolderViews），故此处等价于「同步全部」。
watch(
  () => prefs.view,
  (v) => {
    if (view.value !== v) view.value = v;
  },
);
// 切换目录/区域时载入该区域自己记住的查看方式；未记过则跟随全局默认。
watch(viewKey, (key) => {
  const remembered = getFolderView(key);
  if (view.value !== remembered) view.value = remembered;
});
// 同步给命令栏等外部面板显示 ✓（它们读的是「当前生效视图」而非全局默认）。
watch(view, (v) => (activeView.value = v), { immediate: true });
// 持久化的排序方式/方向异步回填到 prefs 后，同步到本组件局部状态（与视图同步一致）。
watch(
  () => prefs.sortKey,
  (v) => {
    if (sortKey.value !== v) sortKey.value = v;
  },
);
watch(
  () => prefs.asc,
  (v) => {
    if (asc.value !== v) asc.value = v;
  },
);

const cmOpen = ref(false);
const cmX = ref(0);
const cmY = ref(0);
const cmItems = ref<MenuItem[]>([]);
const propOpen = ref(false);
const propData = ref<FileDetail | null>(null);
const gitDiffOpen = ref(false);
const gitDiffText = ref("");
const quickCommitOpen = ref(false);
const gitPanelOpen = ref(false);
const svnPanelOpen = ref(false);
/** 文本编辑器（.txt 编辑 / 保存）状态。 */
const txtEditorOpen = ref(false);
const txtEditorPath = ref("");
function openTxtEditor(path: string): void {
  txtEditorPath.value = path;
  txtEditorOpen.value = true;
}
/** 文本编辑器保存成功后刷新列表（更新大小 / 修改时间）。 */
function onTxtSaved(): void {
  void refreshListing();
}

function setSort(key: SortKey): void {
  if (sortKey.value === key) asc.value = !asc.value;
  else {
    sortKey.value = key;
    asc.value = key !== "mtime";
  }
  prefs.sortKey = sortKey.value;
  prefs.asc = asc.value;
  savePrefs();
}

/** 类型列/内容视图的类型标签：目录为“文件夹”，文件按扩展名（如 “JSON 文件”），与 Win11 一致。 */
function typeOf(e: FsEntry): string {
  if (e.isDir) return t("typeFolder");
  const i = e.name.lastIndexOf(".");
  const ext = i > 0 ? e.name.slice(i + 1).toUpperCase() : "";
  return ext ? `${ext} ${t("typeFile")}` : t("typeFile");
}

/** 判断是否为浏览器可直接内联渲染的图片文件（栅格视图显示缩略图）。 */
const IMG_EXT = /\.(png|jpe?g|gif|svg|webp|bmp|ico|avif)$/i;
function isImage(e: FsEntry): boolean {
  return !e.isDir && IMG_EXT.test(e.name);
}

/** 展示名：按「显示文件扩展名」开关决定是否隐藏扩展名（目录恒显示全名）。 */
function dispName(e: FsEntry): string {
  if (prefs.showExtensions || e.isDir) return e.name;
  const i = e.name.lastIndexOf(".");
  return i > 0 ? e.name.slice(0, i) : e.name;
}

function formatSize(e: { isDir?: boolean; size?: number }): string {  if (e.isDir) return "";
  const n = e.size;
  if (n === undefined) return "—";
  const units = ["B", "KB", "MB", "GB", "TB"];
  let v = n;
  let i = 0;
  while (v >= 1024 && i < units.length - 1) {
    v /= 1024;
    i += 1;
  }
  return `${i === 0 ? v : v >= 10 ? Math.round(v) : v.toFixed(1)} ${units[i]}`;
}

function formatDate(e: { mtime?: number }): string {
  if (e.mtime === undefined) return "";
  try {
    return new Date(e.mtime).toLocaleString(undefined, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return new Date(e.mtime).toLocaleString();
  }
}

// —— 文件对比（diff）提示：标记已加入对比的条目，hover 显示与谁对比 ——
/** hover 提示：条目完整路径（悬停时在 title 展示，与 Win11 一致）。 */
function rowTitle(e: FsEntry): string {
  return e.path;
}

// —— Git 状态徽标（角标：? 未跟踪 / A 新增 / M 修改 / D 删除） ——
const GIT_LABEL: Record<GitFileStatus, string> = {
  "": "",
  untracked: "?",
  added: "A",
  modified: "M",
  deleted: "D",
};
function gitBadge(e: FsEntry): GitFileStatus {
  return gitStatusOf(explorer.listing?.path ?? "", e.name);
}
function gitBadgeLabel(e: FsEntry): string {
  return GIT_LABEL[gitBadge(e)];
}
function gitBadgeTitle(e: FsEntry): string {
  const st = gitBadge(e);
  return st === "untracked"
    ? t("gitBadgeUntracked")
    : st === "added"
      ? t("gitBadgeAdded")
      : st === "deleted"
        ? t("gitBadgeDeleted")
        : st === "modified"
          ? t("gitBadgeModified")
          : "";
}

/** 详情行：目录始终在前，组内按当前列升/降序。 */
const sorted = computed<FsEntry[]>(() => {
  const rows = [...(explorer.listing?.entries ?? [])];
  const cmp: Record<SortKey, (a: FsEntry, b: FsEntry) => number> = {
    name: (a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }),
    size: (a, b) => (a.size ?? -1) - (b.size ?? -1),
    type: (a, b) => {
      const t2 = (x: FsEntry) => (x.isDir ? "0-folder" : x.name.slice(x.name.lastIndexOf(".")).toLowerCase());
      return (typeOf(a) + t2(a)).localeCompare(typeOf(b) + t2(b));
    },
    mtime: (a, b) => (a.mtime ?? 0) - (b.mtime ?? 0),
  };
  rows.sort((a, b) => {
    if (a.isDir !== b.isDir) return a.isDir ? -1 : 1;
    let r = cmp[sortKey.value](a, b);
    if (r === 0) r = a.name.localeCompare(b.name, undefined, { sensitivity: "base" });
    if (!asc.value) r = -r;
    return r;
  });
  return rows;
});

/** 排序后，再按快速筛选词 + 隐藏文件开关过滤。 */
const filterText = ref("");
const filteredRows = computed<FsEntry[]>(() => {
  const kw = filterText.value.trim().toLowerCase();
  return sorted.value.filter((e) => {
    if (!prefs.showHidden && e.hidden) return false;
    if (!kw) return true;
    return e.name.toLowerCase().includes(kw);
  });
});
/** 空态文案：优先不可访问提示，其次筛选无匹配，最后空目录 / 空回收站。 */
const emptyMsg = computed(() =>
  explorer.listing?.inaccessible
    ? explorer.listing.inaccessible
    : filteredRows.value.length === 0 && filterText.value
      ? t("filterEmpty")
      : inRecycle.value
        ? t("recycleEmptyList")
        : t("emptyDir"),
);

// —— 虚拟滚动（详情/列表视图：等行高） ——
const wrapRef = ref<HTMLElement | null>(null);
/** 隐藏文件选择框（右键“上传文件”触发）。 */
const fileInputRef = ref<HTMLInputElement | null>(null);
function pickUpload(): void {
  fileInputRef.value?.click();
}
/** 选择文件后上传到当前目录（清空 value 允许重复选同一文件）。 */
async function onFileInputChange(e: Event): Promise<void> {
  const input = e.target as HTMLInputElement;
  const files = input.files;
  if (files?.length && explorer.listing) {
    await uploadDropped(files, explorer.listing.path);
  }
  input.value = "";
}
/** 表格/列表单行估算高度（px）。 */
const ROW_H = 28;
const rowCount = computed(() => filteredRows.value.length);
const v = useUniformVirtual(wrapRef, rowCount, ROW_H);
/** 当前窗口内需实际渲染的行。 */
const visibleRows = computed(() =>
  filteredRows.value.slice(v.range.value.start, v.range.value.end),
);
// 切换目录时回到顶部
watch(
  () => explorer.listing?.path,
  () => {
    if (wrapRef.value) wrapRef.value.scrollTop = 0;
  },
);
// 切换目录时刷新 git 状态（徽标）；回收站是虚拟位置，没有 git 语义，跳过查询。
watch(
  () => explorer.listing?.path,
  (p) => {
    if (p && !inRecycle.value) {
      void refreshGitStatus(p);
      void refreshSvnStatus(p);
    }
  },
  { immediate: true },
);

// —— 选中与多选（对齐「我的电脑」：单击选中、Ctrl/Cmd 增选、Shift 范围选择、双击打开、空白处取消、键盘导航） ——
const multiSel = ref<Set<string>>(new Set());
/** 多选中是否有任一项位于工作区外（写操作需整体禁用）。 */
/** 单选高亮路径（单击选中；双击下钻/打开）。 */
const currentSel = ref("");
/** Shift 范围选择的锚点（上一次普通/增选点击的条目）。 */
const anchorPath = ref("");

function onRowClick(e: MouseEvent, entry: FsEntry): void {
  // Shift：范围选择，高亮从锚点到当前项之间的所有条目
  if (e.shiftKey && anchorPath.value) {
    const paths = filteredRows.value.map((x) => x.path);
    const a = paths.indexOf(anchorPath.value);
    const b = paths.indexOf(entry.path);
    if (a !== -1 && b !== -1) {
      const [lo, hi] = a < b ? [a, b] : [b, a];
      const s = new Set<string>();
      for (let i = lo; i <= hi; i++) s.add(paths[i]);
      multiSel.value = s;
    }
    currentSel.value = entry.path;
    return;
  }
  // Ctrl/Cmd：在现有选择内切换该条目（取消的项不保留高亮），锚点用于后续 Shift
  if (e.ctrlKey || e.metaKey) {
    const s = new Set(multiSel.value);
    const had = s.has(entry.path);
    if (had) s.delete(entry.path);
    else s.add(entry.path);
    multiSel.value = s;
    anchorPath.value = entry.path;
    currentSel.value = had ? "" : entry.path;
    return;
  }
  // 普通单击：仅选中该条目（高亮），双击才打开；清掉多选并更新锚点
  multiSel.value = new Set();
  currentSel.value = entry.path;
  anchorPath.value = entry.path;
}

/** 双击：先确保选中该项，随后下钻 / 打开。 */
function onRowDblClick(_e: MouseEvent, entry: FsEntry): void {
  multiSel.value = new Set();
  currentSel.value = entry.path;
  anchorPath.value = entry.path;
  void open(entry);
}

function clearSel(): void {
  multiSel.value = new Set();
  currentSel.value = "";
  anchorPath.value = "";
}

/** 点击列表空白处：取消全部选中（点击条目/表头/多选工具条不触发）。 */
function onWrapClick(e: MouseEvent): void {
  // 点击列表任意处都让列表容器获得焦点，保证后续键盘快捷键可用。
  wrapRef.value?.focus({ preventScroll: true });
  if (bandJustEnded) return;
  const t = e.target as HTMLElement;
  if (t.closest(".fw-row, .fw-list-row, .fw-tile, .fw-content-row, .fw-tile2, th")) return;
  clearSel();
}

// —— 鼠标拉框多选（Win11 对齐）：空白处按下左键拖动，框选命中的条目 ——
const bandBox = ref<{ x: number; y: number; w: number; h: number } | null>(null);
let bandStart: { x: number; y: number } | null = null;
let bandJustEnded = false;

function onWrapMouseDown(e: MouseEvent): void {
  if (e.button !== 0 || !explorer.listing) return;
  const t = e.target as HTMLElement;
  if (t.closest(".fw-row, .fw-list-row, .fw-tile, .fw-content-row, .fw-tile2, th, input, textarea")) return;
  bandStart = { x: e.clientX, y: e.clientY };
  window.addEventListener("mousemove", onBandMove);
  window.addEventListener("mouseup", onBandUp, { once: true });
}
function onBandMove(e: MouseEvent): void {
  if (!bandStart || !wrapRef.value) return;
  const rect = wrapRef.value.getBoundingClientRect();
  const x1 = Math.min(bandStart.x, e.clientX);
  const y1 = Math.min(bandStart.y, e.clientY);
  const x2 = Math.max(bandStart.x, e.clientX);
  const y2 = Math.max(bandStart.y, e.clientY);
  bandBox.value = { x: x1 - rect.left, y: y1 - rect.top, w: x2 - x1, h: y2 - y1 };
  const sel = new Set<string>();
  wrapRef.value.querySelectorAll<HTMLElement>("[data-path]").forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.left < x2 && r.right > x1 && r.top < y2 && r.bottom > y1) sel.add(el.dataset.path ?? "");
  });
  sel.delete("");
  multiSel.value = sel;
  currentSel.value = "";
}
function onBandUp(): void {
  if (!bandStart) return;
  bandStart = null;
  bandBox.value = null;
  window.removeEventListener("mousemove", onBandMove);
  // 抑制随后的 click 事件把刚框选的选中集清空
  bandJustEnded = true;
  setTimeout(() => { bandJustEnded = false; }, 0);
}

/** 键盘导航（列表区任意焦点内）：与 Windows 资源管理器一致的快捷键。 */
function onKeyNav(e: KeyboardEvent): void {
  // 输入框/文本域内按键（如 Backspace 删字）不应触发文件快捷键。
  const tgt = e.target as HTMLElement | null;
  if (tgt?.closest("input, textarea, select, [contenteditable='true'], .el-input, .el-textarea")) return;
  const rows = filteredRows.value;
  if (!rows.length) return;
  const paths = rows.map((x) => x.path);
  const idxNow = currentSel.value ? paths.indexOf(currentSel.value) : anchorPath.value ? paths.indexOf(anchorPath.value) : -1;

  // 新建文件夹：Ctrl+Shift+N（优先于普通 Ctrl 分支）
  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "n") {
    e.preventDefault();
    void newEntry("folder");
    return;
  }
  // 复制 / 剪切 / 粘贴 / 全选 / 搜索（Ctrl 或 Cmd）
  if (e.ctrlKey || e.metaKey) {
    switch (e.key.toLowerCase()) {
      case "a":
        e.preventDefault();
        multiSel.value = new Set(paths);
        return;
      case "c":
        e.preventDefault();
        if (multiSel.value.size) void multiOp("copy");
        else if (currentSel.value) {
          copyPaths([currentSel.value]);
          toast("ok", t("menuCopyDone"));
        }
        return;
      case "x":
        e.preventDefault();
        if (multiSel.value.size) void multiOp("cut");
        else if (currentSel.value) {
          cutPaths([currentSel.value]);
          toast("ok", t("menuCutDone"));
        }
        return;
      case "v":
        e.preventDefault();
        if (explorer.listing) void doPaste(explorer.listing.path);
        return;
      case "f":
        e.preventDefault();
        focusFilter();
        return;
    }
    return;
  }
  // Alt 组合：上级 / 浏览历史前后
  if (e.altKey) {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      void goUp();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goBack();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goForward();
    }
    return;
  }
  switch (e.key) {
    case "Backspace": // 返回上级
      e.preventDefault();
      void goUp();
      return;
    case "Delete": // 删除（有确认）
      e.preventDefault();
      void doDeleteSel();
      return;
    case "F2": // 重命名
      e.preventDefault();
      void doRenameSel();
      return;
    case "F5": // 刷新
      e.preventDefault();
      if (inRecycle.value) void refreshRecycle();
      else void refreshListing();
      return;
    case "Enter":
      if (idxNow >= 0) void open(rows[idxNow]);
      return;
  }
  let next = idxNow;
  if (e.key === "ArrowDown") { next = idxNow + 1; e.preventDefault(); }
  else if (e.key === "ArrowUp") { next = idxNow - 1; e.preventDefault(); }
  else if (e.key === "Home") { next = 0; e.preventDefault(); }
  else if (e.key === "End") { next = paths.length - 1; e.preventDefault(); }
  else return;
  if (next < 0 || next >= paths.length) return;
  multiSel.value = new Set();
  currentSel.value = paths[next];
  anchorPath.value = paths[next];
  wrapRef.value?.querySelector(".fw-row.selected, .fw-list-row.selected, .fw-tile.selected, .fw-content-row.selected, .fw-tile2.selected")?.scrollIntoView({ block: "nearest" });
}

/** 在当前目录条目里按路径定位（键盘操作基于 currentSel，不受鼠标 hover 影响）。 */
function entryByPath(p: string): FsEntry | null {
  if (!p) return null;
  return (explorer.listing?.entries ?? []).find((x) => x.path === p) ?? null;
}

/** Ctrl+F：聚焦顶部筛选输入框。 */
function focusFilter(): void {
  wrapRef.value?.parentElement?.querySelector<HTMLInputElement>(".fw-filter input")?.focus();
}

/** Delete 删除：多选批量删；单选删当前项（复用右键菜单的确认流程）。 */
function doDeleteSel(): void {
  if (multiSel.value.size) {
    if (inRecycle.value) {
      void recycleDeleteSel([...multiSel.value]);
      return;
    }
    void multiOp("delete");
    return;
  }
  const e = entryByPath(currentSel.value);
  if (e) void remove(e);
}

/** F2 重命名：仅作用于当前单选中的项（多选时忽略，同资源管理器）。 */
function doRenameSel(): void {
  if (inRecycle.value) return; // 回收站不支持重命名
  if (multiSel.value.size) return;
  const e = entryByPath(currentSel.value);
  if (e) void rename(e);
}

/** 是否高亮：处于多选时为多选成员；否则为当前单选项。 */
function isSel(entry: FsEntry): boolean {
  if (multiSel.value.size) return multiSel.value.has(entry.path);
  return entry.path === currentSel.value;
}
// 切换目录时清空选中状态
watch(
  () => explorer.listing?.path,
  () => {
    clearSel();
  },
);

// —— 底部详情栏：hover 优先、其次当前选中项的 类型 / 大小 / 修改时间 / 路径 ——
/** hover 到的条目路径（鼠标悬停即时显示详情，无需选中）。 */
const hoverPath = ref("");
function hoverEntry(e: FsEntry): void {
  hoverPath.value = e.path;
}
function hoverClear(e: FsEntry): void {
  if (hoverPath.value === e.path) hoverPath.value = "";
}

/** 详情目标：hover > 单选项。 */
/** 详情目标：仅点击选中的项（悬停不进底部详情，与 Win11 一致；悬停信息由行 title 提示）。 */
const detailSel = computed(() => currentSel.value);

/** 当前详情目标条目（在当前目录条目里定位）。 */
const selEntry = computed<FsEntry | null>(() => {
  const p = detailSel.value;
  if (!p) return null;
  return (explorer.listing?.entries ?? []).find((x) => x.path === p) ?? null;
});
/** 底部详情文案：显示资源的类型、修改时间与大小。 */
const statusText = computed(() => {
  const e = selEntry.value;
  if (!e) {
    if (!explorer.listing) return "";
    return explorer.listing.path;
  }
  const typeLabel = e.isDir
    ? t("typeFolder")
    : (() => {
        const i = e.name.lastIndexOf(".");
        return i > 0 && i < e.name.length - 1 ? e.name.slice(i) : t("typeFile");
      })();
  let text = typeLabel;
  if (e.mtime !== undefined) text += ` · ${formatDate(e)}`;
  if (!e.isDir && e.size !== undefined) text += ` · ${formatSize(e)}`;
  return text;
});

// —— 拖拽（工作台内移动：拖到目录或空白区 = 剪切+粘贴） ——
let draggingPath = "";
function dragStart(ev: DragEvent, entry: FsEntry): void {
  if (ev.dataTransfer) {
    draggingPath = entry.path;
    dragPath.value = entry.path; // 跨面板兜底通道
    ev.dataTransfer.effectAllowed = "move";
    ev.dataTransfer.setData("text/plain", entry.path);
  }
}
function dragOver(target: string): void {
  if (draggingPath && target !== draggingPath) return;
}
function dragOverBody(): void {
  /* 允许放置到空白区（移动到当前目录） */
}
async function dropMove(ev: DragEvent, destDir: string | null): Promise<void> {
  ev.preventDefault();
  if (inRecycle.value) return; // 回收站内不支持拖放（仅还原 / 永久删除）
  // 拖入的是浏览器外部文件 → 上传到目标目录（空白区=当前目录，目录项=该目录）。
  const files = ev.dataTransfer?.files;
  if (files?.length) {
    const dir = destDir || explorer.listing?.path || "";
    if (dir) await uploadDropped(files, dir);
    return;
  }
  const src = draggingPath;
  draggingPath = "";
  if (!src || !destDir) return;
  const parent = src.slice(0, Math.max(src.lastIndexOf("/"), src.lastIndexOf("\\") + 1));
  if (normalize(parent) === normalize(destDir)) return;
  cutPaths([src]);
  await doPaste(destDir);
}

/** 批量上传外部文件到指定目录（流式直传后端落盘，逐项容错）。 */
async function uploadDropped(files: FileList | File[], dir: string): Promise<void> {
  if (!guardOperable(dir)) return;
  const h = startTask(t("taskUploading"), dir);
  let ok = 0;
  let fail = 0;
  for (const f of Array.from(files)) {
    h.step(t("taskUploading"), f.name, undefined, fileExtType(f.name) || t("typeFile"), f.size);
    try {
      await api.uploadFile(dir, f, wb.key);
      ok += 1;
    } catch {
      fail += 1;
    }
  }
  if (ok) toast("ok", t("uploaded", { count: ok }));
  if (fail) toast("error", t("uploadFailed", { count: fail }));
  if (fail) h.fail(`${t("uploadFailed", { count: fail })}${ok ? `，成功 ${ok}` : ""}`);
  else if (ok) h.done(t("uploaded", { count: ok }));
  await refreshListing();
}
function normalize(p: string): string {
  return p.replace(/[\\/]+/g, "/").replace(/\/+$/, "").toLowerCase();
}

/** 后台任务记录用：由 FsEntry 派生类型名 + 大小（仅文件才有大小）。 */
function entryMeta(e: { isDir: boolean; name: string; size?: number }): { fileType: string; fileSize?: number } {
  return e.isDir
    ? { fileType: t("typeFolder") }
    : { fileType: fileExtType(e.name) || t("typeFile"), fileSize: e.size };
}

/** 后台任务记录用：按路径 stat 一次得到类型名 + 大小（stat 失败时返回空，略过记录）。 */
async function statMeta(p: string): Promise<{ fileType?: string; fileSize?: number }> {
  try {
    const d = await api.detail(p);
    if (d.isDir) return { fileType: t("typeFolder") };
    return { fileType: fileExtType(d.name) || t("typeFile"), fileSize: d.size };
  } catch {
    return {};
  }
}

async function open(e: FsEntry): Promise<void> {
  // 回收站：双击 = 还原到原位置（Win11 行为）。
  if (inRecycle.value) {
    await recycleRestoreSel([e.recycleFullPath ?? e.path]);
    return;
  }
  if (e.isDir) {
    await browseTo(e.path);
    return;
  }
  // 双击 / 打开：一律走之前的查看器（DSH 右侧原生预览）；编辑只在右键「编辑」里进行。
  try {
    await openPreview(e.path);
  } catch (err) {
    toast("error", (err as Error).message);
  }
}

/** 打开位置（弹出菜单）。 */
function openMenu(e: MouseEvent, items: MenuItem[]): void {
  cmItems.value = items;
  cmX.value = e.clientX;
  cmY.value = e.clientY;
  cmOpen.value = true;
}

// —— Git / SVN 操作（右键菜单） ——
// 菜单项构建统一走共享模块 composables/domain/repoMenu，保证与 VS Code 面板的项目树完全一致。
const repoMenuAct: RepoMenuActions = {
  openGitPanel: () => {
    gitPanelOpen.value = true;
  },
  openSvnPanel: () => {
    svnPanelOpen.value = true;
  },
  openCommit: () => {
    const dir = explorer.listing?.path ?? "";
    if (!gitInRepo(dir)) {
      toast("error", t("gitNotRepo"));
      return;
    }
    // 独立提交弹窗（不依赖 Git 面板）
    quickCommitOpen.value = true;
  },
  showGitDiff: (text: string) => {
    gitDiffText.value = text;
    gitDiffOpen.value = true;
  },
  afterMutate: async (dir: string) => {
    await refreshGitStatus(dir);
    await refreshListing();
  },
};

/** 当前目录在 git 仓库时返回 Git 子菜单，否则为空。 */
function gitMenuFor(path: string): MenuItem[] {
  return gitMenuForShared(explorer.listing?.path ?? "", path, repoMenuAct);
}

/** 当前目录是 SVN 工作副本时返回 SVN 子菜单，否则为空。 */
function svnMenuFor(path: string): MenuItem[] {
  return svnMenuForShared(explorer.listing?.path ?? "", path, repoMenuAct);
}

/** 下载文件：构造 /download 链接并用隐藏 a 触发浏览器下载（不离开当前页面）。 */
function downloadFile(path: string): void {
  const a = document.createElement("a");
  a.href = api.downloadHref(path);
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

/** 在终端打开：文件夹直接以该目录启动；文件则以所在目录启动。 */
function openTerminalHere(entry: FsEntry): void {
  const dir = entry.isDir ? entry.path : entry.path.slice(0, Math.max(entry.path.lastIndexOf("/"), entry.path.lastIndexOf("\\")));
  openTerminal(dir);
}

// —— 子代理（宿主 0.1.5）：官方 spawn 创建会话并直接在官方子代理会话视图展示 ——
/** 发起一次子代理；instruction 为空也在官方会话里给出目标上下文。 */
async function spawnSubagentDialog(title: string, path: string, isDir: boolean): Promise<void> {
  const input = await promptDialog({
    title,
    message: t("subagentAsk"),
    placeholder: t("subagentAskPlaceholder"),
    initial: "",
    multiline: true,
  });
  if (input === null) return; // 用户取消
  try {
    const r = await api.spawnSubagent(path, isDir, input, sessionSse.sessionId ?? undefined);
    if (r.ok) {
      // continuable：持久子会话，已在官方子代理会话视图中展示；oneshot（兜底）：回传结果文本。
      const out = r.mode === "oneshot" ? (r.output ?? "") : "";
      toast("ok", out ? out.slice(0, 300) + (out.length > 300 ? "…" : "") : t("subagentSpawned"));
    } else toast("error", r.error || t("subagentFailed"));
  } catch (e) {
    toast("error", e instanceof Error ? e.message : String(e));
  }
}
/** 文件/文件夹右键：用子代理处理该目标。 */
function runSubagent(entry: FsEntry): void {
  void spawnSubagentDialog(t("menuSubagent"), entry.path, entry.isDir);
}
/** 空白区右键：新建子代理对话（不带目标）。 */
function newSubagent(): void {
  void spawnSubagentDialog(t("menuNewSubagent"), "", false);
}

// —— 文件/文件夹右键菜单 ——
function onFileCtx(e: MouseEvent, entry: FsEntry): void {
  // Win11 行为：右键未选中的项 → 将其设为唯一选中；命中的项已在多选集内 → 保持多选不变。
  if (!multiSel.value.has(entry.path)) {
    multiSel.value = new Set();
    currentSel.value = entry.path;
    anchorPath.value = entry.path;
  }
  // 回收站视图：操作走回收站语义（还原 / 永久删除 / 清空），不暴露普通文件操作。
  if (inRecycle.value) {
    openMenu(e, recycleFileMenu(entry));
    return;
  }
  // 命中的是被批量选中的项 → 批量菜单（操作作用于整个多选集）
  if (multiSel.value.has(entry.path)) {
    const sel = [...multiSel.value];
    const ro = !canOperatePath(entry.path);
    const fav = isFavorite(entry.path);
    openMenu(e, [
      { label: t("menuMultiCut"), icon: "cut", onClick: () => multiOp("cut"), disabled: ro },
      { label: t("menuMultiCopy"), icon: "copy", onClick: () => multiOp("copy") },
      { label: t("menuMultiDelete"), icon: "trash", onClick: () => multiOp("delete"), disabled: ro },
      { label: t("menuMultiCompress"), icon: "archive", onClick: () => multiOp("compress"), disabled: ro },
      { separator: true },
      { label: fav ? t("favoriteRemove") : t("favoriteAdd"), icon: "star", onClick: () => {
        // 多选收藏：全部已收藏则整体移除，否则将未收藏的加入（收藏作用于整个多选集）
        const paths = [...multiSel.value];
        const allFav = paths.every((p) => isFavorite(p));
        for (const p of paths) if (isFavorite(p) === allFav) toggleFavorite(p);
        toast("ok", allFav ? t("favoriteRemoved") : t("favoriteAdded"));
      } },
      { separator: true },
      { label: t("cancel"), icon: "close", onClick: clearSel },
      { label: `(${sel.length}) ✕ ${t("selectedCount", { count: sel.length })}`, icon: "", onClick: clearSel },
    ]);
    return;
  }
  const fav = isFavorite(entry.path);
  const ro = !canOperatePath(entry.path);
  // 仅 .txt 文件在右键菜单暴露「编辑」（需求：只有 txt 类型支持编辑与保存）。
  const isTxt = /\.txt$/i.test(entry.name);
  const items: MenuItem[] = [
    { label: t("menuOpen"), icon: "arrowRight", onClick: () => open(entry) },
    { label: t("menuOpenExternal"), icon: "monitor", onClick: () => systemOpen(entry.path) },
  ];
  if (isTxt) {
    items.push({ label: t("menuEdit"), icon: "edit", disabled: ro, onClick: () => openTxtEditor(entry.path) });
  }
  items.push({ separator: true });
  items.push(
    { label: t("menuCut"), icon: "cut", disabled: ro, onClick: () => { cutPaths([entry.path]); toast("ok", t("menuCutDone")); } },
    { label: t("menuCopy"), icon: "copy", onClick: () => { copyPaths([entry.path]); toast("ok", t("menuCopyDone")); } },
    { label: t("menuCompress"), icon: "archive", disabled: ro, onClick: () => compressOne(entry) },
    { label: t("menuExtract"), icon: "folderOpen", disabled: ro || entry.isDir || !entry.name.toLowerCase().endsWith(".zip"), onClick: () => extractOne(entry) },
    { label: t("menuRename"), icon: "edit", disabled: ro, onClick: () => rename(entry) },
    { label: t("menuDelete"), icon: "trash", disabled: ro, onClick: () => remove(entry) },
    { separator: true },
    { label: fav ? t("favoriteRemove") : t("favoriteAdd"), icon: "star", onClick: () => { const added = toggleFavorite(entry.path); toast("ok", added ? t("favoriteAdded") : t("favoriteRemoved")); } },
    { label: t("menuDownload"), icon: "download", disabled: entry.isDir, onClick: () => downloadFile(entry.path) },
    { label: t("menuOpenTerminal"), icon: "terminal", onClick: () => openTerminalHere(entry) },
    { label: t("menuSubagent"), icon: "sparkle", onClick: () => runSubagent(entry) },
    ...gitMenuFor(entry.path),
    ...svnMenuFor(entry.path),
    { separator: true },
    { label: t("menuCopyPath"), icon: "link", onClick: () => copyPath(entry.path) },
    { label: t("menuProperties"), icon: "info", onClick: () => property(entry.path) },
  );
  openMenu(e, items);
}

// —— 空白区右键菜单 ——
function onBlankCtx(e: MouseEvent): void {
  if (!explorer.listing) return;
  if (inRecycle.value) {
    openMenu(e, [
      { label: t("menuRefresh"), icon: "refresh", onClick: () => refreshRecycle() },
      { separator: true },
      { label: t("recycleEmpty"), icon: "trash", disabled: (explorer.recycleItems?.length ?? 0) === 0, onClick: () => emptyBin() },
    ]);
    return;
  }
  const path = explorer.listing.path;
  const canPaste = clipboardHas();
  const ro = !canOperatePath(path);
  openMenu(e, [
    { label: t("menuRefresh"), icon: "refresh", onClick: refreshListing },
    { separator: true },
    { label: t("menuView"), icon: "eye", children: viewItems() },
    { label: t("menuSort"), icon: "sort", children: sortItems() },
    { separator: true },
    { label: t("menuPaste"), icon: "download", disabled: !canPaste || ro, onClick: () => doPaste(path) },
    { label: t("menuUpload"), icon: "upload", disabled: ro, onClick: () => pickUpload() },
    { label: t("menuNew"), icon: "sparkle", disabled: ro, children: [
      { label: t("menuNewFolder"), icon: "folder", onClick: () => newEntry("folder") },
      { label: t("menuNewFile"), icon: "file", onClick: () => newEntry("file") },
    ] },
    ...gitMenuFor(path),
    ...svnMenuFor(path),
    { separator: true },
    { label: t("menuOpenTerminal"), icon: "terminal", onClick: () => openTerminal(path) },
    { label: t("menuNewSubagent"), icon: "sparkle", onClick: () => newSubagent() },
    { label: t("menuProperties"), icon: "info", onClick: () => property(path) },
  ]);
}

/** “查看”子菜单（映射到各视图模式，超大/中等图标区分图块尺寸）。 */
function viewItems(): MenuItem[] {
  const current = view.value;
  const mk = (label: string, opt: ViewOption): MenuItem => ({
    label,
    checked: current === opt,
    onClick: () => {
      view.value = opt;
      // 只记当前目录/区域，不同步到其它区域，也不改全局默认（Win11 文件夹视图记忆）。
      setFolderView(viewKey.value, opt);
    },
  });
  return [
    mk(t("viewHuge"), "huge"),
    mk(t("viewLarge"), "large"),
    mk(t("viewMedium"), "medium"),
    mk(t("viewSmall"), "small"),
    { separator: true },
    mk(t("viewList"), "list"),
    { separator: true },
    mk(t("viewDetails"), "details"),
    mk(t("viewContent"), "content"),
    mk(t("viewTiles"), "tiles"),
  ];
}

/** 状态栏快捷切换视图档位（与“查看”子菜单一致，只记当前目录并持久化）。 */
function quickView(opt: ViewOption): void {
  view.value = opt;
  setFolderView(viewKey.value, opt);
}

// 最底部 footer 的视图切换按钮 → 转回本组件的 quickView 执行（footer 不再自己实现）。
setListViewSwitcher(quickView);
listStatus.canSwitchView = true;

/**
 * 把底部信息同步到全局 footer：项目数 / 选中数 / 状态文本 / 当前查看档位。
 * 与旧版列表内底栏的显示条件保持一致（有列表且未加载失败）。
 */
watchEffect(() => {
  listStatus.visible = !!explorer.listing && !explorer.loadErr;
  listStatus.total = filteredRows.value.length;
  listStatus.selected = multiSel.value.size;
  listStatus.text = statusText.value;
  listStatus.view = view.value;
});

/** 命令总线执行器：面板内命令栏经此调用文件操作。 */
setFileCmdRunner((name, arg) => {
  const cur = explorer.listing?.path ?? "";
  // 回收站视图：仅响应回收站语义命令（还原 / 永久删除 / 清空 / 刷新 / 属性），其余忽略。
  if (inRecycle.value) {
    const selPaths = multiSel.value.size
      ? [...multiSel.value]
      : currentSel.value
        ? [currentSel.value]
        : [];
    switch (name) {
      case "restore": void recycleRestoreSel(selPaths); break;
      case "delete": void recycleDeleteSel(selPaths); break;
      case "emptyRecycle": void emptyBin(); break;
      case "refresh": void refreshRecycle(); break;
      case "properties": if (currentSel.value) void property(currentSel.value); break;
    }
    return;
  }
  switch (name) {
    case "newFolder": void newEntry("folder"); break;
    case "newFile": void newEntry("file"); break;
    case "upload": pickUpload(); break;
    case "cut":
    case "copy": {
      if (multiSel.value.size) void multiOp(name as "cut" | "copy");
      else if (currentSel.value) {
        (name === "cut" ? cutPaths : copyPaths)([currentSel.value]);
        toast("ok", t(name === "cut" ? "menuCutDone" : "menuCopyDone"));
      }
      break;
    }
    case "paste": if (cur) void doPaste(cur); break;
    case "rename": doRenameSel(); break;
    case "delete": doDeleteSel(); break;
    case "sort": if (arg) setSort(arg as SortKey); break;
    case "view": if (arg) quickView(arg as ViewOption); break;
    case "toggleExt": prefs.showExtensions = !prefs.showExtensions; savePrefs(); break;
    case "preview": { const e = currentSel.value ? entryByPath(currentSel.value) : null; if (e) void open(e); break; }
    case "refresh": void refreshListing(); break;
    case "properties": if (currentSel.value) void property(currentSel.value); break;
  }
});

/** 命令栏状态回写（选中数/可写/剪贴板/回收站）。单选（currentSel）同样计入选中数。 */
watchEffect(() => {
  fileCmdState.selectionCount = multiSel.value.size || (currentSel.value ? 1 : 0);
  fileCmdState.canOperate = explorer.listing ? canOperatePath(explorer.listing.path) : false;
  fileCmdState.hasClipboard = clipboardHas();
  fileCmdState.isRecycle = explorer.view === "recycle";
});
onBeforeUnmount(() => setFileCmdRunner(null));
// 列表卸载：注销视图切换回调并清空底部信息，避免 footer 残留上一次目录的内容。
onBeforeUnmount(() => {
  setListViewSwitcher(null);
  resetListStatus();
});

/** “排序方式”子菜单。 */
function sortItems(): MenuItem[] {
  const opts: [SortKey, string][] = [
    ["name", t("sortName")],
    ["mtime", t("sortModified")],
    ["type", t("sortType")],
    ["size", t("sortSize")],
  ];
  return opts.map(([k, label]) => ({
    label,
    checked: sortKey.value === k,
    onClick: () => setSort(k),
  }));
}

async function systemOpen(path: string): Promise<void> {
  try {
    await api.openExternal(path);
    toast("ok", t("menuOpened"));
  } catch (err) {
    toast("error", (err as Error).message);
  }
}

async function copyPath(path: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(path);
    toast("ok", t("menuPathCopied"));
  } catch {
    toast("error", t("menuPathCopyFail"));
  }
}

/** 写入前置守卫：工作区外且未开 root 开关时拦截并提示，返回 false。 */
function guardOperable(path: string): boolean {
  if (canOperatePath(path)) return true;
  toast("error", t("workspaceOutside"));
  return false;
}

/** 重命名（仅工作区内），进后台任务以便记录目标文件类型与大小。 */
async function rename(e: FsEntry): Promise<void> {
  if (!guardOperable(e.path)) return;
  const newName = (await promptDialog({ title: t("renameEntry"), initial: e.name }))?.trim();
  if (!newName) return;
  const parent = e.path.slice(0, Math.max(e.path.lastIndexOf("/"), e.path.lastIndexOf("\\")));
  const to = `${parent}/${newName}`;
  const m = entryMeta(e);
  const h = startTask(t("taskRenaming"), `${e.name} → ${newName}`, m.fileType, m.fileSize);
  try {
    await api.rename(e.path, to, wb.key);
    toast("ok", t("renamed"));
    h.done();
  } catch (err) {
    toast("error", (err as Error).message);
    h.fail((err as Error).message);
  }
  await refreshListing();
}

/** 删除（仅工作区内），进后台任务以便记录被删文件类型与大小。 */
async function remove(e: FsEntry): Promise<void> {
  if (inRecycle.value) {
    await recycleDeleteSel([e.recycleFullPath ?? e.path]);
    return;
  }
  if (!guardOperable(e.path)) return;
  const ok = await confirmDialog({
    title: t("deleteTitle"),
    message: t("confirmDelete", { name: e.name }),
  });
  if (!ok) return;
  const m = entryMeta(e);
  const h = startTask(t("taskDeleting"), e.name, m.fileType, m.fileSize);
  try {
    await api.remove(e.path, wb.key);
    toast("ok", t("deleted"));
    h.done();
  } catch (err) {
    toast("error", (err as Error).message);
    h.fail((err as Error).message);
  }
  await refreshListing();
}

/** 复制完整路径到系统剪贴板已用 copyPath；这里属性对话框。 */
async function property(path: string): Promise<void> {
  if (inRecycle.value) {
    const e = entryByPath(path);
    if (!e) return;
    const i = e.name.lastIndexOf(".");
    propData.value = {
      name: e.name,
      path: e.originalPath || e.path,
      isDir: e.isDir,
      ext: i > 0 && i < e.name.length - 1 ? e.name.slice(i) : "",
      size: e.size ?? 0,
      mtime: e.mtime ?? 0,
    };
    propOpen.value = true;
    return;
  }
  if (!explorer.listing) return;
  try {
    propData.value = await api.detail(path);
    propOpen.value = true;
  } catch (err) {
    toast("error", (err as Error).message);
  }
}

/** 粘贴：把剪贴板项复制(copy)或移动(cut)到 destDir。 */
async function doPaste(destDir: string): Promise<void> {
  if (!guardOperable(destDir)) return;
  const clip = clipboardOf();
  if (!clip.paths.length) return;
  // 剪切=移动源文件，需源也可写；复制仅读源。
  if (clip.op === "cut" && clip.paths.some((p) => !canOperatePath(p))) {
    toast("error", t("workspaceOutside"));
    return;
  }
  const h = startTask(clip.op === "cut" ? t("taskMoving") : t("taskCopying"), `${clip.paths.length} → ${destDir}`);
  try {
    for (const src of clip.paths) {
      const name = src.slice(Math.max(src.lastIndexOf("/"), src.lastIndexOf("\\")) + 1);
      const dest = await uniqueInDirFor(name, destDir);
      const meta = await statMeta(src);
      h.step(clip.op === "cut" ? t("taskMoving") : t("taskCopying"), src, `→ ${destDir}`, meta.fileType, meta.fileSize);
      if (clip.op === "cut") await api.rename(src, dest, wb.key);
      else await api.copyEntry(src, destDir, wb.key);
    }
    toast("ok", clip.op === "cut" ? t("moved") : t("copied"));
    h.done();
    clearClipboard();
  } catch (err) {
    toast("error", (err as Error).message);
    h.fail((err as Error).message);
  }
  await refreshListing();
}

// —— 回收站操作（与文件列表共用同一套 UI，仅操作语义不同） ——
/** 取路径对应的条目名（用于任务标题）。 */
function entryNameOf(p: string): string | null {
  return explorer.listing?.entries.find((x) => x.path === p)?.name ?? null;
}

/** 回收站右键菜单：还原 / 永久删除 / 刷新 / 清空 / 属性。 */
function recycleFileMenu(entry: FsEntry): MenuItem[] {
  const sel = multiSel.value.has(entry.path)
    ? [...multiSel.value]
    : [entry.recycleFullPath ?? entry.path];
  return [
    { label: t("recycleRestore"), icon: "undo", onClick: () => recycleRestoreSel(sel) },
    { label: t("recycleDelete"), icon: "trash", onClick: () => recycleDeleteSel(sel) },
    { separator: true },
    { label: t("menuRefresh"), icon: "refresh", onClick: () => refreshRecycle() },
    { separator: true },
    { label: t("recycleEmpty"), icon: "trash", disabled: (explorer.recycleItems?.length ?? 0) === 0, onClick: () => emptyBin() },
    { separator: true },
    { label: t("menuProperties"), icon: "info", onClick: () => property(entry.recycleFullPath ?? entry.path) },
  ];
}

/** 回收站：还原选中的一项或多项到原位置。 */
async function recycleRestoreSel(paths: string[]): Promise<void> {
  if (!paths.length) return;
  const task = startTask(t("recycleRestore"), paths.length > 1 ? `${paths.length} 项` : (entryNameOf(paths[0]) ?? ""));
  let ok = 0;
  for (const p of paths) {
    try {
      await api.recycleRestore(p);
      ok += 1;
    } catch (err) {
      task.fail((err as Error).message);
      toast("error", (err as Error).message);
    }
  }
  if (ok) {
    toast("ok", t("recycleRestored"));
    task.done(t("recycleRestored"));
  }
  clearSel();
  await refreshRecycle();
}

/** 回收站：永久删除选中的一项或多项（不可恢复）。 */
async function recycleDeleteSel(paths: string[]): Promise<void> {
  if (!paths.length) return;
  const ok = await confirmDialog({
    title: t("recycleDelete"),
    message:
      paths.length > 1
        ? t("recycleDeleteConfirmMulti", { count: paths.length })
        : t("recycleDeleteConfirm", { name: entryNameOf(paths[0]) ?? "" }),
  });
  if (!ok) return;
  const task = startTask(t("recycleDelete"), `${paths.length} 项`);
  let done = 0;
  for (const p of paths) {
    try {
      await api.recycleDelete(p);
      done += 1;
    } catch (err) {
      task.fail((err as Error).message);
      toast("error", (err as Error).message);
    }
  }
  if (done) {
    toast("ok", t("recycledDeleted"));
    task.done(t("recycledDeleted"));
  }
  clearSel();
  await refreshRecycle();
}

const sleep = (ms: number): Promise<void> => new Promise((r) => setTimeout(r, ms));

/** 清空回收站：确认 + 后台任务 + 轮询计数推进右下角进度。 */
async function emptyBin(): Promise<void> {
  if ((explorer.recycleItems?.length ?? 0) === 0) return;
  const ok = await confirmDialog({ title: t("recycleEmpty"), message: t("recycleEmptyConfirm") });
  if (!ok) return;
  const task = startTask(t("recycleEmptying"), "");
  try {
    await api.recycleEmpty();
    let count = explorer.recycleItems?.length ?? 0;
    // 最多轮询约 2 分钟；计数归零即视为完成。
    for (let i = 0; i < 120; i += 1) {
      await sleep(1000);
      try {
        count = (await api.recycleCount()).count;
      } catch {
        /* 计数接口瞬时失败，忽略并继续 */
      }
      task.step(t("recycleEmptyProgress", { count }));
      if (count <= 0) break;
    }
    task.updateLabel(t("recycleEmptyDone"));
    task.done(t("recycleEmptyDone"));
    clearSel();
    await refreshRecycle();
  } catch (err) {
    task.fail((err as Error).message);
    toast("error", (err as Error).message);
  }
}

// —— 压缩 / 解压 ——
async function compressOne(entry: FsEntry): Promise<void> {
  if (!guardOperable(entry.path)) return;
  const m = entryMeta(entry);
  const h = startTask(t("taskCompressing"), entry.name, m.fileType, m.fileSize);
  try {
    await api.compress(entry.path, undefined, wb.key);
    toast("ok", t("compressed"));
    h.done();
  } catch (err) {
    toast("error", (err as Error).message);
    h.fail((err as Error).message);
  }
  await refreshListing();
}
async function extractOne(entry: FsEntry): Promise<void> {
  const destDir = explorer.listing?.path ?? "";
  if (!destDir) return;
  if (!guardOperable(destDir)) return;
  const m = entryMeta(entry);
  const h = startTask(t("taskExtracting"), entry.name, m.fileType, m.fileSize);
  try {
    const r = await api.extract(entry.path, destDir, wb.key);
    toast("ok", t("extracted", { count: r.count }));
    h.done(t("extracted", { count: r.count }));
  } catch (err) {
    toast("error", `${t("extractFailed")}：${(err as Error).message}`);
    h.fail((err as Error).message);
  }
  await refreshListing();
}

/** 批量操作：作用于当前多选集。 */
async function multiOp(op: "cut" | "copy" | "delete" | "compress"): Promise<void> {
  const sel = [...multiSel.value];
  if (!sel.length) return;
  // 复制仅读，允许；其余（剪切/删除/压缩）需所有选中项可写。
  if (op !== "copy" && sel.some((p) => !canOperatePath(p))) {
    toast("error", t("workspaceOutside"));
    return;
  }
  const h =
    op === "cut"
      ? startTask(t("taskMoving"), `${sel.length} 项`)
      : op === "copy"
        ? startTask(t("taskCopying"), `${sel.length} 项`)
        : op === "delete"
          ? startTask(t("taskDeleting"), `${sel.length} 项`)
          : startTask(t("taskCompressing"), `${sel.length} 项`);
  try {
    if (op === "cut") {
      cutPaths(sel);
      toast("ok", t("menuCutDone"));
    } else if (op === "copy") {
      copyPaths(sel);
      toast("ok", t("menuCopyDone"));
    } else if (op === "delete") {
      const ok = await confirmDialog({ title: t("deleteTitle"), message: t("confirmDelete", { name: `${sel.length} 项` }) });
      if (!ok) return;
      for (const p of sel) {
        try {
          const meta = await statMeta(p);
          await api.remove(p, wb.key);
          h.step(t("taskDeleting"), p, undefined, meta.fileType, meta.fileSize);
        } catch { /* 单个失败继续 */ }
      }
      toast("ok", t("deleted"));
      h.done();
    } else if (op === "compress") {
      for (const p of sel) {
        try {
          const meta = await statMeta(p);
          await api.compress(p, undefined, wb.key);
          h.step(t("taskCompressing"), p, undefined, meta.fileType, meta.fileSize);
        } catch { /* 单个失败继续 */ }
      }
      toast("ok", t("compressed"));
      h.done();
    }
  } catch (err) {
    toast("error", (err as Error).message);
    h.fail((err as Error).message);
  }
  clearSel();
  await refreshListing();
}

/** 生成当前目录下不冲突的目标全路径（目录级去重）。 */
async function uniqueInDir(name: string): Promise<string> {
  return uniqueInDirFor(name, explorer.listing?.path ?? "");
}

/** 在指定目标目录下求不冲突路径（目录级去重；不了解目标目录时退回原名）。 */
async function uniqueInDirFor(name: string, destDir: string): Promise<string> {
  const baseExisting = destDir === explorer.listing?.path ? new Set((explorer.listing?.entries ?? []).map((e2) => e2.name.toLowerCase())) : null;
  const i = name.lastIndexOf(".");
  const stem = i > 0 ? name.slice(0, i) : name;
  const ext = i > 0 ? name.slice(i) : "";
  let base = name;
  let n = 2;
  while (baseExisting && baseExisting.has(base.toLowerCase())) {
    base = `${stem} (${n})${ext}`;
    n += 1;
  }
  const sep2 = destDir.includes("\\") ? "\\" : "/";
  return `${destDir.replace(/[\\/]+$/, "")}${sep2}${base}`;
}

/** 新建文件夹 / 文本文件（仅工作区内，自动去重命名）。 */
async function newEntry(kind: "folder" | "file"): Promise<void> {
  if (!explorer.listing) return;
  if (!guardOperable(explorer.listing.path)) return;
  const baseName =
    kind === "folder"
      ? t("newFolderName")
      : t("newFileName");
  const name = kind === "folder" ? baseName : `${baseName}.txt`;
  let full = await uniqueInDir(name);
  try {
    if (kind === "folder") await api.mkdir(full, wb.key);
    else await api.touch(full, wb.key);
    toast("ok", kind === "folder" ? t("createdFolder") : t("createdFile"));
  } catch (err) {
    toast("error", (err as Error).message);
    await refreshListing();
    return;
  }
  await refreshListing();
}
</script>

<style scoped>
.fw-fl { display: flex; flex-direction: column; min-height: 0; height: 100%; position: relative; }
.fw-hidden-input { display: none; }
.fw-fl-tool { display: flex; align-items: center; gap: 8px; padding: 6px 8px; border-bottom: 1px solid var(--dsh-border, #30363d); }
.fw-filter { flex: 1; min-width: 0; }
.fw-filter.el-input {
  --el-input-bg-color: var(--dsh-bg, #0d1117);
  --el-input-focus-border-color: var(--dsh-accent, #238636);
}
.fw-filter.el-input .el-input__wrapper { border-radius: 12px; }
.fw-search-ico { font-size: calc(11px * var(--dsh-fs-scale, 1)); color: var(--dsh-fg-weak, #8b949e); display: inline-flex; align-items: center; line-height: 1; }
/* 选中高亮（对齐「我的电脑」：色块选中 + 左侧强调条 + 边缘描边，hover 不失焦） */
.fw-table .fw-row.selected, .fw-list .fw-list-row.selected { background: var(--dsh-accent, #23863655); }
.fw-table .fw-row.selected td { box-shadow: inset 2px 0 0 var(--dsh-accent, #238636); background: transparent; }
.fw-list .fw-list-row.selected { box-shadow: inset 2px 0 0 var(--dsh-accent, #238636); }
.fw-grid .fw-tile.selected { background: var(--dsh-accent, #2386363d); border-radius: 6px; box-shadow: inset 0 0 0 1px var(--dsh-accent, #23863699); }
.fw-table .fw-row.selected .fw-label, .fw-list .fw-list-row.selected .fw-list-name, .fw-grid .fw-tile.selected .fw-tile-name { font-weight: 600; }
.fw-table-wrap { flex: 1; overflow: auto; position: relative; }
/* 拉框多选的半透明选择框（覆盖在列表上方，不拦截鼠标事件） */
.fw-band {
  position: absolute;
  z-index: 8;
  border: 1px solid var(--dsh-accent, #238636);
  background: color-mix(in srgb, var(--dsh-accent, #238636) 14%, transparent);
  pointer-events: none;
}
.fw-table-wrap:focus { outline: none; }
.fw-table-wrap:focus-visible { outline: 1px solid var(--dsh-accent, #238636); outline-offset: -1px; }
.fw-table { width: 100%; border-collapse: collapse; font-size: calc(12px * var(--dsh-fs-scale, 1)); table-layout: fixed; }
.fw-table thead th {
  position: sticky;
  top: 0;
  z-index: 1;
  background: var(--dsh-bg2, #161b22);
  text-align: left;
  font-weight: 600;
  color: var(--dsh-fg-weak, #8b949e);
  padding: 5px 8px;
  border-bottom: 1px solid var(--dsh-border, #30363d);
  cursor: pointer;
  white-space: nowrap;
  user-select: none;
}
.fw-table thead th.active { color: var(--dsh-fg, #c9d1d9); }
.fw-sort { font-size: calc(9px * var(--dsh-fs-scale, 1)); margin-left: 2px; }
.fw-table .col-name, .fw-table .col-size, .fw-table .col-type { position: relative; }
/* name/size/type 宽度由脚本内联（px）提供，可拖拽；mtime 列自动填充剩余空间 */
.fw-table .col-mtime { width: auto; }
/* 列宽拖拽手柄 */
.fw-col-resize { position: absolute; top: 0; right: -3px; width: 7px; height: 100%; cursor: col-resize; z-index: 2; }
.fw-col-resize:hover, .fw-col-resize.on { background: var(--dsh-accent, #238636); }
.fw-table td { padding: 4px 8px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
/* 详情视图仅表头保留分隔线，内容行不显示边框线（悬停时给极淡的分隔提示，不破坏“无边框”观感）。 */
.fw-table tbody tr:not(.fw-vspacer):hover td { background: var(--dsh-hover, #21262d); }
.fw-table .fw-vspacer td { border-bottom: none; padding: 0; }
.fw-row { cursor: pointer; }
.fw-row:hover { background: var(--dsh-hover, rgba(48, 54, 61, 0.4)); }
.fw-row.broken { color: #f85149; }
.fw-row.hidden td { opacity: 0.55; }
.fw-ico {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 16px;
  line-height: 1;
  vertical-align: middle;
}
.fw-n { display: inline-flex; align-items: center; gap: 6px; width: 100%; }
.fw-label { overflow: hidden; text-overflow: ellipsis; flex: 1; }
.fw-empty-cell { text-align: center; color: var(--dsh-fg-weak, #8b949e); padding: 16px; }
.fw-inaccessible { color: #b62324; }
.fw-weak { font-size: calc(8px * var(--dsh-fs-scale, 1)); vertical-align: top; color: var(--dsh-fg-weak, #8b949e); }
/* git 状态徽标（角标：主题色区分，未跟踪/新增/修改/删除） */
.fw-git-badge {
  margin-left: 6px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 1px;
  font-size: calc(9px * var(--dsh-fs-scale, 1));
  line-height: 1;
  border-radius: 3px;
  padding: 2px 3px;
  vertical-align: middle;
}
.fw-git-badge.st-untracked { color: #8b949e; border: 1px solid #8b949e88; }
.fw-git-badge.st-added { color: #238636; border: 1px solid #238636; }
.fw-git-badge.st-modified { color: #d29922; border: 1px solid #d29922; }
.fw-git-badge.st-deleted { color: #f85149; border: 1px solid #f8514988; }
.fw-broken-tag { margin-left: 6px; font-size: calc(9px * var(--dsh-fs-scale, 1)); color: #f85149; border: 1px solid #f85149; border-radius: 3px; padding: 0 3px; }
.fw-err { color: #b62324; font-size: calc(12px * var(--dsh-fs-scale, 1)); padding: 8px 12px; }
.fw-empty-small { padding: 16px; text-align: center; color: var(--dsh-fg-weak, #8b949e); font-size: calc(12px * var(--dsh-fs-scale, 1)); }

/* —— 刷新/加载动画遮罩 —— */
.fw-refreshing {
  position: absolute;
  inset: 0;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--dsh-bg, #0d111766);
  pointer-events: none;
}
.fw-refreshing-spinner {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 3px solid var(--dsh-border, #30363d);
  border-top-color: var(--dsh-accent, #238636);
  animation: fw-fl-spin 0.8s linear infinite;
}
@keyframes fw-fl-spin { to { transform: rotate(360deg); } }

/* —— 底部详情栏的样式已迁到最底部 footer（explorer/StatusBar.vue） —— */

/* —— 列表视图 —— */
.fw-list .fw-list-row { display: flex; align-items: center; gap: 8px; padding: 5px 12px; cursor: pointer; white-space: nowrap; }
.fw-list .fw-list-row:hover { background: var(--dsh-hover, rgba(48, 54, 61, 0.4)); }
.fw-list-name { overflow: hidden; text-overflow: ellipsis; }
.fw-list .fw-list-row.hidden { opacity: 0.55; }
.fw-list .fw-list-row.broken { color: #f85149; }

/* —— 图标（平铺）视图 —— */
.fw-grid { display: flex; flex-wrap: wrap; gap: 8px; padding: 12px; align-content: flex-start; }
.fw-tile { width: 92px; display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 8px 4px; border-radius: 6px; cursor: pointer; text-align: center; }
.fw-tile:hover { background: var(--dsh-hover, rgba(48, 54, 61, 0.4)); }
/* 图标容器：inline-flex 居中，让 width/height 档位生效并消除行高把 SVG 顶偏的问题。 */
.fw-tile .fw-tile-ico { display: inline-flex; align-items: center; justify-content: center; line-height: 0; flex: 0 0 auto; }
.fw-tile .fw-tile-thumb {
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 6px;
  background: var(--dsh-bg2, #161b22);
  border: 1px solid var(--dsh-border, #30363d);
}
.fw-tile .fw-tile-thumb img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.fw-tile .fw-tile-name { font-size: calc(11px * var(--dsh-fs-scale, 1)); line-height: 1.25; word-break: break-all; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; }
.fw-tile.hidden { opacity: 0.55; }
/* 超大图标：更大的图块与图标 */
.fw-grid-large { gap: 10px; }
.fw-grid-large .fw-tile { width: 118px; gap: 8px; }
.fw-grid-large .fw-tile .fw-tile-thumb { height: 92px; }
.fw-grid-large .fw-tile .fw-tile-name { font-size: calc(12px * var(--dsh-fs-scale, 1)); }
/* 图标四档：小 / 中 / 大 / 超大 —— 尺寸与 Win11 各档视觉密度对应 */
.fw-grid-small { gap: 2px; padding: 6px 10px; }
.fw-grid-small .fw-tile { width: 200px; flex-direction: row; align-items: center; gap: 6px; padding: 2px 6px; text-align: left; }
.fw-grid-small .fw-tile .fw-tile-ico, .fw-grid-small .fw-tile .fw-tile-thumb { width: 20px; height: 20px; flex: 0 0 auto; }
.fw-grid-small .fw-tile .fw-tile-name { font-size: calc(12px * var(--dsh-fs-scale, 1)); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
/* 小图标选中高亮：行式布局下用左侧强调条 + 更强底色，确保清晰可辨（此前仅细描边不明显）。 */
.fw-grid-small .fw-tile.selected {
  background: var(--dsh-accent, #23863655);
  box-shadow: inset 2px 0 0 var(--dsh-accent, #238636);
  border-radius: 4px;
}
.fw-grid-small .fw-tile.selected .fw-tile-name { font-weight: 600; }
.fw-grid-medium { gap: 6px; }
.fw-grid-medium .fw-tile { width: 104px; }
.fw-grid-medium .fw-tile .fw-tile-ico, .fw-grid-medium .fw-tile .fw-tile-thumb { width: 36px; height: 36px; }
.fw-grid-large .fw-tile-ico, .fw-grid-large .fw-tile .fw-tile-thumb { width: 52px; height: 52px; }
.fw-grid-huge { gap: 12px; }
.fw-grid-huge .fw-tile { width: 150px; }
.fw-grid-huge .fw-tile .fw-tile-ico, .fw-grid-huge .fw-tile .fw-tile-thumb { width: 76px; height: 76px; }
.fw-grid-huge .fw-tile .fw-tile-thumb img { max-width: 72px; max-height: 72px; }

/* —— 内容视图：名称+类型居左，修改日期/大小居右（Win11 对齐） —— */
.fw-content { display: flex; flex-direction: column; padding: 4px 10px; }
.fw-content-row {
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 52px;
  padding: 4px 8px;
  border-bottom: 1px solid var(--dsh-border, #30363d);
  border-radius: 4px;
  cursor: pointer;
}
.fw-content-row:hover { background: var(--dsh-hover, rgba(48, 54, 61, 0.4)); }
.fw-content-row.selected { background: var(--dsh-accent, #23863655); box-shadow: inset 2px 0 0 var(--dsh-accent, #238636); }
.fw-content-row.selected .fw-c-name { font-weight: 700; }
.fw-content-row .fw-ico { flex: 0 0 auto; display: inline-flex; }
.fw-content-row .fw-c-main { flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; }
.fw-content-row .fw-c-name { font-size: calc(12px * var(--dsh-fs-scale, 1)); font-weight: 600; color: var(--dsh-fg, #c9d1d9); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.fw-content-row .fw-c-type { font-size: calc(11px * var(--dsh-fs-scale, 1)); color: var(--dsh-fg-weak, #8b949e); }
.fw-content-row .fw-c-meta { flex: 0 0 auto; width: 220px; display: flex; flex-direction: column; align-items: flex-start; font-size: calc(11px * var(--dsh-fs-scale, 1)); color: var(--dsh-fg-weak, #8b949e); line-height: 1.5; }

/* —— 平铺视图：图标居左，名称/类型/大小三行居右 —— */
.fw-tiles { display: flex; flex-wrap: wrap; gap: 6px; padding: 10px; align-content: flex-start; }
.fw-tile2 {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 240px;
  padding: 6px 8px;
  border-radius: 6px;
  cursor: pointer;
}
.fw-tile2:hover { background: var(--dsh-hover, rgba(48, 54, 61, 0.4)); }
.fw-tile2.selected { background: var(--dsh-accent, #2386363d); border-radius: 6px; box-shadow: inset 0 0 0 1px var(--dsh-accent, #23863699); }
.fw-tile2.selected .fw-t2-name { font-weight: 600; }
.fw-tile2 .fw-tile-ico { flex: 0 0 auto; display: inline-flex; }
.fw-tile2 .fw-tile-thumb { width: 38px; height: 38px; display: flex; align-items: center; justify-content: center; flex: 0 0 auto; }
.fw-tile2 .fw-t2-body { min-width: 0; display: flex; flex-direction: column; line-height: 1.45; }
.fw-tile2 .fw-t2-name { font-size: calc(12px * var(--dsh-fs-scale, 1)); color: var(--dsh-fg, #c9d1d9); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.fw-tile2 .fw-t2-type { font-size: calc(11px * var(--dsh-fs-scale, 1)); color: var(--dsh-fg-weak, #8b949e); }
.fw-tile2 .fw-t2-size { font-size: calc(11px * var(--dsh-fs-scale, 1)); color: var(--dsh-fg-weak, #8b949e); }

/* —— 属性对话框（el-dialog，自持项目主题调色板） —— */
:global(.fw-prop-dialog.el-dialog) {
  --el-dialog-bg-color: var(--dsh-bg2, #161b22);
  --el-text-color-primary: var(--dsh-fg, #c9d1d9);
  --el-text-color-regular: var(--dsh-fg, #c9d1d9);
  --el-border-color: var(--dsh-border, #30363d);
  --el-border-color-light: var(--dsh-border, #30363d);
  --el-border-radius-base: 8px;
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
}
:global(.fw-prop-dialog .el-dialog__header) {
  margin-right: 0;
  padding: 12px 16px;
  border-bottom: 1px solid var(--dsh-border, #30363d);
}
:global(.fw-prop-dialog .el-dialog__body) {
  padding: 14px 16px;
}
:global(.fw-prop-dialog .el-dialog__footer) {
  padding: 10px 16px 14px;
}
.fw-prop-body { display: flex; flex-direction: column; gap: 10px; }
.fw-prop-row { display: flex; justify-content: space-between; gap: 12px; font-size: calc(12px * var(--dsh-fs-scale, 1)); }
.fw-prop-row .k { color: var(--dsh-fg-weak, #8b949e); flex-shrink: 0; }
.fw-prop-row .v { word-break: break-all; text-align: right; }

/* —— Git 改动对话框 —— */
:global(.fw-gitdiff-dialog.el-dialog) {
  --el-dialog-bg-color: var(--dsh-bg2, #161b22);
  --el-text-color-primary: var(--dsh-fg, #c9d1d9);
  --el-border-color: var(--dsh-border, #30363d);
  --el-border-radius-base: 8px;
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
}
:global(.fw-gitdiff-dialog .el-dialog__header) {
  margin-right: 0;
  padding: 12px 16px;
  border-bottom: 1px solid var(--dsh-border, #30363d);
}
.fw-gitdiff-body {
  margin: 0;
  max-height: 60vh;
  overflow: auto;
  padding: 12px 14px;
  background: var(--dsh-bg, #0d1117);
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 6px;
  color: var(--dsh-fg, #c9d1d9);
  font-family: ui-monospace, SFMono-Regular, Consolas, "Courier New", monospace;
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-all;
}
</style>