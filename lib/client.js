window.__ModuleLoader__.load({
	id: "@sunjuntao/dsh-file-workbench",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/client/index.tsx
var index_exports = {};
__export(index_exports, {
  PREFIX: () => PREFIX,
  apply: () => apply,
  inject: () => inject
});
module.exports = __toCommonJS(index_exports);

// src/shared/locales.ts
var zh = {
  // 右侧栏 tab（标题与 guide 入口文案）
  tabFileWorkbench: "\u6587\u4EF6\u5DE5\u4F5C\u53F0",
  tabFileWorkbenchDesc: "\u6D4F\u89C8\u3001\u9884\u89C8\u3001\u641C\u7D22\u672C\u5730\u6587\u4EF6\uFF0C\u5E76\u5F15\u7528\u5230\u5F53\u524D\u4F1A\u8BDD",
  // VS Code 编辑器面板
  tabVSCode: "\u6587\u4EF6\u7F16\u8F91\u5668",
  tabVSCodeDesc: "\u6D4F\u89C8\u9879\u76EE\u76EE\u5F55\uFF0C\u591A\u6807\u7B7E\u7F16\u8F91\u4EE3\u7801\u5E76\u9AD8\u4EAE\u8BED\u6CD5",
  // tab 下拉菜单（sidebar.right.tab.menu.item 追加项）
  tabMenuOpenInEditor: "\u5728\u6587\u4EF6\u7F16\u8F91\u5668\u4E2D\u6253\u5F00\u5DE5\u4F5C\u533A",
  tabMenuNewEditor: "\u65B0\u5EFA\u7F16\u8F91\u5668\u7A97\u53E3",
  tabMenuAnotherEditor: "\u518D\u5F00\u4E00\u4E2A\u7F16\u8F91\u5668\u7A97\u53E3",
  tabMenuFloat: "\u5F39\u51FA\u4E3A\u6D6E\u7A97",
  tabMenuDefaultLabel: "\u9ED8\u8BA4\u6253\u5F00",
  // guide 卡片右侧下拉触发按钮的无障碍标签（与官方 guide 卡片的 aria-label 同职责）
  guideMenuAria: "\u66F4\u591A\u6253\u5F00\u65B9\u5F0F",
  vsNoProject: "\u672A\u9009\u62E9\u9879\u76EE\u76EE\u5F55",
  vsTreeLoading: "\u6B63\u5728\u52A0\u8F7D\u9879\u76EE\u2026",
  vsOpenFolder: "\u6253\u5F00\u6587\u4EF6\u5939",
  vsFolderPath: "\u8BF7\u8F93\u5165\u9879\u76EE\u76EE\u5F55\u7EDD\u5BF9\u8DEF\u5F84",
  vsSave: "\u4FDD\u5B58",
  vsSaved: "\u5DF2\u4FDD\u5B58",
  vsUnsavedTitle: "\u672A\u4FDD\u5B58\u7684\u66F4\u6539",
  vsUnsavedMsg: "\u5F53\u524D\u6587\u4EF6\u6709\u672A\u4FDD\u5B58\u7684\u66F4\u6539\uFF0C\u786E\u5B9A\u5173\u95ED\u5417\uFF1F",
  vsCloseManyMsg: "\u6709 {n} \u4E2A\u6807\u7B7E\u672A\u4FDD\u5B58\uFF0C\u5168\u90E8\u4FDD\u5B58\u5E76\u5173\u95ED\uFF1F",
  vsTooLarge: "\u6587\u4EF6\u8FC7\u5927\uFF1A\u8D85\u8FC7 8MB \u7F16\u8F91\u4E0A\u9650\uFF0C\u8BF7\u7528\u7CFB\u7EDF\u7A0B\u5E8F\u6253\u5F00",
  vsScrollLeft: "\u5411\u5DE6\u6EDA\u52A8\u6807\u7B7E",
  vsScrollRight: "\u5411\u53F3\u6EDA\u52A8\u6807\u7B7E",
  vsReadonly: "\u53EA\u8BFB",
  vsEmptyHint: "\u9009\u62E9\u9879\u76EE\u76EE\u5F55\u540E\uFF0C\u4ECE\u5DE6\u4FA7\u6811\u6253\u5F00\u6587\u4EF6\u5F00\u59CB\u7F16\u8F91",
  vsLoading: "\u6B63\u5728\u52A0\u8F7D\u2026",
  vsBrand: "\u6587\u4EF6\u7F16\u8F91\u5668",
  vsQuickAccess: "\u5FEB\u6377\u65B9\u5F0F",
  vsFormat: "\u683C\u5F0F\u5316\u5185\u5BB9",
  vsFormatOk: "\u5DF2\u683C\u5F0F\u5316",
  vsFormatFail: "\u683C\u5F0F\u5316\u5931\u8D25\uFF1A{msg}",
  // VS Code editor pane — 文件菜单 / 保存 / 编码与行尾 / 外部改动
  vsMenuFile: "\u6587\u4EF6",
  vsSaveAs: "\u53E6\u5B58\u4E3A\u2026",
  vsSaveAsTitle: "\u53E6\u5B58\u4E3A",
  vsFileName: "\u6587\u4EF6\u540D",
  vsFileNamePlaceholder: "\u8F93\u5165\u6587\u4EF6\u540D\uFF0C\u6216\u7C98\u8D34\u7EDD\u5BF9\u8DEF\u5F84",
  vsFileType: "\u6587\u4EF6\u7C7B\u578B",
  vsFilterAll: "\u6240\u6709\u6587\u4EF6",
  vsFilterExt: "\u4EC5 {ext} \u6587\u4EF6",
  vsSaveAsHint: "\u6D4F\u89C8\u5230\u76EE\u6807\u6587\u4EF6\u5939\u5E76\u586B\u5199\u6587\u4EF6\u540D\uFF1B\u53CC\u51FB\u5217\u8868\u4E2D\u7684\u6587\u4EF6\u53EF\u76F4\u63A5\u8986\u76D6\u4FDD\u5B58",
  vsSaveAsExists: "\u540C\u540D\u6587\u4EF6\u5DF2\u5B58\u5728\uFF0C\u4FDD\u5B58\u5C06\u8986\u76D6\u5B83",
  vsSaveAsBlockedDirty: "{name} \u5DF2\u5728\u7F16\u8F91\u5668\u4E2D\u6253\u5F00\u4E14\u6709\u672A\u4FDD\u5B58\u6539\u52A8\uFF0C\u8BF7\u5148\u4FDD\u5B58\u6216\u5173\u95ED\u5B83",
  vsRecentProjects: "\u6700\u8FD1\u9879\u76EE",
  vsRecentClearAll: "\u6E05\u7A7A\u5168\u90E8",
  vsRecentClearAllTitle: "\u6E05\u7A7A\u5168\u90E8\u6700\u8FD1\u9879\u76EE",
  vsRecentClearAllConfirm: "\u786E\u5B9A\u8981\u6E05\u7A7A\u5168\u90E8\u6700\u8FD1\u9879\u76EE\u8BB0\u5F55\u5417\uFF1F\u6B64\u64CD\u4F5C\u4E0D\u53EF\u64A4\u9500\u3002",
  vsRecentCleared: "\u5DF2\u6E05\u7A7A\u6700\u8FD1\u9879\u76EE",
  vsRecentForgetTitle: "\u79FB\u9664\u6700\u8FD1\u9879\u76EE",
  vsRecentForgetConfirm: "\u786E\u5B9A\u8981\u4ECE\u6700\u8FD1\u9879\u76EE\u4E2D\u79FB\u9664\u300C{name}\u300D\u5417\uFF1F\u6B64\u64CD\u4F5C\u4E0D\u53EF\u64A4\u9500\u3002",
  vsRecentForgot: "\u5DF2\u79FB\u9664 {name}",
  vsRemoveProject: "\u79FB\u51FA\u9879\u76EE",
  vsRemoveProjectTitle: "\u79FB\u51FA\u9879\u76EE",
  vsRemoveProjectConfirm: "\u786E\u5B9A\u5C06\u300C{name}\u300D\u79FB\u51FA\u9879\u76EE\u5417\uFF1F\u6B64\u64CD\u4F5C\u4F1A\u4ECE\u6700\u8FD1\u9879\u76EE\u4E2D\u79FB\u9664\u8BE5\u76EE\u5F55\uFF0C\u5E76\u5173\u95ED\u5B83\u7684\u6587\u4EF6\u6811\uFF08\u672A\u4FDD\u5B58\u7684\u6539\u52A8\u5C06\u4E22\u5931\uFF09\u3002",
  vsProjectRemoved: "\u5DF2\u79FB\u51FA\u9879\u76EE",
  vsProjectGone: "\u9879\u76EE\u76EE\u5F55\u5DF2\u4E0D\u5B58\u5728\uFF0C\u5DF2\u4ECE\u6700\u8FD1\u9879\u76EE\u4E2D\u79FB\u9664",
  vsGitHistory: "\u63D0\u4EA4\u8BB0\u5F55",
  vsGitExpand: "\u5C55\u5F00\u63D0\u4EA4\u8BB0\u5F55",
  vsGitCollapse: "\u6536\u8D77\u63D0\u4EA4\u8BB0\u5F55",
  vsGitRefresh: "\u5237\u65B0\u63D0\u4EA4\u8BB0\u5F55",
  vsGitFiles: "\u53D8\u66F4\u6587\u4EF6",
  vsGitFileDiff: "\u5728\u65B0\u6807\u7B7E\u9875\u6253\u5F00\u6B64\u6587\u4EF6\u53D8\u66F4",
  vsQuickOpenPlaceholder: "\u641C\u7D22\u9879\u76EE\u5185\u6587\u4EF6\uFF08Ctrl+P\uFF09",
  vsLeftTabFiles: "\u6587\u4EF6",
  vsLeftTabSearch: "\u641C\u7D22",
  vsLeftTabGit: "\u7248\u672C\u63A7\u5236",
  vsGitNoRepo: "\u5F53\u524D\u76EE\u5F55\u4E0D\u662F Git / SVN \u4ED3\u5E93",
  vsUnfoldEditor: "\u5C55\u5F00\u7F16\u8F91\u5668",
  vsFoldEditor: "\u6298\u53E0\u7F16\u8F91\u5668",
  vsSearchNeedsProject: "\u8BF7\u5148\u6253\u5F00\u9879\u76EE\u6587\u4EF6\u5939\u518D\u4F7F\u7528\u641C\u7D22",
  vsMenuRecent: "\u6253\u5F00\u6700\u8FD1\u9879\u76EE",
  vsMenuExtensions: "\u6269\u5C55",
  vsExtRunning: "\u6267\u884C\u4E2D\u2026\uFF08\u70B9\u51FB\u53EF\u67E5\u770B\u4EFB\u52A1\u9762\u677F\uFF09",
  vsEmptyTitle: "\u6253\u5F00\u4E00\u4E2A\u6587\u4EF6\u5939\u5F00\u59CB\u7F16\u8F91",
  vsGrepPlaceholder: "\u641C\u7D22\u5185\u5BB9\uFF08Enter \u7ACB\u5373\u641C\uFF09",
  vsGrepScopePlaceholder: "\u4EC5\u5728\u6B64\u6587\u4EF6\u5939\u4E0B\u641C\u7D22\uFF0C\u5982 src/components",
  vsGrepScopeTitle: "\u641C\u7D22\u8303\u56F4\uFF1A\u7559\u7A7A = \u6574\u4E2A\u9879\u76EE\uFF1B\u586B\u5199\u9879\u76EE\u5185\u5B50\u76EE\u5F55\u8DEF\u5F84\u53EF\u9650\u5B9A\u641C\u7D22\u8303\u56F4",
  vsGrepCase: "\u533A\u5206\u5927\u5C0F\u5199",
  vsGrepRegex: "\u4F7F\u7528\u6B63\u5219",
  vsGrepSummary: "{files} \u4E2A\u6587\u4EF6\u4E2D {n} \u6761\u7ED3\u679C",
  vsGrepTruncated: "\u7ED3\u679C\u8FC7\u591A\uFF0C\u5DF2\u622A\u65AD",
  vsGrepNoResult: "\u672A\u627E\u5230\u7ED3\u679C",
  vsGrepOpenAt: "\u6253\u5F00\u5E76\u8DF3\u5230\u7B2C {ln} \u884C",
  vsSearchTitle: "\u641C\u7D22",
  vsGrepWholeWord: "\u5168\u5B57\u5339\u914D",
  vsGrepReplacePlaceholder: "\u66FF\u6362",
  vsReplaceAll: "\u5168\u90E8\u66FF\u6362",
  vsReplacePreserveCase: "\u4FDD\u7559\u5927\u5C0F\u5199",
  vsReplaceConfirm: "\u5C06\u628A {files} \u4E2A\u6587\u4EF6\u4E2D\u7684 {n} \u5904 \u201C{q}\u201D \u66FF\u6362\u4E3A \u201C{r}\u201D\uFF0C\u6B64\u64CD\u4F5C\u4F1A\u76F4\u63A5\u6539\u5199\u78C1\u76D8\u6587\u4EF6\u4E14\u4E0D\u53EF\u64A4\u9500\u3002\u786E\u5B9A\u7EE7\u7EED\uFF1F",
  vsReplaceDone: "\u5DF2\u5728 {files} \u4E2A\u6587\u4EF6\u4E2D\u66FF\u6362 {n} \u5904",
  vsReplaceNone: "\u6CA1\u6709\u53EF\u66FF\u6362\u7684\u5339\u914D\u9879",
  vsReplaceRemoteUnsupported: "\u8FDC\u7AEF\uFF08ssh\uFF09\u6839\u4E0D\u652F\u6301\u8DE8\u6587\u4EF6\u6279\u91CF\u66FF\u6362",
  vsFilesToInclude: "\u5305\u542B\u7684\u6587\u4EF6",
  vsFilesToIncludePlaceholder: "\u8981\u641C\u7D22\u7684\u6587\u4EF6\uFF0C\u5982 *.ts, src/**/README.md",
  vsFilesToIncludeTitle: "\u4EC5\u5728\u8FD9\u4E9B glob \u547D\u4E2D\u7684\u6587\u4EF6\u4E2D\u641C\u7D22/\u66FF\u6362\uFF08\u9017\u53F7\u5206\u9694\uFF0C\u76F8\u5BF9\u9879\u76EE\u6839\uFF09\u3002\u7559\u7A7A = \u4E0D\u9650\u3002",
  vsFilesToExclude: "\u6392\u9664\u7684\u6587\u4EF6",
  vsFilesToExcludePlaceholder: "\u8981\u6392\u9664\u7684\u6587\u4EF6\u6216\u6587\u4EF6\u5939\uFF0C\u5982 **/node_modules, !*.min.js",
  vsFilesToExcludeTitle: "\u8DF3\u8FC7\u8FD9\u4E9B glob \u547D\u4E2D\u7684\u6587\u4EF6/\u6587\u4EF6\u5939\uFF08\u9017\u53F7\u5206\u9694\uFF0C\u76F8\u5BF9\u9879\u76EE\u6839\uFF09\u3002",
  vsClearAllResults: "\u6E05\u9664\u6240\u6709\u7ED3\u679C",
  vsRefreshResults: "\u91CD\u65B0\u641C\u7D22",
  vsToggleReplace: "\u663E\u793A/\u9690\u85CF\u66FF\u6362",
  vsViewModeList: "\u5217\u8868",
  vsViewModeTree: "\u6811",
  vsViewModeSwitchTitle: "\u5728\u5217\u8868\u89C6\u56FE\u4E0E\u6811\u89C6\u56FE\u4E4B\u95F4\u5207\u6362",
  vsSearchIndexing: "\u6B63\u5728\u5EFA\u7ACB\u7D22\u5F15\u2026",
  vsSearchNoResult: "\u6CA1\u6709\u5339\u914D\u7684\u6587\u4EF6",
  vsSearchTruncated: "\u7ED3\u679C\u8F83\u591A\uFF0C\u4EC5\u663E\u793A\u524D\u82E5\u5E72\u6761\uFF0C\u8BF7\u8865\u5145\u5173\u952E\u8BCD",
  vsSaveAll: "\u5168\u90E8\u4FDD\u5B58",
  vsSavedAs: "\u5DF2\u53E6\u5B58\u4E3A {path}",
  vsOverwriteMsg: "{path} \u5DF2\u5B58\u5728\uFF0C\u786E\u5B9A\u8986\u76D6\u5417\uFF1F",
  vsNoDirty: "\u6CA1\u6709\u9700\u8981\u4FDD\u5B58\u7684\u4FEE\u6539",
  vsAllSaved: "\u5DF2\u4FDD\u5B58 {n} \u4E2A\u6587\u4EF6",
  vsConflictTitle: "\u6587\u4EF6\u5DF2\u88AB\u5916\u90E8\u4FEE\u6539",
  vsConflictMsg: "{name} \u5728\u78C1\u76D8\u4E0A\u5DF2\u88AB\u4FEE\u6539\u3002\u4ECD\u8981\u7528\u5F53\u524D\u5185\u5BB9\u8986\u76D6\u5417\uFF1F",
  vsConflictMsgReload: "\u653E\u5F03\u5BF9 {name} \u7684\u672C\u5730\u4FEE\u6539\uFF0C\u6539\u7528\u78C1\u76D8\u4E0A\u7684\u7248\u672C\uFF1F",
  vsConflictBadge: "\u5916\u90E8\u5DF2\u4FEE\u6539",
  vsReloadedExternal: "{name} \u5DF2\u88AB\u5916\u90E8\u4FEE\u6539\uFF0C\u5DF2\u91CD\u65B0\u52A0\u8F7D",
  vsSwitchLoseMsg: "\u6709 {n} \u4E2A\u6587\u4EF6\u5C1A\u672A\u4FDD\u5B58\uFF0C\u5207\u6362\u9879\u76EE\u4F1A\u4E22\u5931\u8FD9\u4E9B\u4FEE\u6539\u3002\u786E\u5B9A\u7EE7\u7EED\u5417\uFF1F",
  vsReopenLoseMsg: "\u4EE5\u5176\u5B83\u7F16\u7801\u91CD\u8BFB\u4F1A\u4E22\u5931\u5F53\u524D\u672A\u4FDD\u5B58\u7684\u4FEE\u6539\uFF0C\u786E\u5B9A\u7EE7\u7EED\u5417\uFF1F",
  vsEncodingSwitched: "\u5DF2\u6309 {enc} \u91CD\u65B0\u8BFB\u53D6",
  vsBinaryHint: "\u8FD9\u662F\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF0C\u65E0\u6CD5\u4EE5\u6587\u672C\u65B9\u5F0F\u7F16\u8F91",
  vsNewWindow: "\u65B0\u5EFA\u7F16\u8F91\u5668\u7A97\u53E3",
  vsFloatWindow: "\u6D6E\u52A8\u4E3A\u72EC\u7ACB\u7A97\u53E3",
  vsNewTerminal: "\u65B0\u5EFA\u7EC8\u7AEF",
  vsReplacedOldest: "\u7F16\u8F91\u5668\u7A97\u53E3\u5DF2\u6EE1 8 \u4E2A\uFF1A\u5DF2\u66FF\u6362\u6700\u65E9\u7684\u7A97\u53E3",
  vsNewWindowLimit: "\u65E0\u6CD5\u65B0\u5EFA\u7F16\u8F91\u5668\u7A97\u53E3\uFF1A\u8BF7\u7A0D\u540E\u91CD\u8BD5",
  vsOpenExternal: "\u7528\u7CFB\u7EDF\u7A0B\u5E8F\u6253\u5F00",
  vsNoOpenFile: "\u6CA1\u6709\u6253\u5F00\u7684\u6587\u4EF6",
  vsTabClose: "\u5173\u95ED",
  vsTabCloseSave: "\u4FDD\u5B58\u5E76\u5173\u95ED",
  vsTabCloseOthers: "\u5173\u95ED\u5176\u4ED6",
  vsTabCloseRight: "\u5173\u95ED\u53F3\u4FA7\u6807\u7B7E\u9875",
  vsTabCloseAll: "\u5173\u95ED\u5168\u90E8",
  terminalRestore: "\u8FD8\u539F\u7EC8\u7AEF",
  vsNewFile: "\u65B0\u5EFA\u6587\u4EF6",
  vsNewFolder: "\u65B0\u5EFA\u6587\u4EF6\u5939",
  vsNewFileName: "\u6587\u4EF6\u540D",
  vsNewFolderName: "\u6587\u4EF6\u5939\u540D",
  vsRename: "\u91CD\u547D\u540D",
  vsRenameName: "\u65B0\u540D\u79F0",
  vsDelete: "\u5220\u9664",
  vsDeleteConfirm: "\u786E\u5B9A\u5220\u9664",
  vsRefresh: "\u5237\u65B0",
  vsCollapseAll: "\u6298\u53E0\u5168\u90E8",
  vsExpandAll: "\u5C55\u5F00\u5168\u90E8",
  vsExpandAllLimited: "\u76EE\u5F55\u8F83\u591A\uFF0C\u5DF2\u5C55\u5F00\u524D {n} \u4E2A\u6587\u4EF6\u5939\uFF08\u7EE7\u7EED\u5C55\u5F00\u4F1A\u4EA7\u751F\u5927\u91CF\u8BF7\u6C42\uFF09",
  vsPickFolderTitle: "\u9009\u62E9\u9879\u76EE\u6587\u4EF6\u5939",
  vsComputer: "\u6211\u7684\u7535\u8111",
  vsUp: "\u4E0A\u7EA7",
  vsEmptyDir: "\u6B64\u6587\u4EF6\u5939\u4E3A\u7A7A",
  vsPickInput: "\u9009\u62E9\u6B64\u8DEF\u5F84",
  vsCancel: "\u53D6\u6D88",
  vsPickConfirm: "\u9009\u62E9\u6B64\u6587\u4EF6\u5939",
  vsNewFolderBtn: "\u65B0\u5EFA\u6587\u4EF6\u5939",
  vsPickEnterHint: "\u53CC\u51FB\u6587\u4EF6\u5939\u8FDB\u5165\uFF1B\u5355\u51FB\u9009\u4E2D\uFF1B\u201C\u9009\u62E9\u6B64\u6587\u4EF6\u5939\u201D\u53D6\u9AD8\u4EAE\u9879\uFF0C\u65E0\u9AD8\u4EAE\u5219\u53D6\u5F53\u524D\u76EE\u5F55",
  menuCopyRelPath: "\u590D\u5236\u76F8\u5BF9\u8DEF\u5F84",
  menuCopyAbsPath: "\u590D\u5236\u7EDD\u5BF9\u8DEF\u5F84",
  vsAddToSession: "\u6DFB\u52A0\u5230\u4F1A\u8BDD",
  vsAddToSessionOk: "\u5DF2\u6DFB\u52A0\u5230\u4F1A\u8BDD\u8F93\u5165\u6846",
  vsAddToSessionFail: "\u8BF7\u5148\u6253\u5F00\u5BF9\u8BDD\u8F93\u5165\u6846",
  // 顶部工具栏 / 视图切换
  goUp: "\u8FD4\u56DE\u4E0A\u7EA7",
  goBack: "\u540E\u9000",
  goForward: "\u524D\u8FDB",
  refreshList: "\u5237\u65B0\u8D44\u6E90\u5217\u8868",
  noFolder: "\u672A\u6253\u5F00\u6587\u4EF6\u5939",
  goSessionDir: "\u56DE\u5230\u5F53\u524D\u4F1A\u8BDD\u76EE\u5F55",
  closeTab: "\u5173\u95ED",
  clearSearch: "\u6E05\u9664\u641C\u7D22",
  cancel: "\u53D6\u6D88",
  confirmOk: "\u786E\u5B9A",
  deleteTitle: "\u786E\u8BA4\u5220\u9664",
  searchScopeIn: "\u8303\u56F4\uFF1A",
  // 我的电脑浏览
  myComputer: "\u6211\u7684\u7535\u8111",
  navHome: "\u4E3B\u6587\u4EF6\u5939",
  navGallery: "\u56FE\u5E93",
  navThisPc: "\u6B64\u7535\u8111",
  navQuickAccess: "\u5FEB\u901F\u8BBF\u95EE",
  externalInjection: "\u5916\u90E8\u6CE8\u5165",
  driveLabel: "\u672C\u5730\u78C1\u76D8 ({drive}:)",
  // 消息提示（右下角浮层）
  toastClose: "\u5173\u95ED\u63D0\u793A",
  // 「此电脑」→ 设备和驱动器
  thisPcDevices: "\u8BBE\u5907\u548C\u9A71\u52A8\u5668",
  driveCapacity: "{free} \u53EF\u7528\uFF0C\u5171 {total}",
  driveTotal: "\u603B\u5927\u5C0F",
  driveFree: "\u53EF\u7528\u7A7A\u95F4",
  driveFs: "\u6587\u4EF6\u7CFB\u7EDF",
  driveTypeFixed: "\u672C\u5730\u78C1\u76D8",
  driveTypeRemovable: "\u53EF\u79FB\u52A8\u78C1\u76D8",
  emptyDrives: "\uFF08\u672A\u68C0\u6D4B\u5230\u9A71\u52A8\u5668\uFF09",
  navExpand: "\u5C55\u5F00",
  navCollapse: "\u6298\u53E0",
  favoritePin: "\u5DF2\u56FA\u5B9A\u5230\u5FEB\u901F\u8BBF\u95EE",
  desktopEntry: "\u684C\u9762",
  downloadEntry: "\u4E0B\u8F7D",
  documentEntry: "\u6587\u6863",
  pictureEntry: "\u56FE\u7247",
  musicEntry: "\u97F3\u4E50",
  videoEntry: "\u89C6\u9891",
  workspaceEntry: "\u5DE5\u4F5C\u533A",
  emptyDir: "\uFF08\u7A7A\uFF09",
  colName: "\u540D\u79F0",
  colSize: "\u5927\u5C0F",
  colType: "\u7C7B\u578B",
  colModified: "\u4FEE\u6539\u65E5\u671F",
  typeFolder: "\u6587\u4EF6\u5939",
  typeFile: "\u6587\u4EF6",
  // 资源管理器
  renameEntry: "\u91CD\u547D\u540D\uFF1A",
  confirmDelete: '\u786E\u8BA4\u5220\u9664 "{name}" \uFF1F',
  brokenLink: "\u5931\u6548\u8F6F\u94FE\u63A5",
  // 编辑器
  save: "\u4FDD\u5B58",
  // 文本编辑器（.txt 编辑 / 保存）
  menuEdit: "\u7F16\u8F91",
  txtEditorTitle: "\u7F16\u8F91\u6587\u672C \xB7 {name}",
  txtLoading: "\u52A0\u8F7D\u4E2D\u2026",
  txtEditorSub: "\u6587\u672C\u7F16\u8F91\u5668",
  txtUnsaved: "\u672A\u4FDD\u5B58\u7684\u66F4\u6539",
  txtReadError: "\u8BFB\u53D6\u5931\u8D25\uFF1A{msg}",
  txtDirty: "\u672A\u4FDD\u5B58",
  txtReadonly: "\u53EA\u8BFB\uFF08\u5DE5\u4F5C\u533A\u5916\uFF09",
  txtPlaceholder: "\u5728\u6B64\u8F93\u5165\u6587\u672C\u2026",
  txtChars: "\u5B57\u7B26",
  txtUnsavedTitle: "\u672A\u4FDD\u5B58\u7684\u6539\u52A8",
  txtUnsavedMsg: "\u8BE5\u6587\u4EF6\u6709\u672A\u4FDD\u5B58\u7684\u6539\u52A8\uFF0C\u786E\u5B9A\u5173\u95ED\uFF1F",
  txtSaved: "\u5DF2\u4FDD\u5B58",
  // 预览
  download: "\u4E0B\u8F7D",
  // JSON 编辑器
  statusItemsCount: "{count} \u4E2A\u9879\u76EE",
  // 搜索
  searchTitle: "\u641C\u7D22\u6587\u4EF6\u540D/\u5185\u5BB9",
  searchPlaceholder: "\u8F93\u5165\u5173\u952E\u5B57\u2026",
  search: "\u641C\u7D22",
  searching: "\u641C\u7D22\u4E2D\u2026",
  searchCase: "\u533A\u5206\u5927\u5C0F\u5199",
  searchRegex: "\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D",
  searchIdle: "\u5728\u9876\u90E8\u641C\u7D22\u6846\u8F93\u5165\u5173\u952E\u5B57\uFF0C\u5B9E\u65F6\u5339\u914D\u6587\u4EF6\u540D\u4E0E\u6587\u4EF6\u5185\u5BB9\u3002",
  resultsCount: "{count} \u4E2A\u7ED3\u679C",
  resultsSuffixTruncated: "\uFF08\u5DF2\u622A\u65AD\uFF09",
  hitTitle: "\u53F3\u952E\u5728\u8D44\u6E90\u7BA1\u7406\u5668\u4E2D\u5B9A\u4F4D\\\u5DE6\u952E\u6253\u5F00",
  matchContent: "\u5185\u5BB9\u5339\u914D",
  // 跨文件批量替换
  searchReplaceAll: "\u6279\u91CF\u66FF\u6362",
  searchReplaceTitle: "\u786E\u8BA4\u6279\u91CF\u66FF\u6362",
  searchReplaceConfirm: "\u5C06\u5728 {files} \u4E2A\u6587\u4EF6\u4E2D\u66FF\u6362 {count} \u5904\u5339\u914D\uFF0C\u6B64\u64CD\u4F5C\u4E0D\u53EF\u64A4\u9500\uFF0C\u786E\u5B9A\u7EE7\u7EED\uFF1F",
  searchReplaceBusy: "\u6B63\u5728\u66FF\u6362\u2026",
  searchReplaceDone: "\u5DF2\u66FF\u6362 {files} \u4E2A\u6587\u4EF6\uFF08{count} \u5904\uFF09",
  // toast / 操作反馈
  openFolderFirst: "\u8BF7\u5148\u6253\u5F00\u6587\u4EF6\u5939",
  dirCreated: "\u76EE\u5F55\u5DF2\u521B\u5EFA",
  fileCreated: "\u6587\u4EF6\u5DF2\u521B\u5EFA",
  renamed: "\u5DF2\u91CD\u547D\u540D",
  deleted: "\u5DF2\u5220\u9664",
  workspaceOutside: "\u64CD\u4F5C\u88AB\u62D2\u7EDD\uFF1A\u8BE5\u64CD\u4F5C\u4EC5\u9650\u5DE5\u4F5C\u533A\u5185\u7684\u6587\u4EF6/\u6587\u4EF6\u5939",
  errForbidden: "\u65E0\u6743\u9650\u6216\u64CD\u4F5C\u88AB\u62D2\u7EDD\uFF08403\uFF09",
  errNotFound: "\u6587\u4EF6\u6216\u76EE\u5F55\u4E0D\u5B58\u5728\uFF08404\uFF09",
  errNoRoot: "\u672A\u6253\u5F00\u6587\u4EF6\u5939\uFF1A\u8BF7\u5148\u9009\u62E9\u5DE5\u4F5C\u533A\u76EE\u5F55\uFF08409\uFF09",
  errTooLarge: "\u6570\u636E\u8FC7\u5927\uFF0C\u8D85\u51FA\u5141\u8BB8\u8303\u56F4\uFF08413\uFF09",
  errServer: "\u670D\u52A1\u7AEF\u5904\u7406\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\uFF08500\uFF09",
  errNetwork: "\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5 host \u8FDE\u63A5",
  // 右键菜单（文件/文件夹）
  menuOpen: "\u6253\u5F00",
  menuOpenExternal: "\u4F7F\u7528\u7CFB\u7EDF\u9ED8\u8BA4\u7A0B\u5E8F\u6253\u5F00",
  menuOpenInEditor: "\u5728\u6587\u4EF6\u7F16\u8F91\u5668\u4E2D\u6253\u5F00",
  menuCut: "\u526A\u5207",
  menuCopy: "\u590D\u5236",
  menuRename: "\u91CD\u547D\u540D",
  menuDelete: "\u5220\u9664",
  menuCopyPath: "\u590D\u5236\u5B8C\u6574\u8DEF\u5F84",
  menuProperties: "\u5C5E\u6027",
  menuCutDone: "\u5DF2\u526A\u5207\u5230\u526A\u8D34\u677F",
  menuCopyDone: "\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F",
  menuOpened: "\u5DF2\u8C03\u7528\u7CFB\u7EDF\u7A0B\u5E8F\u6253\u5F00",
  menuPathCopied: "\u8DEF\u5F84\u5DF2\u590D\u5236",
  menuPathCopyFail: "\u8DEF\u5F84\u590D\u5236\u5931\u8D25",
  // 右键菜单（空白区）
  menuRefresh: "\u5237\u65B0",
  menuView: "\u67E5\u770B",
  menuSort: "\u6392\u5E8F\u65B9\u5F0F",
  expShowNav: "\u663E\u793A\u5BFC\u822A\u680F",
  menuPaste: "\u7C98\u8D34",
  menuUpload: "\u4E0A\u4F20\u6587\u4EF6",
  uploaded: "\u5DF2\u4E0A\u4F20 {count} \u4E2A\u6587\u4EF6",
  uploadFailed: "\u6709 {count} \u4E2A\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25",
  menuNew: "\u65B0\u5EFA",
  menuNewFolder: "\u6587\u4EF6\u5939",
  menuNewFile: "\u6587\u672C\u6587\u4EF6",
  // 与下方 newFileName 对应，.txt 后缀
  viewHuge: "\u8D85\u5927\u56FE\u6807",
  sshHosts: "SSH \u4E3B\u673A",
  sshAddHost: "\u6DFB\u52A0\u4E3B\u673A",
  sshCancel: "\u53D6\u6D88",
  sshName: "\u663E\u793A\u540D",
  sshAddr: "\u5730\u5740\uFF08\u7528\u6237 @ \u4E3B\u673A : \u7AEF\u53E3\uFF09",
  sshUser: "\u7528\u6237\u540D",
  sshHostAddr: "\u4E3B\u673A\u5730\u5740",
  sshAuth: "\u8BA4\u8BC1\u65B9\u5F0F",
  sshAuthPassword: "\u53E3\u4EE4\u8BA4\u8BC1",
  sshAuthKey: "\u79C1\u94A5\u8BA4\u8BC1",
  sshPassword: "SSH \u53E3\u4EE4",
  sshKeyPath: "\u79C1\u94A5\u6587\u4EF6\u8DEF\u5F84\uFF08\u652F\u6301 ~\uFF09",
  sshSaveAdd: "\u6DFB\u52A0",
  sshTest: "\u6D4B\u8BD5",
  sshTestConn: "\u6D4B\u8BD5",
  sshDelete: "\u5220\u9664",
  sshDeleteConfirm: "\u518D\u70B9\u4E00\u6B21\u786E\u8BA4\u5220\u9664",
  sshTestOk: "SSH \u8FDE\u63A5\u6210\u529F",
  sshTestFail: "SSH \u8FDE\u63A5\u5931\u8D25",
  sshRequired: "\u4E3B\u673A\u5730\u5740\u4E0E\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879",
  sshAddSuccess: "\u4E3B\u673A\u5DF2\u6DFB\u52A0",
  sshNewHost: "\u6DFB\u52A0 SSH \u4E3B\u673A",
  sshEdit: "\u7F16\u8F91",
  sshEditTitle: "\u7F16\u8F91 SSH \u4E3B\u673A",
  sshHostCaption: "\u8FDE\u63A5\u8FDC\u7A0B\u670D\u52A1\u5668\uFF0C\u6D4F\u89C8\u6587\u4EF6\u4E0E\u767B\u5F55\u7EC8\u7AEF",
  sshUpdateSuccess: "\u4E3B\u673A\u5DF2\u66F4\u65B0",
  sshSaveEdit: "\u4FDD\u5B58\u4FEE\u6539",
  sshKeepSecret: "\uFF08\u7559\u7A7A\u5219\u6CBF\u7528\u539F\u53E3\u4EE4\uFF09",
  sshNoHosts: "\u8FD8\u6CA1\u6709\u4E3B\u673A\uFF0C\u70B9\u300C\u6DFB\u52A0\u4E3B\u673A\u300D\u5F00\u59CB",
  // 账号管理（Git / SVN 凭据；两个面板共用同一对话框）
  accTitle: "\u8D26\u53F7\u7BA1\u7406",
  accCaption: "\u7BA1\u7406 Git / SVN \u767B\u5F55\u51ED\u636E\uFF0C\u6267\u884C\u547D\u4EE4\u65F6\u81EA\u52A8\u6CE8\u5165",
  accListTitle: "\u5DF2\u4FDD\u5B58\u8D26\u53F7",
  accAdd: "\u6DFB\u52A0\u8D26\u53F7",
  accNewTitle: "\u6DFB\u52A0\u8D26\u53F7",
  accEditTitle: "\u7F16\u8F91\u8D26\u53F7",
  accEdit: "\u7F16\u8F91",
  accKind: "\u7C7B\u578B",
  accKindGit: "Git",
  accKindSvn: "SVN",
  accName: "\u663E\u793A\u540D",
  accHost: "\u4E3B\u673A",
  accHostPlaceholder: "\u4F8B\u5982 github.com \u6216 113.57.110.41:804",
  accUrl: "\u4ED3\u5E93\u5730\u5740\uFF08\u9009\u586B\uFF09",
  accUrlPlaceholder: "https://github.com/owner/repo.git",
  accUrlHint: "\u7559\u7A7A = \u5BF9\u8BE5\u4E3B\u673A\u7684\u5168\u90E8\u4ED3\u5E93\u751F\u6548\uFF1B\u586B\u5199\u540E\u6309\u5730\u5740\u524D\u7F00\u5339\u914D\uFF0C\u7528\u4E8E\u540C\u4E3B\u673A\u591A\u8D26\u53F7\u3002\u300C\u6D4B\u8BD5\u8FDE\u901A\u300D\u4E0E\u300C\u5199\u5165\u7CFB\u7EDF\u300D\u90FD\u9700\u8981\u5B83\u3002",
  accUsername: "\u7528\u6237\u540D",
  accSecret: "\u53E3\u4EE4 / \u8BBF\u95EE\u4EE4\u724C",
  accSecretKind: "\u51ED\u636E\u7C7B\u578B",
  accSecretPassword: "\u53E3\u4EE4",
  accSecretToken: "\u8BBF\u95EE\u4EE4\u724C",
  accKeepSecret: "\uFF08\u7559\u7A7A\u5219\u6CBF\u7528\u5DF2\u5B58\u53E3\u4EE4\uFF09",
  accNote: "\u5907\u6CE8",
  accSave: "\u4FDD\u5B58",
  accCancel: "\u53D6\u6D88",
  accDelete: "\u5220\u9664",
  accDeleteConfirm: "\u518D\u70B9\u4E00\u6B21\u786E\u8BA4\u5220\u9664",
  accTest: "\u6D4B\u8BD5\u8FDE\u901A",
  accTestOk: "\u8FDE\u901A\u6B63\u5E38",
  accTestFail: "\u8FDE\u63A5\u5931\u8D25",
  accApply: "\u5199\u5165\u7CFB\u7EDF",
  accApplyOk: "\u5DF2\u5199\u5165\u7CFB\u7EDF",
  accApplyHint: "\u5199\u5165\u7CFB\u7EDF\u51ED\u636E\u5B58\u50A8\u540E\uFF0C\u547D\u4EE4\u884C\u4E0E\u5176\u5B83 GUI \u5DE5\u5177\u4E5F\u514D\u5BC6\u3002",
  accSaved: "\u8D26\u53F7\u5DF2\u4FDD\u5B58",
  accDeleted: "\u8D26\u53F7\u5DF2\u5220\u9664",
  accRequired: "\u4E3B\u673A\u4E0E\u7528\u6237\u540D\u4E3A\u5FC5\u586B",
  accSecretRequired: "\u8BF7\u586B\u5199\u53E3\u4EE4\u6216\u8BBF\u95EE\u4EE4\u724C",
  accEmpty: "\u8FD8\u6CA1\u6709\u8D26\u53F7\uFF0C\u70B9\u300C\u6DFB\u52A0\u8D26\u53F7\u300D\u5F00\u59CB",
  accHasSecret: "\u5DF2\u4FDD\u5B58\u51ED\u636E",
  accNoSecret: "\u672A\u4FDD\u5B58\u51ED\u636E",
  accAllRepos: "\u8BE5\u4E3B\u673A\u5168\u90E8\u4ED3\u5E93",
  accEffective: "\u5F53\u524D\u4ED3\u5E93\u5C06\u4F7F\u7528",
  accEffectiveNone: "\u5F53\u524D\u4ED3\u5E93\u65E0\u5339\u914D\u8D26\u53F7\uFF08\u5C06\u8D70\u7CFB\u7EDF\u51ED\u636E / svn \u81EA\u8EAB\u7F13\u5B58\uFF09",
  accCopyIdent: "\u590D\u5236\u8D26\u53F7\u6807\u8BC6",
  accMatchHint: "\u6309\u4E3B\u673A\u6216\u4ED3\u5E93\u5730\u5740\u524D\u7F00\u5339\u914D\uFF0C\u672A\u547D\u4E2D\u65F6\u4F7F\u7528\u7CFB\u7EDF\u51ED\u636E",
  accUseCurrent: "\u7528\u5F53\u524D\u4ED3\u5E93\u586B\u5145",
  accBack: "\u8FD4\u56DE\u5217\u8868",
  accPick: "\u4ECE\u5DE6\u4FA7\u9009\u62E9\u4E00\u4E2A\u8D26\u53F7\uFF0C\u6216\u70B9\u300C\u6DFB\u52A0\u8D26\u53F7\u300D\u65B0\u5EFA",
  accTip: "\u51ED\u636E\u4EC5\u5B58\u4E8E\u672C\u673A\u63D2\u4EF6\u914D\u7F6E\uFF0C\u4E0D\u4F1A\u5916\u53D1\uFF1B\u53E3\u4EE4\u4E0D\u56DE\u663E\uFF0C\u7559\u7A7A\u5373\u6CBF\u7528\u539F\u503C\u3002",
  sshStatusOnline: "\u5DF2\u8FDE\u63A5",
  sshStatusOffline: "\u672A\u8FDE\u63A5",
  sshStatusChecking: "\u68C0\u6D4B\u4E2D\u2026",
  sshStatusUnknown: "\u5C1A\u672A\u68C0\u6D4B",
  remoteNoExternal: "\u8FDC\u7AEF\u6587\u4EF6\u65E0\u6CD5\u7528\u672C\u673A\u7A0B\u5E8F\u6253\u5F00",
  remoteNoArchive: "\u8FDC\u7AEF\u76EE\u5F55\u6682\u4E0D\u652F\u6301\u538B\u7F29 / \u89E3\u538B",
  remoteNoTerminal: "\u627E\u4E0D\u5230\u8BE5\u8FDC\u7AEF\u4E3B\u673A\u7684\u914D\u7F6E\uFF0C\u5DF2\u5728\u672C\u673A\u76EE\u5F55\u542F\u52A8\u7EC8\u7AEF\uFF08\u53EF\u5148\u5728\u8BBE\u7F6E\u91CC\u6DFB\u52A0\u8BE5 SSH \u4E3B\u673A\uFF09",
  remoteCachedHint: "\u8FDC\u7AEF\u6587\u4EF6\u5DF2\u4E0B\u8F7D\u5230\u672C\u673A\u4E34\u65F6\u6587\u4EF6\u540E\u6253\u5F00\uFF08\u6539\u52A8\u4E0D\u4F1A\u56DE\u4F20\u8FDC\u7AEF\uFF09",
  sshNavGroup: "SSH \u8FDC\u7A0B",
  sshEmpty: "\u5C1A\u672A\u6DFB\u52A0\u4E3B\u673A\uFF08\u5728\u6B64\u53F3\u952E\u6DFB\u52A0\uFF0C\u6216\u7528\u300C\u65B0\u5EFA \u25BE\u300D\uFF09",
  viewLarge: "\u5927\u56FE\u6807",
  viewMedium: "\u4E2D\u7B49\u56FE\u6807",
  viewSmall: "\u5C0F\u56FE\u6807",
  viewList: "\u5217\u8868",
  viewDetails: "\u8BE6\u7EC6\u4FE1\u606F",
  viewContent: "\u5185\u5BB9",
  viewTiles: "\u5E73\u94FA",
  showExtensions: "\u663E\u793A\u6587\u4EF6\u6269\u5C55\u540D",
  cmdPreview: "\u9884\u89C8",
  sortName: "\u540D\u79F0",
  sortModified: "\u4FEE\u6539\u65E5\u671F",
  sortType: "\u7C7B\u578B",
  sortSize: "\u5927\u5C0F",
  moved: "\u5DF2\u79FB\u52A8",
  copied: "\u5DF2\u590D\u5236",
  createdFolder: "\u5DF2\u65B0\u5EFA\u6587\u4EF6\u5939",
  createdFile: "\u5DF2\u65B0\u5EFA\u6587\u4EF6",
  newFolderName: "\u65B0\u5EFA\u6587\u4EF6\u5939",
  newFileName: "\u65B0\u5EFA\u6587\u672C\u6587\u4EF6",
  // 属性对话框
  propName: "\u540D\u79F0",
  propPath: "\u8DEF\u5F84",
  propKind: "\u7C7B\u578B",
  propSize: "\u5927\u5C0F",
  propModified: "\u4FEE\u6539\u65E5\u671F",
  // 设置
  settings: "\u8BBE\u7F6E",
  settingsSubtitle: "\u4E2A\u6027\u5316\u5DE5\u4F5C\u53F0\u7684\u5916\u89C2\u4E0E\u884C\u4E3A",
  retry: "\u91CD\u8BD5",
  taskSrcMissing: "\u6E90\u6587\u4EF6\u4E0D\u5B58\u5728\uFF08\u53EF\u80FD\u5DF2\u88AB\u79FB\u52A8\u6216\u5220\u9664\uFF09\uFF0C\u5DF2\u5237\u65B0\u5217\u8868\uFF1A{name}",
  menuMore: "\u66F4\u591A",
  settingsGroupFiles: "\u6587\u4EF6",
  settingsGroupAppearance: "\u5916\u89C2",
  autoSave: "\u81EA\u52A8\u4FDD\u5B58\uFF08\u7F16\u8F91\u505C\u987F 1 \u79D2\u540E\u5199\u5165\uFF09",
  vsFindPlaceholder: "\u67E5\u627E",
  vsReplacePlaceholder: "\u66FF\u6362\u4E3A",
  vsFindNext: "\u4E0B\u4E00\u4E2A\uFF08Enter\uFF09",
  vsFindPrev: "\u4E0A\u4E00\u4E2A\uFF08Shift+Enter\uFF09",
  vsFindReplace: "\u66FF\u6362\uFF08Enter\uFF09",
  vsFindReplaceAll: "\u5168\u90E8\u66FF\u6362",
  vsFindToggleReplace: "\u5C55\u5F00 / \u6536\u8D77\u66FF\u6362",
  vsFindClose: "\u5173\u95ED\uFF08Esc\uFF09",
  vsFindNoMatch: "\u65E0\u7ED3\u679C",
  vsFindWord: "\u5168\u5B57\u5339\u914D",
  vsMenuLocalDiff: "\u67E5\u770B\u672C\u5730\u6539\u52A8",
  vsLocalDiffTitle: "\u672A\u4FDD\u5B58\u6539\u52A8",
  vsLocalDiffTooBig: "\u6539\u52A8\u8FC7\u5927\uFF0C\u65E0\u6CD5\u751F\u6210\u5BF9\u6BD4",
  vsMultiCursorHint: "\u63D0\u793A\uFF1AAlt + \u70B9\u51FB \u53EF\u6DFB\u52A0\u591A\u5149\u6807",
  vsActHide: "\u9690\u85CF\u300C{name}\u300D",
  vsActExtViews: "\u6269\u5C55\u89C6\u56FE",
  vsActBarBottom: "\u6D3B\u52A8\u680F\u79FB\u5230\u5E95\u90E8",
  vsActBarTop: "\u6D3B\u52A8\u680F\u79FB\u5230\u9876\u90E8",
  vsSideRight: "\u4FA7\u680F\u79FB\u5230\u53F3\u4FA7",
  vsSideLeft: "\u4FA7\u680F\u79FB\u5230\u5DE6\u4FA7",
  vsMinimap: "\u7F16\u8F91\u5668\u7F29\u7565\u56FE",
  vsCloseSave: "\u4FDD\u5B58\u5E76\u5173\u95ED",
  vsCloseDiscard: "\u4E0D\u4FDD\u5B58\u5173\u95ED",
  vsCloseSaveAll: "\u5168\u90E8\u4FDD\u5B58\u5E76\u5173\u95ED",
  vsCloseDiscardAll: "\u5168\u90E8\u4E0D\u4FDD\u5B58\u5173\u95ED",
  showHidden: "\u663E\u793A\u9690\u85CF\u6587\u4EF6",
  allowOutsideRoot: "\u5141\u8BB8\u64CD\u4F5C\u5DE5\u4F5C\u533A\u5916\u7684\u6587\u4EF6 (root \u5F00\u5173)",
  defaultView: "\u9ED8\u8BA4\u89C6\u56FE",
  themeMode: "\u4E3B\u9898",
  themeAuto: "\u8DDF\u968F\u7CFB\u7EDF",
  themeDark: "\u6DF1\u8272",
  themeLight: "\u6D45\u8272",
  accentColor: "\u5F3A\u8C03\u8272",
  accentReset: "\u6062\u590D\u9ED8\u8BA4",
  fontFamily: "\u5B57\u4F53",
  fontDefault: "\u9ED8\u8BA4",
  fontOptionYahei: "\u5FAE\u8F6F\u96C5\u9ED1",
  fontOptionConsolas: "Consolas\uFF08\u7B49\u5BBD\uFF09",
  fontOptionCourier: "Courier New\uFF08\u7B49\u5BBD\uFF09",
  fontOptionGeorgia: "Georgia\uFF08\u886C\u7EBF\uFF09",
  fontSize: "\u5B57\u53F7",
  fontSizeSm: "\u5C0F",
  fontSizeMd: "\u6807\u51C6",
  fontSizeLg: "\u5927",
  fontSizeXl: "\u7279\u5927",
  // 快捷键帮助面板（? 键）
  shortcutHelp: "\u5FEB\u6377\u952E",
  shortcutHint: "\u6309 ? \u968F\u65F6\u5524\u8D77\uFF0C\u6309 Esc \u5173\u95ED",
  shortcutGlobal: "\u5168\u5C40",
  shortcutFileList: "\u6587\u4EF6\u5217\u8868",
  shGlobalHelp: "\u6253\u5F00\u5FEB\u6377\u952E\u5E2E\u52A9",
  shListSelectAll: "\u5168\u9009",
  shListCopy: "\u590D\u5236",
  shListCut: "\u526A\u5207",
  shListPaste: "\u7C98\u8D34",
  shListFilter: "\u805A\u7126\u7B5B\u9009\u6846",
  shListNewFolder: "\u65B0\u5EFA\u6587\u4EF6\u5939",
  shListDelete: "\u5220\u9664\uFF08\u542B\u786E\u8BA4\uFF09",
  shListRename: "\u91CD\u547D\u540D",
  shListRefresh: "\u5237\u65B0",
  shListOpen: "\u6253\u5F00\u6587\u4EF6 / \u8FDB\u5165\u76EE\u5F55",
  shListMove: "\u79FB\u52A8\u9009\u4E2D",
  shListUp: "\u8FD4\u56DE\u4E0A\u7EA7\u76EE\u5F55",
  shListBack: "\u6D4F\u89C8\u540E\u9000",
  shListForward: "\u6D4F\u89C8\u524D\u8FDB",
  // 编辑器：未保存 / 撤销重做 / 导出 / 外部改动
  undo: "\u64A4\u9500",
  // 编辑器查找 / 替换
  findReplacePlaceholder: "\u66FF\u6362\u4E3A\u2026",
  // 最近打开 / 收藏
  favorites: "\u6536\u85CF",
  favoriteAdd: "\u6536\u85CF",
  favoriteRemove: "\u53D6\u6D88\u6536\u85CF",
  favoriteAdded: "\u5DF2\u6536\u85CF",
  favoriteRemoved: "\u5DF2\u53D6\u6D88\u6536\u85CF",
  emptyFavorites: "\uFF08\u6682\u65E0\u6536\u85CF\uFF09",
  // 压缩 / 解压
  menuCompress: "\u538B\u7F29\u4E3A .zip",
  compressed: "\u5DF2\u538B\u7F29",
  menuExtract: "\u89E3\u538B\u5230\u5F53\u524D\u76EE\u5F55",
  extracted: "\u5DF2\u89E3\u538B {count} \u4E2A\u6587\u4EF6",
  extractFailed: "\u89E3\u538B\u5931\u8D25",
  // 多选 / 批量
  selectedCount: "{count} \u9879\u5DF2\u9009",
  menuMultiDelete: "\u5220\u9664\u6240\u9009 ({count})",
  menuMultiCut: "\u526A\u5207\u6240\u9009",
  menuMultiCopy: "\u590D\u5236\u6240\u9009",
  menuMultiCompress: "\u538B\u7F29\u6240\u9009",
  // 快速筛选
  filterPlaceholder: "\u7B5B\u9009\u5F53\u524D\u76EE\u5F55\u2026",
  filterEmpty: "\uFF08\u65E0\u5339\u914D\uFF09",
  // 自由 AI 对话
  taskFabTitle: "\u540E\u53F0\u4EFB\u52A1",
  taskPanelTitle: "\u540E\u53F0\u4EFB\u52A1",
  taskRunning: "\u8FD0\u884C\u4E2D",
  taskHistory: "\u5386\u53F2",
  taskClearFinished: "\u6E05\u9664\u5DF2\u5B8C\u6210",
  taskClearAll: "\u6E05\u7A7A",
  taskEmpty: "\u6682\u65E0\u4EFB\u52A1",
  taskViewLog: "\u67E5\u770B\u65E5\u5FD7",
  taskLogTitle: "\u4EFB\u52A1\u65E5\u5FD7",
  taskClose: "\u5173\u95ED",
  taskFieldTarget: "\u76EE\u6807",
  taskStatusRunning: "\u8FDB\u884C\u4E2D",
  taskStatusDone: "\u5B8C\u6210",
  taskStatusError: "\u5931\u8D25",
  taskFieldFile: "\u6587\u4EF6",
  taskStartTime: "\u5F00\u59CB",
  taskEndTime: "\u7ED3\u675F",
  taskTotalSpent: "\u603B\u8017\u65F6",
  taskStepSpent: "\u8017\u65F6",
  taskRunningLive: "\u8FD0\u884C\u4E2D",
  taskFieldType: "\u7C7B\u578B",
  taskMetaFiles: "{count} \u9879 \xB7 {size}",
  taskArchive: "\u5F52\u6863",
  taskArchiveOpen: "\u67E5\u770B\u5F52\u6863",
  taskArchiveTitle: "\u4EFB\u52A1\u5F52\u6863",
  taskArchiveNone: "\u6682\u65E0\u5F52\u6863",
  taskArchiveRecords: "{count} \u6761\u8BB0\u5F55",
  taskUploading: "\u4E0A\u4F20\u6587\u4EF6",
  taskCompressing: "\u538B\u7F29",
  taskExtracting: "\u89E3\u538B",
  taskCopying: "\u590D\u5236",
  taskMoving: "\u79FB\u52A8",
  taskDeleting: "\u5220\u9664",
  taskRenaming: "\u91CD\u547D\u540D",
  // 会话任务面板
  gitMenu: "Git",
  gitAdd: "\u6682\u5B58 (git add)",
  gitCommit: "\u63D0\u4EA4 (git commit)",
  gitCommitTitle: "Git \u63D0\u4EA4",
  gitCommitPlaceholder: "\u8F93\u5165\u63D0\u4EA4\u4FE1\u606F\u2026",
  gitCommitted: "\u5DF2\u63D0\u4EA4",
  gitAdded: "\u5DF2\u6682\u5B58",
  gitDiscard: "\u8FD8\u539F\u6539\u52A8",
  gitDiscardTitle: "\u786E\u8BA4\u8FD8\u539F",
  gitDiscardMsg: '\u4E22\u5F03 "{name}" \u7684\u5DE5\u4F5C\u533A\u6539\u52A8\uFF08git checkout --\uFF09\uFF1F',
  gitDiscarded: "\u5DF2\u8FD8\u539F",
  gitDiff: "\u67E5\u770B\u6539\u52A8",
  gitDiffTitle: "Git \u6539\u52A8",
  gitDiffEmpty: "\uFF08\u65E0\u53EF\u7528\u6539\u52A8\uFF09",
  gitDiffClose: "\u5173\u95ED",
  gitBadgeUntracked: "\u672A\u8DDF\u8E2A\u7684\u65B0\u6587\u4EF6",
  gitBadgeAdded: "\u65B0\u6DFB\u52A0\u5230\u6682\u5B58\u533A",
  gitBadgeModified: "\u5DF2\u4FEE\u6539",
  gitBadgeDeleted: "\u5DF2\u5220\u9664",
  gitNotRepo: "\u4E0D\u5728 git \u4ED3\u5E93",
  gitNoChanges: "\u6CA1\u6709\u5DF2\u6682\u5B58\u7684\u6539\u52A8\uFF0C\u65E0\u6CD5\u63D0\u4EA4",
  gitLoading: "\u52A0\u8F7D\u4E2D\u2026",
  gitCommitFiles: "\u5C06\u63D0\u4EA4 {n} \u4E2A\u6587\u4EF6\uFF1A",
  gitCommitConfirm: "\u786E\u8BA4\u63D0\u4EA4",
  gitConfig: "\u914D\u7F6E\u8EAB\u4EFD",
  gitConfigTitle: "Git \u8EAB\u4EFD\u914D\u7F6E",
  gitConfigName: "\u7528\u6237\u540D\uFF08user.name\uFF09",
  gitConfigNamePlaceholder: "\u4F8B\u5982\uFF1Ayourname",
  gitConfigEmail: "\u90AE\u7BB1\uFF08user.email\uFF09",
  gitConfigEmailPlaceholder: "\u4F8B\u5982\uFF1Ayou@example.com",
  gitConfigSave: "\u4FDD\u5B58",
  gitConfigSaved: "\u5DF2\u4FDD\u5B58 git \u5168\u5C40\u8EAB\u4EFD\u914D\u7F6E",
  gitPanel: "\u6253\u5F00 Git \u9762\u677F",
  gitIgnore: "\u5FFD\u7565\uFF08\u52A0\u5165 .gitignore\uFF09",
  gitIgnored: "\u5DF2\u5FFD\u7565",
  // Git 管理面板（状态 / 分支 / 暂存区 / 命令台）
  gitPanelTitle: "Git \u7BA1\u7406",
  gitFetch: "\u83B7\u53D6",
  gitPull: "\u62C9\u53D6",
  gitPush: "\u63A8\u9001",
  gitLoadMore: "\u52A0\u8F7D\u66F4\u591A",
  gitDiffTruncated: "\u5DEE\u5F02\u8FC7\u5927\uFF0C\u4EC5\u663E\u793A\u524D 5000 \u884C\uFF08\u5B8C\u6574\u5185\u5BB9\u53EF\u5728\u7F16\u8F91\u5668\u67E5\u770B\uFF09",
  gitCopyName: "\u590D\u5236\u540D\u79F0",
  gitCopyUrl: "\u590D\u5236 URL",
  gitCopyMsg: "\u590D\u5236\u8BF4\u660E",
  gitCloneHere: "\u514B\u9686\u4ED3\u5E93\u2026",
  gitStatusColon: "\u5F53\u524D\u5206\u652F\uFF1A{branch}",
  gitLocalRepo: "\u672C\u5730\u4ED3\u5E93\uFF1A",
  gitTabStatus: "\u66F4\u6539",
  gitTabLog: "\u63D0\u4EA4\u8BB0\u5F55",
  gitTabBranch: "\u5206\u652F",
  gitTabStash: "\u6682\u5B58\u533A",
  gitTabCli: "\u547D\u4EE4",
  gitClean: "\u5DE5\u4F5C\u533A\u5E72\u51C0\uFF0C\u6CA1\u6709\u5F85\u63D0\u4EA4\u7684\u6539\u52A8",
  gitAddShort: "\u6682\u5B58",
  gitUnstage: "\u53D6\u6D88\u6682\u5B58",
  gitUnstaged: "\u5DF2\u53D6\u6D88\u6682\u5B58",
  gitStageAll: "\u5168\u90E8\u6682\u5B58",
  gitGroupStaged: "\u5DF2\u6682\u5B58\u7684\u66F4\u6539",
  gitGroupUnstaged: "\u66F4\u6539",
  gitGroupUntracked: "\u672A\u8DDF\u8E2A",
  gitLogEmpty: "\uFF08\u6682\u65E0\u63D0\u4EA4\u8BB0\u5F55\uFF09",
  gitBranchNew: "\u65B0\u5206\u652F\u540D\u79F0",
  gitCheckout: "\u5207\u6362",
  gitDelete: "\u5220\u9664",
  gitBranchCreated: "\u5DF2\u521B\u5EFA\u5E76\u5207\u6362\u5230\u5206\u652F {name}",
  gitBranchDeleteMsg: "\u786E\u5B9A\u5220\u9664\u5206\u652F {name}\uFF1F",
  gitStashPlaceholder: "\u6682\u5B58\u8BF4\u660E\uFF08\u53EF\u9009\uFF09",
  gitStashCreate: "\u521B\u5EFA\u6682\u5B58",
  gitStashEmpty: "\uFF08\u6682\u65E0\u6682\u5B58\u8BB0\u5F55\uFF09",
  gitStashApply: "\u5E94\u7528",
  gitStashPop: "\u5F39\u51FA",
  gitStashDrop: "\u5220\u9664",
  gitStashClear: "\u6E05\u7A7A\u6682\u5B58\u533A",
  gitStashCreated: "\u5DF2\u521B\u5EFA\u6682\u5B58",
  gitStashApplied: "\u5DF2\u5E94\u7528\u6682\u5B58",
  gitStashPopped: "\u5DF2\u5F39\u51FA\u6682\u5B58",
  gitStashDropped: "\u5DF2\u5220\u9664\u8BE5\u6761\u6682\u5B58",
  gitStashCleared: "\u5DF2\u6E05\u7A7A\u6682\u5B58\u533A",
  gitStashDropMsg: "\u786E\u5B9A\u5220\u9664\u6682\u5B58 {ref}\uFF1F",
  gitStashClearMsg: "\u786E\u5B9A\u6E05\u7A7A\u5168\u90E8\u6682\u5B58\u8BB0\u5F55\uFF1F\u6B64\u64CD\u4F5C\u4E0D\u53EF\u6062\u590D\u3002",
  gitCliPlaceholder: "\u8F93\u5165 git \u5B50\u547D\u4EE4\uFF0C\u4F8B\u5982 status / log --oneline -5",
  // —— Git 面板重构（TortoiseGit 风格：左导航 + 右详情） ——
  gitRailChanges: "\u66F4\u6539",
  gitRailHistory: "\u63D0\u4EA4\u5386\u53F2",
  gitRailBranches: "\u5206\u652F",
  gitRailTags: "\u6807\u7B7E",
  gitRailRemotes: "\u8FDC\u7A0B",
  gitRailStash: "\u50A8\u85CF",
  gitRailCli: "\u547D\u4EE4\u53F0",
  gitHeadDetached: "\u5206\u79BB\u5934\u6307\u9488",
  gitNoUpstream: "\u65E0\u4E0A\u6E38\u5206\u652F",
  gitAheadBehind: "\u9886\u5148 {ahead} \xB7 \u843D\u540E {behind}",
  gitSelectFile: "\u5728\u5DE6\u4FA7\u9009\u62E9\u4E00\u4E2A\u6587\u4EF6\u67E5\u770B\u6539\u52A8",
  gitDiffUntrackedHint: "\u672A\u8DDF\u8E2A\u7684\u65B0\u6587\u4EF6\uFF1A\u6682\u5B58\u540E\u53EF\u67E5\u770B\u4E0E HEAD \u7684\u5DEE\u5F02",
  gitCommitMsgPlaceholder: "\u63D0\u4EA4\u8BF4\u660E\u2026",
  gitFileHistory: "\u6587\u4EF6\u5386\u53F2",
  gitBlame: "\u9010\u884C\u8FFD\u6EAF",
  gitBlameAuthor: "\u4F5C\u8005",
  gitBlameDate: "\u65E5\u671F",
  gitBlameLine: "\u884C",
  gitBlameEmpty: "\uFF08\u65E0\u6CD5\u8BFB\u53D6\u9010\u884C\u8FFD\u6EAF\uFF09",
  gitFileHistoryEmpty: "\uFF08\u8BE5\u6587\u4EF6\u6682\u65E0\u5386\u53F2\uFF09",
  gitBack: "\u8FD4\u56DE",
  gitHistoryAll: "\u5168\u90E8\u5206\u652F",
  gitHistoryCurrent: "\u4EC5\u5F53\u524D\u5206\u652F",
  gitSelectCommit: "\u5728\u5DE6\u4FA7\u9009\u62E9\u4E00\u4E2A\u63D0\u4EA4\u67E5\u770B\u8BE6\u60C5",
  gitCommitDetail: "\u63D0\u4EA4\u8BE6\u60C5",
  gitCommitHash: "\u63D0\u4EA4\u54C8\u5E0C",
  gitCommitAuthor: "\u4F5C\u8005",
  gitCommitDate: "\u63D0\u4EA4\u65F6\u95F4",
  gitCommitParents: "\u7236\u63D0\u4EA4",
  gitCommitRefs: "\u5F15\u7528",
  gitCommitChangedFiles: "\u53D8\u66F4\u6587\u4EF6\uFF08{n}\uFF09",
  gitCommitNoFiles: "\uFF08\u65E0\u6587\u4EF6\u53D8\u66F4\uFF09",
  gitCopyHash: "\u590D\u5236\u54C8\u5E0C",
  gitCopyPath: "\u590D\u5236\u8DEF\u5F84",
  gitCopied: "\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F",
  gitReset: "\u91CD\u7F6E\u5230\u6B64\u63D0\u4EA4",
  gitResetSoft: "\u8F6F\u91CD\u7F6E\uFF08\u6539\u52A8\u5168\u90E8\u4FDD\u7559\u5728\u6682\u5B58\u533A\uFF09",
  gitResetMixed: "\u6DF7\u5408\u91CD\u7F6E\uFF08\u6539\u52A8\u4FDD\u7559\u5728\u5DE5\u4F5C\u533A\uFF09",
  gitResetHard: "\u786C\u91CD\u7F6E\uFF08\u4E22\u5F03\u6539\u52A8\uFF09",
  gitResetHardMsg: "\u786C\u91CD\u7F6E\u4F1A\u4E22\u5F03\u5DE5\u4F5C\u533A\u4E0E\u6682\u5B58\u533A\u7684\u5168\u90E8\u6539\u52A8\uFF0C\u786E\u5B9A\u7EE7\u7EED\uFF1F",
  gitResetDone: "\u5DF2\u91CD\u7F6E\u5230 {hash}",
  gitRevert: "\u8FD8\u539F\u6B64\u63D0\u4EA4",
  gitRevertDone: "\u5DF2\u8FD8\u539F {hash}",
  gitCherryPick: "\u62E3\u9009\u5230\u5F53\u524D\u5206\u652F",
  gitCherryPicked: "\u5DF2\u62E3\u9009 {hash}",
  gitCheckoutCommit: "\u68C0\u51FA\u6B64\u63D0\u4EA4",
  gitCheckoutCommitMsg: "\u5C06\u8FDB\u5165\u5206\u79BB\u5934\u6307\u9488\u72B6\u6001\uFF0C\u786E\u5B9A\u68C0\u51FA {hash}\uFF1F",
  gitBranchFrom: "\u65B0\u5EFA\u5206\u652F\u6307\u5411\u6B64\u63D0\u4EA4",
  gitBranchFromTitle: "\u4ECE\u6B64\u63D0\u4EA4\u65B0\u5EFA\u5206\u652F",
  gitBranchFromPlaceholder: "\u65B0\u5206\u652F\u540D\u79F0",
  gitBranchRename: "\u91CD\u547D\u540D",
  gitBranchRenameTitle: "\u91CD\u547D\u540D\u5F53\u524D\u5206\u652F",
  gitBranchRenamePlaceholder: "\u65B0\u7684\u5206\u652F\u540D",
  gitBranchRenamed: "\u5DF2\u91CD\u547D\u540D\u4E3A {name}",
  gitMergeIntoCurrent: "\u5408\u5E76\u5230\u5F53\u524D\u5206\u652F",
  gitMergeDone: "\u5DF2\u5408\u5E76 {name}",
  gitPushBranch: "\u63A8\u9001",
  gitPushed: "\u5DF2\u63A8\u9001 {name}",
  gitBranchCurrent: "\u5F53\u524D",
  gitBranchRemoteGroup: "\u8FDC\u7A0B\u5206\u652F",
  gitBranchLocalGroup: "\u672C\u5730\u5206\u652F",
  gitBranchCreateAndSwitch: "\u521B\u5EFA\u5E76\u5207\u6362",
  gitTagNew: "\u65B0\u5EFA\u6807\u7B7E",
  gitTagNamePlaceholder: "\u6807\u7B7E\u540D\uFF0C\u5982 v1.0.0",
  gitTagTargetPlaceholder: "\u76EE\u6807\u63D0\u4EA4\uFF08\u7559\u7A7A\u4E3A HEAD\uFF09",
  gitTagMessagePlaceholder: "\u8BF4\u660E\uFF08\u586B\u5199\u5373\u521B\u5EFA\u9644\u6CE8\u6807\u7B7E\uFF09",
  gitTagCreate: "\u521B\u5EFA",
  gitTagEmpty: "\uFF08\u6682\u65E0\u6807\u7B7E\uFF09",
  gitTagAnnotated: "\u9644\u6CE8",
  gitView: "\u67E5\u770B",
  gitTagCreated: "\u5DF2\u521B\u5EFA\u6807\u7B7E {name}",
  gitTagDeleteMsg: "\u786E\u5B9A\u5220\u9664\u6807\u7B7E {name}\uFF1F",
  gitTagDeleted: "\u5DF2\u5220\u9664\u6807\u7B7E {name}",
  gitTagPushed: "\u5DF2\u63A8\u9001\u6807\u7B7E {name}",
  gitTagFetchAll: "\u4ECE\u8FDC\u7A0B\u83B7\u53D6\u6807\u7B7E",
  gitTagFetchAllDone: "\u5DF2\u4ECE\u8FDC\u7A0B\u83B7\u53D6\u6807\u7B7E",
  gitTagRemoteOnly: "\u8FDC\u7A0B",
  gitTagPull: "\u62C9\u53D6",
  gitTagPulled: "\u5DF2\u62C9\u53D6\u6807\u7B7E {name}",
  gitTagNoRemote: "\u65E0\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u65E0\u6CD5\u83B7\u53D6\u6216\u53D1\u5E03\u6807\u7B7E",
  gitCommitViewTitle: "\u63D0\u4EA4\u5BF9\u6BD4",
  gitCommitOpenDiff: "\u67E5\u770B {path} \u7684\u5DEE\u5F02",
  gitReleaseBtn: "\u53D1\u5E03\u65B0\u7248\u672C",
  gitReleaseTitle: "\u53D1\u5E03\u65B0\u7248\u672C\uFF08\u521B\u5EFA\u9644\u6CE8\u6807\u7B7E\u5E76\u63A8\u9001\u5230\u8FDC\u7A0B\uFF09",
  gitReleaseName: "\u7248\u672C\u6807\u7B7E\u540D",
  gitReleaseTarget: "\u57FA\u4E8E\u63D0\u4EA4\uFF08\u7559\u7A7A\u4E3A HEAD\uFF09",
  gitReleaseMsg: "\u7248\u672C\u8BF4\u660E\uFF08\u5FC5\u586B\uFF09",
  gitReleasePublish: "\u521B\u5EFA\u5E76\u53D1\u5E03",
  gitReleaseRequireMsg: "\u53D1\u5E03\u7248\u672C\u9700\u586B\u5199\u7248\u672C\u8BF4\u660E",
  gitReleased: "\u5DF2\u53D1\u5E03 {name} \u5230\u8FDC\u7A0B",
  gitReleaseGhSkip: "GitHub Release \u672A\u521B\u5EFA\uFF1A{reason}",
  gitRefresh: "\u5237\u65B0",
  gitTabTags: "\u6807\u7B7E",
  gitTabReleases: "\u7248\u672C",
  gitReleaseChooseTag: "\u9009\u62E9\u5DF2\u6709\u6807\u7B7E",
  gitReleaseNotesPlaceholder: "\u7248\u672C\u8BF4\u660E\uFF08\u5C06\u663E\u793A\u5728 Release \u9875\u9762\uFF09",
  gitReleaseCreateForTag: "\u521B\u5EFA Release",
  gitReleaseCreated: "Release \u5DF2\u521B\u5EFA\uFF1A{url}",
  gitReleaseLoadSkip: "\u7248\u672C\u5217\u8868\u4E0D\u53EF\u7528\uFF1A{reason}",
  gitReleaseEmpty: "\u6682\u65E0\u7248\u672C\u8BB0\u5F55",
  gitReleaseOpen: "\u6253\u5F00",
  gitRemoteNamePlaceholder: "\u540D\u79F0\uFF0C\u5982 origin",
  gitRemoteUrlPlaceholder: "\u5730\u5740\uFF0C\u5982 https://github.com/user/repo.git",
  gitRemoteAdd: "\u6DFB\u52A0\u8FDC\u7A0B",
  gitRemoteEmpty: "\uFF08\u6682\u65E0\u8FDC\u7A0B\u4ED3\u5E93\uFF09",
  gitRemoteAdded: "\u5DF2\u6DFB\u52A0\u8FDC\u7A0B {name}",
  gitRemoteRemoveMsg: "\u786E\u5B9A\u79FB\u9664\u8FDC\u7A0B {name}\uFF1F",
  gitRemoteRemoved: "\u5DF2\u79FB\u9664\u8FDC\u7A0B {name}",
  gitRemoteSetUrl: "\u4FEE\u6539\u5730\u5740",
  gitRemoteUrlTitle: "\u4FEE\u6539\u8FDC\u7A0B\u5730\u5740",
  gitRemoteUrlSaved: "\u5DF2\u66F4\u65B0\u8FDC\u7A0B\u5730\u5740",
  gitStashView: "\u67E5\u770B\u5185\u5BB9",
  gitStashNew: "\u521B\u5EFA\u50A8\u85CF",
  gitStashNone: "\uFF08\u5DE5\u4F5C\u533A\u5E72\u51C0\uFF0C\u65E0\u5185\u5BB9\u53EF\u50A8\u85CF\uFF09",
  gitOpRunning: "\u6267\u884C\u4E2D\u2026",
  gitOpFailed: "\u64CD\u4F5C\u5931\u8D25",
  // —— SVN 管理（直接调用 svn CLI） ——
  svnMenu: "SVN",
  svnPanel: "\u6253\u5F00 SVN \u7BA1\u7406",
  svnPanelTitle: "SVN \u7BA1\u7406",
  svnRepo: "\u5DE5\u4F5C\u526F\u672C\uFF1A",
  svnUpdate: "\u66F4\u65B0",
  svnCommitBtn: "\u63D0\u4EA4",
  svnAdd: "\u52A0\u5165\u7248\u672C\u63A7\u5236",
  svnAdded: "\u5DF2\u52A0\u5165\u7248\u672C\u63A7\u5236",
  svnIgnore: "\u5FFD\u7565\uFF08svn:ignore\uFF09",
  svnRevert: "\u8FD8\u539F",
  svnCleanup: "\u6E05\u7406",
  svnResolve: "\u89E3\u51B3\u51B2\u7A81",
  svnDiff: "\u6BD4\u8F83\u5DEE\u5F02",
  svnBlame: "\u8FFD\u6EAF",
  svnCheckout: "\u68C0\u51FA",
  svnFailed: "SVN \u547D\u4EE4\u6267\u884C\u5931\u8D25",
  svnRailChanges: "\u672C\u5730\u4FEE\u6539",
  svnRailLog: "\u63D0\u4EA4\u65E5\u5FD7",
  svnNoUrl: "\u672A\u8BFB\u53D6\u5230\u4ED3\u5E93\u5730\u5740",
  svnRunning: "\u6B63\u5728\u6267\u884C\u2026",
  svnRefresh: "\u5237\u65B0",
  svnLoading: "\u52A0\u8F7D\u4E2D\u2026",
  svnSelectAll: "\u5168\u9009",
  svnModifiedCount: "\u672C\u5730\u4FEE\u6539\uFF08{n}\uFF09",
  svnNoChanges: "\u65E0\u672C\u5730\u4FEE\u6539",
  svnCommitPlaceholder: "\u586B\u5199\u63D0\u4EA4\u8BF4\u660E\u2026",
  svnCommitSelected: "\u5C06\u63D0\u4EA4\u9009\u4E2D\u7684 {n} \u4E2A\u6587\u4EF6",
  svnCommitAll: "\u5C06\u63D0\u4EA4\u5168\u90E8\u672C\u5730\u4FEE\u6539",
  svnOutput: "\u547D\u4EE4\u8F93\u51FA",
  svnNoOutput: "\uFF08\u65E0\u8F93\u51FA\uFF09",
  svnNoCli: "\u672A\u68C0\u6D4B\u5230 svn \u547D\u4EE4\u884C\uFF0C\u8BF7\u5148\u5B89\u88C5 Subversion",
  svnDone: "SVN \u547D\u4EE4\u5DF2\u5B8C\u6210",
  // 「更新」摘要：置于命令输出顶部。有变更时给出版本跨度与条目数；无变更时明确提示已是最新。
  svnUpdateSummaryFrom: "\u66F4\u65B0\u5B8C\u6210\uFF1Ar{from} \u2192 r{to}\uFF0C{n} \u4E2A\u6761\u76EE\u53D8\u66F4",
  svnUpdateSummary: "\u66F4\u65B0\u5B8C\u6210\uFF1A{n} \u4E2A\u6761\u76EE\u53D8\u66F4\uFF0C\u5F53\u524D\u7248\u672C r{to}",
  svnAlreadyLatest: "\u5DF2\u662F\u6700\u65B0\u7248\u672C r{rev}\uFF0C\u6CA1\u6709\u9700\u8981\u66F4\u65B0\u7684\u5185\u5BB9",
  svnLogEmpty: "\u6682\u65E0\u65E5\u5FD7",
  svnLogToggle: "\u70B9\u51FB\u5C55\u5F00 / \u6536\u8D77\u8BE5\u6B21\u63D0\u4EA4\u8BE6\u60C5",
  svnLogNoPaths: "\u8BE5\u63D0\u4EA4\u6CA1\u6709\u53D8\u66F4\u6587\u4EF6\u8BB0\u5F55",
  svnLogOpenDiff: "\u67E5\u770B\u8BE5\u6587\u4EF6\u5728\u6B64\u6B21\u63D0\u4EA4\u4E2D\u7684\u5BF9\u6BD4",
  svnDiffTitle: "\u5DEE\u5F02\u5BF9\u6BD4 \xB7 ",
  svnBlameTitle: "\u8FFD\u6EAF \xB7 ",
  svnCheckoutUrlPlaceholder: "\u4ED3\u5E93\u5730\u5740\uFF08\u5982 https://svn.example.com/svn/repo\uFF09",
  svnCheckoutTargetPlaceholder: "\u68C0\u51FA\u5230\u672C\u5730\u76EE\u5F55",
  // Clone / checkout dialog
  repoCloneTitle: "\u514B\u9686 / \u68C0\u51FA\u4ED3\u5E93",
  repoCloneKindGit: "Git",
  repoCloneKindSvn: "SVN",
  repoCloneTitleGit: "\u514B\u9686 Git \u4ED3\u5E93",
  repoCloneTitleSvn: "\u68C0\u51FA SVN \u4ED3\u5E93",
  repoCloneCaptionGit: "\u4ECE\u8FDC\u7A0B\u4ED3\u5E93\u514B\u9686\u5B8C\u6574\u526F\u672C\u5230\u672C\u5730",
  repoCloneCaptionSvn: "\u4ECE SVN \u670D\u52A1\u5668\u68C0\u51FA\u6307\u5B9A\u7248\u672C\u5230\u672C\u5730",
  repoCloneTargetGit: "\u5C06\u514B\u9686\u5230",
  repoCloneTargetSvn: "\u5C06\u68C0\u51FA\u5230",
  repoCloneUrl: "\u4ED3\u5E93\u5730\u5740",
  repoCloneUrlGitPlaceholder: "\u4ED3\u5E93\u5730\u5740\uFF08\u5982 https://github.com/owner/repo.git\uFF09",
  repoCloneDir: "\u76EE\u6807\u76EE\u5F55",
  repoCloneDirPlaceholder: "\u8981\u514B\u9686\u5230\u7684\u7236\u76EE\u5F55",
  repoCloneBrowse: "\u6D4F\u89C8\u2026",
  repoCloneName: "\u5B50\u76EE\u5F55\u540D\u79F0",
  repoCloneNamePlaceholder: "\u7559\u7A7A\u5219\u6309\u5730\u5740\u63A8\u65AD",
  repoCloneShallow: "\u6D45\u514B\u9686\uFF08\u4EC5\u6700\u65B0\u4E00\u6B21\u63D0\u4EA4\uFF09",
  repoCloneShallowHint: "\u66F4\u5FEB\u66F4\u5C0F\uFF0C\u4F46\u4E0D\u542B\u5386\u53F2",
  repoCloneRevision: "\u7248\u672C\u53F7",
  repoCloneRevisionPlaceholder: "\u7559\u7A7A\u4E3A\u6700\u65B0\uFF08HEAD\uFF09",
  repoCloneAccount: "\u8D26\u53F7",
  repoCloneAccountAuto: "\u81EA\u52A8\u5339\u914D\uFF08\u6309\u5730\u5740\uFF09",
  repoCloneAccountNew: "\u65B0\u5EFA\u8D26\u53F7\u2026",
  repoCloneTargetEmpty: "\u8BF7\u586B\u5199\u4ED3\u5E93\u5730\u5740\u4E0E\u76EE\u6807\u76EE\u5F55",
  repoCloneRunningGit: "\u6B63\u5728\u514B\u9686 Git \u4ED3\u5E93\u2026",
  repoCloneRunningSvn: "\u6B63\u5728\u68C0\u51FA SVN \u4ED3\u5E93\u2026",
  repoCloneElapsed: "\u5DF2\u7528\u65F6 {s} \u79D2",
  repoCloneKeepOpen: "\u4FDD\u6301\u7A97\u53E3\u6253\u5F00\uFF0C\u5B8C\u6210\u540E\u5C06\u6536\u5230\u901A\u77E5\u3002",
  repoCloneActionGit: "\u514B\u9686",
  repoCloneActionSvn: "\u68C0\u51FA",
  repoCloneDoneGit: "\u5DF2\u514B\u9686\u4ED3\u5E93\uFF1A{name}",
  repoCloneDoneSvn: "\u5DF2\u68C0\u51FA\u4ED3\u5E93\uFF1A{name}",
  // Entry menu items (New ▾ / Recent)
  menuCloneGit: "\u514B\u9686 Git \u4ED3\u5E93\u2026",
  menuCloneSvn: "\u68C0\u51FA SVN \u4ED3\u5E93\u2026",
  svnNotRepoTip: "\u5F53\u524D\u76EE\u5F55\u4E0D\u662F SVN \u5DE5\u4F5C\u526F\u672C\uFF0C\u53EF\u586B\u5199\u4E0A\u65B9\u4FE1\u606F\u68C0\u51FA\u4ED3\u5E93\u3002",
  svnCheckedOut: "\u5DF2\u68C0\u51FA\u4ED3\u5E93",
  svnStAdded: "\u5DF2\u6DFB\u52A0",
  svnStModified: "\u5DF2\u4FEE\u6539",
  svnStDeleted: "\u5DF2\u5220\u9664",
  svnStReplaced: "\u5DF2\u66FF\u6362",
  svnStConflicted: "\u51B2\u7A81",
  svnStMissing: "\u7F3A\u5931",
  svnStObstructed: "\u53D7\u963B",
  svnStUnversioned: "\u672A\u7248\u672C\u63A7\u5236",
  svnStIgnored: "\u5DF2\u5FFD\u7565",
  svnStLocked: "\u5DF2\u9501\u5B9A",
  // 停靠布局（dockview）：面板菜单 / 重置
  saveConfig: "\u4FDD\u5B58",
  // Windows 系统回收站
  recycleBin: "\u56DE\u6536\u7AD9",
  recycleRestore: "\u6062\u590D",
  recycleDelete: "\u5F7B\u5E95\u5220\u9664",
  recycleEmpty: "\u6E05\u7A7A\u56DE\u6536\u7AD9",
  recycleEmptyConfirm: "\u786E\u5B9A\u6E05\u7A7A\u56DE\u6536\u7AD9\uFF1F\u6B64\u64CD\u4F5C\u4E0D\u53EF\u6062\u590D\u3002",
  recycleDeleteConfirm: "\u786E\u5B9A\u5F7B\u5E95\u5220\u9664\u201C{name}\u201D\uFF1F\u6B64\u64CD\u4F5C\u4E0D\u53EF\u6062\u590D\u3002",
  recycleDeleteConfirmMulti: "\u786E\u5B9A\u5F7B\u5E95\u5220\u9664\u9009\u4E2D\u7684 {count} \u9879\uFF1F\u6B64\u64CD\u4F5C\u4E0D\u53EF\u6062\u590D\u3002",
  recycleEmptying: "\u6B63\u5728\u6E05\u7A7A\u56DE\u6536\u7AD9\u2026",
  recycleEmptyProgress: "\u6E05\u7A7A\u56DE\u6536\u7AD9\uFF1A\u5269\u4F59 {count} \u9879",
  recycleEmptyDone: "\u56DE\u6536\u7AD9\u5DF2\u6E05\u7A7A",
  recycleEmptyList: "\u56DE\u6536\u7AD9\u662F\u7A7A\u7684",
  recycleRestored: "\u5DF2\u6062\u590D\u5230\u539F\u4F4D\u7F6E",
  recycledDeleted: "\u5DF2\u5F7B\u5E95\u5220\u9664",
  // 终端（ConPTY 交互终端浮窗）
  terminal: "\u7EC8\u7AEF",
  terminalTitle: "\u7EC8\u7AEF",
  terminalMinimize: "\u6700\u5C0F\u5316\u5230\u4EFB\u52A1\u6761",
  terminalCloseTitle: "\u5173\u95ED\u7EC8\u7AEF",
  terminalClose: "\u5173\u95ED",
  terminalNew: "\u65B0\u5EFA\u7EC8\u7AEF",
  terminalShellSwitch: "\u5207\u6362\u9ED8\u8BA4 shell\uFF08cmd / powershell\uFF09",
  terminalAdmin: "\u7BA1\u7406\u5458",
  terminalAdminNormal: "\u666E\u901A\u6743\u9650",
  terminalAdminOn: "\u5F53\u524D\u4EE5\u7BA1\u7406\u5458\u8EAB\u4EFD\u8FD0\u884C\uFF1A\u7EC8\u7AEF\u5185\u547D\u4EE4\u62E5\u6709\u7BA1\u7406\u5458\u6743\u9650",
  terminalAdminOff: "\u5F53\u524D\u4E3A\u666E\u901A\u6743\u9650\uFF1A\u7EC8\u7AEF\u5185\u547D\u4EE4\u65E0\u6CD5\u4FEE\u6539\u7CFB\u7EDF\u7EA7\u8BBE\u7F6E",
  terminalAdminHint: "\u4EE5\u300C\u7BA1\u7406\u5458\u8EAB\u4EFD\u8FD0\u884C\u300D\u542F\u52A8 dsh web\uFF0C\u9762\u677F\u5185\u6240\u6709\u7EC8\u7AEF\u5373\u62E5\u6709\u7BA1\u7406\u5458\u6743\u9650\uFF08\u7EC8\u7AEF\u5B50\u8FDB\u7A0B\u7EE7\u627F\u5BBF\u4E3B\u8FDB\u7A0B\u6743\u9650\uFF09\u3002",
  terminalClear: "\u6E05\u5C4F",
  terminalResizeTitle: "\u62D6\u52A8\u7F29\u653E\u7EC8\u7AEF",
  terminalDockDragTitle: "\u70B9\u51FB\u5C55\u5F00 \xB7 \u62D6\u52A8\u79FB\u52A8 \xB7 \u53F3\u952E\u83DC\u5355",
  terminalDockSessions: "\u5DF2\u6700\u5C0F\u5316\u7684\u7EC8\u7AEF",
  terminalDockCloseAll: "\u5168\u90E8\u5173\u95ED",
  terminalTab: "{n}",
  scrollLeft: "\u5411\u5DE6\u6EDA\u52A8",
  scrollRight: "\u5411\u53F3\u6EDA\u52A8",
  termFontSmaller: "\u51CF\u5C0F\u5B57\u53F7",
  termFontLarger: "\u589E\u5927\u5B57\u53F7",
  termInputFailed: "\u7EC8\u7AEF\u8F93\u5165\u53D1\u9001\u5931\u8D25\uFF1A{msg}",
  termSshBadge: "\u8BE5\u7EC8\u7AEF\u5DF2\u767B\u5F55\u5230\u8FDC\u7AEF SSH \u4E3B\u673A",
  termSshReconnect: "\u91CD\u8FDE",
  termSshReconnectTitle: "\u91CD\u65B0\u767B\u5F55\u8FDC\u7AEF\uFF08\u7528\u5DF2\u4FDD\u5B58\u7684\u53E3\u4EE4 / \u5BC6\u94A5\u81EA\u52A8\u767B\u5F55\uFF09",
  termSearchPlaceholder: "\u5728\u7EC8\u7AEF\u8F93\u51FA\u4E2D\u641C\u7D22\u2026",
  termSearchCase: "\u533A\u5206\u5927\u5C0F\u5199",
  termSearchPrev: "\u4E0A\u4E00\u4E2A",
  termSearchNext: "\u4E0B\u4E00\u4E2A",
  termSearchClose: "\u5173\u95ED\u641C\u7D22",
  termCopyHint: "Ctrl+C \u590D\u5236 \xB7 Ctrl+V \u7C98\u8D34 \xB7 Ctrl+F \u641C\u7D22",
  menuDownload: "\u4E0B\u8F7D\u6587\u4EF6",
  menuOpenTerminal: "\u5728\u7EC8\u7AEF\u6253\u5F00",
  menuSubagent: "\u7528\u5B50\u4EE3\u7406\u5904\u7406",
  menuNewSubagent: "\u65B0\u5EFA\u5B50\u4EE3\u7406\u5BF9\u8BDD",
  subagentAsk: "\u5E0C\u671B\u5B50\u4EE3\u7406\u505A\u4EC0\u4E48\uFF1F",
  subagentAskPlaceholder: "\u63CF\u8FF0\u4EFB\u52A1\uFF08\u53EF\u7559\u7A7A\uFF0C\u7A0D\u540E\u5728\u5B50\u4EE3\u7406\u4F1A\u8BDD\u4E2D\u7EE7\u7EED\uFF09",
  subagentSpawned: "\u5DF2\u5728\u5B98\u65B9\u5B50\u4EE3\u7406\u4F1A\u8BDD\u4E2D\u6253\u5F00",
  subagentFailed: "\u5B50\u4EE3\u7406\u53D1\u8D77\u5931\u8D25",
  statusDrivesCount: "{count} \u4E2A\u9A71\u52A8\u5668",
  statusLoading: "\u52A0\u8F7D\u4E2D\u2026",
  statusSearching: "\u641C\u7D22\u4E2D\u2026",
  statusTasks: "\u540E\u53F0\u4EFB\u52A1",
  statusTasksRunning: "{count} \u4E2A\u540E\u53F0\u4EFB\u52A1",
  statusTermRestore: "\u70B9\u51FB\u8FD8\u539F\u7EC8\u7AEF\u7A97\u53E3",
  // 「插件管理」Activity Bar 视图（宿主内置，对标 VS Code 扩展面板）
  pmTitle: "\u6269\u5C55",
  pmManage: "\u7BA1\u7406",
  pmSort: "\u6392\u5E8F",
  pmSortInstall: "\u6309\u5B89\u88C5\u6B21\u5E8F",
  pmSortName: "\u6309\u540D\u79F0",
  pmSortSource: "\u6309\u6765\u6E90",
  pmEnabledBadge: "\u5DF2\u542F\u7528",
  pmSrcRegistry: "\u6CE8\u518C\u8868",
  pmTabInstalled: "\u5DF2\u5B89\u88C5",
  pmTabBrowse: "\u7F51\u7EDC\u6D4F\u89C8",
  pmAlreadyInstalled: "\u5DF2\u4E0B\u8F7D",
  pmRedownload: "\u91CD\u65B0\u4E0B\u8F7D",
  pmManagePlugin: "\u7BA1\u7406",
  pmBrowseEmpty: "\u6CA1\u6709\u53EF\u4E0B\u8F7D\u7684\u63D2\u4EF6\uFF08\u79BB\u7EBF\u6216\u4ED3\u5E93\u5217\u8868\u4E3A\u7A7A\uFF09",
  pmDownload: "\u4E0B\u8F7D",
  pmDownloading: "\u4E0B\u8F7D\u4E2D\u2026",
  pmDownloaded: "\u5DF2\u5B89\u88C5\u300C{name}\u300D",
  pmDownloadFailed: "\u4E0B\u8F7D {name} \u5931\u8D25\uFF1A{msg}",
  pmRefreshRegistry: "\u5237\u65B0\u63D2\u4EF6\u4ED3\u5E93\u5217\u8868",
  pmSearchPlaceholder: "\u641C\u7D22\u63D2\u4EF6",
  pmImportFromFile: "\u4ECE\u672C\u5730\u6587\u4EF6\u5BFC\u5165\u2026",
  pmImportFromUrl: "\u4ECE URL \u5BFC\u5165\u2026",
  pmEnableAll: "\u5168\u90E8\u542F\u7528",
  pmDisableAll: "\u5168\u90E8\u7981\u7528",
  pmEnable: "\u542F\u7528",
  pmDisable: "\u7981\u7528",
  pmRemove: "\u79FB\u9664\u63D2\u4EF6",
  pmRemoveConfirm: "\u786E\u5B9A\u79FB\u9664\u63D2\u4EF6\u300C{name}\u300D\uFF1F\u5176\u4EE3\u7801\u5FEB\u7167\u4E0E\u7F16\u8F91\u7248\u5C06\u4E00\u5E76\u5220\u9664\u3002",
  pmSeedRemoveConfirm: "\u786E\u5B9A\u79FB\u9664\u5185\u7F6E\u63D2\u4EF6\u300C{name}\u300D\uFF1F\u5C06\u8F6C\u4E3A\u53EF\u79FB\u9664\u7684\u5DF2\u4E0B\u8F7D\u8BB0\u5F55\uFF08\u968F\u65F6\u53EF\u5728\u6CE8\u518C\u8868\u91CD\u65B0\u4E0B\u8F7D\uFF09\u3002",
  pmSeedMigrateFailed: "\u300C{name}\u300D\u6682\u65E0\u6CD5\u4ECE\u6CE8\u518C\u8868\u83B7\u53D6\u5019\u9009\uFF0C\u672A\u80FD\u8FC1\u79FB\u4E3A\u53EF\u79FB\u9664\u8BB0\u5F55\u3002\u8BF7\u70B9\u300C\u68C0\u67E5\u8FDC\u7AEF\u300D\u5237\u65B0\u540E\u91CD\u8BD5\u3002",
  pmMoreActions: "\u66F4\u591A\u64CD\u4F5C",
  pmPull: "\u62C9\u53D6",
  pmPulling: "\u2026",
  pmUrlPlaceholder: "https://example.com/plugin.js",
  srcBuiltin: "\u5185\u7F6E",
  srcFile: "\u672C\u5730",
  srcUrl: "URL",
  pmEmptyWithQuery: "\u6CA1\u6709\u5339\u914D \u201C{q}\u201D \u7684\u63D2\u4EF6<br>\u6362\u4E2A\u5173\u952E\u8BCD\uFF0C\u6216\u7528\u53F3\u4E0A\u300C\xB7\xB7\xB7\u300D\u5BFC\u5165",
  pmEmptyNoPlugins: "\u8FD8\u6CA1\u6709\u63D2\u4EF6<br>\u7528\u53F3\u4E0A\u300C\xB7\xB7\xB7\u300D\u4ECE\u672C\u5730\u6587\u4EF6\u6216 URL \u5BFC\u5165",
  pmImportFailed: "\u5BFC\u5165 {name} \u5931\u8D25\uFF1A{msg}",
  pmUrlImported: "\u5DF2\u4ECE URL \u5BFC\u5165\u5E76\u542F\u7528",
  pmUrlImportFailed: "URL \u5BFC\u5165\u5931\u8D25\uFF1A{msg}",
  pmNeedsProject: "\u5DF2\u542F\u7528 \xB7 \u6253\u5F00\u9879\u76EE\u76EE\u5F55\u540E\u5728\u4FA7\u8FB9\u680F\u663E\u793A",
  vsExtNeedProject: "{n} \u4E2A\u6269\u5C55\u5DF2\u542F\u7528\uFF0C\u6253\u5F00\u9879\u76EE\u76EE\u5F55\u540E\u663E\u793A\u5728\u4FA7\u8FB9\u680F",
  pmCheckEmpty: "\u6587\u4EF6\u5185\u5BB9\u4E3A\u7A7A\u3002",
  pmCheckNotPlugin: "\u8FD9\u4E0D\u662F\u63D2\u4EF6\u6587\u4EF6\uFF1A\u7F3A\u5C11 __ModuleLoader__ \u767B\u8BB0\u6216 activityBar \u6CE8\u518C\u8C03\u7528\u3002",
  pmCheckNeedsHost: "\u6B64\u63D2\u4EF6\u9700\u8981\u5BBF\u4E3B API v{need}\uFF0C\u5F53\u524D\u5DE5\u4F5C\u53F0\u4E3A v{have}\uFF0C\u8BF7\u5347\u7EA7\u540E\u91CD\u8BD5\u3002",
  pmCheckNoContrib: "\u63D2\u4EF6\u52A0\u8F7D\u540E\u672A\u6CE8\u518C\u4EFB\u4F55\u8D21\u732E\u70B9\uFF0C\u5DF2\u56DE\u6EDA\u3002\u8BF7\u68C0\u67E5\u63D2\u4EF6\u662F\u5426\u9002\u914D\u672C\u5DE5\u4F5C\u53F0 API\u3002",
  pmRestoreFailed: "\u6062\u590D\u63D2\u4EF6 {name} \u5931\u8D25\uFF1A{msg}",
  pmEnableFailed: "\u542F\u7528 {name} \u5931\u8D25\uFF1A{msg}",
  pmEnableFailedReason: "{name}\uFF1A{msg}",
  pmReloadRequired: "{n} \u4E2A\u63D2\u4EF6\u5DF2\u542F\u7528\u4F46\u672A\u80FD\u70ED\u52A0\u8F7D\uFF0C\u9700\u8981\u91CD\u65B0\u52A0\u8F7D\u7A97\u53E3\u3002",
  pmReloadNow: "\u91CD\u65B0\u52A0\u8F7D",
  pmReloadDismiss: "\u6682\u4E0D\u5904\u7406",
  pmCodePreview: "\u9884\u89C8\u4EE3\u7801",
  pmCodeView: "\u67E5\u770B\u4EE3\u7801",
  pmCodeEdit: "\u7F16\u8F91\u4EE3\u7801\u2026",
  pmCodeReadonly: "\u53EA\u8BFB",
  pmCodeSave: "\u4FDD\u5B58",
  pmCodeReload: "\u91CD\u65B0\u52A0\u8F7D",
  pmCodeClose: "\u5173\u95ED",
  pmCodeSaved: "\u5DF2\u4FDD\u5B58\u5E76\u91CD\u65B0\u52A0\u8F7D\u300C{name}\u300D",
  pmCodeReloaded: "\u5DF2\u6309\u5F53\u524D\u6E90\u7801\u91CD\u65B0\u52A0\u8F7D\u300C{name}\u300D",
  pmCodeSaveFailed: "\u4FDD\u5B58\u5931\u8D25\uFF1A{msg}",
  pmCodePreviewFailed: "\u62C9\u53D6\u63D2\u4EF6\u6E90\u7801\u5931\u8D25\uFF1A{msg}",
  pmCodeDiscardConfirm: "\u6709\u672A\u4FDD\u5B58\u7684\u4FEE\u6539\uFF0C\u786E\u5B9A\u4E22\u5F03\u5E76\u5173\u95ED\u5417\uFF1F",
  pmCodeRestore: "\u6062\u590D\u539F\u7248",
  pmCodeRestoreConfirm: "\u653E\u5F03\u7F16\u8F91\u7248\u3001\u6062\u590D\u4E3A\u539F\u59CB\u6E90\u7801\u5E76\u91CD\u65B0\u52A0\u8F7D\uFF1F",
  pmCodeRestored: "\u5DF2\u6062\u590D\u300C{name}\u300D\u539F\u7248\u5E76\u91CD\u65B0\u52A0\u8F7D"
};
var en = {
  tabFileWorkbench: "File Workbench",
  tabFileWorkbenchDesc: "Browse, preview, and search local files, then reference them to the session",
  // VS Code editor pane
  tabVSCode: "File Editor",
  tabVSCodeDesc: "Open a code editor in the right sidebar: browse project tree, multi-tab editing, syntax highlight",
  // Tab dropdown menu (extras appended via sidebar.right.tab.menu.item)
  tabMenuOpenInEditor: "Open Workspace in File Editor",
  tabMenuNewEditor: "New Editor Window",
  tabMenuAnotherEditor: "Open Another Editor Window",
  tabMenuFloat: "Open as Floating Window",
  tabMenuDefaultLabel: "Open by default",
  // Accessible label of the guide card's dropdown trigger (same role as the official card's).
  guideMenuAria: "More ways to open",
  vsNoProject: "No project folder selected",
  vsTreeLoading: "Loading project\u2026",
  vsOpenFolder: "Open Folder",
  vsFolderPath: "Enter the absolute path of the project folder",
  vsSave: "Save",
  vsSaved: "Saved",
  vsUnsavedTitle: "Unsaved Changes",
  vsUnsavedMsg: "This file has unsaved changes. Close it anyway?",
  vsCloseManyMsg: "{n} unsaved tab(s). Save all and close?",
  vsTooLarge: "File too large: over the 8MB editing limit. Open it with the system app instead",
  vsScrollLeft: "Scroll tabs left",
  vsScrollRight: "Scroll tabs right",
  vsReadonly: "Read-only",
  vsEmptyHint: "Pick a project folder, then open a file from the left tree to start editing",
  vsLoading: "Loading\u2026",
  vsBrand: "File Editor",
  vsQuickAccess: "Quick Access",
  vsFormat: "Format Content",
  vsFormatOk: "Formatted",
  vsFormatFail: "Format failed: {msg}",
  // VS Code editor pane — file menu / save / encoding & EOL / external changes
  vsMenuFile: "File",
  vsSaveAs: "Save As\u2026",
  vsSaveAsTitle: "Save As",
  vsFileName: "File name",
  vsFileNamePlaceholder: "File name, or paste an absolute path",
  vsFileType: "File type",
  vsFilterAll: "All files",
  vsFilterExt: "{ext} files only",
  vsSaveAsHint: "Browse to a folder and enter a file name; double-click a listed file to overwrite it directly",
  vsSaveAsExists: "A file with this name already exists and will be overwritten",
  vsSaveAsBlockedDirty: "{name} is open in the editor with unsaved changes \u2014 save or close it first",
  vsRecentProjects: "Recent Projects",
  vsRecentClearAll: "Clear All",
  vsRecentClearAllTitle: "Clear All Recent Projects",
  vsRecentClearAllConfirm: "Clear all recent project records? This cannot be undone.",
  vsRecentCleared: "Recent projects cleared",
  vsRecentForgetTitle: "Remove from recent projects",
  vsRecentForgetConfirm: 'Remove "{name}" from recent projects? This cannot be undone.',
  vsRecentForgot: "Removed {name}",
  vsRemoveProject: "Remove from Project",
  vsRemoveProjectTitle: "Remove from Project",
  vsRemoveProjectConfirm: 'Remove "{name}" from projects? This removes it from recent projects and closes its file tree (unsaved changes will be lost).',
  vsProjectRemoved: "Removed from project",
  vsProjectGone: "Project folder no longer exists; removed from recent projects",
  vsGitHistory: "History",
  vsGitExpand: "Show commit history",
  vsGitCollapse: "Collapse commit history",
  vsGitRefresh: "Refresh history",
  vsGitFiles: "Changed files",
  vsGitFileDiff: "Open this change in a new tab",
  vsQuickOpenPlaceholder: "Search files by name (Ctrl+P)",
  vsLeftTabFiles: "Files",
  vsLeftTabSearch: "Search",
  vsLeftTabGit: "Version Control",
  vsGitNoRepo: "This folder is not a Git / SVN repository",
  vsUnfoldEditor: "Show editor",
  vsFoldEditor: "Hide editor",
  vsSearchNeedsProject: "Open a project folder first to use search",
  vsMenuRecent: "Open Recent",
  vsMenuExtensions: "Extensions",
  vsExtRunning: "Running\u2026 (click to open the task panel)",
  vsEmptyTitle: "Open a folder to start editing",
  vsGrepPlaceholder: "Search in files (Enter to run)",
  vsGrepScopePlaceholder: "Search only in folder, e.g. src/components",
  vsGrepScopeTitle: "Search scope: empty = whole project; enter a project subfolder path to narrow the search",
  vsGrepCase: "Match case",
  vsGrepRegex: "Use regex",
  vsGrepSummary: "{n} results in {files} files",
  vsGrepTruncated: "Too many results, truncated",
  vsGrepNoResult: "No results found",
  vsGrepOpenAt: "Open and go to line {ln}",
  vsSearchTitle: "Search",
  vsGrepWholeWord: "Match whole word",
  vsGrepReplacePlaceholder: "Replace",
  vsReplaceAll: "Replace All",
  vsReplacePreserveCase: "Preserve case",
  vsReplaceConfirm: "This will replace {n} occurrences of \u201C{q}\u201D with \u201C{r}\u201D across {files} file(s), rewriting files on disk with no undo. Continue?",
  vsReplaceDone: "Replaced {n} occurrence(s) in {files} file(s)",
  vsReplaceNone: "Nothing to replace",
  vsReplaceRemoteUnsupported: "Cross-file replace is not supported on remote (ssh) roots",
  vsFilesToInclude: "files to include",
  vsFilesToIncludePlaceholder: "files to search, e.g. *.ts, src/**/README.md",
  vsFilesToIncludeTitle: "Only search/replace in files matching these globs (comma-separated, relative to project root). Empty = all.",
  vsFilesToExclude: "files to exclude",
  vsFilesToExcludePlaceholder: "files or folders to skip, e.g. **/node_modules, !*.min.js",
  vsFilesToExcludeTitle: "Skip files/folders matching these globs (comma-separated, relative to project root).",
  vsClearAllResults: "Clear All Results",
  vsRefreshResults: "Search Again",
  vsToggleReplace: "Show / Hide Replace",
  vsViewModeList: "List",
  vsViewModeTree: "Tree",
  vsViewModeSwitchTitle: "Switch between list and tree view",
  vsSearchIndexing: "Indexing\u2026",
  vsSearchNoResult: "No matching files",
  vsSearchTruncated: "Lots of matches \u2014 showing the first few, refine your keywords",
  vsSaveAll: "Save All",
  vsSavedAs: "Saved as {path}",
  vsOverwriteMsg: "{path} already exists. Overwrite it?",
  vsNoDirty: "No changes to save",
  vsAllSaved: "Saved {n} file(s)",
  vsConflictTitle: "File Changed on Disk",
  vsConflictMsg: "{name} has changed on disk since it was opened. Overwrite it with your version?",
  vsConflictMsgReload: "Discard your local changes to {name} and reload from disk?",
  vsConflictBadge: "Changed on disk",
  vsReloadedExternal: "{name} changed on disk and has been reloaded",
  vsSwitchLoseMsg: "{n} file(s) have unsaved changes. Switching projects will discard them. Continue?",
  vsReopenLoseMsg: "Reopening with another encoding will discard unsaved changes. Continue?",
  vsEncodingSwitched: "Reopened as {enc}",
  vsBinaryHint: "This is a binary file and cannot be edited as text",
  vsNewWindow: "New Editor Window",
  vsFloatWindow: "Float as Separate Window",
  vsNewTerminal: "New Terminal",
  vsReplacedOldest: "Editor window limit (8) reached: the earliest window was replaced",
  vsNewWindowLimit: "Could not open a new editor window. Please try again.",
  vsOpenExternal: "Open with system app",
  vsNoOpenFile: "No open files",
  vsTabClose: "Close",
  vsTabCloseSave: "Save and Close",
  vsTabCloseOthers: "Close Others",
  vsTabCloseRight: "Close Tabs to the Right",
  vsTabCloseAll: "Close All",
  terminalRestore: "Restore terminal",
  vsNewFile: "New File",
  vsNewFolder: "New Folder",
  vsNewFileName: "File name",
  vsNewFolderName: "Folder name",
  vsRename: "Rename",
  vsRenameName: "New name",
  vsDelete: "Delete",
  vsDeleteConfirm: "Delete",
  vsRefresh: "Refresh",
  vsCollapseAll: "Collapse All",
  vsExpandAll: "Expand All",
  vsExpandAllLimited: "Many folders \u2014 expanded the first {n} (expanding further would issue too many requests)",
  vsPickFolderTitle: "Pick Project Folder",
  vsComputer: "My Computer",
  vsUp: "Up",
  vsEmptyDir: "This folder is empty",
  vsPickInput: "Use this path",
  vsCancel: "Cancel",
  vsPickConfirm: "Select This Folder",
  vsNewFolderBtn: "New Folder",
  vsPickEnterHint: "Double-click a folder to enter; single click selects it; \u201CSelect This Folder\u201D picks the highlighted folder (or the current one)",
  menuCopyRelPath: "Copy relative path",
  menuCopyAbsPath: "Copy absolute path",
  vsAddToSession: "Add to Session",
  vsAddToSessionOk: "Added to the session input",
  vsAddToSessionFail: "Open a conversation input first",
  goUp: "Go Up",
  goBack: "Back",
  goForward: "Forward",
  refreshList: "Refresh resource list",
  noFolder: "No folder open",
  goSessionDir: "Go to current session folder",
  closeTab: "Close",
  clearSearch: "Clear search",
  cancel: "Cancel",
  confirmOk: "OK",
  deleteTitle: "Confirm delete",
  searchScopeIn: "In scope: ",
  myComputer: "My Computer",
  navHome: "Home",
  navGallery: "Gallery",
  navThisPc: "This PC",
  navQuickAccess: "Quick access",
  externalInjection: "External injections",
  driveLabel: "Local Disk ({drive}:)",
  // Message toast (bottom-right overlay)
  toastClose: "Close notification",
  // This PC → Devices and drives
  thisPcDevices: "Devices and drives",
  driveCapacity: "{free} free of {total}",
  driveTotal: "Total size",
  driveFree: "Free space",
  driveFs: "File system",
  driveTypeFixed: "Local Disk",
  driveTypeRemovable: "Removable Disk",
  emptyDrives: "(No drives detected)",
  navExpand: "Expand",
  navCollapse: "Collapse",
  favoritePin: "Pinned to Quick access",
  desktopEntry: "Desktop",
  downloadEntry: "Downloads",
  documentEntry: "Documents",
  pictureEntry: "Pictures",
  musicEntry: "Music",
  videoEntry: "Videos",
  workspaceEntry: "Workspace",
  emptyDir: "(empty)",
  colName: "Name",
  colSize: "Size",
  colType: "Type",
  colModified: "Date modified",
  typeFolder: "Folder",
  typeFile: "File",
  renameEntry: "Rename:",
  confirmDelete: 'Delete "{name}"?',
  brokenLink: "Broken symlink",
  save: "Save",
  // Text editor (.txt edit / save)
  menuEdit: "Edit",
  txtEditorTitle: "Edit Text \xB7 {name}",
  txtLoading: "Loading\u2026",
  txtEditorSub: "Text editor",
  txtUnsaved: "Unsaved changes",
  txtReadError: "Failed to read: {msg}",
  txtDirty: "Unsaved",
  txtReadonly: "Read-only (outside workspace)",
  txtPlaceholder: "Type text here\u2026",
  txtChars: "chars",
  txtUnsavedTitle: "Unsaved changes",
  txtUnsavedMsg: "This file has unsaved changes. Close anyway?",
  txtSaved: "Saved",
  // Markdown rendering (mermaid / KaTeX)
  download: "Download",
  menuDownload: "Download",
  menuOpenTerminal: "Open in Terminal",
  menuSubagent: "Process with Sub-agent",
  menuNewSubagent: "New Sub-agent Chat",
  subagentAsk: "What should the sub-agent do?",
  subagentAskPlaceholder: "Describe the task (optional; continue in the sub-agent session)",
  subagentSpawned: "Opened in the official sub-agent session",
  subagentFailed: "Failed to start sub-agent",
  statusDrivesCount: "{count} drive(s)",
  statusLoading: "Loading\u2026",
  statusSearching: "Searching\u2026",
  statusTasks: "Background tasks",
  statusTasksRunning: "{count} running task(s)",
  statusTermRestore: "Click to restore the terminal window",
  // Editable xlsx grid
  statusItemsCount: "{count} items",
  searchTitle: "Search Files & Content",
  searchPlaceholder: "Enter keywords\u2026",
  search: "Search",
  searching: "Searching\u2026",
  searchCase: "Match case",
  searchRegex: "Regular expression match",
  searchIdle: "Type keywords in the top search box to match file names and content live.",
  resultsCount: "{count} result(s)",
  resultsSuffixTruncated: " (truncated)",
  hitTitle: "Right-click to locate in explorer \\ left-click to open",
  matchContent: "content",
  // Cross-file batch replace
  searchReplaceAll: "Replace All",
  searchReplaceTitle: "Confirm batch replace",
  searchReplaceConfirm: "Replace {count} match(es) across {files} file(s)? This cannot be undone.",
  searchReplaceBusy: "Replacing\u2026",
  searchReplaceDone: "Replaced in {files} file(s) ({count} match(es))",
  openFolderFirst: "Open a folder first",
  dirCreated: "Directory created",
  fileCreated: "File created",
  renamed: "Renamed",
  deleted: "Deleted",
  workspaceOutside: "Operation denied: only allowed for files/folders inside the workspace",
  errForbidden: "Forbidden: no permission or denied (403)",
  errNotFound: "File or directory not found (404)",
  errNoRoot: "No workspace root set \u2014 open a folder first (409)",
  errTooLarge: "Payload too large, exceeds allowed limit (413)",
  errServer: "Server error, please retry later (500)",
  errNetwork: "Network request failed, check your host connection",
  menuOpen: "Open",
  menuOpenExternal: "Open with default app",
  menuOpenInEditor: "Open in File Editor",
  menuCut: "Cut",
  menuCopy: "Copy",
  menuRename: "Rename",
  menuDelete: "Delete",
  menuCopyPath: "Copy full path",
  menuProperties: "Properties",
  menuCutDone: "Cut to clipboard",
  menuCopyDone: "Copied to clipboard",
  menuOpened: "Opened with system default app",
  menuPathCopied: "Path copied",
  menuPathCopyFail: "Failed to copy path",
  menuRefresh: "Refresh",
  menuView: "View",
  menuSort: "Sort by",
  expShowNav: "Show navigation",
  menuPaste: "Paste",
  menuUpload: "Upload Files",
  uploaded: "Uploaded {count} file(s)",
  uploadFailed: "{count} file(s) failed to upload",
  menuNew: "New",
  menuNewFolder: "Folder",
  menuNewFile: "Text Document",
  viewHuge: "Extra large icons",
  sshHosts: "SSH Hosts",
  sshAddHost: "Add Host",
  sshCancel: "Cancel",
  sshName: "Display name",
  sshAddr: "Address (user @ host : port)",
  sshUser: "Username",
  sshHostAddr: "Host address",
  sshAuth: "Auth method",
  sshAuthPassword: "Password auth",
  sshAuthKey: "Private key auth",
  sshPassword: "SSH password",
  sshKeyPath: "Private key path (supports ~)",
  sshSaveAdd: "Add",
  sshTest: "Test",
  sshTestConn: "Test",
  sshDelete: "Delete",
  sshDeleteConfirm: "Click again to confirm",
  sshTestOk: "SSH connection OK",
  sshTestFail: "SSH connection failed",
  sshRequired: "Host address and username are required",
  sshAddSuccess: "Host added",
  sshNewHost: "Add SSH Host",
  sshEdit: "Edit",
  sshEditTitle: "Edit SSH Host",
  sshHostCaption: "Connect a remote server for file browsing and terminal",
  sshUpdateSuccess: "Host updated",
  sshSaveEdit: "Save Changes",
  sshKeepSecret: "(leave blank to keep existing password)",
  sshNoHosts: "No hosts yet \u2014 click \u201CAdd Host\u201D to begin",
  // Account manager (Git / SVN credentials; one dialog shared by both panels)
  accTitle: "Accounts",
  accCaption: "Manage Git / SVN credentials \u2014 injected automatically when running commands",
  accListTitle: "Saved accounts",
  accAdd: "Add account",
  accNewTitle: "Add account",
  accEditTitle: "Edit account",
  accEdit: "Edit",
  accKind: "Type",
  accKindGit: "Git",
  accKindSvn: "SVN",
  accName: "Display name",
  accHost: "Host",
  accHostPlaceholder: "e.g. github.com or 113.57.110.41:804",
  accUrl: "Repository URL (optional)",
  accUrlPlaceholder: "https://github.com/owner/repo.git",
  accUrlHint: "Leave blank to apply to every repository on this host; fill it in to match by URL prefix (multiple accounts per host). Test & Apply need it.",
  accUsername: "Username",
  accSecret: "Password / access token",
  accSecretKind: "Credential type",
  accSecretPassword: "Password",
  accSecretToken: "Access token",
  accKeepSecret: "(leave blank to keep the saved secret)",
  accNote: "Note",
  accSave: "Save",
  accCancel: "Cancel",
  accDelete: "Delete",
  accDeleteConfirm: "Click again to confirm",
  accTest: "Test",
  accTestOk: "Connection OK",
  accTestFail: "Connection failed",
  accApply: "Apply to system",
  accApplyOk: "Applied to system",
  accApplyHint: "Write the credential into the system store so the CLI and other GUI tools are prompted no more.",
  accSaved: "Account saved",
  accDeleted: "Account deleted",
  accRequired: "Host and username are required",
  accSecretRequired: "Password or access token is required",
  accEmpty: "No accounts yet \u2014 click \u201CAdd account\u201D to begin",
  accHasSecret: "Secret saved",
  accNoSecret: "No secret saved",
  accAllRepos: "all repositories on this host",
  accEffective: "This repo will use",
  accEffectiveNone: "No matching account for this repo (falls back to system credentials / svn cache)",
  accMatchHint: "Matched by host or repository URL prefix; system credentials are used when nothing matches.",
  accCopyIdent: "Copy account id",
  accUseCurrent: "Fill from current repo",
  accBack: "Back to list",
  accPick: "Pick an account on the left, or click \u201CAdd account\u201D",
  accTip: "Credentials live only in this plugin's local config and are never sent out; the secret is never echoed \u2014 leave it blank to keep the current one.",
  sshStatusOnline: "Connected",
  sshStatusOffline: "Disconnected",
  sshStatusChecking: "Checking\u2026",
  sshStatusUnknown: "Not checked",
  remoteNoExternal: "Remote files cannot be opened with local programs",
  remoteNoArchive: "Compress / extract is not supported on remote directories yet",
  remoteNoTerminal: "Remote host config not found \u2014 started the terminal in a local directory (add the SSH host in Settings first)",
  remoteCachedHint: "Remote file downloaded to a local temp file and opened (edits are not written back)",
  sshNavGroup: "SSH Remote",
  sshEmpty: "No hosts yet \u2014 right-click here to add one, or use \u201CNew \u25BE\u201D",
  viewLarge: "Large icons",
  viewMedium: "Medium icons",
  viewSmall: "Small icons",
  viewList: "List",
  viewDetails: "Details",
  viewContent: "Content",
  viewTiles: "Tiles",
  showExtensions: "File name extensions",
  cmdPreview: "Preview",
  sortName: "Name",
  sortModified: "Date modified",
  sortType: "Type",
  sortSize: "Size",
  moved: "Moved",
  copied: "Copied",
  createdFolder: "Folder created",
  createdFile: "File created",
  newFolderName: "New Folder",
  newFileName: "New Text Document",
  propName: "Name",
  propPath: "Path",
  propKind: "Type",
  propSize: "Size",
  propModified: "Date modified",
  settings: "Settings",
  settingsSubtitle: "Personalize the workbench look & behavior",
  retry: "Retry",
  taskSrcMissing: "Source no longer exists (it may have been moved or deleted); list refreshed: {name}",
  menuMore: "More",
  settingsGroupFiles: "Files",
  settingsGroupAppearance: "Appearance",
  autoSave: "Auto save (write 1s after edits pause)",
  vsFindPlaceholder: "Find",
  vsReplacePlaceholder: "Replace with",
  vsFindNext: "Next (Enter)",
  vsFindPrev: "Previous (Shift+Enter)",
  vsFindReplace: "Replace (Enter)",
  vsFindReplaceAll: "Replace All",
  vsFindToggleReplace: "Toggle replace",
  vsFindClose: "Close (Esc)",
  vsFindNoMatch: "No results",
  vsFindWord: "Whole word",
  vsMenuLocalDiff: "View Local Changes",
  vsLocalDiffTitle: "Unsaved Changes",
  vsLocalDiffTooBig: "Changes too large to diff",
  vsMultiCursorHint: "Tip: Alt+Click adds more cursors",
  vsActHide: 'Hide "{name}"',
  vsActExtViews: "Extension Views",
  vsActBarBottom: "Move Activity Bar to Bottom",
  vsActBarTop: "Move Activity Bar to Top",
  vsSideRight: "Move Side Bar to Right",
  vsSideLeft: "Move Side Bar to Left",
  vsMinimap: "Editor Thumbnail",
  vsCloseSave: "Save and Close",
  vsCloseDiscard: "Close without Saving",
  vsCloseSaveAll: "Save All and Close",
  vsCloseDiscardAll: "Close All without Saving",
  showHidden: "Show hidden files",
  allowOutsideRoot: "Operate on files outside the workspace (root toggle)",
  defaultView: "Default view",
  themeMode: "Theme",
  themeAuto: "Follow system",
  themeDark: "Dark",
  themeLight: "Light",
  accentColor: "Accent color",
  accentReset: "Reset",
  fontFamily: "Font",
  fontDefault: "Default",
  fontOptionYahei: "Microsoft YaHei",
  fontOptionConsolas: "Consolas (monospace)",
  fontOptionCourier: "Courier New (monospace)",
  fontOptionGeorgia: "Georgia (serif)",
  fontSize: "Font size",
  fontSizeSm: "Small",
  fontSizeMd: "Medium",
  fontSizeLg: "Large",
  fontSizeXl: "Extra large",
  // Keyboard shortcuts help ("?" key)
  shortcutHelp: "Keyboard Shortcuts",
  shortcutHint: "Press ? anytime to show, Esc to close",
  shortcutGlobal: "Global",
  shortcutFileList: "File List",
  shGlobalHelp: "Show shortcut help",
  shListSelectAll: "Select all",
  shListCopy: "Copy",
  shListCut: "Cut",
  shListPaste: "Paste",
  shListFilter: "Focus filter box",
  shListNewFolder: "New folder",
  shListDelete: "Delete (with confirm)",
  shListRename: "Rename",
  shListRefresh: "Refresh",
  shListOpen: "Open file / enter folder",
  shListMove: "Move selection",
  shListUp: "Go to parent folder",
  shListBack: "Browse back",
  shListForward: "Browse forward",
  undo: "Undo",
  // Editor find / replace
  findReplacePlaceholder: "Replace with\u2026",
  favorites: "Favorites",
  favoriteAdd: "Favorites",
  favoriteRemove: "Remove from favorites",
  favoriteAdded: "Added to favorites",
  favoriteRemoved: "Removed from favorites",
  emptyFavorites: "(no favorites)",
  menuCompress: "Compress to .zip",
  compressed: "Compressed",
  menuExtract: "Extract to current folder",
  extracted: "Extracted {count} file(s)",
  extractFailed: "Extraction failed",
  selectedCount: "{count} item(s) selected",
  menuMultiDelete: "Delete selected ({count})",
  menuMultiCut: "Cut selected",
  menuMultiCopy: "Copy selected",
  menuMultiCompress: "Compress selected",
  filterPlaceholder: "Filter this folder\u2026",
  filterEmpty: "(no match)",
  taskFabTitle: "Background tasks",
  taskPanelTitle: "Background tasks",
  taskRunning: "Running",
  taskHistory: "History",
  taskClearFinished: "Clear finished",
  taskClearAll: "Clear all",
  taskEmpty: "No tasks",
  taskViewLog: "View log",
  taskLogTitle: "Task log",
  taskClose: "Close",
  taskFieldTarget: "Target",
  taskStatusRunning: "Running",
  taskStatusDone: "Done",
  taskStatusError: "Failed",
  taskFieldFile: "File",
  taskStartTime: "Start",
  taskEndTime: "End",
  taskTotalSpent: "Total time",
  taskStepSpent: "Spent",
  taskRunningLive: "Running",
  taskFieldType: "Type",
  taskMetaFiles: "{count} files \xB7 {size}",
  taskArchive: "Archive",
  taskArchiveOpen: "View Archives",
  taskArchiveTitle: "Task Archives",
  taskArchiveNone: "No archives",
  taskArchiveRecords: "{count} records",
  taskUploading: "Upload file",
  taskCompressing: "Compress",
  taskExtracting: "Extract",
  taskCopying: "Copy",
  taskMoving: "Move",
  taskDeleting: "Delete",
  taskRenaming: "Rename",
  // Session activity (read-only panel)
  gitMenu: "Git",
  gitAdd: "Stage (git add)",
  gitCommit: "Commit (git commit)",
  gitCommitTitle: "Git commit",
  gitCommitPlaceholder: "Enter commit message\u2026",
  gitCommitted: "Committed",
  gitAdded: "Staged",
  gitDiscard: "Discard changes",
  gitDiscardTitle: "Confirm discard",
  gitDiscardMsg: 'Discard worktree changes of "{name}" (git checkout --)?',
  gitDiscarded: "Discarded",
  gitDiff: "View changes",
  gitDiffTitle: "Git changes",
  gitDiffEmpty: "(no changes available)",
  gitDiffClose: "Close",
  gitBadgeUntracked: "Untracked new file",
  gitBadgeAdded: "Newly staged",
  gitBadgeModified: "Modified",
  gitBadgeDeleted: "Deleted",
  gitNotRepo: "Not in a git repository",
  gitNoChanges: "Nothing staged, nothing to commit",
  gitLoading: "Loading\u2026",
  gitCommitFiles: "Committing {n} file(s):",
  gitCommitConfirm: "Commit",
  gitConfig: "Configure identity",
  gitConfigTitle: "Git identity",
  gitConfigName: "Username (user.name)",
  gitConfigNamePlaceholder: "e.g. yourname",
  gitConfigEmail: "Email (user.email)",
  gitConfigEmailPlaceholder: "e.g. you@example.com",
  gitConfigSave: "Save",
  gitConfigSaved: "Git global identity saved",
  gitPanel: "Open Git Panel",
  gitIgnore: "Ignore (add to .gitignore)",
  gitIgnored: "Ignored",
  // Git panel (status / branches / stash / CLI)
  gitPanelTitle: "Git Manager",
  gitFetch: "Fetch",
  gitPull: "Pull",
  gitPush: "Push",
  gitLoadMore: "Load more",
  gitDiffTruncated: "Diff too large \u2014 showing the first 5000 lines (open in the editor for the full content)",
  gitCopyName: "Copy name",
  gitCopyUrl: "Copy URL",
  gitCopyMsg: "Copy message",
  gitCloneHere: "Clone repository\u2026",
  gitStatusColon: "Branch: {branch}",
  gitLocalRepo: "Local repo: ",
  gitTabStatus: "Changes",
  gitTabLog: "Log",
  gitTabBranch: "Branches",
  gitTabStash: "Stash",
  gitTabCli: "Command",
  gitClean: "Working tree clean, nothing to commit",
  gitAddShort: "Stage",
  gitUnstage: "Unstage",
  gitUnstaged: "Unstaged",
  gitStageAll: "Stage All",
  gitGroupStaged: "Staged changes",
  gitGroupUnstaged: "Changes",
  gitGroupUntracked: "Untracked",
  gitLogEmpty: "(no commits yet)",
  gitBranchNew: "New branch name",
  gitCheckout: "Checkout",
  gitDelete: "Delete",
  gitBranchCreated: "Branch {name} created and checked out",
  gitBranchDeleteMsg: "Delete branch {name}?",
  gitStashPlaceholder: "Stash message (optional)",
  gitStashCreate: "Create Stash",
  gitStashEmpty: "(no stashes)",
  gitStashApply: "Apply",
  gitStashPop: "Pop",
  gitStashDrop: "Drop",
  gitStashClear: "Clear Stash",
  gitStashCreated: "Stash created",
  gitStashApplied: "Stash applied",
  gitStashPopped: "Stash popped",
  gitStashDropped: "Stash dropped",
  gitStashCleared: "Stash cleared",
  gitStashDropMsg: "Drop stash {ref}?",
  gitStashClearMsg: "Clear all stashes? This cannot be undone.",
  gitCliPlaceholder: "Enter a git subcommand, e.g. status / log --oneline -5",
  // —— Git panel rebuild (TortoiseGit-style: rail + detail) ——
  gitRailChanges: "Changes",
  gitRailHistory: "History",
  gitRailBranches: "Branches",
  gitRailTags: "Tags",
  gitRailRemotes: "Remotes",
  gitRailStash: "Stashes",
  gitRailCli: "Console",
  gitHeadDetached: "Detached HEAD",
  gitNoUpstream: "No upstream branch",
  gitAheadBehind: "Ahead {ahead} \xB7 Behind {behind}",
  gitSelectFile: "Select a file on the left to view changes",
  gitDiffUntrackedHint: "Untracked file: stage it to see the diff against HEAD",
  gitCommitMsgPlaceholder: "Commit message\u2026",
  gitFileHistory: "File history",
  gitBlame: "Blame",
  gitBlameAuthor: "Author",
  gitBlameDate: "Date",
  gitBlameLine: "Line",
  gitBlameEmpty: "(blame unavailable)",
  gitFileHistoryEmpty: "(no history for this file)",
  gitBack: "Back",
  gitHistoryAll: "All branches",
  gitHistoryCurrent: "Current branch",
  gitSelectCommit: "Select a commit on the left to see details",
  gitCommitDetail: "Commit details",
  gitCommitHash: "Commit",
  gitCommitAuthor: "Author",
  gitCommitDate: "Date",
  gitCommitParents: "Parents",
  gitCommitRefs: "Refs",
  gitCommitChangedFiles: "Changed files ({n})",
  gitCommitNoFiles: "(no file changes)",
  gitCopyHash: "Copy hash",
  gitCopyPath: "Copy path",
  gitCopied: "Copied to clipboard",
  gitReset: "Reset to this commit",
  gitResetSoft: "Soft (keep changes staged)",
  gitResetMixed: "Mixed (keep changes in worktree)",
  gitResetHard: "Hard (discard changes)",
  gitResetHardMsg: "Hard reset discards all worktree and staged changes. Continue?",
  gitResetDone: "Reset to {hash}",
  gitRevert: "Revert this commit",
  gitRevertDone: "Reverted {hash}",
  gitCherryPick: "Cherry-pick onto current",
  gitCherryPicked: "Cherry-picked {hash}",
  gitCheckoutCommit: "Checkout this commit",
  gitCheckoutCommitMsg: "This enters detached HEAD. Checkout {hash}?",
  gitBranchFrom: "New branch at this commit",
  gitBranchFromTitle: "New branch at this commit",
  gitBranchFromPlaceholder: "New branch name",
  gitBranchRename: "Rename",
  gitBranchRenameTitle: "Rename current branch",
  gitBranchRenamePlaceholder: "New branch name",
  gitBranchRenamed: "Renamed to {name}",
  gitMergeIntoCurrent: "Merge into current",
  gitMergeDone: "Merged {name}",
  gitPushBranch: "Push",
  gitPushed: "Pushed {name}",
  gitBranchCurrent: "current",
  gitBranchRemoteGroup: "Remote branches",
  gitBranchLocalGroup: "Local branches",
  gitBranchCreateAndSwitch: "Create & switch",
  gitTagNew: "New tag",
  gitTagNamePlaceholder: "Tag name, e.g. v1.0.0",
  gitTagTargetPlaceholder: "Target commit (empty = HEAD)",
  gitTagMessagePlaceholder: "Message (annotated tag when filled)",
  gitTagCreate: "Create",
  gitTagEmpty: "(no tags)",
  gitTagAnnotated: "annotated",
  gitView: "View",
  gitTagCreated: "Tag {name} created",
  gitTagDeleteMsg: "Delete tag {name}?",
  gitTagDeleted: "Deleted {name}",
  gitTagPushed: "Tag {name} pushed",
  gitTagFetchAll: "Fetch tags from remote",
  gitTagFetchAllDone: "Fetched tags from remote",
  gitTagRemoteOnly: "remote",
  gitTagPull: "Fetch",
  gitTagPulled: "Fetched tag {name}",
  gitTagNoRemote: "No remote repo; cannot fetch or publish tags",
  gitCommitViewTitle: "Commit diff",
  gitCommitOpenDiff: "View diff of {path}",
  gitReleaseBtn: "Publish release",
  gitReleaseTitle: "Publish release (annotated tag + push to remote)",
  gitReleaseName: "Tag name",
  gitReleaseTarget: "Based on commit (empty = HEAD)",
  gitReleaseMsg: "Release notes (required)",
  gitReleasePublish: "Create & publish",
  gitReleaseRequireMsg: "Release notes are required",
  gitReleased: "Published {name} to remote",
  gitReleaseGhSkip: "GitHub Release not created: {reason}",
  gitRefresh: "Refresh",
  gitTabTags: "Tags",
  gitTabReleases: "Releases",
  gitReleaseChooseTag: "Choose an existing tag",
  gitReleaseNotesPlaceholder: "Release notes (shown on the Release page)",
  gitReleaseCreateForTag: "Create Release",
  gitReleaseCreated: "Release created: {url}",
  gitReleaseLoadSkip: "Releases unavailable: {reason}",
  gitReleaseEmpty: "No releases yet",
  gitReleaseOpen: "Open",
  gitRemoteNamePlaceholder: "Name, e.g. origin",
  gitRemoteUrlPlaceholder: "URL, e.g. https://github.com/user/repo.git",
  gitRemoteAdd: "Add remote",
  gitRemoteEmpty: "(no remotes)",
  gitRemoteAdded: "Remote {name} added",
  gitRemoteRemoveMsg: "Remove remote {name}?",
  gitRemoteRemoved: "Remote {name} removed",
  gitRemoteSetUrl: "Set URL",
  gitRemoteUrlTitle: "Set remote URL",
  gitRemoteUrlSaved: "Remote URL updated",
  gitStashView: "View contents",
  gitStashNew: "Create stash",
  gitStashNone: "(worktree clean, nothing to stash)",
  gitOpRunning: "Running\u2026",
  gitOpFailed: "Operation failed",
  // —— SVN manager (svn CLI) ——
  svnMenu: "SVN",
  svnPanel: "Open SVN Manager",
  svnPanelTitle: "SVN Manager",
  svnRepo: "Working copy: ",
  svnUpdate: "Update",
  svnCommitBtn: "Commit",
  svnAdd: "Add",
  svnAdded: "Added to version control",
  svnIgnore: "Ignore (svn:ignore)",
  svnRevert: "Revert",
  svnCleanup: "Clean up",
  svnResolve: "Resolve",
  svnDiff: "Diff",
  svnBlame: "Blame",
  svnCheckout: "Checkout",
  svnFailed: "SVN command failed",
  svnRailChanges: "Changes",
  svnRailLog: "Commit log",
  svnNoUrl: "Repository URL unavailable",
  svnRunning: "Running\u2026",
  svnRefresh: "Refresh",
  svnLoading: "Loading\u2026",
  svnSelectAll: "Select all",
  svnModifiedCount: "Local changes ({n})",
  svnNoChanges: "No local changes",
  svnCommitPlaceholder: "Enter commit message\u2026",
  svnCommitSelected: "Will commit {n} selected file(s)",
  svnCommitAll: "Will commit all local changes",
  svnOutput: "Command output",
  svnNoOutput: "(no output)",
  svnNoCli: "svn CLI not found; please install Subversion",
  svnDone: "SVN command finished",
  // "Update" summary: placed at the top of the command output.
  svnUpdateSummaryFrom: "Update complete: r{from} \u2192 r{to}, {n} item(s) changed",
  svnUpdateSummary: "Update complete: {n} item(s) changed, now at r{to}",
  svnAlreadyLatest: "Already up to date at r{rev}; nothing to update",
  svnLogEmpty: "No log yet",
  svnLogToggle: "Click to expand / collapse this commit",
  svnLogNoPaths: "No changed files recorded for this commit",
  svnLogOpenDiff: "Show this file's diff in this commit",
  svnDiffTitle: "Diff \xB7 ",
  svnBlameTitle: "Blame \xB7 ",
  svnCheckoutUrlPlaceholder: "Repository URL (e.g. https://svn.example.com/svn/repo)",
  svnCheckoutTargetPlaceholder: "Checkout into local directory",
  // Clone / checkout dialog
  repoCloneTitle: "Clone / Checkout Repository",
  repoCloneKindGit: "Git",
  repoCloneKindSvn: "SVN",
  repoCloneTitleGit: "Clone Git Repository",
  repoCloneTitleSvn: "Checkout SVN Repository",
  repoCloneCaptionGit: "Clone a full copy of a remote repository to local",
  repoCloneCaptionSvn: "Check out a specific revision from an SVN server",
  repoCloneTargetGit: "Will clone into",
  repoCloneTargetSvn: "Will check out into",
  repoCloneUrl: "Repository URL",
  repoCloneUrlGitPlaceholder: "Repository URL (e.g. https://github.com/owner/repo.git)",
  repoCloneDir: "Target directory",
  repoCloneDirPlaceholder: "Parent directory to clone into",
  repoCloneBrowse: "Browse\u2026",
  repoCloneName: "Subdirectory name",
  repoCloneNamePlaceholder: "Leave empty to infer from URL",
  repoCloneShallow: "Shallow clone (latest commit only)",
  repoCloneShallowHint: "Faster and smaller, but without history",
  repoCloneRevision: "Revision",
  repoCloneRevisionPlaceholder: "Leave empty for latest (HEAD)",
  repoCloneAccount: "Account",
  repoCloneAccountAuto: "Auto (match by URL)",
  repoCloneAccountNew: "New account\u2026",
  repoCloneTargetEmpty: "Please fill in the repository URL and target directory",
  repoCloneRunningGit: "Cloning Git repository\u2026",
  repoCloneRunningSvn: "Checking out SVN repository\u2026",
  repoCloneElapsed: "Elapsed {s}s",
  repoCloneKeepOpen: "Keep this window open; you will be notified when done.",
  repoCloneActionGit: "Clone",
  repoCloneActionSvn: "Checkout",
  repoCloneDoneGit: "Repository cloned: {name}",
  repoCloneDoneSvn: "Repository checked out: {name}",
  // Entry menu items (New ▾ / Recent)
  menuCloneGit: "Clone Git Repository\u2026",
  menuCloneSvn: "Checkout SVN Repository\u2026",
  svnNotRepoTip: "Not an SVN working copy. Fill in the form above to check out a repository.",
  svnCheckedOut: "Repository checked out",
  svnStAdded: "Added",
  svnStModified: "Modified",
  svnStDeleted: "Deleted",
  svnStReplaced: "Replaced",
  svnStConflicted: "Conflicted",
  svnStMissing: "Missing",
  svnStObstructed: "Obstructed",
  svnStUnversioned: "Unversioned",
  svnStIgnored: "Ignored",
  svnStLocked: "Locked",
  saveConfig: "Save",
  // Windows Recycle Bin
  recycleBin: "Recycle Bin",
  recycleRestore: "Restore",
  recycleDelete: "Delete permanently",
  recycleEmpty: "Empty Recycle Bin",
  recycleEmptyConfirm: "Empty the Recycle Bin? This cannot be undone.",
  recycleDeleteConfirm: 'Permanently delete "{name}"? This cannot be undone.',
  recycleDeleteConfirmMulti: "Permanently delete the {count} selected items? This cannot be undone.",
  recycleEmptying: "Emptying Recycle Bin\u2026",
  recycleEmptyProgress: "Emptying Recycle Bin: {count} item(s) left",
  recycleEmptyDone: "Recycle Bin emptied",
  recycleEmptyList: "The Recycle Bin is empty",
  recycleRestored: "Restored to original location",
  recycledDeleted: "Permanently deleted",
  // Terminal (ConPTY interactive terminal floating window)
  terminal: "Terminal",
  terminalTitle: "Terminal",
  terminalMinimize: "Minimize to task bar",
  terminalCloseTitle: "Close terminal",
  terminalClose: "Close",
  terminalNew: "New terminal",
  terminalShellSwitch: "Switch default shell (cmd / powershell)",
  terminalAdmin: "Administrator",
  terminalAdminNormal: "Standard",
  terminalAdminOn: "Running as administrator \u2014 commands here have admin rights",
  terminalAdminOff: "Standard privileges \u2014 commands here cannot change system-level settings",
  terminalAdminHint: 'Launch dsh web as administrator (right-click the launcher \u2192 "Run as administrator") so every terminal in the panel gets admin rights \u2014 the shell inherits the host process token.',
  terminalClear: "Clear screen",
  terminalResizeTitle: "Drag to resize terminal",
  terminalDockDragTitle: "Click to expand \xB7 drag to move \xB7 right-click for menu",
  terminalDockSessions: "Minimized terminals",
  terminalDockCloseAll: "Close all",
  terminalTab: "{n}",
  scrollLeft: "Scroll left",
  scrollRight: "Scroll right",
  termFontSmaller: "Smaller font",
  termFontLarger: "Larger font",
  termInputFailed: "Terminal input failed: {msg}",
  termSshBadge: "This terminal is logged in to a remote SSH host",
  termSshReconnect: "Reconnect",
  termSshReconnectTitle: "Log in to the remote host again (auto, using the saved password / key)",
  termSearchPlaceholder: "Search terminal output\u2026",
  termSearchCase: "Match case",
  termSearchPrev: "Previous",
  termSearchNext: "Next",
  termSearchClose: "Close search",
  termCopyHint: "Ctrl+C copy \xB7 Ctrl+V paste \xB7 Ctrl+F search",
  // Plugin Manager activity-bar view (host built-in, mirrors the VS Code Extensions panel)
  pmTitle: "Extensions",
  pmManage: "Manage",
  pmSort: "Sort",
  pmSortInstall: "Sort by Install Order",
  pmSortName: "Sort by Name",
  pmSortSource: "Sort by Source",
  pmEnabledBadge: "Enabled",
  pmSrcRegistry: "Registry",
  pmTabInstalled: "Installed",
  pmTabBrowse: "Web Browse",
  pmAlreadyInstalled: "Installed",
  pmRedownload: "Redownload",
  pmManagePlugin: "Manage",
  pmBrowseEmpty: "No plugins available (offline or empty repository)",
  pmDownload: "Download",
  pmDownloading: "Downloading\u2026",
  pmDownloaded: "Installed \u201C{name}\u201D",
  pmDownloadFailed: "Failed to download {name}: {msg}",
  pmRefreshRegistry: "Refresh plugin repository",
  pmSearchPlaceholder: "Search extensions",
  pmImportFromFile: "Install from VSIX\u2026",
  pmImportFromUrl: "Install from URL\u2026",
  pmEnableAll: "Enable All",
  pmDisableAll: "Disable All",
  pmEnable: "Enable",
  pmDisable: "Disable",
  pmRemove: "Uninstall",
  pmRemoveConfirm: "Remove plugin \u201C{name}\u201D? Its code snapshot and any edited version will be deleted.",
  pmSeedRemoveConfirm: "Remove built-in plugin \u201C{name}\u201D? It will be converted into a removable downloaded record (re-downloadable from the registry anytime).",
  pmSeedMigrateFailed: "Cannot fetch \u201C{name}\u201D from the registry yet, so it was not converted to a removable record. Try \u201CCheck remote\u201D and retry.",
  pmMoreActions: "More Actions",
  pmPull: "Fetch",
  pmPulling: "\u2026",
  pmUrlPlaceholder: "https://example.com/plugin.js",
  srcBuiltin: "Built-in",
  srcFile: "Local",
  srcUrl: "URL",
  pmEmptyWithQuery: "No extensions match \u201C{q}\u201D<br>Try another keyword, or install via the \u201C\xB7\xB7\xB7\u201D menu",
  pmEmptyNoPlugins: "No extensions yet<br>Install one from a local file or URL via the \u201C\xB7\xB7\xB7\u201D menu",
  pmImportFailed: "Failed to import {name}: {msg}",
  pmUrlImported: "Installed and enabled from URL",
  pmUrlImportFailed: "URL import failed: {msg}",
  pmNeedsProject: "Enabled \xB7 opens a project folder to show in the sidebar",
  vsExtNeedProject: "{n} extension(s) enabled \u2014 open a project folder to show them in the sidebar",
  pmCheckEmpty: "File is empty.",
  pmCheckNotPlugin: "Not a plugin file: missing __ModuleLoader__ registration or activityBar calls.",
  pmCheckNeedsHost: "This plugin requires host API v{need}; this workbench provides v{have}. Upgrade and retry.",
  pmCheckNoContrib: "The plugin registered no contribution points and was rolled back. Check it against this workbench API.",
  pmRestoreFailed: "Failed to restore plugin {name}: {msg}",
  pmEnableFailed: "Failed to enable {name}: {msg}",
  pmEnableFailedReason: "{name}: {msg}",
  pmReloadRequired: "{n} plugin(s) enabled but could not hot-load; a window reload is required.",
  pmReloadNow: "Reload Window",
  pmReloadDismiss: "Not now",
  pmCodePreview: "Preview code",
  pmCodeView: "View code",
  pmCodeEdit: "Edit code\u2026",
  pmCodeReadonly: "Read-only",
  pmCodeSave: "Save",
  pmCodeReload: "Reload",
  pmCodeClose: "Close",
  pmCodeSaved: "Saved and reloaded \u201C{name}\u201D",
  pmCodeReloaded: "Reloaded \u201C{name}\u201D from current source",
  pmCodeSaveFailed: "Save failed: {msg}",
  pmCodePreviewFailed: "Failed to fetch plugin source: {msg}",
  pmCodeDiscardConfirm: "You have unsaved changes. Discard and close?",
  pmCodeRestore: "Revert",
  pmCodeRestoreConfirm: "Discard the edited version, restore the original source and reload?",
  pmCodeRestored: "Restored \u201C{name}\u201D to the original and reloaded"
};

// src/client/RightPaneBridge.tsx
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var API_PREFIX = "/api/dsh-file-workbench";
function apiBase() {
  return `${window.location.origin}${API_PREFIX}`;
}
function projectDirOf(params) {
  if (!params || typeof params !== "object") return null;
  const d = params.projectDir;
  return typeof d === "string" && d.trim() !== "" ? d : null;
}
function freshOf(params) {
  if (!params || typeof params !== "object") return false;
  return params.fresh === true;
}
var openVsKinds = /* @__PURE__ */ new Map();
function vsKindInUse(kind) {
  return openVsKinds.has(kind);
}
function vsKindTabId(kind) {
  return openVsKinds.get(kind);
}
function vsOpenKindCount() {
  return openVsKinds.size;
}
function trackVsKind(kind, tabId, signal) {
  if (openVsKinds.get(kind) === tabId) return;
  openVsKinds.set(kind, tabId);
  try {
    signal?.addEventListener(
      "abort",
      () => {
        if (openVsKinds.get(kind) === tabId) openVsKinds.delete(kind);
      },
      { once: true }
    );
  } catch (e) {
    console.warn("[dsh-file-workbench] track editor kind failed:", e);
  }
}
function mountInto(el, globalName, opts, onHandle) {
  let handle = null;
  let timer = 0;
  const attempt = () => {
    const fn = window[globalName];
    if (typeof fn === "function") {
      handle = fn(el, { apiBase: apiBase(), ...opts });
      onHandle?.(handle);
      return;
    }
    timer = window.setTimeout(attempt, 60);
  };
  attempt();
  return () => {
    if (timer) window.clearTimeout(timer);
    try {
      handle?.unmount();
    } catch (e) {
      console.warn("[dsh-file-workbench] pane unmount failed:", e);
    }
    handle = null;
  };
}
function RightPaneBridge() {
  const ref = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    const el = ref.current;
    if (!el) return;
    return mountInto(el, "__dshFileWorkbenchMountPane__", {});
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref, style: { height: "100%", width: "100%", minHeight: 0 } });
}
function VSCodePaneBridge(props) {
  const readTabInfo = typeof props?.useTabInfo === "function" ? props.useTabInfo : null;
  const info = readTabInfo ? readTabInfo() : null;
  const tabId = info?.tab?.id ?? null;
  const panelId = info?.panel?.id ?? null;
  const revision = info?.tab?.navigation?.revision ?? -1;
  const dir = projectDirOf(info?.tab?.navigation?.params);
  const fresh = freshOf(info?.tab?.navigation?.params);
  const ref = (0, import_react.useRef)(null);
  const handleRef = (0, import_react.useRef)(null);
  const queuedDirRef = (0, import_react.useRef)(null);
  const lastRevRef = (0, import_react.useRef)(-1);
  const identityRef = (0, import_react.useRef)({
    tabId,
    panelId,
    kind: info?.tab?.kind ?? null,
    signal: info?.tab?.signal
  });
  (0, import_react.useEffect)(() => {
    const el = ref.current;
    if (!el) return;
    const id = identityRef.current;
    if (id.tabId && id.kind) trackVsKind(id.kind, id.tabId, id.signal);
    if (id.signal) {
      id.signal.addEventListener(
        "abort",
        () => {
          if (!id.tabId) return;
          try {
            window.__dshFWDisposeEditorSlotByTabId?.(id.tabId);
          } catch (e) {
            console.warn("[dsh-file-workbench] dispose editor slot failed:", e);
          }
        },
        { once: true }
      );
    }
    return mountInto(
      el,
      "__dshVSCodeMountPane__",
      { instanceId: id.tabId ?? void 0, panelId: id.panelId ?? void 0, fresh },
      (h) => {
        handleRef.current = h;
        const queued = queuedDirRef.current;
        if (queued) {
          queuedDirRef.current = null;
          h.openProject?.(queued);
        }
      }
    );
  }, []);
  (0, import_react.useEffect)(() => {
    if (revision < 0 || revision === lastRevRef.current) return;
    lastRevRef.current = revision;
    if (!dir) return;
    if (handleRef.current) handleRef.current.openProject?.(dir);
    else queuedDirRef.current = dir;
  }, [revision, dir]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref, style: { height: "100%", width: "100%", minHeight: 0 } });
}

// src/client/ComposerBridge.tsx
var import_react2 = require("react");
function bridge() {
  return window.__DSH_FILE_WORKBENCH__;
}
function relToCwd(rawPath) {
  const p = rawPath.replace(/\\/g, "/");
  let cwd = null;
  try {
    cwd = bridge()?.getSessionDir?.() ?? null;
  } catch {
    cwd = null;
  }
  if (!cwd) return p;
  const root = cwd.replace(/\\/g, "/").replace(/\/+$/, "");
  if (root === "") return p;
  const lp = p.toLowerCase();
  const lr = root.toLowerCase();
  if (lp === lr) return ".";
  if (lp.startsWith(`${lr}/`)) return p.slice(root.length + 1);
  return p;
}
function formatFileMention(rawPath, isDir) {
  let p = relToCwd(rawPath);
  if (p === "") p = ".";
  const withSlash = isDir ? p.endsWith("/") ? p : `${p}/` : p;
  if (/[\u0000-\u001f\u007f-\u009f"]/u.test(withSlash)) return null;
  const quoted = /\s/u.test(withSlash);
  if (!quoted) return `@${withSlash}`;
  if (isDir) return `@"${withSlash}`;
  return `@"${withSlash}"`;
}
function mentionLabel(mention, isDir) {
  const bare = mention.replace(/^@"/u, "").replace(/^@/u, "").replace(/\/+$/u, "");
  const seg = bare.slice(bare.lastIndexOf("/") + 1) || bare;
  return isDir ? `${seg}/` : seg;
}
function ComposerBridge(props) {
  const { inputActions, wbInsertSessionReference } = props;
  const useInput = props.useInput ?? ((sel) => sel({}));
  const draft = useInput((s) => s.draft);
  const draftRev = useInput((s) => s.draftRev);
  const occurrences = useInput((s) => s.occurrences);
  const latest = (0, import_react2.useRef)({
    draft: "",
    draftRev: 0,
    detectLen: 0
  });
  const draftText = typeof draft === "string" ? draft : "";
  const occ = Array.isArray(occurrences) ? occurrences : [];
  let chipExtra = 0;
  for (const o of occ) {
    const len = o && typeof o.length === "number" ? o.length : 0;
    if (len > 1) chipExtra += len - 1;
  }
  latest.current = {
    draft: draftText,
    draftRev: typeof draftRev === "number" ? draftRev : 0,
    detectLen: Math.max(0, draftText.length - chipExtra)
  };
  (0, import_react2.useEffect)(() => {
    const g = bridge();
    if (!g) return;
    const setDraft = inputActions?.setDraft;
    const insertRef = wbInsertSessionReference;
    if (typeof setDraft !== "function" && typeof insertRef !== "function") return;
    g.appendSessionReference = (path, isDir = false) => {
      const mention = formatFileMention(path, isDir);
      if (!mention) return false;
      const { draft: cur, draftRev: rev, detectLen } = latest.current;
      if (typeof insertRef === "function") {
        const ok = insertRef({
          mention,
          label: mentionLabel(mention, isDir),
          appearance: isDir ? "folder" : "file",
          span: { start: detectLen, end: detectLen, draftRev: rev }
        });
        if (ok) return true;
      }
      if (typeof setDraft !== "function") return false;
      const text = typeof cur === "string" ? cur : "";
      const next = text.trim() ? `${text.replace(/\s+$/, "")} ${mention}` : mention;
      setDraft(next);
      return true;
    };
    return () => {
      const curBridge = bridge();
      if (curBridge && curBridge.appendSessionReference) delete curBridge.appendSessionReference;
    };
  }, [draft, draftRev, occurrences, inputActions, wbInsertSessionReference]);
  return null;
}

// src/client/TabMenuBridge.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var styleInjected = false;
function ensureMenuItemStyle() {
  if (styleInjected || typeof document === "undefined") return;
  const style = document.createElement("style");
  style.textContent = [
    `.dshfw-tabMenuItem{padding:5px 8px;color:var(--dsw-alias-label-primary);`,
    `font-size:var(--dsh-content-font-size-secondary,13px);text-align:left;`,
    `background:transparent;border:none;border-radius:4px;cursor:pointer;white-space:nowrap}`,
    `.dshfw-tabMenuItem:hover{background:var(--dsw-alias-interactive-bg-hover)}`
  ].join("");
  document.head.appendChild(style);
  styleInjected = true;
}
function createTabMenuItems(deps) {
  return function TabMenuItems(props) {
    ensureMenuItemStyle();
    const kind = props?.tab?.kind ?? "";
    const tabId = props?.tab?.id;
    const dismiss = props?.dismiss;
    const items = [];
    if (kind === "workbench") {
      const dir = deps.getSessionDir();
      if (dir) {
        items.push({
          id: "editor-cwd",
          label: deps.tr("tabMenuOpenInEditor"),
          run: () => deps.openEditor({ projectDir: dir })
        });
      }
      items.push({ id: "editor-new", label: deps.tr("tabMenuNewEditor"), run: () => deps.openEditor({ fresh: true }) });
    } else if (kind.startsWith("vscode")) {
      items.push({ id: "editor-another", label: deps.tr("tabMenuAnotherEditor"), run: () => deps.openEditor({ fresh: true }) });
    }
    if (tabId) {
      items.push({ id: "float", label: deps.tr("tabMenuFloat"), run: () => deps.floatTab(tabId) });
    }
    if (items.length === 0) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "button",
      {
        type: "button",
        role: "menuitem",
        className: "dshfw-tabMenuItem",
        onClick: () => {
          try {
            it.run();
          } finally {
            dismiss?.();
          }
        },
        children: it.label
      },
      it.id
    )) });
  };
}

// src/client/GuideCardBridge.tsx
var import_react3 = require("react");
var import_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
var import_jsx_runtime3 = require("react/jsx-runtime");
var DEFAULT_TARGET_KEY = "dsh-file-workbench.guideDefault";
function loadDefaultTarget() {
  try {
    return localStorage.getItem(DEFAULT_TARGET_KEY) === "vscode" ? "vscode" : "workbench";
  } catch {
    return "workbench";
  }
}
function saveDefaultTarget(target) {
  try {
    localStorage.setItem(DEFAULT_TARGET_KEY, target);
  } catch {
  }
}
var styleInjected2 = false;
function ensureGuideCardStyle() {
  if (styleInjected2 || typeof document === "undefined") return;
  const style = document.createElement("style");
  style.textContent = [
    // `.entry`：整条胶囊的外框（官方 width:100%，宽度由 GuideBody 的 entryCell 380px 决定）。
    `.dshfw-guideCard{box-sizing:border-box;display:flex;align-items:stretch;width:100%;overflow:hidden;`,
    `border:0.5px solid var(--dsw-alias-border-l4);border-radius:24px;background:var(--dsw-alias-bg-layer-1)}`,
    // `.main`：左主区，内部改为 stretch 后的 flex 行；高度交给 min-height + padding。
    `.dshfw-guideCard>.dshfw-guideMain{flex:1;justify-content:flex-start;gap:14px;min-width:0;height:auto;`,
    `min-height:56px;padding:14px 20px;border-radius:24px 0 0 24px;text-align:left}`,
    // `.icon`：官方 TerminalGuide 仅 flex:none；这里沿用官方标准胶囊的 26px 盒与二级墨色。
    `.dshfw-guideIcon{display:flex;flex:none;align-items:center;justify-content:center;width:26px;height:26px;`,
    `color:var(--dsw-alias-label-secondary)}`,
    `.dshfw-guideText{display:flex;flex-direction:column;gap:3px;min-width:0}`,
    `.dshfw-guideTitle{overflow:hidden;color:var(--dsw-alias-label-primary);font-size:15px;line-height:1.4;`,
    `white-space:nowrap;text-overflow:ellipsis}`,
    `.dshfw-guideDesc{overflow:hidden;color:var(--dsw-alias-label-caption);font-size:13px;line-height:1.4;`,
    `white-space:nowrap;text-overflow:ellipsis}`,
    // `.trigger`：右箭头区 44px 宽、撑满卡片高、右半圆角（覆盖 Button 的 md 高度与 18px 圆角）。
    `.dshfw-guideMenu>.dshfw-guideTrigger{align-self:stretch;flex:none;height:auto;width:44px;padding:0;`,
    `border-radius:0 24px 24px 0}`,
    // `.menu`：Menu 的锚点包裹层在卡片 flex 行里竖向拉伸（trigger 的高度来源）。
    `.dshfw-guideCard>.dshfw-guideMenu{display:flex;align-self:stretch;flex:none}`
  ].join("");
  document.head.appendChild(style);
  styleInjected2 = true;
}
function createGuideCard(deps) {
  return function GuideCard({ kind, description, useTabInfo }) {
    ensureGuideCardStyle();
    const [open, setOpen] = (0, import_react3.useState)(false);
    const [defaultTarget, setDefaultTarget] = (0, import_react3.useState)(loadDefaultTarget);
    const isWorkbench = defaultTarget === "workbench";
    const Icon = isWorkbench ? deps.icons.workbench : deps.icons.vscode;
    const title = deps.tr(isWorkbench ? "tabFileWorkbench" : "tabVSCode");
    const titleDesc = deps.tr(isWorkbench ? "tabFileWorkbenchDesc" : "tabVSCodeDesc");
    const readTabInfo = typeof useTabInfo === "function" ? useTabInfo : null;
    const info = readTabInfo ? readTabInfo() : null;
    const openTab = (target, options) => {
      try {
        info?.tab.actions.openTab(target, { replaceTab: true, ...options });
      } catch (e) {
        console.warn("[dsh-file-workbench] guide open failed:", e);
      }
    };
    const cwd = deps.getSessionDir();
    const actions = [
      { id: "workbench", label: deps.tr("tabFileWorkbench"), run: () => openTab("workbench") },
      { id: "editor", label: deps.tr("tabVSCode"), run: () => openTab("vscode") },
      { id: "editor-new", label: deps.tr("tabMenuNewEditor"), run: () => deps.openEditor({ fresh: true }) }
    ];
    if (cwd) {
      actions.push({
        id: "editor-cwd",
        label: deps.tr("tabMenuOpenInEditor"),
        run: () => openTab("vscode", { params: { projectDir: cwd } })
      });
    }
    const defaultRows = [
      { id: "default-workbench", target: "workbench", label: deps.tr("tabFileWorkbench") },
      { id: "default-vscode", target: "vscode", label: deps.tr("tabVSCode") }
    ];
    const closeAndRun = (run) => {
      setOpen(false);
      run();
    };
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "dshfw-guideCard", "data-sidebar-right-guide-entry": kind, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_dsh_client_ui_primitives.Button, { variant: "ghost", className: "dshfw-guideMain", onClick: () => openTab(defaultTarget), children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "dshfw-guideIcon", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, { size: description === void 0 ? 22 : 26 }) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "dshfw-guideText", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "dshfw-guideTitle", children: title }),
          description !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "dshfw-guideDesc", children: titleDesc })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        import_dsh_client_ui_primitives.Menu,
        {
          open,
          portal: true,
          autoFocus: true,
          align: "end",
          className: "dshfw-guideMenu",
          items: [
            ...actions.map((it) => ({ id: it.id, label: it.label })),
            { type: "separator", id: "sep-default" },
            { type: "label", id: "label-default", text: deps.tr("tabMenuDefaultLabel") },
            ...defaultRows.map((row) => ({ id: row.id, label: row.label }))
          ],
          selectedId: defaultRows.find((row) => row.target === defaultTarget)?.id,
          onClose: () => setOpen(false),
          onSelect: (id) => {
            const action = actions.find((it) => it.id === id);
            if (action) {
              closeAndRun(action.run);
              return;
            }
            const row = defaultRows.find((it) => it.id === id);
            if (row) {
              setDefaultTarget(row.target);
              saveDefaultTarget(row.target);
            }
            setOpen(false);
          },
          anchor: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_dsh_client_ui_primitives.Button,
            {
              variant: "ghost",
              className: "dshfw-guideTrigger",
              "aria-label": deps.tr("guideMenuAria"),
              "aria-haspopup": "menu",
              "aria-expanded": open,
              onClick: () => setOpen((value) => !value),
              children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_dsh_client_ui_primitives.IconChevronDownOutline14, {})
            }
          )
        }
      )
    ] });
  };
}

// src/client/contributionProxy.ts
var API_VERSION = 4;
var bound = false;
var pending = [];
var real = {};
var shadowViews = /* @__PURE__ */ new Map();
var shadowCmds = /* @__PURE__ */ new Map();
var shadowStatus = /* @__PURE__ */ new Map();
var shadowMenu = /* @__PURE__ */ new Map();
var shadowWbViews = /* @__PURE__ */ new Map();
var shadowWbStatus = /* @__PURE__ */ new Map();
function enqueue(op) {
  if (!bound) pending.push(op);
}
var proxyVs = {
  apiVersion: API_VERSION,
  activityBar: {
    register(view) {
      shadowViews.set(view.id, view);
      enqueue({ ns: "vs", kind: "view", item: view });
      if (bound) real.vs.registerView(view);
    },
    unregister(id) {
      shadowViews.delete(id);
      enqueue({ ns: "vs", kind: "unview", id });
      if (bound) real.vs.unregisterView(id);
    }
  },
  commands: {
    register(id, handler) {
      shadowCmds.set(id, handler);
      enqueue({ ns: "vs", kind: "cmd", item: { id, handler } });
      if (bound) real.vs.registerCommand(id, handler);
    },
    unregister(id) {
      const had = shadowCmds.delete(id);
      enqueue({ ns: "vs", kind: "uncmd", id });
      return bound ? real.vs.unregisterCommand(id) : had;
    },
    execute(id, ...args) {
      if (bound) return real.vs.executeCommand(id, ...args);
      const h = shadowCmds.get(id);
      return h ? h(...args) : void 0;
    },
    has(id) {
      return bound ? real.vs.hasCommand(id) : shadowCmds.has(id);
    },
    list() {
      return bound ? real.vs.listCommands() : [...shadowCmds.keys()];
    }
  },
  statusbar: {
    register(item) {
      shadowStatus.set(item.id, item);
      enqueue({ ns: "vs", kind: "status", item });
      if (bound) real.vs.registerStatus(item);
    },
    unregister(id) {
      shadowStatus.delete(id);
      enqueue({ ns: "vs", kind: "unstatus", id });
      if (bound) real.vs.unregisterStatus(id);
    },
    list() {
      return bound ? real.vs.listStatus() : [...shadowStatus.values()];
    },
    registerMenu(item) {
      shadowMenu.set(item.id, item);
      enqueue({ ns: "vs", kind: "menu", item });
      if (bound) real.vs.registerMenu(item);
    },
    unregisterMenu(id) {
      shadowMenu.delete(id);
      enqueue({ ns: "vs", kind: "unmenu", id });
      if (bound) real.vs.unregisterMenu(id);
    },
    listMenu() {
      return bound ? real.vs.listMenu() : [...shadowMenu.values()];
    }
  }
};
var proxyWb = {
  apiVersion: API_VERSION,
  activityBar: {
    register(view) {
      shadowWbViews.set(view.id, view);
      enqueue({ ns: "wb", kind: "view", item: view });
      if (bound) real.wb.registerView(view);
    },
    unregister(id) {
      shadowWbViews.delete(id);
      enqueue({ ns: "wb", kind: "unview", id });
      if (bound) real.wb.unregisterView(id);
    }
  },
  statusbar: {
    register(item) {
      shadowWbStatus.set(item.id, item);
      enqueue({ ns: "wb", kind: "status", item });
      if (bound) real.wb.registerStatus(item);
    },
    unregister(id) {
      shadowWbStatus.delete(id);
      enqueue({ ns: "wb", kind: "unstatus", id });
      if (bound) real.wb.unregisterStatus(id);
    },
    list() {
      return bound ? real.wb.listStatus() : [...shadowWbStatus.values()];
    }
  },
  // backgroundTasks 依赖 Vue 内部实现，无法在 client 侧影子化；未就绪时给安全 no-op 门面，
  // 就绪后（flush 之后）由 rebindWorkbench 换成真实实现——但 window 上的对象引用不变，
  // 故对 backgroundTasks 的取值需经代理 getter 转发（见 installContributionProxy）。
  backgroundTasks: {
    start() {
      throw new Error("[dsh-file-workbench] backgroundTasks \u5C1A\u672A\u5C31\u7EEA\uFF1A\u8BF7\u5728\u63D2\u4EF6\u6FC0\u6D3B\u540E\u518D\u8C03\u7528 start()");
    },
    clearFinished() {
      return Promise.resolve();
    },
    clearAll() {
      return Promise.resolve();
    }
  }
};
proxyVs.__proxy = {
  rebindVSCode(h) {
    real.vs = h;
  },
  rebindWorkbench(h) {
    real.wb = h;
    proxyWb.backgroundTasks = h.backgroundTasks;
  },
  flush() {
    if (bound) return;
    bound = true;
    const ops = pending.splice(0, pending.length);
    for (const op of ops) applyOp(op);
  }
};
function applyOp(op) {
  if (op.ns === "vs") {
    const vs = real.vs;
    switch (op.kind) {
      case "view":
        vs.registerView(op.item);
        break;
      case "unview":
        vs.unregisterView(op.id);
        break;
      case "cmd":
        vs.registerCommand(op.item.id, op.item.handler);
        break;
      case "uncmd":
        vs.unregisterCommand(op.id);
        break;
      case "status":
        vs.registerStatus(op.item);
        break;
      case "unstatus":
        vs.unregisterStatus(op.id);
        break;
      case "menu":
        vs.registerMenu(op.item);
        break;
      case "unmenu":
        vs.unregisterMenu(op.id);
        break;
    }
  } else {
    const wb = real.wb;
    switch (op.kind) {
      case "view":
        wb.registerView(op.item);
        break;
      case "unview":
        wb.unregisterView(op.id);
        break;
      case "status":
        wb.registerStatus(op.item);
        break;
      case "unstatus":
        wb.unregisterStatus(op.id);
        break;
    }
  }
}
function installContributionProxy() {
  if (typeof window === "undefined") return;
  const w = window;
  const existingVs = w.__dshFileWorkbenchVSCode__;
  if (existingVs && !existingVs.__proxy && existingVs.activityBar) return;
  w.__dshFileWorkbenchVSCode__ = proxyVs;
  w.__dshFileWorkbenchWorkbench__ = proxyWb;
}

// src/client/OfficialTerminalBridge.ts
var DATA_EVENT = "dshfw-ot-data";
var STATUS_EVENT = "dshfw-ot-status";
function emitData(tag, kind, text) {
  window.dispatchEvent(new CustomEvent(DATA_EVENT, { detail: { tag, kind, text } }));
}
function emitStatus(tag, st) {
  window.dispatchEvent(new CustomEvent(STATUS_EVENT, { detail: { tag, ...st } }));
}
function installOfficialTerminal(ctx, target) {
  const webTerminalsSafe = () => {
    try {
      const svc = ctx.webTerminals;
      return svc && typeof svc.view === "function" ? svc : void 0;
    } catch {
      return void 0;
    }
  };
  const currentSessionId = () => {
    try {
      return ctx.sessions?.list?.getSnapshot?.()?.current ?? null;
    } catch {
      return null;
    }
  };
  const records = /* @__PURE__ */ new Map();
  const viewKey = (tag) => `dshfw-${tag}`;
  const api = {
    available: () => webTerminalsSafe() !== void 0 && currentSessionId() !== null,
    create(tag, _opts) {
      const svc = webTerminalsSafe();
      const sessionId = currentSessionId();
      if (!svc || !sessionId) return Promise.resolve(null);
      const existing = records.get(tag);
      if (existing && existing.sessionId === sessionId) {
        existing.unmount();
        existing.unmount = existing.view.mount();
        const cwd = existing.cwd;
        return Promise.resolve(cwd ? { cwd } : {});
      }
      const view = svc.view(sessionId, viewKey(tag), void 0, void 0);
      const rec = {
        sessionId,
        view,
        unmount: () => {
        },
        unsub: () => {
        },
        lastRevision: 0,
        phase: "",
        cwd: "",
        exited: false
      };
      let settleEnv;
      const envReady = new Promise((resolve) => {
        settleEnv = () => resolve();
      });
      const timeout = window.setTimeout(() => settleEnv?.(), 1e4);
      const forward = () => {
        const s = view.state.getSnapshot();
        if (s.render && s.render.revision > rec.lastRevision) {
          rec.lastRevision = s.render.revision;
          const f = s.render.frame;
          emitData(tag, f.type, f.type === "snapshot" ? f.screen : f.data);
          view.acknowledge(s.render.revision);
        }
        const exited = s.info !== void 0 && s.info.state !== "running";
        if (s.phase !== rec.phase || (s.environment?.cwd ?? "") !== rec.cwd || exited !== rec.exited) {
          rec.phase = s.phase;
          rec.cwd = s.environment?.cwd ?? "";
          rec.exited = exited;
          emitStatus(tag, { phase: s.phase, cwd: rec.cwd || void 0, exited, error: s.error });
        }
        if (s.environment?.cwd && settleEnv) {
          const fn = settleEnv;
          settleEnv = void 0;
          window.clearTimeout(timeout);
          fn();
        }
      };
      rec.unsub = view.state.subscribe(forward);
      forward();
      records.set(tag, rec);
      rec.unmount = view.mount();
      return envReady.then(() => rec.cwd ? { cwd: rec.cwd } : {});
    },
    write(tag, data) {
      const rec = records.get(tag);
      if (!rec) return false;
      try {
        rec.view.write(data);
        return true;
      } catch {
        return false;
      }
    },
    resize(tag, cols, rows) {
      const rec = records.get(tag);
      if (!rec) return;
      try {
        rec.view.resize(cols, rows);
      } catch {
      }
    },
    detach(tag) {
      const rec = records.get(tag);
      if (!rec) return;
      rec.unmount();
    },
    close(tag) {
      const rec = records.get(tag);
      if (!rec) return;
      records.delete(tag);
      rec.unmount();
      rec.unsub();
      try {
        webTerminalsSafe()?.close(rec.sessionId, viewKey(tag), rec.view.id);
      } catch {
      }
    }
  };
  target.officialTerminal = api;
}

// src/client/api.ts
var guarded;
function warn(label, e) {
  console.warn(`[dsh-file-workbench] sidebarRight.${label} failed:`, e);
}
function setSidebarRight(raw) {
  guarded = raw ? {
    openTab(kind, options) {
      try {
        raw.openTab(kind, options);
      } catch (e) {
        warn("openTab", e);
      }
    },
    split(paneId) {
      try {
        return raw.split(paneId);
      } catch (e) {
        warn("split", e);
        return void 0;
      }
    },
    float(tabId) {
      try {
        raw.float(tabId);
      } catch (e) {
        warn("float", e);
      }
    },
    dock(paneId) {
      try {
        raw.dock(paneId);
      } catch (e) {
        warn("dock", e);
      }
    },
    close(tabId) {
      try {
        raw.close(tabId);
      } catch (e) {
        warn("close", e);
      }
    },
    isExpanded() {
      try {
        return raw.isExpanded();
      } catch {
        return false;
      }
    },
    newEditorTab(params) {
      try {
        return raw.newEditorTab(params);
      } catch (e) {
        warn("newEditorTab", e);
        return false;
      }
    },
    editorTabCount() {
      try {
        return raw.editorTabCount();
      } catch (e) {
        warn("editorTabCount", e);
        return 0;
      }
    },
    editorTabLimit() {
      try {
        return raw.editorTabLimit();
      } catch (e) {
        warn("editorTabLimit", e);
        return 0;
      }
    }
  } : void 0;
  if (typeof window !== "undefined") window.__DSH_SIDEBAR_RIGHT__ = guarded;
}

// src/client/index.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
console.info("import(window.__dshTestProbeUrl).then(m => m.installTestButtons())");
var PREFIX = "/api/dsh-file-workbench";
var inject = [
  "locale",
  "sessions",
  "workspaces",
  "slots",
  "sidebarRightTabs",
  "sidebarRight",
  "uiSession",
  "conversation"
];
var KIND = "workbench";
var ID = "@sunjuntao/dsh-file-workbench";
var KIND_VS = "vscode";
var ID_VS = "@sunjuntao/dsh-file-workbench.vscode";
var VS_KIND_POOL = 8;
function vsKindAt(n) {
  return n <= 1 ? KIND_VS : `${KIND_VS}-${n}`;
}
function vsIdAt(n) {
  return n <= 1 ? ID_VS : `${ID_VS}.${n}`;
}
var LOCALE_NS = "dsh-file-workbench";
var clientApplied = false;
function WorkbenchGlyph({ size = 16, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("svg", { width: size, height: size, viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", className, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("rect", { x: "1.9", y: "2.9", width: "12.2", height: "10.2", rx: "1.6", stroke: "currentColor", strokeWidth: "1.3" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M 6.2 2.9 V 13.1", stroke: "currentColor", strokeWidth: "1.3" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "path",
      {
        d: "M 3.7 5.7 h 1.1 M 3.7 8 h 1.1 M 3.7 10.3 h 1.1",
        stroke: "currentColor",
        strokeWidth: "1.3",
        strokeLinecap: "round"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "path",
      {
        d: "M 8.3 5.7 h 3.9 M 8.3 8 h 3.9 M 8.3 10.3 h 2.5",
        stroke: "currentColor",
        strokeWidth: "1.3",
        strokeLinecap: "round"
      }
    )
  ] });
}
function VSCodeGlyph({ size = 16, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("svg", { width: size, height: size, viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", className, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("rect", { x: "1.7", y: "2.6", width: "12.6", height: "10.8", rx: "1.4", stroke: "currentColor", strokeWidth: "1.3" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M 5.1 2.6 V 13.4", stroke: "currentColor", strokeWidth: "1.3" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M 7 6.2 h 5.6 M 7 8.2 h 5.6 M 7 10.2 h 3.8", stroke: "currentColor", strokeWidth: "1.1", strokeLinecap: "round" })
  ] });
}
function apply(ctx) {
  const apiBase2 = `${window.location.origin}${PREFIX}`;
  installContributionProxy();
  if (clientApplied) return;
  clientApplied = true;
  const tr = (key) => {
    const active = ctx.locale?.getLocale?.()?.active ?? (typeof document !== "undefined" ? document.documentElement.lang : "") ?? "en";
    const dict = active.toLowerCase().startsWith("zh") ? zh : en;
    return dict[key] ?? en[key] ?? String(key);
  };
  let pickDirectory;
  try {
    pickDirectory = ctx.uiWorkspace?.pickDirectory ?? ctx.workspaces?.pickDirectory;
  } catch {
  }
  const getSessionDir = () => {
    try {
      const list = ctx.sessions?.list?.getSnapshot?.();
      const id = list?.current;
      return id && list?.byId?.[id]?.cwd || null;
    } catch {
      return null;
    }
  };
  const getSessionId = () => {
    try {
      return ctx.sessions?.list?.getSnapshot?.()?.current ?? null;
    } catch {
      return null;
    }
  };
  const subscribeCurrentSessionId = (cb) => {
    let disposed = false;
    const notify = () => {
      if (disposed) return;
      try {
        cb(getSessionId());
      } catch {
      }
    };
    const unsubList = ctx.sessions?.list?.subscribe?.(notify);
    notify();
    return () => {
      disposed = true;
      try {
        unsubList?.();
      } catch {
      }
    };
  };
  const FILE_ADDRESS_PREFIX = "dsh-resource://file/";
  const encodeSeg = (s) => encodeURIComponent(s);
  const encodePathSegs = (p) => p.split("/").map(encodeURIComponent).join("/");
  const isAbsPath = (p) => p.startsWith("/") || /^[A-Za-z]:[\\/]/.test(p) || p.startsWith("\\\\");
  const sessionFileAddress = (sessionId, p) => {
    const normalized = p.replace(/\\/g, "/").replace(/^(?:\.\/)+/, "");
    return `${FILE_ADDRESS_PREFIX}session/${encodeSeg(sessionId)}/${encodePathSegs(normalized)}`;
  };
  const fileAddressFor = (sessionId, cwd, path) => {
    const normalized = path.replace(/\\/g, "/");
    if (!isAbsPath(normalized)) return sessionFileAddress(sessionId, normalized);
    const root = cwd ? cwd.replace(/\\/g, "/").replace(/\/+$/, "") : "";
    if (root !== "" && normalized === root) return sessionFileAddress(sessionId, "");
    if (root !== "" && normalized.startsWith(`${root}/`)) {
      return sessionFileAddress(sessionId, normalized.slice(root.length + 1));
    }
    return sessionFileAddress(sessionId, normalized);
  };
  const openInSidebar = (path) => {
    try {
      const sessionId = getSessionId();
      if (!sessionId || !path) return;
      ctx.sidebarRight?.openResource(fileAddressFor(sessionId, getSessionDir(), path));
    } catch (e) {
      console.warn("[dsh-file-workbench] openInSidebar failed:", e);
    }
  };
  const bridge2 = window.__DSH_FILE_WORKBENCH__ = {
    apiBase: apiBase2,
    pickDirectory,
    getSessionDir,
    getSessionId,
    openInSidebar,
    subscribeCurrentSessionId,
    locale: ctx.locale
  };
  installOfficialTerminal(ctx, bridge2);
  const uiWorkspaceSafe = () => {
    try {
      return ctx.uiWorkspace;
    } catch {
      return void 0;
    }
  };
  Object.defineProperty(bridge2, "listDirectory", {
    configurable: true,
    enumerable: true,
    get: () => {
      const svc = uiWorkspaceSafe();
      return svc && typeof svc.listDirectory === "function" ? (path) => svc.listDirectory(path) : void 0;
    }
  });
  Object.defineProperty(bridge2, "createDirectory", {
    configurable: true,
    enumerable: true,
    get: () => {
      const svc = uiWorkspaceSafe();
      return svc && typeof svc.createDirectory === "function" ? (path, name) => svc.createDirectory(path, name) : void 0;
    }
  });
  let lastSessionId = getSessionId();
  let lastSessionDir = getSessionDir();
  const onSessionsChange = () => {
    const next = getSessionId();
    const nextDir = getSessionDir();
    const g = window.__DSH_FILE_WORKBENCH__;
    if (!next) return;
    const dirChanged = nextDir !== lastSessionDir;
    lastSessionDir = nextDir;
    if (next !== lastSessionId) {
      lastSessionId = next;
      g?.syncSessionWorkspace?.();
      return;
    }
    if (dirChanged) g?.syncSessionWorkspace?.();
  };
  const unsubSessions = ctx.sessions?.list?.subscribe?.(onSessionsChange) ?? null;
  if (unsubSessions) {
    ctx.effect(() => unsubSessions, "dsh-file-workbench: session-switch watch");
  }
  const routeOpen = (kind, path) => {
    const g = window.__DSH_FILE_WORKBENCH__;
    if (!g) return;
    const fn = kind === "file" ? g.openExternalFile : g.openExternalFolder;
    if (fn) fn(path);
    else (g.pendingOpens = g.pendingOpens ?? []).push({ kind, path });
  };
  const ws = ctx.workspaces;
  if (ws && typeof ws.openPath === "function") {
    const original = ws.openPath.bind(ws);
    ws.openPath = (path) => {
      const g = window.__DSH_FILE_WORKBENCH__;
      if (!g || !g.openExternalFile) return original(path);
      const trimmed = path.replace(/[\\/]+$/, "");
      const isReveal = path === "." || path === "./" || trimmed === "." || /[\\/]\.$/.test(trimmed);
      if (isReveal) {
        const dir = getSessionDir();
        if (dir) {
          routeOpen("folder", dir);
          return Promise.resolve();
        }
        return original(path);
      }
      routeOpen("file", path);
      return Promise.resolve();
    };
  }
  ctx.effect(() => {
    const offZh = ctx.locale.register(LOCALE_NS, "zh", zh);
    const offEn = ctx.locale.register(LOCALE_NS, "en", en);
    return () => {
      offZh();
      offEn();
    };
  }, "dsh-file-workbench: dictionaries");
  try {
    let openNextEditorTab2 = function(params) {
      for (let n = 1; n <= VS_KIND_POOL; n++) {
        const kind = vsKindAt(n);
        if (vsKindInUse(kind)) continue;
        try {
          ctx.sidebarRight?.openTab(kind, { params });
          return true;
        } catch (e) {
          console.warn(`[dsh-file-workbench] \u65B0\u5EFA\u7F16\u8F91\u5668\u7A97\u53E3\u5931\u8D25\uFF08${kind}\uFF09\uFF1A`, e);
          return false;
        }
      }
      for (let n = 1; n <= VS_KIND_POOL; n++) {
        const kind = vsKindAt(n);
        const tabId = vsKindTabId(kind);
        if (!tabId) continue;
        try {
          ctx.sidebarRight?.openTab(kind, { replaceTab: tabId, params });
          return true;
        } catch (e) {
          console.warn(`[dsh-file-workbench] \u66FF\u6362\u7F16\u8F91\u5668\u7A97\u53E3\u5931\u8D25\uFF08${kind}\uFF09\uFF1A`, e);
          return false;
        }
      }
      return false;
    };
    var openNextEditorTab = openNextEditorTab2;
    setSidebarRight({
      openTab: (kind, options) => ctx.sidebarRight?.openTab(kind, options),
      split: (paneId) => ctx.sidebarRight?.split(paneId),
      float: (tabId) => ctx.sidebarRight?.float(tabId),
      dock: (paneId) => ctx.sidebarRight?.dock(paneId),
      close: (tabId) => ctx.sidebarRight?.close(tabId),
      isExpanded: () => ctx.sidebarRight?.isExpanded() ?? false,
      newEditorTab: (params) => openNextEditorTab2(params),
      editorTabCount: () => vsOpenKindCount(),
      editorTabLimit: () => VS_KIND_POOL
    });
    ctx.effect(
      () => ctx.sidebarRightTabs?.register({
        id: ID,
        kind: KIND,
        title: () => tr("tabFileWorkbench"),
        guide: [
          {
            id: "workbench",
            order: 100,
            title: () => tr("tabFileWorkbench"),
            description: () => tr("tabFileWorkbenchDesc"),
            icon: WorkbenchGlyph
          }
        ]
      }),
      "dsh-file-workbench: sidebar tab type"
    );
    ctx.effect(
      () => {
        const slots = ctx.slots;
        if (!slots) return;
        return slots.inject(
          "sidebar.right.pane.tab",
          () => slots.register(
            { name: "sidebar.right.pane.tab", key: ID },
            RightPaneBridge
          )
        );
      },
      "dsh-file-workbench: sidebar tab body"
    );
    ctx.effect(() => {
      const offs = [];
      for (let n = 1; n <= VS_KIND_POOL; n++) {
        try {
          const off = ctx.sidebarRightTabs?.register({
            id: vsIdAt(n),
            kind: vsKindAt(n),
            title: () => n === 1 ? tr("tabVSCode") : `${tr("tabVSCode")} ${n}`
          });
          if (off) offs.push(off);
        } catch (e) {
          console.warn(`[dsh-file-workbench] \u7F16\u8F91\u5668\u7C7B\u578B\u6CE8\u518C\u5931\u8D25\uFF08${vsKindAt(n)}\uFF09\uFF1A`, e);
        }
      }
      return () => {
        for (const off of offs) off();
      };
    }, "dsh-file-workbench: vscode tab types");
    ctx.effect(() => {
      const slots = ctx.slots;
      if (!slots) return;
      return slots.inject("sidebar.right.pane.tab", () => {
        const offs = [];
        for (let n = 1; n <= VS_KIND_POOL; n++) {
          try {
            const off = slots.register(
              { name: "sidebar.right.pane.tab", key: vsIdAt(n) },
              VSCodePaneBridge
            );
            if (off) offs.push(off);
          } catch (e) {
            console.warn(`[dsh-file-workbench] \u7F16\u8F91\u5668\u6B63\u6587\u6CE8\u518C\u5931\u8D25\uFF08${vsKindAt(n)}\uFF09\uFF1A`, e);
          }
        }
        return () => {
          for (const off of offs) off();
        };
      });
    }, "dsh-file-workbench: vscode tab bodies");
    ctx.effect(() => {
      const slots = ctx.slots;
      if (!slots) return;
      const off = slots.inject(
        "sidebar.right.tab.menu.item",
        () => slots.register(
          // list 插槽按 options.id 排序/去重（key 是 keyed 插槽的约定），必须带 id + order。
          { name: "sidebar.right.tab.menu.item", id: `${ID}.menu`, order: 10 },
          createTabMenuItems({
            tr,
            getSessionDir,
            openEditor: (params) => openNextEditorTab2(params),
            floatTab: (tabId) => ctx.sidebarRight?.float(tabId)
          })
        )
      );
      return off;
    }, "dsh-file-workbench: tab menu items");
    ctx.effect(() => {
      const slots = ctx.slots;
      if (!slots) return;
      return slots.inject(
        "sidebar.right.tab.guide.entry",
        () => slots.register(
          { name: "sidebar.right.tab.guide.entry", key: ID, locale: LOCALE_NS },
          createGuideCard({
            tr,
            getSessionDir,
            openEditor: (params) => openNextEditorTab2(params),
            floatTab: (tabId) => ctx.sidebarRight?.float(tabId),
            icons: { workbench: WorkbenchGlyph, vscode: VSCodeGlyph }
          })
        )
      );
    }, "dsh-file-workbench: guide card");
  } catch (e) {
    console.warn("[dsh-file-workbench] \u53F3\u4FA7\u9762\u677F\u6CE8\u518C\u5931\u8D25\uFF08\u5DF2\u964D\u7EA7\uFF09\uFF1A", e);
  }
  try {
    const slots = ctx.slots;
    if (slots) {
      slots.inject(
        "conversation.input.left",
        () => slots.register(
          { name: "conversation.input.left", id: `${ID}.reference`, order: 20 },
          ComposerBridge
        )
      );
    }
  } catch (e) {
    console.warn("[dsh-file-workbench] composer \u5F15\u7528\u5EA7\u4F4D\u6CE8\u518C\u5931\u8D25\uFF08\u5DF2\u964D\u7EA7\uFF09\uFF1A", e);
  }
  try {
    const uiSession = ctx.uiSession;
    const conversation = ctx.conversation;
    if (uiSession && conversation?.input?.for) {
      ctx.effect(
        () => uiSession.provide({
          props: ["wbInsertSessionReference"],
          resolve: (binding) => ({
            props: {
              wbInsertSessionReference: (req) => {
                try {
                  const shell = conversation.input?.for(binding.ctx);
                  if (!shell?.insertReference) return false;
                  return shell.insertReference(
                    {
                      source: "reference",
                      ref: req.mention,
                      label: req.label,
                      appearance: req.appearance,
                      clipboardText: req.mention
                    },
                    req.span
                  );
                } catch (e) {
                  console.warn("[dsh-file-workbench] insertReference failed:", e);
                  return false;
                }
              }
            }
          })
        }),
        "dsh-file-workbench: reference insert provider"
      );
    }
  } catch (e) {
    console.warn("[dsh-file-workbench] \u5F15\u7528\u63D2\u5165\u901A\u9053\u6CE8\u518C\u5931\u8D25\uFF08\u5DF2\u964D\u7EA7\uFF09\uFF1A", e);
  }
  if (!document.querySelector(`link[href="${apiBase2}/${"assets/style-RhJtc018.css"}"]`)) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `${apiBase2}/${"assets/style-RhJtc018.css"}`;
    document.head.appendChild(link);
  }
  if (!document.querySelector(`script[src="${apiBase2}/${"assets/index-C3GFZZ4W.js"}"]`)) {
    const script = document.createElement("script");
    script.type = "module";
    script.src = `${apiBase2}/${"assets/index-C3GFZZ4W.js"}`;
    document.head.appendChild(script);
  }
}
		module.exports = { apply, inject };
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map
