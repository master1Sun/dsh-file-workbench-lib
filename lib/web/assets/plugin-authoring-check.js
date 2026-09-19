// 插件源码静态自检：node check-plugin.mjs <file.js>
// 内联了与 plugins/pack-core.mjs（宿主导入打包、npm run build 同源）一致的校验规则，
// 单文件即可运行，无需依赖本仓库。全过输出 OK。
import { readFile } from "node:fs/promises";

const SOURCE_FORM_RE = /^export\s+(const\s+meta\b|const\s+inject\b|function\s+apply\b)/m;
const META_RE = /export\s+const\s+meta\s*=\s*/;

/** 括号配平静态求值 meta 字面量（同 pack-core）。 */
function extractMeta(src) {
  const m = META_RE.exec(src);
  if (!m) throw new Error("缺少 export const meta = { name, version, description, ... }");
  let i = m.index + m[0].length;
  if (src[i] !== "{") throw new Error("meta 必须是对象字面量");
  let depth = 0, end = -1, inStr = null;
  for (; i < src.length; i++) {
    const c = src[i];
    if (inStr) { if (c === "\\") { i++; continue; } if (c === inStr) inStr = null; continue; }
    if (c === '"' || c === "'" || c === "`") { inStr = c; continue; }
    if (c === "{") depth++;
    else if (c === "}" && --depth === 0) { end = i + 1; break; }
  }
  if (end < 0) throw new Error("meta 对象字面量未闭合");
  const value = JSON.parse(src.slice(m.index + m[0].length, end).replace(/'/g, '"').replace(/,\s*([}\]])/g, "$1"));
  if ("id" in value) throw new Error("meta.id 由打包器生成，请勿手写");
  for (const key of ["name", "description"]) {
    if (typeof value[key] !== "string" || !value[key].trim()) throw new Error(`meta.${key} 必填且为非空字符串`);
  }
  return value;
}

/** 与 pack-core.transformSourceToBundle 相同的拒绝路径（这里只求值不产文本）。 */
function validateSource(src, name) {
  if (/^\s*import[\s({*'"/]/m.test(src)) throw new Error("顶层 import 不受支持");
  const meta = extractMeta(src);
  const stripped = src.replace(/^export\s+(const\s+meta\b|const\s+inject\b|function\s+apply\b)/gm, "$1");
  if (/^export\b/m.test(stripped)) throw new Error("仅允许 export const meta / export const inject / export function apply");
  if (!/\bfunction apply\b/.test(stripped)) throw new Error("缺少 function apply");
  return { id: `dsh-fw.${name}`, ...meta };
}

const file = process.argv[2];
if (!file) {
  console.error("用法: node check-plugin.mjs <plugin.js>");
  process.exit(1);
}
const src = await readFile(file, "utf8");
try {
  if (!SOURCE_FORM_RE.test(src)) {
    // 非源码形态：至少要求能 eval 解析（loader bundle / 极简形态）。
    new Function(src);
    console.log(`OK (非源码形态，eval 可解析): ${file}`);
  } else {
    const manifest = validateSource(src, file.split(/[\\/]/).pop().replace(/\.js$/i, ""));
    console.log(`OK: ${manifest.id} | ${manifest.name} | ${(manifest.description || "").slice(0, 40)}…`);
  }
} catch (e) {
  console.error(`FAIL: ${e.message}`);
  process.exit(1);
}
