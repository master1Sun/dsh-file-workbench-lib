<script setup lang="ts">
/**
 * 消息提示宿主：把 toasts 队列渲染成右下角堆叠的浮层，带关闭倒计时与手动关闭按钮。
 *
 * 由 main.ts 挂到 body 上的独立 Vue 应用（与全局终端同层），因此：
 *  - 不随右侧面板切换而重建，文件工作台 / 文件编辑器共用同一份队列、不会重复弹出；
 *  - 不在 .fw-root 内，取色依赖 useTheme 打在 html 上的 data-theme 与 --dsh-* 变量，
 *    以及 App.vue 写在 html 上的 --dsh-fs-scale（故字号随「界面字号」设置缩放）。
 */
import { onBeforeUnmount, onMounted } from "vue";
import Icon from "./Icon.vue";
import { t } from "../../composables/core/i18n";
import { dismissToast, toasts, type ToastItem, type ToastKind } from "../../composables/core/toast";

/** 倒计时节拍：100ms 足够让读数与进度条看起来连续，又不至于频繁触发渲染。 */
const TICK = 100;
let timer: number | null = null;

function tick(): void {
  if (toasts.value.length === 0) return;
  // 先快照再遍历：下面可能对 toasts 做删除，避免边遍历边改数组。
  for (const it of [...toasts.value]) {
    if (it.paused || it.duration <= 0) continue;
    it.remain -= TICK;
    if (it.remain <= 0) dismissToast(it.id);
  }
}

onMounted(() => {
  timer = window.setInterval(tick, TICK);
});
onBeforeUnmount(() => {
  if (timer !== null) window.clearInterval(timer);
  timer = null;
});

/** 图标随种类：失败/警告都是三角感叹号，成功打勾，信息为圆 i。 */
const ICON: Record<ToastKind, string> = {
  ok: "check",
  error: "warning",
  warning: "warning",
  info: "info",
};

/** 剩余秒数（向上取整：3.0→3、2.1→3…… 最短也会显示 1s，不会出现 0s 停留）。 */
function secondsLeft(it: ToastItem): number {
  return Math.max(0, Math.ceil(it.remain / 1000));
}

/** 底部进度条宽度（剩余占比）；不自动关闭时恒为满格。 */
function leftPercent(it: ToastItem): string {
  if (it.duration <= 0) return "100%";
  const pct = (it.remain / it.duration) * 100;
  return `${Math.max(0, Math.min(100, pct))}%`;
}
</script>

<template>
  <div class="fw-toast-host" aria-live="polite" aria-atomic="false">
    <div
      v-for="it in toasts"
      :key="it.id"
      class="fw-toast"
      :class="`k-${it.kind}`"
      role="status"
      @mouseenter="it.paused = true"
      @mouseleave="it.paused = false"
    >
      <span class="fw-toast-ico" aria-hidden="true"><icon :name="ICON[it.kind]" :size="15" /></span>
      <span class="fw-toast-msg">{{ it.message }}</span>
      <span v-if="it.duration > 0" class="fw-toast-count" :title="`${secondsLeft(it)}s`">
        {{ secondsLeft(it) }}s
      </span>
      <button
        class="fw-toast-x"
        type="button"
        :title="t('toastClose')"
        :aria-label="t('toastClose')"
        @click="dismissToast(it.id)"
      >
        <icon name="close" :size="13" />
      </button>
      <!-- 底部剩余时间进度条：与倒计时读数同源，一眼看出还剩多久 -->
      <span v-if="it.duration > 0" class="fw-toast-bar" :style="{ width: leftPercent(it) }"></span>
    </div>
  </div>
</template>

<style>
/* 全局选择器（非 scoped）：宿主挂到 body、不在 .fw-root 内，scoped 属性选择器无对应元素。 */
.fw-toast-host {
  position: fixed;
  /* 右下角：bottom 让开插件自身的 26px 状态栏（工作台/编辑器底部各有一条），
     否则提示会压住状态栏文字。 */
  right: 16px;
  bottom: 36px;
  z-index: 10050;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  /* 容器只占内容大小：不拦截空白区域上的鼠标事件，避免挡住底下的界面。 */
  pointer-events: none;
}

.fw-toast {
  position: relative;
  pointer-events: auto;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  min-width: 190px;
  max-width: min(380px, calc(100vw - 40px));
  padding: 9px 8px 9px 11px;
  border: 1px solid var(--dsh-border, #30363d);
  border-left: 2px solid var(--fw-toast-ink, var(--dsh-border, #30363d));
  border-radius: 8px;
  background: var(--dsh-bg2, #161b22);
  color: var(--dsh-fg, #c9d1d9);
  font-family: var(--dsh-font, system-ui, sans-serif);
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  line-height: 1.5;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.32);
  overflow: hidden;
  animation: fw-toast-in 0.16s ease-out;
}
@keyframes fw-toast-in {
  from {
    opacity: 0;
    transform: translateX(14px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

/* 各类型的强调色。默认取浅色主题值，深色主题下换更亮的同色系。 */
.fw-toast.k-ok {
  --fw-toast-ink: var(--dsh-accent, #1f883d);
}
.fw-toast.k-error {
  --fw-toast-ink: #cf222e;
}
.fw-toast.k-warning {
  --fw-toast-ink: #9a6700;
}
.fw-toast.k-info {
  --fw-toast-ink: #0969da;
}
html[data-theme="dark"] .fw-toast.k-error {
  --fw-toast-ink: #f85149;
}
html[data-theme="dark"] .fw-toast.k-warning {
  --fw-toast-ink: #d29922;
}
html[data-theme="dark"] .fw-toast.k-info {
  --fw-toast-ink: #58a6ff;
}

.fw-toast-ico {
  flex: none;
  display: inline-flex;
  align-items: center;
  height: calc(18px * var(--dsh-fs-scale, 1));
  color: var(--fw-toast-ink, var(--dsh-fg, #c9d1d9));
}

.fw-toast-msg {
  flex: 1 1 auto;
  min-width: 0;
  /* 长路径 / 报错串允许换行，但连续无空格的串也要能断行，否则会撑破气泡。 */
  overflow-wrap: anywhere;
  white-space: pre-wrap;
  padding-top: 1px;
}

/* 倒计时读数：等宽数字，避免每秒跳动时宽度抖动。 */
.fw-toast-count {
  flex: none;
  align-self: center;
  color: var(--dsh-fg-weak, #8b949e);
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  font-variant-numeric: tabular-nums;
  user-select: none;
}

.fw-toast-x {
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  padding: 0;
  border: 0;
  border-radius: 4px;
  background: transparent;
  color: var(--dsh-fg-weak, #8b949e);
  cursor: pointer;
}
.fw-toast-x:hover {
  background: var(--dsh-hover, #30363d);
  color: var(--dsh-fg, #c9d1d9);
}
.fw-toast-x:focus-visible {
  outline: 1px solid var(--dsh-accent, #238636);
  outline-offset: 1px;
}

/* 底部剩余时间条 */
.fw-toast-bar {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  background: var(--fw-toast-ink, var(--dsh-accent, #238636));
  opacity: 0.7;
  transition: width 0.1s linear;
  pointer-events: none;
}
</style>
