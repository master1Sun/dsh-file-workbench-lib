/**
 * 文件编辑器 Activity Bar 的**外部插件注册表**（模块级单例，跨面板卸载重建存活）。
 *
 * 设计目标：其他项目 / 插件（不必是 Vue）可以在 Activity Bar 图标条上注册自定义视图，
 * 并通过 ActivityContext 与编辑器面板互动（打开文件、感知项目/主题、diff 展示、toast）。
 *
 * 注入方式与既有桥接一致 —— 挂到 window 全局：
 *   window.__dshFileWorkbenchVSCode__.activityBar.register(view)
 * 注册一份，**所有**编辑器面板实例（分栏 / 浮窗）都会出现对应图标；编辑器面板卸载再挂载
 * 不会丢注册（表在本模块，不在组件实例上）。同 id 重复注册 = 覆盖（幂等，支持插件热更新）。
 *
 * 信任边界：window API 页面上任何脚本都可调用 —— 与 __dshVSCodeMountPane__ 的暴露级别
 * 相同（能注册 = 宿主加载了该脚本），不引入新风险；id 建议带插件命名空间（如 "xxx.notes"）。
 */
import { ref } from "vue";

/** API 契约版本：以后破坏性修改 ctx 结构时递增，插件据此降级/告警。 */
export const ACTIVITY_API_VERSION = 1;

/** 传给插件的上下文：编辑器面板能力的最小只读门面。 */
export interface ActivityContext {
  apiVersion: number;
  /** 当前项目目录（getter，读取即最新值；null = 未打开项目）。 */
  readonly projectDir: string | null;
  /** 当前主题（getter）。 */
  readonly theme: "dark" | "light";
  /** 订阅项目切换；立即回调一次当前值，返回取消订阅函数。 */
  onProjectChange(fn: (dir: string | null) => void): () => void;
  /** 订阅主题切换；立即回调一次当前值，返回取消订阅函数。 */
  onThemeChange(fn: (t: "dark" | "light") => void): () => void;
  /** 在编辑器中打开文件（加入标签、加载内容，可跳行）。 */
  openFile(path: string, opts?: { line?: number }): Promise<void>;
  /** 在编辑器 diff 伪标签中展示文本行（+/-/@@ 前缀，复用 GitDiffView 着色）。 */
  openDiff(title: string, lines: string[]): void;
  /** 统一右下角消息提示。 */
  toast(level: "ok" | "info" | "error", msg: string): void;
}

/** 一个 Activity Bar 扩展视图的注册契约。 */
export interface ActivityView {
  /** 唯一 id（建议带命名空间，如 "myPlugin.notes"）；同 id 覆盖。 */
  id: string;
  /** 图标条 hover 提示。 */
  title: string;
  /** 图标名（复用工作台内置 icon 集）；缺失/非法时显示 title 首字符。 */
  icon?: string;
  /** 排序权重（小的靠前；内置 文件/搜索/Git 之后按此排序）。 */
  order?: number;
  /**
   * 框架无关的挂载函数：把视图渲染进 el 并绑定事件。
   * @returns 可选的清理函数（解绑监听 / 清空 DOM）；切换走该视图时调用。
   */
  mount(el: HTMLElement, ctx: ActivityContext): void | (() => void);
  /** 可见性谓词（如「有项目目录才显示」）；缺省恒显示。 */
  when?(ctx: Pick<ActivityContext, "projectDir">): boolean;
}

/** 已注册的扩展视图（ref 包装，注册/注销会触发面板重渲染）。 */
const registry = ref<ActivityView[]>([]);

/** 注册（幂等：同 id 覆盖）。 */
export function registerActivityView(view: ActivityView): void {
  unregisterActivityView(view.id);
  registry.value = [...registry.value, view].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

/** 注销（不存在时静默）。 */
export function unregisterActivityView(id: string): void {
  registry.value = registry.value.filter((v) => v.id !== id);
}

/** 只读列表（面板消费）。 */
export function listActivityViews(): ActivityView[] {
  return registry.value;
}

/* ---- window 全局 API（跨 bundle 注入入口） ---- */
interface WorkbenchVSCodeAPI {
  apiVersion: number;
  activityBar: {
    register: typeof registerActivityView;
    unregister: typeof unregisterActivityView;
  };
}

if (typeof window !== "undefined") {
  const w = window as unknown as Record<string, unknown>;
  const api: WorkbenchVSCodeAPI = {
    apiVersion: ACTIVITY_API_VERSION,
    activityBar: { register: registerActivityView, unregister: unregisterActivityView },
  };
  // 幂等：重复执行（HMR / bundle 重注）直接覆盖，不留半初始化状态。
  w.__dshFileWorkbenchVSCode__ = api;
}

declare global {
  interface Window {
    __dshFileWorkbenchVSCode__?: WorkbenchVSCodeAPI;
  }
}

/* ---- dev 演示插件：仅 vite dev 注册，验证「图标 + ctx 互动」整条链路 ---- */
if (import.meta.env.DEV) {
  registerActivityView({
    id: "demo.hello",
    title: "示例插件（仅 dev）",
    icon: "code",
    order: 90,
    mount(el, ctx) {
      el.innerHTML = `
        <div class="vs-ext-demo">
          <div class="vs-ext-demo-title">示例插件</div>
          <div class="vs-ext-demo-info"></div>
          <button class="vs-ext-demo-open">打开项目 README.md</button>
          <button class="vs-ext-demo-toast">调用 toast</button>
          <div class="vs-ext-demo-tip">ctx.openFile / projectDir / onProjectChange / toast 均已生效</div>
        </div>`;
      const info = el.querySelector<HTMLElement>(".vs-ext-demo-info")!;
      const paint = (dir: string | null): void => {
        info.textContent = dir ? `当前项目：${dir}` : "未打开项目目录";
      };
      const off = ctx.onProjectChange(paint);
      el.querySelector<HTMLButtonElement>(".vs-ext-demo-open")!.onclick = () => {
        if (ctx.projectDir) void ctx.openFile(`${ctx.projectDir}/README.md`);
        else ctx.toast("info", "请先打开项目目录");
      };
      el.querySelector<HTMLButtonElement>(".vs-ext-demo-toast")!.onclick = () => ctx.toast("ok", "插件调用 toast 成功");
      return () => {
        off();
        el.replaceChildren();
      };
    },
  });
}
