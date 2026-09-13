/**
 * 系统回收站资源路由：列出 / 恢复 / 彻底删除 / 清空 / 计数。
 *
 * 底层按平台分发：win32 走 PowerShell Shell.Application，POSIX 走 XDG Trash
 * （见 src/host/fs/recycle.ts）。本路由本身无平台判断。
 * 清空（empty）是异步触发后立即返回，由前端轮询 count 展示任务进度。
 */
import {
  json,
  readBody,
  type RouteMatcher,
} from "./routes-util.js";
import {
  listRecycleItems,
  recycleCount,
  restoreRecycleItem,
  deleteRecycleItem,
  emptyRecycle,
} from "../fs/recycle.js";

/** 回收站资源路由：recycle-list / recycle-count / recycle-restore / recycle-delete / recycle-empty。 */
export const recycleResource: RouteMatcher = async (req, res, seg, _q, method) => {
  // --- 列出回收站条目 ---
  if (seg[0] === "recycle-list" && seg.length === 1 && method === "GET") {
    const items = await listRecycleItems();
    return (json(res, 200, { ok: true, data: { items } }), true);
  }

  // --- 回收站条目数（清空进度轮询） ---
  if (seg[0] === "recycle-count" && seg.length === 1 && method === "GET") {
    const count = await recycleCount();
    return (json(res, 200, { ok: true, data: { count } }), true);
  }

  // --- 恢复单个条目到原路径 ---
  if (seg[0] === "recycle-restore" && seg.length === 1 && method === "POST") {
    const body = (await readBody(req)) as { fullPath?: string } | null;
    const fullPath = body?.fullPath;
    if (!fullPath) return (json(res, 400, { ok: false, error: "fullPath required" }), true);
    await restoreRecycleItem(fullPath);
    return (json(res, 200, { ok: true, data: { restored: true } }), true);
  }

  // --- 彻底删除单个条目（不可恢复） ---
  if (seg[0] === "recycle-delete" && seg.length === 1 && method === "POST") {
    const body = (await readBody(req)) as { fullPath?: string } | null;
    const fullPath = body?.fullPath;
    if (!fullPath) return (json(res, 400, { ok: false, error: "fullPath required" }), true);
    await deleteRecycleItem(fullPath);
    return (json(res, 200, { ok: true, data: { deleted: true } }), true);
  }

  // --- 清空回收站（异步触发，前端轮询 count 展示进度） ---
  if (seg[0] === "recycle-empty" && seg.length === 1 && method === "POST") {
    emptyRecycle();
    return (json(res, 200, { ok: true, data: { started: true } }), true);
  }

  return false;
};