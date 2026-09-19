/**
 * 用户 / 内置插件的**运行时加载与注册表**（模块级单例，跨面板卸载重建存活）。
 *
 * 目标：让「插件管理」视图可以导入并即时执行 `.js` 插件——无需 cordis profile 安装、无需重启。
 * 支持的插件形态就是本仓库外部插件套件的产物：自包含 cjs bundle，顶层调用
 *   window.__ModuleLoader__.load({ id, factory: (require) => ({ apply, inject }) })
 * 因此这里装一个 __ModuleLoader__ shim 接住 load()，取出 factory 后直接 apply()。
 * 也兼容「极简形态」：脚本顶层自己调 window.__dshFileWorkbenchVSCode__.activityBar.register(...)。
 *
 * 归属与撤销：apply() 前后对四张贡献点注册表（view/command/statusbar/扩展菜单）做 id 快照 diff，
 * 新增项即该插件的贡献清单；停用时逐条 unregister。这样运行期导入的插件可被干净卸载。
 *
 * 信任边界：eval 任意 JS = 任意页面脚本权限（与浏览器控制台同级）。用户已确认接受此模型。
 */
import { ref } from "vue";
import { apiBase } from "../composables/core/useApi";
import { toast } from "../composables/core/toast";
import { t } from "../composables/core/i18n";
import { isSourceForm, transformSourceToBundle, extractMeta, type PluginManifest } from "../../shared/plugin-meta";
import {
  ACTIVITY_API_VERSION,
  listActivityViews,
  unregisterActivityView,
  listWorkbenchActivityViews,
  unregisterWorkbenchActivityView,
  listCommands,
  unregisterCommand,
  listStatusBarItems,
  unregisterStatusBarItem,
  listExtensionMenuItems,
  unregisterExtensionMenuItem,
} from "./activityBar";

/** 内置插件种子（运行时经 host /plugin-index + bundle manifest 推导，不再构建期内嵌）。 */
interface BuiltinSeed {
  /** 稳定 key：插件裸名（plugins/<name>.js 的文件名）。 */
  id: string;
  name: string;
  version: string;
  description: string;
  nameEn: string;
  descriptionEn: string;
  /** 相对获取路径引用（真源码由 host /plugin-src 提供）。 */
  code: string;
}

/** 插件来源：内置种子 / 本地文件 / URL 下载。 */
export type PluginSource = "builtin" | "file" | "url";

export interface UserPlugin {
  /** 稳定 key：优先取 loader id / 文件名去扩展名。 */
  id: string;
  /** 显示名：内置种子与带清单的外部插件取 manifest.name；无清单时回退文件名/URL 名。 */
  name: string;
  source: PluginSource;
  /** file=文件名；url=原始地址；builtin=loader id。 */
  origin?: string;
  version?: string;
  /** 插件描述：内置种子与带清单的外部插件均经 manifest.description 填充。 */
  description?: string;
  /** 英文显示文案（EN 模式用；来自 manifest.nameEn / descriptionEn，缺省回退中文）。 */
  nameEn?: string;
  descriptionEn?: string;
  /** 外部导入=完整插件源码文本（自包含 bundle）；内置种子=相对获取路径 `plugin-src/<id>.js`（启用时经 host 取回，见 resolvePluginCode）。 */
  code: string;
  /** 用户编辑后的源码覆盖（查看器「保存」写入；优先于 code 执行，恢复原版即删除此字段）。 */
  editedCode?: string;
  enabled: boolean;
  /** 至少成功激活过一次（注册到贡献点）。bootstrap 只自动恢复此项，避免从未生效的坏插件每次加载都弹错。 */
  activated?: boolean;
  /** 最近一次加载失败的错误信息；成功时清空。 */
  error?: string;
}

const PERSIST_KEY = "dsh-fw.userPlugins";

const plugins = ref<UserPlugin[]>([]);
/** 每个插件当前占用的贡献点 id（用于停用/移除时精确撤销）。 */
const contributions = new Map<string, ContributionSet>();

export interface ContributionSet {
  views: string[];
  commands: string[];
  status: string[];
  menu: string[];
}

let bootstrapped = false;

/* ------------------------------------------------------------------ 持久化 */

/** 读写插件自身的持久数据：走 host /plugin-data（单文件命名空间，不受 PERSIST_KEYS 白名单约束）。 */
function writePluginData(key: string, value: unknown): Promise<void> {
  return fetch(`${apiBase}/plugin-data`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ k: key, v: value }),
  }).then(() => {}).catch(() => {});
}

async function readPluginData<T>(key: string): Promise<T | null> {
  try {
    const res = await fetch(`${apiBase}/plugin-data?k=${encodeURIComponent(key)}`, { headers: { Accept: "application/json" } });
    const payload = (await res.json().catch(() => null)) as { ok?: boolean; data?: T } | null;
    return payload?.data ?? null;
  } catch {
    return null;
  }
}

/** 落盘快照，返回写入完成的 Promise——调用方 await 可确保刷新前数据已持久化。 */
function persistNow(): Promise<void> {
  return writePluginData(PERSIST_KEY, plugins.value);
}

/* 页面卸载兜底：防抖未触发 / 请求在途时关页会丢最新状态。beacon 由浏览器保证送达，
   且同步排队早于任何随后的 reload——「导入后立刻 F5」也不丢记录与启停状态。 */
if (typeof window !== "undefined") {
  const flushOnUnload = (): void => {
    if (!plugins.value.length) return;
    try {
      // 相对 URL：避免 apiBase 为绝对地址时 beacon 跨源被拦。
      const url = new URL(`${apiBase}/plugin-data`, window.location.href).pathname;
      navigator.sendBeacon(
        url,
        new Blob([JSON.stringify({ k: PERSIST_KEY, v: plugins.value })], { type: "application/json" }),
      );
    } catch {
      /* beacon 不可用：尽力而为 */
    }
  };
  window.addEventListener("beforeunload", flushOnUnload);
  window.addEventListener("pagehide", flushOnUnload);
}

async function readSnapshot(): Promise<UserPlugin[]> {
  const raw = await readPluginData<UserPlugin[]>(PERSIST_KEY);
  return Array.isArray(raw) ? raw : [];
}

/* ------------------------------------------------------- ModuleLoader shim */

/** 插件清单（manifest）：打包产物顶层声明，独立于 factory，读取它不需要执行插件代码。 */
interface LoaderManifest {
  id: string;
  name?: string;
  version?: string;
  description?: string;
  nameEn?: string;
  descriptionEn?: string;
}

interface LoaderModule {
  id: string;
  name?: string;
  version?: string;
  factory: (require: (id: string) => unknown) => { apply?: () => void; inject?: unknown };
}

/**
 * 本次加载用的隔离 ModuleLoader（模块级，跨 enable 复用）。
 *
 * ⚠️ 关键：**不能**把 load() 接到 cordis 真实的 `window.__ModuleLoader__` 上。首批 5 个插件同时
 * 以原生 cordis client module 形态装在 profile 里，其真实 loader 早已登记过这些 id；若运行期再
 * eval 同名内置种子，就会撞上 cordis 的「duplicate factory registration」抛错、启用静默失败。
 * 故这里自建一份私有 map，eval 期间临时把 window.__ModuleLoader__ 换成它（见 execPlugin），彻底避开冲突。
 */
const loaderMap = new Map<string, LoaderModule>();
/** eval 期间捕获的清单（按 loader id）：内置种子启用后据此刷新显示元数据。 */
const manifestMap = new Map<string, LoaderManifest>();
function ourShim(): { load(m: LoaderModule): void; manifest(m: LoaderManifest): void } {
  return {
    load(m: LoaderModule): void { loaderMap.set(m.id, m); },
    manifest(m: LoaderManifest): void { if (m?.id) manifestMap.set(m.id, m); },
  };
}

/**
 * 从一段插件 bundle 文本中只读取其 manifest（不执行任何插件代码）：
 * 用隔离 shim 跑一遍顶层声明即可——manifest() 是纯数据回调。无 manifest 时返回 null
 * （外部极简插件没有清单，列表回退文件名展示）。
 */
export function readPluginManifest(code: string): LoaderManifest | null {
  const w = window as unknown as { __ModuleLoader__?: unknown };
  const realLoader = w.__ModuleLoader__;
  // 独立小 map：本次 eval 只可能登记这段代码的清单，取最后一个即它的。
  const found = new Map<string, LoaderManifest>();
  w.__ModuleLoader__ = {
    load: () => {},
    manifest: (m: LoaderManifest) => { if (m?.id) found.set(m.id, m); },
  };
  try {
    (0, eval)(code);
  } catch {
    /* bundle 顶层若有副作用抛错，manifest 是首条声明，通常已捕获 */
  } finally {
    w.__ModuleLoader__ = realLoader;
  }
  let last: LoaderManifest | null = null;
  for (const m of found.values()) last = m;
  return last;
}

/**
 * 「极简直调形态」插件的清单回退：这类文件没有 `__ModuleLoader__.manifest(...)` 声明，
 * 但常按 plugins/*.js 约定写一份顶层 `const meta = {...}`（为可导入而去掉了 export 关键字）。
 * 这里把它补上 `export` 前缀后复用 pack-core 同源的 extractMeta 静态求值——纯正则读字面量，不执行代码。
 */
function readPlainMeta(code: string, baseName: string): Omit<PluginManifest, "id"> | null {
  if (!/^\s*const\s+meta\s*=\s*\{/m.test(code)) return null;
  try {
    return extractMeta(`export ${code}`, baseName);
  } catch {
    return null;
  }
}

/* ------------------------------------------------------------ 注册表快照 */

function snapshotContributions(): ContributionSet {
  return {
    // ⚠️ 必须并上工作台注册表：dsh-qqbot「QQ 定时消息」等只经 wb.activityBar.register 注入，
    // 漏掉它会让「启用后确认有贡献点」的 diff 对纯 wb 插件恒空 → 250ms 后被撤销（图标时有时无）。
    views: [...listActivityViews().map((v) => v.id), ...listWorkbenchActivityViews().map((v) => v.id)],
    commands: listCommands(),
    status: listStatusBarItems().map((i) => i.id),
    menu: listExtensionMenuItems().map((i) => i.id),
  };
}

function diffContributions(before: ContributionSet, after: ContributionSet): ContributionSet {
  const added = (a: string[], b: string[]) => b.filter((x) => !a.includes(x));
  return {
    views: added(before.views, after.views),
    commands: added(before.commands, after.commands),
    status: added(before.status, after.status),
    menu: added(before.menu, after.menu),
  };
}

function revokeContributions(set: ContributionSet | undefined): void {
  if (!set) return;
  // 视图 id 可能来自编辑器或工作台任一注册表；两边各撤一次（对侧不存在时静默）。
  set.views.forEach((id) => {
    unregisterActivityView(id);
    unregisterWorkbenchActivityView(id);
  });
  set.commands.forEach(unregisterCommand);
  set.status.forEach(unregisterStatusBarItem);
  set.menu.forEach(unregisterExtensionMenuItem);
}

/* ------------------------------------------------------------ 源码静态校验 */

/** 插件源码必须命中的注入契约特征：loader 外壳或直接调用宿主注入 API。 */
const PLUGIN_MARK_RE = /__ModuleLoader__|__dshFileWorkbench(?:VSCode|Workbench)__/;
/** 从 loader bundle 文本里嗅探登记 id（`window.__ModuleLoader__.load({ id: "..."`）。 */
const LOADER_ID_RE = /__ModuleLoader__\.load\(\s*\{\s*id\s*:\s*(["'])((?:(?!\1)[\s\S])*)\1/;
/** 回退特征：打包壳把清单放在 manifest({"id":"dsh-fw.x",...) 首条声明里（load 的 id 可能换行/变形）。 */
const MANIFEST_ID_RE = /__ModuleLoader__\.manifest\(\s*\{\s*"id"\s*:\s*"((?:[^"\\]|\\.)*)"/;

export interface PluginCheckResult {
  ok: boolean;
  /** 静态校验发现的错误；ok=false 时必有值。 */
  error?: string;
  /** loader bundle 声明的登记 id；有则应作为记录主键，避免与文件名分叉导致重复启用。 */
  loaderId?: string;
}

/**
 * 导入前的静态源码检查：拦掉明显不是插件的 .js（普通脚本 / JSON / HTML），并提取 loader id。
 * 只做正则级检查——不执行代码；真正的可激活性由 enablePlugin 的快照 diff 把关。
 */
export function validatePluginSource(code: string): PluginCheckResult {
  if (!code.trim()) return { ok: false, error: t("pmCheckEmpty") };
  // 「源码形态」（plugins/*.js 约定，带顶层 export）也是合法插件——由
  // packSourceIfRaw 现场打包成 loader bundle，这里按特征直接放行。
  if (isSourceForm(code)) return { ok: true };
  const m = code.match(LOADER_ID_RE);
  return {
    ok: PLUGIN_MARK_RE.test(code),
    error: t("pmCheckNotPlugin"),
    loaderId: m?.[2]?.trim() || code.match(MANIFEST_ID_RE)?.[1]?.trim() || undefined,
  };
}

/**
 * 「源码内部自动打包」：识别未打包的 plugins/*.js 源码形态（顶层 export const meta 等），
 * 用与构建期打包（scripts/pack-plugins.mjs）同构的规则（见 shared/plugin-meta）现场包上 __ModuleLoader__ 外壳。
 * 已是 loader bundle / 极简形态时原样返回。抛错 = 源码不符合约定，调用方转成导入失败提示。
 */
function packSourceIfRaw(code: string, baseName: string): { code: string; manifest: PluginManifest | null } {
  if (!isSourceForm(code)) return { code, manifest: null };
  const name = baseName.replace(/\.(c|m)?js$/i, "") || "plugin";
  const { packed, manifest } = transformSourceToBundle(code, name);
  return { code: packed, manifest };
}

/** 插件所需的宿主 API 最低版本：内测阶段契约从 v1 起算，当前全部能力均属 v1。 */
function requiredApiVersion(_code: string): number {
  return 1;
}

/* ------------------------------------------------------------- 执行插件 */

/** 自动补壳模块的登记 id：其 factory.apply 为空函数，注册在包装 eval 时已完成，跳过预检。 */
const WRAPPED_LOADER_ID = "dsh-fw.wrapped-plugin";

/** eval 一段自包含 bundle 并 apply()，返回它新增的贡献点集合。抛错交由上层记录。
 *  ownerPluginId：本次执行的记录主键——同 id 贡献点被其他插件持有时不算本插件新增（防导入
 *  内置插件的原始 js 后，停用/移除该克隆把真内置一并撤销）。 */
function execPlugin(code: string, required = requiredApiVersion(code), ownerPluginId?: string): ContributionSet {
  const w = window as unknown as { __ModuleLoader__?: unknown };
  const realLoader = w.__ModuleLoader__;
  const beforeIds = new Set(loaderMap.keys());
  // 间接 eval：全局作用域执行，令 bundle 顶层的 window.__ModuleLoader__.load(...) 生效。
  // eval 期间把 window.__ModuleLoader__ 换成我们的隔离 shim（避开 cordis 真实 loader 的同名冲突），
  // 结束后原样还原——bundle 顶层 load() 是同步的，故窗口内即可捕获登记。
  w.__ModuleLoader__ = ourShim();
  try {
    (0, eval)(code);
  } finally {
    w.__ModuleLoader__ = realLoader;
  }
  let newIds = [...loaderMap.keys()].filter((x) => !beforeIds.has(x));

  // 无 loader 登记且顶层直调也没产生贡献 → 疑似缺外壳的裸脚本：自动包一层 loader 再执行一次，
  // 让极简插件也获得启停语义（停用即撤销）。PLUGIN_MARK_RE 把关，避免把任意 JS 误包装成假插件。
  if (!newIds.length && PLUGIN_MARK_RE.test(code) && !/__ModuleLoader__\.(?:load|manifest)\s*\(/.test(code)) {
    const wrapped = `window.__ModuleLoader__.load({id:${JSON.stringify(WRAPPED_LOADER_ID)},factory:(require)=>{var module={exports:{}};var exports=module.exports;\n${code}\n;return {apply(){}};}});`;
    w.__ModuleLoader__ = ourShim();
    try {
      (0, eval)(wrapped);
    } finally {
      w.__ModuleLoader__ = realLoader;
    }
    newIds = [...loaderMap.keys()].filter((x) => !beforeIds.has(x));
  }

  // loader 形态：先对每个新模块做一次性「探测预检」（见 probeAndApply），再真跑 apply()。
  const before = snapshotContributions();
  // ⚠️ 「新增」必须按**全局归属**判定，不能只看 loaderMap：同 id 贡献点（如导入内置插件的
  // 原始 js）被 registerActivityView 幂等覆盖后 diff 抓不到 → 空集会被误判成极简形态、
  // 走自动补壳在顶层重复 eval 一遍——内置插件的持久化监听/定时器会双份运行。
  // 本插件此前已登记的 id（重启恢复路径）仍要并回结果集，供停用/撤销时一并回收。
  const ownedElsewhere = new Set<string>();
  for (const [pid, c] of contributions) {
    if (pid === ownerPluginId) continue;
    c.views.forEach((x) => ownedElsewhere.add(x));
    c.commands.forEach((x) => ownedElsewhere.add(x));
    c.status.forEach((x) => ownedElsewhere.add(x));
    c.menu.forEach((x) => ownedElsewhere.add(x));
  }
  newIds = newIds.filter((id) => !ownedElsewhere.has(id));
  const confirms: Promise<void>[] = [];
  for (const id of newIds) {
    const mod = loaderMap.get(id)!;
    // 自动补壳的模块：apply 是空函数，注册已在包装 eval 时完成（或被 PLUGIN_MARK_RE 拒过），无需预检。
    if (id === WRAPPED_LOADER_ID) continue;
    const confirm = probeAndApply(mod, required);
    if (confirm) confirms.push(confirm);
  }
  // 极简形态（顶层直接 register）：上面循环可能为空，diff 仍能抓到 eval 期间已发生的注册。
  const set = diffContributions(before, snapshotContributions());
  if (ownerPluginId) {
    const prev = contributions.get(ownerPluginId);
    if (prev) {
      const uniq = (a: string[], b: string[]) => [...new Set([...a, ...b])];
      set.views = uniq(set.views, prev.views);
      set.commands = uniq(set.commands, prev.commands);
      set.status = uniq(set.status, prev.status);
      set.menu = uniq(set.menu, prev.menu);
    }
  }
  return Object.defineProperty(set, "__confirms", { value: confirms, enumerable: false }) as ContributionSet;
}

/** 收集 execPlugin 附带的迟到注册确认句柄。 */
function confirmsOf(set: ContributionSet): Promise<void>[] {
  return (set as ContributionSet & { __confirms?: Promise<void>[] }).__confirms ?? [];
}

/** 贡献点集合是否为空（无任何新增注册）。 */
function setIsEmpty(s: ContributionSet): boolean {
  return !s.views.length && !s.commands.length && !s.status.length && !s.menu.length;
}

/**
 * 对真实 API 对象**就地**临时替换注册类方法为吞掉桩（引用不变），返回 restore()。
 * 插件闭包若缓存了探测桩，正式 apply 的注册会落进捕获表；restore() 先还原真实方法、
 * 再把吞掉的注册重放进真 registry（同 id 覆盖语义，幂等）。每次现取 window 的插件
 * 走同一入口也无副作用——注册只是晚一拍生效。
 */
function sandboxRealApis(
  realVs: unknown,
  realWb: unknown,
): { restore: () => void } | undefined {
  const vs = realVs as Record<string, Record<string, unknown>> | undefined;
  const wb = realWb as Record<string, Record<string, unknown>> | undefined;
  if (!vs?.activityBar && !wb?.activityBar) return undefined;
  const saved: Array<{ ns: Record<string, unknown>; name: string; key: string; orig: unknown }> = [];
  const noop = (..._: unknown[]): void => {};
  const captured = new Map<string, () => void>();
  const override = (ns: Record<string, unknown> | undefined, name: string, key: string, impl: unknown) => {
    if (!ns) return;
    const target = ns[key];
    if (typeof target !== "function") return;
    saved.push({ ns, name, key, orig: target });
    ns[key] = impl;
  };
  // register 类调用先吞掉并记下「重放」闭包（按 name.key:id 去重，同 id 后写覆盖）。
  // ⚠️ orig 必须在 override 时传入捕获——restore 会先清空 saved 再重放，懒查必落空。
  const swallowRegister = (name: string, key: string, orig: (...a: unknown[]) => unknown) =>
    (item: { id?: string } | string, handler?: unknown) => {
      const id = typeof item === "string" ? item : item?.id ?? "";
      captured.set(`${name}.${key}:${id}`, () => {
        orig(...(typeof item === "string" ? [item, handler] : [item]));
      });
    };
  const regSwallow = (ns: Record<string, unknown> | undefined, name: string, key: string) => {
    if (!ns || typeof ns[key] !== "function") return;
    const impl = swallowRegister(name, key, ns[key] as (...a: unknown[]) => unknown);
    override(ns, name, key, impl);
  };
  regSwallow(vs?.activityBar, "activityBar", "register");
  override(vs?.activityBar, "activityBar", "unregister", noop);
  regSwallow(vs?.commands, "commands", "register");
  override(vs?.commands, "commands", "unregister", noop);
  regSwallow(vs?.statusbar, "statusbar", "register");
  override(vs?.statusbar, "statusbar", "unregister", noop);
  regSwallow(vs?.statusbar, "statusbar", "registerMenu");
  override(vs?.statusbar, "statusbar", "unregisterMenu", noop);
  regSwallow(wb?.activityBar, "wbActivityBar", "register");
  override(wb?.activityBar, "wbActivityBar", "unregister", noop);
  regSwallow(wb?.statusbar, "wbStatusbar", "register");
  override(wb?.statusbar, "wbStatusbar", "unregister", noop);
  return {
    restore: () => {
      for (const s of saved.splice(0)) s.ns[s.key] = s.orig;
      // 兜底：apply 若在沙箱期内只注册过一次（restore 后不再重跑），把吞掉的注册重放进真 API。
      for (const fn of captured.values()) fn();
      captured.clear();
    },
  };
}

/**
 * 单模块预检 + 执行。
 *
 * 1) 版本预检：required > ACTIVITY_API_VERSION → 直接抛错，错误文案带具体需求/当前版本。
 * 2) 探测：把两个注入 API 临时换成 no-op 桩跑 factory.apply()，拦下探测期的真实注册副作用。
 *    多数插件的 apply 走 waitForApi 异步轮询，桩里没有真实 API → 轮询自然落空，零污染。
 *    同步直取型（内置 bundle）会把桩缓存进闭包——正式执行改走 sandboxRealApis 沙箱重放兜底。
 * 3) 返回「注册确认」句柄：正式执行后 250ms 窗口内对比四张注册表快照；仍无任何贡献点 → 撤销
 *    本次疑似半截注册并 reject（缺激活代码 / API 用错），由 enablePlugin await 后统一走失败路径。
 *    窗口期同时兜住 waitForApi 首次立即回调的同步注册路径。无确认需要时返回 null。
 */
function probeAndApply(mod: LoaderModule, required: number): Promise<void> | null {
  if (required > ACTIVITY_API_VERSION) {
    throw new Error(t("pmCheckNeedsHost", { need: required, have: ACTIVITY_API_VERSION }));
  }
  if (typeof mod.factory !== "function") return null;

  const w = window as unknown as Record<string, unknown>;
  const V_KEY = "__dshFileWorkbenchVSCode__";
  const W_KEY = "__dshFileWorkbenchWorkbench__";
  const noop = () => {};
  const realVs = w[V_KEY];
  const realWb = w[W_KEY];
  const stubVs = {
    __proxy: true,
    apiVersion: ACTIVITY_API_VERSION,
    activityBar: { register: noop, unregister: noop },
    commands: { register: noop, unregister: noop, execute: noop, list: () => [], has: () => false },
    statusbar: { register: noop, unregister: noop, list: () => [], registerMenu: noop, unregisterMenu: noop, listMenu: () => [] },
  };
  const stubWb = {
    __proxy: true,
    apiVersion: ACTIVITY_API_VERSION,
    activityBar: { register: noop, unregister: noop },
    statusbar: { register: noop, unregister: noop, list: () => [] },
    backgroundTasks: { start: () => ({ step: noop, updateLabel: noop, done: noop, fail: noop }), clearFinished: async () => {}, clearAll: async () => {} },
  };
  // ⚠️ 探测桩带 __proxy 标记仅作防御：真实 API 从不带该字段（见 activityBar.ts /
  // contributionProxy.ts），万一 Vue 侧重挂载撞上探测窗口，认领端也不会把桩当真实 API。
  // 插件缓存桩引用的主路径由下方 sandboxRealApis 沙箱重放兜底（见 probeAndApply 注释）。
  w[V_KEY] = stubVs;
  w[W_KEY] = stubWb;
  try {
    const probed = mod.factory(() => undefined);
    if (typeof probed?.apply === "function") probed.apply();
  } finally {
    w[V_KEY] = realVs;
    w[W_KEY] = realWb;

    // 正式执行。⚠️ 「缓存了桩引用」无从外部探测（闭包不可见），而换 window 键救不回缓存引用
    // ——统一对**真实 API 对象**就地降级沙箱：插件缓存的若是桩，注册被沙箱吞掉并在 restore()
    // 重放进真 registry；每次现取 window 的插件本就正常。register 幂等，多跑一遍无副作用。
    const sb = sandboxRealApis(realVs, realWb);
    const before = snapshotContributions();
    try {
      const exportsObj = mod.factory(() => undefined);
      if (typeof exportsObj?.apply === "function") exportsObj.apply();
    } finally {
      sb?.restore();
    }

    const set = diffContributions(before, snapshotContributions());
    if (!setIsEmpty(set)) return null;
    // 同步窗口没抓到 → 等一拍 waitForApi 首跳 / microtask 注册的迟到贡献。
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        const late = diffContributions(before, snapshotContributions());
        if (!setIsEmpty(late)) return resolve();
        revokeContributions(late);
        reject(new Error(t("pmCheckNoContrib")));
      }, 250);
    });
  }
}

/* --------------------------------------------------------------- 公共 API */

function findPlugin(id: string): UserPlugin | undefined {
  return plugins.value.find((p) => p.id === id);
}

/** 内置插件源码按引用获取（code = `plugin-src/<name>.js`）；本次会话内缓存取回的文本。 */
const fetchedBuiltinCode = new Map<string, string>();

/**
 * 解析出可 eval 的插件源码全文：
 *  - 外部导入（file/url）：快照里本来就存着全量代码，直接返回；
 *  - 内置种子：code 只是相对获取路径（真源码由 host /plugin-src 提供），启用时取回并缓存。
 */
async function resolvePluginCode(p: UserPlugin): Promise<string> {
  if (p.editedCode) return p.editedCode;
  const refMatch = /^plugin-src\/(.+)\.js$/.exec(p.code);
  if (p.source !== "builtin" || !refMatch) return p.code;
  const k = decodeURIComponent(refMatch[1]);
  const cached = fetchedBuiltinCode.get(k);
  if (cached) return cached;
  const res = await fetch(`${apiBase}/plugin-src?k=${encodeURIComponent(k)}`, { cache: "no-cache" });
  if (!res.ok) throw new Error(`加载内置插件源码失败：HTTP ${res.status}`);
  const code = await res.text();
  if (!code.trim()) throw new Error("内置插件源码为空");
  fetchedBuiltinCode.set(k, code);
  return code;
}

/** 查看器取某记录的完整源码文本（内置种子按引用现拉；编辑过则返回编辑版）。 */
export async function getPluginSource(id: string): Promise<string> {
  const p = findPlugin(id);
  if (!p) return "";
  return resolvePluginCode(p);
}

/**
 * 保存用户在查看器里编辑的源码并立即重载生效：editedCode 覆盖执行源，
 * enablePlugin 先撤销旧贡献再 eval——「改完即见」，无需重启。传 null 恢复原版。
 */
export async function savePluginEditedCode(id: string, code: string | null): Promise<void> {
  const p = findPlugin(id);
  if (!p) return;
  if (code) {
    const check = validatePluginSource(code);
    if (!check.ok) throw new Error(check.error || t("pmCheckNotPlugin"));
  }
  p.editedCode = code ?? undefined;
  if (p.source === "builtin") {
    // 内置种子的执行缓存也要同步替换，否则重启用仍跑旧 bundle。
    const ref = /^plugin-src\/(.+)\.js$/.exec(p.code);
    if (ref && code) fetchedBuiltinCode.set(decodeURIComponent(ref[1]), code);
  }
  if (p.enabled) await enablePlugin(id);
  else await persistNow();
}

/** 注册表里该裸名的候选地址（同源 /plugin-src?k=）；离线/缺项时 undefined。 */
async function registryUrlFor(name: string): Promise<string | undefined> {
  try {
    const res = await fetch(`${apiBase}/plugin-registry`, { cache: "no-cache", headers: { Accept: "application/json" } });
    const body = (await res.json()) as { data?: Array<{ name?: string; url?: string }> };
    return body?.data?.find((e) => e?.name === name && e.url)?.url;
  } catch {
    return undefined;
  }
}

/** 启用一个插件：执行其代码并把贡献点记入 contributions。 */
export async function enablePlugin(id: string): Promise<void> {
  const p = findPlugin(id);
  if (!p) return;
  // 先撤销旧贡献，避免重复注册叠加（幂等 enable）。
  revokeContributions(contributions.get(id));
  contributions.delete(id);
  try {
    const code = await resolvePluginCode(p);
    const finalSet = execPlugin(code, undefined, id);
    contributions.set(id, finalSet);
    // 注册确认：异步/迟到注册窗口内未兑现 → reject，这里统一撤销并记错。
    await Promise.all(confirmsOf(finalSet));
    p.enabled = true;
    p.activated = true;
    p.error = undefined;
    // 内置插件的显示元数据以 bundle 自带 manifest 为准（eval 期间隔离 shim 已捕获）。
    if (p.source === "builtin") {
      const man = manifestMap.get(`dsh-fw.${p.id}`);
      if (man) {
        Object.assign(p, {
          name: man.name || p.name,
          version: man.version ?? p.version,
          description: man.description || p.description,
          nameEn: man.nameEn || p.nameEn,
          descriptionEn: man.descriptionEn || p.descriptionEn,
        });
      }
    }
  } catch (e) {
    p.enabled = false;
    p.activated = false;
    p.error = e instanceof Error ? e.message : String(e);
    revokeContributions(contributions.get(id));
    contributions.delete(id);
  }
  await persistNow();
}

/** 停用：撤销全部贡献点，保留代码与记录。 */
export function disablePlugin(id: string): void {
  const p = findPlugin(id);
  if (!p) return;
  revokeContributions(contributions.get(id));
  contributions.delete(id);
  p.enabled = false;
  p.error = undefined;
  void persistNow();
}

/** 移除：停用并从列表剔除。内置种子记录先迁移为可管理的 url. 记录再删（市场模型下无「不可移除」条目）。 */
export async function removePlugin(id: string): Promise<void> {
  const p = findPlugin(id);
  if (!p) return;
  if (p.source === "builtin") {
    // 存量快照的种子记录：经注册表候选（同源 bundle，离线可用）转成 url. 记录，
    // 新记录已启用即等价「迁移并保留状态」；随后停掉并删除旧种子行。
    const url = await registryUrlFor(p.id);
    if (url) {
      const r = await importFromUrl(url);
      if (r.ok && r.id && r.id !== p.id) {
        disablePlugin(p.id);
        plugins.value = plugins.value.filter((x) => x.id !== p.id);
        await persistNow();
        return;
      }
    }
    toast("error", t("pmSeedMigrateFailed", { name: p.name }));
    return;
  }
  disablePlugin(id);
  plugins.value = plugins.value.filter((x) => x.id !== id);
  void persistNow();
}

function normalizeId(seed: string): string {
  return seed.trim();
}

/** 幂等地插入或更新一条记录（按 id）。 */
function upsert(rec: UserPlugin): void {
  const i = plugins.value.findIndex((p) => p.id === rec.id);
  if (i >= 0) plugins.value.splice(i, 1, rec);
  else plugins.value = [...plugins.value, rec];
}

/* ------------------------------------------------- 存量内置种子 → 市场模型迁移 */

/** 一次性迁移完成标记（与插件快照同文件命名空间，host /plugin-data 任意 key 可读写）。 */
const SEEDS_MIGRATED_KEY = "dsh-fw.seedsMigratedV2";

/**
 * 把注册表候选装成 url. 记录并启用；失败返回 undefined（调用方保留种子行下次再试）。
 * ⚠️ 不走 importFromUrl：种子行仍在列表时其「同文种子捷径」会直接顶回种子启用，绕过迁移。
 */
async function installRegistryAsUrl(e: { name: string; url: string; description?: string; descriptionEn?: string }): Promise<string | undefined> {
  try {
    const res = await fetch(`${apiBase}/fetch-plugin`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ url: new URL(e.url, window.location.href).href }),
    });
    const payload = (await res.json().catch(() => null)) as { ok?: boolean; error?: string; data?: { code: string; name?: string } } | null;
    if (!payload?.ok || !payload.data) return undefined;
    let code: string;
    let packedManifest: PluginManifest | null;
    try {
      ({ code, manifest: packedManifest } = packSourceIfRaw(payload.data.code, e.name));
    } catch {
      return undefined;
    }
    const check = validatePluginSource(code);
    if (!check.ok) return undefined;
    const id = normalizeId(`url.${e.name}`);
    const manifest = packedManifest ?? readPluginManifest(code);
    upsert({
      id,
      name: manifest?.name || e.name,
      source: "url",
      origin: e.url,
      version: manifest?.version,
      description: manifest?.description ?? e.description,
      nameEn: manifest?.nameEn,
      descriptionEn: manifest?.descriptionEn ?? e.descriptionEn,
      code,
      enabled: false,
    });
    await enablePlugin(id);
    return id;
  } catch {
    return undefined;
  }
}

/**
 * 市场模型一次性迁移：存量 builtin 种子记录 → 经注册表候选转成可移除的 url. 记录。
 * 未安装区自此接管这些插件（用户视角=「内置」消失、全部变可下载）。种子若仍带用户编辑版
 * （editedCode，非随包原文）则保留该行不迁移——编辑成果优先于名单整洁。
 */
async function migrateBuiltinSeedsToRegistry(): Promise<void> {
  let entries: Array<{ name?: string; url?: string; description?: string; descriptionEn?: string }> = [];
  try {
    // refresh=1：迁移必须拿最新清单（刚 push 的新插件也要能装上），不吃 host 缓存。
    const res = await fetch(`${apiBase}/plugin-registry?refresh=1`, { cache: "no-cache", headers: { Accept: "application/json" } });
    const body = (await res.json()) as { data?: typeof entries };
    entries = Array.isArray(body?.data) ? body.data : [];
  } catch {
    return;
  }
  const byName = new Map(
    entries
      .filter((e): e is { name: string; url: string; description?: string; descriptionEn?: string } => !!e?.name && !!e.url)
      .map((e) => [e.name, e]),
  );
  const seeds = plugins.value.filter((p) => p.source === "builtin");
  let changed = false;
  for (const s of seeds) {
    const e = byName.get(s.id);
    if (!e) continue; // 注册表暂不认识该裸名（离线/未发布）：留着，下次启动再试
    if (s.editedCode) continue; // 有用户编辑版：保留种子行，编辑通道不变
    const newId = await installRegistryAsUrl(e);
    if (!newId) continue; // 拉取/打包失败：下次启动重试
    disablePlugin(s.id);
    plugins.value = plugins.value.filter((x) => x.id !== s.id);
    changed = true;
  }
  if (changed) await persistNow();
}

/** bootstrap 尾部：一次性执行种子→注册表迁移（成功或确认无可迁移项后落标记，不再重复跑）。 */
async function maybeMigrateSeeds(): Promise<void> {
  try {
    if ((await readPluginData<boolean>(SEEDS_MIGRATED_KEY)) === true) return;
    await migrateBuiltinSeedsToRegistry();
    // 快照里已无 builtin 行（本次迁完/历史上就没有）才落标记；仍有残留（离线缺项/编辑版）留待下次。
    if (!plugins.value.some((p) => p.source === "builtin")) await writePluginData(SEEDS_MIGRATED_KEY, true);
  } catch {
    /* 迁移尽力而为：失败不影响正常加载 */
  }
}

/** 导入结果：供管理视图即时 toast；error 已本地化。 */
export interface ImportResult {
  ok: boolean;
  error?: string;
  /** 记录主键（loader id 优先于文件名）。 */
  id?: string;
}

/** 从本地 .js 文件导入并立即启用。 */
export async function importFromFile(file: File): Promise<ImportResult> {
  const raw = await file.text();
  let code: string;
  let packedManifest: PluginManifest | null;
  try {
    ({ code, manifest: packedManifest } = packSourceIfRaw(raw, file.name));
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : String(e) };
  }
  const check = validatePluginSource(code);
  if (!check.ok) return { ok: false, error: check.error };
  const rawId = check.loaderId || file.name.replace(/\.(c|m)?js$/i, "");
  // file/url 主键一律带来源前缀命名空间——外部插件的 loader id（如 dsh-fw.linter）可能与
  // 内置种子 key 撞名，裸 id 会让快照记录被种子合并顶掉（见 ensureBuiltinSeeds）。
  const id = normalizeId(`file.${rawId}`) || `file-${Date.now()}`;
  // 同文件重复导入（与「从 URL 导入」互为 twin，见彼处说明）：命中同源码既有记录时只重新
  // 启用并原位刷新内容，不再新建第二份记录。
  const urlTwin = plugins.value.find((x) => x.source === "url" && (x.id === `url.${rawId}` || x.code === code));
  if (urlTwin) {
    // 原位刷新内容（不覆盖 origin——仍走 URL 通道），并清掉旧的编辑版；
    // enablePlugin 读新 code 后内部会 persistNow，快照随之落盘。
    urlTwin.code = code;
    urlTwin.editedCode = undefined;
    await enablePlugin(urlTwin.id);
    const trec = findPlugin(urlTwin.id);
    return { ok: !!trec?.enabled, error: trec?.error, id: urlTwin.id };
  }
  const manifest = packedManifest ?? readPluginManifest(code) ?? readPlainMeta(code, file.name);
  upsert({
    id,
    name: manifest?.name || file.name,
    source: "file",
    origin: file.name,
    version: manifest?.version,
    description: manifest?.description,
    nameEn: manifest?.nameEn,
    descriptionEn: manifest?.descriptionEn,
    code,
    enabled: false,
  });
  await enablePlugin(id);
  const rec = findPlugin(id);
  return { ok: !!rec?.enabled, error: rec?.error, id };
}

/** 从 URL 导入（经 host 代理拉取以绕开 CORS）并立即启用。 */
export async function importFromUrl(url: string): Promise<ImportResult> {
  const clean = url.trim();
  if (!clean) return { ok: false, error: t("pmCheckEmpty") };
  // 注册表条目可能是同源相对地址（本地 registry.json → /plugin-src?k=），先解析为绝对 URL。
  let absUrl = clean;
  try {
    absUrl = new URL(clean, window.location.href).href;
  } catch {
    /* 非法 URL 交给 host 侧统一报错 */
  }
  const res = await fetch(`${apiBase}/fetch-plugin`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ url: absUrl }),
  });
  const payload = (await res.json().catch(() => ({ ok: false, error: "bad response" }))) as {
    ok: boolean;
    error?: string;
    data?: { code: string; name?: string };
  };
  if (!payload.ok || !payload.data) return { ok: false, error: payload.error || `HTTP ${res.status}` };
  const baseName = payload.data.name || clean.split("/").pop() || clean;
  let code: string;
  let packedManifest: PluginManifest | null;
  try {
    ({ code, manifest: packedManifest } = packSourceIfRaw(payload.data.code, baseName));
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : String(e) };
  }
  const check = validatePluginSource(code);
  if (!check.ok) return { ok: false, error: check.error };
  const seedKey = check.loaderId?.startsWith("dsh-fw.") ? check.loaderId.slice("dsh-fw.".length) : baseName.replace(/\.(c|m)?js$/i, "");
  if (seedKey) {
    const seed = findPlugin(seedKey);
    // 仅当种子 bundle 与本次下载**逐字节同文**（同源 /plugin-src 往返）才等价启用；
    // 不同文（上游已换版、或候选是源码形态现场打包）则放行建 url. 记录，避免静默装旧版。
    if (seed?.source === "builtin") {
      let sameAsSeed = false;
      try {
        // 直接比对引用路径与 bundle 文本两种存量形态（不读 editedCode——编辑版记录不参与同文判定）。
        sameAsSeed = seed.code === code || (fetchedBuiltinCode.get(seed.id) ?? (await resolvePluginCode(seed))) === code;
      } catch {
        /* 取不到种子 bundle：按不同文处理 */
      }
      if (sameAsSeed) {
        await enablePlugin(seedKey);
        const srec = findPlugin(seedKey);
        return { ok: !!srec?.enabled, error: srec?.error, id: seedKey };
      }
    }
  }
  // 「下载即装」市场模型：注册表候选与随包发布的内置 bundle 同源同内容——既有 url./file.
  // 记录若装着**同一份 bundle**（先删后重下、或种子时代遗留的克隆），原位刷新源码/元数据并
  // 重新启用，绝不新建第二份（双记录正是「下载后仍显示未安装行」的元凶）。
  // ⚠️ 按 code 全文比对而非名字：用户编辑过/上游已换版的同名插件 code 必不同，照常走新装。
  const rawId = check.loaderId || baseName.replace(/\.(c|m)?js$/i, "");
  // ⚠️ 含点候选名（如 `a.b` → url.a.b）的末段 rawId="b" 与主键对不上，须按文件名主干补比对，否则重下必出双记录。
  const stem = baseName.replace(/\.(c|m)?js$/i, "");
  const twin =
    plugins.value.find((x) => x.code === code) ??
    plugins.value.find(
      (x) =>
        (x.source === "file" || x.source === "url") &&
        (x.id === `${x.source}.${rawId}` || (!!stem && x.id === `${x.source}.${stem}`)),
    );
  if (twin) {
    twin.code = code;
    twin.editedCode = undefined;
    await enablePlugin(twin.id);
    const trec = findPlugin(twin.id);
    return { ok: !!trec?.enabled, error: trec?.error, id: twin.id };
  }
  const id = normalizeId(`url.${rawId}`) || `url-${Date.now()}`;
  const manifest = packedManifest ?? readPluginManifest(code) ?? readPlainMeta(code, baseName);
  upsert({
    id,
    name: manifest?.name || baseName,
    source: "url",
    origin: clean,
    version: manifest?.version,
    description: manifest?.description,
    nameEn: manifest?.nameEn,
    descriptionEn: manifest?.descriptionEn,
    code,
    enabled: false,
  });
  await enablePlugin(id);
  const rec = findPlugin(id);
  return { ok: !!rec?.enabled, error: rec?.error, id };
}

/**
 * 运行时推导内置插件种子列表：GET /plugin-index 拿清单（.pack-meta.json），再逐个取回
 * bundle 文本读 manifest（nameEn/descriptionEn 等显示元数据只藏在 bundle 顶层声明里）。
 * 内置插件只有十几个且仅 bootstrap 时跑一次，成本可忽略；全程静默失败——host 缺文件时
 * 只是不列内置项，不影响外部导入的插件。
 */
async function fetchBuiltinSeeds(): Promise<BuiltinSeed[]> {
  try {
    const res = await fetch(`${apiBase}/plugin-index`, { cache: "no-cache", headers: { Accept: "application/json" } });
    if (!res.ok) return [];
    const entries = (await res.json()) as Array<{
      name?: string;
      title?: string;
      version?: string;
      description?: string;
      nameEn?: string;
      descriptionEn?: string;
    }>;
    const seeds: BuiltinSeed[] = [];
    for (const e of entries) {
      const name = e?.name?.trim();
      if (!name || !/^[A-Za-z0-9._-]+$/.test(name)) continue;
      let codeText = "";
      let manifest: LoaderManifest | null = null;
      try {
        const r = await fetch(`${apiBase}/plugin-src?k=${encodeURIComponent(name)}`, { cache: "no-cache" });
        if (r.ok) {
          codeText = await r.text();
          if (codeText.trim()) manifest = readPluginManifest(codeText);
        }
      } catch {
        /* 单个取回失败：跳过该条目 */
      }
      seeds.push({
        id: name,
        name: manifest?.name || e.title || name,
        version: manifest?.version ?? e.version ?? "",
        description: manifest?.description || e.description || "",
        nameEn: manifest?.nameEn || e.nameEn || "",
        descriptionEn: manifest?.descriptionEn || e.descriptionEn || "",
        // 种子只存引用；真正 eval 的源码在启用时经 resolvePluginCode 取回（本函数已预取过一轮，命中缓存）。
        code: `plugin-src/${encodeURIComponent(name)}.js`,
      });
      if (codeText.trim()) fetchedBuiltinCode.set(name, codeText);
    }
    return seeds;
  } catch {
    return [];
  }
}

/** 把内置种子合并进列表。**仅存量快照兼容通道**——新模型下不再自动注入种子（见 bootstrap）。 */
function ensureBuiltinSeeds(snapshot: UserPlugin[], seeds: BuiltinSeed[]): UserPlugin[] {
  // 迁移：早期快照里的内置记录用带前缀的旧 id（@sunjuntao/dsh-fw-* / dsh-fw-*），
  // 与现在的裸名种子一一对应且不可被用户移除——留着就是「同名插件显示两份」的重复项，直接丢弃。
  const isLegacyBuiltinId = (id: string) => id.startsWith("@sunjuntao/dsh-fw-") || /^dsh-fw\.[a-z0-9-]+$/i.test(id);
  const seedIds = new Set(seeds.map((s) => s.id));
  // ⚠️ 历史坑（保留注释供读）：外部插件 loader id 撞种子裸名时须改挂 `<source>.<id>` 命名空间，
  // 否则下面的合并会把外部记录当"旧快照残留"顶掉。
  for (const p of snapshot) {
    if ((p.source === "file" || p.source === "url") && seedIds.has(p.id)) p.id = `${p.source}.${p.id}`;
  }
  const kept = snapshot.filter((p) => !(isLegacyBuiltinId(p.id) && !seedIds.has(p.id)));
  // 迁移已为同插件建过 url./file. 记录时，裸名 builtin 行是重复残留（旧版页面覆写快照可复活它们）：
  // 直接丢弃自愈——否则每次启动都渲染两行「已安装」。
  const dropBare = new Set(kept.filter((p) => p.source === "builtin").map((p) => p.id));
  for (const p of kept) {
    if (p.source === "url" || p.source === "file") {
      const bare = p.id.replace(/^(url|file)\./, "");
      if (dropBare.has(bare)) dropBare.delete(bare);
    }
  }
  const byId = new Map(kept.filter((p) => !dropBare.has(p.id)).map((p) => [p.id, p]));
  for (const seed of seeds) {
    const existing = byId.get(seed.id);
    if (!existing) {
      // 市场模型：注册表候选不再落成种子记录——未安装项经「下载」以 url. 记录进来。
      continue;
    } else if (existing.source === "builtin") {
      // 旧快照可能早于种子英文名/描述字段——每次读取时刷新元数据（保留启用状态与 error）。
      Object.assign(existing, {
        name: seed.name,
        version: seed.version,
        description: seed.description || existing.description,
        nameEn: seed.nameEn || existing.nameEn,
        descriptionEn: seed.descriptionEn || existing.descriptionEn,
        code: seed.code,
      });
      // 过期内联 bundle 对账：老快照把全量代码直存进记录（早期壳 factory 返回 {apply,inject,meta}，
      // 引用已被剥掉的 inject → 激活必抛 ReferenceError「未注册任何贡献点」）。种子已随包发布且
      // code 是引用路径时，丢弃内联代码转按需拉取；用户编辑版（editedCode）不受影响。
      if (existing.code && !/^plugin-src\//.test(existing.code) && /^plugin-src\//.test(seed.code)) {
        existing.code = seed.code;
        fetchedBuiltinCode.delete(seed.id);
      }
    } else if (!isLegacyBuiltinId(seed.id) && existing.code && !/^plugin-src\//.test(existing.code)) {
      // 旧快照的升级路径：①源码形态（当时还没有导入即打包）→ 现场打包并回填元数据；
      // ②已打包但缺清单元数据（那时还不读 manifest）→ bundle 若带 manifest，升级一次。
      try {
        const packed = packSourceIfRaw(existing.code, existing.origin || existing.name);
        existing.code = packed.code;
        if (packed.manifest) {
          Object.assign(existing, {
            name: packed.manifest.name || existing.name,
            version: packed.manifest.version ?? existing.version,
            description: packed.manifest.description,
            nameEn: packed.manifest.nameEn,
            descriptionEn: packed.manifest.descriptionEn,
          });
        }
      } catch {
        /* 非源码形态或打包校验不过：走下面的清单读取升级 */
      }
      if (!existing.description) {
        const manifest = readPluginManifest(existing.code) ?? readPlainMeta(existing.code, existing.origin || existing.name);
        if (manifest) {
          Object.assign(existing, {
            name: manifest.name || existing.name,
            version: manifest.version ?? existing.version,
            description: manifest.description,
            nameEn: manifest.nameEn,
            descriptionEn: manifest.descriptionEn,
          });
        }
      }
    }
  }
  return [...byId.values()];
}

/**
 * 一次性引导：读快照 → 内置种子仅做**存量记录对账**（不再注入新行，见 ensureBuiltinSeeds）
 * → 填充响应式列表 → 自动启用上次启用项。
 * 由编辑器面板挂载时调用；重复调用为 no-op。
 */
export async function bootstrapUserPlugins(): Promise<void> {
  if (bootstrapped || typeof window === "undefined") return;
  bootstrapped = true;
  const snapshot = await readSnapshot();
  // 市场模型：插件管理不再预置「内置」条目——全部插件以注册表「未安装」呈现、点下载即装。
  // 种子清单每次 bootstrap 都拉（/plugin-index + bundle manifest，本地 host 成本可忽略）：
  // ①存量 builtin 记录的元数据/过期内联 bundle 对账；②预热 fetchedBuiltinCode 缓存，
  // 使 importFromUrl 的「下载 == 随包版本」同文比对成立（种子时代克隆记录重下时归位）。
  const seeds = await fetchBuiltinSeeds();
  plugins.value = ensureBuiltinSeeds(snapshot, seeds);
  // 种子对账丢过残留 builtin 行 → 立即把归一后的快照写回盘，防旧版页面下次覆写又复活重复。
  if (plugins.value.length !== snapshot.length) void persistNow();
  // 串行启用，避免并发 eval 互相污染 diff 归属。仅恢复曾成功激活过的插件；
  // 从未生效的（如版本不兼容）强制置为禁用并清错，不再每次加载重复失败弹 toast。
  for (const p of [...plugins.value]) {
    if (!p.enabled) continue;
    if (!p.activated) {
      p.enabled = false;
      p.error = undefined;
      continue;
    }
    await enablePlugin(p.id);
    const rec = findPlugin(p.id);
    if (rec && !rec.enabled) toast("error", t("pmRestoreFailed", { name: rec.name, msg: rec.error || "" }));
  }
  // 市场模型一次性迁移：存量内置种子 → 注册表候选（url. 记录，可移除）。放最后——
  // 自动恢复已跑完，迁移期间的新增行不会被本轮覆盖。
  await maybeMigrateSeeds();
}

/** 只读列表（管理视图消费）。 */
export function listUserPlugins(): UserPlugin[] {
  return plugins.value;
}

/** 某插件当前贡献的 Activity Bar 视图 id 列表（无记录时返回空数组）。 */
export function contributionsOfPluginId(id: string): string[] {
  return contributions.get(id)?.views ?? [];
}

/** 某插件当前的完整贡献点集合（未启用/已撤销时 undefined）——宿主 UI 据此过滤其残留注册。 */
export function contributionsOf(id: string): ContributionSet | undefined {
  return contributions.get(id);
}

/** 全部插件的贡献点迭代（宿主 UI 反查状态栏项归属用）。 */
export function allContributions(): IterableIterator<[string, ContributionSet]> {
  return contributions.entries();
}
