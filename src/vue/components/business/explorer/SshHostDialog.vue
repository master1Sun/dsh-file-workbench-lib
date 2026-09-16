<template>
  <el-dialog
    v-model="visible"
    class="fw-ssh-dlg"
    width="420px"
    :close-on-click-modal="true"
    append-to-body
    @closed="onClosed"
  >
    <!-- 头部与「克隆 Git / 检出 SVN」弹窗同款：彩色徽标 + 标题/副标题 -->
    <template #header>
      <div class="fw-clone-head">
        <span class="fw-clone-badge"><icon name="hardDrive" :size="20" /></span>
        <div class="fw-clone-headtext">
          <div class="fw-clone-headtitle">{{ editing ? t('sshEditTitle') : t('sshNewHost') }}</div>
          <div class="fw-clone-headsub">{{ t('sshHostCaption') }}</div>
        </div>
      </div>
    </template>
    <div class="fw-ssh-dlg-body">
      <label class="fw-ssh-field">
        <span class="fw-ssh-lb">{{ t('sshName') }}</span>
        <el-input v-model="form.name" size="small" :placeholder="draftLabel" />
      </label>
      <label class="fw-ssh-field">
        <span class="fw-ssh-lb">{{ t('sshAddr') }}</span>
        <span class="fw-ssh-addr">
          <el-input v-model="form.user" size="small" :placeholder="t('sshUser')" class="fw-ssh-user" />
          <span class="fw-ssh-at">@</span>
          <el-input v-model="form.host" size="small" :placeholder="t('sshHostAddr')" class="fw-ssh-host" />
          <span class="fw-ssh-at">:</span>
          <el-input v-model="portText" size="small" placeholder="22" class="fw-ssh-port" />
        </span>
      </label>
      <label class="fw-ssh-field">
        <span class="fw-ssh-lb">{{ t('sshAuth') }}</span>
        <span class="fw-ssh-addr">
          <el-select v-model="form.authType" size="small" class="fw-ssh-auth">
            <el-option value="password" :label="t('sshAuthPassword')" />
            <el-option value="key" :label="t('sshAuthKey')" />
          </el-select>
          <el-input
            v-if="form.authType === 'password'"
            v-model="form.password"
            size="small"
            type="password"
            show-password
            :placeholder="editing && host?.hasSecret ? t('sshKeepSecret') : t('sshPassword')"
            class="fw-ssh-secret"
          />
          <el-input v-else v-model="form.privateKeyPath" size="small" :placeholder="t('sshKeyPath')" class="fw-ssh-secret" />
        </span>
      </label>
      <div v-if="errText" class="fw-ssh-err">{{ errText }}</div>
    </div>
    <template #footer>
      <el-button size="small" :loading="busy" @click="testDraft">{{ t('sshTestConn') }}</el-button>
      <el-button size="small" @click="close">{{ t('sshCancel') }}</el-button>
      <el-button size="small" type="primary" :loading="busy" @click="save">{{ editing ? t('sshSaveEdit') : t('sshSaveAdd') }}</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from "vue";
import { useI18n } from "../../../composables/core/i18n";
import { toastError, toastOk, toastWarning } from "../../../composables/core/toast";
import Icon from "../../common/Icon.vue";
import * as api from "../../../composables/core/useApi";
import {
  sshHosts,
  sshDialog,
  closeSshDialog,
  refreshSshHosts,
  refreshSshStatus,
  pingSshHost,
} from "../../../stores/ssh";

const { t } = useI18n();

const visible = computed({
  get: () => sshDialog.open,
  set: (v: boolean) => {
    if (!v) closeSshDialog();
  },
});

const editing = computed(() => sshDialog.editingId !== null);
const host = computed(() => sshHosts.value.find((h) => h.id === sshDialog.editingId) ?? null);

const form = reactive({
  name: "",
  user: "",
  host: "",
  authType: "password" as "password" | "key",
  password: "",
  privateKeyPath: "",
});
const portText = ref("22");
const port = computed(() => Math.trunc(Number(portText.value)) || 22);
const busy = ref(false);
const errText = ref("");

/** 显示名留空时的回落文案（与 host 侧生成规则一致）。 */
const draftLabel = computed(() => {
  const u = form.user.trim() || "user";
  const h = form.host.trim() || "host";
  return `${u}@${h}`;
});

/** 打开对话框时按模式预填：编辑从列表取现有配置，添加则清空。 */
watch(
  () => sshDialog.open,
  (open) => {
    if (!open) return;
    errText.value = "";
    busy.value = false;
    if (editing.value && host.value) {
      const h = host.value;
      form.name = h.name;
      form.user = h.user;
      form.host = h.host;
      form.authType = h.authType;
      form.password = ""; // 口令不回传，留空表示沿用现有
      form.privateKeyPath = h.privateKeyPath ?? "";
      portText.value = String(h.port);
    } else {
      form.name = "";
      form.user = "";
      form.host = "";
      form.authType = "password";
      form.password = "";
      form.privateKeyPath = "";
      portText.value = "22";
    }
  },
  { immediate: true },
);

function onClosed(): void {
  closeSshDialog();
}

function close(): void {
  closeSshDialog();
}

async function withBusy(fn: () => Promise<void>): Promise<void> {
  busy.value = true;
  errText.value = "";
  try {
    await fn();
  } catch (e) {
    errText.value = e instanceof Error ? e.message : String(e);
  } finally {
    busy.value = false;
  }
}

/** 内联凭据试连（添加前 / 编辑前验证）。 */
async function testDraft(): Promise<void> {
  if (!form.host.trim() || !form.user.trim()) {
    toastWarning(t("sshRequired"));
    return;
  }
  // 编辑模式：密码 / 密钥字段留空 → 直接用「已保存配置」（含已存密码）试连，免手输。
  // 注意：明文密码因 host 侧 `toPublic` 抹除而不会回传到前端，故无法把密码原文回填进输入框；
  // 这里改为走 `api.sshTest({ id })` 让 host 用存储的凭据测，效果等同「密码已回显」。
  if (editing.value && sshDialog.editingId) {
    const stored = host.value;
    const useStored =
      form.authType === "password"
        ? !form.password.trim()
        : !form.privateKeyPath.trim() || form.privateKeyPath.trim() === (stored?.privateKeyPath ?? "");
    if (useStored) {
      const id = sshDialog.editingId ?? undefined;
      await withBusy(async () => {
        const r = await api.sshTest({ id });
        if (r.ok) toastOk(`${t("sshTestOk")}${r.banner ? ` (${r.banner})` : ""}`);
        else toastError(`${t("sshTestFail")}: ${r.error ?? ""}`);
      });
      return;
    }
  }
  await withBusy(async () => {
    const r = await api.sshTest({
      host: form.host.trim(),
      port: port.value,
      user: form.user.trim(),
      auth:
        form.authType === "password"
          ? { type: "password", password: form.password }
          : { type: "key", privateKeyPath: form.privateKeyPath.trim() },
    });
    if (r.ok) toastOk(`${t("sshTestOk")}${r.banner ? ` (${r.banner})` : ""}`);
    else toastError(`${t("sshTestFail")}: ${r.error ?? ""}`);
  });
}

async function save(): Promise<void> {
  if (!form.host.trim() || !form.user.trim()) {
    toastWarning(t("sshRequired"));
    return;
  }
  await withBusy(async () => {
    if (editing.value && sshDialog.editingId) {
      const created = await api.sshUpdate({
        id: sshDialog.editingId,
        name: form.name.trim() || undefined,
        host: form.host.trim(),
        port: port.value,
        user: form.user.trim(),
        auth:
          form.authType === "password"
            ? { type: "password", password: form.password || undefined }
            : { type: "key", privateKeyPath: form.privateKeyPath.trim() },
      });
      toastOk(t("sshUpdateSuccess"));
      await refreshSshHosts();
      await pingSshHost(created.host.id);
    } else {
      const created = await api.sshAdd({
        name: form.name.trim() || undefined,
        host: form.host.trim(),
        port: port.value,
        user: form.user.trim(),
        auth:
          form.authType === "password"
            ? { type: "password", password: form.password }
            : { type: "key", privateKeyPath: form.privateKeyPath.trim() },
      });
      toastOk(t("sshAddSuccess"));
      await refreshSshHosts();
      await refreshSshStatus();
      await pingSshHost(created.host.id);
    }
    closeSshDialog();
  });
}
</script>

<style src="../repo/clone-shared.css"></style>
<style scoped>
/* SSH 主机弹窗与「克隆 Git / 检出 SVN」弹窗同一套视觉：深色面板 + 徽标头部 +
   同款输入框/按钮。强调色用 SSH 绿；头部/标签类直接复用 clone-shared.css 的
   .fw-clone-head / .fw-clone-badge。 */
:global(.fw-ssh-dlg.el-dialog) {
  --el-dialog-bg-color: var(--dsh-bg2, #161b22);
  --el-text-color-primary: var(--dsh-fg, #c9d1d9);
  --el-text-color-regular: var(--dsh-fg, #c9d1d9);
  --el-border-color: var(--dsh-border, #30363d);
  --el-border-radius-base: 8px;
  /* 控件尺寸与克隆弹窗对齐：输入框 / 下拉 / 按钮统一 32px。 */
  --el-component-size-small: 32px;
  /* clone-shared 的强调色变量：SSH 用绿色。 */
  --clone-accent: var(--dsh-accent, #3fb950);
  --clone-accent-weak: rgba(63, 185, 80, 0.16);
  --clone-accent-border: rgba(63, 185, 80, 0.45);
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.6);
  padding: 0;
}
:global(.fw-ssh-dlg .el-dialog__header) {
  margin-right: 0;
  padding: 16px 20px 12px;
  display: flex;
  flex-direction: column;
  gap: 7px;
}
:global(.fw-ssh-dlg .el-dialog__body) {
  padding: 8px 20px 16px;
}
.fw-ssh-dlg-body { display: flex; flex-direction: column; gap: 16px; }
.fw-ssh-field { display: flex; flex-direction: column; gap: 7px; }
.fw-ssh-lb {
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  font-weight: 500;
  letter-spacing: 0.2px;
  color: var(--dsh-fg-weak, #8b949e);
}
.fw-ssh-addr { display: flex; align-items: center; gap: 8px; }
.fw-ssh-user { width: 84px; flex: none; }
.fw-ssh-host { flex: 1 1 auto; min-width: 0; }
.fw-ssh-port { width: 62px; flex: none; }
.fw-ssh-auth { width: 108px; flex: none; }
.fw-ssh-secret { flex: 1 1 auto; min-width: 0; }
.fw-ssh-at { color: var(--dsh-fg-weak, #8b949e); flex: none; }
.fw-ssh-err { font-size: calc(12px * var(--dsh-fs-scale, 1)); color: #f85149; }

/* 输入框：与 .fw-clone-input 同观感（深底、细描边、聚焦强调色光晕） */
:global(.fw-ssh-dlg .el-input__wrapper) {
  background: var(--dsh-bg, #0d1117);
  border-radius: 8px;
  box-shadow: 0 0 0 1px var(--dsh-border, #30363d) inset;
  transition: box-shadow 0.15s;
}
:global(.fw-ssh-dlg .el-input__wrapper:hover:not(.is-focus)) {
  box-shadow: 0 0 0 1px var(--dsh-fg-weak, #8b949e) inset;
}
:global(.fw-ssh-dlg .el-input__wrapper.is-focus) {
  box-shadow: 0 0 0 1px var(--clone-accent) inset, 0 0 0 3px var(--clone-accent-weak);
}
:global(.fw-ssh-dlg .el-input__inner) {
  color: var(--dsh-fg, #c9d1d9);
}
:global(.fw-ssh-dlg .el-input__inner::placeholder) {
  color: var(--dsh-fg-weak, #8b949e);
  opacity: 0.7;
}
/* 下拉框：同输入框描边/聚焦语义（EP 的 min-height 写死，需单独覆盖尺寸）。 */
:global(.fw-ssh-dlg .el-select--small .el-select__wrapper) {
  min-height: 32px;
  background: var(--dsh-bg, #0d1117);
  border-radius: 8px;
  box-shadow: 0 0 0 1px var(--dsh-border, #30363d) inset;
}
:global(.fw-ssh-dlg .el-select--small .el-select__wrapper.is-hovering:not(.is-focused)) {
  box-shadow: 0 0 0 1px var(--dsh-fg-weak, #8b949e) inset;
}
:global(.fw-ssh-dlg .el-select--small .el-select__wrapper.is-focused) {
  box-shadow: 0 0 0 1px var(--clone-accent) inset, 0 0 0 3px var(--clone-accent-weak);
}
/* 页脚：flex + gap 保证按钮间距（EP 的 .el-button+.el-button margin 规则会被
   上面覆盖出来的样式环境吞掉，显式给 gap 更稳）。 */
:global(.fw-ssh-dlg .el-dialog__footer) {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 12px 20px 16px;
}
/* 按钮：默认档与 .fw-clone-btn 同观感，主档强调色实底（EP 高度走 --el-button-size）。 */
:global(.fw-ssh-dlg .el-button--small) {
  --el-button-size: 32px;
  height: 32px;
  min-width: 84px;
  border-radius: 8px;
  background: var(--dsh-bg, #0d1117);
  border: 1px solid var(--dsh-border, #30363d);
  color: var(--dsh-fg, #c9d1d9);
  font-weight: 500;
  transition: border-color 0.15s, color 0.15s, filter 0.15s;
}
:global(.fw-ssh-dlg .el-button--small:not(.el-button--primary):hover) {
  border-color: var(--clone-accent);
  color: var(--clone-accent);
  background: var(--dsh-bg, #0d1117);
}
:global(.fw-ssh-dlg .el-button--small.el-button--primary) {
  background: var(--clone-accent);
  border-color: var(--clone-accent);
  color: #fff;
  font-weight: 600;
}
:global(.fw-ssh-dlg .el-button--small.el-button--primary:hover:not(.is-disabled)) {
  background: var(--clone-accent);
  filter: brightness(1.08);
  color: #fff;
}
/* el-select 下拉面板 Teleport 到 body：抬升层级并沿用项目主题色。 */
:global(.fw-set-popper) {
  z-index: 2147483200 !important;
  --el-select-dropdown-bg-color: var(--dsh-bg2, #161b22);
  --el-fill-color-blank: var(--dsh-bg2, #161b22);
  --el-fill-color-light: var(--dsh-bg2, #161b22);
  --el-text-color-regular: var(--dsh-fg, #c9d1d9);
  --el-border-color: var(--dsh-border, #30363d);
  --el-border-color-light: var(--dsh-border, #30363d);
  background: var(--dsh-bg2, #161b22);
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 8px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
}
:global(.fw-set-popper .el-select-dropdown__item) { color: var(--dsh-fg, #c9d1d9); border-radius: 4px; }
:global(.fw-set-popper .el-select-dropdown__item:hover:not(.is-disabled)) { background: var(--dsh-hover, rgba(48, 54, 61, 0.5)); }
:global(.fw-set-popper .el-select-dropdown__item.is-selected) { color: var(--dsh-accent, #238636); }
</style>
