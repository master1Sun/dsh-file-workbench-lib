/**
 * 静态回归：`--dsh-*` 令牌「用了但没定义」。
 *
 * ## 治的是什么
 *
 * 组件里到处写 `var(--dsh-x, <兜底值>)`，而兜底值清一色是**写死的深色系**
 * （`#161b22` / `#21262d` / `#8b949e` …）。只要某个令牌忘了在 `styles.css` 里定义，
 * 它就会**永远**落到那个深色兜底上 —— 深色模式毫无异常（因为兜底本来就是深色），
 * 白天模式下却会漏出一块黑（界面上表现为「白天了这里还是黑的」）。
 *
 * 2026-09-16 的真实事故：终端最小化卡片标题条用 `--dsh-bg3`，而这个令牌从未定义 →
 * 白天模式卡片顶部一条黑条。`vue-tsc` 抓不到、构建产物照样正常、深色模式完全看不出。
 *
 * ## 断言口径
 *
 * 「**面向使用者眼睛**的令牌」必须显式定义：面（`bg*`）、墨（`fg*`）、边框、
 * 悬停面、选区、警示色 —— 这些一旦缺定义就会露出与主题相悖的颜色。
 * 定义来源三处都算：`styles.css` 的 `--dsh-x:` 声明、`theme.ts` 的 TOKEN_MAP
 * 运行期映射、以及代码里的 `setProperty("--dsh-x", …)`（如用户自定义强调色）。
 *
 * 刻意**不**纳入 `--dsh-accent-soft` / `--dsh-accent-weak` 这类**装饰性半透明强调色**：
 * 它们每个调用点的兜底值都是**特意选过的局部色**（搜索面板的改动用橙色、目录树用绿色…），
 * 统一成一个值反而会把各处的语义色涂平；且它们与主题明暗无关（半透明叠色）。
 *
 * ## 判别力自证（末尾 ④/⑤）
 *
 * 把 `styles.css` 里的 `--dsh-bg3` 定义**在内存里剥掉**，喂给同一个 `audit()`，
 * 必须报出「用了但没定义」—— 否则说明这条断言是空的（常绿假阳性）。
 *
 * 用法：node scripts/check-tokens.mjs
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const VUE_SRC = join(ROOT, "src", "vue");

/** 必须显式定义的令牌族（缺定义 → 会露出与主题相悖的颜色）。 */
const REQUIRED = /^--dsh-(bg\d*|fg(-[a-z]+)?|border|hover|select|warn)$/;

/** 递归收集 .vue/.ts/.tsx/.css 源文件。 */
function walk(dir, out = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (/\.(vue|ts|tsx|css)$/.test(e.name)) out.push(p);
  }
  return out;
}

/** 从所有源码里收集 `var(--dsh-x` 的引用（相对路径 + 令牌名）。 */
function collectUses(files) {
  const uses = [];
  for (const f of files) {
    const text = readFileSync(f, "utf8");
    for (const m of text.matchAll(/var\((--dsh-[a-z0-9-]+)/g)) {
      uses.push({ file: f.slice(ROOT.length + 1), token: m[1] });
    }
  }
  return uses;
}

/** 收集「已定义」的令牌集合：styles.css 声明 + theme.ts TOKEN_MAP + setProperty 内联。 */
function collectDefs(files) {
  const defs = new Set();
  const css = readFileSync(join(VUE_SRC, "styles.css"), "utf8");
  for (const m of css.matchAll(/(--dsh-[a-z0-9-]+)\s*:/g)) defs.add(m[1]);
  const theme = readFileSync(join(VUE_SRC, "composables", "core", "theme.ts"), "utf8");
  for (const m of theme.matchAll(/\[\s*"(--dsh-[a-z0-9-]+)"/g)) defs.add(m[1]);
  for (const f of files) {
    const text = readFileSync(f, "utf8");
    for (const m of text.matchAll(/setProperty\(\s*"(--dsh-[a-z0-9-]+)"/g)) defs.add(m[1]);
  }
  return defs;
}

/**
 * 核心校验（纯函数，便于自证）：返回「用了但没定义」的家族内令牌明细。
 * @param {{file:string,token:string}[]} uses
 * @param {Set<string>} defs
 */
function audit(uses, defs) {
  const bad = [];
  const seen = new Set();
  for (const u of uses) {
    if (!REQUIRED.test(u.token)) continue;
    if (defs.has(u.token)) continue;
    const key = u.token + "@" + u.file;
    if (seen.has(key)) continue;
    seen.add(key);
    bad.push(u.token + " (在 " + u.file + ")");
  }
  return bad;
}

let pass = 0;
let fail = 0;
function check(name, ok, detail = "") {
  if (ok) {
    pass++;
    console.log("  ok   " + name);
  } else {
    fail++;
    console.log("  FAIL " + name + (detail ? "  → " + detail : ""));
  }
}

console.log("check-tokens: --dsh-* 令牌「用了但没定义」\n");

const files = walk(VUE_SRC);
// 统计口径先自检：确实扫到了源码（避免「一个文件都没读到」也算通过）。
check("扫到源码文件", files.length > 30, "files=" + files.length);

const uses = collectUses(files);
const defs = collectDefs(files);
check("收集到 var(--dsh-*) 引用", uses.length > 100, "uses=" + uses.length);
check("收集到令牌定义", defs.size >= 10, "defs=" + defs.size);

// ① 令牌族口径本身要认得出来（防止正则写歪导致整条断言恒真）。
check("家族识别：--dsh-bg3 属于必检族", REQUIRED.test("--dsh-bg3"));
check("家族识别：--dsh-fg-weak 属于必检族", REQUIRED.test("--dsh-fg-weak"));
check(
  "家族识别：--dsh-accent-soft 刻意不检（装饰性叠色）",
  !REQUIRED.test("--dsh-accent-soft"),
);

// ② 主断言：家族内不得有「用了但没定义」的令牌。
const bad = audit(uses, defs);
check("所有面向眼睛的 --dsh-* 令牌都有定义", bad.length === 0, bad.join("; "));

// ③ 反向自证：造一个绝对没定义的家族令牌，audit 必须报出来。
const bogus = audit([{ file: "synthetic.vue", token: "--dsh-bg9" }], defs);
check("自证：伪造的 --dsh-bg9 被抓出", bogus.length === 1, bogus.join("; "));

// ④ 判别力自证（本次真实事故回放）：内存里剥掉 styles.css 的 --dsh-bg3 定义，
//    同一份 uses / 同一个 audit 必须报红 —— 证明这条断言真的抓得到那个 bug。
const cssNoBg3 = readFileSync(join(VUE_SRC, "styles.css"), "utf8").replace(
  /^\s*--dsh-bg3\s*:[^;]*;\s*$/gm,
  "",
);
check(
  "自证：bg3 定义被剥离后（模拟修复前）",
  !/(--dsh-bg3)\s*:/.test(cssNoBg3),
  "剥离失败，样本无效",
);
const defsNoBg3 = new Set(defs);
defsNoBg3.delete("--dsh-bg3");
// 用**真实源码**回放这次事故（`TerminalMiniWindow` 的卡片标题条确实引用了 --dsh-bg3）；
// 万一将来那处 UI 被重构掉，退化为合成用例，保证这条自证永远有效、不会因源码变动而失真。
const usesBg3 = uses.some((u) => u.token === "--dsh-bg3");
const witness = usesBg3 ? uses : [{ file: "synthetic.vue", token: "--dsh-bg3" }];
const regressed = audit(witness, defsNoBg3);
check(
  "自证：修复前必须报红（--dsh-bg3 用了但没定义）",
  regressed.some((x) => x.startsWith("--dsh-bg3")),
  regressed.join("; ") || "没报出来 → 断言是空的",
);
check("自证：回放用的是真实源码引用", usesBg3, usesBg3 ? "" : "已退化为合成用例");

// ⑤ 反向：把定义补回去，必须重新变绿（证明报红只因缺定义，而非别的噪声）。
check(
  "自证：把 bg3 定义补回后恢复通过",
  audit(uses, defs).length === 0,
  audit(uses, defs).join("; "),
);

console.log("\n" + pass + " passed, " + fail + " failed");
process.exitCode = fail ? 1 : 0;
