/**
 * 右侧栏导航能力的 Vue 侧访问点。
 *
 * 真实实现在 client 侧（apply 时从 `ctx.sidebarRight` 逐方法转发），经
 * `window.__DSH_SIDEBAR_RIGHT__` 发布。**不能让 Vue 侧 import client 模块**：
 * 两个 bundle 各自持有一份模块状态，直接 import 只会读到空引用。
 *
 * 未就绪（无选中会话 / 旧版宿主）时全部降级为中性行为：读能力返回 false / undefined，
 * 动作静默不做 —— 调用方据此决定是否展示入口或给出提示。
 */
import type { SidebarRightBridge, SidebarRightOpenOptions } from "../../../shared/types";
import { toast } from "../../stores/workbench";
import { t } from "./i18n";

/** 「文件工作台」tab 的 kind（与 src/client/index.tsx 的 KIND 一致）。 */
export const FILE_WORKBENCH_KIND = "workbench";
/** 「文件编辑器」tab 的 kind（与 src/client/index.tsx 的 KIND_VS 一致）。 */
export const FILE_EDITOR_KIND = "vscode";

function bridge(): SidebarRightBridge | undefined {
  return typeof window !== "undefined" ? window.__DSH_SIDEBAR_RIGHT__ : undefined;
}

/** 右侧栏控制器是否已就绪（未就绪时不宜展示依赖它的入口，避免点了没反应）。 */
export function hasSidebarRight(): boolean {
  return !!bridge();
}

/** 打开某个页 tab（可指定分栏与导航参数）。 */
export function openPanelTab(kind: string, options?: SidebarRightOpenOptions): void {
  bridge()?.openTab(kind, options);
}

/**
 * 在当前分栏里**平级**再开一个文件编辑器 tab（不新建分栏）。
 *
 * 分配由 client 侧完成：宿主页 tab 在同一分栏内按 kind 唯一，所以「平级多开」= 让新 tab
 * 占一个尚未使用的 kind 再 `openTab`；池满（8 个）时顶替编号最小的那一个。这里只做转发。
 *
 * @param params - 导航参数：`{ fresh: true }` = 空白窗口；`{ projectDir }` = 打开某项目。
 * @returns 是否成功发起；右侧栏桥未就绪或宿主抛错时为 false（调用方据此提示用户）。
 */
export function openNewEditorTab(params?: Record<string, unknown>): boolean {
  return bridge()?.newEditorTab(params) ?? false;
}

/** 编辑器 kind 池是否已满（再新建会顶替掉最旧的一个）。池未就绪时按「未满」处理。 */
export function editorTabFull(): boolean {
  const b = bridge();
  if (!b) return false;
  const limit = b.editorTabLimit();
  return limit > 0 && b.editorTabCount() >= limit;
}

/**
 * 把右侧栏分出第二格。
 *
 * @returns 新分栏 id；窗口太窄 / 已达两格上限时为 undefined（**不是错误**，只是宿主不允许）。
 */
export function splitRightPane(paneId?: string): string | undefined {
  return bridge()?.split(paneId);
}

/** 把某个停靠 tab 弹出为独立浮窗。 */
export function floatTab(tabId: string): void {
  bridge()?.float(tabId);
}

/** 把某个浮窗收回停靠位。 */
export function dockPane(paneId: string): void {
  bridge()?.dock(paneId);
}

/**
 * 兜底投递：待下一个挂载的文件编辑器打开的项目目录。
 *
 * 正常通道是导航参数（`params.projectDir` → 面板的 `projectRequest`）。但那条通道依赖
 * 宿主把 `tabInfo` 钩子作为 prop 下发给 tab 正文 —— 旧版宿主可能没有。这里额外留一份
 * 模块级投递：面板挂载时若参数通道没送到，就取走它。
 *
 * 参数通道成功送达时由面板调用 `clearPendingEditorProject()` 作废本兜底，
 * 否则「切面板重挂载」会把用户早已换掉的项目又跳回来。
 */
let pendingEditorProject: string | null = null;

/** 取走并清空兜底投递（无则返回 null）。 */
export function takePendingEditorProject(): string | null {
  const p = pendingEditorProject;
  pendingEditorProject = null;
  return p;
}

/** 作废兜底投递（参数通道已送达时调用）。 */
export function clearPendingEditorProject(): void {
  pendingEditorProject = null;
}

/**
 * 在**文件编辑器**里打开一个项目目录 —— **每次都新开一个编辑器窗口**。
 *
 * 走 client 侧的 kind 池分配（`newEditorTab`）：新实例占一个空 kind，因此是**独立的一份**
 * 编辑器（自己的项目、标签、未保存缓冲）；池满（8 个）时顶替编号最小的那一个，不会无限增长。
 *
 * 目录经导航参数 `params.projectDir` 送达新实例（面板的 `useTabInfo().tab.navigation` 读取）；
 * 另留一份模块级兜底投递，兼容宿主不下发 tab 信息钩子的情况。
 */
export function openProjectInEditor(dir: string): void {
  const d = dir?.trim();
  if (!d) return;
  pendingEditorProject = d;
  // 池满时新建会**顶替掉最旧的一个**，其未保存改动随之消失 —— 按约定不静默丢数据，先提示。
  const wasFull = editorTabFull();
  // 极端路径（右侧栏桥未就绪 / 宿主 openTab 抛错）退化为「聚焦已有编辑器并把目录投递过去」，
  // 至少不让这次点击彻底落空。
  if (!openNewEditorTab({ projectDir: d })) {
    openPanelTab(FILE_EDITOR_KIND, { params: { projectDir: d } });
    return;
  }
  if (wasFull) toast("info", t("vsReplacedOldest"));
}
