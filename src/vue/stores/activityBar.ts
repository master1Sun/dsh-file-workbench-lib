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
import { startTask, clearFinished, clearAll } from "../composables/session/tasks";

/**
 * API 契约版本：以后破坏性修改 ctx 结构时递增，插件据此降级/告警。
 *
 * v1：当前契约全貌（内测阶段版本从 1 起算；对外发布前不保留历史版本号）——
 * ActivityContext 含 activeFile / listOpenFiles / onDidChangeActiveFile 与 `editor` 只读门面
 * （对标 VS Code `window.activeTextEditor`：读未保存缓冲区、订阅文档/选区变更、applyEdit 保留
 * 撤销栈、createDecorations(spec) 宿主装饰工厂——纯 JSON spec 由宿主编译 CM6 扩展，category 分组 +
 * /plugin-data 协同）；编辑器 window API（`__dshFileWorkbenchVSCode__`）含 activityBar / commands /
 * statusbar（含顶栏「扩展」下拉）命名空间；工作台 window API（`__dshFileWorkbenchWorkbench__`）含
 * activityBar / statusbar / backgroundTasks 命名空间，与编辑器注册表**完全独立**。
 * 插件可按 `apiVersion >= N` 探测新能力；后续增量一律向后兼容。
 */
export const ACTIVITY_API_VERSION = 1;

/** 注入视图文案：可传普通字符串，也可按 locale 提供多语言文本。 */
export type ActivityText = string | Readonly<Record<string, string>>;

/** 按当前页面语言解析注入视图文案。 */
export function activityText(text: ActivityText | undefined): string {
  if (typeof text === "string") return text;
  if (!text) return "";
  const locale = typeof document !== "undefined" ? document.documentElement.lang || navigator.language : "en";
  const key = locale.toLowerCase();
  return text[locale] ?? text[key] ?? (key.startsWith("zh") ? text.zh ?? text.en : text.en ?? text.zh) ?? Object.values(text)[0] ?? "";
}

/** 传给插件的上下文：编辑器面板能力的最小只读门面。 */
export interface ActivityContext {
  apiVersion: number;
  /** 当前项目目录（getter，读取即最新值；null = 未打开项目）。 */
  readonly projectDir: string | null;
  /** 当前主题（getter）。 */
  readonly theme: "dark" | "light";
  /** 当前激活标签对应的文件绝对路径（getter；无激活文件时为 null）。 */
  readonly activeFile: string | null;
  /** 订阅项目切换；立即回调一次当前值，返回取消订阅函数。 */
  onProjectChange(fn: (dir: string | null) => void): () => void;
  /** 订阅主题切换；立即回调一次当前值，返回取消订阅函数。 */
  onThemeChange(fn: (t: "dark" | "light") => void): () => void;
  /** 订阅激活文件切换；立即回调一次当前值，返回取消订阅函数。 */
  onDidChangeActiveFile(fn: (path: string | null) => void): () => void;
  /** 在编辑器中打开文件（加入标签、加载内容，可跳行）。 */
  openFile(path: string, opts?: { line?: number }): Promise<void>;
  /** 当前已打开的文件标签绝对路径列表（按打开顺序）。 */
  listOpenFiles(): string[];
  /** 在编辑器 diff 伪标签中展示文本行（+/-/@@ 前缀，复用 GitDiffView 着色）。 */
  openDiff(title: string, lines: string[]): void;
  /** 统一右下角消息提示。 */
  toast(level: "ok" | "info" | "error", msg: string): void;
  /**
   * v1：当前激活文件的编辑器内部交互门面（对标 VS Code `window.activeTextEditor`）。
   * 仅编辑器 ctx 提供；工作台 ctx 无此成员。用 `!!ctx.editor` 探测（v1 契约即含）。
   */
  readonly editor?: EditorAccess;
}

/**
 * v1：编辑器内部交互门面——把 CodeMirror 6 的活动视图以最小 API 暴露给插件。
 *
 * 设计原则：尽量透传 CodeMirror 原生对象（`EditorView` / `Selection` / `ChangeSpec`），
 * 因为同源页脚本本就能 `import` CM6 包，复用原生语义比另造抽象更省、也最贴 VS Code。
 * `getText/getSelection/applyEdit/setDecorations` 是给不想吃透 CM6 的插件的低门槛糖——
 * 高级插件可直接用 `editor.view` 自行 `state`/`dispatch`。所有方法在无激活文件时安全降级。
 */
export interface EditorAccess {
  /** 当前激活文件的 CodeMirror 视图（getter，读取即最新；无标签 / 卸载期间为 null）。 */
  readonly view: import("@codemirror/view").EditorView | null;
  /** 当前缓冲区全文（含未保存改动）；等价 `view?.state.doc.toString()`。 */
  getText(): string;
  /** 该文件是否有未保存改动（对标 VS Code `document.isDirty`）。 */
  isDirty(): boolean;
  /**
   * 订阅文档变更（仅在 docChanged 时触发）。回调带最新全文与 CM `ChangeSet`。
   * 立即以当前内容回调一次。返回取消订阅函数。
   */
  onDidChangeTextDocument(
    fn: (e: { text: string; changes: import("@codemirror/state").ChangeSet | null }) => void,
  ): () => void;
  /** 当前选区（多光标支持，CM `EditorSelection` 原样回传）；无视图时 null。 */
  getSelection(): import("@codemirror/state").EditorSelection | null;
  /**
   * 订阅选区变化。回调带最新 `EditorSelection`。立即以当前选区回调一次。返回取消订阅函数。
   */
  onDidChangeSelection(fn: (sel: import("@codemirror/state").EditorSelection) => void): () => void;
  /**
   * 应用编辑：走 `view.dispatch`，**保留撤销栈**（对标 VS Code `WorkspaceEdit`）。
   * 传入 CM 风格的 change 数组（`{ from, to?, insert? }`）。无视图时返回 false。
   */
  applyEdit(changes: Array<{ from: number; to?: number; insert?: string }>): boolean;
  /**
   * 注入 / 清除装饰（波浪线、gutter 图标、行内 hint 等地基，对标 `createTextEditorDecorationType`）。
   * 传入插件用 `@codemirror/view` 自行构建好的扩展（`Decoration` + `ViewPlugin`/`StateField`），
   * 传 null 即清除全部插件装饰。独立于内置 search 高亮层，随文件切换自动显隐。无视图时静默忽略。
   */
  setDecorations(deco: import("@codemirror/state").Extension | null): void;
  /**
   * v1：宿主侧装饰工厂入口——**为同源页插件准备**（CM6 被 vendor chunk 私有化，
   * 插件 `import` 到的是不同实例，其 Decoration/ViewPlugin 注入必然失效）。
   * 插件只传纯 JSON spec，由宿主用真实 CM6 构造并返回不透明句柄；再经 `setDecorations(handle.extension)`
   * 应用。语义类别决定默认样式（波浪线/gutter 颜色），className 可追加覆盖。无激活文件时安全降级为 no-op。
   */
  createDecorations(spec: import("../components/business/vscode/pluginDecorations").DecorationSpec): {
    readonly extension: import("@codemirror/state").Extension;
    /** 就地替换装饰条目并重绘（同一激活文件内增量更新，无需重新 create）。 */
    update(items: import("../components/business/vscode/pluginDecorations").DecorationItem[]): void;
  };
}

/** 一个 Activity Bar 扩展视图的注册契约。 */
export interface ActivityView {
  /** 唯一 id（建议带命名空间，如 "myPlugin.notes"）；同 id 覆盖。 */
  id: string;
  /** 图标条 hover 提示，可按 locale 提供多语言文本。 */
  title: ActivityText;
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

/** 图标字母回退：按码点取首字符（slice 按 UTF-16 计数，emoji 等代理对会被切半）。 */
export function activityLetter(title: ActivityText): string {
  return [...activityText(title)][0] ?? "";
}

/** 已注册的文件编辑器扩展视图。 */
const registry = ref<ActivityView[]>([]);

/** 注册（幂等：同 id 覆盖）。入参形状非法时抛错——让坏插件在启用即报，而非渲染期崩。 */
export function registerActivityView(view: ActivityView): void {
  assertViewShape(view, "activityBar.register");
  unregisterActivityView(view.id);
  registry.value = [...registry.value, view].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

/** 视图契约的最小形状校验：id/title/mount 缺一即拒。 */
function assertViewShape(view: Pick<ActivityView, "id" | "title" | "mount">, where: string): void {
  if (!view || typeof view !== "object") throw new Error(`${where}: 需要对象参数`);
  if (typeof view.id !== "string" || !view.id.trim()) throw new Error(`${where}: id 必须是非空字符串`);
  if (typeof view.title !== "string" && (typeof view.title !== "object" || view.title === null))
    throw new Error(`${where}: title 必须是字符串或多语言文本对象`);
  if (typeof view.mount !== "function") throw new Error(`${where}: mount 必须是函数`);
}

/** 注销（不存在时静默）。 */
export function unregisterActivityView(id: string): void {
  registry.value = registry.value.filter((v) => v.id !== id);
}

/** 只读列表（面板消费）。 */
export function listActivityViews(): ActivityView[] {
  return registry.value;
}

/**
 * 命令 → 归属视图的图标：「扩展」弹窗菜单条目没有自己的图标时，回退到同插件侧边栏图标的图标。
 * 优先扫 mount 闭包上登记的命令清单（宿主注入 API 的 register 桩会打 __commandIds 标记），
 * 再按 id 命名空间前缀兜底（如 projectStats.menu ↔ projectStats.view）；都找不到返回 ""。
 */
export function viewIconForCommand(views: ActivityView[], commandId: string): string {
  if (!commandId) return "";
  for (const v of views) {
    const ids = (v.mount as unknown as { __commandIds?: string[] })?.__commandIds;
    if (Array.isArray(ids) && ids.includes(commandId)) return v.icon ?? "";
  }
  const dot = commandId.lastIndexOf(".");
  if (dot > 0) {
    const ns = commandId.slice(0, dot);
    const hit = views.find((v) => v.id.startsWith(ns + "."));
    if (hit) return hit.icon ?? "";
  }
  return "";
}

/** 文件工作台自己的扩展视图注册表，与文件编辑器注册表完全隔离。 */
const workbenchRegistry = ref<ActivityView[]>([]);

export function registerWorkbenchActivityView(view: ActivityView): void {
  assertViewShape(view, "workbench.activityBar.register");
  unregisterWorkbenchActivityView(view.id);
  workbenchRegistry.value = [...workbenchRegistry.value, view].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export function unregisterWorkbenchActivityView(id: string): void {
  workbenchRegistry.value = workbenchRegistry.value.filter((v) => v.id !== id);
}

export function listWorkbenchActivityViews(): ActivityView[] {
  return workbenchRegistry.value;
}

/* ---- 外部注入视图的「滚动兜底」 ---- */

/**
 * 修复插件注入内容「过长却无法用鼠标滚动」的问题。
 *
 * 症状根因：插件 DOM 不带 scoped 标记，其自带 / 全局样式（Tailwind preflight、reset.css 等）
 * 常把某个包裹层设成 `overflow:hidden`。此时内容溢出被那层裁掉，而外层注入容器又因
 * scrollHeight==clientHeight 不出现滚动条 —— 表现为滚轮 / 拖动滚动条都无反应。
 *
 * 「是否溢出」是运行时量（scrollHeight>clientHeight），CSS 选择器无法表达，故在插件挂载后
 * 做一次轻量遍历：只对**确实溢出却被 hidden/clip 裁切**的元素改回可滚动；未溢出的元素不动，
 * 避免给内部布局强加滚动条。插件若异步撑高内容，由调用点的 ResizeObserver 再触发一次即可。
 */
export function ensureInjectedViewScrollable(host: HTMLElement): void {
  if (!host) return;
  host.style.overflowY = "auto"; // 保证宿主容器自身可滚（幂等，与 CSS 一致）
  const walker = document.createTreeWalker(host, NodeFilter.SHOW_ELEMENT);
  for (let node = walker.firstChild(); node; node = walker.nextSibling()) {
    const el = node as HTMLElement;
    if (el.scrollHeight <= el.clientHeight + 1) continue; // 无纵向溢出 → 无需处理
    const oy = getComputedStyle(el).overflowY;
    if (oy === "hidden" || oy === "clip") el.style.overflowY = "auto";
  }
}

/* ---- 轻量命令贡献点：插件注册可被调用的动作，宿主 / 其他插件按 id 触发 ---- */

/** 一个已注册命令的处理器；返回值原样回传给 executeCommand 调用方。 */
export type CommandHandler = (...args: unknown[]) => unknown | Promise<unknown>;

/**
 * 模块级命令表（跨面板卸载重建存活，与视图注册表同生命周期）。
 *
 * 刻意**只存不自动接线**：注册后由其他脚本 / 面板主动 `executeCommand` 才生效——
 * 相当于 VS Code 的 `commands.registerCommand` + 需要别处挂触发的组合，避免向编辑器
 * 内部注入未经请求的行为。id 建议带命名空间（如 "myPlugin.revealInTree"）。
 */
const commandRegistry = new Map<string, CommandHandler>();

/** 注册命令（幂等：同 id 覆盖，支持热更新）。 */
export function registerCommand(id: string, handler: CommandHandler): void {
  commandRegistry.set(id, handler);
}

/** 注销命令（返回是否存在并被移除）。 */
export function unregisterCommand(id: string): boolean {
  return commandRegistry.delete(id);
}

/** 是否已注册某命令。 */
export function hasCommand(id: string): boolean {
  return commandRegistry.has(id);
}

/** 当前已注册命令 id 列表。 */
export function listCommands(): string[] {
  return [...commandRegistry.keys()];
}

/* ---- 状态栏项贡献点：插件在编辑器底部状态栏放一个可点击按钮，点击即触发某命令 ---- */

/** 传给命令处理器的上下文（状态栏项点击时由面板注入）。 */
export interface StatusCommandContext {
  /** 当前激活文件绝对路径；无激活文件时为 null。 */
  path: string | null;
  /** 当前项目目录；未打开项目时为 null。 */
  projectDir: string | null;
}

/** 一个状态栏扩展项的注册契约。 */
export interface StatusBarItem {
  /** 唯一 id（建议带命名空间）；同 id 覆盖。 */
  id: string;
  /** 按钮文案。 */
  text: string;
  /**
   * 实时文案读取器（可选）：宿主每次渲染时调用，取代「进度变化→同 id 反复 register」。
   * 提供时 text 只作首帧/兜底值；节流由插件自行把握（如每 N 个文件才更新一次）。
   */
  textFn?: () => string;
  /** 点击时执行的命令 id（须已通过 commands.register 注册，否则点击为 no-op）。 */
  commandId: string;
  /** 悬浮提示；缺省用 commandId。 */
  tooltip?: string;
  /** 条目图标（复用工作台内置 icon 集，见 composables/ui/icons）；「扩展」弹窗菜单里展示。 */
  icon?: string;
  /** 排序权重（小的靠前；内置只读/冲突徽标之后按此排序）。 */
  order?: number;
  /** 可见性谓词（如「有激活文件才显示」），入参为当前状态上下文；缺省恒显示。 */
  when?(ctx: StatusCommandContext): boolean;
}

/* ---- 运行中命令跟踪：宿主级「执行状态」通道，插件零改动即可获得 ----
 * executeCommand 处捕获 promise 返回值 → 状态栏/扩展菜单条目渲染旋转指示器 + 防重复点击；
 * 完成/失败时刻意**不**自动弹 toast——结果通知归插件自己发（内容更具体、可附查看指引）。 */

interface InflightCmd {
  /** 该命令当前在跑的任务数（同一命令并发/重入计数）。 */
  count: number;
}

const inflightCommands = reactive(new Map<string, InflightCmd>());

/** 某命令是否有进行中的执行（供菜单条目禁用/指示器用）。 */
export function isCommandRunning(commandId: string): boolean {
  return (inflightCommands.get(commandId)?.count ?? 0) > 0;
}

/**
 * 执行命令：未注册的 id 静默返回 undefined（对齐 VS Code「无处理器则 no-op」）。
 * 处理器抛错会向上冒泡给调用方，由其决定提示方式。
 * 返回值为 Promise 时登记进 in-flight 表（then/catch 都清账，吞掉的 rejection 不外溢）。
 */
export function executeCommand<T = unknown>(id: string, ...args: unknown[]): T | undefined {
  const h = commandRegistry.get(id);
  if (!h) return undefined;
  const r = h(...args) as T | undefined;
  if (r instanceof Promise) trackInflightPromise(id, r);
  return r;
}

function trackInflightPromise(id: string, p: Promise<unknown>): void {
  const rec = inflightCommands.get(id) ?? { count: 0 };
  rec.count += 1;
  inflightCommands.set(id, rec);
  const settle = (): void => {
    const cur = inflightCommands.get(id);
    if (!cur) return;
    cur.count -= 1;
    if (cur.count <= 0) inflightCommands.delete(id);
  };
  p.then(settle, settle);
}

/** 已注册的状态栏项（reactive ref → 面板渲染随注册/注销实时更新）。 */
const statusBarRegistry = ref<StatusBarItem[]>([]);

/** 注册状态栏项（幂等：同 id 覆盖）。 */
export function registerStatusBarItem(item: StatusBarItem): void {
  unregisterStatusBarItem(item.id);
  statusBarRegistry.value = [...statusBarRegistry.value, item].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

/** 注销状态栏项（不存在时静默）。 */
export function unregisterStatusBarItem(id: string): void {
  statusBarRegistry.value = statusBarRegistry.value.filter((i) => i.id !== id);
}

/** 只读列表（面板消费）。 */
export function listStatusBarItems(): StatusBarItem[] {
  return statusBarRegistry.value;
}

/* ---- 扩展菜单项贡献点：插件在编辑器顶栏「扩展」下拉里放一个可点击条目，点击即触发某命令 ---- */

/**
 * 扩展菜单项。契约与 StatusBarItem 完全一致（id/text/commandId/tooltip/order/when），
 * 独立注册表：状态栏是平铺按钮、空间有限；顶栏「扩展」菜单是展开列表，可容纳全部注册项。
 */
export type ExtensionMenuItem = StatusBarItem;

/** 已注册的扩展菜单项（reactive ref → 菜单渲染随注册/注销实时更新）。 */
const extensionMenuRegistry = ref<ExtensionMenuItem[]>([]);

/** 注册扩展菜单项（幂等：同 id 覆盖，按 order 升序）。 */
export function registerExtensionMenuItem(item: ExtensionMenuItem): void {
  unregisterExtensionMenuItem(item.id);
  extensionMenuRegistry.value = [...extensionMenuRegistry.value, item].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

/** 注销扩展菜单项（不存在时静默）。 */
export function unregisterExtensionMenuItem(id: string): void {
  extensionMenuRegistry.value = extensionMenuRegistry.value.filter((i) => i.id !== id);
}

/** 只读列表（面板消费）。 */
export function listExtensionMenuItems(): ExtensionMenuItem[] {
  return extensionMenuRegistry.value;
}

/* ---- 工作台底部「扩展」菜单贡献点：与编辑器的两套注册表完全独立 ---- */

/**
 * 传给工作台扩展菜单命令处理器的上下文。工作台没有「编辑器激活标签」概念，
 * 故 path 恒为 null；projectDir = 当前工作区根目录（wb.root）。
 */
export interface WorkbenchStatusContext {
  /** 保留字段以对齐编辑器契约；工作台恒为 null。 */
  path: string | null;
  /** 当前工作区根目录；未打开时为 null。 */
  projectDir: string | null;
}

/** 一个工作台扩展菜单项的注册契约（结构同 StatusBarItem，但走独立注册表 + 独立 window API）。 */
export interface WorkbenchStatusBarItem {
  id: string;
  text: string;
  /** 实时文案读取器，语义同 StatusBarItem.textFn（渲染期调用，免反复 register）。 */
  textFn?: () => string;
  commandId: string;
  tooltip?: string;
  /** 条目图标（内置 icon 集名），「扩展」弹窗菜单里展示。 */
  icon?: string;
  order?: number;
  when?(ctx: WorkbenchStatusContext): boolean;
}

/** 已注册的工作台扩展菜单项（reactive ref → StatusBar 渲染随注册/注销实时更新）。 */
const workbenchStatusRegistry = ref<WorkbenchStatusBarItem[]>([]);

/** 注册工作台扩展菜单项（幂等：同 id 覆盖，按 order 升序）。 */
export function registerWorkbenchStatusBarItem(item: WorkbenchStatusBarItem): void {
  unregisterWorkbenchStatusBarItem(item.id);
  workbenchStatusRegistry.value = [...workbenchStatusRegistry.value, item].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

/** 注销工作台扩展菜单项（不存在时静默）。 */
export function unregisterWorkbenchStatusBarItem(id: string): void {
  workbenchStatusRegistry.value = workbenchStatusRegistry.value.filter((i) => i.id !== id);
}

/** 只读列表（StatusBar 消费）。 */
export function listWorkbenchStatusBarItems(): WorkbenchStatusBarItem[] {
  return workbenchStatusRegistry.value;
}

/* ---- 后台任务贡献点：把工作台既有的长任务登记处开放给外部插件复用 ---- */

/** startTask 的可选参数：与内部 FileListPane 等调用方同一套语义。 */
export interface TaskStartOptions {
  /** 目标详情（文件/目录路径或计数），显示在任务行右侧。 */
  detail?: string;
  /** 操作文件的类型名称（如 `.png` / 「文件夹」），用于日志概要聚合。 */
  fileType?: string;
  /** 操作文件大小（字节，仅文件）。 */
  fileSize?: number;
}

/**
 * 发起任务后返回的句柄：插件据此推进 / 收尾自己的长任务。
 * 与内部 `TaskHandle` 同结构；这里显式声明以隔离实现细节。
 */
export interface PluginTaskHandle {
  /** 记录一个中间步骤（仅运行中生效）。 */
  step(msg: string, file?: string, detail?: string, fileType?: string, fileSize?: number): void;
  /** 修改任务描述文案。 */
  updateLabel(label: string): void;
  /** 标记成功（可带补充消息）。 */
  done(msg?: string): void;
  /** 标记失败（带原因）。 */
  fail(msg?: string): void;
}

/** 暴露给外部插件的后台任务门面。 */
export interface BackgroundTasks {
  /** 发起一个后台任务，返回句柄用于 step / done / fail。 */
  start(label: string, opts?: TaskStartOptions): PluginTaskHandle;
  /** 清除已结束任务（活跃历史先归档再清空）。 */
  clearFinished(): Promise<void>;
  /** 清空全部任务（含运行中）。 */
  clearAll(): Promise<void>;
}

/**
 * 桥接到 workbench 的任务实现（composables/session/tasks）。
 *
 * 静态导入安全：tasks → useApi 的模块副作用只是建 reactive store / 定义函数，无 eager 网络调用；
 * 且 activityBar 不在 tasks/useApi 的依赖链上，无循环。这样 `start()` 同步建任务、立即出现在面板。
 */
const backgroundTasks: BackgroundTasks = {
  start(label, opts) {
    return startTask(label, opts?.detail, opts?.fileType, opts?.fileSize);
  },
  clearFinished() {
    return clearFinished();
  },
  clearAll() {
    return clearAll();
  },
};

/* ---- window 全局 API（跨 bundle 注入入口） ---- */
interface WorkbenchVSCodeAPI {
  apiVersion: number;
  activityBar: {
    register: typeof registerActivityView;
    unregister: typeof unregisterActivityView;
  };
  commands: {
    register: typeof registerCommand;
    unregister: typeof unregisterCommand;
    execute: typeof executeCommand;
    list: typeof listCommands;
    has: typeof hasCommand;
  };
  statusbar: {
    register: typeof registerStatusBarItem;
    unregister: typeof unregisterStatusBarItem;
    list: typeof listStatusBarItems;
    /** 顶栏「扩展」下拉菜单贡献点：条目契约同 StatusBarItem，独立注册表。 */
    registerMenu: typeof registerExtensionMenuItem;
    unregisterMenu: typeof unregisterExtensionMenuItem;
    listMenu: typeof listExtensionMenuItems;
  };
}

interface WorkbenchActivityAPI {
  apiVersion: number;
  activityBar: {
    register: typeof registerWorkbenchActivityView;
    unregister: typeof unregisterWorkbenchActivityView;
  };
  statusbar: {
    register: typeof registerWorkbenchStatusBarItem;
    unregister: typeof unregisterWorkbenchStatusBarItem;
    list: typeof listWorkbenchStatusBarItems;
  };
  backgroundTasks: BackgroundTasks;
}

/* ---- 早注册代理的认领端（生产端见 src/client/contributionProxy.ts） ---- */

/** client 桥接预置的占位代理：真实实现就绪后由本模块 rebind + flush。 */
interface ContributionProxy {
  /** 把三个命名空间的真实实现挂上（命令 / 视图 / 状态栏项）。 */
  rebindVSCode(h: {
    registerView: typeof registerActivityView;
    unregisterView: typeof unregisterActivityView;
    registerCommand: typeof registerCommand;
    executeCommand: typeof executeCommand;
    hasCommand: typeof hasCommand;
    listCommands: typeof listCommands;
    unregisterCommand: typeof unregisterCommand;
    registerStatus: typeof registerStatusBarItem;
    unregisterStatus: typeof unregisterStatusBarItem;
    listStatus: typeof listStatusBarItems;
    registerMenu: typeof registerExtensionMenuItem;
    unregisterMenu: typeof unregisterExtensionMenuItem;
    listMenu: typeof listExtensionMenuItems;
  }): void;
  rebindWorkbench(h: {
    registerView: typeof registerWorkbenchActivityView;
    unregisterView: typeof unregisterWorkbenchActivityView;
    registerStatus: typeof registerWorkbenchStatusBarItem;
    unregisterStatus: typeof unregisterWorkbenchStatusBarItem;
    listStatus: typeof listWorkbenchStatusBarItems;
    backgroundTasks: BackgroundTasks;
  }): void;
  /** 冲刷缓冲队列并停止缓冲；此后 window 上的对象即真实 API。 */
  flush(): void;
}

/**
 * 尝试认领已存在的早注册代理并把真实实现接上、冲刷缓冲。
 * @returns true = 认领成功（window 已由代理持有，调用方无需再赋值）；false = 无代理（独立 dev）。
 */
function adoptContributionProxy(): boolean {
  const w = window as unknown as Record<string, unknown>;
  // __proxy 只存在于 client 预置的占位代理上（见 contributionProxy.ts）；真实 API 没有该字段。
  const proxy = (w.__dshFileWorkbenchVSCode__ as { __proxy?: ContributionProxy } | undefined)?.__proxy;
  if (!proxy) return false;
  proxy.rebindVSCode({
    registerView: registerActivityView,
    unregisterView: unregisterActivityView,
    registerCommand: registerCommand,
    executeCommand: executeCommand,
    hasCommand: hasCommand,
    listCommands: listCommands,
    unregisterCommand: unregisterCommand,
    registerStatus: registerStatusBarItem,
    unregisterStatus: unregisterStatusBarItem,
    listStatus: listStatusBarItems,
    registerMenu: registerExtensionMenuItem,
    unregisterMenu: unregisterExtensionMenuItem,
    listMenu: listExtensionMenuItems,
  });
  proxy.rebindWorkbench({
    registerView: registerWorkbenchActivityView,
    unregisterView: unregisterWorkbenchActivityView,
    registerStatus: registerWorkbenchStatusBarItem,
    unregisterStatus: unregisterWorkbenchStatusBarItem,
    listStatus: listWorkbenchStatusBarItems,
    backgroundTasks,
  });
  // 微任务边界：让「同步紧跟着 register 的调用」先进队，再一次性 flush，保证顺序正确。
  queueMicrotask(() => proxy.flush());
  return true;
}

if (typeof window !== "undefined") {
  const w = window as unknown as Record<string, unknown>;
  const api: WorkbenchVSCodeAPI = {
    apiVersion: ACTIVITY_API_VERSION,
    activityBar: { register: registerActivityView, unregister: unregisterActivityView },
    commands: {
      register: registerCommand,
      unregister: unregisterCommand,
      execute: executeCommand,
      list: listCommands,
      has: hasCommand,
    },
    statusbar: {
      register: registerStatusBarItem,
      unregister: unregisterStatusBarItem,
      list: listStatusBarItems,
      registerMenu: registerExtensionMenuItem,
      unregisterMenu: unregisterExtensionMenuItem,
      listMenu: listExtensionMenuItems,
    },
  };
  const wbApi: WorkbenchActivityAPI = {
    apiVersion: ACTIVITY_API_VERSION,
    activityBar: {
      register: registerWorkbenchActivityView,
      unregister: unregisterWorkbenchActivityView,
    },
    statusbar: {
      register: registerWorkbenchStatusBarItem,
      unregister: unregisterWorkbenchStatusBarItem,
      list: listWorkbenchStatusBarItems,
    },
    backgroundTasks,
  };
  // 若 client 桥接已预置「早注册代理」（见 src/client/contributionProxy.ts），把真实实现接上、
  // 冲刷其缓冲的注册；否则（独立 vite dev，无 client）直接自建全局对象。
  // 幂等：HMR / bundle 重注时重复执行——rebind + flush 均为幂等，注册走同 id 覆盖语义。
  if (!adoptContributionProxy()) {
    w.__dshFileWorkbenchVSCode__ = api;
    w.__dshFileWorkbenchWorkbench__ = wbApi;
  }
}

declare global {
  interface Window {
    __dshFileWorkbenchVSCode__?: WorkbenchVSCodeAPI;
    __dshFileWorkbenchWorkbench__?: WorkbenchActivityAPI;
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

  // 演示「命令 + 状态栏项」贡献点：状态栏出现一个按钮，点击弹 toast（仅 dev）。
  registerCommand("demo.statusPing", (arg) => {
    const path = (arg as StatusCommandContext | undefined)?.path ?? null;
    // 直接引 toast 的底层实现（composables/core/toast），绕开 workbench store 避免循环依赖。
    import("../composables/core/toast").then(({ toast }) =>
      toast("ok", path ? `当前文件：${path}` : "无激活文件"),
    );
  });
  registerStatusBarItem({
    id: "demo.statusPing",
    text: "示例状态栏",
    icon: "puzzle",
    commandId: "demo.statusPing",
    tooltip: "示例插件：点击读取当前激活文件（仅 dev）",
    order: 90,
  });

  // 演示「扩展菜单」贡献点：顶栏「扩展」下拉里出现一条，点击复用同一命令（仅 dev）。
  registerExtensionMenuItem({
    id: "demo.extMenuPing",
    text: "示例扩展菜单项",
    icon: "puzzle",
    commandId: "demo.statusPing",
    tooltip: "示例插件：顶栏扩展菜单条目，点击读取当前激活文件（仅 dev）",
    order: 90,
  });

  // 演示「工作台扩展菜单」贡献点：文件工作台底栏「扩展」弹层里出现一条（仅 dev）。
  registerCommand("demo.wbStatusPing", (arg) => {
    const dir = (arg as WorkbenchStatusContext | undefined)?.projectDir ?? null;
    import("../composables/core/toast").then(({ toast }) =>
      toast("ok", dir ? `当前工作区：${dir}` : "未打开工作区"),
    );
  });
  registerWorkbenchStatusBarItem({
    id: "demo.wbStatusPing",
    text: "示例工作台扩展项",
    icon: "puzzle",
    commandId: "demo.wbStatusPing",
    tooltip: "示例插件：工作台底栏扩展菜单条目，点击读取当前工作区（仅 dev）",
    order: 90,
  });
}
