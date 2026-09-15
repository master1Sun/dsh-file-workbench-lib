<template>
  <!-- 全局唯一终端：挂在 main.ts 的常驻实例上，不随「文件工作台 / 文件编辑器」任一面板
       的 tab 切换而卸载，因此切换面板不会重建终端、也不会出现两个面板各开一个终端。 -->
  <TerminalDialog v-if="wb.termOpen" :open="true" @close="wb.termOpen = false" />

  <!-- 最小化后的折叠形态：**只有一个可拖动的悬浮按钮**（华为小窗式）。
       鼠标移入 → 在按钮侧边展开全部终端会话卡片（多会话一次看齐），点卡片还原该会话；
       按钮可自由拖动（位置跨面板开合保留），右键复位到右侧默认位。
       空白处透传点击，不遮挡主界面。 -->
  <div
    v-if="wb.termOpen && wb.termMinimized && termTabs.length"
    ref="dockRef"
    class="dsh-term-dock"
    :class="{
      'is-floating': !!termDockPos,
      'is-dragging': dragging,
      'is-flip': flip,
      'is-bottom': alignBottom,
    }"
    :style="dockStyle"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
    @contextmenu.prevent="resetDock"
  >
    <!-- 折叠态：唯一按钮。终端图标 + 会话数徽标 + 提权点 -->
    <div
      class="dsh-term-dock-btn"
      :title="t('terminalDockDragTitle')"
      @click="onBtnClick"
      @pointerdown="onPointerDown"
      @pointermove="onPointerMove"
      @pointerup="onPointerUp"
      @pointercancel="onPointerUp"
    >
      <icon name="terminal" :size="17" />
      <span v-if="termTabs.length > 1" class="dsh-term-dock-count">{{ termTabs.length }}</span>
      <span v-if="termElevated" class="dsh-term-dock-dot" :title="t('terminalAdminOn')"></span>
    </div>

    <!-- 展开态：全部会话卡片（多会话同屏） -->
    <div v-if="hovered && !dragging" class="dsh-term-dock-list">
      <div class="dsh-term-dock-listhead">{{ t("terminalDockSessions") }}</div>
      <TerminalMiniWindow v-for="tab in termTabs" :key="tab.id" :tab="tab" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import type { CSSProperties } from "vue";
import TerminalDialog from "./TerminalDialog.vue";
import TerminalMiniWindow from "./TerminalMiniWindow.vue";
import Icon from "../../common/Icon.vue";
import { wb } from "../../../stores/workbench";
import {
  loadTermElevation,
  termActiveId,
  termDockPos,
  termElevated,
  termTabs,
} from "../../../composables/domain/terminalStore";
import { t } from "../../../composables/core/i18n";

const dockRef = ref<HTMLElement | null>(null);
/** 鼠标是否停在按钮（或其展开的列表）上——决定会话列表展开/收起。 */
const hovered = ref(false);
/** 是否正在拖动（拖动期间不展开列表，避免误触卡片）。 */
const dragging = ref(false);

/** 折叠按钮边长（px）：与 `.dsh-term-dock-btn` 保持一致，用于拖动时的视口夹取。 */
const BTN = 44;
/** 拖动的视口留白（px）。 */
const EDGE = 8;
/** 判定为「拖动」而非「点击」的位移阈值（px）。 */
const DRAG_SLOP = 4;

/** 会话列表改到按钮**右侧**展开：按钮被拖到屏幕左半边时，避免列表出界。 */
const flip = computed(() => {
  const p = termDockPos.value;
  return !!p && p.x < 340;
});
/** 会话列表贴底对齐（向上生长）：按钮在下半屏时避免列表被视口下缘裁掉。 */
const alignBottom = computed(() => {
  const p = termDockPos.value;
  return !!p && p.y > window.innerHeight / 2;
});
/** 折叠按钮定位：默认贴右缘垂直居中；拖动过后固定为视口坐标（left/top 内联给出）。 */
const dockStyle = computed<CSSProperties | undefined>(() => {
  const p = termDockPos.value;
  return p ? { left: `${p.x}px`, top: `${p.y}px` } : undefined;
});

/** 把坐标夹取到视口内（按钮整体可见）。 */
function clampPos(x: number, y: number): { x: number; y: number } {
  const maxX = Math.max(EDGE, window.innerWidth - BTN - EDGE);
  const maxY = Math.max(EDGE, window.innerHeight - BTN - EDGE);
  return {
    x: Math.min(Math.max(EDGE, x), maxX),
    y: Math.min(Math.max(EDGE, y), maxY),
  };
}

/** 一次拖动的会话状态（pointerdown 时建立）。 */
let drag: {
  pid: number;
  fromX: number;
  fromY: number;
  baseX: number;
  baseY: number;
  moved: boolean;
} | null = null;
/** 拖动结束的那次 click 要吞掉，否则「拖完顺手还原终端」。 */
let swallowClick = false;

function onPointerDown(e: PointerEvent): void {
  if (e.button !== 0 || !dockRef.value) return;
  const rect = dockRef.value.getBoundingClientRect();
  // 首次拖动：先把「贴右缘」的定位换算成绝对坐标，避免起手跳位。
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
  // 未超过阈值：仍视作点击，不进入拖动（否则轻微抖动都会挪动按钮）。
  if (!drag.moved && Math.abs(dx) < DRAG_SLOP && Math.abs(dy) < DRAG_SLOP) return;
  drag.moved = true;
  dragging.value = true;
  termDockPos.value = clampPos(drag.baseX + dx, drag.baseY + dy);
}

function onPointerUp(e: PointerEvent): void {
  if (!drag || e.pointerId !== drag.pid) return;
  swallowClick = drag.moved;
  drag = null;
  dragging.value = false;
}

/** 点击按钮：还原整窗并激活当前（或第一个）会话。 */
function onBtnClick(): void {
  if (swallowClick) {
    swallowClick = false;
    return;
  }
  const tab =
    termTabs.value.find((x) => x.id === termActiveId.value) ?? termTabs.value[0];
  if (!tab) return;
  termActiveId.value = tab.id;
  wb.termMinimized = false;
  hovered.value = false;
}

/** 复位到默认位置（贴右缘垂直居中）。 */
function resetDock(): void {
  termDockPos.value = null;
  drag = null;
  dragging.value = false;
}

/** 视口尺寸变化后重新夹取，避免按钮被留在屏幕外。 */
function onResize(): void {
  const p = termDockPos.value;
  // 赋新对象：即使坐标没变也触发依赖重算（alignBottom 依赖 window.innerHeight）。
  if (p) termDockPos.value = clampPos(p.x, p.y);
}

// 本组件是常驻挂载的全局实例：在这里探测一次宿主权限态，按钮与终端栏即可共用。
onMounted(() => {
  void loadTermElevation();
  window.addEventListener("resize", onResize);
});
onBeforeUnmount(() => window.removeEventListener("resize", onResize));
</script>

<style scoped>
.dsh-term-dock {
  position: fixed;
  right: 16px;
  top: 50%;
  /* 默认贴右缘、垂直居中；拖动过后改由内联 left/top 定位。 */
  translate: 0 -50%;
  z-index: 10002;
  /* 必须 visible：悬停展开的会话列表浮在按钮**左侧**，overflow 裁剪会把它切掉。 */
  overflow: visible;
  /* 仅按钮捕获事件，空白处透传，避免遮挡主界面。 */
  pointer-events: none;
}
.dsh-term-dock.is-floating {
  right: auto;
  translate: none;
}

/* ---- 折叠态：唯一的悬浮按钮 ---- */
.dsh-term-dock-btn {
  position: relative;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 50%;
  /* 走主题面色的半透明版做毛玻璃底：深色 → #161b22，浅色 → #f6f8fa。 */
  background: color-mix(in srgb, var(--dsh-bg2, #161b22) 92%, transparent);
  backdrop-filter: blur(10px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
  color: var(--dsh-accent, #238636);
  cursor: grab;
  pointer-events: auto;
  /* 触屏/手写笔：拖动按钮时不要触发页面滚动。 */
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
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: var(--dsh-accent, #238636);
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  line-height: 1;
}
.dsh-term-dock-dot {
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--dsh-accent, #238636);
}

/* ---- 悬停展开：全部会话卡片 ---- */
.dsh-term-dock-list {
  position: absolute;
  top: 0;
  /* 默认贴在按钮左侧（无间隙：鼠标从按钮滑入列表不会触发 mouseleave 而闪）。 */
  right: 100%;
  width: 268px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  pointer-events: auto;
  animation: dsh-term-dock-in 0.12s ease-out;
}
.dsh-term-dock.is-flip .dsh-term-dock-list {
  right: auto;
  left: 100%;
}
.dsh-term-dock.is-bottom .dsh-term-dock-list {
  top: auto;
  bottom: 0;
}
.dsh-term-dock-listhead {
  padding: 2px 2px 0;
  color: var(--dsh-fg-weak, #8b949e);
  font-size: calc(10px * var(--dsh-fs-scale, 1));
  letter-spacing: 0.04em;
}
@keyframes dsh-term-dock-in {
  from {
    opacity: 0;
    translate: 6px 0;
  }
  to {
    opacity: 1;
    translate: 0 0;
  }
}
</style>
