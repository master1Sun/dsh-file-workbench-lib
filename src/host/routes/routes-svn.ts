/**
 * SVN 资源路由：通过 child_process.execFile 直接调用系统 `svn` CLI。
 *
 * 与 git 路由保持一致——不把 svn 库打进宿主 bundle，而是走 CLI。每次调用都基于
 * 用户提供的绝对路径向上查找工作副本根（存在 `.svn` 即视为工作副本），再在该工作
 * 副本上执行对应命令；非工作副本内、或命中受保护只读目录，一律拒绝执行写操作。
 *
 * 只读的「是否处于工作副本」通过向上查找 `.svn` 目录判断（SVN 1.7+ 工作副本仅在
 * 根目录含 `.svn`）。
 */
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";

import { FsError, isProtectedPath } from "../fs/fs-tree.js";
import { json, readBody, requireAbsolute, type RouteMatcher } from "./routes-util.js";

const execFileP = promisify(execFile);

/**
 * 解码 svn 输出：中文 Windows 下 svn 重定向输出按系统 ANSI 代码页（GBK）编码，
 * 而 `svn log --xml` 等按 UTF-8 输出。先按 UTF-8 严格解码（含非法序列即失败），
 * 失败则回退 GBK；宿主 Node 无 gbk 支持时再回退 UTF-8 宽松解码。
 */
function decodeSvnOutput(buf: Buffer): string {
  try {
    return new TextDecoder("utf-8", { fatal: true }).decode(buf);
  } catch {
    /* 非 UTF-8，尝试 GBK */
  }
  try {
    return new TextDecoder("gbk").decode(buf);
  } catch {
    return buf.toString("utf8");
  }
}

/**
 * 解析 svn 可执行文件路径：优先 PATH 中的 `svn`，否则探测 Windows 常见安装位置
 * （本机曾出现 svn 装在 `C:\Program Files (x86)\Subversion\bin` 但未加入 PATH 的情况）。
 * 每个候选都会实际执行 `svn --version --quiet` 验证可用，结果（含 null）缓存。
 */
let svnExeCache: string | null | undefined;
const SVN_CANDIDATES = [
  "svn",
  "C:\\Program Files\\Subversion\\bin\\svn.exe",
  "C:\\Program Files (x86)\\Subversion\\bin\\svn.exe",
  "C:\\Program Files\\SlikSvn\\bin\\svn.exe",
  "C:\\Program Files (x86)\\SlikSvn\\bin\\svn.exe",
  "C:\\Program Files\\VisualSVN\\bin\\svn.exe",
  "C:\\Program Files (x86)\\VisualSVN\\bin\\svn.exe",
  "C:\\Program Files\\TortoiseSVN\\bin\\svn.exe",
  "C:\\Program Files (x86)\\TortoiseSVN\\bin\\svn.exe",
];
async function resolveSvnExe(): Promise<string | null> {
  if (svnExeCache !== undefined) return svnExeCache;
  for (const exe of SVN_CANDIDATES) {
    if (exe !== "svn" && !existsSync(exe)) continue;
    try {
      await execFileP(exe, ["--version", "--quiet"], { windowsHide: true, encoding: "utf8" });
      svnExeCache = exe;
      return exe;
    } catch {
      /* 候选不可用，尝试下一个 */
    }
  }
  svnExeCache = null;
  return null;
}

/** 执行 svn 命令并在失败时抛出 FsError（版本探测等读操作使用）。 */
async function svn(args: string[], cwd: string, hint = "svn 命令执行失败"): Promise<string> {
  const exe = await resolveSvnExe();
  if (!exe) throw new FsError("fs-error", `${hint}: 未找到可用的 svn 命令行工具`, 500);
  try {
    const { stdout } = await execFileP(exe, args, { cwd, windowsHide: true, encoding: "buffer" });
    return decodeSvnOutput(stdout as Buffer).trim();
  } catch (error) {
    const e = error as NodeJS.ErrnoException & { stderr?: Buffer | string };
    const errText = e.stderr ? decodeSvnOutput(e.stderr as Buffer) : "";
    throw new FsError("fs-error", `${hint}: ${errText.trim() || e.message || String(error)}`, 500);
  }
}

/** 执行 svn 命令并返回退出码/输出（供前端命令台与写操作使用，失败不抛错）。 */
async function svnRun(args: string[], cwd: string): Promise<{ code: number; stdout: string; stderr: string }> {
  const exe = await resolveSvnExe();
  if (!exe) return { code: 127, stdout: "", stderr: "未找到可用的 svn 命令行工具，请安装 Subversion（含命令行客户端）" };
  try {
    const { stdout, stderr } = await execFileP(exe, args, { cwd, windowsHide: true, encoding: "buffer", maxBuffer: 32 * 1024 * 1024 });
    return { code: 0, stdout: decodeSvnOutput(stdout as Buffer).trim(), stderr: decodeSvnOutput(stderr as Buffer).trim() };
  } catch (error) {
    const e = error as NodeJS.ErrnoException & { stderr?: Buffer | string; stdout?: Buffer | string };
    return {
      code: typeof e.code === "number" ? Number(e.code) : 1,
      stdout: e.stdout ? decodeSvnOutput(e.stdout as Buffer).trim() : "",
      stderr: (e.stderr ? decodeSvnOutput(e.stderr as Buffer) : e.message ?? String(error)).trim(),
    };
  }
}

/** 向上查找 .svn 目录（SVN 工作副本仅在根目录含 .svn）。非工作副本返回 null。 */
export function findSvnRoot(start: string): string | null {
  let cur = start;
  for (;;) {
    try {
      if (existsSync(join(cur, ".svn"))) return cur;
    } catch {
      /* 权限/符号链接异常，继续向上 */
    }
    const parent = dirname(cur);
    if (parent === cur) return null;
    cur = parent;
  }
}

/** 探测 svn CLI 是否可用（执行一次 svn --version --quiet，结果缓存）。 */
/** 探测 svn CLI 是否可用：复用 resolveSvnExe 的候选路径解析与验证（结果已在其内部缓存）。 */
async function checkSvn(): Promise<boolean> {
  return (await resolveSvnExe()) !== null;
}

export const svnResource: RouteMatcher = async (req, res, seg, q, method, host) => {
  void host;
  if (seg[0] !== "svn") return false;
  const op = seg[1];

  // —— 探测工作副本 + 环境（GET /svn/info） ——
  if (op === "info" && method === "GET" && seg.length === 2) {
    const dir = requireAbsolute(q.get("path")?.trim() ?? "");
    const root = findSvnRoot(dir);
    const available = await checkSvn();
    const data: {
      inRepo: boolean;
      root: string | null;
      svnAvailable: boolean;
      url: string | null;
      revision: string | null;
      relativeUrl: string | null;
    } = { inRepo: !!root, root, svnAvailable: available, url: null, revision: null, relativeUrl: null };
    if (root && available) {
      try {
        // 兼容 svn 1.8（无 --show-item）：读完整 info 输出后解析标签行
        const text = await svn(["info"], root, "无法读取仓库信息");
        for (const line of text.split(/\r?\n/)) {
          const m = line.match(/^(URL|Relative URL|Revision):\s*(.*)$/);
          if (!m) continue;
          if (m[1] === "URL") data.url = m[2].trim() || null;
          else if (m[1] === "Relative URL") data.relativeUrl = m[2].trim() || null;
          else data.revision = m[2].trim() || null;
        }
      } catch {
        /* 信息读取失败不影响判定 */
      }
    }
    return (json(res, 200, { ok: true, data }), true);
  }

  // —— 通用命令执行（POST /svn/run）：复用前端 GUI 发起的任意 svn 子命令 ——
  if (op === "run" && method === "POST" && seg.length === 2) {
    const body = (await readBody(req)) as { path?: string; args?: unknown[] } | null;
    const dir = requireAbsolute(body?.path?.trim() ?? "");
    const args = (Array.isArray(body?.args) ? body.args : []).map((a: unknown) => String(a)).filter(Boolean);
    if (!args.length) return (json(res, 400, { ok: false, error: "no command" }), true);
    if (isProtectedPath(dir)) {
      return (json(res, 403, { ok: false, error: "protected path" }), true);
    }
    const root = findSvnRoot(dir) ?? dir;
    const data = await svnRun(args, root);
    return (json(res, 200, { ok: true, data }), true);
  }

  return false;
};
