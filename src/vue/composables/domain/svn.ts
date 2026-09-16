/**
 * SVN 工作副本探测缓存（右键菜单显隐用）。
 *
 * 按目录缓存「是否处于 SVN 工作副本内」，随目录浏览刷新；
 * 与 git.ts 的 gitState 同构：列表渲染只做同步读，探测由目录切换时异步发起。
 */
import { reactive } from "vue";
import * as api from "../core/useApi";

/** 目录 → SVN 探测快照。 */
export const svnState = reactive<{ dirs: Record<string, { inRepo: boolean }> }>({ dirs: {} });

/** 拉取并缓存某目录的 SVN 探测结果；失败时静默（菜单缺失不阻断浏览）。 */
export async function refreshSvnStatus(dir: string): Promise<void> {
  // 远端（ssh）目录同样探测：host 侧对 ssh:// 引用走 SSH exec 在远端执行 svn info。
  if (!dir) return;
  try {
    const s = await api.svnInfo(dir);
    svnState.dirs[dir] = { inRepo: !!s.inRepo };
  } catch {
    /* 探测失败不缓存，避免在受保护或无权限区域反复报错 */
  }
}

/** 某目录是否位于 SVN 工作副本内。 */
export function svnInWc(dir: string): boolean {
  return svnState.dirs[dir]?.inRepo ?? false;
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
