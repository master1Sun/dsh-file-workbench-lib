/**
 * 前端纯逻辑回归（不依赖宿主、不依赖浏览器）：只读接口缓存 `readCache`。
 *
 * 为什么单列一份：这份缓存治的是「切右侧面板 tab → 整个 Vue 应用卸载重建 → 所有读请求重打一遍」
 * （`cachedRead` 的注释里有完整成因）。它的每条性质都**只在运行时行为里**体现 ——
 * 「第二次没发请求」「并发只发一次」「写后失效」在类型检查与构建里全都看不出来，
 * 宿主 smoke 也覆盖不到（那是后端路由的事）。所以必须有这份可执行的断言。
 *
 * 铁律：断言必须能抓到旧行为。末尾的「判别力自证」把**没有缓存的旧实现**（每次调用都发请求）
 * 原样跑一遍，确认同样的断言在它身上会红 —— 否则说明断言写得太松（例如把命中断言写成了
 * 「返回值相等」，而无缓存实现返回值也相等，就抓不到）。
 *
 * 用法：node scripts/check-readcache.mjs
 */
import { build } from "esbuild";
import { writeFileSync, unlinkSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const ENTRY = join(ROOT, "_rc-entry.ts");
const BUNDLE = join(ROOT, "_rc-bundle.mjs");

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

/** 微任务 + 宏任务都排空，确保已 resolve 的 Promise 回调已跑完。 */
const flush = () => new Promise((r) => setTimeout(r, 0));

/** 造一个可计数的假 loader。 */
function loader(value) {
  const fn = () => {
    fn.calls++;
    return Promise.resolve(value);
  };
  fn.calls = 0;
  return fn;
}

writeFileSync(ENTRY, 'export * from "./src/vue/composables/core/readCache";\n');

try {
  await build({
    entryPoints: [ENTRY],
    outfile: BUNDLE,
    bundle: true,
    format: "esm",
    platform: "node",
    logLevel: "warning",
  });

  const { cachedRead, invalidateRead, readCacheKeys, resetReadCache, READ_TTL_MS } =
    await import(pathToFileURL(BUNDLE).href);

  console.log("① 同一 key 的第二次读取命中缓存（不发请求）");
  {
    resetReadCache();
    const load = loader({ dirs: ["a"] });
    const r1 = await cachedRead("list:vscode:D:\\proj", load);
    const r2 = await cachedRead("list:vscode:D:\\proj", load);
    check("loader 只被调用 1 次", load.calls === 1, "calls=" + load.calls);
    check("两次返回同一结果", r1 === r2);
  }

  console.log("\n② 不同 key 互不命中");
  {
    resetReadCache();
    const a = loader(1);
    const b = loader(2);
    await cachedRead("list:0:/x", a);
    await cachedRead("list:0:/y", b);
    check("两个 key 各发一次", a.calls === 1 && b.calls === 1, `a=${a.calls} b=${b.calls}`);
  }

  console.log("\n③ 在途合并：并发同 key 只发一次");
  {
    resetReadCache();
    let resolveIt;
    let calls = 0;
    const slow = () =>
      new Promise((r) => {
        calls++;
        resolveIt = () => r({ ok: true });
      });
    const p1 = cachedRead("gitstatus:D:\\proj", slow);
    const p2 = cachedRead("gitstatus:D:\\proj", slow);
    const p3 = cachedRead("gitstatus:D:\\proj", slow);
    check("三路并发时 loader 只被调用 1 次", calls === 1, "calls=" + calls);
    resolveIt();
    await flush();
    const [v1, v2, v3] = await Promise.all([p1, p2, p3]);
    check("三路拿到同一份结果", v1 === v2 && v2 === v3);
  }

  console.log("\n④ 超过 TTL 后重新发起");
  {
    resetReadCache();
    const load = loader("v");
    await cachedRead("list:0:/t", load, 20);
    await cachedRead("list:0:/t", load, 20);
    check("TTL 内不重发（calls=1）", load.calls === 1, "calls=" + load.calls);
    await new Promise((r) => setTimeout(r, 40));
    await cachedRead("list:0:/t", load, 20);
    check("过期后重发（calls=2）", load.calls === 2, "calls=" + load.calls);
    check("默认 TTL 是 30s", READ_TTL_MS === 30_000, String(READ_TTL_MS));
  }

  console.log("\n⑤ 按前缀失效只清匹配项");
  {
    resetReadCache();
    const l1 = loader(1);
    const l2 = loader(2);
    const l3 = loader(3);
    await cachedRead("gitstatus:/p", l1);
    await cachedRead("gitlog:/p:20", l2);
    await cachedRead("list:0:/p", l3);
    const n = invalidateRead("git");
    check("返回清掉的条数 = 2", n === 2, "n=" + n);
    await cachedRead("gitstatus:/p", l1);
    await cachedRead("gitlog:/p:20", l2);
    await cachedRead("list:0:/p", l3);
    check("git 前缀被清（两个 git loader 各重发）", l1.calls === 2 && l2.calls === 2, `l1=${l1.calls} l2=${l2.calls}`);
    check("非 git 前缀未受影响（list 仍命中）", l3.calls === 1, "l3=" + l3.calls);
  }

  console.log("\n⑥ 无参失效清空全部");
  {
    resetReadCache();
    const l1 = loader(1);
    const l2 = loader(2);
    await cachedRead("gitstatus:/p", l1);
    await cachedRead("list:0:/p", l2);
    const n = invalidateRead();
    check("返回全部条数 = 2", n === 2, "n=" + n);
    check("缓存键已空", readCacheKeys().length === 0);
    await cachedRead("gitstatus:/p", l1);
    check("全部重发", l1.calls === 2, "l1=" + l1.calls);
  }

  console.log("\n⑦ 读失败不入缓存（下次仍会重试）");
  {
    resetReadCache();
    let calls = 0;
    const boom = () => {
      calls++;
      return Promise.reject(new Error("host down"));
    };
    await cachedRead("list:0:/e", boom).catch(() => {});
    await flush();
    check("失败后缓存键为空", readCacheKeys().length === 0, readCacheKeys().join(","));
    await cachedRead("list:0:/e", boom).catch(() => {});
    check("再次读取会重试（calls=2）", calls === 2, "calls=" + calls);
  }

  console.log("\n⑧ 失败后删除在途登记（不会把失败 Promise 粘住）");
  {
    resetReadCache();
    let calls = 0;
    const boom = () => {
      calls++;
      return Promise.reject(new Error("nope"));
    };
    const p = cachedRead("list:0:/f", boom);
    // 失败发生的瞬间，inflight 必须被清掉，否则后续调用会一直拿到同一个失败 Promise。
    await p.catch(() => {});
    await flush();
    const ok = loader("recovered");
    await cachedRead("list:0:/f", ok);
    check("失败后可用新 loader 正常取到值", ok.calls === 1, "ok.calls=" + ok.calls);
  }

  console.log("\n⑨ 判别力自证：无缓存的旧实现会被同样的断言抓住");
  {
    // 修复前的形态：直接透传请求，没有任何缓存/合并。
    const legacyRead = (_key, load) => load();

    const load = loader("v");
    await legacyRead("list:0:/z", load);
    await legacyRead("list:0:/z", load);
    check("旧实现下「第二次不发请求」的断言为假（calls=2）", load.calls === 2, "calls=" + load.calls);

    let calls = 0;
    const slow = () =>
      new Promise((r) => {
        calls++;
        setTimeout(() => r(1), 5);
      });
    const ps = [legacyRead("k", slow), legacyRead("k", slow), legacyRead("k", slow)];
    check("旧实现下「并发只发一次」的断言为假（calls=3）", calls === 3, "calls=" + calls);
    await Promise.all(ps);
  }
} finally {
  for (const f of [ENTRY, BUNDLE]) {
    try {
      unlinkSync(f);
    } catch {
      /* 不存在即忽略 */
    }
  }
}

console.log("\n" + pass + " passed, " + fail + " failed");
process.exitCode = fail ? 1 : 0;
