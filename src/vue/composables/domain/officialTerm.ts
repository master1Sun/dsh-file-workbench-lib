/**
 * 官方终端桥的 Vue 侧取用器。
 *
 * 桥的实体在 React 侧（src/client/OfficialTerminalBridge.ts，持有 Cordis ctx 才能碰到
 * `ctx.webTerminals`），经 `window.__DSH_FILE_WORKBENCH__.officialTerminal` 以命令式 API
 * 暴露过来；数据用 window CustomEvent 推送（`dshfw-ot-data` / `dshfw-ot-status`，
 * 契约见桥文件头注释）。本文件只做取型 + 事件 detail 类型，逻辑都在 terminalStore。
 */

/** React 侧 OfficialTermApi 的镜像（字段注释见桥文件）。 */
export interface DshFwOfficialTermApi {
  available(): boolean;
  create(tag: string, opts: { cols: number; rows: number }): Promise<{ cwd?: string } | null>;
  write(tag: string, data: string): boolean;
  resize(tag: string, cols: number, rows: number): void;
  detach(tag: string): void;
  close(tag: string): void;
}

/** 官方终端输出帧事件 detail。 */
export interface OtDataDetail {
  tag: string;
  kind: "snapshot" | "output";
  text: string;
}

/** 官方终端状态事件 detail。 */
export interface OtStatusDetail {
  tag: string;
  phase: string;
  cwd?: string;
  exited?: boolean;
  error?: string;
}

/** 取官方终端桥（宿主没有官方终端服务 / bundle 未注入时为 null）。 */
export function officialTermApi(): DshFwOfficialTermApi | null {
  if (typeof window === "undefined") return null;
  const api = (window as unknown as { __DSH_FILE_WORKBENCH__?: { officialTerminal?: DshFwOfficialTermApi } })
    .__DSH_FILE_WORKBENCH__?.officialTerminal;
  return api && typeof api.create === "function" ? api : null;
}

/** 官方终端当前是否可用（桥存在 + 有选中会话）。不可用时本机终端走自建后端。 */
export function officialTermAvailable(): boolean {
  try {
    return officialTermApi()?.available() ?? false;
  } catch {
    return false;
  }
}
