window.__ModuleLoader__.manifest({"id":"dsh-fw.outline","name":"大纲","version":"","description":"从当前缓冲提取符号（函数/类/标题）并列成可跳转大纲","nameEn":"Outline","descriptionEn":"DSH file editor plugin: activity bar view that extracts symbols (functions/classes/headings) from the active buffer and jumps to them, based on the dsh-file-workbench-lib v1 injection API (window.__dshFileWorkbenchVSCode__)."});
window.__ModuleLoader__.load({
	id: "dsh-fw.outline",
	inject: [],
	factory: (require) => {
		/**
		 * outline.js — DSH 文件编辑器外部插件（纯 JS 单文件）。
		 *
		 *
		 * 能力（对标 VS Code Outline，最小启发式版）：
		 *  - 读当前激活文件的**未保存缓冲区**，按扩展名选择符号提取规则；
		 *  - JS/TS：function / class / interface / type / enum / const 箭头函数 / export；
		 *    Python：def / class；Markdown：#~###### 标题；其它：尽力用通用正则；
		 *  - 面板按行号列出符号（带类型徽标），点击 openFile(line) 跳转；
		 *  - 随文档 / 激活文件变更刷新；无编辑器安全降级。
		 */

		const API_KEY = "__dshFileWorkbenchVSCode__";
		const VIEW_ID = "outline.view";
		const NS = "dsh-ol";

		/** 插件清单（打包进 .pack-meta.json 与 bundle 顶层 manifest() 声明；id 由 pack.mjs 生成，勿手写）。 */
		const meta = {
		    "name": "大纲",
		    "version": "",
		    "description": "从当前缓冲提取符号（函数/类/标题）并列成可跳转大纲",
		    "nameEn": "Outline",
		    "descriptionEn": "DSH file editor plugin: activity bar view that extracts symbols (functions/classes/headings) from the active buffer and jumps to them, based on the dsh-file-workbench-lib v1 injection API (window.__dshFileWorkbenchVSCode__)."
		};

		const inject = [];


		let currentCtx = null;

		function buildView() {
		  return {
		    id: VIEW_ID,
		    title: { zh: "大纲", en: "Outline" },
		    description: {
		      zh: "从当前缓冲提取函数/类/标题等符号，列表并点击跳转",
		      en: "Extract symbols (functions/classes/headings) from the active buffer and jump to them",
		    },
		    icon: "viewList",
		    order: 63,
		    when: (ctx) => !!ctx.projectDir,
		    mount(el, ctx) {
		      return mountView(el, ctx);
		    },
		  };
		}

		/* ------------------------------------------------------------------ 符号提取 */

		// 每条规则：{ re, kind(匹配组索引→类型), name(组索引), lineMatch? }
		const JS_TS = [
		  { re: /^\s*(?:export\s+)?(?:default\s+)?async\s+function\*?\s+([A-Za-z_$][\w$]*)/, kind: "function" },
		  { re: /^\s*(?:export\s+)?function\*?\s+([A-Za-z_$][\w$]*)/, kind: "function" },
		  { re: /^\s*(?:export\s+)?class\s+([A-Za-z_$][\w$]*)/, kind: "class" },
		  { re: /^\s*(?:export\s+)?interface\s+([A-Za-z_$][\w$]*)/, kind: "interface" },
		  { re: /^\s*(?:export\s+)?type\s+([A-Za-z_$][\w$]*)\s*=/, kind: "type" },
		  { re: /^\s*(?:export\s+)?enum\s+([A-Za-z_$][\w$]*)/, kind: "enum" },
		  { re: /^\s*(?:export\s+)?const\s+([A-Za-z_$][\w$]*)\s*=\s*(?:async\s*)?\(/, kind: "function" },
		  { re: /^\s*(?:export\s+)?const\s+([A-Za-z_$][\w$]*)\s*=\s*(?:async\s*)?[A-Za-z_$][\w$]*\s*=>/, kind: "variable" },
		];
		const PY = [
		  { re: /^\s*(?:async\s+)?def\s+([A-Za-z_]\w*)/, kind: "function" },
		  { re: /^\s*class\s+([A-Za-z_]\w*)/, kind: "class" },
		];
		const MD = [{ re: /^(#{1,6})\s+(.*)$/, kind: "heading", heading: true }];

		function extKind(file) {
		  const f = String(file).toLowerCase();
		  if (/\.(ts|tsx|js|jsx|mjs|cjs)$/.test(f)) return JS_TS;
		  if (/\.py$/.test(f)) return PY;
		  if (/\.(md|markdown)$/.test(f)) return MD;
		  return JS_TS; // 兜底：多数文本可试 TS 规则
		}

		/** 扫描缓冲全文，返回 [{ line, kind, name }]。 */
		function extractSymbols(text, file) {
		  const rules = extKind(file);
		  const lines = text.split("\n");
		  const out = [];
		  for (let i = 0; i < lines.length; i++) {
		    const raw = lines[i];
		    if (!raw.trim()) continue;
		    for (const r of rules) {
		      const m = raw.match(r.re);
		      if (!m) continue;
		      if (r.heading) {
		        out.push({ line: i + 1, kind: "heading", depth: m[1].length, name: m[2].trim() });
		      } else {
		        out.push({ line: i + 1, kind: r.kind, name: m[1] });
		      }
		      break; // 一行只认第一个匹配
		    }
		  }
		  return out;
		}

		const KIND_GLYPH = {
		  function: "ƒ",
		  class: "C",
		  interface: "I",
		  type: "T",
		  enum: "E",
		  variable: "v",
		  heading: "#",
		};

		/* ------------------------------------------------------------------ 渲染 */

		function renderList(container, ctx, syms) {
		  if (!syms.length) {
		    container.replaceChildren(emptyNode("未发现可展示的符号。"));
		    return;
		  }
		  const frag = document.createDocumentFragment();
		  for (const s of syms) {
		    const row = document.createElement("button");
		    row.type = "button";
		    row.className = `${NS}-row`;
		    if (s.kind === "heading") row.style.paddingLeft = `${8 + (s.depth - 1) * 10}px`;
		    const glyph = document.createElement("span");
		    glyph.className = `${NS}-kind ${NS}-k-${s.kind}`;
		    glyph.textContent = KIND_GLYPH[s.kind] || "•";
		    glyph.title = s.kind;
		    const name = document.createElement("span");
		    name.className = `${NS}-symname`;
		    name.textContent = s.name;
		    const ln = document.createElement("span");
		    ln.className = `${NS}-lineno`;
		    ln.textContent = String(s.line);
		    row.append(glyph, name, ln);
		    row.addEventListener("click", () => {
		      const file = ctx.activeFile;
		      if (!file) return;
		      try {
		        const p = ctx.openFile(file, { line: s.line });
		        if (p && typeof p.catch === "function") p.catch(() => {});
		      } catch {
		        /* noop */
		      }
		    });
		    frag.appendChild(row);
		  }
		  container.replaceChildren(frag);
		}

		function emptyNode(text) {
		  const d = document.createElement("div");
		  d.className = `${NS}-empty`;
		  d.textContent = text;
		  return d;
		}

		/* ------------------------------------------------------------------ 挂载 UI */

		function mountView(el, ctx) {
		  el.classList.add(`${NS}-view`);
		  el.innerHTML = `
		    <div class="${NS}-root">
		      <div class="${NS}-bar"><span class="${NS}-title"></span></div>
		      <div class="${NS}-hint"></div>
		      <div class="${NS}-list"></div>
		    </div>`;
		  const titleEl = el.querySelector(`.${NS}-title`);
		  const hint = el.querySelector(`.${NS}-hint`);
		  const list = el.querySelector(`.${NS}-list`);

		  currentCtx = ctx;
		  let off = [];

		  function refresh() {
		    const ed = ctx.editor;
		    const file = ctx.activeFile;
		    titleEl.textContent = file ? baseName(file) : "无激活文件";
		    if (!ed || !file) {
		      hint.textContent = "";
		      list.replaceChildren(emptyNode("在编辑器打开一个文件以查看其大纲。"));
		      return;
		    }
		    const syms = extractSymbols(ed.getText?.() ?? "", file);
		    hint.textContent = syms.length ? `${syms.length} 个符号` : "";
		    renderList(list, ctx, syms);
		  }

		  if (typeof ctx.onDidChangeActiveFile === "function") off.push(ctx.onDidChangeActiveFile(refresh));
		  if (typeof ctx.editor?.onDidChangeTextDocument === "function") off.push(ctx.editor.onDidChangeTextDocument(refresh));
		  if (typeof ctx.onProjectChange === "function") off.push(ctx.onProjectChange(refresh));

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
		.${NS}-view { color: var(--dsh-fg, #c9d1d9); font-size: 12px; }
		.${NS}-root { display: flex; flex-direction: column; min-height: 100%; }
		.${NS}-bar { padding: 8px 10px; position: sticky; top: 0; background: var(--dsh-bg, #0d1117); border-bottom: 1px solid var(--dsh-border, #30363d); z-index: 3; }
		.${NS}-title { display: block; font-weight: 600; color: var(--dsh-fg, #c9d1d9); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
		.${NS}-hint { padding: 5px 10px; color: var(--dsh-fg-weak, #8b949e); line-height: 1.5; }
		.${NS}-list { flex: 1 1 auto; padding: 2px 6px 8px; }
		.${NS}-row { display: flex; gap: 8px; align-items: center; width: 100%; text-align: left; padding: 3px 8px; border: 0; background: transparent; color: var(--dsh-fg, #c9d1d9); font: inherit; cursor: pointer; border-radius: 4px; white-space: nowrap; overflow: hidden; }
		.${NS}-row:hover { background: var(--dsh-hover, #30363d); }
		.${NS}-row:focus-visible { outline: 1px solid var(--dsh-accent, #2f81f7); outline-offset: -1px; }
		.${NS}-kind { flex: 0 0 auto; width: 16px; height: 16px; display: inline-flex; align-items: center; justify-content: center; border-radius: 4px; font-size: 10px; font-weight: 700; background: var(--dsh-bg3, #21262d); color: var(--dsh-fg-weak, #8b949e); }
		.${NS}-k-function { color: var(--dsh-purple, #d2a8ff); } .${NS}-k-class { color: var(--dsh-warn, #d29922); } .${NS}-k-interface { color: var(--dsh-success, #3fb950); }
		.${NS}-k-type { color: var(--dsh-info, #79c0ff); } .${NS}-k-enum { color: var(--dsh-warn, #d29922); } .${NS}-k-variable { color: var(--dsh-info, #79c0ff); } .${NS}-k-heading { color: var(--dsh-accent, #2f81f7); }
		.${NS}-symname { flex: 1 1 auto; min-width: 0; overflow: hidden; text-overflow: ellipsis; }
		.${NS}-lineno { flex: 0 0 auto; min-width: 2.5em; text-align: right; color: var(--dsh-fg-weak, #8b949e); font-family: var(--dsh-mono, monospace); }
		.${NS}-empty { padding: 10px 12px; color: var(--dsh-fg-muted, #6e7681); font-style: italic; text-align: center; }
		`;
		  const style = document.createElement("style");
		  style.id = `${NS}-styles`;
		  style.textContent = css;
		  document.head.appendChild(style);
		}

		function apply(_ctx) {
		  const api = typeof window !== "undefined" ? window.__dshFileWorkbenchVSCode__ : null;
		  if (api?.activityBar) api.activityBar.register(buildView());
		}
		return { apply, meta };
	}
});
