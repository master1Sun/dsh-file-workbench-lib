<!--
  提交图谱列表：左侧用 SVG 画分支泳道（圆点 + 贯穿线 + 合并扇形），
  右侧是提交标题、引用徽标、作者/时间与短哈希。点击某行向上抛出选中事件。
-->
<template>
  <div class="fw-graph">
    <button
      v-for="r in rows"
      :key="r.commit.hash"
      class="fw-graph-row"
      :class="{ active: r.commit.hash === active }"
      :title="r.commit.subject"
      @click="$emit('select', r.commit)"
    >
      <!-- 分支图形：宽度按本行泳道数动态计算（限制最大列数，避免挤压文字） -->
      <span class="fw-graph-lanes" :style="{ width: `${Math.min(r.width, MAX_LANES) * LANE_W}px` }">
        <svg :width="Math.min(r.width, MAX_LANES) * LANE_W" :height="ROW_H" aria-hidden="true">
          <!-- 贯穿本行的其它泳道（连到下一行） -->
          <line
            v-for="(l, i) in visibleThrough(r)"
            :key="'t' + i"
            :x1="x(l.lane)"
            :y1="0"
            :x2="x(l.lane)"
            :y2="ROW_H"
            :stroke="laneColorOf(l.color)"
          />
          <!-- 圆点上方的竖线（新出现的泳道不画，避免“凭空冒出”） -->
          <line
            v-if="r.topLine && r.lane < MAX_LANES"
            :x1="x(r.lane)"
            :y1="0"
            :x2="x(r.lane)"
            :y2="ROW_H / 2"
            :stroke="laneColorOf(r.laneColor)"
          />
          <!-- 连向父提交的线：同泳道直连，跨泳道走贝塞尔弧 -->
          <template v-for="(b, i) in visibleBends(r)" :key="'b' + i">
            <line
              v-if="b.from === b.to"
              :x1="x(b.from)"
              :y1="ROW_H / 2"
              :x2="x(b.to)"
              :y2="ROW_H"
              :stroke="laneColorOf(b.color)"
            />
            <path
              v-else
              :d="bendPath(b.from, b.to)"
              fill="none"
              :stroke="laneColorOf(b.color)"
            />
          </template>
          <!-- 提交圆点：HEAD 用实心大点 + 描边，其余为小点 -->
          <circle
            v-if="r.lane < MAX_LANES"
            :cx="x(r.lane)"
            :cy="ROW_H / 2"
            :r="isHead(r) ? 4.5 : 3.5"
            :fill="laneColorOf(r.laneColor)"
            :stroke="isHead(r) ? 'var(--dsh-bg, #0d1117)' : 'none'"
            stroke-width="1.5"
          />
        </svg>
      </span>

      <span class="fw-graph-main">
        <span class="fw-graph-subject">{{ r.commit.subject }}</span>
        <span v-if="r.commit.refs.length" class="fw-graph-refs">
          <span v-for="rf in r.commit.refs" :key="rf.kind + rf.label" class="fw-graph-ref" :class="'rf-' + rf.kind">
            <icon :name="rf.kind === 'tag' ? 'tag' : 'git'" :size="9" />
            {{ rf.label }}
          </span>
        </span>
      </span>

      <span class="fw-graph-meta">{{ r.commit.author }}<span class="fw-graph-dot">·</span>{{ r.commit.date }}</span>
      <span class="fw-graph-hash">{{ r.commit.short }}</span>
    </button>
    <div v-if="!rows.length" class="fw-graph-empty">{{ empty }}</div>
  </div>
</template>

<script setup lang="ts">
import Icon from "../../common/Icon.vue";
import { LANE_W, laneColorOf, type GraphBend, type GraphLine, type GraphRow } from "../../../composables/domain/gitGraph";

defineProps<{ rows: GraphRow[]; active?: string; empty: string }>();
defineEmits<{ (e: "select", c: GraphRow["commit"]): void }>();

/** 行高（与样式里的行高保持一致，SVG 坐标直接用它换算）。 */
const ROW_H = 28;
/** 最多绘制多少列泳道（超出部分不画线，仅靠缩进提示，避免列表被挤没）。 */
const MAX_LANES = 8;

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
function visibleThrough(r: GraphRow): GraphLine[] {
  return r.through.filter((l) => l.lane < MAX_LANES);
}
function visibleBends(r: GraphRow): GraphBend[] {
  return r.bends.filter((b) => b.from < MAX_LANES && b.to < MAX_LANES);
}
function isHead(r: GraphRow): boolean {
  return r.commit.refs.some((rf) => rf.kind === "head");
}
</script>

<style scoped>
.fw-graph {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  min-height: 0;
  flex: 1 1 auto;
}
.fw-graph-row {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 0 8px;
  min-height: 28px;
  border: none;
  background: transparent;
  color: var(--dsh-fg, #c9d1d9);
  font: inherit;
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  text-align: left;
  cursor: pointer;
  border-radius: 4px;
}
.fw-graph-row:hover { background: var(--dsh-hover, rgba(48, 54, 61, 0.5)); }
.fw-graph-row.active {
  background: var(--dsh-hover, rgba(48, 54, 61, 0.9));
  box-shadow: inset 2px 0 0 var(--dsh-accent, #238636);
}
.fw-graph-lanes {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  line-height: 0;
}
.fw-graph-lanes svg { stroke-width: 2; stroke-linecap: round; }
.fw-graph-main {
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 6px;
  overflow: hidden;
}
.fw-graph-subject {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.fw-graph-refs { display: inline-flex; align-items: center; gap: 4px; flex: 0 0 auto; }
.fw-graph-ref {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  height: 15px;
  padding: 0 5px;
  border-radius: 7px;
  font-size: calc(10px * var(--dsh-fs-scale, 1));
  line-height: 1;
  max-width: 160px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border: 1px solid transparent;
}
/* 引用徽标配色：HEAD（当前分支）最醒目，远程/标签各自区分 */
.fw-graph-ref.rf-head {
  background: color-mix(in srgb, var(--dsh-accent, #238636) 22%, transparent);
  border-color: color-mix(in srgb, var(--dsh-accent, #238636) 55%, transparent);
  color: var(--dsh-accent, #238636);
  font-weight: 600;
}
.fw-graph-ref.rf-branch {
  background: color-mix(in srgb, #58a6ff 18%, transparent);
  border-color: color-mix(in srgb, #58a6ff 45%, transparent);
  color: #79c0ff;
}
.fw-graph-ref.rf-remote {
  background: color-mix(in srgb, #bc8cff 16%, transparent);
  border-color: color-mix(in srgb, #bc8cff 42%, transparent);
  color: #d2a8ff;
}
.fw-graph-ref.rf-tag {
  background: color-mix(in srgb, #d29922 18%, transparent);
  border-color: color-mix(in srgb, #d29922 45%, transparent);
  color: #e3b341;
}
.fw-graph-meta {
  flex: 0 0 auto;
  color: var(--dsh-fg-weak, #8b949e);
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  white-space: nowrap;
}
.fw-graph-dot { margin: 0 4px; opacity: 0.6; }
.fw-graph-hash {
  flex: 0 0 auto;
  font-family: var(--dsh-mono, ui-monospace, SFMono-Regular, Consolas, monospace);
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  color: var(--dsh-fg-weak, #8b949e);
  opacity: 0.85;
}
.fw-graph-empty {
  padding: 12px 10px;
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  color: var(--dsh-fg-weak, #8b949e);
}
</style>
