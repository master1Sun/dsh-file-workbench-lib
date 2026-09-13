/**
 * 全局确认 / 输入弹窗状态（配合 ConfirmDialog.vue 使用）。
 *
 * 提供 Promise 化的 confirmDialog / promptDialog，替代原生 window.confirm / window.prompt。
 * ConfirmDialog.vue 消费 dialogState 渲染 Element Plus 弹窗，并回调 resolve。
 */
import { reactive } from "vue";

export type DialogKind = "confirm" | "prompt";

interface Resolver {
  (value: boolean | string | null): void;
}

interface DialogState {
  visible: boolean;
  kind: DialogKind;
  title: string;
  /** 确认提示正文；prompt 时的说明文案。 */
  message: string;
  okText: string;
  cancelText: string;
  inputPlaceholder: string;
  inputValue: string;
  /** prompt 输入框是否为多行 textarea（长文本场景，如子代理任务描述）。 */
  multiline: boolean;
  resolve: Resolver | null;
}

export const dialogState = reactive<DialogState>({
  visible: false,
  kind: "confirm",
  title: "",
  message: "",
  okText: "",
  cancelText: "",
  inputPlaceholder: "",
  inputValue: "",
  multiline: false,
  resolve: null,
});

interface ConfirmOptions {
  title?: string;
  message: string;
  okText?: string;
  cancelText?: string;
}

/** 确认框：resolve(true) 确认；(false) 取消。 */
export function confirmDialog(opts: ConfirmOptions): Promise<boolean> {
  return new Promise((resolve) => {
    dialogState.kind = "confirm";
    dialogState.title = opts.title ?? "";
    dialogState.message = opts.message;
    dialogState.okText = opts.okText ?? "";
    dialogState.cancelText = opts.cancelText ?? "";
    dialogState.inputValue = "";
    dialogState.visible = true;
    dialogState.resolve = (v) => resolve(v === true);
  });
}

interface PromptOptions {
  title?: string;
  message?: string;
  placeholder?: string;
  initial?: string;
  okText?: string;
  cancelText?: string;
  /** 输入框用多行 textarea（默认单行 input）。 */
  multiline?: boolean;
}

/** 输入框：resolve(字符串) 确定；(null) 取消。 */
export function promptDialog(opts: PromptOptions): Promise<string | null> {
  return new Promise((resolve) => {
    dialogState.kind = "prompt";
    dialogState.title = opts.title ?? "";
    dialogState.message = opts.message ?? "";
    dialogState.okText = opts.okText ?? "";
    dialogState.cancelText = opts.cancelText ?? "";
    dialogState.inputPlaceholder = opts.placeholder ?? "";
    dialogState.inputValue = opts.initial ?? "";
    dialogState.multiline = opts.multiline === true;
    dialogState.visible = true;
    dialogState.resolve = (v) => resolve(v === null ? null : String(v));
  });
}

/** 关闭弹窗并回传结果（取消传 null/false，确定传字符串/true）。 */
export function resolveDialog(v: boolean | string | null): void {
  dialogState.visible = false;
  dialogState.resolve?.(v);
  dialogState.resolve = null;
}