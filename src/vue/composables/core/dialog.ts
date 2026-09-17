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
  /** 多按钮确认框（choiceDialog）的按钮列表；confirm/prompt 时空。 */
  choices: DialogChoice[];
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
  choices: [],
  resolve: null,
});

interface ConfirmOptions {
  title?: string;
  message: string;
  okText?: string;
  cancelText?: string;
}

/** 多按钮确认框的单个按钮（VS Code 式「保存 / 不保存 / 取消」三选场景）。 */
export interface DialogChoice {
  id: string;
  text: string;
  /** true 时用主按钮样式（默认最后一个按钮是「取消」样式的兜底）。 */
  primary?: boolean;
}

interface ChoiceOptions {
  title?: string;
  message: string;
  /** 按钮列表（渲染顺序即数组顺序）；点任意按钮 resolve 对应 id，Esc / 关闭 resolve null。 */
  choices: DialogChoice[];
}

/**
 * 多按钮选择框：与 confirmDialog 同一套弹窗外观，但按钮可自定义（≥2 个），
 * 返回被点按钮的 id；取消（Esc / 关闭 / 点遮罩关闭被禁时）返回 null。
 */
export function choiceDialog(opts: ChoiceOptions): Promise<string | null> {
  return new Promise((resolve) => {
    dialogState.kind = "confirm";
    dialogState.title = opts.title ?? "";
    dialogState.message = opts.message;
    dialogState.choices = opts.choices;
    dialogState.visible = true;
    dialogState.resolve = (v) => resolve(typeof v === "string" ? v : null);
  });
}

/** 确认框：resolve(true) 确认；(false) 取消。 */
export function confirmDialog(opts: ConfirmOptions): Promise<boolean> {
  return new Promise((resolve) => {
    dialogState.kind = "confirm";
    dialogState.title = opts.title ?? "";
    dialogState.message = opts.message;
    dialogState.okText = opts.okText ?? "";
    dialogState.cancelText = opts.cancelText ?? "";
    dialogState.choices = [];
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
    dialogState.choices = [];
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