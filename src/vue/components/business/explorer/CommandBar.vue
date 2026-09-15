<template>
  <!-- Win11 风格命令栏：位于 explorer 面板内部顶部（经典风格仅此渲染）。 -->
  <div class="fw-cmdbar">
    <!-- 回收站视图：仅还原 / 永久删除 / 清空 / 刷新（与文件列表同一套 UI，操作语义不同）。 -->
    <template v-if="st.isRecycle">
      <button class="fw-cb-btn" :disabled="!sel" :title="t('recycleRestore')" @click="cmd('restore')">{{ t('recycleRestore') }}</button>
      <button class="fw-cb-btn" :disabled="!sel" :title="t('recycleDelete')" @click="cmd('delete')">{{ t('recycleDelete') }}</button>
      <button class="fw-cb-btn" :disabled="!hasItems" :title="t('recycleEmpty')" @click="cmd('emptyRecycle')">{{ t('recycleEmpty') }}</button>
      <button class="fw-cb-btn" :title="t('menuRefresh')" @click="cmd('refresh')">{{ t('menuRefresh') }}</button>
      <span class="fw-cb-sep"></span>
      <el-dropdown trigger="click" :teleported="false" popper-class="fw-panelmenu-popper" @command="(c: string | number | object) => cmd('sort', String(c))">
        <button class="fw-cb-btn" :title="t('menuSort')">{{ t('menuSort') }} <span class="caret">▾</span></button>
        <template #dropdown>
          <el-dropdown-menu class="fw-panelmenu">
            <el-dropdown-item v-for="o in sorts" :key="o[0]" :command="o[0]" class="fw-panelitem">
              <span class="fw-pmenu-check">{{ prefs.sortKey === o[0] ? "✓" : "" }}</span>{{ o[1] }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown trigger="click" :teleported="false" popper-class="fw-panelmenu-popper" @command="(c: string | number | object) => onViewCmd(String(c))">
        <button class="fw-cb-btn" :title="t('menuView')">{{ t('menuView') }} <span class="caret">▾</span></button>
        <template #dropdown>
          <el-dropdown-menu class="fw-panelmenu">
            <el-dropdown-item v-for="o in views" :key="o[0]" :command="o[0]" class="fw-panelitem">
              <span class="fw-pmenu-check">{{ activeView === o[0] ? "✓" : "" }}</span>{{ o[1] }}
            </el-dropdown-item>
            <el-dropdown-item divided command="toggleExt" class="fw-panelitem">
              <span class="fw-pmenu-check">{{ prefs.showExtensions ? "✓" : "" }}</span>{{ t('showExtensions') }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </template>

    <!-- 普通文件视图：新建 / 剪切 / 复制 / 粘贴 / 重命名 / 删除 + 排序 / 查看 + 预览 -->
    <template v-else>
      <el-dropdown trigger="click" :teleported="false" popper-class="fw-panelmenu-popper" @command="(c: string | number | object) => cmd(String(c))">
        <button class="fw-cb-btn" :disabled="ro" :title="t('menuNew')">{{ t('menuNew') }} <span class="caret">▾</span></button>
        <template #dropdown>
          <el-dropdown-menu class="fw-panelmenu">
            <el-dropdown-item command="newFolder" class="fw-panelitem">{{ t('menuNewFolder') }}</el-dropdown-item>
            <el-dropdown-item command="newFile" class="fw-panelitem">{{ t('menuNewFile') }}</el-dropdown-item>
            <el-dropdown-item command="upload" class="fw-panelitem">{{ t('menuUpload') }}</el-dropdown-item>
            <el-dropdown-item divided command="newSshHost" class="fw-panelitem">{{ t('sshNewHost') }}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <button class="fw-cb-btn" :disabled="!sel" :title="t('menuCut')" @click="cmd('cut')">{{ t('menuCut') }}</button>
      <button class="fw-cb-btn" :disabled="!sel" :title="t('menuCopy')" @click="cmd('copy')">{{ t('menuCopy') }}</button>
      <button class="fw-cb-btn" :disabled="!st.hasClipboard || ro" :title="t('menuPaste')" @click="cmd('paste')">{{ t('menuPaste') }}</button>
      <button class="fw-cb-btn" :disabled="st.selectionCount !== 1 || ro" :title="t('menuRename')" @click="cmd('rename')">{{ t('menuRename') }}</button>
      <button class="fw-cb-btn" :disabled="!sel || ro" :title="t('menuDelete')" @click="cmd('delete')">{{ t('menuDelete') }}</button>
      <span class="fw-cb-sep"></span>
      <el-dropdown trigger="click" :teleported="false" popper-class="fw-panelmenu-popper" @command="(c: string | number | object) => cmd('sort', String(c))">
        <button class="fw-cb-btn" :title="t('menuSort')">{{ t('menuSort') }} <span class="caret">▾</span></button>
        <template #dropdown>
          <el-dropdown-menu class="fw-panelmenu">
            <el-dropdown-item v-for="o in sorts" :key="o[0]" :command="o[0]" class="fw-panelitem">
              <span class="fw-pmenu-check">{{ prefs.sortKey === o[0] ? "✓" : "" }}</span>{{ o[1] }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown trigger="click" :teleported="false" popper-class="fw-panelmenu-popper" @command="(c: string | number | object) => onViewCmd(String(c))">
        <button class="fw-cb-btn" :title="t('menuView')">{{ t('menuView') }} <span class="caret">▾</span></button>
        <template #dropdown>
          <el-dropdown-menu class="fw-panelmenu">
            <el-dropdown-item v-for="o in views" :key="o[0]" :command="o[0]" class="fw-panelitem">
              <span class="fw-pmenu-check">{{ activeView === o[0] ? "✓" : "" }}</span>{{ o[1] }}
            </el-dropdown-item>
            <el-dropdown-item divided command="toggleExt" class="fw-panelitem">
              <span class="fw-pmenu-check">{{ prefs.showExtensions ? "✓" : "" }}</span>{{ t('showExtensions') }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <span class="fw-cb-flex"></span>
      <button class="fw-cb-btn" :disabled="!sel" :title="t('cmdPreview')" @click="cmd('preview')">{{ t('cmdPreview') }}</button>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "../../../composables/core/i18n";
// activeView = 当前区域正在生效的视图（按目录记忆后可能与全局默认 prefs.view 不同）。
import { prefs, activeView } from "../../../composables/core/settings";
import { fileCmdState as st, runFileCmd } from "../../../stores/fileCommands";
import { explorer } from "../../../stores/explorer";
import { openSshAddDialog } from "../../../stores/ssh";

const { t } = useI18n();
const ro = computed(() => st.isRecycle || !st.canOperate);
const sel = computed(() => st.selectionCount > 0);
const hasItems = computed(() => (explorer.recycleItems?.length ?? 0) > 0);
const sorts = computed<[string, string][]>(() => [
  ["name", t("sortName")],
  ["mtime", t("sortModified")],
  ["type", t("sortType")],
  ["size", t("sortSize")],
]);
const views = computed<[string, string][]>(() => [
  ["huge", t("viewHuge")],
  ["large", t("viewLarge")],
  ["medium", t("viewMedium")],
  ["small", t("viewSmall")],
  ["list", t("viewList")],
  ["details", t("viewDetails")],
  ["content", t("viewContent")],
  ["tiles", t("viewTiles")],
]);
function cmd(name: string, arg?: string): void {
  if (name === "newSshHost") {
    openSshAddDialog();
    return;
  }
  runFileCmd(name, arg);
}
/** 「查看▾」命令分发：显示扩展名走 toggleExt，其余为视图档位。 */
function onViewCmd(name: string): void {
  if (name === "toggleExt") cmd("toggleExt");
  else cmd("view", name);
}
</script>

<style scoped>
.fw-cmdbar {
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 3px 6px;
  border-bottom: 1px solid var(--dsh-border, #30363d);
  background: var(--dsh-bg2, #161b22);
  flex: 0 0 auto;
}
.fw-cb-btn {
  border: none;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
}
.fw-cb-btn:hover:not(:disabled) { background: var(--dsh-border, #30363d); }
.fw-cb-btn:disabled { opacity: 0.45; cursor: default; }
.fw-cb-btn .caret { font-size: calc(10px * var(--dsh-fs-scale, 1)); opacity: 0.7; }
.fw-cb-sep { width: 1px; height: 16px; background: var(--dsh-border, #30363d); margin: 0 4px; }
.fw-cb-flex { flex: 1 1 0; }
.fw-pmenu-check {
  display: inline-block;
  width: 14px;
  color: var(--dsh-accent, #238636);
}
</style>
