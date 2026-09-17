/**
 * Git 资源路由：状态徽标 / 右键菜单的暂存、提交、查看改动、还原。
 *
 * 业务逻辑全部委托给 GitService（src/host/services/git-service.ts），本文件只做
 * 参数解析与响应包装：解析 method / path / query / body → 调用服务 → json 信封。
 * 对外路由路径、请求/响应结构与错误消息文案保持与重构前完全一致。
 */
import { mkdir, rm } from "node:fs/promises";
import { join } from "node:path";

import { deriveRepoDirName, sanitizeRepoDirName } from "../../shared/repo.js";
import { FsError } from "../fs/fs-tree.js";
import { gitService, findRepoRoot, GitService } from "../services/git-service.js";
import {
  guardWriteTarget,
  json,
  readBody,
  remotePathExists,
  requireAbsolute,
  splitSshDir,
  type RouteMatcher,
} from "./routes-util.js";

export { findRepoRoot };

/** 资源路由：git 只读状态 / diff 不做写保护；add/commit/discard 拒绝受保护区域。 */
export const gitResource: RouteMatcher = async (req, res, seg, q, method, host) => {
  void host;
  if (seg[0] !== "git") return false;
  const op = seg[1];

  /*
   * 远端（ssh://）引用：不再是「一律不支持」——只读状态与写操作都改为通过 SSH exec
   * 在远端服务器上执行 git（见 GitService 的 remote* 方法）。若落到下面的
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
        return (json(res, 200, { ok: true, data: await gitService.remoteStatus(rawPath) }), true);
      }
      if (op === "panel") {
        return (json(res, 200, { ok: true, data: await gitService.remotePanel(rawPath) }), true);
      }
      if (op === "log") {
        const count = Number(q.get("count") ?? "20") || 20;
        return (json(res, 200, { ok: true, data: await gitService.remoteLog(rawPath, count) }), true);
      }
      if (op === "diff") {
        return (json(res, 200, { ok: true, data: await gitService.remoteDiff(rawPath) }), true);
      }
      if (op === "gh-releases") return (json(res, 200, { ok: true, data: { list: [], skipped: "remote" } }), true);
      return (json(res, 200, { ok: true, data: { inRepo: false } }), true);
    }
    if (isPost) {
      const body = postBody;
      const path = (body?.path ?? "").trim();
      if (!path.startsWith("ssh://")) return (json(res, 400, { ok: false, error: "ssh reference required" }), true);
      if (op === "add") return (json(res, 200, { ok: true, data: await gitService.remoteAdd(path) }), true);
      if (op === "unstage") return (json(res, 200, { ok: true, data: await gitService.remoteUnstage(path) }), true);
      if (op === "ignore") return (json(res, 200, { ok: true, data: await gitService.remoteIgnore(path) }), true);
      if (op === "commit") {
        const message = (body?.message as string)?.trim() ?? "";
        if (!message) return (json(res, 400, { ok: false, error: "commit message required" }), true);
        return (json(res, 200, { ok: true, data: await gitService.remoteCommit(path, message) }), true);
      }
      if (op === "discard") return (json(res, 200, { ok: true, data: await gitService.remoteDiscard(path) }), true);
      if (op === "branch") {
        return (
          json(res, 200, {
            ok: true,
            data: await gitService.remoteBranchOp(path, (body?.action as "create" | "checkout" | "delete") ?? "checkout", (body?.name as string) ?? ""),
          }),
          true
        );
      }
      if (op === "sync") {
        return (
          json(res, 200, {
            ok: true,
            data: await gitService.remoteSync(path, body?.action === "fetch" || body?.action === "push" ? body.action : "pull"),
          }),
          true
        );
      }
      if (op === "run") {
        const args = (Array.isArray(body?.args) ? body.args : []).map((a: unknown) => String(a)).filter(Boolean);
        return (json(res, 200, { ok: true, data: await gitService.remoteRunCmd(path, args) }), true);
      }
      return (json(res, 501, { ok: false, error: `git op "${op}" is not supported on remote (ssh) paths` }), true);
    }
    return false;
  }

  // —— 目录 git 状态（徽标） ——
  if (op === "status" && method === "GET" && seg.length === 2) {
    const dir = requireAbsolute(q.get("path")?.trim() ?? "");
    const data = await gitService.status(dir);
    return (json(res, 200, { ok: true, data }), true);
  }

  // —— Git 面板仓库级快照 ——
  if (op === "panel" && method === "GET" && seg.length === 2) {
    const dir = requireAbsolute(q.get("path")?.trim() ?? "");
    const data = await gitService.panel(dir);
    return (json(res, 200, { ok: true, data }), true);
  }

  // —— 提交历史 ——
  if (op === "log" && method === "GET" && seg.length === 2) {
    const dir = requireAbsolute(q.get("path")?.trim() ?? "");
    const count = Number(q.get("count") ?? "20") || 20;
    const data = await gitService.log(dir, count);
    return (json(res, 200, { ok: true, data }), true);
  }

  // —— user 配置（GET 读取 / POST 设置） ——
  if (op === "config" && seg.length === 2) {
    if (method === "GET") {
      const data = await gitService.getUserConfig();
      return (json(res, 200, { ok: true, data }), true);
    }
    if (method === "POST") {
      const body = postBody;
      const data = await gitService.setUserConfig(body?.name ?? "", body?.email ?? "");
      return (json(res, 200, { ok: true, data }), true);
    }
  }

  // —— 单路径改动文本（右键「查看改动」） ——
  if (op === "diff" && method === "GET" && seg.length === 2) {
    const path = requireAbsolute(q.get("path")?.trim() ?? "");
    const data = await gitService.diff(path);
    return (json(res, 200, { ok: true, data }), true);
  }

  // —— GitHub Releases 列表（Git 面板「版本」tab） ——
  if (op === "gh-releases" && method === "GET" && seg.length === 2) {
    const dir = requireAbsolute(q.get("path")?.trim() ?? "");
    const data = await gitService.ghListReleases(dir);
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
    const depth = Number(body?.depth ?? 0);
    if (isRemote) {
      const { remote, hostId } = splitSshDir(dir);
      const targetRef = `ssh://${hostId}${remote === "/" ? "" : remote}/${name}`;
      if (await remotePathExists(dir, name)) {
        return (json(res, 409, { ok: false, error: `target already exists: ${targetRef}` }), true);
      }
      const { stdout, stderr } = await gitService.cloneRemote(dir, url, name, depth);
      return (json(res, 200, { ok: true, data: { path: targetRef, name, stdout, stderr } }), true);
    }
    const target = join(dir, name);
    // 先守卫再探测：受保护 / 工作区外直接 403，不必泄露「那里有没有东西」。
    await guardWriteTarget(body?.key, target);
    if (await gitService.exists(target)) {
      return (json(res, 409, { ok: false, error: `target already exists: ${target}` }), true);
    }
    await mkdir(dir, { recursive: true });
    // 命中账号则注入凭据；`-c ...` 必须排在子命令**之前**，故先拼注入参数再拼 clone。
    // 弹窗里显式选过的账号优先于按地址自动匹配（克隆前就能选/新建）；未知 id 由 getAccount 抛 404。
    const inject = await gitService.injectForClone(url, body?.accountId);
    const args = [...(inject?.args ?? []), "clone", "--progress"];
    if (Number.isFinite(depth) && depth > 0) args.push("--depth", String(Math.floor(depth)));
    // `--` 之后才是位置参数：URL 以 `-` 开头也不会被 git 当成选项。
    args.push("--", url, target);
    const r = await gitService.cloneExec(args, dir, inject?.env);
    if (r.code !== 0) {
      // 失败清理：git 多数情况会自己删掉半成品目录，但**超时被 kill 时不会** ——
      // 残骸会让用户重试直接撞上 409，且看不出原因。force 只删我们刚确认不存在的目标。
      await rm(target, { recursive: true, force: true }).catch(() => {});
      const reason =
        r.code === 124
          ? `git clone 超时（${Math.round(GitService.CLONE_TIMEOUT_MS / 1000)}s，已终止）`
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
      const data = await gitService.add(path);
      return (json(res, 200, { ok: true, data }), true);
    }
    if (op === "unstage") {
      const data = await gitService.unstage(path);
      return (json(res, 200, { ok: true, data }), true);
    }
    if (op === "ignore") {
      const data = await gitService.ignore(path);
      return (json(res, 200, { ok: true, data }), true);
    }
    if (op === "commit") {
      const message = (body?.message as string)?.trim() ?? "";
      if (!message) return (json(res, 400, { ok: false, error: "commit message required" }), true);
      const data = await gitService.commit(path, message);
      return (json(res, 200, { ok: true, data }), true);
    }
    if (op === "discard") {
      const data = await gitService.discard(path);
      return (json(res, 200, { ok: true, data }), true);
    }
    if (op === "branch") {
      const data = await gitService.branchOp(path, (body?.action as "create" | "checkout" | "delete") ?? "checkout", (body?.name as string) ?? "");
      return (json(res, 200, { ok: true, data }), true);
    }
    if (op === "sync") {
      const data = await gitService.sync(path, body?.action === "fetch" || body?.action === "push" ? body.action : "pull");
      return (json(res, 200, { ok: true, data }), true);
    }
    if (op === "gh-release") {
      const releaseTag = (body?.tag as string)?.trim() ?? "";
      if (!releaseTag) return (json(res, 400, { ok: false, error: "tag required" }), true);
      const title = (body?.name as string)?.trim() || releaseTag;
      const text = (body?.body as string)?.trim() ?? "";
      const data = await gitService.ghRelease(path, releaseTag, title, text);
      return (json(res, 200, { ok: true, data }), true);
    }
    if (op === "run") {
      const dir = requireAbsolute((body?.path as string)?.trim() ?? "");
      const args = (Array.isArray(body?.args) ? body.args : []).map((a: unknown) => String(a)).filter(Boolean);
      if (!args.length) return (json(res, 400, { ok: false, error: "no command" }), true);
      const data = await gitService.runCmd(dir, args);
      return (json(res, 200, { ok: true, data }), true);
    }
  }

  return false;
};
