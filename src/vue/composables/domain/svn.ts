/**
 * SVN 工作副本探测缓存（右键菜单显隐用）。
 *
 * 按目录缓存「是否处于 SVN 工作副本内」，随目录浏览刷新；
 * 与 git.ts 的 gitState 同构：列表渲染只做同步读，探测由目录切换时异步发起。
 */
import { reactive } from "vue";
import type { GitFileStatus } from "../../../shared/types";
import * as api from "../core/useApi";

/**
 * 目录 → SVN 工作副本快照（与 gitState 同构）。
 *
 * `inRepo` 用于菜单/栏显隐；`entries` 是该目录下**紧邻子项**的状态映射
 * （子项名 → GitFileStatus，复用 git 的状态语义），供文件树/文件列表渲染
 * 与 git 同款的「改变的路径」徽标。状态字母与界面语言无关（固定 ASCII），
 * 因此解析 `svn status` 输出安全。
 */
export const svnState = reactive<{
  dirs: Record<string, { inRepo: boolean; entries: Record<string, GitFileStatus> }>;
}>({ dirs: {} });

/** 拉取并缓存某目录的 SVN 探测结果与紧邻子项状态；失败时静默（徽标缺失不阻断浏览）。 */
export async function refreshSvnStatus(dir: string): Promise<void> {
  // 远端（ssh）目录同样探测：host 侧对 ssh:// 引用走 SSH exec 在远端执行 svn info / svn status。
  if (!dir) return;
  try {
    const s = await api.svnInfo(dir);
    if (!s.inRepo || !s.svnAvailable) {
      svnState.dirs[dir] = { inRepo: false, entries: {} };
      return;
    }
    // 取该目录紧邻子项状态（immediates：目录自身 + 直接子项，不递归进子目录）。
    // 与 git 的 `gitStatus(dir)` 返回的「紧邻子项」语义一致，便于复用同一套徽标渲染。
    const r = await api.svnRun(dir, ["status", "--depth", "immediates"]);
    const entries: Record<string, GitFileStatus> = {};
    if (r.code === 0) {
      for (const line of (r.stdout || "").split(/\r?\n/)) {
        if (!line.trim()) continue;
        // 前 8 列是状态区，其后是路径；取第 1 列字母（A/M/D/R/C/?/! …）做状态码。
        const code = (line.slice(0, 8)[0] ?? "").trim();
        let path = line.slice(8).trim();
        // 去掉尾部斜杠（目录条目），再取末段名作为子项键。
        path = path.replace(/[\\/]+$/, "");
        if (!path || path === "." || path === "..") continue;
        const name = path.split(/[\\/]/).pop() ?? path;
        const st = svnCodeToStatus(code);
        if (st) entries[name] = st;
      }
    }
    svnState.dirs[dir] = { inRepo: true, entries };
  } catch {
    /* 探测/状态读取失败不缓存，避免在受保护或无权限区域反复报错 */
  }
}

/** 某目录是否位于 SVN 工作副本内。 */
export function svnInWc(dir: string): boolean {
  return svnState.dirs[dir]?.inRepo ?? false;
}

/** 该目录下某子项（名称）的 SVN 状态；无记录或非工作副本返回 ""。 */
export function svnStatusOf(dir: string, name: string): GitFileStatus {
  return svnState.dirs[dir]?.entries?.[name] ?? "";
}

/**
 * svn 状态首字母 → git 同款状态语义（仅取徽标需要的子集）。
 * A 新增 / M 修改 / D 删除 / ? 未版本控制 / R 替换≈修改 / C 冲突≈修改 /
 * ! 缺失≈删除；其余（I 忽略、~  obstructed、G/U 等合并结果）不挂徽标。
 */
function svnCodeToStatus(code: string): GitFileStatus {
  switch (code) {
    case "A":
      return "added";
    case "M":
      return "modified";
    case "D":
      return "deleted";
    case "?":
      return "untracked";
    case "R":
      return "modified";
    case "!":
      return "deleted";
    case "C":
      return "modified";
    default:
      return "";
  }
}

/**
 * 统计 `svn update` 输出里被更新的条目数（0 = 无变更，即「已经是最新」）。
 *
 * 每个被新增/更新/删除/冲突/合并的条目输出一行「状态字母 + 空白 + 路径」，如
 * `A    new.txt` / `U    src/a.ts` / `D    b.txt`；字母取自 svn 的固定集合 A/D/U/G/C/E/R，
 * **与界面语言无关**，因此可以安全按行解析。
 *
 * 允许**一个前导空格**：属性变更（propset/propdel 同步下来）落在第 2 列，实测输出形如
 * `" U   a.txt"`（svn 1.8.17 + zh_CN），漏掉它会把「只有属性更新」误报成「已是最新」。
 *
 * 提示行不会误计：`正在升级 '.':` / `版本 2。` / `更新到版本 2。`（英文 `Updating '.'` /
 * `At revision 2.` / `Updated to revision 2.`）首字符都不满足「字母 + 空白」形状；
 * 冲突概要块的行（`"  正文冲突：1"`）有两个前导空格，同样不匹配。
 */
export function countSvnUpdateEntries(out: string): number {
  return (out || "").split(/\r?\n/).filter((l) => /^\s?[ADUGCER]{1,3}\s+\S/.test(l)).length;
}

/**
 * 从 `svn update` 输出里取结果版本号（读不到返回 null）。
 *
 * 版本提示行随界面语言变化，实测 svn 1.8.17：
 *   英文 `At revision 2.` / `Updated to revision 2.`
 *   中文 `版本 2。` / `更新到版本 2。`
 * 两者都是「revision|版本 + 数字」同一形状，故用该形状匹配并取**最后一处**
 * （`正在升级 '.':`、条目行都不含此形状，不会误取）。
 *
 * 用于 `svn info` 读不到版本号时的兜底——否则摘要会显示 `r?`。
 */
export function svnRevisionFromUpdate(out: string): string | null {
  const ms = [...(out || "").matchAll(/(?:revision|版本)\s*(\d+)/gi)];
  return ms.length ? ms[ms.length - 1][1] : null;
}
