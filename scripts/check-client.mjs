/**
 * 前端纯逻辑回归（不依赖宿主、不依赖浏览器）。
 *
 * 当前覆盖：
 *   ①②③④⑤⑥ 推送通道的 WS 端点推导 `pushWsUrl()`（含旧算法判别力自证）
 *   ⑦⑧        会话实时流（`/stream/session`）的生命周期：只建不断、同会话幂等、跨 bundle 单例
 *   ⑨⑩        终端会话：复用流先于 `/exec-open` 挂上；输入失败必须可见、会话 404 时自愈重建
 *   ⑫          文件编辑器：项目目录被删除后必须清空目录树 + 最近项目；根节点须有「移出项目」
 *
 * 为什么单列一份：这条 bug（`ws://<host>http://<host>/...` 畸形地址）在**宿主 smoke 里测不到**
 * （宿主只认最终路径，畸形 URL 连请求都发不出去），在**只连宿主的探针里也测不到**
 * （探针自己拼绝对路径，绕过了前端推导）。它只在「宿主桥接把 apiBase 注入成**绝对 URL**」
 * 这一真实运行时形态下才发作 —— 桩写成相对路径就会漏判，本脚本因此直接用绝对 URL 作输入。
 *
 * 铁律：断言必须能抓到旧行为。脚本末尾的「判别力自证」把旧算法原样跑一遍，
 * 确认它在绝对 apiBase 下确实产出不可用的地址（否则说明断言没有判别力）。
 *
 * 用法：node scripts/check-client.mjs
 */
import { build } from "esbuild";
import { readFileSync, writeFileSync, unlinkSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const STUB_API = join(ROOT, "_c-api.mjs");
const ENTRY = join(ROOT, "_c-entry.ts");
const BUNDLE = join(ROOT, "_c-bundle.mjs");
/** 会话流那一段用独立的 entry / bundle（要额外桩掉 `vue`，别和上面混。 */
const STUB_VUE = join(ROOT, "_c-vue.mjs");
const ENTRY_SSE = join(ROOT, "_c-sse-entry.ts");
const BUNDLE_SSE = join(ROOT, "_c-sse-bundle.mjs");
/** 终端会话那一段：真实 terminalStore + 桩掉 useApi / vue / i18n / toast。 */
const STUB_TERM_API = join(ROOT, "_c-term-api.mjs");
const STUB_TERM_VUE = join(ROOT, "_c-term-vue.mjs");
const STUB_I18N = join(ROOT, "_c-i18n.mjs");
const STUB_TOAST = join(ROOT, "_c-toast.mjs");
const ENTRY_TERM = join(ROOT, "_c-term-entry.ts");
const BUNDLE_TERM = join(ROOT, "_c-term-bundle.mjs");
/** 仓库目录名推导（deriveRepoDirName / sanitizeRepoDirName）：纯函数，无需桩。 */
const ENTRY_REPO = join(ROOT, "_c-repo-entry.ts");
const BUNDLE_REPO = join(ROOT, "_c-repo-bundle.mjs");

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

/* ---------- 打包真实模块（只桩掉 useApi 的 apiBase） ---------- */
writeFileSync(
  STUB_API,
  "// 真实注入形态由 client/index.tsx 决定（绝对 URL），这里只提供模块期所需的值。\nexport const apiBase = 'http://127.0.0.1:3080/api/dsh-file-workbench';\n",
);
writeFileSync(ENTRY, 'export { pushWsUrl } from "./src/vue/composables/core/push";\n');
// 会话流段共用的桩：vue / toast / i18n / readCache / useApi（sessionSse 现在传递引入 push → useApi）。
writeFileSync(STUB_VUE, [
  "// 各桩模块只被当作「无副作用实现」容器，具体导出按 import 方取用。",
  "export const reactive = (o) => o;",
  "export const computed = (f) => f;",
  "export const toastError = () => {};",
  "export const cachedRead = () => Promise.resolve(null);",
  "export const invalidateRead = () => {};",
  "export const t = (key) => key;",
].join("\n") + "\n");
writeFileSync(
  ENTRY_SSE,
  'export { connectSessionSse, disconnectSessionSse, sessionSse } from "./src/vue/composables/session/sessionSse";\n',
);

// 终端会话段：桩掉 useApi（记录调用 + 可注入失败），以及 vue / i18n / toast。
/**
 * 桩之间共享的观测槽。
 *
 * ⛔ 必须挂 `globalThis`：esbuild 会把桩文件**内联**进 bundle，脚本里若直接
 * `import(STUB_TERM_API)` 拿到的是**另一个模块实例**（另一份 `calls`），断言会永远看到空数组
 * —— 而且「全绿」还查不出来（空数组让顺序断言假阳、让计数断言假阴）。
 * （同项目里 `globalThis.__DSH_FW_TOAST__` 是同一个坑的另一个面。）
 */
const TERM_SLOT = "__C_TERM_STUB__";
writeFileSync(
  STUB_TERM_API,
  `/* useApi 替身：调用顺序 + 失败注入，写进全局槽供断言读取（见脚本注释）。 */
const G = (globalThis.${TERM_SLOT} ??= { calls: [], toasts: [], state: { inputMode: "ok" } });
export const calls = G.calls;
export const state = G.state;
export class ApiError extends Error {
  constructor(message, status) { super(message); this.name = "ApiError"; this.status = status; }
}
export function openTerminalSession(body) {
  G.calls.push("open:" + (body.kind ?? "local"));
  if (body.kind === "ssh") return Promise.resolve({ cwd: "", kind: "ssh" });
  return Promise.resolve({ cwd: body.cwd ?? "", kind: "local" });
}
export function sendTerminalInput() {
  G.calls.push("input");
  if (G.state.inputMode === "404") return Promise.reject(new ApiError("unknown session", 404));
  if (G.state.inputMode === "500") return Promise.reject(new ApiError("boom", 500));
  return Promise.resolve({ ok: true });
}
export function streamTerminalMux() { G.calls.push("mux"); return new Promise(() => {}); }
export function streamTerminal() { G.calls.push("legacy"); return new Promise(() => {}); }
export function killExec() { return Promise.resolve(); }
export function resizeTerminalSession() { return Promise.resolve(); }
export function savePersist() { return Promise.resolve(); }
export function termEnv() { return Promise.resolve({}); }
// 供判别力自证直接驱动（复刻旧调用序 / 旧的静默吞掉）。
export const fns = G.fns = { openTerminalSession, sendTerminalInput, streamTerminalMux, streamTerminal };
`,
);
writeFileSync(
  STUB_TERM_VUE,
  "// terminalStore 只用到 ref（响应式本身不是本脚本的被测对象，恒等实现即可）。\nexport const ref = (v) => ({ value: v });\n",
);
writeFileSync(
  STUB_I18N,
  "// 保留 key 与插值参数，方便断言「提示里带上了宿主给的原因」。\nexport const t = (key, params) => (params ? key + \"|\" + JSON.stringify(params) : key);\n",
);
writeFileSync(
  STUB_TOAST,
  `const G = (globalThis.${TERM_SLOT} ??= { calls: [], toasts: [], state: { inputMode: "ok" } });\nexport const toasts = G.toasts;\nexport const toast = (...args) => { G.toasts.push(args); };\n`,
);
writeFileSync(
  ENTRY_TERM,
  'export { createTerminal, termTabs, queueTerminalInput, takeTermFocus } from "./src/vue/composables/domain/terminalStore";\n',
);
writeFileSync(
  ENTRY_REPO,
  'export { deriveRepoDirName, sanitizeRepoDirName, REPO_DIR_NAME_MAX } from "./src/shared/repo";\n',
);

try {
  await build({
    entryPoints: [ENTRY],
    outfile: BUNDLE,
    bundle: true,
    format: "esm",
    platform: "node",
    logLevel: "warning",
    plugins: [
      {
        name: "stub",
        setup(b) {
          b.onResolve({ filter: /useApi$/ }, () => ({ path: STUB_API }));
        },
      },
    ],
  });

  const { pushWsUrl } = await import(pathToFileURL(BUNDLE).href);

  /* ---------- 打包会话实时流模块（桩 vue / useApi / toast / i18n / readCache） ---------- */
  await build({
    entryPoints: [ENTRY_SSE],
    outfile: BUNDLE_SSE,
    bundle: true,
    format: "esm",
    platform: "node",
    logLevel: "warning",
    plugins: [
      {
        name: "stub-sse",
        setup(b) {
          b.onResolve({ filter: /^vue$/ }, () => ({ path: STUB_VUE }));
          b.onResolve({ filter: /(^|\/)useApi$/ }, () => ({ path: STUB_API }));
          b.onResolve({ filter: /(^|\/)toast$/ }, () => ({ path: STUB_VUE }));
          b.onResolve({ filter: /(^|\/)i18n$/ }, () => ({ path: STUB_VUE }));
          b.onResolve({ filter: /(^|\/)readCache$/ }, () => ({ path: STUB_VUE }));
        },
      },
    ],
  });

  /* ---------- 打包终端会话模块（真实 terminalStore + 桩 useApi） ---------- */
  await build({
    entryPoints: [ENTRY_TERM],
    outfile: BUNDLE_TERM,
    bundle: true,
    format: "esm",
    platform: "node",
    logLevel: "warning",
    plugins: [
      {
        name: "stub-term",
        setup(b) {
          // ⛔ filter 匹配的是**源码里写的导入串**（`../core/useApi`），不是解析后的绝对路径。
          b.onResolve({ filter: /(^|\/)useApi$/ }, () => ({ path: STUB_TERM_API }));
          b.onResolve({ filter: /^vue$/ }, () => ({ path: STUB_TERM_VUE }));
          b.onResolve({ filter: /(^|\/)i18n$/ }, () => ({ path: STUB_I18N }));
          b.onResolve({ filter: /(^|\/)toast$/ }, () => ({ path: STUB_TOAST }));
        },
      },
    ],
  });

  /* ---------- 打包仓库目录名推导（纯函数，无需桩） ---------- */
  await build({
    entryPoints: [ENTRY_REPO],
    outfile: BUNDLE_REPO,
    bundle: true,
    format: "esm",
    platform: "node",
    logLevel: "warning",
  });

  /** 真实注入形态：client/index.tsx 的 `${window.location.origin}${PREFIX}`。 */
  const ABS = "http://127.0.0.1:3080/api/dsh-file-workbench";
  const PAGE = "http://127.0.0.1:3080/chat/abc";

  console.log("① 宿主注入的绝对 apiBase（线上真实形态）");
  {
    const got = pushWsUrl(ABS, PAGE);
    check(
      "推导为 ws://127.0.0.1:3080/api/dsh-file-workbench/push",
      got === "ws://127.0.0.1:3080/api/dsh-file-workbench/push",
      got,
    );
    check("主机名只出现一次（旧实现在此处产出畸形地址）", got.split("127.0.0.1").length === 2, got);
    check("可被 URL 解析且协议为 ws:", (() => {
      try {
        return new URL(got).protocol === "ws:";
      } catch {
        return false;
      }
    })(), got);
  }

  console.log("\n② https 页面 → wss");
  {
    const got = pushWsUrl("https://box.example.com/api/dsh-file-workbench", "https://box.example.com/");
    check("推导为 wss://box.example.com/api/dsh-file-workbench/push", got === "wss://box.example.com/api/dsh-file-workbench/push", got);
  }

  console.log("\n③ 反向代理到子路径");
  {
    const got = pushWsUrl("http://127.0.0.1:3080/dsh/api/dsh-file-workbench", "http://127.0.0.1:3080/dsh/");
    check("保留子路径前缀", got === "ws://127.0.0.1:3080/dsh/api/dsh-file-workbench/push", got);
  }

  console.log("\n④ 相对 apiBase（vite dev / VITE_API_BASE）仍按当前页解析");
  {
    const got = pushWsUrl("/api/dsh-file-workbench", PAGE);
    check("推导为 ws://127.0.0.1:3080/api/dsh-file-workbench/push", got === "ws://127.0.0.1:3080/api/dsh-file-workbench/push", got);
  }

  console.log("\n⑤ 尾斜杠不产生空段");
  {
    const got = pushWsUrl("http://127.0.0.1:3080/api/dsh-file-workbench/", PAGE);
    check("不出现 //push", !got.includes("//push") && got.endsWith("/api/dsh-file-workbench/push"), got);
  }

  console.log("\n⑥ 判别力自证：旧算法在绝对 apiBase 下确实不可用");
  {
    /** 修复前的实现（原样照抄）。 */
    const legacy = (base, href) => {
      const u = new URL(href);
      const secure = u.protocol === "https:";
      return `${secure ? "wss:" : "ws:"}//${u.host}${base}/push`;
    };
    const bad = legacy(ABS, PAGE);
    let parseable = true;
    let hostOk = false;
    try {
      hostOk = new URL(bad).host === "127.0.0.1:3080";
    } catch {
      parseable = false;
    }
    check("旧算法产出的地址与正确值不同", bad !== pushWsUrl(ABS, PAGE), bad);
    check(
      "旧算法产出的地址不可用（不可解析或主机名错乱）",
      !parseable || !hostOk,
      bad + "  parseable=" + parseable + " hostOk=" + hostOk,
    );
  }

  console.log("\n⑦ 会话实时流（push WS 上的 session-watch 订阅）的生命周期");
  {
    /** WebSocket 替身：统计构造次数、记录发出的帧。 */
    let created = 0;
    let lastWs = null;
    class FakeWS {
      static CONNECTING = 0;
      static OPEN = 1;
      static CLOSING = 2;
      static CLOSED = 3;
      constructor(url) {
        created++;
        this.url = url;
        this.readyState = 0; // CONNECTING
        this.frames = [];
        this.closedFlag = false;
        lastWs = this;
      }
      send(data) {
        this.frames.push(data);
      }
      close() {
        this.closedFlag = true;
        this.readyState = 3;
      }
      /** 测试辅助：模拟连接建立（触发 push 的 onopen → 重发订阅）。 */
      fakeOpen() {
        this.readyState = 1;
        this.onopen?.();
      }
      /** 测试辅助：模拟断线（触发 onclose → 重连排程）。 */
      fakeClose() {
        this.readyState = 3;
        this.onclose?.();
      }
    }
    globalThis.WebSocket = FakeWS;

    /** 与真实桥一致：订阅时**先回推一次**当前会话（sessionSse 靠它建初始基线）。 */
    let cb = null;
    let current = "session-a";
    globalThis.window = {
      __DSH_FILE_WORKBENCH__: {
        apiBase: "http://127.0.0.1:3080/api/dsh-file-workbench",
        subscribeCurrentSessionId(fn) {
          cb = fn;
          fn(current);
          return () => {
            if (cb === fn) cb = null;
          };
        },
      },
      // 重连排程立即执行（1.5s 退避在测试里不可等）：直接同步触发。
      setTimeout: (fn) => {
        fn();
        return 0;
      },
      clearTimeout: () => {},
    };

    /** 跨 bundle 槽：预置一个「上一份 bundle 的实例」，新实例接手时必须先把它关掉。 */
    let oldDisposed = 0;
    globalThis.__DSH_FW_SESSION_SSE__ = {
      dispose: () => {
        oldDisposed++;
      },
    };

    const { connectSessionSse, disconnectSessionSse } = await import(pathToFileURL(BUNDLE_SSE).href);

    connectSessionSse();
    check("首次建立：开一条 push WS", created === 1, "created=" + created);
    check("跨 bundle：上一份实例的订阅先被清掉", oldDisposed === 1, "oldDisposed=" + oldDisposed);
    check(
      "端点为推送通道（不再直连 /stream/session SSE）",
      lastWs?.url === "ws://127.0.0.1:3080/api/dsh-file-workbench/push",
      lastWs?.url,
    );
    lastWs.fakeOpen();
    check(
      "连接建立后发出 session-watch 订阅",
      lastWs.frames.some((f) => f === JSON.stringify({ type: "session-watch", id: "session-a" })),
      JSON.stringify(lastWs.frames),
    );

    // 桥侧因重渲染等原因重复回推同一 id 是常事：不重发订阅（服务端每接一路都要重做全量快照）。
    const framesBefore = lastWs.frames.length;
    cb("session-a");
    cb("session-a");
    check("同一会话重复回推：不重发订阅、不重开连接", created === 1 && lastWs.frames.length === framesBefore);

    cb("session-b");
    check(
      "切换会话：同一连接上改发新订阅（不新开连接）",
      created === 1 && lastWs.frames.some((f) => f === JSON.stringify({ type: "session-watch", id: "session-b" })),
      JSON.stringify(lastWs.frames),
    );

    lastWs.fakeClose(); // 宿主重启 / 网络断 → push 自动重连并重发订阅
    check("断线后自动重连", created === 2, "created=" + created);
    lastWs.fakeOpen();
    check(
      "重连后重发会话订阅（服务端不保留断线前的订阅）",
      lastWs.frames.some((f) => f === JSON.stringify({ type: "session-watch", id: "session-b" })),
      JSON.stringify(lastWs.frames),
    );

    cb(null);
    check("无选中会话：停订且关闭 push WS（无其他订阅时不留空连接）", created === 2 && lastWs.closedFlag === true);

    // ⭐ 切右侧面板的真实调用序：卸载只 unmount 组件，**不碰这条订阅**；挂载重新 connect 一次。
    current = "session-b";
    connectSessionSse();
    connectSessionSse();
    check("面板重挂载（只 connect、不断开）：不再重开连接", created === 2, "created=" + created);

    // 判别力自证：旧的「卸载停订 + 挂载重订」确实会关掉再重开一条连接。
    disconnectSessionSse();
    connectSessionSse();
    check("判别力：旧的「卸载停订 + 挂载重订」会重开一条连接", created === 3, "created=" + created);
    lastWs.fakeOpen();
    check(
      "重开后会话订阅恢复",
      lastWs.frames.some((f) => f === JSON.stringify({ type: "session-watch", id: "session-b" })),
      JSON.stringify(lastWs.frames),
    );
  }

  console.log("\n⑧ 静态约束：会话流不得随面板卸载断开");
  {
    /** 去掉注释行再断言，免得说明文字里的词造成误报。 */
    const code = readFileSync(join(ROOT, "src/vue/main.ts"), "utf8")
      .split(/\r?\n/)
      .filter((l) => !/^\s*(\/\/|\*|\/\*)/.test(l))
      .join("\n");
    check(
      "main.ts 未把注销函数接出来（旧写法会在 unmount 里断开 → 每切一次面板重连一条）",
      !/sseDispose/.test(code),
    );
    check("main.ts 不主动断开会话流", !/disconnectSessionSse/.test(code));
    check("main.ts 仍会建立会话流", /connectSessionSse\(\)/.test(code));
  }

  console.log("\n⑨ 终端会话：复用流必须先于 /exec-open 挂上");
  {
    globalThis.window = {
      setTimeout: globalThis.setTimeout,
      clearTimeout: globalThis.clearTimeout,
      innerWidth: 1600,
      innerHeight: 900,
    };
    const { createTerminal } = await import(pathToFileURL(BUNDLE_TERM).href);
    const api = globalThis[TERM_SLOT];
    check("桩观测槽已建立（否则后续断言都是空跑）", !!api && Array.isArray(api.calls));

    api.calls.length = 0;
    createTerminal("k", { cwd: "" });
    check(
      "先挂复用流、再建会话（顺序反了会丢掉登录横幅 / 自动 cd 的回显）",
      api.calls[0] === "mux" && String(api.calls[1]).startsWith("open:"),
      JSON.stringify(api.calls),
    );

    // 判别力自证：旧写法（先 openSessionFor 再 ensureMux）的调用序确实是反的。
    api.calls.length = 0;
    void api.fns.openTerminalSession({ session: "legacy", shell: "cmd" });
    void api.fns.streamTerminalMux();
    check(
      "判别力：旧调用序产出 open → mux（与上面相反）",
      api.calls[0] === "open:local" && api.calls[1] === "mux",
      JSON.stringify(api.calls),
    );
  }

  console.log("\n⑩ 终端输入失败：必须可见，且会话失效时自愈");
  {
    const { createTerminal, queueTerminalInput } = await import(pathToFileURL(BUNDLE_TERM).href);
    const api = globalThis[TERM_SLOT];
    const tick = (ms) => new Promise((r) => setTimeout(r, ms));
    const opens = () => api.calls.filter((c) => c.startsWith("open:")).length;

    // A. 普通失败（500）：写可读提示 + toast，但不重建（重建也没用）。
    api.state.inputMode = "500";
    api.toasts.length = 0;
    api.calls.length = 0;
    const a = createTerminal("a", { cwd: "" });
    await tick(5);
    const opensA = opens();
    queueTerminalInput(a.session, "x\r");
    await tick(30);
    check(
      "输入失败 → 终端里留下可读提示（不再是「敲键盘完全没反应」）",
      a.output.includes("termInputFailed"),
      JSON.stringify(a.output.slice(-160)),
    );
    check("提示里带上了宿主给的原因", a.output.includes("boom"), JSON.stringify(a.output.slice(-160)));
    check("同时给出 toast（窗口最小化时也能看到）", api.toasts.length > 0, JSON.stringify(api.toasts));
    check("非 404 失败不重建会话（重建也无意义）", opens() === opensA, JSON.stringify(api.calls));

    // B. 会话已不在后端（404：宿主重启 / 被回收）→ 自动重建，否则该窗口会永远打不进字。
    api.state.inputMode = "404";
    api.calls.length = 0;
    const b = createTerminal("b", { cwd: "" });
    await tick(5);
    const opensB = opens();
    queueTerminalInput(b.session, "y\r");
    await tick(60);
    check("404（会话已不在后端）→ 自动重建会话", opens() > opensB, JSON.stringify(api.calls));
    check("重建后 connected 恢复（输入重新可用）", b.connected === true, "connected=" + b.connected);

    // C. 判别力自证：旧实现的 catch 是空的 → 既不留提示、也不重建。
    api.state.inputMode = "500";
    api.calls.length = 0;
    const c = createTerminal("c", { cwd: "" });
    await tick(5);
    const opensC = opens();
    const before = c.output;
    await api.fns.sendTerminalInput(c.session, "z\r").catch(() => {
      /* 旧实现就是这样静默吞掉的 */
    });
    await tick(30);
    check(
      "判别力：旧实现（空 catch）不留提示、也不重建",
      c.output === before && opens() === opensC,
      "output=" + JSON.stringify(c.output.slice(-80)),
    );
  }

  console.log("\n⑪ 仓库目录名推导（deriveRepoDirName / sanitizeRepoDirName）");
  {
    const { deriveRepoDirName, sanitizeRepoDirName } = await import(pathToFileURL(BUNDLE_REPO).href);

    check(
      "derive: https URL 取末段去 .git",
      deriveRepoDirName("https://github.com/owner/repo.git") === "repo",
      deriveRepoDirName("https://github.com/owner/repo.git"),
    );
    check(
      "derive: svn 末段（trunk）",
      deriveRepoDirName("svn://host/repo/trunk") === "trunk",
      deriveRepoDirName("svn://host/repo/trunk"),
    );
    check(
      "derive: 无 .git 后缀仍取末段",
      deriveRepoDirName("https://gitlab.com/g/tool") === "tool",
      deriveRepoDirName("https://gitlab.com/g/tool"),
    );
    check(
      "sanitize: 普通名原样返回",
      sanitizeRepoDirName("my repo-1") === "my repo-1",
      String(sanitizeRepoDirName("my repo-1")),
    );
    check("sanitize: 含分隔符 → null（目录穿越入口）", sanitizeRepoDirName("a/b") === null);
    check("sanitize: 空串 → null", sanitizeRepoDirName("") === null);
    check("sanitize: 父目录引用 → null", sanitizeRepoDirName("..") === null);
    check("sanitize: 非法字符被替换为 _", sanitizeRepoDirName("a:b") === "a_b", String(sanitizeRepoDirName("a:b")));

    // ⭐ 判别力自证：scp-like `git@host:o/r.git` 必须被正确识别 —— 旧实现只剥 `scheme://`，
    // 对没有 `//` 的 scp 写法整段留着，推导出的名字会带着 `@host:`（且不是仓库名）。
    const oldDerive = (url) => {
      let s = (url ?? "").trim().replace(/\\/g, "/");
      s = s.replace(/^[a-zA-Z][a-zA-Z0-9+.-]*:\/\/[^/]*/, "");
      s = s.split("?")[0].split("#")[0].replace(/\/+$/, "");
      const last = s.split("/").filter(Boolean).pop() ?? "";
      return last.replace(/\.git$/i, "");
    };
    // scp 路径里没有斜杠时，旧实现把整段 `user@host:` 前缀留作名字（含 @），
    // 只有新实现能正确剥出仓库名。路径带斜杠的 `git@host:o/r.git` 两者都碰巧得 repo，
    // 故这里用「无斜杠」形态才能逼出旧实现的差别。
    const scpUrl = "git@github.com:repo.git";
    const newGot = deriveRepoDirName(scpUrl);
    const oldGot = oldDerive(scpUrl);
    check("derive: scp-like 地址（无路径斜杠）取仓库名（repo）", newGot === "repo", newGot);
    check(
      "判别力：旧实现把整段 user@host 前缀留作名字（含 @，与新值不同）",
      oldGot !== newGot && oldGot.includes("@"),
      `old=${oldGot} new=${newGot}`,
    );
  }

  console.log("\n⑫ 静态约束：项目目录被删除必须清空目录树与最近项目；根节点须有「移出项目」");
  {
    /** 去掉注释行再断言，免得说明文字里的词造成误报（与 ⑧ 同一套口径）。 */
    const strip = (p) =>
      readFileSync(join(ROOT, p), "utf8")
        .split(/\r?\n/)
        .filter((l) => !/^\s*(\/\/|\*|\/\*)/.test(l))
        .join("\n");
    const pt = strip("src/vue/components/business/vscode/ProjectTree.vue");
    const pane = strip("src/vue/components/business/vscode/VSCodePane.vue");

    // 旧行为：actDelete 删项目根后走 refreshNode(parentDir(root))，而父目录根本不在树里
    // （nodes[parent] 恒为 undefined）→ 已删除的树原样留在左侧、「最近项目」也照旧留着。
    const delBody = pt.slice(pt.indexOf("async function actDelete"), pt.indexOf("async function actRefresh"));
    check(
      "actDelete 对项目根（depth 0）单独处理：清空整棵树而不是刷新不存在的父目录",
      /if \(node\.depth === 0\) \{/.test(delBody) &&
        /clearTreeOnMissing\(\)/.test(delBody) &&
        /emit\("project-missing"/.test(delBody),
    );
    // 旧行为：rebuild 直接接管跨挂载缓存 → 目录删掉后切面板回来还是那棵旧树。
    const probeAt = pt.indexOf("await api.exists(props.root");
    const adoptAt = pt.indexOf("adoptedTree && props.root && adoptedTree.root === props.root");
    check("rebuild 在接管缓存之前先探测项目根是否还存在（404 → 清空 + 通知父面板）", probeAt > -1 && probeAt < adoptAt);
    check(
      "窗口重新获得焦点时静默巡检项目根（外部删除场景；只认明确 404，瞬时故障不清项目）",
      /onMounted\(\(\) => window\.addEventListener\("focus"/.test(pt) && /api\.exists\(root, \{ silent: true \}\)/.test(pt),
    );

    // 「移出项目」：根节点菜单 + 空白处菜单都要有，且 VSCodePane 接线到 forgetAndClose。
    check(
      "根节点右键与空白处菜单都提供「移出项目」（emit remove-project）",
      (pt.match(/emit\("remove-project"/g) ?? []).length >= 2,
    );
    check(
      "VSCodePane 接线 project-missing / remove-project → forgetAndClose（forgetProject + 关标签 + 置空项目）",
      /@project-missing="handleProjectMissing"/.test(pane) &&
        /@remove-project="removeProject"/.test(pane) &&
        (pane.match(/forgetAndClose\(/g) ?? []).length >= 3 &&
        /store\.forgetProject\(dir\)/.test(pane),
    );
  }

  console.log("\n⑬ 静态约束：编辑器右栏随面板宽度自动折叠/展开");
  {
    /** 去掉注释行再断言，免得说明文字里的词造成误报（与 ⑧ 同一套口径）。 */
    const pane = readFileSync(join(ROOT, "src/vue/components/business/vscode/VSCodePane.vue"), "utf8")
      .split(/\r?\n/)
      .filter((l) => !/^\s*(\/\/|\*|\/\*)/.test(l))
      .join("\n");
    // 触发源必须是面板元素（ResizeObserver）：拖 DSH 右侧面板宽度不触发 window resize，
    // 旧版挂 window resize 的联动在「拖面板」这一真实手势下永远不动。
    check(
      "触发源是面板根元素的 ResizeObserver（拖 DSH 面板宽度不触发 window resize）",
      /foldRO = new ResizeObserver\(\(\) => evalRightFold\(\)\)/.test(pane) && /foldRO\.observe\(rootRef\.value\)/.test(pane),
    );
    check("迟滞带：折叠阈值严格小于恢复阈值（防抖动）", /RIGHT_FOLD_BELOW[^;]*;[\s\S]*?RIGHT_UNFOLD_ABOVE/.test(pane));
    // 折叠生效：CSS 必须真的把右栏与分隔条藏起来、树占满整栏。
    check(
      "折叠态隐藏分隔条与右栏、项目树占满整栏",
      /\.vs-body\.right-folded \.vs-split,\s*\.vs-body\.right-folded \.vs-right \{[^}]*display: none/.test(pane) &&
        /\.vs-body\.right-folded \.vs-left \{[^}]*flex: 1 1 100%/.test(pane),
    );
    // 用户意图覆盖：点文件 / 打开 diff / 点「展开编辑器」按钮都会强制展开（否则折叠中点了文件毫无反馈）。
    check(
      "openFile、showDiffPane 与恢复按钮都会展开右栏（用户意图优先）",
      (pane.match(/rightFolded(\.value)? = false;/g) ?? []).length >= 3,
    );
    // 没开项目时不折叠：右栏的「打开文件夹」空态比空树更有用。
    check("没开项目时不折叠（空态入口在右栏）", /w <= RIGHT_FOLD_BELOW && vsState\.projectDir/.test(pane));
  }

  console.log("\n⑭ 静态约束：文件工作台左栏随面板宽度自动折叠/展开");
  {
    const pane = readFileSync(
      join(ROOT, "src/vue/components/business/explorer/ExplorerPane.vue"),
      "utf8",
    )
      .split(/\r?\n/)
      .filter((l) => !/^\s*(\/\/|\*|\/\*)/.test(l))
      .join("\n");
    const cmdbar = readFileSync(
      join(ROOT, "src/vue/components/business/explorer/CommandBar.vue"),
      "utf8",
    )
      .split(/\r?\n/)
      .filter((l) => !/^\s*(\/\/|\*|\/\*)/.test(l))
      .join("\n");

    // 触发源必须是面板元素（ResizeObserver）：拖 DSH 右侧面板宽度不触发 window resize。
    check(
      "触发源是面板根元素的 ResizeObserver（非 window resize）",
      /foldRO = new ResizeObserver\(\(\) => evalLeftFold\(\)\)/.test(pane) &&
        /foldRO\.observe\(rootRef\.value\)/.test(pane) &&
        !/addEventListener\("resize"/.test(pane),
    );
    check(
      "迟滞带：折叠阈值严格小于恢复阈值（防抖动）",
      /LEFT_FOLD_BELOW[^;]*;[\s\S]*?LEFT_UNFOLD_ABOVE/.test(pane) &&
        /w <= LEFT_FOLD_BELOW/.test(pane) &&
        /w >= LEFT_UNFOLD_ABOVE/.test(pane),
    );
    // 折叠生效：CSS 必须真的把左栏与分隔条藏起来、文件列表占满整栏。
    check(
      "折叠态隐藏左栏与分隔条、文件列表占满整栏",
      /\.fw-exp-body\.left-folded \.fw-exp-left,\s*\.fw-exp-body\.left-folded \.fw-exp-split \{[^}]*display: none/.test(pane) &&
        /\.fw-exp-body\.left-folded \.fw-exp-right \{[^}]*flex: 1 1 100%/.test(pane),
    );
    // 用户意图覆盖：命令栏「显示导航栏」按钮手动展开（否则折叠中无法恢复）。
    check(
      "命令栏「显示导航栏」按钮能手动展开左栏（用户意图优先）",
      /leftFolded(\.value)? = false/.test(pane),
    );
    // 接线：ExplorerPane 把折叠态传给 CommandBar，并把其 unfold-nav 事件写回 leftFolded。
    check(
      "ExplorerPane ↔ CommandBar 接线：navFolded 传入、unfold-nav 写回",
      /:nav-folded="leftFolded"[^>]*@unfold-nav="leftFolded = false"/.test(pane) ||
        /@unfold-nav="leftFolded = false"[^>]*:nav-folded="leftFolded"/.test(pane),
    );
    check(
      "CommandBar 声明 navFolded prop 与 unfold-nav emit，且折叠时出现恢复按钮",
      // 只要求 navFolded 在 props 里（后来又加了 compact，写死整段签名会假红）。
      /defineProps<\{ navFolded\?:\s*boolean[^}]*\}>\(\)/.test(cmdbar) &&
        /defineEmits<\{ \(e: "unfold-nav"\)/.test(cmdbar) &&
        /v-if="navFolded"[^>]*@click="\$emit\('unfold-nav'\)"/.test(cmdbar),
    );
  }

  console.log("\n⑮ 静态约束：拖放移动后目录树必须真的重列（不能只调 rebuild——它会被缓存早退成零请求）");
  {
    /** 与 ⑫ 同口径：先去掉注释行，免得说明文字里的词造成误报。 */
    const pt = readFileSync(join(ROOT, "src/vue/components/business/vscode/ProjectTree.vue"), "utf8")
      .split(/\r?\n/)
      .filter((l) => !/^\s*(\/\/|\*|\/\*)/.test(l))
      .join("\n");
    const dropBody = pt.slice(pt.indexOf("async function onDrop"), pt.indexOf("function createFileAtRoot"));
    const relistBody = pt.slice(pt.indexOf("async function relistTree"), pt.indexOf("function persist(): void"));

    // 旧行为：onDrop 移动成功后只 `await rebuild()`，而 rebuild 第一步就是
    // 「本次挂载接管过同槽同根的缓存树 → 直接返回（零请求）」，于是拖放后一个 /list 都不发，
    // 树里还是移动前的旧内容 —— 表现是「拖过去了，文件还在原处、目标目录也不出现」。
    check(
      "onDrop 移动成功后走 relistTree 原地重列（不再只调 rebuild）",
      /await relistTree\(\)/.test(dropBody) && !/rebuild\(\)/.test(dropBody),
      dropBody.includes("rebuild()") ? "dropBody 仍含 rebuild()" : "",
    );
    check(
      "relistTree 先作废列目录读缓存再重列（否则仍可能命中 30s 内的旧 /list 结果）",
      /api\.invalidateReadCache\("list:"\)/.test(relistBody) && /await loadChildren\(n\)/.test(relistBody),
    );
    check(
      "relistTree 自根向下 DFS：重列完父目录才取其子项（移动整个目录时不会拿已失效的旧路径打 404）",
      /const r = root\.value/.test(relistBody) &&
        /for \(const cp of \[\.\.\.n\.children\]\)/.test(relistBody) &&
        /if \(c\?\.isDir && c\.expanded && !c\.loading\) await walk\(c\)/.test(relistBody),
    );
    check(
      "onDrop 成功后展开目标目录（否则重列了但目标折叠着，用户仍看不到拖进去的文件）",
      /markExpanded\(destDir, true\)/.test(dropBody) && /dst\.expanded = true/.test(dropBody),
    );
    // 反向约束：rebuild 的「接管缓存 → 零请求」早退分支必须保留，
    // 别为了修这个问题把它整段删掉（切右侧面板回来会退化成每次全量重列）。
    check(
      "rebuild 的缓存接管早退分支仍在（切面板零请求优化未被顺手删掉）",
      /adoptedTree && props\.root && adoptedTree\.root === props\.root/.test(pt) &&
        /TREE_REVALIDATE_MS/.test(pt),
    );
  }
  console.log("\n⑯ 静态约束：顶栏「最近项目」快捷下拉（文件与搜索框之间，显示当前项目名）");
  {
    const vspane = readFileSync(join(ROOT, "src/vue/components/business/vscode/VSCodePane.vue"), "utf8");
    const topbar = vspane.slice(vspane.indexOf('class="vs-topbar"'), vspane.indexOf('class="vs-body"'));
    const recBlock = vspane.slice(
      vspane.indexOf("顶栏「最近项目」快捷下拉"),
      vspane.indexOf("「最近项目」（已并入顶栏文件菜单的子菜单）"),
    );

    // 旧行为：顶栏只有「文件」按钮与搜索框，切项目必须进「文件 ▸ 打开最近」两级菜单。
    check(
      "下拉按钮落在顶栏「文件」按钮之后、spacer 之前（即文件与搜索框之间）",
      /vs-btn vs-btn-menu"[\s\S]*?<\/button>[\s\S]*?vs-recent-btn[\s\S]*?vs-spacer/.test(topbar),
    );
    check(
      "按钮上直接显示当前项目名（recentShortLabel）",
      /\{\{\s*recentShortLabel\s*\}\}/.test(topbar) &&
        /recentShortLabel = computed[\s\S]*?vsState\.projectDir/.test(recBlock),
    );
    check(
      "完整路径走 title（按钮只放得下短名，tooltip 补 projectLabel）",
      /:title="recentBtnTitle"/.test(topbar) && /recentBtnTitle = computed[\s\S]*?projectLabel\.value/.test(recBlock),
    );
    check(
      "下拉用独立 ContextMenu 实例（不与「文件」菜单抢同一套开关状态）",
      /<ContextMenu v-if="recMenuOpen" :items="recMenuItems" :x="recMenuX" :y="recMenuY"/.test(vspane) &&
        /cmOpen: recMenuOpen, cmX: recMenuX, cmY: recMenuY, openMenuAt: openRecMenuAt/.test(recBlock) &&
        // 按钮本身必须把 open 态接回去（否则菜单开了按钮不高亮，观感像没点中）
        /:class="\{ open: recMenuOpen \}"/.test(topbar),
    );
    check(
      "菜单条目取自 vsState.recentProjects（与文件菜单同源，切换/清空即时同步）",
      /vsState\.recentProjects\.map/.test(recBlock) && /onClick: \(\) => void onPickFolder\(p\)/.test(recBlock),
    );
    check(
      "当前项目在列表里打勾并置灰（不可能「切到已在的项目」）",
      /checked: p === vsState\.projectDir/.test(recBlock) && /disabled: p === vsState\.projectDir/.test(recBlock),
    );
    check(
      "每条可单独移除（trailing × → 确认后 store.forgetProject）",
      /trailing: \{[\s\S]*?forgetRecent\(p\)[\s\S]*?\}/.test(recBlock) && /store\.forgetProject\(p\)/.test(recBlock),
    );
    // 顶栏宽度有限（右侧还有快速打开）：compact 档必须退化成图标，否则项目名会挤掉搜索框。
    check(
      "紧凑档退化为定宽图标（项目名让位给地址栏与搜索）",
      /\.vs-topbar\.compact \.vs-recent-btn \{[^}]*width: 28px/.test(vspane),
    );
  }

  console.log("\n⑰ 静态约束：编辑器外观（行号列昼夜自适应 + 缩略图开关只留在编辑器右键菜单）");
  {
    const ce = readFileSync(join(ROOT, "src/vue/components/business/vscode/CodeEditor.vue"), "utf8");
    const dlg = readFileSync(join(ROOT, "src/vue/components/settings/SettingsDialog.vue"), "utf8");
    const locales = readFileSync(join(ROOT, "src/shared/locales.ts"), "utf8");
    const vspane = readFileSync(join(ROOT, "src/vue/components/business/vscode/VSCodePane.vue"), "utf8");
    const gut = ce.slice(ce.indexOf(":deep(.cm-gutters)"), ce.indexOf(".vs-code-editor :deep(.cm-editor)"));

    // 旧行为：行号列完全交给 oneDark（深色）/ CodeMirror 默认（浅色），不带边框、与宿主主题无关；
    // 这里要求三要素都走 --dsh-* 令牌 —— 令牌由 theme.ts 随宿主「跟随系统」重写，昼夜自动生效。
    check(
      "行号列底色 / 边框 / 墨色全部走 --dsh-* 令牌（随白天黑夜切换，不写死深色）",
      /background: var\(--dsh-bg2/.test(gut) &&
        /border-right: 1px solid var\(--dsh-border/.test(gut) &&
        /color: var\(--dsh-fg-weak/.test(gut),
    );
    check(
      "当前行行号用悬停面 + 主前景（与代码区当前行高亮呼应）",
      /cm-activeLineGutter\)[\s\S]*?background: var\(--dsh-hover[\s\S]*?color: var\(--dsh-fg/.test(ce),
    );
    check(
      "文件工作台设置里已移除编辑器缩略图开关（入口收敛到编辑器右键菜单）",
      !/vsMinimap/.test(dlg),
    );
    check(
      "缩略图开关仍可在编辑器右键菜单切换（设置项删了但能力没丢）",
      /label: t\("vsMinimap"\)[\s\S]*?prefs\.vsMinimap = !prefs\.vsMinimap/.test(vspane),
    );
    check(
      "中英文案同步改名（去掉「Minimap（右侧缩略图）」旧串）",
      /vsMinimap: "编辑器缩略图"/.test(locales) &&
        /vsMinimap: "Editor Thumbnail"/.test(locales) &&
        !/右侧缩略图|right thumbnail/.test(locales),
    );
  }
} finally {
  for (const f of [
    STUB_API,
    ENTRY,
    BUNDLE,
    STUB_VUE,
    ENTRY_SSE,
    BUNDLE_SSE,
    STUB_TERM_API,
    STUB_TERM_VUE,
    STUB_I18N,
    STUB_TOAST,
    ENTRY_TERM,
    BUNDLE_TERM,
    ENTRY_REPO,
    BUNDLE_REPO,
  ]) {
    try {
      unlinkSync(f);
    } catch {
      /* 不存在即忽略 */
    }
  }
}

console.log("\n" + pass + " passed, " + fail + " failed");
process.exitCode = fail ? 1 : 0;
