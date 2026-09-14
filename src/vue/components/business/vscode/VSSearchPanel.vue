<template>
  <div class="vs-sp">
    <!-- 搜索头：输入框 + 大小写/正则开关（对齐 VS Code 搜索面板的 Aa / .* 按钮） -->
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
        <button class="vs-sp-toggle" :class="{ on: regex }" :title="t('vsGrepRegex')" @click="toggleRegex">
          <span>.*</span>
        </button>
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

    <!-- 结果列表：按文件分组（文件头可折叠 + 命中计数徽标），点击命中行打开文件并跳到该行 -->
    <div v-if="outcome" class="vs-sp-list">
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
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * 左栏「搜索」tab：全局内容搜索（host /grep，grep 式按行命中）。
 *
 * - 结果按文件分组：文件头显示 文件名 + 所在目录 + 命中数徽标，点击折叠/展开命中行；
 * - 命中行显示行号 + 高亮匹配片段，点击 → emit("open", rel, ln) 由父组件打开文件并跳到该行；
 * - 搜索防抖 300ms 自动触发，Enter 立即执行；大小写（Aa）与正则（.*）可切换。
 * - 命中文件默认全部展开（数量少时）；超过 8 个文件时默认收起，避免长列表刷屏。
 */
import { onBeforeUnmount, ref, watch } from "vue";
import * as api from "../../../composables/core/useApi";
import { t } from "../../../composables/core/i18n";
import Icon from "../../common/Icon.vue";

type Outcome = Awaited<ReturnType<typeof api.grep>>;

const props = defineProps<{ projectDir: string }>();

const emit = defineEmits<{
  /** 点击命中行：rel = 相对路径（'/' 分隔），ln = 1 起始行号。 */
  (e: "open", rel: string, ln: number): void;
}>();

const q = ref("");
const caseSensitive = ref(false);
const regex = ref(false);
const searching = ref(false);
const searched = ref(false);
const outcome = ref<Outcome | null>(null);
/** 展开的文件集合（rel）。 */
const openFiles = ref(new Set<string>());

let seq = 0;
let timer = 0;

/** 执行搜索（带序号防陈旧响应）。 */
async function run(): Promise<void> {
  const my = ++seq;
  const needle = q.value.trim();
  if (needle.length < 2) {
    outcome.value = null;
    searched.value = false;
    searching.value = false;
    return;
  }
  searching.value = true;
  try {
    const r = await api.grep(needle, {
      path: props.projectDir,
      caseSensitive: caseSensitive.value,
      regex: regex.value,
    });
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
    if (my === seq) searching.value = false;
  }
}

/** 输入防抖 300ms 自动搜索。 */
function onInput(): void {
  if (timer) window.clearTimeout(timer);
  timer = window.setTimeout(() => void run(), 300);
}

function toggleCase(): void {
  caseSensitive.value = !caseSensitive.value;
  if (searched.value) void run();
}
function toggleRegex(): void {
  regex.value = !regex.value;
  if (searched.value) void run();
}
function toggleFile(rel: string): void {
  const next = new Set(openFiles.value);
  if (next.has(rel)) next.delete(rel);
  else next.add(rel);
  openFiles.value = next;
}

/** 项目目录变化时重置结果（旧项目的结果不再有意义）。 */
watch(
  () => props.projectDir,
  () => {
    outcome.value = null;
    searched.value = false;
    openFiles.value = new Set();
  },
);

onBeforeUnmount(() => {
  if (timer) window.clearTimeout(timer);
});

/** 命中行按匹配片段切分（用于 <mark> 高亮）；与 host 同一匹配语义（大小写/正则跟随开关）。 */
function segments(text: string): Array<{ t: string; hit: boolean }> {
  const needle = q.value.trim();
  if (!needle) return [{ t: text, hit: false }];
  let re: RegExp;
  try {
    re = regex.value ? new RegExp(needle, caseSensitive.value ? "g" : "gi") : new RegExp(needle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), caseSensitive.value ? "g" : "gi");
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
.vs-sp-head {
  flex: 0 0 auto;
  padding: 6px 8px 4px;
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
  border-color: var(--dsh-accent, #238636);
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
  color: var(--dsh-accent, #3fb950);
  background: var(--dsh-hover, rgba(255, 255, 255, 0.08));
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
