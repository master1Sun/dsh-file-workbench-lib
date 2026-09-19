/**
 * md-preview.js — DSH 文件编辑器外部插件（纯 JS 单文件）。
 *
 *
 * 能力（对标 VS Code Markdown Preview，最小离线版）：
 *  - 读当前激活 .md 文件的**未保存缓冲区**，实时渲染到面板；
 *  - 自带零依赖 markdown 子集解析器：标题 / 粗斜体 / 行内码 / 围栏代码块 / 引用 /
 *    有序无序列表 / 链接 / 图片 / 分割线 / 段落；
 *  - **全部文本先 HTML 转义**，仅放行受控标签，杜绝脚本注入；链接强制 http(s)/mailto；
 *  - 随文档变更与激活文件切换刷新；非 .md 文件提示但仍尝试渲染。
 */

const API_KEY = "__dshFileWorkbenchVSCode__";
const VIEW_ID = "mdPreview.view";
const NS = "dsh-md";

/** 插件清单（打包进 .pack-meta.json 与 bundle 顶层 manifest() 声明；id 由 pack.mjs 生成，勿手写）。 */
export const meta = {
    "name": "Markdown 预览",
    "version": "",
    "description": "把当前 Markdown 缓冲实时渲染成 HTML 预览",
    "nameEn": "Markdown Preview",
    "descriptionEn": "DSH file editor plugin: activity bar view that live-renders the active Markdown buffer to HTML (dependency-free, escaped), based on the dsh-file-workbench-lib v1 injection API (window.__dshFileWorkbenchVSCode__)."
};

export const inject = [];


let currentCtx = null;

function buildView() {
  return {
    id: VIEW_ID,
    title: { zh: "Markdown 预览", en: "Markdown Preview" },
    description: {
      zh: "把当前 Markdown 缓冲实时渲染成 HTML 预览（零依赖、已做转义）",
      en: "Live-render the active Markdown buffer to HTML (dependency-free, escaped)",
    },
    icon: "eye",
    order: 66,
    when: (ctx) => !!ctx.projectDir,
    mount(el, ctx) {
      return mountView(el, ctx);
    },
  };
}

/* ------------------------------------------------------------------ 转义 + 渲染 */

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** 只允许安全协议的链接 URL。 */
function safeUrl(u) {
  const t = String(u).trim();
  if (/^(https?:|mailto:|#|\/|\.{1,2}\/)/i.test(t)) return esc(t);
  if (/^[\w.-]+\.[a-z]{2,}(\/|$)/i.test(t)) return "https://" + esc(t); // 裸域名补协议
  return "#";
}

/** 行内元素：在已转义文本上套用少量标记。顺序敏感——先保护行内码。 */
function inline(text) {
  let s = esc(text);
  // 行内码 `code`
  s = s.replace(/`([^`]+)`/g, (_m, c) => `<code>${c}</code>`);
  // 图片 ![alt](url)
  s = s.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+&quot;[^&]*&quot;)?\)/g, (_m, alt, url) => `<img alt="${alt}" src="${safeUrl(url)}">`);
  // 链接 [text](url)
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)(?:\s+&quot;[^&]*&quot;)?\)/g, (_m, txt, url) => `<a href="${safeUrl(url)}" target="_blank" rel="noopener noreferrer">${txt}</a>`);
  // 粗体 **x** / __x__
  s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/__([^_]+)__/g, "<strong>$1</strong>");
  // 斜体 *x* / _x_
  s = s.replace(/(^|[^*])\*([^*\n]+)\*/g, "$1<em>$2</em>").replace(/(^|[^_])_([^_\n]+)_/g, "$1<em>$2</em>");
  // 删除线 ~~x~~
  s = s.replace(/~~([^~]+)~~/g, "<del>$1</del>");
  return s;
}

/** 块级解析：逐行扫描，处理围栏代码、标题、引用、列表、分割线、段落。 */
function render(src) {
  const lines = String(src).replace(/\r\n?/g, "\n").split("\n");
  const out = [];
  let i = 0;
  let para = [];

  const flushPara = () => {
    if (para.length) {
      out.push(`<p>${inline(para.join(" "))}</p>`);
      para = [];
    }
  };

  while (i < lines.length) {
    const line = lines[i];

    // 围栏代码块 ```lang
    const fence = line.match(/^\s*```(\w*)\s*$/);
    if (fence) {
      flushPara();
      const lang = fence[1];
      const buf = [];
      i++;
      while (i < lines.length && !/^\s*```\s*$/.test(lines[i])) buf.push(lines[i++]);
      i++; // 跳过收尾 ```
      out.push(`<pre data-lang="${esc(lang)}"><code>${esc(buf.join("\n"))}</code></pre>`);
      continue;
    }

    // ATX 标题
    const h = line.match(/^(#{1,6})\s+(.*)$/);
    if (h) {
      flushPara();
      const lvl = h[1].length;
      out.push(`<h${lvl}>${inline(h[2])}</h${lvl}>`);
      i++;
      continue;
    }

    // 分割线
    if (/^\s*([-*_])(\s*\1){2,}\s*$/.test(line)) {
      flushPara();
      out.push("<hr>");
      i++;
      continue;
    }

    // 引用块
    if (/^\s*>\s?/.test(line)) {
      flushPara();
      const buf = [];
      while (i < lines.length && /^\s*>\s?/.test(lines[i])) buf.push(lines[i++].replace(/^\s*>\s?/, ""));
      out.push(`<blockquote>${render(buf.join("\n"))}</blockquote>`);
      continue;
    }

    // 无序列表
    if (/^\s*[-*+]\s+/.test(line)) {
      flushPara();
      const items = [];
      while (i < lines.length && /^\s*[-*+]\s+/.test(lines[i])) items.push(lines[i++].replace(/^\s*[-*+]\s+/, ""));
      out.push(`<ul>${items.map((t) => `<li>${inline(t)}</li>`).join("")}</ul>`);
      continue;
    }

    // 有序列表
    if (/^\s*\d+\.\s+/.test(line)) {
      flushPara();
      const items = [];
      while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) items.push(lines[i++].replace(/^\s*\d+\.\s+/, ""));
      out.push(`<ol>${items.map((t) => `<li>${inline(t)}</li>`).join("")}</ol>`);
      continue;
    }

    // 空行 → 段落边界
    if (!line.trim()) {
      flushPara();
      i++;
      continue;
    }

    // 普通段落行
    para.push(line);
    i++;
  }
  flushPara();
  return out.join("\n");
}

/* ------------------------------------------------------------------ 挂载 UI */

function mountView(el, ctx) {
  el.classList.add(`${NS}-view`);
  el.innerHTML = `
    <div class="${NS}-root">
      <div class="${NS}-bar"><span class="${NS}-title"></span></div>
      <div class="${NS}-body"></div>
    </div>`;
  const titleEl = el.querySelector(`.${NS}-title`);
  const body = el.querySelector(`.${NS}-body`);

  currentCtx = ctx;
  let off = [];

  function refresh() {
    const ed = ctx.editor;
    const file = ctx.activeFile;
    titleEl.textContent = file ? baseName(file) : "无激活文件";
    if (!ed || !file) {
      body.innerHTML = `<div class="${NS}-empty">在编辑器打开一个 .md 文件即可预览。</div>`;
      return;
    }
    if (!/\.(md|markdown)$/i.test(file)) {
      body.innerHTML = `<div class="${NS}-empty">当前文件不是 Markdown（仍按 Markdown 尝试渲染）。</div>` + render(ed.getText?.() ?? "");
      return;
    }
    body.innerHTML = render(ed.getText?.() ?? "");
  }

  function onActiveChanged() {
    refresh();
  }
  function onDocChange() {
    refresh();
  }

  if (typeof ctx.onDidChangeActiveFile === "function") off.push(ctx.onDidChangeActiveFile(onActiveChanged));
  if (typeof ctx.editor?.onDidChangeTextDocument === "function") off.push(ctx.editor.onDidChangeTextDocument(onDocChange));

  requestAnimationFrame(refresh);

  return () => {
    off.forEach((f) => {
      try {
        f();
      } catch {
        /* noop */
      }
    });
    if (currentCtx === ctx) currentCtx = null;
    el.replaceChildren();
  };
}

function baseName(p) {
  const n = String(p).replace(/\\/g, "/");
  const i = n.lastIndexOf("/");
  return i >= 0 ? n.slice(i + 1) : n;
}

/* ------------------------------------------------------------------ 小工具 */


injectStyles();

function injectStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(`${NS}-styles`)) return;
  const css = `
.${NS}-view { color: var(--dsh-fg, #c9d1d9); font-size: 13px; }
.${NS}-root { display: flex; flex-direction: column; min-height: 100%; }
.${NS}-bar { padding: 8px 10px; position: sticky; top: 0; background: var(--dsh-bg, #0d1117); border-bottom: 1px solid var(--dsh-border, #30363d); z-index: 3; }
.${NS}-title { display: block; font-weight: 600; color: var(--dsh-fg, #c9d1d9); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.${NS}-body { flex: 1 1 auto; padding: 10px 12px 24px; overflow: auto; line-height: 1.65; overflow-wrap: break-word; }
.${NS}-body h1,.${NS}-body h2,.${NS}-body h3,.${NS}-body h4,.${NS}-body h5,.${NS}-body h6 { margin: .8em 0 .4em; font-weight: 700; line-height: 1.3; }
.${NS}-body h1 { font-size: 1.5em; border-bottom: 1px solid var(--dsh-border,#30363d); padding-bottom: .2em; }
.${NS}-body h2 { font-size: 1.3em; }
.${NS}-body h3 { font-size: 1.12em; }
.${NS}-body h4 { font-size: 1em; }
.${NS}-body h5,.${NS}-body h6 { font-size: .92em; color: var(--dsh-fg-weak,#8b949e); }
.${NS}-body p { margin: .5em 0; }
.${NS}-body a { color: var(--dsh-accent, #2f81f7); text-decoration: none; }
.${NS}-body a:hover { text-decoration: underline; }
.${NS}-body code { background: var(--dsh-bg3,#21262d); border-radius: 4px; padding: 1px 5px; font-family: var(--dsh-mono, monospace); font-size: .9em; }
.${NS}-body pre { background: var(--dsh-bg2,#161b22); border: 1px solid var(--dsh-border,#30363d); border-radius: 8px; padding: 10px 12px; overflow: auto; }
.${NS}-body pre code { background: transparent; border: 0; padding: 0; }
.${NS}-body blockquote { margin: .5em 0; padding: .2em 12px; border-left: 3px solid var(--dsh-accent,#2f81f7); color: var(--dsh-fg-weak,#8b949e); background: var(--dsh-bg2,#161b22); border-radius: 0 6px 6px 0; }
.${NS}-body ul,.${NS}-body ol { margin: .4em 0; padding-left: 1.6em; }
.${NS}-body li { margin: .15em 0; }
.${NS}-body hr { border: 0; border-top: 1px solid var(--dsh-border,#30363d); margin: 1em 0; }
.${NS}-body img { max-width: 100%; border-radius: 6px; }
.${NS}-empty { color: var(--dsh-fg-muted,#6e7681); font-style: italic; padding: 8px 0; }
`;
  const style = document.createElement("style");
  style.id = `${NS}-styles`;
  style.textContent = css;
  document.head.appendChild(style);
}

export function apply(_ctx) {
  const api = typeof window !== "undefined" ? window.__dshFileWorkbenchVSCode__ : null;
  if (api?.activityBar) api.activityBar.register(buildView());
}
