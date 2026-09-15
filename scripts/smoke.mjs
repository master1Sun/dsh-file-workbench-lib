// 冒烟测试：不依赖 DSH 运行，直接用一个临时目录驱动 host 的文件浏览路由，验证
// root/list/read/save/search/mkdir/rename/remove 全链路可用。
import { createServer, request as httpRequest } from "node:http";
import { readdirSync, readFileSync } from "node:fs";
import { createHash, randomBytes } from "node:crypto";
import { mkdtemp, mkdir, stat, utimes, writeFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { makeFileWorkbenchRoutes, makePushUpgrade } from "../lib/index.js";

const base = await mkdtemp(join(tmpdir(), "fw-test-"));
const proj = join(base, "myproj");
await mkdir(join(proj, "src", "components"), { recursive: true });
await writeFile(join(proj, "package.json"), JSON.stringify({ name: "x" }));
await writeFile(join(proj, "src", "main.ts"), "export const hi = 1;\n");
await writeFile(join(proj, "src", "components", "A.vue"), "<template/>\n");
await writeFile(join(proj, "README.md"), "# Hi\n\n**bold**\n");

const [route] = makeFileWorkbenchRoutes();
const PREFIX = route.path;
const server = createServer((req, res) => route.handler(req, res));
server.listen(0, "127.0.0.1");
await new Promise((r) => server.once("listening", r));
const port = server.address().port;
const u = (p, q = "") => `http://127.0.0.1:${port}${PREFIX}${p}${q}`;

async function call(p, q = "", method = "GET", body) {
  const res = await fetch(u(p, q), {
    method,
    headers: body ? { "content-type": "application/json" } : undefined,
    body: body ? JSON.stringify(body) : undefined,
  });
  return res.json();
}

let pass = 0, fail = 0;
function check(label, cond) {
  if (cond) { pass++; console.log(`  ok  ${label}`); }
  else { fail++; console.log(`  FAIL ${label}`); }
}

// set root
let r = await call("/root", "", "POST", { path: proj });
check("set root", r.ok && r.data.root === proj);
// root get
r = await call("/root");
check("get root", r.ok && r.data.root === proj);
// list
r = await call("/list");
check("list root", r.ok && r.data.crumbs.length === 1);
check("list has package.json + README", r.data.entries.some((e) => e.name === "package.json") && r.data.entries.some((e) => e.name === "README.md"));
check("dirs sorted first (src)", r.data.entries[0].name === "src");
// 越界访问：是否放行取决于本机 prefs.allowOutsideRoot（本机为 true），
// 故这里只断言「两种形态都自洽」——放行则真能列出，拒绝则错误里明说 outside。
r = await call("/list", `?path=${encodeURIComponent(base)}`);
check(
  "outside-root list honours allowOutsideRoot",
  r.ok ? Array.isArray(r.data.entries) : String(r.error).includes("outside"),
);
// read text（注意字段名是 content：/read 自文本编解码改造后为 {content,size,mtime,encoding,hasBom,eol,binary}）
r = await call("/read", `?path=${encodeURIComponent(join(proj, "src", "main.ts"))}`);
check("read text", r.ok && r.data.content.includes("hi"));
// read markdown（现在以编码/行尾元数据表达，不再有 kind 字段）
r = await call("/read", `?path=${encodeURIComponent(join(proj, "README.md"))}`);
check("read reports encoding + eol", r.ok && typeof r.data.encoding === "string" && typeof r.data.eol === "string");
// save
r = await call("/save", "", "POST", { path: join(proj, "src", "main.ts"), content: "export const hi = 2;\n" });
check("save", r.ok);
r = await call("/read", `?path=${encodeURIComponent(join(proj, "src", "main.ts"))}`);
check("save applied", r.data.content.includes("= 2"));
// search: 匹配「条目名包含子串」，目录名也包括（src/components 命中 'component'）
r = await call("/search", "?q=component");
check("search hits src/components", r.ok && r.data.matches.includes("src/components"));
r = await call("/search", "?q=a.vue");
check("search hits A.vue", r.ok && r.data.matches.includes("src/components/A.vue"));
// mkdir
r = await call("/mkdir", "", "POST", { path: join(proj, "lib") });
check("mkdir", r.ok);
// rename
r = await call("/rename", "", "POST", { from: join(proj, "src", "main.ts"), to: join(proj, "src", "entry.ts") });
check("rename", r.ok);
// remove
r = await call("/remove", `?path=${encodeURIComponent(join(proj, "lib"))}`, "DELETE");
check("remove", r.ok);
// 越界写入：同样受 prefs.allowOutsideRoot 影响（见上）；拒绝时必须是明确的 outside 拒绝。
r = await call("/save", "", "POST", { path: join(base, "evil.txt"), content: "x" });
check("save outside root honours allowOutsideRoot", r.ok || String(r.error).includes("outside"));

// asset serving: lib/web 静态资源可经 host 路由访问（Vue 产物存活检查）
// 注意：host 产物只导出 PREFIX / apply / inject / makeFileWorkbenchRoutes / name，**不导出 WEB_DIR**，
// 故这里按脚本自身位置推 lib/web（原先既把 import 写在块内、又 import 了不存在的 WEB_DIR，
// 整段从未真正跑通过 —— 修好后才成为有效的产物存活检查）。
const webRoot = new URL("../lib/web/", import.meta.url);
const webFiles = readdirSync(webRoot, { withFileTypes: true });
const hasAssets = webFiles.some((f) => f.isDirectory() && f.name === "assets");
check("lib/web/assets exists", hasAssets);
// ⛔ 必须按**构建产物里实际引用**的文件名验证，不能取目录里第一个 .css：
// 带 hash 的构建产物只增不减（copyDirNoDelete + vite emptyOutDir:false），历史死产物同在目录里
// 且照样能 200 —— 那样这条「产物存活检查」会把「引用已断」判成通过（本机实测踩过一次）。
const clientJs = readFileSync(new URL("../lib/client.js", import.meta.url), "utf8");
const referenced = [
  ...clientJs.matchAll(/assets\/(index-[A-Za-z0-9_-]+\.js|style-[A-Za-z0-9_-]+\.css)/g),
].map((m) => m[1]);
check("build references its own assets", referenced.length > 0);
const localAssets = readdirSync(new URL("assets/", webRoot));
for (const name of [...new Set(referenced)]) {
  check(`referenced asset present on disk (${name})`, localAssets.includes(name));
}
const cssFile = referenced.find((n) => n.endsWith(".css"));
if (cssFile) {
  const okRes = await fetch(u(`/assets/${cssFile}`));
  const okType = okRes.headers.get("content-type") ?? "";
  check(`asset serves 200 (${cssFile})`, okRes.status === 200 && okType.length > 0);
}
const missingRes = await fetch(u("/assets/definitely-missing.css"));
check("asset 404 for missing file", missingRes.status === 404);
const existsRes = await fetch(u("/.no-such"));
check("unknown route 404", existsRes.status === 404);

// ---- SSH 远端主机路由（不依赖真实 SSH 服务：只验配置存取、机密抹除与错误路径） ----
// 注意：主机配置落在 ~/.dsh/fileworkbench/ssh-hosts.json，故用后必须删除，避免污染本机配置。
const hosts0 = await call("/ssh/hosts");
const baseCount = hosts0.ok ? hosts0.data.hosts.length : 0;
check("ssh hosts list", hosts0.ok && Array.isArray(hosts0.data.hosts));

const added = await call("/ssh/add", "", "POST", {
  name: "smoke-probe",
  host: "127.0.0.1",
  // 端口 1（tcpmux）在本机必然无监听 → 连接立即 ECONNREFUSED，测试无需等待超时。
  port: 1,
  user: "smoke",
  auth: { type: "password", password: "top-secret" },
});
const addedHost = added.ok ? added.data.host : null;
check(
  "ssh add returns host",
  !!addedHost && addedHost.host === "127.0.0.1" && addedHost.user === "smoke",
);
check(
  "ssh add masks secret",
  !!addedHost && addedHost.hasSecret === true && addedHost.password === undefined,
);

const hosts1 = await call("/ssh/hosts");
check(
  "ssh host persisted",
  hosts1.ok && hosts1.data.hosts.length === baseCount + 1 &&
    hosts1.data.hosts.every((h) => h.password === undefined),
);

// 未配置主机 id 的 ssh 引用必须返回明确错误，且不能落到本地文件系统语义上。
const ghost = await call("/list", `?path=${encodeURIComponent("ssh://no-such-host/")}`);
check("ssh ref to unknown host errors", !ghost.ok || Array.isArray(ghost.data?.entries) === false);

if (addedHost?.id) {
  const tested = await call("/ssh/test", "", "POST", { id: addedHost.id });
  check(
    "ssh test reports failure for unreachable host",
    tested.ok && tested.data?.ok === false && typeof tested.data?.error === "string",
  );
  const removed = await call("/ssh/remove", "", "POST", { id: addedHost.id });
  const hosts2 = await call("/ssh/hosts");
  check(
    "ssh remove cleans up",
    removed.ok && hosts2.ok && hosts2.data.hosts.length === baseCount,
  );
}

/* ---------- 推送通道（WebSocket）：文件改动 + SSH 连通性 ----------
 * 取代了原先的 /mtimes 与 /ssh/ping 两处轮询，握手与帧编解码是自实现的 RFC6455 子集，
 * 故必须回归覆盖。客户端也按规范手写（带掩码帧），用来交叉验证服务端的握手应答与帧解析。 */
const WS_GUID = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11";
const wsRoute = makePushUpgrade();
server.on("upgrade", (req, socket, head) => wsRoute.handler(req, socket, head));

let wsBuf = Buffer.alloc(0);
const wsSeen = [];
const wsWaiters = [];

/** 从缓冲里取出下一帧（不足一帧返回 null）。 */
function wsNextFrame() {
  if (wsBuf.length < 2) return null;
  const opcode = wsBuf[0] & 0x0f;
  const masked = (wsBuf[1] & 0x80) !== 0;
  let len = wsBuf[1] & 0x7f;
  let off = 2;
  if (len === 126) {
    if (wsBuf.length < 4) return null;
    len = wsBuf.readUInt16BE(2);
    off = 4;
  } else if (len === 127) {
    if (wsBuf.length < 10) return null;
    len = Number(wsBuf.readBigUInt64BE(2));
    off = 10;
  }
  const maskLen = masked ? 4 : 0;
  const total = off + maskLen + len;
  if (wsBuf.length < total) return null;
  let payload = wsBuf.subarray(off + maskLen, total);
  if (masked) {
    const mask = wsBuf.subarray(off, off + 4);
    const out = Buffer.allocUnsafe(len);
    for (let i = 0; i < len; i++) out[i] = payload[i] ^ mask[i & 3];
    payload = out;
  }
  wsBuf = wsBuf.subarray(total);
  return { opcode, text: payload.toString("utf8") };
}

function wsFeed(chunk) {
  wsBuf = wsBuf.length ? Buffer.concat([wsBuf, chunk]) : chunk;
  for (;;) {
    const frame = wsNextFrame();
    if (!frame) return;
    wsSeen.push(frame);
    for (let i = wsWaiters.length - 1; i >= 0; i--) {
      if (wsWaiters[i].pred(frame)) {
        const w = wsWaiters.splice(i, 1)[0];
        w.resolve(frame);
      }
    }
  }
}

/** 等待一个满足条件的帧（已收到则立即返回）。 */
function wsWait(pred, ms) {
  const hit = wsSeen.find(pred);
  if (hit) return Promise.resolve(hit);
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("ws frame timeout")), ms);
    wsWaiters.push({
      pred,
      resolve: (f) => {
        clearTimeout(timer);
        resolve(f);
      },
    });
  });
}

/** 编码一个客户端帧（客户端帧必须带掩码）。 */
function wsClientFrame(text) {
  const payload = Buffer.from(text, "utf8");
  const mask = randomBytes(4);
  const len = payload.length;
  const head = Buffer.alloc(len < 126 ? 2 : 4);
  head[0] = 0x81;
  if (len < 126) {
    head[1] = 0x80 | len;
  } else {
    head[1] = 0x80 | 126;
    head.writeUInt16BE(len, 2);
  }
  const masked = Buffer.allocUnsafe(len);
  for (let i = 0; i < len; i++) masked[i] = payload[i] ^ mask[i & 3];
  return Buffer.concat([head, mask, masked]);
}

const wsJson = (frame) => {
  try {
    return JSON.parse(frame.text);
  } catch {
    return null;
  };
};
const wsType = (frame) => wsJson(frame)?.type;

const wsKey = randomBytes(16).toString("base64");
const wsReq = httpRequest({
  port,
  host: "127.0.0.1",
  path: wsRoute.path,
  method: "GET",
  headers: {
    Connection: "Upgrade",
    Upgrade: "websocket",
    "Sec-WebSocket-Key": wsKey,
    "Sec-WebSocket-Version": "13",
  },
});
const upgraded = await new Promise((resolve, reject) => {
  wsReq.on("upgrade", (res, socket, head) => resolve({ res, socket, head }));
  wsReq.on("error", reject);
  wsReq.end();
});
check(
  "ws upgrade: 101 + RFC6455 accept key",
  upgraded.res.statusCode === 101 &&
    upgraded.res.headers["sec-websocket-accept"] ===
      createHash("sha1").update(wsKey + WS_GUID).digest("base64"),
);

const wsSocket = upgraded.socket;
wsSocket.on("data", wsFeed);
// 101 之后紧跟的字节由 head 承载（可能已含 ready 帧）。
if (upgraded.head?.length) wsFeed(upgraded.head);
let wsReady = true;
try {
  await wsWait((f) => wsType(f) === "ready", 2000);
} catch {
  wsReady = false;
}
check("ws: server sends ready frame", wsReady);

const watched = join(base, "ws-watch.txt");
await writeFile(watched, "one");
wsSocket.write(wsClientFrame(JSON.stringify({ type: "watch", paths: [watched] })));
// 等一个采样周期：订阅建立时只记基线，不该误报一次「外部改动」。
await new Promise((r) => setTimeout(r, 1600));
check("ws: no spurious changed on subscribe", !wsSeen.some((f) => wsType(f) === "changed"));

const before = await stat(watched);
await writeFile(watched, "two!");
// mtime 明确推进 2s，避免同毫秒被判成未变化。
await utimes(watched, before.atime, new Date(before.mtimeMs + 2000));
const after = await stat(watched);
let wsChanged = null;
try {
  wsChanged = wsJson(await wsWait((f) => wsType(f) === "changed", 5000));
} catch {
  /* 由下面两条断言报错 */
}
check("ws: pushes changed for the watched file", !!wsChanged?.items?.[watched]);
check(
  "ws: pushed size/mtime match disk",
  wsChanged?.items?.[watched]?.size === after.size &&
    Math.abs((wsChanged?.items?.[watched]?.mtimeMs ?? 0) - after.mtimeMs) < 1,
);

// 未订阅的路径不该被推送。
const unwatched = join(base, "ws-other.txt");
await writeFile(unwatched, "x");
await writeFile(unwatched, "yy");
await new Promise((r) => setTimeout(r, 1600));
check(
  "ws: unwatched path is not pushed",
  !wsSeen.some((f) => wsType(f) === "changed" && wsJson(f)?.items?.[unwatched]),
);

/* ---- 推送通道的 SSH 分支：取代 /ssh/ping 轮询 ----
 * 复用上面同一条连接（这正是把两类订阅合并到一条 WS 的意义：不再各占一条长连接）。 */
const sshProbe = await call("/ssh/add", "", "POST", {
  name: "ws-probe",
  host: "127.0.0.1",
  // 端口 1 必然无监听 → ECONNREFUSED，探测即刻收敛，测试无需等超时。
  port: 1,
  user: "smoke",
  auth: { type: "password", password: "top-secret" },
});
const sshProbeId = sshProbe.ok ? sshProbe.data.host.id : "";
check("ws ssh: probe host added", !!sshProbeId);

// 新订阅的主机不必等一个采样周期：服务端应立刻探测并无条件回推一次。
wsSocket.write(wsClientFrame(JSON.stringify({ type: "ssh-watch", ids: [sshProbeId] })));
let sshFrame = null;
try {
  sshFrame = wsJson(
    await wsWait((f) => wsType(f) === "ssh-status" && !!wsJson(f)?.items?.[sshProbeId], 20000),
  );
} catch {
  /* 由下面两条断言报错 */
}
const sshItem = sshFrame?.items?.[sshProbeId];
check("ws ssh: pushes status right after subscribe", sshItem?.alive === false);
check(
  "ws ssh: unreachable host carries a readable reason",
  typeof sshItem?.error === "string" && sshItem.error.length > 0,
);

// 显式检查（原 POST /ssh/ping 的语义）：即使状态与上次相同也必须无条件回推，
// 否则「添加后立刻验证」这类调用拿不到结果。
const sshFramesOfId = () =>
  wsSeen.filter((f) => wsType(f) === "ssh-status" && !!wsJson(f)?.items?.[sshProbeId]).length;
const framesBefore = sshFramesOfId();
wsSocket.write(wsClientFrame(JSON.stringify({ type: "ssh-check", ids: [sshProbeId] })));
await new Promise((r) => setTimeout(r, 3000));
check("ws ssh: explicit check re-pushes even when unchanged", sshFramesOfId() > framesBefore);

// 退订后再发显式检查：仍须回推。「订阅集合」与「检查请求」是两条独立通路，
// 前端 `pingSshHost` 依赖这一点 —— 它可能在主机尚未进入订阅集合时就被调用。
wsSocket.write(wsClientFrame(JSON.stringify({ type: "ssh-watch", ids: [] })));
await new Promise((r) => setTimeout(r, 300));
const beforeUnsub = sshFramesOfId();
wsSocket.write(wsClientFrame(JSON.stringify({ type: "ssh-check", ids: [sshProbeId] })));
await new Promise((r) => setTimeout(r, 3000));
check("ws ssh: check works without a standing subscription", sshFramesOfId() > beforeUnsub);

const closed = await call("/ssh/remove", "", "POST", { id: sshProbeId });
check("ws ssh: probe host cleaned up", closed.ok);

wsSocket.destroy();

console.log(`\n${pass} passed, ${fail} failed`);
server.close();
await rm(base, { recursive: true, force: true });
process.exit(fail ? 1 : 0);