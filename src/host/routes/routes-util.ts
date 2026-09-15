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
import { FsError, requireAbsolute } from "../fs/fs-tree.js";
import { getRoot } from "../store/root-store.js";

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
  res.writeHead(status, { "content-type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(body));
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
  return new Promise((resolvePromise, reject) => {
    let body = "";
    let size = 0;
    req.on("data", (c: Buffer) => {
      size += c.length;
      if (size > MAX_BODY_SIZE) {
        // 只结算字节数，不再继续拼接，避免内存无限增长；同时持续消费流防止背压。
        body = "";
        reject(new FsError("too-large", `request body exceeds the ${MAX_BODY_SIZE} byte limit`, 413));
        return;
      }
      body += c.toString();
    });
    req.on("end", () => {
      try {
        resolvePromise(JSON.parse(body));
      } catch {
        resolvePromise(null);
      }
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