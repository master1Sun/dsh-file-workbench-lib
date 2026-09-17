/**
 * GitService —— Git 能力服务（本地 CLI + 远端 ssh:// exec）。
 *
 * 从 routes-git.ts 抽出的过程式逻辑组织为类：路由层只做参数解析，全部业务委托到这里。
 * 继承 CommandLineRunner 以复用统一的进程执行/超时/错误映射骨架（原 gitRun/git 两份
 * 包装合并为基类的 execCapture/execOrThrow）。
 *
 * 能力接入方式：通过 child_process 直接调用系统 git CLI（与终端路由的进程调用保持
 * 一致，避免把 git 库打进宿主 bundle 引入运行时兼容问题）。每次调用均基于用户提供的
 * 绝对路径向上查找仓库根（存在 .git 即视为仓库），再在该仓库上执行对应命令；非仓库
 * 目录一律返回 { inRepo:false }，写操作则抛 403。
 */
import { spawn } from "node:child_process";
import { readFile, appendFile } from "node:fs/promises";
import { join, posix } from "node:path";

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
import { guardWritablePath, remoteRmRf, remoteRun, splitSshDir, REMOTE_EXEC_TIMEOUT_MS } from "../routes/routes-util.js";
import { shellQuoteSingle } from "../ssh/ssh-core.js";
import { connFor } from "../ssh/ssh-hosts.js";
import { gitAuthInject, gitInjectFor, getAccount } from "../accounts/accounts.js";
import { CommandLineRunner, findMarkerRoot, parseLogLines } from "./command-runner.js";

/** 从某路径向上查找仓库根（存在 .git 目录/文件即视为仓库）。非仓库返回 null。 */
export async function findRepoRoot(start: string): Promise<string | null> {
  return findMarkerRoot(start, ".git");
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

export class GitService extends CommandLineRunner {
  /** 执行 git 命令并返回退出码/输出（命令台与外部同步使用，失败不抛错）。 */
  async run(
    args: string[],
    cwd: string,
    extraEnv?: NodeJS.ProcessEnv,
  ): Promise<{ code: number; stdout: string; stderr: string }> {
    return this.execCapture("git", args, { cwd, env: extraEnv });
  }

  /** 执行 git 命令并在失败时抛出 FsError（读路径断言版）。 */
  private async git(args: string[], cwd: string, hint = "git 命令执行失败"): Promise<string> {
    return this.execOrThrow("git", args, { cwd, hint });
  }

  /* ── 账号注入（Git） ──────────────────────────────────────────────────────
   * 命中「账号管理」里配置的账号时，把凭据注入子进程：用户名走 `-c credential.username`
   * （非机密），口令走 GIT_ASKPASS 外壳 + 环境变量（不落 argv、不落盘）。
   * 未命中则完全走 git 原生流程（系统凭据管理器 / SSH 密钥），行为向后兼容。
   */

  /** 命中账号的远程地址时执行 git（注入凭据）；url 为空或无匹配 → 走原生流程。 */
  private async runAuth(
    args: string[],
    cwd: string,
    url: string,
  ): Promise<{ code: number; stdout: string; stderr: string }> {
    const inject = url ? await gitAuthInject(url) : null;
    if (!inject) return this.run(args, cwd);
    return this.run([...inject.args, ...args], cwd, inject.env);
  }

  /** 当前分支上游的远端名（无上游时回落 origin —— 与 git 自身的默认行为一致）。 */
  private async upstreamRemote(root: string): Promise<string> {
    const r = await this.run(["rev-parse", "--abbrev-ref", "--symbolic-full-name", "@{u}"], root);
    const name = r.code === 0 && r.stdout.includes("/") ? r.stdout.split("/")[0] : "";
    return name || "origin";
  }

  /** 取某远端在指定方向上的 URL（取不到返回空串 → 不注入）。 */
  private async remoteUrlOf(root: string, remote: string, direction: "fetch" | "push"): Promise<string> {
    const args = direction === "push" ? ["remote", "get-url", "--push", remote] : ["remote", "get-url", remote];
    const r = await this.run(args, root);
    return r.code === 0 ? (r.stdout.split(/\r?\n/)[0] ?? "").trim() : "";
  }

  /**
   * 从命令台参数里推断要访问的远程地址。
   *
   * 只对**会联网**的子命令做推断（push/pull/fetch/ls-remote 等）——`git status` 这类
   * 本地命令不该因为我们多跑两条 `git remote` 而变慢。
   * 优先级：参数里直接写的 URL > 参数里写的远端名 > 上游远端名。
   */
  private async remoteUrlFromArgv(root: string, args: string[]): Promise<string> {
    const NET_COMMANDS = new Set(["push", "pull", "fetch", "ls-remote"]);
    const sub = args.find((a) => !a.startsWith("-"));
    if (!sub || !NET_COMMANDS.has(sub)) return "";
    const rest = args.slice(args.indexOf(sub) + 1).filter((a) => !a.startsWith("-"));
    const first = rest[0] ?? "";
    if (/^[a-z][a-z0-9+.-]*:\/\//i.test(first) || /^[^/@\s]+@[^/:\s]+:/.test(first)) return first;
    const remote = first || (await this.upstreamRemote(root));
    return this.remoteUrlOf(root, remote, sub === "push" ? "push" : "fetch");
  }

  /** 克隆命令的超时（毫秒）：大仓库慢，但也不能让请求无限挂着。 */
  static readonly CLONE_TIMEOUT_MS = 10 * 60 * 1000;

  /**
   * 执行 `git clone`：需要 `spawn` 而非 `execFile`，因为要**主动超时终止**。
   *
   * ⛔ `GIT_TERMINAL_PROMPT=0` 不可省：宿主进程没有可交互终端，若远端要求用户名/口令，
   *    git 会**一直阻塞在提示上**直到超时 —— 用户看到的是「卡住不动」，而不是「要登录」。
   *    置 0 后它会立刻报 `could not read Username`，我们把它如实回给界面。
   *    （因此 HTTPS 私有仓库请用带 token 的地址，或改用 SSH 密钥地址。）
   * `GIT_PAGER=cat` 同理：分页器在无 tty 下会挂住。
   */
  cloneExec(
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
      }, GitService.CLONE_TIMEOUT_MS);
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

  /** 目标路径是否已存在（用于「已存在即 409」前置拦截）——克隆流程路由层使用。 */
  async exists(p: string): Promise<boolean> {
    return this.pathExists(p);
  }

  /** 取给定绝对路径所属仓库根；非仓库目录抛 400。 */
  private async repoOf(target: string): Promise<string> {
    const root = await findRepoRoot(target);
    if (!root) throw new FsError("bad-request", `目标不在任何 git 仓库中: ${target}`, 400);
    return root;
  }

  /** 转成仓库根下的 POSIX 相对路径（供 add / diff / checkout 使用）。 */
  private relInRepo(root: string, target: string): string {
    const rel = posix.relative(root.replace(/\\/g, "/"), target.replace(/\\/g, "/"));
    if (rel === ".." || rel.startsWith("../") || rel.includes(":")) {
      throw new FsError("bad-request", `路径不在仓库内: ${target}`, 400);
    }
    return rel;
  }

  /** git add —— 暂存一个文件/目录（含其下全部改动）。 */
  async add(target: string): Promise<GitAction> {
    guardWritablePath(target);
    const root = await this.repoOf(target);
    const rel = this.relInRepo(root, target);
    await this.git(["add", "--", rel], root, "git add 失败");
    return { ok: true, repo: root, output: `staged ${rel}` };
  }

  /** git commit —— 提交当前暂存的全部改动。 */
  async commit(target: string, message: string): Promise<GitAction> {
    guardWritablePath(target);
    const root = await this.repoOf(target);
    await this.git(["commit", "-m", message], root, "提交失败（可能需要先配置 user.name/user.email）");
    const hash = await this.git(["rev-parse", "--short", "HEAD"], root).catch(() => "");
    return { ok: true, repo: root, output: hash };
  }

  /** git diff —— 相对最近一次提交的改动文本（含已暂存 + 未暂存，删除颜色控制符）。 */
  async diff(target: string): Promise<GitAction> {
    const root = await this.repoOf(target);
    const rel = this.relInRepo(root, target);
    let output = "";
    try {
      output = await this.git(["diff", "HEAD", "--no-color", "--", rel], root, "无法读取改动");
    } catch {
      /* 无历史提交（首次 commit 前）时 diff HEAD 失败，按空处理 */
    }
    if (!output) {
      output = `（该路径相对 HEAD 没有可用改动；新文件请先 git add 后再查看）\n${rel}`;
    }
    return { ok: true, repo: root, output };
  }

  /** git checkout -- <path> —— 丢弃工作区改动（还原为暂存/HEAD 状态）。 */
  async discard(target: string): Promise<GitAction> {
    guardWritablePath(target);
    const root = await this.repoOf(target);
    const rel = this.relInRepo(root, target);
    await this.git(["checkout", "--", rel], root, "还原失败");
    return { ok: true, repo: root, output: `discarded ${rel}` };
  }

  /** git restore --staged -- <path> —— 取消暂存（把文件移回工作区未暂存状态）。 */
  async unstage(target: string): Promise<GitAction> {
    guardWritablePath(target);
    const root = await this.repoOf(target);
    const rel = this.relInRepo(root, target);
    await this.git(["restore", "--staged", "--", rel], root, "取消暂存失败");
    return { ok: true, repo: root, output: `unstaged ${rel}` };
  }

  /**
   * 忽略一个文件/目录：把相对仓库根的路径追加进仓库根的 `.gitignore`。
   * 已存在相同条目则跳过（幂等）；`.gitignore` 不存在则新建。
   */
  async ignore(target: string): Promise<GitAction> {
    guardWritablePath(target);
    const root = await this.repoOf(target);
    const rel = this.relInRepo(root, target).replace(/\\/g, "/").replace(/^\.\//, "");
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
  async runCmd(dir: string, args: string[]): Promise<GitRunResult> {
    const root = await findRepoRoot(dir);
    if (!root) throw new FsError("bad-request", `不在任何 git 仓库内: ${dir}`, 400);
    if (isProtectedPath(root)) {
      throw new FsError("forbidden", `受保护目录内禁止执行 git 命令: ${root}`, 403);
    }
    // 联网子命令按参数推断远程地址，命中账号则注入凭据（本地命令不额外跑 git remote）。
    return this.runAuth(args, root, await this.remoteUrlFromArgv(root, args));
  }

  /** Git 面板仓库级快照（未暂存 / 已暂存 / 未跟踪）。 */
  async panel(dir: string): Promise<GitPanel> {
    const root = await findRepoRoot(dir);
    if (!root) return { inRepo: false, repo: "", branch: "", unstaged: [], staged: [], untracked: [] };
    const branch = await this.git(["branch", "--show-current"], root).catch(() => "");
    const porcelain = await this.git(["status", "--porcelain=v1", "--untracked-files=normal"], root, "无法读取 git 状态");
    return { inRepo: true, repo: root, branch, ...panelFromPorcelain(porcelain) };
  }

  /**
   * 计算某目录下各「紧邻子项」聚合的 git 状态（状态徽标数据）。
   */
  async status(dir: string): Promise<GitDirStatus> {
    const root = await findRepoRoot(dir);
    if (!root) return { inRepo: false, branch: "", entries: {} };

    const branch = await this.git(["branch", "--show-current"], root).catch(() => "");
    const porcelain = await this.git(
      ["status", "--porcelain=v1", "--untracked-files=normal"],
      root,
      "无法读取 git 状态",
    );
    const data = statusFromPorcelain(porcelain, root.replace(/\\/g, "/"), dir.replace(/\\/g, "/"));
    return { ...data, branch };
  }

  /** 最近提交历史。 */
  async log(dir: string, count: number): Promise<GitLogItem[]> {
    const root = await findRepoRoot(dir);
    if (!root) return [];
    const out = await this.git(
      ["log", `--max-count=${count}`, "--pretty=format:%h|%an|%ar|%s"],
      root,
      "无法读取提交历史",
    ).catch(() => "");
    if (!out) return [];
    return parseLogLines(out);
  }

  /** 分支操作：create / checkout / delete。 */
  async branchOp(dir: string, action: "create" | "checkout" | "delete", name: string): Promise<GitAction> {
    guardWritablePath(dir);
    const root = await this.repoOf(dir);
    if (!name) throw new FsError("bad-request", "缺少分支名", 400);
    if (action === "create") {
      const exists = await this.git(["branch", "--list", name], root).catch(() => "");
      if (exists) throw new FsError("bad-request", `分支已存在: ${name}`, 409);
      await this.git(["branch", name], root);
      return { ok: true, repo: root, output: `created branch ${name}` };
    }
    if (action === "checkout") {
      await this.git(["checkout", name], root, "切换分支失败");
      return { ok: true, repo: root, output: `switched to ${name}` };
    }
    await this.git(["branch", "-D", name], root, "删除分支失败");
    return { ok: true, repo: root, output: `deleted branch ${name}` };
  }

  /** 获取 / 设置 git user 配置（解决首次提交缺少 user.name/user.email 问题）。 */
  async getUserConfig(): Promise<{ name: string; email: string }> {
    const name = await this.git(["config", "--global", "user.name"], process.cwd()).catch(() => "");
    const email = await this.git(["config", "--global", "user.email"], process.cwd()).catch(() => "");
    return { name: name.trim(), email: email.trim() };
  }

  async setUserConfig(name: string, email: string): Promise<GitAction> {
    if (name.trim()) await this.git(["config", "--global", "user.name", name.trim()], process.cwd());
    if (email.trim()) await this.git(["config", "--global", "user.email", email.trim()], process.cwd());
    return { ok: true, output: "已设置 git user 全局配置" };
  }

  /** 远程同步：fetch / pull / push。 */
  async sync(dir: string, action: "fetch" | "pull" | "push"): Promise<GitAction> {
    guardWritablePath(dir);
    const root = await this.repoOf(dir);
    // push 走 pushurl、fetch/pull 走 fetchurl（两者可不同，不能混用同一条）。
    const url = await this.remoteUrlOf(root, await this.upstreamRemote(root), action === "push" ? "push" : "fetch");
    const r = await this.runAuth([action], root, url);
    return { ok: r.code === 0, repo: root, output: r.stderr || r.stdout || `${action} 完成` };
  }

  /**
   * 解析仓库的 GitHub 上下文：origin URL → owner/repo slug + 凭据管理器令牌。
   * 非 GitHub 远程 / 本机无凭据时返回 { skipped }（前端提示但不视为失败）。
   * 令牌仅在内存中使用，不落盘、不写入日志。
   */
  private async ghCtx(root: string): Promise<{ slug: string; token: string } | { skipped: string }> {
    const remote = await this.run(["remote", "get-url", "origin"], root);
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
  private ghHeaders(token: string): Record<string, string> {
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
  async ghRelease(
    dir: string,
    tag: string,
    title: string,
    body: string,
  ): Promise<{ created: boolean; url: string; skipped?: string }> {
    const root = await this.repoOf(dir);
    const ctx = await this.ghCtx(root);
    if ("skipped" in ctx) return { created: false, url: "", skipped: ctx.skipped };

    const base = `https://api.github.com/repos/${ctx.slug}`;
    try {
      // 已有同名 release → 幂等返回其地址
      const existing = await fetch(`${base}/releases/tags/${encodeURIComponent(tag)}`, { headers: this.ghHeaders(ctx.token) });
      if (existing.ok) {
        const rel = (await existing.json()) as { html_url?: string };
        return { created: false, url: rel.html_url ?? "", skipped: "GitHub Release 已存在" };
      }
      const created = await fetch(`${base}/releases`, {
        method: "POST",
        headers: { ...this.ghHeaders(ctx.token), "Content-Type": "application/json" },
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
  async ghListReleases(
    dir: string,
  ): Promise<{ list: Array<{ tag: string; name: string; url: string; date: string }>; skipped?: string }> {
    const root = await this.repoOf(dir);
    const ctx = await this.ghCtx(root);
    if ("skipped" in ctx) return { list: [], skipped: ctx.skipped };
    try {
      const res = await fetch(`https://api.github.com/repos/${ctx.slug}/releases?per_page=20`, {
        headers: this.ghHeaders(ctx.token),
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

  /** 远端 git 命令的公共环境：无 tty 下防挂住（同本地 cloneExec 的考量）。 */
  private static readonly REMOTE_GIT_ENV = "export GIT_TERMINAL_PROMPT=0 GIT_PAGER=cat;";

  /** 在远端目录执行一条 git 命令（cwd = 该 ssh 引用指向的远端目录）。 */
  private remoteGit(dir: string, args: string[]): Promise<{ code: number; stdout: string; stderr: string }> {
    const cmd = `${GitService.REMOTE_GIT_ENV} git ${args.map(shellQuoteSingle).join(" ")}`;
    return remoteRun(dir, cmd);
  }

  /** 远端目录状态：一次性取仓库根 + 当前分支 + porcelain（非仓库 → inRepo:false）。 */
  async remoteStatus(dir: string): Promise<GitDirStatus> {
    const script =
      `${GitService.REMOTE_GIT_ENV} git rev-parse --git-dir >/dev/null 2>&1 || exit 93;` +
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
  async remotePanel(dir: string): Promise<GitPanel> {
    const script =
      `${GitService.REMOTE_GIT_ENV} git rev-parse --git-dir >/dev/null 2>&1 || exit 93;` +
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
  async remoteLog(dir: string, count: number): Promise<GitLogItem[]> {
    const r = await this.remoteGit(dir, ["log", `--max-count=${count}`, "--pretty=format:%h|%an|%ar|%s"]);
    if (r.code !== 0 || !r.stdout) return [];
    return parseLogLines(r.stdout);
  }

  /** 远端单路径改动文本：`git diff HEAD -- .`（以浏览目录为界，新文件未 add 时的语义与本地一致）。 */
  async remoteDiff(dir: string): Promise<GitAction> {
    const r = await this.remoteGit(dir, ["diff", "HEAD", "--no-color", "--", "."]);
    if (r.code !== 0) {
      return { ok: false, repo: dir, output: `（无可用改动或尚无历史提交）\n${r.stderr || r.stdout}` };
    }
    return { ok: true, repo: dir, output: r.stdout || `（该路径相对 HEAD 没有可用改动；新文件请先 git add 后再查看）\n.` };
  }

  /** 把 ssh 引用拆成「父目录引用 + 末段名」：add/discard/unstage 以父目录为 cwd、末段为 pathspec。 */
  private sshParentAndName(ref: string): { parentRef: string; name: string } {
    const { hostId, remote } = splitSshDir(ref);
    if (remote === "/") throw new FsError("bad-request", "远端根目录不支持该操作", 400);
    const cut = remote.lastIndexOf("/");
    const parent = cut <= 0 ? "/" : remote.slice(0, cut);
    const name = remote.slice(cut + 1);
    return { parentRef: `ssh://${hostId}${parent}`, name };
  }

  /** 远端 git add：以父目录为 cwd，用末段名做 pathspec（git 会自动解析到所属仓库）。 */
  async remoteAdd(ref: string): Promise<GitAction> {
    const { parentRef, name } = this.sshParentAndName(ref);
    const r = await this.remoteGit(parentRef, ["add", "--", name]);
    if (r.code !== 0) throw new FsError("fs-error", `git add 失败: ${r.stderr || r.stdout}`, 400);
    return { ok: true, repo: ref, output: `staged ${name}` };
  }

  /** 远端 git restore --staged。 */
  async remoteUnstage(ref: string): Promise<GitAction> {
    const { parentRef, name } = this.sshParentAndName(ref);
    const r = await this.remoteGit(parentRef, ["restore", "--staged", "--", name]);
    if (r.code !== 0) throw new FsError("fs-error", `取消暂存失败: ${r.stderr || r.stdout}`, 400);
    return { ok: true, repo: ref, output: `unstaged ${name}` };
  }

  /** 远端 git checkout -- <path>（丢弃工作区改动）。 */
  async remoteDiscard(ref: string): Promise<GitAction> {
    const { parentRef, name } = this.sshParentAndName(ref);
    const r = await this.remoteGit(parentRef, ["checkout", "--", name]);
    if (r.code !== 0) throw new FsError("fs-error", `还原失败: ${r.stderr || r.stdout}`, 400);
    return { ok: true, repo: ref, output: `discarded ${name}` };
  }

  /** 远端 git commit（commit 不带 pathspec，任意子目录提交整个暂存区）。 */
  async remoteCommit(ref: string, message: string): Promise<GitAction> {
    const r = await this.remoteGit(ref, ["commit", "-m", message]);
    if (r.code !== 0) {
      throw new FsError("fs-error", `提交失败（可能需要先配置 user.name/user.email）: ${r.stderr || r.stdout}`, 400);
    }
    const hash = await this.remoteGit(ref, ["rev-parse", "--short", "HEAD"]).catch(() => ({ stdout: "" }));
    return { ok: true, repo: ref, output: hash.stdout.trim() };
  }

  /** 远端分支操作：create / checkout / delete。 */
  async remoteBranchOp(
    ref: string,
    action: "create" | "checkout" | "delete",
    name: string,
  ): Promise<GitAction> {
    if (!name) throw new FsError("bad-request", "缺少分支名", 400);
    if (action === "create") {
      const exists = await this.remoteGit(ref, ["branch", "--list", name]);
      if (exists.code === 0 && exists.stdout.trim()) throw new FsError("bad-request", `分支已存在: ${name}`, 409);
      const r = await this.remoteGit(ref, ["branch", name]);
      if (r.code !== 0) throw new FsError("fs-error", `创建分支失败: ${r.stderr || r.stdout}`, 400);
      return { ok: true, repo: ref, output: `created branch ${name}` };
    }
    if (action === "checkout") {
      const r = await this.remoteGit(ref, ["checkout", name]);
      if (r.code !== 0) throw new FsError("fs-error", `切换分支失败: ${r.stderr || r.stdout}`, 400);
      return { ok: true, repo: ref, output: `switched to ${name}` };
    }
    const r = await this.remoteGit(ref, ["branch", "-D", name]);
    if (r.code !== 0) throw new FsError("fs-error", `删除分支失败: ${r.stderr || r.stdout}`, 400);
    return { ok: true, repo: ref, output: `deleted branch ${name}` };
  }

  /** 远端 fetch / pull / push。 */
  async remoteSync(ref: string, action: "fetch" | "pull" | "push"): Promise<GitAction> {
    const r = await this.remoteGit(ref, [action]);
    return { ok: r.code === 0, repo: ref, output: r.stderr || r.stdout || `${action} 完成` };
  }

  /**
   * 远端 ignore：读仓库根 `.gitignore`（SFTP/ExecFs 文件语义），幂等追加后原子写回。
   * 与本地实现语义一致，但路径判断全部走 POSIX（远端必然是 POSIX 文件系统）。
   */
  async remoteIgnore(ref: string): Promise<GitAction> {
    const { hostId, remote } = splitSshDir(ref);
    const top = await this.remoteGit(ref, ["rev-parse", "--show-toplevel"]);
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
  async remoteRunCmd(ref: string, args: string[]): Promise<GitRunResult> {
    if (!args.length) throw new FsError("bad-request", "no command", 400);
    const inRepo = await this.remoteGit(ref, ["rev-parse", "--git-dir"]);
    if (inRepo.code !== 0) throw new FsError("bad-request", `不在任何 git 仓库内: ${ref}`, 400);
    const r = await this.remoteGit(ref, args);
    return { code: r.code, stdout: r.stdout, stderr: r.stderr };
  }

  /**
   * 远端 git clone：目标父目录为 ssh 引用。调用方已做过「已存在即 409」检查；
   * 这里负责执行、失败清理半成品目录与错误文案（超时语义与本地 cloneExec 对齐）。
   * 远端不套 guardWriteTarget：目标由远端引用语义决定，本地工作区 containment 不适用
   * （与 routes-fs 的 guardWrite 对非 local 引用直接放行一致）。
   */
  async cloneRemote(
    dir: string,
    url: string,
    name: string,
    depth: number,
  ): Promise<{ stdout: string; stderr: string }> {
    const args = ["clone"];
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
    return { stdout: r.stdout, stderr: r.stderr };
  }

  /** 命中账号注入（克隆弹窗显式选择优先）；供路由层克隆流程复用。 */
  async injectForClone(url: string, accountId?: string) {
    const wanted = (accountId ?? "").trim();
    return wanted ? await gitInjectFor(await getAccount(wanted)) : await gitAuthInject(url);
  }
}

/** 模块级单例：路由层直接委托，无状态（svn 可执行探测等缓存都在各自模块内）。 */
export const gitService = new GitService();
