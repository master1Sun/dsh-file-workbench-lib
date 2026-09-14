/**
 * fs-read —— 文本文件写入（工作区 root containment 之内）。
 *
 * 说明：文件查看（打开/预览/解析 Office、图片、音视频）已统一改道到 DSH 右侧原生查看器，
 * 工作台 host 侧不再负责读取与解析文件内容，仅保留写侧所需的 saveText。
 */
import { dirname } from "node:path";
import { mkdir, writeFile } from "node:fs/promises";
import { ensureWsWritePath } from "./fs-tree.js";

/**
 * 保存内容到文件（root 之内，必要时创建父目录）。
 *
 * 接受字符串或字节：编辑器保存走 `fs/text-codec.encodeText()` 产出的字节（已按原编码 /
 * 原行尾 / 原 BOM 还原），其余调用方仍可传字符串（按 UTF-8 落盘）。
 */
export async function saveText(root: string, target: string, content: string | Uint8Array): Promise<string> {
  const safe = await ensureWsWritePath(root, target);
  await mkdir(dirname(safe), { recursive: true });
  await writeFile(safe, content);
  return safe;
}
