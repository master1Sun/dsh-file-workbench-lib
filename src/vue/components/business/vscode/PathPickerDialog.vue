<template>
  <el-dialog
    v-model="visible"
    :title="title"
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

      <!-- 两栏主体：左 = 我的电脑 / 快捷方式；右 = 当前选中位置的子目录（另存为模式还含文件） -->
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

          <!-- 目录 / 文件列表：单击高亮选中，双击进入目录（另存为模式下双击文件 = 直接保存） -->
          <div class="fsp-list">
            <div v-if="loading" class="fsp-loading">{{ t("vsLoading") }}</div>
            <div v-else-if="error" class="fsp-error">{{ error }}</div>
            <template v-else>
              <div
                v-for="e in visibleEntries"
                :key="e.path"
                class="fsp-row"
                :class="{ dim: e.hidden, selected: e.path === selectedPath }"
                @click="onRowClick(e)"
                @dblclick="onRowDblClick(e)"
              >
                <span class="fsp-ico" :class="e.isDir ? 'ico-dir' : 'ico-file'"></span>
                <span class="fsp-name">{{ e.name }}</span>
              </div>
              <div v-if="visibleEntries.length === 0" class="fsp-empty">{{ t("vsEmptyDir") }}</div>
            </template>
          </div>
        </div>
      </div>

      <!-- 另存为模式：文件名 + 文件类型筛选（保存对话框的核心输入） -->
      <div v-if="isFileMode" class="fsp-namerow">
        <span class="fsp-namelabel">{{ t("vsFileName") }}</span>
        <input
          ref="nameInputRef"
          v-model="fileName"
          class="fsp-input"
          :placeholder="t('vsFileNamePlaceholder')"
          @keyup.enter="confirmFile"
        />
        <select v-model="fileFilter" class="fsp-input fsp-select" :title="t('vsFileType')">
          <option value="">{{ t("vsFilterAll") }}</option>
          <option v-if="fileExt" :value="fileExt">{{ t("vsFilterExt", { ext: fileExt }) }}</option>
        </select>
      </div>
      <div v-if="isFileMode" class="fsp-hintline" :class="{ warn: nameExists }">
        <template v-if="nameExists">{{ t("vsSaveAsExists") }}</template>
        <template v-else>{{ resolvedTarget || t("vsSaveAsHint") }}</template>
      </div>

      <!-- 手动路径兜底（仅路径选择模式；另存为模式由文件名输入框直接支持绝对路径） -->
      <div v-if="!isFileMode" class="fsp-manual">
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
        <span class="fsp-hint">{{ isFileMode ? t("vsSaveAsHint") : t("vsPickEnterHint") }}</span>
        <span class="fsp-foot-spacer"></span>
        <button class="fsp-btn" @click="visible = false">{{ t("vsCancel") }}</button>
        <button v-if="isFileMode" class="fsp-btn primary" :disabled="!canConfirmFile" @click="confirmFile">
          {{ t("vsSave") }}
        </button>
        <button
          v-else
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
 * 应用内「路径选择」弹窗（资源管理器式两栏布局），两种模式共用同一套浏览界面：
 *
 *  - `mode="folder"`（默认，选择项目文件夹）：**只列子目录**，确认返回当前 / 高亮目录的绝对路径。
 *    右栏数据源优先用**宿主官方目录浏览能力** `ctx.uiWorkspace.listDirectory`
 *    （经 window 桥接透传：返回 `{ path, home, crumbs, entries, truncated }`）；
 *    能力不可用时回退到插件既有 `/list` 路由（自行推导目录列表与面包屑）。
 *  - `mode="file"`（另存为）：右栏**同时列出子目录与文件**，底部提供「文件名」输入框与「文件类型」筛选，
 *    确认后返回「当前目录 + 文件名」拼出的绝对路径；文件名框也接受手填绝对路径。
 *    该模式**必须**列出文件（宿主 `listDirectory` 只返回子目录），因此统一走插件自身的 `/list` 路由。
 *
 * 两种模式共用：左栏（「我的电脑」盘符 + 「快捷方式」，数据来自 `/mycomputer`）、面包屑逐级跳转、
 * 内联新建文件夹、上一级导航。
 */
import { computed, nextTick, ref } from "vue";
import type { DirectoryEntry, DirectoryListing, MyComputerItem } from "../../../../shared/types";
import * as api from "../../../composables/core/useApi";
import { t } from "../../../composables/core/i18n";
import { driveName, myComputerDriveName } from "../../../composables/domain/driveName";

/** VS Code 面板使用的独立根 key（用于让 /mycomputer 带上当前项目作为「工作区」快捷项）。 */
const VS_KEY = "vscode";

const props = defineProps<{
  modelValue: boolean;
  /** `folder` = 选择文件夹（默认）；`file` = 另存为（列出文件、需填文件名）。 */
  mode?: "folder" | "file";
  /** 初始目录（通常传当前项目目录 / 当前文件所在目录），缺省从宿主 home（或「我的电脑」）开始。 */
  initialDir?: string | null;
  /** `file` 模式的默认文件名（通常为当前文件名）。 */
  initialName?: string;
}>();
const emit = defineEmits<{
  (e: "update:modelValue", v: boolean): void;
  (e: "confirm", path: string): void;
}>();

const visible = computed<boolean>({
  get: () => props.modelValue,
  set: (v) => emit("update:modelValue", v),
});

const isFileMode = computed<boolean>(() => props.mode === "file");
const title = computed<string>(() => (isFileMode.value ? t("vsSaveAsTitle") : t("vsPickFolderTitle")));

/** 统一后的列表行：`folder` 模式全部视为目录，`file` 模式区分目录与文件。 */
interface PickerRow {
  name: string;
  path: string;
  hidden: boolean;
  isDir: boolean;
}

/** 统一后的目录列表（两种数据源都归一成它，模板只认这一种形状）。 */
interface PickerListing {
  path: string;
  home: string;
  crumbs: DirectoryEntry[];
  entries: PickerRow[];
}

const listing = ref<PickerListing | null>(null);
const loading = ref(false);
const error = ref<string | undefined>(undefined);
const manualPath = ref("");
const newFolderOpen = ref(false);
const newFolderName = ref("");
/** 右栏当前高亮（单击选中）的行；双击才进入。切换目录时清空。 */
const selectedPath = ref<string | null>(null);
const creating = ref(false);
const createErr = ref<string | undefined>(undefined);
/** 另存为模式：文件名输入与类型筛选（`""` = 全部文件，否则为 `.ext` 小写）。 */
const fileName = ref("");
const fileFilter = ref("");
const nameInputRef = ref<HTMLInputElement | null>(null);

/** 左栏原始项（/mycomputer）。 */
const sideItems = ref<MyComputerItem[]>([]);

const crumbs = computed<DirectoryEntry[]>(() => listing.value?.crumbs ?? []);
const entries = computed<PickerRow[]>(() => listing.value?.entries ?? []);
/** 当前浏览到的目录（「选择此文件夹」即选中它）。 */
const currentPath = computed<string | null>(() => listing.value?.path || null);

/** 另存为模式：按「文件类型」筛选后的行（目录始终保留，文件按扩展名过滤）。 */
const visibleEntries = computed<PickerRow[]>(() => {
  const all = entries.value;
  if (!isFileMode.value || !fileFilter.value) return all;
  return all.filter((e) => e.isDir || e.name.toLowerCase().endsWith(fileFilter.value));
});

/** 默认文件名带的扩展名（用于「仅当前类型」筛选项）。 */
const fileExt = computed<string>(() => {
  const n = props.initialName ?? "";
  const i = n.lastIndexOf(".");
  return i > 0 ? n.slice(i).toLowerCase() : "";
});

/** 目标名是否与当前目录下已有文件同名（仅提示将被覆盖；真正的覆盖确认由调用方负责）。 */
const nameExists = computed<boolean>(() => {
  const n = fileName.value.trim().toLowerCase();
  if (!n) return false;
  return entries.value.some((e) => !e.isDir && e.name.toLowerCase() === n);
});

/** 由「当前目录 + 文件名」拼出的最终目标路径（文件名本身是绝对路径时直接采用）。 */
const resolvedTarget = computed<string>(() => {
  const raw = fileName.value.trim();
  if (!raw) return "";
  return isAbsolutePath(raw) ? raw : joinDir(currentPath.value, raw);
});

/** 可确认：名字非空、不以分隔符结尾（结尾是目录），且能拼出绝对路径。 */
const canConfirmFile = computed<boolean>(() => {
  const n = fileName.value.trim();
  if (!n || /[\\/]$/.test(n)) return false;
  // 「我的电脑」层（盘符列表，尚未进入任何目录）没有可拼接的目录：此时只接受手填的绝对路径。
  return isAbsolutePath(n) || !!currentPath.value;
});

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

/** 判断手填的路径是否为绝对路径（win32 盘符 / UNC / POSIX 根）。 */
function isAbsolutePath(p: string): boolean {
  return /^[a-zA-Z]:[\\/]/.test(p) || p.startsWith("/") || p.startsWith("\\\\");
}

/** 用与目录一致的分隔符拼接「目录 + 名字」（宿主会自行归一，这里只为展示与原生观感一致）。 */
function joinDir(dir: string | null, name: string): string {
  if (!dir) return name;
  const sep = dir.includes("\\") ? "\\" : "/";
  return `${dir.replace(/[\\/]+$/, "")}${sep}${name}`;
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

/** 无路径时列出磁盘盘符（两种模式共用）。 */
async function driveListing(): Promise<PickerListing> {
  const r = await api.drives();
  return {
    path: "",
    home: "",
    crumbs: [],
    entries: (r.drives ?? []).map((d) => ({ name: driveName(d), path: d.path, hidden: false, isDir: true })),
  };
}

/** 回退数据源：/list 路由（任意绝对目录可列）→ 仅目录 + 推导面包屑；无路径时列出盘符。 */
async function fallbackListing(path?: string): Promise<PickerListing> {
  if (!path) return await driveListing();
  const r = await api.listDir(path);
  return {
    path,
    home: "",
    crumbs: synthCrumbs(path),
    entries: (r.entries ?? [])
      .filter((e) => e.isDir && !e.hidden)
      .sort((a, b) => a.name.localeCompare(b.name, "zh"))
      .map((e) => ({ name: e.name, path: e.path, hidden: !!e.hidden, isDir: true })),
  };
}

/**
 * 另存为模式的数据源：`/list`（含文件 + 子目录，目录优先排序）；无路径时列出磁盘盘符。
 * 隐藏项保留但置灰——保存目标目录里可能存在点文件，直接隐藏会让人误以为文件不存在。
 */
async function fileListing(path?: string): Promise<PickerListing> {
  if (!path) return await driveListing();
  const r = await api.listDir(path);
  const entries = (r.entries ?? [])
    .map((e) => ({ name: e.name, path: e.path, hidden: !!e.hidden, isDir: !!e.isDir }))
    .sort((a, b) => (a.isDir === b.isDir ? a.name.localeCompare(b.name, "zh") : a.isDir ? -1 : 1));
  return { path, home: "", crumbs: synthCrumbs(path), entries };
}

/** 加载某目录一层（缺省用宿主 home / 「我的电脑」）。 */
async function load(path?: string): Promise<void> {
  loading.value = true;
  error.value = undefined;
  selectedPath.value = null;
  try {
    if (isFileMode.value) {
      listing.value = await fileListing(path);
      return;
    }
    const br = bridge();
    if (br?.listDirectory) {
      const l = (await br.listDirectory(path)) as DirectoryListing;
      listing.value = {
        path: l.path,
        home: l.home,
        crumbs: l.crumbs ?? [],
        entries: (l.entries ?? []).map((e) => ({ name: e.name, path: e.path, hidden: !!e.hidden, isDir: true })),
      };
      return;
    }
    listing.value = await fallbackListing(path);
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

/** 右栏单击：高亮选中；另存为模式下点文件同时把文件名填进输入框。 */
function onRowClick(e: PickerRow): void {
  selectedPath.value = e.path;
  if (isFileMode.value && !e.isDir) fileName.value = e.name;
}

/** 右栏双击：目录 → 进入；文件（另存为）→ 直接以该文件名确认保存。 */
function onRowDblClick(e: PickerRow): void {
  if (e.isDir) {
    if (e.path === currentPath.value) return;
    void load(e.path);
    return;
  }
  if (!isFileMode.value) return;
  fileName.value = e.name;
  confirmFile();
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

/** 另存为：把「当前目录 + 文件名」拼成绝对路径交回调用方（文件名可手填绝对路径）。 */
function confirmFile(): void {
  if (!canConfirmFile.value) return;
  const target = resolvedTarget.value;
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
  fileName.value = props.initialName ?? "";
  fileFilter.value = "";
  void loadSide();
  void load(props.initialDir || undefined);
  if (isFileMode.value) {
    // 文件名框预聚焦，且只选中主名（不含扩展名），方便直接改名——与系统保存对话框一致。
    void nextTick(() => {
      const el = nameInputRef.value;
      if (!el) return;
      el.focus();
      el.setSelectionRange(0, fileExt.value ? el.value.length - fileExt.value.length : el.value.length);
    });
  }
}

function onClosed(): void {
  listing.value = null;
  manualPath.value = "";
  fileName.value = "";
  fileFilter.value = "";
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
/* 文件行图标（另存为模式）：文档轮廓 + 两条内容线 */
.ico-file {
  -webkit-mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='black' d='M4 1.5h5L12.5 5v9.5h-8.5z'/><path fill='black' d='M4.5 7.5h7v1h-7zM4.5 10h7v1h-7z'/></svg>");
  mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='black' d='M4 1.5h5L12.5 5v9.5h-8.5z'/><path fill='black' d='M4.5 7.5h7v1h-7zM4.5 10h7v1h-7z'/></svg>");
  color: #8b949e;
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
/* 另存为：文件名 + 类型筛选行 */
.fsp-namerow {
  display: flex;
  align-items: center;
  gap: 8px;
}
.fsp-namelabel {
  flex: 0 0 auto;
  font-size: 12px;
  color: var(--dsh-fg-weak, #8b949e);
}
.fsp-select {
  flex: 0 0 130px;
  height: 26px;
}
.fsp-hintline {
  font-size: 11px;
  color: var(--dsh-fg-weak, #8b949e);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  direction: rtl;
  text-align: left;
}
/* 同名冲突提示：琥珀色，并改回从左到右（避免路径被 rtl 重排打乱可读性） */
.fsp-hintline.warn {
  color: #d29922;
  direction: ltr;
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
