/**
 * 账号管理（Git / SVN 凭据）回归：走 HTTP 驱动**真实路由**，断言对外契约。
 *
 * ⛔ 隔离是硬要求：先把 `DSH_HOME` 指向临时目录，**再**动态 import 宿主产物。
 *    否则这脚本会往用户真实的 `~/.dsh/fileworkbench/accounts.json` 里写测试账号
 *    （workbench-store 的 stateDir() 每次调用都读 DSH_HOME，动态 import 只是双保险）。
 *
 * 覆盖点（都是本次新增的对外契约，后续重构若破坏必须在这里变红）：
 *   ① 列表初始为空；② 机密永不回传（新增/列表/更新/测试四条路径都查）；
 *   ③ hasSecret 标记；④ 缺必填项被拒；⑤ 重复账号（同类型+同主机+同 scope）被拒；
 *   ⑥ 三层匹配（最长 URL 前缀 → 主机级回落 → 他主机/异类型/空地址不命中）；
 *   ⑦ 更新留空 = 沿用原口令；⑧ 测试连通按类型分流且失败给出可读原因；
 *   ⑨ askpass 外壳已生成且**不含明文口令**；⑩ 删除幂等性（删两次第二次 404）；
 *   ⑪ 持久化确实落在隔离目录内；⑫ 克隆/检出对账号的选择：显式指定 > 按地址自动匹配
 *     （起本地 401 服务捕获 git 实际发出的 Authorization 头，未知 accountId → 404）。
 *
 * 说明：本脚本**没有 `--old` 红测模式**。账号管理是全新能力，HEAD 里没有可对照的旧行为
 * （旧代码连 `/accounts` 路由都不存在），回退到 HEAD 只会得到「路由 404」这种无信息量的红。
 * 真正需要防的是「以后重构把这些契约改坏了」，这一套断言正是为此而写——首次运行时它已经
 * 抓出一处真实缺口（两条 scope 相同的账号无法区分谁生效），并据此补上了重复校验。
 */
import { createServer } from "node:http";
import { existsSync, readFileSync, rmSync } from "node:fs";
import { mkdtemp } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

const home = await mkdtemp(join(tmpdir(), "fw-acc-home-"));
process.env.DSH_HOME = home;

const { makeFileWorkbenchRoutes } = await import("../lib/index.js");

const [route] = makeFileWorkbenchRoutes();
const PREFIX = route.path;
const server = createServer((req, res) => route.handler(req, res));
server.listen(0, "127.0.0.1");
await new Promise((r) => server.once("listening", r));
const port = server.address().port;

async function call(p, q = "", method = "GET", body) {
  const res = await fetch(`http://127.0.0.1:${port}${PREFIX}${p}${q}`, {
    method,
    headers: body ? { "content-type": "application/json" } : undefined,
    body: body ? JSON.stringify(body) : undefined,
  });
  return { status: res.status, body: await res.json() };
}

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

/* 造口令时带绝不该出现在任何响应里的哨兵串，用于「机密不回传」的断言。 */
const GIT_URL = "https://github.com/probe-owner/probe-repo.git";
const SHORT_PREFIX = "https://github.com/probe-owner/";
const SECRET_A = "s3cr3t-SENTINEL-A";
const SECRET_B = "s3cr3t-SENTINEL-B";

/* ① 初始为空 */
let r = await call("/accounts");
check("list starts empty", r.body.ok && Array.isArray(r.body.data.accounts) && r.body.data.accounts.length === 0);

/* ② 主机级默认账号：url 留空 = 该主机全部仓库 */
r = await call("/accounts/add", "", "POST", { kind: "git", host: "github.com", username: "user-a", secret: SECRET_A });
const a = r.body.data?.account;
check("add: host-level account (url empty)", r.body.ok && a?.host === "github.com" && a?.url === "", JSON.stringify(r.body));
check("add: secret never echoed", !JSON.stringify(r.body).includes(SECRET_A));
check("add: hasSecret true", a?.hasSecret === true);
const idA = a?.id;

/* ③ 列表整体不含明文口令 */
r = await call("/accounts");
check("list has 1 account", r.body.ok && r.body.data.accounts.length === 1);
check("list: secret never echoed", !JSON.stringify(r.body).includes(SECRET_A));

/* ④ 另一主机：主机由 URL 推导（表单里可不填 host） */
r = await call("/accounts/add", "", "POST", {
  kind: "git",
  url: "https://gitee.com/probe-owner/other-repo.git",
  username: "user-b",
  secret: SECRET_B,
});
const b = r.body.data?.account;
check("add: host derived from url (gitee.com)", r.body.ok && b?.host === "gitee.com" && b?.url !== "");

/* ⑤ 同主机（github.com）两条**长度不同**的 URL 前缀：用于验证「最长前缀胜出」 */
r = await call("/accounts/add", "", "POST", { kind: "git", url: SHORT_PREFIX, username: "scoped-short", secret: SECRET_A });
const scopedShort = r.body.data?.account;
check("add: url-scoped account (short prefix)", r.body.ok && scopedShort?.host === "github.com");
r = await call("/accounts/add", "", "POST", { kind: "git", url: GIT_URL, username: "scoped-long", secret: SECRET_A });
const scopedLong = r.body.data?.account;
check("add: url-scoped account (long prefix)", r.body.ok && scopedLong?.host === "github.com");

/* ⑥ 重复账号必须被拒：同类型+同主机+同 scope 无法区分谁生效 */
r = await call("/accounts/add", "", "POST", { kind: "git", url: GIT_URL, username: "dup", secret: SECRET_A });
check("add: duplicate scope rejected", !r.body.ok && r.status === 400, `status=${r.status}`);
r = await call("/accounts/add", "", "POST", { kind: "git", host: "github.com", username: "dup-default", secret: SECRET_A });
check("add: duplicate host-level rejected", !r.body.ok && r.status === 400, `status=${r.status}`);

/* 缺必填项 */
r = await call("/accounts/add", "", "POST", { kind: "git", host: "example.com", secret: "x" });
check("add without username rejected", !r.body.ok, JSON.stringify(r.body));
r = await call("/accounts/add", "", "POST", { kind: "git", host: "example.com", username: "u" });
check("add without secret rejected", !r.body.ok, JSON.stringify(r.body));

/* ⑦ 匹配：最长 URL 前缀胜出 */
r = await call("/accounts/match", `?kind=git&url=${encodeURIComponent(GIT_URL)}`);
check(
  "match: longest url-prefix wins",
  r.body.ok && r.body.data.account?.id === scopedLong?.id,
  `got ${r.body.data?.account?.username ?? "(null)"}，期望 scoped-long`,
);
/* 同主机：只命中短前缀时才用短前缀那条 */
r = await call("/accounts/match", `?kind=git&url=${encodeURIComponent("https://github.com/probe-owner/another.git")}`);
check(
  "match: shorter prefix used when longer does not apply",
  r.body.ok && r.body.data.account?.id === scopedShort?.id,
  `got ${r.body.data?.account?.username ?? "(null)"}，期望 scoped-short`,
);
/* 同主机但任何前缀都不匹配 → 回落到「url 空」的主机级默认账号 */
r = await call("/accounts/match", `?kind=git&url=${encodeURIComponent("https://github.com/other/thing.git")}`);
check("match: falls back to host-level default", r.body.ok && r.body.data.account?.id === idA);
/* 其它主机 / 类型不符 / 空地址 → 一律不命中（宁可走系统凭据，也不误配） */
r = await call("/accounts/match", `?kind=git&url=${encodeURIComponent("https://gitlab.com/x/y.git")}`);
check("match: no hit for unknown host", r.body.ok && r.body.data.account === null);
r = await call("/accounts/match", `?kind=svn&url=${encodeURIComponent(GIT_URL)}`);
check("match: kind is respected", r.body.ok && r.body.data.account === null);
r = await call("/accounts/match", "?kind=git&url=");
check("match: empty url does not match", r.body.ok && r.body.data.account === null);

/* ⑧ 更新：secret 留空 = 沿用原值；用户名可改 */
r = await call("/accounts/update", "", "POST", { id: idA, username: "user-a-renamed" });
check("update: username changed", r.body.ok && r.body.data.account.username === "user-a-renamed");
check("update: blank secret keeps existing (hasSecret)", r.body.data.account?.hasSecret === true);
check("update: secret never echoed", !JSON.stringify(r.body).includes(SECRET_A));
r = await call("/accounts/update", "", "POST", { id: "no-such-id", username: "x" });
check("update: unknown id rejected", !r.body.ok && r.status === 404, `status=${r.status}`);

/* ⑨ 测试连通：按类型分流；失败要给出可读原因（HTTP 层仍 200，结论在 data.ok） */
r = await call("/accounts/test", "", "POST", { kind: "svn", username: "u", secret: "p" });
check(
  "test: svn without url explains what is missing",
  r.status === 200 && r.body.ok && r.body.data.ok === false && /仓库地址/.test(r.body.data.detail),
  JSON.stringify(r.body.data),
);
/* git 指向必然不可达的地址：必须是「失败但说清原因」，且不泄露口令 */
r = await call("/accounts/test", "", "POST", {
  kind: "git",
  url: "https://127.0.0.1:1/nope.git",
  username: "u",
  secret: SECRET_A,
});
check(
  "test: unreachable git reports failure with reason",
  r.status === 200 && r.body.ok && r.body.data.ok === false && String(r.body.data.detail).length > 0,
  JSON.stringify(r.body.data),
);
check("test: secret never echoed", !JSON.stringify(r.body).includes(SECRET_A));
/* 草稿测试缺口令 → 明确拒绝，而不是拿空口令去连 */
r = await call("/accounts/test", "", "POST", { kind: "git", url: "https://127.0.0.1:1/nope.git", username: "u" });
check("test: draft without secret rejected", !r.body.ok, JSON.stringify(r.body));

/* ⑩ askpass 外壳：已生成、且文件里没有明文口令（口令只经环境变量传递） */
const shimDir = join(home, "fileworkbench");
const cmdPath = join(shimDir, "git-askpass.cmd");
const cjsPath = join(shimDir, "git-askpass.cjs");
check("askpass shim generated", existsSync(cmdPath) && existsSync(cjsPath));
if (existsSync(cmdPath)) {
  const cmdTxt = readFileSync(cmdPath, "utf8");
  check("askpass shim has no secret", !cmdTxt.includes(SECRET_A) && !cmdTxt.includes(SECRET_B));
  check("askpass shim invokes node", /node(\.exe)?/i.test(cmdTxt));
}
if (existsSync(cjsPath)) {
  check("askpass script reads secret from env", readFileSync(cjsPath, "utf8").includes("DSH_FW_GIT_SECRET"));
}

/* ⑪ 持久化落在隔离目录内（同时证明没写用户的 ~/.dsh） */
check("accounts.json persisted under isolated DSH_HOME", existsSync(join(shimDir, "accounts.json")));
const persisted = existsSync(join(shimDir, "accounts.json")) ? readFileSync(join(shimDir, "accounts.json"), "utf8") : "";
check("persisted file keeps the secret (plugin-local store)", persisted.includes(SECRET_A));

/* ⑫ 删除：删两次，第二次必须 404（幂等性 / 不存在语义） */
r = await call("/accounts/remove", "", "POST", { id: idA });
check("remove ok", r.body.ok && r.body.data.id === idA);
r = await call("/accounts/remove", "", "POST", { id: idA });
check("remove again → 404", !r.body.ok && r.status === 404, `status=${r.status}`);
r = await call("/accounts");
check("list reflects removal (4 → 3)", r.body.data.accounts.length === 3, `len=${r.body.data.accounts.length}`);

/* ⑬ 克隆 / 检出：弹窗里**显式选中的账号**必须优先于「按地址自动匹配」。
 *
 * 断言方式是关键：起一个本地 401 HTTP 服务，捕获 git **实际发出**的 Authorization 头。
 * 只断言「请求体里带了 accountId」是不够的 —— 那只证明字段被吃了，不证明凭据进了子进程。
 * 这里两端都验：同一主机上放两条账号（主机级默认 + URL 前缀精确），
 *   - 不传 accountId → 必须用前缀最长的那条（自动匹配）；
 *   - 传另一条的 id  → 必须换成它（显式胜出）。 */
const SECRET_HOST = "s3cr3t-SENTINEL-HOST";
const SECRET_SCOPED = "s3cr3t-SENTINEL-SCOPED";
const authSeen = [];
const probeSrv = createServer((req, res) => {
  authSeen.push(String(req.headers.authorization || ""));
  res.writeHead(401, { "www-authenticate": 'Basic realm="probe"', "content-type": "text/plain" });
  res.end("auth required");
});
probeSrv.listen(0, "127.0.0.1");
await new Promise((r) => probeSrv.once("listening", r));
const probePort = probeSrv.address().port;
const probeUrl = `http://127.0.0.1:${probePort}/probe-repo.git`;
const cloneDir = await mkdtemp(join(tmpdir(), "fw-acc-clone-"));
const basic = (u, p) => `Basic ${Buffer.from(`${u}:${p}`).toString("base64")}`;

r = await call("/accounts/add", "", "POST", {
  kind: "git",
  host: `127.0.0.1:${probePort}`,
  username: "host-default-user",
  secret: SECRET_HOST,
});
const idHost = r.body.data?.account?.id;
r = await call("/accounts/add", "", "POST", { kind: "git", url: probeUrl, username: "scoped-user", secret: SECRET_SCOPED });
const idScoped = r.body.data?.account?.id;
check("probe: two git accounts on one host (host-level + url-scoped)", !!idHost && !!idScoped);
r = await call("/accounts/match", `?kind=git&url=${encodeURIComponent(probeUrl)}`);
check("probe: auto match picks the url-scoped account", r.body.data?.account?.id === idScoped);

authSeen.length = 0;
r = await call("/git/clone", "", "POST", { url: probeUrl, dir: cloneDir, name: "auto-clone" });
check("clone (auto): reached the remote, failed as expected", !r.body.ok && r.status === 400, `status=${r.status}`);
check(
  "clone (auto): credentials injected to the child process",
  authSeen.includes(basic("scoped-user", SECRET_SCOPED)),
  authSeen.filter(Boolean).join(" | ") || "(no Authorization header observed)",
);

authSeen.length = 0;
r = await call("/git/clone", "", "POST", {
  url: probeUrl,
  dir: cloneDir,
  name: "explicit-clone",
  accountId: idHost,
});
check("clone (explicit): failed as expected", !r.body.ok && r.status === 400, `status=${r.status}`);
check(
  "clone (explicit): chosen account wins over auto match",
  authSeen.includes(basic("host-default-user", SECRET_HOST)),
  authSeen.filter(Boolean).join(" | ") || "(no Authorization header observed)",
);
check("clone: secret never echoed in the response", !JSON.stringify(r.body).includes(SECRET_HOST));

/* 未知 accountId 必须 404：证明这个字段真被读取，而不是被静默忽略、退回自动匹配
   （那会让「选了账号却用错凭据」变成一个查不出的哑失败）。 */
r = await call("/git/clone", "", "POST", {
  url: probeUrl,
  dir: cloneDir,
  name: "bad-account-clone",
  accountId: "no-such-account",
});
check("clone: unknown accountId → 404", r.status === 404, `status=${r.status}`);
r = await call("/svn/checkout", "", "POST", {
  url: probeUrl,
  dir: cloneDir,
  name: "bad-account-checkout",
  accountId: "no-such-account",
});
check("checkout: unknown accountId → 404", r.status === 404, `status=${r.status}`);

probeSrv.close();
rmSync(cloneDir, { recursive: true, force: true });

server.close();
// 临时 DSH_HOME 一并清掉（内含测试口令，不留在磁盘上）
rmSync(home, { recursive: true, force: true });

console.log(`\n[check-accounts] ${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
