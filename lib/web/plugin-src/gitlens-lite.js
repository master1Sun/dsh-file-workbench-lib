window.__ModuleLoader__.manifest({"id":"dsh-fw.gitlens-lite","name":"Git 追溯","version":"","description":"对当前文件 git blame，行尾幽灵注释 + 可跳转的作者/时间列表","nameEn":"GitLens-lite","descriptionEn":"DSH file editor plugin: activity bar view that runs git blame on the active file (via /git/run --porcelain), lists per-line author/time and jumps to the line; appends ghost annotations with v1 createDecorations widgets. Counterpart of VS Code GitLens inline blame."});
window.__ModuleLoader__.load({
	id: "dsh-fw.gitlens-lite",
	factory: (require) => {
		/**
		 * gitlens-lite.js — DSH 文件编辑器外部插件（纯 JS 单文件）。
		 *
		 * 本插件不依赖宿主 ctx 服务，只经 window.__dshFileWorkbenchVSCode__ 注册一个 Activity Bar「Git 追溯」视图。
		 *
		 * 能力（对标 VS Code GitLens inline blame）：
		 *  - 对当前打开文件跑 `git blame --porcelain`（经 host `POST /git/run { path:projectDir, args }`），
		 *    解析出**每一行**的提交作者 / 时间 / 摘要；
		 *  - 用 v1 ctx.editor.createDecorations 的 widget 在每行行尾追加淡灰幽灵注释（作者 · 日期）；
		 *  - 面板列出各行 blame 信息，点击跳到该行；顶部显示光标所在行的 blame 概要；
		 *  - 仅对 git 仓库内的文件生效；未保存新文件或不在仓库时安全降级为提示。
		 *
		 * 说明：blame 反映的是磁盘上的最后一次提交内容。若编辑器有未保存改动，行号可能与 HEAD 略有偏移，
		 * 幽灵注释仍按当前缓冲行号渲染——够用且零额外依赖。
		 */

		const API_KEY = "__dshFileWorkbenchVSCode__";
		const PREFIX = "/api/dsh-file-workbench";
		const VIEW_ID = "gitlens.view";
		const NS = "dsh-gl";

		/** 插件清单（打包进 .pack-meta.json 与 bundle 顶层 manifest() 声明；id 由 pack.mjs 生成，勿手写）。 */
		const meta = {
		    "name": "Git 追溯",
		    "version": "",
		    "description": "对当前文件 git blame，行尾幽灵注释 + 可跳转的作者/时间列表",
		    "nameEn": "GitLens-lite",
		    "descriptionEn": "DSH file editor plugin: activity bar view that runs git blame on the active file (via /git/run --porcelain), lists per-line author/time and jumps to the line; appends ghost annotations with v1 createDecorations widgets. Counterpart of VS Code GitLens inline blame."
		};

		const inject = [];


		/* ------------------------------------------------------------------ 跨挂载状态 */

		/** file(abs,norm) → Map<lineNo, {author, when, summary, sha}>。按文件缓存 blame，切回即现。 */
		const blameByFile = new Map();
		let currentCtx = null;
		let currentUi = null;

		/* ------------------------------------------------------------------ 视图定义 */

		function buildView() {
		  return {
		    id: VIEW_ID,
		    title: { zh: "Git 追溯", en: "GitLens-lite" },
		    description: {
		      zh: "对当前文件 git blame，行尾幽灵注释 + 可跳转的作者/时间列表",
		      en: "git blame the active file: inline ghost annotations + a jumpable author list",
		    },
		    icon: "commit",
		    order: 68,
		    when: (ctx) => !!ctx.projectDir,
		    mount(el, ctx) {
		      return mountView(el, ctx);
		    },
		  };
		}

		/* ------------------------------------------------------------------ 路径工具 */

		function normPath(p) {
		  return String(p).replace(/\\/g, "/");
		}
		function sameFile(a, b) {
		  return normPath(a).toLowerCase() === normPath(b).toLowerCase();
		}
		/** 相对项目根（posix 风格），供 git blame 参数。 */
		function relPath(dir, file) {
		  const d = normPath(dir).replace(/\/+$/, "").toLowerCase();
		  const f = normPath(file);
		  if (f.toLowerCase().startsWith(d)) {
		    let r = f.slice(d.length).replace(/^\/+/, "");
		    return r || ".";
		  }
		  return f; // 兜底：绝对路径 git 也能接受（若在仓库内）
		}

		/* ------------------------------------------------------------------ blame 获取 + 解析 */

		async function fetchBlame(dir, file) {
		  const rel = relPath(dir, file);
		  const res = await fetch(`${PREFIX}/git/run`, {
		    method: "POST",
		    headers: { "Content-Type": "application/json" },
		    body: JSON.stringify({ path: dir, args: ["blame", "--porcelain", "--", rel] }),
		  });
		  const body = await res.json().catch(() => null);
		  if (!body?.ok) throw new Error(body?.error || `HTTP ${res.status}`);
		  const d = body.data || {};
		  if (d.code !== 0) throw new Error((d.stderr || "git blame 失败").trim().slice(0, 200));
		  return parsePorcelain(d.stdout || "", file);
		}

		/**
		 * 解析 `git blame --porcelain` 输出 → Map<finalLineNo, entry>。
		 * 结构：<sha> <orig> <final> [<numLines]>
		 *   author A / author-time T / committer … / summary S   （每个 header 块内，首见为准）
		 *   filename F
		 *   \t<line text>                                        （porcelain 每条最终都带 \t 内容行）
		 */
		function parsePorcelain(out, file) {
		  const map = new Map();
		  const lines = out.split(/\r?\n/);
		  let cur = null; // { sha, final, author, authorTime, summary }
		  for (const line of lines) {
		    if (line.startsWith("\t")) {
		      if (cur && cur.final != null) {
		        map.set(cur.final, {
		          sha: cur.sha,
		          author: cur.author || "?",
		          when: cur.authorTime ? new Date(cur.authorTime * 1000) : null,
		          summary: cur.summary || "",
		          text: line.slice(1),
		          file,
		        });
		      }
		      cur = null;
		      continue;
		    }
		    const header = line.match(/^([0-9a-f]{40})\s+(\d+)\s+(\d+)/);
		    if (header) {
		      const sha = header[1];
		      if (cur && cur.sha === sha) {
		        // 同一提交的后续行：沿用已收集的元数据。
		        cur.final = Number(header[3]);
		      } else {
		        cur = { sha, final: Number(header[3]), author: "", authorTime: 0, summary: "" };
		      }
		      continue;
		    }
		    if (!cur) continue;
		    let m = line.match(/^author\s+(.*)$/);
		    if (m) {
		      cur.author = m[1];
		      continue;
		    }
		    m = line.match(/^author-time\s+(\d+)$/);
		    if (m) {
		      cur.authorTime = Number(m[1]);
		      continue;
		    }
		    m = line.match(/^summary\s+(.*)$/);
		    if (m) {
		      cur.summary = m[1];
		      continue;
		    }
		    // filename / 其它键忽略。
		  }
		  return map;
		}

		/* ------------------------------------------------------------------ 装饰应用 */

		function fmtDate(d) {
		  if (!d) return "";
		  const y = d.getFullYear();
		  const mo = String(d.getMonth() + 1).padStart(2, "0");
		  const da = String(d.getDate()).padStart(2, "0");
		  return `${y}-${mo}-${da}`;
		}

		function decoItemsFor(ed, file) {
		  const blame = blameByFile.get(normPath(file).toLowerCase());
		  const doc = ed?.view?.state?.doc;
		  if (!blame || !doc) return [];
		  const items = [];
		  for (const [lineNo, e] of blame) {
		    if (lineNo < 1 || lineNo > doc.lines) continue;
		    const label = `— ${e.author}${e.when ? ", " + fmtDate(e.when) : ""}`;
		    items.push({ type: "widget", start: { line: lineNo, character: 1 }, message: label });
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
		  if (!items.length) {
		    if (currentUi?.handle) {
		      currentUi.handle.update([]);
		      currentUi.handle = null;
		    }
		    return;
		  }
		  if (!currentUi?.handle) currentUi.handle = ed.createDecorations({ items });
		  else currentUi.handle.update(items);
		}

		/* ------------------------------------------------------------------ 挂载 UI */

		function mountView(el, ctx) {
		  el.classList.add(`${NS}-view`);
		  el.innerHTML = `
		    <div class="${NS}-root">
		      <div class="${NS}-bar">
		        <button class="${NS}-refresh" type="button" title="对当前激活文件运行 git blame（行尾幽灵注释 + 可跳转列表）"><span>↻</span>追溯当前文件</button>
		      </div>
		      <div class="${NS}-hint"></div>
		      <div class="${NS}-list"></div>
		    </div>`;

		  const refreshBtn = el.querySelector(`.${NS}-refresh`);
		  const hint = el.querySelector(`.${NS}-hint`);
		  const list = el.querySelector(`.${NS}-list`);

		  currentCtx = ctx;
		  currentUi = { handle: null, render };
		  let off = [];
		  let busy = false;

		  async function doBlame() {
		    if (busy) return;
		    const dir = ctx.projectDir;
		    const file = ctx.activeFile;
		    if (!dir || !file) {
		      hint.textContent = "请先在编辑器中打开一个文件。";
		      clear();
		      return;
		    }
		    busy = true;
		    refreshBtn.disabled = true;
		    hint.textContent = "正在 git blame…";
		    try {
		      const blame = await fetchBlame(dir, file);
		      blameByFile.set(normPath(file).toLowerCase(), blame);
		      applyDecos();
		      render(file);
		      hint.textContent = blame.size ? `${baseName(file)} · ${blame.size} 行已追溯` : `${baseName(file)} · 无 blame 结果`;
		    } catch (e) {
		      hint.textContent = `追溯失败：${e?.message ?? e}（文件可能不在 git 仓库内或尚未提交）`;
		      clear();
		    } finally {
		      busy = false;
		      refreshBtn.disabled = false;
		    }
		  }

		  function clear() {
		    if (currentUi?.handle) {
		      currentUi.handle.update([]);
		      currentUi.handle = null;
		    }
		    list.replaceChildren();
		  }

		  function render(file) {
		    renderList(list, ctx, file);
		  }

		  function onActiveChanged() {
		    const file = ctx.activeFile;
		    const cached = file ? blameByFile.get(normPath(file).toLowerCase()) : null;
		    applyDecos();
		    if (cached && file) {
		      render(file);
		      hint.textContent = `${baseName(file)} · ${cached.size} 行已追溯`;
		    } else {
		      list.replaceChildren();
		      hint.textContent = file ? "此文件尚未追溯，点上方按钮运行 git blame。" : "无激活文件。";
		    }
		  }

		  function onProjectChanged() {
		    clear();
		    list.replaceChildren();
		    hint.textContent = "";
		  }

		  refreshBtn.addEventListener("click", doBlame);
		  if (typeof ctx.onDidChangeActiveFile === "function") off.push(ctx.onDidChangeActiveFile(onActiveChanged));
		  if (typeof ctx.onProjectChange === "function") off.push(ctx.onProjectChange(onProjectChanged));

		  requestAnimationFrame(onActiveChanged);

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

		function renderList(container, ctx, file) {
		  const blame = blameByFile.get(normPath(file).toLowerCase());
		  if (!blame || !blame.size) {
		    container.replaceChildren(emptyNode("（无 blame 结果）"));
		    return;
		  }
		  const rows = [...blame.entries()].sort((a, b) => a[0] - b[0]);
		  const frag = document.createDocumentFragment();
		  for (const [lineNo, e] of rows) {
		    const row = document.createElement("button");
		    row.type = "button";
		    row.className = `${NS}-row`;
		    row.innerHTML = `<span class="${NS}-lineno">${lineNo}</span><span class="${NS}-meta"></span><span class="${NS}-sum"></span>`;
		    row.querySelector(`.${NS}-meta`).textContent = `${e.author}${e.when ? " · " + fmtDate(e.when) : ""}`;
		    row.querySelector(`.${NS}-sum`).textContent = e.summary || "";
		    row.title = `${e.sha?.slice(0, 8) ?? ""} ${e.summary || ""}`;
		    row.addEventListener("click", () => {
		      try {
		        const p = ctx.openFile(file, { line: lineNo });
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
		.${NS}-bar { padding: 8px 10px; position: sticky; top: 0; background: var(--dsh-bg, #0d1117); border-bottom: 1px solid var(--dsh-border, #30363d); z-index: 3; }
		.${NS}-refresh { width: 100%; display: flex; align-items: center; justify-content: center; gap: 6px; padding: 5px 10px; border: 1px solid var(--dsh-accent, #2f81f7); border-radius: 6px; background: var(--dsh-accent-weak, rgba(47,129,247,.14)); color: var(--dsh-accent, #2f81f7); font: inherit; font-weight: 600; cursor: pointer; }
		.${NS}-refresh:hover:not(:disabled) { background: var(--dsh-accent-soft, rgba(47,129,247,.2)); }
		.${NS}-refresh:disabled { opacity: .5; cursor: default; }
		.${NS}-refresh:focus-visible { outline: 1px solid var(--dsh-accent, #2f81f7); outline-offset: -1px; }
		.${NS}-hint { padding: 5px 10px; color: var(--dsh-fg-weak, #8b949e); line-height: 1.5; }
		.${NS}-list { flex: 1 1 auto; padding: 2px 6px 8px; }
		.${NS}-row { display: flex; gap: 8px; align-items: baseline; width: 100%; text-align: left; padding: 2px 8px; border: 0; background: transparent; color: var(--dsh-fg, #c9d1d9); font: inherit; cursor: pointer; border-radius: 4px; white-space: nowrap; overflow: hidden; }
		.${NS}-row:hover { background: var(--dsh-hover, #30363d); }
		.${NS}-row:focus-visible { outline: 1px solid var(--dsh-accent, #2f81f7); outline-offset: -1px; }
		.${NS}-lineno { flex: 0 0 auto; min-width: 2.5em; text-align: right; color: var(--dsh-fg-weak, #8b949e); font-family: var(--dsh-mono, monospace); }
		.${NS}-meta { flex: 0 1 auto; min-width: 6em; max-width: 55%; overflow: hidden; text-overflow: ellipsis; color: var(--dsh-fg, #c9d1d9); }
		.${NS}-sum { flex: 1 1 auto; min-width: 0; overflow: hidden; text-overflow: ellipsis; color: var(--dsh-fg-weak, #8b949e); }
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
