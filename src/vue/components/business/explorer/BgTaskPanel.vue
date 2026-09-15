<template>
  <!-- 状态栏任务按钮：显示运行中任务数，点按展开/收起任务面板 -->
  <button
    ref="fabRef"
    class="fw-bg-task-fab"
    :class="{ active: visible }"
    :title="t('taskFabTitle')"
    @click="setOpen(!visible)"
  >
    <icon name="tasks" :size="14" />
    <span v-if="runningCount" class="fw-bg-task-badge">{{ runningCount }}</span>
  </button>

  <!-- 任务面板 -->
  <transition name="fw-bg-task-pop">
    <div v-if="visible" class="fw-bg-task-wrap" :style="wrapStyle">
      <div class="fw-bg-task-panel" :style="panelStyle">
        <div class="fw-bg-task-head">
          <span class="fw-bg-task-title">{{ t('taskPanelTitle') }}</span>
          <div class="fw-bg-task-headacts">
            <button class="fw-bg-task-link" :disabled="!archiveDates.length" @click="openArchive">{{ t('taskArchiveOpen') }}</button>
            <button class="fw-bg-task-link" :disabled="!hasHistory" @click="clearFinished">{{ t('taskClearFinished') }}</button>
            <button class="fw-bg-task-link" :disabled="!list.length" @click="clearAll">{{ t('taskClearAll') }}</button>
            <button class="fw-bg-task-close" :title="t('taskClose')" @click="setOpen(false)">✕</button>
          </div>
        </div>

        <!-- 运行中 -->
        <div v-if="running.length" class="fw-bg-task-group">
          <div class="fw-bg-task-grouplbl">{{ t('taskRunning') }}</div>
          <div v-for="t2 in running" :key="t2.id" class="fw-bg-task-row" @click="openTask(t2)">
            <span class="fw-bg-task-spin" />
            <span class="fw-bg-task-label">{{ t2.label }}</span>
            <span v-if="t2.detail" class="fw-bg-task-detail">{{ t2.detail }}</span>
            <span class="fw-bg-task-see">{{ t('taskViewLog') }}</span>
          </div>
        </div>

        <!-- 历史（后端持久化日志，跨会话保留，清除时才删除） -->
        <div v-if="history.length" class="fw-bg-task-group">
          <div class="fw-bg-task-grouplbl">{{ t('taskHistory') }}</div>
          <div v-for="(t2, i) in history" :key="t2.startedAt + '-' + i" class="fw-bg-task-row" :class="t2.status" @click="openTask(t2)">
            <span class="fw-bg-task-ico">{{ t2.status === 'done' ? '✓' : '✕' }}</span>
            <span class="fw-bg-task-label">{{ t2.label }}</span>
            <span v-if="t2.detail" class="fw-bg-task-detail">{{ t2.detail }}</span>
            <span class="fw-bg-task-see">{{ t('taskViewLog') }}</span>
          </div>
        </div>

        <div v-if="!running.length && !history.length" class="fw-bg-task-empty">{{ t('taskEmpty') }}</div>
      </div>
      <!-- 指示箭头：始终指向触发它的任务按钮（水平中点对齐按钮中心） -->
      <span class="fw-bg-task-arrow" :style="arrowStyle" />
    </div>
  </transition>

  <!-- 单任务日志详情：独立居中弹窗 -->
  <el-dialog
    v-model="showDetail"
    :width="580"
    :title="t('taskLogTitle')"
    custom-class="fw-tasklog-dialog"
    :modal-append-to-body="false"
    :append-to-body="false"
  >
    <template v-if="sel">
      <!-- 概要：操作名 / 目标 / 起止时间 / 总耗时 / 状态 -->
      <div class="fw-tlog-head">
        <div class="fw-tlog-name">{{ sel.label }}</div>
        <div v-if="sel.fileTarget" class="fw-tlog-fileitem">
          <span class="fw-tlog-k">{{ t('taskFieldTarget') }}</span>
          <span class="fw-tlog-path" :title="sel.fileTarget">{{ sel.fileTarget }}</span>
        </div>
        <div class="fw-tlog-meta">
          <span class="fw-tlog-st-head" :class="sel.status">{{ statusLabel(sel.status) }}</span>
          <span>{{ t('taskStartTime') }} {{ fmtClock(sel.startedAt) }}</span>
          <span v-if="sel.doneAt">{{ t('taskEndTime') }} {{ fmtClock(sel.doneAt) }}</span>
          <span>{{ t('taskTotalSpent') }} {{ fmtDur(totalDur) }}</span>
          <span v-if="selMeta.types.length">{{ t('taskFieldType') }}：{{ selMeta.types.join('、') }}</span>
          <span v-if="selMeta.count">{{ t('taskMetaFiles', { count: selMeta.count, size: formatFileSize(selMeta.size) }) }}</span>
        </div>
      </div>

      <!-- 竖向时间轴：步骤 / 文件 / 加载时间 / 耗时 -->
      <div class="fw-tlog-timeline">
        <div v-for="(st, i) in timeline" :key="i" class="fw-tlog-step">
          <div class="fw-tlog-rail">
            <span class="fw-tlog-dot" :class="st.status" />
            <span v-if="i < timeline.length - 1" class="fw-tlog-line" />
          </div>
          <div class="fw-tlog-ct">
            <div class="fw-tlog-bubble" :class="st.status">
              <div class="fw-tlog-brow">
                <span class="fw-tlog-time">{{ fmtTime(st.time) }}</span>
                <span class="fw-tlog-st" :class="st.status">{{ statusLabel(st.status) }}</span>
                <span class="fw-tlog-dur-tip">
                  <template v-if="i !== 0">{{ t('taskStepSpent') }} <b>{{ fmtDur(st.durMs) }}</b></template>
                </span>
              </div>
              <div class="fw-tlog-btext">{{ stepText(st) }}</div>
              <div v-if="st.detail && st.detail !== st.file" class="fw-tlog-bnote">{{ st.detail }}</div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </el-dialog>

  <!-- 归档浏览器：左日期 → 中记录 → 右详情列（内嵌展示，不弹日志弹窗） -->
  <el-dialog
    v-model="showArchive"
    :width="880"
    :title="t('taskArchiveTitle')"
    custom-class="fw-taskarc-dialog"
    :modal-append-to-body="false"
    :append-to-body="false"
  >
    <div class="fw-taskarc">
      <div class="fw-taskarc-dates">
        <button
          v-for="d in archiveDates"
          :key="d.date"
          class="fw-taskarc-date"
          :class="{ active: archiveSel === d.date }"
          @click="archiveSel = d.date; onArchiveDate()"
        >
          <span>{{ d.date }}</span>
          <span class="fw-taskarc-cnt">{{ t('taskArchiveRecords', { count: d.count }) }}</span>
        </button>
      </div>
      <div class="fw-taskarc-records">
        <div v-if="!archiveRecords.length" class="fw-taskarc-none">{{ t('taskArchiveNone') }}</div>
        <div
          v-for="(rec, i) in archiveRecords"
          :key="rec.startedAt + '-' + i"
          class="fw-taskarc-row"
          :class="{ [rec.status]: true, active: archiveSelRec === rec }"
          @click="selectArchiveRec(rec)"
        >
          <span class="fw-taskarc-ico">{{ rec.status === 'done' ? '✓' : '✕' }}</span>
          <span class="fw-taskarc-label">{{ rec.label }}</span>
          <span v-if="rec.detail" class="fw-taskarc-recdetail">{{ rec.detail }}</span>
          <span class="fw-taskarc-time">{{ fmtClock(rec.startedAt) }}</span>
        </div>
      </div>
      <div class="fw-taskarc-detail">
        <div v-if="!archiveSelRec" class="fw-taskarc-none">{{ t('taskArchiveNone') }}</div>
        <template v-else>
          <div class="fw-tlog-head">
            <div class="fw-tlog-name">{{ archiveSelRec.label }}</div>
            <div v-if="archiveSelRec.detail" class="fw-tlog-fileitem">
              <span class="fw-tlog-k">{{ t('taskFieldTarget') }}</span>
              <span class="fw-tlog-path" :title="archiveSelRec.detail">{{ archiveSelRec.detail }}</span>
            </div>
            <div class="fw-tlog-meta">
              <span class="fw-tlog-st-head" :class="archiveSelRec.status">{{ statusLabel(archiveSelRec.status) }}</span>
              <span>{{ t('taskStartTime') }} {{ fmtClock(archiveSelRec.startedAt) }}</span>
              <span v-if="archiveSelRec.doneAt">{{ t('taskEndTime') }} {{ fmtClock(archiveSelRec.doneAt) }}</span>
              <span>{{ t('taskTotalSpent') }} {{ fmtDur(archTotalDur) }}</span>
              <span v-if="archMeta.types.length">{{ t('taskFieldType') }}：{{ archMeta.types.join('、') }}</span>
              <span v-if="archMeta.count">{{ t('taskMetaFiles', { count: archMeta.count, size: formatFileSize(archMeta.size) }) }}</span>
            </div>
          </div>
          <div class="fw-tlog-timeline">
            <div v-for="(st, i) in archDetail" :key="i" class="fw-tlog-step">
              <div class="fw-tlog-rail">
                <span class="fw-tlog-dot" :class="st.status" />
                <span v-if="i < archDetail.length - 1" class="fw-tlog-line" />
              </div>
              <div class="fw-tlog-ct">
                <div class="fw-tlog-bubble" :class="st.status">
                  <div class="fw-tlog-brow">
                    <span class="fw-tlog-time">{{ fmtTime(st.time) }}</span>
                    <span class="fw-tlog-st" :class="st.status">{{ statusLabel(st.status) }}</span>
                    <span class="fw-tlog-dur-tip">
                      <template v-if="i !== 0">{{ t('taskStepSpent') }} <b>{{ fmtDur(st.durMs) }}</b></template>
                    </span>
                  </div>
                  <div class="fw-tlog-btext">{{ stepText(st) }}</div>
                  <div v-if="st.detail && st.detail !== st.file" class="fw-tlog-bnote">{{ st.detail }}</div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, reactive, ref, watch } from "vue";
import { tasks } from "../../../composables/session/tasks";
import type { LogEntry, TaskItem, TaskStatus } from "../../../composables/session/tasks";
import type { TaskLogRecord } from "../../../../shared/types";
import { useI18n } from "../../../composables/core/i18n";
import { formatFileSize } from "../../../composables/core/fileTaskMeta";
import Icon from "../../common/Icon.vue";

interface SelTask {
  label: string;
  /** 操作目标（文件/目录路径或计数）。 */
  fileTarget?: string;
  status: TaskStatus;
  startedAt: number;
  doneAt?: number;
  msg?: string;
  logs: LogEntry[];
}

/** 时间轴上的一个步骤。 */
interface TimelineStep {
  time: number;
  status: TaskStatus;
  title: string;
  file?: string;
  detail?: string;
  /** 距上一步的耗时（ms）；首步为任务开始时刻。 */
  durMs: number;
}

const { t } = useI18n();
const visible = computed(() => tasks.open.value);
const list = computed(() => tasks.state.list);
const history = computed(() => tasks.state.history);
const running = computed(() => list.value.filter((x) => x.status === "running"));
const runningCount = computed(() => running.value.length);
const hasHistory = computed(() => history.value.length > 0);
const sel = ref<SelTask | null>(null);
const showDetail = ref(false);

/* —— 弹窗定位：跟随任务按钮（水平居中对齐按钮中心，垂直贴在按钮上方） —— */
const fabRef = ref<HTMLElement | null>(null);
const PANEL_W = 340;
const ARROW_GAP = 11; // 按钮顶边到面板底边的距离（容纳箭头）
const EDGE = 8; // 视口安全边距
const pos = reactive({ width: PANEL_W, left: 0, bottom: 0, maxH: 360, arrow: PANEL_W / 2 });

const wrapStyle = computed(() => ({
  width: `${pos.width}px`,
  left: `${pos.left}px`,
  bottom: `${pos.bottom}px`,
}));
const panelStyle = computed(() => ({ maxHeight: `${pos.maxH}px` }));
const arrowStyle = computed(() => ({ left: `${pos.arrow}px` }));

/** 由按钮的实际位置推算面板位置；面板过高时优先贴近按钮上方可用空间。 */
function updatePos(): void {
  const el = fabRef.value;
  if (!el) return;
  const r = el.getBoundingClientRect();
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const centerX = r.left + r.width / 2;
  const width = Math.min(PANEL_W, Math.max(vw - EDGE * 2, 200));
  const maxLeft = Math.max(vw - width - EDGE, EDGE);
  // 按钮位于视口左半侧（现在它就贴在状态栏最左）→ 面板左沿对齐按钮左沿、向右展开，
  // 避免「以按钮为中心」把面板甩到工作台左边界之外；按钮偏右时仍按中心对齐。
  const anchor = centerX < vw / 2 ? r.left - 2 : centerX - width / 2;
  const left = Math.min(Math.max(anchor, EDGE), maxLeft);
  pos.width = Math.round(width);
  pos.left = Math.round(left);
  pos.bottom = Math.round(vh - r.top + ARROW_GAP);
  pos.maxH = Math.max(140, Math.min(r.top - ARROW_GAP - EDGE, Math.round(vh * 0.6)));
  // 箭头对齐按钮中心；贴边时限制在面板圆角内侧
  pos.arrow = Math.round(Math.min(Math.max(centerX - left, 16), width - 16));
}
watch(visible, (v) => {
  if (!v) return;
  updatePos();
  void nextTick(updatePos);
});

// 归档浏览：showArchive 是否打开；archiveSel 当前选中的日份键
const showArchive = ref(false);
const archiveSel = ref<string | null>(null);
const archives = computed(() => tasks.state.archives);
const archiveDates = computed(() =>
  Object.keys(archives.value)
    .sort((a, b) => (a < b ? 1 : -1)) // 最新在前
    .map((d) => ({ date: d, count: archives.value[d].length })),
);
const archiveRecords = computed<TaskLogRecord[]>(() => {
  const d = archiveSel.value;
  const list = d && archives.value[d] ? archives.value[d] : [];
  // 展示层兜底倒序（最新在前）：磁盘上的旧归档可能由修复前的版本写成正序，界面不应受其影响。
  return [...list].sort((a, b) => (b.doneAt ?? b.startedAt) - (a.doneAt ?? a.startedAt));
});

function openArchive(): void {
  if (!archiveDates.value.length) return;
  archiveSel.value = archiveDates.value[0].date;
  showArchive.value = true;
}

function setOpen(v: boolean): void {
  tasks.setOpen(v);
}

function clearFinished(): void {
  void tasks.clearFinished();
}

function clearAll(): void {
  void tasks.clearAll();
}

/** 点击一个任务查看其日志。历史记录无日志数组时由起止时间构造。 */
function openTask(item: TaskItem | TaskLogRecord): void {
  const rawLogs = item.logs;
  const logs: LogEntry[] =
    rawLogs && rawLogs.length
      ? (rawLogs as LogEntry[])
      : [
          { time: item.startedAt, status: "running", msg: item.label, file: item.detail },
          { time: item.doneAt ?? Date.now(), status: item.status, msg: item.msg ?? "", file: item.detail },
        ];
  sel.value = {
    label: item.label,
    fileTarget: item.detail,
    status: item.status,
    startedAt: item.startedAt,
    doneAt: item.doneAt,
    msg: item.msg,
    logs,
  };
  showDetail.value = true;
}

/** 竖向时间轴：把日志条目补上「距上一步耗时」。 */
function makeTimeline(logs: LogEntry[], startAt: number): TimelineStep[] {
  let prev = startAt;
  return logs.map((l) => {
    const durMs = l.time - prev > 0 ? l.time - prev : 0;
    prev = l.time;
    return { time: l.time, status: l.status, title: l.msg, file: l.file, detail: l.detail, durMs };
  });
}

/** 从日志时间线汇总「文件类型列表 / 文件数 / 总大小」，供概要把头部展示。 */
function logsMeta(logs: LogEntry[]): { count: number; size: number; types: string[] } {
  let count = 0;
  let size = 0;
  const types = new Set<string>();
  for (const l of logs) {
    if (!l.fileType) continue;
    types.add(l.fileType);
    count += 1;
    if (l.fileSize !== undefined) size += l.fileSize;
  }
  return { count, size, types: [...types] };
}
const selMeta = computed(() => (sel.value ? logsMeta(sel.value.logs) : { count: 0, size: 0, types: [] as string[] }));
const archMeta = computed(() => (archiveSelRec.value ? logsMeta(recordLogs(archiveSelRec.value)) : { count: 0, size: 0, types: [] as string[] }));

const timeline = computed<TimelineStep[]>(() => (sel.value ? makeTimeline(sel.value.logs, sel.value.startedAt) : []));

/** 任务总耗时：有结束时刻用结束减开始，否则用最后一步拉平的时长。 */
const totalDur = computed<number | null>(() => {
  const s = sel.value;
  if (!s) return null;
  if (s.doneAt) return s.doneAt - s.startedAt;
  const last = timeline.value[timeline.value.length - 1];
  return last ? last.time - s.startedAt : 0;
});

/** 取一条记录的完整日志时间线；旧记录缺失 logs 时由起止时间回退构造。 */
function recordLogs(rec: TaskLogRecord): LogEntry[] {
  return rec.logs && rec.logs.length
    ? rec.logs
    : [
        { time: rec.startedAt, status: "running", msg: rec.label, file: rec.detail },
        { time: rec.doneAt ?? Date.now(), status: rec.status, msg: rec.msg ?? "", file: rec.detail },
      ];
}

// —— 归档内嵌详情列（不再弹出任务日志弹窗）——
const archiveSelRec = ref<TaskLogRecord | null>(null);
const archDetail = computed<TimelineStep[]>(() =>
  archiveSelRec.value ? makeTimeline(recordLogs(archiveSelRec.value), archiveSelRec.value.startedAt) : [],
);
const archTotalDur = computed<number | null>(() => {
  const rec = archiveSelRec.value;
  if (!rec) return null;
  if (rec.doneAt) return rec.doneAt - rec.startedAt;
  const last = archDetail.value[archDetail.value.length - 1];
  return last ? last.time - rec.startedAt : 0;
});

/** 切换归档日份：清空已选记录。 */
function onArchiveDate(): void {
  archiveSelRec.value = null;
}

/** 选中归档里的某条记录：右侧详情列展示其完整日志时间线。 */
function selectArchiveRec(rec: TaskLogRecord): void {
  archiveSelRec.value = rec;
}

function fmtTime(t: number): string {
  const d = new Date(t);
  const p = (n: number): string => String(n).padStart(2, "0");
  return `${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
}

function fmtClock(t: number): string {
  const d = new Date(t);
  const p = (n: number): string => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${fmtTime(t)}`;
}

/** 耗时格式化：160ms / 3.2s / 1m 20s。 */
function fmtDur(ms: number | null): string {
  if (ms == null) return "—";
  if (ms < 0) ms = 0;
  if (ms < 1000) return `${ms}ms`;
  const s = ms / 1000;
  if (s < 60) return `${s.toFixed(1)}s`;
  const m = Math.floor(s / 60);
  const rs = Math.round(s - m * 60);
  return `${m}m ${String(rs).padStart(2, "0")}s`;
}

function statusLabel(s: string): string {
  if (s === "done") return t("taskStatusDone");
  if (s === "error") return t("taskStatusError");
  return t("taskStatusRunning");
}

/** 对话式步骤文案：把步骤标题与操作文件合成一句（如「上传文件：a.txt」）。 */
function stepText(st: TimelineStep): string {
  let s = st.title ?? "";
  if (st.file) s = s ? `${s}：${st.file}` : st.file;
  return s;
}

onMounted(() => {
  void tasks.initTaskLogs();
  document.addEventListener("mousedown", onDocDown);
  window.addEventListener("resize", updatePos);
  window.addEventListener("scroll", updatePos, true);
});
onBeforeUnmount(() => {
  document.removeEventListener("mousedown", onDocDown);
  window.removeEventListener("resize", updatePos);
  window.removeEventListener("scroll", updatePos, true);
});

// 点外部关闭：点击面板外部任意处收起
function onDocDown(e: MouseEvent): void {
  const el = e.target as HTMLElement | null;
  if (el?.closest?.(".fw-bg-task-fab, .fw-bg-task-panel")) return;
  tasks.setOpen(false);
}
</script>

<style scoped>
.fw-bg-task-fab {
  position: relative;
  flex: 0 0 auto;
  /* 贴在状态栏最左：不再用 auto 外边距把按钮推向右侧（那是它居中时的写法）。 */
  margin: 0 0 0 0;
  width: 26px;
  height: 22px;
  border: 1px solid var(--dsh-border, #d0d7de);
  border-radius: 6px;
  background: transparent;
  color: var(--dsh-fg-weak, #8b949e);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, color 0.15s;
}
.fw-bg-task-fab:hover,
.fw-bg-task-fab.active {
  border-color: var(--dsh-accent, #238636);
  color: var(--dsh-accent, #238636);
  background: color-mix(in srgb, var(--dsh-accent, #238636) 14%, transparent);
}
.fw-bg-task-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  min-width: 15px;
  height: 15px;
  padding: 0 3px;
  border-radius: 8px;
  background: var(--el-color-danger, #f85149);
  color: #fff;
  font-size: 10px;
  line-height: 15px;
  text-align: center;
}
/* 定位容器：只负责跟随按钮定位，不裁剪箭头（panel 自身才 overflow:hidden） */
.fw-bg-task-wrap {
  position: fixed;
  z-index: 4000;
  width: 340px;
  /* 面板的圆角/裁剪由 panel 自身负责；这里保持溢出可见以露出下方箭头 */
}
.fw-bg-task-panel {
  position: relative;
  z-index: 1;
  width: 100%;
  max-height: 60vh;
  display: flex;
  flex-direction: column;
  background: var(--dsh-bg2, #161b22);
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 10px;
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.45);
  overflow: hidden;
}
/* 气泡指示箭头：向下指向任务按钮；只保留旋转后朝下的两条边 */
.fw-bg-task-arrow {
  position: absolute;
  z-index: 0;
  bottom: -6px;
  left: 50%;
  width: 12px;
  height: 12px;
  margin-left: -6px;
  background: var(--dsh-bg2, #161b22);
  border-right: 1px solid var(--dsh-border, #30363d);
  border-bottom: 1px solid var(--dsh-border, #30363d);
  border-bottom-right-radius: 3px;
  transform: rotate(45deg);
  transform-origin: center center;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.35);
}
.fw-bg-task-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  border-bottom: 1px solid var(--dsh-border, #30363d);
}
.fw-bg-task-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--dsh-fg, #c9d1d9);
}
.fw-bg-task-headacts {
  display: flex;
  align-items: center;
  gap: 6px;
}
.fw-bg-task-link {
  border: none;
  background: transparent;
  color: var(--dsh-accent, #58a6ff);
  font-size: 11px;
  cursor: pointer;
  padding: 2px 4px;
}
.fw-bg-task-link:disabled {
  opacity: 0.35;
  cursor: default;
}
.fw-bg-task-close {
  border: none;
  background: transparent;
  color: var(--dsh-fg-weak, #8b949e);
  font-size: 12px;
  cursor: pointer;
}
.fw-bg-task-bodylist {
  overflow-y: auto;
  flex: 1;
  min-height: 0;
  padding: 6px 8px;
}
.fw-bg-task-group {
  padding: 4px 8px;
  max-height: 300px;
  overflow: auto;
}
.fw-bg-task-grouplbl {
  font-size: 11px;
  color: var(--dsh-fg-weak, #8b949e);
  margin: 6px 0 4px;
}
.fw-bg-task-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px 6px;
  border-radius: 6px;
  font-size: 12px;
  color: var(--dsh-fg, #c9d1d9);
  cursor: pointer;
}
.fw-bg-task-row:hover {
  background: var(--dsh-hover, rgba(48, 54, 61, 0.4));
}
.fw-bg-task-spin {
  width: 12px;
  height: 12px;
  flex: 0 0 auto;
  border-radius: 50%;
  border: 2px solid var(--dsh-border, #30363d);
  border-top-color: var(--dsh-accent, #238636);
  animation: fw-task-spin 0.8s linear infinite;
}
@keyframes fw-task-spin {
  to {
    transform: rotate(360deg);
  }
}
.fw-bg-task-ico {
  width: 14px;
  flex: 0 0 auto;
  text-align: center;
  font-size: 12px;
}
.fw-bg-task-row.done .fw-bg-task-ico {
  color: var(--dsh-accent, #238636);
}
.fw-bg-task-row.error .fw-bg-task-ico,
.fw-bg-task-row.error .fw-bg-task-label {
  color: var(--el-color-danger, #f85149);
}
.fw-bg-task-label {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-shrink: 0;
  max-width: 60%;
}
.fw-bg-task-detail {
  color: var(--dsh-fg-weak, #8b949e);
  font-size: 11px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.fw-bg-task-see {
  margin-left: auto;
  flex: 0 0 auto;
  font-size: 11px;
  color: var(--dsh-accent, #58a6ff);
  opacity: 0;
  transition: opacity 0.15s;
}
.fw-bg-task-row:hover .fw-bg-task-see {
  opacity: 1;
}
.fw-bg-task-panel.sel .fw-bg-task-see {
  display: none;
}
.fw-bg-task-empty {
  padding: 20px;
  text-align: center;
  color: var(--dsh-fg-weak, #8b949e);
  font-size: 12px;
}
.fw-bg-task-pop-enter-active {
  transition: opacity 0.16s, transform 0.16s;
}
.fw-bg-task-pop-leave-active {
  transition: opacity 0.12s, transform 0.12s;
}
.fw-bg-task-pop-enter-from,
.fw-bg-task-pop-leave-to {
  opacity: 0;
  transform: translateY(6px);
}
</style>

<style>
/* 任务日志弹窗（append-to-body 渲染在 body 下，需全局样式 + 随主题 --dsh 变量） */
.fw-tasklog-dialog .el-dialog,
.fw-tasklog-dialog .el-dialog__header,
.fw-tasklog-dialog .el-dialog__body {
  background: var(--dsh-bg2, #1c2128);
  color: var(--dsh-fg, #c9d1d9);
}
.fw-tasklog-dialog .el-dialog {
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 10px;
  /* 收起时抽屉无 transform，弹窗 fixed 相对视口；限制整体高度避免长日志溢出视口底部 */
  margin-top: 12vh;
  margin-bottom: 12vh;
  max-height: 76vh;
  display: flex;
  flex-direction: column;
}
.fw-tasklog-dialog .el-dialog__header {
  flex-shrink: 0;
}
.fw-tasklog-dialog .el-dialog__body {
  flex-shrink: 1;
  min-height: 0;
  overflow-y: auto;
}
.fw-tasklog-dialog .el-dialog__title {
  color: var(--dsh-fg, #c9d1d9);
  font-size: 14px;
  font-weight: 600;
}
.fw-tasklog-dialog .el-dialog__headerbtn .el-dialog__close {
  color: var(--dsh-fg-weak, #8b949e);
}
/* ── 概要头部 ─────────────────────────────── */
.fw-tlog-head {
  border-bottom: 1px solid var(--dsh-border, #30363d);
  padding-bottom: 10px;
  margin-bottom: 12px;
}
.fw-tlog-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--dsh-fg, #c9d1d9);
  word-break: break-all;
}
.fw-tlog-fileitem {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-top: 6px;
  font-size: 12px;
}
.fw-tlog-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 14px;
  margin-top: 8px;
  font-size: 11px;
  color: var(--dsh-fg-weak, #8b949e);
}
.fw-tlog-st-head {
  font-weight: 600;
}
.fw-tlog-st-head.running {
  color: var(--dsh-accent, #58a6ff);
}
.fw-tlog-st-head.done {
  color: var(--dsh-accent, #238636);
}
.fw-tlog-st-head.error {
  color: var(--el-color-danger, #f85149);
}
/* ── 竖向时间轴 ───────────────────────────── */
.fw-tlog-timeline {
  display: flex;
  flex-direction: column;
  max-height: 300px;
  min-height: 100px;
  overflow: auto;
}
.fw-tlog-step {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}
.fw-tlog-rail {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 auto;
  width: 12px;
}
.fw-tlog-dot {
  width: 9px;
  height: 9px;
  flex: 0 0 auto;
  border-radius: 50%;
  border: 2px solid var(--dsh-fg-weak, #8b949e);
  background: var(--dsh-bg2, #1c2128);
  margin-top: 5px;
}
.fw-tlog-dot.running {
  border-color: var(--dsh-accent, #58a6ff);
  animation: fw-tlog-pulse 1.2s ease-in-out infinite;
}
.fw-tlog-dot.done {
  border-color: var(--dsh-accent, #238636);
  background: var(--dsh-accent, #238636);
}
.fw-tlog-dot.error {
  border-color: var(--el-color-danger, #f85149);
  background: var(--el-color-danger, #f85149);
}
@keyframes fw-tlog-pulse {
  50% {
    box-shadow: 0 0 0 4px color-mix(in srgb, var(--dsh-accent, #58a6ff) 25%, transparent);
  }
}
.fw-tlog-line {
  flex: 1 1 auto;
  width: 2px;
  min-height: 8px;
  background: var(--dsh-border, #30363d);
}
.fw-tlog-ct {
  flex: 1 1 auto;
  min-width: 0;
  padding-bottom: 14px;
}
/* 对话气泡：时间/状态/耗时 顶行 + 合成句 */
.fw-tlog-bubble {
  border: 1px solid var(--dsh-border, #30363d);
  border-left-width: 3px;
  border-radius: 8px;
  background: var(--dsh-bg2, #1c2128);
  padding: 7px 10px;
}
.fw-tlog-bubble.running {
  border-left-color: var(--dsh-accent, #58a6ff);
}
.fw-tlog-bubble.done {
  border-left-color: var(--dsh-accent, #238636);
}
.fw-tlog-bubble.error {
  border-left-color: var(--el-color-danger, #f85149);
}
.fw-tlog-brow {
  display: flex;
  align-items: baseline;
  gap: 10px;
}
.fw-tlog-time {
  flex: 0 0 auto;
  font-family: ui-monospace, "Cascadia Code", Consolas, monospace;
  font-size: 11px;
  color: var(--dsh-fg-weak, #8b949e);
}
.fw-tlog-st {
  flex: 0 0 auto;
  font-size: 11px;
  font-weight: 600;
  padding: 0 6px;
  border-radius: 9px;
  line-height: 16px;
}
.fw-tlog-st.running {
  color: var(--dsh-accent, #58a6ff);
  background: color-mix(in srgb, var(--dsh-accent, #58a6ff) 14%, transparent);
}
.fw-tlog-st.done {
  color: var(--dsh-accent, #238636);
  background: color-mix(in srgb, var(--dsh-accent, #238636) 14%, transparent);
}
.fw-tlog-st.error {
  color: var(--el-color-danger, #f85149);
  background: color-mix(in srgb, var(--el-color-danger, #f85149) 14%, transparent);
}
.fw-tlog-dur-tip {
  margin-left: auto;
  flex: 0 0 auto;
  font-size: 11px;
  color: var(--dsh-fg-weak, #8b949e);
}
.fw-tlog-dur-tip b {
  color: var(--dsh-accent, #58a6ff);
  font-family: ui-monospace, "Cascadia Code", Consolas, monospace;
  font-weight: 600;
}
.fw-tlog-btext {
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.5;
  color: var(--dsh-fg, #c9d1d9);
  word-break: break-all;
}
.fw-tlog-bnote {
  margin-top: 2px;
  font-size: 11px;
  color: var(--dsh-fg-weak, #8b949e);
  word-break: break-all;
}
.fw-tlog-msg {
  min-width: 0;
  word-break: break-word;
}
/* ── 归档浏览器弹窗 ───────────────────────────── */
.fw-taskarc-dialog .el-dialog,
.fw-taskarc-dialog .el-dialog__header,
.fw-taskarc-dialog .el-dialog__body {
  background: var(--dsh-bg2, #1c2128);
  color: var(--dsh-fg, #c9d1d9);
}
.fw-taskarc-dialog .el-dialog {
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 10px;
  margin-top: 12vh;
  margin-bottom: 12vh;
  max-height: 76vh;
  display: flex;
  flex-direction: column;
}
.fw-taskarc-dialog .el-dialog__header {
  flex-shrink: 0;
}
.fw-taskarc-dialog .el-dialog__body {
  flex-shrink: 1;
  min-height: 0;
  overflow: hidden;
}
.fw-taskarc-dialog .el-dialog__title {
  color: var(--dsh-fg, #c9d1d9);
  font-size: 14px;
  font-weight: 600;
}
.fw-taskarc-dialog .el-dialog__headerbtn .el-dialog__close {
  color: var(--dsh-fg-weak, #8b949e);
}
.fw-taskarc {
  display: flex;
  gap: 0;
  height: 48vh;
  min-height: 200px;
}
.fw-taskarc-dates {
  flex: 0 0 190px;
  overflow-y: auto;
  border-right: 1px solid var(--dsh-border, #30363d);
  padding-right: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.fw-taskarc-date {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  padding: 7px 10px;
  border: 1px solid transparent;
  border-radius: 7px;
  background: transparent;
  color: var(--dsh-fg, #c9d1d9);
  font-size: 12px;
  cursor: pointer;
  text-align: left;
}
.fw-taskarc-date:hover {
  background: var(--dsh-hover, rgba(48, 54, 61, 0.4));
}
.fw-taskarc-date.active {
  border-color: var(--dsh-accent, #58a6ff);
  background: color-mix(in srgb, var(--dsh-accent, #58a6ff) 14%, transparent);
}
.fw-taskarc-cnt {
  font-size: 11px;
  color: var(--dsh-fg-weak, #8b949e);
}
/* 中列：某日份的记录列表 */
.fw-taskarc-records {
  flex: 0 0 260px;
  min-width: 0;
  overflow-y: auto;
  border-right: 1px solid var(--dsh-border, #30363d);
  padding: 0 8px;
}
.fw-taskarc-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  border-radius: 6px;
  border: 1px solid transparent;
  font-size: 12px;
  color: var(--dsh-fg, #c9d1d9);
  cursor: pointer;
}
.fw-taskarc-row:hover {
  background: var(--dsh-hover, rgba(48, 54, 61, 0.4));
}
/* 中列选中记录高亮（与左列日期选中一致） */
.fw-taskarc-row.active {
  border-color: var(--dsh-accent, #58a6ff);
  background: color-mix(in srgb, var(--dsh-accent, #58a6ff) 14%, transparent);
}
.fw-taskarc-ico {
  flex: 0 0 auto;
  width: 14px;
  text-align: center;
  font-size: 12px;
}
.fw-taskarc-row.done .fw-taskarc-ico {
  color: var(--dsh-accent, #238636);
}
.fw-taskarc-row.error .fw-taskarc-ico,
.fw-taskarc-row.error .fw-taskarc-label {
  color: var(--el-color-danger, #f85149);
}
.fw-taskarc-label {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-shrink: 0;
  max-width: 45%;
}
.fw-taskarc-recdetail {
  color: var(--dsh-fg-weak, #8b949e);
  font-size: 11px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.fw-taskarc-time {
  margin-left: auto;
  flex: 0 0 auto;
  font-size: 11px;
  color: var(--dsh-fg-weak, #8b949e);
}
/* 右列：选中记录的完整详情（内嵌时间轴，不弹日志弹窗） */
.fw-taskarc-detail {
  flex: 1 1 auto;
  min-width: 0;
  overflow-y: auto;
  padding: 0 12px;
}
.fw-taskarc-detail .fw-tlog-timeline {
  max-height: none;
}
.fw-taskarc-none {
  padding: 24px;
  text-align: center;
  color: var(--dsh-fg-weak, #8b949e);
  font-size: 12px;
}
</style>