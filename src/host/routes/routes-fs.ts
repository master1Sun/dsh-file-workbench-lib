/**
 * 文件系统资源路由：根目录 / 列目录 / 读写 / 搜索 / CRUD / 压缩 / 下载 / 图片缩略图。
 *
 * 每个导出函数为「资源路由匹配器」：命中返回 true（已写响应），未命中返回 false，
 * 由 routes.ts 统一分发到对应资源，避免单个文件持续膨胀。
 *
 * 路由策略（根守卫 / mtime 冲突检测 / 编码覆盖解析）仍留在本层；存储后端差异通过
 * `getFs(ref)` 的 FsProvider 解耦。本地连接走 `localFsProvider`（逐字节等价于原实现）；
 * ssh 引用当前由 `getFs` 抛 501，待 SftpFsProvider（Task 3）落地后自动可用。
 */
import { createWriteStream } from "node:fs";
import { basename, dirname, resolve, sep } from "node:path";
import { homedir } from "node:os";

import {
  FsError,
  isWithin,
} from "../fs/fs-tree.js";
import { decodeText, encodeText, type EolStyle, type TextEncoding } from "../fs/text-codec.js";
import { getRoot, setRoot } from "../store/root-store.js";
import { parseRef, getFs, localFsProvider, type FsProvider, type FileRef } from "../fs/fs-provider.js";

import {
  json,
  MAX_BODY_SIZE,
  readBody,
  requireAbsolute,
  sendBytes,
  serveAsset,
  streamFile,
  IMAGE_EXT,
  guardWritablePath,
  guardWriteTarget,
  type RouteMatcher,
} from "./routes-util.js";

/**
 * 禁止对受保护只读目录（如 C:\Windows 整棵）进行任何写操作。
 *
 * 实现已上提到 `routes-util.ts`（git / svn / 克隆检出共用同一份判断），这里只保留
 * 本模块内的短名字，避免 40+ 个调用点全部改名 —— 但**不再**保有自己的实现副本，
 * 否则两处策略会随时间分叉。
 */
const guardWritable = guardWritablePath;

/** ssh 引用的展示文件名：取远端路径的 POSIX basename（本地路径由 streamFile 自行处理）。 */
function posixBasenameOf(raw: string): string {
  const ref = parseRef(raw);
  const p = ref.conn === "ssh" ? ref.path : raw;
  const base = p.slice(p.lastIndexOf("/") + 1);
  return base || "download";
}

/**
 * 把「搜索范围 + 子目录」解析为实际扫描根（grep 的 sub 参数）。
 * local：沿用 win32/path 语义；ssh：远端 POSIX 拼接（拒绝 ".." 逃逸）。
 */
function scopeSub(base: string, subRaw: string): { scanRoot: string; sub: string } {
  if (!subRaw) return { scanRoot: base, sub: "" };
  const ref = parseRef(base);
  if (ref.conn === "ssh") {
    if (subRaw.split("/").includes("..")) return { scanRoot: base, sub: "" };
    const norm = ref.path.replace(/\/+$/, "");
    return { scanRoot: `ssh://${ref.hostId ?? ""}${norm}/${subRaw}`, sub: subRaw };
  }
  const resolved = resolve(base, subRaw);
  if (resolved === base || resolved.startsWith(base + sep)) return { scanRoot: resolved, sub: subRaw };
  return { scanRoot: base, sub: "" };
}

/**
 * 工作区外写操作守卫：仅当开启「root 开关」（prefs.allowOutsideRoot）后才允许操作工作区
 * 根目录之外的文件；默认工作区外只能浏览/查看。工作区内路径与非受保护一律放行。
 *
 * 实现已上提到 `routes-util.ts` 的 `guardWriteTarget`（与克隆/检出共用同一份策略）。
 */
const guardWsRoot = guardWriteTarget;

/**
 * 把请求里的「路径字符串」解析为连接感知的目标。
 * - local：requireAbsolute 校验 + 返回 localFsProvider，path 为本地绝对路径。
 * - ssh：委托 SftpFsProvider；path 保留**完整引用字符串** `ssh://<hostId>/<remote>`——
 *   SftpFsProvider 的方法接受并返回这种形态（内部再拆远端 POSIX 路径），响应中的
 *   path/parent/crumbs 等都是可直接回传 routeTarget 的合法引用。
 * 本地分支与改造前逐字节一致。
 */
function routeTarget(raw: string): { ref: FileRef; provider: FsProvider; path: string } {
  const ref = parseRef(raw);
  if (ref.conn === "ssh") {
    return { ref, provider: getFs(ref), path: raw };
  }
  const abs = requireAbsolute(raw);
  return { ref, provider: localFsProvider, path: abs };
}

/** 写操作守卫：仅本地连接需要工作区/受保护区守卫；远端跳过（由其连接鉴权）。 */
async function guardWrite(ref: FileRef, key: string | undefined, path: string): Promise<void> {
  if (ref.conn !== "local") return;
  await guardWsRoot(key, path);
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
      // 远端根：scheme 字符串直接存为工作区根（连接校验由 SftpFsProvider 在首访时做）。
      if (root.startsWith("ssh://")) {
        setRoot(body?.key, root);
        return (json(res, 200, { ok: true, data: { root } }), true);
      }
      const abs = requireAbsolute(root);
      await localFsProvider.stat(abs).catch((error) => {
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
    const { provider, path } = routeTarget(requested);
    const listing = await provider.listDirectory(path);
    const displayRoot = root && isWithin(root, path) ? root : path;
    // 面包屑由 provider 生成（ssh 引用是 scheme 字符串，本地 crumbsOf 的 win32 语义不适配）。
    listing.path = path;
    listing.root = displayRoot;
    listing.crumbs = provider.crumbsOf(path, displayRoot);
    return (json(res, 200, { ok: true, data: listing }), true);
  }

  // --- 父路径 ---
  if (seg[0] === "parent" && seg.length === 1 && method === "GET") {
    const root = getRoot(q.get("key") ?? undefined) ?? "";
    const { provider, path } = routeTarget(q.get("path")?.trim() || root);
    const parent = provider.parentOf(path);
    return (json(res, 200, { ok: true, data: { root, parent } }), true);
  }

  // --- 我的电脑顶层入口（盘符/Home/下载/工作区） ---
  if (seg[0] === "mycomputer" && seg.length === 1 && method === "GET") {
    const root = getRoot(q.get("key") ?? undefined);
    const items = await localFsProvider.listMyComputer(root || undefined);
    return (json(res, 200, { ok: true, data: { items } }), true);
  }

  // --- 驱动器列表（「此电脑」的「设备和驱动器」视图：含容量与卷标） ---
  if (seg[0] === "drives" && seg.length === 1 && method === "GET") {
    const drives = await localFsProvider.listDrives();
    return (json(res, 200, { ok: true, data: { drives } }), true);
  }

  // --- 任意目录浏览（不受工作区限制） ---
  if (seg[0] === "browse" && seg.length === 1 && method === "GET") {
    const { provider, path } = routeTarget(q.get("path")?.trim() || homedir());
    const listing = await provider.listDirectory(path);
    await provider.attachDetails(listing.entries);
    const parent = provider.parentOf(path);
    return (
      json(res, 200, {
        ok: true,
        data: { path, name: provider.rootLabel(path), parent, entries: listing.entries, truncated: listing.truncated, inaccessible: listing.inaccessible },
      }),
      true
    );
  }

  // --- 项目文件索引（「快速打开」用；只回相对路径，模糊匹配在前端本地做） ---
  if (seg[0] === "files" && seg.length === 1 && method === "GET") {
    const target = q.get("path")?.trim() || getRoot(q.get("key") ?? undefined) || "";
    if (!target) return (json(res, 400, { ok: false, error: "no project folder — open a folder first" }), true);
    const { provider, path } = routeTarget(target);
    const out = await provider.listProjectFiles(path);
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
    const { ref, provider, path } = routeTarget(body.path);
    await guardWrite(ref, body?.key, path);

    // 外部改动检测：调用方带上读取时拿到的 mtime，若磁盘已被别处改写则拒绝覆盖（除非 force）。
    // 用 412 而不是 409——409 在客户端被统一映射为「未设置工作区根」，语义不符。
    if (body.force !== true && typeof body.expectedMtime === "number") {
      const cur = await provider.stat(path).catch(() => null);
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
    if (root && isWithin(root, path)) {
      saved = await provider.saveText(root, body.path, bytes);
    } else {
      // 不限工作区：解析（解符号链接）后写入，必要时创建父目录，允许新建任意不存在的文件。
      // parentOf 由 provider 提供（ssh 引用是 scheme 字符串，不能用本地 path.dirname）。
      const safe = await provider.resolveWritePath(path);
      await provider.mkdir(provider.parentOf(safe) ?? safe);
      await provider.writeFileBytes(safe, bytes);
      saved = safe;
    }
    // 回传落盘后的 mtime，供前端刷新外部改动基线（否则自己刚写的文件会被下一轮轮询判为“被改动”）。
    const after = await provider.stat(saved).catch(() => null);
    return (json(res, 200, { ok: true, data: { path: saved, mtime: after?.mtimeMs ?? 0 } }), true);
  }

  // --- 搜索（可指定任意绝对目录作为范围，不限于工作区；缺省用工作区根或 home） ---
  if (seg[0] === "search" && seg.length === 1 && method === "GET") {
    const qText = q.get("q") ?? "";
    const scoped = q.get("path")?.trim();
    const { provider, path: base } = scoped
      ? routeTarget(scoped)
      : { provider: localFsProvider, path: (getRoot(q.get("key") ?? undefined) ?? homedir()) };
    const limit = Math.max(1, Math.min(2000, Number(q.get("limit") ?? 200) || 200));
    const caseSensitive = q.get("case") === "1";
    const regex = q.get("regex") === "1";
    const outcome = await provider.searchFiles(base, qText, { maxMatches: limit, caseSensitive, regex });
    return (json(res, 200, { ok: true, data: { ...outcome, scope: base } }), true);
  }

  // --- 全局内容搜索（grep 式）：按行命中、按文件分组，供左栏「搜索」tab 展示与跳转 ---
  // sub：限定在项目内某子目录下搜索（VSCode「搜索范围」）。rel 仍加回子目录前缀，
  // 保持相对项目根，前端点击跳转逻辑不变；sub 解析后逃逸出 base 则忽略。
  if (seg[0] === "grep" && seg.length === 1 && method === "GET") {
    const qText = q.get("q") ?? "";
    const scoped = q.get("path")?.trim();
    const { provider, path: base } = scoped
      ? routeTarget(scoped)
      : { provider: localFsProvider, path: (getRoot(q.get("key") ?? undefined) ?? homedir()) };
    const caseSensitive = q.get("case") === "1";
    const regex = q.get("regex") === "1";
    const subRaw = (q.get("sub") ?? "").trim().replace(/\\/g, "/").replace(/^\/+|\/+$/g, "");
    const { scanRoot, sub } = scopeSub(base, subRaw);
    const outcome = await provider.grepFiles(scanRoot, qText, { caseSensitive, regex });
    const files = sub ? outcome.files.map((f) => ({ ...f, rel: `${sub}/${f.rel}` })) : outcome.files;
    return (json(res, 200, { ok: true, data: { files, total: outcome.total, truncated: outcome.truncated, scope: scanRoot } }), true);
  }

  // --- 建目录 ---
  if (seg[0] === "mkdir" && seg.length === 1 && method === "POST") {
    const body = (await readBody(req)) as { key?: string; path?: string } | null;
    if (!body?.path) return (json(res, 400, { ok: false, error: "path required" }), true);
    const { ref, provider, path } = routeTarget(body.path);
    await guardWrite(ref, body?.key, path);
    const safe = await provider.resolveWritePath(path);
    await provider.mkdir(safe);
    return (json(res, 200, { ok: true, data: { path: safe } }), true);
  }

  // --- 上传文件（流式写入：浏览器把文件字节直接 POST，目录与文件名经 query 传递） ---
  if (seg[0] === "upload" && seg.length === 1 && method === "POST") {
    const destDir = q.get("dir")?.trim() ?? "";
    const name = q.get("name")?.trim() ?? "";
    if (!destDir || !name) return (json(res, 400, { ok: false, error: "dir and name required" }), true);
    const { ref, provider, path } = routeTarget(destDir);
    await guardWrite(ref, q.get("key") ?? undefined, path);
    const dir = await provider.resolveWritePath(path);
    await provider.mkdir(dir);
    // 防路径穿越：只用文件名基元，并替换掉分隔符。
    const safeName = name.replace(/[\\/]/g, "_");
    const dest = await provider.uniquePath(dir, safeName);
    if (ref.conn === "ssh") {
      // 远端：无本地可写流，聚合请求字节后经 SFTP 原子写入（上限同 MAX_BODY_SIZE 级别）。
      const chunks: Buffer[] = [];
      let size = 0;
      await new Promise<void>((resolvePromise, reject) => {
        req.on("data", (c: Buffer) => {
          size += c.length;
          if (size > MAX_BODY_SIZE) {
            req.destroy();
            reject(new FsError("too-large", `upload exceeds the ${MAX_BODY_SIZE} byte limit`, 413));
            return;
          }
          chunks.push(c);
        });
        req.on("error", reject);
        req.on("end", () => resolvePromise());
      });
      await provider.writeFileBytes(dest, Buffer.concat(chunks));
      return (json(res, 200, { ok: true, data: { path: dest } }), true);
    }
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
    const fromT = routeTarget(body.from);
    const toT = routeTarget(body.to);
    await guardWrite(fromT.ref, body?.key, fromT.path);
    await guardWrite(toT.ref, body?.key, toT.path);
    const from = await fromT.provider.resolveExisting(fromT.path);
    const to = await toT.provider.resolveWritePath(toT.path);
    await fromT.provider.rename(from, to);
    return (json(res, 200, { ok: true, data: { path: to } }), true);
  }

  // --- 删除（移入系统回收站） ---
  if (seg[0] === "remove" && seg.length === 1 && method === "DELETE") {
    const raw = q.get("path")?.trim() ?? "";
    if (!raw) return (json(res, 400, { ok: false, error: "path required" }), true);
    const { ref, provider, path } = routeTarget(raw);
    await guardWrite(ref, q.get("key") ?? undefined, path);
    const target = await provider.resolveExisting(path);
    const trashed = await provider.remove(target);
    return (json(res, 200, { ok: true, data: { path: trashed } }), true);
  }

  // --- 新建文本文件 ---
  if (seg[0] === "touch" && seg.length === 1 && method === "POST") {
    const body = (await readBody(req)) as { key?: string; path?: string } | null;
    if (!body?.path) return (json(res, 400, { ok: false, error: "path required" }), true);
    const { ref, provider, path } = routeTarget(body.path);
    await guardWrite(ref, body?.key, path);
    const safe = await provider.resolveWritePath(path);
    await provider.touch(safe);
    return (json(res, 200, { ok: true, data: { path: safe } }), true);
  }

  // --- 复制/粘贴（复制到目标目录；剪切走 rename 即“移动”） ---
  if (seg[0] === "copy" && seg.length === 1 && method === "POST") {
    const body = (await readBody(req)) as { key?: string; src?: string; destDir?: string } | null;
    if (!body?.src || !body?.destDir) return (json(res, 400, { ok: false, error: "src and destDir required" }), true);
    const srcT = routeTarget(body.src);
    const destT = routeTarget(body.destDir);
    await guardWrite(destT.ref, body?.key, destT.path);
    const src = await srcT.provider.resolveExisting(srcT.path);
    const destDir = await destT.provider.resolveWritePath(destT.path);
    const dest = await destT.provider.copy(src, destDir);
    return (json(res, 200, { ok: true, data: { path: dest } }), true);
  }

  // --- 属性（stat 详情，任意绝对路径） ---
  if (seg[0] === "detail" && seg.length === 1 && method === "GET") {
    const { provider, path } = routeTarget(q.get("path")?.trim() ?? "");
    const detail = await provider.statDetail(path);
    return (json(res, 200, { ok: true, data: detail }), true);
  }

  // --- 读取文本文件内容（编辑用；限文件 + 限大小，超出 413） ---
  if (seg[0] === "read" && seg.length === 1 && method === "GET") {
    const raw = q.get("path")?.trim() ?? "";
    if (!raw) return (json(res, 400, { ok: false, error: "path required" }), true);
    const { provider, path } = routeTarget(raw);
    const info = await provider.stat(path).catch((error) => {
      throw new FsError("not-found", `cannot read "${path}": ${error instanceof Error ? error.message : String(error)}`, 404);
    });
    if (!info.isFile()) return (json(res, 400, { ok: false, error: "not a file" }), true);
    // 编辑场景仅针对文本，限制单次读取体积（8MB），避免大文件 / 二进制拖垮前端。
    const MAX = 8 * 1024 * 1024;
    if (info.size > MAX) return (json(res, 413, { ok: false, error: "file too large to edit" }), true);
    // 编码自动探测（可被 ?encoding= 覆盖以支持状态栏手动切换）；行尾一并探测供写回还原。
    // 文本已把行尾归一为 \n：编辑器内部只用 LF，原样式随 eol 字段往返。
    const decoded = decodeText(await provider.readFileBytes(path), parseEncodingOverride(q));
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

  // --- 批量 mtime 查询（**旧版轮询接口**，仅为版本错配兜底保留） ---
  // 「外部改动检测」已改为 WebSocket 推送（见 ws-push.ts 的 /push）：新前端不再调用
  // 这个接口。保留它是为了「宿主已更新、浏览器里还是旧前端」的窗口期不出错，勿据此再新增轮询。
  if (seg[0] === "mtimes" && seg.length === 1 && method === "POST") {
    const body = (await readBody(req)) as { paths?: unknown } | null;
    const list = Array.isArray(body?.paths) ? body.paths.filter((p): p is string => typeof p === "string") : [];
    const items: Record<string, { mtimeMs: number; size: number } | null> = {};
    // 上限 200 条：轮询接口，避免被构造超大请求拖住事件循环。
    for (const p of list.slice(0, 200)) {
      try {
        const { provider, path } = routeTarget(p);
        const s = await provider.stat(path);
        items[p] = s.isFile() ? { mtimeMs: s.mtimeMs, size: s.size } : null;
      } catch {
        // 已删除 / 不可访问 / 远端未实现：以 null 告知前端，由前端决定提示或关闭标签。
        items[p] = null;
      }
    }
    return (json(res, 200, { ok: true, data: { items } }), true);
  }

  // --- 用系统默认程序打开 / 在资源管理器中打开 ---
  if (seg[0] === "openExternal" && seg.length === 1 && method === "POST") {
    const body = (await readBody(req)) as { path?: string } | null;
    const { provider, path } = routeTarget(body?.path?.trim() ?? "");
    // 目标可能刚被删除/重命名（列表是上一刻拉的），此时是 404 而不是 500。
    const info = await provider.stat(path).catch((error) => {
      throw new FsError("not-found", `cannot open "${path}": ${error instanceof Error ? error.message : String(error)}`, 404);
    });
    await provider.openExternal(path, info.isDirectory());
    return (json(res, 200, { ok: true, data: { path } }), true);
  }

  // --- 下载任意绝对文件（所有格式的统一下载兜底；?inline=1 时以内联方式输出，
  //     供 PDF 预览 iframe 直接加载 —— 浏览器对 data: URL 的 PDF 在 iframe 内会白屏） ---
  if (seg[0] === "download" && seg.length === 1 && method === "GET") {
    const raw = q.get("path")?.trim();
    if (!raw) return (json(res, 400, { ok: false, error: "path required" }), true);
    const { ref, provider, path } = routeTarget(raw);
    const s = await provider.stat(path).catch(() => null);
    if (!s || !s.isFile()) return (json(res, 404, { ok: false, error: "not found" }), true);
    if (ref.conn === "ssh") {
      // 远端：整读后一次性回发（响应头语义与 streamFile 一致）。
      const data = await provider.readFileBytes(path);
      sendBytes(res, data, posixBasenameOf(path), q.get("inline") === "1");
      return true;
    }
    await streamFile(res, path, q.get("inline") === "1");
    return true;
  }

  // --- 内联图片（栅格缩略图/平铺浏览）：以 image/* Content-Type 直接流式输出，不走下载附件 ---
  if (seg[0] === "_read-image" && seg.length === 1 && method === "GET") {
    const raw = q.get("path")?.trim();
    if (!raw) return (json(res, 400, { ok: false, error: "path required" }), true);
    const { ref, provider, path } = routeTarget(raw);
    const s = await provider.stat(path).catch(() => null);
    if (!s || !s.isFile()) return (json(res, 404, { ok: false, error: "not found" }), true);
    const ext = path.slice(path.lastIndexOf(".")).toLowerCase();
    if (!IMAGE_EXT.has(ext)) return (json(res, 400, { ok: false, error: "not an image file" }), true);
    if (ref.conn === "ssh") {
      const data = await provider.readFileBytes(path);
      sendBytes(res, data, posixBasenameOf(path), true);
      return true;
    }
    await streamFile(res, path, true);
    return true;
  }

  // --- 压缩（单文件或整目录 → .zip） ---
  if (seg[0] === "compress" && seg.length === 1 && method === "POST") {
    const body = (await readBody(req)) as { key?: string; path?: string; to?: string } | null;
    if (!body?.path) return (json(res, 400, { ok: false, error: "path required" }), true);
    const srcT = routeTarget(body.path);
    const src = await srcT.provider.resolveExisting(srcT.path);
    const to = body?.to?.trim() ? await srcT.provider.resolveWritePath(body.to) : await srcT.provider.uniquePath(dirname(src), `${basename(src)}.zip`);
    await guardWrite(srcT.ref, body?.key, to);
    const dest = await srcT.provider.compressTo(src, to);
    return (json(res, 200, { ok: true, data: { path: dest } }), true);
  }

  // --- 解压 .zip 到目标目录 ---
  if (seg[0] === "extract" && seg.length === 1 && method === "POST") {
    const body = (await readBody(req)) as { key?: string; zipPath?: string; destDir?: string } | null;
    if (!body?.zipPath) return (json(res, 400, { ok: false, error: "zipPath required" }), true);
    const zipT = routeTarget(body.zipPath);
    const zip = await zipT.provider.resolveExisting(zipT.path);
    const destDir = body?.destDir?.trim() ? await zipT.provider.resolveWritePath(body.destDir) : dirname(zip);
    await guardWrite(zipT.ref, body?.key, destDir);
    const count = await zipT.provider.extractTo(zip, destDir);
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
    // 跨文件批量替换是本地写语义（isWithin 工作区守卫 + 逐文件落盘）；远端根首版明确不支持。
    if (parseRef(root).conn !== "local") {
      return (json(res, 501, { ok: false, error: "cross-file replace is not supported on remote (ssh) roots" }), true);
    }
    const base = body?.scope?.trim() ? routeTarget(body.scope).path : root;
    // 批量改写严格限定在工作区根内，杜绝越界改写。
    if (!isWithin(root, base)) return (json(res, 403, { ok: false, error: "scope outside workspace" }), true);
    guardWritable(base);
    const { provider } = routeTarget(base);
    const outcome = await provider.replaceInFiles(base, q, replacement, {
      caseSensitive: body?.caseSensitive === true,
      regex: body?.regex === true,
      write: async (abs, content) => {
        await provider.saveText(root, abs, content);
      },
    });
    return (json(res, 200, { ok: true, data: outcome }), true);
  }

  return false;
};
