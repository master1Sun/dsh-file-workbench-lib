/**
 * Git 资源路由：状态徽标 / 右键菜单的暂存、提交、查看改动、还原。
 *
 * 能力接入方式：通过 child_process.execFile 直接调用系统 git CLI（与终端路由
 * 的进程调用保持一致，避免把 git 库打进宿主 bundle 引入运行时兼容问题）。
 * 每次调用均基于用户提供的绝对路径向上查找仓库根（存在 .git 即视为仓库），
 * 再在该仓库上执行对应命令；非仓库目录一律返回 { inRepo:false }，写操作则抛 403。
 */
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { stat } from "node:fs/promises";
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
import { FsError, isProtectedPath } from "../fs/fs-tree.js";
import {
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

/** 资源路由：git 只读状态 / diff 不做写保护；add/commit/discard 拒绝受保护区域。 */
export const gitResource: RouteMatcher = async (req, res, seg, q, method, host) => {
  void host;
  if (seg[0] !== "git") return false;
  const op = seg[1];

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

  // —— 写操作：解析请求体 ——
  if (method === "POST" && seg.length === 2) {
    const body = (await readBody(req)) as { path?: string; message?: string; action?: string; name?: string; args?: unknown[] } | null;
    const path = requireAbsolute(body?.path?.trim() ?? "");
    if (op === "add") {
      const data = await gitAdd(path);
      return (json(res, 200, { ok: true, data }), true);
    }
    if (op === "unstage") {
      const data = await gitUnstage(path);
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