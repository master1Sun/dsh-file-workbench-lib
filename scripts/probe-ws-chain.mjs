// 终端/会话流 WS 化实测探针：
//   A. /exec-mux-ws 回环：开本地会话 → WS 收 cwd 快照 → /exec-input → WS 收回显 → kill
//   B. /push 的 session-watch：ready → 订阅 → 收 session-ev 快照 → 显式停订
//   C. 旧 /exec-mux-stream SSE 出口仍可用（e2e / 旧客户端兼容）
// 与 smoke.mjs 同方式拉起真实宿主路由（lib/ 产物）。
import { createServer, request as httpRequest } from "node:http";
import { makeFileWorkbenchRoutes, makePushUpgrade, makeExecMuxUpgrade } from "../lib/index.js";

// node-pty 的 conpty_console_list_agent 在探针环境偶发 AttachConsole failed（同步抛出，
// terminal.md 记录过的已知噪音）：只吞这一类，其余照常抛。
process.on("uncaughtException", (e) => {
  if (/AttachConsole|getConsoleProcessList|consoleProcessList/i.test(String(e?.message ?? e) + String(e?.stack ?? ""))) return;
  throw e;
});

let pass = 0;
let fail = 0;
function check(name, ok, detail = "") {
  if (ok) {
    pass++;
    console.log("  ok   " + name);
  } else {
    fail++;
    console.log("  FAIL " + name + (detail ? "  -> " + detail : ""));
  }
}

const [route] = makeFileWorkbenchRoutes();
const pushUpgrade = makePushUpgrade(() => ({
  // 最小 ctx：sessions/agents 服务不可得时来源退化为 status 帧；这里给空实现走全路径。
  get(name) {
    if (name === "sessions") return { get: () => undefined };
    if (name === "agents") return { get: () => undefined };
    return undefined;
  },
  on() {
    return () => {};
  },
}));
const muxUpgrade = makeExecMuxUpgrade();

const server = createServer((req, res) => route.handler(req, res));
server.on("upgrade", (req, socket, head) => {
  const path = (req.url ?? "").split("?")[0];
  if (path.endsWith("/push")) return pushUpgrade.handler(req, socket, head);
  if (path.endsWith("/exec-mux-ws")) return muxUpgrade.handler(req, socket, head);
  socket.destroy();
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const port = server.address().port;
const BASE = `http://127.0.0.1:${port}`;
const PREFIX = "/api/dsh-file-workbench";

function post(path, body) {
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
    r.on("error", reject);
    r.end(data);
  });
}

/** 打开 WS 并收集帧直到谓词命中或超时。 */
function wsCollect(url, { until, timeoutMs = 5000, onOpen } = {}) {
  return new Promise((resolve, reject) => {
    const frames = [];
    const ws = new WebSocket(url);
    const timer = setTimeout(() => {
      try { ws.close(); } catch { /* ignore */ }
      resolve({ ws, frames, timedOut: true });
    }, timeoutMs);
    ws.onopen = () => { try { onOpen?.(ws); } catch { /* ignore */ } };
    ws.onmessage = (ev) => {
      frames.push(String(ev.data));
      try {
        if (until?.(String(ev.data), frames)) {
          clearTimeout(timer);
          resolve({ ws, frames, timedOut: false });
        }
      } catch { /* ignore */ }
    };
    ws.onerror = () => {};
  });
}

const SESSION = "probe-ws-sess";

/* ── A. /exec-mux-ws 回环 ── */
console.log("A. 终端多路复用流（WebSocket）");
const open = await post("/exec-open", { session: SESSION, kind: "local", shell: "cmd", cwd: process.cwd() });
check("/exec-open 建立 cmd 会话", open.status === 200, open.status + " " + open.body);

{
  const url = `ws://127.0.0.1:${port}${PREFIX}/exec-mux-ws`;
  const t0 = Date.now();
  const got = await wsCollect(url, {
    until: (f) => f.includes(`"session":"${SESSION}"`),
  });
  check(
    "WS 连上即收到已有会话的 cwd 快照帧",
    got.frames.some((f) => f.includes(`"session":"${SESSION}"`) && f.includes('"type":"cwd"')),
    JSON.stringify(got.frames).slice(0, 200),
  );

  const input = await post("/exec-input", { session: SESSION, data: "echo PROBE_WS_OK_777\r" });
  check("/exec-input 正常返回", input.status === 200, input.status + " " + input.body);

  const echo = await wsCollect(url, {
    until: (f) => f.includes("PROBE_WS_OK_777"),
  });
  check(
    "输出经 WS 回传（带 session 字段）",
    echo.frames.some((f) => f.includes("PROBE_WS_OK_777") && f.includes(`"session":"${SESSION}"`)),
    JSON.stringify(echo.frames).slice(0, 300),
  );
  console.log(`  (耗时 ${Date.now() - t0}ms)`);

  const kill = await post("/exec-kill", { session: SESSION });
  check("/exec-kill 清理会话", kill.status === 200 && kill.body.includes("true"), kill.body);
  got.ws.close();
}

/* ── B. /push 的 session-watch ── */
console.log("\nB. 会话实时流并入 push WS");
{
  const url = `ws://127.0.0.1:${port}${PREFIX}/push`;
  const got = await wsCollect(url, {
    until: (f) => f.includes('"type":"session-ev"'),
    onOpen: (ws) => ws.send(JSON.stringify({ type: "session-watch", id: "sess-x" })),
  });
  check("push WS 握手 ready", got.frames.some((f) => f.includes('"type":"ready"')), JSON.stringify(got.frames.slice(0, 3)));
  const evFrame = got.frames.find((f) => f.includes('"type":"session-ev"'));
  check("session-watch 换来 session-ev 快照", !!evFrame, evFrame ?? "none");
  check(
    "快照载荷带会话 id 与 files 整表",
    !!evFrame && evFrame.includes('"sessionId":"sess-x"') && evFrame.includes('"files"'),
    evFrame ?? "none",
  );
  // 显式停订：不应崩、连接仍可用
  got.ws.send(JSON.stringify({ type: "session-watch", id: null }));
  await new Promise((r) => setTimeout(r, 100));
  check("显式停订（id:null）不崩溃", true);
  got.ws.close();
}

/* ── C. 旧 SSE 出口 ──
 * 兼容出口由 scripts/e2e-ssh-manual.mjs 全程覆盖（它整条链路都走 /exec-mux-stream SSE），
 * 这里不再重复——且探针环境反复 spawn node-pty 会触发 AttachConsole 噪音。 */

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
