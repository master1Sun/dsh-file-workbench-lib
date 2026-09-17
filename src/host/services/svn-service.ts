/**
 * SvnService —— SVN 能力服务（本地 CLI + 远端 ssh:// exec）。
 *
 * 从 routes-svn.ts 抽出的过程式逻辑组织为类；继承 CommandLineRunner 复用统一的
 * 进程执行骨架（原 svn/svnRun 两份包装合并为基类的 execOrThrow/execCapture）。
 * 与 git 路由保持一致——不把 svn 库打进宿主 bundle，而是走 CLI。每次调用都基于
 * 用户提供的绝对路径向上查找工作副本根（存在 `.svn` 即视为工作副本），再在该工作
 * 副本上执行对应命令；非工作副本内、或命中受保护只读目录，一律拒绝执行写操作。
 *
 * 只读的「是否处于工作副本」通过向上查找 `.svn` 目录判断（SVN 1.7+ 工作副本仅在
 * 根目录含 `.svn`）。
 */
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";

import { getAccount, matchAccount, withSvnAuth } from "../accounts/accounts.js";
import { FsError } from "../fs/fs-tree.js";
import { remoteRun } from "../routes/routes-util.js";
import { CommandLineRunner } from "./command-runner.js";

/**
 * 解码 svn 输出——**逐行**解码，以兼容「同一段缓冲区混合编码」这一 svn 在中文 Windows
 * （zh_CN 区域）下的特殊行为：
 *
 *   - `svn log --xml` 与 diff 的**文件内容**始终按 UTF-8 输出；
 *   - `svn diff` / `svn info` 的**生成式标签**（如 `+++ 文件 (版本 N)`、
 *     `Cannot display: file marked as a binary type`）按当前区域默认 ANSI 代码页
 *     （GBK）输出。
 *
 * 若对整个缓冲区只做一次单编码解码，UTF-8 严格解码会因 GBK 标签字节整体失败，退回 GBK
 * 后又把 UTF-8 内容解成乱码（如 `閰嶇疆璇存槑…`）。改为逐行解码后：内容行按 UTF-8 严格命中，
 * 标签行失败再退回 gb18030（GBK 超集，项目统一的中文回退编码，见 `fs/text-codec.ts`），
 * 两端互不干扰。行内不会同时含两种编码（标签与内容分属不同行），`\n` 在 GBK/UTF-8 下均为
 * 0x0A，可作为安全切分点。
 */
export function decodeSvnOutput(buf: Buffer): string {
  if (buf.length === 0) return "";
  const lines: string[] = [];
  let start = 0;
  for (let i = 0; i < buf.length; i++) {
    if (buf[i] === 0x0a) {
      lines.push(decodeSvnLine(buf.subarray(start, i)));
      start = i + 1;
    }
  }
  if (start < buf.length) lines.push(decodeSvnLine(buf.subarray(start)));
  return lines.join("\n");
}

const svnUtf8Strict = new TextDecoder("utf-8", { fatal: true });
const svnGbk = new TextDecoder("gb18030"); // GBK 超集，项目统一中文回退编码（见 fs/text-codec.ts）

/** 单行解码：优先 UTF-8（保住文件内容），失败再退回 gb18030（保住 GBK 标签）。 */
function decodeSvnLine(line: Buffer): string {
  if (line.length && line[line.length - 1] === 0x0d) line = line.subarray(0, -1); // 去尾随 \r
  try {
    return svnUtf8Strict.decode(line);
  } catch {
    /* 含非 UTF-8 字节（通常是 GBK 标签），回退 gb18030 */
  }
  try {
    return svnGbk.decode(line);
  } catch {
    return line.toString("utf8"); // 兜底：宽松 UTF-8（极少触发）
  }
}

/**
 * 解析 svn 可执行文件路径：优先 PATH 中的 `svn`，否则探测 Windows 常见安装位置
 * （本机曾出现 svn 装在 `C:\Program Files (x86)\Subversion\bin` 但未加入 PATH 的情况）。
 * 每个候选都会实际执行 `svn --version --quiet` 验证可用，结果（含 null）缓存。
 */
let svnExeCache: string | null | undefined;
const SVN_CANDIDATES = [
  "svn",
  "C:\\Program Files\\Subversion\\bin\\svn.exe",
  "C:\\Program Files (x86)\\Subversion\\bin\\svn.exe",
  "C:\\Program Files\\SlikSvn\\bin\\svn.exe",
  "C:\\Program Files (x86)\\SlikSvn\\bin\\svn.exe",
  "C:\\Program Files\\VisualSVN\\bin\\svn.exe",
  "C:\\Program Files (x86)\\VisualSVN\\bin\\svn.exe",
  "C:\\Program Files\\TortoiseSVN\\bin\\svn.exe",
  "C:\\Program Files (x86)\\TortoiseSVN\\bin\\svn.exe",
];
export async function resolveSvnExe(): Promise<string | null> {
  if (svnExeCache !== undefined) return svnExeCache;
  for (const exe of SVN_CANDIDATES) {
    if (exe !== "svn" && !existsSync(exe)) continue;
    try {
      await promisify(execFile)(exe, ["--version", "--quiet"], { windowsHide: true, encoding: "utf8" });
      svnExeCache = exe;
      return exe;
    } catch {
      /* 候选不可用，尝试下一个 */
    }
  }
  svnExeCache = null;
  return null;
}

/** 向上查找 .svn 目录（SVN 工作副本仅在根目录含 .svn）。非工作副本返回 null。 */
export function findSvnRoot(start: string): string | null {
  // 保留同步语义（历史上即为同步实现）：仍按 .svn 标记向上查找。
  let cur = start;
  for (;;) {
    try {
      if (existsSync(join(cur, ".svn"))) return cur;
    } catch {
      /* 权限/符号链接异常，继续向上 */
    }
    const parent = dirname(cur);
    if (parent === cur) return null;
    cur = parent;
  }
}

/**
 * `svn info` 标签 → 字段名。
 *
 * 标签随 svn 界面语言变化，**不能只按英文匹配**（否则中文环境下 revision 永远读不到，
 * 版本 pill 显示「—」、更新摘要出现 `r?`）。这里按「首个冒号前的整段标签」精确查表，
 * 未命中的行直接忽略——精确匹配可避免 `版本库根` / `最后修改的版本` 误撞 `版本`。
 *
 * 各语言取值以**真实 `svn info` 输出**为准（svn 1.8.17 + zh_CN 实测）：
 *   URL: file:///…            → url
 *   正确的相对 URL: ^/        → relativeUrl
 *   版本: 2                   → revision
 * 新增语言时补进此表即可（勿凭翻译记忆，实测一条中文 WC 的 `svn info` 最省事）。
 */
const SVN_INFO_LABELS: Record<string, "url" | "relativeUrl" | "revision"> = {
  url: "url",
  "relative url": "relativeUrl",
  "正确的相对 url": "relativeUrl",
  "相对 url": "relativeUrl",
  revision: "revision",
  "版本": "revision",
  "修订版": "revision",
};

/** 解析 `svn info` 文本为关键字段（本地与远端共用；标签查表见 SVN_INFO_LABELS）。 */
export function parseSvnInfoFields(text: string): { url: string | null; revision: string | null; relativeUrl: string | null } {
  const out: { url: string | null; revision: string | null; relativeUrl: string | null } = {
    url: null,
    revision: null,
    relativeUrl: null,
  };
  for (const line of text.split(/\r?\n/)) {
    const m = line.match(/^([^:]+):\s*(.*)$/);
    if (!m) continue;
    const field = SVN_INFO_LABELS[m[1].trim().toLowerCase()];
    if (!field || out[field]) continue;
    out[field] = m[2].trim() || null;
  }
  return out;
}

export class SvnService extends CommandLineRunner {
  /** svn 命令超时（毫秒）：与 git 克隆同理，避免请求无限挂着占住连接。 */
  private static readonly SVN_TIMEOUT_MS = 10 * 60 * 1000;

  /** svn 命令默认解码器：逐行混合编码（见 decodeSvnOutput 顶部说明）。 */
  private static readonly decode = decodeSvnOutput;

  /** svn 命令执行选项（各调用方共用：超时 + 32 MiB 缓冲 + 混合编码解码）。 */
  private execOpts(cwd?: string) {
    return {
      cwd,
      timeoutMs: SvnService.SVN_TIMEOUT_MS,
      maxBufferBytes: 32 * 1024 * 1024,
      timeoutMessage: `svn 命令超时（${Math.round(SvnService.SVN_TIMEOUT_MS / 1000)}s，已终止）`,
      decode: SvnService.decode,
    };
  }

  /** 执行 svn 命令并返回退出码/输出（供前端命令台与写操作使用，失败不抛错）。 */
  async run(args: string[], cwd: string): Promise<{ code: number; stdout: string; stderr: string }> {
    const exe = await resolveSvnExe();
    if (!exe) return { code: 127, stdout: "", stderr: "未找到可用的 svn 命令行工具，请安装 Subversion（含命令行客户端）" };
    return this.execCapture(exe, args, this.execOpts(cwd));
  }

  /** 执行 svn 命令并在失败时抛出 FsError（版本探测等读操作使用）。 */
  private async svn(args: string[], cwd: string, hint = "svn 命令执行失败"): Promise<string> {
    const exe = await resolveSvnExe();
    if (!exe) throw new FsError("fs-error", `${hint}: 未找到可用的 svn 命令行工具`, 500);
    return this.execOrThrow(exe, args, { cwd, decode: SvnService.decode, hint });
  }

  /** 探测 svn CLI 是否可用（结果缓存在 resolveSvnExe 内部）。 */
  async available(): Promise<boolean> {
    return (await resolveSvnExe()) !== null;
  }

  /** 目标路径是否已存在（用于「已存在即 409」前置拦截）——检出流程路由层使用。 */
  async exists(p: string): Promise<boolean> {
    return this.pathExists(p);
  }

  /** 取工作副本对应仓库 URL（带 TTL 缓存）——命令台账号注入用，路由层调用。 */
  async wcUrl(root: string): Promise<string> {
    return this.wcUrlOf(root);
  }

  /* ── 账号注入 ─────────────────────────────────────────────────────────────
   * 命中插件里配置的账号时，为 svn 命令追加认证参数（凭据只存本机插件配置，
   * 且加 `--no-auth-cache`，不写 svn 全局认证缓存）。
   * 未命中则原样执行 —— svn 自身的认证缓存 / 匿名访问照旧，行为向后兼容。
   */

  /** 工作副本 URL 缓存：避免每条 svn 命令都额外跑一次 `svn info`。 */
  private static readonly wcUrlCache = new Map<string, { url: string; at: number }>();
  private static readonly WC_URL_TTL_MS = 60_000;

  /** 取工作副本对应的仓库 URL；读不到（非工作副本 / 失败）缓存空串，避免反复重试。 */
  private async wcUrlOf(root: string): Promise<string> {
    const cache = SvnService.wcUrlCache;
    const hit = cache.get(root);
    if (hit && Date.now() - hit.at < SvnService.WC_URL_TTL_MS) return hit.url;
    let url = "";
    try {
      url = parseSvnInfoFields(await this.svn(["info"], root, "无法读取仓库信息")).url ?? "";
    } catch {
      /* 非工作副本 / 读取失败：按「无账号可匹配」处理 */
    }
    cache.set(root, { url, at: Date.now() });
    return url;
  }

  /**
   * 目标 URL 有账号命中时追加认证参数；否则原样返回。
   *
   * `accountId` 为弹窗里**显式选中**的账号：给了就以它为准，不再按地址自动匹配 ——
   * 用户刚在克隆弹窗里挑好账号，不该因为「前缀没匹配上」而被忽略；未知 id 抛 404。
   */
  async authArgs(args: string[], target: string, accountId?: string): Promise<string[]> {
    const wanted = (accountId ?? "").trim();
    const acct = wanted ? await getAccount(wanted) : await matchAccount("svn", target);
    return acct ? withSvnAuth(args, acct) : args;
  }

  /** 本地 info：工作副本探测 + svn 可用性 + 关键字段解析（GET /svn/info 数据源）。 */
  async info(dir: string): Promise<{
    inRepo: boolean;
    root: string | null;
    svnAvailable: boolean;
    url: string | null;
    revision: string | null;
    relativeUrl: string | null;
  }> {
    const root = findSvnRoot(dir);
    const available = await this.available();
    const data = { inRepo: !!root, root, svnAvailable: available, url: null as string | null, revision: null as string | null, relativeUrl: null as string | null };
    if (root && available) {
      try {
        // 兼容 svn 1.8（无 --show-item）：读完整 info 输出后按标签查表解析（本地/远端共用）。
        const fields = parseSvnInfoFields(await this.svn(["info"], root, "无法读取仓库信息"));
        data.url = fields.url;
        data.revision = fields.revision;
        data.relativeUrl = fields.relativeUrl;
      } catch {
        /* 信息读取失败不影响判定 */
      }
    }
    return data;
  }

  /** 远端 svn info：先探远端 svn CLI 是否存在，再取工作副本信息（非工作副本 → inRepo:false）。 */
  async remoteInfo(dir: string): Promise<{
    inRepo: boolean;
    root: string | null;
    svnAvailable: boolean;
    url: string | null;
    revision: string | null;
    relativeUrl: string | null;
  }> {
    const data = { inRepo: false, root: null as string | null, svnAvailable: false, url: null as string | null, revision: null as string | null, relativeUrl: null as string | null };
    const which = await remoteRun(dir, "command -v svn >/dev/null 2>&1");
    if (which.code !== 0) return data;
    data.svnAvailable = true;
    const r = await remoteRun(dir, "svn info --non-interactive");
    if (r.code !== 0) return data;
    data.inRepo = true;
    const fields = parseSvnInfoFields(r.stdout);
    data.url = fields.url;
    data.revision = fields.revision;
    data.relativeUrl = fields.relativeUrl;
    return data;
  }
}

/** 模块级单例：路由层直接委托（svn 可执行路径缓存在模块级，与实例无关）。 */
export const svnService = new SvnService();
