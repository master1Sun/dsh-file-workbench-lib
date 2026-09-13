/**
 * DSH host 运行时依赖的类型垫片。
 *
 * `@deepseek-ai/cordis` 与 `@deepseek-ai/dsh-host-webserver` 由宿主（dsh web）在运行时
 * 注入，本项目 node_modules 里并无实体安装。此处以松散声明让 `vue-tsc --noEmit` 通过；
 * 运行时类型由宿主契约决定，本文件只描述我们用到的形状。
 */
declare module "@deepseek-ai/cordis" {
  export interface Context {
    inject(
      services: string[],
      callback: (ctx: Context) => void | Promise<void> | (() => void),
    ): unknown;
    effect<T>(fn: (ctx: Context) => T, label?: string): void;
    webServer: {
      register(route: unknown): () => void;
    };
    [key: string]: unknown;
  }
}

declare module "@deepseek-ai/dsh-host-webserver" {
  import type { IncomingMessage, ServerResponse } from "node:http";
  export interface WebRoute {
    kind?: "prefix";
    path: string;
    handler: (req: IncomingMessage, res: ServerResponse) => void | Promise<void>;
  }
}