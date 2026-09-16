// 终端链路实测探针：复现 /exec-input 无响应 + cmd/ps 切换无效。
// 直接拉起真实宿主路由（与 smoke.mjs 同方式），用 node http 客户端模拟浏览器行为。
import { createServer, request as httpRequest } from "node:http";
import { makeFileWorkbenchRoutes } from "../lib/index.js";

const [route] = makeFileWorkbenchRoutes();
const server = createServer((req, res) => route.handler(req, res));
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const port = server.address().port;
const BASE = `http://127.0.0.1:${port}`;
const PREFIX = "/api/dsh-file-workbench";

function post(path, body, { signal } = {}) {
  return new Promise((resolve, reject) => {
    const data = Buffer.from(JSON.stringify(body ?? {}));
    const r = httpRequest(
      `${BASE}${PREFIX}${path}`,
      { method: "POST", headers: { "content-type": "application/json", "content-length": data.length } },
      (res) => {
        let buf = "";
        res.on("data", (c) => (buf += c));
        res.on("end", () => resolve({ status: res.statusCode, body: buf }));
      },
    );
    if (signal) signal.addEventListener("abort", () => r.destroy());
    r.on("error", reject);
    r.end(data);
  });
}

function time(label, p) {
  const t0 = Date.now();
  return p.then(
    (x) => ({ ...x, ms: Date.now() - t0, label }),
    (e) => ({ err: String(e), ms: Date.now() - t0, label }),
  );
}

const SESSION = "probe-session";
const results = [];

// 1) 建一个 cmd 会话
const open1 = await post("/exec-open", { session: SESSION, kind: "local", shell: "cmd", cwd: process.cwd() });
console.log("open cmd:", open1.status, open1.body);

// 2) 连续快速打 60 个 /exec-input，计时每个
const N = 60;
const batch = [];
for (let i = 0; i < N; i++) {
  batch.push(time(`input#${i}`, post("/exec-input", { session: SESSION, data: `echo ${i}\r` })));
}
const settled = await Promise.all(batch);
const slow = settled.filter((r) => (r.ms ?? 0) > 500);
console.log(`\n=== exec-input x${N} ===`);
console.log("min/avg/max ms:",
  Math.min(...settled.map((r) => r.ms)),
  (settled.reduce((a, r) => a + r.ms, 0) / N).toFixed(1),
  Math.max(...settled.map((r) => r.ms)));
console.log("slow(>500ms) count:", slow.length, slow.slice(0, 5));
console.log("any error:", settled.filter((r) => r.err).slice(0, 3));

// 3) 中途 abort 一个 /exec-input，看服务端是否挂死（readBody 是否处理 aborted）
const ac = new AbortController();
const abortedReq = post("/exec-input", { session: SESSION, data: "echo aborted\r" }, { signal: ac.signal });
setTimeout(() => ac.abort(), 10);
const ab = await time("aborted-input", abortedReq).catch((e) => ({ err: String(e) }));
console.log("\naborted input result (expect client error):", ab.err ? "client-aborted(ok)" : ab.status);

// 4) abort 后再发一个正常 input，验证服务端没被挂死的连接拖累（应仍能 200）
await new Promise((r) => setTimeout(r, 50));
const afterAbort = await time("input-after-abort", post("/exec-input", { session: SESSION, data: "echo after\r" }));
console.log("input after abort:", afterAbort.status, afterAbort.ms + "ms");

// 5) shell 切换：用同一 session 以 powershell 再 /exec-open，应重建为 powershell
const open2 = await post("/exec-open", { session: SESSION, kind: "local", shell: "powershell", cwd: process.cwd() });
console.log("\nreopen as powershell:", open2.status, open2.body);
// 给新 shell 一点启动时间，再 input 验证仍是 200（未退回 cmd）
await new Promise((r) => setTimeout(r, 200));
const psInput = await post("/exec-input", { session: SESSION, data: "echo pstest\r" });
console.log("input after shell switch:", psInput.status, psInput.body);

// 6) 统计仍挂起的连接：再打一批，确认整体没被拖慢
const batch2 = [];
for (let i = 0; i < 30; i++) batch2.push(time(`input2#${i}`, post("/exec-input", { session: SESSION, data: `echo ${i}\r` })));
const s2 = await Promise.all(batch2);
console.log("\n=== exec-input x30 after switch ===");
console.log("max ms:", Math.max(...s2.map((r) => r.ms)), "errors:", s2.filter((r) => r.err).length);

server.close();
process.exit(0);
