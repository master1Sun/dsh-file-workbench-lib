/**
 * project-stats.js — DSH 文件编辑器外部插件（纯 JS 单文件，可一键导入）。
 *
 * 能力：统计当前文件编辑器项目 —— 文件数、每个文件行数、总字节数。
 *  - 底部「扩展」菜单里点「统计项目」即扫描（经 host `GET /files` 枚举 + `GET /read` 逐文件取行数/字节）；
 *  - 扫完自动打开左侧「项目统计」视图展示详情表格（按行数排序，点击行在编辑器打开该文件）；
 *  - 结果按项目持久化到 `/plugin-data`（key = dsh-fw.stats.<hash(projectDir)>），切回项目直接看上次结果。
 *
 * ⚠ 本文件是 **源码形态**（packages/*.js 约定，带三种顶层 export），「插件管理 → 导入」会
 *   识别并**内部自动打包**（与 npm run build 的 pack.mjs 同构规则）后按标准 loader 路径启用；
 *   名称/描述等元数据取自下方 meta。拷入 plugins/packages/ 走构建亦可产出内置种子。
 */

const API_KEY = "__dshFileWorkbenchVSCode__";
const PREFIX = "/api/dsh-file-workbench";
const VIEW_ID = "projectStats.view";
const NS = "dsh-ps";
const CMD_RUN = "projectStats.run";
const STATUS_ID = "projectStats.status";
const MENU_ID = "projectStats.menu";

/** 并发读取上限：太多请求会挤爆本地 host，太少浪费时间。 */
const CONCURRENCY = 16;

/** 插件清单（纯数据；导入时由宿主「源码内部自动打包」路径静态求值并转成 manifest）。 */
export const meta = {
    "name": "项目统计",
    "version": "",
    "description": "一键统计当前项目的文件数、每个文件行数与总字节数，结果可在详情表格里点击查看",
    "nameEn": "Project Stats",
    "descriptionEn": "One-click project statistics: file count, per-file line counts and total bytes. Runs from the bottom Extensions menu, renders a sortable detail table, and remembers the last result per project."
};

export const inject = [];


/* ------------------------------------------------------------------ 跨挂载状态 */

/** projectDir → { ts, truncated, files:[{ rel, abs, lines, words, bytes, binary }] } | null。 */
const resultsByProject = new Map();
/** projectDir → Promise（同一项目正在扫描时复用，避免重复劳动）。 */
const scanningByProject = new Map();
/** projectDir → "统计中 x/y…"：扫描进度只写这里，状态栏条目经 textFn 现取。
 *  以同 id 反复 statusbar.register 刷文案会让宿主菜单整体重渲染、气泡位置抖动。 */
const progressByProject = new Map();
/** 最近一次扫描的汇总结果：runStats 完成 toast 直接引用，不重扫文件。 */
let lastSummary = null;

/** workbench 命名空间 API（后台任务面板所在宿主）；编辑器插件也可用，取不到返回 null。 */
function wbApi() {
  return typeof window !== "undefined" ? window.__dshFileWorkbenchWorkbench__ : null;
}

/** 把本次扫描挂进宿主「后台任务」面板：运行中可见、结束留档，用户可去左下角任务按钮查看历史。 */
function startHostTask(label) {
  try {
    const t = wbApi()?.backgroundTasks?.start?.(label);
    if (t && typeof t.done === "function") return t;
  } catch {
    /* 工作台未就绪/不可用：降级为无任务记录，统计本身不受影响 */
  }
  return null;
}

let currentCtx = null;
let currentView = null; // 当前「项目统计」视图的刷新函数

/** 稳定字符串哈希（FNV-1a，32bit）：把任意项目路径压成安全 key 片段。 */
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

function persistKey(dir) {
  return `dsh-fw.stats.${hashKey(String(dir))}`;
}

/** 结果文件按项目路径哈希命名，跨重启稳定。 */
function resultFile(dir) {
  return `.dsh-project-stats/${hashKey(String(dir))}.json`;
}

async function loadResult(dir) {
  if (!dir) return null;
  if (resultsByProject.has(dir)) return resultsByProject.get(dir);
  let result = null;
  const parse = (v) => {
    if (typeof v !== "string" || !v.trim()) return null;
    try {
      const p = JSON.parse(v);
      return p && Array.isArray(p.files) ? p : null;
    } catch {
      return null;
    }
  };
  try {
    const res = await fetch(`${PREFIX}/read?path=${encodeURIComponent(joinRoot(dir, resultFile(dir)))}`, { headers: { Accept: "application/json" } });
    result = parse((await res.json().catch(() => null))?.data?.content);
  } catch {
    /* ignore */
  }
  if (!result) {
    // 旧版本曾把整份结果写进 /plugin-data；迁移成功即删除旧 key，避免大快照堆积。
    try {
      const res = await fetch(`${PREFIX}/plugin-data?k=${encodeURIComponent(persistKey(dir))}`, { headers: { Accept: "application/json" } });
      result = parse((await res.json().catch(() => null))?.data);
      if (result) await saveResult(dir, result);
    } catch {
      /* ignore */
    }
  }
  resultsByProject.set(dir, result);
  return result;
}

/** 落盘走 /save（宿主任意绝对路径可写）：/plugin-data 的 POST 经 sendBeacon 时是
 *  text/plain 内容类型，宿主 JSON 解析器对 >64KB body 直接放弃 → 数百 KB 的统计结果
 *  一直静默 400（表现为「跑完仍显示未运行」）。失败必须可见，不再 .catch(()=>{}) 吞掉。 */
async function saveResult(dir, result) {
  resultsByProject.set(dir, result);
  try {
    const res = await fetch(`${PREFIX}/save`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: joinRoot(dir, resultFile(dir)), content: JSON.stringify(result) }),
    });
    const body = await res.json().catch(() => null);
    if (!body?.ok) throw new Error(body?.error || `HTTP ${res.status}`);
    await fetch(`${PREFIX}/plugin-data`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ k: persistKey(dir), v: "" }),
    }).catch(() => {}); // 清理旧版遗留 key；失败无关紧要
  } catch (e) {
    try { currentCtx?.toast?.("error", `统计结果保存失败：${e?.message ?? e}`); } catch { /* noop */ }
  }
}

/* ------------------------------------------------------------------ 数据聚合 */

function summarize(files) {
  let lines = 0;
  let words = 0;
  let bytes = 0;
  let binary = 0;
  for (const f of files) {
    lines += f.lines;
    words += f.words;
    bytes += f.bytes;
    if (f.binary) binary += 1;
  }
  return { total: files.length, lines, words, bytes, binary };
}

function formatBytes(n) {
  if (!Number.isFinite(n) || n <= 0) return "0 B";
  const units = ["B", "KB", "MB", "GB", "TB"];
  const e = Math.min(units.length - 1, Math.floor(Math.log(n) / Math.log(1024)));
  const v = n / Math.pow(1024, e);
  return `${e === 0 ? v.toFixed(0) : v.toFixed(1)} ${units[e]}`;
}

function formatNumber(n) {
  return Number.isFinite(n) ? n.toLocaleString("en-US") : "-";
}

function baseName(p) {
  const n = normPath(p);
  const i = n.lastIndexOf("/");
  return i >= 0 ? n.slice(i + 1) : n;
}

function dirName(p) {
  const n = normPath(p);
  const i = n.lastIndexOf("/");
  return i > 0 ? n.slice(0, i) : "";
}

function extOf(p) {
  const b = baseName(p);
  const i = b.lastIndexOf(".");
  return i > 0 ? b.slice(i).toLowerCase() : "(none)";
}

/* ------------------------------------------------------------------ 扫描 */

/** 枚举项目文件相对路径（host 已跳过噪声目录、排除符号链接；超 8000 文件时截断）。 */
async function listFiles(dir) {
  const res = await fetch(`${PREFIX}/files?path=${encodeURIComponent(dir)}`, { headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const body = await res.json().catch(() => null);
  const data = body?.data ?? {};
  return { files: Array.isArray(data.files) ? data.files : [], truncated: !!data.truncated };
}

/** 读单个文件求行数/词数/字节数；失败或过大者记为 unknown（bytes 全 0、binary 标记）。 */
async function measure(abs) {
  try {
    const res = await fetch(`${PREFIX}/read?path=${encodeURIComponent(abs)}`, { headers: { Accept: "application/json" } });
    if (!res.ok) return { lines: 0, words: 0, bytes: 0, binary: true };
    const body = await res.json().catch(() => null);
    const d = body?.data ?? {};
    const content = typeof d.content === "string" ? d.content : "";
    const binary = !!d.binary;
    let lines = 0;
    let words = 0;
    if (content) {
      lines = 1;
      for (let i = 0; i < content.length; i++) if (content.charCodeAt(i) === 10) lines += 1;
      if (content.charCodeAt(content.length - 1) === 10) lines -= 1; // 末尾换行不算空行
      const m = content.match(/\S+/g);
      words = m ? m.length : 0;
    }
    return { lines, words, bytes: Number(d.size) || 0, binary };
  } catch {
    return { lines: 0, words: 0, bytes: 0, binary: true };
  }
}

/** 限并发地量完所有文件；onProgress(done, total) 用于实时刷 UI。 */
async function measureAll(absList, onProgress) {
  const out = new Array(absList.length);
  let next = 0;
  let done = 0;
  async function worker() {
    while (true) {
      const i = next++;
      if (i >= absList.length) return;
      out[i] = await measure(absList[i]);
      done += 1;
      if (done % 20 === 0 || done === absList.length) onProgress(done, absList.length);
    }
  }
  const workers = [];
  for (let i = 0; i < Math.min(CONCURRENCY, absList.length); i++) workers.push(worker());
  await Promise.all(workers);
  return out;
}

/** 扫描某项目（同项目并发调用共享同一 Promise）。 */
function scanProject(dir, ctx) {
  if (scanningByProject.has(dir)) return scanningByProject.get(dir);
  const task = startHostTask("统计项目");
  const p = (async () => {
    const { files: rels, truncated } = await listFiles(dir);
    if (task) task.updateLabel(`统计项目 · ${rels.length} 个文件`);
    const absList = rels.map((r) => joinRoot(dir, r));
    let lastLogged = 0;
    const measures = await measureAll(absList, (done, total) => {
      setProgress(ctx, `统计中 ${done}/${total}…`);
      // 每 ~10% 记一条步骤，避免任务日志被数千条刷爆
      if (task && (done - lastLogged >= Math.max(1, Math.floor(total / 10)) || done === total)) {
        lastLogged = done;
        task.step(`已测量 ${done}/${total}`);
      }
    });
    const files = rels.map((rel, i) => ({ rel, abs: absList[i], ...measures[i] }));
    const result = { ts: Date.now(), truncated, files };
    return saveResult(dir, result).then(() => result);
  })();
  p.then(
    (r) => {
      const s = summarize(r.files);
      lastSummary = s;
      setProgress(ctx, null);
      if (task) task.done(`${formatNumber(s.total)} 文件 · ${formatNumber(s.lines)} 行 · ${formatBytes(s.bytes)}`);
    },
    (e) => {
      if (task) task.fail(String(e?.message ?? e));
    },
  );
  scanningByProject.set(dir, p);
  p.finally(() => {
    scanningByProject.delete(dir);
    progressByProject.delete(dir);
  }).catch(() => {});
  return p;
}

/* ------------------------------------------------------------------ 命令 + 状态栏入口 */

function ensureStatusRegistered(api) {
  if (!api?.statusbar || !api?.commands) return;
  api.commands.register(CMD_RUN, runStats);
  api.statusbar.registerMenu({
    id: MENU_ID,
    text: "统计项目",
    icon: "barChart",
    commandId: CMD_RUN,
    tooltip: "统计当前项目的文件数、每个文件行数与总字节数",
    order: 70,
    when: (c) => !!c.projectDir,
  });
  // 摘要条目只注册一次：文案经 textFn 现取（进度 → 纯文本更新，不再换数组引用触发菜单重排）。
  api.statusbar.register({
    id: STATUS_ID,
    text: "项目统计：未运行",
    textFn: () => statusText(),
    commandId: CMD_RUN,
    tooltip: "点击重新统计当前项目",
    order: 70,
    when: (c) => !!c.projectDir,
  });
}

/** 状态栏条目当前应展示的文案：扫描中显示进度，否则显示该项目最近一次结果摘要。 */
function statusText() {
  const dir = currentCtx?.projectDir ?? null;
  return (dir && progressByProject.get(dir)) || defaultStatusText(dir);
}

/** 记录扫描进度（text 为空则清除，回到结果摘要文案）。 */
function setProgress(ctx, text) {
  const dir = ctx?.projectDir ?? null;
  if (!dir) return;
  if (text) progressByProject.set(dir, text);
  else progressByProject.delete(dir);
}

/** 「统计项目」命令处理器：跑一次扫描，完成后切到「项目统计」视图并展示详情。 */
async function runStats(statusCtx) {
  const ctx = currentCtx;
  const dir = statusCtx?.projectDir ?? ctx?.projectDir ?? null;
  if (!ctx || !dir) {
    try { ctx?.toast?.("info", "请先在文件编辑器里打开一个项目。"); } catch { /* noop */ }
    return;
  }
  setProgress(ctx, "统计中…");
  try {
    await scanProject(dir, ctx);
    refreshView();
    focusStatsView();
    const s = lastSummary;
    ctx.toast(
      "ok",
      s
        ? `项目统计完成：${formatNumber(s.total)} 文件 · ${formatNumber(s.lines)} 行 · ${formatBytes(s.bytes)}。详情见左侧「项目统计」视图，历史可点左下角任务按钮查看。`
        : "项目统计完成，已在左侧展开详情。",
    );
  } catch (e) {
    setProgress(ctx, null);
    ctx.toast("error", `统计失败：${e?.message ?? e}。可点左下角任务按钮查看失败记录。`);
  }
}

/** 尽力把左侧切到「项目统计」视图（无公开 API，走图标条 title 匹配后点击）。
 *  重试 ~2s：宿主侧边栏可能处于隐藏/未激活态，视图图标要等面板重新布局才出现。 */
function focusStatsView() {
  let tries = 0;
  const tick = () => {
    try {
      const titles = ["项目统计", "Project Stats"];
      for (const el of document.querySelectorAll(".vs-act-btn[title], .fw-nav-external-item[title]")) {
        if (titles.includes(el.getAttribute("title")) && typeof el.click === "function") {
          el.click();
          return;
        }
      }
    } catch {
      /* 找不到就安静：用户手动点图标即可 */
    }
    if (++tries < 8) setTimeout(tick, 250);
  };
  tick();
}

/** 该项目最近一次统计结果的摘要文案（无结果时回退「未运行」）。 */
function defaultStatusText(dir) {
  const r = dir ? resultsByProject.get(dir) : null;
  if (!r || !Array.isArray(r.files) || !r.files.length) return "项目统计：未运行";
  const s = summarize(r.files);
  return `项目统计 · ${formatNumber(s.total)} 文件 · ${formatNumber(s.lines)} 行 · ${formatBytes(s.bytes)}`;
}

/* ------------------------------------------------------------------ 视图定义 */

function buildView() {
  return {
    id: VIEW_ID,
    title: { zh: "项目统计", en: "Project Stats" },
    description: {
      zh: "统计当前项目的文件数、每个文件行数与总字节数",
      en: "Count files, per-file lines and total bytes in the current project",
    },
    icon: "barChart",
    order: 75,
    when: (ctx) => !!ctx.projectDir,
    mount(el, ctx) {
      return mountView(el, ctx);
    },
  };
}

/* ------------------------------------------------------------------ 挂载 UI */

function mountView(el, ctx) {
  el.classList.add(`${NS}-view`);
  el.classList.add(`${NS}-view-host`);
  el.innerHTML = `
    <div class="${NS}-root">
      <div class="${NS}-bar">
        <button class="${NS}-run" type="button">重新统计</button>
        <span class="${NS}-ts"></span>
      </div>
      <div class="${NS}-summary"></div>
      <div class="${NS}-table"></div>
    </div>`;

  const runBtn = el.querySelector(`.${NS}-run`);
  const tsEl = el.querySelector(`.${NS}-ts`);
  const summaryEl = el.querySelector(`.${NS}-summary`);
  const tableEl = el.querySelector(`.${NS}-table`);

  currentCtx = ctx;
  currentView = refresh;

  let off = [];
  runBtn.addEventListener("click", () => {
    void runStats({ path: ctx.activeFile ?? null, projectDir: ctx.projectDir ?? null });
  });

  function render() {
    const dir = ctx.projectDir;
    const r = dir ? resultsByProject.get(dir) : null;
    if (!r || !Array.isArray(r.files) || !r.files.length) {
      tsEl.textContent = "";
      summaryEl.replaceChildren(emptyNode("（尚未统计，点上方按钮或底部「扩展 → 统计项目）」"));
      tableEl.replaceChildren();
      return;
    }
    tsEl.textContent = `上次统计：${new Date(r.ts).toLocaleString()}`;
    renderSummary(summaryEl, r, ctx);
    renderTable(tableEl, r, ctx);
  }

  function refresh() {
    render();
  }

  async function onProjectChanged(dir) {
    if (dir) await loadResult(dir);
    setProgress(ctx, null);
    render();
  }

  if (typeof ctx.onProjectChange === "function") off.push(ctx.onProjectChange(onProjectChanged));

  (async () => {
    if (ctx.projectDir) await loadResult(ctx.projectDir);
    setProgress(ctx, null);
    render();
  })();

  return () => {
    off.forEach((f) => {
      try {
        f();
      } catch {
        /* noop */
      }
    });
    if (currentView === refresh) currentView = null;
    if (currentCtx === ctx) currentCtx = null;
    el.replaceChildren();
  };
}

function refreshView() {
  try {
    currentView?.();
  } catch {
    /* noop */
  }
}

function renderSummary(container, r, ctx) {
  const s = summarize(r.files);
  container.replaceChildren();
  const cards = [
    { label: "文件", value: formatNumber(s.total) },
    { label: "总行数", value: formatNumber(s.lines) },
    { label: "总词数", value: formatNumber(s.words) },
    { label: "总字节", value: `${formatBytes(s.bytes)} (${formatNumber(s.bytes)} B)` },
  ];
  const wrap = document.createElement("div");
  wrap.className = `${NS}-cards`;
  for (const c of cards) {
    const card = document.createElement("div");
    card.className = `${NS}-card`;
    const v = document.createElement("div");
    v.className = `${NS}-card-v`;
    v.textContent = c.value;
    const l = document.createElement("div");
    l.className = `${NS}-card-l`;
    l.textContent = c.label;
    card.append(v, l);
    wrap.appendChild(card);
  }
  container.appendChild(wrap);
  if (r.truncated) {
    const warn = document.createElement("div");
    warn.className = `${NS}-warn`;
    warn.textContent = "⚠ 文件索引超过上限（8000），结果为部分文件的统计。";
    container.appendChild(warn);
  }
  const byExt = topBy(r.files, (f) => extOf(f.rel), 8);
  if (byExt.length) {
    const head = document.createElement("div");
    head.className = `${NS}-grouphead`;
    head.textContent = "按扩展名（前 8）";
    container.appendChild(head);
    container.appendChild(chipList(byExt, (x) => x.key, (x) => `${formatNumber(x.count)} 个 · ${formatNumber(sum(x.files, "lines"))} 行 · ${formatBytes(sum(x.files, "bytes"))}`));
  }
  const byDir = topBy(r.files, (f) => dirName(f.rel).split("/")[0] || "(根目录)", 8);
  if (byDir.length > 1) {
    const head = document.createElement("div");
    head.className = `${NS}-grouphead`;
    head.textContent = "按顶层目录（前 8）";
    container.appendChild(head);
    container.appendChild(chipList(byDir, (x) => x.key, (x) => `${formatNumber(x.count)} 个 · ${formatNumber(sum(x.files, "lines"))} 行 · ${formatBytes(sum(x.files, "bytes"))}`));
  }
  void ctx;
}

function chipList(items, keyOf, valOf) {
  const ul = document.createElement("div");
  ul.className = `${NS}-chips`;
  for (const it of items) {
    const li = document.createElement("div");
    li.className = `${NS}-chip`;
    const k = document.createElement("span");
    k.className = `${NS}-chip-k`;
    k.textContent = keyOf(it);
    const v = document.createElement("span");
    v.className = `${NS}-chip-v`;
    v.textContent = valOf(it);
    li.append(k, v);
    ul.appendChild(li);
  }
  return ul;
}

function topBy(files, keyFn, limit) {
  const map = new Map();
  for (const f of files) {
    const k = keyFn(f);
    if (!map.has(k)) map.set(k, { key: k, count: 0, files: [] });
    const g = map.get(k);
    g.count += 1;
    g.files.push(f);
  }
  return [...map.values()].sort((a, b) => b.count - a.count).slice(0, limit);
}

function sum(files, field) {
  let t = 0;
  for (const f of files) t += f[field] || 0;
  return t;
}

function renderTable(container, r, ctx) {
  const rows = [...r.files].sort((a, b) => b.lines - a.lines || a.rel.localeCompare(b.rel));
  const table = document.createElement("table");
  table.className = `${NS}-tab`;
  const thead = document.createElement("thead");
  thead.innerHTML = `<tr><th>文件</th><th class="${NS}-num">行数</th><th class="${NS}-num">词数</th><th class="${NS}-num">字节</th></tr>`;
  table.appendChild(thead);
  const tbody = document.createElement("tbody");
  for (const f of rows) {
    const tr = document.createElement("tr");
    const nameCell = document.createElement("td");
    nameCell.className = `${NS}-fname`;
    nameCell.title = f.abs;
    nameCell.textContent = f.rel + (f.binary ? " ⚠" : "");
    const tdLines = document.createElement("td");
    tdLines.className = `${NS}-num`;
    tdLines.textContent = formatNumber(f.lines);
    const tdWords = document.createElement("td");
    tdWords.className = `${NS}-num`;
    tdWords.textContent = formatNumber(f.words);
    const tdBytes = document.createElement("td");
    tdBytes.className = `${NS}-num`;
    tdBytes.textContent = formatNumber(f.bytes);
    tr.append(nameCell, tdLines, tdWords, tdBytes);
    tr.addEventListener("click", () => {
      try {
        const p = ctx.openFile(f.abs);
        if (p && typeof p.catch === "function") p.catch(() => {});
      } catch {
        /* noop */
      }
    });
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  container.replaceChildren(table);
}

function emptyNode(text) {
  const d = document.createElement("div");
  d.className = `${NS}-empty`;
  d.textContent = text;
  return d;
}

/* ------------------------------------------------------------------ 小工具 */

function globalApi() {
  return typeof window !== "undefined" ? window[API_KEY] : null;
}

/** 「宿主 API 已真就绪」探测：探针跑的是 no-op 桩（见 userPlugins probeAndApply），必须排除。 */
function apiReady(api) {
  return !!api?.activityBar && api.activityBar.register.name !== "noop";
}

injectStyles();

function injectStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(`${NS}-styles`)) return;
  const css = `
.${NS}-view { color: var(--dsh-fg, #c9d1d9); font-size: 12px; }
.${NS}-root { display: flex; flex-direction: column; min-height: 100%; }
.${NS}-bar { display: flex; align-items: center; gap: 8px; padding: 8px 10px; position: sticky; top: 0; background: var(--dsh-bg, #0d1117); border-bottom: 1px solid var(--dsh-border, #30363d); z-index: 3; }
.${NS}-run { flex: 0 0 auto; padding: 4px 12px; border: 1px solid var(--dsh-accent, #2f81f7); border-radius: 6px; background: var(--dsh-accent-weak, rgba(47,129,247,.14)); color: var(--dsh-accent, #2f81f7); font: inherit; font-weight: 600; cursor: pointer; }
.${NS}-run:hover { background: var(--dsh-accent-soft, rgba(47,129,247,.2)); }
.${NS}-run:focus-visible { outline: 1px solid var(--dsh-accent, #2f81f7); outline-offset: -1px; }
.${NS}-ts { color: var(--dsh-fg-weak, #8b949e); font-size: 11px; }
.${NS}-summary { padding: 8px 10px; }
.${NS}-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 6px; }
.${NS}-card { padding: 6px 10px; border: 1px solid var(--dsh-border, #30363d); border-radius: 8px; background: var(--dsh-bg2, #161b22); }
.${NS}-card-v { font-weight: 700; font-size: 14px; font-family: var(--dsh-mono, monospace); }
.${NS}-card-l { color: var(--dsh-fg-weak, #8b949e); margin-top: 2px; }
.${NS}-warn { margin-top: 6px; padding: 4px 8px; border-radius: 6px; background: color-mix(in srgb, var(--dsh-warn, #d29922) 14%, transparent); color: var(--dsh-warn, #d29922); }
.${NS}-grouphead { margin: 10px 0 4px; color: var(--dsh-fg-weak, #8b949e); font-weight: 600; }
.${NS}-chips { display: flex; flex-wrap: wrap; gap: 4px; }
.${NS}-chip { display: inline-flex; gap: 6px; align-items: baseline; padding: 2px 8px; border: 1px solid var(--dsh-border, #30363d); border-radius: 999px; background: var(--dsh-bg2, #161b22); }
.${NS}-chip-k { font-family: var(--dsh-mono, monospace); }
.${NS}-chip-v { color: var(--dsh-fg-weak, #8b949e); }
.${NS}-table { padding: 2px 6px 8px; overflow-x: auto; }
.${NS}-tab { width: 100%; border-collapse: collapse; }
.${NS}-tab th { text-align: left; padding: 4px 8px; border-bottom: 1px solid var(--dsh-border, #30363d); color: var(--dsh-fg-weak, #8b949e); font-weight: 600; position: sticky; top: 0; background: var(--dsh-bg, #0d1117); }
.${NS}-tab .${NS}-num { text-align: right; font-family: var(--dsh-mono, monospace); }
.${NS}-tab td { padding: 3px 8px; border-bottom: 1px solid color-mix(in srgb, var(--dsh-border, #30363d) 45%, transparent); }
.${NS}-fname { max-width: 0; width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; cursor: pointer; }
.${NS}-tab tbody tr:hover { background: var(--dsh-hover, #30363d); }
.${NS}-empty { padding: 10px 12px; color: var(--dsh-fg-muted, #6e7681); font-style: italic; text-align: center; }
`;
  const style = document.createElement("style");
  style.id = `${NS}-styles`;
  style.textContent = css;
  document.head.appendChild(style);
}

export function apply(_ctx) {
  const api = globalApi();
  // 探针预检跑的是 no-op 桩（见 userPlugins probeAndApply）：桩下注册会被快照 diff 误判为
  // 贡献点、250ms 窗口后又被撤销。轮询命中真 API 后再动手，两条路径都稳。
  if (!apiReady(api)) return false;
  if (api.activityBar) api.activityBar.register(buildView());
  ensureStatusRegistered(api);
  return true;
}

// 兼容「无外壳直调」的极简宿主路径：立即试一次；宿主 API 未就绪时轮询到 ≈10s。
// （标准导入路径里 factory.apply 由宿主调用，这里同步命中即止。）
if (typeof window !== "undefined") {
  (function waitForApi() {
    let tries = 0;
    const tick = () => {
      if (apply(null)) return;
      if (++tries >= 40) return;
      setTimeout(tick, 250);
    };
    tick();
  })();
}

/*
 * ─────────────────────────────────────────────────────────────────────────────
 * 本文件是 **packages/*.js 源码形态**（三种顶层 export），可直接拖进「插件管理 → 导入」：
 * 宿主识别源码后会现场执行与 npm run build（pack.mjs）同构的 __ModuleLoader__ 打包，
 * 名称/描述等元数据取自上方 meta。也支持拷入 plugins/packages/ 后走构建产出内置种子。
 * ─────────────────────────────────────────────────────────────────────────────
 */
