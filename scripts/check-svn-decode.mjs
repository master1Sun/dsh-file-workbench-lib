/**
 * SVN 输出解码的静态回归：必须「逐行」解码（UTF-8 优先、gb18030 回退），
 * 而不是对整个缓冲区做一次单编码解码。
 *
 * 背景（svn 提交日志「查看详情」乱码的根因）：
 *   svn 在中文 Windows（zh_CN 区域）下，同一段缓冲区是**混合编码**——
 *   `svn log --xml` 与 diff 的**文件内容**走 UTF-8，而 `svn diff` / `svn info`
 *   的**生成式标签**（`+++ 文件 (版本 N)`、`Cannot display: ...`）按区域 ANSI
 *   代码页（GBK）输出。若对整个缓冲区只做一次「UTF-8 严格 → GBK 回退」解码，
 *   整段因 GBK 标签字节无法通过 UTF-8 严格校验，退回 GBK 后又把 UTF-8 内容解成
 *   乱码（閰嶇疆璇存槑…）。
 *
 * 判别力自证：用 `node scripts/check-svn-decode.mjs --old` 读取 git HEAD 版本
 * （即修复前的单缓冲实现），应当全红；正常 `node scripts/check-svn-decode.mjs`
 * 应全绿。
 *
 * 用法：node scripts/check-svn-decode.mjs            （查工作区文件，应全绿）
 *       node scripts/check-svn-decode.mjs --old     （查 git HEAD 版本，应当变红）
 */
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const REL = "src/host/routes/routes-svn.ts";

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

console.log(oldMode ? "① 旧版本（HEAD）应为「单缓冲解码」——本组断言应全红" : "① 必须为逐行解码，且不残留单缓冲解码");

// 修复后的新结构：按 0x0a 切分、交给 decodeSvnLine 逐行解码。
const hasLineLoop = /0x0a/.test(src) && /decodeSvnLine/.test(src);
check("按 0x0a 切分并逐行解码（存在 0x0a 切分与 decodeSvnLine）", hasLineLoop);

// 中文回退编码应为项目统一的 gb18030（GBK 超集），而非裸 gbk。
check("中文回退编码用 gb18030（与 fs/text-codec.ts 对齐）", /gb18030/.test(src));

// 单缓冲致命解码被移除：旧实现 `new TextDecoder("utf-8",{fatal:true}).decode(buf)`。
const hasWholeBufferFatal = /new TextDecoder\(\s*"utf-8"\s*,\s*\{\s*fatal:\s*true\s*\}\s*\)\.decode\(\s*buf\s*\)/.test(src);
check("已移除「整缓冲 UTF-8 严格解码」(decode(buf))", !hasWholeBufferFatal);

// 裸 `TextDecoder("gbk")` 旧实现被移除。
const hasLiteralGbk = /TextDecoder\(\s*"gbk"\s*\)/.test(src);
check("已移除裸 TextDecoder(\"gbk\")", !hasLiteralGbk);

// decodeSvnLine 优先 UTF-8、失败再 gb18030。
check("存在 decodeSvnLine 逐行解码助手", /function decodeSvnLine/.test(src));

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
