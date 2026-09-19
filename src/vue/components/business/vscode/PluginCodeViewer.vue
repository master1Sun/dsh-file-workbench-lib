<script setup lang="ts">
/**
 * 插件源码查看器：全屏浮层内嵌一个轻量 CodeMirror 缓冲区。
 * - 预览（只读）：注册表未安装项经 /plugin-src?k= 拉取 bundle 原文；
 * - 编辑：已安装插件展示快照源码，保存写回记录并立即重载启用（「重新加载」）。
 * 刻意不复用 CodeEditor.vue 的槽位/docCache/minimap——那是 VS Code 面板机制，
 * 这里只需要 basicSetup + 语言高亮 + 主题的最小状态。样式由 pluginManagerView.ts
 * 注入的全局 --pm-* 规则驱动（本组件挂 body，够不到视图内的令牌定义）。
 */
import { onBeforeUnmount, onMounted, ref, shallowRef } from "vue";
import { EditorView, keymap } from "@codemirror/view";
import { EditorState, Compartment } from "@codemirror/state";
import { basicSetup } from "codemirror";
import { oneDark } from "@codemirror/theme-one-dark";
import { languageExtensionFor } from "./langResolver";
import { t } from "../../../composables/core/i18n";
import { confirmDialog } from "../../../composables/core/dialog";

const props = defineProps<{
  /** 显示用文件名（决定语法高亮扩展名与标题）。 */
  filename: string;
  /** 初始源码全文。 */
  code: string;
  /** 是否可编辑（内置种子/注册表预览为只读）。 */
  editable: boolean;
  /** 当前显示的是用户编辑版 → 提供「恢复原版」。 */
  edited?: boolean;
}>();

const emit = defineEmits<{
  (e: "save", code: string): void;
  (e: "reload", code: string): void;
  (e: "restore"): void;
  (e: "close"): void;
}>();

const hostRef = ref<HTMLDivElement>();
const view = shallowRef<EditorView>();
const dirty = ref(false);
const langCompartment = new Compartment();
let keydownHandler: ((e: KeyboardEvent) => void) | undefined;

function onSave(): void {
  if (!view.value || !props.editable || !dirty.value) return;
  emit("save", view.value.state.doc.toString());
}

async function onClose(): Promise<void> {
  if (dirty.value && !(await confirmDialog({ message: t("pmCodeDiscardConfirm") }))) return;
  emit("close");
}

async function onRestore(): Promise<void> {
  if (!(await confirmDialog({ message: t("pmCodeRestoreConfirm") }))) return;
  emit("restore");
}

onMounted(() => {
  if (!hostRef.value) return;
  const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
  window.addEventListener("keydown", onKey);
  keydownHandler = onKey;
  const dark = document.documentElement.dataset.theme === "dark" || document.documentElement.classList.contains("dark");
  const v = new EditorView({
    state: EditorState.create({
      doc: props.code,
      extensions: [
        basicSetup,
        EditorView.lineWrapping,
        langCompartment.of([]),
        EditorState.readOnly.of(!props.editable),
        EditorView.editable.of(props.editable),
        dark ? oneDark : [],
        keymap.of([{ key: "Mod-s", preventDefault: true, run: () => { onSave(); return true; } }]),
        EditorView.updateListener.of((u) => { if (u.docChanged && props.editable) dirty.value = true; }),
      ],
    }),
    parent: hostRef.value,
  });
  view.value = v;
  void languageExtensionFor(props.filename).then((exts) => {
    if (view.value === v) v.dispatch({ effects: langCompartment.reconfigure(exts) });
  });
});

onBeforeUnmount(() => {
  if (keydownHandler) window.removeEventListener("keydown", keydownHandler);
  keydownHandler = undefined;
  view.value?.destroy();
  view.value = undefined;
});
</script>

<template>
  <div class="dsh-pm-viewer-mask" @mousedown.self="onClose">
    <div class="dsh-pm-viewer" role="dialog" :aria-label="filename">
      <div class="dsh-pm-viewer-hdr">
        <span class="dsh-pm-viewer-title">{{ filename }}<span v-if="dirty" class="dsh-pm-viewer-dirty"> •</span></span>
        <span v-if="!editable" class="dsh-pm-viewer-ro">{{ t("pmCodeReadonly") }}</span>
        <div class="dsh-pm-viewer-spacer" />
        <button v-if="editable" type="button" class="dsh-pm-viewer-btn" :disabled="!dirty" @click="onSave">{{ t("pmCodeSave") }}</button>
        <button v-if="editable && edited" type="button" class="dsh-pm-viewer-btn" @click="onRestore">{{ t("pmCodeRestore") }}</button>
        <button v-if="editable" type="button" class="dsh-pm-viewer-btn primary" :disabled="!dirty" @click="emit('reload', view?.state.doc.toString() ?? '')">{{ t("pmCodeReload") }}</button>
        <button type="button" class="dsh-pm-viewer-x" :title="t('pmCodeClose')" @click="onClose">×</button>
      </div>
      <div ref="hostRef" class="dsh-pm-viewer-editor" />
    </div>
  </div>
</template>
