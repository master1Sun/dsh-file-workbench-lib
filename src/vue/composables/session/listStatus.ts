/**
 * 文件列表底部信息（模块级单例）。
 *
 * 原实现把「项目数 / 选中数 · 状态文本」和「视图切换按钮」渲染在文件列表内部的一条
 * 底栏（`.fw-fl-status`）里，与最底部的全局 footer（`StatusBar`）上下重复占两行。
 * 现统一并入最底部 footer：
 * - `FileListPane` 只往这里**写**当前状态（并在挂载/卸载时登记视图切换回调）；
 * - `StatusBar` 只从这里**读**状态并渲染，按钮点击经回调转回文件列表执行。
 *
 * 这样既保证信息只有一个来源（不会出现两处对不上的计数），也不必把
 * `filteredRows / multiSel / view` 这些列表内部状态搬进全局 store。
 */
import { reactive } from "vue";
import type { Prefs } from "../core/settings";

/** 查看选项（与设置里的 `prefs.view` 同源）。 */
export type ListViewOption = Prefs["view"];

export interface ListStatusState {
  /** 文件列表当前是否接管底部信息（列表/回收站视图且已加载成功）。 */
  visible: boolean;
  /** 是否可切换视图（文件列表挂载期间为真；此电脑/搜索视图下为假）。 */
  canSwitchView: boolean;
  /** 当前目录下的项目数（已按筛选后的行数）。 */
  total: number;
  /** 已选中项目数。 */
  selected: number;
  /** 状态文本：选中项的类型/尺寸/时间，或未选中时的当前路径。 */
  text: string;
  /** 当前查看档位（用于高亮视图切换按钮）。 */
  view: ListViewOption;
}

export const listStatus = reactive<ListStatusState>({
  visible: false,
  canSwitchView: false,
  total: 0,
  selected: 0,
  text: "",
  view: "details",
});

/** 视图切换回调：由 FileListPane 在 setup 阶段登记（函数声明已提升，可直接传引用）。 */
let viewSwitcher: ((opt: ListViewOption) => void) | null = null;

/** 登记/注销视图切换回调（文件列表卸载时传 null）。 */
export function setListViewSwitcher(fn: ((opt: ListViewOption) => void) | null): void {
  viewSwitcher = fn;
}

/** 切换查看档位（由底部 footer 的视图按钮调用）。 */
export function switchListView(opt: ListViewOption): void {
  viewSwitcher?.(opt);
}

/** 文件列表卸载时调用：把底部信息标记为不可用，避免残留上一次的内容。 */
export function resetListStatus(): void {
  listStatus.visible = false;
  listStatus.canSwitchView = false;
  listStatus.total = 0;
  listStatus.selected = 0;
  listStatus.text = "";
}
