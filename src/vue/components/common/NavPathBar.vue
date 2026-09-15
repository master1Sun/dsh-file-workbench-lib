<template>
  <!-- 路径面包屑（Win11 工具栏/macOS 状态栏复用同一组件）。
       导航按钮渲染在各自宿主上：Win11 工具栏左侧、macOS 菜单栏内。 -->
  <div class="fw-navpath">
    <!-- 虚拟位置（「此电脑」/「回收站」）：显示固定名称，无真实路径可编辑/跳转 -->
    <span v-if="specialName" class="fw-path fw-crumbs fw-path-static" :title="specialName">
      <icon :name="specialIcon" :size="14" class="fw-path-static-ico" />
      <span class="fw-crumb last">{{ specialName }}</span>
    </span>
    <span
      v-else-if="currentPath"
      class="fw-path"
      :class="{ 'fw-crumbs': !pathEdit, editing: pathEdit }"
      :title="currentPath"
      @click="enterPathEdit"
    >
      <input
        v-if="pathEdit"
        ref="pathInputRef"
        v-model="pathDraft"
        class="fw-path-input"
        spellcheck="false"
        @keydown.enter.prevent="commitPathEdit"
        @keydown.esc.prevent="cancelPathEdit"
        @blur="cancelPathEdit"
      />
      <template v-else>
        <template v-for="(c, i) in crumbs" :key="i">
          <span v-if="i > 0" class="fw-crumb-sep">{{ isRemote ? '/' : '\\' }}</span>
          <button
            class="fw-crumb"
            :class="{ last: i === crumbs.length - 1 }"
            :title="c.path"
            @click.stop="goCrumb(c.path)"
          >{{ c.name }}</button>
        </template>
      </template>
    </span>
    <span v-else class="fw-path">{{ t('noFolder') }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref } from "vue";
import { useI18n } from "../../composables/core/i18n";
import { browseTo, currentListingPath, explorer } from "../../stores/explorer";
import { sshCrumbsOf } from "../../stores/ssh";
import { toast, wb } from "../../stores/workbench";
import Icon from "./Icon.vue";

const { t } = useI18n();

/** 当前目录路径（主目录导航/第 2 列列表共享）。 */
const currentPath = computed(() => currentListingPath.value || wb.root || "");

/** 虚拟位置（「此电脑」/「回收站」）的固定展示名；空串表示当前是真实目录。 */
const specialName = computed(() => {
  if (explorer.view === "computer") return t("navThisPc");
  if (explorer.view === "recycle") return t("recycleBin");
  return "";
});
/** 虚拟位置的展示图标（Win11 地址栏同样带图标）。 */
const specialIcon = computed(() => (explorer.view === "computer" ? "monitor" : "trash"));

/** 当前是远端引用（ssh://…）时，层级分隔符用 `/`，与远端 POSIX 路径保持一致。 */
const isRemote = computed(() => currentPath.value.startsWith("ssh://"));

/** 把当前路径拆成面包屑段：远端引用按 ssh 引用语义切，本地兼容 Windows 盘符 C:\ 与 Unix /。 */
const crumbs = computed(() => {
  const p = currentPath.value;
  if (!p) return [];
  const remote = sshCrumbsOf(p);
  if (remote) return remote;
  const parts = p.replace(/\\/g, "/").split("/").filter((s) => s.length > 0);
  const out: { name: string; path: string }[] = [];
  let acc = "";
  parts.forEach((seg, i) => {
    const isDrive = /^[A-Za-z]:$/.test(seg);
    acc = i === 0 ? (isDrive ? seg + "/" : "/" + seg) : acc.replace(/[\\/]+$/, "") + "/" + seg;
    out.push({ name: seg, path: acc });
  });
  return out;
});

/** 点击面包屑跳转。 */
function goCrumb(crumbPath: string): void {
  void browseTo(crumbPath);
}

/* ---- 地址栏编辑态：点击路径栏切换为完整路径文本框，可复制/编辑 ---- */
const pathEdit = ref(false);
const pathDraft = ref("");
const pathInputRef = ref<HTMLInputElement | null>(null);
/** 点击路径栏：切换为完整路径输入框并自动全选，便于复制。 */
function enterPathEdit(): void {
  pathDraft.value = currentPath.value;
  pathEdit.value = true;
  void nextTick(() => {
    pathInputRef.value?.focus();
    pathInputRef.value?.select();
  });
}
/** 回车提交：路径变化时跳转，否则仅退出编辑态。 */
function commitPathEdit(): void {
  const p = pathDraft.value.trim();
  pathEdit.value = false;
  if (p && p !== currentPath.value) {
    void browseTo(p).catch((e) => toast("error", (e as Error).message));
  }
}
/** Esc / 失焦：放弃编辑，恢复面包屑。 */
function cancelPathEdit(): void {
  pathEdit.value = false;
}
</script>

<style scoped>
.fw-navpath {
  display: flex;
  align-items: center;
  gap: 2px;
  min-width: 0;
  flex: 1; /* Win11 工具栏：占满主区把右侧(搜索)推到最右 */
}
.fw-path {
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  color: var(--dsh-fg, #c9d1d9);
  overflow: hidden;
  white-space: nowrap;
  padding: 3px 10px;
  border: 1px solid transparent;
  border-radius: 4px;
  flex: 1;
      width: 100%;
  border-color: var(--dsh-border, #30363d);
  background: var(--dsh-bg, #0d1117);
}
.fw-path:hover:not(.editing) {
  border-color: var(--dsh-border, #30363d);
  background: var(--dsh-bg, #0d1117);
}
.fw-path.editing {
  padding: 2px 4px;
  border-color: var(--dsh-accent, #238636);
  background: var(--dsh-bg, #0d1117);
  width: 100%;
}
/* 编辑态完整路径文本框 */
.fw-path-input {
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  color: inherit;
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  font-family: inherit;
  padding: 1px 2px;
}
/* 面包屑：各层级以 \ 分隔，点击节点跳转对应路径 */
.fw-crumbs {
  display: flex;
  align-items: center;
  gap: 2px;
}
/* 虚拟位置（「此电脑」/「回收站」）：静态展示，不进入编辑态、不可跳转 */
.fw-path-static {
  gap: 6px;
  cursor: default;
}
.fw-path-static-ico {
  flex: 0 0 auto;
  color: var(--dsh-fg-weak, #8b949e);
}
.fw-crumb {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  padding: 2px 5px;
  border-radius: 4px;
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  line-height: 1;
  white-space: nowrap;
  transition: background 0.12s ease;
}
.fw-crumb:hover {
  background: var(--dsh-hover, rgba(48, 54, 61, 0.5));
}
.fw-crumb.last {
  font-weight: 600;
  cursor: default;
}
.fw-crumb-sep {
  color: var(--dsh-fg-weak, #8b949e);
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  line-height: 1;
  user-select: none;
}
</style>