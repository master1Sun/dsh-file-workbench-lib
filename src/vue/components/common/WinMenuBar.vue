<template>
  <!-- 顶部工具栏（Win11 文件夹风格：左侧 导航按钮 + 刷新/设置，中间 路径地址栏，右侧 搜索）。 -->
  <header
    ref="toolbarRef"
    class="fw-toolbar"
    :class="{ 'external-view-disabled': externalViewActive }"
    :aria-disabled="externalViewActive"
    :inert="externalViewActive"
  >
    <!-- 面板收窄时隐藏后退/前进（历史不丢，展开即恢复），把宽度让给地址栏与搜索 -->
    <el-button v-show="!narrow" text size="small" :title="t('goBack')" :disabled="!canGoBack" @click="doBack">
      <icon name="arrowLeft" :size="16" />
    </el-button>
    <el-button v-show="!narrow" text size="small" :title="t('goForward')" :disabled="!canGoForward" @click="doForward">
      <icon name="arrowRight" :size="16" />
    </el-button>
    <el-button text size="small" :title="t('goUp')" :disabled="!canGoUp" @click="goUp">
      <icon name="up" :size="16" />
    </el-button>
    <el-button text size="small" :title="t('goSessionDir')" @click="goSessionDir">
      <icon name="compass" :size="16" />
    </el-button>
    <el-button text size="small" :title="t('refreshList')" @click="doRefresh">
      <icon name="refresh" class="fw-refresh-ic" :class="{ spinning: spinnerOn }" :size="15" />
    </el-button>
    <el-button text size="small" :title="t('settings')" @click="emit('open-settings')">
      <icon name="gear" :size="16" />
    </el-button>
    <nav-path-bar />
    <div class="fw-right">
      <el-input
        v-model="searchValue"
        class="fw-search-input"
        size="small"
        clearable
        :placeholder="t('searchPlaceholder')"
        @input="onSearchInput"
        @clear="clearSearch"
      >
        <template #prefix><icon name="search" :size="14" class="fw-search-ico" /></template>
      </el-input>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useI18n } from "../../composables/core/i18n";
import {
  canGoBack,
  canGoForward,
  canGoUp,
  currentListingPath,
  explorer,
  goBack,
  goForward,
  goSessionDir,
  goUp,
  isBrowsablePath,
  refreshListing,
} from "../../stores/explorer";
import { runSearch, searchTerm, setSearchTerm, toast, wb } from "../../stores/workbench";
import Icon from "./Icon.vue";
import NavPathBar from "./NavPathBar.vue";

const emit = defineEmits<{ (e: "open-settings"): void }>();
defineProps<{ externalViewActive?: boolean }>();

const { t } = useI18n();

/* ── 窄面板自适应：工具栏宽度不足时隐藏后退/前进 ──
 * 工作台停靠在 DSH 右侧栏，宽度由宿主拖拽决定（无 window resize），必须观察自身元素。
 * 阈值以下隐藏这两个低频按钮（历史记录保留，恢复宽度即重新出现），保证地址栏 + 搜索完整可见。 */
const toolbarRef = ref<HTMLElement | null>(null);
const narrow = ref(false);
const NARROW_BELOW = 640; // 与命令栏紧凑档（680）同量级：再窄就放不下完整地址栏+搜索
let toolbarRO: ResizeObserver | null = null;
onMounted(() => {
  if (!toolbarRef.value) return;
  toolbarRO = new ResizeObserver(() => {
    narrow.value = (toolbarRef.value?.clientWidth ?? 0) < NARROW_BELOW;
  });
  toolbarRO.observe(toolbarRef.value);
});
onBeforeUnmount(() => {
  toolbarRO?.disconnect();
  toolbarRO = null;
});

/** 手动补转：点击后至少完整转一圈（加载极快结束时动画也不「缺席」）。 */
const manualSpin = ref(false);
let spinTimer: ReturnType<typeof setTimeout> | undefined;
/** 刷新按钮：加载期间旋转图标；点击时再保底转 650ms，动画始终可见。 */
function doRefresh(): void {
  void refreshListing();
  manualSpin.value = true;
  if (spinTimer) clearTimeout(spinTimer);
  spinTimer = setTimeout(() => (manualSpin.value = false), 650);
}
/** 仅当目录刷新/加载真正执行或刚点击时旋转，平时静止。 */
const spinnerOn = computed(() => explorer.loading || manualSpin.value);

function doBack(): void {
  goBack();
}
function doForward(): void {
  goForward();
}

/** 搜索框内容：双向绑定到共享 searchTerm（列表区据此切换到搜索结果面板）。 */
const searchValue = computed({
  get: () => searchTerm.value,
  set: (v: string) => setSearchTerm(v),
});

let searchTimer: ReturnType<typeof setTimeout> | undefined;
/**
 * 搜索作用域：当前文件夹（真实绝对路径）优先，否则回落到工作区根。
 * 「此电脑」/「回收站」是虚拟位置（列表路径是占位名而非真实路径），不能作为检索范围。
 */
const searchScope = computed(() => (isBrowsablePath(currentListingPath.value) ? currentListingPath.value : wb.root || ""));

function onSearchInput(): void {
  if (searchTimer) clearTimeout(searchTimer);
  const v = searchValue.value;
  // 清空立即回文件列表；输入时“搜索态”与检索一起防抖——避免打第一个字就整栏闪切成结果面板。
  if (!v.trim()) {
    setSearchTerm("");
    void runSearch("").catch((e) => toast("error", (e as Error).message));
    return;
  }
  searchTimer = setTimeout(() => {
    setSearchTerm(v);
    // 搜索始终限定在当前浏览目录内递归检索。
    void runSearch(v, searchScope.value).catch((e) => toast("error", (e as Error).message));
  }, 350);
}
function clearSearch(): void {
  searchValue.value = "";
  setSearchTerm("");
  void runSearch("");
}

// 会话命中跳转后（bridge 侧清空搜索态）同步清空输入框，避免残留关键词。
watch(searchTerm, (v) => {
  if (!v && searchValue.value) searchValue.value = "";
});
</script>

<style scoped>
.fw-toolbar {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 8px;
  border-bottom: 1px solid var(--dsh-border, #30363d);
  background: var(--dsh-bg2, #161b22);
}
/* 外部注入面板激活时整体置灰：inert 已拦截交互，此处仅做视觉弱化。 */
.fw-toolbar.external-view-disabled {
  opacity: 0.55;
  pointer-events: none;
}
/* Win11 风格搜索框：右侧圆角胶囊，放大镜图标在左，可清除 */
.fw-search-ico {
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  color: var(--dsh-fg-weak, #8b949e);
  display: inline-flex;
  align-items: center;
  line-height: 1;
}
.fw-refresh-ic { display: block; transition: color 0.15s, transform 0.2s; }
.fw-refresh-ic.spinning {
  animation: fw-spin 0.8s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
  color: var(--dsh-accent, #2f81f7);
}
@keyframes fw-spin { to { transform: rotate(360deg); } }
.fw-search-input {
  min-width: 140px;
  max-width: 280px;
}
.fw-search-input.el-input {
  --el-input-bg-color: var(--dsh-bg, #0d1117);
  --el-input-focus-border-color: var(--dsh-accent, #238636);
  --el-input-hover-border-color: var(--dsh-border, #30363d);
}
.fw-search-input.el-input .el-input__wrapper {
  border-radius: 16px;
}
/* 头部右侧：搜索框 */
.fw-right {
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 0 0 auto;
}
</style>
