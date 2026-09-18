<template>
  <el-dialog
    v-model="visible"
    class="fw-clone-dialog fw-np-dialog"
    width="800px"
    align-center
    modal-class="fw-blur-overlay"
    :close-on-click-modal="false"
    :before-close="beforeClose"
    append-to-body
    @close="onClose"
  >
    <template #header>
      <div class="fw-dlg-head">
        <span class="fw-dlg-badge"><icon name="fileText" :size="20" /></span>
        <span class="fw-dlg-headtext">
          <span class="fw-dlg-headtitle">{{ dirty ? "* " : "" }}{{ fileName }}</span>
          <span class="fw-dlg-headsub">{{ t("txtEditorSub") }}<template v-if="dirty"> · {{ t("txtUnsaved") }}</template></span>
        </span>
      </div>
    </template>

    <div class="fw-np" tabindex="-1" @keydown.ctrl.s.prevent="onSaveShortcut" @keydown.f5.prevent="insertTimestamp">
      <!-- 菜单栏 -->
      <div class="fw-np-menubar">
        <div
          v-for="m in menus"
          :key="m.name"
          class="fw-np-menu"
          :class="{ open: activeMenu === m.name }"
          @click="toggleMenu(m.name)"
          @mouseenter="onMenuHover(m.name)"
        >
          {{ m.label }}
          <div v-if="activeMenu === m.name" class="fw-np-dropdown">
            <template v-for="(it, i) in m.items" :key="i">
              <div v-if="it.sep" class="fw-np-sep"></div>
              <div
                v-else
                class="fw-np-item"
                :class="{ disabled: it.disabled ? it.disabled() : false }"
                @click="onItem(m.name, it)"
              >
                {{ it.label }}
              </div>
            </template>
          </div>
        </div>
      </div>

      <!-- 文本区 -->
      <div v-if="loading" class="fw-np-state"><span class="fw-np-spin" />{{ t("txtLoading") }}</div>
      <div v-else-if="error" class="fw-np-state fw-np-err">{{ error }}</div>
      <textarea
        v-else
        ref="taRef"
        v-model="content"
        class="fw-np-area"
        :class="{ wrap: wordWrap }"
        :readonly="readonly"
        :wrap="wordWrap ? 'soft' : 'off'"
        spellcheck="false"
        @input="onInput"
        @keyup="updateCursor"
        @click="updateCursor"
        @contextmenu.prevent="onCtx"
      ></textarea>

      <!-- 状态栏 -->
      <div v-if="showStatus && !loading && !error" class="fw-np-status">
        <span v-if="readonly" class="fw-np-seg fw-np-ro">{{ t("txtReadonly") }}</span>
        <span class="fw-np-spacer"></span>
        <span class="fw-np-seg">Ln {{ cursorLine }}, Col {{ cursorCol }}</span>
        <span class="fw-np-seg">100%</span>
        <span class="fw-np-seg fw-np-eol">{{ eolText }}</span>
        <span class="fw-np-seg">{{ encodingText }}</span>
      </div>
    </div>

    <!-- 菜单展开时的遮罩，用于点击外部关闭（置于对话框内） -->
    <div v-if="activeMenu" class="fw-np-backdrop" @click="closeMenus" @contextmenu.prevent="closeMenus"></div>
  </el-dialog>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, watch } from "vue";
import { canOperatePath, toast, wb } from "../../../stores/workbench";
import * as api from "../../../composables/core/useApi";
import { useI18n } from "../../../composables/core/i18n";
import { confirmDialog } from "../../../composables/core/dialog";
import { prefs, savePrefs } from "../../../composables/core/settings";
import type { EolStyle, TextEncoding } from "../../../../shared/types";

const props = defineProps<{ modelValue: boolean; path: string }>();
const emit = defineEmits<{
  (e: "update:modelValue", v: boolean): void;
  (e: "saved"): void;
}>();

const { t } = useI18n();

const visible = computed({
  get: () => props.modelValue,
  set: (v) => emit("update:modelValue", v),
});

const fileName = computed(() =>
  props.path.slice(Math.max(props.path.lastIndexOf("/"), props.path.lastIndexOf("\\")) + 1),
);

const content = ref("");
const original = ref("");
const loading = ref(false);
const saving = ref(false);
const error = ref("");
const dirty = ref(false);
const readonly = ref(false);
const taRef = ref<HTMLTextAreaElement | null>(null);

/**
 * 随文件往返的编码元数据（由 /read 探测得到，保存时原样交回 /save）。
 *
 * 记事本的 textarea 同样只在 `\n` 上工作（浏览器会把 CRLF 归一），所以必须显式带回
 * 原行尾与编码，否则「打开一个 CRLF/GBK 的 .txt 再保存」会把它整篇改成 LF/UTF-8。
 */
const encoding = ref<TextEncoding>("utf8");
const hasBom = ref(false);
const eol = ref<EolStyle>("lf");
/** 读取时的落盘时间，保存时回传做外部改动冲突检测。 */
const mtime = ref(0);

const EOL_TEXT: Record<EolStyle, string> = {
  lf: "Unix (LF)",
  crlf: "Windows (CRLF)",
  cr: "Macintosh (CR)",
};
const eolText = computed(() => EOL_TEXT[eol.value]);
const encodingText = computed(() => {
  const base = encoding.value === "utf8" ? "UTF-8" : encoding.value.toUpperCase();
  return hasBom.value ? `${base} BOM` : base;
});

/**
 * 菜单中的两个开关（格式 ▸ 自动换行、查看 ▸ 状态栏）直接读写持久化偏好：
 * 切换即落盘（/persist → prefs.json），下次打开编辑器沿用上次的选择。
 */
const wordWrap = computed({
  get: () => prefs.txtWordWrap,
  set: (v: boolean) => {
    prefs.txtWordWrap = v;
    savePrefs();
  },
});
const showStatus = computed({
  get: () => prefs.txtShowStatus,
  set: (v: boolean) => {
    prefs.txtShowStatus = v;
    savePrefs();
  },
});
const activeMenu = ref("");
const cursorLine = ref(1);
const cursorCol = ref(1);

/** 仅 .txt 允许编辑与保存（需求：只有 txt 类型支持编辑和保存）。 */
function isTxt(p: string): boolean {
  return /\.txt$/i.test(p);
}

watch(
  () => props.modelValue,
  async (open) => {
    if (open && props.path) {
      // 非 txt 一律不允许在本编辑器内编辑/保存，直接关闭，交由其它查看器处理。
      if (!isTxt(props.path)) {
        visible.value = false;
        return;
      }
      closeMenus();
      await load();
      await nextTick();
      updateCursor();
      taRef.value?.focus();
    } else {
      reset();
    }
  },
);

function reset(): void {
  content.value = "";
  original.value = "";
  dirty.value = false;
  error.value = "";
  activeMenu.value = "";
  cursorLine.value = 1;
  cursorCol.value = 1;
}

async function load(): Promise<void> {
  loading.value = true;
  error.value = "";
  readonly.value = !canOperatePath(props.path);
  try {
    const res = await api.readFile(props.path);
    if (res.binary) {
      // 误判为文本的二进制（如改名的 .txt）：不给编辑，避免把二进制写坏。
      error.value = t("vsBinaryHint");
      return;
    }
    content.value = res.content;
    original.value = res.content;
    encoding.value = res.encoding;
    hasBom.value = res.hasBom;
    eol.value = res.eol;
    mtime.value = res.mtime;
    dirty.value = false;
  } catch (e) {
    error.value = t("txtReadError", { msg: (e as Error).message });
  } finally {
    loading.value = false;
  }
}

function onInput(): void {
  dirty.value = content.value !== original.value;
  updateCursor();
}

/** 计算光标所在行列（记事本状态栏样式）。 */
function updateCursor(): void {
  const ta = taRef.value;
  if (!ta) return;
  const pos = ta.selectionStart;
  const before = content.value.slice(0, pos);
  cursorLine.value = before.split("\n").length;
  const lastNl = before.lastIndexOf("\n");
  cursorCol.value = pos - lastNl;
}

/**
 * 落盘一次（原行尾 / 原编码 / 原 BOM 一并交回；textarea 已把 CRLF 归一成 LF）。
 * @param force - true 时跳过外部改动冲突检测（用户在确认框里选了覆盖）。
 */
async function writeToDisk(force: boolean): Promise<void> {
  const res = await api.saveFile(props.path, content.value, {
    key: wb.key,
    encoding: encoding.value,
    hasBom: hasBom.value,
    eol: eol.value,
    expectedMtime: mtime.value,
    force,
  });
  mtime.value = res.mtime;
  original.value = content.value;
  dirty.value = false;
  toast("ok", t("txtSaved"));
  emit("saved");
  visible.value = false;
}

async function save(): Promise<void> {
  if (readonly.value || !dirty.value || saving.value) return;
  if (!isTxt(props.path)) return; // 二次保险：非 txt 不写盘
  saving.value = true;
  try {
    await writeToDisk(false);
  } catch (e) {
    if (e instanceof api.ApiError && e.code === "mtime-conflict") {
      // 冲突：先复位保存态（确认框期间不该显示「保存中」），由用户决定是否覆盖。
      saving.value = false;
      const ok = await confirmDialog({
        title: t("vsConflictTitle"),
        message: t("vsConflictMsg", { name: fileName.value }),
      });
      if (!ok) return;
      try {
        await writeToDisk(true);
      } catch (e2) {
        toast("error", (e2 as Error).message);
      }
      return;
    }
    toast("error", (e as Error).message);
  } finally {
    saving.value = false;
  }
}

function onSaveShortcut(): void {
  void save();
}

// --- 菜单栏（仿 Win10 记事本） ---
type MenuItem = { label: string; sep?: boolean; disabled?: () => boolean; action?: () => void };
type Menu = { name: string; label: string; items: MenuItem[] };

const selEmpty = (): boolean => {
  const ta = taRef.value;
  return !ta || ta.selectionStart === ta.selectionEnd;
};

function selectedRange(): { s: number; e: number } | null {
  const ta = taRef.value;
  if (!ta || ta.selectionStart === ta.selectionEnd) return null;
  return { s: ta.selectionStart, e: ta.selectionEnd };
}

/** 用 text 替换 [s,e) 区间，并把光标移到插入文本之后。 */
function replaceRange(s: number, e: number, text: string): void {
  const ta = taRef.value;
  const next = content.value.slice(0, s) + text + content.value.slice(e);
  content.value = next;
  dirty.value = next !== original.value;
  void nextTick(() => {
    if (!ta) return;
    ta.focus();
    ta.selectionStart = ta.selectionEnd = s + text.length;
    updateCursor();
  });
}

function selectAll(): void {
  taRef.value?.focus();
  taRef.value?.select();
}

/** 复制：优先异步剪贴板，失败回退 execCommand。 */
async function copySel(): Promise<void> {
  const r = selectedRange();
  if (!r) return;
  const text = content.value.slice(r.s, r.e);
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    taRef.value?.focus();
    document.execCommand("copy");
  }
}

/** 剪切：写剪贴板成功后删除选区（剪贴板不可用时回退 execCommand('cut')）。 */
async function cutSel(): Promise<void> {
  if (readonly.value) return;
  const r = selectedRange();
  if (!r) return;
  const text = content.value.slice(r.s, r.e);
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    taRef.value?.focus();
    document.execCommand("cut");
    return;
  }
  replaceRange(r.s, r.e, "");
}

function deleteSel(): void {
  if (readonly.value) return;
  const r = selectedRange();
  if (!r) return;
  replaceRange(r.s, r.e, "");
}

/** 粘贴：execCommand('paste') 被浏览器安全策略拦截，改用异步剪贴板读取。 */
async function pasteClipboard(): Promise<void> {
  if (readonly.value) return;
  const ta = taRef.value;
  if (!ta) return;
  const s = ta.selectionStart;
  const e = ta.selectionEnd;
  try {
    const text = await navigator.clipboard.readText();
    replaceRange(s, e, text);
  } catch {
    ta.focus();
    toast("error", "当前环境不允许读取剪贴板，请按 Ctrl+V 粘贴");
  }
}

function undoEdit(): void {
  if (readonly.value) return;
  taRef.value?.focus();
  document.execCommand("undo");
  onInput();
}

function insertTimestamp(): void {
  if (readonly.value) return;
  const ta = taRef.value;
  if (!ta) return;
  const ts = new Date().toLocaleString("zh-CN", { hour12: false });
  replaceRange(ta.selectionStart, ta.selectionEnd, ts);
}

const menus = computed<Menu[]>(() => [
  {
    name: "file",
    label: "文件",
    items: [
      { label: "保存", disabled: () => readonly.value || !dirty.value, action: () => void save() },
      { label: "退出", action: () => void requestClose() },
    ],
  },
  {
    name: "edit",
    label: "编辑",
    items: [
      { label: "撤销", disabled: () => readonly.value, action: () => undoEdit() },
      { label: "剪切", disabled: () => readonly.value || selEmpty(), action: () => void cutSel() },
      { label: "复制", disabled: () => selEmpty(), action: () => void copySel() },
      { label: "粘贴", disabled: () => readonly.value, action: () => void pasteClipboard() },
      { label: "删除", disabled: () => readonly.value || selEmpty(), action: () => deleteSel() },
      { label: "-", sep: true },
      { label: "全选", action: () => selectAll() },
      { label: "时间/日期", disabled: () => readonly.value, action: () => insertTimestamp() },
    ],
  },
  {
    name: "format",
    label: "格式",
    items: [
      {
        label: wordWrap.value ? "☑ 自动换行" : "☐ 自动换行",
        action: () => {
          wordWrap.value = !wordWrap.value;
        },
      },
    ],
  },
  {
    name: "view",
    label: "查看",
    items: [
      {
        label: showStatus.value ? "☑ 状态栏" : "☐ 状态栏",
        action: () => {
          showStatus.value = !showStatus.value;
        },
      },
    ],
  },
  {
    name: "help",
    label: "帮助",
    items: [{ label: "关于记事本", action: () => toast("ok", "记事本 — DSH 文件工作台文本编辑器") }],
  },
]);

function toggleMenu(name: string): void {
  activeMenu.value = activeMenu.value === name ? "" : name;
}
function onMenuHover(name: string): void {
  if (activeMenu.value) activeMenu.value = name;
}
function closeMenus(): void {
  activeMenu.value = "";
}
function onItem(_m: string, it: MenuItem): void {
  if (it.sep) return;
  if (it.disabled && it.disabled()) return;
  closeMenus();
  it.action?.();
}
function onCtx(): void {
  // 记事本右键使用系统菜单；此处仅确保菜单收起，避免遮挡。
  closeMenus();
}

// --- 关闭（含未保存确认） ---
function confirmThenClose(): Promise<boolean> {
  if (dirty.value && !readonly.value) {
    return confirmDialog({ title: t("txtUnsavedTitle"), message: t("txtUnsavedMsg") }).then((ok) => ok);
  }
  return Promise.resolve(true);
}

function beforeClose(done: () => void): void {
  void confirmThenClose().then((ok) => {
    if (ok) done();
  });
}

async function requestClose(): Promise<void> {
  if (await confirmThenClose()) visible.value = false;
}

function onClose(): void {
  reset();
}
</script>

<style src="../repo/clone-shared.css"></style>
<style>
/* el-dialog 的根节点经 teleport 渲染，拿不到本组件的 scoped 属性，
   因此这里不用 scoped，改用唯一的 fw-np- 前缀做全局限定，确保能命中对话框根节点。
   壳层（圆角/阴影/头部/关闭按钮）由 clone-shared.css 的 .fw-clone-dialog 统一提供；
   此处只保留编辑器特有的尺寸与内容区样式，颜色一律走 --dsh-* token（深浅主题跟随）。 */
.fw-np-dialog.el-dialog {
  /* 默认 800×800，页面不够大时随视口收缩 */
  width: min(800px, 92vw) !important;
  height: min(800px, 88vh) !important;
  max-width: none !important;
  display: flex !important;
  flex-direction: column !important;
}
.fw-np-dialog .el-dialog__body {
  padding: 0 !important;
  display: flex !important;
  flex-direction: column !important;
  min-height: 0;
  flex: 1 1 auto !important;
}

.fw-np {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 0;
  outline: none;
}

/* 菜单栏（仿记事本结构，配色随主题） */
.fw-np-menubar {
  display: flex;
  background: var(--dsh-bg2, #161b22);
  border-bottom: 1px solid var(--dsh-border, #30363d);
  font-family: var(--dsh-font);
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  color: var(--dsh-fg, #c9d1d9);
  user-select: none;
  z-index: 2;
}
.fw-np-menu {
  position: relative;
  padding: 3px 10px;
  cursor: default;
  line-height: 22px;
}
.fw-np-menu:hover,
.fw-np-menu.open {
  background: var(--dsh-accent-weak);
  color: var(--dsh-accent);
}
.fw-np-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 168px;
  background: var(--dsh-bg2, #161b22);
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: var(--dsh-radius-md, 8px);
  box-shadow: var(--dsh-shadow-menu, 0 8px 24px rgba(0, 0, 0, 0.4));
  padding: 4px;
  z-index: 20;
}
.fw-np-item {
  padding: 5px 28px 5px 12px;
  white-space: nowrap;
  border-radius: var(--dsh-radius-sm, 4px);
  cursor: default;
}
.fw-np-item:hover {
  background: var(--dsh-hover, rgba(48, 54, 61, 0.5));
}
.fw-np-item.disabled {
  color: var(--dsh-fg-muted, #6e7681);
  opacity: 0.6;
  pointer-events: none;
}
.fw-np-sep {
  height: 1px;
  margin: 4px 6px;
  background: color-mix(in srgb, var(--dsh-border, #30363d) 70%, transparent);
}

/* 加载 / 错误态（对齐全局 .fw-loading / .fw-error 观感） */
.fw-np-state {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px;
  color: var(--dsh-fg-weak, #8b949e);
  font-family: var(--dsh-font);
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  min-height: 0;
}
.fw-np-err {
  color: var(--dsh-danger, #f85149);
}
.fw-np-spin {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid var(--dsh-border, #30363d);
  border-top-color: var(--dsh-accent, #2f81f7);
  animation: fw-np-spin 0.8s linear infinite;
}
@keyframes fw-np-spin {
  to {
    transform: rotate(360deg);
  }
}

/* 文本区：等宽字体随 mono token，底色用一级面与壳层区分 */
.fw-np-area {
  flex: 1;
  width: 100%;
  min-height: 0;
  resize: none;
  border: none;
  outline: none;
  padding: 8px 10px;
  background: var(--dsh-bg, #0d1117);
  color: var(--dsh-fg, #c9d1d9);
  font-family: var(--dsh-mono, "Lucida Console", Consolas, monospace);
  font-size: calc(13px * var(--dsh-fs-scale, 1));
  line-height: 1.5;
  tab-size: 4;
  box-sizing: border-box;
  white-space: pre;
  overflow: auto;
}
.fw-np-area.wrap {
  white-space: pre-wrap;
  word-break: break-word;
}
.fw-np-area:read-only {
  color: var(--dsh-fg-weak, #8b949e);
  background: color-mix(in srgb, var(--dsh-bg2, #161b22) 55%, var(--dsh-bg, #0d1117));
  cursor: default;
}

/* 状态栏：与主界面状态栏同一套配色语言 */
.fw-np-status {
  display: flex;
  align-items: center;
  background: var(--dsh-bg2, #161b22);
  border-top: 1px solid var(--dsh-border, #30363d);
  font-family: var(--dsh-font);
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  color: var(--dsh-fg-weak, #8b949e);
  height: 24px;
  padding: 0 2px;
  z-index: 2;
}
.fw-np-seg {
  padding: 0 10px;
  border-left: 1px solid color-mix(in srgb, var(--dsh-border, #30363d) 60%, transparent);
  line-height: 24px;
}
.fw-np-seg:first-child {
  border-left: none;
}
.fw-np-status .fw-np-seg:only-of-type,
.fw-np-eol {
  border-right: 1px solid color-mix(in srgb, var(--dsh-border, #30363d) 60%, transparent);
}
.fw-np-spacer {
  flex: 1;
  border-left: 1px solid color-mix(in srgb, var(--dsh-border, #30363d) 60%, transparent);
  align-self: stretch;
}
.fw-np-status .fw-np-seg[style],
.fw-np-status .fw-np-ro {
  color: var(--dsh-warn);
}

/* 菜单遮罩 */
.fw-np-backdrop {
  position: fixed;
  inset: 0;
  z-index: 1;
}
</style>
