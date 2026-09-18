/**
 * 贡献点「早注册代理」（生产端；认领端见 src/vue/stores/activityBar.ts）。
 *
 * 背景：本插件的 window API（__dshFileWorkbenchVSCode__ / __dshFileWorkbenchWorkbench__）由
 * **异步注入的 Vue bundle** 建立（apply() 里 <script type="module">，见 index.tsx）。第三方插件
 * 若在那之前调用 `window.__dshFileWorkbenchVSCode__.activityBar.register(...)`，会拿到 undefined
 * → 注入失败、且不重试。
 *
 * 对策：apply() 最开头**同步**在本模块装一个占位代理到这两个全局名上，早于任何异步脚本执行。
 * 代理维护一份**影子注册表**并缓冲所有 register/unregister；未就绪时 execute/has/list 直接对着
 * 影子表作答（这样第三方「注册→立即执行自己命令」也自洽），真实实现就绪后由 Vue 侧 rebind + flush，
 * 按入队顺序把注册重放进真实 registry。
 *
 * ⚠️ 刻意**不 import 任何 Vue store 模块**：client 与 Vue 是两个独立 bundle，这里必须自包含。
 */

type AnyFn = (...args: unknown[]) => unknown;

interface ShadowView {
  id: string;
  title?: unknown;
  icon?: string;
  order?: number;
  mount: AnyFn;
  when?: (ctx: unknown) => boolean;
}
interface ShadowCmd {
  id: string;
  handler: AnyFn;
}
interface ShadowStatus {
  id: string;
  text: string;
  commandId: string;
  tooltip?: string;
  order?: number;
  when?: (ctx: unknown) => boolean;
}

/** 一条待重放的注册动作（保留入队顺序，flush 时按时序施加到真实 registry）。 */
type PendingOp =
  | { ns: "vs"; kind: "view"; item: ShadowView }
  | { ns: "vs"; kind: "unview"; id: string }
  | { ns: "vs"; kind: "cmd"; item: ShadowCmd }
  | { ns: "vs"; kind: "uncmd"; id: string }
  | { ns: "vs"; kind: "status"; item: ShadowStatus }
  | { ns: "vs"; kind: "unstatus"; id: string }
  | { ns: "vs"; kind: "menu"; item: ShadowStatus }
  | { ns: "vs"; kind: "unmenu"; id: string }
  | { ns: "wb"; kind: "view"; item: ShadowView }
  | { ns: "wb"; kind: "unview"; id: string }
  | { ns: "wb"; kind: "status"; item: ShadowStatus }
  | { ns: "wb"; kind: "unstatus"; id: string };

/** 真实实现句柄（Vue 侧提供）；rebind 前为 null。 */
interface RealHandlers {
  vs?: {
    registerView: (v: ShadowView) => void;
    unregisterView: (id: string) => void;
    registerCommand: (id: string, h: AnyFn) => void;
    unregisterCommand: (id: string) => boolean;
    executeCommand: (id: string, ...args: unknown[]) => unknown;
    hasCommand: (id: string) => boolean;
    listCommands: () => string[];
    registerStatus: (i: ShadowStatus) => void;
    unregisterStatus: (id: string) => void;
    listStatus: () => unknown[];
    registerMenu: (i: ShadowStatus) => void;
    unregisterMenu: (id: string) => void;
    listMenu: () => unknown[];
  };
  wb?: {
    registerView: (v: ShadowView) => void;
    unregisterView: (id: string) => void;
    registerStatus: (i: ShadowStatus) => void;
    unregisterStatus: (id: string) => void;
    listStatus: () => unknown[];
    backgroundTasks: unknown;
  };
}

const API_VERSION = 4; // 与 activityBar.ts 的 ACTIVITY_API_VERSION 对齐（仅用于占位探测，非权威）。

let bound = false;
const pending: PendingOp[] = [];
const real: RealHandlers = {};

// 影子注册表：未就绪时对外作答用；同时供 flush 去重（幂等覆盖语义）。
const shadowViews = new Map<string, ShadowView>();
const shadowCmds = new Map<string, AnyFn>();
const shadowStatus = new Map<string, ShadowStatus>();
const shadowMenu = new Map<string, ShadowStatus>();
const shadowWbViews = new Map<string, ShadowView>();
const shadowWbStatus = new Map<string, ShadowStatus>();

function enqueue(op: PendingOp): void {
  if (!bound) pending.push(op);
}

/* ---- 编辑器命名空间代理 ---- */

const proxyVs = {
  apiVersion: API_VERSION,
  activityBar: {
    register(view: ShadowView): void {
      shadowViews.set(view.id, view);
      enqueue({ ns: "vs", kind: "view", item: view });
      if (bound) real.vs!.registerView(view);
    },
    unregister(id: string): void {
      shadowViews.delete(id);
      enqueue({ ns: "vs", kind: "unview", id });
      if (bound) real.vs!.unregisterView(id);
    },
  },
  commands: {
    register(id: string, handler: AnyFn): void {
      shadowCmds.set(id, handler);
      enqueue({ ns: "vs", kind: "cmd", item: { id, handler } });
      if (bound) real.vs!.registerCommand(id, handler);
    },
    unregister(id: string): boolean {
      const had = shadowCmds.delete(id);
      enqueue({ ns: "vs", kind: "uncmd", id });
      return bound ? real.vs!.unregisterCommand(id) : had;
    },
    execute<T = unknown>(id: string, ...args: unknown[]): T | undefined {
      if (bound) return real.vs!.executeCommand(id, ...args) as T | undefined;
      const h = shadowCmds.get(id);
      return h ? (h(...args) as T) : undefined;
    },
    has(id: string): boolean {
      return bound ? real.vs!.hasCommand(id) : shadowCmds.has(id);
    },
    list(): string[] {
      return bound ? real.vs!.listCommands() : [...shadowCmds.keys()];
    },
  },
  statusbar: {
    register(item: ShadowStatus): void {
      shadowStatus.set(item.id, item);
      enqueue({ ns: "vs", kind: "status", item });
      if (bound) real.vs!.registerStatus(item);
    },
    unregister(id: string): void {
      shadowStatus.delete(id);
      enqueue({ ns: "vs", kind: "unstatus", id });
      if (bound) real.vs!.unregisterStatus(id);
    },
    list(): unknown[] {
      return bound ? real.vs!.listStatus() : [...shadowStatus.values()];
    },
    registerMenu(item: ShadowStatus): void {
      shadowMenu.set(item.id, item);
      enqueue({ ns: "vs", kind: "menu", item });
      if (bound) real.vs!.registerMenu(item);
    },
    unregisterMenu(id: string): void {
      shadowMenu.delete(id);
      enqueue({ ns: "vs", kind: "unmenu", id });
      if (bound) real.vs!.unregisterMenu(id);
    },
    listMenu(): unknown[] {
      return bound ? real.vs!.listMenu() : [...shadowMenu.values()];
    },
  },
};

/* ---- 工作台命名空间代理 ---- */

const proxyWb = {
  apiVersion: API_VERSION,
  activityBar: {
    register(view: ShadowView): void {
      shadowWbViews.set(view.id, view);
      enqueue({ ns: "wb", kind: "view", item: view });
      if (bound) real.wb!.registerView(view);
    },
    unregister(id: string): void {
      shadowWbViews.delete(id);
      enqueue({ ns: "wb", kind: "unview", id });
      if (bound) real.wb!.unregisterView(id);
    },
  },
  statusbar: {
    register(item: ShadowStatus): void {
      shadowWbStatus.set(item.id, item);
      enqueue({ ns: "wb", kind: "status", item });
      if (bound) real.wb!.registerStatus(item);
    },
    unregister(id: string): void {
      shadowWbStatus.delete(id);
      enqueue({ ns: "wb", kind: "unstatus", id });
      if (bound) real.wb!.unregisterStatus(id);
    },
    list(): unknown[] {
      return bound ? real.wb!.listStatus() : [...shadowWbStatus.values()];
    },
  },
  // backgroundTasks 依赖 Vue 内部实现，无法在 client 侧影子化；未就绪时给安全 no-op 门面，
  // 就绪后（flush 之后）由 rebindWorkbench 换成真实实现——但 window 上的对象引用不变，
  // 故对 backgroundTasks 的取值需经代理 getter 转发（见 installContributionProxy）。
  backgroundTasks: {
    start(): never {
      throw new Error("[dsh-file-workbench] backgroundTasks 尚未就绪：请在插件激活后再调用 start()");
    },
    clearFinished(): Promise<void> {
      return Promise.resolve();
    },
    clearAll(): Promise<void> {
      return Promise.resolve();
    },
  },
};

// 把 __proxy 挂到编辑器代理对象上，供 Vue 认领端发现并 rebind/flush。
(proxyVs as unknown as { __proxy: unknown }).__proxy = {
  rebindVSCode(h: NonNullable<RealHandlers["vs"]>): void {
    real.vs = h;
  },
  rebindWorkbench(h: NonNullable<RealHandlers["wb"]>): void {
    real.wb = h;
    // backgroundTasks 换成真实实现：代理对象的该属性就地替换（引用不变，第三方持有的即此对象）。
    (proxyWb as unknown as { backgroundTasks: unknown }).backgroundTasks = h.backgroundTasks;
  },
  flush(): void {
    if (bound) return;
    bound = true;
    const ops = pending.splice(0, pending.length);
    for (const op of ops) applyOp(op);
  },
};

function applyOp(op: PendingOp): void {
  if (op.ns === "vs") {
    const vs = real.vs!;
    switch (op.kind) {
      case "view":
        vs.registerView(op.item);
        break;
      case "unview":
        vs.unregisterView(op.id);
        break;
      case "cmd":
        vs.registerCommand(op.item.id, op.item.handler);
        break;
      case "uncmd":
        vs.unregisterCommand(op.id);
        break;
      case "status":
        vs.registerStatus(op.item);
        break;
      case "unstatus":
        vs.unregisterStatus(op.id);
        break;
      case "menu":
        vs.registerMenu(op.item);
        break;
      case "unmenu":
        vs.unregisterMenu(op.id);
        break;
    }
  } else {
    const wb = real.wb!;
    switch (op.kind) {
      case "view":
        wb.registerView(op.item);
        break;
      case "unview":
        wb.unregisterView(op.id);
        break;
      case "status":
        wb.registerStatus(op.item);
        break;
      case "unstatus":
        wb.unregisterStatus(op.id);
        break;
    }
  }
}

/**
 * 在 window 上预置早注册代理（apply() 最开头同步调用一次）。
 * 已存在真实 API（重复 apply / 竞态下 Vue 先就绪）时跳过，避免把真实现降级成代理。
 */
export function installContributionProxy(): void {
  if (typeof window === "undefined") return;
  const w = window as unknown as Record<string, unknown>;
  const existingVs = w.__dshFileWorkbenchVSCode__ as { __proxy?: unknown; activityBar?: unknown } | undefined;
  // 已是真实 API（无 __proxy 标记却有 activityBar）→ 不覆盖。
  if (existingVs && !existingVs.__proxy && existingVs.activityBar) return;
  w.__dshFileWorkbenchVSCode__ = proxyVs;
  w.__dshFileWorkbenchWorkbench__ = proxyWb;
}
