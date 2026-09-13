import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { fileURLToPath } from "node:url";

// 用 Vite 构建 Vue 3 文件工作台 UI。
// 产物 dist/ 会在 scripts/build.mjs 里拷贝到 lib/web/，由 host 端静态路由对外提供，
// 由 DSH client 注入（<link>/<script>）后挂到 DSH 右侧面板容器（见 src/client/RightPaneBridge.tsx）。
//
// 为了让「单独 vite dev 联调」与「嵌入 DSH 运行」两用，API 基址从 window 上的运行时
// 注入点读取；未注入时回落到默认前缀（dev 时由 vite dev server 代理到 host）。
export default defineConfig({
  // host 端静态资源挂在 /api/dsh-file-workbench 下（见 routes-fs.ts serveAsset）。
  // 设置 base 让产物内所有资源引用（index.html、chunk 间的 modulepreload/import）都带上前缀，
  // 否则 Vite 默认输出 /assets/... 绝对路径，浏览器会向站点根请求导致 404。
  base: "/api/dsh-file-workbench/",
  plugins: [
    vue(),
    // Element Plus 按需引入：模板中 <el-*>/<ElMessage> 用到的组件与样式自动引入，
    // 在构建期 tree-shake，替代 main.ts 里全量 app.use(ElementPlus) + 全量 CSS，显著减小首包。
    AutoImport({
      imports: ["vue"],
      resolvers: [ElementPlusResolver({ importStyle: "css" })],
      dts: "src/vue/types/auto-imports.d.ts",
    }),
    Components({
      resolvers: [ElementPlusResolver({ importStyle: "css" })],
      dts: "src/vue/types/components.d.ts",
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src/vue", import.meta.url)),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    target: "es2022",
    // 产物由 host 作为具名资源提供；保持默认 hash 文件名即可（都在同一 assets 目录）。
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        // 把体量大的三方库拆成独立 chunk：浏览器并行加载 + 跨版本稳定缓存，
        // 也让首屏不必一次性下载整个 3.5MB 单 chunk。
        manualChunks(id) {
          if (!/\bnode_modules\b/.test(id)) return undefined;
          // 完整 id 形式可能是 node_modules/<pkg> 或 node_modules/@scope/<pkg>
          const norm = id.split("node_modules")[1]?.replace(/^[\\/]+/, "");
          const name = norm?.startsWith("@")
            ? norm?.split("/").slice(0, 2).join("/")
            : norm?.split("/")[0];
          if (!name) return undefined;
          // 仅把「首屏必需」的大库拆包：vue / element-plus 启动即用，独立 chunk（并行 + 缓存）。
          if (name === "vue" || name === "@vue/runtime-core" || name === "@vue/runtime-dom" || name === "@vue/reactivity" || name === "@vue/shared") return "vendor-vue";
          if (name === "element-plus") return "vendor-element-plus";
          return "vendor";
        },
      },
    },
  },
});