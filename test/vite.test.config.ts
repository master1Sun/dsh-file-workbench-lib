import { defineConfig } from "vite";

// 贡献点集成测试探针的独立构建配置（由 scripts/build.mjs 调用）。
//
// 目的：让 test/contribution-points.test.js 随 Vue 产物一起进入 dist/ → lib/web/，从而在
// **嵌入 DSH 真机**上也能加载运行 —— host 的静态路由只放行 `assets/` 前缀（见 routes-fs.ts），
// 故这里刻意把探针输出到 assets/__dsh-test-probe.js，使其成为可被 host 直接服务的普通资源。
//
// ⚠️ 关键：必须用 build.lib（而非 rollupOptions.input）。因为本环境没有 index.html，Vite 会
// 自动进入「库模式」，在该模式下若只给 rollupOptions.input，源码里的 `export` 会被整体剥离
// （实测只剩副作用语句），导致真机 `import(url).then(m => m.runTests())` 拿到 undefined。
// 显式声明 lib + formats:["es"] 才会正确产出 ESM 命名导出。fileName 不带扩展名，再由
// build.mjs 重命名为 __dsh-test-probe.js 拷入 lib/web/assets/。
export default defineConfig({
  base: "/api/dsh-file-workbench/",
  build: {
    outDir: "dist",
    emptyOutDir: false,
    minify: false,
    target: "es2022",
    lib: {
      entry: "test/contribution-points.test.js",
      formats: ["es"],
      fileName: () => "assets/__dsh-test-probe",
    },
  },
});
