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
        <!-- 头部插槽：菜单标题 + 右侧操作（如「最近项目」的「全部清除」按钮），
             固定不随列表滚动，置于滚动容器之外。 -->
        <div v-if="$slots.header" class="fw-cm-header">
          <slot name="header" />
        </div>
        <!-- 条目容器：仅此处限高滚动（最近项目等条目过多时不撑破屏幕）。
             子菜单提升到根菜单层级渲染，避免被本容器的 overflow 裁剪（Git 子菜单向右展开）。 -->
        <div class="fw-cm-scroll" :style="props.maxHeight ? { maxHeight: props.maxHeight } : undefined">
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
              <span v-if="item.hint" class="fw-cm-hint">{{ item.hint }}</span>
              <span class="fw-cm-check">{{ item.checked ? "●" : "" }}</span>
              <span class="fw-cm-arrow" v-if="item.children?.length"><icon name="chevronRight" :size="10" /></span>
              <span
                v-if="item.trailing"
                class="fw-cm-trailing"
                :class="{ disabled: item.trailing.disabled }"
                :title="item.trailing.title"
                @click.stop="runTrailing(item)"
                @mousedown.stop
                @mouseenter.stop
              ><icon :name="item.trailing.icon" :size="12" /></span>
            </div>
          </template>
        </div>
        <!-- 底部固定区：不随列表滚动，始终可见（如「最近项目」的「打开文件夹…」）。
             与上方列表以分隔线区分；条目复用 .fw-cm-item 渲染，点击即触发 onClick 并关闭菜单。 -->
        <div v-if="footerItems?.length" class="fw-cm-footer">
          <template v-for="(item, i) in footerItems" :key="'f' + i">
            <div v-if="sep(item)" class="fw-cm-sep"></div>
            <div
              v-else
              class="fw-cm-item"
              :class="{ disabled: item.disabled }"
              @click="runFooter(item)"
            >
              <span class="fw-cm-ico"><icon v-if="hasIcon(item.icon ?? '')" :name="item.icon ?? ''" :size="14" /><span v-else>{{ item.icon ?? "" }}</span></span>
              <span class="fw-cm-label">{{ item.label }}</span>
            </div>
          </template>
        </div>
        <!-- 子菜单（查看/排序方式/新建/Git 等）：渲染在根菜单层级，position:fixed 定位，不被滚动容器裁剪 -->
        <div
          v-if="activeSub"
          ref="subEl"
          class="fw-cm fw-cm-sub"
          :class="{ 'fw-cm-sub-left': childLeft }"
          :style="{ left: subPos.x + 'px', top: subPos.y + 'px' }"
        >
          <template v-for="(sub, j) in activeSub.children" :key="j">
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
  /** 条目容器（.fw-cm-scroll）的最大高度，用于缩短「最近项目」等长列表的滚动区域。 */
  maxHeight?: string;
  /** 固定在列表底部、不随列表滚动的条目（如「打开文件夹…」），始终可见。 */
  footerItems?: MenuItem[];
}

const props = defineProps<Props>();
const emit = defineEmits<{ close: [] }>();

const visible = ref(false);
const menuEl = ref<HTMLElement | null>(null);
const subEl = ref<HTMLElement | null>(null);
const pos = ref({ x: props.x, y: props.y });
const active = ref<number>(-1);
const childLeft = ref(false);
/** 当前 hover 的、带有子菜单的项（用于根层级渲染子菜单，避免被滚动容器裁剪）。 */
const activeSub = ref<MenuItem | null>(null);
const subPos = ref({ x: 0, y: 0 });
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
    activeSub.value = null;
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
  const item = props.items[i];
  childLeft.value = !!el && pos.value.x + el.getBoundingClientRect().width + 180 > window.innerWidth;
  if (item?.children?.length) {
    activeSub.value = item;
    measureSub();
  } else {
    activeSub.value = null;
  }
}

/** 根据 hover 项的位置，把根层级的子菜单定位到其右侧（左缘不足时改左侧），并防溢出屏幕。 */
function measureSub(): void {
  const root = menuEl.value;
  if (!root || active.value < 0) return;
  const itemEl = root.querySelectorAll<HTMLElement>(".fw-cm-item")[active.value];
  if (!itemEl) return;
  const r = itemEl.getBoundingClientRect();
  // 估算宽（min 200 / max 280），渲染后再用真实尺寸校正
  const estW = 220;
  let x = childLeft.value ? r.left - estW : r.right - 2;
  const y = Math.max(4, r.top - 4);
  subPos.value = { x, y };
  requestAnimationFrame(() => {
    const sub = subEl.value;
    if (!sub) return;
    const sr = sub.getBoundingClientRect();
    let nx = x;
    let ny = y;
    if (nx + sr.width > window.innerWidth - 4) nx = Math.max(4, window.innerWidth - sr.width - 4);
    if (ny + sr.height > window.innerHeight - 4) ny = Math.max(4, window.innerHeight - sr.height - 4);
    subPos.value = { x: nx, y: ny };
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

/** 每行右侧的操作按钮（如最近项目的单条清除）：点击不触发整行 pick，由调用方决定是否需要关闭菜单。 */
function runTrailing(item: MenuItem): void {
  if (item.trailing?.disabled) return;
  item.trailing?.onClick?.();
}

/** 底部固定条目（如「打开文件夹…」）：直接触发 onClick 并关闭菜单。 */
function runFooter(item: MenuItem): void {
  if (item.disabled) return;
  item.onClick?.();
  close();
}

function close(): void {
  visible.value = false;
  active.value = -1;
  activeSub.value = null;
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
  /* 根菜单本身不加 overflow：子菜单渲染在根层级，需 escape 裁剪（否则 Git 子菜单被裁） */
  padding: 4px;
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 8px;
  background: var(--dsh-bg2, #161b22);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  user-select: none;
}
/* 仅条目容器限高滚动：最近项目等条目过多时不撑破屏幕（max-height 可被 maxHeight prop 覆盖） */
.fw-cm-scroll {
  max-height: min(70vh, calc(100vh - 16px));
  overflow-y: auto;
}
/* 底部固定区：与列表以分隔线区分，不随列表滚动，始终可见 */
.fw-cm-footer {
  border-top: 1px solid var(--dsh-border, #30363d);
  margin-top: 4px;
  padding-top: 4px;
}
/* 头部：标题居左、操作居右，与下方列表以分隔线区分；固定不随列表滚动 */
.fw-cm-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 2px 6px 6px;
  margin-bottom: 4px;
  border-bottom: 1px solid var(--dsh-border, #30363d);
}
.fw-cm-header-title {
  font-weight: 600;
  color: var(--dsh-fg, #c9d1d9);
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  white-space: nowrap;
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
/* 主标签：占满剩余空间，过长时省略（如「最近项目」的完整路径） */
.fw-cm-label {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
}
/* 右侧提示（快捷键 / 次要信息）：右对齐、弱化，仅作展示（不做按键绑定） */
.fw-cm-hint {
  margin-left: 16px;
  max-width: 52%;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--dsh-fg-weak, #8b949e);
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  white-space: nowrap;
}
.fw-cm-check { width: 10px; text-align: center; color: var(--dsh-accent, #58a6ff); font-size: calc(8px * var(--dsh-fs-scale, 1)); }
.fw-cm-arrow { font-size: calc(8px * var(--dsh-fs-scale, 1)); opacity: 0.6; }
/* 每行右侧操作按钮（单条清除等）：常驻弱化，悬停显形；点击不触发整行 */
.fw-cm-trailing {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  margin-left: 6px;
  border-radius: 4px;
  color: var(--dsh-fg-weak, #8b949e);
  opacity: 0.45;
  cursor: pointer;
  transition: background 0.12s, color 0.12s, opacity 0.12s;
}
.fw-cm-item:hover .fw-cm-trailing { opacity: 1; }
.fw-cm-trailing:hover { color: #f85149; background: rgba(248, 81, 73, 0.14); }
.fw-cm-trailing.disabled { opacity: 0.25; cursor: default; }
.fw-cm-trailing.disabled:hover { color: var(--dsh-fg-weak, #8b949e); background: transparent; }
.fw-cm-item.hasChild { position: relative; }
/* 子菜单渲染在根菜单层级，position:fixed 用 JS 定位，避免被滚动容器裁剪 */
.fw-cm-sub {
  position: fixed;
  margin: 0;
  padding: 4px;
  max-height: calc(100vh - 16px);
  overflow: auto;
}
.fw-cm-sub-left {
  /* 左缘不足时由 JS 计算 left（itemRect.left - 估算宽），此处仅作占位，无额外样式 */
}
</style>