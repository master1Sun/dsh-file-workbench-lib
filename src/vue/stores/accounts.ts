/**
 * 账号（Git / SVN 凭据）列表 + 统一对话框状态。
 *
 * Git 面板与 SVN 面板**共用同一个**「账号管理」对话框，故状态收敛为模块级单例：
 * 打开时要预填的类型（按发起面板决定）与仓库地址（取自当前面板的仓库）都由这里承载，
 * 避免两个面板各存一份导致「在 Git 面板加的账号，SVN 面板看不到」。
 *
 * 列表来自 `/accounts`，已由 host 抹去机密（只有 secretKind 与 hasSecret 标记）——
 * **明文口令永远不会回传前端**，表单里留空即表示沿用现有值（与 ssh-hosts 同一约定）。
 */
import { reactive, ref } from "vue";
import * as api from "../composables/core/useApi";

/** 已配置的账号（无机密）。 */
export const accounts = ref<api.AccPublic[]>([]);
/** 首次加载是否完成（区分「还没拉」与「确实没有」）。 */
export const accountsLoaded = ref(false);

/** 统一对话框状态。 */
export const accountDialog = reactive({
  open: false,
  /** 新增时预填的类型：Git 面板开 → git，SVN 面板开 → svn。 */
  kind: "git" as api.AccountKind,
  /** 新增时预填的仓库地址（当前面板的仓库，拿不到则为空）。 */
  url: "",
});

/** 打开「账号管理」并预填（新增模式；编辑由对话框内部的行内按钮进入）。 */
export function openAccountDialog(preset: { kind: api.AccountKind; url?: string }): void {
  accountDialog.kind = preset.kind;
  accountDialog.url = preset.url ?? "";
  accountDialog.open = true;
}

export function closeAccountDialog(): void {
  accountDialog.open = false;
}

/** 拉取账号列表；失败时保留原列表（错误提示由 request 层统一弹出）。 */
export async function refreshAccounts(): Promise<void> {
  const r = await api.accountsList().catch(() => null);
  if (r) accounts.value = r.accounts;
  accountsLoaded.value = true;
}
