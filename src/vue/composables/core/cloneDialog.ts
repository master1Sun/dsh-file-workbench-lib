/**
 * 全局「克隆 / 检出仓库」弹窗的状态（模块级单例）。
 *
 * 为什么必须放在模块级、而不是组件里：
 *  - 弹窗**全局挂载一次**（见 `main.ts` 的 `mountGlobalCloneDialog`），但打开它的入口有两个 ——
 *    文件工作台的「新建 ▾」与文件编辑器的「最近项目」，两者分属**不同的 Vue 应用**，切右侧面板
 *    tab 会各自卸载重建。状态若落在组件内，切一次面板就丢（地址输到一半没了）。
 *  - 两个入口共用同一个弹窗实例，才能保证「同时只可能开一个」，不会两个面板各弹一份。
 *
 * 与 `terminalStore` / `toast` 同一套路：宿主提到全局层级 + 状态放模块级。
 */
import { reactive } from "vue";
import type { RepoCloneKind } from "../../../shared/types";

/** 克隆 / 检出完成后的回调（由打开方决定新目录怎么被「打开」）。 */
export type CloneDoneHandler = (result: { path: string; name: string }) => void;

interface CloneDialogState {
  /** 弹窗是否可见。 */
  open: boolean;
  /** 当前选择的版本库类型。 */
  kind: RepoCloneKind;
  /** 预设的目标父目录（打开时填入；用户可改）。 */
  dir: string;
  /**
   * 发起方的工作区根 key（`default` / `vscode` …）：宿主据此判定「目标在不在该工作区内」，
   * 工作区外且未开启「允许操作工作区外」时会 403。两个入口分属不同根，必须由打开方传入 ——
   * 让弹窗自己猜会把工作台的目标目录当成编辑器的工作区外来判。
   */
  key: string;
  /** 完成后回调；`closeCloneDialog()` 会清掉，避免残留引用。 */
  onDone?: CloneDoneHandler;
}

export const cloneDialog = reactive<CloneDialogState>({
  open: false,
  kind: "git",
  dir: "",
  key: "",
  onDone: undefined,
});

/**
 * 打开克隆 / 检出弹窗。
 *
 * `dir` 是**父目录**（新仓库会在它下面新建一个子目录），不是仓库本身的路径 —— 与宿主
 * `/git/clone`、`/svn/checkout` 的契约一致（宿主对子目录名单独做「不含分隔符」的校验）。
 */
export function openCloneDialog(opts?: {
  kind?: RepoCloneKind;
  dir?: string;
  key?: string;
  onDone?: CloneDoneHandler;
}): void {
  cloneDialog.kind = opts?.kind === "svn" ? "svn" : "git";
  cloneDialog.dir = opts?.dir ?? "";
  cloneDialog.key = opts?.key ?? "";
  cloneDialog.onDone = opts?.onDone;
  cloneDialog.open = true;
}

/** 关闭弹窗并释放回调（回调里可能闭包着面板组件，不释放会拖住它们）。 */
export function closeCloneDialog(): void {
  cloneDialog.open = false;
  cloneDialog.onDone = undefined;
}
