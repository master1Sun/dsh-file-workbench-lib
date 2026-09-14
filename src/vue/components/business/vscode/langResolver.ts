/**
 * CodeMirror 语言解析：按文件扩展名返回对应的语法高亮扩展。
 *
 * 采用动态 import，让各语言包各自成为独立 chunk（按需加载、不膨胀首包）。
 * 取不到对应语言时回退到纯文本（空扩展数组）。
 */
import type { Extension } from "@codemirror/state";
import { StreamLanguage } from "@codemirror/language";

/** 扩展名 → 动态加载并返回 LanguageSupport（或 StreamLanguage）的工厂。 */
const loaders: Record<string, () => Promise<Extension[]>> = {
  // JavaScript / TypeScript / JSON
  ts: () => import("@codemirror/lang-javascript").then((m) => [m.javascript({ typescript: true })]),
  tsx: () => import("@codemirror/lang-javascript").then((m) => [m.javascript({ typescript: true, jsx: true })]),
  js: () => import("@codemirror/lang-javascript").then((m) => [m.javascript()]),
  jsx: () => import("@codemirror/lang-javascript").then((m) => [m.javascript({ jsx: true })]),
  mjs: () => import("@codemirror/lang-javascript").then((m) => [m.javascript()]),
  cjs: () => import("@codemirror/lang-javascript").then((m) => [m.javascript()]),
  json: () => import("@codemirror/lang-json").then((m) => [m.json()]),
  // Web
  html: () => import("@codemirror/lang-html").then((m) => [m.html()]),
  htm: () => import("@codemirror/lang-html").then((m) => [m.html()]),
  vue: () => import("@codemirror/lang-html").then((m) => [m.html()]),
  css: () => import("@codemirror/lang-css").then((m) => [m.css()]),
  scss: () => import("@codemirror/lang-css").then((m) => [m.css()]),
  less: () => import("@codemirror/lang-css").then((m) => [m.css()]),
  // 标记语言 / 数据
  md: () => import("@codemirror/lang-markdown").then((m) => [m.markdown()]),
  markdown: () => import("@codemirror/lang-markdown").then((m) => [m.markdown()]),
  yaml: () => import("@codemirror/lang-yaml").then((m) => [m.yaml()]),
  yml: () => import("@codemirror/lang-yaml").then((m) => [m.yaml()]),
  xml: () => import("@codemirror/lang-xml").then((m) => [m.xml()]),
  svg: () => import("@codemirror/lang-xml").then((m) => [m.xml()]),
  // 通用语言
  py: () => import("@codemirror/lang-python").then((m) => [m.python()]),
  sql: () => import("@codemirror/lang-sql").then((m) => [m.sql()]),
  java: () => import("@codemirror/lang-java").then((m) => [m.java()]),
  c: () => import("@codemirror/lang-cpp").then((m) => [m.cpp()]),
  h: () => import("@codemirror/lang-cpp").then((m) => [m.cpp()]),
  cc: () => import("@codemirror/lang-cpp").then((m) => [m.cpp()]),
  cpp: () => import("@codemirror/lang-cpp").then((m) => [m.cpp()]),
  cxx: () => import("@codemirror/lang-cpp").then((m) => [m.cpp()]),
  hpp: () => import("@codemirror/lang-cpp").then((m) => [m.cpp()]),
  rs: () => import("@codemirror/lang-rust").then((m) => [m.rust()]),
  go: () => import("@codemirror/lang-go").then((m) => [m.go()]),
  php: () => import("@codemirror/lang-php").then((m) => [m.php()]),
  // 走 legacy-modes 的语言（C# / shell / ruby 等）。
  cs: () => import("@codemirror/legacy-modes/mode/clike").then((m) => [StreamLanguage.define(m.csharp)]),
  sh: () => import("@codemirror/legacy-modes/mode/shell").then((m) => [StreamLanguage.define(m.shell)]),
  bash: () => import("@codemirror/legacy-modes/mode/shell").then((m) => [StreamLanguage.define(m.shell)]),
  zsh: () => import("@codemirror/legacy-modes/mode/shell").then((m) => [StreamLanguage.define(m.shell)]),
  rb: () => import("@codemirror/legacy-modes/mode/ruby").then((m) => [StreamLanguage.define(m.ruby)]),
};

/** 状态栏/标签展示用的语言名（与扩展名对应，无对应则回退到扩展名大写或 Plain Text）。 */
const labels: Record<string, string> = {
  ts: "TypeScript",
  tsx: "TypeScript JSX",
  js: "JavaScript",
  jsx: "JavaScript JSX",
  mjs: "JavaScript",
  cjs: "JavaScript",
  json: "JSON",
  html: "HTML",
  htm: "HTML",
  vue: "Vue",
  css: "CSS",
  scss: "SCSS",
  less: "LESS",
  md: "Markdown",
  markdown: "Markdown",
  yaml: "YAML",
  yml: "YAML",
  xml: "XML",
  svg: "SVG",
  py: "Python",
  sql: "SQL",
  java: "Java",
  c: "C",
  h: "C/C++",
  cc: "C++",
  cpp: "C++",
  cxx: "C++",
  hpp: "C/C++",
  rs: "Rust",
  go: "Go",
  php: "PHP",
  cs: "C#",
  sh: "Shell",
  bash: "Shell",
  zsh: "Shell",
  rb: "Ruby",
  txt: "Plain Text",
};

/** 取文件扩展名（不含点，小写）。 */
export function extOf(path: string): string {
  const i = path.lastIndexOf(".");
  if (i < 0) return "";
  const e = path.slice(i + 1).toLowerCase();
  // 排除无意义的“扩展名”（仅点号无内容）。
  return e.length > 0 && e.length <= 10 ? e : "";
}

/** 返回该路径应的语法高亮扩展（异步、按需加载语言包；失败回退纯文本）。 */
export async function languageExtensionFor(path: string): Promise<Extension[]> {
  const loader = loaders[extOf(path)];
  if (!loader) return [];
  try {
    return await loader();
  } catch {
    return [];
  }
}

/** 状态栏展示用的语言标签。 */
export function languageLabelFor(path: string): string {
  const ext = extOf(path);
  return labels[ext] ?? (ext ? ext.toUpperCase() : "Plain Text");
}
