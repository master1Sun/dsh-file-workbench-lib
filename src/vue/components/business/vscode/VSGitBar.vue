<template>
  <!-- 非 git/svn 仓库 / 无项目目录：整个栏不渲染 -->
  <div
    v-if="inRepo"
    class="vs-gitbar"
    :style="expanded && barH > 0 ? { height: barH + 'px', maxHeight: 'none' } : undefined"
  >
    <!-- 顶边拖拽把手：展开时可上下拖动调整高度（持久化到 prefs.vsGitBarH） -->
    <div v-if="expanded" class="vs-gitbar-resize" title="拖动调整高度" @mousedown.prevent="startResize"></div>
    <!-- 头部：折叠 + 分支/版本 + 标题 + 数量 + 刷新 -->
    <div class="vs-gitbar-head">
      <button class="vs-gitbar-act" :title="expanded ? t('vsGitCollapse') : t('vsGitExpand')" @click="expanded = !expanded">
        <icon :name="expanded ? 'chevronDown' : 'chevronUp'" :size="12" />
      </button>
      <icon :name="kind === 'svn' ? 'clock' : 'git'" :size="12" />
      <span class="vs-gitbar-branch" :class="{ detached: kind === 'svn' }" :title="repoRoot">{{ branchLabel }}</span>
      <span class="vs-gitbar-title">{{ kind === "svn" ? "SVN · " + t("vsGitHistory") : t("vsGitHistory") }}</span>
      <span v-if="commits.length" class="vs-gitbar-count">{{ commits.length }}</span>
      <span class="vs-gitbar-fill"></span>
      <button class="vs-gitbar-act" :title="t('vsGitRefresh')" @click="refresh">
        <icon name="refresh" :size="12" :class="{ spin: loading }" />
      </button>
    </div>
    <!-- 提交列表：git 泳道曲线 / svn 线性圆点 + 标题 + 作者 + 行尾详情按钮；
         点击行（或详情按钮）在该行下方内联展开变更文件列表 -->
    <div v-show="expanded" class="vs-gitbar-list">
      <div v-if="loading && !rows.length" class="vs-gitbar-empty">{{ t("vsLoading") }}</div>
      <div v-else-if="!rows.length" class="vs-gitbar-empty">{{ t("gitLogEmpty") }}</div>
      <template v-else>
        <template v-for="r in rows" :key="r.commit.hash">
          <div class="vs-gitbar-row" :class="{ open: expandedHash === r.commit.hash }" :title="r.commit.subject" @click="toggleDetail(r.commit)">
            <!-- git：泳道曲线；svn：单圆点 -->
            <span v-if="r.graph" class="vs-gitbar-lanes" :style="{ width: `${Math.min(r.graph.width, MAX_LANES) * LANE_W}px` }">
              <svg :width="Math.min(r.graph.width, MAX_LANES) * LANE_W" :height="ROW_H" aria-hidden="true">
                <line
                  v-for="(l, i) in r.graph.through.filter((x) => x.lane < MAX_LANES)"
                  :key="'t' + i"
                  :x1="x(l.lane)" :y1="0" :x2="x(l.lane)" :y2="ROW_H"
                  :stroke="laneColorOf(l.color)"
                />
                <line
                  v-if="r.graph.topLine && r.graph.lane < MAX_LANES"
                  :x1="x(r.graph.lane)" :y1="0" :x2="x(r.graph.lane)" :y2="ROW_H / 2"
                  :stroke="laneColorOf(r.graph.laneColor)"
                />
                <template v-for="(b, i) in r.graph.bends.filter((b) => b.from < MAX_LANES && b.to < MAX_LANES)" :key="'b' + i">
                  <line
                    v-if="b.from === b.to"
                    :x1="x(b.from)" :y1="ROW_H / 2" :x2="x(b.to)" :y2="ROW_H"
                    :stroke="laneColorOf(b.color)"
                  />
                  <path v-else :d="bendPath(b.from, b.to)" fill="none" :stroke="laneColorOf(b.color)" />
                </template>
                <circle
                  v-if="r.graph.lane < MAX_LANES"
                  :cx="x(r.graph.lane)" :cy="ROW_H / 2" :r="isHead(r.graph) ? 4 : 3"
                  :fill="laneColorOf(r.graph.laneColor)"
                  :stroke="isHead(r.graph) ? 'var(--dsh-bg, #0d1117)' : 'none'"
                  stroke-width="1.5"
                />
              </svg>
            </span>
            <span v-else class="vs-gitbar-dot" aria-hidden="true"></span>
            <span class="vs-gitbar-subject">{{ r.commit.subject }}</span>
            <span v-if="r.commit.refs.length" class="vs-gitbar-refs">
              <span v-for="rf in r.commit.refs" :key="rf.kind + rf.label" class="vs-gitbar-ref" :class="'rf-' + rf.kind">{{ rf.label }}</span>
            </span>
            <span class="vs-gitbar-meta">{{ r.commit.author }}</span>
          </div>
          <!-- 内联详情：变更文件列表（状态字母 + 文件名 + 所在目录） -->
          <div v-if="expandedHash === r.commit.hash" class="vs-gitbar-files">
            <div v-if="statusLoading[r.commit.hash]" class="vs-gitbar-empty">{{ t("vsLoading") }}</div>
            <template v-else>
              <div v-if="!statusOf(r.commit.hash).length" class="vs-gitbar-empty">{{ t("gitCommitNoFiles") }}</div>
              <div v-for="(f, i) in statusOf(r.commit.hash)" :key="i" class="vs-gitbar-file" :title="f.path">
                <span class="st" :class="'s-' + f.status.toLowerCase()">{{ f.status }}</span>
                <icon name="fileText" :size="11" />
                <span class="name">{{ basename(f.path) }}</span>
                <span class="dir">{{ dirnameOf(f.path) }}</span>
                <!-- 文件详情按钮：在顶部标签栏新开「变更详情」窗口展示该文件在该提交中的 diff -->
                <button class="vs-gitbar-act vs-gitbar-file-open" :title="t('vsGitFileDiff')" @click.stop="openFileDetail(r.commit, f)">
                  <icon name="fileOut" :size="11" />
                </button>
              </div>
            </template>
          </div>
        </template>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * 项目目录树底部的提交记录栏（只占编辑器左栏，编辑区不受影响）。
 *
 * - **git 与 svn 同理**：先探测 git（`/git/panel`），不是 git 仓库再探测 svn
 *   （`/svn/info`）；两个后端都能用就优先 git。
 * - **非版本库时整个栏不渲染**（git/svn 均未命中、或 CLI 不可用）。
 * - 列表：git 画泳道曲线（buildGraph：gitk/TortoiseGit 同款算法，SVG 圆点 + 贯穿线 +
 *   合并扇形），svn 是线性历史画单圆点；点击提交行（或行尾详情按钮）**在该行下方
 *   内联展开**变更文件列表（状态字母 + 文件名 + 所在目录），首次展开按需加载并缓存。
 *
 * 项目目录来自注入的实例 store；目录切换时自动重新探测。
 */
import { computed, inject, reactive, ref, watch } from "vue";
import {
  LANE_W,
  LOG_FORMAT,
  buildGraph,
  laneColorOf,
  parseLog,
  type GitCommit,
  type GraphRow,
} from "../../../composables/domain/gitGraph";
import { VS_STORE_KEY, defaultVSCodeStore, type VSCodeStore } from "../../../stores/vscode";
import { isBrowsablePath } from "../../../stores/explorer";
import * as api from "../../../composables/core/useApi";
import { prefs, savePrefs } from "../../../composables/core/settings";
import { t } from "../../../composables/core/i18n";
import Icon from "../../common/Icon.vue";

const store: VSCodeStore = inject(VS_STORE_KEY) ?? defaultVSCodeStore();

/** 探测结果：git / svn 仓库内才渲染本栏。 */
const kind = ref<"git" | "svn" | null>(null);
const inRepo = computed(() => kind.value !== null);
/** 版本库根（命令的工作目录）。 */
const repoRoot = ref("");
/** 头部胶囊文本：git = 分支名；svn = 当前版本号 rN。 */
const branchLabel = ref("");
/** 提交列表（新的在前，最多 30 条）。 */
const commits = ref<GitCommit[]>([]);
const loading = ref(false);
/** 列表展开/折叠（**默认折叠**，只有用户手动点击头部按钮才展开）。 */
const expanded = ref(false);

/** 泳道 SVG 行高（与样式里的行高保持一致，SVG 坐标直接用它换算）。 */
const ROW_H = 24;
/** 最多绘制多少列泳道（超出不画线，避免窄栏被挤没）。 */
const MAX_LANES = 6;
/** 泳道中心 x 坐标。 */
function x(lane: number): number {
  return lane * LANE_W + LANE_W / 2;
}
/** 跨泳道连线的弧：从圆点下方拐到目标泳道底部。 */
function bendPath(from: number, to: number): string {
  const y1 = ROW_H / 2;
  const c = ROW_H * 0.82;
  return `M ${x(from)} ${y1} C ${x(from)} ${c}, ${x(to)} ${c}, ${x(to)} ${ROW_H}`;
}
function isHead(r: GraphRow): boolean {
  return r.commit.refs.some((rf) => rf.kind === "head");
}

/** 列表行模型：git 带泳道布局，svn 只有单圆点。 */
interface DisplayRow {
  commit: GitCommit;
  /** git 的泳道布局；svn 为 undefined（模板画单圆点）。 */
  graph?: GraphRow;
}
const rows = computed<DisplayRow[]>(() => {
  if (kind.value === "git") return buildGraph(commits.value).map((g) => ({ commit: g.commit, graph: g }));
  return commits.value.map((c) => ({ commit: c }));
});

/* ── 内联变更文件详情 ──────────────────────────────────────────── */

/** 当前展开详情的提交（同一时间至多一个；再次点击收起）。 */
const expandedHash = ref("");
/** 变更文件缓存（键 = 提交 hash / svn 的 rN）。 */
interface StatusEntry {
  /** 状态字母：A/M/D/R/T/…（rename 取首字母）。 */
  status: string;
  path: string;
}
const statuses = reactive<Record<string, StatusEntry[]>>({});
const statusLoading = reactive<Record<string, boolean>>({});

function statusOf(hash: string): StatusEntry[] {
  return statuses[hash] ?? [];
}

/** 行路径 → 文件名。 */
function basename(p: string): string {
  const i = Math.max(p.lastIndexOf("/"), p.lastIndexOf("\\"));
  return i >= 0 ? p.slice(i + 1) : p;
}
/** 行路径 → 所在目录（根下为空）。 */
function dirnameOf(p: string): string {
  const i = Math.max(p.lastIndexOf("/"), p.lastIndexOf("\\"));
  return i >= 0 ? p.slice(0, i) : "";
}

/** 点击行 / 详情按钮：切换该提交的内联变更文件列表。 */
function toggleDetail(c: GitCommit): void {
  if (expandedHash.value === c.hash) {
    expandedHash.value = "";
    return;
  }
  expandedHash.value = c.hash;
  void loadStatus(c);
}

/* ── 文件详情（diff）：右侧编辑区展示 ─────────────────────────── */

const emit = defineEmits<{ (e: "open-diff", payload: { title: string; lines: string[] }): void }>();

/** 点击文件行的详情按钮：拉取该文件在该提交中的 diff 并交给右栏展示。 */
async function openFileDetail(c: GitCommit, f: StatusEntry): Promise<void> {
  let lines: string[] = [];
  try {
    if (kind.value === "git") {
      // 单文件 diff：`show --format=` 抑制提交头，只留补丁。
      const r = await api.gitRun(repoRoot.value, ["show", "--no-color", "--format=", c.hash, "--", f.path]);
      lines = r.code === 0 && r.stdout.trim() ? r.stdout.split("\n") : [];
    } else {
      lines = await svnFileDiff(c.hash, f.path);
    }
  } catch {
    lines = [];
  }
  emit("open-diff", { title: `${basename(f.path)} · ${c.short}`, lines });
}

/**
 * 取 svn 某版本某文件（仓库绝对路径，如 /trunk/src/a.ts）的 diff。
 * 复用 SvnPanel 的成熟方案：`svn diff -c N -- ^/path`（peg 语法，与检出深度无关）。
 * 新增文件的 diff 显示整文件为新增；删除文件在该 revision 已不可见，diff 为空
 * （与 SvnPanel 行为一致）。
 */
async function svnFileDiff(rev: string, path: string): Promise<string[]> {
  const num = rev.replace(/^r/, "");
  const r = await api.svnRun(repoRoot.value, ["diff", "-c", num, "--", "^" + path]);
  return r.code === 0 && r.stdout.trim() ? r.stdout.split("\n") : [];
}

/** 拉取一条 git 提交的变更文件（`diff-tree --name-status`），结果缓存。 */
async function loadGitStatus(c: GitCommit): Promise<void> {
  if (statuses[c.hash] || statusLoading[c.hash]) return;
  statusLoading[c.hash] = true;
  try {
    const r = await api.gitRun(repoRoot.value, ["diff-tree", "--no-commit-id", "--name-status", "-r", "--root", c.hash]);
    statuses[c.hash] = r.code === 0 ? parseNameStatus(r.stdout) : [];
  } catch {
    statuses[c.hash] = [];
  } finally {
    statusLoading[c.hash] = false;
  }
}

/** 解析 `diff-tree --name-status` 输出（rename 形如 `R100\told\tnew`，取首字母与最终路径）。 */
function parseNameStatus(out: string): StatusEntry[] {
  const list: StatusEntry[] = [];
  for (const line of out.split("\n")) {
    if (!line.trim()) continue;
    const parts = line.split("\t");
    if (parts.length < 2) continue;
    list.push({ status: parts[0][0] ?? "?", path: parts[parts.length - 1] });
  }
  return list;
}

/**
 * 解析 `svn log --xml -v` 输出（语言无关），并把变更路径直接写入 statuses 缓存
 * （svn 无需再按版本二次请求）。与 SvnPanel 的 `parseLogXml` 同款算法。
 *
 * 旧版用 `svn log -v` 纯文本按形状解析，在 zh_CN 下因「改变的路径:」头与分隔线
 * 形态不稳而经常漏解析，导致展开提交后显示「无文件变更」、点击文件 diff 空白。
 * 改用 XML 后彻底消除语言/格式依赖。
 */
function parseSvnLogXml(xml: string): GitCommit[] {
  const list: GitCommit[] = [];
  try {
    const doc = new DOMParser().parseFromString(xml, "application/xml");
    doc.querySelectorAll("logentry").forEach((e) => {
      const paths: StatusEntry[] = [];
      e.querySelectorAll("paths > path").forEach((p) => {
        const action = p.getAttribute("action");
        const text = p.textContent;
        if (text) paths.push({ status: action ?? "", path: text });
      });
      const rev = "r" + (e.getAttribute("revision") ?? "");
      const author = e.querySelector("author")?.textContent ?? "—";
      const date = e.querySelector("date")?.textContent ?? "";
      const msg = e.querySelector("msg")?.textContent ?? "";
      // 顺带填 statuses 缓存（svn 的变更路径随日志一次给出）。
      statuses[rev] = paths;
      list.push({
        hash: rev,
        short: rev,
        author,
        email: "",
        ts: date ? Math.floor(new Date(date).getTime() / 1000) : 0,
        date: date ? new Date(date).toLocaleString() : "",
        subject: (msg.split("\n")[0] ?? "").trim() || rev,
        parents: [],
        refs: [],
      });
    });
  } catch {
    /* 解析失败返回空（与 git 分支同处理） */
  }
  return list;
}

/** 提交拉取序号：目录快速切换时丢弃过期响应，防止旧仓库列表覆盖新仓库。 */
let loadSeq = 0;

/** 拉取提交列表（已探测到后端时按 kind 分发；折叠状态下不调用）。 */
async function loadCommits(): Promise<void> {
  if (!kind.value || !repoRoot.value) return;
  const seq = ++loadSeq;
  const k = kind.value;
  const root = repoRoot.value;
  loading.value = true;
  try {
    if (k === "git") {
      const r = await api.gitRun(root, ["log", "--max-count=30", `--pretty=format:${LOG_FORMAT}`]);
      if (seq !== loadSeq) return;
      commits.value = r.code === 0 ? parseLog(r.stdout) : [];
    } else {
      // svn log --xml -v 一条命令同时给出提交与变更路径（parseSvnLogXml 顺带填 statuses 缓存）。
      const r = await api.svnRun(root, ["log", "--xml", "-v", "-l", "30"]);
      if (seq !== loadSeq) return;
      commits.value = r.code === 0 ? parseSvnLogXml(r.stdout) : [];
    }
  } catch {
    if (seq !== loadSeq) return;
    commits.value = [];
  } finally {
    if (seq === loadSeq) loading.value = false;
  }
}

/* ── 顶边拖拽调高（高度持久化到 prefs.vsGitBarH，多实例共享同一偏好） ── */

/** 拖拽中的临时高度；null = 未在拖拽。 */
const dragH = ref<number | null>(null);
/** 生效高度：拖拽中用临时值，否则用持久化值（0 = 未调过，走默认 max-height 260）。 */
const barH = computed(() => dragH.value ?? (prefs.vsGitBarH > 0 ? prefs.vsGitBarH : 0));

const RESIZE_MIN = 96;
const RESIZE_MAX = 600;

/** 顶边把手按下：监听 window 移动/抬起，向上拖 = 变高。 */
function startResize(e: MouseEvent): void {
  const startY = e.clientY;
  const barEl = (e.currentTarget as HTMLElement).parentElement;
  const startH = barEl?.offsetHeight || 260;
  const onMove = (ev: MouseEvent): void => {
    dragH.value = Math.min(RESIZE_MAX, Math.max(RESIZE_MIN, Math.round(startH + (startY - ev.clientY))));
  };
  const onUp = (): void => {
    window.removeEventListener("mousemove", onMove);
    window.removeEventListener("mouseup", onUp);
    if (dragH.value != null) {
      prefs.vsGitBarH = dragH.value; // 落盘，下次打开沿用
      savePrefs();
    }
    dragH.value = null;
  };
  window.addEventListener("mousemove", onMove);
  window.addEventListener("mouseup", onUp);
}

/** 探测序号：并发探测（挂载立即探测 + 外部请求切换目录）时丢弃过期响应。 */
let reloadSeq = 0;

/** 探测仓库类型（git 优先，svn 兜底）；**不拉取提交列表**——列表在首次展开时才请求。 */
async function reload(): Promise<void> {
  const seq = ++reloadSeq;
  const dir = store.state.projectDir;
  // 回收站虚拟视图等「占位路径」不是绝对路径，跳过以免必然失败的请求。
  if (!dir || !isBrowsablePath(dir)) {
    kind.value = null;
    commits.value = [];
    return;
  }
  loading.value = true;
  expandedHash.value = "";
  // 切换仓库：旧提交列表与缓存立即失效，避免展示上个项目的提交 / 错配的变更文件。
  commits.value = [];
  for (const k of Object.keys(statuses)) delete statuses[k];
  try {
    // ① git 优先
    const p = await api.gitPanel(dir);
    if (seq !== reloadSeq) return; // 已有更新目录的探测在途：丢弃过期结果
    if (p.inRepo && p.repo) {
      kind.value = "git";
      repoRoot.value = p.repo;
      branchLabel.value = p.branch || "HEAD";
    } else {
      // ② svn 兜底
      const s = await api.svnInfo(dir);
      if (seq !== reloadSeq) return;
      if (s.inRepo && s.root && s.svnAvailable) {
        kind.value = "svn";
        repoRoot.value = s.root;
        branchLabel.value = s.revision ? "r" + s.revision : "svn";
      } else {
        kind.value = null;
        commits.value = [];
      }
    }
  } catch {
    // 探测失败（CLI 未安装等）按非版本库处理：整栏隐藏。
    if (seq !== reloadSeq) return;
    kind.value = null;
    commits.value = [];
  } finally {
    if (seq === reloadSeq) loading.value = false;
  }
  // 已展开（用户先展开再切目录等场景）→ 立即补拉列表。
  if (kind.value && expanded.value) void loadCommits();
}

/** 按后端类型拉取变更文件（git 按需请求；svn 已在解析时缓存）。 */
async function loadStatus(c: GitCommit): Promise<void> {
  if (kind.value === "git") return loadGitStatus(c);
  // svn：statuses 已在 parseSvnLogXml 填好，无需请求。
}

// 项目目录变化（切换项目 / 首次就绪）→ 重新探测，列表**回到默认折叠**。projectDir 为 null（空白窗口）时同样隐藏。
watch(
  () => store.state.projectDir,
  () => {
    expanded.value = false;
    void reload();
  },
  { immediate: true },
);

// 手动展开且列表为空 → 首次按需拉取提交列表。
watch(expanded, (v) => {
  if (v && kind.value && !commits.value.length) void loadCommits();
});

/** 头部刷新：重新探测 + 拉取提交列表。 */
async function refresh(): Promise<void> {
  // 用户点的是「刷新」→ 必须重新问宿主，不能吃 30s 读缓存（否则点了没反应）。
  api.invalidateReadCache("git");
  api.invalidateReadCache("svn");
  await reload();
  if (kind.value) void loadCommits();
}
</script>

<style scoped>
/* ── 左栏底部提交记录栏 ────────────────────────────────────────── */
.vs-gitbar {
  flex: 0 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 260px;
  border-top: 1px solid var(--dsh-border, #30363d);
  background: var(--dsh-bg2, #161b22);
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  min-height: 0;
}
/* 顶边拖拽把手：骑在边框上的细条，悬停整行变高亮提示可拖 */
.vs-gitbar-resize {
  position: absolute;
  top: -3px;
  left: 0;
  right: 0;
  height: 6px;
  cursor: row-resize;
  z-index: 3;
}
.vs-gitbar-resize:hover {
  background: color-mix(in srgb, var(--dsh-accent, #58a6ff) 35%, transparent);
}
.vs-gitbar-head {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 3px 8px;
  color: var(--dsh-fg-weak, #8b949e);
  user-select: none;
}
.vs-gitbar-branch {
  flex: 0 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 200px;
  padding: 0 7px;
  height: 18px;
  line-height: 17px;
  border-radius: 9px;
  font-weight: 600;
  color: var(--dsh-accent, #58a6ff);
  background: color-mix(in srgb, var(--dsh-accent, #58a6ff) 15%, transparent);
  border: 1px solid color-mix(in srgb, var(--dsh-accent, #58a6ff) 40%, transparent);
}
.vs-gitbar-branch.detached { color: #e3b341; background: color-mix(in srgb, #d29922 15%, transparent); border-color: color-mix(in srgb, #d29922 40%, transparent); }
.vs-gitbar-title { flex: 0 0 auto; }
.vs-gitbar-count {
  flex: 0 0 auto;
  min-width: 16px;
  padding: 0 5px;
  height: 15px;
  line-height: 15px;
  text-align: center;
  border-radius: 8px;
  background: var(--dsh-hover, rgba(110, 118, 129, 0.3));
  font-size: calc(10px * var(--dsh-fs-scale, 1));
}
.vs-gitbar-fill { flex: 1 1 auto; }
.vs-gitbar-act {
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
.vs-gitbar-act:hover { background: var(--dsh-border, #30363d); color: var(--dsh-fg, #c9d1d9); }
.vs-gitbar-act .spin { animation: vs-gitbar-spin 0.8s linear infinite; }
@keyframes vs-gitbar-spin { to { transform: rotate(360deg); } }

.vs-gitbar-list {
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden; /* 行内容按省略号收缩，绝不出现横向滚动条 */
  padding: 0 4px 4px;
}
.vs-gitbar-empty { padding: 8px 10px; color: var(--dsh-fg-weak, #8b949e); }
.vs-gitbar-row {
  display: flex;
  align-items: center;
  gap: 6px;
  min-height: 24px;
  padding: 0 4px 0 2px;
  border-radius: 4px;
  cursor: pointer;
  color: var(--dsh-fg, #c9d1d9);
}
.vs-gitbar-row:hover { background: var(--dsh-hover, rgba(48, 54, 61, 0.45)); }
.vs-gitbar-row.open { background: var(--dsh-hover, rgba(48, 54, 61, 0.6)); }
.vs-gitbar-lanes {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  line-height: 0;
}
.vs-gitbar-lanes svg { stroke-width: 2; stroke-linecap: round; }
/* svn 线性历史的单圆点 */
.vs-gitbar-dot {
  flex: 0 0 auto;
  width: 8px;
  height: 8px;
  margin: 0 8px;
  border-radius: 50%;
  background: var(--dsh-accent, #58a6ff);
}
.vs-gitbar-subject {
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.vs-gitbar-refs { display: inline-flex; align-items: center; gap: 4px; flex: 0 1 auto; min-width: 0; overflow: hidden; }
.vs-gitbar-ref {
  padding: 0 5px;
  height: 15px;
  line-height: 14px;
  border-radius: 7px;
  font-size: calc(10px * var(--dsh-fs-scale, 1));
  background: var(--dsh-hover, rgba(110, 118, 129, 0.3));
  color: var(--dsh-fg, #c9d1d9);
  max-width: 90px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.vs-gitbar-ref.rf-head { background: color-mix(in srgb, var(--dsh-accent, #58a6ff) 22%, transparent); color: var(--dsh-accent, #58a6ff); }
.vs-gitbar-ref.rf-tag { background: color-mix(in srgb, #d29922 20%, transparent); color: #e3b341; }
.vs-gitbar-ref.rf-remote { background: color-mix(in srgb, #bc8cff 18%, transparent); color: #d2a8ff; }
.vs-gitbar-meta {
  flex: 0 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--dsh-fg-weak, #8b949e);
  font-size: calc(11px * var(--dsh-fs-scale, 1));
}
/* 文件行的「右侧查看」按钮：悬停行时显形 */
.vs-gitbar-file-open { opacity: 0; }
.vs-gitbar-file:hover .vs-gitbar-file-open { opacity: 1; }

/* ── 内联变更文件列表 ──────────────────────────────────────────── */
.vs-gitbar-files {
  padding: 2px 0 4px 18px;
  border-left: 2px solid color-mix(in srgb, var(--dsh-accent, #58a6ff) 45%, transparent);
  margin: 0 0 4px 10px;
}
.vs-gitbar-file {
  display: flex;
  align-items: center;
  gap: 6px;
  min-height: 20px;
  padding: 0 6px;
  border-radius: 4px;
  color: var(--dsh-fg, #c9d1d9);
}
.vs-gitbar-file:hover { background: var(--dsh-hover, rgba(48, 54, 61, 0.35)); }
.vs-gitbar-file .st {
  flex: 0 0 auto;
  width: 14px;
  text-align: center;
  font-weight: 700;
  font-size: calc(10px * var(--dsh-fs-scale, 1));
  font-family: var(--dsh-mono, ui-monospace, sfmono-regular, consolas, monospace);
}
.vs-gitbar-file .st.s-a { color: #3fb950; }
.vs-gitbar-file .st.s-m { color: #e3b341; }
.vs-gitbar-file .st.s-d { color: var(--dsh-danger, #f85149); }
.vs-gitbar-file .st.s-r, .vs-gitbar-file .st.s-t { color: #58a6ff; }
.vs-gitbar-file .name {
  flex: 0 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.vs-gitbar-file .dir {
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: right;
  color: var(--dsh-fg-weak, #8b949e);
  font-size: calc(11px * var(--dsh-fs-scale, 1));
}
</style>
