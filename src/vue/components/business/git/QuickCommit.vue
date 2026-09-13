<template>
  <el-dialog
    :model-value="modelValue"
    :title="t('gitCommitTitle')"
    width="520px"
    class="fw-gitcommit-dialog"
    :close-on-click-modal="false"
    @update:model-value="close"
    @open="onOpen"
  >
    <div v-if="busy.loading" class="fw-quickcommit-empty">{{ t('gitLoading') }}</div>
    <template v-else>
      <!-- 提交说明（与 Git 面板提交弹窗一致） -->
      <el-input
        v-model="commitMsg"
        :placeholder="t('gitCommitPlaceholder')"
        type="textarea"
        :rows="3"
        class="fw-gitcommit-msg"
        @keydown.ctrl.enter="commit"
      />

      <!-- 将提交的文件列表 -->
      <template v-if="staged.length">
        <div class="fw-gitcommit-files-title fw-gitcommit-files-caption">
          {{ t('gitCommitFiles', { n: staged.length }) }}
        </div>
        <div class="fw-gitcommit-files">
          <div v-for="f in staged" :key="f.path" class="fw-gitcommit-file">
            <span class="fw-gitpanel-st" :class="'st-' + f.status">{{ statusLetter(f.status) }}</span>
            <span class="fw-gitpanel-path" :title="f.path">{{ f.path }}</span>
          </div>
        </div>
      </template>
      <div v-else class="fw-quickcommit-empty">{{ t('gitNoChanges') }}</div>

      <div v-if="commitError" class="fw-gitcommit-error">
        {{ commitError }}
        <el-button v-if="isConfigError" text size="small" @click="openConfig">{{ t('gitConfigTitle') }}</el-button>
      </div>

      <!-- git 身份配置 -->
      <el-dialog
        v-model="configOpen"
        :title="t('gitConfigTitle')"
        width="420px"
        class="fw-gitconfig-dialog"
        :close-on-click-modal="false"
      >
        <div class="fw-gitconfig-field">
          <label>{{ t('gitConfigName') }}</label>
          <el-input v-model="configName" size="small" :placeholder="t('gitConfigNamePlaceholder')" />
        </div>
        <div class="fw-gitconfig-field">
          <label>{{ t('gitConfigEmail') }}</label>
          <el-input v-model="configEmail" size="small" :placeholder="t('gitConfigEmailPlaceholder')" />
        </div>
        <template #footer>
          <el-button @click="configOpen = false">{{ t('cancel') }}</el-button>
          <el-button type="primary" :loading="busy.config" @click="saveConfig">{{ t('gitConfigSave') }}</el-button>
        </template>
      </el-dialog>
    </template>

    <template #footer>
      <el-button @click="close">{{ t('cancel') }}</el-button>
      <el-button @click="openConfig">{{ t('gitConfig') }}</el-button>
      <el-button type="primary" :loading="busy.commit" :disabled="!commitMsg.trim()" @click="commit">
        {{ t('gitCommitConfirm') }}
      </el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import type { GitPanel, GitPanelFile } from "../../../../shared/types";
import { useI18n } from "../../../composables/core/i18n";
import { toast } from "../../../stores/workbench";
import * as api from "../../../composables/core/useApi";

const props = defineProps<{ modelValue: boolean; dir: string }>();
const emit = defineEmits<{ (e: "update:modelValue", v: boolean): void; (e: "done"): void }>();
const { t } = useI18n();

const panel = ref<GitPanel | null>(null);
const staged = ref<GitPanelFile[]>([]);
const commitMsg = ref("");
const commitError = ref("");
const busy = reactive({ loading: false, commit: false, config: false });

const configOpen = ref(false);
const configName = ref("");
const configEmail = ref("");

const STATUS_LETTER: Record<GitPanelFile["status"], string> = {
  "": "",
  untracked: "?",
  added: "A",
  modified: "M",
  deleted: "D",
};
function statusLetter(s: GitPanelFile["status"]): string {
  return STATUS_LETTER[s];
}

function close(): void {
  emit("update:modelValue", false);
}

async function onOpen(): Promise<void> {
  commitMsg.value = "";
  commitError.value = "";
  if (!props.dir) {
    close();
    return;
  }
  busy.loading = true;
  try {
    panel.value = await api.gitPanel(props.dir);
    if (!panel.value.inRepo) {
      toast("error", t("gitNotRepo"));
      close();
      return;
    }
    await refreshFiles();
    if (!staged.value.length) {
      toast("error", t("gitNoChanges"));
      close();
      return;
    }
  } catch (err) {
    toast("error", (err as Error).message);
    close();
  } finally {
    busy.loading = false;
  }
}

async function refreshFiles(): Promise<void> {
  panel.value = await api.gitPanel(props.dir);
  staged.value = panel.value?.staged ?? [];
}

async function commit(): Promise<void> {
  const msg = commitMsg.value.trim();
  if (!msg || !panel.value) return;
  busy.commit = true;
  commitError.value = "";
  try {
    await api.gitCommit(panel.value.repo, msg);
    emit("done");
    toast("ok", t("gitCommitted"));
    close();
  } catch (err) {
    commitError.value = (err as Error).message;
  } finally {
    busy.commit = false;
  }
}

const isConfigError = ref(false);
watch(commitError, (e) => {
  isConfigError.value = /user\.(name|email)|Author identity/i.test(e ?? "");
});

async function openConfig(): Promise<void> {
  try {
    const cfg = await api.gitGetUserConfig();
    configName.value = cfg.name ?? "";
    configEmail.value = cfg.email ?? "";
  } catch {
    /* 读取失败也允许手动填写 */
  }
  configOpen.value = true;
}
async function saveConfig(): Promise<void> {
  busy.config = true;
  try {
    await api.gitSetUserConfig(configName.value, configEmail.value);
    commitError.value = "";
    configOpen.value = false;
    toast("ok", t("gitConfigSaved"));
  } catch (err) {
    toast("error", (err as Error).message);
  } finally {
    busy.config = false;
  }
}
</script>

<style scoped>
/* 与 Git 面板提交弹窗（GitPanel.vue fw-gitcommit-*）保持一致的样式 */
:global(.fw-gitcommit-dialog.el-dialog) {
  --el-dialog-bg-color: var(--dsh-bg2, #161b22);
  --el-text-color-primary: var(--dsh-fg, #c9d1d9);
  --el-border-color: var(--dsh-border, #30363d);
  --el-border-radius-base: 8px;
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
}
:global(.fw-gitconfig-dialog.el-dialog) {
  --el-dialog-bg-color: var(--dsh-bg2, #161b22);
  --el-text-color-primary: var(--dsh-fg, #c9d1d9);
  --el-border-color: var(--dsh-border, #30363d);
  --el-border-radius-base: 8px;
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 8px;
  overflow: hidden;
}
.fw-gitcommit-msg { width: 100%; margin-bottom: 10px; }
.fw-gitcommit-msg textarea {
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  color: var(--dsh-fg, #c9d1d9);
}
.fw-gitcommit-files-title {
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  font-weight: 600;
  color: var(--dsh-fg-weak, #8b949e);
  padding: 4px 6px;
}
.fw-gitcommit-files-caption {
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  font-weight: 600;
  color: var(--dsh-fg-weak, #8b949e);
  margin-bottom: 4px;
}
.fw-gitcommit-files {
  max-height: 40vh;
  overflow: auto;
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 6px;
  background: var(--dsh-bg, #0d1117);
  padding: 4px;
  margin-bottom: 10px;
}
.fw-gitcommit-file {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 3px 6px;
  border-radius: 4px;
  font-size: calc(12px * var(--dsh-fs-scale, 1));
}
.fw-gitcommit-file:hover { background: var(--dsh-hover, rgba(255, 255, 255, 0.04)); }
.fw-gitcommit-error {
  margin-top: 8px;
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  color: #f85149;
  word-break: break-all;
  max-height: 80px;
  overflow: auto;
}
.fw-gitpanel-st {
  flex-shrink: 0;
  width: 16px;
  text-align: center;
  font-weight: 700;
  font-size: calc(11px * var(--dsh-fs-scale, 1));
}
.fw-gitpanel-st.st-untracked { color: #8b949e; }
.fw-gitpanel-st.st-added { color: #238636; }
.fw-gitpanel-st.st-modified { color: #d29922; }
.fw-gitpanel-st.st-deleted { color: #f85149; }
.fw-gitpanel-path {
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
}
.fw-gitconfig-field { margin-bottom: 12px; }
.fw-gitconfig-field label {
  display: block;
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  color: var(--dsh-fg-weak, #8b949e);
  margin-bottom: 4px;
}
.fw-quickcommit-empty {
  color: var(--dsh-fg-weak, #8b949e);
  text-align: center;
  padding: 30px 0;
  font-size: calc(13px * var(--dsh-fs-scale, 1));
}
</style>