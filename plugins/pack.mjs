// 插件打包：plugins/packages/<name>.js（纯 JS 源码）→ plugins/lib/<name>.js（__ModuleLoader__ 外壳 + .pack-meta.json）。
//
// 源码约定：只允许 `export const meta` / `export const inject` / `export function apply(_ctx)` 三种顶层导出；
// 不得有顶层 import。meta 是该插件的清单（manifest），打包时静态求值并校验：
//   { name, version, description, nameEn?, descriptionEn? } —— id 由打包器按 `dsh-fw.<裸名>` 生成，勿手写。
// 产物文本顶层先调 `window.__ModuleLoader__.manifest({ id, ...meta })` 声明清单元数据（供「插件管理」
// 导入时读取名称/描述，无需执行插件代码），再 `.load({ id, factory })` 注册可执行模块。
// 由 scripts/build.mjs 在 Vite/esbuild 之前自动调用（随本库一起打包），
// 「插件管理」内置种子即读 plugins/lib/ 产物。宿主 userPlugins store 以隔离 __ModuleLoader__
// shim eval 产物文本，取出 factory 后 apply()。
//
// 打包规则本体在 pack-core.mjs——与运行时「源码导入即现场打包」（src/shared/plugin-meta.ts，
// 被 src/vue/stores/userPlugins.ts 调用）保持同构；两处任一改动务必同步另一处。
import { readdirSync, realpathSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { rm, mkdir, readFile, writeFile } from "node:fs/promises";
import { transformSourceToBundle } from "./pack-core.mjs";

const here = dirname(fileURLToPath(import.meta.url)); // plugins/
const PKG_DIR = join(here, "packages");
const LIB_DIR = join(here, "lib");

/**
 * 打包全部插件。@returns {Promise<string[]>} 插件裸名列表
 */
export async function packPlugins() {
  const names = readdirSync(PKG_DIR)
    .filter((f) => f.endsWith(".js") && !f.startsWith("."))
    .map((f) => f.replace(/\.js$/, ""));

  await rm(LIB_DIR, { recursive: true, force: true });
  await mkdir(LIB_DIR, { recursive: true });

  const meta = [];
  for (const name of names) {
    const src = await readFile(join(PKG_DIR, `${name}.js`), "utf8");
    const { packed, manifest } = transformSourceToBundle(src, name);
    await writeFile(join(LIB_DIR, `${name}.js`), packed);
    const { name: _display, ...rest } = manifest;
    meta.push({ name, id: manifest.id, title: _display, ...rest });
  }

  await writeFile(join(LIB_DIR, ".pack-meta.json"), JSON.stringify(meta, null, 2) + "\n");
  return names;
}

// 也支持单独运行：node plugins/pack.mjs
// （argv 在 Windows 上是反斜杠路径，须与 realpath 归一化后再比）
if (process.argv[1] && fileURLToPath(import.meta.url) === realpathSync(process.argv[1]).replace(/\\/g, "/")) {
  const names = await packPlugins();
  console.log(`pack: ${names.length} 个插件已打包 → plugins/lib/`, names.join(", "));
}
