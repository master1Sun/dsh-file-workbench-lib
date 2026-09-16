// 活实例端到端回环探针：开独立测试会话 → 敲 echo → 从 mux 流读回显 → 关闭。
// 只操作自建的 probe-live-* 会话，不碰用户真实会话。
const BASE = process.env.PROBE_BASE || "http://127.0.0.1:3080/api/dsh-file-workbench";
const SID = "probe-live-" + Date.now().toString(36);

function post(path, body) {
  return fetch(BASE + path, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  }).then(async (r) => ({ status: r.status, body: await r.text() }));
}

(async () => {
  // 1. 开一个全新 local cmd 会话
  let r = await post("/exec-open", { session: SID, kind: "local", shell: "cmd", cwd: "C:\\" });
  console.log("open:", r.status, r.body.slice(0, 140));

  // 2. 订阅 mux 流，后台收集
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
  await new Promise((r2) => setTimeout(r2, 300));

  // 3. 发输入（计时）
  const t0 = Date.now();
  r = await post("/exec-input", { session: SID, data: "echo PROBE_OK_12345\r\n" });
  console.log("input:", r.status, r.body.slice(0, 140), "in", Date.now() - t0, "ms");

  // 4. 等回显，检查 mux 流里有没有本会话的输出
  await new Promise((r2) => setTimeout(r2, 1800));
  ctrl.abort();
  await pump.catch(() => {});
  const all = chunks.join("");
  const mine = all.split("\n\n").filter((b) => b.includes(SID));
  console.log("stream bytes:", all.length, "| my-session events:", mine.length);
  console.log(mine.slice(0, 6).map((s) => s.slice(0, 160)).join("\n---\n"));
  console.log(all.includes("PROBE_OK_12345") ? "PASS: ECHO RECEIVED ON MUX STREAM" : "FAIL: NO ECHO ON MUX STREAM");

  // 5. 清理
  r = await post("/exec-kill", { session: SID });
  console.log("kill:", r.status, r.body.slice(0, 90));
})().catch((e) => {
  console.error("probe error:", e.message);
  process.exit(1);
});
