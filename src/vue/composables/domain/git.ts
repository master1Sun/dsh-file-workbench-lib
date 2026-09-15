/**
 * Git 状态 store（状态徽标 + 右键菜单的只读状态查询）。
 *
 * 按目录缓存「紧邻子项」的聚合 git 状态，供文件列表在详情/列表/图标三视图
 * 渲染角标；写操作（add/commit/discard）由调用方经 useApi 发起后统一刷新本缓存。
 */
import { reactive } from "vue";
import type { GitFileStatus } from "../../../shared/types";
import * as api from "../core/useApi";

/** 目录 → 该目录 git 状态快照。 */
export const gitState = reactive<{ dirs: Record<string, { inRepo: boolean; branch: string; entries: Record<string, GitFileStatus> }> }>(
  { dirs: {} },
);

/** 拉取并缓存某目录的 git 状态；失败时静默（徽标缺失不阻断浏览）。 */
export async function refreshGitStatus(dir: string): Promise<void> {
  // 远端（ssh）目录：git 徽标首版不支持，直接跳过——否则 host 侧会把 ssh:// 引用当成
  // 本地路径去 requireAbsolute（400「不是绝对路径」），每进一个远端目录弹一次错。
  if (!dir || api.isRemoteRef(dir)) return;
  try {
    const s = await api.gitStatus(dir);
    gitState.dirs[dir] = { inRepo: s.inRepo, branch: s.branch ?? "", entries: s.entries };
  } catch {
    /* 非仓库/出错时不缓存，避免在受保护或无权限区域反复报错 */
  }
}

/** 某目录是否位于 git 仓库内。 */
export function gitInRepo(dir: string): boolean {
  return gitState.dirs[dir]?.inRepo ?? false;
}

/** 某目录所在仓库的当前分支名（非仓库为空）。 */
export function gitBranch(dir: string): string {
  return gitState.dirs[dir]?.branch ?? "";
}

/** 该目录下某子项（名称）的 git 状态；无记录或非仓库返回 ""。 */
export function gitStatusOf(dir: string, name: string): GitFileStatus {
  return gitState.dirs[dir]?.entries?.[name] ?? "";
}