<template>
  <!--
    最底部 footer（Win11 风格）：
    - 左：后台任务按钮（贴面板左下角；弹窗由组件自身按按钮位置定位）→ 等待中的操作高亮提示（优先）
      → 文件信息（项目数 / 选中数 · 状态文本，原文件列表内部底栏已并入此处）→ 此电脑 / 回收站的条目数；
    - 右：视图切换按钮（与文件列表同源，点击回落到 FileListPane.quickView）。
  -->
  <div class="fw-statusbar" :class="{ busy }">
    <!-- 顶部流动进度条：任何等待中的操作都显示，颜色跟随「设置 → 强调色」 -->
    <div v-if="busy" class="fw-status-progress" aria-hidden="true"></div>

    <!-- 最左：后台任务按钮（贴左下角）+「扩展」入口。弹窗是 fixed 定位，不参与本行布局。 -->
    <div class="fw-status-tasks">
      <BgTaskPanel />
      <!-- 插件注册项统一收进「扩展」按钮：点开向上弹出菜单逐条展示（workbench statusbar.register）。
           无任何注册项时不显示该入口。放在本地导航区之外，注入激活时仍可点击。 -->
      <button
        v-if="hasExtEntries"
        ref="extMenuBtnRef"
        class="fw-status-seg fw-status-ext-btn"
        :class="{ on: extMenuOpen }"
        :title="t('vsMenuExtensions')"
        @click="openExtMenu"
      >
        <icon name="grid" :size="13" />
      </button>
    </div>

    <!-- 中：等待提示 > 文件信息 > 视图自带计数 -->
    <div class="fw-status-left" :class="{ 'chrome-disabled': chromeDisabled }" :inert="chromeDisabled">
      <span v-if="busyText" class="fw-status-busy">
        <span class="fw-status-busy-dot" aria-hidden="true"></span>
        <span class="fw-status-busy-txt">{{ busyText }}</span>
      </span>
      <span v-else-if="listStatus.visible" class="fw-status-info">
        <span>{{ t("statusItemsCount", { count: listStatus.total }) }}</span>
        <span v-if="listStatus.selected">，{{ t("selectedCount", { count: listStatus.selected }) }}</span>
        <span v-if="listStatus.text" class="fw-status-sub"> · {{ listStatus.text }}</span>
      </span>
      <span v-else-if="explorer.view === 'computer'">{{ t("statusDrivesCount", { count: explorer.drives.length }) }}</span>
      <span v-else-if="explorer.view === 'recycle'">{{ t("statusItemsCount", { count: explorer.recycleItems.length }) }}</span>
    </div>

    <!-- 右：视图切换（仅文件列表挂载期间可用） -->
    <div class="fw-status-right" :class="{ 'chrome-disabled': chromeDisabled }" :inert="chromeDisabled">
      <button
        v-for="b in LIST_VIEW_BUTTONS"
        v-show="listStatus.canSwitchView"
        :key="b.key"
        class="fw-vs-btn"
        :class="{ on: listStatus.view === b.key }"
        :title="t(b.label)"
        @click="switchListView(b.key)"
      >
        <icon :name="b.icon" :size="13" />
      </button>
    </div>

    <!-- 底部「扩展」菜单：插件注册条目列表，从状态栏向上弹出（workbench statusbar.register） -->
    <ContextMenu v-if="extMenuOpen" :items="extMenuItems" :x="extMenuX" :y="extMenuY" :anchor-x="extMenuAnchorX" placement="top" fit-width @close="extMenuOpen = false" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import Icon from "../../common/Icon.vue";
import BgTaskPanel from "./BgTaskPanel.vue";
import ContextMenu from "../../common/ContextMenu.vue";
import { explorer } from "../../../stores/explorer";
import { wb, toast } from "../../../stores/workbench";
import { tasks } from "../../../composables/session/tasks";
import { listStatus, switchListView, type ListViewOption } from "../../../composables/session/listStatus";
import { useI18n } from "../../../composables/core/i18n";
import { useContextMenu } from "../../../composables/ui/useContextMenu";
import { listWorkbenchStatusBarItems, listWorkbenchActivityViews, executeCommand, isCommandRunning, viewIconForCommand, type WorkbenchStatusContext } from "../../../stores/activityBar";
import type { MenuItem } from "../../../../shared/types";

const { t } = useI18n();

/**
 * 外部注入视图激活时置真：禁用「文件信息 / 视图切换」这类本地导航区，
 * 但**保留最左的后台任务按钮可点击、可查看**（BgTaskPanel 不受此 prop 影响）。
 */
const props = defineProps<{ chromeDisabled?: boolean }>();
const chromeDisabled = computed(() => props.chromeDisabled ?? false);

/* ---------- 底部「扩展」按钮：把工作台插件注册项收进一个向上弹出的菜单 ---------- */

const extMenuBtnRef = ref<HTMLElement | null>(null);
const { cmOpen: extMenuOpen, cmX: extMenuX, cmY: extMenuY, openMenuAt: openExtMenuAt } = useContextMenu();
/** 气泡锚定 x（按钮中心），传给 ContextMenu.anchorX。 */
const extMenuAnchorX = ref(0);

/** 点「扩展」→ 在其上方弹出气泡菜单：水平居中对准按钮，下缘箭头指向按钮。 */
function openExtMenu(): void {
  const r = extMenuBtnRef.value?.getBoundingClientRect();
  if (!r) return;
  extMenuAnchorX.value = r.left + r.width / 2;
  openExtMenuAt(0, r.top - 10);
}

/** 传给命令处理器的上下文：工作台无激活标签概念，path 恒 null；projectDir = 当前工作区根。 */
function extCtx(): WorkbenchStatusContext {
  return { path: null, projectDir: wb.root || null };
}

/** 是否存在任一注册项（决定「扩展」入口是否显示）。 */
const hasExtEntries = computed<boolean>(() => listWorkbenchStatusBarItems().length > 0);

/**
 * 下拉条目：列出全部已注册的工作台扩展菜单项（按 order 升序，注册时已排好）。
 * when(ctx) 为假者置灰禁用；点击即 executeCommand(commandId, ctx)。
 * 命令返回 Promise 且仍在执行 → 该行显示 spinner、点击改开任务面板（去哪看的指引），
 * 完成/失败的 toast 由插件自己发（宿主不代答结果内容）。
 */
const extMenuItems = computed<MenuItem[]>(() => {
  void wb.root; // 建立依赖：工作区切换时重算 when(ctx)
  const ctx = extCtx();
  return listWorkbenchStatusBarItems().map((item) => {
    const running = isCommandRunning(item.commandId);
    return {
      label: item.text,
      icon: item.icon || viewIconForCommand(listWorkbenchActivityViews(), item.commandId),
      title: running ? t("vsExtRunning") : item.tooltip,
      disabled: !running && !!item.when && !item.when(ctx),
      running,
      onClick: () => {
        if (running) {
          tasks.setOpen(true);
          return;
        }
        try {
          const r = executeCommand(item.commandId, ctx);
          // 命令返回 Promise（异步长任务）→ 挂上失败兜底提示；成功通知归插件自己发。
          if (r instanceof Promise) {
            r.catch((e) => toast("error", `${item.text}: ${(e as Error)?.message ?? String(e)}`));
          }
        } catch (e) {
          toast("error", (e as Error).message);
        }
      },
    };
  });
});

/** 视图切换按钮（与文件列表「查看」子菜单的常用三档一致）。 */
const LIST_VIEW_BUTTONS = [
  { key: "details", icon: "eye", label: "viewDetails" },
  { key: "list", icon: "sort", label: "viewList" },
  { key: "large", icon: "grid", label: "viewLarge" },
] as const satisfies readonly { key: ListViewOption; icon: string; label: string }[];

/** 当前正在运行（等待中）的后台任务，最新在前。 */
const running = computed(() => tasks.state.list.filter((x) => x.status === "running"));

/**
 * 是否存在「需要等待的操作」：后台任务运行中 / 搜索中 / 目录·回收站·磁盘加载中。
 * 任一为真即驱动状态栏的流动进度条与高亮提示。
 */
const busy = computed(
  () =>
    running.value.length > 0 ||
    wb.search.running ||
    explorer.loading ||
    explorer.recycleLoading ||
    explorer.drivesLoading,
);

/** 等待提示文案（高亮显示）：后台任务 > 搜索 > 加载。 */
const busyText = computed(() => {
  const first = running.value[0];
  if (first) return first.detail ? `${first.label} · ${first.detail}` : first.label;
  if (wb.search.running) return t("statusSearching");
  if (explorer.loading || explorer.recycleLoading || explorer.drivesLoading) return t("statusLoading");
  return "";
});
</script>

<style scoped>
.fw-statusbar {
  position: relative;
  flex: 0 0 auto;
  display: grid;
  /* 三栏：任务按钮（内容宽）→ 信息（占满剩余）→ 视图切换（内容宽） */
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 8px;
  height: 26px;
  padding: 0 10px;
  border-top: 1px solid var(--dsh-border, #30363d);
  background: var(--dsh-bg2, #161b22);
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  color: var(--dsh-fg-weak, #8b949e);
  user-select: none;
  transition: border-top-color 0.2s;
}
/* 等待中：整条状态栏的上沿也带上强调色，呼应顶部流动条 */
.fw-statusbar.busy { border-top-color: var(--dsh-accent, #238636); }

/* 顶部不确定进度条：一段强调色左右流动 */
.fw-status-progress {
  position: absolute;
  left: 0;
  right: 0;
  top: -1px;
  height: 2px;
  overflow: hidden;
  border-radius: 2px;
  pointer-events: none;
}
.fw-status-progress::before {
  content: "";
  position: absolute;
  top: 0;
  left: -40%;
  width: 40%;
  height: 100%;
  border-radius: 2px;
  background: var(--dsh-accent, #238636);
  box-shadow: 0 0 6px var(--dsh-accent, #238636);
  animation: fw-status-flow 1.15s ease-in-out infinite;
}
@keyframes fw-status-flow {
  0% { left: -40%; }
  100% { left: 100%; }
}

/* —— 左：信息 / 等待提示 —— */
.fw-status-left {
  display: flex;
  align-items: center;
  justify-self: start;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
}
.fw-status-info {
  display: inline-flex;
  align-items: baseline;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.fw-status-sub {
  overflow: hidden;
  text-overflow: ellipsis;
}

/* —— 最左：后台任务按钮 —— */
/* 刻意不设 overflow:hidden：按钮的运行数角标会上溢到按钮上沿之外，裁掉就看不见了。
   （这也是它不放进 .fw-status-left 的原因 —— 那一格要裁剪过长文本。） */
.fw-status-tasks {
  display: flex;
  align-items: center;
  justify-self: start;
}
/* 外部注入激活时：本地导航区（信息 / 视图切换）置灰禁用；后台任务按钮不受影响仍可点击。 */
.fw-status-left.chrome-disabled,
.fw-status-right.chrome-disabled {
  opacity: 0.55;
  pointer-events: none;
}

/* —— 右：视图切换 —— */
.fw-status-right {
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2px;
  justify-self: end;
}

/* 等待操作的高亮提示：强调色文字 + 呼吸圆点 */
.fw-status-busy {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
  color: var(--dsh-accent, #238636);
  font-weight: 600;
}
.fw-status-busy-dot {
  flex: 0 0 auto;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--dsh-accent, #238636);
  animation: fw-status-pulse 1s ease-in-out infinite;
}
.fw-status-busy-txt {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
@keyframes fw-status-pulse {
  0%,
  100% { opacity: 0.3; transform: scale(0.75); }
  50% { opacity: 1; transform: scale(1); }
}

.fw-status-seg {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  height: 20px;
  padding: 0 8px;
  border: none;
  border-radius: 10px;
  background: transparent;
  color: inherit;
  font: inherit;
  cursor: pointer;
  white-space: nowrap;
}
.fw-status-seg:hover { background: var(--dsh-hover, rgba(110, 118, 129, 0.25)); color: var(--dsh-fg, #c9d1d9); }

/* 「扩展」入口：菜单展开时高亮，与视图切换按钮的选中态同色系。 */
.fw-status-ext-btn.on { background: var(--dsh-hover, rgba(48, 54, 61, 0.85)); }

/* 视图切换按钮（原在文件列表内部底栏，随信息一并迁到 footer） */
.fw-vs-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 20px;
  padding: 0;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: var(--dsh-fg-weak, #8b949e);
  cursor: pointer;
}
.fw-vs-btn:hover {
  background: var(--dsh-hover, rgba(48, 54, 61, 0.5));
  color: var(--dsh-fg, #c9d1d9);
}
.fw-vs-btn.on {
  background: var(--dsh-hover, rgba(48, 54, 61, 0.85));
  color: var(--dsh-accent, #238636);
}
</style>
