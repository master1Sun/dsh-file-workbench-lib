/**
 * 右侧面板 tab 主体（注册于 `sidebar.right.pane.tab`，key = 包名）。
 *
 * 把 Vue 文件工作台（App.vue 主体，无抽屉外壳）挂进插槽容器：复用 apply 注入到
 * document.head 的 Vue 产物（样式 + 模块脚本，仅用于定义 `__dshFileWorkbenchMountPane__`），
 * 仅调用它把工作台主体挂进本组件渲染的容器。
 *
 * 挂载是惰性的：Vue 模块尚未就绪时轮询等待，避免右侧面板比脚本加载更早打开时找不到挂载点。
 *
 * ## 文件编辑器：多实例
 *
 * `sidebar.right.pane.tab` 是**按 tab 分发**的 keyed 插槽 —— 同一种 kind 在不同分栏
 * （或浮窗）里各有一份 tab 记录，框架会为每个 tab 渲染一次正文组件。因此本文件的两个桥接
 * 组件都可能**同时存在多份实例**。
 *
 * 编辑器那一份因此还需要两件东西，都从框架以 prop 注入的 `useTabInfo()` 里取：
 *  - `tab.id` / `panel.id` → 作为**实例身份**透传给 Vue，决定它用哪个状态槽（否则两份实例
 *    会镜像同一份状态）；
 *  - `tab.navigation` → 外部通过 `openTab('vscode', { params: { projectDir } })` 请求
 *    打开某项目时，`revision` 自增并把 `params` 送达；这里据此把请求交给对应实例。
 *
 * ## 为什么需要「kind 池」（框架约束，勿绕过）
 *
 * 框架对**页 tab** 的唯一性判定是「同一分栏内，每种 kind 至多一个 tab」：
 * 页地址被写成 `sidebar://<kind>`，只要 `tab.contentId === pageAddress(tab.kind)` 就算页 tab，
 * 而 `planOpenContent` 会对页强制 `revealIfOpened:false`，`duplicateTab` 对页直接返回空操作
 * （`pageKind(...) !== void 0 ? [] : …`）。
 *
 * ⇒ **同一个 kind 在同一分栏内不可能出现两份**；想在同一分栏里「平级多开」编辑器，
 * 只能让每个编辑器 tab 各自占一个 kind（`vscode` / `vscode-2` / …）。池在 apply 时
 * 全量注册（这样重启后布局里记录的 kind 也一定有类型在册，不会渲染成「无法查看」）。
 *
 * 本文件据此维护「哪些 kind 已被占用」的注册表，供 `index.tsx` 分配下一个空槽；
 * 回收靠 `tab.signal`（tab 记录消失时才中止，切换标签/隐藏不会误回收）。
 *
 * 工作台那一份不需要 tab 身份（它是单实例），但仍保留同一套惰性挂载逻辑。
 */
import { useEffect, useRef, type ReactNode } from "react";

/** 前端资源基址前缀（与 src/client/index.tsx 的 PREFIX 保持一致）。 */
const API_PREFIX = "/api/dsh-file-workbench";

/** Vue 侧挂载入口返回的句柄。 */
interface PaneHandle {
  unmount: () => void;
  /** 仅文件编辑器实例提供：请求本实例打开某个项目目录。 */
  openProject?: (dir: string) => void;
}

/**
 * 框架以 prop 注入的 tab 信息 hook（只声明本插件用到的字段）。
 *
 * 形状来自 `@deepseek-ai/dsh-client-ui-sidebar-right` 的 `SidebarRightTabInfo`：
 * 每个 tab 的正文组件都会收到 `useTabInfo`，读到所在分栏、tab 记录与导航参数。
 */
interface TabInfoLike {
  panel: { id: string };
  tab: {
    id: string;
    /** tab 的类型判别符（本插件的编辑器池是 `vscode` / `vscode-2` / …）。 */
    kind: string;
    visible: boolean;
    navigation: { address: string; params: unknown; revision: number };
    /** 仅在 tab 记录消失（被关闭）或插件卸载时中止 —— 不随隐藏、切换会话中止。 */
    signal?: AbortSignal;
  };
}

type UseTabInfo = () => TabInfoLike;

/** 任一挂载入口在 window 上的形状（与 src/vue/main.ts 注册的字段保持一致）。 */
type GlobalMount = (
  el: HTMLElement,
  opts?: { apiBase?: string; instanceId?: string; panelId?: string; fresh?: boolean },
) => PaneHandle;

function apiBase(): string {
  return `${window.location.origin}${API_PREFIX}`;
}

/**
 * 从导航参数里取出项目目录。
 *
 * 参数形状是本插件与自己的约定（官方 `SidebarRightTabParamsMap` 运行时不校验），
 * 因此这里做完整校验：非对象 / 空串一律当作「没有指定」，避免把脏值当路径用。
 */
function projectDirOf(params: unknown): string | null {
  if (!params || typeof params !== "object") return null;
  const d = (params as { projectDir?: unknown }).projectDir;
  return typeof d === "string" && d.trim() !== "" ? d : null;
}

/**
 * 是否要求新开的编辑器从**空白**开始（由「新建编辑器窗口」按钮通过 `params.fresh` 下发）。
 *
 * 框架对页 tab 强制 `revealIfOpened:false` 且 `openTab` 会聚焦已有同 kind tab —— 但本插件用
 * kind 池让每份编辑器各占一个 kind，所以「新建」对框架而言永远是新 tab，`params` 一定能送达。
 */
function freshOf(params: unknown): boolean {
  if (!params || typeof params !== "object") return false;
  return (params as { fresh?: unknown }).fresh === true;
}

/**
 * 已被占用的编辑器 kind → 占用它的 tab id。
 *
 * 模块级（client bundle 单例）即可：所有编辑器正文组件都由本 bundle 渲染，读写同一份状态。
 * 用来在「平级多开」时挑一个尚未占用的 kind —— 否则 `openTab` 会命中页去重、只是聚焦已有 tab。
 */
const openVsKinds = new Map<string, string>();

/** 该 kind 是否已有编辑器 tab 在册（供 index.tsx 分配空槽）。 */
export function vsKindInUse(kind: string): boolean {
  return openVsKinds.has(kind);
}

/**
 * 该 kind 当前占用的 tab id（未占用时为 undefined）。
 *
 * 供 index.tsx 在**池满**时做「替换掉第一个」：宿主 `openTab(kind, { replaceTab })` 的语义是
 * 「顶替该 tab 的分栏与 tab 条位置，并在同一步里关闭它」，是原子操作 —— 比先 `close` 再
 * `openTab` 少一次竞态（close 的 abort 回收与本插件 `openVsKinds` 的更新顺序不确定）。
 */
export function vsKindTabId(kind: string): string | undefined {
  return openVsKinds.get(kind);
}

/**
 * 当前在册的编辑器 tab 数（= 已占用的 kind 数）。
 *
 * 供调用方在**新建前**判断池是否已满 —— 池满时新建会顶替掉最旧的一个，而那一份的未保存改动
 * 会随之消失，因此调用方应先提示用户，而不是等窗口被顶替后再让用户发现。
 */
export function vsOpenKindCount(): number {
  return openVsKinds.size;
}

/**
 * 登记一个已打开的编辑器 tab，并在其记录消失时回收槽位。
 *
 * 监听器**故意不随组件卸载移除**：非活动 tab 的正文组件会被宿主卸载，若在 effect cleanup 里
 * 退订，那么「在别处关掉一个非活动编辑器 tab」就永远回收不了它的 kind（池会被逐渐耗光）。
 * `signal` 的存活期与 tab 记录一致，终止时监听器自然释放。
 */
function trackVsKind(kind: string, tabId: string, signal: AbortSignal | undefined): void {
  if (openVsKinds.get(kind) === tabId) return;
  openVsKinds.set(kind, tabId);
  try {
    signal?.addEventListener(
      "abort",
      () => {
        if (openVsKinds.get(kind) === tabId) openVsKinds.delete(kind);
      },
      { once: true },
    );
  } catch (e) {
    console.warn("[dsh-file-workbench] track editor kind failed:", e);
  }
}

/**
 * 通用的「惰性挂载到插槽容器」逻辑。
 *
 * @param el - 容器元素。
 * @param globalName - Vue 侧暴露的挂载函数名。
 * @param opts - 透传给 Vue 的挂载选项（编辑器会带 tab 身份）。
 * @param onHandle - 挂载成功后的回调（拿得到句柄，用于投递后续请求）。
 * @returns 清理函数。
 */
function mountInto(
  el: HTMLElement,
  globalName: "__dshFileWorkbenchMountPane__" | "__dshVSCodeMountPane__",
  opts: { instanceId?: string; panelId?: string; fresh?: boolean },
  onHandle?: (h: PaneHandle) => void,
): () => void {
  let handle: PaneHandle | null = null;
  let timer = 0;
  const attempt = (): void => {
    const fn = (window as unknown as Record<string, GlobalMount | undefined>)[globalName];
    if (typeof fn === "function") {
      handle = fn(el, { apiBase: apiBase(), ...opts });
      onHandle?.(handle);
      return;
    }
    timer = window.setTimeout(attempt, 60);
  };
  attempt();
  return () => {
    if (timer) window.clearTimeout(timer);
    try {
      handle?.unmount();
    } catch (e) {
      console.warn("[dsh-file-workbench] pane unmount failed:", e);
    }
    handle = null;
  };
}

/** 文件工作台 tab 正文：单实例，不需要 tab 身份。 */
export function RightPaneBridge(): ReactNode {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return mountInto(el, "__dshFileWorkbenchMountPane__", {});
  }, []);

  return <div ref={ref} style={{ height: "100%", width: "100%", minHeight: 0 }} />;
}

/**
 * 「文件编辑器」tab 正文：每开一个编辑器 tab 就多一份本组件 —— 把 tab 身份交给 Vue，
 * 使每一份都持有独立的项目 / 标签 / 展开态与未保存缓冲。
 */
export function VSCodePaneBridge(props: { useTabInfo?: UseTabInfo }): ReactNode {
  // hook 必须无条件调用；`useTabInfo` 是否存在在整个挂载期内不变，故这个条件判断是稳定的。
  const readTabInfo = typeof props?.useTabInfo === "function" ? props.useTabInfo : null;
  const info = readTabInfo ? readTabInfo() : null;
  const tabId = info?.tab?.id ?? null;
  const panelId = info?.panel?.id ?? null;
  const revision = info?.tab?.navigation?.revision ?? -1;
  const dir = projectDirOf(info?.tab?.navigation?.params);
  const fresh = freshOf(info?.tab?.navigation?.params);

  const ref = useRef<HTMLDivElement>(null);
  const handleRef = useRef<PaneHandle | null>(null);
  /** 挂载完成前到达的「打开项目」请求，挂载后立即补投。 */
  const queuedDirRef = useRef<string | null>(null);
  const lastRevRef = useRef<number>(-1);
  /** 首帧的 tab 身份即最终身份（tab id / kind 在 tab 存续期内不变），用 ref 固定供只跑一次的挂载副作用使用。 */
  const identityRef = useRef({
    tabId,
    panelId,
    kind: info?.tab?.kind ?? null,
    signal: info?.tab?.signal,
  });

  // ① 挂载（只做一次）：把实例身份交给 Vue 侧，决定它使用哪个状态槽；并登记本 tab 占用的 kind。
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const id = identityRef.current;
    if (id.tabId && id.kind) trackVsKind(id.kind, id.tabId, id.signal);
    // 真正关闭该编辑器 tab 时（tab.signal 中止，而非切走再切回）释放跨挂载保留的活编辑器视图，
    // 否则 detached 的 EditorView 会随每次关闭累积、吃内存。切面板不触发中止，视图照常复用。
    if (id.signal) {
      id.signal.addEventListener(
        "abort",
        () => {
          if (!id.tabId) return;
          try {
            (
              window as unknown as Record<string, ((tabId: string) => void) | undefined>
            ).__dshFWDisposeEditorSlotByTabId?.(id.tabId);
          } catch (e) {
            console.warn("[dsh-file-workbench] dispose editor slot failed:", e);
          }
        },
        { once: true },
      );
    }
    return mountInto(
      el,
      "__dshVSCodeMountPane__",
      { instanceId: id.tabId ?? undefined, panelId: id.panelId ?? undefined, fresh },
      (h) => {
        handleRef.current = h;
        const queued = queuedDirRef.current;
        if (queued) {
          queuedDirRef.current = null;
          h.openProject?.(queued);
        }
      },
    );
  }, []);

  // ② 导航：`openTab('vscode', { params: { projectDir } })` 会聚焦已有 tab 并让 revision 自增，
  //    于是「文件工作台里右键文件夹 → 在文件编辑器中打开」能落到已经打开的那个编辑器上。
  useEffect(() => {
    if (revision < 0 || revision === lastRevRef.current) return;
    lastRevRef.current = revision;
    if (!dir) return;
    if (handleRef.current) handleRef.current.openProject?.(dir);
    else queuedDirRef.current = dir;
  }, [revision, dir]);

  return <div ref={ref} style={{ height: "100%", width: "100%", minHeight: 0 }} />;
}
