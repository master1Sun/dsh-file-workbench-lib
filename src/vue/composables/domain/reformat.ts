/**
 * 编辑器轻量多格式格式化（best-effort，零依赖）。
 *
 * 既有格式化链路只有 JSON 结构化重排 + CodeMirror 语言缩进兜底；这里补上 CSS 系与
 * HTML/XML 系的**纯文本层级重排**，让「格式化」覆盖常见前端格式：
 *  - `formatCss`：按花括号层级重排（选择器 / 声明各占一行，压缩输入也能展开）
 *  - `formatXml`：按标签层级重排（开 / 闭 / 自闭合 / void 标签 + 注释 + 短内联文本同行）
 *
 * 设计原则：**宁可不动手，也不毁内容**。解析到任何结构性异常（括号不配对、标签不闭合、
 * 注释未闭合、script/pre 等需原样保留的结构）一律返回 null，由调用方退回 CodeMirror
 * 的语法缩进兜底。因此不追求 prettier 级排版，只做安全的层级重排。
 */

/** 注释 / 字符串 / CDATA 的占位标记（源码中不可能出现）。 */
const STX = "\u0000";
const ETX = "\u0001";

/** 把 text 中匹配 re 的片段替换为占位符，返回 [替换后文本, 片段列表]。 */
function maskSpans(text: string, re: RegExp): [string, string[]] {
  const saved: string[] = [];
  const masked = text.replace(re, (m) => {
    saved.push(m);
    return `${STX}${saved.length - 1}${ETX}`;
  });
  return [masked, saved];
}

/** 还原所有占位符。 */
function unmask(text: string, saved: string[]): string {
  return text.replace(new RegExp(`${STX}(\\d+)${ETX}`, "g"), (_, i) => saved[Number(i)] ?? "");
}

/* ---------------- CSS / SCSS / LESS ---------------- */

/**
 * CSS 系重排：`选择器 {`、每个声明一行、`}` 独行，两空格缩进。
 * 注释与引号字符串在重排期间被占位保护（其中的 {} ; , 不影响结构）。
 */
export function formatCss(text: string): string | null {
  if (!text.includes("{")) return null; // 没有花括号结构（如纯属性文件）交给通用缩进兜底
  const [masked, saved] = maskSpans(text, /\/\*[\s\S]*?\*\/|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g);
  if (masked.includes("/*")) return null; // 未闭合注释：放弃
  const opens = (masked.match(/{/g) ?? []).length;
  const closes = (masked.match(/}/g) ?? []).length;
  if (opens === 0 || opens !== closes) return null;

  // 归一化：去掉所有空白差异，只剩结构字符与内容（占位符内部不受影响）。
  const norm = masked.replace(/\s+/g, " ").replace(/\s*([{};])\s*/g, "$1").trim();
  const out: string[] = [];
  let buf = "";
  let depth = 0;
  const pad = (): string => "  ".repeat(depth);
  const emit = (line: string): void => {
    const t = line.trim();
    if (t) out.push(pad() + t);
  };
  for (const ch of norm) {
    if (ch === "{") {
      emit(`${buf} {`);
      buf = "";
      depth += 1;
    } else if (ch === "}") {
      emit(buf);
      depth -= 1;
      emit("}");
      buf = "";
      if (depth < 0) return null;
    } else if (ch === ";") {
      emit(`${buf};`);
      buf = "";
    } else if (ch === ",") {
      // 逗号（多选择器 / 多值）断行，可读性更好；占位符里的逗号不受影响。
      emit(`${buf},`);
      buf = "";
    } else {
      buf += ch;
    }
  }
  emit(buf);
  if (depth !== 0) return null;
  return unmask(out.join("\n"), saved);
}

/* ---------------- HTML / XML / SVG / VUE 模板 ---------------- */

/** HTML void 元素（无闭合标签，不参与层级）。 */
const VOID_TAGS = new Set([
  "area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr",
]);

/**
 * HTML/XML 重排：标签按层级缩进；「短内联段」（开标签 + 纯文本 + 闭标签，≤80 字符）保持
 * 同行不拆，避免把一句话拆碎。解析到标签不闭合 / 层级错配时返回 null。
 */
export function formatXml(text: string, forHtml: boolean): string | null {
  if (/<\s*(script|style|pre|textarea)\b/i.test(text)) return null; // 内容需原样保留，交给兜底
  const [masked, saved] = maskSpans(text, /<!--[\s\S]*?-->|<!\[CDATA\[[\s\S]*?\]\]>/g);
  if (masked.includes("<!--")) return null; // 未闭合注释

  // 切分为 tag / text 令牌序列。
  interface Tok {
    tag?: string;
    text?: string;
  }
  const toks: Tok[] = [];
  let last = 0;
  const tagRe = /<[a-zA-Z!/][^>]*>/g;
  for (let m = tagRe.exec(masked); m; m = tagRe.exec(masked)) {
    if (m.index > last) toks.push({ text: masked.slice(last, m.index) });
    toks.push({ tag: m[0] });
    last = m.index + m[0].length;
  }
  if (last < masked.length) toks.push({ text: masked.slice(last) });

  const nameOf = (t: string): string => t.replace(/^<\/?/, "").replace(/[\s/>].*$/s, "").toLowerCase();
  const out: string[] = [];
  const stack: string[] = [];
  const pad = (): string => "  ".repeat(stack.length);
  const emit = (line: string): void => {
    const t = unmask(line, saved).replace(/\s+/g, " ").trim();
    if (t) out.push(t);
    // 注意：缩进在 unmask 之后再补，避免占位符文本中的空白干扰判断。
  };
  const emitAt = (depth: number, line: string): void => {
    const t = unmask(line, saved).replace(/\s+/g, " ").trim();
    if (t) out.push("  ".repeat(Math.max(0, depth)) + t);
  };

  for (let i = 0; i < toks.length; i += 1) {
    const tok = toks[i];
    if (tok.text !== undefined) {
      const t = tok.text.trim();
      if (t) emitAt(stack.length, tok.text);
      continue;
    }
    const tag = tok.tag!;
    const name = nameOf(tag);
    const close = tag.startsWith("</");
    const selfClose = tag.endsWith("/>") || (forHtml && VOID_TAGS.has(name));
    if (close) {
      const top = stack.pop();
      if (top !== name) return null; // 层级错配：放弃
      emitAt(stack.length, tag);
      continue;
    }
    // 短内联段：open + text + close（中间只隔一个文本令牌）合并为一行。
    const next = toks[i + 1];
    const after = toks[i + 2];
    if (!selfClose && next?.text !== undefined && after?.tag !== undefined && nameOf(after.tag) === name && after.tag.startsWith("</")) {
      const inline = `${tag}${next.text}${after.tag}`;
      const flat = unmask(inline, saved).replace(/\s+/g, " ").trim();
      if (flat.length <= 80) {
        emitAt(stack.length, inline);
        i += 2;
        continue;
      }
    }
    emitAt(stack.length, tag);
    if (!selfClose) stack.push(name);
  }
  if (stack.length !== 0) return null;
  void pad;
  void emit;
  return out.join("\n");
}
