<template>
  <div ref="rootRef" class="fw-explorer">
    <!-- Win11 命令栏：面板内部顶部 -->
    <CommandBar :nav-folded="leftFolded" :compact="compact" @unfold-nav="leftFolded = false" />
    <div class="fw-exp-body" :class="{ 'left-folded': leftFolded }">
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
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
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

/* ---------- 左栏自动折叠：面板拖窄收起导航树，拖宽恢复 ----------
 * 与 VSCodePane 的右栏折叠同一套思路：触发源是面板自身宽度（ResizeObserver 观察
 * `rootRef`）——拖 DSH 右侧面板的宽度分隔条不会触发 window resize，必须观察面板元素。
 * 迟滞带（LEFT_FOLD_BELOW 折叠 / LEFT_UNFOLD_ABOVE 恢复）防抖动。点击命令栏的
 * 「显示导航栏」会手动展开（用户意图优先，直到宽度再次跨过阈值才重新评估）。 */
/** 面板宽度 ≤ 此值时折叠左栏（导航树）。 */
const LEFT_FOLD_BELOW = 640;
/** 面板宽度 ≥ 此值时恢复左栏；与上者之间是迟滞死区。 */
const LEFT_UNFOLD_ABOVE = 780;
const leftFolded = ref(false);
/** 面板当前宽度（观察器回写）；命令栏据此切换「只显示图标」的紧凑模式。 */
const panelW = ref(0);
/** 宽度低于该值时命令栏按钮退化为纯图标（与折叠阈值同量级，迟滞交给 leftFolded）。 */
const COMPACT_BELOW = 680;
const compact = computed(() => panelW.value > 0 && panelW.value < COMPACT_BELOW);
let foldRO: ResizeObserver | null = null;

function evalLeftFold(): void {
  const w = rootRef.value?.clientWidth ?? 0;
  panelW.value = w;
  if (w <= LEFT_FOLD_BELOW) leftFolded.value = true;
  else if (w >= LEFT_UNFOLD_ABOVE) leftFolded.value = false;
}

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
  foldRO?.disconnect();
  foldRO = null;
});

onMounted(() => {
  // 面板宽度监听：拖窄到放不下导航树时收起左栏，拖宽恢复（迟滞带防抖动）。
  if (rootRef.value) {
    foldRO = new ResizeObserver(() => evalLeftFold());
    foldRO.observe(rootRef.value);
    evalLeftFold();
  }
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
/* 左栏自动折叠：面板拖窄时收起导航树（含分隔条），文件列表占满整栏；拖宽自动恢复。 */
.fw-exp-body.left-folded .fw-exp-left,
.fw-exp-body.left-folded .fw-exp-split {
  display: none;
}
.fw-exp-body.left-folded .fw-exp-right {
  flex: 1 1 100%;
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
