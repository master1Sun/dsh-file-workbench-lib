/**
 * 官方终端桥（本机终端「底层换官方」）。
 *
 * 插件终端 UI（Vue + xterm）原先对本机 shell 也走自建后端（/exec-open + 复用流）。
 * 本文件把 **本机终端** 的进程层切到宿主官方终端控制器 `ctx.webTerminals`
 * （@deepseek-ai/dsh-api-terminal-controller）：PTY 创建、断线重连、输入串行化、
 * 后台清理全部由官方实现，插件只保留自己的 xterm 外观。SSH 终端不走这里
 * （官方没有远端主机概念），仍由插件后端（ssh2 shell）承担。
 *
 * ## 通道形状
 *
 * React 侧持有 TerminalView 并把它暴露为 `window.__DSH_FILE_WORKBENCH__.officialTerminal`
 * 上的命令式 API（create/write/resize/detach/close），数据则用 window CustomEvent
 * **推**给 Vue（Vue 拿不到 Cordis ctx，反向亦然——与 listDirectory 的惰性取值器同一思路）：
 *
 *  - `dshfw-ot-data`   detail `{ tag, kind: "snapshot" | "output", text }`
 *    snapshot = 官方整机快照（重连/首连的第一帧，含登录横幅 + 提示符），Vue 需先清屏再写入；
 *    output   = 增量输出。
 *  - `dshfw-ot-status` detail `{ tag, phase, cwd?, exited?, error? }`
 *    phase 为官方 TerminalViewState.phase；`exited` 表示宿主进程已退出（exit/被杀）。
 *
 * `tag` 由 Vue 侧给定（= TermTab.id），桥内映射成官方 view key `dshfw-<tag>`——
 * 官方按 (sessionId, key) 复用视图，bundle 重注入后用同 key create 会**认领**旧进程
 * （TerminalView.adopt），终端不丢。
 *
 * ## 必须应答 render 帧（勿删 acknowledge）
 *
 * 官方 TerminalView 是「推一帧 → 等 DOM 侧应答 → 再推下一帧」的背压模型
 * （model.ts 的 pendingRender / acknowledge）：转发完一帧必须调 `view.acknowledge(revision)`，
 * 否则首帧之后输出永久停摆。中间帧**不会**在两次应答之间被覆盖丢失——官方在应答前
 * 根本不发下一帧。
 *
 * ## 会话约束
 *
 * 官方终端挂在**当前选中会话**下（SessionId 必填），工作目录固定为该会话工作区
 * （TerminalCreateRequest 没有 cwd 字段）。因此无选中会话时 `available()` 为假，
 * Vue 侧自动回退插件自建后端。
 */

/* ---- 宿主服务的最小形状（只声明本文件用到的字段；属性访问由调用方 try/catch 兜底） ---- */

/** 官方 TerminalViewState 的最小形状。 */
interface TerminalViewStateLike {
  phase: string;
  environment?: { cwd?: string } | undefined;
  info?: { state?: string; exitCode?: number | null } | undefined;
  error?: string | undefined;
  render?: { revision: number; frame: { type: "snapshot"; screen: string } | { type: "output"; data: string } } | undefined;
}

/** 官方 TerminalView 的最小形状。 */
interface TerminalViewLike {
  readonly id: string;
  readonly state: { getSnapshot(): TerminalViewStateLike; subscribe(fn: () => void): () => void };
  mount(): () => void;
  /** 背压应答：转发了 `render.revision` 这一帧之后必须调用，官方才会推下一帧。 */
  acknowledge(revision: number): void;
  write(data: string): void;
  resize(cols: number, rows: number): void;
}

/** 宿主 `ctx.webTerminals`（dsh-api-terminal-controller 的 ClientTerminals）的最小形状。 */
interface WebTerminalsLike {
  view(sessionId: string, key: string, terminalId?: string, shellPath?: string): TerminalViewLike;
  /** 显式终止进程并丢弃视图（与官方关闭 tab 走的是同一入口）。 */
  close(sessionId: string, key: string, terminalId?: string): void;
}

/** 插件 apply 收到的宿主 ctx 的最小形状。 */
export interface OfficialTerminalHostLike {
  sessions?: {
    list?: {
      getSnapshot(): { current?: string };
      subscribe?(cb: () => void): () => void;
    };
  };
}

/** Vue 侧可用的命令式 API（挂在 `window.__DSH_FILE_WORKBENCH__.officialTerminal`）。 */
export interface OfficialTermApi {
  /** 官方终端当前可用（服务存在 + 有选中会话）。不可用时 Vue 回退自建后端。 */
  available(): boolean;
  /**
   * 创建（或认领）tag 对应的官方终端并挂载输出流。重复调用幂等：同 tag 返回既有视图。
   * @returns 终端工作目录（来自官方 environment；尚未就绪时等待至多 10s），服务不可用时 null。
   */
  create(tag: string, opts: { cols: number; rows: number }): Promise<{ cwd?: string } | null>;
  /** 写入用户键入（官方内部已串行化），终端不存在时返回 false。 */
  write(tag: string, data: string): boolean;
  /** 上报伪终端尺寸。 */
  resize(tag: string, cols: number, rows: number): void;
  /** 摘掉输出流但**保留进程**（关浮窗/切面板时用，同官方 unmount 语义）。 */
  detach(tag: string): void;
  /** 终止进程并丢弃视图（关标签时用，同官方关闭 tab 语义）。 */
  close(tag: string): void;
}

/* ---- 事件与记录 ---- */

const DATA_EVENT = "dshfw-ot-data";
const STATUS_EVENT = "dshfw-ot-status";

interface TagRecord {
  sessionId: string;
  view: TerminalViewLike;
  /** mount() 返回的卸载函数（幂等，重复调用无害）。 */
  unmount: () => void;
  unsub: () => void;
  lastRevision: number;
  phase: string;
  cwd: string;
  exited: boolean;
}

function emitData(tag: string, kind: "snapshot" | "output", text: string): void {
  window.dispatchEvent(new CustomEvent(DATA_EVENT, { detail: { tag, kind, text } }));
}

function emitStatus(tag: string, st: { phase: string; cwd?: string; exited?: boolean; error?: string }): void {
  window.dispatchEvent(new CustomEvent(STATUS_EVENT, { detail: { tag, ...st } }));
}

/**
 * 安装官方终端桥：读 ctx 的 webTerminals / sessions（都可能缺失，读法见 try/catch），
 * 把 OfficialTermApi 挂到 target（= WorkbenchBridge）的 officialTerminal 字段上。
 */
export function installOfficialTerminal(ctx: OfficialTerminalHostLike, target: object): void {
  // Cordis 的 ctx 是 proxy：读未声明在 inject 里的属性会**抛异常**而不是 undefined
  // （与 index.tsx 的 uiWorkspaceSafe 同款兜底）。旧版宿主没有 webTerminals 时这里返回
  // undefined，Vue 侧自然回退自建后端，整插件不受影响。
  const webTerminalsSafe = (): WebTerminalsLike | undefined => {
    try {
      const svc = (ctx as unknown as { webTerminals?: WebTerminalsLike }).webTerminals;
      return svc && typeof svc.view === "function" ? svc : undefined;
    } catch {
      return undefined;
    }
  };
  const currentSessionId = (): string | null => {
    try {
      return ctx.sessions?.list?.getSnapshot?.()?.current ?? null;
    } catch {
      return null;
    }
  };

  const records = new Map<string, TagRecord>();
  const viewKey = (tag: string): string => `dshfw-${tag}`;

  const api: OfficialTermApi = {
    available: () => webTerminalsSafe() !== undefined && currentSessionId() !== null,

    create(tag, _opts) {
      const svc = webTerminalsSafe();
      const sessionId = currentSessionId();
      if (!svc || !sessionId) return Promise.resolve(null);
      const existing = records.get(tag);
      if (existing && existing.sessionId === sessionId) {
        existing.unmount(); // 重复 create = 重新挂载（重新认领输出流）
        existing.unmount = existing.view.mount();
        const cwd = existing.cwd;
        return Promise.resolve(cwd ? { cwd } : {});
      }
      const view = svc.view(sessionId, viewKey(tag), undefined, undefined);
      const rec: TagRecord = {
        sessionId,
        view,
        unmount: () => {},
        unsub: () => {},
        lastRevision: 0,
        phase: "",
        cwd: "",
        exited: false,
      };
      // create() 的解析时机：官方 environment 就绪（即进程已建/已认领，cwd 已知）。
      // 用 state 订阅驱动一个一次性 promise，10s 兜底超时（连接极慢时先返回、事件照推）。
      let settleEnv: ((cwd?: string) => void) | undefined;
      const envReady = new Promise<void>((resolve) => {
        settleEnv = () => resolve();
      });
      const timeout = window.setTimeout(() => settleEnv?.(), 10_000);
      const forward = (): void => {
        const s = view.state.getSnapshot();
        if (s.render && s.render.revision > rec.lastRevision) {
          rec.lastRevision = s.render.revision;
          const f = s.render.frame;
          emitData(tag, f.type, f.type === "snapshot" ? f.screen : f.data);
          // ⛔ 背压应答：不应答官方不再推后续帧（见文件头注释）。
          view.acknowledge(s.render.revision);
        }
        const exited = s.info !== undefined && s.info.state !== "running";
        if (s.phase !== rec.phase || (s.environment?.cwd ?? "") !== rec.cwd || exited !== rec.exited) {
          rec.phase = s.phase;
          rec.cwd = s.environment?.cwd ?? "";
          rec.exited = exited;
          emitStatus(tag, { phase: s.phase, cwd: rec.cwd || undefined, exited, error: s.error });
        }
        if (s.environment?.cwd && settleEnv) {
          const fn = settleEnv;
          settleEnv = undefined;
          window.clearTimeout(timeout);
          fn();
        }
      };
      rec.unsub = view.state.subscribe(forward);
      forward(); // 建立基线（避免订阅前已就绪的状态漏推）
      records.set(tag, rec);
      rec.unmount = view.mount();
      return envReady.then(() => (rec.cwd ? { cwd: rec.cwd } : {}));
    },

    write(tag, data) {
      const rec = records.get(tag);
      if (!rec) return false;
      try {
        rec.view.write(data);
        return true;
      } catch {
        return false;
      }
    },

    resize(tag, cols, rows) {
      const rec = records.get(tag);
      if (!rec) return;
      try {
        rec.view.resize(cols, rows);
      } catch {
        /* 终端可能刚退出：下次 fit 再试 */
      }
    },

    detach(tag) {
      const rec = records.get(tag);
      if (!rec) return;
      rec.unmount(); // 只摘输出流，进程保留（同官方 unmount 语义）
    },

    close(tag) {
      const rec = records.get(tag);
      if (!rec) return;
      records.delete(tag);
      rec.unmount();
      rec.unsub();
      try {
        webTerminalsSafe()?.close(rec.sessionId, viewKey(tag), rec.view.id);
      } catch {
        /* 服务可能在插件卸载中途消失 */
      }
    },
  };

  (target as { officialTerminal?: OfficialTermApi }).officialTerminal = api;
}