// 冒烟测试：不依赖 DSH 运行，直接用一个临时目录驱动 host 的文件浏览路由，验证
// root/list/read/save/search/mkdir/rename/remove 全链路可用。
import { createServer, request as httpRequest } from "node:http";
import { execFileSync } from "node:child_process";
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
function check(label, cond, detail) {
  if (cond) { pass++; console.log(`  ok  ${label}`); }
  else { fail++; console.log(`  FAIL ${label}${detail ? `  — ${detail}` : ""}`); }
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

/* ---------- 远端（ssh）git/svn 的**写操作**必须命中远端分支 ----------
 * 背景（真实事故）：远端分流原先只读 query 里的 `path`，而 POST 的引用在 **body** 里 →
 * 远端写操作（fetch/pull/push/暂存/提交/还原；svn run）全部漏判、落到本地分支，
 * 被 requireAbsolute 判成 400「不是绝对路径」，症状是「ssh 目录内 git 用不了」（GET 却正常）。
 * 判别法：用一个**不存在的主机 id** 作探针 —— 命中远端分支会报 **404**（主机未配置），
 * 误落本地分支则报 **400**（不是绝对路径）。状态码不同即可判别，且不依赖真实 SSH 服务。
 * （判别力已实测：把构建产物回退成旧写法 → 这 3 条全红并打出 400。） */
const postStatus = async (p, body) => {
  const res = await fetch(u(p), {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });
  return { status: res.status, body: await res.json().catch(() => null) };
};
for (const [label, p, body] of [
  ["git/run", "/git/run", { path: "ssh://no-such-host/", args: ["status", "--short"] }],
  ["git/sync", "/git/sync", { path: "ssh://no-such-host/", action: "fetch" }],
  ["svn/run", "/svn/run", { path: "ssh://no-such-host/", args: ["--version"] }],
]) {
  const rr = await postStatus(p, body);
  check(
    `remote ${label}(POST) routed to the ssh branch (404 unknown host, not 400 "not an absolute path")`,
    rr.status === 404,
    `${rr.status} ${JSON.stringify(rr.body).slice(0, 130)}`,
  );
}

/* ---------- 终端会话后端：/exec-open 的 kind 分流 ----------
 * 核心不变量：`kind:"ssh"` 的请求**要么真的建起远端 shell，要么失败** ——
 * 绝不能悄悄退回本机 shell。一旦退回，前端会拿到一个没有 ssh 命令的裸 cmd，
 * 却以为自己在远端（且因为「没报错」，降级分支永远不会触发）。
 * 另：`kind` 必须回带在回执里，前端靠它识别「宿主是否支持 kind 分流」。 */
const rawCall = async (p, method = "GET", body) => {
  const res = await fetch(u(p), {
    method,
    headers: body ? { "content-type": "application/json" } : undefined,
    body: body ? JSON.stringify(body) : undefined,
  });
  return { status: res.status, body: await res.json().catch(() => null) };
};
// 会话是否真的存在：用 /exec-input 探（无会话时 404）。
const sessionAlive = async (session) =>
  (await rawCall("/exec-input", "POST", { session, data: "\r" })).status !== 404;

// 1) 未知主机：必须失败并给可读错误，且**不留任何会话**。
const sshGhost = await rawCall("/exec-open", "POST", {
  session: "smoke-ssh-ghost",
  kind: "ssh",
  hostId: "no-such-host-xyz",
  remote: "/",
});
check(
  "term ssh: unknown host fails with readable error",
  sshGhost.status === 404 && sshGhost.body?.ok === false && typeof sshGhost.body?.error === "string",
);
check("term ssh: unknown host leaves no session", !(await sessionAlive("smoke-ssh-ghost")));

// 2) 已配置但连不通的主机（端口 1 → 立即 ECONNREFUSED）：必须失败，且**不得降级成本机 shell**。
const sshDown = await call("/ssh/add", "", "POST", {
  name: "smoke-term-down",
  host: "127.0.0.1",
  // 端口 1（tcpmux）本机必然无监听：连接立即失败，测试无需等超时。
  port: 1,
  user: "smoke",
  auth: { type: "password", password: "x" },
});
const downId = sshDown.ok ? sshDown.data.host.id : null;
check("term ssh: probe host configured", !!downId);
if (downId) {
  const open = await rawCall("/exec-open", "POST", {
    session: "smoke-ssh-down",
    kind: "ssh",
    hostId: downId,
    remote: "/tmp",
  });
  check(
    "term ssh: unreachable host fails",
    open.status >= 400 && open.body?.ok === false,
  );
  check(
    "term ssh: unreachable host does NOT silently become a local shell",
    open.body?.data?.kind !== "local" && open.body?.data?.kind !== "ssh",
  );
  check("term ssh: unreachable host leaves no session", !(await sessionAlive("smoke-ssh-down")));
  await call("/ssh/remove", "", "POST", { id: downId });
}

// 3) 尺寸上报：会话不存在时返回 ok:true / data.ok:false —— 前端 fit 是高频动作，
//    此时报 404/500 只会刷控制台且没有可恢复动作。顺带覆盖「未知字段不得让路由崩掉」。
const sizeMissing = await rawCall("/exec-resize", "POST", {
  session: "no-such-session-xyz",
  cols: 80,
  rows: 24,
  bogus: 1,
  extra: { a: 1 },
});
check(
  "term resize: missing session is a soft miss (no 500, unknown fields ignored)",
  sizeMissing.status === 200 && sizeMissing.body?.ok === true && sizeMissing.body.data.ok === false,
);

// 4) 本机会话的握手与尺寸：需要 node-pty（原生模块）。缺失时**显式跳过并报出**，
//    不静默当成通过 —— 否则这条断言会变成永远常绿的假证据。
let ptyOk = true;
try {
  await import("node-pty");
} catch {
  ptyOk = false;
}
if (!ptyOk) {
  console.log("  skip term local-session assertions (node-pty unavailable in this environment)");
} else {
  // 给本机会话一个**独立**的临时目录：终端子进程会把 cwd 按住不放到退出为止，
  // 若直接用 proj，测试收尾的 rm(base) 会间歇 EBUSY（EBUSY 在本机实测出现过）。
  const termCwd = await mkdtemp(join(tmpdir(), "fw-term-"));
  const local = await rawCall("/exec-open", "POST", {
    session: "smoke-term-local",
    kind: "local",
    shell: "cmd",
    cwd: termCwd,
  });
  check(
    "term local: opens and returns kind=local handshake",
    local.body?.ok === true && local.body?.data?.kind === "local",
  );
  const sizeLive = await rawCall("/exec-resize", "POST", {
    session: "smoke-term-local",
    cols: 100,
    rows: 30,
  });
  check(
    "term resize: applied to a live session",
    sizeLive.body?.ok === true && sizeLive.body.data.ok === true,
  );
  // 清理：杀掉本地会话，别在测试主机上留 cmd.exe。
  const killed = await call("/exec-kill", "", "POST", { session: "smoke-term-local" });
  check("term kill: cleans up local session", killed.ok && killed.data.killed === true);
  // 进程退出到释放目录句柄之间有微小延迟：带重试删除，避免偶发 EBUSY 把整轮测试带崩。
  await new Promise((r) => setTimeout(r, 200));
  await rm(termCwd, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
}

// 5) 静态不变量：远端根（`ssh://<hostId>/` → 宿主侧 remote === "/"）不得再补一条 `cd '/'`。
//    为何静态而非行为：这条命令只在**真连上远端**之后才写进通道，而本冒烟的 ssh 主机用的是
//    必然连不通的端口（port 1）——行为上根本走不到那一行。宁可用源码钉死，也不要一个
//    「永远走不到、永远常绿」的假断言。
//    真实现象（本机实测跑真主机）：登录 shell 本已在 `~`，却因为 remote==="/" 又敲了一条
//    `cd '/'`，终端里多出一条可见命令且落到了根目录。
{
  const src = readFileSync(new URL("../src/host/routes/routes-terminal.ts", import.meta.url), "utf8");
  // 去掉注释行后再断言，免得说明文字里的 `cd '/'` 造成误报。
  const code = src
    .split(/\r?\n/)
    .filter((l) => !/^\s*(\/\/|\*|\/\*)/.test(l))
    .join("\n");
  const GUARDED_CD = /if\s*\(\s*remote\s*&&\s*remote\s*!==\s*"\/"\s*\)[\s\S]{0,220}?stream\.write\(\s*`cd /;
  const cdWrites = (code.match(/stream\.write\(\s*`cd /g) || []).length;
  check(
    "term ssh: cd 只在 remote 非空且不是 \"/\" 时才发（别再敲出多余的 cd '/'）",
    GUARDED_CD.test(code),
    "guard missing or cd unguarded",
  );
  check("term ssh: 全文只有一处发 cd（别处不得再冒出无条件的一条）", cdWrites === 1, "cd writes=" + cdWrites);
  // 判别力自证：把守卫还原成旧写法（只看 remote 非空）后必须报红。
  const regressed = code.replace(/if\s*\(\s*remote\s*&&\s*remote\s*!==\s*"\/"\s*\)/, "if (remote)");
  check(
    "term ssh: 判别力 —— 去掉 remote!==\"/\" 守卫后必须报红",
    !GUARDED_CD.test(regressed),
    "回归后仍匹配 → 断言是空的",
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

/**
 * 从缓冲区切出下一帧（不足一帧返回 `null`）。纯函数：关闭握手断言需要一条**独立**连接，
 * 故把解析逻辑抽出来复用，而不是复制一份。
 */
function wsSplit(buf) {
  if (buf.length < 2) return null;
  const opcode = buf[0] & 0x0f;
  const masked = (buf[1] & 0x80) !== 0;
  let len = buf[1] & 0x7f;
  let off = 2;
  if (len === 126) {
    if (buf.length < 4) return null;
    len = buf.readUInt16BE(2);
    off = 4;
  } else if (len === 127) {
    if (buf.length < 10) return null;
    len = Number(buf.readBigUInt64BE(2));
    off = 10;
  }
  const maskLen = masked ? 4 : 0;
  const total = off + maskLen + len;
  if (buf.length < total) return null;
  let payload = buf.subarray(off + maskLen, total);
  if (masked) {
    const mask = buf.subarray(off, off + 4);
    const out = Buffer.allocUnsafe(len);
    for (let i = 0; i < len; i++) out[i] = payload[i] ^ mask[i & 3];
    payload = out;
  } else {
    // 拷贝一份：后续 concat 会复用内存，不拷会让已入队的帧内容被改写。
    payload = Buffer.from(payload);
  }
  return { frame: { opcode, payload, text: payload.toString("utf8") }, rest: buf.subarray(total) };
}

/** 从缓冲里取出下一帧（不足一帧返回 null）。 */
function wsNextFrame() {
  const r = wsSplit(wsBuf);
  if (!r) return null;
  wsBuf = r.rest;
  return r.frame;
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

/** 编码一个客户端 **close** 帧（带状态码，负载固定 2 字节）。 */
function wsCloseFrame(code) {
  const payload = Buffer.alloc(2);
  payload.writeUInt16BE(code, 0);
  const mask = randomBytes(4);
  const masked = Buffer.allocUnsafe(2);
  for (let i = 0; i < 2; i++) masked[i] = payload[i] ^ mask[i & 3];
  return Buffer.concat([Buffer.from([0x88, 0x80 | 2]), mask, masked]);
}

/**
 * 新开一条带独立收帧器的 WS 连接。
 *
 * 关闭握手断言必须用**独立**连接：主连接后面还要继续跑订阅断言，不能提前 close。
 */
async function openWsConn() {
  const key = randomBytes(16).toString("base64");
  const req = httpRequest({
    port,
    host: "127.0.0.1",
    path: wsRoute.path,
    method: "GET",
    headers: {
      Connection: "Upgrade",
      Upgrade: "websocket",
      "Sec-WebSocket-Key": key,
      "Sec-WebSocket-Version": "13",
    },
  });
  const up = await new Promise((resolve, reject) => {
    req.on("upgrade", (res, socket, head) => resolve({ res, socket, head }));
    req.on("error", reject);
    req.end();
  });
  const conn = { frames: [], peerEnded: false, socket: up.socket };
  let buf = up.head?.length ? up.head : Buffer.alloc(0);
  const drain = () => {
    for (;;) {
      const r = wsSplit(buf);
      if (!r) return;
      buf = r.rest;
      conn.frames.push(r.frame);
    }
  };
  drain();
  up.socket.on("data", (c) => {
    buf = buf.length ? Buffer.concat([buf, c]) : c;
    drain();
  });
  // 服务端回完 close 应主动关掉 TCP：'end' / 'close' / 'error' 任一即视为已收敛。
  up.socket.on("end", () => {
    conn.peerEnded = true;
  });
  up.socket.on("close", () => {
    conn.peerEnded = true;
  });
  up.socket.on("error", () => {
    conn.peerEnded = true;
  });
  return conn;
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

/* ---- 关闭握手：对端发 close 后，服务端必须**恰好回一个** close 帧 ----
 * ⛔ 事故回放：收到 close 时先 `send(close)` 再 `destroy()`，而 destroy 内部又写一次 close ——
 *    对端收到两个 close 帧，浏览器判定协议错误并在控制台报
 *    `WebSocket connection to '…/push' failed: Close received after close`
 *    （本可正常关闭的连接被记成「失败」，还会触发一次无谓的重连）。
 * 这条断言钉的就是「恰好一个」。 */
const closer = await openWsConn();
check("ws close: handshake completed before closing", closer.frames.some((f) => wsType(f) === "ready"));
// 主动发 close(1000)：模拟页面刷新 / 订阅清空时浏览器发出的关闭帧。
closer.socket.write(wsCloseFrame(1000));
// 关闭握手是异步的，留足往返时间再判定。
await new Promise((r) => setTimeout(r, 600));
const closeFrames = closer.frames.filter((f) => f.opcode === 0x8);
check(
  "ws close: server replies exactly ONE close frame",
  closeFrames.length === 1,
  `收到 ${closeFrames.length} 个 close 帧`,
);
check(
  "ws close: echoes the peer's status code",
  closeFrames[0]?.payload?.length === 2 && closeFrames[0].payload.readUInt16BE(0) === 1000,
  closeFrames[0] ? `payload=${closeFrames[0].payload.toString("hex")}` : "没有 close 帧",
);
check(
  "ws close: server closes the TCP side after replying",
  closer.peerEnded,
  "服务端回完 close 后没有关闭 TCP",
);
closer.socket.destroy();

wsSocket.destroy();

/* ---------- 克隆 / 检出仓库路由（POST /git/clone、/svn/checkout） ----------
 * 核心不变量：
 *   - 子目录名必须过 `sanitizeRepoDirName`：含分隔符（路径穿越入口）一律 400；
 *   - 缺 url / 非法名 → 400（在真正去 clone 之前就拦下）；
 *   - 已存在 → 409 且预存在的目录完好（失败的克隆还须清理掉半成品，不留残余）；
 *   - 受保护系统目录 / 工作区外 → 403（凭空建整棵目录树的入口必须堵死）。
 * 真机克隆成功路径用**本地**仓库（file/绝对路径）覆盖，不依赖外网。 */

// 缺 url → 400
r = await call("/git/clone", "", "POST", { dir: proj });
check("clone: missing url → 400", r.ok === false && /url required/i.test(r.error || ""), r.error);

// 子目录名含分隔符 → 400（目录穿越入口，必须在路由层拦下）
r = await call("/git/clone", "", "POST", {
  url: "https://github.com/o/repo.git",
  dir: proj,
  name: "a/b",
});
check(
  "clone: name with path separator → 400",
  r.ok === false && /invalid or missing target directory name/i.test(r.error || ""),
  r.error,
);

// 受保护的系统目录 → 403（SystemRoot 整棵只读，克隆绝不能往里写）。
if (process.env.SystemRoot) {
  const rp = await call("/git/clone", "", "POST", {
    url: "https://github.com/o/repo.git",
    dir: process.env.SystemRoot,
    name: "dsh-clone-probe",
  });
  check(
    "clone: protected system path → 403",
    rp.ok === false && /protected/i.test(rp.error || ""),
    rp.error,
  );
}

// svn 检出：缺 url → 400（在 svn CLI 解析之前）
r = await call("/svn/checkout", "", "POST", { dir: proj });
check("svn checkout: missing url → 400", r.ok === false && /url required/i.test(r.error || ""), r.error);

// svn 检出：非法子目录名 → 400
r = await call("/svn/checkout", "", "POST", {
  url: "https://svn.example.com/repo",
  dir: proj,
  name: "a/b",
});
check(
  "svn checkout: name with path separator → 400",
  r.ok === false && /invalid or missing target directory name/i.test(r.error || ""),
  r.error,
);

// svn 检出：不可达 URL（svn 缺失或远端不可达）→ 优雅失败，不崩成 500。
const svnBad = await call("/svn/checkout", "", "POST", {
  url: "https://127.0.0.1:1/svn/repo",
  dir: proj,
  name: "svn-bad",
});
check("svn checkout: unreachable url handled (no crash)", svnBad.ok === false, svnBad.error);

// 真机克隆：需要本机 git；用本地仓库免去外网依赖。
let gitOk = true;
try {
  execFileSync("git", ["--version"]);
} catch {
  gitOk = false;
}
if (!gitOk) {
  console.log("  skip git clone success-path assertions (git unavailable in this environment)");
} else {
  const srcRepo = join(base, "src-repo");
  await mkdir(srcRepo, { recursive: true });
  await writeFile(join(srcRepo, "hello.txt"), "hello");
  execFileSync("git", ["init", srcRepo], { windowsHide: true });
  execFileSync("git", ["-C", srcRepo, "config", "user.email", "t@t"], { windowsHide: true });
  execFileSync("git", ["-C", srcRepo, "config", "user.name", "t"], { windowsHide: true });
  execFileSync("git", ["-C", srcRepo, "add", "."], { windowsHide: true });
  execFileSync("git", ["-C", srcRepo, "commit", "-m", "init"], { windowsHide: true });

  // 真机克隆成功：返回 path + name，且目录落到磁盘。
  const cr = await call("/git/clone", "", "POST", { url: srcRepo, dir: proj, name: "realclone" });
  check(
    "git clone: success returns path+name",
    cr.ok && cr.data.path.endsWith("realclone") && cr.data.name === "realclone",
    JSON.stringify(cr),
  );
  let diskOk = false;
  try {
    diskOk = (await stat(join(proj, "realclone", "hello.txt"))).isFile();
  } catch {
    /* 由下面断言报错 */
  }
  check("git clone: directory created on disk", diskOk);

  // 未知字段不崩：带多余字段仍能正常克隆（不 500）。
  const ef = await call("/git/clone", "", "POST", {
    url: srcRepo,
    dir: proj,
    name: "extrafields",
    bogus: 1,
    extraField: "x",
  });
  check("git clone: unknown fields ignored (no 500)", ef.ok && ef.data.name === "extrafields", JSON.stringify(ef));

  // 已存在 → 409 且预存在的目录完好（失败的克隆还会清理掉半成品，不留残余）。
  const dup = await call("/git/clone", "", "POST", { url: srcRepo, dir: proj, name: "realclone" });
  check(
    "git clone: duplicate name → 409",
    dup.ok === false && /already exists/i.test(dup.error || ""),
    dup.error,
  );
  let intact = false;
  try {
    intact = (await stat(join(proj, "realclone", "hello.txt"))).isFile();
  } catch {
    /* 由下面断言报错 */
  }
  check("git clone: duplicate 409 leaves prior clone intact (no residue)", intact);

  // 失败克隆清理残余：不可达 URL → 失败，target 不应残留半成品目录。
  const bad = await call("/git/clone", "", "POST", {
    url: "https://127.0.0.1:1/foo.git",
    dir: proj,
    name: "badclone",
  });
  check(
    "git clone: unreachable url fails gracefully (no 500)",
    bad.ok === false && /clone 失败|could not|refused|timed out|exit/i.test(bad.error || ""),
    bad.error,
  );
  let noResidue = true;
  try {
    await stat(join(proj, "badclone"));
    noResidue = false;
  } catch {
    /* 预期：目录不存在 */
  }
  check("git clone: failed clone leaves no partial directory", noResidue);
}

console.log(`\n${pass} passed, ${fail} failed`);
server.close();
// 带重试：终端 / 子进程可能还短暂持有目录句柄（Windows 上是 EBUSY），
// 不该让清理阶段的偶发锁把一整轮测试的退出码带偏。
await rm(base, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
process.exit(fail ? 1 : 0);