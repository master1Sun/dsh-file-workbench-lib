/**
 * 克隆 / 检出弹窗的共享表单逻辑（Git 与 SVN 两面板共用，避免重复实现）。
 *
 * 两个面板（GitCloneDialog / SvnCheckoutDialog）通过 `kind` 区分行为：
 *  - 提交时调用的后端路由（/git/clone 或 /svn/checkout）由 kind 决定；
 *  - Git 额外带 shallow，SVN 额外带 revision —— 这些「类型专属字段」由面板自己渲染，
 *    本 composable 只负责共享部分（地址 / 父目录 / 子目录名推导 / 落点预览 / 进度 / 错误）。
 *
 * 状态**随面板挂载重置**（不清空上一次的地址，避免误把旧仓库再克隆一遍），
 * 由模块级 `cloneDialog` 的 open 事件驱动。
 */
import { computed, ref, watch } from "vue";
import { useI18n } from "./i18n";
import { cloneDialog, closeCloneDialog } from "./cloneDialog";
import { toast } from "./toast";
import * as api from "./useApi";
import { deriveRepoDirName } from "../../../shared/repo";
import type { RepoCloneKind } from "../../../shared/types";

export function useCloneForm(kind: RepoCloneKind) {
  const { t } = useI18n();

  const state = ref({
    url: "",
    dir: cloneDialog.dir,
    name: "",
    shallow: false,
    revision: "",
  });
  /** 用户是否手工改过子目录名：改过就不再跟随地址自动覆盖。 */
  const nameTouched = ref(false);
  const busy = ref(false);
  const error = ref("");
  const elapsed = ref(0);
  const pickerOpen = ref(false);
  /** 计时器句柄（秒表）；关闭/完成时务必清掉，否则弹窗关掉后还在空转。 */
  let timer = 0;
  let startedAt = 0;

  /** 用与目录一致的分隔符拼接（宿主会自行归一，这里只为预览观感正确）。 */
  function joinDir(dir: string, name: string): string {
    const d = (dir ?? "").trim();
    if (!d) return "";
    const sep = d.includes("\\") ? "\\" : "/";
    return `${d.replace(/[\\/]+$/, "")}${sep}${name}`;
  }

  const targetPath = computed(() => {
    const name = state.value.name.trim() || deriveRepoDirName(state.value.url);
    return name ? joinDir(state.value.dir, name) : "";
  });

  const canSubmit = computed(
    () => !!state.value.url.trim() && !!state.value.dir.trim() && !!targetPath.value,
  );

  // 地址变化时自动推导子目录名 —— 但用户一旦手工改过就不再覆盖（否则改到一半被冲掉）。
  watch(
    () => state.value.url,
    (url) => {
      if (nameTouched.value) return;
      state.value.name = deriveRepoDirName(url);
    },
  );
  watch(
    () => state.value.name,
    (v, old) => {
      // 忽略「由上面那个 watch 自动写入」的那次变化：只有与推导结果不同才算手工改过。
      if (v !== deriveRepoDirName(state.value.url) && old !== undefined) nameTouched.value = true;
    },
  );

  // 打开瞬间从模块级状态接管（kind / dir / key 由打开方设定），并清掉上一次的错误与计时。
  // immediate：面板是 v-if 挂上来的，挂载时 open 已经是 true，需要立刻初始化。
  watch(
    () => cloneDialog.open,
    (open) => {
      if (!open) return;
      state.value = {
        url: "",
        dir: cloneDialog.dir,
        name: "",
        shallow: false,
        revision: "",
      };
      nameTouched.value = false;
      error.value = "";
      elapsed.value = 0;
      busy.value = false;
    },
    { immediate: true },
  );

  function onDirPicked(dir: string): void {
    state.value.dir = dir;
  }

  /** 关闭请求（含点遮罩 / ESC / 右上角）：忙时不理会，避免克隆途中把界面关掉。 */
  function onModel(v: boolean): void {
    if (v || busy.value) return;
    closeCloneDialog();
  }

  function tick(): void {
    elapsed.value = Math.round((Date.now() - startedAt) / 1000);
  }

  async function submit(): Promise<void> {
    if (busy.value || !canSubmit.value) return;
    const { url, dir, shallow, revision } = state.value;
    error.value = "";
    busy.value = true;
    startedAt = Date.now();
    elapsed.value = 0;
    timer = window.setInterval(tick, 1000);
    try {
      const res = await api.cloneRepo(kind, {
        url: url.trim(),
        dir: dir.trim(),
        name: state.value.name.trim() || undefined,
        depth: kind === "git" && shallow ? 1 : 0,
        revision: kind === "svn" ? revision.trim() || undefined : undefined,
        key: cloneDialog.key || undefined,
      });
      const done = cloneDialog.onDone;
      // 先取回调再关闭：closeCloneDialog() 会释放 onDone，顺序反了就永远拿不到。
      closeCloneDialog();
      toast("ok", t(kind === "git" ? "repoCloneDoneGit" : "repoCloneDoneSvn", { name: res.name }));
      try {
        done?.({ path: res.path, name: res.name });
      } catch {
        /* 打开新目录失败不该把「克隆成功」这件事也变成失败 */
      }
    } catch (e) {
      // 保留弹窗与已填内容：绝大多数失败（地址写错、目录已存在、无权限）改一下就重试，
      // 关掉重填反而更麻烦。
      error.value = (e as Error)?.message || String(e);
    } finally {
      busy.value = false;
      if (timer) {
        window.clearInterval(timer);
        timer = 0;
      }
    }
  }

  /** 面板卸载时清掉秒表，避免空转。 */
  function dispose(): void {
    if (timer) window.clearInterval(timer);
    timer = 0;
  }

  return {
    t,
    state,
    busy,
    error,
    elapsed,
    pickerOpen,
    targetPath,
    canSubmit,
    onDirPicked,
    onModel,
    submit,
    dispose,
  };
}
