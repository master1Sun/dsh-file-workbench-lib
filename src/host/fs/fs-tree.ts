/**
 * fs-tree + path-security —— 文件浏览的服务端核心。
 *
 * 从 dsh-better-sidebar 的 `src/fs-tree.ts` / `src/path-security.ts` 复刻：
 *  - listDirectory：opendir 流式列单层，目录优先 + 大小写不敏感排序，隐藏项置灰；
 *  - probeSymlinkTargets：软链接 stat 一次，暴露目标类型，失效链接标记 broken；
 *  - requireAbsolute / isWithin / ensureWsPath：路径归一化与工作区 containment 守卫。
 *
 * 相对原插件的主要简化：本插件面向「用户自选单个根目录」的工作区模型——每次会话
 * 通过 /api/dsh-file-workbench/root 设定 root，之后所有读写路径都必须在 root 之内
 * （符号链接解析后仍是），杜绝越权与路径穿越。
 */
import { basename, dirname, isAbsolute, join, relative, resolve, sep } from "node:path";
import { existsSync } from "node:fs";
import { opendir, realpath, stat } from "node:fs/promises";
import { homedir } from "node:os";
import { displayName, winVolumes } from "./fs-drives.js";

/** “我的电脑”顶层入口项（host 侧形状，与 shared/types 一致）。 */
export interface MyComputerItem {
  type:
    | "drive"
    | "home"
    | "desktop"
    | "download"
    | "documents"
    | "pictures"
    | "music"
    | "videos"
    | "gallery"
    | "workspace"
    | "recycle";
  name: string;
  path: string;
  /**
   * 磁盘卷标原始值（仅 type=drive 且能读到时给出，如 `系统`、`Data`）。
   *
   * 与 `name` 分开：name 是 host 拼好的兜底展示名（中文），客户端按本地化规则
   * 优先用 `label` 拼 `卷标 (X:)`，读不到卷标才回退本地化的「本地磁盘 (X:)」。
   */
  label?: string;
}

/**
 * 枚举“我的电脑”顶层入口：Windows 磁盘盘符 + 快捷访问（主目录/下载/文档/图片/视频）+ 工作区。
 * 枚举仅做存在性探测（不保证可读，读取失败由浏览层兜底）。
 *
 * 盘符展示名取**系统真实卷标**（win32 走 Win32_LogicalDisk，带 TTL 缓存，失败降级），
 * 因此有卷标的盘显示 `系统 (C:)` 而非一律 `本地磁盘 (C:)`。
 */
export async function listMyComputer(workspaceRoot?: string): Promise<MyComputerItem[]> {
  const items: MyComputerItem[] = [];
  if (process.platform === "win32") {
    const volumes = await winVolumes();
    for (let c = 65; c <= 90; c += 1) {
      const letter = String.fromCharCode(c);
      const root = `${letter}:\\`;
      try {
        if (!existsSync(root)) continue;
        const label = volumes.get(letter)?.label ?? "";
        items.push({
          type: "drive",
          name: displayName(letter, label),
          path: root,
          ...(label ? { label } : {}),
        });
      } catch {
        /* 权限等异常跳过该盘符 */
      }
    }
  } else {
    items.push({ type: "drive", name: "根目录", path: "/" });
  }

  // —— 主目录（Home）与快速访问（桌面/下载/文档/图片/音乐/视频）——
  const home = homedir();
  if (home) items.push({ type: "home", name: "主目录 (Home)", path: home });

  const quick = [
    ["desktop", "桌面", "Desktop"],
    ["download", "下载", "Downloads"],
    ["documents", "文档", "Documents"],
    ["pictures", "图片", "Pictures"],
    ["music", "音乐", "Music"],
    ["videos", "视频", "Videos"],
  ] as const;
  for (const [type, name, dir] of quick) {
    const p = join(home ?? "", dir);
    if (p && existsSync(p)) items.push({ type, name, path: p });
  }

  // 图库（Gallery）：聚合「图片」目录（Win11 侧栏「图库」节点）。
  const picturesPath = join(home ?? "", "Pictures");
  if (picturesPath && existsSync(picturesPath)) items.push({ type: "gallery", name: "图库", path: picturesPath });

  if (workspaceRoot) items.push({ type: "workspace", name: "工作区", path: workspaceRoot });

  // 系统回收站入口（虚拟项：path 留空，由回收站视图处理，不做文件系统浏览；win32/POSIX 均有）。
  items.push({ type: "recycle", name: "回收站", path: "" });

  return items;
}

/** 统一的业务错误：带 wire code 与 HTTP 状态。 */
export class FsError extends Error {
  constructor(
    readonly code: "fs-error" | "forbidden" | "bad-request" | "not-found" | "too-large" | "not-implemented",
    message: string,
    readonly status: number,
  ) {
    super(message);
    this.name = "FsError";
  }
}

function messageOf(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

/** 目录优先、大小写不敏感的名称排序（VSCode explorer 顺序）。 */
export function compareEntries(a: { isDir: boolean; name: string }, b: { isDir: boolean; name: string }): number {
  if (a.isDir !== b.isDir) return a.isDir ? -1 : 1;
  return a.name.localeCompare(b.name, undefined, { sensitivity: "base" });
}

export interface FsEntryRow {
  name: string;
  path: string;
  isDir: boolean;
  isSymlink: boolean;
  broken: boolean;
  hidden: boolean;
  /** 字节大小（详情视图用；listDirectory 不填，由 attachDetails 填充）。 */
  size?: number;
  /** 修改时间毫秒戳（详情视图用）。 */
  mtime?: number;
}

/** 单层目录列表。 */
export interface FsListing {
  path: string;
  root: string;
  crumbs: { name: string; path: string; hidden: boolean }[];
  entries: FsEntryRow[];
  truncated: boolean;
  /** 目录可访问但不可遍历（权限/重解析点等）时的提示文案；此时 entries 为空。 */
  inaccessible?: string;
}

/** 符号链接目标探测的并发上限。 */
const SYMLINK_PROBE_CONCURRENCY = 32;

async function probeSymlinkTargets(rows: FsEntryRow[]): Promise<void> {
  let next = 0;
  const workers = Array.from({ length: Math.min(SYMLINK_PROBE_CONCURRENCY, rows.length) }, async () => {
    for (;;) {
      const index = next;
      next += 1;
      if (index >= rows.length) return;
      const row = rows[index];
      if (!row.isSymlink) continue;
      const info = await stat(row.path).catch(() => undefined);
      if (info !== undefined) {
        row.isDir = info.isDirectory();
      } else {
        row.broken = true;
      }
    }
  });
  await Promise.all(workers);
}

/** 目录不可遍历的错误码：权限不足或指向非目录/失效重解析点等，做降级而非整页报错。 */
const INACCESSIBLE_CODES = new Set(["EPERM", "EACCES", "ENOTDIR", "ELOOP"]);

/**
 * 单层目录列表：以 opendir 流式读取，目录优先排序，随符号链接目标类型修正 isDir。
 *
 * @param path 绝对目录路径。
 * @param maxEntries 单层行数上限（超出置 truncated）。
 */
export async function listDirectory(path: string, maxEntries = 1_000): Promise<FsListing> {
  const level = await opendir(path).catch((error) => {
    // 只读遍历被拒（受保护目录 / OneDrive 重解析点等）时降级为空目录 + 提示，避免整页报错。
    if (INACCESSIBLE_CODES.has((error as NodeJS.ErrnoException).code ?? "")) {
      return null;
    }
    throw new FsError("fs-error", `cannot list "${path}": ${messageOf(error)}`, 400);
  });
  if (level === null) {
    return {
      path,
      root: "",
      crumbs: [],
      entries: [],
      truncated: false,
      inaccessible: `无法访问此文件夹（可能受系统保护或权限不足）: ${path}`,
    };
  }
  const rows: FsEntryRow[] = [];
  let overflow = 0;
  for await (const dirent of level) {
    if (rows.length >= maxEntries) {
      overflow += 1;
      continue;
    }
    rows.push({
      name: dirent.name,
      path: join(path, dirent.name),
      isDir: dirent.isDirectory(),
      isSymlink: dirent.isSymbolicLink(),
      broken: false,
      hidden: dirent.name.startsWith("."),
    });
  }
  await probeSymlinkTargets(rows);
  rows.sort(compareEntries);
  return {
    path,
    root: "",
    crumbs: [],
    entries: rows,
    truncated: overflow > 0,
  };
}

/** stat 元数据填充的并发上限（详情视图）。 */
const DETAIL_CONCURRENCY = 32;

/** 为条目补充 size/mtime（详情视图用）。失败条目保留 undefined，由前端降级展示。 */
export async function attachDetails(rows: FsEntryRow[]): Promise<void> {
  let next = 0;
  const workers = Array.from({ length: Math.min(DETAIL_CONCURRENCY, rows.length) }, async () => {
    for (;;) {
      const index = next;
      next += 1;
      if (index >= rows.length) return;
      const row = rows[index];
      try {
        const info = await stat(row.path);
        row.size = info.size;
        row.mtime = info.mtimeMs;
      } catch {
        /* 无权限/消失的条目，界面回退展示占位 */
      }
    }
  });
  await Promise.all(workers);
}

/** 把展示根与当前路径组装成带面包屑的 listing 外壳。 */
export function withListingContext(path: string, root: string, listing: FsListing): FsListing {
  listing.path = path;
  listing.root = root;
  listing.crumbs = crumbsOf(path, root);
  return listing;
}

/** 生成 root → path 的面包屑路径段。 */
export function crumbsOf(path: string, root: string): { name: string; path: string; hidden: boolean }[] {
  if (!isWithin(root, path)) return [{ name: root, path: root, hidden: false }];
  const out: { name: string; path: string; hidden: boolean }[] = [];
  let segs = relative(root, path).split(sep).filter(Boolean);
  // 当前 path 即 root
  if (segs.length === 0) return [{ name: rootLabel(root), path: root, hidden: false }];
  let cur = root;
  out.push({ name: rootLabel(cur), path: cur, hidden: false });
  for (const s of segs) {
    cur = join(cur, s);
    out.push({ name: s, path: cur, hidden: s.startsWith(".") });
  }
  return out;
}

/** 根路径的最后一段（文件系统根则返回完整路径）。 */
export function rootLabel(path: string): string {
  const base = basename(path);
  return base !== "" ? base : path;
}

/** 某路径的父路径；文件系统根返回 undefined。 */
export function parentOf(path: string): string | undefined {
  const parent = dirname(path);
  return parent === path ? undefined : parent;
}

/** 返回一个在 destDir 下不冲突的路径：同名则追加 " (n)"（Windows 风格）。 */
export async function uniquePath(destDir: string, name: string): Promise<string> {
  const extIndex = name.lastIndexOf(".");
  const hasExt = extIndex > 0;
  const stem = hasExt ? name.slice(0, extIndex) : name;
  const ext = hasExt ? name.slice(extIndex) : "";
  let candidate = join(destDir, name);
  let n = 2;
  for (;;) {
    try {
      await stat(candidate);
    } catch {
      return candidate;
    }
    candidate = join(destDir, `${stem} (${n})${ext}`);
    n += 1;
  }
}

/**
 * stat 详情（属性对话框用）。
 *
 * ⚠️ 目标不存在时**必须**抛 FsError(404) 而不是把裸 ENOENT 放出去：本接口除了「属性」对话框
 * 还被当作**存在性探测**使用（另存为在落盘前判断目标是否已存在）。裸错误会被统一错误层
 * 归入 500，前端表现为「服务器错误」——而这只是「目标不存在」这一正常结果。
 */
export async function statDetail(target: string): Promise<{ name: string; path: string; isDir: boolean; size: number; mtime: number; ext: string }> {
  const info = await stat(target).catch((error: unknown) => {
    const code = (error as NodeJS.ErrnoException).code;
    if (code === "ENOENT") throw new FsError("not-found", `"${target}" does not exist`, 404);
    throw new FsError("fs-error", `cannot stat "${target}": ${messageOf(error)}`, 400);
  });
  let size = info.size;
  if (info.isDirectory()) {
    size = await countDirSize(target);
  }
  return {
    name: basename(target),
    path: target,
    isDir: info.isDirectory(),
    size,
    mtime: info.mtimeMs,
    ext: info.isDirectory() ? "" : extOf(target),
  };
}

/** 目录总字节数（含子目录；遇无权限条目跳过）。 */
async function countDirSize(dir: string): Promise<number> {
  let total = 0;
  const walk = async (base: string): Promise<void> => {
    const entries = await opendir(base).catch(() => null);
    if (!entries) return;
    for await (const d of entries) {
      try {
        const info = await stat(join(base, d.name));
        if (info.isDirectory()) await walk(join(base, d.name));
        else total += info.size;
      } catch {
        /* 无权限跳过 */
      }
    }
  };
  await walk(dir);
  return total;
}

function extOf(path: string): string {
  const base = basename(path);
  const i = base.lastIndexOf(".");
  return i > 0 ? base.slice(i) : "";
}

/** 归一化绝对路径，否则抛 fs-error。 */
export function requireAbsolute(path: string): string {
  if (!isAbsolute(path)) throw new FsError("bad-request", `"${path}" is not an absolute path`, 400);
  return resolve(path);
}

/**
 * 判断 target 是否位于 base（或等于 base）之内，容忍分隔符形式与（win32）大小写。
 */
export function isWithin(base: string, target: string, platform: NodeJS.Platform = process.platform): boolean {
  const norm = (value: string) => value.replace(/[\\/]+/g, "/").replace(/\/$/, "");
  const b = norm(base);
  const t = norm(target);
  if (platform === "win32") {
    const lb = b.toLowerCase();
    const lt = t.toLowerCase();
    return lt === lb || lt.startsWith(`${lb}/`);
  }
  return t === b || t.startsWith(`${b}/`);
}

async function resolveRealPath(path: string, label: string): Promise<string> {
  try {
    return await realpath(path);
  } catch (error) {
    throw new FsError("fs-error", `cannot resolve ${label} "${path}": ${messageOf(error)}`, 400);
  }
}

function assertWithinWs(root: string, target: string): void {
  if (!isWithin(root, target)) throw new FsError("forbidden", `path "${target}" is outside workspace`, 403);
}

/**
 * 受保护的只读系统目录根：整棵树（含所有子目录）禁止一切写操作，但仍可浏览/打开（只读）。
 * 从系统环境推导（SystemRoot/windir，通常形如 C:\Windows），不写死盘符。
 */
export const PROTECTED_ROOTS: string[] = (() => {
  const sys = (process.env.SystemRoot || process.env.WINDIR || "").trim().replace(/[\\/]+$/, "");
  return sys ? [sys] : [];
})();

/** 判断 target 是否位于任一受保护只读目录树内（win32 大小写不敏感）。 */
export function isProtectedPath(target: string): boolean {
  for (const root of PROTECTED_ROOTS) {
    if (isWithin(root, target)) return true;
  }
  return false;
}

/** 解析一个已存在的目标路径（解符号链接）并确保落在 root 内。 */
export async function ensureWsPath(root: string, target: string): Promise<string> {
  const absolute = requireAbsolute(target);
  const [realRoot, realTarget] = await Promise.all([resolveRealPath(root, "workspace"), resolveRealPath(absolute, "target")]);
  assertWithinWs(realRoot, realTarget);
  return realTarget;
}

/** 解析一个已存在的绝对路径，解符号链接。不限定工作区根（“我的电脑”任意目录可操作）。 */
export async function resolveExisting(path: string, label = "target"): Promise<string> {
  const absolute = requireAbsolute(path);
  return resolveRealPath(absolute, label);
}

/**
 * 校验一个「可能尚未存在」的写入目标，返回从最近已存在祖先重建的规范路径
 * （避免把符号链接残留在写入路径里）。不限定工作区根（“我的电脑”任意目录可写）。
 */
export async function resolveWritePath(target: string, label = "target"): Promise<string> {
  const absolute = requireAbsolute(target);
  let existingPath = absolute;
  const missingSegments: string[] = [];
  for (;;) {
    try {
      const realTarget = await realpath(existingPath);
      return missingSegments.reduce((path, segment) => join(path, segment), realTarget);
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== "ENOENT") {
        throw new FsError("fs-error", `cannot resolve ${label} "${existingPath}": ${messageOf(error)}`, 400);
      }
      const parent = dirname(existingPath);
      if (parent === existingPath) throw new FsError("fs-error", `cannot resolve ${label} "${absolute}"`, 400);
      missingSegments.unshift(basename(existingPath));
      existingPath = parent;
    }
  }
}

/**
 * 校验一个「可能尚未存在」的写入目标，确保其最近的已存在祖先落在 root 之内，
 * 返回从该规范祖先重建的路径（避免把符号链接残留在写入路径里）。
 */
export async function ensureWsWritePath(root: string, target: string): Promise<string> {
  const absolute = requireAbsolute(target);
  const realRoot = await resolveRealPath(root, "workspace");
  let existingPath = absolute;
  const missingSegments: string[] = [];
  for (;;) {
    try {
      const realTarget = await realpath(existingPath);
      assertWithinWs(realRoot, realTarget);
      return missingSegments.reduce((path, segment) => join(path, segment), realTarget);
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== "ENOENT") {
        if (error instanceof FsError) throw error;
        throw new FsError("fs-error", `cannot resolve target "${existingPath}": ${messageOf(error)}`, 400);
      }
      const parent = dirname(existingPath);
      if (parent === existingPath) throw new FsError("fs-error", `cannot resolve target "${absolute}"`, 400);
      missingSegments.unshift(basename(existingPath));
      existingPath = parent;
    }
  }
}