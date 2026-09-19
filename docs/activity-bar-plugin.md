# 文件编辑器 Activity Bar 插件注入说明

文件编辑器（仿 VS Code 面板）和文件工作台左侧列表都支持外部插件注册自定义视图，二者使用完全独立的注册表。
编辑器内置三个视图（文件 / 搜索 / Git 提交记录），工作台内置文件导航视图；注册的插件视图会按顺序出现在内置视图下方。

在文件工作台中，用户视图只替换右侧主区域：用户注册按钮嵌入原有左侧列表的“用户插槽”分组，与文件导航同级；该分组可单独折叠。原有左侧导航、命令栏和状态栏继续保留并可使用；右侧在文件列表与用户内容之间切换，不与用户内容混用。点击文件按钮后恢复文件列表。

- 文件编辑器注入：`window.__dshFileWorkbenchVSCode__.activityBar.register(view)`
- 文件工作台注入：`window.__dshFileWorkbenchWorkbench__.activityBar.register(view)`
- 技术要求：**无**。挂载契约是框架无关的 `mount(el, ctx)`，Vue / React / 原生 JS 均可
- 信任边界：该 API 页面上任何脚本都可调用 —— 能注册 = 宿主加载了你的脚本（与
  `__dshVSCodeMountPane__` 同一暴露级别）
- 当前契约版本 **apiVersion: 1**：视图注入 +
  activeFile 感知 + 命令 + 状态栏项/扩展菜单 + 工作台后台任务/独立扩展菜单 + 编辑器内部交互门面
  （`ctx.editor`：缓冲区读写 / 光标选区 / `createDecorations` 装饰工厂）全部属于 v1 契约

## 快速开始

在任意脚本（DSH 宿主加载的插件 bundle / 用户脚本等）中：

```js
const api = window.__dshFileWorkbenchVSCode__;
if (api && api.apiVersion >= 1) {
  api.activityBar.register({
    id: "myPlugin.notes",
    title: { zh: "我的笔记", en: "My Notes" },
    description: { zh: "记录项目开发笔记", en: "Project development notes" },
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

注册成功后，视图只会出现在对应目标：编辑器注册只影响编辑器，工作台注册只影响工作台；
点击即挂载你的视图，再点击其他图标时自动调用你返回的清理函数。

在文件工作台中，`ctx.openFile(path)` 会打开宿主的文件预览；编辑器中的同一调用则打开编辑器标签。

### 感知当前激活文件

编辑器面板的 `ctx` 额外提供 `activeFile` / `listOpenFiles()` / `onDidChangeActiveFile(fn)`，
让插件跟随用户正在编辑的文件（例如做「当前文件的引用列表」「按语言切换工具」）。这些成员仅在
编辑器 `ctx` 上有效（v1 契约即含，可按 `typeof ctx.onDidChangeActiveFile === "function"` 防御性判断）：

```js
mount(el, ctx) {
  if (ctx.onDidChangeActiveFile) {
    const off = ctx.onDidChangeActiveFile((path) => {
      // path = 当前激活文件绝对路径或 null
      el.querySelector(".cur").textContent = path ?? "无激活文件";
    });
    return () => { off(); el.replaceChildren(); };
  }
}
```

### 编辑器内部交互门面 `ctx.editor`

编辑器面板的 `ctx` 额外提供 **`editor`** 门面——把当前激活文件的 CodeMirror 6 视图以最小 API 暴露出来，
对标 VS Code 的 `window.activeTextEditor`。有了它，插件才能读**未保存缓冲区**、跟随**光标/选区**、
**应用编辑（保留撤销栈）**、注入**装饰**（错误波浪线 / gutter 图标 / 行内 hint）——即补全 IntelliSense、
linter、CodeLens、rename 预览这类"VS Code 内核体验"的地基。这些成员仅在**编辑器** `ctx` 上有效，
工作台 `ctx` 无此成员。用 `!!ctx.editor` 探测后再调用：

| 成员                            | 说明                                                                                                                                                             |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `view`                        | 当前激活文件的 CodeMirror `EditorView`（getter；无标签 / 卸载期间为 `null`）。高级用法直接用它 `state` / `dispatch`                                                                       |
| `getText()`                   | 当前缓冲区全文（**含未保存改动**）；等价 `view?.state.doc.toString()`                                                                                                            |
| `isDirty()`                   | 该文件是否有未保存改动（对标 `document.isDirty`）                                                                                                                             |
| `onDidChangeTextDocument(fn)` | 订阅文档变更（仅 `docChanged` 触发），回调带 `{ text, changes }`；立即以当前内容回调一次。返回退订                                                                                             |
| `getSelection()`              | 当前选区（CM `EditorSelection`，支持多光标）；无视图时 `null`                                                                                                                   |
| `onDidChangeSelection(fn)`    | 订阅选区变化；立即以当前选区回调一次。返回退订                                                                                                                                        |
| `applyEdit(changes)`          | 走 `view.dispatch({ changes })` 应用编辑，**保留撤销栈**。`changes` 为 CM 风格数组 `[{ from, to?, insert? }]`；无视图返回 `false`                                                     |
| `setDecorations(deco)`        | 注入 / 清除插件装饰层：传入插件用 `@codemirror/view` 构建好的**扩展**（`Decoration` + `ViewPlugin`/`StateField`），传 `null` 清除。独立于内置查找高亮，随文件切换自动显隐。**仅 Cordis 插件适用**（见下条限制）            |
| `createDecorations(spec)`     | **宿主侧装饰工厂**。传入纯 JSON `spec = { items: DecorationItem[] }`，由宿主用真实 CM6 构造并返回不透明句柄 `{ extension, update(items) }`；首建即应用到当前激活文件，`update()` 就地重绘。同源页插件的**唯一可用装饰路径** |

> **透传 CodeMirror 原生对象**：门面刻意复用 CM6 的 `EditorView` / `EditorSelection` / `ChangeSet` 等类型，
> 不另造抽象。**但注意**：workbench 把 `@codemirror/view` / `@codemirror/state` 打进私有 vendor chunk、
> 未对同源页导出全局。**同源页脚本自行 `import` CM6 拿到的是不同实例**，其 `Decoration`/`ViewPlugin`
> 与编辑器实际使用的不是同一份，`setDecorations` 必然失效。故：
> 
> - **Cordis 插件**（走框架无关 `mount`，能共享宿主 CM6 实例）→ 可用 `setDecorations(自建扩展)`；
> - **同源页插件** → 必须改用 `createDecorations(spec)`，只传纯 JSON，样式靠语义 `category` 或自带 `className`。
> 
> `DecorationItem`：`{ type: "mark"|"gutter"|"widget", start: {offset?|line?,character?}, end?, category?, message?, className? }`；
> `category` ∈ `error|warning|info|hint|bookmark|highlight|deprecated`（决定默认波浪线/gutter 颜色）。

```js
const api = window.__dshFileWorkbenchVSCode__;
if (api) {
  api.activityBar.register({
    id: "myPlugin.lint",
    title: { zh: "外部 Linter", en: "External Linter" },
    icon: "search",
    async mount(el, ctx) {
      const ed = ctx.editor;
      if (!ed || !ed.view) return;
      // 同源页插件：只传纯 JSON，交给宿主装饰工厂（不 import CM6）。
      // 这里示意：把每行 "TODO" 标成警告波浪线 + gutter 圆点。
      let handle = null;
      const refresh = () => {
        const doc = ed.getText();
        const items = [];
        let offset = 0;
        for (const lineText of doc.split("\n")) {
          const col = lineText.indexOf("TODO");
          if (col >= 0) {
            const start = offset + col;
            items.push({ type: "mark", start: { offset: start }, end: { offset: start + 4 }, category: "warning", message: "TODO" });
            items.push({ type: "gutter", start: { offset: start }, category: "warning" });
          }
          offset += lineText.length + 1;
        }
        if (!handle) handle = ed.createDecorations({ items });
        else handle.update(items);
      };
      refresh();
      // 文档变更后重算
      const offDoc = ed.onDidChangeTextDocument(() => refresh());
      return () => {
        offDoc();
        handle?.update([]); // 清空当前文件装饰
      };
    },
  });
}
```

## 国际化文案

`title` 支持普通字符串，也支持按语言环境传入对象：

```js
{
  title: {
    zh: "项目工作台",
    en: "Project Workbench",
  },
}
```

文件工作台和文件编辑器都会显示当前语言对应的注入标题。
页面语言优先匹配完整 locale，其次按 `zh-*` / 非中文语言回退到 `zh` 或 `en`；普通字符串仍保持兼容。

## ActivityView 契约

| 字段      | 类型                                                                | 说明                                                             |
| ------- | ----------------------------------------------------------------- | -------------------------------------------------------------- |
| `id`    | `string`                                                          | 唯一 id，建议带插件命名空间（如 `"xxx.notes"`）。**同 id 重复注册 = 覆盖**（幂等，可用于热更新） |
| `title` | `string                                                           | Record<string, string>`                                        |
| `mount` | `(el: HTMLElement, ctx: ActivityContext) => void \| (() => void)` | 挂载函数。`el` 已占满左栏内容区（容器可滚动）。返回清理函数则由面板在切走/卸载时调用                  |
| `when`  | `(ctx: { projectDir }) => boolean`                                | 可见性谓词，例如「未打开项目目录时隐藏该图标」；缺省恒显示                                  |

## ActivityContext 契约（apiVersion: 1）

| 成员                          | 起始版本 | 说明                                                                                          |
| --------------------------- | ---- | ------------------------------------------------------------------------------------------- |
| `projectDir`                | v1   | 当前项目目录（getter，读取即最新值）；未打开项目时为 `null`                                                        |
| `theme`                     | v1   | 当前主题 `"dark" \| "light"`（getter）                                                            |
| `activeFile`                | v1   | 当前激活标签对应的文件绝对路径（getter）；无激活文件时为 `null`                                                      |
| `onProjectChange(fn)`       | v1   | 订阅项目切换；**立即回调一次当前值**。返回退订函数                                                                 |
| `onThemeChange(fn)`         | v1   | 订阅主题切换；立即回调一次。返回退订函数                                                                        |
| `onDidChangeActiveFile(fn)` | v1   | 订阅激活文件切换；立即回调一次当前值。返回退订函数                                                                   |
| `openFile(path, opts?)`     | v1   | 在编辑器中打开文件（加入标签、加载内容）；`opts.line` 打开后跳到该行                                                    |
| `listOpenFiles()`           | v1   | 当前已打开的文件标签绝对路径列表（按打开顺序）                                                                     |
| `openDiff(title, lines)`    | v1   | 以 diff 伪标签展示文本行，格式同 `git diff`（`+` 新增 / `-` 删除 / `@@` hunk 头），复用内置 diff 着色                  |
| `toast(level, msg)`         | v1   | 右下角统一消息提示；`level`: `"ok" \| "info" \| "error"`                                              |
| `editor`                    | v1   | 编辑器内部交互门面（缓冲区读写 / 光标选区 / 装饰注入，含 `createDecorations` 宿主装饰工厂）；详见上节「编辑器内部交互门面」。**仅编辑器 ctx 提供** |

> 内测阶段契约统一为 v1（对外发布前不保留历史版本号）。后续新增成员一律向后兼容，届时再递增并在本表标注起始版本。

## 命令贡献点

除了注册视图，插件还能注册**可被调用的动作**——对标 VS Code 的 `commands.registerCommand`。
命令存在模块级表里，注册后不会自动改动编辑器行为，需由其他脚本 / 面板主动 `executeCommand(id, ...args)` 才生效。
适合「一个插件提供能力、另一个插件（或你自己的宿主逻辑）触发」的解耦场景。

window API 命名空间：`window.__dshFileWorkbenchVSCode__.commands`

| 方法                      | 说明                                                  |
| ----------------------- | --------------------------------------------------- |
| `register(id, handler)` | 注册命令（幂等：同 id 覆盖，支持热更新）。`handler` 返回值原样回传给 `execute` |
| `unregister(id)`        | 注销命令；返回是否存在并被移除                                     |
| `execute(id, ...args)`  | 执行命令；未注册的 id 静默返回 `undefined`（no-op）。处理器抛错向上冒泡给调用方  |
| `list()`                | 当前已注册命令 id 列表                                       |
| `has(id)`               | 是否已注册某命令                                            |

```js
const c = window.__dshFileWorkbenchVSCode__?.commands;
if (c) {
  // 注册：把「在当前激活文件所在目录开终端」做成一个可复用动作
  c.register("myPlugin.openTerminalHere", (...args) => {
    const dir = args[0] ?? null;
    // 你的实现……（此处仅示意，可结合 ctx.activeFile 推导目录）
    return { ok: true, dir };
  });
  // 触发（可在别的插件 / 宿主逻辑里）
  if (c.has("myPlugin.openTerminalHere")) {
    const r = c.execute("myPlugin.openTerminalHere", "/path/to/dir");
    console.log(r);
  }
}
```

> 命令 id 建议带插件命名空间（如 `"myPlugin.xxx"`），避免与其他插件冲突。

## 状态栏项贡献点

在「命令」之上，插件还能把命令**暴露成一个可点击条目**——注册后集中出现在编辑器**底部状态栏的「扩展」
弹出菜单**里，点击条目即自动 `execute(commandId, ctx)`。这就是命令的内置触发面：无需自己找地方放按钮，
也不用手写事件绑定。（历史上这些条目是平铺在状态栏上的按钮；现统一收进「扩展」入口，见下节。）

window API 命名空间：`window.__dshFileWorkbenchVSCode__.statusbar`

| 方法               | 说明                       |
| ---------------- | ------------------------ |
| `register(item)` | 注册状态栏项（幂等：同 id 覆盖）。契约见下表 |
| `unregister(id)` | 注销状态栏项（不存在时静默）           |
| `list()`         | 当前已注册状态栏项列表              |

`StatusBarItem` 契约：

| 字段           | 类型                                       | 说明                                                  |
| ------------ | ---------------------------------------- | --------------------------------------------------- |
| `id`         | `string`                                 | 唯一 id，建议带命名空间；同 id 覆盖                               |
| `text`       | `string`                                 | 条目文案（显示在「扩展」菜单里）                                    |
| `commandId`  | `string`                                 | 点击时执行的命令 id（须先经 `commands.register` 注册，否则点击为 no-op） |
| `tooltip`    | `string?`                                | 悬浮提示；缺省用 `commandId`                                |
| `order`      | `number?`                                | 排序权重（小的靠前；与扩展菜单项合并后统一按此升序排列）                        |
| `when(ctx?)` | `(ctx: { path, projectDir }) => boolean` | 可用性谓词，例如「有激活文件才可用」；为假时该条目在菜单里**置灰禁用**，缺省恒可用         |

点击时面板注入的上下文对象 `{ path, projectDir }`（均为最新值，可能为 `null`）会作为命令处理器的第一个入参。

```js
const api = window.__dshFileWorkbenchVSCode__;
if (api) {
  // 1) 先注册命令：收到条目点击时传入的 { path, projectDir }
  api.commands.register("myPlugin.countLines", ({ path }) => {
    if (!path) return;
    // 你的实现……（示意：统计当前文件行数并提示）
  });
  // 2) 再把它挂成「扩展」菜单条目，仅在有激活文件时可用
  api.statusbar.register({
    id: "myPlugin.countLines",
    text: "统计行数",
    commandId: "myPlugin.countLines",
    tooltip: "统计当前文件的行数",
    order: 50,
    when: (ctx) => !!ctx.path,
  });
}
```

> **多面板共用一条命令表**：分栏 / 浮窗的每份编辑器都会渲染同一个「扩展」入口、点击都打到同一份
> 命令注册表。若不希望多面板重复触发副作用，请在命令处理器内部自行去重。

## 扩展菜单贡献点

底部「扩展」弹出菜单是插件注册动作的统一归集处。除上一节的 `statusbar.register` 外，另有一组
语义完全相同、但**独立注册表**的方法 `statusbar.registerMenu` —— 二者最终都合并渲染进同一个「扩展」
菜单（按 `order` 升序混排），只是给插件两个可选的登记入口，便于把「常驻动作」和「分组动作」分开管理。

- 无任何注册项时，底栏不显示「扩展」入口；有条目时才出现，点开向上弹出。
- `when(ctx)` 为假的条目在菜单里**置灰禁用**（让用户仍能看到该动作存在、只是当前不可用）。

window API（挂在 `statusbar` 命名空间下的三个新方法）：

| 方法                   | 说明                                                   |
| -------------------- | ---------------------------------------------------- |
| `registerMenu(item)` | 注册扩展菜单项（幂等：同 id 覆盖，按 `order` 升序）。契约同 `StatusBarItem` |
| `unregisterMenu(id)` | 注销扩展菜单项（不存在时静默）                                      |
| `listMenu()`         | 当前已注册扩展菜单项列表                                         |

```js
const api = window.__dshFileWorkbenchVSCode__;
if (api) {
  api.commands.register("myPlugin.runTests", (ctx) => { /* … */ });
  // 底栏「扩展」菜单里出现一条，点击即 executeCommand
  api.statusbar.registerMenu({
    id: "myPlugin.runTests.item",
    text: "▶ 运行贡献点测试",
    commandId: "myPlugin.runTests",
    tooltip: "运行贡献点集成测试",
    order: 1,
  });
}
```

## 工作台扩展菜单贡献点（文件工作台）

上面两节的状态栏 / 扩展菜单都挂在**文件编辑器**上。**文件工作台**（`__dshFileWorkbenchWorkbench__`）
也有了自己的底部「扩展」弹出菜单——入口在面板左下角、后台任务按钮旁，点开向上弹出，逐条展示插件注册的
动作。**它与编辑器的两套注册表完全独立**：在工作台注册的条目不会出现在编辑器里，反之亦然；命令表
（`commands`）则仍是全局共享的一份。

window API 命名空间：`window.__dshFileWorkbenchWorkbench__.statusbar`

| 方法               | 说明                                        |
| ---------------- | ----------------------------------------- |
| `register(item)` | 注册工作台扩展菜单项（幂等：同 id 覆盖，按 `order` 升序）。契约见下表 |
| `unregister(id)` | 注销（不存在时静默）                                |
| `list()`         | 当前已注册的工作台扩展菜单项列表                          |

条目契约与编辑器的 `StatusBarItem` 一致（`id/text/commandId/tooltip/order/when`），只是传给命令处理器 /
`when` 谓词的上下文是 `{ path: null, projectDir }`——工作台没有「编辑器激活标签」概念，故 `path` 恒为
`null`，`projectDir` 为当前工作区根目录（未打开时为 `null`）。

```js
const wb = window.__dshFileWorkbenchWorkbench__;
if (wb) {
  wb.commands.register("myPlugin.wbAction", ({ projectDir }) => {
    if (!projectDir) return;
    // 你的实现……（示意：对当前工作区做某件事）
  });
  wb.statusbar.register({
    id: "myPlugin.wbAction.item",
    text: "对工作区执行操作",
    commandId: "myPlugin.wbAction",
    tooltip: "对当前工作区根目录执行操作",
    order: 50,
    when: (ctx) => !!ctx.projectDir, // 未打开工作区时置灰禁用
  });
}
```

> 与编辑器同理：无任何注册项时底栏不显示「扩展」入口；`when(ctx)` 为假的条目置灰禁用而非隐藏。

### 早期注册

插件脚本**先于本插件 Vue bundle 加载**也没问题：client 侧会先在 window 上放一套代理 API，
`statusbar.register` / `commands.register` 等调用被缓存，bundle 就绪后自动补放到真实注册表。
两点注意：

1. **用函数引用调用，不要解构/缓存方法**——代理的就绪切换是整体替换 window 上的对象，
   提前解构出来的旧函数引用不会跟着换：
   
   ```js
   // ✅ 始终经对象取方法
   window.__dshFileWorkbenchWorkbench__.statusbar.register(item);
   // ❌ 早期解构拿到的是旧代理引用，绑定后可能失效
   const { register } = window.__dshFileWorkbenchWorkbench__.statusbar;
   ```
2. **别依赖早期的 `list()` 回读**：代理在绑定前只反映影子表内容，最稳妥是在 UI 可见后再查询。

## 后台任务贡献点（文件工作台）

文件工作台自带一套「后台任务」系统——上传 / 压缩 / 解压等长操作会登记进底部状态栏的任务按钮，
点开可看运行中列表、历史与归档。**v1 契约即含**：外部插件也能把这套系统当作通用进度登记处复用——
自己的耗时操作（批量处理、拉取远端数据等）用 `start()` 登记，即可出现在同一个任务面板里，
用户统一可见、可追溯。

window API 命名空间：`window.__dshFileWorkbenchWorkbench__.backgroundTasks`

| 方法                    | 说明                                                                                            |
| --------------------- | --------------------------------------------------------------------------------------------- |
| `start(label, opts?)` | 发起一个后台任务，返回句柄 `{ step, updateLabel, done, fail }`。`opts`: `{ detail?, fileType?, fileSize? }` |
| `clearFinished()`     | 清除已结束任务（活跃历史先归档再清空）。返回 Promise                                                                |
| `clearAll()`          | 清空全部任务（含运行中）。返回 Promise                                                                       |

句柄方法：

| 方法                                                | 说明                         |
| ------------------------------------------------- | -------------------------- |
| `step(msg, file?, detail?, fileType?, fileSize?)` | 记录一个中间步骤（仅运行中生效），进入任务日志时间线 |
| `updateLabel(label)`                              | 修改任务描述文案（运行中展示与结束后记录同步更新）  |
| `done(msg?)`                                      | 标记成功（可带补充消息），任务转入历史        |
| `fail(msg?)`                                      | 标记失败（带原因）                  |

```js
const wb = window.__dshFileWorkbenchWorkbench__;
if (wb) {
  const task = wb.backgroundTasks.start("导出报告", { detail: "report.pdf" });
  // 异步推进：每完成一步记一条日志，最后收尾
  (async () => {
    try {
      for (let i = 1; i <= 3; i++) {
        await new Promise((r) => setTimeout(r, 500)); // 你的真实工作……
        task.step(`生成第 ${i} 页`, `page-${i}.png`);
      }
      task.done("已导出 3 页");
    } catch (e) {
      task.fail(String(e?.message ?? e));
    }
  })();
}
```

> **注入视图激活时后台任务仍可用**：在文件工作台里切到某个外部注入视图时，顶部命令栏会被禁用，
> 但底部状态栏**只置灰本地导航区（文件信息 / 视图切换）**，最左的后台任务按钮保持可点击、可查看——
> 因为插件很可能正往这里登记耗时任务，需要随时点开看进度。

## 运行时导入 `.js` 插件（插件管理视图）

除了「随宿主 profile 安装 cordis bundle」这条传统路径，文件编辑器还内置了一个**「插件管理」
Activity Bar 视图**（图标 puzzle，恒排在视图列表最后），让用户**直接把 `.js` 插件拖进浏览器即时
生效——无需安装、无需重启 `dsh web`**。官方 11 件套件插件（引用查找 / 书签 / 外部诊断 / TODO 面板 /
Git 追溯 / 大纲 / 正则高亮 / JSON 转接口 / Markdown 预览 / 十六进制查看 / 本地历史）列在该视图里，
可一键启用 / 停用；它们不再构建期内嵌，而是 bootstrap 时经 host `GET /plugin-index` +
`GET /plugin-src?k=<name>` 在运行时推导，不依赖 profile 安装。

### 支持的三种 `.js` 形态

1. **源码形态（最简，推荐手写 / AI 生成）**：与 `plugins/packages/*.js` 一致的三种顶层导出——
   `export const meta = {…}`（纯 JSON 字面量）+ `export const inject = []` +
   `export function apply(_ctx)`。导入时宿主**自动打包**成下述 loader bundle（与
   `npm run build` 同一套规则），名称/描述取自 `meta`，无需任何构建步骤。
2. **ModuleLoader bundle（与套件产物一致）**：顶层两段声明——先 `manifest(...)` 清单、再 `load(...)` 模块：
   
   ```js
   // 清单：纯数据。「插件管理」导入时只读它来填名称/描述/版本，无需执行任何插件代码。
   window.__ModuleLoader__.manifest({
     id: "my.plugin", name: "我的插件", version: "1.0.0",
     description: "……", nameEn: "My Plugin", descriptionEn: "… Counterpart of VS Code XXX.",
   });
   window.__ModuleLoader__.load({
     id: "my.plugin",
     factory: (require) => {
       function apply() {
         const api = window.__dshFileWorkbenchVSCode__;
         api.activityBar.register({ id: "my.view", title: "我的视图", icon: "code", order: 70, mount(el, ctx) { /* … */ } });
       }
       return { apply, inject: [] };
     },
   });
   ```
   
   「插件管理」会装一个 `__ModuleLoader__` shim 接住这两条：`manifest()` 归档元数据（列表显示
   `name/description/nameEn/descriptionEn/version`，缺清单时回退文件名），`load()` 登记模块、
   启用时取出 `factory` 执行 `apply()`。本仓库套件的写法见 `plugins/packages/*.js` 的
   `export const meta = {...}` 块——`plugins/pack.mjs` 打包时自动生成上面两段外壳。
3. **极简自注册脚本**：不套 loader，直接在顶层调
   `window.__dshFileWorkbenchVSCode__.activityBar.register(...)` 亦可被识别加载（列表回退文件名显示）。

> **给 AI 助手**：运行时可经宿主直接拉走作者资源——
> `GET /api/dsh-file-workbench/plugin-src?k=_skeleton`（完整可改写的源码形态骨架）与
> `GET /api/dsh-file-workbench/assets/plugin-authoring-check.js`（静态自检脚本，配合本地 Node
> 验证约定）。让本机 AI 工具读本文档 + 骨架即可产出可一键导入的插件。

> 插件的 `mount(el, ctx)` 契约、`ctx.editor` 门面、命令/状态栏贡献点等**与本文其余章节完全一致**——
> 运行时导入只是换了一种「把脚本喂给页面」的方式，能力不打折。

### 三种导入入口

- **导入本地 `.js`**：选择本机文件 → 读取文本 → 先静态读出其 `manifest(...)` 清单填列表元数据 → 立即执行并启用。
- **从 URL 导入**：填 `http(s)` 地址 → 经宿主 `POST /fetch-plugin` 服务端代拉（绕开浏览器 CORS，并对
  内网/环回地址做基础 SSRF 拦截、限 2MB）→ 读清单 → 执行并启用。
- **内置种子**：bootstrap 时经 host `/plugin-index`（清单）+ `/plugin-src`（bundle）推导进列表，默认「已停用」，勾选即启用。

### 启停 / 移除 / 持久化

- **启用**：执行插件代码，并按「注册表 diff」记录它新增的视图 / 命令 / 状态栏项 / 扩展菜单项归属。
- **停用**：据归属逐条 `unregister`，图标与贡献点即刻消失（激活中的视图会被卸载并调用其清理函数）。
- **移除**：先停用再从列表剔除（内置项也可移除＝彻底隐藏）。
- **持久化**：导入项连同**源码快照**写入 `/persist?k=dsh-fw.userPlugins`；下次打开编辑器自动重新加载并
  恢复上次的启用状态。URL 来源离线时仍可用（用的是快照，不重新联网）。

### 信任边界

运行时导入等价于「用户往页面注入任意脚本」——被导入的 `.js` 拥有**当前页面的全部权限**（可读 DOM、
调宿主 REST、发网络请求）。因此**只应导入可信来源**；这与用户自行在控制台执行脚本是同一暴露级别，
宿主不做沙箱隔离（设计上明确取舍）。若两个插件注册了同名 id，后注册者覆盖前者（同既有语义），故插件
id 务必带命名空间前缀。

## 行为须知

1. **重挂载**：切换走再切回插件视图会重新执行 `mount`（面板不保留插件内部状态）；
   需要保留的状态请由插件自行缓存（如存到模块级变量）。
2. **多面板**：编辑器面板可同时挂多份（DSH 分栏 / 浮窗），一次注册所有面板都会出现；
   每个 `el` 独立，互不干扰。文件工作台当前是单实例面板。**状态栏项与命令表同理**——注册一次，
   所有编辑器面板的状态栏都会出现该按钮，且共享同一份命令表。
3. **生命周期**：注册表在模块级，编辑器面板卸载再挂载（切换 DSH 右侧 tab）**不会丢注册**；
   `unregister(id)` 可彻底移除（图标消失，激活中的视图会被卸载并调用清理函数）。
4. **主题**：插件的 DOM 在工作台变量树下，可直接用 `var(--dsh-fg)` / `var(--dsh-bg2)` 等
   token 自动跟随深浅色；或监听 `onThemeChange` 自行处理。
5. **DOM 隔离**：`el` 不是 shadow root，插件样式请自带命名空间类名（如 `myplugin-xxx`），
   避免与工作台或其他插件冲突。
6. **滚动**：注入容器 `el` 自身已可纵向滚动（`overflow-y:auto`）。若你的内容包在某个
   `overflow:hidden` 的包裹层里（常见于 Tailwind preflight / reset.css 的全局规则），内容会被
   裁掉且外层不出现滚动条 —— 表现为「鼠标滚不动」。宿主会在挂载后自动把这类**确实溢出却被裁切**
   的包裹层改回可滚动（不影响你有意为之的内部滚动区）；一般无需处理，如需自管可自行设置。
7. **命令抛错**：状态栏按钮点击时，命令处理器抛出的异常会被面板捕获并以 error toast 呈现，
   不会中断编辑器；主动 `executeCommand` 调用则异常向上冒泡给调用方。

## 宿主 HTTP API 全清单（已实现，按开放程度分级）

前缀统一 `/api/dsh-file-workbench`，同源直连。除特殊说明外响应都是 `{ ok, data, error? }` 信封；
下文只写 `data` 的形状。路径参数一律是**绝对路径**（本地 `D:\...` / `/home/...`），或 SSH 引用
`ssh://<hostId>/<远端POSIX路径>`（`/files /read /save /list /detail` 等 fs 接口与 git/svn 均透明支持两种）。
可选 `key` 参数用于多窗口工作区（缺省即当前窗口根）。

⚠️ **安全提示**：宿主无鉴权、同源即可调用——插件能调的边界等于用户自己开控制台的边界（见上节
「信任边界」）。标 🔒 的接口涉及凭据机密或破坏性系统操作，**不建议插件调用**。

### 推荐开放

| 端点 | 方法 | 参数 | `data` |
| --- | --- | --- | --- |
| `/root` | GET/POST | GET `?key`；POST body `{ path }`（`ssh://` 串直接作为根） | `{ root }` |
| `/list` | GET | `?path`（缺省=根，任意目录可列） | 目录列表 `{ entries, root, crumbs, truncated, inaccessible }` |
| `/parent` | GET | `?path` | `{ root, parent }` |
| `/browse` | GET | `?path`（缺省 home） | 同 `/list` 但 entries 附带详情（大小/mtime） |
| `/mycomputer` | GET | — | `{ items }`（盘符/Home/下载/工作区顶层入口） |
| `/drives` | GET | — | `{ drives }`（含容量与卷标） |
| `/files` | GET | `?path`（缺省=根） | 项目文件相对路径索引（「快速打开」用，模糊匹配在前端做） |
| `/read` | GET | `?path&encoding=&bom=1\|0` | `{ content, size, mtime, encoding, hasBom, eol, binary }`；行尾已归一为 LF；>8MB 报 413 |
| `/save` | POST | `{ path, content, encoding?, hasBom?, eol?, expectedMtime?, force? }` | `{ path, mtime }`；磁盘已被别处改写且未 `force` → **412** `{ code:"mtime-conflict" }` |
| `/search` | GET | `?q&path&limit(≤2000)&case=1&regex=1` | `{ matches: rel[], byContent: rel[], snippets: {rel:片段}, truncated, scope }`（rel 相对搜索范围） |
| `/grep` | GET | `?q&path&sub&case=1&regex=1&word=1&include=&exclude=` | `{ files: [{ rel, hits: [{ ln, text }] }], total, truncated, scope }`；`sub` 限定子目录，rel 仍相对项目根 |
| `/detail` | GET | `?path` | stat 详情（size/mtime/目录标志等） |
| `/download` | GET | `?path&inline=1` | 原始字节流（`inline=1` 供 PDF/图片 iframe 内联加载），非 JSON 信封 |
| `/_read-image` | GET | `?path` | 原始 image/* 流；非图片扩展名 400 |
| `/openExternal` | POST | `{ path }` | `{ path }`（系统默认程序打开） |
| `/plugin-data` | GET/POST | GET `?k`；POST `{ k, v }`（v ≤8MB） | GET 回 value（不存在为 `null`）；key 建议 `dsh-fw.<插件>.<hash(projectDir)>` |
| `/plugin-index` | GET | — | 内置插件清单数组 `[{ name, id, titleZh, description }]` |
| `/plugin-registry` | GET | — | 在线注册表数组 `[{ name, url, title?, description?, descriptionEn? }]`（离线回退随包 registry.json） |
| `/plugin-src` | GET | `?k=<name>` 或路径形态 `/plugin-src/<name>.js` | bundle 原文（JavaScript，不套信封），可互读其他插件源码作参考 |
| `/plugin-doc` | GET | `?`（裸路径）或 `/plugin-doc/<name>.md` | 作者文档原文（markdown，不套信封） |

### 文件 CRUD（受工作区守卫：root 外写需用户开启「允许操作工作区外」prefs.allowOutsideRoot，否则 403；受保护系统目录恒 403）

| 端点 | 方法 | 参数 | `data` |
| --- | --- | --- | --- |
| `/mkdir` | POST | `{ path }` | `{ path }`（解析后安全路径） |
| `/touch` | POST | `{ path }` | `{ path }` |
| `/rename` | POST | `{ from, to }` | `{ path: to }`（跨目录=移动） |
| `/copy` | POST | `{ src, destDir }` | `{ path: dest }`（重名自动加后缀） |
| `/remove` | DELETE | `?path` | `{ path }` —— **移入系统回收站**，可经 recycle-* 恢复 |
| `/upload` | POST | query `?dir=&name=`，body 为**原始文件字节**（非 JSON） | `{ path }` |
| `/compress` | POST | `{ path, to? }`（to 缺省=同目录 `<name>.zip`，重名自动避让） | `{ path: zip }` |
| `/extract` | POST | `{ zipPath, destDir? }`（destDir 缺省=zip 所在目录） | `{ destDir, count }` |
| `/replace` | POST | `{ scope?, q, replacement, caseSensitive?, regex?, wholeWord?, preserveCase?, include?, exclude? }` | `{ changed: [{ rel, count }], files, replacements, truncated }`；**严格限工作区根内**，ssh 根 501 |

### Git（读写均可；ssh 引用在远端服务器上执行 git）

GET 传 `?path=`，POST 放 body `{ path, ... }`。

| 端点 | 方法 | 额外参数 | 说明 |
| --- | --- | --- | --- |
| `/git/status` | GET | — | 目录 git 状态徽标 |
| `/git/panel` | GET | — | 仓库级快照（面板数据） |
| `/git/log` | GET | `?count`(缺省 20) | 提交历史 |
| `/git/diff` | GET | — | 单路径改动文本 |
| `/git/config` | GET/POST | POST `{ name, email }` | user.name/email 读写 |
| `/git/gh-releases` | GET | — | GitHub Releases 列表（远端 skipped） |
| `/git/add` `/unstage` `/ignore` `/discard` | POST | — | 暂存/取消暂存/加 ignore/还原 |
| `/git/commit` | POST | `{ message }` | 提交 |
| `/git/branch` | POST | `{ action: "create"\|"checkout"\|"delete", name }` | 分支操作 |
| `/git/sync` | POST | `{ action: "pull"\|"fetch"\|"push" }` | 同步 |
| `/git/clone` | POST | `{ url, dir, name?, depth?, accountId? }` | 克隆到新目录（dir 可为 ssh 引用→远端克隆；已存在 409） |
| `/git/gh-release` | POST | `{ tag, name?, body? }` | 发布 GitHub Release（仅本机） |
| `/git/run` | POST | `{ args: string[] }` | **任意 git 子命令**（如 `["blame","-L","1,10","file"]`） |

### SVN（与 git 对称，本机 + ssh 远端 exec）

| 端点 | 方法 | 参数 | 说明 |
| --- | --- | --- | --- |
| `/svn/info` | GET | `?path` | 探测工作副本 + svn 环境 |
| `/svn/checkout` | POST | `{ url, dir, name?, revision?, accountId? }` | 检出到新目录 |
| `/svn/run` | POST | `{ path, args: string[] }` | 任意 svn 子命令（自动注入匹配账号凭据） |

### 常驻终端（ConPTY / 远端 pty）

会话按 `session` id 隔离、跨连接常驻；`kind:"ssh"` 会话手动输密码登录（输入被截获为口令行）。

| 端点 | 方法 | 参数 | 说明 |
| --- | --- | --- | --- |
| `/exec-open` | POST | `{ session, kind:"local"\|"ssh", shell?("cmd"\|"powershell"), cwd?, hostId?, remote? }` | 建立/复用会话，回 `{ cwd, kind }`（**必须核对 kind**，老宿主会把 ssh 静默建成本机） |
| `/exec-mux-ws` | WS 升级 | 一条连接覆盖全部会话，帧带 `session` 字段 | 输出流主链路（SSE 兜底：`/exec-mux-stream`） |
| `/exec-stream` | GET(SSE) | `?session&shell&cwd&key` | 单会话输出流 |
| `/exec-input` | POST | `{ session, data }` | 写 stdin（`\r` 即执行） |
| `/exec-resize` | POST | `{ session, cols, rows }` | 尺寸上报（全屏程序需要） |
| `/exec-kill` | POST | `{ session }` | 终止（杀进程树） |
| `/term-env` | GET | — | `{ elevated }` 宿主是否提权 |

> 插件跑一次性命令的更简路径：`/git/run` 只收 git；要跑任意程序就 `/exec-open` + `/exec-input` +
> 监听 mux 流，或考虑把命令包装成 git alias。

### 推送通道 WebSocket：`/push`

一条连接三类订阅（JSON 文本帧）：

```
发 { type:"watch", paths:[...] }          → 收 { type:"changed", items:{ [path]:{mtimeMs,size}|null } }   // 落盘改动，1s 采样，null=已删除
发 { type:"session-watch", id:string|null } → 收 { type:"session-ev", ev:{type:"snapshot"|"files"|"status",...} } // AI 会话触碰的文件
发 { type:"ssh-watch", ids:[...] }        → 收 { type:"ssh-status", items:{ [id]:{alive,error?} } }
发 { type:"ssh-check", ids:[...] }        → 无条件立刻回推一次 ssh-status
```

首次 watch 只记基线不推送；「外部改动检测」「SSH 连通」都由此驱动，插件无需轮询。
（SSE 等价旧出口 `/stream/session?session=` 仍在，但占 HTTP 连接池配额，优先用 WS。）

### 谨慎开放 / 不建议插件使用

- `/persist`：GET `?k` / POST `{k,v}` —— 键有**白名单**（prefs/favorites/recent/layout/vscode/…），
  其中 `ssh-hosts`、`accounts` 两个键**含明文凭据文件内容**，插件不应读写；跨重启存储请一律用 `/plugin-data`。
- `/task-archives`：GET（`?list` 只回日期）/ POST `{ map }` **整体覆写**后台任务归档——会冲掉宿主自己的记录，勿动。
- `/recycle-list` `-count` `-restore` `-delete` `-empty`：系统回收站全家桶；`-delete`/`-empty` 不可逆，
  插件最多该用 `/recycle-list`+`/recycle-restore` 做「撤销删除」类功能。
- 🔒 `/ssh/*`（add/update/remove/test/trust/cache/ping）与 🔒 `/accounts/*`（增删改/测试/写入系统）：
  主机与凭据管理属宿主 UI 职责；唯一例外 `/accounts/match?kind=git|svn&url=`（只回抹密后的命中账号，
  可用于提示「本仓库将用 xxx 提交」）。
- `/subagent/spawn`：POST `{ path?, isDir?, instruction?, session? }` → 拉起官方 DSH 子代理会话。
  能力很强但会消耗用户会话资源，插件调用前应明确征得同意。
- `/fetch-plugin`：POST `{ url }` 服务端代拉插件源码（SSRF 拦截 + 2MB 上限）——插件管理专用。

## API 参考（lib 侧）

- 注册表实现：`src/vue/stores/activityBar.ts`（编辑器的 `registerActivityView`，工作台的
  `registerWorkbenchActivityView`，以及对应的注销/列表 API；命令贡献点 `registerCommand` /
  `executeCommand` / `unregisterCommand` / `listCommands` / `hasCommand`；状态栏项贡献点
  `registerStatusBarItem` / `unregisterStatusBarItem` / `listStatusBarItems`；扩展菜单贡献点
  `registerExtensionMenuItem` / `unregisterExtensionMenuItem` / `listExtensionMenuItems`；工作台扩展菜单
  贡献点（独立注册表）`registerWorkbenchStatusBarItem` / `unregisterWorkbenchStatusBarItem` /
  `listWorkbenchStatusBarItems`；后台任务贡献点 `backgroundTasks.start` 桥接到 `composables/session/tasks`）
- 面板集成：`src/vue/components/business/vscode/VSCodePane.vue`（编辑器底栏「扩展」弹出菜单 + 状态栏项渲染）
  与 `src/vue/components/business/explorer/StatusBar.vue`（工作台底栏「扩展」弹出菜单，独立注册表；
  ExplorerPane 负责扩展视图挂载；注入激活时底部仅置灰本地导航区、保留后台任务按钮 + 「扩展」入口可点击）
- **v1 编辑器门面 `ctx.editor`**：契约见 `stores/activityBar.ts` 的 `EditorAccess`。桥接点——
  `stores/vscode.ts` 增加按槽活视图注册表（`setLiveEditorView` / `getLiveEditorView`）与文档/选区变更
  多播总线（`onEditorDocChange` / `onEditorSelectionChange` + `emit*`）；`CodeEditor.vue` 增加 `extCompartment`
  装饰层（`setExtension` 经 `defineExpose` 暴露，按 path 暂存随文件切换显隐）并在 `handleUpdate` 内向总线广播；
  `VSCodePane.vue` 用本面板 `store.slot` 组装出 `editor` 挂进 `extCtx`
- **宿主装饰工厂 `createDecorations`**：因 CM6 打进私有 vendor chunk、同源页插件 `import` 到的是不同实例，
  `setDecorations(自建扩展)` 对同源页失效。改由 `components/business/vscode/pluginDecorations.ts`（唯一持真实
  CM6 的模块）把纯 JSON `DecorationSpec` 编译成 `ViewPlugin`+gutter `StateField` 扩展；`CodeEditor.vue` 的
  `setDecorationsSpec(items)` 按 path 缓存 `Decorator` 句柄、首建注入 / 再调 `dispatch(ReconfigureGutter)` 就地重绘；
  `VSCodePane.vue` 的 `createDecorations(spec)` 透传当前激活文件并返回 `{ extension, update }`
- **运行时 `.js` 导入 + 插件管理**：`stores/userPlugins.ts`（模块级列表 + `__ModuleLoader__` shim + eval/apply +
  注册表 diff 归属 + `/persist?k=dsh-fw.userPlugins` 快照持久化 + 启停/移除/导入 API）；宿主内置视图
  `components/business/vscode/pluginManagerView.ts`（`registerPluginManagerView()`，由 VSCodePane onMounted 调用一次）；
  官方套件已收进本仓库 `plugins/packages/<name>.js`（纯 JS 单文件、无版本管理，清单写在源码的
  `export const meta = {...}` 块里），`scripts/build.mjs` 构建时先跑
  `plugins/pack.mjs`（静态校验 meta 并生成 `manifest(...)` + `.load(...)` 两段外壳），再把 `plugins/lib/*` 拷入 `lib/web/plugin-src/`——内置列表**不再构建期内嵌**，
  由前端 bootstrap 经 host `GET /plugin-index`（清单）+ `GET /plugin-src?k=<name>`（bundle，顶层
  `__ModuleLoader__.manifest(...)` 声明提供元数据，无需执行插件代码）在运行时推导；URL 导入走 host 新路由
  `POST /fetch-plugin`（`src/host/routes/routes-plugins.ts`，服务端代拉 + SSRF 拦截 + 2MB 上限）
- dev 演示插件：`stores/activityBar.ts` 内 `demo.hello`（视图 + ctx 互动）与 `demo.statusPing`
  （命令 + 状态栏项）、`demo.extMenuPing`（编辑器扩展菜单条目）、`demo.wbStatusPing`（工作台扩展菜单条目），
  仅 `import.meta.env.DEV` 注册，可作参考实现
- 测试探针实体按钮：`test/contribution-points.test.js` 的 `installTestButtons()`（控制台执行
  `import('/api/dsh-file-workbench/assets/__dsh-test-probe.js').then(m => m.installTestButtons())`）——
  编辑器底栏「扩展」菜单出现「▶ 运行贡献点测试」（statusbar.register 路径）、工作台底栏「扩展」菜单
  出现「▶ 运行工作台扩展测试」（workbench statusbar.register 独立注册表路径，点击 toast 当前工作区根），
  另在两侧各挂一个「贡献点测试报告」视图；`uninstallTestButtons()` 对称移除。测试弹层（工作台提示、
  汇总卡片）复用框架 `.fw-toast` 样式类，随 `html[data-theme]` 自动切换深浅色背景

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
