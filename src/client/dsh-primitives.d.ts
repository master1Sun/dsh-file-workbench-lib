/**
 * @deepseek-ai/dsh-client-ui-primitives 的最小类型声明。
 *
 * 该包运行时由 DSH host / 模块加载器解析（构建保持 external，本地不安装），
 * 这里只为 tsc 补齐本插件实际用到的面；形状与源码仓
 * deepseek-harness/packages/client/ui-primitives 对齐，只声明用到的字段。
 */
declare module "@deepseek-ai/dsh-client-ui-primitives" {
  import type { CSSProperties, ReactNode } from "react";

  /** 下拉菜单行（只声明本插件用到的字段）。 */
  export interface MenuItem {
    id: string;
    label: ReactNode;
    disabled?: boolean;
    icon?: ReactNode;
    danger?: boolean;
  }

  /** 官方按钮（ghost 变体用于 guide 卡片的主按钮与箭头触发器）。 */
  export const Button: (props: {
    variant?: "ghost" | "primary" | "secondary" | "danger";
    className?: string;
    disabled?: boolean;
    "aria-label"?: string;
    "aria-haspopup"?: boolean | "menu" | string;
    "aria-expanded"?: boolean;
    onClick?: (event: unknown) => void;
    children?: ReactNode;
  }) => ReactNode;

  /**
   * 下拉箭头图标。
   *
   * ⛔ **命名随宿主版本漂移**：0.1.6 用数字尺寸后缀（`IconChevronDownOutline14`），
   * 0.1.7 改为字号档位（`IconChevronDownOutlineRegular` / `…Medium`）。直接具名导入
   * 旧名字会在新版拿到 `undefined`，`<undefined/>` 触发 React #130，把整个 guide
   * 卡片渲染炸掉（症状：右侧栏「开始」页没有本插件入口）。运行时按名解析，见
   * `GuideCardBridge.tsx` 的 `resolveChevronDown()`。
   */
  export const IconChevronDownOutline14: (props: { size?: number; className?: string }) => ReactNode;
  export const IconChevronDownOutlineRegular: (props: { size?: number; className?: string }) => ReactNode;
  export const IconChevronDownOutlineMedium: (props: { size?: number; className?: string }) => ReactNode;

  /** 分组间隔线 / 标题行（与 MenuItem 一起构成菜单条目）。 */
  export type MenuEntry =
    | MenuItem
    | { type: "separator"; id: string }
    | { type: "label"; id: string; text: string };

  /** 锚定下拉菜单（受控 open；portal 模式固定定位渲染进 document.body）。 */
  export const Menu: (props: {
    open: boolean;
    autoFocus?: boolean;
    anchor: ReactNode;
    items: ReadonlyArray<MenuEntry>;
    selectedId?: string | undefined;
    onSelect: (id: string) => void;
    onClose: () => void;
    align?: "start" | "end";
    side?: "bottom" | "top" | "right";
    portal?: boolean;
    className?: string | undefined;
    style?: CSSProperties;
  }) => ReactNode;
}
