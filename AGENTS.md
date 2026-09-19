# AGENTS.md — 在 DSH 文件编辑器里编写插件（面向 AI 助手）

> 本文件随 `@sunjuntao/dsh-file-workbench` 安装到用户的 dsh profile。
> 当用户请求「给 DSH 文件编辑器写个插件」时，按本文流程执行。

## 是什么

本包（DSH File Workbench）在 DSH 会话视图右侧提供**文件工作台**与**仿 VS Code 文件编辑器**，
二者都开放了**外部插件注入 API**：纯 JS 单文件即可注册侧栏视图、状态栏按钮、底部「扩展」
菜单项、编辑器内装饰（高亮/波浪线/gutter），并通过宿主 HTTP API 读写项目文件、跑 git 命令、
持久化数据。

## 工作流程（AI 应遵循）

1. **读作者文档（全文契约）**：本包若带 `docs/activity-bar-plugin.md` 直接读它；否则经运行中的
   宿主拉取——`GET http://<dsh 地址>/api/dsh-file-workbench/plugin-doc`（同源的插件管理页即可确认
   端口）。含 window API 全契约 + 宿主 HTTP API 清单 + 主题 token。
2. **照抄参考实现**：本包 `plugins/packages/*.js`（若有仓库）或运行时逐个拉取——
   `GET /api/dsh-file-workbench/plugin-src?k=<name>`（bookmarks / todo-tree / find-references /
   linter / gitlens-lite / outline / regex-highlight / json2interface / md-preview / hex-viewer /
   local-history，均为打包好的 bundle，可导入即活）；骨架模板用 `?k=_skeleton`。
3. **写源码形态单文件**（见下节约定），存到用户工作区，如 `<name>.js`。
4. **装入 dsh**：把文件交给用户在编辑器「插件管理 → 导入本地文件」一键导入
   （源码形态导入即自动打包并当场启用；若从未成功激活，重启后会停在禁用态，需在列表点一次
   「启用」）。批量/免手动场景可引导用户用其 AI 工具的文件写入能力，
   把记录追加进 `~/.dsh/fileworkbench/pluginData.json` 的 `dsh-fw.userPlugins` 数组
   （字段形状见 userPlugins store；重启 dsh 生效）。
5. **静态自检**：把自包含校验脚本 `GET /api/dsh-file-workbench/assets/plugin-authoring-check.js`
   存到本地后 `node plugin-authoring-check.js <name>.js`——确保三种顶层 export、
   meta 为纯 JSON 字面量、无顶层 import；输出 `OK: dsh-fw.<name> | …` 即通过。
   （在线骨架：`GET /api/dsh-file-workbench/plugin-src?k=_skeleton`，打包好的 bundle，可直接导入试用。）

## 插件源码约定（硬性）

```js
export const meta = {            // 必填，纯 JSON 风格对象字面量（双引号、无注释、无尾逗号）
  "name": "中文名", "version": "", "description": "中文描述",
  "nameEn": "English", "descriptionEn": "English description"
};                               // 勿手写 id：loader id 固定 = dsh-fw.<文件名>
export const inject = [];        // 保留位，可为空数组
export function apply(_ctx) {    // 必须【同步】注册至少一个贡献点
  const api = window.__dshFileWorkbenchVSCode__;   // 编辑器；工作台用 __dshFileWorkbenchWorkbench__
  if (!api || api.apiVersion < 1) return false;
  api.activityBar.register(buildView());           // 契约见 docs
  return true;
}
```

- 不得有顶层 `import`；框架无关，原生 DOM 即可。
- 样式经 `<style id="dsh-xx-styles">` 注入；颜色只用宿主 `--dsh-*` token 且**必带兜底值**
  （token 表见 docs；使用未定义 token 会破坏浅色主题）。
- 编辑器装饰**不要**自行 import CodeMirror（CM6 在私有 chunk 里，实例不同必然失效），
  只走 `ctx.editor.createDecorations(spec)` 纯 JSON 工厂。
- 探针预检会用 no-op 桩跑一遍 apply：用 `api.activityBar.register.name !== "noop"`
  判断真 API 已就绪，避免桩内注册被回收后表现为"偶发不生效"。
- 多窗口共享同一页面：模块级 `Map` 按 `ctx.projectDir` 分桶存状态；
  `mount(el, ctx)` 返回清理函数（解绑订阅 + `el.replaceChildren()`）。

## 贡献点速查

| 能力 | API |
| --- | --- |
| 左侧栏视图 | `api.activityBar.register({ id, title:{zh,en}, icon, order, when(ctx), mount(el,ctx) })` |
| 底部状态栏按钮 | `api.statusbar.register({ id, text, commandId, tooltip?, icon?, order?, when? })` |
| 底部「扩展」弹出菜单条目 | `api.statusbar.registerMenu(同上)`（空间不受限时优先） |
| 可调用动作 | `api.commands.register(id, handler)`；状态栏/菜单点击 = `executeCommand(commandId, { path, projectDir })` |
| 编辑器装饰 | `ctx.editor.createDecorations({ items: [{ type:"mark"|"line"|"gutter", start:{line,character}, end?, category, className?, message? }] })`（line 从 1 起） |
| 跨重启持久化 | host `GET/POST /plugin-data`（key 建议 `dsh-fw.<插件>.<hash(projectDir)>`） |

宿主 HTTP（前缀 `/api/dsh-file-workbench`，响应 `{ ok, data, error? }`）：
`GET /files?path`、`GET /read?path`、`POST /save`、`GET /grep?q&…`、`GET/POST /plugin-data`、
`POST /git/<op>`（含 `/git/run { path, args }`）等——完整参数与响应形状见 docs。

## 常见陷阱（详见 docs 末尾）

- 「Unexpected token 'export'」→ 用上述源码形态直接导入即可（导入时自动打包）。
- 状态栏文本不会自动刷新 → 改文案需以同 id 重新 `register`。
- `/grep` 载荷是 `{ files: [{ rel, hits: [{ ln, text }] }] }`；`/read` 内容在 `data.content`。
- CRLF 已由宿主归一为 LF；字节数取 `data.size`；>8MB 与二进制会被拒绝（按 0 处理并提示）。
