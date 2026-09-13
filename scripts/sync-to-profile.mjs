// 把本地构建产物同步到 dsh profile 的插件安装目录。
//   node scripts/sync-to-profile.mjs [profileName]
// 同步 lib/ 全部产出 + package.json + cordis.patch.yml，完成后重启 `dsh web` 生效。
import { cp, mkdir, readdir, readFile, realpath, rm, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const profileName = process.argv[2] ?? "web";

const dshHome = process.env.DSH_HOME || join(process.env.HOME || process.env.USERPROFILE, ".dsh");
const pkgName = JSON.parse(await readFile(join(root, "package.json"), "utf8")).name;
const pkgPath = pkgName.startsWith("@") ? pkgName.split("/") : [pkgName];

const srcLib = join(root, "lib");
const dstRoot = join(dshHome, "profiles", profileName, "node_modules", ...pkgPath);
const dstLib = join(dstRoot, "lib");

try {
  await stat(srcLib);
} catch {
  console.error("build 产物丢失，请先 npm run build");
  process.exit(1);
}
try {
  await stat(dstRoot);
} catch {
  console.error(`目标插件未安装：${dstRoot}`);
  process.exit(1);
}

// 符号链接目标 == 本目录（npm link 联调）时跳过
try {
  if ((await realpath(dstRoot)) === (await realpath(root))) {
    console.log("sync-to-profile: 目标为指向本项目的符号链接，已是最新。");
    process.exit(0);
  }
} catch {
  /* ignore */
}

// 先清空目标 lib/web，再整目录拷贝：lib/web 内是带 hash 的静态产物，
// 若不删除旧文件，profile 里会残留历次构建的旧 chunk，index.html 与磁盘不一致导致 404。
await rm(join(dstLib, "web"), { recursive: true, force: true });
await mkdir(dstLib, { recursive: true });
const files = await readdir(srcLib);
for (const f of files) {
  await cp(join(srcLib, f), join(dstLib, f), { force: true, recursive: true });
}
await cp(join(root, "package.json"), join(dstRoot, "package.json"), { force: true });
await cp(join(root, "cordis.patch.yml"), join(dstRoot, "cordis.patch.yml"), { force: true });
console.log(`sync-to-profile: 已同步 ${files.length + 2} 项 → ${dstLib}`);
console.log("完成！请重启 `dsh web` 使新版本生效。");