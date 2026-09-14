<template>
  <!-- 「此电脑」内容区：复刻 Win11 的「设备和驱动器」分区（磁盘卡片 + 容量进度条）。 -->
  <div class="fw-tp" @keydown="onKeyNav">
    <div v-if="explorer.drivesErr" class="fw-err">{{ explorer.drivesErr }}</div>
    <div
      v-else
      ref="wrapRef"
      class="fw-tp-wrap"
      tabindex="0"
      :class="'fw-tp-' + view"
      @click="onBlankClick"
      @contextmenu.prevent="onBlankCtx"
    >
      <div class="fw-tp-sec">{{ t('thisPcDevices') }} ({{ drives.length }})</div>

      <!-- 图标档位（超大/大/中/小）：Win11 磁盘卡片 —— 图标 + 名称 + 容量条 + 「x 可用，共 y」 -->
      <div v-if="isIconMode" class="fw-tp-grid">
        <div
          v-for="d in drives"
          :key="d.path"
          class="fw-drive"
          :class="{ selected: d.path === sel, removable: d.removable }"
          :data-path="d.path"
          :title="d.path"
          @click="onRowClick(d)"
          @dblclick="open(d)"
          @contextmenu.prevent.stop="onDriveCtx($event, d)"
        >
          <span class="fw-drive-ico"><icon name="hardDrive" :size="iconSize" /></span>
          <span class="fw-drive-body">
            <span class="fw-drive-name">{{ driveName(d) }}</span>
            <span class="fw-drive-bar"><span class="fw-drive-fill" :style="{ width: usedPct(d) }"></span></span>
            <span class="fw-drive-cap">{{ capacityText(d) }}</span>
          </span>
        </div>
        <div v-if="!drives.length && !explorer.drivesLoading" class="fw-tp-empty">{{ t('emptyDrives') }}</div>
      </div>

      <!-- 列表/详细信息/内容/平铺：与文件列表一致的表格（名称 / 类型 / 总大小 / 可用空间 / 文件系统） -->
      <table v-else class="fw-tp-table">
        <thead>
          <tr>
            <th class="col-name">{{ t('colName') }}</th>
            <th class="col-type">{{ t('colType') }}</th>
            <th class="col-total">{{ t('driveTotal') }}</th>
            <th class="col-free">{{ t('driveFree') }}</th>
            <th class="col-fs">{{ t('driveFs') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="d in drives"
            :key="d.path"
            class="fw-tp-row"
            :class="{ selected: d.path === sel }"
            :data-path="d.path"
            :title="d.path"
            @click="onRowClick(d)"
            @dblclick="open(d)"
            @contextmenu.prevent.stop="onDriveCtx($event, d)"
          >
            <td class="col-name">
              <span class="fw-tp-n">
                <span class="fw-tp-ico"><icon name="hardDrive" :size="16" /></span>
                <span class="fw-tp-label">{{ driveName(d) }}</span>
              </span>
            </td>
            <td class="col-type">{{ d.removable ? t('driveTypeRemovable') : t('driveTypeFixed') }}</td>
            <td class="col-total">{{ fmtBytes(d.total) }}</td>
            <td class="col-free">{{ fmtBytes(d.free) }}</td>
            <td class="col-fs">{{ d.fsType || '—' }}</td>
          </tr>
          <tr v-if="!drives.length">
            <td :colspan="5" class="fw-tp-empty-cell">{{ t('emptyDrives') }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 刷新/加载动画：与文件列表一致的遮罩 + 居中指示器 -->
    <div v-if="explorer.drivesLoading" class="fw-tp-loading"><div class="fw-tp-spinner"></div></div>

    <!-- 底部状态栏：项目数 + 右侧视图切换（Win11 对齐） -->
    <div class="fw-fl-status">
      <span class="fw-status-left">{{ t('statusItemsCount', { count: drives.length }) }}</span>
      <span class="fw-status-right">
        <button class="fw-vs-btn" :class="{ on: view === 'details' }" :title="t('viewDetails')" @click="quickView('details')"><icon name="eye" :size="13" /></button>
        <button class="fw-vs-btn" :class="{ on: view === 'list' }" :title="t('viewList')" @click="quickView('list')"><icon name="sort" :size="13" /></button>
        <button class="fw-vs-btn" :class="{ on: view === 'large' }" :title="t('viewLarge')" @click="quickView('large')"><icon name="grid" :size="13" /></button>
      </span>
    </div>

    <!-- 右键菜单 -->
    <ContextMenu v-if="cmOpen" :items="cmItems" :x="cmX" :y="cmY" @close="cmOpen = false" />

    <!-- 驱动器属性（本地数据，不做递归统计，避免对整盘估算大小） -->
    <el-dialog
      v-model="propOpen"
      class="fw-prop-dialog"
      :title="t('menuProperties')"
      width="420px"
      :close-on-click-modal="false"
    >
      <div v-if="propDrive" class="fw-prop-body">
        <div class="fw-prop-row"><span class="k">{{ t('propName') }}</span><span class="v">{{ propDrive.name }}</span></div>
        <div class="fw-prop-row"><span class="k">{{ t('propPath') }}</span><span class="v">{{ propDrive.path }}</span></div>
        <div class="fw-prop-row"><span class="k">{{ t('propKind') }}</span><span class="v">{{ propDrive.removable ? t('driveTypeRemovable') : t('driveTypeFixed') }}</span></div>
        <div class="fw-prop-row"><span class="k">{{ t('driveFs') }}</span><span class="v">{{ propDrive.fsType || '—' }}</span></div>
        <div class="fw-prop-row"><span class="k">{{ t('propSize') }}</span><span class="v">{{ fmtBytes(usedBytes(propDrive)) }}</span></div>
        <div class="fw-prop-row"><span class="k">{{ t('driveFree') }}</span><span class="v">{{ fmtBytes(propDrive.free) }}</span></div>
        <div class="fw-prop-row"><span class="k">{{ t('driveTotal') }}</span><span class="v">{{ fmtBytes(propDrive.total) }}</span></div>
        <div class="fw-prop-bar"><span class="fw-prop-fill" :style="{ width: usedPct(propDrive) }"></span></div>
      </div>
      <template #footer>
        <el-button type="primary" @click="propOpen = false">{{ t('confirmOk') }}</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watchEffect } from "vue";
import { useI18n } from "../../../composables/core/i18n";
import { openProjectInEditor } from "../../../composables/core/sidebarRight";
import { explorer, browseTo, refreshListing } from "../../../stores/explorer";
import {
  toggleFavorite,
  isFavorite,
  getFolderView,
  setFolderView,
  activeView,
} from "../../../composables/core/settings";
import { fileCmdState, setFileCmdRunner } from "../../../stores/fileCommands";
import { clipboardHas } from "../../../composables/ui/clipboard";
import { driveName } from "../../../composables/domain/driveName";
import { toast } from "../../../stores/workbench";
import ContextMenu from "../../common/ContextMenu.vue";
import Icon from "../../common/Icon.vue";
import type { DriveInfo, MenuItem } from "../../../../shared/types";
import type { Prefs } from "../../../composables/core/settings";

const { t } = useI18n();

/** Windows 查看档位（与设置里的「默认视图」同一枚举）。 */
type ViewOption = Prefs["view"];
type SortKey = "name" | "size" | "free" | "type";

/** 图标档位（超大/大/中/小）走磁盘卡片；其余档位走表格。 */
const ICON_MODES: readonly ViewOption[] = ["huge", "large", "medium", "small"];
/**
 * 「此电脑」在按区域视图记忆里的键。它自己记一份，不与文件列表/其它目录同步；
 * 只有设置里改默认视图（会清空全部记忆）才会跟着变。
 */
const VIEW_KEY = "computer";
const view = computed<ViewOption>(() => getFolderView(VIEW_KEY));
const isIconMode = computed(() => ICON_MODES.includes(view.value));
/** 卡片图标尺寸随档位变化（小图标档为紧凑行，图标最小）。 */
const iconSize = computed(() => (view.value === "huge" ? 52 : view.value === "large" ? 44 : view.value === "medium" ? 36 : 20));
// 同步给命令栏等外部面板显示 ✓。
watchEffect(() => (activeView.value = view.value));

/** 磁盘排序方式；null = 保持后端枚举顺序（盘符顺序，与 Win11 一致）。 */
const driveSort = ref<SortKey | null>(null);

/** 磁盘列表（含容量/卷标）：取自 explorer.drives（与导航树磁盘子项同源），按当前排序方式派生。 */
const drives = computed<DriveInfo[]>(() => {
  const rows = [...explorer.drives];
  const key = driveSort.value;
  if (!key) return rows;
  rows.sort((a, b) => {
    if (key === "size") return (b.total ?? -1) - (a.total ?? -1);
    if (key === "free") return (b.free ?? -1) - (a.free ?? -1);
    if (key === "type") {
      return (
        Number(a.removable) - Number(b.removable) ||
        driveName(a).localeCompare(driveName(b), undefined, { sensitivity: "base" })
      );
    }
    return driveName(a).localeCompare(driveName(b), undefined, { sensitivity: "base" });
  });
  return rows;
});

/** 字节格式化（容量为 GB 级，大值取整、小值保留一位小数，与 Win11 一致）。 */
function fmtBytes(n?: number): string {
  if (n === undefined || !Number.isFinite(n)) return "—";
  const units = ["B", "KB", "MB", "GB", "TB", "PB"];
  let v = n;
  let i = 0;
  while (v >= 1024 && i < units.length - 1) {
    v /= 1024;
    i += 1;
  }
  return `${i > 0 && v < 100 ? v.toFixed(1) : Math.round(v)} ${units[i]}`;
}

/** 已用字节（总量与可用量任一缺失时为 undefined）。 */
function usedBytes(d: DriveInfo): number | undefined {
  if (d.total === undefined || d.free === undefined) return undefined;
  return Math.max(0, d.total - d.free);
}

/** 容量条填充比例（已用占比）；容量未知则 0。 */
function usedPct(d: DriveInfo): string {
  const used = usedBytes(d);
  if (used === undefined || !d.total) return "0%";
  return `${Math.min(100, Math.max(0, (used / d.total) * 100)).toFixed(1)}%`;
}

/** 卡片副标题：`92.5 GB 可用，共 263 GB`。 */
function capacityText(d: DriveInfo): string {
  return t("driveCapacity", { free: fmtBytes(d.free), total: fmtBytes(d.total) });
}

/* ---------- 选中 / 打开 ---------- */
const sel = ref("");
const wrapRef = ref<HTMLElement | null>(null);

function onRowClick(d: DriveInfo): void {
  sel.value = d.path;
}

/** 空白处点击：取消选中并让容器获得焦点，保证键盘快捷键可用。 */
function onBlankClick(e: MouseEvent): void {
  wrapRef.value?.focus({ preventScroll: true });
  const el = e.target as HTMLElement;
  if (el.closest(".fw-drive, .fw-tp-row, th")) return;
  sel.value = "";
}

/** 双击（或回车）= 进入该盘根目录。 */
function open(d: DriveInfo): void {
  sel.value = d.path;
  void browseTo(d.path);
}

/** 键盘：↑/↓ 移动选中，Enter 打开，F5 刷新（对齐资源管理器）。 */
function onKeyNav(e: KeyboardEvent): void {
  const list = drives.value;
  if (!list.length) return;
  if (e.key === "F5") {
    e.preventDefault();
    void refreshListing();
    return;
  }
  if (e.key === "Enter" && sel.value) {
    const d = list.find((x) => x.path === sel.value);
    if (d) {
      e.preventDefault();
      open(d);
    }
    return;
  }
  if (e.key !== "ArrowDown" && e.key !== "ArrowUp" && e.key !== "Home" && e.key !== "End") return;
  e.preventDefault();
  const cur = list.findIndex((x) => x.path === sel.value);
  const next =
    e.key === "Home" ? 0 : e.key === "End" ? list.length - 1 : e.key === "ArrowDown" ? Math.min(list.length - 1, cur + 1) : Math.max(0, cur < 0 ? 0 : cur - 1);
  sel.value = list[next]?.path ?? "";
}

/* ---------- 视图切换（只记「此电脑」这一区域，不同步其它目录） ---------- */
function quickView(opt: ViewOption): void {
  setFolderView(VIEW_KEY, opt);
}

/* ---------- 右键菜单 ---------- */
const cmOpen = ref(false);
const cmX = ref(0);
const cmY = ref(0);
const cmItems = ref<MenuItem[]>([]);

function openMenu(e: MouseEvent, items: MenuItem[]): void {
  cmItems.value = items;
  cmX.value = e.clientX;
  cmY.value = e.clientY;
  cmOpen.value = true;
}

/** 驱动器右键：打开 / 在文件编辑器中打开 / 收藏 / 复制完整路径 / 属性（对齐 Win11 的常用项）。 */
function onDriveCtx(e: MouseEvent, d: DriveInfo): void {
  sel.value = d.path;
  const fav = isFavorite(d.path);
  openMenu(e, [
    { label: t("menuOpen"), icon: "arrowRight", onClick: () => open(d) },
    { label: t("menuOpenInEditor"), icon: "code", onClick: () => openProjectInEditor(d.path) },
    { separator: true },
    {
      label: fav ? t("favoriteRemove") : t("favoriteAdd"),
      icon: "star",
      onClick: () => {
        const added = toggleFavorite(d.path);
        toast("ok", added ? t("favoriteAdded") : t("favoriteRemoved"));
      },
    },
    { label: t("menuCopyPath"), icon: "link", onClick: () => void copyPath(d.path) },
    { separator: true },
    { label: t("menuProperties"), icon: "info", onClick: () => property(d) },
  ]);
}

/** 空白区右键：刷新 / 查看 / 排序方式。 */
function onBlankCtx(e: MouseEvent): void {
  openMenu(e, [
    { label: t("menuRefresh"), icon: "refresh", onClick: () => void refreshListing() },
    { separator: true },
    { label: t("menuView"), icon: "eye", children: viewItems() },
    { label: t("menuSort"), icon: "sort", children: sortItems() },
  ]);
}

/** 「查看」子菜单（与文件列表同一套档位）。 */
function viewItems(): MenuItem[] {
  const mk = (label: string, opt: ViewOption): MenuItem => ({
    label,
    checked: view.value === opt,
    onClick: () => quickView(opt),
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

/** 「排序方式」子菜单：磁盘按名称 / 总大小 / 可用空间 / 类型。 */
function sortItems(): MenuItem[] {
  const opts: [SortKey, string][] = [
    ["name", t("sortName")],
    ["size", t("driveTotal")],
    ["free", t("driveFree")],
    ["type", t("sortType")],
  ];
  return opts.map(([k, label]) => ({
    label,
    checked: driveSort.value === k,
    onClick: () => {
      driveSort.value = k;
    },
  }));
}

/* ---------- 属性（用磁盘自身数据，不做递归目录统计） ---------- */
const propOpen = ref(false);
const propDrive = ref<DriveInfo | null>(null);
function property(d: DriveInfo): void {
  propDrive.value = d;
  propOpen.value = true;
}

async function copyPath(p: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(p);
    toast("ok", t("menuPathCopied"));
  } catch {
    toast("error", t("menuPathCopyFail"));
  }
}

/* ---------- 命令栏总线：接管排序/查看/刷新/属性（文件类命令在「此电脑」下禁用） ---------- */
setFileCmdRunner((name, arg) => {
  switch (name) {
    case "view":
      if (arg && (ICON_MODES as readonly string[]).concat(["list", "details", "content", "tiles"]).includes(arg)) {
        quickView(arg as ViewOption);
      }
      break;
    case "sort":
      if (arg === "name" || arg === "size" || arg === "free" || arg === "type") driveSort.value = arg;
      break;
    case "refresh":
      void refreshListing();
      break;
    case "properties": {
      const d = drives.value.find((x) => x.path === sel.value);
      if (d) property(d);
      break;
    }
  }
});
onBeforeUnmount(() => setFileCmdRunner(null));

/** 命令栏状态回写：「此电脑」无文件写操作，文件类命令全部禁用，仅保留排序 / 查看 / 刷新。 */
watchEffect(() => {
  fileCmdState.selectionCount = sel.value ? 1 : 0;
  fileCmdState.canOperate = false;
  fileCmdState.hasClipboard = clipboardHas();
  fileCmdState.isRecycle = false;
});
</script>

<style scoped>
.fw-tp {
  display: flex;
  flex-direction: column;
  min-height: 0;
  height: 100%;
  position: relative;
}
.fw-tp-wrap {
  flex: 1;
  min-height: 0;
  overflow: auto;
}
.fw-tp-wrap:focus { outline: none; }
.fw-tp-wrap:focus-visible { outline: 1px solid var(--dsh-accent, #238636); outline-offset: -1px; }
.fw-err { color: #b62324; font-size: calc(12px * var(--dsh-fs-scale, 1)); padding: 8px 12px; }

/* 分区标题：与 Win11 一致的小号加粗分组标题 */
.fw-tp-sec {
  padding: 10px 16px 6px;
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  font-weight: 600;
  color: var(--dsh-fg, #c9d1d9);
  user-select: none;
}

/* —— 磁盘卡片（图标档位） —— */
.fw-tp-grid {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 8px 20px;
  padding: 2px 16px 18px;
}
.fw-drive {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 300px;
  max-width: 100%;
  padding: 8px 10px;
  border-radius: 6px;
  cursor: pointer;
}
.fw-drive:hover { background: var(--dsh-hover, rgba(48, 54, 61, 0.4)); }
.fw-drive.selected {
  background: var(--dsh-accent, #23863655);
  box-shadow: inset 2px 0 0 var(--dsh-accent, #238636);
}
.fw-drive.selected .fw-drive-name { font-weight: 600; }
.fw-drive-ico {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  line-height: 0;
  color: var(--dsh-fg-weak, #8b949e);
}
.fw-drive-body { flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; }
.fw-drive-name {
  font-size: calc(13px * var(--dsh-fs-scale, 1));
  color: var(--dsh-fg, #c9d1d9);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/* 容量条：已用部分用强调色填充，余量留底色（与 Win11 一致） */
.fw-drive-bar {
  display: block;
  height: 6px;
  margin: 5px 0 5px;
  border-radius: 3px;
  overflow: hidden;
  background: var(--dsh-border, #30363d);
}
.fw-drive-fill {
  display: block;
  height: 100%;
  border-radius: 3px;
  background: var(--dsh-accent, #238636);
  transition: width 0.2s ease;
}
.fw-drive-cap {
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  color: var(--dsh-fg-weak, #8b949e);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/* 小图标档位：紧凑行（图标 + 名称 + 容量文案同排） */
.fw-tp-small .fw-tp-grid { gap: 0; padding: 0 10px 12px; }
.fw-tp-small .fw-drive { width: 100%; gap: 8px; padding: 3px 6px; border-radius: 4px; }
.fw-tp-small .fw-drive-ico { width: 20px; height: 20px; }
.fw-tp-small .fw-drive-body { flex-direction: row; align-items: center; gap: 10px; }
.fw-tp-small .fw-drive-bar { display: none; }
.fw-tp-small .fw-drive-cap { flex: 0 0 auto; }
/* 大/超大图标档位：卡片更宽松 */
.fw-tp-huge .fw-drive { width: 340px; }
.fw-tp-huge .fw-drive-ico { width: 64px; height: 64px; }

/* —— 表格（列表/详细信息/内容/平铺档位） —— */
.fw-tp-table {
  width: 100%;
  border-collapse: collapse;
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  table-layout: fixed;
}
.fw-tp-table thead th {
  position: sticky;
  top: 0;
  z-index: 1;
  background: var(--dsh-bg2, #161b22);
  text-align: left;
  font-weight: 600;
  color: var(--dsh-fg-weak, #8b949e);
  padding: 5px 8px;
  border-bottom: 1px solid var(--dsh-border, #30363d);
  white-space: nowrap;
  user-select: none;
}
.fw-tp-table .col-name { width: auto; }
.fw-tp-table .col-type { width: 110px; }
.fw-tp-table .col-total { width: 100px; }
.fw-tp-table .col-free { width: 100px; }
.fw-tp-table .col-fs { width: 90px; }
.fw-tp-table td {
  padding: 4px 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.fw-tp-row { cursor: pointer; }
.fw-tp-row:hover { background: var(--dsh-hover, rgba(48, 54, 61, 0.4)); }
.fw-tp-row.selected { background: var(--dsh-accent, #23863655); }
.fw-tp-row.selected td:first-child { box-shadow: inset 2px 0 0 var(--dsh-accent, #238636); }
.fw-tp-row.selected .fw-tp-label { font-weight: 600; }
.fw-tp-n { display: inline-flex; align-items: center; gap: 6px; width: 100%; }
.fw-tp-ico { flex: 0 0 auto; display: inline-flex; align-items: center; justify-content: center; width: 18px; line-height: 0; color: var(--dsh-fg-weak, #8b949e); }
.fw-tp-label { overflow: hidden; text-overflow: ellipsis; }
.fw-tp-empty, .fw-tp-empty-cell {
  color: var(--dsh-fg-weak, #8b949e);
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  padding: 16px;
  text-align: center;
}

/* —— 加载遮罩 —— */
.fw-tp-loading {
  position: absolute;
  inset: 0;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--dsh-bg, #0d111766);
  pointer-events: none;
}
.fw-tp-spinner {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 3px solid var(--dsh-border, #30363d);
  border-top-color: var(--dsh-accent, #238636);
  animation: fw-tp-spin 0.8s linear infinite;
}
@keyframes fw-tp-spin { to { transform: rotate(360deg); } }

/* —— 底部状态栏（与文件列表同款） —— */
.fw-fl-status {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 2px 8px;
  border-top: 1px solid var(--dsh-border, #30363d);
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  color: var(--dsh-fg-weak, #8b949e);
  white-space: nowrap;
  overflow: hidden;
  user-select: none;
  height: 26px;
}
.fw-status-left { overflow: hidden; text-overflow: ellipsis; flex: 1 1 auto; min-width: 0; }
.fw-status-right { display: inline-flex; align-items: center; gap: 2px; flex: 0 0 auto; }
.fw-vs-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 20px;
  padding: 0;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: var(--dsh-fg-weak, #8b949e);
  cursor: pointer;
}
.fw-vs-btn:hover { background: var(--dsh-hover, rgba(48, 54, 61, 0.5)); color: var(--dsh-fg, #c9d1d9); }
.fw-vs-btn.on { background: var(--dsh-hover, rgba(48, 54, 61, 0.85)); color: var(--dsh-accent, #238636); }

/* —— 属性对话框（复用文件列表的对话框外观，样式在本组件内自持） —— */
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
:global(.fw-prop-dialog .el-dialog__body) { padding: 14px 16px; }
:global(.fw-prop-dialog .el-dialog__footer) { padding: 10px 16px 14px; }
.fw-prop-body { display: flex; flex-direction: column; gap: 10px; }
.fw-prop-row { display: flex; justify-content: space-between; gap: 12px; font-size: calc(12px * var(--dsh-fs-scale, 1)); }
.fw-prop-row .k { color: var(--dsh-fg-weak, #8b949e); flex-shrink: 0; }
.fw-prop-row .v { word-break: break-all; text-align: right; }
.fw-prop-bar { height: 8px; margin-top: 4px; border-radius: 4px; overflow: hidden; background: var(--dsh-border, #30363d); }
.fw-prop-fill { display: block; height: 100%; border-radius: 4px; background: var(--dsh-accent, #238636); }
</style>
