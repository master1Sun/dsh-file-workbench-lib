/**
 * 文件系统资源路由：根目录 / 列目录 / 读写 / 搜索 / CRUD / 压缩 / 下载 / 图片缩略图。
 *
 * 每个导出函数为「资源路由匹配器」：命中返回 true（已写响应），未命中返回 false，
 * 由 routes.ts 统一分发到对应资源，避免单个文件持续膨胀。
 */
import { createWriteStream, existsSync, statSync } from "node:fs";
import { cp, mkdir, readFile, rename, stat, writeFile } from "node:fs/promises";
import { basename, dirname, resolve, sep } from "node:path";
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
import { replaceInFiles, searchFiles, grepFiles, listProjectFiles } from "../fs/fs-search.js";
import { listDrives } from "../fs/fs-drives.js";
import { saveText } from "../fs/fs-read.js";
import { decodeText, encodeText, type EolStyle, type TextEncoding } from "../fs/text-codec.js";
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

/** 可被 `?encoding=` 指定的文本编码白名单（与 fs/text-codec 的 TextEncoding 对齐）。 */
const TEXT_ENCODINGS = new Set<string>(["utf8", "utf16le", "utf16be", "gb18030", "big5", "latin1", "binary"]);

/**
 * 解析 `/read` 的编码覆盖参数。
 * `?encoding=` 来自状态栏的手动切换；`?bom=1|0` 显式指定 BOM（缺省沿用探测结果）。
 */
function parseEncodingOverride(q: URLSearchParams): { encoding?: TextEncoding; hasBom?: boolean } {
  const out: { encoding?: TextEncoding; hasBom?: boolean } = {};
  const enc = q.get("encoding")?.trim();
  if (enc && TEXT_ENCODINGS.has(enc)) out.encoding = enc as TextEncoding;
  const bom = q.get("bom");
  if (bom === "1") out.hasBom = true;
  else if (bom === "0") out.hasBom = false;
  return out;
}

/** 保存时的编码回退：无法识别（旧调用方未传）时按 UTF-8 处理，保持向后兼容。 */
function saveEncodingOf(raw: string | undefined): TextEncoding {
  return raw && TEXT_ENCODINGS.has(raw) ? (raw as TextEncoding) : "utf8";
}

/** 保存时的行尾回退：未传时按 LF（旧调用方语义保持原样）。 */
function saveEolOf(raw: string | undefined): EolStyle {
  return raw === "crlf" || raw === "cr" ? raw : "lf";
}

/** 资源路由：assets 静态产物 + 全部 fs 接口。 */
export const fsResource: RouteMatcher = async (req, res, seg, q, method, host) => {  void host;
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
    const items = await listMyComputer(root || undefined);
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

  // --- 项目文件索引（「快速打开」用；只回相对路径，模糊匹配在前端本地做） ---
  if (seg[0] === "files" && seg.length === 1 && method === "GET") {
    const target = q.get("path")?.trim() || getRoot(q.get("key") ?? undefined) || "";
    if (!target) return (json(res, 400, { ok: false, error: "no project folder — open a folder first" }), true);
    const out = await listProjectFiles(requireAbsolute(target));
    return (json(res, 200, { ok: true, data: out }), true);
  }

  // --- 保存文件（任意绝对路径可写；root 内走工作区语义，root 外同样允许新建/覆盖） ---
  // 内容一律以「LF 归一 + 纯文本」形态传入，编码与行尾由 encoding/hasBom/eol 三参还原，
  // 避免 CRLF 文件被静默改成 LF、GBK 文件被写成 GBK 乱码（详见 fs/text-codec.ts）。
  if (seg[0] === "save" && seg.length === 1 && method === "POST") {
    const body = (await readBody(req)) as {
      key?: string;
      path?: string;
      content?: string;
      encoding?: string;
      hasBom?: boolean;
      eol?: string;
      expectedMtime?: number;
      force?: boolean;
    } | null;
    if (!body?.path || typeof body?.content !== "string") {
      return (json(res, 400, { ok: false, error: "path and content required" }), true);
    }
    const abs = requireAbsolute(body.path);
    await guardWsRoot(body?.key, abs);

    // 外部改动检测：调用方带上读取时拿到的 mtime，若磁盘已被别处改写则拒绝覆盖（除非 force）。
    // 用 412 而不是 409——409 在客户端被统一映射为「未设置工作区根」，语义不符。
    if (body.force !== true && typeof body.expectedMtime === "number") {
      const cur = await stat(abs).catch(() => null);
      if (cur?.isFile() && Math.abs(cur.mtimeMs - body.expectedMtime) >= 1) {
        return (
          json(res, 412, {
            ok: false,
            error: "file has been changed on disk since it was loaded",
            code: "mtime-conflict",
          }),
          true
        );
      }
    }

    // 按原编码 / 原行尾 / 原 BOM 编码回字节；目标编码无法表示全部字符时抛 422（不写乱码）。
    const bytes = encodeText(body.content, {
      encoding: saveEncodingOf(body.encoding),
      hasBom: body.hasBom === true,
      eol: saveEolOf(body.eol),
    });

    const root = getRoot(body?.key);
    let saved: string;
    if (root && isWithin(root, abs)) {
      saved = await saveText(root, body.path, bytes);
    } else {
      // 不限工作区：解析（解符号链接）后写入，必要时创建父目录，允许新建任意不存在的文件。
      const safe = await resolveWritePath(abs);
      await mkdir(dirname(safe), { recursive: true });
      await writeFile(safe, bytes);
      saved = safe;
    }
    // 回传落盘后的 mtime，供前端刷新外部改动基线（否则自己刚写的文件会被下一轮轮询判为“被改动”）。
    const after = await stat(saved).catch(() => null);
    return (json(res, 200, { ok: true, data: { path: saved, mtime: after?.mtimeMs ?? 0 } }), true);
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

  // --- 全局内容搜索（grep 式）：按行命中、按文件分组，供左栏「搜索」tab 展示与跳转 ---
  // sub：限定在项目内某子目录下搜索（VSCode「搜索范围」）。rel 仍加回子目录前缀，
  // 保持相对项目根，前端点击跳转逻辑不变；sub 解析后逃逸出 base 则忽略。
  if (seg[0] === "grep" && seg.length === 1 && method === "GET") {
    const qText = q.get("q") ?? "";
    const scoped = q.get("path")?.trim();
    const base = resolve(scoped ? requireAbsolute(scoped) : getRoot(q.get("key") ?? undefined) ?? homedir());
    const caseSensitive = q.get("case") === "1";
    const regex = q.get("regex") === "1";
    const subRaw = (q.get("sub") ?? "").trim().replace(/\\/g, "/").replace(/^\/+|\/+$/g, "");
    let scanRoot = base;
    let sub = "";
    if (subRaw) {
      const resolved = resolve(base, subRaw);
      if (resolved === base || resolved.startsWith(base + sep)) {
        scanRoot = resolved;
        sub = subRaw;
      }
    }
    const outcome = await grepFiles(scanRoot, qText, { caseSensitive, regex });
    const files = sub ? outcome.files.map((f) => ({ ...f, rel: `${sub}/${f.rel}` })) : outcome.files;
    return (json(res, 200, { ok: true, data: { files, total: outcome.total, truncated: outcome.truncated, scope: scanRoot } }), true);
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

  // --- 读取文本文件内容（编辑用；限文件 + 限大小，超出 413） ---
  if (seg[0] === "read" && seg.length === 1 && method === "GET") {
    const raw = q.get("path")?.trim() ?? "";
    if (!raw) return (json(res, 400, { ok: false, error: "path required" }), true);
    const target = requireAbsolute(raw);
    const info = await stat(target).catch((error) => {
      throw new FsError("not-found", `cannot read "${target}": ${error instanceof Error ? error.message : String(error)}`, 404);
    });
    if (!info.isFile()) return (json(res, 400, { ok: false, error: "not a file" }), true);
    // 编辑场景仅针对文本，限制单次读取体积（8MB），避免大文件 / 二进制拖垮前端。
    const MAX = 8 * 1024 * 1024;
    if (info.size > MAX) return (json(res, 413, { ok: false, error: "file too large to edit" }), true);
    // 编码自动探测（可被 ?encoding= 覆盖以支持状态栏手动切换）；行尾一并探测供写回还原。
    // 文本已把行尾归一为 \n：编辑器内部只用 LF，原样式随 eol 字段往返。
    const decoded = decodeText(await readFile(target), parseEncodingOverride(q));
    return (
      json(res, 200, {
        ok: true,
        data: {
          content: decoded.text,
          size: info.size,
          mtime: info.mtimeMs,
          encoding: decoded.encoding,
          hasBom: decoded.hasBom,
          eol: decoded.eol,
          binary: decoded.binary,
        },
      }),
      true
    );
  }

  // --- 批量 mtime 查询（编辑器「外部改动检测」轮询：一次请求覆盖全部已打开标签） ---
  if (seg[0] === "mtimes" && seg.length === 1 && method === "POST") {
    const body = (await readBody(req)) as { paths?: unknown } | null;
    const list = Array.isArray(body?.paths) ? body.paths.filter((p): p is string => typeof p === "string") : [];
    const items: Record<string, { mtimeMs: number; size: number } | null> = {};
    // 上限 200 条：轮询接口，避免被构造超大请求拖住事件循环。
    for (const p of list.slice(0, 200)) {
      try {
        const s = await stat(requireAbsolute(p));
        items[p] = s.isFile() ? { mtimeMs: s.mtimeMs, size: s.size } : null;
      } catch {
        // 已删除 / 不可访问：以 null 告知前端，由前端决定提示或关闭标签。
        items[p] = null;
      }
    }
    return (json(res, 200, { ok: true, data: { items } }), true);
  }

  // --- 用系统默认程序打开 / 在资源管理器中打开 ---
  if (seg[0] === "openExternal" && seg.length === 1 && method === "POST") {
    const body = (await readBody(req)) as { path?: string } | null;
    const target = requireAbsolute(body?.path?.trim() ?? "");
    // 目标可能刚被删除/重命名（列表是上一刻拉的），此时是 404 而不是 500。
    const info = await stat(target).catch((error) => {
      throw new FsError("not-found", `cannot open "${target}": ${error instanceof Error ? error.message : String(error)}`, 404);
    });
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