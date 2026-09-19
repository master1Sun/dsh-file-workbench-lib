// 声明了 createDecorations（v5.1 能力）的插件 —— 当前宿主 ACTIVITY_API_VERSION=5 < 5.1，
// 预期在启用时被版本预检拦截，toast 报「需要宿主 API v5.1」。
window.__ModuleLoader__.load({
  id: "@test/requires-v51",
  factory: (require) => {
    function apply() {
      const api = window.__dshFileWorkbenchVSCode__;
      if (!api || !api.activityBar) return;
      api.activityBar.register({
        id: "test.needs-51",
        title: "高版本测试",
        icon: "warning",
        order: 998,
        // 只有真正走到这里才会用到 createDecorations；预检按源码特征判定。
        mount(el, ctx) {
          ctx.editor.createDecorations({ items: [] });
          return () => {};
        },
      });
    }
    return { apply, inject: [] };
  },
});
