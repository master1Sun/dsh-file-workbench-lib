<template>
  <el-dialog
    v-model="visible"
    :title="t('vsPickFolderTitle')"
    width="720px"
    append-to-body
    class="fsp-dialog"
    @open="onOpen"
    @closed="onClosed"
  >
    <div class="fsp">
      <!-- 当前路径 + 上级 / 新建文件夹 -->
      <div class="fsp-bar">
        <div class="fsp-path" :title="currentPath || undefined">{{ currentPath || t("vsComputer") }}</div>
        <button class="fsp-btn sm" :disabled="loading || crumbs.length < 2" @click="goUp">{{ t("vsUp") }}</button>
        <button class="fsp-btn sm" :disabled="loading || !currentPath" @click="toggleNewFolder">
          {{ t("vsNewFolderBtn") }}
        </button>
      </div>

      <!-- 新建文件夹输入行 -->
      <div v-if="newFolderOpen" class="fsp-newrow">
        <input
          v-model="newFolderName"
          class="fsp-input"
          :placeholder="t('vsNewFolderName')"
          @keyup.enter="createFolder"
          @keyup.esc="newFolderOpen = false"
        />
        <button class="fsp-btn primary sm" :disabled="creating || !newFolderName.trim()" @click="createFolder">
          {{ t("confirmOk") }}
        </button>
        <button class="fsp-btn sm" @click="newFolderOpen = false">{{ t("vsCancel") }}</button>
      </div>
      <div v-if="createErr" class="fsp-error">{{ createErr }}</div>

      <!-- 两栏主体：左 = 我的电脑 / 快捷方式；右 = 当前选中位置的文件夹列表 -->
      <div class="fsp-main">
        <div class="fsp-side">
          <div class="fsp-group">
            <div class="fsp-group-title">{{ t("myComputer") }}</div>
            <div
              v-for="it in drives"
              :key="it.path"
              class="fsp-side-row"
              :class="{ active: it.path === currentPath }"
              :title="it.path"
              @click="goto(it.path)"
            >
              <span class="fsp-ico ico-drive"></span>
              <span class="fsp-side-name">{{ labelOf(it) }}</span>
            </div>
            <div v-if="drives.length === 0" class="fsp-side-empty">{{ t("vsLoading") }}</div>
          </div>
          <div class="fsp-group">
            <div class="fsp-group-title">{{ t("vsQuickAccess") }}</div>
            <div
              v-for="it in quickItems"
              :key="it.type + it.path"
              class="fsp-side-row"
              :class="{ active: it.path === currentPath }"
              :title="it.path"
              @click="goto(it.path)"
            >
              <span class="fsp-ico" :class="iconOf(it)"></span>
              <span class="fsp-side-name">{{ labelOf(it) }}</span>
            </div>
            <div v-if="quickItems.length === 0" class="fsp-side-empty">{{ t("vsEmptyDir") }}</div>
          </div>
        </div>

        <div class="fsp-content">
          <!-- 面包屑：祖先链逐级可跳转（与官方 DirectoryListing.crumbs 一致） -->
          <div v-if="crumbs.length > 1" class="fsp-crumbs">
            <template v-for="(c, i) in crumbs" :key="c.path + '#' + i">
              <span v-if="i > 0" class="fsp-sep">›</span>
              <span class="fsp-crumb" :class="{ active: i === crumbs.length - 1 }" @click="jump(c.path)">
                {{ c.name }}
              </span>
            </template>
          </div>

          <!-- 目录列表：单击仅高亮选中，双击才进入（与资源管理器一致；只列子目录） -->
          <div class="fsp-list">
            <div v-if="loading" class="fsp-loading">{{ t("vsLoading") }}</div>
            <div v-else-if="error" class="fsp-error">{{ error }}</div>
            <template v-else>
              <div
                v-for="e in entries"
                :key="e.path"
                class="fsp-row"
                :class="{ dim: e.hidden, selected: e.path === selectedPath }"
                @click="selectRow(e.path)"
                @dblclick="enter(e.path)"
              >
                <span class="fsp-ico ico-dir"></span>
                <span class="fsp-name">{{ e.name }}</span>
              </div>
              <div v-if="entries.length === 0" class="fsp-empty">{{ t("vsEmptyDir") }}</div>
            </template>
          </div>
        </div>
      </div>

      <!-- 手动路径兜底 -->
      <div class="fsp-manual">
        <input
          v-model="manualPath"
          class="fsp-input"
          :placeholder="t('vsFolderPath')"
          @keyup.enter="confirmManual"
        />
        <button class="fsp-btn sm" :disabled="!manualPath.trim()" @click="confirmManual">
          {{ t("vsPickInput") }}
        </button>
      </div>
    </div>

    <template #footer>
      <div class="fsp-foot">
        <span class="fsp-hint">{{ t("vsPickEnterHint") }}</span>
        <span class="fsp-foot-spacer"></span>
        <button class="fsp-btn" @click="visible = false">{{ t("vsCancel") }}</button>
        <button
          class="fsp-btn primary"
          :disabled="(!selectedPath && !currentPath) || loading"
          :title="selectedPath || currentPath || undefined"
          @click="confirmCurrent"
        >
          {{ t("vsPickConfirm") }}
        </button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
/**
 * 应用内「选择项目文件夹」弹窗（资源管理器式两栏布局）：
 *  - **左栏** = 「我的电脑」（磁盘盘符）+「快捷方式」（主目录/桌面/下载/文档/图片/音乐/视频/工作区），
 *    数据来自插件既有的 `/mycomputer` 路由（`api.myComputer`），与工作台左侧导航同一数据源；
 *  - **右栏** = 左栏选中项对应的文件夹列表，单击目录行即进入（与 dsh-prompt-library-old 一致），
 *    底部「选择此文件夹」= 选中**当前所在的目录**；
 *  - 面包屑来自宿主返回的祖先链（可逐级跳转），上级按钮 = 面包屑倒数第二项；
 *  - 支持内联新建文件夹与手填绝对路径兜底；只列出子目录。
 *
 * 右栏数据源优先用**宿主官方目录浏览能力** `ctx.uiWorkspace.listDirectory`
 * （经 window 桥接透传：返回 `{ path, home, crumbs, entries, truncated }`）；
 * 能力不可用时回退到插件既有 `/list` 路由（自行推导目录列表与面包屑）。
 */
import { computed, ref } from "vue";
import type { DirectoryEntry, DirectoryListing, MyComputerItem } from "../../../../shared/types";
import * as api from "../../../composables/core/useApi";
import { t } from "../../../composables/core/i18n";
import { driveName, myComputerDriveName } from "../../../composables/domain/driveName";

/** VS Code 面板使用的独立根 key（用于让 /mycomputer 带上当前项目作为「工作区」快捷项）。 */
const VS_KEY = "vscode";

const props = defineProps<{
  modelValue: boolean;
  /** 初始目录（通常传当前已选项目目录），缺省从宿主 home（或「我的电脑」）开始。 */
  initialDir?: string | null;
}>();
const emit = defineEmits<{
  (e: "update:modelValue", v: boolean): void;
  (e: "confirm", path: string): void;
}>();

const visible = computed<boolean>({
  get: () => props.modelValue,
  set: (v) => emit("update:modelValue", v),
});

const listing = ref<DirectoryListing | null>(null);
const loading = ref(false);
const error = ref<string | undefined>(undefined);
const manualPath = ref("");
const newFolderOpen = ref(false);
const newFolderName = ref("");
/** 右栏当前高亮（单击选中）的目录；双击才进入。切换目录时清空。 */
const selectedPath = ref<string | null>(null);
const creating = ref(false);
const createErr = ref<string | undefined>(undefined);

/** 左栏原始项（/mycomputer）。 */
const sideItems = ref<MyComputerItem[]>([]);

const crumbs = computed<DirectoryEntry[]>(() => listing.value?.crumbs ?? []);
const entries = computed<DirectoryEntry[]>(() => listing.value?.entries ?? []);
/** 当前浏览到的目录（「选择此文件夹」即选中它）。 */
const currentPath = computed<string | null>(() => listing.value?.path ?? null);

/** 左栏分组：「我的电脑」= 磁盘盘符；「快捷方式」= 快速访问与工作区（回收站为虚拟项，排除）。 */
const drives = computed<MyComputerItem[]>(() => sideItems.value.filter((i) => i.type === "drive"));
const quickItems = computed<MyComputerItem[]>(() =>
  sideItems.value.filter((i) => i.type !== "drive" && i.type !== "recycle" && !!i.path),
);

/** 左栏快捷项的展示文案（复用工作台导航既有的本地化键）。 */
function labelOf(it: MyComputerItem): string {
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
    default:
      return it.name;
  }
}

/** 左栏快捷项的图标 class。 */
function iconOf(it: MyComputerItem): string {
  switch (it.type) {
    case "home":
      return "ico-home";
    case "desktop":
      return "ico-desktop";
    case "download":
      return "ico-download";
    case "documents":
      return "ico-doc";
    case "pictures":
    case "gallery":
      return "ico-pic";
    case "music":
      return "ico-music";
    case "videos":
      return "ico-video";
    case "workspace":
      return "ico-folder";
    default:
      return "ico-dir";
  }
}

function bridge(): Window["__DSH_FILE_WORKBENCH__"] {
  return window.__DSH_FILE_WORKBENCH__;
}

/** 由绝对路径推导祖先链（仅 /list 回退时用；官方 listDirectory 自带 crumbs）。 */
function synthCrumbs(p: string): DirectoryEntry[] {
  const norm = p.replace(/\\/g, "/").replace(/\/+$/, "");
  if (!norm) return [];
  const isWin = /^[A-Za-z]:/.test(norm);
  const parts = norm.split("/").filter(Boolean);
  const out: DirectoryEntry[] = [];
  if (isWin) {
    const drive = parts.shift() as string;
    out.push({ name: drive, path: `${drive}/`, hidden: false });
  }
  let acc = isWin ? `${out[0].path.replace(/\/$/, "")}` : "";
  for (const seg of parts) {
    acc = `${acc}/${seg}`;
    out.push({ name: seg, path: acc, hidden: false });
  }
  return out;
}

/** 回退数据源：/list 路由（任意绝对目录可列）→ 仅目录 + 推导面包屑；无路径时列出盘符。 */
async function fallbackListing(path?: string): Promise<DirectoryListing> {
  if (!path) {
    const r = await api.drives();
    return {
      path: "",
      home: "",
      crumbs: [],
      entries: (r.drives ?? []).map((d) => ({ name: driveName(d), path: d.path, hidden: false })),
      truncated: false,
    };
  }
  const r = await api.listDir(path);
  return {
    path,
    home: "",
    crumbs: synthCrumbs(path),
    entries: (r.entries ?? [])
      .filter((e) => e.isDir && !e.hidden)
      .sort((a, b) => a.name.localeCompare(b.name, "zh"))
      .map((e) => ({ name: e.name, path: e.path, hidden: !!e.hidden })),
    truncated: false,
  };
}

/** 加载某目录一层（缺省用宿主 home / 「我的电脑」）。 */
async function load(path?: string): Promise<void> {
  loading.value = true;
  error.value = undefined;
  selectedPath.value = null;
  try {
    const br = bridge();
    listing.value = br?.listDirectory ? await br.listDirectory(path) : await fallbackListing(path);
  } catch (e) {
    listing.value = null;
    error.value = (e as Error).message;
  } finally {
    loading.value = false;
  }
}

/** 左栏点击：进入该位置（磁盘根 / 快捷目录）。 */
function goto(path: string): void {
  if (!path || path === currentPath.value) return;
  void load(path);
}

/** 右栏单击目录行：只做高亮选中，不进入（避免误点就跳走）。 */
function selectRow(path: string): void {
  selectedPath.value = path;
}

/** 右栏双击目录行 → 进入该目录。 */
function enter(path: string): void {
  if (path === currentPath.value) return;
  void load(path);
}

/** 面包屑跳转到祖先项（末项为当前目录，点击无效）。 */
function jump(path: string): void {
  if (path === currentPath.value) return;
  void load(path === "" ? undefined : path);
}

/** 上级 = 面包屑倒数第二项。 */
function goUp(): void {
  const c = crumbs.value;
  if (c.length < 2) return;
  const parent = c[c.length - 2];
  void load(parent.hidden ? undefined : parent.path);
}

function toggleNewFolder(): void {
  newFolderOpen.value = !newFolderOpen.value;
  createErr.value = undefined;
  if (newFolderOpen.value) newFolderName.value = "";
}

/** 在当前目录下新建文件夹（优先宿主官方 createDirectory，回退 /mkdir 路由）。 */
async function createFolder(): Promise<void> {
  const name = newFolderName.value.trim();
  const dir = currentPath.value;
  if (!name || !dir) return;
  creating.value = true;
  createErr.value = undefined;
  try {
    const br = bridge();
    if (br?.createDirectory) await br.createDirectory(dir, name);
    else await api.mkdir(`${dir.replace(/[\\/]+$/, "")}/${name}`);
    newFolderOpen.value = false;
    newFolderName.value = "";
    await load(dir);
  } catch (e) {
    createErr.value = (e as Error).message;
  } finally {
    creating.value = false;
  }
}

/**
 * 「选择此文件夹」：优先选中**右栏高亮（单击选中）的那一项**，
 * 没有高亮项时才退回「当前所在目录」——与资源管理器「选中谁就选谁」一致。
 */
function confirmCurrent(): void {
  const target = selectedPath.value || currentPath.value;
  if (!target) return;
  emit("confirm", target);
  visible.value = false;
}

function confirmManual(): void {
  const p = manualPath.value.trim();
  if (!p) return;
  emit("confirm", p);
  visible.value = false;
}

/** 拉取左栏入口项（/mycomputer，带 VS 根以便把当前项目列为「工作区」快捷项）。 */
async function loadSide(): Promise<void> {
  try {
    const r = await api.myComputer(VS_KEY);
    sideItems.value = r.items ?? [];
  } catch {
    // 左栏为装饰性导航，失败时降级为空（右栏仍可正常浏览与手填路径）。
    sideItems.value = [];
  }
}

function onOpen(): void {
  error.value = undefined;
  createErr.value = undefined;
  newFolderOpen.value = false;
  newFolderName.value = "";
  manualPath.value = props.initialDir ?? "";
  void loadSide();
  void load(props.initialDir || undefined);
}

function onClosed(): void {
  listing.value = null;
  manualPath.value = "";
}
</script>

<!-- 非 scoped：el-dialog 经 append-to-body 渲染于 body，scoped 选择器无法命中弹窗内容 -->
<style>
.fsp-dialog .el-dialog__body {
  padding: 10px 12px;
}
.fsp {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.fsp-bar {
  display: flex;
  align-items: center;
  gap: 8px;
}
.fsp-path {
  flex: 1;
  min-width: 0;
  height: 26px;
  line-height: 24px;
  padding: 0 8px;
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 4px;
  background: var(--dsh-bg, #0d1117);
  color: var(--dsh-fg-weak, #8b949e);
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  direction: rtl;
  text-align: left;
}
.fsp-newrow {
  display: flex;
  gap: 6px;
  align-items: center;
}
/* 两栏主体 */
.fsp-main {
  display: flex;
  gap: 10px;
  align-items: stretch;
}
.fsp-side {
  flex: 0 0 190px;
  width: 190px;
  max-height: 340px;
  overflow: auto;
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 6px;
  background: var(--dsh-bg, #0d1117);
  padding: 4px 0;
}
.fsp-group + .fsp-group {
  margin-top: 4px;
  border-top: 1px solid var(--dsh-border, #30363d);
  padding-top: 4px;
}
.fsp-group-title {
  padding: 2px 8px;
  font-size: 11px;
  font-weight: 600;
  color: var(--dsh-fg-weak, #8b949e);
  letter-spacing: 0.3px;
}
.fsp-side-row {
  display: flex;
  align-items: center;
  height: 26px;
  padding: 0 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  color: var(--dsh-fg, #c9d1d9);
  white-space: nowrap;
}
.fsp-side-row:hover {
  background: var(--dsh-hover, rgba(255, 255, 255, 0.06));
}
.fsp-side-row.active {
  background: var(--dsh-accent-soft, rgba(47, 129, 247, 0.18));
}
.fsp-side-name {
  overflow: hidden;
  text-overflow: ellipsis;
}
.fsp-side-empty {
  padding: 4px 10px;
  font-size: 11px;
  color: var(--dsh-fg-weak, #8b949e);
}
.fsp-content {
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.fsp-crumbs {
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: 12px;
  color: var(--dsh-fg-weak, #8b949e);
  flex-wrap: wrap;
}
.fsp-crumb {
  cursor: pointer;
  padding: 1px 4px;
  border-radius: 4px;
  color: var(--dsh-accent, #2f81f7);
}
.fsp-crumb.active {
  color: var(--dsh-fg, #c9d1d9);
  cursor: default;
}
.fsp-sep {
  opacity: 0.6;
}
.fsp-list {
  height: 300px;
  overflow: auto;
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 6px;
  background: var(--dsh-bg, #0d1117);
  font-size: 13px;
  color: var(--dsh-fg, #c9d1d9);
  padding: 2px;
}
.fsp-row {
  display: flex;
  align-items: center;
  height: 24px;
  padding: 0 8px;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
}
.fsp-row:hover {
  background: var(--dsh-hover, rgba(255, 255, 255, 0.06));
}
.fsp-row.dim {
  opacity: 0.5;
}
/* 单击选中态（与左栏 active 同色）；双击才进入 */
.fsp-row.selected {
  background: var(--dsh-accent-soft, rgba(35, 134, 54, 0.22));
  box-shadow: inset 0 0 0 1px var(--dsh-accent, #238636);
}
.fsp-name {
  overflow: hidden;
  text-overflow: ellipsis;
}
.fsp-ico {
  width: 16px;
  height: 16px;
  margin-right: 6px;
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
.ico-folder {
  -webkit-mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='black' d='M1.5 3.5h5l1.5 1.5h6.5v8h-13z'/></svg>");
  mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='black' d='M1.5 3.5h5l1.5 1.5h6.5v8h-13z'/></svg>");
  color: #2f81f7;
}
.ico-drive {
  -webkit-mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='black' d='M2 4h12v8H2z'/><path fill='black' d='M4 7h8v1H4z'/></svg>");
  mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='black' d='M2 4h12v8H2z'/><path fill='black' d='M4 7h8v1H4z'/></svg>");
  color: #8b949e;
}
.ico-home {
  -webkit-mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='black' d='M8 1.5 1.5 7v7.5h5v-4h3v4h5V7z'/></svg>");
  mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='black' d='M8 1.5 1.5 7v7.5h5v-4h3v4h5V7z'/></svg>");
  color: #dcb67a;
}
.ico-desktop {
  -webkit-mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='black' d='M1.5 2.5h13v8h-13z'/><path fill='black' d='M6 12.5h4v1.5H6z'/></svg>");
  mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='black' d='M1.5 2.5h13v8h-13z'/><path fill='black' d='M6 12.5h4v1.5H6z'/></svg>");
  color: #8b949e;
}
.ico-download {
  -webkit-mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='black' d='M8 1v8M4.5 6 8 9.5 11.5 6'/><path fill='black' d='M2 12.5h12v2H2z'/></svg>");
  mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='black' d='M8 1v8M4.5 6 8 9.5 11.5 6'/><path fill='black' d='M2 12.5h12v2H2z'/></svg>");
  color: #8b949e;
}
.ico-doc {
  -webkit-mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='black' d='M3.5 1.5h6l3 3v10h-9z'/></svg>");
  mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='black' d='M3.5 1.5h6l3 3v10h-9z'/></svg>");
  color: #8b949e;
}
.ico-pic {
  -webkit-mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='black' d='M1.5 3.5h13v9h-13z'/><path fill='black' d='M3 10.5 6 7l2.5 2.5L10.5 8l2.5 2.5z'/></svg>");
  mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='black' d='M1.5 3.5h13v9h-13z'/><path fill='black' d='M3 10.5 6 7l2.5 2.5L10.5 8l2.5 2.5z'/></svg>");
  color: #8b949e;
}
.ico-music {
  -webkit-mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='black' d='M6 1.5h8v2H8v7.5a2.5 2.5 0 1 1-2-2.45z'/></svg>");
  mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='black' d='M6 1.5h8v2H8v7.5a2.5 2.5 0 1 1-2-2.45z'/></svg>");
  color: #8b949e;
}
.ico-video {
  -webkit-mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='black' d='M1.5 3.5h9v9h-9z'/><path fill='black' d='M11 6l4-2v8l-4-2z'/></svg>");
  mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='black' d='M1.5 3.5h9v9h-9z'/><path fill='black' d='M11 6l4-2v8l-4-2z'/></svg>");
  color: #8b949e;
}
.fsp-loading,
.fsp-error,
.fsp-empty {
  padding: 16px;
  text-align: center;
  color: var(--dsh-fg-weak, #8b949e);
}
.fsp-error {
  color: #f85149;
}
.fsp-manual {
  display: flex;
  gap: 6px;
}
.fsp-input {
  flex: 1;
  height: 26px;
  padding: 0 8px;
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 4px;
  background: var(--dsh-bg, #0d1117);
  color: var(--dsh-fg, #c9d1d9);
  font-size: 12px;
}
.fsp-foot {
  display: flex;
  align-items: center;
  gap: 8px;
}
.fsp-hint {
  font-size: 11px;
  color: var(--dsh-fg-weak, #8b949e);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 60%;
}
.fsp-foot-spacer {
  flex: 1;
}
.fsp-btn {
  height: 28px;
  padding: 0 14px;
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 4px;
  background: var(--dsh-bg, #0d1117);
  color: var(--dsh-fg, #c9d1d9);
  cursor: pointer;
  font-size: 13px;
}
.fsp-btn.sm {
  height: 26px;
  padding: 0 10px;
  font-size: 12px;
}
.fsp-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.fsp-btn.primary {
  background: var(--dsh-accent, #238636);
  border-color: var(--dsh-accent, #238636);
  color: #fff;
}
</style>
