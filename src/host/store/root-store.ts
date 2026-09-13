/**
 * 工作区根目录注册表：为「允许用户在自选目录内浏览文件」提供根，按 key 隔离。
 *
 * 相比 dsh-better-sidebar 依赖会话工作区（session.cwd），本插件让用户显式「打开文件夹」，
 * 之后所有读写路径都必须在所设 root 之内（fs-tree 的 containment 守卫保证）。
 */
const store = new Map<string, string>();
const DEFAULT_KEY = "default";

export function setRoot(key: string | undefined, root: string): string {
  const k = key || DEFAULT_KEY;
  store.set(k, root);
  return root;
}

export function getRoot(key: string | undefined): string | undefined {
  return store.get(key || DEFAULT_KEY);
}

export function clearRoot(key: string | undefined): void {
  store.delete(key || DEFAULT_KEY);
}