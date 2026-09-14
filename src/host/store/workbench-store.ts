/**
 * 文件工作台持久化存储 —— 后端 JSON 配置文件（按类型分文件）。
 *
 * 不同持久化类型各自写入独立 JSON 文件，目录为：
 *   {DSH_HOME | ~/.dsh}/fileworkbench/
 *   ├── prefs.json     界面偏好
 *   ├── favorites.json 收藏路径
 *   └── layout.json    布局（导航分组展开态 / 资源管理器分隔比例）
 *
 * key → 文件名 由白名单 PERSIST_KEYS 约束，杜绝路径穿越。
 */
import { readFile, writeFile, mkdir, readdir } from "node:fs/promises";
import { join, basename } from "node:path";
import { homedir } from "node:os";
import type { TaskArchiveMap, TaskLogRecord } from "../../shared/types";

/** 允许持久化的 key 白名单（key 即产物文件名，不含扩展名）。 */
export const PERSIST_KEYS = [
  "prefs",
  "favorites",
  "recent",
  "layout",
  // 终端浮窗几何 / 按目录视图记忆 / 后台任务历史：均为客户端实际在用的键。
  "termWin",
  "folderViews",
  "taskLogs",
  // VS Code 编辑器面板状态（项目目录 / 已开标签 / 激活标签 / 展开节点 / 比例）。
  "vscode",
] as const;
export type PersistKey = (typeof PERSIST_KEYS)[number];

/** 持久化文件存放目录：{DSH_HOME | ~/.dsh}/fileworkbench/。 */
function stateDir(): string {
  const dshHome = process.env.DSH_HOME || join(homedir(), ".dsh");
  return join(dshHome, "fileworkbench");
}

/** key 是否合法：命中白名单。 */
function isPersistKey(key: string): boolean {
  return (PERSIST_KEYS as readonly string[]).includes(key);
}

function fileFor(key: string): string {
  return join(stateDir(), `${key}.json`);
}

/** 读取某个持久化 key 的配置（文件不存在或损坏时返回 undefined）。 */
export async function getPersistKey(key: string): Promise<unknown> {
  if (!isPersistKey(key)) return undefined;
  try {
    return JSON.parse(await readFile(fileFor(key), "utf8"));
  } catch {
    return undefined;
  }
}

/** 写入某个持久化 key 到其独立配置文件。 */
export async function setPersistKey(key: string, value: unknown): Promise<void> {
  if (!isPersistKey(key)) {
    throw new Error(`unknown persist key: ${key}`);
  }
  await mkdir(stateDir(), { recursive: true });
  await writeFile(fileFor(key), JSON.stringify(value ?? null), "utf8");
}

/** 汇总所有持久化 key 为单个对象（供客户端一次性读取全量）。 */
export async function getAllPersist(): Promise<Record<string, unknown>> {
  const out: Record<string, unknown> = {};
  for (const k of PERSIST_KEYS) {
    const v = await getPersistKey(k);
    if (v !== undefined) out[k] = v;
  }
  return out;
}

/* ── 后台任务归档（taskArchives/<日期>.json，逐日独立文件） ───────────────── */

/** 归档日期合法性：YYYY-MM-DD，杜绝路径穿越拾取任意文件。 */
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

/** 归档存放目录：{stateDir}/taskArchives/。 */
function taskArchivesDir(): string {
  return join(stateDir(), "taskArchives");
}

/** 按日期读取当日归档记录；文件缺失或损坏返回空数组。 */
async function readTaskArchive(date: string): Promise<TaskLogRecord[]> {
  if (!DATE_RE.test(date)) return [];
  try {
    const parsed: unknown = JSON.parse(await readFile(join(taskArchivesDir(), `${date}.json`), "utf8"));
    return Array.isArray(parsed) ? (parsed as TaskLogRecord[]) : [];
  } catch {
    return [];
  }
}

/** 列出所有已归档日期（倒序，最新在前）。 */
export async function listTaskArchiveDates(): Promise<string[]> {
  try {
    const names = await readdir(taskArchivesDir());
    return names
      .filter((n) => n.endsWith(".json") && DATE_RE.test(basename(n, ".json")))
      .map((n) => basename(n, ".json"))
      .sort((a, b) => (a < b ? 1 : -1));
  } catch {
    return [];
  }
}

/** 读取全量归档映射（{ 日期: 记录[] }）。 */
export async function readTaskArchives(): Promise<TaskArchiveMap> {
  const dates = await listTaskArchiveDates();
  const map: TaskArchiveMap = {};
  for (const d of dates) map[d] = await readTaskArchive(d);
  return map;
}

/**
 * 整体覆写归档映射：逐日期写为独立 JSON 文件。
 * 注意：清空某日归档时写空数组而非删除文件——受限环境对删除有安全守卫，
 * 前端按记录数过滤空日份即可。
 */
export async function writeTaskArchives(map: TaskArchiveMap): Promise<void> {
  const dir = taskArchivesDir();
  await mkdir(dir, { recursive: true });
  const dates = Object.keys(map).filter((d) => DATE_RE.test(d));
  await Promise.all(
    dates.map((d) => writeFile(join(dir, `${d}.json`), JSON.stringify(map[d] ?? []), "utf8")),
  );
}
