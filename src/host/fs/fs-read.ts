/**
 * fs-read —— 文本文件写入（工作区 root containment 之内）。
 *
 * 说明：文件查看（打开/预览/解析 Office、图片、音视频）已统一改道到 DSH 右侧原生查看器，
 * 工作台 host 侧不再负责读取与解析文件内容，仅保留写侧所需的 saveText。
 */
import { dirname } from "node:path";
import { mkdir, writeFile } from "node:fs/promises";
import { ensureWsWritePath } from "./fs-tree.js";

/** 保存文本到文件（root 之内，必要时创建父目录）。 */
export async function saveText(root: string, target: string, content: string): Promise<string> {
  const safe = await ensureWsWritePath(root, target);
  await mkdir(dirname(safe), { recursive: true });
  await writeFile(safe, content, "utf8");
  return safe;
}
