<template>
  <!--
    最底部 footer（Win11 风格）：
    - 左：等待中的操作高亮提示（优先）→ 文件信息（项目数 / 选中数 · 状态文本，原文件列表
      内部底栏已并入此处）→ 此电脑 / 回收站的条目数；
    - 中：后台任务面板 + 最小化终端（整条 footer 的水平中点）；
    - 右：视图切换按钮（与文件列表同源，点击回落到 FileListPane.quickView）。
  -->
  <div class="fw-statusbar" :class="{ busy }">
    <!-- 顶部流动进度条：任何等待中的操作都显示，颜色跟随「设置 → 强调色」 -->
    <div v-if="busy" class="fw-status-progress" aria-hidden="true"></div>

    <!-- 左：等待提示 > 文件信息 > 视图自带计数 -->
    <div class="fw-status-left">
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

    <!-- 中：后台任务（含历史归档，点击展开完整面板）；最小化终端改由全局 dock 栏承载 -->
    <div class="fw-status-center">
      <BgTaskPanel />
    </div>

    <!-- 右：视图切换（仅文件列表挂载期间可用） -->
    <div class="fw-status-right">
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
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Icon from "../../common/Icon.vue";
import BgTaskPanel from "./BgTaskPanel.vue";
import { explorer } from "../../../stores/explorer";
import { wb } from "../../../stores/workbench";
import { tasks } from "../../../composables/session/tasks";
import { listStatus, switchListView, type ListViewOption } from "../../../composables/session/listStatus";
import { useI18n } from "../../../composables/core/i18n";

const { t } = useI18n();

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
  /* 三栏：左右等宽（各 1fr）→ 中间那一栏永远落在整条 footer 的水平中点 */
  grid-template-columns: 1fr auto 1fr;
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

/* —— 中：后台任务 + 最小化终端 —— */
.fw-status-center {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  justify-self: center;
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
