<script setup lang="ts">
/**
 * 本地图标：从 icons.ts 注册表渲染 SVG，随 currentColor 着色，
 * 替代依赖 emoji 的主题图标（跨平台渲染一致）。
 */
import { computed } from "vue";
import { ICONS } from "../../composables/ui/icons";

const props = withDefaults(defineProps<{ name: string; size?: number | string }>(), {
  size: 15,
});

const inner = computed(() => ICONS[props.name] ?? "");
const sizePx = computed(() =>
  typeof props.size === "number" ? `${props.size}px` : props.size,
);
</script>

<template>
  <svg
    v-if="inner"
    class="fw-icon"
    :viewBox="'0 0 24 24'"
    :width="sizePx"
    :height="sizePx"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    v-html="inner"
  ></svg>
</template>

<style>
/* 全局兜底：图标一律单色（随 currentColor 成为主题的黑/白），
   禁止任何彩色填充或描边，确保跨主题/跨平台一致。 */
.fw-icon,
.fw-icon * {
  color: currentColor;
  fill: none;
  stroke: currentColor;
}
.fw-icon {
  flex: none;
  vertical-align: middle;
  display: inline-block;
}
</style>