<!--
  diff 渲染：把 `git diff/show` 的文本按行着色（新增绿、删除红、@@ 强调色、头部灰）。
  纯展示组件，颜色跟随主题变量；无内容时显示 empty 文案。
-->
<template>
  <div class="fw-diff">
    <div v-if="!lines.length" class="fw-diff-empty">{{ empty }}</div>
    <template v-else>
      <div class="fw-diff-body">
        <div
          v-for="(ln, i) in shown"
          :key="i"
          class="fw-diff-line"
          :class="'dl-' + diffLineKind(ln)"
        >{{ ln || " " }}</div>
      </div>
      <!-- 大文件保护：超限截断，避免一次渲染数万行卡死面板 -->
      <div v-if="truncated" class="fw-diff-empty">{{ t("gitDiffTruncated") }}</div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { diffLineKind } from "../../../composables/domain/gitGraph";
import { useI18n } from "../../../composables/core/i18n";

const props = defineProps<{ lines: string[]; empty: string }>();
const { t } = useI18n();

/** 单次最多渲染的行数：超出部分截断并提示（完整内容可走编辑器）。 */
const DIFF_MAX_LINES = 5000;
const shown = computed(() =>
  props.lines.length > DIFF_MAX_LINES ? props.lines.slice(0, DIFF_MAX_LINES) : props.lines,
);
const truncated = computed(() => props.lines.length > DIFF_MAX_LINES);
</script>

<style scoped>
.fw-diff {
  display: flex;
  flex-direction: column;
  min-height: 0;
  flex: 1 1 auto;
  overflow: hidden;
}
.fw-diff-body {
  flex: 1 1 auto;
  min-height: 0;
  overflow: auto;
  padding: 4px 0;
  font-family: var(--dsh-mono, ui-monospace, SFMono-Regular, Consolas, "Courier New", monospace);
  font-size: calc(11.5px * var(--dsh-fs-scale, 1));
  line-height: 1.5;
}
.fw-diff-line {
  padding: 0 10px;
  white-space: pre;
  color: var(--dsh-fg, #c9d1d9);
}
/* 新增 / 删除 / 区块头 / 文件头 各自配色 */
.fw-diff-line.dl-add {
  background: color-mix(in srgb, #3fb950 14%, transparent);
  color: #7ee787;
}
.fw-diff-line.dl-del {
  background: color-mix(in srgb, #f85149 14%, transparent);
  color: #ffa198;
}
.fw-diff-line.dl-meta {
  color: #79c0ff;
  background: color-mix(in srgb, #58a6ff 8%, transparent);
}
.fw-diff-line.dl-head {
  color: var(--dsh-fg-weak, #8b949e);
}
.fw-diff-empty {
  padding: 14px 12px;
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  color: var(--dsh-fg-weak, #8b949e);
}
</style>
