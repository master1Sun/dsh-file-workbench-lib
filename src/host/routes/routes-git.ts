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
  requireAbsolute,
  type RouteMatcher,
} from "./routes-util.js";

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
async function gitRun(args: string[], cwd: string): Promise<{ code: number; stdout: string; stderr: string }> {
  try {
    const { stdout, stderr } = await execFileP("git", args, { cwd, windowsHide: true, encoding: "utf8", maxBuffer: 16 * 1024 * 1024 });
    return { code: 0, stdout: stdout.trim(), stderr: stderr.trim() };
  } catch (error) {
    const e = error as NodeJS.ErrnoException & { stderr?: string; stdout?: string };
    return { code: typeof e.code === "number" ? Number(e.code) : 1, stdout: (e.stdout ?? "").trim(), stderr: (e.stderr ?? e.message ?? String(error)).trim() };
  }
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
): Promise<{ code: number; stdout: string; stderr: string }> {
  return new Promise((resolvePromise) => {
    let child: ReturnType<typeof spawn>;
    try {
      child = spawn("git", args, {
        cwd,
        windowsHide: true,
        env: { ...process.env, GIT_TERMINAL_PROMPT: "0", GIT_PAGER: "cat" },
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
 * 计算某目录下各「紧邻子项」聚合的 git 状态（状态徽标数据）。
 * - 子项内部（含更深路径）存在任何改动 → 该子项记为 modified；
 * - 同一子项多个改动取严重度更高者。
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
  return { inRepo: true, branch, entries };
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
  return gitRun(args, root);
}

/** Git 面板仓库级快照（未暂存 / 已暂存 / 未跟踪）。 */
async function gitPanel(dir: string): Promise<GitPanel> {
  const root = await findRepoRoot(dir);
  if (!root) return { inRepo: false, repo: "", branch: "", unstaged: [], staged: [], untracked: [] };
  const branch = await git(["branch", "--show-current"], root).catch(() => "");
  const porcelain = await git(["status", "--porcelain=v1", "--untracked-files=normal"], root, "无法读取 git 状态");
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
  return { inRepo: true, repo: root, branch, unstaged, staged, untracked };
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
  const r = await gitRun([action], root);
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

/** 资源路由：git 只读状态 / diff 不做写保护；add/commit/discard 拒绝受保护区域。 */
export const gitResource: RouteMatcher = async (req, res, seg, q, method, host) => {
  void host;
  if (seg[0] !== "git") return false;
  const op = seg[1];

  /*
   * 远端（ssh）引用短路：首版不支持在远端目录上跑 git，但前端刷新徽标时会把当前
   * 目录（可能是 `ssh://<id>/<path>`）直接带过来。若落到下面的 requireAbsolute，
   * 会被报成 400「不是绝对路径」——语义完全不对，且每次进入远端目录都弹一次错。
   * 这里统一：只读接口按「非仓库」回空结果（徽标 / Git 栏 / 面板都不显示），写操作明确 501。
   */
  const rawPath = (q.get("path") ?? "").trim();
  if (rawPath.startsWith("ssh://")) {
    if (method === "GET") {
      if (op === "status") {
        return (json(res, 200, { ok: true, data: { inRepo: false, branch: "", entries: {} } }), true);
      }
      if (op === "panel") {
        return (
          json(res, 200, { ok: true, data: { inRepo: false, repo: "", branch: "", unstaged: [], staged: [], untracked: [] } }),
          true
        );
      }
      if (op === "log") return (json(res, 200, { ok: true, data: [] }), true);
      if (op === "diff") return (json(res, 200, { ok: true, data: { ok: false, repo: "", output: "" } }), true);
      if (op === "gh-releases") return (json(res, 200, { ok: true, data: { list: [], skipped: "remote" } }), true);
      return (json(res, 200, { ok: true, data: { inRepo: false } }), true);
    }
    return (json(res, 501, { ok: false, error: "git is not supported on remote (ssh) paths" }), true);
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
      const body = (await readBody(req)) as { name?: string; email?: string } | null;
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
    const body = (await readBody(req)) as {
      url?: string;
      dir?: string;
      name?: string;
      depth?: number;
      key?: string;
    } | null;
    const url = (body?.url ?? "").trim();
    if (!url) return (json(res, 400, { ok: false, error: "url required" }), true);
    const dir = requireAbsolute((body?.dir ?? "").trim());
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
    const target = join(dir, name);
    // 先守卫再探测：受保护 / 工作区外直接 403，不必泄露「那里有没有东西」。
    await guardWriteTarget(body?.key, target);
    if (await pathExists(target)) {
      return (json(res, 409, { ok: false, error: `target already exists: ${target}` }), true);
    }
    await mkdir(dir, { recursive: true });
    const args = ["clone", "--progress"];
    const depth = Number(body?.depth ?? 0);
    if (Number.isFinite(depth) && depth > 0) args.push("--depth", String(Math.floor(depth)));
    // `--` 之后才是位置参数：URL 以 `-` 开头也不会被 git 当成选项。
    args.push("--", url, target);
    const r = await gitCloneExec(args, dir);
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
    const body = (await readBody(req)) as { path?: string; message?: string; action?: string; name?: string; tag?: string; body?: string; args?: unknown[] } | null;
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