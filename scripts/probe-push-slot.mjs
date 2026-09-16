// 验证 push.ts 的跨 bundle 槽守卫：模拟 DSH 重新注入 bundle（同一 globalThis 下两份模块实例），
// 断言新实例开工前会关掉旧实例遗留的推送 WS（否则每注入一次多占一条同源长连接）。
import { build } from "esbuild";
import { pathToFileURL } from "node:url";
import { rmSync } from "node:fs";

// ---- 桩：浏览器全局 ----
const closed = []; // 被 close() 的 ws url 列表
const opened = [];
globalThis.WebSocket = class {
  constructor(url) {
    this.url = url;
    this.readyState = 0;
    opened.push(url);
    // 模拟异步 onopen
    setTimeout(() => {
      this.readyState = 1;
      this.onopen && this.onopen();
    }, 0);
  }
  send() {}
  close() {
    if (this.readyState === 3) return;
    this.readyState = 3;
    closed.push(this.url);
  }
};
globalThis.window = {
  setTimeout: (fn, ms) => setTimeout(fn, ms),
  clearTimeout: (id) => clearTimeout(id),
};

// 把 useApi 桩掉（push.ts 只用到 apiBase）
const stubUseApi = {
  name: "stub-useapi",
  setup(b) {
    b.onResolve({ filter: /useApi$/ }, () => ({ path: "stub-useapi", namespace: "stub" }));
    b.onLoad({ filter: /.*/, namespace: "stub" }, () => ({ contents: "export const apiBase = 'http://127.0.0.1:9999/api/dsh-file-workbench';", loader: "js" }));
  },
};

async function bundle(out) {
  await build({
    entryPoints: ["src/vue/composables/core/push.ts"],
    outfile: out,
    bundle: true,
    format: "esm",
    platform: "node",
    logLevel: "error",
    plugins: [stubUseApi],
  });
}

const O1 = "scripts/.push-slot-1.mjs";
const O2 = "scripts/.push-slot-2.mjs";
await bundle(O1);
await bundle(O2);

let pass = 0;
let fail = 0;
const check = (label, cond, detail) => {
  if (cond) { pass++; console.log(`  ok  ${label}`); }
  else { fail++; console.log(`  FAIL ${label}${detail ? `  — ${detail}` : ""}`); }
};

// 第一次注入：实例1 连接推送（ssh 主机关注集触发）
const m1 = await import(pathToFileURL(O1).href);
m1.setSshWatchIds("ssh-store", ["h1"]);
await new Promise((r) => setTimeout(r, 20));
check("实例1 建起推送 WS", opened.length >= 1, `opened=${opened.length}`);
const wsCountAfterM1 = opened.length;

// 第二次注入：实例2 求值 → 顶层 adoptPushSlot() 应关掉实例1 遗留的 WS。
// 此时实例2 尚未自建连接（push 是惰性建连，需 apply() 触发），故 opened 仍=实例1的那一条。
const m2 = await import(pathToFileURL(O2).href);
await new Promise((r) => setTimeout(r, 20));
check("重新注入后旧推送 WS 被关闭", closed.length >= 1, `closed=${closed.length}`);
check(
  "重新注入瞬间旧 WS 已关、新实例尚未重复建连（无堆积）",
  closed.length >= 1 && opened.length === wsCountAfterM1,
  `opened=${opened.length} closed=${closed.length}`,
);

// 实例2 继续正常使用（惰性建连）：旧的不算、新的 +1
m2.setSshWatchIds("ssh-store", ["h1"]);
await new Promise((r) => setTimeout(r, 20));
check("实例2 推送仍可用（未自伤）", opened.length === wsCountAfterM1 + 1 && closed.length === 1, `opened=${opened.length} closed=${closed.length}`);

console.log(`\n${pass} passed, ${fail} failed  (opened=${opened.length}, closed=${closed.length})`);
rmSync(O1, { force: true });
rmSync(O2, { force: true });
process.exit(fail ? 1 : 0);
