/**
 * 后台任务登记（模块级单例）：统一收集上传/压缩/解压/复制/删除等长操作，
 * 记录任务开始、中间步骤与结束状态；供状态栏 / 任务面板展示「运行中 + 历史归档」。
 *
 * 每个任务结束时会把归档记录写入后端持久化 JSON（persist → taskLogs），
 * 供任务面板「历史」跨会话查看；用户清除历史时同步删除。
 */
import { reactive } from "vue";
import * as api from "../core/useApi";
import type { TaskArchiveMap, TaskLogRecord } from "../../../shared/types";

export type TaskStatus = "running" | "done" | "error";

/** 单条任务内部日志（用于追溯某个任务的过程）。 */
export interface LogEntry {
  time: number;
  status: TaskStatus;
  msg: string;
  /** 该步骤操作的文件/目录目标路径（可选）。 */
  file?: string;
  /** 该步骤补充细节（可选，如源/目标计数等）。 */
  detail?: string;
  /** 该步骤操作文件的类型名称（如 .png / 文件）。 */
  fileType?: string;
  /** 该步骤操作文件的大小（字节，仅文件）。 */
  fileSize?: number;
}

export interface TaskItem {
  /** 单调自增 id。 */
  id: number;
  /** 操作描述（翻译后文案）。 */
  label: string;
  /** 目标详情（文件/目录路径或计数）。 */
  detail?: string;
  status: TaskStatus;
  /** 成功/失败补充消息。 */
  msg?: string;
  startedAt: number;
  doneAt?: number;
  /** 日志时间线（开始 + 结束）。 */
  logs: LogEntry[];
}

export interface TaskHandle {
  /** 记录一个中间步骤（仅运行中生效）。 */
  step(msg: string, file?: string, detail?: string, fileType?: string, fileSize?: number): void;
  /** 修改任务描述文案（运行中展示与结束后的记录同步更新）。 */
  updateLabel(label: string): void;
  /** 标记成功（可带补充消息）。 */
  done(msg?: string): void;
  /** 标记失败（带原因）。 */
  fail(msg?: string): void;
}

interface TaskState {
  /** 会话内任务（运行中 + 刚结束，最新在前）。 */
  list: TaskItem[];
  /** 持久化历史（已结束任务，最前为最新）：仅保留「今日」活跃记录。 */
  history: TaskLogRecord[];
  /** 归档：跨天 / 被清空后按日期（YYYY-MM-DD）分组的已结束任务，供「查看归档」翻看。 */
  archives: TaskArchiveMap;
}

const state = reactive<TaskState>({ list: [], history: [], archives: {} });
let seq = 1;
let loaded = false;

/** 任务面板展开状态（供状态栏按钮与面板联动）。 */
const open = reactive<{ value: boolean }>({ value: false });
function setOpen(v: boolean): void {
  open.value = v;
}

/** 归一化为本地日期键 YYYY-MM-DD（跨天归档用）。 */
function dayKey(ms: number): string {
  const d = new Date(ms);
  const p = (n: number): string => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

/** 今日日期键。 */
function todayKey(): string {
  return dayKey(Date.now());
}

/** 把一组记录追加进当日归档（最新在前）并落盘。 */
function archiveToday(records: TaskLogRecord[]): void {
  if (!records.length) return;
  const k = todayKey();
  const arr = state.archives[k] ?? (state.archives[k] = []);
  for (const r of records) arr.unshift(r);
  void api.saveTaskArchives(state.archives);
}

/**
 * 加载后端持久化历史 + 归档（面板首次挂载时调用一次）。
 * 活跃历史里跨天的记录会自动迁移进各自日份归档。
 */
export async function initTaskLogs(): Promise<void> {
  if (loaded) return;
  loaded = true;
  try {
    const active = await api.loadTaskLogs();
    const archives = await api.loadTaskArchives();
    const todayK = todayKey();
    const keep: TaskLogRecord[] = [];
    let moved = false;
    for (const rec of active) {
      const k = dayKey(rec.doneAt ?? rec.startedAt);
      if (k === todayK) {
        keep.push(rec);
      } else {
        (archives[k] ??= []).push(rec);
        moved = true;
      }
    }
    // 每个日份内最新在前，保持倒序浏览体验。
    for (const k of Object.keys(archives)) {
      archives[k].sort((a, b) => (b.doneAt ?? b.startedAt) - (a.doneAt ?? a.startedAt));
    }
    state.history = keep;
    state.archives = archives;
    if (moved) {
      persistHistory();
      void api.saveTaskArchives(archives);
    }
  } catch {
    state.history = [];
    state.archives = {};
  }
}

function persistHistory(): void {
  void api.saveTaskLogs(state.history);
}

/** 追加一条已结束任务：今日进活跃历史，跨天直接归档进对应日份。 */
function pushHistory(rec: TaskLogRecord): void {
  const k = dayKey(rec.doneAt ?? rec.startedAt);
  if (k === todayKey()) {
    state.history.unshift(rec);
    if (state.history.length > 200) state.history.length = 200;
    persistHistory();
  } else {
    const arr = state.archives[k] ?? (state.archives[k] = []);
    arr.unshift(rec);
    void api.saveTaskArchives(state.archives);
  }
}

/** 发起一个新后台任务，返回句柄用于标记完成/失败。 */
export function startTask(label: string, detail?: string, fileType?: string, fileSize?: number): TaskHandle {
  const id = seq++;
  // 必须用 reactive，否则 done/fail 直接改原始对象会绕过代理，UI 无法刷新。
  const item = reactive<TaskItem>({
    id,
    label,
    detail,
    status: "running",
    startedAt: Date.now(),
    logs: [{ time: Date.now(), status: "running", msg: label, file: detail, fileType, fileSize }],
  });
  state.list.unshift(item);
  // 只保留最近 80 条会话内记录（运行中 + 刚结束）。
  if (state.list.length > 80) state.list.length = 80;

  const finish = (status: "done" | "error", msg?: string): void => {
    item.status = status;
    item.doneAt = Date.now();
    item.msg = msg;
    item.logs.push({ time: item.doneAt, status, msg: msg ?? "", file: detail });
    // 用 item.label（而非闭包初始 label），以反映 updateLabel 改过的文案；
    // 并携带完整日志时间线，确保历史/归档详情可逐步追溯。
    pushHistory({
      label: item.label,
      detail,
      status,
      msg,
      startedAt: item.startedAt,
      doneAt: item.doneAt,
      logs: item.logs.map((l) => ({ ...l })),
    });
  };
  const step = (msg: string, file?: string, detail?: string, fileType?: string, fileSize?: number): void => {
    if (item.status !== "running") return; // 已结束的任务不再追加中间步骤
    item.logs.push({ time: Date.now(), status: "running", msg, file, detail, fileType, fileSize });
  };
  const updateLabel = (label: string): void => {
    item.label = label;
  };
  return {
    step,
    updateLabel,
    done: (msg) => finish("done", msg),
    fail: (msg) => finish("error", msg),
  };
}

/** 清除历史：先把当前活跃历史归档进今日份，再清空面板历史列表。 */
export async function clearFinished(): Promise<void> {
  archiveToday(state.history);
  state.history = [];
  state.list = state.list.filter((t) => t.status === "running");
  persistHistory();
}

/** 清空全部（含运行中）：活跃历史先归档再清空。 */
export async function clearAll(): Promise<void> {
  archiveToday(state.history);
  state.history = [];
  state.list = [];
  persistHistory();
}

export const tasks = { state, startTask, initTaskLogs, clearFinished, clearAll, setOpen, open };
