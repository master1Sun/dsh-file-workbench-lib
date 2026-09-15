/**
 * fs-provider —— 连接感知的文件系统抽象层。
 *
 * 设计目标：把「存储后端」（本地 node:fs vs 远端 SFTP）与「路由策略」（根目录守卫 / mtime
 * 冲突检测 / 编码覆盖解析等）解耦。本文件只定义**存储操作**接口与本地实现；路由层
 * （routes-fs.ts）保留策略逻辑，仅把对裸 fs 函数的调用换成 `getFs(ref).<op>(...)`。
 *
 * 本地实现 `LocalFsProvider` **原样委托**现有 fs 模块（fs-tree / fs-read / fs-search /
 * fs-drives / fs-zip / recycle / text-codec），因此本地行为 bit-for-bit 不变。
 *
 * 远端（ssh）实现 `SftpFsProvider` 见 fs-provider-ssh.ts：传输层复用 vendored
 * dsh-ssh（MIT）的 ssh2 客户端碎片（连接池 / known_hosts / SFTP 禁用降级）。
 *
 * 许可声明：SFTP 传输层将轻量复用 dsh-ssh（MIT, Copyright 2026 dsh-ssh）的 ssh2 客户端
 * 碎片，改编代码保留其 MIT 归属声明。
 */
import { type Stats } from "node:fs";
import { mkdir, readFile, rename, stat, writeFile, cp } from "node:fs/promises";
import { existsSync, statSync, createWriteStream } from "node:fs";
import { basename, dirname } from "node:path";

import {
  FsError,
  listDirectory,
  attachDetails,
  parentOf,
  rootLabel,
  crumbsOf,
  statDetail,
  listMyComputer,
  uniquePath,
  resolveExisting,
  resolveWritePath,
  type FsListing,
  type FsEntryRow,
  type MyComputerItem,
} from "./fs-tree.js";
import { saveText } from "./fs-read.js";
import { searchFiles, grepFiles, listProjectFiles, replaceInFiles } from "./fs-search.js";
import { listDrives, type DriveInfo } from "./fs-drives.js";
import { compressTo, extractTo } from "./fs-zip.js";
import { trashPath } from "./recycle.js";
import { decodeText, encodeText, type DecodedText, type EolStyle, type TextEncoding } from "./text-codec.js";
import { spawnOpen } from "../routes/routes-util.js";
import { sftpFsProvider } from "./fs-provider-ssh.js";

/** 路由层实际依赖的 stat 表面（本地返回 node Stats，远端返回同形状 shim）。 */
export interface StatLike {
  isFile(): boolean;
  isDirectory(): boolean;
  size: number;
  mtimeMs: number;
}

/** 面包屑节点（与 routes-fs 使用的形状一致）。 */
export interface Crumb {
  name: string;
  path: string;
  hidden: boolean;
}

/** statDetail 的返回形状。 */
export type StatDetail = Awaited<ReturnType<typeof statDetail>>;

/** 一次请求指向的文件引用：区分连接类型与命名空间内的路径。 */
export interface FileRef {
  /** 连接类型：local=本地 node:fs；ssh=远端 SFTP（hostId 定位连接）。 */
  conn: "local" | "ssh";
  /** conn==="ssh" 时存在的连接标识（对应 ssh-hosts.json 的条目 id）。 */
  hostId?: string;
  /**
   * 该连接命名空间内的路径：
   *  - local：操作系统绝对路径（C:\… / /home/…）；
   *  - ssh：远端绝对路径（如 /home/user/project）。
   */
  path: string;
}

/** 把任意字符串解析为 FileRef。本地路径原样透传；`ssh://<hostId>/<remotePath>` 解析为远端引用。 */
export function parseRef(raw: string): FileRef {
  if (raw.startsWith("ssh://")) {
    const rest = raw.slice("ssh://".length);
    const slash = rest.indexOf("/");
    if (slash === -1) {
      return { conn: "ssh", hostId: rest || undefined, path: "/" };
    }
    const hostId = rest.slice(0, slash) || undefined;
    const path = rest.slice(slash) || "/";
    return { conn: "ssh", hostId, path: path === "/" ? "/" : path };
  }
  /*
   * 兜底：被 win32 路径语义「压扁」过的远端引用（`ssh://<id>/<remote>` → `C:\ssh:\<id>\<remote>`）。
   * 个别前端分支仍会拿本地分隔符拼远端路径（如侧栏新建），这类字符串既不是合法本地路径
   * 也不是合法引用，落在哪一侧都是 ENOENT；这里还原成引用串，语义与用户意图一致。
   */
  const squashed = /^[A-Za-z]:[\\/]*ssh:[\\/]*([^\\/]+)([\\/].*)?$/.exec(raw);
  if (squashed) {
    const hostId = squashed[1] || undefined;
    const rest = (squashed[2] ?? "").replace(/\\/g, "/");
    return { conn: "ssh", hostId, path: rest || "/" };
  }
  return { conn: "local", path: raw };
}

/** FileRef 的规范字符串形式（与 parseRef 互逆，本地引用返回原路径）。 */
export function formatRef(ref: FileRef): string {
  if (ref.conn === "ssh") return `ssh://${ref.hostId ?? ""}${ref.path}`;
  return ref.path;
}

/**
 * 文件系统提供方：连接感知的存储操作集合。
 * 仅包含「存储后端」差异相关的操作；路由策略（根守卫 / mtime 冲突 / 编码覆盖）留在 routes 层。
 */
export interface FsProvider {
  // —— 列目录 / 属性 / 面包屑 ——
  listDirectory(path: string, maxEntries?: number): Promise<FsListing>;
  attachDetails(rows: FsEntryRow[]): Promise<void>;
  parentOf(path: string): string | undefined;
  rootLabel(path: string): string;
  crumbsOf(path: string, root: string): Crumb[];
  statDetail(target: string): Promise<StatDetail>;
  listMyComputer(workspaceRoot?: string): Promise<MyComputerItem[]>;
  listDrives(): Promise<DriveInfo[]>;

  // —— 字节读写 / stat / 存在性 / 外部打开 ——
  readFileBytes(target: string): Promise<Buffer>;
  writeFileBytes(target: string, data: Uint8Array): Promise<void>;
  stat(target: string): Promise<StatLike>;
  exists(target: string): boolean;
  openExternal(target: string, isDir: boolean): Promise<void>;

  // —— 增删改 ——
  mkdir(path: string): Promise<void>;
  rename(from: string, to: string): Promise<void>;
  remove(target: string): Promise<string>;
  touch(path: string): Promise<void>;
  copy(src: string, destDir: string): Promise<string>;
  saveText(root: string, target: string, content: string | Uint8Array): Promise<string>;

  // —— 搜索 / 索引 / 批量替换 ——
  searchFiles(base: string, query: string, opts?: Parameters<typeof searchFiles>[2]): Promise<Awaited<ReturnType<typeof searchFiles>>>;
  grepFiles(root: string, query: string, opts?: Parameters<typeof grepFiles>[2]): Promise<Awaited<ReturnType<typeof grepFiles>>>;
  listProjectFiles(root: string, opts?: Parameters<typeof listProjectFiles>[1]): Promise<Awaited<ReturnType<typeof listProjectFiles>>>;
  replaceInFiles(
    root: string,
    query: string,
    replacement: string,
    opts: Parameters<typeof replaceInFiles>[3],
  ): Promise<Awaited<ReturnType<typeof replaceInFiles>>>;

  // —— 压缩 / 解压 ——
  compressTo(src: string, destZip: string): Promise<string>;
  extractTo(zip: string, destDir: string): Promise<number>;

  // —— 路径解析（符号链接 / 唯一名） ——
  resolveExisting(path: string): Promise<string>;
  resolveWritePath(path: string): Promise<string>;
  uniquePath(dir: string, name: string): Promise<string>;
}

/** 本地实现：全部委托现有 fs 模块，行为与原 routes-fs.ts 完全一致。 */
export const localFsProvider: FsProvider = {
  listDirectory: (path, maxEntries) => listDirectory(path, maxEntries),
  attachDetails: (rows) => attachDetails(rows),
  parentOf: (path) => parentOf(path),
  rootLabel: (path) => rootLabel(path),
  crumbsOf: (path, root) => crumbsOf(path, root),
  statDetail: (target) => statDetail(target),
  listMyComputer: (workspaceRoot) => listMyComputer(workspaceRoot),
  listDrives: () => listDrives(),

  readFileBytes: (target) => readFile(target),
  writeFileBytes: async (target, data) => {
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, data);
  },
  stat: (target) => stat(target),
  exists: (target) => existsSync(target) && statSync(target).isFile(),
  openExternal: (target, isDir) => spawnOpen(target, isDir),

  mkdir: async (path) => {
    await mkdir(path, { recursive: true });
  },
  rename: (from, to) => rename(from, to),
  remove: (target) => trashPath(target),
  touch: async (path) => {
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, "", "utf8");
  },
  copy: async (src, destDir) => {
    await mkdir(destDir, { recursive: true });
    const dest = await uniquePath(destDir, basename(src));
    await cp(src, dest, { recursive: true, force: false, errorOnExist: false });
    return dest;
  },
  saveText: (root, target, content) => saveText(root, target, content),

  searchFiles: (base, query, opts) => searchFiles(base, query, opts),
  grepFiles: (root, query, opts) => grepFiles(root, query, opts),
  listProjectFiles: (root, opts) => listProjectFiles(root, opts),
  replaceInFiles: (root, query, replacement, opts) => replaceInFiles(root, query, replacement, opts),

  compressTo: (src, destZip) => compressTo(src, destZip),
  extractTo: (zip, destDir) => extractTo(zip, destDir),

  resolveExisting: (path) => resolveExisting(path),
  resolveWritePath: (path) => resolveWritePath(path),
  uniquePath: (dir, name) => uniquePath(dir, name),
};

/**
 * 取对应连接的文件系统提供方。
 * - local：localFsProvider（与改造前逐字节一致）；
 * - ssh：sftpFsProvider（vendored dsh-ssh 传输层 + FsProvider 语义映射）。
 */
export function getFs(ref: FileRef): FsProvider {
  if (ref.conn === "local") return localFsProvider;
  return sftpFsProvider;
}

/** 重新导出编码辅助（连接无关，路由层照常使用）。 */
export { decodeText, encodeText };
export type { DecodedText, EolStyle, TextEncoding };
export { FsError };
export type { FsListing, FsEntryRow, MyComputerItem, DriveInfo, Stats };

/** 供上传流式写入时复用：本地用 node 可写流；SFTP 由 SftpFsProvider 另实现。 */
export function createLocalWriteStream(target: string) {
  return createWriteStream(target);
}
