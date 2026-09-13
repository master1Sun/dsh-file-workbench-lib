/**
 * Git 面板的纯数据层：解析 git 命令输出 + 计算提交图谱的「泳道」（lane）。
 *
 * 与宿主解耦：本文件只做字符串 → 结构化数据的转换，不发请求、不碰 DOM，
 * 便于单独推演图谱算法（TortoiseGit / gitk 同类的分支线可视化）。
 */
/** git 输出字段分隔符（`%x1f`，避免与提交信息里的字符冲突）。 */
export const GIT_SEP = "\u001f";

/** 提交记录（对应 `git log --pretty=format:...` 的一行）。 */
export interface GitCommit {
  hash: string;
  short: string;
  author: string;
  email: string;
  /** 提交时间戳（秒）。 */
  ts: number;
  /** 相对时间文本，如 “4 days ago”。 */
  date: string;
  subject: string;
  parents: string[];
  refs: RefChip[];
}

/** 引用徽标：HEAD（当前分支）/ 本地分支 / 远程分支 / 标签。 */
export interface RefChip {
  label: string;
  kind: "head" | "branch" | "remote" | "tag";
}

/**
 * `git log` 的输出格式：hash, short, author, email, ts, relTime, subject, parents, refs。
 * 父提交必须用 `%P`（完整哈希）：`%p` 是缩写形式，与 `%H` 对不上会让泳道匹配失败、
 * 把线性历史画成一条条阶梯。
 */
export const LOG_FORMAT = [
  "%H",
  "%h",
  "%an",
  "%ae",
  "%at",
  "%ar",
  "%s",
  "%P",
  "%D",
].join("%x1f");

/** 提交详情格式：在 log 字段基础上追加提交正文（`%b` 放最后，正文含换行不影响前面的字段）。 */
export const SHOW_FORMAT = ["%H", "%h", "%an", "%ae", "%at", "%ar", "%P", "%D", "%s", "%b"].join("%x1f");

/** 解析 `git refs` 字段（`%D`）：`HEAD -> main, origin/main, tag: v1.0`。 */
export function parseRefs(raw: string): RefChip[] {
  const text = raw.trim();
  if (!text) return [];
  return text
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => {
      if (s.startsWith("HEAD -> ")) return { label: s.slice(8), kind: "head" as const };
      if (s === "HEAD") return { label: "HEAD", kind: "head" as const };
      if (s.startsWith("tag: ")) return { label: s.slice(5), kind: "tag" as const };
      if (s.includes("/")) return { label: s, kind: "remote" as const };
      return { label: s, kind: "branch" as const };
    });
}

/** 解析多行提交列表输出。 */
export function parseLog(out: string): GitCommit[] {
  const list: GitCommit[] = [];
  for (const line of out.split("\n")) {
    if (!line.trim()) continue;
    const f = line.split(GIT_SEP);
    if (f.length < 9) continue;
    const parents = (f[7] ?? "").trim();
    list.push({
      hash: f[0],
      short: f[1],
      author: f[2],
      email: f[3],
      ts: Number(f[4]) || 0,
      date: f[5],
      subject: f[6],
      parents: parents ? parents.split(/\s+/) : [],
      refs: parseRefs(f[8] ?? ""),
    });
  }
  return list;
}

/** 单条提交详情（含正文）。 */
export interface GitCommitDetail extends GitCommit {
  body: string;
}

/** 解析 `git show -s --format=SHOW_FORMAT` 的单条记录。 */
export function parseShow(out: string): GitCommitDetail | null {
  const f = out.split(GIT_SEP);
  if (f.length < 9) return null;
  const parents = (f[6] ?? "").trim();
  return {
    hash: f[0],
    short: f[1],
    author: f[2],
    email: f[3],
    ts: Number(f[4]) || 0,
    date: f[5],
    subject: f[8],
    parents: parents ? parents.split(/\s+/) : [],
    refs: parseRefs(f[7] ?? ""),
    body: f.slice(9).join(GIT_SEP).trim(),
  };
}

/** 单个文件的增删统计（`git diff-tree --numstat`）。 */
export interface CommitFileStat {
  path: string;
  add: number;
  del: number;
  binary: boolean;
}

/** 解析 numstat 输出；二进制文件的增删列为 `-`。 */
export function parseNumstat(out: string): CommitFileStat[] {
  const list: CommitFileStat[] = [];
  for (const line of out.split("\n")) {
    if (!line.trim()) continue;
    const parts = line.split("\t");
    if (parts.length < 3) continue;
    const [a, d] = parts;
    const path = parts.slice(2).join("\t");
    if (!path) continue;
    const binary = a === "-" || d === "-";
    list.push({ path, add: binary ? 0 : Number(a) || 0, del: binary ? 0 : Number(d) || 0, binary });
  }
  return list;
}

/** 逐行追溯的一行（`git blame --date=short`）。 */
export interface BlameLine {
  hash: string;
  author: string;
  date: string;
  line: number;
  text: string;
}

/** 解析 blame 输出：`^ab12cd3 (author 2024-01-01   12) content`。 */
export function parseBlame(out: string): BlameLine[] {
  const list: BlameLine[] = [];
  const re = /^(\^?[0-9a-fA-F]{7,40})\s+\((.*?)\s+(\d{4}-\d{2}-\d{2})\s+(\d+)\)\s?(.*)$/;
  for (const raw of out.split("\n")) {
    const m = re.exec(raw);
    if (!m) continue;
    list.push({
      hash: m[1].replace(/^\^/, ""),
      author: m[2].trim(),
      date: m[3],
      line: Number(m[4]) || 0,
      text: m[5] ?? "",
    });
  }
  return list;
}

/** diff 文本的行类型（用于着色）。 */
export type DiffLineKind = "add" | "del" | "meta" | "head" | "ctx";

/** 判断单行 diff 的着色类型。 */
export function diffLineKind(line: string): DiffLineKind {
  if (line.startsWith("+++") || line.startsWith("---")) return "head";
  if (line.startsWith("@@")) return "meta";
  if (
    line.startsWith("diff ") ||
    line.startsWith("index ") ||
    line.startsWith("new file") ||
    line.startsWith("deleted file") ||
    line.startsWith("similarity index") ||
    line.startsWith("rename ") ||
    line.startsWith("Binary files")
  ) {
    return "head";
  }
  if (line.startsWith("+")) return "add";
  if (line.startsWith("-")) return "del";
  return "ctx";
}

/** 分支线配色（在深浅两种主题下都能区分）。 */
export const GRAPH_COLORS = [
  "#58a6ff",
  "#f0883e",
  "#3fb950",
  "#bc8cff",
  "#f778ba",
  "#39c5cf",
  "#d29922",
  "#8b949e",
] as const;

/** 某一行需要绘制的贯穿竖线（连到下一行）。 */
export interface GraphLine {
  lane: number;
  color: number;
}

/** 圆点 → 父提交的连线。 */
export interface GraphBend {
  from: number;
  to: number;
  color: number;
}

/** 图谱中的一行。 */
export interface GraphRow {
  commit: GitCommit;
  /** 圆点所在泳道。 */
  lane: number;
  /** 圆点颜色（泳道颜色索引）。 */
  laneColor: number;
  /** 圆点上方是否有竖线（该泳道在本行之前已存在；新分支头为 false）。 */
  topLine: boolean;
  /** 贯穿本行的其它泳道。 */
  through: GraphLine[];
  /** 连向各父提交的线。 */
  bends: GraphBend[];
  /** 本行涉及的泳道数（决定图形宽度）。 */
  width: number;
}

/**
 * 计算提交图谱的泳道布局（gitk / TortoiseGit 同款思路）：
 * 1. 每个提交优先复用「已有泳道在等它」的位置，否则占用空槽（或追加），保证分支线不交叉；
 * 2. 首个父提交继承当前泳道（线不拐弯），其余父提交各占一条新泳道（合并点因此成扇形）；
 * 3. 颜色按「线的身份」分配并在继承时传递，避免行高压缩后同一分支线跳色。
 */
export function buildGraph(commits: GitCommit[]): GraphRow[] {
  const rows: GraphRow[] = [];
  /** 每条泳道当前等待的提交 hash（null 表示空闲）。 */
  let lanes: (string | null)[] = [];
  /** 每条泳道的颜色索引。 */
  let colors: (number | null)[] = [];
  let nextColor = 0;

  const ensure = (i: number): void => {
    while (lanes.length <= i) {
      lanes.push(null);
      colors.push(null);
    }
  };

  for (const c of commits) {
    let lane = lanes.indexOf(c.hash);
    if (lane < 0) {
      let slot = lanes.indexOf(null);
      if (slot < 0) {
        slot = lanes.length;
        ensure(slot);
      }
      lanes[slot] = c.hash;
      colors[slot] = nextColor++;
      lane = slot;
    }
    const laneColor = colors[lane] ?? 0;
    const beforeHashes = lanes.slice();

    const [first, ...rest] = c.parents;
    /**
     * 先释放本泳道，再决定父提交落在哪一列：
     * - 首个父提交若已被别的泳道等待（本提交是它的第二个孩子，如侧枝汇入主干），
     *   就把线弯过去复用那一列，避免主干整体右移；
     * - 否则首个父提交继承本泳道（主干保持同一列、同一种颜色）；
     * - 其余父提交（合并点）各占一条新泳道。
     */
    lanes[lane] = null;
    colors[lane] = null;
    if (first != null && lanes.indexOf(first) < 0) {
      lanes[lane] = first;
      colors[lane] = laneColor;
    }
    for (const p of rest) {
      if (lanes.includes(p)) continue;
      let slot = lanes.indexOf(null);
      if (slot < 0) {
        slot = lanes.length;
        ensure(slot);
      }
      lanes[slot] = p;
      colors[slot] = nextColor++;
    }

    const width = Math.max(beforeHashes.length, lanes.length);
    const through: GraphLine[] = [];
    for (let i = 0; i < width; i++) {
      if (i === lane) continue;
      if ((beforeHashes[i] ?? null) != null && (lanes[i] ?? null) != null) {
        through.push({ lane: i, color: colors[i] ?? 0 });
      }
    }
    const bends: GraphBend[] = [];
    for (const p of c.parents) {
      const to = lanes.indexOf(p);
      if (to >= 0) bends.push({ from: lane, to, color: colors[to] ?? laneColor });
    }
    rows.push({ commit: c, lane, laneColor, topLine: beforeHashes[lane] != null, through, bends, width });

    // 收紧尾部空泳道，避免泳道号随合并不断增长
    while (lanes.length && lanes[lanes.length - 1] === null) {
      lanes.pop();
      colors.pop();
    }
  }
  return rows;
}

/** 泳道 → 图形 x 坐标（列宽）。 */
export const LANE_W = 14;

/** 取某泳道颜色。 */
export function laneColorOf(i: number): string {
  return GRAPH_COLORS[i % GRAPH_COLORS.length];
}
