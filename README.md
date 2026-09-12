# DSH 文件工作台插件（Vue 3 + Vite）

在 DSH 会话视图的**右侧面板**内提供一个 Win11 资源管理器风格的文件工作台：  
左侧导航树 + 右侧文件列表 + 命令栏 + 状态栏，支持搜索、收藏、会话文件、回收站与  
新建 / 重命名 / 删除 / 复制 / 上传等 CRUD 操作。

文件**查看**统一改道到 **DSH 右侧原生查看器**（Markdown / 代码高亮 / 图片 / PDF / HTML / 纯文本）

## 功能一览

- 🗂 **资源管理器（单窗口）**：Win11 树（主页 / 图库 / 此电脑盘符 / 回收站 / 收藏 / 会话文件），  
  可拖拽分隔条（默认 3:7），命令栏 + 状态栏，目录优先 + 大小写不敏感排序。
- 👁 **视图档位**：超大 / 大 / 中 / 小图标、列表、详情、内容、平铺共 8 档；  
  详情视图列宽可拖拽；可切换是否显示扩展名。
- 🔍 **搜索**：聚焦当前目录递归检索文件名与内容，支持区分大小写 / 正则、虚拟滚动；  
  支持对内容命中做跨文件批量替换。
- 🧹 **CRUD**：新建文件 / 目录、重命名、删除（带确认）、复制 / 剪切 / 粘贴、  
  鼠标拉框多选、批量操作、外部拖拽上传、压缩 / 解压。
- ♻️ **回收站**：与文件列表共用同一套 UI（8 档视图 / 排序 / 多选 / 拉框一致），  
  操作换成 还原 / 永久删除 / 清空回收站。
- 🌿 **Git 徽标**：文件状态（? / A / M / D）徽标、右键 Git 操作（暂存 / 提交 / 差异 / 还原）、快捷提交。
- 🎨 **主题与外观**：跟随宿主亮 / 暗主题；设置内可固定主题、调整强调色、字号、字体族、  
  默认视图、显示隐藏文件、以及 root 开关（是否允许操作工作区根之外的文件）。
- 🧭 **导航**：后退 / 前进 / 上级 / 回到会话目录、面包屑地址栏、收藏、会话触碰文件（SSE 实时）。
- ⌨️ **快捷键**：`?` 唤起快捷键帮助；文件列表内支持全选 / 复制粘贴 / 筛选 / 新建 / 删除 / 重命名 / 刷新等。
- 📌 **入口**：DSH 右侧栏 guide 入口卡与标签（不再有输入框按钮 / 顶部抽屉）。

## 快捷键

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

## 项目结构

```
src/
  shared/               宿主 ↔ 客户端 ↔ Vue 共享类型与中英文案
  host/                 服务端（Cordis 插件）
    index.ts            Cordis apply（注册 /api/dsh-file-workbench 路由 + 静态资源 + 自更新）
    updater.ts          启动后自更新
    fs/                 fs-tree（列目录/排序/软链接/containment 守卫）、fs-search（递归搜索/替换）、
                        fs-read（打开/保存）、fs-zip（压缩解压）、recycle（系统回收站）
    routes/             routes.ts 分发表 + fs / git / recycle / session-stream / persist / util 各资源
    store/              root-store（工作区根）、workbench-store（prefs/favorites/layout 持久化）
  client/               DSH 客户端桥接（TSX，React 组件注册进右侧栏，Vue 产物注入 + 挂载）
    index.tsx           apply：注册右侧栏 tab（类型 + 主体）、改道文件打开、注入 Vue 产物
    RightPaneBridge.tsx 把 Vue 工作台主体挂进右侧面板容器（轮询 __dshFileWorkbenchMountPane__）
    api.ts              「打开 tab」桥
  vue/                  Vue 3 + Vite 文件工作台（单窗口资源管理器）
    main.ts             入口（右侧面板挂载；dev 时自挂 #app）
    App.vue             单窗口壳：工具栏 + ExplorerPane + 设置 / 确认 / 快捷键弹窗
    components/
      common/           WinMenuBar（顶部工具栏）、NavPathBar（面包屑）、Icon、ContextMenu、
                        ConfirmDialog、ShortcutHelpDialog
      business/explorer/ExplorerPane（双栏 + 分隔条）、CommandBar（命令栏）、NavPane（导航树）、
                        FileListPane（文件列表 / 回收站）、SearchPane（搜索结果）
      business/git/     QuickCommit（快捷提交）
      settings/         SettingsDialog（6 项设置 + 显示隐藏文件）
    composables/
      core/             useApi、settings、theme、i18n、dialog、fileTaskMeta
      domain/           git（状态徽标 / Git 操作）
      session/          sessionSse（会话触碰文件 SSE）、tasks（后台任务登记）
      ui/               icons、clipboard、dnd、virtual（虚拟滚动）
    stores/             workbench（工作台 / 搜索）、explorer（浏览 / 回收站）、fileCommands（命令总线）
    styles.css          全局主题变量与基础样式
```

## 开发

前置：Node ≥ 20、npm（或 pnpm）。

```bash
npm install          # 或 pnpm install
npm run build:vue    # 仅构建 Vue 产物（dist/）
npm run dev:vue      # 单独跑 Vue 应用联调（配合 host 后端）
npm run typecheck    # vue-tsc --noEmit
npm run build        # 完整构建：Vite(Vue) + esbuild(host/client) → lib/
npm run deploy       # 构建并同步进 web profile（改版即生效）
```

`npm run dev:vue` 下 Vue 应用会自挂到 `#app`；API 基址默认 `/api/dsh-file-workbench`，  
可用环境变量 `VITE_API_BASE` 覆盖指向已运行的 host（例如 `http://localhost:xxxx/api/dsh-file-workbench`）。

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

1. 在 DSH 右侧栏的 guide 区点「文件工作台」打开面板（首次会自动定位到当前会话的工作区目录）。
2. 左侧导航树选择位置；右侧列表双击文件夹进入、双击文件在 **DSH 右侧查看器**打开。
3. 顶部搜索框输入关键字检索（文件名 + 内容）；`?` 查看快捷键帮助。

## 安全

- 所有读写路径先经根目录 containment 守卫（含符号链接解析后的再检查），拒绝越权与路径穿越。
- 工作区根之外默认只读；需在设置中开启 **root 开关** 才允许写操作。
- 搜索对符号链接目录不下钻（循环安全），并对访问数与命中数设预算。
- 持久化仅写 `{DSH_HOME|~/.dsh}/fileworkbench/` 白名单键（prefs / favorites / layout）。

## 依赖

- Vue 3 + Vite（前端）；React（DSH 右侧栏桥接，由宿主提供）；esbuild（host/client 构建）。
- `element-plus`（UI 组件）。
- `fflate`（压缩 / 解压）；`fzstd`（解压会话转写 zstd）。
- 复用 peer `@deepseek-ai/cordis`、`@deepseek-ai/dsh-host-webserver`。

## License

MIT
