/**
 * Vue 文件工作台入口。
 *
 * DSH:client 桥接组件以 <script> 注入本 bundle → 调用
 * window.__dshFileWorkbenchMountPane__(el, { apiBase }) 把工作台挂进 DSH 右侧面板容器；
 * 返回 { unmount } 供卸载。
 * 独立调试：vite dev 直接 import 本文件 → 自动挂到 #app。
 */
import { createApp } from "vue";
// Element Plus 按需引入（unplugin-vue-components/auto-import 在构建时注入用到的组件与样式）。
// 这里只保留全局基础样式与深色主题变量；各组件样式由 resolver 按需引入。
import "element-plus/theme-chalk/base.css";
import "element-plus/theme-chalk/dark/css-vars.css";
// ElMessage 以 JS 函数方式调用（import { ElMessage } from "element-plus"），
// resolver 只会为「模板 / 自动导入」的组件注入样式，函数式调用需手动补上样式文件，
// 否则错误/成功提示只有 class 没有外观（历史上就因此丢失过提示样式）。
import "element-plus/theme-chalk/el-message.css";
import AppFileWorkbench from "./App.vue";
import "./styles.css";
import { initPersist } from "./composables/core/settings";
import { cancelAll } from "./composables/core/useApi";
import { openPreview, toast } from "./stores/workbench";
import { browseTo, refreshListing, syncToSession } from "./stores/explorer";
import { connectSessionSse } from "./composables/session/sessionSse";

/** 已挂载的活动实例（用于 mount 幂等复用：同一元素重复挂载先卸载旧实例）。 */
let activeInstance: { el: HTMLElement; app: ReturnType<typeof createApp> } | null = null;

/** 把工作台挂进 el，并桥接宿主能力（会话文件改道 / 目录揭示 / 会话切换）。 */
export function mountFileWorkbenchPane(el: HTMLElement, opts?: { apiBase?: string }): { unmount: () => void } {
  if (opts?.apiBase) {
    window.__DSH_FILE_WORKBENCH__ = window.__DSH_FILE_WORKBENCH__ ?? {};
    window.__DSH_FILE_WORKBENCH__.apiBase = opts.apiBase;
  }
  // 幂等：同一元素重复挂载时先卸载旧实例，避免 “App already mounted” 报错，且重新持有写好的桥接处理器。
  if (activeInstance?.el === el) {
    try {
      activeInstance.app.unmount();
    } catch {
      /* ignore */
    }
    activeInstance = null;
  }
  const app = createApp(AppFileWorkbench);
  app.mount(el);
  activeInstance = { el, app };

  // 桥接：注册接收"会话文件打开"改道的处理器（host 已在 ctx.workspaces.openPath
  // 上拦截），并把挂载前排队中的请求一并落掉。
  const br = window.__DSH_FILE_WORKBENCH__;
  if (br) {
    br.openExternalFile = (path: string): void => {
      // 文件查看走 DSH 右侧查看器（openPreview 内部经宿主桥改道）。
      void openPreview(path).catch((e) => toast("error", (e as Error).message));
      // 进入文件时刷新当前工作区文件夹内容，及时反映磁盘变更。
      void refreshListing();
    };
    br.openExternalFolder = (path: string): void => {
      // 揭示手势：让资源管理器定位到该目录。
      void browseTo(path);
    };
    // 会话切换：切到新会话进入其工作区，仍是当前会话时仅刷新工作区文件夹。
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

  // 挂载后异步拉取后端持久化配置（偏好/收藏/布局），用默认值兜底、填充后响应式更新。
  void initPersist();

  // 建立并维持与会话流的 SSE 连接（订阅当前选中会话 id，重连交给 composable 内部；
  // connectSessionSse 内部以单例守卫，重复挂载不会开多条流）。
  const sseDispose = connectSessionSse();

  // 捕获本实例的 app 引用（activeInstance 是模块级单例，可能被后续挂载覆盖），
  // 确保本实例的卸载只影响自己。
  const localApp = app;
  return {
    unmount: () => {
      try {
        sseDispose?.();
      } catch {
        /* ignore */
      }
      // 取消所有在途请求：避免卸载后陈旧响应继续触发状态更新/弹错。
      cancelAll();
      try {
        localApp.unmount();
      } catch {
        /* ignore */
      }
      if (activeInstance?.el === el) activeInstance = null;
    },
  };
}

// 右侧面板桥接组件挂载时使用。
window.__dshFileWorkbenchMountPane__ = mountFileWorkbenchPane;

if (typeof document !== "undefined") {
  const host = document.getElementById("app");
  if (host) mountFileWorkbenchPane(host, { apiBase: (import.meta.env.VITE_API_BASE as string) ?? "" });
}
