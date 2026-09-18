<template>
  <div class="fw-nav" :class="{ 'external-active': externalActive }">
    <!-- 主文件夹（Win11：独立顶层项，点击直接进入主页视图） -->
    <button
      v-if="homeItem"
      class="fw-nav-item fw-nav-top fw-nav-leaf"
      :class="{ active: !externalActive && isActive(homeItem) }"
      :title="homeItem.path"
      @click="go(homeItem)"
      @contextmenu.prevent.stop="onItemCtx($event, homeItem)"
    >
      <span class="fw-nav-ico"><icon name="home" :size="14" /></span>
      <span class="fw-nav-label">{{ itemLabel(homeItem) }}</span>
    </button>

    <!-- 快速访问文件夹（Win11：直接列在顶层，右侧图钉表示已固定）。
         「下载」单独拎出来放到回收站之下，中间以分割线区分。 -->
    <button
      v-for="it in quickFolders.filter((i) => i.type !== 'download')"
      :key="it.path"
      class="fw-nav-item fw-nav-top fw-nav-leaf"
      :class="{ active: !externalActive && isActive(it) }"
      :title="it.path"
      @click="go(it)"
      @contextmenu.prevent.stop="onItemCtx($event, it)"
    >
      <span class="fw-nav-ico"><icon :name="itemIcon(it)" :size="14" /></span>
      <span class="fw-nav-label">{{ itemLabel(it) }}</span>
      <span class="fw-nav-pin" :title="t('favoritePin')"><icon name="pin" :size="11" /></span>
    </button>

    <!-- 回收站（虚拟位置：紧跟快速访问之下；清空入口在右键菜单）。 -->
    <button
      class="fw-nav-item fw-nav-top"
      :class="{ active: !externalActive && explorer.view === 'recycle' }"
      :title="t('recycleBin')"
      @click="goRecycle"
      @contextmenu.prevent.stop="onRecycleCtx"
    >
      <span class="fw-nav-ico"><icon name="trash" :size="14" /></span>
      <span class="fw-nav-label">{{ t("recycleBin") }}</span>
    </button>

    <!-- 分割线：回收站 ⇢ 下载 -->
    <div class="fw-nav-div" aria-hidden="true"></div>

    <!-- 下载（原快速访问成员，按需求移至回收站下方）。 -->
    <button
      v-for="it in quickFolders.filter((i) => i.type === 'download')"
      :key="it.path"
      class="fw-nav-item fw-nav-top fw-nav-leaf"
      :class="{ active: !externalActive && isActive(it) }"
      :title="it.path"
      @click="go(it)"
      @contextmenu.prevent.stop="onItemCtx($event, it)"
    >
      <span class="fw-nav-ico"><icon :name="itemIcon(it)" :size="14" /></span>
      <span class="fw-nav-label">{{ itemLabel(it) }}</span>
      <span class="fw-nav-pin" :title="t('favoritePin')"><icon name="pin" :size="11" /></span>
    </button>

    <!-- 分割线：快速访问 / 回收站 / 下载  ⇢  此电脑 -->
    <div class="fw-nav-div" aria-hidden="true"></div>

    <!-- 此电脑：标题只负责展开/折叠，右键标题仍打开菜单。 -->
    <div class="fw-nav-sec" :class="{ collapsed: !open.myComputer, active: !externalActive && explorer.view === 'computer' }">
      <button class="fw-sec-h" :aria-expanded="open.myComputer" @click="toggleMyComputer" @contextmenu.prevent.stop="onThisPcCtx">
        <span class="fw-caret" :class="{ open: open.myComputer }"><icon name="chevronDown" :size="11" /></span>
        <span class="fw-sec-txt"><span class="fw-sec-icon"><icon name="monitor" :size="14" /></span>{{ t("navThisPc") }}</span>
      </button>
      <div v-if="open.myComputer" class="fw-sec-b">
      <div v-if="explorer.drivesErr" class="fw-nav-empty is-err">{{ explorer.drivesErr }}</div>
      <button
        v-for="d in explorer.drives"
        :key="d.path"
        class="fw-nav-item fw-nav-drive"
        :class="{ active: !externalActive && isDriveActive(d) }"
        :title="d.path"
        @click="goDrive(d)"
        @contextmenu.prevent.stop="onDriveCtx($event, d)"
      >
        <span class="fw-nav-ico"><icon name="hardDrive" :size="13" /></span>
        <span class="fw-nav-label">{{ d.name }}</span>
      </button>
      </div>
    </div>

    <!-- 外部注入：置于回收站下方，无注册视图时整组不显示。 -->
    <div v-if="externalViews.length" class="fw-nav-sec fw-nav-external" :class="{ collapsed: externalCollapsed }">
      <button class="fw-sec-h" :aria-expanded="!externalCollapsed" @click="emit('toggle-external')">
        <span class="fw-caret" :class="{ open: !externalCollapsed }"><icon name="chevronDown" :size="11" /></span>
        <span class="fw-sec-txt">{{ t("externalInjection") }}</span>
      </button>
      <div v-if="!externalCollapsed" class="fw-sec-b">
        <button
          v-for="view in externalViews"
          :key="view.id"
          class="fw-nav-item fw-nav-external-item"
          :class="{ active: activeExternalId === view.id }"
          :title="activityLabel(view)"
          @click="emit('select-external', view.id)"
        >
          <span class="fw-nav-ico">
            <icon v-if="hasIcon(view.icon ?? '')" :name="view.icon ?? ''" :size="14" />
            <span v-else>{{ activityLabel(view).slice(0, 1) }}</span>
          </span>
          <span class="fw-nav-label">
            <span>{{ activityLabel(view) }}</span>
          </span>
        </button>
      </div>
    </div>

    <!-- 插件自有分组（SSH / 收藏）：靠分组标题自身分区，不再加分隔线 -->
    <!-- SSH 远端主机（插件自有分组：已配置主机各占一行，点击进入远端根浏览） -->
    <div class="fw-nav-sec" :class="{ collapsed: !open.ssh }">
      <button
        class="fw-sec-h"
        :aria-expanded="open.ssh"
        @click="toggle('ssh')"
        @contextmenu.prevent.stop="onSshGroupCtx"
      >
        <span class="fw-caret" :class="{ open: open.ssh }"><icon name="chevronDown" :size="11" /></span>
        <span class="fw-sec-txt">{{ t("sshNavGroup") }}</span>
      </button>
      <div v-if="open.ssh" class="fw-sec-b">
        <div v-if="sshHosts.length === 0" class="fw-nav-empty" @contextmenu.prevent.stop="onSshGroupCtx">{{ t("sshEmpty") }}</div>
        <button
          v-for="h in sshHosts"
          :key="h.id"
          class="fw-nav-item"
          :class="{ active: !externalActive && isSshActive(h) }"
          :title="`${h.user}@${h.host}:${h.port}`"
          @click="goSsh(h)"
          @contextmenu.prevent.stop="onSshCtx($event, h)"
        >
          <span class="fw-nav-ico"><icon name="globe" :size="13" /></span>
          <span class="fw-nav-label">{{ h.name || `${h.user}@${h.host}` }}</span>
          <span class="fw-ssh-dot" :class="`is-${sshStateOf(h.id)}`" :title="sshDotTitle(h)"></span>
        </button>
      </div>
    </div>

    <!-- 收藏列表（插件自有分组，置于 Win11 结构之外的最下方） -->
    <div class="fw-nav-sec" :class="{ collapsed: !open.favorites }">
      <button class="fw-sec-h" :aria-expanded="open.favorites" @click="toggle('favorites')">
        <span class="fw-caret" :class="{ open: open.favorites }"><icon name="chevronDown" :size="11" /></span>
        <span class="fw-sec-txt">{{ t("favorites") }}</span>
      </button>
      <div v-if="open.favorites" class="fw-sec-b">
        <div v-if="favList.length === 0" class="fw-nav-empty">{{ t("emptyFavorites") }}</div>
        <button
          v-for="it in favList"
          :key="it.path"
          class="fw-nav-item"
          :class="{ active: !externalActive && selectedManual === it.path }"
          :title="it.path"
          @click="goFavorite(it.path)"
          @contextmenu.prevent.stop="onPathCtx($event, it.path, { openEditor: false, openTerminal: false, openParent: true })"
        >
          <span class="fw-nav-ico"><icon name="star" :size="13" /></span>
          <span class="fw-nav-label">{{ it.name }}</span>
        </button>
      </div>
    </div>

    <!-- 加载/连接错误：统一错误态（图标 + 居中文案），替代裸排红字 -->
    <div v-if="explorer.loadErr" class="fw-error">
      <span class="fw-error-ico"><icon name="warning" :size="16" /></span>
      <span>{{ explorer.loadErr }}</span>
      <button class="fw-retry" @click="refreshListing()">{{ t("retry") }}</button>
    </div>

    <!-- 左侧导航树右键菜单（Win11 资源管理器同款外观） -->
    <ContextMenu v-if="cmOpen" :items="cmItems" :x="cmX" :y="cmY" @close="cmOpen = false" />
    <!-- SSH 主机增/改对话框（「新建 ▾ → 添加 SSH 主机」或树内右键「编辑」触发） -->
    <SshHostDialog />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { explorer, browseTo, enterRecycle, openThisPc, refreshListing } from "../../../stores/explorer";
import { openTerminal } from "../../../stores/workbench";
import { sshHosts, sshRootRef, sshParentOf, sshStateOf, sshErrorOf, refreshSshHosts, refreshSshStatus, pingSshHost, startSshStatusWatch, openSshEditDialog, openSshAddDialog } from "../../../stores/ssh";
import { useI18n } from "../../../composables/core/i18n";
import { openProjectInEditor } from "../../../composables/core/sidebarRight";
import { openPreview, toast } from "../../../stores/workbench";
import { emptyRecycleBin } from "../../../composables/session/recycle";
import { favorites, layout, saveLayout, toggleFavorite, isFavorite } from "../../../composables/core/settings";
import * as api from "../../../composables/core/useApi";
import Icon from "../../common/Icon.vue";
import ContextMenu from "../../common/ContextMenu.vue";
import { useContextMenu } from "../../../composables/ui/useContextMenu";
import SshHostDialog from "./SshHostDialog.vue";
import { myComputerDriveName } from "../../../composables/domain/driveName";
import type { DriveInfo, MenuItem, MyComputerItem } from "../../../../shared/types";
import { hasIcon } from "../../../composables/ui/icons";
import { activityText, type ActivityView } from "../../../stores/activityBar";

const { t } = useI18n();
const props = withDefaults(
  defineProps<{
    externalViews?: readonly ActivityView[];
    externalCollapsed?: boolean;
    activeExternalId?: string;
    externalActive?: boolean;
  }>(),
  { externalViews: () => [], externalCollapsed: false },
);
const emit = defineEmits<{
  (e: "toggle-external"): void;
  (e: "select-external", id: string): void;
  (e: "select-local"): void;
}>();
const externalViews = computed(() => props.externalViews ?? []);
const externalCollapsed = computed(() => props.externalCollapsed === true);
const activeExternalId = computed(() => props.activeExternalId ?? "");
const externalActive = computed(() => props.externalActive === true);
function activityLabel(view: ActivityView): string {
  return activityText(view.title);
}

/** 各分组展开态（直接读写 layout.navGroups，实现 JSON 持久化）。 */
const open = layout.navGroups;
function toggle(which: "myComputer" | "favorites" | "ssh"): void {
  open[which] = !open[which];
  saveLayout();
}

/* ── SSH 远端主机入口 ── */

/** 挂载时拉一次并探测连接状态；之后由推送通道保持指示灯新鲜（设置里增删会调 refreshSshHosts 同步）。 */
onMounted(async () => {
  await refreshSshHosts();
  startSshStatusWatch();
  await refreshSshStatus();
});

/** 当前位置是否落在该主机的远端树下（用于导航树高亮）。 */
function isSshActive(h: api.SshHostPublic): boolean {
  if (selectedManual.value || explorer.view !== "files") return false;
  const cur = explorer.listing?.path ?? "";
  if (!cur) return false;
  return norm(cur).startsWith(norm(sshRootRef(h.id)));
}

/** 指示灯文案：状态 + 失败原因（offline 时 host 会回传 error）。 */
function sshDotTitle(h: api.SshHostPublic): string {
  const s = sshStateOf(h.id);
  const base =
    s === "online" ? t("sshStatusOnline") : s === "offline" ? t("sshStatusOffline") : s === "checking" ? t("sshStatusChecking") : t("sshStatusUnknown");
  return s === "offline" && sshErrorOf(h.id) ? `${base}：${sshErrorOf(h.id)}` : base;
}

/** 点击：直接浏览远端根（不改工作区根，浏览本身不受 root 限制），顺带刷新连接状态。 */
function goSsh(h: api.SshHostPublic): void {
  emit("select-local");
  selectedManual.value = null;
  void browseTo(sshRootRef(h.id));
  void pingSshHost(h.id);
}

/** 右键：连接管理（浏览 / 测试 / 终端登录 / 编辑 / 删除 / 复制路径）。 */
const sshConfirmId = ref("");
function onSshCtx(e: MouseEvent, h: api.SshHostPublic): void {
  openMenu(e, [
    { label: t("menuOpen"), icon: "arrowRight", onClick: () => goSsh(h) },
    { label: t("sshTest"), icon: "refresh", onClick: () => void testSsh(h) },
    { label: t("menuOpenTerminal"), icon: "terminal", onClick: () => openTerminal(sshRootRef(h.id)) },
    { separator: true },
    { label: t("sshEdit"), icon: "gear", onClick: () => openSshEditDialog(h.id) },
    { label: sshConfirmId.value === h.id ? t("sshDeleteConfirm") : t("sshDelete"), icon: "trash", onClick: () => void removeSsh(h) },
    { separator: true },
    { label: t("menuCopyPath"), icon: "link", onClick: () => void copyPath(sshRootRef(h.id)) },
  ]);
}

/**
 * 「SSH 远程」分组标题右键：分组级操作（添加主机 / 展开折叠 / 刷新）。
 *
 * 标题常驻可见（折叠时也在），空列表时点不到任何主机行 —— 这是「列表为空又没别的入口」
 * 场景下唯一的就近新建入口，故放在首位。
 */
function onSshGroupCtx(e: MouseEvent): void {
  openMenu(e, [
    { label: t("sshNewHost"), icon: "plus", onClick: () => openSshAddDialog() },
    { separator: true },
    {
      label: open.ssh ? t("navCollapse") : t("navExpand"),
      icon: open.ssh ? "chevronDown" : "chevronRight",
      onClick: () => toggle("ssh"),
    },
    { label: t("menuRefresh"), icon: "refresh", onClick: () => void refreshSshAll() },
  ]);
}

/** 重新拉取主机列表并重探所有连接状态（右键「刷新」）。 */
async function refreshSshAll(): Promise<void> {
  await refreshSshHosts();
  await refreshSshStatus();
}

/** 测试连接并让指示灯立刻反映结果。 */
async function testSsh(h: api.SshHostPublic): Promise<void> {
  const r = await api.sshTest({ id: h.id });
  if (r.ok) toast("ok", `${t("sshTestOk")}${r.banner ? ` (${r.banner})` : ""}`);
  else toast("error", `${t("sshTestFail")}: ${r.error ?? ""}`);
  await pingSshHost(h.id);
}

/** 删除主机：两击确认（第一次点亮确认态，第二次才真删，避免误删后重输凭据）。 */
async function removeSsh(h: api.SshHostPublic): Promise<void> {
  if (sshConfirmId.value !== h.id) {
    sshConfirmId.value = h.id;
    return;
  }
  sshConfirmId.value = "";
  await api.sshRemove(h.id);
  await refreshSshHosts();
}

const items = computed(() => explorer.homeItems);

/** 快速访问文件夹（Win11 侧栏直接平铺在顶层：桌面/下载/文档/图片/音乐/视频）。 */
const QUICK_TYPES: readonly string[] = ["desktop", "download"];
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
  emit("select-local");
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
  emit("select-local");
  selectedManual.value = null;
  if (!open.myComputer) {
    open.myComputer = true;
    saveLayout();
  }
  void openThisPc();
}

/** 「我的电脑」分组标题：行为与 SSH 分组一致，重复点击只展开/收起当前分组。 */
function toggleMyComputer(): void {
  open.myComputer = !open.myComputer;
  saveLayout();
}

/** 磁盘子项点击：进入该盘根目录。 */
function goDrive(d: DriveInfo): void {
  emit("select-local");
  selectedManual.value = null;
  void browseTo(d.path);
}

/** 独立「回收站」按钮：清除手动选中并进入回收站视图。 */
function goRecycle(): void {
  emit("select-local");
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

/**
 * 取条目的父级引用：远端引用必须走 `sshParentOf`（POSIX 语义）——
 * `ssh://id/etc/nginx.conf` 若交给 win32 的 `parentDir` 会被切成 `ssh://id/etc` 之外的东西。
 */
function parentRefOf(p: string): string {
  return api.isRemoteRef(p) ? sshParentOf(p) || p : parentDir(p);
}

/**
 * 「打开所在文件夹」：条目是目录 → 直接进入；条目是文件 → 进入其所在目录。
 *
 * 收藏与「当前会话」都可能存**文件**路径，而 `browseTo(文件)` 会去 `listDirectory`
 * 一个文件 → ENOTDIR，界面显示「无法访问此文件夹（可能受系统保护或权限不足）」。
 * 详情探测失败（已删除 / 无权限 / 未知主机）时按「可能是文件」处理，回退到父目录，
 * 避免再走 `browseTo(文件)` 这条必然失败的路。
 */
async function openContainingFolder(p: string): Promise<void> {
  selectedManual.value = p;
  try {
    const det = await api.detail(p);
    void browseTo(det.isDir ? p : parentRefOf(p));
  } catch {
    void browseTo(parentRefOf(p));
  }
}

/** 收藏：仅存路径，直接从本地持久化读取。 */
const favList = computed(() => favorites.value.map((p) => ({ path: p, name: baseName(p) })));

/** 收藏条目：文件夹→进入该目录，文件→预览并让资源管理器定位到其所在文件夹。 */
async function goFavorite(p: string): Promise<void> {
  emit("select-local");
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

/* ---------- 右键菜单（Win11 左侧导航树；状态收敛到公共 composable） ---------- */
const { cmOpen, cmX, cmY, cmItems, openMenu } = useContextMenu();

/**
 * 路径型条目的右键菜单：打开 / 在文件编辑器中打开 / 收藏 / 复制完整路径（属性需递归统计目录大小，故不在此提供）。
 * `opts` 供调用点裁剪条目：收藏列表不提供「在编辑器打开 / 在终端打开」，且「打开」语义改为「打开所在文件夹」
 * （收藏里可能存的是文件，直接 `browseTo(文件)` 会 ENOTDIR）。
 */
function onPathCtx(
  e: MouseEvent,
  path: string,
  opts: { openEditor?: boolean; openTerminal?: boolean; openParent?: boolean } = {},
): void {
  const fav = isFavorite(path);
  const items: MenuItem[] = [
    opts.openParent
      ? { label: t("menuOpen"), icon: "arrowRight", onClick: () => void openContainingFolder(path) }
      : { label: t("menuOpen"), icon: "arrowRight", onClick: () => void browseTo(path) },
  ];
  if (opts.openEditor !== false) {
    items.push({ label: t("menuOpenInEditor"), icon: "code", onClick: () => openProjectInEditor(path) });
  }
  items.push({ separator: true });
  items.push({
    label: fav ? t("favoriteRemove") : t("favoriteAdd"),
    icon: "star",
    onClick: () => {
      const added = toggleFavorite(path);
      toast("ok", added ? t("favoriteAdded") : t("favoriteRemoved"));
    },
  });
  items.push({ label: t("menuCopyPath"), icon: "link", onClick: () => void copyPath(path) });
  if (opts.openTerminal !== false) {
    items.push({ label: t("menuOpenTerminal"), icon: "terminal", onClick: () => openTerminal(path) });
  }
  openMenu(e, items);
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

/** 回收站右键：打开 / 刷新 / 清空（清空走共享的确认+后台任务流程）。 */
function onRecycleCtx(e: MouseEvent): void {
  openMenu(e, [
    { label: t("menuOpen"), icon: "arrowRight", onClick: goRecycle },
    { label: t("menuRefresh"), icon: "refresh", onClick: () => void refreshListing() },
    { separator: true },
    { label: t("recycleEmpty"), icon: "trash", disabled: (explorer.recycleItems?.length ?? 0) === 0, onClick: () => void emptyRecycleBin() },
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
  gap: 3px;
  min-width: 0;
  padding: 6px 6px 10px;
  user-select: none;
}
.fw-nav * { min-width: 0; }
/* 条目：与 Win11 一致的行高与圆角，悬停/选中为整行色块 */
.fw-nav-item {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  /* 顶部系统行 / 子项 / 分组标题统一 28px 行高，左栏节奏一致 */
  min-height: 28px;
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
/* 外部注入视图激活时，右侧已不属于本地文件导航，避免本地入口与注入按钮同时高亮。 */
.fw-nav.external-active .fw-nav-item.active:not(.fw-nav-external-item),
.fw-nav.external-active .fw-nav-row.active,
.fw-nav.external-active .fw-nav-sec.active {
  background: transparent;
  box-shadow: none;
  font-weight: inherit;
}
.fw-nav.external-active .fw-nav-item.active:not(.fw-nav-external-item) .fw-nav-ico,
.fw-nav.external-active .fw-nav-row.active .fw-nav-ico,
.fw-nav.external-active .fw-nav-sec.active .fw-sec-txt {
  color: inherit;
}
.fw-nav-top {
  margin: 0 4px 1px;
  min-height: 28px;
}
/*
 * 分组分割线：把左侧导航的几大类（主文件夹·快速访问 / 此电脑·盘符 / 回收站 / 收藏·会话文件）
 * 用细线分隔，左右内缩留白，与 Win11 资源管理器导航窗格的分组观感一致。
 * 分割线本身不可点、不参与选中，仅作视觉分区；颜色比边框再淡一档，避免满屏线条感。
 */
.fw-nav-div {
  flex: 0 0 auto;
  height: 1px;
  margin: 6px 10px;
  background: color-mix(in srgb, var(--dsh-border, #30363d) 55%, transparent);
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
  /* 整行可点（点击空白处=进入该位置），与条目的点击观感一致 */
  cursor: pointer;
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
  min-height: 28px;
  padding: 3px 10px 3px 0;
  border: none;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  cursor: pointer;
  text-align: left;
}
/* 子项缩进 + 引导线：与下方插件分组的展开结构一致 */
.fw-nav-children {
  display: flex;
  flex-direction: column;
  margin-left: 22px;
  padding-left: 4px;
  border-left: 1px solid color-mix(in srgb, var(--dsh-border, #30363d) 60%, transparent);
}
.fw-nav-drive { padding-left: 8px; }

.fw-nav-sec {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  /* 分组之间用留白分区（替代分隔线）：节标题自带层次，线多了反而平 */
  margin-top: 12px;
}
/* 节标题：真正的“分组头”——小号加粗 + 大字距 + 弱色，与普通条目拉开层级 */
.fw-sec-h {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 5px;
  width: calc(100% - 8px);
  min-height: 28px;
  margin: 0 4px;
  padding: 0 8px 0 4px;
  font-size: calc(13px * var(--dsh-fs-scale, 1));
  font-weight: 800;
  color: var(--dsh-fg-muted, #6e7681);
  background: transparent;
  border: none;
  border-radius: var(--dsh-radius-sm, 4px);
  cursor: pointer;
  text-align: left;
  user-select: none;
  letter-spacing: 0.6px;
}
.fw-sec-icon {
  display: inline-flex;
  align-items: center;
  margin-right: 3px;
  vertical-align: -2px;
}
.fw-sec-h:hover {
  color: var(--dsh-fg, #c9d1d9);
  background: var(--dsh-hover, rgba(48, 54, 61, 0.35));
}
/* 分组 chevron：展开/折叠同一图标 + 旋转过渡，替代 ▾/▸ 字符切换 */
.fw-caret {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 12px;
  color: var(--dsh-fg-muted, #6e7681);
  transition: transform 0.15s ease;
}
.fw-caret.open { transform: rotate(0deg); }
.fw-caret:not(.open) { transform: rotate(-90deg); }
.fw-sec-txt { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
/* 分组内容：缩进 + 左侧引导线，让“属于该分组”一眼可辨（树形层次的核心） */
.fw-sec-b {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 2px 10px 0 16px;
  padding-left: 4px;
  border-left: 1px solid color-mix(in srgb, var(--dsh-border, #30363d) 60%, transparent);
}
.fw-sec-b .fw-nav-item { padding-left: 8px; }
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
.fw-nav-label { flex: 1 1 auto; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
/* 分组空态：图标 + 居中弱化文案；is-err 变体用于错误信息（danger 色点缀） */
.fw-nav-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 14px 10px;
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  color: var(--dsh-fg-muted, #6e7681);
  text-align: center;
  user-select: none;
}
.fw-nav-empty.is-err { color: var(--dsh-danger, #f85149); }
/* 连接指示灯：绿=已连接 / 红=断开 / 琥珀脉冲=检测中 / 灰=未检测 */
.fw-ssh-dot {
  flex: 0 0 auto;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--dsh-fg-weak, #8b949e);
  opacity: 0.75;
}
.fw-ssh-dot.is-online { background: #3fb950; opacity: 1; box-shadow: 0 0 0 2px rgba(63, 185, 80, 0.18); }
.fw-ssh-dot.is-offline { background: #f85149; opacity: 1; }
.fw-ssh-dot.is-checking { background: #d29922; opacity: 1; animation: fw-ssh-pulse 1.1s ease-in-out infinite; }
@keyframes fw-ssh-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
}
</style>
