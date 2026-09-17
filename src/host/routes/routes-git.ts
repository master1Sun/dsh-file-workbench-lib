/**
 * Git 资源路由：状态徽标 / 右键菜单的暂存、提交、查看改动、还原。
 *
 * 能力接入方式：通过 child_process.execFile 直接调用系统 git CLI（与终端路由
 * 的进程调用保持一致，避免把 git 库打进宿主 bundle 引入运行时兼容问题）。
 * 每次调用均基于用户提供的绝对路径向上查找仓库根（存在 .git 即视为仓库），
 * 再在该仓库上执行对应命令；非仓库目录一律返回 { inRepo:false }，写操作则抛 403。
 */
import { execFile, spawn } from "node:child_process";
import { promisify } from "node:util";
import { stat, readFile, appendFile, mkdir, rm } from "node:fs/promises";
import { dirname, join, posix } from "node:path";

import type {
  GitAction,
  GitDirStatus,
  GitFileStatus,
  GitLogItem,
  GitPanel,
  GitPanelFile,
  GitRunResult,
} from "../../shared/types.js";
import { deriveRepoDirName, sanitizeRepoDirName } from "../../shared/repo.js";
import { FsError, isProtectedPath } from "../fs/fs-tree.js";
import {
  guardWriteTarget,
  json,
  readBody,
  remotePathExists,
  remoteRmRf,
  remoteRun,
  REMOTE_EXEC_TIMEOUT_MS,
  requireAbsolute,
  splitSshDir,
  type RouteMatcher,
} from "./routes-util.js";
import { shellQuoteSingle } from "../ssh/ssh-core.js";
import { connFor } from "../ssh/ssh-hosts.js";
import { gitAuthInject, gitInjectFor, getAccount } from "../accounts/accounts.js";

const execFileP = promisify(execFile);

/** 执行 git 命令并在失败时抛出 FsError。 */
async function git(args: string[], cwd: string, hint = "git 命令执行失败"): Promise<string> {
  try {
    const { stdout } = await execFileP("git", args, { cwd, windowsHide: true, encoding: "utf8" });
    return stdout.trim();
  } catch (error) {
    const e = error as NodeJS.ErrnoException & { stderr?: string };
    throw new FsError("fs-error", `${hint}: ${e.stderr?.trim() || e.message || String(error)}`, 500);
  }
}

/** 执行 git 命令并返回退出码/输出（命令台与外部同步使用，失败不抛错）。 */
async function gitRun(
  args: string[],
  cwd: string,
  extraEnv?: NodeJS.ProcessEnv,
): Promise<{ code: number; stdout: string; stderr: string }> {
  try {
    const { stdout, stderr } = await execFileP("git", args, {
      cwd,
      windowsHide: true,
      encoding: "utf8",
      maxBuffer: 16 * 1024 * 1024,
      env: extraEnv ? { ...process.env, ...extraEnv } : process.env,
    });
    return { code: 0, stdout: stdout.trim(), stderr: stderr.trim() };
  } catch (error) {
    const e = error as NodeJS.ErrnoException & { stderr?: string; stdout?: string };
    return { code: typeof e.code === "number" ? Number(e.code) : 1, stdout: (e.stdout ?? "").trim(), stderr: (e.stderr ?? e.message ?? String(error)).trim() };
  }
}

/* ── 账号注入（Git） ────────────────────────────────────────────────────────
 * 命中「账号管理」里配置的账号时，把凭据注入子进程：用户名走 `-c credential.username`
 * （非机密），口令走 GIT_ASKPASS 外壳 + 环境变量（不落 argv、不落盘）。
 * 未命中则完全走 git 原生流程（系统凭据管理器 / SSH 密钥），行为向后兼容。
 */

/** 命中账号的远程地址时执行 git（注入凭据）；url 为空或无匹配 → 走原生流程。 */
async function gitRunAuth(
  args: string[],
  cwd: string,
  url: string,
): Promise<{ code: number; stdout: string; stderr: string }> {
  const inject = url ? await gitAuthInject(url) : null;
  if (!inject) return gitRun(args, cwd);
  return gitRun([...inject.args, ...args], cwd, inject.env);
}

/** 当前分支上游的远端名（无上游时回落 origin —— 与 git 自身的默认行为一致）。 */
async function upstreamRemote(root: string): Promise<string> {
  const r = await gitRun(["rev-parse", "--abbrev-ref", "--symbolic-full-name", "@{u}"], root);
  const name = r.code === 0 && r.stdout.includes("/") ? r.stdout.split("/")[0] : "";
  return name || "origin";
}

/** 取某远端在指定方向上的 URL（取不到返回空串 → 不注入）。 */
async function remoteUrlOf(root: string, remote: string, direction: "fetch" | "push"): Promise<string> {
  const args = direction === "push" ? ["remote", "get-url", "--push", remote] : ["remote", "get-url", remote];
  const r = await gitRun(args, root);
  return r.code === 0 ? (r.stdout.split(/\r?\n/)[0] ?? "").trim() : "";
}

/**
 * 从命令台参数里推断要访问的远程地址。
 *
 * 只对**会联网**的子命令做推断（push/pull/fetch/ls-remote 等）——`git status` 这类
 * 本地命令不该因为我们多跑两条 `git remote` 而变慢。
 * 优先级：参数里直接写的 URL > 参数里写的远端名 > 上游远端名。
 */
async function remoteUrlFromArgv(root: string, args: string[]): Promise<string> {
  const NET_COMMANDS = new Set(["push", "pull", "fetch", "ls-remote"]);
  const sub = args.find((a) => !a.startsWith("-"));
  if (!sub || !NET_COMMANDS.has(sub)) return "";
  const rest = args.slice(args.indexOf(sub) + 1).filter((a) => !a.startsWith("-"));
  const first = rest[0] ?? "";
  if (/^[a-z][a-z0-9+.-]*:\/\//i.test(first) || /^[^/@\s]+@[^/:\s]+:/.test(first)) return first;
  const remote = first || (await upstreamRemote(root));
  return remoteUrlOf(root, remote, sub === "push" ? "push" : "fetch");
}

/** 禁止对受保护只读目录（如 C:\Windows 整棵）内的仓库做任何 git 写操作。 */
function guardGitWritable(target: string): void {
  if (isProtectedPath(target)) {
    throw new FsError("forbidden", `path "${target}" is read-only (protected system area)`, 403);
  }
}

/** 克隆命令的超时（毫秒）：大仓库慢，但也不能让请求无限挂着。 */
const CLONE_TIMEOUT_MS = 10 * 60 * 1000;

/**
 * 执行 `git clone`：需要 `spawn` 而非 `execFile`，因为要**主动超时终止**。
 *
 * ⛔ `GIT_TERMINAL_PROMPT=0` 不可省：宿主进程没有可交互终端，若远端要求用户名/口令，
 *    git 会**一直阻塞在提示上**直到超时 —— 用户看到的是「卡住不动」，而不是「要登录」。
 *    置 0 后它会立刻报 `could not read Username`，我们把它如实回给界面。
 *    （因此 HTTPS 私有仓库请用带 token 的地址，或改用 SSH 密钥地址。）
 * `GIT_PAGER=cat` 同理：分页器在无 tty 下会挂住。
 */
function gitCloneExec(
  args: string[],
  cwd: string,
  extraEnv?: NodeJS.ProcessEnv,
): Promise<{ code: number; stdout: string; stderr: string }> {
  return new Promise((resolvePromise) => {
    let child: ReturnType<typeof spawn>;
    try {
      child = spawn("git", args, {
        cwd,
        windowsHide: true,
        env: { ...process.env, GIT_TERMINAL_PROMPT: "0", GIT_PAGER: "cat", ...extraEnv },
      });
    } catch (error) {
      resolvePromise({ code: 127, stdout: "", stderr: error instanceof Error ? error.message : String(error) });
      return;
    }
    let out = "";
    let err = "";
    let settled = false;
    const finish = (code: number): void => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      resolvePromise({ code, stdout: out.trim(), stderr: err.trim() });
    };
    const timer = setTimeout(() => {
      try {
        child.kill();
      } catch {
        /* 进程可能已退出 */
      }
      // 124 沿用 GNU timeout 的约定，便于调用方区分「超时」与普通失败。
      finish(124);
    }, CLONE_TIMEOUT_MS);
    child.stdout?.on("data", (c: Buffer) => {
      out += c.toString("utf8");
    });
    child.stderr?.on("data", (c: Buffer) => {
      err += c.toString("utf8");
    });
    child.on("error", (e) => {
      err += err ? `\n${e.message}` : e.message;
      finish(127);
    });
    child.on("close", (code) => finish(typeof code === "number" ? code : 1));
  });
}

/** 目标路径是否已存在（用于「已存在即 409」前置拦截）。 */
async function pathExists(p: string): Promise<boolean> {
  return stat(p).then(
    () => true,
    () => false,
  );
}

/** 从某路径向上查找仓库根（存在 .git 目录/文件即视为仓库）。非仓库返回 null。 */
export async function findRepoRoot(start: string): Promise<string | null> {
  let cur = start;
  for (;;) {
    try {
      await stat(join(cur, ".git"));
      return cur;
    } catch {
      /* 继续向上 */
    }
    const parent = dirname(cur);
    if (parent === cur) return null;
    cur = parent;
  }
}

/** 状态严重度（聚合时取更严重者优先展示）。 */
const RANK: Record<GitFileStatus, number> = {
  "": 0,
  untracked: 1,
  added: 2,
  modified: 3,
  deleted: 4,
};

/** 把 porcelain 单行（形如 "XY path"，重命名为 "R  old -> new"）映射为归一化状态。 */
function porcelainStatus(xy: string): GitFileStatus {
  const i = xy[0] ?? "";
  const w = xy[1] ?? "";
  if (i === "?" && w === "?") return "untracked";
  if (i === "D" || w === "D") return "deleted";
  if (i === "A") return "added";
  if (i === "R" || i === "C") return "added";
  return "modified";
}

/**
 * 由 porcelain 输出聚合成各「紧邻子项」状态（本地与远端共用）。
 * - 子项内部（含更深路径）存在任何改动 → 该子项记为 modified；
 * - 同一子项多个改动取严重度更高者。
 * `root` 为仓库根、`dir` 为浏览目录（均为归一化 POSIX 或本地路径）。
 */
function statusFromPorcelain(porcelain: string, root: string, dir: string): GitDirStatus {
  const entries: Record<string, GitFileStatus> = {};
  const baseDir = dir.replace(/\\/g, "/");
  const baseRoot = root.replace(/\\/g, "/");
  for (const line of porcelain.split("\n")) {
    if (!line.trim()) continue;
    const xy = line.slice(0, 2);
    const stripped = line.slice(3);
    // 重命名/复制：取箭头后路径作为实际路径
    const arrow = stripped.indexOf(" -> ");
    const relPath = arrow >= 0 ? stripped.slice(arrow + 4) : stripped;
    const abs = posix.join(baseRoot, relPath.replace(/\\/g, "/"));
    const rel = posix.relative(baseDir, abs);
    if (!rel || rel === "." || rel.startsWith("..")) continue;
    const segs = rel.split("/");
    const top = segs[0];
    // 深层改动（落在某子目录内）→ 该子目录归为“已修改/含改动”
    const st: GitFileStatus = segs.length > 1 ? "modified" : porcelainStatus(xy);
    if (RANK[st] > (RANK[entries[top]] ?? 0)) entries[top] = st;
  }
  return { inRepo: true, branch: "", entries };
}

/** 由 porcelain 输出拆出面板三区（未暂存 / 已暂存 / 未跟踪），本地与远端共用。 */
function panelFromPorcelain(porcelain: string): { unstaged: GitPanelFile[]; staged: GitPanelFile[]; untracked: GitPanelFile[] } {
  const unstaged: GitPanelFile[] = [];
  const staged: GitPanelFile[] = [];
  const untracked: GitPanelFile[] = [];
  for (const line of porcelain.split("\n")) {
    if (!line.trim()) continue;
    const xy = line.slice(0, 2);
    const stripped = line.slice(3);
    const arrow = stripped.indexOf(" -> ");
    const rel = (arrow >= 0 ? stripped.slice(arrow + 4) : stripped).replace(/\\/g, "/");
    const i = xy[0] ?? "";
    const w = xy[1] ?? "";
    if (i === "?" && w === "?") {
      untracked.push({ path: rel, status: "untracked" });
      continue;
    }
    const st = porcelainStatus(xy);
    if (i !== " " && i !== "?") staged.push({ path: rel, status: st });
    if (w !== " " && w !== "?") unstaged.push({ path: rel, status: st });
  }
  return { unstaged, staged, untracked };
}

/**
 * 计算某目录下各「紧邻子项」聚合的 git 状态（状态徽标数据）。
 */
async function gitStatus(dir: string): Promise<GitDirStatus> {
  const root = await findRepoRoot(dir);
  if (!root) return { inRepo: false, branch: "", entries: {} };

  const branch = await git(["branch", "--show-current"], root).catch(() => "");
  const porcelain = await git(
    ["status", "--porcelain=v1", "--untracked-files=normal"],
    root,
    "无法读取 git 状态",
  );
  const data = statusFromPorcelain(porcelain, root.replace(/\\/g, "/"), dir.replace(/\\/g, "/"));
  return { ...data, branch };
}

/** 取给定绝对路径所属仓库根；非仓库目录抛 400。 */
async function repoOf(target: string): Promise<string> {
  const root = await findRepoRoot(target);
  if (!root) throw new FsError("bad-request", `目标不在任何 git 仓库中: ${target}`, 400);
  return root;
}

/** 转成仓库根下的 POSIX 相对路径（供 add / diff / checkout 使用）。 */
function relInRepo(root: string, target: string): string {
  const rel = posix.relative(root.replace(/\\/g, "/"), target.replace(/\\/g, "/"));
  if (rel === ".." || rel.startsWith("../") || rel.includes(":")) {
    throw new FsError("bad-request", `路径不在仓库内: ${target}`, 400);
  }
  return rel;
}

/** git add —— 暂存一个文件/目录（含其下全部改动）。 */
async function gitAdd(target: string): Promise<GitAction> {
  guardGitWritable(target);
  const root = await repoOf(target);
  const rel = relInRepo(root, target);
  await git(["add", "--", rel], root, "git add 失败");
  return { ok: true, repo: root, output: `staged ${rel}` };
}

/** git commit —— 提交当前暂存的全部改动。 */
async function gitCommit(target: string, message: string): Promise<GitAction> {
  guardGitWritable(target);
  const root = await repoOf(target);
  await git(["commit", "-m", message], root, "提交失败（可能需要先配置 user.name/user.email）");
  const hash = await git(["rev-parse", "--short", "HEAD"], root).catch(() => "");
  return { ok: true, repo: root, output: hash };
}

/** git diff —— 相对最近一次提交的改动文本（含已暂存 + 未暂存，删除颜色控制符）。 */
async function gitDiff(target: string): Promise<GitAction> {
  const root = await repoOf(target);
  const rel = relInRepo(root, target);
  let output = "";
  try {
    output = await git(["diff", "HEAD", "--no-color", "--", rel], root, "无法读取改动");
  } catch {
    /* 无历史提交（首次 commit 前）时 diff HEAD 失败，按空处理 */
  }
  if (!output) {
    output = `（该路径相对 HEAD 没有可用改动；新文件请先 git add 后再查看）\n${rel}`;
  }
  return { ok: true, repo: root, output };
}

/** git checkout -- <path> —— 丢弃工作区改动（还原为暂存/HEAD 状态）。 */
async function gitDiscard(target: string): Promise<GitAction> {
  guardGitWritable(target);
  const root = await repoOf(target);
  const rel = relInRepo(root, target);
  await git(["checkout", "--", rel], root, "还原失败");
  return { ok: true, repo: root, output: `discarded ${rel}` };
}

/** git restore --staged -- <path> —— 取消暂存（把文件移回工作区未暂存状态）。 */
async function gitUnstage(target: string): Promise<GitAction> {
  guardGitWritable(target);
  const root = await repoOf(target);
  const rel = relInRepo(root, target);
  await git(["restore", "--staged", "--", rel], root, "取消暂存失败");
  return { ok: true, repo: root, output: `unstaged ${rel}` };
}

/**
 * 忽略一个文件/目录：把相对仓库根的路径追加进仓库根的 `.gitignore`。
 * 已存在相同条目则跳过（幂等）；`.gitignore` 不存在则新建。
 */
async function gitIgnore(target: string): Promise<GitAction> {
  guardGitWritable(target);
  const root = await repoOf(target);
  const rel = relInRepo(root, target).replace(/\\/g, "/").replace(/^\.\//, "");
  const giPath = join(root, ".gitignore");
  let content = "";
  try {
    content = await readFile(giPath, "utf8");
  } catch {
    /* 文件尚不存在，下面会新建 */
  }
  const lines = content.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  if (lines.includes(rel)) {
    return { ok: true, repo: root, output: `already ignored ${rel}` };
  }
  const needSep = content.length > 0 && !content.endsWith("\n");
  await appendFile(giPath, `${needSep ? "\n" : ""}${rel}\n`, "utf8");
  return { ok: true, repo: root, output: `ignored ${rel}` };
}

/** 命令台：在仓库根执行任意 git 命令（非仓库/受保护目录拒绝）。 */
async function gitRunCmd(dir: string, args: string[]): Promise<GitRunResult> {
  const root = await findRepoRoot(dir);
  if (!root) throw new FsError("bad-request", `不在任何 git 仓库内: ${dir}`, 400);
  if (isProtectedPath(root)) {
    throw new FsError("forbidden", `受保护目录内禁止执行 git 命令: ${root}`, 403);
  }
  // 联网子命令按参数推断远程地址，命中账号则注入凭据（本地命令不额外跑 git remote）。
  return gitRunAuth(args, root, await remoteUrlFromArgv(root, args));
}

/** Git 面板仓库级快照（未暂存 / 已暂存 / 未跟踪）。 */
async function gitPanel(dir: string): Promise<GitPanel> {
  const root = await findRepoRoot(dir);
  if (!root) return { inRepo: false, repo: "", branch: "", unstaged: [], staged: [], untracked: [] };
  const branch = await git(["branch", "--show-current"], root).catch(() => "");
  const porcelain = await git(["status", "--porcelain=v1", "--untracked-files=normal"], root, "无法读取 git 状态");
  return { inRepo: true, repo: root, branch, ...panelFromPorcelain(porcelain) };
}

/** 最近提交历史。 */
async function gitLog(dir: string, count: number): Promise<GitLogItem[]> {
  const root = await findRepoRoot(dir);
  if (!root) return [];
  const out = await git(
    ["log", `--max-count=${count}`, "--pretty=format:%h|%an|%ar|%s"],
    root,
    "无法读取提交历史",
  ).catch(() => "");
  if (!out) return [];
  return out.split("\n").map((line) => {
    const [hash, author, date, subject] = line.split("|");
    return { hash: hash ?? "", author: author ?? "", date: date ?? "", subject: subject ?? "" };
  });
}

/** 分支操作：create / checkout / delete。 */
async function gitBranchOp(dir: string, action: "create" | "checkout" | "delete", name: string): Promise<GitAction> {
  guardGitWritable(dir);
  const root = await repoOf(dir);
  if (!name) throw new FsError("bad-request", "缺少分支名", 400);
  if (action === "create") {
    const exists = await git(["branch", "--list", name], root).catch(() => "");
    if (exists) throw new FsError("bad-request", `分支已存在: ${name}`, 409);
    await git(["branch", name], root);
    return { ok: true, repo: root, output: `created branch ${name}` };
  }
  if (action === "checkout") {
    await git(["checkout", name], root, "切换分支失败");
    return { ok: true, repo: root, output: `switched to ${name}` };
  }
  await git(["branch", "-D", name], root, "删除分支失败");
  return { ok: true, repo: root, output: `deleted branch ${name}` };
}

/** 获取 / 设置 git user 配置（解决首次提交缺少 user.name/user.email 问题）。 */
async function gitGetUserConfig(): Promise<{ name: string; email: string }> {
  const name = await git(["config", "--global", "user.name"], process.cwd()).catch(() => "");
  const email = await git(["config", "--global", "user.email"], process.cwd()).catch(() => "");
  return { name: name.trim(), email: email.trim() };
}
async function gitSetUserConfig(name: string, email: string): Promise<GitAction> {
  if (name.trim()) await git(["config", "--global", "user.name", name.trim()], process.cwd());
  if (email.trim()) await git(["config", "--global", "user.email", email.trim()], process.cwd());
  return { ok: true, output: "已设置 git user 全局配置" };
}

/** 远程同步：fetch / pull / push。 */
async function gitSync(dir: string, action: "fetch" | "pull" | "push"): Promise<GitAction> {
  guardGitWritable(dir);
  const root = await repoOf(dir);
  // push 走 pushurl、fetch/pull 走 fetchurl（两者可不同，不能混用同一条）。
  const url = await remoteUrlOf(root, await upstreamRemote(root), action === "push" ? "push" : "fetch");
  const r = await gitRunAuth([action], root, url);
  return { ok: r.code === 0, repo: root, output: r.stderr || r.stdout || `${action} 完成` };
}

/**
 * 解析仓库的 GitHub 上下文：origin URL → owner/repo slug + 凭据管理器令牌。
 * 非 GitHub 远程 / 本机无凭据时返回 { skipped }（前端提示但不视为失败）。
 * 令牌仅在内存中使用，不落盘、不写入日志。
 */
async function ghCtx(root: string): Promise<{ slug: string; token: string } | { skipped: string }> {
  const remote = await gitRun(["remote", "get-url", "origin"], root);
  if (remote.code !== 0) return { skipped: "无法读取 origin 远程地址" };
  // https://github.com/owner/repo(.git) 与 git@github.com:owner/repo(.git) 两种形态
  const m = String(remote.stdout).trim().match(/github\.com[:/](.+?)\/(.+?)(?:\.git)?\/?$/i);
  if (!m) return { skipped: "origin 不是 GitHub 仓库" };
  const credentialFill = (): Promise<string> =>
    new Promise((resolveP) => {
      const child = spawn("git", ["credential", "fill"], { cwd: root, windowsHide: true });
      let out = "";
      child.stdout.on("data", (d: Buffer) => (out += d.toString("utf8")));
      child.on("error", () => resolveP(""));
      child.on("close", () => resolveP(out));
      child.stdin.write("protocol=https\nhost=github.com\n\n");
      child.stdin.end();
    });
  const credOut = await credentialFill();
  const token = credOut
    .split(/\r?\n/)
    .find((l) => l.startsWith("password="))
    ?.slice(9);
  if (!token) return { skipped: "本机没有 GitHub 凭据（请先用 https 方式推送一次）" };
  return { slug: `${m[1]}/${m[2]}`, token };
}

/** GitHub API 请求头（凭据管理器令牌）。 */
function ghHeaders(token: string): Record<string, string> {
  return {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "User-Agent": "dsh-file-workbench",
  };
}

/**
 * GitHub Release 创建（幂等）：release 已存在 → 直接返回其 URL 不重复创建；
 * origin 非 GitHub / 本机无凭据 / API 失败 → 返回 skipped（前端提示但不视为失败）。
 */
async function gitGhRelease(
  dir: string,
  tag: string,
  title: string,
  body: string,
): Promise<{ created: boolean; url: string; skipped?: string }> {
  const root = await repoOf(dir);
  const ctx = await ghCtx(root);
  if ("skipped" in ctx) return { created: false, url: "", skipped: ctx.skipped };

  const base = `https://api.github.com/repos/${ctx.slug}`;
  try {
    // 已有同名 release → 幂等返回其地址
    const existing = await fetch(`${base}/releases/tags/${encodeURIComponent(tag)}`, { headers: ghHeaders(ctx.token) });
    if (existing.ok) {
      const rel = (await existing.json()) as { html_url?: string };
      return { created: false, url: rel.html_url ?? "", skipped: "GitHub Release 已存在" };
    }
    const created = await fetch(`${base}/releases`, {
      method: "POST",
      headers: { ...ghHeaders(ctx.token), "Content-Type": "application/json" },
      body: JSON.stringify({ tag_name: tag, name: title, body }),
    });
    if (!created.ok) {
      const err = ((await created.json()) as { message?: string }).message ?? String(created.status);
      return { created: false, url: "", skipped: `GitHub API: ${err}` };
    }
    const rel = (await created.json()) as { html_url?: string };
    return { created: true, url: rel.html_url ?? "" };
  } catch (e) {
    return { created: false, url: "", skipped: `GitHub API 不可达: ${(e as Error).message}` };
  }
}

/** GitHub Releases 列表（最近 20 条）：供 Git 面板「版本」tab 展示。 */
async function gitGhListReleases(
  dir: string,
): Promise<{ list: Array<{ tag: string; name: string; url: string; date: string }>; skipped?: string }> {
  const root = await repoOf(dir);
  const ctx = await ghCtx(root);
  if ("skipped" in ctx) return { list: [], skipped: ctx.skipped };
  try {
    const res = await fetch(`https://api.github.com/repos/${ctx.slug}/releases?per_page=20`, {
      headers: ghHeaders(ctx.token),
    });
    if (!res.ok) {
      const err = ((await res.json()) as { message?: string }).message ?? String(res.status);
      return { list: [], skipped: `GitHub API: ${err}` };
    }
    const raw = (await res.json()) as Array<{
      tag_name?: string;
      name?: string;
      html_url?: string;
      published_at?: string;
      created_at?: string;
    }>;
    return {
      list: raw.map((r) => ({
        tag: r.tag_name ?? "",
        name: r.name || r.tag_name || "",
        url: r.html_url ?? "",
        date: (r.published_at ?? r.created_at ?? "").slice(0, 10),
      })),
    };
  } catch (e) {
    return { list: [], skipped: `GitHub API 不可达: ${(e as Error).message}` };
  }
}

/* ── 远端（ssh://）git：通过 SSH exec 在远端服务器上执行 git CLI ── */

/** 远端 git 命令的公共环境：无 tty 下防挂住（同本地 gitCloneExec 的考量）。 */
const REMOTE_GIT_ENV = "export GIT_TERMINAL_PROMPT=0 GIT_PAGER=cat;";

/** 在远端目录执行一条 git 命令（cwd = 该 ssh 引用指向的远端目录）。 */
function remoteGit(dir: string, args: string[]): Promise<{ code: number; stdout: string; stderr: string }> {
  const cmd = `${REMOTE_GIT_ENV} git ${args.map(shellQuoteSingle).join(" ")}`;
  return remoteRun(dir, cmd);
}

/** 远端目录状态：一次性取仓库根 + 当前分支 + porcelain（非仓库 → inRepo:false）。 */
async function remoteGitStatus(dir: string): Promise<GitDirStatus> {
  const script =
    `${REMOTE_GIT_ENV} git rev-parse --git-dir >/dev/null 2>&1 || exit 93;` +
    `printf '@@TOP=%s\\n' "$(git rev-parse --show-toplevel)";` +
    `printf '@@BR=%s\\n' "$(git branch --show-current)";` +
    `git status --porcelain=v1 --untracked-files=normal`;
  const r = await remoteRun(dir, script);
  if (r.code !== 0) return { inRepo: false, branch: "", entries: {} };
  const top = /^@@TOP=(.*)$/m.exec(r.stdout)?.[1]?.trim() ?? "";
  const branch = /^@@BR=(.*)$/m.exec(r.stdout)?.[1]?.trim() ?? "";
  const porcelain = r.stdout
    .split("\n")
    .filter((l) => !l.startsWith("@@TOP=") && !l.startsWith("@@BR="))
    .join("\n");
  return { ...statusFromPorcelain(porcelain, top, dir), branch };
}

/** 远端 Git 面板快照（复用 status 的组合命令，按面板三区拆分）。 */
async function remoteGitPanel(dir: string): Promise<GitPanel> {
  const script =
    `${REMOTE_GIT_ENV} git rev-parse --git-dir >/dev/null 2>&1 || exit 93;` +
    `printf '@@BR=%s\\n' "$(git branch --show-current)";` +
    `git status --porcelain=v1 --untracked-files=normal`;
  const r = await remoteRun(dir, script);
  if (r.code !== 0) return { inRepo: false, repo: "", branch: "", unstaged: [], staged: [], untracked: [] };
  const branch = /^@@BR=(.*)$/m.exec(r.stdout)?.[1]?.trim() ?? "";
  const porcelain = r.stdout
    .split("\n")
    .filter((l) => !l.startsWith("@@BR="))
    .join("\n");
  return { inRepo: true, repo: dir, branch, ...panelFromPorcelain(porcelain) };
}

/** 远端提交历史（非仓库/无提交 → 空列表）。 */
async function remoteGitLog(dir: string, count: number): Promise<GitLogItem[]> {
  const r = await remoteGit(dir, ["log", `--max-count=${count}`, "--pretty=format:%h|%an|%ar|%s"]);
  if (r.code !== 0 || !r.stdout) return [];
  return r.stdout.split("\n").map((line) => {
    const [hash, author, date, subject] = line.split("|");
    return { hash: hash ?? "", author: author ?? "", date: date ?? "", subject: subject ?? "" };
  });
}

/** 远端单路径改动文本：`git diff HEAD -- .`（以浏览目录为界，新文件未 add 时的语义与本地一致）。 */
async function remoteGitDiff(dir: string): Promise<GitAction> {
  const r = await remoteGit(dir, ["diff", "HEAD", "--no-color", "--", "."]);
  if (r.code !== 0) {
    return { ok: false, repo: dir, output: `（无可用改动或尚无历史提交）\n${r.stderr || r.stdout}` };
  }
  return { ok: true, repo: dir, output: r.stdout || `（该路径相对 HEAD 没有可用改动；新文件请先 git add 后再查看）\n.` };
}

/** 把 ssh 引用拆成「父目录引用 + 末段名」：add/discard/unstage 以父目录为 cwd、末段为 pathspec。 */
function sshParentAndName(ref: string): { parentRef: string; name: string } {
  const { hostId, remote } = splitSshDir(ref);
  if (remote === "/") throw new FsError("bad-request", "远端根目录不支持该操作", 400);
  const cut = remote.lastIndexOf("/");
  const parent = cut <= 0 ? "/" : remote.slice(0, cut);
  const name = remote.slice(cut + 1);
  return { parentRef: `ssh://${hostId}${parent}`, name };
}

/** 远端 git add：以父目录为 cwd，用末段名做 pathspec（git 会自动解析到所属仓库）。 */
async function remoteGitAdd(ref: string): Promise<GitAction> {
  const { parentRef, name } = sshParentAndName(ref);
  const r = await remoteGit(parentRef, ["add", "--", name]);
  if (r.code !== 0) throw new FsError("fs-error", `git add 失败: ${r.stderr || r.stdout}`, 400);
  return { ok: true, repo: ref, output: `staged ${name}` };
}

/** 远端 git restore --staged。 */
async function remoteGitUnstage(ref: string): Promise<GitAction> {
  const { parentRef, name } = sshParentAndName(ref);
  const r = await remoteGit(parentRef, ["restore", "--staged", "--", name]);
  if (r.code !== 0) throw new FsError("fs-error", `取消暂存失败: ${r.stderr || r.stdout}`, 400);
  return { ok: true, repo: ref, output: `unstaged ${name}` };
}

/** 远端 git checkout -- <path>（丢弃工作区改动）。 */
async function remoteGitDiscard(ref: string): Promise<GitAction> {
  const { parentRef, name } = sshParentAndName(ref);
  const r = await remoteGit(parentRef, ["checkout", "--", name]);
  if (r.code !== 0) throw new FsError("fs-error", `还原失败: ${r.stderr || r.stdout}`, 400);
  return { ok: true, repo: ref, output: `discarded ${name}` };
}

/** 远端 git commit（commit 不带 pathspec，任意子目录提交整个暂存区）。 */
async function remoteGitCommit(ref: string, message: string): Promise<GitAction> {
  const r = await remoteGit(ref, ["commit", "-m", message]);
  if (r.code !== 0) {
    throw new FsError("fs-error", `提交失败（可能需要先配置 user.name/user.email）: ${r.stderr || r.stdout}`, 400);
  }
  const hash = await remoteGit(ref, ["rev-parse", "--short", "HEAD"]).catch(() => ({ stdout: "" }));
  return { ok: true, repo: ref, output: hash.stdout.trim() };
}

/** 远端分支操作：create / checkout / delete。 */
async function remoteGitBranchOp(
  ref: string,
  action: "create" | "checkout" | "delete",
  name: string,
): Promise<GitAction> {
  if (!name) throw new FsError("bad-request", "缺少分支名", 400);
  if (action === "create") {
    const exists = await remoteGit(ref, ["branch", "--list", name]);
    if (exists.code === 0 && exists.stdout.trim()) throw new FsError("bad-request", `分支已存在: ${name}`, 409);
    const r = await remoteGit(ref, ["branch", name]);
    if (r.code !== 0) throw new FsError("fs-error", `创建分支失败: ${r.stderr || r.stdout}`, 400);
    return { ok: true, repo: ref, output: `created branch ${name}` };
  }
  if (action === "checkout") {
    const r = await remoteGit(ref, ["checkout", name]);
    if (r.code !== 0) throw new FsError("fs-error", `切换分支失败: ${r.stderr || r.stdout}`, 400);
    return { ok: true, repo: ref, output: `switched to ${name}` };
  }
  const r = await remoteGit(ref, ["branch", "-D", name]);
  if (r.code !== 0) throw new FsError("fs-error", `删除分支失败: ${r.stderr || r.stdout}`, 400);
  return { ok: true, repo: ref, output: `deleted branch ${name}` };
}

/** 远端 fetch / pull / push。 */
async function remoteGitSync(ref: string, action: "fetch" | "pull" | "push"): Promise<GitAction> {
  const r = await remoteGit(ref, [action]);
  return { ok: r.code === 0, repo: ref, output: r.stderr || r.stdout || `${action} 完成` };
}

/**
 * 远端 ignore：读仓库根 `.gitignore`（SFTP/ExecFs 文件语义），幂等追加后原子写回。
 * 与本地实现语义一致，但路径判断全部走 POSIX（远端必然是 POSIX 文件系统）。
 */
async function remoteGitIgnore(ref: string): Promise<GitAction> {
  const { hostId, remote } = splitSshDir(ref);
  const top = await remoteGit(ref, ["rev-parse", "--show-toplevel"]);
  if (top.code !== 0) throw new FsError("bad-request", `目标不在任何 git 仓库中: ${ref}`, 400);
  const root = top.stdout.trim();
  const conn = await connFor(hostId);
  const fs = await conn.fs();
  const rel = posix.relative(root, remote).replace(/^\.\//, "").replace(/\\/g, "/");
  if (!rel || rel.startsWith("..")) throw new FsError("bad-request", `路径不在仓库内: ${ref}`, 400);
  const giPath = `${root}/.gitignore`;
  let content = "";
  try {
    content = await fs.readText(giPath);
  } catch {
    /* 文件尚不存在，下面会新建 */
  }
  const lines = content.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  if (lines.includes(rel)) return { ok: true, repo: ref, output: `already ignored ${rel}` };
  const needSep = content.length > 0 && !content.endsWith("\n");
  await fs.writeFileAtomic(giPath, `${needSep ? "\n" : ""}${rel}\n`);
  return { ok: true, repo: ref, output: `ignored ${rel}` };
}

/** 远端命令台：先确认在仓库内，再在当前目录执行任意 git 命令。 */
async function remoteGitRunCmd(ref: string, args: string[]): Promise<GitRunResult> {
  if (!args.length) throw new FsError("bad-request", "no command", 400);
  const inRepo = await remoteGit(ref, ["rev-parse", "--git-dir"]);
  if (inRepo.code !== 0) throw new FsError("bad-request", `不在任何 git 仓库内: ${ref}`, 400);
  const r = await remoteGit(ref, args);
  return { code: r.code, stdout: r.stdout, stderr: r.stderr };
}

/** 资源路由：git 只读状态 / diff 不做写保护；add/commit/discard 拒绝受保护区域。 */
export const gitResource: RouteMatcher = async (req, res, seg, q, method, host) => {
  void host;
  if (seg[0] !== "git") return false;
  const op = seg[1];

  /*
   * 远端（ssh://）引用：不再是「一律不支持」——只读状态与写操作都改为通过 SSH exec
   * 在远端服务器上执行 git（见 REMOTE_GIT_ENV 上方各 remoteGit* 辅助）。若落到下面的
   * requireAbsolute，远端引用会被报成 400「不是绝对路径」，语义完全不对。
   * 仅 gh-release（依赖本机 GitHub 凭据）等少数能力在远端保持 skipped/501。
   */
  const isPost = method === "POST" && seg.length === 2;
  // ⛔ 远端引用的「真实来源」按方法而异：GET 在 query、POST 在 body。
  // 只查 query 会让所有远端**写操作**漏判 → 落到下面的本地分支被 requireAbsolute
  // 报 400「不是绝对路径」，症状是「ssh 目录内 fetch/pull/push/暂存/提交全都用不了」。
  const postBody = isPost
    ? ((await readBody(req)) as {
        path?: string;
        message?: string;
        action?: string;
        name?: string;
        email?: string;
        tag?: string;
        body?: string;
        args?: unknown[];
        url?: string;
        dir?: string;
        depth?: number;
        accountId?: string;
        key?: string;
      } | null)
    : null;
  const rawPath = (isPost ? (postBody?.path ?? "") : (q.get("path") ?? "")).trim();
  if (rawPath.startsWith("ssh://")) {
    if (method === "GET") {
      if (op === "status") {
        return (json(res, 200, { ok: true, data: await remoteGitStatus(rawPath) }), true);
      }
      if (op === "panel") {
        return (json(res, 200, { ok: true, data: await remoteGitPanel(rawPath) }), true);
      }
      if (op === "log") {
        const count = Number(q.get("count") ?? "20") || 20;
        return (json(res, 200, { ok: true, data: await remoteGitLog(rawPath, count) }), true);
      }
      if (op === "diff") {
        return (json(res, 200, { ok: true, data: await remoteGitDiff(rawPath) }), true);
      }
      if (op === "gh-releases") return (json(res, 200, { ok: true, data: { list: [], skipped: "remote" } }), true);
      return (json(res, 200, { ok: true, data: { inRepo: false } }), true);
    }
    if (isPost) {
      const body = postBody;
      const path = (body?.path ?? "").trim();
      if (!path.startsWith("ssh://")) return (json(res, 400, { ok: false, error: "ssh reference required" }), true);
      if (op === "add") return (json(res, 200, { ok: true, data: await remoteGitAdd(path) }), true);
      if (op === "unstage") return (json(res, 200, { ok: true, data: await remoteGitUnstage(path) }), true);
      if (op === "ignore") return (json(res, 200, { ok: true, data: await remoteGitIgnore(path) }), true);
      if (op === "commit") {
        const message = (body?.message as string)?.trim() ?? "";
        if (!message) return (json(res, 400, { ok: false, error: "commit message required" }), true);
        return (json(res, 200, { ok: true, data: await remoteGitCommit(path, message) }), true);
      }
      if (op === "discard") return (json(res, 200, { ok: true, data: await remoteGitDiscard(path) }), true);
      if (op === "branch") {
        return (
          json(res, 200, {
            ok: true,
            data: await remoteGitBranchOp(path, (body?.action as "create" | "checkout" | "delete") ?? "checkout", (body?.name as string) ?? ""),
          }),
          true
        );
      }
      if (op === "sync") {
        return (
          json(res, 200, {
            ok: true,
            data: await remoteGitSync(path, body?.action === "fetch" || body?.action === "push" ? body.action : "pull"),
          }),
          true
        );
      }
      if (op === "run") {
        const args = (Array.isArray(body?.args) ? body.args : []).map((a: unknown) => String(a)).filter(Boolean);
        return (json(res, 200, { ok: true, data: await remoteGitRunCmd(path, args) }), true);
      }
      return (json(res, 501, { ok: false, error: `git op "${op}" is not supported on remote (ssh) paths` }), true);
    }
    return false;
  }

  // —— 目录 git 状态（徽标） ——
  if (op === "status" && method === "GET" && seg.length === 2) {
    const dir = requireAbsolute(q.get("path")?.trim() ?? "");
    const data = await gitStatus(dir);
    return (json(res, 200, { ok: true, data }), true);
  }

  // —— Git 面板仓库级快照 ——
  if (op === "panel" && method === "GET" && seg.length === 2) {
    const dir = requireAbsolute(q.get("path")?.trim() ?? "");
    const data = await gitPanel(dir);
    return (json(res, 200, { ok: true, data }), true);
  }

  // —— 提交历史 ——
  if (op === "log" && method === "GET" && seg.length === 2) {
    const dir = requireAbsolute(q.get("path")?.trim() ?? "");
    const count = Number(q.get("count") ?? "20") || 20;
    const data = await gitLog(dir, count);
    return (json(res, 200, { ok: true, data }), true);
  }

  // —— user 配置（GET 读取 / POST 设置） ——
  if (op === "config" && seg.length === 2) {
    if (method === "GET") {
      const data = await gitGetUserConfig();
      return (json(res, 200, { ok: true, data }), true);
    }
    if (method === "POST") {
      const body = postBody;
      const data = await gitSetUserConfig(body?.name ?? "", body?.email ?? "");
      return (json(res, 200, { ok: true, data }), true);
    }
  }

  // —— 单路径改动文本（右键「查看改动」） ——
  if (op === "diff" && method === "GET" && seg.length === 2) {
    const path = requireAbsolute(q.get("path")?.trim() ?? "");
    const data = await gitDiff(path);
    return (json(res, 200, { ok: true, data }), true);
  }

  // —— GitHub Releases 列表（Git 面板「版本」tab） ——
  if (op === "gh-releases" && method === "GET" && seg.length === 2) {
    const dir = requireAbsolute(q.get("path")?.trim() ?? "");
    const data = await gitGhListReleases(dir);
    return (json(res, 200, { ok: true, data }), true);
  }

  // —— 克隆仓库（POST /git/clone）：把远端仓库拉到一个**新目录** ——
  // 与下面的「写操作」块分开：那块的 `path` 语义是「已有的仓库/文件」，而这里的目标
  // 目录还不存在（也正因如此才有「已存在即 409」这条前置检查）。
  if (op === "clone" && method === "POST" && seg.length === 2) {
    const body = postBody;
    const url = (body?.url ?? "").trim();
    if (!url) return (json(res, 400, { ok: false, error: "url required" }), true);
    const rawDir = (body?.dir ?? "").trim();
    // 目标父目录可以是本机绝对路径，也可以是 `ssh://<hostId>/<remote>` 远端引用 ——
    // 后者改为**在远端服务器上执行 git clone**（复用 SSH 连接池），而不是在本机落盘。
    const isRemote = rawDir.startsWith("ssh://");
    const dir = isRemote ? rawDir : requireAbsolute(rawDir);
    // 名字：显式传入的以传入为准（仍要过 sanitize），否则按 URL 推导。
    const givenName = (body?.name ?? "").trim();
    const name = givenName ? sanitizeRepoDirName(givenName) : deriveRepoDirName(url);
    if (!name) {
      return (
        json(res, 400, {
          ok: false,
          error: "invalid or missing target directory name (must not be empty or contain path separators)",
        }),
        true
      );
    }
    if (isRemote) {
      const { remote, hostId } = splitSshDir(dir);
      const targetRef = `ssh://${hostId}${remote === "/" ? "" : remote}/${name}`;
      // 远端不套 guardWriteTarget：目标由远端引用语义决定，本地工作区 containment 不适用
      // （与 routes-fs 的 guardWrite 对非 local 引用直接放行一致）。
      if (await remotePathExists(dir, name)) {
        return (json(res, 409, { ok: false, error: `target already exists: ${targetRef}` }), true);
      }
      const args = ["clone"];
      const depth = Number(body?.depth ?? 0);
      if (Number.isFinite(depth) && depth > 0) args.push("--depth", String(Math.floor(depth)));
      // GIT_TERMINAL_PROMPT=0 / GIT_PAGER=cat：远端 exec 同样无 tty，可交互提示会挂住。
      // 名字已过 sanitize（不含分隔符），仍统一走单引号转义，URL 亦然。
      const cmd = `env GIT_TERMINAL_PROMPT=0 GIT_PAGER=cat git ${args.map(shellQuoteSingle).join(" ")} -- ${shellQuoteSingle(url)} ${shellQuoteSingle(name)}`;
      const r = await remoteRun(dir, cmd);
      if (r.code !== 0) {
        await remoteRmRf(dir, name);
        const reason =
          r.code === 124
            ? `git clone 超时（${Math.round(REMOTE_EXEC_TIMEOUT_MS / 1000)}s，已终止）`
            : r.stderr || r.stdout || `exit ${r.code}`;
        throw new FsError("fs-error", `git clone 失败: ${reason}`, 400);
      }
      return (json(res, 200, { ok: true, data: { path: targetRef, name, stdout: r.stdout, stderr: r.stderr } }), true);
    }
    const target = join(dir, name);
    // 先守卫再探测：受保护 / 工作区外直接 403，不必泄露「那里有没有东西」。
    await guardWriteTarget(body?.key, target);
    if (await pathExists(target)) {
      return (json(res, 409, { ok: false, error: `target already exists: ${target}` }), true);
    }
    await mkdir(dir, { recursive: true });
    // 命中账号则注入凭据；`-c ...` 必须排在子命令**之前**，故先拼注入参数再拼 clone。
    // 弹窗里显式选过的账号优先于按地址自动匹配（克隆前就能选/新建）；未知 id 由 getAccount 抛 404。
    const wanted = (body?.accountId ?? "").trim();
    const inject = wanted ? await gitInjectFor(await getAccount(wanted)) : await gitAuthInject(url);
    const args = [...(inject?.args ?? []), "clone", "--progress"];
    const depth = Number(body?.depth ?? 0);
    if (Number.isFinite(depth) && depth > 0) args.push("--depth", String(Math.floor(depth)));
    // `--` 之后才是位置参数：URL 以 `-` 开头也不会被 git 当成选项。
    args.push("--", url, target);
    const r = await gitCloneExec(args, dir, inject?.env);
    if (r.code !== 0) {
      // 失败清理：git 多数情况会自己删掉半成品目录，但**超时被 kill 时不会** ——
      // 残骸会让用户重试直接撞上 409，且看不出原因。force 只删我们刚确认不存在的目标。
      await rm(target, { recursive: true, force: true }).catch(() => {});
      const reason =
        r.code === 124
          ? `git clone 超时（${Math.round(CLONE_TIMEOUT_MS / 1000)}s，已终止）`
          : r.stderr || r.stdout || `exit ${r.code}`;
      throw new FsError("fs-error", `git clone 失败: ${reason}`, 400);
    }
    return (json(res, 200, { ok: true, data: { path: target, name, stdout: r.stdout, stderr: r.stderr } }), true);
  }

  // —— 写操作：解析请求体 ——
  if (method === "POST" && seg.length === 2) {
    const body = postBody;
    const path = requireAbsolute(body?.path?.trim() ?? "");
    if (op === "add") {
      const data = await gitAdd(path);
      return (json(res, 200, { ok: true, data }), true);
    }
    if (op === "unstage") {
      const data = await gitUnstage(path);
      return (json(res, 200, { ok: true, data }), true);
    }
    if (op === "ignore") {
      const data = await gitIgnore(path);
      return (json(res, 200, { ok: true, data }), true);
    }
    if (op === "commit") {
      const message = (body?.message as string)?.trim() ?? "";
      if (!message) return (json(res, 400, { ok: false, error: "commit message required" }), true);
      const data = await gitCommit(path, message);
      return (json(res, 200, { ok: true, data }), true);
    }
    if (op === "discard") {
      const data = await gitDiscard(path);
      return (json(res, 200, { ok: true, data }), true);
    }
    if (op === "branch") {
      const data = await gitBranchOp(path, (body?.action as "create" | "checkout" | "delete") ?? "checkout", (body?.name as string) ?? "");
      return (json(res, 200, { ok: true, data }), true);
    }
    if (op === "sync") {
      const data = await gitSync(path, body?.action === "fetch" || body?.action === "push" ? body.action : "pull");
      return (json(res, 200, { ok: true, data }), true);
    }
    if (op === "gh-release") {
      const releaseTag = (body?.tag as string)?.trim() ?? "";
      if (!releaseTag) return (json(res, 400, { ok: false, error: "tag required" }), true);
      const title = (body?.name as string)?.trim() || releaseTag;
      const text = (body?.body as string)?.trim() ?? "";
      const data = await gitGhRelease(path, releaseTag, title, text);
      return (json(res, 200, { ok: true, data }), true);
    }
    if (op === "run") {
      const dir = requireAbsolute((body?.path as string)?.trim() ?? "");
      const args = (Array.isArray(body?.args) ? body.args : []).map((a: unknown) => String(a)).filter(Boolean);
      if (!args.length) return (json(res, 400, { ok: false, error: "no command" }), true);
      const data = await gitRunCmd(dir, args);
      return (json(res, 200, { ok: true, data }), true);
    }
  }

  return false;
};