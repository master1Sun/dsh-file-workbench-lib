# DSH 文件工作台插件（Vue 3 + Vite）

一个 **DSH Web 插件**：把 dsh-better-sidebar 里的「文件浏览 / 文件工作台」能力抽出来，
用 **Vue 3 + Vite** 在独立的 DSH 插件工程里重新实现。提供右侧/会话视图内的完整文件工作台：
资源管理器（懒加载目录树）、代码/文本编辑、Markdown 预览、HTML/图片预览、文件名搜索、以及
新建/重命名/删除等 CRUD，全部操作被约束在用户自选的「工作区根目录」之内（符号链接解析后仍生效）。

## 功能一览

- 🗂 **资源管理器**：懒加载目录树；目录优先 + 大小写不敏感排序；隐藏项置灰、软链接按目标类型
  展示、失效软链接标红；面包屑 + 上级导航。
- ✏️ **编辑器**：打开即编辑，标注未保存状态，Ctrl/Cmd+S 保存；Markdown 提供 编辑 / 预览 / 分屏。
- 👁 **预览**：Markdown（marked + DOMPurify 消毒）、HTML（沙箱 iframe 只读）、图片（dataURL）。
- 🔍 **搜索**：递归文件名搜索（复刻 fs-search），跳过 node_modules/.git 等噪声目录，带结果数上限。
- 🧹 **CRUD**：新建文件/目录、重命名、删除（带确认）。

## 项目结构

```
src/
  shared/types.ts        宿主 ↔ 客户端 ↔ Vue 共享类型
  host/                  服务端（Cordis 插件）
    index.ts             Cordis apply（注册 /api/dsh-file-workbench 路由 + 静态资源）
    fs-tree.ts           fs-tree + path-security：列目录/排序/软链接探测/containment 守卫
    fs-search.ts         递归文件名搜索（预算截断）
    fs-read.ts           打开/保存文件、类型推导
    routes.ts            REST + 静态资源路由
    root-store.ts        工作区根目录注册表
  client/                DSH 客户端桥接（React → Vue）
    index.ts             __ModuleLoader__ 入口：注册 conversation.view 槽位
    bridge.tsx           注入 Vue 产物 asset，轮询后 mountFileWorkbench
  vue/                   Vue 3 + Vite 文件工作台
    main.ts              入口（向 window 暴露 mountFileWorkbench + 独立 dev 自挂）
    App.vue              布局：工具栏 / 侧栏（资源管理器|搜索）/ 标签 + 内容
    components/          ExplorerTree、ExplorerNode、SearchPane、EditorPane、PreviewPane
    composables/useApi.ts REST 客户端
    stores/workbench.ts  全局响应式状态
    utils/markdown.ts    安全 Markdown 渲染
```

## 开发

前置：Node ≥ 20、pnpm ≥ 10（或 npm）。

```bash
pnpm install          # 或 npm install
pnpm run build:vue    # 仅构建 Vue 产物（dist/）
pnpm run dev:vue      # 单独跑 Vue 应用联调（配合 host 后端）
pnpm run typecheck    # tsc --noEmit
pnpm run build        # 完整构建：Vite(Vue) + esbuild(host/client) → lib/
```

`pnpm run dev:vue` 下 Vue 应用会自挂到 `#app`；API 基址默认 `/api/dsh-file-workbench`，
可用环境变量 `VITE_API_BASE` 覆盖指向已运行的 host（例如 `http://localhost:xxxx/api/dsh-file-workbench`）。

## 安装到 DSH（web 档）

```bash
# 1) 构建并把产物同步进 web profile（首次 target 插件需已安装，见方式二）
npm run build && npm run sync

# 方式二（推荐改版即生效的联调目标）：用 npm link / file: 依赖指向本目录
#   ~/.dsh/profiles/web/package.json  dependencies 添加 "dsh-file-workbench": "link:<本目录绝对路径>"
#   或在本目录先 `npm pack` 后于 profile 安装该 tgz
```

装好后在 profile 里执行 `npm install`（让 cordis.patch.yml 生效），**重启 `dsh web`** 并硬刷新浏览器
（Cmd/Ctrl+Shift+R）。

> 若 `dsh web` 未内置本插件的挂载行，可按 dsh-better-sidebar 的方式在
> `~/.dsh/profiles/web/cordis.patch.yml` 追加：
> ```yaml
> - insert:
>     - id: dsh-file-workbench
>       name: 'dsh-file-workbench'
> ```

## 使用

1. 打开侧边文件工作台标签，点工具栏 **📁 选择文件夹**（或输入绝对路径）设置工作区根目录。
2. 左侧资源管理器_懒加载_展开目录；点文件在右侧打开为标签（代码/文本 & Markdown 可编辑与预览，
   HTML/图片预览）。
3. 切到「搜索」输入关键字即可全根目录检索文件名，点命中文档打开。

## 安全

- 所有读写路径先经 `ensureWsPath` / `ensureWsWritePath` 的根目录 containment 守卫
  （含符号链接解析后的再检查），拒绝越权与路径穿越。
- Markdown / HTML 渲染一律经 DOMPurify 消毒；HTML 用空 sandbox 沙箱 iframe 只读展示。
- 文本文件有大小上限，图片有大小上限，未知二进制拒绝读取。
- 搜索对符号链接目录不下钻（循环安全），并对访问数与命中数设预算。

## DSH 版本

参考 dsh-better-sidebar 支持 DSH 0.1.0-rc.8 / 0.1.1-rc.1 / 0.1.1-rc.2 / 0.1.2-alpha.1。

## 依赖

- Vue 3 + Vite（前端）；React（DSH slot 桥接，由宿主提供）；esbuild（host/client 构建）。
- `marked` + `dompurify`（Markdown / HTML 安全渲染）。
- 复用 peer `@deepseek-ai/cordis`、`@deepseek-ai/dsh-host-webserver`。

## License

MIT