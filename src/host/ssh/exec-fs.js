/*
 * Vendored from dsh-ssh (MIT License, Copyright 2026 dsh-ssh).
 * Source: https://github.com/dsh-ssh/dsh-ssh (packages/dsh-ssh/src/ssh-core.js, exec-fs.js)
 * Only the SSH transport fragments are reused here; this plugin does NOT depend on the
 * dsh-ssh package. Retained under MIT: this notice must accompany the code.
 */
// @dsh-ssh/dsh-ssh — TRAMP-style exec+base64 file-access fallback layer.
// When the remote sshd has the SFTP subsystem disabled, every ssh2 SFTP file
// operation (the sftp-backed parts of read/write/edit/read_image/glob/grep, and
// remote-jobs log pulls) would fail. This layer implements minimal file-access
// semantics aligned with SftpWrapper using only what sshd always provides — the
// exec channel plus shell/coreutils (test/stat/find/mkdir/mv/rm, base64/dd) —
// keeping the remote install-free.
//
// Semantics aligned with SftpWrapper (see ssh-core.js) so upper layers can swap
// fs() without changing logic:
//   stat(path)   -> undefined (missing) | { type:'file'|'directory'|'other', size, mtime }
//   readBytes(path) -> Buffer (throws SshError when missing); binary-safe, large
//                      files chunked (dd iflag=skip_bytes,count_bytes)
//   readText(path)  -> string
//   writeFileAtomic(path, data) -> void (base64-chunked temp write + mv -f atomic
//                                   publish; temp cleaned up on failure)
//   listDir(path) -> [{ name, type:'dir'|'file'|'link'|'other', size, mtime }]
//   unlink / rmdir / mkdir / rename
//
// Parsing is locale-independent throughout: stat uses test -d/-f + stat -c
// '%s'/'%Y' (machine-readable, no human ls parsing); readdir uses find -printf;
// binaries are uniform base64; nothing extra is required on the remote.
//
// Documented limitations: readdir splits each line by '\t', so names containing
// tabs/newlines are skipped (rare); the chunk size bounds stdout/memory of a
// single exec.

import { SshError, shellQuoteSingle } from './ssh-core.js';

const DEFAULT_TIMEOUT_MS = 30_000;
// Read chunk (source bytes): the command is tiny and base64 returns on stdout,
// bounded only by the exec buffer, so a large value is fine.
export const DEFAULT_READ_CHUNK_BYTES = 256 * 1024;
// Write chunk (source bytes): base64 is sent as a command-line argument, and the
// exec command string has a hard cap (~130-200KB: 131072 chars already defeated
// the shell, 262144 exec-open was rejected, 349524 dropped the connection). So
// write chunks must be small: 48KB source -> 65536 chars of base64 plus command
// overhead sits safely inside. SFTP being disabled is a rare fallback; a few
// extra exec rounds are acceptable.
export const DEFAULT_WRITE_CHUNK_BYTES = 48 * 1024;

export class ExecFs {
  constructor(conn, opts = {}) {
    this.conn = conn;
    this.kind = 'exec'; // explicit marker: exec fallback mode (for tests/ops introspection)
    this.timeoutMs = opts.timeoutMs ?? DEFAULT_TIMEOUT_MS;
    this.readChunkBytes = opts.readChunkBytes ?? opts.chunkBytes ?? DEFAULT_READ_CHUNK_BYTES;
    this.writeChunkBytes = opts.writeChunkBytes ?? DEFAULT_WRITE_CHUNK_BYTES;
    this.stagePrefix = opts.stagePrefix ?? 'execfs';
  }

  _err(stage, hint, message) {
    return new SshError({
      hostId: this.conn.hostId,
      stage: this.stagePrefix + '-' + stage,
      message: (hint ? hint + ': ' : '') + message,
    });
  }

  // Run one remote command and judge failure; a non-zero exit throws SshError (stage execfs-<stage>).
  async _exec(cmd, stage, hint) {
    const r = await this.conn.exec(cmd, { timeoutMs: this.timeoutMs });
    if (r.code !== 0) {
      const tail = (r.stderr || r.stdout || '').trim().split('\n').slice(-3).join('\n');
      throw this._err(stage, hint, 'exit ' + r.code + (tail ? ': ' + tail : ''));
    }
    return r;
  }

  // Existence + type + size + mtime, all machine-readable (test/stat -c), no human output parsing.
  // Missing -> undefined; present -> { type, size, mtime }.
  async stat(p) {
    const q = shellQuoteSingle(p);
    const cmd = '( test -e ' + q + ' || { printf "MISSING\n"; exit 0; };'
      + ' if test -d ' + q + '; then printf "DIR\n";'
      + ' elif test -f ' + q + '; then printf "FILE\n";'
      + ' else printf "OTHER\n"; fi;'
      + ' stat -c "%s" ' + q + ';'
      + ' stat -c "%Y" ' + q + ' )';
    const r = await this._exec(cmd, 'stat', p);
    const lines = r.stdout.split('\n');
    if (lines[0] === 'MISSING') return undefined;
    const type = lines[0] === 'DIR' ? 'directory' : lines[0] === 'FILE' ? 'file' : 'other';
    const size = Number(lines[1]);
    const mtime = Number(lines[2]);
    return {
      type,
      size: Number.isFinite(size) ? size : undefined,
      mtime: Number.isFinite(mtime) ? mtime : undefined,
    };
  }

  async exists(p) {
    return (await this.stat(p)) !== undefined;
  }

  // Whole-file binary read via base64; large files chunked by chunkBytes source bytes (dd iflag=skip_bytes,count_bytes).
  async readBytes(p, opts = {}) {
    const st = await this.stat(p);
    if (st === undefined) throw this._err('read', p, 'no such file');
    const chunk = opts.chunkBytes ?? this.readChunkBytes;
    const total = st.size ?? 0;
    const out = [];
    for (let off = 0; off < total; off += chunk) {
      const n = Math.min(chunk, total - off);
      const cmd = 'dd if=' + shellQuoteSingle(p)
        + ' iflag=skip_bytes,count_bytes bs=131072 skip=' + off + ' count=' + n
        + ' 2>/dev/null | base64 -w0';
      const r = await this._exec(cmd, 'read', p);
      if (r.stdout) out.push(Buffer.from(r.stdout.trim(), 'base64'));
    }
    return Buffer.concat(out);
  }

  async readText(p) {
    return (await this.readBytes(p)).toString('utf8');
  }

  // Atomic write: base64-chunked write to a random temp file in the same directory
  // (base64 -d append) then mv -f atomic publish; temp cleaned up on failure.
  // Each base64 chunk is a multiple of 4 chars, so it decodes independently and
  // appending concatenates into the full file.
  async writeFileAtomic(p, data) {
    const buf = Buffer.isBuffer(data) ? data : Buffer.from(data);
    // Remote paths are always POSIX-style: hand-write dirname/basename (not node:path —
    // on a Windows host path.join would emit backslash paths and drop tmp in the wrong dir).
    const slash = Math.max(p.lastIndexOf('/'), p.lastIndexOf('\\'));
    const dir = slash >= 0 ? p.slice(0, slash + 1) : './';
    const base = slash >= 0 ? p.slice(slash + 1) : p;
    const tmp = dir + '.dsh-tmp-' + base + '-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8);
    try {
      const b64 = buf.toString('base64'); // encode once, then slice into 4-aligned chunks
      const chunkChars = Math.max(4, Math.floor(this.writeChunkBytes / 3) * 4);
      for (let i = 0; i < b64.length; i += chunkChars) {
        const piece = b64.slice(i, i + chunkChars);
        const redir = i === 0 ? '>' : '>>';
        const cmd = "printf '%s' " + shellQuoteSingle(piece) + ' | base64 -d ' + redir + ' ' + shellQuoteSingle(tmp);
        await this._exec(cmd, 'write', tmp);
      }
      await this._exec('mv -f ' + shellQuoteSingle(tmp) + ' ' + shellQuoteSingle(p), 'rename', tmp + ' -> ' + p);
    } catch (err) {
      await this.conn.exec('rm -f ' + shellQuoteSingle(tmp), { timeoutMs: this.timeoutMs }).catch(() => {});
      throw err;
    }
  }

  async rename(from, to) {
    await this._exec('mv -f ' + shellQuoteSingle(from) + ' ' + shellQuoteSingle(to), 'rename', from + ' -> ' + to);
  }

  async mkdir(p) {
    await this._exec('mkdir -p ' + shellQuoteSingle(p), 'mkdir', p);
  }

  // rm -f: a missing target does not throw (slightly different from sftp.unlink; every call
  // site already catches or tolerates a missing file).
  async unlink(p) {
    await this._exec('rm -f ' + shellQuoteSingle(p), 'unlink', p);
  }

  async rmdir(p) {
    await this._exec('rmdir ' + shellQuoteSingle(p), 'rmdir', p);
  }

  // List directory: find -printf machine-readable (type/size/mtime/name separated by '\t');
  // ordering matches upper-layer remote.js (which sorts: directories first, then name).
  async listDir(p) {
    const cmd = 'find ' + shellQuoteSingle(p)
      + " -mindepth 1 -maxdepth 1 -printf '%y\t%s\t%T@\t%f\n' 2>/dev/null";
    const r = await this._exec(cmd, 'readdir', p);
    const entries = [];
    for (const line of r.stdout.split('\n')) {
      if (!line) continue;
      const idx1 = line.indexOf('\t');
      if (idx1 < 0) continue;
      const y = line.slice(0, idx1);
      const rest = line.slice(idx1 + 1);
      const idx2 = rest.indexOf('\t');
      const idx3 = rest.indexOf('\t', idx2 + 1);
      if (idx2 < 0 || idx3 < 0) continue; // missing columns (extreme names) -> drop the line (documented limitation)
      const sizeStr = rest.slice(0, idx2);
      const mtimeStr = rest.slice(idx2 + 1, idx3);
      const name = rest.slice(idx3 + 1);
      const type = y === 'd' ? 'dir' : y === 'f' ? 'file' : y === 'l' ? 'link' : 'other';
      const mtime = Number(mtimeStr);
      entries.push({ name, type, size: Number(sizeStr), mtime: Number.isFinite(mtime) ? Math.trunc(mtime) : undefined });
    }
    return entries;
  }
}
