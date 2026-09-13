// 本地预览（不依赖 DSH 运行）：把 host 路由 + Vite 产物拼成一个可直接打开的页面，
// 用于在浏览器里真实渲染 Vue 工作台（布局/视图切换/右键菜单的视觉回归）。
//
// 用法：node scripts/preview.mjs [port]
//   1) 用临时 DSH_HOME 与临时「工作区目录」，绝不读写用户真实的 ~/.dsh 状态；
//   2) host 路由（../lib/index.js）挂在 /api/dsh-file-workbench；
//   3) / 返回 dist/index.html，并注入 __DSH_FILE_WORKBENCH__ 桩（会话目录/侧栏查看器）。
import { createServer } from "node:http";
import { mkdtemp, mkdir, readFile, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const port = Number(process.argv[2] ?? 5178);
const PREFIX = "/api/dsh-file-workbench";

// —— 隔离状态：DSH_HOME 指向临时目录，避免污染真实配置 ——
const stateHome = await mkdtemp(join(tmpdir(), "fw-preview-home-"));
process.env.DSH_HOME = stateHome;

// —— 造一个临时「工作区」目录树，供浏览/导航树展示 ——
const workRoot = await mkdtemp(join(tmpdir(), "fw-preview-ws-"));
await mkdir(join(workRoot, "src", "components"), { recursive: true });
await mkdir(join(workRoot, "docs"), { recursive: true });
await writeFile(join(workRoot, "package.json"), JSON.stringify({ name: "preview-app" }, null, 2));
await writeFile(join(workRoot, "README.md"), "# Preview\n");
await writeFile(join(workRoot, "src", "main.ts"), "export const hi = 1;\n");
await writeFile(join(workRoot, "src", "components", "A.vue"), "<template/>\n");
await writeFile(join(workRoot, "docs", "guide.md"), "# Guide\n");

const { makeFileWorkbenchRoutes } = await import("../lib/index.js");
const [route] = makeFileWorkbenchRoutes();

// 把工作区目录设为默认 root（前端 ensureRoot 会读回）。
const setRoot = () =>
  fetch(`http://127.0.0.1:${port}${PREFIX}/root`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ path: workRoot }),
  });

// —— 页面外壳：注入桥接桩，让工作台拿到「会话目录」而不是回落到主目录 ——
// 注意用 dist/index.html：lib/web/index.html 在构建收尾时会被删除（host 只对外提供 assets）。
const indexHtml = await readFile(join(root, "dist", "index.html"), "utf8");
const stub = `<script>
window.__DSH_FILE_WORKBENCH__ = {
  apiBase: "${PREFIX}",
  getSessionDir: () => ${JSON.stringify(workRoot)},
  getSessionId: () => "preview-session",
  openInSidebar: () => { /* 预览环境无 DSH 侧栏查看器，静默忽略 */ },
  pendingOpens: [],
};
</script>`;
const page = indexHtml.replace("<head>", `<head>\n    ${stub}`);

const server = createServer((req, res) => {
  const url = req.url ?? "/";
  if (url === "/" || url.startsWith("/?")) {
    res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    res.end(page);
    return;
  }
  void route.handler(req, res);
});

server.listen(port, "127.0.0.1", async () => {
  await setRoot().catch(() => {});
  console.log(`preview: http://127.0.0.1:${port}/`);
  console.log(`  workspace: ${workRoot}`);
  console.log(`  DSH_HOME:  ${stateHome}`);
});
