<template>
  <!-- 折叠按钮悬停展开的会话列表里的**一个会话卡片**：
       标题 / 提权徽标 / 最近输出预览；点击卡片 = 还原整窗并激活该会话，✕ = 关闭该会话。 -->
  <div
    class="fw-term-card"
    :class="{ active: tab.id === termActiveId }"
    :title="tab.cwd || t('terminal')"
    @click="onClick"
  >
    <div class="fw-term-card-head">
      <span class="fw-term-card-ico"><icon name="terminal" :size="12" /></span>
      <span class="fw-term-card-title">{{ title }}</span>
      <span v-if="termElevated" class="fw-term-card-admin" :title="t('terminalAdminOn')">
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

/** 卡片标题：取会话当前目录的末级目录名，缺省回退到「终端」。 */
const title = computed(() => {
  const cwd = props.tab.cwd?.trim();
  if (cwd) {
    const last = cwd.replace(/[\\/]$/, "").split(/[\\/]/).pop();
    if (last) return last;
  }
  return t("terminal");
});

/** 取末段纯文本预览（最多 5 行）。 */
const preview = computed(() => {
  const raw = termPreviewOf(props.tab.id);
  if (!raw) return "";
  return raw.split(/\r?\n/).slice(-5).join("\n");
});

/** 点击卡片：还原整窗并激活该会话。 */
function onClick(): void {
  termActiveId.value = props.tab.id;
  wb.termMinimized = false;
}

function onClose(): void {
  closeTermTab(props.tab.id);
  // 关掉最后一个会话后折叠按钮会随之消失（无会话可折叠）：直接还原整窗，
  // 否则窗口仍处于最小化、而按钮已不存在，用户无从恢复。
  if (!termTabs.value.length) wb.termMinimized = false;
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
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.45);
  color: var(--dsh-fg, #c9d1d9);
  font-size: 11px;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.12s ease;
}
.fw-term-card:hover {
  border-color: var(--dsh-accent, #238636);
}
/* 当前激活的会话：用强调色描边标出，便于在多会话里定位。 */
.fw-term-card.active {
  border-color: var(--dsh-accent, #238636);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.45), 0 0 0 1px var(--dsh-accent, #238636);
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
