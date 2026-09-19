<template>
  <!-- 单个终端会话 = 一个独立浮窗：可拖动 / 缩放，几何由后端 JSON 按 tab id 持久化。
       多会话并存时每个都是各自的独立窗口（不再有内部 tab），关闭只结束本会话、不影响其它窗口。 -->
  <div ref="rootEl" class="fw-term-window" :style="rootStyle" @mousedown="onFrameMouseDown">
    <!-- 标题栏（可拖动；右侧：最小化收起全部 / 关闭本会话） -->
    <div class="fw-term-head" @mousedown.prevent="startDrag">
      <span class="fw-term-headicon"><icon name="terminal" :size="13" /></span>
      <span class="fw-term-tag">{{ t("terminal") }} #{{ tab.name }}</span>
      <!-- 远端会话标识：一眼区分「本机 cmd」与「已登录的远端」 -->
      <span v-if="isSsh" class="fw-term-sshbadge" :title="t('termSshBadge')">SSH</span>
      <span class="fw-term-note">{{ headNote }}</span>
      <span
        class="fw-term-headmin"
        :title="t('terminalMinimize')"
        @click.stop="minimizeSelf"
        >–</span
      >
      <span
        class="fw-term-headclose"
        :title="t('terminalCloseTitle')"
        @click.stop="emit('close')"
        >✕</span
      >
    </div>

    <!-- 搜索条：Ctrl+F 唤起，Enter/Shift+Enter 上下跳转，Esc 关闭 -->
    <div v-if="searchOpen" class="fw-term-searchbar">
      <input
        ref="searchInputEl"
        v-model="searchTerm"
        class="fw-term-search-input"
        :placeholder="t('termSearchPlaceholder')"
        spellcheck="false"
        @keydown.enter.prevent="runSearch(true)"
        @keydown.shift.enter.prevent="runSearch(false)"
        @keydown.esc.prevent="closeSearch"
      />
      <button
        class="fw-term-search-case"
        :class="{ on: searchCase }"
        :title="t('termSearchCase')"
        @click="searchCase = !searchCase"
      >Aa</button>
      <button class="fw-term-search-btn" :title="t('termSearchPrev')" @click="runSearch(false)">▲</button>
      <button class="fw-term-search-btn" :title="t('termSearchNext')" @click="runSearch(true)">▼</button>
      <button class="fw-term-search-btn fw-term-search-close" :title="t('termSearchClose')" @click="closeSearch">✕</button>
    </div>

    <!-- xterm 输出区：WebTUI 双线边框（box-="double"），每窗口一个常驻实例 -->
    <div ref="outEl" class="fw-term-out" box-="double" @click="focusTerm"></div>

    <div class="fw-term-footer">
      <button class="fw-term-btn" @click="clear">{{ t('terminalClear') }}</button>
      <button
        class="fw-term-btn"
        :title="t('termFontSmaller')"
        :disabled="termFontSize <= FONT_MIN"
        @click="setTermFontSize(termFontSize - 1)"
      >A−</button>
      <button
        class="fw-term-btn"
        :title="t('termFontLarger')"
        :disabled="termFontSize >= FONT_MAX"
        @click="setTermFontSize(termFontSize + 1)"
      >A+</button>
      <!-- 本会话 shell 切换：cmd ↔ powershell，重启当前 shell（只影响本窗口）。
           ssh 直连会话的 shell 由 sshd 决定，切本机 shell 没有意义 → 换成「重连」
           （降级态也保留它，供修好口令/网络后重试直连）。 -->
      <button v-if="!sshCapable" class="fw-term-btn" :title="t('terminalShellSwitch')" @click="toggleShell">{{ shellLabel }}</button>
      <button v-else class="fw-term-btn" :title="t('termSshReconnectTitle')" @click="reconnect">{{ t("termSshReconnect") }}</button>
      <!-- 权限徽标：终端子进程继承宿主（dsh web）令牌，故反映的是宿主进程权限态。
           放进页脚排版流（不再 absolute 浮在右下角），避免压住底部内容。
           远端会话显示它只会误导（那是**本机宿主**的权限，与远端登录身份无关）→ 隐藏。 -->
      <button
        v-if="termElevated !== null && !isSsh"
        class="fw-term-admin"
        :class="{ on: termElevated }"
        :title="termElevated ? t('terminalAdminOn') : t('terminalAdminOff')"
        @click="showAdminHint"
      >
        <icon name="shield" :size="11" />
        <span>{{ termElevated ? t("terminalAdmin") : t("terminalAdminNormal") }}</span>
      </button>
      <div class="fw-spacer"></div>
      <span class="fw-term-shellhint">{{ footNote }}</span>
      <span class="fw-term-kbdhint" :title="t('termCopyHint')">Ctrl+C 复制 · Ctrl+V 粘贴 · Ctrl+F 搜索</span>
    </div>

    <!-- 右下角缩放手柄（双击恢复默认尺寸） -->
    <div class="fw-term-resizer" :title="t('terminalResizeTitle')" @mousedown.prevent="startResize" @dblclick.stop="resetSize"></div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import type { CSSProperties } from "vue";
import { Terminal } from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";
import { SearchAddon } from "@xterm/addon-search";
import type { ISearchOptions } from "@xterm/addon-search";
import { WebLinksAddon } from "@xterm/addon-web-links";
import "@xterm/xterm/css/xterm.css";
import { useI18n } from "../../../composables/core/i18n";
import { toast, wb } from "../../../stores/workbench";
import { prefs, savePrefs } from "../../../composables/core/settings";
import {
  dropTerminalInput,
  isTermMinimized,
  loadTermElevation,
  minimizeTerminal,
  queueTerminalInput,
  resizeTerminal,
  restartShell,
  setOutputSink,
  takeTermFocus,
  termElevated,
  type TermTab,
  getWinGeom,
  nextSpawnGeom,
  setWinGeom,
} from "../../../composables/domain/terminalStore";
import Icon from "../../common/Icon.vue";

const props = defineProps<{ tab: TermTab }>();
const emit = defineEmits<{ close: [] }>();
const { t } = useI18n();

/** 最小尺寸（px）。 */
const MIN_W = 320;
const MIN_H = 240;
/** 窗口几何（视口坐标）。 */
const winW = ref(680);
const winH = ref(460);
const winX = ref(0);
const winY = ref(0);
const rootEl = ref<HTMLElement | null>(null);
/** 是否已发生过真实交互（拖动/缩放），之前不回写持久化，避免覆盖已存位置。 */
let interacted = false;

const outEl = ref<HTMLElement | null>(null);

/** 标题栏目录末级名。 */
const cwdName = computed(() => {
  const c = props.tab.cwd?.trim();
  if (!c) return "";
  const last = c.replace(/[\\/]$/, "").split(/[\\/]/).pop();
  return last ?? "";
});
/** 本会话 shell 标签。 */
const shellLabel = computed(() => (props.tab.shell === "powershell" ? "PS" : "cmd"));
/**
 * 是否「已登录到远端」：有 ssh 信息**且未降级**。
 * 降级后当前跑的是本机 shell + ssh 命令，按本机显示（徽标/文案/权限徽标）才不误导。
 */
const isSsh = computed(() => !!props.tab.ssh && !props.tab.sshDegraded);
/** 是否是「本可直连远端」的标签（含已降级）：决定页脚显示「重连」而不是 cmd/PS 切换。 */
const sshCapable = computed(() => !!props.tab.ssh);
/** 远端会话的说明文字：`主机 · 远端目录`（远端根只显示主机名）。 */
const sshNote = computed(() => {
  const s = props.tab.ssh;
  if (!s) return "";
  return s.remote && s.remote !== "/" ? `${s.label} · ${s.remote}` : s.label;
});
/** 标题栏说明：远端 → 主机 · 目录；本机 → 目录末级名。 */
const headNote = computed(() =>
  isSsh.value ? sshNote.value : cwdName.value || props.tab.cwd || t("terminalTitle"),
);
/** 页脚说明：远端 → 主机 · 目录；本机 → shell · 目录。 */
const footNote = computed(() =>
  isSsh.value ? sshNote.value : `${shellLabel.value} · ${cwdName.value || props.tab.cwd || t("terminal")}`,
);

/** 把几何夹取到视口内。 */
function clampX(x: number): number {
  return Math.min(Math.max(0, x), Math.max(0, window.innerWidth - winW.value));
}
function clampY(y: number): number {
  return Math.min(Math.max(0, y), Math.max(0, window.innerHeight - winH.value));
}
function applyGeom(g: { x: number; y: number; w: number; h: number }): void {
  winW.value = Math.max(MIN_W, g.w);
  winH.value = Math.max(MIN_H, g.h);
  winX.value = clampX(g.x);
  winY.value = clampY(g.y);
}
function persistGeom(): void {
  setWinGeom(props.tab.id, { x: winX.value, y: winY.value, w: winW.value, h: winH.value });
}

const rootStyle = computed<CSSProperties>(() => ({
  position: "fixed",
  left: `${winX.value}px`,
  top: `${winY.value}px`,
  width: `${winW.value}px`,
  height: `${winH.value}px`,
}));

// 几何变化（防抖）回写后端持久化；未交互前不回写。
let geoTimer = 0;
watch([winX, winY, winW, winH], () => {
  if (!interacted) return;
  window.clearTimeout(geoTimer);
  geoTimer = window.setTimeout(persistGeom, 250);
});

/* ---- 拖动标题栏 ---- */
let dragging = false;
let grabDX = 0;
let grabDY = 0;
function startDrag(e: MouseEvent): void {
  if ((e.target as HTMLElement).closest(".fw-term-headclose, .fw-term-headmin")) return;
  interacted = true;
  dragging = true;
  grabDX = e.clientX - winX.value;
  grabDY = e.clientY - winY.value;
  document.body.style.userSelect = "none";
  document.addEventListener("mousemove", onDragMove);
  document.addEventListener("mouseup", stopDrag);
}
function onDragMove(e: MouseEvent): void {
  if (!dragging) return;
  const el = rootEl.value;
  const w = el?.offsetWidth ?? winW.value;
  const h = el?.offsetHeight ?? winH.value;
  winX.value = Math.min(Math.max(0, e.clientX - grabDX), window.innerWidth - w);
  winY.value = Math.min(Math.max(0, e.clientY - grabDY), Math.max(0, window.innerHeight - h));
}
function stopDrag(): void {
  if (!dragging) return;
  dragging = false;
  document.body.style.userSelect = "";
  document.removeEventListener("mousemove", onDragMove);
  document.removeEventListener("mouseup", stopDrag);
  persistGeom();
}
onBeforeUnmount(stopDrag);

/* ---- 右下角缩放 ---- */
let resizing = false;
let rStartX = 0;
let rStartY = 0;
let rStartW = 0;
let rStartH = 0;
function startResize(e: MouseEvent): void {
  interacted = true;
  resizing = true;
  rStartX = e.clientX;
  rStartY = e.clientY;
  rStartW = winW.value;
  rStartH = winH.value;
  document.body.style.userSelect = "none";
  document.addEventListener("mousemove", onResizeMove);
  document.addEventListener("mouseup", stopResize);
}
function onResizeMove(e: MouseEvent): void {
  if (!resizing) return;
  const maxW = Math.max(MIN_W, window.innerWidth - winX.value - 4);
  const maxH = Math.max(MIN_H, window.innerHeight - winY.value - 4);
  winW.value = Math.min(Math.max(MIN_W, rStartW + (e.clientX - rStartX)), maxW);
  winH.value = Math.min(Math.max(MIN_H, rStartH + (e.clientY - rStartY)), maxH);
}
function stopResize(): void {
  if (!resizing) return;
  resizing = false;
  document.body.style.userSelect = "";
  document.removeEventListener("mousemove", onResizeMove);
  document.removeEventListener("mouseup", stopResize);
  persistGeom();
}
onBeforeUnmount(stopResize);

/** 双击手柄恢复默认右下角尺寸。 */
function resetSize(): void {
  interacted = true;
  winW.value = Math.min(680, window.innerWidth - 12);
  winH.value = Math.min(460, window.innerHeight - 12);
  persistGeom();
}

/* ---- xterm.js 单实例（每窗口一个，常驻到窗口卸载） ---- */
let term: Terminal | null = null;
let fit: FitAddon | null = null;
let search: SearchAddon | null = null;
let host: HTMLDivElement | null = null;
let resizeObs: ResizeObserver | null = null;

/** 从宿主主题变量（#dsh-term-root 上的 WebTUI/Catppuccin 变量）构造 xterm 配色。 */
function xtermTheme(probe?: HTMLElement | null): Record<string, string> {
  const el = probe ?? outEl.value;
  const cs = el ? getComputedStyle(el) : getComputedStyle(document.documentElement);
  const v = (name: string, fallback: string): string => (cs.getPropertyValue(name) || fallback).trim();
  return {
    background: v("--base", "#1e1e2e"),
    foreground: v("--text", "#cdd6f4"),
    cursor: v("--text", "#cdd6f4"),
    cursorAccent: v("--base", "#1e1e2e"),
    selectionBackground: v("--wt-sel-bg", "rgba(137, 180, 250, 0.35)"),
    black: v("--wt-term-black", "#11111b"),
    red: v("--red", "#f38ba8"),
    green: v("--green", "#a6e3a1"),
    yellow: v("--yellow", "#f9e2af"),
    blue: v("--blue", "#89b4fa"),
    magenta: v("--mauve", "#cba6f7"),
    cyan: v("--teal", "#94e2d5"),
    white: v("--wt-term-white", "#bac2de"),
    brightBlack: v("--wt-term-brightblack", "#585b70"),
    brightRed: v("--red", "#f38ba8"),
    brightGreen: v("--green", "#a6e3a1"),
    brightYellow: v("--yellow", "#f9e2af"),
    brightBlue: v("--sapphire", "#74c7ec"),
    brightMagenta: v("--mauve", "#cba6f7"),
    brightCyan: v("--teal", "#94e2d5"),
    brightWhite: v("--wt-term-brightwhite", "#cdd6f4"),
  };
}

/** 读 #dsh-term-root 下的主题 CSS 变量（回退到默认值），供搜索高亮等随主题取色。 */
function termCssVar(name: string, fallback: string): string {
  const el = outEl.value;
  const cs = el ? getComputedStyle(el) : getComputedStyle(document.documentElement);
  return (cs.getPropertyValue(name) || fallback).trim();
}

/** 建立本窗口的 xterm 实例（挂载时一次）。 */
function setupTerm(): void {
  const parent = outEl.value;
  if (!parent || term) return;
  // 取用「应主动聚焦」标记（取一次即清）。必须在这里就取、不能在 nextTick 里 ——
  // 标记是全局单点的「本次打开要聚焦」，延后取可能被别的挂载先消费掉。
  const mustFocus = takeTermFocus(props.tab.id);
  host = document.createElement("div");
  host.className = "fw-term-xterm";
  parent.appendChild(host);
  const inst = new Terminal({
    cursorBlink: true,
    fontSize: termFontSize.value,
    fontFamily: 'Consolas, "Cascadia Code", "Courier New", monospace',
    scrollback: 10000,
    theme: xtermTheme(host),
    allowTransparency: false,
    allowProposedApi: true,
  });
  term = inst;
  fit = new FitAddon();
  inst.loadAddon(fit);
  inst.loadAddon(new WebLinksAddon());
  search = new SearchAddon();
  inst.loadAddon(search);
  inst.attachCustomKeyEventHandler(termKeyHandler);
  inst.open(host);
  // 首建时重放此前累积的输出（含 ANSI）；实例此后常驻，新输出直接写入。
  inst.write(props.tab.output);
  inst.onData((data) => queueTerminalInput(props.tab.session, data));
  setOutputSink(props.tab.id, (chunk: string) => term?.write(chunk));
  void nextTick(() => {
    fitTerm();
    // 用户显式打开的窗口 → 立刻把键盘焦点给它。
    // ⛔ 不做这件事的后果就是「终端弹出来了、提示符也在，但敲键盘完全没反应」：
    //    触发点是文件列表上的右键菜单，焦点留在列表/body；而 xterm 只有自己拿到焦点
    //    才会把按键派发给 onData（标题栏又因拖动而 preventDefault，更加不聚焦）。
    if (mustFocus) term?.focus();
  });
}

/** 布局/字体变化后重算列宽行高，并把新的伪终端尺寸上报给后端。 */
function fitTerm(): void {
  try {
    fit?.fit();
  } catch {
    /* 容器尺寸为 0 时忽略 */
  }
  reportSize();
}
/**
 * 上报本会话的伪终端尺寸（列 / 行）。
 *
 * 必须在 fit **之后**（此时 `term.cols/rows` 才是新尺寸）。不报的后果：后端 pty 停在默认
 * 100×30，`vim`/`top` 这类全屏程序会错行乱画 —— 而普通命令输出看着又「基本正常」，
 * 很难联想到是尺寸没同步。去重与失败静默都在 store 的 `resizeTerminal` 里。
 */
function reportSize(): void {
  if (!term) return;
  // 隐藏（最小化）时容器为 0×0，fit() 不会改尺寸，但仍防一手「把 1×1 报上去」。
  if (term.cols < 2 || term.rows < 2) return;
  resizeTerminal(props.tab.session, term.cols, term.rows);
}
function focusTerm(): void {
  term?.focus();
}
/**
 * 窗口内任意位置按下鼠标都把焦点交给终端。
 *
 * 原先只有输出区带 `@click="focusTerm"`，标题栏是 `@mousedown.prevent`（拖动，反而阻止聚焦）、
 * 页脚全是按钮 —— 用户点边框/标题/页脚空白之后再敲键盘，按键根本进不了 xterm。
 * 按钮、搜索框、缩放手柄、最小化/关闭图标保持原样（它们各有自己的交互）。
 */
function onFrameMouseDown(e: MouseEvent): void {
  const el = e.target as HTMLElement | null;
  if (el?.closest("button, input, textarea, .fw-term-resizer, .fw-term-headmin, .fw-term-headclose")) return;
  term?.focus();
}

/* ---- 搜索 / 快捷键 / 字号 ---- */
const searchOpen = ref(false);
const searchTerm = ref("");
const searchCase = ref(false);
const searchInputEl = ref<HTMLInputElement | null>(null);
const FONT_MIN = 10;
const FONT_MAX = 24;
const termFontSize = computed(() => prefs.termFontSize);

function searchOptions(): ISearchOptions {
  return {
    caseSensitive: searchCase.value,
    incremental: true,
    decorations: {
      matchBackground: termCssVar("--wt-search-match-bg", "rgba(166, 173, 200, 0.4)"),
      matchBorder: termCssVar("--wt-search-match-bg", "rgba(166, 173, 200, 0)"),
      activeMatchBackground: termCssVar("--wt-search-active-bg", "rgba(166, 227, 161, 0.6)"),
      activeMatchBorder: termCssVar("--wt-search-active-border", "#a6e3a1"),
      matchOverviewRuler: termCssVar("--wt-search-active-border", "#a6e3a1"),
      activeMatchColorOverviewRuler: termCssVar("--wt-search-active-border", "#a6e3a1"),
    },
  };
}
function runSearch(next: boolean): void {
  const q = searchTerm.value.trim();
  if (!q) {
    search?.clearDecorations();
    return;
  }
  if (next) search?.findNext(q, searchOptions());
  else search?.findPrevious(q, searchOptions());
}
function openSearch(): void {
  searchOpen.value = true;
  void nextTick(() => {
    searchInputEl.value?.focus();
    searchInputEl.value?.select();
  });
  runSearch(true);
}
function closeSearch(): void {
  searchOpen.value = false;
  searchTerm.value = "";
  search?.clearDecorations();
  focusTerm();
}
watch([searchTerm, searchCase], () => {
  if (searchOpen.value) runSearch(true);
});

/** 调整字号（±1，钳制到 [FONT_MIN, FONT_MAX]），即时应用并持久化。 */
function setTermFontSize(n: number): void {
  const v = Math.min(Math.max(FONT_MIN, Math.round(n)), FONT_MAX);
  if (v === prefs.termFontSize) return;
  prefs.termFontSize = v;
  savePrefs();
  if (term) term.options.fontSize = v;
  void nextTick(fitTerm);
}

async function pasteClipboard(): Promise<void> {
  try {
    const text = await navigator.clipboard.readText();
    if (text) term?.paste(text);
  } catch {
    /* 剪贴板权限受限时忽略 */
  }
}

/** 键位拦截：Ctrl+C 有选区时复制、Ctrl+V 粘贴、Ctrl+F 搜索、Ctrl±/Ctrl+0 字号。 */
function termKeyHandler(e: KeyboardEvent): boolean {
  if (e.type !== "keydown" || !term) return true;
  const ctrl = e.ctrlKey || e.metaKey;
  const key = e.key.toLowerCase();
  if (ctrl && key === "f") {
    e.preventDefault();
    openSearch();
    return false;
  }
  if (ctrl && key === "c") {
    const sel = term.getSelection();
    if (sel) {
      e.preventDefault();
      void navigator.clipboard.writeText(sel).catch(() => {});
      term.clearSelection();
      return false;
    }
    return true;
  }
  if (ctrl && (key === "v" || key === "y")) {
    e.preventDefault();
    void pasteClipboard();
    return false;
  }
  if ((ctrl || e.altKey) && (key === "=" || key === "+" || key === "-" || key === "_")) {
    e.preventDefault();
    setTermFontSize(termFontSize.value + (key === "-" || key === "_" ? -1 : 1));
    return false;
  }
  if (ctrl && key === "0") {
    e.preventDefault();
    setTermFontSize(13);
    return false;
  }
  return true;
}

/** 本会话切换 shell（cmd ↔ powershell）并重启该 shell（仅影响本窗口）。 */
function toggleShell(): void {
  props.tab.shell = props.tab.shell === "powershell" ? "cmd" : "powershell";
  void restartShell(props.tab, wb.key);
  void nextTick(fitTerm);
}

/**
 * 重连本会话：远端会话＝重新登录（自动，用已存凭据）；本机会话＝重启 shell。
 *
 * 远端会话结束后（用户敲 exit / 连接断开）**不会自动重连** —— 否则「退出登录立刻又被登回去」，
 * 用户会以为退不出去；改由这里显式触发。
 */
function reconnect(): void {
  void restartShell(props.tab, wb.key);
  void nextTick(fitTerm);
}

/** 权限徽标提示（终端无法在插件内对单终端提权，依赖宿主持有管理员令牌启动）。 */
function showAdminHint(): void {
  if (termElevated.value) toast("ok", t("terminalAdminOn"));
  else toast("info", t("terminalAdminHint"));
}

/** 清屏：只清可视区，之前的推入滚动缓冲；清掉重放源使关闭重开也不会带回已清内容。 */
function clear(): void {
  props.tab.output = "";
  term?.clear();
}

/** 最小化本窗口（每窗独立，互不影响；由终端 dock 里的卡片单独还原）。 */
function minimizeSelf(): void {
  minimizeTerminal(props.tab.id);
}

// 从最小化还原时容器重新可见 → 重新测量 xterm（隐藏期间宽高为 0，不重测会错行丢字）。
watch(
  () => isTermMinimized(props.tab.id),
  (min) => {
    if (min) return;
    void nextTick(() => {
      fitTerm();
      term?.focus();
    });
  },
);

// 终端主题跟随全局界面主题：监听 documentElement 的 data-theme，变化时即时重绘 xterm 配色
// （外壳配色由 CSS 变量自动切换，无需处理）。
let themeObs: MutationObserver | undefined;
if (typeof MutationObserver !== "undefined") {
  themeObs = new MutationObserver(() => {
    if (term && host) term.options.theme = xtermTheme(host);
  });
  themeObs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
}
onBeforeUnmount(() => themeObs?.disconnect());

onMounted(() => {
  const saved = getWinGeom(props.tab.id);
  applyGeom(saved ?? nextSpawnGeom());
  void loadTermElevation();
  setupTerm();
  if (outEl.value && typeof ResizeObserver !== "undefined") {
    resizeObs = new ResizeObserver(() => fitTerm());
    resizeObs.observe(outEl.value);
  }
});

onBeforeUnmount(() => {
  resizeObs?.disconnect();
  resizeObs = null;
  // 丢弃待发输入（下面会终止该会话进程），再断流 + 销毁实例。
  dropTerminalInput(props.tab.session);
  setOutputSink(props.tab.id, null);
  term?.dispose();
  term = null;
  fit = null;
  search = null;
  host?.remove();
  host = null;
});
</script>

<style scoped>
/* 独立终端浮窗：WebTUI 风，配色跟随 DSH 项目主题（--dsh-*，随全局 data-theme 日夜翻转）。 */
.fw-term-window {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: var(--mantle, #161b22);
  border: 1px solid var(--surface1, #30363d);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 16px 44px rgba(0, 0, 0, 0.3);
  font-family: var(--font-family, monospace);
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  color: var(--text, #c9d1d9);
  z-index: 10001;
}
.fw-term-head {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 7px 10px;
  border-bottom: 1px solid var(--surface1, #30363d);
  background: var(--surface0, #161b22);
  min-height: 36px;
  user-select: none;
  cursor: grab;
}
.fw-term-head:active { cursor: grabbing; }
.fw-term-headicon { display: inline-flex; color: var(--term-accent, #238636); }
.fw-term-tag { color: var(--text, #c9d1d9); font-weight: 600; font-size: calc(13px * var(--dsh-fs-scale, 1)); flex-shrink: 0; }
/* 远端会话标：与「终端 #n」并排，一眼区分本机 / 远端 */
.fw-term-sshbadge {
  flex-shrink: 0;
  padding: 0 5px;
  border: 1px solid var(--surface1, #30363d);
  border-radius: 3px;
  color: var(--term-accent, #238636);
  font-size: calc(9.5px * var(--dsh-fs-scale, 1));
  font-weight: 700;
  letter-spacing: 0.06em;
  line-height: 1.6;
}
.fw-term-note {
  flex: 1;
  color: var(--subtext0, #8b949e);
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.fw-term-headmin,
.fw-term-headclose {
  color: var(--subtext0, #8b949e);
  font-size: calc(15px * var(--dsh-fs-scale, 1));
  line-height: 1;
  padding: 0 4px;
  flex-shrink: 0;
  cursor: pointer;
}
.fw-term-headmin:hover,
.fw-term-headclose:hover { color: var(--text, #c9d1d9); }

.fw-term-resizer {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 16px;
  height: 16px;
  cursor: nwse-resize;
  z-index: 5;
}
.fw-term-resizer::after {
  content: "";
  position: absolute;
  right: 3px;
  bottom: 3px;
  width: 8px;
  height: 8px;
  border-right: 2px solid var(--overlay0, #8b949e);
  border-bottom: 2px solid var(--overlay0, #8b949e);
  border-bottom-right-radius: 3px;
  opacity: 0.7;
}
.fw-term-resizer:hover::after { opacity: 1; border-color: var(--term-accent, #238636); }

/* 搜索条 */
.fw-term-searchbar {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  margin: 4px 6px 0;
  padding: 4px 6px;
  border: 1px solid var(--surface1, #30363d);
  border-radius: 6px;
  background: var(--base, #0d1117);
}
.fw-term-search-input {
  flex: 1;
  min-width: 0;
  height: 22px;
  border: none;
  outline: none;
  background: transparent;
  color: var(--text, #c9d1d9);
  font-family: var(--font-family, monospace);
  font-size: calc(12px * var(--dsh-fs-scale, 1));
}
.fw-term-search-input::placeholder { color: var(--overlay0, #8b949e); }
.fw-term-search-btn,
.fw-term-search-case {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 22px;
  height: 22px;
  padding: 0 4px;
  border: 1px solid var(--surface1, #30363d);
  border-radius: 4px;
  background: transparent;
  color: var(--subtext0, #8b949e);
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  line-height: 1;
  cursor: pointer;
}
.fw-term-search-btn:hover,
.fw-term-search-case:hover { color: var(--text, #c9d1d9); border-color: var(--term-accent, #238636); }
.fw-term-search-case.on { color: var(--term-accent, #238636); border-color: var(--term-accent, #238636); }
.fw-term-search-close:hover { color: var(--term-danger, #f85149); }

/* xterm 输出区：WebTUI 双线边框（box-="double" 提供内描边，这里去掉自带边框避免重叠） */
.fw-term-out {
  flex: 1;
  min-height: 0;
  overflow: hidden;
  padding: 6px;
  border: none;
  background: var(--base, #0d1117);
  margin: 4px 6px;
  cursor: text;
}
.fw-term-xterm { width: 100%; height: 100%; }

/* 底部按钮栏：不换行 + 可收缩，窄窗下由提示文字先省略，避免溢出 */
.fw-term-footer {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 6px 6px;
  min-width: 0;
  overflow: hidden;
}
.fw-term-footer .fw-spacer { flex: 1 1 0; min-width: 0; }
.fw-term-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  padding: 0 8px;
  border: 1px solid var(--surface1, #30363d);
  border-radius: 5px;
  background: transparent;
  color: var(--subtext1, #c9d1d9);
  font-family: var(--font-family, monospace);
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  flex-shrink: 0;
  cursor: pointer;
}
.fw-term-btn:hover:not(:disabled) { color: var(--text, #c9d1d9); border-color: var(--term-accent, #238636); }
.fw-term-btn:disabled { opacity: 0.35; cursor: default; }

.fw-term-shellhint {
  flex: 0 1 auto;
  min-width: 0;
  color: var(--subtext0, #8b949e);
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.fw-term-kbdhint {
  flex: 0 1 auto;
  min-width: 0;
  color: var(--overlay0, #8b949e);
  font-size: calc(10px * var(--dsh-fs-scale, 1));
  padding: 1px 6px;
  border: 1px solid var(--surface1, #30363d);
  border-radius: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 权限徽标：页脚内排版流的一项（不再绝对定位，避免压住底部内容） */
.fw-term-admin {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  flex-shrink: 0;
  height: 22px;
  padding: 0 6px;
  border: 1px solid var(--surface1, #30363d);
  border-radius: 5px;
  background: transparent;
  color: var(--subtext0, #8b949e);
  font-size: calc(10px * var(--dsh-fs-scale, 1));
  font-family: var(--font-family, monospace);
  cursor: pointer;
  white-space: nowrap;
}
.fw-term-admin:hover { color: var(--text, #c9d1d9); border-color: var(--term-accent, #238636); }
.fw-term-admin.on {
  color: var(--term-accent, #238636);
  border-color: var(--term-accent, #238636);
  background: var(--dsh-accent-glow, rgba(35, 134, 54, 0.14));
  font-weight: 600;
}
</style>
