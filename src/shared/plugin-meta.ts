/**
 * 插件「源码形态」的解析与打包 —— 构建期（scripts/pack-plugins.mjs 经 plugins/pack-core.mjs）
 * 与运行期（导入未打包源码时）共用。
 *
 * 背景：`plugins/*.js` 是带 `export const meta / export const inject / export function apply`
 * 三种顶层导出的源码约定；npm run build 时 pack-plugins 剥掉 export、包上 __ModuleLoader__
 * 外壳直接写入 lib/web/plugin-src/。用户把**源码**直接拖进「插件管理 → 导入」时，宿主对全局
 * 作用域 eval 会撞 `Unexpected token 'export'`。本模块让导入路径现场做完全一致的转换，杜绝规则漂移。
 */

/** 插件清单（manifest）：静态求值 export const meta 得到；id 由本模块按 `dsh-fw.<裸名>` 生成。 */
export interface PluginManifest {
  id: string;
  name: string;
  version: string;
  description: string;
  nameEn?: string;
  descriptionEn?: string;
}

/** 源码是否含三种顶层 export 之一（即「未打包的插件源码形态」）。 */
export function isSourceForm(code: string): boolean {
  return /^export\s+(const\s+meta\b|const\s+inject\b|function\s+apply\b)/m.test(code);
}

/**
 * 静态求值 `export const inject = [...]` 字面量（loader 外壳需要其真值；缺省/非法回退 []）。
 * 与 extractMeta 同族：括号配平静态扫描，不做 eval。
 */
export function extractInject(src: string): unknown[] {
  const m = /export\s+const\s+inject\s*=\s*/.exec(src);
  if (!m) return [];
  let i = m.index + m[0].length;
  if (src[i] !== "[") return [];
  let depth = 0;
  let end = -1;
  let inStr: string | null = null;
  for (; i < src.length; i++) {
    const c = src[i];
    if (inStr) {
      if (c === "\\") { i++; continue; }
      if (c === inStr) inStr = null;
      continue;
    }
    if (c === '"' || c === "'" || c === "`") { inStr = c; continue; }
    if (c === "[") depth++;
    else if (c === "]") {
      depth--;
      if (depth === 0) { end = i + 1; break; }
    }
  }
  if (end < 0) return [];
  try {
    const v = JSON.parse(src.slice(m.index + m[0].length, end).replace(/'/g, '"').replace(/,\s*([}\]])/g, "$1"));
    return Array.isArray(v) ? v : [];
  } catch {
    return [];
  }
}

/**
 * 从源码文本里静态求值 `export const meta = {...}` 字面量。
 * 括号配平静态扫描（不做 eval）——meta 必须是纯 JSON 风格对象字面量，禁止表达式。
 * 逻辑与 pack-core.mjs 保持一致：字符串感知、支持转义、支持单双反引号。
 */
export function extractMeta(src: string, name: string): Omit<PluginManifest, "id"> {
  const m = /export\s+const\s+meta\s*=\s*/.exec(src);
  if (!m) throw new Error(`${name}: 缺少 export const meta = { name, version, description, ... }`);
  let i = m.index + m[0].length;
  if (src[i] !== "{") throw new Error(`${name}: meta 必须是对象字面量`);
  let depth = 0;
  let end = -1;
  let inStr: string | null = null; // 当前字符串定界符
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
  let value: unknown;
  try {
    value = JSON.parse(literal.replace(/'/g, '"').replace(/,\s*([}\]])/g, "$1"));
  } catch {
    throw new Error(`${name}: meta 必须是纯 JSON 风格对象字面量（双引号、无注释、无尾逗号、无表达式）`);
  }
  return validateMeta(value, name);
}

/** meta 必填字段与类型校验：缺 name/description 直接抛错，避免产出无名插件。 */
function validateMeta(meta: unknown, name: string): Omit<PluginManifest, "id"> {
  const m = meta as Record<string, unknown> | null;
  if (!m || typeof m !== "object" || Array.isArray(m)) throw new Error(`${name}: meta 必须是对象`);
  if ("id" in m) throw new Error(`${name}: meta.id 由打包器生成（dsh-fw.${name}），请勿手写`);
  for (const key of ["name", "description"]) {
    if (typeof m[key] !== "string" || !(m[key] as string).trim()) throw new Error(`${name}: meta.${key} 必填且为非空字符串`);
  }
  if (!("version" in m)) m.version = "";
  if (typeof m.version !== "string") throw new Error(`${name}: meta.version 须为字符串（可空串）`);
  for (const key of ["nameEn", "descriptionEn"]) {
    if (key in m && typeof m[key] !== "string") throw new Error(`${name}: meta.${key} 须为字符串`);
  }
  return m as unknown as Omit<PluginManifest, "id">;
}

/**
 * 把一段源码形态插件打成 __ModuleLoader__ bundle（与构建期产物逐字节同构）。
 * @throws Error 源码不符合约定（顶层 import / 多余 export / 缺 apply / meta 非法）
 */
export function transformSourceToBundle(code: string, name: string): { packed: string; manifest: PluginManifest } {
  if (/^\s*import[\s({*'"/]/m.test(code)) throw new Error(`${name}: 顶层 import 不受支持`);
  const manifest = { id: `dsh-fw.${name}`, ...extractMeta(code, name) };
  // 只剥顶层 export 关键字；源码自带的 const meta 声明原样留在 factory 体内。
  let src = code.replace(/^export\s+(const\s+meta\b|const\s+inject\b|function\s+apply\b)/gm, "$1");
  if (/^export\b/m.test(src)) throw new Error(`${name}: 仅允许 export const meta / export const inject / export function apply`);
  if (!/\bfunction apply\b/.test(src)) throw new Error(`${name}: 缺少 function apply`);
  const wrapped = [
    `window.__ModuleLoader__.manifest(${JSON.stringify(manifest)});`,
    `window.__ModuleLoader__.load({`,
    `\tid: ${JSON.stringify(manifest.id)},`,
    // inject 声明必须在 load 顶层（cordis loader 读取）：静态求值源码里的字面量，
    // 不能引用 factory 内被剥了 export 的局部名。
    `\tinject: ${JSON.stringify(extractInject(code))},`,
    `\tfactory: (require) => {`,
    src
      .trimEnd()
      .split("\n")
      .map((l) => (l ? `\t\t${l}` : l))
      .join("\n"),
    `\t\treturn { apply, meta };`,
    `\t}`,
    `});`,
    "",
  ].join("\n");
  return { packed: wrapped, manifest };
}
