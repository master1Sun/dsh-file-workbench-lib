/**
 * SSH 远端主机列表 + 连接状态（前端共享状态）。
 *
 * 设置面板（增删改）与导航树（入口展示）都要用同一份列表：设置里添加主机后，
 * 导航树必须立刻出现该入口，故收敛为模块级单例 + 显式刷新函数，避免两边各存一份
 * 导致「加了却在树上看不到」。
 *
 * 列表来自 `/ssh/hosts`，已由 host 抹去机密（只有 authType 与 hasSecret 标记）。
 * 状态由推送通道（WebSocket）下发：host 按固定间隔复用连接池的常驻连接跑一次 echo，
 * 只推**变化**；即时的单次探测走同一通道的显式检查。两者共用一条长连接，
 * 不再各开 REST 轮询（见 `composables/core/push.ts` 的说明）。
 * 通道不可用时（被中间代理拦掉 / 宿主较旧）自动回落 REST 兜底，见 `ensureFallbackPoller`。
 */
import { reactive, ref } from "vue";
import * as api from "../composables/core/useApi";
import { checkSshNow, isPushOnline, onSshStatus, setSshWatchIds } from "../composables/core/push";
import type { TermSshInfo } from "../composables/domain/terminalStore";

/** 已配置的远端主机（无主机时为空数组，不代表加载失败）。 */
export const sshHosts = ref<api.SshHostPublic[]>([]);
/** 首次加载是否完成（用于区分「还没拉」与「确实没有」）。 */
export const sshLoaded = ref(false);

/** 连接状态：unknown 未探测 / checking 探测中 / online 已连接 / offline 断开。 */
export type SshState = "unknown" | "checking" | "online" | "offline";

/** hostId → 最近一次探测结果。 */
export const sshStatus = ref<Record<string, { state: SshState; error?: string }>>({});

/** 某主机当前的连接状态（未探测过为 unknown）。 */
export function sshStateOf(id: string): SshState {
  return sshStatus.value[id]?.state ?? "unknown";
}

/** 某主机最近一次探测的失败原因（无则空串）：点红灯时给出可读的悬停提示。 */
export function sshErrorOf(id: string): string {
  return sshStatus.value[id]?.error ?? "";
}

/** 探测单个主机并更新状态；返回是否在线。 */
export async function pingSshHost(id: string): Promise<boolean> {
  sshStatus.value = { ...sshStatus.value, [id]: { state: "checking" } };
  // 走推送通道的显式检查（等价于原来的 POST /ssh/ping，但复用同一条长连接）。
  const items = await checkSshNow([id]);
  const r = items[id];
  if (!r) {
    // 推送通道无响应（超时）：如实退回「未探测」，不谎报在线/离线。
    sshStatus.value = { ...sshStatus.value, [id]: { state: "unknown" } };
    return false;
  }
  sshStatus.value = {
    ...sshStatus.value,
    [id]: r.alive ? { state: "online" } : { state: "offline", error: r.error },
  };
  return r.alive;
}

/** 探测全部主机（并行；任一失败不阻断其余）。 */
export async function refreshSshStatus(): Promise<void> {
  const ids = sshHosts.value.map((h) => h.id);
  if (!ids.length) return;
  const next = { ...sshStatus.value };
  for (const id of ids) next[id] = { state: "checking" };
  sshStatus.value = next;
  // 推送通道不可用（被代理拦掉 / 宿主较旧）时直接走 REST，别让灯停在「检测中」直到超时。
  if (!isPushOnline()) {
    await fallbackPingAll();
    return;
  }
  await checkSshNow(ids);
}

/** 重新拉取主机列表；接口不可用时静默降级为空列表（不阻断导航树渲染）。 */
export async function refreshSshHosts(): Promise<void> {
  try {
    const r = await api.sshHosts();
    sshHosts.value = r.hosts ?? [];
    // 清掉已删除主机的状态，避免指示灯残留在列表之外。
    const alive = new Set(sshHosts.value.map((h) => h.id));
    for (const id of Object.keys(sshStatus.value)) {
      if (!alive.has(id)) delete sshStatus.value[id];
    }
    // 增删主机后同步订阅集合：新增的立刻会被探测并回推，删除的不再占用探测。
    syncSshWatch();
  } catch {
    sshHosts.value = [];
  } finally {
    sshLoaded.value = true;
  }
}

/**
 * 连接状态推送订阅（模块级单例，不随面板卸载退订 —— 状态本就是全局的）。
 *
 * 取代原先每 30s 一次的轮询：订阅一次后由 host 按自己的节奏探测并只推**变化**，
 * 新接入的主机由 host 无条件回推一次，指示灯不必等一个采样周期。
 * 无主机时订阅集合为空，推送通道会自动收起，不留空连接。
 */
let watching = false;
export function startSshStatusWatch(): void {
  if (!watching) {
    watching = true;
    onSshStatus((items) => {
      const next = { ...sshStatus.value };
      for (const [id, st] of Object.entries(items)) {
        next[id] = st.alive ? { state: "online" } : { state: "offline", error: st.error };
      }
      sshStatus.value = next;
    });
  }
  syncSshWatch();
  ensureFallbackPoller();
}

/**
 * 推送通道不可用时的兜底探测（REST `/ssh/ping`）。
 *
 * 长连接可能被中间代理拦掉、或宿主是未升级的旧版本（没有 `/push` 路由）——此时订阅永远
 * 收不到推送，而症状是**完全静默**：指示灯一直停在「未检测」且无任何报错。故用宿主侧仍
 * 保留的 REST 接口兜底，保证「通道坏了也只是慢一点，不会永远不亮」。
 *
 * 代价：通道正常时每次 tick 只做一次 `readyState` 判断，零网络请求。
 */
const FALLBACK_POLL_MS = 30_000;
let fallbackTimer: ReturnType<typeof setInterval> | null = null;

async function fallbackPingAll(): Promise<void> {
  const hosts = sshHosts.value.slice();
  if (!hosts.length) return;
  await Promise.all(
    hosts.map(async (h) => {
      const r = await api.sshPing(h.id).catch(() => null);
      if (!r) return;
      sshStatus.value = {
        ...sshStatus.value,
        [h.id]: r.alive ? { state: "online" } : { state: "offline", error: r.error },
      };
    }),
  );
}

function ensureFallbackPoller(): void {
  if (fallbackTimer) return;
  fallbackTimer = setInterval(() => {
    if (isPushOnline()) return; // 通道正常：推送会覆盖，不发冗余请求
    void fallbackPingAll();
  }, FALLBACK_POLL_MS);
}

/** 把当前主机集合同步给推送通道（增删主机、首次启动都要调）。 */
function syncSshWatch(): void {
  if (!watching) return;
  setSshWatchIds("ssh-store", sshHosts.value.map((h) => h.id));
}

/** 解析远端引用串（`ssh://<hostId>/<remote>`）；非远端引用返回 null。 */
export function parseSshRef(ref: string): { hostId: string; remote: string } | null {
  if (!ref.startsWith("ssh://")) return null;
  const rest = ref.slice("ssh://".length);
  const slash = rest.indexOf("/");
  const hostId = slash === -1 ? rest : rest.slice(0, slash);
  if (!hostId) return null;
  const remote = slash === -1 ? "/" : rest.slice(slash) || "/";
  return { hostId, remote: remote.replace(/\/+$/, "") || "/" };
}

/**
 * 远端引用 → 本机终端里可直接执行的 SSH 登录命令：登录并 `cd` 到该远端目录。
 *
 * 终端是本机 shell（ConPTY 跑 cmd/powershell），远端没有可交互的 shell 通道，所以
 * 「在终端打开」落到远端目录时改为执行本机 ssh 客户端登录 —— 口令/密钥交互、
 * known_hosts 与后续会话都由系统 ssh 接管。主机未登记（或列表未加载）时返回空串。
 */
export function sshLoginCommandOf(ref: string, shell: "cmd" | "powershell" = "cmd"): string {
  const parsed = parseSshRef(ref);
  if (!parsed) return "";
  const h = sshHosts.value.find((x) => x.id === parsed.hostId);
  if (!h) return "";
  const key = h.authType === "key" && h.privateKeyPath ? `-i "${h.privateKeyPath}" ` : "";
  // 远端是 POSIX shell：路径用**单引号**包裹 —— 单引号对 cmd、PowerShell、CRT 都无特殊含义，
  // 可逐层原样透传；路径内部的单引号按 POSIX 规则写作 '\''。这样命令体里不含任何 `"`。
  const dir = `'${parsed.remote.replace(/'/g, "'\\''")}'`;
  // StrictHostKeyChecking=accept-new：未知主机自动入库（与 host 侧 TOFU 一致），
  // 指纹变更仍会拒绝，避免首次登录卡在 yes/no 确认上。
  const body = `cd ${dir} && exec bash -l`;
  // 命令体整体用哪层引号包住，必须随本机 shell 切换（Windows PowerShell 5.1 上实测的结论）：
  // - cmd：双引号包住即可（既有行为），CRT 解析后仍是单个参数；
  // - powershell：必须改用**单引号**包住。PS 5.1 向原生程序传参时不会为内层 `"` 补反斜杠转义，
  //   内层引号会被 CRT 当成分隔符吃掉 —— 路径一旦含空格就被拆成两个参数（ssh 只拿到 `cd /root/My`）；
  //   而且裸露的 `&&` 在 5.1 里不是合法语句分隔符，会直接抛 ParserError。
  //   PS 单引号串里的 `'` 需翻倍写（''）。命令体若含 `"`（路径带引号的极端情形）再补一层反斜杠
  //   转义交给 CRT 还原；cmd 分支同理。
  const quoted = body.replace(/"/g, '\\"');
  const remote =
    shell === "powershell" ? `'${quoted.replace(/'/g, "''")}'` : `"${quoted}"`;
  return `ssh ${key}-p ${h.port || 22} -o StrictHostKeyChecking=accept-new -t ${h.user}@${h.host} ${remote}`;
}

/** 远端根引用串（`ssh://<hostId>/`）：文件工作台里「远端目录」的唯一身份表示。 */
export function sshRootRef(hostId: string): string {
  return `ssh://${hostId}/`;
}

/**
 * 远端引用 → **ssh 直连终端会话**的目标（hostId + 远端目录 + 展示标签）；非远端或主机未登记返回 null。
 *
 * 与 `sshLoginCommandOf` 并列且**优先**：直连由宿主用已存凭据自动登录，不需要本机 ssh 客户端、
 * 也不弹口令。后者只作为降级预案（直连失败时回退到本机终端敲 ssh 命令）。
 * 主机列表未加载时会先 `ensureSshHosts()`，否则会把「能直连」误判成「主机没配」。
 */
export function sshTerminalTargetOf(ref: string): TermSshInfo | null {
  const parsed = parseSshRef(ref);
  if (!parsed) return null;
  const h = sshHosts.value.find((x) => x.id === parsed.hostId);
  if (!h) return null;
  return {
    hostId: h.id,
    remote: normalizeSshRemote(parsed.remote),
    label: h.name || `${h.user}@${h.host}`,
  };
}

/** 远端目录规范化：绝对 POSIX 路径、去末尾斜杠（`/` 保留）——与宿主 `normalizeRemote` 同规则。 */
export function normalizeSshRemote(raw: string | undefined): string {
  const t = (raw ?? "").trim().replace(/\\/g, "/");
  if (!t) return "/";
  return t.startsWith("/") ? t.replace(/\/+$/, "") || "/" : `/${t.replace(/\/+$/, "")}`;
}

/** 远端引用里的主机 id（`ssh://<hostId>/<remote>` → `<hostId>`）；非远端返回空串。 */
export function sshHostIdOf(ref: string): string {
  if (!ref.startsWith("ssh://")) return "";
  const rest = ref.slice("ssh://".length);
  const slash = rest.indexOf("/");
  return (slash === -1 ? rest : rest.slice(0, slash)).trim();
}

/** 远端引用里的远端路径部分（POSIX，根为 `/`）；非远端返回空串。 */
export function sshRemotePathOf(ref: string): string {
  if (!ref.startsWith("ssh://")) return "";
  const rest = ref.slice("ssh://".length);
  const slash = rest.indexOf("/");
  const remote = slash === -1 ? "" : rest.slice(slash);
  return remote.replace(/\/+$/, "") || "/";
}

/** 远端引用 → 可读主机标签（显示名优先，其次 `user@host`，列表未加载时退回 hostId）。 */
export function sshLabelOf(ref: string): string {
  const id = sshHostIdOf(ref);
  const h = id ? sshHosts.value.find((x) => x.id === id) : undefined;
  if (h) return h.name || `${h.user}@${h.host}`;
  return id || ref;
}

/**
 * 远端引用 → 项目栏 / 项目树用的可读标签：**保留远端路径**，不再只显示主机名。
 *
 * `sshLabelOf` 在面包屑首段用（只取主机名，段与段用 `/` 串联更自然）；而编辑器把整个
 * `ssh://<id>/<remote>` 当作「项目根」，根名若只显示主机名会丢失用户打开的具体位置
 * （如 `ssh://id/etc/nginx` 应显示成 `MyServer · /etc/nginx`，而非只剩 `MyServer`）。
 * 远端根为 `/` 时退回主机名（与 `sshLabelOf` 一致）。
 */
export function sshProjectLabelOf(ref: string): string {
  const id = sshHostIdOf(ref);
  if (!id) return ref;
  const h = sshHosts.value.find((x) => x.id === id);
  const name = h ? h.name || `${h.user}@${h.host}` : id;
  const remote = sshRemotePathOf(ref);
  return remote && remote !== "/" ? `${name} · ${remote}` : name;
}

/**
 * 远端引用的上一级：远端根（`ssh://<id>/`）之上没有目录，返回空串（调用方据此退回
 * 「我的电脑」层）；其余按 POSIX 去掉最后一段。
 *
 * 不能复用本地路径库：`ssh://…` 被 win32 语义吃掉后会变成 `C:\ssh:\…` 这类畸形路径。
 */
export function sshParentOf(ref: string): string {
  const id = sshHostIdOf(ref);
  if (!id) return "";
  const remote = sshRemotePathOf(ref);
  if (!remote || remote === "/") return "";
  const cut = remote.lastIndexOf("/");
  const parent = cut <= 0 ? "/" : remote.slice(0, cut);
  return `ssh://${id}${parent === "/" ? "/" : parent}`;
}

/** 远端引用拼子项名（POSIX 分隔；本地路径沿用 win32 `\`）。 */
export function sshJoinRef(ref: string, name: string): string {
  return `${ref.replace(/\/+$/, "")}/${name}`;
}

/**
 * 首次使用时兜底拉取主机列表：列表目前只在导航树 / 设置面板挂载时加载，
 * 而「文件编辑器」等场景可能两者都没挂载 —— 没有这份列表就无法把远端引用
 * 还原成 `user@host`（也就拼不出 ssh 登录命令），故这里按需补一次。
 */
export async function ensureSshHosts(force = false): Promise<void> {
  if (sshLoaded.value && !force) return;
  await refreshSshHosts();
}

/**
 * 远端引用串（`ssh://<hostId>/<remote>`）拆成可点击的面包屑段；非远端引用返回 null，
 * 由调用方回落到本地路径的拆分语义。
 *
 * 存在的理由：本地面包屑按 win32 语义切 `/`，`ssh://id/root/x` 会被切成 `ssh:` 段并拼出
 * `C:\ssh:\id` 这类畸形路径，点一下就 ENOENT。这里按引用语义切，首段落回远端根。
 */
export function sshCrumbsOf(p: string): { name: string; path: string }[] | null {
  if (!p.startsWith("ssh://")) return null;
  const rest = p.slice("ssh://".length);
  const slash = rest.indexOf("/");
  const hostId = slash === -1 ? rest : rest.slice(0, slash);
  if (!hostId) return null;
  const remote = slash === -1 ? "" : rest.slice(slash);
  const h = sshHosts.value.find((x) => x.id === hostId);
  const label = h ? h.name || `${h.user}@${h.host}` : hostId;
  const out: { name: string; path: string }[] = [{ name: label, path: `ssh://${hostId}/` }];
  let cur = "";
  for (const seg of remote.split("/").filter(Boolean)) {
    cur += `/${seg}`;
    out.push({ name: seg, path: `ssh://${hostId}${cur}` });
  }
  return out;
}

/* ── SSH 主机增/改对话框（受 CommandBar「新建 ▾ → 添加 SSH 主机」与导航树右键「编辑」控制） ── */
export const sshDialog = reactive<{ open: boolean; editingId: string | null }>({ open: false, editingId: null });

/** 打开「添加主机」对话框（新建模式）。 */
export function openSshAddDialog(): void {
  sshDialog.editingId = null;
  sshDialog.open = true;
}

/** 打开「编辑主机」对话框（编辑模式，预填该主机配置）。 */
export function openSshEditDialog(id: string): void {
  sshDialog.editingId = id;
  sshDialog.open = true;
}

/** 关闭对话框。 */
export function closeSshDialog(): void {
  sshDialog.open = false;
}
