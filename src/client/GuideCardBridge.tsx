/**
 * Guide 入口卡片（注册于 `sidebar.right.tab.guide.entry`，keyed 插槽）。
 *
 * 「文件工作台」「文件编辑器」合并为一张 guide 卡片：卡片主体点击进入**默认目标**
 * （工作台或文件编辑器，用户在下拉里选择并记住），右侧小箭头弹出下拉菜单提供
 * 各入口 —— 与官方「新建终端」卡片（ui-sidebar-terminal 的 TerminalGuide）
 * 同一套交互与同一套样式。
 *
 * dispatch 约定：GuideBody 按 `entryKey = providerId`（tab 类型注册的 id）在 keyed
 * 插槽里找卡片渲染器，owner props 是 `{ entryId, kind, title, description }` 并注入
 * `useTabInfo()`（读 tab.actions）。渲染器缺席时宿主回退标准胶囊，旧宿主天然兼容。
 *
 * ## 样式基准：官方 TerminalGuide.module.css（逐条对齐，勿凭手感改）
 *
 * 卡片不是「自造一个像胶囊的盒子」，而是与官方卡片同一套几何：
 * 外框 `.entry`（100% 宽 / 24px 圆角 / l4 描边 / bg-layer-1）+ 左主区 `.main`
 * （flex:1、14px 20px 内边距、min-height 56px、左半圆角）+ 右箭头区 `.trigger`
 * （44px 宽、`align-self: stretch` 撑满卡片高度、右半圆角）+ 包裹 Menu 的
 * `.menu`（`display:flex; align-self:stretch`，把 trigger 拉满高度）。
 * 两个按钮都用官方 `Button variant="ghost"`，hover/active 底色与官方同源
 * （主按钮染左段、箭头染右段，互不越界）。
 *
 * 本插件在运行期注入一次性 <style> 而非 CSS module，故类名不与宿主冲突；
 * 需要压过 Button 自身的 padding/border-radius/height 时用 `.dshfw-guideCard>…`
 * 提高一级特异性（同属性同值，视觉效果与官方一致，只求稳不靠样式表顺序）。
 */
import { useState, type ComponentType, type ReactNode } from "react";
import { Button, IconChevronDownOutline14, Menu } from "@deepseek-ai/dsh-client-ui-primitives";
import type { TabMenuDeps } from "./TabMenuBridge.js";

/** 卡片依赖：菜单动作依赖 + 两个默认目标各自的卡片图标与文案 key。 */
export type GuideCardDeps = TabMenuDeps & {
  /** 各默认目标的卡片图标（与 guide 注册用同一套 glyph）。 */
  icons: {
    workbench: ComponentType<{ size?: number; className?: string }>;
    vscode: ComponentType<{ size?: number; className?: string }>;
  };
};

/** guide 卡片拿到的 tab 信息（只声明用到的字段，形状来自 SidebarRightTabInfo）。 */
interface GuideTabInfoLike {
  tab: {
    /** 门面动作：openTab(kind, { replaceTab: true }) 与标准胶囊的门行为一致。 */
    actions: {
      openTab(kind: string, options?: Record<string, unknown>): void;
    };
  };
}

/** GuideBody 下发的 owner props + 注入的 tab 信息 hook。 */
interface GuideCardProps {
  entryId?: string;
  kind?: string;
  title?: string;
  description?: string;
  useTabInfo?: () => GuideTabInfoLike;
}

/** 主按钮默认打开的目标。 */
type DefaultTarget = "workbench" | "vscode";

/** 默认目标的持久化 key（client 侧 localStorage；读写失败静默回退默认值）。 */
const DEFAULT_TARGET_KEY = "dsh-file-workbench.guideDefault";

function loadDefaultTarget(): DefaultTarget {
  try {
    return localStorage.getItem(DEFAULT_TARGET_KEY) === "vscode" ? "vscode" : "workbench";
  } catch {
    return "workbench";
  }
}

function saveDefaultTarget(target: DefaultTarget): void {
  try {
    localStorage.setItem(DEFAULT_TARGET_KEY, target);
  } catch {
    /* 隐私模式等场景写入失败：仅本次会话内生效 */
  }
}

/** 卡片与下拉样式（与官方 TerminalGuide.module.css 逐条等价）。注入一次即可，幂等。 */
let styleInjected = false;
function ensureGuideCardStyle(): void {
  if (styleInjected || typeof document === "undefined") return;
  const style = document.createElement("style");
  style.textContent = [
    // `.entry`：整条胶囊的外框（官方 width:100%，宽度由 GuideBody 的 entryCell 380px 决定）。
    `.dshfw-guideCard{box-sizing:border-box;display:flex;align-items:stretch;width:100%;overflow:hidden;`,
    `border:0.5px solid var(--dsw-alias-border-l4);border-radius:24px;background:var(--dsw-alias-bg-layer-1)}`,
    // `.main`：左主区，内部改为 stretch 后的 flex 行；高度交给 min-height + padding。
    `.dshfw-guideCard>.dshfw-guideMain{flex:1;justify-content:flex-start;gap:14px;min-width:0;height:auto;`,
    `min-height:56px;padding:14px 20px;border-radius:24px 0 0 24px;text-align:left}`,
    // `.icon`：官方 TerminalGuide 仅 flex:none；这里沿用官方标准胶囊的 26px 盒与二级墨色。
    `.dshfw-guideIcon{display:flex;flex:none;align-items:center;justify-content:center;width:26px;height:26px;`,
    `color:var(--dsw-alias-label-secondary)}`,
    `.dshfw-guideText{display:flex;flex-direction:column;gap:3px;min-width:0}`,
    `.dshfw-guideTitle{overflow:hidden;color:var(--dsw-alias-label-primary);font-size:15px;line-height:1.4;`,
    `white-space:nowrap;text-overflow:ellipsis}`,
    `.dshfw-guideDesc{overflow:hidden;color:var(--dsw-alias-label-caption);font-size:13px;line-height:1.4;`,
    `white-space:nowrap;text-overflow:ellipsis}`,
    // `.trigger`：右箭头区 44px 宽、撑满卡片高、右半圆角（覆盖 Button 的 md 高度与 18px 圆角）。
    `.dshfw-guideMenu>.dshfw-guideTrigger{align-self:stretch;flex:none;height:auto;width:44px;padding:0;`,
    `border-radius:0 24px 24px 0}`,
    // `.menu`：Menu 的锚点包裹层在卡片 flex 行里竖向拉伸（trigger 的高度来源）。
    `.dshfw-guideCard>.dshfw-guideMenu{display:flex;align-self:stretch;flex:none}`,
  ].join("");
  document.head.appendChild(style);
  styleInjected = true;
}

/**
 * 创建合并版 guide 卡片组件。卡片主体 → 默认目标（localStorage 记忆，下拉可切换）；
 * 下拉项：文件工作台 / 文件编辑器 / 新建编辑器窗口 / 在文件编辑器中打开工作区（有会话 cwd 时），
 * 底部一组「默认打开」单选（工作台 / 文件编辑器，选中行带勾）。
 */
export function createGuideCard(deps: GuideCardDeps): (props: GuideCardProps) => ReactNode {
  return function GuideCard({ kind, description, useTabInfo }: GuideCardProps): ReactNode {
    ensureGuideCardStyle();
    const [open, setOpen] = useState(false);
    const [defaultTarget, setDefaultTarget] = useState<DefaultTarget>(loadDefaultTarget);
    // 卡片的主按钮文案/图标跟随默认目标：切到「文件编辑器」后整张卡显示编辑器的门面。
    const isWorkbench = defaultTarget === "workbench";
    const Icon = isWorkbench ? deps.icons.workbench : deps.icons.vscode;
    const title = deps.tr(isWorkbench ? "tabFileWorkbench" : "tabVSCode");
    const titleDesc = deps.tr(isWorkbench ? "tabFileWorkbenchDesc" : "tabVSCodeDesc");
    const readTabInfo = typeof useTabInfo === "function" ? useTabInfo : null;
    const info = readTabInfo ? readTabInfo() : null;
    const openTab = (target: string, options?: Record<string, unknown>): void => {
      try {
        info?.tab.actions.openTab(target, { replaceTab: true, ...options });
      } catch (e) {
        console.warn("[dsh-file-workbench] guide open failed:", e);
      }
    };
    const cwd = deps.getSessionDir();

    /** 动作行（选择即执行并收起菜单）；工作台排在最前，与卡片默认目标并列可选。 */
    const actions: Array<{ id: string; label: string; run: () => void }> = [
      { id: "workbench", label: deps.tr("tabFileWorkbench"), run: () => openTab("workbench") },
      { id: "editor", label: deps.tr("tabVSCode"), run: () => openTab("vscode") },
      { id: "editor-new", label: deps.tr("tabMenuNewEditor"), run: () => deps.openEditor({ fresh: true }) },
    ];
    if (cwd) {
      actions.push({
        id: "editor-cwd",
        label: deps.tr("tabMenuOpenInEditor"),
        run: () => openTab("vscode", { params: { projectDir: cwd } }),
      });
    }

    /** 「默认打开」单选组：选中行由 Menu 的 selectedId 画勾，点击只改默认并收起。 */
    const defaultRows = [
      { id: "default-workbench", target: "workbench" as const, label: deps.tr("tabFileWorkbench") },
      { id: "default-vscode", target: "vscode" as const, label: deps.tr("tabVSCode") },
    ];

    const closeAndRun = (run: () => void): void => {
      setOpen(false);
      run();
    };

    return (
      <div className="dshfw-guideCard" data-sidebar-right-guide-entry={kind}>
        <Button variant="ghost" className="dshfw-guideMain" onClick={() => openTab(defaultTarget)}>
          <span className="dshfw-guideIcon">
            <Icon size={description === undefined ? 22 : 26} />
          </span>
          <span className="dshfw-guideText">
            <span className="dshfw-guideTitle">{title}</span>
            {description !== undefined && <span className="dshfw-guideDesc">{titleDesc}</span>}
          </span>
        </Button>
        <Menu
          open={open}
          portal
          autoFocus
          align="end"
          className="dshfw-guideMenu"
          items={[
            ...actions.map((it) => ({ id: it.id, label: it.label })),
            { type: "separator" as const, id: "sep-default" },
            { type: "label" as const, id: "label-default", text: deps.tr("tabMenuDefaultLabel") },
            ...defaultRows.map((row) => ({ id: row.id, label: row.label })),
          ]}
          selectedId={defaultRows.find((row) => row.target === defaultTarget)?.id}
          onClose={() => setOpen(false)}
          onSelect={(id: string) => {
            const action = actions.find((it) => it.id === id);
            if (action) {
              closeAndRun(action.run);
              return;
            }
            const row = defaultRows.find((it) => it.id === id);
            if (row) {
              setDefaultTarget(row.target);
              saveDefaultTarget(row.target);
            }
            setOpen(false);
          }}
          anchor={
            <Button
              variant="ghost"
              className="dshfw-guideTrigger"
              aria-label={deps.tr("guideMenuAria")}
              aria-haspopup="menu"
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              <IconChevronDownOutline14 />
            </Button>
          }
        />
      </div>
    );
  };
}
