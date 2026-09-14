<template>
  <div ref="rootEl" class="fw-root" :style="rootStyle">
    <!-- 顶部工具栏：导航按钮 + 路径地址栏 + 搜索 + 设置（Win11 文件夹风格） -->
    <win-menu-bar @open-settings="settingsRef?.open()" />

    <!-- 主体：单窗口资源管理器（命令栏 + 导航树 + 文件列表 + 状态栏） -->
    <div class="fw-body">
      <explorer-pane />
    </div>

    <!-- 设置弹窗 -->
    <settings-dialog ref="settingsRef" />

    <!-- 全局确认 / 输入弹窗 -->
    <confirm-dialog />

    <!-- 快捷键帮助面板：全局 ? 键唤起 -->
    <shortcut-help-dialog ref="shortcutRef" />
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watchEffect } from "vue";
import ConfirmDialog from "./components/common/ConfirmDialog.vue";
import SettingsDialog from "./components/settings/SettingsDialog.vue";
import ExplorerPane from "./components/business/explorer/ExplorerPane.vue";
import WinMenuBar from "./components/common/WinMenuBar.vue";
import ShortcutHelpDialog from "./components/common/ShortcutHelpDialog.vue";
import { ensureRoot } from "./stores/workbench";
import { goHome, loadHome, loadDrives, takeInitialLocation, goSessionDir as goSessionDirAction } from "./stores/explorer";
import { useTheme } from "./composables/core/theme";
import { prefs } from "./composables/core/settings";

const rootEl = ref<HTMLElement | null>(null);
useTheme(rootEl);

/**
 * 根元素的字体族/字号由「设置」偏好驱动；空字体族则用默认（--dsh-font，即预定义字体栈）。
 *
 * `--dsh-fs-scale` 是界面字号的缩放系数（以 13px 为设计基准）：组件里所有
 * `font-size` 都已写成 `calc(Npx * var(--dsh-fs-scale, 1))`，因此改「界面字号」
 * 会整体缩放，而不再被组件内硬编码的 px 覆盖（此前改字号几乎看不到变化）。
 */
const rootStyle = computed(() => {
  // 哨兵 "default"（以及空串/纯空白）视为未设置 → 不写 fontFamily，沿用 --dsh-font 默认字体栈。
  const raw = (prefs.fontFamily ?? "").trim();
  const fontFamily = raw && raw !== "default" ? raw : "";
  const size = prefs.fontSize ?? 13;
  return {
    fontFamily: fontFamily ? `${fontFamily}, var(--dsh-font, "Segoe UI", system-ui, sans-serif)` : undefined,
    fontSize: `${size}px`,
    "--dsh-fs-scale": String(size / 13),
  } as Record<string, string | undefined>;
});

// el-dialog / popper 等会被 teleport 到 body，继承不到 .fw-root 上的变量，
// 故同时写到 <html> 上，保证弹窗与浮层里的字号也跟随「界面字号」设置。
watchEffect(() => {
  const size = prefs.fontSize ?? 13;
  document.documentElement.style.setProperty("--dsh-fs-scale", String(size / 13));
});

/** 设置弹窗实例（通过 exposed.open() 打开）。 */
const settingsRef = ref<InstanceType<typeof SettingsDialog> | null>(null);
/** 快捷键帮助面板实例（通过 exposed.open() 打开）。 */
const shortcutRef = ref<InstanceType<typeof ShortcutHelpDialog> | null>(null);

/**
 * 首次定位只做一次：右侧面板切走会卸载、切回会重新挂载（见 RightPaneBridge），
 * 若每次挂载都重新定位，用户切回时就会被强行带回会话工作目录。
 */
onMounted(async () => {
  try {
    await ensureRoot();
  } catch {
    /* root 未设正常，UI 提示选择文件夹 */
  }
  await loadHome();
  // 磁盘列表与导航树的「此电脑」子项同源（带卷标/容量），异步加载不阻塞首屏。
  void loadDrives();
  if (takeInitialLocation()) {
    const ok = await goSessionDirAction();
    if (!ok) await goHome();
  }
  window.addEventListener("keydown", onGlobalKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", onGlobalKeydown);
});

/** 全局快捷键：?（Shift+/）唤起快捷键帮助；输入框内不拦截。 */
function onGlobalKeydown(e: KeyboardEvent): void {
  if (!e.ctrlKey && !e.metaKey && !e.altKey && e.key === "?") {
    const tgt = e.target as HTMLElement | null;
    if (tgt?.closest("input, textarea, select, [contenteditable='true'], .el-input, .el-textarea")) return;
    e.preventDefault();
    shortcutRef.value?.open();
  }
}
</script>

<style scoped>
.fw-root {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  font-family: var(--dsh-font, "Segoe UI", system-ui, sans-serif);
  color: var(--dsh-fg, #c9d1d9);
  background: var(--dsh-bg, #0d1117);
}

.fw-body {
  flex: 1;
  display: flex;
  min-height: 0;
  overflow: hidden;
}
</style>
