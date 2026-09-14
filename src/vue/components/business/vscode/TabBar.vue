<template>
  <!-- 标签过多时横向溢出：隐藏滚动条，滚轮悬停滚动 + 两侧 ◀▶ 箭头按钮 -->
  <div class="vs-tabs-wrap">
    <button
      v-if="overflow"
      class="vs-tab-arrow is-left"
      :class="{ dim: !canLeft }"
      :title="t('vsScrollLeft')"
      @click="scrollStep(-1)"
    >
      <icon name="chevronLeft" :size="13" />
    </button>
    <div ref="tabsEl" class="vs-tabs" @wheel="onWheel" @scroll="updateArrows">
      <div
        v-for="tab in tabs"
        :key="tab.path"
        class="vs-tab"
        :class="{ 'is-active': tab.path === active }"
        :title="tab.path"
        @click="$emit('select', tab.path)"
        @contextmenu.prevent.stop="openMenu(tab, $event)"
      >
        <icon v-if="tab.icon" :name="tab.icon" :size="12" />
        <span class="vs-tab-name">{{ basename(tab.path) }}</span>
        <span
          v-if="tab.dirty"
          class="vs-tab-dirty"
          :class="{ conflict: tab.conflict }"
          :title="tab.conflict ? t('vsConflictBadge') : ''"
          @click.stop="$emit('save', tab.path)"
        ></span>
        <span v-else class="vs-tab-dot"></span>
        <span class="vs-tab-close" @click.stop="$emit('close', tab.path)">×</span>
      </div>
      <div v-if="!tabs.length" class="vs-tabs-empty">{{ t("vsNoOpenFile") }}</div>

      <!-- 右键菜单：复用工作台公共 ContextMenu（关闭 / 保存并关闭 / 关闭其他 / 关闭右侧 / 关闭全部） -->
      <ContextMenu v-if="menuOpen" :items="menuItems" :x="menuX" :y="menuY" @close="menuOpen = false" />
    </div>
    <button
      v-if="overflow"
      class="vs-tab-arrow is-right"
      :class="{ dim: !canRight }"
      :title="t('vsScrollRight')"
      @click="scrollStep(1)"
    >
      <icon name="chevronRight" :size="13" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import type { MenuItem } from "../../../../shared/types";
import { t } from "../../../composables/core/i18n";
import ContextMenu from "../../common/ContextMenu.vue";
import Icon from "../../common/Icon.vue";

/** 标签条元素（滚轮横向滚动用）。 */
const tabsEl = ref<HTMLElement | null>(null);

/* ---------- 标签条两侧 ◀▶ 滚动箭头 ---------- */
/** 是否横向溢出（决定箭头是否显示）。 */
const overflow = ref(false);
const canLeft = ref(false);
const canRight = ref(false);
let tabsRO: ResizeObserver | null = null;

/** 依据当前滚动位置刷新箭头显隐与可用态。 */
function updateArrows(): void {
  const el = tabsEl.value;
  if (!el) return;
  overflow.value = el.scrollWidth > el.clientWidth + 1;
  canLeft.value = el.scrollLeft > 1;
  canRight.value = el.scrollLeft + el.clientWidth < el.scrollWidth - 1;
}

/** 点击箭头：按可视宽度的大部分平滑滚动（负数向左）。 */
function scrollStep(dir: number): void {
  const el = tabsEl.value;
  if (!el) return;
  el.scrollBy({ left: dir * Math.max(200, el.clientWidth * 0.7), behavior: "smooth" });
}

onMounted(() => {
  tabsRO = new ResizeObserver(updateArrows);
  if (tabsEl.value) tabsRO.observe(tabsEl.value);
  updateArrows();
});

onBeforeUnmount(() => {
  tabsRO?.disconnect();
  tabsRO = null;
});

// 标签数量变化（打开/关闭）后重测溢出。
watch(
  () => props?.tabs?.length,
  () => void nextTick(updateArrows),
);

/**
 * 滚轮横向滚动标签条：标签放不下时不显示滚动条（太窄难点），改用滚轮——
 * 普通滚轮纵向增量、触控板/Shift+滚轮横向增量都映射到 scrollLeft。
 * 无横向溢出时不拦截，交给默认行为。
 */
function onWheel(e: WheelEvent): void {
  const el = tabsEl.value;
  if (!el || el.scrollWidth <= el.clientWidth) return;
  e.preventDefault();
  el.scrollLeft += Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
}

export interface TabInfo {
  path: string;
  dirty: boolean;
  /** 外部改动冲突（磁盘已变 + 本地有未保存改动），用醒目的圆点区分。 */
  conflict?: boolean;
  /** 可选图标（伪标签用，如「变更详情」的 fileOut）。 */
  icon?: string;
}

const props = defineProps<{
  tabs: TabInfo[];
  active: string | null;
}>();

const emit = defineEmits<{
  (e: "select", path: string): void;
  (e: "close", path: string): void;
  (e: "save", path: string): void;
  (e: "closeSave", path: string): void;
  (e: "closeOthers", path: string): void;
  (e: "closeRight", path: string): void;
  (e: "closeAll"): void;
}>();

function basename(p: string): string {
  return p.split(/[\\/]/).filter(Boolean).pop() ?? p;
}

/* ---------- 右键菜单 ---------- */
const menuOpen = ref(false);
const menuX = ref(0);
const menuY = ref(0);
/** 当前右键的标签（菜单打开时固定）。 */
const menuTarget = ref<TabInfo | null>(null);

function openMenu(tab: TabInfo, e: MouseEvent): void {
  menuTarget.value = tab;
  menuX.value = e.clientX;
  menuY.value = e.clientY;
  menuOpen.value = true;
}

const menuItems = computed<MenuItem[]>(() => {
  const tab = menuTarget.value;
  if (!tab) return [];
  const idx = props.tabs.findIndex((x) => x.path === tab.path);
  const isLast = idx === props.tabs.length - 1;
  return [
    { label: t("vsTabClose"), icon: "close", onClick: () => emit("close", tab.path) },
    { label: t("vsTabCloseSave"), icon: "save", onClick: () => emit("closeSave", tab.path) },
    { separator: true },
    {
      label: t("vsTabCloseOthers"),
      icon: "close",
      disabled: props.tabs.length < 2,
      onClick: () => emit("closeOthers", tab.path),
    },
    {
      label: t("vsTabCloseRight"),
      icon: "close",
      disabled: isLast,
      onClick: () => emit("closeRight", tab.path),
    },
    { label: t("vsTabCloseAll"), icon: "close", onClick: () => emit("closeAll") },
  ];
});
</script>

<style scoped>
.vs-tabs-wrap {
  position: relative;
  display: flex;
  align-items: stretch;
  min-width: 0;
  /* 纵向 flex 容器（.vs-right）里绝不能 flex-grow，否则标签条会被撑满整个面板高度 */
  flex: 0 0 auto;
}
.vs-tabs {
  display: flex;
  align-items: stretch;
  height: 35px;
  min-width: 0;
  flex: 1 1 auto;
  background: var(--dsh-bg2, #161b22);
  border-bottom: 1px solid var(--dsh-border, #30363d);
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none; /* Firefox：隐藏横向滚动条，滚轮/箭头滚动（见 onWheel / scrollStep） */
}
.vs-tabs::-webkit-scrollbar {
  height: 0;
  display: none; /* Chrome/Edge：隐藏横向滚动条 */
}
/* 两侧滚动箭头：布局内固定元素（非悬浮），只在溢出时渲染，永不与标签互相压盖 */
.vs-tab-arrow {
  flex: 0 0 auto;
  align-self: stretch;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  padding: 0;
  border: none;
  border-bottom: 1px solid var(--dsh-border, #30363d);
  background: var(--dsh-bg2, #161b22);
  color: var(--dsh-fg, #c9d1d9);
  cursor: pointer;
  opacity: 0.85;
}
.vs-tab-arrow.is-left {
  border-right: 1px solid var(--dsh-border, #30363d);
}
.vs-tab-arrow.is-right {
  border-left: 1px solid var(--dsh-border, #30363d);
}
.vs-tab-arrow:hover {
  opacity: 1;
  background: var(--dsh-hover, rgba(255, 255, 255, 0.08));
}
.vs-tab-arrow.dim {
  opacity: 0.3;
  cursor: default;
}
.vs-tab {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 10px;
  height: 100%;
  cursor: pointer;
  white-space: nowrap;
  border-right: 1px solid var(--dsh-border, #30363d);
  color: var(--dsh-fg-weak, #8b949e);
}
.vs-tab.is-active {
  background: var(--dsh-bg, #0d1117);
  color: var(--dsh-fg, #c9d1d9);
  border-top: 1px solid var(--dsh-accent, #238636);
}
.vs-tab-name {
  font-size: 13px;
}
.vs-tab-dirty {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: currentColor;
}
/* 冲突态：琥珀色圆点 + 外圈，和普通「未保存」圆点一眼可分 */
.vs-tab-dirty.conflict {
  background: #d29922;
  box-shadow: 0 0 0 2px rgba(210, 153, 34, 0.25);
}
.vs-tab-dot {
  width: 8px;
  height: 8px;
}
.vs-tab-close {
  width: 16px;
  height: 16px;
  line-height: 14px;
  text-align: center;
  border-radius: 3px;
  font-size: 14px;
}
.vs-tab-close:hover {
  background: var(--dsh-hover, rgba(255, 255, 255, 0.1));
}
.vs-tabs-empty {
  padding: 0 12px;
  line-height: 35px;
  color: var(--dsh-fg-weak, #8b949e);
  font-size: 12px;
}
</style>
