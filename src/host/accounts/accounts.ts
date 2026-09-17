/**
 * accounts —— Git / SVN 账号（凭据）的存储、匹配与执行期注入。
 *
 * 持久化复用 workbench-store 的按 key 分文件机制（PERSIST_KEYS 白名单），落盘
 * `{DSH_HOME|~/.dsh}/fileworkbench/accounts.json`。**与系统凭据管理器
 * （git-credential-wincred → Windows 凭据管理器）和 `%APPDATA%\Subversion\auth`
 * 互不干扰**：本模块只在用户显式触发「写入系统」时才会碰它们。
 *
 * ## 粒度为什么是「主机 + 可选 URL 前缀」两层
 *
 * 实测两端的原生键都是**主机级**，与仓库所在文件夹无关：
 *   - Git（本机 wincred，`cmdkey /list`）：`git:https://github.com` ← 仓库路径不参与键；
 *     仅当 remote 里内嵌用户名（`https://user@host/...`）或开启
 *     `credential.useHttpPath` 时才会细化到用户名 / 路径。
 *   - SVN（本机 `%APPDATA%\Subversion\auth\svn.simple`）：
 *     `<https://113.57.110.41:804> Authorization SVN` ← 同样域名级。
 * 故默认按主机匹配即可覆盖绝大多数场景；需要「同主机多账号并存」时，填写 `url`
 * 按前缀最长匹配精确命中。
 *
 * ## 凭证如何进入子进程（不落盘、不进 argv）
 *
 *   - Git：用户名走 `-c credential.username=<u>`（非机密，可进 argv），口令走
 *     `GIT_ASKPASS`（.cmd → node 外壳）从环境变量 `DSH_FW_GIT_SECRET` 读取。
 *     本机实测（git 2.55 + wincred）：`.cmd` 外壳会被 git 真正执行并转发到 node，
 *     因此口令既不出现在命令行参数（同机进程可读），也不额外落盘成明文文件。
 *   - SVN：1.8 无 `--password-from-stdin`（1.10+ 才有），只能走
 *     `--username/--password` 参数，同时加 `--no-auth-cache` 避免污染全局缓存。
 *     命令行参数对同用户进程可见属已知取舍；需要免密且不留参数时请用「写入系统」。
 */
import { spawn } from "node:child_process";
import { randomUUID } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

import { FsError } from "../fs/fs-tree.js";
import { getPersistKey, setPersistKey, workbenchStateDir } from "../store/workbench-store.js";

const PERSIST_KEY = "accounts";

export type AccountKind = "git" | "svn";

/** 认证机密类型：口令 / 访问令牌（仅影响表单提示与「写入系统」的说明文案）。 */
export type SecretKind = "password" | "token";

export interface AccountRecord {
  id: string;
  kind: AccountKind;
  /** 主机（小写，含非默认端口），如 `github.com` / `113.57.110.41:804`。 */
  host: string;
  /**
   * 生效范围：仓库 / 远程地址。**留空 = 该主机下全部仓库**（对齐原生键粒度）；
   * 填写则按前缀最长匹配，用于「同主机多账号并存」。
   */
  url: string;
  /** 展示名，默认 `${username}@${host}`。 */
  name: string;
  username: string;
  /** 口令或访问令牌（明文，仅存于本机插件配置，不外发）。 */
  secret: string;
  secretKind: SecretKind;
  note: string;
  createdAt: string;
  updatedAt: string;
}

/** 对外（路由 / 前端）安全的形态：抹去机密，只留存在性标记。 */
export interface AccountPublic {
  id: string;
  kind: AccountKind;
  host: string;
  url: string;
  name: string;
  username: string;
  secretKind: SecretKind;
  note: string;
  /** 是否已保存机密（前端据此显示「留空沿用」占位符）。 */
  hasSecret: boolean;
  createdAt: string;
  updatedAt: string;
}

export function toPublicAccount(rec: AccountRecord): AccountPublic {
  return {
    id: rec.id,
    kind: rec.kind,
    host: rec.host,
    url: rec.url,
    name: rec.name,
    username: rec.username,
    secretKind: rec.secretKind,
    note: rec.note,
    hasSecret: rec.secret.length > 0,
    createdAt: rec.createdAt,
    updatedAt: rec.updatedAt,
  };
}

/**
 * 从地址取「协议 + 主机（含非默认端口）」，全部小写。
 *
 * 三种输入都要认（实测中三种都出现过）：
 *   - 完整 URL：`https://113.57.110.41:804/svn/webgis` → `113.57.110.41:804`
 *   - scp 形态：`git@github.com:owner/repo.git` → `github.com`（`new URL` 解析不了）
 *   - 裸主机：`github.com` / `113.57.110.41:804`（表单里手填）→ 补 `https://` 再解析
 * 解析不出时返回空串，调用方据此退回「只要类型对就用唯一一条」的宽松匹配。
 */
export function hostOfUrl(raw: string): string {
  const s = (raw ?? "").trim();
  if (!s) return "";
  const scp = s.match(/^[^/@\s]+@([^/:\s]+):[^/\\]/);
  if (scp) return scp[1].toLowerCase();
  try {
    const withScheme = /^[a-z][a-z0-9+.-]*:\/\//i.test(s) ? s : `https://${s}`;
    return new URL(withScheme).host.toLowerCase();
  } catch {
    return "";
  }
}

async function readAll(): Promise<AccountRecord[]> {
  const raw = (await getPersistKey(PERSIST_KEY)) as unknown;
  return Array.isArray(raw) ? (raw as AccountRecord[]) : [];
}

async function writeAll(list: AccountRecord[]): Promise<void> {
  await setPersistKey(PERSIST_KEY, list);
}

/** 列出全部账号（含明文机密——仅供 host 侧内部使用，勿直接回给前端）。 */
export async function listAccountsRaw(): Promise<AccountRecord[]> {
  return readAll();
}

/** 按 id 取账号；不存在抛 404。 */
export async function getAccount(id: string): Promise<AccountRecord> {
  const found = (await readAll()).find((a) => a.id === id);
  if (!found) throw new FsError("not-found", `account "${id}" is not configured`, 404);
  return found;
}

function normalizeKind(v: unknown): AccountKind {
  return v === "svn" ? "svn" : "git";
}

function normalizeSecretKind(v: unknown): SecretKind {
  return v === "token" ? "token" : "password";
}

export interface AccountInput {
  kind?: string;
  host?: string;
  url?: string;
  name?: string;
  username?: string;
  secret?: string;
  secretKind?: string;
  note?: string;
}

/**
 * 是否与已有账号重复：**同类型 + 同主机 + 同生效范围**。
 *
 * 两条 scope 完全相同的账号是无意义的：匹配时只能靠「谁先在列表里」决胜，等于把
 * 「到底用哪个账号」变成依赖插入顺序的隐规则（用户看到的是「改了没生效」）。
 * 故直接拒绝，让用户明确改掉其一（要么改 scope，要么删掉旧的）。
 * 注意：scope 为空（该主机全部仓库）同样参与比较——同主机只能有一条默认账号。
 */
function isDuplicate(list: AccountRecord[], rec: AccountRecord, excludeId?: string): boolean {
  const scope = rec.url.trim().toLowerCase();
  return list.some(
    (x) => x.id !== excludeId && x.kind === rec.kind && x.host === rec.host && x.url.trim().toLowerCase() === scope,
  );
}

/** 新增账号（校验 + 生成 id）。host 留空时从 url 推导。 */
export async function addAccount(input: AccountInput): Promise<AccountRecord> {
  const username = input.username?.trim() ?? "";
  const secret = input.secret ?? "";
  const url = input.url?.trim() ?? "";
  const host = (input.host?.trim() || hostOfUrl(url)).toLowerCase();
  if (!host) throw new FsError("bad-request", "host is required (or provide a url to derive it)", 400);
  if (!username) throw new FsError("bad-request", "username is required", 400);
  if (!secret) throw new FsError("bad-request", "secret (password / token) is required", 400);
  const now = new Date().toISOString();
  const rec: AccountRecord = {
    id: randomUUID().slice(0, 8),
    kind: normalizeKind(input.kind),
    host,
    url,
    name: input.name?.trim() || `${username}@${host}`,
    username,
    secret,
    secretKind: normalizeSecretKind(input.secretKind),
    note: input.note?.trim() ?? "",
    createdAt: now,
    updatedAt: now,
  };
  const list = await readAll();
  if (isDuplicate(list, rec)) {
    throw new FsError(
      "bad-request",
      `duplicate account: ${rec.kind} ${rec.host} (${rec.url || "all repositories on this host"}) already exists`,
      400,
    );
  }
  list.push(rec);
  await writeAll(list);
  return rec;
}

/** 更新账号（按 id 局部更新；`secret` 留空时沿用现有值）。 */
export async function updateAccount(id: string, input: AccountInput): Promise<AccountRecord> {
  const list = await readAll();
  const idx = list.findIndex((a) => a.id === id);
  if (idx === -1) throw new FsError("not-found", `account "${id}" is not configured`, 404);
  const cur = list[idx];
  const url = input.url !== undefined ? input.url.trim() : cur.url;
  const host = (input.host?.trim() || cur.host || hostOfUrl(url)).toLowerCase();
  if (!host) throw new FsError("bad-request", "host is required (or provide a url to derive it)", 400);
  const username = input.username?.trim() || cur.username;
  if (!username) throw new FsError("bad-request", "username is required", 400);
  // 机密留空 = 沿用现有（口令不回传前端，表单只能留空，故这里必须按「沿用」处理）。
  const secret = input.secret ? input.secret : cur.secret;
  const rec: AccountRecord = {
    ...cur,
    kind: input.kind ? normalizeKind(input.kind) : cur.kind,
    host,
    url,
    name: input.name !== undefined ? input.name.trim() || `${username}@${host}` : cur.name,
    username,
    secret,
    secretKind: input.secretKind ? normalizeSecretKind(input.secretKind) : cur.secretKind,
    note: input.note !== undefined ? input.note.trim() : cur.note,
    updatedAt: new Date().toISOString(),
  };
  if (isDuplicate(list, rec, id)) {
    throw new FsError(
      "bad-request",
      `duplicate account: ${rec.kind} ${rec.host} (${rec.url || "all repositories on this host"}) already exists`,
      400,
    );
  }
  list[idx] = rec;
  await writeAll(list);
  return rec;
}

/** 删除账号。 */
export async function removeAccount(id: string): Promise<void> {
  const list = await readAll();
  const next = list.filter((a) => a.id !== id);
  if (next.length === list.length) throw new FsError("not-found", `account "${id}" is not configured`, 404);
  await writeAll(next);
}

/**
 * 按「URL 前缀最长匹配 → 主机匹配」两级挑账号。
 *
 * ① 前缀匹配：`url` 有值的账号，取前缀最长者（同主机多账号时精确命中）；
 * ② 主机匹配：与账号 host 相同者，其中**无 url 的账号优先**（它是该主机的默认账号），
 *    否则取第一条，保证「同主机多条、某条不填 URL」时行为可预期。
 * 未命中返回 null（调用方按「不注入」处理，仍可依赖 svn 自身缓存 / 匿名访问）。
 */
export async function matchAccount(kind: AccountKind, url: string): Promise<AccountRecord | null> {
  const list = (await readAll()).filter((a) => a.kind === kind);
  if (!list.length) return null;
  const target = (url ?? "").trim().toLowerCase();
  let best: AccountRecord | null = null;
  if (target) {
    for (const a of list) {
      const scope = a.url.trim().toLowerCase();
      if (!scope || !target.startsWith(scope)) continue;
      if (!best || scope.length > best.url.trim().length) best = a;
    }
  }
  if (best) return best;
  const host = hostOfUrl(url);
  if (!host) return null;
  const sameHost = list.filter((a) => a.host === host);
  if (!sameHost.length) return null;
  return sameHost.find((a) => !a.url.trim()) ?? sameHost[0];
}

/* ── SVN：执行期参数注入 ─────────────────────────────────────────────────── */

/**
 * 把附加选项插到 `--` 分隔符**之前**。
 *
 * `svn checkout -- <url> <target>` 这类命令里，`--` 之后是位置参数；把选项追加到末尾
 * 会被当成路径而报错，故必须插在分隔符前。无 `--` 时追加到末尾即可。
 */
export function insertOptions(args: string[], extra: string[]): string[] {
  const i = args.indexOf("--");
  if (i === -1) return [...args, ...extra];
  return [...args.slice(0, i), ...extra, ...args.slice(i)];
}

/**
 * 生成带认证参数的 svn 命令行。
 *
 * `--no-auth-cache`：走哪条账号由插件配置决定，避免同一次调用又把凭据写进全局缓存，
 * 造成「插件里改了账号但 svn 仍用旧缓存值」的错乱。需要免密的场景请显式用「写入系统」。
 */
export function withSvnAuth(args: string[], acct: AccountRecord): string[] {
  const extra: string[] = [];
  if (!args.includes("--non-interactive")) extra.push("--non-interactive");
  if (!args.includes("--no-auth-cache")) extra.push("--no-auth-cache");
  extra.push("--username", acct.username, "--password", acct.secret);
  return insertOptions(args, extra);
}

/* ── Git：执行期注入（askpass 外壳 + 环境变量） ───────────────────────────── */

const ASKPASS_CJS = "git-askpass.cjs";
const ASKPASS_CMD = "git-askpass.cmd";
/** 环境变量名：askpass 外壳从这里读口令（不落 argv、不落盘）。 */
export const GIT_SECRET_ENV = "DSH_FW_GIT_SECRET";

let askpassShimPath: string | null = null;

/**
 * 生成 git 凭据外壳（幂等，进程内缓存路径）。
 *
 * 本机实测（git 2.55 + git-credential-wincred）：`GIT_ASKPASS` 指向 `.cmd` 时，
 * git 会真正执行该外壳并转发到 node —— 因此可以把口令**只经环境变量**递给子进程。
 * 外壳文件里只有 node 与脚本路径，**不含任何机密**。
 */
export async function ensureGitAskpassShim(): Promise<string> {
  if (askpassShimPath) return askpassShimPath;
  const dir = workbenchStateDir();
  await mkdir(dir, { recursive: true });
  const cjsPath = join(dir, ASKPASS_CJS);
  const cmdPath = join(dir, ASKPASS_CMD);
  await writeFile(cjsPath, `process.stdout.write((process.env.${GIT_SECRET_ENV} || "") + "\\n");\n`, "utf8");
  await writeFile(cmdPath, `@echo off\r\n"${process.execPath}" "${cjsPath}"\r\n`, "utf8");
  askpassShimPath = cmdPath;
  return cmdPath;
}

/**
 * 按**指定账号**构造 git 注入参数（不查库，供「测试连通」等草稿场景复用）。
 *
 * `-c credential.helper=` 置空是**必需**的：本机默认 helper 是 wincred，系统凭据管理器
 * 里有旧条目时会抢先命中，导致用户刚在插件里改的账号不生效。置空后本次调用只认注入值，
 * 行为完全由插件配置决定。
 */
export async function gitInjectFor(acct: AccountRecord): Promise<{ args: string[]; env: Record<string, string> }> {
  const shim = await ensureGitAskpassShim();
  return {
    args: ["-c", "credential.helper=", "-c", `credential.username=${acct.username}`],
    env: { GIT_ASKPASS: shim, GIT_TERMINAL_PROMPT: "0", [GIT_SECRET_ENV]: acct.secret },
  };
}

/** 取针对某远程地址的 git 注入参数；无匹配账号返回 null（不干预 git 原生凭据流程）。 */
export async function gitAuthInject(url: string): Promise<{ args: string[]; env: Record<string, string> } | null> {
  const acct = await matchAccount("git", url);
  return acct ? gitInjectFor(acct) : null;
}

/**
 * 把账号写入系统凭据管理器（`git credential approve`），之后命令行 / 其它 GUI 工具免密。
 *
 * 这里**不加** `credential.helper=`：正是要让 git 把它交给已配置的 helper（wincred）落盘。
 */
export function applyGitToSystem(acct: AccountRecord): Promise<void> {
  const url = acct.url.trim() || `https://${acct.host}`;
  let protocol = "https";
  let host = acct.host;
  try {
    const u = new URL(/^[a-z][a-z0-9+.-]*:\/\//i.test(url) ? url : `https://${url}`);
    protocol = u.protocol.replace(":", "");
    host = u.host;
  } catch {
    /* 地址不规整时沿用账号里的 host */
  }
  const body = `protocol=${protocol}\nhost=${host}\nusername=${acct.username}\npassword=${acct.secret}\n\n`;
  return new Promise<void>((resolve, reject) => {
    let child: ReturnType<typeof spawn>;
    try {
      child = spawn("git", ["credential", "approve"], {
        windowsHide: true,
        env: { ...process.env, GIT_TERMINAL_PROMPT: "0" },
      });
    } catch (error) {
      reject(new FsError("fs-error", `无法执行 git credential approve: ${String(error)}`, 500));
      return;
    }
    child.on("error", (error) => reject(new FsError("fs-error", `git credential approve 失败: ${error.message}`, 500)));
    child.on("close", (code) =>
      code === 0
        ? resolve()
        : reject(new FsError("fs-error", `git credential approve 退出码 ${code}（本机未配置凭据 helper？）`, 400)),
    );
    child.stdin?.write(body);
    child.stdin?.end();
  });
}
