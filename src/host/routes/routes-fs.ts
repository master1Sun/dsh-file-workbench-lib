/**
 * 文件系统资源路由：根目录 / 列目录 / 读写 / 搜索 / CRUD / 压缩 / 下载 / 图片缩略图。
 *
 * 每个导出函数为「资源路由匹配器」：命中返回 true（已写响应），未命中返回 false，
 * 由 routes.ts 统一分发到对应资源，避免单个文件持续膨胀。
 */
import { createWriteStream, existsSync, statSync } from "node:fs";
import { cp, mkdir, rename, stat, writeFile } from "node:fs/promises";
import { basename, dirname } from "node:path";
import { homedir } from "node:os";

import {
  listDirectory,
  withListingContext,
  FsError,
  parentOf,
  isWithin,
  isProtectedPath,
  listMyComputer,
  rootLabel,
  attachDetails,
  uniquePath,
  statDetail,
  resolveExisting,
  resolveWritePath,
} from "../fs/fs-tree.js";
import { replaceInFiles, searchFiles } from "../fs/fs-search.js";
import { listDrives } from "../fs/fs-drives.js";
import { saveText } from "../fs/fs-read.js";
import { compressTo, extractTo } from "../fs/fs-zip.js";
import { trashPath } from "../fs/recycle.js";
import { getRoot, setRoot } from "../store/root-store.js";
import { getPersistKey } from "../store/workbench-store.js";

import {
  json,
  readBody,
  requireAbsolute,
  serveAsset,
  spawnOpen,
  streamFile,
  IMAGE_EXT,
  type RouteMatcher,
} from "./routes-util.js";

/** 禁止对受保护只读目录（如 C:\Windows 整棵）进行任何写操作。 */
function guardWritable(target: string): void {
  if (isProtectedPath(target)) {
    throw new FsError("forbidden", `path "${target}" is read-only (protected system area)`, 403);
  }
}

/**
 * 工作区外写操作守卫：仅当开启「root 开关」（prefs.allowOutsideRoot）后才允许操作工作区
 * 根目录之外的文件；默认工作区外只能浏览/查看。工作区内路径与非受保护一律放行。
 */
async function guardWsRoot(key: string | undefined, target: string): Promise<void> {
  guardWritable(target);
  const root = getRoot(key);
  if (!root || isWithin(root, target)) return;
  const prefs = (await getPersistKey("prefs")) as { allowOutsideRoot?: boolean } | null;
  if (prefs && prefs.allowOutsideRoot === true) return;
  throw new FsError(
    "forbidden",
    `path "${target}" is outside workspace root; enable the root toggle in Settings to operate it`,
    403,
  );
}

/** 资源路由：assets 静态产物 + 全部 fs 接口。 */
export const fsResource: RouteMatcher = async (req, res, seg, q, method, host) => {
  void host;
  // --- 静态资源（Vue 构建产物） ---
  if (seg[0] === "assets" && method === "GET") {
    serveAsset(res, seg.join("/"));
    return true;
  }

  // --- 根目录 ---
  if (seg[0] === "root" && seg.length === 1) {
    if (method === "GET") {
      const root = getRoot(q.get("key") ?? undefined);
      return (json(res, 200, { ok: true, data: root ? { root } : { root: "" } }), true);
    }
    if (method === "POST") {
      const body = (await readBody(req)) as { key?: string; path?: string } | null;
      const root = body?.path?.trim();
      if (!root) return (json(res, 400, { ok: false, error: "path required" }), true);
      const abs = requireAbsolute(root);
      await stat(abs).catch((error) => {
        throw new FsError("fs-error", `cannot stat "${abs}": ${error instanceof Error ? error.message : String(error)}`, 400);
      });
      setRoot(body?.key, abs);
      return (json(res, 200, { ok: true, data: { root: abs } }), true);
    }
  }

  // --- 单层目录列表（任意绝对目录可列，不限于工作区；root 仅作默认路径与面包屑起点） ---
  if (seg[0] === "list" && seg.length === 1 && method === "GET") {
    const root = getRoot(q.get("key") ?? undefined) ?? "";
    const requested = q.get("path")?.trim() || root || homedir();
    const target = requireAbsolute(requested);
    const listing = await listDirectory(target);
    const displayRoot = root && isWithin(root, target) ? root : target;
    return (json(res, 200, { ok: true, data: withListingContext(target, displayRoot, listing) }), true);
  }

  // --- 父路径 ---
  if (seg[0] === "parent" && seg.length === 1 && method === "GET") {
    const root = getRoot(q.get("key") ?? undefined) ?? "";
    const target = requireAbsolute(q.get("path")?.trim() || root);
    const parent = parentOf(target);
    return (json(res, 200, { ok: true, data: { root, parent } }), true);
  }

  // --- 我的电脑顶层入口（盘符/Home/下载/工作区） ---
  if (seg[0] === "mycomputer" && seg.length === 1 && method === "GET") {
    const root = getRoot(q.get("key") ?? undefined);
    const items = listMyComputer(root || undefined);
    return (json(res, 200, { ok: true, data: { items } }), true);
  }

  // --- 驱动器列表（「此电脑」的「设备和驱动器」视图：含容量与卷标） ---
  if (seg[0] === "drives" && seg.length === 1 && method === "GET") {
    const drives = await listDrives();
    return (json(res, 200, { ok: true, data: { drives } }), true);
  }

  // --- 任意目录浏览（不受工作区限制） ---
  if (seg[0] === "browse" && seg.length === 1 && method === "GET") {
    const target = requireAbsolute(q.get("path")?.trim() || homedir());
    const listing = await listDirectory(target);
    await attachDetails(listing.entries);
    const parent = parentOf(target);
    return (
      json(res, 200, {
        ok: true,
        data: { path: target, name: rootLabel(target), parent, entries: listing.entries, truncated: listing.truncated, inaccessible: listing.inaccessible },
      }),
      true
    );
  }

  // --- 保存文件（任意绝对路径可写；root 内走工作区语义，root 外同样允许新建/覆盖） ---
  if (seg[0] === "save" && seg.length === 1 && method === "POST") {
    const body = (await readBody(req)) as { key?: string; path?: string; content?: string } | null;
    if (!body?.path || typeof body?.content !== "string") {
      return (json(res, 400, { ok: false, error: "path and content required" }), true);
    }
    const abs = requireAbsolute(body.path);
    await guardWsRoot(body?.key, abs);
    const root = getRoot(body?.key);
    let saved: string;
    if (root && isWithin(root, abs)) {
      saved = await saveText(root, body.path, body.content);
    } else {
      // 不限工作区：解析（解符号链接）后写入，必要时创建父目录，允许新建任意不存在的文件。
      const safe = await resolveWritePath(abs);
      await mkdir(dirname(safe), { recursive: true });
      await writeFile(safe, body.content, "utf8");
      saved = safe;
    }
    return (json(res, 200, { ok: true, data: { path: saved } }), true);
  }

  // --- 搜索（可指定任意绝对目录作为范围，不限于工作区；缺省用工作区根或 home） ---
  if (seg[0] === "search" && seg.length === 1 && method === "GET") {
      const qText = q.get("q") ?? "";
      const scoped = q.get("path")?.trim();
      const base = scoped ? requireAbsolute(scoped) : getRoot(q.get("key") ?? undefined) ?? homedir();
      const limit = Math.max(1, Math.min(2000, Number(q.get("limit") ?? 200) || 200));
      const caseSensitive = q.get("case") === "1";
      const regex = q.get("regex") === "1";
      const outcome = await searchFiles(base, qText, { maxMatches: limit, caseSensitive, regex });
      return (json(res, 200, { ok: true, data: { ...outcome, scope: base } }), true);
    }

  // --- 建目录 ---
  if (seg[0] === "mkdir" && seg.length === 1 && method === "POST") {
    const body = (await readBody(req)) as { key?: string; path?: string } | null;
    if (!body?.path) return (json(res, 400, { ok: false, error: "path required" }), true);
    await guardWsRoot(body?.key, requireAbsolute(body.path));
    const safe = await resolveWritePath(body.path, "path");
    await mkdir(safe, { recursive: true });
    return (json(res, 200, { ok: true, data: { path: safe } }), true);
  }

  // --- 上传文件（流式写入：浏览器把文件字节直接 POST，目录与文件名经 query 传递） ---
  if (seg[0] === "upload" && seg.length === 1 && method === "POST") {
    const destDir = q.get("dir")?.trim() ?? "";
    const name = q.get("name")?.trim() ?? "";
    if (!destDir || !name) return (json(res, 400, { ok: false, error: "dir and name required" }), true);
    await guardWsRoot(q.get("key") ?? undefined, requireAbsolute(destDir));
    const dir = await resolveWritePath(destDir, "dir");
    await mkdir(dir, { recursive: true });
    // 防路径穿越：只用文件名基元，并替换掉分隔符。
    const safeName = basename(name).replace(/[\\/]/g, "_");
    const dest = await uniquePath(dir, safeName);
    await new Promise<void>((resolvePromise, reject) => {
      const ws = createWriteStream(dest);
      req.on("error", (err) => {
        ws.destroy();
        reject(err);
      });
      ws.on("error", (err) => {
        req.unpipe(ws);
        reject(err);
      });
      ws.on("finish", () => resolvePromise());
      req.pipe(ws);
    });
    return (json(res, 200, { ok: true, data: { path: dest } }), true);
  }

  // --- 重命名/移动 ---
  if (seg[0] === "rename" && seg.length === 1 && method === "POST") {
    const body = (await readBody(req)) as { key?: string; from?: string; to?: string } | null;
    if (!body?.from || !body?.to) return (json(res, 400, { ok: false, error: "from and to required" }), true);
    await guardWsRoot(body?.key, requireAbsolute(body.from));
    await guardWsRoot(body?.key, requireAbsolute(body.to));
    const from = await resolveExisting(body.from, "from");
    const to = await resolveWritePath(body.to, "to");
    await rename(from, to);
    return (json(res, 200, { ok: true, data: { path: to } }), true);
  }

  // --- 删除（移入系统回收站） ---
  if (seg[0] === "remove" && seg.length === 1 && method === "DELETE") {
    const raw = q.get("path")?.trim() ?? "";
    if (!raw) return (json(res, 400, { ok: false, error: "path required" }), true);
    await guardWsRoot(q.get("key") ?? undefined, requireAbsolute(raw));
    const target = await resolveExisting(raw, "path");
    const trashed = await trashPath(target);
    return (json(res, 200, { ok: true, data: { path: trashed } }), true);
  }

  // --- 新建文本文件 ---
  if (seg[0] === "touch" && seg.length === 1 && method === "POST") {
    const body = (await readBody(req)) as { key?: string; path?: string } | null;
    if (!body?.path) return (json(res, 400, { ok: false, error: "path required" }), true);
    await guardWsRoot(body?.key, requireAbsolute(body.path));
    const safe = await resolveWritePath(body.path, "path");
    await writeFile(safe, "", "utf8");
    return (json(res, 200, { ok: true, data: { path: safe } }), true);
  }

  // --- 复制/粘贴（复制到目标目录；剪切走 rename 即“移动”） ---
  if (seg[0] === "copy" && seg.length === 1 && method === "POST") {
    const body = (await readBody(req)) as { key?: string; src?: string; destDir?: string } | null;
    if (!body?.src || !body?.destDir) return (json(res, 400, { ok: false, error: "src and destDir required" }), true);
    await guardWsRoot(body?.key, requireAbsolute(body.destDir));
    const src = await resolveExisting(body.src, "src");
    const destDir = await resolveWritePath(body.destDir, "destDir");
    await mkdir(destDir, { recursive: true });
    const dest = await uniquePath(destDir, basename(src));
    await cp(src, dest, { recursive: true, force: false, errorOnExist: false });
    return (json(res, 200, { ok: true, data: { path: dest } }), true);
  }

  // --- 属性（stat 详情，任意绝对路径） ---
  if (seg[0] === "detail" && seg.length === 1 && method === "GET") {
    const target = requireAbsolute(q.get("path")?.trim() ?? "");
    const detail = await statDetail(target);
    return (json(res, 200, { ok: true, data: detail }), true);
  }

  // --- 用系统默认程序打开 / 在资源管理器中打开 ---
  if (seg[0] === "openExternal" && seg.length === 1 && method === "POST") {
    const body = (await readBody(req)) as { path?: string } | null;
    const target = requireAbsolute(body?.path?.trim() ?? "");
    const info = await stat(target);
    await spawnOpen(target, info.isDirectory());
    return (json(res, 200, { ok: true, data: { path: target } }), true);
  }

  // --- 下载任意绝对文件（所有格式的统一下载兜底；?inline=1 时以内联方式输出，
  //     供 PDF 预览 iframe 直接加载 —— 浏览器对 data: URL 的 PDF 在 iframe 内会白屏） ---
  if (seg[0] === "download" && seg.length === 1 && method === "GET") {
    const target = q.get("path")?.trim();
    if (!target) return (json(res, 400, { ok: false, error: "path required" }), true);
    const safe = requireAbsolute(target);
    if (!existsSync(safe) || !statSync(safe).isFile()) return (json(res, 404, { ok: false, error: "not found" }), true);
    await streamFile(res, safe, q.get("inline") === "1");
    return true;
  }

  // --- 内联图片（栅格缩略图/平铺浏览）：以 image/* Content-Type 直接流式输出，不走下载附件 ---
  if (seg[0] === "_read-image" && seg.length === 1 && method === "GET") {
    const target = q.get("path")?.trim();
    if (!target) return (json(res, 400, { ok: false, error: "path required" }), true);
    const safe = requireAbsolute(target);
    if (!existsSync(safe) || !statSync(safe).isFile()) return (json(res, 404, { ok: false, error: "not found" }), true);
    const ext = safe.slice(safe.lastIndexOf(".")).toLowerCase();
    if (!IMAGE_EXT.has(ext)) return (json(res, 400, { ok: false, error: "not an image file" }), true);
    await streamFile(res, safe, true);
    return true;
  }

  // --- 压缩（单文件或整目录 → .zip） ---
  if (seg[0] === "compress" && seg.length === 1 && method === "POST") {
    const body = (await readBody(req)) as { key?: string; path?: string; to?: string } | null;
    if (!body?.path) return (json(res, 400, { ok: false, error: "path required" }), true);
    const src = await resolveExisting(body.path, "path");
    const to = body?.to?.trim() ? await resolveWritePath(body.to, "to") : await uniquePath(dirname(src), `${basename(src)}.zip`);
    await guardWsRoot(body?.key, to);
    const dest = await compressTo(src, to);
    return (json(res, 200, { ok: true, data: { path: dest } }), true);
  }

  // --- 解压 .zip 到目标目录 ---
  if (seg[0] === "extract" && seg.length === 1 && method === "POST") {
    const body = (await readBody(req)) as { key?: string; zipPath?: string; destDir?: string } | null;
    if (!body?.zipPath) return (json(res, 400, { ok: false, error: "zipPath required" }), true);
    const zip = await resolveExisting(body.zipPath, "zipPath");
    const destDir = body?.destDir?.trim() ? await resolveWritePath(body.destDir, "destDir") : dirname(zip);
    await guardWsRoot(body?.key, destDir);
    const count = await extractTo(zip, destDir);
    return (json(res, 200, { ok: true, data: { destDir, count } }), true);
  }

  // --- 跨文件批量替换（仅限工作区根内：搜索可任意范围，改写必须保守） ---
  if (seg[0] === "replace" && seg.length === 1 && method === "POST") {
    const body = (await readBody(req)) as {
      key?: string;
      scope?: string;
      q?: string;
      replacement?: string;
      caseSensitive?: boolean;
      regex?: boolean;
    } | null;
    const q = body?.q?.trim() ?? "";
    const replacement = typeof body?.replacement === "string" ? body.replacement : "";
    if (!q) return (json(res, 400, { ok: false, error: "q required" }), true);
    const root = getRoot(body?.key);
    if (!root) return (json(res, 409, { ok: false, error: "no root" }), true);
    const base = body?.scope?.trim() ? requireAbsolute(body.scope) : root;
    // 批量改写严格限定在工作区根内，杜绝越界改写。
    if (!isWithin(root, base)) return (json(res, 403, { ok: false, error: "scope outside workspace" }), true);
    guardWritable(base);
    const outcome = await replaceInFiles(base, q, replacement, {
      caseSensitive: body?.caseSensitive === true,
      regex: body?.regex === true,
      write: async (abs, content) => {
        await saveText(root, abs, content);
      },
    });
    return (json(res, 200, { ok: true, data: outcome }), true);
  }

  return false;
};