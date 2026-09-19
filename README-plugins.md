# plugins — DSH 文件编辑器插件套件（纯 JS 单文件）

`plugins/` 目录是 `dsh-file-workbench-lib` 的一部分：13 个对标 VS Code 的小插件，全部基于
Activity Bar 注入 API（`window.__dshFileWorkbenchVSCode__`）实现，原生 DOM、框架无关
`mount(el, ctx)`。**无 npm 包结构、无版本管理、目录内只有 .js 插件本身**——每个插件就是
`plugins/<项目名>.js` 一个文件，不再有「内置 / 外部候选」分区。

## 已含插件

| 文件 | 能力 | 依赖契约版本 |
| --- | --- | --- |
| `find-references.js` | 引用查找：跟随光标取词 → `/grep` 全词搜项目 → 点击跳转 | v1 |
| `bookmarks.js` | 书签：切换当前行、按项目持久化(`/plugin-data`)、gutter 标记、列表跳转 | v1 |
| `linter.js` | 外部诊断：跑可配置命令(`/git/run`) → 解析 file:line:col → 波浪线 + 问题面板 | v1 |
| `todo-tree.js` | TODO 面板：`/grep` 正则扫 TODO/FIXME/HACK(可配置) → 分组树 + 当前文件高亮 | v1 |
| `gitlens-lite.js` | Git 追溯：`git blame --porcelain` → 行尾幽灵注释 + 作者/时间列表 | v1 |
| `outline.js` | 文件大纲：缓冲符号启发式提取 + 跳转 | v1 |
| `regex-highlight.js` | 正则高亮：当前缓冲 mark + prev/next 导航 | v1 |
| `json2interface.js` | JSON → TS interface：缓冲/选区推断，复制/插入 | v1 |
| `md-preview.js` | Markdown 预览：零依赖转义渲染 | v1 |
| `hex-viewer.js` | 十六进制查看：`/read` 文本转字节三栏 | v1 |
| `local-history.js` | 本地历史：文档变更防抖快照 → `/plugin-data`，对比/恢复 | v1 |
| `project-stats.js` | 项目统计：后台扫描文件规模/类型分布 → 侧栏图表视图 | v1 |
| `capability-guide.js` | 能力手册：12 组可点跑的宿主开放能力演示 | v1 |

> **装饰通路**：CM6 被打进宿主私有 chunk，页内自行 import 拿到的是不同实例，故装饰类插件统一走
> v1 宿主装饰工厂 `ctx.editor.createDecorations(spec)`——只传纯 JSON spec，由宿主编译成扩展。

## 写法约定

- 顶层只允许三种导出：`export const meta = {...}`、`export const inject = []` 与
  `export function apply(_ctx)`；不得有顶层 `import`。
- **`meta` 是插件清单（必填）**——「插件管理」列表的名称/描述文案唯一来源：
  ```js
  export const meta = {
      "name": "书签",                 // 显示名（中文），必填
      "version": "",                  // 版本串，可空
      "description": "切换光标行书签…", // 中文描述，必填
      "nameEn": "Bookmarks",          // 英文名（EN 模式，缺省回退 name）
      "descriptionEn": "DSH file editor plugin: … Counterpart of VS Code Bookmarks."
  };
  ```
  必须是纯 JSON 风格对象字面量（双引号、无注释、无尾逗号）——打包器静态求值并校验，
  缺 name/description 直接构建失败。**不要手写 `id`**：loader id 固定生成为 `dsh-fw.<裸文件名>`。
  `descriptionEn` 建议以「DSH file editor plugin: …」开头、以「Counterpart of VS Code XXX.」收尾，
  面板 EN 模式会从中抽取发布方展示。
- `apply()` 里直读 `window.__dshFileWorkbenchVSCode__` 并 `activityBar.register(buildView())`。
- 视图契约 `{id, title:{zh,en}, description, icon, order, when(ctx), mount(el,ctx)}`（apiVersion=1）。
- 样式经 `<style id="dsh-xx-styles">` 注入，颜色只用宿主主题 token（`--dsh-*`，见 `src/vue/styles.css`），
  务必带兜底值；**不要使用未定义的 token**（如 `--dsh-fg-dim`，会破坏浅色主题）。

## 打包 / 发布

无需单独构建：`npm run build`（仓库根）执行 `scripts/pack-plugins.mjs`——扫 `plugins/*.js`
内存打包（规则真源 `plugins/pack-core.mjs`，与运行期 `src/shared/plugin-meta.ts` 逐字节同构），
直写 `lib/web/plugin-src/` + `dist/plugin-src/`（不落中间产物）：

```js
window.__ModuleLoader__.manifest({ "id": "dsh-fw.bookmarks", "name": "书签", ... }); // 清单，读它不需执行插件代码
window.__ModuleLoader__.load({
  id: "dsh-fw.bookmarks",
  inject: [],                                   // 由源码 export const inject 静态求值
  factory: (require) => { ...; return { apply, meta }; },
});
```

同时生成各目录的 `.pack-meta.json`（清单汇总）与**仓库根** `registry.json`。「插件管理 →
检查远端」在线枚举 GitHub 本仓库 `plugins/` 目录（api.github.com contents，5 分钟缓存），
条目 url 指向同源 `/api/dsh-file-workbench/plugin-src?k=<name>`（bundle 随包发布，离线也能装）；
在线失败回退包根 `registry.json`。前端 bootstrap 经 host `GET /plugin-index`（清单）+
`GET /plugin-src?k=<name>`（bundle）运行时推导种子，一键启用即运行时加载。

> 改插件只动 `plugins/<name>.js` 后重新 `npm run build` → `node scripts/sync-to-profile.mjs web`
> → 重启 `dsh web`。新增插件想让用户在线看到，须把 `plugins/` 改动 push 到 master。
