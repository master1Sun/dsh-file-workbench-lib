// 真实远端全链路验证：临时宿主（隔离 DSH_HOME，绝不碰真实 ~/.dsh 存储）+ 注册真实 SSH 主机 →
// 两轮：
//   ① 自动登录：主机存**正确**口令 → exec-open(ssh) 直接建 shell，全程不敲口令、不弹提示；
//   ② 回落手动：主机存**错误**口令 → 自动失败并明示原因 → 弹提示 → 输密码 → shell 建立 → echo 回显。
// 用法：PROBE_SSH_HOST=1.2.3.4 PROBE_SSH_USER=root PROBE_SSH_PASSWORD=... node scripts/probe-real-ssh.mjs
import { createServer } from "node:http";
import { mkdtemp } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

const HOST = process.env.PROBE_SSH_HOST || "";
const USER = process.env.PROBE_SSH_USER || "root";
const PASSWORD = process.env.PROBE_SSH_PASSWORD || "";
if (!HOST || !PASSWORD) {
  console.error("需要 PROBE_SSH_HOST / PROBE_SSH_PASSWORD 环境变量");
  process.exit(2);
}

const globalTimer = setTimeout(() => {
  console.error("TIMEOUT (70s) — abort");
  process.exit(2);
}, 70_000);
globalTimer.unref?.();

// ⛔ DSH_HOME 必须在动态 import 宿主产物之前指向临时目录（store 落盘隔离）。
process.env.DSH_HOME = await mkdtemp(join(tmpdir(), "fw-probe-ssh-"));
const { makeFileWorkbenchRoutes } = await import("../lib/index.js");

const [route] = makeFileWorkbenchRoutes();
const httpServer = createServer((req, res) => route.handler(req, res));
httpServer.listen(0, "127.0.0.1");
await new Promise((r) => httpServer.once("listening", r));
const port = httpServer.address().port;
const BASE = `http://127.0.0.1:${port}${route.path}`;
const t0 = Date.now();
const ts = () => `+${Date.now() - t0}ms`;

async function call(p, method = "GET", body) {
  const s = Date.now();
  const res = await fetch(BASE + p, {
    method,
    headers: body ? { "content-type": "application/json" } : undefined,
    body: body ? JSON.stringify(body) : undefined,
  });
  return { status: res.status, body: await res.text(), ms: Date.now() - s };
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let failures = 0;
function check(label, cond, detail) {
  if (cond) console.log(`  ok  ${label}`);
  else {
    failures++;
    console.log(`  FAIL ${label}${detail ? `  — ${detail}` : ""}`);
  }
}

/** 订阅 mux 流并返回「累计输出 + 停止」句柄。 */
async function subscribe() {
  const ctrl = new AbortController();
  const chunks = [];
  const pump = fetch(BASE + "/exec-mux-stream", { signal: ctrl.signal }).then(async (res) => {
    const reader = res.body.getReader();
    const dec = new TextDecoder();
    try {
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(dec.decode(value));
      }
    } catch {
      /* abort */
    }
  });
  await sleep(200);
  return {
    text: () => chunks.join(""),
    stop: async () => {
      ctrl.abort();
      await pump.catch(() => {});
    },
  };
}

/**
 * 跑一轮：注册主机 → 开 ssh 终端 → （自动 / 手动）登录 → 敲 echo 验回显。
 * @param storedPw 写进主机配置的口令（= 自动登录会试的那个）。
 * @param expectAuto true=期望自动登录（不弹提示、不敲口令）。
 */
async function round(label, storedPw, expectAuto) {
  console.log(`\n── ${label} ──`);
  const added = await call("/ssh/add", "POST", {
    name: `probe-${label}`,
    host: HOST,
    port: 22,
    user: USER,
    auth: { type: "password", password: storedPw },
  });
  const hostId = JSON.parse(added.body)?.data?.host?.id;
  if (!hostId) {
    console.error("ssh/add failed:", added.body.slice(0, 200));
    process.exit(1);
  }

  const mux = await subscribe();
  const SID = `probe-${label}`;
  let r = await call("/exec-open", "POST", { session: SID, kind: "ssh", hostId, remote: "/" });
  console.log(`[${ts()}] open ssh:`, r.status, r.body.slice(0, 90), `(${r.ms}ms)`);
  check("open 返回 200 且 kind=ssh", r.status === 200 && /"kind":"ssh"/.test(r.body), r.body.slice(0, 90));

  if (expectAuto) {
    // 自动登录：一点输入都不发，直接等 shell 就绪。
    await sleep(4000);
    const out = mux.text();
    check("未弹出任何口令提示（真自动）", !out.includes("请输入"), out.slice(0, 160));
  } else {
    await sleep(2500);
    const out = mux.text();
    const fallback = out.includes("回车提交");
    console.log(`[${ts()}] prompt arrived:`, out.includes("密码"), "| password-fallback:", fallback);
    check("自动失败后弹出口令提示", out.includes("密码"));
    r = await call("/exec-input", "POST", { session: SID, data: `${PASSWORD}\r` });
    console.log(`[${ts()}] input password:`, r.status, `(${r.ms}ms)`);
    await sleep(3500);
  }

  const marker = expectAuto ? "SSH_AUTO_OK_1" : "SSH_MANUAL_OK_2";
  r = await call("/exec-input", "POST", { session: SID, data: `echo ${marker}\r` });
  console.log(`[${ts()}] input echo:`, r.status, r.body.slice(0, 80), `(${r.ms}ms)`);
  check("echo 输入被接收", r.status === 200, r.body.slice(0, 80));

  await sleep(2500);
  await mux.stop();
  const all = mux.text();
  check(`远端回显 ${marker}`, all.includes(marker), JSON.stringify(all.slice(-200)));
  const tail = all
    .split("\n\n")
    .filter((b) => b.includes(SID))
    .slice(-2)
    .map((s) => JSON.stringify(s.slice(0, 160)));
  console.log(tail.join("\n"));

  r = await call("/exec-kill", "POST", { session: SID });
  await call("/ssh/remove", "POST", { id: hostId });
  console.log(`[${ts()}] cleanup kill:`, r.status);
}

(async () => {
  await round("auto", PASSWORD, true);
  await round("fallback", "stored-but-wrong", false);
  httpServer.close();
  console.log(failures ? `\n${failures} FAILED` : "\nALL PASSED");
  process.exit(failures ? 1 : 0);
})().catch((e) => {
  console.error("probe error:", e.message);
  process.exit(1);
});
