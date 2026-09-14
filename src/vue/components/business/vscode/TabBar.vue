<template>
  <!-- 标签过多时横向溢出：隐藏滚动条，鼠标滚轮悬停即可横向滚动（onWheel） -->
  <div ref="tabsEl" class="vs-tabs" @wheel="onWheel">
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
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import type { MenuItem } from "../../../../shared/types";
import { t } from "../../../composables/core/i18n";
import ContextMenu from "../../common/ContextMenu.vue";
import Icon from "../../common/Icon.vue";

/** 标签条元素（滚轮横向滚动用）。 */
const tabsEl = ref<HTMLElement | null>(null);

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
.vs-tabs {
  display: flex;
  align-items: stretch;
  height: 35px;
  background: var(--dsh-bg2, #161b22);
  border-bottom: 1px solid var(--dsh-border, #30363d);
  overflow-x: auto;
  scrollbar-width: none; /* Firefox：隐藏横向滚动条，滚轮滚动（见 onWheel） */
}
.vs-tabs::-webkit-scrollbar {
  height: 0;
  display: none; /* Chrome/Edge：隐藏横向滚动条 */
}
.vs-tabs {
  overflow-y: hidden;
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
