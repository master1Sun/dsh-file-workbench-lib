/**
 * 提示（Toast）UI 的静态回归：文案过长必须折叠成省略号，且有看全文的出口。
 *
 * 为什么不用渲染级测试：ToastHost 是挂在 body 上的独立 Vue 应用，要真渲染得拉起 DOM +
 * 编译时（本仓的回归脚本都不做这一步）。这里退一步只查「折叠规则还在不在」——它足够
 * 挡住最典型的回归：有人为了「先看到全文」把 line-clamp 或 overflow 改掉，长报错又把
 * 气泡撑成半屏高。
 *
 * 用法：node scripts/check-toast.mjs            （查工作区文件，应全绿）
 *       node scripts/check-toast.mjs --old     （查 git HEAD 版本，应当变红 —— 判别力自证）
 */
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const REL = "src/vue/components/common/ToastHost.vue";

let pass = 0;
let fail = 0;
function check(name, ok, detail = "") {
  if (ok) {
    pass++;
    console.log(`  ok   ${name}`);
  } else {
    fail++;
    console.log(`  FAIL ${name}${detail ? ` — ${detail}` : ""}`);
  }
}

const oldMode = process.argv.includes("--old");
const src = oldMode
  ? execFileSync("git", ["show", `HEAD:${REL}`], { cwd: ROOT, encoding: "utf8" })
  : readFileSync(join(ROOT, REL), "utf8");

console.log(oldMode ? "① 旧版本（HEAD）应当不满足折叠规则" : "① 提示文案过长应折叠为省略号");
{
  // 取 .fw-toast-msg 的样式块（到下一个顶层规则为止）。
  const m = /\.fw-toast-msg\s*\{([\s\S]*?)\n\}/.exec(src);
  const block = m?.[1] ?? "";
  check("存在 .fw-toast-msg 规则", !!m);

  const clamp = /-webkit-line-clamp:\s*(\S+);/.exec(block);
  check("限定了最大行数（line-clamp）", !!clamp, block.slice(0, 80));
  const n = clamp ? Number.parseInt(clamp[1], 10) : 0;
  check("行数上限是正整数（写成 0/none 等于没折叠）", Number.isInteger(n) && n > 0, clamp?.[1]);
  check("配合 -webkit-box 才能生效", /display:\s*-webkit-box/.test(block));
  check("配合 overflow: hidden 才会出省略号", /overflow:\s*hidden/.test(block));
  check(
    "仍允许超长无空格串断行（溢出气泡是老毛病）",
    /overflow-wrap:\s*anywhere/.test(block),
  );
}

console.log("\n② 折叠后必须能看全文");
{
  // ⛔ 必须限定在同一个开标签内（[^>]*）：用 [\s\S]*? 会跨过 `>` 吃到前面的兄弟节点，
  //    旧代码里恰好也能「命中 title」而让断言假绿。
  const msgTag = /<span[^>]*fw-toast-msg[^>]*>/.exec(src)?.[0] ?? "";
  check("文案节点带 title（悬停看全文，且悬停会暂停倒计时）", /:title=/.test(msgTag), msgTag.slice(0, 120));
  check("点击可展开全文（is-open）", /is-open/.test(src) && /toggleOpen/.test(src));
  check(
    "展开态解除行数上限",
    /\.fw-toast-msg\.is-open\s*\{[\s\S]*?line-clamp:\s*unset/.test(src),
  );
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
