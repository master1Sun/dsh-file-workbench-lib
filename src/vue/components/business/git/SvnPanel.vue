<!--
  SVN 管理面板（直接调用 svn CLI，不依赖 TortoiseSVN GUI）。

  布局与 GitPanel 保持一致：顶部状态条（版本 pill + 仓库地址 + 操作）+
  左侧导航页签（本地修改 / 提交日志 / 命令输出）+ 右侧内容区。
    - 本地修改：svn status 列表（可勾选）+ 右侧提交框，支持 diff/追溯/加入/还原/解决冲突；
    - 提交日志：svn log --xml 内嵌列表（懒加载）；
    - 命令输出：每条命令的 stdout/stderr 回显；
    - 非工作副本时内容区显示检出表单；svn CLI 缺失时整面板降级提示。
-->
<template>
  <el-dialog
    :model-value="modelValue"
    :title="t('svnPanelTitle')"
    width="800px"
    align-center
    modal-class="fw-blur-overlay"
    class="fw-svn-dialog"
    :close-on-click-modal="false"
    @update:model-value="$emit('update:modelValue', $event)"
    @open="onOpen"
  >
    <template v-if="info && info.inRepo && info.svnAvailable">
      <div class="fw-svn-shell">
      <!-- ── 顶部状态条 ───────────────────────────────────────────── -->
      <div class="fw-svn-head">
        <span class="fw-svn-revpill" :title="info.revision ? 'r' + info.revision : ''">
          <icon name="svn" :size="13" />
          <b>{{ info.revision ? "r" + info.revision : "—" }}</b>
        </span>
        <span class="fw-svn-url" :title="info.url ?? ''">{{ info.url || t("svnNoUrl") }}</span>
        <span class="fw-svn-repo" :title="info.root ?? ''">{{ t("svnRepo") }}{{ shortRoot }}</span>
        <span class="fw-svn-headacts">
          <el-button size="small" :loading="running" @click="doUpdate">{{ t("svnUpdate") }}</el-button>
          <el-button size="small" :disabled="running" @click="doCleanup">{{ t("svnCleanup") }}</el-button>
          <el-button size="small" @click="showCheckout = true">{{ t("svnCheckout") }}</el-button>
          <el-button size="small" :loading="refreshing" @click="refreshAll" :title="t('svnRefresh')">
            <icon name="refresh" :size="13" />
          </el-button>
          <el-button size="small" :title="t('accTitle')" @click="openAccounts"><icon name="shield" :size="13" /></el-button>
        </span>
      </div>

      <!-- ── 主体：左导航 + 右内容 ─────────────────────────────────── -->
      <div class="fw-svn-body">
        <nav class="fw-svn-rail">
          <button
            v-for="s in SECTIONS"
            :key="s.key"
            class="fw-svn-rail-btn"
            :class="{ active: sec === s.key }"
            @click="onSection(s.key)"
          >
            <icon :name="s.icon" :size="14" />
            <span class="fw-svn-rail-txt">{{ t(s.label) }}</span>
            <span v-if="badgeOf(s.key)" class="fw-svn-rail-badge">{{ badgeOf(s.key) }}</span>
          </button>
          <span class="fw-svn-rail-fill"></span>
          <div v-if="running" class="fw-svn-rail-op"><span class="fw-svn-spin"></span>{{ t("svnRunning") }}</div>
        </nav>

        <section class="fw-svn-content">
          <!-- ══ 本地修改 ══ -->
          <div v-if="sec === 'changes'" class="fw-svn-split">
            <div class="fw-svn-list">
              <div class="fw-svn-groupbar">
                <span class="fw-svn-groupname">{{ t("svnModifiedCount", { n: status.length }) }}</span>
                <label class="fw-svn-selall">
                  <input type="checkbox" :checked="allSelected" @change="toggleAll" />{{ t("svnSelectAll") }}
                </label>
              </div>
              <div v-if="!status.length" class="fw-svn-empty">{{ t("svnNoChanges") }}</div>
              <div v-for="f in status" :key="f.path" class="fw-svn-row" :title="f.path">
                <input type="checkbox" :checked="selected.has(f.path)" @change="toggle(f.path)" />
                <span class="fw-svn-badge" :data-code="f.code.trim() || '·'">{{ f.code.trim() || "·" }}</span>
                <span class="fw-svn-path">
                  <span v-if="dirOf(f.path)" class="fw-svn-dir">{{ dirOf(f.path) }}</span>{{ baseOf(f.path) }}
                </span>
                <span class="fw-svn-stext">{{ f.statusText }}</span>
                <span class="fw-svn-rowacts">
                  <button class="fw-svn-mini" :disabled="running" :title="t('svnDiff')" @click.stop="openDiff(f.path)">
                    <icon name="code" :size="12" />
                  </button>
                  <button class="fw-svn-mini" :disabled="running" :title="t('svnBlame')" @click.stop="openBlame(f.path)">
                    <icon name="activity" :size="12" />
                  </button>
                  <template v-if="f.code.trim() === '?'">
                    <button class="fw-svn-mini" :disabled="running" :title="t('svnAdd')" @click.stop="addFile(f.path)">
                      <icon name="plus" :size="12" />
                    </button>
                    <button class="fw-svn-mini" :disabled="running" :title="t('svnIgnore')" @click.stop="ignoreFile(f.path)">
                      <icon name="eyeOff" :size="12" />
                    </button>
                  </template>
                </span>
              </div>
            </div>

            <!-- 右侧：提交框 + 批量操作 -->
            <div class="fw-svn-detail">
              <div class="fw-svn-detailhead">
                <span class="fw-svn-detailtitle">{{ t("svnCommitBtn") }}</span>
              </div>
              <textarea
                v-model="commitMsg"
                class="fw-svn-msg"
                rows="6"
                :placeholder="t('svnCommitPlaceholder')"
              ></textarea>
              <div class="fw-svn-bulk">
                <button class="fw-svn-btn" :disabled="running || !selected.size" @click="doAdd">{{ t("svnAdd") }}</button>
                <button class="fw-svn-btn" :disabled="running || !selected.size" @click="doRevert">{{ t("svnRevert") }}</button>
                <button class="fw-svn-btn" :disabled="running || !selected.size" @click="doResolve">{{ t("svnResolve") }}</button>
              </div>
              <div class="fw-svn-commit-acts">
                <span class="fw-svn-hint">{{ selected.size ? t("svnCommitSelected", { n: selected.size }) : t("svnCommitAll") }}</span>
                <button class="fw-svn-btn primary" :disabled="running || !commitMsg.trim()" @click="doCommit">{{ t("svnCommitBtn") }}</button>
              </div>
            </div>
          </div>

          <!-- ══ 提交日志（对齐 Git 历史：默认折叠，展开看完整说明 + 变更文件，点文件看该次提交 diff） ══ -->
          <div v-else-if="sec === 'log'" class="fw-svn-loglist">
            <div v-if="!logItems.length" class="fw-svn-empty">{{ logLoading ? t("svnLoading") : t("svnLogEmpty") }}</div>
            <div v-for="e in logItems" :key="e.revision" class="fw-svn-logitem" :class="{ open: logOpen.has(e.revision) }">
              <div class="fw-svn-log-h" :title="t('svnLogToggle')" @click="toggleLog(e.revision)">
                <span class="fw-svn-caret">{{ logOpen.has(e.revision) ? "▾" : "▸" }}</span>
                <span class="fw-svn-log-r">r{{ e.revision }}</span>
                <span class="fw-svn-log-msg1" :title="e.msg">{{ firstLine(e.msg) }}</span>
                <span class="fw-svn-log-meta">
                  <span>{{ e.author }}</span>
                  <span>{{ fmtDate(e.date) }}</span>
                </span>
              </div>
              <template v-if="logOpen.has(e.revision)">
                <pre v-if="e.msg" class="fw-svn-log-msg">{{ e.msg }}</pre>
                <div class="fw-svn-log-cfiles">
                  <span v-if="!e.paths.length" class="fw-svn-empty">{{ t("svnLogNoPaths") }}</span>
                  <div
                    v-for="(p, i) in e.paths"
                    :key="i"
                    class="fw-svn-cfile"
                    :title="t('svnLogOpenDiff')"
                    @click="openRevDiff(e.revision, p)"
                  >
                    <span class="fw-svn-cfile-act" :class="'pa-' + (p.action ?? '')">{{ p.action }}</span>
                    <span class="fw-svn-cfile-path">
                      <span v-if="dirOfLogPath(p.text)" class="fw-svn-cfile-dir">{{ dirOfLogPath(p.text) }}</span>{{ baseOfLogPath(p.text) }}
                    </span>
                  </div>
                </div>
              </template>
            </div>
          </div>

          <!-- ══ 命令输出 ══ -->
          <div v-else class="fw-svn-cli">
            <pre class="fw-svn-cli-body">{{ lastOut || t("svnNoOutput") }}</pre>
          </div>
        </section>
      </div>
      </div>
    </template>

    <!-- 已识别工作副本但缺 svn CLI -->
    <div v-else-if="info && info.inRepo && !info.svnAvailable" class="fw-svn-warn fw-svn-state">
      <icon name="warning" :size="13" />{{ t("svnNoCli") }}
    </div>

    <!-- 非工作副本：检出表单 -->
    <div v-else-if="info && !info.inRepo" class="fw-svn-checkout-form fw-svn-state">
      <p class="fw-svn-tip">{{ t("svnNotRepoTip") }}</p>
      <div class="fw-svn-checkout-row">
        <el-input v-model="coUrl" size="small" class="fw-svn-co-url" :placeholder="t('svnCheckoutUrlPlaceholder')" />
      </div>
      <div class="fw-svn-checkout-row">
        <el-input v-model="coTarget" size="small" class="fw-svn-co-target" :placeholder="t('svnCheckoutTargetPlaceholder')" />
        <el-button size="small" type="primary" :disabled="running || !coUrl.trim() || !coTarget.trim()" @click="doCheckout">{{ t("svnCheckout") }}</el-button>
      </div>
    </div>

    <div v-else class="fw-svn-empty fw-svn-state">{{ t("svnLoading") }}</div>

    <!-- diff 弹窗 -->
    <el-dialog v-model="showDiff" :title="t('svnDiffTitle') + diffFile" width="800px" align-center modal-class="fw-blur-overlay" append-to-body>
      <div class="fw-svn-diffwrap">
        <GitDiffView :lines="diffLines" :empty="t('gitDiffEmpty')" />
      </div>
    </el-dialog>

    <!-- blame 弹窗 -->
    <el-dialog v-model="showBlame" :title="t('svnBlameTitle') + blameFile" width="800px" align-center modal-class="fw-blur-overlay" append-to-body>
      <pre class="fw-svn-blame">{{ blameLines.join("\n") || t("gitDiffEmpty") }}</pre>
    </el-dialog>

    <!-- 检出弹窗 -->
    <el-dialog v-model="showCheckout" :title="t('svnCheckout')" width="560px" align-center modal-class="fw-blur-overlay" append-to-body @open="onCheckoutOpen">
      <div class="fw-svn-co-form">
        <label class="fw-svn-co-label">{{ t("svnCheckoutUrlPlaceholder") }}</label>
        <el-input v-model="coUrl" size="small" />
        <label class="fw-svn-co-label">{{ t("svnCheckoutTargetPlaceholder") }}</label>
        <el-input v-model="coTarget" size="small" />
      </div>
      <template #footer>
        <el-button @click="showCheckout = false">{{ t("cancel") }}</el-button>
        <el-button type="primary" :disabled="running || !coUrl.trim() || !coTarget.trim()" @click="doCheckout">{{ t("svnCheckout") }}</el-button>
      </template>
    </el-dialog>

    <!-- 账号管理对话框已在 main.ts 全局挂载（理由同 GitPanel，避免面板卸载 / 重复实例） -->
  </el-dialog>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import type { CopyKey } from "../../../../shared/locales";
import { useI18n } from "../../../composables/core/i18n";
import { toast } from "../../../stores/workbench";
import * as api from "../../../composables/core/useApi";
import { countSvnUpdateEntries, svnRevisionFromUpdate } from "../../../composables/domain/svn";
import Icon from "../../common/Icon.vue";
import GitDiffView from "./GitDiffView.vue";
import { openAccountDialog } from "../../../stores/accounts";

const props = defineProps<{ modelValue: boolean; dir: string }>();
const { t } = useI18n();

/** 左侧导航页签（与 GitPanel 同构）。 */
type Sec = "changes" | "log" | "output";
const SECTIONS = [
  { key: "changes", icon: "fileText", label: "svnRailChanges" },
  { key: "log", icon: "clock", label: "svnRailLog" },
  { key: "output", icon: "terminal", label: "svnOutput" },
] as const satisfies readonly { key: Sec; icon: string; label: CopyKey }[];
const sec = ref<Sec>("changes");

const info = ref<api.SvnInfo | null>(null);
const status = ref<{ code: string; path: string; statusText: string }[]>([]);
const selected = ref<Set<string>>(new Set());
const commitMsg = ref("");
const running = ref(false);
const refreshing = ref(false);
const lastOut = ref("");

const logItems = ref<{ revision: string; author: string; date: string; msg: string; paths: { action: string | null; text: string | null }[] }[]>([]);
const logLoading = ref(false);
const showDiff = ref(false);
const diffFile = ref("");
const diffLines = ref<string[]>([]);
const showBlame = ref(false);
const blameFile = ref("");
const blameLines = ref<string[]>([]);
const showCheckout = ref(false);
const coUrl = ref("");
const coTarget = ref("");

const shortRoot = computed(() => (info.value?.root ?? props.dir).replace(/\\/g, "/"));
const allSelected = computed(() => status.value.length > 0 && selected.value.size === status.value.length);

/** 页签角标：本地修改数。 */
function badgeOf(key: Sec): string {
  if (key !== "changes") return "";
  return status.value.length ? String(status.value.length) : "";
}

/** 切换页签；首次进入日志页时懒加载。 */
function onSection(key: Sec): void {
  sec.value = key;
  if (key === "log" && !logItems.value.length) void loadLog();
}

function dirOf(p: string): string {
  const i = p.lastIndexOf("/");
  return i < 0 ? "" : p.slice(0, i + 1);
}
function baseOf(p: string): string {
  const i = p.lastIndexOf("/");
  return i < 0 ? p : p.slice(i + 1);
}
function firstLine(s: string): string {
  return s.split("\n")[0] ?? "";
}

/** 打开面板时探测工作副本与 svn 可用性，并加载本地修改。 */
async function onOpen(): Promise<void> {
  info.value = null;
  status.value = [];
  selected.value = new Set();
  lastOut.value = "";
  logItems.value = [];
  sec.value = "changes";
  try {
    info.value = await api.svnInfo(props.dir);
    if (info.value.inRepo && info.value.svnAvailable) await loadStatus();
  } catch (err) {
    toast("error", (err as Error).message);
  }
}

/**
 * 运行 svn 子命令并更新输出区；返回结果。
 *
 * `quiet` 只压掉**成功** toast（失败照常提示）—— 供「更新」这类自备摘要文案的调用方使用，
 * 否则 toast 只会显示 `Updating '.':` 这种没有信息量的首行。
 */
async function run(args: string[], quiet = false): Promise<api.SvnRunResult | null> {
  if (running.value) return null;
  running.value = true;
  sec.value = "output";
  try {
    const r = await api.svnRun(props.dir, args);
    const text = [r.stdout, r.stderr].filter(Boolean).join("\n").trim();
    lastOut.value = `$ svn ${args.join(" ")}\n\n${text || t("svnNoOutput")}`;
    if (r.code !== 0) toast("error", (r.stderr || t("svnFailed")).split("\n")[0].slice(0, 200));
    else if (!quiet && r.stdout) toast("ok", r.stdout.split("\n")[0].slice(0, 200));
    return r;
  } catch (err) {
    toast("error", (err as Error).message);
    return null;
  } finally {
    running.value = false;
  }
}

/** 在命令输出顶部插入一行摘要；其下保留命令的完整回显（stdout + stderr）。 */
function prependOutput(line: string): void {
  if (!line) return;
  lastOut.value = `${line}\n\n${lastOut.value}`;
}

/** 解析 `svn status` 输出为 [{code,path,statusText}]。 */
async function loadStatus(): Promise<void> {
  const r = await api.svnRun(props.dir, ["status"]);
  const list: { code: string; path: string; statusText: string }[] = [];
  for (const line of (r.stdout || "").split("\n")) {
    if (!line.trim()) continue;
    const block = line.slice(0, 8);
    const path = line.slice(8).trim();
    if (!path) continue;
    const code = (block[0] ?? " ").trim();
    list.push({ code, path: path.split(" -> ")[0], statusText: statusText(code) });
  }
  status.value = list;
  // 仅保留仍存在的勾选项
  const paths = new Set(list.map((f) => f.path));
  selected.value = new Set([...selected.value].filter((p) => paths.has(p)));
}

function statusText(code: string): string {
  const m: Record<string, string> = {
    A: t("svnStAdded"), M: t("svnStModified"), D: t("svnStDeleted"), R: t("svnStReplaced"),
    C: t("svnStConflicted"), "!": t("svnStMissing"), "~": t("svnStObstructed"),
    "?": t("svnStUnversioned"), I: t("svnStIgnored"), " ": "", K: t("svnStLocked"),
  };
  return m[code] ?? code;
}

function toggle(path: string): void {
  const s = new Set(selected.value);
  if (s.has(path)) s.delete(path);
  else s.add(path);
  selected.value = s;
}
function toggleAll(e: Event): void {
  const checked = (e.target as HTMLInputElement).checked;
  selected.value = checked ? new Set(status.value.map((f) => f.path)) : new Set();
}

/** 刷新：重读工作副本信息与状态（不切页签、不写输出区）。 */
/**
 * 打开账号管理（SVN 类型）。
 *
 * 预填当前工作副本的 URL —— 它（或其前缀）就是匹配账号的键，用户不必手抄；
 * 未探测到 URL 时只预填类型，账号仍可只按主机生效。
 */
function openAccounts(): void {
  openAccountDialog({ kind: "svn", url: info.value?.url ?? "" });
}

async function refreshAll(): Promise<void> {
  refreshing.value = true;
  try {
    info.value = await api.svnInfo(props.dir);
    if (info.value.inRepo && info.value.svnAvailable) await loadStatus();
  } catch (err) {
    toast("error", (err as Error).message);
  } finally {
    refreshing.value = false;
  }
}

/**
 * 更新工作副本（svn update）。
 *
 * 完成后在「命令输出」顶部打印摘要，其下是 svn 的**完整回显**（每个被更新条目的行 + 版本提示）：
 *  - 有变更 → 「更新完成：r{起始} → r{当前}，{n} 个条目变更」；
 *  - 无变更 → 「已是最新版本 r{当前}，没有需要更新的内容」（否则只有一句 `At revision N.`，
 *    容易被误读成命令没执行）。
 * 版本号优先取 `svn info` 的 Revision（重读一次）；`svn info` 读不到时（旧 host 未重启 /
 * 标签语言不识别）回退到解析 update 输出里的版本提示行，避免摘要出现 `r?`。
 * 条目数由输出行统计。
 */
async function doUpdate(): Promise<void> {
  const before = info.value?.revision ?? null;
  const r = await run(["update"], true);
  if (!r || r.code !== 0) return; // 失败已由 run() 提示
  const n = countSvnUpdateEntries(r.stdout);
  const fromOut = svnRevisionFromUpdate(r.stdout); // 兜底：info 读不到时用输出里的版本
  await refreshAll(); // 刷新版本 pill 与本地修改列表
  const rev = info.value?.revision ?? fromOut;
  const header = n
    ? before
      ? t("svnUpdateSummaryFrom", { from: before, to: rev ?? before, n })
      : t("svnUpdateSummary", { n, to: rev ?? "?" })
    : t("svnAlreadyLatest", { rev: rev ?? before ?? "?" });
  prependOutput(header);
  toast("ok", header);
}
async function doCleanup(): Promise<void> {
  const r = await run(["cleanup"]);
  if (r && r.code === 0) await loadStatus();
}
async function doAdd(): Promise<void> {
  const r = await run(["add", ...selected.value]);
  if (r && r.code === 0) await loadStatus();
}
/** 单行「加入版本控制」（未版本控制 ? 文件）。 */
async function addFile(path: string): Promise<void> {
  const r = await run(["add", "--", path]);
  if (r && r.code === 0) await loadStatus();
}
/** 单行「忽略」：把文件末段名追加进父目录的 svn:ignore 属性（幂等）。 */
async function ignoreFile(path: string): Promise<void> {
  const norm = path.replace(/[\\/]$/, "");
  const parent = norm.replace(/[\\/][^\\/]+$/, "");
  const base = norm.slice(parent.length + 1);
  const cur = await api.svnRun(parent, ["propget", "svn:ignore", parent]);
  const existing = (cur.stdout || "").split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
  if (existing.includes(base)) {
    if (cur.code === 0) toast("ok", t("gitIgnored"));
    await loadStatus();
    return;
  }
  const combined = [...existing, base].join("\n");
  const r = await api.svnRun(parent, ["propset", "svn:ignore", combined, parent]);
  if (r.code === 0) toast("ok", t("gitIgnored"));
  else toast("error", (r.stderr || t("svnFailed")).split("\n")[0].slice(0, 200));
  await loadStatus();
}
async function doRevert(): Promise<void> {
  const r = await run(["revert", ...selected.value]);
  if (r && r.code === 0) await loadStatus();
}
async function doResolve(): Promise<void> {
  const r = await run(["resolve", "--accept", "working", ...selected.value]);
  if (r && r.code === 0) await loadStatus();
}
async function doCommit(): Promise<void> {
  const files = [...selected.value];
  const args = ["commit", "-m", commitMsg.value, ...files];
  const r = await run(args);
  if (r && r.code === 0) {
    commitMsg.value = "";
    selected.value = new Set();
    await loadStatus();
  }
}

/** 加载提交日志（svn log --xml），解析为结构化列表。 */
async function loadLog(): Promise<void> {
  logLoading.value = true;
  try {
    const r = await api.svnRun(props.dir, ["log", "--xml", "-v", "-l", "50"]);
    logItems.value = parseLogXml(r.stdout);
    logOpen.value = new Set(); // 刷新后展开态不保留（revision 可能已不在列表里）
  } catch (err) {
    toast("error", (err as Error).message);
  } finally {
    logLoading.value = false;
  }
}
function parseLogXml(xml: string): { revision: string; author: string; date: string; msg: string; paths: { action: string | null; text: string | null }[] }[] {
  const out: { revision: string; author: string; date: string; msg: string; paths: { action: string | null; text: string | null }[] }[] = [];
  try {
    const doc = new DOMParser().parseFromString(xml, "application/xml");
    doc.querySelectorAll("logentry").forEach((e) => {
      const paths: { action: string | null; text: string | null }[] = [];
      e.querySelectorAll("paths > path").forEach((p) => paths.push({ action: p.getAttribute("action"), text: p.textContent }));
      out.push({
        revision: e.getAttribute("revision") ?? "",
        author: e.querySelector("author")?.textContent ?? "",
        date: e.querySelector("date")?.textContent ?? "",
        msg: e.querySelector("msg")?.textContent ?? "",
        paths,
      });
    });
  } catch {
    /* 解析失败返回空 */
  }
  return out;
}
function fmtDate(d: string): string {
  if (!d) return "";
  const dt = new Date(d);
  return isNaN(dt.getTime()) ? d : dt.toLocaleString();
}

async function openDiff(path: string): Promise<void> {
  showDiff.value = true;
  diffFile.value = " · " + path;
  try {
    const r = await api.svnRun(props.dir, ["diff", path]);
    diffLines.value = (r.stdout || "").split("\n");
  } catch (err) {
    diffLines.value = [(err as Error).message];
  }
}

/* ── 提交日志：折叠展开 + 单文件提交对比（对齐 Git 历史的交互） ── */

/** 展开状态的提交（revision 集合，不可变替换以驱动响应式）。 */
const logOpen = ref<Set<string>>(new Set());

function toggleLog(rev: string): void {
  const next = new Set(logOpen.value);
  if (next.has(rev)) next.delete(rev);
  else next.add(rev);
  logOpen.value = next;
}

/** 日志路径是仓库根相对的 POSIX 路径（`/trunk/src/a.txt`）：目录段（含尾斜杠）。 */
function dirOfLogPath(p: string | null): string {
  if (!p) return "";
  const s = p.replace(/^\//, "");
  const i = s.lastIndexOf("/");
  return i < 0 ? "" : s.slice(0, i + 1);
}

/** 日志路径的文件名段。 */
function baseOfLogPath(p: string | null): string {
  if (!p) return "";
  const s = p.replace(/^\//, "");
  return s.slice(s.lastIndexOf("/") + 1) || s;
}

/**
 * 查看某次提交里某个文件的变化：`svn diff -c <rev>`（等价 r(N-1):r(N)）。
 * 路径用 `^/` 仓库根相对写法（log -v 回的 path 本就是仓库根相对），与工作副本
 * 的检出深度 / 子目录位置无关；A / D 等动作下 diff 可能为空或报错，原样展示输出。
 */
async function openRevDiff(rev: string, p: { action: string | null; text: string | null }): Promise<void> {
  if (!p.text) return;
  showDiff.value = true;
  diffFile.value = ` · r${rev} ${p.text}`;
  diffLines.value = [];
  try {
    const r = await api.svnRun(props.dir, ["diff", "-c", rev, "--", "^" + p.text]);
    diffLines.value = (r.stdout || "").split("\n");
  } catch (err) {
    diffLines.value = [(err as Error).message];
  }
}
async function openBlame(path: string): Promise<void> {
  showBlame.value = true;
  blameFile.value = " · " + path;
  try {
    const r = await api.svnRun(props.dir, ["blame", "-v", path]);
    blameLines.value = (r.stdout || "").split("\n");
  } catch (err) {
    blameLines.value = [(err as Error).message];
  }
}

function onCheckoutOpen(): void {
  if (!coUrl.value) coUrl.value = info.value?.url ?? "";
  if (!coTarget.value) coTarget.value = info.value?.root ?? props.dir;
}
async function doCheckout(): Promise<void> {
  const url = coUrl.value.trim();
  const target = coTarget.value.trim();
  if (!url || !target) return;
  // checkout 需在父目录执行，避免目录嵌套；path 传父目录，目标作为相对参数。
  const parent = target.replace(/[\\/][^\\/]*$/, "") || target;
  running.value = true;
  try {
    const r = await api.svnRun(parent, ["checkout", url, target]);
    const text = [r.stdout, r.stderr].filter(Boolean).join("\n").trim();
    lastOut.value = `$ svn checkout ${url} ${target}\n\n${text || t("svnNoOutput")}`;
    if (r.code === 0) {
      toast("ok", t("svnCheckedOut"));
      showCheckout.value = false;
      info.value = await api.svnInfo(target);
      if (info.value.inRepo) await loadStatus();
    } else {
      toast("error", (r.stderr || t("svnFailed")).split("\n")[0].slice(0, 200));
    }
  } catch (err) {
    toast("error", (err as Error).message);
  } finally {
    running.value = false;
  }
}
</script>

<style src="./panel-shared.css"></style>
<style scoped>
/* 与 GitPanel 同构的规则已抽取到 ./panel-shared.css（fw-gp-* / fw-svn-* 双前缀共享）；
   本块只保留 SVN 面板独有的规则（版本 pill 差异、勾选列表、提交框、日志折叠等）。 */
.fw-svn-url {
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--dsh-fg-weak, #8b949e);
  font-size: calc(11px * var(--dsh-fs-scale, 1));
}
.fw-svn-repo {
  flex: 0 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--dsh-fg-weak, #8b949e);
  font-size: calc(11px * var(--dsh-fs-scale, 1));
}
/* 本地修改列表：SVN 独有的勾选交互 */
.fw-svn-list { flex: 1 1 46%; padding-bottom: 4px; }
.fw-svn-selall { display: inline-flex; align-items: center; gap: 5px; font-size: calc(11px * var(--dsh-fs-scale, 1)); font-weight: 400; color: var(--dsh-fg-weak, #8b949e); cursor: pointer; }
.fw-svn-badge {
  flex: 0 0 auto;
  min-width: 18px;
  text-align: center;
  font-family: var(--dsh-mono, monospace);
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  padding: 1px 4px;
  border-radius: 3px;
  background: var(--dsh-bg2, #161b22);
  border: 1px solid var(--dsh-border, #30363d);
}
.fw-svn-badge[data-code="A"], .fw-svn-badge[data-code="M"], .fw-svn-badge[data-code="R"] { color: var(--dsh-success); }
.fw-svn-badge[data-code="D"], .fw-svn-badge[data-code="!"] { color: var(--dsh-danger); }
.fw-svn-badge[data-code="C"] { color: var(--dsh-warn); }
.fw-svn-badge[data-code="?"], .fw-svn-badge[data-code="I"] { color: var(--dsh-fg-weak, #8b949e); }
.fw-svn-stext { flex: 0 0 auto; color: var(--dsh-fg-weak, #8b949e); font-size: calc(11px * var(--dsh-fs-scale, 1)); }
/* ── 右侧提交框 ───────────────────────────────────────────────── */
.fw-svn-detail {
  flex: 1 1 54%;
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
}
.fw-svn-msg {
  flex: 0 0 auto;
  margin: 8px;
  resize: vertical;
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: var(--dsh-radius-sm, 4px);
  background: var(--dsh-bg2, #161b22);
  color: var(--dsh-fg, #c9d1d9);
  padding: 6px 8px;
  font: inherit;
  font-size: calc(12px * var(--dsh-fs-scale, 1));
}
.fw-svn-msg:focus { outline: none; border-color: color-mix(in srgb, var(--dsh-accent, #238636) 55%, transparent); }
.fw-svn-bulk { display: flex; flex-wrap: wrap; gap: 6px; padding: 0 8px; }
.fw-svn-commit-acts { display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 8px; margin-top: auto; }
.fw-svn-hint { color: var(--dsh-fg-weak, #8b949e); font-size: calc(11px * var(--dsh-fs-scale, 1)); }
.fw-svn-btn {
  min-height: 28px;
  padding: 0 10px;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: var(--dsh-radius-sm, 4px);
  background: var(--dsh-bg2, #161b22);
  color: var(--dsh-fg, #c9d1d9);
  font: inherit;
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  cursor: pointer;
}
.fw-svn-btn:hover:not(:disabled) { border-color: color-mix(in srgb, var(--dsh-accent, #238636) 55%, transparent); color: var(--dsh-accent, #238636); }
.fw-svn-btn:disabled { opacity: 0.45; cursor: not-allowed; }
.fw-svn-btn.primary { background: var(--dsh-accent, #238636); border-color: var(--dsh-accent, #238636); color: #fff; }
/* ── 提交日志（内嵌列表；默认折叠，对齐 Git 历史交互） ─────────── */
.fw-svn-loglist { flex: 1 1 auto; min-height: 0; overflow-y: auto; padding-bottom: 6px; }
.fw-svn-logitem { padding: 6px 10px; border-bottom: 1px solid var(--dsh-border, #30363d); }
.fw-svn-logitem:hover { background: var(--dsh-hover, rgba(48, 54, 61, 0.3)); }
.fw-svn-log-h { display: flex; gap: 8px; align-items: baseline; min-width: 0; cursor: pointer; user-select: none; }
.fw-svn-caret { flex: 0 0 auto; width: 12px; color: var(--dsh-fg-weak, #8b949e); font-size: calc(10px * var(--dsh-fs-scale, 1)); }
.fw-svn-logitem:hover .fw-svn-caret { color: var(--dsh-accent, #238636); }
.fw-svn-log-r { flex: 0 0 auto; color: var(--dsh-accent, #238636); font-weight: 600; font-family: var(--dsh-mono, monospace); font-size: calc(11px * var(--dsh-fs-scale, 1)); }
.fw-svn-log-msg1 { flex: 1 1 auto; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: calc(12px * var(--dsh-fs-scale, 1)); }
.fw-svn-log-meta { flex: 0 0 auto; display: flex; gap: 10px; color: var(--dsh-fg-weak, #8b949e); font-size: calc(11px * var(--dsh-fs-scale, 1)); }
.fw-svn-logitem.open { background: color-mix(in srgb, var(--dsh-accent, #238636) 4%, transparent); }
.fw-svn-log-msg { margin: 6px 0 0 20px; white-space: pre-wrap; font-size: calc(12px * var(--dsh-fs-scale, 1)); color: var(--dsh-fg, #c9d1d9); }
/* 展开后的变更文件列表：行式布局（动作徽标 + 目录淡色 + 文件名），点击看该次提交 diff */
.fw-svn-log-cfiles { display: flex; flex-direction: column; gap: 1px; margin: 6px 0 2px 20px; }
.fw-svn-cfile { display: flex; gap: 8px; align-items: baseline; min-width: 0; padding: 2px 6px; border-radius: var(--dsh-radius-sm, 4px); cursor: pointer; }
.fw-svn-cfile:hover { background: var(--dsh-hover, rgba(48, 54, 61, 0.5)); }
.fw-svn-cfile-act { flex: 0 0 auto; width: 14px; text-align: center; font-family: var(--dsh-mono, monospace); font-weight: 600; font-size: calc(11px * var(--dsh-fs-scale, 1)); color: var(--dsh-fg-weak, #8b949e); }
.fw-svn-cfile-act.pa-A { color: var(--dsh-success); }
.fw-svn-cfile-act.pa-M { color: var(--dsh-success); }
.fw-svn-cfile-act.pa-D { color: var(--dsh-danger); }
.fw-svn-cfile-act.pa-R { color: var(--dsh-purple); }
.fw-svn-cfile-path { flex: 1 1 auto; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-family: var(--dsh-mono, monospace); font-size: calc(11.5px * var(--dsh-fs-scale, 1)); color: var(--dsh-fg, #c9d1d9); }
.fw-svn-cfile-dir { color: var(--dsh-fg-weak, #8b949e); }
/* ── 命令输出 ─────────────────────────────────────────────────── */
.fw-svn-cli { flex: 1 1 auto; min-height: 0; padding: 8px; display: flex; }
.fw-svn-cli-body {
  flex: 1 1 auto;
  margin: 0;
  padding: 8px 10px;
  overflow: auto;
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: var(--dsh-radius-sm, 4px);
  background: var(--dsh-bg2, #161b22);
  font-family: var(--dsh-mono, ui-monospace, sfmono-regular, consolas, monospace);
  font-size: calc(11.5px * var(--dsh-fs-scale, 1));
  color: var(--dsh-fg, #c9d1d9);
  white-space: pre-wrap;
  word-break: break-word;
}
/* ── 降级视图 / 弹窗 ──────────────────────────────────────────── */
.fw-svn-mini:disabled { opacity: 0.45; cursor: not-allowed; }
.fw-svn-warn { display: flex; align-items: center; gap: 6px; padding: 8px 10px; border-radius: var(--dsh-radius-sm, 4px); background: color-mix(in srgb, var(--dsh-warn) 16%, transparent); border: 1px solid color-mix(in srgb, var(--dsh-warn) 40%, transparent); color: var(--dsh-warn); font-size: calc(12px * var(--dsh-fs-scale, 1)); }
.fw-svn-checkout-form { display: flex; flex-direction: column; gap: 8px; }
.fw-svn-tip { margin: 0; color: var(--dsh-fg-weak, #8b949e); font-size: calc(12px * var(--dsh-fs-scale, 1)); }
.fw-svn-checkout-row { display: flex; align-items: center; gap: 6px; }
.fw-svn-co-url, .fw-svn-co-target { flex: 1 1 auto; }
.fw-svn-diffwrap { height: 60vh; display: flex; }
.fw-svn-blame { margin: 0; height: 60vh; overflow: auto; font-family: var(--dsh-mono, monospace); font-size: calc(11.5px * var(--dsh-fs-scale, 1)); white-space: pre; }
.fw-svn-co-form { display: flex; flex-direction: column; gap: 6px; }
.fw-svn-co-label { font-size: calc(11px * var(--dsh-fs-scale, 1)); color: var(--dsh-fg-weak, #8b949e); }
</style>
