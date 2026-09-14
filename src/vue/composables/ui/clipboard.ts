/**
 * 内部剪贴板：在插件内维护复制/剪切的文件路径。
 * 与系统剪贴板无关，粘贴时仅在本插件内按 op 做复制(copy)或移动(cut)。
 */
import { ref } from "vue";
import type { ClipboardEntry } from "../../../shared/types";

const state = ref<ClipboardEntry>({ op: "", paths: [] });

export function useClipboard() {
  return state;
}

export function copyPaths(paths: string[]): void {
  state.value = { op: "copy", paths };
}

export function cutPaths(paths: string[]): void {
  state.value = { op: "cut", paths };
}

export function clearClipboard(): void {
  state.value = { op: "", paths: [] };
}

export function clipboardHas(): boolean {
  return state.value.paths.length > 0;
}

export function clipboardOf(): ClipboardEntry {
  return state.value;
}

/**
 * 把纯文本写入系统剪贴板（供「复制完整/相对路径」等使用）。
 * 与上面的内部文件剪贴板无关：这里只写系统剪贴板，不参与粘贴的文件复制/移动。
 * @returns 是否写入成功（浏览器拒绝权限时为 false）。
 */
export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}