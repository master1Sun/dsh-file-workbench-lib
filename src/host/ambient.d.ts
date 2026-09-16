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
      registerUpgrade(route: unknown): () => void;
    };
    [key: string]: unknown;
  }
}

declare module "@deepseek-ai/dsh-host-webserver" {
  import type { IncomingMessage, ServerResponse } from "node:http";
  import type { Duplex } from "node:stream";
  export interface WebRoute {
    kind?: "prefix";
    path: string;
    handler: (req: IncomingMessage, res: ServerResponse) => void | Promise<void>;
  }
  /** 精确路径的 HTTP 升级注册项（协议协商与升级后的 socket 由 handler 自己拥有）。 */
  export interface WebUpgradeRoute {
    path: string;
    handler: (req: IncomingMessage, socket: Duplex, head: Buffer) => void | Promise<void>;
  }
}

/**
 * ssh2（终端的手动输密码登录路径直接用到 Client）。ssh2 自身不带类型定义
 * （@types/ssh2 未安装），只声明本项目实际用到的最小表面。
 */
declare module "ssh2" {
  export interface SshKeyboardPrompt {
    prompt: string;
    echo: boolean;
  }
  export class Client {
    connect(opts: Record<string, unknown>): void;
    /** 键盘交互式认证：远端弹出口令提示时触发，`finish(responses)` 回灌应答推进认证。 */
    on(
      event: "keyboard-interactive",
      cb: (
        name: string,
        instructions: string,
        lang: string,
        prompts: SshKeyboardPrompt[],
        finish: (responses: string[]) => void,
      ) => void,
    ): this;
    on(event: "ready", cb: () => void): this;
    on(event: "error", cb: (err: Error) => void): this;
    on(event: "close", cb: () => void): this;
    shell(
      opts: { term: string; cols: number; rows: number },
      cb: (err: Error | undefined | null, stream: unknown) => void,
    ): void;
    end(): void;
  }
  const ssh2: { Client: typeof Client };
  export default ssh2;
}