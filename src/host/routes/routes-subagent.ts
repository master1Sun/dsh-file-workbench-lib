/**
 * 子代理资源路由（0.1.5 方式）：POST /subagent/spawn。
 *
 * 前端传 { path?, isDir?, instruction?, session? }；宿主走 `ctx.subagents`
 * 的 startContinuable（建立持久子会话 → 进官方子代理会话视图），必要时回退
 * 一次性 start()。这里只透传结果（{ ok, sessionId, mode, output, error }）。
 * 不自建面板、不做本地持久化。
 */
import { spawnSubagent } from "../subagent/subagent.js";
import { json, readBody, type RouteMatcher } from "./routes-util.js";

/** 资源路由：子代理发起。 */
export const subagentResource: RouteMatcher = async (req, res, seg, _q, method, host) => {
  if (seg[0] !== "subagent" || seg[1] !== "spawn" || method !== "POST") return false;
  const body = (await readBody(req)) as {
    path?: unknown;
    isDir?: unknown;
    instruction?: unknown;
    session?: unknown;
  } | null;
  // ctx 不可得属于插件装配问题，返回可读 500（而非静默失败）。
  if (!host?.ctxProvider) return (json(res, 500, { ok: false, error: "subagent service context unavailable" }), true);
  const data = await spawnSubagent(host.ctxProvider(), {
    path: typeof body?.path === "string" ? body.path : undefined,
    isDir: body?.isDir === true,
    instruction: typeof body?.instruction === "string" ? body.instruction : "",
    sessionId: typeof body?.session === "string" && body.session ? body.session : undefined,
  });
  return (json(res, 200, { ok: true, data }), true);
};
