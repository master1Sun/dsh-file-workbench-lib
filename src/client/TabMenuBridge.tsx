/**
 * 右侧栏 tab 下拉菜单追加项（注册于 `sidebar.right.tab.menu.item`，list 插槽）。
 *
 * DSH 右侧栏每个 tab 的「…」动作菜单由宿主（dockkit 的 TabStrip）渲染：菜单容器是
 * `div[role=menu][data-dockkit-tab-menu]`，套件自带的布局动作（关闭等）之外，会把
 * `sidebar.right.tab.menu.item` 这个 **list 插槽**的全部注册项按注册顺序追加到菜单尾部。
 * 每个注册项组件收到的 owner props 是 `{ tab, dismiss }`：
 *  - `tab`：打开菜单的那个 tab 记录（`TabRecord`，本插件用它的 `kind` 区分入口）；
 *  - `dismiss`：关闭菜单。**执行动作的菜单项必须调用它** —— 菜单是宿主的，只在自己的
 *    动作上自动关闭；插件项若不调用，菜单会悬浮在已被动作替换的内容上。
 *
 * 样式对齐宿主菜单项（dockkit `menuItem`：透明底、`--dsw-alias-label-primary` 文字、
 * hover 用 `--dsw-alias-interactive-bg-hover`），以本插件的类名注入一次性 <style>，
 * 不复用宿主的 CSS-module 哈希类（跨版本不稳）。
 */
import type { ReactNode } from "react";
import type { CopyKey } from "../shared/locales.js";

/** 宿主下发的菜单 owner props（只声明本插件用到的字段）。 */
interface TabMenuOwnerProps {
  /** 打开菜单的 tab 记录（用 `kind` 区分工作台 / 编辑器入口）。 */
  tab?: { kind?: string };
  /** 关闭菜单（执行动作后必须调用）。 */
  dismiss?: () => void;
}

/** 菜单项动作依赖（由 index.tsx 的注册闭包注入，组件拿不到 ctx）。 */
export interface TabMenuDeps {
  /** 按宿主活动语言取词（keyof zh，见 src/shared/locales.ts）。 */
  tr(key: CopyKey): string;
  /** 当前会话工作目录（无选中会话/无 cwd 时为 null）。 */
  getSessionDir(): string | null;
  /** 平级新开一个编辑器 tab（复用 kind 池分配逻辑，见 index.tsx 的 openNextEditorTab）。 */
  openEditor(params?: Record<string, unknown>): boolean;
}

/** 菜单项样式（对齐 dockkit menuItem 视觉）。注入一次即可，幂等。 */
let styleInjected = false;
function ensureMenuItemStyle(): void {
  if (styleInjected || typeof document === "undefined") return;
  const style = document.createElement("style");
  style.textContent = [
    `.dshfw-tabMenuItem{padding:5px 8px;color:var(--dsw-alias-label-primary);`,
    `font-size:var(--dsh-content-font-size-secondary,13px);text-align:left;`,
    `background:transparent;border:none;border-radius:4px;cursor:pointer;white-space:nowrap}`,
    `.dshfw-tabMenuItem:hover{background:var(--dsw-alias-interactive-bg-hover)}`,
  ].join("");
  document.head.appendChild(style);
  styleInjected = true;
}

/**
 * 创建「tab 菜单追加项」组件。一个组件服务全部 tab：渲染时按 `tab.kind` 决定出哪些项 ——
 *  - 工作台 tab（kind = `workbench`）：「在文件编辑器中打开工作区」（有会话工作目录时）+
 *    「新建编辑器窗口」（空白）；
 *  - 编辑器 tab（kind 以 `vscode` 开头，含池内 `vscode-2…8`）：「再开一个编辑器窗口」。
 * 其他 kind（如宿主 guide）不出项，返回 null —— 菜单保持只有套件自带动作。
 */
export function createTabMenuItems(deps: TabMenuDeps): (props: TabMenuOwnerProps) => ReactNode {
  return function TabMenuItems(props: TabMenuOwnerProps): ReactNode {
    ensureMenuItemStyle();
    const kind = props?.tab?.kind ?? "";
    const dismiss = props?.dismiss;

    const items: Array<{ label: string; run: () => void }> = [];
    if (kind === "workbench") {
      const dir = deps.getSessionDir();
      if (dir) {
        items.push({
          label: deps.tr("tabMenuOpenInEditor"),
          run: () => deps.openEditor({ projectDir: dir }),
        });
      }
      items.push({ label: deps.tr("tabMenuNewEditor"), run: () => deps.openEditor({ fresh: true }) });
    } else if (kind.startsWith("vscode")) {
      items.push({ label: deps.tr("tabMenuAnotherEditor"), run: () => deps.openEditor({ fresh: true }) });
    }
    if (items.length === 0) return null;

    return (
      <>
        {items.map((it) => (
          <button
            key={it.label}
            type="button"
            role="menuitem"
            className="dshfw-tabMenuItem"
            onClick={() => {
              try {
                it.run();
              } finally {
                dismiss?.();
              }
            }}
          >
            {it.label}
          </button>
        ))}
      </>
    );
  };
}
