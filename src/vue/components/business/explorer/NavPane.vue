<template>
  <div class="fw-nav">
    <!-- 主文件夹（Win11：独立顶层项，点击直接进入主页视图） -->
    <button
      v-if="homeItem"
      class="fw-nav-item fw-nav-top fw-nav-leaf"
      :class="{ active: isActive(homeItem) }"
      :title="homeItem.path"
      @click="go(homeItem)"
      @contextmenu.prevent.stop="onItemCtx($event, homeItem)"
    >
      <span class="fw-nav-ico"><icon name="home" :size="14" /></span>
      <span class="fw-nav-label">{{ itemLabel(homeItem) }}</span>
    </button>

    <!-- 快速访问文件夹（Win11：直接列在顶层，右侧图钉表示已固定） -->
    <button
      v-for="it in quickFolders"
      :key="it.path"
      class="fw-nav-item fw-nav-top fw-nav-leaf"
      :class="{ active: isActive(it) }"
      :title="it.path"
      @click="go(it)"
      @contextmenu.prevent.stop="onItemCtx($event, it)"
    >
      <span class="fw-nav-ico"><icon :name="itemIcon(it)" :size="14" /></span>
      <span class="fw-nav-label">{{ itemLabel(it) }}</span>
      <span class="fw-nav-pin" :title="t('favoritePin')"><icon name="pin" :size="11" /></span>
    </button>

    <!-- 分割线①：主文件夹 / 快速访问  ⇢  此电脑 -->
    <div class="fw-nav-div" aria-hidden="true"></div>

    <!-- 此电脑：左侧箭头展开/折叠，标签点击进入「此电脑」视图（Win11 行为），两者均可右键 -->
    <div class="fw-nav-row" :class="{ active: explorer.view === 'computer' }">
      <button class="fw-nav-caret" :title="open.myComputer ? t('navCollapse') : t('navExpand')" @click="toggle('myComputer')">
        <icon :name="open.myComputer ? 'chevronDown' : 'chevronRight'" :size="12" />
      </button>
      <button
        class="fw-nav-row-main"
        :title="t('navThisPc')"
        @click="goThisPc"
        @contextmenu.prevent.stop="onThisPcCtx"
      >
        <span class="fw-nav-ico"><icon name="monitor" :size="14" /></span>
        <span class="fw-nav-label">{{ t("navThisPc") }}</span>
      </button>
    </div>
    <div v-if="open.myComputer" class="fw-nav-children">
      <div v-if="explorer.drivesErr" class="fw-nav-empty">{{ explorer.drivesErr }}</div>
      <button
        v-for="d in explorer.drives"
        :key="d.path"
        class="fw-nav-item fw-nav-drive"
        :class="{ active: isDriveActive(d) }"
        :title="d.path"
        @click="goDrive(d)"
        @contextmenu.prevent.stop="onDriveCtx($event, d)"
      >
        <span class="fw-nav-ico"><icon name="hardDrive" :size="13" /></span>
        <span class="fw-nav-label">{{ d.name }}</span>
      </button>
    </div>

    <!-- 分割线②：此电脑 / 盘符  ⇢  回收站 -->
    <div class="fw-nav-div" aria-hidden="true"></div>

    <!-- 回收站（虚拟位置：进入系统回收站视图） -->
    <button
      class="fw-nav-item fw-nav-top"
      :class="{ active: explorer.view === 'recycle' }"
      :title="t('recycleBin')"
      @click="goRecycle"
      @contextmenu.prevent.stop="onRecycleCtx"
    >
      <span class="fw-nav-ico"><icon name="trash" :size="14" /></span>
      <span class="fw-nav-label">{{ t("recycleBin") }}</span>
    </button>

    <!-- 分割线③：系统位置（主文件夹 / 此电脑 / 回收站）⇢ 插件自有分组 -->
    <div class="fw-nav-div" aria-hidden="true"></div>

    <!-- 收藏列表（插件自有分组，置于 Win11 结构之外的最下方） -->
    <div class="fw-nav-sec" :class="{ collapsed: !open.favorites }">
      <button class="fw-sec-h" :aria-expanded="open.favorites" @click="toggle('favorites')">
        <span class="fw-caret">{{ open.favorites ? "▾" : "▸" }}</span>
        <span class="fw-sec-txt">{{ t("favorites") }}</span>
      </button>
      <div v-if="open.favorites" class="fw-sec-b">
        <div v-if="favList.length === 0" class="fw-nav-empty">{{ t("emptyFavorites") }}</div>
        <button
          v-for="it in favList"
          :key="it.path"
          class="fw-nav-item"
          :class="{ active: selectedManual === it.path }"
          :title="it.path"
          @click="goFavorite(it.path)"
          @contextmenu.prevent.stop="onPathCtx($event, it.path)"
        >
          <span class="fw-nav-ico"><icon name="star" :size="13" /></span>
          <span class="fw-nav-label">{{ it.name }}</span>
        </button>
      </div>
    </div>

    <!-- 当前会话相关文件 -->
    <div class="fw-nav-sec" :class="{ collapsed: !open.session }">
      <button class="fw-sec-h" :aria-expanded="open.session" @click="toggle('session')">
        <span class="fw-caret">{{ open.session ? "▾" : "▸" }}</span>
        <span class="fw-sec-txt">{{ t("sessionFiles") }}</span>
      </button>
      <div v-if="open.session" class="fw-sec-b">
        <div v-if="sessionFiles.length === 0" class="fw-nav-empty">{{ t("emptySession") }}</div>
        <button
          v-for="it in sessionFiles"
          :key="it.path"
          class="fw-nav-item"
          :class="{ active: selectedManual === it.path }"
          :title="it.path"
          @click="goSessionTab(it.path)"
          @contextmenu.prevent.stop="onPathCtx($event, it.path)"
        >
          <span class="fw-nav-ico"><icon name="file" :size="13" /></span>
          <span class="fw-nav-label">{{ it.name }}</span>
        </button>
      </div>
    </div>

    <div v-if="explorer.loadErr" class="fw-nav-err">{{ explorer.loadErr }}</div>

    <!-- 左侧导航树右键菜单（Win11 资源管理器同款外观） -->
    <ContextMenu v-if="cmOpen" :items="cmItems" :x="cmX" :y="cmY" @close="cmOpen = false" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { explorer, browseTo, enterRecycle, openThisPc, refreshListing } from "../../../stores/explorer";
import { openTerminal } from "../../../stores/workbench";
import { useI18n } from "../../../composables/core/i18n";
import { openProjectInEditor } from "../../../composables/core/sidebarRight";
import { openPreview, toast } from "../../../stores/workbench";
import { sessionSse } from "../../../composables/session/sessionSse";
import { favorites, layout, saveLayout, toggleFavorite, isFavorite } from "../../../composables/core/settings";
import * as api from "../../../composables/core/useApi";
import Icon from "../../common/Icon.vue";
import ContextMenu from "../../common/ContextMenu.vue";
import { myComputerDriveName } from "../../../composables/domain/driveName";
import type { DriveInfo, MenuItem, MyComputerItem } from "../../../../shared/types";

const { t } = useI18n();

/** 各分组展开态（直接读写 layout.navGroups，实现 JSON 持久化）。 */
const open = layout.navGroups;
function toggle(which: "myComputer" | "favorites" | "session"): void {
  open[which] = !open[which];
  saveLayout();
}

const items = computed(() => explorer.homeItems);

/** 快速访问文件夹（Win11 侧栏直接平铺在顶层：桌面/下载/文档/图片/音乐/视频）。 */
const QUICK_TYPES: readonly string[] = ["desktop", "download", "documents", "pictures", "music", "videos"];
const quickFolders = computed(() => items.value.filter((i) => QUICK_TYPES.includes(i.type)));
/** 主文件夹（用户主目录）。 */
const homeItem = computed(() => items.value.find((i) => i.type === "home") ?? null);

/** 路径统一分隔符规范化，用于位置高亮匹配。 */
const norm = (p: string) =>
  p
    .replace(/[\\/]+/g, "/")
    .replace(/\/$/, "")
    .toLowerCase();

/**
 * 收藏/当前会话组：仅用户手动点击后才高亮选中，选中后独占高亮，与上方位置高亮互斥。
 * null = 未手动选中；string = 选中路径。
 */
const selectedManual = ref<string | null>(null);

/** 全局唯一的选中项：取路径能覆盖当前位置的最深层匹配，避免多个分组同时高亮。 */
function activeItem(): MyComputerItem | null {
  if (selectedManual.value || explorer.view !== "files") return null;
  const cur = explorer.listing?.path ?? "";
  if (!cur) return null;
  const c = norm(cur);
  let best: MyComputerItem | null = null;
  let bestLen = -1;
  for (const it of items.value) {
    const target = norm(it.path);
    if (!target || (!(c === target) && !c.startsWith(`${target}/`))) continue;
    if (target.length > bestLen) {
      bestLen = target.length;
      best = it;
    }
  }
  return best;
}

function isActive(it: MyComputerItem): boolean {
  return activeItem()?.path === it.path;
}

/** 磁盘子项高亮：当前位置落在该盘符下（盘符唯一，无需最深层匹配）。 */
function isDriveActive(d: DriveInfo): boolean {
  if (selectedManual.value || explorer.view !== "files") return false;
  const p = explorer.listing?.path ?? "";
  if (!p) return false;
  if (!d.letter) return norm(p) === "/"; // POSIX：根目录
  return p.toLowerCase().startsWith(`${d.letter.toLowerCase()}:`);
}

function go(it: MyComputerItem): void {
  selectedManual.value = null; // 点位置项：清除手动选中，恢复位置高亮
  // Windows 系统回收站是虚拟入口（path 为空）：进入回收站视图而非文件系统浏览。
  if (it.type === "recycle") {
    void enterRecycle();
    return;
  }
  void browseTo(it.path);
}

/** 「此电脑」标签点击：进入此电脑视图（右侧显示「设备和驱动器」）并展开磁盘子项。 */
function goThisPc(): void {
  selectedManual.value = null;
  if (!open.myComputer) {
    open.myComputer = true;
    saveLayout();
  }
  void openThisPc();
}

/** 磁盘子项点击：进入该盘根目录。 */
function goDrive(d: DriveInfo): void {
  selectedManual.value = null;
  void browseTo(d.path);
}

/** 独立「回收站」按钮：清除手动选中并进入回收站视图。 */
function goRecycle(): void {
  selectedManual.value = null;
  void enterRecycle();
}

/** 取绝对路径的最后一段作为展示名（磁盘根保持原样）。 */
const baseName = (p: string): string => {
  const seg = p
    .replace(/[\\/]+$/, "")
    .split(/[\\/]/)
    .pop();
  return seg || p;
};

/** 取绝对路径的父目录（兼容 / 与 \ 分隔符）。 */
function parentDir(p: string): string {
  const i = Math.max(p.lastIndexOf("/"), p.lastIndexOf("\\"));
  return i < 0 ? p : p.slice(0, i);
}

/** 收藏：仅存路径，直接从本地持久化读取。 */
const favList = computed(() => favorites.value.map((p) => ({ path: p, name: baseName(p) })));

/** 当前会话内涉及到的文件：来自后端 /stream/session SSE 实时推送。 */
const sessionFiles = computed(() =>
  sessionSse.files
    .filter((p) => p)
    .map((p) => ({ path: p, name: baseName(p) })),
);

/** 收藏条目：文件夹→进入该目录，文件→预览并让资源管理器定位到其所在文件夹。 */
async function goFavorite(p: string): Promise<void> {
  selectedManual.value = p; // 仅点击后高亮
  try {
    const det = await api.detail(p);
    if (det.isDir) {
      void browseTo(p);
    } else {
      void openPreview(p);
      void browseTo(parentDir(p));
    }
  } catch {
    void browseTo(p);
  }
}

/** 当前会话标签：文件→预览并定位所在文件夹，目录→浏览该目录。 */
async function goSessionTab(p: string): Promise<void> {
  selectedManual.value = p; // 仅点击后高亮
  try {
    const det = await api.detail(p);
    if (det.isDir) {
      void browseTo(p);
    } else {
      void openPreview(p);
      void browseTo(parentDir(p));
    }
  } catch {
    void openPreview(p);
    void browseTo(parentDir(p));
  }
}

/** 条目的展示文案（按条目类型本地化，盘符按其字母本地化）。 */
function itemLabel(it: MyComputerItem): string {
  switch (it.type) {
    case "drive":
      // 有系统卷标 → `卷标 (C:)`；无卷标 → 本地化的「本地磁盘 (C:)」。
      return myComputerDriveName(it);
    case "home":
      return t("navHome");
    case "desktop":
      return t("desktopEntry");
    case "download":
      return t("downloadEntry");
    case "documents":
      return t("documentEntry");
    case "pictures":
      return t("pictureEntry");
    case "music":
      return t("musicEntry");
    case "videos":
      return t("videoEntry");
    case "gallery":
      return t("navGallery");
    case "workspace":
      return t("workspaceEntry");
    case "recycle":
      return t("recycleBin");
    default:
      return it.name;
  }
}

/** 条目的图标（线性 SVG 注册表中的语义名）。 */
function itemIcon(it: MyComputerItem): string {
  switch (it.type) {
    case "drive":
      return "hardDrive";
    case "recycle":
      return "trash";
    case "workspace":
      return "folder";
    case "home":
      return "home";
    case "desktop":
      return "monitor";
    case "download":
      return "download";
    case "documents":
      return "fileText";
    case "pictures":
      return "image";
    case "music":
      return "music";
    case "videos":
      return "video";
    case "gallery":
      return "image";
    default:
      return "folder";
  }
}

/* ---------- 右键菜单（Win11 左侧导航树） ---------- */
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

/** 路径型条目的右键菜单：打开 / 在文件编辑器中打开 / 收藏 / 复制完整路径（属性需递归统计目录大小，故不在此提供）。 */
function onPathCtx(e: MouseEvent, path: string): void {
  const fav = isFavorite(path);
  openMenu(e, [
    { label: t("menuOpen"), icon: "arrowRight", onClick: () => void browseTo(path) },
    { label: t("menuOpenInEditor"), icon: "code", onClick: () => openProjectInEditor(path) },
    { separator: true },
    {
      label: fav ? t("favoriteRemove") : t("favoriteAdd"),
      icon: "star",
      onClick: () => {
        const added = toggleFavorite(path);
        toast("ok", added ? t("favoriteAdded") : t("favoriteRemoved"));
      },
    },
    { label: t("menuCopyPath"), icon: "link", onClick: () => void copyPath(path) },
    { label: t("menuOpenTerminal"), icon: "terminal", onClick: () => openTerminal(path) },
  ]);
}

/** 「我的电脑」类条目（主文件夹/图库/快速访问）的右键菜单。 */
function onItemCtx(e: MouseEvent, it: MyComputerItem): void {
  onPathCtx(e, it.path);
}

/** 「此电脑」右键：展开/折叠 + 打开 + 刷新。 */
function onThisPcCtx(e: MouseEvent): void {
  openMenu(e, [
    {
      label: open.myComputer ? t("navCollapse") : t("navExpand"),
      icon: open.myComputer ? "chevronDown" : "chevronRight",
      onClick: () => toggle("myComputer"),
    },
    { label: t("menuOpen"), icon: "arrowRight", onClick: goThisPc },
    { separator: true },
    { label: t("menuRefresh"), icon: "refresh", onClick: () => void refreshListing() },
  ]);
}

/** 磁盘右键：打开 / 收藏 / 复制完整路径。 */
function onDriveCtx(e: MouseEvent, d: DriveInfo): void {
  onPathCtx(e, d.path);
}

/** 回收站右键：打开 / 刷新（清空等破坏性操作只在回收站视图的列表里提供）。 */
function onRecycleCtx(e: MouseEvent): void {
  openMenu(e, [
    { label: t("menuOpen"), icon: "arrowRight", onClick: goRecycle },
    { separator: true },
    { label: t("menuRefresh"), icon: "refresh", onClick: () => void refreshListing() },
  ]);
}

async function copyPath(p: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(p);
    toast("ok", t("menuPathCopied"));
  } catch {
    toast("error", t("menuPathCopyFail"));
  }
}
</script>

<style scoped>
.fw-nav {
  height: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 4px 0 8px;
  user-select: none;
}
/* 条目：与 Win11 一致的行高与圆角，悬停/选中为整行色块 */
.fw-nav-item {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  min-height: 26px;
  padding: 3px 10px;
  border: none;
  background: transparent;
  color: var(--dsh-fg, #c9d1d9);
  cursor: pointer;
  text-align: left;
  border-radius: 4px;
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  line-height: 1.4;
}
.fw-nav-item:hover {
  background: var(--dsh-hover, rgba(48, 54, 61, 0.5));
}
.fw-nav-item.active {
  background: var(--dsh-hover, rgba(48, 54, 61, 0.85));
  box-shadow: inset 2px 0 0 var(--dsh-accent, #238636);
  font-weight: 600;
}
.fw-nav-top {
  margin: 0 4px 1px;
}
/*
 * 分组分割线：把左侧导航的几大类（主文件夹·快速访问 / 此电脑·盘符 / 回收站 / 收藏·会话文件）
 * 用细线分隔，左右内缩留白，与 Win11 资源管理器导航窗格的分组观感一致。
 * 分割线本身不可点、不参与选中，仅作视觉分区。
 */
.fw-nav-div {
  flex: 0 0 auto;
  height: 1px;
  margin: 6px 10px;
  background: var(--dsh-border, #30363d);
}
/* 快速访问文件夹：右侧固定图钉（Win11 已固定项的标志） */
.fw-nav-leaf .fw-nav-pin {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  opacity: 0;
  color: var(--dsh-fg-weak, #8b949e);
  transition: opacity 0.12s;
}
.fw-nav-leaf:hover .fw-nav-pin { opacity: 0.7; }

/* 可展开节点（此电脑）：左侧箭头单独可点，标签点击进入该位置 */
.fw-nav-row {
  display: flex;
  align-items: center;
  margin: 2px 4px 1px;
  border-radius: 4px;
}
.fw-nav-row:hover { background: var(--dsh-hover, rgba(48, 54, 61, 0.5)); }
.fw-nav-row.active {
  background: var(--dsh-hover, rgba(48, 54, 61, 0.85));
  box-shadow: inset 2px 0 0 var(--dsh-accent, #238636);
}
.fw-nav-row.active .fw-nav-row-main { font-weight: 600; }
.fw-nav-caret {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 22px;
  padding: 0;
  border: none;
  background: transparent;
  color: var(--dsh-fg-weak, #8b949e);
  cursor: pointer;
  border-radius: 4px;
}
.fw-nav-caret:hover { background: var(--dsh-border, #30363d); color: var(--dsh-fg, #c9d1d9); }
.fw-nav-row-main {
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 26px;
  padding: 3px 10px 3px 0;
  border: none;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  cursor: pointer;
  text-align: left;
}
/* 子项缩进：与 Win11 一致（箭头宽度 + 图标起点对齐） */
.fw-nav-children { display: flex; flex-direction: column; }
.fw-nav-drive { padding-left: 28px; }

.fw-nav-sec {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 6px;
}
.fw-sec-h {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  padding: 6px 10px 4px;
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  font-weight: 600;
  color: var(--dsh-fg-weak, #8b949e);
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  user-select: none;
  letter-spacing: 0.2px;
}
.fw-sec-h:hover { color: var(--dsh-fg, #c9d1d9); }
.fw-caret { flex: 0 0 auto; width: 10px; font-size: calc(9px * var(--dsh-fs-scale, 1)); opacity: 0.85; text-align: center; }
.fw-sec-txt { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.fw-sec-b { display: flex; flex-direction: column; gap: 1px; padding: 0 6px; }
.fw-nav-ico {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  line-height: 0;
  color: var(--dsh-fg-weak, #8b949e);
}
.fw-nav-item.active .fw-nav-ico,
.fw-nav-row.active .fw-nav-ico { color: var(--dsh-accent, #238636); }
.fw-nav-label { flex: 1 1 auto; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.fw-nav-err { color: #b62324; font-size: calc(12px * var(--dsh-fs-scale, 1)); padding: 4px 10px 8px; }
.fw-nav-empty { font-size: calc(11px * var(--dsh-fs-scale, 1)); color: var(--dsh-fg-weak, #8b949e); padding: 4px 10px 8px; user-select: none; }
</style>
