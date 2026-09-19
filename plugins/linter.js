/**
 * linter.js — DSH 文件编辑器外部插件（纯 JS 单文件）。
 *
 * 本插件不依赖宿主 ctx 服务，只经 window.__dshFileWorkbenchVSCode__ 注册一个 Activity Bar「外部诊断」视图。
 *
 * 能力（对标 VS Code Problems / External Linter）：
 *  - 运行用户配置的命令（如 `node --check app.js`、`npx tsc --noEmit`、`npx eslint .`），
 *    捕获 stdout+stderr；命令经 host `POST /git/run { path:projectDir, args:[...] }` 在**项目根**执行
 *    （该端点同步返回 { code, stdout, stderr }，比交互式 exec-stream 更适合一次性取输出）；
 *  - 按常见诊断格式解析出 file[:line[:col]] severity message（tsc/eslint-stylish/node/通用）；
 *  - 用 v1 ctx.editor.createDecorations 把 error/warning 标成对应颜色波浪线（mark）；
 *  - 面板按文件分组列出诊断，点击跳转并高亮该行区间；
 *  - 每个项目的命令持久化到 /persist（key = dsh-fw.linter.<projectDir>）。
 *
 * 说明：本插件是「装饰通路 + 外部命令」的参考实现——不做语言服务器，纯靠可配置命令行工具，
 * 契合工作台「零重依赖、复用现有 REST」的定位。
 */

const API_KEY = "__dshFileWorkbenchVSCode__";
const PREFIX = "/api/dsh-file-workbench";
const VIEW_ID = "linter.view";
const NS = "dsh-ln";

/** 插件清单（打包进 .pack-meta.json 与 bundle 顶层 manifest() 声明；id 由 pack.mjs 生成，勿手写）。 */
export const meta = {
    "name": "外部诊断",
    "version": "",
    "description": "运行可配置 lint/tsc/node 命令，把诊断标成波浪线并列成可跳转问题面板",
    "nameEn": "External Linter",
    "descriptionEn": "DSH file editor plugin: activity bar view that runs user-configured commands (node --check/tsc/eslint…) to capture diagnostics, parses file:line:col message → v1 createDecorations squiggles + a jumpable problems panel. Counterpart of VS Code Problems/External Linter."
};

export const inject = [];


/* ------------------------------------------------------------------ 跨挂载状态 */

/** projectDir → 命令字符串。 */
const cmdByProject = new Map();
/** projectDir → 归一化诊断数组 [{ file, line, col, severity, message }]。 */
const problemsByProject = new Map();
let currentCtx = null;
let currentUi = null;

function persistKey(dir) {
  return `dsh-fw.linter.${dir}`;
}

async function loadCommand(dir) {
  if (!dir) return "";
  if (cmdByProject.has(dir)) return cmdByProject.get(dir);
  let cmd = "";
  try {
    const res = await fetch(`${PREFIX}/persist?k=${encodeURIComponent(persistKey(dir))}`, { headers: { Accept: "application/json" } });
    const body = await res.json().catch(() => null);
    const v = body?.data?.[persistKey(dir)];
    if (typeof v === "string") cmd = v;
  } catch {
    /* ignore */
  }
  cmdByProject.set(dir, cmd);
  return cmd;
}

function saveCommand(dir, cmd) {
  cmdByProject.set(dir, cmd);
  fetch(`${PREFIX}/persist`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ k: persistKey(dir), v: cmd }),
  }).catch(() => {});
}

/* ------------------------------------------------------------------ 视图定义 */

function buildView() {
  return {
    id: VIEW_ID,
    title: { zh: "外部诊断", en: "Problems" },
    description: {
      zh: "运行可配置 lint/tsc/node 命令，把诊断标成波浪线并列成可跳转问题面板",
      en: "Run a configurable lint/tsc/node command; show squiggles + a jumpable problems panel",
    },
    icon: "warning",
    order: 64,
    when: (ctx) => !!ctx.projectDir,
    mount(el, ctx) {
      return mountView(el, ctx);
    },
  };
}

/* ------------------------------------------------------------------ 命令执行 */

/** 把命令行串切成 argv（支持单/双引号包裹含空格参数）。 */
function tokenize(cmd) {
  const out = [];
  let cur = "";
  let quote = null;
  let started = false;
  for (const ch of cmd) {
    if (quote) {
      if (ch === quote) {
        quote = null;
      } else cur += ch;
    } else if (ch === '"' || ch === "'") {
      quote = ch;
      started = true;
    } else if (/\s/.test(ch)) {
      if (started || cur) {
        out.push(cur);
        cur = "";
        started = false;
      }
    } else {
      cur += ch;
      started = true;
    }
  }
  if (started || cur) out.push(cur);
  return out.filter(Boolean);
}

/** 经 host /git/run 在项目根执行命令，返回合并输出文本。 */
async function runCommand(dir, cmd) {
  const args = tokenize(cmd);
  if (!args.length) return "";
  const res = await fetch(`${PREFIX}/git/run`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ path: dir, args }),
  });
  const body = await res.json().catch(() => null);
  if (!body?.ok) throw new Error(body?.error || `HTTP ${res.status}`);
  const d = body.data || {};
  return `${d.stdout ?? ""}\n${d.stderr ?? ""}`;
}

/* ------------------------------------------------------------------ 诊断解析 */

const SEV_RE = /(error|warning|err|warn|info|note)/i;
function sevFrom(s) {
  const m = s && s.match(SEV_RE);
  const k = m ? m[1].toLowerCase() : "";
  if (k === "warning" || k === "warn") return "warning";
  if (k === "info" || k === "note") return "info";
  return "error";
}

/** 把相对路径按项目根解析为绝对路径（用于匹配编辑器 activeFile）。 */
function toAbs(dir, file) {
  const f = String(file).trim().replace(/^["']|["']$/g, "");
  if (/^([a-zA-Z]:[\\/]|\/|\\)/.test(f)) return f; // 已是绝对路径
  const sep = /[\\/]/.test(dir) && dir.includes("\\") ? "\\" : "/";
  return dir.replace(/[\\/]+$/, "") + sep + f.replace(/^[\\/]+/, "");
}

/** 解析命令输出为归一化诊断列表。多策略叠加，去重。 */
function parseProblems(output, dir) {
  const found = [];
  const push = (file, line, col, severity, message) => {
    const abs = toAbs(dir, file);
    found.push({ file: abs, line: Number(line) || 0, col: Number(col) || 0, severity, message: String(message).trim() });
  };

  for (const raw of String(output).split(/\r?\n/)) {
    const line = raw.trimEnd();
    if (!line.trim()) continue;

    // A) tsc: file(ts|js|...):(line,col): error TSxxxx: message
    let m = line.match(/^(.+?\.(?:ts|tsx|js|jsx|mjs|cjs|vue))\((\d+),(\d+)\):\s+(error|warning)\b[:\s]*(.*)$/i);
    if (m) {
      push(m[1], m[2], m[3], sevFrom(m[4]), m[5]);
      continue;
    }
    // B) node/python/generic: [at ]file:(line):col|message  —— 无显式 severity，默认 error
    m = line.match(/^\s*at\s.*?\((.+?):(\d+):(\d+)\)/);
    if (m) {
      push(m[1], m[2], m[3], "error", line.trim());
      continue;
    }
    // C) generic: file:line:col: severity message  或  file:line:col message
    m = line.match(/^(.+?):(\d+):(\d+):\s*(?:(error|warning|info|note)\b[:\s-]*)?(.*)$/i);
    if (m && /\.(ts|tsx|js|jsx|mjs|cjs|vue|css|scss|less|py|java|go|rs|php|rb|c|cpp|h|json)$/.test(m[1])) {
      push(m[1], m[2], m[3], m[4] ? sevFrom(m[4]) : "error", m[5] || line.trim());
      continue;
    }
    // D) file:line severity message（无列）
    m = line.match(/^(.+?):(\d+):\s*(error|warning)\b[:\s-]*(.*)$/i);
    if (m && /\./.test(m[1])) {
      push(m[1], m[2], 0, sevFrom(m[3]), m[4]);
      continue;
    }
  }

  // 去重（同 file/line/col/message）。
  const seen = new Set();
  const out = [];
  for (const p of found) {
    const key = `${normPath(p.file)}:${p.line}:${p.col}:${p.message}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(p);
  }
  return out;
}

/* ------------------------------------------------------------------ 装饰应用 */

function normPath(p) {
  return String(p).replace(/\\/g, "/");
}
function sameFile(a, b) {
  return normPath(a).toLowerCase() === normPath(b).toLowerCase();
}

/** 由当前缓冲文本算某行的起始偏移与长度。 */
function lineRange(ed, lineNo) {
  const doc = ed?.view?.state?.doc;
  if (!doc || lineNo < 1 || lineNo > doc.lines) return null;
  const ln = doc.line(lineNo);
  return { from: ln.from, len: ln.text.length };
}

/** 把当前文件的诊断换算成 mark 装饰条目。 */
function decoItemsFor(ed, file) {
  const dir = currentCtx?.projectDir;
  const probs = (problemsByProject.get(dir) ?? []).filter((p) => sameFile(p.file, file));
  const items = [];
  for (const p of probs) {
    const range = lineRange(ed, p.line);
    if (!range) continue;
    let from = range.from + Math.max(0, (p.col || 1) - 1);
    let to = from + 1;
    if (from > range.from + range.len) {
      from = range.from;
      to = range.from + Math.max(1, range.len);
    }
    items.push({ type: "mark", start: { offset: from }, end: { offset: to }, category: p.severity === "warning" ? "warning" : p.severity === "info" ? "info" : "error", message: `[${p.severity}] ${p.message}` });
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
        <input class="${NS}-cmd" type="text" spellcheck="false" placeholder="命令，如：node --check app.js ｜ npx tsc --noEmit ｜ npx eslint ." />
        <button class="${NS}-run" type="button">运行</button>
      </div>
      <div class="${NS}-hint"></div>
      <div class="${NS}-list"></div>
    </div>`;

  const cmdInput = el.querySelector(`.${NS}-cmd`);
  const runBtn = el.querySelector(`.${NS}-run`);
  const hint = el.querySelector(`.${NS}-hint`);
  const list = el.querySelector(`.${NS}-list`);

  currentCtx = ctx;
  currentUi = { handle: null, refresh };
  let off = [];
  let running = false;

  async function run() {
    if (running) return;
    const dir = ctx.projectDir;
    if (!dir) return;
    const cmd = cmdInput.value.trim();
    if (!cmd) {
      hint.textContent = "请先填写要运行的命令。";
      return;
    }
    saveCommand(dir, cmd);
    running = true;
    runBtn.disabled = true;
    hint.textContent = "正在运行…";
    list.replaceChildren();
    try {
      const output = await runCommand(dir, cmd);
      const problems = parseProblems(output, dir);
      problemsByProject.set(dir, problems);
      applyDecos();
      renderList(list, ctx);
      const errs = problems.filter((p) => p.severity === "error").length;
      hint.textContent = problems.length
        ? `诊断 ${problems.length} 条（error ${errs}）· ${new Date().toLocaleTimeString()}`
        : `无诊断（退出码见命令输出）· ${new Date().toLocaleTimeString()}`;
    } catch (e) {
      hint.textContent = `运行失败：${e?.message ?? e}`;
    } finally {
      running = false;
      runBtn.disabled = false;
    }
  }

  runBtn.addEventListener("click", run);
  cmdInput.addEventListener("keydown", (ev) => {
    if (ev.key === "Enter") run();
  });

  function refresh() {
    renderList(list, ctx);
  }

  async function onActiveChanged() {
    applyDecos();
  }

  async function onProjectChanged(dir) {
    if (currentUi?.handle) {
      currentUi.handle.update([]);
      currentUi.handle = null;
    }
    cmdInput.value = dir ? await loadCommand(dir) : "";
    applyDecos();
    refresh();
  }

  if (typeof ctx.onDidChangeActiveFile === "function") off.push(ctx.onDidChangeActiveFile(onActiveChanged));
  if (typeof ctx.onProjectChange === "function") off.push(ctx.onProjectChange(onProjectChanged));

  (async () => {
    if (ctx.projectDir) cmdInput.value = (await loadCommand(ctx.projectDir)) || "";
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
    el.replaceChildren();
  };
}

function renderList(container, ctx) {
  const dir = ctx.projectDir;
  const problems = problemsByProject.get(dir) ?? [];
  if (!problems.length) {
    container.replaceChildren(empty("（暂无诊断，填命令后点「运行」）"));
    return;
  }
  const byFile = new Map();
  for (const p of problems) {
    if (!byFile.has(p.file)) byFile.set(p.file, []);
    byFile.get(p.file).push(p);
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
    for (const p of rows) {
      const row = document.createElement("button");
      row.type = "button";
      row.className = `${NS}-row`;
      row.innerHTML = `<span class="${NS}-sev ${NS}-sev-${p.severity}"></span><span class="${NS}-loc"></span><span class="${NS}-msg"></span>`;
      row.querySelector(`.${NS}-loc`).textContent = `:${p.line}${p.col ? ":" + p.col : ""}`;
      row.querySelector(`.${NS}-msg`).textContent = p.message;
      row.title = `${file}:${p.line}:${p.col} ${p.message}`;
      row.addEventListener("click", () => {
        try {
          const pr = ctx.openFile(file, p.line ? { line: p.line } : undefined);
          if (pr && typeof pr.catch === "function") pr.catch(() => {});
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

function empty(text) {
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
.${NS}-cmd { flex: 1 1 auto; min-width: 0; padding: 4px 8px; border: 1px solid var(--dsh-border, #30363d); border-radius: 6px; background: var(--dsh-bg2, #161b22); color: inherit; outline: none; font-family: var(--dsh-mono, monospace); font-size: inherit; }
.${NS}-cmd::placeholder { color: var(--dsh-fg-muted, #6e7681); }
.${NS}-cmd:focus { border-color: var(--dsh-accent, #2f81f7); box-shadow: 0 0 0 2px var(--dsh-accent-weak, rgba(47,129,247,.14)); }
.${NS}-run { flex: 0 0 auto; padding: 4px 12px; border: 1px solid var(--dsh-accent, #2f81f7); border-radius: 6px; background: var(--dsh-accent-weak, rgba(47,129,247,.14)); color: var(--dsh-accent, #2f81f7); font: inherit; font-weight: 600; cursor: pointer; }
.${NS}-run:hover:not(:disabled) { background: var(--dsh-accent-soft, rgba(47,129,247,.2)); }
.${NS}-run:disabled { opacity: .5; cursor: default; }
.${NS}-run:focus-visible { outline: 1px solid var(--dsh-accent, #2f81f7); outline-offset: -1px; }
.${NS}-hint { padding: 5px 10px; color: var(--dsh-fg-weak, #8b949e); line-height: 1.5; }
.${NS}-list { flex: 1 1 auto; padding: 2px 6px 8px; }
.${NS}-group { margin: 2px 0; }
.${NS}-ghead { display: flex; align-items: center; gap: 5px; width: 100%; text-align: left; padding: 4px 8px; border: 0; background: transparent; color: var(--dsh-fg, #c9d1d9); font: inherit; font-weight: 600; cursor: pointer; border-radius: 4px; }
.${NS}-ghead:hover { background: var(--dsh-bg2, #161b22); }
.${NS}-ghead:focus-visible { outline: 1px solid var(--dsh-accent, #2f81f7); outline-offset: -1px; }
.${NS}-chev { flex: 0 0 auto; font-size: 9px; line-height: 1; color: var(--dsh-fg-weak, #8b949e); transition: transform .1s ease; }
.${NS}-collapsed .${NS}-chev { transform: rotate(-90deg); }
.${NS}-glabel { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.${NS}-collapsed .${NS}-glist { display: none; }
.${NS}-row { display: flex; gap: 7px; align-items: flex-start; width: 100%; text-align: left; padding: 3px 8px 3px 22px; border: 0; background: transparent; color: var(--dsh-fg, #c9d1d9); font: inherit; cursor: pointer; border-radius: 4px; white-space: nowrap; overflow: hidden; }
.${NS}-row:hover { background: var(--dsh-hover, #30363d); }
.${NS}-row:focus-visible { outline: 1px solid var(--dsh-accent, #2f81f7); outline-offset: -1px; }
.${NS}-sev { flex: 0 0 auto; width: 8px; height: 8px; margin-top: 4px; border-radius: 50%; background: var(--dsh-fg-weak, #8b949e); }
.${NS}-sev-error { background: var(--dsh-danger, #f85149); }
.${NS}-sev-warning { background: var(--dsh-warn, #d29922); }
.${NS}-sev-info { background: var(--dsh-info, #79c0ff); }
.${NS}-loc { flex: 0 0 auto; min-width: 3.5em; text-align: right; color: var(--dsh-fg-weak, #8b949e); font-family: var(--dsh-mono, monospace); }
.${NS}-msg { min-width: 0; overflow: hidden; text-overflow: ellipsis; }
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
