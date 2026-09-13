<template>
  <Teleport to="body">
    <div v-if="open" class="fw-shortcut-mask" @mousedown.self="close">
      <div class="fw-shortcut">
        <div class="fw-shortcut-head">
          <span class="fw-shortcut-title">{{ t('shortcutHelp') }}</span>
          <span class="fw-shortcut-close" :title="t('closeTab')" @click="close">✕</span>
        </div>
        <div class="fw-shortcut-body">
          <section v-for="g in groups" :key="g.title" class="fw-shortcut-group">
            <h4 class="fw-shortcut-group-title">{{ g.title }}</h4>
            <div v-for="row in g.items" :key="row.keys.join()" class="fw-shortcut-row">
              <span class="fw-shortcut-keys">
                <kbd v-for="k in row.keys" :key="k" class="fw-shortcut-kbd">{{ k }}</kbd>
              </span>
              <span class="fw-shortcut-desc">{{ row.label }}</span>
            </div>
          </section>
        </div>
        <div class="fw-shortcut-foot">{{ t('shortcutHint') }}</div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useI18n } from "../../composables/core/i18n";

const { t } = useI18n();
const open = ref(false);

/** 快捷键分组：键组合 + i18n 描述。 */
const groups = computed(() => [
  {
    title: t("shortcutGlobal"),
    items: [{ keys: ["?"], label: t("shGlobalHelp") }],
  },
  {
    title: t("shortcutFileList"),
    items: [
      { keys: ["Ctrl", "A"], label: t("shListSelectAll") },
      { keys: ["Ctrl", "C"], label: t("shListCopy") },
      { keys: ["Ctrl", "X"], label: t("shListCut") },
      { keys: ["Ctrl", "V"], label: t("shListPaste") },
      { keys: ["Ctrl", "F"], label: t("shListFilter") },
      { keys: ["Ctrl", "Shift", "N"], label: t("shListNewFolder") },
      { keys: ["Delete"], label: t("shListDelete") },
      { keys: ["F2"], label: t("shListRename") },
      { keys: ["F5"], label: t("shListRefresh") },
      { keys: ["Enter"], label: t("shListOpen") },
      { keys: ["↑", "↓", "Home", "End"], label: t("shListMove") },
      { keys: ["Backspace"], label: t("shListUp") },
      { keys: ["Alt", "←"], label: t("shListBack") },
      { keys: ["Alt", "→"], label: t("shListForward") },
    ],
  },
]);

/** Esc 关闭（window 级，面板打开期间生效）。 */
watch(open, (v) => {
  if (v) window.addEventListener("keydown", onEsc);
  else window.removeEventListener("keydown", onEsc);
});
function onEsc(e: KeyboardEvent): void {
  if (e.key === "Escape") close();
}

function close(): void {
  open.value = false;
}

defineExpose({ open: () => (open.value = true) });
</script>

<style scoped>
.fw-shortcut-mask {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.35);
  z-index: 2147483000;
}
.fw-shortcut {
  width: 560px;
  max-width: 92vw;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  background: var(--dsh-bg2, #161b22);
  border: 1px solid var(--dsh-border, #30363d);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
}
.fw-shortcut-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid var(--dsh-border, #30363d);
  flex-shrink: 0;
}
.fw-shortcut-title {
  font-size: calc(14px * var(--dsh-fs-scale, 1));
  font-weight: 600;
  color: var(--dsh-fg, #c9d1d9);
}
.fw-shortcut-close {
  color: var(--dsh-fg-weak, #8b949e);
  font-size: calc(13px * var(--dsh-fs-scale, 1));
  padding: 2px 4px;
  cursor: pointer;
}
.fw-shortcut-close:hover { color: var(--dsh-fg, #c9d1d9); }
.fw-shortcut-body {
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding: 10px 16px 4px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.fw-shortcut-group-title {
  margin: 0 0 6px;
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  font-weight: 600;
  color: var(--dsh-accent, #238636);
}
.fw-shortcut-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 4px 0;
}
.fw-shortcut-keys {
  flex: 0 0 132px;
  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;
}
.fw-shortcut-kbd {
  display: inline-block;
  min-width: 20px;
  padding: 2px 6px;
  border: 1px solid var(--dsh-border, #30363d);
  border-bottom-width: 2px;
  border-radius: 4px;
  background: var(--dsh-bg, #0d1117);
  color: var(--dsh-fg, #c9d1d9);
  font-family: Consolas, "Courier New", monospace;
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  text-align: center;
  white-space: nowrap;
}
.fw-shortcut-desc {
  flex: 1;
  min-width: 0;
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  color: var(--dsh-fg, #c9d1d9);
}
.fw-shortcut-foot {
  flex-shrink: 0;
  padding: 8px 16px;
  border-top: 1px solid var(--dsh-border, #30363d);
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  color: var(--dsh-fg-weak, #8b949e);
}
</style>
