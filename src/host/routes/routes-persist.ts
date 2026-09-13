/**
 * 持久化资源路由：界面偏好 / 收藏 / 最近 / 布局 / 标签快照等（/persist）。
 */
import { getAllPersist, getPersistKey, setPersistKey } from "../store/workbench-store.js";
import { json, readBody, type RouteMatcher } from "./routes-util.js";

/** 资源路由：读全量 / 写单个持久化 key。 */
export const persistResource: RouteMatcher = async (req, res, seg, q, method, host) => {
  void host;
  void q;
  if (seg[0] === "persist" && seg.length === 1) {
    if (method === "GET") {
      const k = q.get("k")?.trim();
      const data = k ? { [k]: await getPersistKey(k) } : await getAllPersist();
      return (json(res, 200, { ok: true, data }), true);
    }
    if (method === "POST") {
      const body = (await readBody(req)) as { k?: string; v?: unknown } | null;
      if (!body?.k || body.v === undefined) {
        return (json(res, 400, { ok: false, error: "key k and value v required" }), true);
      }
      await setPersistKey(String(body.k), body.v);
      return (json(res, 200, { ok: true, data: { k: body.k } }), true);
    }
  }
  return false;
};