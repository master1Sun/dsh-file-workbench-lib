<template>
  <el-dialog
    :model-value="cloneDialog.open"
    width="560px"
    append-to-body
    class="fw-clone-dialog fw-clone-git"
    :close-on-click-modal="false"
    :close-on-press-escape="!busy"
    :show-close="!busy"
    @update:model-value="onModel"
  >
    <template #header>
      <div class="fw-clone-head">
        <span class="fw-clone-badge"><icon name="git" :size="20" /></span>
        <div class="fw-clone-headtext">
          <div class="fw-clone-headtitle">{{ t("repoCloneTitleGit") }}</div>
          <div class="fw-clone-headsub">{{ t("repoCloneCaptionGit") }}</div>
        </div>
      </div>
    </template>

    <div class="fw-clone">
      <label class="fw-clone-field">
        <span class="fw-clone-label">{{ t("repoCloneUrl") }}</span>
        <input
          v-model="state.url"
          class="fw-clone-input"
          :placeholder="t('repoCloneUrlGitPlaceholder')"
          spellcheck="false"
          :disabled="busy"
          @keyup.enter="submit"
        />
      </label>

      <label class="fw-clone-field">
        <span class="fw-clone-label">{{ t("repoCloneDir") }}</span>
        <div class="fw-clone-row">
          <input
            v-model="state.dir"
            class="fw-clone-input"
            :placeholder="t('repoCloneDirPlaceholder')"
            spellcheck="false"
            :disabled="busy"
          />
          <button class="fw-clone-btn" :disabled="busy" @click="pickerOpen = true">
            {{ t("repoCloneBrowse") }}
          </button>
        </div>
      </label>

      <label class="fw-clone-field">
        <span class="fw-clone-label">{{ t("repoCloneName") }}</span>
        <input
          v-model="state.name"
          class="fw-clone-input"
          :placeholder="t('repoCloneNamePlaceholder')"
          spellcheck="false"
          :disabled="busy"
        />
      </label>

      <!-- 复选框行套与输入框同高的槽位：SVN 面板第 4 行是「版本」输入框（40px），
           Git 这行若按内容自适应会矮一截，两个弹窗切换时高度跳变、第四行对不齐。 -->
      <label class="fw-clone-check fw-clone-slot">
        <input v-model="state.shallow" type="checkbox" :disabled="busy" />
        <span>{{ t("repoCloneShallow") }}</span>
        <span class="fw-clone-checkhint">{{ t("repoCloneShallowHint") }}</span>
      </label>

      <div class="fw-clone-target" :title="targetPath || undefined">
        <icon name="folderOpen" :size="13" />
        <span class="fw-clone-targetlabel">{{ t("repoCloneTargetGit") }}</span>
        <span class="fw-clone-targetval">{{ targetPath || t("repoCloneTargetEmpty") }}</span>
      </div>

      <div v-if="busy" class="fw-clone-busy">
        <span class="fw-clone-spin" aria-hidden="true"></span>
        <span>{{ t("repoCloneRunningGit") }}</span>
        <span class="fw-clone-elapsed">{{ t("repoCloneElapsed", { s: elapsed }) }}</span>
      </div>
      <div v-if="busy" class="fw-clone-tip">{{ t("repoCloneKeepOpen") }}</div>
      <div v-if="error" class="fw-clone-error">{{ error }}</div>
    </div>

    <template #footer>
      <button class="fw-clone-btn" :disabled="busy" @click="onModel(false)">{{ t("cancel") }}</button>
      <button class="fw-clone-btn primary" :disabled="busy || !canSubmit" @click="submit">
        {{ t("repoCloneActionGit") }}
      </button>
    </template>
  </el-dialog>

  <!-- 目标目录选择：复用应用内「选择文件夹」弹窗（资源管理器式两栏）。
       它与本体都是 append-to-body 的 el-dialog，后开的会拿到更高的 z-index，故天然盖在其上。 -->
  <PathPickerDialog v-model="pickerOpen" mode="folder" :initial-dir="state.dir" @confirm="onDirPicked" />
</template>

<script setup lang="ts">
import { onBeforeUnmount } from "vue";
import Icon from "../../common/Icon.vue";
import PathPickerDialog from "../vscode/PathPickerDialog.vue";
import { cloneDialog } from "../../../composables/core/cloneDialog";
import { useCloneForm } from "../../../composables/core/useCloneForm";

const { t, state, busy, error, elapsed, pickerOpen, targetPath, canSubmit, onDirPicked, onModel, submit, dispose } =
  useCloneForm("git");

onBeforeUnmount(dispose);
</script>

<style src="./clone-shared.css"></style>
