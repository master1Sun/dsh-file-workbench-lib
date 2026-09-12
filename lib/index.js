import { createRequire as __dshCreateRequire } from "module";
const require = __dshCreateRequire(import.meta.url);

// src/host/routes/routes-util.ts
import { createReadStream, existsSync as existsSync2, statSync } from "node:fs";
import { basename as basename2, resolve as resolve2 } from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

// src/host/fs/fs-tree.ts
import { basename, dirname, isAbsolute, join, relative, resolve, sep } from "node:path";
import { existsSync } from "node:fs";
import { opendir, realpath, stat } from "node:fs/promises";
import { homedir } from "node:os";
function listMyComputer(workspaceRoot) {
  const items = [];
  if (process.platform === "win32") {
    for (let c = 65; c <= 90; c += 1) {
      const letter = String.fromCharCode(c);
      const root = `${letter}:\\`;
      try {
        if (existsSync(root)) items.push({ type: "drive", name: `\u672C\u5730\u78C1\u76D8 (${letter}:)`, path: root });
      } catch {
      }
    }
  } else {
    items.push({ type: "drive", name: "\u6839\u76EE\u5F55", path: "/" });
  }
  const home = homedir();
  if (home) items.push({ type: "home", name: "\u4E3B\u76EE\u5F55 (Home)", path: home });
  const quick = [
    ["desktop", "\u684C\u9762", "Desktop"],
    ["download", "\u4E0B\u8F7D", "Downloads"],
    ["documents", "\u6587\u6863", "Documents"],
    ["pictures", "\u56FE\u7247", "Pictures"],
    ["music", "\u97F3\u4E50", "Music"],
    ["videos", "\u89C6\u9891", "Videos"]
  ];
  for (const [type, name2, dir] of quick) {
    const p = join(home ?? "", dir);
    if (p && existsSync(p)) items.push({ type, name: name2, path: p });
  }
  const picturesPath = join(home ?? "", "Pictures");
  if (picturesPath && existsSync(picturesPath)) items.push({ type: "gallery", name: "\u56FE\u5E93", path: picturesPath });
  if (workspaceRoot) items.push({ type: "workspace", name: "\u5DE5\u4F5C\u533A", path: workspaceRoot });
  items.push({ type: "recycle", name: "\u56DE\u6536\u7AD9", path: "" });
  return items;
}
var FsError = class extends Error {
  constructor(code, message, status) {
    super(message);
    this.code = code;
    this.status = status;
    this.name = "FsError";
  }
};
function messageOf(error) {
  return error instanceof Error ? error.message : String(error);
}
function compareEntries(a, b) {
  if (a.isDir !== b.isDir) return a.isDir ? -1 : 1;
  return a.name.localeCompare(b.name, void 0, { sensitivity: "base" });
}
var SYMLINK_PROBE_CONCURRENCY = 32;
async function probeSymlinkTargets(rows) {
  let next = 0;
  const workers = Array.from({ length: Math.min(SYMLINK_PROBE_CONCURRENCY, rows.length) }, async () => {
    for (; ; ) {
      const index = next;
      next += 1;
      if (index >= rows.length) return;
      const row = rows[index];
      if (!row.isSymlink) continue;
      const info = await stat(row.path).catch(() => void 0);
      if (info !== void 0) {
        row.isDir = info.isDirectory();
      } else {
        row.broken = true;
      }
    }
  });
  await Promise.all(workers);
}
var INACCESSIBLE_CODES = /* @__PURE__ */ new Set(["EPERM", "EACCES", "ENOTDIR", "ELOOP"]);
async function listDirectory(path, maxEntries = 1e3) {
  const level = await opendir(path).catch((error) => {
    if (INACCESSIBLE_CODES.has(error.code ?? "")) {
      return null;
    }
    throw new FsError("fs-error", `cannot list "${path}": ${messageOf(error)}`, 400);
  });
  if (level === null) {
    return {
      path,
      root: "",
      crumbs: [],
      entries: [],
      truncated: false,
      inaccessible: `\u65E0\u6CD5\u8BBF\u95EE\u6B64\u6587\u4EF6\u5939\uFF08\u53EF\u80FD\u53D7\u7CFB\u7EDF\u4FDD\u62A4\u6216\u6743\u9650\u4E0D\u8DB3\uFF09: ${path}`
    };
  }
  const rows = [];
  let overflow = 0;
  for await (const dirent of level) {
    if (rows.length >= maxEntries) {
      overflow += 1;
      continue;
    }
    rows.push({
      name: dirent.name,
      path: join(path, dirent.name),
      isDir: dirent.isDirectory(),
      isSymlink: dirent.isSymbolicLink(),
      broken: false,
      hidden: dirent.name.startsWith(".")
    });
  }
  await probeSymlinkTargets(rows);
  rows.sort(compareEntries);
  return {
    path,
    root: "",
    crumbs: [],
    entries: rows,
    truncated: overflow > 0
  };
}
var DETAIL_CONCURRENCY = 32;
async function attachDetails(rows) {
  let next = 0;
  const workers = Array.from({ length: Math.min(DETAIL_CONCURRENCY, rows.length) }, async () => {
    for (; ; ) {
      const index = next;
      next += 1;
      if (index >= rows.length) return;
      const row = rows[index];
      try {
        const info = await stat(row.path);
        row.size = info.size;
        row.mtime = info.mtimeMs;
      } catch {
      }
    }
  });
  await Promise.all(workers);
}
function withListingContext(path, root, listing) {
  listing.path = path;
  listing.root = root;
  listing.crumbs = crumbsOf(path, root);
  return listing;
}
function crumbsOf(path, root) {
  if (!isWithin(root, path)) return [{ name: root, path: root, hidden: false }];
  const out = [];
  let segs = relative(root, path).split(sep).filter(Boolean);
  if (segs.length === 0) return [{ name: rootLabel(root), path: root, hidden: false }];
  let cur = root;
  out.push({ name: rootLabel(cur), path: cur, hidden: false });
  for (const s of segs) {
    cur = join(cur, s);
    out.push({ name: s, path: cur, hidden: s.startsWith(".") });
  }
  return out;
}
function rootLabel(path) {
  const base = basename(path);
  return base !== "" ? base : path;
}
function parentOf(path) {
  const parent = dirname(path);
  return parent === path ? void 0 : parent;
}
async function uniquePath(destDir, name2) {
  const extIndex = name2.lastIndexOf(".");
  const hasExt = extIndex > 0;
  const stem = hasExt ? name2.slice(0, extIndex) : name2;
  const ext = hasExt ? name2.slice(extIndex) : "";
  let candidate = join(destDir, name2);
  let n = 2;
  for (; ; ) {
    try {
      await stat(candidate);
    } catch {
      return candidate;
    }
    candidate = join(destDir, `${stem} (${n})${ext}`);
    n += 1;
  }
}
async function statDetail(target) {
  const info = await stat(target);
  let size = info.size;
  if (info.isDirectory()) {
    size = await countDirSize(target);
  }
  return {
    name: basename(target),
    path: target,
    isDir: info.isDirectory(),
    size,
    mtime: info.mtimeMs,
    ext: info.isDirectory() ? "" : extOf(target)
  };
}
async function countDirSize(dir) {
  let total = 0;
  const walk = async (base) => {
    const entries = await opendir(base).catch(() => null);
    if (!entries) return;
    for await (const d of entries) {
      try {
        const info = await stat(join(base, d.name));
        if (info.isDirectory()) await walk(join(base, d.name));
        else total += info.size;
      } catch {
      }
    }
  };
  await walk(dir);
  return total;
}
function extOf(path) {
  const base = basename(path);
  const i = base.lastIndexOf(".");
  return i > 0 ? base.slice(i) : "";
}
function requireAbsolute(path) {
  if (!isAbsolute(path)) throw new FsError("bad-request", `"${path}" is not an absolute path`, 400);
  return resolve(path);
}
function isWithin(base, target, platform = process.platform) {
  const norm = (value) => value.replace(/[\\/]+/g, "/").replace(/\/$/, "");
  const b = norm(base);
  const t = norm(target);
  if (platform === "win32") {
    const lb = b.toLowerCase();
    const lt = t.toLowerCase();
    return lt === lb || lt.startsWith(`${lb}/`);
  }
  return t === b || t.startsWith(`${b}/`);
}
async function resolveRealPath(path, label) {
  try {
    return await realpath(path);
  } catch (error) {
    throw new FsError("fs-error", `cannot resolve ${label} "${path}": ${messageOf(error)}`, 400);
  }
}
function assertWithinWs(root, target) {
  if (!isWithin(root, target)) throw new FsError("forbidden", `path "${target}" is outside workspace`, 403);
}
var PROTECTED_ROOTS = (() => {
  const sys = (process.env.SystemRoot || process.env.WINDIR || "").trim().replace(/[\\/]+$/, "");
  return sys ? [sys] : [];
})();
function isProtectedPath(target) {
  for (const root of PROTECTED_ROOTS) {
    if (isWithin(root, target)) return true;
  }
  return false;
}
async function resolveExisting(path, label = "target") {
  const absolute = requireAbsolute(path);
  return resolveRealPath(absolute, label);
}
async function resolveWritePath(target, label = "target") {
  const absolute = requireAbsolute(target);
  let existingPath = absolute;
  const missingSegments = [];
  for (; ; ) {
    try {
      const realTarget = await realpath(existingPath);
      return missingSegments.reduce((path, segment) => join(path, segment), realTarget);
    } catch (error) {
      if (error.code !== "ENOENT") {
        throw new FsError("fs-error", `cannot resolve ${label} "${existingPath}": ${messageOf(error)}`, 400);
      }
      const parent = dirname(existingPath);
      if (parent === existingPath) throw new FsError("fs-error", `cannot resolve ${label} "${absolute}"`, 400);
      missingSegments.unshift(basename(existingPath));
      existingPath = parent;
    }
  }
}
async function ensureWsWritePath(root, target) {
  const absolute = requireAbsolute(target);
  const realRoot = await resolveRealPath(root, "workspace");
  let existingPath = absolute;
  const missingSegments = [];
  for (; ; ) {
    try {
      const realTarget = await realpath(existingPath);
      assertWithinWs(realRoot, realTarget);
      return missingSegments.reduce((path, segment) => join(path, segment), realTarget);
    } catch (error) {
      if (error.code !== "ENOENT") {
        if (error instanceof FsError) throw error;
        throw new FsError("fs-error", `cannot resolve target "${existingPath}": ${messageOf(error)}`, 400);
      }
      const parent = dirname(existingPath);
      if (parent === existingPath) throw new FsError("fs-error", `cannot resolve target "${absolute}"`, 400);
      missingSegments.unshift(basename(existingPath));
      existingPath = parent;
    }
  }
}

// src/host/store/root-store.ts
var store = /* @__PURE__ */ new Map();
var DEFAULT_KEY = "default";
function setRoot(key, root) {
  const k = key || DEFAULT_KEY;
  store.set(k, root);
  return root;
}
function getRoot(key) {
  return store.get(key || DEFAULT_KEY);
}

// src/host/routes/routes-util.ts
var PREFIX = "/api/dsh-file-workbench";
var WEB_DIR = fileURLToPath(new URL("./web", import.meta.url));
function sendJson(res, status, body) {
  res.writeHead(status, { "content-type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(body));
}
function json(res, status, body) {
  sendJson(res, status, body);
}
function fail(res, error) {
  if (error instanceof FsError) {
    return sendJson(res, error.status, { ok: false, error: error.message });
  }
  const msg = error instanceof Error ? error.message : String(error);
  return sendJson(res, 500, { ok: false, error: msg });
}
var MAX_BODY_SIZE = 512 * 1024 * 1024;
async function readBody(req) {
  return new Promise((resolvePromise, reject) => {
    let body = "";
    let size = 0;
    req.on("data", (c) => {
      size += c.length;
      if (size > MAX_BODY_SIZE) {
        body = "";
        reject(new FsError("too-large", `request body exceeds the ${MAX_BODY_SIZE} byte limit`, 413));
        return;
      }
      body += c.toString();
    });
    req.on("end", () => {
      try {
        resolvePromise(JSON.parse(body));
      } catch {
        resolvePromise(null);
      }
    });
  });
}
function queryOf(url) {
  return new URLSearchParams((url ?? "").split("?", 2)[1] ?? "");
}
var MIME = {
  ".js": "application/javascript",
  ".mjs": "application/javascript",
  ".css": "text/css",
  ".map": "application/json",
  ".json": "application/json",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".bmp": "image/bmp",
  ".avif": "image/avif",
  ".woff2": "font/woff2",
  ".html": "text/html"
};
var IMAGE_EXT = /* @__PURE__ */ new Set([".png", ".jpg", ".jpeg", ".svg", ".gif", ".ico", ".webp", ".bmp", ".avif"]);
function serveAsset(res, rel) {
  const safeRel = rel.replace(/\\/g, "/");
  if (safeRel.includes("..")) return json(res, 400, { ok: false, error: "bad asset path" });
  const filePath = resolve2(WEB_DIR, safeRel);
  if (!filePath.startsWith(resolve2(WEB_DIR) + "\\") && !filePath.startsWith(resolve2(WEB_DIR) + "/")) {
    return json(res, 400, { ok: false, error: "bad asset path" });
  }
  if (!existsSync2(filePath) || !statSync(filePath).isFile()) {
    return json(res, 404, { ok: false, error: "asset not found" });
  }
  const ext = filePath.slice(filePath.lastIndexOf(".")).toLowerCase();
  res.writeHead(200, {
    "content-type": MIME[ext] ?? "application/octet-stream",
    "cache-control": "public, max-age=31536000, immutable"
  });
  createReadStream(filePath).pipe(res);
}
async function spawnOpen(target, isDir) {
  await new Promise((resolvePromise, reject) => {
    let child;
    if (process.platform === "win32") {
      child = spawn("cmd", ["/c", "start", "", target], { detached: true, stdio: "ignore" });
    } else if (process.platform === "darwin") {
      child = spawn("open", [target], { detached: true, stdio: "ignore" });
    } else {
      child = spawn("xdg-open", [target], { detached: true, stdio: "ignore" });
    }
    child.on("error", (error) => reject(new FsError("fs-error", `\u65E0\u6CD5\u6253\u5F00 ${isDir ? "\u6587\u4EF6\u5939" : "\u6587\u4EF6"}: ${error.message}`, 500)));
    child.unref();
    setImmediate(resolvePromise);
  });
}
function streamFile(res, safe, inline) {
  return new Promise((resolvePromise) => {
    const name2 = basename2(safe);
    const ext = safe.slice(safe.lastIndexOf(".")).toLowerCase();
    const headers = {
      "content-type": inline ? MIME[ext] ?? "application/octet-stream" : "application/octet-stream",
      "content-length": String(statSync(safe).size)
    };
    if (!inline) {
      const asciiName = name2.replace(/[\\/]/g, "_").replace(/[^\x20-\x7e]/g, "_");
      headers["content-disposition"] = `attachment; filename="${asciiName}"; filename*=UTF-8''${encodeURIComponent(name2.replace(/[\\/]/g, "_"))}`;
    }
    if (inline) headers["cache-control"] = "private, max-age=300";
    res.writeHead(200, headers);
    const rs = createReadStream(safe);
    rs.on("error", () => {
      res.destroy();
      resolvePromise();
    });
    rs.on("end", () => resolvePromise());
    rs.pipe(res);
  });
}

// src/host/routes/routes-fs.ts
import { createWriteStream, existsSync as existsSync5, statSync as statSync2 } from "node:fs";
import { cp as cp2, mkdir as mkdir5, rename as rename2, stat as stat5, writeFile as writeFile5 } from "node:fs/promises";
import { basename as basename6, dirname as dirname5 } from "node:path";
import { homedir as homedir4 } from "node:os";

// src/host/fs/fs-search.ts
import { join as join2, relative as relative2, sep as sep2 } from "node:path";
import { opendir as opendir2, stat as stat2 } from "node:fs/promises";
import { readFile } from "node:fs/promises";
var DEFAULT_MAX_MATCHES = 200;
var DEFAULT_MAX_VISITED = 1e5;
var CONTENT_MIN_QUERY = 2;
var DEFAULT_MAX_CONTENT_READS = 400;
var CONTENT_MAX_BYTES = 128 * 1024;
var SEARCH_SKIP_DIRS = /* @__PURE__ */ new Set([
  ".git",
  "node_modules",
  ".pnpm-store",
  ".yarn",
  ".turbo",
  ".turbopack",
  ".next",
  ".nuxt",
  ".output",
  ".cache",
  ".parcel-cache",
  "coverage",
  "dist",
  "build",
  "out",
  ".umi",
  ".umi-production",
  ".dumi"
]);
async function fileContentSnippet(file, matcher) {
  try {
    const s = await stat2(file);
    if (!s.isFile() || s.size <= 0 || s.size > CONTENT_MAX_BYTES) return null;
    const buf = await readFile(file);
    const head = buf.subarray(0, Math.min(512, buf.length));
    if (head.includes(0)) return null;
    const text = buf.toString("utf8");
    const idx = matcher.find(text);
    if (idx === null || idx < 0) return null;
    const lines = text.split(/\r?\n/);
    const hitLine = text.slice(0, idx).split("\n").length - 1;
    const slice = lines.slice(Math.max(0, hitLine - 1), Math.min(lines.length, hitLine + 2));
    const raw = slice.join("\n").trim();
    return raw.length > 200 ? `${raw.slice(0, 200)}\u2026` : raw || "\u2026";
  } catch {
    return null;
  }
}
function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function makeMatcher(query, opts = {}) {
  const caseSensitive = opts.caseSensitive === true;
  if (opts.regex) {
    let re;
    try {
      re = new RegExp(query, caseSensitive ? "" : "i");
    } catch {
      re = new RegExp(escapeRegex(query), caseSensitive ? "" : "i");
    }
    return {
      testName: (name2) => re.test(name2),
      find: (text) => {
        re.lastIndex = 0;
        const m = re.exec(text);
        return m ? m.index : null;
      }
    };
  }
  const needle = query.trim();
  const lower = needle.toLowerCase();
  return {
    testName: (name2) => caseSensitive ? name2.includes(needle) : name2.toLowerCase().includes(lower),
    find: (text) => caseSensitive ? text.indexOf(needle) : text.toLowerCase().indexOf(lower)
  };
}
var normalize = (p) => p.split(sep2).join("/");
var REPLACE_MAX_FILES = 200;
async function replaceInFiles(root, query, replacement, opts) {
  const needle = query.trim();
  if (needle === "") return { changed: [], files: 0, replacements: 0, truncated: false };
  const maxVisited = opts.maxVisited ?? DEFAULT_MAX_VISITED;
  const maxContentReads = opts.maxContentReads ?? DEFAULT_MAX_CONTENT_READS;
  const maxFiles = opts.maxFiles ?? REPLACE_MAX_FILES;
  let re;
  if (opts.regex) {
    try {
      re = new RegExp(needle, opts.caseSensitive ? "g" : "gi");
    } catch {
      re = new RegExp(escapeRegex(needle), opts.caseSensitive ? "g" : "gi");
    }
  } else {
    re = new RegExp(escapeRegex(needle), opts.caseSensitive ? "g" : "gi");
  }
  const replacer = () => replacement;
  const changed = [];
  let replacements = 0;
  let visited = 0;
  let contentReads = 0;
  let truncated = false;
  const walk = async (dir) => {
    if (truncated) return;
    const level = await opendir2(dir).catch(() => void 0);
    if (level === void 0) return;
    for await (const dirent of level) {
      visited += 1;
      if (visited > maxVisited) {
        truncated = true;
        return;
      }
      if (dirent.isDirectory() && SEARCH_SKIP_DIRS.has(dirent.name.toLowerCase())) continue;
      if (dirent.isFile() && !dirent.isSymbolicLink() && contentReads < maxContentReads && changed.length < maxFiles) {
        contentReads += 1;
        const abs = join2(dir, dirent.name);
        const file = await tryReplaceFile(abs, re, replacer, opts.write).catch(() => null);
        if (file !== null) {
          changed.push(file);
          replacements += file.count;
        }
      }
      if (dirent.isDirectory() && !dirent.isSymbolicLink()) {
        await walk(join2(dir, dirent.name));
        if (truncated) return;
      }
    }
  };
  await walk(root);
  return {
    changed: [...new Set(changed.map((f) => f.rel))].sort().map(normalize),
    files: changed.length,
    replacements,
    truncated
  };
}
async function tryReplaceFile(abs, re, replacer, write) {
  const s = await stat2(abs);
  if (!s.isFile() || s.size <= 0 || s.size > CONTENT_MAX_BYTES) return null;
  const buf = await readFile(abs);
  const head = buf.subarray(0, Math.min(512, buf.length));
  if (head.includes(0)) return null;
  const text = buf.toString("utf8");
  re.lastIndex = 0;
  let count = 0;
  const next = text.replace(re, () => {
    count += 1;
    return replacer();
  });
  if (count === 0 || next === text) return null;
  await write(abs, next);
  return { rel: abs, count };
}
async function searchFiles(root, query, opts = {}) {
  const matcher = makeMatcher(query, opts);
  const needle = query.trim();
  if (needle === "") return { matches: [], byContent: [], snippets: {}, truncated: false };
  const maxMatches = opts.maxMatches ?? DEFAULT_MAX_MATCHES;
  const maxVisited = opts.maxVisited ?? DEFAULT_MAX_VISITED;
  const maxContentReads = opts.maxContentReads ?? DEFAULT_MAX_CONTENT_READS;
  const doContent = needle.length >= CONTENT_MIN_QUERY;
  const matches = [];
  const byContent = [];
  const snippets = {};
  let visited = 0;
  let contentReads = 0;
  let truncated = false;
  const walk = async (dir) => {
    if (truncated) return;
    const level = await opendir2(dir).catch(() => void 0);
    if (level === void 0) return;
    for await (const dirent of level) {
      visited += 1;
      if (visited > maxVisited) {
        truncated = true;
        return;
      }
      if (dirent.isDirectory() && SEARCH_SKIP_DIRS.has(dirent.name.toLowerCase())) continue;
      const rel = join2(relative2(root, dir), dirent.name);
      let matchedName = false;
      if (matcher.testName(dirent.name)) {
        matches.push(rel);
        matchedName = true;
        if (matches.length >= maxMatches) {
          truncated = true;
          return;
        }
      }
      if (doContent && !matchedName && dirent.isFile() && !dirent.isSymbolicLink() && contentReads < maxContentReads && matches.length < maxMatches) {
        contentReads += 1;
        const snippet = await fileContentSnippet(join2(dir, dirent.name), matcher);
        if (snippet !== null) {
          matches.push(rel);
          byContent.push(rel);
          snippets[normalize(rel)] = snippet;
          if (matches.length >= maxMatches) {
            truncated = true;
            return;
          }
        }
      }
      if (dirent.isDirectory() && !dirent.isSymbolicLink()) {
        await walk(join2(dir, dirent.name));
        if (truncated) return;
      }
    }
  };
  await walk(root);
  const sorted = matches.sort();
  return {
    matches: sorted.map(normalize),
    byContent: new Set(byContent).size ? [...new Set(byContent)].map(normalize) : [],
    snippets,
    truncated
  };
}

// src/host/fs/fs-drives.ts
import { statfs } from "node:fs/promises";
import { existsSync as existsSync3 } from "node:fs";
import { execFile } from "node:child_process";
var LABEL_CACHE_TTL = 5 * 60 * 1e3;
var LABEL_TIMEOUT = 2500;
var labelCache = null;
function win32Letters() {
  const out = [];
  for (let c = 67; c <= 90; c += 1) out.push(String.fromCharCode(c));
  return out.filter((letter) => {
    try {
      return existsSync3(`${letter}:\\`);
    } catch {
      return false;
    }
  });
}
function queryWinVolumes() {
  return new Promise((resolve5) => {
    const script = "[Console]::OutputEncoding=[Text.Encoding]::UTF8; Get-CimInstance Win32_LogicalDisk | Select-Object DeviceID,VolumeName,FileSystem,DriveType | ConvertTo-Json -Compress";
    execFile(
      "powershell.exe",
      ["-NoProfile", "-NonInteractive", "-Command", script],
      { timeout: LABEL_TIMEOUT, windowsHide: true, maxBuffer: 1 << 20 },
      (error, stdout) => {
        const map = /* @__PURE__ */ new Map();
        if (error || !stdout) {
          resolve5(map);
          return;
        }
        try {
          const parsed = JSON.parse(stdout);
          const rows = Array.isArray(parsed) ? parsed : [parsed];
          for (const row of rows) {
            const r = row;
            const deviceId = String(r.DeviceID ?? "");
            const letter = deviceId.replace(":", "").toUpperCase();
            if (letter.length !== 1) continue;
            map.set(letter, {
              letter,
              label: typeof r.VolumeName === "string" ? r.VolumeName.trim() : "",
              fsType: typeof r.FileSystem === "string" ? r.FileSystem : "",
              driveType: Number(r.DriveType ?? 3) || 3
            });
          }
        } catch {
        }
        resolve5(map);
      }
    );
  });
}
async function winVolumes() {
  if (process.platform !== "win32") return /* @__PURE__ */ new Map();
  const now = Date.now();
  if (labelCache && now - labelCache.at < LABEL_CACHE_TTL) return labelCache.map;
  const map = await queryWinVolumes();
  labelCache = { at: now, map };
  return map;
}
async function capacityOf(root) {
  try {
    const st = await statfs(root);
    const total = st.bsize * st.blocks;
    const free = st.bsize * (st.bavail ?? st.bfree);
    return { total: total > 0 ? total : void 0, free: Number.isFinite(free) ? free : void 0 };
  } catch {
    return {};
  }
}
function displayName(letter, label) {
  if (letter) return label ? `${label} (${letter}:)` : `\u672C\u5730\u78C1\u76D8 (${letter}:)`;
  return label || "\u6839\u76EE\u5F55";
}
async function listDrives() {
  const isWin = process.platform === "win32";
  const letters = isWin ? win32Letters() : [""];
  const volumes = isWin ? await winVolumes() : /* @__PURE__ */ new Map();
  const drives = await Promise.all(
    letters.map(async (letter) => {
      const root = isWin ? `${letter}:\\` : existsSync3("/") ? "/" : "";
      const vol = volumes.get(letter);
      const label = vol?.label ?? "";
      const { total, free } = root ? await capacityOf(root) : {};
      return {
        letter,
        path: root,
        label,
        name: displayName(letter, label),
        total,
        free,
        fsType: vol?.fsType ?? "",
        removable: isWin ? vol?.driveType === 2 || vol?.driveType === 5 : false
      };
    })
  );
  return drives.filter((d) => d.path !== "");
}

// src/host/fs/fs-read.ts
import { dirname as dirname2 } from "node:path";
import { mkdir, writeFile } from "node:fs/promises";
async function saveText(root, target, content) {
  const safe = await ensureWsWritePath(root, target);
  await mkdir(dirname2(safe), { recursive: true });
  await writeFile(safe, content, "utf8");
  return safe;
}

// src/host/fs/fs-zip.ts
import { basename as basename3, dirname as dirname3, join as join3, resolve as resolve3, isAbsolute as isAbsolute2, sep as sep3 } from "node:path";
import { mkdir as mkdir2, opendir as opendir3, readFile as readFile2, stat as stat3, writeFile as writeFile2 } from "node:fs/promises";

// node_modules/fflate/esm/index.mjs
import { createRequire } from "module";
var require2 = createRequire("/");
var _a;
var Worker;
var isMarkedAsUntransferable;
try {
  _a = require2("worker_threads"), Worker = _a.Worker, isMarkedAsUntransferable = _a.isMarkedAsUntransferable;
} catch (e) {
}
var u8 = Uint8Array;
var u16 = Uint16Array;
var i32 = Int32Array;
var fleb = new u8([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]);
var fdeb = new u8([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]);
var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var freb = function(eb, start) {
  var b = new u16(31);
  for (var i = 0; i < 31; ++i) {
    b[i] = start += 1 << eb[i - 1];
  }
  var r = new i32(b[30]);
  for (var i = 1; i < 30; ++i) {
    for (var j = b[i]; j < b[i + 1]; ++j) {
      r[j] = j - b[i] << 5 | i;
    }
  }
  return { b, r };
};
var _a = freb(fleb, 2);
var fl = _a.b;
var revfl = _a.r;
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0);
var fd = _b.b;
var revfd = _b.r;
var rev = new u16(32768);
for (i = 0; i < 32768; ++i) {
  x = (i & 43690) >> 1 | (i & 21845) << 1;
  x = (x & 52428) >> 2 | (x & 13107) << 2;
  x = (x & 61680) >> 4 | (x & 3855) << 4;
  rev[i] = ((x & 65280) >> 8 | (x & 255) << 8) >> 1;
}
var x;
var i;
var hMap = function(cd, mb, r) {
  var s = cd.length;
  var i = 0;
  var l = new u16(mb);
  for (; i < s; ++i) {
    if (cd[i])
      ++l[cd[i] - 1];
  }
  var le = new u16(mb);
  for (i = 1; i < mb; ++i) {
    le[i] = le[i - 1] + l[i - 1] << 1;
  }
  var co;
  if (r) {
    co = new u16(1 << mb);
    var rvb = 15 - mb;
    for (i = 0; i < s; ++i) {
      if (cd[i]) {
        var sv = i << 4 | cd[i];
        var r_1 = mb - cd[i];
        var v = le[cd[i] - 1]++ << r_1;
        for (var m = v | (1 << r_1) - 1; v <= m; ++v) {
          co[rev[v] >> rvb] = sv;
        }
      }
    }
  } else {
    co = new u16(s);
    for (i = 0; i < s; ++i) {
      if (cd[i]) {
        co[i] = rev[le[cd[i] - 1]++] >> 15 - cd[i];
      }
    }
  }
  return co;
};
var flt = new u8(288);
for (i = 0; i < 144; ++i)
  flt[i] = 8;
var i;
for (i = 144; i < 256; ++i)
  flt[i] = 9;
var i;
for (i = 256; i < 280; ++i)
  flt[i] = 7;
var i;
for (i = 280; i < 288; ++i)
  flt[i] = 8;
var i;
var fdt = new u8(32);
for (i = 0; i < 32; ++i)
  fdt[i] = 5;
var i;
var flm = /* @__PURE__ */ hMap(flt, 9, 0);
var flrm = /* @__PURE__ */ hMap(flt, 9, 1);
var fdm = /* @__PURE__ */ hMap(fdt, 5, 0);
var fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
var max = function(a) {
  var m = a[0];
  for (var i = 1; i < a.length; ++i) {
    if (a[i] > m)
      m = a[i];
  }
  return m;
};
var bits = function(d, p, m) {
  var o = p / 8 | 0;
  return (d[o] | d[o + 1] << 8) >> (p & 7) & m;
};
var bits16 = function(d, p) {
  var o = p / 8 | 0;
  return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >> (p & 7);
};
var shft = function(p) {
  return (p + 7) / 8 | 0;
};
var slc = function(v, s, e) {
  if (s == null || s < 0)
    s = 0;
  if (e == null || e > v.length)
    e = v.length;
  return new u8(v.subarray(s, e));
};
var ec = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  // determined by compression function
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
];
var err = function(ind, msg, nt) {
  var e = new Error(msg || ec[ind]);
  e.code = ind;
  if (Error.captureStackTrace)
    Error.captureStackTrace(e, err);
  if (!nt)
    throw e;
  return e;
};
var inflt = function(dat, st, buf, dict) {
  var sl = dat.length, dl = dict ? dict.length : 0;
  if (!sl || st.f && !st.l)
    return buf || new u8(0);
  var noBuf = !buf;
  var resize = noBuf || st.i != 2;
  var noSt = st.i;
  if (noBuf)
    buf = new u8(sl * 3);
  var cbuf = function(l2) {
    var bl = buf.length;
    if (l2 > bl) {
      var nbuf = new u8(Math.max(bl * 2, l2));
      nbuf.set(buf);
      buf = nbuf;
    }
  };
  var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
  var tbts = sl * 8;
  do {
    if (!lm) {
      final = bits(dat, pos, 1);
      var type = bits(dat, pos + 1, 3);
      pos += 3;
      if (!type) {
        var s = shft(pos) + 4, l = dat[s - 4] | dat[s - 3] << 8, t = s + l;
        if (t > sl) {
          if (noSt)
            err(0);
          break;
        }
        if (resize)
          cbuf(bt + l);
        buf.set(dat.subarray(s, t), bt);
        st.b = bt += l, st.p = pos = t * 8, st.f = final;
        continue;
      } else if (type == 1)
        lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
      else if (type == 2) {
        var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
        var tl = hLit + bits(dat, pos + 5, 31) + 1;
        pos += 14;
        var ldt = new u8(tl);
        var clt = new u8(19);
        for (var i = 0; i < hcLen; ++i) {
          clt[clim[i]] = bits(dat, pos + i * 3, 7);
        }
        pos += hcLen * 3;
        var clb = max(clt), clbmsk = (1 << clb) - 1;
        var clm = hMap(clt, clb, 1);
        for (var i = 0; i < tl; ) {
          var r = clm[bits(dat, pos, clbmsk)];
          pos += r & 15;
          var s = r >> 4;
          if (s < 16) {
            ldt[i++] = s;
          } else {
            var c = 0, n = 0;
            if (s == 16)
              n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i - 1];
            else if (s == 17)
              n = 3 + bits(dat, pos, 7), pos += 3;
            else if (s == 18)
              n = 11 + bits(dat, pos, 127), pos += 7;
            while (n--)
              ldt[i++] = c;
          }
        }
        var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
        lbt = max(lt);
        dbt = max(dt);
        lm = hMap(lt, lbt, 1);
        dm = hMap(dt, dbt, 1);
      } else
        err(1);
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
    }
    if (resize)
      cbuf(bt + 131072);
    var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
    var lpos = pos;
    for (; ; lpos = pos) {
      var c = lm[bits16(dat, pos) & lms], sym = c >> 4;
      pos += c & 15;
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
      if (!c)
        err(2);
      if (sym < 256)
        buf[bt++] = sym;
      else if (sym == 256) {
        lpos = pos, lm = null;
        break;
      } else {
        var add = sym - 254;
        if (sym > 264) {
          var i = sym - 257, b = fleb[i];
          add = bits(dat, pos, (1 << b) - 1) + fl[i];
          pos += b;
        }
        var d = dm[bits16(dat, pos) & dms], dsym = d >> 4;
        if (!d)
          err(3);
        pos += d & 15;
        var dt = fd[dsym];
        if (dsym > 3) {
          var b = fdeb[dsym];
          dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
        }
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
        if (resize)
          cbuf(bt + 131072);
        var end = bt + add;
        if (bt < dt) {
          var shift = dl - dt, dend = Math.min(dt, end);
          if (shift + bt < 0)
            err(3);
          for (; bt < dend; ++bt)
            buf[bt] = dict[shift + bt];
        }
        for (; bt < end; ++bt)
          buf[bt] = buf[bt - dt];
      }
    }
    st.l = lm, st.p = lpos, st.b = bt, st.f = final;
    if (lm)
      final = 1, st.m = lbt, st.d = dm, st.n = dbt;
  } while (!final);
  return bt != buf.length && noBuf ? slc(buf, 0, bt) : buf.subarray(0, bt);
};
var wbits = function(d, p, v) {
  v <<= p & 7;
  var o = p / 8 | 0;
  d[o] |= v;
  d[o + 1] |= v >> 8;
};
var wbits16 = function(d, p, v) {
  v <<= p & 7;
  var o = p / 8 | 0;
  d[o] |= v;
  d[o + 1] |= v >> 8;
  d[o + 2] |= v >> 16;
};
var hTree = function(d, mb) {
  var t = [];
  for (var i = 0; i < d.length; ++i) {
    if (d[i])
      t.push({ s: i, f: d[i] });
  }
  var s = t.length;
  var t2 = t.slice();
  if (!s)
    return { t: et, l: 0 };
  if (s == 1) {
    var v = new u8(t[0].s + 1);
    v[t[0].s] = 1;
    return { t: v, l: 1 };
  }
  t.sort(function(a, b) {
    return a.f - b.f;
  });
  t.push({ s: -1, f: 25001 });
  var l = t[0], r = t[1], i0 = 0, i1 = 1, i2 = 2;
  t[0] = { s: -1, f: l.f + r.f, l, r };
  while (i1 != s - 1) {
    l = t[t[i0].f < t[i2].f ? i0++ : i2++];
    r = t[i0 != i1 && t[i0].f < t[i2].f ? i0++ : i2++];
    t[i1++] = { s: -1, f: l.f + r.f, l, r };
  }
  var maxSym = t2[0].s;
  for (var i = 1; i < s; ++i) {
    if (t2[i].s > maxSym)
      maxSym = t2[i].s;
  }
  var tr = new u16(maxSym + 1);
  var mbt = ln(t[i1 - 1], tr, 0);
  if (mbt > mb) {
    var i = 0, dt = 0;
    var lft = mbt - mb, cst = 1 << lft;
    t2.sort(function(a, b) {
      return tr[b.s] - tr[a.s] || a.f - b.f;
    });
    for (; i < s; ++i) {
      var i2_1 = t2[i].s;
      if (tr[i2_1] > mb) {
        dt += cst - (1 << mbt - tr[i2_1]);
        tr[i2_1] = mb;
      } else
        break;
    }
    dt >>= lft;
    while (dt > 0) {
      var i2_2 = t2[i].s;
      if (tr[i2_2] < mb)
        dt -= 1 << mb - tr[i2_2]++ - 1;
      else
        ++i;
    }
    for (; i >= 0 && dt; --i) {
      var i2_3 = t2[i].s;
      if (tr[i2_3] == mb) {
        --tr[i2_3];
        ++dt;
      }
    }
    mbt = mb;
  }
  return { t: new u8(tr), l: mbt };
};
var ln = function(n, l, d) {
  return n.s == -1 ? Math.max(ln(n.l, l, d + 1), ln(n.r, l, d + 1)) : l[n.s] = d;
};
var lc = function(c) {
  var s = c.length;
  while (s && !c[--s])
    ;
  var cl = new u16(++s);
  var cli = 0, cln = c[0], cls = 1;
  var w = function(v) {
    cl[cli++] = v;
  };
  for (var i = 1; i <= s; ++i) {
    if (c[i] == cln && i != s)
      ++cls;
    else {
      if (!cln && cls > 2) {
        for (; cls > 138; cls -= 138)
          w(32754);
        if (cls > 2) {
          w(cls > 10 ? cls - 11 << 5 | 28690 : cls - 3 << 5 | 12305);
          cls = 0;
        }
      } else if (cls > 3) {
        w(cln), --cls;
        for (; cls > 6; cls -= 6)
          w(8304);
        if (cls > 2)
          w(cls - 3 << 5 | 8208), cls = 0;
      }
      while (cls--)
        w(cln);
      cls = 1;
      cln = c[i];
    }
  }
  return { c: cl.subarray(0, cli), n: s };
};
var clen = function(cf, cl) {
  var l = 0;
  for (var i = 0; i < cl.length; ++i)
    l += cf[i] * cl[i];
  return l;
};
var wfblk = function(out, pos, dat) {
  var s = dat.length;
  var o = shft(pos + 2);
  out[o] = s & 255;
  out[o + 1] = s >> 8;
  out[o + 2] = out[o] ^ 255;
  out[o + 3] = out[o + 1] ^ 255;
  for (var i = 0; i < s; ++i)
    out[o + i + 4] = dat[i];
  return (o + 4 + s) * 8;
};
var wblk = function(dat, out, final, syms, lf, df, eb, li, bs, bl, p) {
  wbits(out, p++, final);
  ++lf[256];
  var _a2 = hTree(lf, 15), dlt = _a2.t, mlb2 = _a2.l;
  var _b2 = hTree(df, 15), ddt = _b2.t, mdb = _b2.l;
  var _c = lc(dlt), lclt = _c.c, nlc = _c.n;
  var _d = lc(ddt), lcdt = _d.c, ndc = _d.n;
  var lcfreq = new u16(19);
  for (var i = 0; i < lclt.length; ++i)
    ++lcfreq[lclt[i] & 31];
  for (var i = 0; i < lcdt.length; ++i)
    ++lcfreq[lcdt[i] & 31];
  var _e = hTree(lcfreq, 7), lct = _e.t, mlcb = _e.l;
  var nlcc = 19;
  for (; nlcc > 4 && !lct[clim[nlcc - 1]]; --nlcc)
    ;
  var flen = bl + 5 << 3;
  var ftlen = clen(lf, flt) + clen(df, fdt) + eb;
  var dtlen = clen(lf, dlt) + clen(df, ddt) + eb + 14 + 3 * nlcc + clen(lcfreq, lct) + 2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18];
  if (bs >= 0 && flen <= ftlen && flen <= dtlen)
    return wfblk(out, p, dat.subarray(bs, bs + bl));
  var lm, ll, dm, dl;
  wbits(out, p, 1 + (dtlen < ftlen)), p += 2;
  if (dtlen < ftlen) {
    lm = hMap(dlt, mlb2, 0), ll = dlt, dm = hMap(ddt, mdb, 0), dl = ddt;
    var llm = hMap(lct, mlcb, 0);
    wbits(out, p, nlc - 257);
    wbits(out, p + 5, ndc - 1);
    wbits(out, p + 10, nlcc - 4);
    p += 14;
    for (var i = 0; i < nlcc; ++i)
      wbits(out, p + 3 * i, lct[clim[i]]);
    p += 3 * nlcc;
    var lcts = [lclt, lcdt];
    for (var it = 0; it < 2; ++it) {
      var clct = lcts[it];
      for (var i = 0; i < clct.length; ++i) {
        var len = clct[i] & 31;
        wbits(out, p, llm[len]), p += lct[len];
        if (len > 15)
          wbits(out, p, clct[i] >> 5 & 127), p += clct[i] >> 12;
      }
    }
  } else {
    lm = flm, ll = flt, dm = fdm, dl = fdt;
  }
  for (var i = 0; i < li; ++i) {
    var sym = syms[i];
    if (sym > 255) {
      var len = sym >> 18 & 31;
      wbits16(out, p, lm[len + 257]), p += ll[len + 257];
      if (len > 7)
        wbits(out, p, sym >> 23 & 31), p += fleb[len];
      var dst = sym & 31;
      wbits16(out, p, dm[dst]), p += dl[dst];
      if (dst > 3)
        wbits16(out, p, sym >> 5 & 8191), p += fdeb[dst];
    } else {
      wbits16(out, p, lm[sym]), p += ll[sym];
    }
  }
  wbits16(out, p, lm[256]);
  return p + ll[256];
};
var deo = /* @__PURE__ */ new i32([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]);
var et = /* @__PURE__ */ new u8(0);
var dflt = function(dat, lvl, plvl, pre, post, st) {
  var s = st.z || dat.length;
  var o = new u8(pre + s + 5 * (1 + Math.ceil(s / 7e3)) + post);
  var w = o.subarray(pre, o.length - post);
  var lst = st.l;
  var pos = (st.r || 0) & 7;
  if (lvl) {
    if (pos)
      w[0] = st.r >> 3;
    var opt = deo[lvl - 1];
    var n = opt >> 13, c = opt & 8191;
    var msk_1 = (1 << plvl) - 1;
    var prev = st.p || new u16(32768), head = st.h || new u16(msk_1 + 1);
    var bs1_1 = Math.ceil(plvl / 3), bs2_1 = 2 * bs1_1;
    var hsh = function(i2) {
      return (dat[i2] ^ dat[i2 + 1] << bs1_1 ^ dat[i2 + 2] << bs2_1) & msk_1;
    };
    var syms = new i32(25e3);
    var lf = new u16(288), df = new u16(32);
    var lc_1 = 0, eb = 0, i = st.i || 0, li = 0, wi = st.w || 0, bs = 0;
    for (; i + 2 < s; ++i) {
      var hv = hsh(i);
      var imod = i & 32767, pimod = head[hv];
      prev[imod] = pimod;
      head[hv] = imod;
      if (wi <= i) {
        var rem = s - i;
        if ((lc_1 > 7e3 || li > 24576) && (rem > 423 || !lst)) {
          pos = wblk(dat, w, 0, syms, lf, df, eb, li, bs, i - bs, pos);
          li = lc_1 = eb = 0, bs = i;
          for (var j = 0; j < 286; ++j)
            lf[j] = 0;
          for (var j = 0; j < 30; ++j)
            df[j] = 0;
        }
        var l = 2, d = 0, ch_1 = c, dif = imod - pimod & 32767;
        if (rem > 2 && hv == hsh(i - dif)) {
          var maxn = Math.min(n, rem) - 1;
          var maxd = Math.min(32767, i);
          var ml = Math.min(258, rem);
          while (dif <= maxd && --ch_1 && imod != pimod) {
            if (dat[i + l] == dat[i + l - dif]) {
              var nl = 0;
              for (; nl < ml && dat[i + nl] == dat[i + nl - dif]; ++nl)
                ;
              if (nl > l) {
                l = nl, d = dif;
                if (nl > maxn)
                  break;
                var mmd = Math.min(dif, nl - 2);
                var md = 0;
                for (var j = 0; j < mmd; ++j) {
                  var ti = i - dif + j & 32767;
                  var pti = prev[ti];
                  var cd = ti - pti & 32767;
                  if (cd > md)
                    md = cd, pimod = ti;
                }
              }
            }
            imod = pimod, pimod = prev[imod];
            dif += imod - pimod & 32767;
          }
        }
        if (d) {
          syms[li++] = 268435456 | revfl[l] << 18 | revfd[d];
          var lin = revfl[l] & 31, din = revfd[d] & 31;
          eb += fleb[lin] + fdeb[din];
          ++lf[257 + lin];
          ++df[din];
          wi = i + l;
          ++lc_1;
        } else {
          syms[li++] = dat[i];
          ++lf[dat[i]];
        }
      }
    }
    for (i = Math.max(i, wi); i < s; ++i) {
      syms[li++] = dat[i];
      ++lf[dat[i]];
    }
    pos = wblk(dat, w, lst, syms, lf, df, eb, li, bs, i - bs, pos);
    if (!lst) {
      st.r = pos & 7 | w[pos / 8 | 0] << 3;
      pos -= 7;
      st.h = head, st.p = prev, st.i = i, st.w = wi;
    }
  } else {
    for (var i = st.w || 0; i < s + lst; i += 65535) {
      var e = i + 65535;
      if (e >= s) {
        w[pos / 8 | 0] = lst;
        e = s;
      }
      pos = wfblk(w, pos + 1, dat.subarray(i, e));
    }
    st.i = s;
  }
  return slc(o, 0, pre + shft(pos) + post);
};
var crct = /* @__PURE__ */ function() {
  var t = new Int32Array(256);
  for (var i = 0; i < 256; ++i) {
    var c = i, k = 9;
    while (--k)
      c = (c & 1 && -306674912) ^ c >>> 1;
    t[i] = c;
  }
  return t;
}();
var crc = function() {
  var c = -1;
  return {
    p: function(d) {
      var cr = c;
      for (var i = 0; i < d.length; ++i)
        cr = crct[cr & 255 ^ d[i]] ^ cr >>> 8;
      c = cr;
    },
    d: function() {
      return ~c;
    }
  };
};
var dopt = function(dat, opt, pre, post, st) {
  if (!st) {
    st = { l: 1 };
    if (opt.dictionary) {
      var dict = opt.dictionary.subarray(-32768);
      var newDat = new u8(dict.length + dat.length);
      newDat.set(dict);
      newDat.set(dat, dict.length);
      dat = newDat;
      st.w = dict.length;
    }
  }
  return dflt(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? st.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : 20 : 12 + opt.mem, pre, post, st);
};
var mrg = function(a, b) {
  var o = {};
  for (var k in a)
    o[k] = a[k];
  for (var k in b)
    o[k] = b[k];
  return o;
};
var b2 = function(d, b) {
  return d[b] | d[b + 1] << 8;
};
var b4 = function(d, b) {
  return (d[b] | d[b + 1] << 8 | d[b + 2] << 16 | d[b + 3] << 24) >>> 0;
};
var b8 = function(d, b) {
  return b4(d, b) + b4(d, b + 4) * 4294967296;
};
var wbytes = function(d, b, v) {
  for (; v; ++b)
    d[b] = v, v >>>= 8;
};
function deflateSync(data, opts) {
  return dopt(data, opts || {}, 0, 0);
}
function inflateSync(data, opts) {
  return inflt(data, { i: 2 }, opts && opts.out, opts && opts.dictionary);
}
var fltn = function(d, p, t, o) {
  for (var k in d) {
    var val = d[k], n = p + k, op = o;
    if (Array.isArray(val))
      op = mrg(o, val[1]), val = val[0];
    if (ArrayBuffer.isView(val))
      t[n] = [val, op];
    else {
      t[n += "/"] = [new u8(0), op];
      fltn(val, n, t, o);
    }
  }
};
var te = typeof TextEncoder != "undefined" && /* @__PURE__ */ new TextEncoder();
var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
var tds = 0;
try {
  td.decode(et, { stream: true });
  tds = 1;
} catch (e) {
}
var dutf8 = function(d) {
  for (var r = "", i = 0; ; ) {
    var c = d[i++];
    var eb = (c > 127) + (c > 223) + (c > 239);
    if (i + eb > d.length)
      return { s: r, r: slc(d, i - 1) };
    if (!eb)
      r += String.fromCharCode(c);
    else if (eb == 3) {
      c = ((c & 15) << 18 | (d[i++] & 63) << 12 | (d[i++] & 63) << 6 | d[i++] & 63) - 65536, r += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023);
    } else if (eb & 1)
      r += String.fromCharCode((c & 31) << 6 | d[i++] & 63);
    else
      r += String.fromCharCode((c & 15) << 12 | (d[i++] & 63) << 6 | d[i++] & 63);
  }
};
function strToU8(str, latin1) {
  if (latin1) {
    var ar_1 = new u8(str.length);
    for (var i = 0; i < str.length; ++i)
      ar_1[i] = str.charCodeAt(i);
    return ar_1;
  }
  if (te)
    return te.encode(str);
  var l = str.length;
  var ar = new u8(str.length + (str.length >> 1));
  var ai = 0;
  var w = function(v) {
    ar[ai++] = v;
  };
  for (var i = 0; i < l; ++i) {
    if (ai + 5 > ar.length) {
      var n = new u8(ai + 8 + (l - i << 1));
      n.set(ar);
      ar = n;
    }
    var c = str.charCodeAt(i);
    if (c < 128 || latin1)
      w(c);
    else if (c < 2048)
      w(192 | c >> 6), w(128 | c & 63);
    else if (c > 55295 && c < 57344)
      c = 65536 + (c & 1023 << 10) | str.charCodeAt(++i) & 1023, w(240 | c >> 18), w(128 | c >> 12 & 63), w(128 | c >> 6 & 63), w(128 | c & 63);
    else
      w(224 | c >> 12), w(128 | c >> 6 & 63), w(128 | c & 63);
  }
  return slc(ar, 0, ai);
}
function strFromU8(dat, latin1) {
  if (latin1) {
    var r = "";
    for (var i = 0; i < dat.length; i += 16384)
      r += String.fromCharCode.apply(null, dat.subarray(i, i + 16384));
    return r;
  } else if (td) {
    return td.decode(dat);
  } else {
    var _a2 = dutf8(dat), s = _a2.s, r = _a2.r;
    if (r.length)
      err(8);
    return s;
  }
}
var slzh = function(d, b) {
  return b + 30 + b2(d, b + 26) + b2(d, b + 28);
};
var zh = function(d, b, z) {
  var fnl = b2(d, b + 28), efl = b2(d, b + 30), fn = strFromU8(d.subarray(b + 46, b + 46 + fnl), !(b2(d, b + 8) & 2048)), es = b + 46 + fnl;
  var _a2 = z64hs(d, es, efl, z, b4(d, b + 20), b4(d, b + 24), b4(d, b + 42)), sc = _a2[0], su = _a2[1], off = _a2[2];
  return [b2(d, b + 10), sc, su, fn, es + efl + b2(d, b + 32), off];
};
var z64hs = function(d, b, l, z, sc, su, off) {
  var nsc = sc == 4294967295, nsu = su == 4294967295, noff = off == 4294967295, e = b + l;
  var nf = nsc + nsu + noff;
  if (z && nf) {
    for (; b + 4 < e; b += 4 + b2(d, b + 2)) {
      if (b2(d, b) == 1) {
        return [
          nsc ? b8(d, b + 4 + 8 * nsu) : sc,
          nsu ? b8(d, b + 4) : su,
          noff ? b8(d, b + 4 + 8 * (nsu + nsc)) : off,
          1
        ];
      }
    }
    if (z < 2)
      err(13);
  }
  return [sc, su, off, 0];
};
var exfl = function(ex) {
  var le = 0;
  if (ex) {
    for (var k in ex) {
      var l = ex[k].length;
      if (l > 65535)
        err(9);
      le += l + 4;
    }
  }
  return le;
};
var wzh = function(d, b, f, fn, u, c, ce, co) {
  var fl2 = fn.length, ex = f.extra, col = co && co.length;
  var exl = exfl(ex);
  wbytes(d, b, ce != null ? 33639248 : 67324752), b += 4;
  if (ce != null)
    d[b++] = 20, d[b++] = f.os;
  d[b] = 20, b += 2;
  d[b++] = f.flag << 1 | (c < 0 && 8), d[b++] = u && 8;
  d[b++] = f.compression & 255, d[b++] = f.compression >> 8;
  var dt = new Date(f.mtime == null ? Date.now() : f.mtime), y = dt.getFullYear() - 1980;
  if (y < 0 || y > 119)
    err(10);
  wbytes(d, b, y << 25 | dt.getMonth() + 1 << 21 | dt.getDate() << 16 | dt.getHours() << 11 | dt.getMinutes() << 5 | dt.getSeconds() >> 1), b += 4;
  if (c != -1) {
    wbytes(d, b, f.crc);
    wbytes(d, b + 4, c < 0 ? -c - 2 : c);
    wbytes(d, b + 8, f.size);
  }
  wbytes(d, b + 12, fl2);
  wbytes(d, b + 14, exl), b += 16;
  if (ce != null) {
    wbytes(d, b, col);
    wbytes(d, b + 6, f.attrs);
    wbytes(d, b + 10, ce), b += 14;
  }
  d.set(fn, b);
  b += fl2;
  if (exl) {
    for (var k in ex) {
      var exf = ex[k], l = exf.length;
      wbytes(d, b, +k);
      wbytes(d, b + 2, l);
      d.set(exf, b + 4), b += 4 + l;
    }
  }
  if (col)
    d.set(co, b), b += col;
  return b;
};
var wzf = function(o, b, c, d, e) {
  wbytes(o, b, 101010256);
  wbytes(o, b + 8, c);
  wbytes(o, b + 10, c);
  wbytes(o, b + 12, d);
  wbytes(o, b + 16, e);
};
function zipSync(data, opts) {
  if (!opts)
    opts = {};
  var r = {};
  var files = [];
  fltn(data, "", r, opts);
  var o = 0;
  var tot = 0;
  for (var fn in r) {
    var _a2 = r[fn], file = _a2[0], p = _a2[1];
    var compression = p.level == 0 ? 0 : 8;
    var f = strToU8(fn), s = f.length;
    var com = p.comment, m = com && strToU8(com), ms = m && m.length;
    var exl = exfl(p.extra);
    if (s > 65535)
      err(11);
    var d = compression ? deflateSync(file, p) : file, l = d.length;
    var c = crc();
    c.p(file);
    files.push(mrg(p, {
      size: file.length,
      crc: c.d(),
      c: d,
      f,
      m,
      u: s != fn.length || m && com.length != ms,
      o,
      compression
    }));
    o += 30 + s + exl + l;
    tot += 76 + 2 * (s + exl) + (ms || 0) + l;
  }
  var out = new u8(tot + 22), oe = o, cdl = tot - o;
  for (var i = 0; i < files.length; ++i) {
    var f = files[i];
    wzh(out, f.o, f, f.f, f.u, f.c.length);
    var badd = 30 + f.f.length + exfl(f.extra);
    out.set(f.c, f.o + badd);
    wzh(out, o, f, f.f, f.u, f.c.length, f.o, f.m), o += 16 + badd + (f.m ? f.m.length : 0);
  }
  wzf(out, o, files.length, cdl, oe);
  return out;
}
function unzipSync(data, opts) {
  var files = {};
  var e = data.length - 22;
  for (; b4(data, e) != 101010256; --e) {
    if (!e || data.length - e > 65558)
      err(13);
  }
  ;
  var c = b2(data, e + 8);
  if (!c)
    return {};
  var o = b4(data, e + 16);
  var z = b4(data, e - 20) == 117853008;
  if (z) {
    var ze = b4(data, e - 12);
    z = b4(data, ze) == 101075792;
    if (z) {
      c = b4(data, ze + 32);
      o = b4(data, ze + 48);
    }
  }
  var fltr = opts && opts.filter;
  for (var i = 0; i < c; ++i) {
    var _a2 = zh(data, o, z), c_2 = _a2[0], sc = _a2[1], su = _a2[2], fn = _a2[3], no = _a2[4], off = _a2[5], b = slzh(data, off);
    o = no;
    if (!fltr || fltr({
      name: fn,
      size: sc,
      originalSize: su,
      compression: c_2
    })) {
      if (!c_2)
        files[fn] = slc(data, b, b + sc);
      else if (c_2 == 8)
        files[fn] = inflateSync(data.subarray(b, b + sc), { out: new u8(su) });
      else
        err(14, "unknown compression type " + c_2);
    }
  }
  return files;
}

// src/host/fs/fs-zip.ts
async function compressTo(target, destZip) {
  const info = await stat3(target).catch((error) => {
    throw new FsError("fs-error", `cannot compress "${target}": ${error instanceof Error ? error.message : String(error)}`, 400);
  });
  const entries = {};
  const rootName = basename3(target);
  async function walk(dir, prefix) {
    const level = await opendir3(dir).catch(() => null);
    if (!level) return;
    for await (const d of level) {
      const full = join3(dir, d.name);
      const rel = join3(prefix, d.name).split(sep3).join("/");
      const st = await stat3(full).catch(() => void 0);
      if (!st) continue;
      if (st.isDirectory()) {
        await walk(full, rel);
      } else {
        entries[rel] = new Uint8Array(await readFile2(full));
      }
    }
  }
  if (info.isFile()) {
    entries[rootName] = new Uint8Array(await readFile2(target));
  } else {
    await walk(target, rootName);
  }
  const data = zipSync(entries);
  await writeFile2(destZip, new Uint8Array(data));
  return destZip;
}
async function extractTo(zipPath, destDir) {
  const buf = new Uint8Array(await readFile2(zipPath).catch((error) => {
    throw new FsError("fs-error", `cannot read zip "${zipPath}": ${error instanceof Error ? error.message : String(error)}`, 400);
  }));
  let files;
  try {
    files = unzipSync(buf);
  } catch (error) {
    throw new FsError("fs-error", `invalid zip: ${error instanceof Error ? error.message : String(error)}`, 400);
  }
  const normDest = resolve3(destDir);
  const inRange = (p) => {
    const n = p.replace(/[\\/]+/g, "/").replace(/\/$/, "");
    const d = normDest.replace(/[\\/]+/g, "/").replace(/\/$/, "").toLowerCase();
    return n.toLowerCase() === d || n.toLowerCase().startsWith(`${d}/`);
  };
  let count = 0;
  for (const rel of Object.keys(files)) {
    const parts = rel.replace(/\\/g, "/").split("/").filter((s) => s && s !== "." && s !== "..");
    const full = resolve3(normDest, ...parts);
    if (!inRange(full)) continue;
    await mkdir2(dirname3(full), { recursive: true });
    await writeFile2(full, new Uint8Array(files[rel]));
    count += 1;
  }
  return count;
}

// src/host/fs/recycle.ts
import { execFile as execFile2 } from "node:child_process";
import { existsSync as existsSync4 } from "node:fs";
import { homedir as homedir2 } from "node:os";
import { basename as basename4, dirname as dirname4, join as join4 } from "node:path";
import {
  cp,
  mkdir as mkdir3,
  readFile as readFile3,
  readdir,
  rename,
  rm,
  stat as stat4,
  writeFile as writeFile3
} from "node:fs/promises";
var IS_WIN = process.platform === "win32";
function ps(script) {
  const full = "[Console]::OutputEncoding = New-Object System.Text.UTF8Encoding($false)\n$OutputEncoding = New-Object System.Text.UTF8Encoding($false)\n" + script;
  const encoded = Buffer.from(full, "utf16le").toString("base64");
  return new Promise((resolve5, reject) => {
    execFile2(
      "powershell.exe",
      ["-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass", "-EncodedCommand", encoded],
      { maxBuffer: 64 * 1024 * 1024, windowsHide: true },
      (err3, stdout, stderr) => {
        if (err3) reject(new Error(stderr.trim() || err3.message));
        else resolve5(stdout);
      }
    );
  });
}
function qs(p) {
  return `'${p.replace(/'/g, "''")}'`;
}
async function winListRecycleItems() {
  const script = `
$sh = New-Object -ComObject Shell.Application
$bin = $sh.NameSpace(0xA)
$out = New-Object System.Collections.Generic.List[object]
foreach ($it in $bin.Items()) {
  $del = $it.ExtendedProperty("System.Recycle.DeletedFrom")
  $size = $it.ExtendedProperty("System.Size")
  $date = $it.ExtendedProperty("System.Recycle.DateDeleted")
  [void]$out.Add([PSCustomObject]@{
    name = [string]$it.Name
    fullPath = [string]$it.Path
    isDir = [bool]$it.IsFolder
    size = if ($size -eq $null) { [long]0 } else { [long]$size }
    dateDeleted = if ($date -eq $null) { "" } else { [string]$date }
    originalPath = if ($del -eq $null) { "" } else { [string]$del }
  })
}
if ($out.Count -eq 0) { '[]' } else { $out | ConvertTo-Json -Compress -Depth 3 }
`;
  const stdout = await ps(script);
  try {
    return JSON.parse(stdout || "[]") ?? [];
  } catch {
    return [];
  }
}
async function winRecycleCount() {
  const script = `
$sh = New-Object -ComObject Shell.Application
$bin = $sh.NameSpace(0xA)
[int64]$bin.Items().Count
`;
  const n = Number((await ps(script)).trim());
  return Number.isFinite(n) ? n : 0;
}
async function winRestoreRecycleItem(fullPath) {
  const script = `
$sh = New-Object -ComObject Shell.Application
$bin = $sh.NameSpace(0xA)
$target = ${qs(fullPath)}
$done = $false
foreach ($it in $bin.Items()) {
  if ([string]$it.Path -eq $target) {
    foreach ($v in $it.Verbs()) {
      $n = $v.Name.ToLowerInvariant()
      if ($n -match 'restore' -or $n -match '^\u8FD8\u539F') {
        try { $v.DoIt(); $done = $true } catch { }
        break
      }
    }
    break
  }
}
if (-not $done) { throw "restore failed or item not found: $target" }
`;
  await ps(script);
}
async function winDeleteRecycleItem(fullPath) {
  const script = `
$target = ${qs(fullPath)}
$dir = Split-Path -Parent $target
$leaf = Split-Path -Leaf $target
if ($leaf -match '^\\$R') {
  $iLeaf = '$I' + $leaf.Substring(2)
  $iFull = Join-Path $dir $iLeaf
  if (Test-Path -LiteralPath $iFull) {
    Remove-Item -LiteralPath $iFull -Recurse -Force -ErrorAction SilentlyContinue
  }
}
if (Test-Path -LiteralPath $target) {
  Remove-Item -LiteralPath $target -Recurse -Force -ErrorAction Stop
}
`;
  await ps(script);
}
function winEmptyRecycle() {
  const script = `Clear-RecycleBin -Force -ErrorAction SilentlyContinue`;
  const encoded = Buffer.from(script, "utf16le").toString("base64");
  const child = execFile2(
    "powershell.exe",
    ["-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass", "-EncodedCommand", encoded],
    { windowsHide: true },
    () => {
    }
  );
  child.unref();
}
function trashDirs() {
  const xdg = (process.env.XDG_DATA_HOME || "").trim();
  const base = xdg || join4(homedir2(), ".local", "share");
  const root = join4(base, "Trash");
  return { root, info: join4(root, "info"), files: join4(root, "files") };
}
function decodePath(raw) {
  const value = raw.replace(/\r$/, "");
  if (value.includes("%")) {
    try {
      return decodeURIComponent(value);
    } catch {
    }
  }
  return value;
}
function filespecOfInfo(infoName) {
  return infoName.slice(0, infoName.length - ".trashinfo".length);
}
function parseTrashInfo(text) {
  let path = "";
  let date = "";
  for (const line of text.split(/\r?\n/)) {
    if (line.startsWith("Path=")) path = line.slice("Path=".length);
    else if (line.startsWith("DeletionDate=")) date = line.slice("DeletionDate=".length).trim();
  }
  return { originalPath: decodePath(path), dateDeleted: date };
}
async function posixListRecycleItems() {
  const { info, files } = trashDirs();
  const names = await readdir(info).catch(() => []);
  const items = [];
  for (const n of names) {
    if (!n.endsWith(".trashinfo")) continue;
    const fileSpec = filespecOfInfo(n);
    const dataPath = join4(files, fileSpec);
    const text = await readFile3(join4(info, n), "utf8").catch(() => "");
    const { originalPath, dateDeleted } = parseTrashInfo(text);
    if (!originalPath) continue;
    const s = await stat4(dataPath).catch(() => void 0);
    if (!s) continue;
    items.push({
      name: fileSpec,
      fullPath: dataPath,
      isDir: s.isDirectory(),
      size: s.isDirectory() ? 0 : s.size,
      dateDeleted,
      originalPath
    });
  }
  return items.sort((a, b) => a.name.localeCompare(b.name, void 0, { sensitivity: "base" }));
}
async function posixRecycleCount() {
  const { info } = trashDirs();
  const names = await readdir(info).catch(() => []);
  return names.filter((n) => n.endsWith(".trashinfo")).length;
}
function noCollisionDest(destPath) {
  const dir = dirname4(destPath);
  const ext = /(\.[^.]*)$/.exec(basename4(destPath))?.[1] ?? "";
  const stem = ext ? basename4(destPath).slice(0, -ext.length) : basename4(destPath);
  let candidate = destPath;
  for (let i = 1; ; i += 1) {
    if (!existsSync4(candidate)) return candidate;
    candidate = join4(dir, `${stem} (${i})${ext}`);
  }
}
async function posixRestoreRecycleItem(fullPath) {
  const { info } = trashDirs();
  const fileSpec = basename4(fullPath);
  const infoFile = join4(info, `${fileSpec}.trashinfo`);
  const text = await readFile3(infoFile, "utf8").catch(() => {
    throw new FsError("not-found", `trash info missing: ${infoFile}`, 404);
  });
  const { originalPath } = parseTrashInfo(text);
  if (!originalPath || !originalPath.startsWith("/")) {
    throw new FsError("bad-request", "trash item has no valid original path", 400);
  }
  const dest = noCollisionDest(originalPath);
  await mkdir3(dirname4(dest), { recursive: true });
  try {
    await rename(fullPath, dest);
  } catch (e) {
    if (e.code === "EXDEV") {
      await cp(fullPath, dest, { recursive: true, errorOnExist: false });
      await rm(fullPath, { recursive: true, force: true });
    } else {
      throw e;
    }
  }
  await rm(infoFile, { force: true });
}
async function posixDeleteRecycleItem(fullPath) {
  const { info } = trashDirs();
  await rm(fullPath, { recursive: true, force: true });
  await rm(join4(info, `${basename4(fullPath)}.trashinfo`), { force: true });
}
function posixEmptyRecycle() {
  void (async () => {
    const { info, files } = trashDirs();
    const names = await readdir(info).catch(() => []);
    for (const n of names) {
      if (!n.endsWith(".trashinfo")) continue;
      const fileSpec = filespecOfInfo(n);
      await rm(join4(files, fileSpec), { recursive: true, force: true }).catch(() => void 0);
      await rm(join4(info, n), { force: true }).catch(() => void 0);
    }
  })();
}
async function winTrashPath(path) {
  const script = `
Add-Type -AssemblyName Microsoft.VisualBasic
$path = ${qs(path)}
if (Test-Path -LiteralPath $path -PathType Container) {
  [Microsoft.VisualBasic.FileIO.FileSystem]::DeleteDirectory($path, 'OnlyErrorDialogs', 'SendToRecycleBin')
} else {
  [Microsoft.VisualBasic.FileIO.FileSystem]::DeleteFile($path, 'OnlyErrorDialogs', 'SendToRecycleBin')
}
Write-Output $path
`;
  const stdout = await ps(script);
  return stdout.trim() || path;
}
async function posixTrashPath(path) {
  const { files, info } = trashDirs();
  await mkdir3(files, { recursive: true });
  await mkdir3(info, { recursive: true });
  const dest = noCollisionDest(join4(files, basename4(path)));
  await stat4(path);
  try {
    await rename(path, dest);
  } catch (e) {
    if (e.code === "EXDEV") {
      await cp(path, dest, { recursive: true, errorOnExist: false });
      await rm(path, { recursive: true, force: true });
    } else {
      throw e;
    }
  }
  await writeFile3(
    join4(info, `${basename4(dest)}.trashinfo`),
    `[Trash Info]
Path=${path}
DeletionDate=${(/* @__PURE__ */ new Date()).toISOString()}
`,
    "utf8"
  );
  return dest;
}
async function listRecycleItems() {
  return IS_WIN ? winListRecycleItems() : posixListRecycleItems();
}
async function trashPath(path) {
  return IS_WIN ? winTrashPath(path) : posixTrashPath(path);
}
async function recycleCount() {
  return IS_WIN ? winRecycleCount() : posixRecycleCount();
}
async function restoreRecycleItem(fullPath) {
  return IS_WIN ? winRestoreRecycleItem(fullPath) : posixRestoreRecycleItem(fullPath);
}
async function deleteRecycleItem(fullPath) {
  return IS_WIN ? winDeleteRecycleItem(fullPath) : posixDeleteRecycleItem(fullPath);
}
function emptyRecycle() {
  if (IS_WIN) winEmptyRecycle();
  else posixEmptyRecycle();
}

// src/host/store/workbench-store.ts
import { readFile as readFile4, writeFile as writeFile4, mkdir as mkdir4, readdir as readdir2 } from "node:fs/promises";
import { join as join5, basename as basename5 } from "node:path";
import { homedir as homedir3 } from "node:os";
var PERSIST_KEYS = [
  "prefs",
  "favorites",
  "recent",
  "layout",
  // 终端浮窗几何 / 按目录视图记忆 / 后台任务历史：均为客户端实际在用的键。
  "termWin",
  "folderViews",
  "taskLogs"
];
function stateDir() {
  const dshHome = process.env.DSH_HOME || join5(homedir3(), ".dsh");
  return join5(dshHome, "fileworkbench");
}
function isPersistKey(key) {
  return PERSIST_KEYS.includes(key);
}
function fileFor(key) {
  return join5(stateDir(), `${key}.json`);
}
async function getPersistKey(key) {
  if (!isPersistKey(key)) return void 0;
  try {
    return JSON.parse(await readFile4(fileFor(key), "utf8"));
  } catch {
    return void 0;
  }
}
async function setPersistKey(key, value) {
  if (!isPersistKey(key)) {
    throw new Error(`unknown persist key: ${key}`);
  }
  await mkdir4(stateDir(), { recursive: true });
  await writeFile4(fileFor(key), JSON.stringify(value ?? null), "utf8");
}
async function getAllPersist() {
  const out = {};
  for (const k of PERSIST_KEYS) {
    const v = await getPersistKey(k);
    if (v !== void 0) out[k] = v;
  }
  return out;
}
var DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
function taskArchivesDir() {
  return join5(stateDir(), "taskArchives");
}
async function readTaskArchive(date) {
  if (!DATE_RE.test(date)) return [];
  try {
    const parsed = JSON.parse(await readFile4(join5(taskArchivesDir(), `${date}.json`), "utf8"));
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}
async function listTaskArchiveDates() {
  try {
    const names = await readdir2(taskArchivesDir());
    return names.filter((n) => n.endsWith(".json") && DATE_RE.test(basename5(n, ".json"))).map((n) => basename5(n, ".json")).sort((a, b) => a < b ? 1 : -1);
  } catch {
    return [];
  }
}
async function readTaskArchives() {
  const dates = await listTaskArchiveDates();
  const map = {};
  for (const d of dates) map[d] = await readTaskArchive(d);
  return map;
}
async function writeTaskArchives(map) {
  const dir = taskArchivesDir();
  await mkdir4(dir, { recursive: true });
  const dates = Object.keys(map).filter((d) => DATE_RE.test(d));
  await Promise.all(
    dates.map((d) => writeFile4(join5(dir, `${d}.json`), JSON.stringify(map[d] ?? []), "utf8"))
  );
}

// src/host/routes/routes-fs.ts
function guardWritable(target) {
  if (isProtectedPath(target)) {
    throw new FsError("forbidden", `path "${target}" is read-only (protected system area)`, 403);
  }
}
async function guardWsRoot(key, target) {
  guardWritable(target);
  const root = getRoot(key);
  if (!root || isWithin(root, target)) return;
  const prefs = await getPersistKey("prefs");
  if (prefs && prefs.allowOutsideRoot === true) return;
  throw new FsError(
    "forbidden",
    `path "${target}" is outside workspace root; enable the root toggle in Settings to operate it`,
    403
  );
}
var fsResource = async (req, res, seg, q, method, host) => {
  if (seg[0] === "assets" && method === "GET") {
    serveAsset(res, seg.join("/"));
    return true;
  }
  if (seg[0] === "root" && seg.length === 1) {
    if (method === "GET") {
      const root = getRoot(q.get("key") ?? void 0);
      return json(res, 200, { ok: true, data: root ? { root } : { root: "" } }), true;
    }
    if (method === "POST") {
      const body = await readBody(req);
      const root = body?.path?.trim();
      if (!root) return json(res, 400, { ok: false, error: "path required" }), true;
      const abs = requireAbsolute(root);
      await stat5(abs).catch((error) => {
        throw new FsError("fs-error", `cannot stat "${abs}": ${error instanceof Error ? error.message : String(error)}`, 400);
      });
      setRoot(body?.key, abs);
      return json(res, 200, { ok: true, data: { root: abs } }), true;
    }
  }
  if (seg[0] === "list" && seg.length === 1 && method === "GET") {
    const root = getRoot(q.get("key") ?? void 0) ?? "";
    const requested = q.get("path")?.trim() || root || homedir4();
    const target = requireAbsolute(requested);
    const listing = await listDirectory(target);
    const displayRoot = root && isWithin(root, target) ? root : target;
    return json(res, 200, { ok: true, data: withListingContext(target, displayRoot, listing) }), true;
  }
  if (seg[0] === "parent" && seg.length === 1 && method === "GET") {
    const root = getRoot(q.get("key") ?? void 0) ?? "";
    const target = requireAbsolute(q.get("path")?.trim() || root);
    const parent = parentOf(target);
    return json(res, 200, { ok: true, data: { root, parent } }), true;
  }
  if (seg[0] === "mycomputer" && seg.length === 1 && method === "GET") {
    const root = getRoot(q.get("key") ?? void 0);
    const items = listMyComputer(root || void 0);
    return json(res, 200, { ok: true, data: { items } }), true;
  }
  if (seg[0] === "drives" && seg.length === 1 && method === "GET") {
    const drives = await listDrives();
    return json(res, 200, { ok: true, data: { drives } }), true;
  }
  if (seg[0] === "browse" && seg.length === 1 && method === "GET") {
    const target = requireAbsolute(q.get("path")?.trim() || homedir4());
    const listing = await listDirectory(target);
    await attachDetails(listing.entries);
    const parent = parentOf(target);
    return json(res, 200, {
      ok: true,
      data: { path: target, name: rootLabel(target), parent, entries: listing.entries, truncated: listing.truncated, inaccessible: listing.inaccessible }
    }), true;
  }
  if (seg[0] === "save" && seg.length === 1 && method === "POST") {
    const body = await readBody(req);
    if (!body?.path || typeof body?.content !== "string") {
      return json(res, 400, { ok: false, error: "path and content required" }), true;
    }
    const abs = requireAbsolute(body.path);
    await guardWsRoot(body?.key, abs);
    const root = getRoot(body?.key);
    let saved;
    if (root && isWithin(root, abs)) {
      saved = await saveText(root, body.path, body.content);
    } else {
      const safe = await resolveWritePath(abs);
      await mkdir5(dirname5(safe), { recursive: true });
      await writeFile5(safe, body.content, "utf8");
      saved = safe;
    }
    return json(res, 200, { ok: true, data: { path: saved } }), true;
  }
  if (seg[0] === "search" && seg.length === 1 && method === "GET") {
    const qText = q.get("q") ?? "";
    const scoped = q.get("path")?.trim();
    const base = scoped ? requireAbsolute(scoped) : getRoot(q.get("key") ?? void 0) ?? homedir4();
    const limit = Math.max(1, Math.min(2e3, Number(q.get("limit") ?? 200) || 200));
    const caseSensitive = q.get("case") === "1";
    const regex = q.get("regex") === "1";
    const outcome = await searchFiles(base, qText, { maxMatches: limit, caseSensitive, regex });
    return json(res, 200, { ok: true, data: { ...outcome, scope: base } }), true;
  }
  if (seg[0] === "mkdir" && seg.length === 1 && method === "POST") {
    const body = await readBody(req);
    if (!body?.path) return json(res, 400, { ok: false, error: "path required" }), true;
    await guardWsRoot(body?.key, requireAbsolute(body.path));
    const safe = await resolveWritePath(body.path, "path");
    await mkdir5(safe, { recursive: true });
    return json(res, 200, { ok: true, data: { path: safe } }), true;
  }
  if (seg[0] === "upload" && seg.length === 1 && method === "POST") {
    const destDir = q.get("dir")?.trim() ?? "";
    const name2 = q.get("name")?.trim() ?? "";
    if (!destDir || !name2) return json(res, 400, { ok: false, error: "dir and name required" }), true;
    await guardWsRoot(q.get("key") ?? void 0, requireAbsolute(destDir));
    const dir = await resolveWritePath(destDir, "dir");
    await mkdir5(dir, { recursive: true });
    const safeName = basename6(name2).replace(/[\\/]/g, "_");
    const dest = await uniquePath(dir, safeName);
    await new Promise((resolvePromise, reject) => {
      const ws = createWriteStream(dest);
      req.on("error", (err3) => {
        ws.destroy();
        reject(err3);
      });
      ws.on("error", (err3) => {
        req.unpipe(ws);
        reject(err3);
      });
      ws.on("finish", () => resolvePromise());
      req.pipe(ws);
    });
    return json(res, 200, { ok: true, data: { path: dest } }), true;
  }
  if (seg[0] === "rename" && seg.length === 1 && method === "POST") {
    const body = await readBody(req);
    if (!body?.from || !body?.to) return json(res, 400, { ok: false, error: "from and to required" }), true;
    await guardWsRoot(body?.key, requireAbsolute(body.from));
    await guardWsRoot(body?.key, requireAbsolute(body.to));
    const from = await resolveExisting(body.from, "from");
    const to = await resolveWritePath(body.to, "to");
    await rename2(from, to);
    return json(res, 200, { ok: true, data: { path: to } }), true;
  }
  if (seg[0] === "remove" && seg.length === 1 && method === "DELETE") {
    const raw = q.get("path")?.trim() ?? "";
    if (!raw) return json(res, 400, { ok: false, error: "path required" }), true;
    await guardWsRoot(q.get("key") ?? void 0, requireAbsolute(raw));
    const target = await resolveExisting(raw, "path");
    const trashed = await trashPath(target);
    return json(res, 200, { ok: true, data: { path: trashed } }), true;
  }
  if (seg[0] === "touch" && seg.length === 1 && method === "POST") {
    const body = await readBody(req);
    if (!body?.path) return json(res, 400, { ok: false, error: "path required" }), true;
    await guardWsRoot(body?.key, requireAbsolute(body.path));
    const safe = await resolveWritePath(body.path, "path");
    await writeFile5(safe, "", "utf8");
    return json(res, 200, { ok: true, data: { path: safe } }), true;
  }
  if (seg[0] === "copy" && seg.length === 1 && method === "POST") {
    const body = await readBody(req);
    if (!body?.src || !body?.destDir) return json(res, 400, { ok: false, error: "src and destDir required" }), true;
    await guardWsRoot(body?.key, requireAbsolute(body.destDir));
    const src = await resolveExisting(body.src, "src");
    const destDir = await resolveWritePath(body.destDir, "destDir");
    await mkdir5(destDir, { recursive: true });
    const dest = await uniquePath(destDir, basename6(src));
    await cp2(src, dest, { recursive: true, force: false, errorOnExist: false });
    return json(res, 200, { ok: true, data: { path: dest } }), true;
  }
  if (seg[0] === "detail" && seg.length === 1 && method === "GET") {
    const target = requireAbsolute(q.get("path")?.trim() ?? "");
    const detail = await statDetail(target);
    return json(res, 200, { ok: true, data: detail }), true;
  }
  if (seg[0] === "openExternal" && seg.length === 1 && method === "POST") {
    const body = await readBody(req);
    const target = requireAbsolute(body?.path?.trim() ?? "");
    const info = await stat5(target);
    await spawnOpen(target, info.isDirectory());
    return json(res, 200, { ok: true, data: { path: target } }), true;
  }
  if (seg[0] === "download" && seg.length === 1 && method === "GET") {
    const target = q.get("path")?.trim();
    if (!target) return json(res, 400, { ok: false, error: "path required" }), true;
    const safe = requireAbsolute(target);
    if (!existsSync5(safe) || !statSync2(safe).isFile()) return json(res, 404, { ok: false, error: "not found" }), true;
    await streamFile(res, safe, q.get("inline") === "1");
    return true;
  }
  if (seg[0] === "_read-image" && seg.length === 1 && method === "GET") {
    const target = q.get("path")?.trim();
    if (!target) return json(res, 400, { ok: false, error: "path required" }), true;
    const safe = requireAbsolute(target);
    if (!existsSync5(safe) || !statSync2(safe).isFile()) return json(res, 404, { ok: false, error: "not found" }), true;
    const ext = safe.slice(safe.lastIndexOf(".")).toLowerCase();
    if (!IMAGE_EXT.has(ext)) return json(res, 400, { ok: false, error: "not an image file" }), true;
    await streamFile(res, safe, true);
    return true;
  }
  if (seg[0] === "compress" && seg.length === 1 && method === "POST") {
    const body = await readBody(req);
    if (!body?.path) return json(res, 400, { ok: false, error: "path required" }), true;
    const src = await resolveExisting(body.path, "path");
    const to = body?.to?.trim() ? await resolveWritePath(body.to, "to") : await uniquePath(dirname5(src), `${basename6(src)}.zip`);
    await guardWsRoot(body?.key, to);
    const dest = await compressTo(src, to);
    return json(res, 200, { ok: true, data: { path: dest } }), true;
  }
  if (seg[0] === "extract" && seg.length === 1 && method === "POST") {
    const body = await readBody(req);
    if (!body?.zipPath) return json(res, 400, { ok: false, error: "zipPath required" }), true;
    const zip = await resolveExisting(body.zipPath, "zipPath");
    const destDir = body?.destDir?.trim() ? await resolveWritePath(body.destDir, "destDir") : dirname5(zip);
    await guardWsRoot(body?.key, destDir);
    const count = await extractTo(zip, destDir);
    return json(res, 200, { ok: true, data: { destDir, count } }), true;
  }
  if (seg[0] === "replace" && seg.length === 1 && method === "POST") {
    const body = await readBody(req);
    const q2 = body?.q?.trim() ?? "";
    const replacement = typeof body?.replacement === "string" ? body.replacement : "";
    if (!q2) return json(res, 400, { ok: false, error: "q required" }), true;
    const root = getRoot(body?.key);
    if (!root) return json(res, 409, { ok: false, error: "no root" }), true;
    const base = body?.scope?.trim() ? requireAbsolute(body.scope) : root;
    if (!isWithin(root, base)) return json(res, 403, { ok: false, error: "scope outside workspace" }), true;
    guardWritable(base);
    const outcome = await replaceInFiles(base, q2, replacement, {
      caseSensitive: body?.caseSensitive === true,
      regex: body?.regex === true,
      write: async (abs, content) => {
        await saveText(root, abs, content);
      }
    });
    return json(res, 200, { ok: true, data: outcome }), true;
  }
  return false;
};

// src/host/routes/routes-git.ts
import { execFile as execFile3 } from "node:child_process";
import { promisify } from "node:util";
import { stat as stat6 } from "node:fs/promises";
import { dirname as dirname6, join as join6, posix } from "node:path";
var execFileP = promisify(execFile3);
async function git(args, cwd, hint = "git \u547D\u4EE4\u6267\u884C\u5931\u8D25") {
  try {
    const { stdout } = await execFileP("git", args, { cwd, windowsHide: true, encoding: "utf8" });
    return stdout.trim();
  } catch (error) {
    const e = error;
    throw new FsError("fs-error", `${hint}: ${e.stderr?.trim() || e.message || String(error)}`, 500);
  }
}
async function gitRun(args, cwd) {
  try {
    const { stdout, stderr } = await execFileP("git", args, { cwd, windowsHide: true, encoding: "utf8", maxBuffer: 16 * 1024 * 1024 });
    return { code: 0, stdout: stdout.trim(), stderr: stderr.trim() };
  } catch (error) {
    const e = error;
    return { code: typeof e.code === "number" ? Number(e.code) : 1, stdout: (e.stdout ?? "").trim(), stderr: (e.stderr ?? e.message ?? String(error)).trim() };
  }
}
function guardGitWritable(target) {
  if (isProtectedPath(target)) {
    throw new FsError("forbidden", `path "${target}" is read-only (protected system area)`, 403);
  }
}
async function findRepoRoot(start) {
  let cur = start;
  for (; ; ) {
    try {
      await stat6(join6(cur, ".git"));
      return cur;
    } catch {
    }
    const parent = dirname6(cur);
    if (parent === cur) return null;
    cur = parent;
  }
}
var RANK = {
  "": 0,
  untracked: 1,
  added: 2,
  modified: 3,
  deleted: 4
};
function porcelainStatus(xy) {
  const i = xy[0] ?? "";
  const w = xy[1] ?? "";
  if (i === "?" && w === "?") return "untracked";
  if (i === "D" || w === "D") return "deleted";
  if (i === "A") return "added";
  if (i === "R" || i === "C") return "added";
  return "modified";
}
async function gitStatus(dir) {
  const root = await findRepoRoot(dir);
  if (!root) return { inRepo: false, branch: "", entries: {} };
  const branch = await git(["branch", "--show-current"], root).catch(() => "");
  const porcelain = await git(
    ["status", "--porcelain=v1", "--untracked-files=normal"],
    root,
    "\u65E0\u6CD5\u8BFB\u53D6 git \u72B6\u6001"
  );
  const entries = {};
  const baseDir = dir.replace(/\\/g, "/");
  const baseRoot = root.replace(/\\/g, "/");
  for (const line of porcelain.split("\n")) {
    if (!line.trim()) continue;
    const xy = line.slice(0, 2);
    const stripped = line.slice(3);
    const arrow = stripped.indexOf(" -> ");
    const relPath = arrow >= 0 ? stripped.slice(arrow + 4) : stripped;
    const abs = posix.join(baseRoot, relPath.replace(/\\/g, "/"));
    const rel = posix.relative(baseDir, abs);
    if (!rel || rel === "." || rel.startsWith("..")) continue;
    const segs = rel.split("/");
    const top = segs[0];
    const st = segs.length > 1 ? "modified" : porcelainStatus(xy);
    if (RANK[st] > (RANK[entries[top]] ?? 0)) entries[top] = st;
  }
  return { inRepo: true, branch, entries };
}
async function repoOf(target) {
  const root = await findRepoRoot(target);
  if (!root) throw new FsError("bad-request", `\u76EE\u6807\u4E0D\u5728\u4EFB\u4F55 git \u4ED3\u5E93\u4E2D: ${target}`, 400);
  return root;
}
function relInRepo(root, target) {
  const rel = posix.relative(root.replace(/\\/g, "/"), target.replace(/\\/g, "/"));
  if (rel === ".." || rel.startsWith("../") || rel.includes(":")) {
    throw new FsError("bad-request", `\u8DEF\u5F84\u4E0D\u5728\u4ED3\u5E93\u5185: ${target}`, 400);
  }
  return rel;
}
async function gitAdd(target) {
  guardGitWritable(target);
  const root = await repoOf(target);
  const rel = relInRepo(root, target);
  await git(["add", "--", rel], root, "git add \u5931\u8D25");
  return { ok: true, repo: root, output: `staged ${rel}` };
}
async function gitCommit(target, message) {
  guardGitWritable(target);
  const root = await repoOf(target);
  await git(["commit", "-m", message], root, "\u63D0\u4EA4\u5931\u8D25\uFF08\u53EF\u80FD\u9700\u8981\u5148\u914D\u7F6E user.name/user.email\uFF09");
  const hash = await git(["rev-parse", "--short", "HEAD"], root).catch(() => "");
  return { ok: true, repo: root, output: hash };
}
async function gitDiff(target) {
  const root = await repoOf(target);
  const rel = relInRepo(root, target);
  let output = "";
  try {
    output = await git(["diff", "HEAD", "--no-color", "--", rel], root, "\u65E0\u6CD5\u8BFB\u53D6\u6539\u52A8");
  } catch {
  }
  if (!output) {
    output = `\uFF08\u8BE5\u8DEF\u5F84\u76F8\u5BF9 HEAD \u6CA1\u6709\u53EF\u7528\u6539\u52A8\uFF1B\u65B0\u6587\u4EF6\u8BF7\u5148 git add \u540E\u518D\u67E5\u770B\uFF09
${rel}`;
  }
  return { ok: true, repo: root, output };
}
async function gitDiscard(target) {
  guardGitWritable(target);
  const root = await repoOf(target);
  const rel = relInRepo(root, target);
  await git(["checkout", "--", rel], root, "\u8FD8\u539F\u5931\u8D25");
  return { ok: true, repo: root, output: `discarded ${rel}` };
}
async function gitUnstage(target) {
  guardGitWritable(target);
  const root = await repoOf(target);
  const rel = relInRepo(root, target);
  await git(["restore", "--staged", "--", rel], root, "\u53D6\u6D88\u6682\u5B58\u5931\u8D25");
  return { ok: true, repo: root, output: `unstaged ${rel}` };
}
async function gitRunCmd(dir, args) {
  const root = await findRepoRoot(dir);
  if (!root) throw new FsError("bad-request", `\u4E0D\u5728\u4EFB\u4F55 git \u4ED3\u5E93\u5185: ${dir}`, 400);
  if (isProtectedPath(root)) {
    throw new FsError("forbidden", `\u53D7\u4FDD\u62A4\u76EE\u5F55\u5185\u7981\u6B62\u6267\u884C git \u547D\u4EE4: ${root}`, 403);
  }
  return gitRun(args, root);
}
async function gitPanel(dir) {
  const root = await findRepoRoot(dir);
  if (!root) return { inRepo: false, repo: "", branch: "", unstaged: [], staged: [], untracked: [] };
  const branch = await git(["branch", "--show-current"], root).catch(() => "");
  const porcelain = await git(["status", "--porcelain=v1", "--untracked-files=normal"], root, "\u65E0\u6CD5\u8BFB\u53D6 git \u72B6\u6001");
  const unstaged = [];
  const staged = [];
  const untracked = [];
  for (const line of porcelain.split("\n")) {
    if (!line.trim()) continue;
    const xy = line.slice(0, 2);
    const stripped = line.slice(3);
    const arrow = stripped.indexOf(" -> ");
    const rel = (arrow >= 0 ? stripped.slice(arrow + 4) : stripped).replace(/\\/g, "/");
    const i = xy[0] ?? "";
    const w = xy[1] ?? "";
    if (i === "?" && w === "?") {
      untracked.push({ path: rel, status: "untracked" });
      continue;
    }
    const st = porcelainStatus(xy);
    if (i !== " " && i !== "?") staged.push({ path: rel, status: st });
    if (w !== " " && w !== "?") unstaged.push({ path: rel, status: st });
  }
  return { inRepo: true, repo: root, branch, unstaged, staged, untracked };
}
async function gitLog(dir, count) {
  const root = await findRepoRoot(dir);
  if (!root) return [];
  const out = await git(
    ["log", `--max-count=${count}`, "--pretty=format:%h|%an|%ar|%s"],
    root,
    "\u65E0\u6CD5\u8BFB\u53D6\u63D0\u4EA4\u5386\u53F2"
  ).catch(() => "");
  if (!out) return [];
  return out.split("\n").map((line) => {
    const [hash, author, date, subject] = line.split("|");
    return { hash: hash ?? "", author: author ?? "", date: date ?? "", subject: subject ?? "" };
  });
}
async function gitBranchOp(dir, action, name2) {
  guardGitWritable(dir);
  const root = await repoOf(dir);
  if (!name2) throw new FsError("bad-request", "\u7F3A\u5C11\u5206\u652F\u540D", 400);
  if (action === "create") {
    const exists = await git(["branch", "--list", name2], root).catch(() => "");
    if (exists) throw new FsError("bad-request", `\u5206\u652F\u5DF2\u5B58\u5728: ${name2}`, 409);
    await git(["branch", name2], root);
    return { ok: true, repo: root, output: `created branch ${name2}` };
  }
  if (action === "checkout") {
    await git(["checkout", name2], root, "\u5207\u6362\u5206\u652F\u5931\u8D25");
    return { ok: true, repo: root, output: `switched to ${name2}` };
  }
  await git(["branch", "-D", name2], root, "\u5220\u9664\u5206\u652F\u5931\u8D25");
  return { ok: true, repo: root, output: `deleted branch ${name2}` };
}
async function gitGetUserConfig() {
  const name2 = await git(["config", "--global", "user.name"], process.cwd()).catch(() => "");
  const email = await git(["config", "--global", "user.email"], process.cwd()).catch(() => "");
  return { name: name2.trim(), email: email.trim() };
}
async function gitSetUserConfig(name2, email) {
  if (name2.trim()) await git(["config", "--global", "user.name", name2.trim()], process.cwd());
  if (email.trim()) await git(["config", "--global", "user.email", email.trim()], process.cwd());
  return { ok: true, output: "\u5DF2\u8BBE\u7F6E git user \u5168\u5C40\u914D\u7F6E" };
}
async function gitSync(dir, action) {
  guardGitWritable(dir);
  const root = await repoOf(dir);
  const r = await gitRun([action], root);
  return { ok: r.code === 0, repo: root, output: r.stderr || r.stdout || `${action} \u5B8C\u6210` };
}
var gitResource = async (req, res, seg, q, method, host) => {
  if (seg[0] !== "git") return false;
  const op = seg[1];
  if (op === "status" && method === "GET" && seg.length === 2) {
    const dir = requireAbsolute(q.get("path")?.trim() ?? "");
    const data = await gitStatus(dir);
    return json(res, 200, { ok: true, data }), true;
  }
  if (op === "panel" && method === "GET" && seg.length === 2) {
    const dir = requireAbsolute(q.get("path")?.trim() ?? "");
    const data = await gitPanel(dir);
    return json(res, 200, { ok: true, data }), true;
  }
  if (op === "log" && method === "GET" && seg.length === 2) {
    const dir = requireAbsolute(q.get("path")?.trim() ?? "");
    const count = Number(q.get("count") ?? "20") || 20;
    const data = await gitLog(dir, count);
    return json(res, 200, { ok: true, data }), true;
  }
  if (op === "config" && seg.length === 2) {
    if (method === "GET") {
      const data = await gitGetUserConfig();
      return json(res, 200, { ok: true, data }), true;
    }
    if (method === "POST") {
      const body = await readBody(req);
      const data = await gitSetUserConfig(body?.name ?? "", body?.email ?? "");
      return json(res, 200, { ok: true, data }), true;
    }
  }
  if (op === "diff" && method === "GET" && seg.length === 2) {
    const path = requireAbsolute(q.get("path")?.trim() ?? "");
    const data = await gitDiff(path);
    return json(res, 200, { ok: true, data }), true;
  }
  if (method === "POST" && seg.length === 2) {
    const body = await readBody(req);
    const path = requireAbsolute(body?.path?.trim() ?? "");
    if (op === "add") {
      const data = await gitAdd(path);
      return json(res, 200, { ok: true, data }), true;
    }
    if (op === "unstage") {
      const data = await gitUnstage(path);
      return json(res, 200, { ok: true, data }), true;
    }
    if (op === "commit") {
      const message = body?.message?.trim() ?? "";
      if (!message) return json(res, 400, { ok: false, error: "commit message required" }), true;
      const data = await gitCommit(path, message);
      return json(res, 200, { ok: true, data }), true;
    }
    if (op === "discard") {
      const data = await gitDiscard(path);
      return json(res, 200, { ok: true, data }), true;
    }
    if (op === "branch") {
      const data = await gitBranchOp(path, body?.action ?? "checkout", body?.name ?? "");
      return json(res, 200, { ok: true, data }), true;
    }
    if (op === "sync") {
      const data = await gitSync(path, body?.action === "fetch" || body?.action === "push" ? body.action : "pull");
      return json(res, 200, { ok: true, data }), true;
    }
    if (op === "run") {
      const dir = requireAbsolute(body?.path?.trim() ?? "");
      const args = (Array.isArray(body?.args) ? body.args : []).map((a) => String(a)).filter(Boolean);
      if (!args.length) return json(res, 400, { ok: false, error: "no command" }), true;
      const data = await gitRunCmd(dir, args);
      return json(res, 200, { ok: true, data }), true;
    }
  }
  return false;
};

// src/host/routes/routes-svn.ts
import { execFile as execFile4 } from "node:child_process";
import { promisify as promisify2 } from "node:util";
import { existsSync as existsSync6 } from "node:fs";
import { dirname as dirname7, join as join7 } from "node:path";
var execFileP2 = promisify2(execFile4);
function decodeSvnOutput(buf) {
  try {
    return new TextDecoder("utf-8", { fatal: true }).decode(buf);
  } catch {
  }
  try {
    return new TextDecoder("gbk").decode(buf);
  } catch {
    return buf.toString("utf8");
  }
}
var svnExeCache;
var SVN_CANDIDATES = [
  "svn",
  "C:\\Program Files\\Subversion\\bin\\svn.exe",
  "C:\\Program Files (x86)\\Subversion\\bin\\svn.exe",
  "C:\\Program Files\\SlikSvn\\bin\\svn.exe",
  "C:\\Program Files (x86)\\SlikSvn\\bin\\svn.exe",
  "C:\\Program Files\\VisualSVN\\bin\\svn.exe",
  "C:\\Program Files (x86)\\VisualSVN\\bin\\svn.exe",
  "C:\\Program Files\\TortoiseSVN\\bin\\svn.exe",
  "C:\\Program Files (x86)\\TortoiseSVN\\bin\\svn.exe"
];
async function resolveSvnExe() {
  if (svnExeCache !== void 0) return svnExeCache;
  for (const exe of SVN_CANDIDATES) {
    if (exe !== "svn" && !existsSync6(exe)) continue;
    try {
      await execFileP2(exe, ["--version", "--quiet"], { windowsHide: true, encoding: "utf8" });
      svnExeCache = exe;
      return exe;
    } catch {
    }
  }
  svnExeCache = null;
  return null;
}
async function svn(args, cwd, hint = "svn \u547D\u4EE4\u6267\u884C\u5931\u8D25") {
  const exe = await resolveSvnExe();
  if (!exe) throw new FsError("fs-error", `${hint}: \u672A\u627E\u5230\u53EF\u7528\u7684 svn \u547D\u4EE4\u884C\u5DE5\u5177`, 500);
  try {
    const { stdout } = await execFileP2(exe, args, { cwd, windowsHide: true, encoding: "buffer" });
    return decodeSvnOutput(stdout).trim();
  } catch (error) {
    const e = error;
    const errText = e.stderr ? decodeSvnOutput(e.stderr) : "";
    throw new FsError("fs-error", `${hint}: ${errText.trim() || e.message || String(error)}`, 500);
  }
}
async function svnRun(args, cwd) {
  const exe = await resolveSvnExe();
  if (!exe) return { code: 127, stdout: "", stderr: "\u672A\u627E\u5230\u53EF\u7528\u7684 svn \u547D\u4EE4\u884C\u5DE5\u5177\uFF0C\u8BF7\u5B89\u88C5 Subversion\uFF08\u542B\u547D\u4EE4\u884C\u5BA2\u6237\u7AEF\uFF09" };
  try {
    const { stdout, stderr } = await execFileP2(exe, args, { cwd, windowsHide: true, encoding: "buffer", maxBuffer: 32 * 1024 * 1024 });
    return { code: 0, stdout: decodeSvnOutput(stdout).trim(), stderr: decodeSvnOutput(stderr).trim() };
  } catch (error) {
    const e = error;
    return {
      code: typeof e.code === "number" ? Number(e.code) : 1,
      stdout: e.stdout ? decodeSvnOutput(e.stdout).trim() : "",
      stderr: (e.stderr ? decodeSvnOutput(e.stderr) : e.message ?? String(error)).trim()
    };
  }
}
function findSvnRoot(start) {
  let cur = start;
  for (; ; ) {
    try {
      if (existsSync6(join7(cur, ".svn"))) return cur;
    } catch {
    }
    const parent = dirname7(cur);
    if (parent === cur) return null;
    cur = parent;
  }
}
async function checkSvn() {
  return await resolveSvnExe() !== null;
}
var svnResource = async (req, res, seg, q, method, host) => {
  if (seg[0] !== "svn") return false;
  const op = seg[1];
  if (op === "info" && method === "GET" && seg.length === 2) {
    const dir = requireAbsolute(q.get("path")?.trim() ?? "");
    const root = findSvnRoot(dir);
    const available = await checkSvn();
    const data = { inRepo: !!root, root, svnAvailable: available, url: null, revision: null, relativeUrl: null };
    if (root && available) {
      try {
        const text = await svn(["info"], root, "\u65E0\u6CD5\u8BFB\u53D6\u4ED3\u5E93\u4FE1\u606F");
        for (const line of text.split(/\r?\n/)) {
          const m = line.match(/^(URL|Relative URL|Revision):\s*(.*)$/);
          if (!m) continue;
          if (m[1] === "URL") data.url = m[2].trim() || null;
          else if (m[1] === "Relative URL") data.relativeUrl = m[2].trim() || null;
          else data.revision = m[2].trim() || null;
        }
      } catch {
      }
    }
    return json(res, 200, { ok: true, data }), true;
  }
  if (op === "run" && method === "POST" && seg.length === 2) {
    const body = await readBody(req);
    const dir = requireAbsolute(body?.path?.trim() ?? "");
    const args = (Array.isArray(body?.args) ? body.args : []).map((a) => String(a)).filter(Boolean);
    if (!args.length) return json(res, 400, { ok: false, error: "no command" }), true;
    if (isProtectedPath(dir)) {
      return json(res, 403, { ok: false, error: "protected path" }), true;
    }
    const root = findSvnRoot(dir) ?? dir;
    const data = await svnRun(args, root);
    return json(res, 200, { ok: true, data }), true;
  }
  return false;
};

// src/host/routes/routes-terminal.ts
import { stat as stat7 } from "node:fs/promises";
import { resolve as resolve4 } from "node:path";
import { homedir as homedir5 } from "node:os";
import { spawnSync } from "node:child_process";
var sessionCwd = /* @__PURE__ */ new Map();
var sessions = /* @__PURE__ */ new Map();
var ptyFactory;
async function loadPty() {
  if (ptyFactory === void 0) {
    try {
      const mod = await import("node-pty");
      ptyFactory = mod.default ?? mod;
    } catch {
      ptyFactory = null;
    }
  }
  return ptyFactory;
}
function shellCommand(shell) {
  if (process.platform === "win32") {
    if (shell === "powershell") return { file: "powershell.exe", args: ["-NoLogo", "-NoProfile"] };
    return { file: "cmd.exe", args: [] };
  }
  return { file: "bash", args: ["-i"] };
}
function broadcast(s, ev) {
  const frame = `data: ${JSON.stringify(ev)}

`;
  for (const res of s.sinks) {
    try {
      res.write(frame);
    } catch {
    }
  }
}
function endSession(session, s) {
  if (s.closed) return;
  s.closed = true;
  if (s.heartbeat) clearInterval(s.heartbeat);
  for (const res of s.sinks) {
    try {
      res.end();
    } catch {
    }
  }
  s.sinks.clear();
  if (sessions.get(session) === s) sessions.delete(session);
}
function killSessionTree(s) {
  if (process.platform === "win32" && typeof s.pty.pid === "number") {
    try {
      spawnSync("taskkill", ["/pid", String(s.pty.pid), "/T", "/F"], { stdio: "ignore" });
    } catch {
    }
  }
  try {
    s.pty.kill();
  } catch {
  }
}
async function spawnShellSession(session, shell, cwd) {
  const ptyMod = await loadPty();
  if (!ptyMod) {
    throw new Error("node-pty (ConPTY) is unavailable: cannot start an interactive terminal");
  }
  const { file, args } = shellCommand(shell);
  const child = ptyMod.spawn(file, args, {
    name: "xterm-256color",
    cols: 100,
    rows: 30,
    cwd,
    env: process.env
  });
  const s = { pty: child, shell, cwd, sinks: /* @__PURE__ */ new Set(), heartbeat: null, closed: false };
  sessions.set(session, s);
  child.onData((data) => broadcast(s, { type: "output", text: data }));
  child.onExit((ev) => {
    broadcast(s, { type: "exit", code: ev.exitCode ?? -1 });
    endSession(session, s);
  });
  return s;
}
function detectCd(line, shell) {
  const cmd = line.trim();
  if (!cmd) return null;
  if (shell === "powershell") {
    const m2 = cmd.match(/^(?:cd|sl|set-location)\s+(?:-path\s+)?['"]?([^'"]+)['"]?$/i);
    return m2 ? { target: m2[1] } : null;
  }
  if (shell === "cmd") {
    const m2 = cmd.match(/^(?:cd|chdir)\b\s*(.*)$/i);
    if (!m2) return null;
    return { target: m2[1].replace(/^\/d\s+/i, "") };
  }
  const m = cmd.match(/^cd\b\s*(.*)$/);
  return m ? { target: m[1] } : null;
}
var terminalResource = async (req, res, seg, _q, method, host) => {
  if (seg[0] === "exec-stream" && seg.length === 1 && method === "GET") {
    const session = _q.get("session")?.trim() || "default";
    const shell = _q.get("shell") === "powershell" ? "powershell" : "cmd";
    let cwd = _q.get("cwd")?.trim() || sessionCwd.get(session) || getRoot(_q.get("key") ?? void 0) || homedir5();
    cwd = requireAbsolute(cwd);
    if (isProtectedPath(cwd)) {
      throw new FsError("forbidden", "terminal rejected: working directory is a protected read-only area", 403);
    }
    let s = sessions.get(session);
    if (s && (s.shell !== shell || normalizePath(s.cwd) !== normalizePath(cwd))) {
      killSessionTree(s);
      endSession(session, s);
      s = void 0;
    }
    if (!s) {
      s = await spawnShellSession(session, shell, cwd);
      sessionCwd.set(session, cwd);
    }
    res.writeHead(200, {
      "content-type": "text/event-stream; charset=utf-8",
      "cache-control": "no-cache, no-transform",
      connection: "keep-alive",
      "x-accel-buffering": "no"
    });
    res.write(`data: ${JSON.stringify({ type: "cwd", cwd: s.cwd })}

`);
    s.sinks.add(res);
    if (!s.heartbeat) {
      s.heartbeat = setInterval(() => {
        for (const r of s.sinks) {
          try {
            r.write(": ping\n\n");
          } catch {
          }
        }
      }, 15e3);
    }
    req.on("close", () => {
      s?.sinks.delete(res);
    });
    return true;
  }
  if (seg[0] === "exec-input" && seg.length === 1 && method === "POST") {
    const body = await readBody(req);
    const session = body?.session?.trim() || "default";
    const data = body?.data ?? "";
    const s = sessions.get(session);
    if (!s || s.closed) {
      return json(res, 404, { ok: false, error: "terminal session is not running; reconnect the stream first" }), true;
    }
    const cd = detectCd(data, s.shell);
    if (cd) {
      const target = cd.target.trim() || homedir5();
      const next = resolve4(s.cwd, target);
      if (!isProtectedPath(next)) {
        const st = await stat7(next).catch(() => null);
        if (st && st.isDirectory()) {
          s.cwd = next;
          sessionCwd.set(session, next);
          broadcast(s, { type: "cwd", cwd: next });
        }
      }
    }
    try {
      s.pty.write(data.replace(/\r\n|\r|\n/g, "\r"));
    } catch (e) {
      return json(res, 500, { ok: false, error: e instanceof Error ? e.message : String(e) }), true;
    }
    return json(res, 200, { ok: true, data: { ok: true } }), true;
  }
  if (seg[0] === "exec-kill" && seg.length === 1 && method === "POST") {
    const body = await readBody(req);
    const session = body?.session?.trim() || "default";
    const s = sessions.get(session);
    if (s) {
      killSessionTree(s);
      endSession(session, s);
    }
    return json(res, 200, { ok: true, data: { killed: Boolean(s) } }), true;
  }
  return false;
};
function normalizePath(p) {
  const n = p.replace(/\\/g, "/").replace(/\/+$/, "").toLowerCase();
  return n;
}

// src/host/subagent/subagent.ts
import { readFile as readFile5, stat as stat8 } from "node:fs/promises";
import { basename as basename7 } from "node:path";
var MAX_CONTEXT_CHARS = 16e3;
async function readFileContext(path, isDir) {
  if (isDir) return void 0;
  let buf;
  try {
    const st = await stat8(path);
    if (!st.isFile()) return void 0;
    if (st.size > 4 * 1024 * 1024) return `[${basename7(path)}] \u6587\u4EF6\u8FC7\u5927\uFF08${st.size} bytes\uFF09\uFF0C\u672A\u8BFB\u53D6\u6B63\u6587\u3002`;
    buf = await readFile5(path);
  } catch {
    return `[${basename7(path)}] \u65E0\u6CD5\u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9\u3002`;
  }
  let text = buf.toString("utf8");
  if (text.length > MAX_CONTEXT_CHARS) {
    text = text.slice(0, MAX_CONTEXT_CHARS) + `
\u2026[\u5185\u5BB9\u5DF2\u622A\u65AD\uFF0C\u539F\u6587\u4EF6\u5171 ${buf.length} bytes]\u3002`;
  }
  return text;
}
function buildSpawnPrompt(path, isDir, instruction, content) {
  const lines = [];
  if (path) {
    const kind = isDir ? "\u6587\u4EF6\u5939" : "\u6587\u4EF6";
    lines.push(`\u5F53\u524D\u5904\u7406\u76EE\u6807${kind}\uFF1A${path}`, `\u4F60\u662F\u7531\u6587\u4EF6\u5DE5\u4F5C\u53F0\u53D1\u8D77\u7684\u5B50\u4EE3\u7406\uFF0C\u8D1F\u8D23\u5C31\u5730\u5904\u7406\u8FD9\u4E2A\u76EE\u6807\u3002`);
    if (content !== void 0) {
      lines.push(`
\u76EE\u6807${kind}\u7684\u5F53\u524D\u6B63\u6587\u5185\u5BB9\uFF08\u53EA\u8BFB\u53C2\u8003\u5FEB\u7167\uFF0C\u8BF7\u81EA\u884C\u8BFB\u53D6/\u4FEE\u6539\u76EE\u6807\u5B8C\u6210\u5DE5\u4F5C\uFF09\uFF1A
\`\`\`
${content}
\`\`\``);
    }
    if (isDir) {
      lines.push(`
\u6CE8\uFF1A\u76EE\u6807\u662F\u6587\u4EF6\u5939\u3002\u4F60\u53EF\u4EE5\u5217\u76EE\u5F55\u3001\u8BFB\u53D6\u5176\u4E2D\u7684\u6587\u4EF6\uFF0C\u5E76\u5728\u9002\u5F53\u60C5\u51B5\u4E0B\u521B\u5EFA/\u4FEE\u6539\u6587\u4EF6\u3002\u5DE5\u4F5C\u76EE\u5F55\u5373\u4E3A\u8BE5\u6587\u4EF6\u5939\u3002`);
    }
  } else {
    lines.push(`\u4F60\u662F\u7531\u6587\u4EF6\u5DE5\u4F5C\u53F0\u53D1\u8D77\u7684\u5B50\u4EE3\u7406\uFF0C\u8BF7\u4E0E\u7528\u6237\u5BF9\u8BDD\u5E76\u5B8C\u6210\u5176\u4EA4\u4EE3\u7684\u4EFB\u52A1\u3002`);
  }
  if (instruction.trim()) lines.push(`
\u7528\u6237\u6307\u4EE4\uFF1A
${instruction.trim()}`);
  lines.push(`
\u5982\u9700\u6539\u52A8\u4EE3\u7801/\u6587\u4EF6\uFF0C\u8BF7\u5B9E\u9645\u843D\u76D8\u540E\u518D\u603B\u7ED3\u6539\u52A8\u4E0E\u9A8C\u8BC1\u7ED3\u679C\uFF1B\u4E0D\u8981\u7F16\u9020\u672A\u6267\u884C\u7684\u64CD\u4F5C\u3002\u53EF\u5728\u672C\u4F1A\u8BDD\u4E2D\u7EE7\u7EED\u4E0E\u7528\u6237\u5BF9\u8BDD\u3002`);
  return lines.join("\n");
}
function describeError(error) {
  if (!(error instanceof Error)) return String(error);
  const code = error.code;
  const prefix = typeof code === "string" && code ? `[${code}] ` : "";
  const stack = error.stack && error.stack.replace(/^\S+\s*/, "") ? `
${error.stack}` : "";
  return `${prefix}${error.message}${stack}`;
}
function resolveLiveParent(ctx, sessionId) {
  let agents;
  try {
    const c = ctx;
    agents = c.get?.("agents") ?? c.agents;
  } catch {
  }
  if (!agents) return void 0;
  const hasOptions = (agent) => !!agent && typeof agent === "object" && !!agent.options;
  if (sessionId && typeof agents.get === "function") {
    const byId = agents.get(sessionId);
    if (hasOptions(byId)) return byId;
  }
  for (const key of ["current", "active"]) {
    const via = agents[key];
    if (typeof via === "function") {
      try {
        const resolved = via();
        if (hasOptions(resolved)) return resolved;
      } catch {
      }
    }
  }
  return void 0;
}
function finalOutputText(result) {
  const acc = [];
  const pick = (chunk) => {
    if (chunk === void 0 || chunk === null) return;
    if (typeof chunk === "string") {
      acc.push(chunk);
      return;
    }
    if (Array.isArray(chunk)) {
      for (const item of chunk) pick(item);
      return;
    }
    if (typeof chunk === "object") {
      const obj = chunk;
      if (obj.type === "text" && typeof obj.text === "string") acc.push(obj.text);
      else acc.push(JSON.stringify(chunk, null, 2));
      return;
    }
    acc.push(String(chunk));
  };
  pick(result?.lastAssistantMessage);
  if (acc.length === 0) pick(result?.output);
  return acc.join("\n").trim();
}
function pickProvider(runtime) {
  let names = [];
  try {
    const listed = typeof runtime.list === "function" ? runtime.list() : void 0;
    if (Array.isArray(listed)) names = listed.filter((n) => typeof n === "string");
  } catch {
  }
  if (!names.length) return "fork";
  if (names.includes("fork")) return "fork";
  if (names.includes("spawn")) return "spawn";
  return names[0] ?? "fork";
}
async function spawnSubagent(ctx, opts) {
  let runtime;
  try {
    runtime = ctx.get?.("subagents");
  } catch {
  }
  if (!runtime || typeof runtime.start !== "function" && typeof runtime.startContinuable !== "function") {
    return {
      ok: false,
      error: "subagents \u670D\u52A1\u4E0D\u53EF\u7528\uFF1A\u5BBF\u4E3B\u672A\u52A0\u8F7D @deepseek-ai/dsh-subagent\uFF08\u9700\u5728 profile \u7EC4\u5408\u4E2D\u542F\u7528\u8BE5\u670D\u52A1\u53CA fork/spawn provider\uFF09\u3002"
    };
  }
  const path = typeof opts.path === "string" ? opts.path.trim() : "";
  const isDir = opts.isDir === true;
  const content = path && !isDir ? await readFileContext(path, isDir) : void 0;
  const prompt = buildSpawnPrompt(path, isDir, opts.instruction ?? "", content);
  const parent = resolveLiveParent(ctx, opts.sessionId);
  if (parent === void 0) {
    return {
      ok: false,
      error: "\u65E0\u6CD5\u89E3\u6790\u5F53\u524D\u4F1A\u8BDD\u7684\u300C\u6D3B\u300DAgent \u4F5C\u4E3A\u7236\u7EA7\uFF1A\u8BF7\u5148\u5728\u804A\u5929\u4F1A\u8BDD\u4E2D\u53D1\u8D77\u4E00\u6B21\u5BF9\u8BDD\u540E\u518D\u8BD5\uFF08\u5B98\u65B9\u5B50\u4EE3\u7406\u5FC5\u987B\u6302\u5728\u771F\u5B9E\u4F1A\u8BDD Agent \u4E0B\uFF09\u3002"
    };
  }
  const provider = pickProvider(runtime);
  const label = path ? `workbench:${basename7(path)}` : "workbench:subagent";
  const blocks = [{ type: "text", text: prompt }];
  const controller = new AbortController();
  if (typeof runtime.startContinuable === "function") {
    try {
      const started = await runtime.startContinuable({
        provider,
        label,
        request: { prompt: blocks, parent, maxDepth: 3 },
        signal: controller.signal
      });
      const childId = started?.childId;
      if (typeof childId === "string" && childId) {
        return { ok: true, sessionId: childId, runId: childId, provider, mode: "continuable" };
      }
    } catch (error) {
      const msg = describeError(error);
      if (!/prepareContinuable|not support|unsupported|CAPABILITY|unknown method/i.test(msg)) {
        return { ok: false, error: `\u5B50\u4EE3\u7406\u53D1\u8D77\u5931\u8D25\uFF08continuable\uFF09\uFF1A${msg}` };
      }
    }
  }
  if (typeof runtime.start !== "function") {
    return { ok: false, error: "subagents \u670D\u52A1\u65E2\u4E0D\u652F\u6301 startContinuable \u4E5F\u4E0D\u652F\u6301 start\uFF0C\u65E0\u6CD5\u53D1\u8D77\u5B50\u4EE3\u7406\u3002" };
  }
  let run;
  try {
    run = await runtime.start(provider, {
      prompt: blocks,
      label,
      maxDepth: 3,
      signal: controller.signal,
      parent
    });
  } catch (error) {
    return { ok: false, error: `\u5B50\u4EE3\u7406\u53D1\u8D77\u5931\u8D25\uFF08oneshot\uFF09\uFF1A${describeError(error)}` };
  }
  try {
    const result = await run.result;
    const output = finalOutputText(result);
    const stop = result?.stopReason;
    const failed = stop === "error" || stop === "max-tokens" || stop === "refusal";
    return {
      ok: !failed,
      sessionId: run.id,
      runId: run.id,
      provider,
      mode: "oneshot",
      output: output || (failed ? "" : "(\u5B50\u4EE3\u7406\u5DF2\u5B8C\u6210\u5904\u7406\uFF0C\u4F46\u672A\u8FD4\u56DE\u6587\u5B57\u5185\u5BB9)"),
      error: failed ? `\u5B50\u4EE3\u7406\u8FD0\u884C\u7EC8\u6B62\u4E14\u672A\u4EA7\u51FA\u5185\u5BB9\uFF08\u539F\u56E0\uFF1A${stop}${result?.diagnostic ? `\uFF1B\u8BCA\u65AD\uFF1A${result.diagnostic}` : ""}\uFF09` : void 0
    };
  } catch (error) {
    return { ok: false, error: `\u5B50\u4EE3\u7406\u8FD0\u884C\u5931\u8D25\uFF1A${describeError(error)}` };
  } finally {
    try {
      await run.dispose?.();
    } catch {
    }
  }
}

// src/host/routes/routes-subagent.ts
var subagentResource = async (req, res, seg, _q, method, host) => {
  if (seg[0] !== "subagent" || seg[1] !== "spawn" || method !== "POST") return false;
  const body = await readBody(req);
  if (!host?.ctxProvider) return json(res, 500, { ok: false, error: "subagent service context unavailable" }), true;
  const data = await spawnSubagent(host.ctxProvider(), {
    path: typeof body?.path === "string" ? body.path : void 0,
    isDir: body?.isDir === true,
    instruction: typeof body?.instruction === "string" ? body.instruction : "",
    sessionId: typeof body?.session === "string" && body.session ? body.session : void 0
  });
  return json(res, 200, { ok: true, data }), true;
};

// src/host/routes/routes-session-stream.ts
import { opendir as opendir4, readFile as readFile6 } from "node:fs/promises";
import { join as join8 } from "node:path";
import { homedir as homedir6 } from "node:os";

// node_modules/fzstd/esm/index.mjs
var ab = ArrayBuffer;
var u82 = Uint8Array;
var u162 = Uint16Array;
var i16 = Int16Array;
var i322 = Int32Array;
var slc2 = function(v, s, e) {
  if (u82.prototype.slice)
    return u82.prototype.slice.call(v, s, e);
  if (s == null || s < 0)
    s = 0;
  if (e == null || e > v.length)
    e = v.length;
  var n = new u82(e - s);
  n.set(v.subarray(s, e));
  return n;
};
var fill = function(v, n, s, e) {
  if (u82.prototype.fill)
    return u82.prototype.fill.call(v, n, s, e);
  if (s == null || s < 0)
    s = 0;
  if (e == null || e > v.length)
    e = v.length;
  for (; s < e; ++s)
    v[s] = n;
  return v;
};
var cpw = function(v, t, s, e) {
  if (u82.prototype.copyWithin)
    return u82.prototype.copyWithin.call(v, t, s, e);
  if (s == null || s < 0)
    s = 0;
  if (e == null || e > v.length)
    e = v.length;
  while (s < e) {
    v[t++] = v[s++];
  }
};
var ec2 = [
  "invalid zstd data",
  "window size too large (>2046MB)",
  "invalid block type",
  "FSE accuracy too high",
  "match distance too far back",
  "unexpected EOF"
];
var err2 = function(ind, msg, nt) {
  var e = new Error(msg || ec2[ind]);
  e.code = ind;
  if (Error.captureStackTrace)
    Error.captureStackTrace(e, err2);
  if (!nt)
    throw e;
  return e;
};
var rb = function(d, b, n) {
  var i = 0, o = 0;
  for (; i < n; ++i)
    o |= d[b++] << (i << 3);
  return o;
};
var b42 = function(d, b) {
  return (d[b] | d[b + 1] << 8 | d[b + 2] << 16 | d[b + 3] << 24) >>> 0;
};
var rzfh = function(dat, w) {
  var n3 = dat[0] | dat[1] << 8 | dat[2] << 16;
  if (n3 == 3126568 && dat[3] == 253) {
    var flg = dat[4];
    var ss = flg >> 5 & 1, cc = flg >> 2 & 1, df = flg & 3, fcf = flg >> 6;
    if (flg & 8)
      err2(0);
    var bt = 6 - ss;
    var db = df == 3 ? 4 : df;
    var di = rb(dat, bt, db);
    bt += db;
    var fsb = fcf ? 1 << fcf : ss;
    var fss = rb(dat, bt, fsb) + (fcf == 1 && 256);
    var ws = fss;
    if (!ss) {
      var wb = 1 << 10 + (dat[5] >> 3);
      ws = wb + (wb >> 3) * (dat[5] & 7);
    }
    if (ws > 2145386496)
      err2(1);
    var buf = new u82((w == 1 ? fss || ws : w ? 0 : ws) + 12);
    buf[0] = 1, buf[4] = 4, buf[8] = 8;
    return {
      b: bt + fsb,
      y: 0,
      l: 0,
      d: di,
      w: w && w != 1 ? w : buf.subarray(12),
      e: ws,
      o: new i322(buf.buffer, 0, 3),
      u: fss,
      c: cc,
      m: Math.min(131072, ws)
    };
  } else if ((n3 >> 4 | dat[3] << 20) == 25481893) {
    return b42(dat, 4) + 8;
  }
  err2(0);
};
var msb = function(val) {
  var bits2 = 0;
  for (; 1 << bits2 <= val; ++bits2)
    ;
  return bits2 - 1;
};
var rfse = function(dat, bt, mal) {
  var tpos = (bt << 3) + 4;
  var al = (dat[bt] & 15) + 5;
  if (al > mal)
    err2(3);
  var sz = 1 << al;
  var probs = sz, sym = -1, re = -1, i = -1, ht = sz;
  var buf = new ab(512 + (sz << 2));
  var freq = new i16(buf, 0, 256);
  var dstate = new u162(buf, 0, 256);
  var nstate = new u162(buf, 512, sz);
  var bb1 = 512 + (sz << 1);
  var syms = new u82(buf, bb1, sz);
  var nbits = new u82(buf, bb1 + sz);
  while (sym < 255 && probs > 0) {
    var bits2 = msb(probs + 1);
    var cbt = tpos >> 3;
    var msk = (1 << bits2 + 1) - 1;
    var val = (dat[cbt] | dat[cbt + 1] << 8 | dat[cbt + 2] << 16) >> (tpos & 7) & msk;
    var msk1fb = (1 << bits2) - 1;
    var msv = msk - probs - 1;
    var sval = val & msk1fb;
    if (sval < msv)
      tpos += bits2, val = sval;
    else {
      tpos += bits2 + 1;
      if (val > msk1fb)
        val -= msv;
    }
    freq[++sym] = --val;
    if (val == -1) {
      probs += val;
      syms[--ht] = sym;
    } else
      probs -= val;
    if (!val) {
      do {
        var rbt = tpos >> 3;
        re = (dat[rbt] | dat[rbt + 1] << 8) >> (tpos & 7) & 3;
        tpos += 2;
        sym += re;
      } while (re == 3);
    }
  }
  if (sym > 255 || probs)
    err2(0);
  var sympos = 0;
  var sstep = (sz >> 1) + (sz >> 3) + 3;
  var smask = sz - 1;
  for (var s = 0; s <= sym; ++s) {
    var sf = freq[s];
    if (sf < 1) {
      dstate[s] = -sf;
      continue;
    }
    for (i = 0; i < sf; ++i) {
      syms[sympos] = s;
      do {
        sympos = sympos + sstep & smask;
      } while (sympos >= ht);
    }
  }
  if (sympos)
    err2(0);
  for (i = 0; i < sz; ++i) {
    var ns = dstate[syms[i]]++;
    var nb = nbits[i] = al - msb(ns);
    nstate[i] = (ns << nb) - sz;
  }
  return [tpos + 7 >> 3, {
    b: al,
    s: syms,
    n: nbits,
    t: nstate
  }];
};
var rhu = function(dat, bt) {
  var i = 0, wc = -1;
  var buf = new u82(292), hb = dat[bt];
  var hw = buf.subarray(0, 256);
  var rc = buf.subarray(256, 268);
  var ri = new u162(buf.buffer, 268);
  if (hb < 128) {
    var _a2 = rfse(dat, bt + 1, 6), ebt = _a2[0], fdt2 = _a2[1];
    bt += hb;
    var epos = ebt << 3;
    var lb = dat[bt];
    if (!lb)
      err2(0);
    var st1 = 0, st2 = 0, btr1 = fdt2.b, btr2 = btr1;
    var fpos = (++bt << 3) - 8 + msb(lb);
    for (; ; ) {
      fpos -= btr1;
      if (fpos < epos)
        break;
      var cbt = fpos >> 3;
      st1 += (dat[cbt] | dat[cbt + 1] << 8) >> (fpos & 7) & (1 << btr1) - 1;
      hw[++wc] = fdt2.s[st1];
      fpos -= btr2;
      if (fpos < epos)
        break;
      cbt = fpos >> 3;
      st2 += (dat[cbt] | dat[cbt + 1] << 8) >> (fpos & 7) & (1 << btr2) - 1;
      hw[++wc] = fdt2.s[st2];
      btr1 = fdt2.n[st1];
      st1 = fdt2.t[st1];
      btr2 = fdt2.n[st2];
      st2 = fdt2.t[st2];
    }
    if (++wc > 255)
      err2(0);
  } else {
    wc = hb - 127;
    for (; i < wc; i += 2) {
      var byte = dat[++bt];
      hw[i] = byte >> 4;
      hw[i + 1] = byte & 15;
    }
    ++bt;
  }
  var wes = 0;
  for (i = 0; i < wc; ++i) {
    var wt = hw[i];
    if (wt > 11)
      err2(0);
    wes += wt && 1 << wt - 1;
  }
  var mb = msb(wes) + 1;
  var ts = 1 << mb;
  var rem = ts - wes;
  if (rem & rem - 1)
    err2(0);
  hw[wc++] = msb(rem) + 1;
  for (i = 0; i < wc; ++i) {
    var wt = hw[i];
    ++rc[hw[i] = wt && mb + 1 - wt];
  }
  var hbuf = new u82(ts << 1);
  var syms = hbuf.subarray(0, ts), nb = hbuf.subarray(ts);
  ri[mb] = 0;
  for (i = mb; i > 0; --i) {
    var pv = ri[i];
    fill(nb, i, pv, ri[i - 1] = pv + rc[i] * (1 << mb - i));
  }
  if (ri[0] != ts)
    err2(0);
  for (i = 0; i < wc; ++i) {
    var bits2 = hw[i];
    if (bits2) {
      var code = ri[bits2];
      fill(syms, i, code, ri[bits2] = code + (1 << mb - bits2));
    }
  }
  return [bt, {
    n: nb,
    b: mb,
    s: syms
  }];
};
var dllt = rfse(/* @__PURE__ */ new u82([
  81,
  16,
  99,
  140,
  49,
  198,
  24,
  99,
  12,
  33,
  196,
  24,
  99,
  102,
  102,
  134,
  70,
  146,
  4
]), 0, 6)[1];
var dmlt = rfse(/* @__PURE__ */ new u82([
  33,
  20,
  196,
  24,
  99,
  140,
  33,
  132,
  16,
  66,
  8,
  33,
  132,
  16,
  66,
  8,
  33,
  68,
  68,
  68,
  68,
  68,
  68,
  68,
  68,
  36,
  9
]), 0, 6)[1];
var doct = rfse(/* @__PURE__ */ new u82([
  32,
  132,
  16,
  66,
  102,
  70,
  68,
  68,
  68,
  68,
  36,
  73,
  2
]), 0, 5)[1];
var b2bl = function(b, s) {
  var len = b.length, bl = new i322(len);
  for (var i = 0; i < len; ++i) {
    bl[i] = s;
    s += 1 << b[i];
  }
  return bl;
};
var llb = /* @__PURE__ */ new u82((/* @__PURE__ */ new i322([
  0,
  0,
  0,
  0,
  16843009,
  50528770,
  134678020,
  202050057,
  269422093
])).buffer, 0, 36);
var llbl = /* @__PURE__ */ b2bl(llb, 0);
var mlb = /* @__PURE__ */ new u82((/* @__PURE__ */ new i322([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  16843009,
  50528770,
  117769220,
  185207048,
  252579084,
  16
])).buffer, 0, 53);
var mlbl = /* @__PURE__ */ b2bl(mlb, 3);
var dhu = function(dat, out, hu) {
  var len = dat.length, ss = out.length, lb = dat[len - 1], msk = (1 << hu.b) - 1, eb = -hu.b;
  if (!lb)
    err2(0);
  var st = 0, btr = hu.b, pos = (len << 3) - 8 + msb(lb) - btr, i = -1;
  for (; pos > eb && i < ss; ) {
    var cbt = pos >> 3;
    var val = (dat[cbt] | dat[cbt + 1] << 8 | dat[cbt + 2] << 16) >> (pos & 7);
    st = (st << btr | val) & msk;
    out[++i] = hu.s[st];
    pos -= btr = hu.n[st];
  }
  if (pos != eb || i + 1 != ss)
    err2(0);
};
var dhu4 = function(dat, out, hu) {
  var bt = 6;
  var ss = out.length, sz1 = ss + 3 >> 2, sz2 = sz1 << 1, sz3 = sz1 + sz2;
  dhu(dat.subarray(bt, bt += dat[0] | dat[1] << 8), out.subarray(0, sz1), hu);
  dhu(dat.subarray(bt, bt += dat[2] | dat[3] << 8), out.subarray(sz1, sz2), hu);
  dhu(dat.subarray(bt, bt += dat[4] | dat[5] << 8), out.subarray(sz2, sz3), hu);
  dhu(dat.subarray(bt), out.subarray(sz3), hu);
};
var rzb = function(dat, st, out) {
  var _a2;
  var bt = st.b;
  var b0 = dat[bt], btype = b0 >> 1 & 3;
  st.l = b0 & 1;
  var sz = b0 >> 3 | dat[bt + 1] << 5 | dat[bt + 2] << 13;
  var ebt = (bt += 3) + sz;
  if (btype == 1) {
    if (bt >= dat.length)
      return;
    st.b = bt + 1;
    if (out) {
      fill(out, dat[bt], st.y, st.y += sz);
      return out;
    }
    return fill(new u82(sz), dat[bt]);
  }
  if (ebt > dat.length)
    return;
  if (btype == 0) {
    st.b = ebt;
    if (out) {
      out.set(dat.subarray(bt, ebt), st.y);
      st.y += sz;
      return out;
    }
    return slc2(dat, bt, ebt);
  }
  if (btype == 2) {
    var b3 = dat[bt], lbt = b3 & 3, sf = b3 >> 2 & 3;
    var lss = b3 >> 4, lcs = 0, s4 = 0;
    if (lbt < 2) {
      if (sf & 1)
        lss |= dat[++bt] << 4 | (sf & 2 && dat[++bt] << 12);
      else
        lss = b3 >> 3;
    } else {
      s4 = sf;
      if (sf < 2)
        lss |= (dat[++bt] & 63) << 4, lcs = dat[bt] >> 6 | dat[++bt] << 2;
      else if (sf == 2)
        lss |= dat[++bt] << 4 | (dat[++bt] & 3) << 12, lcs = dat[bt] >> 2 | dat[++bt] << 6;
      else
        lss |= dat[++bt] << 4 | (dat[++bt] & 63) << 12, lcs = dat[bt] >> 6 | dat[++bt] << 2 | dat[++bt] << 10;
    }
    ++bt;
    var buf = out ? out.subarray(st.y, st.y + st.m) : new u82(st.m);
    var spl = buf.length - lss;
    if (lbt == 0)
      buf.set(dat.subarray(bt, bt += lss), spl);
    else if (lbt == 1)
      fill(buf, dat[bt++], spl);
    else {
      var hu = st.h;
      if (lbt == 2) {
        var hud = rhu(dat, bt);
        lcs += bt - (bt = hud[0]);
        st.h = hu = hud[1];
      } else if (!hu)
        err2(0);
      (s4 ? dhu4 : dhu)(dat.subarray(bt, bt += lcs), buf.subarray(spl), hu);
    }
    var ns = dat[bt++];
    if (ns) {
      if (ns == 255)
        ns = (dat[bt++] | dat[bt++] << 8) + 32512;
      else if (ns > 127)
        ns = ns - 128 << 8 | dat[bt++];
      var scm = dat[bt++];
      if (scm & 3)
        err2(0);
      var dts = [dmlt, doct, dllt];
      for (var i = 2; i > -1; --i) {
        var md = scm >> (i << 1) + 2 & 3;
        if (md == 1) {
          var rbuf = new u82([0, 0, dat[bt++]]);
          dts[i] = {
            s: rbuf.subarray(2, 3),
            n: rbuf.subarray(0, 1),
            t: new u162(rbuf.buffer, 0, 1),
            b: 0
          };
        } else if (md == 2) {
          _a2 = rfse(dat, bt, 9 - (i & 1)), bt = _a2[0], dts[i] = _a2[1];
        } else if (md == 3) {
          if (!st.t)
            err2(0);
          dts[i] = st.t[i];
        }
      }
      var _b2 = st.t = dts, mlt = _b2[0], oct = _b2[1], llt = _b2[2];
      var lb = dat[ebt - 1];
      if (!lb)
        err2(0);
      var spos = (ebt << 3) - 8 + msb(lb) - llt.b, cbt = spos >> 3, oubt = 0;
      var lst = (dat[cbt] | dat[cbt + 1] << 8) >> (spos & 7) & (1 << llt.b) - 1;
      cbt = (spos -= oct.b) >> 3;
      var ost = (dat[cbt] | dat[cbt + 1] << 8) >> (spos & 7) & (1 << oct.b) - 1;
      cbt = (spos -= mlt.b) >> 3;
      var mst = (dat[cbt] | dat[cbt + 1] << 8) >> (spos & 7) & (1 << mlt.b) - 1;
      for (++ns; --ns; ) {
        var llc = llt.s[lst];
        var lbtr = llt.n[lst];
        var mlc = mlt.s[mst];
        var mbtr = mlt.n[mst];
        var ofc = oct.s[ost];
        var obtr = oct.n[ost];
        cbt = (spos -= ofc) >> 3;
        var ofp = 1 << ofc;
        var off = ofp + ((dat[cbt] | dat[cbt + 1] << 8 | dat[cbt + 2] << 16 | dat[cbt + 3] << 24) >>> (spos & 7) & ofp - 1);
        cbt = (spos -= mlb[mlc]) >> 3;
        var ml = mlbl[mlc] + ((dat[cbt] | dat[cbt + 1] << 8 | dat[cbt + 2] << 16) >> (spos & 7) & (1 << mlb[mlc]) - 1);
        cbt = (spos -= llb[llc]) >> 3;
        var ll = llbl[llc] + ((dat[cbt] | dat[cbt + 1] << 8 | dat[cbt + 2] << 16) >> (spos & 7) & (1 << llb[llc]) - 1);
        cbt = (spos -= lbtr) >> 3;
        lst = llt.t[lst] + ((dat[cbt] | dat[cbt + 1] << 8) >> (spos & 7) & (1 << lbtr) - 1);
        cbt = (spos -= mbtr) >> 3;
        mst = mlt.t[mst] + ((dat[cbt] | dat[cbt + 1] << 8) >> (spos & 7) & (1 << mbtr) - 1);
        cbt = (spos -= obtr) >> 3;
        ost = oct.t[ost] + ((dat[cbt] | dat[cbt + 1] << 8) >> (spos & 7) & (1 << obtr) - 1);
        if (off > 3) {
          st.o[2] = st.o[1];
          st.o[1] = st.o[0];
          st.o[0] = off -= 3;
        } else {
          var idx = off - (ll != 0);
          if (idx) {
            off = idx == 3 ? st.o[0] - 1 : st.o[idx];
            if (idx > 1)
              st.o[2] = st.o[1];
            st.o[1] = st.o[0];
            st.o[0] = off;
          } else
            off = st.o[0];
        }
        for (var i = 0; i < ll; ++i) {
          buf[oubt + i] = buf[spl + i];
        }
        oubt += ll, spl += ll;
        var stin = oubt - off;
        if (stin < 0) {
          var len = -stin;
          var bs = st.e + stin;
          if (len > ml)
            len = ml;
          for (var i = 0; i < len; ++i) {
            buf[oubt + i] = st.w[bs + i];
          }
          oubt += len, ml -= len, stin = 0;
        }
        for (var i = 0; i < ml; ++i) {
          buf[oubt + i] = buf[stin + i];
        }
        oubt += ml;
      }
      if (oubt != spl) {
        while (spl < buf.length) {
          buf[oubt++] = buf[spl++];
        }
      } else
        oubt = buf.length;
      if (out)
        st.y += oubt;
      else
        buf = slc2(buf, 0, oubt);
    } else if (out) {
      st.y += lss;
      if (spl) {
        for (var i = 0; i < lss; ++i) {
          buf[i] = buf[spl + i];
        }
      }
    } else if (spl)
      buf = slc2(buf, spl);
    st.b = ebt;
    return buf;
  }
  err2(2);
};
var cct = function(bufs, ol) {
  if (bufs.length == 1)
    return bufs[0];
  var buf = new u82(ol);
  for (var i = 0, b = 0; i < bufs.length; ++i) {
    var chk = bufs[i];
    buf.set(chk, b);
    b += chk.length;
  }
  return buf;
};
function decompress(dat, buf) {
  var bufs = [], nb = +!buf;
  var bt = 0, ol = 0;
  for (; dat.length; ) {
    var st = rzfh(dat, nb || buf);
    if (typeof st == "object") {
      if (nb) {
        buf = null;
        if (st.w.length == st.u) {
          bufs.push(buf = st.w);
          ol += st.u;
        }
      } else {
        bufs.push(buf);
        st.e = 0;
      }
      for (; !st.l; ) {
        var blk = rzb(dat, st, buf);
        if (!blk)
          err2(5);
        if (buf)
          st.e = st.y;
        else {
          bufs.push(blk);
          ol += blk.length;
          cpw(st.w, 0, blk.length);
          st.w.set(blk, st.w.length - blk.length);
        }
      }
      bt = st.b + st.c * 4;
    } else
      bt = st;
    dat = dat.subarray(bt);
  }
  return cct(bufs, ol);
}

// src/shared/session-files.ts
var isAbsPath = (s) => /^[A-Za-z]:[\\/]/.test(s) || s.startsWith("/") || s.startsWith("\\\\");
var PATH_KEY = /(path|file|files|filename|dir|dirs|directory|folder|cwd|root|workspace)$/i;
var EXTRA_KEY = /^(src|dest|source|target|from|to)$/i;
function resolvePath(p, cwd) {
  if (!cwd || isAbsPath(p)) return p;
  const sep4 = /^[A-Za-z]:[\\/]/.test(cwd) ? "\\" : "/";
  return `${cwd.replace(/[\\/]+$/, "")}${sep4}${p}`;
}
function collectFromArgs(raw, cwd, out) {
  let val;
  try {
    val = typeof raw === "string" ? JSON.parse(raw) : raw;
  } catch {
    return;
  }
  const stack = [val];
  while (stack.length > 0) {
    const node = stack.pop();
    if (Array.isArray(node)) {
      for (const v of node) stack.push(v);
      continue;
    }
    if (node && typeof node === "object") {
      for (const [k, v] of Object.entries(node)) {
        if (typeof v === "string") {
          const keep = PATH_KEY.test(k) || isAbsPath(v) || EXTRA_KEY.test(k) && /[.\\/]/.test(v);
          if (keep && !/:\/\//.test(v) && !/\s/.test(v)) {
            const r = resolvePath(v, cwd);
            if (r) out.add(r);
          }
        } else if (typeof v === "object") {
          stack.push(v);
        }
      }
    }
  }
}
function unwrapEvent(x) {
  if (!x || typeof x !== "object") return void 0;
  const rec = x;
  return rec.event ?? x;
}
function collectSessionEventFiles(ev, cwd, out) {
  if (!ev?.type) return;
  if (ev.type === "tool/call") {
    const raw = ev.data?.arguments ?? ev.data?.argsRaw ?? ev.data?.args;
    collectFromArgs(raw, cwd, out);
  } else if (ev.type === "assistant/message") {
    const blocks = ev.data?.message?.content;
    if (Array.isArray(blocks)) {
      for (const b of blocks) {
        if (b && typeof b === "object") {
          const box = b;
          if (box.type === "tool-call") {
            collectFromArgs(box.arguments ?? box.argsRaw ?? box.call?.arguments ?? box.call?.argsRaw, cwd, out);
          }
        }
      }
    }
  }
}
function collectSessionFiles(events, cwd) {
  const out = /* @__PURE__ */ new Map();
  for (const raw of Array.isArray(events) ? events : []) {
    const batch = /* @__PURE__ */ new Set();
    collectSessionEventFiles(unwrapEvent(raw), cwd, batch);
    for (const p of batch) {
      const key = canonicalKey(p);
      if (!out.has(key)) out.set(key, p);
    }
  }
  return [...out.values()];
}
function canonicalKey(p) {
  let s = p.replace(/[\\/]+/g, "/");
  if (s.length > 1) s = s.replace(/\/+$/, "");
  if (/^[A-Za-z]:/.test(p) || s.startsWith("//")) s = s.toLowerCase();
  return s;
}

// src/host/routes/routes-session-stream.ts
function dshHomeDir() {
  return process.env.DSH_HOME || join8(homedir6(), ".dsh");
}
function sessionsRootDir() {
  return join8(dshHomeDir(), "sessions");
}
function writeFrame(res, ev) {
  try {
    res.write(`data: ${JSON.stringify(ev)}

`);
  } catch {
  }
}
async function readTranscriptFiles(sessionId) {
  const rootDir = await opendir4(sessionsRootDir()).catch(() => void 0);
  if (!rootDir) return { files: [] };
  for await (const cwdDir of rootDir) {
    if (!cwdDir.isDirectory()) continue;
    const groupDir = await opendir4(join8(sessionsRootDir(), cwdDir.name)).catch(() => void 0);
    if (!groupDir) continue;
    for await (const ses of groupDir) {
      if (!ses.isDirectory() || ses.name !== sessionId) continue;
      const raw = await readFile6(join8(sessionsRootDir(), cwdDir.name, ses.name, "session.jsonl.zstd")).catch(() => null);
      if (!raw) return { files: [] };
      let txt;
      try {
        txt = Buffer.from(decompress(raw)).toString("utf8");
      } catch {
        return { files: [] };
      }
      const events = txt.split("\n").map((l) => {
        try {
          return JSON.parse(l);
        } catch {
          return null;
        }
      }).filter((e) => !!e);
      return { files: collectSessionFiles(events, void 0), cwd: cwdDir.name };
    }
  }
  return { files: [] };
}
var sessionStreamResource = async (req, res, seg, q, method, host) => {
  if (seg[0] !== "stream" || seg[1] !== "session" || method !== "GET") return false;
  const sessionId = (q.get("session") ?? "").trim();
  if (!sessionId) return false;
  const ctx = host?.ctxProvider?.();
  const runningOf = () => {
    try {
      return ctx?.get("agents")?.get?.(sessionId)?.status === "running";
    } catch {
      return false;
    }
  };
  res.writeHead(200, {
    "content-type": "text/event-stream; charset=utf-8",
    "cache-control": "no-cache, no-transform",
    connection: "keep-alive",
    "x-accel-buffering": "no"
  });
  if (!ctx || !ctx.get?.("sessions") || !ctx.get?.("agents")) {
    writeFrame(res, { type: "status", sessionId, running: runningOf() });
    res.end();
    return true;
  }
  const sessions2 = ctx.get("sessions");
  const agents = ctx.get("agents");
  const agent = agents.get?.(sessionId);
  const liveSession = agent?.session ?? sessions2.get?.(sessionId);
  const cwd = liveSession?.header?.cwd ?? q.get("cwd") ?? void 0;
  const collected = /* @__PURE__ */ new Map();
  const addFiles = (files2) => {
    for (const f of files2) {
      const key = canonicalKey(f);
      if (!collected.has(key)) collected.set(key, f);
    }
  };
  addFiles(collectSessionFiles(liveSession?.events, cwd));
  const files = () => [...collected.values()];
  writeFrame(res, { type: "snapshot", sessionId, cwd, files: files(), running: runningOf() });
  let receivedLive = false;
  let disposed = false;
  let heartbeat = null;
  heartbeat = setInterval(() => {
    try {
      res.write(": ping\n\n");
    } catch {
    }
  }, 15e3);
  const cleanup = () => {
    if (disposed) return;
    disposed = true;
    if (heartbeat) clearInterval(heartbeat);
    if (anyFailedTimer) clearTimeout(anyFailedTimer);
    try {
      offLive?.();
    } catch {
    }
    try {
      res.end();
    } catch {
    }
  };
  req.on("close", cleanup);
  const handler = (session, ev) => {
    if (disposed) return;
    const sid = session?.id ?? session?.header?.id;
    if (sid !== void 0 && sid !== sessionId) return;
    receivedLive = true;
    addFiles(collectSessionFiles([ev], cwd));
    writeFrame(res, { type: "files", sessionId, cwd, files: files(), running: runningOf() });
  };
  let offLive;
  try {
    offLive = ctx.on("session/event", handler);
  } catch {
    offLive = void 0;
  }
  if (typeof offLive !== "function") {
    try {
      offLive = () => ctx.off?.("session/event", handler);
    } catch {
      offLive = void 0;
    }
  }
  let anyFailedTimer = null;
  anyFailedTimer = setTimeout(async () => {
    if (disposed || receivedLive) return;
    const hist = await readTranscriptFiles(sessionId);
    if (disposed) return;
    addFiles(hist.files);
    writeFrame(res, { type: "files", sessionId, cwd: cwd ?? hist.cwd, files: files(), running: runningOf() });
  }, 1e4);
  return true;
};

// src/host/routes/routes-recycle.ts
var recycleResource = async (req, res, seg, _q, method) => {
  if (seg[0] === "recycle-list" && seg.length === 1 && method === "GET") {
    const items = await listRecycleItems();
    return json(res, 200, { ok: true, data: { items } }), true;
  }
  if (seg[0] === "recycle-count" && seg.length === 1 && method === "GET") {
    const count = await recycleCount();
    return json(res, 200, { ok: true, data: { count } }), true;
  }
  if (seg[0] === "recycle-restore" && seg.length === 1 && method === "POST") {
    const body = await readBody(req);
    const fullPath = body?.fullPath;
    if (!fullPath) return json(res, 400, { ok: false, error: "fullPath required" }), true;
    await restoreRecycleItem(fullPath);
    return json(res, 200, { ok: true, data: { restored: true } }), true;
  }
  if (seg[0] === "recycle-delete" && seg.length === 1 && method === "POST") {
    const body = await readBody(req);
    const fullPath = body?.fullPath;
    if (!fullPath) return json(res, 400, { ok: false, error: "fullPath required" }), true;
    await deleteRecycleItem(fullPath);
    return json(res, 200, { ok: true, data: { deleted: true } }), true;
  }
  if (seg[0] === "recycle-empty" && seg.length === 1 && method === "POST") {
    emptyRecycle();
    return json(res, 200, { ok: true, data: { started: true } }), true;
  }
  return false;
};

// src/host/routes/routes-persist.ts
var persistResource = async (req, res, seg, q, method, host) => {
  if (seg[0] === "persist" && seg.length === 1) {
    if (method === "GET") {
      const k = q.get("k")?.trim();
      const data = k ? { [k]: await getPersistKey(k) } : await getAllPersist();
      return json(res, 200, { ok: true, data }), true;
    }
    if (method === "POST") {
      const body = await readBody(req);
      if (!body?.k || body.v === void 0) {
        return json(res, 400, { ok: false, error: "key k and value v required" }), true;
      }
      await setPersistKey(String(body.k), body.v);
      return json(res, 200, { ok: true, data: { k: body.k } }), true;
    }
  }
  return false;
};

// src/host/routes/routes-task-archives.ts
var taskArchiveResource = async (req, res, seg, q, method) => {
  if (seg[0] === "task-archives" && seg.length === 1) {
    if (method === "GET") {
      if (q.get("list") !== null) {
        return json(res, 200, { ok: true, data: { dates: await listTaskArchiveDates() } }), true;
      }
      return json(res, 200, { ok: true, data: { map: await readTaskArchives() } }), true;
    }
    if (method === "POST") {
      const body = await readBody(req);
      if (!body?.map || typeof body.map !== "object") {
        return json(res, 400, { ok: false, error: "map required" }), true;
      }
      await writeTaskArchives(body.map);
      return json(res, 200, { ok: true, data: { ok: true } }), true;
    }
  }
  return false;
};

// src/host/routes/routes.ts
function makeFileWorkbenchRoutes(ctxProvider) {
  const host = { ctxProvider };
  const handler = async (req, res) => {
    const method = (req.method ?? "GET").toUpperCase();
    const pathname = (req.url ?? "").split("?", 1)[0] ?? "";
    const tail = pathname.startsWith(PREFIX) ? pathname.slice(PREFIX.length) : pathname;
    const seg = tail.split("/").filter(Boolean);
    const q = queryOf(req.url);
    try {
      if (await fsResource(req, res, seg, q, method, host)) return;
      if (await gitResource(req, res, seg, q, method, host)) return;
      if (await svnResource(req, res, seg, q, method, host)) return;
      if (await terminalResource(req, res, seg, q, method, host)) return;
      if (await subagentResource(req, res, seg, q, method, host)) return;
      if (await recycleResource(req, res, seg, q, method, host)) return;
      if (await sessionStreamResource(req, res, seg, q, method, host)) return;
      if (await persistResource(req, res, seg, q, method, host)) return;
      if (await taskArchiveResource(req, res, seg, q, method, host)) return;
      return fail(res, new Error(`no route ${method} ${pathname}`));
    } catch (error) {
      return fail(res, error);
    }
  };
  return [
    {
      kind: "prefix",
      path: PREFIX,
      handler
    }
  ];
}

// src/host/updater.ts
import { execFile as execFile5 } from "node:child_process";
import { promisify as promisify3 } from "node:util";
import { cp as cp3, readFile as readFile7, rename as rename3, rm as rm2, mkdir as mkdir6, stat as stat9 } from "node:fs/promises";
import { dirname as dirname8, join as join9 } from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath as fileURLToPath2 } from "node:url";
var execFileP3 = promisify3(execFile5);
var PACKAGE_ROOT = dirname8(dirname8(fileURLToPath2(import.meta.url)));
var DEFAULT_REPO = "https://github.com/master1Sun/dsh-file-workbench-lib.git";
var METADATA_FILES = ["lib", "package.json", "cordis.patch.yml"];
async function readJson(p) {
  try {
    return JSON.parse(await readFile7(p, "utf8"));
  } catch {
    return null;
  }
}
function bare(tag) {
  return tag.replace(/^v/i, "");
}
function semverCompare(a, b) {
  const pa = a.split(".").map((n) => Number.isFinite(Number(n)) ? Number(n) : 0);
  const pb = b.split(".").map((n) => Number.isFinite(Number(n)) ? Number(n) : 0);
  const len = Math.max(pa.length, pb.length);
  for (let i = 0; i < len; i++) {
    const x = pa[i] ?? 0;
    const y = pb[i] ?? 0;
    if (x > y) return 1;
    if (x < y) return -1;
  }
  return 0;
}
async function applyUpdate(repo, rawTag) {
  const staging = join9(tmpdir(), `fw-update-${Date.now()}`);
  await rm2(staging, { recursive: true, force: true });
  await mkdir6(staging, { recursive: true });
  try {
    await execFileP3(
      "git",
      ["clone", "--depth", "1", "--branch", rawTag, "--single-branch", "--", repo, staging],
      { timeout: 12e4, windowsHide: true }
    );
    const pkg = await readJson(join9(staging, "package.json"));
    if (!pkg) throw new Error("\u8FDC\u7AEF\u5305\u7F3A\u5C11 package.json");
    if (bare(String(pkg.version ?? "")) !== bare(rawTag)) {
      throw new Error(`tag(${rawTag}) \u4E0E\u5305\u7248\u672C(${String(pkg.version)})\u4E0D\u7B26`);
    }
    await stat9(join9(staging, "lib"));
    const next = join9(PACKAGE_ROOT, ".fw-update-next");
    const old = join9(PACKAGE_ROOT, ".fw-update-old");
    await rm2(next, { recursive: true, force: true });
    await rm2(old, { recursive: true, force: true });
    await mkdir6(next, { recursive: true });
    await cp3(join9(staging, "lib"), join9(next, "lib"), { recursive: true });
    await cp3(join9(staging, "package.json"), join9(next, "package.json"));
    await cp3(join9(staging, "cordis.patch.yml"), join9(next, "cordis.patch.yml"));
    for (const f of METADATA_FILES) {
      try {
        await rename3(join9(PACKAGE_ROOT, f), join9(old, f));
      } catch {
      }
    }
    try {
      for (const f of METADATA_FILES) {
        await rename3(join9(next, f), join9(PACKAGE_ROOT, f));
      }
      await rm2(next, { recursive: true, force: true }).catch(() => void 0);
    } catch (error) {
      for (const f of METADATA_FILES) {
        await rm2(join9(PACKAGE_ROOT, f), { recursive: true, force: true }).catch(() => void 0);
        try {
          await rename3(join9(old, f), join9(PACKAGE_ROOT, f));
        } catch {
        }
      }
      throw error;
    }
    await rm2(old, { recursive: true, force: true }).catch(() => void 0);
    console.log(`[dsh-file-workbench] \u5DF2\u81EA\u52A8\u66F4\u65B0\u5230 ${rawTag}\uFF0C\u8BF7\u91CD\u542F dsh web \u751F\u6548`);
  } finally {
    await rm2(staging, { recursive: true, force: true }).catch(() => void 0);
  }
}
async function autoUpdate() {
  try {
    const local = await readJson(join9(PACKAGE_ROOT, "package.json"));
    const current = bare(String(local?.version ?? ""));
    if (!current) return;
    const repoRaw = local?.repository?.url;
    const repo = String(repoRaw ?? DEFAULT_REPO).trim().replace(/^(.+?\.git$)/, "$1").replace(/\/+$/, "");
    if (!/^(https?:\/\/|git@)/.test(repo)) return;
    const { stdout } = await execFileP3("git", ["ls-remote", "--tags", repo], { timeout: 15e3, windowsHide: true });
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
    if (semverCompare(latestSem, current) <= 0) return;
    await applyUpdate(repo, latestRaw);
  } catch (error) {
    try {
      console.error("[dsh-file-workbench] self-update skipped:", error.message);
    } catch {
    }
  }
}

// src/host/index.ts
var name = "dsh-file-workbench";
var inject = [];
function apply(ctx) {
  const timer = setTimeout(() => {
    void autoUpdate();
  }, 5e3);
  timer.unref?.();
  ctx.effect(() => () => clearTimeout(timer), "dsh-file-workbench: self-update");
  ctx.inject(["webServer"], (httpCtx) => {
    httpCtx.effect(() => {
      const routes = makeFileWorkbenchRoutes(() => ctx);
      const disposers = routes.map((route) => httpCtx.webServer.register(route));
      return () => {
        for (const dispose of disposers) dispose();
      };
    }, "dsh-file-workbench: routes");
  });
}
export {
  PREFIX,
  apply,
  inject,
  makeFileWorkbenchRoutes,
  name
};
//# sourceMappingURL=index.js.map
