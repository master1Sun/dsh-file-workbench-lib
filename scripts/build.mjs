// 构建 dsh-file-workbench。
//
// 产出：
//   lib/index.js   — host 入口（Node ESM），@deepseek-ai/* 保持 external。
//   lib/client.js  — 浏览器入口，DSH __ModuleLoader__ 格式（`{ apply, inject }`）。
//   lib/web/       — Vite 构建的 Vue 文件工作台静态产物（由 host 路由对外提供）。
//
// 说明：
//   - 用 Vite 构建 Vue（SFC 支持 + 联调 HMR）；用 esbuild 构建 host 与 client 桥接，
//     两者各自针对其运行环境。client 里 React / @deepseek-ai/* external。
//   - client 桥接需要知道 Vue 产物的具体资源文件名；构建后从 dist/index.html 解析出
//     入口 JS 与 CSS，经 esbuild define 注入 __VUE_ENTRY__ / __VUE_CSS__。
import { build as esbuild } from "esbuild";
import { existsSync } from "node:fs";
import { copyFile, mkdir, readFile, readdir, rename, rm, stat, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = dirname(dirname(fileURLToPath(import.meta.url)));

const pkg = JSON.parse(await readFile(join(root, "package.json"), "utf8"));
// 插件 loader id：client 端注册的 id 必须与 cordis bundle 引入的 loader entry id 一致，
// 而该 entry id 取自包名（scope 全名）。故直接使用 pkg.name（非运行时的 include id）。
const PLUGIN_ID = pkg.name;
const PLUGIN_VERSION = pkg.version;
const IS_DEV = process.argv.includes("--dev");

// ── -1) 打包本仓库 plugins/ 套件 → plugins/lib/（内置插件的运行时来源）─────────
// 「插件管理」的内置列表不再构建期内嵌（原 builtinPluginSources.ts 已删）：
// 前端 bootstrap 时经 host /plugin-index（读 .pack-meta.json）+ /plugin-src（bundle 顶层
// manifest 声明）在运行时推导种子。这里只需跑 plugins/pack.mjs——
// 源码 plugins/packages/<name>.js（纯 JS 单文件）→ plugins/lib/<name>.js
// （__ModuleLoader__.manifest(...) + .load({id,factory}) 外壳）+ .pack-meta.json，随后拷入静态目录。
const { packPlugins } = await import("../plugins/pack.mjs");
await packPlugins();

const SUITE_ROOT = join(root, "plugins");

// ── 0) Vite 构建 Vue 产物 ────────────────────────────────────────────────
const { build: viteBuild } = await import("vite");
// 受限环境下安全删除守卫会拦截任何 rm/批量删除（单操作 >50 项或整轮累计 >50 项即拒绝），
// 因此不预清 dist，Vite 以 emptyOutDir:false 直接覆写产物（旧带 hash 文件残留但无引用）。
// 注意：emptyOutDir 必须在 build 子树下传递——Vite 程序化 build() 的顶层 emptyOutDir 会被忽略。
await viteBuild({
  configFile: join(root, "vite.config.ts"),
  logLevel: "warn",
  build: { emptyOutDir: false },
});

// 解析产物入口文件名：dist/index.html 里 <script type="module" src="/api/dsh-file-workbench/assets/xxx.js">
// 与 <link rel="stylesheet" href="/api/dsh-file-workbench/assets/xxx.css">
// 去掉 base 前缀，client 侧注入时自行拼回 ${apiBase}/（见 src/client/index.tsx）。
const distIndex = await readFile(join(root, "dist", "index.html"), "utf8");
const jsMatch = distIndex.match(/<script type="module"[^>]*src="([^"]+)"/i);
const cssMatch = distIndex.match(/<link rel="stylesheet"[^>]*href="([^"]+)"/i);
if (!jsMatch) throw new Error("dist/index.html: cannot locate entry JS");
const stripBase = (p) => p.replace(/^\/api\/dsh-file-workbench\//, "");
const VUE_ENTRY = stripBase(jsMatch[1]).replace(/^\//, "");
const VUE_CSS = cssMatch ? stripBase(cssMatch[1]).replace(/^\//, "") : "assets/style.css";
console.log(`build: vue entry=${VUE_ENTRY} css=${VUE_CSS}`);

// ── 1) 重建 lib、铺 Vue 静态产物 ────────────────────────────────────────
const libDir = join(root, "lib");
const webDir = join(libDir, "web");

/**
 * 只写不删的递归拷贝：受限环境的安全删除守卫会拦截任何 rm（含 cp 内部的覆写/删除路径），
 * 故这里只用 mkdir + copyFile 覆写/新建；对极少数类型冲突（src 为文件而 dest 为目录，或反之）
 * 用 rename 把冲突项挪开（rename 非删除，不触发守卫）。绝不调用 rm。
 */
async function copyDirNoDelete(src, dest) {
  await mkdir(dest, { recursive: true });
  const entries = await readdir(src, { withFileTypes: true });
  for (const ent of entries) {
    const s = join(src, ent.name);
    const d = join(dest, ent.name);
    const dstat = await stat(d).catch(() => null);
    if (ent.isDirectory()) {
      if (dstat && dstat.isFile()) await rename(d, d + ".__conflict__");
      await copyDirNoDelete(s, d);
    } else {
      if (dstat && dstat.isDirectory()) await rename(d, d + ".__conflict__");
      await copyFile(s, d);
    }
  }
}

// 受限环境的安全删除守卫会拦截 cp 内部的删除/覆写路径，故用只写不删的递归拷贝铺产物。
await copyDirNoDelete(join(root, "dist"), webDir);

// 内置插件源码静态目录：种子 code 只是引用（plugin-src/<name>.js），实际 bundle 拷到这里；
// .pack-meta.json 一并拷入，host /plugin-index 直接对外提供它（前端运行时推导内置列表）。
// host 以 WEB_DIR/plugin-src 为根按白名单文件名对外提供（见 routes-plugins.ts）；
// 同步拷入 dist/ 是为了 vite dev 下 `/api/dsh-file-workbench/*` 整体代理到 host 时同样命中。
const packMetaList = JSON.parse(await readFile(join(SUITE_ROOT, "lib", ".pack-meta.json"), "utf8"));
for (const dir of [join(webDir, "plugin-src"), join(root, "dist", "plugin-src")]) {
  await mkdir(dir, { recursive: true });
  await copyFile(join(SUITE_ROOT, "lib", ".pack-meta.json"), join(dir, ".pack-meta.json"));
  for (const entry of packMetaList) {
    await copyFile(join(SUITE_ROOT, "lib", `${entry.name}.js`), join(dir, `${entry.name}.js`));
  }
}
// 插件注册表（「未安装」列表来源）：name/url/description 清单，host /plugin-registry 直出。
// importPackages/ 下的外部候选（如 project-stats）也登记进 registry，url 指向 plugin-src——
// 这里把它们一并拷入，保证注册表里的每个 url 都真实可下载。
await copyFile(join(SUITE_ROOT, "registry.json"), join(webDir, "plugin-src", "registry.json"));
await copyFile(join(SUITE_ROOT, "registry.json"), join(root, "dist", "plugin-src", "registry.json"));
{
  const { transformSourceToBundle } = await import("../plugins/pack-core.mjs");
  const reg = JSON.parse(await readFile(join(SUITE_ROOT, "registry.json"), "utf8"));
  for (const e of reg) {
    const k = new URL(e.url, "http://x").searchParams.get("k");
    if (!k || /\.pack-meta/.test(k)) continue;
    const candidates = [join(SUITE_ROOT, "importPackages", `${k}.js`), join(SUITE_ROOT, "packages", `${k}.js`)];
    const src = candidates.find((p) => existsSync(p));
    if (!src) continue;
    const { packed } = transformSourceToBundle(await readFile(src, "utf8"), k);
    for (const dir of [join(webDir, "plugin-src"), join(root, "dist", "plugin-src")]) {
      await writeFile(join(dir, `${k}.js`), packed);
    }
  }
}
console.log(`build: plugin sources → lib/web/plugin-src + dist/plugin-src (${packMetaList.length} 个) + registry.json`);

// ── 0a2) 作者资源发布（面向用户的 AI 助手，见 AGENTS.md / docs/activity-bar-plugin.md）──
// 骨架：plugin-authoring/plugin-skeleton.js（真·源码形态）经同源打包规则成 bundle 后
// 以 `_skeleton` 名义进 plugin-src —— /plugin-src?k=_skeleton 直出可导入的成品，
// 且 meta 名与文件名一致（dsh-fw._skeleton），种子合并不会误当外部插件丢它。
// 自检脚本：自包含单文件，进 assets/（/assets/* 静态路由放行）。
{
  const { transformSourceToBundle } = await import("../plugins/pack-core.mjs");
  const skelSrc = await readFile(join(root, "plugin-authoring", "plugin-skeleton.js"), "utf8");
  const { packed } = transformSourceToBundle(skelSrc.replace(/("nameEn"|'nameEn')\s*:\s*("[^"]*"|'[^']*')/, '"nameEn": "Plugin Skeleton"'), "_skeleton");
  for (const dir of [join(webDir, "plugin-src"), join(root, "dist", "plugin-src")]) {
    await writeFile(join(dir, "_skeleton.js"), packed);
  }
  await copyFile(join(root, "plugin-authoring", "check-plugin.mjs"), join(webDir, "assets", "plugin-authoring-check.js"));
  // 作者文档运行时端点：GET /plugin-doc → AI 助手经 HTTP 拉取全文契约（见 routes-plugins.ts）。
  const docDir = join(webDir, "plugin-doc");
  await mkdir(docDir, { recursive: true });
  await copyFile(join(root, "docs", "activity-bar-plugin.md"), join(docDir, "activity-bar-plugin.md"));
  // AGENTS.md 拷入 lib/：sync-to-profile 只同步 lib/ + package.json + patch，借道把它带进
  // 已安装包的根目录（AI 工具按包根发现 AGENTS.md）；npm files 里的 AGENTS.md 则覆盖发布路径。
  await copyFile(join(root, "AGENTS.md"), join(libDir, "AGENTS.md"));
  console.log("build: authoring resources → plugin-src/_skeleton.js + assets/plugin-authoring-check.js + plugin-doc/");
}

// ── 0b) 构建贡献点测试探针 → dist/assets/__dsh-test-probe，随主产物一并进 lib/web/assets/ ──
// host 静态路由只放行 assets/ 前缀（见 routes-fs.ts），故探针必须落在 assets/ 下才能被真机加载。
// lib 模式产出的文件名不带扩展名（fileName 返回 "assets/__dsh-test-probe"），拷入时补 .js。
await viteBuild({
  configFile: join(root, "test", "vite.test.config.ts"),
  logLevel: "warn",
});
await copyFile(join(root, "dist", "assets", "__dsh-test-probe"), join(webDir, "assets", "__dsh-test-probe.js"));
console.log("build: test probe → lib/web/assets/__dsh-test-probe.js");

// External：运行时包由 DSH host / 模块加载器解析，绝不打包。
// node-pty 是原生模块（conpty.node/conpty.exe 等二进制按模块目录相对路径加载），
// 一旦被 esbuild 打包进 lib/index.js，二进制定位失效 → 终端必然持续报错，必须 external。
const external = [
  "react",
  "react/jsx-runtime",
  "react-dom",
  // node-pty 是原生模块（conpty.node/conpty.exe 等二进制按模块目录相对路径加载）。
  "node-pty",
  // ssh2 内部有 __dirname / 自由 require（agent.js 等），打包进 ESM 产物会触发
  // ERR_AMBIGUOUS_MODULE_SYNTAX → external，运行时由 profile node_modules 解析。
  "ssh2",
  "@deepseek-ai/cordis",
  "@deepseek-ai/dsh-*",
  // ssh2 的可选原生加速依赖（ssh2 侧 try/catch 守卫）：缺 .node 二进制时 esbuild 无法
  // 静态解析，运行时 require 失败也会被 ssh2 捕获并回退纯 JS 加密实现 → external。
  "cpu-features",
];

// host 构建 banner：注入 createRequire shim，兜底 bundle 内偶发的动态 require
// （如某些依赖按模块名 require），避免 ESM 下 "Dynamic require is not supported" 报错。
const hostBanner = `import { createRequire as __dshCreateRequire } from "module";
const require = __dshCreateRequire(import.meta.url);`;

// ── 2) host 入口：lib/index.js（Node ESM）────────────────────────────────
await esbuild({
  entryPoints: [join(root, "src/host/index.ts")],
  outfile: join(libDir, "index.js"),
  bundle: true,
  format: "esm",
  platform: "node",
  target: "node20",
  external,
  banner: { js: hostBanner },
  define: { __PLUGIN_VERSION__: JSON.stringify(PLUGIN_VERSION), __DEV__: String(IS_DEV) },
  sourcemap: true,
  logLevel: "info",
});

// ── 3) client 入口：lib/client.js（DSH __ModuleLoader__ 格式）────────────
const clientBanner = [
  `window.__ModuleLoader__.load({`,
  `\tid: ${JSON.stringify(PLUGIN_ID)},`,
  `\tfactory: (require) => {`,
  `\t\tvar module = { exports: {} };`,
  `\t\tvar exports = module.exports;`,
].join("\n");

const clientFooter = [
  `\t\tmodule.exports = { apply, inject };`,
  `\t\treturn module.exports;`,
  `\t}`,
  `});`,
  ``,
].join("\n");

await esbuild({
  entryPoints: [join(root, "src/client/index.tsx")],
  outfile: join(libDir, "client.js"),
  bundle: true,
  format: "cjs",
  platform: "browser",
  target: "es2022",
  jsx: "automatic",
  loader: { ".ts": "tsx", ".tsx": "tsx" },
  external,
  banner: { js: clientBanner },
  footer: { js: clientFooter },
  define: {
    __PLUGIN_VERSION__: JSON.stringify(PLUGIN_VERSION),
    __DEV__: String(IS_DEV),
    __VUE_ENTRY__: JSON.stringify(VUE_ENTRY),
    __VUE_CSS__: JSON.stringify(VUE_CSS),
  },
  sourcemap: true,
  logLevel: "info",
});
await rm(join(libDir, "web", "index.html"), { force: true }).catch(() => {});

// 构建标记
await writeFile(join(libDir, ".build-meta.json"), JSON.stringify({ id: PLUGIN_ID, builtAt: new Date().toISOString() }, null, 2) + "\n");

console.log("build: done (lib/index.js, lib/client.js, lib/web/)");