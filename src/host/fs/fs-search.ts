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
    write: (absPath: string, content: string) => Promise<void>;
  },
): Promise<ReplaceOutcome> {
  const needle = query.trim();
  if (needle === "") return { changed: [], files: 0, replacements: 0, truncated: false };

  const maxVisited = opts.maxVisited ?? DEFAULT_MAX_VISITED;
  const maxContentReads = opts.maxContentReads ?? DEFAULT_MAX_CONTENT_READS;
  const maxFiles = opts.maxFiles ?? REPLACE_MAX_FILES;

  // 匹配正则：regex 模式直接构造（非法正则退化为转义字面量）；字面量模式转义。
  // 替换统一用函数式 replacer，replacement 永远按字面量插入。
  let re: RegExp;
  if (opts.regex) {
    try {
      re = new RegExp(needle, opts.caseSensitive ? "g" : "gi");
    } catch {
      re = new RegExp(escapeRegex(needle), opts.caseSensitive ? "g" : "gi");
    }
  } else {
    re = new RegExp(escapeRegex(needle), opts.caseSensitive ? "g" : "gi");
  }
  const replacer = () => replacement;

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
        contentReads += 1;
        const abs = join(dir, dirent.name);
        const file = await tryReplaceFile(abs, re, replacer, opts.write).catch(() => null);
        if (file !== null) {
          changed.push(file);
          replacements += file.count;
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

/** 单文件替换：大小/二进制校验后整体替换；无变化返回 null，否则返回相对路径与替换次数。 */
async function tryReplaceFile(
  abs: string,
  re: RegExp,
  replacer: () => string,
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
  const next = text.replace(re, () => {
    count += 1;
    return replacer();
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