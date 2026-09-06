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
  // 侧栏标签
  tabFileWorkbench: "\u6587\u4EF6\u5DE5\u4F5C\u53F0",
  // 顶部工具栏 / 视图切换
  openFolder: "\u6253\u5F00\u6587\u4EF6\u5939",
  goUp: "\u8FD4\u56DE\u4E0A\u7EA7",
  refreshList: "\u5237\u65B0\u8D44\u6E90\u5217\u8868",
  noFolder: "\u672A\u6253\u5F00\u6587\u4EF6\u5939",
  goSessionDir: "\u56DE\u5230\u5F53\u524D\u4F1A\u8BDD\u76EE\u5F55",
  noSessionDir: "\u65E0\u6CD5\u83B7\u53D6\u5F53\u524D\u4F1A\u8BDD\u76EE\u5F55",
  closeTab: "\u5173\u95ED",
  scrollLeft: "\u5411\u5DE6\u6EDA\u52A8\u6807\u7B7E",
  scrollRight: "\u5411\u53F3\u6EDA\u52A8\u6807\u7B7E",
  viewExplorer: "\u8D44\u6E90\u7BA1\u7406\u5668",
  viewSearch: "\u641C\u7D22",
  clearSearch: "\u6E05\u9664\u641C\u7D22",
  expandHint: "\u4E0B\u62C9\u5C55\u5F00\u5DE5\u4F5C\u53F0",
  collapseHint: "\u4E0A\u6ED1\u6536\u8D77\u5DE5\u4F5C\u53F0",
  collapse: "\u6298\u53E0",
  noDirectoryPicker: "\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301\u7CFB\u7EDF\u76EE\u5F55\u9009\u62E9\u5668",
  quickAccess: "\u5FEB\u6377\u65B9\u5F0F",
  cancel: "\u53D6\u6D88",
  confirmOk: "\u786E\u5B9A",
  deleteTitle: "\u786E\u8BA4\u5220\u9664",
  selectFolderHere: "\u9009\u62E9\u6B64\u6587\u4EF6\u5939",
  scopeFollow: "\u8DDF\u968F\u5F53\u524D\u76EE\u5F55",
  scopePick: "\u6311\u9009\u641C\u7D22\u76EE\u5F55\u2026",
  searchScopeIn: "\u8303\u56F4\uFF1A",
  // 空态 / 提示
  pickFolderHint: "\u8BF7\u5148\u9009\u62E9\u4E00\u4E2A\u6587\u4EF6\u5939\u4F5C\u4E3A\u5DE5\u4F5C\u533A",
  pickFolder: "\u9009\u62E9\u6587\u4EF6\u5939",
  mainHint: "\u4ECE\u5DE6\u4FA7\u8D44\u6E90\u7BA1\u7406\u5668\u6253\u5F00\u6587\u4EF6\uFF0C\u6216\u4F7F\u7528\u641C\u7D22\u5FEB\u901F\u5B9A\u4F4D\u3002",
  promptRootPath: "\u8BF7\u8F93\u5165\u5DE5\u4F5C\u533A\u6839\u76EE\u5F55\u7684\u7EDD\u5BF9\u8DEF\u5F84\uFF1A",
  // 我的电脑浏览
  myComputer: "\u6211\u7684\u7535\u8111",
  sessionDir: "\u5F53\u524D\u4F1A\u8BDD",
  sessionFiles: "\u5F53\u524D\u4F1A\u8BDD\u76F8\u5173\u6587\u4EF6",
  emptySession: "\uFF08\u5F53\u524D\u4F1A\u8BDD\u6682\u65E0\u6587\u4EF6\uFF09",
  driveLabel: "\u672C\u5730\u78C1\u76D8 ({drive}:)",
  homeEntry: "\u7528\u6237",
  downloadEntry: "\u4E0B\u8F7D",
  documentEntry: "\u6587\u6863",
  pictureEntry: "\u56FE\u7247",
  videoEntry: "\u89C6\u9891",
  workspaceEntry: "\u5DE5\u4F5C\u533A",
  emptyDir: "\uFF08\u7A7A\uFF09",
  backUp: "\u8FD4\u56DE\u4E0A\u7EA7",
  goHome: "\u6211\u7684\u7535\u8111",
  colName: "\u540D\u79F0",
  colSize: "\u5927\u5C0F",
  colType: "\u7C7B\u578B",
  colModified: "\u4FEE\u6539\u65E5\u671F",
  typeFolder: "\u6587\u4EF6\u5939",
  typeFile: "\u6587\u4EF6",
  // 资源管理器
  treeTitle: "\u8D44\u6E90\u7BA1\u7406\u5668",
  newEntry: "\uFF0B \u65B0\u5EFA",
  deleteEntry: "\u5220\u9664",
  promptNewEntry: "\u65B0\u5EFA\u6587\u4EF6 \u2192 \u8F93\u5165\u5185\u5BB9\u5E76\u4EE5\u6362\u884C\u5206\u9694\u76EE\u5F55\uFF1A\n\u4F8B:  myfile.txt\n\u4F8B:  folder/ (\u76EE\u5F55\u4EE5 / \u7ED3\u5C3E)",
  renameEntry: "\u91CD\u547D\u540D\uFF1A",
  confirmDelete: '\u786E\u8BA4\u5220\u9664 "{name}" \uFF1F',
  brokenLink: "\u5931\u6548\u8F6F\u94FE\u63A5",
  symlink: "\u7B26\u53F7\u94FE\u63A5",
  loading: "\u52A0\u8F7D\u4E2D\u2026",
  brokenCantExpand: "\uFF08\u5931\u6548\u94FE\u63A5\uFF0C\u65E0\u6CD5\u5C55\u5F00\uFF09",
  // 编辑器
  unsaved: " \xB7 \u672A\u4FDD\u5B58",
  modeEdit: "\u7F16\u8F91",
  modePreview: "\u9884\u89C8",
  modeSplit: "\u5206\u5C4F",
  reload: "\u21BB \u91CD\u8F7D",
  save: "\u4FDD\u5B58",
  editPlaceholder: "\u7F16\u8F91 {name}",
  renderFailed: "\u6E32\u67D3\u5931\u8D25",
  outline: "\u5927\u7EB2",
  outlineCollapse: "\u6536\u8D77\u5927\u7EB2",
  outlineExpand: "\u5C55\u5F00\u5927\u7EB2",
  // Markdown 渲染增强（mermaid / KaTeX）
  mdMermaidError: "\u6D41\u7A0B\u56FE\u6E32\u67D3\u5931\u8D25",
  mdMermaidLoading: "\u52A0\u8F7D\u6D41\u7A0B\u56FE\u2026",
  // 预览
  kindImage: "\u56FE\u7247",
  kindHtml: "HTML \u9884\u89C8",
  kindText: "\u6587\u672C",
  kindMarkdown: "Markdown",
  htmlSandboxNote: "HTML \u4EE5\u6C99\u7BB1\u53EA\u8BFB\u9884\u89C8\uFF1B\u8981\u7F16\u8F91\u8BF7\u6539\u7528\u7F16\u8F91\u5668\u3002",
  kindDocx: "Word \u6587\u6863",
  kindDoc: "Word \u6587\u6863\uFF08\u65E7\u7248 .doc\uFF09",
  kindXlsx: "Excel \u8868\u683C",
  officeSandboxNote: "Office \u6587\u6863\u4EE5\u6C99\u7BB1\u53EA\u8BFB\u9884\u89C8\uFF0C\u4E0D\u652F\u6301\u7F16\u8F91\u3002",
  kindAudio: "\u97F3\u9891",
  kindVideo: "\u89C6\u9891",
  kindDownload: "\u6587\u4EF6",
  download: "\u4E0B\u8F7D",
  detailType: "\u7C7B\u578B",
  detailWords: "\u5B57\u6570",
  // 结构化数据编辑（网格 CSV / TSV / 数据库式）
  gridTitle: "\u8868\u683C",
  gridAddRow: "+ \u884C",
  gridAddCol: "+ \u5217",
  gridDelLastRow: "\u5220\u6700\u540E\u4E00\u884C",
  gridDelLastCol: "\u5220\u6700\u540E\u4E00\u5217",
  gridReparse: "\u91CD\u65B0\u89E3\u6790",
  gridRows: "\u884C",
  gridCols: "\u5217",
  gridSort: "\u6392\u5E8F",
  gridResize: "\u62D6\u52A8\u8C03\u6574\u5217\u5BBD",
  gridSummary: "\u6C47\u603B",
  gridCount: "\u8BA1\u6570",
  gridSum: "\u603B\u548C",
  gridAvg: "\u5747\u503C",
  gridMin: "\u6700\u5C0F",
  gridMax: "\u6700\u5927",
  gridDistinct: "\u53BB\u91CD",
  gridTypeText: "\u6587\u672C",
  gridTypeNumber: "\u6570\u5B57",
  gridTypeDate: "\u65E5\u671F",
  gridTypeSelect: "\u4E0B\u62C9",
  // xlsx 可编辑网格
  xlsxSheet: "\u5DE5\u4F5C\u8868",
  xlsxAddSheet: "+ \u8868",
  xlsxDelSheet: "\u5220\u8868",
  xlsxSheetNamePlaceholder: "\u5DE5\u4F5C\u8868\u540D\u79F0",
  xlsxSaveDone: "Excel \u5DF2\u4FDD\u5B58",
  xlsxParseError: "\u65E0\u6CD5\u89E3\u6790 xlsx \u6587\u4EF6",
  // JSON 编辑器
  jsonTitle: "JSON",
  jsonFormat: "\u683C\u5F0F\u5316",
  jsonValidate: "\u6821\u9A8C",
  jsonTree: "\u6811",
  jsonForm: "\u8868\u5355",
  jsonText: "\u6587\u672C",
  jsonTable: "\u8868\u683C",
  jsonLoaded: "\u5DF2\u52A0\u8F7D",
  jsonFormatted: "\u5DF2\u683C\u5F0F\u5316",
  jsonValid: "JSON \u6709\u6548",
  jsonNotValid: "\u975E\u6CD5 JSON\uFF0C\u8BF7\u68C0\u67E5\u540E\u91CD\u8BD5",
  jsonEditorUnavailable: "\u5BCC\u7F16\u8F91\u5668\u5728\u6B64\u73AF\u5883\u4E0D\u53EF\u7528\uFF0C\u5DF2\u5207\u6362\u4E3A\u6587\u672C\u7F16\u8F91",
  statusItems: "\u9879",
  // 搜索
  searchTitle: "\u641C\u7D22\u6587\u4EF6\u540D/\u5185\u5BB9",
  searchPlaceholder: "\u8F93\u5165\u5173\u952E\u5B57\u2026",
  searchChatPlaceholder: "\u641C\u7D22\u804A\u5929\u8BB0\u5F55\u2026",
  searchModeFile: "\u6587\u4EF6",
  searchModeChat: "\u804A\u5929",
  chatHitBadge: "\u4F1A\u8BDD",
  chatMessageBadge: "\u6D88\u606F\u547D\u4E2D",
  chatHitEmpty: "\u6CA1\u6709\u627E\u5230\u5339\u914D\u7684\u804A\u5929\u8BB0\u5F55\u3002",
  chatSearchDisabled: "\u5F53\u524D\u90E8\u7F72\u672A\u5F00\u653E\u4F1A\u8BDD\u68C0\u7D22\uFF0C\u65E0\u6CD5\u641C\u7D22\u804A\u5929\u8BB0\u5F55",
  search: "\u641C\u7D22",
  searching: "\u641C\u7D22\u4E2D\u2026",
  searchCase: "\u533A\u5206\u5927\u5C0F\u5199",
  searchRegex: "\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D",
  searchIdle: "\u5728\u9876\u90E8\u641C\u7D22\u6846\u8F93\u5165\u5173\u952E\u5B57\uFF0C\u5B9E\u65F6\u5339\u914D\u6587\u4EF6\u540D\u4E0E\u6587\u4EF6\u5185\u5BB9\u3002",
  resultsCount: "{count} \u4E2A\u7ED3\u679C",
  resultsSuffixTruncated: "\uFF08\u5DF2\u622A\u65AD\uFF09",
  hitTitle: "\u53F3\u952E\u5728\u8D44\u6E90\u7BA1\u7406\u5668\u4E2D\u5B9A\u4F4D\\\u5DE6\u952E\u6253\u5F00",
  matchContent: "\u5185\u5BB9\u5339\u914D",
  matchName: "\u6587\u4EF6\u540D\u5339\u914D",
  // 跨文件批量替换
  searchReplaceAll: "\u6279\u91CF\u66FF\u6362",
  searchReplaceTitle: "\u786E\u8BA4\u6279\u91CF\u66FF\u6362",
  searchReplaceConfirm: "\u5C06\u5728 {files} \u4E2A\u6587\u4EF6\u4E2D\u66FF\u6362 {count} \u5904\u5339\u914D\uFF0C\u6B64\u64CD\u4F5C\u4E0D\u53EF\u64A4\u9500\uFF0C\u786E\u5B9A\u7EE7\u7EED\uFF1F",
  searchReplaceBusy: "\u6B63\u5728\u66FF\u6362\u2026",
  searchReplaceDone: "\u5DF2\u66FF\u6362 {files} \u4E2A\u6587\u4EF6\uFF08{count} \u5904\uFF09",
  searchReplaceStaleSkipped: "\u4EE5\u4E0B\u6587\u4EF6\u6709\u672A\u4FDD\u5B58\u66F4\u6539\uFF0C\u672A\u81EA\u52A8\u5237\u65B0\uFF1A{names}",
  // toast / 操作反馈
  openFolderFirst: "\u8BF7\u5148\u6253\u5F00\u6587\u4EF6\u5939",
  dirCreated: "\u76EE\u5F55\u5DF2\u521B\u5EFA",
  fileCreated: "\u6587\u4EF6\u5DF2\u521B\u5EFA",
  renamed: "\u5DF2\u91CD\u547D\u540D",
  deleted: "\u5DF2\u5220\u9664",
  saved: "\u5DF2\u4FDD\u5B58",
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
  menuCut: "\u526A\u5207",
  menuCopy: "\u590D\u5236",
  menuRename: "\u91CD\u547D\u540D",
  menuDelete: "\u5220\u9664",
  menuCopyPath: "\u590D\u5236\u5B8C\u6574\u8DEF\u5F84",
  menuProperties: "\u5C5E\u6027",
  menuCutDone: "\u5DF2\u526A\u5207\u5230\u526A\u8D34\u677F",
  menuCopyDone: "\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F",
  dropExternalUnsupported: "\u5916\u90E8\u62D6\u5165\u6682\u4E0D\u652F\u6301",
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
  viewMedium: "\u4E2D\u7B49\u56FE\u6807",
  viewList: "\u5217\u8868",
  viewDetails: "\u8BE6\u7EC6\u4FE1\u606F",
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
  autoSave: "\u81EA\u52A8\u4FDD\u5B58",
  showHidden: "\u663E\u793A\u9690\u85CF\u6587\u4EF6",
  defaultView: "\u9ED8\u8BA4\u89C6\u56FE",
  themeMode: "\u4E3B\u9898",
  themeAuto: "\u8DDF\u968F\u7CFB\u7EDF",
  themeDark: "\u6DF1\u8272",
  themeLight: "\u6D45\u8272",
  style: "\u754C\u9762\u98CE\u683C",
  styleClassic: "\u7ECF\u5178",
  styleMacos: "macOS",
  /* macOS 菜单栏 */
  macMenuFile: "\u6587\u4EF6",
  macMenuView: "\u89C6\u56FE",
  macMenuWindow: "\u7A97\u53E3",
  macMenuHelp: "\u5E2E\u52A9",
  macMenuSettings: "\u8BBE\u7F6E",
  macMenuUp: "\u4E0A\u4E00\u6B65",
  macMenuShortcuts: "\u952E\u76D8\u5FEB\u6377\u952E \u21E7?",
  macMenuLayouts: "\u5E03\u5C40\u683C\u5F0F",
  macMenuPanels: "\u9762\u677F",
  macMenuOpenModule: "\u6253\u5F00",
  macMenuResetDefault: "\u91CD\u7F6E\u9ED8\u8BA4\u6BD4\u4F8B",
  macMenuSnapshot: "\u5E03\u5C40\u5FEB\u7167",
  macMenuSnapshotDone: "\u5DF2\u4FDD\u5B58\u5E03\u5C40\u5FEB\u7167",
  macMenuSnapshotApplied: "\u5DF2\u6062\u590D\u5E03\u5C40\u5FEB\u7167",
  macMenuSnapshotRestore: "\u6062\u590D\u5FEB\u7167",
  macSearchFile: "\u6587\u4EF6",
  macSearchChat: "\u804A\u5929",
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
  // 代码缩略图（Minimap）
  mmEnable: "\u4EE3\u7801\u7F29\u7565\u56FE",
  mmRenderChars: "\u5448\u73B0\u5B57\u7B26",
  mmSize: "\u5782\u76F4\u5927\u5C0F",
  mmSizeProportional: "\u6309\u6BD4\u4F8B",
  mmSizeFill: "\u586B\u5145",
  mmSizeFit: "\u9002\u5E94",
  mmSlider: "\u6ED1\u5757\u663E\u793A",
  mmSliderMouseover: "\u9F20\u6807\u60AC\u505C\u663E\u793A",
  mmSliderAlways: "\u59CB\u7EC8\u663E\u793A",
  // 命令面板（Ctrl+K）
  cmdBaton: "\u547D\u4EE4\u9762\u677F",
  cmdPlaceholder: "\u8F93\u5165\u547D\u4EE4\u540D\u79F0\uFF08\u5982\uFF1A\u4FDD\u5B58 / \u5237\u65B0 / \u56FE\u7247\u6805\u683C\uFF09\u2026",
  cmdEmpty: "\u65E0\u5339\u914D\u547D\u4EE4",
  // 快捷键帮助面板（? 键）
  shortcutHelp: "\u5FEB\u6377\u952E",
  shortcutHint: "\u6309 ? \u968F\u65F6\u5524\u8D77\uFF0C\u6309 Esc \u5173\u95ED",
  shortcutGlobal: "\u5168\u5C40",
  shortcutFileList: "\u6587\u4EF6\u5217\u8868",
  shortcutEditor: "\u7F16\u8F91\u5668",
  shortcutChat: "AI \u5BF9\u8BDD",
  shGlobalPalette: "\u6253\u5F00\u547D\u4EE4\u9762\u677F",
  shGlobalSave: "\u4FDD\u5B58\u5F53\u524D\u6587\u4EF6",
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
  shEditUndo: "\u64A4\u9500",
  shEditRedo: "\u91CD\u505A",
  shChatSend: "\u53D1\u9001\u6D88\u606F",
  shChatNewline: "\u63D2\u5165\u6362\u884C",
  // 终端
  terminal: "\u7EC8\u7AEF",
  terminalTitle: "\u7EC8\u7AEF (Cmd)",
  terminalClear: "\u6E05\u5C4F",
  terminalClose: "\u5173\u95ED",
  terminalNew: "\u65B0\u5EFA\u7EC8\u7AEF",
  terminalShellSwitch: "\u5207\u6362\u65B0\u7EC8\u7AEF\u9ED8\u8BA4 Shell\uFF08cmd / PowerShell\uFF09\uFF0C\u4EC5\u5BF9\u65B0\u521B\u5EFA\u7684\u7EC8\u7AEF\u751F\u6548",
  terminalCloseTitle: "\u5173\u95ED\u7EC8\u7AEF\u7A97\u53E3",
  terminalResizeTitle: "\u62D6\u52A8\u8C03\u6574\u5927\u5C0F\uFF0C\u53CC\u51FB\u6062\u590D\u9ED8\u8BA4",
  terminalMinimize: "\u6700\u5C0F\u5316",
  dockMinimized: "\u5DF2\u6700\u5C0F\u5316",
  dockRestore: "\u6062\u590D\u7A97\u53E3",
  statusReady: "\u5C31\u7EEA",
  notifySaved: "\u5DF2\u4FDD\u5B58",
  terminalTab: "\u7EC8\u7AEF {n}",
  termSearchPlaceholder: "\u641C\u7D22\u7EC8\u7AEF\u8F93\u51FA\u2026",
  termSearchPrev: "\u4E0A\u4E00\u4E2A\u5339\u914D\uFF08Shift+Enter\uFF09",
  termSearchNext: "\u4E0B\u4E00\u4E2A\u5339\u914D\uFF08Enter\uFF09",
  termSearchCase: "\u533A\u5206\u5927\u5C0F\u5199",
  termSearchClose: "\u5173\u95ED\u641C\u7D22\uFF08Esc\uFF09",
  termFontSmaller: "\u51CF\u5C0F\u5B57\u53F7\uFF08Ctrl+-\uFF09",
  termFontLarger: "\u589E\u5927\u5B57\u53F7\uFF08Ctrl+=\uFF09",
  termCopyHint: "Ctrl+C \u590D\u5236\u9009\u4E2D\u5185\u5BB9\uFF08\u65E0\u9009\u4E2D\u5219\u53D1\u9001\u4E2D\u65AD\u4FE1\u53F7\uFF09\uFF0CCtrl+V \u7C98\u8D34\uFF0CCtrl+F \u641C\u7D22",
  // 编辑器：未保存 / 撤销重做 / 导出 / 外部改动
  closeUnsavedTitle: "\u6709\u672A\u4FDD\u5B58\u7684\u66F4\u6539",
  closeUnsavedMsg: "\u300C{name}\u300D\u6709\u672A\u4FDD\u5B58\u7684\u66F4\u6539\uFF0C\u786E\u5B9A\u5173\u95ED\uFF1F",
  exportHtml: "\u5BFC\u51FA HTML",
  exportPdf: "\u5BFC\u51FA PDF",
  exportPdfBusy: "\u6B63\u5728\u751F\u6210 PDF\u2026",
  exportPdfDone: "PDF \u5DF2\u4E0B\u8F7D\u5230\u4E0B\u8F7D\u76EE\u5F55",
  changedExternally: "\u6587\u4EF6\u5DF2\u5728\u78C1\u76D8\u4E0A\u88AB\u4FEE\u6539\uFF0C\u5DF2\u91CD\u65B0\u52A0\u8F7D",
  undo: "\u64A4\u9500",
  redo: "\u91CD\u505A",
  autoSaved: "\u5DF2\u81EA\u52A8\u4FDD\u5B58",
  // 编辑器查找 / 替换
  findPlaceholder: "\u67E5\u627E\u2026",
  findReplacePlaceholder: "\u66FF\u6362\u4E3A\u2026",
  findCase: "\u533A\u5206\u5927\u5C0F\u5199",
  findRegex: "\u6B63\u5219",
  findPrev: "\u4E0A\u4E00\u4E2A\u5339\u914D\uFF08Shift+Enter\uFF09",
  findNext: "\u4E0B\u4E00\u4E2A\u5339\u914D\uFF08Enter\uFF09",
  findClose: "\u5173\u95ED\u67E5\u627E\uFF08Esc\uFF09",
  findReplace: "\u66FF\u6362",
  findReplaceAll: "\u5168\u90E8\u66FF\u6362",
  findNoMatches: "\u65E0\u5339\u914D",
  findCurrent: "{index}/{total}",
  // 最近打开 / 收藏
  recentFiles: "\u6700\u8FD1\u6253\u5F00",
  clearRecent: "\u6E05\u9664\u6700\u8FD1",
  favorites: "\u6536\u85CF",
  favoriteAdd: "\u6536\u85CF",
  favoriteRemove: "\u53D6\u6D88\u6536\u85CF",
  favoriteAdded: "\u5DF2\u6536\u85CF",
  favoriteRemoved: "\u5DF2\u53D6\u6D88\u6536\u85CF",
  emptyFavorites: "\uFF08\u6682\u65E0\u6536\u85CF\uFF09",
  emptyRecent: "\uFF08\u6682\u65E0\u6700\u8FD1\u8BB0\u5F55\uFF09",
  // 标签页增强
  pinTab: "\u9489\u4F4F",
  unpinTab: "\u53D6\u6D88\u9489\u4F4F",
  closeOthers: "\u5173\u95ED\u5176\u4ED6",
  closeAll: "\u5173\u95ED\u5168\u90E8",
  closeOthersDone: "\u5DF2\u5173\u95ED\u5176\u4ED6\u6807\u7B7E",
  closeAllDone: "\u5DF2\u5173\u95ED\u5168\u90E8\u6807\u7B7E",
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
  // 文件对比（diff）
  menuCompare: "\u4E0E\u2026\u5BF9\u6BD4",
  menuCompareWithFirst: "\u4E0E\u300C{name}\u300D\u5BF9\u6BD4",
  diffTitle: "\u6587\u4EF6\u5BF9\u6BD4",
  diffWaitSelect: "\u8BF7\u5148\u9009\u62E9\u57FA\u51C6\u6587\u4EF6",
  diffFrom: "\u57FA\u51C6",
  diffTo: "\u5BF9\u6BD4",
  diffEqual: "\u5185\u5BB9\u4E00\u81F4",
  diffRemoved: "\u5220\u9664",
  diffAdded: "\u65B0\u589E",
  diffSwitchFirst: "\u5207\u6362\u57FA\u51C6",
  diffBaseline: "\u57FA\u51C6",
  resetCompare: "\u91CD\u65B0\u5BF9\u6BD4",
  diffCompareWith: "\u4E0E {name} \u5BF9\u6BD4",
  diffBasePending: "\u5DF2\u8BBE\u4E3A\u5BF9\u6BD4\u57FA\u51C6\uFF0C\u7B49\u5F85\u9009\u62E9\u7B2C\u4E8C\u4E2A\u6587\u4EF6",
  // 子 agent 委派
  menuSubagent: "\u7528\u5B50 agent \u5904\u7406",
  menuAiQuick: "AI \u5FEB\u6377\u64CD\u4F5C",
  aiExplain: "\u89E3\u91CA",
  aiSummarize: "\u603B\u7ED3\u8981\u70B9",
  aiReview: "\u5BA1\u67E5 / \u627E\u95EE\u9898",
  aiExplainPrompt: "\u8BF7\u89E3\u91CA\u8FD9\u4E2A\u76EE\u6807\uFF1A\u8BF4\u660E\u5B83\u7684\u4F5C\u7528\u3001\u5173\u952E\u903B\u8F91\u548C\u4F7F\u7528\u65B9\u5F0F\u3002",
  aiSummarizePrompt: "\u8BF7\u603B\u7ED3\u8FD9\u4E2A\u76EE\u6807\u7684\u6838\u5FC3\u5185\u5BB9\u548C\u8981\u70B9\uFF0C\u7B80\u660E\u627C\u8981\u3002",
  aiReviewPrompt: "\u8BF7\u5BA1\u67E5\u8FD9\u4E2A\u76EE\u6807\uFF0C\u6307\u51FA\u53EF\u80FD\u5B58\u5728\u7684\u95EE\u9898\u3001\u5F85\u6539\u8FDB\u4E4B\u5904\u4EE5\u53CA\u6F5C\u5728\u7684 bug\u3002",
  subagentPromptTitle: "\u7528\u5B50 agent \u5904\u7406",
  subagentPromptPlaceholder: "\u8F93\u5165\u8981\u5B50 agent \u5BF9\u8FD9\u4E2A\u76EE\u6807\u6267\u884C\u7684\u5904\u7406\u8981\u6C42\u2026",
  subagentRunning: "\u5B50 agent \u5904\u7406\u4E2D\u2026",
  subagentResultTitle: "\u5B50 agent \u5904\u7406\u7ED3\u679C",
  subagentReady: "\u5B8C\u6210",
  subagentFailed: "\u5931\u8D25",
  subagentError: "\u51FA\u9519",
  subagentOutputEmpty: "\uFF08\u5B50 agent \u672A\u8FD4\u56DE\u5185\u5BB9\uFF09",
  subagentCopy: "\u590D\u5236\u7ED3\u679C",
  subagentCopyDone: "\u5DF2\u590D\u5236",
  subagentClose: "\u5173\u95ED",
  subagentRunId: "\u8FD0\u884C id",
  subagentChatTitle: "\u5B50 agent \u5BF9\u8BDD",
  subagentChatCount: "\u5B50 agent \u5BF9\u8BDD ({count})",
  subagentChatNotice: "\u63D0\u793A\uFF1A\u6BCF\u6B21\u53D1\u9001\u90FD\u4F1A\u751F\u6210\u4E00\u4E2A\u65B0\u7684\u5B50\u4EE3\u7406\u6765\u6267\u884C\u3002\u5BF9\u8BDD\u770B\u4F3C\u8FDE\u8D2F\uFF0C\u5B9E\u5219\u662F\u628A\u6BCF\u4E00\u6761\u6D88\u606F\u90FD\u4EA4\u7ED9\u91CD\u65B0\u542F\u52A8\u7684\u5B50\u4EE3\u7406\uFF08\u5E76\u643A\u5E26\u6B64\u524D\u4E0A\u4E0B\u6587\uFF09\u5904\u7406\u3002",
  subagentNewPerTurn: "\u672C\u6761\u6D88\u606F\u5DF2\u7531\u4E00\u4E2A\u65B0\u751F\u6210\u7684\u5B50\u4EE3\u7406\u6267\u884C",
  subagentChatEmptyHint: "\u5728\u8FD9\u4E2A\u5BF9\u8BDD\u91CC\u8F93\u5165\u6307\u4EE4\uFF0C\u8BA9\u5B50 agent \u5BF9\u6240\u9009\u76EE\u6807\u5904\u7406\u3002\u6BCF\u8F6E\u90FD\u4F1A\u628A\u524D\u9762\u7684\u5BF9\u8BDD\u4E00\u5E76\u5E26\u4E0A\uFF0C\u53EF\u8FDE\u7EED\u8FFD\u95EE\u3002",
  subagentYou: "\u4F60",
  subagentAi: "\u5B50 agent",
  subagentUserRole: "\u7528\u6237",
  subagentAiRole: "\u5B50 agent",
  subagentDate: "\u65E5\u671F",
  subagentTokens: "tokens",
  subagentCopyTitle: "\u590D\u5236",
  subagentCopied: "\u5DF2\u590D\u5236",
  subagentPacksNote: "\u7684\u5185\u5BB9\u4F1A\u4E00\u5E76\u6253\u5305\u7ED9\u5B50 agent \u8BC6\u522B",
  subagentInputPlaceholder: "\u8F93\u5165\u8981\u5B50 agent \u505A\u4EC0\u4E48\u2026\uFF08Enter \u53D1\u9001\uFF0CShift+Enter \u6362\u884C\uFF09",
  subagentSend: "\u53D1\u9001",
  subagentNoTarget: "\u5C1A\u672A\u9009\u62E9\u76EE\u6807\uFF08\u5728\u6587\u4EF6/\u6587\u4EF6\u5939\u4E0A\u53F3\u952E \u2192 \u7528\u5B50 agent \u5904\u7406\uFF09",
  subagentNew: "\u65B0\u5EFA\u5B50\u4EE3\u7406",
  subagentListEmpty: "\u8FD8\u6CA1\u6709\u5B50\u4EE3\u7406\u3002\u5728\u6587\u4EF6/\u6587\u4EF6\u5939\u4E0A\u53F3\u952E \u2192 \u7528\u5B50 agent \u5904\u7406\u5373\u53EF\u521B\u5EFA\u3002",
  subagentRenameTitle: "\u4FEE\u6539\u5B50\u4EE3\u7406\u540D\u79F0",
  subagentRenamePlaceholder: "\u8F93\u5165\u65B0\u540D\u79F0",
  subagentClear: "\u6E05\u7A7A\u5BF9\u8BDD",
  subagentCloseTitle: "\u5173\u95ED\u5E76\u6E05\u9664\u8BE5\u5B50\u4EE3\u7406",
  // 自由 AI 对话
  menuAIChat: "AI \u5BF9\u8BDD",
  aiChatMainNote: "\u4E0E\u4E3B\u4F1A\u8BDD\u5BF9\u8BDD",
  aiChatMainEmptyHint: "\u8FD9\u662F\u5F53\u524D\u4F1A\u8BDD\uFF08\u4E3B\u9875\uFF09\u7684\u5BF9\u8BDD\u3002\u76F4\u63A5\u8F93\u5165\u5373\u53EF\u53D1\u9001\u5230\u4E3B\u4F1A\u8BDD\uFF0C\u56DE\u590D\u4F1A\u5B9E\u65F6\u663E\u793A\u5728\u6B64\uFF0C\u4E0E\u4E3B\u9875\u5B8C\u5168\u4E00\u81F4\u3002",
  aiChatRoleUser: "\u7528\u6237",
  aiChatRoleAi: "AI \u52A9\u624B",
  aiChatInputPlaceholder: "\u8F93\u5165\u6D88\u606F\u2026\uFF08Enter \u53D1\u9001\uFF0CShift+Enter \u6362\u884C\uFF09",
  aiChatSend: "\u53D1\u9001",
  aiChatStop: "\u505C\u6B62",
  aiChatCopyTitle: "\u590D\u5236",
  aiChatCopied: "\u5DF2\u590D\u5236",
  aiChatStopped: "\u5DF2\u505C\u6B62",
  aiChatResizeTitle: "\u62D6\u52A8\u8C03\u6574\u5927\u5C0F\uFF0C\u53CC\u51FB\u6062\u590D\u9ED8\u8BA4",
  aiChatReasoning: "\u601D\u8003\u8FC7\u7A0B",
  aiChatToolDone: "\u5B8C\u6210",
  aiChatToolError: "\u51FA\u9519",
  aiChatAttach: "\u6DFB\u52A0\u56FE\u7247",
  aiChatRemoveImage: "\u79FB\u9664\u56FE\u7247",
  aiChatPasteImageHint: "\u53EF\u7C98\u8D34\u622A\u56FE\u6216\u9009\u62E9\u56FE\u7247\u968F\u6D88\u606F\u53D1\u9001",
  aiChatDragImageHint: "\uFF0C\u6216\u5C06\u56FE\u7247\u62D6\u5165\u9762\u677F\u53D1\u9001",
  aiChatFileRef: "\u5F15\u7528\u6587\u4EF6",
  aiChatFileRefTruncated: "\uFF08\u5185\u5BB9\u8FC7\u957F\u5DF2\u622A\u65AD\uFF09",
  aiChatTimeline: "\u5DE5\u5177\u8C03\u7528\u65F6\u95F4\u7EBF",
  taskFabTitle: "\u540E\u53F0\u4EFB\u52A1",
  taskPanelTitle: "\u540E\u53F0\u4EFB\u52A1",
  taskRunning: "\u8FD0\u884C\u4E2D",
  taskHistory: "\u5386\u53F2",
  taskNoneShort: "\u65E0\u4EFB\u52A1",
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
  taskUploading: "\u4E0A\u4F20\u6587\u4EF6",
  taskCompressing: "\u538B\u7F29",
  taskExtracting: "\u89E3\u538B",
  taskCopying: "\u590D\u5236",
  taskMoving: "\u79FB\u52A8",
  taskDeleting: "\u5220\u9664",
  // 会话活动（技能/活动只读面板）
  panelActivity: "\u4F1A\u8BDD\u6D3B\u52A8",
  // 会话任务面板
  panelTask: "\u4F1A\u8BDD\u4EFB\u52A1",
  taskListTitle: "\u4F1A\u8BDD\u4EFB\u52A1",
  taskGroupSession: "\u4F1A\u8BDD\u4EFB\u52A1",
  taskGroupSubagent: "\u5B50\u4EE3\u7406\u4EFB\u52A1",
  taskTurnLabel: "AI \u56DE\u5408",
  saEmpty: "\uFF08\u8BE5\u5B50\u4EE3\u7406\u6682\u65E0\u5BF9\u8BDD\uFF09",
  saUser: "\u4F60",
  saAi: "\u5B50\u4EE3\u7406",
  taskToolCount: "\u5DE5\u5177",
  taskReasoning: "\u601D\u8003 / \u63A8\u7406",
  taskTools: "\u5DE5\u5177\u8C03\u7528",
  taskOutput: "\u8F93\u51FA\u6587\u672C",
  taskSelectHint: "\u8BF7\u9009\u62E9\u5DE6\u4FA7\u4EFB\u52A1\u67E5\u770B\u8BE6\u60C5",
  taskInterrupted: "\u5DF2\u505C\u6B62",
  taskToolOk: "\u5DF2\u5B8C\u6210",
  taskToolError: "\u51FA\u9519",
  actHint: "\u672C\u4F1A\u8BDD\u7528\u5230\u7684\u5DE5\u5177\u4E0E\u89E6\u78B0\u7684\u6587\u4EF6",
  actTools: "\u4F7F\u7528\u5DE5\u5177",
  actFiles: "\u89E6\u78B0\u6587\u4EF6",
  actToolCalls: "\u6B21\u8C03\u7528",
  actToolErrors: "\u6B21\u51FA\u9519",
  actNoTools: "\u672C\u4F1A\u8BDD\u5C1A\u672A\u8C03\u7528\u5DE5\u5177",
  actNoFiles: "\u5C1A\u65E0\u5DE5\u5177\u89E6\u78B0\u6587\u4EF6",
  actCallArgs: "\u53C2\u6570",
  actCallError: "\u51FA\u9519",
  gitMenu: "Git",
  gitAdd: "\u6682\u5B58 (git add)",
  gitCommit: "\u63D0\u4EA4 (git commit)",
  gitCommitting: "\u63D0\u4EA4\u4E2D\u2026",
  gitCommitTitle: "Git \u63D0\u4EA4",
  gitCommitPlaceholder: "\u8F93\u5165\u63D0\u4EA4\u4FE1\u606F\u2026",
  gitCommitted: "\u5DF2\u63D0\u4EA4",
  gitCommitFailed: "\u63D0\u4EA4\u5931\u8D25",
  gitAdded: "\u5DF2\u6682\u5B58",
  gitDiscard: "\u8FD8\u539F\u6539\u52A8",
  gitDiscardTitle: "\u786E\u8BA4\u8FD8\u539F",
  gitDiscardMsg: '\u4E22\u5F03 "{name}" \u7684\u5DE5\u4F5C\u533A\u6539\u52A8\uFF08git checkout --\uFF09\uFF1F',
  gitDiscarded: "\u5DF2\u8FD8\u539F",
  gitDiff: "\u67E5\u770B\u6539\u52A8",
  gitDiffTitle: "Git \u6539\u52A8",
  gitDiffEmpty: "\uFF08\u65E0\u53EF\u7528\u6539\u52A8\uFF09",
  gitDiffClose: "\u5173\u95ED",
  gitStatusColon: "Git: {branch}",
  gitBadgeUntracked: "\u672A\u8DDF\u8E2A\u7684\u65B0\u6587\u4EF6",
  gitBadgeAdded: "\u65B0\u6DFB\u52A0\u5230\u6682\u5B58\u533A",
  gitBadgeModified: "\u5DF2\u4FEE\u6539",
  gitBadgeDeleted: "\u5DF2\u5220\u9664",
  gitNotRepo: "\u4E0D\u5728 git \u4ED3\u5E93",
  gitPanel: "\u6253\u5F00 Git \u9762\u677F",
  gitPanelTitle: "Git \u9762\u677F",
  gitTabStatus: "\u72B6\u6001",
  gitTabLog: "\u5386\u53F2",
  gitTabBranch: "\u5206\u652F",
  gitTabCli: "\u547D\u4EE4\u53F0",
  gitTabStash: "\u6682\u5B58",
  gitStashCreate: "\u6682\u5B58",
  gitStashPlaceholder: "\u6682\u5B58\u8BF4\u660E\uFF08\u53EF\u9009\uFF09",
  gitStashEmpty: "\u5F53\u524D\u6CA1\u6709\u6682\u5B58\u7684\u66F4\u6539",
  gitStashApply: "\u5E94\u7528",
  gitStashPop: "\u5F39\u51FA",
  gitStashDrop: "\u5220\u9664\u6682\u5B58",
  gitStashClear: "\u6E05\u7A7A",
  gitStashCreated: "\u5DF2\u6682\u5B58\u66F4\u6539",
  gitStashApplied: "\u5DF2\u5E94\u7528\u6682\u5B58",
  gitStashPopped: "\u5DF2\u5F39\u51FA\u6682\u5B58",
  gitStashDropped: "\u5DF2\u5220\u9664\u6682\u5B58",
  gitStashCleared: "\u5DF2\u6E05\u7A7A\u6240\u6709\u6682\u5B58",
  gitStashDropMsg: "\u786E\u5B9A\u5220\u9664\u6682\u5B58\u9879 {ref}\uFF1F",
  gitStashClearMsg: "\u786E\u5B9A\u6E05\u7A7A\u6240\u6709\u6682\u5B58\uFF1F\u6B64\u64CD\u4F5C\u4E0D\u53EF\u6062\u590D\u3002",
  gitGroupUnstaged: "\u672A\u6682\u5B58",
  gitGroupStaged: "\u5DF2\u6682\u5B58",
  gitGroupUntracked: "\u672A\u8DDF\u8E2A",
  gitClean: "\u5DE5\u4F5C\u533A\u5E72\u51C0\uFF0C\u6CA1\u6709\u6539\u52A8",
  gitNoChanges: "\u6CA1\u6709\u5DF2\u6682\u5B58\u7684\u6539\u52A8\uFF0C\u65E0\u6CD5\u63D0\u4EA4",
  gitLoading: "\u52A0\u8F7D\u4E2D\u2026",
  gitRemoteColon: "\u672C\u5730: ",
  gitMessageLabel: "\u63D0\u4EA4\u8BF4\u660E",
  gitFilesLabel: "\u6539\u52A8\u6587\u4EF6",
  gitLogEmpty: "\u6682\u65E0\u63D0\u4EA4\u8BB0\u5F55",
  gitUnstage: "\u53D6\u6D88\u6682\u5B58",
  gitAddShort: "\u6682\u5B58",
  gitCheckout: "\u5207\u6362",
  gitDelete: "\u5220\u9664",
  gitBranchNew: "\u8F93\u5165\u65B0\u5206\u652F\u540D\u2026",
  gitBranchCreated: "\u5DF2\u521B\u5EFA\u5E76\u5207\u6362\u5206\u652F {name}",
  gitBranchDeleteMsg: "\u786E\u5B9A\u5220\u9664\u5206\u652F {name} \u5417\uFF1F",
  gitCliPlaceholder: "\u8F93\u5165 git \u547D\u4EE4\uFF08\u65E0\u987B g\u200Cit \u524D\u7F00\uFF09\uFF0C\u56DE\u8F66\u6267\u884C",
  gitRun: "\u8FD0\u884C",
  gitStageAll: "\u5168\u90E8\u6682\u5B58",
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
  // 停靠布局（dockview）：面板菜单 / 重置
  panelMenu: "\u9762\u677F",
  resetLayout: "\u91CD\u7F6E\u5E03\u5C40",
  panelFile: "\u6587\u4EF6",
  panelEditor: "\u7F16\u8F91\u5668",
  panelAgent: "Agent",
  layoutConfig: "\u5E03\u5C40\u914D\u7F6E",
  layoutConfigTitle: "\u9ED8\u8BA4\u5E03\u5C40\u914D\u7F6E",
  layoutConfigHint: "\u914D\u7F6E\u9ED8\u8BA4\u6392\u5E03\u7684\u9762\u677F\u5F00\u5173\u3001\u5BBD\u5EA6\u6BD4\u4F8B\u4E0E\u662F\u5426\u9ED8\u8BA4\u6D6E\u52A8\u3002\u4FDD\u5B58\u540E\u7ACB\u5373\u6309\u65B0\u9ED8\u8BA4\u5E03\u5C40\u91CD\u6392\uFF08\u7B49\u6548\u91CD\u7F6E\u5E03\u5C40\uFF09\u3002",
  floatPanel: "\u6D6E\u52A8\u5F53\u524D\u9762\u677F",
  dockPanel: "\u505C\u9760\u5F53\u524D\u9762\u677F\u56DE\u6846\u67B6",
  defaultOpen: "\u9ED8\u8BA4\u6253\u5F00",
  widthRatio: "\u5BBD\u5EA6\u6BD4\u4F8B",
  defaultFloat: "\u9ED8\u8BA4\u6D6E\u52A8",
  layoutPreset: "\u5E03\u5C40\u9884\u8BBE",
  presetDefault: "\u9ED8\u8BA4 1:2:5:2",
  presetEqual: "\u5747\u5206 1:1:1:1",
  presetThree: "\u4E09\u5217\u7F16\u8F91 1:2:5",
  presetTwo: "\u4E24\u5217 1:3",
  presetApplied: "\u5DF2\u5E94\u7528\u5E03\u5C40\u9884\u8BBE",
  restoreDefaultConfig: "\u6062\u590D\u9ED8\u8BA4",
  saveConfig: "\u4FDD\u5B58",
  layoutSnapshots: "\u5E03\u5C40\u5FEB\u7167",
  snapshotName: "\u8F93\u5165\u5FEB\u7167\u540D\u79F0\uFF0C\u56DE\u8F66\u4FDD\u5B58\u5F53\u524D\u5E03\u5C40",
  snapshotSave: "\u4FDD\u5B58",
  snapshotEmpty: "\u6682\u65E0\u5FEB\u7167",
  snapshotLoad: "\u52A0\u8F7D",
  snapshotDelete: "\u5220\u9664",
  snapshotSaved: "\u5E03\u5C40\u5FEB\u7167\u5DF2\u4FDD\u5B58",
  snapshotLoaded: "\u5E03\u5C40\u5FEB\u7167\u5DF2\u52A0\u8F7D",
  snapshotFailed: "\u5FEB\u7167\u52A0\u8F7D\u5931\u8D25\uFF0C\u5DF2\u56DE\u9000\u9ED8\u8BA4\u5E03\u5C40",
  snapshotDeleted: "\u5DF2\u5220\u9664\u5FEB\u7167",
  // dockview 面板 tab 右键菜单（放大/还原/关闭/浮窗/并入）
  tabMenuMaximize: "\u653E\u5927",
  tabMenuRestore: "\u8FD8\u539F",
  tabMenuClose: "\u5173\u95ED",
  tabMenuFloat: "\u6D6E\u7A97",
  tabMenuMerge: "\u5E76\u5165",
  // Windows 系统回收站
  recycleBin: "\u56DE\u6536\u7AD9",
  recycleRestore: "\u6062\u590D",
  recycleDelete: "\u5F7B\u5E95\u5220\u9664",
  recycleEmpty: "\u6E05\u7A7A\u56DE\u6536\u7AD9",
  recycleEmptyConfirm: "\u786E\u5B9A\u6E05\u7A7A\u56DE\u6536\u7AD9\uFF1F\u6B64\u64CD\u4F5C\u4E0D\u53EF\u6062\u590D\u3002",
  recycleDeleteConfirm: "\u786E\u5B9A\u5F7B\u5E95\u5220\u9664\u201C{name}\u201D\uFF1F\u6B64\u64CD\u4F5C\u4E0D\u53EF\u6062\u590D\u3002",
  recycleRestoreConfirm: "\u6062\u590D\u201C{name}\u201D\u5230\u539F\u4F4D\u7F6E\uFF1F",
  recycleEmptying: "\u6B63\u5728\u6E05\u7A7A\u56DE\u6536\u7AD9\u2026",
  recycleEmptyProgress: "\u6E05\u7A7A\u56DE\u6536\u7AD9\uFF1A\u5269\u4F59 {count} \u9879",
  recycleEmptyDone: "\u56DE\u6536\u7AD9\u5DF2\u6E05\u7A7A",
  recycleOriginalPath: "\u539F\u4F4D\u7F6E",
  recycleEmptyList: "\u56DE\u6536\u7AD9\u662F\u7A7A\u7684",
  recycleRestored: "\u5DF2\u6062\u590D\u5230\u539F\u4F4D\u7F6E",
  recycledDeleted: "\u5DF2\u5F7B\u5E95\u5220\u9664"
};
var en = {
  tabFileWorkbench: "File Workbench",
  openFolder: "Open Folder",
  goUp: "Go Up",
  refreshList: "Refresh resource list",
  noFolder: "No folder open",
  goSessionDir: "Go to current session folder",
  noSessionDir: "Cannot get current session folder",
  closeTab: "Close",
  scrollLeft: "Scroll tabs left",
  scrollRight: "Scroll tabs right",
  viewExplorer: "Explorer",
  viewSearch: "Search",
  clearSearch: "Clear search",
  expandHint: "Pull down to open the workbench",
  collapseHint: "Swipe up to collapse the workbench",
  collapse: "Collapse",
  noDirectoryPicker: "System folder picker is not available in this environment",
  quickAccess: "Quick Access",
  cancel: "Cancel",
  confirmOk: "OK",
  deleteTitle: "Confirm delete",
  selectFolderHere: "Use This Folder",
  scopeFollow: "Current Folder",
  scopePick: "Choose Search Folder\u2026",
  searchScopeIn: "In scope: ",
  pickFolderHint: "Select a folder as the workspace first",
  pickFolder: "Select Folder",
  mainHint: "Open a file from the explorer on the left, or use search to locate.",
  promptRootPath: "Enter the absolute path of the workspace root directory:",
  myComputer: "My Computer",
  sessionDir: "Current Session",
  sessionFiles: "Files in Session",
  emptySession: "(no files in this session)",
  driveLabel: "Local Disk ({drive}:)",
  homeEntry: "Home",
  downloadEntry: "Downloads",
  documentEntry: "Documents",
  pictureEntry: "Pictures",
  videoEntry: "Videos",
  workspaceEntry: "Workspace",
  emptyDir: "(empty)",
  backUp: "Go Up",
  goHome: "My Computer",
  colName: "Name",
  colSize: "Size",
  colType: "Type",
  colModified: "Date modified",
  typeFolder: "Folder",
  typeFile: "File",
  treeTitle: "Explorer",
  newEntry: "\uFF0B New",
  deleteEntry: "Delete",
  promptNewEntry: "New file \u2192 enter content, separate directories with newline:\nex:  myfile.txt\nex:  folder/ (ends with / for directory)",
  renameEntry: "Rename:",
  confirmDelete: 'Delete "{name}"?',
  brokenLink: "Broken symlink",
  symlink: "Symbolic link",
  loading: "Loading\u2026",
  brokenCantExpand: "(broken link, cannot expand)",
  unsaved: " \xB7 unsaved",
  modeEdit: "Edit",
  modePreview: "Preview",
  modeSplit: "Split",
  reload: "\u21BB Reload",
  save: "Save",
  editPlaceholder: "Edit {name}",
  renderFailed: "Render failed",
  outline: "Outline",
  outlineCollapse: "Collapse outline",
  outlineExpand: "Expand outline",
  // Markdown rendering (mermaid / KaTeX)
  mdMermaidError: "Failed to render diagram",
  mdMermaidLoading: "Loading diagram\u2026",
  kindImage: "Image",
  kindHtml: "HTML Preview",
  kindText: "Text",
  kindMarkdown: "Markdown",
  htmlSandboxNote: "HTML is previewed in a read-only sandbox; use the editor to modify.",
  kindDocx: "Word Document",
  kindDoc: "Word Document (legacy .doc)",
  kindXlsx: "Excel Spreadsheet",
  officeSandboxNote: "Office files are previewed in a read-only sandbox; editing is not supported.",
  kindAudio: "Audio",
  kindVideo: "Video",
  kindDownload: "File",
  download: "Download",
  detailType: "Type",
  detailWords: "Chars",
  gridTitle: "Grid",
  gridAddRow: "+ Row",
  gridAddCol: "+ Column",
  gridDelLastRow: "Delete last row",
  gridDelLastCol: "Delete last column",
  gridReparse: "Reparse",
  gridRows: "rows",
  gridCols: "cols",
  gridSort: "Sort",
  gridResize: "Drag to resize column",
  gridSummary: "Summary",
  gridCount: "Count",
  gridSum: "Sum",
  gridAvg: "Avg",
  gridMin: "Min",
  gridMax: "Max",
  gridDistinct: "Distinct",
  gridTypeText: "Text",
  gridTypeNumber: "Number",
  gridTypeDate: "Date",
  gridTypeSelect: "Select",
  // Editable xlsx grid
  xlsxSheet: "Sheet",
  xlsxAddSheet: "+ Sheet",
  xlsxDelSheet: "Delete sheet",
  xlsxSheetNamePlaceholder: "Sheet name",
  xlsxSaveDone: "Excel saved",
  xlsxParseError: "Failed to parse xlsx file",
  jsonTitle: "JSON",
  jsonFormat: "Format",
  jsonValidate: "Validate",
  jsonTree: "Tree",
  jsonForm: "Form",
  jsonText: "Text",
  jsonTable: "Table",
  jsonLoaded: "Loaded",
  jsonFormatted: "Formatted",
  jsonValid: "Valid JSON",
  jsonNotValid: "Invalid JSON, please fix and retry",
  jsonEditorUnavailable: "Rich editor unavailable in this env, switched to plain text",
  statusItems: "items",
  searchTitle: "Search Files & Content",
  searchPlaceholder: "Enter keywords\u2026",
  searchChatPlaceholder: "Search chats\u2026",
  searchModeFile: "Files",
  searchModeChat: "Chats",
  chatHitBadge: "Session",
  chatMessageBadge: "message hit",
  chatHitEmpty: "No matching chat messages found.",
  chatSearchDisabled: "Session search is disabled in this deployment.",
  search: "Search",
  searching: "Searching\u2026",
  searchCase: "Match case",
  searchRegex: "Regular expression match",
  searchIdle: "Type keywords in the top search box to match file names and content live.",
  resultsCount: "{count} result(s)",
  resultsSuffixTruncated: " (truncated)",
  hitTitle: "Right-click to locate in explorer \\ left-click to open",
  matchContent: "content",
  matchName: "file name",
  // Cross-file batch replace
  searchReplaceAll: "Replace All",
  searchReplaceTitle: "Confirm batch replace",
  searchReplaceConfirm: "Replace {count} match(es) across {files} file(s)? This cannot be undone.",
  searchReplaceBusy: "Replacing\u2026",
  searchReplaceDone: "Replaced in {files} file(s) ({count} match(es))",
  searchReplaceStaleSkipped: "Files with unsaved changes were not auto-refreshed: {names}",
  openFolderFirst: "Open a folder first",
  dirCreated: "Directory created",
  fileCreated: "File created",
  renamed: "Renamed",
  deleted: "Deleted",
  saved: "Saved",
  workspaceOutside: "Operation denied: only allowed for files/folders inside the workspace",
  errForbidden: "Forbidden: no permission or denied (403)",
  errNotFound: "File or directory not found (404)",
  errNoRoot: "No workspace root set \u2014 open a folder first (409)",
  errTooLarge: "Payload too large, exceeds allowed limit (413)",
  errServer: "Server error, please retry later (500)",
  errNetwork: "Network request failed, check your host connection",
  menuOpen: "Open",
  menuOpenExternal: "Open with default app",
  menuCut: "Cut",
  menuCopy: "Copy",
  menuRename: "Rename",
  menuDelete: "Delete",
  menuCopyPath: "Copy full path",
  menuProperties: "Properties",
  menuCutDone: "Cut to clipboard",
  menuCopyDone: "Copied to clipboard",
  dropExternalUnsupported: "External drag-and-drop is not supported",
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
  viewMedium: "Medium icons",
  viewList: "List",
  viewDetails: "Details",
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
  autoSave: "Auto-save",
  showHidden: "Show hidden files",
  defaultView: "Default view",
  themeMode: "Theme",
  themeAuto: "Follow system",
  themeDark: "Dark",
  themeLight: "Light",
  style: "Interface Style",
  styleClassic: "Classic",
  styleMacos: "macOS",
  /* macOS menu bar */
  macMenuFile: "File",
  macMenuView: "View",
  macMenuWindow: "Window",
  macMenuHelp: "Help",
  macMenuSettings: "Settings",
  macMenuUp: "Up",
  macMenuShortcuts: "Keyboard Shortcuts \u21E7?",
  macMenuLayouts: "Layouts",
  macMenuPanels: "Panels",
  macMenuOpenModule: "Open",
  macMenuResetDefault: "Reset Default Ratio",
  macMenuSnapshot: "Layout Snapshot",
  macMenuSnapshotDone: "Layout snapshot saved",
  macMenuSnapshotApplied: "Layout snapshot restored",
  macMenuSnapshotRestore: "Restore snapshot",
  macSearchFile: "File",
  macSearchChat: "Chat",
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
  // Code minimap
  mmEnable: "Code Map",
  mmRenderChars: "Render characters",
  mmSize: "Vertical size",
  mmSizeProportional: "Proportional",
  mmSizeFill: "Fill",
  mmSizeFit: "Fit",
  mmSlider: "Slider",
  mmSliderMouseover: "Show on hover",
  mmSliderAlways: "Always show",
  // Command palette (Ctrl+K)
  cmdBaton: "Command Palette",
  cmdPlaceholder: "Type a command (e.g. save / refresh)\u2026",
  cmdEmpty: "No matching command",
  // Keyboard shortcuts help ("?" key)
  shortcutHelp: "Keyboard Shortcuts",
  shortcutHint: "Press ? anytime to show, Esc to close",
  shortcutGlobal: "Global",
  shortcutFileList: "File List",
  shortcutEditor: "Editor",
  shortcutChat: "AI Chat",
  shGlobalPalette: "Open command palette",
  shGlobalSave: "Save current file",
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
  shEditUndo: "Undo",
  shEditRedo: "Redo",
  shChatSend: "Send message",
  shChatNewline: "Insert new line",
  terminal: "Terminal",
  terminalTitle: "Terminal (Cmd)",
  terminalClear: "Clear",
  terminalClose: "Close",
  terminalNew: "New terminal",
  terminalShellSwitch: "Switch default shell for new terminals (cmd / PowerShell), affects new terminals only",
  terminalCloseTitle: "Close terminal window",
  terminalResizeTitle: "Drag to resize \xB7 double-click to reset",
  terminalMinimize: "Minimize",
  dockMinimized: "Minimized",
  dockRestore: "Restore window",
  statusReady: "Ready",
  notifySaved: "Saved",
  terminalTab: "Terminal {n}",
  termSearchPlaceholder: "Search terminal output\u2026",
  termSearchPrev: "Previous match (Shift+Enter)",
  termSearchNext: "Next match (Enter)",
  termSearchCase: "Match case",
  termSearchClose: "Close search (Esc)",
  termFontSmaller: "Decrease font size (Ctrl+-)",
  termFontLarger: "Increase font size (Ctrl+=)",
  termCopyHint: "Ctrl+C copies selection (or sends SIGINT) \xB7 Ctrl+V pastes \xB7 Ctrl+F searches",
  closeUnsavedTitle: "Unsaved changes",
  closeUnsavedMsg: '"{name}" has unsaved changes. Close anyway?',
  exportHtml: "Export HTML",
  exportPdf: "Export PDF",
  exportPdfBusy: "Generating PDF\u2026",
  exportPdfDone: "PDF downloaded to the download folder",
  changedExternally: "File changed on disk; reloaded",
  undo: "Undo",
  redo: "Redo",
  autoSaved: "Auto-saved",
  // Editor find / replace
  findPlaceholder: "Find\u2026",
  findReplacePlaceholder: "Replace with\u2026",
  findCase: "Match case",
  findRegex: "Regex",
  findPrev: "Previous match (Shift+Enter)",
  findNext: "Next match (Enter)",
  findClose: "Close find (Esc)",
  findReplace: "Replace",
  findReplaceAll: "Replace All",
  findNoMatches: "No matches",
  findCurrent: "{index}/{total}",
  recentFiles: "Recent",
  clearRecent: "Clear recent",
  favorites: "Favorites",
  favoriteAdd: "Favorites",
  favoriteRemove: "Remove from favorites",
  favoriteAdded: "Added to favorites",
  favoriteRemoved: "Removed from favorites",
  emptyFavorites: "(no favorites)",
  emptyRecent: "(no recent items)",
  pinTab: "Pin",
  unpinTab: "Unpin",
  closeOthers: "Close others",
  closeAll: "Close all",
  closeOthersDone: "Closed other tabs",
  closeAllDone: "Closed all tabs",
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
  menuCompare: "Compare with\u2026",
  menuCompareWithFirst: 'Compare with "{name}"',
  diffTitle: "File compare",
  diffWaitSelect: "Choose a base file first",
  diffFrom: "From",
  diffTo: "To",
  diffEqual: "Contents are identical",
  diffRemoved: "removed",
  diffAdded: "added",
  diffSwitchFirst: "Switch base",
  diffBaseline: "Base",
  resetCompare: "Compare again",
  diffCompareWith: "Compared with {name}",
  diffBasePending: "Set as compare base, waiting for a second file",
  menuSubagent: "Process with sub-agent",
  menuAiQuick: "AI Quick Actions",
  aiExplain: "Explain",
  aiSummarize: "Summarize",
  aiReview: "Review / find issues",
  aiExplainPrompt: "Explain this target: its purpose, key logic, and how to use it.",
  aiSummarizePrompt: "Summarize the core content and key points of this target, concisely.",
  aiReviewPrompt: "Review this target and point out issues, improvements, and potential bugs.",
  subagentPromptTitle: "Process with sub-agent",
  subagentPromptPlaceholder: "Enter what you want the sub-agent to do with this target\u2026",
  subagentRunning: "Sub-agent working\u2026",
  subagentResultTitle: "Sub-agent result",
  subagentReady: "Done",
  subagentFailed: "Failed",
  subagentError: "Error",
  subagentOutputEmpty: "(sub-agent returned nothing)",
  subagentCopy: "Copy result",
  subagentCopyDone: "Copied",
  subagentClose: "Close",
  subagentRunId: "Run id",
  subagentChatTitle: "Sub-agent chat",
  subagentChatCount: "Sub-agent chat ({count})",
  subagentChatNotice: "Note: every send spawns a brand-new sub-agent. The conversation looks continuous, but each message is actually handled by a freshly started sub-agent (carrying the prior context).",
  subagentNewPerTurn: "This message was executed by a newly spawned sub-agent",
  subagentChatEmptyHint: "Type a request and the sub-agent will act on the selected target. Each round carries the prior conversation, so you can keep asking.",
  subagentYou: "You",
  subagentAi: "Sub-agent",
  subagentUserRole: "User",
  subagentAiRole: "Sub-agent",
  subagentDate: "Date",
  subagentTokens: "tokens",
  subagentCopyTitle: "Copy",
  subagentCopied: "Copied",
  subagentPacksNote: "'s content will be bundled and sent to the sub-agent",
  subagentInputPlaceholder: "What should the sub-agent do?\u2026 (Enter to send, Shift+Enter for newline)",
  subagentSend: "Send",
  subagentNoTarget: "No target selected (right-click a file/folder \u2192 Process with sub-agent)",
  subagentNew: "New sub-agent",
  subagentListEmpty: "No sub-agents yet. Right-click a file/folder \u2192 Process with sub-agent to create one.",
  subagentRenameTitle: "Rename sub-agent",
  subagentRenamePlaceholder: "Enter a new name",
  subagentClear: "Clear conversation",
  subagentCloseTitle: "Close and clear this sub-agent",
  menuAIChat: "AI Chat",
  aiChatMainNote: "Chat with main session",
  aiChatMainEmptyHint: "This is the current session's conversation. Type to send to the main session; replies stream here, identical to the main page.",
  aiChatRoleUser: "You",
  aiChatRoleAi: "AI",
  aiChatInputPlaceholder: "Type a message\u2026 (Enter to send, Shift+Enter for newline)",
  aiChatSend: "Send",
  aiChatStop: "Stop",
  aiChatCopyTitle: "Copy",
  aiChatCopied: "Copied",
  aiChatStopped: "Stopped",
  aiChatResizeTitle: "Drag to resize \xB7 double-click to reset",
  aiChatReasoning: "Reasoning",
  aiChatToolDone: "Done",
  aiChatToolError: "Error",
  aiChatAttach: "Add image",
  aiChatRemoveImage: "Remove image",
  aiChatPasteImageHint: "Paste a screenshot or pick an image to send with your message",
  aiChatDragImageHint: ", or drag an image into this panel to attach it",
  aiChatFileRef: "Referenced file",
  aiChatFileRefTruncated: " (content truncated)",
  aiChatTimeline: "Tool call timeline",
  taskFabTitle: "Background tasks",
  taskPanelTitle: "Background tasks",
  taskRunning: "Running",
  taskHistory: "History",
  taskNoneShort: "No tasks",
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
  taskUploading: "Upload file",
  taskCompressing: "Compress",
  taskExtracting: "Extract",
  taskCopying: "Copy",
  taskMoving: "Move",
  taskDeleting: "Delete",
  // Session activity (read-only panel)
  panelActivity: "Session activity",
  panelTask: "Session tasks",
  taskListTitle: "Session tasks",
  taskGroupSession: "Session tasks",
  taskGroupSubagent: "Sub-agent tasks",
  taskTurnLabel: "AI turn",
  saEmpty: "(no conversation yet)",
  saUser: "You",
  saAi: "Sub-agent",
  taskToolCount: "tools",
  taskReasoning: "Reasoning",
  taskTools: "Tool calls",
  taskOutput: "Output text",
  taskSelectHint: "Select a task on the left to view details",
  taskInterrupted: "Stopped",
  taskToolOk: "Done",
  taskToolError: "Error",
  actHint: "Tools used and files touched in this session",
  actTools: "Tools used",
  actFiles: "Files touched",
  actToolCalls: " calls",
  actToolErrors: " errors",
  actNoTools: "No tools used in this session",
  actNoFiles: "No files touched yet",
  actCallArgs: "Arguments",
  actCallError: "FAILED",
  gitMenu: "Git",
  gitAdd: "Stage (git add)",
  gitCommit: "Commit (git commit)",
  gitCommitting: "Committing\u2026",
  gitCommitTitle: "Git commit",
  gitCommitPlaceholder: "Enter commit message\u2026",
  gitCommitted: "Committed",
  gitCommitFailed: "Commit failed",
  gitAdded: "Staged",
  gitDiscard: "Discard changes",
  gitDiscardTitle: "Confirm discard",
  gitDiscardMsg: 'Discard worktree changes of "{name}" (git checkout --)?',
  gitDiscarded: "Discarded",
  gitDiff: "View changes",
  gitDiffTitle: "Git changes",
  gitDiffEmpty: "(no changes available)",
  gitDiffClose: "Close",
  gitStatusColon: "Git: {branch}",
  gitBadgeUntracked: "Untracked new file",
  gitBadgeAdded: "Newly staged",
  gitBadgeModified: "Modified",
  gitBadgeDeleted: "Deleted",
  gitNotRepo: "Not in a git repository",
  gitPanel: "Open Git panel",
  gitPanelTitle: "Git panel",
  gitTabStatus: "Changes",
  gitTabLog: "History",
  gitTabBranch: "Branches",
  gitTabCli: "Terminal",
  gitTabStash: "Stash",
  gitStashCreate: "Stash",
  gitStashPlaceholder: "Optional message",
  gitStashEmpty: "No stashes",
  gitStashApply: "Apply",
  gitStashPop: "Pop",
  gitStashDrop: "Drop",
  gitStashClear: "Clear",
  gitStashCreated: "Changes stashed",
  gitStashApplied: "Stash applied",
  gitStashPopped: "Stash popped",
  gitStashDropped: "Stash dropped",
  gitStashCleared: "All stashes cleared",
  gitStashDropMsg: "Drop stash {ref}?",
  gitStashClearMsg: "Clear all stashes? This cannot be undone.",
  gitGroupUnstaged: "Unstaged",
  gitGroupStaged: "Staged",
  gitGroupUntracked: "Untracked",
  gitClean: "Working tree clean, no changes",
  gitNoChanges: "Nothing staged, nothing to commit",
  gitLoading: "Loading\u2026",
  gitRemoteColon: "local: ",
  gitMessageLabel: "Commit message",
  gitFilesLabel: "Changed files",
  gitLogEmpty: "No commits yet",
  gitUnstage: "Unstage",
  gitAddShort: "Stage",
  gitCheckout: "Switch",
  gitDelete: "Delete",
  gitBranchNew: "New branch name\u2026",
  gitBranchCreated: "Created and switched to branch {name}",
  gitBranchDeleteMsg: "Delete branch {name}?",
  gitCliPlaceholder: "Type a git command (without the git prefix), Enter to run",
  gitRun: "Run",
  gitStageAll: "Stage all",
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
  panelMenu: "Panels",
  resetLayout: "Reset Layout",
  panelFile: "Files",
  panelEditor: "Editor",
  panelAgent: "Agent",
  layoutConfig: "Layout Config",
  layoutConfigTitle: "Default Layout Config",
  layoutConfigHint: "Configure which panels open by default, their width ratio, and whether they float. Saving re-applies the new default layout (same as reset).",
  floatPanel: "Float Active Panel",
  dockPanel: "Dock Active Panel Back",
  defaultOpen: "Open by default",
  widthRatio: "Width ratio",
  defaultFloat: "Float by default",
  layoutPreset: "Layout Presets",
  presetDefault: "Default 1:2:5:2",
  presetEqual: "Equal 1:1:1:1",
  presetThree: "3-column edit 1:2:5",
  presetTwo: "2-column 1:3",
  presetApplied: "Layout preset applied",
  restoreDefaultConfig: "Restore default",
  saveConfig: "Save",
  layoutSnapshots: "Layout Snapshots",
  snapshotName: "Type a name and press Enter to save current layout",
  snapshotSave: "Save",
  snapshotEmpty: "No snapshots",
  snapshotLoad: "Load",
  snapshotDelete: "Delete",
  snapshotSaved: "Layout snapshot saved",
  snapshotLoaded: "Layout snapshot loaded",
  snapshotFailed: "Failed to load snapshot; reverted to default",
  snapshotDeleted: "Snapshot deleted",
  // dockview panel tab context menu (Maximize / Restore / Close / Float / Merge Back)
  tabMenuMaximize: "Maximize",
  tabMenuRestore: "Restore",
  tabMenuClose: "Close",
  tabMenuFloat: "Float",
  tabMenuMerge: "Merge Back",
  // Windows Recycle Bin
  recycleBin: "Recycle Bin",
  recycleRestore: "Restore",
  recycleDelete: "Delete permanently",
  recycleEmpty: "Empty Recycle Bin",
  recycleEmptyConfirm: "Empty the Recycle Bin? This cannot be undone.",
  recycleDeleteConfirm: 'Permanently delete "{name}"? This cannot be undone.',
  recycleRestoreConfirm: 'Restore "{name}" to its original location?',
  recycleEmptying: "Emptying Recycle Bin\u2026",
  recycleEmptyProgress: "Emptying Recycle Bin: {count} item(s) left",
  recycleEmptyDone: "Recycle Bin emptied",
  recycleOriginalPath: "Original location",
  recycleEmptyList: "The Recycle Bin is empty",
  recycleRestored: "Restored to original location",
  recycledDeleted: "Permanently deleted"
};

// src/client/index.tsx
var PREFIX = "/api/dsh-file-workbench";
var inject = ["locale", "sessions", "workspaces"];
var LOCALE_NS = "dsh-file-workbench";
var HOST_ID = "dsh-file-workbench-shell";
function apply(ctx) {
  const apiBase = `${window.location.origin}${PREFIX}`;
  let pickDirectory;
  try {
    pickDirectory = ctx.workspaces?.pickDirectory;
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
  const resolveMainSession = () => {
    try {
      const id = getSessionId();
      if (!id) return void 0;
      return ctx.sessions?.binding?.(id)?.session ?? ctx.sessions?.manager?.get?.(id);
    } catch {
      return void 0;
    }
  };
  const EMPTY_CONV = () => ({
    sessionId: "",
    blank: true,
    hasMore: false,
    running: false,
    partialText: "",
    partialReasoning: "",
    error: null,
    turns: []
  });
  const blockText = (b) => {
    if (typeof b === "string") return b;
    if (!b || typeof b !== "object") return "";
    const rec = b;
    if (typeof rec.text === "string") return rec.text;
    if (typeof rec.content === "string") return rec.content;
    return "";
  };
  const contentText = (content) => {
    if (!Array.isArray(content)) return "";
    return content.map(blockText).join("");
  };
  const normalizeConversation = (snap) => {
    if (!snap) return EMPTY_CONV();
    const turns = [];
    const nodes = Array.isArray(snap.nodes) ? snap.nodes : [];
    for (const n of nodes) {
      if (!n || typeof n !== "object") continue;
      const kind = n.kind ?? "";
      const time = typeof n.time === "number" ? n.time : Date.now();
      const id = String(n.seq ?? n.callId ?? n.messageId ?? `t${turns.length}`);
      if (kind === "user") {
        turns.push({ id, role: "user", text: contentText(n.content), time });
      } else if (kind === "assistant") {
        const parts = [];
        const reasoning = [];
        const tools = [];
        for (const b of n.blocks ?? []) {
          if (!b || typeof b !== "object") continue;
          if (b.kind === "reasoning") reasoning.push(b.text ?? "");
          else if (b.kind === "tool-call") tools.push({ name: b.name ?? "", args: b.argsRaw ?? "" });
          else if (b.kind === "text") parts.push(b.text ?? "");
        }
        turns.push({
          id,
          role: "assistant",
          text: parts.join(""),
          reasoning: reasoning.join(""),
          tools: tools.length ? tools : void 0,
          time,
          interrupted: n.interrupted === true
        });
      } else if (kind === "tool-result") {
        const name = n.call?.name ?? n.name ?? "";
        turns.push({
          id,
          role: "tool",
          text: name,
          tools: [
            {
              name,
              args: n.call?.argsRaw ?? "",
              isError: n.isError === true,
              error: n.error?.name ?? ""
            }
          ],
          time
        });
      } else if (kind === "steering" || kind === "context") {
        turns.push({ id, role: "system", text: contentText(n.content), time });
      } else if (kind === "command") {
        const cmd = `/${n.name ?? ""} ${n.args ?? ""}`.trim();
        turns.push({ id, role: "system", text: cmd || "\u547D\u4EE4", time });
      } else if (kind === "turn-error") {
        turns.push({ id, role: "system", text: n.message ?? "\u56DE\u5408\u51FA\u9519", time });
      } else {
        turns.push({ id, role: "system", text: "", time });
      }
    }
    for (const c of Array.isArray(snap.runningCalls) ? snap.runningCalls : []) {
      if (!c || typeof c !== "object") continue;
      turns.push({
        id: c.callId ?? `run${turns.length}`,
        role: "tool",
        text: c.name ?? "",
        tools: [{ name: c.name ?? "", args: c.argsRaw ?? "" }],
        time: Date.now()
      });
    }
    let partialText = "";
    let partialReasoning = "";
    for (const b of snap.partial?.blocks ?? []) {
      if (!b || typeof b !== "object") continue;
      if (b.kind === "reasoning") partialReasoning += b.text ?? "";
      else if (b.kind === "text") partialText += b.text ?? "";
      else if (b.kind === "tool-call") partialText += `
\u{1F6E0} \u8C03\u7528\u5DE5\u5177 ${b.name ?? ""}\u2026`;
    }
    const perror = snap.promptError?.error;
    const error = snap.lastAgentError ?? (perror ? perror.message ?? "\u53D1\u9001/\u505C\u6B62\u5931\u8D25" : null);
    return {
      sessionId: snap.sessionId ?? "",
      blank: snap.blank === true,
      hasMore: snap.hasMore === true,
      running: snap.running === true,
      partialText,
      partialReasoning,
      error,
      turns
    };
  };
  const getMainConversation = async () => {
    const session = resolveMainSession();
    if (!session?.getSnapshot) return EMPTY_CONV();
    try {
      await session.open?.();
    } catch {
    }
    try {
      return normalizeConversation(session.getSnapshot());
    } catch {
      return EMPTY_CONV();
    }
  };
  const sendMainConversation = async (msg) => {
    const session = resolveMainSession();
    if (!session?.prompt) return { ok: false, error: "\u4E3B\u4F1A\u8BDD\u4E0D\u53EF\u7528\uFF1A\u8BF7\u5148\u8FDB\u5165\u4E00\u4E2A\u804A\u5929\u4F1A\u8BDD\u3002" };
    const content = [];
    const text = (msg.text ?? "").trim();
    if (text) content.push({ type: "text", text });
    for (const img of msg.images ?? []) {
      if (!img || typeof img.data !== "string" || !img.data) continue;
      content.push({
        type: "image",
        mediaType: img.mediaType || "image/png",
        data: img.data,
        name: img.name
      });
    }
    if (content.length === 0) return { ok: false, error: "\u6D88\u606F\u5185\u5BB9\u4E3A\u7A7A\u3002" };
    try {
      await session.open?.();
      const r = await session.prompt(content, "queue");
      const rawError = r && r.error !== void 0 ? String(r.error?.message ?? r.error) : void 0;
      return r?.accepted === true ? { ok: true } : { ok: false, error: rawError ?? "\u4F1A\u8BDD\u672A\u63A5\u53D7\u8BE5\u6D88\u606F\uFF0C\u8BF7\u91CD\u8BD5\u3002" };
    } catch (e) {
      return { ok: false, error: e?.message ?? String(e) };
    }
  };
  const stopMainConversation = async () => {
    const session = resolveMainSession();
    if (!session?.cancel) return { ok: false, error: "\u4E3B\u4F1A\u8BDD\u4E0D\u53EF\u7528\uFF1A\u65E0\u6CD5\u505C\u6B62\u3002" };
    try {
      await session.open?.();
      await session.cancel();
      return { ok: true };
    } catch (e) {
      return { ok: false, error: e?.message ?? String(e) };
    }
  };
  const searchSessions = async (query) => {
    const q = (query ?? "").trim();
    if (!q) return { items: [], hasMore: false };
    try {
      const r = await ctx.sessions?.search?.(q, new AbortController().signal);
      if (r?.ok && r.value && (r.value.items ?? []).length > 0) {
        const items = (r.value.items ?? []).map((it) => ({ sessionId: String(it.sessionId ?? ""), snippet: it.snippet ?? "" })).filter((it) => it.sessionId);
        return { items, hasMore: r.value.hasMore === true };
      }
    } catch {
    }
    try {
      const list = ctx.sessions?.list?.getSnapshot?.();
      const byId = list?.byId ?? {};
      const norm = (p) => String(p || "").replace(/[\\/]+$/, "");
      const dirToId = /* @__PURE__ */ new Map();
      for (const [id, meta] of Object.entries(byId)) {
        if (meta && typeof meta === "object" && meta.cwd) {
          dirToId.set(norm(meta.cwd).toLowerCase(), id);
        }
      }
      const dirs = [...dirToId.values()].length ? [...new Set(dirToId.keys())].map((d) => d.toLowerCase()).filter((d) => d) : [];
      const res = await fetch(`${PREFIX}/chat-search`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ dirs, q })
      });
      const data = res.ok ? await res.json() : void 0;
      const hits = [];
      for (const h of data?.data?.hits ?? []) {
        const sessionId = h.sessionId || (h.dir ? dirToId.get(norm(h.dir).toLowerCase()) : void 0);
        if (!sessionId) continue;
        if (h.kind === "message") {
          hits.push({
            sessionId,
            snippet: h.snippet ?? "",
            messageText: h.messagePreview,
            message: true,
            byContent: true
          });
        } else {
          hits.push({
            sessionId,
            snippet: h.snippet || h.name || "",
            file: h.path,
            name: h.name,
            byContent: h.byContent
          });
        }
      }
      return { items: hits, hasMore: !!data?.data?.truncated };
    } catch {
      return { items: [], hasMore: false };
    }
  };
  const openSession = async (id) => {
    if (!id) return { ok: false, error: "\u4F1A\u8BDD\u4E0D\u5B58\u5728\u3002" };
    try {
      ctx.sessions?.open?.(id);
      return { ok: true };
    } catch (e) {
      return { ok: false, error: e?.message ?? String(e) };
    }
  };
  const subscribeMainConversation = (cb) => {
    const innerDisposes = [];
    let disposed = false;
    const bind = () => {
      for (const off of innerDisposes) {
        try {
          off();
        } catch {
        }
      }
      innerDisposes.length = 0;
      const session = resolveMainSession();
      if (!session?.subscribe) return;
      const ret = session.subscribe(cb);
      if (typeof ret === "function") innerDisposes.push(ret);
    };
    const unsubList = ctx.sessions?.list?.subscribe?.(() => {
      if (disposed) return;
      bind();
      try {
        cb();
      } catch {
      }
    });
    bind();
    return () => {
      disposed = true;
      for (const off of innerDisposes) {
        try {
          off();
        } catch {
        }
      }
      innerDisposes.length = 0;
      try {
        unsubList?.();
      } catch {
      }
    };
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
  window.__DSH_FILE_WORKBENCH__ = {
    apiBase,
    pickDirectory,
    getSessionDir,
    getSessionId,
    getMainConversation,
    subscribeMainConversation,
    subscribeCurrentSessionId,
    sendMainConversation,
    stopMainConversation,
    searchSessions,
    openSession,
    locale: ctx.locale
  };
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
      if (!document.getElementById(HOST_ID)) return original(path);
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
  if (document.getElementById(HOST_ID)) return;
  const host = document.createElement("div");
  host.id = HOST_ID;
  host.style.cssText = "position:fixed;inset:0;pointer-events:none;z-index:2147483000;";
  document.body.appendChild(host);
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `${apiBase}/${"assets/style-Bet2oGR-.css"}`;
  document.head.appendChild(link);
  const script = document.createElement("script");
  script.type = "module";
  script.src = `${apiBase}/${"assets/index-BmL0Ml3e.js"}`;
  document.head.appendChild(script);
  let attempts = 0;
  let mounted = false;
  const poll = window.setInterval(() => {
    if (mounted) return;
    const mfn = window.__dshFileWorkbenchMount__;
    if (typeof mfn === "function" && document.getElementById(HOST_ID)) {
      mounted = true;
      window.clearInterval(poll);
      mfn(host);
    } else if (++attempts > 300) {
      window.clearInterval(poll);
    }
  }, 50);
}
		module.exports = { apply, inject };
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map
