/**
 * 虚拟滚动（三处统一接入：文件列表 / 搜索结果 / AI 对话轮次）。
 * 只渲染视口附近的行，配合上/下自留白撑起真实滚动高度。
 *
 * - useUniformVirtual：等行高列表（文件列表详情/列表视图）。行高已知，O(1) 窗口。
 * - useMeasuredVirtual：变高列表（搜索结果、聊天轮次）。用 ResizeObserver 逐个测量，
 *   未测项回退到 estimate，窗口随实测高度逐步校准。
 */
import { nextTick, onScopeDispose, ref, watch, type ComponentPublicInstance, type Ref } from "vue";

export interface VirtualRange {
  start: number;
  end: number;
  padBefore: number;
  padAfter: number;
  total: number;
}

const EMPTY: VirtualRange = { start: 0, end: 0, padBefore: 0, padAfter: 0, total: 0 };

function clamp(n: number, max: number): number {
  return n < 0 ? 0 : n > max ? max : n;
}

/**
 * 等行高虚拟滚动。
 * @param container 滚动容器（必须已挂载后才能量到尺寸）
 * @param count     渲染行总数
 * @param rowHeight 单行像素高度
 * @param buffer    上下额外渲染的缓冲行数
 */
export function useUniformVirtual(
  container: Ref<HTMLElement | null>,
  count: Ref<number>,
  rowHeight: number,
  buffer = 8,
) {
  const range = ref<VirtualRange>({ ...EMPTY });

  function compute(): void {
    const el = container.value;
    const n = count.value;
    if (!el || n <= 0 || el.clientHeight <= 0) {
      range.value = { ...EMPTY };
      return;
    }
    const st = Math.max(0, el.scrollTop);
    const start = clamp(Math.floor(st / rowHeight) - buffer, n);
    const vis = Math.ceil(el.clientHeight / rowHeight) + buffer * 2;
    const end = clamp(start + vis, n);
    range.value = {
      start,
      end,
      padBefore: start * rowHeight,
      padAfter: (n - end) * rowHeight,
      total: n * rowHeight,
    };
  }

  function onScroll(): void {
    compute();
  }

  // 监听容器自身尺寸变化（窗口/面板拖动、resize 等），变化即重算虚拟窗口。
  let sizeObs: ResizeObserver | null = null;
  watch(container, (el) => {
    if (sizeObs) {
      sizeObs.disconnect();
      sizeObs = null;
    }
    void nextTick(compute);
    if (el) {
      sizeObs = new ResizeObserver(() => {
        // 内容高度变化同样会改变容器内容尺寸，借同一回调兜底校准。
        compute();
      });
      sizeObs.observe(el);
    }
  });
  watch(count, () => {
    void nextTick(compute);
  });
  // 组件卸载时释放尺寸观察，避免闭包长期持有已卸载元素。
  onScopeDispose(() => {
    sizeObs?.disconnect();
    sizeObs = null;
  });

  return { range, onScroll, compute };
}

/**
 * 变高虚拟滚动（弹窗内统一封装）。
 * @param container 滚动容器
 * @param count     渲染行总数
 * @param estimate  未测量行的估算高度
 * @param buffer    上下额外渲染的缓冲行数
 */
export function useMeasuredVirtual(
  container: Ref<HTMLElement | null>,
  count: Ref<number>,
  estimate = 90,
  buffer = 3,
) {
  const heights: number[] = [];
  const range = ref<VirtualRange>({ ...EMPTY });
  const indexOf = new WeakMap<Element, number>();
  let observer: ResizeObserver | null = null;

  function ensureObserver(): ResizeObserver {
    if (!observer) {
      observer = new ResizeObserver((entries) => {
        let dirty = false;
        for (const en of entries) {
          const idx = indexOf.get(en.target);
          if (idx === undefined) continue;
          const h = Math.max(1, Math.round(en.contentRect.height));
          if (heights[idx] !== h) {
            heights[idx] = h;
            dirty = true;
          }
        }
        if (dirty) compute();
      });
    }
    return observer;
  }

  function sizeAt(i: number): number {
    return heights[i] ?? estimate;
  }

  function compute(): void {
    const el = container.value;
    const n = count.value;
    if (!el || n <= 0 || el.clientHeight <= 0) {
      range.value = { ...EMPTY };
      return;
    }
    if (heights.length > n) heights.length = n;
    const st = Math.max(0, el.scrollTop);
    const off = new Array<number>(n + 1);
    off[0] = 0;
    for (let i = 0; i < n; i++) off[i + 1] = off[i] + sizeAt(i);
    const total = off[n];
    // 二分定位起始下标
    let lo = 0;
    let hi = n;
    const key = st - buffer * estimate;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (off[mid] < key) lo = mid + 1;
      else hi = mid;
    }
    let start = Math.max(0, lo - buffer);
    // 向后扩展窗口
    let end = start;
    const bottom = st + el.clientHeight + buffer * estimate;
    while (end < n && off[end + 1] <= bottom) end++;
    end = Math.min(n, end + buffer);
    range.value = {
      start,
      end,
      padBefore: off[start],
      padAfter: total - off[end],
      total,
    };
  }

  function onScroll(): void {
    compute();
  }

  // 监听滚动容器自身尺寸变化（窗口/面板拖动、resize、行高变化累积为内容尺寸变化），变化即重算。
  let sizeObs: ResizeObserver | null = null;
  watch(container, (el) => {
    if (sizeObs) {
      sizeObs.disconnect();
      sizeObs = null;
    }
    void nextTick(compute);
    if (el) {
      sizeObs = new ResizeObserver(() => compute());
      sizeObs.observe(el);
    }
  });
  // count 变化在下方统一 watch；此处不再重复监听 container。

  /** 供模板 :ref="measure(idx)" 使用：把渲染行与下标绑定并测量其真实高度。 */
  function measure(index: number) {
    // 形参兼容 Vue VNodeRef（可能传入组件实例或元素），统一按元素处理。
    return (el: ComponentPublicInstance | Element | null): void => {
      const node = el as Element | null;
      if (!node) return;
      const ob = ensureObserver();
      if (heights.length < index + 1) heights.length = index + 1;
      indexOf.set(node, index);
      ob.observe(node);
      const h = Math.max(1, Math.round(node.getBoundingClientRect().height));
      if (heights[index] !== h) {
        heights[index] = h;
        // 元素初次挂载即校准，避免滚动偏移
        void nextTick(compute);
      }
    };
  }

  /** 列表清空/换新数据时重置测量缓存。 */
  function resetHeights(): void {
    heights.length = 0;
    void nextTick(compute);
  }

  // 行数变化（新消息/清空/切换目标）后校准虚拟窗口。
  watch(count, () => {
    void nextTick(compute);
  });

  // 组件卸载时释放所有观察，避免闭包长期持有已卸载元素。
  onScopeDispose(() => {
    sizeObs?.disconnect();
    sizeObs = null;
    observer?.disconnect();
    observer = null;
  });

  return { range, onScroll, compute, measure, resetHeights };
}