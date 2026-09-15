<template>
  <el-dialog v-model="open" class="fw-set-dialog" :title="t('settings')" width="460px" :close-on-click-modal="true">
    <div class="fw-set-body">
      <div class="fw-set-row">
        <span class="k">{{ t('allowOutsideRoot') }}</span>
        <el-switch v-model="prefs.allowOutsideRoot" @change="changed" />
      </div>
      <div class="fw-set-row">
        <span class="k">{{ t('showHidden') }}</span>
        <el-switch v-model="prefs.showHidden" @change="changed" />
      </div>
      <div class="fw-set-row">
        <span class="k">{{ t('accentColor') }}</span>
        <span class="fw-set-accent">
          <el-color-picker v-model="prefs.accentColor" size="small" :predefine="predefColors" popper-class="fw-set-popper" @change="onAccentChange" />
          <el-button v-if="prefs.accentColor" text size="small" class="fw-set-accent-reset" @click="resetAccent">{{ t('accentReset') }}</el-button>
        </span>
      </div>
      <div class="fw-set-row">
        <span class="k">{{ t('fontSize') }}</span>
        <el-select
          v-model="prefs.fontSize"
          size="small"
          class="fw-set-select"
          popper-class="fw-set-popper"
          @change="changed"
        >
          <el-option :value="12" :label="t('fontSizeSm')" />
          <el-option :value="13" :label="t('fontSizeMd')" />
          <el-option :value="14" :label="t('fontSizeLg')" />
          <el-option :value="16" :label="t('fontSizeXl')" />
        </el-select>
      </div>
      <div class="fw-set-row">
        <span class="k">{{ t('fontFamily') }}</span>
        <el-select
          v-model="prefs.fontFamily"
          size="small"
          class="fw-set-select"
          popper-class="fw-set-popper"
          clearable
          :placeholder="t('fontDefault')"
          @change="changed"
        >
          <el-option value="default" :label="t('fontDefault')" />
          <el-option value="'Segoe UI', 'Microsoft YaHei', system-ui" :label="t('fontOptionYahei')" />
          <el-option value="Consolas" :label="t('fontOptionConsolas')" />
          <el-option value="'Courier New', monospace" :label="t('fontOptionCourier')" />
          <el-option value="Georgia, 'Times New Roman', serif" :label="t('fontOptionGeorgia')" />
        </el-select>
      </div>
      <div class="fw-set-row">
        <span class="k">{{ t('themeMode') }}</span>
        <el-select
          v-model="prefs.theme"
          size="small"
          class="fw-set-select"
          popper-class="fw-set-popper"
          @change="changed"
        >
          <el-option value="auto" :label="t('themeAuto')" />
          <el-option value="dark" :label="t('themeDark')" />
          <el-option value="light" :label="t('themeLight')" />
        </el-select>
      </div>
      <div class="fw-set-row">
        <span class="k">{{ t('defaultView') }}</span>
        <el-select
          v-model="prefs.view"
          size="small"
          class="fw-set-select"
          popper-class="fw-set-popper"
          @change="onDefaultViewChange"
        >
          <el-option value="details" :label="t('viewDetails')" />
          <el-option value="content" :label="t('viewContent')" />
          <el-option value="tiles" :label="t('viewTiles')" />
          <el-option value="list" :label="t('viewList')" />
          <el-option value="small" :label="t('viewSmall')" />
          <el-option value="medium" :label="t('viewMedium')" />
          <el-option value="large" :label="t('viewLarge')" />
          <el-option value="huge" :label="t('viewHuge')" />
        </el-select>
      </div>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { prefs, savePrefs, resetFolderViews } from "../../composables/core/settings";
import { useI18n } from "../../composables/core/i18n";

const { t } = useI18n();
const open = ref(false);


/** 预设强调色（多种应用主题常用色）。 */
const predefColors = ["#1f883d", "#238636", "#0969da", "#8250df", "#b35900", "#cf222e", "#0a3069", "#116329"];

/** 颜色改变后仍会触发 el-color-picker 的 clear 事件（值为 null）——在此统一转空串。 */
function onAccentChange(v: unknown): void {
  prefs.accentColor = typeof v === "string" ? v : "";
  savePrefs();
}

function resetAccent(): void {
  prefs.accentColor = "";
  savePrefs();
}

defineExpose({
  open: () => {
    open.value = true;
  },
});

function changed(): void {
  savePrefs();
}

/**
 * 「默认视图」变更：这是全局设置，需要同步到**全部**区域——
 * 清空各目录自己记住的查看方式，于是所有目录/此电脑/回收站都回落到新的默认值。
 * （平时在文件列表里切视图只影响当前目录，不会走到这里。）
 */
function onDefaultViewChange(): void {
  resetFolderViews();
  savePrefs();
}
</script>

<style scoped>
:global(.fw-set-dialog.el-dialog) {
  --el-dialog-bg-color: var(--dsh-bg2, #161b22);
  --el-text-color-primary: var(--dsh-fg, #c9d1d9);
  --el-border-color: var(--dsh-border, #30363d);
  --el-border-radius-base: 8px;
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
}
:global(.fw-set-dialog .el-dialog__header) { margin-right: 0; padding: 12px 16px; border-bottom: 1px solid var(--dsh-border, #30363d); }
:global(.fw-set-dialog .el-dialog__body) { padding: 14px 16px; }
.fw-set-body { display: flex; flex-direction: column; gap: 14px; }
.fw-set-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; font-size: calc(12px * var(--dsh-fs-scale, 1)); }
.fw-set-row .k { color: var(--dsh-fg, #c9d1d9); }
.fw-set-select { width: 150px; }
.fw-set-accent { display: inline-flex; align-items: center; gap: 6px; }
.fw-set-accent-reset { color: var(--dsh-fg-weak, #8b949e); }
/* el-select 下拉面板 Teleport 到 body：插件整体 z-index 极高(2147483000)，默认 2000 会被压到工作台之下，
   故面板需抬升层级并沿用项目主题色，否则选项看似为空/被遮挡。 */
:global(.fw-set-popper) {
  z-index: 2147483200 !important;
  --el-select-dropdown-bg-color: var(--dsh-bg2, #161b22);
  --el-fill-color-blank: var(--dsh-bg2, #161b22);
  --el-fill-color-light: var(--dsh-bg2, #161b22);
  --el-text-color-regular: var(--dsh-fg, #c9d1d9);
  --el-border-color: var(--dsh-border, #30363d);
  --el-border-color-light: var(--dsh-border, #30363d);
  background: var(--dsh-bg2, #161b22);
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 8px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
}
:global(.fw-set-popper .el-select-dropdown__item) {
  color: var(--dsh-fg, #c9d1d9);
  border-radius: 4px;
}
:global(.fw-set-popper .el-select-dropdown__item:hover:not(.is-disabled)) {
  background: var(--dsh-hover, rgba(48, 54, 61, 0.5));
}
:global(.fw-set-popper .el-select-dropdown__item.is-selected) {
  color: var(--dsh-accent, #238636);
}
/* 强调色选择器弹层：与 el-select 同享高 z-index，并为 el-color-dropdown 补充主题化背景。 */
:global(.fw-set-popper .el-color-dropdown) {
  background: var(--dsh-bg2, #161b22);
  border: 1px solid var(--dsh-border, #30363d);
}
:global(.fw-set-popper .el-color-dropdown__value) {
  color: var(--dsh-fg, #c9d1d9);
}
:global(.fw-set-popper .el-color-dropdown__btn) {
  color: var(--dsh-fg, #c9d1d9);
  border-color: var(--dsh-border, #30363d);
}
</style>
