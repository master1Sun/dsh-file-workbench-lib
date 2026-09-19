window.__ModuleLoader__.manifest({"id":"dsh-fw.todo-tree","name":"TODO 面板","version":"","description":"扫描项目内 TODO/FIXME/HACK 等标签，分组成可跳转列表并高亮当前文件","nameEn":"Todo Tree","descriptionEn":"DSH file editor plugin: activity bar view that scans TODO/FIXME/HACK/XXX (configurable) tags across the project via /grep into a grouped jumpable tree; highlights the active file with v1 createDecorations. Counterpart of VS Code Todo Tree."});
window.__ModuleLoader__.load({
	id: "dsh-fw.todo-tree",
	inject: [],
	factory: (require) => {
		/**
		 * todo-tree.js — DSH 文件编辑器外部插件（纯 JS 单文件）。
		 *
		 * 本插件不依赖宿主 ctx 服务，只经 window.__dshFileWorkbenchVSCode__ 注册一个 Activity Bar「TODO」视图。
		 *
		 * 能力（对标 VS Code Todo Tree）：
		 *  - 用 host `GET /grep`（正则模式）扫描项目内 TODO/FIXME/HACK/XXX…标签（可配置）；
		 *  - 按文件分组列成树形面板，点击在编辑器打开并跳到该行；
		 *  - 当前打开文件里命中的 TODO 行用 v1 createDecorations 高亮底色 + gutter 圆点；
		 *  - 每个项目的标签集合持久化到 /plugin-data（key = dsh-fw.todo.<hash(projectDir)>）。
		 */

		const API_KEY = "__dshFileWorkbenchVSCode__";
		const PREFIX = "/api/dsh-file-workbench";
		const VIEW_ID = "todoTree.view";
		const NS = "dsh-td";
		const DEFAULT_TAGS = "TODO,FIXME,HACK,XXX";

		/** 插件清单（打包进 .pack-meta.json 与 bundle 顶层 manifest() 声明；id 由 pack.mjs 生成，勿手写）。 */
		const meta = {
		    "name": "TODO 面板",
		    "version": "",
		    "description": "扫描项目内 TODO/FIXME/HACK 等标签，分组成可跳转列表并高亮当前文件",
		    "nameEn": "Todo Tree",
		    "descriptionEn": "DSH file editor plugin: activity bar view that scans TODO/FIXME/HACK/XXX (configurable) tags across the project via /grep into a grouped jumpable tree; highlights the active file with v1 createDecorations. Counterpart of VS Code Todo Tree."
		};

		const inject = [];


		/* ------------------------------------------------------------------ 跨挂载状态 */

		/** projectDir → 标签串。 */
		const tagsByProject = new Map();
		/** projectDir → [{ file, line, text }]。 */
		const todosByProject = new Map();
		let currentCtx = null;
		let currentUi = null;

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
		  return `dsh-fw.todo.${hashKey(String(dir))}`;
		}

		async function loadTags(dir) {
		  if (!dir) return DEFAULT_TAGS;
		  if (tagsByProject.has(dir)) return tagsByProject.get(dir);
		  let tags = DEFAULT_TAGS;
		  try {
		    const res = await fetch(`${PREFIX}/plugin-data?k=${encodeURIComponent(persistKey(dir))}`, { headers: { Accept: "application/json" } });
		    const body = await res.json().catch(() => null);
		    const v = body?.data;
		    if (typeof v === "string" && v.trim()) tags = v;
		  } catch {
		    /* ignore */
		  }
		  tagsByProject.set(dir, tags);
		  return tags;
		}

		function saveTags(dir, tags) {
		  tagsByProject.set(dir, tags);
		  fetch(`${PREFIX}/plugin-data`, {
		    method: "POST",
		    headers: { "Content-Type": "application/json" },
		    body: JSON.stringify({ k: persistKey(dir), v: tags }),
		  }).catch(() => {});
		}

		/* ------------------------------------------------------------------ 视图定义 */

		function buildView() {
		  return {
		    id: VIEW_ID,
		    title: { zh: "TODO 面板", en: "Todo Tree" },
		    description: {
		      zh: "扫描项目内 TODO/FIXME/HACK 等标签，分组成可跳转列表并高亮当前文件",
		      en: "Scan TODO/FIXME/HACK tags across the project into a jumpable tree; highlight current file",
		    },
		    icon: "tasks",
		    order: 70,
		    when: (ctx) => !!ctx.projectDir,
		    mount(el, ctx) {
		      return mountView(el, ctx);
		    },
		  };
		}

		/* ------------------------------------------------------------------ grep 扫描 */

		/** 把标签串拼成 /grep 的正则：词边界 + 大小写不敏感。 */
		function tagsToRegex(tags) {
		  const list = String(tags)
		    .split(/[,\s]+/)
		    .map((t) => t.trim())
		    .filter(Boolean)
		    .map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
		  if (!list.length) return "";
		  return `\\b(${list.join("|")})\\b`;
		}

		async function scan(dir, tags) {
		  const re = tagsToRegex(tags);
		  if (!re) return [];
		  const params = new URLSearchParams({ q: re, path: dir, regex: "1", word: "0", case: "0" });
		  const res = await fetch(`${PREFIX}/grep?${params.toString()}`, { headers: { Accept: "application/json" } });
		  if (!res.ok) throw new Error(`HTTP ${res.status}`);
		  const body = await res.json().catch(() => null);
		  return normalizeHits(body, dir);
		}

		/** 兼容 /grep 载荷（{ ok, data: { files:[{ rel, hits:[{ ln, text }] }] } }），归一化为 [{ file, line, text }]。 */
		function normalizeHits(body, dir) {
		  const flat = [];
		  const push = (file, line, text) => file && flat.push({ file, line: Number(line) || 0, text: String(text ?? "") });
		  const data = body?.data ?? body;
		  const groups = Array.isArray(data) ? data : data?.files ?? data?.groups ?? data?.matches ?? [];
		  if (Array.isArray(groups)) {
		    for (const g of groups) {
		      const rel = g.rel ?? g.file ?? g.path ?? g.name;
		      const file = rel ? joinRoot(dir, rel) : null;
		      const inner = g.hits ?? g.lines ?? g.matches ?? [];
		      if (Array.isArray(inner)) {
		        for (const h of inner) {
		          if (h && typeof h === "object") push(file, h.ln ?? h.line, h.text ?? h.content ?? "");
		          else push(file, h, ""); // inner 是纯行号数组
		        }
		      }
		    }
		  }
		  return flat;
		}

		/** 把 /grep 的相对路径拼成绝对路径，供 openFile 与 activeFile 匹配。 */
		function joinRoot(dir, rel) {
		  const r = normPath(rel).replace(/^\/+/, "");
		  const base = normPath(dir).replace(/\/+$/, "");
		  return `${base}/${r}`;
		}

		/* ------------------------------------------------------------------ 装饰应用 */

		function normPath(p) {
		  return String(p).replace(/\\/g, "/");
		}
		function sameFile(a, b) {
		  return normPath(a).toLowerCase() === normPath(b).toLowerCase();
		}

		function decoItemsFor(ed, file) {
		  const dir = currentCtx?.projectDir;
		  const todos = (todosByProject.get(dir) ?? []).filter((t) => sameFile(t.file, file));
		  const doc = ed?.view?.state?.doc;
		  if (!doc) return [];
		  const items = [];
		  for (const t of todos) {
		    if (t.line < 1 || t.line > doc.lines) continue;
		    const ln = doc.line(t.line);
		    items.push({ type: "mark", start: { line: t.line, character: 1 }, end: { offset: ln.to }, category: "highlight", message: t.text.trim().slice(0, 120) });
		    items.push({ type: "gutter", start: { line: t.line, character: 1 }, category: "info", message: "TODO" });
		  }
		  return items;
		}

		function applyDecos() {
		  const ed = currentCtx?.editor;
		  const file = currentCtx?.activeFile;
		  if (!ed || !file) {
		    if (currentUi?.handle) {
		      currentUi.handle.update([]);
		      currentUi.handle = null;
		    }
		    return;
		  }
		  const items = decoItemsFor(ed, file);
		  if (!currentUi?.handle) currentUi.handle = ed.createDecorations({ items });
		  else currentUi.handle.update(items);
		}

		/* ------------------------------------------------------------------ 挂载 UI */

		function mountView(el, ctx) {
		  el.classList.add(`${NS}-view`);
		  el.innerHTML = `
		    <div class="${NS}-root">
		      <div class="${NS}-bar">
		        <input class="${NS}-tags" type="text" spellcheck="false" placeholder="TODO,FIXME,HACK,XXX" />
		        <button class="${NS}-scan" type="button">扫描</button>
		      </div>
		      <div class="${NS}-hint"></div>
		      <div class="${NS}-tree"></div>
		    </div>`;

		  const tagsInput = el.querySelector(`.${NS}-tags`);
		  const scanBtn = el.querySelector(`.${NS}-scan`);
		  const hint = el.querySelector(`.${NS}-hint`);
		  const tree = el.querySelector(`.${NS}-tree`);

		  currentCtx = ctx;
		  currentUi = { handle: null, refresh };
		  let off = [];
		  let scanning = false;

		  async function doScan() {
		    if (scanning) return;
		    const dir = ctx.projectDir;
		    if (!dir) return;
		    const tags = tagsInput.value.trim() || DEFAULT_TAGS;
		    saveTags(dir, tags);
		    scanning = true;
		    scanBtn.disabled = true;
		    hint.textContent = "正在扫描项目…";
		    tree.replaceChildren();
		    try {
		      const todos = await scan(dir, tags);
		      todosByProject.set(dir, todos);
		      applyDecos();
		      renderTree(tree, ctx);
		      hint.textContent = todos.length ? `命中 ${todos.length} 条 · ${countFiles(todos)} 个文件` : "未找到匹配的标签";
		    } catch (e) {
		      hint.textContent = `扫描失败：${e?.message ?? e}`;
		    } finally {
		      scanning = false;
		      scanBtn.disabled = false;
		    }
		  }

		  scanBtn.addEventListener("click", doScan);
		  tagsInput.addEventListener("keydown", (ev) => {
		    if (ev.key === "Enter") doScan();
		  });

		  function refresh() {
		    renderTree(tree, ctx);
		  }

		  function onActiveChanged() {
		    applyDecos();
		  }

		  async function onProjectChanged(dir) {
		    if (currentUi?.handle) {
		      currentUi.handle.update([]);
		      currentUi.handle = null;
		    }
		    tagsInput.value = dir ? await loadTags(dir) : DEFAULT_TAGS;
		    applyDecos();
		    refresh();
		  }

		  if (typeof ctx.onDidChangeActiveFile === "function") off.push(ctx.onDidChangeActiveFile(onActiveChanged));
		  if (typeof ctx.onProjectChange === "function") off.push(ctx.onProjectChange(onProjectChanged));

		  (async () => {
		    if (ctx.projectDir) tagsInput.value = (await loadTags(ctx.projectDir)) || DEFAULT_TAGS;
		    // 进入即扫一次，保证有内容可看。
		    if (ctx.projectDir) doScan();
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
		    el.replaceChildren();
		  };
		}

		function countFiles(todos) {
		  const s = new Set();
		  for (const t of todos) s.add(normPath(t.file).toLowerCase());
		  return s.size;
		}

		function renderTree(container, ctx) {
		  const dir = ctx.projectDir;
		  const todos = todosByProject.get(dir) ?? [];
		  if (!todos.length) {
		    container.replaceChildren(emptyNode("（暂无结果，点「扫描」搜索项目）"));
		    return;
		  }
		  const byFile = new Map();
		  for (const t of todos) {
		    if (!byFile.has(t.file)) byFile.set(t.file, []);
		    byFile.get(t.file).push(t);
		  }
		  const frag = document.createDocumentFragment();
		  for (const [file, rows] of byFile) {
		    const group = document.createElement("div");
		    group.className = `${NS}-group`;
		    const head = document.createElement("button");
		    head.type = "button";
		    head.className = `${NS}-ghead`;
		    const chev = document.createElement("span");
		    chev.className = `${NS}-chev`;
		    chev.textContent = "\u25be"; // ▾
		    const label = document.createElement("span");
		    label.className = `${NS}-glabel`;
		    label.textContent = `${baseName(file)} (${rows.length})`;
		    head.append(chev, label);
		    head.title = file;
		    head.addEventListener("click", () => group.classList.toggle(`${NS}-collapsed`));
		    group.appendChild(head);
		    const wrap = document.createElement("div");
		    wrap.className = `${NS}-glist`;
		    for (const r of rows) {
		      const row = document.createElement("button");
		      row.type = "button";
		      row.className = `${NS}-row`;
		      row.innerHTML = `<span class="${NS}-lineno">${r.line}</span><span class="${NS}-line"></span>`;
		      row.querySelector(`.${NS}-line`).appendChild(highlightTag(r.text));
		      row.title = `${file}:${r.line}`;
		      row.addEventListener("click", () => {
		        try {
		          const p = ctx.openFile(file, r.line ? { line: r.line } : undefined);
		          if (p && typeof p.catch === "function") p.catch(() => {});
		        } catch {
		          /* noop */
		        }
		      });
		      wrap.appendChild(row);
		    }
		    group.appendChild(wrap);
		    frag.appendChild(group);
		  }
		  container.replaceChildren(frag);
		}

		/** 把行文本里的 TODO/FIXME 等标签包成彩色 span（简单起见按已知词高亮）。 */
		function highlightTag(text) {
		  const span = document.createElement("span");
		  const re = /\b(TODO|FIXME|HACK|XXX|NOTE)\b/i;
		  const m = text.match(re);
		  if (!m) {
		    span.textContent = text.trim();
		    return span;
		  }
		  span.appendChild(document.createTextNode(text.slice(0, m.index)));
		  const tag = document.createElement("span");
		  tag.className = `${NS}-tag`;
		  tag.textContent = m[0];
		  span.appendChild(tag);
		  span.appendChild(document.createTextNode(text.slice(m.index + m[0].length).trim()));
		  return span;
		}

		function emptyNode(text) {
		  const d = document.createElement("div");
		  d.className = `${NS}-empty`;
		  d.textContent = text;
		  return d;
		}

		function baseName(p) {
		  const n = normPath(p);
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
		.${NS}-bar { display: flex; gap: 6px; padding: 8px 10px; position: sticky; top: 0; background: var(--dsh-bg, #0d1117); border-bottom: 1px solid var(--dsh-border, #30363d); z-index: 3; }
		.${NS}-tags { flex: 1 1 auto; min-width: 0; padding: 4px 8px; border: 1px solid var(--dsh-border, #30363d); border-radius: 6px; background: var(--dsh-bg2, #161b22); color: inherit; outline: none; font: inherit; }
		.${NS}-tags::placeholder { color: var(--dsh-fg-muted, #6e7681); }
		.${NS}-tags:focus { border-color: var(--dsh-accent, #2f81f7); box-shadow: 0 0 0 2px var(--dsh-accent-weak, rgba(47,129,247,.14)); }
		.${NS}-scan { flex: 0 0 auto; padding: 4px 12px; border: 1px solid var(--dsh-accent, #2f81f7); border-radius: 6px; background: var(--dsh-accent-weak, rgba(47,129,247,.14)); color: var(--dsh-accent, #2f81f7); font: inherit; font-weight: 600; cursor: pointer; }
		.${NS}-scan:hover:not(:disabled) { background: var(--dsh-accent-soft, rgba(47,129,247,.2)); }
		.${NS}-scan:disabled { opacity: .5; cursor: default; }
		.${NS}-scan:focus-visible { outline: 1px solid var(--dsh-accent, #2f81f7); outline-offset: -1px; }
		.${NS}-hint { padding: 5px 10px; color: var(--dsh-fg-weak, #8b949e); line-height: 1.5; }
		.${NS}-tree { flex: 1 1 auto; padding: 2px 6px 8px; }
		.${NS}-group { margin: 2px 0; }
		.${NS}-ghead { display: flex; align-items: center; gap: 5px; width: 100%; text-align: left; padding: 4px 8px; border: 0; background: transparent; color: var(--dsh-fg, #c9d1d9); font: inherit; font-weight: 600; cursor: pointer; border-radius: 4px; }
		.${NS}-ghead:hover { background: var(--dsh-bg2, #161b22); }
		.${NS}-ghead:focus-visible { outline: 1px solid var(--dsh-accent, #2f81f7); outline-offset: -1px; }
		.${NS}-chev { flex: 0 0 auto; font-size: 9px; line-height: 1; color: var(--dsh-fg-weak, #8b949e); transition: transform .1s ease; }
		.${NS}-collapsed .${NS}-chev { transform: rotate(-90deg); }
		.${NS}-glabel { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
		.${NS}-collapsed .${NS}-glist { display: none; }
		.${NS}-row { display: flex; gap: 8px; align-items: baseline; width: 100%; text-align: left; padding: 2px 8px 2px 22px; border: 0; background: transparent; color: var(--dsh-fg, #c9d1d9); font: inherit; cursor: pointer; border-radius: 4px; white-space: nowrap; overflow: hidden; }
		.${NS}-row:hover { background: var(--dsh-hover, #30363d); }
		.${NS}-row:focus-visible { outline: 1px solid var(--dsh-accent, #2f81f7); outline-offset: -1px; }
		.${NS}-lineno { flex: 0 0 auto; min-width: 2.5em; text-align: right; color: var(--dsh-fg-weak, #8b949e); font-family: var(--dsh-mono, monospace); }
		.${NS}-line { min-width: 0; overflow: hidden; text-overflow: ellipsis; }
		.${NS}-tag { display: inline-block; margin-right: 4px; padding: 0 5px; border-radius: 4px; background: color-mix(in srgb, var(--dsh-warn, #d29922) 18%, transparent); color: var(--dsh-warn, #d29922); font-weight: 700; font-size: 10px; }
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
