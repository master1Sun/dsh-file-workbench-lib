/**
 * 插件装饰工厂（宿主侧，唯一能访问真实 CodeMirror6 的模块）。
 *
 * 背景：workbench 把 `@codemirror/view` / `@codemirror/state` 打进 vendor chunk、未对同源页
 * 导出全局。外部注入插件若自行 `import` CM6 会拿到**不同实例**，其 Decoration/ViewPlugin 与
 * 编辑器实际使用的不是同一份，装饰必然失效。故装饰必须由宿主用真实 CM6 构造，再把结果作为
 * 不透明 Extension 经 extCompartment 注入——对标 VS Code `createTextEditorDecorationType`。
 *
 * 插件只传纯 JSON spec（本文件定义的 DecorationSpec），不接触任何 CM6 类型。
 */
import { EditorView, Decoration, ViewPlugin, WidgetType, lineNumberMarkers, GutterMarker, type ViewUpdate, type DecorationSet } from "@codemirror/view";
import { RangeSetBuilder, StateField, StateEffect, Text, type Extension, type RangeSet } from "@codemirror/state";

/** 语义类别 → 默认样式 class（波浪线/gutter 颜色随主题 token 走）。 */
export type DecorationCategory = "error" | "warning" | "info" | "hint" | "bookmark" | "highlight" | "deprecated";

/** 区间锚点：优先绝对 offset；否则用 (line, character) 行列（1 起始，工厂按文档换算）。 */
export interface DecorationPos {
  /** 绝对字符偏移（给定则忽略 line/character）。 */
  offset?: number;
  /** 行号（1 起始）。 */
  line?: number;
  /** 列（1 起始，配合 line 定位起点；缺省=行首）。 */
  character?: number;
}

/** 单个装饰项。type 决定渲染形态。 */
export interface DecorationItem {
  /** mark=文字标记(波浪线/底色)；gutter=行号槽图标；widget=行尾幽灵文字。 */
  type: "mark" | "gutter" | "widget";
  start: DecorationPos;
  /** mark 的终点；缺省=到行尾。widget/gutter 只用 start。 */
  end?: DecorationPos;
  /** 语义类别，提供默认样式；可被 className 追加覆盖。 */
  category?: DecorationCategory;
  /** hover 提示文本（mark 的 title / widget 的正文 / gutter 的 title）。 */
  message?: string;
  /** 追加的 CSS class（命名空间由插件自带）。 */
  className?: string;
}

export interface DecorationSpec {
  items: DecorationItem[];
}

/* ------------------------------------------------------------------ 样式（注入一次） */

const STYLE_ID = "dsh-plugin-deco-styles";
const CSS = `
.dsh-deco-error   { text-decoration: underline wavy #f85149; text-decoration-skip-ink: none; }
.dsh-deco-warning { text-decoration: underline wavy #d29922; text-decoration-skip-ink: none; }
.dsh-deco-info    { text-decoration: underline wavy #58a6ff; text-decoration-skip-ink: none; }
.dsh-deco-hint    { text-decoration: underline dotted #8b949e; text-decoration-skip-ink: none; }
.dsh-deco-deprecated { text-decoration: line-through; opacity: .7; }
.dsh-deco-highlight { background: rgba(187,128,9,0.25); }
.dsh-deco-widget { color: var(--dsh-fg-dim, #8b949e); font-style: italic; opacity: .85; padding-left: 8px; }
.cm-gutter-marker { cursor: default; }
.cm-gutter-marker.dsh-deco-bookmark { color: #e3b341; font-weight: 700; }
`;

function ensureStyles(): void {
  if (typeof document === "undefined") return;
  if (document.getElementById(STYLE_ID)) return;
  const s = document.createElement("style");
  s.id = STYLE_ID;
  s.textContent = CSS;
  document.head.appendChild(s);
}

function markClass(item: DecorationItem): string {
  const base = item.category ? `dsh-deco-${item.category}` : "";
  return [base, item.className].filter(Boolean).join(" ");
}

/* ------------------------------------------------------------------ 位置换算 */

function clamp(n: number, lo: number, hi: number): number {
  return Math.max(lo, Math.min(hi, n));
}

function resolveOffset(doc: Text, pos: DecorationPos, endOfLine = false): number {
  if (typeof pos.offset === "number") return clamp(pos.offset, 0, doc.length);
  const lineNo = clamp(pos.line ?? 1, 1, doc.lines);
  const line = doc.line(lineNo);
  if (pos.character == null) return endOfLine ? line.to : line.from;
  return clamp(line.from + Math.max(0, pos.character - 1), line.from, line.to);
}

/* ------------------------------------------------------------------ gutter marker */

class Marker extends GutterMarker {
  constructor(readonly elementClass: string, private ch: string, private tip?: string) {
    super();
  }
  toDOM(): Node {
    const d = document.createElement("div");
    d.className = this.elementClass;
    d.textContent = this.ch;
    if (this.tip) d.title = this.tip;
    return d;
  }
  eq(other: GutterMarker): boolean {
    return other instanceof Marker && this.elementClass === other.elementClass && this.ch === other.ch && this.tip === other.tip;
  }
}

/* ------------------------------------------------------------------ widget */

class GhostWidget extends WidgetType {
  constructor(private text: string) {
    super();
  }
  eq(other: GhostWidget): boolean {
    return other instanceof GhostWidget && other.text === this.text;
  }
  toDOM(): HTMLElement {
    const span = document.createElement("span");
    span.className = "dsh-deco-widget";
    span.textContent = this.text;
    return span;
  }
  destroy() {
    /* 无副作用需清理 */
  }
}

/* ------------------------------------------------------------------ gutter 数据源 */

/** 事务效果：spec 变更后强制重算 inline+gutter（reconfigure 扩展本身不触发 docChanged）。 */
export const ReconfigureGutter = StateEffect.define<null>();

function buildGutter(state: EditorView["state"], items: DecorationItem[]): RangeSet<GutterMarker> {
  const doc = state.doc;
  const ranges: { from: number; to: number; marker: Marker }[] = [];
  for (const it of items) {
    if (it.type !== "gutter") continue;
    const off = resolveOffset(doc, it.start);
    const line = doc.lineAt(off);
    const cls = `cm-gutter-marker${it.category ? ` dsh-deco-${it.category}` : ""}${it.className ? ` ${it.className}` : ""}`;
    const ch = it.category === "bookmark" ? "●" : it.message?.[0] ?? "•";
    ranges.push({ from: line.from, to: line.to, marker: new Marker(cls.trim(), ch, it.message) });
  }
  ranges.sort((a, b) => a.from - b.from || a.to - b.to);
  const b = new RangeSetBuilder<GutterMarker>();
  for (const r of ranges) b.add(r.from, r.to, r.marker);
  return b.finish();
}

/** buildDecorationExtension 的返回句柄：extension 注入编辑器；setItems 就地更新内容。 */
export interface Decorator {
  extension: Extension;
  /** 替换当前装饰条目，返回一个需由宿主 view.dispatch({effects}) 应用的效果（触发 inline+gutter 重绘）。 */
  setItems(next: DecorationItem[]): StateEffect<null>;
}

/* ------------------------------------------------------------------ 构建扩展 */

/**
 * 把一份 spec 编译成可注入编辑器的装饰句柄。
 * 闭包持有当前 items：inline/gutter 两个视图层共享同一份数据源，避免模块级串台。
 *
 * @param initial 初始装饰条目。
 */
export function buildDecorationExtension(initial: DecorationItem[]): Decorator {
  ensureStyles();
  let items: DecorationItem[] = initial;

  const inlinePlugin = ViewPlugin.fromClass(
    class {
      decorations: DecorationSet;
      constructor(view: EditorView) {
        this.decorations = buildInline(view.state.doc, items);
      }
      update(u: ViewUpdate) {
        if (u.docChanged || u.viewportChanged || u.transactions.some((t) => t.effects.some((e) => e.is(ReconfigureGutter))))
          this.decorations = buildInline(u.view.state.doc, items);
      }
    },
    { decorations: (v) => v.decorations },
  );

  const gutterInit = StateField.define<RangeSet<GutterMarker>>({
    create: (state) => buildGutter(state, items),
    update(value, tr) {
      if (tr.docChanged || tr.effects.some((e) => e.is(ReconfigureGutter))) return buildGutter(tr.state, items);
      return value;
    },
    provide: (f) => lineNumberMarkers.compute([f], (state) => state.field(f)),
  });

  return {
    extension: [inlinePlugin, gutterInit],
    setItems(next) {
      items = next ?? [];
      return ReconfigureGutter.of(null);
    },
  };
}

/** 构建 mark + widget 两类内联装饰（同一层，需整体有序后一次性 add）。 */
function buildInline(doc: Text, items: DecorationItem[]): DecorationSet {
  const ranges: { from: number; to: number; deco: any }[] = [];
  for (const it of items) {
    if (it.type === "mark") {
      const from = resolveOffset(doc, it.start);
      const to = it.end ? resolveOffset(doc, it.end) : doc.lineAt(from).to;
      if (to < from) continue;
      ranges.push({ from, to, deco: Decoration.mark({ class: markClass(it), title: it.message }) });
    } else if (it.type === "widget") {
      const at = resolveOffset(doc, it.start, true);
      ranges.push({ from: at, to: at, deco: Decoration.widget({ widget: new GhostWidget(it.message ?? ""), side: 1 }) });
    }
  }
  ranges.sort((a, b) => a.from - b.from || a.to - b.to);
  const b = new RangeSetBuilder<any>();
  for (const r of ranges) b.add(r.from, r.to, r.deco);
  return b.finish();
}
