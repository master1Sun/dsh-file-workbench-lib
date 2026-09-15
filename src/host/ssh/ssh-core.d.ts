/**
 * ssh-core.js（vendored，见同目录 .js 头部 MIT 归属声明）的类型声明。
 * 仅声明本插件实际用到的传输层表面；ssh2 客户端细节保持在 JS 侧。
 */

export declare const HOST_KEY_UNKNOWN_STAGE: string;

export declare class SshError extends Error {
  constructor(opts: {
    hostId?: string;
    stage?: string;
    message: string;
    cause?: unknown;
    host?: string;
    port?: number;
    fingerprint?: string;
    rawKeyBase64?: string;
    keyType?: string;
  });
  hostId: string;
  stage: string;
  readonly isHostKeyUnknown: boolean;
}

export declare function shellQuoteSingle(s: string): string;
export declare function defaultKnownHostsPath(): string;
/** 从 SSH 公钥 blob 首段解析算法名（失败返回 ""）。 */
export declare function sshKeyTypeFromBlob(key: Buffer): string;
/** TOFU 信任保存：把用户确认过的主机公钥追加到 known_hosts（幂等）。 */
export declare function appendKnownHost(
  path: string,
  host: string,
  port: number | undefined,
  keyType: string,
  keyBase64: string,
  opts?: { hostId?: string },
): Promise<{ appended: boolean; path: string }>;

/* ── 统一远端文件语义（SftpWrapper 与 ExecFs 对齐） ── */

export interface RemoteStat {
  type: "file" | "directory" | "other";
  size?: number;
  /** 秒级时间戳。 */
  mtime?: number;
}

export interface RemoteEntry {
  name: string;
  type: "dir" | "file" | "link" | "other";
  size?: number;
  mtime?: number;
}

export interface RemoteExecResult {
  code: number;
  signal: string | null;
  stdout: string;
  stderr: string;
}

export declare class SftpWrapper {
  readText(p: string): Promise<string>;
  listDir(p: string): Promise<RemoteEntry[]>;
  /** 目标不存在返回 undefined；其余错误抛 SshError。 */
  stat(p: string): Promise<RemoteStat | undefined>;
  readBytes(p: string): Promise<Buffer>;
  writeFileAtomic(p: string, data: Uint8Array | string): Promise<void>;
  unlink(p: string): Promise<void>;
  rmdir(p: string): Promise<void>;
}

export declare class ExecFs {
  kind: "exec";
  stat(p: string): Promise<RemoteStat | undefined>;
  exists(p: string): Promise<boolean>;
  readBytes(p: string): Promise<Buffer>;
  readText(p: string): Promise<string>;
  writeFileAtomic(p: string, data: Uint8Array | string): Promise<void>;
  rename(from: string, to: string): Promise<void>;
  mkdir(p: string): Promise<void>;
  unlink(p: string): Promise<void>;
  rmdir(p: string): Promise<void>;
  listDir(p: string): Promise<RemoteEntry[]>;
}

/** conn.fs() 的统一返回：SFTP 可用 → SftpWrapper；SFTP 被禁用 → ExecFs 降级。 */
export type RemoteFs = SftpWrapper | ExecFs;

export interface SshConnConfig {
  id?: string;
  host: string;
  port?: number;
  user?: string;
  auth?: { type: string; password?: string; privateKeyPath?: string; passphrase?: string };
  knownHostsPath?: string;
  acceptNew?: boolean;
  connectTimeoutMs?: number;
  keepaliveIntervalMs?: number;
}

export declare class SshConn {
  constructor(cfg?: SshConnConfig);
  readonly id: string;
  readonly hostId: string;
  connect(): Promise<SshConn>;
  exec(cmd: string, opts?: { cwd?: string; timeoutMs?: number; maxStdoutBytes?: number }): Promise<RemoteExecResult>;
  fs(): Promise<RemoteFs>;
  sftp(): Promise<SftpWrapper>;
  dispose(): Promise<void>;
}

export interface SshTestResult {
  ok: boolean;
  banner?: string;
  error?: string;
  stage?: string;
  hostId?: string;
  host?: string;
  port?: number;
  fingerprint?: string;
  rawKeyBase64?: string;
  keyType?: string;
}

export declare class SshPool {
  constructor(options?: { maxConnections?: number });
  acquire(cfg: SshConnConfig): Promise<SshConn>;
  release(): void;
  invalidate(hostId: string): Promise<void>;
  testConnection(cfg: SshConnConfig): Promise<SshTestResult>;
  dispose(): Promise<void>;
}
