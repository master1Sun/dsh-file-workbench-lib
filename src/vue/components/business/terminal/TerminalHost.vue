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
      <span class="dsh-term-dock-restore" aria-hidden="true">▴</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import TerminalDialog from "./TerminalDialog.vue";
import Icon from "../../common/Icon.vue";
import { wb } from "../../../stores/workbench";
import { t } from "../../../composables/core/i18n";
</script>

<style scoped>
/* 最小化 dock 栏：固定在视口右下角的一条细 dock，承载「已最小化终端」的可点击还原项。
   跨面板常驻（挂在 body 的全局实例），因此「文件编辑器」面板下也能看到并还原。 */
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
  background: rgba(33, 38, 45, 0.92);
  backdrop-filter: blur(6px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
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
.dsh-term-dock-restore {
  font-size: 11px;
  line-height: 1;
}
</style>
