<template>
  <!-- 右键交由父组件弹菜单（格式化内容等）；CodeMirror 自身的原生菜单不拦截 -->
  <div class="vs-ce-root" @contextmenu.prevent.stop="onContextMenu">
    <div ref="hostRef" class="vs-code-editor"></div>
    <!-- 查找 / 替换浮层（Ctrl+F / Ctrl+H）：右上角悬浮，Enter / Shift+Enter 上下切换，Esc 关闭 -->
    <div v-if="findOpen" class="vs-find">
      <div class="vs-find-row">
        <input
          ref="findInputRef"
          v-model="findQ"
          class="vs-find-input"
          :placeholder="t('vsFindPlaceholder')"
          @input="pushQuery"
          @keydown.enter.prevent="findShift($event.shiftKey)"
          @keydown.esc.prevent="closeFind"
        />
        <span class="vs-find-count">{{ matchLabel }}</span>
        <button class="vs-find-btn" :class="{ on: optCase }" :title="t('vsGrepCase')" @click="toggleOpt('case')">Aa</button>
        <button class="vs-find-btn" :class="{ on: optRe }" :title="t('vsGrepRegex')" @click="toggleOpt('re')">.*</button>
        <button class="vs-find-btn" :class="{ on: optWord }" :title="t('vsFindWord')" @click="toggleOpt('word')">|w|</button>
        <span class="vs-find-vsep"></span>
        <button class="vs-find-btn" :title="t('vsFindPrev')" @click="goPrev">↑</button>
        <button class="vs-find-btn" :title="t('vsFindNext')" @click="goNext">↓</button>
        <button class="vs-find-btn" :class="{ on: replaceOpen }" :title="t('vsFindToggleReplace')" @click="replaceOpen = !replaceOpen">⇅</button>
        <button class="vs-find-btn" :title="t('vsFindClose')" @click="closeFind">×</button>
      </div>
      <div v-if="replaceOpen" class="vs-find-row">
        <input
          v-model="replaceQ"
          class="vs-find-input"
          :placeholder="t('vsReplacePlaceholder')"
          @keydown.enter.prevent="doReplace"
          @keydown.esc.prevent="closeFind"
        />
        <button class="vs-find-btn" :title="t('vsFindReplace')" @click="doReplace">⏎</button>
        <button class="vs-find-btn" :title="t('vsFindReplaceAll')" @click="doReplaceAll">≡</button>
      </div>
    </div>
  </div>
</template>

<!--
 * 模块级（跨挂载常驻）状态：把 EditorView 实例从组件实例上「剥离」到模块级表，
 * 使切换 DSH 右侧 tab 导致的「卸载 → 重建」不再销毁/重建视图（否则表现为折叠后再展开的闪动）。
 * 见同文件下方 <script setup> 内的 createView / onBeforeUnmount。
 -->
<script lang="ts">
import { acquireVSCodeSlot } from "../../../stores/vscode";
import { Prec } from "@codemirror/state";
import { keymap } from "@codemirror/view";

/**
 * 查找/替换浮层的**跨实例控制器**：Ctrl+F/H 的快捷键扩展随 EditorState 一起被跨挂载复用
 * （docCache 按 slot 常驻），不能闭包某个实例的 refs —— 与 updateListener 同样的陷阱。
 * 这里让每个实例挂载时登记自己的 findApi（见 <script setup> onMounted），静态 keymap
 * 永远调用「当前实例」的实现；未挂载实例的旧扩展调用是无害的空操作。
 */
interface EditorFindApi {
  openFind(withReplace: boolean): void;
  /** 关闭浮层；返回 true 表示此前是打开的（供 Escape keymap 决定是否吞掉按键）。 */
  closeFind(): boolean;
}
let activeFindApi: EditorFindApi | null = null;

/** Ctrl+F / Ctrl+H / Escape：接管 CodeMirror 自带的搜索面板，交给自绘浮层。 */
const findKeymapExt = Prec.highest(
  keymap.of([
    { key: "Mod-f", run: () => (activeFindApi?.openFind(false), true) },
    { key: "Mod-h", run: () => (activeFindApi?.openFind(true), true) },
    { key: "Escape", run: () => activeFindApi?.closeFind() ?? false },
  ]),
);

/** minimap 容器 DOM（@replit/codemirror-minimap 的 create 钩子要求宿主自备容器）。 */
function makeMinimapDom(): HTMLElement {
  const d = document.createElement("div");
  d.className = "vs-minimap";
  return d;
}

/**
 * 跨挂载常驻的「活编辑器视图」：键 = 槽号，值 = 当前挂载的 EditorView 与其所在路径。
 *
 * 背景：DSH 右侧栏切换 tab 会把整个 VSCodePane 的 Vue 应用卸载再重建（React 桥卸载），
 * 若 EditorView 随组件卸载被 destroy，切回时编辑器要从缓存状态**重新建视图**——表现为
 * 「折叠后再展开」的闪动（容器高度从 0 重新测量）。这里把视图实例从组件实例上「剥离」：
 * 卸载时只把它的 DOM 从宿主里摘下、存进模块级表；重挂载时把同一份 DOM 重新挂回新宿主，
 * **不重建视图**，于是完全没有闪动，且滚动 / 光标 / 选区 / 撤销栈原样保留。
 *
 * 仅在「真正关闭」该编辑器 tab（tab.signal 中止，见 RightPaneBridge）时才 dispose 掉视图，
 * 避免内存泄漏；切走再切回属于「卸载-重挂载」，视图要保留复用。
 */
/**
 * 跨挂载保留的视图只需用到这两个方法（detach 后重新挂回 + 真正关闭时释放），
 * 这里用最小接口声明，避免与 <script setup> 里对 `EditorView` 的 value 导入重复声明。
 */
interface StoredEditorView {
  dom: HTMLElement;
  destroy(): void;
}

const liveEditorViews = new Map<number, { view: StoredEditorView; path: string }>();
/** 已被真正关闭的槽：其视图要么已销毁、要么不该再被本次卸载误存（见 onBeforeUnmount 的守卫）。 */
const disposedEditorSlots = new Set<number>();

/** 真正关闭某编辑器 tab（由桥接层在 tab.signal 中止时调用）：销毁该槽残留的活视图。 */
function disposeEditorSlotByTabId(tabId: string): void {
  const slot = acquireVSCodeSlot(tabId);
  const rec = liveEditorViews.get(slot);
  if (rec) {
    try {
      rec.view.destroy();
    } catch {
      /* 视图可能已是 detached 状态，忽略 */
    }
    liveEditorViews.delete(slot);
  }
  disposedEditorSlots.add(slot);
}

// 跨 bundle 暴露给 React 桥接层（RightPaneBridge）：它拿得到 tab id 但无法 import 本模块。
if (typeof window !== "undefined") {
  (window as unknown as Record<string, unknown>).__dshFWDisposeEditorSlotByTabId = disposeEditorSlotByTabId;
}
</script>

<script setup lang="ts">
/**
 * CodeMirror 6 封装：语法高亮 + 行号 + 折叠 + 查找/替换（basicSetup 自带 searchKeymap，
 * 提供 Ctrl+F / Ctrl+H）+ 主题跟随（深色用 oneDark，浅色用默认浅色主题）。
 *
 * 受控方式：父组件按文件切换时传入新的 path/initialContent；本组件**不销毁重建** EditorView，
 * 而是按 path 在 docCache 中取出/构建对应 EditorState 并 `setState` 就地替换——
 * 因此切换文件标签不再「重新展开」，且每文件的滚动 / 光标 / 撤销栈各自保留。
 *
 * 跨挂载保活：DSH 右侧栏切换 tab 会把整个 VSCodePane 卸载再重建，本组件把 EditorView 实例存进
 * 模块级 `liveEditorViews`（按槽），卸载时不 destroy、只把视图 DOM 摘下，重挂载时把同一份 DOM
 * 挂回新宿主——因此切走再切回**不再折叠后展开**，滚动 / 光标 / 选区 / 撤销栈原样保留。
 *
 * 位置持久化：`initialView` 传入该文件上次的滚动位置与光标偏移，建视图时还原；
 * 滚动 / 光标变化通过 @view 回传父组件（父组件按路径暂存并节流落盘）。
 */
import { onBeforeUnmount, onMounted, nextTick, ref, shallowRef, watch, computed } from "vue";
import { EditorView, type ViewUpdate } from "@codemirror/view";
import { EditorState, Compartment } from "@codemirror/state";
import { basicSetup } from "codemirror";
import { oneDark } from "@codemirror/theme-one-dark";
import { indentSelection } from "@codemirror/commands";
import {
  search,
  setSearchQuery,
  SearchQuery,
  findNext,
  findPrevious,
  replaceNext,
  replaceAll,
} from "@codemirror/search";
import { showMinimap } from "@replit/codemirror-minimap";
import { languageExtensionFor } from "./langResolver";
import { t } from "../../../composables/core/i18n";
import { formatCss, formatXml } from "../../../composables/domain/reformat";
import { prefs } from "../../../composables/core/settings";
import {
  getEditorStateCache,
  getEditorUpdateSink,
  setEditorUpdateSink,
  getVSCodeStore,
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
const minimapCompartment = new Compartment();
let gen = 0;
/** 当前视图的滚动监听器（随视图销毁一并摘除）。 */
let scrollHandler: (() => void) | null = null;

/* ---------- 查找 / 替换浮层（自绘 UI，搜索与高亮交给 @codemirror/search） ---------- */
const findOpen = ref(false);
const replaceOpen = ref(false);
const findQ = ref("");
const replaceQ = ref("");
const optCase = ref(false);
const optRe = ref(false);
const optWord = ref(false);
const matchTotal = ref(0);
const matchIndex = ref(-1);
const findInputRef = ref<HTMLInputElement | null>(null);

const matchLabel = computed<string>(() => {
  if (!findQ.value) return "";
  if (matchTotal.value === 0) return t("vsFindNoMatch");
  return `${matchIndex.value < 0 ? "?" : matchIndex.value}/${matchTotal.value}`;
});

function currentQuery(): SearchQuery {
  return new SearchQuery({
    search: findQ.value,
    replace: replaceQ.value,
    caseSensitive: optCase.value,
    regexp: optRe.value,
    wholeWord: optWord.value,
  });
}

/** 把查询条件下发到编辑器（搜索扩展据此高亮全部命中）并重算匹配计数。 */
function pushQuery(): void {
  const v = view.value;
  if (!v) return;
  v.dispatch({ effects: setSearchQuery.of(currentQuery()) });
  refreshMatches();
}

/** 重算「第几处 / 共几处」：以光标位置为基准取其后的第一个命中为当前项。 */
function refreshMatches(): void {
  const v = view.value;
  if (!v || !findQ.value) {
    matchTotal.value = 0;
    matchIndex.value = -1;
    return;
  }
  const q = currentQuery();
  const head = v.state.selection.main.head;
  let total = 0;
  let idx = -1;
  const cursor = q.getCursor(v.state.doc);
  for (let r = cursor.next(); !r.done; r = cursor.next()) {
    total += 1;
    if (idx < 0 && r.value.from >= head) idx = total;
  }
  if (idx < 0 && total > 0) idx = 1; // 光标在最后一个命中之后：回到第一个
  matchTotal.value = total;
  matchIndex.value = idx;
}

function goNext(): void {
  const v = view.value;
  if (v) findNext(v);
  refreshMatches();
}
function goPrev(): void {
  const v = view.value;
  if (v) findPrevious(v);
  refreshMatches();
}
function findShift(back: boolean): void {
  if (back) goPrev();
  else goNext();
}
function doReplace(): void {
  const v = view.value;
  if (v) replaceNext(v);
  refreshMatches();
}
function doReplaceAll(): void {
  const v = view.value;
  if (v) replaceAll(v);
  refreshMatches();
}
function toggleOpt(k: "case" | "re" | "word"): void {
  if (k === "case") optCase.value = !optCase.value;
  else if (k === "re") optRe.value = !optRe.value;
  else optWord.value = !optWord.value;
  pushQuery();
}

function openFind(withReplace: boolean): void {
  findOpen.value = true;
  if (withReplace) replaceOpen.value = true;
  // 有选中文本时以其作为初始查找词（单行、短文本才自动带入）。
  const v = view.value;
  if (v) {
    const sel = v.state.selection.main;
    if (!sel.empty && sel.to - sel.from <= 200) {
      const text = v.state.doc.sliceString(sel.from, sel.to);
      if (!text.includes("\n")) findQ.value = text;
    }
  }
  pushQuery();
  void nextTick(() => findInputRef.value?.select());
}
function closeFind(): boolean {
  const was = findOpen.value;
  findOpen.value = false;
  replaceOpen.value = false;
  matchTotal.value = 0;
  matchIndex.value = -1;
  const v = view.value;
  // 清除高亮：下发空查询。
  if (v && was) v.dispatch({ effects: setSearchQuery.of(new SearchQuery({ search: "" })) });
  v?.focus();
  return was;
}

/**
 * 每个路径一份 EditorState，切 tab 时按 key 取出复用 —— 不销毁重建视图，
 * 因此切换文件不再「重新展开」，且每文件的滚动 / 光标 / 撤销栈各自保留。
 * 仅在外部重载（docRev）或首次打开时构建新状态。
 *
 * 该缓存**不在组件实例上**，而是取自按槽常驻的模块级 registry（`getEditorStateCache(slot)`）：
 * DSH 右侧栏切换 tab 会整体卸载再重建本组件，实例级缓存会随之丢失、切回时编辑器重新展开；
 * 放进 registry 后状态跨「卸载→重建」存活。按槽隔离，多编辑器窗口互不污染。
 */
const slot = props.slot ?? 0;
const docCache = getEditorStateCache(slot);

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
    // 查找面板打开时文档被编辑（含「全部替换」）：刷新匹配计数。
    if (findOpen.value) refreshMatches();
  }
  if (u.selectionSet || u.docChanged) {
    const head = u.state.selection.main.head;
    const line = u.state.doc.lineAt(head);
    emit("cursor", line.number, head - line.from + 1);
    reportView();
  }
}

/** minimap 扩展（块状缩略渲染）；prefs.vsMinimap 为 false 时不配置。 */
function minimapExtension() {
  return showMinimap.of({ create: () => ({ dom: makeMinimapDom() }), displayText: "blocks" });
}

function buildState(doc: string): EditorState {
  // 还原光标：把持久化偏移夹到文档长度内。
  const anchor = Math.max(0, Math.min(doc.length, props.initialView?.anchor ?? 0));
  return EditorState.create({
    doc,
    selection: { anchor },
    extensions: [
      basicSetup,
      // 搜索状态与命中高亮：自绘浮层只负责 UI，setSearchQuery 驱动它（不打开其自带面板）。
      search(),
      // Ctrl+F / Ctrl+H / Escape 接管（见模块作用域 findKeymapExt 注释）。
      findKeymapExt,
      // 右侧 minimap（块状显示），可在编辑器右键菜单中开关。
      minimapCompartment.of(prefs.vsMinimap ? minimapExtension() : []),
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
 * 把当前主题 / 只读态 / minimap 重新对齐到一个视图。
 * 缓存的 EditorState 可能带着**上次挂载时**的 compartment 值，重建后需按当前 props/prefs 复位。
 */
function applyEnv(v: EditorView): void {
  v.dispatch({
    effects: [
      themeCompartment.reconfigure(props.dark ? oneDark : []),
      roCompartment.reconfigure(EditorState.readOnly.of(!!props.readonly)),
      editableCompartment.reconfigure(EditorView.editable.of(!props.readonly)),
      minimapCompartment.reconfigure(prefs.vsMinimap ? minimapExtension() : []),
    ],
  });
}

/** 在容器内创建（或复用）EditorView。存在跨卸载保留的活视图且路径一致时，直接把同一份 DOM 重新挂回新宿主（不重建，无闪动）。 */
function createView(): void {
  const host = hostRef.value;
  if (!host) return;
  const existing = liveEditorViews.get(slot);
  if (existing && existing.view.dom && existing.path === props.path) {
    // 复用跨卸载保留的视图：DOM 重新挂回新宿主，避免「折叠后再展开」的闪动。
    const v = existing.view as unknown as EditorView;
    gen++;
    view.value = v;
    liveEditorViews.delete(slot);
    host.appendChild(v.dom);
    applyEnv(v);
    restoreScroll(v);
    scrollHandler = () => reportView();
    v.scrollDOM.addEventListener("scroll", scrollHandler, { passive: true });
    // 重新挂回后强制重新测量（DOM 经过 detach/attach，高度可能尚未刷新），避免残留折叠态。
    requestAnimationFrame(() => {
      if (view.value === v) v.requestMeasure();
    });
    void loadLanguage();
    return;
  }
  // 路径不符（极少见）：旧活视图已失效，销毁以免泄漏，再建新的。
  if (existing) {
    try {
      existing.view.destroy();
    } catch {
      /* ignore */
    }
    liveEditorViews.delete(slot);
  }
  gen++;
  const v = new EditorView({ state: stateFor(props.path), parent: host });
  view.value = v;
  applyEnv(v);
  restoreScroll(v);
  scrollHandler = () => reportView();
  v.scrollDOM.addEventListener("scroll", scrollHandler, { passive: true });
  void loadLanguage();
}

/**
 * 切到新路径：复用/构建该路径状态，setState 就地替换（不销毁视图，无闪动）。
 *
 * ⚠️ 必须把「切换前」那一路的状态写回**旧路径**的缓存键，绝不能写 `props.path`：
 * 本函数由 `props.path` 的 watcher 触发，回调里 `props.path` 已是新路径。
 * 若误写成 `docCache.set(props.path, …)`，会把旧文件状态塞进新路径键，
 * 紧接着 `stateFor(newPath)` 又把这个被污染的键读出来 setState —— 于是编辑器
 * 永远显示「上一文件」的内容（切 Tab 不换内容，且污染随每次切换累积、越切越乱）。
 * 旧路径由 watcher 以 `op` 形式传入，这里用它做缓存键。
 */
function swapTo(oldPath: string, newPath: string): void {
  const v = view.value;
  if (!v) return;
  // 把「切换前」那一路的最新状态写回缓存（含用户编辑后的文档与选区），键 = 旧路径。
  // ⛔ 但旧路径若是刚被「不保存关闭」的标签（已不在 openTabs 里），绝不能写回 ——
  // 否则用户丢弃的内容会留在缓存里，重开同路径时被 stateFor 复用，看起来就像「不保存却被保存了」。
  if (oldPath && oldPath !== newPath) {
    let open = true; // 找不到所属 store（独立调试等）时保守地保留原行为
    try {
      open = getVSCodeStore(slot).state.openTabs.includes(oldPath);
    } catch {
      /* ignore */
    }
    if (open) docCache.set(oldPath, v.state);
    else docCache.delete(oldPath);
  }
  gen++;
  v.setState(stateFor(newPath));
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
 * 按扩展名选择轻量格式化器（零依赖、失败返回 null 交给语法缩进兜底）：
 *  - CSS 系（css/scss/less）：花括号层级重排；
 *  - HTML/XML 系（html/htm/xhtml/xml/svg/vue）：标签层级重排（svg/xml 不启用 void/内联 HTML 规则）。
 */
function lightFormatterFor(ext: string): ((text: string) => string | null) | null {
  if ([".css", ".scss", ".less"].includes(ext)) return formatCss;
  if ([".html", ".htm", ".xhtml", ".xml", ".svg", ".vue"].includes(ext)) {
    return (text: string) => formatXml(text, ext !== ".xml" && ext !== ".svg");
  }
  return null;
}

/**
 * 格式化当前文档，按格式分级处理：
 *  ① JSON：结构化重排（2 空格缩进）；
 *  ② CSS 系 / HTML·XML 系：轻量层级重排（见 lightFormatterFor）；
 *  ③ 其它语言（JS/TS/Python/Java…）：CodeMirror 语言缩进兜底（全选 + indentSelection，
 *     由已加载的语言包按语法重排缩进）。
 * @returns 是否执行成功（视图未就绪 / 只读时为 false）。
 */
function format(): boolean {
  const v = view.value;
  if (!v || props.readonly) return false;
  const text = v.state.doc.toString();
  const ext = props.path.slice(props.path.lastIndexOf(".")).toLowerCase();
  // ① JSON 结构化重排
  if (ext === ".json") {
    const next = restructure(text);
    if (next !== null) {
      if (next === text) return true;
      v.dispatch({ changes: { from: 0, to: text.length, insert: next } });
      return true;
    }
  } else {
    // ② 轻量层级重排（异常结构返回 null，落到 ③）
    const light = lightFormatterFor(ext)?.(text);
    if (light !== null && light !== undefined) {
      if (light === text) return true;
      v.dispatch({ changes: { from: 0, to: text.length, insert: light } });
      return true;
    }
  }
  // ③ 兜底：整篇选中后按语言的缩进规则重排（indentUnit 由各语言包提供）。
  v.dispatch({ selection: { anchor: 0, head: text.length } });
  indentSelection(v);
  return true;
}

defineExpose({ focus, format, revealLine, openFind });

onMounted(() => {
  // 先登记本实例的更新分发器与查找控制器，再建视图：跨挂载复用的 EditorState 的
  // listener / keymap 都按槽（模块级表）找到「当前实例」。
  setEditorUpdateSink(props.slot ?? 0, handleUpdate);
  activeFindApi = {
    openFind: (w) => openFind(w),
    closeFind: () => closeFind(),
  };
  createView();
});
onBeforeUnmount(() => {
  // 注销本实例的分发器与查找控制器（重建时会登记新实例的）。
  setEditorUpdateSink(slot, null);
  if (activeFindApi) activeFindApi = null;
  detachScroll();
  // 真正关闭该编辑器 tab（tab.signal 中止 → disposedEditorSlots 已登记）时销毁视图，释放内存。
  if (disposedEditorSlots.has(slot)) {
    view.value?.destroy();
    view.value = null;
    return;
  }
  // 切走再切回：把活视图从宿主里摘下、存进模块级表，重挂载时重新挂回（不重建、无闪动）。
  // 注意：不要 destroy——DOM 由 liveEditorViews 持有，重挂载时 appendChild 回新宿主即可。
  if (view.value) {
    liveEditorViews.set(slot, { view: view.value as unknown as StoredEditorView, path: props.path });
  }
  view.value = null;
});

// 切换文件：复用/构建该路径状态并就地 setState（不销毁重建），避免「重新展开」。
// 注意：把「旧路径」(op) 一并交给 swapTo 做缓存键 —— 切文件瞬间 props.path 已是新值，
// 直接用 props.path 当键会把旧文件状态误写进新路径键（详见 swapTo 注释）。
watch(
  () => props.path,
  (np, op) => {
    if (!np) return;
    if (op && op !== np) swapTo(op, np);
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
// Minimap 开关（编辑器右键菜单）：即时重配置当前视图。
watch(
  () => prefs.vsMinimap,
  () => {
    view.value?.dispatch({ effects: minimapCompartment.reconfigure(prefs.vsMinimap ? minimapExtension() : []) });
  },
);
</script>

<style scoped>
.vs-ce-root {
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  min-height: 0;
  min-width: 0;
  overflow: hidden;
}
.vs-code-editor {
  flex: 1 1 auto;
  min-width: 0;
  height: 100%;
  width: 100%;
  min-height: 0;
  overflow: hidden;
}
/* minimap 容器：包一层弱化边框，主题色跟随 */
.vs-ce-root :deep(.vs-minimap) {
  border-left: 1px solid var(--dsh-border, #30363d);
  background: var(--dsh-bg, #0d1117);
  opacity: 0.85;
}
/* ── 查找 / 替换浮层 ── */
.vs-find {
  position: absolute;
  top: 6px;
  right: 12px;
  z-index: 20;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 6px;
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 6px;
  background: var(--dsh-bg2, #161b22);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  animation: vs-find-in 0.12s ease-out;
}
@keyframes vs-find-in {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.vs-find-row {
  display: flex;
  align-items: center;
  gap: 4px;
}
.vs-find-input {
  width: 200px;
  height: 24px;
  padding: 0 8px;
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 4px;
  background: var(--dsh-bg, #0d1117);
  color: var(--dsh-fg, #c9d1d9);
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  outline: none;
  box-sizing: border-box;
}
.vs-find-input:focus {
  border-color: var(--dsh-accent, #2f81f7);
}
.vs-find-count {
  flex: 0 0 auto;
  min-width: 40px;
  text-align: center;
  color: var(--dsh-fg-weak, #8b949e);
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  white-space: nowrap;
}
.vs-find-btn {
  flex: 0 0 auto;
  width: 22px;
  height: 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: var(--dsh-fg-weak, #8b949e);
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  cursor: pointer;
  transition: background 0.12s, color 0.12s;
}
.vs-find-btn:hover {
  background: var(--dsh-hover, rgba(255, 255, 255, 0.08));
  color: var(--dsh-fg, #c9d1d9);
}
.vs-find-btn.on {
  color: var(--dsh-accent, #2f81f7);
  background: var(--dsh-accent-weak, rgba(47, 129, 247, 0.14));
}
.vs-find-vsep {
  width: 1px;
  height: 14px;
  background: var(--dsh-border, #30363d);
  margin: 0 2px;
}
/* ── 行号列（gutter）──
 * 底色比代码区抬一级（bg2），右侧一道分隔线，数字用弱化墨色；全部走 `--dsh-*` 令牌，
 * 白天/黑夜随宿主主题（含「跟随系统」）自动切换，无需在 JS 里按 dark 分支配色。
 * oneDark（深色）与 CodeMirror 默认主题（浅色）自带的 gutter 配色会在这里被覆盖：
 * 主题生成的选择器是 `.ͼn .cm-gutters`（两类），本规则是 `.vs-code-editor[data-v-x] .cm-gutters`
 * （两类 + 属性），优先级更高，两种模式下都稳。
 */
.vs-code-editor :deep(.cm-gutters) {
  background: var(--dsh-bg2, #161b22);
  border-right: 1px solid var(--dsh-border, #30363d);
  color: var(--dsh-fg-weak, #8b949e);
  /* 等宽数字：行号位数变化时列宽不跳动 */
  font-variant-numeric: tabular-nums;
  user-select: none;
}
/* 行号左右留白：与代码首字符拉开距离；min-width 保证 1~5 位数行号列宽恒定。 */
.vs-code-editor :deep(.cm-lineNumbers .cm-gutterElement) {
  padding: 0 12px 0 10px;
  min-width: 32px;
}
/* 当前行行号：悬停面作底 + 主前景色，与代码区当前行高亮呼应 */
.vs-code-editor :deep(.cm-activeLineGutter) {
  background: var(--dsh-hover, rgba(48, 54, 61, 0.5));
  color: var(--dsh-fg, #c9d1d9);
}
.vs-code-editor :deep(.cm-editor) {
  height: 100%;
  font-family: var(--dsh-mono, "SFMono-Regular", "Cascadia Mono", Consolas, "Liberation Mono", Menlo, monospace);
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
  background: var(--dsh-accent-weak, rgba(47, 129, 247, 0.14));
  transition: background 0.4s ease;
}
</style>
