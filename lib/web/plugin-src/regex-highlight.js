window.__ModuleLoader__.manifest({"id":"dsh-fw.regex-highlight","name":"正则高亮","version":"","description":"用自定义正则高亮当前文件全部匹配并列出命中行","nameEn":"Regex Highlight","descriptionEn":"DSH file editor plugin: activity bar view that highlights all regex matches in the active file with a jump list, based on the dsh-file-workbench-lib v1 injection API (window.__dshFileWorkbenchVSCode__)."});
window.__ModuleLoader__.load({
	id: "dsh-fw.regex-highlight",
	factory: (require) => {
		/**
		 * regex-highlight.js — DSH 文件编辑器外部插件（纯 JS 单文件）。
		 *
		 *
		 * 能力（对标 VS Code 的 find-with-regex，但独立于内置搜索、可叠加多组）：
		 *  - 输入正则 + flags（默认 g / 可选 i m），对**当前文件未保存缓冲区**逐行匹配；
		 *  - 用 v1 ctx.editor.createDecorations(category:"highlight") 精确覆盖每个命中区间；
		 *  - 面板列出命中（行:列 · 预览），点击跳到该行；顶部 prev/next 循环定位并 reveal；
		 *  - 随文档 / 激活文件变更实时重算；无编辑器或非法正则安全降级为提示。
		 */

		const API_KEY = "__dshFileWorkbenchVSCode__";
		const VIEW_ID = "regexHighlight.view";
		const NS = "dsh-rx";

		/** 插件清单（打包进 .pack-meta.json 与 bundle 顶层 manifest() 声明；id 由 pack.mjs 生成，勿手写）。 */
		const meta = {
		    "name": "正则高亮",
		    "version": "",
		    "description": "用自定义正则高亮当前文件全部匹配并列出命中行",
		    "nameEn": "Regex Highlight",
		    "descriptionEn": "DSH file editor plugin: activity bar view that highlights all regex matches in the active file with a jump list, based on the dsh-file-workbench-lib v1 injection API (window.__dshFileWorkbenchVSCode__)."
		};

		const inject = [];


		/* ------------------------------------------------------------------ 跨挂载状态 */

		let currentCtx = null;
		let currentUi = null; // { handle, refresh }
		/** 当前文件的命中列表：[{ line, from, to, text }]（from/to 为绝对 offset）。 */
		let matches = [];

		/* ------------------------------------------------------------------ 视图定义 */

		function buildView() {
		  return {
		    id: VIEW_ID,
		    title: { zh: "正则高亮", en: "Regex Highlight" },
		    description: {
		      zh: "对当前文件按正则高亮所有命中，列表 + prev/next 跳转",
		      en: "Highlight all regex matches in the active file with a jump list",
		    },
		    icon: "wand",
		    order: 61,
		    when: (ctx) => !!ctx.projectDir,
		    mount(el, ctx) {
		      return mountView(el, ctx);
		    },
		  };
		}

		/* ------------------------------------------------------------------ 匹配计算 */

		/** 在当前缓冲区上跑正则，返回 [{ line, from, to, text }]。抛错由上层捕获。 */
		function computeMatches(pattern, flags) {
		  const ed = currentCtx?.editor;
		  const view = ed?.view;
		  if (!ed || !view) return [];
		  const doc = view.state.doc;
		  const re = new RegExp(pattern, flags.includes("g") ? flags : flags + "g");
		  const out = [];
		  for (let ln = 1; ln <= doc.lines; ln++) {
		    const line = doc.line(ln);
		    re.lastIndex = 0;
		    let m;
		    while ((m = re.exec(line.text)) !== null) {
		      if (m[0].length === 0) {
		        re.lastIndex++; // 零宽匹配防死循环
		        continue;
		      }
		      out.push({ line: ln, from: line.from + m.index, to: line.from + m.index + m[0].length, text: m[0] });
		      if (out.length >= 5000) return out; // 命中上限，防超大结果卡死
		    }
		  }
		  return out;
		}

		/** 把命中换算成 mark 装饰条目。 */
		function decoItems() {
		  return matches.map((h) => ({
		    type: "mark",
		    start: { offset: h.from },
		    end: { offset: h.to },
		    category: "highlight",
		    message: h.text,
		  }));
		}

		function applyDecos() {
		  const ed = currentCtx?.editor;
		  if (!ed || !matches.length) {
		    if (currentUi?.handle) {
		      currentUi.handle.update([]);
		      currentUi.handle = null;
		    }
		    return;
		  }
		  const items = decoItems();
		  if (!currentUi?.handle) currentUi.handle = ed.createDecorations({ items });
		  else currentUi.handle.update(items);
		}

		/** 重算并刷新装饰 + 列表。pattern 为空则清空。 */
		function rescan(cmdInput, flagsInput, hint, list) {
		  const pattern = cmdInput.value;
		  const flags = (flagsInput.value || "g").trim();
		  matches = [];
		  if (!pattern.trim()) {
		    applyDecos();
		    hint.textContent = "输入正则表达式以高亮当前文件的匹配。";
		    list.replaceChildren();
		    return;
		  }
		  try {
		    matches = computeMatches(pattern, flags);
		  } catch (e) {
		    hint.textContent = `正则无效：${e?.message ?? e}`;
		    applyDecos();
		    list.replaceChildren();
		    return;
		  }
		  applyDecos();
		  hint.textContent = matches.length ? `${matches.length} 处命中 · 点条目或上方 ▲▼ 跳转` : "无匹配";
		  renderList(list);
		}

		/* ------------------------------------------------------------------ 跳转 */

		function gotoMatch(idx) {
		  const h = matches[idx];
		  const ctx = currentCtx;
		  if (!h || !ctx) return;
		  const file = ctx.activeFile;
		  if (!file) return;
		  try {
		    const p = ctx.openFile(file, { line: h.line });
		    if (p && typeof p.catch === "function") p.catch(() => {});
		  } catch {
		    /* noop */
		  }
		}

		/* ------------------------------------------------------------------ 列表渲染 */

		function renderList(list) {
		  const frag = document.createDocumentFragment();
		  matches.forEach((h, i) => {
		    const row = document.createElement("button");
		    row.type = "button";
		    row.className = `${NS}-row`;
		    row.innerHTML = `<span class="${NS}-loc"></span><span class="${NS}-matchtext"></span>`;
		    row.querySelector(`.${NS}-loc`).textContent = `${h.line}:${offsetCol(h.from)}`;
		    row.querySelector(`.${NS}-matchtext`).textContent = h.text;
		    row.title = h.text;
		    row.addEventListener("click", () => gotoMatch(i));
		    frag.appendChild(row);
		  });
		  list.replaceChildren(frag);
		}

		/** 由绝对 offset 反推列号（1 起始）——仅用于展示。 */
		function offsetCol(offset) {
		  const doc = currentCtx?.editor?.view?.state?.doc;
		  if (!doc) return 0;
		  const line = doc.lineAt(offset);
		  return offset - line.from + 1;
		}

		/* ------------------------------------------------------------------ 挂载 UI */

		function mountView(el, ctx) {
		  el.classList.add(`${NS}-view`);
		  el.innerHTML = `
		    <div class="${NS}-root">
		      <div class="${NS}-bar">
		        <input class="${NS}-cmd" type="text" spellcheck="false" placeholder="正则，如：\\bfoo\\w* ｜ console\\.\\w+" />
		        <input class="${NS}-flags" type="text" spellcheck="false" value="g" title="flags：g/i/m…" />
		      </div>
		      <div class="${NS}-nav">
		        <button class="${NS}-prev" type="button" title="上一个命中">▲</button>
		        <button class="${NS}-next" type="button" title="下一个命中">▼</button>
		        <span class="${NS}-pos"></span>
		      </div>
		      <div class="${NS}-hint"></div>
		      <div class="${NS}-list"></div>
		    </div>`;

		  const cmdInput = el.querySelector(`.${NS}-cmd`);
		  const flagsInput = el.querySelector(`.${NS}-flags`);
		  const prevBtn = el.querySelector(`.${NS}-prev`);
		  const nextBtn = el.querySelector(`.${NS}-next`);
		  const posEl = el.querySelector(`.${NS}-pos`);
		  const hint = el.querySelector(`.${NS}-hint`);
		  const list = el.querySelector(`.${NS}-list`);

		  currentCtx = ctx;
		  currentUi = { handle: null, refresh };
		  let off = [];
		  let cursor = 0;

		  function updatePos() {
		    posEl.textContent = matches.length ? `${Math.min(cursor + 1, matches.length)} / ${matches.length}` : "";
		  }

		  function step(delta) {
		    if (!matches.length) return;
		    cursor = (cursor + delta + matches.length) % matches.length;
		    updatePos();
		    gotoMatch(cursor);
		  }

		  function refresh() {
		    rescan(cmdInput, flagsInput, hint, list);
		    cursor = 0;
		    updatePos();
		  }

		  cmdInput.addEventListener("input", refresh);
		  flagsInput.addEventListener("input", refresh);
		  cmdInput.addEventListener("keydown", (ev) => {
		    if (ev.key === "Enter") step(ev.shiftKey ? -1 : 1);
		  });
		  prevBtn.addEventListener("click", () => step(-1));
		  nextBtn.addEventListener("click", () => step(1));

		  function onActiveChanged() {
		    currentUi.handle = null; // 换文件：旧句柄作废，重新 create
		    refresh();
		  }
		  function onDocChange() {
		    refresh();
		  }
		  function onProjectChanged() {
		    cmdInput.value = "";
		    currentUi.handle = null;
		    refresh();
		  }

		  if (typeof ctx.onDidChangeActiveFile === "function") off.push(ctx.onDidChangeActiveFile(onActiveChanged));
		  if (typeof ctx.editor?.onDidChangeTextDocument === "function") off.push(ctx.editor.onDidChangeTextDocument(onDocChange));
		  if (typeof ctx.onProjectChange === "function") off.push(ctx.onProjectChange(onProjectChanged));

		  requestAnimationFrame(refresh);

		  return () => {
		    off.forEach((f) => {
		      try {
		        f();
		      } catch {
		        /* noop */
		      }
		    });
		    if (currentUi?.handle) {
		      try {
		        currentUi.handle.update([]);
		      } catch {
		        /* noop */
		      }
		    }
		    matches = [];
		    if (currentCtx === ctx) currentCtx = null;
		    el.replaceChildren();
		  };
		}

		/* ------------------------------------------------------------------ 小工具 */


		injectStyles();

		function injectStyles() {
		  if (typeof document === "undefined") return;
		  if (document.getElementById(`${NS}-styles`)) return;
		  const css = `
		.${NS}-view { color: var(--dsh-fg, #c9d1d9); font-size: 12px; }
		.${NS}-root { display: flex; flex-direction: column; min-height: 100%; }
		.${NS}-bar { padding: 8px 10px 4px; display: flex; gap: 6px; position: sticky; top: 0; background: var(--dsh-bg, #0d1117); border-bottom: 1px solid var(--dsh-border, #30363d); z-index: 3; }
		.${NS}-cmd { flex: 1 1 auto; min-width: 0; padding: 5px 8px; border: 1px solid var(--dsh-border, #30363d); border-radius: 6px; background: var(--dsh-bg2, #161b22); color: inherit; outline: none; font-family: var(--dsh-mono, monospace); font-size: inherit; }
		.${NS}-cmd::placeholder { color: var(--dsh-fg-muted, #6e7681); }
		.${NS}-cmd:focus { border-color: var(--dsh-accent, #2f81f7); box-shadow: 0 0 0 2px var(--dsh-accent-weak, rgba(47,129,247,.14)); }
		.${NS}-flags { flex: 0 0 44px; width: 44px; padding: 5px 6px; border: 1px solid var(--dsh-border, #30363d); border-radius: 6px; background: var(--dsh-bg2, #161b22); color: inherit; outline: none; text-align: center; font: inherit; font-family: var(--dsh-mono, monospace); }
		.${NS}-flags:focus { border-color: var(--dsh-accent, #2f81f7); box-shadow: 0 0 0 2px var(--dsh-accent-weak, rgba(47,129,247,.14)); }
		.${NS}-nav { display: flex; align-items: center; gap: 6px; padding: 4px 10px 8px; position: sticky; top: 41px; background: var(--dsh-bg, #0d1117); z-index: 3; }
		.${NS}-nav .${NS}-prev, .${NS}-nav .${NS}-next { width: 28px; height: 24px; padding: 0; border: 1px solid var(--dsh-border, #30363d); border-radius: 6px; background: var(--dsh-bg2, #161b22); color: inherit; font-size: 10px; line-height: 1; cursor: pointer; }
		.${NS}-nav .${NS}-prev:hover, .${NS}-nav .${NS}-next:hover { border-color: var(--dsh-accent, #2f81f7); color: var(--dsh-accent, #2f81f7); }
		.${NS}-nav .${NS}-prev:focus-visible, .${NS}-nav .${NS}-next:focus-visible { outline: 1px solid var(--dsh-accent, #2f81f7); outline-offset: -1px; }
		.${NS}-pos { margin-left: 2px; color: var(--dsh-fg-weak, #8b949e); font-size: 11px; font-family: var(--dsh-mono, monospace); }
		.${NS}-hint { padding: 5px 10px; color: var(--dsh-fg-weak, #8b949e); line-height: 1.5; }
		.${NS}-list { flex: 1 1 auto; padding: 2px 6px 8px; }
		.${NS}-row { display: flex; gap: 8px; align-items: baseline; width: 100%; text-align: left; padding: 2px 8px; border: 0; background: transparent; color: var(--dsh-fg, #c9d1d9); font: inherit; cursor: pointer; border-radius: 4px; white-space: nowrap; overflow: hidden; }
		.${NS}-row:hover { background: var(--dsh-hover, #30363d); }
		.${NS}-row:focus-visible { outline: 1px solid var(--dsh-accent, #2f81f7); outline-offset: -1px; }
		.${NS}-loc { flex: 0 0 auto; min-width: 3.5em; text-align: right; color: var(--dsh-fg-weak, #8b949e); font-family: var(--dsh-mono, monospace); }
		.${NS}-matchtext { min-width: 0; overflow: hidden; text-overflow: ellipsis; font-family: var(--dsh-mono, monospace); }
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
		return { apply, inject, meta };
	}
});
