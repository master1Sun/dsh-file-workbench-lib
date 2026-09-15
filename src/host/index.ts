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
import { makePushUpgrade } from "./routes/ws-push.js";
import { autoUpdate } from "./updater.js";

export { makeFileWorkbenchRoutes } from "./routes/routes.js";
export { makePushUpgrade } from "./routes/ws-push.js";
export { PREFIX } from "./routes/routes.js";

export const name = "dsh-file-workbench";

/** 无静态必需服务：webServer 按条件注入。 */
export const inject: string[] = [];

export function apply(ctx: Context): void {
  // 官方自更新：启动后延迟检测 dsh 插件市场更高版本并自动安装
  // （委托 /dsh-market/api/v1，失败静默，不阻塞）。
  ctx.inject(["webServer"], (httpCtx: Context) => {
    const timer = setTimeout(() => {
      void autoUpdate(httpCtx);
    }, 5000);
    timer.unref?.();
    httpCtx.effect(() => () => clearTimeout(timer), "dsh-file-workbench: self-update");
    httpCtx.effect(() => {
      // 传入插件级 ctx，供路由在运行时按名解析宿主服务。
      const routes = makeFileWorkbenchRoutes(() => ctx);
      const disposers = routes.map((route) => httpCtx.webServer.register(route));
      return () => {
        for (const dispose of disposers) dispose();
      };
    }, "dsh-file-workbench: routes");
    httpCtx.effect(() => {
      // 工作台推送通道（WebSocket）：文件落盘改动 + SSH 主机连通性，升级路由必须精确路径注册。
      return httpCtx.webServer.registerUpgrade(makePushUpgrade());
    }, "dsh-file-workbench: push");
  });
}