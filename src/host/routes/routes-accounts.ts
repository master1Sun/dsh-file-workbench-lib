/**
 * 账号（Git / SVN 凭据）管理路由：列表 / 新增 / 更新 / 删除 / 测试连通 / 写入系统。
 *
 * - 配置持久化在 workbench-store 的 accounts.json（与系统凭据管理器、
 *   `%APPDATA%\Subversion\auth` 隔离）；
 * - 列表/新增/更新响应一律经 `toPublicAccount` 抹去机密，只留 `hasSecret` 标记；
 *   **机密永不回传前端**（表单里留空即表示沿用现有值，与 ssh-hosts 同一约定）；
 * - test 分两端：git 走 `git ls-remote`，svn 走 `svn list`，都用**该账号自己的凭据**注入；
 * - apply（写入系统）分两端：git 交给 `git credential approve`（→ Windows 凭据管理器）；
 *   svn 由 svn 自己完成一次认证并落进它自己的 auth 缓存（**不加** `--no-auth-cache`）。
 *   两者都是为了让命令行 / 其它 GUI 工具也免密，属显式动作。
 */
import {
  addAccount,
  applyGitToSystem,
  getAccount,
  gitInjectFor,
  hostOfUrl,
  listAccountsRaw,
  matchAccount,
  removeAccount,
  toPublicAccount,
  updateAccount,
  withSvnAuth,
  type AccountInput,
  type AccountRecord,
} from "../accounts/accounts.js";
import { FsError } from "../fs/fs-tree.js";
import { decodeSvnOutput, resolveSvnExe } from "./routes-svn.js";
import { json, readBody, type RouteMatcher } from "./routes-util.js";
import { CommandLineRunner, type CmdResult } from "../services/command-runner.js";

/** 账号连通性测试超时（毫秒）：远端不可达时应尽快返回原因，而不是挂住请求。 */
const ACCOUNT_TEST_TIMEOUT_MS = 30_000;

/**
 * 测试连通专用 runner：复用 CommandLineRunner 统一的进程执行骨架
 * （超时 killed→124、输出解码、错误文案拼装），自身不含任何业务状态。
 * svn 输出按混合编码逐行解码，其余按 UTF-8（与原 runCmd 行为一致）。
 */
class AccountTestRunner extends CommandLineRunner {
  async runCmd(exe: string, args: string[], env: NodeJS.ProcessEnv, isSvn = false): Promise<CmdResult> {
    return this.execCapture(exe, args, {
      env,
      timeoutMs: ACCOUNT_TEST_TIMEOUT_MS,
      maxBufferBytes: 8 * 1024 * 1024,
      timeoutMessage: `超时（${ACCOUNT_TEST_TIMEOUT_MS / 1000}s，已终止）`,
      decode: isSvn ? decodeSvnOutput : (b: Buffer) => b.toString("utf8"),
    });
  }
}
const accountRunner = new AccountTestRunner();

/** 由请求体构造一条「尚未保存」的账号（测试连通用），字段语义与落盘记录一致。 */
function draftAccount(body: AccountInput): AccountRecord {
  const url = body.url?.trim() ?? "";
  const now = new Date().toISOString();
  return {
    id: "draft",
    kind: body.kind === "svn" ? "svn" : "git",
    host: (body.host?.trim() || hostOfUrl(url)).toLowerCase(),
    url,
    name: body.name?.trim() ?? "",
    username: body.username?.trim() ?? "",
    secret: body.secret ?? "",
    secretKind: body.secretKind === "token" ? "token" : "password",
    note: body.note?.trim() ?? "",
    createdAt: now,
    updatedAt: now,
  };
}

/** 测试 git 账号：`git ls-remote` 走注入的凭据（不读系统凭据管理器）。 */
async function testGitAccount(acct: AccountRecord): Promise<{ ok: boolean; detail: string }> {
  const target = acct.url.trim();
  if (!target) return { ok: false, detail: "请先填写仓库地址，测试需要一个可访问的 URL" };
  if (!acct.username || !acct.secret) return { ok: false, detail: "用户名与口令（或令牌）均为必填" };
  const inject = await gitInjectFor(acct);
  const r = await accountRunner.runCmd("git", [...inject.args, "ls-remote", "--heads", target], { ...process.env, ...inject.env });
  if (r.code === 0) {
    const n = r.stdout.split(/\r?\n/).filter(Boolean).length;
    return { ok: true, detail: `已连通，远端分支 ${n} 个` };
  }
  return { ok: false, detail: r.stderr || r.stdout || `退出码 ${r.code}` };
}

/** 测试 svn 账号：`svn list` 走该账号的凭据。 */
async function testSvnAccount(acct: AccountRecord): Promise<{ ok: boolean; detail: string }> {
  const target = acct.url.trim();
  if (!target) return { ok: false, detail: "请先填写仓库地址，测试需要一个可访问的 URL" };
  if (!acct.username || !acct.secret) return { ok: false, detail: "用户名与口令均为必填" };
  const exe = await resolveSvnExe();
  if (!exe) return { ok: false, detail: "未找到可用的 svn 命令行工具（未安装 Subversion？）" };
  const args = withSvnAuth(["list", target], acct);
  const r = await accountRunner.runCmd(exe, args, process.env, true);
  if (r.code === 0) {
    const n = r.stdout.split(/\r?\n/).filter(Boolean).length;
    return { ok: true, detail: `已连通，该路径下条目 ${n} 个` };
  }
  return { ok: false, detail: r.stderr || r.stdout || `退出码 ${r.code}` };
}

export const accountsResource: RouteMatcher = async (req, res, seg, _q, method) => {
  if (seg[0] !== "accounts") return false;

  // --- 账号列表（机密抹除） ---
  if (seg.length === 1 && method === "GET") {
    const accounts = (await listAccountsRaw()).map(toPublicAccount);
    return (json(res, 200, { ok: true, data: { accounts } }), true);
  }

  /**
   * 预览某个地址会命中哪条账号（`?kind=&url=`）——供界面显示「当前仓库将使用 xxx」。
   *
   * 与执行期注入走**同一个** `matchAccount`，故界面看到的生效对象与真正注入的完全一致；
   * 同时它让「两层匹配（URL 前缀 → 主机）」这条核心规则可以被 HTTP 层直接断言。
   */
  if (seg[1] === "match" && seg.length === 2 && method === "GET") {
    const kind = _q.get("kind") === "svn" ? "svn" : "git";
    const url = (_q.get("url") ?? "").trim();
    const hit = url ? await matchAccount(kind, url) : null;
    return (json(res, 200, { ok: true, data: { account: hit ? toPublicAccount(hit) : null } }), true);
  }

  // --- 新增账号 ---
  if (seg[1] === "add" && seg.length === 2 && method === "POST") {
    const body = (await readBody(req)) as AccountInput | null;
    const rec = await addAccount(body ?? {});
    return (json(res, 200, { ok: true, data: { account: toPublicAccount(rec) } }), true);
  }

  // --- 更新账号（局部字段；secret 留空沿用现有） ---
  if (seg[1] === "update" && seg.length === 2 && method === "POST") {
    const body = (await readBody(req)) as (AccountInput & { id?: string }) | null;
    if (!body?.id) return (json(res, 400, { ok: false, error: "id required" }), true);
    const rec = await updateAccount(body.id, body);
    return (json(res, 200, { ok: true, data: { account: toPublicAccount(rec) } }), true);
  }

  // --- 删除账号 ---
  if (seg[1] === "remove" && seg.length === 2 && method === "POST") {
    const body = (await readBody(req)) as { id?: string } | null;
    if (!body?.id) return (json(res, 400, { ok: false, error: "id required" }), true);
    await removeAccount(body.id);
    return (json(res, 200, { ok: true, data: { id: body.id } }), true);
  }

  // --- 测试连通：{id} 走已存配置；或内联 {kind,host,url,username,secret} 试一套还没保存的凭据 ---
  if (seg[1] === "test" && seg.length === 2 && method === "POST") {
    const body = (await readBody(req)) as (AccountInput & { id?: string }) | null;
    let acct: AccountRecord;
    if (body?.id) {
      acct = await getAccount(body.id);
    } else if (body && (body.username !== undefined || body.url || body.host)) {
      acct = draftAccount(body);
      if (!acct.secret) return (json(res, 400, { ok: false, error: "secret required for testing a draft account" }), true);
    } else {
      return (json(res, 400, { ok: false, error: "id or draft fields required" }), true);
    }
    const result = acct.kind === "svn" ? await testSvnAccount(acct) : await testGitAccount(acct);
    return (json(res, 200, { ok: true, data: result }), true);
  }

  // --- 写入系统：让命令行 / 其它 GUI 工具也免密（显式动作，默认不写） ---
  if (seg[1] === "apply" && seg.length === 2 && method === "POST") {
    const body = (await readBody(req)) as { id?: string } | null;
    if (!body?.id) return (json(res, 400, { ok: false, error: "id required" }), true);
    const acct = await getAccount(body.id);
    if (acct.kind === "git") {
      await applyGitToSystem(acct);
      return (json(res, 200, { ok: true, data: { detail: `已写入系统凭据管理器（${acct.username}@${acct.host}）` } }), true);
    }
    // svn：必须给一个 URL 才能完成一次真实认证（凭据只有被服务端接受才会进它的缓存）
    const target = acct.url.trim();
    if (!target) {
      throw new FsError("bad-request", "写入系统需要先填写仓库地址（svn 要完成一次认证才会写缓存）", 400);
    }
    const exe = await resolveSvnExe();
    if (!exe) throw new FsError("fs-error", "未找到可用的 svn 命令行工具", 400);
    // ⛔ 这里**故意不加** `--no-auth-cache` —— 正是要让 svn 把凭据写进自己的认证缓存。
    const args = ["info", "--non-interactive", "--username", acct.username, "--password", acct.secret, target];
    const r = await accountRunner.runCmd(exe, args, process.env, true);
    if (r.code !== 0) throw new FsError("fs-error", `svn 认证失败：${r.stderr || r.stdout || `退出码 ${r.code}`}`, 400);
    return (json(res, 200, { ok: true, data: { detail: `已写入 svn 认证缓存（${acct.username}@${acct.host}）` } }), true);
  }

  return (json(res, 404, { ok: false, error: `no accounts route ${method} /${seg.slice(1).join("/")}` }), true);
};
