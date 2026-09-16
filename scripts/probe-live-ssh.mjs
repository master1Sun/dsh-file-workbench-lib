// SSH 会话全链路探针（活实例）：exec-open(ssh) → 输密码(keyboard-interactive) → shell → echo 回显。
// 复现「开了 SSH 终端 /exec-input 无响应」，每步计时。只操作自建 probe-ssh-* 会话。
const BASE = process.env.PROBE_BASE || "http://127.0.0.1:3080/api/dsh-file-workbench";
const HOST_ID = process.env.PROBE_HOST_ID || "80c0166f";
const PASSWORD = process.env.PROBE_SSH_PASSWORD || "";
const SID = "probe-ssh-" + Date.now().toString(36);
const t0 = Date.now();
const ts = () => `+${Date.now() - t0}ms`;

function post(path, body) {
  const s = Date.now();
  return fetch(BASE + path, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  }).then(
    async (r) => ({ status: r.status, body: await r.text(), ms: Date.now() - s }),
    (e) => ({ status: 0, body: "FETCH_FAIL: " + e.message, ms: Date.now() - s }),
  );
}

(async () => {
  // 0. 先订阅 mux 流（抢在 open 之前，抓口令提示）
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
    } catch {}
  });
  await new Promise((r) => setTimeout(r, 200));

  // 1. 开 SSH 会话
  let r = await post("/exec-open", { session: SID, kind: "ssh", hostId: HOST_ID, remote: "/" });
  console.log(`[${ts()}] open ssh:`, r.status, r.body.slice(0, 120), `(${r.ms}ms)`);

  await new Promise((r2) => setTimeout(r2, 1200));
  const sofar = chunks.join("");
  const promptHere = sofar.includes("assword") || sofar.includes("口令") || sofar.includes("密码");
  console.log(`[${ts()}] password prompt on mux:`, promptHere);

  // 2. 输密码（authPending 截获路径）
  r = await post("/exec-input", { session: SID, data: PASSWORD + "\r" });
  console.log(`[${ts()}] input password:`, r.status, r.body.slice(0, 80), `(${r.ms}ms)`);

  // 3. 等认证 + shell 就绪，然后敲命令
  await new Promise((r2) => setTimeout(r2, 2500));
  r = await post("/exec-input", { session: SID, data: "echo SSH_PROBE_OK_777\r" });
  console.log(`[${ts()}] input echo cmd:`, r.status, r.body.slice(0, 80), `(${r.ms}ms)`);

  await new Promise((r2) => setTimeout(r2, 2000));
  ctrl.abort();
  await pump.catch(() => {});
  const all = chunks.join("");
  const mine = all.split("\n\n").filter((b) => b.includes(SID));
  console.log(`[${ts()}] my-session events:`, mine.length);
  console.log(all.includes("SSH_PROBE_OK_777") ? "PASS: SSH ECHO RECEIVED" : "FAIL: NO SSH ECHO");
  const tail = mine.slice(-4).map((s) => JSON.stringify(s.slice(0, 170)));
  console.log(tail.join("\n"));

  // 4. 清理
  r = await post("/exec-kill", { session: SID });
  console.log(`[${ts()}] kill:`, r.status, `(${r.ms}ms)`);
})().catch((e) => {
  console.error("probe error:", e.message);
  process.exit(1);
});
