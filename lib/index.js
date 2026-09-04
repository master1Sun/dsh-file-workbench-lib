// src/host/routes-util.ts
import { createReadStream, existsSync as existsSync2, statSync } from "node:fs";
import { basename as basename2, resolve as resolve2 } from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

// src/host/fs-tree.ts
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
    ["download", "\u4E0B\u8F7D", "Downloads"],
    ["documents", "\u6587\u6863", "Documents"],
    ["pictures", "\u56FE\u7247", "Pictures"],
    ["videos", "\u89C6\u9891", "Videos"]
  ];
  for (const [type, name2, dir] of quick) {
    const p = join(home ?? "", dir);
    if (p && existsSync(p)) items.push({ type, name: name2, path: p });
  }
  if (workspaceRoot) items.push({ type: "workspace", name: "\u5DE5\u4F5C\u533A", path: workspaceRoot });
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
var PROTECTED_ROOTS = ["C:\\Windows"];
function isProtectedPath(target) {
  for (const root of PROTECTED_ROOTS) {
    if (isWithin(root, target)) return true;
  }
  return false;
}
async function ensureWsPath(root, target) {
  const absolute = requireAbsolute(target);
  const [realRoot, realTarget] = await Promise.all([resolveRealPath(root, "workspace"), resolveRealPath(absolute, "target")]);
  assertWithinWs(realRoot, realTarget);
  return realTarget;
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

// src/host/root-store.ts
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

// src/host/routes-util.ts
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
    if (!inline) headers["content-disposition"] = `attachment; filename="${name2.replace(/[\\/]/g, "_")}"`;
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

// src/host/routes-fs.ts
import { existsSync as existsSync3, statSync as statSync2 } from "node:fs";
import { cp, mkdir as mkdir3, rename, rm, stat as stat5, writeFile as writeFile3 } from "node:fs/promises";
import { basename as basename5, dirname as dirname4 } from "node:path";
import { homedir as homedir2 } from "node:os";

// src/host/fs-search.ts
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
async function fileContentSnippet(file, needle) {
  try {
    const s = await stat2(file);
    if (!s.isFile() || s.size <= 0 || s.size > CONTENT_MAX_BYTES) return null;
    const buf = await readFile(file);
    const head = buf.subarray(0, Math.min(512, buf.length));
    if (head.includes(0)) return null;
    const text = buf.toString("utf8");
    const idx = text.toLowerCase().indexOf(needle);
    if (idx < 0) return null;
    const lines = text.split(/\r?\n/);
    const hitLine = text.slice(0, idx).split("\n").length - 1;
    const slice = lines.slice(Math.max(0, hitLine - 1), Math.min(lines.length, hitLine + 2));
    const raw = slice.join("\n").trim();
    return raw.length > 200 ? `${raw.slice(0, 200)}\u2026` : raw || "\u2026";
  } catch {
    return null;
  }
}
var normalize = (p) => p.split(sep2).join("/");
async function searchFiles(root, query, opts = {}) {
  const needle = query.trim().toLowerCase();
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
      if (dirent.name.toLowerCase().includes(needle)) {
        matches.push(rel);
        matchedName = true;
        if (matches.length >= maxMatches) {
          truncated = true;
          return;
        }
      }
      if (doContent && !matchedName && dirent.isFile() && !dirent.isSymbolicLink() && contentReads < maxContentReads && matches.length < maxMatches) {
        contentReads += 1;
        const snippet = await fileContentSnippet(join2(dir, dirent.name), needle);
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

// src/host/fs-read.ts
import { basename as basename3, dirname as dirname2, extname } from "node:path";
import { mkdir, readFile as readFile2, stat as stat3, writeFile } from "node:fs/promises";
var MAX_TEXT_SIZE = 4 * 1024 * 1024;
var MAX_IMAGE_SIZE = 16 * 1024 * 1024;
var MAX_DOC_SIZE = 32 * 1024 * 1024;
var MAX_MEDIA_SIZE = 64 * 1024 * 1024;
function languageOf(name2) {
  const e = extname(name2).toLowerCase();
  const map = {
    ".ts": "typescript",
    ".tsx": "tsx",
    ".js": "javascript",
    ".jsx": "jsx",
    ".mjs": "javascript",
    ".cjs": "javascript",
    ".json": "json",
    ".py": "python",
    ".go": "go",
    ".rs": "rust",
    ".java": "java",
    ".c": "c",
    ".h": "c",
    ".cpp": "cpp",
    ".css": "css",
    ".scss": "scss",
    ".html": "html",
    ".xml": "xml",
    ".yml": "yaml",
    ".yaml": "yaml",
    ".toml": "toml",
    ".sh": "shell",
    ".md": "markdown",
    ".sql": "sql"
  };
  return map[e];
}
var IMAGE_EXT2 = /* @__PURE__ */ new Set([".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp", ".bmp", ".ico"]);
var AUDIO_EXT = /* @__PURE__ */ new Set([".mp3", ".wav", ".ogg", ".flac", ".m4a", ".aac", ".wma", ".opus", ".mid", ".midi"]);
var VIDEO_EXT = /* @__PURE__ */ new Set([".mp4", ".webm", ".mov", ".mkv", ".avi", ".m4v", ".ogv", ".mpg", ".mpeg", ".wmv", ".3gp"]);
async function readOpenResult(root, target) {
  const safe = await ensureWsPath(root, target);
  return readResolvedFile(safe, target);
}
async function readArbitrary(target) {
  const safe = requireAbsolute(target);
  return readResolvedFile(safe, target);
}
async function readResolvedFile(safe, displayPath) {
  const s = await stat3(safe).catch((error) => {
    throw new FsError("not-found", `cannot stat "${displayPath}": ${error instanceof Error ? error.message : String(error)}`, 404);
  });
  if (!s.isFile()) throw new FsError("bad-request", `"${displayPath}" is not a file`, 400);
  const name2 = basename3(safe);
  const e = extname(safe).toLowerCase();
  if (e === ".md" || e === ".markdown") {
    return { name: name2, path: safe, kind: "markdown", text: await readText(safe, name2), size: s.size, language: "markdown" };
  }
  if (e === ".html" || e === ".htm") {
    return { name: name2, path: safe, kind: "html", text: await readText(safe, name2), size: s.size, language: "html" };
  }
  if (e === ".csv" || e === ".tsv") {
    const kind = e === ".csv" ? "csv" : "tsv";
    return { name: name2, path: safe, kind, text: await readText(safe, name2), size: s.size, language: kind };
  }
  if (e === ".json" || e === ".jsonc") {
    return { name: name2, path: safe, kind: "json", text: await readText(safe, name2), size: s.size, language: "json" };
  }
  if (IMAGE_EXT2.has(e)) {
    const buffer = await readFile2(safe).catch((error) => {
      throw new FsError("fs-error", `cannot read "${displayPath}": ${error instanceof Error ? error.message : String(error)}`, 400);
    });
    if (buffer.length > MAX_IMAGE_SIZE) throw new FsError("too-large", `image exceeds the ${MAX_IMAGE_SIZE} byte limit`, 400);
    const mime = `image/${e === ".svg" ? "svg+xml" : e === ".jpg" ? "jpeg" : e.slice(1)}`;
    return {
      name: name2,
      path: safe,
      kind: "image",
      imageDataUrl: `data:${mime};base64,${buffer.toString("base64")}`,
      size: buffer.length
    };
  }
  if (e === ".pdf") {
    const buffer = await readFile2(safe).catch((error) => {
      throw new FsError("fs-error", `cannot read "${displayPath}": ${error instanceof Error ? error.message : String(error)}`, 400);
    });
    if (buffer.length > MAX_DOC_SIZE) throw new FsError("too-large", `pdf exceeds the ${MAX_DOC_SIZE} byte limit`, 400);
    return {
      name: name2,
      path: safe,
      kind: "pdf",
      dataUrl: `data:application/pdf;base64,${buffer.toString("base64")}`,
      size: buffer.length
    };
  }
  if (AUDIO_EXT.has(e)) {
    const buffer = await readFile2(safe).catch((error) => {
      throw new FsError("fs-error", `cannot read "${displayPath}": ${error instanceof Error ? error.message : String(error)}`, 400);
    });
    if (buffer.length > MAX_MEDIA_SIZE) return { name: name2, path: safe, kind: "download", size: buffer.length };
    return { name: name2, path: safe, kind: "audio", dataUrl: `data:audio/${e.slice(1)};base64,${buffer.toString("base64")}`, size: buffer.length };
  }
  if (VIDEO_EXT.has(e)) {
    const buffer = await readFile2(safe).catch((error) => {
      throw new FsError("fs-error", `cannot read "${displayPath}": ${error instanceof Error ? error.message : String(error)}`, 400);
    });
    if (buffer.length > MAX_MEDIA_SIZE) return { name: name2, path: safe, kind: "download", size: buffer.length };
    return { name: name2, path: safe, kind: "video", dataUrl: `data:video/${e.slice(1)};base64,${buffer.toString("base64")}`, size: buffer.length };
  }
  try {
    const text = await readText(safe, name2);
    return { name: name2, path: safe, kind: "text", text, size: s.size, language: languageOf(name2) };
  } catch {
    return { name: name2, path: safe, kind: "download", size: s.size };
  }
}
async function readText(safe, name2) {
  const s = await stat3(safe);
  if (s.size > MAX_TEXT_SIZE) throw new FsError("too-large", `file exceeds the ${MAX_TEXT_SIZE} byte text limit`, 400);
  const buf = await readFile2(safe);
  if (containsBinary(buf)) {
    throw new FsError("bad-request", `"${name2}" looks like a binary file`, 400);
  }
  return buf.toString("utf8");
}
function containsBinary(buf) {
  const probe = buf.subarray(0, Math.min(buf.length, 8192));
  let nul = 0;
  for (const b of probe) if (b === 0) nul += 1;
  return nul > probe.length * 0.01;
}
async function saveText(root, target, content) {
  const safe = await ensureWsWritePath(root, target);
  await mkdir(dirname2(safe), { recursive: true });
  await writeFile(safe, content, "utf8");
  return safe;
}

// src/host/fs-zip.ts
import { basename as basename4, dirname as dirname3, join as join3, resolve as resolve3, isAbsolute as isAbsolute2, sep as sep3 } from "node:path";
import { mkdir as mkdir2, opendir as opendir3, readFile as readFile3, stat as stat4, writeFile as writeFile2 } from "node:fs/promises";

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
  var _a2 = hTree(lf, 15), dlt = _a2.t, mlb = _a2.l;
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
    lm = hMap(dlt, mlb, 0), ll = dlt, dm = hMap(ddt, mdb, 0), dl = ddt;
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

// src/host/fs-zip.ts
async function compressTo(target, destZip) {
  const info = await stat4(target).catch((error) => {
    throw new FsError("fs-error", `cannot compress "${target}": ${error instanceof Error ? error.message : String(error)}`, 400);
  });
  const entries = {};
  const rootName = basename4(target);
  async function walk(dir, prefix) {
    const level = await opendir3(dir).catch(() => null);
    if (!level) return;
    for await (const d of level) {
      const full = join3(dir, d.name);
      const rel = join3(prefix, d.name).split(sep3).join("/");
      const st = await stat4(full).catch(() => void 0);
      if (!st) continue;
      if (st.isDirectory()) {
        await walk(full, rel);
      } else {
        entries[rel] = new Uint8Array(await readFile3(full));
      }
    }
  }
  if (info.isFile()) {
    entries[rootName] = new Uint8Array(await readFile3(target));
  } else {
    await walk(target, rootName);
  }
  const data = zipSync(entries);
  await writeFile2(destZip, new Uint8Array(data));
  return destZip;
}
async function extractTo(zipPath, destDir) {
  const buf = new Uint8Array(await readFile3(zipPath).catch((error) => {
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

// src/host/routes-fs.ts
function guardWritable(target) {
  if (isProtectedPath(target)) {
    throw new FsError("forbidden", `path "${target}" is read-only (protected system area)`, 403);
  }
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
    const requested = q.get("path")?.trim() || root || homedir2();
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
  if (seg[0] === "browse" && seg.length === 1 && method === "GET") {
    const target = requireAbsolute(q.get("path")?.trim() || homedir2());
    const listing = await listDirectory(target);
    await attachDetails(listing.entries);
    const parent = parentOf(target);
    return json(res, 200, {
      ok: true,
      data: { path: target, name: rootLabel(target), parent, entries: listing.entries, truncated: listing.truncated, inaccessible: listing.inaccessible }
    }), true;
  }
  if (seg[0] === "preview" && seg.length === 1 && method === "GET") {
    const path = q.get("path")?.trim() ?? "";
    if (!path) return json(res, 400, { ok: false, error: "path required" }), true;
    const data = await readArbitrary(path);
    return json(res, 200, { ok: true, data }), true;
  }
  if (seg[0] === "read" && seg.length === 1 && method === "GET") {
    const path = q.get("path")?.trim() ?? "";
    if (!path) return json(res, 400, { ok: false, error: "path required" }), true;
    const root = getRoot(q.get("key") ?? void 0);
    let data;
    if (root && isWithin(root, path)) {
      try {
        data = await readOpenResult(root, path);
      } catch (error) {
        if (error instanceof FsError && error.status === 403) {
          data = await readArbitrary(path);
        } else {
          throw error;
        }
      }
    } else {
      data = await readArbitrary(path);
    }
    return json(res, 200, { ok: true, data }), true;
  }
  if (seg[0] === "save" && seg.length === 1 && method === "POST") {
    const body = await readBody(req);
    if (!body?.path || typeof body?.content !== "string") {
      return json(res, 400, { ok: false, error: "path and content required" }), true;
    }
    const abs = requireAbsolute(body.path);
    guardWritable(abs);
    const root = getRoot(body?.key);
    let saved;
    if (root && isWithin(root, abs)) {
      saved = await saveText(root, body.path, body.content);
    } else {
      const safe = await resolveWritePath(abs);
      await mkdir3(dirname4(safe), { recursive: true });
      await writeFile3(safe, body.content, "utf8");
      saved = safe;
    }
    return json(res, 200, { ok: true, data: { path: saved } }), true;
  }
  if (seg[0] === "search" && seg.length === 1 && method === "GET") {
    const qText = q.get("q") ?? "";
    const scoped = q.get("path")?.trim();
    const base = scoped ? requireAbsolute(scoped) : getRoot(q.get("key") ?? void 0) ?? homedir2();
    const limit = Math.max(1, Math.min(2e3, Number(q.get("limit") ?? 200) || 200));
    const outcome = await searchFiles(base, qText, { maxMatches: limit });
    return json(res, 200, { ok: true, data: { ...outcome, scope: base } }), true;
  }
  if (seg[0] === "mkdir" && seg.length === 1 && method === "POST") {
    const body = await readBody(req);
    if (!body?.path) return json(res, 400, { ok: false, error: "path required" }), true;
    guardWritable(requireAbsolute(body.path));
    const safe = await resolveWritePath(body.path, "path");
    await mkdir3(safe, { recursive: true });
    return json(res, 200, { ok: true, data: { path: safe } }), true;
  }
  if (seg[0] === "rename" && seg.length === 1 && method === "POST") {
    const body = await readBody(req);
    if (!body?.from || !body?.to) return json(res, 400, { ok: false, error: "from and to required" }), true;
    guardWritable(requireAbsolute(body.from));
    guardWritable(requireAbsolute(body.to));
    const from = await resolveExisting(body.from, "from");
    const to = await resolveWritePath(body.to, "to");
    await rename(from, to);
    return json(res, 200, { ok: true, data: { path: to } }), true;
  }
  if (seg[0] === "remove" && seg.length === 1 && method === "DELETE") {
    const raw = q.get("path")?.trim() ?? "";
    if (!raw) return json(res, 400, { ok: false, error: "path required" }), true;
    guardWritable(requireAbsolute(raw));
    const target = await resolveExisting(raw, "path");
    await rm(target, { recursive: true, force: true });
    return json(res, 200, { ok: true, data: { path: target } }), true;
  }
  if (seg[0] === "touch" && seg.length === 1 && method === "POST") {
    const body = await readBody(req);
    if (!body?.path) return json(res, 400, { ok: false, error: "path required" }), true;
    guardWritable(requireAbsolute(body.path));
    const safe = await resolveWritePath(body.path, "path");
    await writeFile3(safe, "", "utf8");
    return json(res, 200, { ok: true, data: { path: safe } }), true;
  }
  if (seg[0] === "copy" && seg.length === 1 && method === "POST") {
    const body = await readBody(req);
    if (!body?.src || !body?.destDir) return json(res, 400, { ok: false, error: "src and destDir required" }), true;
    guardWritable(requireAbsolute(body.destDir));
    const src = await resolveExisting(body.src, "src");
    const destDir = await resolveWritePath(body.destDir, "destDir");
    await mkdir3(destDir, { recursive: true });
    const dest = await uniquePath(destDir, basename5(src));
    await cp(src, dest, { recursive: true, force: false, errorOnExist: false });
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
    if (!existsSync3(safe) || !statSync2(safe).isFile()) return json(res, 404, { ok: false, error: "not found" }), true;
    await streamFile(res, safe, false);
    return true;
  }
  if (seg[0] === "_read-image" && seg.length === 1 && method === "GET") {
    const target = q.get("path")?.trim();
    if (!target) return json(res, 400, { ok: false, error: "path required" }), true;
    const safe = requireAbsolute(target);
    if (!existsSync3(safe) || !statSync2(safe).isFile()) return json(res, 404, { ok: false, error: "not found" }), true;
    const ext = safe.slice(safe.lastIndexOf(".")).toLowerCase();
    if (!IMAGE_EXT.has(ext)) return json(res, 400, { ok: false, error: "not an image file" }), true;
    await streamFile(res, safe, true);
    return true;
  }
  if (seg[0] === "compress" && seg.length === 1 && method === "POST") {
    const body = await readBody(req);
    if (!body?.path) return json(res, 400, { ok: false, error: "path required" }), true;
    const src = await resolveExisting(body.path, "path");
    const to = body?.to?.trim() ? await resolveWritePath(body.to, "to") : await uniquePath(dirname4(src), `${basename5(src)}.zip`);
    guardWritable(to);
    const dest = await compressTo(src, to);
    return json(res, 200, { ok: true, data: { path: dest } }), true;
  }
  if (seg[0] === "extract" && seg.length === 1 && method === "POST") {
    const body = await readBody(req);
    if (!body?.zipPath) return json(res, 400, { ok: false, error: "zipPath required" }), true;
    const zip = await resolveExisting(body.zipPath, "zipPath");
    const destDir = body?.destDir?.trim() ? await resolveWritePath(body.destDir, "destDir") : dirname4(zip);
    guardWritable(destDir);
    const count = await extractTo(zip, destDir);
    return json(res, 200, { ok: true, data: { destDir, count } }), true;
  }
  return false;
};

// src/host/routes-git.ts
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { stat as stat6 } from "node:fs/promises";
import { dirname as dirname5, join as join4, posix } from "node:path";
var execFileP = promisify(execFile);
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
      await stat6(join4(cur, ".git"));
      return cur;
    } catch {
    }
    const parent = dirname5(cur);
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

// src/host/routes-terminal.ts
import { spawn as spawn2 } from "node:child_process";
import { stat as stat7 } from "node:fs/promises";
import { resolve as resolve4 } from "node:path";
import { homedir as homedir3 } from "node:os";
var sessionCwd = /* @__PURE__ */ new Map();
var sessionProc = /* @__PURE__ */ new Map();
function killTree(child) {
  if (process.platform === "win32" && child.pid) {
    spawn2("taskkill", ["/pid", String(child.pid), "/t", "/f"], { stdio: "ignore", windowsHide: true });
  } else {
    child.kill("SIGTERM");
  }
}
var DANGEROUS_COMMAND_MARKERS = [
  "rm -rf",
  "rm -fr",
  "rm -r -f",
  "rm -f -r",
  "rm --recursive --force",
  "rm --force --recursive",
  "rd /s",
  "rmdir /s",
  "del /s",
  "deltree",
  "remove-item -recurse",
  "remove-item -r",
  "remove-item -force",
  "clear-recyclebin -force",
  "format c:",
  "format d:",
  "format c /",
  "mkfs",
  "diskpart",
  "shutdown",
  "reboot",
  "poweroff",
  " halt ",
  "reg delete",
  "cipher /w"
];
function isDangerousCommand(command) {
  const lower = command.toLowerCase();
  return DANGEROUS_COMMAND_MARKERS.some((marker) => lower.includes(marker));
}
function runShell(command, cwd, session, opts = {}) {
  return new Promise((resolvePromise) => {
    const timeoutMs = opts.timeout ?? 6e4;
    const isWin = process.platform === "win32";
    const shell = opts.shell === "powershell" ? "powershell" : "cmd";
    let child;
    if (!isWin) {
      child = spawn2("sh", ["-c", command], { cwd, stdio: ["ignore", "pipe", "pipe"], env: process.env });
    } else if (shell === "powershell") {
      const psFinal = `$OutputEncoding=[Console]::OutputEncoding=[Text.Encoding]::UTF8; ${command}`;
      child = spawn2("powershell.exe", ["-NoProfile", "-NonInteractive", "-Command", psFinal], {
        cwd,
        windowsHide: true,
        stdio: ["ignore", "pipe", "pipe"],
        env: process.env
      });
    } else {
      const cmdFinal = `chcp 65001>nul && ${command}`;
      child = spawn2("cmd.exe", ["/c", cmdFinal], { cwd, windowsHide: true, stdio: ["ignore", "pipe", "pipe"], env: process.env });
    }
    sessionProc.set(session, child);
    const stdoutBufs = [];
    const stderrBufs = [];
    let settled = false;
    const settle = (result) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      if (sessionProc.get(session) === child) sessionProc.delete(session);
      resolvePromise(result);
    };
    const timer = setTimeout(() => {
      if (settled) return;
      killTree(child);
      settle({ code: -1, stdout: Buffer.concat(stdoutBufs).toString("utf8"), stderr: Buffer.concat(stderrBufs).toString("utf8"), timedOut: true });
    }, Math.max(1e3, Math.min(timeoutMs, 6e5)));
    child.stdout?.on("data", (d) => {
      stdoutBufs.push(d);
    });
    child.stderr?.on("data", (d) => {
      stderrBufs.push(d);
    });
    child.on("error", (err2) => {
      settle({ code: -1, stdout: Buffer.concat(stdoutBufs).toString("utf8"), stderr: Buffer.concat(stderrBufs).toString("utf8") || err2.message });
    });
    child.on("close", (code) => {
      settle({ code: code ?? -1, stdout: Buffer.concat(stdoutBufs).toString("utf8"), stderr: Buffer.concat(stderrBufs).toString("utf8") });
    });
  });
}
var terminalResource = async (req, res, seg, _q, method, host) => {
  if (seg[0] === "exec" && seg.length === 1 && method === "POST") {
    const body = await readBody(req);
    const command = (body?.command ?? "").trim();
    if (!command) return json(res, 400, { ok: false, error: "command required" }), true;
    const session = body?.session?.trim() || "default";
    const shell = body?.shell === "powershell" ? "powershell" : "cmd";
    let cwd = body?.cwd?.trim() || sessionCwd.get(session) || getRoot(body?.key) || homedir3();
    cwd = requireAbsolute(cwd);
    if (isProtectedPath(cwd)) {
      throw new FsError("forbidden", "command rejected: working directory is a protected read-only area", 403);
    }
    const cdMatch = command.match(/^(?:cd|chdir)\b(.*)$/i);
    if (cdMatch) {
      let target = (cdMatch[1] ?? "").trim();
      target = target.replace(/^\/d\s+/i, "");
      const next = target ? resolve4(cwd, target) : homedir3();
      if (isProtectedPath(next)) {
        return json(res, 200, { ok: true, data: { code: 1, stdout: "", stderr: `cd: "${target}": access denied (protected read-only area)`, cwd } }), true;
      }
      const st = await stat7(next).catch(() => null);
      if (!st || !st.isDirectory()) {
        return json(res, 200, { ok: true, data: { code: 1, stdout: "", stderr: `cd: "${target}": no such directory`, cwd } }), true;
      }
      sessionCwd.set(session, next);
      return json(res, 200, { ok: true, data: { code: 0, stdout: "", stderr: "", cwd: next } }), true;
    }
    if (isDangerousCommand(command)) {
      throw new FsError("forbidden", `command rejected: potentially destructive (recursive delete / format / shutdown)`, 403);
    }
    const prev = sessionProc.get(session);
    if (prev) killTree(prev);
    const result = await runShell(command, cwd, session, { shell, timeout: body?.timeout });
    return json(res, 200, { ok: true, data: { ...result, cwd } }), true;
  }
  if (seg[0] === "exec-kill" && seg.length === 1 && method === "POST") {
    const body = await readBody(req);
    const session = body?.session?.trim() || "default";
    const child = sessionProc.get(session);
    if (child) {
      killTree(child);
      return json(res, 200, { ok: true, data: { killed: true } }), true;
    }
    return json(res, 200, { ok: true, data: { killed: false } }), true;
  }
  return false;
};

// src/host/subagent.ts
import { readFile as readFile4, stat as stat8 } from "node:fs/promises";
import { basename as basename6 } from "node:path";
var MAX_CONTEXT_CHARS = 16e3;
async function readFileContext(path, isDir) {
  if (isDir) return void 0;
  let buf;
  try {
    const st = await stat8(path);
    if (!st.isFile()) return void 0;
    if (st.size > 4 * 1024 * 1024) return `[${basename6(path)}] \u6587\u4EF6\u8FC7\u5927\uFF08${st.size} bytes\uFF09\uFF0C\u672A\u8BFB\u53D6\u6B63\u6587\u3002`;
    buf = await readFile4(path);
  } catch {
    return `[${basename6(path)}] \u65E0\u6CD5\u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9\u3002`;
  }
  let text = buf.toString("utf8");
  if (text.length > MAX_CONTEXT_CHARS) {
    text = text.slice(0, MAX_CONTEXT_CHARS) + `
\u2026[\u5185\u5BB9\u5DF2\u622A\u65AD\uFF0C\u539F\u6587\u4EF6\u5171 ${buf.length} bytes]\u3002`;
  }
  return text;
}
function buildDelegatePrompt(path, isDir, turns, content) {
  const kind = isDir ? "\u6587\u4EF6\u5939" : "\u6587\u4EF6";
  const lines = [`\u5F53\u524D\u5904\u7406\u76EE\u6807${kind}\uFF1A${path}`, `\u4F60\u662F\u4E00\u4E2A\u88AB\u6587\u4EF6\u5DE5\u4F5C\u53F0\u6D3E\u6765\u7684\u5B50 agent\uFF0C\u8D1F\u8D23\u5C31\u5730\u5904\u7406\u8FD9\u4E2A\u76EE\u6807\u3002`];
  if (content !== void 0) {
    lines.push(
      `
\u76EE\u6807${kind}\u7684\u5F53\u524D\u6B63\u6587\u5185\u5BB9\uFF08\u53EA\u8BFB\u53C2\u8003\u5FEB\u7167\uFF0C\u8BF7\u81EA\u884C\u8BFB\u53D6/\u4FEE\u6539\u76EE\u6807\u5B8C\u6210\u5DE5\u4F5C\uFF09\uFF1A
\`\`\`
${content}
\`\`\``
    );
  }
  if (isDir) {
    lines.push(`
\u6CE8\uFF1A\u76EE\u6807\u662F\u6587\u4EF6\u5939\u3002\u4F60\u53EF\u4EE5\u5217\u76EE\u5F55\u3001\u8BFB\u53D6\u5176\u4E2D\u7684\u6587\u4EF6\uFF0C\u5E76\u5728\u9002\u5F53\u60C5\u51B5\u4E0B\u521B\u5EFA/\u4FEE\u6539\u6587\u4EF6\u3002\u5DE5\u4F5C\u76EE\u5F55\u5373\u4E3A\u8BE5\u6587\u4EF6\u5939\u3002`);
  }
  lines.push(`
\u4EE5\u4E0B\u662F\u4E0E\u7528\u6237\u7684\u5BF9\u8BDD\u8BB0\u5F55\uFF08\u6700\u65B0\u6D88\u606F\u5728\u6700\u540E\uFF09\uFF1A`);
  const body = turns.map((turn, i) => `${turn.role === "user" ? "\u7528\u6237" : "\u5B50 agent"}#${i + 1}\uFF1A
${turn.content}`).join("\n\n");
  lines.push(`--- \u5BF9\u8BDD\u5F00\u59CB ---
${body}
--- \u5BF9\u8BDD\u7ED3\u675F ---`);
  lines.push(
    `
\u8BF7\u56DE\u5E94\u7528\u6237\u6700\u65B0\u7684\u90A3\u6761\u6D88\u606F\u3002\u5982\u9700\u6539\u52A8\u4EE3\u7801/\u6587\u4EF6\uFF0C\u8BF7\u5B9E\u9645\u843D\u76D8\u540E\u518D\u603B\u7ED3\u6539\u52A8\u4E0E\u9A8C\u8BC1\u7ED3\u679C\uFF1B\u4E0D\u8981\u7F16\u9020\u672A\u6267\u884C\u7684\u64CD\u4F5C\u3002`
  );
  return lines.join("\n");
}
function describeError(error) {
  if (!(error instanceof Error)) return String(error);
  const stack = error.stack && error.stack.replace(/^\S+\s*/, "") ? `
${error.stack}` : "";
  return `${error.message}${stack}`;
}
async function delegateToSubagent(ctx, opts) {
  let runtime;
  try {
    runtime = ctx.get?.("subagents");
  } catch {
  }
  if (!runtime || typeof runtime.start !== "function") {
    return { output: "", error: "subagents \u670D\u52A1\u4E0D\u53EF\u7528\uFF1A\u5BBF\u4E3B\u672A\u542F\u7528 dsh-subagent\uFF08@deepseek-ai/dsh-subagent \u672A\u52A0\u8F7D\uFF09\u3002" };
  }
  const firstTurn = opts.turns.length <= 1;
  const content = firstTurn ? await readFileContext(opts.path, opts.isDir) : void 0;
  const prompt = buildDelegatePrompt(opts.path, opts.isDir, opts.turns, content);
  const parent = resolveLiveParent(ctx, opts.sessionId);
  if (!parent) {
    return {
      output: "",
      error: "\u65E0\u6CD5\u89E3\u6790\u5F53\u524D\u4F1A\u8BDD\u7684\u201C\u6D3B\u201D\u5B50 agent \u7236\u7EA7\uFF1A\u8BF7\u5728\u5148\u8FDB\u5165\u4E00\u6B21\u804A\u5929\u4F1A\u8BDD\u540E\u91CD\u8BD5\uFF08subagents \u7684 fork \u9700\u8981\u4EE5\u5F53\u524D\u4F1A\u8BDD agent \u4E3A\u7236\uFF09"
    };
  }
  const request = {
    prompt: [{ type: "text", text: prompt }],
    label: `workbench:${basename6(opts.path)}`,
    maxDepth: 3,
    signal: new AbortController().signal,
    parent
  };
  let run;
  try {
    run = await runtime.start("fork", request);
  } catch (error) {
    return { output: "", error: `\u5B50 agent \u59D4\u6D3E\u5931\u8D25\uFF1A${describeError(error)}` };
  }
  try {
    const result = await run.result;
    const output = finalOutputText(result);
    const via = output ? { output } : describeEmptyOutput(result);
    const tokens = collectTokenUsage(run);
    return {
      runId: run.id,
      output: via.output,
      error: via.error,
      stopReason: result?.stopReason,
      diagnostic: result?.diagnostic,
      tokens
    };
  } catch (error) {
    return { output: "", error: `\u5B50 agent \u8FD0\u884C\u5931\u8D25\uFF1A${describeError(error)}` };
  } finally {
    try {
      await run.dispose?.();
    } catch {
    }
  }
}
function finalOutputText(result) {
  const pick = (chunk, acc2) => {
    if (chunk === void 0 || chunk === null) return;
    if (typeof chunk === "string") {
      acc2.push(chunk);
      return;
    }
    if (Array.isArray(chunk)) {
      for (const item of chunk) pick(item, acc2);
      return;
    }
    if (typeof chunk === "object") {
      const obj = chunk;
      if (obj.type === "text" && typeof obj.text === "string") acc2.push(obj.text);
      else acc2.push(JSON.stringify(chunk, null, 2));
      return;
    }
    acc2.push(String(chunk));
  };
  const acc = [];
  pick(result?.lastAssistantMessage, acc);
  if (acc.length === 0) pick(result?.output, acc);
  return acc.join("\n").trim();
}
function describeEmptyOutput(result) {
  const stop = result?.stopReason;
  if (stop === "completed" || !stop) {
    return { output: "(\u5B50 agent \u5DF2\u5B8C\u6210\u5904\u7406\uFF0C\u4F46\u672A\u8FD4\u56DE\u6587\u5B57\u5185\u5BB9)" };
  }
  const detail = result?.diagnostic ? `\uFF1B\u8BCA\u65AD\uFF1A${result.diagnostic}` : "";
  return { output: "", error: `\u5B50 agent \u8FD0\u884C\u7EC8\u6B62\u4E14\u672A\u4EA7\u51FA\u5185\u5BB9\uFF08\u539F\u56E0\uFF1A${stop}${detail}\uFF09` };
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
function usageTokens(usage) {
  if (!usage || typeof usage !== "object") return 0;
  const u = usage;
  const num = (v) => typeof v === "number" && Number.isFinite(v) && v > 0 ? Math.round(v) : 0;
  const input = num(u.prompt_tokens) + num(u.input_tokens) || num(u.inputTokens) || num(u.promptTokens);
  const output = num(u.completion_tokens) || num(u.output_tokens) || num(u.outputTokens) || num(u.completionTokens);
  const total = num(u.total_tokens) || num(u.totalTokens) || input + output;
  return total;
}
function collectTokenUsage(run) {
  try {
    const child = run.localAgent;
    const events = child?.session?.events;
    if (!Array.isArray(events)) return void 0;
    let sum = 0;
    let seen = 0;
    for (const e of events) {
      if (e?.type === "assistant/message" && e.data) {
        const t = usageTokens(e.data.usage);
        if (t > 0) {
          sum += t;
          seen++;
        }
      }
    }
    return seen > 0 ? sum : void 0;
  } catch {
    return void 0;
  }
}

// src/host/subagent-store.ts
import { readFile as readFile5, writeFile as writeFile4, mkdir as mkdir4, unlink } from "node:fs/promises";
import { join as join5 } from "node:path";
import { homedir as homedir4 } from "node:os";
function chatDir() {
  const dshHome = process.env.DSH_HOME || join5(homedir4(), ".dsh");
  return join5(dshHome, "fileworkbench", "subagent-chat");
}
function safeId(sessionId) {
  const cleaned = sessionId.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 96);
  return cleaned || "default";
}
function normalizeEntry(e) {
  if (!e || typeof e !== "object") return void 0;
  const o = e;
  const turns = Array.isArray(o.turns) ? o.turns.filter(
    (t) => !!t && typeof t === "object" && (t.role === "user" || t.role === "assistant") && typeof t.content === "string"
  ) : [];
  return {
    id: typeof o.id === "string" && o.id ? o.id : typeof o.path === "string" ? o.path : "anon",
    name: typeof o.name === "string" && o.name ? o.name : typeof o.path === "string" ? o.path : "\u5B50\u4EE3\u7406",
    path: typeof o.path === "string" ? o.path : "",
    isDir: o.isDir === true,
    turns,
    createdAt: typeof o.createdAt === "number" ? o.createdAt : Date.now(),
    updatedAt: typeof o.updatedAt === "number" ? o.updatedAt : Date.now()
  };
}
async function getSessionSubagents(sessionId) {
  const file = join5(chatDir(), `${safeId(sessionId)}.json`);
  try {
    const parsed = JSON.parse(await readFile5(file, "utf8"));
    if (Array.isArray(parsed.entries)) {
      return { entries: parsed.entries.map(normalizeEntry).filter((e) => !!e) };
    }
    if (Array.isArray(parsed.turns)) {
      const legacy = {
        id: typeof parsed.path === "string" ? parsed.path : "legacy",
        name: typeof parsed.path === "string" ? parsed.path : "\u5B50\u4EE3\u7406",
        path: typeof parsed.path === "string" ? parsed.path : "",
        isDir: parsed.isDir === true,
        turns: parsed.turns.filter(
          (t) => !!t && typeof t === "object" && (t.role === "user" || t.role === "assistant") && typeof t.content === "string"
        ),
        createdAt: Date.now(),
        updatedAt: Date.now()
      };
      return { entries: [legacy] };
    }
    return { entries: [] };
  } catch {
    return { entries: [] };
  }
}
async function setSessionSubagents(sessionId, data) {
  const file = join5(chatDir(), `${safeId(sessionId)}.json`);
  if (Array.isArray(data.entries) && data.entries.length === 0) {
    await mkdir4(chatDir(), { recursive: true });
    try {
      await unlink(file);
    } catch {
    }
    return;
  }
  await mkdir4(chatDir(), { recursive: true });
  await writeFile4(file, JSON.stringify({ entries: data.entries }, null, 2), "utf8");
}

// src/host/routes-subagent.ts
var subagentResource = async (req, res, seg, _q, method, host) => {
  if (seg[0] === "subagent" && seg[1] === "delegate" && method === "POST") {
    const body = await readBody(req);
    const path = typeof body?.path === "string" ? body.path.trim() : "";
    if (!path) return json(res, 400, { ok: false, error: "path required" }), true;
    const turnsRaw = Array.isArray(body?.turns) ? body.turns : [];
    const turns = turnsRaw.map((t) => typeof t === "object" && t ? t : null).filter(
      (t) => !!t && (t.role === "user" || t.role === "assistant") && typeof t.content === "string"
    );
    if (turns.length === 0) return json(res, 400, { ok: false, error: "at least one turn required" }), true;
    if (!host?.ctxProvider) return json(res, 500, { ok: false, error: "subagent service context unavailable" }), true;
    const data = await delegateToSubagent(host.ctxProvider(), {
      path,
      isDir: body?.isDir === true,
      turns,
      sessionId: typeof body?.session === "string" && body.session ? body.session : void 0
    });
    return json(res, 200, { ok: true, data }), true;
  }
  if (seg[0] === "subagent" && seg[1] === "list" && method === "GET") {
    const session = String(queryOf(req.url).get("session") ?? "").trim();
    if (!session) return json(res, 400, { ok: false, error: "session required" }), true;
    let count = null;
    try {
      if (host?.ctxProvider) {
        const runtime = host.ctxProvider().get?.("subagents");
        if (runtime && typeof runtime.listChildren === "function") {
          const children = await runtime.listChildren(session);
          count = children.filter((c) => c?.kind === "child").length;
        }
      }
    } catch {
    }
    return json(res, 200, { ok: true, data: { count } }), true;
  }
  if (seg[0] === "subagent" && seg[1] === "chat" && method === "GET") {
    const session = String(queryOf(req.url).get("session") ?? "").trim();
    if (!session) return json(res, 200, { ok: true, data: { entries: [] } }), true;
    const data = await getSessionSubagents(session);
    return json(res, 200, { ok: true, data }), true;
  }
  if (seg[0] === "subagent" && seg[1] === "chat" && method === "POST") {
    const body = await readBody(req);
    const session = typeof body?.session === "string" && body.session ? body.session : "";
    if (!session) return json(res, 200, { ok: true, data: null }), true;
    const entries = Array.isArray(body?.entries) ? body.entries : [];
    await setSessionSubagents(session, { entries });
    return json(res, 200, { ok: true, data: null }), true;
  }
  return false;
};

// src/host/workbench-store.ts
import { readFile as readFile6, writeFile as writeFile5, mkdir as mkdir5 } from "node:fs/promises";
import { join as join6 } from "node:path";
import { homedir as homedir5 } from "node:os";
var PERSIST_KEYS = ["prefs", "favorites", "recent", "layout", "scrolls", "tabs", "aiWin", "termWin"];
function stateDir() {
  const dshHome = process.env.DSH_HOME || join6(homedir5(), ".dsh");
  return join6(dshHome, "fileworkbench");
}
function fileFor(key) {
  return join6(stateDir(), `${key}.json`);
}
function isPersistKey(key) {
  return PERSIST_KEYS.includes(key);
}
async function getPersistKey(key) {
  if (!isPersistKey(key)) return void 0;
  try {
    return JSON.parse(await readFile6(fileFor(key), "utf8"));
  } catch {
    return void 0;
  }
}
async function setPersistKey(key, value) {
  if (!isPersistKey(key)) {
    throw new Error(`unknown persist key: ${key}`);
  }
  await mkdir5(stateDir(), { recursive: true });
  await writeFile5(fileFor(key), JSON.stringify(value ?? null), "utf8");
}
async function getAllPersist() {
  const out = {};
  for (const k of PERSIST_KEYS) {
    const v = await getPersistKey(k);
    if (v !== void 0) out[k] = v;
  }
  return out;
}

// src/host/routes-persist.ts
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

// src/host/routes.ts
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
      if (await terminalResource(req, res, seg, q, method, host)) return;
      if (await subagentResource(req, res, seg, q, method, host)) return;
      if (await persistResource(req, res, seg, q, method, host)) return;
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
import { execFile as execFile2 } from "node:child_process";
import { promisify as promisify2 } from "node:util";
import { cp as cp2, readFile as readFile7, rename as rename2, rm as rm2, mkdir as mkdir6, stat as stat9 } from "node:fs/promises";
import { dirname as dirname6, join as join7 } from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath as fileURLToPath2 } from "node:url";
var execFileP2 = promisify2(execFile2);
var PACKAGE_ROOT = dirname6(dirname6(fileURLToPath2(import.meta.url)));
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
  const staging = join7(tmpdir(), `fw-update-${Date.now()}`);
  await rm2(staging, { recursive: true, force: true });
  await mkdir6(staging, { recursive: true });
  try {
    await execFileP2(
      "git",
      ["clone", "--depth", "1", "--branch", rawTag, "--single-branch", "--", repo, staging],
      { timeout: 12e4, windowsHide: true }
    );
    const pkg = await readJson(join7(staging, "package.json"));
    if (!pkg) throw new Error("\u8FDC\u7AEF\u5305\u7F3A\u5C11 package.json");
    if (bare(String(pkg.version ?? "")) !== bare(rawTag)) {
      throw new Error(`tag(${rawTag}) \u4E0E\u5305\u7248\u672C(${String(pkg.version)})\u4E0D\u7B26`);
    }
    await stat9(join7(staging, "lib"));
    const next = join7(PACKAGE_ROOT, ".fw-update-next");
    const old = join7(PACKAGE_ROOT, ".fw-update-old");
    await rm2(next, { recursive: true, force: true });
    await rm2(old, { recursive: true, force: true });
    await mkdir6(next, { recursive: true });
    await cp2(join7(staging, "lib"), join7(next, "lib"), { recursive: true });
    await cp2(join7(staging, "package.json"), join7(next, "package.json"));
    await cp2(join7(staging, "cordis.patch.yml"), join7(next, "cordis.patch.yml"));
    for (const f of METADATA_FILES) {
      try {
        await rename2(join7(PACKAGE_ROOT, f), join7(old, f));
      } catch {
      }
    }
    try {
      for (const f of METADATA_FILES) {
        await rename2(join7(next, f), join7(PACKAGE_ROOT, f));
      }
      await rm2(next, { recursive: true, force: true }).catch(() => void 0);
    } catch (error) {
      for (const f of METADATA_FILES) {
        await rm2(join7(PACKAGE_ROOT, f), { recursive: true, force: true }).catch(() => void 0);
        try {
          await rename2(join7(old, f), join7(PACKAGE_ROOT, f));
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
    const local = await readJson(join7(PACKAGE_ROOT, "package.json"));
    const current = bare(String(local?.version ?? ""));
    if (!current) return;
    const repoRaw = local?.repository?.url;
    const repo = String(repoRaw ?? DEFAULT_REPO).trim().replace(/^(.+?\.git$)/, "$1").replace(/\/+$/, "");
    if (!/^(https?:\/\/|git@)/.test(repo)) return;
    const { stdout } = await execFileP2("git", ["ls-remote", "--tags", repo], { timeout: 15e3, windowsHide: true });
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
