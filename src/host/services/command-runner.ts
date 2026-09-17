/**
 * CommandLineRunner —— 外部命令行工具（git / svn / 凭据测试等）执行基类。
 *
 * 抽取动机：routes-git / routes-svn / routes-accounts 此前各自维护一份近乎相同的
 * `execFile` 包装（失败抛错版 + 失败不抛错返回退出码版），超时、killed→124、
 * 输出解码、错误文案拼装等细节重复三份，任何一处修 bug 都要改三处。现在统一收敛到
 * 这里：子类只声明「执行什么程序、如何解码输出、超时多久」，不再关心进程 API 细节。
 *
 * 设计约定（与原实现逐一对应，保证行为不变）：
 *  - 「查询版」`execCapture`：失败**不抛错**，把退出码/stdout/stderr 归一成 CmdResult；
 *    超时被 kill 时 code 不是数字（null/undefined），若不特判会退成 "exit 1"，
 *    用户看到的原因与真实情况（超时）完全不符 —— 故统一映射为 124（GNU timeout 约定）。
 *  - 「断言版」`execOrThrow`：失败抛 FsError(fs-error, `${hint}: ...`, 500)。
 *  - 输出解码可通过 `decode` 注入（svn 需要逐行混合编码解码，见 SvnService）。
 */
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { stat } from "node:fs/promises";
import { dirname, join } from "node:path";

import { FsError } from "../fs/fs-tree.js";

const execFileP = promisify(execFile);

/** 归一化的命令执行结果（与原 gitRun / svnRun / runCmd 的返回形态一致）。 */
export interface CmdResult {
  code: number;
  stdout: string;
  stderr: string;
}

/** execCapture 的可调项：各 CLI 工具按需覆盖，缺省值与原 gitRun 一致。 */
export interface ExecOptions {
  /** 工作目录。 */
  cwd?: string;
  /** 额外环境变量（与 process.env 合并后传给子进程）。 */
  env?: NodeJS.ProcessEnv;
  /** 超时毫秒数；不传 = 不设超时（原 gitRun 的行为）。 */
  timeoutMs?: number;
  /** stdout 缓冲上限（字节），默认 16 MiB。 */
  maxBufferBytes?: number;
  /** 超时被终止时写进 stderr 的文案（如「svn 命令超时（600s，已终止）」）。 */
  timeoutMessage?: string;
  /** 输出解码器；缺省按 UTF-8 整体解码（svn 传逐行混合编码解码）。 */
  decode?: (buf: Buffer) => string;
}

export abstract class CommandLineRunner {
  /**
   * 执行一条命令并返回退出码/输出（失败不抛错）。
   *
   * 抽自三份重复实现的公共骨架：成功路径取 stdout/stderr；失败路径区分「超时被 kill」
   * （code 归一为 124，stderr 用 timeoutMessage）与普通失败（保留子进程已产出的
   * stdout/stderr —— git/svn 报错时输出往往比异常 message 更有诊断价值）。
   */
  protected async execCapture(exe: string, args: string[], opts: ExecOptions = {}): Promise<CmdResult> {
    const decode = opts.decode ?? ((b: Buffer) => b.toString("utf8"));
    try {
      const { stdout, stderr } = await execFileP(exe, args, {
        cwd: opts.cwd,
        windowsHide: true,
        encoding: "buffer",
        maxBuffer: opts.maxBufferBytes ?? 16 * 1024 * 1024,
        timeout: opts.timeoutMs,
        env: opts.env ? { ...process.env, ...opts.env } : process.env,
      });
      return { code: 0, stdout: decode(stdout as Buffer).trim(), stderr: decode(stderr as Buffer).trim() };
    } catch (error) {
      const e = error as NodeJS.ErrnoException & { stderr?: Buffer; stdout?: Buffer; killed?: boolean };
      const code = e.killed ? 124 : typeof e.code === "number" ? Number(e.code) : 1;
      const stderr = e.killed
        ? opts.timeoutMessage ?? `命令超时，已终止`
        : e.stderr
          ? decode(e.stderr as Buffer)
          : e.message ?? String(error);
      return {
        code,
        stdout: e.stdout ? decode(e.stdout as Buffer).trim() : "",
        stderr: stderr.trim(),
      };
    }
  }

  /**
   * 执行一条命令并在失败时抛 FsError（读路径的「要么有结果要么报错」场景）。
   *
   * 与原 git()/svn() 的文案格式一致：`${hint}: ${stderr || message}`，状态码 500。
   */
  protected async execOrThrow(
    exe: string,
    args: string[],
    opts: ExecOptions & { cwd?: string; hint?: string } = {},
  ): Promise<string> {
    const hint = opts.hint ?? "命令执行失败";
    const r = await this.execCapture(exe, args, { ...opts, cwd: opts.cwd });
    if (r.code !== 0) {
      throw new FsError("fs-error", `${hint}: ${r.stderr || r.stdout || `exit ${r.code}`}`, 500);
    }
    return r.stdout;
  }

  /** 目标路径是否已存在（用于「已存在即 409」前置拦截）——git / svn 克隆检出共用。 */
  protected async pathExists(p: string): Promise<boolean> {
    return stat(p).then(
      () => true,
      () => false,
    );
  }
}

/**
 * 「向上查找标记文件/目录定位根」的公共骨架（git 找 `.git`、svn 找 `.svn`）。
 *
 * 两份原实现循环体完全一致、只有标记名与「存在性判断方式」（async stat vs 同步
 * existsSync）不同 —— 统一走 async stat，行为等价（existsSync 对不存在的路径返回
 * false，stat 失败同样进入「继续向上」分支）。
 */
export async function findMarkerRoot(start: string, marker: string): Promise<string | null> {
  let cur = start;
  for (;;) {
    try {
      await stat(join(cur, marker));
      return cur;
    } catch {
      /* 继续向上 */
    }
    const parent = dirname(cur);
    if (parent === cur) return null;
    cur = parent;
  }
}

/** 把 `--pretty=format:%h|%an|%ar|%s` 的输出拆成 GitLogItem（本地与远端共用）。 */
export function parseLogLines(
  out: string,
): Array<{ hash: string; author: string; date: string; subject: string }> {
  return out.split("\n").map((line) => {
      const [hash, author, date, subject] = line.split("|");
      return { hash: hash ?? "", author: author ?? "", date: date ?? "", subject: subject ?? "" };
    });
}
