/**
 * 回收站操作（session 级共享）：FileListPane 的右键/命令栏与 NavPane 的回收站右键
 * 共用同一份「清空回收站」实现（确认 + 后台任务 + 轮询计数归零），不再各自复制。
 */
import { confirmDialog } from "../core/dialog";
import { useI18n } from "../core/i18n";
import * as api from "../core/useApi";
import { startTask } from "./tasks";
import { explorer, refreshRecycle } from "../../stores/explorer";
import { toast } from "../../stores/workbench";

const { t } = useI18n();

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** 清空系统回收站：确认后执行并轮询计数归零（最多约 2 分钟），全程作为后台任务展示。 */
export async function emptyRecycleBin(): Promise<void> {
  if ((explorer.recycleItems?.length ?? 0) === 0) return;
  const ok = await confirmDialog({ title: t("recycleEmpty"), message: t("recycleEmptyConfirm") });
  if (!ok) return;
  const task = startTask(t("recycleEmptying"), "");
  try {
    await api.recycleEmpty();
    let count = explorer.recycleItems?.length ?? 0;
    // 最多轮询约 2 分钟；计数归零即视为完成。
    for (let i = 0; i < 120; i += 1) {
      await sleep(1000);
      try {
        count = (await api.recycleCount()).count;
      } catch {
        /* 计数接口瞬时失败，忽略并继续 */
      }
      task.step(t("recycleEmptyProgress", { count }));
      if (count <= 0) break;
    }
    task.updateLabel(t("recycleEmptyDone"));
    task.done(t("recycleEmptyDone"));
    await refreshRecycle();
  } catch (err) {
    task.fail((err as Error).message);
    toast("error", (err as Error).message);
  }
}
