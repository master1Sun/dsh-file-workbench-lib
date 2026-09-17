/**
 * 客户端行级 diff：生成类 unified diff 文本（+/-/上下文行），供 GitDiffView 直接着色渲染。
 *
 * 用途是「查看本地改动」（未保存缓冲区 vs 磁盘内容）——host 无法 diff 内存里的内容，
 * 客户端自己算。算法是 trimmed LCS：先削去公共前后缀，再对中间段做经典 LCS DP。
 * 为防 O(n·m) 内存爆炸，中间段超过 1500×1500 时放弃精确 diff（返回 null，调用方给提示）。
 *
 * 输出行格式与 `git diff` 一致的口径：`---`/`+++`/`@@` 与 `+`/`-`/前缀空格，
 * GitDiffView.diffLineKind 按前缀着色（add/del/meta/head/context）。
 */

/** 中间段（去公共前后缀后）单边行数上限，超过即放弃精确 diff。 */
const MAX_SEG = 1500;

export interface LineDiffResult {
  /** unified 风格文本行；空数组表示无差异。 */
  lines: string[];
}

/**
 * 计算两份文本的行级 diff。
 * @returns null 表示差异过大无法精确计算（调用方自行提示）。
 */
export function diffLines(oldText: string, newText: string): LineDiffResult | null {
  const a = oldText.split("\n");
  const b = newText.split("\n");
  if (oldText === newText) return { lines: [] };

  // 削去公共前后缀，把 DP 规模压到真正的差异区域。
  let start = 0;
  while (start < a.length && start < b.length && a[start] === b[start]) start += 1;
  let endA = a.length;
  let endB = b.length;
  while (endA > start && endB > start && a[endA - 1] === b[endB - 1]) {
    endA -= 1;
    endB -= 1;
  }
  const midA = a.slice(start, endA);
  const midB = b.slice(start, endB);
  if (midA.length > MAX_SEG || midB.length > MAX_SEG) return null;

  // LCS DP（Int32Array 扁平化，1500×1500 ≈ 9MB）。
  const n = midA.length;
  const m = midB.length;
  const dp = new Int32Array((n + 1) * (m + 1));
  const at = (i: number, j: number): number => i * (m + 1) + j;
  for (let i = n - 1; i >= 0; i -= 1) {
    for (let j = m - 1; j >= 0; j -= 1) {
      dp[at(i, j)] =
        midA[i] === midB[j] ? dp[at(i + 1, j + 1)] + 1 : Math.max(dp[at(i + 1, j)], dp[at(i, j + 1)]);
    }
  }

  // 回溯出编辑脚本（删/增/保留）。
  const ops: Array<{ kind: "-" | "+" | " "; text: string }> = [];
  let i = 0;
  let j = 0;
  while (i < n && j < m) {
    if (midA[i] === midB[j]) {
      ops.push({ kind: " ", text: midA[i] });
      i += 1;
      j += 1;
    } else if (dp[at(i + 1, j)] >= dp[at(i, j + 1)]) {
      ops.push({ kind: "-", text: midA[i] });
      i += 1;
    } else {
      ops.push({ kind: "+", text: midB[j] });
      j += 1;
    }
  }
  while (i < n) {
    ops.push({ kind: "-", text: midA[i] });
    i += 1;
  }
  while (j < m) {
    ops.push({ kind: "+", text: midB[j] });
    j += 1;
  }

  // 按上下文 3 行聚合成 hunk（与 git diff 的展示习惯一致）。
  const CTX = 3;
  const lines: string[] = [`--- 磁盘版本`, `+++ 未保存改动`];
  let k = 0;
  while (k < ops.length) {
    if (ops[k].kind === " ") {
      k += 1;
      continue;
    }
    // hunk 起点：向前带最多 CTX 行上下文。
    let from = Math.max(0, k - CTX);
    while (from > 0 && ops[from].kind === " " && k - from < CTX) from -= 1;
    // hunk 终点：连续改动之间上下文不足 2×CTX 才切分。
    let to = k;
    let gap = 0;
    let lastChange = k;
    while (to < ops.length) {
      if (ops[to].kind !== " ") {
        gap = 0;
        lastChange = to;
      } else {
        gap += 1;
        if (gap >= CTX * 2) break;
      }
      to += 1;
    }
    const end = Math.min(ops.length, lastChange + 1 + CTX);
    const seg = ops.slice(from, end);
    const oldStart = start + from + 1;
    const newStart = start + from + 1;
    lines.push(`@@ -${oldStart} +${newStart} @@`);
    for (const op of seg) lines.push(op.kind + op.text);
    k = end;
  }
  return { lines };
}
