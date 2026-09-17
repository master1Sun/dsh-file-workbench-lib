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
// 注：消息提示已改为自建浮层（ToastHost + composables/core/toast），不再使用 ElMessage，
// 故原先手动补的 el-message.css 已移除（保留上面两条全局基础变量即可）。
import AppFileWorkbench from "./App.vue";
import AppVSCode from "./components/business/vscode/VSCodePane.vue";
import TerminalHost from "./components/business/terminal/TerminalHost.vue";
import RepoCloneDialog from "./components/business/repo/RepoCloneDialog.vue";
import AccountDialog from "./components/business/account/AccountDialog.vue";
import ToastHost from "./components/common/ToastHost.vue";
import "./styles.css";
// WebTUI 主题层（仅作用于 #dsh-term-root 子树，见该文件注释）。
import "./assets/webtui.css";
import { initPersist } from "./composables/core/settings";
import { cancelAll } from "./composables/core/useApi";
// 提示队列的共享存储：宿主是否已挂载也要跨实例判断，故从 core/toast 取（别从 stores/workbench 取，
// 那是给调用点用的 toast() re-export）。
import { toastStore } from "./composables/core/toast";
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

  // 会话实时流（/stream/session）：**只建立、不随面板卸载断开**（首次由文件工作台面板建立）。
  //
  // ⛔ 它绑的是**会话**，不是面板：早先这里把注销函数接出来、在 unmount 里调用，于是
  //    「每切一次右侧面板就断开重连一条 /stream/session」—— 宿主每次重连都要重做全量快照，
  //    前端 files/running 被清空后又重填（界面闪一下），断开空窗里的推送还会丢。
  //    终端在 mountGlobalTerminal 里早就用同一个思路解决过（全局常驻、不随面板重建）。
  //    connectSessionSse 内部有单例守卫：重复调用只做订阅检查，不会重复开流。
  if (pane === "workbench") connectSessionSse();

  // 捕获本实例的 app 引用（instances 是 Map，但防御性保留），确保本实例卸载只影响自己。
  const localApp = app;
  const localStore = store;
  return {
    unmount: () => {
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
 * 全局消息提示（右下角浮层）：与终端同理提到全局层级。
 * 提示既可能由文件工作台发起、也可能由文件编辑器发起（useApi 的错误提示两侧共用），
 * 若挂在任一面板内，切面板会重建、两个面板同时挂载时还会各弹一份。挂在 body 上即：
 * 单实例、跨面板存活、队列只此一份。
 *
 * 两处容易踩的坑，都在这里显式兜住：
 *  ① **必须在终端之前挂**：两者都在模块顶层执行，若终端挂载抛错（xterm/ConPTY 环境异常等），
 *     排在后面的宿主就再也轮不到挂载 —— 症状是「插件面板一切正常，但提示一条都不出」。
 *     所以提示宿主先挂、且各自 try/catch，互不牵连。
 *  ② **宿主按 `#dsh-toast-root` 去重，队列却是跨实例共享的**（见 composables/core/toast）：
 *     页面存活期间若 DSH 重新注入了新 bundle，新实例会用共享存储里的 `app` 判断「已有活宿主
 *     在渲染共享队列」并直接复用；若元素在而 `app` 为空，说明那是上一份 bundle 留下的死宿主
 *     （它的队列已无人 push），清掉重建，避免提示整片静默失效。
 */
function mountGlobalToastHost(): void {
  if (typeof document === "undefined" || !document.body) return;
  const store = toastStore();
  // 已有活宿主在渲染共享队列 → 复用（多实例也只保留一个宿主，不会重复弹出）。
  // 元素已脱离文档（被宿主框架清理过）则视为死宿主，下面的重建路径接管。
  if (store.app && store.el?.isConnected) return;
  if (store.app) {
    try {
      store.app.unmount();
    } catch {
      /* 旧应用可能已随 DOM 一起失效，忽略 */
    }
    store.app = null;
    store.el = null;
  }
  document.getElementById("dsh-toast-root")?.remove();
  const host = document.createElement("div");
  host.id = "dsh-toast-root";
  // 定位交给组件内的 .fw-toast-host（position: fixed），宿主容器本身不占位、不拦截事件。
  host.style.position = "fixed";
  host.style.left = "0";
  host.style.top = "0";
  host.style.width = "0";
  host.style.height = "0";
  host.style.overflow = "visible";
  // ⛔ 必须显式给 z-index。`position: fixed` 会让容器自成一个层叠上下文，z-index:auto 即等同 0 层；
  // 而 DSH 的 `#root` 里存在 `position` + 正 z-index 的层（面板、抽屉、popper 等），它们会**整个盖住**
  // 这个容器——容器内部的 z-index:10050 只在容器自己的层叠上下文里生效，拦不住外面。
  // 症状极具迷惑性：`.fw-toast` 在 DOM 里、尺寸/文案/倒计时都对，但 elementFromPoint 命中的是面板元素，
  // 屏幕上什么都看不到（真机实测：#root 之后的兄弟节点 z-index:auto 时，面板内容盖在提示之上）。
  // 取一个高于 DSH 应用层（实测其 popper/overlay 用到 2004/2010/2014）的值，留出余量。
  host.style.zIndex = "2147483000";
  host.style.pointerEvents = "none";
  document.body.appendChild(host);
  try {
    const app = createApp(ToastHost);
    app.mount(host);
    store.app = app;
    store.el = host;
  } catch (e) {
    console.error("[dsh-file-workbench] 提示宿主挂载失败：", e);
    host.remove();
  }
}

/**
 * 全局终端：独立于「文件工作台 / 文件编辑器」任一面板常驻挂载一次。
 * 切换右侧面板 tab 时两个 Vue 应用会被 host 各自的桥接组件 unmount，若终端挂在任一面板内，
 * 切换即会卸载重建（丢失 shell 会话）、且两侧会同时打开。提到全局层级即可彻底规避：
 * 单一终端实例、跨面板存活、不重复打开。
 *
 * 注意：这里**只**在 `#dsh-term-root` 缺失时挂载（终端持有常驻 shell 会话，绝不能因重新注入
 * 而重建），且挂载失败只吞掉自己 —— 不能连累排在其后的其他全局挂载。
 */
function mountGlobalTerminal(): void {
  if (typeof document === "undefined" || !document.body) return;
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
  try {
    createApp(TerminalHost).mount(host);
  } catch (e) {
    console.error("[dsh-file-workbench] 全局终端挂载失败：", e);
  }
}

// 顺序有意为之：提示宿主先挂（挂载失败也不会连累终端），详见 mountGlobalToastHost 的注释。
mountGlobalToastHost();
mountGlobalTerminal();
mountGlobalCloneDialog();
mountGlobalAccountDialog();

/**
 * 全局「克隆 / 检出仓库」弹窗：独立于任一面板常驻挂载一次。
 *
 * 切换右侧面板 tab 时两个 Vue 应用会被各自的桥接组件 unmount，若弹窗挂在任一面板内，
 * 切换即会卸载重建（且克隆可能跑几分钟，中途切面板会让进度「凭空消失」）。提到全局层级即可：
 * 单一弹窗实例、跨面板存活、且两侧（文件工作台的「新建 ▾」与文件编辑器的「最近项目」）共享同一份状态，
 * 保证「同时只可能开一个」。状态在模块级（见 composables/core/cloneDialog.ts）。
 *
 * 与终端同理：仅当 `#dsh-clone-root` 缺失时挂载（常驻 shell 会话 / 进行中的克隆都不能因重新注入而重建）。
 */
function mountGlobalCloneDialog(): void {
  if (typeof document === "undefined" || !document.body) return;
  if (document.getElementById("dsh-clone-root")) return;
  const host = document.createElement("div");
  host.id = "dsh-clone-root";
  host.style.position = "fixed";
  host.style.left = "0";
  host.style.top = "0";
  host.style.width = "0";
  host.style.height = "0";
  host.style.overflow = "visible";
  host.style.zIndex = "10000";
  document.body.appendChild(host);
  try {
    createApp(RepoCloneDialog).mount(host);
  } catch (e) {
    console.error("[dsh-file-workbench] 全局克隆弹窗挂载失败：", e);
  }
}

if (typeof document !== "undefined") {
  const host = document.getElementById("app");
  if (host) mountFileWorkbenchPane(host, { apiBase: (import.meta.env.VITE_API_BASE as string) ?? "" });
}

/**
 * 全局「账号管理」对话框：独立于任一面板常驻挂载一次。
 *
 * ⛔ 必须提到全局层级，**不能**挂在 Git / SVN 面板内（原先就是那样）：
 *   - 右侧面板按 tab 卸载重建，切一次面板对话框就没了；
 *   - 更要紧的是全局克隆弹窗里的「新建账号…」入口 —— 从文件工作台的「新建 ▾」发起克隆时
 *     两个面板**一个都没挂载**，账号对话框便无人渲染，点了没反应；
 *   - 状态本就是模块级单例（stores/accounts.ts），挂两份实例反而会同时弹两个对话框。
 */
function mountGlobalAccountDialog(): void {
  if (typeof document === "undefined" || !document.body) return;
  if (document.getElementById("dsh-acc-root")) return;
  const host = document.createElement("div");
  host.id = "dsh-acc-root";
  host.style.position = "fixed";
  host.style.left = "0";
  host.style.top = "0";
  host.style.width = "0";
  host.style.height = "0";
  host.style.overflow = "visible";
  host.style.zIndex = "10000";
  document.body.appendChild(host);
  try {
    createApp(AccountDialog).mount(host);
  } catch (e) {
    console.error("[dsh-file-workbench] 全局账号对话框挂载失败：", e);
  }
}
