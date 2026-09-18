# 文件编辑器 Activity Bar 插件注入说明

文件编辑器（仿 VS Code 面板）和文件工作台左侧列表都支持外部插件注册自定义视图，二者使用完全独立的注册表。
编辑器内置三个视图（文件 / 搜索 / Git 提交记录），工作台内置文件导航视图；注册的插件视图会按顺序出现在内置视图下方。

在文件工作台中，用户视图只替换右侧主区域：用户注册按钮嵌入原有左侧列表的“用户插槽”分组，与文件导航同级；该分组可单独折叠。原有左侧导航、命令栏和状态栏继续保留并可使用；右侧在文件列表与用户内容之间切换，不与用户内容混用。点击文件按钮后恢复文件列表。

- 文件编辑器注入：`window.__dshFileWorkbenchVSCode__.activityBar.register(view)`
- 文件工作台注入：`window.__dshFileWorkbenchWorkbench__.activityBar.register(view)`
- 技术要求：**无**。挂载契约是框架无关的 `mount(el, ctx)`，Vue / React / 原生 JS 均可
- 信任边界：该 API 页面上任何脚本都可调用 —— 能注册 = 宿主加载了你的脚本（与
  `__dshVSCodeMountPane__` 同一暴露级别）
- 当前契约版本 **apiVersion: 4**：v1 视图注入 → v2 activeFile 感知 + 命令 + 状态栏项 →
  v3 编辑器扩展菜单（registerMenu）+ 工作台后台任务 → v4 工作台独立扩展菜单（statusbar）

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

### 感知当前激活文件（v2）

编辑器面板的 `ctx` 额外提供 `activeFile` / `listOpenFiles()` / `onDidChangeActiveFile(fn)`，
让插件跟随用户正在编辑的文件（例如做「当前文件的引用列表」「按语言切换工具」）。这些成员仅在
编辑器 `ctx` 上有效；用 `api.apiVersion >= 2` 探测后再调用：

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

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `id` | `string` | 唯一 id，建议带插件命名空间（如 `"xxx.notes"`）。**同 id 重复注册 = 覆盖**（幂等，可用于热更新） |
| `title` | `string | Record<string, string>` | 注入项标题；支持普通字符串或按 locale 提供多语言文本 |
| `mount` | `(el: HTMLElement, ctx: ActivityContext) => void \| (() => void)` | 挂载函数。`el` 已占满左栏内容区（容器可滚动）。返回清理函数则由面板在切走/卸载时调用 |
| `when` | `(ctx: { projectDir }) => boolean` | 可见性谓词，例如「未打开项目目录时隐藏该图标」；缺省恒显示 |

## ActivityContext 契约（apiVersion: 2）

| 成员 | 起始版本 | 说明 |
| --- | --- | --- |
| `projectDir` | v1 | 当前项目目录（getter，读取即最新值）；未打开项目时为 `null` |
| `theme` | v1 | 当前主题 `"dark" \| "light"`（getter） |
| `activeFile` | v2 | 当前激活标签对应的文件绝对路径（getter）；无激活文件时为 `null` |
| `onProjectChange(fn)` | v1 | 订阅项目切换；**立即回调一次当前值**。返回退订函数 |
| `onThemeChange(fn)` | v1 | 订阅主题切换；立即回调一次。返回退订函数 |
| `onDidChangeActiveFile(fn)` | v2 | 订阅激活文件切换；立即回调一次当前值。返回退订函数 |
| `openFile(path, opts?)` | v1 | 在编辑器中打开文件（加入标签、加载内容）；`opts.line` 打开后跳到该行 |
| `listOpenFiles()` | v2 | 当前已打开的文件标签绝对路径列表（按打开顺序） |
| `openDiff(title, lines)` | v1 | 以 diff 伪标签展示文本行，格式同 `git diff`（`+` 新增 / `-` 删除 / `@@` hunk 头），复用内置 diff 着色 |
| `toast(level, msg)` | v1 | 右下角统一消息提示；`level`: `"ok" \| "info" \| "error"` |

> **v2 均为向后兼容的增量**：v1 插件不受影响。用 `api.apiVersion >= 2` 探测后再调用新成员即可。

## 命令贡献点（apiVersion: 2）

除了注册视图，插件还能注册**可被调用的动作**——对标 VS Code 的 `commands.registerCommand`。
命令存在模块级表里，注册后不会自动改动编辑器行为，需由其他脚本 / 面板主动 `executeCommand(id, ...args)` 才生效。
适合「一个插件提供能力、另一个插件（或你自己的宿主逻辑）触发」的解耦场景。

window API 命名空间：`window.__dshFileWorkbenchVSCode__.commands`

| 方法 | 说明 |
| --- | --- |
| `register(id, handler)` | 注册命令（幂等：同 id 覆盖，支持热更新）。`handler` 返回值原样回传给 `execute` |
| `unregister(id)` | 注销命令；返回是否存在并被移除 |
| `execute(id, ...args)` | 执行命令；未注册的 id 静默返回 `undefined`（no-op）。处理器抛错向上冒泡给调用方 |
| `list()` | 当前已注册命令 id 列表 |
| `has(id)` | 是否已注册某命令 |

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

## 状态栏项贡献点（apiVersion: 2）

在「命令」之上，插件还能把命令**暴露成一个可点击条目**——注册后集中出现在编辑器**底部状态栏的「扩展」
弹出菜单**里，点击条目即自动 `execute(commandId, ctx)`。这就是命令的内置触发面：无需自己找地方放按钮，
也不用手写事件绑定。（历史上这些条目是平铺在状态栏上的按钮；现统一收进「扩展」入口，见下节。）

window API 命名空间：`window.__dshFileWorkbenchVSCode__.statusbar`

| 方法 | 说明 |
| --- | --- |
| `register(item)` | 注册状态栏项（幂等：同 id 覆盖）。契约见下表 |
| `unregister(id)` | 注销状态栏项（不存在时静默） |
| `list()` | 当前已注册状态栏项列表 |

`StatusBarItem` 契约：

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `id` | `string` | 唯一 id，建议带命名空间；同 id 覆盖 |
| `text` | `string` | 条目文案（显示在「扩展」菜单里） |
| `commandId` | `string` | 点击时执行的命令 id（须先经 `commands.register` 注册，否则点击为 no-op） |
| `tooltip` | `string?` | 悬浮提示；缺省用 `commandId` |
| `order` | `number?` | 排序权重（小的靠前；与扩展菜单项合并后统一按此升序排列） |
| `when(ctx?)` | `(ctx: { path, projectDir }) => boolean` | 可用性谓词，例如「有激活文件才可用」；为假时该条目在菜单里**置灰禁用**，缺省恒可用 |

点击时面板注入的上下文对象 `{ path, projectDir }`（均为最新值，可能为 `null`）会作为命令处理器的第一个入参。

```js
const api = window.__dshFileWorkbenchVSCode__;
if (api && api.apiVersion >= 2) {
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

## 扩展菜单贡献点（apiVersion: 3）

底部「扩展」弹出菜单是插件注册动作的统一归集处。除上一节的 `statusbar.register` 外，v3 另开了一组
语义完全相同、但**独立注册表**的方法 `statusbar.registerMenu` —— 二者最终都合并渲染进同一个「扩展」
菜单（按 `order` 升序混排），只是给插件两个可选的登记入口，便于把「常驻动作」和「分组动作」分开管理。

- 无任何注册项时，底栏不显示「扩展」入口；有条目时才出现，点开向上弹出。
- `when(ctx)` 为假的条目在菜单里**置灰禁用**（让用户仍能看到该动作存在、只是当前不可用）。

window API（挂在 `statusbar` 命名空间下的三个新方法）：

| 方法 | 说明 |
| --- | --- |
| `registerMenu(item)` | 注册扩展菜单项（幂等：同 id 覆盖，按 `order` 升序）。契约同 `StatusBarItem` |
| `unregisterMenu(id)` | 注销扩展菜单项（不存在时静默） |
| `listMenu()` | 当前已注册扩展菜单项列表 |

```js
const api = window.__dshFileWorkbenchVSCode__;
if (api && api.apiVersion >= 3) {
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

## 工作台扩展菜单贡献点（文件工作台，apiVersion: 4）

上面两节的状态栏 / 扩展菜单都挂在**文件编辑器**上。v4 起，**文件工作台**（`__dshFileWorkbenchWorkbench__`）
也有了自己的底部「扩展」弹出菜单——入口在面板左下角、后台任务按钮旁，点开向上弹出，逐条展示插件注册的
动作。**它与编辑器的两套注册表完全独立**：在工作台注册的条目不会出现在编辑器里，反之亦然；命令表
（`commands`）则仍是全局共享的一份。

window API 命名空间：`window.__dshFileWorkbenchWorkbench__.statusbar`

| 方法 | 说明 |
| --- | --- |
| `register(item)` | 注册工作台扩展菜单项（幂等：同 id 覆盖，按 `order` 升序）。契约见下表 |
| `unregister(id)` | 注销（不存在时静默） |
| `list()` | 当前已注册的工作台扩展菜单项列表 |

条目契约与编辑器的 `StatusBarItem` 一致（`id/text/commandId/tooltip/order/when`），只是传给命令处理器 /
`when` 谓词的上下文是 `{ path: null, projectDir }`——工作台没有「编辑器激活标签」概念，故 `path` 恒为
`null`，`projectDir` 为当前工作区根目录（未打开时为 `null`）。

```js
const wb = window.__dshFileWorkbenchWorkbench__;
if (wb && wb.apiVersion >= 4) {
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

### 早期注册（apiVersion: 4）

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

## 后台任务贡献点（文件工作台，apiVersion: 3）

文件工作台自带一套「后台任务」系统——上传 / 压缩 / 解压等长操作会登记进底部状态栏的任务按钮，
点开可看运行中列表、历史与归档。**v3 起外部插件也能把这套系统当作通用进度登记处复用**：
自己的耗时操作（批量处理、拉取远端数据等）用 `start()` 登记，即可出现在同一个任务面板里，
用户统一可见、可追溯。

window API 命名空间：`window.__dshFileWorkbenchWorkbench__.backgroundTasks`

| 方法 | 说明 |
| --- | --- |
| `start(label, opts?)` | 发起一个后台任务，返回句柄 `{ step, updateLabel, done, fail }`。`opts`: `{ detail?, fileType?, fileSize? }` |
| `clearFinished()` | 清除已结束任务（活跃历史先归档再清空）。返回 Promise |
| `clearAll()` | 清空全部任务（含运行中）。返回 Promise |

句柄方法：

| 方法 | 说明 |
| --- | --- |
| `step(msg, file?, detail?, fileType?, fileSize?)` | 记录一个中间步骤（仅运行中生效），进入任务日志时间线 |
| `updateLabel(label)` | 修改任务描述文案（运行中展示与结束后记录同步更新） |
| `done(msg?)` | 标记成功（可带补充消息），任务转入历史 |
| `fail(msg?)` | 标记失败（带原因） |

```js
const wb = window.__dshFileWorkbenchWorkbench__;
if (wb && wb.apiVersion >= 3) {
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
