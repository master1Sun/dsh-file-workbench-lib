/**
 * host ↔ client ↔ vue 共享的类型。
 */

/** 规范的 API 响应信封。 */
export interface ApiResponse<T> {
  ok: boolean;
  /** 当 ok === true 时存在。 */
  data?: T;
  /** 当 ok === false 时存在。 */
  error?: string;
}

/** 目录列表中的单条条目（对应 dsh-better-sidebar fs-tree.ts 的 row）。 */
export interface FsEntry {
  name: string;
  /** 绝对路径。 */
  path: string;
  /** 目录优先 + 大小写不敏感排序后的顺序（由服务端保证，客户端直接渲染即可）。 */
  isDir: boolean;
  isSymlink: boolean;
  /** 失效软链接（目标不存在）标红。 */
  broken: boolean;
  /** POSIX 隐藏项（点前缀）置灰。 */
  hidden: boolean;
  /** 字节大小（详情视图；可能缺失）。 */
  size?: number;
  /** 修改时间毫秒戳（详情视图；可能缺失）。 */
  mtime?: number;
  /** 回收站条目：回收站内的稳定 key（还原/彻底删除用），与 path 同值。 */
  recycleFullPath?: string;
  /** 回收站条目：删除前所在的原路径（展示「原位置」用）。 */
  originalPath?: string;
  /** 回收站条目：删除时间（字符串，仅展示）。 */
  dateDeleted?: string;
}

/** 面包屑中的一段。 */
export interface Crumb {
  name: string;
  path: string;
  hidden: boolean;
}

/** 单层目录列表响应。 */
export interface FsListing {
  /** 当前绝对路径。 */
  path: string;
  /** 当前展示根（用户选择的工作区），树从它开始、向上不能越过它。 */
  root: string;
  /** 面包屑路径段（含 root 自身）。 */
  crumbs: Crumb[];
  entries: FsEntry[];
  /** 条目数超过单层上限时截断。 */
  truncated: boolean;
}

/** 搜索命中（路径相对搜索根，'/' 分隔）。 */
export interface SearchHit {
  name: string;
  path: string;
  isDir: boolean;
  broken: boolean;
}

/** “我的电脑”顶层入口项。 */
export interface MyComputerItem {
  /** recycle 表示系统回收站（虚拟入口，path 为空，不参与文件系统浏览；win32/POSIX 均有）。 */
  type:
    | "drive"
    | "home"
    | "desktop"
    | "download"
    | "documents"
    | "pictures"
    | "music"
    | "videos"
    | "gallery"
    | "workspace"
    | "recycle";
  /** 展示名（如 “本地磁盘 (C:)”、“下载”）。 */
  name: string;
  /** 绝对路径（磁盘根如 C:\、用户主目录的子目录等）；回收站入口为空字符串。 */
  path: string;
}

/** 单个驱动器（「此电脑」的「设备和驱动器」视图用）。 */
export interface DriveInfo {
  /** 盘符字母（win32：如 "C"；POSIX：空串）。 */
  letter: string;
  /** 挂载根绝对路径（win32：`C:\`；POSIX：`/`）。 */
  path: string;
  /** 卷标（无卷标或取不到时为空串）。 */
  label: string;
  /** 展示名：有卷标 → `卷标 (C:)`；无卷标 → `本地磁盘 (C:)`。 */
  name: string;
  /** 总容量（字节）；取不到时为 undefined。 */
  total?: number;
  /** 可用容量（字节）；取不到时为 undefined。 */
  free?: number;
  /** 文件系统类型（如 NTFS）；取不到时为空串。 */
  fsType: string;
  /** 是否为可移动介质（U 盘/移动硬盘/光驱等）。 */
  removable: boolean;
}

/** 终端流式事件（SSE 帧）：cwd 同步工作目录，output 累积渲染，exit 终态收尾。 */
export type TermStreamEvent =
  | { type: "cwd"; cwd: string }
  | { type: "output"; text: string }
  | { type: "exit"; code: number; error?: string };

/** 系统回收站中的单个条目。 */
export interface RecycleEntry {
  /** 原始文件名。 */
  name: string;
  /**
   * 回收站内的条目路径，作为还原/彻底删除的稳定 key：
   * win32 为 $Recycle.Bin\...\$R...（还原用 COM Verbs）；
   * POSIX 为 <Trash>/files/<filespec>（可同时定位 info/<filespec>.trashinfo 元数据）。
   */
  fullPath: string;
  /** 是否为目录。 */
  isDir: boolean;
  /** 字节大小（目录记为 0；未知时为 0）。 */
  size: number;
  /** 删除时间（字符串，仅展示：win32 取系统属性；POSIX 取 .trashinfo 的 DeletionDate）。 */
  dateDeleted: string;
  /** 删除前所在的原路径（用于恢复/展示“原位置”）。 */
  originalPath: string;
}

/** 任意目录（非工作区内）浏览列表结果。 */
export interface BrowseListing {
  /** 当前绝对路径。 */
  path: string;
  /** 当前目录名（磁盘根显示完整盘符）。 */
  name: string;
  /** 父路径；磁盘根等无父时为 undefined（表示回到“我的电脑”）。 */
  parent?: string;
  entries: FsEntry[];
  truncated: boolean;
  /** 目录可访问但不可遍历（权限/重解析点等）时的提示文案；此时 entries 为空。 */
  inaccessible?: string;
}

/** 跨文件批量替换的结果（后端 /replace 返回）。 */
export interface ReplaceOutcome {
  /** 实际被改写的文件相对路径（sep 归一为 "/"，排序去重）。 */
  changed: string[];
  files: number;
  replacements: number;
  truncated: boolean;
}

/** 属性（stat 详情）对话框数据。 */
export interface FileDetail {
  name: string;
  path: string;
  isDir: boolean;
  size: number;
  mtime: number;
  ext: string;
}

/** 一条待显示 git 状态（归一化）。 */
export type GitFileStatus = "" | "untracked" | "added" | "modified" | "deleted";

/** 某目录下各「紧邻子项」聚合的 git 状态（状态徽标数据）。 */
export interface GitDirStatus {
  /** 该目录是否位于某个 git 仓库内。 */
  inRepo: boolean;
  /** 当前分支名（非仓库或分离 HEAD 时可能为空）。 */
  branch?: string;
  /** 键 = 目录下紧邻子项名称，值 = 该子项聚合的 git 状态。 */
  entries: Record<string, GitFileStatus>;
}

/** git 操作（add/commit/diff/discard）的通用结果。 */
export interface GitAction {
  ok: boolean;
  /** 所属仓库根目录。 */
  repo?: string;
  /** 操作输出（commit 短哈希 / diff 文本 / 提示）。 */
  output?: string;
}

/** Git 面板里一个文件的未暂存/暂存/未跟踪分组行。 */
export interface GitPanelFile {
  /** 相对仓库根的路径（POSIX）。 */
  path: string;
  /** 归一化状态（added/modified/deleted/untracked）。 */
  status: GitFileStatus;
}

/** Git 面板仓库级快照。 */
export interface GitPanel {
  inRepo: boolean;
  repo: string;
  branch: string;
  /** 未暂存（工作区有改动）。 */
  unstaged: GitPanelFile[];
  /** 已暂存。 */
  staged: GitPanelFile[];
  /** 未跟踪。 */
  untracked: GitPanelFile[];
}

/** 一条提交记录（Git 历史）。 */
export interface GitLogItem {
  hash: string;
  author: string;
  date: string;
  subject: string;
}

/** 命令台单次执行结果。 */
export interface GitRunResult {
  code: number;
  stdout: string;
  stderr: string;
}

/** 会话实时流式事件（后端 SSE 帧）：推送当前会话触碰文件与运行态。
 *  snapshot/files：初始快照或事件驱动的文件集；status：运行态翻转。 */
export type SessionStreamEvent =
  | { type: "snapshot" | "files"; sessionId: string; cwd?: string; files: string[]; running: boolean }
  | { type: "status"; sessionId: string; cwd?: string; running: boolean };

/** 文件列表视图模式（“查看”子菜单）。 */
export type ViewMode = "details" | "list" | "grid" | "content" | "tiles";

/** 内部剪贴板条目。 */
export interface ClipboardEntry {
  op: "copy" | "cut" | "";
  paths: string[];
}

/** 右键菜单项（支持分隔线 / 禁用 / 选中 / 一级子菜单）。 */
export interface MenuItem {
  label?: string;
  icon?: string;
  disabled?: boolean;
  checked?: boolean;
  separator?: boolean;
  children?: MenuItem[];
  onClick?: () => void;
}

/** DSH locale 服务的最小形状（由 client 桥接从 ctx.locale 透传）。 */
export interface DshLocaleService {
  getSnapshot(): { active: string };
  subscribe(cb: () => void): () => void;
}

/** Vue 前端运行时注入点（由 client 桥接组件在 window 上预置）。 */
declare global {
  interface Window {
    __DSH_FILE_WORKBENCH__?: {
      apiBase?: string;
      pickDirectory?: () => Promise<string | null>;
      /** 当前会话（对话）的工作目录，供工作台默认打开；不可得时返回 null。 */
      getSessionDir?: () => string | null;
      /** 读取当前选中的 DSH 会话 id（供子 agent 委派作为父级）；不可用时返回 null。 */
      getSessionId?: () => string | null;
      locale?: DshLocaleService;
      /**
       * 通道一桥接（由 Vue 模块挂载后注册）：把拦截自 host `ctx.workspaces.openPath`
       * 的会话侧文件打开改道到工作台预览。由 index.tsx 调用。
       */
      openExternalFile?: (path: string) => void;
      /** 同上：目录揭示手势（"Show in folder"）改道人到工作台资源管理器。 */
      openExternalFolder?: (path: string) => void;
      /**
       * 文件查看改道到 DSH 右侧原生查看器（由 client 注册）：传入文件绝对路径，
       * 内部构造 `dsh-resource://file/session/<sid>/<path>` 地址调用 ctx.sidebarRight.openResource。
       */
      openInSidebar?: (path: string) => void;
      /** 会话切换时由 host 侧调用：进入当前会话工作区，仍是当前会话时仅刷新工作区文件夹。 */
      syncSessionWorkspace?: () => void;
      /** 桥接就绪前的待处理队列（Vue 挂载后消费）。 */
      pendingOpens?: { kind: "file" | "folder"; path: string }[];
      /** 订阅当前选中的会话 id 变化（会话切换时回调最新 id，供 SSE 重连）。返回注销函数。 */
      subscribeCurrentSessionId?: (cb: (id: string | null) => void) => () => void;
    };
    /** 右侧面板模式挂载：把工作台主体（App.vue）挂进 DSH 右侧面板容器。 */
    __dshFileWorkbenchMountPane__?: (el: HTMLElement, opts?: { apiBase?: string }) => {
      unmount: () => void;
    };
  }
}

/** 后台任务日志时间线上的一个步骤（任务过程中记录的每条中间/结束日志）。 */
export interface TaskLogStep {
  time: number;
  status: "running" | "done" | "error";
  msg: string;
  /** 该步骤关联的文件/目录目标路径（可选）。 */
  file?: string;
  /** 该步骤补充细节（可选，如源/目标计数、进度等）。 */
  detail?: string;
  /** 该步骤操作文件的类型名称（如 .png / 文件），用于任务概要把头部汇总。 */
  fileType?: string;
  /** 该步骤操作文件的大小（字节，仅文件）。 */
  fileSize?: number;
}

/**
 * 后台任务的持久化记录（taskLogs.json 活跃历史 / taskArchives 归档）：
 * 任务结束时写入，供任务面板「历史」「归档」跨会话查看。
 */
export interface TaskLogRecord {
  /** 操作描述（翻译后文案）。 */
  label: string;
  /** 目标详情（路径/目录或计数）。 */
  detail?: string;
  /** 结束状态（仅归档已结束任务）。 */
  status: "done" | "error";
  /** 结果补充消息。 */
  msg?: string;
  startedAt: number;
  doneAt?: number;
  /**
   * 完整日志时间线（开始 + 所有中间步骤 + 结束），用于归档详情追溯。
   * 旧版本记录可能缺失，展示时由起止时间回退构造。
   */
  logs?: TaskLogStep[];
}

/**
 * 后台任务归档：按日期（YYYY-MM-DD）分组的已结束任务记录。
 * 每天的活跃历史在跨天 / 被清空时归档进对应日份，供「查看归档」入口翻看。
 */
export type TaskArchiveMap = Record<string, TaskLogRecord[]>;

export {};