/**
 * SftpFsProvider —— ssh:// 引用的 FsProvider 实现。
 *
 * 传输层复用 vendored 自 dsh-ssh（MIT, Copyright 2026 dsh-ssh）的 ssh-core.js /
 * exec-fs.js：连接池、known_hosts 校验、断线重连、SFTP 禁用时 exec+base64 降级。
 * 本文件只做「FsProvider 语义 ↔ 远端操作」的映射，不依赖 dsh-ssh 包。
 *
 * 路径约定（与 routes-fs 的 routeTarget 对齐）：本实现的所有方法接受并返回
 * **完整的引用字符串** `ssh://<hostId>/<remoteAbsPath>`——与前端贯穿的路径模型一致，
 * 路由层无需在边界做 scheme 换算。方法内部再拆出远端 POSIX 路径。
 *
 * 首版范围：浏览 / 查看 / 编辑 / 增删 / 重命名 / 搜索 / 快速打开。
 * 此电脑 / 跨文件 replace 在远端根下明确 501「不支持」；压缩解压由 SFTP + fflate 内存打包实现。
 */
import { SshError, type RemoteFs, type RemoteStat } from "../ssh/ssh-core.js";
import { connFor } from "../ssh/ssh-hosts.js";
import { zipSync, unzipSync } from "fflate";
import { FsError, type FsEntryRow, type MyComputerItem } from "./fs-tree.js";
import { parseRef } from "./fs-provider.js";
import type { DriveInfo } from "./fs-drives.js";
import type { FsProvider, StatLike, Crumb } from "./fs-provider.js";
import type { SearchOutcome, GrepOutcome, GrepFileHit, FileIndexOutcome, ReplaceOutcome } from "./fs-search.js";

/* ── 引用字符串 ↔ 远端路径 ── */

function splitRef(raw: string): { hostId: string; remote: string } {
  const ref = parseRef(raw);
  if (ref.conn !== "ssh" || !ref.hostId) {
    throw new FsError("bad-request", `invalid ssh reference "${raw}"`, 400);
  }
  return { hostId: ref.hostId, remote: ref.path };
}

function joinRef(hostId: string, remote: string): string {
  return `ssh://${hostId}${remote.startsWith("/") ? remote : `/${remote}`}`;
}

/** 远端 POSIX 路径归一：折叠多余斜杠，目录去尾斜杠（根除外）。 */
function normalizeRemote(remote: string): string {
  let p = remote.replace(/\/{2,}/g, "/");
  if (p.length > 1) p = p.replace(/\/+$/, "");
  return p.startsWith("/") ? p : `/${p}`;
}

function posixBasename(remote: string): string {
  const base = remote.slice(remote.lastIndexOf("/") + 1);
  return base !== "" ? base : remote;
}

function posixDirname(remote: string): string {
  const cut = remote.lastIndexOf("/");
  if (cut <= 0) return "/";
  return remote.slice(0, cut);
}

/* ── 错误映射 ── */

function toFsError(error: unknown, what: string): FsError {
  if (error instanceof FsError) return error;
  if (error instanceof SshError) {
    // 主机键未知/不匹配保留原文（含指纹提示文案），其余按 400 处理。
    return new FsError("fs-error", `${what}: ${error.message}`, 400);
  }
  return new FsError("fs-error", `${what}: ${error instanceof Error ? error.message : String(error)}`, 400);
}

/** 执行远端命令；非零退出抛 FsError（附 stderr 尾部）。 */
async function execOk(hostId: string, cmd: string, what: string, timeoutMs = 30_000): Promise<string> {
  const conn = await connFor(hostId);
  let result;
  try {
    result = await conn.exec(cmd, { timeoutMs });
  } catch (error) {
    throw toFsError(error, what);
  }
  if (result.code !== 0) {
    const tail = (result.stderr || result.stdout || "").trim().split("\n").slice(-3).join("; ");
    throw new FsError("fs-error", `${what}: exit ${result.code}${tail ? `: ${tail}` : ""}`, 400);
  }
  return result.stdout;
}

/** 探测远端是否存在某命令（zip/unzip 等按需探测，缺命令时走 SFTP 回退路径）。 */
async function remoteHasBin(hostId: string, bin: string): Promise<boolean> {
  try {
    const out = await execOk(hostId, `command -v ${shellQuote(bin)} >/dev/null 2>&1 && echo __ok__`, `check "${bin}"`);
    return out.includes("__ok__");
  } catch {
    return false;
  }
}

/** 统一文件语义入口（SFTP 优先，禁用降级 ExecFs）。 */
async function remoteFsFor(raw: string): Promise<{ hostId: string; remote: string; fs: RemoteFs }> {  const { hostId, remote } = splitRef(raw);
  try {
    const conn = await connFor(hostId);
    return { hostId, remote, fs: await conn.fs() };
  } catch (error) {
    throw toFsError(error, `ssh connect failed (${hostId})`);
  }
}

/** 远端 stat：不存在返回 undefined；连接/权限错误抛 FsError。 */
async function statRemote(raw: string): Promise<RemoteStat | undefined> {
  const { remote, fs } = await remoteFsFor(raw);
  try {
    return await fs.stat(remote);
  } catch (error) {
    throw toFsError(error, `cannot stat "${raw}"`);
  }
}

/** RemoteStat → 路由层期望的 Stats 形状（isFile/isDirectory/mtimeMs/size）。 */
function statLike(st: RemoteStat): StatLike {
  const isDir = st.type === "directory";
  return {
    isFile: () => st.type === "file",
    isDirectory: () => isDir,
    size: st.size ?? 0,
    mtimeMs: (st.mtime ?? 0) * 1000,
  };
}

/* ── 搜索辅助 ── */

/** 跳过的噪声目录（与本地 fs-search 的 SEARCH_SKIP_DIRS 核心项对齐）。 */
const SKIP_DIRS = [".git", "node_modules", ".pnpm-store"];

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function shellQuote(s: string): string {
  return `'${String(s).replace(/'/g, "'\\''")}'`;
}

/** grep 输出行解析：`<path>:<ln>:<text>`（路径本身含冒号时向后找数字段）。 */
function parseGrepLine(line: string, rootRemote: string): { rel: string; ln: number; text: string } | undefined {
  let idx = line.indexOf(":");
  while (idx > 0) {
    const pathPart = line.slice(0, idx);
    const rest = line.slice(idx + 1);
    const colon = rest.indexOf(":");
    if (colon > 0) {
      const ln = Number(rest.slice(0, colon));
      if (Number.isInteger(ln) && ln > 0) {
        if (pathPart === rootRemote || pathPart.startsWith(`${rootRemote}/`)) {
          return { rel: pathPart.slice(rootRemote.length + 1), ln, text: rest.slice(colon + 1) };
        }
        return undefined;
      }
    }
    idx = line.indexOf(":", idx + 1);
  }
  return undefined;
}

/* ── Provider ── */

export const sftpFsProvider: FsProvider = {
  async listDirectory(raw, _maxEntries) {
    const { hostId, remote, fs } = await remoteFsFor(raw);
    let entries;
    try {
      entries = await fs.listDir(remote);
    } catch (error) {
      // 目录不可读：与本地语义对齐——给出 inaccessible 提示而不是 500。
      throw toFsError(error, `cannot list "${raw}"`);
    }
    const rows: FsEntryRow[] = entries.map((e) => ({
      name: e.name,
      path: joinRef(hostId, normalizeRemote(`${remote === "/" ? "" : remote}/${e.name}`)),
      isDir: e.type === "dir",
      isSymlink: e.type === "link",
      broken: false,
      hidden: e.name.startsWith("."),
      size: e.size,
      mtime: e.mtime !== undefined ? e.mtime * 1000 : undefined,
    }));
    rows.sort((a, b) => (a.isDir === b.isDir ? a.name.localeCompare(b.name) : a.isDir ? -1 : 1));
    return { path: raw, root: raw, crumbs: [], entries: rows, truncated: false };
  },

  async attachDetails(rows) {
    // listDirectory 已随列表带回 size/mtime；这里只补缺失项（并发受控）。
    let next = 0;
    const workers = Array.from({ length: Math.min(8, rows.length) }, async () => {
      for (;;) {
        const i = next;
        next += 1;
        if (i >= rows.length) return;
        const row = rows[i];
        if (row.size !== undefined && row.mtime !== undefined) continue;
        try {
          const st = await statRemote(row.path);
          if (st) {
            row.size = st.size ?? row.size;
            row.mtime = st.mtime !== undefined ? st.mtime * 1000 : row.mtime;
          } else {
            row.broken = true;
          }
        } catch {
          /* 单条失败不阻塞整表 */
        }
      }
    });
    await Promise.all(workers);
  },

  parentOf(raw) {
    const { hostId, remote } = splitRef(raw);
    const parent = posixDirname(normalizeRemote(remote));
    if (parent === normalizeRemote(remote)) return undefined;
    return joinRef(hostId, parent);
  },

  rootLabel(raw) {
    const { remote } = splitRef(raw);
    const norm = normalizeRemote(remote);
    return norm === "/" ? "/" : posixBasename(norm);
  },

  crumbsOf(rawPath, rawRoot) {
    const out: Crumb[] = [];
    let rootRef;
    try {
      rootRef = splitRef(rawRoot);
    } catch {
      return [{ name: rawRoot, path: rawRoot, hidden: false }];
    }
    const pathRef = splitRef(rawPath);
    if (pathRef.hostId !== rootRef.hostId) {
      return [{ name: this.rootLabel(rawRoot), path: rawRoot, hidden: false }];
    }
    const rootNorm = normalizeRemote(rootRef.remote);
    const pathNorm = normalizeRemote(pathRef.remote);
    if (pathNorm !== rootNorm && !pathNorm.startsWith(`${rootNorm}/`)) {
      return [{ name: rootNorm === "/" ? "/" : posixBasename(rootNorm), path: rawRoot, hidden: false }];
    }
    out.push({ name: rootNorm === "/" ? "/" : posixBasename(rootNorm), path: rawRoot, hidden: false });
    let cur = rootNorm === "/" ? "" : rootNorm;
    const rest = rootNorm === "/" ? pathNorm.slice(1) : pathNorm.slice(rootNorm.length + 1);
    for (const seg of rest.split("/").filter(Boolean)) {
      cur = `${cur}/${seg}`;
      out.push({ name: seg, path: joinRef(pathRef.hostId, cur), hidden: seg.startsWith(".") });
    }
    return out;
  },

  async statDetail(raw) {
    const { hostId, remote } = splitRef(raw);
    const st = await statRemote(raw);
    if (!st) throw new FsError("not-found", `"${raw}" does not exist`, 404);
    const isDir = st.type === "directory";
    let size = st.size ?? 0;
    if (isDir) {
      // 目录体积：best-effort `du -sk`（BusyBox 兼容，KB → 字节）；失败保持 0。
      try {
        const out = await execOk(hostId, `du -sk ${shellQuote(remote)} 2>/dev/null`, "du", 15_000);
        const kb = Number(out.split("\n")[0]?.split(/\s+/)[0]);
        if (Number.isFinite(kb)) size = kb * 1024;
      } catch {
        /* 保持 0 */
      }
    }
    const norm = normalizeRemote(remote);
    const extIndex = norm.lastIndexOf(".");
    return {
      name: posixBasename(norm),
      path: raw,
      isDir,
      size,
      mtime: (st.mtime ?? 0) * 1000,
      ext: !isDir && extIndex > norm.lastIndexOf("/") ? norm.slice(extIndex).toLowerCase() : "",
    };
  },

  async listMyComputer(): Promise<MyComputerItem[]> {
    return []; // 远端根不支持「此电脑」视图（首版明确不支持）。
  },

  async listDrives(): Promise<DriveInfo[]> {
    return [];
  },

  async readFileBytes(raw) {
    const { remote, fs } = await remoteFsFor(raw);
    try {
      return await fs.readBytes(remote);
    } catch (error) {
      throw toFsError(error, `cannot read "${raw}"`);
    }
  },

  async writeFileBytes(raw, data) {
    const { hostId, remote, fs } = await remoteFsFor(raw);
    const dir = posixDirname(normalizeRemote(remote));
    try {
      const conn = await connFor(hostId);
      await conn.exec(`mkdir -p ${shellQuote(dir)}`, { timeoutMs: 15_000 });
      await fs.writeFileAtomic(remote, Buffer.from(data));
    } catch (error) {
      throw toFsError(error, `cannot write "${raw}"`);
    }
  },

  async stat(raw) {
    const st = await statRemote(raw);
    if (!st) throw new FsError("not-found", `"${raw}" does not exist`, 404);
    return statLike(st);
  },

  exists(raw) {
    // 同步接口在远端无法实现；路由层未使用（存在性一律走 stat/detAil 异步路径）。
    void raw;
    return false;
  },

  async openExternal(raw) {
    throw new FsError("not-implemented", `"${raw}" is on a remote ssh host — open is local-only`, 501);
  },

  async mkdir(raw) {
    const { hostId, remote } = splitRef(raw);
    await execOk(hostId, `mkdir -p ${shellQuote(normalizeRemote(remote))}`, `mkdir "${raw}"`);
  },

  async rename(from, to) {
    const fromT = splitRef(from);
    const toT = splitRef(to);
    if (fromT.hostId !== toT.hostId) {
      throw new FsError("bad-request", "cannot rename across two ssh hosts", 400);
    }
    await execOk(
      fromT.hostId,
      `mv -f -- ${shellQuote(normalizeRemote(fromT.remote))} ${shellQuote(normalizeRemote(toT.remote))}`,
      `rename "${from}" -> "${to}"`,
    );
  },

  async remove(raw) {
    const { hostId, remote, fs } = await remoteFsFor(raw);
    const norm = normalizeRemote(remote);
    const st = await fs.stat(norm).catch((error) => {
      throw toFsError(error, `cannot stat "${raw}"`);
    });
    if (!st) throw new FsError("not-found", `"${raw}" does not exist`, 404);
    try {
      if (st.type === "directory") {
        await execOk(hostId, `rm -rf -- ${shellQuote(norm)}`, `remove "${raw}"`);
      } else {
        await fs.unlink(norm);
      }
    } catch (error) {
      throw toFsError(error, `cannot remove "${raw}"`);
    }
    return raw;
  },

  async touch(raw) {
    const { remote, fs } = await remoteFsFor(raw);
    try {
      await fs.writeFileAtomic(normalizeRemote(remote), Buffer.alloc(0));
    } catch (error) {
      throw toFsError(error, `cannot create "${raw}"`);
    }
  },

  async copy(srcRaw, destDirRaw) {
    const src = splitRef(srcRaw);
    const destDir = splitRef(destDirRaw);
    if (src.hostId !== destDir.hostId) {
      throw new FsError("bad-request", "cannot copy across two ssh hosts", 400);
    }
    const name = posixBasename(normalizeRemote(src.remote));
    const dest = await this.uniquePath(destDirRaw, name);
    const destRemote = splitRef(dest).remote;
    await execOk(
      src.hostId,
      `cp -R -- ${shellQuote(normalizeRemote(src.remote))} ${shellQuote(normalizeRemote(destRemote))}`,
      `copy "${srcRaw}" -> "${dest}"`,
    );
    return dest;
  },

  async saveText(_root, target, content) {
    const { remote, fs } = await remoteFsFor(target);
    try {
      await fs.writeFileAtomic(normalizeRemote(remote), Buffer.from(content));
    } catch (error) {
      throw toFsError(error, `cannot save "${target}"`);
    }
    return target;
  },

  async searchFiles(rawBase, query, opts) {
    const { hostId, remote } = splitRef(rawBase);
    const root = normalizeRemote(remote);
    const outcome: SearchOutcome = { matches: [], byContent: [], snippets: {}, truncated: false };
    const needle = query.trim();
    if (!needle) return outcome;

    const maxMatches = opts?.maxMatches ?? 200;
    const maxVisited = opts?.maxVisited ?? 100_000;
    const caseSensitive = opts?.caseSensitive === true;
    const regex = opts?.regex === true;

    // 文件名匹配：find 枚举（prune 噪声目录 + 预算截断），Node 侧统一判定。
    let re: RegExp;
    try {
      re = regex ? new RegExp(needle, caseSensitive ? "" : "i") : new RegExp(escapeRegex(needle), caseSensitive ? "" : "i");
    } catch {
      re = new RegExp(escapeRegex(needle), caseSensitive ? "" : "i");
    }
    const prune = SKIP_DIRS.map((d) => `-name ${shellQuote(d)}`).join(" -o ");
    const findCmd =
      `find ${shellQuote(root)} \\( ${prune} \\) -prune -o -type f -print 2>/dev/null | head -n ${Math.min(maxVisited, 20000) + 1}`;
    const findOut = await execOk(hostId, findCmd, `search in "${rawBase}"`, 30_000);
    const all = findOut.split("\n").filter((l) => l.startsWith(root === "/" ? "/" : `${root}/`));
    if (all.length > Math.min(maxVisited, 20000)) outcome.truncated = true;
    for (const abs of all) {
      if (outcome.matches.length >= maxMatches) break;
      const rel = root === "/" ? abs.slice(1) : abs.slice(root.length + 1);
      const name = posixBasename(abs);
      if (re.test(name)) outcome.matches.push(rel);
    }

    // 内容命中（查询 ≥2 字符才有意义）：grep -rIl 拿命中文件；-rInm1 拿首行片段。
    if (needle.length >= 2) {
      const gFlags = caseSensitive ? "" : "i";
      const gMode = regex ? "E" : "F";
      const gPrune = SKIP_DIRS.map((d) => `--exclude-dir=${shellQuote(d)}`).join(" ");
      const grepList = `grep -rIl${gFlags}${gMode} ${gPrune} -e ${shellQuote(needle)} ${shellQuote(root)} 2>/dev/null | head -n 401`;
      try {
        const listOut = await execOk(hostId, grepList, `content search in "${rawBase}"`, 30_000);
        const files = listOut.split("\n").filter((l) => l.startsWith(root === "/" ? "/" : `${root}/`));
        if (files.length > 400) outcome.truncated = true;
        for (const abs of files.slice(0, 400)) {
          const rel = root === "/" ? abs.slice(1) : abs.slice(root.length + 1);
          outcome.byContent.push(rel);
          if (outcome.matches.length < maxMatches && !outcome.matches.includes(rel)) outcome.matches.push(rel);
        }
        // 片段：每个命中文件取第一处命中行。
        const grepSnip = `grep -rInm1${gFlags}${gMode} ${gPrune} -e ${shellQuote(needle)} ${shellQuote(root)} 2>/dev/null | head -n 400`;
        const snipOut = await execOk(hostId, grepSnip, `content snippets in "${rawBase}"`, 30_000);
        for (const line of snipOut.split("\n")) {
          if (!line) continue;
          const parsed = parseGrepLine(line, root);
          if (parsed && outcome.snippets[parsed.rel] === undefined) {
            outcome.snippets[parsed.rel] = `${parsed.ln}: ${parsed.text.slice(0, 200)}`;
          }
        }
      } catch {
        // grep 不存在/不支持 --exclude-dir 等：内容命中缺失但文件名命中仍有效。
      }
    }
    return outcome;
  },

  async grepFiles(rawRoot, query, opts) {
    const { hostId, remote } = splitRef(rawRoot);
    const root = normalizeRemote(remote);
    const needle = query.trim();
    if (needle.length < 2) return { files: [], total: 0, truncated: false };
    const flags = opts?.caseSensitive ? "" : "i";
    const mode = opts?.regex ? "E" : "F";
    const word = opts?.wholeWord ? " -w" : "";
    const prune = SKIP_DIRS.map((d) => `--exclude-dir=${shellQuote(d)}`).join(" ");
    const toFlags = (raw: string | undefined, opt: string): string =>
      (raw ?? "")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
        .map((g) => `${opt}=${shellQuote(g)}`)
        .join(" ");
    const includes = toFlags(opts?.include, "--include");
    const excludes = toFlags(opts?.exclude, "--exclude");
    const maxFiles = opts?.maxFiles ?? 200;
    const maxTotal = opts?.maxTotal ?? 2000;
    const cmd =
      `grep -rIn${flags}${mode}${word} ${prune}${includes ? " " + includes : ""}${excludes ? " " + excludes : ""} --binary-files=without-match -e ${shellQuote(needle)} ${shellQuote(root)}` +
      ` 2>/dev/null | head -c 4194304`;
    let out: string;
    try {
      out = await execOk(hostId, cmd, `grep in "${rawRoot}"`, 60_000);
    } catch (error) {
      // grep 不可用（ BusyBox 无某选项等）：返回空而非整页报错。
      if (error instanceof FsError && /exit 1\b|grep/.test(error.message)) return { files: [], total: 0, truncated: false };
      throw error;
    }
    const outcome: GrepOutcome = { files: [], total: 0, truncated: false };
    let current: GrepFileHit | undefined;
    for (const line of out.split("\n")) {
      if (!line) continue;
      const parsed = parseGrepLine(line, root);
      if (!parsed) continue;
      if (outcome.total >= maxTotal) {
        outcome.truncated = true;
        break;
      }
      if (!current || current.rel !== parsed.rel) {
        if (outcome.files.length >= maxFiles) {
          outcome.truncated = true;
          break;
        }
        current = { rel: parsed.rel, hits: [] };
        outcome.files.push(current);
      }
      if (current.hits.length < 50) {
        current.hits.push({ ln: parsed.ln, text: parsed.text.slice(0, 400) });
      }
      outcome.total += 1;
    }
    return outcome;
  },

  async listProjectFiles(rawRoot, opts) {
    const { hostId, remote } = splitRef(rawRoot);
    const root = normalizeRemote(remote);
    const maxFiles = opts?.maxFiles ?? 8000;
    const prune = SKIP_DIRS.map((d) => `-name ${shellQuote(d)}`).join(" -o ");
    const cmd =
      `find ${shellQuote(root)} \\( ${prune} \\) -prune -o -type f -print 2>/dev/null | head -n ${maxFiles + 1}`;
    const out = await execOk(hostId, cmd, `index "${rawRoot}"`, 60_000);
    const outcome: FileIndexOutcome = { files: [], truncated: false };
    const prefix = root === "/" ? "/" : `${root}/`;
    const seen = new Set<string>();
    for (const line of out.split("\n")) {
      if (!line.startsWith(prefix)) continue;
      if (outcome.files.length >= maxFiles) {
        outcome.truncated = true;
        break;
      }
      const rel = line.slice(prefix.length);
      if (rel && !seen.has(rel)) {
        seen.add(rel);
        outcome.files.push(rel);
      }
    }
    outcome.files.sort();
    return outcome;
  },

  async replaceInFiles(): Promise<ReplaceOutcome> {
    throw new FsError("not-implemented", "cross-file replace is not supported on remote (ssh) roots", 501);
  },

  /**
   * 远端压缩：**优先在远端服务器上直接执行 `zip -qr`**（数据不出服务器，快且省流量）；
   * 远端没有 zip 命令时回退为 SFTP 逐文件读取 + fflate 宿主内存打包（不依赖远端装命令，
   * 与本地 fs-zip 同为「全内存打包」，超大目录受内存约束）。符号链接不进包。
   */
  async compressTo(srcRaw: string, destZipRaw: string): Promise<string> {
    const srcSt = await statRemote(srcRaw);
    if (!srcSt) throw new FsError("not-found", `"${srcRaw}" does not exist`, 404);
    const { hostId, remote, fs } = await remoteFsFor(srcRaw);
    const src = normalizeRemote(remote);
    const destZip = normalizeRemote(splitRef(destZipRaw).remote);

    // 快路径：远端有 zip → 原地打包（cd 到源目录使包内保留顶层名，与本地版语义一致）。
    if (await remoteHasBin(hostId, "zip")) {
      await execOk(
        hostId,
        `cd ${shellQuote(posixDirname(src))} && zip -qr -- ${shellQuote(destZip)} ${shellQuote(posixBasename(src))}`,
        `compress "${srcRaw}"`,
        300_000,
      );
      return destZipRaw;
    }

    // 回退路径：SFTP 逐文件读取 + fflate 内存打包 + 写回远端。
    const rootName = posixBasename(src);
    const entries: Record<string, Uint8Array> = {};

    async function walk(dirRemote: string, prefix: string): Promise<void> {
      let list;
      try {
        list = await fs.listDir(dirRemote);
      } catch (error) {
        throw toFsError(error, `cannot list "${dirRemote}"`);
      }
      for (const e of list) {
        const childRemote = normalizeRemote(`${dirRemote}/${e.name}`);
        const rel = prefix ? `${prefix}/${e.name}` : e.name;
        if (e.type === "dir") {
          await walk(childRemote, rel);
          continue;
        }
        if (e.type !== "file") continue; // 链接/其他不进包
        try {
          entries[rel] = new Uint8Array(await fs.readBytes(childRemote));
        } catch (error) {
          throw toFsError(error, `cannot read "${childRemote}"`);
        }
      }
    }

    try {
      if (srcSt.type === "file") {
        entries[rootName] = new Uint8Array(await fs.readBytes(src));
      } else {
        await walk(src, rootName);
      }
      const data = zipSync(entries);
      await this.writeFileBytes(destZipRaw, Buffer.from(data));
    } catch (error) {
      if (error instanceof FsError) throw error;
      throw toFsError(error, `cannot compress "${srcRaw}"`);
    }
    return destZipRaw;
  },

  /**
   * 远端解压：**优先在远端服务器上直接执行 `unzip -oq`**（数据不出服务器），解完用
   * `find | wc -l` 统计写入文件数；远端没有 unzip 命令时回退为 SFTP 读入 + fflate 内存
   * 解包 + 逐条目写回（writeFileBytes 自带 `mkdir -p` 父目录）。两条路径的穿越防护一致：
   * 回退路径丢弃空段 / "." / ".."，重组后必须仍落在 destDir 之下；zip 目录条目跳过。
   */
  async extractTo(zipRaw: string, destDirRaw: string): Promise<number> {
    const { hostId, fs } = await remoteFsFor(zipRaw);
    const zipRemote = normalizeRemote(splitRef(zipRaw).remote);
    const dest = normalizeRemote(splitRef(destDirRaw).remote);

    // 快路径：远端有 unzip → 服务器本地解压，数据不过网络。
    if (await remoteHasBin(hostId, "unzip")) {
      const out = await execOk(
        hostId,
        `unzip -oq -- ${shellQuote(zipRemote)} -d ${shellQuote(dest)} && find ${shellQuote(dest)} -type f | wc -l`,
        `extract "${zipRaw}"`,
        300_000,
      );
      const count = Number.parseInt(out.trim(), 10);
      return Number.isFinite(count) ? count : 0;
    }

    // 回退路径：SFTP 读入 zip → fflate 解包 → 逐条目写回远端。
    let buf: Buffer;
    try {
      buf = await fs.readBytes(zipRemote);
    } catch (error) {
      throw toFsError(error, `cannot read zip "${zipRaw}"`);
    }
    let files: Record<string, Uint8Array>;
    try {
      files = unzipSync(new Uint8Array(buf));
    } catch (error) {
      throw new FsError("fs-error", `invalid zip: ${error instanceof Error ? error.message : String(error)}`, 400);
    }
    let count = 0;
    for (const rel of Object.keys(files)) {
      if (rel.endsWith("/")) continue; // 目录条目：无需写出
      const parts = rel.replace(/\\/g, "/").split("/").filter((s) => s && s !== "." && s !== "..");
      if (!parts.length) continue;
      const target = normalizeRemote(`${dest}/${parts.join("/")}`);
      if (!target.startsWith(`${dest}/`)) continue; // 防穿越
      await this.writeFileBytes(joinRef(hostId, target), Buffer.from(files[rel]));
      count += 1;
    }
    return count;
  },

  async resolveExisting(raw) {
    const { hostId, remote } = splitRef(raw);
    const norm = normalizeRemote(remote);
    const st = await statRemote(raw);
    if (!st) throw new FsError("not-found", `"${raw}" does not exist`, 404);
    return joinRef(hostId, norm);
  },

  async resolveWritePath(raw) {
    const { hostId, remote } = splitRef(raw);
    return joinRef(hostId, normalizeRemote(remote));
  },

  async uniquePath(rawDir, name) {
    const { hostId, remote } = splitRef(rawDir);
    const dir = normalizeRemote(remote);
    const { fs } = await remoteFsFor(rawDir);
    const extIndex = name.lastIndexOf(".");
    const hasExt = extIndex > 0;
    const stem = hasExt ? name.slice(0, extIndex) : name;
    const ext = hasExt ? name.slice(extIndex) : "";
    let candidate = `${dir === "/" ? "" : dir}/${name}`;
    let n = 2;
    for (;;) {
      const st = await fs.stat(candidate).catch(() => undefined);
      if (!st) return joinRef(hostId, candidate);
      candidate = `${dir === "/" ? "" : dir}/${stem} (${n})${ext}`;
      n += 1;
    }
  },
};
