/**
 * 静态回归：`<script setup>` 之外的**模块作用域注册表**确实在模块块里。
 *
 * ## 治的是什么
 *
 * `<script setup>` 的顶层代码被编译**进 `setup()`**，每次挂载都会重跑。所以任何
 * 「跨挂载存活」的注册表（`new Map()` / `new Set()` / 常量）如果写在 `<script setup>` 里，
 * 就会随每次挂载重置 —— 而 DSH 右侧面板切 tab 会让 React 桥接层把整个 Vue 应用
 * **卸载再重建**，于是这些守卫、缓存**全部失效**，表现为「每次切换请求好几遍接口」。
 *
 * 这个错误在**构建产物里看不出来**（产物照样 200、功能「基本正常」，只是重复请求），
 * `vue-tsc` 也抓不到（唯一的例外是「同一文件里重复声明」会报，但那是运气）。
 * 因此必须有一条**静态断言**钉住它：见本脚本。
 *
 * ## 断言
 *
 *  1. 目标组件**同时**存在 `<script lang="ts">`（模块块）与 `<script setup>`，且模块块在前；
 *  2. 每个登记的注册表名**只声明一次**（防「迁移后残留第二份声明」——本轮实测踩过）；
 *  3. 该声明**不在 `<script setup>` 块的范围内**（即落在模块块里）。
 *
 * ## ⚠️ 实现要点（第一版就在这里翻过车）
 *
 * 定位块**不能**用 `source.indexOf("<script setup")` —— 模块块的注释里会**正当提到**
 * `<script setup>` 这个词，朴素子串搜索会命中注释、把 setup 块起点算到注释里，
 * 于是所有声明都被判成「落在 setup 内」（第一版就全红误报）。
 * 真实 SFC 的块标签**必定独占行首**，故一律用 `^<script …>` 多行正则定位。
 *
 * 判别力自证（末尾 ③）：把「注册表写在 `<script setup>` 里」的坏样本喂给同一个 `audit()`，
 * 确认它确实报问题 —— 否则说明断言是空的（常绿假阳性）。
 *
 * 用法：node scripts/check-sfc-scope.mjs
 */
import { readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

/** 登记：哪些文件里的哪些名字必须是「模块作用域」的。新增跨挂载注册表时补这里。 */
const TARGETS = [
  {
    file: "src/vue/components/business/vscode/CodeEditor.vue",
    regs: ["liveEditorViews", "disposedEditorSlots"],
  },
  {
    file: "src/vue/components/business/vscode/ProjectTree.vue",
    regs: ["treeCaches", "TREE_REVALIDATE_MS", "AUTO_EXPAND_SKIP"],
  },
  {
    file: "src/vue/components/business/vscode/VSCodePane.vue",
    regs: ["healedSlots", "indexPrefetched"],
  },
];

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

/** 去掉块注释，避免注释里的示例文本污染「声明位置」的判定。 */
const stripBlockComments = (s) => s.replace(/\/\*[\s\S]*?\*\//g, (m) => " ".repeat(m.length));

/**
 * 找出所有真实 `<script>` 块（标签独占行首，故用 `^` + m 标志）。
 * @returns {{start:number, bodyStart:number, bodyEnd:number, isSetup:boolean}[]}
 */
function findScriptBlocks(source) {
  const re = /^<script\b[^>]*>/gm;
  const out = [];
  let m;
  while ((m = re.exec(source)) !== null) {
    const tag = m[0];
    const close = source.indexOf("</script>", m.index + tag.length);
    out.push({
      start: m.index,
      bodyStart: m.index + tag.length,
      bodyEnd: close === -1 ? source.length : close,
      isSetup: /\bsetup\b/.test(tag),
    });
  }
  return out;
}

/**
 * 审计一份 SFC 源码。
 * @returns 问题描述数组（空数组 = 通过）。
 */
export function audit(source, regs) {
  const problems = [];
  const clean = stripBlockComments(source);
  const blocks = findScriptBlocks(clean);
  const mod = blocks.find((b) => !b.isSetup);
  const setup = blocks.find((b) => b.isSetup);

  if (!mod) problems.push('缺少模块作用域块 <script lang="ts">');
  if (!setup) problems.push("缺少 <script setup>");
  if (!mod || !setup) return problems;
  if (mod.start > setup.start) problems.push('模块块 <script lang="ts"> 必须排在 <script setup> 之前');

  for (const name of regs) {
    const decl = new RegExp("(?:^|[^\\w$.])const\\s+" + name + "\\s*[:=]", "g");
    const hits = [];
    let m;
    while ((m = decl.exec(clean)) !== null) hits.push(m.index);
    if (hits.length === 0) {
      problems.push(`${name}: 找不到声明`);
      continue;
    }
    if (hits.length > 1) problems.push(`${name}: 声明了 ${hits.length} 次（迁移后残留？）`);
    for (const at of hits) {
      if (at >= setup.bodyStart && at < setup.bodyEnd) {
        problems.push(`${name}: 声明落在 <script setup> 内（每次挂载都会重建）`);
      }
    }
  }
  return problems;
}

console.log("① 真实组件：跨挂载注册表都在模块块里");
for (const t of TARGETS) {
  const src = readFileSync(join(ROOT, t.file), "utf8");
  const problems = audit(src, t.regs);
  check(`${t.file}（${t.regs.length} 个注册表）`, problems.length === 0, problems.join("; "));
}

console.log("\n② 真实组件里每个注册表只声明一次");
for (const t of TARGETS) {
  const src = stripBlockComments(readFileSync(join(ROOT, t.file), "utf8"));
  const dup = t.regs.filter(
    (n) => (src.match(new RegExp("(?:^|[^\\w$.])const\\s+" + n + "\\s*[:=]", "g")) || []).length !== 1,
  );
  check(`${t.file} 无重复/缺失声明`, dup.length === 0, dup.join(", "));
}

console.log("\n③ 判别力自证：坏样本必须被抓住");
{
  const bad = ['<script setup lang="ts">', "const leakyCache = new Map();", "</script>", ""].join("\n");
  const p = audit(bad, ["leakyCache"]);
  check("注册表写在 <script setup> 内 → 报问题", p.length > 0, p.join("; "));

  const badDup = [
    '<script lang="ts">',
    "const c = new Map();",
    "</script>",
    "",
    '<script setup lang="ts">',
    "const c = new Map();",
    "</script>",
    "",
  ].join("\n");
  const p2 = audit(badDup, ["c"]);
  check("同文件重复声明 → 报问题", p2.length > 0, p2.join("; "));

  const good = [
    '<script lang="ts">',
    "const okCache = new Map();",
    "</script>",
    "",
    '<script setup lang="ts">',
    "const x = okCache.get(1);",
    "</script>",
    "",
  ].join("\n");
  const p3 = audit(good, ["okCache"]);
  check("正确写法 → 不报问题（避免自我误报）", p3.length === 0, p3.join("; "));

  // 回归第一版的误报：模块块注释里**提到** `<script setup>` 不该影响块定位。
  const mention = [
    '<script lang="ts">',
    "// 注意：<script setup> 的顶层代码每次挂载都会重跑。",
    "const realCache = new Map();",
    "</script>",
    "",
    '<script setup lang="ts">',
    "</script>",
    "",
  ].join("\n");
  const p4 = audit(mention, ["realCache"]);
  check("注释中提及 setup 不导致误报", p4.length === 0, p4.join("; "));
}

console.log("\n" + pass + " passed, " + fail + " failed");
process.exitCode = fail ? 1 : 0;
