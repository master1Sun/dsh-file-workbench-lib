/**
 * dsh-file-workbench — 浏览器入口（DSH 客户端模块格式，esbuild → lib/client.js）。
 *
 * 工作台仅经由 DSH 新版右侧栏 tab 进入：apply 注入 Vue 产物（样式 + 模块脚本），
 * 并注册右侧栏 tab（类型 + 主体 + 标题）。
 */
import { zh, en } from "../shared/locales.js";
import type { ReactNode } from "react";
import { RightPaneBridge } from "./RightPaneBridge.js";
import { setOpenTab } from "./api.js";

/** 前端资源基址（host REST + 静态资源前缀）。 */
export const PREFIX = "/api/dsh-file-workbench";

/** 此插件的 apply 依赖的客户端服务。 */
export const inject = ["locale", "sessions", "workspaces", "slots", "sidebarRightTabs", "sidebarRight"];

/** 右侧面板 tab 的 kind（openTab(kind) 用到的名字）。 */
const KIND = "workbench";

/** 本实现在 tab 系统中的身份，也是主体/标题注册时用的 key（约定用包名）。 */
const ID = "@sunjuntao/dsh-file-workbench";

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
    openTab(kind: string): void;
    /** 打开一个资源地址（`dsh-resource://…`），由注册的查看器认领。 */
    openResource(address: string, options?: Record<string, unknown>): void;
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
}

export function apply(ctx: ClientCtx): void {
  const apiBase = `${window.location.origin}${PREFIX}`;

  // apply 幂等：DSH 重复调用 apply 时跳过，避免重复包 openPath / 重复注入 Vue 产物 / 重复注册插槽。
  if (clientApplied) return;
  clientApplied = true;

  /** 按 DSH 活动语言从本插件字典取词（供 tab 标题 / guide 文案使用）。 */
  const tr = (key: keyof typeof zh): string => {
    const active = ctx.locale?.getLocale?.()?.active ?? "en";
    const dict: Record<string, string> = active.toLowerCase().startsWith("zh") ? zh : en;
    return dict[key] ?? (en as Record<string, string>)[key] ?? String(key);
  };

  // 尽力获取宿主的目录选择能力（workspaces 服务可能未注入，缺省时 Vue 走路径输入框）。
  let pickDirectory: (() => Promise<string | null>) | undefined;
  try {
    pickDirectory = ctx.workspaces?.pickDirectory;
  } catch {
    /* workspaces 服务不可用，忽略 */
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
  (window as unknown as { __DSH_FILE_WORKBENCH__?: WorkbenchBridge }).__DSH_FILE_WORKBENCH__ = {
    apiBase,
    pickDirectory,
    getSessionDir,
    getSessionId,
    openInSidebar,
    subscribeCurrentSessionId,
    locale: ctx.locale,
  };

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

  const ws = ctx.workspaces;
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
    // 把「打开 tab」的能力交给桥接层（组件拿不到 ctx）。
    setOpenTab((kind) => ctx.sidebarRight?.openTab(kind));

    // ① 类型 + guide 入口（在右侧栏 guide 区提供可点击的开卡项）。
    //    title 由注册表在打开 tab 时捕获，作为 chip 文案（随 DSH 语言取词）。
    ctx.effect(
      () =>
        ctx.sidebarRightTabs?.register({
          id: ID,
          kind: KIND,
          title: () => tr("tabFileWorkbench"),
          guide: [
            {
              order: 100,
              title: () => tr("tabFileWorkbench"),
              description: () => tr("tabFileWorkbenchDesc"),
              icon: WorkbenchGlyph,
            },
          ],
        }),
      "dsh-file-workbench: sidebar tab type",
    );

    // ② 主体（sidebar.right.pane.tab，key = 包名）：把 Vue 工作台主体挂进插槽容器。
    ctx.effect(
      () => {
        const slots = ctx.slots;
        if (!slots) return;
        return slots.inject("sidebar.right.pane.tab", () =>
          slots.register(
            { name: "sidebar.right.pane.tab", key: ID },
            RightPaneBridge as (props: unknown) => ReactNode,
          ),
        );
      },
      "dsh-file-workbench: sidebar tab body",
    );
  } catch (e) {
    console.warn("[dsh-file-workbench] 右侧面板注册失败（已降级）：", e);
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
