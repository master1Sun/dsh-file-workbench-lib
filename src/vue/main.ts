/**
 * Vue 文件工作台入口。
 *
 * DSH:client 桥接组件以 <script> 注入本 bundle → 调用
 * window.__dshFileWorkbenchMountPane__(el, { apiBase }) 把工作台挂进 DSH 右侧面板容器；
 * 返回 { unmount } 供卸载。
 * 独立调试：vite dev 直接 import 本文件 → 自动挂到 #app。
 */
import { createApp, type App as VueApp } from "vue";
// Element Plus 按需引入（unplugin-vue-components/auto-import 在构建时注入用到的组件与样式）。
// 这里只保留全局基础样式与深色主题变量；各组件样式由 resolver 按需引入。
import "element-plus/theme-chalk/base.css";
import "element-plus/theme-chalk/dark/css-vars.css";
// ElMessage 以 JS 函数方式调用（import { ElMessage } from "element-plus"），
// resolver 只会为「模板 / 自动导入」的组件注入样式，函数式调用需手动补上样式文件，
// 否则错误/成功提示只有 class 没有外观（历史上就因此丢失过提示样式）。
import "element-plus/theme-chalk/el-message.css";
import AppFileWorkbench from "./App.vue";
import AppVSCode from "./components/business/vscode/VSCodePane.vue";
import TerminalHost from "./components/business/terminal/TerminalHost.vue";
import "./styles.css";
import { initPersist } from "./composables/core/settings";
import { cancelAll } from "./composables/core/useApi";
import { openPreview, toast } from "./stores/workbench";
import { browseTo, refreshListing, syncToSession } from "./stores/explorer";
import { connectSessionSse } from "./composables/session/sessionSse";
import { acquireVSCodeSlot, getVSCodeStore, VS_STORE_KEY, type VSCodeStore } from "./stores/vscode";

/** 面板挂载时由桥接层透传的身份与 API 基址。 */
export interface PaneMountOptions {
  apiBase?: string;
  /** DSH 右侧栏 tab id（页面生命周期内稳定）→ 决定文件编辑器实例槽位。 */
  instanceId?: string;
  /** 该 tab 所在分栏 id（浮窗时为其浮窗 pane id）。 */
  panelId?: string;
  /** 为 true 时该编辑器实例从空白开始（不恢复、不继承任何项目目录）。 */
  fresh?: boolean;
}

/** 面板挂载句柄：除卸载外，还支持把「打开某目录」的请求投递给该实例。 */
export interface PaneHandle {
  unmount: () => void;
  /** 仅文件编辑器实例提供：请求本实例打开某个项目目录（含未保存改动的确认）。 */
  openProject?: (dir: string) => void;
}

/** 已挂载的活动实例（按元素记录：同一元素重复挂载先卸载旧实例，避免 “App already mounted”）。 */
const instances = new Map<HTMLElement, VueApp>();

/** 面板种类：文件工作台（workbench）/ VS Code 编辑器（vscode）。 */
export type PaneKind = "workbench" | "vscode";

/** 仅在文件工作台面板上桥接宿主能力（会话文件改道 / 目录揭示 / 会话切换）。 */
function wireWorkbenchBridge(): void {
  const br = window.__DSH_FILE_WORKBENCH__;
  if (!br) return;
  br.openExternalFile = (path: string): void => {
    void openPreview(path).catch((e) => toast("error", (e as Error).message));
    void refreshListing();
  };
  br.openExternalFolder = (path: string): void => {
    void browseTo(path);
  };
  br.syncSessionWorkspace = (): void => {
    void syncToSession();
  };
  const pending = br.pendingOpens;
  if (pending && pending.length > 0) {
    br.pendingOpens = [];
    for (const p of pending) {
      if (p.kind === "file") br.openExternalFile(p.path);
      else br.openExternalFolder?.(p.path);
    }
  }
}

/**
 * 通用挂载入口：按 pane 选择根组件挂进 el，并桥接宿主能力。
 * 右侧面板桥接组件（RightPaneBridge / VSCodePaneBridge）分别调用各自的全局挂载函数。
 *
 * 文件编辑器是**多实例**的：按 `opts.instanceId`（DSH tab id）分配实例槽，并把该实例
 * `app.provide(VS_STORE_KEY, store)` 给面板内的子树（目录树等）注入使用。
 */
export function mountPane(
  el: HTMLElement,
  opts?: PaneMountOptions,
  pane: PaneKind = "workbench",
): PaneHandle {
  if (opts?.apiBase) {
    window.__DSH_FILE_WORKBENCH__ = window.__DSH_FILE_WORKBENCH__ ?? {};
    window.__DSH_FILE_WORKBENCH__.apiBase = opts.apiBase;
  }
  // 幂等：同一元素重复挂载时先卸载旧实例，避免 “App already mounted” 报错。
  const existing = instances.get(el);
  if (existing) {
    try {
      existing.unmount();
    } catch {
      /* ignore */
    }
    instances.delete(el);
  }
  const app = createApp(pane === "vscode" ? AppVSCode : AppFileWorkbench);

  // 文件编辑器实例：按 tab id 取槽（同一 tab 卸载再挂载会拿回同一份状态与未保存缓冲）。
  let store: VSCodeStore | null = null;
  if (pane === "vscode") {
    store = getVSCodeStore(acquireVSCodeSlot(opts?.instanceId));
    if (opts?.fresh) store.markFresh();
    store.bindTab(opts?.instanceId ?? null, opts?.panelId ?? null);
    app.provide(VS_STORE_KEY, store);
  }

  app.mount(el);
  instances.set(el, app);

  if (pane === "workbench") wireWorkbenchBridge();

  // 挂载后异步拉取后端持久化配置（偏好/收藏/布局），用默认值兜底、填充后响应式更新。
  void initPersist();

  // 仅文件工作台建立并维持与会话流的 SSE 连接（connectSessionSse 内部单例守卫）。
  const sseDispose = pane === "workbench" ? connectSessionSse() : undefined;

  // 捕获本实例的 app 引用（instances 是 Map，但防御性保留），确保本实例卸载只影响自己。
  const localApp = app;
  const localStore = store;
  return {
    unmount: () => {
      try {
        sseDispose?.();
      } catch {
        /* ignore */
      }
      try {
        localApp.unmount();
      } catch {
        /* ignore */
      }
      if (instances.get(el) === localApp) instances.delete(el);
      // 取消在途请求：避免卸载后陈旧响应继续触发状态更新/弹错。
      //
      // 两道约束缺一不可（否则表现为「切面板 / 切回后左树展开却没内容」）：
      //  ① cancelAll 是**模块级全局**的，两个面板（文件工作台 / 文件编辑器）同处一个
      //     bundle，早退面板会把仍在挂载的另一面板的在途请求一起取消；
      //  ② 切面板时 DSH 常常「先挂新面板、再卸旧面板」，此刻新面板的请求已在飞，
      //     立即取消就会把它一起干掉 —— 所以延后一拍，并再次确认没有面板存活才取消。
      if (instances.size === 0) {
        setTimeout(() => {
          if (instances.size === 0) cancelAll();
        }, 3000);
      }
    },
    // 文件编辑器：把「打开某目录」投递给本实例（槽位由 tab id 决定，因此投递到对的那个）。
    openProject: localStore ? (dir: string) => localStore.requestOpenProject(dir) : undefined,
  };
}

/** 文件工作台面板挂载（右侧面板桥接组件挂载时使用）。 */
export function mountFileWorkbenchPane(el: HTMLElement, opts?: PaneMountOptions): PaneHandle {
  return mountPane(el, opts, "workbench");
}

/** VS Code 编辑器面板挂载（右侧面板桥接组件挂载时使用）。 */
export function mountVSCodePane(el: HTMLElement, opts?: PaneMountOptions): PaneHandle {
  return mountPane(el, opts, "vscode");
}

// 右侧面板桥接组件挂载时使用。
window.__dshFileWorkbenchMountPane__ = mountFileWorkbenchPane;
window.__dshVSCodeMountPane__ = mountVSCodePane;

/**
 * 全局终端：独立于「文件工作台 / 文件编辑器」任一面板常驻挂载一次。
 * 切换右侧面板 tab 时两个 Vue 应用会被 host 各自的桥接组件 unmount，若终端挂在任一面板内，
 * 切换即会卸载重建（丢失 shell 会话）、且两侧会同时打开。提到全局层级即可彻底规避：
 * 单一终端实例、跨面板存活、不重复打开。
 */
function mountGlobalTerminal(): void {
  if (typeof document === "undefined") return;
  if (document.getElementById("dsh-term-root")) return;
  const host = document.createElement("div");
  host.id = "dsh-term-root";
  host.style.position = "fixed";
  host.style.left = "0";
  host.style.top = "0";
  host.style.width = "0";
  host.style.height = "0";
  host.style.overflow = "visible";
  host.style.zIndex = "10000";
  document.body.appendChild(host);
  createApp(TerminalHost).mount(host);
}
mountGlobalTerminal();

if (typeof document !== "undefined") {
  const host = document.getElementById("app");
  if (host) mountFileWorkbenchPane(host, { apiBase: (import.meta.env.VITE_API_BASE as string) ?? "" });
}
