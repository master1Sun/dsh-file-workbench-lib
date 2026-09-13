/**
 * dsh-file-workbench — host 入口（Cordis 插件）。
 *
 * 职责：
 *  - 提供 /api/dsh-file-workbench 下的文件浏览 REST（列目录/打开/保存/搜索/CRUD）；
 *  - 提供 Vue 前端构建产物（lib/web）的静态服务；
 *  - client 端经 DSH 右侧栏 tab 把 Vue 文件工作台挂进右侧面板。
 */
import type { Context } from "@deepseek-ai/cordis";
import { makeFileWorkbenchRoutes } from "./routes/routes.js";
import { autoUpdate } from "./updater.js";

export { makeFileWorkbenchRoutes } from "./routes/routes.js";
export { PREFIX } from "./routes/routes.js";

export const name = "dsh-file-workbench";

/** 无静态必需服务：webServer 按条件注入。 */
export const inject: string[] = [];

export function apply(ctx: Context): void {
  // 纯后端自更新：启动后延迟检测 git 更新版本并自动安装（失败静默，不阻塞）。
  const timer = setTimeout(() => {
    void autoUpdate();
  }, 5000);
  timer.unref?.();
  ctx.effect(() => () => clearTimeout(timer), "dsh-file-workbench: self-update");
  // 注册 /api/dsh-file-workbench 下的路由（webServer 可用时）。
  ctx.inject(["webServer"], (httpCtx: Context) => {
    httpCtx.effect(() => {
      // 传入插件级 ctx，供路由在运行时按名解析宿主服务。
      const routes = makeFileWorkbenchRoutes(() => ctx);
      const disposers = routes.map((route) => httpCtx.webServer.register(route));
      return () => {
        for (const dispose of disposers) dispose();
      };
    }, "dsh-file-workbench: routes");
  });
}