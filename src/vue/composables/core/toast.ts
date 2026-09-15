/**
 * 消息提示（Toast）状态：右下角堆叠浮层，倒计时自动关闭 + 可手动关闭。
 *
 * 为什么自建而不用 Element Plus 的 ElMessage：ElMessage 固定从视口**顶部**弹出，且不支持
 * 倒计时读数、关闭按钮外观也不可定制。这里改为「模块级队列 + 单独挂在 body 上的宿主组件」
 * （见 components/common/ToastHost.vue），额外好处是两个面板（文件工作台 / 文件编辑器）
 * 共用同一份队列 —— 提示不会随面板切换被重建，也不会因两个面板同时挂载而重复弹出。
 *
 * ⚠️ 队列必须**跨模块实例共享**，这是本文件把状态挂到 globalThis 的原因：
 * DSH 会在页面存活期间重新注入插件 bundle（入口 hash 一变就换了脚本 URL，浏览器按 URL
 * 缓存模块 → 同一文档里出现**第二份模块实例**）。此时若队列是模块局部变量，而宿主 DOM 又按
 * `#dsh-toast-root` 去重（第二个实例直接跳过挂载），就会出现「宿主在、面板一切正常，但提示一条
 * 都不出」——活跃 UI 把提示推进了新实例的队列，渲染队列的却是旧实例的宿主。
 * 实测复现：双实例下 `.fw-toast-host` 存在，而 `.fw-toast` 恒为 0。
 * 挂到 globalThis 后（与本插件既有的 `window.__DSH_SIDEBAR_RIGHT__` 同思路），任意实例 push
 * 的提示都能被任一已挂载宿主渲染，`app` 字段同时充当「宿主是否已挂载」的跨实例标记。
 *
 * 调用方统一走 toast(kind, message)（与旧签名一致）；需要更长驻留或「不自动关闭」时传 duration。
 */
import { ref, type Ref } from "vue";

/** 提示种类（warning 为新增，用于「参数没填全」这类非失败型提醒）。 */
export type ToastKind = "ok" | "error" | "info" | "warning";

export interface ToastItem {
  id: number;
  kind: ToastKind;
  message: string;
  /** 自动关闭的总时长（ms）；0 表示不自动关闭（只能点 X 关闭）。 */
  duration: number;
  /** 剩余毫秒：由 ToastHost 的节拍器递减，驱动倒计时读数与进度条。 */
  remain: number;
  /** 鼠标悬停暂停中（暂停期间不走表，方便读完长文本）。 */
  paused: boolean;
}

/**
 * 各类提示的默认驻留时长。
 * 失败信息通常更长（要看清原因，如 ssh 报错常常一整行），成功/信息类快速退场不挡视线。
 */
const DURATION: Record<ToastKind, number> = {
  ok: 3000,
  info: 3000,
  warning: 4500,
  error: 6000,
};

/** 同屏最多保留的条数：超出时让最早的先退场，避免密集报错把整屏堆满。 */
const MAX_TOASTS = 5;

/** 跨实例共享的存储（挂在 globalThis 上，理由见文件头）。 */
interface ToastStore {
  /** 当前显示的提示（数组首位最早，宿主按此顺序自下而上堆叠）。 */
  items: Ref<ToastItem[]>;
  /** id 发号器：必须随队列一起共享，否则两个实例会发出重复 id（Vue key 冲突 + 关错条目）。 */
  seq: number;
  /** 正在承载队列的宿主 Vue 应用；null = 尚未挂载（或上一份 bundle 的宿主已失效）。 */
  app: { unmount: () => void } | null;
  /**
   * 承载宿主的容器元素。除了「去重」以外，它还是判定宿主是否**真的还活着**的依据：
   * 元素被宿主框架清出文档后，`app` 仍指向旧应用，此时必须重建而不是复用。
   */
  el: HTMLElement | null;
}

const STORE_KEY = "__DSH_FW_TOAST__";

/**
 * 取（必要时创建）共享存储。
 * 顺带充当运行时自检入口：控制台里 `window.__DSH_FW_TOAST__` 为 undefined 说明**当前页面跑的
 * 还是旧 bundle**；有值则可看 `.items` 队列长度与 `.app` 是否已挂载。
 */
export function toastStore(): ToastStore {
  const g = globalThis as unknown as Record<string, unknown>;
  let s = g[STORE_KEY] as ToastStore | undefined;
  if (!s) {
    s = { items: ref<ToastItem[]>([]), seq: 0, app: null, el: null };
    g[STORE_KEY] = s;
  }
  return s;
}

/** 当前显示的提示（共享队列的 ref，ToastHost 直接渲染它）。 */
export const toasts: Ref<ToastItem[]> = toastStore().items;

/**
 * 压入一条提示，返回其 id。
 * @param duration 自动关闭时长（ms）；省略按 kind 取默认值，传 0 表示不自动关闭。
 */
export function pushToast(kind: ToastKind, message: string, duration?: number): number {
  const s = toastStore();
  const id = ++s.seq;
  const total = duration ?? DURATION[kind];
  s.items.value.push({ id, kind, message, duration: total, remain: total, paused: false });
  while (s.items.value.length > MAX_TOASTS) s.items.value.shift();
  return id;
}

/** 手动关闭某条（X 按钮 / 倒计时走完）。 */
export function dismissToast(id: number): void {
  const s = toastStore();
  const i = s.items.value.findIndex((x) => x.id === id);
  if (i !== -1) s.items.value.splice(i, 1);
}

/** 立即清空全部提示（如宿主场景整体切换时）。 */
export function clearToasts(): void {
  toastStore().items.value = [];
}

/** 兼容旧入口：kind 取 error | ok | info（warning 为新增）。 */
export function toast(kind: ToastKind, message: string, duration?: number): void {
  pushToast(kind, message, duration);
}

/** 语义化快捷入口。 */
export const toastError = (message: string, duration?: number): void =>
  void pushToast("error", message, duration);
export const toastWarning = (message: string, duration?: number): void =>
  void pushToast("warning", message, duration);
export const toastOk = (message: string, duration?: number): void =>
  void pushToast("ok", message, duration);
export const toastInfo = (message: string, duration?: number): void =>
  void pushToast("info", message, duration);
