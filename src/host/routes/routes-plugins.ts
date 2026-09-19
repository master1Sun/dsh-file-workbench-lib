/**
 * 插件相关路由：URL 导入代理（/fetch-plugin）、内置插件源码静态服务（/plugin-src）、
 * 插件持久化数据（/plugin-data）。
 *
 * 「插件管理」的「从 URL 导入」经此拉取远端 .js 源码——服务端代发可绕开浏览器 CORS，
 * 并把内容快照回传前端持久化。仅取 http(s) 文本，做基础 SSRF 拦截与体积上限。
 */
import { createReadStream, existsSync, readFileSync, statSync } from "node:fs";
import { lookup } from "node:dns/promises";
import { isIP } from "node:net";
import { resolve, sep } from "node:path";
import type { ApiResponse } from "../../shared/types.js";
import { getPluginData, setPluginData } from "../store/workbench-store.js";
import { FsError, json, readBody, WEB_DIR, type RouteMatcher } from "./routes-util.js";

/** 单插件源码上限：2MB 足够任何手写 JS，且防止超大响应打爆内存。 */
const MAX_PLUGIN_BYTES = 2 * 1024 * 1024;
const FETCH_TIMEOUT_MS = 15_000;

/** 是否落在私有 / 环回 / 链路本地等不应被外部 URL 导入触及的地址段。 */
function isPrivateAddress(ip: string): boolean {
  // IPv4-mapped IPv6 (::ffff:a.b.c.d) → 取末段按 IPv4 判。
  const mapped = ip.match(/^::ffff:(\d+\.\d+\.\d+\.\d+)$/i);
  if (mapped) ip = mapped[1];
  if (ip.includes(":")) {
    const low = ip.toLowerCase();
    return low.startsWith("fc") || low.startsWith("fd") || low === "::1" || low.startsWith("fe80");
  }
  const [a, b] = ip.split(".").map(Number);
  return (
    a === 127 || // 环回
    a === 10 || // 私有 A
    a === 0 || // 本网络
    (a === 172 && b >= 16 && b <= 31) || // 私有 B
    (a === 192 && b === 168) || // 私有 C
    (a === 169 && b === 254) || // 链路本地
    (a === 100 && b >= 64 && b <= 127) // CGNAT 100.64/10
  );
}

/** 解析主机名并拒绝指向私有/环回的地址（阻断 localhost、内网穿透到本机服务等）。 */
async function assertPublicHost(hostname: string): Promise<void> {
  const host = hostname.replace(/^\[|\]$/g, "");
  if (isIP(host)) {
    if (isPrivateAddress(host)) throw new FsError("bad-request", "禁止访问内网/环回地址", 400);
    return;
  }
  let addrs: { address: string }[];
  try {
    addrs = await lookup(host, { all: true });
  } catch {
    throw new FsError("bad-request", `无法解析主机 ${host}`, 400);
  }
  if (addrs.some((r) => isPrivateAddress(r.address))) {
    throw new FsError("bad-request", "目标主机解析到内网/环回地址，已拒绝", 400);
  }
}

/** 资源路由：POST /fetch-plugin { url } → { code, name }。 */
export const pluginResource: RouteMatcher = async (req, res, seg, q, method) => {
  void q;
  if (!(seg[0] === "fetch-plugin" && seg.length === 1)) return false;
  if (method !== "POST") return false;

  const body = (await readBody(req)) as { url?: string } | null;
  const raw = body?.url?.trim();
  if (!raw) return (json(res, 400, { ok: false, error: "url required" } satisfies ApiResponse<never>), true);

  let u: URL;
  try {
    u = new URL(raw);
  } catch {
    return (json(res, 400, { ok: false, error: "非法 URL" } satisfies ApiResponse<never>), true);
  }
  if (u.protocol !== "http:" && u.protocol !== "https:") {
    return (json(res, 400, { ok: false, error: "仅支持 http(s)" } satisfies ApiResponse<never>), true);
  }
  try {
    await assertPublicHost(u.hostname);
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return (json(res, 400, { ok: false, error: msg } satisfies ApiResponse<never>), true);
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const upstream = await fetch(u.href, {
      redirect: "follow",
      signal: controller.signal,
      headers: { "user-agent": "dsh-file-workbench-plugin-import/1.0" },
    });
    if (!upstream.ok) {
      return (json(res, 502, { ok: false, error: `上游返回 HTTP ${upstream.status}` } satisfies ApiResponse<never>), true);
    }
    const text = await upstream.text();
    if (Buffer.byteLength(text, "utf8") > MAX_PLUGIN_BYTES) {
      return (json(res, 413, { ok: false, error: "插件文件超过 2MB 上限" } satisfies ApiResponse<never>), true);
    }
    const name = decodeURIComponent(u.pathname.split("/").filter(Boolean).pop() || u.hostname);
    return (json(res, 200, { ok: true, data: { code: text, name } } satisfies ApiResponse<{ code: string; name: string }>), true);
  } catch (e) {
    const msg = e instanceof Error ? (e.name === "AbortError" ? "拉取超时" : e.message) : String(e);
    return (json(res, 502, { ok: false, error: `拉取失败：${msg}` } satisfies ApiResponse<never>), true);
  } finally {
    clearTimeout(timer);
  }
};

/** 内置插件源码目录：scripts/build.mjs 把 plugins/lib/<name>.js + .pack-meta.json 拷入 lib/web/plugin-src/。 */
const PLUGIN_SRC_DIR = resolve(WEB_DIR, "plugin-src");

/**
 * 资源路由：GET /plugin-index → 内置插件清单（JSON 数组，即 .pack-meta.json）。
 *
 * 前端「插件管理」的内置种子列表完全由本接口在运行时推导（见 userPlugins.ts
 * fetchBuiltinSeeds）——不再需要构建期生成 builtinPluginSources.ts 内嵌。
 * 条目形状：{ name, id, titleZh, description }；新增插件只需重构建主库，前端零改动。
 */
export const pluginIndexResource: RouteMatcher = async (req, res, seg, q, method) => {
  void req;
  void q;
  if (!(seg[0] === "plugin-index" && seg.length === 1)) return false;
  if (method !== "GET") return false;
  try {
    const raw = readFileSync(resolve(PLUGIN_SRC_DIR, ".pack-meta.json"), "utf8");
    res.on("error", () => {});
    res.writeHead(200, { "content-type": "application/json; charset=utf-8", "cache-control": "no-cache" });
    res.end(raw);
  } catch {
    return (json(res, 404, { ok: false, error: "插件清单不存在" } satisfies ApiResponse<never>), true);
  }
  return true;
};

/**
 * 资源路由：GET /plugin-registry → 可下载插件注册表（JSON 数组，即 plugin-src/registry.json）。
 *
 * 「插件管理」的「未安装」分组数据源：条目形状 { name, url, description, descriptionEn }，
 * url 为同源可下载地址（通常指向本包 /plugin-src?k=<name>），前端点「下载」时经
 * importFromUrl → /fetch-plugin 走完整校验导入。文件由 scripts/build.mjs 从
 * plugins/registry.json 拷入；缺失时返回空数组（UI 只是不显示未安装项）。
 */
export const pluginRegistryResource: RouteMatcher = async (req, res, seg, q, method) => {
  void req;
  void q;
  if (!(seg[0] === "plugin-registry" && seg.length === 1)) return false;
  if (method !== "GET") return false;
  try {
    const raw = readFileSync(resolve(PLUGIN_SRC_DIR, "registry.json"), "utf8");
    res.on("error", () => {});
    res.writeHead(200, { "content-type": "application/json; charset=utf-8", "cache-control": "no-cache" });
    res.end(raw);
  } catch {
    return (json(res, 200, { ok: true, data: [] } satisfies ApiResponse<never[]>), true);
  }
  return true;
};

/**
 * 资源路由：GET /plugin-src?k=<name> 或 /plugin-src/<name>.js → 内置插件 bundle 原文（JavaScript）。
 *
 * 内置种子的 code 字段只是引用 `plugin-src/<name>.js`，前端启用时经此取回源码 eval——
 * 主包体积与插件源码解耦。名称严格白名单为纯文件名（无 `/` `\` `..` 可能），
 * 再经一次目录包含性校验兜底。响应不缓存：重构建后刷新页面即生效。
 */
export const pluginSrcResource: RouteMatcher = async (req, res, seg, q, method) => {
  void req;
  let k: string | undefined;
  if (seg[0] === "plugin-src" && seg.length === 1) {
    if (method !== "GET") return false;
    k = q.get("k") ?? undefined;
  } else if (seg[0] === "plugin-src" && seg.length === 2 && seg[1].endsWith(".js")) {
    // 路径形态直接作为 <script src> 加载用（如 docs 示例页）；多段（含 ..）天然不匹配。
    k = decodeURIComponent(seg[1].slice(0, -3));
  } else {
    return false;
  }
  k = k?.trim();
  if (!k || !/^[A-Za-z0-9._-]+$/.test(k) || k.includes("..")) {
    return (json(res, 400, { ok: false, error: "非法插件名" } satisfies ApiResponse<never>), true);
  }
  const filePath = resolve(PLUGIN_SRC_DIR, `${k}.js`);
  if (!filePath.startsWith(PLUGIN_SRC_DIR + sep)) {
    return (json(res, 400, { ok: false, error: "非法插件名" } satisfies ApiResponse<never>), true);
  }
  if (!existsSync(filePath) || !statSync(filePath).isFile()) {
    return (json(res, 404, { ok: false, error: `插件源码不存在：${k}` } satisfies ApiResponse<never>), true);
  }
  try {
    res.on("error", () => {});
    res.writeHead(200, {
      "content-type": "application/javascript; charset=utf-8",
      "cache-control": "no-cache",
    });
    createReadStream(filePath).pipe(res);
  } catch {
    /* 连接已断开：静默 */
  }
  return true;
};

/** 作者文档白名单：仅这些 .md 可经 /plugin-doc 对外提供（当前只有插件作者文档）。 */
const PLUGIN_DOC_NAMES = new Set(["activity-bar-plugin"]);

/**
 * 资源路由：GET /plugin-doc?k=<name> 或 /plugin-doc/<name>.md → 插件作者文档原文（Markdown）。
 *
 * 面向用户机器上的 AI 助手：装好本包后无需仓库即可拉取完整 API 契约
 * （见 AGENTS.md 第 1 步）。名称严格白名单，不拼路径穿越。响应不缓存：重构建即更新。
 */
export const pluginDocResource: RouteMatcher = async (req, res, seg, q, method) => {
  void req;
  let k: string | undefined;
  if (seg[0] === "plugin-doc" && seg.length === 1) {
    if (method !== "GET") return false;
    k = q.get("k") ?? "activity-bar-plugin";
  } else if (seg[0] === "plugin-doc" && seg.length === 2 && seg[1].endsWith(".md")) {
    k = decodeURIComponent(seg[1].slice(0, -3));
  } else {
    return false;
  }
  k = k?.trim();
  if (!k || !PLUGIN_DOC_NAMES.has(k)) {
    return (json(res, 404, { ok: false, error: `插件文档不存在：${k ?? ""}` } satisfies ApiResponse<never>), true);
  }
  const filePath = resolve(WEB_DIR, "plugin-doc", `${k}.md`);
  if (!existsSync(filePath) || !statSync(filePath).isFile()) {
    return (json(res, 404, { ok: false, error: "插件文档未随包发布" } satisfies ApiResponse<never>), true);
  }
  try {
    res.on("error", () => {});
    res.writeHead(200, {
      "content-type": "text/markdown; charset=utf-8",
      "cache-control": "no-cache",
    });
    createReadStream(filePath).pipe(res);
  } catch {
    /* 连接已断开：静默 */
  }
  return true;
};

/** 单条插件数据上限：8MB，够书签 / 历史快照等，又防超大 body。 */
const MAX_PLUGIN_DATA_BYTES = 8 * 1024 * 1024;
/**
 * 资源路由：插件持久化数据（/plugin-data）。
 *   GET  /plugin-data?k=<key>  → { ok, data: <value|null> }
 *   POST /plugin-data { k, v } → { ok, data: { k } }
 * key 由 store 侧严格校验；value 体积受限。与界面偏好的 PERSIST_KEYS 白名单互不干扰。
 */
export const pluginDataResource: RouteMatcher = async (req, res, seg, q, method) => {
  if (!(seg[0] === "plugin-data" && seg.length === 1)) return false;

  if (method === "GET") {
    const k = q.get("k")?.trim();
    if (!k) return (json(res, 400, { ok: false, error: "k required" } satisfies ApiResponse<never>), true);
    const v = await getPluginData(k);
    return (json(res, 200, { ok: true, data: v ?? null } satisfies ApiResponse<unknown>), true);
  }

  if (method === "POST") {
    const body = (await readBody(req)) as { k?: string; v?: unknown } | null;
    const k = body?.k?.trim();
    if (!k || body?.v === undefined) {
      return (json(res, 400, { ok: false, error: "key k and value v required" } satisfies ApiResponse<never>), true);
    }
    if (Buffer.byteLength(JSON.stringify(body.v), "utf8") > MAX_PLUGIN_DATA_BYTES) {
      return (json(res, 413, { ok: false, error: "插件数据超过 8MB 上限" } satisfies ApiResponse<never>), true);
    }
    try {
      await setPluginData(k, body.v);
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      return (json(res, 400, { ok: false, error: msg } satisfies ApiResponse<never>), true);
    }
    return (json(res, 200, { ok: true, data: { k } } satisfies ApiResponse<{ k: string }>), true);
  }

  return false;
};
