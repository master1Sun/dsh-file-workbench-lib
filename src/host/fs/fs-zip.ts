/**
 * fs-zip —— 目录/文件压缩与解压（基于 fflate，零原生依赖）。
 *
 * - compressTo：把单个文件或整目录打包为 .zip（目录会连同顶层文件夹名一起打包）。
 * - extractTo：把 .zip 解压到目标目录（防路径穿越，剥离 ./ 与 ../ 段）。
 *
 * fflate 是纯 JS，构建时（esbuild bundle）会被打进 host 产物，运行时无需额外安装。
 */
import { basename, dirname, join, resolve, isAbsolute, sep } from "node:path";
import { mkdir, opendir, readFile, stat, writeFile } from "node:fs/promises";
import { zipSync, unzipSync } from "fflate";
import { FsError } from "./fs-tree.js";

/** 收集 target（文件或目录）内的全部文件到 zip entries；目录连同顶层名一起保留。 */
export async function compressTo(target: string, destZip: string): Promise<string> {
  const info = await stat(target).catch((error) => {
    throw new FsError("fs-error", `cannot compress "${target}": ${error instanceof Error ? error.message : String(error)}`, 400);
  });
  const entries: Record<string, Uint8Array> = {};
  const rootName = basename(target);

  async function walk(dir: string, prefix: string): Promise<void> {
    const level = await opendir(dir).catch(() => null);
    if (!level) return;
    for await (const d of level) {
      const full = join(dir, d.name);
      const rel = join(prefix, d.name).split(sep).join("/");
      const st = await stat(full).catch(() => undefined);
      if (!st) continue;
      if (st.isDirectory()) {
        await walk(full, rel);
      } else {
        entries[rel] = new Uint8Array(await readFile(full));
      }
    }
  }

  if (info.isFile()) {
    entries[rootName] = new Uint8Array(await readFile(target));
  } else {
    await walk(target, rootName);
  }

  const data = zipSync(entries);
  await writeFile(destZip, new Uint8Array(data));
  return destZip;
}

/** 解压 zipPath 到 destDir，返回写入的文件数。 */
export async function extractTo(zipPath: string, destDir: string): Promise<number> {
  const buf = new Uint8Array(await readFile(zipPath).catch((error) => {
    throw new FsError("fs-error", `cannot read zip "${zipPath}": ${error instanceof Error ? error.message : String(error)}`, 400);
  }));
  let files: Record<string, Uint8Array>;
  try {
    files = unzipSync(buf);
  } catch (error) {
    throw new FsError("fs-error", `invalid zip: ${error instanceof Error ? error.message : String(error)}`, 400);
  }
  const normDest = resolve(destDir);
  const inRange = (p: string) => {
    const n = p.replace(/[\\/]+/g, "/").replace(/\/$/, "");
    const d = normDest.replace(/[\\/]+/g, "/").replace(/\/$/, "").toLowerCase();
    return n.toLowerCase() === d || n.toLowerCase().startsWith(`${d}/`);
  };
  let count = 0;
  for (const rel of Object.keys(files)) {
    // 防路径穿越：规范化后丢弃空段 / "." / ".."，只保留安全相对路径。
    const parts = rel.replace(/\\/g, "/").split("/").filter((s) => s && s !== "." && s !== "..");
    const full = resolve(normDest, ...parts);
    if (!inRange(full)) continue;
    await mkdir(dirname(full), { recursive: true });
    await writeFile(full, new Uint8Array(files[rel]));
    count += 1;
  }
  return count;
}

/** 校验绝对路径（复用 fs-tree 的 requireAbsolute 语义，避免循环依赖）。 */
export function requireAbsZip(path: string): string {
  if (!isAbsolute(path)) throw new FsError("bad-request", `"${path}" is not an absolute path`, 400);
  return resolve(path);
}