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
import { mkdir, rm, stat } from "node:fs/promises";
import { dirname, join } from "node:path";

import { deriveRepoDirName, sanitizeRepoDirName } from "../../shared/repo.js";
import { FsError, isProtectedPath } from "../fs/fs-tree.js";
import { guardWriteTarget, json, readBody, requireAbsolute, type RouteMatcher } from "./routes-util.js";

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

/** svn 命令超时（毫秒）：与 git 克隆同理，避免请求无限挂着占住连接。 */
const SVN_TIMEOUT_MS = 10 * 60 * 1000;

/** 执行 svn 命令并返回退出码/输出（供前端命令台与写操作使用，失败不抛错）。 */
async function svnRun(args: string[], cwd: string): Promise<{ code: number; stdout: string; stderr: string }> {
  const exe = await resolveSvnExe();
  if (!exe) return { code: 127, stdout: "", stderr: "未找到可用的 svn 命令行工具，请安装 Subversion（含命令行客户端）" };
  try {
    const { stdout, stderr } = await execFileP(exe, args, {
      cwd,
      windowsHide: true,
      encoding: "buffer",
      maxBuffer: 32 * 1024 * 1024,
      timeout: SVN_TIMEOUT_MS,
    });
    return { code: 0, stdout: decodeSvnOutput(stdout as Buffer).trim(), stderr: decodeSvnOutput(stderr as Buffer).trim() };
  } catch (error) {
    const e = error as NodeJS.ErrnoException & { stderr?: Buffer | string; stdout?: Buffer | string; killed?: boolean };
    // 超时被 kill 时 code 不是数字（null/undefined），若不特判会退成 "exit 1"，
    // 用户看到的原因与真实情况（超时）完全不符。
    const code = e.killed ? 124 : typeof e.code === "number" ? Number(e.code) : 1;
    return {
      code,
      stdout: e.stdout ? decodeSvnOutput(e.stdout as Buffer).trim() : "",
      stderr: (e.killed ? `svn 命令超时（${Math.round(SVN_TIMEOUT_MS / 1000)}s，已终止）` : e.stderr ? decodeSvnOutput(e.stderr as Buffer) : e.message ?? String(error)).trim(),
    };
  }
}

/** 目标路径是否已存在（用于「已存在即 409」前置拦截）。 */
async function pathExists(p: string): Promise<boolean> {
  return stat(p).then(
    () => true,
    () => false,
  );
}

/**
 * `svn info` 标签 → 字段名。
 *
 * 标签随 svn 界面语言变化，**不能只按英文匹配**（否则中文环境下 revision 永远读不到，
 * 版本 pill 显示「—」、更新摘要出现 `r?`）。这里按「首个冒号前的整段标签」精确查表，
 * 未命中的行直接忽略——精确匹配可避免 `版本库根` / `最后修改的版本` 误撞 `版本`。
 *
 * 各语言取值以**真实 `svn info` 输出**为准（svn 1.8.17 + zh_CN 实测）：
 *   URL: file:///…            → url
 *   正确的相对 URL: ^/        → relativeUrl
 *   版本: 2                   → revision
 * 新增语言时补进此表即可（勿凭翻译记忆，实测一条中文 WC 的 `svn info` 最省事）。
 */
const SVN_INFO_LABELS: Record<string, "url" | "relativeUrl" | "revision"> = {
  url: "url",
  "relative url": "relativeUrl",
  "正确的相对 url": "relativeUrl",
  "相对 url": "relativeUrl",
  revision: "revision",
  "版本": "revision",
  "修订版": "revision",
};

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

  // 远端（ssh）引用短路：与 git 同理，避免 requireAbsolute 把远端引用报成「不是绝对路径」。
  const rawPath = (q.get("path") ?? "").trim();
  if (rawPath.startsWith("ssh://")) {
    if (method === "GET" && op === "info") {
      return (
        json(res, 200, {
          ok: true,
          data: { inRepo: false, root: null, svnAvailable: false, url: null, revision: null, relativeUrl: null },
        }),
        true
      );
    }
    return (json(res, 501, { ok: false, error: "svn is not supported on remote (ssh) paths" }), true);
  }

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
        // 兼容 svn 1.8（无 --show-item）：读完整 info 输出后解析标签行。
        // svn 1.8 中文标签为 `版本:` / `正确的相对 URL:`，与英文不同名，故走 SVN_INFO_LABELS 查表。
        const text = await svn(["info"], root, "无法读取仓库信息");
        for (const line of text.split(/\r?\n/)) {
          const m = line.match(/^([^:]+):\s*(.*)$/);
          if (!m) continue;
          const field = SVN_INFO_LABELS[m[1].trim().toLowerCase()];
          if (!field || data[field]) continue;
          data[field] = m[2].trim() || null;
        }
      } catch {
        /* 信息读取失败不影响判定 */
      }
    }
    return (json(res, 200, { ok: true, data }), true);
  }

  // —— 检出工作副本（POST /svn/checkout）：把远端仓库拉到本地**新目录** ——
  if (op === "checkout" && method === "POST" && seg.length === 2) {
    const body = (await readBody(req)) as {
      url?: string;
      dir?: string;
      name?: string;
      revision?: string;
      key?: string;
    } | null;
    const rawUrl = (body?.url ?? "").trim();
    if (!rawUrl) return (json(res, 400, { ok: false, error: "url required" }), true);
    const dir = requireAbsolute((body?.dir ?? "").trim());
    const givenName = (body?.name ?? "").trim();
    const name = givenName ? sanitizeRepoDirName(givenName) : deriveRepoDirName(rawUrl);
    if (!name) {
      return (
        json(res, 400, {
          ok: false,
          error: "invalid or missing target directory name (must not be empty or contain path separators)",
        }),
        true
      );
    }
    const target = join(dir, name);
    await guardWriteTarget(body?.key, target);
    if (await pathExists(target)) {
      return (json(res, 409, { ok: false, error: `target already exists: ${target}` }), true);
    }
    // svn CLI 缺失是**环境问题**（不是请求错），但要给出可操作的原因，别落成 500 的裸英文。
    if (!(await resolveSvnExe())) {
      throw new FsError(
        "fs-error",
        "未找到可用的 svn 命令行工具，请安装 Subversion（含命令行客户端）后重试",
        400,
      );
    }
    await mkdir(dir, { recursive: true });
    // `--non-interactive`：无 tty 时可交互的凭据询问会挂住，必须显式关掉（同 git 的
    // GIT_TERMINAL_PROMPT=0）。私有仓库请用带凭据的 URL 或在 svn 配置里存好。
    const args = ["checkout", "--non-interactive"];
    const rev = (body?.revision ?? "").trim();
    if (/^-?\d+$/.test(rev)) args.push("-r", rev);
    args.push("--", rawUrl, target);
    const r = await svnRun(args, dir);
    if (r.code !== 0) {
      await rm(target, { recursive: true, force: true }).catch(() => {});
      throw new FsError("fs-error", `svn checkout 失败: ${r.stderr || r.stdout || `exit ${r.code}`}`, 400);
    }
    return (json(res, 200, { ok: true, data: { path: target, name, stdout: r.stdout, stderr: r.stderr } }), true);
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
