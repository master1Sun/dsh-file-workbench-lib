/**
 * 工作台主题（黑夜/白天）组合式。
 *
 * 跟随 DSH 宿主已解析的配色方案：宿主把结论写到
 * `html { color-scheme }`＋`body[data-ds-dark-theme]`（见 dsh-better-sidebar
 * theme.ts）。据此判定 dark/light，并把 `data-theme` 打到工作台根元素上；
 * 全局样式按其切换 `--dsh-*` 调色板。宿主尚未决策前回退到系统 prefers-color-scheme。
 */
import { onScopeDispose, ref, watch, type Ref } from "vue";
import { prefs } from "./settings";

/** 综合判定当前是否为深色方案。 */
function isDarkScheme(): boolean {
  // 用户显式指定主题（深色/浅色）不依赖宿主，直接按设置生效。
  if (prefs.theme === "dark") return true;
  if (prefs.theme === "light") return false;
  // 仅「跟随系统(auto)」：跟进 DSH 宿主已解析的白天黑夜
  // （body[data-ds-dark-theme] + html{color-scheme}）。宿主尚未决策时回退系统偏好。
  if (typeof document === "undefined") return true;
  const decided = document.documentElement.style.colorScheme !== "";
  if (decided) return document.body.hasAttribute("data-ds-dark-theme");
  return typeof matchMedia !== "undefined" && matchMedia("(prefers-color-scheme: dark)").matches;
}

/** 工作台核心 `--dsh-*` 变量 → 宿主 token 的映射，供运行期捕获。 */
const TOKEN_MAP: [string, string][] = [
  // 层级语义：bg-base 是宿主最底层的页面底色，layer-1 是抬高一级的面板色（深色下更亮）。
  // 工作台的 --dsh-bg 是主体底色、--dsh-bg2 是工具栏等次级面，必须与宿主同层级对应，
  // 否则夜间会出现「插件比 DSH 更亮/更暗」的色差。
  ["--dsh-bg", "--dsw-alias-bg-base"],
  ["--dsh-bg2", "--dsw-alias-bg-layer-1"],
  ["--dsh-border", "--dsw-alias-border-l1"],
  ["--dsh-fg", "--dsw-alias-label-primary"],
  ["--dsh-fg-weak", "--dsw-alias-label-secondary"],
  // 悬停态用宿主自己的 hover token（DSH 的 :hover 背景即此变量），而不是自造半透明色。
  ["--dsh-hover", "--dsw-alias-interactive-bg-hover"],
  ["--dsh-accent", "--dsw-alias-state-success-primary"],
];

/**
 * 把 DSH 宿主当前的真实主题色捕获到工作台对应变量上，做到“黑夜黑跟 DSH 一致”。
 * 仅当宿主已注入该 token（如“跟随系统”时）才有值；取不到则回退 styles.css 里的静态配色。
 *
 * 关键：必须**同时**写到 html 与工作台根元素。styles.css 在 `.fw-root[data-theme]` 上也定义了
 * 同名变量，那条规则离组件更近，会盖掉只写在 html 上的内联值 —— 这就是历史上夜间底色一直
 * 没有真正跟随 DSH 的原因（只写 html 等于没生效）。
 */
function syncHostColors(root?: HTMLElement | null): void {
  if (typeof document === "undefined") return;
  // 自定义属性可继承，从最深的已知元素读取最准确。
  const probe = root ?? document.body ?? document.documentElement;
  const cs = getComputedStyle(probe);
  const targets = [document.documentElement, root].filter((el): el is HTMLElement => !!el);
  for (const [dsh, token] of TOKEN_MAP) {
    const v = cs.getPropertyValue(token).trim();
    if (!v) continue;
    for (const el of targets) el.style.setProperty(dsh, v);
  }
}

/** 清除运行期内联的主题色，恢复用 styles.css 的静态配色（强制深/浅时用）。 */
function clearHostColors(root?: HTMLElement | null): void {
  if (typeof document === "undefined") return;
  const targets = [document.documentElement, root].filter((el): el is HTMLElement => !!el);
  for (const [dsh] of TOKEN_MAP) {
    for (const el of targets) el.style.removeProperty(dsh);
  }
}

/** 读取工作台根上当前的 data-theme；用于 Teleport 到 body 的浮层对齐主题。 */
export function readCurrentTheme(): "dark" | "light" {
  if (prefs.theme === "dark") return "dark";
  if (prefs.theme === "light") return "light";
  if (typeof document === "undefined") return "dark";
  const el = document.querySelector<HTMLElement>(".fw-root[data-theme]");
  const th = el?.getAttribute("data-theme");
  if (th === "light" || th === "dark") return th;
  return isDarkScheme() ? "dark" : "light";
}

/**
 * 订阅主题并在 elRef（.fw-root）上维护 `data-theme="dark|light"`。
 * 返回响应式主题值；组件卸载时自动清理监听。
 */
export function useTheme(elRef: Ref<HTMLElement | null | undefined>): Ref<"dark" | "light"> {
  const theme = ref<"dark" | "light">(isDarkScheme() ? "dark" : "light");

  function apply(): void {
    const isDark = isDarkScheme();
    theme.value = isDark ? "dark" : "light";
    if (elRef.value) elRef.value.setAttribute("data-theme", theme.value);
    if (typeof document !== "undefined") {
      const doc = document.documentElement;
      doc.setAttribute("data-theme", theme.value);
      // 仅「跟随系统(auto)」且宿主已决策时，把宿主真实主题色带到 html 与工作台根元素，
      // 让夜间黑/白天底与 DSH 完全一致；强制深/浅时清掉内联，用静态配色（避免宿主 token 反向染错）。
      const hostDecided = doc.style.colorScheme !== "";
      if (prefs.theme === "auto" && hostDecided) syncHostColors(elRef.value);
      else clearHostColors(elRef.value);
      // Element Plus 的全局深色开关：html.dark + theme-chalk/dark/css-vars.css。
      doc.classList.toggle("dark", isDark);
      // 强调色自定义：用户指定时覆盖 --dsh-accent。
      // 注意 styles.css 在 .fw-root[data-theme] 上定义了静态 --dsh-accent，会就近盖掉 html 上的值，
      // 因此必须同时写到工作台根元素（inline style 优先级高于类规则）与 html（供 Teleport 浮层使用）。
      setAccent(doc);
      if (elRef.value) setAccent(elRef.value);
    }
  }

  // 把强调色写到指定元素：有用户色就写入，否则移除内联、回落 styles.css/宿主的静态值。
  function setAccent(el: HTMLElement): void {
    if (prefs.accentColor) el.style.setProperty("--dsh-accent", prefs.accentColor);
    else el.style.removeProperty("--dsh-accent");
  }
  apply();

  let observer: MutationObserver | undefined;
  if (typeof document !== "undefined" && typeof MutationObserver !== "undefined") {
    observer = new MutationObserver(apply);
    observer.observe(document.body, { attributes: true, attributeFilter: ["data-ds-dark-theme"] });
  }
  const mq = typeof matchMedia !== "undefined" ? matchMedia("(prefers-color-scheme: dark)") : undefined;
  mq?.addEventListener("change", apply);

  // 用户在设置中切换主题模式 / 自定义强调色时即时生效（MutationObserver 不感知 prefs，需显式监听）。
  watch(
    () => [prefs.theme, prefs.accentColor] as const,
    apply,
    { deep: false },
  );

  onScopeDispose(() => {
    observer?.disconnect();
    mq?.removeEventListener("change", apply);
  });

  return theme;
}