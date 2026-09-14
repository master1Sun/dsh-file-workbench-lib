# DSH 文件工作台插件（Vue 3 + Vite）

在 DSH 会话视图的**右侧面板**内提供三个能力，共用同一个工作区根：

- 🗂 **文件工作台**（tab kind `workbench`）：Win11 资源管理器风格的文件管理器
- 📝 **文件编辑器**（tab kind `vscode`）：CodeMirror 多标签代码编辑器 + 项目树
- ▶ **终端**：node-pty（ConPTY）常驻 shell，**全局单例**，跨面板常驻不重建

在此之上还有：**Git / SVN 管理面板**、把文件作为官方 `@路径` 引用送进会话输入框、
后台任务面板、用子代理处理选中文件。

文件**查看**统一改道到 **DSH 右侧原生查看器**（Markdown / 代码高亮 / 图片 / PDF / HTML / 纯文本）；
需要就地编辑时用文件编辑器，或在列表右键「编辑」打开内置记事本。

## 面板与入口

| 面板 | tab kind | guide 入口 | 说明 |
| --- | --- | --- | --- |
| 文件工作台 | `workbench` | order 100 | 右侧栏 guide 区点击打开，首次自动定位当前会话工作区目录 |
| 文件编辑器 | `vscode` | order 101 | 同上，排在文件工作台下方 |
| 终端 | — | — | 工具栏终端按钮，或在目录右键「在终端打开」 |

> 入口只有右侧栏 guide 卡与标签，不再有输入框按钮 / 顶部抽屉。

## 功能一览

### 🗂 文件工作台（资源管理器）

- **单窗口 Win11 树**：主页 / 图库 / 此电脑盘符 / 回收站 / 收藏 / 会话文件；
  可拖拽分隔条（默认 3:7），命令栏 + 状态栏，目录优先 + 大小写不敏感排序。
- **盘符真实卷标**：读取系统卷标显示为 `卷标 (C:)`，无卷标回退本地化的「本地磁盘 (C:)」。
- **视图档位**：超大 / 大 / 中 / 小图标、列表、详情、内容、平铺共 8 档；
  详情视图列宽可拖拽；可切换是否显示扩展名。
- **搜索**：聚焦当前目录递归检索文件名与内容，支持区分大小写 / 正则、虚拟滚动；
  支持对内容命中做跨文件批量替换。
- **CRUD**：新建文件 / 目录、重命名、删除（带确认）、复制 / 剪切 / 粘贴、
  鼠标拉框多选、批量操作、外部拖拽上传、压缩 / 解压。
- **回收站**：与文件列表共用同一套 UI（8 档视图 / 排序 / 多选 / 拉框一致），
  操作换成 还原 / 永久删除 / 清空回收站。
- **Git 徽标**：文件状态（`?` / `A` / `M` / `D`）徽标 + 右键 Git 操作。
- **记事本**：右键「编辑」打开内置文本编辑器（另存 / 剪贴板 / 未保存二次确认）。
- **后台任务**：上传、压缩等长任务在后台任务面板显示进度与结果，可查历史归档。
- **子代理**：右键「用子代理处理」，就选中文件 / 目录发起官方子代理会话。
- **导航**：后退 / 前进 / 上级 / 回到会话目录、面包屑地址栏、收藏、会话触碰文件（SSE 实时）。

### 📝 文件编辑器

- **项目树**：展开状态与滚动位置持久化；单击选中、双击打开；右键
  新建文件 / 文件夹、重命名、删除、刷新、添加到会话。
- **多标签编辑**：CodeMirror 6，语言按扩展名**动态加载**（TS/JS/JSON/HTML/CSS/Markdown/YAML/XML/
  Python/SQL/Java/C++/Rust/Go/PHP，以及 C#/shell/Ruby 等 legacy 模式；无匹配回退纯文本）。
- **标签栏右键菜单**：关闭 / 保存并关闭 / 关闭其他 / 关闭右侧标签页 / 关闭全部。
- **编辑器右键**：格式化内容、保存；`Ctrl+S` 保存；未保存关闭时二次确认；只读文件有明确标识。
- **打开文件夹**：两栏选择器（左栏「我的电脑 + 快捷方式」，右栏对应文件夹），
  支持**双击下钻、单击选中**，另可新建文件夹或直接输入路径。
- 与文件工作台**共用同一个全局终端**。

### ▶ 终端

- **ConPTY 常驻 shell**（node-pty）：真实控制台语义——退格逐字符删除、回车即时执行、
  全屏 TTY 程序与中文输出正常；`cmd` / `powershell` 可切换。
- **多标签**（上限 9），每个标签一个独立后端会话；会话跨面板关闭存活，重连即续传输出。
- **浮窗**：可拖动、右下角缩放、双击复位；最小化收进右下角 **dock 栏**（跨面板常驻，可还原）。
- **关闭即清理**：Windows 下以 `taskkill /T` 终结整棵进程树，避免 npm / python / node 孤儿残留。
- **搜索与显示**：Ctrl+F 搜索输出（区分大小写）、字号增减、清屏。
- **键位**：`Ctrl+C` 有选区时复制（无选区放行 SIGINT）、`Ctrl+V` 粘贴、`Ctrl+F` 搜索、`Ctrl±` / `Ctrl+0` 字号。
- **权限徽标**：显示当前终端是「管理员」还是「普通权限」，见下文[权限模型](#权限模型终端管理员模式)。

### 🌿 Git / SVN 管理面板

两个面板都可从文件工作台与文件编辑器中打开（右键 → 打开管理面板），均按左侧窄栏分区：

**Git**（7 个分区）

| 分区 | 能力 |
| --- | --- |
| 变更 | 暂存区 / 未暂存 / 未跟踪三组；行内暂存、取消暂存、忽略、还原；全部暂存；提交（含快捷提交） |
| 历史 | 提交图（全部 / 当前分支）+ 提交详情（hash / 作者 / 时间 / parents / refs / 文件清单 / 补丁）；`reset`（soft / mixed / hard）、`revert`、`cherry-pick` |
| 分支 | 新建并切换、重命名、本地与远程分支列表、切换、合并到当前、推送、删除、检出远程分支 |
| 标签 | 新建、拉取全部、发布 Release、查看、拉取远程标签、推送、删除 |
| 远程 | 新增、修改 URL、删除 |
| 贮藏 | 新建、查看、应用 / 删除 |
| 命令行 | 内置 git CLI，直接跑任意 git 子命令并显示输出 |

另有文件级 **diff 视图 / 文件历史 / blame**，以及分支上下游 `↑ahead ↓behind` 显示。

**SVN**（3 个分区：变更 / 日志 / 输出）

- 更新、清理、检出（URL + 目标目录）、加入版本控制、还原、解决冲突、提交（选中或全部）。
- 文件级 diff / blame；工作副本 URL 与仓库根展示。
- **忽略**走 `svn:ignore`（目录属性，作用在父目录，先读后幂等追加）。
- 未装 svn CLI 或当前目录不是工作副本时，给出明确提示与引导。

**右键菜单**统一由 `composables/domain/repoMenu.ts` 生成（单一来源），Git 提供
暂存 / 提交 / 差异 / 还原 / 忽略（写入仓库根 `.gitignore`），SVN 提供 打开管理面板 / 更新 /
加入版本控制 / 忽略。

### 🔗 会话联动

- **会话文件**：经 SSE 实时推送当前会话触碰过的文件，在导航树「会话文件」分组展示。
- **添加到会话**：把文件 / 目录作为 **DSH 官方结构化引用 chip**（`@路径`，`source: "reference"`）
  写入当前会话输入框草稿——不是拼纯文本。
- **打开改道**：会话里点文件（工具行路径、产物行、正文提及）会改道到本插件；
  工作台未挂载时自动回落到宿主原生行为。
- **跟随会话**：切换会话或会话工作目录变化时，工作区根自动跟随。

### 🎨 设置

允许操作工作区根之外的文件（root 开关）、显示隐藏文件、强调色、界面字号、字体族、
主题（跟随宿主 / 深色 / 浅色）、默认视图。

## 快捷键

全局：

| 按键  | 功能          |
| --- | ----------- |
| `?` | 打开快捷键帮助（全局） |

文件列表（焦点内）：

| 按键                     | 功能               |
| ---------------------- | ---------------- |
| `Ctrl/Cmd+A`           | 全选               |
| `Ctrl/Cmd+C / X / V`   | 复制 / 剪切 / 粘贴     |
| `Ctrl/Cmd+F`           | 聚焦筛选框            |
| `Ctrl+Shift+N`         | 新建文件夹            |
| `Delete` / `F2` / `F5` | 删除（确认）/ 重命名 / 刷新 |
| `Enter`                | 打开文件 / 进入目录      |
| `↑ ↓ Home End`         | 移动选中             |
| `Backspace` / `Alt+↑`  | 返回上级             |
| `Alt+← / →`            | 浏览历史后退 / 前进      |

文件编辑器与终端：

| 按键               | 位置    | 功能                       |
| ---------------- | ----- | ------------------------ |
| `Ctrl/Cmd+S`     | 编辑器   | 保存当前标签                   |
| 标签栏右键            | 编辑器   | 关闭 / 保存并关闭 / 关闭其他 / 关闭右侧 / 关闭全部 |
| `Ctrl+C`         | 终端    | 有选区时复制；无选区放行 `SIGINT`     |
| `Ctrl+V`         | 终端    | 粘贴                       |
| `Ctrl+F`         | 终端    | 搜索终端输出                   |
| `Ctrl±` / `Ctrl+0` | 终端    | 增大 / 减小 / 复位字号           |

## 项目结构

```
src/
  shared/
    types.ts             宿主 ↔ 客户端 ↔ Vue 共享类型
    locales.ts           中英文案字典（zh / en 两份都要同步改）
    session-files.ts     会话转写文件解析
  host/                  服务端（Cordis 插件）
    index.ts             apply：注册 /api/dsh-file-workbench 路由 + 静态资源 + 自更新
    updater.ts           启动后自更新
    fs/
      fs-tree.ts         列目录 / 排序 / 软链接 / containment 守卫
      fs-search.ts       递归搜索 + 跨文件替换
      fs-read.ts         打开 / 保存
      fs-zip.ts          压缩 / 解压
      fs-drives.ts       盘符与卷标（Win32_LogicalDisk，5 分钟 TTL 缓存）
      recycle.ts         系统回收站
    routes/
      routes.ts                资源分发表
      routes-fs.ts             文件系统（列表 / 搜索 / 读写 / 压缩 / 我的电脑）
      routes-git.ts            Git（status / diff / add / discard / log / branch / tag / remote / stash / 忽略）
      routes-svn.ts            SVN（info / status / run / 日志 / blame）
      routes-terminal.ts       终端：ConPTY 常驻 shell（SSE 流）+ 宿主提权探测 /term-env
      routes-recycle.ts        回收站
      routes-session-stream.ts 会话触碰文件 SSE
      routes-subagent.ts       子代理
      routes-task-archives.ts  后台任务归档
      routes-persist.ts        偏好持久化
      routes-util.ts           JSON 信封 / body 解析 / 静态资源 / 路径校验
    store/
      root-store.ts      工作区根
      workbench-store.ts prefs / favorites / layout 持久化
    subagent/subagent.ts 官方子代理会话
  client/                DSH 客户端桥接（TSX，注册进右侧栏，注入 Vue 产物 + 挂载）
    index.tsx            apply：注册两个右侧栏 tab、改道文件打开、注入 Vue 产物、引用通道
    RightPaneBridge.tsx  把 Vue 工作台 / 编辑器主体挂进右侧面板容器
    ComposerBridge.tsx   会话输入框引用座位（官方 `@路径` chip 写入）
    api.ts               「打开 tab」桥
  vue/                   Vue 3 + Vite 前端
    main.ts              入口：右侧面板挂载 + **全局终端常驻挂载**（挂 body）
    App.vue              文件工作台单窗口壳
    styles.css           全局主题变量与基础样式
    components/
      common/            WinMenuBar / NavPathBar / Icon / ContextMenu / ConfirmDialog / ShortcutHelpDialog
      business/explorer/ ExplorerPane（双栏 + 分隔条）、CommandBar、NavPane、FileListPane（列表 / 回收站）、
                         ThisPcPane、SearchPane、StatusBar、BgTaskPanel、TxtEditor
      business/vscode/   VSCodePane、ProjectTree、TabBar、CodeEditor、FolderPickerDialog、langResolver
      business/git/      GitPanel、GitDiffView、GitGraphList、SvnPanel、QuickCommit
      business/terminal/ TerminalHost（全局单例宿主）、TerminalDialog（浮窗 / 停靠）
      settings/          SettingsDialog
    composables/
      core/              useApi、settings、theme、i18n、dialog、fileTaskMeta
      domain/            git、gitGraph、svn、repoMenu（右键菜单单一来源）、terminalStore、driveName
      session/           sessionSse、tasks、listStatus
      ui/                icons、clipboard、dnd、virtual
    stores/              workbench、explorer、fileCommands、vscode
    types/               auto-imports.d.ts、components.d.ts
```

## 开发

前置：Node ≥ 20、npm（或 pnpm）。

| 命令                   | 作用                             |
| -------------------- | ------------------------------ |
| `npm run dev:vue`    | 单独跑 Vue 应用联调（自挂 `#app`，配合已运行的 host） |
| `npm run build:vue`  | 仅构建 Vue 产物（`dist/`）             |
| `npm run typecheck`  | `vue-tsc --noEmit`             |
| `npm run build`      | 完整构建：Vite(Vue) + esbuild(host/client) → `lib/` |
| `npm run build:dev`  | 同上，`--dev`                     |
| `npm run sync`       | 把 `lib/` 同步进 web profile        |
| `npm run deploy`     | `build:dev` + `sync`           |

API 基址默认 `/api/dsh-file-workbench`，可用环境变量 `VITE_API_BASE` 覆盖
（例如开发时指向 `http://localhost:xxxx/api/dsh-file-workbench`）。

**改动生效范围**（影响调试方式）：

- 只改 `src/vue/**`、`src/shared/locales.ts` → 构建 + 同步后**硬刷新浏览器**即可。
- 改了 `src/host/**` 或 `src/client/**`（例如新增路由）→ **必须重启 `dsh web`**。

## 安装到 DSH（web 档）

```bash
npm run build && npm run sync   # 构建并把产物同步进 web profile
```

装好后在 profile 里执行 `npm install`（让 cordis.patch.yml 生效），**重启 `dsh web`** 并硬刷新浏览器
（Cmd/Ctrl+Shift+R）。

> 若 `dsh web` 未内置本插件的挂载行，可在
> `~/.dsh/profiles/web/cordis.patch.yml` 追加：
>
> ```yaml
> - insert:
>     - id: dsh-file-workbench
>       name: 'dsh-file-workbench'
> ```

## 使用

1. 在 DSH 右侧栏的 guide 区点「文件工作台」或「文件编辑器」打开面板
   （首次会自动定位到当前会话的工作区目录）。
2. 工作台：左侧导航树选择位置；右侧列表双击文件夹进入、双击文件在 **DSH 右侧查看器**打开。
3. 编辑器：工具栏「打开文件夹」选定项目目录 → 项目树双击打开文件 → 多标签编写、`Ctrl+S` 保存。
4. 终端：工具栏终端按钮打开，最小化后收进右下角 dock 栏，点一下还原。
5. `?` 查看快捷键帮助。

## 权限模型（终端管理员模式）

终端 shell 由宿主以 **ConPTY** 派生，**子进程继承 `dsh web` 进程的令牌** ——
所以「终端里的命令有没有管理员权限」等于「`dsh web` 是不是以管理员启动」。

- **获得管理员终端**：以**管理员身份运行** `dsh web`（右键终端/快捷方式 →
  「以管理员身份运行」），面板内**所有**终端即拥有管理员权限。
- **徽标**：终端标签栏显示「管理员 / 普通权限」，鼠标悬停可看说明；点击给出获取指引。
  探测由 host 的 `GET /term-env` 提供（Windows 用 `whoami /groups` 的完整性级别 SID 判定，
  POSIX 用 `uid === 0`）。
- **为什么不能在插件内单开一个提权终端**：Windows 提权必须过 UAC，而走 ShellExecute / `runas`
  的提权进程**无法挂到 ConPTY 伪控制台**上，因此插件无法对单个终端提权；可行路径只有让宿主整体提权。
- 备选方案（当前未实现）：以 `sudo.exe` 做单命令级提权（需先启用 Windows sudo 且设为 inline 模式），
  或宿主注册高权限助手经命名管道桥接（引入自建提权通道，安全面较大）。

## 安全

- 所有读写路径先经根目录 containment 守卫（含符号链接解析后的再检查），拒绝越权与路径穿越。
- 工作区根之外默认只读；需在设置中开启 **root 开关**才允许写操作。
- 搜索对符号链接目录不下钻（循环安全），并对访问数与命中数设预算。
- 终端工作目录同样过保护路径校验；终止会话时清理整棵进程树。
- 持久化仅写 `{DSH_HOME|~/.dsh}/fileworkbench/` 白名单键（prefs / favorites / layout）。

## 依赖

- **Vue 3 + Vite**（前端）；**React**（DSH 右侧栏桥接，由宿主提供）；**esbuild**（host/client 构建）。
- `element-plus`（UI 组件）；`@xterm/xterm` + fit / search / web-links addon（终端渲染）。
- **CodeMirror 6**（编辑器：`@codemirror/*` 语言包按需动态加载）。
- `node-pty`（ConPTY 交互终端，原生模块，缺失时终端不可用）。
- `fflate`（压缩 / 解压）；`fzstd`（解压会话转写 zstd）。
- 复用 peer `@deepseek-ai/cordis`、`@deepseek-ai/dsh-host-webserver`。

## License

MIT
