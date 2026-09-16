/**
 * 仓库地址 → 子目录名（git 克隆 / svn 检出共用）。
 *
 * 放在 `shared` 是因为**两侧都要用同一套规则**：
 * - 前端：用户粘贴仓库地址时自动填「子目录名」（体验）；
 * - 宿主：落盘前**再校验一遍**（安全边界）。
 * 前端校验只防手滑，不能当安全边界 —— 请求可以绕过界面直接发，所以宿主必须自己判，
 * 而两边规则若各写一份就会随时间分叉（前端放过去的名字宿主突然拒绝，或反之）。
 */

/** 跨平台都不安全的文件名字符 + ASCII 控制字符。 */
const BAD_CHARS = /[<>:"|?*\u0000-\u001f]/g;

/** 子目录名长度上限（留足余量给路径其余部分，避免 Windows 259 字符路径上限）。 */
export const REPO_DIR_NAME_MAX = 120;

/**
 * 规整一个「子目录名」；非法返回 `null`。
 *
 * 拒绝：空串、含路径分隔符（`/` `\`）、`.` 与 `..`。
 * 替换：非法字符 → `_`；末尾的点与空格（Windows 不允许，且会与文件关联混淆）剥掉。
 *
 * ⛔ 之所以**不接受**含分隔符的名字：调用方会用 `join(dir, name)` 拼目标路径，
 *    一旦放行 `../../x` 就等于让请求方往任意目录写 —— 这类「名字里带路径」是
 *    目录穿越最经典的入口。嵌套目录让用户自己在文件树里建，不在这一步开权限。
 */
export function sanitizeRepoDirName(name: string): string | null {
  let s = (name ?? "").trim().replace(/\\/g, "/");
  if (!s) return null;
  if (s.includes("/")) return null;
  s = s.replace(BAD_CHARS, "_").replace(/[. ]+$/, "");
  if (!s || s === "." || s === "..") return null;
  if (s.length > REPO_DIR_NAME_MAX) s = s.slice(0, REPO_DIR_NAME_MAX).replace(/[. ]+$/, "");
  return s || null;
}

/**
 * 从仓库 URL 推导默认子目录名；推不出（空串 / 只有协议）返回 `""`。
 *
 * 覆盖三类常见写法：
 * ```
 * https://host/owner/repo.git   → repo
 * git@host:owner/repo.git       → repo   （scp-like，注意冒号在首个斜杠之前）
 * svn://host/repo/trunk         → trunk
 * ```
 * 末尾 `.git`（大小写不敏感）剥掉；query / fragment 先丢弃。
 */
export function deriveRepoDirName(url: string): string {
  let s = (url ?? "").trim().replace(/\\/g, "/");
  if (!s) return "";
  // scp-like 判定必须**先于**去 scheme：`git@github.com:o/r.git` 里没有 `://`，
  // 若走下面的「去掉 host」分支会把 `git@github.com:o/r.git` 整段留下（含冒号），
  // 最后取出的名字就带上了 `github.com:o`。判定条件：首个 `/` 之前出现 `:`。
  const scp = /^[^/\s]+@[^/:\s]+:(.*)$/.exec(s);
  if (scp) s = scp[1];
  else s = s.replace(/^[a-zA-Z][a-zA-Z0-9+.-]*:\/\/[^/]*/, "");
  s = s.split("?")[0].split("#")[0];
  s = s.replace(/\/+$/, "");
  const last = s.split("/").filter(Boolean).pop() ?? "";
  const name = last.replace(/\.git$/i, "");
  return sanitizeRepoDirName(name) ?? "";
}
