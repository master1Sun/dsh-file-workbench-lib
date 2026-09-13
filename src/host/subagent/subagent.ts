/**
 * dsh-file-workbench — 子代理发起（host 端，对齐宿主 0.1.5 真实 API）。
 *
 * 宿主 `@deepseek-ai/dsh-subagent`（0.1.5-rc.1）的 `ctx.subagents` 公开面为：
 *   - `list(): string[]`                     已注册的 provider 名（实测：fork / spawn）
 *   - `start(name, request)`                 一次性子代理，返回 SubagentRun（await run.result 取终态）
 *   - `startContinuable({provider,label,request,signal})`
 *                                            建立「持久可续」子代理，**返回 childId（子会话 id）**
 *   - `sendMessage / interrupt / listChildren / prompt …`
 * 注意：**没有 `spawn` 方法**（早期猜测有误）。
 *
 * 本模块优先走 `startContinuable`：它创建的是宿主会话树里真实存在的子会话，
 * 会直接出现在官方「子代理会话」视图中，并可继续对话——正是本功能想要的形态。
 * 若宿主未提供 startContinuable（或 provider 不具备 continuable 能力），
 * 自动回退到 `start()` 一次性运行并等待结果文本。
 *
 * 说明：刻意不 import @deepseek-ai/dsh-subagent 的类型（宿主插件构建时 external、
 * 运行时经同 harness 解析），用最小结构类型按名消费服务；服务缺失/调用失败均返回
 * 可读错误，不拖垮整个工作台。
 */
import type { Context } from "@deepseek-ai/cordis";
import { readFile, stat } from "node:fs/promises";
import { basename } from "node:path";

/** 发起结果：ok=false 时 error 为可读原因；sessionId/childId 为官方子会话 id。 */
export interface SubagentSpawnResult {
  ok: boolean;
  /** 官方子代理会话 id（startContinuable 的 childId，或一次性 run 的 id）。 */
  sessionId?: string;
  runId?: string;
  /** 实际使用的 provider（fork / spawn）。 */
  provider?: string;
  /** 实际走的通道：continuable=持久会话（会进官方视图）；oneshot=一次性运行。 */
  mode?: "continuable" | "oneshot";
  /** 一次性运行模式下回传的最终文本（continuable 模式不等待，为空）。 */
  output?: string;
  error?: string;
}

/** 注入到子代理初始提示词里的文件正文上限（超出截断并提示）。 */
const MAX_CONTEXT_CHARS = 16000;

/** 读取目标文件的文本快照（目录/读取失败返回 undefined 或可读占位）。 */
async function readFileContext(path: string, isDir: boolean): Promise<string | undefined> {
  if (isDir) return undefined;
  let buf: Buffer;
  try {
    const st = await stat(path);
    if (!st.isFile()) return undefined;
    if (st.size > 4 * 1024 * 1024) return `[${basename(path)}] 文件过大（${st.size} bytes），未读取正文。`;
    buf = await readFile(path);
  } catch {
    return `[${basename(path)}] 无法读取文件内容。`;
  }
  let text = buf.toString("utf8");
  if (text.length > MAX_CONTEXT_CHARS) {
    text = text.slice(0, MAX_CONTEXT_CHARS) + `\n…[内容已截断，原文件共 ${buf.length} bytes]。`;
  }
  return text;
}

/** 组装子代理的初始提示词：目标 + 指令 +（可选）文件正文快照。 */
export function buildSpawnPrompt(path: string, isDir: boolean, instruction: string, content?: string): string {
  const lines: string[] = [];
  if (path) {
    const kind = isDir ? "文件夹" : "文件";
    lines.push(`当前处理目标${kind}：${path}`, `你是由文件工作台发起的子代理，负责就地处理这个目标。`);
    if (content !== undefined) {
      lines.push(`\n目标${kind}的当前正文内容（只读参考快照，请自行读取/修改目标完成工作）：\n\`\`\`\n${content}\n\`\`\``);
    }
    if (isDir) {
      lines.push(`\n注：目标是文件夹。你可以列目录、读取其中的文件，并在适当情况下创建/修改文件。工作目录即为该文件夹。`);
    }
  } else {
    lines.push(`你是由文件工作台发起的子代理，请与用户对话并完成其交代的任务。`);
  }
  if (instruction.trim()) lines.push(`\n用户指令：\n${instruction.trim()}`);
  lines.push(`\n如需改动代码/文件，请实际落盘后再总结改动与验证结果；不要编造未执行的操作。可在本会话中继续与用户对话。`);
  return lines.join("\n");
}

/** 把任意错误尽量完整地文本化（含 error.code / 堆栈，便于定位）。 */
function describeError(error: unknown): string {
  if (!(error instanceof Error)) return String(error);
  const code = (error as { code?: unknown }).code;
  const prefix = typeof code === "string" && code ? `[${code}] ` : "";
  const stack = error.stack && error.stack.replace(/^\S+\s*/, "") ? `\n${error.stack}` : "";
  return `${prefix}${error.message}${stack}`;
}

/**
 * 解析父级「活」Agent：官方子代理必须挂到一个真实 Agent 下（fork 还要读父会话
 * 已完成 turns 作 seed）。优先按会话 id 从 `agents` 注册表取；缺省回退当前活跃 agent。
 * 仅当解析到带 `.options`（能供 resolveChildDepth 读取 subagentDepth）的真实 Agent 才返回。
 */
export function resolveLiveParent(ctx: Context, sessionId?: string): unknown {
  let agents: { get?: (id: string) => unknown; current?: unknown; active?: unknown } | undefined;
  try {
    const c = ctx as unknown as { get?: (name: string) => unknown; agents?: unknown };
    agents = (c.get?.("agents") ?? c.agents) as typeof agents | undefined;
  } catch {
    /* ignore */
  }
  if (!agents) return undefined;
  const hasOptions = (agent: unknown): agent is Record<string, unknown> =>
    !!agent && typeof agent === "object" && !!((agent as Record<string, unknown>).options);
  if (sessionId && typeof agents.get === "function") {
    const byId = agents.get(sessionId);
    if (hasOptions(byId)) return byId;
  }
  for (const key of ["current", "active"] as const) {
    const via = agents[key];
    if (typeof via === "function") {
      try {
        const resolved = (via as () => unknown)();
        if (hasOptions(resolved)) return resolved;
      } catch {
        /* ignore */
      }
    }
  }
  return undefined;
}

/** 宿主 0.1.5 subagents 服务的最小接缝类型（按真实公开面声明）。 */
interface SubagentRuntimeLite {
  /** 已注册 provider 名列表。 */
  list?: () => string[];
  /** 一次性运行：await (await start(...)).result 取终态。 */
  start?: (name: string, request: Record<string, unknown>) => Promise<SubagentRunLite>;
  /** 持久可续子代理：返回 { childId, messageId }。 */
  startContinuable?: (spec: Record<string, unknown>) => Promise<{ childId?: string; messageId?: string }>;
}

interface SubagentRunLite {
  id?: string;
  result?: Promise<{ output?: unknown; lastAssistantMessage?: unknown; stopReason?: string; diagnostic?: string }>;
  dispose?: () => Promise<void>;
}

/** 从终态结果里尽力提取可展示的文本（内容块数组 / 纯文本 / 嵌套结构）。 */
function finalOutputText(result: { output?: unknown; lastAssistantMessage?: unknown } | undefined): string {
  const acc: string[] = [];
  const pick = (chunk: unknown): void => {
    if (chunk === undefined || chunk === null) return;
    if (typeof chunk === "string") {
      acc.push(chunk);
      return;
    }
    if (Array.isArray(chunk)) {
      for (const item of chunk) pick(item);
      return;
    }
    if (typeof chunk === "object") {
      const obj = chunk as Record<string, unknown>;
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

/** 选取 provider：优先 fork（继承父会话上下文，实测稳定），其次 spawn，再退到首个可用。 */
function pickProvider(runtime: SubagentRuntimeLite): string {
  let names: string[] = [];
  try {
    const listed = typeof runtime.list === "function" ? runtime.list() : undefined;
    if (Array.isArray(listed)) names = listed.filter((n): n is string => typeof n === "string");
  } catch {
    /* ignore */
  }
  if (!names.length) return "fork";
  if (names.includes("fork")) return "fork";
  if (names.includes("spawn")) return "spawn";
  return names[0] ?? "fork";
}

/**
 * 发起子代理（0.1.5 方式）。
 *
 * 首选 `startContinuable`：在宿主会话树里建立**持久可续**子代理，返回 childId，
 * 该子会话会直接出现在官方子代理会话视图中并可继续对话。
 * 回退 `start()`：一次性运行，等待终态并把最终文本回传。
 *
 * 返回 { ok, sessionId, ... }；服务缺失/父 Agent 解析失败/调用异常均返回
 * { ok:false, error }（不抛异常）。
 */
export async function spawnSubagent(
  ctx: Context,
  opts: { path?: string; isDir?: boolean; instruction?: string; sessionId?: string },
): Promise<SubagentSpawnResult> {
  // 1) 取 subagents 服务。
  let runtime: SubagentRuntimeLite | undefined;
  try {
    runtime = (ctx as unknown as { get?: (name: string) => unknown }).get?.("subagents") as
      | SubagentRuntimeLite
      | undefined;
  } catch {
    /* ignore */
  }
  if (!runtime || (typeof runtime.start !== "function" && typeof runtime.startContinuable !== "function")) {
    return {
      ok: false,
      error:
        "subagents 服务不可用：宿主未加载 @deepseek-ai/dsh-subagent（需在 profile 组合中启用该服务及 fork/spawn provider）。",
    };
  }

  // 2) 组装初始提示词（带目标路径；文件读正文快照注入）。
  const path = typeof opts.path === "string" ? opts.path.trim() : "";
  const isDir = opts.isDir === true;
  const content = path && !isDir ? await readFileContext(path, isDir) : undefined;
  const prompt = buildSpawnPrompt(path, isDir, opts.instruction ?? "", content);

  // 3) 解析父级活 Agent——官方子代理的硬性前提（startContinuable/start 都要求）。
  const parent = resolveLiveParent(ctx, opts.sessionId);
  if (parent === undefined) {
    return {
      ok: false,
      error:
        "无法解析当前会话的「活」Agent 作为父级：请先在聊天会话中发起一次对话后再试（官方子代理必须挂在真实会话 Agent 下）。",
    };
  }

  const provider = pickProvider(runtime);
  const label = path ? `workbench:${basename(path)}` : "workbench:subagent";
  // prompt 必须是内容块数组 [{type:'text',text}]——与宿主官方 dsh-tool-subagent 一致；
  // 传纯字符串会让子代理首步 message.content.map 崩溃（宿主 in-process driver 缺陷）。
  const blocks = [{ type: "text", text: prompt }];
  const controller = new AbortController();

  // 4) 优先 startContinuable：建立持久子会话 → 直接进官方子代理会话视图。
  if (typeof runtime.startContinuable === "function") {
    try {
      const started = await runtime.startContinuable({
        provider,
        label,
        request: { prompt: blocks, parent, maxDepth: 3 },
        signal: controller.signal,
      });
      const childId = started?.childId;
      if (typeof childId === "string" && childId) {
        return { ok: true, sessionId: childId, runId: childId, provider, mode: "continuable" };
      }
      // 没有 childId 视为未真正建立，继续回退到一次性运行。
    } catch (error) {
      const msg = describeError(error);
      // 宿主明确不支持 continuable 能力时回退；其余错误（如父级 drain）直接透出。
      if (!/prepareContinuable|not support|unsupported|CAPABILITY|unknown method/i.test(msg)) {
        return { ok: false, error: `子代理发起失败（continuable）：${msg}` };
      }
    }
  }

  // 5) 回退：一次性运行（start），等待终态文本。
  if (typeof runtime.start !== "function") {
    return { ok: false, error: "subagents 服务既不支持 startContinuable 也不支持 start，无法发起子代理。" };
  }
  let run: SubagentRunLite;
  try {
    run = await runtime.start(provider, {
      prompt: blocks,
      label,
      maxDepth: 3,
      signal: controller.signal,
      parent,
    });
  } catch (error) {
    return { ok: false, error: `子代理发起失败（oneshot）：${describeError(error)}` };
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
      output: output || (failed ? "" : "(子代理已完成处理，但未返回文字内容)"),
      error: failed ? `子代理运行终止且未产出内容（原因：${stop}${result?.diagnostic ? `；诊断：${result.diagnostic}` : ""}）` : undefined,
    };
  } catch (error) {
    return { ok: false, error: `子代理运行失败：${describeError(error)}` };
  } finally {
    try {
      await run.dispose?.();
    } catch {
      /* dispose 失败仅忽略 */
    }
  }
}
