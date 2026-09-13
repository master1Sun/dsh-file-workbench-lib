<template>
  <div class="fw-search">
    <div class="fw-search-head">
      <span class="fw-tree-head">{{ t('searchTitle') }}</span>
      <span class="fw-search-opts">
        <button
          class="fw-search-opt"
          :class="{ on: searchCase }"
          :title="t('searchCase')"
          @click="toggleCase"
        >Aa</button>
        <button
          class="fw-search-opt"
          :class="{ on: searchRegex }"
          :title="t('searchRegex')"
          @click="toggleRegex"
        >.*</button>
      </span>
      <el-button size="small" text :title="t('clearSearch')" @click="clear">✕</el-button>
    </div>
    <div v-if="wb.search.running" class="fw-loading">{{ t('searching') }}</div>
    <div v-else-if="wb.search.q" class="fw-count">
      <div class="fw-count-row">
        <span>{{ t('resultsCount', { count: wb.search.hits.length }) }}<template v-if="wb.search.truncated">{{ t('resultsSuffixTruncated') }}</template></span>
        <el-button
          v-if="contentHits.length"
          size="small"
          type="primary"
          plain
          :disabled="replaceBusy"
          @click="doReplaceAll"
        >{{ replaceBusy ? t('searchReplaceBusy') : t('searchReplaceAll') }}</el-button>
      </div>
      <div v-if="wb.search.scope" class="fw-scopeline">{{ t('searchScopeIn') }} {{ displayPath(wb.search.scope) }}</div>
    </div>
    <div v-else class="fw-empty">{{ t('searchIdle') }}</div>
    <div ref="resRef" class="fw-results" @scroll="v.onScroll">
      <div :style="{ height: v.range.value.padBefore + 'px' }"></div>
      <div
        v-for="(hit, i) in visibleHits"
        :key="hit.path"
        :ref="v.measure(v.range.value.start + i)"
        class="fw-hit"
        @click="open(hit.path)"
        :title="t('hitTitle')"
      >
        <span class="fw-ico"><icon name="file" :size="13" /></span>
        <span class="fw-namerow">
          <span class="fw-hitname">{{ hit.name }}</span>
          <span v-if="hit.byContent" class="fw-badge">{{ t('matchContent') }}</span>
        </span>
        <span class="fw-hitpath">{{ displayPath(hit.path) }}</span>
        <span v-if="hit.snippet" class="fw-hitsnippet">{{ hit.snippet }}</span>
      </div>
      <div :style="{ height: v.range.value.padAfter + 'px' }"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { wb, runSearch, openPreview, toast, searchCase, searchRegex } from "../../../stores/workbench";
import { useI18n } from "../../../composables/core/i18n";
import { useMeasuredVirtual } from "../../../composables/ui/virtual";
import { promptDialog } from "../../../composables/core/dialog";
import { batchReplace } from "../../../composables/core/useApi";
import Icon from "../../common/Icon.vue";

const { t } = useI18n();

// —— 虚拟滚动（变高：有/无 snippet 的行高不同，逐行测量） ——
const resRef = ref<HTMLElement | null>(null);
const resCount = computed(() => wb.search.hits.length);
const v = useMeasuredVirtual(resRef, resCount, 56);
/** 当前窗口内需渲染的命中项（下标相对完整 hits 数组，measure 用原始下标）。 */
const visibleHits = computed(() =>
  wb.search.hits.slice(v.range.value.start, v.range.value.end),
);
// 每次搜索换结果时重置测量缓存并回到顶部
watch(
  () => wb.search.q,
  () => {
    v.resetHeights();
    if (resRef.value) resRef.value.scrollTop = 0;
  },
);

function clear(): void {
  void runSearch("");
}

/** 切换搜索选项（大小写/正则）后按当前关键字立即重搜。 */
function rerun(): void {
  const q = wb.search.q.trim();
  if (q) void runSearch(q);
}
function toggleCase(): void {
  searchCase.value = !searchCase.value;
  rerun();
}
function toggleRegex(): void {
  searchRegex.value = !searchRegex.value;
  rerun();
}
function open(path: string): void {
  void openPreview(path);
}
function displayPath(p: string): string {
  const base = (wb.root || "").replace(/[\\/]+$/, "");
  return p.startsWith(base) ? p.slice(base.length + 1) : p;
}

// —— 跨文件批量替换 ——
/** 仅内容命中的文件可参与批量改写（文件名命中无法替换）。 */
const contentHits = computed(() => wb.search.hits.filter((h) => h.byContent));
const replaceBusy = ref(false);

/**
 * 批量替换：先用 promptDialog 收集替换文本（正文为不可撤销警告），
 * 确认后调用后端 /replace，并重搜结果。
 */
async function doReplaceAll(): Promise<void> {
  const q = wb.search.q.trim();
  const files = contentHits.value.length;
  if (!files || !q) return;
  const replacement = await promptDialog({
    title: t("searchReplaceTitle"),
    message: t("searchReplaceConfirm", { files, count: files }),
    placeholder: t("findReplacePlaceholder"),
  });
  if (replacement === null) return;
  replaceBusy.value = true;
  try {
    const outcome = await batchReplace(q, replacement, {
      key: wb.key,
      scope: wb.search.scope || undefined,
      caseSensitive: searchCase.value,
      regex: searchRegex.value,
    });
    toast("ok", t("searchReplaceDone", { files: outcome.files, count: outcome.replacements }));
    void runSearch(q);
  } catch (e) {
    toast("error", (e as Error).message);
  } finally {
    replaceBusy.value = false;
  }
}
</script>

<style scoped>
.fw-search { display: flex; flex-direction: column; padding: 6px 4px; font-size: calc(13px * var(--dsh-fs-scale, 1)); height: 100%; }
.fw-search-head { display: flex; align-items: center; justify-content: space-between; padding: 0 2px; }
.fw-search-opts { display: inline-flex; align-items: center; gap: 2px; }
.fw-search-opt {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  height: 20px;
  padding: 0 4px;
  border: 1px solid transparent;
  border-radius: 4px;
  background: transparent;
  color: var(--dsh-fg-weak, #8b949e);
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  font-weight: 600;
  line-height: 1;
  cursor: pointer;
}
.fw-search-opt:hover { background: var(--dsh-hover, rgba(48, 54, 61, 0.5)); color: var(--dsh-fg, #c9d1d9); }
.fw-search-opt.on { color: var(--dsh-accent, #58a6ff); border-color: var(--dsh-accent, #58a6ff); }
.fw-tree-head { font-weight: 600; padding: 2px 6px 6px; color: var(--dsh-fg-weak, #8b949e); font-size: calc(12px * var(--dsh-fs-scale, 1)); }
.fw-count { padding: 2px 6px 6px; color: var(--dsh-fg-weak, #8b949e); font-size: calc(12px * var(--dsh-fs-scale, 1)); }
.fw-count-row { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.fw-count-row .el-button { margin-left: 0; }
.fw-scopeline { font-size: calc(11px * var(--dsh-fs-scale, 1)); opacity: 0.85; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 100%; }
.fw-empty { padding: 2px 6px; color: var(--dsh-fg-weak, #8b949e); font-size: calc(12px * var(--dsh-fs-scale, 1)); }
.fw-results { overflow: auto; flex: 1; }
.fw-hit {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2px 8px;
  padding: 3px 6px;
  cursor: pointer;
  border-radius: 4px;
}
.fw-hit:hover { background: var(--dsh-border, #30363d); }
.fw-ico {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 16px;
  line-height: 1;
}
.fw-hitname { font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.fw-namerow { display: flex; align-items: center; gap: 6px; min-width: 0; flex: 1 1 auto; }
.fw-badge {
  flex-shrink: 0; font-size: calc(10px * var(--dsh-fs-scale, 1)); line-height: 1;
  padding: 2px 5px; border-radius: 4px;
  color: var(--dsh-accent, #58a6ff); background: var(--dsh-accent-soft, rgba(88,166,255,0.15));
}
.fw-hitpath { font-size: calc(11px * var(--dsh-fs-scale, 1)); color: var(--dsh-fg-weak, #8b949e); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.fw-hitsnippet {
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  line-height: 1.4;
  color: var(--dsh-fg-muted, #6e7681);
  margin-top: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: var(--dsh-mono, ui-monospace, SFMono-Regular, Consolas, monospace);
}
.fw-loading { padding: 2px 6px; color: var(--dsh-fg-weak, #8b949e); font-size: calc(12px * var(--dsh-fs-scale, 1)); }
</style>
