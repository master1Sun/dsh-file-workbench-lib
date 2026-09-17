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
          <el-button size="small" :loading="busy.sync === 'fetch'" @click="sync('fetch')">{{ t("gitFetch") }}</el-button>
          <el-button size="small" :loading="busy.sync === 'pull'" @click="sync('pull')">{{ t("gitPull") }}</el-button>
          <el-button size="small" :loading="busy.sync === 'push'" @click="sync('push')">{{ t("gitPush") }}</el-button>
          <el-button size="small" :disabled="busy.refresh" :title="t('gitRefresh')" @click="reload()"><span class="fw-gp-refresh-ic" :class="{ spin: busy.refresh }"><icon name="refresh" :size="13" /></span></el-button>
          <el-button size="small" :title="t('gitConfig')" @click="openConfig"><icon name="gear" :size="13" /></el-button>
          <el-button size="small" :title="t('accTitle')" @click="openAccounts"><icon name="shield" :size="13" /></el-button>
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
                  @contextmenu.prevent.stop="openChangeMenu($event, f, g.key)"
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
                <!-- 懒加载：已加载条数达到上限才出现，说明可能还有更早提交 -->
                <button v-if="graphRows.length >= graphLimit" class="fw-gp-tab" @click="loadMoreGraph">{{ t("gitLoadMore") }}</button>
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
                    <!-- 危险操作（重置/还原/拣选）收进自研 ContextMenu：与全应用菜单同一套观感 -->
                    <button class="fw-gp-mini" :title="t('gitMenu')" @click.stop="openCommitMenu($event)"><icon name="sort" :size="12" /></button>
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
            <div v-for="b in localBranches" :key="b.name" class="fw-gp-row" :class="{ active: b.current }" @contextmenu.prevent.stop="openBranchMenu($event, b)">
              <span class="fw-gp-st st-branch"><icon name="git" :size="12" /></span>
              <span class="fw-gp-path">{{ b.name }}<span v-if="b.current" class="fw-gp-cur"> • {{ t("gitBranchCurrent") }}</span></span>
              <span class="fw-gp-rowacts">
                <!-- 行内只留主操作：当前分支=推送，其余=检出；合并/重命名/删除进右键菜单 -->
                <el-button v-if="!b.current" text size="small" @click="checkoutBranch(b.name)">{{ t("gitCheckout") }}</el-button>
                <el-button v-else text size="small" @click="pushBranch(b.name)">{{ t("gitPushBranch") }}</el-button>
              </span>
            </div>
            <template v-if="remoteBranches.length">
              <div class="fw-gp-sec-title">{{ t("gitBranchRemoteGroup") }}</div>
              <div v-for="b in remoteBranches" :key="b.name" class="fw-gp-row" @contextmenu.prevent.stop="openRemoteBranchMenu($event, b)">
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
            <!-- 区块内 tab：标签信息 / 版本信息 -->
            <div class="fw-gp-sectabs">
              <button class="fw-gp-sectab" :class="{ active: tagTab === 'tags' }" @click="showTagTab('tags')">
                {{ t("gitTabTags") }}<span v-if="tags.length" class="fw-gp-sectab-n">{{ tags.length }}</span>
              </button>
              <button class="fw-gp-sectab" :class="{ active: tagTab === 'releases' }" @click="showTagTab('releases')">
                {{ t("gitTabReleases") }}<span v-if="releases.length" class="fw-gp-sectab-n">{{ releases.length }}</span>
              </button>
            </div>

            <!-- ── 标签 tab：独立创建标签 + 标签列表 ── -->
            <template v-if="tagTab === 'tags'">
              <div class="fw-gp-form">
                <el-input v-model="newTag" size="small" class="fw-gp-in-name" :placeholder="t('gitTagNamePlaceholder')" />
                <el-input v-model="tagTarget" size="small" class="fw-gp-in-target" :placeholder="t('gitTagTargetPlaceholder')" />
                <el-input v-model="tagMsg" size="small" class="fw-gp-in-msg" :placeholder="t('gitTagMessagePlaceholder')" />
                <el-button size="small" type="primary" :disabled="!newTag.trim()" @click="createTag">{{ t("gitTagCreate") }}</el-button>
                <el-button
                  size="small"
                  :loading="busy.op"
                  :disabled="!hasRemote"
                  :title="hasRemote ? '' : t('gitTagNoRemote')"
                  @click="fetchTags"
                >{{ t("gitTagFetchAll") }}</el-button>
              </div>
              <div v-if="!tags.length" class="fw-gp-empty">{{ t("gitTagEmpty") }}</div>
              <div v-for="tg in tags" :key="tg.name" class="fw-gp-row" :title="tagTip(tg)" @contextmenu.prevent.stop="openTagMenu($event, tg)">
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
                  <!-- 行内只留「查看」；推送 / 拉取 / 删除进右键菜单 -->
                  <el-button text size="small" @click="viewTag(tg)">{{ t("gitView") }}</el-button>
                </span>
              </div>
            </template>

            <!-- ── 版本 tab：发布新版本（标签+版本一起）/ 为现有标签单独建 Release + 版本列表 ── -->
            <template v-else>
              <div class="fw-gp-form">
                <el-button
                  size="small"
                  type="primary"
                  :disabled="!hasRemote"
                  :title="hasRemote ? '' : t('gitTagNoRemote')"
                  @click="openRelease"
                >{{ t("gitReleaseBtn") }}</el-button>
                <el-button size="small" :loading="releasesLoading" @click="loadReleases">{{ t("gitRefresh") }}</el-button>
                <span v-if="!hasRemote" class="fw-gp-subject">{{ t("gitTagNoRemote") }}</span>
              </div>
              <!-- 独立创建：只为已有标签补建 Release（不新建标签、不推送） -->
              <div class="fw-gp-form">
                <el-select v-model="relTag" size="small" class="fw-gp-in-name" :placeholder="t('gitReleaseChooseTag')" filterable>
                  <el-option v-for="tg in tags" :key="tg.name" :label="tg.name" :value="tg.name" />
                </el-select>
                <el-input
                  v-model="relNotes"
                  size="small"
                  type="textarea"
                  :rows="2"
                  resize="none"
                  :placeholder="t('gitReleaseNotesPlaceholder')"
                />
                <el-button size="small" :disabled="!relTag.trim() || !relNotes.trim()" @click="createReleaseOnly">
                  {{ t("gitReleaseCreateForTag") }}
                </el-button>
              </div>
              <div v-if="releasesSkipped" class="fw-gp-empty">{{ t("gitReleaseLoadSkip", { reason: releasesSkipped }) }}</div>
              <div v-else-if="!releases.length && !releasesLoading" class="fw-gp-empty">{{ t("gitReleaseEmpty") }}</div>
              <div v-for="r in releases" :key="r.url || r.tag" class="fw-gp-row" :title="r.name">
                <span class="fw-gp-st st-tag"><icon name="tag" :size="12" /></span>
                <span class="fw-gp-path">
                  {{ r.name || r.tag }}
                  <span class="fw-gp-badge">{{ r.tag }}</span>
                </span>
                <span v-if="r.date" class="fw-gp-date">{{ r.date }}</span>
                <span class="fw-gp-rowacts">
                  <el-button text size="small" @click="openReleaseUrl(r.url)">{{ t("gitReleaseOpen") }}</el-button>
                </span>
              </div>
            </template>
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
            <div v-for="rm in remotes" :key="rm.name" class="fw-gp-row" @contextmenu.prevent.stop="openRemoteMenu($event, rm)">
              <span class="fw-gp-st st-remote"><icon name="globe" :size="12" /></span>
              <span class="fw-gp-path">{{ rm.name }}</span>
              <span class="fw-gp-remote-url" :title="rm.url">{{ rm.url }}</span>
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
                @contextmenu.prevent.stop="openStashMenu($event, s)"
              >
                <span class="fw-gp-st st-stash"><icon name="stash" :size="12" /></span>
                <span class="fw-gp-path">{{ s.message }}</span>
                <span class="fw-gp-rowacts">
                  <!-- 行内只留主操作「应用」；弹出 / 丢弃 / 复制说明进右键菜单 -->
                  <button class="fw-gp-mini" :title="t('gitStashApply')" @click.stop="applyStash(s.ref)">
                    <icon name="download" :size="11" />
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
      <!-- 非仓库：给一条可操作的出路（克隆），与 SVN 面板的内嵌检出表单对齐 -->
      <div v-else class="fw-norepo">
        <icon name="git" :size="28" />
        <span>{{ t("gitNotRepo") }}</span>
        <button class="fw-retry" @click="openClone">{{ t("gitCloneHere") }}</button>
      </div>
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
          <pre class="fw-gp-cbody fw-gp-cbody-clamp">{{ commitInfo.body || commitInfo.subject }}</pre>
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

    <!-- 账号管理对话框已在 main.ts 全局挂载（面板内挂会在切 tab 时被卸载重建，
         且全局克隆弹窗里的「新建账号…」在面板未挂载时无人渲染），此处不再重复挂载。 -->

    <!-- Git 面板内部的右键菜单（分支/标签/远程/储藏/更改行 + 提交操作），全应用同一套 ContextMenu -->
    <ContextMenu v-if="cmOpen" :items="cmItems" :x="cmX" :y="cmY" @close="closeMenu" />
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
import ContextMenu from "../../common/ContextMenu.vue";
import { useContextMenu } from "../../../composables/ui/useContextMenu";
import { openCloneDialog } from "../../../composables/core/cloneDialog";
import { wb } from "../../../stores/workbench";
import type { MenuItem } from "../../../../shared/types";
import GitDiffView from "./GitDiffView.vue";
import GitGraphList from "./GitGraphList.vue";
import { openAccountDialog } from "../../../stores/accounts";

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
/** true = 全部分支，false = 仅当前分支。默认只看当前分支——大仓库「全部」一次拉全量会卡，
     需要全貌时用户显式切换（标签页在图谱工具条上，成本一次点击）。 */
const graphAll = ref(false);
const selCommit = ref("");
/** 当前查看的提交详情（元信息 + 正文）。 */
const commitInfo = ref<GitCommitDetail | null>(null);
const commitFiles = ref<CommitFileStat[]>([]);
const selCommitFile = ref("");
const patchLines = ref<string[]>([]);
/** 图谱单次拉取多少条提交；「加载更多」按此步长递增。 */
const GRAPH_STEP = 120;
/** 当前已申请的提交上限（graphRows.length 达到该值时显示「加载更多」）。 */
const graphLimit = ref(GRAPH_STEP);

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
/** 标签区块内部 tab：tags=标签信息，releases=版本（GitHub Release）信息。 */
const tagTab = ref<"tags" | "releases">("tags");
interface GhReleaseItem {
  tag: string;
  name: string;
  url: string;
  date: string;
}
const releases = ref<GhReleaseItem[]>([]);
const releasesSkipped = ref("");
const releasesLoading = ref(false);
/** 独立创建 Release：选中的已有标签 + 版本说明。 */
const relTag = ref("");
const relNotes = ref("");
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
      // m[3] 已是去掉 refs/tags/ 前缀的标签名（附注标签解引用行带 ^{} 后缀）
      const name = m[3];
      if (name.endsWith("^{}")) {
        const nm = name.slice(0, -3);
        const e = byName.get(nm);
        if (e) e.deref = hash;
        else byName.set(nm, { hash, deref: hash });
      } else {
        const e = byName.get(name);
        if (e) e.hash = hash;
        else byName.set(name, { hash });
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
  const args = ["log", `--max-count=${graphLimit.value}`, "--date-order"];
  if (graphAll.value) args.push("--all");
  args.push(`--pretty=format:${LOG_FORMAT}`);
  const out = await runOrThrow(args).catch(() => "");
  graphRows.value = buildGraph(parseLog(out));
}

function setGraphScope(all: boolean): void {
  if (graphAll.value === all) return;
  graphAll.value = all;
  graphLimit.value = GRAPH_STEP; // 切换作用域后重新从最新开始
  void loadGraph().catch(() => undefined);
}

/** 「加载更多」：上限翻倍再拉一次（git log 没有 offset，翻倍策略保证语义简单可靠）。 */
async function loadMoreGraph(): Promise<void> {
  graphLimit.value += GRAPH_STEP;
  await loadGraph().catch(() => undefined);
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

/* ── 面板内部右键菜单：所有列表行共用一套状态（composable），条目就地构建 ── */
const { cmOpen, cmX, cmY, cmItems, openMenu, closeMenu } = useContextMenu();

/** 更改行：详情三件套（diff/历史/blame）+ 暂存类 + 还原/忽略 + 复制路径。 */
function openChangeMenu(e: MouseEvent, f: GitPanelFile, group: ChangeGroup): void {
  const items: MenuItem[] = [
    { label: t("gitDiff"), icon: "code", onClick: () => void openFile(f, group) },
    { label: t("gitFileHistory"), icon: "clock", disabled: group === "untracked", onClick: () => void showFileHistoryFor(f, group) },
    { label: t("gitBlame"), icon: "activity", disabled: group === "untracked", onClick: () => void showBlameFor(f, group) },
    { separator: true },
    group === "staged"
      ? { label: t("gitUnstage"), icon: "undo", onClick: () => void unstageFile(f) }
      : { label: t("gitAddShort"), icon: "plus", onClick: () => void stageFile(f) },
    { label: t("gitIgnore"), icon: "eyeOff", disabled: group !== "untracked", onClick: () => void ignoreFile(f) },
    { label: t("gitDiscard"), icon: "close", disabled: group === "untracked", onClick: () => void discardFile(f) },
    { separator: true },
    { label: t("gitCopyPath"), icon: "copy", onClick: () => void copyText(f.path) },
  ];
  openMenu(e, items);
}

/** 历史/blame 需要「当前右侧详情目标」：菜单项先选中文件再切换视图。 */
async function showFileHistoryFor(f: GitPanelFile, group: ChangeGroup): Promise<void> {
  if (!sel.value || sel.value.file.path !== f.path || sel.value.group !== group) await openFile(f, group);
  await showFileHistory();
}
async function showBlameFor(f: GitPanelFile, group: ChangeGroup): Promise<void> {
  if (!sel.value || sel.value.file.path !== f.path || sel.value.group !== group) await openFile(f, group);
  await showBlame();
}

/** 本地分支行：检出（主操作已在行内）之外的全部管理动作。 */
function openBranchMenu(e: MouseEvent, b: RefItem): void {
  const items: MenuItem[] = [
    { label: t("gitCheckout"), icon: "arrowRight", disabled: b.current, onClick: () => void checkoutBranch(b.name) },
    { label: t("gitMergeIntoCurrent"), icon: "merge", disabled: b.current, onClick: () => void mergeBranch(b.name) },
    { label: t("gitPushBranch"), icon: "upload", onClick: () => void pushBranch(b.name) },
    { separator: true },
    { label: t("gitBranchRename"), icon: "edit", disabled: !b.current, onClick: () => void renameBranch() },
    { label: t("gitDelete"), icon: "trash", disabled: b.current, onClick: () => void deleteBranch(b.name) },
    { separator: true },
    { label: t("gitCopyName"), icon: "copy", onClick: () => void copyText(b.name) },
  ];
  openMenu(e, items);
}

/** 远程分支行：检出（跟踪）/ 复制名称。 */
function openRemoteBranchMenu(e: MouseEvent, b: RefItem): void {
  openMenu(e, [
    { label: t("gitCheckout"), icon: "arrowRight", onClick: () => void checkoutRemoteBranch(b.name) },
    { separator: true },
    { label: t("gitCopyName"), icon: "copy", onClick: () => void copyText(b.name) },
  ]);
}

/** 标签行：查看（行内已有）之外的全部动作。 */
function openTagMenu(e: MouseEvent, tg: RefItem): void {
  const items: MenuItem[] = [
    { label: t("gitView"), icon: "eye", onClick: () => viewTag(tg) },
  ];
  if (tg.remoteOnly) {
    items.push({ label: t("gitTagPull"), icon: "download", onClick: () => void pullRemoteTag(tg) });
  } else {
    items.push({ label: t("gitPushBranch"), icon: "upload", onClick: () => void pushTag(tg.name) });
    items.push({ label: t("gitDelete"), icon: "trash", onClick: () => void deleteTag(tg.name) });
  }
  items.push({ separator: true });
  items.push({ label: t("gitCopyName"), icon: "copy", onClick: () => void copyText(tg.name) });
  openMenu(e, items);
}

/** 远程行：改 URL / 删除 / 复制 URL（行内不再放按钮）。 */
function openRemoteMenu(e: MouseEvent, rm: RemoteItem): void {
  openMenu(e, [
    { label: t("gitRemoteSetUrl"), icon: "edit", onClick: () => void editRemoteUrl(rm) },
    { label: t("gitDelete"), icon: "trash", onClick: () => void removeRemote(rm.name) },
    { separator: true },
    { label: t("gitCopyUrl"), icon: "copy", onClick: () => void copyText(rm.url) },
  ]);
}

/** 储藏行：应用（行内已有）/ 弹出 / 丢弃 / 复制说明。 */
function openStashMenu(e: MouseEvent, st: StashItem): void {
  openMenu(e, [
    { label: t("gitStashApply"), icon: "download", onClick: () => void applyStash(st.ref) },
    { label: t("gitStashPop"), icon: "upload", onClick: () => void popStash(st.ref) },
    { label: t("gitStashDrop"), icon: "close", onClick: () => void dropStash(st.ref) },
    { separator: true },
    { label: t("gitCopyMsg"), icon: "copy", onClick: () => void copyText(st.message) },
  ]);
}

/** 提交详情的重置/还原/拣选：沿用 onCommitCmd 的确认与执行逻辑。 */
function openCommitMenu(e: MouseEvent): void {
  openMenu(e, [
    { label: t("gitResetSoft"), icon: "undo", onClick: () => void onCommitCmd("reset-soft") },
    { label: t("gitResetMixed"), icon: "undo", onClick: () => void onCommitCmd("reset-mixed") },
    { label: t("gitResetHard"), icon: "warning", onClick: () => void onCommitCmd("reset-hard") },
    { separator: true },
    { label: t("gitRevert"), icon: "undo", onClick: () => void onCommitCmd("revert") },
    { label: t("gitCherryPick"), icon: "check", onClick: () => void onCommitCmd("cherry-pick") },
  ]);
}

/** 非仓库空态的「克隆仓库…」：复用全局克隆弹窗，完成后重探面板。 */
function openClone(): void {
  openCloneDialog({
    kind: "git",
    dir: props.dir,
    key: wb.key,
    onDone: () => {
      void reload();
    },
  });
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

/** 切换标签区块内部 tab；进「版本」tab 时懒加载 GitHub Releases。 */
function showTagTab(t: "tags" | "releases"): void {
  tagTab.value = t;
  if (t === "releases") void loadReleases();
}

/** 拉取 GitHub Releases 列表（最近 20 条；非 GitHub / 无凭据时展示 skipped 原因）。 */
async function loadReleases(): Promise<void> {
  const repo = panel.value?.repo;
  if (!repo || releasesLoading.value) return;
  releasesLoading.value = true;
  try {
    const r = await api.gitGhReleases(repo);
    releases.value = r.list;
    releasesSkipped.value = r.skipped ?? "";
  } catch (e) {
    releasesSkipped.value = (e as Error).message;
  } finally {
    releasesLoading.value = false;
  }
}

/** 独立创建 Release：为已有标签补建版本（不新建标签、不推送）。 */
async function createReleaseOnly(): Promise<void> {
  const tag = relTag.value.trim();
  const notes = relNotes.value.trim();
  if (!tag || !notes) {
    toast("error", t("gitReleaseRequireMsg"));
    return;
  }
  const repo = panel.value?.repo;
  if (!repo) {
    toast("error", t("gitNotRepo"));
    return;
  }
  busy.op = true;
  try {
    const r = await api.gitGhRelease(repo, tag, tag, notes);
    if (r.url) {
      toast("ok", t("gitReleaseCreated", { url: r.url }));
      relNotes.value = "";
      await loadReleases();
    } else {
      toast("info", t("gitReleaseGhSkip", { reason: r.skipped ?? "" }));
    }
  } catch (e) {
    toast("error", (e as Error).message);
  } finally {
    busy.op = false;
  }
}

/** 在浏览器中打开 Release 页面。 */
function openReleaseUrl(url: string): void {
  if (url) window.open(url, "_blank", "noopener");
}

/**
 * 发布远程 release：创建附注标签（强制需要说明）+ 推送到 origin + GitHub 上建 Release。
 * 全程幂等：标签已存在则跳过创建（重复发布不再报 already exists）；GitHub Release
 * 已存在则复用其地址；origin 非 GitHub / 无凭据时提示但不视为失败。
 */
async function publishRelease(): Promise<void> {
  const name = releaseName.value.trim();
  const msg = releaseMsg.value.trim();
  const target = releaseTarget.value.trim();
  if (!name || !msg) {
    toast("error", t("gitReleaseRequireMsg"));
    return;
  }
  const repo = panel.value?.repo;
  if (!repo) {
    toast("error", t("gitNotRepo"));
    return;
  }
  busy.op = true;
  try {
    // 1. 标签：本地不存在才创建
    const exist = await git(["rev-parse", "-q", "--verify", `refs/tags/${name}`]);
    if (exist.code !== 0) {
      const args = ["tag", "-a", name, "-m", msg];
      if (target) args.push(target);
      await runOrThrow(args);
    }
    // 2. 推送标签（远程已有时输出 Everything up-to-date，退出码 0，不算失败）
    await runOrThrow(["push", "origin", name]);
    // 3. GitHub 仓库：幂等补建 GitHub Release
    let ghUrl = "";
    try {
      const rel = await api.gitGhRelease(repo, name, name, msg);
      if (rel.url) ghUrl = rel.url;
      else if (rel.skipped) toast("info", t("gitReleaseGhSkip", { reason: rel.skipped }));
    } catch (e) {
      toast("info", t("gitReleaseGhSkip", { reason: (e as Error).message }));
    }
    toast("ok", ghUrl ? `${t("gitReleased", { name })}  ${ghUrl}` : t("gitReleased", { name }));
    releaseOpen.value = false;
    if (tagTab.value === "releases") void loadReleases();
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

/**
 * 打开账号管理（Git 类型）。
 *
 * 预填当前仓库的 origin 地址作为「仓库地址」——它就是匹配账号的键，用户不必手抄；
 * 取不到（无 origin / 命令失败）时只预填类型，账号仍可只按主机生效。
 */
async function openAccounts(): Promise<void> {
  const repo = panel.value?.repo ?? "";
  let url = "";
  if (repo) {
    const r = await api.gitRun(repo, ["remote", "get-url", "origin"]).catch(() => null);
    if (r && r.code === 0) url = (r.stdout.split(/\r?\n/)[0] ?? "").trim();
  }
  openAccountDialog({ kind: "git", url });
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

<style src="./panel-shared.css"></style>
<style scoped>
/* 与 SvnPanel 同构的规则已抽取到 ./panel-shared.css（fw-gp-* / fw-svn-* 双前缀共享）；
   本块只保留 Git 面板独有的规则。颜色走 --dsh-* token，浅色主题自动跟随。 */
/* ── 头部状态条（Git 独有：分支 pill 的 detached 态、ahead/behind） ── */
.fw-gp-branch.detached {
  background: color-mix(in srgb, var(--dsh-warn) 18%, transparent);
  border-color: color-mix(in srgb, var(--dsh-warn) 45%, transparent);
  color: var(--dsh-warn);
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
/* 标签区块内 tab（标签/版本）：分段控件 */
.fw-gp-sectabs {
  display: flex;
  gap: 2px;
  margin: 0 0 8px;
  padding: 2px;
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 6px;
  background: var(--dsh-bg, #0d1117);
  user-select: none;
}
.fw-gp-sectab {
  flex: 1 1 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  height: 22px;
  padding: 0 8px;
  border: none;
  border-radius: var(--dsh-radius-sm, 4px);
  background: transparent;
  color: var(--dsh-fg-weak, #8b949e);
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.12s, color 0.12s;
}
.fw-gp-sectab:hover {
  background: var(--dsh-hover, rgba(255, 255, 255, 0.08));
  color: var(--dsh-fg, #c9d1d9);
}
.fw-gp-sectab.active {
  color: var(--dsh-accent, #3fb950);
  background: var(--dsh-accent-weak, rgba(63, 185, 80, 0.15));
  font-weight: 600;
}
.fw-gp-sectab-n {
  min-width: 16px;
  text-align: center;
  padding: 0 4px;
  border-radius: 8px;
  background: var(--dsh-hover, rgba(255, 255, 255, 0.1));
  font-variant-numeric: tabular-nums;
}
/* 历史页的列表由内部图谱组件自己滚动，容器不再滚 */
.fw-gp-list { flex: 0 0 44%; }
.fw-gp-list.fw-gp-list-col { overflow: hidden; }
.fw-gp-detail {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  /* 不要 overflow:hidden —— 否则内部“提交操作”下拉（teleported=false 留在 .fw-gp-detail 内）
     向右展开时会被本容器裁切（右侧图标菜单右侧被压盖）。详情体 .fw-gp-scroll 自带 overflow:auto，
     去掉这里不影响滚动，反而让浮层能浮在左侧列表之上。 */
  position: relative;
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
/* 状态徽标：色底 18% + 同色文字（token 化，浅色主题自动跟随） */
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
.fw-gp-st.st-modified { color: var(--dsh-warn); background: color-mix(in srgb, var(--dsh-warn) 18%, transparent); }
.fw-gp-st.st-added { color: var(--dsh-success); background: color-mix(in srgb, var(--dsh-success) 18%, transparent); }
.fw-gp-st.st-untracked { color: var(--dsh-success); background: color-mix(in srgb, var(--dsh-success) 12%, transparent); }
.fw-gp-st.st-deleted { color: var(--dsh-danger); background: color-mix(in srgb, var(--dsh-danger) 18%, transparent); }
.fw-gp-st.st-branch,
.fw-gp-st.st-tag,
.fw-gp-st.st-remote,
.fw-gp-st.st-stash { background: transparent; }
.fw-gp-st.st-branch { color: var(--dsh-info, #79c0ff); }
.fw-gp-st.st-tag { color: var(--dsh-warn); }
.fw-gp-st.st-remote { color: var(--dsh-purple); }
.fw-gp-st.st-stash { color: var(--dsh-fg-weak, #8b949e); }
.fw-gp-cur { color: var(--dsh-accent, #238636); font-size: calc(11px * var(--dsh-fs-scale, 1)); }
.fw-gp-mini.danger:hover { color: var(--dsh-danger); }
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
.fw-gp-num .add { color: var(--dsh-success); }
.fw-gp-num .del { color: var(--dsh-danger); }
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
/* ── 详情面板 ─────────────────────────────────────────────────── */
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
.fw-gp-blame-hash { flex: 0 0 auto; color: var(--dsh-info, #79c0ff); }
.fw-gp-blame-author { flex: 0 0 84px; overflow: hidden; text-overflow: ellipsis; color: var(--dsh-warn); }
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
.fw-gp-refchip.rf-tag { background: color-mix(in srgb, var(--dsh-warn) 22%, transparent); color: var(--dsh-warn); }
.fw-gp-refchip.rf-remote { background: color-mix(in srgb, var(--dsh-purple) 20%, transparent); color: var(--dsh-purple); }
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
/* 提交描述最多显示 3 行，超出部分滚动查看 */
.fw-gp-cbody-clamp {
  max-height: calc(3 * 1.5 * calc(12px * var(--dsh-fs-scale, 1)));
  overflow-y: auto;
  overscroll-behavior: contain;
}
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
  color: var(--dsh-purple);
  border-color: color-mix(in srgb, var(--dsh-purple) 50%, transparent);
  background: color-mix(in srgb, var(--dsh-purple) 14%, transparent);
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
.fw-gp-cli-line.kind-err { color: var(--dsh-danger); }
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
