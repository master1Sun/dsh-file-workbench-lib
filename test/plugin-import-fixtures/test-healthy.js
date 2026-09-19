// 正常 loader 形态插件 —— 预期直接激活成功，Activity Bar 出现图标。
window.__ModuleLoader__.load({
  id: "@test/healthy-plugin",
  factory: (require) => {
    function apply() {
      const api = window.__dshFileWorkbenchVSCode__;
      if (!api || !api.activityBar) return;
      api.activityBar.register({
        id: "test.healthy",
        title: { zh: "健康测试", en: "Healthy Test" },
        icon: "check",
        order: 997,
        mount(el) {
          el.innerHTML = '<div style="padding:12px;font-size:13px">正常插件激活成功 ✔</div>';
          return () => el.replaceChildren();
        },
      });
    }
    return { apply, inject: [] };
  },
});
