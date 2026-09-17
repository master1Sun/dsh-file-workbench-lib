/**
 * 带 hash 构建产物的 live/dead 可达性分析 + 清理。
 *
 * 背景：`copyDirNoDelete` + vite `emptyOutDir:false`（都为绕开安全删除守卫）导致产物**只增不减**。
 * 每轮 build 新产生约 4 个死文件/处，累积到 90+ 个（每处约 30 MB）。详见
 * `.workbuddy/memory/topics/build-artifacts.md`。
 *
 * 用法：
 *   node scripts/clean-artifacts.mjs            # 干跑：只打印 live/dead 清单与体积
 *   node scripts/clean-artifacts.mjs --yes      # 真删（会顺带 git add 已跟踪的删除）
 *   node scripts/clean-artifacts.mjs --json     # 额外输出机器可读报告
 *
 * ⛔ 判别只能靠**引用**：权威入口来自各侧自己的 `lib/client.js`（宿主启动时解析的带 hash 入口名）
 *    与 `dist/index.html`，再从入口 BFS 传递引用（vendor 分包 / css / 字体图片）。
 *    绝不用 readdirSync 顺序或 mtime 猜 —— 2026-09-15 曾因此把新产物当死的（NTFS 按名排序取到的
 *    恰是上一轮的死 css，它照样能 200，于是「产物存活检查」把「引用已断」判成通过）。
 */
import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, statSync, unlinkSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const REPO = fileURLToPath(new URL("..", import.meta.url));
const APPLY = process.argv.includes("--yes");
const AS_JSON = process.argv.includes("--json");

/** 只允许删「带 hash 后缀的构建产物」，其它名字一律不动（硬护栏）。 */
const HASH_ASSET = /-[A-Za-z0-9_-]{8}\.(?:js|css)$/;
const TEXTY = /\.(?:js|css|svg|map)$/i;

function profileRoot() {
  const dshHome = process.env.DSH_HOME || join(homedir(), ".dsh");
  return join(dshHome, "profiles", "web", "node_modules", "@sunjuntao", "dsh-file-workbench");
}

/** 从权威引用源里提取入口文件名（只保留目录内真实存在的）。 */
function seedsOf(clientJsPath, distHtmlPath, fileSet) {
  const seeds = new Map(); // name -> Set<来源>
  const add = (n, via) => {
    if (!fileSet.has(n)) return;
    if (!seeds.has(n)) seeds.set(n, new Set());
    seeds.get(n).add(via);
  };
  const scan = (text, via) => {
    for (const m of text.matchAll(/assets\/([A-Za-z0-9_.-]+\.(?:js|css))/g)) add(m[1], via);
    // client.js 外壳里可能直接写裸名（不带 assets/ 前缀）
    for (const m of text.matchAll(/["'`(./\s]([A-Za-z0-9_.-]+\.(?:js|css))/g)) add(m[1], via);
  };
  if (existsSync(clientJsPath)) scan(readFileSync(clientJsPath, "utf8"), "lib/client.js");
  if (distHtmlPath && existsSync(distHtmlPath)) {
    const html = readFileSync(distHtmlPath, "utf8");
    for (const m of html.matchAll(/(?:src|href)="[^"]*?\/?assets\/([A-Za-z0-9_.-]+\.(?:js|css))"/g)) add(m[1], "dist/index.html");
  }
  return seeds;
}

/** BFS：从入口出发做传递引用分析，返回 live 集合与「谁引用了谁」。 */
function reachable(dir, seeds) {
  const files = readdirSync(dir).filter((f) => statSync(join(dir, f)).isFile());
  const fileSet = new Set(files);
  const live = new Set();
  const parents = {};
  const queue = [...seeds.keys()];
  while (queue.length) {
    const cur = queue.shift();
    if (live.has(cur)) continue;
    live.add(cur);
    if (!TEXTY.test(cur)) continue;
    let text;
    try {
      const buf = readFileSync(join(dir, cur));
      if (buf.length > 8 * 1024 * 1024) continue; // 超大产物跳过（本插件不至于）
      text = buf.toString("utf8");
    } catch {
      continue;
    }
    for (const m of text.matchAll(/[A-Za-z0-9_./\\-]+\.(?:js|css|woff2?|ttf|eot|png|jpe?g|gif|svg|map)/g)) {
      const raw = m[0].replace(/\\/g, "/").split("/").pop();
      if (!raw || !fileSet.has(raw) || live.has(raw)) continue;
      (parents[raw] ??= new Set()).add(cur);
      queue.push(raw);
    }
  }
  return { files, live, parents };
}

const git = (args) => {
  try {
    return execFileSync("git", ["-C", REPO, ...args], { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
  } catch (e) {
    return "ERR:" + String(e.stdout || e.message);
  }
};

/** 分析一侧 assets 目录。 */
function analyze(label, dir, clientJs, distHtml) {
  if (!existsSync(dir)) return { label, dir, skipped: "目录不存在" };
  const listing = readdirSync(dir).filter((f) => statSync(join(dir, f)).isFile());
  const fileSet = new Set(listing);
  const seeds = seedsOf(clientJs, distHtml, fileSet);
  if (seeds.size === 0) {
    return { label, dir, abort: `未能从权威引用源定位入口（${clientJs}）→ 拒绝删除` };
  }
  const { files, live, parents } = reachable(dir, seeds);
  const size = (f) => {
    try {
      return statSync(join(dir, f)).size;
    } catch {
      return 0;
    }
  };
  const dead = files.filter((f) => !live.has(f));
  const blocked = dead.filter((f) => !HASH_ASSET.test(f)); // 护栏拦下的
  const deletable = dead.filter((f) => HASH_ASSET.test(f));
  const sum = (arr) => arr.reduce((s, f) => s + size(f), 0);

  // 已跟踪？用于删完 git add
  let tracked = new Set();
  if (!label.startsWith("profile")) {
    const t = git(["ls-files", "--", dir.replace(REPO + "\\", "").replace(REPO + "/", "").replace(/\\/g, "/")]);
    if (t && !t.startsWith("ERR:")) {
      tracked = new Set(
        t
          .trim()
          .split(/\r?\n/)
          .filter(Boolean)
          .map((p) => p.split("/").pop()),
      );
    }
  }

  return {
    label,
    dir,
    seeds: [...seeds].map(([n, v]) => ({ file: n, via: [...v] })),
    live: [...live].sort().map((f) => ({ f, size: size(f), via: [...(parents[f] ?? [])].sort() })),
    dead: { count: deletable.length, bytes: sum(deletable), files: deletable.sort() },
    blockedByGuard: blocked,
    trackedCount: deletable.filter((f) => tracked.has(f)).length,
  };
}

/** 真删 + 对已跟踪文件做 git add。 */
function purge(res) {
  const removed = [];
  const failed = [];
  for (const f of res.dead.files) {
    try {
      unlinkSync(join(res.dir, f));
      removed.push(f);
    } catch (e) {
      failed.push(`${f}: ${e.code || e.message}`);
    }
  }
  let gitAdd = "-";
  if (!res.label.startsWith("profile") && removed.length) {
    const rel = res.dir.replace(/\\/g, "/").replace(REPO.replace(/\\/g, "/") + "/", "");
    // 只 add 仍被跟踪的那些（未跟踪的删了就是删了）
    const tracked = removed.filter((f) => res._trackedSet?.has(f));
    if (tracked.length) {
      const out = git(["add", "--", ...tracked.map((f) => `${rel}/${f}`)]);
      gitAdd = out.startsWith("ERR:") ? out.slice(0, 200) : `git add ${tracked.length} 项已暂存删除`;
    } else {
      gitAdd = "无已跟踪文件（都是未跟踪产物，删除即完成）";
    }
  }
  return { removed: removed.length, failed, gitAdd };
}

// ---------- 主流程 ----------
const repoAssets = join(REPO, "lib", "web", "assets");
const repoDistAssets = join(REPO, "dist", "assets");
const profRoot = profileRoot();
const profAssets = join(profRoot, "lib", "web", "assets");

const targets = [
  analyze("repo lib/web/assets", repoAssets, join(REPO, "lib", "client.js"), join(REPO, "dist", "index.html")),
  analyze("repo dist/assets", repoDistAssets, join(REPO, "lib", "client.js"), join(REPO, "dist", "index.html")),
  analyze("profile lib/web/assets", profAssets, join(profRoot, "lib", "client.js"), null),
];

// 供 purge 用（跟踪集合）
for (const t of targets) {
  if (!t.dir) continue;
  if (!t.label.startsWith("profile")) {
    const rel = t.dir.replace(/\\/g, "/").replace(REPO.replace(/\\/g, "/") + "/", "");
    const out = git(["ls-files", "--", rel]);
    t._trackedSet = new Set(
      out && !out.startsWith("ERR:")
        ? out
            .trim()
            .split(/\r?\n/)
            .filter(Boolean)
            .map((p) => p.split("/").pop())
        : [],
    );
  }
}

const MB = (b) => (b / 1048576).toFixed(1) + " MB";
const lines = [];
const say = (s) => lines.push(s);

say(`带 hash 产物分析  ${new Date().toISOString()}  模式=${APPLY ? "真删" : "干跑（加 --yes 才删）"}`);
say("");
let totalDead = 0;
let totalBytes = 0;
for (const t of targets) {
  say(`=== ${t.label}`);
  if (t.skipped) {
    say(`    跳过：${t.skipped}`);
    say("");
    continue;
  }
  if (t.abort) {
    say(`    ⛔ ${t.abort}`);
    say("");
    continue;
  }
  say(`    目录      ${t.dir}`);
  say(`    权威入口  ${t.seeds.map((s) => `${s.file} ← ${s.via.join(",")}`).join(" | ")}`);
  say(`    live ${t.live.length} 个：`);
  for (const l of t.live) say(`      ✓ ${l.f}  (${l.size}B)${l.via.length ? " ← " + l.via.join(",") : "  [入口]"}`);
  say(`    dead ${t.dead.count} 个 / ${MB(t.dead.bytes)}（其中已跟踪 ${t.trackedCount}）`);
  if (t.blockedByGuard.length) {
    say(`    ⚠ 被护栏拦下（名字不含 hash，未删）：${t.blockedByGuard.join(", ")}`);
  }
  totalDead += t.dead.count;
  totalBytes += t.dead.bytes;
  say("");
}

say(`合计待删 ${totalDead} 个文件 / ${MB(totalBytes)}`);
say("");

if (APPLY) {
  say("--- 执行 ---");
  for (const t of targets) {
    if (!t.dir || t.abort || t.skipped || !t.dead?.count) continue;
    const r = purge(t);
    say(`${t.label}: 删除 ${r.removed} 个；git → ${r.gitAdd}`);
    if (r.failed.length) for (const f of r.failed) say(`    ✗ 删除失败 ${f}`);
  }
  say("");
  say("--- 复查 ---");
  for (const t of targets) {
    if (!t.dir || t.abort || t.skipped) continue;
    const left = existsSync(t.dir) ? readdirSync(t.dir).length : -1;
    const seedsOk = t.seeds.every((s) => existsSync(join(t.dir, s.file)));
    say(`${t.label}: 剩余 ${left} 个；入口仍存在且可解析 = ${seedsOk}`);
  }
  // git 状态
  const st = git(["status", "--porcelain", "--", "lib/web/assets"]);
  const stLines = st.trim() ? st.trim().split(/\r?\n/) : [];
  say(`git status -- lib/web/assets: ${stLines.length} 行（D=已删未暂存，D空格=已暂存删除）`);
  for (const l of stLines.slice(0, 8)) say("    " + l);
  if (stLines.length > 8) say(`    …另 ${stLines.length - 8} 行`);
}

const report = lines.join("\n") + "\n";
process.stdout.write(report);
if (AS_JSON) {
  const out = join(process.env.TEMP || "/tmp", "fw-clean-artifacts.json");
  writeFileSync(out, JSON.stringify({ apply: APPLY, targets, totalDead, totalBytes }, null, 2), "utf8");
  process.stdout.write(`\nJSON → ${out}\n`);
}
