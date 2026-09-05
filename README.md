# DSH 文件工作台插件（Vue 3 + Vite）

在 DSH 会话视图内提供完整的文件工作台：资源管理器（懒加载目录树 / 文件列表）、代码与文本编辑、
Markdown / HTML / 图片 / PDF / 音视频预览、JSON 编辑器、表格网格、文件名与内容搜索、Git 面板、
多标签终端（xterm.js）、AI 对话与子代理面板，以及新建 / 重命名 / 删除 / 复制 / 上传等 CRUD 操作。
所有读写操作被约束在用户自选的「工作区根目录」之内（符号链接解析后仍生效）。

## 功能一览

- 🗂 **资源管理器**：懒加载目录树 + 文件列表（详情 / 列表 / 网格视图）；目录优先 + 大小写不敏感排序；
  隐藏项置灰、软链接按目标类型展示、失效软链接标红；面包屑 + 完整路径地址栏（点击可编辑复制）；
  我的电脑 / 当前会话 / 快捷方式导航。
- ✏️ **编辑器**：打开即编辑，未保存状态标注，Ctrl/Cmd+S 保存；撤销 / 重做；Markdown 编辑 / 预览 / 分屏
  三态 + 可折叠大纲；导出 PDF；外部改动检测。
- 👁 **预览**：Markdown（marked + DOMPurify 消毒）、HTML（沙箱 iframe 只读）、图片、音频 / 视频、
  PDF（浏览器内置渲染）、文本与代码高亮；预览面板带可拖拽大纲侧栏。
- 🔧 **JSON 编辑器**：树 / 表单 / 表格 / 文本四种模式，格式化、校验、容错降级。
- 📊 **表格网格**：CSV / TSV 结构化编辑，行 / 列增删、排序、汇总（计数 / 求和 / 均值 / 最值 / 去重）。
- 🔍 **搜索**：文件名 + 文件内容递归检索，跳过 node_modules / .git 等噪声目录，带结果数上限与截断提示。
- 🧹 **CRUD**：新建文件 / 目录、重命名、删除（带确认）、复制 / 剪切 / 粘贴、批量操作。
- 📤 **上传**：外部拖拽到列表区或右键菜单「上传」，后端流式写入工作区。
- 🌿 **Git 面板**：文件状态（? / A / M / D）、暂存 / 取消暂存、提交（无身份时提供一键配置）、
  分支切换与新建、拉取 / 推送 / 抓取、查看改动（diff）、还原、内置命令控制台。
- 💻 **终端**：多标签常驻 shell（cmd / PowerShell 可切换），xterm.js 渲染（ANSI 着色、真实提示符、
  行交互如 python -i），SSE 实时流式输出，GBK 编码自动转换，会话级工作目录记忆。
- 🤖 **AI 对话 / 子代理**：内嵌 AI 聊天面板与子代理面板（停靠或浮窗）。
- ⌨️ **命令面板**：Ctrl/Cmd+K 唤起，搜索并执行常用命令；`?` 键随时查看快捷键帮助。
- 🧩 **停靠布局**：dockview 多面板停靠 / 浮动 / 最小化，布局快照保存加载，可自定义面板比例。
- 🎨 **主题适配**：跟随宿主亮 / 暗主题，设置内可固定主题、调整字体与字号。

## 快捷键

| 按键 | 功能 |
| --- | --- |
| `Ctrl/Cmd+K` | 打开命令面板 |
| `Ctrl/Cmd+S` | 保存当前文件 |
| `?` | 打开快捷键帮助（全局） |

文件列表（焦点内）：

| 按键 | 功能 |
| --- | --- |
| `Ctrl/Cmd+A` | 全选 |
| `Ctrl/Cmd+C / X / V` | 复制 / 剪切 / 粘贴 |
| `Ctrl/Cmd+F` | 聚焦筛选框 |
| `Ctrl+Shift+N` | 新建文件夹 |
| `Delete` / `F2` / `F5` | 删除（确认）/ 重命名 / 刷新 |
| `Enter` | 打开文件 / 进入目录 |
| `↑ ↓ Home End` | 移动选中 |
| `Backspace` / `Alt+↑` | 返回上级 |
| `Alt+← / →` | 浏览历史后退 / 前进 |

## 项目结构

```
src/
  shared/               宿主 ↔ 客户端 ↔ Vue 共享类型与中英文案
  host/                 服务端（Cordis 插件）
    index.ts            Cordis apply（注册 /api/dsh-file-workbench 路由 + 静态资源）
    routes.ts           REST 路由聚合
    routes-fs.ts        文件浏览 / 读写 / 上传 / 压缩解压
    routes-git.ts       Git 操作（系统 git CLI）
    routes-terminal.ts  常驻 shell 会话 + SSE 流式 + 编码转换
    routes-subagent.ts  子代理委托
    routes-persist.ts   设置持久化
    fs-tree.ts          fs-tree + path-security：列目录/排序/软链接/containment 守卫
    fs-search.ts        递归文件名/内容搜索（预算截断）
    fs-read.ts          打开/保存文件、类型推导、PDF dataURL
    fs-zip.ts           压缩 / 解压
  client/               DSH 客户端桥接（React → Vue）
  vue/                  Vue 3 + Vite 文件工作台
    main.ts             入口（挂载 + 会话文件自动打开监听）
    App.vue             布局：工具栏 / dockview 面板宿主 / 各弹窗
    components/         资源管理器、文件列表、编辑器、预览、JSON、网格、搜索、Git、
                        终端、AI 对话、命令面板、快捷键帮助、布局设置等
    composables/        useApi、useDock、terminalStore、git、commandRegistry、theme、settings…
    stores/             全局响应式状态（workbench / explorer / diff）
    utils/markdown.ts   安全 Markdown 渲染
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
> ```yaml
> - insert:
>     - id: dsh-file-workbench
>       name: 'dsh-file-workbench'
> ```

## 使用

1. 打开侧边文件工作台标签，点工具栏 **📁 选择文件夹** 设置工作区根目录。
2. 左侧资源管理器懒加载展开目录；点文件在右侧打开为标签（代码 / 文本可编辑，Markdown 可编辑与预览，
   HTML / 图片 / PDF / 音视频预览）。
3. 顶部搜索框输入关键字实时检索文件名与内容；`Ctrl/Cmd+K` 打开命令面板，`?` 查看快捷键帮助。

## 安全

- 所有读写路径先经 `ensureWsPath` / `ensureWsWritePath` 的根目录 containment 守卫
  （含符号链接解析后的再检查），拒绝越权与路径穿越。
- Markdown / HTML 渲染一律经 DOMPurify 消毒；HTML 用空 sandbox 沙箱 iframe 只读展示。
- 文本 / 图片文件有大小上限，未知二进制拒绝读取。
- 搜索对符号链接目录不下钻（循环安全），并对访问数与命中数设预算。
- 终端基于 Windows ConPTY 伪控制台（node-pty），支持退格编辑、真实提示符、ANSI 颜色、全屏 TTY 程序与中文输出。

## 依赖

- Vue 3 + Vite（前端）；React（DSH slot 桥接，由宿主提供）；esbuild（host/client 构建）。
- `marked` + `dompurify`（Markdown / HTML 安全渲染）；`highlight.js`（代码高亮）。
- `@xterm/xterm` + `@xterm/addon-fit` + `@xterm/addon-web-links`（终端）；`node-pty`（ConPTY 伪控制台）。
- `vanilla-jsoneditor`（JSON 编辑器）；`diff`（Git diff 渲染）。
- `jspdf` + `html2canvas`（导出 PDF，运行时动态加载）；`fflate`（压缩 / 解压）。
- `dockview-vue`（可停靠 / 浮动面板布局）；`element-plus`（UI 组件）。
- 复用 peer `@deepseek-ai/cordis`、`@deepseek-ai/dsh-host-webserver`。

## License

MIT
