/**
 * SSH 远端主机管理路由：列表 / 新增 / 删除 / 测试连接 / TOFU 信任保存。
 *
 * - 配置持久化在 workbench-store 的 ssh-hosts.json（与 dsh-ssh 隔离）；
 * - 列表/新增响应抹去认证机密（只留 authType 与 hasSecret 标记）；
 * - test 复用 vendored ssh-core 的 SshPool.testConnection：连接失败时回传结构化
 *   字段（stage/fingerprint/rawKeyBase64/keyType），供前端 TOFU 弹窗展示指纹；
 * - trust 把用户确认过的主机公钥追加到 OpenSSH 默认 known_hosts（幂等）。
 */
import {
  appendKnownHost,
  defaultKnownHostsPath,
  sshKeyTypeFromBlob,
  type SshConnConfig,
} from "../ssh/ssh-core.js";
import { mkdir, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

import {
  addHost,
  updateHost,
  connFor,
  invalidateConn,
  listHostsRaw,
  removeHost,
  testConnection,
  toPublic,
} from "../ssh/ssh-hosts.js";
import { getFs, parseRef } from "../fs/fs-provider.js";
import { json, readBody, type RouteMatcher } from "./routes-util.js";

export const sshResource: RouteMatcher = async (req, res, seg, _q, method) => {
  if (seg[0] !== "ssh") return false;

  // --- 主机列表（机密抹除） ---
  if (seg[1] === "hosts" && seg.length === 2 && method === "GET") {
    const hosts = (await listHostsRaw()).map(toPublic);
    return (json(res, 200, { ok: true, data: { hosts } }), true);
  }

  // --- 新增主机 ---
  if (seg[1] === "add" && seg.length === 2 && method === "POST") {
    const body = (await readBody(req)) as Parameters<typeof addHost>[0] | null;
    const cfg = await addHost(body ?? {});
    return (json(res, 200, { ok: true, data: { host: toPublic(cfg) } }), true);
  }

  // --- 更新主机（局部字段；口令/私钥留空沿用现有） ---
  if (seg[1] === "update" && seg.length === 2 && method === "POST") {
    const body = (await readBody(req)) as ({ id?: string } & Parameters<typeof updateHost>[1]) | null;
    if (!body?.id) return (json(res, 400, { ok: false, error: "id required" }), true);
    const cfg = await updateHost(body.id, body);
    return (json(res, 200, { ok: true, data: { host: toPublic(cfg) } }), true);
  }

  // --- 删除主机（断开连接池缓存） ---
  if (seg[1] === "remove" && seg.length === 2 && method === "POST") {
    const body = (await readBody(req)) as { id?: string } | null;
    if (!body?.id) return (json(res, 400, { ok: false, error: "id required" }), true);
    await removeHost(body.id);
    return (json(res, 200, { ok: true, data: { id: body.id } }), true);
  }

  // --- 测试连接：{id} 走已存配置，或内联 {host,port,user,auth} 试配 ---
  if (seg[1] === "test" && seg.length === 2 && method === "POST") {
    const body = (await readBody(req)) as {
      id?: string;
      host?: string;
      port?: number;
      user?: string;
      auth?: { type?: string; password?: string; privateKeyPath?: string; passphrase?: string };
    } | null;
    let cfg: SshConnConfig;
    if (body?.id) {
      const stored = (await listHostsRaw()).find((h) => h.id === body.id);
      if (!stored) return (json(res, 404, { ok: false, error: `ssh host "${body.id}" is not configured` }), true);
      cfg = { id: stored.id, host: stored.host, port: stored.port, user: stored.user, auth: stored.auth };
    } else if (body?.host && body?.user) {
      cfg = {
        id: "test",
        host: body.host,
        port: Math.trunc(Number(body.port ?? 22)) || 22,
        user: body.user,
        auth:
          body.auth?.type === "key"
            ? { type: "key", privateKeyPath: body.auth.privateKeyPath ?? "", passphrase: body.auth.passphrase }
            : { type: "password", password: body.auth?.password ?? "" },
      };
    } else {
      return (json(res, 400, { ok: false, error: "id or (host and user) required" }), true);
    }
    const result = await testConnection(cfg);
    return (json(res, 200, { ok: true, data: result }), true);
  }

  // --- TOFU 信任保存：把指纹弹窗确认过的主机公钥写入 known_hosts ---
  if (seg[1] === "trust" && seg.length === 2 && method === "POST") {
    const body = (await readBody(req)) as { id?: string; rawKeyBase64?: string; keyType?: string } | null;
    if (!body?.id || !body?.rawKeyBase64) {
      return (json(res, 400, { ok: false, error: "id and rawKeyBase64 required" }), true);
    }
    const stored = (await listHostsRaw()).find((h) => h.id === body.id);
    if (!stored) return (json(res, 404, { ok: false, error: `ssh host "${body.id}" is not configured` }), true);
    const keyType = body.keyType || sshKeyTypeFromBlob(Buffer.from(body.rawKeyBase64, "base64"));
    const result = await appendKnownHost(
      defaultKnownHostsPath(),
      stored.host,
      stored.port,
      keyType,
      body.rawKeyBase64,
      { hostId: stored.id },
    );
    // 信任已落盘：丢弃旧连接缓存，下次操作用新 known_hosts 重建连接。
    await invalidateConn(stored.id);
    return (json(res, 200, { ok: true, data: result }), true);
  }

  // --- 远端文件落到本机临时文件：官方查看器只认本地路径，故先取回字节再打开副本 ---
  if (seg[1] === "cache" && seg.length === 2 && method === "POST") {
    const body = (await readBody(req)) as { path?: string } | null;
    const raw = body?.path?.trim() ?? "";
    if (!raw) return (json(res, 400, { ok: false, error: "path required" }), true);
    const ref = parseRef(raw);
    if (ref.conn !== "ssh") return (json(res, 400, { ok: false, error: `not a remote (ssh) path: ${raw}` }), true);
    const provider = getFs(ref);
    const stat = await provider.stat(raw).catch(() => null);
    if (!stat || !stat.isFile()) return (json(res, 404, { ok: false, error: `remote file not found: ${raw}` }), true);
    const data = await provider.readFileBytes(raw);
    // 临时路径保留远端相对结构（便于重开命中同一副本），逐段过滤 "." / ".." 防穿越。
    const segs = (ref.path || "/")
      .split("/")
      .filter((s) => s && s !== "." && s !== "..");
    const name = segs.length ? segs[segs.length - 1] : "download";
    const dir = join(tmpdir(), "dsh-file-workbench", "ssh-cache", ref.hostId ?? "unknown", ...segs.slice(0, -1));
    await mkdir(dir, { recursive: true });
    const local = join(dir, name);
    await writeFile(local, data);
    return (json(res, 200, { ok: true, data: { path: local, name, size: data.byteLength } }), true);
  }

  // --- 连接冒烟（**旧版轮询接口**，新前端已改走推送通道的显式检查）---
  // 已由 ws-push.ts 的 `{ type: "ssh-check" }` 取代：同一条 WebSocket 长连接即可完成
  // 「探测 + 回推」，不必为每台主机各发一次 HTTP 请求。此处留存作 REST 兜底。
  if (seg[1] === "ping" && seg.length === 2 && method === "POST") {
    const body = (await readBody(req)) as { id?: string } | null;
    if (!body?.id) return (json(res, 400, { ok: false, error: "id required" }), true);
    try {
      const conn = await connFor(body.id);
      const r = await conn.exec("echo ok", { timeoutMs: 8_000 });
      return (json(res, 200, { ok: true, data: { alive: r.code === 0 } }), true);
    } catch (error) {
      return (
        json(res, 200, {
          ok: true,
          data: { alive: false, error: error instanceof Error ? error.message : String(error) },
        }),
        true
      );
    }
  }

  return (json(res, 404, { ok: false, error: `no ssh route ${method} /${seg.slice(1).join("/")}` }), true);
};
