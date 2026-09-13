/**
 * 后台任务通用的文件类型名 / 大小格式化工具。
 * 供各文件操作任务在记录步骤时派生「文件类型名称」「文件大小」，
 * 并在任务概要把头部汇总展示。
 */

/** 由文件名派生类型名（扩展名；无扩展名返回空串，调用方用 t("typeFile") 兜底）。 */
export function fileExtType(name: string): string {
  const i = name.lastIndexOf(".");
  return i > 0 && i < name.length - 1 ? name.slice(i) : "";
}

/** 字节 → 人类可读大小（与文件列表列宽一致的格式）。 */
export function formatFileSize(bytes?: number | null): string {
  if (bytes === undefined || bytes === null || bytes < 0) return "—";
  const units = ["B", "KB", "MB", "GB", "TB"];
  let v = bytes;
  let i = 0;
  while (v >= 1024 && i < units.length - 1) {
    v /= 1024;
    i += 1;
  }
  return `${i === 0 ? v : v >= 10 ? Math.round(v) : v.toFixed(1)} ${units[i]}`;
}