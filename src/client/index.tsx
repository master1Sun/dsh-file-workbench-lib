/**
 * dsh-file-workbench — 浏览器入口（DSH 客户端模块格式，esbuild → lib/client.js）。
 *
 * 工作台仅经由 DSH 新版右侧栏 tab 进入：apply 注入 Vue 产物（样式 + 模块脚本），
 * 并注册右侧栏 tab（类型 + 主体 + 标题）。
 */
import { zh, en } from "../shared/locales.js";
import type { ReactNode } from "react";
import { RightPaneBridge, VSCodePaneBridge, vsKindInUse, vsKindTabId, vsOpenKindCount } from "./RightPaneBridge.js";
import { ComposerBridge } from "./ComposerBridge.js";
import { createTabMenuItems } from "./TabMenuBridge.js";
import { createGuideCard } from "./GuideCardBridge.js";
import { installContributionProxy } from "./contributionProxy.js";
import { installOfficialTerminal, type OfficialTermApi } from "./OfficialTerminalBridge.js";
import { setSidebarRight } from "./api.js";

/** 前端资源基址（host REST + 静态资源前缀）。 */
export const PREFIX = "/api/dsh-file-workbench";

/**
 * 此插件的 apply 依赖的客户端服务。
 *
 * `uiSession` / `conversation` 用于「引用文件/目录到会话」：DSH 官方的引用是
 * Lexical 里的结构化 chip（`source: "reference"`），写入通道是 per-session 的
 * `SessionInput.insertReference`；插件经 `uiSession.provide` 的 resolve(binding)
 * 拿到 session 作用域 ctx（`SessionBinding.ctx`），再由
 * `conversation.input.for(actx)` 解析出该会话的输入面板 facade。
 */
export const inject = [
  "locale",
  "sessions",
  "slots",
  "sidebarRightTabs",
  "sidebarRight",
  "uiSession",
  "conversation",
];

/** 右侧面板 tab 的 kind（openTab(kind) 用到的名字）。 */
const KIND = "workbench";

/** 本实现在 tab 系统中的身份，也是主体/标题注册时用的 key（约定用包名）。 */
const ID = "@sunjuntao/dsh-file-workbench";

/** 「文件编辑器」tab 的 kind（openTab(kind) 用到的名字，也是 guide 入口指向的那个）。 */
const KIND_VS = "vscode";
/** 「文件编辑器」tab 的身份 key（主体/标题注册用，与主工作台区分）。 */
const ID_VS = "@sunjuntao/dsh-file-workbench.vscode";

/**
 * 编辑器 kind 池的容量 —— 即**同一分栏内最多能平级并存多少个编辑器 tab**。
 *
 * 宿主对页 tab 的唯一性判定是「每分栏每 kind 至多一个」（页地址 = `sidebar://<kind>`，
 * 且页 tab 的 `duplicateTab` 是空操作），所以「平级多开」只能让每个编辑器各占一个 kind。
 * 池在 apply 时**全量注册**：布局里可能持久化过任意一个池内 kind，重启后必须有类型在册，
 * 否则该 tab 会渲染成「没有类型能查看它」。
 */
const VS_KIND_POOL = 8;

/** 池内第 n 个（1 起）编辑器 kind。第 1 个沿用 `vscode`，以兼容既有持久化与工作台入口。 */
function vsKindAt(n: number): string {
  return n <= 1 ? KIND_VS : `${KIND_VS}-${n}`;
}

/** 池内第 n 个编辑器 kind 的注册身份 key（正文注册的 key 必须与类型注册的 id 一致）。 */
function vsIdAt(n: number): string {
  return n <= 1 ? ID_VS : `${ID_VS}.${n}`;
}

/** 翻译字典注册到 DSH locale registry 的命名空间。 */
const LOCALE_NS = "dsh-file-workbench";

/** apply 幂等标志：DSH 可能重复调用 apply，用模块级标志防止重复注入 / 重复注册。 */
let clientApplied = false;

/**
 * 工作台项目图标（guide 入口胶囊 / tab 标题处绘制）。
 *
 * 造型 = 资源管理器窗口：圆角外框 + 左侧导航栏分隔线 + 导航短刻度 + 内容区列表行，
 * 直线描边、圆角端点，落在 `currentColor` 上（与宿主 CubeGlyph 同一绘制约定）。
 */
function WorkbenchGlyph({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <rect x="1.9" y="2.9" width="12.2" height="10.2" rx="1.6" stroke="currentColor" strokeWidth="1.3" />
      <path d="M 6.2 2.9 V 13.1" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M 3.7 5.7 h 1.1 M 3.7 8 h 1.1 M 3.7 10.3 h 1.1"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M 8.3 5.7 h 3.9 M 8.3 8 h 3.9 M 8.3 10.3 h 2.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * VS Code 编辑器图标（合并 guide 卡片切到「文件编辑器」默认目标时绘制）。
 *
 * 造型 = 代码编辑器窗口：圆角外框 + 左侧窄活动栏 + 编辑区代码刻度行，
 * 直线描边、圆角端点，落在 `currentColor` 上（与宿主 CubeGlyph 同一绘制约定）。
 */
function VSCodeGlyph({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <rect x="1.7" y="2.6" width="12.6" height="10.8" rx="1.4" stroke="currentColor" strokeWidth="1.3" />
      <path d="M 5.1 2.6 V 13.4" stroke="currentColor" strokeWidth="1.3" />
      <path d="M 7 6.2 h 5.6 M 7 8.2 h 5.6 M 7 10.2 h 3.8" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

/** Vue 运行时桥接在 window 上的形状（与 src/vue/main.ts 注册的字段保持一致）。 */
interface WorkbenchBridge {
  apiBase: string;
  pickDirectory?: () => Promise<string | null>;
  getSessionDir: () => string | null;
  getSessionId: () => string | null;
  syncSessionWorkspace?: () => void;
  pendingOpens?: { kind: "file" | "folder"; path: string }[];
  /** 订阅当前选中的会话 id 变化（会话切换时回调最新 id，供 SSE 重连）。返回注销函数。 */
  subscribeCurrentSessionId?: (cb: (id: string | null) => void) => () => void;
  locale: unknown;
  openExternalFile?: (path: string) => void;
  openExternalFolder?: (path: string) => void;
  /** 文件查看改道到 DSH 右侧原生查看器。 */
  openInSidebar?: (path: string) => void;
  /** 宿主官方目录浏览（ctx.uiWorkspace.listDirectory）：列出子目录 + 面包屑。 */
  listDirectory?: (path?: string) => Promise<unknown>;
  /** 宿主官方目录创建（ctx.uiWorkspace.createDirectory）。 */
  createDirectory?: (path: string, name: string) => Promise<string>;
  /**
   * 把某文件/目录作为 `@路径` 引用追加到当前会话输入框草稿（由 ComposerBridge 提供）。
   * @returns 是否成功追加（输入框座位未挂载时为 false）。
   */
  appendSessionReference?: (path: string, isDir?: boolean) => boolean;
  /** 官方终端桥（本机终端走宿主 ctx.webTerminals；见 OfficialTerminalBridge.ts）。 */
  officialTerminal?: OfficialTermApi;
}

/** ctx.sessions.list 快照的最小形状（current=当前选中 id；byId=各会话元信息）。 */
interface SessionList {
  current?: string;
  byId?: Record<string, { cwd?: string; title?: string }>;
}

interface ClientCtx {
  effect(fn: () => unknown, label: string): unknown;
  locale: {
    register(namespace: string, lang: string, dict: Record<string, string>): () => void;
    /** 当前语言快照（active 为活动 locale id）。 */
    getLocale?(): { active: string };
  };
  slots?: {
    inject(slotName: string, factory: () => () => void): unknown;
    register(options: Record<string, unknown>, component: (props: unknown) => ReactNode): () => void;
  };
  sidebarRightTabs?: {
    register(definition: Record<string, unknown>): () => void;
  };
  sidebarRight?: {
    /**
     * 打开一个页 tab。`options.paneId` 落位到指定分栏、`options.params` 作为导航参数
     * 送达该 tab 的正文（`useTabInfo().tab.navigation.params`，并让 `revision` 自增）。
     *
     * 页 tab 只在**目标分栏内**去重：同 kind 在另一分栏会另开一份 → 这是「多个文件编辑器
     * 窗口」成立的基础（配合 `split()`）。
     */
    openTab(kind: string, options?: Record<string, unknown>): void;
    /** 打开一个资源地址（`dsh-resource://…`），由注册的查看器认领。 */
    openResource(address: string, options?: Record<string, unknown>): void;
    /**
     * 把停靠分栏再分一格（右侧栏上限两格），并在新格播种默认页。
     * @returns 新分栏 id；窗口宽度不足 / 已达两格上限时为 undefined。
     */
    split(paneId?: string): string | undefined;
    /** 把停靠 tab 弹出为独立浮窗。 */
    float(tabId: string): void;
    /** 把浮窗收回停靠位。 */
    dock(paneId: string): void;
    /** 关闭一个 tab（唯一停靠的引导页不可关）。 */
    close(tabId: string): void;
    /** 右侧栏当前是否展开。 */
    isExpanded(): boolean;
  };
  workspaces?: {
    pickDirectory?: () => Promise<string | null>;
    /** 会话侧打开文件的唯一门户：包装它以把聊天中的文件打开改道到工作台。 */
    openPath?: (path: string) => Promise<void>;
  };
  sessions?: {
    list: {
      getSnapshot(): SessionList;
      subscribe?(cb: () => void): () => void;
    };
  };
  /**
   * 会话作用域 source 注册表：`provide` 的 `resolve(binding)` 回调拿到
   * Controller 持有的 SessionBinding，其 `ctx` 是带 agent tag 的 Cordis 上下文，
   * 可用于解析该会话的输入面板（见 conversation.input.for）。
   */
  uiSession?: {
    provide(descriptor: {
      props?: readonly string[];
      resolve(binding: SessionBindingLike): { props?: Record<string, unknown> };
    }): () => void;
  };
  /** 会话面板服务：`input.for(actx)` 解析 per-session 输入 facade（含 insertReference）。 */
  conversation?: {
    input?: {
      for(actx: unknown): SessionInputLike | undefined;
    };
  };
  /**
   * 工作区导航 + 目录 UI 能力（`ctx.uiWorkspace`）：官方目录浏览/创建/原生选择。
   * 「选择文件夹」弹窗优先用它列目录（返回仅子目录 + 面包屑），避免插件自造 /list 受限。
   */
  uiWorkspace?: {
    pickDirectory?(): Promise<string | null>;
    listDirectory?(path?: string, signal?: AbortSignal): Promise<UiDirectoryListing>;
    createDirectory?(path: string, name: string): Promise<string>;
  };
}

/** uiWorkspace.listDirectory 返回结构（与 dsh-host-directory-picker/types 对齐）。 */
interface UiDirectoryListing {
  path: string;
  home: string;
  crumbs: { name: string; path: string; hidden: boolean }[];
  entries: { name: string; path: string; hidden: boolean }[];
  truncated: boolean;
}

/** Controller 持有的会话绑定（只声明本插件用到的字段）。 */
interface SessionBindingLike {
  /** session 作用域 Cordis 上下文（带 agent tag，`scopeOf` 可解析出 sessionId）。 */
  ctx: unknown;
}

/** per-session 输入 facade：只声明官方引用插入入口。 */
interface SessionInputLike {
  /**
   * 把一个结构化引用（chip）替换进编辑器 span。
   * @returns 是否写入成功（phase / span CAS 未通过时为 false）。
   */
  insertReference?(
    ref: {
      source: string;
      ref: string;
      label: string;
      appearance?: "session" | "file" | "folder";
      clipboardText: string;
    },
    span: { start: number; end: number; draftRev: number },
  ): boolean;
}

export function apply(ctx: ClientCtx): void {
  const apiBase = `${window.location.origin}${PREFIX}`;

  // ⚠️ 必须**最先、同步**装好贡献点早注册代理：Vue bundle 是稍后异步注入的（<script type=module>），
  // 其 window API 要等 bundle 执行才出现。第三方插件若在那之前 register 会拿到 undefined → 注入丢失。
  // 代理先把两个全局名占上并缓冲注册，Vue 就绪后再 rebind + flush（见 contributionProxy.ts）。
  installContributionProxy();

  // apply 幂等：DSH 重复调用 apply 时跳过，避免重复包 openPath / 重复注入 Vue 产物 / 重复注册插槽。
  if (clientApplied) return;
  clientApplied = true;

  /** 按 DSH 活动语言从本插件字典取词（供 tab 标题 / guide 文案使用）。 */
  const tr = (key: keyof typeof zh): string => {
    // 优先取宿主 locale 服务；它不可得/未就绪时回退到 <html lang>（DSH 通常会同步写入），
    // 避免默认一路落到 "en" 导致中文环境也显示英文、或反之。
    const active =
      ctx.locale?.getLocale?.()?.active ??
      (typeof document !== "undefined" ? document.documentElement.lang : "") ??
      "en";
    const dict: Record<string, string> = active.toLowerCase().startsWith("zh") ? zh : en;
    return dict[key] ?? (en as Record<string, string>)[key] ?? String(key);
  };

  // 尽力获取宿主的目录选择能力（优先官方 uiWorkspace，回退旧 workspaces 服务；都缺省时 Vue 走路径输入框）。
  let pickDirectory: (() => Promise<string | null>) | undefined;
  try {
    pickDirectory = ctx.uiWorkspace?.pickDirectory ?? ctx.workspaces?.pickDirectory;
  } catch {
    /* 服务不可用，忽略 */
  }

  // 读取当前会话（对话）的工作目录；sessions 服务不可得时缺省返回 null。
  const getSessionDir = (): string | null => {
    try {
      const list = ctx.sessions?.list?.getSnapshot?.();
      const id = list?.current;
      return (id && list?.byId?.[id]?.cwd) || null;
    } catch {
      return null;
    }
  };

  // 读取当前（选中的）会话 id。
  const getSessionId = (): string | null => {
    try {
      return ctx.sessions?.list?.getSnapshot?.()?.current ?? null;
    } catch {
      return null;
    }
  };

  /**
   * 订阅当前选中的会话 id 变化。随 `ctx.sessions.list` 的 current 切换回调最新 id；
   * 无选中会话时回调 null（供 Vue 侧断开 SSE）。后端 /stream/session 负责据此推送
   * 该会话触碰文件与运行态，前端无需轮询。
   */
  const subscribeCurrentSessionId = (cb: (id: string | null) => void): (() => void) => {
    let disposed = false;
    const notify = (): void => {
      if (disposed) return;
      try {
        cb(getSessionId());
      } catch {
        /* ignore */
      }
    };
    const unsubList = ctx.sessions?.list?.subscribe?.(notify);
    notify(); // 建初始基线
    return () => {
      disposed = true;
      try {
        unsubList?.();
      } catch {
        /* ignore */
      }
    };
  };

  // ---- 文件查看改道到 DSH 右侧原生查看器 ----
  // 文件查看统一改用 DSH 右侧查看器（`dsh-resource://file/**` 由
  // dsh-client-ui-sidebar-documentpreview 认领：Markdown/代码/图片/PDF/HTML/纯文本）。
  // 地址文法与 sidebar-files 的 fileAddressFor 一致：优先转成相对工作区根（cwd）的
  // session 作用域路径；工作区外的绝对路径原样放入 session 段（宿主可解析）。
  const FILE_ADDRESS_PREFIX = "dsh-resource://file/";
  const encodeSeg = (s: string): string => encodeURIComponent(s);
  const encodePathSegs = (p: string): string => p.split("/").map(encodeURIComponent).join("/");
  const isAbsPath = (p: string): boolean => p.startsWith("/") || /^[A-Za-z]:[\\/]/.test(p) || p.startsWith("\\\\");
  const sessionFileAddress = (sessionId: string, p: string): string => {
    const normalized = p.replace(/\\/g, "/").replace(/^(?:\.\/)+/, "");
    return `${FILE_ADDRESS_PREFIX}session/${encodeSeg(sessionId)}/${encodePathSegs(normalized)}`;
  };
  const fileAddressFor = (sessionId: string, cwd: string | null, path: string): string => {
    const normalized = path.replace(/\\/g, "/");
    if (!isAbsPath(normalized)) return sessionFileAddress(sessionId, normalized);
    const root = cwd ? cwd.replace(/\\/g, "/").replace(/\/+$/, "") : "";
    if (root !== "" && normalized === root) return sessionFileAddress(sessionId, "");
    if (root !== "" && normalized.startsWith(`${root}/`)) {
      return sessionFileAddress(sessionId, normalized.slice(root.length + 1));
    }
    return sessionFileAddress(sessionId, normalized);
  };
  /** 在 DSH 右侧打开一个文件的查看器标签；无选中会话或无 sidebarRight 服务时静默跳过。 */
  const openInSidebar = (path: string): void => {
    try {
      const sessionId = getSessionId();
      if (!sessionId || !path) return;
      ctx.sidebarRight?.openResource(fileAddressFor(sessionId, getSessionDir(), path));
    } catch (e) {
      console.warn("[dsh-file-workbench] openInSidebar failed:", e);
    }
  };

  // 预置 Vue 运行时的注入点（apiBase + 目录选择 + 会话目录 + locale 服务），供 Vue useApi / useI18n 读取。
  const bridge = ((window as unknown as { __DSH_FILE_WORKBENCH__?: WorkbenchBridge }).__DSH_FILE_WORKBENCH__ = {
    apiBase,
    pickDirectory,
    getSessionDir,
    getSessionId,
    openInSidebar,
    subscribeCurrentSessionId,
    locale: ctx.locale,
  });
  // 官方终端桥：本机终端的进程层交给宿主 ctx.webTerminals（缺服务/缺会话时 Vue 回退自建后端）。
  installOfficialTerminal(ctx as unknown as Parameters<typeof installOfficialTerminal>[0], bridge);

  // 宿主官方目录浏览/创建能力（`ctx.uiWorkspace`）：以**惰性取值器**透传给 Vue「选择文件夹」弹窗。
  // 惰性有两个好处：① 不把 uiWorkspace 写进 required inject，避免旧版 DSH 缺该服务时整个插件不激活；
  // ② 服务晚于 apply 注册时仍能取到。缺失时取值器返回 undefined，Vue 侧自动回退插件自建 `/list`。
  //
  // 注意：Cordis 的 ctx 是 proxy，读**未声明在 inject 里**的属性会直接抛
  // `cannot get property "uiWorkspace" without inject`（而不是返回 undefined），
  // 因此这里必须 try/catch 兜住——否则每次取值都会炸一条错误、且取值器返回结果是抛异常。
  const uiWorkspaceSafe = (): ClientCtx["uiWorkspace"] => {
    try {
      return ctx.uiWorkspace;
    } catch {
      return undefined;
    }
  };
  Object.defineProperty(bridge, "listDirectory", {
    configurable: true,
    enumerable: true,
    get: () => {
      const svc = uiWorkspaceSafe();
      return svc && typeof svc.listDirectory === "function"
        ? (path?: string): Promise<unknown> => svc.listDirectory!(path)
        : undefined;
    },
  });
  Object.defineProperty(bridge, "createDirectory", {
    configurable: true,
    enumerable: true,
    get: () => {
      const svc = uiWorkspaceSafe();
      return svc && typeof svc.createDirectory === "function"
        ? (path: string, name: string): Promise<string> => svc.createDirectory!(path, name)
        : undefined;
    },
  });

  // ---- 监听当前（选中）会话的切换：变更时通知工作台进入其工作区/仅刷新文件夹 ----
  let lastSessionId: string | null = getSessionId();
  let lastSessionDir: string | null = getSessionDir();
  const onSessionsChange = (): void => {
    const next = getSessionId();
    const nextDir = getSessionDir();
    const g = (window as unknown as { __DSH_FILE_WORKBENCH__?: WorkbenchBridge }).__DSH_FILE_WORKBENCH__;
    if (!next) return;
    const dirChanged = nextDir !== lastSessionDir;
    lastSessionDir = nextDir;
    if (next !== lastSessionId) {
      lastSessionId = next;
      // 切到新会话：进入其工作区。
      g?.syncSessionWorkspace?.();
      return;
    }
    // 同一会话内工作目录（cwd）变化：工作台默认工作区跟随联动。
    if (dirChanged) g?.syncSessionWorkspace?.();
  };
  const unsubSessions = ctx.sessions?.list?.subscribe?.(onSessionsChange) ?? null;
  if (unsubSessions) {
    ctx.effect(() => unsubSessions, "dsh-file-workbench: session-switch watch");
  }

  // ---- 拦截 ctx.workspaces.openPath，把会话侧文件打开改道到工作台 ----
  // host 客户端里所有"会话打开文件"（工具行路径、produced-files 产物行、正文提及）最终都调
  // 用 ctx.workspaces.openPath。包装该方法：工作台已挂载时把打开请求交给 Vue 端（openPreview /
  // 资源管理器），不再落入宿主 OS；未挂载时回落到原方法。
  const routeOpen = (kind: "file" | "folder", path: string): void => {
    const g = (window as unknown as { __DSH_FILE_WORKBENCH__?: WorkbenchBridge }).__DSH_FILE_WORKBENCH__;
    if (!g) return;
    const fn = kind === "file" ? g.openExternalFile : g.openExternalFolder;
    if (fn) fn(path);
    else (g.pendingOpens = g.pendingOpens ?? []).push({ kind, path });
  };

  // workspaces 是 host-only 服务（0.1.7 客户端运行时不再提供）。它不在 inject 里，
  // 直接读 ctx.workspaces 会被 Cordis proxy 抛 `cannot get property without inject`；
  // 这里用 try/catch 兜底，缺失时回落到宿主原生 openPath（不接管文件打开改道）。
  let ws;
  try {
    ws = ctx.workspaces;
  } catch {
    ws = undefined;
  }
  if (ws && typeof ws.openPath === "function") {
    const original = ws.openPath.bind(ws);
    ws.openPath = (path: string): Promise<void> => {
      // 工作台未就绪（右侧面板未打开 / 未注册 openExternalFile）时不接管，交由宿主打开。
      const g = (window as unknown as { __DSH_FILE_WORKBENCH__?: WorkbenchBridge }).__DSH_FILE_WORKBENCH__;
      if (!g || !g.openExternalFile) return original(path);
      // "Show in folder" 揭示手势（路径以 . 结尾）：改道人到工作台资源管理器。
      const trimmed = path.replace(/[\\/]+$/, "");
      const isReveal = path === "." || path === "./" || trimmed === "." || /[\\/]\.$/.test(trimmed);
      if (isReveal) {
        const dir = getSessionDir();
        if (dir) {
          routeOpen("folder", dir);
          return Promise.resolve();
        }
        return original(path);
      }
      // 普通文件打开：改道人到工作台。
      routeOpen("file", path);
      return Promise.resolve();
    };
  }

  // 注册 zh/en 字典到 DSH locale registry，使 tab 标题按语言取词。
  ctx.effect(() => {
    const offZh = ctx.locale.register(LOCALE_NS, "zh", zh as Record<string, string>);
    const offEn = ctx.locale.register(LOCALE_NS, "en", en as Record<string, string>);
    return () => {
      offZh();
      offEn();
    };
  }, "dsh-file-workbench: dictionaries");

  // ---- 注册「新版右侧面板」tab（类型 + 主体 + 标题）----
  // 工作台仅经由右侧栏进入；右侧栏服务（slots / sidebarRightTabs / sidebarRight）缺失时静默降级。
  try {
    // 把右侧栏导航能力交给桥接层 / Vue 侧（组件拿不到 ctx）。
    //
    // 这里**逐方法惰性转发**而不是缓存 `ctx.sidebarRight` 对象：Cordis 的 ctx 是 proxy，
    // 读未声明在 inject 里的属性会抛错（见 uiWorkspaceSafe），转发式取值天然容错，
    // 且服务晚于 apply 注册时也能取到。
    /**
     * 在当前分栏里**平级**再开一个编辑器 tab（至多池容量个；不新建分栏）。
     *
     * 分配规则，按优先级：
     *  ① 取池内第一个尚未被占用的 kind 并 `openTab` —— **不传 `paneId`**，于是落位到当前活动的
     *     停靠分栏，也就是用户点按钮时所在的那一格；
     *  ② 池已满（8 个都在用）时，**顶替池内编号最小的那一个**：`openTab(kind, { replaceTab })`。
     *     宿主对该选项的语义是「顶替它的分栏与 tab 条位置，并在同一步里把它关掉」，是原子操作，
     *     因此不会出现「先关后开」的中间态。
     *
     * @param params - 新实例的导航参数（`{ fresh: true }` = 空白窗口；`{ projectDir }` = 直接
     *   打开某项目）。池满替换时同样会把这些参数送达新实例。
     * @returns 是否成功发起（宿主右侧栏服务不可用或全部 `openTab` 抛错时为 false）。
     */
    function openNextEditorTab(params?: Record<string, unknown>): boolean {
      for (let n = 1; n <= VS_KIND_POOL; n++) {
        const kind = vsKindAt(n);
        if (vsKindInUse(kind)) continue;
        try {
          ctx.sidebarRight?.openTab(kind, { params });
          return true;
        } catch (e) {
          console.warn(`[dsh-file-workbench] 新建编辑器窗口失败（${kind}）：`, e);
          return false;
        }
      }
      // 池满：顶替编号最小的那一个（对应用户说的「替换掉第一个」）。
      for (let n = 1; n <= VS_KIND_POOL; n++) {
        const kind = vsKindAt(n);
        const tabId = vsKindTabId(kind);
        if (!tabId) continue;
        try {
          ctx.sidebarRight?.openTab(kind, { replaceTab: tabId, params });
          return true;
        } catch (e) {
          console.warn(`[dsh-file-workbench] 替换编辑器窗口失败（${kind}）：`, e);
          return false;
        }
      }
      return false;
    }

    setSidebarRight({
      openTab: (kind, options) => ctx.sidebarRight?.openTab(kind, options as Record<string, unknown> | undefined),
      split: (paneId) => ctx.sidebarRight?.split(paneId),
      float: (tabId: string) => ctx.sidebarRight?.float(tabId),
      dock: (paneId) => ctx.sidebarRight?.dock(paneId),
      close: (tabId) => ctx.sidebarRight?.close(tabId),
      isExpanded: () => ctx.sidebarRight?.isExpanded() ?? false,
      newEditorTab: (params) => openNextEditorTab(params),
      editorTabCount: () => vsOpenKindCount(),
      editorTabLimit: () => VS_KIND_POOL,
    });

    // ① 类型 + guide 入口（在右侧栏 guide 区提供可点击的开卡项）。
    //    title 由注册表在打开 tab 时捕获，作为 chip 文案（随 DSH 语言取词）。
    //    guide 只挂工作台一个入口（id 与 ⑥ 的卡片注册 key 对应）；编辑器入口合并进
    //    卡片的下拉菜单，不再单独出胶囊。
    ctx.effect(
      () => {
        const off = ctx.sidebarRightTabs?.register({
          id: ID,
          kind: KIND,
          title: () => tr("tabFileWorkbench"),
          guide: [
            {
              id: "workbench",
              order: 100,
              title: () => tr("tabFileWorkbench"),
              description: () => tr("tabFileWorkbenchDesc"),
              icon: WorkbenchGlyph,
            },
          ],
        });
        return off;
      },
      "dsh-file-workbench: sidebar tab type",
    );

    // ② 主体（sidebar.right.pane.tab，key = 包名）：把 Vue 工作台主体挂进插槽容器。
    ctx.effect(
      () => {
        const slots = ctx.slots;
        if (!slots) return;
        const off = slots.inject("sidebar.right.pane.tab", () =>
          slots.register(
            { name: "sidebar.right.pane.tab", key: ID },
            RightPaneBridge as (props: unknown) => ReactNode,
          ),
        );
        return off;
      },
      "dsh-file-workbench: sidebar tab body",
    );

    // ③ 编辑器 tab **类型池**（kind = vscode / vscode-2 / … / vscode-8）。
    //    宿主对页 tab 的唯一性是「每分栏每 kind 至多一个」，所以「平级多开编辑器」必须让每个
    //    tab 各占一个 kind。编辑器不再单独挂 guide 胶囊 —— 入口合并进工作台卡片的下拉。
    ctx.effect(() => {
      const offs: Array<() => void> = [];
      for (let n = 1; n <= VS_KIND_POOL; n++) {
        try {
          const off = ctx.sidebarRightTabs?.register({
            id: vsIdAt(n),
            kind: vsKindAt(n),
            title: () => (n === 1 ? tr("tabVSCode") : `${tr("tabVSCode")} ${n}`),
          });
          if (off) offs.push(off);
        } catch (e) {
          console.warn(`[dsh-file-workbench] 编辑器类型注册失败（${vsKindAt(n)}）：`, e);
        }
      }
      return () => {
        for (const off of offs) off();
      };
    }, "dsh-file-workbench: vscode tab types");

    // ④ 编辑器 tab 正文（sidebar.right.pane.tab，key = 各自的注册 id）：把编辑器主体挂进插槽容器。
    ctx.effect(() => {
      const slots = ctx.slots;
      if (!slots) return;
      return slots.inject("sidebar.right.pane.tab", () => {
        const offs: Array<() => void> = [];
        for (let n = 1; n <= VS_KIND_POOL; n++) {
          try {
            const off = slots.register(
              { name: "sidebar.right.pane.tab", key: vsIdAt(n) },
              VSCodePaneBridge as (props: unknown) => ReactNode,
            );
            if (off) offs.push(off);
          } catch (e) {
            console.warn(`[dsh-file-workbench] 编辑器正文注册失败（${vsKindAt(n)}）：`, e);
          }
        }
        return () => {
          for (const off of offs) off();
        };
      });
    }, "dsh-file-workbench: vscode tab bodies");

    // ⑤ tab 下拉菜单追加项（sidebar.right.tab.menu.item，list 插槽）：给工作台 / 编辑器
    //    tab 的「…」动作菜单尾部追加本插件的操作项（打开工作区 / 新建编辑器窗口）。
    //    DSH 0.1.6 起宿主把该插槽的全部注册项按顺序渲染进 dockkit 的 tab 菜单；
    //    旧版宿主没有该插槽时 inject 抛错，静默降级即可。
    ctx.effect(() => {
      const slots = ctx.slots;
      if (!slots) return;
      const off = slots.inject("sidebar.right.tab.menu.item", () =>
        slots.register(
          // list 插槽按 options.id 排序/去重（key 是 keyed 插槽的约定），必须带 id + order。
          { name: "sidebar.right.tab.menu.item", id: `${ID}.menu`, order: 10 },
          createTabMenuItems({
            tr,
            getSessionDir,
            openEditor: (params) => openNextEditorTab(params),
            floatTab: (tabId) => ctx.sidebarRight?.float(tabId),
          }) as (props: unknown) => ReactNode,
        ),
      );
      // console.info("[dsh-file-workbench] tab menu items registered (sidebar.right.tab.menu.item)");
      return off;
    }, "dsh-file-workbench: tab menu items");

    // ⑥ guide 入口卡片（sidebar.right.tab.guide.entry，keyed 插槽）：把「文件工作台」「文件
    //    编辑器」两个入口合并成一张卡片 —— 主体进工作台，右侧箭头下拉出编辑器相关入口。
    //    dispatch key = tab 类型注册的 id（GuideBody 以 providerId 查找）；卡片缺席时宿主
    //    回退标准胶囊，旧版宿主天然兼容。
    ctx.effect(() => {
      const slots = ctx.slots;
      if (!slots) return;
      return slots.inject("sidebar.right.tab.guide.entry", () =>
        slots.register(
          { name: "sidebar.right.tab.guide.entry", key: ID, locale: LOCALE_NS },
          createGuideCard({
            tr,
            getSessionDir,
            openEditor: (params) => openNextEditorTab(params),
            floatTab: (tabId) => ctx.sidebarRight?.float(tabId),
            icons: { workbench: WorkbenchGlyph, vscode: VSCodeGlyph },
          }) as (props: unknown) => ReactNode,
        ),
      );
    }, "dsh-file-workbench: guide card");
  } catch (e) {
    console.warn("[dsh-file-workbench] 右侧面板注册失败（已降级）：", e);
  }

  // ---- 注册「会话输入框引用」座位（conversation.input.left）----
  // 把工作台的「右键 → 添加到会话」接到 composer：ComposerBridge 捕获宿主提供的
  // `useInput`（草稿 / 修订号 / 已存在 chip）与上方 provide 下发的
  // `wbInsertSessionReference`（官方 chip 写入），并把 appendSessionReference
  // 挂到 window 桥接对象上。座位不渲染任何 UI；slots 缺失时静默降级。
  try {
    const slots = ctx.slots;
    if (slots) {
      slots.inject("conversation.input.left", () =>
        slots.register(
          { name: "conversation.input.left", id: `${ID}.reference`, order: 20 },
          ComposerBridge as (props: unknown) => ReactNode,
        ),
      );
    }
  } catch (e) {
    console.warn("[dsh-file-workbench] composer 引用座位注册失败（已降级）：", e);
  }

  // ---- 注册「官方引用插入」能力：把 chip 写入通道作为 session 标准 prop 下发 ----
  // DSH 的引用是 Lexical 结构化 chip，唯一写入通道是 per-session 的
  // `SessionInput.insertReference`（scoped 事件 `slash/input-insert-reference` 的宿主侧接收者）。
  // 插件侧拿不到 session ctx，但 uiSession.provide 的 resolve(binding) 拿到 Controller 持有的
  // SessionBinding（其 ctx 带 agent tag），即可解析出该会话的输入 facade。
  // 把解析结果作为 prop 下发给插槽组件（ComposerBridge 座位），由它组装 chip 载荷与 span。
  try {
    const uiSession = ctx.uiSession;
    const conversation = ctx.conversation;
    if (uiSession && conversation?.input?.for) {
      ctx.effect(
        () =>
          uiSession.provide({
            props: ["wbInsertSessionReference"],
            resolve: (binding) => ({
              props: {
                wbInsertSessionReference: (req: {
                  mention: string;
                  label: string;
                  appearance: "file" | "folder";
                  span: { start: number; end: number; draftRev: number };
                }): boolean => {
                  try {
                    const shell = conversation.input?.for(binding.ctx);
                    if (!shell?.insertReference) return false;
                    return shell.insertReference(
                      {
                        source: "reference",
                        ref: req.mention,
                        label: req.label,
                        appearance: req.appearance,
                        clipboardText: req.mention,
                      },
                      req.span,
                    );
                  } catch (e) {
                    console.warn("[dsh-file-workbench] insertReference failed:", e);
                    return false;
                  }
                },
              },
            }),
          }),
        "dsh-file-workbench: reference insert provider",
      );
    }
  } catch (e) {
    console.warn("[dsh-file-workbench] 引用插入通道注册失败（已降级）：", e);
  }

  // ---- 注入 Vue 产物（样式 + 模块脚本）：供右侧面板桥接组件（RightPaneBridge）挂载工作台 ----
  if (!document.querySelector(`link[href="${apiBase}/${__VUE_CSS__}"]`)) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `${apiBase}/${__VUE_CSS__}`;
    document.head.appendChild(link);
  }
  if (!document.querySelector(`script[src="${apiBase}/${__VUE_ENTRY__}"]`)) {
    const script = document.createElement("script");
    script.type = "module";
    script.src = `${apiBase}/${__VUE_ENTRY__}`;
    document.head.appendChild(script);
  }
}
