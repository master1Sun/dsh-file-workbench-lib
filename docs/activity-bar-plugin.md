# 文件编辑器 Activity Bar 插件注入说明

文件编辑器（仿 VS Code 面板）左侧的竖向图标条（Activity Bar）支持外部插件注册自定义视图。
内置三个视图（文件 / 搜索 / Git 提交记录），注册的插件视图会按顺序出现在它们下方。

- 注入方式：`window.__dshFileWorkbenchVSCode__.activityBar.register(view)`
- 技术要求：**无**。挂载契约是框架无关的 `mount(el, ctx)`，Vue / React / 原生 JS 均可
- 信任边界：该 API 页面上任何脚本都可调用 —— 能注册 = 宿主加载了你的脚本（与
  `__dshVSCodeMountPane__` 同一暴露级别）

## 快速开始

在任意脚本（DSH 宿主加载的插件 bundle / 用户脚本等）中：

```js
const api = window.__dshFileWorkbenchVSCode__;
if (api && api.apiVersion >= 1) {
  api.activityBar.register({
    id: "myPlugin.notes",
    title: "我的笔记",
    icon: "fileOut",
    order: 50,
    mount(el, ctx) {
      // 1) 渲染你的 UI 到 el（el 已占满左栏内容区）
      el.innerHTML = `
        <div style="padding:12px">
          <button class="open-readme">打开 README</button>
          <div class="dir"></div>
        </div>`;
      // 2) 通过 ctx 与编辑器互动
      el.querySelector(".dir").textContent = ctx.projectDir ?? "未打开项目";
      el.querySelector(".open-readme").onclick = () => {
        if (ctx.projectDir) ctx.openFile(`${ctx.projectDir}/README.md`, { line: 1 });
        else ctx.toast("info", "请先打开项目目录");
      };
      // 3) 订阅面板状态
      const off = ctx.onProjectChange((dir) => {
        el.querySelector(".dir").textContent = dir ?? "未打开项目";
      });
      // 4) 返回清理函数（切换走该视图 / 面板卸载时调用）
      return () => {
        off();
        el.replaceChildren();
      };
    },
  });
}
```

注册成功后，每个已挂载的编辑器面板（含分栏 / 浮窗）图标条上立即出现新图标；
点击即挂载你的视图，再点击其他图标时自动调用你返回的清理函数。

## ActivityView 契约

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `id` | `string` | 唯一 id，建议带插件命名空间（如 `"xxx.notes"`）。**同 id 重复注册 = 覆盖**（幂等，可用于热更新） |
| `title` | `string` | 图标 hover 提示；无合法图标名时取首字符显示在图标位 |
| `icon` | `string?` | 图标名，复用工作台内置图标集（`folder` / `search` / `git` / `code` / `fileOut` / `clock` / `save` / `terminal` 等）。缺省或非法名回退为 title 首字符 |
| `order` | `number?` | 排序权重，小的靠前（缺省 0，内置视图之后） |
| `mount` | `(el: HTMLElement, ctx: ActivityContext) => void \| (() => void)` | 挂载函数。`el` 已占满左栏内容区（容器可滚动）。返回清理函数则由面板在切走/卸载时调用 |
| `when` | `(ctx: { projectDir }) => boolean` | 可见性谓词，例如「未打开项目目录时隐藏该图标」；缺省恒显示 |

## ActivityContext 契约（apiVersion: 1）

| 成员 | 说明 |
| --- | --- |
| `projectDir` | 当前项目目录（getter，读取即最新值）；未打开项目时为 `null` |
| `theme` | 当前主题 `"dark" \| "light"`（getter） |
| `onProjectChange(fn)` | 订阅项目切换；**立即回调一次当前值**。返回退订函数 |
| `onThemeChange(fn)` | 订阅主题切换；立即回调一次。返回退订函数 |
| `openFile(path, opts?)` | 在编辑器中打开文件（加入标签、加载内容）；`opts.line` 打开后跳到该行 |
| `openDiff(title, lines)` | 以 diff 伪标签展示文本行，格式同 `git diff`（`+` 新增 / `-` 删除 / `@@` hunk 头），复用内置 diff 着色 |
| `toast(level, msg)` | 右下角统一消息提示；`level`: `"ok" \| "info" \| "error"` |

## 行为须知

1. **重挂载**：切换走再切回插件视图会重新执行 `mount`（面板不保留插件内部状态）；
   需要保留的状态请由插件自行缓存（如存到模块级变量）。
2. **多面板**：编辑器面板可同时挂多份（DSH 分栏 / 浮窗），一次注册所有面板都会出现；
   每个 `el` 独立，互不干扰。
3. **生命周期**：注册表在模块级，编辑器面板卸载再挂载（切换 DSH 右侧 tab）**不会丢注册**；
   `unregister(id)` 可彻底移除（图标消失，激活中的视图会被卸载并调用清理函数）。
4. **主题**：插件的 DOM 在工作台变量树下，可直接用 `var(--dsh-fg)` / `var(--dsh-bg2)` 等
   token 自动跟随深浅色；或监听 `onThemeChange` 自行处理。
5. **DOM 隔离**：`el` 不是 shadow root，插件样式请自带命名空间类名（如 `myplugin-xxx`），
   避免与工作台或其他插件冲突。

## API 参考（lib 侧）

- 注册表实现：`src/vue/stores/activityBar.ts`（`registerActivityView` / `unregisterActivityView` / `listActivityViews` / `ActivityContext` / `ActivityView` 类型）
- 面板集成：`src/vue/components/business/vscode/VSCodePane.vue`（扩展图标渲染 + 动态挂载）
- dev 演示插件：`stores/activityBar.ts` 内 `demo.hello`（仅 `import.meta.env.DEV` 注册，可作参考实现）

## 示例：结合全局内容搜索做一个「TODO 列表」插件

```js
window.__dshFileWorkbenchVSCode__.activityBar.register({
  id: "todo.finder",
  title: "TODO 列表",
  icon: "search",
  when: (ctx) => !!ctx.projectDir, // 未打开项目时隐藏
  async mount(el, ctx) {
    const list = document.createElement("div");
    list.style.cssText = "padding:8px;font-size:12px;color:var(--dsh-fg,#c9d1d9)";
    el.appendChild(list);
    // 用工作台 API 扫描项目文件，把命中 TODO 的行做成可点击列表
    const res = await fetch(`/api/dsh-file-workbench/grep?dir=${encodeURIComponent(ctx.projectDir)}&q=TODO`).then(r => r.json());
    for (const hit of res.hits ?? []) {
      const row = document.createElement("div");
      row.textContent = `${hit.file}:${hit.line}`;
      row.style.cursor = "pointer";
      row.onclick = () => ctx.openFile(hit.file, { line: hit.line });
      list.appendChild(row);
    }
  },
});
```

> 上例的接口路径仅为示意，实际请使用工作台 host 提供的搜索接口或你自己的服务。
