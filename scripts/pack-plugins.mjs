// 插件打包（构建期，仓库侧）：扫描 plugins/*.js（纯 JS 源码形态）→ 内存 bundle 列表 →
// 直接写入 lib/web/plugin-src/ + dist/plugin-src/（.pack-meta.json + registry.json）。
//
// plugins/ 目录只保留 .js 插件本身——不再有 packages/importPackages 分区、不落盘中间产物
// （旧 plugins/lib/ 已废弃）。「内置 vs 可下载候选」的区分完全由运行时注册表决定：
// GET /plugin-registry 在线枚举 GitHub plugins/ 目录（见 routes-plugins.ts），随包发布的
// registry.json 仅作离线回退。宿主 userPlugins store 经隔离 __ModuleLoader__ shim eval
// bundle 文本，取出 factory 后 apply()。
// 打包规则真源在 pack-core.mjs（与 src/shared/plugin-meta.ts 逐字节同构），勿在此复制。
import { readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { mkdir, readFile, writeFile } from "node:fs/promises";

import { transformSourceToBundle } from "../plugins/pack-core.mjs";

const here = dirname(fileURLToPath(import.meta.url)); // scripts/
const root = dirname(here);
const PLUGINS_DIR = join(root, "plugins");

/**
 * 打包全部插件并铺进两个静态目录（webDir=lib/web 供 host 发布；dist 供 vite dev 代理命中）。
 * @param {string} webDir lib/web 绝对路径
 * @returns {Promise<Array<object>>} pack 清单（.pack-meta.json 内容）
 */
export async function packPluginsInto(webDir) {
  const names = readdirSync(PLUGINS_DIR)
    .filter((f) => f.endsWith(".js") && !f.startsWith(".") && /^[^._][^.]*\.js$/i.test(f))
    .map((f) => f.replace(/\.js$/, ""));

  const meta = [];
  const bundles = new Map();
  for (const name of names) {
    const src = await readFile(join(PLUGINS_DIR, `${name}.js`), "utf8");
    const { packed, manifest } = transformSourceToBundle(src, name);
    bundles.set(name, packed);
    const { name: display, ...rest } = manifest;
    meta.push({ name, id: manifest.id, title: display, ...rest });
  }
  // registry.json = 「检查远端」离线回退：全部插件都是可下载候选（同源 plugin-src 地址）。
  // 写在仓库根（不在 plugins/ 内）：GitHub 页面 raw 直链可达，在线枚举失败时 host 用它兜底。
  const registry = meta.map((e) => ({
    name: e.name,
    url: `/api/dsh-file-workbench/plugin-src?k=${encodeURIComponent(e.name)}`,
    description: e.description,
    descriptionEn: e.descriptionEn ?? "",
  }));
  await writeFile(join(root, "registry.json"), JSON.stringify(registry, null, 2) + "\n");

  for (const dir of [join(webDir, "plugin-src"), join(root, "dist", "plugin-src")]) {
    await mkdir(dir, { recursive: true });
    await writeFile(join(dir, ".pack-meta.json"), JSON.stringify(meta, null, 2) + "\n");
    for (const [name, text] of bundles) await writeFile(join(dir, `${name}.js`), text);
  }
  return meta;
}
