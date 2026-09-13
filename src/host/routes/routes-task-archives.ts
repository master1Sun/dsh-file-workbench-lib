/**
 * 后台任务归档路由（/task-archives）：基于 taskArchives/ 目录逐日独立 JSON 文件。
 *
 *   GET  /task-archives         读取全量归档映射 { 日期: 记录[] }
 *   GET  /task-archives?list    仅列出已归档日期
 *   POST /task-archives         整体覆写（body: { map }），逐日期写独立文件
 */
import { listTaskArchiveDates, readTaskArchives, writeTaskArchives } from "../store/workbench-store.js";
import { json, readBody, type RouteMatcher } from "./routes-util.js";

/** 后台任务归档资源路由。 */
export const taskArchiveResource: RouteMatcher = async (req, res, seg, q, method) => {
  if (seg[0] === "task-archives" && seg.length === 1) {
    if (method === "GET") {
      if (q.get("list") !== null) {
        return (json(res, 200, { ok: true, data: { dates: await listTaskArchiveDates() } }), true);
      }
      return (json(res, 200, { ok: true, data: { map: await readTaskArchives() } }), true);
    }
    if (method === "POST") {
      const body = (await readBody(req)) as { map?: Record<string, unknown> } | null;
      if (!body?.map || typeof body.map !== "object") {
        return (json(res, 400, { ok: false, error: "map required" }), true);
      }
      await writeTaskArchives(body.map as Parameters<typeof writeTaskArchives>[0]);
      return (json(res, 200, { ok: true, data: { ok: true } }), true);
    }
  }
  return false;
};
