/**
 * 路由拆分共享基础设施：JSON 信封、请求体/查询解析、静态资源服务、路径校验等。
 *
 * 供 fs / git / recycle / persist 等各资源路由模块复用，避免 routes.ts 膨胀。
 * 宿主路由 prefix 与终端会话状态见各自模块（routes.ts 仍负责统一分发）。
 */
import type { IncomingMessage, ServerResponse } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { stat } from "node:fs/promises";
import { basename, resolve } from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

import type { Context } from "@deepseek-ai/cordis";
import type { ApiResponse } from "../../shared/types.js";
import { FsError, isProtectedPath, isWithin, requireAbsolute } from "../fs/fs-tree.js";
import { getRoot } from "../store/root-store.js";
import { getPersistKey } from "../store/workbench-store.js";
import { parseRef } from "../fs/fs-provider.js";
import { connFor } from "../ssh/ssh-hosts.js";
import { shellQuoteSingle } from "../ssh/ssh-core.js";

/** host 端用于解析子 agent / 会话等运行时服务的能力；资源模块按需使用。 */
export interface RouteHost {
  ctxProvider?: () => Context;
}

/** 资源路由处理函数：处理成功返回 true（已发出响应），未命中返回 false。 */
export type RouteMatcher = (
  req: IncomingMessage,
  res: ServerResponse,
  seg: string[],
  q: URLSearchParams,
  method: string,
  host?: RouteHost,
) => Promise<boolean>;

export const PREFIX = "/api/dsh-file-workbench";

/** lib/web 静态资源目录（构建时由 scripts/build.mjs 从 dist 拷贝到 lib/web）。 */
export const WEB_DIR = fileURLToPath(new URL("./web", import.meta.url));

function sendJson(res: ServerResponse, status: number, body: ApiResponse<unknown>): void {
  // 连接已断开（客户端中止 / 套接字销毁）：写响应既无意义又可能抛未捕获错误，直接跳过。
  if (res.writableEnded || res.destroyed) return;
  try {
    // 吞掉底层套接字错误（已断开时 res.end 可能异步触发），避免未处理 error 事件崩进程。
    res.on("error", () => {});
    res.writeHead(status, { "content-type": "application/json; charset=utf-8" });
    res.end(JSON.stringify(body));
  } catch {
    /* 连接已断开：静默 */
  }
}

export function json<T>(res: ServerResponse, status: number, body: ApiResponse<T>): void {
  sendJson(res, status, body);
}

export function fail(res: ServerResponse, error: unknown): void {
  if (error instanceof FsError) {
    return sendJson(res, error.status, { ok: false, error: error.message });
  }
  const msg = error instanceof Error ? error.message : String(error);
  return sendJson(res, 500, { ok: false, error: msg });
}

/** 请求体大小上限：超过直接拒绝（413），防止超大 body 无界占用内存导致 OOM。 */
export const MAX_BODY_SIZE = 512 * 1024 * 1024;

export async function readBody(req: IncomingMessage): Promise<unknown> {
  return new Promise((resolve, reject) => {
    let body = "";
    let size = 0;
    let settled = false;
    const finish = (value: unknown, isError: boolean): void => {
      if (settled) return;
      settled = true;
      if (isError) reject(value as Error);
      else resolve(value);
    };
    req.on("data", (c: Buffer) => {
      if (settled) return;
      size += c.length;
      if (size > MAX_BODY_SIZE) {
        // 只结算字节数，不再继续拼接，避免内存无限增长；同时持续消费流防止背压。
        body = "";
        finish(new FsError("too-large", `request body exceeds the ${MAX_BODY_SIZE} byte limit`, 413), true);
        return;
      }
      body += c.toString();
    });
    req.on("end", () => {
      if (settled) return;
      let parsed: unknown = null;
      if (body) {
        try {
          parsed = JSON.parse(body);
        } catch {
          parsed = null;
        }
      }
      finish(parsed, false);
    });
    // ⛔ 客户端中止 / 连接断开 / 读取错误时，Promise 必须立即结算：
    // 否则句柄与连接被永久占用——面板切换时 `cancelAll()` 会中止在途请求，若无此兜底，
    // 被中止的 `/exec-input` 等服务端句柄永不释放，累积后同源连接配额耗尽，后续请求排死。
    req.on("aborted", () => finish(new FsError("fs-error", "request aborted by client", 499), true));
    req.on("error", (e: Error) =>
      finish(e instanceof FsError ? e : new FsError("bad-request", e.message, 400), true),
    );
    req.on("close", () => {
      if (!settled) finish(new FsError("fs-error", "request closed before complete", 499), true);
    });
  });
}

export function queryOf(url: string | undefined): URLSearchParams {
  return new URLSearchParams((url ?? "").split("?", 2)[1] ?? "");
}

/** 取当前根的绝对路径；未设根抛 409。 */
export function currentRoot(key: string | undefined): string {
  const root = getRoot(key);
  if (!root) throw new FsError("bad-request", "no workspace root set — open a folder first", 409);
  return root;
}

/**
 * 禁止对受保护只读目录（如 `C:\Windows` 整棵）进行任何写操作 —— 一律抛 403。
 *
 * 抽到共享层是因为**每个写路由都需要它**（fs / git / svn / 克隆检出）。此前 fs 路由
 * 私有一份、git 与 svn 各写一份近乎相同的判断，任何一处漏掉就是一条绕过路径。
 */
export function guardWritablePath(target: string): void {
  if (isProtectedPath(target)) {
    throw new FsError("forbidden", `path "${target}" is read-only (protected system area)`, 403);
  }
}

/**
 * 工作区外写操作守卫：仅当开启「root 开关」（prefs.allowOutsideRoot）后才允许操作工作区
 * 根目录之外的文件；默认工作区外只能浏览/查看。工作区内路径与非受保护一律放行。
 *
 * ⛔ 克隆/检出**必须**过这道闸：它们会凭空创建整棵目录树，且 URL 来自用户输入 ——
 *    不守卫就等于给了一个「往任意系统目录写一堆文件」的入口。
 */
export async function guardWriteTarget(key: string | undefined, target: string): Promise<void> {
  guardWritablePath(target);
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

/** 判断一段路径是否为绝对路径（跨平台，供 target 类接口校验）。 */
export { requireAbsolute };

const MIME: Record<string, string> = {
  ".js": "application/javascript",
  ".mjs": "application/javascript",
  ".css": "text/css",
  ".map": "application/json",
  ".json": "application/json",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".bmp": "image/bmp",
  ".avif": "image/avif",
  ".woff2": "font/woff2",
  ".html": "text/html",
};

/** 判定扩展名是否为浏览器可直接内联渲染的图片（供 _read-image 缩略图/平铺栅格使用）。 */
export const IMAGE_EXT = new Set([".png", ".jpg", ".jpeg", ".svg", ".gif", ".ico", ".webp", ".bmp", ".avif"]);

export function serveAsset(res: ServerResponse, rel: string): void {
  // 仅放行 assets 目录内的普通文件，拒绝穿越。
  const safeRel = rel.replace(/\\/g, "/");
  if (safeRel.includes("..")) return json(res, 400, { ok: false, error: "bad asset path" });
  const filePath = resolve(WEB_DIR, safeRel);
  if (!filePath.startsWith(resolve(WEB_DIR) + "\\") && !filePath.startsWith(resolve(WEB_DIR) + "/")) {
    return json(res, 400, { ok: false, error: "bad asset path" });
  }
  if (!existsSync(filePath) || !statSync(filePath).isFile()) {
    return json(res, 404, { ok: false, error: "asset not found" });
  }
  const ext = filePath.slice(filePath.lastIndexOf(".")).toLowerCase();
  res.writeHead(200, {
    "content-type": MIME[ext] ?? "application/octet-stream",
    "cache-control": "public, max-age=31536000, immutable",
  });
  createReadStream(filePath).pipe(res);
}

/**
 * 用系统默认程序打开（文件）或在系统文件管理器中打开（目录）。
 * 异步脱离（detached + unref），不阻塞 host；失败抛出描述性错误。
 */
export async function spawnOpen(target: string, isDir: boolean): Promise<void> {
  await new Promise<void>((resolvePromise, reject) => {
    let child: ReturnType<typeof spawn>;
    if (process.platform === "win32") {
      // start 会按文件关联打开文件、按目录打开资源管理器窗口
      child = spawn("cmd", ["/c", "start", "", target], { detached: true, stdio: "ignore" });
    } else if (process.platform === "darwin") {
      child = spawn("open", [target], { detached: true, stdio: "ignore" });
    } else {
      child = spawn("xdg-open", [target], { detached: true, stdio: "ignore" });
    }
    child.on("error", (error) => reject(new FsError("fs-error", `无法打开 ${isDir ? "文件夹" : "文件"}: ${error.message}`, 500)));
    child.unref();
    // 释放成功路径：进程已派生即视为可执行（退出码交给系统）
    setImmediate(resolvePromise);
  });
}

/** 流式输出一个本地文件的字节内容（带 Content-Type 与会话无关的浏览器缓存）。 */
export function streamFile(res: ServerResponse, safe: string, inline: boolean): Promise<void> {  return new Promise<void>((resolvePromise) => {
    const name = basename(safe);
    const ext = safe.slice(safe.lastIndexOf(".")).toLowerCase();
    const headers: Record<string, string> = {
      "content-type": inline ? (MIME[ext] ?? "application/octet-stream") : "application/octet-stream",
      "content-length": String(statSync(safe).size),
    };
    if (!inline) {
      // Content-Disposition 头值必须是 latin1 可编码：中文等非 ASCII 文件名直接写会抛
      // ERR_INVALID_CHAR 导致下载 500。用 ASCII 兜底名 + RFC 5987 filename* 编码真实名。
      const asciiName = name.replace(/[\\/]/g, "_").replace(/[^\x20-\x7e]/g, "_");
      headers["content-disposition"] = `attachment; filename="${asciiName}"; filename*=UTF-8''${encodeURIComponent(name.replace(/[\\/]/g, "_"))}`;
    }
    if (inline) headers["cache-control"] = "private, max-age=300";
    res.writeHead(200, headers);
    const rs = createReadStream(safe);
    rs.on("error", () => {
      res.destroy();
      resolvePromise();
    });
    rs.on("end", () => resolvePromise());
    rs.pipe(res);
  });
}

/**
 * 一次性输出一段字节（远端 ssh 文件下载/图片内联用）：响应头语义与 streamFile 对齐，
 * 但数据来自内存（远端已整读），不走本地文件流。
 */
export function sendBytes(res: ServerResponse, data: Uint8Array, name: string, inline: boolean): void {
  const ext = name.slice(name.lastIndexOf(".")).toLowerCase();
  const headers: Record<string, string> = {
    "content-type": inline ? (MIME[ext] ?? "application/octet-stream") : "application/octet-stream",
    "content-length": String(data.byteLength),
  };
  if (!inline) {
    const asciiName = name.replace(/[^\x20-\x7e]/g, "_");
    headers["content-disposition"] = `attachment; filename="${asciiName}"; filename*=UTF-8''${encodeURIComponent(name)}`;
  }
  if (inline) headers["cache-control"] = "private, max-age=300";
  res.writeHead(200, headers);
  res.end(Buffer.from(data));
}

/** 供属性/打开等接口校验目标为存在的文件（不存在则抛 404）。 */
export async function assertFile(path: string): Promise<void> {
  const s = await stat(path).catch(() => null);
  if (!s || !s.isFile()) throw new FsError("not-found", `"${path}" is not a file`, 404);
}

export { FsError };

/* ── 远端（ssh://）目录上的命令执行辅助：git clone / svn checkout 共用 ── */

/** 远端长命令（克隆/检出）的超时与输出上限，语义与本地 gitCloneExec 对齐。 */
export const REMOTE_EXEC_TIMEOUT_MS = 10 * 60 * 1000;
const REMOTE_EXEC_MAX_STDOUT = 4 * 1024 * 1024;

/** 解析 `ssh://<hostId>/<remoteAbsPath>` 目录引用；非 ssh 引用抛 400。 */
export function splitSshDir(dir: string): { hostId: string; remote: string } {
  const ref = parseRef(dir);
  if (ref.conn !== "ssh" || !ref.hostId) {
    throw new FsError("bad-request", `"${dir}" is not a valid ssh directory reference`, 400);
  }
  // 远端 POSIX 归一：折叠多余斜杠、目录去尾斜杠（根除外）——与 SftpFsProvider 的约定一致。
  let remote = ref.path.replace(/\/{2,}/g, "/");
  if (remote.length > 1) remote = remote.replace(/\/+$/, "");
  return { hostId: ref.hostId, remote };
}

/**
 * 在远端目录执行一条命令（git clone / svn checkout 等长命令）。
 *
 * `cwd` 由 ssh-core 的 buildRemoteCommand 落成 `cd '<dir>' && <cmd>`，目录不存在时
 * cd 即失败，错误信息可直接透出。返回码/输出形态与本地 gitRun 对齐，失败不抛错。
 */
export async function remoteRun(dir: string, cmd: string): Promise<{ code: number; stdout: string; stderr: string }> {
  const { hostId, remote } = splitSshDir(dir);
  const conn = await connFor(hostId);
  try {
    const r = await conn.exec(cmd, {
      cwd: remote,
      timeoutMs: REMOTE_EXEC_TIMEOUT_MS,
      maxStdoutBytes: REMOTE_EXEC_MAX_STDOUT,
    });
    return { code: r.code, stdout: r.stdout.trim(), stderr: r.stderr.trim() };
  } catch (error) {
    // exec 层异常（超时 / 连接断开 / 输出超限）没有退出码，归一成失败码透出。
    const msg = error instanceof Error ? error.message : String(error);
    const timedOut = /exec timed out/.test(msg);
    return { code: timedOut ? 124 : 127, stdout: "", stderr: msg };
  }
}

/** 远端目标（`<dir>/<name>`，POSIX 拼接）是否已存在。 */
export async function remotePathExists(dir: string, name: string): Promise<boolean> {
  const { hostId, remote } = splitSshDir(dir);
  const conn = await connFor(hostId);
  const fs = await conn.fs();
  try {
    return (await fs.stat(`${remote}/${name}`)) !== undefined;
  } catch {
    return false;
  }
}

/**
 * 删除远端目录（克隆/检出失败清理半成品用）：调用方必须事先确认目标原本不存在，
 * 这里只负责把失败残留删掉；删除本身失败不抛错（残留只影响重试时的 409 提示）。
 */
export async function remoteRmRf(dir: string, name: string): Promise<void> {
  const { hostId, remote } = splitSshDir(dir);
  const conn = await connFor(hostId).catch(() => null);
  if (!conn) return;
  await conn.exec(`rm -rf -- ${shellQuoteSingle(`${remote}/${name}`)}`, { timeoutMs: 30_000 }).catch(() => {});
}