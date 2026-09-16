/**
 * 插件 WS 端点推导（纯函数，便于回归断言）。
 *
 * 推送通道（/push）与终端多路复用流（/exec-mux-ws）共用同一推导规则 —— 两处端点若推导
 * 规则不一致，迟早一处对一处错，且 WS 建连失败是**完全静默**的。
 *
 * ⛔ 不能写成 `` `${wsScheme}//${location.host}${apiBase}/<name>` ``：宿主桥接注入的 `apiBase`
 * 是**绝对 URL**（`src/client/index.tsx` 里 `${window.location.origin}${PREFIX}`），再拼一次
 * `location.host` 会得到 `ws://127.0.0.1:3080http://127.0.0.1:3080/api/...` 这种畸形地址 ——
 * `new WebSocket()` 直接失败，连接永不建立且不留任何错误痕迹。
 * 用 `URL` 统一解析：绝对地址取它自身的 host，相对路径（vite dev 的 `VITE_API_BASE`）按当前页解析。
 */
export function wsEndpointUrl(apiBase: string, href: string, name: string): string {
  const u = new URL(apiBase, href);
  u.protocol = u.protocol === "https:" ? "wss:" : "ws:";
  u.pathname = `${u.pathname.replace(/\/+$/, "")}/${name}`;
  u.search = "";
  u.hash = "";
  return u.toString();
}
