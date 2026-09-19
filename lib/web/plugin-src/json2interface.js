window.__ModuleLoader__.manifest({"id":"dsh-fw.json2interface","name":"JSON 转接口","version":"","description":"把当前 JSON 缓冲/选区推断成 TypeScript interface，可复制或插入","nameEn":"JSON → TS","descriptionEn":"DSH file editor plugin: activity bar view that infers a TypeScript interface from the active JSON buffer/selection, based on the dsh-file-workbench-lib v1 injection API (window.__dshFileWorkbenchVSCode__)."});
window.__ModuleLoader__.load({
	id: "dsh-fw.json2interface",
	inject: [],
	factory: (require) => {
		/**
		 * json2interface.js — DSH 文件编辑器外部插件（纯 JS 单文件）。
		 *
		 *
		 * 能力（对标 quicktype 的最小离线版）：
		 *  - 读当前激活文件的**未保存缓冲区**（要求是 JSON，或选区为 JSON 片段）；
		 *  - 推断 TypeScript interface 结构（对象/数组/基本类型/可空/嵌套命名），输出到面板；
		 *  - 「复制」写剪贴板，「插入到底部」把结果作为注释块追加进当前文件末尾（走 applyEdit，保留撤销栈）。
		 * 纯前端、无网络、无第三方依赖。
		 */

		const API_KEY = "__dshFileWorkbenchVSCode__";
		const VIEW_ID = "json2interface.view";
		const NS = "dsh-j2i";

		/** 插件清单（打包进 .pack-meta.json 与 bundle 顶层 manifest() 声明；id 由 pack.mjs 生成，勿手写）。 */
		const meta = {
		    "name": "JSON 转接口",
		    "version": "",
		    "description": "把当前 JSON 缓冲/选区推断成 TypeScript interface，可复制或插入",
		    "nameEn": "JSON → TS",
		    "descriptionEn": "DSH file editor plugin: activity bar view that infers a TypeScript interface from the active JSON buffer/selection, based on the dsh-file-workbench-lib v1 injection API (window.__dshFileWorkbenchVSCode__)."
		};

		const inject = [];


		let currentCtx = null;

		function buildView() {
		  return {
		    id: VIEW_ID,
		    title: { zh: "JSON 转接口", en: "JSON → TS" },
		    description: {
		      zh: "把当前 JSON 缓冲/选区推断成 TypeScript interface，可复制或插入",
		      en: "Infer a TypeScript interface from the active JSON buffer/selection",
		    },
		    icon: "code",
		    order: 65,
		    when: (ctx) => !!ctx.projectDir,
		    mount(el, ctx) {
		      return mountView(el, ctx);
		    },
		  };
		}

		/* ------------------------------------------------------------------ JSON 取样 */

		/** 取候选 JSON 文本：优先非空选区，否则整份缓冲。 */
		function sampleJson(ctx) {
		  const ed = ctx.editor;
		  if (!ed) return "";
		  const sel = typeof ed.getSelection === "function" ? ed.getSelection() : null;
		  const view = ed.view;
		  if (sel && view && !sel.main.empty) {
		    return view.state.sliceDoc(sel.main.from, sel.main.to).trim();
		  }
		  return (typeof ed.getText === "function" ? ed.getText() : "").trim();
		}

		/* ------------------------------------------------------------------ 类型推断 */

		function pascal(s) {
		  const cleaned = String(s).replace(/[^a-zA-Z0-9]+/g, " ").trim();
		  if (!cleaned) return "";
		  return cleaned
		    .split(/\s+/)
		    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
		    .join("");
		}

		function singular(name) {
		  if (/ies$/i.test(name)) return name.replace(/ies$/i, "y");
		  if (/ses$/i.test(name)) return name.replace(/es$/i, "");
		  if (/s$/i.test(name) && !/ss$/i.test(name)) return name.replace(/s$/i, "");
		  return name;
		}

		/** 收集所有子对象结构，按字段签名去重生成 interface 名。 */
		function infer(value, rootName) {
		  const interfaces = new Map(); // name -> { fields:Map<key,typeStr>, }
		  const used = new Set();

		  function uniqueName(base) {
		    let n = base || "T";
		    if (!used.has(n)) {
		      used.add(n);
		      return n;
		    }
		    let i = 2;
		    while (used.has(`${n}${i}`)) i++;
		    used.add(`${n}${i}`);
		    return `${n}${i}`;
		  }

		  /** 返回某值的 TS 类型字符串；对象会登记 interface 并返回其名。 */
		  function typeOf(v, hintName) {
		    if (v === null) return "null";
		    if (Array.isArray(v)) {
		      if (!v.length) return "unknown[]";
		      const inner = unionOf(v.map((x) => typeOf(x, singular(hintName) || "Item")));
		      return arrayType(inner);
		    }
		    if (typeof v === "object") {
		      const name = uniqueName(pascal(hintName) || "Obj");
		      if (!interfaces.has(name)) {
		        interfaces.set(name, null); // 占位防自递归死循环
		        const fields = new Map();
		        for (const [k, val] of Object.entries(v)) {
		          const key = /^[a-zA-Z_$][\w$]*$/.test(k) ? k : JSON.stringify(k);
		          fields.set(key, typeOf(val, k));
		        }
		        interfaces.set(name, fields);
		      }
		      return name;
		    }
		    if (typeof v === "string") return "string";
		    if (typeof v === "number") return "number";
		    if (typeof v === "boolean") return "boolean";
		    return "unknown";
		  }

		  function unionOf(types) {
		    const set = [...new Set(types)];
		    if (set.length === 1) return set[0];
		    return set.join(" | ");
		  }

		  function arrayType(inner) {
		    // 联合类型加括号。
		    return inner.includes("|") ? `(${inner})[]` : `${inner}[]`;
		  }

		  const rootType = typeOf(value, rootName);
		  return { rootType, interfaces };
		}

		/** 渲染成 TS 源码文本。 */
		function renderTs(rootName, value) {
		  const { rootType, interfaces } = infer(value, rootName);
		  const lines = [];
		  for (const [name, fields] of interfaces) {
		    if (!fields) continue;
		    lines.push(`export interface ${name} {`);
		    for (const [key, type] of fields) lines.push(`  ${key}: ${type};`);
		    lines.push("}", "");
		  }
		  if (/^[A-Za-z_$][\w$]*$/.test(rootType) && interfaces.has(rootType)) {
		    // 根即某已生成 interface：补一个别名方便引用。
		    lines.unshift(`export type ${pascal(rootName) || "Root"} = ${rootType};`, "");
		  } else {
		    lines.unshift(`export type ${pascal(rootName) || "Root"} = ${rootType};`, "");
		  }
		  return lines.join("\n").trim();
		}

		/* ------------------------------------------------------------------ 挂载 UI */

		function mountView(el, ctx) {
		  el.classList.add(`${NS}-view`);
		  el.innerHTML = `
		    <div class="${NS}-root">
		      <div class="${NS}-bar">
		        <button class="${NS}-gen" type="button">从当前 JSON 生成</button>
		        <input class="${NS}-name" type="text" spellcheck="false" placeholder="根类型名（可选）" />
		      </div>
		      <div class="${NS}-hint"></div>
		      <pre class="${NS}-out"></pre>
		      <div class="${NS}-foot">
		        <button class="${NS}-copy" type="button">复制</button>
		        <button class="${NS}-insert" type="button">插入到文件底部</button>
		      </div>
		    </div>`;

		  const genBtn = el.querySelector(`.${NS}-gen`);
		  const nameInput = el.querySelector(`.${NS}-name`);
		  const hint = el.querySelector(`.${NS}-hint`);
		  const out = el.querySelector(`.${NS}-out`);
		  const copyBtn = el.querySelector(`.${NS}-copy`);
		  const insertBtn = el.querySelector(`.${NS}-insert`);

		  currentCtx = ctx;
		  let off = [];
		  let lastText = "";

		  function doGenerate() {
		    const raw = sampleJson(ctx);
		    if (!raw) {
		      hint.textContent = "无内容：请在编辑器打开一个 JSON 文件或选中一段 JSON。";
		      out.textContent = "";
		      lastText = "";
		      return;
		    }
		    let parsed;
		    try {
		      parsed = JSON.parse(raw);
		    } catch (e) {
		      hint.textContent = `JSON 解析失败：${e?.message ?? e}`;
		      out.textContent = "";
		      lastText = "";
		      return;
		    }
		    const rootName = nameInput.value.trim() || deriveRootName(ctx.activeFile);
		    try {
		      lastText = renderTs(rootName, parsed);
		      out.textContent = lastText;
		      hint.textContent = `已生成 · 根类型 ${pascal(rootName) || "Root"}`;
		    } catch (e) {
		      hint.textContent = `生成失败：${e?.message ?? e}`;
		      lastText = "";
		    }
		  }

		  genBtn.addEventListener("click", doGenerate);

		  copyBtn.addEventListener("click", async () => {
		    if (!lastText) return;
		    try {
		      await navigator.clipboard.writeText(lastText);
		      ctx.toast("ok", "已复制 interface 到剪贴板");
		    } catch {
		      ctx.toast("error", "复制失败（剪贴板不可用）");
		    }
		  });

		  insertBtn.addEventListener("click", () => {
		    if (!lastText) return;
		    const ed = ctx.editor;
		    const view = ed?.view;
		    if (!view) {
		      ctx.toast("error", "无激活编辑器");
		      return;
		    }
		    const len = view.state.doc.length;
		    const block = `\n\n/* ---- generated by JSON→TS ---- */\n${lastText}\n`;
		    if (ed.applyEdit([{ from: len, insert: block }])) ctx.toast("ok", "已插入到文件底部");
		    else ctx.toast("error", "插入失败");
		  });

		  requestAnimationFrame(() => {
		    hint.textContent = "打开 JSON 文件（或选中 JSON 片段），点「生成」。";
		  });

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

		function deriveRootName(file) {
		  if (!file) return "Root";
		  const base = String(file).replace(/\\/g, "/").split("/").pop() || "Root";
		  return base.replace(/\.[^.]+$/, "") || "Root";
		}

		/* ------------------------------------------------------------------ 小工具 */


		injectStyles();

		function injectStyles() {
		  if (typeof document === "undefined") return;
		  if (document.getElementById(`${NS}-styles`)) return;
		  const css = `
		.${NS}-view { color: var(--dsh-fg, #c9d1d9); font-size: 12px; }
		.${NS}-root { display: flex; flex-direction: column; min-height: 100%; }
		.${NS}-bar { padding: 8px 10px; display: flex; gap: 6px; position: sticky; top: 0; background: var(--dsh-bg, #0d1117); border-bottom: 1px solid var(--dsh-border, #30363d); z-index: 3; }
		.${NS}-gen { flex: 0 0 auto; padding: 5px 12px; border: 1px solid var(--dsh-accent, #2f81f7); border-radius: 6px; background: var(--dsh-accent-weak, rgba(47,129,247,.14)); color: var(--dsh-accent, #2f81f7); font: inherit; font-weight: 600; cursor: pointer; white-space: nowrap; }
		.${NS}-gen:hover { background: var(--dsh-accent-soft, rgba(47,129,247,.2)); }
		.${NS}-gen:focus-visible { outline: 1px solid var(--dsh-accent, #2f81f7); outline-offset: -1px; }
		.${NS}-name { flex: 1 1 auto; min-width: 0; padding: 5px 8px; border: 1px solid var(--dsh-border, #30363d); border-radius: 6px; background: var(--dsh-bg2, #161b22); color: inherit; outline: none; font: inherit; }
		.${NS}-name::placeholder { color: var(--dsh-fg-muted, #6e7681); }
		.${NS}-name:focus { border-color: var(--dsh-accent, #2f81f7); box-shadow: 0 0 0 2px var(--dsh-accent-weak, rgba(47,129,247,.14)); }
		.${NS}-hint { padding: 5px 10px; color: var(--dsh-fg-weak, #8b949e); line-height: 1.5; }
		.${NS}-out { flex: 1 1 auto; margin: 2px 8px; padding: 8px 10px; border: 1px solid var(--dsh-border, #30363d); border-radius: 8px; background: var(--dsh-bg2, #161b22); color: var(--dsh-info, #79c0ff); font-family: var(--dsh-mono, monospace); font-size: 11px; line-height: 1.6; white-space: pre; overflow: auto; max-height: calc(100vh - 260px); }
		.${NS}-foot { display: flex; gap: 6px; padding: 8px 10px; position: sticky; bottom: 0; background: var(--dsh-bg, #0d1117); border-top: 1px solid var(--dsh-border, #30363d); z-index: 3; }
		.${NS}-copy, .${NS}-insert { flex: 1 1 auto; padding: 5px 10px; border: 1px solid var(--dsh-border, #30363d); border-radius: 6px; background: var(--dsh-bg2, #161b22); color: inherit; font: inherit; cursor: pointer; }
		.${NS}-copy:hover, .${NS}-insert:hover { border-color: var(--dsh-accent, #2f81f7); color: var(--dsh-accent, #2f81f7); }
		.${NS}-copy:focus-visible, .${NS}-insert:focus-visible { outline: 1px solid var(--dsh-accent, #2f81f7); outline-offset: -1px; }
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
