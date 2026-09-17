/**
 * 右键菜单状态的公共 composable：统一「cmOpen / cmX / cmY / cmItems + openMenu」四件套。
 *
 * 此前这四个状态在 FileListPane / NavPane / ThisPcPane / ProjectTree / TabBar /
 * VSCodePane 里各写了一遍（纯复制粘贴），收敛到这里后组件只需：
 *   const { cmOpen, cmX, cmY, cmItems, openMenu } = useContextMenu();
 * 模板仍然渲染公共 ContextMenu 组件（Teleport + 主题对齐 + 子菜单）。
 */
import { ref, type Ref } from "vue";
import type { MenuItem } from "../../../shared/types";

export interface ContextMenuState {
  /** 菜单是否可见。 */
  cmOpen: Ref<boolean>;
  /** 菜单视口 X 坐标。 */
  cmX: Ref<number>;
  /** 菜单视口 Y 坐标。 */
  cmY: Ref<number>;
  /** 当前菜单条目。 */
  cmItems: Ref<MenuItem[]>;
  /** 在鼠标位置打开菜单（条目可由 computed 的 cmItems 提供，传空数组即可）。 */
  openMenu: (e: MouseEvent, items?: MenuItem[]) => void;
  /** 在指定视口坐标打开菜单（状态栏按钮等以元素矩形锚定的场景）。 */
  openMenuAt: (x: number, y: number, items?: MenuItem[]) => void;
  /** 关闭菜单（ContextMenu 的 @close 直连）。 */
  closeMenu: () => void;
}

export function useContextMenu(): ContextMenuState {
  const cmOpen = ref(false);
  const cmX = ref(0);
  const cmY = ref(0);
  const cmItems = ref<MenuItem[]>([]);

  function openMenu(e: MouseEvent, items: MenuItem[] = []): void {
    openMenuAt(e.clientX, e.clientY, items);
  }

  function openMenuAt(x: number, y: number, items: MenuItem[] = []): void {
    cmItems.value = items;
    cmX.value = x;
    cmY.value = y;
    cmOpen.value = true;
  }

  function closeMenu(): void {
    cmOpen.value = false;
  }

  return { cmOpen, cmX, cmY, cmItems, openMenu, openMenuAt, closeMenu };
}
