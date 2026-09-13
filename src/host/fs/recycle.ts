/**
 * 系统回收站操作：Windows 走 PowerShell + Shell.Application COM；POSIX（Linux/macOS）
 * 走 freedesktop.org XDG Trash 规范。5 个导出均按平台分发。
 *
 * -----------------------------------------------
 * Windows：
 *  统一用 -EncodedCommand 方式传给 powershell，规避脚本/路径转义与引号问题。
 *   列出：NameSpace(0xA).Items() 遍历，用 ExtendedProperty 取系统属性
 *         （System.Recycle.DeletedFrom / DateDeleted / System.Size）；
 *   返回：用 System.Recycle.DeletedFrom 拿到“删除前原路径”，用于恢复/展示。
 *   恢复：匹配回收站内 fullPath，枚举 item.Verbs() 触发「还原 / Restore」。
 *   彻底删除：直接删除 $R...（数据）与其对应 $I...（元数据）。
 *   清空：Clear-RecycleBin -Force（异步执行，前端轮询计数展示进度）。
 * -----------------------------------------------
 * POSIX（XDG Trash）：
 *  元数据存 <Trash>/info/<filespec>.trashinfo（含 Path= 原路径 + DeletionDate=），
 *  数据存 <Trash>/files/<filespec>（文件或目录）。Trash 根目录默认为
 *  $XDG_DATA_HOME/Trash，未设置时取 ~/.local/share/Trash。
 *  fullPath 在 POSIX 下为 <Trash>/files/<filespec>，可作为还原/删除的稳定 key
 *  （同时定位数据文件与 <filespec>.trashinfo 元数据）。
 */
import { execFile } from "node:child_process";
import { existsSync } from "node:fs";
import { homedir } from "node:os";
import { basename, dirname, join } from "node:path";
import {
  cp,
  mkdir,
  readFile,
  readdir,
  rename,
  rm,
  stat,
  writeFile,
} from "node:fs/promises";
import { FsError } from "./fs-tree.js";
import type { RecycleEntry } from "../../shared/types.js";

const IS_WIN = process.platform === "win32";

/* ------------------------------------------------------------------ */
/* ── Windows：PowerShell + Shell.Application COM ───────────────────── */
/* ------------------------------------------------------------------ */

/** 以 UTF-16LE base64 -EncodedCommand 执行一段 PowerShell，返回 stdout。
 *  脚本开头强制 stdout 以 UTF-8（无 BOM）输出，避免中文经系统代码页捕获后乱码。 */
function ps(script: string): Promise<string> {
  const full =
    "[Console]::OutputEncoding = New-Object System.Text.UTF8Encoding($false)\n" +
    "$OutputEncoding = New-Object System.Text.UTF8Encoding($false)\n" +
    script;
  const encoded = Buffer.from(full, "utf16le").toString("base64");
  return new Promise((resolve, reject) => {
    execFile(
      "powershell.exe",
      ["-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass", "-EncodedCommand", encoded],
      { maxBuffer: 64 * 1024 * 1024, windowsHide: true },
      (err, stdout, stderr) => {
        if (err) reject(new Error(stderr.trim() || err.message));
        else resolve(stdout);
      },
    );
  });
}

/** 把路径安全嵌入 PowerShell 单引号字符串（单引号翻倍转义）。 */
function qs(p: string): string {
  return `'${p.replace(/'/g, "''")}'`;
}

/** 列出 Windows 系统回收站全部条目。 */
async function winListRecycleItems(): Promise<RecycleEntry[]> {
  const script = `
$sh = New-Object -ComObject Shell.Application
$bin = $sh.NameSpace(0xA)
$out = New-Object System.Collections.Generic.List[object]
foreach ($it in $bin.Items()) {
  $del = $it.ExtendedProperty("System.Recycle.DeletedFrom")
  $size = $it.ExtendedProperty("System.Size")
  $date = $it.ExtendedProperty("System.Recycle.DateDeleted")
  [void]$out.Add([PSCustomObject]@{
    name = [string]$it.Name
    fullPath = [string]$it.Path
    isDir = [bool]$it.IsFolder
    size = if ($size -eq $null) { [long]0 } else { [long]$size }
    dateDeleted = if ($date -eq $null) { "" } else { [string]$date }
    originalPath = if ($del -eq $null) { "" } else { [string]$del }
  })
}
if ($out.Count -eq 0) { '[]' } else { $out | ConvertTo-Json -Compress -Depth 3 }
`;
  const stdout = await ps(script);
  try {
    return (JSON.parse(stdout || "[]") as RecycleEntry[]) ?? [];
  } catch {
    return [];
  }
}

/** Windows 系统回收站当前条目总数（供清空进度轮询）。 */
async function winRecycleCount(): Promise<number> {
  const script = `
$sh = New-Object -ComObject Shell.Application
$bin = $sh.NameSpace(0xA)
[int64]$bin.Items().Count
`;
  const n = Number((await ps(script)).trim());
  return Number.isFinite(n) ? n : 0;
}

/** Windows 还原（恢复到删除前的原路径）。 */
async function winRestoreRecycleItem(fullPath: string): Promise<void> {
  const script = `
$sh = New-Object -ComObject Shell.Application
$bin = $sh.NameSpace(0xA)
$target = ${qs(fullPath)}
$done = $false
foreach ($it in $bin.Items()) {
  if ([string]$it.Path -eq $target) {
    foreach ($v in $it.Verbs()) {
      $n = $v.Name.ToLowerInvariant()
      if ($n -match 'restore' -or $n -match '^还原') {
        try { $v.DoIt(); $done = $true } catch { }
        break
      }
    }
    break
  }
}
if (-not $done) { throw "restore failed or item not found: $target" }
`;
  await ps(script);
}

/** Windows 彻底删除（移除 $R 数据与其对应 $I 元数据，不可恢复）。 */
async function winDeleteRecycleItem(fullPath: string): Promise<void> {
  const script = `
$target = ${qs(fullPath)}
$dir = Split-Path -Parent $target
$leaf = Split-Path -Leaf $target
if ($leaf -match '^\\$R') {
  $iLeaf = '$I' + $leaf.Substring(2)
  $iFull = Join-Path $dir $iLeaf
  if (Test-Path -LiteralPath $iFull) {
    Remove-Item -LiteralPath $iFull -Recurse -Force -ErrorAction SilentlyContinue
  }
}
if (Test-Path -LiteralPath $target) {
  Remove-Item -LiteralPath $target -Recurse -Force -ErrorAction Stop
}
`;
  await ps(script);
}

/** Windows 清空回收站（异步触发，立即返回；前端轮询 recycleCount 展示进度）。 */
function winEmptyRecycle(): void {
  const script = `Clear-RecycleBin -Force -ErrorAction SilentlyContinue`;
  const encoded = Buffer.from(script, "utf16le").toString("base64");
  const child = execFile(
    "powershell.exe",
    ["-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass", "-EncodedCommand", encoded],
    { windowsHide: true },
    () => {
      /* 忽略；由前端轮询计数判断完成 */
    },
  );
  // 避免等待句柄：unref 让进程可在宿主退出时结束。
  child.unref();
}

/* ------------------------------------------------------------------ */
/* ── POSIX：freedesktop.org XDG Trash ─────────────────────────────── */
/* ------------------------------------------------------------------ */

/** XDG Trash 目录布局：{ root, info, files }。 */
function trashDirs(): { root: string; info: string; files: string } {
  const xdg = (process.env.XDG_DATA_HOME || "").trim();
  const base = xdg || join(homedir(), ".local", "share");
  const root = join(base, "Trash");
  return { root, info: join(root, "info"), files: join(root, "files") };
}

/**
 * 解码 .trashinfo 的 Path= 值：规范上为 URL 编码，但很多实现写原样；仅当含 "%"
 * 时尝试解码，失败回退原值；同时去掉 CRLF 行尾的 \r。
 */
function decodePath(raw: string): string {
  const value = raw.replace(/\r$/, "");
  if (value.includes("%")) {
    try {
      return decodeURIComponent(value);
    } catch {
      /* 非法转义序列：按原样处理 */
    }
  }
  return value;
}

/** info 文件名 → 对应的 files 数据文件 basename（.trashinfo 尾部 8 字符）。 */
function filespecOfInfo(infoName: string): string {
  return infoName.slice(0, infoName.length - ".trashinfo".length);
}

/** 解析单个 .trashinfo 文本 → { originalPath, dateDeleted }。 */
function parseTrashInfo(text: string): { originalPath: string; dateDeleted: string } {
  let path = "";
  let date = "";
  for (const line of text.split(/\r?\n/)) {
    if (line.startsWith("Path=")) path = line.slice("Path=".length);
    else if (line.startsWith("DeletionDate=")) date = line.slice("DeletionDate=".length).trim();
  }
  return { originalPath: decodePath(path), dateDeleted: date };
}

/** 列出 POSIX（XDG Trash）全部条目。 */
async function posixListRecycleItems(): Promise<RecycleEntry[]> {
  const { info, files } = trashDirs();
  const names = await readdir(info).catch(() => [] as string[]);
  const items: RecycleEntry[] = [];
  for (const n of names) {
    if (!n.endsWith(".trashinfo")) continue;
    const fileSpec = filespecOfInfo(n);
    const dataPath = join(files, fileSpec);
    const text = await readFile(join(info, n), "utf8").catch(() => "");
    const { originalPath, dateDeleted } = parseTrashInfo(text);
    if (!originalPath) continue; // 元数据损坏：跳过
    const s = await stat(dataPath).catch(() => undefined);
    if (!s) continue; // 悬空元数据：对应数据文件缺失，跳过
    items.push({
      name: fileSpec,
      fullPath: dataPath,
      isDir: s.isDirectory(),
      size: s.isDirectory() ? 0 : s.size,
      dateDeleted,
      originalPath,
    });
  }
  return items.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
}

/** POSIX 回收站条目数（info/*.trashinfo 数量，免 stat）。 */
async function posixRecycleCount(): Promise<number> {
  const { info } = trashDirs();
  const names = await readdir(info).catch(() => [] as string[]);
  return names.filter((n) => n.endsWith(".trashinfo")).length;
}

/** 若 dest 已存在，追加 " (n)" 后缀直到可用。 */
function noCollisionDest(destPath: string): string {
  const dir = dirname(destPath);
  const ext = /(\.[^.]*)$/.exec(basename(destPath))?.[1] ?? "";
  const stem = ext ? basename(destPath).slice(0, -ext.length) : basename(destPath);
  let candidate = destPath;
  for (let i = 1; ; i += 1) {
    if (!existsSync(candidate)) return candidate;
    candidate = join(dir, `${stem} (${i})${ext}`);
  }
}

/** 还原单个条目：移动到原路径，原路径被占用时追加后缀；跨文件系统回退 copy+rm。 */
async function posixRestoreRecycleItem(fullPath: string): Promise<void> {
  const { info } = trashDirs();
  const fileSpec = basename(fullPath);
  const infoFile = join(info, `${fileSpec}.trashinfo`);
  const text = await readFile(infoFile, "utf8").catch(() => {
    throw new FsError("not-found", `trash info missing: ${infoFile}`, 404);
  });
  const { originalPath } = parseTrashInfo(text);
  if (!originalPath || !originalPath.startsWith("/")) {
    throw new FsError("bad-request", "trash item has no valid original path", 400);
  }
  const dest = noCollisionDest(originalPath);
  await mkdir(dirname(dest), { recursive: true });
  try {
    await rename(fullPath, dest);
  } catch (e) {
    if ((e as NodeJS.ErrnoException).code === "EXDEV") {
      await cp(fullPath, dest, { recursive: true, errorOnExist: false });
      await rm(fullPath, { recursive: true, force: true });
    } else {
      throw e;
    }
  }
  await rm(infoFile, { force: true });
}

/** 彻底删除单个条目（数据与元数据，不可恢复）。 */
async function posixDeleteRecycleItem(fullPath: string): Promise<void> {
  const { info } = trashDirs();
  await rm(fullPath, { recursive: true, force: true });
  await rm(join(info, `${basename(fullPath)}.trashinfo`), { force: true });
}

/** 清空 POSIX 回收站（非阻塞启动，前端轮询 recycleCount 归零）。 */
function posixEmptyRecycle(): void {
  void (async () => {
    const { info, files } = trashDirs();
    const names = await readdir(info).catch(() => [] as string[]);
    for (const n of names) {
      if (!n.endsWith(".trashinfo")) continue;
      const fileSpec = filespecOfInfo(n);
      await rm(join(files, fileSpec), { recursive: true, force: true }).catch(() => undefined);
      await rm(join(info, n), { force: true }).catch(() => undefined);
    }
  })();
}

/**
 * Windows 将文件/目录移入系统回收站（SendToRecycleBin）。
 * 返回回收站内数据路径（UI 用）；PowerShell 删除成功无输出时退回原路径。
 */
async function winTrashPath(path: string): Promise<string> {
  const script = `
Add-Type -AssemblyName Microsoft.VisualBasic
$path = ${qs(path)}
if (Test-Path -LiteralPath $path -PathType Container) {
  [Microsoft.VisualBasic.FileIO.FileSystem]::DeleteDirectory($path, 'OnlyErrorDialogs', 'SendToRecycleBin')
} else {
  [Microsoft.VisualBasic.FileIO.FileSystem]::DeleteFile($path, 'OnlyErrorDialogs', 'SendToRecycleBin')
}
Write-Output $path
`;
  const stdout = await ps(script);
  return stdout.trim() || path;
}

/**
 * POSIX（XDG Trash）将文件/目录移入回收站：
 * 数据移到 <Trash>/files/<filespec>，元数据写 <Trash>/info/<filespec>.trashinfo
 * （含 Path= 原路径 + DeletionDate=）。返回回收站内数据路径。
 */
async function posixTrashPath(path: string): Promise<string> {
  const { files, info } = trashDirs();
  await mkdir(files, { recursive: true });
  await mkdir(info, { recursive: true });
  const dest = noCollisionDest(join(files, basename(path)));
  await stat(path);
  try {
    await rename(path, dest);
  } catch (e) {
    if ((e as NodeJS.ErrnoException).code === "EXDEV") {
      await cp(path, dest, { recursive: true, errorOnExist: false });
      await rm(path, { recursive: true, force: true });
    } else {
      throw e;
    }
  }
  await writeFile(
    join(info, `${basename(dest)}.trashinfo`),
    `[Trash Info]\nPath=${path}\nDeletionDate=${new Date().toISOString()}\n`,
    "utf8",
  );
  return dest;
}

/* ------------------------------------------------------------------ */
/* ── 平台分发导出 ──────────────────────────────────────────────────── */
/* ------------------------------------------------------------------ */

/** 列出系统回收站全部条目。 */
export async function listRecycleItems(): Promise<RecycleEntry[]> {
  return IS_WIN ? winListRecycleItems() : posixListRecycleItems();
}

/** 将文件/目录移入系统回收站，返回回收站内数据路径（POSIX 为 <Trash>/files/<spec>）。 */
export async function trashPath(path: string): Promise<string> {
  return IS_WIN ? winTrashPath(path) : posixTrashPath(path);
}

/** 系统回收站当前条目总数（供清空进度轮询）。 */
export async function recycleCount(): Promise<number> {
  return IS_WIN ? winRecycleCount() : posixRecycleCount();
}

/** 还原（恢复到删除前的原路径）。 */
export async function restoreRecycleItem(fullPath: string): Promise<void> {
  return IS_WIN ? winRestoreRecycleItem(fullPath) : posixRestoreRecycleItem(fullPath);
}

/** 彻底删除（不可恢复）。 */
export async function deleteRecycleItem(fullPath: string): Promise<void> {
  return IS_WIN ? winDeleteRecycleItem(fullPath) : posixDeleteRecycleItem(fullPath);
}

/**
 * 清空回收站（异步触发，立即返回；前端轮询 recycleCount 展示进度）。
 * Windows 走 Clear-RecycleBin；POSIX 非阻塞启动遍历删除。
 */
export function emptyRecycle(): void {
  if (IS_WIN) winEmptyRecycle();
  else posixEmptyRecycle();
}