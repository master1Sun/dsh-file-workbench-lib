/**
 * 只读接口的「在途合并 + 短 TTL 结果缓存」。
 *
 * ## 为什么需要
 *
 * DSH 切换右侧面板 tab 会把整个 Vue 应用**卸载再重建**（React 桥接层的行为），
 * 组件里的任何缓存都随卸载消失。而「文件编辑器」面板挂载时要问一堆东西：
 * 列目录（每个已展开目录一次）/ git 状态 / svn 探测 / 仓库类型 / 项目文件索引 …
 * 实测一次切换 6~12 个请求，目录树展开得多时（默认展开就有二十来个目录）能到几十个。
 * 关键在于：这些请求**在同一分钟内重复问，答案是一样的**，纯属浪费
 * （host 侧还要重新 stat 目录、为每个目录起 git/svn 子进程）。
 *
 * ## 两条机制
 *
 *  1. **在途合并**：同一个 key 的并发请求只打一次网络，其余等同一个 Promise。
 *     多个编辑器分栏同时挂载时（各自都要问同一个目录）尤其明显。
 *  2. **短 TTL 结果缓存**：TTL 内的重复读取直接返回上次结果，不发请求。
 *
 * ## 使用纪律（⛔ 违反会出「改了不生效」的怪 bug）
 *
 *  - **只给幂等只读接口用**。写操作一律不缓存；且写成功后必须 `invalidateRead(...)`
 *    清掉受影响的读缓存，否则会出现「刚建的文件刷新看不到」。
 *  - **调用方不得就地修改返回值**：命中的多个调用方拿到的是**同一个对象**。
 *    需要加工请自行派生新对象（列表排序/过滤都会新建数组，属于安全用法）。
 *  - 读失败**不入缓存**：错误往往是瞬时的（host 重启 / 请求被取消），缓存它会让面板
 *    在一段时间内持续拿到同一个失败。
 */
/** 默认保鲜时长（毫秒）。够覆盖「切走再切回」的常见间隔，又不至于让内容明显陈旧。 */
export const READ_TTL_MS = 30_000;

interface CacheEntry {
  /** 写入时刻（毫秒戳）。 */
  at: number;
  value: unknown;
}

/** key → 已完成的读结果。 */
const results = new Map<string, CacheEntry>();
/** key → 在途请求（合并并发同 key 的读取）。 */
const inflight = new Map<string, Promise<unknown>>();

/**
 * 带缓存的只读请求。
 *
 * @param key - 缓存键，必须**完整编码**该请求的全部入参（路径、根 key、条数…），
 *   否则不同参数的读取会互相命中。约定用 `前缀:参数:参数` 的形态（如 `list:vscode:D:\a`），
 *   前缀同时作为 `invalidateRead(prefix)` 的失效粒度。
 * @param load - 未命中时真正发起请求的工厂函数。
 * @param ttlMs - 保鲜时长，缺省 {@link READ_TTL_MS}。
 */
export function cachedRead<T>(key: string, load: () => Promise<T>, ttlMs: number = READ_TTL_MS): Promise<T> {
  const hit = results.get(key);
  if (hit && Date.now() - hit.at < ttlMs) return Promise.resolve(hit.value as T);
  // 已有同 key 在途：搭车，不再发一次。
  const pending = inflight.get(key);
  if (pending) return pending as Promise<T>;
  const p = load().then(
    (value) => {
      results.set(key, { at: Date.now(), value });
      inflight.delete(key);
      return value;
    },
    (err: unknown) => {
      inflight.delete(key);
      throw err;
    },
  );
  inflight.set(key, p);
  return p;
}

/**
 * 清掉读缓存。
 *
 * @param prefix - 只清以该前缀开头的键（如 `"git"`）；缺省清空全部。
 *   写操作后调用（见 `useApi` 里的写接口），或用户点了「刷新」这类明确要最新数据的动作。
 * @returns 清掉的条数（供调试/断言使用）。
 */
export function invalidateRead(prefix = ""): number {
  let n = 0;
  if (!prefix) {
    n = results.size;
    results.clear();
    return n;
  }
  for (const k of [...results.keys()]) {
    if (k.startsWith(prefix)) {
      results.delete(k);
      n++;
    }
  }
  return n;
}

/** 当前缓存键快照（调试/回归断言用；在生产代码里不要依赖它做逻辑判断）。 */
export function readCacheKeys(): string[] {
  return [...results.keys()];
}

/** 清空全部缓存状态（含在途登记）。仅用于独立调试与回归脚本。 */
export function resetReadCache(): void {
  results.clear();
  inflight.clear();
}
