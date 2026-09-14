/**
 * 右侧面板 tab 主体（注册于 `sidebar.right.pane.tab`，key = 包名）。
 *
 * 把 Vue 文件工作台（App.vue 主体，无抽屉外壳）挂进插槽容器：复用 apply 注入到
 * document.head 的 Vue 产物（样式 + 模块脚本，仅用于定义 __dshFileWorkbenchMountPane__），
 * 仅调用 __dshFileWorkbenchMountPane__ 把工作台主体挂进本组件渲染的容器。
 *
 * 挂载是惰性的：Vue 模块尚未就绪时轮询等待，避免右侧面板比脚本加载更早打开时找不到挂载点。
 */
import { useEffect, useRef, type ReactNode } from "react";

/** 前端资源基址前缀（与 src/client/index.tsx 的 PREFIX 保持一致）。 */
const API_PREFIX = "/api/dsh-file-workbench";

interface PaneMount {
  (el: HTMLElement, opts?: { apiBase?: string }): { unmount: () => void };
}

function tryMount(el: HTMLElement): { unmount: () => void } | null {
  const mfn = (window as unknown as { __dshFileWorkbenchMountPane__?: PaneMount }).__dshFileWorkbenchMountPane__;
  if (typeof mfn === "function") {
    return mfn(el, { apiBase: `${window.location.origin}${API_PREFIX}` });
  }
  return null;
}

export function RightPaneBridge(): ReactNode {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let unmounter: { unmount: () => void } | null = null;
    let timer = 0;
    const attempt = (): void => {
      const u = tryMount(el);
      if (u) {
        unmounter = u;
        return;
      }
      timer = window.setTimeout(attempt, 60);
    };
    attempt();
    return () => {
      if (timer) window.clearTimeout(timer);
      try {
        unmounter?.unmount();
      } catch (e) {
        console.warn("[dsh-file-workbench] pane unmount failed:", e);
      }
    };
  }, []);

  return <div ref={ref} style={{ height: "100%", width: "100%", minHeight: 0 }} />;
}

/**
 * 「VS Code 编辑器」tab 主体（注册于 `sidebar.right.pane.tab`，key = ID_VS）。
 *
 * 与 RightPaneBridge 同构，但挂载点改为 `__dshVSCodeMountPane__`（由 Vue 端的
 * VS Code 编辑器主体消费），其余惰性挂载/卸载逻辑一致。
 */
function tryMountVs(el: HTMLElement): { unmount: () => void } | null {
  const mfn = (window as unknown as { __dshVSCodeMountPane__?: PaneMount }).__dshVSCodeMountPane__;
  if (typeof mfn === "function") {
    return mfn(el, { apiBase: `${window.location.origin}${API_PREFIX}` });
  }
  return null;
}

export function VSCodePaneBridge(): ReactNode {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let unmounter: { unmount: () => void } | null = null;
    let timer = 0;
    const attempt = (): void => {
      const u = tryMountVs(el);
      if (u) {
        unmounter = u;
        return;
      }
      timer = window.setTimeout(attempt, 60);
    };
    attempt();
    return () => {
      if (timer) window.clearTimeout(timer);
      try {
        unmounter?.unmount();
      } catch (e) {
        console.warn("[dsh-file-workbench] vscode pane unmount failed:", e);
      }
    };
  }, []);

  return <div ref={ref} style={{ height: "100%", width: "100%", minHeight: 0 }} />;
}
