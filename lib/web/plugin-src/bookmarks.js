window.__ModuleLoader__.manifest({"id":"dsh-fw.bookmarks","name":"书签","version":"","description":"切换光标行书签、按项目持久化并点击跳转（gutter 圆点标记）","nameEn":"Bookmarks","descriptionEn":"DSH file editor plugin: activity bar view that toggles line bookmarks, lists current/all-project bookmarks and jumps to them. Uses v1 ctx.editor.createDecorations(category:bookmark) gutter marks + /persist per project. Counterpart of VS Code Bookmarks."});
window.__ModuleLoader__.load({
	id: "dsh-fw.bookmarks",
	factory: (require) => {
		/**
		 * bookmarks.js — DSH 文件编辑器外部插件（纯 JS 单文件）。
		 *
		 * 本插件不依赖宿主 ctx 服务，只经 window.__dshFileWorkbenchVSCode__ 注册一个 Activity Bar「书签」视图。
		 *
		 * 能力（对标 VS Code Bookmarks）：
		 *  - 切换当前光标行书签（视图顶部按钮）；
		 *  - 视图列出「当前文件」与「其它文件」两组书签，点击跳转、可逐条移除；
		 *  - 用 v1 ctx.editor.createDecorations(category:"bookmark") 在 gutter 打圆点标记当前文件书签；
		 *  - 按项目目录持久化到 host /plugin-data（key = dsh-fw.bookmarks.<hash(projectDir)>）。
		 *
		 * 书签以 { file, line } 存储（line 为 1 起始行号），列内偏移仅由当前缓冲文本即时算出——
		 * 因此编辑器内增删行导致的漂移不影响持久数据，重开文件仍能落到原行。
		 */

		const API_KEY = "__dshFileWorkbenchVSCode__";
		const PREFIX = "/api/dsh-file-workbench";
		const VIEW_ID = "bookmarks.view";
		const NS = "dsh-bm";

		/** 插件清单（打包进 .pack-meta.json 与 bundle 顶层 manifest() 声明；id 由 pack.mjs 生成，勿手写）。 */
		const meta = {
		    "name": "书签",
		    "version": "",
		    "description": "切换光标行书签、按项目持久化并点击跳转（gutter 圆点标记）",
		    "nameEn": "Bookmarks",
		    "descriptionEn": "DSH file editor plugin: activity bar view that toggles line bookmarks, lists current/all-project bookmarks and jumps to them. Uses v1 ctx.editor.createDecorations(category:bookmark) gutter marks + /persist per project. Counterpart of VS Code Bookmarks."
		};

		const inject = [];


		/* ------------------------------------------------------------------ 跨挂载状态（模块级单例） */

		/** projectDir → [{ file, line }]。视图卸载/重挂不丢，热更新后仍在内存。 */
		const store = new Map();
		let currentCtx = null; // 最近一次 mount 的 ctx，供装饰刷新取当前编辑器
		let currentUi = null; // 最近一次 mount 的 UI 句柄，供操作后刷新列表

		/** 稳定字符串哈希（FNV-1a，32bit）：把任意项目路径压成安全 key 片段。 */
		function hashKey(s) {
		  let h = 0x811c9dc5;
		  for (let i = 0; i < s.length; i++) {
		    h ^= s.charCodeAt(i);
		    h = Math.imul(h, 0x01000193) >>> 0;
		  }
		  return h.toString(16).padStart(8, "0");
		}

		function persistKey(dir) {
		  return `dsh-fw.bookmarks.${hashKey(String(dir))}`;
		}

		async function loadProject(dir) {
		  if (!dir) return [];
		  if (store.has(dir)) return store.get(dir);
		  let list = [];
		  try {
		    const res = await fetch(`${PREFIX}/plugin-data?k=${encodeURIComponent(persistKey(dir))}`, { headers: { Accept: "application/json" } });
		    const body = await res.json().catch(() => null);
		    const v = body?.data;
		    if (Array.isArray(v)) list = v.filter((x) => x && typeof x.file === "string" && Number.isFinite(x.line));
		  } catch {
		    /* 读失败按空处理 */
		  }
		  store.set(dir, list);
		  return list;
		}

		function saveProject(dir) {
		  if (!dir) return;
		  const list = store.get(dir) ?? [];
		  fetch(`${PREFIX}/plugin-data`, {
		    method: "POST",
		    headers: { "Content-Type": "application/json" },
		    body: JSON.stringify({ k: persistKey(dir), v: list }),
		  }).catch(() => {});
		}

		function normPath(p) {
		  return String(p).replace(/\\/g, "/");
		}

		function sameFile(a, b) {
		  return normPath(a).toLowerCase() === normPath(b).toLowerCase();
		}

		function baseName(p) {
		  const n = normPath(p);
		  const i = n.lastIndexOf("/");
		  return i >= 0 ? n.slice(i + 1) : n;
		}

		/* ------------------------------------------------------------------ 视图定义 */

		function buildView() {
		  return {
		    id: VIEW_ID,
		    title: { zh: "书签", en: "Bookmarks" },
		    description: {
		      zh: "切换光标行书签、按项目持久化并点击跳转（gutter 圆点标记）",
		      en: "Toggle line bookmarks, persist per project, jump to them (gutter dots)",
		    },
		    icon: "bookmark",
		    order: 62,
		    when: (ctx) => !!ctx.projectDir,
		    mount(el, ctx) {
		      return mountView(el, ctx);
		    },
		  };
		}

		/* ------------------------------------------------------------------ 核心操作 */

		/** 当前光标所在行号（1 起始）；无编辑器/无文件返回 null。 */
		function caretLine(ed) {
		  if (!ed) return null;
		  const sel = typeof ed.getSelection === "function" ? ed.getSelection() : null;
		  const head = sel?.main?.head;
		  if (head == null) return null;
		  const view = ed.view;
		  if (!view) return null;
		  return view.state.doc.lineAt(head).number;
		}

		/** 切换当前激活文件·当前行的书签。 */
		function toggleFromActive() {
		  const ctx = currentCtx;
		  const ed = ctx?.editor;
		  const file = ctx?.activeFile;
		  if (!ctx || !ed || !file) return;
		  const line = caretLine(ed);
		  if (line == null) return;
		  const dir = ctx.projectDir;
		  const list = store.get(dir) ?? [];
		  const idx = list.findIndex((b) => sameFile(b.file, file) && b.line === line);
		  if (idx >= 0) list.splice(idx, 1);
		  else list.push({ file, line });
		  list.sort((a, b) => (sameFile(a.file, b.file) ? a.line - b.line : normPath(a.file).localeCompare(normPath(b.file))));
		  store.set(dir, list);
		  saveProject(dir);
		  applyDecos();
		  currentUi?.refresh();
		}

		/** 应用当前文件的 gutter 装饰（createDecorations/update）。 */
		function applyDecos() {
		  const ctx = currentCtx;
		  const ed = ctx?.editor;
		  const file = ctx?.activeFile;
		  if (!ed || !file) {
		    if (currentUi?.handle) {
		      currentUi.handle.update([]);
		      currentUi.handle = null;
		    }
		    return;
		  }
		  const items = bookmarkItemsFor(ed, file);
		  if (!currentUi?.handle) currentUi.handle = ed.createDecorations({ items });
		  else currentUi.handle.update(items);
		}

		/** 把某文件的书签行换算成 gutter 装饰条目（列固定行首）。 */
		function bookmarkItemsFor(ed, file) {
		  const dir = currentCtx?.projectDir;
		  const list = (store.get(dir) ?? []).filter((b) => sameFile(b.file, file));
		  const view = ed.view;
		  const doc = view?.state?.doc;
		  if (!doc) return [];
		  const max = doc.lines;
		  return list
		    .filter((b) => b.line >= 1 && b.line <= max)
		    .map((b) => ({ type: "gutter", start: { line: b.line, character: 1 }, category: "bookmark", message: `书签 · 第 ${b.line} 行` }));
		}

		/* ------------------------------------------------------------------ 挂载 UI */

		function mountView(el, ctx) {
		  el.classList.add(`${NS}-view`);
		  el.innerHTML = `
		    <div class="${NS}-root">
		      <div class="${NS}-bar">
		        <button class="${NS}-toggle" type="button" title="切换当前行书签（光标所在行加/去书签）"><span class="${NS}-star">★</span>切换当前行</button>
		      </div>
		      <div class="${NS}-hint"></div>
		      <div class="${NS}-list"></div>
		    </div>`;

		  const hint = el.querySelector(`.${NS}-hint`);
		  const list = el.querySelector(`.${NS}-list`);
		  const toggleBtn = el.querySelector(`.${NS}-toggle`);

		  currentCtx = ctx;
		  currentUi = { handle: null, refresh };
		  let off = [];

		  async function ensureLoaded() {
		    if (ctx.projectDir) await loadProject(ctx.projectDir);
		  }

		  function refresh() {
		    renderList(list, ctx, { onRemove: removeOne });
		    renderHint(hint, ctx);
		  }

		  function removeOne(entry) {
		    const dir = ctx.projectDir;
		    const arr = store.get(dir) ?? [];
		    const i = arr.findIndex((b) => sameFile(b.file, entry.file) && b.line === entry.line);
		    if (i >= 0) arr.splice(i, 1);
		    store.set(dir, arr);
		    saveProject(dir);
		    applyDecos();
		    refresh();
		  }

		  toggleBtn.addEventListener("click", () => toggleFromActive());

		  async function onActiveChanged() {
		    applyDecos();
		    refresh();
		  }

		  async function onProjectChanged(dir) {
		    if (currentUi?.handle) {
		      currentUi.handle.update([]);
		      currentUi.handle = null;
		    }
		    if (dir) await loadProject(dir);
		    applyDecos();
		    refresh();
		  }

		  if (typeof ctx.onDidChangeActiveFile === "function") off.push(ctx.onDidChangeActiveFile(onActiveChanged));
		  if (typeof ctx.onProjectChange === "function") off.push(ctx.onProjectChange(onProjectChanged));

		  (async () => {
		    await ensureLoaded();
		    applyDecos();
		    refresh();
		  })();

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
		    if (currentCtx === ctx) currentCtx = null;
		    if (currentUi && !currentUi.handle) currentUi = null;
		    el.replaceChildren();
		  };
		}

		function renderHint(hint, ctx) {
		  const dir = ctx.projectDir;
		  const total = (store.get(dir) ?? []).length;
		  const file = ctx.activeFile;
		  const inCur = file ? (store.get(dir) ?? []).filter((b) => sameFile(b.file, file)).length : 0;
		  hint.textContent = total ? `共 ${total} 个书签${file ? ` · 当前文件 ${inCur} 个` : ""}` : "尚无书签：把光标放到一行，点上方按钮切换。";
		}

		function renderList(container, ctx, { onRemove }) {
		  const dir = ctx.projectDir;
		  const all = store.get(dir) ?? [];
		  const cur = ctx.activeFile;
		  const groups = [
		    { label: "当前文件", rows: cur ? all.filter((b) => sameFile(b.file, cur)) : [], showFile: false },
		    { label: "其它文件", rows: cur ? all.filter((b) => !sameFile(b.file, cur)) : all, showFile: true },
		  ];

		  const frag = document.createDocumentFragment();
		  let any = false;
		  for (const g of groups) {
		    if (!g.rows.length) continue;
		    any = true;
		    const sec = document.createElement("div");
		    sec.className = `${NS}-group`;
		    const head = document.createElement("div");
		    head.className = `${NS}-ghead`;
		    const label = document.createElement("span");
		    label.textContent = g.label;
		    const count = document.createElement("span");
		    count.className = `${NS}-count`;
		    count.textContent = String(g.rows.length);
		    head.append(label, count);
		    sec.appendChild(head);
		    const wrap = document.createElement("div");
		    wrap.className = `${NS}-glist`;
		    for (const b of g.rows) {
		      const row = document.createElement("div");
		      row.className = `${NS}-row`;
		      const main = document.createElement("button");
		      main.type = "button";
		      main.className = `${NS}-jump`;
		      main.innerHTML = `<span class="${NS}-loc"></span>${g.showFile ? `<span class="${NS}-file"></span>` : ""}`;
		      main.querySelector(`.${NS}-loc`).textContent = `:${b.line}`;
		      if (g.showFile) main.querySelector(`.${NS}-file`).textContent = baseName(b.file);
		      main.title = `${b.file}:${b.line}`;
		      main.addEventListener("click", () => {
		        try {
		          const p = ctx.openFile(b.file, { line: b.line });
		          if (p && typeof p.catch === "function") p.catch(() => {});
		        } catch {
		          /* noop */
		        }
		      });
		      const rm = document.createElement("button");
		      rm.type = "button";
		      rm.className = `${NS}-rm`;
		      rm.textContent = "×";
		      rm.title = "移除此书签";
		      rm.addEventListener("click", () => onRemove(b));
		      row.appendChild(main);
		      row.appendChild(rm);
		      wrap.appendChild(row);
		    }
		    sec.appendChild(wrap);
		    frag.appendChild(sec);
		  }
		  if (!any) {
		    const empty = document.createElement("div");
		    empty.className = `${NS}-empty`;
		    empty.textContent = "（此位置无书签）";
		    frag.appendChild(empty);
		  }
		  container.replaceChildren(frag);
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
		.${NS}-toggle { width: 100%; display: flex; align-items: center; justify-content: center; gap: 6px; padding: 5px 10px; border: 1px solid var(--dsh-accent, #2f81f7); border-radius: 6px; background: var(--dsh-accent-weak, rgba(47,129,247,.14)); color: var(--dsh-accent, #2f81f7); font: inherit; font-weight: 600; cursor: pointer; }
		.${NS}-toggle:hover { background: var(--dsh-accent-soft, rgba(47,129,247,.2)); }
		.${NS}-toggle:focus-visible { outline: 1px solid var(--dsh-accent, #2f81f7); outline-offset: -1px; }
		.${NS}-toggle .${NS}-star { font-size: 13px; line-height: 1; }
		.${NS}-hint { padding: 5px 10px; color: var(--dsh-fg-weak, #8b949e); line-height: 1.5; }
		.${NS}-list { flex: 1 1 auto; padding: 2px 6px 8px; }
		.${NS}-group { margin: 3px 0; }
		.${NS}-ghead { display: flex; align-items: center; gap: 6px; padding: 4px 8px; color: var(--dsh-fg, #c9d1d9); font-weight: 600; }
		.${NS}-count { flex: 0 0 auto; min-width: 16px; padding: 0 5px; border-radius: 8px; background: var(--dsh-bg3, #21262d); color: var(--dsh-fg-weak, #8b949e); font-size: 10px; font-weight: 400; line-height: 15px; text-align: center; }
		.${NS}-row { display: flex; align-items: center; gap: 4px; }
		.${NS}-jump { flex: 1 1 auto; min-width: 0; display: flex; gap: 8px; align-items: baseline; text-align: left; padding: 3px 8px 3px 16px; border: 0; background: transparent; color: var(--dsh-fg, #c9d1d9); font: inherit; cursor: pointer; border-radius: 4px; white-space: nowrap; overflow: hidden; }
		.${NS}-jump:hover { background: var(--dsh-hover, #30363d); }
		.${NS}-jump:focus-visible { outline: 1px solid var(--dsh-accent, #2f81f7); outline-offset: -1px; }
		.${NS}-loc { flex: 0 0 auto; min-width: 2.5em; text-align: right; color: var(--dsh-fg-weak, #8b949e); font-family: var(--dsh-mono, monospace); }
		.${NS}-file { min-width: 0; overflow: hidden; text-overflow: ellipsis; }
		.${NS}-rm { flex: 0 0 auto; width: 18px; height: 18px; line-height: 16px; border: 0; border-radius: 4px; background: transparent; color: var(--dsh-fg-muted, #6e7681); font-size: 14px; cursor: pointer; opacity: 0; transition: opacity .1s ease; }
		.${NS}-row:hover .${NS}-rm, .${NS}-rm:focus-visible { opacity: 1; }
		.${NS}-rm:hover { background: var(--dsh-hover, #30363d); color: var(--dsh-danger, #f85149); }
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
		return { apply, inject, meta };
	}
});
