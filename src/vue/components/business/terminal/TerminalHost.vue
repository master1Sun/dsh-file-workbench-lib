<template>
  <!-- 全局唯一终端：挂在 main.ts 的常驻实例上，不随「文件工作台 / 文件编辑器」任一面板
       的 tab 切换而卸载，因此切换面板不会重建终端、也不会出现两个面板各开一个终端。 -->
  <TerminalDialog v-if="wb.termOpen" :open="true" @close="wb.termOpen = false" />

  <!-- 最小化时的全局 dock 栏：终端常驻会话收起到这里，跨「文件工作台 / 文件编辑器」两面板
       始终可见；点击还原浮窗。独立挂载于 body，不依赖任一面板的状态栏。 -->
  <div v-if="wb.termOpen && wb.termMinimized" class="dsh-term-dock">
    <button
      class="dsh-term-dock-item"
      :title="t('terminalRestore')"
      @click="wb.termMinimized = false"
    >
      <icon name="terminal" :size="13" />
      <span class="dsh-term-dock-label">{{ t("terminal") }}</span>
      <!-- 提权标识：终端子进程继承宿主令牌，故此处与终端栏徽标同源（termElevated）。 -->
      <span v-if="termElevated" class="dsh-term-dock-admin" :title="t('terminalAdminOn')">
        <icon name="shield" :size="11" />
      </span>
      <span class="dsh-term-dock-restore" aria-hidden="true">▴</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import TerminalDialog from "./TerminalDialog.vue";
import Icon from "../../common/Icon.vue";
import { wb } from "../../../stores/workbench";
import { t } from "../../../composables/core/i18n";
import { loadTermElevation, termElevated } from "../../../composables/domain/terminalStore";

// 本组件是常驻挂载的全局实例：在这里探测一次宿主权限态，最小化 dock 与终端栏即可共用。
onMounted(() => {
  void loadTermElevation();
});
</script>

<style scoped>
/* 最小化 dock 栏：固定在视口右下角的一条细 dock，承载「已最小化终端」的可点击还原项。
   跨面板常驻（挂在 body 的全局实例），因此「文件编辑器」面板下也能看到并还原。

   配色**全部走 --dsh-* 变量**：dock 挂在 document.body，而 styles.css 把深/浅调色板同时定义在
   `html[data-theme]` 与 `.fw-root[data-theme]` 上，useTheme 又把 data-theme 打到 html，
   因此 body 下的本元素可经继承拿到变量 → 自动随白天/黑夜切换（此前的硬编码深色底不随主题变）。 */
.dsh-term-dock {
  position: fixed;
  right: 16px;
  bottom: 12px;
  z-index: 10000;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px;
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 10px;
  /* 用主题面色的半透明版做毛玻璃底：深色 → #161b22，浅色 → #f6f8fa。 */
  background: color-mix(in srgb, var(--dsh-bg2, #161b22) 92%, transparent);
  backdrop-filter: blur(6px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
}
.dsh-term-dock-item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border: none;
  border-radius: 7px;
  background: transparent;
  color: var(--dsh-accent, #238636);
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
}
.dsh-term-dock-item:hover {
  background: var(--dsh-hover, rgba(110, 118, 129, 0.25));
  color: var(--dsh-fg, #c9d1d9);
}
.dsh-term-dock-label {
  line-height: 1;
}
/* 提权盾牌：与终端栏徽标同色（强调色），仅管理员态显示。 */
.dsh-term-dock-admin {
  display: inline-flex;
  align-items: center;
  color: var(--dsh-accent, #238636);
  opacity: 0.9;
}
.dsh-term-dock-restore {
  font-size: 11px;
  line-height: 1;
}
</style>
