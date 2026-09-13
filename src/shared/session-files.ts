/**
 * 会话「触碰文件」收集器（host ↔ client ↔ shared 复用）。
 *
 * 从会话事件流里收集助手通过工具交互过的本地文件绝对路径：
 *   - tool/call          → 参数 `arguments`（原始 JSON 字符串）里递归抽取路径型字段
 *   - assistant/message  → `message.content` 里 `type === "tool-call"` 的块参数 `arguments`
 *
 * 逻辑从 client/index.tsx 的原 getSessionFiles 逐字节迁移而来，宿主侧（routes-session-stream）
 * 重放会话内存事件或磁盘转写时复用同一套算法，保证前后端推导一致。
 */

/** 单个可折叠会话事件（宿主内存 session.events 与磁盘转写行同构）。 */
export interface SessionEventLike {
  type?: string;
  data?: any;
  [k: string]: any;
}

/** 绝对路径判定：Windows 盘符、POSIX 根或 UNC。 */
export const isAbsPath = (s: string): boolean => /^[A-Za-z]:[\\/]/.test(s) || s.startsWith("/") || s.startsWith("\\\\");
// 参数对象里常见的路径型字段。
const PATH_KEY = /(path|file|files|filename|dir|dirs|directory|folder|cwd|root|workspace)$/i;
const EXTRA_KEY = /^(src|dest|source|target|from|to)$/i;

/** 把相对路径按会话 cwd 归一成绝对路径；已绝对或拿不到 cwd 时原样返回。 */
export function resolvePath(p: string, cwd: string | undefined): string {
  if (!cwd || isAbsPath(p)) return p;
  const sep = /^[A-Za-z]:[\\/]/.test(cwd) ? "\\" : "/";
  return `${cwd.replace(/[\\/]+$/, "")}${sep}${p}`;
}

/** 从工具调用的 JSON 参数里递归收集路径型字段的值（绝对路径无条件收集）。 */
export function collectFromArgs(raw: unknown, cwd: string | undefined, out: Set<string>): void {
  let val: unknown;
  try {
    val = typeof raw === "string" ? JSON.parse(raw) : raw;
  } catch {
    return;
  }
  const stack: unknown[] = [val];
  while (stack.length > 0) {
    const node = stack.pop();
    if (Array.isArray(node)) {
      for (const v of node) stack.push(v);
      continue;
    }
    if (node && typeof node === "object") {
      for (const [k, v] of Object.entries(node as Record<string, unknown>)) {
        if (typeof v === "string") {
          const keep = PATH_KEY.test(k) || isAbsPath(v) || (EXTRA_KEY.test(k) && /[.\\/]/.test(v));
          // 排除 URL/占位与含空白的值，避免混入非文件引用。
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

/**
 * 解包 raw 事件：兼容宿主内存事件 `{type,data,...}` 与客户端
 * `{event:{type,data}}` 包装；返回裸事件（可能为 undefined）。
 */
export function unwrapEvent(x: unknown): SessionEventLike | undefined {
  if (!x || typeof x !== "object") return undefined;
  const rec = x as { event?: SessionEventLike };
  return rec.event ?? (x as SessionEventLike);
}

/**
 * 从一条会话事件里收集触碰文件，追加到 out。
 * handler 兼容 `arguments`（字符串）与旧形态 `argsRaw` / 嵌套 `call.args`。
 */
export function collectSessionEventFiles(ev: SessionEventLike | undefined, cwd: string | undefined, out: Set<string>): void {
  if (!ev?.type) return;
  if (ev.type === "tool/call") {
    const raw = ev.data?.arguments ?? ev.data?.argsRaw ?? ev.data?.args;
    collectFromArgs(raw, cwd, out);
  } else if (ev.type === "assistant/message") {
    const blocks: unknown[] = ev.data?.message?.content;
    if (Array.isArray(blocks)) {
      for (const b of blocks) {
        if (b && typeof b === "object") {
          const box = b as { type?: string; arguments?: unknown; argsRaw?: unknown; call?: { argsRaw?: unknown; arguments?: unknown } };
          if (box.type === "tool-call") {
            collectFromArgs(box.arguments ?? box.argsRaw ?? box.call?.arguments ?? box.call?.argsRaw, cwd, out);
          }
        }
      }
    }
  }
}

/** 对一组合并事件收集当前会话触碰过的文件（绝对路径，保存首次出现顺序）。 */
export function collectSessionFiles(events: unknown[] | undefined, cwd: string | undefined): string[] {
  // canon 键 → 首个展示写法。同一文件可能被以多种写法引用
  // （不同分隔符/结尾斜杠/大小写），按规范化键去重、保留首次出现的写法。
  const out = new Map<string, string>();
  for (const raw of Array.isArray(events) ? events : []) {
    const batch = new Set<string>();
    collectSessionEventFiles(unwrapEvent(raw), cwd, batch);
    for (const p of batch) {
      const key = canonicalKey(p);
      if (!out.has(key)) out.set(key, p);
    }
  }
  return [...out.values()];
}

/** 文件路径的规范化去重键：统一分隔符、剥掉结尾斜杠、Windows 路径忽略大小写。 */
export function canonicalKey(p: string): string {
  let s = p.replace(/[\\/]+/g, "/");
  if (s.length > 1) s = s.replace(/\/+$/, "");
  // 盘符（C:\）或 UNC（\\server）命中的是 Windows 路径，大小写不敏感。
  if (/^[A-Za-z]:/.test(p) || s.startsWith("//")) s = s.toLowerCase();
  return s;
}