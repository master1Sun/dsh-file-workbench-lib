<template>
  <div ref="rootRef" class="fw-explorer">
    <!-- Win11 命令栏：面板内部顶部 -->
    <CommandBar />
    <div class="fw-exp-body">
      <!-- 左栏：Win11 风格导航树（此电脑 / 图库 / 桌面 / 下载 / …） -->
      <div class="fw-exp-left" :style="leftStyle">
        <NavPane />
      </div>
      <!-- 可拖拽分隔条：左右两栏宽度比例写回 layout.explorerSplit（默认 3:7）。 -->
      <div
        class="fw-exp-split"
        :class="{ dragging }"
        role="separator"
        aria-orientation="vertical"
        :aria-valuenow="Math.round(layout.explorerSplit * 100)"
        :aria-valuemin="15"
        :aria-valuemax="85"
        @mousedown.prevent="startDrag"
      ></div>
      <!-- 右栏：搜索中显示结果；「此电脑」显示设备和驱动器；否则显示当前目录文件列表
           （回收站复用同一套列表 UI，仅操作不同）。 -->
      <div class="fw-exp-right">
        <SearchPane v-if="searching" />
        <ThisPcPane v-else-if="explorer.view === 'computer'" />
        <FileListPane v-else />
      </div>
    </div>
    <!-- 底部状态栏：条目数提示 + 后台任务 + 最小化终端（Win11 样式） -->
    <StatusBar />
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from "vue";
import NavPane from "./NavPane.vue";
import SearchPane from "./SearchPane.vue";
import FileListPane from "./FileListPane.vue";
import ThisPcPane from "./ThisPcPane.vue";
import CommandBar from "./CommandBar.vue";
import StatusBar from "./StatusBar.vue";
import { layout, saveLayout } from "../../../composables/core/settings";
import { searchTerm } from "../../../stores/workbench";
import { explorer } from "../../../stores/explorer";

const rootRef = ref<HTMLElement | null>(null);
const dragging = ref(false);

/** 右栏处于搜索态：顶部搜索框有内容时切换为搜索结果面板。 */
const searching = computed(() => !!searchTerm.value.trim());

/** 左栏宽度：按 explorerSplit 百分比铺开，扣除半个分隔条（3px）避免总宽溢出。 */
const leftStyle = computed<Record<string, string>>(() => ({
  width: `calc(${Math.round(layout.explorerSplit * 1000) / 10}% - 3px)`,
}));

function onMove(e: MouseEvent): void {
  if (!dragging.value || !rootRef.value) return;
  const rect = rootRef.value.getBoundingClientRect();
  if (rect.width <= 0) return;
  const f = (e.clientX - rect.left) / rect.width;
  layout.explorerSplit = Math.min(0.85, Math.max(0.15, f));
}
function onUp(): void {
  if (!dragging.value) return;
  dragging.value = false;
  document.removeEventListener("mousemove", onMove);
  document.removeEventListener("mouseup", onUp);
  document.body.style.userSelect = "";
  document.body.style.cursor = "";
  saveLayout();
}
function startDrag(): void {
  dragging.value = true;
  document.addEventListener("mousemove", onMove);
  document.addEventListener("mouseup", onUp);
  document.body.style.userSelect = "none";
  document.body.style.cursor = "col-resize";
}

onBeforeUnmount(() => {
  document.removeEventListener("mousemove", onMove);
  document.removeEventListener("mouseup", onUp);
});
</script>

<style scoped>
.fw-explorer {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
}
.fw-exp-body {
  display: flex;
  align-items: stretch;
  flex: 1 1 0;
  min-height: 0;
}
.fw-exp-left {
  flex: 0 0 auto;
  min-width: 0;
  height: 100%;
  overflow: hidden;
}
.fw-exp-right {
  flex: 1 1 0;
  min-width: 0;
  height: 100%;
  overflow: hidden;
}
/* 可拖拽分隔条：细线 + 悬停/拖拽高亮，与 Win11 资源管理器分隔条手感一致。 */
.fw-exp-split {
  flex: 0 0 6px;
  width: 6px;
  height: 100%;
  cursor: col-resize;
  position: relative;
  background: transparent;
  z-index: 0;
}
.fw-exp-split::after {
  content: "";
  position: absolute;
  left: 2px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--dsh-border, #30363d);
  transition: background 0.12s;
}
.fw-exp-split:hover::after,
.fw-exp-split.dragging::after {
  background: var(--dsh-accent, #238636);
}
</style>
