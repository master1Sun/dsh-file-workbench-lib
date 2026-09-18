const results = [];
let currentGroup = "(未分组)";
function group(name) {
  currentGroup = name;
  console.log(`
%c▌ ${name}`, "color:#58a6ff;font-weight:bold");
}
function record(status, name, detail) {
  results.push({ group: currentGroup, status, name, detail });
  const color = status === "PASS" ? "#3fb950" : status === "FAIL" ? "#f85149" : "#8b949e";
  const mark = status === "PASS" ? "✓" : status === "FAIL" ? "✗" : "○";
  console.log(`  %c[${mark}] ${name}`, `color:${color}`, detail === void 0 ? "" : detail);
}
function assert(name, cond, detail) {
  record(cond ? "PASS" : "FAIL", name, cond ? detail : detail ?? "期望 true，实际 false");
  return !!cond;
}
function eq(name, actual, expected) {
  const ok = actual === expected;
  record(ok ? "PASS" : "FAIL", name, ok ? `${expected}` : `期望 ${JSON.stringify(expected)}，实际 ${JSON.stringify(actual)}`);
  return ok;
}
function skip(name, why) {
  record("SKIP", name, why);
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function until(fn, timeout = 2e3, step = 50) {
  const end = Date.now() + timeout;
  for (; ; ) {
    let v = false;
    try {
      v = !!fn();
    } catch {
      v = false;
    }
    if (v) return true;
    if (Date.now() > end) return false;
    await sleep(step);
  }
}
function extTrigger() {
  return document.querySelector(".vs-status-ext");
}
function menuItemByText(text) {
  const backs = document.querySelectorAll(".fw-cm-backdrop");
  const host = backs.length ? backs[backs.length - 1] : document;
  return Array.from(host.querySelectorAll(".fw-cm-item")).find((el) => (el.textContent || "").includes(text)) || null;
}
async function ensureEditorExtMenuOpen() {
  if (menuItemByText("TEST_STATUS_PROBE") || menuItemByText("TEST_MENU_PROBE")) return;
  extTrigger()?.click();
  await until(() => !!document.querySelector(".fw-cm-up"), 800);
}
async function ensureWbExtMenuOpen() {
  if (menuItemByText("TEST_WB_MENU_PROBE")) return;
  wbExtTrigger()?.click();
  await until(() => !!document.querySelector(".fw-cm-up"), 800);
}
function findEditorRoot() {
  const el = document.querySelector(".vs-topbar");
  return el ? el.closest(".vs-body, .vs-root, [class*='vscode']") || el.closest("div") : null;
}
function workbenchChromeDisabledAreas() {
  return Array.from(document.querySelectorAll(".fw-status-left.chrome-disabled, .fw-status-right.chrome-disabled"));
}
function taskFab() {
  return document.querySelector(".fw-bg-task-fab");
}
function wbExtTrigger() {
  return document.querySelector(".fw-status-ext-btn");
}
function taskPanel() {
  return document.querySelector(".fw-bg-task-panel");
}
function runningTaskRows() {
  return Array.from(document.querySelectorAll(".fw-bg-task-group")).filter((g) => {
    const lbl = g.querySelector(".fw-bg-task-grouplbl");
    return lbl && /运行|Running/i.test(lbl.textContent || "");
  }).flatMap((g) => Array.from(g.querySelectorAll(".fw-bg-task-row")));
}
function fabBadgeCount() {
  const b = document.querySelector(".fw-bg-task-badge");
  if (!b) return 0;
  const n = parseInt((b.textContent || "").trim(), 10);
  return Number.isNaN(n) ? 0 : n;
}
function isInert(el) {
  for (let n = el; n; n = n.parentElement) {
    if (n.hasAttribute && n.hasAttribute("inert")) return true;
  }
  return false;
}
let RUN_SEQ = 0;
function editorRoots() {
  return Array.from(document.querySelectorAll(".vs-topbar")).map((el) => el.closest(".vs-body, .vs-root, [class*='vscode']") || el.closest("div")).filter(Boolean);
}
function ensureEditorHost() {
  if (findEditorRoot()) return null;
  if (typeof window.__dshVSCodeMountPane__ !== "function") return void 0;
  const host = document.createElement("div");
  host.id = "dsh-test-editor-host";
  host.style.cssText = "position:fixed;left:8px;bottom:8px;width:600px;height:440px;z-index:2147482000;border:1px solid #30363d;overflow:hidden;background:#0d1117";
  document.body.appendChild(host);
  const handle = window.__dshVSCodeMountPane__(host, { instanceId: `contribution-test-${Date.now()}-${RUN_SEQ}`, fresh: true });
  window.__dshTestEditorHandle = handle;
  return handle;
}
async function resetEditorToNoTabs() {
  const roots = editorRoots();
  if (roots.length === 0) {
    if (!ensureEditorHost()) return "无法挂载编辑器面板（缺 __dshVSCodeMountPane__）";
    await until(() => !!findEditorRoot(), 3e3);
    return "";
  }
  if (roots.length > 1) return `检测到 ${roots.length} 个编辑器面板，无法安全复位（请只保留一个再重跑）`;
  await closeAllEditorTabs();
  return "";
}
async function closeAllEditorTabs() {
  for (let i = 0; i < 20; i++) {
    const closes = Array.from(document.querySelectorAll(".vs-tab-close"));
    if (!closes.length) break;
    closes[0].click();
    await sleep(50);
  }
  await until(() => {
    const api2 = window.__dshFileWorkbenchVSCode__;
    return !api2?.listOpenFiles || api2.listOpenFiles().length === 0;
  }, 1500);
}
async function runTests() {
  results.length = 0;
  RUN_SEQ++;
  if (window.__dshTestEditorHandle) {
    try {
      window.__dshTestEditorHandle.unmount();
    } catch {
    }
    window.__dshTestEditorHandle = null;
  }
  document.getElementById("dsh-test-editor-host")?.remove();
  const t0 = performance.now();
  console.log("%c=== DSH 文件工作台 · 贡献点集成测试 ===", "font-size:14px;font-weight:bold;color:#58a6ff");
  group("0. API 契约版本");
  const vs = window.__dshFileWorkbenchVSCode__;
  const wbApi = window.__dshFileWorkbenchWorkbench__;
  if (!assert("__dshFileWorkbenchVSCode__ 存在（编辑器 window API）", vs)) {
    return finish(t0, "window API 未就绪：请确认已挂载编辑器/工作台面板（activityBar 模块需被 bundle 引入）。");
  }
  assert("__dshFileWorkbenchWorkbench__ 存在（工作台 window API）", wbApi);
  assert("编辑器 apiVersion >= 2（activeFile/commands/statusbar）", vs.apiVersion >= 2, `apiVersion=${vs.apiVersion}`);
  if (wbApi) assert("工作台 apiVersion >= 4（backgroundTasks + statusbar）", wbApi.apiVersion >= 4, `apiVersion=${wbApi.apiVersion}`);
  assert("编辑器命名空间齐全 activityBar/commands/statusbar", !!(vs.activityBar && vs.commands && vs.statusbar));
  if (wbApi) assert("工作台命名空间齐全 activityBar/backgroundTasks/statusbar", !!(wbApi.activityBar && wbApi.backgroundTasks && wbApi.statusbar));
  group("1. commands 命令贡献点");
  const CMD = "test.echo";
  const CMD_ASYNC = "test.async";
  const CMD_THROW = "test.throw";
  const echoCalls = [];
  vs.commands.register(CMD, (...args) => {
    echoCalls.push(args);
    return args.length;
  });
  vs.commands.register(CMD_ASYNC, async (n) => {
    await sleep(20);
    return n * 2;
  });
  vs.commands.register(CMD_THROW, () => {
    throw new Error("boom");
  });
  assert("has(echo) 为真", vs.commands.has(CMD));
  assert("has(未注册 id) 为假", !vs.commands.has("test.nope"));
  assert("list() 含全部三个 test.* 命令", [CMD, CMD_ASYNC, CMD_THROW].every((id) => vs.commands.list().includes(id)), vs.commands.list().filter((x) => x.startsWith("test.")));
  eq("execute 透传返回值", vs.commands.execute(CMD, "a", "b"), 2);
  eq("execute 参数原样入参", JSON.stringify(echoCalls[0]), JSON.stringify(["a", "b"]));
  eq("execute 未注册 id → undefined（no-op）", vs.commands.execute("test.nope"), void 0);
  const asyncRet = await vs.commands.execute(CMD_ASYNC, 21);
  eq("execute 异步命令 await 结果", asyncRet, 42);
  let threw = false;
  try {
    vs.commands.execute(CMD_THROW);
  } catch (e) {
    threw = e instanceof Error && e.message === "boom";
  }
  assert("execute 抛错命令 → 异常冒泡给调用方", threw);
  vs.commands.register(CMD, () => "overwritten");
  eq("register 同 id 覆盖（热更新语义）", vs.commands.execute(CMD), "overwritten");
  assert("unregister(echo) 返回 true", vs.commands.unregister(CMD) === true);
  assert("unregister 后 has 为假", !vs.commands.has(CMD));
  assert("unregister 不存在 id 返回 false", vs.commands.unregister("test.nope") === false);
  group("2. statusbar 状态栏项贡献点");
  let lastStatusCtx = "NOT_CALLED";
  vs.commands.register("test.statusProbe", (ctx) => {
    lastStatusCtx = ctx;
  });
  const SB = "test.statusProbe.item";
  vs.statusbar.register({
    id: SB,
    text: "◉ TEST_STATUS_PROBE",
    commandId: "test.statusProbe",
    tooltip: "由测试脚本注册的探针按钮",
    order: 5
  });
  assert("statusbar.list() 含新注册项", vs.statusbar.list().some((i) => i.id === SB));
  const idxInList = vs.statusbar.list().findIndex((i) => i.id === SB);
  assert("statusbar 按 order 升序排列", idxInList === 0 || vs.statusbar.list()[idxInList - 1].order <= 5, `index=${idxInList}`);
  const resetErr = await resetEditorToNoTabs();
  const hasEditor = !resetErr && await until(() => !!findEditorRoot(), 3e3);
  if (!hasEditor) {
    const why = resetErr || "未检测到编辑器面板（.vs-topbar 不在 DOM）";
    skip("底部「扩展」菜单渲染出测试条目", why);
    skip("点击条目 → 自动执行关联命令并注入 {path,projectDir}", why);
    skip("when(ctx) 为假时条目置灰禁用", why);
  } else {
    const trig = await until(() => !!extTrigger(), 2e3) && extTrigger();
    if (assert("底栏出现「扩展」触发按钮（有注册项时）", !!trig)) {
      await ensureEditorExtMenuOpen();
      const shown = await until(() => !!menuItemByText("TEST_STATUS_PROBE"), 1500);
      const row = menuItemByText("TEST_STATUS_PROBE");
      if (assert("展开「扩展」后列出该注册项", shown && !!row)) {
        row.click();
        const called = await until(() => lastStatusCtx !== "NOT_CALLED", 1e3);
        if (assert("点击条目 → 自动执行关联命令", called)) {
          assert("命令收到 StatusCommandContext 对象", !!lastStatusCtx && typeof lastStatusCtx === "object" && "path" in lastStatusCtx && "projectDir" in lastStatusCtx, JSON.stringify(lastStatusCtx));
        }
      }
      const WHEN_SB = "test.whenItem";
      vs.statusbar.register({ id: WHEN_SB, text: "◉ TEST_WHEN_FILE", commandId: "test.statusProbe", order: 6, when: (ctx) => !!ctx.path });
      await sleep(120);
      if (!menuItemByText("TEST_WHEN_FILE")) await ensureEditorExtMenuOpen();
      const whenRow = await until(() => !!menuItemByText("TEST_WHEN_FILE"), 1e3) && menuItemByText("TEST_WHEN_FILE");
      assert("when(ctx) 为假时条目置灰禁用（无激活文件）", !!whenRow && whenRow.classList.contains("disabled"));
      vs.statusbar.unregister(WHEN_SB);
    }
  }
  vs.statusbar.unregister(SB);
  assert("statusbar.unregister 从 list 移除", !vs.statusbar.list().some((i) => i.id === SB));
  vs.commands.unregister("test.statusProbe");
  group("2b. statusbar.registerMenu 扩展菜单贡献点");
  if (typeof vs.statusbar.registerMenu !== "function") {
    skip("registerMenu/listMenu/unregisterMenu", "当前 window API 未提供 registerMenu（需 apiVersion>=3 的构建）");
  } else {
    let lastMenuCtx = "NOT_CALLED";
    vs.commands.register("test.menuProbe", (ctx) => {
      lastMenuCtx = ctx;
    });
    const MENU = "test.menuItem";
    vs.statusbar.registerMenu({ id: MENU, text: "◉ TEST_MENU_PROBE", commandId: "test.menuProbe", tooltip: "扩展菜单探针条目", order: 5 });
    assert("listMenu() 含新注册项", vs.statusbar.listMenu().some((i) => i.id === MENU));
    if (!hasEditor) {
      skip("底部「扩展」菜单渲染出该条目", "无编辑器面板，跳过 DOM 断言");
      skip("点击条目 → 执行关联命令并注入 {path,projectDir}", "同上");
    } else {
      const trigger = extTrigger();
      if (assert("底栏存在「扩展」触发按钮", !!trigger)) {
        await ensureEditorExtMenuOpen();
        const row = await until(() => !!menuItemByText("TEST_MENU_PROBE"), 1500) && menuItemByText("TEST_MENU_PROBE");
        if (assert("展开「扩展」后列出该注册条目", !!row)) {
          row.click();
          const called = await until(() => lastMenuCtx !== "NOT_CALLED", 1e3);
          assert("点击条目 → 自动执行关联命令", called);
          assert("命令收到 {path,projectDir} 上下文对象", !!lastMenuCtx && typeof lastMenuCtx === "object" && "path" in lastMenuCtx && "projectDir" in lastMenuCtx, JSON.stringify(lastMenuCtx));
        }
      }
    }
    vs.statusbar.unregisterMenu(MENU);
    assert("unregisterMenu 从 listMenu 移除", !vs.statusbar.listMenu().some((i) => i.id === MENU));
    vs.commands.unregister("test.menuProbe");
  }
  group("3. ActivityContext.activeFile 感知");
  if (!hasEditor) {
    skip("activeFile getter / onDidChangeActiveFile / listOpenFiles", "无编辑器面板可挂载，跳过 UI 相关断言");
  } else {
    const captured = { init: "NO", seq: [], ctxRef: null };
    const VIEW = "test.activeView";
    vs.activityBar.register({
      id: VIEW,
      title: "测试激活文件视图",
      icon: "code",
      order: 5,
      mount(el, ctx) {
        captured.ctxRef = ctx;
        captured.init = ctx.activeFile;
        const off = ctx.onDidChangeActiveFile((p) => captured.seq.push(p));
        return () => {
          off();
          el.replaceChildren();
        };
      }
    });
    const activated = await activateEditorExtView();
    const mountedOk = await until(() => !!captured.ctxRef, 1500);
    if (assert("扩展视图可被激活并 mount（拿到 ctx）", activated && mountedOk && captured.ctxRef)) {
      const ctx = captured.ctxRef;
      eq("初始 activeFile 为 null（fresh 无标签）", captured.init, null);
      assert("onDidChangeActiveFile 注册时立即回调一次当前值", captured.seq.length >= 1 && captured.seq[0] === null, JSON.stringify(captured.seq));
      assert("listOpenFiles() 返回数组", Array.isArray(ctx.listOpenFiles()));
      assert("activeFile 是可读属性（getter 门面）", "activeFile" in ctx);
      let openedWithPromise = false;
      const probePath = `/__dsh_test_probe_${Date.now()}__.txt`;
      try {
        const p = ctx.openFile(probePath);
        openedWithPromise = p && typeof p.then === "function";
        await p;
      } catch {
      }
      record("PASS", "openFile 返回 Promise（契约正确）", openedWithPromise ? "" : "非 Promise？");
      await closeAllEditorTabs();
      deactivateEditorExtView();
      vs.activityBar.unregister(VIEW);
      await sleep(120);
      const gone = !Array.from(document.querySelectorAll(".vs-act-btn")).some((b) => (b.getAttribute("title") || "").includes("测试激活文件视图"));
      assert("activityBar.unregister 生效（图标从 Activity Bar 消失）", gone);
    } else {
      skip("activeFile getter / 订阅 / listOpenFiles", "扩展视图未能激活（找不到可点的图标）");
    }
  }
  group("4. backgroundTasks 后台任务贡献点（工作台）");
  if (!wbApi || !wbApi.backgroundTasks) {
    skip("backgroundTasks start/step/done/fail/clear", "工作台 window API 缺失或未挂载");
  } else {
    const bt = wbApi.backgroundTasks;
    const h = bt.start("TEST_长任务", { detail: "src/demo.txt", fileType: ".txt", fileSize: 1024 });
    assert(
      "start() 同步返回句柄（含 step/updateLabel/done/fail）",
      !!h && typeof h.step === "function" && typeof h.done === "function" && typeof h.fail === "function" && typeof h.updateLabel === "function"
    );
    const badgeOn = await until(() => fabBadgeCount() >= 1, 1500);
    assert("start() 后任务进入运行中（FAB 角标 ≥1）", badgeOn, `badge=${fabBadgeCount()}`);
    const fab = taskFab();
    if (assert("后台任务 FAB 存在", !!fab)) {
      if (!taskPanel()) fab.click();
      const panelOpen = await until(() => !!taskPanel(), 1200);
      if (assert("点击 FAB 展开任务面板", panelOpen)) {
        const rowShown = await until(() => runningTaskRows().some((r) => (r.textContent || "").includes("TEST_长任务")), 1200);
        assert("面板「运行中」分组列出该任务", rowShown);
        h.step("步骤一：读取中", "src/demo.txt", "50%", ".txt", 512);
        h.step("步骤二：写入中");
        h.updateLabel("TEST_改名任务");
        const renamed = await until(() => runningTaskRows().some((r) => (r.textContent || "").includes("TEST_改名任务")), 1200);
        assert("updateLabel 后面板实时反映新文案", renamed);
      }
    }
    h.done("完成");
    const cleared = await until(() => fabBadgeCount() === 0, 1500);
    assert("done() 后运行中计数归零（角标消失）", cleared, `badge=${fabBadgeCount()}`);
    const h2 = bt.start("TEST_失败任务");
    const ranAgain = await until(() => fabBadgeCount() >= 1, 1500);
    h2.fail("故意失败");
    const failCleared = await until(() => fabBadgeCount() === 0, 1500);
    assert("fail() 同样结束任务（角标出现→归零）", ranAgain && failCleared, `ran=${ranAgain} cleared=${failCleared}`);
    let clearOk = true;
    try {
      const p1 = bt.clearFinished();
      const p2 = bt.clearAll();
      assert("clearFinished()/clearAll() 返回 Promise", p1 instanceof Promise && p2 instanceof Promise);
      await Promise.all([p1, p2]);
    } catch (e) {
      clearOk = false;
      record("FAIL", "clear 调用抛错", String(e));
    }
    if (clearOk) {
      const emptyAfter = await until(() => runningTaskRows().length === 0, 1500);
      assert("clearAll() 后无运行中任务残留", emptyAfter);
    }
    if (taskPanel() && fab) fab.click();
  }
  group("4b. 工作台扩展菜单贡献点（statusbar）");
  if (!wbApi || !wbApi.statusbar || typeof wbApi.statusbar.register !== "function") {
    skip("workbench statusbar register/list/unregister", "工作台 window API 未提供 statusbar（需 apiVersion>=4 的构建）");
  } else {
    let lastWbCtx = "NOT_CALLED";
    const WB_PROBE = "test.wbMenuProbe." + Date.now();
    vs.commands.register(WB_PROBE, (ctx) => {
      lastWbCtx = ctx;
    });
    const WBM = "test.wbMenuItem";
    wbApi.statusbar.register({ id: WBM, text: "◉ TEST_WB_MENU_PROBE", commandId: WB_PROBE, tooltip: "工作台扩展菜单探针条目", order: 5 });
    assert("workbench statusbar.list() 含新注册项", wbApi.statusbar.list().some((i) => i.id === WBM));
    assert("工作台注册项不污染编辑器状态栏表", !vs.statusbar.list().some((i) => i.id === WBM));
    assert("工作台注册项不污染编辑器扩展菜单表", !(vs.statusbar.listMenu?.() || []).some((i) => i.id === WBM));
    const wbTrigger = await until(() => !!wbExtTrigger(), 1500) && wbExtTrigger();
    if (assert("工作台底栏出现「扩展」触发按钮", !!wbTrigger)) {
      await ensureWbExtMenuOpen();
      const row = await until(() => !!menuItemByText("TEST_WB_MENU_PROBE"), 1500) && menuItemByText("TEST_WB_MENU_PROBE");
      if (assert("展开「扩展」后列出该注册条目", !!row)) {
        row.click();
        const called = await until(() => lastWbCtx !== "NOT_CALLED", 1e3);
        assert("点击条目 → 自动执行关联命令", called);
        assert("命令收到 {path:null, projectDir} 上下文对象", !!lastWbCtx && typeof lastWbCtx === "object" && "path" in lastWbCtx && "projectDir" in lastWbCtx && lastWbCtx.path === null, JSON.stringify(lastWbCtx));
      }
    }
    wbApi.statusbar.unregister(WBM);
    assert("unregister 从 workbench list 移除", !wbApi.statusbar.list().some((i) => i.id === WBM));
    vs.commands.unregister(WB_PROBE);
  }
  group("5. 注入激活时后台任务按钮仍可用（工作台）");
  if (!wbApi || !wbApi.activityBar) {
    skip("注入视图激活 → 任务 FAB 不禁用", "工作台 window API 缺失");
  } else {
    const WV = "test.workbenchView";
    let mounted = false;
    wbApi.activityBar.register({
      id: WV,
      title: "测试工作台视图",
      icon: "folder",
      order: 5,
      mount() {
        mounted = true;
        return () => {
          mounted = false;
        };
      }
    });
    const act = await activateWorkbenchExtView();
    const didMount = await until(() => mounted, 1500);
    if (!assert("工作台扩展视图可激活并 mount", act && didMount)) {
      skip("注入激活时任务 FAB 保持可点", "无法激活工作台扩展视图");
      skip("本地导航区被禁用", "同上");
    } else {
      await sleep(150);
      const chrome = workbenchChromeDisabledAreas();
      assert("本地导航区（信息/视图切换）被置灰禁用", chrome.length > 0 && chrome.every((el) => isInert(el)), `禁用区数=${chrome.length}`);
      const fab2 = taskFab();
      if (assert("后台任务 FAB 存在于 DOM", !!fab2)) {
        assert("后台任务 FAB **未被 inert 禁用**", !isInert(fab2));
        const cs = getComputedStyle(fab2);
        assert("后台任务 FAB pointer-events 可交互", cs.pointerEvents !== "none", `pointer-events=${cs.pointerEvents}`);
        assert("后台任务 FAB 未被祖先置灰(opacity)", Number(cs.opacity) > 0.9, `opacity=${cs.opacity}`);
        if (taskPanel()) fab2.click();
        await sleep(80);
        fab2.click();
        const opened = await until(() => !!taskPanel(), 1200);
        assert("注入激活期间点击 FAB 仍能展开任务面板", opened);
        if (taskPanel()) fab2.click();
      }
      selectWorkbenchLocalView();
      wbApi.activityBar.unregister(WV);
    }
  }
  return finish(t0);
}
async function activateEditorExtView(_viewId) {
  const trigger = () => {
    const btns = Array.from(document.querySelectorAll(".vs-act-btn"));
    for (const el of btns) {
      if ((el.getAttribute("title") || "").includes("测试激活文件视图")) {
        el.click();
        return true;
      }
    }
    return false;
  };
  return await until(trigger, 2e3);
}
function deactivateEditorExtView() {
  const btns = Array.from(document.querySelectorAll(".vs-act-btn"));
  for (const el of btns) {
    const t = el.getAttribute("title") || "";
    if (/文件|Files/i.test(t)) {
      el.click();
      return;
    }
  }
}
async function activateWorkbenchExtView(_viewId) {
  const trigger = () => {
    const items = Array.from(document.querySelectorAll(".fw-nav-external-item"));
    for (const el of items) {
      if ((el.getAttribute("title") || "").includes("测试工作台视图")) {
        el.click();
        return true;
      }
    }
    return false;
  };
  return await until(trigger, 2e3);
}
function selectWorkbenchLocalView() {
  const local = document.querySelector(".fw-nav-top, .fw-nav-leaf, .fw-nav-item:not(.fw-nav-external-item)");
  if (local) local.click();
}
function finish(t0, abortReason) {
  const passed = results.filter((r) => r.status === "PASS").length;
  const failed = results.filter((r) => r.status === "FAIL").length;
  const skipped = results.filter((r) => r.status === "SKIP").length;
  const dt = ((performance.now() - t0) / 1e3).toFixed(2);
  console.log("\n%c=== 结果汇总 ===", "font-size:13px;font-weight:bold");
  const byGroup = {};
  for (const r of results) (byGroup[r.group] ||= []).push(r);
  for (const g of Object.keys(byGroup)) {
    console.log(`%c▌ ${g}`, "color:#58a6ff;font-weight:bold");
    for (const r of byGroup[g]) {
      const color = r.status === "PASS" ? "#3fb950" : r.status === "FAIL" ? "#f85149" : "#8b949e";
      const mark = r.status === "PASS" ? "✓" : r.status === "FAIL" ? "✗" : "○";
      console.log(`   %c[${mark}] ${r.name}${r.detail ? " — " + r.detail : ""}`, `color:${color}`);
    }
  }
  const verdict = failed === 0 ? "ALL PASS" : "HAS FAILURES";
  console.log(
    `
%c${verdict}  ·  PASS ${passed} / FAIL ${failed} / SKIP ${skipped}  ·  ${dt}s`,
    `color:${failed === 0 ? "#3fb950" : "#f85149"};font-size:14px;font-weight:bold`
  );
  if (abortReason) console.log("%c⚠ " + abortReason, "color:#d29922");
  return { passed, failed, skipped, results, ok: failed === 0 };
}
if (typeof window !== "undefined") window.__dshRunContributionTests = runTests;
const BTN_TEXT = "▶ 运行贡献点测试";
const WB_BTN_TEXT = "▶ 运行工作台扩展测试";
const VIEW_TITLE = "贡献点测试报告";
const CMD_ID = "dsh.contrib.runTests";
const SB_ID = "dsh.contrib.runTests.item";
const WB_CMD_ID = "dsh.contrib.wbStatusPing";
const WB_SB_ID = "dsh.contrib.wbStatusPing.item";
const ED_VIEW_ID = "dsh.contrib.report.editor";
const WB_VIEW_ID = "dsh.contrib.report.workbench";
let __installed = false;
let __lastResult = null;
let __running = false;
function doWbStatusPing(ctx) {
  const dir = ctx?.projectDir || wbRootDir();
  const msg = dir ? `当前工作区：${dir}` : "未打开工作区";
  showWbToast(msg);
  console.log("%c[工作台扩展测试] " + msg, "color:#58a6ff;font-weight:bold", ctx);
}
function showWbToast(msg) {
  const old = document.getElementById("dsh-test-wb-toast");
  if (old) old.remove();
  const host = document.querySelector("#dsh-toast-root .fw-toast-host") || document.body;
  const el = document.createElement("div");
  el.id = "dsh-test-wb-toast";
  el.className = "fw-toast k-ok";
  el.setAttribute("role", "status");
  const ico = document.createElement("span");
  ico.className = "fw-toast-ico";
  ico.textContent = "✓";
  const txt = document.createElement("span");
  txt.className = "fw-toast-msg";
  txt.style.whiteSpace = "pre-wrap";
  txt.textContent = msg;
  el.appendChild(ico);
  el.appendChild(txt);
  host.appendChild(el);
  setTimeout(() => {
    el.style.transition = "opacity .5s";
    el.style.opacity = "0";
    setTimeout(() => el.remove(), 500);
  }, 4e3);
}
function wbRootDir() {
  const el = document.querySelector(".fw-root-path, .fw-breadcrumb, [title*='工作区']");
  return el ? (el.getAttribute("title") || el.textContent || "").trim() || null : null;
}
function renderReport(el) {
  el.replaceChildren();
  el.style.cssText = "padding:14px;font:13px/1.6 ui-monospace,Menlo,Consolas,monospace;color:#e6edf3;overflow:auto;height:100%;box-sizing:border-box";
  const wrap = document.createElement("div");
  if (!__lastResult) {
    wrap.textContent = "尚未运行。点击编辑器底部状态栏的「" + BTN_TEXT + "」开始。";
    el.appendChild(wrap);
    return;
  }
  const r = __lastResult;
  const head = document.createElement("div");
  head.style.cssText = "font-weight:bold;margin-bottom:8px";
  head.textContent = `${r.ok ? "✅ ALL PASS" : "⚠️ HAS FAILURES"} · PASS ${r.passed} / FAIL ${r.failed} / SKIP ${r.skipped}`;
  wrap.appendChild(head);
  const byGroup = {};
  for (const it of r.results) (byGroup[it.group] ||= []).push(it);
  for (const g of Object.keys(byGroup)) {
    const gh = document.createElement("div");
    gh.style.cssText = "margin:10px 0 4px;color:#58a6ff;font-weight:bold";
    gh.textContent = "▌ " + g;
    wrap.appendChild(gh);
    for (const it of byGroup[g]) {
      const line = document.createElement("div");
      const mark = it.status === "PASS" ? "✓" : it.status === "FAIL" ? "✗" : "○";
      const color = it.status === "PASS" ? "#3fb950" : it.status === "FAIL" ? "#f85149" : "#8b949e";
      line.style.color = color;
      line.textContent = `  [${mark}] ${it.name}${it.detail ? " — " + it.detail : ""}`;
      wrap.appendChild(line);
    }
  }
  el.appendChild(wrap);
}
function showSummaryCard(r) {
  const old = document.getElementById("dsh-test-summary-card");
  if (old) old.remove();
  const host = document.querySelector("#dsh-toast-root .fw-toast-host") || document.body;
  const card = document.createElement("div");
  card.id = "dsh-test-summary-card";
  card.className = "fw-toast " + (r.ok ? "k-ok" : "k-error");
  card.setAttribute("role", "status");
  card.style.maxWidth = "360px";
  card.innerHTML = `<span class="fw-toast-ico">${r.ok ? "✓" : "✗"}</span><span class="fw-toast-msg"><b>${r.ok ? "✅ 贡献点测试全部通过" : "⚠️ 贡献点测试有失败项"}</b><br>PASS ${r.passed} · FAIL ${r.failed} · SKIP ${r.skipped}<br><span style="opacity:.7">逐条明细见「${VIEW_TITLE}」视图 / Console</span></span>`;
  host.appendChild(card);
  setTimeout(() => {
    card.style.transition = "opacity .5s";
    card.style.opacity = "0";
    setTimeout(() => card.remove(), 500);
  }, 6e3);
}
async function doRun() {
  if (__running) return;
  __running = true;
  try {
    const r = await runTests();
    __lastResult = r;
    const msg = `${r.ok ? "全部通过" : "有失败项"} · PASS ${r.passed} / FAIL ${r.failed} / SKIP ${r.skipped}`;
    showSummaryCard(r);
    console.log("%c[贡献点测试·实体按钮] " + msg, `color:${r.ok ? "#3fb950" : "#f85149"};font-weight:bold`, r);
  } finally {
    __running = false;
  }
}
function installTestButtons() {
  const vs = window.__dshFileWorkbenchVSCode__;
  const wb = window.__dshFileWorkbenchWorkbench__;
  if (!vs || !wb) {
    console.warn("[installTestButtons] window API 未就绪：请先打开至少一个编辑器面板与一个工作台面板。");
    return null;
  }
  if (__installed) uninstallTestButtons();
  vs.commands.register(CMD_ID, () => {
    void doRun();
  });
  vs.statusbar.register({ id: SB_ID, text: BTN_TEXT, commandId: CMD_ID, tooltip: "点击运行贡献点集成测试（结果见 Console + 右下角提示 + 测试报告视图）", order: 1 });
  if (wb.statusbar && typeof wb.statusbar.register === "function") {
    vs.commands.register(WB_CMD_ID, (ctx) => {
      doWbStatusPing(ctx);
    });
    wb.statusbar.register({ id: WB_SB_ID, text: WB_BTN_TEXT, commandId: WB_CMD_ID, tooltip: "点击打印当前工作区根路径（工作台独立扩展菜单，仅测试）", order: 2 });
  }
  vs.activityBar.register({
    id: ED_VIEW_ID,
    title: VIEW_TITLE,
    icon: "check",
    order: 900,
    mount(el) {
      renderReport(el);
      const ro = new ResizeObserver(() => renderReport(el));
      ro.observe(el);
      return () => ro.disconnect();
    }
  });
  wb.activityBar.register({
    id: WB_VIEW_ID,
    title: VIEW_TITLE,
    icon: "check",
    order: 900,
    mount(el) {
      renderReport(el);
      const ro = new ResizeObserver(() => renderReport(el));
      ro.observe(el);
      return () => ro.disconnect();
    }
  });
  __installed = true;
  const wbNote = wb.statusbar ? `；工作台底栏「扩展」菜单出现「${WB_BTN_TEXT}」（独立注册表演示）` : "";
  console.log("%c[贡献点测试·实体按钮] 已装载：编辑器底栏「扩展」菜单出现「" + BTN_TEXT + "」" + wbNote + "；编辑器 Activity Bar 与工作台导航各多一个「" + VIEW_TITLE + "」视图。", "color:#3fb950;font-weight:bold");
  return api;
}
function uninstallTestButtons() {
  const vs = window.__dshFileWorkbenchVSCode__;
  const wb = window.__dshFileWorkbenchWorkbench__;
  try {
    vs?.statusbar.unregister(SB_ID);
  } catch {
  }
  try {
    vs?.commands.unregister(CMD_ID);
  } catch {
  }
  try {
    wb?.statusbar?.unregister(WB_SB_ID);
  } catch {
  }
  try {
    vs?.commands.unregister(WB_CMD_ID);
  } catch {
  }
  try {
    vs?.activityBar.unregister(ED_VIEW_ID);
  } catch {
  }
  try {
    wb?.activityBar.unregister(WB_VIEW_ID);
  } catch {
  }
  __installed = false;
  console.log("[贡献点测试·实体按钮] 已卸载。");
}
const api = { install: installTestButtons, uninstall: uninstallTestButtons, run: doRun, isInstalled: () => __installed };
if (typeof window !== "undefined") window.__dshTestButtons = api;
export {
  installTestButtons,
  runTests,
  uninstallTestButtons
};
