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