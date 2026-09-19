window.__ModuleLoader__.manifest({"id":"dsh-fw.hex-viewer","name":"十六进制查看器","version":"","description":"以 offset/hex/ASCII 三栏查看当前激活文件的字节（只读）","nameEn":"Hex Viewer","descriptionEn":"DSH file editor plugin: activity bar view that inspects the active file as offset/hex/ASCII (read-only), based on the dsh-file-workbench-lib v1 injection API (window.__dshFileWorkbenchVSCode__)."});
window.__ModuleLoader__.load({
	id: "dsh-fw.hex-viewer",
	inject: [],
	factory: (require) => {
		/**
		 * hex-viewer.js — DSH 文件编辑器外部插件（纯 JS 单文件）。
		 *
		 *
		 * 能力（对标 VS Code HEXRAPL / 内置 hex editor，只读）：
		 *  - 对当前激活文件路径 fetch host `GET /read?path=`；
		 *  - 若 data.binary 为真 → 提示「二进制无法按文本读取」（本宿主 /read 仅回文本，无字节通道）；
		 *  - 否则把解码后的文本用 UTF-8 编码器转成字节，渲染 offset | 16 字节 hex | ASCII 三栏；
		 *  - 支持跳转偏移、大文件截断保护；纯展示，不改动磁盘。
		 */

		const API_KEY = "__dshFileWorkbenchVSCode__";
		const PREFIX = "/api/dsh-file-workbench";
		const VIEW_ID = "hexViewer.view";
		const NS = "dsh-hx";
		const BYTES_PER_ROW = 16;
		const MAX_BYTES = 512 * 1024; // 展示上限，超出截断并提示

		/** 插件清单（打包进 .pack-meta.json 与 bundle 顶层 manifest() 声明；id 由 pack.mjs 生成，勿手写）。 */
		const meta = {
		    "name": "十六进制查看器",
		    "version": "",
		    "description": "以 offset/hex/ASCII 三栏查看当前激活文件的字节（只读）",
		    "nameEn": "Hex Viewer",
		    "descriptionEn": "DSH file editor plugin: activity bar view that inspects the active file as offset/hex/ASCII (read-only), based on the dsh-file-workbench-lib v1 injection API (window.__dshFileWorkbenchVSCode__)."
		};

		const inject = [];


		let currentCtx = null;

		function buildView() {
		  return {
		    id: VIEW_ID,
		    title: { zh: "十六进制查看器", en: "Hex Viewer" },
		    description: {
		      zh: "以 offset/hex/ASCII 三栏查看当前激活文件的字节（只读）",
		      en: "Inspect the active file as offset/hex/ASCII (read-only)",
		    },
		    icon: "cube",
		    order: 67,
		    when: (ctx) => !!ctx.projectDir,
		    mount(el, ctx) {
		      return mountView(el, ctx);
		    },
		  };
		}

		/* ------------------------------------------------------------------ 取字节 */

		async function fetchBytes(path) {
		  const res = await fetch(`${PREFIX}/read?path=${encodeURIComponent(path)}`, { headers: { Accept: "application/json" } });
		  const body = await res.json().catch(() => null);
		  if (!body?.ok) throw new Error(body?.error || `HTTP ${res.status}`);
		  const d = body.data || {};
		  if (d.binary) return { binary: true, bytes: null, size: d.size ?? 0 };
		  const bytes = new TextEncoder().encode(d.content ?? "");
		  return { binary: false, bytes, size: d.size ?? bytes.length };
		}

		/* ------------------------------------------------------------------ 渲染 */

		function hexByte(b) {
		  return b.toString(16).padStart(2, "0");
		}
		function asciiOf(b) {
		  return b >= 0x20 && b <= 0x7e ? String.fromCharCode(b) : ".";
		}

		function renderRows(container, bytes, truncated) {
		  const frag = document.createDocumentFragment();
		  const total = bytes.length;
		  for (let off = 0; off < total; off += BYTES_PER_ROW) {
		    const slice = bytes.subarray(off, Math.min(off + BYTES_PER_ROW, total));
		    const row = document.createElement("div");
		    row.className = `${NS}-row`;
		    const addr = document.createElement("span");
		    addr.className = `${NS}-addr`;
		    addr.textContent = off.toString(16).padStart(8, "0");
		    const hex = document.createElement("span");
		    hex.className = `${NS}-hex`;
		    let hexStr = "";
		    let ascStr = "";
		    for (let k = 0; k < BYTES_PER_ROW; k++) {
		      if (k < slice.length) {
		        hexStr += hexByte(slice[k]) + (k === 7 ? "  " : " ");
		        ascStr += asciiOf(slice[k]);
		      } else {
		        hexStr += k === 7 ? "   " : "   ";
		      }
		    }
		    hex.textContent = hexStr;
		    const asc = document.createElement("span");
		    asc.className = `${NS}-ascii`;
		    asc.textContent = ascStr;
		    row.append(addr, hex, asc);
		    frag.appendChild(row);
		  }
		  if (truncated) {
		    const note = document.createElement("div");
		    note.className = `${NS}-note`;
		    note.textContent = `（已截断显示前 ${total.toLocaleString()} 字节）`;
		    frag.appendChild(note);
		  }
		  container.replaceChildren(frag);
		}

		/* ------------------------------------------------------------------ 挂载 UI */

		function mountView(el, ctx) {
		  el.classList.add(`${NS}-view`);
		  el.innerHTML = `
		    <div class="${NS}-root">
		      <div class="${NS}-bar">
		        <span class="${NS}-name"></span>
		        <button class="${NS}-reload" type="button">↻</button>
		      </div>
		      <div class="${NS}-hint"></div>
		      <pre class="${NS}-dump"></pre>
		    </div>`;

		  const nameEl = el.querySelector(`.${NS}-name`);
		  const reloadBtn = el.querySelector(`.${NS}-reload`);
		  const hint = el.querySelector(`.${NS}-hint`);
		  const dump = el.querySelector(`.${NS}-dump`);

		  currentCtx = ctx;
		  let off = [];
		  let busy = false;

		  async function load() {
		    const file = ctx.activeFile;
		    nameEl.textContent = file ? baseName(file) : "无激活文件";
		    if (!file) {
		      hint.textContent = "在编辑器打开一个文件即可查看其字节。";
		      dump.replaceChildren();
		      return;
		    }
		    if (busy) return;
		    busy = true;
		    reloadBtn.disabled = true;
		    hint.textContent = "读取中…";
		    try {
		      const { binary, bytes, size } = await fetchBytes(file);
		      if (binary) {
		        hint.textContent = `二进制文件（${size.toLocaleString()} 字节）——宿主 /read 仅返回文本，无法取得原始字节。`;
		        dump.replaceChildren();
		        return;
		      }
		      const truncated = bytes.length > MAX_BYTES;
		      const shown = truncated ? bytes.subarray(0, MAX_BYTES) : bytes;
		      hint.textContent = `${bytes.length.toLocaleString()} 字节 · ${BYTES_PER_ROW}/行`;
		      renderRows(dump, shown, truncated);
		    } catch (e) {
		      hint.textContent = `读取失败：${e?.message ?? e}`;
		      dump.replaceChildren();
		    } finally {
		      busy = false;
		      reloadBtn.disabled = false;
		    }
		  }

		  reloadBtn.addEventListener("click", load);
		  if (typeof ctx.onDidChangeActiveFile === "function") off.push(ctx.onDidChangeActiveFile(load));
		  if (typeof ctx.onProjectChange === "function") off.push(ctx.onProjectChange(load));

		  requestAnimationFrame(load);

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
		.${NS}-bar { padding: 8px 10px; display: flex; align-items: center; gap: 8px; position: sticky; top: 0; background: var(--dsh-bg, #0d1117); border-bottom: 1px solid var(--dsh-border, #30363d); z-index: 3; }
		.${NS}-name { flex: 1 1 auto; min-width: 0; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
		.${NS}-reload { flex: 0 0 auto; width: 28px; height: 24px; padding: 0; border: 1px solid var(--dsh-border, #30363d); border-radius: 6px; background: var(--dsh-bg2, #161b22); color: inherit; font-size: 13px; line-height: 1; cursor: pointer; }
		.${NS}-reload:hover:not(:disabled) { border-color: var(--dsh-accent, #2f81f7); color: var(--dsh-accent, #2f81f7); }
		.${NS}-reload:disabled { opacity: .5; cursor: default; }
		.${NS}-reload:focus-visible { outline: 1px solid var(--dsh-accent, #2f81f7); outline-offset: -1px; }
		.${NS}-hint { padding: 5px 10px; color: var(--dsh-fg-weak, #8b949e); line-height: 1.5; }
		.${NS}-dump { flex: 1 1 auto; margin: 2px 8px 8px; padding: 8px 10px; border: 1px solid var(--dsh-border, #30363d); border-radius: 8px; background: var(--dsh-bg2, #161b22); font-family: var(--dsh-mono, monospace); font-size: 11px; line-height: 1.6; overflow: auto; max-height: calc(100vh - 220px); }
		.${NS}-row { white-space: pre; }
		.${NS}-addr { color: var(--dsh-fg-muted, #6e7681); margin-right: 12px; }
		.${NS}-hex { color: var(--dsh-info, #79c0ff); margin-right: 12px; }
		.${NS}-ascii { color: var(--dsh-fg, #c9d1d9); }
		.${NS}-note { color: var(--dsh-fg-weak, #8b949e); font-style: italic; margin-top: 6px; }
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
