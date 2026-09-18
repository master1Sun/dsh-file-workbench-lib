/**
 * fs-search —— 递归搜索（文件名 + 文件内容）。
 *
 * opendir 流式走树。
 *  - 文件名：查询作为条目标名的「大小写不敏感子串」匹配。
 *  - 文件内容：对符合大小限制的文本文件读取内容做「大小写不敏感子串」匹配，命中文件加入
 *    byContent。为避免大字/大文件拖垮 host，内容匹配有独立预算 maxContentReads 与单文件
 *    大小上限 CONTENT_MAX_BYTES，并按空字节判定跳过二进制文件。
 * 命中路径相对搜索根、'系统分隔符' 归一为 '/'。跳过噪声目录（.git / node_modules / 构建缓存
 * 等），对称链接目录不下钻（循环安全）。预算用尽即提前截断，绝不让一个巨大的家目录拖垮 host。
 *
 * 另提供 `listProjectFiles`：同一套遍历约束下的**文件路径索引**，供前端「快速打开」使用。
 */
import { join, relative, sep } from "node:path";
import { opendir, stat } from "node:fs/promises";
import { readFile } from "node:fs/promises";

export interface SearchOutcome {
  matches: string[];
  /** 命中的文件中，命中原因是“文件内容包含查询”的子集路径。 */
  byContent: string[];
  /** 内容命中文件（相对路径，已归一化）→ 命中行片段，供前端展示“为何命中”。 */
  snippets: Record<string, string>;
  truncated: boolean;
}

const DEFAULT_MAX_MATCHES = 200;
const DEFAULT_MAX_VISITED = 100_000;
/** 内容匹配搜索的查询最短长度（避免单字符引发海量命中）。 */
const CONTENT_MIN_QUERY = 2;
/** 参与内容匹配的最大文件数预算。 */
const DEFAULT_MAX_CONTENT_READS = 400;
/** 参与内容匹配的单个文件大小上限（超出不读）。 */
const CONTENT_MAX_BYTES = 128 * 1024;

/** 文件名搜索永远不会有用的目录名，大小写不敏感比较（Node_Modules / .GIT 一视同仁）。 */
const SEARCH_SKIP_DIRS = new Set([
  ".git",
  "node_modules",
  ".pnpm-store",
  ".yarn",
  ".turbo",
  ".turbopack",
  ".next",
  ".nuxt",
  ".output",
  ".cache",
  ".parcel-cache",
  "coverage",
  "dist",
  "build",
  "out",
  ".umi",
  ".umi-production",
  ".dumi",
]);

/** 读取文件内容并返回命中查询的一处片段（该行及上下文各一行）；未命中/不可读/二进制返回 null。仅限小文本文件。 */
async function fileContentSnippet(file: string, matcher: MatchMode): Promise<string | null> {
  try {
    const s = await stat(file);
    if (!s.isFile() || s.size <= 0 || s.size > CONTENT_MAX_BYTES) return null;
    const buf = await readFile(file);
    // 前 512 字节出现空字节即视为二进制，不参与内容搜索
    const head = buf.subarray(0, Math.min(512, buf.length));
    if (head.includes(0)) return null;
    const text = buf.toString("utf8");
    const idx = matcher.find(text);
    if (idx === null || idx < 0) return null;
    const lines = text.split(/\r?\n/);
    // 命中字符所在行号（indexOf 位置前的换行数）
    const hitLine = text.slice(0, idx).split("\n").length - 1;
    const slice = lines.slice(Math.max(0, hitLine - 1), Math.min(lines.length, hitLine + 2));
    const raw = slice.join("\n").trim();
    // 超长单行截断，避免撑爆列表
    return raw.length > 200 ? `${raw.slice(0, 200)}…` : raw || "…";
  } catch {
    return null;
  }
}

/** 转义正则特殊字符（作为非法正则的兜底，退化为字面量匹配）。 */
function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** 搜索匹配模式：统一 文件名/内容 的 大小写 + 正则 判定。 */
interface MatchMode {
  testName(name: string): boolean;
  /** 返回内容中第一处命中位置；未命中返回 null。 */
  find(text: string): number | null;
}

function makeMatcher(query: string, opts: { caseSensitive?: boolean; regex?: boolean } = {}): MatchMode {
  const caseSensitive = opts.caseSensitive === true;
  if (opts.regex) {
    let re: RegExp;
    try {
      re = new RegExp(query, caseSensitive ? "" : "i");
    } catch {
      re = new RegExp(escapeRegex(query), caseSensitive ? "" : "i");
    }
    return {
      testName: (name) => re.test(name),
      find: (text) => {
        re.lastIndex = 0;
        const m = re.exec(text);
        return m ? m.index : null;
      },
    };
  }
  const needle = query.trim();
  const lower = needle.toLowerCase();
  return {
    testName: (name) => (caseSensitive ? name.includes(needle) : name.toLowerCase().includes(lower)),
    find: (text) => (caseSensitive ? text.indexOf(needle) : text.toLowerCase().indexOf(lower)),
  };
}

const normalize = (p: string): string => p.split(sep).join("/");

/**
 * 整词匹配：把已构造好的正则源串用「非单词字符」环视包住，使命中处前后不能再接 \w。
 * 用lookahead/lookbehind 而非 \b，是因为查询本身可能以非单词字符开头/结尾（如 `foo(`），
 * 此时 \b 语义会错位；`(?<!\w)…(?!\w)` 对任意源串都成立。
 */
function wrapWholeWord(source: string, wholeWord: boolean | undefined): string {
  return wholeWord ? `(?<![\\p{L}\\p{N}_])${source}(?![\\p{L}\\p{N}_])` : source;
}

/** 「files to include/exclude」输入解析后的 glob 集合。 */
interface GlobSet {
  res: RegExp[];
}

/**
 * 编译逗号分隔的 glob 串为正则数组（VS Code「包含/排除的文件」语义）。空串 → null（视为不过滤）。
 * 匹配对象是相对搜索根、'/' 分隔的路径。支持：`*`（单段内）、`**`（跨段）、`?`、`{a,b}`、
 * 前导 `./`、以及「无斜杠的模式同时匹配任意层级的文件名」。非法/不支持语法退化为字面量。
 */
function compileGlobPatterns(raw: string | undefined): GlobSet | null {
  if (!raw) return null;
  const parts = raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  if (parts.length === 0) return null;
  const res = parts.map(globToRegExp).filter((r): r is RegExp => r !== null);
  return res.length ? { res } : null;
}

/** 单个 glob → 正则（失败返回 null）。 */
function globToRegExp(pattern: string): RegExp | null {
  let p = pattern.replace(/\\/g, "/").replace(/^\.\//, "");
  if (!p) return null;
  const anchored = p.includes("/"); // 含斜杠 → 从根锚定；纯文件名模式 → 匹配任意层级
  if (!anchored) p = `**/${p}`;
  let re = "";
  for (let i = 0; i < p.length; i++) {
    const c = p[i];
    if (c === "*") {
      if (p[i + 1] === "*") {
        // `**` 跨目录；`**/` 允许匹配零段
        if (p[i + 2] === "/") {
          re += "(?:.*/)?";
          i += 2;
        } else {
          re += ".*";
          i += 1;
        }
      } else {
        re += "[^/]*";
      }
    } else if (c === "?") {
      re += "[^/]";
    } else if (c === "{") {
      const close = p.indexOf("}", i);
      if (close > i) {
        const alts = p.slice(i + 1, close).split(",").map(escapeRegexLiteral);
        re += `(?:${alts.join("|")})`;
        i = close;
      } else {
        re += "\\{";
      }
    } else if (c === ".") {
      re += "\\.";
    } else if ("[|^$()+]/\\".includes(c)) {
      re += `\\${c}`;
    } else {
      re += c;
    }
  }
  try {
    return new RegExp(`^${re}$`);
  } catch {
    return null;
  }
}

/** glob 分支内的字面量转义（只处理正则元字符，保留其余文本）。 */
function escapeRegexLiteral(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** relPath 是否命中 glob 集合中任一模式。集合为 null 时恒 true（不过滤）。 */
function matchesGlob(set: GlobSet | null, relPath: string): boolean {
  if (!set) return true;
  const path = relPath.split(sep).join("/");
  return set.res.some((re) => {
    re.lastIndex = 0;
    return re.test(path);
  });
}

/** 批量替换的结果。 */
export interface ReplaceOutcome {
  /** 实际被改写的文件相对路径（sep 归一为 "/"，排序去重）。 */
  changed: string[];
  /** 被改写文件数。 */
  files: number;
  /** 总替换处数。 */
  replacements: number;
  /** 预算用尽提前停止。 */
  truncated: boolean;
}

/** 批量替换的独立预算（与搜索不同：替换是写操作，必须更保守）。 */
const REPLACE_MAX_FILES = 200;

/**
 * 在 root 下递归查找 query 并整体替换为 replacement。
 *
 * 语义与 searchFiles 对齐（跳过 SEARCH_SKIP_DIRS、不钻软链目录、跳过二进制/超大文件），
 * 仅当内容实际变化时才调用 opts.write 落盘。替换使用函数式 replacer，
 * 避免 `$&`/`$1` 这类替换模板语义被用户输入意外触发。
 *
 * @throws 写入错误原样向上抛（路由层负责转 500）。
 */
export async function replaceInFiles(
  root: string,
  query: string,
  replacement: string,
  opts: {
    maxVisited?: number;
    maxContentReads?: number;
    maxFiles?: number;
    caseSensitive?: boolean;
    regex?: boolean;
    wholeWord?: boolean;
    /** 保留大小写：字面量模式下按命中词的大小写形态变换替换串（正则模式忽略）。 */
    preserveCase?: boolean;
    /** 「包含的文件」glob（逗号分隔，相对 root）。空 = 不过滤。 */
    include?: string;
    /** 「排除的文件」glob（逗号分隔，相对 root）。命中即跳过。 */
    exclude?: string;
    write: (absPath: string, content: string) => Promise<void>;
  },
): Promise<ReplaceOutcome> {
  const needle = query.trim();
  if (needle === "") return { changed: [], files: 0, replacements: 0, truncated: false };

  const maxVisited = opts.maxVisited ?? DEFAULT_MAX_VISITED;
  const maxContentReads = opts.maxContentReads ?? DEFAULT_MAX_CONTENT_READS;
  const maxFiles = opts.maxFiles ?? REPLACE_MAX_FILES;
  const includeSet = compileGlobPatterns(opts.include);
  const excludeSet = compileGlobPatterns(opts.exclude);

  // 匹配正则：regex 模式直接构造（非法正则退化为转义字面量）；字面量模式转义。
  // 整词开关统一经 wrapWholeWord 包裹源串。
  // 替换默认按字面量插入；仅在「字面量 + 保留大小写」时按命中词形态变换。
  let re: RegExp;
  if (opts.regex) {
    try {
      re = new RegExp(wrapWholeWord(needle, opts.wholeWord), opts.caseSensitive ? "g" : "gi");
    } catch {
      re = new RegExp(wrapWholeWord(escapeRegex(needle), opts.wholeWord), opts.caseSensitive ? "g" : "gi");
    }
  } else {
    re = new RegExp(wrapWholeWord(escapeRegex(needle), opts.wholeWord), opts.caseSensitive ? "g" : "gi");
  }
  const doPreserveCase = opts.preserveCase === true && !opts.regex;
  const replacer = (match: string) => (doPreserveCase ? applyCase(match, replacement) : replacement);

  const changed: { rel: string; count: number }[] = [];
  let replacements = 0;
  let visited = 0;
  let contentReads = 0;
  let truncated = false;

  const walk = async (dir: string): Promise<void> => {
    if (truncated) return;
    const level = await opendir(dir).catch(() => undefined);
    if (level === undefined) return;
    for await (const dirent of level) {
      visited += 1;
      if (visited > maxVisited) {
        truncated = true;
        return;
      }
      if (dirent.isDirectory() && SEARCH_SKIP_DIRS.has(dirent.name.toLowerCase())) continue;
      if (dirent.isFile() && !dirent.isSymbolicLink() && contentReads < maxContentReads && changed.length < maxFiles) {
        const abs = join(dir, dirent.name);
        const rel = normalize(relative(root, abs));
        if ((includeSet && !matchesGlob(includeSet, rel)) || (excludeSet && matchesGlob(excludeSet, rel))) {
          // glob 过滤掉的文件不消耗内容读取预算
        } else {
          contentReads += 1;
          const file = await tryReplaceFile(abs, re, replacer, opts.write).catch(() => null);
          if (file !== null) {
            changed.push(file);
            replacements += file.count;
          }
        }
      }
      if (dirent.isDirectory() && !dirent.isSymbolicLink()) {
        await walk(join(dir, dirent.name));
        if (truncated) return;
      }
    }
  };

  await walk(root);
  return {
    changed: [...new Set(changed.map((f) => f.rel))].sort().map(normalize),
    files: changed.length,
    replacements,
    truncated,
  };
}

/**
 * 保留大小写：按命中词 `match` 的大小写形态变换替换串 `repl`。
 *  - 全大写（且含字母）→ repl 全大写；
 *  - 首字母大写、其余小写 → repl 首字母大写；
 *  - 其余 → 原样。
 */
function applyCase(match: string, repl: string): string {
  const letters = match.replace(/[^\p{L}]/gu, "");
  if (letters && letters === letters.toUpperCase()) return repl.toUpperCase();
  const first = [...match].find((c) => /\p{L}/u.test(c));
  if (first && first === first.toUpperCase() && letters !== letters.toLowerCase()) {
    return repl.charAt(0).toUpperCase() + repl.slice(1);
  }
  return repl;
}

/** 单文件替换：大小/二进制校验后整体替换；无变化返回 null，否则返回相对路径与替换次数。 */
async function tryReplaceFile(
  abs: string,
  re: RegExp,
  replacer: (match: string) => string,
  write: (absPath: string, content: string) => Promise<void>,
): Promise<{ rel: string; count: number } | null> {
  const s = await stat(abs);
  if (!s.isFile() || s.size <= 0 || s.size > CONTENT_MAX_BYTES) return null;
  const buf = await readFile(abs);
  const head = buf.subarray(0, Math.min(512, buf.length));
  if (head.includes(0)) return null;
  const text = buf.toString("utf8");
  re.lastIndex = 0;
  let count = 0;
  const next = text.replace(re, (m: string) => {
    count += 1;
    return replacer(m);
  });
  if (count === 0 || next === text) return null;
  await write(abs, next);
  return { rel: abs, count };
}

export async function searchFiles(
  root: string,
  query: string,
  opts: {
    maxMatches?: number;
    maxVisited?: number;
    maxContentReads?: number;
    caseSensitive?: boolean;
    regex?: boolean;
  } = {},
): Promise<SearchOutcome> {
  const matcher = makeMatcher(query, opts);
  const needle = query.trim();
  if (needle === "") return { matches: [], byContent: [], snippets: {}, truncated: false };

  const maxMatches = opts.maxMatches ?? DEFAULT_MAX_MATCHES;
  const maxVisited = opts.maxVisited ?? DEFAULT_MAX_VISITED;
  const maxContentReads = opts.maxContentReads ?? DEFAULT_MAX_CONTENT_READS;
  const doContent = needle.length >= CONTENT_MIN_QUERY;

  const matches: string[] = [];
  const byContent: string[] = [];
  const snippets: Record<string, string> = {};
  let visited = 0;
  let contentReads = 0;
  let truncated = false;

  const walk = async (dir: string): Promise<void> => {
    if (truncated) return;
    const level = await opendir(dir).catch(() => undefined);
    if (level === undefined) return; // 无权限目录跳过，不整树失败
    for await (const dirent of level) {
      visited += 1;
      if (visited > maxVisited) {
        truncated = true;
        return;
      }
      if (dirent.isDirectory() && SEARCH_SKIP_DIRS.has(dirent.name.toLowerCase())) continue;
      const rel = join(relative(root, dir), dirent.name);
      let matchedName = false;
      if (matcher.testName(dirent.name)) {
        matches.push(rel);
        matchedName = true;
        if (matches.length >= maxMatches) {
          truncated = true;
          return;
        }
      }
      // 文件内容匹配：仅当文件名未命中、仍有内容预算且查询够长时读取
      if (
        doContent &&
        !matchedName &&
        dirent.isFile() &&
        !dirent.isSymbolicLink() &&
        contentReads < maxContentReads &&
        matches.length < maxMatches
      ) {
        contentReads += 1;
        const snippet = await fileContentSnippet(join(dir, dirent.name), matcher);
        if (snippet !== null) {
          matches.push(rel);
          byContent.push(rel);
          snippets[normalize(rel)] = snippet;
          if (matches.length >= maxMatches) {
            truncated = true;
            return;
          }
        }
      }
      if (dirent.isDirectory() && !dirent.isSymbolicLink()) {
        await walk(join(dir, dirent.name));
        if (truncated) return;
      }
    }
  };

  await walk(root);
  const sorted = matches.sort();
  return {
    matches: sorted.map(normalize),
    byContent: new Set(byContent).size ? [...new Set(byContent)].map(normalize) : [],
    snippets,
    truncated,
  };
}

/* ---------- 全局内容搜索（grep 式：按行命中，按文件分组） ---------- */

export interface GrepLineHit {
  /** 1 起始行号。 */
  ln: number;
  /** 行文本（超长截断）。 */
  text: string;
}

export interface GrepFileHit {
  /** 相对搜索根的路径（'/' 分隔）。 */
  rel: string;
  hits: GrepLineHit[];
}

export interface GrepOutcome {
  files: GrepFileHit[];
  /** 命中行总数（受预算截断前）。 */
  total: number;
  truncated: boolean;
}

/** 单文件命中行数上限（防单文件刷屏）。 */
const GREP_MAX_LINES_PER_FILE = 50;
/** 命中文件数上限。 */
const GREP_MAX_FILES = 200;
/** 命中行总预算。 */
const GREP_MAX_TOTAL = 2000;
/** 单行展示截断长度。 */
const GREP_LINE_MAX_CHARS = 400;

/**
 * grep 式全文搜索：遍历工作区文本文件，返回每个文件的命中行（行号 + 行文本）。
 * 复用 searchFiles 的遍历约束（跳过噪声目录、大小上限、二进制跳过、预算截断）。
 */
export async function grepFiles(
  root: string,
  query: string,
  opts: {
    caseSensitive?: boolean;
    regex?: boolean;
    wholeWord?: boolean;
    include?: string;
    exclude?: string;
    maxFiles?: number;
    maxTotal?: number;
    maxVisited?: number;
  } = {},
): Promise<GrepOutcome> {
  const needle = query.trim();
  if (needle.length < CONTENT_MIN_QUERY) return { files: [], total: 0, truncated: false };
  const maxFiles = opts.maxFiles ?? GREP_MAX_FILES;
  const maxTotal = opts.maxTotal ?? GREP_MAX_TOTAL;
  const maxVisited = opts.maxVisited ?? DEFAULT_MAX_VISITED;
  const includeSet = compileGlobPatterns(opts.include);
  const excludeSet = compileGlobPatterns(opts.exclude);

  // 内容判定统一走正则（字面量查询也已转义为正则），g 才能在一行内找多处。
  const flags = opts.caseSensitive ? "g" : "gi";
  const lineRe =
    opts.regex
      ? (() => {
          try {
            return new RegExp(wrapWholeWord(needle, opts.wholeWord), flags);
          } catch {
            return new RegExp(wrapWholeWord(escapeRegex(needle), opts.wholeWord), flags);
          }
        })()
      : new RegExp(wrapWholeWord(escapeRegex(needle), opts.wholeWord), flags);

  const files: GrepFileHit[] = [];
  let total = 0;
  let truncated = false;
  let visited = 0;

  const scanFile = async (file: string, rel: string): Promise<void> => {
    try {
      const s = await stat(file);
      if (!s.isFile() || s.size <= 0 || s.size > CONTENT_MAX_BYTES) return;
      const buf = await readFile(file);
      if (buf.subarray(0, Math.min(512, buf.length)).includes(0)) return; // 二进制
      const lines = buf.toString("utf8").split(/\r?\n/);
      const hits: GrepLineHit[] = [];
      for (let i = 0; i < lines.length; i++) {
        lineRe.lastIndex = 0;
        if (!lineRe.test(lines[i])) continue;
        const raw = lines[i];
        hits.push({ ln: i + 1, text: raw.length > GREP_LINE_MAX_CHARS ? `${raw.slice(0, GREP_LINE_MAX_CHARS)}…` : raw });
        if (hits.length >= GREP_MAX_LINES_PER_FILE || total + hits.length >= maxTotal) {
          truncated = true;
          break;
        }
      }
      if (hits.length > 0) {
        files.push({ rel: normalize(rel), hits });
        total += hits.length;
        if (files.length >= maxFiles || total >= maxTotal) truncated = true;
      }
    } catch {
      /* 无权限/读失败的文件跳过 */
    }
  };

  const walk = async (dir: string): Promise<void> => {
    if (truncated) return;
    const level = await opendir(dir).catch(() => undefined);
    if (level === undefined) return;
    for await (const dirent of level) {
      visited += 1;
      if (visited > maxVisited) {
        truncated = true;
        return;
      }
      const rel = join(relative(root, dir), dirent.name);
      if (dirent.isDirectory()) {
        if (dirent.isSymbolicLink() || SEARCH_SKIP_DIRS.has(dirent.name.toLowerCase())) continue;
        await walk(join(dir, dirent.name));
        if (truncated) return;
      } else if (dirent.isFile() && !dirent.isSymbolicLink()) {
        if ((includeSet && !matchesGlob(includeSet, rel)) || (excludeSet && matchesGlob(excludeSet, rel))) continue;
        await scanFile(join(dir, dirent.name), rel);
        if (truncated) return;
      }
    }
  };

  await walk(root);
  files.sort((a, b) => (a.rel < b.rel ? -1 : 1));
  return { files, total, truncated };
}

/* ---------- 项目文件索引（「快速打开」用） ---------- */

export interface FileIndexOutcome {
  /** 文件相对路径列表（'/' 分隔，已按字典序排序）。 */
  files: string[];
  /** 超出行数 / 访问数预算而提前停止时为 true。 */
  truncated: boolean;
}

/** 索引文件数上限：索引只服务于「按名字找文件」，不需要把超大仓库全量塞给前端。 */
const INDEX_MAX_FILES = 8000;
/** 索引遍历的目录项总数预算。 */
const INDEX_MAX_VISITED = 120_000;

/**
 * 列出 `root` 下全部**文件**的相对路径（'/' 分隔），供前端「快速打开」做本地模糊匹配。
 *
 * 与 `searchFiles` 同一套遍历约束：跳过噪声目录（复用 `SEARCH_SKIP_DIRS`）、
 * 遇到符号链接一律不入索引（既防循环，也避免同一文件重复出现）、预算用尽即截断。
 * 只做一次遍历，前端拿到索引后按需在本地过滤，不按每次按键回打 host。
 */
export async function listProjectFiles(
  root: string,
  opts: { maxFiles?: number; maxVisited?: number } = {},
): Promise<FileIndexOutcome> {
  const maxFiles = opts.maxFiles ?? INDEX_MAX_FILES;
  const maxVisited = opts.maxVisited ?? INDEX_MAX_VISITED;
  const files: string[] = [];
  let visited = 0;
  let truncated = false;

  const walk = async (dir: string): Promise<void> => {
    if (truncated) return;
    const level = await opendir(dir).catch(() => undefined);
    if (level === undefined) return; // 无权限目录跳过，不整树失败
    for await (const dirent of level) {
      visited += 1;
      if (visited > maxVisited) {
        truncated = true;
        return;
      }
      if (dirent.isSymbolicLink()) continue; // 链接不入索引：防循环、防重复
      if (dirent.isFile()) {
        files.push(normalize(join(relative(root, dir), dirent.name)));
        if (files.length >= maxFiles) {
          truncated = true;
          return;
        }
        continue;
      }
      if (dirent.isDirectory()) {
        if (SEARCH_SKIP_DIRS.has(dirent.name.toLowerCase())) continue;
        await walk(join(dir, dirent.name));
        if (truncated) return;
      }
    }
  };

  await walk(root);
  files.sort();
  return { files, truncated };
}