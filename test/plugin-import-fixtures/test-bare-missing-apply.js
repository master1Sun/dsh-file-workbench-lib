// 极简形态但缺 loader 外壳：顶层直调注入 API —— 预期被「自动补壳」救活并成功激活。
window.__dshFileWorkbenchVSCode__.activityBar.register({
  id: "test.bare-shell",
  title: { zh: "缺壳测试", en: "Bare Shell Test" },
  icon: "code",
  order: 999,
  mount(el) {
    el.innerHTML = '<div style="padding:12px;font-size:13px">自动补壳成功 ✔ 停用本插件后此视图应消失。</div>';
    return () => el.replaceChildren();
  },
});
