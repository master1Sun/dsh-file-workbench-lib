// 冒烟测试：不依赖 DSH 运行，直接用一个临时目录驱动 host 的文件浏览路由，验证
// root/list/read/save/search/mkdir/rename/remove 全链路可用。
import { createServer } from "node:http";
import { mkdtemp, mkdir, writeFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { makeFileWorkbenchRoutes } from "../lib/index.js";

const base = await mkdtemp(join(tmpdir(), "fw-test-"));
const proj = join(base, "myproj");
await mkdir(join(proj, "src", "components"), { recursive: true });
await writeFile(join(proj, "package.json"), JSON.stringify({ name: "x" }));
await writeFile(join(proj, "src", "main.ts"), "export const hi = 1;\n");
await writeFile(join(proj, "src", "components", "A.vue"), "<template/>\n");
await writeFile(join(proj, "README.md"), "# Hi\n\n**bold**\n");

const [route] = makeFileWorkbenchRoutes();
const PREFIX = route.path;
const server = createServer((req, res) => route.handler(req, res));
server.listen(0, "127.0.0.1");
await new Promise((r) => server.once("listening", r));
const port = server.address().port;
const u = (p, q = "") => `http://127.0.0.1:${port}${PREFIX}${p}${q}`;

async function call(p, q = "", method = "GET", body) {
  const res = await fetch(u(p, q), {
    method,
    headers: body ? { "content-type": "application/json" } : undefined,
    body: body ? JSON.stringify(body) : undefined,
  });
  return res.json();
}

let pass = 0, fail = 0;
function check(label, cond) {
  if (cond) { pass++; console.log(`  ok  ${label}`); }
  else { fail++; console.log(`  FAIL ${label}`); }
}

// set root
let r = await call("/root", "", "POST", { path: proj });
check("set root", r.ok && r.data.root === proj);
// root get
r = await call("/root");
check("get root", r.ok && r.data.root === proj);
// list
r = await call("/list");
check("list root", r.ok && r.data.crumbs.length === 1);
check("list has package.json + README", r.data.entries.some((e) => e.name === "package.json") && r.data.entries.some((e) => e.name === "README.md"));
check("dirs sorted first (src)", r.data.entries[0].name === "src");
// traversing a file-level listing that escapes root → forbidden
r = await call("/list", `?path=${encodeURIComponent(base)}`);
check("escapes root forbidden", !r.ok && r.error.includes("outside"));
// read text
r = await call("/read", `?path=${encodeURIComponent(join(proj, "src", "main.ts"))}`);
check("read text", r.ok && r.data.text.includes("hi"));
// read markdown
r = await call("/read", `?path=${encodeURIComponent(join(proj, "README.md"))}`);
check("read markdown kind", r.ok && r.data.kind === "markdown");
// save
r = await call("/save", "", "POST", { path: join(proj, "src", "main.ts"), content: "export const hi = 2;\n" });
check("save", r.ok);
r = await call("/read", `?path=${encodeURIComponent(join(proj, "src", "main.ts"))}`);
check("save applied", r.data.text.includes("= 2"));
// search: 匹配「条目名包含子串」，目录名也包括（src/components 命中 'component'）
r = await call("/search", "?q=component");
check("search hits src/components", r.ok && r.data.matches.includes("src/components"));
r = await call("/search", "?q=a.vue");
check("search hits A.vue", r.ok && r.data.matches.includes("src/components/A.vue"));
// mkdir
r = await call("/mkdir", "", "POST", { path: join(proj, "lib") });
check("mkdir", r.ok);
// rename
r = await call("/rename", "", "POST", { from: join(proj, "src", "main.ts"), to: join(proj, "src", "entry.ts") });
check("rename", r.ok);
// remove
r = await call("/remove", `?path=${encodeURIComponent(join(proj, "lib"))}`, "DELETE");
check("remove", r.ok);
// path traversal prevented on save outside root
r = await call("/save", "", "POST", { path: join(base, "evil.txt"), content: "x" });
check("save outside root forbidden", !r.ok);

// asset serving: lib/web 静态资源可经 host 路由访问（Vue 产物存活检查）
import { readdirSync } from "node:fs";
import { WEB_DIR } from "../lib/index.js";
const assetsDir = join(WEB_DIR, "assets");
let assetOk = false;
if (readdirSync(new URL("../web/assets", import.meta.url), { withFileTypes: true }).length) {
// 直接校验 WEB_DIR 下的首个静态文件能被取到
import { join as pathJoin } from "node:path";
const webRoot = WEB_DIR;
const files = readdirSync(webRoot, { withFileTypes: true });
const hasAssets = files.some((f) => f.isDirectory() && f.name === "assets");
const cssFile = readdirSync(join(webRoot, "assets"))[0];
const okRes = await fetch(u(`/assets/${cssFile}`));
assetOk = okRes.status === 200 && (okRes.headers.get("content-type") ?? "").length > 0;
check(`asset serves 200 (${cssFile})`, assetOk);
check("WEB_DIR points into lib/web", webRoot.includes("lib" + pathJoin.sep + "web"));
check("lib/web/assets exists", hasAssets);
}
const missingRes = await fetch(u("/assets/definitely-missing.css"));
check("asset 404 for missing file", missingRes.status === 404);
const existsRes = await fetch(u("/.no-such"));
check("unknown route 404", existsRes.status === 404);
void assetOk;

console.log(`\n${pass} passed, ${fail} failed`);
server.close();
await rm(base, { recursive: true, force: true });
process.exit(fail ? 1 : 0);