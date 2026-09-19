# plugin-authoring — 面向 AI 助手的插件作者资源（随主包发布，经 host 静态路由对外提供）

本目录的文件由 `scripts/build.mjs` 拷入 `lib/web/assets/`，运行时可被用户的 AI 工具直接拉取：

| 源文件 | 运行时 URL | 用途 |
| --- | --- | --- |
| `plugin-skeleton.js`（源码形态） | `GET /api/dsh-file-workbench/plugin-src?k=_skeleton`（自动打包后的 bundle，可直接导入试用） | 完整可改写的插件骨架 |
| `check-plugin.mjs`（自包含） | `GET /api/dsh-file-workbench/assets/plugin-authoring-check.js` | 静态自检脚本（本地 Node 跑） |

> `plugin-skeleton.js` 是**真·源码形态示例**（与 packages/*.js 一致），打包后即为 `_skeleton`；
> 请勿在本目录放裸 `.js`——`plugin-src` 会按文件名直出，未打包源码没有外壳。
