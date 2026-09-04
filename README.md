# DSH 文件工作台插件（Vue 3 + Vite）

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

  支持 DSH 0.1.0-rc.8 / 0.1.1-rc.1 / 0.1.1-rc.2 / 0.1.2-alpha.1。

## 依赖

- Vue 3 + Vite（前端）；React（DSH slot 桥接，由宿主提供）；esbuild（host/client 构建）。
- `marked` + `dompurify`（Markdown / HTML 安全渲染）。
- 复用 peer `@deepseek-ai/cordis`、`@deepseek-ai/dsh-host-webserver`。

## License

MIT