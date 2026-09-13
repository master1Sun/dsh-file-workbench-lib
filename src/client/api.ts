/**
 * 一个极小的模块级桥：把 client 插件 apply 时拿到的 `ctx.sidebarRight.openTab`
 * 暴露给 React 组件使用（组件只拿到框架 props，拿不到 ctx）。
 */

type OpenTab = (kind: string) => void;

let openTabRef: OpenTab | null = null;

/** apply 时登记打开 tab 的能力。 */
export function setOpenTab(fn: OpenTab | null): void {
  openTabRef = fn;
}

/** 打开指定 kind 的右侧面板 tab；宿主未就绪时静默失败。 */
export function openPanelTab(kind: string): void {
  try {
    openTabRef?.(kind);
  } catch (err) {
    // 尚无挂载的 right-sidebar 座位时会抛错，按提示处理即可。
    console.warn("[dsh-file-workbench] openTab failed:", err);
  }
}
