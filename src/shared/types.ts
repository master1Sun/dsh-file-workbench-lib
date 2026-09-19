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
  /**
   * 机器可判别的错误码（当 ok === false 时可能存在）。
   * 供前端分支处理（如 `mtime-conflict` 需弹确认后带 force 重试）；
   * 缺省时前端只按 `error` 文案提示。见 useApi 的 ApiError.code。
   */
  code?: string;
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
  /**
   * 磁盘真实卷标（仅 type=drive 且读到时给出，如 `系统` / `Data`）。
   * 有值时前端展示 `卷标 (X:)`，否则回退本地化的「本地磁盘 (X:)」。
   */
  label?: string;
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

/**
 * 多路复用终端流的 SSE 帧：在 `TermStreamEvent` 之上多带一个 `session`，
 * 用于在同一条连接里区分是哪个终端会话的输出。
 *
 * 之所以要多路复用：宿主是 `node:http`（HTTP/1.1），浏览器对同一源只允许约 6 条并发连接，
 * 若每个终端各占一条 SSE 长连接，开几个终端就会把配额耗尽——后续 `/exec-stream` 与
 * `/exec-input` 被永久排队，表现为「后开的终端一直空白、且无法输入」。
 */
export type MuxTermStreamEvent = TermStreamEvent & { session: string };

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

/* ---------- 文本编辑：编码与行尾（host fs/text-codec 与前端共用同一套取值） ---------- */

/**
 * 可直接以文本编辑的编码。`binary` 表示探测为非文本文件（前端只读提示，不给编辑器）。
 * 中文环境回退用 `gb18030`（GBK/GB2312 的超集），不单列 `gbk`。
 */
export type TextEncoding = "utf8" | "utf16le" | "utf16be" | "gb18030" | "big5" | "latin1" | "binary";

/** 行尾样式。编辑器内部一律以 `\n` 表示换行，此值仅作元数据随文件往返。 */
export type EolStyle = "lf" | "crlf" | "cr";

/** `/read` 的返回：编辑器打开文件所需的全部元数据（content 的行尾已归一为 `\n`）。 */
export interface FileTextRead {
  content: string;
  size: number;
  /** 落盘时间毫秒戳：保存时回传作 expectedMtime，用于外部改动检测。 */
  mtime: number;
  encoding: TextEncoding;
  hasBom: boolean;
  eol: EolStyle;
  /** 探测为二进制时为 true，此时 content 为空串。 */
  binary: boolean;
}

/** `/save` 的返回。 */
export interface FileTextSaved {
  path: string;
  /** 落盘后的 mtime，供前端刷新外部改动基线。 */
  mtime: number;
}

/** 打开文件时携带的编码/行尾选项（用户在状态栏手动切换时使用）。 */
export interface TextReadOptions {
  encoding?: TextEncoding;
  hasBom?: boolean;
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

/** 右键菜单项（支持分隔线 / 禁用 / 选中 / 一级子菜单 / 快捷键提示）。 */
export interface MenuItem {
  label?: string;
  icon?: string;
  /** 整行悬停提示（tooltip），如插件注册项的 tooltip。 */
  title?: string;
  disabled?: boolean;
  checked?: boolean;
  separator?: boolean;
  /** 右侧快捷键提示（仅展示，如 "Ctrl+S"；不做按键绑定）。 */
  hint?: string;
  /** 运行中指示器：图标列渲染旋转 spinner（覆盖 icon），表示该行对应的任务正在执行。 */
  running?: boolean;
  children?: MenuItem[];
  onClick?: () => void;
  /** 每行右侧的操作按钮（如最近项目的单条清除）。点击不触发整行 onClick。 */
  trailing?: {
    icon: string;
    title?: string;
    disabled?: boolean;
    onClick: () => void;
  };
}

/** DSH locale 服务的最小形状（由 client 桥接从 ctx.locale 透传）。 */
export interface DshLocaleService {
  getSnapshot(): { active: string };
  subscribe(cb: () => void): () => void;
}

/**
 * 宿主官方目录浏览（`ctx.uiWorkspace.listDirectory`）返回的单行/面包屑项。
 * 与 `@deepseek-ai/dsh-host-directory-picker/types` 的 DirectoryEntry 对齐。
 */
export interface DirectoryEntry {
  /** 行内展示的目录名（根面包屑为完整路径）。 */
  name: string;
  /** 绝对路径（客户端不应自行拼接路径段）。 */
  path: string;
  /** 宿主平台的隐藏约定（POSIX 点前缀）；是否展示由客户端决定。 */
  hidden: boolean;
}

/**
 * 宿主官方目录浏览返回的一层目录 + 祖先链。
 * 与 `@deepseek-ai/dsh-host-directory-picker/types` 的 DirectoryListing 对齐。
 */
export interface DirectoryListing {
  /** 被列出目录的绝对路径。 */
  path: string;
  /** 宿主账户的 home 目录（面包屑 "Home" 根）。 */
  home: string;
  /** 从文件系统根到当前目录（含）的祖先链，每项都是可跳转目标。 */
  crumbs: DirectoryEntry[];
  /** 直接子目录（按名排序；含指向目录的符号链接）。 */
  entries: DirectoryEntry[];
  /** 后端在完整结果上限处截断时为 true。 */
  truncated: boolean;
}

/** Vue 前端运行时注入点（由 client 桥接组件在 window 上预置）。 */
declare global {
  interface Window {
    __DSH_FILE_WORKBENCH__?: {
      apiBase?: string;
      pickDirectory?: () => Promise<string | null>;
      /**
       * 宿主官方目录浏览能力（`ctx.uiWorkspace.listDirectory`）：列出某目录一层的**子目录**与面包屑。
       * 供「选择文件夹」弹窗使用（优先于插件自建 /list 路由）；能力不可用时为 undefined。
       */
      listDirectory?: (path?: string) => Promise<DirectoryListing>;
      /**
       * 宿主官方目录创建能力（`ctx.uiWorkspace.createDirectory`）：在父目录下新建子目录，返回新目录绝对路径。
       */
      createDirectory?: (path: string, name: string) => Promise<string>;
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
      /**
       * 把某个文件/目录作为 `@路径` 引用追加到当前会话的输入框草稿（由 client 侧
       * `conversation.input.left` 插槽桥接组件提供 setDraft 能力）。内部按 DSH 的
       * `@file` 文法格式化：文件 `@path` / 含空格 `@"path"` / 目录 `@path/`。
       * @param path - 目标文件或目录的绝对路径。
       * @param isDir - 是否为目录（目录保留结尾斜杠，便于引用整个文件夹）。
       * @returns 是否成功追加（输入框未挂载或路径无法表达时为 false）。
       */
      appendSessionReference?: (path: string, isDir?: boolean) => boolean;
    };
    /** 右侧面板模式挂载：把工作台主体（App.vue）挂进 DSH 右侧面板容器。 */
    __dshFileWorkbenchMountPane__?: (el: HTMLElement, opts?: PaneMountOptions) => PaneMountHandle;
    /** 右侧面板模式挂载：把文件编辑器主体（VSCodePane.vue）挂进 DSH 右侧面板容器。 */
    __dshVSCodeMountPane__?: (el: HTMLElement, opts?: PaneMountOptions) => PaneMountHandle;
    /**
     * 右侧栏导航能力门面（由 client 侧 apply 发布）。
     *
     * 必须走 window 而不是模块导入：client（esbuild）与 Vue（vite）是两个独立的 bundle，
     * 各自持有一份模块状态，直接 import 会导致 Vue 侧读到永远为空的引用。
     */
    __DSH_SIDEBAR_RIGHT__?: SidebarRightBridge;
    /** 临时：贡献点集成测试探针的加载 URL（见 main.ts，测完随该处引用一并删除）。 */
    __dshTestProbeUrl?: string;
  }
}

/** 右侧面板挂载选项（由桥接组件透传 tab 身份，决定文件编辑器实例槽位）。 */
export interface PaneMountOptions {
  apiBase?: string;
  /** DSH 右侧栏 tab id（页面生命周期内稳定）。 */
  instanceId?: string;
  /** 该 tab 所在分栏 id（浮窗时为其浮窗 pane id）。 */
  panelId?: string;
}

/** 面板挂载句柄。 */
export interface PaneMountHandle {
  unmount: () => void;
  /** 仅文件编辑器实例提供：请求本实例打开某个项目目录。 */
  openProject?: (dir: string) => void;
}

/** 右侧栏导航能力门面（`ctx.sidebarRight` 的安全包装，所有方法都不抛错）。 */
export interface SidebarRightBridge {
  /** 打开页 tab；`options.paneId` 落位到指定分栏、`params` 作为导航参数送达正文。 */
  openTab(kind: string, options?: SidebarRightOpenOptions): void;
  /** 把停靠分栏再分一格（上限两格）。@returns 新分栏 id；不可分时为 undefined。 */
  split(paneId?: string): string | undefined;
  /** 把停靠 tab 弹出为独立浮窗。 */
  float(tabId: string): void;
  /** 把浮窗收回停靠位。 */
  dock(paneId: string): void;
  /** 关闭一个 tab。 */
  close(tabId: string): void;
  /** 右侧栏当前是否展开。 */
  isExpanded(): boolean;
  /**
   * 在当前分栏里**平级**再开一个文件编辑器 tab（不新建分栏）。
   *
   * 由 client 侧分配 kind 空槽（页 tab 在同一分栏内按 kind 唯一，故多开靠多占 kind）；
   * 池已满（8 个都在用）时**顶替编号最小的那一个**，因此正常路径下不会失败。
   *
   * @param params - 新实例的导航参数：`{ fresh: true }` = 空白窗口；`{ projectDir }` = 直接
   *   打开某项目。
   * @returns 是否成功发起；宿主右侧栏服务不可用或 `openTab` 抛错时为 false（调用方据此提示）。
   */
  newEditorTab(params?: Record<string, unknown>): boolean;
  /** 当前在册的编辑器 tab 数（= 已占用的 kind 数），供新建前判断池是否已满。 */
  editorTabCount(): number;
  /** 编辑器 kind 池容量。 */
  editorTabLimit(): number;
}

/** 打开页 tab 的落位与参数选项。 */
export interface SidebarRightOpenOptions {
  paneId?: string;
  replaceTab?: string;
  revealIfOpened?: boolean;
  /** 该 kind 的导航参数（页类型自行约定形状，宿主运行时不校验）。 */
  params?: Record<string, unknown>;
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

/** 版本库类型（克隆 / 检出共用）。 */
export type RepoCloneKind = "git" | "svn";

/**
 * 克隆（git）/ 检出（svn）请求。
 *
 * `dir` 是**父目录**，`name` 是要创建的子目录名 —— 目标路径由两者 join 而成，
 * 而不是直接传一个完整路径：这样宿主能对 `name` 单独做「不含分隔符」的校验，
 * 从根上堵住目录穿越（见 `shared/repo.ts` 的 `sanitizeRepoDirName`）。
 */
export interface RepoCloneRequest {
  /** 仓库地址（https://… / git@host:o/r.git / svn://…）。 */
  url: string;
  /** 父目录（绝对路径，本地）。 */
  dir: string;
  /** 子目录名；缺省时宿主按 URL 推导。 */
  name?: string;
  /** git 专用：浅克隆深度（>0 时生效；0/缺省为完整克隆）。 */
  depth?: number;
  /** svn 专用：检出的版本号（缺省取 HEAD）。 */
  revision?: string;
  /**
   * 显式指定的账号 id（「账号管理」里那一条）。
   *
   * 留空 = 按 URL 自动匹配（URL 前缀最长 → 同主机默认账号），与仓库内的同步命令同一套规则；
   * 指定则**忽略自动匹配**，直接用这条账号的凭据 —— 克隆前就能在弹窗里选好，
   * 不必先建好账号再指望它「恰好被匹配上」。
   */
  accountId?: string;
  /** 工作区根 key（与其它路由一致，用于工作区外守卫判定）。 */
  key?: string;
}

/** 克隆 / 检出的结果。 */
export interface RepoCloneResult {
  /** 实际创建的绝对路径。 */
  path: string;
  /** 实际使用的子目录名。 */
  name: string;
  /** 命令的标准输出（供「任务日志」展示；失败时为空）。 */
  stdout?: string;
  /** 命令的标准错误（成功时通常含进度信息，可留空展示）。 */
  stderr?: string;
}

export {};