// 合法插件外壳但 apply 里什么都不注册 —— 预期 250ms 注册确认窗口后报
// 「未注册任何贡献点，已回滚」，列表行不出现死图标。
window.__ModuleLoader__.load({
  id: "@test/empty-contribs",
  factory: (require) => {
    function apply() {
      console.log("[test-empty] applied but registered nothing");
    }
    return { apply, inject: [] };
  },
});
