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
  vsNoProject: "\u672A\u9009\u62E9\u9879\u76EE\u76EE\u5F55",
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
  vsRecentClear: "\u6E05\u9664\u8BB0\u5F55",
  vsRecentClearAll: "\u6E05\u7A7A\u5168\u90E8",
  vsGitHistory: "\u63D0\u4EA4\u8BB0\u5F55",
  vsGitExpand: "\u5C55\u5F00\u63D0\u4EA4\u8BB0\u5F55",
  vsGitCollapse: "\u6536\u8D77\u63D0\u4EA4\u8BB0\u5F55",
  vsGitRefresh: "\u5237\u65B0\u63D0\u4EA4\u8BB0\u5F55",
  vsGitFiles: "\u53D8\u66F4\u6587\u4EF6",
  vsGitFileDiff: "\u5728\u65B0\u6807\u7B7E\u9875\u6253\u5F00\u6B64\u6587\u4EF6\u53D8\u66F4",
  vsQuickOpenPlaceholder: "\u641C\u7D22\u9879\u76EE\u5185\u6587\u4EF6\uFF08Ctrl+P\uFF09",
  vsLeftTabFiles: "\u6587\u4EF6",
  vsLeftTabSearch: "\u641C\u7D22",
  vsSearchNeedsProject: "\u8BF7\u5148\u6253\u5F00\u9879\u76EE\u6587\u4EF6\u5939\u518D\u4F7F\u7528\u641C\u7D22",
  vsGrepPlaceholder: "\u641C\u7D22\u5185\u5BB9\uFF08Enter \u7ACB\u5373\u641C\uFF09",
  vsGrepCase: "\u533A\u5206\u5927\u5C0F\u5199",
  vsGrepRegex: "\u4F7F\u7528\u6B63\u5219",
  vsGrepSummary: "{files} \u4E2A\u6587\u4EF6\u4E2D {n} \u6761\u7ED3\u679C",
  vsGrepTruncated: "\u7ED3\u679C\u8FC7\u591A\uFF0C\u5DF2\u622A\u65AD",
  vsGrepNoResult: "\u672A\u627E\u5230\u7ED3\u679C",
  vsGrepOpenAt: "\u6253\u5F00\u5E76\u8DF3\u5230\u7B2C {ln} \u884C",
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
  sessionFiles: "\u5F53\u524D\u4F1A\u8BDD\u76F8\u5173\u6587\u4EF6",
  emptySession: "\uFF08\u5F53\u524D\u4F1A\u8BDD\u6682\u65E0\u6587\u4EF6\uFF09",
  driveLabel: "\u672C\u5730\u78C1\u76D8 ({drive}:)",
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
  menuPaste: "\u7C98\u8D34",
  menuUpload: "\u4E0A\u4F20\u6587\u4EF6",
  uploaded: "\u5DF2\u4E0A\u4F20 {count} \u4E2A\u6587\u4EF6",
  uploadFailed: "\u6709 {count} \u4E2A\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25",
  menuNew: "\u65B0\u5EFA",
  menuNewFolder: "\u6587\u4EF6\u5939",
  menuNewFile: "\u6587\u672C\u6587\u4EF6",
  // 与下方 newFileName 对应，.txt 后缀
  viewHuge: "\u8D85\u5927\u56FE\u6807",
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
  svnLogEmpty: "\u6682\u65E0\u65E5\u5FD7",
  svnDiffTitle: "\u5DEE\u5F02\u5BF9\u6BD4 \xB7 ",
  svnBlameTitle: "\u8FFD\u6EAF \xB7 ",
  svnCheckoutUrlPlaceholder: "\u4ED3\u5E93\u5730\u5740\uFF08\u5982 https://svn.example.com/svn/repo\uFF09",
  svnCheckoutTargetPlaceholder: "\u68C0\u51FA\u5230\u672C\u5730\u76EE\u5F55",
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
  terminalTab: "{n}",
  scrollLeft: "\u5411\u5DE6\u6EDA\u52A8",
  scrollRight: "\u5411\u53F3\u6EDA\u52A8",
  termFontSmaller: "\u51CF\u5C0F\u5B57\u53F7",
  termFontLarger: "\u589E\u5927\u5B57\u53F7",
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
  statusTermRestore: "\u70B9\u51FB\u8FD8\u539F\u7EC8\u7AEF\u7A97\u53E3"
};
var en = {
  tabFileWorkbench: "File Workbench",
  tabFileWorkbenchDesc: "Browse, preview, and search local files, then reference them to the session",
  // VS Code editor pane
  tabVSCode: "File Editor",
  tabVSCodeDesc: "Open a code editor in the right sidebar: browse project tree, multi-tab editing, syntax highlight",
  vsNoProject: "No project folder selected",
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
  vsRecentClear: "Clear Entries",
  vsRecentClearAll: "Clear All",
  vsGitHistory: "History",
  vsGitExpand: "Show commit history",
  vsGitCollapse: "Collapse commit history",
  vsGitRefresh: "Refresh history",
  vsGitFiles: "Changed files",
  vsGitFileDiff: "Open this change in a new tab",
  vsQuickOpenPlaceholder: "Search files by name (Ctrl+P)",
  vsLeftTabFiles: "Files",
  vsLeftTabSearch: "Search",
  vsSearchNeedsProject: "Open a project folder first to use search",
  vsGrepPlaceholder: "Search in files (Enter to run)",
  vsGrepCase: "Match case",
  vsGrepRegex: "Use regex",
  vsGrepSummary: "{n} results in {files} files",
  vsGrepTruncated: "Too many results, truncated",
  vsGrepNoResult: "No results found",
  vsGrepOpenAt: "Open and go to line {ln}",
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
  sessionFiles: "Files in Session",
  emptySession: "(no files in this session)",
  driveLabel: "Local Disk ({drive}:)",
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
  menuPaste: "Paste",
  menuUpload: "Upload Files",
  uploaded: "Uploaded {count} file(s)",
  uploadFailed: "{count} file(s) failed to upload",
  menuNew: "New",
  menuNewFolder: "Folder",
  menuNewFile: "Text Document",
  viewHuge: "Extra large icons",
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
  svnLogEmpty: "No log yet",
  svnDiffTitle: "Diff \xB7 ",
  svnBlameTitle: "Blame \xB7 ",
  svnCheckoutUrlPlaceholder: "Repository URL (e.g. https://svn.example.com/svn/repo)",
  svnCheckoutTargetPlaceholder: "Checkout into local directory",
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
  terminalTab: "{n}",
  scrollLeft: "Scroll left",
  scrollRight: "Scroll right",
  termFontSmaller: "Smaller font",
  termFontLarger: "Larger font",
  termSearchPlaceholder: "Search terminal output\u2026",
  termSearchCase: "Match case",
  termSearchPrev: "Previous",
  termSearchNext: "Next",
  termSearchClose: "Close search",
  termCopyHint: "Ctrl+C copy \xB7 Ctrl+V paste \xB7 Ctrl+F search"
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
var import_jsx_runtime2 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: size, height: size, viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", className, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { x: "1.9", y: "2.9", width: "12.2", height: "10.2", rx: "1.6", stroke: "currentColor", strokeWidth: "1.3" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M 6.2 2.9 V 13.1", stroke: "currentColor", strokeWidth: "1.3" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "path",
      {
        d: "M 3.7 5.7 h 1.1 M 3.7 8 h 1.1 M 3.7 10.3 h 1.1",
        stroke: "currentColor",
        strokeWidth: "1.3",
        strokeLinecap: "round"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: size, height: size, viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", className, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { x: "1.7", y: "2.6", width: "12.6", height: "10.8", rx: "1.4", stroke: "currentColor", strokeWidth: "1.3" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M 5.1 2.6 V 13.4", stroke: "currentColor", strokeWidth: "1.3" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M 7 6.2 h 5.6 M 7 8.2 h 5.6 M 7 10.2 h 3.8", stroke: "currentColor", strokeWidth: "1.1", strokeLinecap: "round" })
  ] });
}
function apply(ctx) {
  const apiBase2 = `${window.location.origin}${PREFIX}`;
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
            title: () => n === 1 ? tr("tabVSCode") : `${tr("tabVSCode")} ${n}`,
            ...n === 1 ? {
              guide: [
                {
                  order: 101,
                  title: () => tr("tabVSCode"),
                  description: () => tr("tabVSCodeDesc"),
                  icon: VSCodeGlyph
                }
              ]
            } : {}
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
  if (!document.querySelector(`link[href="${apiBase2}/${"assets/style-Cn_fJL0n.css"}"]`)) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `${apiBase2}/${"assets/style-Cn_fJL0n.css"}`;
    document.head.appendChild(link);
  }
  if (!document.querySelector(`script[src="${apiBase2}/${"assets/index-Bkd5B2Lm.js"}"]`)) {
    const script = document.createElement("script");
    script.type = "module";
    script.src = `${apiBase2}/${"assets/index-Bkd5B2Lm.js"}`;
    document.head.appendChild(script);
  }
}
		module.exports = { apply, inject };
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map
