/**
 * 右侧栏导航能力门面（`ctx.sidebarRight` 的模块级桥）。
 *
 * client 插件 apply 时登记真实实现（`index.tsx` 从 ctx 逐方法惰性转发），这里把它
 * **包装为不抛错的对象并发布到 `window.__DSH_SIDEBAR_RIGHT__`**。
 *
 * 为什么必须过 window 而不是让 Vue 侧 import 本模块：client（esbuild 产物）与 Vue
 * （vite 产物）是两个独立 bundle，各自持有一份模块状态 —— 直接 import 只会读到一份
 * 永远为空的引用。这与既有 `window.__DSH_FILE_WORKBENCH__` 桥接同一套路。
 *
 * 宿主尚无挂载的右侧栏座位时（例如没有选中会话），`ctx.sidebarRight` 的方法会抛错；
 * 包装层统一吞掉并返回中性值，避免用户点一下就弹一个宿主异常。
 */
import type { SidebarRightBridge } from "../shared/types";

let guarded: SidebarRightBridge | undefined;

function warn(label: string, e: unknown): void {
  console.warn(`[dsh-file-workbench] sidebarRight.${label} failed:`, e);
}

/** 登记右侧栏控制器（apply 时调用；传 null 撤销）。 */
export function setSidebarRight(raw: SidebarRightBridge | null): void {
  guarded = raw
    ? {
        openTab(kind, options) {
          try {
            raw.openTab(kind, options);
          } catch (e) {
            warn("openTab", e);
          }
        },
        split(paneId) {
          try {
            return raw.split(paneId);
          } catch (e) {
            warn("split", e);
            return undefined;
          }
        },
        float(tabId) {
          try {
            raw.float(tabId);
          } catch (e) {
            warn("float", e);
          }
        },
        dock(paneId) {
          try {
            raw.dock(paneId);
          } catch (e) {
            warn("dock", e);
          }
        },
        close(tabId) {
          try {
            raw.close(tabId);
          } catch (e) {
            warn("close", e);
          }
        },
        isExpanded() {
          try {
            return raw.isExpanded();
          } catch {
            return false;
          }
        },
        newEditorTab(params) {
          try {
            return raw.newEditorTab(params);
          } catch (e) {
            warn("newEditorTab", e);
            return false;
          }
        },
        editorTabCount() {
          try {
            return raw.editorTabCount();
          } catch (e) {
            warn("editorTabCount", e);
            return 0;
          }
        },
        editorTabLimit() {
          try {
            return raw.editorTabLimit();
          } catch (e) {
            warn("editorTabLimit", e);
            return 0;
          }
        },
      }
    : undefined;
  if (typeof window !== "undefined") window.__DSH_SIDEBAR_RIGHT__ = guarded;
}

/** 当前门面（client 内部用；Vue 侧读 `window.__DSH_SIDEBAR_RIGHT__`）。 */
export function sidebarRightBridge(): SidebarRightBridge | undefined {
  return guarded;
}
