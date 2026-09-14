<!--
  Git 管理面板（对齐 TortoiseGit 的能力与信息密度，布局改为「左导航 + 右详情」）：

  - 顶部：分支 / 上游领先落后 / 仓库根 / Fetch·Pull·Push·刷新·身份配置；
  - 左导航：更改 / 提交历史 / 分支 / 标签 / 远程 / 储藏 / 命令台（带数量徽标）；
  - 更改：分组列出已暂存·未暂存·未跟踪，行内可暂存/取消暂存/还原/看改动/看历史/逐行追溯，
    右侧即时显示 diff；底部常驻提交栏（说明 + 全部暂存 + 提交）；
  - 历史：图形化提交图谱（SVG 分支泳道 + 引用徽标）→ 右侧提交详情（元信息 + 变更文件 +
    单文件补丁），并支持复制哈希、新建分支、检出、重置、还原、拣选；
  - 分支 / 标签 / 远程 / 储藏：列表 + 常规增删改与同步操作；
  - 命令台：在仓库根执行任意 git 子命令。

  所有操作都走 `/git/run`（宿主侧 execFile 调 git CLI），本组件只负责解析输出与渲染。
-->
<template>
  <el-dialog
    :model-value="modelValue"
    :title="t('gitPanelTitle')"
    width="800px"
    align-center
    modal-class="fw-blur-overlay"
    class="fw-gitpanel-dialog"
    :close-on-click-modal="false"
    @update:model-value="$emit('update:modelValue', $event)"
    @open="onOpen"
  >
    <template v-if="panel && panel.inRepo">
      <div class="fw-gp-shell">
      <!-- ── 顶部状态条 ───────────────────────────────────────────── -->
      <div class="fw-gp-head">
        <span class="fw-gp-branch" :class="{ detached }" :title="headTitle">
          <icon name="git" :size="13" />
          <b>{{ detached ? t("gitHeadDetached") : branchName || "—" }}</b>
        </span>
        <span class="fw-gp-up" :title="upstreamTitle">
          <template v-if="upstream">
            <span class="fw-gp-up-i" :class="{ zero: !ahead }">↑{{ ahead }}</span>
            <span class="fw-gp-up-i" :class="{ zero: !behind }">↓{{ behind }}</span>
            <span class="fw-gp-up-name">{{ upstream }}</span>
          </template>
          <template v-else>{{ t("gitNoUpstream") }}</template>
        </span>
        <span class="fw-gp-repo" :title="panel.repo">{{ t("gitLocalRepo") }}{{ shortRepo }}</span>
        <span class="fw-gp-headacts">
          <el-button size="small" :loading="busy.sync === 'fetch'" @click="sync('fetch')">Fetch</el-button>
          <el-button size="small" :loading="busy.sync === 'pull'" @click="sync('pull')">Pull</el-button>
          <el-button size="small" :loading="busy.sync === 'push'" @click="sync('push')">Push</el-button>
          <el-button size="small" :loading="busy.refresh" @click="reload()"><icon name="refresh" :size="13" /></el-button>
          <el-button size="small" :title="t('gitConfig')" @click="openConfig"><icon name="gear" :size="13" /></el-button>
        </span>
      </div>

      <!-- ── 主体：左导航 + 右内容 ─────────────────────────────────── -->
      <div class="fw-gp-body">
        <nav class="fw-gp-rail">
          <button
            v-for="s in SECTIONS"
            :key="s.key"
            class="fw-gp-rail-btn"
            :class="{ active: sec === s.key }"
            @click="sec = s.key"
          >
            <icon :name="s.icon" :size="14" />
            <span class="fw-gp-rail-txt">{{ t(s.label) }}</span>
            <span v-if="badgeOf(s.key)" class="fw-gp-rail-badge">{{ badgeOf(s.key) }}</span>
          </button>
          <span class="fw-gp-rail-fill"></span>
          <div v-if="busy.op" class="fw-gp-rail-op"><span class="fw-gp-spin"></span>{{ t("gitOpRunning") }}</div>
        </nav>

        <section class="fw-gp-content">
          <!-- ══ 更改 ══ -->
          <div v-if="sec === 'changes'" class="fw-gp-split">
            <div class="fw-gp-list">
              <div v-if="!changeGroups.length" class="fw-gp-empty">{{ t("gitClean") }}</div>
              <template v-for="g in changeGroups" :key="g.key">
                <div class="fw-gp-groupbar">
                  <span class="fw-gp-groupname">{{ g.label }}</span>
                  <span class="fw-gp-groupcount">{{ g.list.length }}</span>
                  <button v-if="g.key === 'unstaged'" class="fw-gp-mini" :title="t('gitStageAll')" @click="stageAll">
                    <icon name="plus" :size="11" />
                  </button>
                </div>
                <div
                  v-for="f in g.list"
                  :key="g.key + f.path"
                  class="fw-gp-row"
                  :class="{ active: sel && sel.file.path === f.path && sel.group === g.key }"
                  :title="f.path"
                  @click="openFile(f, g.key)"
                >
                  <span class="fw-gp-st" :class="'st-' + f.status">{{ statusLetter(f.status) }}</span>
                  <span class="fw-gp-path">
                    <span v-if="dirOf(f.path)" class="fw-gp-dir">{{ dirOf(f.path) }}</span>{{ baseOf(f.path) }}
                  </span>
                  <span class="fw-gp-rowacts">
                    <button
                      v-if="g.key !== 'staged'"
                      class="fw-gp-mini"
                      :title="t('gitAddShort')"
                      @click.stop="stageFile(f)"
                    ><icon name="plus" :size="11" /></button>
                    <button
                      v-else
                      class="fw-gp-mini"
                      :title="t('gitUnstage')"
                      @click.stop="unstageFile(f)"
                    ><icon name="undo" :size="11" /></button>
                    <button
                      v-if="g.key === 'untracked'"
                      class="fw-gp-mini"
                      :title="t('gitIgnore')"
                      @click.stop="ignoreFile(f)"
                    ><icon name="eyeOff" :size="11" /></button>
                    <button
                      v-if="g.key !== 'untracked'"
                      class="fw-gp-mini danger"
                      :title="t('gitDiscard')"
                      @click.stop="discardFile(f)"
                    ><icon name="close" :size="11" /></button>
                  </span>
                </div>
              </template>
            </div>

            <!-- 右侧：改动 / 文件历史 / 逐行追溯 -->
            <div class="fw-gp-detail">
              <div class="fw-gp-detailhead">
                <span class="fw-gp-detailtitle" :title="detailTitle">{{ detailTitle }}</span>
                <span class="fw-gp-detailacts">
                  <button
                    v-if="sel && detail !== 'diff'"
                    class="fw-gp-mini"
                    :title="t('gitDiff')"
                    @click="openFile(sel.file, sel.group)"
                  ><icon name="code" :size="12" /></button>
                  <button
                    v-if="sel && detail !== 'history'"
                    class="fw-gp-mini"
                    :title="t('gitFileHistory')"
                    @click="showFileHistory"
                  ><icon name="clock" :size="12" /></button>
                  <button
                    v-if="sel && detail !== 'blame'"
                    class="fw-gp-mini"
                    :title="t('gitBlame')"
                    @click="showBlame"
                  ><icon name="activity" :size="12" /></button>
                  <button v-if="sel" class="fw-gp-mini" :title="t('gitCopyPath')" @click="copyText(sel.file.path)">
                    <icon name="copy" :size="12" />
                  </button>
                </span>
              </div>
              <div v-if="!sel" class="fw-gp-empty">{{ t("gitSelectFile") }}</div>
              <GitDiffView v-else-if="detail === 'diff'" :lines="diffLines" :empty="diffEmpty" />
              <template v-else-if="detail === 'history'">
                <div v-if="!fileLog.length" class="fw-gp-empty">{{ t("gitFileHistoryEmpty") }}</div>
                <div v-else class="fw-gp-scroll">
                  <div v-for="c in fileLog" :key="c.hash" class="fw-gp-filerow">
                    <span class="fw-gp-hash">{{ c.short }}</span>
                    <span class="fw-gp-filesub" :title="c.subject">{{ c.subject }}</span>
                    <span class="fw-gp-filemeta">{{ c.author }} · {{ c.date }}</span>
                  </div>
                </div>
              </template>
              <template v-else>
                <div v-if="!blameLines.length" class="fw-gp-empty">{{ t("gitBlameEmpty") }}</div>
                <div v-else class="fw-gp-scroll fw-gp-blame">
                  <div v-for="(b, i) in blameLines" :key="i" class="fw-gp-blame-row">
                    <span class="fw-gp-blame-hash" :title="b.hash">{{ b.hash.slice(0, 7) }}</span>
                    <span class="fw-gp-blame-author" :title="b.author">{{ b.author }}</span>
                    <span class="fw-gp-blame-date">{{ b.date }}</span>
                    <span class="fw-gp-blame-no">{{ b.line }}</span>
                    <span class="fw-gp-blame-txt">{{ b.text }}</span>
                  </div>
                </div>
              </template>
            </div>
          </div>

          <!-- ══ 提交历史 ══ -->
          <div v-else-if="sec === 'history'" class="fw-gp-split">
            <div class="fw-gp-list fw-gp-list-col">
              <div class="fw-gp-listbar">
                <button class="fw-gp-tab" :class="{ on: graphAll }" @click="setGraphScope(true)">{{ t("gitHistoryAll") }}</button>
                <button class="fw-gp-tab" :class="{ on: !graphAll }" @click="setGraphScope(false)">{{ t("gitHistoryCurrent") }}</button>
                <span class="fw-gp-spacer"></span>
                <span class="fw-gp-count">{{ graphRows.length }}</span>
              </div>
              <GitGraphList :rows="graphRows" :active="selCommit" :empty="t('gitLogEmpty')" @select="openCommit" />
            </div>

            <div class="fw-gp-detail">
              <div v-if="!commitInfo" class="fw-gp-empty">{{ t("gitSelectCommit") }}</div>
              <template v-else>
                <div class="fw-gp-detailhead">
                  <span class="fw-gp-detailtitle" :title="commitInfo.subject">{{ t("gitCommitDetail") }}</span>
                  <span class="fw-gp-detailacts">
                    <button class="fw-gp-mini" :title="t('gitCopyHash')" @click="copyText(commitInfo.hash)">
                      <icon name="copy" :size="12" />
                    </button>
                    <button class="fw-gp-mini" :title="t('gitBranchFrom')" @click="branchFromCommit">
                      <icon name="git" :size="12" />
                    </button>
                    <button class="fw-gp-mini" :title="t('gitCheckoutCommit')" @click="checkoutCommit">
                      <icon name="check" :size="12" />
                    </button>
                    <el-dropdown trigger="click" :teleported="false" @command="onCommitCmd">
                      <button class="fw-gp-mini"><icon name="sort" :size="12" /></button>
                      <template #dropdown>
                        <el-dropdown-menu>
                          <el-dropdown-item command="reset-soft">{{ t("gitResetSoft") }}</el-dropdown-item>
                          <el-dropdown-item command="reset-mixed">{{ t("gitResetMixed") }}</el-dropdown-item>
                          <el-dropdown-item command="reset-hard" divided>{{ t("gitResetHard") }}</el-dropdown-item>
                          <el-dropdown-item command="revert" divided>{{ t("gitRevert") }}</el-dropdown-item>
                          <el-dropdown-item command="cherry-pick">{{ t("gitCherryPick") }}</el-dropdown-item>
                        </el-dropdown-menu>
                      </template>
                    </el-dropdown>
                  </span>
                </div>
                <div class="fw-gp-scroll">
                  <div class="fw-gp-cmeta">
                    <div class="fw-gp-crow"><span class="k">{{ t("gitCommitHash") }}</span><span class="v mono">{{ commitInfo.hash }}</span></div>
                    <div class="fw-gp-crow"><span class="k">{{ t("gitCommitAuthor") }}</span><span class="v">{{ commitInfo.author }} &lt;{{ commitInfo.email }}&gt;</span></div>
                    <div class="fw-gp-crow">
                      <span class="k">{{ t("gitCommitDate") }}</span>
                      <span class="v">{{ absTime(commitInfo.ts) }} · {{ commitInfo.date }}</span>
                    </div>
                    <div class="fw-gp-crow">
                      <span class="k">{{ t("gitCommitParents") }}</span>
                      <span class="v mono">{{ commitInfo.parents.map((p) => p.slice(0, 7)).join(" ") || "—" }}</span>
                    </div>
                    <div v-if="commitInfo.refs.length" class="fw-gp-crow">
                      <span class="k">{{ t("gitCommitRefs") }}</span>
                      <span class="v">
                        <span v-for="rf in commitInfo.refs" :key="rf.label" class="fw-gp-refchip" :class="'rf-' + rf.kind">{{ rf.label }}</span>
                      </span>
                    </div>
                  </div>
                  <pre class="fw-gp-cbody">{{ commitInfo.body || commitInfo.subject }}</pre>
                  <div class="fw-gp-cfiles">{{ t("gitCommitChangedFiles", { n: commitFiles.length }) }}</div>
                  <div v-if="!commitFiles.length" class="fw-gp-empty">{{ t("gitCommitNoFiles") }}</div>
                  <div
                    v-for="cf in commitFiles"
                    :key="cf.path"
                    class="fw-gp-row"
                    :class="{ active: selCommitFile === cf.path }"
                    :title="t('gitCommitOpenDiff', { path: cf.path })"
                    @click="openCommitFile(cf)"
                  >
                    <span class="fw-gp-path">
                      <span v-if="dirOf(cf.path)" class="fw-gp-dir">{{ dirOf(cf.path) }}</span>{{ baseOf(cf.path) }}
                    </span>
                    <span class="fw-gp-num"><span class="add">+{{ cf.add }}</span><span class="del">-{{ cf.del }}</span></span>
                  </div>
                </div>
              </template>
            </div>
          </div>

          <!-- ══ 分支 ══ -->
          <div v-else-if="sec === 'branches'" class="fw-gp-one">
            <div class="fw-gp-listbar">
              <el-input v-model="newBranch" size="small" :placeholder="t('gitBranchNew')" @keydown.enter="createBranch" />
              <el-button size="small" type="primary" :loading="busy.branch" @click="createBranch">{{ t("gitBranchCreateAndSwitch") }}</el-button>
              <el-button size="small" :disabled="detached" @click="renameBranch">{{ t("gitBranchRename") }}</el-button>
            </div>
            <div class="fw-gp-sec-title">{{ t("gitBranchLocalGroup") }}</div>
            <div v-for="b in localBranches" :key="b.name" class="fw-gp-row" :class="{ active: b.current }">
              <span class="fw-gp-st st-branch"><icon name="git" :size="12" /></span>
              <span class="fw-gp-path">{{ b.name }}<span v-if="b.current" class="fw-gp-cur"> • {{ t("gitBranchCurrent") }}</span></span>
              <span class="fw-gp-rowacts">
                <el-button v-if="!b.current" text size="small" @click="checkoutBranch(b.name)">{{ t("gitCheckout") }}</el-button>
                <el-button v-if="!b.current" text size="small" @click="mergeBranch(b.name)">{{ t("gitMergeIntoCurrent") }}</el-button>
                <el-button text size="small" @click="pushBranch(b.name)">{{ t("gitPushBranch") }}</el-button>
                <el-button v-if="!b.current" text size="small" @click="deleteBranch(b.name)">{{ t("gitDelete") }}</el-button>
              </span>
            </div>
            <template v-if="remoteBranches.length">
              <div class="fw-gp-sec-title">{{ t("gitBranchRemoteGroup") }}</div>
              <div v-for="b in remoteBranches" :key="b.name" class="fw-gp-row">
                <span class="fw-gp-st st-remote"><icon name="globe" :size="12" /></span>
                <span class="fw-gp-path">{{ b.name }}</span>
                <span class="fw-gp-rowacts">
                  <el-button text size="small" @click="checkoutRemoteBranch(b.name)">{{ t("gitCheckout") }}</el-button>
                </span>
              </div>
            </template>
          </div>

          <!-- ══ 标签 ══ -->
          <div v-else-if="sec === 'tags'" class="fw-gp-one">
            <div class="fw-gp-form">
              <el-input v-model="newTag" size="small" class="fw-gp-in-name" :placeholder="t('gitTagNamePlaceholder')" />
              <el-input v-model="tagTarget" size="small" class="fw-gp-in-target" :placeholder="t('gitTagTargetPlaceholder')" />
              <el-input v-model="tagMsg" size="small" class="fw-gp-in-msg" :placeholder="t('gitTagMessagePlaceholder')" />
              <el-button size="small" type="primary" :disabled="!newTag.trim()" @click="createTag">{{ t("gitTagCreate") }}</el-button>
            </div>
            <div class="fw-gp-form" style="margin: 0 0 6px; border-bottom: 1px solid var(--dsh-border, #30363d);">
              <el-button
                size="small"
                :loading="busy.op"
                :disabled="!hasRemote"
                :title="hasRemote ? '' : t('gitTagNoRemote')"
                @click="fetchTags"
              >{{ t("gitTagFetchAll") }}</el-button>
              <el-button
                size="small"
                type="primary"
                :disabled="!hasRemote"
                :title="hasRemote ? '' : t('gitTagNoRemote')"
                @click="openRelease"
              >{{ t("gitReleaseBtn") }}</el-button>
              <span v-if="!hasRemote" class="fw-gp-subject">{{ t("gitTagNoRemote") }}</span>
            </div>
            <div v-if="!tags.length" class="fw-gp-empty">{{ t("gitTagEmpty") }}</div>
            <div v-for="tg in tags" :key="tg.name" class="fw-gp-row" :title="tagTip(tg)">
              <span class="fw-gp-st st-tag"><icon name="tag" :size="12" /></span>
              <span class="fw-gp-path">
                {{ tg.name }}
                <span v-if="tg.deref" class="fw-gp-badge">{{ t("gitTagAnnotated") }}</span>
                <span v-if="tg.remoteOnly" class="fw-gp-badge fw-gp-badge-remote">{{ t("gitTagRemoteOnly") }}</span>
              </span>
              <span v-if="tg.date" class="fw-gp-date">{{ tg.date }}</span>
              <span v-if="tg.subject" class="fw-gp-subject" :title="tg.subject">{{ tg.subject }}</span>
              <span class="fw-gp-hash">{{ tg.hash }}</span>
              <span class="fw-gp-rowacts">
                <el-button text size="small" @click="viewTag(tg)">{{ t("gitView") }}</el-button>
                <template v-if="tg.remoteOnly">
                  <el-button text size="small" @click="pullRemoteTag(tg)">{{ t("gitTagPull") }}</el-button>
                </template>
                <template v-else>
                  <el-button text size="small" @click="pushTag(tg.name)">{{ t("gitPushBranch") }}</el-button>
                  <el-button text size="small" @click="deleteTag(tg.name)">{{ t("gitDelete") }}</el-button>
                </template>
              </span>
            </div>
          </div>

          <!-- ══ 远程 ══ -->
          <div v-else-if="sec === 'remotes'" class="fw-gp-one">
            <div class="fw-gp-form">
              <el-input v-model="newRemoteName" size="small" class="fw-gp-in-name" :placeholder="t('gitRemoteNamePlaceholder')" />
              <el-input v-model="newRemoteUrl" size="small" class="fw-gp-in-url" :placeholder="t('gitRemoteUrlPlaceholder')" />
              <el-button
                size="small"
                type="primary"
                :disabled="!newRemoteName.trim() || !newRemoteUrl.trim()"
                @click="addRemote"
              >{{ t("gitRemoteAdd") }}</el-button>
            </div>
            <div v-if="!remotes.length" class="fw-gp-empty">{{ t("gitRemoteEmpty") }}</div>
            <div v-for="rm in remotes" :key="rm.name" class="fw-gp-row">
              <span class="fw-gp-st st-remote"><icon name="globe" :size="12" /></span>
              <span class="fw-gp-path">{{ rm.name }}</span>
              <span class="fw-gp-remote-url" :title="rm.url">{{ rm.url }}</span>
              <span class="fw-gp-rowacts">
                <el-button text size="small" @click="editRemoteUrl(rm)">{{ t("gitRemoteSetUrl") }}</el-button>
                <el-button text size="small" @click="removeRemote(rm.name)">{{ t("gitDelete") }}</el-button>
              </span>
            </div>
          </div>

          <!-- ══ 储藏 ══ -->
          <div v-else-if="sec === 'stash'" class="fw-gp-split">
            <div class="fw-gp-list">
              <div class="fw-gp-listbar">
                <el-input v-model="stashName" size="small" :placeholder="t('gitStashPlaceholder')" @keydown.enter="createStash" />
                <el-button
                  size="small"
                  type="primary"
                  :loading="busy.stash"
                  :disabled="!stashable"
                  @click="createStash"
                >{{ t("gitStashNew") }}</el-button>
              </div>
              <div v-if="!stashList.length" class="fw-gp-empty">{{ stashable ? t("gitStashEmpty") : t("gitStashNone") }}</div>
              <div
                v-for="s in stashList"
                :key="s.ref"
                class="fw-gp-row"
                :class="{ active: selStash === s.ref }"
                :title="s.full"
                @click="viewStash(s.ref)"
              >
                <span class="fw-gp-st st-stash"><icon name="stash" :size="12" /></span>
                <span class="fw-gp-path">{{ s.message }}</span>
                <span class="fw-gp-rowacts">
                  <button class="fw-gp-mini" :title="t('gitStashApply')" @click.stop="applyStash(s.ref)">
                    <icon name="download" :size="11" />
                  </button>
                  <button class="fw-gp-mini" :title="t('gitStashPop')" @click.stop="popStash(s.ref)">
                    <icon name="upload" :size="11" />
                  </button>
                  <button class="fw-gp-mini danger" :title="t('gitStashDrop')" @click.stop="dropStash(s.ref)">
                    <icon name="close" :size="11" />
                  </button>
                </span>
              </div>
            </div>
            <div class="fw-gp-detail">
              <div class="fw-gp-detailhead">
                <span class="fw-gp-detailtitle">{{ selStash || t("gitStashView") }}</span>
              </div>
              <GitDiffView :lines="stashDiff" :empty="t('gitStashEmpty')" />
            </div>
          </div>

          <!-- ══ 命令台 ══ -->
          <div v-else-if="sec === 'cli'" class="fw-gp-one fw-gp-cli-wrap">
            <div ref="cliRef" class="fw-gp-cli" @click="focusCli">
              <div v-if="!cliLines.length" class="fw-gp-cli-hint">{{ t("gitCliPlaceholder") }}</div>
              <div v-for="(ln, i) in cliLines" :key="i" class="fw-gp-cli-line" :class="'kind-' + ln.kind">
                <template v-if="ln.kind === 'cmd'">
                  <span class="fw-gp-cli-prompt">{{ cliPrompt }}</span>
                  <span class="fw-gp-cli-cmd">{{ ln.text }}</span>
                </template>
                <template v-else>{{ ln.text }}</template>
              </div>
              <div class="fw-gp-cli-inputline">
                <span class="fw-gp-cli-prompt">{{ cliPrompt }}</span>
                <input
                  ref="cliInputRef"
                  v-model="cliCmd"
                  class="fw-gp-cli-inner"
                  spellcheck="false"
                  autocomplete="off"
                  @keydown.enter="runCli"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- ── 底部提交栏（仅「更改」页） ─────────────────────────────── -->
      <div v-if="sec === 'changes'" class="fw-gp-commitbar">
        <el-input
          v-model="commitMsg"
          type="textarea"
          :rows="2"
          resize="none"
          :placeholder="t('gitCommitMsgPlaceholder')"
          @keydown.ctrl.enter.prevent="commit"
        />
        <div class="fw-gp-commitacts">
          <span class="fw-gp-commitmeta">
            <template v-if="panel.staged.length">{{ t("gitCommitFiles", { n: panel.staged.length }) }}</template>
            <template v-else>{{ t("gitNoChanges") }}</template>
          </span>
          <el-button
            size="small"
            :disabled="!panel.unstaged.length && !panel.untracked.length"
            @click="stageAll"
          >{{ t("gitStageAll") }}</el-button>
          <el-button
            size="small"
            type="primary"
            :loading="busy.commit"
            :disabled="!panel.staged.length || !commitMsg.trim()"
            @click="commit"
          >{{ t("gitCommit") }}<span v-if="panel.staged.length">（{{ panel.staged.length }}）</span></el-button>
        </div>
      </div>
      </div>
    </template>

    <!-- 加载中 / 非仓库：占位与主内容同高，弹窗高度全程固定不抖动 -->
    <div v-else class="fw-gitpanel-empty">
      <template v-if="busy.refresh"><span class="fw-gp-spin"></span>{{ t("gitOpRunning") }}</template>
      <template v-else>{{ t("gitNotRepo") }}</template>
    </div>

    <!-- git 身份配置 -->
    <el-dialog
      :model-value="configOpen"
      :title="t('gitConfigTitle')"
      width="420px"
      align-center
      modal-class="fw-blur-overlay"
      class="fw-gitconfig-dialog"
      :close-on-click-modal="false"
      @update:model-value="configOpen = $event"
    >
      <div class="fw-gp-cfgfield">
        <label>{{ t("gitConfigName") }}</label>
        <el-input v-model="configName" size="small" :placeholder="t('gitConfigNamePlaceholder')" />
      </div>
      <div class="fw-gp-cfgfield">
        <label>{{ t("gitConfigEmail") }}</label>
        <el-input v-model="configEmail" size="small" :placeholder="t('gitConfigEmailPlaceholder')" />
      </div>
      <template #footer>
        <el-button @click="configOpen = false">{{ t("cancel") }}</el-button>
        <el-button type="primary" :loading="busy.config" @click="saveConfig">{{ t("gitConfigSave") }}</el-button>
      </template>
    </el-dialog>

    <!-- 提交对比弹窗：变更文件列表 + 单文件 diff -->
    <el-dialog
      v-model="commitViewOpen"
      :title="t('gitCommitViewTitle')"
      width="800px"
      align-center
      modal-class="fw-blur-overlay"
      class="fw-gp-commitview-dialog"
      :close-on-click-modal="false"
    >
      <div v-if="commitInfo" class="fw-gp-cv">
        <div class="fw-gp-cv-meta">
          <div class="fw-gp-crow"><span class="k">{{ t("gitCommitHash") }}</span><span class="v mono">{{ commitInfo.hash }}</span></div>
          <div class="fw-gp-crow"><span class="k">{{ t("gitCommitAuthor") }}</span><span class="v">{{ commitInfo.author }} &lt;{{ commitInfo.email }}&gt;</span></div>
          <div class="fw-gp-crow"><span class="k">{{ t("gitCommitDate") }}</span><span class="v">{{ absTime(commitInfo.ts) }} · {{ commitInfo.date }}</span></div>
          <pre class="fw-gp-cbody">{{ commitInfo.body || commitInfo.subject }}</pre>
        </div>
        <div class="fw-gp-cv-body">
          <div class="fw-gp-cv-files">
            <div v-if="!commitFiles.length" class="fw-gp-empty">{{ t("gitCommitNoFiles") }}</div>
            <div
              v-for="cf in commitFiles"
              :key="cf.path"
              class="fw-gp-row"
              :class="{ active: selCommitFile === cf.path }"
              :title="cf.path"
              @click="openCommitFile(cf)"
            >
              <span class="fw-gp-path">
                <span v-if="dirOf(cf.path)" class="fw-gp-dir">{{ dirOf(cf.path) }}</span>{{ baseOf(cf.path) }}
              </span>
              <span class="fw-gp-num"><span class="add">+{{ cf.add }}</span><span class="del">-{{ cf.del }}</span></span>
            </div>
          </div>
          <div class="fw-gp-cv-diff">
            <GitDiffView :lines="patchLines" :empty="t('gitDiffEmpty')" />
          </div>
        </div>
      </div>
      <div v-else class="fw-gp-empty">{{ t("gitSelectCommit") }}</div>
    </el-dialog>

    <!-- 发布新版本：创建附注标签并推送到远程 -->
    <el-dialog
      v-model="releaseOpen"
      :title="t('gitReleaseTitle')"
      width="460px"
      align-center
      modal-class="fw-blur-overlay"
      class="fw-gp-release-dialog"
      :close-on-click-modal="false"
    >
      <div class="fw-gp-cfgfield">
        <label>{{ t("gitReleaseName") }}</label>
        <el-input v-model="releaseName" size="small" :placeholder="t('gitTagNamePlaceholder')" />
      </div>
      <div class="fw-gp-cfgfield">
        <label>{{ t("gitReleaseTarget") }}</label>
        <el-input v-model="releaseTarget" size="small" :placeholder="t('gitTagTargetPlaceholder')" />
      </div>
      <div class="fw-gp-cfgfield">
        <label>{{ t("gitReleaseMsg") }}</label>
        <el-input v-model="releaseMsg" type="textarea" :rows="3" resize="none" :placeholder="t('gitTagMessagePlaceholder')" />
      </div>
      <template #footer>
        <el-button @click="releaseOpen = false">{{ t("cancel") }}</el-button>
        <el-button
          type="primary"
          :loading="busy.op"
          :disabled="!releaseName.trim() || !releaseMsg.trim()"
          @click="publishRelease"
        >{{ t("gitReleasePublish") }}</el-button>
      </template>
    </el-dialog>
  </el-dialog>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from "vue";
import type { GitPanel, GitPanelFile } from "../../../../shared/types";
import type { CopyKey } from "../../../../shared/locales";
import {
  LOG_FORMAT,
  SHOW_FORMAT,
  buildGraph,
  parseBlame,
  parseLog,
  parseNumstat,
  parseShow,
  type BlameLine,
  type CommitFileStat,
  type GitCommit,
  type GitCommitDetail,
  type GraphRow,
} from "../../../composables/domain/gitGraph";
import { useI18n } from "../../../composables/core/i18n";
import { confirmDialog, promptDialog } from "../../../composables/core/dialog";
import { toast } from "../../../stores/workbench";
import { isBrowsablePath } from "../../../stores/explorer";
import * as api from "../../../composables/core/useApi";
import Icon from "../../common/Icon.vue";
import GitDiffView from "./GitDiffView.vue";
import GitGraphList from "./GitGraphList.vue";

const props = defineProps<{ modelValue: boolean; dir: string }>();
const { t } = useI18n();

/** 左导航页签。 */
type Sec = "changes" | "history" | "branches" | "tags" | "remotes" | "stash" | "cli";
const SECTIONS = [
  { key: "changes", icon: "fileText", label: "gitRailChanges" },
  { key: "history", icon: "clock", label: "gitRailHistory" },
  { key: "branches", icon: "git", label: "gitRailBranches" },
  { key: "tags", icon: "tag", label: "gitRailTags" },
  { key: "remotes", icon: "globe", label: "gitRailRemotes" },
  { key: "stash", icon: "stash", label: "gitRailStash" },
  { key: "cli", icon: "terminal", label: "gitRailCli" },
] as const satisfies readonly { key: Sec; icon: string; label: CopyKey }[];

/** 右侧详情当前的展示形态。 */
type DetailKind = "diff" | "history" | "blame";

const sec = ref<Sec>("changes");
const panel = ref<GitPanel | null>(null);
const busy = reactive({
  refresh: false,
  sync: "" as "" | "fetch" | "pull" | "push",
  op: false,
  commit: false,
  branch: false,
  stash: false,
  config: false,
});

// ── 更改：选中文件与详情 ────────────────────────────────────────
type ChangeGroup = "staged" | "unstaged" | "untracked";
interface SelFile {
  file: GitPanelFile;
  group: ChangeGroup;
}
const sel = ref<SelFile | null>(null);
const detail = ref<DetailKind>("diff");
const diffLines = ref<string[]>([]);
const diffHint = ref("");
const fileLog = ref<GitCommit[]>([]);
const blameLines = ref<BlameLine[]>([]);
const commitMsg = ref("");

// ── 历史 ────────────────────────────────────────────────────────
const graphRows = ref<GraphRow[]>([]);
/** true = 全部分支，false = 仅当前分支。 */
const graphAll = ref(true);
const selCommit = ref("");
/** 当前查看的提交详情（元信息 + 正文）。 */
const commitInfo = ref<GitCommitDetail | null>(null);
const commitFiles = ref<CommitFileStat[]>([]);
const selCommitFile = ref("");
const patchLines = ref<string[]>([]);
/** 图谱最多拉取多少条提交。 */
const GRAPH_COUNT = 120;

// ── 分支 / 标签 / 远程 / 储藏 ───────────────────────────────────
interface RefItem {
  name: string;
  hash: string;
  upstream: string;
  current: boolean;
  /** 标签专用：附注标签解引用后的目标提交（轻量标签为空，回退 hash）。 */
  deref?: string;
  /** 标签专用：创建日期（creatordate，YYYY-MM-DD）。 */
  date?: string;
  /** 标签专用：附注说明；轻量标签回退为提交的标题行。 */
  subject?: string;
  /** 标签专用：该标签仅存在于远程（本地未获取）。 */
  remoteOnly?: boolean;
  /** 标签专用：remoteOnly 时记录来源远程名。 */
  remote?: string;
}
const branches = ref<RefItem[]>([]);
const tags = ref<RefItem[]>([]);
interface RemoteItem {
  name: string;
  url: string;
}
const remotes = ref<RemoteItem[]>([]);
const newBranch = ref("");
const newTag = ref("");
const tagTarget = ref("");
const tagMsg = ref("");
/** 提交对比弹窗：点击提交 / 提交内文件时打开，展示变更文件与单文件 diff。 */
const commitViewOpen = ref(false);
/** 发布新版本弹窗（创建附注标签并推送到远程）。 */
const releaseOpen = ref(false);
const releaseName = ref("");
const releaseTarget = ref("");
const releaseMsg = ref("");
const newRemoteName = ref("");
const newRemoteUrl = ref("");
interface StashItem {
  ref: string;
  message: string;
  full: string;
}
const stashList = ref<StashItem[]>([]);
const stashName = ref("");
const selStash = ref("");
const stashDiff = ref<string[]>([]);

// ── 身份配置 / 命令台 ───────────────────────────────────────────
const configOpen = ref(false);
const configName = ref("");
const configEmail = ref("");
const cliRef = ref<HTMLElement | null>(null);
const cliInputRef = ref<HTMLInputElement | null>(null);
const cliCmd = ref("");
interface CliLine {
  kind: "cmd" | "out" | "err";
  text: string;
}
const cliLines = ref<CliLine[]>([]);

const branchName = computed(() => panel.value?.branch ?? "");
/** 分离头指针：`git branch --show-current` 为空但确实在仓库里。 */
const detached = computed(() => !!panel.value?.inRepo && !branchName.value);
const shortRepo = computed(() => (panel.value?.repo ?? "").replace(/\\/g, "/"));
const currentRef = computed(() => branches.value.find((b) => b.current) ?? null);
const upstream = computed(() => currentRef.value?.upstream ?? "");
const ahead = ref(0);
const behind = ref(0);
const upstreamTitle = computed(() =>
  upstream.value ? `${upstream.value}  ↑${ahead.value} ↓${behind.value}` : t("gitNoUpstream"),
);
const headTitle = computed(() =>
  detached.value ? t("gitHeadDetached") : t("gitStatusColon", { branch: branchName.value }),
);
const localBranches = computed(() => branches.value.filter((b) => !b.name.includes("/")));
const remoteBranches = computed(() => branches.value.filter((b) => b.name.includes("/")));
const cliPrompt = computed(() => `${shortRepo.value}>git `);
const stashable = computed(() => (panel.value?.unstaged.length ?? 0) + (panel.value?.staged.length ?? 0) > 0);
/** 是否存在远程仓库（发布 release / 推送标签需要）。 */
const hasRemote = computed(() => remotes.value.length > 0);

/** 更改页三组（已暂存 / 未暂存 / 未跟踪），空组不展示。 */
const changeGroups = computed(() => {
  const p = panel.value;
  if (!p) return [];
  return (
    [
      { key: "staged", label: t("gitGroupStaged"), list: p.staged },
      { key: "unstaged", label: t("gitGroupUnstaged"), list: p.unstaged },
      { key: "untracked", label: t("gitGroupUntracked"), list: p.untracked },
    ] as const satisfies readonly { key: ChangeGroup; label: string; list: GitPanelFile[] }[]
  ).filter((g) => g.list.length > 0);
});

const detailTitle = computed(() => {
  if (!sel.value) return "";
  if (detail.value === "history") return `${t("gitFileHistory")} — ${sel.value.file.path}`;
  if (detail.value === "blame") return `${t("gitBlame")} — ${sel.value.file.path}`;
  return sel.value.file.path;
});
const diffEmpty = computed(() => diffHint.value || t("gitDiffEmpty"));

/** 左导航徽标（数量）。 */
function badgeOf(k: Sec): number {
  const p = panel.value;
  if (!p) return 0;
  if (k === "changes") return p.staged.length + p.unstaged.length + p.untracked.length;
  if (k === "branches") return localBranches.value.length;
  if (k === "tags") return tags.value.length;
  if (k === "remotes") return remotes.value.length;
  if (k === "stash") return stashList.value.length;
  return 0;
}

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
/** 相对路径的目录部分（弱化显示，让文件名更突出）。 */
function dirOf(p: string): string {
  const i = p.lastIndexOf("/");
  return i > 0 ? p.slice(0, i + 1) : "";
}
function baseOf(p: string): string {
  const i = p.lastIndexOf("/");
  return i >= 0 ? p.slice(i + 1) : p;
}
/** 时间戳（秒）→ 本地时间文本。 */
function absTime(ts: number): string {
  if (!ts) return "—";
  return new Date(ts * 1000).toLocaleString();
}

// ── 通用：执行 git 命令 + 统一错误处理 ──────────────────────────
async function git(args: string[]): Promise<{ code: number; stdout: string; stderr: string }> {
  const repo = panel.value?.repo;
  if (!repo) throw new Error(t("gitNotRepo"));
  return api.gitRun(repo, args);
}

/** 执行一个「应当成功」的命令；非 0 退出码抛出 stderr。 */
async function runOrThrow(args: string[]): Promise<string> {
  const r = await git(args);
  if (r.code !== 0) throw new Error((r.stderr || r.stdout || t("gitOpFailed")).trim());
  return r.stdout;
}

/**
 * 包一层操作：统一置忙、失败提示、成功后刷新面板。
 * okKey 传文案 key 时，成功后弹一条成功提示。
 */
async function withOp(
  fn: () => Promise<void>,
  okKey?: CopyKey,
  okParams?: Record<string, string | number>,
): Promise<boolean> {
  busy.op = true;
  try {
    await fn();
    if (okKey) toast("ok", t(okKey, okParams));
    await reload();
    return true;
  } catch (err) {
    toast("error", (err as Error).message);
    return false;
  } finally {
    busy.op = false;
  }
}

// ── 数据加载 ────────────────────────────────────────────────────
async function reload(silent = false): Promise<void> {
  // 占位「路径」（回收站虚拟视图等）不是绝对路径，跳过以免必然失败的请求弹错。
  if (!props.dir || !isBrowsablePath(props.dir)) return;
  if (!silent) busy.refresh = true;
  try {
    panel.value = await api.gitPanel(props.dir);
    if (!panel.value.inRepo) return;
    await Promise.all([loadRefs(), loadGraph(), loadStashes()]);
    // 已选中的文件内容会随仓库状态变化，刷新时同步更新右侧 diff
    if (sel.value) await loadFileDiff(sel.value.file, sel.value.group, true);
  } catch (err) {
    if (!silent) toast("error", (err as Error).message);
  } finally {
    if (!silent) busy.refresh = false;
  }
}

function onOpen(): void {
  sec.value = "changes";
  void reload();
}

/** 目录切换时同步刷新（面板未打开则跳过，避免白跑请求）。 */
watch(
  () => props.dir,
  () => {
    if (props.modelValue) void reload();
  },
);

/** 读取全部引用（本地/远程分支 + 标签）与上游领先落后。 */
async function loadRefs(): Promise<void> {
  const out = await runOrThrow([
    "for-each-ref",
    // 标签要求「最新创建的排最上面」，直接让 git 按创建时间倒序输出（分支随后按名称重排，不受影响）
    "--sort=-creatordate",
    "--format=%(refname)%09%(objectname:short)%09%(upstream:short)%09%(HEAD)%09%(*objectname:short)%09%(creatordate:short)%09%(contents:subject)",
    "refs/heads",
    "refs/remotes",
    "refs/tags",
  ]).catch(() => "");
  const bs: RefItem[] = [];
  const ts: RefItem[] = [];
  for (const line of out.split("\n")) {
    if (!line.trim()) continue;
    // 备注列可能自带制表符，因此把剩余部分兜回来
    const [refname, hash, up, head, deref, date, ...subject] = line.split("\t");
    if (!refname) continue;
    if (refname.startsWith("refs/remotes/")) {
      const name = refname.slice("refs/remotes/".length);
      // 远端 HEAD 符号引用（origin/HEAD）不展示
      if (name.endsWith("/HEAD")) continue;
      bs.push({ name, hash: hash ?? "", upstream: "", current: false });
    } else if (refname.startsWith("refs/heads/")) {
      bs.push({
        name: refname.slice("refs/heads/".length),
        hash: hash ?? "",
        upstream: up ?? "",
        current: head === "*",
      });
    } else if (refname.startsWith("refs/tags/")) {
      // 附注标签的 %(objectname:short) 指向 tag 对象，展示时改用解引用后的提交
      ts.push({
        name: refname.slice("refs/tags/".length),
        hash: deref || hash || "",
        upstream: "",
        current: false,
        deref,
        date,
        subject: subject.join("\t").trim(),
      });
    }
  }
  bs.sort((a, b) => a.name.localeCompare(b.name));
  // 标签保持 for-each-ref 的 --sort=-creatordate 顺序（最新创建的在最上面），不再按名称重排
  branches.value = bs;
  tags.value = ts;

  // 上游领先/落后：没有上游时命令会失败，按 0 处理
  ahead.value = 0;
  behind.value = 0;
  if (upstream.value) {
    const r = await git(["rev-list", "--left-right", "--count", `HEAD...${upstream.value}`]).catch(() => null);
    if (r && r.code === 0) {
      const [a, b] = r.stdout.trim().split(/\s+/);
      ahead.value = Number(a) || 0;
      behind.value = Number(b) || 0;
    }
  }

  // 远程列表
  const rr = await git(["remote", "-v"]).catch(() => null);
  const map = new Map<string, string>();
  for (const line of (rr?.stdout ?? "").split("\n")) {
    const [name, url] = line.split(/\s+/);
    if (name && url && !map.has(name)) map.set(name, url);
  }
  remotes.value = [...map].map(([name, url]) => ({ name, url }));

  // 远程标签：本地 for-each-ref 拿不到「远端新建、本地尚未获取」的标签，
  // 用 ls-remote 拉取各远程标签并合并进列表（仅补充未在本地的）。
  await loadRemoteTags();
}

/** 通过 `git ls-remote --tags` 拉取各远程的标签，合并进 tags（不覆盖本地已存在的同名标签）。 */
async function loadRemoteTags(): Promise<void> {
  const localNames = new Set(tags.value.map((t) => t.name));
  const added = new Set<string>();
  const remoteTags: RefItem[] = [];
  for (const rm of remotes.value) {
    const r = await git(["ls-remote", "--tags", rm.name]).catch(() => null);
    if (!r || r.code !== 0) continue;
    // name -> { hash(标签对象/轻量直接指向提交), deref(annotated 解引用后的提交) }
    const byName = new Map<string, { hash: string; deref?: string }>();
    for (const line of r.stdout.split("\n")) {
      const m = /^([0-9a-f]+)\t(refs\/tags\/(.+))$/.exec(line.trim());
      if (!m) continue;
      const hash = m[1];
      const full = m[2];
      if (full.endsWith("^{}")) {
        const nm = full.slice(0, -3);
        const e = byName.get(nm);
        if (e) e.deref = hash;
        else byName.set(nm, { hash, deref: hash });
      } else {
        const e = byName.get(full);
        if (e) e.hash = hash;
        else byName.set(full, { hash });
      }
    }
    for (const [name, e] of byName) {
      if (localNames.has(name) || added.has(name)) continue;
      added.add(name);
      remoteTags.push({
        name,
        hash: e.deref || e.hash,
        upstream: "",
        current: false,
        deref: e.deref,
        remoteOnly: true,
        remote: rm.name,
      });
    }
  }
  if (remoteTags.length) {
    // 本地标签保持创建时间倒序；远程独有标签（无日期信息）按名称倒序追加在尾部
    tags.value = [...tags.value, ...remoteTags.sort((a, b) => b.name.localeCompare(a.name, undefined, { numeric: true }))];
  }
}

/** 读取提交图谱（历史页）。 */
async function loadGraph(): Promise<void> {
  const args = ["log", `--max-count=${GRAPH_COUNT}`, "--date-order"];
  if (graphAll.value) args.push("--all");
  args.push(`--pretty=format:${LOG_FORMAT}`);
  const out = await runOrThrow(args).catch(() => "");
  graphRows.value = buildGraph(parseLog(out));
}

function setGraphScope(all: boolean): void {
  if (graphAll.value === all) return;
  graphAll.value = all;
  void loadGraph().catch(() => undefined);
}

/** 读取储藏列表。 */
async function loadStashes(): Promise<void> {
  const r = await git(["stash", "list"]).catch(() => null);
  stashList.value = parseStashList(r?.stdout ?? "");
}

/** 解析 `git stash list`：`stash@{0}: WIP on branch: msg`。 */
function parseStashList(out: string): StashItem[] {
  const items: StashItem[] = [];
  for (const line of out.split("\n")) {
    const m = /^(stash@\{[^}]+\}):\s*(.*)$/.exec(line.trim());
    if (m) items.push({ ref: m[1], full: line.trim(), message: m[2] || m[1] });
  }
  return items;
}

// ── 更改：文件操作与右侧详情 ─────────────────────────────────────
async function openFile(f: GitPanelFile, group: ChangeGroup): Promise<void> {
  sel.value = { file: f, group };
  detail.value = "diff";
  await loadFileDiff(f, group);
}

/** 取某个改动文件的 diff 文本（暂存/未暂存分别用 --cached 与工作区 diff）。 */
async function loadFileDiff(f: GitPanelFile, group: ChangeGroup, silentFail = false): Promise<void> {
  diffHint.value = "";
  try {
    if (group === "untracked") {
      // 未跟踪文件不在索引里，git diff 无输出：给出引导文案而非空白
      diffLines.value = [];
      diffHint.value = t("gitDiffUntrackedHint");
      return;
    }
    const args = ["diff", "--no-color", ...(group === "staged" ? ["--cached"] : []), "--", f.path];
    setDiffLines(await runOrThrow(args));
  } catch (err) {
    if (!silentFail) toast("error", (err as Error).message);
    diffLines.value = [];
  }
}
function setDiffLines(text: string): void {
  diffLines.value = text ? text.split("\n") : [];
}

/** 单文件提交历史（--follow 跟随重命名）。 */
async function showFileHistory(): Promise<void> {
  const s = sel.value;
  if (!s) return;
  detail.value = "history";
  fileLog.value = [];
  try {
    const out = await runOrThrow([
      "log",
      "--follow",
      "--max-count=30",
      `--pretty=format:${LOG_FORMAT}`,
      "--",
      s.file.path,
    ]);
    fileLog.value = parseLog(out);
  } catch (err) {
    toast("error", (err as Error).message);
  }
}

/** 逐行追溯（-w 忽略空白差异，减少无关改动噪声）。 */
async function showBlame(): Promise<void> {
  const s = sel.value;
  if (!s) return;
  detail.value = "blame";
  blameLines.value = [];
  try {
    const out = await runOrThrow(["blame", "--date=short", "-w", "--", s.file.path]);
    blameLines.value = parseBlame(out);
  } catch (err) {
    toast("error", (err as Error).message);
  }
}

async function stageFile(f: GitPanelFile): Promise<void> {
  await withOp(async () => {
    await runOrThrow(["add", "--", f.path]);
  });
}
async function unstageFile(f: GitPanelFile): Promise<void> {
  await withOp(async () => {
    await runOrThrow(["restore", "--staged", "--", f.path]);
  });
}
async function discardFile(f: GitPanelFile): Promise<void> {
  const ok = await confirmDialog({ title: t("gitDiscardTitle"), message: t("gitDiscardMsg", { name: f.path }) });
  if (!ok) return;
  await withOp(async () => {
    await runOrThrow(["checkout", "--", f.path]);
  }, "gitDiscarded");
}
async function ignoreFile(f: GitPanelFile): Promise<void> {
  const repo = panel.value?.repo;
  if (!repo) return;
  const abs = `${repo.replace(/\\/g, "/")}/${f.path}`.replace(/\/{2,}/g, "/");
  await withOp(async () => {
    await api.gitIgnore(abs);
  }, "gitIgnored");
}
async function stageAll(): Promise<void> {
  await withOp(async () => {
    await runOrThrow(["add", "-A"]);
  });
}
async function commit(): Promise<void> {
  const msg = commitMsg.value.trim();
  const p = panel.value;
  if (!msg || !p?.staged.length) return;
  busy.commit = true;
  try {
    await runOrThrow(["commit", "-m", msg]);
    commitMsg.value = "";
    toast("ok", t("gitCommitted"));
    await reload();
  } catch (err) {
    toast("error", (err as Error).message);
  } finally {
    busy.commit = false;
  }
}

// ── 历史：提交详情与提交级操作 ───────────────────────────────────
async function openCommit(c: GitCommit): Promise<void> {
  selCommit.value = c.hash;
  selCommitFile.value = "";
  patchLines.value = [];
  commitFiles.value = [];
  try {
    // 元信息与变更文件统计分两条命令：`show -s` 抑制补丁，numstat 走 diff-tree
    const [meta, stat] = await Promise.all([
      runOrThrow(["show", "-s", `--format=${SHOW_FORMAT}`, c.hash]),
      runOrThrow(["diff-tree", "--no-commit-id", "--numstat", "-r", "--root", c.hash]),
    ]);
    commitInfo.value = parseShow(meta) ?? { ...c, body: "" };
    commitFiles.value = parseNumstat(stat);
    // 仅填充右侧详情面板，不自动选中文件、也不弹窗；只有点击右侧文件才打开对比弹窗
  } catch (err) {
    toast("error", (err as Error).message);
  }
}

/** 查看某提交中单个文件的补丁，并打开对比弹窗。 */
async function openCommitFile(cf: CommitFileStat): Promise<void> {
  const hash = selCommit.value;
  if (!hash) return;
  selCommitFile.value = cf.path;
  patchLines.value = [];
  try {
    const out = await runOrThrow(["show", "--no-color", "--format=", hash, "--", cf.path]);
    patchLines.value = out ? out.split("\n") : [];
  } catch (err) {
    toast("error", (err as Error).message);
  }
  commitViewOpen.value = true;
}

async function copyText(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
    toast("ok", t("gitCopied"));
  } catch {
    toast("error", t("gitOpFailed"));
  }
}

async function branchFromCommit(): Promise<void> {
  const hash = selCommit.value;
  if (!hash) return;
  const name = await promptDialog({ title: t("gitBranchFromTitle"), placeholder: t("gitBranchFromPlaceholder") });
  const clean = name?.trim();
  if (!clean) return;
  await withOp(async () => {
    await runOrThrow(["branch", clean, hash]);
  }, "gitBranchCreated", { name: clean });
}

async function checkoutCommit(): Promise<void> {
  const hash = selCommit.value;
  if (!hash) return;
  const ok = await confirmDialog({
    title: t("gitCheckoutCommit"),
    message: t("gitCheckoutCommitMsg", { hash: hash.slice(0, 7) }),
  });
  if (!ok) return;
  await withOp(async () => {
    await runOrThrow(["checkout", hash]);
  });
}

/** 提交操作菜单：重置 / 还原 / 拣选。 */
async function onCommitCmd(cmd: string): Promise<void> {
  const hash = selCommit.value;
  if (!hash) return;
  const short = hash.slice(0, 7);
  if (cmd === "reset-soft" || cmd === "reset-mixed" || cmd === "reset-hard") {
    if (cmd === "reset-hard") {
      const ok = await confirmDialog({ title: t("gitResetHard"), message: t("gitResetHardMsg") });
      if (!ok) return;
    }
    const flag = cmd === "reset-soft" ? "--soft" : cmd === "reset-mixed" ? "--mixed" : "--hard";
    await withOp(async () => {
      await runOrThrow(["reset", flag, hash]);
    }, "gitResetDone", { hash: short });
    return;
  }
  if (cmd === "revert") {
    await withOp(async () => {
      await runOrThrow(["revert", "--no-edit", hash]);
    }, "gitRevertDone", { hash: short });
    return;
  }
  if (cmd === "cherry-pick") {
    await withOp(async () => {
      await runOrThrow(["cherry-pick", hash]);
    }, "gitCherryPicked", { hash: short });
  }
}

// ── 分支 / 标签 / 远程 ──────────────────────────────────────────
async function createBranch(): Promise<void> {
  const name = newBranch.value.trim();
  if (!name) return;
  const ok = await withOp(async () => {
    await runOrThrow(["checkout", "-b", name]);
  }, "gitBranchCreated", { name });
  if (ok) newBranch.value = "";
}
async function checkoutBranch(name: string): Promise<void> {
  await withOp(async () => {
    await runOrThrow(["checkout", name]);
  });
}
async function checkoutRemoteBranch(name: string): Promise<void> {
  const local = name.split("/").slice(1).join("/") || name;
  await withOp(async () => {
    await runOrThrow(["checkout", "-b", local, "--track", name]);
  }, "gitBranchCreated", { name: local });
}
async function renameBranch(): Promise<void> {
  const cur = branchName.value;
  if (!cur || detached.value) return;
  const name = await promptDialog({
    title: t("gitBranchRenameTitle"),
    placeholder: t("gitBranchRenamePlaceholder"),
    initial: cur,
  });
  const clean = name?.trim();
  if (!clean || clean === cur) return;
  await withOp(async () => {
    await runOrThrow(["branch", "-m", clean]);
  }, "gitBranchRenamed", { name: clean });
}
async function deleteBranch(name: string): Promise<void> {
  const ok = await confirmDialog({ title: t("gitDelete"), message: t("gitBranchDeleteMsg", { name }) });
  if (!ok) return;
  await withOp(async () => {
    await runOrThrow(["branch", "-D", name]);
  });
}
async function mergeBranch(name: string): Promise<void> {
  await withOp(async () => {
    await runOrThrow(["merge", "--no-edit", name]);
  }, "gitMergeDone", { name });
}
async function pushBranch(name: string): Promise<void> {
  const hasUpstream = !!branches.value.find((b) => b.name === name)?.upstream;
  await withOp(async () => {
    await runOrThrow(hasUpstream ? ["push"] : ["push", "-u", "origin", name]);
  }, "gitPushed", { name });
}

// ── 标签 ─────────────────────────────────────────────────────
/** 悬浮提示：标签名 / 类型 / 目标提交 / 日期 / 说明。 */
function tagTip(tg: RefItem): string {
  const lines = [tg.name];
  if (tg.subject) lines.push(tg.subject);
  lines.push(`${tg.hash}${tg.date ? ` · ${tg.date}` : ""}`);
  return lines.join("\n");
}

/** 查看标签指向的提交详情（跳到历史页并选中该提交）。 */
function viewTag(tg: RefItem): void {
  const hash = tg.hash;
  if (!hash) return;
  sec.value = "history";
  void openCommit({
    hash,
    short: hash.slice(0, 7),
    author: "",
    email: "",
    ts: tg.date ? Math.floor(Date.parse(tg.date) / 1000) : 0,
    date: tg.date ?? "",
    subject: tg.subject ?? "",
    parents: [],
    refs: [{ label: tg.name, kind: "tag" }],
  });
}

async function createTag(): Promise<void> {
  const name = newTag.value.trim();
  if (!name) return;
  const target = tagTarget.value.trim();
  const msg = tagMsg.value.trim();
  const ok = await withOp(async () => {
    // 带说明 → 附注标签（-a -m）；纯指定提交 → 轻量标签
    const args = msg ? ["tag", "-a", name, "-m", msg] : ["tag", name];
    if (target) args.push(target);
    await runOrThrow(args);
  }, "gitTagCreated", { name });
  if (ok) {
    newTag.value = "";
    tagTarget.value = "";
    tagMsg.value = "";
  }
}
async function deleteTag(name: string): Promise<void> {
  const ok = await confirmDialog({ title: t("gitDelete"), message: t("gitTagDeleteMsg", { name }) });
  if (!ok) return;
  await withOp(async () => {
    await runOrThrow(["tag", "-d", name]);
  }, "gitTagDeleted", { name });
}
async function pushTag(name: string): Promise<void> {
  await withOp(async () => {
    await runOrThrow(["push", "origin", name]);
  }, "gitTagPushed", { name });
}

/** 从远程获取全部标签（git fetch --tags），刷新后远端新建的标签即变成本地可见。 */
async function fetchTags(): Promise<void> {
  await withOp(async () => {
    await runOrThrow(["fetch", "--tags"]);
  }, "gitTagFetchAllDone");
}

/** 拉取某个仅存在于远程的标签到本地（git fetch <remote> refs/tags/<n>:refs/tags/<n>）。 */
async function pullRemoteTag(tg: RefItem): Promise<void> {
  const remote = tg.remote || "origin";
  await withOp(async () => {
    await runOrThrow(["fetch", remote, `refs/tags/${tg.name}:refs/tags/${tg.name}`]);
  }, "gitTagPulled", { name: tg.name });
}

/** 打开「发布新版本」弹窗（创建附注标签并推送到远程）。 */
function openRelease(): void {
  releaseName.value = "";
  releaseTarget.value = "";
  releaseMsg.value = "";
  releaseOpen.value = true;
}

/** 发布远程 release：创建附注标签（强制需要说明）+ 推送到 origin。 */
async function publishRelease(): Promise<void> {
  const name = releaseName.value.trim();
  const msg = releaseMsg.value.trim();
  const target = releaseTarget.value.trim();
  if (!name || !msg) {
    toast("error", t("gitReleaseRequireMsg"));
    return;
  }
  busy.op = true;
  try {
    const args = ["tag", "-a", name, "-m", msg];
    if (target) args.push(target);
    await runOrThrow(args);
    await runOrThrow(["push", "origin", name]);
    toast("ok", t("gitReleased", { name }));
    releaseOpen.value = false;
    await reload();
  } catch (err) {
    toast("error", (err as Error).message);
  } finally {
    busy.op = false;
  }
}

async function addRemote(): Promise<void> {
  const name = newRemoteName.value.trim();
  const url = newRemoteUrl.value.trim();
  if (!name || !url) return;
  const ok = await withOp(async () => {
    await runOrThrow(["remote", "add", name, url]);
  }, "gitRemoteAdded", { name });
  if (ok) {
    newRemoteName.value = "";
    newRemoteUrl.value = "";
  }
}
async function editRemoteUrl(rm: RemoteItem): Promise<void> {
  const url = await promptDialog({
    title: t("gitRemoteUrlTitle"),
    placeholder: t("gitRemoteUrlPlaceholder"),
    initial: rm.url,
  });
  const clean = url?.trim();
  if (!clean || clean === rm.url) return;
  await withOp(async () => {
    await runOrThrow(["remote", "set-url", rm.name, clean]);
  }, "gitRemoteUrlSaved");
}
async function removeRemote(name: string): Promise<void> {
  const ok = await confirmDialog({ title: t("gitDelete"), message: t("gitRemoteRemoveMsg", { name }) });
  if (!ok) return;
  await withOp(async () => {
    await runOrThrow(["remote", "remove", name]);
  }, "gitRemoteRemoved", { name });
}

// ── 储藏 ────────────────────────────────────────────────────────
async function createStash(): Promise<void> {
  busy.stash = true;
  try {
    await runOrThrow(["stash", "push", "-m", stashName.value.trim() || "auto stash"]);
    stashName.value = "";
    toast("ok", t("gitStashCreated"));
    await reload();
  } catch (err) {
    toast("error", (err as Error).message);
  } finally {
    busy.stash = false;
  }
}
async function applyStash(ref: string): Promise<void> {
  await withOp(async () => {
    await runOrThrow(["stash", "apply", ref]);
  }, "gitStashApplied");
}
async function popStash(ref: string): Promise<void> {
  await withOp(async () => {
    await runOrThrow(["stash", "pop", ref]);
  }, "gitStashPopped");
}
async function dropStash(ref: string): Promise<void> {
  const ok = await confirmDialog({ title: t("gitStashDrop"), message: t("gitStashDropMsg", { ref }) });
  if (!ok) return;
  await withOp(async () => {
    await runOrThrow(["stash", "drop", ref]);
  }, "gitStashDropped");
}
async function viewStash(ref: string): Promise<void> {
  selStash.value = ref;
  stashDiff.value = [];
  try {
    const out = await runOrThrow(["stash", "show", "--no-color", "-p", ref]);
    stashDiff.value = out ? out.split("\n") : [];
  } catch (err) {
    toast("error", (err as Error).message);
  }
}

// ── 同步 / 身份配置 / 命令台 ────────────────────────────────────
async function sync(action: "fetch" | "pull" | "push"): Promise<void> {
  busy.sync = action;
  try {
    const r = await git([action]);
    if (r.code !== 0) throw new Error((r.stderr || r.stdout || t("gitOpFailed")).trim());
    toast("ok", (r.stderr || r.stdout || `${action} ok`).trim());
    await reload();
  } catch (err) {
    toast("error", (err as Error).message);
  } finally {
    busy.sync = "";
  }
}

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
    configOpen.value = false;
    toast("ok", t("gitConfigSaved"));
  } catch (err) {
    toast("error", (err as Error).message);
  } finally {
    busy.config = false;
  }
}

/** 命令台：输入按空白拆成参数（保持旧版行为）。 */
async function runCli(): Promise<void> {
  const text = cliCmd.value.trim();
  if (!text) return;
  cliCmd.value = "";
  cliLines.value.push({ kind: "cmd", text });
  try {
    const r = await git(text.split(/\s+/));
    if (r.stdout) cliLines.value.push({ kind: "out", text: r.stdout });
    if (r.stderr) cliLines.value.push({ kind: r.code === 0 ? "out" : "err", text: r.stderr });
    if (!r.stdout && !r.stderr) cliLines.value.push({ kind: "out", text: `(exit ${r.code})` });
    // 命令可能改动工作区/引用，静默刷新面板
    await reload(true);
  } catch (err) {
    cliLines.value.push({ kind: "err", text: (err as Error).message });
  }
}
function focusCli(): void {
  cliInputRef.value?.focus();
}
</script>

<style scoped>
/* ── 头部状态条 ───────────────────────────────────────────────── */
.fw-gp-head {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 2px 8px;
  border-bottom: 1px solid var(--dsh-border, #30363d);
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  min-width: 0;
}
.fw-gp-branch {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  height: 22px;
  padding: 0 8px;
  border-radius: 11px;
  background: color-mix(in srgb, var(--dsh-accent, #238636) 18%, transparent);
  border: 1px solid color-mix(in srgb, var(--dsh-accent, #238636) 45%, transparent);
  color: var(--dsh-accent, #238636);
  max-width: 260px;
  overflow: hidden;
}
.fw-gp-branch b { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-weight: 600; }
.fw-gp-branch.detached {
  background: color-mix(in srgb, #d29922 18%, transparent);
  border-color: color-mix(in srgb, #d29922 45%, transparent);
  color: #e3b341;
}
.fw-gp-up {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--dsh-fg-weak, #8b949e);
}
.fw-gp-up-i { color: var(--dsh-accent, #238636); font-weight: 600; }
.fw-gp-up-i.zero { color: var(--dsh-fg-weak, #8b949e); opacity: 0.5; font-weight: 400; }
.fw-gp-up-name { opacity: 0.85; }
.fw-gp-repo {
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--dsh-fg-weak, #8b949e);
  font-size: calc(11px * var(--dsh-fs-scale, 1));
}
.fw-gp-headacts { flex: 0 0 auto; display: inline-flex; align-items: center; gap: 4px; }

/* ── 主体：左导航 + 内容 ──────────────────────────────────────── */
.fw-gp-shell {
  display: flex;
  flex-direction: column;
  /* 固定外壳高度：页签切换（提交栏显隐）与加载态都不再改变弹窗高度，避免抖动 */
  height: min(78vh, 800px);
  min-height: 470px;
}
.fw-gp-body {
  display: flex;
  align-items: stretch;
  /* 高度由外壳分配，页签内容自适应 */
  flex: 1 1 auto;
  min-height: 0;
  margin-top: 8px;
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 6px;
  overflow: hidden;
}
/* 加载中 / 非仓库占位：与外壳同高，弹窗总高度恒定 */
.fw-gitpanel-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: min(78vh, 800px);
  min-height: 470px;
  color: var(--dsh-fg-weak, #8b949e);
  font-size: calc(12px * var(--dsh-fs-scale, 1));
}
.fw-gp-rail {
  flex: 0 0 132px;
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: 6px 4px;
  background: var(--dsh-bg2, #161b22);
  border-right: 1px solid var(--dsh-border, #30363d);
}
.fw-gp-rail-btn {
  display: flex;
  align-items: center;
  gap: 7px;
  width: 100%;
  min-height: 28px;
  padding: 0 8px;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: var(--dsh-fg, #c9d1d9);
  font: inherit;
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  text-align: left;
  cursor: pointer;
}
.fw-gp-rail-btn:hover { background: var(--dsh-hover, rgba(48, 54, 61, 0.5)); }
.fw-gp-rail-btn.active {
  background: var(--dsh-hover, rgba(48, 54, 61, 0.9));
  box-shadow: inset 2px 0 0 var(--dsh-accent, #238636);
  color: var(--dsh-accent, #238636);
  font-weight: 600;
}
.fw-gp-rail-txt { flex: 1 1 auto; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.fw-gp-rail-badge {
  flex: 0 0 auto;
  min-width: 17px;
  height: 16px;
  padding: 0 5px;
  border-radius: 8px;
  background: var(--dsh-hover, rgba(110, 118, 129, 0.3));
  color: var(--dsh-fg, #c9d1d9);
  font-size: calc(10px * var(--dsh-fs-scale, 1));
  line-height: 16px;
  text-align: center;
}
.fw-gp-rail-fill { flex: 1 1 auto; }
.fw-gp-rail-op {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 8px;
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  color: var(--dsh-accent, #238636);
}
.fw-gp-spin {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid var(--dsh-border, #30363d);
  border-top-color: var(--dsh-accent, #238636);
  animation: fw-gp-spin 0.8s linear infinite;
}
@keyframes fw-gp-spin { to { transform: rotate(360deg); } }

.fw-gp-content { flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; overflow: hidden; }
/* 左右分栏：列表 + 详情 */
.fw-gp-split { display: flex; align-items: stretch; flex: 1 1 auto; min-height: 0; }
.fw-gp-list {
  flex: 0 0 44%;
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  overflow-y: auto;
  border-right: 1px solid var(--dsh-border, #30363d);
}
/* 历史页的列表由内部图谱组件自己滚动，容器不再滚 */
.fw-gp-list.fw-gp-list-col { overflow: hidden; }
.fw-gp-detail {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
}
.fw-gp-one { flex: 1 1 auto; min-height: 0; overflow-y: auto; padding: 8px; }
.fw-gp-cli-wrap { padding: 0; overflow: hidden; display: flex; }

.fw-gp-listbar {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 8px;
  border-bottom: 1px solid var(--dsh-border, #30363d);
  flex: 0 0 auto;
}
.fw-gp-form {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
  padding-bottom: 8px;
  margin-bottom: 6px;
  border-bottom: 1px solid var(--dsh-border, #30363d);
}
.fw-gp-in-name { width: 150px; }
.fw-gp-in-target { width: 170px; }
.fw-gp-in-msg { width: 220px; }
.fw-gp-in-url { width: 320px; }

/* ── 列表行（通用） ───────────────────────────────────────────── */
.fw-gp-groupbar {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 8px 4px;
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  font-weight: 600;
  color: var(--dsh-fg-weak, #8b949e);
  position: sticky;
  top: 0;
  background: var(--dsh-bg, #0d1117);
  z-index: 1;
}
.fw-gp-groupname { flex: 1 1 auto; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.fw-gp-groupcount {
  flex: 0 0 auto;
  min-width: 16px;
  padding: 0 4px;
  height: 15px;
  line-height: 15px;
  text-align: center;
  border-radius: 7px;
  background: var(--dsh-hover, rgba(110, 118, 129, 0.3));
}
.fw-gp-row {
  display: flex;
  align-items: center;
  gap: 7px;
  min-height: 26px;
  padding: 0 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  color: var(--dsh-fg, #c9d1d9);
}
.fw-gp-row:hover { background: var(--dsh-hover, rgba(48, 54, 61, 0.45)); }
.fw-gp-row.active {
  background: var(--dsh-hover, rgba(48, 54, 61, 0.85));
  box-shadow: inset 2px 0 0 var(--dsh-accent, #238636);
}
.fw-gp-st {
  flex: 0 0 auto;
  width: 16px;
  height: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  font-size: calc(10px * var(--dsh-fs-scale, 1));
  font-weight: 700;
  line-height: 1;
  color: var(--dsh-fg-weak, #8b949e);
}
.fw-gp-st.st-modified { color: #d29922; background: color-mix(in srgb, #d29922 18%, transparent); }
.fw-gp-st.st-added { color: #3fb950; background: color-mix(in srgb, #3fb950 18%, transparent); }
.fw-gp-st.st-untracked { color: #3fb950; background: color-mix(in srgb, #3fb950 12%, transparent); }
.fw-gp-st.st-deleted { color: #f85149; background: color-mix(in srgb, #f85149 18%, transparent); }
.fw-gp-st.st-branch,
.fw-gp-st.st-tag,
.fw-gp-st.st-remote,
.fw-gp-st.st-stash { background: transparent; }
.fw-gp-st.st-branch { color: #79c0ff; }
.fw-gp-st.st-tag { color: #e3b341; }
.fw-gp-st.st-remote { color: #d2a8ff; }
.fw-gp-st.st-stash { color: var(--dsh-fg-weak, #8b949e); }
.fw-gp-path {
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.fw-gp-dir { color: var(--dsh-fg-weak, #8b949e); }
.fw-gp-cur { color: var(--dsh-accent, #238636); font-size: calc(11px * var(--dsh-fs-scale, 1)); }
.fw-gp-rowacts { flex: 0 0 auto; display: inline-flex; align-items: center; gap: 2px; }
.fw-gp-mini {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  padding: 0;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: var(--dsh-fg-weak, #8b949e);
  cursor: pointer;
}
.fw-gp-mini:hover { background: var(--dsh-border, #30363d); color: var(--dsh-fg, #c9d1d9); }
.fw-gp-mini.danger:hover { color: #f85149; }
.fw-gp-hash {
  flex: 0 0 auto;
  font-family: var(--dsh-mono, ui-monospace, sfmono-regular, consolas, monospace);
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  color: var(--dsh-fg-weak, #8b949e);
}
/* 标签行附加信息：日期、说明、附注徽标 */
.fw-gp-date {
  flex: 0 0 auto;
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  color: var(--dsh-fg-weak, #8b949e);
  font-variant-numeric: tabular-nums;
}
.fw-gp-subject {
  flex: 0 1 auto;
  min-width: 0;
  max-width: 40%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  color: var(--dsh-fg-weak, #8b949e);
}
.fw-gp-badge {
  margin-left: 6px;
  padding: 0 5px;
  border-radius: 8px;
  border: 1px solid var(--dsh-border, #30363d);
  font-size: calc(10px * var(--dsh-fs-scale, 1));
  color: var(--dsh-fg-weak, #8b949e);
  vertical-align: middle;
}
.fw-gp-num { flex: 0 0 auto; display: inline-flex; gap: 6px; font-size: calc(11px * var(--dsh-fs-scale, 1)); }
.fw-gp-num .add { color: #3fb950; }
.fw-gp-num .del { color: #f85149; }
.fw-gp-remote-url {
  flex: 0 0 auto;
  max-width: 42%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--dsh-fg-weak, #8b949e);
  font-size: calc(11px * var(--dsh-fs-scale, 1));
}
.fw-gp-sec-title {
  margin: 8px 0 2px;
  padding: 0 8px;
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  font-weight: 600;
  color: var(--dsh-fg-weak, #8b949e);
}
.fw-gp-empty { padding: 12px 10px; font-size: calc(12px * var(--dsh-fs-scale, 1)); color: var(--dsh-fg-weak, #8b949e); }

/* ── 详情面板 ─────────────────────────────────────────────────── */
.fw-gp-detailhead {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 8px;
  border-bottom: 1px solid var(--dsh-border, #30363d);
  background: var(--dsh-bg2, #161b22);
}
.fw-gp-detailtitle {
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  color: var(--dsh-fg-weak, #8b949e);
}
.fw-gp-detailacts { flex: 0 0 auto; display: inline-flex; align-items: center; gap: 2px; }
.fw-gp-scroll { flex: 1 1 auto; min-height: 0; overflow: auto; }
.fw-gp-filerow {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 10px;
  font-size: calc(12px * var(--dsh-fs-scale, 1));
}
.fw-gp-filerow:hover { background: var(--dsh-hover, rgba(48, 54, 61, 0.4)); }
.fw-gp-filesub { flex: 1 1 auto; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.fw-gp-filemeta { flex: 0 0 auto; color: var(--dsh-fg-weak, #8b949e); font-size: calc(11px * var(--dsh-fs-scale, 1)); }
/* 逐行追溯：作者/日期/行号固定宽度，正文占满剩余空间 */
.fw-gp-blame .fw-gp-blame-row {
  display: flex;
  align-items: baseline;
  gap: 8px;
  padding: 1px 8px;
  font-family: var(--dsh-mono, ui-monospace, sfmono-regular, consolas, monospace);
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  white-space: pre;
}
.fw-gp-blame-hash { flex: 0 0 auto; color: #79c0ff; }
.fw-gp-blame-author { flex: 0 0 84px; overflow: hidden; text-overflow: ellipsis; color: #e3b341; }
.fw-gp-blame-date { flex: 0 0 78px; color: var(--dsh-fg-weak, #8b949e); }
.fw-gp-blame-no { flex: 0 0 42px; text-align: right; color: var(--dsh-fg-weak, #8b949e); }
.fw-gp-blame-txt { flex: 1 1 auto; color: var(--dsh-fg, #c9d1d9); }

/* 提交详情 */
.fw-gp-cmeta { padding: 8px 10px; border-bottom: 1px solid var(--dsh-border, #30363d); }
.fw-gp-crow { display: flex; gap: 8px; font-size: calc(12px * var(--dsh-fs-scale, 1)); padding: 1px 0; }
.fw-gp-crow .k { flex: 0 0 66px; color: var(--dsh-fg-weak, #8b949e); }
.fw-gp-crow .v { flex: 1 1 auto; min-width: 0; overflow: hidden; text-overflow: ellipsis; }
.fw-gp-crow .v.mono { font-family: var(--dsh-mono, ui-monospace, sfmono-regular, consolas, monospace); }
.fw-gp-refchip {
  display: inline-flex;
  align-items: center;
  height: 15px;
  padding: 0 5px;
  margin-right: 4px;
  border-radius: 7px;
  font-size: calc(10px * var(--dsh-fs-scale, 1));
  background: var(--dsh-hover, rgba(110, 118, 129, 0.3));
}
.fw-gp-refchip.rf-head {
  background: color-mix(in srgb, var(--dsh-accent, #238636) 25%, transparent);
  color: var(--dsh-accent, #238636);
}
.fw-gp-refchip.rf-tag { background: color-mix(in srgb, #d29922 22%, transparent); color: #e3b341; }
.fw-gp-refchip.rf-remote { background: color-mix(in srgb, #bc8cff 20%, transparent); color: #d2a8ff; }
.fw-gp-cbody {
  margin: 0;
  padding: 8px 10px;
  white-space: pre-wrap;
  word-break: break-word;
  font-family: var(--dsh-font, sans-serif);
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  color: var(--dsh-fg, #c9d1d9);
  border-bottom: 1px solid var(--dsh-border, #30363d);
}
.fw-gp-cfiles {
  padding: 6px 10px 2px;
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  font-weight: 600;
  color: var(--dsh-fg-weak, #8b949e);
}
.fw-gp-patch { height: 260px; display: flex; border-top: 1px solid var(--dsh-border, #30363d); }

/* 提交对比弹窗 */
.fw-gp-cv { display: flex; flex-direction: column; height: 560px; min-height: 0; }
.fw-gp-cv-meta { flex: 0 0 auto; padding: 8px 10px; border-bottom: 1px solid var(--dsh-border, #30363d); }
.fw-gp-cv-meta .fw-gp-cbody { border-bottom: none; padding: 8px 0 0; }
.fw-gp-cv-body { flex: 1 1 auto; display: flex; min-height: 0; }
.fw-gp-cv-files {
  flex: 0 0 42%;
  overflow-y: auto;
  border-right: 1px solid var(--dsh-border, #30363d);
  padding: 4px 0;
}
.fw-gp-cv-diff { flex: 1 1 auto; min-width: 0; display: flex; }
.fw-gp-cv-diff :deep(.fw-diff) { flex: 1 1 auto; }
/* 远程标签徽标（区别于本地附注标签） */
.fw-gp-badge-remote {
  color: #d2a8ff;
  border-color: color-mix(in srgb, #d2a8ff 50%, transparent);
  background: color-mix(in srgb, #d2a8ff 14%, transparent);
}

/* 图谱工具条 */
.fw-gp-tab {
  height: 20px;
  padding: 0 8px;
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 10px;
  background: transparent;
  color: var(--dsh-fg-weak, #8b949e);
  font: inherit;
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  cursor: pointer;
}
.fw-gp-tab.on {
  border-color: color-mix(in srgb, var(--dsh-accent, #238636) 55%, transparent);
  color: var(--dsh-accent, #238636);
  font-weight: 600;
}
.fw-gp-spacer { flex: 1 1 auto; }
.fw-gp-count { font-size: calc(11px * var(--dsh-fs-scale, 1)); color: var(--dsh-fg-weak, #8b949e); }

/* ── 底部提交栏 ───────────────────────────────────────────────── */
.fw-gp-commitbar { flex: 0 0 auto; display: flex; align-items: flex-end; gap: 8px; margin-top: 8px; }
.fw-gp-commitbar :deep(.el-textarea) { flex: 1 1 auto; }
.fw-gp-commitacts { flex: 0 0 auto; display: flex; align-items: center; gap: 6px; }
.fw-gp-commitmeta { font-size: calc(11px * var(--dsh-fs-scale, 1)); color: var(--dsh-fg-weak, #8b949e); }

/* ── 命令台 ───────────────────────────────────────────────────── */
.fw-gp-cli {
  flex: 1 1 auto;
  min-height: 0;
  overflow: auto;
  padding: 8px 10px;
  font-family: var(--dsh-mono, ui-monospace, sfmono-regular, consolas, monospace);
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  line-height: 1.5;
  cursor: text;
}
.fw-gp-cli-hint { color: var(--dsh-fg-weak, #8b949e); }
.fw-gp-cli-line { white-space: pre-wrap; word-break: break-all; }
.fw-gp-cli-line.kind-err { color: #f85149; }
.fw-gp-cli-line.kind-out { color: var(--dsh-fg, #c9d1d9); }
.fw-gp-cli-prompt { color: var(--dsh-accent, #238636); }
.fw-gp-cli-cmd { color: var(--dsh-fg, #c9d1d9); }
.fw-gp-cli-inputline { display: flex; align-items: center; gap: 4px; }
.fw-gp-cli-inner {
  flex: 1 1 auto;
  min-width: 0;
  border: none;
  outline: none;
  background: transparent;
  color: var(--dsh-fg, #c9d1d9);
  font: inherit;
}

/* 身份配置弹窗字段 */
.fw-gp-cfgfield { display: flex; flex-direction: column; gap: 4px; margin-bottom: 10px; }
.fw-gp-cfgfield label { font-size: calc(12px * var(--dsh-fs-scale, 1)); color: var(--dsh-fg-weak, #8b949e); }
</style>

<style>
/* Git/SVN 管理弹窗的遮罩：固定居中 + 背景模糊，对齐 dsh 官方浮层
   （参考 dsh-prompt-library dialog-style：rgba(0,0,0,.35) + blur(12px)，弹窗表面 24px 圆角）。
   modal-class 挂在 .el-overlay 上，弹窗（append-to-body）也会带上，故为全局样式。 */
.el-overlay.fw-blur-overlay {
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: var(--dsw-mask-blur, blur(12px));
  -webkit-backdrop-filter: var(--dsw-mask-blur, blur(12px));
}
.el-dialog.fw-gitpanel-dialog,
.el-dialog.fw-gitconfig-dialog,
.el-dialog.fw-gp-commitview-dialog,
.el-dialog.fw-gp-release-dialog {
  border-radius: 24px;
}
</style>
