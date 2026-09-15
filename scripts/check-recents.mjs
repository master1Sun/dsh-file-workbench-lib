/**
 * 「最近项目」持久化回归测试（客户端 store，独立于宿主 smoke）。
 *
 * 为什么单独有一份：宿主侧 `smoke.mjs` 只覆盖 `lib/index.js`，而这条 bug 完全在**前端 store**
 * 里（`src/vue/stores/vscode.ts`）—— 清空写下的 `recents: []` 被「旧版载荷迁移」兜底逻辑
 * 误判成「没有 recents 字段」，刷新时把各槽残留的旧记录合并回来，于是「清空完一刷新又全回来」。
 * 它只在真实的「清空 → 刷新」时序下才发作，靠读代码很难发现，故固化为可执行回归。
 *
 * 做法：用 esbuild 把**真实源码**单独打成一个包，桩掉 `vue`（只需 reactive/ref）与
 * `../composables/core/useApi`（用 globalThis 充当「磁盘」），每个场景用带 query 的动态
 * import 取一份**全新的模块实例**（模块级单例被重置，等价于刷新页面）。
 *
 * 铁律：断言必须**能抓到旧行为**。改这里之前先跑 `node scripts/check-recents.mjs --self-test`，
 * 它会把源码临时回退成修复前的逻辑，确认用例确实变红（防「假阳性绿灯」）。
 *
 * 用法：node scripts/check-recents.mjs [--self-test]
 */
import { build } from "esbuild";
import { readFileSync, writeFileSync, unlinkSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(ROOT, "src/vue/stores/vscode.ts");
const BAK = join(ROOT, "_vs.bak.ts.txt");
const BUNDLE = join(ROOT, "_recents-bundle.mjs");
const SELF_TEST = process.argv.includes("--self-test");

/* ---------- 打桩 + 打包 ---------- */

const STUB_VUE = join(ROOT, "_stub-vue.mjs");
const STUB_API = join(ROOT, "_stub-api.mjs");
const ENTRY = join(ROOT, "_recents-entry.ts");

function writeStubs() {
  writeFileSync(STUB_VUE, "export function ref(v){ return { value: v }; }\nexport function reactive(o){ return o; }\n");
  writeFileSync(
    STUB_API,
    [
      "// 用 globalThis 冒充宿主磁盘：loadPersist 读快照，savePersist 记录每次落盘。",
      "export async function loadPersist() {",
      "  return globalThis.__PERSIST__ ? JSON.parse(JSON.stringify(globalThis.__PERSIST__)) : null;",
      "}",
      "export async function savePersist(k, v) {",
      "  const snap = JSON.parse(JSON.stringify(v));",
      "  (globalThis.__SAVES__ ||= []).push(snap);",
      "  globalThis.__PERSIST__ = Object.assign({}, globalThis.__PERSIST__, { [k]: snap });",
      "}",
      "",
    ].join("\n"),
  );
  writeFileSync(ENTRY, 'export { getVSCodeStore, acquireVSCodeSlot } from "./src/vue/stores/vscode";\n');
}

async function bundle() {
  await build({
    entryPoints: [ENTRY],
    outfile: BUNDLE,
    bundle: true,
    format: "esm",
    platform: "node",
    logLevel: "warning",
    plugins: [
      {
        name: "stubs",
        setup(b) {
          b.onResolve({ filter: /^vue$/ }, () => ({ path: STUB_VUE }));
          b.onResolve({ filter: /useApi$/ }, () => ({ path: STUB_API }));
        },
      },
    ],
  });
}

function cleanup() {
  for (const f of [STUB_VUE, STUB_API, ENTRY, BUNDLE, BAK]) {
    try {
      unlinkSync(f);
    } catch {
      /* 不存在即忽略 */
    }
  }
}

/* ---------- 断言 ---------- */

let pass = 0;
let fail = 0;
function check(name, ok, detail = "") {
  if (ok) {
    pass++;
    console.log("  ok   " + name);
  } else {
    fail++;
    console.log("  FAIL " + name + (detail ? "  -> " + detail : ""));
  }
}

/** 播种「宿主磁盘上的」vscode.json，并清空落盘记录。 */
function seed(vscodePayload) {
  globalThis.__PERSIST__ = vscodePayload === undefined ? null : { vscode: vscodePayload };
  globalThis.__SAVES__ = [];
}
const saves = () => globalThis.__SAVES__ ?? [];
const lastSave = () => saves()[saves().length - 1] ?? null;
const J = (v) => JSON.stringify(v);

let caseNo = 0;
/** 取一份全新模块实例（模块级单例随之重置 = 刷新页面）。 */
async function fresh() {
  caseNo++;
  return import(pathToFileURL(BUNDLE).href + "?c=" + caseNo);
}

async function run() {
  /* ① 核心回归：清空后重载不得复活 */
  console.log("\n① 用户点过「清空全部」后刷新");
  seed({
    version: 2,
    recents: [],
    slots: {
      "1": { projectDir: "P1", recentProjects: ["P1", "A", "B"] },
      "2": { projectDir: "P2", recentProjects: ["P2", "C"] },
      "3": { projectDir: "P3", recentProjects: ["P3", "A"] },
    },
  });
  {
    const m = await fresh();
    const st = m.getVSCodeStore(m.acquireVSCodeSlot("t1"));
    await st.init();
    check("列表仍为空（旧实现会合并出 5 条）", J(st.state.recentProjects) === "[]", J(st.state.recentProjects));
    check("加载本身不产生落盘", saves().length === 0, "saves=" + saves().length);
  }

  /* ② 旧版载荷（连 recents 字段都没有）仍要能一次性迁移 */
  console.log("\n② 共享化之前的旧载荷：仍按槽序合并迁移");
  seed({
    version: 2,
    slots: {
      "1": { projectDir: "P1", recentProjects: ["P1", "A"] },
      "2": { projectDir: "P2", recentProjects: ["P2", "B", "A"] },
    },
  });
  {
    const m = await fresh();
    const st = m.getVSCodeStore(m.acquireVSCodeSlot("t1"));
    await st.init();
    check("合并为 P1,A,P2,B（去重 + 槽序）", J(st.state.recentProjects) === J(["P1", "A", "P2", "B"]), J(st.state.recentProjects));
  }

  /* ③ 清空后的落盘：顶层与每个槽的副本都要归零 */
  console.log("\n③ 清空后的落盘内容");
  seed({
    version: 2,
    recents: ["A", "B", "C"],
    slots: {
      "1": { projectDir: "P1", recentProjects: ["P1", "A"] },
      "2": { projectDir: "P2", recentProjects: ["P2", "B"] },
    },
  });
  {
    const m = await fresh();
    const st = m.getVSCodeStore(m.acquireVSCodeSlot("t1"));
    await st.init();
    st.clearRecentProjects();
    const sv = lastSave();
    check("顶层 recents = []", sv && J(sv.recents) === "[]", sv ? J(sv.recents) : "(no save)");
    check(
      "每个槽的 recentProjects 副本都被对齐为 []",
      sv && Object.values(sv.slots).every((s) => J(s.recentProjects) === "[]"),
      sv ? J(Object.fromEntries(Object.entries(sv.slots).map(([k, s]) => [k, s.recentProjects]))) : "(no save)",
    );
    check("清空不误伤 projectDir", sv && sv.slots["1"]?.projectDir === "P1", sv ? J(sv.slots["1"]?.projectDir) : "(no save)");
  }

  /* ④ 加载不得写历史 */
  console.log("\n④ 加载不写历史");
  seed({ version: 2, recents: [], slots: { "1": { projectDir: "P1", recentProjects: [] } } });
  {
    const m = await fresh();
    const st = m.getVSCodeStore(m.acquireVSCodeSlot("t1"));
    await st.init();
    check("空列表 + 有 projectDir → 仍是空（旧实现会被塞回 P1）", J(st.state.recentProjects) === "[]", J(st.state.recentProjects));
    check("没有任何落盘", saves().length === 0, "saves=" + saves().length);
  }

  /* ⑤ 正常打开项目仍要记录（防「修过头」） */
  console.log("\n⑤ 切换项目仍然记入历史");
  seed(undefined);
  {
    const m = await fresh();
    const st = m.getVSCodeStore(m.acquireVSCodeSlot("t1"));
    await st.init();
    st.rememberProject("D:/proj");
    check("内存即时可见", J(st.state.recentProjects) === J(["D:/proj"]), J(st.state.recentProjects));
    await new Promise((r) => setTimeout(r, 700));
    const sv = lastSave();
    check("节流后落盘到顶层 recents", sv && J(sv.recents) === J(["D:/proj"]), sv ? J(sv.recents) : "(no save)");
  }

  /* ⑥ 跨槽广播：一个窗口清空，另一个窗口的菜单同步清空 */
  console.log("\n⑥ 跨槽（多编辑器窗口）同步");
  seed({
    version: 2,
    recents: ["A", "B"],
    slots: {
      "1": { projectDir: "P1", recentProjects: ["A", "B"] },
      "2": { projectDir: "P2", recentProjects: ["A", "B"] },
    },
  });
  {
    const m = await fresh();
    const s1 = m.getVSCodeStore(m.acquireVSCodeSlot("t1"));
    const s2 = m.getVSCodeStore(m.acquireVSCodeSlot("t2"));
    await Promise.all([s1.init(), s2.init()]);
    check("两个槽初值一致（各 2 条）", s1.state.recentProjects.length === 2 && s2.state.recentProjects.length === 2);
    s1.clearRecentProjects();
    check("槽 1 清空后槽 2 同步为空", J(s2.state.recentProjects) === "[]", J(s2.state.recentProjects));
  }
}

/* ---------- 自检：把源码临时回退成修复前的逻辑，确认用例会变红 ---------- */

function patchToOld() {
  let t = readFileSync(SRC, "utf8");
  const before = t;
  // ① 迁移兜底改回「按列表空不空」判断
  t = t.replace("    if (r.recents === undefined) {", "    if (!normalizeRecents(r.recents).length) {");
  // ② parseState 恢复「把 projectDir 插回 recentProjects」
  t = t.replace(
    "  if (Array.isArray(raw.openTabs)) s.openTabs =",
    "  if (s.projectDir) s.recentProjects = [s.projectDir, ...s.recentProjects.filter((p) => p !== s.projectDir)].slice(0, RECENT_MAX);\n  if (Array.isArray(raw.openTabs)) s.openTabs =",
  );
  // ③ init 末尾恢复「加载即记录当前项目」
  t = t.replace(
    "          publishRecents([...new Set([...sharedRecents, ...state.recentProjects])].slice(0, RECENT_MAX));",
    "          publishRecents([...new Set([...sharedRecents, ...state.recentProjects])].slice(0, RECENT_MAX));\n          if (state.projectDir) rememberProject(state.projectDir);",
  );
  if (t === before) throw new Error("self-test: 源码结构与预期不符，回退补丁未命中任何一处");
  writeFileSync(SRC, t);
}

/* ---------- 主流程 ---------- */

writeStubs();
try {
  if (SELF_TEST) {
    writeFileSync(BAK, readFileSync(SRC, "utf8"));
    patchToOld();
    console.log("== self-test：源码已临时回退为修复前逻辑，以下断言**应当**出现 FAIL ==");
  }

  await bundle();
  await run();

  if (SELF_TEST) {
    const behaviorCaught = fail > 0;
    console.log("\nself-test：" + (behaviorCaught ? "用例确实抓到了旧行为（预期内的 " + fail + " 条 FAIL）" : "⚠️ 用例在旧逻辑下竟然全绿 —— 断言没有判别力，必须修"));
    console.log("\n" + pass + " passed, " + fail + " failed (self-test 模式：FAIL 属预期)");
    process.exitCode = behaviorCaught ? 0 : 1;
  } else {
    console.log("\n" + pass + " passed, " + fail + " failed");
    process.exitCode = fail ? 1 : 0;
  }
} finally {
  // 源码还原放在 finally：self-test 期间**任何**异常都不能把回退版留在工作区。
  if (SELF_TEST && existsSync(BAK)) writeFileSync(SRC, readFileSync(BAK, "utf8"));
  cleanup();
}
