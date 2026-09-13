<template>
  <el-dialog
    :model-value="dialogState.visible"
    class="fw-confirm-dialog"
    width="380px"
    align-center
    append-to-body
    :show-close="true"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    @update:model-value="onModel"
  >
    <div class="fw-confirm-body" :class="{ 'fw-confirm-up': dialogState.kind === 'confirm' }">
      <template v-if="dialogState.kind === 'confirm'">
        <span class="fw-confirm-ico" aria-hidden="true"><icon name="warning" :size="22" /></span>
        <p class="fw-confirm-msg">{{ dialogState.message }}</p>
      </template>
      <template v-else>
        <p v-if="dialogState.message" class="fw-confirm-msg">{{ dialogState.message }}</p>
        <!-- 多行模式（如子代理任务描述）用 textarea；Enter 换行，Ctrl+Enter 提交 -->
        <el-input
          v-if="dialogState.multiline"
          v-model="dialogState.inputValue"
          type="textarea"
          :rows="5"
          :placeholder="dialogState.inputPlaceholder"
          @keydown.ctrl.enter.prevent="onOk"
        />
        <el-input
          v-else
          v-model="dialogState.inputValue"
          :placeholder="dialogState.inputPlaceholder"
          clearable
          @keyup.enter="onOk"
        />
      </template>
    </div>
    <template #footer>
      <el-button @click="onCancel">{{ cancelText }}</el-button>
      <el-button type="primary" @click="onOk">{{ okText }}</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { dialogState, resolveDialog } from "../../composables/core/dialog";
import { useI18n } from "../../composables/core/i18n";
import Icon from "./Icon.vue";

const { t } = useI18n();

const okText = computed(() => dialogState.okText || t("confirmOk"));
const cancelText = computed(() => dialogState.cancelText || t("cancel"));

function onModel(v: boolean): void {
  if (!v) resolveDialog(dialogState.kind === "prompt" ? null : false);
}
function onOk(): void {
  if (dialogState.kind === "prompt") resolveDialog(dialogState.inputValue.trim());
  else resolveDialog(true);
}
function onCancel(): void {
  resolveDialog(dialogState.kind === "prompt" ? null : false);
}
</script>

<style>
/* Element Plus 弹窗重写成项目深色弹窗样式（挂到 body/根树内，故需全局选择器）。 */
.fw-confirm-dialog.el-dialog {
  --el-dialog-bg-color: var(--dsh-bg2, #161b22);
  --el-dialog-title-font-size: calc(14px * var(--dsh-fs-scale, 1));
  --el-text-color-primary: var(--dsh-fg, #c9d1d9);
  --el-text-color-regular: var(--dsh-fg, #c9d1d9);
  --el-border-color: var(--dsh-border, #30363d);
  --el-border-color-light: var(--dsh-border, #30363d);
  --el-border-color-lighter: var(--dsh-border, #30363d);
  --el-fill-color-blank: var(--dsh-bg, #0d1117);
  --el-bg-color: var(--dsh-bg2, #161b22);
  --el-border-radius-base: 8px;
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55);
  padding: 0;
}
/* 遮罩：由 el-overlay 承担，仅在项目根内生效 */
.fw-confirm-dialog.el-dialog {
  --el-overlay-color-lighter: rgba(0, 0, 0, 0.5);
}
.fw-confirm-dialog .el-dialog__header {
  margin-right: 0;
  padding: 16px 20px;
  border-bottom: 1px solid var(--dsh-border, #30363d);
}
.fw-confirm-dialog .el-dialog__title {
  font-weight: 600;
  font-size: calc(14px * var(--dsh-fs-scale, 1));
  letter-spacing: 0.3px;
}
.fw-confirm-dialog .el-dialog__headerbtn {
  color: var(--dsh-fg-weak, #8b949e);
  width: 24px;
  height: 24px;
  font-size: calc(16px * var(--dsh-fs-scale, 1));
}
.fw-confirm-dialog .el-dialog__headerbtn:hover {
  color: var(--dsh-fg, #c9d1d9);
}
.fw-confirm-dialog .el-dialog__body {
  padding: 22px 20px 20px;
  color: var(--dsh-fg, #c9d1d9);
}
.fw-confirm-dialog .el-dialog__footer {
  padding: 14px 20px 18px;
  border-top: 1px solid var(--dsh-border, #30363d);
}
.fw-confirm-dialog .el-dialog__footer .el-button + .el-button {
  margin-left: 10px;
}
.fw-confirm-dialog .el-dialog__footer .el-button {
  min-width: 76px;
  padding: 8px 20px;
}
.fw-confirm-dialog .el-button {
  border-radius: 6px;
  font-size: calc(13px * var(--dsh-fs-scale, 1));
}
.fw-confirm-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}
.fw-confirm-body.fw-confirm-up {
  flex-direction: row;
  align-items: flex-start;
  gap: 14px;
}
.fw-confirm-body.fw-confirm-up .fw-confirm-msg {
  text-align: left;
  padding-top: 3px;
  flex: 1;
}
.fw-confirm-ico {
  flex: 0 0 auto;
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(240, 185, 11, 0.14);
  font-size: calc(22px * var(--dsh-fs-scale, 1));
  line-height: 1;
}
.fw-confirm-msg {
  margin: 0;
  font-size: calc(13px * var(--dsh-fs-scale, 1));
  line-height: 1.65;
  text-align: center;
  white-space: pre-line;
  word-break: break-word;
  color: var(--dsh-fg, #c9d1d9);
}
.fw-confirm-body .el-input {
  width: 100%;
}
.fw-confirm-dialog .el-input__wrapper {
  background: var(--dsh-bg, #0d1117);
  box-shadow: 0 0 0 1px var(--dsh-border, #30363d) inset;
  border-radius: 6px;
  transition: box-shadow 0.2s ease;
}
.fw-confirm-dialog .el-input__wrapper:hover,
.fw-confirm-dialog .el-input__wrapper.is-focus {
  box-shadow: 0 0 0 1px var(--dsh-accent, #388bfd) inset;
}
.fw-confirm-dialog .el-button--primary {
  --el-button-bg-color: var(--dsh-accent, #238636);
  --el-button-border-color: var(--dsh-accent, #238636);
  --el-button-hover-bg-color: #238636;
  --el-button-hover-border-color: #238636;
}
</style>