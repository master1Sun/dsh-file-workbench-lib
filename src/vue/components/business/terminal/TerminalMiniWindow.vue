<template>
  <!-- 折叠按钮悬停展开的会话列表里的**一个会话卡片**：
       标题 / 提权徽标 / 最近输出预览；点击卡片 = 还原整窗并激活该会话，✕ = 关闭该会话。 -->
  <div
    class="fw-term-card"
    :class="{ active: tab.id === termActiveId }"
    :title="cardTitle"
    @click="onClick"
  >
    <div class="fw-term-card-head">
      <span class="fw-term-card-ico"><icon name="terminal" :size="12" /></span>
      <span class="fw-term-card-title">{{ title }}</span>
      <!-- 远端会话用 SSH 小标替代「管理员盾」：卡片头位置很挤，一屏两枚徽标会挤掉标题 -->
      <span v-if="tab.ssh" class="fw-term-card-ssh" :title="t('termSshBadge')">SSH</span>
      <span v-else-if="termElevated" class="fw-term-card-admin" :title="t('terminalAdminOn')">
        <icon name="shield" :size="10" />
      </span>
      <span
        class="fw-term-card-close"
        :title="t('terminalCloseTitle')"
        @click.stop="onClose"
        >✕</span
      >
    </div>
    <pre class="fw-term-card-body">{{ preview }}</pre>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { TermTab } from "../../../composables/domain/terminalStore";
import {
  closeTermTab,
  restoreTerminal,
  termActiveId,
  termElevated,
  termPreviewOf,
  termTabs,
} from "../../../composables/domain/terminalStore";
import { wb } from "../../../stores/workbench";
import Icon from "../../common/Icon.vue";
import { t } from "../../../composables/core/i18n";

const props = defineProps<{
  tab: TermTab;
}>();

/**
 * 卡片标题：远端会话取主机名（远端目录在悬停提示里给全）；本机取当前目录末级名，
 * 缺省回退到「终端」。
 */
const title = computed(() => {
  if (props.tab.ssh) return props.tab.ssh.label;
  const cwd = props.tab.cwd?.trim();
  if (cwd) {
    const last = cwd.replace(/[\\/]$/, "").split(/[\\/]/).pop();
    if (last) return last;
  }
  return t("terminal");
});

/** 悬停提示：远端 → 主机 · 远端目录；本机 → 当前目录。 */
const cardTitle = computed(() => {
  const s = props.tab.ssh;
  if (s) return s.remote && s.remote !== "/" ? `${s.label} · ${s.remote}` : s.label;
  return props.tab.cwd || t("terminal");
});

/**
 * 取末段纯文本预览（最多 5 行）。
 * ConPTY 输出尾部常是清屏 / 回车留下的空白行，直接取末 5 行会整片空白 ——
 * 先从尾部剔除空行，再取最后 5 行有内容的。
 */
const preview = computed(() => {
  const raw = termPreviewOf(props.tab.id);
  if (!raw) return "";
  const lines = raw.replace(/\r/g, "").split("\n");
  let end = lines.length;
  while (end > 0 && !lines[end - 1].trim()) end--;
  return lines.slice(Math.max(0, end - 5), end).join("\n");
});

/** 点击卡片：还原**本**窗口（每窗独立最小化/还原）并激活该会话。 */
function onClick(): void {
  termActiveId.value = props.tab.id;
  restoreTerminal(props.tab.id);
}

function onClose(): void {
  closeTermTab(props.tab.id);
  // 关掉最后一个会话后 dock 会随之消失：整窗退出，避免「无窗口却仍显示 dock」。
  if (!termTabs.value.length) wb.termOpen = false;
}
</script>

<style scoped>
.fw-term-card {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 10px;
  /* 走主题面色的半透明版做毛玻璃底：深色 → #161b22，浅色 → #f6f8fa。 */
  background: color-mix(in srgb, var(--dsh-bg2, #161b22) 94%, transparent);
  backdrop-filter: blur(14px);
  color: var(--dsh-fg, #c9d1d9);
  font-size: 11px;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.12s ease;
}
.fw-term-card:hover {
  border-color: var(--dsh-accent, #238636);
}
/* 当前激活的会话：用强调色描边标出，便于在多会话里定位。
   ⛔ 最小化卡片整体**不要投影**（含激活态）。激活强调改用 `outline` 叠在 1px 边框外：
   视觉上仍是 2px 强调边，而 outline 不参与布局，不会挤动相邻卡片。 */
.fw-term-card.active {
  border-color: var(--dsh-accent, #238636);
  outline: 1px solid var(--dsh-accent, #238636);
}
.fw-term-card-head {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 9px;
  background: color-mix(in srgb, var(--dsh-bg3, #21262d) 82%, transparent);
  border-bottom: 1px solid var(--dsh-border, #30363d);
}
.fw-term-card-ico {
  color: var(--dsh-accent, #238636);
  display: inline-flex;
}
.fw-term-card-title {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 600;
}
.fw-term-card-admin {
  color: var(--dsh-accent, #238636);
  display: inline-flex;
}
/* 远端会话标（卡片头部，与管理员盾同位，二选一） */
.fw-term-card-ssh {
  flex-shrink: 0;
  padding: 0 4px;
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 3px;
  color: var(--dsh-fg-weak, #8b949e);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.04em;
  line-height: 1.5;
}
.fw-term-card-close {
  cursor: pointer;
  opacity: 0.7;
  padding: 0 2px;
  line-height: 1;
}
.fw-term-card-close:hover {
  opacity: 1;
  color: #f85149;
}
.fw-term-card-body {
  margin: 0;
  padding: 6px 9px;
  height: 62px;
  overflow: hidden;
  white-space: pre-wrap;
  word-break: break-all;
  font-family: "JetBrains Mono", Consolas, "Courier New", monospace;
  line-height: 1.35;
  font-size: 10.5px;
  opacity: 0.85;
}
/* 尚无输出时给一个弱化的占位，避免卡片塌成一条。 */
.fw-term-card-body:empty::before {
  content: "…";
  opacity: 0.5;
}
</style>
