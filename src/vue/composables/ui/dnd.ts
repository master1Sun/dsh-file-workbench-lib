/**
 * 跨面板拖拽的兜底通道。
 *
 * 文件列表 dragstart 会把路径写入 drop 目标的 dataTransfer("text/plain")。
 * 但某些环境下该原生 payload 在 drop 时为空的（types 为空），为稳健起见，
 * 源端额外写入这里的共享 ref，drop 端在读不到原生数据时回退到这里。
 * 两者都在同一 Vue 应用内，跨面板拖拽始终可靠。
 */
import { ref } from "vue";

export const dragPath = ref("");