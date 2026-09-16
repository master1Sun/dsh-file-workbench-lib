<template>
  <!-- 全局唯一终端宿主：挂在 main.ts 的常驻实例上，不随「文件工作台 / 文件编辑器」任一面板
       的 tab 切换而卸载，因此切换面板不会重建终端、也不会出现两个面板各开一个终端。
       每个会话 = 一个独立的 TerminalWindow 浮窗（不再有内部 tab），且**各窗独立最小化/还原**。 -->
  <TerminalWindow
    v-for="tab in termTabs"
    :key="tab.id"
    v-show="wb.termOpen && !isTermMinimized(tab.id)"
    :tab="tab"
    @close="onClose(tab.id)"
  />

  <!-- 最小化后的折叠形态：**只有一个可拖动的悬浮按钮**（华为小窗式）。
       点击 → 在按钮侧边展开**已最小化**的窗口卡片（再次点击收起）；点卡片只还原那一个窗口，
       其余窗口不受影响。按钮可自由拖动（位置跨面板开合保留）；右键直接弹终端列表菜单。
       空白处透传点击，不遮挡主界面。 -->
  <div
    v-if="wb.termOpen && minimizedTabs.length"
    ref="dockRef"
    class="dsh-term-dock"
    :class="{
      'is-floating': !!termDockPos,
      'is-dragging': dragging,
      'is-flip': flip,
      'is-bottom': alignBottom,
    }"
    :style="dockStyle"
  >
    <!-- 折叠态：唯一按钮（小圆标）。终端图标 + 已最小化窗口数徽标 + 提权点。
         左键：展开 / 收起列表；右键：菜单（最小化终端列表 + 关闭）。 -->
    <div
      class="dsh-term-dock-btn"
      :title="t('terminalDockDragTitle')"
      @click="onBtnClick"
      @contextmenu.prevent="openDockMenu"
      @pointerdown="onPointerDown"
      @pointermove="onPointerMove"
      @pointerup="onPointerUp"
      @pointercancel="onPointerUp"
    >
      <icon name="terminal" :size="15" />
      <span v-if="minimizedTabs.length > 1" class="dsh-term-dock-count">{{ minimizedTabs.length }}</span>
      <span v-if="termElevated" class="dsh-term-dock-dot" :title="t('terminalAdminOn')"></span>
    </div>

    <!-- 展开态：仅列**已最小化**的窗口卡片（点卡片还原该窗口；＋ 新建一个窗口）。
         最小化窗口过多时列表**内部滚动**：高度上限由 listMaxH 按按钮所在位置的视口余量算出，
         避免列表被视口上/下缘裁掉（贴底展开时从 bottom 向上生长，同样受此上限约束）。 -->
    <div
      v-if="showList && !dragging"
      ref="listRef"
      class="dsh-term-dock-list"
      :style="{ maxHeight: `${listMaxH}px` }"
    >
      <div class="dsh-term-dock-listhead">{{ t("terminalDockSessions") }}</div>
      <TerminalMiniWindow v-for="tab in minimizedTabs" :key="tab.id" :tab="tab" />
      <button class="dsh-term-dock-new" :title="t('terminalNew')" @click.stop="spawn(true)">＋ {{ t("terminalNew") }}</button>
    </div>
  </div>

  <!-- 浮标右键菜单：目前只有「全部关闭」。
       复用公共 ContextMenu（Teleport 到 body、自带主题对齐与点空白关闭）。 -->
  <ContextMenu
    v-if="menuOpen"
    :items="menuItems"
    :x="menuPos.x"
    :y="menuPos.y"
    @close="menuOpen = false"
  />
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import type { CSSProperties } from "vue";
import TerminalWindow from "./TerminalWindow.vue";
import TerminalMiniWindow from "./TerminalMiniWindow.vue";
import Icon from "../../common/Icon.vue";
import ContextMenu from "../../common/ContextMenu.vue";
import type { MenuItem } from "../../../../shared/types";
import { wb, termNewSeq } from "../../../stores/workbench";
import { prefs } from "../../../composables/core/settings";
import {
  closeAllTerminals,
  createTerminal,
  isTermMinimized,
  loadTermElevation,
  removeTerminal,
  restoreTerminal,
  termActiveId,
  termDockPos,
  termElevated,
  termTabs,
} from "../../../composables/domain/terminalStore";
import type { TermTab } from "../../../composables/domain/terminalStore";
import { t } from "../../../composables/core/i18n";

/** 终端数目上限（每个终端一个后端常驻进程，避免无界增长）。 */
const TERMINAL_LIMIT = 9;

/**
 * 终端主题**跟随全局界面主题**：DSH 把生效的 data-theme（dark/light）打到 documentElement 上，
 * 这里把同样的值转发到 #dsh-term-root 的 data-term-theme，供终端画布的 ANSI 配色切深浅
 * （面板外壳本身走 --dsh-*，已随全局自动翻转）。
 */
function currentGlobalTheme(): "dark" | "light" {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}
function applyTermTheme(): void {
  const root = document.getElementById("dsh-term-root");
  if (root) root.setAttribute("data-term-theme", currentGlobalTheme());
}
// setup 即落一次；之后由 MutationObserver 跟随全局 data-theme 变化（含用户切主题 / 跟随系统）。
applyTermTheme();
let themeObserver: MutationObserver | undefined;
if (typeof MutationObserver !== "undefined") {
  themeObserver = new MutationObserver(applyTermTheme);
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
}
onBeforeUnmount(() => themeObserver?.disconnect());

/** 已最小化的窗口列表：dock 只列这些，点卡片只还原对应的那一个（各窗独立）。 */
const minimizedTabs = computed(() => termTabs.value.filter((tb) => isTermMinimized(tb.id)));

const dockRef = ref<HTMLElement | null>(null);
/** 点击 dock 按钮后展开的列表保持可见，直到再次点击或点空白处。 */
const pinned = ref(false);
/** 是否正在拖动（拖动期间不展开列表，避免误触卡片）。 */
const dragging = ref(false);
/** 列表可见性：仅点击展开（不再跟随悬停，避免误触弹出）。 */
const showList = computed(() => pinned.value);

/** 折叠按钮边长（px）。做小一号的小圆标，尽量少遮挡主界面。 */
const BTN = 36;
const EDGE = 8;
const DRAG_SLOP = 4;
/** 吸边阈值（px）：松手时距屏幕边缘在此范围内就吸附上去。 */
const SNAP = 48;

/** 会话列表改到按钮右侧展开：按钮被拖到屏幕左半边时避免列表出界。 */
const flip = computed(() => {
  const p = termDockPos.value;
  return !!p && p.x < 340;
});
/** 会话列表贴底对齐（向上生长）：按钮在下半屏时避免列表被视口下缘裁掉。 */
const alignBottom = computed(() => {
  const p = termDockPos.value;
  return !!p && p.y > window.innerHeight / 2;
});
const dockStyle = computed<CSSProperties | undefined>(() => {
  const p = termDockPos.value;
  return p ? { left: `${p.x}px`, top: `${p.y}px` } : undefined;
});

/** 展开列表高度上限（px）：最小化窗口过多时由列表内部滚动，而不是把列表顶出屏幕。 */
const listRef = ref<HTMLElement | null>(null);
const listMaxH = ref(360);
/**
 * 按 dock 按钮当前所在位置推算列表可用高度：
 * - 向下展开（默认 / 按钮在上半屏）：可用 = 视口底 − 按钮顶；
 * - 贴底展开（bottom: 0，按钮在下半屏）：可用 = 按钮底 − 上边缘留白。
 * 再与视口高度的 72% 取小，避免大屏上列表无限拉长（会话多时仍会出现滚动条）。
 */
function updateListMaxH(): void {
  const r = dockRef.value?.getBoundingClientRect();
  if (!r) return;
  const avail = alignBottom.value ? r.bottom - EDGE : window.innerHeight - r.top - EDGE;
  listMaxH.value = Math.max(180, Math.min(Math.round(avail) - 4, Math.round(window.innerHeight * 0.72)));
}

function clampPos(x: number, y: number): { x: number; y: number } {
  const maxX = Math.max(EDGE, window.innerWidth - BTN - EDGE);
  const maxY = Math.max(EDGE, window.innerHeight - BTN - EDGE);
  return {
    x: Math.min(Math.max(EDGE, x), maxX),
    y: Math.min(Math.max(EDGE, y), maxY),
  };
}

/**
 * 吸边：拖动松手时，横 / 纵**逐轴独立**判断 —— 某一方向已贴近屏幕边缘（≤ {@link SNAP}）
 * 就吸附到该边缘，另一方向原样保留。
 *
 * 逐轴独立是有意的：把浮标拖到屏幕右缘但垂直居中时，用户要的是「贴右边」，
 * 不该顺手把它也拽到顶或底；反之贴顶时也不该横移。
 */
function snapPos(x: number, y: number): { x: number; y: number } {
  const c = clampPos(x, y);
  const maxX = Math.max(EDGE, window.innerWidth - BTN - EDGE);
  const maxY = Math.max(EDGE, window.innerHeight - BTN - EDGE);
  let sx = c.x;
  let sy = c.y;
  if (c.x - EDGE <= SNAP) sx = EDGE;
  else if (maxX - c.x <= SNAP) sx = maxX;
  if (c.y - EDGE <= SNAP) sy = EDGE;
  else if (maxY - c.y <= SNAP) sy = maxY;
  return { x: sx, y: sy };
}

let drag: {
  pid: number;
  fromX: number;
  fromY: number;
  baseX: number;
  baseY: number;
  moved: boolean;
} | null = null;
let swallowClick = false;

function onPointerDown(e: PointerEvent): void {
  if (e.button !== 0 || !dockRef.value) return;
  const rect = dockRef.value.getBoundingClientRect();
  if (!termDockPos.value) termDockPos.value = { x: rect.left, y: rect.top };
  drag = {
    pid: e.pointerId,
    fromX: e.clientX,
    fromY: e.clientY,
    baseX: termDockPos.value.x,
    baseY: termDockPos.value.y,
    moved: false,
  };
  (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
}
function onPointerMove(e: PointerEvent): void {
  if (!drag || e.pointerId !== drag.pid) return;
  const dx = e.clientX - drag.fromX;
  const dy = e.clientY - drag.fromY;
  if (!drag.moved && Math.abs(dx) < DRAG_SLOP && Math.abs(dy) < DRAG_SLOP) return;
  drag.moved = true;
  dragging.value = true;
  termDockPos.value = clampPos(drag.baseX + dx, drag.baseY + dy);
}
function onPointerUp(e: PointerEvent): void {
  if (!drag || e.pointerId !== drag.pid) return;
  swallowClick = drag.moved;
  const moved = drag.moved;
  drag = null;
  dragging.value = false;
  // 拖动结束后吸边（未贴近边缘则原地保留）。CSS 上有 left/top 过渡，吸附是「滑过去」而非瞬移。
  if (moved) {
    const p = termDockPos.value;
    if (p) termDockPos.value = snapPos(p.x, p.y);
  }
}
function onBtnClick(): void {
  if (swallowClick) {
    swallowClick = false;
    return;
  }
  // 点击 = 展开 / 收起卡片列表。**不做「一键展开全部」**：各窗口独立最小化/还原，
  // 还原由列表里对应卡片触发。
  pinned.value = !pinned.value;
}
/**
 * 浮标右键菜单：已最小化的终端列表 + 关闭操作。
 * 每个终端一行：点击行还原并激活该终端，行尾 ✕ 单独关闭它；末尾「全部关闭」一键清空。
 */
const menuOpen = ref(false);
const menuPos = ref({ x: 0, y: 0 });
function openDockMenu(e: MouseEvent): void {
  // 开菜单前先收起展开列表：两者叠在一处会互相抢位置、也容易点错。
  pinned.value = false;
  menuPos.value = { x: e.clientX, y: e.clientY };
  menuOpen.value = true;
}
const menuItems = computed<MenuItem[]>(() => {
  const items: MenuItem[] = minimizedTabs.value.map((tab) => ({
    label: dockTabLabel(tab),
    icon: "terminal",
    onClick: () => {
      termActiveId.value = tab.id;
      restoreTerminal(tab.id);
    },
    trailing: {
      icon: "close",
      title: t("terminalCloseTitle"),
      onClick: () => void closeOne(tab.id),
    },
  }));
  if (items.length) items.push({ separator: true });
  items.push({ label: t("terminalDockCloseAll"), icon: "close", onClick: () => void closeAll() });
  return items;
});
/** 菜单行的终端名：与卡片标题同规则（远端取主机名，本机取目录末级名）。 */
function dockTabLabel(tab: TermTab): string {
  if (tab.ssh) return tab.ssh.label;
  const cwd = tab.cwd?.trim();
  if (cwd) {
    const last = cwd.replace(/[\\/]$/, "").split(/[\\/]/).pop();
    if (last) return last;
  }
  return t("terminal");
}
/** 菜单里单独关闭一个终端：结束该会话；若已无会话则整窗退出。 */
async function closeOne(id: string): Promise<void> {
  removeTerminal(id);
  if (!termTabs.value.length) wb.termOpen = false;
}
/** 关闭全部终端会话（断开所有流 + 结束所有后端常驻进程）并整窗退出。 */
async function closeAll(): Promise<void> {
  pinned.value = false;
  await closeAllTerminals();
  wb.termOpen = false;
}

/**
 * 点击浮标之外的**空白处** → 收起展开列表（钉住态一并收起）。
 *
 * 走捕获阶段的 pointerdown：在目标元素自己的点击逻辑之前就收起，不会出现
 * 「先点到下面的东西、列表才慢半拍消失」的滞后感。落在浮标内部（按钮 / 卡片 / 新建）
 * 时直接返回，交给它们各自的处理。
 */
function onDocPointerDown(e: PointerEvent): void {
  if (!showList.value) return;
  const el = dockRef.value;
  const target = e.target as Node | null;
  if (el && target && el.contains(target)) return;
  pinned.value = false;
}

function onResize(): void {
  const p = termDockPos.value;
  if (p) termDockPos.value = clampPos(p.x, p.y);
  void nextTick(updateListMaxH);
}

/** 新建一个独立终端会话（带级联开窗位置）。消费 wb.termRequest*（「在终端打开」携带的目录/命令/主机）。 */
function spawn(focus = false): void {
  if (termTabs.value.length >= TERMINAL_LIMIT) return;
  const ssh = wb.termRequestSsh;
  // ssh 会话的工作目录由远端决定（login shell 的 home + 自动 cd），不吃本机 cwd。
  const cwd = ssh ? "" : wb.termRequestCwd || wb.root || wb.explorerPath || "";
  const initCmd = wb.termRequestCmd;
  wb.termRequestCwd = "";
  wb.termRequestCmd = "";
  wb.termRequestSsh = null;
  createTerminal(wb.key, {
    cwd,
    // 本机会话：initCmd 是「远端目录 → 本机 ssh 登录命令」的一次性启动命令（老路径）。
    // ssh 直连会话：同一条命令改放 fallbackCmd（直连失败降级时才敲，且可重复武装）。
    initCmd: ssh ? undefined : initCmd || undefined,
    fallbackCmd: ssh ? initCmd || undefined : undefined,
    shell: prefs.termShell,
    ssh: ssh ?? undefined,
    // 由用户显式动作打开（右键「在终端打开」/「新建终端」）→ 挂载后主动聚焦，
    // 否则焦点还在文件列表上，用户直接敲键盘会「完全没反应」（详见 TermTab.focusPending）。
    focus,
  });
}

/** 关闭某个终端窗口：结束该会话；若已无会话则整窗退出。 */
function onClose(id: string): void {
  removeTerminal(id);
  if (termTabs.value.length === 0) wb.termOpen = false;
}

// 列表每次展开都按当前按钮位置重算高度上限（按钮被拖到别处后余量与之前不同）。
watch(showList, (open) => {
  if (open) void nextTick(updateListMaxH);
});

// 已无最小化窗口时收起钉住态，避免下次再最小化时列表自动弹出。
watch(
  () => minimizedTabs.value.length,
  (n) => {
    if (!n) pinned.value = false;
  },
);

// 「文件」菜单点「新建终端」（termNewSeq 自增）→ 追加一个独立终端窗口。
watch(termNewSeq, () => {
  if (!wb.termOpen) wb.termOpen = true;
  spawn(true);
});

// 终端浮窗由关转开（关闭全部后再打开）→ 若无会话则补建首屏终端。
watch(
  () => wb.termOpen,
  (open) => {
    if (open && termTabs.value.length === 0) spawn(true);
  },
);

onMounted(() => {
  void loadTermElevation();
  window.addEventListener("resize", onResize);
  // 捕获阶段监听：点浮标之外的空白处即收起展开列表（详见 onDocPointerDown）。
  document.addEventListener("pointerdown", onDocPointerDown, true);
  void nextTick(updateListMaxH);
  // 启动即为打开态且无会话（如刷新后 wb.termOpen 仍为 true）→ 补建首屏终端。
  // ⛔ 这里不聚焦（focus=false）：开机还原就抢键盘焦点会把用户正在做的事打断。
  if (wb.termOpen && termTabs.value.length === 0) spawn(false);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", onResize);
  document.removeEventListener("pointerdown", onDocPointerDown, true);
});
</script>

<style scoped>
/* dock 配色跟随 DSH 项目主题（--dsh-*，随全局 data-theme 日夜翻转）。 */
.dsh-term-dock {
  position: fixed;
  right: 16px;
  top: 50%;
  translate: 0 -50%;
  z-index: 10002;
  overflow: visible;
  pointer-events: none;
}
.dsh-term-dock.is-floating {
  right: auto;
  translate: none;
  /* 吸边是「滑过去」而不是瞬移；拖动期间必须关掉（见下一条），否则 left/top 每帧缓动，
     浮标会追不上指针、跟手感被破坏。两条同权重，靠源码顺序覆盖。 */
  transition: left 0.16s ease, top 0.16s ease;
}
.dsh-term-dock.is-dragging {
  transition: none;
}

/* ---- 折叠态：唯一的悬浮按钮（小圆标） ---- */
.dsh-term-dock-btn {
  position: relative;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 50%;
  background: color-mix(in srgb, var(--dsh-bg2, #161b22) 92%, transparent);
  backdrop-filter: blur(10px);
  color: var(--dsh-accent, #238636);
  cursor: grab;
  pointer-events: auto;
  touch-action: none;
  transition: border-color 0.12s ease, transform 0.12s ease;
}
.dsh-term-dock-btn:hover {
  border-color: var(--dsh-accent, #238636);
}
.dsh-term-dock.is-dragging .dsh-term-dock-btn {
  cursor: grabbing;
  transform: scale(1.06);
}
.dsh-term-dock-count {
  position: absolute;
  top: -3px;
  right: -3px;
  min-width: 14px;
  height: 14px;
  padding: 0 3px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  background: var(--dsh-accent, #238636);
  color: var(--dsh-bg, #0d1117);
  font-size: 9px;
  font-weight: 700;
  line-height: 1;
}
.dsh-term-dock-dot {
  position: absolute;
  bottom: 4px;
  right: 4px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--dsh-accent, #238636);
}

/* ---- 悬停/钉住展开：已最小化窗口卡片 + 新建按钮 ---- */
.dsh-term-dock-list {
  position: absolute;
  top: 0;
  right: 100%;
  width: 268px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  pointer-events: auto;
  /* 最小化窗口过多 → 列表内部滚动（高度上限由 JS 按视口余量写到 :style.maxHeight）。
     overscroll-behavior 阻止滚到边界后把滚动传给主界面。 */
  overflow-y: auto;
  overscroll-behavior: contain;
  padding-right: 2px;
  scrollbar-width: thin;
  scrollbar-color: var(--dsh-border, #30363d) transparent;
  animation: dsh-term-dock-in 0.12s ease-out;
}
/* ⛔ 滚动容器是 flex column：卡片默认 flex-shrink:1 会被**压扁**而不是触发滚动，必须钉死不收缩。 */
.dsh-term-dock-list > * {
  flex: 0 0 auto;
}
.dsh-term-dock.is-flip .dsh-term-dock-list {
  right: auto;
  left: 100%;
}
.dsh-term-dock.is-bottom .dsh-term-dock-list {
  top: auto;
  bottom: 0;
}
/* 标题与「新建」在滚动条出现时**吸顶/吸底**，避免被滚走（要有自己的不透明底，否则文字压卡片）。 */
.dsh-term-dock-listhead {
  position: sticky;
  top: 0;
  z-index: 1;
  padding: 2px 2px 4px;
  background: color-mix(in srgb, var(--dsh-bg2, #161b22) 94%, transparent);
  backdrop-filter: blur(14px);
  border-radius: 6px;
  color: var(--dsh-fg-weak, #8b949e);
  font-size: calc(10px * var(--dsh-fs-scale, 1));
  letter-spacing: 0.04em;
}
.dsh-term-dock-new {
  position: sticky;
  bottom: 0;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 6px;
  border: 1px dashed var(--dsh-border, #30363d);
  border-radius: 10px;
  background: color-mix(in srgb, var(--dsh-bg2, #161b22) 94%, transparent);
  backdrop-filter: blur(14px);
  color: var(--dsh-fg-weak, #8b949e);
  font-family: var(--font-family, monospace);
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  cursor: pointer;
}
.dsh-term-dock-new:hover { color: var(--dsh-accent, #238636); border-color: var(--dsh-accent, #238636); }
/* 细滚动条跟随项目主题（WebKit 内核；Firefox 走上面的 scrollbar-width/-color）。 */
.dsh-term-dock-list::-webkit-scrollbar { width: 8px; }
.dsh-term-dock-list::-webkit-scrollbar-track { background: transparent; }
.dsh-term-dock-list::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background: color-mix(in srgb, var(--dsh-fg-weak, #8b949e) 38%, transparent);
}
.dsh-term-dock-list::-webkit-scrollbar-thumb:hover { background: var(--dsh-fg-weak, #8b949e); }
@keyframes dsh-term-dock-in {
  from { opacity: 0; translate: 6px 0; }
  to { opacity: 1; translate: 0 0; }
}
</style>
