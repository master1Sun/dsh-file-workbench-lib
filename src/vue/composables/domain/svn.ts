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
