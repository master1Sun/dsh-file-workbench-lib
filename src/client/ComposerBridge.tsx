/**
 * 会话输入框引用桥接（注册于 `conversation.input.left` 插槽）。
 *
 * DSH 的引用是聊天输入框（Lexical）里的**结构化 chip**：`source: "reference"`，
 * 载荷为 `{ ref, label, appearance: 'file'|'folder', clipboardText }`，其中 `ref`
 * 与 `clipboardText` 都是 `@path` 提及文本（官方 provider `dsh-client-ui-reference`
 * 的 `@file` 源就是这么构造的；文法见 dsh-file-reference/grammar：文件 `@path`、
 * 含空格 `@"path"`、目录尾斜杠 `@path/`、含空格目录 `@"path/` 引号保持未闭合）。
 *
 * 写入通道：由 client 入口经 `uiSession.provide` 下发的 `wbInsertSessionReference`
 * prop（内部走 `conversation.input.for(binding.ctx).insertReference`，即官方 chip
 * 写入路径）。本组件只负责：
 *   ① 把绝对路径压成相对会话工作目录的提及文本；
 *   ② 由 `useInput` 读到的草稿 / 修订号 / 既有 chip 推出追加位置的 span；
 *   ③ 调官方通道写入；通道不可用（宿主版本较旧 / span CAS 失败）时降级为
 *      `inputActions.setDraft` 追加纯文本提及（宿主 provider 同样会解析）。
 *
 * 组件自身不渲染任何 UI，仅在 composer 工具栏占一个不可见座位。
 */
import { useEffect, useRef, type ReactNode } from "react";

/** 一条已插入引用在「剪贴板投影」中的占位（用于把坐标换算成 detect 坐标）。 */
interface OccurrenceLike {
  length?: number;
}

/** `useInput` 暴露的输入状态（只声明本桥接用到的字段）。 */
interface InputLike {
  draft?: string;
  draftRev?: number;
  occurrences?: readonly OccurrenceLike[];
}

/** `conversation.input.left` 座位提供的最小属性合约。 */
interface ComposerProps {
  useInput?: <T>(selector: (s: InputLike) => T) => T;
  inputActions?: { setDraft?: (text: string) => void; submit?: () => void };
  /** client 入口经 uiSession.provide 下发的官方 chip 写入通道。 */
  wbInsertSessionReference?: (req: {
    mention: string;
    label: string;
    appearance: "file" | "folder";
    span: { start: number; end: number; draftRev: number };
  }) => boolean;
}

/** `window.__DSH_FILE_WORKBENCH__` 上本桥接关心的字段。 */
interface WorkbenchBridge {
  getSessionDir?: () => string | null;
  appendSessionReference?: (path: string, isDir?: boolean) => boolean;
}

function bridge(): WorkbenchBridge | undefined {
  return (window as unknown as { __DSH_FILE_WORKBENCH__?: WorkbenchBridge }).__DSH_FILE_WORKBENCH__;
}

/** 把绝对路径尽量压成「相对当前会话工作目录」的形式；无法压时保留绝对路径（分隔符转 `/`）。 */
function relToCwd(rawPath: string): string {
  const p = rawPath.replace(/\\/g, "/");
  let cwd: string | null = null;
  try {
    cwd = bridge()?.getSessionDir?.() ?? null;
  } catch {
    cwd = null;
  }
  if (!cwd) return p;
  const root = cwd.replace(/\\/g, "/").replace(/\/+$/, "");
  if (root === "") return p;
  const lp = p.toLowerCase();
  const lr = root.toLowerCase();
  if (lp === lr) return ".";
  if (lp.startsWith(`${lr}/`)) return p.slice(root.length + 1);
  return p;
}

/**
 * 按 DSH 的 `@file` 文法把路径格式化为引用提及（对齐官方 `formatFileMention`）。
 * 目录保留结尾斜杠；含空白时用引号（目录的引号保持未闭合，便于继续下钻）。
 * @returns 提及文本；路径含文法无法表达的控制字符时返回 null。
 */
export function formatFileMention(rawPath: string, isDir: boolean): string | null {
  let p = relToCwd(rawPath);
  if (p === "") p = ".";
  const withSlash = isDir ? (p.endsWith("/") ? p : `${p}/`) : p;
  if (/[\u0000-\u001f\u007f-\u009f"]/u.test(withSlash)) return null;
  const quoted = /\s/u.test(withSlash);
  if (!quoted) return `@${withSlash}`;
  if (isDir) return `@"${withSlash}`;
  return `@"${withSlash}"`;
}

/** 提及文本末段（官方 chip 的 label：文件名 / 目录名 + `/`）。 */
function mentionLabel(mention: string, isDir: boolean): string {
  // 去掉 `@` / 引号 / 结尾斜杠后取最后一段
  const bare = mention.replace(/^@"/u, "").replace(/^@/u, "").replace(/\/+$/u, "");
  const seg = bare.slice(bare.lastIndexOf("/") + 1) || bare;
  return isDir ? `${seg}/` : seg;
}

export function ComposerBridge(props: ComposerProps): ReactNode {
  const { inputActions, wbInsertSessionReference } = props;
  // 契约保证 useInput 存在；缺失时用空实现兜底（保持 hook 调用计数稳定）。
  const useInput = props.useInput ?? (<T,>(sel: (s: InputLike) => T): T => sel({}));
  const draft = useInput((s) => s.draft);
  const draftRev = useInput((s) => s.draftRev);
  const occurrences = useInput((s) => s.occurrences);

  // 把最新输入态放进 ref：appendSessionReference 在 window 上长期存活，
  // 需要读到点按瞬间的最新草稿 / 修订号，而非闭包捕获的旧值。
  const latest = useRef<{ draft: string; draftRev: number; detectLen: number }>({
    draft: "",
    draftRev: 0,
    detectLen: 0,
  });
  const draftText = typeof draft === "string" ? draft : "";
  const occ = Array.isArray(occurrences) ? occurrences : [];
  // detect 坐标把每个 chip 记作 1 个字符（U+FFFC），剪贴板投影记作其完整文本长度。
  let chipExtra = 0;
  for (const o of occ) {
    const len = o && typeof o.length === "number" ? o.length : 0;
    if (len > 1) chipExtra += len - 1;
  }
  latest.current = {
    draft: draftText,
    draftRev: typeof draftRev === "number" ? draftRev : 0,
    detectLen: Math.max(0, draftText.length - chipExtra),
  };

  useEffect(() => {
    const g = bridge();
    if (!g) return;
    const setDraft = inputActions?.setDraft;
    const insertRef = wbInsertSessionReference;
    if (typeof setDraft !== "function" && typeof insertRef !== "function") return;

    g.appendSessionReference = (path: string, isDir = false): boolean => {
      const mention = formatFileMention(path, isDir);
      if (!mention) return false;
      const { draft: cur, draftRev: rev, detectLen } = latest.current;

      // 优先走官方 chip 通道：在草稿末尾（detect 坐标）插入一条结构化引用。
      if (typeof insertRef === "function") {
        const ok = insertRef({
          mention,
          label: mentionLabel(mention, isDir),
          appearance: isDir ? "folder" : "file",
          span: { start: detectLen, end: detectLen, draftRev: rev },
        });
        if (ok) return true;
      }

      // 降级：纯文本提及（宿主 provider 同样按文法解析）。非空草稿以空格分隔，
      // 满足「`@` 前需有空白」的文法要求。
      if (typeof setDraft !== "function") return false;
      const text = typeof cur === "string" ? cur : "";
      const next = text.trim() ? `${text.replace(/\s+$/, "")} ${mention}` : mention;
      setDraft(next);
      return true;
    };
    return () => {
      const curBridge = bridge();
      if (curBridge && curBridge.appendSessionReference) delete curBridge.appendSessionReference;
    };
  }, [draft, draftRev, occurrences, inputActions, wbInsertSessionReference]);

  // 无可见 UI：仅在 composer 工具栏占一个不渲染的座位。
  return null;
}
