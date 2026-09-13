/**
 * 文件命令总线：让面板内命令栏（CommandBar）调用 FileListPane 内部的
 * 选择集与文件操作（新建/剪切/复制/粘贴/重命名/删除/排序/查看/预览）。
 * FileListPane 挂载时注册执行器并回写状态；命令栏只读状态、发起命令。
 */
import { reactive } from "vue";

/** 命令栏可见状态（由 FileListPane 持续回写）。 */
export const fileCmdState = reactive({
  /** 当前多选数量（0 = 无多选）。 */
  selectionCount: 0,
  /** 当前目录/选中项是否可写（工作区外只读）。 */
  canOperate: true,
  /** 剪贴板是否有内容（决定粘贴可用性）。 */
  hasClipboard: false,
  /** 当前是否处于回收站视图（命令栏大部分按钮禁用）。 */
  isRecycle: false,
});

type CmdRunner = (name: string, arg?: string) => void;
let runner: CmdRunner | null = null;

/** FileListPane 挂载时注册命令执行器；卸载时清除。 */
export function setFileCmdRunner(fn: CmdRunner | null): void {
  runner = fn;
}

/** 命令栏发起命令；无执行器（列表未挂载）时静默忽略。 */
export function runFileCmd(name: string, arg?: string): void {
  runner?.(name, arg);
}
