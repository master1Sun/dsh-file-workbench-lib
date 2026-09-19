/**
 * host 端 REST + 静态资源路由（按资源拆分后的统一分发表）。
 *
 * 前缀 `/api/dsh-file-workbench`。各资源路由实现拆到独立模块，职责单一：
 *   - routes-fs.ts         文件系统/根/列表/读写/搜索/CRUD/压缩/下载/图片
 *   - routes-git.ts        Git 状态/暂存/提交/分支/远程
 *   - routes-terminal.ts   ConPTY 交互终端（SSE 流/输入/终止）
 *   - routes-subagent.ts   子代理发起（宿主 0.1.5 spawn，官方会话展示）
 *   - routes-recycle.ts    Windows 系统回收站
 *   - routes-session-stream.ts  会话触碰文件/运行态 SSE
 *   - routes-persist.ts    界面偏好/收藏/布局持久化
 *   - routes-ssh.ts        SSH 远端主机管理（列表/新增/删除/测试/TOFU 信任）
 *   - routes-accounts.ts   Git / SVN 账号（凭据）管理（列表/增删改/测试连通/写入系统）
 *
 * 本文件只做：解析 method / path / query，把请求交给对应资源 matcher，
 * 未命中返回 404，异常统一经 fail 转 JSON 错误。
 */
import type { Context } from "@deepseek-ai/cordis";
import type { WebRoute } from "@deepseek-ai/dsh-host-webserver";
import type { IncomingMessage, ServerResponse } from "node:http";

// 供其它模块 / index.ts 引用的常量与工具。
export { PREFIX, WEB_DIR } from "./routes-util.js";
import { FsError, PREFIX, fail, queryOf, type RouteHost } from "./routes-util.js";
import { fsResource } from "./routes-fs.js";
import { gitResource } from "./routes-git.js";
import { svnResource } from "./routes-svn.js";
import { terminalResource } from "./routes-terminal.js";
import { subagentResource } from "./routes-subagent.js";
import { sessionStreamResource } from "./routes-session-stream.js";
import { recycleResource } from "./routes-recycle.js";
import { persistResource } from "./routes-persist.js";
import { taskArchiveResource } from "./routes-task-archives.js";
import { sshResource } from "./routes-ssh.js";
import { accountsResource } from "./routes-accounts.js";
import { pluginResource, pluginIndexResource, pluginRegistryResource, pluginSrcResource, pluginDocResource, pluginDataResource } from "./routes-plugins.js";

export function makeFileWorkbenchRoutes(ctxProvider?: () => Context): WebRoute[] {
  const host: RouteHost = { ctxProvider };
  const handler = async (req: IncomingMessage, res: ServerResponse): Promise<void> => {
    const method = (req.method ?? "GET").toUpperCase();
    const pathname = (req.url ?? "").split("?", 1)[0] ?? "";
    const tail = pathname.startsWith(PREFIX) ? pathname.slice(PREFIX.length) : pathname;
    const seg = tail.split("/").filter(Boolean);
    const q = queryOf(req.url);

    try {
      // 按资源顺序分发：命中（返回 true 即处理完成）则结束；全部未命中 → 404。
      if (await fsResource(req, res, seg, q, method, host)) return;
      if (await gitResource(req, res, seg, q, method, host)) return;
      if (await svnResource(req, res, seg, q, method, host)) return;
      if (await terminalResource(req, res, seg, q, method, host)) return;
      if (await subagentResource(req, res, seg, q, method, host)) return;
      if (await recycleResource(req, res, seg, q, method, host)) return;
      if (await sessionStreamResource(req, res, seg, q, method, host)) return;
      if (await persistResource(req, res, seg, q, method, host)) return;
      if (await taskArchiveResource(req, res, seg, q, method, host)) return;
      if (await sshResource(req, res, seg, q, method, host)) return;
      if (await accountsResource(req, res, seg, q, method, host)) return;
      if (await pluginResource(req, res, seg, q, method, host)) return;
      if (await pluginIndexResource(req, res, seg, q, method, host)) return;
      if (await pluginRegistryResource(req, res, seg, q, method, host)) return;
      if (await pluginSrcResource(req, res, seg, q, method, host)) return;
      if (await pluginDocResource(req, res, seg, q, method, host)) return;
      if (await pluginDataResource(req, res, seg, q, method, host)) return;
      // 未命中：**必须是 404**。不能抛裸 Error —— fail() 只把 FsError 映射成它的 status，
      // 其余一律 500，会让「路径不存在」这种最常规的情况被前端报成「服务端处理失败」。
      return fail(res, new FsError("not-found", `no route ${method} ${pathname}`, 404));
    } catch (error) {
      return fail(res, error);
    }
  };

  return [
    {
      kind: "prefix",
      path: PREFIX,
      handler,
    },
  ];
}