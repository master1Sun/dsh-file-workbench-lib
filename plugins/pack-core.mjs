// 插件源码打包规则的**唯一真源**：src/shared/plugin-meta.ts（TS）与本文件（构建期 Node ESM）。
//
// 为什么内联而不是 import 那个 .ts：scripts/build.mjs 与 `node plugins/pack.mjs` 都是纯 Node，
// 不经过任何转译层，加载不了 TS 模块；而运行时（userPlugins store）走 Vite 直接 import .ts。
// 两处必须逐字节同构，否则「npm run build 产物」与「导入时现场打包的 bundle」会出现规则漂移。
// shared/plugin-meta.ts 头部注明了本文件为其对偶；改这里务必同步改那里。

/** 源码是否含三种顶层 export 之一（即「未打包的 packages/*.js 形态」）。 */
export function isSourceForm(code) {
  return /^export\s+(const\s+meta\b|const\s+inject\b|function\s+apply\b)/m.test(code);
}

/**
 * 从源码文本里静态求值 `export const meta = {...}` 字面量并校验。
 * 括号配平静态扫描（不做 eval）——meta 必须是纯 JSON 风格对象字面量，禁止表达式。
 */
export function extractMeta(src, name) {
  const m = /export\s+const\s+meta\s*=\s*/.exec(src);
  if (!m) throw new Error(`${name}: 缺少 export const meta = { name, version, description, ... }`);
  let i = m.index + m[0].length;
  if (src[i] !== "{") throw new Error(`${name}: meta 必须是对象字面量`);
  let depth = 0;
  let end = -1;
  let inStr = null; // 当前字符串定界符
  for (; i < src.length; i++) {
    const c = src[i];
    if (inStr) {
      if (c === "\\") { i++; continue; }
      if (c === inStr) inStr = null;
      continue;
    }
    if (c === '"' || c === "'" || c === "`") { inStr = c; continue; }
    if (c === "{") depth++;
    else if (c === "}") {
      depth--;
      if (depth === 0) { end = i + 1; break; }
    }
  }
  if (end < 0) throw new Error(`${name}: meta 对象字面量未闭合`);
  const literal = src.slice(m.index + m[0].length, end);
  let value;
  try {
    value = JSON.parse(literal.replace(/'/g, '"').replace(/,\s*([}\]])/g, "$1"));
  } catch {
    throw new Error(`${name}: meta 必须是纯 JSON 风格对象字面量（双引号、无注释、无尾逗号、无表达式）`);
  }
  return validateMeta(value, name);
}

/** meta 必填字段与类型校验：缺 name/description 直接 fail build，避免产出无名插件。 */
function validateMeta(meta, name) {
  if (!meta || typeof meta !== "object" || Array.isArray(meta)) throw new Error(`${name}: meta 必须是对象`);
  if ("id" in meta) throw new Error(`${name}: meta.id 由打包器生成（dsh-fw.${name}），请勿手写`);
  for (const key of ["name", "description"]) {
    if (typeof meta[key] !== "string" || !meta[key].trim()) throw new Error(`${name}: meta.${key} 必填且为非空字符串`);
  }
  if (!("version" in meta)) meta.version = "";
  if (typeof meta.version !== "string") throw new Error(`${name}: meta.version 须为字符串（可空串）`);
  for (const key of ["nameEn", "descriptionEn"]) {
    if (key in meta && typeof meta[key] !== "string") throw new Error(`${name}: meta.${key} 须为字符串`);
  }
  return meta;
}

/**
 * 把一段源码打成 __ModuleLoader__ bundle 文本（返回值含 manifest，供 .pack-meta.json 汇总）。
 * @throws Error 源码不符合约定（顶层 import / 多余 export / 缺 apply / meta 非法）
 */
export function transformSourceToBundle(code, name) {
  if (/^\s*import[\s({*'"/]/m.test(code)) throw new Error(`${name}: 顶层 import 不受支持`);
  const manifest = { id: `dsh-fw.${name}`, ...extractMeta(code, name) };
  // 只剥顶层 export 关键字；源码自带的 `const meta = {...}` 声明原样留在 factory 体内——
  // 不能再额外注入一份 metaLine，否则同一作用域重复声明（Identifier 'meta' has already been declared）。
  let src = code.replace(/^export\s+(const\s+meta\b|const\s+inject\b|function\s+apply\b)/gm, "$1");
  if (/^export\b/m.test(src)) throw new Error(`${name}: 仅允许 export const meta / export const inject / export function apply`);
  if (!/\bfunction apply\b/.test(src)) throw new Error(`${name}: 缺少 function apply`);
  const wrapped = [
    `window.__ModuleLoader__.manifest(${JSON.stringify(manifest)});`,
    `window.__ModuleLoader__.load({`,
    `\tid: ${JSON.stringify(manifest.id)},`,
    `\tfactory: (require) => {`,
    src
      .trimEnd()
      .split("\n")
      .map((l) => (l ? `\t\t${l}` : l))
      .join("\n"),
    `\t\treturn { apply, inject, meta };`,
    `\t}`,
    `});`,
    "",
  ].join("\n");
  return { packed: wrapped, manifest };
}
