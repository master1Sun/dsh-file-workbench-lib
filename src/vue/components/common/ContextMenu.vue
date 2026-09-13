<template>
  <Teleport to="body">
    <div v-if="visible" class="fw-cm-backdrop" @mousedown="backdrop" @contextmenu.prevent="backdrop">
      <div
        ref="menuEl"
        class="fw-cm"
        :data-theme="currentTheme"
        :style="{ left: pos.x + 'px', top: pos.y + 'px' }"
        @mousedown.stop
        @contextmenu.prevent
      >
        <template v-for="(item, i) in items" :key="i">
          <div v-if="sep(item)" class="fw-cm-sep"></div>
          <div
            v-else
            class="fw-cm-item"
            :class="{ disabled: item.disabled, checked: item.checked, hasChild: !!item.children?.length }"
            @mouseenter="hover(i)"
            @click="pick(item)"
          >
            <span class="fw-cm-ico"><icon v-if="hasIcon(item.icon ?? '')" :name="item.icon ?? ''" :size="14" /><span v-else>{{ item.icon ?? "" }}</span></span>
            <span class="fw-cm-label">{{ item.label }}</span>
            <span class="fw-cm-check">{{ item.checked ? "●" : "" }}</span>
            <span class="fw-cm-arrow" v-if="item.children?.length"><icon name="chevronRight" :size="10" /></span>
            <!-- 子菜单（查看/排序方式/新建/Git 等）：内嵌在父项内做绝对定位 -->
            <div
              v-if="active === i && item.children?.length"
              class="fw-cm fw-cm-sub"
              :class="{ 'fw-cm-sub-left': childLeft, 'fw-cm-sub-up': childUp }"
            >
              <template v-for="(sub, j) in item.children" :key="j">
                <div v-if="sep(sub)" class="fw-cm-sep"></div>
                <div
                  v-else
                  class="fw-cm-item"
                  :class="{ disabled: sub.disabled, checked: sub.checked }"
                  @click="runSub(sub)"
                >
                  <span class="fw-cm-ico"><icon v-if="hasIcon(sub.icon ?? '')" :name="sub.icon ?? ''" :size="14" /><span v-else>{{ sub.icon ?? "" }}</span></span>
                  <span class="fw-cm-label">{{ sub.label }}</span>
                  <span class="fw-cm-check">{{ sub.checked ? "●" : "" }}</span>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import type { MenuItem } from "../../../shared/types";
import { readCurrentTheme } from "../../composables/core/theme";
import { hasIcon } from "../../composables/ui/icons";
import Icon from "./Icon.vue";

interface Props {
  items: MenuItem[];
  x: number;
  y: number;
}

const props = defineProps<Props>();
const emit = defineEmits<{ close: [] }>();

const visible = ref(false);
const menuEl = ref<HTMLElement | null>(null);
const pos = ref({ x: props.x, y: props.y });
const active = ref<number>(-1);
const childLeft = ref(false);
const childUp = ref(false);
/** 对齐宿主主题，确保 Teleport 到 body 后仍随白天/黑夜变色。 */
const currentTheme = ref<"dark" | "light">("dark");

function getTheme(): "dark" | "light" {
  currentTheme.value = readCurrentTheme();
  return currentTheme.value;
}

function sep(item: MenuItem): boolean {
  return !!item.separator;
}

watch(
  () => [props.x, props.y],
  ([x, y]) => {
    pos.value = { x, y };
    active.value = -1;
    visible.value = true;
    getTheme();
    requestAnimationFrame(clamp);
  },
);

function clamp(): void {
  const el = menuEl.value;
  if (!el) return;
  const rw = window.innerWidth;
  const rh = window.innerHeight;
  const r = el.getBoundingClientRect();
  let nx = pos.value.x;
  let ny = pos.value.y;
  if (nx + r.width > rw - 4) nx = Math.max(4, rw - r.width - 4);
  if (ny + r.height > rh - 4) ny = Math.max(4, rh - r.height - 4);
  pos.value = { x: nx, y: ny };
}

function hover(i: number): void {
  active.value = i;
  const el = menuEl.value;
  // 子菜单靠近右缘时改为向左展开
  childLeft.value = !!el && pos.value.x + el.getBoundingClientRect().width + 180 > window.innerWidth;
  // 子菜单靠近底部时改为向上弹出（等渲染完成后再测量高度）
  requestAnimationFrame(() => {
    const sub = el?.querySelector(".fw-cm-item.hasChild > .fw-cm-sub") as HTMLElement | null;
    childUp.value = !!sub && sub.getBoundingClientRect().bottom > window.innerHeight - 4;
  });
}

function pick(item: MenuItem): void {
  if (item.disabled) return;
  if (item.children?.length) return;
  item.onClick?.();
  close();
}

function runSub(sub: MenuItem): void {
  if (sub.disabled) return;
  sub.onClick?.();
  close();
}

function close(): void {
  visible.value = false;
  active.value = -1;
  emit("close");
}

function backdrop(): void {
  close();
}

function onKeydown(ev: KeyboardEvent): void {
  if (ev.key === "Escape") close();
}

onMounted(() => {
  visible.value = true;
  getTheme();
  requestAnimationFrame(clamp);
  window.addEventListener("keydown", onKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKeydown);
});
</script>

<style scoped>
/* Teleport 到 body：浮层经 html[data-theme] 全局变量继承主题。
   data-theme 属性与 readCurrentTheme() 用于对齐深/浅；所有 --dsh-* 由全局/宿主 token 提供，
   因此无需在浮层内重复自持静态调色板，深色观感与工作台完全一致。 */
.fw-cm-backdrop {
  position: fixed;
  inset: 0;
  z-index: 2147483800;
}
.fw-cm {
  position: fixed;
  z-index: 2147483900;
  min-width: 200px;
  max-width: 280px;
  padding: 4px;
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 8px;
  background: var(--dsh-bg2, #161b22);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  user-select: none;
}
.fw-cm-sep {
  height: 1px;
  margin: 5px 8px;
  background: var(--dsh-border, #30363d);
}
.fw-cm-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border-radius: 5px;
  color: var(--dsh-fg, #c9d1d9);
  cursor: pointer;
  white-space: nowrap;
  position: relative;
}
.fw-cm-item:hover:not(.disabled) {
  background: var(--dsh-hover, #30363d);
}
.fw-cm-item.disabled {
  opacity: 0.4;
  cursor: default;
}
.fw-cm-item.checked {
  color: var(--dsh-accent, #58a6ff);
}
.fw-cm-ico {
  width: 16px;
  text-align: center;
  font-size: calc(13px * var(--dsh-fs-scale, 1));
}
.fw-cm-label { flex: 1; }
.fw-cm-check { width: 10px; text-align: center; color: var(--dsh-accent, #58a6ff); font-size: calc(8px * var(--dsh-fs-scale, 1)); }
.fw-cm-arrow { font-size: calc(8px * var(--dsh-fs-scale, 1)); opacity: 0.6; }
.fw-cm-item.hasChild { position: relative; }
.fw-cm-item.hasChild > .fw-cm-sub {
  position: absolute;
  top: -4px;
  left: calc(100% - 2px);
  padding: 4px;
  max-height: calc(100vh - 16px);
  overflow: auto;
}
.fw-cm-sub-left {
  left: auto !important;
  right: calc(100% - 2px);
}
/* 子菜单靠近视口底部时向上弹出：底边对齐父项底边，向上展开 */
.fw-cm-sub-up {
  top: auto !important;
  bottom: -4px;
}
</style>