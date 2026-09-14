/**
 * 自更新：优先走 dsh 官方更新通道（dshmarket 的 update-api-v1），
 * 市场不可达 / 无更新 / 未启动时，回退到 GitHub tag（git clone 覆盖 lib/）。
 *
 * 官方通道（主路径）：
 *   GET  /dsh-market/api/v1/updates?name=<pkg>&force=1   探测是否有更新
 *   POST /dsh-market/api/v1/updates                       发起更新（pnpm 安装 + patch 重挂）
 *   GET  /dsh-market/api/v1/operations?operationId=<id>   轮询进度
 * 契约见 dshmarket 自带的 `UPDATE-API-V1.md`。该 API 写操作要求同源（请求 `Origin`
 * 须与 `Host` 一致），故用宿主 webServer 端口拼回环地址调用，与浏览器内点「更新」等价。
 *
 * GitHub 兜底（次路径）：
 *   从 GitHub Releases/Tags API 取最新 semver tag，与已安装版本比较；若更新则
 *   `git clone --branch <tag>` 后覆盖安装目录的 `lib/`（运行期产物）并同步 package.json
 *   的 version。注意：覆盖正在运行的 lib/ 不会中断当前进程（Node 已缓存模块），但需
 *   重启 dsh web 才能加载新文件——与官方通道行为一致。
 *
 * 全部静默：任一通道失败均只记一条日志并跳过，不阻断插件启动。
 */
import { readFile, writeFile, rm, cp, mkdtemp } from "node:fs/promises";
import { dirname, join } from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import type { Context } from "@deepseek-ai/cordis";

const execFileP = promisify(execFile);

const PACKAGE_ROOT = dirname(dirname(fileURLToPath(import.meta.url)));

/** GitHub 兜底源仓库（与 git remote 一致）。市场通道不可用时从此处取更新。 */
const GITHUB_REPO = "master1Sun/dsh-file-workbench-lib";
const GITHUB_API = "https://api.github.com";

type JsonLike = { [k: string]: unknown } | null;

async function readJson(p: string): Promise<JsonLike> {
  try {
    return JSON.parse(await readFile(p, "utf8")) as JsonLike;
  } catch {
    return null;
  }
}

/** 本插件在 dsh 插件市场里的包名（package.json 的 name）。 */
async function packageName(): Promise<string> {
  const pkg = await readJson(join(PACKAGE_ROOT, "package.json"));
  return typeof pkg?.name === "string" ? pkg.name : "";
}

/** 已安装版本（package.json 的 version）。 */
async function currentVersion(): Promise<string> {
  const pkg = await readJson(join(PACKAGE_ROOT, "package.json"));
  return typeof pkg?.version === "string" ? pkg.version : "";
}

/**
 * 取宿主 webServer 监听的回环基址；拿不到端口则返回 null（市场不可达）。
 * 运行期 `ctx.webServer` 是 `@deepseek-ai/dsh-host-webserver` 的 WebServer 实例，
 * 提供 `port`（实际监听端口）与 `config.host`（绑定地址）。
 */
function localOrigin(ctx: Context): string | null {
  const ws = ctx.webServer as unknown as { port?: number; config?: { host?: string } } | undefined;
  const port = ws?.port;
  if (typeof port !== "number" || port <= 0 || port > 65535) return null;
  return `http://127.0.0.1:${port}`;
}

/* ------------------------------------------------------------------ *
 * 官方市场通道
 * ------------------------------------------------------------------ */

/** 探测市场是否有更高版本可用。 */
async function checkUpdate(origin: string, name: string): Promise<boolean> {
  const url = `${origin}/dsh-market/api/v1/updates?name=${encodeURIComponent(name)}&force=1`;
  const res = await fetch(url, { headers: { accept: "application/json" } });
  if (!res.ok) return false;
  const body = (await res.json().catch(() => null)) as {
    package?: { updateAvailable?: boolean };
  } | null;
  return Boolean(body?.package?.updateAvailable);
}

/** 发起官方更新，返回 operationId；非 202 或解析失败返回 null。 */
async function startUpdate(origin: string, name: string): Promise<string | null> {
  const res = await fetch(`${origin}/dsh-market/api/v1/updates`, {
    method: "POST",
    headers: { "content-type": "application/json", origin },
    body: JSON.stringify({ packageName: name, force: true }),
  });
  if (res.status !== 202) return null;
  const body = (await res.json().catch(() => null)) as {
    operation?: { operationId?: string };
  } | null;
  return body?.operation?.operationId ?? null;
}

/** 轮询更新进度，直到终态或超时。 */
async function pollOperation(origin: string, operationId: string, timeoutMs = 120_000): Promise<void> {
  const deadline = Date.now() + timeoutMs;
  const url = `${origin}/dsh-market/api/v1/operations?operationId=${encodeURIComponent(operationId)}`;
  // 轮询间隔 2s：市场更新涉及 pnpm 安装，属分钟级操作，无需高频。
  while (Date.now() < deadline) {
    const res = await fetch(url, { headers: { accept: "application/json" } }).catch(() => null);
    const body = res && res.ok
      ? ((await res.json().catch(() => null)) as {
          operation?: { state?: string; outcome?: { restartRequired?: boolean } };
        } | null)
      : null;
    const op = body?.operation;
    if (op?.state === "succeeded") {
      console.log(
        `[dsh-file-workbench] 已通过 dsh 插件市场更新到新版本${
          op.outcome?.restartRequired ? "，请重启 dsh web 生效" : ""
        }`,
      );
      return;
    }
    if (op?.state === "failed" || op?.state === "cancelled" || op?.state === "rolled-back") {
      console.log("[dsh-file-workbench] dsh 插件市场更新未成功，已跳过");
      return;
    }
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }
}

/* ------------------------------------------------------------------ *
 * GitHub tag 兜底
 * ------------------------------------------------------------------ */

function normalizeTag(t: string): string {
  return t.replace(/^v/i, "").trim();
}

function parseVersion(v: string): number[] {
  return normalizeTag(v)
    .split(".")
    .map((s) => {
      const n = parseInt(s, 10);
      return Number.isFinite(n) ? n : 0;
    });
}

/** 数值化比较：a > b 返回 >0，a < b 返回 <0，相等返回 0。仅比较 semver 段。 */
function compareVersion(a: string, b: string): number {
  const pa = parseVersion(a);
  const pb = parseVersion(b);
  const len = Math.max(pa.length, pb.length);
  for (let i = 0; i < len; i++) {
    const x = pa[i] ?? 0;
    const y = pb[i] ?? 0;
    if (x !== y) return x - y;
  }
  return 0;
}

/** 取 GitHub 最新 semver tag（优先 Releases/latest，回退到 Tags 列表取最高）。 */
async function latestGitHubTag(): Promise<string | null> {
  const headers = {
    accept: "application/vnd.github+json",
    "user-agent": "dsh-file-workbench",
  };
  // 1) Releases/latest（最贴近「发布版本」语义）。
  try {
    const res = await fetch(`${GITHUB_API}/repos/${GITHUB_REPO}/releases/latest`, { headers });
    if (res.ok) {
      const body = (await res.json().catch(() => null)) as { tag_name?: string } | null;
      if (body?.tag_name && /^\d+(\.\d+)*$/.test(normalizeTag(body.tag_name))) {
        return body.tag_name;
      }
    }
  } catch {
    /* 忽略，走 tags 列表 */
  }
  // 2) Tags 列表：取数值最高的 semver tag。
  try {
    const res = await fetch(`${GITHUB_API}/repos/${GITHUB_REPO}/tags?per_page=30`, { headers });
    if (!res.ok) return null;
    const tags = ((await res.json().catch(() => [])) as { name?: string }[]) ?? [];
    let best: string | null = null;
    for (const t of tags) {
      const name = t.name ?? "";
      if (!/^v?\d+(\.\d+)*$/.test(name)) continue;
      if (best === null || compareVersion(name, best) > 0) best = name;
    }
    return best;
  } catch {
    return null;
  }
}

/** 通过 git clone 覆盖安装目录的 lib/，并同步 package.json 的 version。 */
async function applyGitTag(tag: string): Promise<void> {
  const tmp = await mkdtemp(join(tmpdir(), "dsh-fw-"));
  try {
    await execFileP(
      "git",
      ["clone", "--depth", "1", "--branch", tag, `https://github.com/${GITHUB_REPO}.git`, tmp],
      { timeout: 180_000 },
    );
    const srcLib = join(tmp, "lib");
    const destLib = join(PACKAGE_ROOT, "lib");
    // 先清旧 lib（含历史死文件），失败不阻断后续覆盖拷贝。
    try {
      await rm(destLib, { recursive: true, force: true });
    } catch {
      /* ignore */
    }
    await cp(srcLib, destLib, { recursive: true });
    // 同步版本号，避免下次自更新误判。
    const pkg = await readJson(join(PACKAGE_ROOT, "package.json"));
    if (pkg && typeof pkg === "object" && !Array.isArray(pkg)) {
      pkg.version = normalizeTag(tag);
      await writeFile(
        join(PACKAGE_ROOT, "package.json"),
        `${JSON.stringify(pkg, null, 2)}\n`,
        "utf8",
      );
    }
    console.log(`[dsh-file-workbench] 已通过 GitHub 更新到 ${tag}，请重启 dsh web 生效`);
  } finally {
    await rm(tmp, { recursive: true, force: true }).catch(() => undefined);
  }
}

/** GitHub tag 兜底：市场通道未生效时，按 tag 比较版本并 git 更新。 */
async function gitTagUpdate(): Promise<void> {
  const current = await currentVersion();
  if (!current) return;
  const latest = await latestGitHubTag();
  if (!latest) return; // 无法探测 GitHub，静默跳过
  if (compareVersion(latest, current) <= 0) return; // 已是最新（含市场版本更高的情况）
  console.log(
    `[dsh-file-workbench] 市场无更新，检测到 GitHub 新版本 ${latest}（当前 ${current}），开始 git 更新…`,
  );
  await applyGitTag(latest);
}

/* ------------------------------------------------------------------ *
 * 入口
 * ------------------------------------------------------------------ */

/**
 * 启动自更新：优先官方市场通道；市场不可用 / 无更新 / 未启动，则回退 GitHub tag。
 * 任何异常均静默 —— 自更新失败不应阻塞或报错给用户。
 */
export async function autoUpdate(ctx: Context): Promise<void> {
  try {
    const name = await packageName();
    if (!name) return;

    // 1) 官方市场通道（主路径）。
    let updatedViaMarket = false;
    const origin = localOrigin(ctx);
    if (origin) {
      if (await checkUpdate(origin, name)) {
        const operationId = await startUpdate(origin, name);
        if (operationId) {
          await pollOperation(origin, operationId);
          updatedViaMarket = true;
        }
      }
    }

    // 2) GitHub tag 兜底：市场未生效才走。
    if (!updatedViaMarket) {
      await gitTagUpdate();
    }
  } catch (error) {
    // 静默：自更新失败不应阻塞或报错给用户。
    try {
      console.error("[dsh-file-workbench] self-update skipped:", (error as Error).message);
    } catch {
      /* ignore */
    }
  }
}
