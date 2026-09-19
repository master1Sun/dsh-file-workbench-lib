/**
 * local-history.js — DSH 文件编辑器外部插件（纯 JS 单文件）。
 *
 *
 * 能力（对标 VS Code Local History 扩展）：
 *  - 订阅当前文件文档变更，**防抖 1.5s** 落一次内容快照；同项目按文件路径累积（每文件最多 N 条）；
 *  - 快照持久化到 host `/plugin-data`（key = dsh-fw.localHistory.<hash(projectDir)>），跨重启保留；
 *  - 面板列出当前文件的历史时间点，点击用 `ctx.openDiff` 做「当前 vs 历史」差异预览；
 *  - 「恢复」按钮把选中快照整份写回缓冲区（applyEdit 全替换，保留撤销栈，可再撤销）。
 */

const API_KEY = "__dshFileWorkbenchVSCode__";
const PREFIX = "/api/dsh-file-workbench";
const VIEW_ID = "localHistory.view";
const NS = "dsh-lh";
const MAX_PER_FILE = 20; // 每文件保留快照上限
const DEBOUNCE_MS = 1500;
const MIN_DELTA_CHARS = 8; // 与上次快照差异过小则跳过，避免噪声

/** 插件清单（打包进 .pack-meta.json 与 bundle 顶层 manifest() 声明；id 由 pack.mjs 生成，勿手写）。 */
export const meta = {
    "name": "本地历史",
    "version": "",
    "description": "自动记录编辑快照，按时间倒序列出，可对比差异并一键恢复（对标 VS Code Local History）",
    "nameEn": "Local History",
    "descriptionEn": "DSH file editor plugin: activity bar view that keeps timestamped snapshots of saved files and restores them, based on the dsh-file-workbench-lib v1 injection API (window.__dshFileWorkbenchVSCode__)."
};

export const inject = [];


/* ------------------------------------------------------------------ 跨挂载状态 */

/** projectDir → { [fileAbsPath]: [{ ts, text }] }（时间升序）。 */
const historyByProject = new Map();
const loadedProjects = new Set();
let currentCtx = null;
let currentUi = null;
let saveTimer = null;
let lastSnapshotText = null; // 上次为当前文件落快照的文本，用于去重

function hashKey(s) {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, "0");
}
function normPath(p) {
  return String(p).replace(/\\/g, "/");
}
function persistKey(dir) {
  return `dsh-fw.localHistory.${hashKey(String(dir))}`;
}

async function loadProject(dir) {
  if (!dir || loadedProjects.has(dir)) return;
  loadedProjects.add(dir);
  if (!historyByProject.has(dir)) historyByProject.set(dir, {});
  try {
    const res = await fetch(`${PREFIX}/plugin-data?k=${encodeURIComponent(persistKey(dir))}`, { headers: { Accept: "application/json" } });
    const body = await res.json().catch(() => null);
    const data = body?.data;
    if (data && typeof data === "object") {
      // 校验结构后再覆盖内存。
      const clean = {};
      for (const [f, arr] of Object.entries(data)) {
        if (Array.isArray(arr)) clean[f] = arr.filter((e) => e && Number.isFinite(e.ts) && typeof e.text === "string").slice(-MAX_PER_FILE);
      }
      historyByProject.set(dir, clean);
    }
  } catch {
    /* 读失败保持空 */
  }
}

function schedulePersist(dir) {
  clearTimeout(schedulePersist._t);
  schedulePersist._t = setTimeout(() => {
    const map = historyByProject.get(dir) ?? {};
    fetch(`${PREFIX}/plugin-data`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ k: persistKey(dir), v: map }),
    }).catch(() => {});
  }, 400);
}

/* ------------------------------------------------------------------ 快照采集 */

/** 若与当前文件最近快照差异足够大，追加一条并刷新 UI。 */
function maybeSnapshot() {
  const ctx = currentCtx;
  const file = ctx?.activeFile;
  const dir = ctx?.projectDir;
  const ed = ctx?.editor;
  if (!file || !dir || !ed) return;
  const text = ed.getText?.();
  if (text == null) return;
  const key = normPath(file);
  const map = historyByProject.get(dir) ?? {};
  const arr = map[key] ?? [];
  const prev = arr.length ? arr[arr.length - 1].text : "";
  if (arr.length && similarEnough(prev, text)) return;
  arr.push({ ts: Date.now(), text });
  if (arr.length > MAX_PER_FILE) arr.splice(0, arr.length - MAX_PER_FILE);
  map[key] = arr;
  historyByProject.set(dir, map);
  lastSnapshotText = text;
  schedulePersist(dir);
  currentUi?.refresh();
}

/** 粗略判等：长度接近且内容相同视为无实质变化。 */
function similarEnough(a, b) {
  if (a === b) return true;
  if (Math.abs(a.length - b.length) < MIN_DELTA_CHARS && a.slice(0, 200) === b.slice(0, 200)) return true;
  return false;
}

/** 变更后防抖落快照。 */
function scheduleSnapshot() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(maybeSnapshot, DEBOUNCE_MS);
}

/* ------------------------------------------------------------------ 恢复 / 对比 */

function restore(entry) {
  const ctx = currentCtx;
  const ed = ctx?.editor;
  const view = ed?.view;
  if (!ed || !view) {
    ctx?.toast?.("error", "无激活编辑器");
    return;
  }
  const len = view.state.doc.length;
  const ok = ed.applyEdit([{ from: 0, to: len, insert: entry.text }]);
  if (ok) ctx.toast("ok", "已恢复该历史版本（可用 Ctrl+Z 撤销）");
  else ctx.toast("error", "恢复失败");
}

function openCompare(entry) {
  const ctx = currentCtx;
  const cur = ctx?.editor?.getText?.() ?? "";
  const lines = simpleDiffLines(entry.text.split("\n"), cur.split("\n"));
  ctx?.openDiff?.(`历史对比 · ${fmtTime(entry.ts)}`, lines);
}

/** 极简行级 LCS diff → "+/-/空格" 前缀行（复用宿主 GitDiffView 着色）。 */
function simpleDiffLines(oldA, newA) {
  const out = [];
  // 从两端剥离公共前后缀，中间整体标 +/- ——够用且 O(n)。
  let prefix = 0;
  while (prefix < oldA.length && prefix < newA.length && oldA[prefix] === newA[prefix]) prefix++;
  let suffix = 0;
  while (
    suffix < oldA.length - prefix &&
    suffix < newA.length - prefix &&
    oldA[oldA.length - 1 - suffix] === newA[newA.length - 1 - suffix]
  )
    suffix++;
  for (let k = 0; k < prefix; k++) out.push(` ${oldA[k]}`);
  const oldMid = oldA.slice(prefix, oldA.length - suffix);
  const newMid = newA.slice(prefix, newA.length - suffix);
  for (const l of oldMid) out.push(`-${l}`);
  for (const l of newMid) out.push(`+${l}`);
  for (let k = oldA.length - suffix; k < oldA.length; k++) out.push(` ${oldA[k]}`);
  return out;
}

/* ------------------------------------------------------------------ 渲染 */

function fmtTime(ts) {
  const d = new Date(ts);
  const p = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
}

function renderList(list, ctx) {
  const dir = ctx.projectDir;
  const file = ctx.activeFile;
  if (!dir || !file) {
    list.replaceChildren(emptyNode("在编辑器打开一个文件以查看其本地历史。"));
    return;
  }
  const map = historyByProject.get(dir) ?? {};
  const arr = (map[normPath(file)] ?? []).slice().reverse(); // 新→旧
  if (!arr.length) {
    list.replaceChildren(emptyNode("暂无历史快照：编辑当前文件后会自动记录。"));
    return;
  }
  const frag = document.createDocumentFragment();
  for (const entry of arr) {
    const row = document.createElement("div");
    row.className = `${NS}-row`;
    const main = document.createElement("button");
    main.type = "button";
    main.className = `${NS}-jump`;
    main.innerHTML = `<span class="${NS}-ts"></span><span class="${NS}-size"></span>`;
    main.querySelector(`.${NS}-ts`).textContent = fmtTime(entry.ts);
    main.querySelector(`.${NS}-size`).textContent = `${entry.text.length.toLocaleString()} 字符`;
    main.title = "点击查看差异";
    main.addEventListener("click", () => openCompare(entry));
    const rst = document.createElement("button");
    rst.type = "button";
    rst.className = `${NS}-restore`;
    rst.textContent = "恢复";
    rst.title = "把此版本写回缓冲区";
    rst.addEventListener("click", () => restore(entry));
    row.append(main, rst);
    frag.appendChild(row);
  }
  list.replaceChildren(frag);
}

function emptyNode(text) {
  const d = document.createElement("div");
  d.className = `${NS}-empty`;
  d.textContent = text;
  return d;
}

/* ------------------------------------------------------------------ 视图定义 */

function buildView() {
  return {
    id: VIEW_ID,
    title: { zh: "本地历史", en: "Local History" },
    description: {
      zh: "自动记录编辑快照，按时间倒序列出，可对比差异并一键恢复（对标 VS Code Local History）",
      en: "Auto snapshot on edit; browse, diff and restore past versions. Counterpart of VS Code Local History.",
    },
    icon: "clock",
    order: 69,
    when: (ctx) => !!ctx.projectDir,
    mount(el, ctx) {
      return mountView(el, ctx);
    },
  };
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
  currentUi = { refresh };
  let off = [];

  function refresh() {
    titleEl.textContent = ctx.activeFile ? baseName(ctx.activeFile) : "无激活文件";
    const dir = ctx.projectDir;
    const file = ctx.activeFile;
    const map = dir ? historyByProject.get(dir) ?? {} : {};
    const n = file ? (map[normPath(file)] ?? []).length : 0;
    hint.textContent = n ? `${n} 个历史版本` : "";
    renderList(list, ctx);
  }

  async function onActiveChanged() {
    lastSnapshotText = null;
    refresh();
  }

  async function onProjectChanged(dir) {
    if (dir) await loadProject(dir);
    refresh();
  }

  if (typeof ctx.onDidChangeActiveFile === "function") off.push(ctx.onDidChangeActiveFile(onActiveChanged));
  if (typeof ctx.editor?.onDidChangeTextDocument === "function") off.push(ctx.editor.onDidChangeTextDocument(scheduleSnapshot));
  if (typeof ctx.onProjectChange === "function") off.push(ctx.onProjectChange(onProjectChanged));

  (async () => {
    if (ctx.projectDir) await loadProject(ctx.projectDir);
    refresh();
  })();

  return () => {
    clearTimeout(saveTimer);
    off.forEach((f) => {
      try {
        f();
      } catch {
        /* noop */
      }
    });
    if (currentUi && currentCtx === ctx) currentUi = null;
    if (currentCtx === ctx) currentCtx = null;
    el.replaceChildren();
  };
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
.${NS}-title { display: block; font-weight: 600; color: var(--dsh-fg, #c9d1d9); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.${NS}-hint { padding: 5px 10px; color: var(--dsh-fg-weak, #8b949e); line-height: 1.5; }
.${NS}-list { flex: 1 1 auto; padding: 2px 6px 8px; }
.${NS}-row { display: flex; align-items: center; gap: 4px; border-radius: 4px; }
.${NS}-row:hover { background: var(--dsh-hover, #30363d); }
.${NS}-jump { flex: 1 1 auto; min-width: 0; display: flex; gap: 8px; align-items: baseline; text-align: left; padding: 3px 8px; border: 0; background: transparent; color: var(--dsh-fg, #c9d1d9); font: inherit; cursor: pointer; border-radius: 4px; white-space: nowrap; overflow: hidden; }
.${NS}-jump:focus-visible { outline: 1px solid var(--dsh-accent, #2f81f7); outline-offset: -1px; }
.${NS}-ts { color: var(--dsh-fg, #c9d1d9); font-family: var(--dsh-mono, monospace); }
.${NS}-size { min-width: 0; overflow: hidden; text-overflow: ellipsis; color: var(--dsh-fg-weak, #8b949e); }
.${NS}-restore { flex: 0 0 auto; margin-right: 4px; padding: 2px 8px; border: 1px solid var(--dsh-border, #30363d); border-radius: 6px; background: var(--dsh-bg2, #161b22); color: var(--dsh-fg-weak, #8b949e); font: inherit; font-size: 11px; cursor: pointer; opacity: 0; transition: opacity .1s ease; }
.${NS}-row:hover .${NS}-restore, .${NS}-restore:focus-visible { opacity: 1; }
.${NS}-restore:hover { color: var(--dsh-accent, #2f81f7); border-color: var(--dsh-accent, #2f81f7); }
.${NS}-empty { padding: 10px 12px; color: var(--dsh-fg-muted, #6e7681); font-style: italic; text-align: center; }
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
