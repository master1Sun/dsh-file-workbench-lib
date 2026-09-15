<template>
  <!-- 右键交由父组件弹菜单（格式化内容等）；CodeMirror 自身的原生菜单不拦截 -->
  <div ref="hostRef" class="vs-code-editor" @contextmenu.prevent.stop="onContextMenu"></div>
</template>

<script setup lang="ts">
/**
 * CodeMirror 6 封装：语法高亮 + 行号 + 折叠 + 查找/替换（basicSetup 自带 searchKeymap，
 * 提供 Ctrl+F / Ctrl+H）+ 主题跟随（深色用 oneDark，浅色用默认浅色主题）。
 *
 * 受控方式：父组件按文件切换时传入新的 path/initialContent；本组件**不销毁重建** EditorView，
 * 而是按 path 在 docCache 中取出/构建对应 EditorState 并 `setState` 就地替换——
 * 因此切换文件标签不再「重新展开」，且每文件的滚动 / 光标 / 撤销栈各自保留。
 *
 * 位置持久化：`initialView` 传入该文件上次的滚动位置与光标偏移，建视图时还原；
 * 滚动 / 光标变化通过 @view 回传父组件（父组件按路径暂存并节流落盘）。
 */
import { onBeforeUnmount, onMounted, ref, shallowRef, watch } from "vue";
import { EditorView, type ViewUpdate } from "@codemirror/view";
import { EditorState, Compartment } from "@codemirror/state";
import { basicSetup } from "codemirror";
import { oneDark } from "@codemirror/theme-one-dark";
import { indentSelection } from "@codemirror/commands";
import { languageExtensionFor } from "./langResolver";
import {
  getEditorStateCache,
  getEditorUpdateSink,
  setEditorUpdateSink,
} from "../../../stores/vscode";

const props = defineProps<{
  /** 当前文件路径（切换即就地替换文档状态，不重建视图）。 */
  path: string;
  /** 所属编辑器实例槽号（与 VSCodeStore 同槽），用于在跨挂载常驻的缓存里按槽隔离状态。 */
  slot: number;
  /** 初始文档内容（仅在首次打开该路径 / 外部重载时使用）。 */
  initialContent: string;
  /**
   * 文档修订号：外部替换了同一路径的内容时由父组件自增，触发整体重建（丢弃缓存的撤销栈与选区）。
   * 用于「外部改动自动重载」与「切换编码重读」——不能只靠 initialContent 变化判断，
   * 因为它不是响应式的文档来源（用户编辑不会回写它）。
   */
  docRev?: number;
  /** 只读（工作区外 / 受保护目录）。 */
  readonly?: boolean;
  /** 是否使用深色主题（oneDark）。 */
  dark?: boolean;
  /** 上次的查看器位置（滚动位置 + 光标偏移），建视图时还原。 */
  initialView?: { scrollTop?: number; anchor?: number };
}>();

const emit = defineEmits<{
  (e: "change", value: string): void;
  (e: "cursor", line: number, col: number): void;
  (e: "view", view: { scrollTop: number; anchor: number }): void;
  (e: "contextmenu", pos: { x: number; y: number }): void;
}>();

/** 编辑器内右键：把屏幕坐标交给父组件弹统一菜单。 */
function onContextMenu(e: MouseEvent): void {
  emit("contextmenu", { x: e.clientX, y: e.clientY });
}

const hostRef = ref<HTMLElement | null>(null);
const view = shallowRef<EditorView | null>(null);
const langCompartment = new Compartment();
const themeCompartment = new Compartment();
const roCompartment = new Compartment();
const editableCompartment = new Compartment();
let gen = 0;
/** 当前视图的滚动监听器（随视图销毁一并摘除）。 */
let scrollHandler: (() => void) | null = null;

/**
 * 每个路径一份 EditorState，切 tab 时按 key 取出复用 —— 不销毁重建视图，
 * 因此切换文件不再「重新展开」，且每文件的滚动 / 光标 / 撤销栈各自保留。
 * 仅在外部重载（docRev）或首次打开时构建新状态。
 *
 * 该缓存**不在组件实例上**，而是取自按槽常驻的模块级 registry（`getEditorStateCache(slot)`）：
 * DSH 右侧栏切换 tab 会整体卸载再重建本组件，实例级缓存会随之丢失、切回时编辑器重新展开；
 * 放进 registry 后状态跨「卸载→重建」存活。按槽隔离，多编辑器窗口互不污染。
 */
const docCache = getEditorStateCache(props.slot ?? 0);

/** 上报当前滚动位置与光标偏移（视图未就绪时静默跳过）。 */
function reportView(): void {
  const v = view.value;
  if (!v) return;
  emit("view", { scrollTop: v.scrollDOM.scrollTop, anchor: v.state.selection.main.head });
}

/**
 * 本实例的更新分发器：文档 / 选区变化时回传父组件（父组件据此更新 buffers 与光标）。
 * 通过按槽的 sink 表暴露给「跨挂载复用的 EditorState 的 updateListener」调用 ——
 * 始终作用在**当前实例**上，避免重建后写进旧实例的 buffers。
 */
function handleUpdate(raw: unknown): void {
  const u = raw as ViewUpdate;
  if (u.docChanged) {
    emit("change", u.state.doc.toString());
    // 用户编辑后实时把最新状态写回缓存，下次切回该文件即恢复（含撤销栈）。
    if (props.path) docCache.set(props.path, u.state);
  }
  if (u.selectionSet || u.docChanged) {
    const head = u.state.selection.main.head;
    const line = u.state.doc.lineAt(head);
    emit("cursor", line.number, head - line.from + 1);
    reportView();
  }
}

function buildState(doc: string): EditorState {
  // 还原光标：把持久化偏移夹到文档长度内。
  const anchor = Math.max(0, Math.min(doc.length, props.initialView?.anchor ?? 0));
  return EditorState.create({
    doc,
    selection: { anchor },
    extensions: [
      basicSetup,
      langCompartment.of([]),
      themeCompartment.of(props.dark ? oneDark : []),
      roCompartment.of(EditorState.readOnly.of(!!props.readonly)),
      editableCompartment.of(EditorView.editable.of(!props.readonly)),
      // 注意：本 listener 随 EditorState 一起被跨挂载复用，**不能**直接闭包本实例的 props/emit，
      // 否则重建后编辑事件会打到已销毁的旧实例（父组件收不到 change → 保存写旧内容）。
      // 改为按 slot 转发到「当前实例」的分发器（见 getEditorUpdateSink）。
      EditorView.updateListener.of((u) => getEditorUpdateSink(props.slot ?? 0)?.(u)),
    ],
  });
}

/** 取某路径的状态：已缓存则复用（含用户编辑后的文档与选区），否则按初始内容构建并缓存。 */
function stateFor(path: string): EditorState {
  const cached = docCache.get(path);
  if (cached) return cached;
  const s = buildState(props.initialContent ?? "");
  docCache.set(path, s);
  return s;
}

/** 异步加载并应用语言高亮（动态 import 语言包）。 */
async function loadLanguage(): Promise<void> {
  const myGen = gen;
  const exts = await languageExtensionFor(props.path);
  if (myGen !== gen || !view.value) return;
  view.value.dispatch({ effects: langCompartment.reconfigure(exts) });
}

/** 还原滚动位置（等一帧让布局完成，否则 scrollTop 会被重置）。 */
function restoreScroll(v: EditorView): void {
  const top = props.initialView?.scrollTop ?? 0;
  if (top > 0) {
    requestAnimationFrame(() => {
      if (view.value === v) v.scrollDOM.scrollTop = top;
    });
  }
}

/**
 * 把当前主题 / 只读态重新对齐到一个视图。
 * 缓存的 EditorState 可能带着**上次挂载时**的 compartment 值，重建后需按当前 props 复位。
 */
function applyEnv(v: EditorView): void {
  v.dispatch({
    effects: [
      themeCompartment.reconfigure(props.dark ? oneDark : []),
      roCompartment.reconfigure(EditorState.readOnly.of(!!props.readonly)),
      editableCompartment.reconfigure(EditorView.editable.of(!props.readonly)),
    ],
  });
}

/** 在容器内创建新的 EditorView（首次挂载某路径时调用）。 */
function createView(): void {
  if (!hostRef.value) return;
  gen++;
  const v = new EditorView({ state: stateFor(props.path), parent: hostRef.value });
  view.value = v;
  applyEnv(v);
  restoreScroll(v);
  scrollHandler = () => reportView();
  v.scrollDOM.addEventListener("scroll", scrollHandler, { passive: true });
  void loadLanguage();
}

/** 切到新路径：复用/构建该路径状态，setState 就地替换（不销毁视图，无闪动）。 */
function swapTo(path: string): void {
  const v = view.value;
  if (!v) return;
  // 先把当前路径的最新状态写回缓存（含用户编辑后的文档与选区）。
  if (props.path) docCache.set(props.path, v.state);
  gen++;
  v.setState(stateFor(path));
  applyEnv(v);
  restoreScroll(v);
  void loadLanguage();
}

/** 摘除当前视图的滚动监听器。 */
function detachScroll(): void {
  const v = view.value;
  if (v && scrollHandler) v.scrollDOM.removeEventListener("scroll", scrollHandler);
  scrollHandler = null;
}

/** 让编辑器获得焦点（外部 Ctrl+S 等场景可选调用）。 */
function focus(): void {
  view.value?.focus();
}

/**
 * 跳转到指定行（1 起始）：选中该行、滚动到视口中间并短暂高亮。
 * 供左栏「搜索」结果点击跳转用；行号越界时夹到文档范围内。
 */
function revealLine(ln: number): void {
  const v = view.value;
  if (!v) return;
  const doc = v.state.doc;
  const line = doc.line(Math.max(1, Math.min(doc.lines, ln)));
  v.dispatch({
    selection: { anchor: line.from, head: line.to },
    effects: EditorView.scrollIntoView(line.from, { y: "center" }),
  });
  v.focus();
  // 短暂高亮：给选中行 DOM 挂类，1.2s 后移除（不引入额外扩展，够用且零依赖）。
  requestAnimationFrame(() => {
    const lineDom = v.domAtPos(line.from).node as HTMLElement | null;
    const el = lineDom instanceof HTMLElement ? (lineDom.closest?.(".cm-line") as HTMLElement | null) : null;
    if (!el) return;
    el.classList.add("cm-flash-line");
    window.setTimeout(() => el.classList.remove("cm-flash-line"), 1200);
  });
}

/**
 * 结构化重排整篇文档（仅对能无损解析的类型；否则返回 null 交给缩进兜底）。
 * 目前 JSON 走 `JSON.parse/stringify` 的 2 空格重排——不引入额外格式化器依赖。
 */
function restructure(text: string): string | null {
  const ext = props.path.slice(props.path.lastIndexOf(".")).toLowerCase();
  if (ext !== ".json") return null;
  try {
    return JSON.stringify(JSON.parse(text), null, 2);
  } catch {
    return null;
  }
}

/**
 * 格式化当前文档：
 *  - JSON：结构化重排（2 空格缩进）；解析失败时退回缩进；
 *  - 其它语言：交给 CodeMirror 自身的语言缩进服务（全选 + `indentSelection`），
 *    由已加载的语言包（JS/HTML/CSS/Python…）按语法重排缩进。
 * @returns 是否执行成功（视图未就绪 / 只读时为 false）。
 */
function format(): boolean {
  const v = view.value;
  if (!v || props.readonly) return false;
  const text = v.state.doc.toString();
  const next = restructure(text);
  if (next !== null) {
    if (next === text) return true;
    v.dispatch({ changes: { from: 0, to: text.length, insert: next } });
    return true;
  }
  // 整篇选中后按语言的缩进规则重排（indentUnit 由各语言包提供）。
  v.dispatch({ selection: { anchor: 0, head: text.length } });
  indentSelection(v);
  return true;
}

defineExpose({ focus, format, revealLine });

onMounted(() => {
  // 先登记本实例的更新分发器，再建视图：跨挂载复用的 EditorState 的 listener 会按槽找到它。
  setEditorUpdateSink(props.slot ?? 0, handleUpdate);
  createView();
});
onBeforeUnmount(() => {
  // 注销本实例的分发器（重建时会登记新实例的）。
  setEditorUpdateSink(props.slot ?? 0, null);
  detachScroll();
  view.value?.destroy();
  view.value = null;
});

// 切换文件：复用/构建该路径状态并就地 setState（不销毁重建），避免「重新展开」。
watch(
  () => props.path,
  (np, op) => {
    if (!np) return;
    if (op && op !== np) swapTo(np);
    else if (!op) createView();
  },
);
// 同一文件内容被外部替换（重载 / 换编码重读）：丢弃缓存并整体重建以重置撤销栈与选区。
watch(
  () => props.docRev,
  () => {
    if (!props.path) return;
    docCache.delete(props.path);
    const v = view.value;
    if (!v) return;
    gen++;
    v.setState(buildState(props.initialContent ?? ""));
    restoreScroll(v);
    void loadLanguage();
  },
);
watch(
  () => props.readonly,
  () => {
    view.value?.dispatch({
      effects: [
        roCompartment.reconfigure(EditorState.readOnly.of(!!props.readonly)),
        editableCompartment.reconfigure(EditorView.editable.of(!props.readonly)),
      ],
    });
  },
);
watch(
  () => props.dark,
  () => {
    view.value?.dispatch({ effects: themeCompartment.reconfigure(props.dark ? oneDark : []) });
  },
);
</script>

<style scoped>
.vs-code-editor {
  height: 100%;
  width: 100%;
  min-height: 0;
  overflow: hidden;
}
.vs-code-editor :deep(.cm-editor) {
  height: 100%;
  font-family: "JetBrains Mono", "Cascadia Code", Consolas, "Courier New", monospace;
  font-size: 13px;
  line-height: 1.5;
}
.vs-code-editor :deep(.cm-scroller) {
  overflow: auto;
  font-family: inherit;
}
.vs-code-editor :deep(.cm-editor.cm-focused) {
  outline: none;
}
/* revealLine 跳转行的短暂高亮 */
.vs-code-editor :deep(.cm-flash-line) {
  background: var(--dsh-accent-weak, rgba(35, 134, 54, 0.3));
}
</style>
