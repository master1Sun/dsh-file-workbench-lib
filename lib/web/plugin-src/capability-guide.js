window.__ModuleLoader__.manifest({"id":"dsh-fw.capability-guide","name":"能力手册","version":"","description":"示例插件：分区演示全部注入能力与宿主 HTTP API，可直接点跑，兼作开放能力的操作手册","nameEn":"Capability Guide","descriptionEn":"Sample plugin documenting every injection capability and host HTTP endpoint with runnable examples."});
window.__ModuleLoader__.load({
	id: "dsh-fw.capability-guide",
	inject: [],
	factory: (require) => {
		/**
		 * 能力手册.js — DSH 文件编辑器外部插件（纯 JS 单文件，可一键导入）。
		 *
		 * 能力：把宿主对外开放的**全部注入能力**做成可点击的操作手册——
		 *  window API（activityBar / statusbar+menu / commands / ctx.editor 装饰与订阅 /
		 *  workbench 状态栏与后台任务）逐一分区演示；宿主 HTTP 全清单（fs 读写检索、CRUD、
		 *  git/svn、终端 exec、/push 与 mux WS、plugin-data、注册表）每个端点带参数说明 +
		 *  安全默认示例载荷，点「运行」真调用并回显结果。
		 *
		 * 本文件同时是参考实现：所有正确用法（桩预检、按 projectDir 分桶、清理函数退订、
		 * LF 归一往返、mtime 冲突 412、WS URL 推导等）都在代码里给了最小可读的例子。
		 *
		 * 交付：保存到 plugins/importPackages/，在「插件管理 → 导入本地文件」拖入即可。
		 * 约定：只允许 export const meta / export const inject / export function apply 三种顶层导出；
		 *       不得有顶层 import；loader id = dsh-fw.<文件名>，勿手写。
		 */
		
		const API_KEY = "__dshFileWorkbenchVSCode__";
		const WB_API_KEY = "__dshFileWorkbenchWorkbench__";
		const PREFIX = "/api/dsh-file-workbench";
		const VIEW_ID = "capabilityGuide.view";
		const CMD_SUMMARY = "capabilityGuide.summary";
		const MENU_ID = "capabilityGuide.menu";
		const NS = "dsh-cap"; // CSS 命名空间前缀
		
		/** 插件清单：纯 JSON 风格字面量（双引号、无注释、无尾逗号）；name/description 必填。 */
		const meta = {
		    "name": "能力手册",
		    "version": "",
		    "description": "示例插件：分区演示全部注入能力与宿主 HTTP API，可直接点跑，兼作开放能力的操作手册",
		    "nameEn": "Capability Guide",
		    "descriptionEn": "Sample plugin documenting every injection capability and host HTTP endpoint with runnable examples."
		};
		
		const inject = [];
		
		/* ------------------------------------------------------------------ 工具 */
		
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
		
		function short(v, n = 600) {
		  const s = typeof v === "string" ? v : safeJson(v);
		  return s.length > n ? `${s.slice(0, n)}…(${s.length})` : s;
		}
		
		function safeJson(v) {
		  try {
		    return JSON.stringify(v, null, 1) ?? "";
		  } catch {
		    return String(v);
		  }
		}
		
		/** REST 统一入口：解析 `{ ok, data, error? }` 信封，非 2xx / ok:false 都抛错。 */
		async function apiGet(path, params) {
		  const qs = params ? `?${new URLSearchParams(params).toString()}` : "";
		  const res = await fetch(`${PREFIX}${path}${qs}`, { headers: { Accept: "application/json" } });
		  const body = await res.json().catch(() => null);
		  if (!res.ok || !body?.ok) throw new Error(`HTTP ${res.status}: ${body?.error ?? "请求失败"}`);
		  return body.data;
		}
		
		async function apiPost(path, payload, params) {
		  const qs = params ? `?${new URLSearchParams(params).toString()}` : "";
		  const res = await fetch(`${PREFIX}${path}${qs}`, {
		    method: "POST",
		    headers: { "Content-Type": "application/json", Accept: "application/json" },
		    body: JSON.stringify(payload ?? {}),
		  });
		  const body = await res.json().catch(() => null);
		  if (!res.ok || !body?.ok) throw new Error(`HTTP ${res.status}: ${body?.error ?? "请求失败"}`);
		  return body.data;
		}
		
		/** 非信封响应（/plugin-index 等直接回裸 JSON）用这个入口。 */
		async function rawGet(path, params) {
		  const qs = params ? `?${new URLSearchParams(params).toString()}` : "";
		  const res = await fetch(`${PREFIX}${path}${qs}`, { headers: { Accept: "application/json" } });
		  if (!res.ok) throw new Error(`HTTP ${res.status}`);
		  return await res.json();
		}
		
		async function apiDelete(path, params) {
		  const qs = params ? `?${new URLSearchParams(params).toString()}` : "";
		  const res = await fetch(`${PREFIX}${path}${qs}`, { headers: { Accept: "application/json" } });
		  const body = await res.json().catch(() => null);
		  if (!res.ok || !body?.ok) throw new Error(`HTTP ${res.status}: ${body?.error ?? "请求失败"}`);
		  return body.data;
		}
		
		/** 412 mtime-conflict 专用捕获：返回 { conflict:true } 而不是抛错（演示外部改动检测）。 */
		async function saveWithConflict(path, content, expectedMtime) {
		  const res = await fetch(`${PREFIX}/save`, {
		    method: "POST",
		    headers: { "Content-Type": "application/json" },
		    body: JSON.stringify({ path, content, eol: "lf", expectedMtime }),
		  });
		  const body = await res.json().catch(() => null);
		  if (res.status === 412 && body?.code === "mtime-conflict") return { conflict: true };
		  if (!res.ok || !body?.ok) throw new Error(`HTTP ${res.status}: ${body?.error ?? "保存失败"}`);
		  return { conflict: false, ...body.data };
		}
		
		/**
		 * WS 端点推导：不能裸拼 location.host —— 页面可能挂在带 basePath 的反代后面。
		 * 用 URL 解析相对路径（自动带上当前页所在的路径前缀），再把协议换成 ws/wss。
		 */
		function wsUrl(name) {
		  const u = new URL(`${PREFIX}/${name}`, location.href);
		  u.protocol = u.protocol === "https:" ? "wss:" : "ws:";
		  return u.toString();
		}
		
		/* ------------------------------------------------------- 跨挂载 / 跨窗口共享状态 */
		/* 同源页可能有多个编辑器窗口共享本模块：一切按 projectDir 分桶，别放裸全局。 */
		
		const stateByProject = new Map(); // dir → { hits, savedAt }（watcher 命中计数，供命令展示）
		let currentCtx = null;            // 最近一次挂载的编辑器 ctx（命令回调用）
		let currentWbCtx = null;          // 工作台视图激活时的 ctx（workbench 命令回调用）
		const guideOpen = { v: false };   // 视图是否挂着（菜单项文案据此变化——改文案=重注册）
		
		function projState(dir) {
		  let s = stateByProject.get(dir);
		  if (!s) {
		    s = { hits: 0, savedAt: 0 };
		    stateByProject.set(dir, s);
		  }
		  return s;
		}
		
		/* ------------------------------------------------------------------ 演示目录 */
		
		/* 演示写操作限定在 <项目>/.dsh-cap-demo/（params 默认值里同路径，可改）。 */
		
		/* ------------------------------------------------------------------ 能力目录 */
		/* run(ctx, p, out, params) —— p/params 即条目参数框的值（默认由 params 定义按 ctx 推导）。*/
		
		const CAPABILITIES = [
		  {
		    id: "ctx",
		    title: "ActivityContext · 面板上下文",
		    note: "mount(el, ctx) 的第二入参。getter 读即最新；订阅立即回调一次、返回退订函数。",
		    items: [
		      {
		        id: "ctx-info",
		        name: "读取上下文（GETTER）",
		        sig: "ctx.projectDir / ctx.theme / ctx.activeFile",
		        run: (ctx) => ({ projectDir: ctx.projectDir, theme: ctx.theme, activeFile: ctx.activeFile }),
		      },
		      {
		        id: "ctx-subscribe",
		        name: "订阅三事件（3 秒后自动退订）",
		        sig: "onProjectChange / onThemeChange / onDidChangeActiveFile",
		        run: (ctx, p, out) => {
		          const offs = [
		            ctx.onProjectChange((v) => out.line(`[project] ${v}`)),
		            ctx.onThemeChange((v) => out.line(`[theme] ${v}`)),
		            ctx.onDidChangeActiveFile((v) => out.line(`[activeFile] ${v}`)),
		          ];
		          out.line("已订阅，接下来切项目/主题/标签试试…");
		          setTimeout(() => {
		            offs.forEach((f) => { try { f(); } catch { /* noop */ } });
		            out.done("三条订阅已退订（清理函数见 mount 返回值同款写法）");
		          }, 3000);
		        },
		      },
		      {
		        id: "ctx-openfile",
		        name: "打开文件并跳行",
		        sig: "openFile(path, { line })",
		        params: { path: (c) => joinRoot(c.projectDir ?? "", "README.md"), line: () => 1 },
		        run: async (ctx, p) => { await ctx.openFile(p.path, { line: Number(p.line) || 1 }); return `已打开 ${p.path}:${p.line}`; },
		      },
		      {
		        id: "ctx-listfiles",
		        name: "已打开标签列表",
		        sig: "listOpenFiles()",
		        run: (ctx) => ctx.listOpenFiles(),
		      },
		      {
		        id: "ctx-opendiff",
		        name: "打开 DIFF 伪标签",
		        sig: "openDiff(title, lines)",
		        run: (ctx) => {
		          ctx.openDiff("能力手册 · 示例 diff", ["--- a/demo.txt", "+++ b/demo.txt", "@@ -1,2 +1,2 @@", "-old line", "+new line by 能力手册"]);
		          return "已以 diff 伪标签展示";
		        },
		      },
		      {
		        id: "ctx-toast",
		        name: "TOAST 三级提示",
		        sig: 'toast("ok"|"info"|"error", msg)',
		        run: (ctx) => {
		          ctx.toast("ok", "操作成功（ok）");
		          ctx.toast("info", "提示信息（info）");
		          ctx.toast("error", "出错了（error）");
		          return "右下角应出现三条 toast";
		        },
		      },
		    ],
		  },
		  {
		    id: "editor",
		    title: "ctx.editor · 编辑器门面",
		    note: "薄门面：直透 CodeMirror 原生对象。缓冲区内部恒为 LF，原行尾随 /read 的 eol 字段往返。",
		    items: [
		      {
		        id: "ed-read",
		        name: "读缓冲区 / 脏标志",
		        sig: "getText() / isDirty() / view",
		        run: (ctx) => {
		          const ed = ctx.editor;
		          const text = ed.getText() ?? "";
		          return { chars: text.length, firstLine: text.split("\n", 1)[0], dirty: ed.isDirty(), hasView: !!ed.view };
		        },
		      },
		      {
		        id: "ed-selection",
		        name: "当前选区",
		        sig: "getSelection()",
		        run: (ctx) => {
		          const sel = ctx.editor.getSelection();
		          if (!sel) return "无激活编辑器";
		          return { anchor: sel.anchor, head: sel.head, ranges: sel.ranges.length };
		        },
		      },
		      {
		        id: "ed-subscribe",
		        name: "订阅文档 / 选区变更（3 秒）",
		        sig: "onDidChangeTextDocument / onDidChangeSelection",
		        run: (ctx, p, out) => {
		          const off1 = ctx.editor.onDidChangeTextDocument((e) => out.line(`docChanged，新长度 ${e.text.length}`));
		          const off2 = ctx.editor.onDidChangeSelection((s) => out.line(`selection head=${s?.head ?? "?"}`));
		          setTimeout(() => {
		            try { off1(); off2(); } catch { /* noop */ }
		            out.done("两条订阅已退订");
		          }, 3000);
		        },
		      },
		      {
		        id: "ed-apply",
		        name: "应用编辑（保留撤销栈）",
		        sig: "applyEdit([{ from, to?, insert? }])",
		        run: (ctx) => {
		          const len = (ctx.editor.getText() ?? "").length;
		          if (!len) return "缓冲区为空，先在编辑器里打点字";
		          const ok = ctx.editor.applyEdit([{ from: len, insert: "\n// 能力手册注入的一行（Ctrl+Z 可撤销）\n" }]);
		          return ok ? "已在文末插入一行（走 view.dispatch，撤销栈完整）" : "无激活视图，applyEdit 返回 false";
		        },
		      },
		      {
		        id: "ed-deco",
		        name: "装饰：高亮 + 波浪线 + GUTTER",
		        sig: "createDecorations(spec) → handle.update(items)",
		        note: "唯一正路：纯 JSON spec 由宿主编译成真实 CM6 扩展；绝不自行 import CM6。",
		        run: (ctx) => {
		          const text = ctx.editor.getText() ?? "";
		          if (!text) return "无激活文件";
		          const words = [...new Set(text.match(/[A-Za-z_][A-Za-z0-9_]{6,}/g) ?? [])].slice(0, 8);
		          if (!words.length) return "没有 ≥7 字符的英文单词可高亮";
		          const re = new RegExp(`\\b(${words.join("|")})\\b`, "g");
		          const items = [];
		          for (let m = re.exec(text); m && items.length < 60; m = re.exec(text)) {
		            const upto = text.slice(0, m.index);
		            const line = upto.split("\n").length; // line 从 1 起
		            const character = m.index - (upto.lastIndexOf("\n") + 1);
		            items.push({ type: "mark", start: { line, character }, end: { line, character: character + m[0].length }, category: "highlight", message: `能力手册：长标识符 ${m[0]}` });
		          }
		          const firstLong = text.split("\n").findIndex((l) => l.length > 40);
		          if (firstLong >= 0) items.push({ type: "line", start: { line: firstLong + 1 }, category: "info" });
		          const errLine = text.split("\n").findIndex((l) => /TODO|FIXME/i.test(l));
		          if (errLine >= 0) items.push({ type: "gutter", start: { line: errLine + 1 }, category: "warn", message: "含 TODO/FIXME" });
		          const handle = ctx.editor.createDecorations({ items });
		          ctx.__capDeco = handle; // 存到本次 ctx 上，供清除按钮取用
		          return `已注入 ${items.length} 条装饰（mark/line/gutter 三类都有）`;
		        },
		      },
		      {
		        id: "ed-deco-clear",
		        name: "清除装饰",
		        sig: "setDecorations(null)",
		        run: (ctx) => {
		          if (!ctx.__capDeco) return "本 ctx 上没有已建装饰句柄";
		          ctx.editor.setDecorations(null);
		          ctx.__capDeco = null;
		          return "装饰层已清除（handle.update(newItems) 可就地重绘）";
		        },
		      },
		    ],
		  },
		  {
		    id: "commands",
		    title: "commands · 命令贡献点",
		    note: "跨插件互调通道：register 幂等覆盖；execute 未注册 id 静默 no-op。",
		    items: [
		      {
		        id: "cmd-register",
		        name: "注册演示命令",
		        sig: 'register("capabilityGuide.demo", handler)',
		        run: () => {
		          const api = window[API_KEY];
		          api.commands.register("capabilityGuide.demo", (arg) => ({ echoed: arg ?? null, at: new Date().toISOString() }));
		          return "已注册 capabilityGuide.demo（回显入参 + 时间戳）";
		        },
		      },
		      {
		        id: "cmd-execute",
		        name: "执行演示命令",
		        sig: "execute(id, ...args)",
		        run: async () => await window[API_KEY].commands.execute("capabilityGuide.demo", { hello: "能力手册" }),
		      },
		      {
		        id: "cmd-list",
		        name: "列出全部已注册命令",
		        sig: "list() / has(id)",
		        run: () => {
		          const list = window[API_KEY].commands.list();
		          return { count: list.length, hasDemo: window[API_KEY].commands.has("capabilityGuide.demo"), sample: list.slice(0, 30) };
		        },
		      },
		      {
		        id: "cmd-unregister",
		        name: "注销演示命令",
		        sig: "unregister(id)",
		        run: () => window[API_KEY].commands.unregister("capabilityGuide.demo") ? "已注销" : "本来就没注册",
		      },
		    ],
		  },
		  {
		    id: "statusbar",
		    title: "statusbar · 状态栏与「扩展」菜单",
		    note: "两个注册表都在底部「扩展」气泡附近呈现；register=平铺按钮，registerMenu=弹出菜单条目（优先）。",
		    items: [
		      {
		        id: "sb-register",
		        name: "注册状态栏按钮",
		        sig: "register({ id, text, commandId, when })",
		        run: () => {
		          const api = window[API_KEY];
		          api.commands.register("capabilityGuide.sbRun", () => api.statusbar.register({ id: MENU_ID + ".sb2", text: "已被点过一次", commandId: "capabilityGuide.sbRun", order: 81 }));
		          api.statusbar.register({ id: MENU_ID + ".sb", text: "能力手册·按钮", commandId: "capabilityGuide.sbRun", tooltip: "点击后自身改文案（演示同 id 覆盖重注册）", order: 80 });
		          return "底栏出现「能力手册·按钮」，点击会自我更新文案";
		        },
		      },
		      {
		        id: "sb-menu",
		        name: "注册「扩展」菜单条目（动态文案）",
		        sig: "registerMenu(item) —— 改文案须同 id 重注册",
		        run: () => {
		          refreshMenuText();
		          return "「扩展」菜单已出现条目；打开/关闭本视图时文案会自动重注册（宿主不 watch item.text）";
		        },
		      },
		      {
		        id: "sb-list",
		        name: "列出已注册项",
		        sig: "list() / listMenu()",
		        run: () => ({
		          statusbar: window[API_KEY].statusbar.list().map((i) => i.id),
		          menu: window[API_KEY].statusbar.listMenu().map((i) => i.id),
		        }),
		      },
		      {
		        id: "sb-unregister",
		        name: "注销本插件的状态栏项",
		        sig: "unregister(id) / unregisterMenu(id)",
		        run: () => {
		          const api = window[API_KEY];
		          api.statusbar.unregister(MENU_ID + ".sb");
		          api.statusbar.unregister(MENU_ID + ".sb2");
		          api.statusbar.unregisterMenu(MENU_ID);
		          return "三个条目均已移除（图标消失，激活视图不受影响）";
		        },
		      },
		    ],
		  },
		  {
		    id: "fsread",
		    title: "HTTP · 文件读取与检索",
		    note: "前缀 /api/dsh-file-workbench，响应 { ok, data, error? }；路径一律绝对（或 ssh:// 引用）。",
		    items: [
		      {
		        id: "fs-root",
		        name: "GET /root 工作区根",
		        sig: "?key（多窗口可选）",
		        run: async () => await apiGet("/root", {}),
		      },
		      {
		        id: "fs-files",
		        name: "GET /files 项目文件索引",
		        sig: "?path → { files: rel[], truncated }",
		        note: "跳过 .git/node_modules/dist 等噪声目录与符号链接；上限 8000 文件。",
		        run: async (ctx, p) => {
		          const d = await apiGet("/files", { path: ctx.projectDir });
		          return { total: d.files.length, truncated: d.truncated, sample: d.files.slice(0, 15) };
		        },
		      },
		      {
		        id: "fs-list",
		        name: "GET /list 单层目录",
		        sig: "?path → { entries, crumbs, root }",
		        params: { dir: (c) => joinRoot(c.projectDir ?? "", ".dsh-cap-demo") },
		        run: async (ctx, p) => {
		          const d = await apiGet("/list", { path: p.dir });
		          return { path: d.path, entries: d.entries.map((e) => `${e.name}${e.isDir ? "/" : ""}`), truncated: d.truncated };
		        },
		      },
		      {
		        id: "fs-browse",
		        name: "GET /browse 任意目录（带详情）",
		        sig: "?path → entries 附 size/mtime",
		        run: async () => {
		          const d = await apiGet("/browse", { path: (await apiGet("/root", {})).root || undefined });
		          return { path: d.path, parent: d.parent, first5: d.entries.slice(0, 5) };
		        },
		      },
		      {
		        id: "fs-drives",
		        name: "GET /drives + /mycomputer",
		        sig: "盘符容量 / 我的电脑顶层入口",
		        run: async () => ({ drives: await apiGet("/drives", {}), mycomputer: (await apiGet("/mycomputer", {})).items?.slice(0, 8) }),
		      },
		      {
		        id: "fs-read",
		        name: "GET /read 读文本",
		        sig: "?path&encoding=&bom= → { content,size,mtime,eol,binary }",
		        note: ">8MB 报 413；二进制 content 空 + binary:true；行尾归一为 LF，eol 字段供写回还原。",
		        params: { file: (c) => joinRoot(c.projectDir ?? "", ".dsh-cap-demo/demo.txt"), dir: (c) => joinRoot(c.projectDir ?? "", ".dsh-cap-demo") },
		        run: async (ctx, p) => {
		          const d = await apiGet("/read", { path: p.file });
		          return { size: d.size, encoding: d.encoding, eol: d.eol, binary: d.binary, head: d.content.slice(0, 120) };
		        },
		      },
		      {
		        id: "fs-detail",
		        name: "GET /detail stat 详情",
		        sig: "?path → { name,isDir,size,mtime,ext }",
		        params: { file: (c) => joinRoot(c.projectDir ?? "", ".dsh-cap-demo/demo.txt"), dir: (c) => joinRoot(c.projectDir ?? "", ".dsh-cap-demo") },
		        run: async (ctx, p) => await apiGet("/detail", { path: p.file }),
		      },
		      {
		        id: "fs-search",
		        name: "GET /search 文件名搜索",
		        sig: "?q&path&limit&case=1&regex=1",
		        params: { q: () => ".md" },
		        run: async (ctx, p) => {
		          const d = await apiGet("/search", { q: p.q, path: ctx.projectDir, limit: "20" });
		          return { matches: d.matches.slice(0, 15), byContent: d.byContent.length, truncated: d.truncated, scope: d.scope };
		        },
		      },
		      {
		        id: "fs-grep",
		        name: "GET /grep 内容搜索（按行）",
		        sig: '?q&sub&word=1&include="*.ts"&exclude=',
		        note: "载荷 { files:[{ rel, hits:[{ ln, text }] }], total, truncated }。",
		        params: { q: () => "const", include: () => "*.txt", dir: (c) => joinRoot(c.projectDir ?? "", ".dsh-cap-demo") },
		        run: async (ctx, p) => {
		          const d = await apiGet("/grep", { q: p.q, path: p.dir, word: "0", include: p.include });
		          return { total: d.total, files: d.files.map((f) => ({ rel: f.rel, first: f.hits[0] })) };
		        },
		      },
		      {
		        id: "fs-download",
		        name: "GET /download 原始字节流",
		        sig: "?path&inline=1（不套信封）",
		        note: "inline=1 时按 MIME 内联输出，可直接塞进 iframe/img。",
		        params: { file: (c) => joinRoot(c.projectDir ?? "", ".dsh-cap-demo/demo.txt"), dir: (c) => joinRoot(c.projectDir ?? "", ".dsh-cap-demo") },
		        run: async (ctx, p) => {
		          const res = await fetch(`${PREFIX}/download?path=${encodeURIComponent(p.file)}&inline=1`);
		          const buf = await res.arrayBuffer();
		          return { status: res.status, contentType: res.headers.get("content-type"), bytes: buf.byteLength };
		        },
		      },
		      {
		        id: "fs-image",
		        name: "GET /_read-image 图片流",
		        sig: "?path（仅图片扩展名）",
		        run: async (ctx) => {
		          const idx = await apiGet("/files", { path: ctx.projectDir });
		          const img = idx.files.find((f) => /\.(png|jpe?g|gif|webp|svg)$/i.test(f));
		          if (!img) return "项目里没有现成图片可比对（端点对非图片扩展名返回 400）";
		          const res = await fetch(`${PREFIX}/_read-image?path=${encodeURIComponent(joinRoot(ctx.projectDir, img))}`);
		          return { file: img, status: res.status, contentType: res.headers.get("content-type") };
		        },
		      },
		      {
		        id: "fs-openext",
		        name: "POST /openExternal 系统程序打开",
		        sig: "{ path }（文件→默认程序；目录→资源管理器）",
		        params: { dir: (c) => joinRoot(c.projectDir ?? "", ".dsh-cap-demo") },
		        run: async (ctx, p) => await apiPost("/openExternal", { path: p.dir }),
		      },
		    ],
		  },
		  {
		    id: "fswrite",
		    title: "HTTP · 写入与 CRUD",
		    note: "写守卫：受保护系统目录恒 403；工作区根之外还需用户在设置开启 allowOutsideRoot。以下演示全部限定在 <项目>/.dsh-cap-demo/。",
		    items: [
		      {
		        id: "w-mkdir",
		        name: "POST /mkdir 建目录",
		        sig: "{ path } → { path(解析后) }",
		        params: { dir: (c) => joinRoot(c.projectDir ?? "", ".dsh-cap-demo") },
		        run: async (ctx, p) => await apiPost("/mkdir", { path: p.dir }),
		      },
		      {
		        id: "w-touch",
		        name: "POST /touch 新建空文件",
		        sig: "{ path }",
		        params: { dir: (c) => joinRoot(c.projectDir ?? "", ".dsh-cap-demo") },
		        run: async (ctx, p) => await apiPost("/touch", { path: joinRoot(p.dir, "touched.txt") }),
		      },
		      {
		        id: "w-save",
		        name: "POST /save 写文本（LF 归一）",
		        sig: "{ path, content, encoding?, eol?, expectedMtime?, force? }",
		        note: "带 expectedMtime 时磁盘已被别处改写 → 412 mtime-conflict（除非 force:true）。回传落盘 mtime 供刷新基线。",
		        params: { file: (c) => joinRoot(c.projectDir ?? "", ".dsh-cap-demo/demo.txt"), dir: (c) => joinRoot(c.projectDir ?? "", ".dsh-cap-demo") },
		        run: async (ctx, p) => {
		          const before = await apiGet("/read", { path: p.file }).catch(() => null);
		          const content = `能力手册写入 @ ${new Date().toISOString()}\n第二行\n第三行\n`;
		          const r = await saveWithConflict(p.file, content, before?.mtime);
		          if (r.conflict) return "412 mtime-conflict：文件已被外部改动，这就是外部改动检测的样子（重试请 force:true）";
		          return { saved: r.path, mtime: r.mtime };
		        },
		      },
		      {
		        id: "w-rename",
		        name: "POST /rename 重命名/移动",
		        sig: "{ from, to }",
		        params: { dir: (c) => joinRoot(c.projectDir ?? "", ".dsh-cap-demo") },
		        run: async (ctx, p) => {
		          const from = joinRoot(p.dir, "touched.txt");
		          const to = joinRoot(p.dir, "renamed.txt");
		          return await apiPost("/rename", { from, to });
		        },
		      },
		      {
		        id: "w-copy",
		        name: "POST /copy 复制到目录",
		        sig: "{ src, destDir } → 重名自动加后缀",
		        params: { file: (c) => joinRoot(c.projectDir ?? "", ".dsh-cap-demo/demo.txt"), dir: (c) => joinRoot(c.projectDir ?? "", ".dsh-cap-demo") },
		        run: async (ctx, p) => await apiPost("/copy", { src: p.file, destDir: p.dir }),
		      },
		      {
		        id: "w-upload",
		        name: "POST /upload 原始字节上传",
		        sig: "?dir=&name= + body=文件字节（非 JSON）",
		        params: { dir: (c) => joinRoot(c.projectDir ?? "", ".dsh-cap-demo") },
		        run: async (ctx, p) => {
		          const res = await fetch(`${PREFIX}/upload?dir=${encodeURIComponent(p.dir)}&name=uploaded.bin`, {
		            method: "POST",
		            body: new Uint8Array([0xde, 0xad, 0xbe, 0xef]),
		          });
		          return (await res.json())?.data ?? res.status;
		        },
		      },
		      {
		        id: "w-compress",
		        name: "POST /compress 压缩 ZIP",
		        sig: "{ path, to? } → 缺省同目录 <name>.zip",
		        params: { dir: (c) => joinRoot(c.projectDir ?? "", ".dsh-cap-demo") },
		        run: async (ctx, p) => await apiPost("/compress", { path: p.dir }),
		      },
		      {
		        id: "w-extract",
		        name: "POST /extract 解压",
		        sig: "{ zipPath, destDir? } → { destDir, count }",
		        params: { dir: (c) => joinRoot(c.projectDir ?? "", ".dsh-cap-demo") },
		        run: async (ctx, p) => {
		          const listing = await apiGet("/list", { path: p.dir }).catch(() => ({ entries: [] }));
		          const zip = listing.entries.find((e) => e.name.endsWith(".zip"));
		          if (!zip) return "先点上面的 compress（演示顺序依赖）";
		          return await apiPost("/extract", { zipPath: zip.path, destDir: joinRoot(p.dir, "unzipped") });
		        },
		      },
		      {
		        id: "w-replace",
		        name: "POST /replace 跨文件批量替换",
		        sig: "{ q, replacement, regex?, wholeWord?, preserveCase?, include?, exclude? }",
		        note: "严格限工作区根内（ssh 根 501）。载荷 { changed[], files, replacements, truncated }。",
		        params: { q: () => "能力手册", replacement: () => "Capability Guide", dir: (c) => joinRoot(c.projectDir ?? "", ".dsh-cap-demo") },
		        run: async (ctx, p) => await apiPost("/replace", {
		          scope: p.dir, q: p.q, replacement: p.replacement, include: "*.txt",
		        }),
		      },
		      {
		        id: "w-remove",
		        name: "DELETE /remove 移入回收站",
		        sig: "?path —— 不是物理删除，可经 recycle-restore 找回",
		        run: async (ctx, p) => await apiDelete("/remove", { path: p.dir }),
		      },
		    ],
		  },
		  {
		    id: "git",
		    title: "HTTP · Git / SVN",
		    note: "GET 传 ?path=，POST 放 body { path,... }。ssh:// 引用同样可用（在远端服务器执行）。",
		    items: [
		      {
		        id: "git-status",
		        name: "GET /git/status 目录状态徽标",
		        sig: "?path → { inRepo, branch, entries }",
		        run: async (ctx) => await apiGet("/git/status", { path: ctx.projectDir }),
		      },
		      {
		        id: "git-panel",
		        name: "GET /git/panel 仓库快照",
		        sig: "→ { branch, unstaged[], staged[], untracked[] }",
		        run: async (ctx) => {
		          const d = await apiGet("/git/panel", { path: ctx.projectDir });
		          return { inRepo: d.inRepo, branch: d.branch, unstaged: d.unstaged?.length, staged: d.staged?.length, untracked: d.untracked?.length };
		        },
		      },
		      {
		        id: "git-log",
		        name: "GET /git/log 提交历史",
		        sig: "?path&count → [{ hash, author, date, subject }]",
		        run: async (ctx) => (await apiGet("/git/log", { path: ctx.projectDir, count: "5" })).slice(0, 5),
		      },
		      {
		        id: "git-diff",
		        name: "GET /git/diff 改动文本",
		        sig: "?path（单文件/目录）",
		        run: async (ctx) => short((await apiGet("/git/diff", { path: ctx.projectDir })).output ?? "(无改动)", 400),
		      },
		      {
		        id: "git-config",
		        name: "GET /git/config 用户配置",
		        sig: "POST { name, email } 可写回",
		        run: async () => await apiGet("/git/config", {}),
		      },
		      {
		        id: "git-run",
		        name: "POST /git/run 任意子命令",
		        sig: "{ path, args: string[] } → { code, stdout, stderr }",
		        note: "linter/gitlens 都靠它跑 blame/describe 等；args 逐项传，勿拼整串。",
		        run: async (ctx) => await apiPost("/git/run", { path: ctx.projectDir, args: ["log", "-3", "--oneline"] }),
		      },
		      {
		        id: "git-branch",
		        name: "POST /git/branch 分支操作",
		        sig: '{ action: "create"|"checkout"|"delete", name }',
		        run: async (ctx) => await apiPost("/git/branch", { path: ctx.projectDir, action: "checkout", name: "" }),
		      },
		      {
		        id: "git-sync",
		        name: "POST /git/sync 同步",
		        sig: '{ action: "pull"|"fetch"|"push" } —— 谨慎：动远端',
		        run: async (ctx) => await apiPost("/git/sync", { path: ctx.projectDir, action: "fetch" }),
		      },
		      {
		        id: "git-clone",
		        name: "POST /git/clone 克隆到新目录",
		        sig: "{ url, dir, name?, depth?, accountId? }",
		        note: "dir 可为 ssh:// 引用 → 在远端克隆。目标已存在 409；失败自动清残骸。",
		        run: () => "示例不实际执行（避免网络副作用）。形状：{ url:'https://…', dir:'<绝对父目录>', depth:1 }",
		      },
		      {
		        id: "svn-info",
		        name: "GET /svn/info 工作副本探测",
		        sig: "?path → { inRepo, svnAvailable, url, revision }",
		        run: async (ctx) => await apiGet("/svn/info", { path: ctx.projectDir }),
		      },
		      {
		        id: "svn-run",
		        name: "POST /svn/run 任意子命令",
		        sig: "{ path, args[] }（自动注入匹配账号凭据）",
		        run: async (ctx) => await apiPost("/svn/run", { path: ctx.projectDir, args: ["--version", "--non-interactive"] }),
		      },
		      {
		        id: "acct-match",
		        name: "GET /accounts/match 命中账号预览",
		        sig: "?kind=git|svn&url= → 抹密后的账号（凭据管理端点不建议插件用）",
		        run: async (ctx) => await apiGet("/accounts/match", { kind: "git", url: `file:///${ctx.projectDir}` }),
		      },
		    ],
		  },
		  {
		    id: "terminal",
		    title: "HTTP/WS · 常驻终端",
		    note: "会话按 session id 隔离、跨连接常驻。mux 帧：{type:'cwd'|'output'|'exit', session, ...}。",
		    items: [
		      {
		        id: "term-exec",
		        name: "一次性执行（open→input→等 exit→kill）",
		        sig: "POST /exec-open + /exec-input + WS /exec-mux-ws",
		        note: "必须核对 open 响应的 kind——老宿主不认识 ssh 时会静默建成本机会话。",
		        params: { cmd: () => "echo hello from terminal" },
		        run: async (ctx, p, out) => {
		          const session = `cap-${Date.now()}`;
		          const opened = await apiPost("/exec-open", { session, kind: "local", shell: "cmd", cwd: ctx.projectDir });
		          out.line(`会话已开：kind=${opened.kind} cwd=${opened.cwd}`);
		          const result = await new Promise((resolvePromise, reject) => {
		            const sock = new WebSocket(wsUrl("exec-mux-ws"));
		            let acc = "";
		            const timer = setTimeout(() => { try { sock.close(); } catch { /* noop */ } resolvePromise({ timedOut: true, output: acc.slice(-400) }); }, 8000);
		            sock.onmessage = (ev) => {
		              let f; try { f = JSON.parse(ev.data); } catch { return; }
		              if (f.session !== session) return;
		              if (f.type === "output") { acc += f.text; out.line(`output ${f.text.length} 字符`); }
		              if (f.type === "exit") {
		                clearTimeout(timer);
		                try { sock.close(); } catch { /* noop */ }
		                resolvePromise({ code: f.code, output: acc.replace(/\x1b\[[0-9;?]*[a-zA-Z]/g, "").slice(-400) });
		              }
		            };
		            sock.onerror = () => {};
		            sock.onopen = () => { void apiPost("/exec-input", { session, data: `${p.cmd}\r` }); };
		            sock.onclose = () => { clearTimeout(timer); reject(new Error("mux 连接关闭且未见 exit")); };
		          });
		          await apiPost("/exec-kill", { session }).catch(() => {});
		          return result;
		        },
		      },
		      {
		        id: "term-env",
		        name: "GET /term-env 提权探测",
		        sig: "→ { elevated }（终端能否管理员态 = dsh 进程令牌）",
		        run: async () => await apiGet("/term-env", {}),
		      },
		      {
		        id: "term-resize",
		        name: "POST /exec-resize 尺寸",
		        sig: "{ session, cols, rows } —— vim/top 全屏程序必需",
		        run: () => "形状示例如左；本插件的一次性执行演示不 resize（echo 不需要）。",
		      },
		    ],
		  },
		  {
		    id: "push",
		    title: "WS · /push 推送通道",
		    note: "取代轮询的主链路：一条连接三类订阅。首次 watch 只记基线不推送。",
		    items: [
		      {
		        id: "push-watch",
		        name: "WATCH 文件落盘改动（10 秒实验）",
		        sig: 'send {type:"watch",paths[]} → recv {type:"changed",items:{path:{mtimeMs,size}|null}}',
		        note: "点完立刻另存该文件（编辑器里 Ctrl+S 即可），1 秒内应收到 changed 帧。",
		        params: { file: (c) => joinRoot(c.projectDir ?? "", ".dsh-cap-demo/demo.txt"), dir: (c) => joinRoot(c.projectDir ?? "", ".dsh-cap-demo") },
		        run: async (ctx, p, out) => {
		          await apiPost("/save", { path: p.file, content: `watch 基线 @ ${new Date().toLocaleTimeString()}\n`, eol: "lf" }).catch(() => {});
		          const st = projState(ctx.projectDir);
		          const sock = new WebSocket(wsUrl("push"));
		          sock.onmessage = (ev) => {
		            let m; try { m = JSON.parse(ev.data); } catch { return; }
		            if (m.type === "ready") {
		              sock.send(JSON.stringify({ type: "watch", paths: [p.file] }));
		              out.line("已订阅（覆盖式）：" + p.file);
		              out.line("现在去编辑器改这个文件并保存…");
		              return;
		            }
		            if (m.type === "changed") {
		              st.hits += Object.keys(m.items ?? {}).length;
		              st.savedAt = Date.now();
		              out.line(`changed: ${short(m.items, 200)}`);
		            }
		          };
		          setTimeout(() => { try { sock.close(); } catch { /* noop */ } out.done(`10 秒结束，watcher 累计命中 ${st.hits} 次（点「扩展」菜单条目可跨挂载查询）`); }, 10000);
		        },
		      },
		      {
		        id: "push-session",
		        name: "SESSION-WATCH 会话触碰文件",
		        sig: 'send {type:"session-watch",id} → recv {type:"session-ev",ev:{type:"snapshot"|"files"|"status"}}',
		        note: "需要 DSH 会话 id（宿主 sessions/<cwd>/<id>/ 目录名）。",
		        run: async (ctx, p, out) => {
		          const listing = await apiGet("/list", { path: `${normPath(await homedirGuess())}/.dsh/sessions` }).catch(() => null);
		          if (!listing) return "找不到 ~/.dsh/sessions（DSH_HOME 自定义过？端点本身仍按左列协议工作）";
		          const group = listing.entries.find((e) => e.isDir);
		          if (!group) return "sessions 目录为空";
		          const inner = await apiGet("/list", { path: group.path }).catch(() => null);
		          const sid = inner?.entries?.find((e) => e.isDir)?.name;
		          if (!sid) return "该 cwd 组下没有会话";
		          const sock = new WebSocket(wsUrl("push"));
		          sock.onmessage = (ev) => {
		            let m; try { m = JSON.parse(ev.data); } catch { return; }
		            if (m.type === "ready") sock.send(JSON.stringify({ type: "session-watch", id: sid }));
		            else if (m.type === "session-ev") {
		              out.line(`[${m.ev.type}] ${(m.ev.files ?? []).length} 个文件 running=${m.ev.running ?? "-"}`);
		              if (m.ev.type === "snapshot" || m.ev.type === "files") out.line("样例: " + (m.ev.files ?? []).slice(0, 5).join(", "));
		            }
		          };
		          setTimeout(() => { try { sock.close(); sock.send = () => {}; } catch { /* noop */ } sock.onmessage = null; out.done("5 秒观察窗结束（发 id:null 可显式停止）"); }, 5000);
		          return `已订阅会话 ${sid}`;
		        },
		      },
		      {
		        id: "push-ssh",
		        name: "SSH-WATCH / SSH-CHECK 主机连通",
		        sig: 'send {type:"ssh-watch",ids[]} → recv {type:"ssh-status",items:{id:{alive,error?}}}',
		        run: async () => {
		          const hosts = (await apiGet("/ssh/hosts", {})).hosts ?? [];
		          if (!hosts.length) return "尚未配置 SSH 主机（/ssh/hosts 只读列表可用；增删属宿主 UI 职责，插件勿动）";
		          const sock = new WebSocket(wsUrl("push"));
		          sock.onmessage = (ev) => {
		            let m; try { m = JSON.parse(ev.data); } catch { return; }
		            if (m.type === "ready") sock.send(JSON.stringify({ type: "ssh-check", ids: hosts.map((h) => h.id) }));
		            else if (m.type === "ssh-status") currentCtx?.toast("info", "SSH 状态: " + short(m.items, 120));
		          };
		          return `已对 ${hosts.map((h) => h.id).join(", ")} 发起 ssh-check（结果走 toast）`;
		        },
		      },
		      {
		        id: "sse-session",
		        name: "SSE 旧出口 /stream/session",
		        sig: "GET ?session= （EventSource；占 HTTP 连接池配额，优先用 WS）",
		        run: async (ctx, p, out) => {
		          const es = new EventSource(`${PREFIX}/stream/session?session=probe-nonexistent`);
		          es.onmessage = (ev) => out.line(ev.data.slice(0, 200));
		          setTimeout(() => { es.close(); out.done("EventSource 已关闭（真实 id 才有 snapshot/files 帧）"); }, 3000);
		          return "已打开 SSE（缺 session 参数则路由不命中 → 404）";
		        },
		      },
		    ],
		  },
		  {
		    id: "persist",
		    title: "HTTP · 持久化与插件生态",
		    note: "跨重启存储只用 /plugin-data（key 白名单校验、value ≤8MB）。/persist 键含界面偏好与凭据文件，插件勿动。",
		    items: [
		      {
		        id: "pd-roundtrip",
		        name: "PLUGIN-DATA 读写往返",
		        sig: "GET ?k → data | POST {k,v}",
		        note: "key 约定 dsh-fw.<插件>.<hash(projectDir)>；value 自管序列化。",
		        run: async (ctx) => {
		          const k = `dsh-fw.capability-guide.${hashKey(String(ctx.projectDir))}`;
		          const v = JSON.stringify({ writtenAt: new Date().toISOString(), notes: "重启 dsh 再点一次，看 writtenAt 是否是旧的" });
		          await apiPost("/plugin-data", { k, v });
		          const back = await apiGet("/plugin-data", { k });
		          return { key: k, roundTripOk: back === v, parsed: JSON.parse(back) };
		        },
		      },
		      {
		        id: "pl-index",
		        name: "GET /plugin-index 内置清单",
		        sig: "→ [{ name, id, titleZh, description }]（裸 JSON，无信封）",
		        run: async () => (await rawGet("/plugin-index")).slice(0, 10),
		      },
		      {
		        id: "pl-src",
		        name: "GET /plugin-src 拉插件源码",
		        sig: "?k=<name> → bundle 原文（JS，不套信封）",
		        note: "插件间互读的合法通道。",
		        run: async () => {
		          const res = await fetch(`${PREFIX}/plugin-src?k=bookmarks`);
		          const txt = await res.text();
		          return { status: res.status, bytes: txt.length, head: txt.slice(0, 160) };
		        },
		      },
		      {
		        id: "pl-doc",
		        name: "GET /plugin-doc 作者文档",
		        sig: "→ markdown 原文（含宿主 HTTP API 全清单）",
		        run: async () => {
		          const txt = await (await fetch(`${PREFIX}/plugin-doc`)).text();
		          const i = txt.indexOf("宿主 HTTP API 全清单");
		          return { bytes: txt.length, tocFound: i >= 0, excerpt: i >= 0 ? txt.slice(i, i + 200) : txt.slice(0, 200) };
		        },
		      },
		      {
		        id: "pl-registry",
		        name: "GET /plugin-registry 在线注册表",
		        sig: "→ [{ name, url, description… }]（离线回退随包 registry.json）",
		        run: async () => (await apiGet("/plugin-registry", {})).slice(0, 10),
		      },
		      {
		        id: "pl-fetch",
		        name: "POST /fetch-plugin 代拉脚本",
		        sig: "{ url } → { code, name }（SSRF 拦截 + 2MB 上限）",
		        run: () => "插件管理专用（同源豁免 SSRF、跨源拒内网）。示例不实际拉取。",
		      },
		    ],
		  },
		  {
		    id: "workbench",
		    title: "工作台 API · __dshFileWorkbenchWorkbench__",
		    note: "文件工作台（非编辑器）的独立注册表：状态栏/后台任务与编辑器互不影响；工作台无 editor 门面。",
		    items: [
		      {
		        id: "wb-status",
		        name: "注册工作台「扩展」菜单条目",
		        sig: "wbApi.statusbar.register(item)",
		        run: () => {
		          const wb = window[WB_API_KEY];
		          if (!wb) return "本页无工作台 API（独立 dev 时正常）";
		          wb.statusbar.register({
		            id: "capabilityGuide.wbStatus",
		            text: "能力手册：报告工作台状态",
		            commandId: "capabilityGuide.wbRun",
		            tooltip: "工作台独立注册表示例",
		            order: 80,
		          });
		          return "工作台底栏「扩展」菜单已加条目（命令注册在编辑器表——两表共享 executeCommand）";
		        },
		      },
		      {
		        id: "wb-list",
		        name: "列出工作台状态栏项",
		        sig: "wbApi.statusbar.list()",
		        run: () => (window[WB_API_KEY]?.statusbar.list() ?? []).map((i) => i.id),
		      },
		      {
		        id: "wb-task",
		        name: "后台任务：进度步骤",
		        sig: "wbApi.backgroundTasks.start(label, opts) → { step, updateLabel, done, fail }",
		        note: "出现在工作台底栏「后台任务」面板，跨重启归档到 task-archives（宿主自用，插件勿覆写）。",
		        run: async (ctx, p, out) => {
		          const t = (window[WB_API_KEY]?.backgroundTasks ?? { start: (l) => ({ step: (m) => out.line(`[task] ${m}`), updateLabel: () => {}, done: () => out.line("[task] done"), fail: () => out.line("[task] fail") }) })
		            .start("能力手册：演示任务", { detail: ctx.projectDir ?? "-", fileType: ".demo" });
		          for (let i = 1; i <= 3; i++) {
		            await new Promise((r) => setTimeout(r, 500));
		            t.step?.(`第 ${i} 步`, ctx.projectDir ?? undefined, "模拟耗时", ".demo", i);
		          }
		          t.done?.("三步完成");
		          return "任务已走完（去工作台底栏看历史）";
		        },
		      },
		      {
		        id: "wb-view",
		        name: "注册工作台侧栏视图",
		        sig: "wbApi.activityBar.register(view)",
		        run: () => {
		          const wb = window[WB_API_KEY];
		          if (!wb) return "本页无工作台 API";
		          wb.activityBar.register({
		            id: "capabilityGuide.wbView",
		            title: { zh: "能力手册·工作台", en: "Cap Guide (WB)" },
		            icon: "book",
		            order: 85,
		            mount(el, wctx) {
		              currentWbCtx = wctx;
		              el.innerHTML = `<div style="padding:10px;font-size:12px;color:var(--dsh-fg,#c9d1d9)">
		                <p>这是插件注册的<b>工作台</b>视图（activityBar 独立注册表）。</p>
		                <p style="color:var(--dsh-fg-weak,#8b949e)">projectDir: ${wctx.projectDir ?? "—"}</p>
		                <button type="button" data-cap-wbbtn>弹 toast（工作台 ctx）</button></div>`;
		              el.querySelector("[data-cap-wbbtn]").onclick = () => wctx.toast?.("ok", "来自工作台视图的 toast");
		              return () => { currentWbCtx = null; el.replaceChildren(); };
		            },
		          });
		          return "工作台左侧活动栏出现新图标（book）";
		        },
		      },
		      {
		        id: "subagent",
		        name: "POST /subagent/spawn 拉起 AI 子代理",
		        sig: "{ path?, isDir?, instruction?, session? }",
		        note: "消耗用户会话资源——务必先征得同意再调。",
		        run: () => "示例不实际 spawn。形状：POST { instruction:'解释这个仓库', path:'<项目目录>', isDir:true }",
		      },
		    ],
		  },
		  {
		    id: "lifecycle",
		    title: "生命周期 · 注册表与清理",
		    items: [
		      {
		        id: "lc-registers",
		        name: "查看各注册表实时状态",
		        sig: "list/listMenu + 视图 id",
		        run: () => ({
		          views: "capabilityGuide.view（本视图）",
		          commands: window[API_KEY].commands.list().filter((c) => c.startsWith("capabilityGuide")),
		          statusbar: window[API_KEY].statusbar.list().map((i) => i.id),
		          menu: window[API_KEY].statusbar.listMenu().map((i) => i.id),
		        }),
		      },
		      {
		        id: "lc-cleanup",
		        name: "注销本插件全部贡献点",
		        sig: "unregister* / activityBar.unregister —— 视图自己也会被卸载",
		        run: () => {
		          const api = window[API_KEY];
		          api.statusbar.unregister(MENU_ID + ".sb");
		          api.statusbar.unregister(MENU_ID + ".sb2");
		          api.statusbar.unregisterMenu(MENU_ID);
		          api.commands.unregister("capabilityGuide.demo");
		          api.commands.unregister(CMD_SUMMARY);
		          window[WB_API_KEY]?.statusbar.unregister("capabilityGuide.wbStatus");
		          api.activityBar.unregister(VIEW_ID);
		          return "全部撤下；重新启用插件即恢复（注册表在模块级，面板重挂不丢注册）";
		        },
		      },
		    ],
		  },
		];
		
		/** 粗略拿 home 目录：让 push-session 演示能定位 ~/.dsh/sessions（无端点时回退提示）。 */
		async function homedirGuess() {
		  const mc = await apiGet("/mycomputer", {});
		  const home = (mc.items ?? []).find((i) => /home|user|用户/i.test(i.name ?? ""));
		  return home?.path ?? "C:\\";
		}
		
		/* ------------------------------------------------------------------ 样式注入 */
		
		injectStyles();
		
		function injectStyles() {
		  if (typeof document === "undefined") return;
		  if (document.getElementById(`${NS}-styles`)) return;
		  // 只用已定义的 --dsh-* token，且每个都带兜底值。
		  const css = `
		.${NS}-view { color: var(--dsh-fg, #c9d1d9); font-size: 12px; font-family: var(--dsh-font, system-ui, sans-serif); }
		.${NS}-root { display: flex; flex-direction: column; min-height: 100%; padding: 10px 12px 24px; }
		.${NS}-head { position: sticky; top: 0; z-index: 3; background: var(--dsh-bg, #0d1117); padding: 8px 0 10px; border-bottom: 1px solid var(--dsh-border, #30363d); }
		.${NS}-title { font-weight: 700; font-size: 13px; }
		.${NS}-sub { color: var(--dsh-fg-weak, #8b949e); margin-top: 2px; }
		.${NS}-sec { margin-top: 14px; }
		.${NS}-sechead { display: flex; align-items: center; gap: 6px; cursor: pointer; user-select: none; font-weight: 600; padding: 4px 0; border-bottom: 1px dashed var(--dsh-border, #30363d); }
		.${NS}-sechead:hover { color: var(--dsh-accent, #2f81f7); }
		.${NS}-caret { width: 10px; color: var(--dsh-fg-muted, #6e7681); transition: transform .12s; }
		.${NS}-sec.open > .${NS}-sechead .${NS}-caret { transform: rotate(90deg); }
		.${NS}-secnote { color: var(--dsh-fg-weak, #8b949e); font-size: 11px; padding: 4px 0 2px; }
		.${NS}-item { padding: 8px 0 10px; border-bottom: 1px solid color-mix(in srgb, var(--dsh-border, #30363d) 55%, transparent); }
		.${NS}-itemrow { display: flex; align-items: baseline; gap: 8px; flex-wrap: wrap; }
		.${NS}-name { font-weight: 600; }
		.${NS}-sig { font-family: var(--dsh-mono, ui-monospace, monospace); font-size: 11px; color: var(--dsh-accent, #2f81f7); background: var(--dsh-accent-weak, rgba(47,129,247,.12)); padding: 1px 6px; border-radius: var(--dsh-radius-sm, 4px); word-break: break-all; }
		.${NS}-note { color: var(--dsh-fg-weak, #8b949e); font-size: 11px; margin-top: 2px; }
		.${NS}-btn { margin-top: 6px; padding: 3px 12px; border: 1px solid var(--dsh-accent, #2f81f7); border-radius: var(--dsh-radius-md, 6px); background: transparent; color: var(--dsh-accent, #2f81f7); font: inherit; font-weight: 600; cursor: pointer; }
		.${NS}-btn:hover { background: var(--dsh-accent-soft, rgba(47,129,247,.18)); }
		.${NS}-out { margin-top: 6px; padding: 6px 8px; border-radius: var(--dsh-radius-sm, 4px); background: var(--dsh-bg2, #161b22); border: 1px solid var(--dsh-border, #30363d); font-family: var(--dsh-mono, ui-monospace, monospace); font-size: 11px; white-space: pre-wrap; word-break: break-all; display: none; }
		.${NS}-out.show { display: block; }
		.${NS}-out.err { border-color: var(--dsh-danger, #f85149); color: var(--dsh-danger, #f85149); }
		.${NS}-out .${NS}-oline { display: block; border-top: 1px dashed var(--dsh-border, #30363d); margin-top: 3px; padding-top: 3px; color: var(--dsh-info, #58a6ff); }
		.${NS}-params { display: flex; gap: 6px; align-items: center; margin-top: 5px; flex-wrap: wrap; }
		.${NS}-params input { background: var(--dsh-bg2, #161b22); border: 1px solid var(--dsh-border, #30363d); border-radius: var(--dsh-radius-sm, 4px); color: var(--dsh-fg, #c9d1d9); font: inherit; font-family: var(--dsh-mono, ui-monospace, monospace); font-size: 11px; padding: 2px 6px; min-width: 220px; flex: 1; }
		.${NS}-params label { color: var(--dsh-fg-muted, #6e7681); font-size: 11px; }
		`;
		  const style = document.createElement("style");
		  style.id = `${NS}-styles`;
		  style.textContent = css;
		  document.head.appendChild(style);
		}
		
		/* ------------------------------------------------------------------ 视图片段构建 */
		
		function makeItemRow(cap, item, ctxRef) {
		  const row = document.createElement("div");
		  row.className = `${NS}-item`;
		  const inputs = [];
		  let paramBox = null;
		  if (item.params) {
		    paramBox = document.createElement("div");
		    paramBox.className = `${NS}-params`;
		    const build = () => {
		      paramBox.replaceChildren();
		      inputs.length = 0;
		      for (const [key, def] of Object.entries(item.params)) {
		        const label = document.createElement("label");
		        label.textContent = key;
		        const inp = document.createElement("input");
		        inp.value = String(typeof def === "function" ? def(ctxRef.peek()) ?? "" : def);
		        inp.spellcheck = false;
		        inputs.push([key, inp]);
		        paramBox.append(label, inp);
		      }
		      const reload = document.createElement("button");
		      reload.type = "button";
		      reload.className = `${NS}-btn`;
		      reload.style.cssText = "margin-top:0;padding:1px 8px";
		      reload.textContent = "↺ 当前值";
		      reload.title = "按当前 projectDir / activeFile 重算默认参数";
		      reload.onclick = build;
		      paramBox.append(reload);
		      if (item.paramsNote) {
		        const pn = document.createElement("span");
		        pn.className = `${NS}-note`;
		        pn.style.marginTop = "0";
		        pn.textContent = item.paramsNote;
		        paramBox.append(pn);
		      }
		    };
		    build();
		  }
		
		  const head = document.createElement("div");
		  head.className = `${NS}-itemrow`;
		  const name = document.createElement("span");
		  name.className = `${NS}-name`;
		  name.textContent = item.name;
		  const sig = document.createElement("code");
		  sig.className = `${NS}-sig`;
		  sig.textContent = item.sig ?? "";
		  head.append(name, sig);
		  row.append(head);
		  if (item.note) {
		    const note = document.createElement("div");
		    note.className = `${NS}-note`;
		    note.textContent = item.note;
		    row.append(note);
		  }
		  if (paramBox) row.append(paramBox);
		
		  const out = document.createElement("pre");
		  out.className = `${NS}-out`;
		  const btn = document.createElement("button");
		  btn.type = "button";
		  btn.className = `${NS}-btn`;
		  btn.textContent = "▶ 运行";
		  const outApi = {
		    line(msg) {
		      out.classList.add("show");
		      out.classList.remove("err");
		      const span = document.createElement("span");
		      span.className = `${NS}-oline`;
		      span.textContent = String(msg);
		      out.append(span);
		    },
		    done(msg) { outApi.line(msg ?? "done"); },
		  };
		  btn.onclick = async () => {
		    out.textContent = "";
		    out.classList.add("show");
		    out.classList.remove("err");
		    outApi.line(`$ ${item.sig ?? item.name}`);
		    const ctx = ctxRef.value ?? currentCtx;
		    try {
		      const params = {};
		      for (const [k, inp] of inputs) params[k] = inp.value;
		      const r = await item.run(ctx, params, outApi, params);
		      out.textContent += "";
		      if (r !== undefined) outApi.line(short(r, 2000));
		      if (!out.childElementCount) outApi.line("(void)");
		    } catch (e) {
		      out.classList.add("err");
		      outApi.line(`✗ ${e?.message ?? e}`);
		    }
		  };
		  row.append(btn, out);
		  return row;
		}
		
		function makeSection(sec, ctxRef, openIds) {
		  const box = document.createElement("div");
		  box.className = `${NS}-sec${openIds.has(sec.id) ? " open" : ""}`;
		  const head = document.createElement("div");
		  head.className = `${NS}-sechead`;
		  head.innerHTML = `<span class="${NS}-caret">▶</span><span>${sec.title}</span><span class="${NS}-note" style="margin:0">(${sec.items.length})</span>`;
		  head.onclick = () => {
		    box.classList.toggle("open");
		    if (box.classList.contains("open")) openIds.add(sec.id); else openIds.delete(sec.id);
		    saveOpenIds(ctxRef.value, openIds);
		  };
		  box.append(head);
		  if (sec.note) {
		    const n = document.createElement("div");
		    n.className = `${NS}-secnote`;
		    n.textContent = sec.note;
		    box.append(n);
		  }
		  const body = document.createElement("div");
		  body.style.display = box.classList.contains("open") ? "" : "none";
		  for (const item of sec.items) body.append(makeItemRow(sec, item, ctxRef));
		  box.append(body);
		  head.addEventListener("click", () => { body.style.display = box.classList.contains("open") ? "" : "none"; });
		  return box;
		}
		
		/* 折叠状态按项目持久化到 pluginData（演示 value 结构体，也省得每次展开找）。 */
		function openKey(dir) {
		  return `dsh-fw.capability-guide.open.${hashKey(String(dir))}`;
		}
		function saveOpenIds(ctx, ids) {
		  if (!ctx?.projectDir) return;
		  apiPost("/plugin-data", { k: openKey(ctx.projectDir), v: JSON.stringify([...ids]) }).catch(() => {});
		}
		
		/* ------------------------------------------------------------------ 菜单文案联动 */
		
		function refreshMenuText() {
		  const api = window[API_KEY];
		  if (!api?.statusbar) return;
		  api.statusbar.registerMenu({
		    id: MENU_ID,
		    text: guideOpen.v ? "能力手册：视图已打开" : "能力手册：报告 watcher 命中",
		    commandId: CMD_SUMMARY,
		    tooltip: "演示 registerMenu + 同 id 覆盖刷新文案",
		    order: 80,
		    when: (c) => !!c.projectDir,
		  });
		}
		
		/* ------------------------------------------------------------------ 视图定义 */
		
		function buildView() {
		  return {
		    id: VIEW_ID,
		    title: { zh: "能力手册", en: "Cap Guide" },
		    description: { zh: "全部注入能力 + 宿主 HTTP API 的可运行操作手册", en: "Runnable catalog of every plugin capability" },
		    icon: "book",
		    order: 90,
		    mount(el, ctx) {
		      return mountView(el, ctx);
		    },
		  };
		}
		
		async function mountView(el, ctx) {
		  el.classList.add(`${NS}-view`);
		  currentCtx = ctx;
		  guideOpen.v = true;
		  refreshMenuText();
		
		  const openIds = new Set(["ctx"]);
		  if (ctx.projectDir) {
		    try {
		      const raw = await apiGet("/plugin-data", { k: openKey(ctx.projectDir) });
		      const arr = JSON.parse(raw);
		      if (Array.isArray(arr)) arr.forEach((x) => openIds.add(x));
		    } catch { /* 首次为空很正常 */ }
		  }
		
		  const ctxRef = { value: ctx, peek: () => currentCtx ?? ctx };
		  el.innerHTML = "";
		  const root = document.createElement("div");
		  root.className = `${NS}-root`;
		  const head = document.createElement("div");
		  head.className = `${NS}-head`;
		  head.innerHTML = `<div class="${NS}-title">能力手册 · Capability Guide</div>
		    <div class="${NS}-sub">每个条目都是真调用（写操作限定在 &lt;项目&gt;/.dsh-cap-demo/）。顶部条目可改参数。</div>`;
		  root.append(head);
		  for (const sec of CAPABILITIES) root.append(makeSection(sec, ctxRef, openIds));
		  el.append(root);
		
		  const offProj = ctx.onProjectChange(() => { /* 换项目仅影响载荷 getter，读即最新，无需重建 */ });
		  return () => {
		    try { offProj(); } catch { /* noop */ }
		    if (currentCtx === ctx) currentCtx = null;
		    guideOpen.v = false;
		    refreshMenuText();
		    el.replaceChildren();
		  };
		}
		
		/* ------------------------------------------------------------------ 命令 + 「扩展」菜单入口 */
		
		/** 优先用调用点自带的 ctx；否则回退到最近挂载过的视图 ctx（模块级，卸载后仍持有）。
		 *  都拿不到时抛错——宿主「扩展」菜单的 onClick 有 try/catch，会把消息渲染成 error toast。 */
		function notify(level, msg, preferredCtx) {
		  const c = preferredCtx ?? currentCtx ?? currentWbCtx;
		  if (c?.toast) return c.toast(level, msg);
		  throw new Error(msg);
		}
		
		function registerContributions(api) {
		  api.commands.register(CMD_SUMMARY, (statusCtx) => {
		    // 编辑器与工作台是两套注册表/两条菜单：statusCtx 只来自被点击的那一侧，
		    // 项目目录需兼顾另一侧的上下文。
		    const dir = statusCtx?.projectDir ?? currentCtx?.projectDir ?? currentWbCtx?.projectDir;
		    if (!dir) return notify("info", "未打开项目。", statusCtx);
		    const st = projState(dir);
		    notify(
		      st.hits ? "ok" : "info",
		      `能力手册：watcher 累计命中 ${st.hits} 次${st.savedAt ? `（最近 ${new Date(st.savedAt).toLocaleTimeString()}）` : ""}`,
		      statusCtx
		    );
		    return { hits: st.hits };
		  });
		  refreshMenuText();
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
		
		function apply(_ctx) {
		  const api = globalApi();
		  if (!apiReady(api)) return false;
		  api.activityBar.register(buildView());
		  registerContributions(api);
		  appliedOnce = true;
		  return true;
		}
		
		// 兼容旧宿主（无源码自动打包时本文件按极简形态直 eval，factory 不存在）：轮询到真 API 就绪。
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
		return { apply, meta };
	}
});
