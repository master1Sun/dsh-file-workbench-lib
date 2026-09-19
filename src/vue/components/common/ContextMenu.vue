<template>
  <Teleport to="body">
    <div v-if="visible" class="fw-cm-backdrop" @mousedown="backdrop" @contextmenu.prevent="backdrop">
      <div
        ref="menuEl"
        class="fw-cm"
        :class="{ 'fw-cm-up': props.placement === 'top' && props.anchorX === undefined, 'fw-cm-bubble': anchorX !== undefined, 'fw-cm-fit': props.fitWidth }"
        :data-theme="currentTheme"
        :style="{ left: pos.x + 'px', top: bubbleBottomPx ? undefined : pos.y + 'px', bottom: bubbleBottomPx ?? undefined }"
        @mousedown.stop
        @contextmenu.prevent
      >
        <!-- 指向气泡的箭头：仅传了 anchorX（锚定触发按钮）时渲染，水平中心对准按钮中心 -->
        <span v-if="anchorX !== undefined" class="fw-cm-arrow-down" :style="{ left: arrowLeftPx + 'px' }"></span>
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
              :title="rowTitle(item)"
              @mouseenter="hover(i, $event)"
              @click="pick(item)"
            >
              <span class="fw-cm-ico">
                <icon v-if="item.running" name="circleOutline" :size="14" class="fw-cm-spin" />
                <icon v-else-if="hasIcon(item.icon ?? '')" :name="item.icon ?? ''" :size="14" />
                <span v-else>{{ iconText(item.icon) }}</span>
              </span>
              <span class="fw-cm-label">{{ item.label }}</span>
              <span v-if="item.hint" class="fw-cm-hint">{{ item.hint }}</span>
              <span class="fw-cm-check">{{ item.checked ? "✓" : "" }}</span>
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
              <span class="fw-cm-ico"><icon v-if="hasIcon(item.icon ?? '')" :name="item.icon ?? ''" :size="14" /><span v-else>{{ iconText(item.icon) }}</span></span>
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
              <span class="fw-cm-ico"><icon v-if="hasIcon(sub.icon ?? '')" :name="sub.icon ?? ''" :size="14" /><span v-else>{{ iconText(sub.icon) }}</span></span>
              <span class="fw-cm-label">{{ sub.label }}</span>
              <span class="fw-cm-check">{{ sub.checked ? "✓" : "" }}</span>
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
  /** 弹出方向：'bottom'（默认，向下）或 'top'（向上生长，供底部状态栏等贴底锚点用）。 */
  placement?: "top" | "bottom";
  /** 锚定 x（触发按钮中心的视口坐标）：非 undefined 时菜单水平居中对准该点（clamp 到视口内），
   *  并在下缘渲染指向箭头（气泡效果）。用于底部「扩展」等贴底入口。 */
  anchorX?: number;
  /** 宽度自适应内容（不撑到 min/max 边界）：条目短而少的气泡菜单用，避免整块过宽。 */
  fitWidth?: boolean;
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
/** 箭头水平位置（菜单内坐标系）：clamp() 后按菜单真实左缘反算，始终对准锚点。 */
const arrowLeftPx = ref(0);
/** 锚定气泡（anchorX）时菜单与触发按钮的间距。 */
const BUBBLE_GAP = 10;
/** 气泡垂直定位：placement=top + anchorX 时改用 CSS bottom 直接钉住「按钮上沿-间距」，
 *  菜单向上生长、无需按实测高度换算 top——此前用 getBoundingClientRect().height 反推
 *  top，任何时刻量到偏大的高度（首帧/动画中/临时宽容器把长行撑出换行）都会把气泡整个
 *  拽到屏幕顶端。bottom 由浏览器实时求值，天然免疫测量时机问题。 */
const bubbleBottomPx = ref<string | null>(null);
/** 对齐宿主主题，确保 Teleport 到 body 后仍随白天/黑夜变色。 */
const currentTheme = ref<"dark" | "light">("dark");

function getTheme(): "dark" | "light" {
  currentTheme.value = readCurrentTheme();
  return currentTheme.value;
}

function sep(item: MenuItem): boolean {
  return !!item.separator;
}

/** 非法图标名会退化为纯文本渲染（如插件视图的 title 直接当 icon 传入）——只留首字符，防止溢出到标签列。 */
function iconText(icon?: string): string {
  return icon ? [...icon][0] ?? "" : "";
}

/** 行提示：实时读取器 hintFn 优先（每次渲染现取），否则静态 title。
 *  hintFn 让插件把进度写进 tooltip 而无需同 id 反复 register——后者会换数组引用、
 *  触发菜单重定位/重渲染抖动。 */
function rowTitle(item: MenuItem): string | undefined {
  if (item.hintFn) return item.hintFn();
  return item.title;
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

// 条目注册表变化（如测试/插件在菜单打开期间 register/unregister）→ 重算位置。
// 气泡模式（anchorX+top）由 CSS bottom 自动跟随高度生长，此处主要兜住非气泡的
// placement=top：translateY(-100%) 的量随高度变化，需按新 rect 重新夹取 top。
watch(
  () => props.items,
  () => {
    if (visible.value) requestAnimationFrame(clamp);
  },
);

function clamp(): void {
  const el = menuEl.value;
  if (!el) return;
  const rw = window.innerWidth;
  const rh = window.innerHeight;
  // 气泡锚定：菜单水平居中对准触发按钮中心（clamp 进视口），箭头再反算回按钮位置。
  // 先按内容宽度量一次（fitWidth 靠 max-content）：若此刻仍贴着 left:0 测量，rect 会被
  // 视口左缘截断（窄窗口下 x 被夹成 0 → 漂到左上角"跑远"）。临时移到目标锚点附近再测，
  // 保证拿到真实宽度；随后写回最终坐标，避免非法首帧定位闪现。
  let nx = pos.value.x;
  if (props.anchorX !== undefined) {
    const prevLeft = el.style.left;
    el.style.left = `${Math.max(4, Math.min(props.anchorX - 120, rw - 260))}px`;
    const probeW = el.getBoundingClientRect().width;
    el.style.left = prevLeft;
    nx = Math.max(4, Math.min(props.anchorX - probeW / 2, rw - probeW - 4));
    arrowLeftPx.value = Math.max(14, Math.min(props.anchorX - nx, probeW - 14));
  } else if (nx + el.getBoundingClientRect().width > rw - 4) {
    nx = Math.max(4, rw - el.getBoundingClientRect().width - 4);
  }
  const r = el.getBoundingClientRect();
  let ny = pos.value.y;
  if (props.anchorX !== undefined && props.placement === "top") {
    // 气泡锚定：y 是按钮上沿 → 以 CSS bottom 钉住「视口底 - 按钮上沿 + 间距」。
    // 不再测量高度反推 top（历史 bug 源头：任意一次量到偏大高度都会把气泡拽到屏幕顶端）。
    bubbleBottomPx.value = `${rh - pos.value.y + BUBBLE_GAP}px`;
    ny = pos.value.y; // bottom 已接管渲染定位，top 不应用（见模板），此处仅占位
  } else {
    bubbleBottomPx.value = null;
    // placement=top（非气泡）：菜单经 translateY(-100%) 升到锚点之上，rect.top 已含该位移。
    // ⚠️ 必须按「当前拟落位 ny + 实测高」判断越界——不能用 rect.bottom：首帧 rect 还在
    // （未上移的）旧位置，其 bottom 会虚假触发拉回、把向上弹出的菜单整个拽到屏幕顶端。
    if (ny + r.height > rh - 4) ny = Math.max(4, rh - r.height - 4);
    // 顶缘越界（向上生长过头 / 被上式拉到负值）才下推回可见区；向下弹出的普通菜单
    // r.top 本就 ≥0，不会命中此分支。
    if (r.top < 4) ny = Math.max(4, ny + (4 - r.top));
    if (ny < 4) ny = 4;
  }
  pos.value = { x: nx, y: ny };
}

function hover(i: number, e?: MouseEvent): void {
  active.value = i;
  const el = menuEl.value;
  const item = props.items[i];
  // 直接用 hover 事件的真实元素定位子菜单：避免 querySelectorAll('.fw-cm-item') 同时命中
  // 根菜单 / 页脚 / 已渲染子菜单三类节点导致索引错位（菜单过长出现滚动条时尤为明显，
  // 错位会拿到位于 (0,0) 的子菜单项，使 subPos 漂到屏幕左上角）。
  const target = (e?.currentTarget as HTMLElement | null) ?? el?.querySelectorAll<HTMLElement>(".fw-cm-item")[i] ?? null;
  childLeft.value = !!el && pos.value.x + el.getBoundingClientRect().width + 180 > window.innerWidth;
  if (item?.children?.length) {
    activeSub.value = item;
    measureSub(target);
  } else {
    activeSub.value = null;
  }
}

/**
 * 根据 hover 项的位置，把根层级的子菜单定位到其右侧（左缘不足时改左侧），并防溢出屏幕。
 * 传入的 `target` 是 hover 事件的真实元素，其 getBoundingClientRect 已是正确视口坐标，
 * 不受滚动容器 / 页脚 / 子菜单计数影响。
 */
function measureSub(target?: HTMLElement | null): void {
  const el = target ?? null;
  if (!el) return;
  const r = el.getBoundingClientRect();
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
@keyframes fw-cm-in {
  from {
    opacity: 0;
    transform: translateY(-3px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
.fw-cm {
  position: fixed;
  z-index: 2147483900;
  transform-origin: top left;
  animation: fw-cm-in 0.1s ease-out;
  min-width: 200px;
  max-width: 280px;
  /* 根菜单本身不加 overflow：子菜单渲染在根层级，需 escape 裁剪（否则 Git 子菜单被裁） */
  padding: 4px;
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: var(--dsh-radius-md, 8px);
  background: var(--dsh-bg2, #161b22);
  box-shadow: var(--dsh-shadow-menu, 0 8px 24px rgba(0, 0, 0, 0.4));
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  user-select: none;
}
/* 仅条目容器限高滚动：最近项目等条目过多时不撑破屏幕（max-height 可被 maxHeight prop 覆盖） */
.fw-cm-scroll {
  max-height: min(70vh, calc(100vh - 16px));
  overflow-y: auto;
}
/* 宽度自适应内容：短条目气泡菜单不撑到 min/max 边界（视口夹取仍由 max-width 兜底） */
.fw-cm-fit {
  width: max-content;
  min-width: 0;
}
/* placement=top：贴底锚点（如底部状态栏「扩展」）向上弹出。
   top 给的是触发按钮上沿，用 translateY(-100%) 让菜单整体升到该点之上；
   clamp() 仍按视口夹取 left/top，故超高时会被推回可见区、不会溢出屏幕。 */
.fw-cm-up {
  transform-origin: bottom left;
  translate: 0 -100%;
  animation: fw-cm-in-up 0.1s ease-out;
}
/* 锚定气泡：bottom 由 JS 直接钉住按钮上沿之上（无 translateY(-100%)），动画从按钮方向滑入。
   max-height 兜底：内容再高也只占满可视区，超出部分交给 .fw-cm-scroll 内部滚动。 */
.fw-cm-bubble {
  transform-origin: bottom center;
  animation: fw-cm-in-up 0.1s ease-out;
  max-height: calc(100vh - 16px);
}
@keyframes fw-cm-in-up {
  from {
    opacity: 0;
    transform: translateY(3px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
/* 指向气泡的箭头：下缘居中的旋转小方块。单层实现——四条边里只有朝外的两条带描边，
   靠内两条无边，与气泡本体边框无缝衔接（多层叠加时 z 序会压过气泡边框，观感差）。
   不画阴影：菜单 box-shadow 本就会漫到箭头区域，浅色主题下再叠一层会在白色气泡底边上糊出灰斑。 */
.fw-cm-arrow-down {
  position: absolute;
  bottom: -6px;
  width: 12px;
  height: 12px;
  margin-left: -6px;
  transform: rotate(45deg);
  background: var(--dsh-bg2, #161b22);
  border-right: 1px solid var(--dsh-border, #30363d);
  border-bottom: 1px solid var(--dsh-border, #30363d);
  pointer-events: none;
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
  border-radius: var(--dsh-radius-sm, 4px);
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
/* 运行中指示器：旋转的开口圆环。旋转本体在内层 svg（.fw-cm-spin）上——
   scoped CSS 下祖先动画与后代 transition 合成时会被覆盖，故分开两层各管一个 transform。 */
.fw-cm-spin {
  display: inline-block;
  color: var(--dsh-accent, #58a6ff);
}
.fw-cm-spin :deep(svg) {
  animation: fw-cm-spin 0.9s linear infinite;
}
@keyframes fw-cm-spin {
  to {
    transform: rotate(360deg);
  }
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