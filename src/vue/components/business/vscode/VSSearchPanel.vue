<template>
  <div class="vs-sp">
    <!-- 标题栏：搜索 + 图标操作行（刷新 / 全部展开 / 全部折叠 / 清除所有结果） -->
    <div class="vs-sp-titlebar">
      <span class="vs-sp-title">{{ t("vsSearchTitle") }}</span>
      <div class="vs-sp-actions">
        <button class="vs-sp-act" :title="t('vsViewModeSwitchTitle')" @click="toggleViewMode">
          <icon :name="viewMode === 'list' ? 'sort' : 'folderOpen'" :size="13" />
        </button>
        <button class="vs-sp-act" :title="t('vsRefreshResults')" :disabled="!canSearch" @click="run()">
          <icon name="refresh" :size="13" />
        </button>
        <button class="vs-sp-act" :title="t('vsExpandAll')" :disabled="!hasResults" @click="expandAll">
          <icon name="chevronsDown" :size="13" />
        </button>
        <button class="vs-sp-act" :title="t('vsCollapseAll')" :disabled="!hasResults" @click="collapseAll">
          <icon name="chevronsUp" :size="13" />
        </button>
        <button class="vs-sp-act" :title="t('vsClearAllResults')" :disabled="!searched && !q" @click="clearAll">
          <icon name="close" :size="13" />
        </button>
      </div>
    </div>

    <!-- 搜索头：输入框 + 大小写/整词/正则开关 + 替换展开按钮 -->
    <div class="vs-sp-head">
      <div class="vs-sp-inputwrap">
        <input
          v-model="q"
          class="vs-sp-input"
          :placeholder="t('vsGrepPlaceholder')"
          @keydown.enter.prevent="run()"
          @input="onInput"
        />
        <button class="vs-sp-toggle" :class="{ on: caseSensitive }" :title="t('vsGrepCase')" @click="toggleCase">
          <span>Aa</span>
        </button>
        <button class="vs-sp-toggle" :class="{ on: wholeWord }" :title="t('vsGrepWholeWord')" @click="toggleWord">
          <span>ab</span>
        </button>
        <button class="vs-sp-toggle" :class="{ on: regex }" :title="t('vsGrepRegex')" @click="toggleRegex">
          <span>.*</span>
        </button>
        <button class="vs-sp-toggle" :class="{ on: replaceOpen }" :title="t('vsToggleReplace')" @click="toggleReplaceOpen">
          <icon name="chevronRight" :size="12" class="vs-sp-replace-caret" :class="{ open: replaceOpen }" />
        </button>
      </div>

      <!-- 替换行：输入 + 保留大小写 + 全部替换 -->
      <div v-if="replaceOpen" class="vs-sp-inputwrap vs-sp-replacerow">
        <input
          v-model="replacement"
          class="vs-sp-input"
          :placeholder="t('vsGrepReplacePlaceholder')"
          @keydown.enter.prevent="confirmReplaceAll"
        />
        <button class="vs-sp-toggle" :class="{ on: preserveCase }" :title="t('vsReplacePreserveCase')" @click="togglePreserveCase">
          <span>AB</span>
        </button>
        <button
          class="vs-sp-btn-replaceall"
          :title="t('vsReplaceAll')"
          :disabled="!canReplace || replacing"
          @click="confirmReplaceAll"
        >
          <icon name="chevronsRight" :size="13" />
        </button>
      </div>
    </div>

    <!-- 可折叠分隔：展开「包含/排除的文件」范围设置 -->
    <div class="vs-sp-divider" @click="toggleAdvancedOpen">
      <icon name="chevronRight" :size="11" class="vs-sp-div-caret" :class="{ open: advancedOpen }" />
    </div>

    <!-- 高级范围：包含的文件 / 排除的文件（glob，逗号分隔，相对项目根） -->
    <div v-if="advancedOpen" class="vs-sp-adv">
      <div class="vs-sp-field">
        <div class="vs-sp-field-label">
          <icon name="file" :size="12" />
          <span>{{ t("vsFilesToInclude") }}</span>
        </div>
        <input
          v-model="include"
          class="vs-sp-field-input"
          :placeholder="t('vsFilesToIncludePlaceholder')"
          :title="t('vsFilesToIncludeTitle')"
          @keydown.enter.prevent="run()"
          @input="onInput"
        />
      </div>
      <div class="vs-sp-field">
        <div class="vs-sp-field-label">
          <icon name="gear" :size="12" />
          <span>{{ t("vsFilesToExclude") }}</span>
        </div>
        <input
          v-model="exclude"
          class="vs-sp-field-input"
          :placeholder="t('vsFilesToExcludePlaceholder')"
          :title="t('vsFilesToExcludeTitle')"
          @keydown.enter.prevent="run()"
          @input="onInput"
        />
      </div>
    </div>

    <!-- 结果摘要：N 个文件中 M 条结果（截断时提示） -->
    <div v-if="searched" class="vs-sp-summary">
      <template v-if="outcome">
        <span>{{ t("vsGrepSummary", { files: outcome.files.length, n: outcome.total }) }}</span>
        <span v-if="outcome.truncated" class="vs-sp-trunc">{{ t("vsGrepTruncated") }}</span>
      </template>
      <span v-else-if="searching" class="vs-sp-trunc">{{ t("vsLoading") }}</span>
      <span v-else class="vs-sp-trunc">{{ t("vsGrepNoResult") }}</span>
    </div>

    <!-- 结果列表：列表模式按文件平铺；树模式按目录层级缩进。点击命中行打开文件并跳到该行 -->
    <div v-if="outcome" class="vs-sp-list">
      <template v-if="viewMode === 'list'">
        <template v-for="g in outcome.files" :key="g.rel">
          <div class="vs-sp-file" :class="{ open: openFiles.has(g.rel) }" :title="g.rel" @click="toggleFile(g.rel)">
            <icon name="chevronRight" :size="11" class="vs-sp-caret" />
            <icon name="fileText" :size="12" />
            <span class="vs-sp-name">{{ baseOf(g.rel) }}</span>
            <span class="vs-sp-dir">{{ dirOf(g.rel) }}</span>
            <span class="vs-sp-count">{{ g.hits.length }}</span>
          </div>
          <template v-if="openFiles.has(g.rel)">
            <div
              v-for="h in g.hits"
              :key="g.rel + ':' + h.ln"
              class="vs-sp-hit"
              :title="t('vsGrepOpenAt', { ln: h.ln })"
              @click="emit('open', g.rel, h.ln)"
            >
              <span class="vs-sp-ln">{{ h.ln }}</span>
              <span class="vs-sp-text"><template v-for="(seg, i) in segments(h.text)" :key="i"><mark v-if="seg.hit">{{ seg.t }}</mark><template v-else>{{ seg.t }}</template></template></span>
            </div>
          </template>
        </template>
      </template>

      <template v-else>
        <template v-for="row in treeRows" :key="row.kind + ':' + row.path">
          <div
            v-if="row.kind === 'dir'"
            class="vs-sp-file vs-sp-node"
            :class="{ open: row.open }"
            :style="{ paddingLeft: 8 + (row.depth - 1) * 12 + 'px' }"
            :title="row.path"
            @click="toggleDir(row.path)"
          >
            <icon name="chevronRight" :size="11" class="vs-sp-caret" />
            <icon :name="row.open ? 'folderOpen' : 'folder'" :size="12" />
            <span class="vs-sp-name">{{ row.name }}</span>
            <span class="vs-sp-count">{{ row.count }}</span>
          </div>
          <template v-else>
            <div
              class="vs-sp-file vs-sp-node"
              :class="{ open: row.open }"
              :style="{ paddingLeft: 8 + row.depth * 12 + 'px' }"
              :title="row.path"
              @click="toggleFile(row.path)"
            >
              <icon name="chevronRight" :size="11" class="vs-sp-caret" />
              <icon name="fileText" :size="12" />
              <span class="vs-sp-name">{{ row.name }}</span>
              <span class="vs-sp-count">{{ row.count }}</span>
            </div>
            <template v-if="row.open">
              <div
                v-for="h in hitsOf(row.path)"
                :key="row.path + ':' + h.ln"
                class="vs-sp-hit"
                :style="{ paddingLeft: 26 + row.depth * 12 + 'px' }"
                :title="t('vsGrepOpenAt', { ln: h.ln })"
                @click="emit('open', row.path, h.ln)"
              >
                <span class="vs-sp-ln">{{ h.ln }}</span>
                <span class="vs-sp-text"><template v-for="(seg, i) in segments(h.text)" :key="i"><mark v-if="seg.hit">{{ seg.t }}</mark><template v-else>{{ seg.t }}</template></template></span>
              </div>
            </template>
          </template>
        </template>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * 左栏「搜索」tab：全局内容搜索（host /grep，grep 式按行命中），对齐 VS Code 布局。
 *
 * - 标题栏 + 图标操作行：刷新 / 全部展开 / 全部折叠 / 清除所有结果；
 * - 搜索框内联三开关：区分大小写(Aa) / 全字匹配(ab) / 正则(.*)，另加替换展开按钮；
 * - 替换行：替换输入 + 保留大小写(AB) + 全部替换（真正改写磁盘，二次确认，仅本地根）；
 * - 可折叠「包含的文件 / 排除的文件」glob 范围（后端 grep/replace 均支持）；
 * - 结果按文件分组，点击命中行 emit("open", rel, ln) 由父组件打开并跳行；支持列表 / 树两种视图切换（树按目录层级缩进）；
 * - 搜索防抖 300ms，Enter 立即执行；命中文件少时默认全展开，超过 8 个收起。全部展开/折叠作用于当前视图模式。
 */
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import * as api from "../../../composables/core/useApi";
import { t } from "../../../composables/core/i18n";
import { confirmDialog } from "../../../composables/core/dialog";
import { toast } from "../../../composables/core/toast";
import { useSearchStore, type SearchViewMode } from "../../../stores/search";
import Icon from "../../common/Icon.vue";

type Outcome = Awaited<ReturnType<typeof api.grep>>;

const props = defineProps<{ projectDir: string }>();

const emit = defineEmits<{
  /** 点击命中行：rel = 相对路径（'/' 分隔），ln = 1 起始行号。 */
  (e: "open", rel: string, ln: number): void;
}>();

const store = useSearchStore();
const { prefs } = store;

// 项目内数据（查询串 / 范围 glob / 替换串 / 上次结果）按目录分槽恢复；切项目即取到另一槽（空）。
const proj = store.getProject(props.projectDir);
const q = ref(proj.q);
const include = ref(proj.include);
const exclude = ref(proj.exclude);
const replacement = ref(proj.replacement);
const outcome = ref<Outcome | null>(proj.outcome as Outcome | null);
const searched = ref(proj.searched);

// 开关是全局偏好，跨项目沿用。
const caseSensitive = ref(prefs.caseSensitive);
const wholeWord = ref(prefs.wholeWord);
const regex = ref(prefs.regex);
const preserveCase = ref(prefs.preserveCase);
const viewMode = ref<SearchViewMode>(prefs.viewMode);
const replaceOpen = ref(prefs.replaceOpen);
const advancedOpen = ref(prefs.advancedOpen);

// 每次挂载重置的瞬时态。
const searching = ref(false);
const replacing = ref(false);
/** 展开的文件集合（rel）。 */
const openFiles = ref(new Set<string>());
/** 树模式下已展开的目录路径（相对项目根，'/' 分隔；"" 表示根）。 */
const openDirs = ref(new Set<string>(""));

/** 树形展平后的一行：目录节点或文件节点。 */
type TreeRow =
  | { kind: "dir"; path: string; name: string; depth: number; count: number; open: boolean }
  | { kind: "file"; path: string; name: string; dir: string; depth: number; count: number; open: boolean };

let seq = 0;
let timer = 0;

/** 关键字够长即可搜（≥2 字符，与 host CONTENT_MIN_QUERY 对齐）。 */
const canSearch = computed(() => q.value.trim().length >= 2);
const hasResults = computed(() => !!outcome.value && outcome.value.files.length > 0);
/** 替换需：可搜 + 已出结果 + 有替换串 + 本地根（远端不支持跨文件写）。 */
const canReplace = computed(
  () => canSearch.value && hasResults.value && replacement.value.length > 0 && !api.isRemoteRef(props.projectDir),
);

/** 当前搜索选项（供 grep 与 replace 复用，保证「所见即所换」）。 */
function searchOpts() {
  return {
    path: props.projectDir,
    caseSensitive: caseSensitive.value,
    regex: regex.value,
    wholeWord: wholeWord.value,
    include: include.value.trim() || undefined,
    exclude: exclude.value.trim() || undefined,
  };
}

/** 执行搜索（带序号防陈旧响应）。 */
async function run(): Promise<void> {
  const my = ++seq;
  if (!canSearch.value) {
    outcome.value = null;
    searched.value = false;
    searching.value = false;
    saveCurrent();
    return;
  }
  searching.value = true;
  try {
    const r = await api.grep(q.value.trim(), searchOpts());
    if (my !== seq) return; // 过期响应丢弃
    outcome.value = r;
    searched.value = true;
    // 命中文件不多时默认全部展开，方便直接看上下文
    openFiles.value = new Set(r.files.length <= 8 ? r.files.map((f) => f.rel) : []);
  } catch {
    if (my === seq) {
      outcome.value = null;
      searched.value = true;
    }
  } finally {
    if (my === seq) {
      searching.value = false;
      saveCurrent();
    }
  }
}

/** 把当前项目内的查询/结果写回 store（按目录分槽），供切走再回来恢复。 */
function saveCurrent(): void {
  if (!props.projectDir) return;
  store.saveProject(props.projectDir, {
    q: q.value,
    include: include.value,
    exclude: exclude.value,
    replacement: replacement.value,
    outcome: outcome.value,
    searched: searched.value,
  });
}

/** 输入防抖 300ms 自动搜索。 */
function onInput(): void {
  if (timer) window.clearTimeout(timer);
  timer = window.setTimeout(() => void run(), 300);
}

function toggleCase(): void {
  caseSensitive.value = !caseSensitive.value;
  store.setPref("caseSensitive", caseSensitive.value);
  if (searched.value) void run();
}
function toggleWord(): void {
  wholeWord.value = !wholeWord.value;
  store.setPref("wholeWord", wholeWord.value);
  if (searched.value) void run();
}
function toggleRegex(): void {
  regex.value = !regex.value;
  store.setPref("regex", regex.value);
  if (searched.value) void run();
}
function toggleViewMode(): void {
  viewMode.value = viewMode.value === "list" ? "tree" : "list";
  store.setPref("viewMode", viewMode.value);
}
function togglePreserveCase(): void {
  preserveCase.value = !preserveCase.value;
  store.setPref("preserveCase", preserveCase.value);
}
function toggleReplaceOpen(): void {
  replaceOpen.value = !replaceOpen.value;
  store.setPref("replaceOpen", replaceOpen.value);
}
function toggleAdvancedOpen(): void {
  advancedOpen.value = !advancedOpen.value;
  store.setPref("advancedOpen", advancedOpen.value);
}
function expandAll(): void {
  const o = outcome.value;
  if (!o) return;
  if (viewMode.value === "list") {
    openFiles.value = new Set(o.files.map((f) => f.rel));
  } else {
    const dirs = new Set<string>("");
    for (const f of o.files) addAncestors(dirs, f.rel);
    openDirs.value = dirs;
  }
}
function collapseAll(): void {
  if (viewMode.value === "list") openFiles.value = new Set();
  else openDirs.value = new Set("");
}

/** 把 rel 的全部祖先目录加入集合（含中间层，不含文件自身）。 */
function addAncestors(set: Set<string>, rel: string): void {
  const parts = rel.split("/");
  for (let i = 1; i < parts.length; i++) set.add(parts.slice(0, i).join("/"));
}

/** 切换某目录展开态。 */
function toggleDir(path: string): void {
  const next = new Set(openDirs.value);
  if (next.has(path)) next.delete(path);
  else next.add(path);
  openDirs.value = next;
}

/**
 * 树模式：把扁平命中文件按目录层级展平成有序行（深度缩进），只输出「已展开祖先链」可见的节点。
 * 目录在前、文件在后，各自按名排序；未展开目录的子节点被隐藏。
 */
const treeRows = computed<TreeRow[]>(() => {
  const o = outcome.value;
  if (!o || viewMode.value !== "tree") return [];
  // 建目录树：node.children(dir/file) + 每目录累计命中数
  interface Node { name: string; path: string; dirs: Map<string, Node>; files: { name: string; rel: string; count: number }[]; count: number }
  const root: Node = { name: "", path: "", dirs: new Map(), files: [], count: 0 };
  for (const f of o.files) {
    const parts = f.rel.split("/");
    const file = { name: parts[parts.length - 1], rel: f.rel, count: f.hits.length };
    let cur = root;
    cur.count += f.hits.length;
    for (let i = 0; i < parts.length - 1; i++) {
      const seg = parts[i];
      const path = cur.path ? `${cur.path}/${seg}` : seg;
      let child = cur.dirs.get(seg);
      if (!child) {
        child = { name: seg, path, dirs: new Map(), files: [], count: 0 };
        cur.dirs.set(seg, child);
      }
      cur = child;
      cur.count += f.hits.length;
    }
    cur.files.push(file);
  }
  const rows: TreeRow[] = [];
  const walk = (node: Node, depth: number): void => {
    const open = openDirs.value.has(node.path);
    if (depth > 0) {
      rows.push({ kind: "dir", path: node.path, name: node.name, depth, count: node.count, open });
    }
    if (!open && depth > 0) return; // 折叠目录不展开子节点（根 depth 0 恒展开）
    for (const d of [...node.dirs.values()].sort((a, b) => a.name.localeCompare(b.name))) walk(d, depth + 1);
    for (const fl of [...node.files].sort((a, b) => a.name.localeCompare(b.name))) {
      rows.push({ kind: "file", path: fl.rel, name: fl.name, dir: dirOf(fl.rel), depth, count: fl.count, open: openFiles.value.has(fl.rel) });
    }
  };
  walk(root, 0);
  return rows;
});
/** 清除所有结果：复位输入、开关与结果集。 */
function clearAll(): void {
  if (timer) window.clearTimeout(timer);
  seq++;
  q.value = "";
  replacement.value = "";
  include.value = "";
  exclude.value = "";
  outcome.value = null;
  searched.value = false;
  searching.value = false;
  openFiles.value = new Set();
  openDirs.value = new Set("");
  store.clearProject(props.projectDir);
}

function toggleFile(rel: string): void {
  const next = new Set(openFiles.value);
  if (next.has(rel)) next.delete(rel);
  else next.add(rel);
  openFiles.value = next;
}

/** 取某文件（rel）的命中行；树模式展开文件时复用。 */
function hitsOf(rel: string): Array<{ ln: number; text: string }> {
  return outcome.value?.files.find((f) => f.rel === rel)?.hits ?? [];
}

/**
 * 全部替换：先二次确认（列出受影响文件数与总处数），再调用 /replace 落盘。
 * 远端根已在 canReplace 里挡掉；确认后重跑一次搜索刷新结果。
 */
async function confirmReplaceAll(): Promise<void> {
  if (!canReplace.value || replacing.value) return;
  const o = outcome.value;
  if (!o) return;
  const totalHits = o.total;
  const fileCount = o.files.length;
  const msg = t("vsReplaceConfirm", {
    files: String(fileCount),
    n: String(totalHits),
    q: q.value.trim(),
    r: replacement.value,
  });
  if (!(await confirmDialog({ title: t("vsReplaceAll"), message: msg }))) return;
  replacing.value = true;
  try {
    const res = await api.batchReplace(q.value.trim(), replacement.value, {
      scope: props.projectDir,
      caseSensitive: caseSensitive.value,
      regex: regex.value,
      wholeWord: wholeWord.value,
      preserveCase: preserveCase.value,
      include: include.value.trim() || undefined,
      exclude: exclude.value.trim() || undefined,
    });
    if (res.replacements > 0) toast("ok", t("vsReplaceDone", { files: String(res.files), n: String(res.replacements) }));
    else toast("info", t("vsReplaceNone"));
    await run();
  } catch (e) {
    // request() 已对非静默错误弹过 toast；此处仅记录，避免重复提示。
    console.warn("[dsh-file-workbench] replace failed:", e);
  } finally {
    replacing.value = false;
  }
}

/** 从 store 载入指定项目的搜索数据到本地 ref（切项目 / 挂载恢复共用）。 */
function loadFrom(dir: string): void {
  const p = store.getProject(dir);
  q.value = p.q;
  include.value = p.include;
  exclude.value = p.exclude;
  replacement.value = p.replacement;
  outcome.value = p.outcome as Outcome | null;
  searched.value = p.searched;
  openFiles.value = new Set();
  openDirs.value = new Set("");
}

/**
 * 项目目录变化：切到新目录 → 载入该目录自己的搜索数据（无则空）；
 * 目录被清空（关闭/移出项目）→ 落到空槽，即清空。旧目录的数据仍留在 store，回来可见。
 */
watch(() => props.projectDir, (dir) => loadFrom(dir));

onMounted(() => {
  // 记住本次输入的查询/范围（即便没有结果也保留），供切走再回来恢复。
  saveCurrent();
  // 有查询但该项目尚无缓存结果（如首次进入或结果未落盘）→ 补搜一次。
  if (canSearch.value && !outcome.value) void run();
});

onBeforeUnmount(() => {
  if (timer) window.clearTimeout(timer);
});

/** 命中行按匹配片段切分（用于 <mark> 高亮）；与 host 同一匹配语义（大小写/整词/正则跟随开关）。 */
function segments(text: string): Array<{ t: string; hit: boolean }> {
  const needle = q.value.trim();
  if (!needle) return [{ t: text, hit: false }];
  let src: string;
  try {
    src = regex.value ? needle : needle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  } catch {
    return [{ t: text, hit: false }];
  }
  if (wholeWord.value) src = `(?<![\\p{L}\\p{N}_])${src}(?![\\p{L}\\p{N}_])`;
  let re: RegExp;
  try {
    re = new RegExp(src, caseSensitive.value ? "gu" : "giu");
  } catch {
    return [{ t: text, hit: false }];
  }
  const out: Array<{ t: string; hit: boolean }> = [];
  let last = 0;
  for (const m of text.matchAll(re)) {
    if (m.index! > last) out.push({ t: text.slice(last, m.index), hit: false });
    out.push({ t: m[0] || needle, hit: true });
    last = m.index! + (m[0]?.length || needle.length);
    if (m[0] === "") break; // 空匹配（如 .*）只标一处，防死循环
  }
  if (last < text.length) out.push({ t: text.slice(last), hit: false });
  return out;
}

const baseOf = (rel: string): string => rel.slice(rel.lastIndexOf("/") + 1);
const dirOf = (rel: string): string => {
  const i = rel.lastIndexOf("/");
  return i < 0 ? "" : rel.slice(0, i);
};
</script>

<style scoped>
.vs-sp {
  display: flex;
  flex-direction: column;
  min-height: 0;
  flex: 1 1 auto;
  font-size: calc(12px * var(--dsh-fs-scale, 1));
}
/* 标题栏：左侧「搜索」文字，右侧图标操作行 */
.vs-sp-titlebar {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 6px 4px 10px;
}
.vs-sp-title {
  font-weight: 600;
  color: var(--dsh-fg, #c9d1d9);
  letter-spacing: 0.02em;
}
.vs-sp-actions {
  display: flex;
  align-items: center;
  gap: 1px;
}
.vs-sp-act {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  padding: 0;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: var(--dsh-fg-weak, #8b949e);
  cursor: pointer;
}
.vs-sp-act:hover:not(:disabled) {
  background: var(--dsh-hover, rgba(255, 255, 255, 0.08));
  color: var(--dsh-fg, #c9d1d9);
}
.vs-sp-act:disabled {
  opacity: 0.4;
  cursor: default;
}
.vs-sp-head {
  flex: 0 0 auto;
  padding: 2px 8px 4px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.vs-sp-inputwrap {
  display: flex;
  align-items: center;
  gap: 2px;
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 5px;
  background: var(--dsh-bg, #0d1117);
  padding-right: 2px;
}
.vs-sp-inputwrap:focus-within {
  border-color: var(--dsh-accent, #2f81f7);
}
.vs-sp-input {
  flex: 1 1 auto;
  min-width: 0;
  height: 24px;
  padding: 0 8px;
  border: none;
  outline: none;
  background: transparent;
  color: var(--dsh-fg, #c9d1d9);
  font-size: calc(12px * var(--dsh-fs-scale, 1));
}
.vs-sp-toggle {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 20px;
  padding: 0;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: var(--dsh-fg-weak, #8b949e);
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  cursor: pointer;
}
.vs-sp-toggle:hover {
  background: var(--dsh-hover, rgba(255, 255, 255, 0.08));
}
.vs-sp-toggle.on {
  color: var(--dsh-accent, #2f81f7);
  background: var(--dsh-hover, rgba(255, 255, 255, 0.08));
}
.vs-sp-replace-caret {
  transition: transform 0.12s;
  fill: none;
  stroke: var(--dsh-fg-weak, #8b949e);
}
.vs-sp-toggle.on .vs-sp-replace-caret {
  stroke: var(--dsh-accent, #2f81f7);
}
.vs-sp-replace-caret.open {
  transform: rotate(90deg);
}
.vs-sp-btn-replaceall {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 20px;
  padding: 0;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: var(--dsh-fg-weak, #8b949e);
  cursor: pointer;
}
.vs-sp-btn-replaceall :deep(.fw-icon) {
  fill: none;
  stroke: currentColor;
}
.vs-sp-btn-replaceall:hover:not(:disabled) {
  background: var(--dsh-hover, rgba(255, 255, 255, 0.08));
  color: var(--dsh-accent, #2f81f7);
}
.vs-sp-btn-replaceall:disabled {
  opacity: 0.4;
  cursor: default;
}
/* 折叠分隔条：一条横线 + 居中箭头 */
.vs-sp-divider {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 14px;
  margin: 0 8px;
  border-top: 1px solid var(--dsh-border, #30363d);
  cursor: pointer;
  color: var(--dsh-fg-weak, #8b949e);
}
.vs-sp-divider:hover {
  color: var(--dsh-fg, #c9d1d9);
}
.vs-sp-div-caret {
  position: relative;
  top: -7px;
  /* background: var(--dsh-panel, #161b22); */
  padding: 0 2px;
  transition: transform 0.12s;
}
.vs-sp-div-caret.open {
  transform: rotate(90deg);
}
/* 高级范围：包含/排除字段 */
.vs-sp-adv {
  flex: 0 0 auto;
  padding: 2px 8px 4px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.vs-sp-field-label {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 2px;
  color: var(--dsh-fg-weak, #8b949e);
  font-size: calc(11px * var(--dsh-fs-scale, 1));
}
.vs-sp-field-input {
  width: 100%;
  box-sizing: border-box;
  height: 22px;
  padding: 0 8px;
  border: 1px dashed var(--dsh-border, #30363d);
  border-radius: 5px;
  outline: none;
  background: var(--dsh-bg, #0d1117);
  color: var(--dsh-fg, #c9d1d9);
  font-size: calc(11px * var(--dsh-fs-scale, 1));
}
.vs-sp-field-input:focus {
  border-style: solid;
  border-color: var(--dsh-accent, #2f81f7);
}
.vs-sp-field-input::placeholder {
  color: var(--dsh-fg-weak, #8b949e);
  opacity: 0.7;
}
.vs-sp-summary {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 2px 10px 4px;
  color: var(--dsh-fg-weak, #8b949e);
}
.vs-sp-trunc {
  color: var(--dsh-warn, #d29922);
}
.vs-sp-list {
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 4px;
}
.vs-sp-file {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  cursor: pointer;
  color: var(--dsh-fg, #c9d1d9);
  user-select: none;
}
.vs-sp-file:hover {
  background: var(--dsh-hover, rgba(255, 255, 255, 0.06));
}
.vs-sp-node .vs-sp-name {
  font-weight: 500;
}
.vs-sp-caret {
  flex: 0 0 auto;
  transition: transform 0.12s;
  color: var(--dsh-fg-weak, #8b949e);
}
.vs-sp-file.open .vs-sp-caret {
  transform: rotate(90deg);
}
.vs-sp-name {
  flex: 0 1 auto;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.vs-sp-dir {
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  direction: rtl;
  text-align: left;
  color: var(--dsh-fg-weak, #8b949e);
  font-size: calc(11px * var(--dsh-fs-scale, 1));
}
.vs-sp-count {
  flex: 0 0 auto;
  min-width: 18px;
  text-align: center;
  padding: 0 5px;
  border-radius: 9px;
  background: var(--dsh-hover, rgba(255, 255, 255, 0.1));
  color: var(--dsh-fg, #c9d1d9);
  font-size: calc(10px * var(--dsh-fs-scale, 1));
  font-variant-numeric: tabular-nums;
}
.vs-sp-hit {
  display: flex;
  align-items: flex-start;
  gap: 6px;
  padding: 1px 8px 1px 26px;
  cursor: pointer;
  color: var(--dsh-fg, #c9d1d9);
  line-height: 1.55;
}
.vs-sp-hit:hover {
  background: var(--dsh-hover, rgba(255, 255, 255, 0.06));
}
.vs-sp-ln {
  flex: 0 0 auto;
  width: 30px;
  text-align: right;
  color: var(--dsh-fg-weak, #8b949e);
  font-variant-numeric: tabular-nums;
  font-size: calc(11px * var(--dsh-fs-scale, 1));
}
.vs-sp-text {
  flex: 1 1 auto;
  min-width: 0;
  overflow-wrap: anywhere;
  white-space: pre-wrap;
  word-break: break-all;
  font-family: var(--dsh-mono, ui-monospace, sfmono-regular, consolas, monospace);
  font-size: calc(11px * var(--dsh-fs-scale, 1));
}
.vs-sp-text mark {
  background: var(--dsh-accent-weak, rgba(210, 153, 34, 0.4));
  color: inherit;
  border-radius: 2px;
  padding: 0 1px;
}
</style>
