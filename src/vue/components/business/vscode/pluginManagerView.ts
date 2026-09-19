/**
 * 宿主内置的「插件管理」Activity Bar 视图（原生 DOM，命名空间 dsh-pm-）。
 *
 * 由本模块在编辑器面板挂载时注册一次（见 registerPluginManagerView），**不是**外部插件——
 * 它是宿主能力：让用户导入 / 启停 / 移除运行期 .js 插件，并列出内嵌的内置套件种子。
 * 界面**复刻 VS Code 扩展面板侧栏**：标题栏右侧「排序 + ··· 管理」工具条 → 搜索框 →
 * 统一列表（图标 · 名称+发布方+版本一行、描述一行）；
 * 悬停浮出操作按钮与齿轮菜单，已禁用项整行淡化、已启用项带绿点徽章。内置种子不可移除。
 * 已安装与注册表「未安装」条目合并为统一列表展示（未安装行悬停「下载」即装）。
 */
import { createApp, reactive, watch } from "vue";
import {
  bootstrapUserPlugins,
  contributionsOfPluginId,
  disablePlugin,
  enablePlugin,
  getPluginSource,
  importFromFile,
  importFromUrl,
  listUserPlugins,
  removePlugin,
  savePluginEditedCode,
  type UserPlugin,
} from "../../../stores/userPlugins";
import PluginCodeViewer from "./PluginCodeViewer.vue";
import { registerActivityView, listActivityViews, type ActivityContext } from "../../../stores/activityBar";
import { t, isZh, useI18n } from "../../../composables/core/i18n";
import { apiBase } from "../../../composables/core/useApi";
import { confirmDialog, ensureGlobalDialogHost } from "../../../composables/core/dialog";

const VIEW_ID = "host.plugin-manager";
const NS = "dsh-pm";

/** 按当前语言取插件描述（内置种子与带清单的外部插件都有 descriptionEn，EN 模式优先；缺省回退中文）。 */
function pluginDesc(p: UserPlugin): string {
  return (!isZh() && p.descriptionEn) || p.description || "";
}

let registered = false;
let bootstrapped = false;

/* ---- 「需要重新加载」检测（对标 VS Code Reload Required） ---- */

/** 本会话内插件管理视图自己的 Activity Bar 视图 id（mount 时记录，用于排除自身）。 */
let selfViewId: string | undefined;
/** 已提示过/待刷新的插件 id 集合；刷新后自然清空。 */
const pendingReloadIds = new Set<string>();

/** 当前已注册的 Activity Bar 视图 id 快照。 */
function viewIds(): Set<string> {
  return new Set(listActivityViews().map((v) => v.id));
}

/**
 * enable/import 后的生效核查：插件的 when() 可能要求项目目录等前置条件——条件满足时
 * 其贡献视图必须已经出现；缺席说明宿主没有热挂上它（如加载时序、宿主老版本缓存），
 * 记入待刷新集合，由列表底部横幅提示用户一键刷新（与 VS Code 行为一致）。
 */
function markIfNeedsReload(p: UserPlugin | undefined, before: Set<string>): void {
  if (!p || !p.enabled || p.error) return;
  const gated = contributionsOfPluginId(p.id);
  if (!gated.length) return; // 探针未捕获到贡献点：交给下方 grew 判定，避免误报
  const view = listActivityViews().find((v) => v.id === gated[0]);
  if (view?.when && !view.when(activityCtxForProbe())) return; // 条件未满足 → 走「需打开项目」提示，不算失效
  // 视图已在册即视为生效：导入内置插件的克隆时同 id 覆盖注册，列表不「增长」但功能正常——
  // 只按 grew 判定会误报「需重新加载」。
  const live = new Set([...viewIds()].filter((id) => id !== selfViewId));
  const grew = [...live].some((id) => !before.has(id));
  if (!grew && !gated.every((id) => live.has(id))) pendingReloadIds.add(p.id);
  else pendingReloadIds.delete(p.id);
}

/**
 * 下载/导入成功后的 Reload Required 判定：优先按贡献点核查（markIfNeedsReload）；
 * 探针完全没捕获到贡献点说明热加载实际失败（重启后才可能挂上），直接记入待刷新，
 * 由横幅提示「新安装插件需要重新加载窗口」。
 */
function markDownloadedNeedsReload(rec: UserPlugin | undefined, before: Set<string>): void {
  if (rec && !contributionsOfPluginId(rec.id).length) {
    if (rec.enabled && !rec.error) pendingReloadIds.add(rec.id);
    return;
  }
  markIfNeedsReload(rec, before);
}

/** 探测 when() 用的最小上下文：目前内置插件只看 projectDir，其余字段给安全默认。 */
function activityCtxForProbe(): ActivityContext {
  return { projectDir: lastKnownProjectDir, language: isZh() ? "zh" : "en" } as unknown as ActivityContext;
}

/** 面板 mount 时记下的项目目录（buildRow 的「需打开项目」判断同源，这里供脱离渲染生命周期的核查用）。 */
let lastKnownProjectDir: string | undefined;

/** 幂等注册管理视图 + 首次引导加载用户插件（含自动启用上次启用项）。 */
export function registerPluginManagerView(): void {
  if (registered || typeof window === "undefined") return;
  registered = true;
  // ⚠️ 引导必须在**注册时**跑，而不是等用户点开本面板才跑：插件的贡献点（Activity Bar 图标、
  // 命令、状态栏项）要一进来就恢复到位。此前只在 mount() 里 bootstrap，导致刷新后必须先打开
  // 「插件助手」图标才会出现——现在提前到这里，mount 只负责渲染。
  if (!bootstrapped) {
    bootstrapped = true;
    void bootstrapUserPlugins().then(() => liveRerender?.());
  }
  registerActivityView({
    id: VIEW_ID,
    title: { zh: "插件管理", en: "Plugins" },
    icon: "grid",
    order: Number.MAX_SAFE_INTEGER, // 恒排在所有视图最后
    mount(el, ctx) {
      selfViewId = VIEW_ID;
      lastKnownProjectDir = ctx.projectDir ?? undefined;
      const offProject = ctx.onProjectChange((dir) => {
        lastKnownProjectDir = dir ?? undefined;
      });
      const off = renderManager(el, ctx);
      liveRerender = off.rerender;
      return () => {
        offProject();
        if (liveRerender === off.rerender) liveRerender = undefined;
        off.cleanup();
      };
    },
  });
}

/** 当前挂载中的管理视图重绘入口（bootstrap 完成后回推一次列表；未挂载则忽略）。 */
let liveRerender: (() => void) | undefined;

/* ------------------------------------------------------------------ 样式 */

function injectStyles(): void {
  if (typeof document === "undefined" || document.getElementById(`${NS}-styles`)) return;
  // ⚠️ 配色走本视图自有的 --pm-* 令牌：在 .${NS}-view 上定义浅色默认值，再由 data-theme/.dark
  // 祖先覆盖为深色。**不直接读 --dsh-*** —— 那些变量若未注入会落到写死的兜底，白天/黑夜就串色。
  const css = `
/* el-dialog 的 teleport 挂 body（z-index ~2014），而查看器/确认宿主也在 body 层——
   把弹层体系整体抬到查看器浮层之上，否则「恢复原版」等确认框会藏在查看器后面。 */
.el-overlay{z-index:2147483640 !important;}
.el-overlay-message-box,.el-message{z-index:2147483645 !important;}
.${NS}-view,.${NS}-menu,.${NS}-viewer{
  --pm-fg:#1f2328; --pm-fg-weak:#656d76; --pm-fg-muted:#8b949e;
  --pm-bg:#ffffff; --pm-bg2:#f6f8fa; --pm-bg3:#eaeef2;
  --pm-border:#d0d7de; --pm-hover:#e7ebef; --pm-accent:#0969da;
  --pm-danger:#cf222e; --pm-purple:#8250df; --pm-info:#0550ae; --pm-warn:#9a6700; --pm-ok:#1a7f37;
  --pm-input:#f2f4f7; --pm-menu:#ffffff; --pm-shadow:0 8px 24px rgba(31,35,40,.18);
  --pm-av-builtin:#57606a; --pm-av-file:#1f6feb; --pm-av-url:#8250df;}
.${NS}-view{color:var(--pm-fg);font-size:13px;}
:is(html[data-theme="dark"],html.dark,.fw-root[data-theme="dark"],.vs-pane[data-theme="dark"]) .${NS}-view,
:is(html[data-theme="dark"],html.dark,.fw-root[data-theme="dark"],.vs-pane[data-theme="dark"]) .${NS}-menu,
:is(html[data-theme="dark"],html.dark,.fw-root[data-theme="dark"],.vs-pane[data-theme="dark"]) .${NS}-viewer{
  --pm-fg:#c9d1d9; --pm-fg-weak:#8b949e; --pm-fg-muted:#6e7681;
  --pm-bg:#0d1117; --pm-bg2:#161b22; --pm-bg3:#21262d;
  --pm-border:#30363d; --pm-hover:#30363d; --pm-accent:#2f81f7;
  --pm-danger:#f85149; --pm-purple:#d2a8ff; --pm-info:#79c0ff; --pm-warn:#d29922; --pm-ok:#3fb950;
  --pm-input:#0d1117; --pm-menu:#1c2128; --pm-shadow:0 8px 24px rgba(1,4,9,.6);
  --pm-av-builtin:#6e7681; --pm-av-file:#388bfd; --pm-av-url:#a371f7;}
.${NS}-root{display:flex;flex-direction:column;height:100%;min-height:0;gap:0;}

/* ---- 标题栏：标题 + 右侧工具条（排序 + 管理⋯），VS Code 同款 ---- */
.${NS}-hdr{display:flex;align-items:center;gap:6px;padding:6px 6px 6px 12px;position:sticky;top:0;background:var(--pm-bg);z-index:2;}
.${NS}-title{font-size:11px;font-weight:400;letter-spacing:.4px;text-transform:uppercase;color:var(--pm-fg-weak);}
.${NS}-spacer{flex:1 1 auto;}
.${NS}-tool{width:24px;height:22px;border:none;border-radius:4px;background:transparent;color:var(--pm-fg-weak);cursor:pointer;display:flex;align-items:center;justify-content:center;}
.${NS}-tool:hover{background:var(--pm-hover);color:var(--pm-fg);}
.${NS}-tool svg{width:15px;height:15px;}

/* ---- 搜索框 ---- */
.${NS}-search{padding:2px 12px 8px;position:relative;}
.${NS}-search-box{display:flex;align-items:center;gap:6px;padding:5px 8px;border:1px solid transparent;border-radius:3px;background:var(--pm-input);}
.${NS}-search-box:focus-within{border-color:var(--pm-accent);}
.${NS}-search-box svg{width:14px;height:14px;flex:0 0 auto;color:var(--pm-fg-muted);}
.${NS}-search-input{flex:1 1 auto;min-width:0;border:none;outline:none;background:transparent;color:inherit;font-size:13px;}
.${NS}-search-input::placeholder{color:var(--pm-fg-muted);}

/* ---- 统一列表容器（已安装 + 未安装合并，无分组头）---- */
.${NS}-listwrap{flex:1 1 auto;min-height:0;overflow-y:auto;overflow-x:hidden;}

/* ---- 注册表刷新动效：工具栏按钮转圈 + 「浏览器」段骨架行脉冲 ---- */
@keyframes ${NS}-spin{to{transform:rotate(360deg);}}
@keyframes ${NS}-pulse{0%,100%{opacity:.45;}50%{opacity:.9;}}
.${NS}-refBtn.is-busy svg{animation:${NS}-spin .8s linear infinite;}
.${NS}-skel{display:flex;align-items:flex-start;gap:10px;padding:6px 12px;}
.${NS}-skel-avatar{width:32px;height:32px;flex:0 0 auto;border-radius:4px;background:var(--pm-hover);}
.${NS}-skel-lines{flex:1 1 auto;min-width:0;display:flex;flex-direction:column;gap:6px;padding-top:2px;}
.${NS}-skel-line{height:9px;border-radius:3px;background:var(--pm-hover);animation:${NS}-pulse 1.1s ease-in-out infinite;}
.${NS}-skel-line.w60{width:60%;}
.${NS}-skel-line.w85{width:85%;}

/* ---- 列表行：紧凑，图标 · 两行文本，hover 浮出操作 ---- */
.${NS}-list{display:flex;flex-direction:column;padding:1px 0 6px;}
.${NS}-row{display:flex;align-items:flex-start;gap:10px;padding:6px 12px;cursor:default;position:relative;}
.${NS}-row:hover{background:var(--pm-hover);}
.${NS}-row.is-disabled{opacity:.55;}
/* 已启用：绿点 + 徽章（合并列表后区分状态的主标记）；未安装：虚线弱化行。 */
.${NS}-badge{display:inline-flex;align-items:center;gap:4px;flex:0 0 auto;padding:1px 6px;border-radius:8px;font-size:10px;font-weight:600;line-height:1.5;color:var(--pm-ok);background:color-mix(in srgb, var(--pm-ok) 14%, transparent);}
.${NS}-badge::before{content:"";width:5px;height:5px;border-radius:50%;background:var(--pm-ok);}
.${NS}-row.is-uninstalled .${NS}-name{font-weight:500;color:var(--pm-fg-muted);}
.${NS}-row.is-uninstalled .${NS}-avatar{opacity:.7;}
.${NS}-avatar{width:32px;height:32px;flex:0 0 auto;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:700;color:#fff;background:var(--pm-av-builtin);overflow:hidden;}
.${NS}-avatar.file{background:var(--pm-av-file);}
.${NS}-avatar.url{background:var(--pm-av-url);}
.${NS}-avatar img{width:100%;height:100%;object-fit:cover;}
.${NS}-main{flex:1 1 auto;min-width:0;display:flex;flex-direction:column;gap:1px;padding-top:1px;}
.${NS}-nameline{display:flex;align-items:baseline;gap:6px;white-space:nowrap;overflow:hidden;}
.${NS}-name{font-weight:600;font-size:13px;color:var(--pm-fg);overflow:hidden;text-overflow:ellipsis;flex:0 1 auto;}
.${NS}-vendor{font-size:11px;color:var(--pm-fg-weak);font-weight:400;overflow:hidden;text-overflow:ellipsis;flex:0 1 auto;}
.${NS}-ver{font-size:11px;color:var(--pm-fg-muted);flex:0 0 auto;}
.${NS}-desc{font-size:12px;color:var(--pm-fg-weak);line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}
.${NS}-err{font-size:11px;color:var(--pm-danger);margin-top:2px;word-break:break-all;}

/* ---- 分区标题（已安装 / 浏览器）：VS Code 扩展面板 collapsible section 观感 ---- */
.${NS}-section{position:sticky;top:0;z-index:2;display:flex;align-items:center;gap:6px;padding:6px 10px;font-size:11px;font-weight:600;letter-spacing:.2px;text-transform:uppercase;color:var(--pm-fg-weak);background:var(--pm-bg);border-bottom:1px solid var(--pm-border);cursor:pointer;user-select:none;}
.${NS}-section:hover{color:var(--pm-fg);}
.${NS}-section-caret{width:12px;flex:0 0 auto;font-size:10px;line-height:1;}

/* ---- 行内操作区：hover 才显出（VS Code 悬停浮出）---- */
.${NS}-rowacts{position:absolute;top:6px;right:10px;display:none;align-items:center;gap:4px;}
.${NS}-row:hover .${NS}-rowacts{display:flex;}
.${NS}-btn{font-size:11px;padding:2px 8px;border-radius:3px;border:1px solid var(--pm-border);background:var(--pm-bg2);color:var(--pm-fg);cursor:pointer;white-space:nowrap;}
.${NS}-btn.primary{background:var(--pm-accent);border-color:var(--pm-accent);color:#fff;}
.${NS}-btn:hover{filter:brightness(1.05);}
.${NS}-gear{width:22px;height:22px;border:none;border-radius:3px;background:transparent;color:var(--pm-fg-weak);cursor:pointer;display:flex;align-items:center;justify-content:center;}
.${NS}-gear:hover{background:color-mix(in srgb,var(--pm-fg) 12%,transparent);color:var(--pm-fg);}
.${NS}-gear svg{width:14px;height:14px;}

/* ---- 下拉菜单（fixed 定位，坐标由 JS 按锚点设定，挂 body 脱离 transform 包含块）---- */
.${NS}-menu{position:fixed;z-index:9999;min-width:176px;max-width:90vw;max-height:70vh;overflow:auto;padding:4px;border-radius:6px;background:var(--pm-menu);border:1px solid var(--pm-border);box-shadow:var(--pm-shadow);display:none;}
.${NS}-menu.open{display:block;}
.${NS}-menu-item{display:flex;align-items:center;gap:8px;padding:6px 10px;font-size:12px;border-radius:4px;cursor:pointer;color:var(--pm-fg);}
.${NS}-menu-item:hover{background:var(--pm-accent);color:#fff;}
.${NS}-menu-item.danger:hover{background:var(--pm-danger);}
.${NS}-menu-sep{height:1px;margin:4px 6px;background:var(--pm-border);}

/* ---- URL 输入弹层 ---- */
.${NS}-url-panel{overflow:hidden;max-height:0;opacity:0;transition:max-height .2s ease,opacity .15s;padding:0 12px;}
.${NS}-url-panel.open{max-height:48px;opacity:1;padding-bottom:8px;}
.${NS}-url-inner{display:flex;gap:6px;}
.${NS}-url-input{flex:1 1 auto;min-width:0;padding:5px 8px;border:1px solid var(--pm-border);border-radius:3px;background:var(--pm-input);color:var(--pm-fg);font-size:12px;outline:none;}
.${NS}-url-input:focus{border-color:var(--pm-accent);}
.${NS}-url-go{padding:5px 12px;font-size:12px;border:none;border-radius:3px;background:var(--pm-accent);color:#fff;cursor:pointer;}
.${NS}-url-go:hover{filter:brightness(1.1);}

/* ---- 空态 ---- */
.${NS}-empty{display:flex;flex-direction:column;align-items:center;gap:8px;padding:32px 16px;color:var(--pm-fg-muted);}
.${NS}-empty-icon{font-size:28px;opacity:.5;}
.${NS}-empty-text{font-size:12px;text-align:center;line-height:1.6;}

/* ---- 「需要重新加载」横幅（VS Code Reload Required 同款） ---- */
.${NS}-reload{display:flex;align-items:center;gap:8px;margin:8px 8px 10px;padding:8px 10px;border:1px solid color-mix(in srgb, var(--pm-warn) 45%, transparent);border-radius:6px;background:color-mix(in srgb, var(--pm-warn) 12%, var(--pm-bg));}
.${NS}-reload-text{flex:1 1 auto;font-size:12px;line-height:1.5;color:var(--pm-fg);}
.${NS}-reload-x{flex:0 0 auto;border:0;background:transparent;color:var(--pm-fg-muted);font-size:14px;line-height:1;padding:2px 4px;cursor:pointer;}
.${NS}-reload-x:hover{color:var(--pm-fg);}

/* ---- 源码查看器浮层（PluginCodeViewer.vue，挂 body → 令牌在此全局重声明）---- */
/* host div 是 0×0 + pointer-events:none（main.ts 惯例），浮层必须自行恢复命中，
   否则整块对话框不可交互（滚动/点击全灭）。 */
.${NS}-viewer-mask{position:fixed;inset:0;z-index:2147483600;pointer-events:auto;background:rgba(1,4,9,.55);display:flex;align-items:center;justify-content:center;padding:4vh 4vw;}
.${NS}-viewer{display:flex;flex-direction:column;width:min(1100px,92vw);height:min(760px,92vh);background:var(--pm-bg);color:var(--pm-fg);border:1px solid var(--pm-border);border-radius:8px;overflow:hidden;box-shadow:0 16px 48px rgba(0,0,0,.35);}
.${NS}-viewer-hdr{display:flex;align-items:center;gap:8px;padding:8px 12px;background:var(--pm-bg2);border-bottom:1px solid var(--pm-border);font-size:13px;flex:0 0 auto;}
.${NS}-viewer-title{font-weight:600;}
.${NS}-viewer-dirty{color:var(--pm-warn);}
.${NS}-viewer-ro{opacity:.6;font-size:12px;}
.${NS}-viewer-spacer{flex:1 1 auto;}
.${NS}-viewer-btn{padding:3px 10px;font-size:12px;border:1px solid var(--pm-border);border-radius:6px;background:var(--pm-bg);color:var(--pm-fg);cursor:pointer;}
.${NS}-viewer-btn.primary{background:var(--pm-accent);border-color:var(--pm-accent);color:#fff;}
.${NS}-viewer-btn:disabled{opacity:.5;cursor:default;}
.${NS}-viewer-x{border:0;background:none;color:var(--pm-fg);font-size:18px;line-height:1;cursor:pointer;padding:2px 6px;}
.${NS}-viewer-editor{flex:1 1 auto;min-height:0;overflow:hidden;}
.${NS}-viewer-editor .cm-editor{height:100%;}
`;
  const style = document.createElement("style");
  style.id = `${NS}-styles`;
  style.textContent = css;
  document.head.appendChild(style);
}

/* -------------------------------------------------------------- SVG icons */

const ICON_SEARCH = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>`;
// 齿轮（管理/更多）——复刻 VS Code 行内设置入口。
const ICON_GEAR = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3.2"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`;
// 排序（三个长度递减的横条）——VS Code「Sort»」图标观感。
const ICON_SORT = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h13M4 12h9M4 18h5"/></svg>`;
// 刷新（圆弧 + 箭头）——「检查远端/刷新仓库列表」工具栏按钮。
const ICON_REFRESH = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 11a8 8 0 1 0-2.3 6.3"/><path d="M20 4v7h-7"/></svg>`;

/* ------------------------------------------------------------ 展示辅助 */

type SortKey = "install" | "name" | "source";
let query = "";
let sortKey: SortKey = "install";

/* ---- 「未安装」注册表（host GET /plugin-registry，见 plugins/registry.json） ---- */

export interface RegistryEntry {
  name: string;
  url: string;
  /** 插件 meta.name（中文名）；缺省回退文件名。 */
  title?: string;
  titleEn?: string;
  description?: string;
  descriptionEn?: string;
}
let registryEntries: RegistryEntry[] = [];
let registryLoaded = false;
/** 同条目防重复点击：进行中的下载 URL 集合（仅拦「同一 DOM 存活期间的二次点击」，不驱动任何文案）。 */
const downloadingUrls = new Set<string>();

/** 注册表拉取中（骨架行/刷新动画的开关；fetchRegistry 起止时翻转并经面板句柄重绘）。 */
let registryFetching = false;
/** 骨架行最短可见时长：本地 host 常 <100ms 返回，动画一闪而过不如没有。 */
const SKELETON_MIN_MS = 300;
let fetchStartedAt = 0;
/** 骨架最短可见窗口的推迟重绘票据（见 renderList）。 */
let skeletonRerenderTimer: ReturnType<typeof setTimeout> | 0 = 0;

/** 骨架行还需展示的剩余毫秒（已等满窗口返回 0）。 */
function skeletonWaitMs(): number {
  return Math.max(0, SKELETON_MIN_MS - (Date.now() - fetchStartedAt));
}

async function fetchRegistry(force = false, onSettled?: () => void): Promise<RegistryEntry[]> {
  if (registryLoaded && !force) return registryEntries;
  if (!registryFetching) {
    registryFetching = true;
    fetchStartedAt = Date.now();
    liveRerender?.();
  }
  try {
    // force = 用户点「检查远端」：带 refresh=1 让 host 跳过 5 分钟缓存真打 GitHub。
    const res = await fetch(`/api/dsh-file-workbench/plugin-registry${force ? "?refresh=1" : ""}`, { cache: "no-cache" });
    const body = await res.json();
    // host 返回信封 { ok, data }（在线枚举 GitHub plugins/，失败回退本地 registry.json）。
    const arr = Array.isArray(body) ? body : body?.data;
    registryEntries = Array.isArray(arr) ? arr.filter((e: RegistryEntry) => e?.name && e?.url) : [];
  } catch {
    registryEntries = [];
  }
  registryLoaded = true;
  registryFetching = false;
  (onSettled ?? liveRerender)?.();
  return registryEntries;
}

/** 注册表项是否已在安装列表中（按种子裸名 / file·url 命名空间 id / bundle loader id 归一匹配）。 */
function isInstalled(p: UserPlugin[], entry: RegistryEntry): boolean {
  const bare = entry.url.match(/[?&]k=([A-Za-z0-9._-]+)/)?.[1] ?? entry.name;
  // 「从 URL 导入」的记录主键取文件名（含 .js），与裸名不互含——先剥扩展名再逐一比对。
  const stem = bare.replace(/\.(c|m)?js$/i, "");
  const ids = new Set(p.map((x) => x.id));
  for (const cand of new Set([bare, stem])) {
    // 种子行（裸名 id）不算已安装：builtin 记录在启动迁移中会变成 url. 记录；若迁移没跑成
    // （离线等），未安装区仍要露出下载入口，不能让插件「两边都不在」。file./url. 前缀照常匹配。
    if (cand === bare && p.some((x) => x.source === "builtin" && x.id === cand)) continue;
    if (ids.has(cand) || ids.has(`file.${cand}`) || ids.has(`url.${cand}`) || ids.has(`dsh-fw.${cand}`)) return true;
  }
  return false;
}

function sourceLabel(s: UserPlugin["source"]): string {
  return s === "builtin" ? t("srcBuiltin") : s === "file" ? t("srcFile") : t("srcUrl");
}

/** 从描述里抽取「对标 XXX」作为发布方位（EN 模式优先从英文描述抽 "Counterpart of XXX"；无则回退来源标签）。 */
function vendorOf(p: UserPlugin): string {
  if (!isZh()) {
    const en = p.descriptionEn?.match(/Counterpart of (.+?)\./);
    if (en) return en[1].trim();
  }
  const m = p.description?.match(/对标\s*([^。（(]+)/);
  return m ? m[1].trim() : sourceLabel(p.source);
}

function avatarLetter(p: UserPlugin): string {
  const n = shortName(p);
  return (n[0] ?? "?").toUpperCase();
}

function matchesQuery(p: UserPlugin, q: string): boolean {
  if (!q) return true;
  const hay = `${p.name} ${p.nameEn ?? ""} ${p.description ?? ""} ${p.descriptionEn ?? ""} ${vendorOf(p)}`.toLowerCase();
  return hay.includes(q);
}

function shortName(p: UserPlugin): string {
  return p.name.replace(/^@[^/]+\//, "");
}

/** 按当前语言显示的名称（内置种子带 nameEn；外部插件回退原 name）。 */
function displayName(p: UserPlugin): string {
  return (!isZh() && p.nameEn) || shortName(p);
}

/** 按当前排序键排序（分区后各段内部使用；install 键 = 维持导入/注册原序）。 */
function sortPlugins(arr: UserPlugin[]): UserPlugin[] {
  const s = [...arr];
  if (sortKey === "name") s.sort((a, b) => displayName(a).localeCompare(displayName(b)));
  else if (sortKey === "source") s.sort((a, b) => a.source.localeCompare(b.source) || displayName(a).localeCompare(displayName(b)));
  return s;
}

/** 分区折叠态（模块级，跨重绘/语言切换存活；仅本会话内）。 */
const collapsedSections = new Set<"installed" | "browse">();

/** 分区标题行（「已安装 (n)」/「浏览器 (n)」）：点击折叠/展开该段，样式对齐 VS Code collapsible section。 */
function sectionHeader(label: string, n: number, key: "installed" | "browse", root: HTMLElement, ctx: ActivityContext): HTMLElement {
  const h = document.createElement("div");
  h.className = `${NS}-section`;
  const caret = document.createElement("span");
  caret.className = `${NS}-section-caret`;
  caret.textContent = collapsedSections.has(key) ? "\u25b8" : "\u25be"; // ▸ / ▾
  const text = document.createElement("span");
  text.textContent = `${label} (${n})`;
  h.append(caret, text);
  h.addEventListener("click", () => {
    if (collapsedSections.has(key)) collapsedSections.delete(key);
    else collapsedSections.add(key);
    renderList(root, ctx);
  });
  return h;
}

/* --------------------------------------------------------------- 菜单纯净化 */

/** 全局单例下拉：打开新菜单前先关闭旧的，避免多个菜单叠加或监听器泄漏。 */
let activeMenu: { el: HTMLElement; close: () => void } | null = null;

function openMenuAt(anchor: HTMLElement, items: { label: string; onClick: () => void; danger?: boolean }[]): void {
  closeActiveMenu();
  const menu = document.createElement("div");
  menu.className = `${NS}-menu`;
  for (const it of items) {
    const node = document.createElement("div");
    node.className = `${NS}-menu-item${it.danger ? " danger" : ""}`;
    node.textContent = it.label;
    node.addEventListener("click", (e) => {
      e.stopPropagation();
      close();
      it.onClick();
    });
    menu.append(node);
  }
  document.body.appendChild(menu);

  const r = anchor.getBoundingClientRect();
  menu.style.visibility = "hidden";
  menu.classList.add("open");
  const mw = menu.offsetWidth;
  const mh = menu.offsetHeight;
  let left = r.right - mw; // 右对齐锚点
  if (left < 8) left = Math.max(8, r.left);
  if (left + mw > window.innerWidth - 8) left = Math.max(8, window.innerWidth - 8 - mw);
  let top = r.bottom + 4;
  if (top + mh > window.innerHeight - 8) top = Math.max(8, r.top - 4 - mh);
  menu.style.left = `${left}px`;
  menu.style.top = `${top}px`;
  menu.style.visibility = "";

  function close(): void {
    document.removeEventListener("mousedown", onDoc, true);
    window.removeEventListener("resize", close);
    menu.remove();
    if (activeMenu?.el === menu) activeMenu = null;
  }
  function onDoc(e: MouseEvent): void {
    if (!menu.contains(e.target as Node)) close();
  }
  // 延后一帧挂监听，避免触发本次点击的 mousedown 立刻把菜单关掉。
  requestAnimationFrame(() => document.addEventListener("mousedown", onDoc, true));
  window.addEventListener("resize", close);
  activeMenu = { el: menu, close };
}

function closeActiveMenu(): void {
  activeMenu?.close();
}

/* ---- 源码查看器浮层（Vue 组件挂 body，参照 main.ts 全局宿主：0×0 + 显式 z-index） ---- */

let activeViewer: { host: HTMLDivElement; app: import("vue").App } | undefined;

/**
 * 打开插件源码查看/编辑器。同一时刻仅一个实例（重复调用先关旧的）。
 * onSave/onReload 由调用方注入（保存编辑并重载 / 仅重载），内部经响应式 props 转发给组件。
 */
function openCodeViewer(opts: {
  filename: string;
  code: string;
  editable: boolean;
  edited?: boolean;
  onSave?: (code: string) => Promise<void> | void;
  onReload?: (code: string) => Promise<void> | void;
  onRestore?: () => Promise<void> | void;
}): void {
  closeCodeViewer();
  const host = document.createElement("div");
  host.style.cssText = "position:fixed;left:0;top:0;width:0;height:0;overflow:visible;z-index:2147483600;pointer-events:none;";
  document.body.appendChild(host);
  const viewerProps = reactive({
    filename: opts.filename,
    code: opts.code,
    editable: opts.editable,
    edited: opts.edited ?? false,
    onSave: async (code: string) => {
      await opts.onSave?.(code);
      closeCodeViewer();
    },
    onReload: async (code: string) => {
      await opts.onReload?.(code);
      closeCodeViewer();
    },
    onRestore: async () => {
      await opts.onRestore?.();
      closeCodeViewer();
    },
    onClose: () => closeCodeViewer(),
  });
  const app = createApp(PluginCodeViewer, viewerProps);
  app.mount(host);
  activeViewer = { host, app };
}

function closeCodeViewer(): void {
  if (!activeViewer) return;
  const { host, app } = activeViewer;
  activeViewer = undefined;
  try {
    app.unmount();
  } finally {
    host.remove();
  }
}

/* ------------------------------------------------------------------ 统一列表渲染 */

/** 注册表条目 → 伪插件记录（仅用于与真实记录同构排序展示；不入库）。 */
function entryToPlugin(e: RegistryEntry): UserPlugin {
  return {
    id: `__reg.${e.name}`,
    // name 存 meta 中文名（无则文件名）；nameEn 存英文名——displayName 按语言取 nameEn。
    name: e.title || e.name,
    nameEn: e.titleEn || "",
    source: "url",
    origin: e.url,
    description: e.description ?? "",
    descriptionEn: e.descriptionEn ?? "",
    code: e.url,
    enabled: false,
  } as unknown as UserPlugin;
}

function renderList(root: HTMLElement, ctx: ActivityContext): void {
  const q = query.trim().toLowerCase();
  // 防重保险：任何合并路径若产出同 id 双记录，已安装段只显一条（市场模型下 url./file. 为唯一主键）。
  const seenIds = new Set<string>();
  const all = listUserPlugins().filter((p) => !seenIds.has(p.id) && (seenIds.add(p.id), true));
  const installed = all.filter((p) => matchesQuery(p, q));
  const available = registryEntries
    .filter((e) => !isInstalled(all, e))
    .filter((e) => !q || `${e.name} ${e.title ?? ""} ${e.titleEn ?? ""} ${e.description ?? ""} ${e.descriptionEn ?? ""}`.toLowerCase().includes(q))
    .map(entryToPlugin);

  const list = root.querySelector<HTMLElement>(`.${NS}-list`);
  if (!list) return;
  // 推迟重绘（骨架最短可见窗口）只留一张有效票据：新渲染即作废旧定时器，防过期回写。
  clearTimeout(skeletonRerenderTimer);
  skeletonRerenderTimer = 0;
  list.replaceChildren();
  // VS Code 扩展面板式两段分区：「已安装」（本地）在上，「浏览器」（远程注册表）在下；
  // 下载成功的项从注册表移入本地段（isInstalled 过滤 + 重绘即达成）。点标题折叠/展开。
  const shown = sortPlugins(installed);
  list.append(sectionHeader(t("pmInstalledSection"), shown.length, "installed", root, ctx));
  if (!collapsedSections.has("installed")) {
    if (shown.length) {
      for (const p of shown) list.append(buildRow(p, root, ctx));
    } else {
      const empty = document.createElement("div");
      empty.className = `${NS}-empty`;
      empty.innerHTML = `<div class="${NS}-empty-icon">&#x2699;</div><div class="${NS}-empty-text">${
        q ? t("pmEmptyWithQuery", { q: escapeHtml(query) }) : t("pmEmptyNoPlugins")
      }</div>`;
      list.append(empty);
    }
  }
  if (available.length || registryFetching) {
    list.append(sectionHeader(t("pmBrowseSection"), available.length, "browse", root, ctx));
    if (!collapsedSections.has("browse")) {
      for (const p of available) list.append(buildAvailableRow(p, root, ctx));
      // 拉取中：骨架行占位（头像块 + 双脉冲线），列表到达后由重绘自然替换。
      // ⚠️ 最短可见 300ms：本地 host 秒回时动画会一闪而过等于没有——
      // 未等满则把重绘推迟到窗口末尾（registryFetching 此时已复位，再渲染的是真列表）。
      if (registryFetching) {
        for (let i = 0; i < 3; i++) list.append(buildSkeletonRow());
        const w = skeletonWaitMs();
        if (w > 0) skeletonRerenderTimer = setTimeout(() => renderList(root, ctx), w);
      }
    }
  }

  // VS Code「Reload Required」同款：启用/导入后贡献点未实时生效 → 横幅一键刷新。
  const pending = [...pendingReloadIds].filter((id) => all.some((p) => p.id === id && p.enabled));
  if (pending.length) {
    const banner = document.createElement("div");
    banner.className = `${NS}-reload`;
    const msg = document.createElement("div");
    msg.className = `${NS}-reload-text`;
    msg.textContent = t("pmReloadRequired", { n: String(pending.length) });
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `${NS}-btn primary`;
    btn.textContent = t("pmReloadNow");
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      window.location.reload();
    });
    const dismiss = document.createElement("button");
    dismiss.type = "button";
    dismiss.className = `${NS}-tool ${NS}-reload-x`;
    dismiss.title = t("pmReloadDismiss");
    dismiss.textContent = "\u00d7"; // ×
    dismiss.addEventListener("click", (e) => {
      e.stopPropagation();
      for (const id of pending) pendingReloadIds.delete(id);
      renderList(root, ctx);
    });
    banner.append(msg, btn, dismiss);
    list.append(banner);
  }
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c] as string);
}

/* ---- 查看/编辑源码入口 ---- */

/** 注册表伪行的下载文件名：同源 /plugin-src?k= 或 git contents 直链末段；真实行用记录 id。 */
function viewerFilename(p: UserPlugin): string {
  const k =
    p.origin?.match(/[?&]k=([A-Za-z0-9._-]+)/)?.[1] ??
    p.origin?.match(/github(?:usercontent|\.com)\/[^?]*?\/([A-Za-z0-9._-]+)\.js/i)?.[1];
  return `${k ?? p.id.replace(/^(file|url)\./, "")}.js`;
}

/** 已安装行：打开查看器（内置种子只读预览，外部插件可编辑保存重载）。 */
function openInstalledViewer(p: UserPlugin, root: HTMLElement, ctx: ActivityContext): void {
  void getPluginSource(p.id).then((code) => {
    openCodeViewer({
      filename: viewerFilename(p),
      code,
      editable: p.source !== "builtin",
      edited: !!p.editedCode,
      onRestore: async () => {
        await savePluginEditedCode(p.id, null);
        ctx.toast("ok", t("pmCodeRestored", { name: shortName(p) }));
        renderList(root, ctx);
      },
      onSave: async (next) => {
        try {
          await savePluginEditedCode(p.id, next);
          const rec = listUserPlugins().find((x) => x.id === p.id);
          if (rec?.error) throw new Error(rec.error);
          ctx.toast("ok", t("pmCodeSaved", { name: shortName(p) }));
        } catch (e) {
          ctx.toast("error", t("pmCodeSaveFailed", { msg: e instanceof Error ? e.message : String(e) }));
        }
        renderList(root, ctx);
      },
      onReload: async (next) => {
        // 「重新加载」先落盘当前缓冲区（含未点保存的编辑），再重启贡献点：
        // savePluginEditedCode 对已启用插件内部就是 enablePlugin（撤销旧注册 + 重 eval，幂等）。
        try {
          await savePluginEditedCode(p.id, next);
        } catch (e) {
          ctx.toast("error", t("pmCodeSaveFailed", { msg: e instanceof Error ? e.message : String(e) }));
          renderList(root, ctx);
          return;
        }
        const rec = listUserPlugins().find((x) => x.id === p.id);
        if (rec?.error) ctx.toast("error", t("pmEnableFailedReason", { name: shortName(p), msg: rec.error }));
        else ctx.toast("ok", t("pmCodeReloaded", { name: shortName(p) }));
        renderList(root, ctx);
      },
    });
  });
}

function buildRow(p: UserPlugin, root: HTMLElement, ctx: ActivityContext): HTMLElement {
  const row = document.createElement("div");
  row.className = `${NS}-row${p.enabled ? "" : " is-disabled"}`;

  const av = document.createElement("div");
  av.className = `${NS}-avatar ${p.source}`;
  av.textContent = avatarLetter(p);
  row.append(av);

  const main = document.createElement("div");
  main.className = `${NS}-main`;

  const nameLine = document.createElement("div");
  nameLine.className = `${NS}-nameline`;
  if (p.enabled) {
    // 醒目标记：已启用行前置绿点 + 「已启用」小徽章（禁用行本就整行淡化，无需标记）。
    const badge = document.createElement("span");
    badge.className = `${NS}-badge`;
    badge.textContent = t("pmEnabledBadge");
    nameLine.append(badge);
  }
  const name = document.createElement("span");
  name.className = `${NS}-name`;
  name.textContent = displayName(p);
  name.title = p.origin || p.name;
  const vendor = document.createElement("span");
  vendor.className = `${NS}-vendor`;
  vendor.textContent = vendorOf(p);
  nameLine.append(name, vendor);
  if (p.version) {
    const ver = document.createElement("span");
    ver.className = `${NS}-ver`;
    ver.textContent = `v${p.version}`;
    nameLine.append(ver);
  }
  main.append(nameLine);

  const descText = pluginDesc(p);
  if (descText) {
    const desc = document.createElement("div");
    desc.className = `${NS}-desc`;
    desc.textContent = descText;
    main.append(desc);
  }

  // 已启用但视图被 when()（如「需先打开项目」）挡住时，给一行提示，避免用户以为「点了没反应」。
  if (p.enabled && !ctx.projectDir) {
    const note = document.createElement("div");
    note.className = `${NS}-desc`;
    note.style.color = "var(--pm-warn)";
    note.textContent = t("pmNeedsProject");
    main.append(note);
  }

  if (p.error) {
    const err = document.createElement("div");
    err.className = `${NS}-err`;
    err.textContent = p.error;
    main.append(err);
  }

  row.append(main);

  /* 悬停浮出的操作区：主按钮（启用/禁用）+ 齿轮菜单。 */
  const acts = document.createElement("div");
  acts.className = `${NS}-rowacts`;

  const primary = document.createElement("button");
  primary.type = "button";
  primary.className = `${NS}-btn${p.enabled ? "" : " primary"}`;
  primary.textContent = p.enabled ? t("pmDisable") : t("pmEnable");
  primary.addEventListener("click", (e) => {
    e.stopPropagation();
    if (p.enabled) {
      disablePlugin(p.id);
      pendingReloadIds.delete(p.id);
      renderList(root, ctx);
    } else {
      const before = viewIds();
      void enablePlugin(p.id).then(() => {
        if (p.error) ctx.toast("error", t("pmEnableFailedReason", { name: shortName(p), msg: p.error }));
        markIfNeedsReload(p, before);
        renderList(root, ctx);
      });
    }
  });
  acts.append(primary);

  const gear = document.createElement("button");
  gear.type = "button";
  gear.className = `${NS}-gear`;
  gear.title = t("pmMoreActions");
  gear.innerHTML = ICON_GEAR;
  gear.addEventListener("click", (e) => {
    e.stopPropagation();
    const items: { label: string; onClick: () => void; danger?: boolean }[] = [
      {
        label: p.enabled ? t("pmDisable") : t("pmEnable"),
        onClick: () => {
          if (p.enabled) {
            disablePlugin(p.id);
            pendingReloadIds.delete(p.id);
            renderList(root, ctx);
          } else {
            const before = viewIds();
            void enablePlugin(p.id).then(() => {
              if (p.error) ctx.toast("error", t("pmEnableFailedReason", { name: shortName(p), msg: p.error }));
              markIfNeedsReload(p, before);
              renderList(root, ctx);
            });
          }
        },
      },
    ];
    items.push({
      label: p.source === "builtin" ? t("pmCodeView") : t("pmCodeEdit"),
      onClick: () => openInstalledViewer(p, root, ctx),
    });
    // 移除：所有记录统一入口（种子记录的迁移语义在 removePlugin 内部）。
    items.push({
      label: t("pmRemove"),
      danger: true,
      onClick: () => {
        const msg = p.source === "builtin" ? t("pmSeedRemoveConfirm", { name: shortName(p) }) : t("pmRemoveConfirm", { name: shortName(p) });
        void confirmDialog({ title: t("pmRemove"), message: msg }).then(async (ok) => {
          if (!ok) return;
          await removePlugin(p.id);
          renderList(root, ctx);
        });
      },
    });
    openMenuAt(gear, items);
  });
  acts.append(gear);

  row.append(acts);
  return row;
}

/* ------------------------------------------------------------------ 未安装（注册表）行 */

/** 注册表拉取中的骨架行：头像块 + 两条脉冲线，与真实行同布局防跳动。 */
function buildSkeletonRow(): HTMLElement {
  const row = document.createElement("div");
  row.className = `${NS}-skel`;
  row.setAttribute("aria-hidden", "true");
  const av = document.createElement("div");
  av.className = `${NS}-skel-avatar`;
  const lines = document.createElement("div");
  lines.className = `${NS}-skel-lines`;
  const l1 = document.createElement("div");
  l1.className = `${NS}-skel-line w60`;
  const l2 = document.createElement("div");
  l2.className = `${NS}-skel-line w85`;
  lines.append(l1, l2);
  row.append(av, lines);
  return row;
}

/** 注册表条目行（统一列表里的「未安装」项）：名称 + 描述 + 悬停「下载」按钮；点击即经 importFromUrl 安装并启用。 */
function buildAvailableRow(p: UserPlugin, root: HTMLElement, ctx: ActivityContext): HTMLElement {
  const name_ = displayName(p);
  const url = p.origin ?? "";
  const row = document.createElement("div");
  row.className = `${NS}-row is-uninstalled`;

  const av = document.createElement("div");
  av.className = `${NS}-avatar url`;
  av.textContent = (name_[0] ?? "?").toUpperCase();
  row.append(av);

  const main = document.createElement("div");
  main.className = `${NS}-main`;
  const nameLine = document.createElement("div");
  nameLine.className = `${NS}-nameline`;
  const name = document.createElement("span");
  name.className = `${NS}-name`;
  name.textContent = name_;
  // p.name 即 meta 中文名；EN 模式标题行显英文名，tooltip 补另一语名与下载地址。
  name.title = isZh() ? url : `${p.name} (${url})`;
  const vendor = document.createElement("span");
  vendor.className = `${NS}-vendor`;
  vendor.textContent = t("pmSrcRegistry");
  nameLine.append(name, vendor);
  main.append(nameLine);
  const descText = (!isZh() && p.descriptionEn) || p.description || "";
  if (descText) {
    const desc = document.createElement("div");
    desc.className = `${NS}-desc`;
    desc.textContent = descText;
    main.append(desc);
  }
  row.append(main);

  const acts = document.createElement("div");
  acts.className = `${NS}-rowacts`;
  const preview = document.createElement("button");
  preview.type = "button";
  preview.className = `${NS}-btn`;
  preview.textContent = t("pmCodePreview");
  preview.addEventListener("click", (ev) => {
    ev.stopPropagation();
    void (async () => {
      try {
        const abs = new URL(url, window.location.href).href;
        // git 直链（注册表新通道）：浏览器直连 api.github.com 受 CORS/网络限制，
        // 统一经 host /fetch-plugin 代理取原文；其余地址（本地导入等）照旧直连。
        const isGit = /^https:\/\/(api\.github\.com|raw\.githubusercontent\.com)\//i.test(abs);
        let code: string;
        if (isGit) {
          const r = await fetch(`${apiBase}/fetch-plugin`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ url: abs }),
          });
          const j = (await r.json().catch(() => null)) as { ok?: boolean; error?: string; data?: { code?: string } } | null;
          if (!j?.ok || !j.data?.code) throw new Error(j?.error || `HTTP ${r.status}`);
          code = j.data.code;
        } else {
          const r = await fetch(abs, { cache: "no-cache" });
          if (!r.ok) throw new Error(`HTTP ${r.status}`);
          code = await r.text();
        }
        openCodeViewer({ filename: viewerFilename(p), code, editable: false });
      } catch (e) {
        ctx.toast("error", t("pmCodePreviewFailed", { msg: e instanceof Error ? e.message : String(e) }));
      }
    })();
  });
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = `${NS}-btn primary`;
  btn.textContent = t("pmDownload");
  btn.addEventListener("click", (ev) => {
    ev.stopPropagation();
    if (downloadingUrls.has(url)) return;
    downloadingUrls.add(url);
    // busy 态只写在这颗按钮元素上：重绘会重建整行 DOM，新按钮天然回到「下载」初始态——
    // loading 不再经全局名字集合广播（同名已安装行曾被误标、且异常路径漏清账会永久卡「下载中」）。
    btn.disabled = true;
    btn.textContent = t("pmDownloading");
    void (async () => {
      // before 必须在 await 前抓：下载完成后种子视图可能已注册，晚抓就漏判「需重载」。
      const before = viewIds();
      try {
        const r = await importFromUrl(url);
        if (r.ok) {
          ctx.toast("ok", t("pmDownloaded", { name: name_ }));
          if (r.id) {
            const rec = listUserPlugins().find((pp) => pp.id === r.id);
            if (rec) markDownloadedNeedsReload(rec, before);
          }
          // 下载即启用完成后强刷注册表：host 侧枚举可能滞后（上游新增项都靠它），
          // 到位后 renderList 重算 isInstalled，把仍显示「可下载」的多余行抹掉。
          await fetchRegistry(true).catch(() => {});
        } else {
          ctx.toast("error", t("pmDownloadFailed", { name: name_, msg: r.error ?? "" }));
        }
      } catch (err) {
        ctx.toast("error", t("pmDownloadFailed", { name: name_, msg: err instanceof Error ? err.message : String(err) }));
      } finally {
        downloadingUrls.delete(url);
        // 本按钮若已被重绘替换则无所谓；仍是活节点就恢复可点（失败重试路径）。
        btn.disabled = false;
        btn.textContent = t("pmDownload");
        renderList(root, ctx);
      }
    })();
  });
  acts.append(preview, btn);
  row.append(acts);
  return row;
}

/** 构建整个管理界面到 host（inner 容器），返回清理/重绘句柄。语言切换时由 renderManager 拆掉重建。 */
function buildChrome(host: HTMLElement, ctx: ActivityContext): { cleanup: () => void; rerender: () => void } {
  const root = document.createElement("div");
  root.className = `${NS}-root`;

  /* 标题栏 + 工具条（排序 + 管理⋯） */
  const hdr = document.createElement("div");
  hdr.className = `${NS}-hdr`;
  const title = document.createElement("div");
  title.className = `${NS}-title`;
  title.textContent = t("pmTitle");
  const spacer = document.createElement("div");
  spacer.className = `${NS}-spacer`;
  const sortBtn = document.createElement("button");
  sortBtn.type = "button";
  sortBtn.className = `${NS}-tool`;
  sortBtn.title = t("pmSort");
  sortBtn.innerHTML = ICON_SORT;
  sortBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const mk = (k: SortKey, label: string) => ({
      label,
      onClick: () => {
        sortKey = k;
        renderList(root, ctx);
      },
    });
    openMenuAt(sortBtn, [mk("install", t("pmSortInstall")), mk("name", t("pmSortName")), mk("source", t("pmSortSource"))]);
  });
  const kebab = document.createElement("button");
  kebab.type = "button";
  kebab.className = `${NS}-tool`;
  kebab.title = t("pmManage");
  kebab.textContent = "\u22ef"; // ⋯
  // 刷新仓库列表：独立工具栏按钮，拉取中图标转圈（is-busy）。
  const refreshBtn = document.createElement("button");
  refreshBtn.type = "button";
  refreshBtn.className = `${NS}-tool ${NS}-refBtn`;
  refreshBtn.title = t("pmRefreshRegistry");
  refreshBtn.innerHTML = ICON_REFRESH;
  refreshBtn.addEventListener("click", () => {
    if (registryFetching) return;
    void fetchRegistry(true, () => {
      refreshBtn.classList.remove("is-busy");
      renderList(root, ctx);
    });
    refreshBtn.classList.add("is-busy");
  });
  hdr.append(title, spacer, sortBtn, refreshBtn, kebab);

  /* 搜索框 */
  const searchWrap = document.createElement("div");
  searchWrap.className = `${NS}-search`;
  const searchBox = document.createElement("div");
  searchBox.className = `${NS}-search-box`;
  searchBox.innerHTML = ICON_SEARCH;
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.className = `${NS}-search-input`;
  searchInput.placeholder = t("pmSearchPlaceholder");
  searchInput.addEventListener("input", () => {
    query = searchInput.value;
    renderList(root, ctx);
  });
  searchBox.append(searchInput);
  searchWrap.append(searchBox);

  /* 统一列表（已安装 + 注册表未安装合并展示，见 renderList） */
  const listWrap = document.createElement("div");
  listWrap.className = `${NS}-listwrap`;
  const list = document.createElement("div");
  list.className = `${NS}-list`;
  listWrap.append(list);

  /* 文件选择器（隐藏） */
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = ".js,.cjs,.mjs,text/javascript";
  fileInput.multiple = true;
  fileInput.style.display = "none";
  fileInput.addEventListener("change", async () => {
    const files = [...(fileInput.files ?? [])];
    for (const f of files) {
      const before = viewIds();
      try {
        const r = await importFromFile(f);
        if (!r.ok) ctx.toast("error", t("pmImportFailed", { name: f.name, msg: r.error || "" }));
        else if (r.id) { const rec = listUserPlugins().find((pp) => pp.id === r.id); if (rec) markIfNeedsReload(rec, before); }
      } catch (e) {
        ctx.toast("error", t("pmImportFailed", { name: f.name, msg: e instanceof Error ? e.message : String(e) }));
      }
    }
    fileInput.value = "";
    renderList(root, ctx);
  });

  /* URL 导入弹层 */
  const urlPanel = document.createElement("div");
  urlPanel.className = `${NS}-url-panel`;
  const urlInner = document.createElement("div");
  urlInner.className = `${NS}-url-inner`;
  const urlInput = document.createElement("input");
  urlInput.type = "text";
  urlInput.className = `${NS}-url-input`;
  urlInput.placeholder = t("pmUrlPlaceholder");
  const urlGo = document.createElement("button");
  urlGo.type = "button";
  urlGo.className = `${NS}-url-go`;
  urlGo.textContent = t("pmPull");
  const doUrlImport = async (): Promise<void> => {
    const v = urlInput.value.trim();
    if (!v) return;
    urlGo.disabled = true;
    urlGo.textContent = t("pmPulling");
    const before = viewIds();
    try {
      const r = await importFromUrl(v);
      if (r.ok) {
        urlInput.value = "";
        urlPanel.classList.remove("open");
        ctx.toast("ok", t("pmUrlImported"));
        if (r.id) { const rec = listUserPlugins().find((pp) => pp.id === r.id); if (rec) markIfNeedsReload(rec, before); }
      } else {
        ctx.toast("error", t("pmUrlImportFailed", { msg: r.error || "" }));
      }
    } catch (e) {
      ctx.toast("error", t("pmUrlImportFailed", { msg: e instanceof Error ? e.message : String(e) }));
    } finally {
      urlGo.disabled = false;
      urlGo.textContent = t("pmPull");
      renderList(root, ctx);
    }
  };
  urlGo.addEventListener("click", () => void doUrlImport());
  urlInput.addEventListener("keydown", (ev) => {
    if (ev.key === "Enter") void doUrlImport();
  });
  urlInner.append(urlInput, urlGo);
  urlPanel.append(urlInner);

  /* 「···」管理菜单 */
  kebab.addEventListener("click", (e) => {
    e.stopPropagation();
    openMenuAt(kebab, [
      { label: t("pmImportFromFile"), onClick: () => fileInput.click() },
      {
        label: t("pmImportFromUrl"),
        onClick: () => {
          urlPanel.classList.toggle("open");
          if (urlPanel.classList.contains("open")) setTimeout(() => urlInput.focus(), 80);
        },
      },
      {
        label: t("pmEnableAll"),
        onClick: () => {
          const targets = listUserPlugins().filter((p) => !p.enabled);
          const before = viewIds();
          void Promise.all(targets.map((p) => enablePlugin(p.id))).then(() => {
            for (const p of targets) markIfNeedsReload(listUserPlugins().find((pp) => pp.id === p.id), before);
            renderList(root, ctx);
          });
        },
      },
      { label: t("pmDisableAll"), onClick: () => { for (const p of listUserPlugins()) { if (p.enabled) { disablePlugin(p.id); pendingReloadIds.delete(p.id); } } renderList(root, ctx); } },
    ]);
  });

  root.append(hdr, searchWrap, urlPanel, listWrap, fileInput);
  host.replaceChildren(root);
  renderList(root, ctx);
  // 注册表异步到达后补一次重绘（未安装条目从空 → 有内容）。
  // force：市场模型下「未安装」区是插件唯一入口，打开面板即真打远端（host 侧 refresh=1 跳缓存）；
  // 拉取中骨架行 + 刷新按钮转圈由 registryFetching/liveRerender 驱动。
  if (registryFetching) refreshBtn.classList.add("is-busy");
  void fetchRegistry(true).then(() => {
    refreshBtn.classList.remove("is-busy");
    renderList(root, ctx);
  });

  return {
    cleanup() {
      clearTimeout(skeletonRerenderTimer);
      skeletonRerenderTimer = 0;
      closeActiveMenu();
      closeCodeViewer();
      host.replaceChildren();
    },
    rerender() {
      // 刷新进行中保持转圈态（本句柄同时被 fetchRegistry 起止回调经 liveRerender 调用）。
      refreshBtn.classList.toggle("is-busy", registryFetching);
      renderList(root, ctx);
    },
  };
}

/**
 * 挂载入口：注入样式、建持久容器，并在**宿主语言切换**时拆掉重建整个界面。
 *
 * 本视图是纯 DOM，标题/占位符/菜单等静态文案只在构建时写一次；仅靠 renderList 换不掉这些，
 * 所以订阅 useI18n().locale，触发一次「清掉旧 chrome → 重新 buildChrome」，等价组件重渲染。
 */
function renderManager(el: HTMLElement, ctx: ActivityContext): { cleanup: () => void; rerender: () => void } {
  injectStyles();
  // 本视图可能挂在浮窗（独立 body）里——面板树内的 <confirm-dialog> 实例够不到，需兜底宿主。
  ensureGlobalDialogHost();
  el.classList.add(`${NS}-view`);

  const inner = document.createElement("div");
  inner.className = `${NS}-inner`;
  inner.style.cssText = "display:flex;flex-direction:column;height:100%;min-height:0;";
  el.replaceChildren(inner);

  let cur = buildChrome(inner, ctx);
  const { locale } = useI18n();
  const stopLocale = watch(locale, () => {
    cur.cleanup();
    cur = buildChrome(inner, ctx);
  });

  return {
    cleanup() {
      stopLocale();
      cur.cleanup();
      el.replaceChildren();
    },
    rerender() {
      cur.rerender();
    },
  };
}
