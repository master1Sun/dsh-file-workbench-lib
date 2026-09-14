<template>
  <!-- 终端独立浮窗：可拖动位置/大小，几何由后端 JSON 持久化（termWin）。
       最小化状态由 wb.termMinimized 驱动（收到底部状态栏，会话保持存活）；
       embedded 模式（停靠面板内）：铺满面板、隐藏浮窗标题栏与缩放手柄 -->
  <div v-show="open && !minimized" ref="rootEl" class="fw-term-window" :class="{ embedded }" :style="rootStyle">
    <!-- 标题栏（可拖动，仅浮窗模式） -->
    <div v-if="!embedded" class="fw-term-head" @mousedown.prevent="startDrag">
      <span class="fw-term-headicon"><icon name="terminal" :size="13" /></span>
      <span class="fw-term-tag">{{ t("terminal") }}</span>
      <span class="fw-term-note">{{ activeCwd || t("terminalTitle") }}</span>
      <span
        class="fw-term-headmin"
        :title="t('terminalMinimize')"
        @click.stop="minimized = true"
        >–</span
      >
      <span
        class="fw-term-headclose"
        :title="t('terminalCloseTitle')"
        @click.stop="emit('close')"
        >✕</span
      >
    </div>

    <!-- 多终端标签栏：每个标签对应一个独立后端会话（常驻 shell 进程，输出实时流式） -->
    <div class="fw-term-tabbar">
      <button
        class="fw-term-scroll"
        :disabled="!canScrollLeft"
        :title="t('scrollLeft')"
        @click="scrollTabs(-180)"
      >◀</button>
      <div ref="tabsEl" class="fw-term-tabs" @scroll="onTabScroll">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          class="fw-term-tab"
          :class="{ active: tab.id === activeId }"
          :title="tab.cwd || t('terminal')"
          @click="switchTab(tab.id)"
        >
          {{ t("terminalTab", { n: tab.name }) }}<span class="fw-term-tab-shell">（{{ tab.shell === "powershell" ? "PS" : "cmd" }}）</span>
          <span
            v-if="tabs.length > 1"
            class="fw-term-tab-close"
            :title="t('terminalClose')"
            @click.stop="closeTab(tab.id)"
          >×</span>
        </button>
      </div>
      <button
        class="fw-term-scroll"
        :disabled="!canScrollRight"
        :title="t('scrollRight')"
        @click="scrollTabs(180)"
      >▶</button>
      <button
        class="fw-term-tab-add"
        :title="t('terminalNew')"
        :disabled="tabs.length >= TERMINAL_LIMIT"
        @click="addTab"
      >＋</button>
      <button
        class="fw-term-shell"
        :title="t('terminalShellSwitch')"
        @click="toggleDefaultShell"
      >{{ defaultShellLabel }}</button>
      <!-- 权限徽标：终端子进程继承宿主（dsh web）令牌，故徽标反映的是宿主进程权限态。
           探测完成前不渲染，避免先显示「普通权限」再跳成「管理员」的闪烁。 -->
      <button
        v-if="termElevated !== null"
        class="fw-term-admin"
        :class="{ on: termElevated }"
        :title="termElevated ? t('terminalAdminOn') : t('terminalAdminOff')"
        @click="showAdminHint"
      >
        <icon name="shield" :size="11" />
        <span>{{ termElevated ? t("terminalAdmin") : t("terminalAdminNormal") }}</span>
      </button>
    </div>

    <!-- 终端搜索条：Ctrl+F 唤起，Enter/Shift+Enter 上下跳转，Esc 关闭 -->
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

    <!-- xterm.js 终端输出区：常驻 shell 的实时流渲染（ANSI 着色 / 真实提示符 / 行交互） -->
    <div ref="outEl" class="fw-term-out" @click="focusTerm">
      <div v-if="activeTab" ref="termMountEl" class="fw-term-xterm"></div>
    </div>
    <div class="fw-term-footer">
      <el-button size="small" @click="clear">{{ t('terminalClear') }}</el-button>
      <el-button size="small" :title="t('termFontSmaller')" :disabled="termFontSize <= FONT_MIN" @click="setTermFontSize(termFontSize - 1)">A−</el-button>
      <el-button size="small" :title="t('termFontLarger')" :disabled="termFontSize >= FONT_MAX" @click="setTermFontSize(termFontSize + 1)">A+</el-button>
      <div class="fw-spacer"></div>
      <span class="fw-term-shellhint">{{ activeShellLabel }} · {{ activeCwd || t('terminal') }}</span>
      <span class="fw-term-kbdhint" :title="t('termCopyHint')">Ctrl+C 复制 · Ctrl+V 粘贴 · Ctrl+F 搜索</span>
    </div>

    <!-- 右下角缩放手柄（双击恢复默认尺寸，仅浮窗模式） -->
    <div
      v-if="!embedded"
      class="fw-term-resizer"
      :title="t('terminalResizeTitle')"
      @mousedown.prevent="startResize"
      @dblclick.stop="resetSize"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from "vue";
import type { CSSProperties } from "vue";
import { Terminal } from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";
import { SearchAddon } from "@xterm/addon-search";
import type { ISearchOptions } from "@xterm/addon-search";
import { WebLinksAddon } from "@xterm/addon-web-links";
import "@xterm/xterm/css/xterm.css";
import { useI18n } from "../../../composables/core/i18n";
import { toast, wb, termNewSeq } from "../../../stores/workbench";
import { prefs, savePrefs, termWin, saveTermWin } from "../../../composables/core/settings";
import {
  closeAllTerminals,
  closeTermTab,
  dropTerminalInput,
  flushTerminalInput,
  loadTermElevation,
  nextTermName,
  queueTerminalInput,
  restartShell,
  setOutputSink,
  startStream,
  termActiveId,
  termElevated,
  termTabs,
  type TermTab,
} from "../../../composables/domain/terminalStore";
import Icon from "../../common/Icon.vue";

const props = defineProps<{ open: boolean; embedded?: boolean }>();
/** embedded：停靠面板内铺满渲染；否则为独立可拖浮窗。 */
const embedded = !!props.embedded;
const emit = defineEmits<{ close: [] }>();
const { t } = useI18n();
/**
 * 终端数目上限（每个终端一个后端常驻进程，避免无界增长）。
 */
const TERMINAL_LIMIT = 9;

/** 多终端标签与激活态来自模块级单例（跨面板关闭存活）。 */
const tabs = termTabs;
const activeId = termActiveId;
const outEl = ref<HTMLElement | null>(null);
const termMountEl = ref<HTMLElement | null>(null);
/** 标签栏横向滚动：是否可向左/右滚动（溢出时启用 ◀/▶）。 */
const tabsEl = ref<HTMLElement | null>(null);
const canScrollLeft = ref(false);
const canScrollRight = ref(false);

// —— 浮窗几何：位置与尺寸，由后端 JSON 持久化的 termWin 填充；x/y 未记录时锚定右下角 ——
const WIN_W = 680;
const WIN_H = 460;
const MIN_W = 320;
const MIN_H = 240;
const winW = ref(Math.max(MIN_W, termWin.w));
const winH = ref(Math.max(MIN_H, termWin.h));
const winX = ref(0);
const winY = ref(0);
const rootEl = ref<HTMLElement | null>(null);
/** 是否最小化（收到底部状态栏；共享到 wb 供状态栏显示还原按钮，会话保持存活）。 */
const minimized = computed<boolean>({
  get: () => wb.termMinimized,
  set: (v) => {
    wb.termMinimized = v;
  },
});
// 状态栏点「还原」时（wb.termMinimized true→false）重挂 xterm 并聚焦。
watch(minimized, (m) => {
  if (!m) {
    void nextTick(() => {
      mountTerm();
      focusTerm();
    });
  }
});
/** 是否已发生真实交互（拖动/缩放/恢复）；在此之前不写回持久化，避免覆盖已存位置。 */
let interacted = false;
/** 把 store（termWin）几何应用到本地窗口；x/y 未记录时锚定右下角。 */
function applyTermWin(
  w = termWin.w,
  h = termWin.h,
  x = termWin.x,
  y = termWin.y,
): void {
  winW.value = Math.max(MIN_W, w);
  winH.value = Math.max(MIN_H, h);
  winX.value = x >= 0
    ? Math.min(x, Math.max(0, window.innerWidth - winW.value))
    : Math.max(0, window.innerWidth - winW.value - 18);
  winY.value = y >= 0
    ? Math.min(y, Math.max(0, window.innerHeight - winH.value))
    : Math.max(0, window.innerHeight - winH.value - 18);
}
applyTermWin();

/** 后端 JSON 异步回填 store 后，若尚未发生交互则把已存位置同步到本地窗口。 */
watch(
  () => [termWin.w, termWin.h, termWin.x, termWin.y],
  () => {
    if (!interacted) applyTermWin();
  },
);

/** 固定窗口样式：fixed 定位 + 动态尺寸，随拖动/缩放更新；embedded 时铺满面板。 */
const rootStyle = computed<CSSProperties>(() =>
  embedded
    ? { width: "100%", height: "100%" }
    : {
        position: "fixed",
        left: `${winX.value}px`,
        top: `${winY.value}px`,
        width: `${winW.value}px`,
        height: `${winH.value}px`,
      },
);

// 几何变化（防抖）回写后端 JSON 持久化；未交互前不回写。
let geoTimer = 0;
watch([winX, winW, winY, winH], () => {
  if (!interacted) return;
  window.clearTimeout(geoTimer);
  geoTimer = window.setTimeout(() => {
    termWin.x = winX.value;
    termWin.y = winY.value;
    termWin.w = winW.value;
    termWin.h = winH.value;
    saveTermWin();
  }, 250);
});

/* ---- 拖动标题栏 ---- */
let dragging = false;
let grabDX = 0;
let grabDY = 0;
function startDrag(e: MouseEvent): void {
  // 拖动手柄禁止命中关闭按钮
  if ((e.target as HTMLElement).closest(".fw-term-headclose")) return;
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
  const w = el?.offsetWidth ?? WIN_W;
  const h = el?.offsetHeight ?? WIN_H;
  winX.value = Math.min(Math.max(0, e.clientX - grabDX), window.innerWidth - w);
  winY.value = Math.min(Math.max(0, e.clientY - grabDY), window.innerHeight - Math.min(h, window.innerHeight - 8));
}
function stopDrag(): void {
  if (!dragging) return;
  dragging = false;
  document.body.style.userSelect = "";
  document.removeEventListener("mousemove", onDragMove);
  document.removeEventListener("mouseup", stopDrag);
}
onUnmounted(stopDrag);

/* ---- 右下角拖拽缩放 ---- */
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
}
onUnmounted(stopResize);

/** 双击手柄恢复默认尺寸。 */
function resetSize(): void {
  interacted = true;
  winW.value = Math.min(WIN_W, window.innerWidth - 12);
  winH.value = Math.min(WIN_H, window.innerHeight - 12);
}

function onTabScroll(): void {
  const el = tabsEl.value;
  if (!el) return;
  canScrollLeft.value = el.scrollLeft > 0;
  canScrollRight.value = el.scrollLeft + el.clientWidth < el.scrollWidth - 1;
}
function scrollTabs(dx: number): void {
  tabsEl.value?.scrollBy({ left: dx, behavior: "smooth" });
  onTabScroll();
}
// 标签增删后刷新 ◀/▶ 可用状态（等 DOM 渲染完成再测宽度）
watch(
  () => tabs.value.length,
  async () => {
    await nextTick();
    onTabScroll();
  },
);

const activeTab = computed<TermTab | null>(() => tabs.value.find((t) => t.id === activeId.value) ?? null);
const activeCwd = computed(() => activeTab.value?.cwd ?? "");
const activeShellLabel = computed(() => (activeTab.value?.shell === "powershell" ? "PS" : "cmd"));
/** 新建终端默认 shell 标签（按钮显示）：切换后仅影响后续新建的终端。 */
const defaultShellLabel = computed(() => (prefs.termShell === "powershell" ? "PS" : "cmd"));

/* ---- xterm.js 实例：单实例挂激活标签，切标签时重建并重放输出缓冲 ---- */

let term: Terminal | null = null;
let fitAddon: FitAddon | null = null;
let searchAddon: SearchAddon | null = null;
let resizeObs: ResizeObserver | null = null;

/* ---- 终端增强：搜索 / 复制粘贴快捷键 / 字号 ---- */
const searchOpen = ref(false);
const searchTerm = ref("");
const searchCase = ref(false);
const searchInputEl = ref<HTMLInputElement | null>(null);
const FONT_MIN = 10;
const FONT_MAX = 24;
const termFontSize = computed(() => prefs.termFontSize);

/** 搜索选项：区分大小写 + 增量高亮 + 主题化匹配色。 */
function searchOptions(): ISearchOptions {
  return {
    caseSensitive: searchCase.value,
    incremental: true,
    decorations: {
      matchBackground: "#8b949e66",
      matchBorder: "#8b949e00",
      activeMatchBackground: "#23863699",
      activeMatchBorder: "#3fb950",
      matchOverviewRuler: "#3fb95066",
      activeMatchColorOverviewRuler: "#238636",
    },
  };
}

/** 执行一次查找：next=true 下一个，false 上一个；空关键字时仅清装饰。 */
function runSearch(next: boolean): void {
  const q = searchTerm.value.trim();
  if (!q) {
    searchAddon?.clearDecorations();
    return;
  }
  if (next) searchAddon?.findNext(q, searchOptions());
  else searchAddon?.findPrevious(q, searchOptions());
}

/** Ctrl+F 唤起搜索条（聚焦并全选已有关键字）。 */
function openSearch(): void {
  if (!activeTab.value) return;
  searchOpen.value = true;
  void nextTick(() => {
    searchInputEl.value?.focus();
    searchInputEl.value?.select();
  });
  runSearch(true);
}

/** Esc / 关闭按钮：收起搜索条并清高亮，焦点还给终端。 */
function closeSearch(): void {
  searchOpen.value = false;
  searchTerm.value = "";
  searchAddon?.clearDecorations();
  term?.focus();
}

// 关键字 / 大小写切换后增量搜索（搜索条打开时）。
watch([searchTerm, searchCase], () => {
  if (searchOpen.value) runSearch(true);
});

/** 调整终端字号（±1，钳制到 [FONT_MIN, FONT_MAX]），即时应用并持久化。 */
function setTermFontSize(n: number): void {
  const v = Math.min(Math.max(FONT_MIN, Math.round(n)), FONT_MAX);
  if (v === prefs.termFontSize) return;
  prefs.termFontSize = v;
  savePrefs();
  if (term) term.options.fontSize = v;
  void nextTick(fitTerm);
}

/** 剪贴板读取失败时静默回退（无法手动触发浏览器 paste 事件，保持现状）。 */
async function pasteClipboard(): Promise<void> {
  try {
    const text = await navigator.clipboard.readText();
    if (text) term?.paste(text);
  } catch {
    /* 剪贴板权限受限时忽略 */
  }
}

/** 终端键位拦截：Ctrl+C 有选区时复制（否则放行 SIGINT）、Ctrl+V 粘贴、Ctrl+F 搜索、Ctrl±/Ctrl+0 字号。 */
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
    return true; // 无选区：放行（终端收到 Ctrl+C → SIGINT）
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

/** 从宿主主题变量构造 xterm 配色（挂载时读取一次，跟随 --dsh-* 变量）。 */
function xtermTheme(): Record<string, string> {
  const el = termMountEl.value;
  const cs = el ? getComputedStyle(el) : getComputedStyle(document.documentElement);
  const v = (name: string, fallback: string): string => (cs.getPropertyValue(name) || fallback).trim();
  return {
    background: v("--dsh-bg", "#0d1117"),
    foreground: v("--dsh-fg", "#c9d1d9"),
    cursor: v("--dsh-fg", "#c9d1d9"),
    cursorAccent: v("--dsh-bg", "#0d1117"),
    selectionBackground: `${v("--dsh-accent", "#388bfd")}66`,
    black: "#0d1117",
    red: "#f85149",
    green: "#3fb950",
    yellow: "#d29922",
    blue: "#58a6ff",
    magenta: "#bc8cff",
    cyan: "#39c5cf",
    white: "#c9d1d9",
    brightBlack: "#484f58",
    brightRed: "#ff7b72",
    brightGreen: "#3fb950",
    brightYellow: "#d29922",
    brightBlue: "#58a6ff",
    brightMagenta: "#bc8cff",
    brightCyan: "#39c5cf",
    brightWhite: "#f0f6fc",
  };
}

function disposeTerm(): void {
  const prev = activeTab.value;
  if (prev) {
    // 切标签/卸载前把合并窗口里未发出的按键补发（zsh 之外的 shell 不会本地回显，丢了就是真丢）。
    flushTerminalInput(prev.session);
    setOutputSink(prev.id, null);
  }
  term?.dispose();
  term = null;
  fitAddon = null;
  searchAddon = null;
  const mount = termMountEl.value;
  if (mount) mount.innerHTML = "";
}

/** 为当前激活标签创建 xterm：重放累积输出、接线输入（onData → stdin）、注册实时输出回调。 */
function mountTerm(): void {
  disposeTerm();
  const tab = activeTab.value;
  const mount = termMountEl.value;
  if (!tab || !mount) return;
  const inst = new Terminal({
    cursorBlink: true,
    fontSize: termFontSize.value,
    fontFamily: 'Consolas, "Courier New", "Cascadia Mono", monospace',
    scrollback: 10000,
    theme: xtermTheme(),
    allowTransparency: false,
    // 搜索高亮（@xterm/addon-search 的 decorations）依赖 xterm 的 registerDecoration 提案 API
    allowProposedApi: true,
  });
  const fit = new FitAddon();
  inst.loadAddon(fit);
  inst.loadAddon(new WebLinksAddon());
  const search = new SearchAddon();
  inst.loadAddon(search);
  searchAddon = search;
  inst.attachCustomKeyEventHandler(termKeyHandler);
  inst.open(mount);
  // 重放此前累积的输出（含 ANSI），再聚焦输入。
  inst.write(tab.output);
  inst.onData((data) => {
    // 经输入队列合并后批量发送（每字符一次 POST 会刷屏，且并发可能错序）。
    queueTerminalInput(tab.session, data);
  });
  term = inst;
  fitAddon = fit;
  setOutputSink(tab.id, (chunk) => {
    // 仅当该标签仍为激活态时写入当前实例（切走后的残留 sink 忽略）。
    if (activeTab.value?.id === tab.id) term?.write(chunk);
  });
  void requestAnimationFrame(() => {
    try {
      fitAddon?.fit();
    } catch {
      /* 容器尺寸为 0（面板未布局）时忽略 */
    }
  });
}

function fitTerm(): void {
  try {
    fitAddon?.fit();
  } catch {
    /* ignore */
  }
}

function focusTerm(): void {
  term?.focus();
}

/** 切换新终端默认 shell（cmd ↔ powershell）：只影响此后新建的终端，不改动已存在终端。 */
function toggleDefaultShell(): void {
  prefs.termShell = prefs.termShell === "powershell" ? "cmd" : "powershell";
  savePrefs();
}

/**
 * 点击权限徽标：已提权时仅回报状态，未提权时给出获取管理员终端的指引。
 *
 * 终端 shell 由宿主以 ConPTY 派生，进程令牌继承自 dsh web，因此无法在插件内部对单个
 * 终端提权（Windows 提权必须经 UAC，且 UAC 提权进程无法挂到 ConPTY 伪控制台上）；
 * 可行路径是让宿主本身以管理员身份启动。
 */
function showAdminHint(): void {
  if (termElevated.value) toast("ok", t("terminalAdminOn"));
  else toast("info", t("terminalAdminHint"));
}

let seq = 0;
function newSessionId(): string {
  seq += 1;
  return `t${Date.now().toString(36)}${seq.toString(36)}${Math.random().toString(36).slice(2, 8)}`;
}

function makeTab(): TermTab {
  // 优先用「在终端打开」携带的目标目录，否则回退工作区根。
  const cwd = wb.termRequestCwd || wb.root || wb.explorerPath || "";
  wb.termRequestCwd = "";
  return {
    id: newSessionId(),
    name: nextTermName(),
    session: newSessionId(),
    cwd,
    shell: prefs.termShell,
    output: "",
    connected: false,
  };
}

/** 新建终端并建立后端常驻 shell（满额时不新建）。 */
function addTab(): void {
  if (tabs.value.length >= TERMINAL_LIMIT) return;
  const tab = makeTab();
  tabs.value.push(tab);
  activeId.value = tab.id;
  startStream(tab, wb.key);
  void nextTick(mountTerm);
}

// 终端窗口打开（停靠面板首次挂载）时，默认创建一个终端，避免空状态。
onMounted(() => {
  // 探测宿主权限态供权限徽标显示（幂等，跨面板开合只请求一次）。
  void loadTermElevation();
  if (!tabs.value.length) addTab();
  else void nextTick(mountTerm);
});

/**
 * 「文件」菜单点「新建终端」且终端浮窗已打开：追加一个新终端标签页（落在请求的工作目录）。
 * 终端处于关闭态时走 `wb.termOpen = true`，由上面 onMounted 自建首屏标签，这里不重复创建。
 */
watch(termNewSeq, () => {
  if (tabs.value.length < TERMINAL_LIMIT) addTab();
});

/** 关闭指定终端（断开流并终止其后端常驻进程）。 */
function closeTab(id: string): void {
  const wasActive = activeId.value === id;
  closeTermTab(id);
  if (wasActive) void nextTick(mountTerm);
}

function switchTab(id: string): void {
  if (activeId.value === id) return;
  activeId.value = id;
  void nextTick(mountTerm);
}

/**
 * 清屏：只清可视区，之前的内容推入滚动缓冲（仍可向上滚动回看），不清后端会话。
 * 注意用 clear() 而非 reset()——reset 是整机会话重置（RIS），会连回滚缓冲一起抹掉，
 * 表现为「把前面的提示也全清了」。
 */
function clear(): void {
  const tab = activeTab.value;
  if (!tab) return;
  // 清掉重放源，使清屏效果在切标签重建实例后依然保持；当前实例的回滚缓冲不受影响。
  tab.output = "";
  term?.clear();
}

// 布局变化（面板/浮窗尺寸）时重算 xterm 列宽行高。
onMounted(() => {
  if (outEl.value && typeof ResizeObserver !== "undefined") {
    resizeObs = new ResizeObserver(() => fitTerm());
    resizeObs.observe(outEl.value);
  }
});

onUnmounted(() => {
  resizeObs?.disconnect();
  resizeObs = null;
  // 面板整体关闭：先丢弃待发输入（下面会立刻 kill 掉所有会话，发出去只会 404）。
  dropTerminalInput();
  disposeTerm();
  // 面板整体关闭（组件卸载）时终止所有后端常驻进程，避免 node-pty 残留到任务管理器。
  void closeAllTerminals();
});

defineExpose({
  /** 打开终端浮窗时调用：确保至少存在一个终端并聚焦输入（幂等）。 */
  focus: () => {
    // 从最小化状态下经工具栏按钮重新打开时，恢复完整浮窗而非任务条。
    minimized.value = false;
    if (!tabs.value.length) {
      addTab();
      return;
    }
    // 首次打开时 root 可能尚未就绪，这里补填初始工作目录。
    const tab = activeTab.value;
    if (tab && !tab.cwd) {
      tab.cwd = wb.root || wb.explorerPath || "";
      void restartShell(tab, wb.key);
    }
    void nextTick(() => {
      mountTerm();
      focusTerm();
    });
  },
  clear,
});
</script>

<style scoped>
/* 终端独立浮窗：fixed 定位，由 titlebar 拖动、右下角缩放 */
.fw-term-window {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: var(--dsh-bg2, #21262d);
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.45);
  font-family: Consolas, "Courier New", monospace;
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  z-index: 9999;
}
.fw-term-head {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 7px 10px;
  border-bottom: 1px solid var(--dsh-border, #30363d);
  min-height: 36px;
  user-select: none;
  cursor: grab;
}
.fw-term-window.embedded { box-shadow: none; border: none; border-radius: 0; }
.fw-term-head:active { cursor: grabbing; }
.fw-term-headicon { display: inline-flex; align-items: center; font-size: calc(13px * var(--dsh-fs-scale, 1)); }
.fw-term-tag { color: var(--dsh-fg, #c9d1d9); font-weight: 600; font-size: calc(13px * var(--dsh-fs-scale, 1)); flex-shrink: 0; }
.fw-term-note { flex: 1; color: var(--dsh-fg-weak, #8b949e); font-size: calc(11px * var(--dsh-fs-scale, 1)); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.fw-term-headmin {
  color: var(--dsh-fg-weak, #8b949e);
  font-size: calc(15px * var(--dsh-fs-scale, 1));
  line-height: 1;
  padding: 0 4px;
  flex-shrink: 0;
  cursor: pointer;
}
.fw-term-headmin:hover { color: var(--dsh-fg, #c9d1d9); }
.fw-term-headclose { color: var(--dsh-fg-weak, #8b949e); font-size: calc(13px * var(--dsh-fs-scale, 1)); padding: 0 2px; flex-shrink: 0; cursor: pointer; }
.fw-term-headclose:hover { color: var(--dsh-fg, #c9d1d9); }
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
  border-right: 2px solid var(--dsh-fg-weak, #8b949e);
  border-bottom: 2px solid var(--dsh-fg-weak, #8b949e);
  border-bottom-right-radius: 3px;
  opacity: 0.7;
}
.fw-term-resizer:hover::after { opacity: 1; border-color: var(--dsh-accent, #238636); }

/* 多终端标签栏 */
.fw-term-tabbar {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  padding: 4px 6px;
  border-bottom: 1px solid var(--dsh-border, #30363d);
}
.fw-term-scroll {
  flex-shrink: 0;
  width: 20px;
  height: 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: var(--dsh-fg-weak, #8b949e);
  font-size: calc(10px * var(--dsh-fs-scale, 1));
  line-height: 1;
  cursor: pointer;
}
.fw-term-scroll:hover:not(:disabled) { background: var(--dsh-hover, rgba(48, 54, 61, 0.5)); color: var(--dsh-fg, #c9d1d9); }
.fw-term-scroll:disabled { opacity: 0.3; cursor: default; }
.fw-term-tabs {
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
  min-width: 0;
  overflow-x: auto;
  scrollbar-width: none;
}
.fw-term-tabs::-webkit-scrollbar { display: none; }
.fw-term-tab {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  padding: 3px 8px;
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 5px;
  background: transparent;
  color: var(--dsh-fg-weak, #8b949e);
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  cursor: pointer;
  white-space: nowrap;
}
.fw-term-tab:hover { background: var(--dsh-hover, rgba(48, 54, 61, 0.5)); }
.fw-term-tab.active {
  color: var(--dsh-accent, #238636);
  border-color: var(--dsh-accent, #238636);
}
.fw-term-tab-close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  margin-left: 2px;
  border-radius: 3px;
  color: inherit;
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  line-height: 1;
}
.fw-term-tab-close:hover { background: var(--dsh-border, #30363d); color: var(--dsh-fg, #c9d1d9); }
.fw-term-tab-add {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border: 1px dashed var(--dsh-border, #30363d);
  border-radius: 5px;
  background: transparent;
  color: var(--dsh-fg-weak, #8b949e);
  font-size: calc(13px * var(--dsh-fs-scale, 1));
  cursor: pointer;
}
.fw-term-tab-add:hover:not(:disabled) { color: var(--dsh-accent, #238636); border-color: var(--dsh-accent, #238636); }
.fw-term-tab-add:disabled { opacity: 0.35; cursor: default; }
.fw-term-tab-shell { color: var(--dsh-fg-weak, #8b949e); font-size: calc(10px * var(--dsh-fs-scale, 1)); }
.fw-term-tab.active .fw-term-tab-shell { color: inherit; opacity: 0.85; }
.fw-term-shell {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 30px;
  height: 22px;
  padding: 0 6px;
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 5px;
  background: transparent;
  color: var(--dsh-fg-weak, #8b949e);
  font-size: calc(10px * var(--dsh-fs-scale, 1));
  font-weight: 600;
  cursor: pointer;
}
.fw-term-shell:hover { color: var(--dsh-accent, #238636); border-color: var(--dsh-accent, #238636); }

/* 权限徽标：提权时以强调色描边（盾牌图标），普通权限保持弱化灰色；两种主题均用 --dsh-* 变量自适应。 */
.fw-term-admin {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 3px;
  height: 22px;
  padding: 0 6px;
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 5px;
  background: transparent;
  color: var(--dsh-fg-weak, #8b949e);
  font-size: calc(10px * var(--dsh-fs-scale, 1));
  cursor: pointer;
  white-space: nowrap;
}
.fw-term-admin:hover { color: var(--dsh-accent, #238636); border-color: var(--dsh-accent, #238636); }
.fw-term-admin.on {
  color: var(--dsh-accent, #238636);
  border-color: var(--dsh-accent, #238636);
  background: color-mix(in srgb, var(--dsh-accent, #238636) 14%, transparent);
  font-weight: 600;
}

/* 终端搜索条 */
.fw-term-searchbar {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  margin: 4px 6px 0;
  padding: 4px 6px;
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 6px;
  background: var(--dsh-bg, #0d1117);
}
.fw-term-search-input {
  flex: 1;
  min-width: 0;
  height: 22px;
  border: none;
  outline: none;
  background: transparent;
  color: var(--dsh-fg, #c9d1d9);
  font-size: calc(12px * var(--dsh-fs-scale, 1));
}
.fw-term-search-input::placeholder { color: var(--dsh-fg-weak, #8b949e); }
.fw-term-search-btn,
.fw-term-search-case {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 22px;
  height: 22px;
  padding: 0 4px;
  border: 1px solid transparent;
  border-radius: 4px;
  background: transparent;
  color: var(--dsh-fg-weak, #8b949e);
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  line-height: 1;
  cursor: pointer;
}
.fw-term-search-btn:hover,
.fw-term-search-case:hover { background: var(--dsh-hover, rgba(48, 54, 61, 0.5)); color: var(--dsh-fg, #c9d1d9); }
.fw-term-search-case.on { color: var(--dsh-accent, #238636); border-color: var(--dsh-accent, #238636); }
.fw-term-search-close:hover { color: var(--dsh-fg, #c9d1d9); }

/* xterm 输出区 */
.fw-term-out {
  flex: 1;
  min-height: 0;
  overflow: hidden;
  padding: 6px 0 0 6px;
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 6px;
  background: var(--dsh-bg, #0d1117);
  margin: 4px 6px;
  cursor: text;
}
.fw-term-xterm { width: 100%; height: 100%; }
.fw-term-footer {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 6px 6px;
}
.fw-term-footer .fw-spacer { flex: 1; }
.fw-term-shellhint { color: var(--dsh-fg-weak, #8b949e); font-size: calc(11px * var(--dsh-fs-scale, 1)); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.fw-term-kbdhint {
  flex-shrink: 0;
  color: var(--dsh-fg-weak, #8b949e);
  font-size: calc(10px * var(--dsh-fs-scale, 1));
  padding: 1px 6px;
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 4px;
  white-space: nowrap;
}
</style>