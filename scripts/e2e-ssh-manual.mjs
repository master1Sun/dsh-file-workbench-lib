// 端到端验证：SSH 终端「自动登录 + 手动输密码」闭环。
//
// 起两台本机 ssh2 服务器（一台只认 keyboard-interactive、一台只认 password，均固定口令），
// 用真实宿主路由走 /exec-open → /exec-input，验证：
//   1. **自动登录**：已存凭据正确 → 不弹提示、不敲口令即建立 shell（会话 D/E）；
//   2. **自动失败回落**：已存凭据错误 → 明示原因后转入手动输密码（会话 A/B/C 的主机都存错口令）；
//   3. /exec-open 在口令提示送达后立即返回 200 且 data.kind === "ssh"（连接期错误才会报错）；
//   4. 终端输出里出现口令提示（远端 prompt 透传）；
//   5. 经 /exec-input 输入正确口令 → 认证通过 → shell 建立（收到服务器写的标记）；
//   6. 登录后输入原样透传（服务器回显 E2E-ECHO）；
//   7. 输错口令 → 「登录失败」打到终端，会话被清理（/exec-input 404，不留僵尸）；
//   8. /exec-kill 清理会话。
//
// 运行：node scripts/e2e-ssh-manual.mjs（自带 30s 超时上限，不依赖真实远端）。
import { createServer } from "node:http";
import { generateKeyPairSync } from "node:crypto";
import { mkdtemp } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import ssh2 from "ssh2";

const { Server: SshServer } = ssh2;

const CORRECT_PW = "s3cret-e2e";
const WRONG_PW = "wrong-guess";

// 全局超时上限：这种「等事件、开服务」的脚本绝不能无上限挂着。
const globalTimer = setTimeout(() => {
  console.error("E2E TIMEOUT (30s) — abort");
  process.exit(2);
}, 30_000);
globalTimer.unref?.();

let pass = 0;
let fail = 0;
function check(label, cond, detail) {
  if (cond) {
    pass++;
    console.log(`  ok  ${label}`);
  } else {
    fail++;
    console.log(`  FAIL ${label}${detail ? `  — ${detail}` : ""}`);
  }
}

// ⛔ DSH_HOME 必须在 import 宿主产物**之前**指向临时目录（ESM 的 import 会提升，
//    故宿主模块用动态 import）：store 落盘绝不能写进真实 ~/.dsh。
process.env.DSH_HOME = await mkdtemp(join(tmpdir(), "fw-e2e-ssh-"));
const { makeFileWorkbenchRoutes } = await import("../lib/index.js");

// ── 1) 假 sshd：只认 keyboard-interactive + 固定口令；shell 建立后回显输入 ──
const hostKey = generateKeyPairSync("rsa", {
  modulusLength: 2048,
  // ssh2 只认 PKCS#1（BEGIN RSA PRIVATE KEY）；PKCS#8/ed25519 PEM 会报 Unsupported key format。
  privateKeyEncoding: { type: "pkcs1", format: "pem" },
  publicKeyEncoding: { type: "pkcs1", format: "pem" },
});
/** 两台假 sshd 共用的会话接线：认证通过后 accept pty + shell，回写标记并回显输入。 */
function wireShellSessions(client) {
  client.on("ready", () => {
    client.on("session", (accept) => {
      const session = accept();
      // ssh2 服务端必须显式 accept pty-req，否则后续 shell 请求报
      // 「Unable to request a pseudo-terminal」（真 OpenSSH 自动处理，假服务器要补）。
      session.on("pty", (acceptPty) => acceptPty());
      session.on("shell", (accept2) => {
        const stream = accept2();
        stream.write("E2E-SHELL-OK\r\n");
        stream.on("data", (d) => {
          try {
            stream.write(`E2E-ECHO:${d}`);
          } catch {
            /* 通道已断 */
          }
        });
      });
    });
  });
  client.on("error", () => {
    /* 认证失败 / 主动断开：服务器侧忽略 */
  });
}

// ── 1a) 假 sshd A：只认 keyboard-interactive + 固定口令 ──
const sshd = new SshServer({ hostKeys: [hostKey.privateKey] }, (client) => {
  client.on("authentication", (ctx) => {
    if (ctx.method !== "keyboard-interactive") {
      ctx.reject();
      return;
    }
    ctx.prompt([{ prompt: "Password: ", echo: false }], undefined, undefined, (answers) => {
      if (answers && answers[0] === CORRECT_PW) ctx.accept();
      else ctx.reject();
    });
  });
  wireShellSessions(client);
});
sshd.listen(0, "127.0.0.1");
await new Promise((r) => sshd.once("listening", r));
const sshPort = sshd.address().port;

// ── 1b) 假 sshd B：**只开 password 认证**（镜像真实场景：不少 sshd 不开 keyboard-interactive）。
// 宿主首连只带 tryKeyboard、不带口令 → ki 被拒 → ssh2 报「All configured authentication
// methods failed」→ 宿主转 password 回退：换**新客户端**带口令重连。回归守卫：2026-09-16 的
// 「openShellAfterAuth 闭包捕获旧 client → Not connected」bug 只有这条路径能触发。
const sshdPwOnly = new SshServer({ hostKeys: [hostKey.privateKey] }, (client) => {
  client.on("authentication", (ctx) => {
    // 明确拒绝 keyboard-interactive，只放行 password。
    if (ctx.method !== "password" || ctx.password !== CORRECT_PW) {
      ctx.reject();
      return;
    }
    ctx.accept();
  });
  wireShellSessions(client);
});
sshdPwOnly.listen(0, "127.0.0.1");
await new Promise((r) => sshdPwOnly.once("listening", r));
const sshPwOnlyPort = sshdPwOnly.address().port;

// ── 2) 宿主路由（与 smoke 同款引导） ──
const [route] = makeFileWorkbenchRoutes();
const httpServer = createServer((req, res) => route.handler(req, res));
httpServer.listen(0, "127.0.0.1");
await new Promise((r) => httpServer.once("listening", r));
const port = httpServer.address().port;
const u = (p) => `http://127.0.0.1:${port}${route.path}${p}`;
async function call(p, method = "GET", body) {
  const res = await fetch(u(p), {
    method,
    headers: body ? { "content-type": "application/json" } : undefined,
    body: body ? JSON.stringify(body) : undefined,
  });
  return { status: res.status, body: await res.json().catch(() => null) };
}

// 注册主机（存储口令故意给个**错的**）：自动登录先拿它试一次必然失败 → 正好覆盖
// 「自动失败 → 回落手动输密码」这条链；手动路径本身也从不用它（顺带证明这一点）。
const added = await call("/ssh/add", "POST", {
  name: "e2e-manual",
  host: "127.0.0.1",
  port: sshPort,
  user: "e2e",
  auth: { type: "password", password: "stored-but-never-used" },
});
check("host added", added.body?.ok === true && !!added.body?.data?.host?.id);
const hostId = added.body?.data?.host?.id;
if (!hostId) process.exit(1);

// 注册第二台主机（password-only sshd）：覆盖「服务器不开 keyboard-interactive」的回退路径。
const addedPw = await call("/ssh/add", "POST", {
  name: "e2e-manual-pwonly",
  host: "127.0.0.1",
  port: sshPwOnlyPort,
  user: "e2e",
  auth: { type: "password", password: "stored-but-never-used" },
});
check("host (password-only) added", addedPw.body?.ok === true && !!addedPw.body?.data?.host?.id);
const hostIdPwOnly = addedPw.body?.data?.host?.id;
if (!hostIdPwOnly) process.exit(1);

// ── 3) 订阅多路复用流，收集各会话输出 ──
const outputs = new Map(); // session -> 累计输出文本
const muxRes = await fetch(u("/exec-mux-stream"));
const decoder = new TextDecoder();
let sseBuf = "";
(async () => {
  for await (const chunk of muxRes.body) {
    sseBuf += decoder.decode(chunk, { stream: true });
    let idx;
    while ((idx = sseBuf.indexOf("\n\n")) >= 0) {
      const frame = sseBuf.slice(0, idx);
      sseBuf = sseBuf.slice(idx + 2);
      const line = frame.split("\n").find((l) => l.startsWith("data: "));
      if (!line) continue;
      try {
        const ev = JSON.parse(line.slice(6));
        if (ev.type === "output" && ev.session) {
          outputs.set(ev.session, (outputs.get(ev.session) ?? "") + ev.text);
        }
      } catch {
        /* 非法帧忽略 */
      }
    }
  }
})().catch(() => {});

function waitFor(session, substr, timeoutMs) {
  const deadline = Date.now() + timeoutMs;
  return new Promise((resolve) => {
    const tick = () => {
      if ((outputs.get(session) ?? "").includes(substr)) return resolve(true);
      if (Date.now() > deadline) return resolve(false);
      setTimeout(tick, 40);
    };
    tick();
  });
}

// ── 4) 会话 A：正确口令 ──
const t0 = Date.now();
const openA = await call("/exec-open", "POST", { session: "e2e-a", kind: "ssh", hostId, remote: "/" });
const elapsed = Date.now() - t0;
check("open returns 200 kind=ssh", openA.status === 200 && openA.body?.data?.kind === "ssh");
check("open resolves fast (at prompt, not at auth)", elapsed < 8000, `${elapsed}ms`);

check("password prompt shown", await waitFor("e2e-a", "Password", 5000));

const inputA = await call("/exec-input", "POST", { session: "e2e-a", data: `${CORRECT_PW}\r` });
check("password input accepted", inputA.status === 200);
check("shell established (E2E-SHELL-OK)", await waitFor("e2e-a", "E2E-SHELL-OK", 6000));

const echoA = await call("/exec-input", "POST", { session: "e2e-a", data: "echo again\r" });
check("post-login input accepted", echoA.status === 200);
check("input passthrough (E2E-ECHO)", await waitFor("e2e-a", "E2E-ECHO:echo again", 6000));

const killA = await call("/exec-kill", "POST", { session: "e2e-a" });
check("kill session A", killA.status === 200 && killA.body?.data?.killed === true);
const afterKill = await call("/exec-input", "POST", { session: "e2e-a", data: "\r" });
check("session A gone after kill", afterKill.status === 404);

// ── 5) 会话 B：错误口令 ──
const openB = await call("/exec-open", "POST", { session: "e2e-b", kind: "ssh", hostId, remote: "/" });
check("open B returns 200 kind=ssh", openB.status === 200 && openB.body?.data?.kind === "ssh");
check("prompt B shown", await waitFor("e2e-b", "Password", 5000));
await call("/exec-input", "POST", { session: "e2e-b", data: `${WRONG_PW}\r` });
check("failure reported to terminal", await waitFor("e2e-b", "登录失败", 6000));
const afterFail = await call("/exec-input", "POST", { session: "e2e-b", data: "\r" });
check("failed session cleaned up", afterFail.status === 404);

// ── 5b) 会话 C：password-only 服务器（ki 被拒 → password 回退 → 新客户端重连）──
const openC = await call("/exec-open", "POST", { session: "e2e-c", kind: "ssh", hostId: hostIdPwOnly, remote: "/" });
check("open C (password-only) returns 200 kind=ssh", openC.status === 200 && openC.body?.data?.kind === "ssh");
check("fallback password prompt shown", await waitFor("e2e-c", "回车提交", 5000));
await call("/exec-input", "POST", { session: "e2e-c", data: `${CORRECT_PW}\r` });
// ⛔ 关键断言：shell 必须建立在**重连后的新客户端**上。旧 bug 在这里报
//    「打开远端 shell 失败：Not connected」并清掉会话（/exec-input 变 404）。
check("shell established via password fallback (E2E-SHELL-OK)", await waitFor("e2e-c", "E2E-SHELL-OK", 6000));
const echoC = await call("/exec-input", "POST", { session: "e2e-c", data: "echo pw-fallback\r" });
check("post-fallback input accepted", echoC.status === 200);
check("input passthrough after fallback (E2E-ECHO)", await waitFor("e2e-c", "E2E-ECHO:echo pw-fallback", 6000));
const killC = await call("/exec-kill", "POST", { session: "e2e-c" });
check("kill session C", killC.status === 200 && killC.body?.data?.killed === true);
const afterKillC = await call("/exec-input", "POST", { session: "e2e-c", data: "\r" });
check("session C gone after kill", afterKillC.status === 404);

// ── 5c) 会话 D/E：**自动登录**（已存凭据正确 → 不弹提示、不敲口令，直接进 shell）──
// 终端优先用主机配置里已存的凭据静默登录（2026-09-16 起）。这两条断言盯住两件事：
//   ① 一次 /exec-input 都不发就拿到 shell（真自动，不是「提示已弹出」）；
//   ② 终端里没有口令提示（出现「请输入」说明自动登录没生效、回落了手动）。
// 上面 A/B/C 三台主机存的都是**错口令**，恰好覆盖「自动失败 → 回落手动」这条链。
const addedAuto = await call("/ssh/add", "POST", {
  name: "e2e-auto",
  host: "127.0.0.1",
  port: sshPort,
  user: "e2e",
  auth: { type: "password", password: CORRECT_PW },
});
const hostIdAuto = addedAuto.body?.data?.host?.id;
check("host (auto, ki server) added", !!hostIdAuto);

const openD = await call("/exec-open", "POST", { session: "e2e-d", kind: "ssh", hostId: hostIdAuto, remote: "/" });
check("open D returns 200 kind=ssh", openD.status === 200 && openD.body?.data?.kind === "ssh");
check("auto-login: shell established without any password input", await waitFor("e2e-d", "E2E-SHELL-OK", 6000));
check("auto-login: no password prompt shown", !(outputs.get("e2e-d") ?? "").includes("请输入"));
const echoD = await call("/exec-input", "POST", { session: "e2e-d", data: "echo auto\r" });
check("post-auto-login input accepted", echoD.status === 200);
check("input passthrough after auto-login (E2E-ECHO)", await waitFor("e2e-d", "E2E-ECHO:echo auto", 6000));
const killD = await call("/exec-kill", "POST", { session: "e2e-d" });
check("kill session D", killD.status === 200 && killD.body?.data?.killed === true);

// E：password-only 服务器 + 已存正确口令 → 自动登录走 password 分支（不经 keyboard-interactive）。
const addedAutoPw = await call("/ssh/add", "POST", {
  name: "e2e-auto-pwonly",
  host: "127.0.0.1",
  port: sshPwOnlyPort,
  user: "e2e",
  auth: { type: "password", password: CORRECT_PW },
});
const hostIdAutoPw = addedAutoPw.body?.data?.host?.id;
check("host (auto, password-only) added", !!hostIdAutoPw);
const openE = await call("/exec-open", "POST", { session: "e2e-e", kind: "ssh", hostId: hostIdAutoPw, remote: "/" });
check("open E returns 200 kind=ssh", openE.status === 200 && openE.body?.data?.kind === "ssh");
check("auto-login via password auth: shell established", await waitFor("e2e-e", "E2E-SHELL-OK", 6000));
const killE = await call("/exec-kill", "POST", { session: "e2e-e" });
check("kill session E", killE.status === 200 && killE.body?.data?.killed === true);

// ── 6) 收尾 ──
// 诊断转储：失败时把每个会话收到的全部输出打出来，便于定位卡在哪一步。
if (fail) {
  for (const [k, v] of outputs) {
    console.log(`--- output[${k}] ---\n${JSON.stringify(v)}\n`);
  }
}
await call("/ssh/remove", "POST", { id: hostId });
await call("/ssh/remove", "POST", { id: hostIdPwOnly });
await call("/ssh/remove", "POST", { id: hostIdAuto });
await call("/ssh/remove", "POST", { id: hostIdAutoPw });
muxRes.body?.cancel?.().catch?.(() => {});
httpServer.close();
sshd.close();
sshdPwOnly.close();
console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
