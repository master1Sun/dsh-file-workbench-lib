/**
 * <插件中文名>.js — DSH 文件编辑器外部插件（纯 JS 单文件，可一键导入）。
 *
 * 能力：<一句话描述>
 *  - <要点 1>；
 *  - <要点 2>。
 *
 * 交付：保存到 plugins/importPackages/，在「插件管理 → 导入本地文件」拖入即可。
 * 约定：只允许 export const meta / export const inject / export function apply 三种顶层导出；
 *       不得有顶层 import；loader id = dsh-fw.<文件名>，勿手写。
 */

const API_KEY = "__dshFileWorkbenchVSCode__";
const PREFIX = "/api/dsh-file-workbench";
const VIEW_ID = "<camelCase>.view"; // 与文件名对应，如 projectStats.view
const CMD_RUN = "<camelCase>.run";
const MENU_ID = "<camelCase>.menu";
const NS = "dsh-xx"; // CSS 命名空间前缀（两字母即可）

/** 插件清单：纯 JSON 风格字面量（双引号、无注释、无尾逗号）；name/description 必填。 */
export const meta = {
    "name": "<中文名>",
    "version": "",
    "description": "<中文一句话描述>",
    "nameEn": "<English Name>",
    "descriptionEn": "DSH file editor plugin: <英文描述>. Counterpart of VS Code <对标插件>."
};

export const inject = [];


/* ------------------------------------------------------------------ 跨挂载状态 */
/* 同源页可能有多个编辑器窗口共享本模块：一切按 projectDir 分桶，别放裸全局。 */

/** projectDir → 任意缓存。 */
const dataByProject = new Map();
let currentCtx = null;

/** 稳定字符串哈希（FNV-1a，32bit）：把任意项目路径压成持久化 key 片段。 */
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

function joinRoot(dir, rel) {
  const r = normPath(rel).replace(/^\/+/, "");
  const base = normPath(dir).replace(/\/+$/, "");
  return `${base}/${r}`;
}

/* ------------------------------------------------------------- /plugin-data 持久化 */

function persistKey(dir) {
  return `dsh-fw.<name>.${hashKey(String(dir))}`;
}

async function loadPersisted(dir) {
  if (!dir) return null;
  try {
    const res = await fetch(`${PREFIX}/plugin-data?k=${encodeURIComponent(persistKey(dir))}`, { headers: { Accept: "application/json" } });
    const body = await res.json().catch(() => null);
    const v = body?.data;
    if (typeof v === "string" && v.trim()) return JSON.parse(v);
  } catch {
    /* ignore */
  }
  return null;
}

function savePersisted(dir, value) {
  fetch(`${PREFIX}/plugin-data`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ k: persistKey(dir), v: JSON.stringify(value) }),
  }).catch(() => {});
}

/* ------------------------------------------------------------------ host 调用示例 */

/** 枚举项目文件（相对 '/' 路径，已排噪声目录与符号链接；>8000 文件会 truncated）。 */
async function listFiles(dir) {
  const res = await fetch(`${PREFIX}/files?path=${encodeURIComponent(dir)}`, { headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const body = await res.json().catch(() => null);
  const d = body?.data ?? {};
  return { files: Array.isArray(d.files) ? d.files : [], truncated: !!d.truncated };
}

/** 读单文件：{ content, size(字节), binary, eol, encoding… }；>8MB 报 413。 */
async function readFile(abs) {
  const res = await fetch(`${PREFIX}/read?path=${encodeURIComponent(abs)}`, { headers: { Accept: "application/json" } });
  if (!res.ok) return null;
  const body = await res.json().catch(() => null);
  return body?.data ?? null;
}

/** /grep 正则搜索：载荷 { files: [{ rel, hits: [{ ln, text }] }], total, truncated }。 */
async function grep(q, dir, opts = {}) {
  const params = new URLSearchParams({ q, path: dir, regex: opts.regex ? "1" : "0", word: opts.word ? "1" : "0", case: "0" });
  const res = await fetch(`${PREFIX}/grep?${params.toString()}`, { headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const body = await res.json().catch(() => null);
  return body?.data?.files ?? [];
}

/* ------------------------------------------------------------------ 视图定义 */

function buildView() {
  return {
    id: VIEW_ID,
    title: { zh: "<中文名>", en: "<English>" },
    description: { zh: "<面板描述>", en: "<desc>" },
    icon: "tasks", // 常用：search code bookmark clock chart gitBranch warning eye wand
    order: 80,
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
      <div class="${NS}-bar">
        <button class="${NS}-run" type="button">运行</button>
        <span class="${NS}-hint"></span>
      </div>
      <div class="${NS}-body"></div>
    </div>`;

  const runBtn = el.querySelector(`.${NS}-run`);
  const hint = el.querySelector(`.${NS}-hint`);
  const body = el.querySelector(`.${NS}-body`);

  currentCtx = ctx;
  const off = [];

  async function run() {
    const dir = ctx.projectDir;
    if (!dir) return;
    hint.textContent = "执行中…";
    try {
      // TODO: 业务逻辑（listFiles/grep/readFile → 聚合 → savePersisted）
      hint.textContent = "完成";
    } catch (e) {
      hint.textContent = `失败：${e?.message ?? e}`;
    }
  }

  runBtn.addEventListener("click", run);
  off.push(ctx.onProjectChange(() => { /* 换项目：清/重载 */ }));

  return () => {
    off.forEach((f) => { try { f(); } catch { /* noop */ } });
    if (currentCtx === ctx) currentCtx = null;
    el.replaceChildren();
  };
}

/* ------------------------------------------------------------------ 命令 + 「扩展」菜单入口 */

function registerContributions(api) {
  api.commands.register(CMD_RUN, async (statusCtx) => {
    const dir = statusCtx?.projectDir ?? currentCtx?.projectDir;
    if (!dir) return currentCtx?.toast?.("info", "请先打开一个项目。");
    // TODO: 与视图共享的执行逻辑；完成后 toast("ok", …) 并刷新面板。
  });
  api.statusbar.registerMenu({
    id: MENU_ID,
    text: "<菜单文案>",
    commandId: CMD_RUN,
    tooltip: "<悬浮提示>",
    order: 80,
    when: (c) => !!c.projectDir,
  });
}

/* ------------------------------------------------------------------ 样式注入 */

injectStyles();

function injectStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(`${NS}-styles`)) return;
  // 只用已定义的 --dsh-* token，且每个都带兜底值（深色 #0d1117/#161b22/#c9d1d9/#8b949e/#30363d/#2f81f7）。
  const css = `
.${NS}-view { color: var(--dsh-fg, #c9d1d9); font-size: 12px; }
.${NS}-root { display: flex; flex-direction: column; min-height: 100%; }
.${NS}-bar { display: flex; align-items: center; gap: 8px; padding: 8px 10px; position: sticky; top: 0; background: var(--dsh-bg, #0d1117); border-bottom: 1px solid var(--dsh-border, #30363d); z-index: 3; }
.${NS}-run { padding: 4px 12px; border: 1px solid var(--dsh-accent, #2f81f7); border-radius: 6px; background: var(--dsh-accent-weak, rgba(47,129,247,.14)); color: var(--dsh-accent, #2f81f7); font: inherit; font-weight: 600; cursor: pointer; }
.${NS}-run:hover { background: var(--dsh-accent-soft, rgba(47,129,247,.2)); }
.${NS}-hint { color: var(--dsh-fg-weak, #8b949e); font-size: 11px; }
`;
  const style = document.createElement("style");
  style.id = `${NS}-styles`;
  style.textContent = css;
  document.head.appendChild(style);
}

/* ------------------------------------------------------------------ 入口 */

function globalApi() {
  return typeof window !== "undefined" ? window[API_KEY] : null;
}

/** 探针桩检测：宿主启用前会用 no-op 桩预跑 apply()，桩下注册会被撤销，必须等真 API。 */
function apiReady(a) {
  return !!a?.activityBar && typeof a.activityBar.register === "function" && a.activityBar.register.name !== "noop";
}

let appliedOnce = false;

export function apply(_ctx) {
  const api = globalApi();
  if (!apiReady(api)) return false;
  api.activityBar.register(buildView());
  registerContributions(api);
  appliedOnce = true;
  return true;
}

// 兼容旧宿主（无源码自动打包时本文件按极简形态直 eval，factory 不存在）：轮询到真 API 就绪。
// appliedOnce 守卫保证「经插件管理正常导入」时不重复注册；仅当直接 eval 裸源码时才生效。
if (typeof window !== "undefined") {
  let tries = 0;
  const tick = () => {
    if (appliedOnce) return;
    if (apply(null)) return;
    if (++tries >= 40) return;
    setTimeout(tick, 250);
  };
  setTimeout(tick, 0);
}
