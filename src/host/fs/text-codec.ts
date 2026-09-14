/**
 * 文本编解码：编码探测 / 行尾探测 / 按原编码与行尾还原写回。
 *
 * 设计要点：
 *  - **编辑器内部文档一律用 `\n` 表示换行**（CodeMirror 的 `StateField` 与 textarea 的
 *    `value` 都只在 `\n` 上工作；CRLF 进 DOM 前就会被归一）。因此行尾样式只作为**元数据**
 *    随文件往返，写回时再还原——避免 CRLF 文件「打开即被编辑过」就整篇变成 LF。
 *  - 编码探测优先看 BOM，其次按「二进制魔数 → UTF-16 启发 → 二进制启发 → 严格 UTF-8 →
 *    GB18030 → Latin-1」回退。**魔数必须排在 UTF-16 启发之前**：含 NUL 的二进制很容易
 *    被「偶位大量 NUL」的 UTF-16 启发式误判。GB18030 是 GBK/GB2312 的**超集**，作为中文
 *    环境的默认回退编码（实测 iconv-lite 的 `gbk` 表会把 `・` `￥` 等字符编成 `?`，
 *    `gb18030` 才完整往返）。
 *  - 写回前做**往返校验**：用目标编码编完再解回来，与待写文本不一致即说明该编码无法表示
 *    全部字符（Big5 里的简体字、GBK 里的 emoji…），此时**直接报错**而不是写出乱码。
 */
import iconv from "iconv-lite";
import { FsError } from "./fs-tree.js";
import type { EolStyle, TextEncoding } from "../../shared/types.js";

export type { EolStyle, TextEncoding };

/** 编码的展示名（前端 i18n 之外的兜底；BOM 由 `hasBom` 单独表达）。 */
export const ENCODING_LABEL: Record<TextEncoding, string> = {
  utf8: "UTF-8",
  utf16le: "UTF-16 LE",
  utf16be: "UTF-16 BE",
  gb18030: "GB18030",
  big5: "Big5",
  latin1: "Latin-1",
  binary: "Binary",
};

/** 探测 / 解码结果。 */
export interface DecodedText {
  /** 已把行尾归一为 `\n` 的文本（二进制时为空串）。 */
  text: string;
  encoding: TextEncoding;
  /** 是否带 BOM（仅 UTF-8 / UTF-16 有意义）。 */
  hasBom: boolean;
  /** 原文件的行尾样式（写回时还原）。 */
  eol: EolStyle;
  /** 判定为非文本文件时为 true，此时 `text` 为空串。 */
  binary: boolean;
}

const UTF8_BOM = Buffer.from([0xef, 0xbb, 0xbf]);
const UTF16LE_BOM = Buffer.from([0xff, 0xfe]);
const UTF16BE_BOM = Buffer.from([0xfe, 0xff]);

/** 无换行文件的行尾兜底：跟随宿主平台习惯。 */
function platformEol(): EolStyle {
  return process.platform === "win32" ? "crlf" : "lf";
}

/** 探测文本的行尾样式（以出现次数最多者为准，无换行时按平台兜底）。 */
export function detectEol(text: string): EolStyle {
  let crlf = 0;
  let lf = 0;
  let cr = 0;
  for (let i = 0; i < text.length; i++) {
    const c = text.charCodeAt(i);
    if (c === 13) {
      if (text.charCodeAt(i + 1) === 10) {
        crlf++;
        i++;
      } else {
        cr++;
      }
    } else if (c === 10) {
      lf++;
    }
  }
  if (crlf >= lf && crlf >= cr && crlf > 0) return "crlf";
  if (lf >= cr && lf > 0) return "lf";
  if (cr > 0) return "cr";
  return platformEol();
}

/** 把任意行尾归一为 `\n`（编辑器内部一律 LF）。 */
export function normalizeEol(text: string): string {
  return text.replace(/\r\n?/g, "\n");
}

/**
 * 把任意行尾统一换算为目标样式。
 *
 * 注意必须匹配**所有**换行形态（`\r\n` / 孤立 `\r` / 孤立 `\n`）：只写 `/\r\n?/g`
 * 会漏掉孤立 `\n`（编辑器里的文档就是这种），结果是「想把 LF 存成 CRLF」完全失效——
 * 等于没修 CRLF 被改写的问题。
 */
export function applyEol(text: string, eol: EolStyle): string {
  if (eol === "crlf") return text.replace(/\r\n|\r|\n/g, "\r\n");
  if (eol === "cr") return text.replace(/\r\n|\r|\n/g, "\r");
  return normalizeEol(text);
}

/** 严格 UTF-8 校验：含非法序列即判非 UTF-8（原生 fatal 解码最可靠）。 */
function isStrictUtf8(buf: Buffer): boolean {
  try {
    new TextDecoder("utf-8", { fatal: true }).decode(buf);
    return true;
  } catch {
    return false;
  }
}

/**
 * 无 BOM 的 UTF-16 启发式：ASCII 文本在 UTF-16 下呈「有效字节 + 0x00」交替，
 * 故按偶/奇位 NUL 占比判断字节序（>30% 视为 UTF-16）。
 */
function sniffUtf16NoBom(buf: Buffer): "utf16le" | "utf16be" | null {
  const n = Math.min(buf.length, 4096);
  if (n < 4) return null;
  let even = 0;
  let odd = 0;
  for (let i = 0; i + 1 < n; i += 2) {
    if (buf[i] === 0) even++;
    if (buf[i + 1] === 0) odd++;
  }
  const pairs = Math.floor(n / 2);
  if (pairs === 0) return null;
  // 偶位为 0 → 高字节在前 → 大端；奇位为 0 → 低字节在前 → 小端。
  if (even / pairs > 0.3) return "utf16be";
  if (odd / pairs > 0.3) return "utf16le";
  return null;
}

/**
 * 已知二进制格式的魔数（文件头）。
 *
 * NUL / 控制字符启发式能拦住绝大多数二进制，但对「头几个字节恰好可打印」的格式不稳
 * （PDF 以 `%PDF-` 开头、PNG 头 8 字节里只有 1 个控制符）。这里显式列出常见格式，
 * 精确度高、代价极低；命中即判定为非文本，交给「用系统程序打开」。
 */
const BINARY_MAGICS: Array<{ bytes: number[]; offset: number }> = [
  { bytes: [0x89, 0x50, 0x4e, 0x47], offset: 0 }, // PNG
  { bytes: [0xff, 0xd8, 0xff], offset: 0 }, // JPEG
  { bytes: [0x47, 0x49, 0x46, 0x38], offset: 0 }, // GIF
  { bytes: [0x50, 0x4b, 0x03, 0x04], offset: 0 }, // ZIP / docx / xlsx / jar
  { bytes: [0x25, 0x50, 0x44, 0x46], offset: 0 }, // PDF
  { bytes: [0x7f, 0x45, 0x4c, 0x46], offset: 0 }, // ELF
  { bytes: [0x4d, 0x5a], offset: 0 }, // PE / EXE
  { bytes: [0x1f, 0x8b], offset: 0 }, // gzip
  { bytes: [0x52, 0x61, 0x72, 0x21], offset: 0 }, // RAR
  { bytes: [0x37, 0x7a, 0xbc, 0xaf], offset: 0 }, // 7z
  { bytes: [0x42, 0x4d], offset: 0 }, // BMP
  { bytes: [0x00, 0x00, 0x01, 0x00], offset: 0 }, // ICO
  { bytes: [0x00, 0x01, 0x00, 0x00], offset: 0 }, // TTF
];

/** 是否命中已知二进制格式的魔数。 */
function hasBinaryMagic(buf: Buffer): boolean {
  return BINARY_MAGICS.some(
    (m) => buf.length >= m.offset + m.bytes.length && m.bytes.every((b, i) => buf[m.offset + i] === b),
  );
}

/** 二进制启发式：出现 NUL 字节，或控制字符占比过高（魔数判定见 hasBinaryMagic，由 detect 先行）。 */
function looksBinary(buf: Buffer): boolean {
  const n = Math.min(buf.length, 8192);
  let ctrl = 0;
  for (let i = 0; i < n; i++) {
    const b = buf[i];
    if (b === 0) return true;
    // 允许 \t(09) \n(0a) \v(0b) \f(0c) \r(0d)，其余 C0 控制符计入。
    if (b < 0x09 || (b > 0x0d && b < 0x20)) ctrl++;
  }
  return n > 0 && ctrl / n > 0.2;
}

/** 用 U+FFFD 占比评估某编码解码结果的可信度（越高越可能是猜错编码）。 */
function replacementRatio(text: string): number {
  if (!text) return 0;
  let bad = 0;
  const n = Math.min(text.length, 8192);
  for (let i = 0; i < n; i++) if (text.charCodeAt(i) === 0xfffd) bad++;
  return bad / n;
}

/** 探测编码与 BOM 标记。 */
function detect(buf: Buffer): { encoding: TextEncoding; hasBom: boolean } {
  if (buf.length >= 3 && buf.subarray(0, 3).equals(UTF8_BOM)) return { encoding: "utf8", hasBom: true };
  if (buf.length >= 2 && buf.subarray(0, 2).equals(UTF16LE_BOM)) return { encoding: "utf16le", hasBom: true };
  if (buf.length >= 2 && buf.subarray(0, 2).equals(UTF16BE_BOM)) return { encoding: "utf16be", hasBom: true };

  // 顺序敏感：已确认的二进制魔数必须排在 UTF-16 启发式**之前**——
  // 含 NUL 的 JPEG/PNG/可执行文件会被「偶位大量 NUL」的启发式误判成 UTF-16BE。
  if (hasBinaryMagic(buf)) return { encoding: "binary", hasBom: false };
  const u16 = sniffUtf16NoBom(buf);
  if (u16) return { encoding: u16, hasBom: false };
  if (looksBinary(buf)) return { encoding: "binary", hasBom: false };
  if (buf.length === 0 || isStrictUtf8(buf)) return { encoding: "utf8", hasBom: false };

  // 非 UTF-8 的文本：先按 GB18030（中文环境）解，替换字符过多则退回 Latin-1。
  const gb = iconv.decode(buf, "gb18030");
  if (replacementRatio(gb) <= 0.02) return { encoding: "gb18030", hasBom: false };
  return { encoding: "latin1", hasBom: false };
}

/** 按编码把字节解码为字符串（不处理 BOM / 行尾，供内部与往返校验使用）。 */
function decodeRaw(buf: Buffer, encoding: TextEncoding): string {
  switch (encoding) {
    case "utf8":
      return buf.toString("utf8");
    case "utf16le":
      return buf.toString("utf16le");
    case "utf16be": {
      const copy = Buffer.from(buf);
      copy.swap16();
      return copy.toString("utf16le");
    }
    case "gb18030":
    case "big5":
    case "latin1":
      return iconv.decode(buf, encoding);
    case "binary":
      return "";
  }
}

/** 按编码把字符串编码为字节（不添加 BOM）。 */
function encodeRaw(text: string, encoding: TextEncoding): Buffer {
  switch (encoding) {
    case "utf8":
      return Buffer.from(text, "utf8");
    case "utf16le":
      return Buffer.from(text, "utf16le");
    case "utf16be": {
      const le = Buffer.from(text, "utf16le");
      le.swap16();
      return le;
    }
    case "gb18030":
    case "big5":
    case "latin1":
      return iconv.encode(text, encoding);
    case "binary":
      throw new FsError("bad-request", "binary content cannot be encoded as text", 422);
  }
}

/** 去掉开头的 BOM 字节（按编码判定该编码自身的 BOM 形态）。 */
function stripBom(buf: Buffer, encoding: TextEncoding): Buffer {
  if (encoding === "utf8" && buf.length >= 3 && buf.subarray(0, 3).equals(UTF8_BOM)) return buf.subarray(3);
  if (encoding === "utf16le" && buf.length >= 2 && buf.subarray(0, 2).equals(UTF16LE_BOM)) return buf.subarray(2);
  if (encoding === "utf16be" && buf.length >= 2 && buf.subarray(0, 2).equals(UTF16BE_BOM)) return buf.subarray(2);
  return buf;
}

/** 该编码是否支持 BOM（仅 UTF-8 与 UTF-16 有 BOM 概念）。 */
function supportsBom(encoding: TextEncoding): boolean {
  return encoding === "utf8" || encoding === "utf16le" || encoding === "utf16be";
}

/**
 * 解码文件内容。
 * @param buf - 文件原始字节。
 * @param override - 前端指定的编码（用户在状态栏切换时传入）；缺省则自动探测。
 */
export function decodeText(buf: Buffer, override?: { encoding?: TextEncoding; hasBom?: boolean }): DecodedText {
  const auto = detect(buf);
  const encoding = override?.encoding ?? auto.encoding;
  // BOM 判定：显式传入优先；只切换编码（未改 BOM）时，仅当新编码与探测结果一致才沿用原 BOM，
  // 否则（如把 UTF-8 文件改为按 GB18030 读）BOM 失去意义，按无 BOM 处理。
  const hasBom = supportsBom(encoding)
    ? override?.hasBom ?? (override?.encoding ? auto.hasBom && auto.encoding === encoding : auto.hasBom)
    : false;

  if (encoding === "binary") {
    return { text: "", encoding, hasBom: false, eol: platformEol(), binary: true };
  }

  const raw = decodeRaw(stripBom(buf, encoding), encoding);
  return {
    text: normalizeEol(raw),
    encoding,
    hasBom,
    eol: detectEol(raw),
    binary: false,
  };
}

/**
 * 编码待写文本（含行尾还原与 BOM），并做**往返校验**。
 *
 * @throws FsError(422) 当目标编码无法表示文本中的全部字符时——宁可报错也不写出乱码。
 */
export function encodeText(
  text: string,
  opts: { encoding: TextEncoding; hasBom: boolean; eol: EolStyle },
): Buffer {
  const { encoding, hasBom, eol } = opts;
  if (encoding === "binary") {
    throw new FsError("bad-request", "binary content cannot be saved as text", 422);
  }
  const body = applyEol(text, eol);
  const bytes = encodeRaw(body, encoding);
  const withBom =
    hasBom && supportsBom(encoding)
      ? Buffer.concat([encoding === "utf8" ? UTF8_BOM : encoding === "utf16le" ? UTF16LE_BOM : UTF16BE_BOM, bytes])
      : bytes;

  const back = decodeRaw(stripBom(withBom, encoding), encoding);
  if (back !== body) {
    throw new FsError(
      "bad-request",
      `encoding ${ENCODING_LABEL[encoding]} cannot represent every character in this file — save as UTF-8 instead`,
      422,
    );
  }
  return withBom;
}
