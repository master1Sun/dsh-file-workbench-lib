/**
 * 纯后端自更新：启动时检测 git 仓库更新版本并自动安装（替换本插件包目录）。
 * 无需前端参与，更新完成后重启 `dsh web` 生效。
 *
 * 策略：
 *  - 版本源：插件运行包根的 package.json version（当前） vs `git ls-remote --tags`（最新 semver）。
 *  - 仅当最新 tag 严格高于当前版本才更新（不降级）。
 *  - 安装：clone 指定 tag 到系统临时目录，用临时目录整体替换 lib / cordis.patch.yml / package.json（带回滚）。
 *  - 全部静默：网络失败 / 无更高版本 / git 不可用 / 校验不符，均静默跳过，不阻断插件启动。
 */
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { cp, readFile, rename, rm, mkdir, stat } from "node:fs/promises";
import { dirname, join } from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";

const execFileP = promisify(execFile);

/** 当前插件的运行包根目录（lib/ 的上一级）。 */
const PACKAGE_ROOT = dirname(dirname(fileURLToPath(import.meta.url)));

/** 仓库缺省值；优先读取包内 package.json 的 repository.url。 */
const DEFAULT_REPO = "https://github.com/master1Sun/dsh-file-workbench-lib.git";

/** 更新命中后写入的目录（残留即表示已尝试过回滚，供人工排查）。 */
const METADATA_FILES = ["lib", "package.json", "cordis.patch.yml"];

type JsonLike = { [k: string]: unknown } | null;

async function readJson(p: string): Promise<JsonLike> {
  try {
    return JSON.parse(await readFile(p, "utf8")) as JsonLike;
  } catch {
    return null;
  }
}

/** 忽略前导 "v" 的裸版本号，供比较。 */
function bare(tag: string): string {
  return tag.replace(/^v/i, "");
}

/** 轻量语义化比较：a>b→1, a<b→-1, 相等→0；非法段按 0 处理。 */
function semverCompare(a: string, b: string): number {
  const pa = a.split(".").map((n) => (Number.isFinite(Number(n)) ? Number(n) : 0));
  const pb = b.split(".").map((n) => (Number.isFinite(Number(n)) ? Number(n) : 0));
  const len = Math.max(pa.length, pb.length);
  for (let i = 0; i < len; i++) {
    const x = pa[i] ?? 0;
    const y = pb[i] ?? 0;
    if (x > y) return 1;
    if (x < y) return -1;
  }
  return 0;
}

/**
 * 用 run 本地 git clone 指定 tag 到目标目录，并把发布内容归落到包根。
 * 替换分两步 + 回滚，避免把运行中的包目录破坏成中间态。
 */
async function applyUpdate(repo: string, rawTag: string): Promise<void> {
  // 1) clone 到系统临时目录
  const staging = join(tmpdir(), `fw-update-${Date.now()}`);
  await rm(staging, { recursive: true, force: true });
  await mkdir(staging, { recursive: true });
  try {
    await execFileP(
      "git",
      ["clone", "--depth", "1", "--branch", rawTag, "--single-branch", "--", repo, staging],
      { timeout: 120_000, windowsHide: true },
    );

    // 2) 校验 tag 与包版本一致、lib 存在，防止解到错误分支。
    const pkg = await readJson(join(staging, "package.json"));
    if (!pkg) throw new Error("远端包缺少 package.json");
    if (bare(String(pkg.version ?? "")) !== bare(rawTag)) {
      throw new Error(`tag(${rawTag}) 与包版本(${String(pkg.version)})不符`);
    }
    await stat(join(staging, "lib"));

    // 3) 在包根侧组装 next 并原子替换，失败可回滚。
    const next = join(PACKAGE_ROOT, ".fw-update-next");
    const old = join(PACKAGE_ROOT, ".fw-update-old");
    await rm(next, { recursive: true, force: true });
    await rm(old, { recursive: true, force: true });
    await mkdir(next, { recursive: true });
    await cp(join(staging, "lib"), join(next, "lib"), { recursive: true });
    await cp(join(staging, "package.json"), join(next, "package.json"));
    await cp(join(staging, "cordis.patch.yml"), join(next, "cordis.patch.yml"));

    // 把当前发布文件移到 old 暂存
    for (const f of METADATA_FILES) {
      try {
        await rename(join(PACKAGE_ROOT, f), join(old, f));
      } catch {
        /* 首次运行没有旧文件 */
      }
    }
    // 把 next 移入包根；任一步失败都尝试从 old 回滚
    try {
      for (const f of METADATA_FILES) {
        await rename(join(next, f), join(PACKAGE_ROOT, f));
      }
      await rm(next, { recursive: true, force: true }).catch(() => undefined);
    } catch (error) {
      for (const f of METADATA_FILES) {
        await rm(join(PACKAGE_ROOT, f), { recursive: true, force: true }).catch(() => undefined);
        try {
          await rename(join(old, f), join(PACKAGE_ROOT, f));
        } catch {
          /* 无旧文件 */
        }
      }
      throw error;
    }
    await rm(old, { recursive: true, force: true }).catch(() => undefined);
    console.log(`[dsh-file-workbench] 已自动更新到 ${rawTag}，请重启 dsh web 生效`);
  } finally {
    await rm(staging, { recursive: true, force: true }).catch(() => undefined);
  }
}

/** 启动自动更新：检测远程最高版本，高于当前则安装新版本。任何异常均静默。 */
export async function autoUpdate(): Promise<void> {
  try {
    const local = await readJson(join(PACKAGE_ROOT, "package.json"));
    const current = bare(String(local?.version ?? ""));
    if (!current) return;

    const repoRaw = (local?.repository as JsonLike)?.url as string | undefined;
    const repo = String(repoRaw ?? DEFAULT_REPO).trim().replace(/^(.+?\.git$)/, "$1").replace(/\/+$/, "");
    if (!/^(https?:\/\/|git@)/.test(repo)) return;

    // 枚举远程 tags，取语义化版本最高者（保留原始 tag 名用于分支 clone）。
    const { stdout } = await execFileP("git", ["ls-remote", "--tags", repo], { timeout: 15_000, windowsHide: true });
    let latestRaw = "";
    let latestSem = "";
    for (const line of stdout.split("\n")) {
      const m = /refs\/tags\/(.*?)(\^\{\})?$/.exec(line.trim());
      if (!m) continue;
      const raw = m[1];
      const sem = bare(raw);
      if (!/^\d+\.\d+\.\d+/.test(sem)) continue;
      if (!latestSem || semverCompare(sem, latestSem) > 0) {
        latestSem = sem;
        latestRaw = raw;
      }
    }
    if (!latestSem) return;
    if (semverCompare(latestSem, current) <= 0) return; // 已是最新或不允许降级

    await applyUpdate(repo, latestRaw);
  } catch (error) {
    // 静默：自更新失败不应阻塞或报错给用户。
    try {
      console.error("[dsh-file-workbench] self-update skipped:", (error as Error).message);
    } catch {
      /* ignore */
    }
  }
}