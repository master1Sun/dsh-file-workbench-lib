/**
 * SVN 资源路由：通过系统 `svn` CLI 操作工作副本。
 *
 * 业务逻辑全部委托给 SvnService（src/host/services/svn-service.ts），本文件只做
 * 参数解析与响应包装。对外路由路径、请求/响应结构与错误消息文案保持与重构前完全一致。
 */
import { mkdir, rm } from "node:fs/promises";
import { join } from "node:path";

import { deriveRepoDirName, sanitizeRepoDirName } from "../../shared/repo.js";
import { FsError, isProtectedPath } from "../fs/fs-tree.js";
import { findSvnRoot, resolveSvnExe, svnService } from "../services/svn-service.js";
import { guardWriteTarget, json, readBody, remotePathExists, remoteRmRf, remoteRun, requireAbsolute, splitSshDir, type RouteMatcher } from "./routes-util.js";
import { shellQuoteSingle } from "../ssh/ssh-core.js";

// 兼容导出：routes-accounts（及其他潜在调用方）此前从本模块引用这两个符号。
export { decodeSvnOutput, resolveSvnExe } from "../services/svn-service.js";
export { findSvnRoot };

export const svnResource: RouteMatcher = async (req, res, seg, q, method, host) => {
  void host;
  if (seg[0] !== "svn") return false;
  const op = seg[1];

  // 远端（ssh）引用：info 与 run 改为在远端执行 svn CLI（与远端 git 同一套 SSH exec 通道）。
  // ⛔ 引用来源按方法而异：GET 在 query、POST 在 body —— 只查 query 会让远端 run
  // 漏判并被下面的 requireAbsolute 判成「不是绝对路径」400（同 routes-git.ts 的坑）。
  const isPost = method === "POST" && seg.length === 2;
  const postBody = isPost
    ? ((await readBody(req)) as {
        path?: string;
        args?: unknown[];
        url?: string;
        dir?: string;
        name?: string;
        revision?: string;
        accountId?: string;
        key?: string;
      } | null)
    : null;
  const rawPath = (isPost ? (postBody?.path ?? "") : (q.get("path") ?? "")).trim();
  if (rawPath.startsWith("ssh://")) {
    if (method === "GET" && op === "info") {
      return (json(res, 200, { ok: true, data: await svnService.remoteInfo(rawPath) }), true);
    }
    if (method === "POST" && op === "run") {
      const body = postBody;
      const path = (body?.path ?? "").trim();
      if (!path.startsWith("ssh://")) return (json(res, 400, { ok: false, error: "ssh reference required" }), true);
      const args = (Array.isArray(body?.args) ? body.args : []).map((a: unknown) => String(a)).filter(Boolean);
      if (!args.length) return (json(res, 400, { ok: false, error: "no command" }), true);
      const data = await remoteRun(path, `svn ${args.map(shellQuoteSingle).join(" ")}`);
      return (json(res, 200, { ok: true, data }), true);
    }
    return (json(res, 501, { ok: false, error: `svn op "${op}" is not supported on remote (ssh) paths` }), true);
  }

  // —— 探测工作副本 + 环境（GET /svn/info） ——
  if (op === "info" && method === "GET" && seg.length === 2) {
    const dir = requireAbsolute(q.get("path")?.trim() ?? "");
    const data = await svnService.info(dir);
    return (json(res, 200, { ok: true, data }), true);
  }

  // —— 检出工作副本（POST /svn/checkout）：把远端仓库拉到本地/远端**新目录** ——
  if (op === "checkout" && method === "POST" && seg.length === 2) {
    const body = postBody;
    const rawUrl = (body?.url ?? "").trim();
    if (!rawUrl) return (json(res, 400, { ok: false, error: "url required" }), true);
    const rawDir = (body?.dir ?? "").trim();
    // 目标父目录可以是本机绝对路径，也可以是 `ssh://<hostId>/<remote>` 远端引用 ——
    // 后者改为**在远端服务器上执行 svn checkout**（与远端 git clone 同一套 SSH exec 通道）。
    const isRemote = rawDir.startsWith("ssh://");
    const dir = isRemote ? rawDir : requireAbsolute(rawDir);
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
    const rev = (body?.revision ?? "").trim();
    if (isRemote) {
      const { remote, hostId } = splitSshDir(dir);
      const targetRef = `ssh://${hostId}${remote === "/" ? "" : remote}/${name}`;
      if (await remotePathExists(dir, name)) {
        return (json(res, 409, { ok: false, error: `target already exists: ${targetRef}` }), true);
      }
      const args = ["checkout", "--non-interactive"];
      if (/^-?\d+$/.test(rev)) args.push("-r", rev);
      args.push("--", rawUrl, name);
      const cmd = `svn ${args.map(shellQuoteSingle).join(" ")}`;
      const r = await remoteRun(dir, cmd);
      if (r.code !== 0) {
        await remoteRmRf(dir, name);
        throw new FsError("fs-error", `svn checkout 失败: ${r.stderr || r.stdout || `exit ${r.code}`}`, 400);
      }
      return (json(res, 200, { ok: true, data: { path: targetRef, name, stdout: r.stdout, stderr: r.stderr } }), true);
    }
    const target = join(dir, name);
    await guardWriteTarget(body?.key, target);
    if (await svnService.exists(target)) {
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
    // GIT_TERMINAL_PROMPT=0）。凭据来源：命中「账号管理」里配置的账号则自动注入，
    // 否则仍可依赖 svn 自身的认证缓存 / 带凭据的 URL。
    const args = ["checkout", "--non-interactive"];
    if (/^-?\d+$/.test(rev)) args.push("-r", rev);
    args.push("--", rawUrl, target);
    // 凭据：弹窗里显式选中的账号优先，否则按地址自动匹配（两者都未命中则原样执行）。
    const r = await svnService.run(await svnService.authArgs(args, rawUrl, body?.accountId), dir);
    if (r.code !== 0) {
      await rm(target, { recursive: true, force: true }).catch(() => {});
      throw new FsError("fs-error", `svn checkout 失败: ${r.stderr || r.stdout || `exit ${r.code}`}`, 400);
    }
    return (json(res, 200, { ok: true, data: { path: target, name, stdout: r.stdout, stderr: r.stderr } }), true);
  }

  // —— 通用命令执行（POST /svn/run）：复用前端 GUI 发起的任意 svn 子命令 ——
  if (op === "run" && method === "POST" && seg.length === 2) {
    const body = postBody;
    const dir = requireAbsolute(body?.path?.trim() ?? "");
    const args = (Array.isArray(body?.args) ? body.args : []).map((a: unknown) => String(a)).filter(Boolean);
    if (!args.length) return (json(res, 400, { ok: false, error: "no command" }), true);
    if (isProtectedPath(dir)) {
      return (json(res, 403, { ok: false, error: "protected path" }), true);
    }
    const root = findSvnRoot(dir) ?? dir;
    const data = await svnService.run(await svnService.authArgs(args, await svnService.wcUrl(root)), root);
    return (json(res, 200, { ok: true, data }), true);
  }

  return false;
};
