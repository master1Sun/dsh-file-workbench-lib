/**
 * 构建时注入的全局（由 esbuild define 提供）。
 *  - __VUE_ENTRY__ / __VUE_CSS__：Vite 构建出的 Vue 前端资源相对路径
 *    （相对 /api/dsh-file-workbench/，由 scripts/build.mjs 从 dist 解析注入）。
 *  - __PLUGIN_VERSION__：插件版本号。
 *  - __DEV__：开发/生产标志。
 */
declare const __VUE_ENTRY__: string;
declare const __VUE_CSS__: string;
declare const __PLUGIN_VERSION__: string;
declare const __DEV__: boolean;