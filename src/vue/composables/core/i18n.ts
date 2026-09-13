/**
 * Vue 工作台 i18n：读取 DSH locale 服务并跟随切换（中英双语）。
 *
 * 语言解析优先级：
 *   1. window.__DSH_FILE_WORKBENCH__?.locale 的 getSnapshot().active（DSH 桥接注入）；
 *   2. navigator.language（独立 vite dev 联调 / 无 DSH 时）；
 *   3. 'en'（兜底）。
 *
 * 提供两套入口：
 *  - useI18n()：响应式组合式，模板内使用（语言切换会触发重渲染）；
 *  - 模块级 t() / isZh()：按调用时刻读取当前语言，供 prompt / confirm / toast 等逻辑使用。
 */
import { ref, readonly, type Ref } from "vue";
import type { CopyKey } from "../../../shared/locales";
import { interpolate, lookup } from "../../../shared/locales";

interface LocaleService {
  getSnapshot(): { active: string };
  subscribe(cb: () => void): () => void;
}

function dshLocale(): LocaleService | undefined {
  return typeof window !== "undefined" ? (window.__DSH_FILE_WORKBENCH__?.locale as LocaleService | undefined) : undefined;
}

/** 解析当前活动语言 id。 */
function resolveLocId(): string {
  const loc = dshLocale()?.getSnapshot()?.active;
  if (loc) return loc;
  if (typeof navigator !== "undefined" && navigator.language) return navigator.language;
  return "en";
}

/** 模块级响应式语言 id（供 useI18n 订阅刷新）。 */
const activeLoc: Ref<string> = ref(resolveLocId());

if (typeof window !== "undefined") {
  const service = dshLocale();
  if (service && typeof service.subscribe === "function") {
    service.subscribe(() => {
      activeLoc.value = resolveLocId();
    });
  }
}

function translate(locId: string, key: CopyKey, params?: Record<string, string | number>): string {
  return interpolate(lookup(locId, key), params);
}

export interface I18nApi {
  locale: Ref<string>;
  isZh: Ref<boolean>;
  t(key: CopyKey, params?: Record<string, string | number>): string;
}

/** 响应式组合式：模板内使用，语言切换自动重渲染。 */
export function useI18n(): I18nApi {
  const isZh = ref(activeLoc.value.toLowerCase().startsWith("zh"));
  if (typeof window !== "undefined") {
    const service = dshLocale();
    if (service && typeof service.subscribe === "function") {
      service.subscribe(() => {
        isZh.value = activeLoc.value.toLowerCase().startsWith("zh");
      });
    }
  }
  return {
    locale: readonly(activeLoc),
    isZh: readonly(isZh),
    t: (key, params) => translate(activeLoc.value, key, params),
  };
}

/** 模块级翻译：按调用时刻读取当前语言（供逻辑/非模板调用）。 */
export function t(key: CopyKey, params?: Record<string, string | number>): string {
  return translate(activeLoc.value, key, params);
}

/** 模块级是否中文（供逻辑判断）。 */
export function isZh(): boolean {
  return activeLoc.value.toLowerCase().startsWith("zh");
}