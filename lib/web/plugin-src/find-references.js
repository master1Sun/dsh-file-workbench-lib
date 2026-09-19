window.__ModuleLoader__.manifest({"id":"dsh-fw.find-references","name":"引用查找","version":"","description":"跟随光标选中词，在项目内查找全部引用并点击跳转","nameEn":"Find References","descriptionEn":"DSH file editor plugin: activity bar view that takes the word at the caret and finds all references in the project via /grep (whole-word), clicking a hit jumps there. Counterpart of VS Code Find All References."});
window.__ModuleLoader__.load({
	id: "dsh-fw.find-references",
	factory: (require) => {
		/**
		 * find-references.js — DSH 文件编辑器外部插件（纯 JS 单文件）。
		 *
		 * 宿主加载器执行 apply(ctx)。本插件不依赖任何宿主 ctx 服务——它只经文件编辑器
		 * 暴露到 window 上的**外部注入 API**（window.__dshFileWorkbenchVSCode__）注册一个
		 * Activity Bar 视图，因此 inject = []。
		 *
		 * 能力：在编辑器左栏放一个「引用查找」图标。点开即跟随当前光标处的单词（v1
		 * ctx.editor.getSelection），用工作台 host 的 /grep 接口在项目内做全词搜索，把命中
		 * 按文件分组列成可点击列表，点一条即在编辑器打开对应文件并跳到该行。对标 VS Code
		 * Shift+F12「Find All References」。
		 *
		 * 无 v1 / 无选区时降级为视图内一个输入框，手动输入要查的词——保证功能始终可用。
		 */

		/** 本插件用到的注入 API 命名空间与最小类型（避免引宿主类型包）。 */
		const API_KEY = "__dshFileWorkbenchVSCode__";
		/** host REST 前缀（与 workbench 一致）。 */
		const PREFIX = "/api/dsh-file-workbench";
		/** 本视图的稳定 id（带命名空间；同 id 覆盖，幂等支持热更新）。 */
		const VIEW_ID = "findReferences.view";
		/** CSS 命名空间前缀，避免与工作台 / 其他插件样式冲突。 */
		const NS = "dsh-fr";

		/** 插件清单（打包进 .pack-meta.json 与 bundle 顶层 manifest() 声明；id 由 pack.mjs 生成，勿手写）。 */
		const meta = {
		    "name": "引用查找",
		    "version": "",
		    "description": "跟随光标选中词，在项目内查找全部引用并点击跳转",
		    "nameEn": "Find References",
		    "descriptionEn": "DSH file editor plugin: activity bar view that takes the word at the caret and finds all references in the project via /grep (whole-word), clicking a hit jumps there. Counterpart of VS Code Find All References."
		};

		const inject = [];

		/**
		 * @param _ctx - 宿主根上下文（本插件不使用，仅满足加载器契约）。
		 */

		/* ------------------------------------------------------------------ 视图定义 */

		function buildView() {
		  return {
		    id: VIEW_ID,
		    title: { zh: "引用查找", en: "Find References" },
		    description: {
		      zh: "跟随光标选中词，在项目内查找全部引用并点击跳转",
		      en: "Follow the word at the caret and find all references in the project",
		    },
		    icon: "search",
		    order: 60,
		    // 未打开项目时没有可扫描的范围，隐藏图标。
		    when: (ctx) => !!ctx.projectDir,
		    mount(el, ctx) {
		      return mountView(el, ctx);
		    },
		  };
		}

		/** 挂载：渲染 UI + 绑定交互，返回清理函数。 */
		function mountView(el, ctx) {
		  el.classList.add(`${NS}-view`);
		  el.innerHTML = `
		    <div class="${NS}-root">
		      <div class="${NS}-head">
		        <input class="${NS}-input" type="text" spellcheck="false" placeholder="输入或跟随光标取词…" />
		        <button class="${NS}-btn" type="button">查找</button>
		      </div>
		      <div class="${NS}-hint"></div>
		      <div class="${NS}-results"></div>
		    </div>`;

		  const input = el.querySelector(`.${NS}-input`);
		  const btn = el.querySelector(`.${NS}-btn`);
		  const hint = el.querySelector(`.${NS}-hint`);
		  const results = el.querySelector(`.${NS}-results`);

		  let runId = 0; // 竞态守卫：慢响应不得覆盖新查询
		  let offActive = null;

		  /** 从 v1 编辑器门面读取光标处的单词；不可用时返回 ""。 */
		  function wordAtCaret() {
		    const ed = ctx.editor;
		    if (!ed || typeof ed.getSelection !== "function") return "";
		    const sel = ed.getSelection();
		    if (!sel) return "";
		    const main = sel.main;
		    if (!main) return "";
		    let from = main.from;
		    let to = main.to;
		    const text = typeof ed.getText === "function" ? ed.getText() : ed.view?.state?.doc?.toString?.() ?? "";
		    if (from === to) {
		      // 无选区：以光标为中心向两侧扩到单词边界。
		      const expanded = expandWord(text, from);
		      from = expanded.from;
		      to = expanded.to;
		    }
		    return text.slice(from, to).trim();
		  }

		  async function runSearch(termRaw) {
		    const term = (termRaw ?? "").trim();
		    if (!term) {
		      hint.textContent = "请输入或把光标放到一个标识符上。";
		      results.replaceChildren();
		      return;
		    }
		    if (!ctx.projectDir) {
		      hint.textContent = "请先打开一个项目目录。";
		      results.replaceChildren();
		      return;
		    }
		    const myRun = ++runId;
		    hint.textContent = `正在项目内查找 “${term}” …`;
		    results.replaceChildren();
		    try {
		      const hits = await grep(term, ctx.projectDir);
		      if (myRun !== runId) return; // 已被更新的查询取代
		      renderResults(results, hits, term, ctx);
		      hint.textContent = hits.length
		        ? `“${term}” · 命中 ${hits.length} 处`
		        : `“${term}” · 无匹配`;
		    } catch (e) {
		      if (myRun !== runId) return;
		      hint.textContent = `查找失败：${e?.message ?? e}`;
		    }
		  }

		  // 跟随光标：激活文件切换 / 首次进入时，取一次光标词填入输入框。
		  function syncFromCaret() {
		    const w = wordAtCaret();
		    if (w) {
		      input.value = w;
		      runSearch(w);
		    }
		  }

		  btn.addEventListener("click", () => runSearch(input.value));
		  input.addEventListener("keydown", (ev) => {
		    if (ev.key === "Enter") runSearch(input.value);
		  });

		  // v1：订阅激活文件变化，切文件时重新取光标词（不自动跑，仅填词，避免频繁全盘扫）。
		  if (typeof ctx.onDidChangeActiveFile === "function") {
		    offActive = ctx.onDidChangeActiveFile(() => {
		      const w = wordAtCaret();
		      if (w) input.value = w;
		    });
		  }

		  // 首帧尝试跟随光标取词；取不到则留空待用户输入。
		  requestAnimationFrame(syncFromCaret);

		  return () => {
		    if (offActive) offActive();
		    el.replaceChildren();
		  };
		}

		/* ------------------------------------------------------------------ grep 调用 */

		/** 调 host /grep 做全词内容搜索，返回扁平命中数组。 */
		async function grep(term, dir) {
		  const params = new URLSearchParams({
		    q: term,
		    path: dir,
		    word: "1", // 全词
		    regex: "0",
		    case: "0",
		  });
		  const url = `${PREFIX}/grep?${params.toString()}`;
		  const res = await fetch(url, { headers: { Accept: "application/json" } });
		  if (!res.ok) throw new Error(`HTTP ${res.status}`);
		  const body = await res.json().catch(() => null);
		  return normalizeHits(body, dir);
		}

		/**
		 * 归一化 /grep 载荷（{ ok, data: { files:[{ rel, hits:[{ ln, text }] }] } }）为 [{ file, line, text }]。
		 * rel 是相对搜索根的路径，拼回绝对路径以匹配编辑器 activeFile / openFile。
		 */
		function normalizeHits(body, dir) {
		  const flat = [];
		  const push = (file, line, text) => file && flat.push({ file, line: Number(line) || 0, text: String(text ?? "") });
		  const joinRoot = (rel) => {
		    const r = String(rel).replace(/\\/g, "/").replace(/^\/+/, "");
		    return `${String(dir).replace(/\\/g, "/").replace(/\/+$/, "")}/${r}`;
		  };
		  const data = body?.data ?? body;
		  const groups = Array.isArray(data) ? data : data?.files ?? data?.groups ?? data?.matches ?? [];
		  if (Array.isArray(groups)) {
		    for (const g of groups) {
		      const rel = g.rel ?? g.file ?? g.path ?? g.name;
		      const file = rel ? joinRoot(rel) : null;
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

		/* ------------------------------------------------------------------ 结果渲染 */

		function renderResults(container, hits, term, ctx) {
		  if (!hits.length) {
		    container.replaceChildren();
		    return;
		  }
		  // 按文件分组，保持首次出现顺序。
		  const byFile = new Map();
		  for (const h of hits) {
		    if (!byFile.has(h.file)) byFile.set(h.file, []);
		    byFile.get(h.file).push(h);
		  }

		  const frag = document.createDocumentFragment();
		  for (const [file, rows] of byFile) {
		    const group = document.createElement("div");
		    group.className = `${NS}-group`;

		    const ghead = document.createElement("button");
		    ghead.type = "button";
		    ghead.className = `${NS}-ghead`;
		    const chev = document.createElement("span");
		    chev.className = `${NS}-chev`;
		    chev.textContent = "\u25be"; // ▾
		    const label = document.createElement("span");
		    label.className = `${NS}-glabel`;
		    label.textContent = `${baseName(file)} (${rows.length})`;
		    ghead.append(chev, label);
		    ghead.title = file;
		    ghead.addEventListener("click", () => group.classList.toggle(`${NS}-collapsed`));
		    group.appendChild(ghead);

		    const list = document.createElement("div");
		    list.className = `${NS}-glist`;
		    for (const r of rows) {
		      const row = document.createElement("button");
		      row.type = "button";
		      row.className = `${NS}-row`;
		      row.innerHTML = `<span class="${NS}-lineno">${r.line}</span><span class="${NS}-line"></span>`;
		      row.querySelector(`.${NS}-line`).appendChild(highlight(r.text, term));
		      row.addEventListener("click", () => openAt(ctx, r.file, r.line));
		      list.appendChild(row);
		    }
		    group.appendChild(list);
		    frag.appendChild(group);
		  }
		  container.replaceChildren(frag);
		}

		/** 点击一条命中：在工作台/编辑器中打开文件并跳到该行。 */
		function openAt(ctx, file, line) {
		  try {
		    const p = ctx.openFile(file, line ? { line } : undefined);
		    if (p && typeof p.catch === "function") p.catch(() => {});
		  } catch {
		    /* openFile 抛错时静默；面板已捕获主要错误路径 */
		  }
		}

		/** 把命中行里的 term 片段包成 <mark>（大小写不敏感，先转义再高亮）。 */
		function highlight(text, term) {
		  const span = document.createElement("span");
		  if (!term) {
		    span.textContent = text;
		    return span;
		  }
		  const lower = text.toLowerCase();
		  const tl = term.toLowerCase();
		  let i = 0;
		  let idx = lower.indexOf(tl);
		  if (idx < 0) {
		    span.textContent = text;
		    return span;
		  }
		  while (idx >= 0) {
		    if (idx > i) span.appendChild(document.createTextNode(text.slice(i, idx)));
		    const mark = document.createElement("mark");
		    mark.className = `${NS}-mark`;
		    mark.textContent = text.slice(idx, idx + term.length);
		    span.appendChild(mark);
		    i = idx + term.length;
		    idx = lower.indexOf(tl, i);
		  }
		  if (i < text.length) span.appendChild(document.createTextNode(text.slice(i)));
		  return span;
		}

		/* ------------------------------------------------------------------ 小工具 */

		/** 从 pos 向两侧扩展到最近的非单词字符边界，得到光标所在单词区间。 */
		function expandWord(text, pos) {
		  const isWord = (c) => c && /[A-Za-z0-9_$]/.test(c);
		  let from = Math.max(0, Math.min(text.length, pos));
		  let to = from;
		  while (from > 0 && isWord(text[from - 1])) from--;
		  while (to < text.length && isWord(text[to])) to++;
		  return { from, to };
		}

		function baseName(p) {
		  const norm = String(p).replace(/\\/g, "/");
		  const i = norm.lastIndexOf("/");
		  return i >= 0 ? norm.slice(i + 1) : norm;
		}

		/** 轮询直到 predicate 成功（注入 API 可能晚于本 apply 就绪）。 */

		/* ------------------------------------------------------------------ 样式（注入一次，命名空间隔离） */

		injectStyles();

		function injectStyles() {
		  if (typeof document === "undefined") return;
		  if (document.getElementById(`${NS}-styles`)) return;
		  const css = `
		.${NS}-view { color: var(--dsh-fg, #c9d1d9); font-size: 12px; }
		.${NS}-root { display: flex; flex-direction: column; min-height: 100%; }
		.${NS}-head { display: flex; gap: 6px; padding: 8px 10px; position: sticky; top: 0; background: var(--dsh-bg, #0d1117); border-bottom: 1px solid var(--dsh-border, #30363d); z-index: 3; }
		.${NS}-input { flex: 1 1 auto; min-width: 0; padding: 4px 8px; border: 1px solid var(--dsh-border, #30363d); border-radius: 6px; background: var(--dsh-bg2, #161b22); color: inherit; outline: none; font: inherit; }
		.${NS}-input::placeholder { color: var(--dsh-fg-muted, #6e7681); }
		.${NS}-input:focus { border-color: var(--dsh-accent, #2f81f7); box-shadow: 0 0 0 2px var(--dsh-accent-weak, rgba(47,129,247,.14)); }
		.${NS}-btn { flex: 0 0 auto; padding: 4px 12px; border: 1px solid var(--dsh-border, #30363d); border-radius: 6px; background: var(--dsh-bg2, #161b22); color: inherit; cursor: pointer; font: inherit; }
		.${NS}-btn:hover { border-color: var(--dsh-accent, #2f81f7); color: var(--dsh-accent, #2f81f7); }
		.${NS}-btn:focus-visible, .${NS}-ghead:focus-visible, .${NS}-row:focus-visible { outline: 1px solid var(--dsh-accent, #2f81f7); outline-offset: -1px; }
		.${NS}-hint { padding: 5px 10px; color: var(--dsh-fg-weak, #8b949e); line-height: 1.5; }
		.${NS}-results { flex: 1 1 auto; padding: 2px 6px 8px; }
		.${NS}-group { margin: 2px 0; }
		.${NS}-ghead { display: flex; align-items: center; gap: 5px; width: 100%; text-align: left; padding: 4px 8px; border: 0; background: transparent; color: var(--dsh-fg, #c9d1d9); font-weight: 600; font-size: inherit; cursor: pointer; border-radius: 4px; }
		.${NS}-ghead:hover { background: var(--dsh-bg2, #161b22); }
		.${NS}-chev { flex: 0 0 auto; font-size: 9px; line-height: 1; color: var(--dsh-fg-weak, #8b949e); transition: transform .1s ease; }
		.${NS}-collapsed .${NS}-chev { transform: rotate(-90deg); }
		.${NS}-glabel { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
		.${NS}-collapsed .${NS}-glist { display: none; }
		.${NS}-row { display: flex; gap: 8px; align-items: baseline; width: 100%; text-align: left; padding: 2px 8px 2px 22px; border: 0; background: transparent; color: var(--dsh-fg, #c9d1d9); font: inherit; cursor: pointer; border-radius: 4px; white-space: nowrap; overflow: hidden; }
		.${NS}-row:hover { background: var(--dsh-hover, #30363d); }
		.${NS}-lineno { flex: 0 0 auto; min-width: 2.5em; text-align: right; color: var(--dsh-fg-weak, #8b949e); font-family: var(--dsh-mono, monospace); }
		.${NS}-line { min-width: 0; overflow: hidden; text-overflow: ellipsis; }
		.${NS}-mark { background: var(--dsh-select, rgba(31,111,235,.2)); color: inherit; border-radius: 2px; padding: 0 1px; }
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
