/**
 * ssh-hosts —— 远端主机连接配置存储 + ssh2 连接池。
 *
 * 持久化复用 workbench-store 的按 key 分文件机制（PERSIST_KEYS 白名单），
 * 落盘为 `{DSH_HOME|~/.dsh}/fileworkbench/ssh-hosts.json`，与 dsh-ssh 的
 * settings.yaml 完全隔离（不共享、不写入）。
 *
 * 连接池为模块级单例：按 hostId 复用 SshConn（vendored 自 dsh-ssh 的传输层，
 * 含 known_hosts 校验 / 断线重连 / SFTP 禁用降级），配置变更时 invalidate。
 */
import { randomUUID } from "node:crypto";
import { SshPool, type SshConn, type SshConnConfig } from "./ssh-core.js";
import { getPersistKey, setPersistKey } from "../store/workbench-store.js";
import { FsError } from "../fs/fs-tree.js";

/** 认证方式：口令 或 私钥文件（路径展开 ~）。 */
export type SshHostAuth =
  | { type: "password"; password: string }
  | { type: "key"; privateKeyPath: string; passphrase?: string };

export interface SshHostConfig {
  /** 连接标识：parseRef 的 hostId 即此值。 */
  id: string;
  /** 展示名。 */
  name: string;
  host: string;
  port: number;
  user: string;
  auth: SshHostAuth;
  /** 创建时间（ISO 字符串，展示用）。 */
  createdAt: string;
}

const PERSIST_KEY = "ssh-hosts";

/** 模块级连接池（上限 6：多主机并存且各留重连余量）。 */
const pool = new SshPool({ maxConnections: 6 });

async function readAll(): Promise<SshHostConfig[]> {
  const raw = (await getPersistKey(PERSIST_KEY)) as unknown;
  return Array.isArray(raw) ? (raw as SshHostConfig[]) : [];
}

async function writeAll(list: SshHostConfig[]): Promise<void> {
  await setPersistKey(PERSIST_KEY, list);
}

/** 列出全部主机配置（含明文口令——仅供 host 侧内部使用）。 */
export async function listHostsRaw(): Promise<SshHostConfig[]> {
  return readAll();
}

/** 按 id 取主机配置；不存在抛 404。 */
export async function getHost(id: string): Promise<SshHostConfig> {
  const found = (await readAll()).find((h) => h.id === id);
  if (!found) throw new FsError("not-found", `ssh host "${id}" is not configured`, 404);
  return found;
}

/** 新增主机配置（校验 + 生成 id），返回落盘后的完整配置。 */
export async function addHost(input: {
  name?: string;
  host?: string;
  port?: number;
  user?: string;
  auth?: { type?: string; password?: string; privateKeyPath?: string; passphrase?: string };
}): Promise<SshHostConfig> {
  const host = input.host?.trim() ?? "";
  const user = input.user?.trim() ?? "";
  const port = Math.trunc(Number(input.port ?? 22)) || 22;
  if (!host) throw new FsError("bad-request", "host is required", 400);
  if (!user) throw new FsError("bad-request", "user is required", 400);
  if (port < 1 || port > 65535) throw new FsError("bad-request", `invalid port ${port}`, 400);
  const authType = input.auth?.type === "key" ? "key" : "password";
  let auth: SshHostAuth;
  if (authType === "password") {
    const password = input.auth?.password ?? "";
    if (!password) throw new FsError("bad-request", "password is required for password auth", 400);
    auth = { type: "password", password };
  } else {
    const privateKeyPath = input.auth?.privateKeyPath?.trim() ?? "";
    if (!privateKeyPath) throw new FsError("bad-request", "privateKeyPath is required for key auth", 400);
    auth = { type: "key", privateKeyPath, passphrase: input.auth?.passphrase || undefined };
  }
  const cfg: SshHostConfig = {
    id: randomUUID().slice(0, 8),
    name: input.name?.trim() || `${user}@${host}`,
    host,
    port,
    user,
    auth,
    createdAt: new Date().toISOString(),
  };
  const list = await readAll();
  list.push(cfg);
  await writeAll(list);
  return cfg;
}

/** 更新主机配置（按 id 局部更新；口令/私钥留空时沿用现有值）。 */
export async function updateHost(
  id: string,
  input: {
    name?: string;
    host?: string;
    port?: number;
    user?: string;
    auth?: { type?: string; password?: string; privateKeyPath?: string; passphrase?: string };
  },
): Promise<SshHostConfig> {
  const list = await readAll();
  const idx = list.findIndex((h) => h.id === id);
  if (idx === -1) throw new FsError("not-found", `ssh host "${id}" is not configured`, 404);
  const cur = list[idx];
  const host = input.host?.trim() || cur.host;
  const user = input.user?.trim() || cur.user;
  const port = input.port != null ? Math.trunc(Number(input.port)) || cur.port : cur.port;
  if (port < 1 || port > 65535) throw new FsError("bad-request", `invalid port ${port}`, 400);
  let auth: SshHostAuth = cur.auth;
  if (input.auth) {
    const wants = input.auth.type === "key" ? "key" : "password";
    if (wants === "password") {
      const pw = input.auth.password ?? "";
      if (pw) auth = { type: "password", password: pw };
      else if (cur.auth.type === "password") auth = cur.auth; // 留空 → 沿用现有口令
      else throw new FsError("bad-request", "password is required for password auth", 400);
    } else {
      const keyPath = input.auth.privateKeyPath?.trim() ?? "";
      if (!keyPath) throw new FsError("bad-request", "privateKeyPath is required for key auth", 400);
      auth = { type: "key", privateKeyPath: keyPath, passphrase: input.auth.passphrase || undefined };
    }
  }
  const cfg: SshHostConfig = { ...cur, name: input.name?.trim() || cur.name, host, user, port, auth };
  list[idx] = cfg;
  await writeAll(list);
  await pool.invalidate(id).catch(() => {});
  return cfg;
}

/** 删除主机配置并断开其连接池条目。 */
export async function removeHost(id: string): Promise<void> {
  const list = await readAll();
  const next = list.filter((h) => h.id !== id);
  if (next.length === list.length) throw new FsError("not-found", `ssh host "${id}" is not configured`, 404);
  await writeAll(next);
  await pool.invalidate(id).catch(() => {});
}

/** 对外（路由/前端）安全的配置形态：抹去口令等机密，只留存在性标记。 */
export interface SshHostPublic {
  id: string;
  name: string;
  host: string;
  port: number;
  user: string;
  authType: "password" | "key";
  hasSecret: boolean;
  privateKeyPath?: string;
  createdAt: string;
}

export function toPublic(cfg: SshHostConfig): SshHostPublic {
  return {
    id: cfg.id,
    name: cfg.name,
    host: cfg.host,
    port: cfg.port,
    user: cfg.user,
    authType: cfg.auth.type,
    hasSecret: cfg.auth.type === "password" ? cfg.auth.password.length > 0 : true,
    privateKeyPath: cfg.auth.type === "key" ? cfg.auth.privateKeyPath : undefined,
    createdAt: cfg.createdAt,
  };
}

/** 取（或建立）某主机的 SshConn；acceptNew 首版自动接受未知主机键（TOFU 宽松态，mismatch 仍硬拒）。 */
export async function connFor(id: string): Promise<SshConn> {
  const cfg = await getHost(id);
  const connCfg: SshConnConfig = {
    id: cfg.id,
    host: cfg.host,
    port: cfg.port,
    user: cfg.user,
    auth: cfg.auth,
    acceptNew: true,
  };
  return pool.acquire(connCfg);
}

/** 连接池句柄（routes-ssh 的 test 用）。 */
export function testConnection(cfg: SshConnConfig) {
  return pool.testConnection(cfg);
}

/** 配置变更后丢弃连接池缓存。 */
export function invalidateConn(id: string): Promise<void> {
  return pool.invalidate(id).catch(() => {});
}
