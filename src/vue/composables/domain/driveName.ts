/**
 * 磁盘展示名（国际化）。
 *
 * host 只负责读出**原始卷标**（`label`，读不到就是空串），不再拼中文兜底名；
 * 「本地磁盘 (C:)」/「Local Disk (C:)」这类兜底文案一律在前端按当前语言生成，
 * 避免 host 侧写死中文导致英文界面下出现中文盘符名。
 */
import { t } from "../core/i18n";
import type { DriveInfo, MyComputerItem } from "../../../shared/types";

/**
 * 磁盘展示名。
 * @param letter 盘符字母（win32：如 `C`；POSIX：空串）。
 * @param label  系统卷标（无卷标为空）。
 */
export function driveDisplayName(letter: string, label?: string): string {
  const d = (letter ?? "").replace(":", "").trim().charAt(0).toUpperCase();
  if (!d) return label || "/";
  return label ? `${label} (${d}:)` : t("driveLabel", { drive: d });
}

/** 从 `/drives` 的 DriveInfo 取本地化展示名（「此电脑」视图、目录选择弹窗等）。 */
export function driveName(d: Pick<DriveInfo, "letter" | "label">): string {
  return driveDisplayName(d.letter, d.label);
}

/** 从 `/mycomputer` 的入口项取本地化展示名（只有磁盘项需要处理卷标，其余原样返回）。 */
export function myComputerDriveName(it: Pick<MyComputerItem, "type" | "name" | "path"> & { label?: string }): string {
  if (it.type !== "drive") return it.name;
  return driveDisplayName(it.path?.charAt(0) ?? "", it.label);
}
