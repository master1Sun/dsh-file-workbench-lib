<template>
  <!-- 按 kind 分发到独立的 Git / SVN 面板：两个面板不再共用一个带切换器的弹窗，
       触发 git 就开 Git 面板、触发 svn 就开 SVN 面板（kind 由打开方在 openCloneDialog 里定）。 -->
  <GitCloneDialog v-if="cloneDialog.open && cloneDialog.kind === 'git'" />
  <SvnCheckoutDialog v-else-if="cloneDialog.open" />
</template>

<script setup lang="ts">
/**
 * 「克隆 / 检出仓库」弹窗的全局入口（单例挂载在 body，见 `main.ts` 的 `mountGlobalCloneDialog`）。
 *
 * 为什么这里只是一个调度器、而不是把 Git/SVN 塞进同一个带切换器的弹窗：
 *  - 两个入口共用同一份模块级状态（`composables/core/cloneDialog.ts`），打开时由 `openCloneDialog`
 *    明确指明 kind（git / svn），用户「从哪进来就开哪种面板」，不需要在弹窗里再切一次；
 *  - 把两种版本库拆成 `GitCloneDialog` / `SvnCheckoutDialog` 两个独立组件，共享逻辑抽到
 *    `composables/core/useCloneForm.ts`，共享样式在 `clone-shared.css` —— 各面板只保留自己的
 *    专属字段（Git 浅克隆 / SVN 版本号），互不干扰、各自清爽。
 *
 * 切换右侧面板 tab 会卸载重建各面板 Vue 应用，但本组件常驻 body，克隆跑几分钟也不丢进度。
 */
import { cloneDialog } from "../../../composables/core/cloneDialog";
import GitCloneDialog from "./GitCloneDialog.vue";
import SvnCheckoutDialog from "./SvnCheckoutDialog.vue";
</script>
