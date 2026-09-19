const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-C2cID70-.js","assets/vendor-vue-DSVMyY-k.js"])))=>i.map(i=>d[i]);
import{a1 as gt,r as m,a5 as Fr,y as ht,G as r,S as P,d as L,E as l,H as Xe,P as ne,I as o,L as te,u as s,F as oe,W as h,V as a,ao as bt,a8 as be,aa as Ae,U as ue,e as Qe,q as zl,o as ln,l as Pt,T as jc,K as _t,J as mf,n as Dt,Q as kt,ap as Lt,ag as gf,k as $s,Y as yf,X as ho,m as Ul,s as wf,ay as bf,ak as _f,p as Vc,at as ta}from"./vendor-vue-DSVMyY-k.js";import{E as Ss,a as Mn,b as rn,c as kf,d as xf,e as oi,f as ai,g as Cf,h as $f,i as Sf}from"./vendor-element-plus-CPaGIovE.js";import{aV as Do,aW as Ef,aX as Tf,aY as Df,aZ as Ff,a_ as Rr,a$ as zc,b0 as Rf,b1 as Nf,b2 as Pf,b3 as Af,b4 as Nr,b5 as Mf,b6 as Of,b7 as Lf,b8 as Bf,b9 as Pr,ba as eo,bb as to,bc as If,bd as Ri,be as ga,bf as jf,bg as Vf,bh as zf,bi as Uf,bj as Hf,bk as Wf,bl as Gf}from"./vendor-C2cID70-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))i(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const v of u.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&i(v)}).observe(document,{childList:!0,subtree:!0});function n(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function i(c){if(c.ep)return;c.ep=!0;const u=n(c);fetch(c.href,u)}})();const tt=gt({visible:!1,kind:"confirm",title:"",message:"",okText:"",cancelText:"",inputPlaceholder:"",inputValue:"",multiline:!1,choices:[],resolve:null});function Ar(t){return new Promise(e=>{tt.kind="confirm",tt.title=t.title??"",tt.message=t.message,tt.choices=t.choices,tt.visible=!0,tt.resolve=n=>e(typeof n=="string"?n:null)})}function Mt(t){return new Promise(e=>{tt.kind="confirm",tt.title=t.title??"",tt.message=t.message,tt.okText=t.okText??"",tt.cancelText=t.cancelText??"",tt.choices=[],tt.inputValue="",tt.visible=!0,tt.resolve=n=>e(n===!0)})}function ds(t){return new Promise(e=>{tt.kind="prompt",tt.title=t.title??"",tt.message=t.message??"",tt.okText=t.okText??"",tt.cancelText=t.cancelText??"",tt.choices=[],tt.inputPlaceholder=t.placeholder??"",tt.inputValue=t.initial??"",tt.multiline=t.multiline===!0,tt.visible=!0,tt.resolve=n=>e(n===null?null:String(n))})}function Fo(t){tt.visible=!1,tt.resolve?.(t),tt.resolve=null}const qf={tabFileWorkbench:"文件工作台",tabFileWorkbenchDesc:"浏览、预览、搜索本地文件，并引用到当前会话",tabVSCode:"文件编辑器",tabVSCodeDesc:"浏览项目目录，多标签编辑代码并高亮语法",tabMenuOpenInEditor:"在文件编辑器中打开工作区",tabMenuNewEditor:"新建编辑器窗口",tabMenuAnotherEditor:"再开一个编辑器窗口",tabMenuFloat:"弹出为浮窗",tabMenuDefaultLabel:"默认打开",guideMenuAria:"更多打开方式",vsNoProject:"未选择项目目录",vsTreeLoading:"正在加载项目…",vsOpenFolder:"打开文件夹",vsFolderPath:"请输入项目目录绝对路径",vsSave:"保存",vsSaved:"已保存",vsUnsavedTitle:"未保存的更改",vsUnsavedMsg:"当前文件有未保存的更改，确定关闭吗？",vsCloseManyMsg:"有 {n} 个标签未保存，全部保存并关闭？",vsTooLarge:"文件过大：超过 8MB 编辑上限，请用系统程序打开",vsScrollLeft:"向左滚动标签",vsScrollRight:"向右滚动标签",vsReadonly:"只读",vsEmptyHint:"选择项目目录后，从左侧树打开文件开始编辑",vsLoading:"正在加载…",vsBrand:"文件编辑器",vsQuickAccess:"快捷方式",vsFormat:"格式化内容",vsFormatOk:"已格式化",vsFormatFail:"格式化失败：{msg}",vsMenuFile:"文件",vsSaveAs:"另存为…",vsSaveAsTitle:"另存为",vsFileName:"文件名",vsFileNamePlaceholder:"输入文件名，或粘贴绝对路径",vsFileType:"文件类型",vsFilterAll:"所有文件",vsFilterExt:"仅 {ext} 文件",vsSaveAsHint:"浏览到目标文件夹并填写文件名；双击列表中的文件可直接覆盖保存",vsSaveAsExists:"同名文件已存在，保存将覆盖它",vsSaveAsBlockedDirty:"{name} 已在编辑器中打开且有未保存改动，请先保存或关闭它",vsRecentProjects:"最近项目",vsRecentClearAll:"清空全部",vsRecentClearAllTitle:"清空全部最近项目",vsRecentClearAllConfirm:"确定要清空全部最近项目记录吗？此操作不可撤销。",vsRecentCleared:"已清空最近项目",vsRecentForgetTitle:"移除最近项目",vsRecentForgetConfirm:"确定要从最近项目中移除「{name}」吗？此操作不可撤销。",vsRecentForgot:"已移除 {name}",vsRemoveProject:"移出项目",vsRemoveProjectTitle:"移出项目",vsRemoveProjectConfirm:"确定将「{name}」移出项目吗？此操作会从最近项目中移除该目录，并关闭它的文件树（未保存的改动将丢失）。",vsProjectRemoved:"已移出项目",vsProjectGone:"项目目录已不存在，已从最近项目中移除",vsGitHistory:"提交记录",vsGitExpand:"展开提交记录",vsGitCollapse:"收起提交记录",vsGitRefresh:"刷新提交记录",vsGitFiles:"变更文件",vsGitFileDiff:"在新标签页打开此文件变更",vsQuickOpenPlaceholder:"搜索项目内文件（Ctrl+P）",vsLeftTabFiles:"文件",vsLeftTabSearch:"搜索",vsLeftTabGit:"版本控制",vsGitNoRepo:"当前目录不是 Git / SVN 仓库",vsUnfoldEditor:"展开编辑器",vsFoldEditor:"折叠编辑器",vsSearchNeedsProject:"请先打开项目文件夹再使用搜索",vsMenuRecent:"打开最近项目",vsMenuExtensions:"扩展",vsEmptyTitle:"打开一个文件夹开始编辑",vsGrepPlaceholder:"搜索内容（Enter 立即搜）",vsGrepScopePlaceholder:"仅在此文件夹下搜索，如 src/components",vsGrepScopeTitle:"搜索范围：留空 = 整个项目；填写项目内子目录路径可限定搜索范围",vsGrepCase:"区分大小写",vsGrepRegex:"使用正则",vsGrepSummary:"{files} 个文件中 {n} 条结果",vsGrepTruncated:"结果过多，已截断",vsGrepNoResult:"未找到结果",vsGrepOpenAt:"打开并跳到第 {ln} 行",vsSearchTitle:"搜索",vsGrepWholeWord:"全字匹配",vsGrepReplacePlaceholder:"替换",vsReplaceAll:"全部替换",vsReplacePreserveCase:"保留大小写",vsReplaceConfirm:"将把 {files} 个文件中的 {n} 处 “{q}” 替换为 “{r}”，此操作会直接改写磁盘文件且不可撤销。确定继续？",vsReplaceDone:"已在 {files} 个文件中替换 {n} 处",vsReplaceNone:"没有可替换的匹配项",vsReplaceRemoteUnsupported:"远端（ssh）根不支持跨文件批量替换",vsFilesToInclude:"包含的文件",vsFilesToIncludePlaceholder:"要搜索的文件，如 *.ts, src/**/README.md",vsFilesToIncludeTitle:"仅在这些 glob 命中的文件中搜索/替换（逗号分隔，相对项目根）。留空 = 不限。",vsFilesToExclude:"排除的文件",vsFilesToExcludePlaceholder:"要排除的文件或文件夹，如 **/node_modules, !*.min.js",vsFilesToExcludeTitle:"跳过这些 glob 命中的文件/文件夹（逗号分隔，相对项目根）。",vsClearAllResults:"清除所有结果",vsRefreshResults:"重新搜索",vsToggleReplace:"显示/隐藏替换",vsViewModeList:"列表",vsViewModeTree:"树",vsViewModeSwitchTitle:"在列表视图与树视图之间切换",vsSearchIndexing:"正在建立索引…",vsSearchNoResult:"没有匹配的文件",vsSearchTruncated:"结果较多，仅显示前若干条，请补充关键词",vsSaveAll:"全部保存",vsSavedAs:"已另存为 {path}",vsOverwriteMsg:"{path} 已存在，确定覆盖吗？",vsNoDirty:"没有需要保存的修改",vsAllSaved:"已保存 {n} 个文件",vsConflictTitle:"文件已被外部修改",vsConflictMsg:"{name} 在磁盘上已被修改。仍要用当前内容覆盖吗？",vsConflictMsgReload:"放弃对 {name} 的本地修改，改用磁盘上的版本？",vsConflictBadge:"外部已修改",vsReloadedExternal:"{name} 已被外部修改，已重新加载",vsSwitchLoseMsg:"有 {n} 个文件尚未保存，切换项目会丢失这些修改。确定继续吗？",vsReopenLoseMsg:"以其它编码重读会丢失当前未保存的修改，确定继续吗？",vsEncodingSwitched:"已按 {enc} 重新读取",vsBinaryHint:"这是二进制文件，无法以文本方式编辑",vsNewWindow:"新建编辑器窗口",vsFloatWindow:"浮动为独立窗口",vsNewTerminal:"新建终端",vsReplacedOldest:"编辑器窗口已满 8 个：已替换最早的窗口",vsNewWindowLimit:"无法新建编辑器窗口：请稍后重试",vsOpenExternal:"用系统程序打开",vsNoOpenFile:"没有打开的文件",vsTabClose:"关闭",vsTabCloseSave:"保存并关闭",vsTabCloseOthers:"关闭其他",vsTabCloseRight:"关闭右侧标签页",vsTabCloseAll:"关闭全部",terminalRestore:"还原终端",vsNewFile:"新建文件",vsNewFolder:"新建文件夹",vsNewFileName:"文件名",vsNewFolderName:"文件夹名",vsRename:"重命名",vsRenameName:"新名称",vsDelete:"删除",vsDeleteConfirm:"确定删除",vsRefresh:"刷新",vsCollapseAll:"折叠全部",vsExpandAll:"展开全部",vsExpandAllLimited:"目录较多，已展开前 {n} 个文件夹（继续展开会产生大量请求）",vsPickFolderTitle:"选择项目文件夹",vsComputer:"我的电脑",vsUp:"上级",vsEmptyDir:"此文件夹为空",vsPickInput:"选择此路径",vsCancel:"取消",vsPickConfirm:"选择此文件夹",vsNewFolderBtn:"新建文件夹",vsPickEnterHint:"双击文件夹进入；单击选中；“选择此文件夹”取高亮项，无高亮则取当前目录",menuCopyRelPath:"复制相对路径",menuCopyAbsPath:"复制绝对路径",vsAddToSession:"添加到会话",vsAddToSessionOk:"已添加到会话输入框",vsAddToSessionFail:"请先打开对话输入框",goUp:"返回上级",goBack:"后退",goForward:"前进",refreshList:"刷新资源列表",noFolder:"未打开文件夹",goSessionDir:"回到当前会话目录",closeTab:"关闭",clearSearch:"清除搜索",cancel:"取消",confirmOk:"确定",deleteTitle:"确认删除",searchScopeIn:"范围：",myComputer:"我的电脑",navHome:"主文件夹",navGallery:"图库",navThisPc:"此电脑",navQuickAccess:"快速访问",externalInjection:"外部注入",driveLabel:"本地磁盘 ({drive}:)",toastClose:"关闭提示",thisPcDevices:"设备和驱动器",driveCapacity:"{free} 可用，共 {total}",driveTotal:"总大小",driveFree:"可用空间",driveFs:"文件系统",driveTypeFixed:"本地磁盘",driveTypeRemovable:"可移动磁盘",emptyDrives:"（未检测到驱动器）",navExpand:"展开",navCollapse:"折叠",favoritePin:"已固定到快速访问",desktopEntry:"桌面",downloadEntry:"下载",documentEntry:"文档",pictureEntry:"图片",musicEntry:"音乐",videoEntry:"视频",workspaceEntry:"工作区",emptyDir:"（空）",colName:"名称",colSize:"大小",colType:"类型",colModified:"修改日期",typeFolder:"文件夹",typeFile:"文件",renameEntry:"重命名：",confirmDelete:'确认删除 "{name}" ？',brokenLink:"失效软链接",save:"保存",menuEdit:"编辑",txtEditorTitle:"编辑文本 · {name}",txtLoading:"加载中…",txtEditorSub:"文本编辑器",txtUnsaved:"未保存的更改",txtReadError:"读取失败：{msg}",txtDirty:"未保存",txtReadonly:"只读（工作区外）",txtPlaceholder:"在此输入文本…",txtChars:"字符",txtUnsavedTitle:"未保存的改动",txtUnsavedMsg:"该文件有未保存的改动，确定关闭？",txtSaved:"已保存",download:"下载",statusItemsCount:"{count} 个项目",searchTitle:"搜索文件名/内容",searchPlaceholder:"输入关键字…",search:"搜索",searching:"搜索中…",searchCase:"区分大小写",searchRegex:"正则表达式匹配",searchIdle:"在顶部搜索框输入关键字，实时匹配文件名与文件内容。",resultsCount:"{count} 个结果",resultsSuffixTruncated:"（已截断）",hitTitle:"右键在资源管理器中定位\\左键打开",matchContent:"内容匹配",searchReplaceAll:"批量替换",searchReplaceTitle:"确认批量替换",searchReplaceConfirm:"将在 {files} 个文件中替换 {count} 处匹配，此操作不可撤销，确定继续？",searchReplaceBusy:"正在替换…",searchReplaceDone:"已替换 {files} 个文件（{count} 处）",openFolderFirst:"请先打开文件夹",dirCreated:"目录已创建",fileCreated:"文件已创建",renamed:"已重命名",deleted:"已删除",workspaceOutside:"操作被拒绝：该操作仅限工作区内的文件/文件夹",errForbidden:"无权限或操作被拒绝（403）",errNotFound:"文件或目录不存在（404）",errNoRoot:"未打开文件夹：请先选择工作区目录（409）",errTooLarge:"数据过大，超出允许范围（413）",errServer:"服务端处理失败，请稍后重试（500）",errNetwork:"网络请求失败，请检查 host 连接",menuOpen:"打开",menuOpenExternal:"使用系统默认程序打开",menuOpenInEditor:"在文件编辑器中打开",menuCut:"剪切",menuCopy:"复制",menuRename:"重命名",menuDelete:"删除",menuCopyPath:"复制完整路径",menuProperties:"属性",menuCutDone:"已剪切到剪贴板",menuCopyDone:"已复制到剪贴板",menuOpened:"已调用系统程序打开",menuPathCopied:"路径已复制",menuPathCopyFail:"路径复制失败",menuRefresh:"刷新",menuView:"查看",menuSort:"排序方式",expShowNav:"显示导航栏",menuPaste:"粘贴",menuUpload:"上传文件",uploaded:"已上传 {count} 个文件",uploadFailed:"有 {count} 个文件上传失败",menuNew:"新建",menuNewFolder:"文件夹",menuNewFile:"文本文件",viewHuge:"超大图标",sshHosts:"SSH 主机",sshAddHost:"添加主机",sshCancel:"取消",sshName:"显示名",sshAddr:"地址（用户 @ 主机 : 端口）",sshUser:"用户名",sshHostAddr:"主机地址",sshAuth:"认证方式",sshAuthPassword:"口令认证",sshAuthKey:"私钥认证",sshPassword:"SSH 口令",sshKeyPath:"私钥文件路径（支持 ~）",sshSaveAdd:"添加",sshTest:"测试",sshTestConn:"测试",sshDelete:"删除",sshDeleteConfirm:"再点一次确认删除",sshTestOk:"SSH 连接成功",sshTestFail:"SSH 连接失败",sshRequired:"主机地址与用户名为必填项",sshAddSuccess:"主机已添加",sshNewHost:"添加 SSH 主机",sshEdit:"编辑",sshEditTitle:"编辑 SSH 主机",sshHostCaption:"连接远程服务器，浏览文件与登录终端",sshUpdateSuccess:"主机已更新",sshSaveEdit:"保存修改",sshKeepSecret:"（留空则沿用原口令）",sshNoHosts:"还没有主机，点「添加主机」开始",accTitle:"账号管理",accCaption:"管理 Git / SVN 登录凭据，执行命令时自动注入",accListTitle:"已保存账号",accAdd:"添加账号",accNewTitle:"添加账号",accEditTitle:"编辑账号",accEdit:"编辑",accKind:"类型",accKindGit:"Git",accKindSvn:"SVN",accName:"显示名",accHost:"主机",accHostPlaceholder:"例如 github.com 或 113.57.110.41:804",accUrl:"仓库地址（选填）",accUrlPlaceholder:"https://github.com/owner/repo.git",accUrlHint:"留空 = 对该主机的全部仓库生效；填写后按地址前缀匹配，用于同主机多账号。「测试连通」与「写入系统」都需要它。",accUsername:"用户名",accSecret:"口令 / 访问令牌",accSecretKind:"凭据类型",accSecretPassword:"口令",accSecretToken:"访问令牌",accKeepSecret:"（留空则沿用已存口令）",accNote:"备注",accSave:"保存",accCancel:"取消",accDelete:"删除",accDeleteConfirm:"再点一次确认删除",accTest:"测试连通",accTestOk:"连通正常",accTestFail:"连接失败",accApply:"写入系统",accApplyOk:"已写入系统",accApplyHint:"写入系统凭据存储后，命令行与其它 GUI 工具也免密。",accSaved:"账号已保存",accDeleted:"账号已删除",accRequired:"主机与用户名为必填",accSecretRequired:"请填写口令或访问令牌",accEmpty:"还没有账号，点「添加账号」开始",accHasSecret:"已保存凭据",accNoSecret:"未保存凭据",accAllRepos:"该主机全部仓库",accEffective:"当前仓库将使用",accEffectiveNone:"当前仓库无匹配账号（将走系统凭据 / svn 自身缓存）",accCopyIdent:"复制账号标识",accMatchHint:"按主机或仓库地址前缀匹配，未命中时使用系统凭据",accUseCurrent:"用当前仓库填充",accBack:"返回列表",accPick:"从左侧选择一个账号，或点「添加账号」新建",accTip:"凭据仅存于本机插件配置，不会外发；口令不回显，留空即沿用原值。",sshStatusOnline:"已连接",sshStatusOffline:"未连接",sshStatusChecking:"检测中…",sshStatusUnknown:"尚未检测",remoteNoExternal:"远端文件无法用本机程序打开",remoteNoArchive:"远端目录暂不支持压缩 / 解压",remoteNoTerminal:"找不到该远端主机的配置，已在本机目录启动终端（可先在设置里添加该 SSH 主机）",remoteCachedHint:"远端文件已下载到本机临时文件后打开（改动不会回传远端）",sshNavGroup:"SSH 远程",sshEmpty:"尚未添加主机（在此右键添加，或用「新建 ▾」）",viewLarge:"大图标",viewMedium:"中等图标",viewSmall:"小图标",viewList:"列表",viewDetails:"详细信息",viewContent:"内容",viewTiles:"平铺",showExtensions:"显示文件扩展名",cmdPreview:"预览",sortName:"名称",sortModified:"修改日期",sortType:"类型",sortSize:"大小",moved:"已移动",copied:"已复制",createdFolder:"已新建文件夹",createdFile:"已新建文件",newFolderName:"新建文件夹",newFileName:"新建文本文件",propName:"名称",propPath:"路径",propKind:"类型",propSize:"大小",propModified:"修改日期",settings:"设置",settingsSubtitle:"个性化工作台的外观与行为",retry:"重试",taskSrcMissing:"源文件不存在（可能已被移动或删除），已刷新列表：{name}",menuMore:"更多",settingsGroupFiles:"文件",settingsGroupAppearance:"外观",autoSave:"自动保存（编辑停顿 1 秒后写入）",vsFindPlaceholder:"查找",vsReplacePlaceholder:"替换为",vsFindNext:"下一个（Enter）",vsFindPrev:"上一个（Shift+Enter）",vsFindReplace:"替换（Enter）",vsFindReplaceAll:"全部替换",vsFindToggleReplace:"展开 / 收起替换",vsFindClose:"关闭（Esc）",vsFindNoMatch:"无结果",vsFindWord:"全字匹配",vsMenuLocalDiff:"查看本地改动",vsLocalDiffTitle:"未保存改动",vsLocalDiffTooBig:"改动过大，无法生成对比",vsMultiCursorHint:"提示：Alt + 点击 可添加多光标",vsActHide:"隐藏「{name}」",vsActBarBottom:"活动栏移到底部",vsActBarTop:"活动栏移到顶部",vsSideRight:"侧栏移到右侧",vsSideLeft:"侧栏移到左侧",vsMinimap:"编辑器缩略图",vsCloseSave:"保存并关闭",vsCloseDiscard:"不保存关闭",vsCloseSaveAll:"全部保存并关闭",vsCloseDiscardAll:"全部不保存关闭",showHidden:"显示隐藏文件",allowOutsideRoot:"允许操作工作区外的文件 (root 开关)",defaultView:"默认视图",themeMode:"主题",themeAuto:"跟随系统",themeDark:"深色",themeLight:"浅色",accentColor:"强调色",accentReset:"恢复默认",fontFamily:"字体",fontDefault:"默认",fontOptionYahei:"微软雅黑",fontOptionConsolas:"Consolas（等宽）",fontOptionCourier:"Courier New（等宽）",fontOptionGeorgia:"Georgia（衬线）",fontSize:"字号",fontSizeSm:"小",fontSizeMd:"标准",fontSizeLg:"大",fontSizeXl:"特大",shortcutHelp:"快捷键",shortcutHint:"按 ? 随时唤起，按 Esc 关闭",shortcutGlobal:"全局",shortcutFileList:"文件列表",shGlobalHelp:"打开快捷键帮助",shListSelectAll:"全选",shListCopy:"复制",shListCut:"剪切",shListPaste:"粘贴",shListFilter:"聚焦筛选框",shListNewFolder:"新建文件夹",shListDelete:"删除（含确认）",shListRename:"重命名",shListRefresh:"刷新",shListOpen:"打开文件 / 进入目录",shListMove:"移动选中",shListUp:"返回上级目录",shListBack:"浏览后退",shListForward:"浏览前进",undo:"撤销",findReplacePlaceholder:"替换为…",favorites:"收藏",favoriteAdd:"收藏",favoriteRemove:"取消收藏",favoriteAdded:"已收藏",favoriteRemoved:"已取消收藏",emptyFavorites:"（暂无收藏）",menuCompress:"压缩为 .zip",compressed:"已压缩",menuExtract:"解压到当前目录",extracted:"已解压 {count} 个文件",extractFailed:"解压失败",selectedCount:"{count} 项已选",menuMultiDelete:"删除所选 ({count})",menuMultiCut:"剪切所选",menuMultiCopy:"复制所选",menuMultiCompress:"压缩所选",filterPlaceholder:"筛选当前目录…",filterEmpty:"（无匹配）",taskFabTitle:"后台任务",taskPanelTitle:"后台任务",taskRunning:"运行中",taskHistory:"历史",taskClearFinished:"清除已完成",taskClearAll:"清空",taskEmpty:"暂无任务",taskViewLog:"查看日志",taskLogTitle:"任务日志",taskClose:"关闭",taskFieldTarget:"目标",taskStatusRunning:"进行中",taskStatusDone:"完成",taskStatusError:"失败",taskFieldFile:"文件",taskStartTime:"开始",taskEndTime:"结束",taskTotalSpent:"总耗时",taskStepSpent:"耗时",taskRunningLive:"运行中",taskFieldType:"类型",taskMetaFiles:"{count} 项 · {size}",taskArchive:"归档",taskArchiveOpen:"查看归档",taskArchiveTitle:"任务归档",taskArchiveNone:"暂无归档",taskArchiveRecords:"{count} 条记录",taskUploading:"上传文件",taskCompressing:"压缩",taskExtracting:"解压",taskCopying:"复制",taskMoving:"移动",taskDeleting:"删除",taskRenaming:"重命名",gitMenu:"Git",gitAdd:"暂存 (git add)",gitCommit:"提交 (git commit)",gitCommitTitle:"Git 提交",gitCommitPlaceholder:"输入提交信息…",gitCommitted:"已提交",gitAdded:"已暂存",gitDiscard:"还原改动",gitDiscardTitle:"确认还原",gitDiscardMsg:'丢弃 "{name}" 的工作区改动（git checkout --）？',gitDiscarded:"已还原",gitDiff:"查看改动",gitDiffTitle:"Git 改动",gitDiffEmpty:"（无可用改动）",gitDiffClose:"关闭",gitBadgeUntracked:"未跟踪的新文件",gitBadgeAdded:"新添加到暂存区",gitBadgeModified:"已修改",gitBadgeDeleted:"已删除",gitNotRepo:"不在 git 仓库",gitNoChanges:"没有已暂存的改动，无法提交",gitLoading:"加载中…",gitCommitFiles:"将提交 {n} 个文件：",gitCommitConfirm:"确认提交",gitConfig:"配置身份",gitConfigTitle:"Git 身份配置",gitConfigName:"用户名（user.name）",gitConfigNamePlaceholder:"例如：yourname",gitConfigEmail:"邮箱（user.email）",gitConfigEmailPlaceholder:"例如：you@example.com",gitConfigSave:"保存",gitConfigSaved:"已保存 git 全局身份配置",gitPanel:"打开 Git 面板",gitIgnore:"忽略（加入 .gitignore）",gitIgnored:"已忽略",gitPanelTitle:"Git 管理",gitFetch:"获取",gitPull:"拉取",gitPush:"推送",gitLoadMore:"加载更多",gitDiffTruncated:"差异过大，仅显示前 5000 行（完整内容可在编辑器查看）",gitCopyName:"复制名称",gitCopyUrl:"复制 URL",gitCopyMsg:"复制说明",gitCloneHere:"克隆仓库…",gitStatusColon:"当前分支：{branch}",gitLocalRepo:"本地仓库：",gitTabStatus:"更改",gitTabLog:"提交记录",gitTabBranch:"分支",gitTabStash:"暂存区",gitTabCli:"命令",gitClean:"工作区干净，没有待提交的改动",gitAddShort:"暂存",gitUnstage:"取消暂存",gitUnstaged:"已取消暂存",gitStageAll:"全部暂存",gitGroupStaged:"已暂存的更改",gitGroupUnstaged:"更改",gitGroupUntracked:"未跟踪",gitLogEmpty:"（暂无提交记录）",gitBranchNew:"新分支名称",gitCheckout:"切换",gitDelete:"删除",gitBranchCreated:"已创建并切换到分支 {name}",gitBranchDeleteMsg:"确定删除分支 {name}？",gitStashPlaceholder:"暂存说明（可选）",gitStashCreate:"创建暂存",gitStashEmpty:"（暂无暂存记录）",gitStashApply:"应用",gitStashPop:"弹出",gitStashDrop:"删除",gitStashClear:"清空暂存区",gitStashCreated:"已创建暂存",gitStashApplied:"已应用暂存",gitStashPopped:"已弹出暂存",gitStashDropped:"已删除该条暂存",gitStashCleared:"已清空暂存区",gitStashDropMsg:"确定删除暂存 {ref}？",gitStashClearMsg:"确定清空全部暂存记录？此操作不可恢复。",gitCliPlaceholder:"输入 git 子命令，例如 status / log --oneline -5",gitRailChanges:"更改",gitRailHistory:"提交历史",gitRailBranches:"分支",gitRailTags:"标签",gitRailRemotes:"远程",gitRailStash:"储藏",gitRailCli:"命令台",gitHeadDetached:"分离头指针",gitNoUpstream:"无上游分支",gitAheadBehind:"领先 {ahead} · 落后 {behind}",gitSelectFile:"在左侧选择一个文件查看改动",gitDiffUntrackedHint:"未跟踪的新文件：暂存后可查看与 HEAD 的差异",gitCommitMsgPlaceholder:"提交说明…",gitFileHistory:"文件历史",gitBlame:"逐行追溯",gitBlameAuthor:"作者",gitBlameDate:"日期",gitBlameLine:"行",gitBlameEmpty:"（无法读取逐行追溯）",gitFileHistoryEmpty:"（该文件暂无历史）",gitBack:"返回",gitHistoryAll:"全部分支",gitHistoryCurrent:"仅当前分支",gitSelectCommit:"在左侧选择一个提交查看详情",gitCommitDetail:"提交详情",gitCommitHash:"提交哈希",gitCommitAuthor:"作者",gitCommitDate:"提交时间",gitCommitParents:"父提交",gitCommitRefs:"引用",gitCommitChangedFiles:"变更文件（{n}）",gitCommitNoFiles:"（无文件变更）",gitCopyHash:"复制哈希",gitCopyPath:"复制路径",gitCopied:"已复制到剪贴板",gitReset:"重置到此提交",gitResetSoft:"软重置（改动全部保留在暂存区）",gitResetMixed:"混合重置（改动保留在工作区）",gitResetHard:"硬重置（丢弃改动）",gitResetHardMsg:"硬重置会丢弃工作区与暂存区的全部改动，确定继续？",gitResetDone:"已重置到 {hash}",gitRevert:"还原此提交",gitRevertDone:"已还原 {hash}",gitCherryPick:"拣选到当前分支",gitCherryPicked:"已拣选 {hash}",gitCheckoutCommit:"检出此提交",gitCheckoutCommitMsg:"将进入分离头指针状态，确定检出 {hash}？",gitBranchFrom:"新建分支指向此提交",gitBranchFromTitle:"从此提交新建分支",gitBranchFromPlaceholder:"新分支名称",gitBranchRename:"重命名",gitBranchRenameTitle:"重命名当前分支",gitBranchRenamePlaceholder:"新的分支名",gitBranchRenamed:"已重命名为 {name}",gitMergeIntoCurrent:"合并到当前分支",gitMergeDone:"已合并 {name}",gitPushBranch:"推送",gitPushed:"已推送 {name}",gitBranchCurrent:"当前",gitBranchRemoteGroup:"远程分支",gitBranchLocalGroup:"本地分支",gitBranchCreateAndSwitch:"创建并切换",gitTagNew:"新建标签",gitTagNamePlaceholder:"标签名，如 v1.0.0",gitTagTargetPlaceholder:"目标提交（留空为 HEAD）",gitTagMessagePlaceholder:"说明（填写即创建附注标签）",gitTagCreate:"创建",gitTagEmpty:"（暂无标签）",gitTagAnnotated:"附注",gitView:"查看",gitTagCreated:"已创建标签 {name}",gitTagDeleteMsg:"确定删除标签 {name}？",gitTagDeleted:"已删除标签 {name}",gitTagPushed:"已推送标签 {name}",gitTagFetchAll:"从远程获取标签",gitTagFetchAllDone:"已从远程获取标签",gitTagRemoteOnly:"远程",gitTagPull:"拉取",gitTagPulled:"已拉取标签 {name}",gitTagNoRemote:"无远程仓库，无法获取或发布标签",gitCommitViewTitle:"提交对比",gitCommitOpenDiff:"查看 {path} 的差异",gitReleaseBtn:"发布新版本",gitReleaseTitle:"发布新版本（创建附注标签并推送到远程）",gitReleaseName:"版本标签名",gitReleaseTarget:"基于提交（留空为 HEAD）",gitReleaseMsg:"版本说明（必填）",gitReleasePublish:"创建并发布",gitReleaseRequireMsg:"发布版本需填写版本说明",gitReleased:"已发布 {name} 到远程",gitReleaseGhSkip:"GitHub Release 未创建：{reason}",gitRefresh:"刷新",gitTabTags:"标签",gitTabReleases:"版本",gitReleaseChooseTag:"选择已有标签",gitReleaseNotesPlaceholder:"版本说明（将显示在 Release 页面）",gitReleaseCreateForTag:"创建 Release",gitReleaseCreated:"Release 已创建：{url}",gitReleaseLoadSkip:"版本列表不可用：{reason}",gitReleaseEmpty:"暂无版本记录",gitReleaseOpen:"打开",gitRemoteNamePlaceholder:"名称，如 origin",gitRemoteUrlPlaceholder:"地址，如 https://github.com/user/repo.git",gitRemoteAdd:"添加远程",gitRemoteEmpty:"（暂无远程仓库）",gitRemoteAdded:"已添加远程 {name}",gitRemoteRemoveMsg:"确定移除远程 {name}？",gitRemoteRemoved:"已移除远程 {name}",gitRemoteSetUrl:"修改地址",gitRemoteUrlTitle:"修改远程地址",gitRemoteUrlSaved:"已更新远程地址",gitStashView:"查看内容",gitStashNew:"创建储藏",gitStashNone:"（工作区干净，无内容可储藏）",gitOpRunning:"执行中…",gitOpFailed:"操作失败",svnMenu:"SVN",svnPanel:"打开 SVN 管理",svnPanelTitle:"SVN 管理",svnRepo:"工作副本：",svnUpdate:"更新",svnCommitBtn:"提交",svnAdd:"加入版本控制",svnAdded:"已加入版本控制",svnIgnore:"忽略（svn:ignore）",svnRevert:"还原",svnCleanup:"清理",svnResolve:"解决冲突",svnDiff:"比较差异",svnBlame:"追溯",svnCheckout:"检出",svnFailed:"SVN 命令执行失败",svnRailChanges:"本地修改",svnRailLog:"提交日志",svnNoUrl:"未读取到仓库地址",svnRunning:"正在执行…",svnRefresh:"刷新",svnLoading:"加载中…",svnSelectAll:"全选",svnModifiedCount:"本地修改（{n}）",svnNoChanges:"无本地修改",svnCommitPlaceholder:"填写提交说明…",svnCommitSelected:"将提交选中的 {n} 个文件",svnCommitAll:"将提交全部本地修改",svnOutput:"命令输出",svnNoOutput:"（无输出）",svnNoCli:"未检测到 svn 命令行，请先安装 Subversion",svnDone:"SVN 命令已完成",svnUpdateSummaryFrom:"更新完成：r{from} → r{to}，{n} 个条目变更",svnUpdateSummary:"更新完成：{n} 个条目变更，当前版本 r{to}",svnAlreadyLatest:"已是最新版本 r{rev}，没有需要更新的内容",svnLogEmpty:"暂无日志",svnLogToggle:"点击展开 / 收起该次提交详情",svnLogNoPaths:"该提交没有变更文件记录",svnLogOpenDiff:"查看该文件在此次提交中的对比",svnDiffTitle:"差异对比 · ",svnBlameTitle:"追溯 · ",svnCheckoutUrlPlaceholder:"仓库地址（如 https://svn.example.com/svn/repo）",svnCheckoutTargetPlaceholder:"检出到本地目录",repoCloneTitle:"克隆 / 检出仓库",repoCloneKindGit:"Git",repoCloneKindSvn:"SVN",repoCloneTitleGit:"克隆 Git 仓库",repoCloneTitleSvn:"检出 SVN 仓库",repoCloneCaptionGit:"从远程仓库克隆完整副本到本地",repoCloneCaptionSvn:"从 SVN 服务器检出指定版本到本地",repoCloneTargetGit:"将克隆到",repoCloneTargetSvn:"将检出到",repoCloneUrl:"仓库地址",repoCloneUrlGitPlaceholder:"仓库地址（如 https://github.com/owner/repo.git）",repoCloneDir:"目标目录",repoCloneDirPlaceholder:"要克隆到的父目录",repoCloneBrowse:"浏览…",repoCloneName:"子目录名称",repoCloneNamePlaceholder:"留空则按地址推断",repoCloneShallow:"浅克隆（仅最新一次提交）",repoCloneShallowHint:"更快更小，但不含历史",repoCloneRevision:"版本号",repoCloneRevisionPlaceholder:"留空为最新（HEAD）",repoCloneAccount:"账号",repoCloneAccountAuto:"自动匹配（按地址）",repoCloneAccountNew:"新建账号…",repoCloneTargetEmpty:"请填写仓库地址与目标目录",repoCloneRunningGit:"正在克隆 Git 仓库…",repoCloneRunningSvn:"正在检出 SVN 仓库…",repoCloneElapsed:"已用时 {s} 秒",repoCloneKeepOpen:"保持窗口打开，完成后将收到通知。",repoCloneActionGit:"克隆",repoCloneActionSvn:"检出",repoCloneDoneGit:"已克隆仓库：{name}",repoCloneDoneSvn:"已检出仓库：{name}",menuCloneGit:"克隆 Git 仓库…",menuCloneSvn:"检出 SVN 仓库…",svnNotRepoTip:"当前目录不是 SVN 工作副本，可填写上方信息检出仓库。",svnCheckedOut:"已检出仓库",svnStAdded:"已添加",svnStModified:"已修改",svnStDeleted:"已删除",svnStReplaced:"已替换",svnStConflicted:"冲突",svnStMissing:"缺失",svnStObstructed:"受阻",svnStUnversioned:"未版本控制",svnStIgnored:"已忽略",svnStLocked:"已锁定",saveConfig:"保存",recycleBin:"回收站",recycleRestore:"恢复",recycleDelete:"彻底删除",recycleEmpty:"清空回收站",recycleEmptyConfirm:"确定清空回收站？此操作不可恢复。",recycleDeleteConfirm:"确定彻底删除“{name}”？此操作不可恢复。",recycleDeleteConfirmMulti:"确定彻底删除选中的 {count} 项？此操作不可恢复。",recycleEmptying:"正在清空回收站…",recycleEmptyProgress:"清空回收站：剩余 {count} 项",recycleEmptyDone:"回收站已清空",recycleEmptyList:"回收站是空的",recycleRestored:"已恢复到原位置",recycledDeleted:"已彻底删除",terminal:"终端",terminalTitle:"终端",terminalMinimize:"最小化到任务条",terminalCloseTitle:"关闭终端",terminalClose:"关闭",terminalNew:"新建终端",terminalShellSwitch:"切换默认 shell（cmd / powershell）",terminalAdmin:"管理员",terminalAdminNormal:"普通权限",terminalAdminOn:"当前以管理员身份运行：终端内命令拥有管理员权限",terminalAdminOff:"当前为普通权限：终端内命令无法修改系统级设置",terminalAdminHint:"以「管理员身份运行」启动 dsh web，面板内所有终端即拥有管理员权限（终端子进程继承宿主进程权限）。",terminalClear:"清屏",terminalResizeTitle:"拖动缩放终端",terminalDockDragTitle:"点击展开 · 拖动移动 · 右键菜单",terminalDockSessions:"已最小化的终端",terminalDockCloseAll:"全部关闭",terminalTab:"{n}",scrollLeft:"向左滚动",scrollRight:"向右滚动",termFontSmaller:"减小字号",termFontLarger:"增大字号",termInputFailed:"终端输入发送失败：{msg}",termSshBadge:"该终端已登录到远端 SSH 主机",termSshReconnect:"重连",termSshReconnectTitle:"重新登录远端（用已保存的口令 / 密钥自动登录）",termSearchPlaceholder:"在终端输出中搜索…",termSearchCase:"区分大小写",termSearchPrev:"上一个",termSearchNext:"下一个",termSearchClose:"关闭搜索",termCopyHint:"Ctrl+C 复制 · Ctrl+V 粘贴 · Ctrl+F 搜索",menuDownload:"下载文件",menuOpenTerminal:"在终端打开",menuSubagent:"用子代理处理",menuNewSubagent:"新建子代理对话",subagentAsk:"希望子代理做什么？",subagentAskPlaceholder:"描述任务（可留空，稍后在子代理会话中继续）",subagentSpawned:"已在官方子代理会话中打开",subagentFailed:"子代理发起失败",statusDrivesCount:"{count} 个驱动器",statusLoading:"加载中…",statusSearching:"搜索中…",statusTasks:"后台任务",statusTasksRunning:"{count} 个后台任务",statusTermRestore:"点击还原终端窗口"},Mr={tabFileWorkbench:"File Workbench",tabFileWorkbenchDesc:"Browse, preview, and search local files, then reference them to the session",tabVSCode:"File Editor",tabVSCodeDesc:"Open a code editor in the right sidebar: browse project tree, multi-tab editing, syntax highlight",tabMenuOpenInEditor:"Open Workspace in File Editor",tabMenuNewEditor:"New Editor Window",tabMenuAnotherEditor:"Open Another Editor Window",tabMenuFloat:"Open as Floating Window",tabMenuDefaultLabel:"Open by default",guideMenuAria:"More ways to open",vsNoProject:"No project folder selected",vsTreeLoading:"Loading project…",vsOpenFolder:"Open Folder",vsFolderPath:"Enter the absolute path of the project folder",vsSave:"Save",vsSaved:"Saved",vsUnsavedTitle:"Unsaved Changes",vsUnsavedMsg:"This file has unsaved changes. Close it anyway?",vsCloseManyMsg:"{n} unsaved tab(s). Save all and close?",vsTooLarge:"File too large: over the 8MB editing limit. Open it with the system app instead",vsScrollLeft:"Scroll tabs left",vsScrollRight:"Scroll tabs right",vsReadonly:"Read-only",vsEmptyHint:"Pick a project folder, then open a file from the left tree to start editing",vsLoading:"Loading…",vsBrand:"File Editor",vsQuickAccess:"Quick Access",vsFormat:"Format Content",vsFormatOk:"Formatted",vsFormatFail:"Format failed: {msg}",vsMenuFile:"File",vsSaveAs:"Save As…",vsSaveAsTitle:"Save As",vsFileName:"File name",vsFileNamePlaceholder:"File name, or paste an absolute path",vsFileType:"File type",vsFilterAll:"All files",vsFilterExt:"{ext} files only",vsSaveAsHint:"Browse to a folder and enter a file name; double-click a listed file to overwrite it directly",vsSaveAsExists:"A file with this name already exists and will be overwritten",vsSaveAsBlockedDirty:"{name} is open in the editor with unsaved changes — save or close it first",vsRecentProjects:"Recent Projects",vsRecentClearAll:"Clear All",vsRecentClearAllTitle:"Clear All Recent Projects",vsRecentClearAllConfirm:"Clear all recent project records? This cannot be undone.",vsRecentCleared:"Recent projects cleared",vsRecentForgetTitle:"Remove from recent projects",vsRecentForgetConfirm:'Remove "{name}" from recent projects? This cannot be undone.',vsRecentForgot:"Removed {name}",vsRemoveProject:"Remove from Project",vsRemoveProjectTitle:"Remove from Project",vsRemoveProjectConfirm:'Remove "{name}" from projects? This removes it from recent projects and closes its file tree (unsaved changes will be lost).',vsProjectRemoved:"Removed from project",vsProjectGone:"Project folder no longer exists; removed from recent projects",vsGitHistory:"History",vsGitExpand:"Show commit history",vsGitCollapse:"Collapse commit history",vsGitRefresh:"Refresh history",vsGitFiles:"Changed files",vsGitFileDiff:"Open this change in a new tab",vsQuickOpenPlaceholder:"Search files by name (Ctrl+P)",vsLeftTabFiles:"Files",vsLeftTabSearch:"Search",vsLeftTabGit:"Version Control",vsGitNoRepo:"This folder is not a Git / SVN repository",vsUnfoldEditor:"Show editor",vsFoldEditor:"Hide editor",vsSearchNeedsProject:"Open a project folder first to use search",vsMenuRecent:"Open Recent",vsMenuExtensions:"Extensions",vsEmptyTitle:"Open a folder to start editing",vsGrepPlaceholder:"Search in files (Enter to run)",vsGrepScopePlaceholder:"Search only in folder, e.g. src/components",vsGrepScopeTitle:"Search scope: empty = whole project; enter a project subfolder path to narrow the search",vsGrepCase:"Match case",vsGrepRegex:"Use regex",vsGrepSummary:"{n} results in {files} files",vsGrepTruncated:"Too many results, truncated",vsGrepNoResult:"No results found",vsGrepOpenAt:"Open and go to line {ln}",vsSearchTitle:"Search",vsGrepWholeWord:"Match whole word",vsGrepReplacePlaceholder:"Replace",vsReplaceAll:"Replace All",vsReplacePreserveCase:"Preserve case",vsReplaceConfirm:"This will replace {n} occurrences of “{q}” with “{r}” across {files} file(s), rewriting files on disk with no undo. Continue?",vsReplaceDone:"Replaced {n} occurrence(s) in {files} file(s)",vsReplaceNone:"Nothing to replace",vsReplaceRemoteUnsupported:"Cross-file replace is not supported on remote (ssh) roots",vsFilesToInclude:"files to include",vsFilesToIncludePlaceholder:"files to search, e.g. *.ts, src/**/README.md",vsFilesToIncludeTitle:"Only search/replace in files matching these globs (comma-separated, relative to project root). Empty = all.",vsFilesToExclude:"files to exclude",vsFilesToExcludePlaceholder:"files or folders to skip, e.g. **/node_modules, !*.min.js",vsFilesToExcludeTitle:"Skip files/folders matching these globs (comma-separated, relative to project root).",vsClearAllResults:"Clear All Results",vsRefreshResults:"Search Again",vsToggleReplace:"Show / Hide Replace",vsViewModeList:"List",vsViewModeTree:"Tree",vsViewModeSwitchTitle:"Switch between list and tree view",vsSearchIndexing:"Indexing…",vsSearchNoResult:"No matching files",vsSearchTruncated:"Lots of matches — showing the first few, refine your keywords",vsSaveAll:"Save All",vsSavedAs:"Saved as {path}",vsOverwriteMsg:"{path} already exists. Overwrite it?",vsNoDirty:"No changes to save",vsAllSaved:"Saved {n} file(s)",vsConflictTitle:"File Changed on Disk",vsConflictMsg:"{name} has changed on disk since it was opened. Overwrite it with your version?",vsConflictMsgReload:"Discard your local changes to {name} and reload from disk?",vsConflictBadge:"Changed on disk",vsReloadedExternal:"{name} changed on disk and has been reloaded",vsSwitchLoseMsg:"{n} file(s) have unsaved changes. Switching projects will discard them. Continue?",vsReopenLoseMsg:"Reopening with another encoding will discard unsaved changes. Continue?",vsEncodingSwitched:"Reopened as {enc}",vsBinaryHint:"This is a binary file and cannot be edited as text",vsNewWindow:"New Editor Window",vsFloatWindow:"Float as Separate Window",vsNewTerminal:"New Terminal",vsReplacedOldest:"Editor window limit (8) reached: the earliest window was replaced",vsNewWindowLimit:"Could not open a new editor window. Please try again.",vsOpenExternal:"Open with system app",vsNoOpenFile:"No open files",vsTabClose:"Close",vsTabCloseSave:"Save and Close",vsTabCloseOthers:"Close Others",vsTabCloseRight:"Close Tabs to the Right",vsTabCloseAll:"Close All",terminalRestore:"Restore terminal",vsNewFile:"New File",vsNewFolder:"New Folder",vsNewFileName:"File name",vsNewFolderName:"Folder name",vsRename:"Rename",vsRenameName:"New name",vsDelete:"Delete",vsDeleteConfirm:"Delete",vsRefresh:"Refresh",vsCollapseAll:"Collapse All",vsExpandAll:"Expand All",vsExpandAllLimited:"Many folders — expanded the first {n} (expanding further would issue too many requests)",vsPickFolderTitle:"Pick Project Folder",vsComputer:"My Computer",vsUp:"Up",vsEmptyDir:"This folder is empty",vsPickInput:"Use this path",vsCancel:"Cancel",vsPickConfirm:"Select This Folder",vsNewFolderBtn:"New Folder",vsPickEnterHint:"Double-click a folder to enter; single click selects it; “Select This Folder” picks the highlighted folder (or the current one)",menuCopyRelPath:"Copy relative path",menuCopyAbsPath:"Copy absolute path",vsAddToSession:"Add to Session",vsAddToSessionOk:"Added to the session input",vsAddToSessionFail:"Open a conversation input first",goUp:"Go Up",goBack:"Back",goForward:"Forward",refreshList:"Refresh resource list",noFolder:"No folder open",goSessionDir:"Go to current session folder",closeTab:"Close",clearSearch:"Clear search",cancel:"Cancel",confirmOk:"OK",deleteTitle:"Confirm delete",searchScopeIn:"In scope: ",myComputer:"My Computer",navHome:"Home",navGallery:"Gallery",navThisPc:"This PC",navQuickAccess:"Quick access",externalInjection:"External injections",driveLabel:"Local Disk ({drive}:)",toastClose:"Close notification",thisPcDevices:"Devices and drives",driveCapacity:"{free} free of {total}",driveTotal:"Total size",driveFree:"Free space",driveFs:"File system",driveTypeFixed:"Local Disk",driveTypeRemovable:"Removable Disk",emptyDrives:"(No drives detected)",navExpand:"Expand",navCollapse:"Collapse",favoritePin:"Pinned to Quick access",desktopEntry:"Desktop",downloadEntry:"Downloads",documentEntry:"Documents",pictureEntry:"Pictures",musicEntry:"Music",videoEntry:"Videos",workspaceEntry:"Workspace",emptyDir:"(empty)",colName:"Name",colSize:"Size",colType:"Type",colModified:"Date modified",typeFolder:"Folder",typeFile:"File",renameEntry:"Rename:",confirmDelete:'Delete "{name}"?',brokenLink:"Broken symlink",save:"Save",menuEdit:"Edit",txtEditorTitle:"Edit Text · {name}",txtLoading:"Loading…",txtEditorSub:"Text editor",txtUnsaved:"Unsaved changes",txtReadError:"Failed to read: {msg}",txtDirty:"Unsaved",txtReadonly:"Read-only (outside workspace)",txtPlaceholder:"Type text here…",txtChars:"chars",txtUnsavedTitle:"Unsaved changes",txtUnsavedMsg:"This file has unsaved changes. Close anyway?",txtSaved:"Saved",download:"Download",menuDownload:"Download",menuOpenTerminal:"Open in Terminal",menuSubagent:"Process with Sub-agent",menuNewSubagent:"New Sub-agent Chat",subagentAsk:"What should the sub-agent do?",subagentAskPlaceholder:"Describe the task (optional; continue in the sub-agent session)",subagentSpawned:"Opened in the official sub-agent session",subagentFailed:"Failed to start sub-agent",statusDrivesCount:"{count} drive(s)",statusLoading:"Loading…",statusSearching:"Searching…",statusTasks:"Background tasks",statusTasksRunning:"{count} running task(s)",statusTermRestore:"Click to restore the terminal window",statusItemsCount:"{count} items",searchTitle:"Search Files & Content",searchPlaceholder:"Enter keywords…",search:"Search",searching:"Searching…",searchCase:"Match case",searchRegex:"Regular expression match",searchIdle:"Type keywords in the top search box to match file names and content live.",resultsCount:"{count} result(s)",resultsSuffixTruncated:" (truncated)",hitTitle:"Right-click to locate in explorer \\ left-click to open",matchContent:"content",searchReplaceAll:"Replace All",searchReplaceTitle:"Confirm batch replace",searchReplaceConfirm:"Replace {count} match(es) across {files} file(s)? This cannot be undone.",searchReplaceBusy:"Replacing…",searchReplaceDone:"Replaced in {files} file(s) ({count} match(es))",openFolderFirst:"Open a folder first",dirCreated:"Directory created",fileCreated:"File created",renamed:"Renamed",deleted:"Deleted",workspaceOutside:"Operation denied: only allowed for files/folders inside the workspace",errForbidden:"Forbidden: no permission or denied (403)",errNotFound:"File or directory not found (404)",errNoRoot:"No workspace root set — open a folder first (409)",errTooLarge:"Payload too large, exceeds allowed limit (413)",errServer:"Server error, please retry later (500)",errNetwork:"Network request failed, check your host connection",menuOpen:"Open",menuOpenExternal:"Open with default app",menuOpenInEditor:"Open in File Editor",menuCut:"Cut",menuCopy:"Copy",menuRename:"Rename",menuDelete:"Delete",menuCopyPath:"Copy full path",menuProperties:"Properties",menuCutDone:"Cut to clipboard",menuCopyDone:"Copied to clipboard",menuOpened:"Opened with system default app",menuPathCopied:"Path copied",menuPathCopyFail:"Failed to copy path",menuRefresh:"Refresh",menuView:"View",menuSort:"Sort by",expShowNav:"Show navigation",menuPaste:"Paste",menuUpload:"Upload Files",uploaded:"Uploaded {count} file(s)",uploadFailed:"{count} file(s) failed to upload",menuNew:"New",menuNewFolder:"Folder",menuNewFile:"Text Document",viewHuge:"Extra large icons",sshHosts:"SSH Hosts",sshAddHost:"Add Host",sshCancel:"Cancel",sshName:"Display name",sshAddr:"Address (user @ host : port)",sshUser:"Username",sshHostAddr:"Host address",sshAuth:"Auth method",sshAuthPassword:"Password auth",sshAuthKey:"Private key auth",sshPassword:"SSH password",sshKeyPath:"Private key path (supports ~)",sshSaveAdd:"Add",sshTest:"Test",sshTestConn:"Test",sshDelete:"Delete",sshDeleteConfirm:"Click again to confirm",sshTestOk:"SSH connection OK",sshTestFail:"SSH connection failed",sshRequired:"Host address and username are required",sshAddSuccess:"Host added",sshNewHost:"Add SSH Host",sshEdit:"Edit",sshEditTitle:"Edit SSH Host",sshHostCaption:"Connect a remote server for file browsing and terminal",sshUpdateSuccess:"Host updated",sshSaveEdit:"Save Changes",sshKeepSecret:"(leave blank to keep existing password)",sshNoHosts:"No hosts yet — click “Add Host” to begin",accTitle:"Accounts",accCaption:"Manage Git / SVN credentials — injected automatically when running commands",accListTitle:"Saved accounts",accAdd:"Add account",accNewTitle:"Add account",accEditTitle:"Edit account",accEdit:"Edit",accKind:"Type",accKindGit:"Git",accKindSvn:"SVN",accName:"Display name",accHost:"Host",accHostPlaceholder:"e.g. github.com or 113.57.110.41:804",accUrl:"Repository URL (optional)",accUrlPlaceholder:"https://github.com/owner/repo.git",accUrlHint:"Leave blank to apply to every repository on this host; fill it in to match by URL prefix (multiple accounts per host). Test & Apply need it.",accUsername:"Username",accSecret:"Password / access token",accSecretKind:"Credential type",accSecretPassword:"Password",accSecretToken:"Access token",accKeepSecret:"(leave blank to keep the saved secret)",accNote:"Note",accSave:"Save",accCancel:"Cancel",accDelete:"Delete",accDeleteConfirm:"Click again to confirm",accTest:"Test",accTestOk:"Connection OK",accTestFail:"Connection failed",accApply:"Apply to system",accApplyOk:"Applied to system",accApplyHint:"Write the credential into the system store so the CLI and other GUI tools are prompted no more.",accSaved:"Account saved",accDeleted:"Account deleted",accRequired:"Host and username are required",accSecretRequired:"Password or access token is required",accEmpty:"No accounts yet — click “Add account” to begin",accHasSecret:"Secret saved",accNoSecret:"No secret saved",accAllRepos:"all repositories on this host",accEffective:"This repo will use",accEffectiveNone:"No matching account for this repo (falls back to system credentials / svn cache)",accMatchHint:"Matched by host or repository URL prefix; system credentials are used when nothing matches.",accCopyIdent:"Copy account id",accUseCurrent:"Fill from current repo",accBack:"Back to list",accPick:"Pick an account on the left, or click “Add account”",accTip:"Credentials live only in this plugin's local config and are never sent out; the secret is never echoed — leave it blank to keep the current one.",sshStatusOnline:"Connected",sshStatusOffline:"Disconnected",sshStatusChecking:"Checking…",sshStatusUnknown:"Not checked",remoteNoExternal:"Remote files cannot be opened with local programs",remoteNoArchive:"Compress / extract is not supported on remote directories yet",remoteNoTerminal:"Remote host config not found — started the terminal in a local directory (add the SSH host in Settings first)",remoteCachedHint:"Remote file downloaded to a local temp file and opened (edits are not written back)",sshNavGroup:"SSH Remote",sshEmpty:"No hosts yet — right-click here to add one, or use “New ▾”",viewLarge:"Large icons",viewMedium:"Medium icons",viewSmall:"Small icons",viewList:"List",viewDetails:"Details",viewContent:"Content",viewTiles:"Tiles",showExtensions:"File name extensions",cmdPreview:"Preview",sortName:"Name",sortModified:"Date modified",sortType:"Type",sortSize:"Size",moved:"Moved",copied:"Copied",createdFolder:"Folder created",createdFile:"File created",newFolderName:"New Folder",newFileName:"New Text Document",propName:"Name",propPath:"Path",propKind:"Type",propSize:"Size",propModified:"Date modified",settings:"Settings",settingsSubtitle:"Personalize the workbench look & behavior",retry:"Retry",taskSrcMissing:"Source no longer exists (it may have been moved or deleted); list refreshed: {name}",menuMore:"More",settingsGroupFiles:"Files",settingsGroupAppearance:"Appearance",autoSave:"Auto save (write 1s after edits pause)",vsFindPlaceholder:"Find",vsReplacePlaceholder:"Replace with",vsFindNext:"Next (Enter)",vsFindPrev:"Previous (Shift+Enter)",vsFindReplace:"Replace (Enter)",vsFindReplaceAll:"Replace All",vsFindToggleReplace:"Toggle replace",vsFindClose:"Close (Esc)",vsFindNoMatch:"No results",vsFindWord:"Whole word",vsMenuLocalDiff:"View Local Changes",vsLocalDiffTitle:"Unsaved Changes",vsLocalDiffTooBig:"Changes too large to diff",vsMultiCursorHint:"Tip: Alt+Click adds more cursors",vsActHide:'Hide "{name}"',vsActBarBottom:"Move Activity Bar to Bottom",vsActBarTop:"Move Activity Bar to Top",vsSideRight:"Move Side Bar to Right",vsSideLeft:"Move Side Bar to Left",vsMinimap:"Editor Thumbnail",vsCloseSave:"Save and Close",vsCloseDiscard:"Close without Saving",vsCloseSaveAll:"Save All and Close",vsCloseDiscardAll:"Close All without Saving",showHidden:"Show hidden files",allowOutsideRoot:"Operate on files outside the workspace (root toggle)",defaultView:"Default view",themeMode:"Theme",themeAuto:"Follow system",themeDark:"Dark",themeLight:"Light",accentColor:"Accent color",accentReset:"Reset",fontFamily:"Font",fontDefault:"Default",fontOptionYahei:"Microsoft YaHei",fontOptionConsolas:"Consolas (monospace)",fontOptionCourier:"Courier New (monospace)",fontOptionGeorgia:"Georgia (serif)",fontSize:"Font size",fontSizeSm:"Small",fontSizeMd:"Medium",fontSizeLg:"Large",fontSizeXl:"Extra large",shortcutHelp:"Keyboard Shortcuts",shortcutHint:"Press ? anytime to show, Esc to close",shortcutGlobal:"Global",shortcutFileList:"File List",shGlobalHelp:"Show shortcut help",shListSelectAll:"Select all",shListCopy:"Copy",shListCut:"Cut",shListPaste:"Paste",shListFilter:"Focus filter box",shListNewFolder:"New folder",shListDelete:"Delete (with confirm)",shListRename:"Rename",shListRefresh:"Refresh",shListOpen:"Open file / enter folder",shListMove:"Move selection",shListUp:"Go to parent folder",shListBack:"Browse back",shListForward:"Browse forward",undo:"Undo",findReplacePlaceholder:"Replace with…",favorites:"Favorites",favoriteAdd:"Favorites",favoriteRemove:"Remove from favorites",favoriteAdded:"Added to favorites",favoriteRemoved:"Removed from favorites",emptyFavorites:"(no favorites)",menuCompress:"Compress to .zip",compressed:"Compressed",menuExtract:"Extract to current folder",extracted:"Extracted {count} file(s)",extractFailed:"Extraction failed",selectedCount:"{count} item(s) selected",menuMultiDelete:"Delete selected ({count})",menuMultiCut:"Cut selected",menuMultiCopy:"Copy selected",menuMultiCompress:"Compress selected",filterPlaceholder:"Filter this folder…",filterEmpty:"(no match)",taskFabTitle:"Background tasks",taskPanelTitle:"Background tasks",taskRunning:"Running",taskHistory:"History",taskClearFinished:"Clear finished",taskClearAll:"Clear all",taskEmpty:"No tasks",taskViewLog:"View log",taskLogTitle:"Task log",taskClose:"Close",taskFieldTarget:"Target",taskStatusRunning:"Running",taskStatusDone:"Done",taskStatusError:"Failed",taskFieldFile:"File",taskStartTime:"Start",taskEndTime:"End",taskTotalSpent:"Total time",taskStepSpent:"Spent",taskRunningLive:"Running",taskFieldType:"Type",taskMetaFiles:"{count} files · {size}",taskArchive:"Archive",taskArchiveOpen:"View Archives",taskArchiveTitle:"Task Archives",taskArchiveNone:"No archives",taskArchiveRecords:"{count} records",taskUploading:"Upload file",taskCompressing:"Compress",taskExtracting:"Extract",taskCopying:"Copy",taskMoving:"Move",taskDeleting:"Delete",taskRenaming:"Rename",gitMenu:"Git",gitAdd:"Stage (git add)",gitCommit:"Commit (git commit)",gitCommitTitle:"Git commit",gitCommitPlaceholder:"Enter commit message…",gitCommitted:"Committed",gitAdded:"Staged",gitDiscard:"Discard changes",gitDiscardTitle:"Confirm discard",gitDiscardMsg:'Discard worktree changes of "{name}" (git checkout --)?',gitDiscarded:"Discarded",gitDiff:"View changes",gitDiffTitle:"Git changes",gitDiffEmpty:"(no changes available)",gitDiffClose:"Close",gitBadgeUntracked:"Untracked new file",gitBadgeAdded:"Newly staged",gitBadgeModified:"Modified",gitBadgeDeleted:"Deleted",gitNotRepo:"Not in a git repository",gitNoChanges:"Nothing staged, nothing to commit",gitLoading:"Loading…",gitCommitFiles:"Committing {n} file(s):",gitCommitConfirm:"Commit",gitConfig:"Configure identity",gitConfigTitle:"Git identity",gitConfigName:"Username (user.name)",gitConfigNamePlaceholder:"e.g. yourname",gitConfigEmail:"Email (user.email)",gitConfigEmailPlaceholder:"e.g. you@example.com",gitConfigSave:"Save",gitConfigSaved:"Git global identity saved",gitPanel:"Open Git Panel",gitIgnore:"Ignore (add to .gitignore)",gitIgnored:"Ignored",gitPanelTitle:"Git Manager",gitFetch:"Fetch",gitPull:"Pull",gitPush:"Push",gitLoadMore:"Load more",gitDiffTruncated:"Diff too large — showing the first 5000 lines (open in the editor for the full content)",gitCopyName:"Copy name",gitCopyUrl:"Copy URL",gitCopyMsg:"Copy message",gitCloneHere:"Clone repository…",gitStatusColon:"Branch: {branch}",gitLocalRepo:"Local repo: ",gitTabStatus:"Changes",gitTabLog:"Log",gitTabBranch:"Branches",gitTabStash:"Stash",gitTabCli:"Command",gitClean:"Working tree clean, nothing to commit",gitAddShort:"Stage",gitUnstage:"Unstage",gitUnstaged:"Unstaged",gitStageAll:"Stage All",gitGroupStaged:"Staged changes",gitGroupUnstaged:"Changes",gitGroupUntracked:"Untracked",gitLogEmpty:"(no commits yet)",gitBranchNew:"New branch name",gitCheckout:"Checkout",gitDelete:"Delete",gitBranchCreated:"Branch {name} created and checked out",gitBranchDeleteMsg:"Delete branch {name}?",gitStashPlaceholder:"Stash message (optional)",gitStashCreate:"Create Stash",gitStashEmpty:"(no stashes)",gitStashApply:"Apply",gitStashPop:"Pop",gitStashDrop:"Drop",gitStashClear:"Clear Stash",gitStashCreated:"Stash created",gitStashApplied:"Stash applied",gitStashPopped:"Stash popped",gitStashDropped:"Stash dropped",gitStashCleared:"Stash cleared",gitStashDropMsg:"Drop stash {ref}?",gitStashClearMsg:"Clear all stashes? This cannot be undone.",gitCliPlaceholder:"Enter a git subcommand, e.g. status / log --oneline -5",gitRailChanges:"Changes",gitRailHistory:"History",gitRailBranches:"Branches",gitRailTags:"Tags",gitRailRemotes:"Remotes",gitRailStash:"Stashes",gitRailCli:"Console",gitHeadDetached:"Detached HEAD",gitNoUpstream:"No upstream branch",gitAheadBehind:"Ahead {ahead} · Behind {behind}",gitSelectFile:"Select a file on the left to view changes",gitDiffUntrackedHint:"Untracked file: stage it to see the diff against HEAD",gitCommitMsgPlaceholder:"Commit message…",gitFileHistory:"File history",gitBlame:"Blame",gitBlameAuthor:"Author",gitBlameDate:"Date",gitBlameLine:"Line",gitBlameEmpty:"(blame unavailable)",gitFileHistoryEmpty:"(no history for this file)",gitBack:"Back",gitHistoryAll:"All branches",gitHistoryCurrent:"Current branch",gitSelectCommit:"Select a commit on the left to see details",gitCommitDetail:"Commit details",gitCommitHash:"Commit",gitCommitAuthor:"Author",gitCommitDate:"Date",gitCommitParents:"Parents",gitCommitRefs:"Refs",gitCommitChangedFiles:"Changed files ({n})",gitCommitNoFiles:"(no file changes)",gitCopyHash:"Copy hash",gitCopyPath:"Copy path",gitCopied:"Copied to clipboard",gitReset:"Reset to this commit",gitResetSoft:"Soft (keep changes staged)",gitResetMixed:"Mixed (keep changes in worktree)",gitResetHard:"Hard (discard changes)",gitResetHardMsg:"Hard reset discards all worktree and staged changes. Continue?",gitResetDone:"Reset to {hash}",gitRevert:"Revert this commit",gitRevertDone:"Reverted {hash}",gitCherryPick:"Cherry-pick onto current",gitCherryPicked:"Cherry-picked {hash}",gitCheckoutCommit:"Checkout this commit",gitCheckoutCommitMsg:"This enters detached HEAD. Checkout {hash}?",gitBranchFrom:"New branch at this commit",gitBranchFromTitle:"New branch at this commit",gitBranchFromPlaceholder:"New branch name",gitBranchRename:"Rename",gitBranchRenameTitle:"Rename current branch",gitBranchRenamePlaceholder:"New branch name",gitBranchRenamed:"Renamed to {name}",gitMergeIntoCurrent:"Merge into current",gitMergeDone:"Merged {name}",gitPushBranch:"Push",gitPushed:"Pushed {name}",gitBranchCurrent:"current",gitBranchRemoteGroup:"Remote branches",gitBranchLocalGroup:"Local branches",gitBranchCreateAndSwitch:"Create & switch",gitTagNew:"New tag",gitTagNamePlaceholder:"Tag name, e.g. v1.0.0",gitTagTargetPlaceholder:"Target commit (empty = HEAD)",gitTagMessagePlaceholder:"Message (annotated tag when filled)",gitTagCreate:"Create",gitTagEmpty:"(no tags)",gitTagAnnotated:"annotated",gitView:"View",gitTagCreated:"Tag {name} created",gitTagDeleteMsg:"Delete tag {name}?",gitTagDeleted:"Deleted {name}",gitTagPushed:"Tag {name} pushed",gitTagFetchAll:"Fetch tags from remote",gitTagFetchAllDone:"Fetched tags from remote",gitTagRemoteOnly:"remote",gitTagPull:"Fetch",gitTagPulled:"Fetched tag {name}",gitTagNoRemote:"No remote repo; cannot fetch or publish tags",gitCommitViewTitle:"Commit diff",gitCommitOpenDiff:"View diff of {path}",gitReleaseBtn:"Publish release",gitReleaseTitle:"Publish release (annotated tag + push to remote)",gitReleaseName:"Tag name",gitReleaseTarget:"Based on commit (empty = HEAD)",gitReleaseMsg:"Release notes (required)",gitReleasePublish:"Create & publish",gitReleaseRequireMsg:"Release notes are required",gitReleased:"Published {name} to remote",gitReleaseGhSkip:"GitHub Release not created: {reason}",gitRefresh:"Refresh",gitTabTags:"Tags",gitTabReleases:"Releases",gitReleaseChooseTag:"Choose an existing tag",gitReleaseNotesPlaceholder:"Release notes (shown on the Release page)",gitReleaseCreateForTag:"Create Release",gitReleaseCreated:"Release created: {url}",gitReleaseLoadSkip:"Releases unavailable: {reason}",gitReleaseEmpty:"No releases yet",gitReleaseOpen:"Open",gitRemoteNamePlaceholder:"Name, e.g. origin",gitRemoteUrlPlaceholder:"URL, e.g. https://github.com/user/repo.git",gitRemoteAdd:"Add remote",gitRemoteEmpty:"(no remotes)",gitRemoteAdded:"Remote {name} added",gitRemoteRemoveMsg:"Remove remote {name}?",gitRemoteRemoved:"Remote {name} removed",gitRemoteSetUrl:"Set URL",gitRemoteUrlTitle:"Set remote URL",gitRemoteUrlSaved:"Remote URL updated",gitStashView:"View contents",gitStashNew:"Create stash",gitStashNone:"(worktree clean, nothing to stash)",gitOpRunning:"Running…",gitOpFailed:"Operation failed",svnMenu:"SVN",svnPanel:"Open SVN Manager",svnPanelTitle:"SVN Manager",svnRepo:"Working copy: ",svnUpdate:"Update",svnCommitBtn:"Commit",svnAdd:"Add",svnAdded:"Added to version control",svnIgnore:"Ignore (svn:ignore)",svnRevert:"Revert",svnCleanup:"Clean up",svnResolve:"Resolve",svnDiff:"Diff",svnBlame:"Blame",svnCheckout:"Checkout",svnFailed:"SVN command failed",svnRailChanges:"Changes",svnRailLog:"Commit log",svnNoUrl:"Repository URL unavailable",svnRunning:"Running…",svnRefresh:"Refresh",svnLoading:"Loading…",svnSelectAll:"Select all",svnModifiedCount:"Local changes ({n})",svnNoChanges:"No local changes",svnCommitPlaceholder:"Enter commit message…",svnCommitSelected:"Will commit {n} selected file(s)",svnCommitAll:"Will commit all local changes",svnOutput:"Command output",svnNoOutput:"(no output)",svnNoCli:"svn CLI not found; please install Subversion",svnDone:"SVN command finished",svnUpdateSummaryFrom:"Update complete: r{from} → r{to}, {n} item(s) changed",svnUpdateSummary:"Update complete: {n} item(s) changed, now at r{to}",svnAlreadyLatest:"Already up to date at r{rev}; nothing to update",svnLogEmpty:"No log yet",svnLogToggle:"Click to expand / collapse this commit",svnLogNoPaths:"No changed files recorded for this commit",svnLogOpenDiff:"Show this file's diff in this commit",svnDiffTitle:"Diff · ",svnBlameTitle:"Blame · ",svnCheckoutUrlPlaceholder:"Repository URL (e.g. https://svn.example.com/svn/repo)",svnCheckoutTargetPlaceholder:"Checkout into local directory",repoCloneTitle:"Clone / Checkout Repository",repoCloneKindGit:"Git",repoCloneKindSvn:"SVN",repoCloneTitleGit:"Clone Git Repository",repoCloneTitleSvn:"Checkout SVN Repository",repoCloneCaptionGit:"Clone a full copy of a remote repository to local",repoCloneCaptionSvn:"Check out a specific revision from an SVN server",repoCloneTargetGit:"Will clone into",repoCloneTargetSvn:"Will check out into",repoCloneUrl:"Repository URL",repoCloneUrlGitPlaceholder:"Repository URL (e.g. https://github.com/owner/repo.git)",repoCloneDir:"Target directory",repoCloneDirPlaceholder:"Parent directory to clone into",repoCloneBrowse:"Browse…",repoCloneName:"Subdirectory name",repoCloneNamePlaceholder:"Leave empty to infer from URL",repoCloneShallow:"Shallow clone (latest commit only)",repoCloneShallowHint:"Faster and smaller, but without history",repoCloneRevision:"Revision",repoCloneRevisionPlaceholder:"Leave empty for latest (HEAD)",repoCloneAccount:"Account",repoCloneAccountAuto:"Auto (match by URL)",repoCloneAccountNew:"New account…",repoCloneTargetEmpty:"Please fill in the repository URL and target directory",repoCloneRunningGit:"Cloning Git repository…",repoCloneRunningSvn:"Checking out SVN repository…",repoCloneElapsed:"Elapsed {s}s",repoCloneKeepOpen:"Keep this window open; you will be notified when done.",repoCloneActionGit:"Clone",repoCloneActionSvn:"Checkout",repoCloneDoneGit:"Repository cloned: {name}",repoCloneDoneSvn:"Repository checked out: {name}",menuCloneGit:"Clone Git Repository…",menuCloneSvn:"Checkout SVN Repository…",svnNotRepoTip:"Not an SVN working copy. Fill in the form above to check out a repository.",svnCheckedOut:"Repository checked out",svnStAdded:"Added",svnStModified:"Modified",svnStDeleted:"Deleted",svnStReplaced:"Replaced",svnStConflicted:"Conflicted",svnStMissing:"Missing",svnStObstructed:"Obstructed",svnStUnversioned:"Unversioned",svnStIgnored:"Ignored",svnStLocked:"Locked",saveConfig:"Save",recycleBin:"Recycle Bin",recycleRestore:"Restore",recycleDelete:"Delete permanently",recycleEmpty:"Empty Recycle Bin",recycleEmptyConfirm:"Empty the Recycle Bin? This cannot be undone.",recycleDeleteConfirm:'Permanently delete "{name}"? This cannot be undone.',recycleDeleteConfirmMulti:"Permanently delete the {count} selected items? This cannot be undone.",recycleEmptying:"Emptying Recycle Bin…",recycleEmptyProgress:"Emptying Recycle Bin: {count} item(s) left",recycleEmptyDone:"Recycle Bin emptied",recycleEmptyList:"The Recycle Bin is empty",recycleRestored:"Restored to original location",recycledDeleted:"Permanently deleted",terminal:"Terminal",terminalTitle:"Terminal",terminalMinimize:"Minimize to task bar",terminalCloseTitle:"Close terminal",terminalClose:"Close",terminalNew:"New terminal",terminalShellSwitch:"Switch default shell (cmd / powershell)",terminalAdmin:"Administrator",terminalAdminNormal:"Standard",terminalAdminOn:"Running as administrator — commands here have admin rights",terminalAdminOff:"Standard privileges — commands here cannot change system-level settings",terminalAdminHint:'Launch dsh web as administrator (right-click the launcher → "Run as administrator") so every terminal in the panel gets admin rights — the shell inherits the host process token.',terminalClear:"Clear screen",terminalResizeTitle:"Drag to resize terminal",terminalDockDragTitle:"Click to expand · drag to move · right-click for menu",terminalDockSessions:"Minimized terminals",terminalDockCloseAll:"Close all",terminalTab:"{n}",scrollLeft:"Scroll left",scrollRight:"Scroll right",termFontSmaller:"Smaller font",termFontLarger:"Larger font",termInputFailed:"Terminal input failed: {msg}",termSshBadge:"This terminal is logged in to a remote SSH host",termSshReconnect:"Reconnect",termSshReconnectTitle:"Log in to the remote host again (auto, using the saved password / key)",termSearchPlaceholder:"Search terminal output…",termSearchCase:"Match case",termSearchPrev:"Previous",termSearchNext:"Next",termSearchClose:"Close search",termCopyHint:"Ctrl+C copy · Ctrl+V paste · Ctrl+F search"};function Kf(t,e){return t===void 0?"":e?t.replace(/\{([^}]+)\}/g,(n,i)=>e[i]!==void 0?String(e[i]):`{${i}}`):t}function Xf(t,e){return(t.toLowerCase().startsWith("zh")?qf:Mr)[e]??Mr[e]}function Hl(){return typeof window<"u"?window.__DSH_FILE_WORKBENCH__?.locale:void 0}function Uc(){const t=Hl()?.getSnapshot()?.active;return t||(typeof navigator<"u"&&navigator.language?navigator.language:"en")}const oo=m(Uc());if(typeof window<"u"){const t=Hl();t&&typeof t.subscribe=="function"&&t.subscribe(()=>{oo.value=Uc()})}function Hc(t,e,n){return Kf(Xf(t,e),n)}function Bt(){const t=m(oo.value.toLowerCase().startsWith("zh"));if(typeof window<"u"){const e=Hl();e&&typeof e.subscribe=="function"&&e.subscribe(()=>{t.value=oo.value.toLowerCase().startsWith("zh")})}return{locale:Fr(oo),isZh:Fr(t),t:(e,n)=>Hc(oo.value,e,n)}}function y(t,e){return Hc(oo.value,t,e)}const Wc={home:'<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',up:'<line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 11 12 4 19 11"/>',compass:'<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',folder:'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',folderOpen:'<path d="M6 14l1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"/>',search:'<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',chat:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',bot:'<rect x="4" y="9" width="16" height="11" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M10 6v3"/><line x1="8" y1="14" x2="9" y2="14"/><line x1="15" y1="14" x2="16" y2="14"/><line x1="12" y1="14.5" x2="12" y2="18"/>',gear:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>',terminal:'<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>',sun:'<circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/><line x1="4.5" y1="4.5" x2="6.5" y2="6.5"/><line x1="17.5" y1="17.5" x2="19.5" y2="19.5"/><line x1="4.5" y1="19.5" x2="6.5" y2="17.5"/><line x1="17.5" y1="6.5" x2="19.5" y2="4.5"/>',moon:'<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',refresh:'<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>',star:'<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',close:'<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',file:'<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/>',fileText:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',video:'<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>',music:'<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',archive:'<polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/>',grid:'<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',viewList:'<path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/>',viewDetails:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 9v12"/>',code:'<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',trash:'<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',edit:'<path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z"/><path d="M15 5l4 4"/>',cut:'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="8.12" y1="8.12" x2="15.88" y2="15.88"/><line x1="15.88" y1="8.12" x2="8.12" y2="15.88"/>',copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>',paste:'<path d="M6 9V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4"/><rect x="4" y="7" width="16" height="14" rx="2"/><path d="M9 12h6"/><path d="M9 16h6"/>',eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',eyeOff:'<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>',undo:'<path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-15-6.7L3 13"/>',redo:'<path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 15-6.7L21 13"/>',print:'<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',pin:'<path d="M12 17v5"/><path d="M9 3h6l1 6a2 2 0 0 0 2 2h1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2h1a2 2 0 0 0 2-2z"/>',globe:'<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/>',sparkle:'<path d="M12 3l1.9 4.6 4.6 1.9-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9z"/><circle cx="18.5" cy="5.5" r="1"/>',bug:'<rect x="8" y="6" width="8" height="14" rx="4"/><path d="M19 7l-3 2M5 7l3 2M19 17l-3-2M5 17l3-2M3 12h4M17 12h4"/><path d="M12 6V3"/>',sync:'<path d="M21 2v6h-6"/><path d="M3 22v-6h6"/><path d="M21 8a9 9 0 0 0-14.14-5.86L3 5.96"/><path d="M3 16a9 9 0 0 0 14.14 5.86L21 18.04"/>',arrowRight:'<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',arrowLeft:'<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 5 5 12 12 19"/>',warning:'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',chevronLeft:'<polyline points="15 18 9 12 15 6"/>',chevronRight:'<polyline points="9 18 15 12 9 6"/>',chevronsLeft:'<polyline points="11 17 6 12 11 7"/><polyline points="18 17 13 12 18 7"/>',chevronsRight:'<polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/>',chevronUp:'<polyline points="18 15 12 9 6 15"/>',chevronDown:'<polyline points="6 9 12 15 18 9"/>',chevronsUp:'<polyline points="17 11 12 6 7 11"/><polyline points="17 18 12 13 7 18"/>',chevronsDown:'<polyline points="7 6 12 11 17 6"/><polyline points="7 13 12 18 17 13"/>',external:'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>',fileOut:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M11 15c0-4.5-2.5-7-7-7"/><polyline points="7 5 4 8 7 11"/>',info:'<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',monitor:'<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',sort:'<path d="M3 6h18"/><path d="M6 12h12"/><path d="M9 18h6"/>',message:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',brain:'<path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z"/>',paperclip:'<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/>',check:'<polyline points="20 6 9 17 4 12"/>',save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>',plus:'<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',panellayout:'<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="14" y1="3" x2="14" y2="11"/><line x1="14" y1="15" x2="14" y2="21"/>',hardDrive:'<line x1="22" y1="12" x2="2" y2="12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" y1="16" x2="6.01" y2="16"/><line x1="10" y1="16" x2="10.01" y2="16"/>',git:'<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',tasks:'<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>',clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',activity:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',float:'<path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/><circle cx="9" cy="9" r="2"/><path d="M4 14h6"/>',dock:'<path d="M12 17v5"/><path d="M14 9V4h4V2H6v2h4v5l-2 2v1h8v-1z"/><path d="M17 5h3"/>',fileWord:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M8 17l2-7 2 4 2-4 2 7"/>',fileExcel:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 12l6 6M15 12l-6 6"/>',merge:'<circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/>',tag:'<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>',stash:'<path d="M21 8v13H3V8"/><path d="M1 3h22v5H1z"/><line x1="10" y1="12" x2="14" y2="12"/>',commit:'<circle cx="12" cy="12" r="4"/><line x1="1.05" y1="12" x2="7" y2="12"/><line x1="17.01" y1="12" x2="22.96" y2="12"/>',svn:'<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h10"/><circle cx="19" cy="17" r="2"/>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',mail:'<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',inbox:'<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',send:'<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',bookmark:'<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',unlock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>',key:'<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>',heart:'<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',flag:'<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>',bell:'<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',layers:'<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',database:'<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>',server:'<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>',cloud:'<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>',cloudUpload:'<polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>',cloudDownload:'<polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>',palette:'<circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.436-.652-.436-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.504 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>',pieChart:'<path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',barChart:'<line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>',trendingUp:'<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',trendingDown:'<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/>',box:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',package:'<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',rocket:'<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',target:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',crosshair:'<circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/>',sliders:'<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>',filter:'<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',zap:'<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',flashlight:'<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/><path d="M6.39 15.5 4 17v3h16v-3l-2.39-1.5"/>',map:'<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>',landmark:'<line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/>',wifi:'<path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>',battery:'<rect x="1" y="6" width="18" height="12" rx="2"/><line x1="23" y1="13" x2="23" y2="11"/>',cpu:'<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>',creditCard:'<rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>',gift:'<polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>',award:'<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>',medal:'<circle cx="12" cy="15" r="6"/><path d="M12 12V2l4 4-4 4"/><path d="M8 6l4 6"/>',thumbsUp:'<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>',smile:'<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>',mic:'<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>',camera:'<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',headphones:'<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',play:'<polygon points="5 3 19 12 5 21 5 3"/>',pause:'<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>',stop:'<rect x="5" y="5" width="14" height="14" rx="2"/>',skipForward:'<polygon points="5 4 15 12 5 20 5 4"/><line x1="19" y1="5" x2="19" y2="19"/>',skipBack:'<polygon points="19 20 9 12 19 4 19 20"/><line x1="5" y1="19" x2="5" y2="5"/>',volume:'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>',volumeHigh:'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>',volumeOff:'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>',maximize:'<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>',minimize:'<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/>',move:'<polyline points="5 9 2 12 5 15"/><polyline points="9 5 12 2 15 5"/><polyline points="15 19 12 22 9 19"/><polyline points="19 9 22 12 19 15"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/>',crop:'<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"/><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"/>',wand:'<path d="M15 4V2m0 20v-2M8.5 8.5 7 7m12 12-1.5-1.5M4 15H2m20 0h-2M4 4l1.5 1.5M18.5 18.5 20 20"/><path d="M14 10 4 20l-2-2L12 8z"/>',anchor:'<circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/>',feather:'<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/>',lifeBuoy:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"/><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"/><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"/><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"/>',rss:'<path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>',command:'<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>',function:'<path d="M9 11 6 21M15 3a3 3 0 0 0-3 3v1M18 9h-8m2 4c0 3-1 5-3 6"/>',binary:'<rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/>',flow:'<rect x="2" y="3" width="6" height="6" rx="1"/><rect x="16" y="15" width="6" height="6" rx="1"/><path d="M8 6h6a2 2 0 0 1 2 2v7"/><path d="M11 18H5a2 2 0 0 1-2-2v-1"/>',gitBranch:'<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',gitCommit:'<circle cx="12" cy="12" r="4"/><line x1="1.05" y1="12" x2="7" y2="12"/><line x1="17.01" y1="12" x2="22.96" y2="12"/>',fork:'<circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="12" cy="18" r="3"/><path d="M6 9v1a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V9"/><line x1="12" y1="13" x2="12" y2="15"/>',cube:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',puzzle:'<path d="M19.44 12.99c.72-.23 1.56.06 1.56 1.01 0 .55-.45 1-1 1h-2v2c0 .55-.45 1-1 1-.95 0-1.24.84-1.01 1.56.18.55-.06 1.43-.99 1.43-.55 0-1-.45-1-1v-2h-2c-.55 0-1-.45-1-1 0-.95-.84-1.24-1.56-1.01-.55.18-1.43-.06-1.43-.99 0-.55.45-1 1-1h2v-2c0-.55.45-1 1-1 .95 0 1.24-.84 1.01-1.56-.18-.55.06-1.43.99-1.43.55 0 1 .45 1 1v2h2c.55 0 1 .45 1 1 0 .95.84 1.24 1.56 1.01z"/>'};function Oo(t){return Object.prototype.hasOwnProperty.call(Wc,t)}const Yf=["width","height","innerHTML"],se=ht({__name:"Icon",props:{name:{},size:{default:15}},setup(t){const e=t,n=L(()=>Wc[e.name]??""),i=L(()=>typeof e.size=="number"?`${e.size}px`:e.size);return(c,u)=>n.value?(l(),r("svg",{key:0,class:"fw-icon",viewBox:"0 0 24 24",width:i.value,height:i.value,fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",innerHTML:n.value},null,8,Yf)):P("",!0)}}),Jf={class:"fw-confirm-ico","aria-hidden":"true"},Qf={class:"fw-confirm-msg"},Zf={key:0,class:"fw-confirm-msg"},Gc=ht({__name:"ConfirmDialog",setup(t){const{t:e}=Bt(),n=L(()=>tt.okText||e("confirmOk")),i=L(()=>tt.cancelText||e("cancel"));function c(p){p||Fo(tt.kind==="prompt"||tt.choices.length?null:!1)}function u(p){Fo(p)}function v(){tt.kind==="prompt"?Fo(tt.inputValue.trim()):Fo(!0)}function d(){Fo(tt.kind==="prompt"?null:!1)}return(p,w)=>{const b=Ss,x=Mn,A=rn;return l(),Xe(A,{"model-value":s(tt).visible,class:"fw-confirm-dialog",width:"380px","align-center":"","append-to-body":"","show-close":!0,"close-on-click-modal":!1,"close-on-press-escape":!1,"onUpdate:modelValue":c},{footer:ne(()=>[s(tt).choices.length?(l(!0),r(oe,{key:0},Ae(s(tt).choices,I=>(l(),Xe(x,{key:I.id,type:I.primary?"primary":"default",onClick:M=>u(I.id)},{default:ne(()=>[ue(a(I.text),1)]),_:2},1032,["type","onClick"]))),128)):(l(),r(oe,{key:1},[h(x,{onClick:d},{default:ne(()=>[ue(a(i.value),1)]),_:1}),h(x,{type:"primary",onClick:v},{default:ne(()=>[ue(a(n.value),1)]),_:1})],64))]),default:ne(()=>[o("div",{class:te(["fw-confirm-body",{"fw-confirm-up":s(tt).kind==="confirm"}])},[s(tt).kind==="confirm"?(l(),r(oe,{key:0},[o("span",Jf,[h(se,{name:"warning",size:22})]),o("p",Qf,a(s(tt).message),1)],64)):(l(),r(oe,{key:1},[s(tt).message?(l(),r("p",Zf,a(s(tt).message),1)):P("",!0),s(tt).multiline?(l(),Xe(b,{key:1,modelValue:s(tt).inputValue,"onUpdate:modelValue":w[0]||(w[0]=I=>s(tt).inputValue=I),type:"textarea",rows:5,placeholder:s(tt).inputPlaceholder,onKeydown:bt(be(v,["ctrl","prevent"]),["enter"])},null,8,["modelValue","placeholder","onKeydown"])):(l(),Xe(b,{key:2,modelValue:s(tt).inputValue,"onUpdate:modelValue":w[1]||(w[1]=I=>s(tt).inputValue=I),placeholder:s(tt).inputPlaceholder,clearable:"",onKeyup:bt(v,["enter"])},null,8,["modelValue","placeholder"]))],64))],2)]),_:1},8,["model-value"])}}}),ep={ok:3e3,info:3e3,warning:4500,error:6e3},tp=5,Or="__DSH_FW_TOAST__";function ii(){const t=globalThis;let e=t[Or];return e||(e={items:m([]),seq:0,app:null,el:null},t[Or]=e),e}const Ni=ii().items;function li(t,e,n){const i=ii(),c=++i.seq,u=n??ep[t];for(i.items.value.push({id:c,kind:t,message:e,duration:u,remain:u,paused:!1});i.items.value.length>tp;)i.items.value.shift();return c}function Lr(t){const e=ii(),n=e.items.value.findIndex(i=>i.id===t);n!==-1&&e.items.value.splice(n,1)}function X(t,e,n){li(t,e,n)}const fs=(t,e)=>void li("error",t,e),ao=(t,e)=>void li("warning",t,e),rs=(t,e)=>void li("ok",t,e),np=3e4,io=new Map,ya=new Map;function qs(t,e,n=np){const i=io.get(t);if(i&&Date.now()-i.at<n)return Promise.resolve(i.value);const c=ya.get(t);if(c)return c;const u=e().then(v=>(io.set(t,{at:Date.now(),value:v}),ya.delete(t),v),v=>{throw ya.delete(t),v});return ya.set(t,u),u}function ri(t=""){let e=0;if(!t)return e=io.size,io.clear(),e;for(const n of[...io.keys()])n.startsWith(t)&&(io.delete(n),e++);return e}function qc(t,e,n){const i=new URL(t,e);return i.protocol=i.protocol==="https:"?"wss:":"ws:",i.pathname=`${i.pathname.replace(/\/+$/,"")}/${n}`,i.search="",i.hash="",i.toString()}const sp={},op="/api/dsh-file-workbench";function ap(){if(typeof window<"u"&&window.__DSH_FILE_WORKBENCH__?.apiBase)return window.__DSH_FILE_WORKBENCH__.apiBase.replace(/\/$/,"");const t=sp?.VITE_API_BASE??"";return t?t.replace(/\/$/,""):op}const Yn=ap(),Lo=gt({seq:0,pending:0}),Ma=new Map;function ip(){for(const t of Ma.values())t.abort();Ma.clear()}class Kc extends Error{constructor(){super("request aborted"),this.name="AbortRequestError"}}class Ws extends Error{constructor(e,n,i){super(e),this.status=n,this.code=i,this.name="ApiError"}}const lp=new Set(["mtime-conflict"]);function Xc(t,e){switch(t){case 403:return y("errForbidden");case 404:return y("errNotFound");case 409:return y("errNoRoot");case 413:return y("errTooLarge");case 500:return y("errServer");default:return e}}function Yc(t){return t instanceof Kc||t instanceof DOMException&&t.name==="AbortError"}async function We(t,e,n,i){const c=++Lo.seq;Lo.pending++;const u=new AbortController;Ma.set(c,u);const v=()=>u.abort();i?.signal&&(i.signal.aborted?u.abort():i.signal.addEventListener("abort",v,{once:!0}));const d={method:t,headers:{},signal:u.signal};n!==void 0&&(d.headers={"content-type":"application/json"},d.body=JSON.stringify(n));try{let p;try{p=await fetch(`${Yn}${e}`,d)}catch(b){throw u.signal.aborted?new Kc:(i?.silent||fs(y("errNetwork")),b instanceof Error?b:new Error(String(b)))}const w=await p.json().catch(()=>({ok:!1,error:"bad response"}));if(!w.ok){const b=w.error||`HTTP ${p.status}`;throw!!w.code&&lp.has(w.code)||(p.status===403&&/outside (root|workspace)/i.test(b)?i?.silent||fs(y("workspaceOutside")):i?.silent||fs(Xc(p.status,b))),new Ws(b,p.status,w.code)}return w.data}finally{Lo.pending--,Ma.delete(c),i?.signal?.removeEventListener("abort",v)}}const Ut=t=>{const e=new URLSearchParams;for(const[i,c]of Object.entries(t))c&&e.set(i,c);const n=e.toString();return n?`?${n}`:""};function Ta(t,e){return qs(`list:${e??""}:${t}`,()=>We("GET",`/list${Ut({key:e,path:t})}`))}function hn(t){return t.then(e=>(ri(),e))}function Wl(t){return t.then(e=>(ri("git"),e))}function xs(t=""){return ri(t)}function rp(t){return We("GET",`/root${Ut({key:t})}`)}function Gl(t,e){return We("POST","/root",{key:e,path:t})}function Qi(t,e,n={}){return hn(We("POST","/save",{key:n.key,path:t,content:e,encoding:n.encoding,hasBom:n.hasBom,eol:n.eol,expectedMtime:n.expectedMtime,force:n.force}))}function cp(t,e){return qs(`files:${e??""}:${t}`,()=>We("GET",`/files${Ut({key:e,path:t})}`))}function up(t,e={}){return We("GET",`/search${Ut({key:e.key,q:t,path:e.path,limit:e.limit?.toString(),case:e.caseSensitive?"1":void 0,regex:e.regex?"1":void 0})}`)}function Jc(t,e,n={}){return hn(We("POST","/replace",{key:n.key,scope:n.scope,q:t,replacement:e,caseSensitive:n.caseSensitive,regex:n.regex,wholeWord:n.wholeWord,preserveCase:n.preserveCase,include:n.include||void 0,exclude:n.exclude||void 0}))}function dp(t,e={}){return We("GET",`/grep${Ut({key:e.key,q:t,path:e.path,sub:e.sub||void 0,case:e.caseSensitive?"1":void 0,regex:e.regex?"1":void 0,word:e.wholeWord?"1":void 0,include:e.include||void 0,exclude:e.exclude||void 0})}`)}function Wt(t){return t.startsWith("ssh://")}function Qc(t){return qs(`mycomputer:${t??""}`,()=>We("GET",`/mycomputer${Ut({key:t})}`))}function Zc(){return qs("drives",()=>We("GET","/drives"))}function fp(){return We("GET","/ssh/hosts",void 0,{silent:!0})}function pp(t){return We("POST","/ssh/add",t)}function vp(t){return We("POST","/ssh/update",t)}function hp(t){return We("POST","/ssh/remove",{id:t})}function Zi(t){return We("POST","/ssh/test",t)}function mp(t){return We("POST","/ssh/ping",{id:t},{silent:!0})}function gp(t){return We("POST","/ssh/cache",{path:t})}function yp(){return We("GET","/recycle-list")}function wp(){return We("GET","/recycle-count")}function bp(t){return hn(We("POST","/recycle-restore",{fullPath:t}))}function _p(t){return hn(We("POST","/recycle-delete",{fullPath:t}))}function kp(){return hn(We("POST","/recycle-empty",{}))}function xp(t,e){return We("GET",`/browse${Ut({key:e,path:t})}`)}function Cp(t){return`${Yn}/download?path=${encodeURIComponent(t)}`}function Br(t){return`${Yn}/_read-image?path=${encodeURIComponent(t)}`}function $p(t,e,n){const i=new URLSearchParams({session:e.session,shell:e.shell});return e.cwd&&i.set("cwd",e.cwd),e.key&&i.set("key",e.key),Ep(`/exec-stream?${i.toString()}`,t,n)}function Sp(t,e,n){const i=typeof location<"u"?location.href:"http://127.0.0.1/",c=qc(Yn,i,"exec-mux-ws")+(e.key?`?key=${encodeURIComponent(e.key)}`:"");return new Promise(u=>{let v;try{v=new WebSocket(c)}catch{u();return}let d=!1;const p=()=>{if(!d){d=!0;try{n?.removeEventListener("abort",w)}catch{}try{v.close()}catch{}u()}},w=()=>p();n?.addEventListener("abort",w),v.onmessage=b=>{try{t(JSON.parse(String(b.data)))}catch{}},v.onclose=p,v.onerror=()=>{}})}function Ep(t,e,n){return new Promise(i=>{const c=new EventSource(`${Yn}${t}`);let u=!1;const v=()=>{if(!u){u=!0;try{c.close()}catch{}i()}};c.onmessage=d=>{try{e(JSON.parse(d.data))}catch{}},c.onerror=v,n&&(n.aborted?v():n.addEventListener("abort",v,{once:!0}))})}function Pi(t){return We("POST","/exec-open",t)}function Tp(t,e,n){return We("POST","/exec-resize",{session:t,cols:e,rows:n},{silent:!0})}function eu(t,e){return We("POST","/exec-input",{session:t,data:e},{silent:!0})}function Dp(t){return We("POST","/exec-kill",{session:t})}function Fp(){return We("GET","/term-env")}function Rp(t,e,n,i){return We("POST","/subagent/spawn",{path:t,isDir:e,instruction:n,session:i})}function Oa(t,e){return hn(We("POST","/mkdir",{key:e,path:t}))}function La(t,e,n){return hn(We("POST","/rename",{key:n,from:t,to:e}))}function el(t,e){return hn(We("DELETE",`/remove${Ut({key:e,path:t})}`))}function tu(t,e){return hn(We("POST","/touch",{key:e,path:t}))}function Np(t,e,n){return hn(We("POST","/copy",{key:n,src:t,destDir:e}))}async function Pp(t,e,n){Lo.pending++;try{const i=await fetch(`${Yn}/upload${Ut({dir:t,name:e.name,key:n})}`,{method:"POST",body:e}),c=await i.json().catch(()=>({ok:!1,error:"bad response"}));if(!c.ok)throw new Error(c.error||`HTTP ${i.status}`);return ri(),c.data}finally{Lo.pending--}}function Ba(t){return We("GET",`/detail${Ut({path:t})}`)}async function tl(t,e){try{return await We("GET",`/detail${Ut({path:t})}`,void 0,{silent:!0}),!0}catch(n){if(n instanceof Ws&&n.status===404)return!1;throw!Yc(n)&&!e?.silent&&fs(n instanceof Ws?Xc(n.status,n.message):y("errNetwork")),n}}async function nl(t){try{return await We("GET",`/detail${Ut({path:t})}`,void 0,{silent:!0})}catch{return null}}function sl(t,e={}){return We("GET",`/read${Ut({path:t,encoding:e.encoding,bom:e.hasBom===void 0?void 0:e.hasBom?"1":"0"})}`)}function Ir(t,e,n){return hn(We("POST","/compress",{key:n,path:t,to:e}))}function Ap(t,e,n){return hn(We("POST","/extract",{key:n,zipPath:t,destDir:e}))}function nu(t){return We("POST","/openExternal",{path:t})}function Mp(t){return qs(`gitstatus:${t}`,()=>We("GET",`/git/status${Ut({path:t})}`))}function Op(t){return We("GET",`/git/diff${Ut({path:t})}`)}function Lp(t){return Wl(We("POST","/git/add",{path:t}))}function su(t){return Wl(We("POST","/git/ignore",{path:t}))}function Bp(t,e){return Wl(We("POST","/git/commit",{path:t,message:e}))}function Ip(t){return hn(We("POST","/git/discard",{path:t}))}function Wo(t){return qs(`gitpanel:${t}`,()=>We("GET",`/git/panel${Ut({path:t})}`))}function Bo(t,e){return We("POST","/git/run",{path:t,args:e})}function jp(t,e){return hn(We("POST",t==="git"?"/git/clone":"/svn/checkout",e))}function jr(t,e,n,i){return We("POST","/git/gh-release",{path:t,tag:e,name:n,body:i})}function Vp(t){return We("GET",`/git/gh-releases${Ut({path:t})}`)}function ou(){return We("GET","/git/config")}function au(t,e){return We("POST","/git/config",{name:t,email:e})}function ps(t){return qs(`svninfo:${t}`,()=>We("GET",`/svn/info${Ut({path:t})}`))}function Jt(t,e){return We("POST","/svn/run",{path:t,args:e})}function zp(){return We("GET","/accounts")}function Up(t){return We("POST","/accounts/add",t)}function iu(t,e){return We("GET",`/accounts/match${Ut({kind:t,url:e})}`,void 0,{silent:!0})}function Hp(t){return We("POST","/accounts/update",t)}function Wp(t){return We("POST","/accounts/remove",{id:t})}function Gp(t){return We("POST","/accounts/test",t)}function qp(t){return We("POST","/accounts/apply",{id:t})}function lu(){return We("GET","/persist")}function Ks(t,e){return We("POST","/persist",{k:t,v:e})}async function Kp(){const t=await We("GET","/persist?k=taskLogs");return Array.isArray(t?.taskLogs)?t.taskLogs:[]}function Xp(t){return We("POST","/persist",{k:"taskLogs",v:t})}async function Yp(){return(await We("GET","/task-archives"))?.map??{}}function ql(t){return We("POST","/task-archives",{map:t})}function Es(){if(typeof window>"u")return null;const t=window.__DSH_FILE_WORKBENCH__?.officialTerminal;return t&&typeof t.create=="function"?t:null}function Jp(){try{return Es()?.available()??!1}catch{return!1}}const St=m([]),Gs=m(""),cs=m(null),bn=m(null),vs=m({});function ol(t){return vs.value[t]===!0}function Qp(t){vs.value[t]||(vs.value={...vs.value,[t]:!0})}function Kl(t){if(!vs.value[t])return;const e={...vs.value};delete e[t],vs.value=e}function Zp(){Object.keys(vs.value).length&&(vs.value={})}const An=m({}),Vr=1500,ev=/\x1b\[[0-9;?]*[ -/]*[@-~]/g;function Ia(t,e){const n=e.replace(ev,"");if(!n.trim())return;let c=(An.value[t]??"")+n;c.length>Vr&&(c=c.slice(c.length-Vr)),An.value={...An.value,[t]:c}}function tv(t){return An.value[t]??""}function nv(t){if(An.value[t]===void 0)return;const e={...An.value};delete e[t],An.value=e}async function ru(){if(cs.value===null)try{const t=await Fp();cs.value=t.elevated===!0}catch{}}let zr=0;function sv(){return zr+=1,zr}const Ur=4*1024*1024;function mo(t){return t.length>Ur?t.slice(t.length-Ur):t}const go=new Map;function Hr(t,e){e?go.set(t,e):go.delete(t)}let lo=null,Xl="",Ai=null;const cu="__DSH_FW_TERM_MUX_SSE__";function ov(){const e=globalThis[cu];if(e&&typeof e.dispose=="function")try{e.dispose()}catch{}}function uu(t){const e=St.value.find(n=>n.session===t.session);if(e){if(t.type==="output")e.output=mo(e.output+t.text),go.get(e.id)?.(t.text),Ia(e.id,t.text);else if(t.type==="cwd")e.cwd=t.cwd;else if(t.type==="exit"){if(e.connected=!1,e.ssh){Ia(e.id,`
[ssh] session closed
`),e.output=mo(e.output+`\r
\x1B[33m[ssh] session closed — 点「重连」重新登录\x1B[0m\r
`);return}window.setTimeout(()=>void Yl(e),300)}}}function du(t){return t?.message||String(t)}async function fu(t,e){if(t.ssh){const i=t.ssh;try{const c=await Pi({session:t.session,kind:"ssh",hostId:i.hostId,remote:i.remote,key:e});if(c?.kind!=="ssh")throw new Error("宿主未启用远端终端（缺少 /exec-open 的 kind 支持），请重启 dsh web");return t.sshDegraded=!1,c}catch(c){const u=du(c);t.output=mo(t.output+`\r
\x1B[33m[ssh] 自动登录 ${i.label} 失败：${u}\x1B[0m\r
\x1B[2m[ssh] 已回退到本机 ssh 客户端，请手动输入口令；修好后可用页脚「重连」再试直连。\x1B[0m\r
`),Ia(t.id,`[ssh] auto login failed: ${u}
`),t.sshDegraded=!0,t.cwd="";const v=await Pi({session:t.session,kind:"local",shell:t.shell,key:e});return t.initCmd=t.fallbackCmd,ja(t),v}}const n=await Pi({session:t.session,kind:"local",shell:t.shell,cwd:t.cwd||void 0,key:e});return ja(t),n}async function Yl(t){if(!(!St.value.includes(t)||t.connected)){if(t.output="",An.value={...An.value,[t.id]:""},t.backend==="official"){Es()?.close(t.id),t.connected=!0,hu(t);return}try{const e=await fu(t,Xl||void 0);e?.cwd&&(t.cwd=e.cwd),t.connected=!0,pu()}catch{t.connected=!1}}}function pu(){if(lo)return;ov();const t=new AbortController;lo=t;const e={dispose:()=>ci()};globalThis[cu]=e;const n=async()=>{if(!t.signal.aborted){try{await Sp(uu,{key:Xl},t.signal)}catch{}if(t.signal.aborted){lo===t&&(lo=null);return}window.setTimeout(()=>void n(),500)}};n()}function ci(){lo?.abort(),lo=null}function av(){St.value.some(t=>t.connected)||ci()}function ja(t){const e=t.initCmd;e&&(t.initCmd=void 0,window.setTimeout(()=>{t.connected&&(t.backend==="official"?Es()?.write(t.id,`${e}\r`):eu(t.session,`${e}\r`))},800))}function Wr(t,e){const n=new AbortController;t.streamAbort=n;const i=async()=>{if(!(!t.connected||n.signal.aborted)){try{await $p(c=>uu({...c,session:t.session}),{session:t.session,cwd:t.cwd||void 0,key:e,shell:t.shell},n.signal)}catch{}t.connected&&!n.signal.aborted?window.setTimeout(()=>void i(),500):t.connected=!1}};ja(t),i()}let Gr=!1;function vu(t){return St.value.find(e=>e.id===t&&e.backend==="official")}function iv(t){const e=vu(t.tag);e&&(e.output=mo(e.output+t.text),go.get(e.id)?.(t.text),Ia(e.id,t.text))}function lv(t){const e=vu(t.tag);if(e){if(t.cwd&&t.cwd!==e.cwd&&(e.cwd=t.cwd),t.exited){e.connected=!1,window.setTimeout(()=>void Yl(e),300);return}if(t.phase==="connected"&&!e.connected)e.connected=!0,ja(e);else if(t.phase==="failed"&&t.error){const n=`\r
\x1B[33m[term] ${t.error}\x1B[0m\r
`;e.output=mo(e.output+n),go.get(e.id)?.(n)}}}function rv(){Gr||typeof window>"u"||(Gr=!0,window.addEventListener("dshfw-ot-data",t=>iv(t.detail)),window.addEventListener("dshfw-ot-status",t=>lv(t.detail)))}async function hu(t){const e=Es();if(!e){t.backend=void 0,t.connected=!1,Va(t);return}rv();const n=await e.create(t.id,{cols:80,rows:24}).catch(()=>null);if(n===null){t.backend=void 0,t.connected=!1,Va(t);return}if(!St.value.includes(t)){e.close(t.id);return}n.cwd&&(t.cwd=n.cwd)}function Va(t,e){if(!t.connected){if(t.connected=!0,e&&(Xl=e),!t.ssh&&Jp()){t.backend="official",hu(t);return}if(t.backend=void 0,Ai===!1){Wr(t,e);return}pu(),fu(t,e).then(n=>{Ai=!0,n?.cwd&&(t.cwd=n.cwd)}).catch(n=>{n?.status===404&&(Ai=!1,St.value.some(i=>i.connected)||ci()),Wr(t,e)})}}const cv=16,uv=512,dv=/[\r\n\x03\x04\x1a]/,us=new Map;function mu(t){let e=us.get(t);return e||(e={pending:"",timer:0,inFlight:!1},us.set(t,e)),e}function al(t){const e=mu(t);if(e.timer&&(window.clearTimeout(e.timer),e.timer=0),!e.pending)return;const n=St.value.find(c=>c.session===t);if(n?.backend==="official"){const c=e.pending;e.pending="",Es()?.write(n.id,c),!e.pending&&!e.timer&&us.delete(t);return}if(e.inFlight)return;const i=e.pending;e.pending="",e.inFlight=!0,eu(t,i).catch(c=>{pv(t,c)}).finally(()=>{const c=us.get(t);c&&(c.inFlight=!1,c.pending?al(t):c.timer||us.delete(t))})}const fv=3e3,qr=new Map,Mi=new Set;function pv(t,e){const n=St.value.find(u=>u.session===t);if(!n)return;const i=du(e),c=Date.now();if(c-(qr.get(t)??0)>=fv){qr.set(t,c);const u=`\r
\x1B[31m[term] ${y("termInputFailed",{msg:i})}\x1B[0m\r
`;n.output=mo(n.output+u),go.get(n.id)?.(u),X("warning",y("termInputFailed",{msg:i}))}e?.status===404&&vv(n)}async function vv(t){if(!(Mi.has(t.session)||!St.value.includes(t))){Mi.add(t.session);try{ui(t),await Yl(t)}finally{Mi.delete(t.session)}}}function hv(t,e){if(!e)return;const n=St.value.find(c=>c.session===t);if(n&&!n.connected)return;const i=mu(t);if(i.pending+=e,dv.test(e)||i.pending.length>=uv){al(t);return}i.timer||(i.timer=window.setTimeout(()=>al(t),cv))}function gu(t){if(t){const e=us.get(t);e&&e.timer&&window.clearTimeout(e.timer),us.delete(t);return}for(const[e,n]of us)n.timer&&window.clearTimeout(n.timer),us.delete(e)}function ui(t){t.connected=!1,t.backend==="official"&&Es()?.detach(t.id),t.streamAbort?.abort(),t.streamAbort=void 0,gu(t.session),il.delete(t.session)}function Jl(t){return t.backend==="official"?(Es()?.close(t.id),Promise.resolve()):Dp(t.session).catch(()=>{})}const il=new Map;function mv(t,e,n){if(!e||!n)return;const i=`${e}x${n}`;if(il.get(t)===i)return;il.set(t,i);const c=St.value.find(u=>u.session===t);if(c?.backend==="official"){Es()?.resize(c.id,e,n);return}Tp(t,e,n).catch(()=>{})}async function Kr(t,e){const n=t.backend==="official";ui(t),t.output="",An.value={...An.value,[t.id]:""},await Jl(t),n&&(t.backend=void 0),Va(t,e)}function yu(t){const e=St.value.findIndex(i=>i.id===t),n=St.value[e];if(n&&(ui(n),Jl(n),St.value.splice(e,1),nv(t),Kl(t),av(),Gs.value===t)){const i=St.value[e]??St.value[e-1]??St.value[0];Gs.value=i?i.id:""}}async function gv(){const t=St.value.slice();St.value=[],Gs.value="",An.value={},Zp(),ci(),await Promise.all(t.map(e=>(ui(e),Jl(e).catch(()=>{}))))}const na=new Map;let Xr=0;function yv(t){return na.get(t)}function wv(t,e){na.set(t,e),wu()}function bv(t){na.delete(t)&&wu()}function wu(){Ks("termWins",Object.fromEntries(na))}function _v(t){if(!t||typeof t!="object")return;const e=t;for(const[n,i]of Object.entries(e)){if(!i||typeof i!="object")continue;const c=i;typeof c.x=="number"&&typeof c.y=="number"&&typeof c.w=="number"&&typeof c.h=="number"&&na.set(n,{x:c.x,y:c.y,w:c.w,h:c.h})}}function kv(){return{w:680,h:460,x:Math.max(12,window.innerWidth-680-24),y:Math.max(12,window.innerHeight-460-24)}}function xv(){Xr+=1;const t=kv(),e=Xr%8*30;return{w:t.w,h:t.h,x:Math.max(12,t.x-e),y:Math.max(12,t.y-e)}}function Yr(){return`t${Date.now().toString(36)}${Math.random().toString(36).slice(2,10)}`}function Cv(t,e){const n={id:Yr(),name:sv(),session:Yr(),cwd:e?.cwd??"",shell:e?.shell??"cmd",ssh:e?.ssh,fallbackCmd:e?.fallbackCmd||void 0,output:"",connected:!1,initCmd:e?.initCmd||void 0,focusPending:e?.focus===!0};return St.value.push(n),Gs.value=n.id,Va(n,t),n}function Jr(t){yu(t),bv(t)}function $v(t){const e=St.value.find(n=>n.id===t);return e?.focusPending?(e.focusPending=!1,!0):!1}const Io={showHidden:!0,view:"details",showExtensions:!0,sortKey:"name",asc:!0,theme:"auto",fontFamily:"default",fontSize:13,accentColor:"",allowOutsideRoot:!1,colWidths:{name:300,size:96,type:160},termShell:"cmd",termFontSize:13,txtWordWrap:!1,txtShowStatus:!0,vsGitBarH:0,autoSave:!1,vsMinimap:!0},Ue=gt({...Io}),bu=["huge","large","medium","small","list","details","content","tiles"];function Sv(t){if(!t||typeof t!="object")return{};const e=t,n={};typeof e.showHidden=="boolean"&&(n.showHidden=e.showHidden),typeof e.showExtensions=="boolean"&&(n.showExtensions=e.showExtensions),bu.includes(String(e.view))&&(n.view=e.view),["name","size","type","mtime"].includes(String(e.sortKey))&&(n.sortKey=e.sortKey),typeof e.asc=="boolean"&&(n.asc=e.asc),["auto","dark","light"].includes(String(e.theme))&&(n.theme=e.theme),typeof e.fontFamily=="string"&&(n.fontFamily=e.fontFamily.trim()||"default"),typeof e.fontSize=="number"&&e.fontSize>0&&(n.fontSize=e.fontSize),typeof e.accentColor=="string"&&/^#[0-9a-fA-F]{3,8}$/.test(e.accentColor)&&(n.accentColor=e.accentColor),typeof e.allowOutsideRoot=="boolean"&&(n.allowOutsideRoot=e.allowOutsideRoot);const i=e.colWidths;if(i&&typeof i=="object"){const c=(u,v)=>typeof u=="number"&&Number.isFinite(u)&&u>=40?u:v;n.colWidths={name:c(i.name,Io.colWidths.name),size:c(i.size,Io.colWidths.size),type:c(i.type,Io.colWidths.type)}}return(e.termShell==="powershell"||e.termShell==="cmd")&&(n.termShell=e.termShell),typeof e.termFontSize=="number"&&e.termFontSize>=8&&e.termFontSize<=36&&(n.termFontSize=e.termFontSize),typeof e.txtWordWrap=="boolean"&&(n.txtWordWrap=e.txtWordWrap),typeof e.txtShowStatus=="boolean"&&(n.txtShowStatus=e.txtShowStatus),typeof e.vsGitBarH=="number"&&e.vsGitBarH>=0&&(n.vsGitBarH=e.vsGitBarH),typeof e.autoSave=="boolean"&&(n.autoSave=e.autoSave),typeof e.vsMinimap=="boolean"&&(n.vsMinimap=e.vsMinimap),n}async function Ev(){const t=await lu().catch(()=>null);if(t){if(Object.assign(Ue,{...Io,...Sv(t.prefs)}),Array.isArray(t.favorites)&&(Us.value=t.favorites.map(String)),t.layout&&typeof t.layout=="object"){const e=t.layout,n=e.navGroups;if(n&&typeof n=="object"){const i=n;Object.assign(Un.navGroups,_u.navGroups),typeof i.home=="boolean"&&(Un.navGroups.home=i.home),typeof i.myComputer=="boolean"&&(Un.navGroups.myComputer=i.myComputer),typeof i.favorites=="boolean"&&(Un.navGroups.favorites=i.favorites),typeof i.ssh=="boolean"&&(Un.navGroups.ssh=i.ssh)}typeof e.explorerSplit=="number"&&e.explorerSplit>.05&&e.explorerSplit<.95&&(Un.explorerSplit=e.explorerSplit)}if(t.termWin&&typeof t.termWin=="object"){const e=t.termWin;typeof e.w=="number"&&e.w>0&&e.w,typeof e.h=="number"&&e.h>0&&e.h,typeof e.x=="number"&&e.x,typeof e.y=="number"&&e.y}if(t.termWins&&typeof t.termWins=="object"&&_v(t.termWins),t.folderViews&&typeof t.folderViews=="object"){for(const n of Object.keys(hs))delete hs[n];const e=t.folderViews;for(const[n,i]of Object.entries(e))bu.includes(String(i))&&(hs[n]=String(i))}}}function Hn(){Ks("prefs",{...Ue})}const _u={navGroups:{home:!0,myComputer:!0,favorites:!0,ssh:!0},explorerSplit:.3},Un=gt({..._u});function Da(){Ks("layout",{...Un})}const hs=gt({}),za=m(Ue.view);function ll(t){return hs[t]??Ue.view}function rl(t,e){hs[t]=e,Ks("folderViews",{...hs})}function Tv(){for(const t of Object.keys(hs))delete hs[t];Ks("folderViews",{...hs})}const Us=m([]);function Qr(){Ks("favorites",Us.value)}function ro(t){return Us.value.includes(t)}function Ua(t){const e=Us.value.indexOf(t);return e>=0?(Us.value.splice(e,1),Qr(),!1):(Us.value.push(t),Qr(),!0)}const Dv={class:"fw-dlg-head"},Fv={class:"fw-dlg-badge"},Rv={class:"fw-dlg-headtext"},Nv={class:"fw-dlg-headtitle"},Pv={class:"fw-dlg-headsub"},Av={class:"fw-set-body"},Mv={class:"fw-set-group"},Ov={class:"fw-set-group-title"},Lv={class:"fw-set-row"},Bv={class:"k"},Iv={class:"fw-set-row"},jv={class:"k"},Vv={class:"fw-set-row"},zv={class:"k"},Uv={class:"fw-set-group"},Hv={class:"fw-set-group-title"},Wv={class:"fw-set-row"},Gv={class:"k"},qv={class:"fw-set-accent"},Kv={class:"fw-set-row"},Xv={class:"k"},Yv={class:"fw-set-row"},Jv={class:"k"},Qv={class:"fw-set-row"},Zv={class:"k"},eh={class:"fw-set-row"},th={class:"k"},nh=ht({__name:"SettingsDialog",setup(t,{expose:e}){const{t:n}=Bt(),i=m(!1),c=["#1f883d","#238636","#0969da","#8250df","#b35900","#cf222e","#0a3069","#116329"];function u(w){Ue.accentColor=typeof w=="string"?w:"",Hn()}function v(){Ue.accentColor="",Hn()}e({open:()=>{i.value=!0}});function d(){Hn()}function p(){Tv(),Hn()}return(w,b)=>{const x=kf,A=xf,I=Mn,M=ai,V=oi,H=rn;return l(),Xe(H,{modelValue:i.value,"onUpdate:modelValue":b[8]||(b[8]=C=>i.value=C),class:"fw-set-dialog",width:"460px","align-center":"","modal-class":"fw-blur-overlay","close-on-click-modal":!1},{header:ne(()=>[o("div",Dv,[o("span",Fv,[h(se,{name:"gear",size:20})]),o("span",Rv,[o("span",Nv,a(s(n)("settings")),1),o("span",Pv,a(s(n)("settingsSubtitle")),1)])])]),default:ne(()=>[o("div",Av,[o("div",Mv,[o("div",Ov,a(s(n)("settingsGroupFiles")),1),o("div",Lv,[o("span",Bv,a(s(n)("allowOutsideRoot")),1),h(x,{modelValue:s(Ue).allowOutsideRoot,"onUpdate:modelValue":b[0]||(b[0]=C=>s(Ue).allowOutsideRoot=C),onChange:d},null,8,["modelValue"])]),o("div",Iv,[o("span",jv,a(s(n)("showHidden")),1),h(x,{modelValue:s(Ue).showHidden,"onUpdate:modelValue":b[1]||(b[1]=C=>s(Ue).showHidden=C),onChange:d},null,8,["modelValue"])]),o("div",Vv,[o("span",zv,a(s(n)("autoSave")),1),h(x,{modelValue:s(Ue).autoSave,"onUpdate:modelValue":b[2]||(b[2]=C=>s(Ue).autoSave=C),onChange:d},null,8,["modelValue"])])]),o("div",Uv,[o("div",Hv,a(s(n)("settingsGroupAppearance")),1),o("div",Wv,[o("span",Gv,a(s(n)("accentColor")),1),o("span",qv,[h(A,{modelValue:s(Ue).accentColor,"onUpdate:modelValue":b[3]||(b[3]=C=>s(Ue).accentColor=C),size:"small",predefine:c,"popper-class":"fw-set-popper",onChange:u},null,8,["modelValue"]),s(Ue).accentColor?(l(),Xe(I,{key:0,text:"",size:"small",class:"fw-set-accent-reset",onClick:v},{default:ne(()=>[ue(a(s(n)("accentReset")),1)]),_:1})):P("",!0)])]),o("div",Kv,[o("span",Xv,a(s(n)("fontSize")),1),h(V,{modelValue:s(Ue).fontSize,"onUpdate:modelValue":b[4]||(b[4]=C=>s(Ue).fontSize=C),size:"small",class:"fw-set-select","popper-class":"fw-set-popper",onChange:d},{default:ne(()=>[h(M,{value:12,label:s(n)("fontSizeSm")},null,8,["label"]),h(M,{value:13,label:s(n)("fontSizeMd")},null,8,["label"]),h(M,{value:14,label:s(n)("fontSizeLg")},null,8,["label"]),h(M,{value:16,label:s(n)("fontSizeXl")},null,8,["label"])]),_:1},8,["modelValue"])]),o("div",Yv,[o("span",Jv,a(s(n)("fontFamily")),1),h(V,{modelValue:s(Ue).fontFamily,"onUpdate:modelValue":b[5]||(b[5]=C=>s(Ue).fontFamily=C),size:"small",class:"fw-set-select","popper-class":"fw-set-popper",clearable:"",placeholder:s(n)("fontDefault"),onChange:d},{default:ne(()=>[h(M,{value:"default",label:s(n)("fontDefault")},null,8,["label"]),h(M,{value:"'Segoe UI', 'Microsoft YaHei', system-ui",label:s(n)("fontOptionYahei")},null,8,["label"]),h(M,{value:"Consolas",label:s(n)("fontOptionConsolas")},null,8,["label"]),h(M,{value:"'Courier New', monospace",label:s(n)("fontOptionCourier")},null,8,["label"]),h(M,{value:"Georgia, 'Times New Roman', serif",label:s(n)("fontOptionGeorgia")},null,8,["label"])]),_:1},8,["modelValue","placeholder"])]),o("div",Qv,[o("span",Zv,a(s(n)("themeMode")),1),h(V,{modelValue:s(Ue).theme,"onUpdate:modelValue":b[6]||(b[6]=C=>s(Ue).theme=C),size:"small",class:"fw-set-select","popper-class":"fw-set-popper",onChange:d},{default:ne(()=>[h(M,{value:"auto",label:s(n)("themeAuto")},null,8,["label"]),h(M,{value:"dark",label:s(n)("themeDark")},null,8,["label"]),h(M,{value:"light",label:s(n)("themeLight")},null,8,["label"])]),_:1},8,["modelValue"])]),o("div",eh,[o("span",th,a(s(n)("defaultView")),1),h(V,{modelValue:s(Ue).view,"onUpdate:modelValue":b[7]||(b[7]=C=>s(Ue).view=C),size:"small",class:"fw-set-select","popper-class":"fw-set-popper",onChange:p},{default:ne(()=>[h(M,{value:"details",label:s(n)("viewDetails")},null,8,["label"]),h(M,{value:"content",label:s(n)("viewContent")},null,8,["label"]),h(M,{value:"tiles",label:s(n)("viewTiles")},null,8,["label"]),h(M,{value:"list",label:s(n)("viewList")},null,8,["label"]),h(M,{value:"small",label:s(n)("viewSmall")},null,8,["label"]),h(M,{value:"medium",label:s(n)("viewMedium")},null,8,["label"]),h(M,{value:"large",label:s(n)("viewLarge")},null,8,["label"]),h(M,{value:"huge",label:s(n)("viewHuge")},null,8,["label"])]),_:1},8,["modelValue"])])])])]),_:1},8,["modelValue"])}}}),xt=(t,e)=>{const n=t.__vccOpts||t;for(const[i,c]of e)n[i]=c;return n},sh=xt(nh,[["__scopeId","data-v-fbafa4a0"]]),Ql=new Map,Zl=new Map,cl=new Set,ul=new Set,dl=new Set,jo=new Set,Go=new Set;let Vo=null,yo="\0unset",jt=null,ms=0,wo="",bo="";const Fa=new Set;let fo=!0;const Zr="__DSH_FW_PUSH_WS__";function oh(){fo=!0,ms&&(window.clearTimeout(ms),ms=0);const t=jt;jt=null;try{t?.close()}catch{}}const ec={dispose:()=>oh()};function ah(){const t=globalThis,e=t[Zr];if(e&&e!==ec&&typeof e.dispose=="function")try{e.dispose()}catch{}t[Zr]=ec}ah();function ku(){const t=new Set;for(const e of Ql.values())for(const n of e)t.add(n);return[...t].sort()}function xu(){const t=new Set(jo);for(const e of Zl.values())for(const n of e)t.add(n);return[...t].sort()}function ih(){if(!jo.size)return;const t=new Set;for(const e of Zl.values())for(const n of e)t.add(n);for(const e of Go)for(const n of e.ids)t.add(n);for(const e of[...jo])t.has(e)||jo.delete(e)}function lh(t,e){return qc(t,e,"push")}function rh(){const t=typeof location<"u"?location.href:"http://127.0.0.1/";return lh(Yn,t)}function Cu(){return jt!==null&&jt.readyState===WebSocket.OPEN}function tc(){fo||ms||(ms=window.setTimeout(()=>{ms=0,$u()},1500))}function $u(){if(fo||jt&&(jt.readyState===WebSocket.OPEN||jt.readyState===WebSocket.CONNECTING))return;let t;try{t=new WebSocket(rh())}catch{tc();return}jt=t,t.onopen=()=>{wo="",bo="",yo="\0unset",Su()},t.onmessage=e=>ch(e.data),t.onerror=()=>{},t.onclose=()=>{jt===t&&(jt=null),wo="",bo="",yo="\0unset",tc()}}function Su(){if(!jt||jt.readyState!==WebSocket.OPEN)return;const t=ku(),e=t.join(`
`);e!==wo&&(wo=e,jt.send(JSON.stringify({type:"watch",paths:t})));const n=xu(),i=n.join(`
`);if(i!==bo&&(bo=i,jt.send(JSON.stringify({type:"ssh-watch",ids:n}))),Fa.size){const c=[...Fa];Fa.clear(),jt.send(JSON.stringify({type:"ssh-check",ids:c}))}Vo!==yo&&(yo=Vo,jt.send(JSON.stringify({type:"session-watch",id:Vo})))}function ch(t){if(typeof t!="string")return;let e;try{e=JSON.parse(t)}catch{return}if(e.type==="changed"&&e.items){const n=e.items;for(const[i,c]of Object.entries(n))for(const u of cl)u(i,c);return}if(e.type==="ssh-status"&&e.items){const n=e.items;for(const i of ul)i(n);for(const i of[...Go])Object.keys(n).some(c=>i.ids.has(c))&&(Go.delete(i),i.resolve(n));return}if(e.type==="session-ev"&&e.ev&&typeof e.ev=="object")for(const n of dl)n(e.ev)}function _o(){if(!(ku().length>0||xu().length>0||Vo!==null)){fo=!0,wo="",bo="",yo="\0unset",ms&&(window.clearTimeout(ms),ms=0);const e=jt;jt=null;try{e?.close()}catch{}return}fo&&(wo="",bo="",yo="\0unset"),fo=!1,$u(),Su()}function uh(t,e){Ql.set(t,e),_o()}function dh(t){Ql.delete(t),_o()}function fh(t){return cl.add(t),()=>cl.delete(t)}function ph(t,e){Zl.set(t,e),_o()}function vh(t){return ul.add(t),()=>ul.delete(t)}function Eu(t,e=12e3){const n=[...new Set(t.filter(Boolean))];if(!n.length)return Promise.resolve({});for(const i of n)jo.add(i);return _o(),new Promise(i=>{let c=0;const u=d=>{c&&window.clearTimeout(c),Go.delete(v),ih(),_o(),i(d)},v={ids:new Set(n),resolve:u};if(Go.add(v),c=window.setTimeout(()=>u({}),e),jt&&jt.readyState===WebSocket.OPEN)jt.send(JSON.stringify({type:"ssh-check",ids:n}));else for(const d of n)Fa.add(d)})}function er(t){Vo=t,_o()}function hh(t){return dl.add(t),()=>dl.delete(t)}const an=m([]),Tu=m(!1),Zt=m({});function Ha(t){return Zt.value[t]?.state??"unknown"}function fl(t){return Zt.value[t]?.error??""}async function Wa(t){Zt.value={...Zt.value,[t]:{state:"checking"}};const n=(await Eu([t]))[t];return n?(Zt.value={...Zt.value,[t]:n.alive?{state:"online"}:{state:"offline",error:n.error}},n.alive):(Zt.value={...Zt.value,[t]:{state:"unknown"}},!1)}async function pl(){const t=an.value.map(n=>n.id);if(!t.length)return;const e={...Zt.value};for(const n of t)e[n]={state:"checking"};if(Zt.value=e,!Cu()){await Du();return}await Eu(t)}async function Hs(){try{const t=await fp();an.value=t.hosts??[];const e=new Set(an.value.map(n=>n.id));for(const n of Object.keys(Zt.value))e.has(n)||delete Zt.value[n];Fu()}catch{an.value=[]}finally{Tu.value=!0}}let vl=!1;function mh(){vl||(vl=!0,vh(t=>{const e={...Zt.value};for(const[n,i]of Object.entries(t))e[n]=i.alive?{state:"online"}:{state:"offline",error:i.error};Zt.value=e})),Fu(),yh()}const gh=3e4;let nc=null;async function Du(){const t=an.value.slice();t.length&&await Promise.all(t.map(async e=>{const n=await mp(e.id).catch(()=>null);n&&(Zt.value={...Zt.value,[e.id]:n.alive?{state:"online"}:{state:"offline",error:n.error}})}))}function yh(){nc||(nc=setInterval(()=>{Cu()||Du()},gh))}function Fu(){vl&&ph("ssh-store",an.value.map(t=>t.id))}function Ru(t){if(!t.startsWith("ssh://"))return null;const e=t.slice(6),n=e.indexOf("/"),i=n===-1?e:e.slice(0,n);if(!i)return null;const c=n===-1?"/":e.slice(n)||"/";return{hostId:i,remote:c.replace(/\/+$/,"")||"/"}}function wh(t,e="cmd"){const n=Ru(t);if(!n)return"";const i=an.value.find(w=>w.id===n.hostId);if(!i)return"";const c=i.authType==="key"&&i.privateKeyPath?`-i "${i.privateKeyPath}" `:"",d=`cd ${`'${n.remote.replace(/'/g,"'\\''")}'`} && exec bash -l`.replace(/"/g,'\\"'),p=e==="powershell"?`'${d.replace(/'/g,"''")}'`:`"${d}"`;return`ssh ${c}-p ${i.port||22} -o StrictHostKeyChecking=accept-new -t ${i.user}@${i.host} ${p}`}function zs(t){return`ssh://${t}/`}function bh(t){const e=Ru(t);if(!e)return null;const n=an.value.find(i=>i.id===e.hostId);return n?{hostId:n.id,remote:_h(e.remote),label:n.name||`${n.user}@${n.host}`}:null}function _h(t){const e=(t??"").trim().replace(/\\/g,"/");return e?e.startsWith("/")?e.replace(/\/+$/,"")||"/":`/${e.replace(/\/+$/,"")}`:"/"}function tr(t){if(!t.startsWith("ssh://"))return"";const e=t.slice(6),n=e.indexOf("/");return(n===-1?e:e.slice(0,n)).trim()}function Nu(t){if(!t.startsWith("ssh://"))return"";const e=t.slice(6),n=e.indexOf("/");return(n===-1?"":e.slice(n)).replace(/\/+$/,"")||"/"}function hl(t){const e=tr(t);if(!e)return t;const n=an.value.find(u=>u.id===e),i=n?n.name||`${n.user}@${n.host}`:e,c=Nu(t);return c&&c!=="/"?`${i} · ${c}`:i}function Ga(t){const e=tr(t);if(!e)return"";const n=Nu(t);if(!n||n==="/")return"";const i=n.lastIndexOf("/"),c=i<=0?"/":n.slice(0,i);return`ssh://${e}${c==="/"?"/":c}`}function sc(t,e){return`${t.replace(/\/+$/,"")}/${e}`}async function kh(t=!1){Tu.value&&!t||await Hs()}function Pu(t){if(!t.startsWith("ssh://"))return null;const e=t.slice(6),n=e.indexOf("/"),i=n===-1?e:e.slice(0,n);if(!i)return null;const c=n===-1?"":e.slice(n),u=an.value.find(w=>w.id===i),d=[{name:u?u.name||`${u.user}@${u.host}`:i,path:`ssh://${i}/`}];let p="";for(const w of c.split("/").filter(Boolean))p+=`/${w}`,d.push({name:w,path:`ssh://${i}${p}`});return d}const _n=gt({open:!1,editingId:null});function Au(){_n.editingId=null,_n.open=!0}function xh(t){_n.editingId=t,_n.open=!0}function wa(){_n.open=!1}const Fe=gt({key:"default",root:"",explorerPath:"",externalViewActive:!1,search:{q:"",hits:[],truncated:!1,running:!1,scope:""},termOpen:!1,termRequestCwd:"",termRequestCmd:"",termRequestSsh:null}),qa=m("");function ba(t){qa.value=t}const Po=m(!1),Ao=m(!1);async function Mu(t){if(!Wt(t))return{cwd:t,cmd:"",ssh:null};await kh();const e=bh(t);return e?{cwd:"",cmd:wh(t,Ue.termShell),ssh:e}:(X("info",y("remoteNoTerminal")),{cwd:"",cmd:"",ssh:null})}async function ko(t=""){Ou(await Mu(t)),Fe.termOpen?nr.value++:Fe.termOpen=!0}function Ou(t){Fe.termRequestCwd=t.cwd,Fe.termRequestCmd=t.cmd,Fe.termRequestSsh=t.ssh}const nr=m(0);async function Ch(t=""){Ou(await Mu(t)),Fe.termOpen?nr.value++:Fe.termOpen=!0}async function ml(t){const{root:e}=await Gl(t,Fe.key);return e===Fe.root||(Fe.root=e,Fe.explorerPath=e,Fe.search.hits=[],Fe.search.q=""),e}function bs(t){return!Fe.root||$h(Fe.root,t)?!0:Ue.allowOutsideRoot}function $h(t,e){const n=u=>u.replace(/[\\/]+/g,"/").replace(/\/$/,""),i=n(t).toLowerCase(),c=n(e).toLowerCase();return c===i||c.startsWith(`${i}/`)}async function Sh(){if(Fe.root)return;const{root:t}=await rp(Fe.key);if(t){Fe.root=t,Fe.explorerPath=t;return}const e=window.__DSH_FILE_WORKBENCH__?.getSessionDir?.();if(e){await ml(e);return}const n=window.__DSH_FILE_WORKBENCH__?.pickDirectory;if(n){const i=await n();i&&await ml(i)}}async function sa(t){const e=window.__DSH_FILE_WORKBENCH__;if(e?.openInSidebar){if(Wt(t)){const n=await gp(t);e.openInSidebar(n.path);return}e.openInSidebar(t)}}let Oi=0;async function po(t,e){if(Fe.search.q=t,!t.trim()){Fe.search.hits=[],Fe.search.truncated=!1;return}const n=(e||Fe.root||"").replace(/[\\/]+$/,"");if(!n)return;const i=++Oi;Fe.search.running=!0;try{const{matches:c,truncated:u,byContent:v,snippets:d}=await up(t,{key:Fe.key,path:n,limit:2e3,caseSensitive:Po.value,regex:Ao.value});if(i!==Oi)return;const p=new Set(v??[]);Fe.search.hits=c.map(w=>({name:w.slice(w.lastIndexOf("/")+1),path:`${n}/${w}`,isDir:!1,broken:!1,byContent:p.has(w),snippet:d?.[w]})),Fe.search.truncated=u,Fe.search.scope=n}finally{i===Oi&&(Fe.search.running=!1)}}const ae=gt({homeItems:[],listing:null,loading:!1,loadErr:"",view:"files",recycleItems:[],recycleLoading:!1,recycleErr:"",drives:[],drivesLoading:!1,drivesErr:""});async function Lu(){ae.loadErr="";try{ae.homeItems=(await Qc(Fe.key)).items}catch(t){ae.loadErr=t.message}}const It=gt({history:[],idx:-1}),zo="thispc",oc="回收站";function di(t){const e=t.trim();return e.startsWith("ssh://")?!0:/^[A-Za-z]:[\\/]/.test(e)||/^[\\/]{1,2}[^\\/]/.test(e)||/^[\\/]$/.test(e)}const Eh=L(()=>It.idx>0),Th=L(()=>It.idx<It.history.length-1),Dh=L(()=>ae.view==="files");function Bu(t,e){if(!e)return;const n=t===zo?t:t.replace(/[\\/]+$/,""),i=It.history[It.idx]===zo?zo:It.history[It.idx]?.replace(/[\\/]+$/,"")??"";n!==i&&(It.history.length=It.idx+1,It.history.push(n),It.idx=It.history.length-1)}async function Vt(t,e=!0){if(di(t)){ae.view="files",Bu(t,e),ae.loadErr="",ae.loading=!0;try{ae.listing=await xp(t,Fe.key)}catch(n){ae.loadErr=n.message}finally{ae.loading=!1}}}async function sr(){ae.drivesErr="",ae.drivesLoading=!0;try{ae.drives=(await Zc()).drives??[]}catch(t){ae.drivesErr=t.message}finally{ae.drivesLoading=!1}}async function Iu(t=!0){Bu(zo,t),ae.view="computer",ae.loadErr="",ae.listing=null,await sr()}async function ju(t,e=!0){t===zo?await Iu(e):await Vt(t,e)}function Vu(){It.idx>0&&(It.idx-=1,ju(It.history[It.idx],!1))}function zu(){It.idx<It.history.length-1&&(It.idx+=1,ju(It.history[It.idx],!1))}async function Uu(){const t=ae.homeItems,e=t.find(n=>n.type==="home")?.path??t.find(n=>n.type==="workspace")?.path??t.find(n=>n.type==="drive")?.path;e&&await Vt(e)}async function gl(){ae.view==="files"&&ae.listing&&(ae.listing.parent?await Vt(ae.listing.parent):await Uu())}async function Hu(){const t=window.__DSH_FILE_WORKBENCH__?.getSessionDir?.();if(!t)return!1;const e=Fe.root;try{await ml(t)}catch{return!1}return Fe.root!==e&&await Lu(),await Vt(t),!0}function Ft(){return xs("mycomputer"),xs("drives"),ae.view==="computer"?sr():ae.view==="recycle"?_s():ae.listing?Vt(ae.listing.path,!1):Promise.resolve()}function Fh(){return(ae.recycleItems??[]).map(t=>{const e=Date.parse(t.dateDeleted);return{name:t.name,path:t.fullPath,isDir:t.isDir,isSymlink:!1,broken:!1,hidden:!1,size:t.size||0,mtime:Number.isNaN(e)?void 0:e,recycleFullPath:t.fullPath,originalPath:t.originalPath,dateDeleted:t.dateDeleted}})}async function Wu(){ae.recycleErr="",ae.recycleLoading=!0,ae.loading=!0,ae.loadErr="";try{const t=(await yp()).items;ae.recycleItems=Array.isArray(t)?t:[],ae.listing={path:oc,name:oc,entries:Fh(),truncated:!1}}catch(t){ae.recycleErr=t.message,ae.loadErr=t.message,ae.listing=null}finally{ae.recycleLoading=!1,ae.loading=!1}}async function ac(){ae.view="recycle",await Wu()}function _s(){return Wu()}async function Rh(){(window.__DSH_FILE_WORKBENCH__?.getSessionDir?.()??null)&&await Ft()}const yl=L(()=>ae.listing?.path??"");let ic=!1;function Nh(){return ic?!1:(ic=!0,!0)}const Gu="vscode";function fi(){return typeof window<"u"?window.__DSH_SIDEBAR_RIGHT__:void 0}function qu(t,e){fi()?.openTab(t,e)}function or(t){return fi()?.newEditorTab(t)??!1}function Ph(){const t=fi();if(!t)return!1;const e=t.editorTabLimit();return e>0&&t.editorTabCount()>=e}function Ah(t){fi()?.float(t)}let xo=null;function Mh(){const t=xo;return xo=null,t}function Oh(){xo=null}let wl=null;function lc(){const t=wl;return wl=null,t}function ar(t,e={}){const n=t?.trim();if(!n)return;if(n.startsWith("ssh://")){Lh(n,e.isDir);return}xo=n;const i=Ph();if(!or({projectDir:n})){qu(Gu,{params:{projectDir:n}});return}i&&X("info",y("vsReplacedOldest"))}async function Lh(t,e){const n=zs(tr(t));let i=e;i===void 0&&t!==n&&(i=(await nl(t))?.isDir??!1);const c=t===n||i===!0;xo=c?t:n,wl=c?null:t;const u=xo;or({projectDir:u})||qu(Gu,{params:{projectDir:u}})}const Nt=gt({list:[],history:[],archives:{}});let Bh=1,rc=!1;const Ku=gt({value:!1});function Ih(t){Ku.value=t}function ir(t){const e=new Date(t),n=i=>String(i).padStart(2,"0");return`${e.getFullYear()}-${n(e.getMonth()+1)}-${n(e.getDate())}`}function lr(){return ir(Date.now())}function _a(t){return t.doneAt??t.startedAt}function Xu(t){let e=!0;for(let n=1;n<t.length;n++)if(_a(t[n-1])<_a(t[n])){e=!1;break}return e?!1:(t.sort((n,i)=>_a(i)-_a(n)),!0)}function Yu(t){if(!t.length)return;const e=lr(),n=Nt.archives[e]??(Nt.archives[e]=[]);n.push(...t),Xu(n),ql(Nt.archives)}async function jh(){if(!rc){rc=!0;try{const t=await Kp(),e=await Yp(),n=lr(),i=[];let c=!1;for(const v of t){const d=ir(v.doneAt??v.startedAt);d===n?i.push(v):((e[d]??=[]).push(v),c=!0)}let u=!1;for(const v of Object.keys(e))Xu(e[v])&&(u=!0);Nt.history=i,Nt.archives=e,(c||u)&&(pi(),ql(e))}catch{Nt.history=[],Nt.archives={}}}}function pi(){Xp(Nt.history)}function Vh(t){const e=ir(t.doneAt??t.startedAt);e===lr()?(Nt.history.unshift(t),Nt.history.length>200&&(Nt.history.length=200),pi()):((Nt.archives[e]??(Nt.archives[e]=[])).unshift(t),ql(Nt.archives))}function sn(t,e,n,i){const c=Bh++,u=gt({id:c,label:t,detail:e,status:"running",startedAt:Date.now(),logs:[{time:Date.now(),status:"running",msg:t,file:e,fileType:n,fileSize:i}]});Nt.list.unshift(u),Nt.list.length>80&&(Nt.list.length=80);const v=(w,b)=>{u.status=w,u.doneAt=Date.now(),u.msg=b,u.logs.push({time:u.doneAt,status:w,msg:b??"",file:e}),Vh({label:u.label,detail:e,status:w,msg:b,startedAt:u.startedAt,doneAt:u.doneAt,logs:u.logs.map(x=>({...x}))})};return{step:(w,b,x,A,I)=>{u.status==="running"&&u.logs.push({time:Date.now(),status:"running",msg:w,file:b,detail:x,fileType:A,fileSize:I})},updateLabel:w=>{u.label=w},done:w=>v("done",w),fail:w=>v("error",w)}}async function Ju(){Yu(Nt.history),Nt.history=[],Nt.list=Nt.list.filter(t=>t.status==="running"),pi()}async function Qu(){Yu(Nt.history),Nt.history=[],Nt.list=[],pi()}const Kn={state:Nt,startTask:sn,initTaskLogs:jh,clearFinished:Ju,clearAll:Qu,setOpen:Ih,open:Ku},{t:no}=Bt();function zh(t){return new Promise(e=>setTimeout(e,t))}async function Zu(){if((ae.recycleItems?.length??0)===0||!await Mt({title:no("recycleEmpty"),message:no("recycleEmptyConfirm")}))return;const e=sn(no("recycleEmptying"),"");try{await kp();let n=ae.recycleItems?.length??0;for(let i=0;i<120;i+=1){await zh(1e3);try{n=(await wp()).count}catch{}if(e.step(no("recycleEmptyProgress",{count:n})),n<=0)break}e.updateLabel(no("recycleEmptyDone")),e.done(no("recycleEmptyDone")),await _s()}catch(n){e.fail(n.message),X("error",n.message)}}function bl(){return Ue.theme==="dark"?!0:Ue.theme==="light"?!1:typeof document>"u"?!0:document.documentElement.style.colorScheme!==""?document.body.hasAttribute("data-ds-dark-theme"):typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const ed=[["--dsh-bg","--dsw-alias-bg-base"],["--dsh-bg2","--dsw-alias-bg-layer-1"],["--dsh-border","--dsw-alias-border-l1"],["--dsh-fg","--dsw-alias-label-primary"],["--dsh-fg-weak","--dsw-alias-label-secondary"],["--dsh-hover","--dsw-alias-interactive-bg-hover"],["--dsh-accent","--dsw-alias-state-success-primary"]];function Uh(t){if(typeof document>"u")return;const e=t??document.body??document.documentElement,n=getComputedStyle(e),i=[document.documentElement,t].filter(c=>!!c);for(const[c,u]of ed){const v=n.getPropertyValue(u).trim();if(v)for(const d of i)d.style.setProperty(c,v)}}function Hh(t){if(typeof document>"u")return;const e=[document.documentElement,t].filter(n=>!!n);for(const[n]of ed)for(const i of e)i.style.removeProperty(n)}function Wh(){if(Ue.theme==="dark")return"dark";if(Ue.theme==="light")return"light";if(typeof document>"u")return"dark";const e=document.querySelector(".fw-root[data-theme]")?.getAttribute("data-theme");return e==="light"||e==="dark"?e:bl()?"dark":"light"}function rr(t){const e=m(bl()?"dark":"light");function n(){const v=bl();if(e.value=v?"dark":"light",t.value&&t.value.setAttribute("data-theme",e.value),typeof document<"u"){const d=document.documentElement;d.setAttribute("data-theme",e.value);const p=d.style.colorScheme!=="";Ue.theme==="auto"&&p?Uh(t.value):Hh(t.value),d.classList.toggle("dark",v),i(d),t.value&&i(t.value)}}function i(v){Ue.accentColor?v.style.setProperty("--dsh-accent",Ue.accentColor):v.style.removeProperty("--dsh-accent")}n();let c;typeof document<"u"&&typeof MutationObserver<"u"&&(c=new MutationObserver(n),c.observe(document.body,{attributes:!0,attributeFilter:["data-ds-dark-theme"]}));const u=typeof matchMedia<"u"?matchMedia("(prefers-color-scheme: dark)"):void 0;return u?.addEventListener("change",n),Qe(()=>[Ue.theme,Ue.accentColor],n,{deep:!1}),zl(()=>{c?.disconnect(),u?.removeEventListener("change",n)}),e}const Gh=["data-theme"],qh={key:0,class:"fw-cm-header"},Kh={key:0,class:"fw-cm-sep"},Xh=["onMouseenter","onClick"],Yh={class:"fw-cm-ico"},Jh={key:1},Qh={class:"fw-cm-label"},Zh={key:0,class:"fw-cm-hint"},em={class:"fw-cm-check"},tm={key:1,class:"fw-cm-arrow"},nm=["title","onClick"],sm={key:1,class:"fw-cm-footer"},om={key:0,class:"fw-cm-sep"},am=["onClick"],im={class:"fw-cm-ico"},lm={key:1},rm={class:"fw-cm-label"},cm={key:0,class:"fw-cm-sep"},um=["onClick"],dm={class:"fw-cm-ico"},fm={key:1},pm={class:"fw-cm-label"},vm={class:"fw-cm-check"},hm=ht({__name:"ContextMenu",props:{items:{},x:{},y:{},maxHeight:{},footerItems:{},placement:{}},emits:["close"],setup(t,{emit:e}){const n=t,i=e,c=m(!1),u=m(null),v=m(null),d=m({x:n.x,y:n.y}),p=m(-1),w=m(!1),b=m(null),x=m({x:0,y:0}),A=m("dark");function I(){return A.value=Wh(),A.value}function M(ke){return!!ke.separator}Qe(()=>[n.x,n.y],([ke,le])=>{d.value={x:ke,y:le},p.value=-1,b.value=null,c.value=!0,I(),requestAnimationFrame(V)}),Qe(()=>n.items,()=>{c.value&&requestAnimationFrame(V)});function V(){const ke=u.value;if(!ke)return;const le=window.innerWidth,re=window.innerHeight,Ee=ke.getBoundingClientRect();let Ve=d.value.x,ye=d.value.y;Ve+Ee.width>le-4&&(Ve=Math.max(4,le-Ee.width-4)),ye+Ee.height>re-4&&(ye=Math.max(4,re-Ee.height-4)),Ee.top<4&&(ye=Math.max(4,ye+(4-Ee.top))),d.value={x:Ve,y:ye}}function H(ke,le){p.value=ke;const re=u.value,Ee=n.items[ke],Ve=le?.currentTarget??re?.querySelectorAll(".fw-cm-item")[ke]??null;w.value=!!re&&d.value.x+re.getBoundingClientRect().width+180>window.innerWidth,Ee?.children?.length?(b.value=Ee,C(Ve)):b.value=null}function C(ke){const le=ke??null;if(!le)return;const re=le.getBoundingClientRect();let Ve=w.value?re.left-220:re.right-2;const ye=Math.max(4,re.top-4);x.value={x:Ve,y:ye},requestAnimationFrame(()=>{const Ne=v.value;if(!Ne)return;const W=Ne.getBoundingClientRect();let J=Ve,z=ye;J+W.width>window.innerWidth-4&&(J=Math.max(4,window.innerWidth-W.width-4)),z+W.height>window.innerHeight-4&&(z=Math.max(4,window.innerHeight-W.height-4)),x.value={x:J,y:z}})}function Z(ke){ke.disabled||ke.children?.length||(ke.onClick?.(),B())}function G(ke){ke.disabled||(ke.onClick?.(),B())}function F(ke){ke.trailing?.disabled||ke.trailing?.onClick?.()}function de(ke){ke.disabled||(ke.onClick?.(),B())}function B(){c.value=!1,p.value=-1,b.value=null,i("close")}function ve(){B()}function _e(ke){ke.key==="Escape"&&B()}return ln(()=>{c.value=!0,I(),requestAnimationFrame(V),window.addEventListener("keydown",_e)}),Pt(()=>{window.removeEventListener("keydown",_e)}),(ke,le)=>(l(),Xe(jc,{to:"body"},[c.value?(l(),r("div",{key:0,class:"fw-cm-backdrop",onMousedown:ve,onContextmenu:be(ve,["prevent"])},[o("div",{ref_key:"menuEl",ref:u,class:te(["fw-cm",{"fw-cm-up":n.placement==="top"}]),"data-theme":A.value,style:_t({left:d.value.x+"px",top:d.value.y+"px"}),onMousedown:le[2]||(le[2]=be(()=>{},["stop"])),onContextmenu:le[3]||(le[3]=be(()=>{},["prevent"]))},[ke.$slots.header?(l(),r("div",qh,[mf(ke.$slots,"header",{},void 0,!0)])):P("",!0),o("div",{class:"fw-cm-scroll",style:_t(n.maxHeight?{maxHeight:n.maxHeight}:void 0)},[(l(!0),r(oe,null,Ae(t.items,(re,Ee)=>(l(),r(oe,{key:Ee},[M(re)?(l(),r("div",Kh)):(l(),r("div",{key:1,class:te(["fw-cm-item",{disabled:re.disabled,checked:re.checked,hasChild:!!re.children?.length}]),onMouseenter:Ve=>H(Ee,Ve),onClick:Ve=>Z(re)},[o("span",Yh,[s(Oo)(re.icon??"")?(l(),Xe(se,{key:0,name:re.icon??"",size:14},null,8,["name"])):(l(),r("span",Jh,a(re.icon??""),1))]),o("span",Qh,a(re.label),1),re.hint?(l(),r("span",Zh,a(re.hint),1)):P("",!0),o("span",em,a(re.checked?"✓":""),1),re.children?.length?(l(),r("span",tm,[h(se,{name:"chevronRight",size:10})])):P("",!0),re.trailing?(l(),r("span",{key:2,class:te(["fw-cm-trailing",{disabled:re.trailing.disabled}]),title:re.trailing.title,onClick:be(Ve=>F(re),["stop"]),onMousedown:le[0]||(le[0]=be(()=>{},["stop"])),onMouseenter:le[1]||(le[1]=be(()=>{},["stop"]))},[h(se,{name:re.trailing.icon,size:12},null,8,["name"])],42,nm)):P("",!0)],42,Xh))],64))),128))],4),t.footerItems?.length?(l(),r("div",sm,[(l(!0),r(oe,null,Ae(t.footerItems,(re,Ee)=>(l(),r(oe,{key:"f"+Ee},[M(re)?(l(),r("div",om)):(l(),r("div",{key:1,class:te(["fw-cm-item",{disabled:re.disabled}]),onClick:Ve=>de(re)},[o("span",im,[s(Oo)(re.icon??"")?(l(),Xe(se,{key:0,name:re.icon??"",size:14},null,8,["name"])):(l(),r("span",lm,a(re.icon??""),1))]),o("span",rm,a(re.label),1)],10,am))],64))),128))])):P("",!0),b.value?(l(),r("div",{key:2,ref_key:"subEl",ref:v,class:te(["fw-cm fw-cm-sub",{"fw-cm-sub-left":w.value}]),style:_t({left:x.value.x+"px",top:x.value.y+"px"})},[(l(!0),r(oe,null,Ae(b.value.children,(re,Ee)=>(l(),r(oe,{key:Ee},[M(re)?(l(),r("div",cm)):(l(),r("div",{key:1,class:te(["fw-cm-item",{disabled:re.disabled,checked:re.checked}]),onClick:Ve=>G(re)},[o("span",dm,[s(Oo)(re.icon??"")?(l(),Xe(se,{key:0,name:re.icon??"",size:14},null,8,["name"])):(l(),r("span",fm,a(re.icon??""),1))]),o("span",pm,a(re.label),1),o("span",vm,a(re.checked?"✓":""),1)],10,um))],64))),128))],6)):P("",!0)],46,Gh)],32)):P("",!0)]))}}),Qt=xt(hm,[["__scopeId","data-v-00e617b4"]]);function pn(){const t=m(!1),e=m(0),n=m(0),i=m([]);function c(d,p=[]){u(d.clientX,d.clientY,p)}function u(d,p,w=[]){i.value=w,e.value=d,n.value=p,t.value=!0}function v(){t.value=!1}return{cmOpen:t,cmX:e,cmY:n,cmItems:i,openMenu:c,openMenuAt:u,closeMenu:v}}const mm={class:"fw-clone-head"},gm={class:"fw-clone-badge"},ym={class:"fw-clone-headtext"},wm={class:"fw-clone-headtitle"},bm={class:"fw-clone-headsub"},_m={class:"fw-ssh-dlg-body"},km={class:"fw-ssh-field"},xm={class:"fw-ssh-lb"},Cm={class:"fw-ssh-field"},$m={class:"fw-ssh-lb"},Sm={class:"fw-ssh-addr"},Em={class:"fw-ssh-field"},Tm={class:"fw-ssh-lb"},Dm={class:"fw-ssh-addr"},Fm={key:0,class:"fw-ssh-err"},Rm=ht({__name:"SshHostDialog",setup(t){const{t:e}=Bt(),n=L({get:()=>_n.open,set:H=>{H||wa()}}),i=L(()=>_n.editingId!==null),c=L(()=>an.value.find(H=>H.id===_n.editingId)??null),u=gt({name:"",user:"",host:"",authType:"password",password:"",privateKeyPath:""}),v=m("22"),d=L(()=>Math.trunc(Number(v.value))||22),p=m(!1),w=m(""),b=L(()=>{const H=u.user.trim()||"user",C=u.host.trim()||"host";return`${H}@${C}`});Qe(()=>_n.open,H=>{if(H)if(w.value="",p.value=!1,i.value&&c.value){const C=c.value;u.name=C.name,u.user=C.user,u.host=C.host,u.authType=C.authType,u.password="",u.privateKeyPath=C.privateKeyPath??"",v.value=String(C.port)}else u.name="",u.user="",u.host="",u.authType="password",u.password="",u.privateKeyPath="",v.value="22"},{immediate:!0});function x(){wa()}function A(){wa()}async function I(H){p.value=!0,w.value="";try{await H()}catch(C){w.value=C instanceof Error?C.message:String(C)}finally{p.value=!1}}async function M(){if(!u.host.trim()||!u.user.trim()){ao(e("sshRequired"));return}if(i.value&&_n.editingId){const H=c.value;if(u.authType==="password"?!u.password.trim():!u.privateKeyPath.trim()||u.privateKeyPath.trim()===(H?.privateKeyPath??"")){const Z=_n.editingId??void 0;await I(async()=>{const G=await Zi({id:Z});G.ok?rs(`${e("sshTestOk")}${G.banner?` (${G.banner})`:""}`):fs(`${e("sshTestFail")}: ${G.error??""}`)});return}}await I(async()=>{const H=await Zi({host:u.host.trim(),port:d.value,user:u.user.trim(),auth:u.authType==="password"?{type:"password",password:u.password}:{type:"key",privateKeyPath:u.privateKeyPath.trim()}});H.ok?rs(`${e("sshTestOk")}${H.banner?` (${H.banner})`:""}`):fs(`${e("sshTestFail")}: ${H.error??""}`)})}async function V(){if(!u.host.trim()||!u.user.trim()){ao(e("sshRequired"));return}await I(async()=>{if(i.value&&_n.editingId){const H=await vp({id:_n.editingId,name:u.name.trim()||void 0,host:u.host.trim(),port:d.value,user:u.user.trim(),auth:u.authType==="password"?{type:"password",password:u.password||void 0}:{type:"key",privateKeyPath:u.privateKeyPath.trim()}});rs(e("sshUpdateSuccess")),await Hs(),await Wa(H.host.id)}else{const H=await pp({name:u.name.trim()||void 0,host:u.host.trim(),port:d.value,user:u.user.trim(),auth:u.authType==="password"?{type:"password",password:u.password}:{type:"key",privateKeyPath:u.privateKeyPath.trim()}});rs(e("sshAddSuccess")),await Hs(),await pl(),await Wa(H.host.id)}wa()})}return(H,C)=>{const Z=Ss,G=ai,F=oi,de=Mn,B=rn;return l(),Xe(B,{modelValue:n.value,"onUpdate:modelValue":C[7]||(C[7]=ve=>n.value=ve),class:"fw-ssh-dlg",width:"420px","close-on-click-modal":!0,"append-to-body":"",onClosed:x},{header:ne(()=>[o("div",mm,[o("span",gm,[h(se,{name:"hardDrive",size:20})]),o("div",ym,[o("div",wm,a(i.value?s(e)("sshEditTitle"):s(e)("sshNewHost")),1),o("div",bm,a(s(e)("sshHostCaption")),1)])])]),footer:ne(()=>[h(de,{size:"small",loading:p.value,onClick:M},{default:ne(()=>[ue(a(s(e)("sshTestConn")),1)]),_:1},8,["loading"]),h(de,{size:"small",onClick:A},{default:ne(()=>[ue(a(s(e)("sshCancel")),1)]),_:1}),h(de,{size:"small",type:"primary",loading:p.value,onClick:V},{default:ne(()=>[ue(a(i.value?s(e)("sshSaveEdit"):s(e)("sshSaveAdd")),1)]),_:1},8,["loading"])]),default:ne(()=>[o("div",_m,[o("label",km,[o("span",xm,a(s(e)("sshName")),1),h(Z,{modelValue:u.name,"onUpdate:modelValue":C[0]||(C[0]=ve=>u.name=ve),size:"small",placeholder:b.value},null,8,["modelValue","placeholder"])]),o("label",Cm,[o("span",$m,a(s(e)("sshAddr")),1),o("span",Sm,[h(Z,{modelValue:u.user,"onUpdate:modelValue":C[1]||(C[1]=ve=>u.user=ve),size:"small",placeholder:s(e)("sshUser"),class:"fw-ssh-user"},null,8,["modelValue","placeholder"]),C[8]||(C[8]=o("span",{class:"fw-ssh-at"},"@",-1)),h(Z,{modelValue:u.host,"onUpdate:modelValue":C[2]||(C[2]=ve=>u.host=ve),size:"small",placeholder:s(e)("sshHostAddr"),class:"fw-ssh-host"},null,8,["modelValue","placeholder"]),C[9]||(C[9]=o("span",{class:"fw-ssh-at"},":",-1)),h(Z,{modelValue:v.value,"onUpdate:modelValue":C[3]||(C[3]=ve=>v.value=ve),size:"small",placeholder:"22",class:"fw-ssh-port"},null,8,["modelValue"])])]),o("label",Em,[o("span",Tm,a(s(e)("sshAuth")),1),o("span",Dm,[h(F,{modelValue:u.authType,"onUpdate:modelValue":C[4]||(C[4]=ve=>u.authType=ve),size:"small",class:"fw-ssh-auth"},{default:ne(()=>[h(G,{value:"password",label:s(e)("sshAuthPassword")},null,8,["label"]),h(G,{value:"key",label:s(e)("sshAuthKey")},null,8,["label"])]),_:1},8,["modelValue"]),u.authType==="password"?(l(),Xe(Z,{key:0,modelValue:u.password,"onUpdate:modelValue":C[5]||(C[5]=ve=>u.password=ve),size:"small",type:"password","show-password":"",placeholder:i.value&&c.value?.hasSecret?s(e)("sshKeepSecret"):s(e)("sshPassword"),class:"fw-ssh-secret"},null,8,["modelValue","placeholder"])):(l(),Xe(Z,{key:1,modelValue:u.privateKeyPath,"onUpdate:modelValue":C[6]||(C[6]=ve=>u.privateKeyPath=ve),size:"small",placeholder:s(e)("sshKeyPath"),class:"fw-ssh-secret"},null,8,["modelValue","placeholder"]))])]),w.value?(l(),r("div",Fm,a(w.value),1)):P("",!0)])]),_:1},8,["modelValue"])}}}),Nm=xt(Rm,[["__scopeId","data-v-615d3584"]]);function td(t,e){const n=(t??"").replace(":","").trim().charAt(0).toUpperCase();return n?e?`${e} (${n}:)`:y("driveLabel",{drive:n}):e||"/"}function js(t){return td(t.letter,t.label)}function nd(t){return t.type!=="drive"?t.name:td(t.path?.charAt(0)??"",t.label)}const Ka=5;function sd(t){if(typeof t=="string")return t;if(!t)return"";const e=typeof document<"u"?document.documentElement.lang||navigator.language:"en",n=e.toLowerCase();return t[e]??t[n]??(n.startsWith("zh")?t.zh??t.en:t.en??t.zh)??Object.values(t)[0]??""}const qo=m([]);function cr(t){vi(t.id),qo.value=[...qo.value,t].sort((e,n)=>(e.order??0)-(n.order??0))}function vi(t){qo.value=qo.value.filter(e=>e.id!==t)}function od(){return qo.value}const Ko=m([]);function ad(t){ur(t.id),Ko.value=[...Ko.value,t].sort((e,n)=>(e.order??0)-(n.order??0))}function ur(t){Ko.value=Ko.value.filter(e=>e.id!==t)}function Pm(){return Ko.value}function Xa(t){if(!t)return;t.style.overflowY="auto";const e=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT);for(let n=e.firstChild();n;n=e.nextSibling()){const i=n;if(i.scrollHeight<=i.clientHeight+1)continue;const c=getComputedStyle(i).overflowY;(c==="hidden"||c==="clip")&&(i.style.overflowY="auto")}}const oa=new Map;function id(t,e){oa.set(t,e)}function dr(t){return oa.delete(t)}function ld(t){return oa.has(t)}function fr(){return[...oa.keys()]}function hi(t,...e){const n=oa.get(t);if(n)return n(...e)}const Xo=m([]);function rd(t){mi(t.id),Xo.value=[...Xo.value,t].sort((e,n)=>(e.order??0)-(n.order??0))}function mi(t){Xo.value=Xo.value.filter(e=>e.id!==t)}function gi(){return Xo.value}const Yo=m([]);function cd(t){yi(t.id),Yo.value=[...Yo.value,t].sort((e,n)=>(e.order??0)-(n.order??0))}function yi(t){Yo.value=Yo.value.filter(e=>e.id!==t)}function Jo(){return Yo.value}const Qo=m([]);function ud(t){pr(t.id),Qo.value=[...Qo.value,t].sort((e,n)=>(e.order??0)-(n.order??0))}function pr(t){Qo.value=Qo.value.filter(e=>e.id!==t)}function Ya(){return Qo.value}const dd={start(t,e){return sn(t,e?.detail,e?.fileType,e?.fileSize)},clearFinished(){return Ju()},clearAll(){return Qu()}};function Am(){const e=window.__dshFileWorkbenchVSCode__?.__proxy;return e?(e.rebindVSCode({registerView:cr,unregisterView:vi,registerCommand:id,executeCommand:hi,hasCommand:ld,listCommands:fr,unregisterCommand:dr,registerStatus:rd,unregisterStatus:mi,listStatus:gi,registerMenu:cd,unregisterMenu:yi,listMenu:Jo}),e.rebindWorkbench({registerView:ad,unregisterView:ur,registerStatus:ud,unregisterStatus:pr,listStatus:Ya,backgroundTasks:dd}),queueMicrotask(()=>e.flush()),!0):!1}if(typeof window<"u"){const t=window,e={apiVersion:Ka,activityBar:{register:cr,unregister:vi},commands:{register:id,unregister:dr,execute:hi,list:fr,has:ld},statusbar:{register:rd,unregister:mi,list:gi,registerMenu:cd,unregisterMenu:yi,listMenu:Jo}},n={apiVersion:Ka,activityBar:{register:ad,unregister:ur},statusbar:{register:ud,unregister:pr,list:Ya},backgroundTasks:dd};Am()||(t.__dshFileWorkbenchVSCode__=e,t.__dshFileWorkbenchWorkbench__=n)}const Mm=["title"],Om={class:"fw-nav-ico"},Lm={class:"fw-nav-label"},Bm=["title","onClick","onContextmenu"],Im={class:"fw-nav-ico"},jm={class:"fw-nav-label"},Vm=["title"],zm=["title"],Um={class:"fw-nav-ico"},Hm={class:"fw-nav-label"},Wm=["title","onClick","onContextmenu"],Gm={class:"fw-nav-ico"},qm={class:"fw-nav-label"},Km=["title"],Xm=["aria-expanded"],Ym={class:"fw-sec-txt"},Jm={class:"fw-sec-icon"},Qm={key:0,class:"fw-sec-b"},Zm={key:0,class:"fw-nav-empty is-err"},eg=["title","onClick","onContextmenu"],tg={class:"fw-nav-ico"},ng={class:"fw-nav-label"},sg=["aria-expanded"],og={class:"fw-sec-txt"},ag={key:0,class:"fw-sec-b"},ig=["title","onClick"],lg={class:"fw-nav-ico"},rg={key:1},cg={class:"fw-nav-label"},ug=["aria-expanded"],dg={class:"fw-sec-txt"},fg={key:0,class:"fw-sec-b"},pg=["title","onClick","onContextmenu"],vg={class:"fw-nav-ico"},hg={class:"fw-nav-label"},mg=["title"],gg=["aria-expanded"],yg={class:"fw-sec-txt"},wg={key:0,class:"fw-sec-b"},bg={key:0,class:"fw-nav-empty"},_g=["title","onClick","onContextmenu"],kg={class:"fw-nav-ico"},xg={class:"fw-nav-label"},Cg={key:2,class:"fw-error"},$g={class:"fw-error-ico"},Sg=ht({__name:"NavPane",props:{externalViews:{default:()=>[]},externalCollapsed:{type:Boolean,default:!1},activeExternalId:{},externalActive:{type:Boolean}},emits:["toggle-external","select-external","select-local"],setup(t,{emit:e}){const{t:n}=Bt(),i=t,c=e,u=L(()=>i.externalViews??[]),v=L(()=>i.externalCollapsed===!0),d=L(()=>i.activeExternalId??""),p=L(()=>i.externalActive===!0);function w(U){return sd(U.title)}const b=Un.navGroups;function x(U){b[U]=!b[U],Da()}ln(async()=>{await Hs(),mh(),await pl()});function A(U){if(le.value||ae.view!=="files")return!1;const N=ae.listing?.path??"";return N?ke(N).startsWith(ke(zs(U.id))):!1}function I(U){const N=Ha(U.id),Q=n(N==="online"?"sshStatusOnline":N==="offline"?"sshStatusOffline":N==="checking"?"sshStatusChecking":"sshStatusUnknown");return N==="offline"&&fl(U.id)?`${Q}：${fl(U.id)}`:Q}function M(U){c("select-local"),le.value=null,Vt(zs(U.id)),Wa(U.id)}const V=m("");function H(U,N){ce(U,[{label:n("menuOpen"),icon:"arrowRight",onClick:()=>M(N)},{label:n("sshTest"),icon:"refresh",onClick:()=>void G(N)},{label:n("menuOpenTerminal"),icon:"terminal",onClick:()=>ko(zs(N.id))},{separator:!0},{label:n("sshEdit"),icon:"gear",onClick:()=>xh(N.id)},{label:V.value===N.id?n("sshDeleteConfirm"):n("sshDelete"),icon:"trash",onClick:()=>void F(N)},{separator:!0},{label:n("menuCopyPath"),icon:"link",onClick:()=>void Le(zs(N.id))}])}function C(U){ce(U,[{label:n("sshNewHost"),icon:"plus",onClick:()=>Au()},{separator:!0},{label:b.ssh?n("navCollapse"):n("navExpand"),icon:b.ssh?"chevronDown":"chevronRight",onClick:()=>x("ssh")},{label:n("menuRefresh"),icon:"refresh",onClick:()=>void Z()}])}async function Z(){await Hs(),await pl()}async function G(U){const N=await Zi({id:U.id});N.ok?X("ok",`${n("sshTestOk")}${N.banner?` (${N.banner})`:""}`):X("error",`${n("sshTestFail")}: ${N.error??""}`),await Wa(U.id)}async function F(U){if(V.value!==U.id){V.value=U.id;return}V.value="",await hp(U.id),await Hs()}const de=L(()=>ae.homeItems),B=["desktop","download"],ve=L(()=>de.value.filter(U=>B.includes(U.type))),_e=L(()=>de.value.find(U=>U.type==="home")??null),ke=U=>U.replace(/[\\/]+/g,"/").replace(/\/$/,"").toLowerCase(),le=m(null);function re(){if(le.value||ae.view!=="files")return null;const U=ae.listing?.path??"";if(!U)return null;const N=ke(U);let Q=null,Te=-1;for(const O of de.value){const T=ke(O.path);!T||N!==T&&!N.startsWith(`${T}/`)||T.length>Te&&(Te=T.length,Q=O)}return Q}function Ee(U){return re()?.path===U.path}function Ve(U){if(le.value||ae.view!=="files")return!1;const N=ae.listing?.path??"";return N?U.letter?N.toLowerCase().startsWith(`${U.letter.toLowerCase()}:`):ke(N)==="/":!1}function ye(U){if(c("select-local"),le.value=null,U.type==="recycle"){ac();return}Vt(U.path)}function Ne(){c("select-local"),le.value=null,b.myComputer||(b.myComputer=!0,Da()),Iu()}function W(){b.myComputer=!b.myComputer,Da()}function J(U){c("select-local"),le.value=null,Vt(U.path)}function z(){c("select-local"),le.value=null,ac()}const ee=U=>U.replace(/[\\/]+$/,"").split(/[\\/]/).pop()||U;function me(U){const N=Math.max(U.lastIndexOf("/"),U.lastIndexOf("\\"));return N<0?U:U.slice(0,N)}function je(U){return Wt(U)?Ga(U)||U:me(U)}async function Ke(U){le.value=U;try{const N=await Ba(U);Vt(N.isDir?U:je(U))}catch{Vt(je(U))}}const Ze=L(()=>Us.value.map(U=>({path:U,name:ee(U)})));async function ge(U){c("select-local"),le.value=U;try{(await Ba(U)).isDir?Vt(U):(sa(U),Vt(me(U)))}catch{Vt(U)}}function we(U){switch(U.type){case"drive":return nd(U);case"home":return n("navHome");case"desktop":return n("desktopEntry");case"download":return n("downloadEntry");case"documents":return n("documentEntry");case"pictures":return n("pictureEntry");case"music":return n("musicEntry");case"videos":return n("videoEntry");case"gallery":return n("navGallery");case"workspace":return n("workspaceEntry");case"recycle":return n("recycleBin");default:return U.name}}function Ye(U){switch(U.type){case"drive":return"hardDrive";case"recycle":return"trash";case"workspace":return"folder";case"home":return"home";case"desktop":return"monitor";case"download":return"download";case"documents":return"fileText";case"pictures":return"image";case"music":return"music";case"videos":return"video";case"gallery":return"image";default:return"folder"}}const{cmOpen:st,cmX:pe,cmY:Ce,cmItems:qe,openMenu:ce}=pn();function Ie(U,N,Q={}){const Te=ro(N),O=[Q.openParent?{label:n("menuOpen"),icon:"arrowRight",onClick:()=>void Ke(N)}:{label:n("menuOpen"),icon:"arrowRight",onClick:()=>void Vt(N)}];Q.openEditor!==!1&&O.push({label:n("menuOpenInEditor"),icon:"code",onClick:()=>ar(N)}),O.push({separator:!0}),O.push({label:n(Te?"favoriteRemove":"favoriteAdd"),icon:"star",onClick:()=>{const T=Ua(N);X("ok",n(T?"favoriteAdded":"favoriteRemoved"))}}),O.push({label:n("menuCopyPath"),icon:"link",onClick:()=>void Le(N)}),Q.openTerminal!==!1&&O.push({label:n("menuOpenTerminal"),icon:"terminal",onClick:()=>ko(N)}),ce(U,O)}function rt(U,N){Ie(U,N.path)}function yt(U){ce(U,[{label:b.myComputer?n("navCollapse"):n("navExpand"),icon:b.myComputer?"chevronDown":"chevronRight",onClick:()=>x("myComputer")},{label:n("menuOpen"),icon:"arrowRight",onClick:Ne},{separator:!0},{label:n("menuRefresh"),icon:"refresh",onClick:()=>void Ft()}])}function ut(U,N){Ie(U,N.path)}function it(U){ce(U,[{label:n("menuOpen"),icon:"arrowRight",onClick:z},{label:n("menuRefresh"),icon:"refresh",onClick:()=>void Ft()},{separator:!0},{label:n("recycleEmpty"),icon:"trash",disabled:(ae.recycleItems?.length??0)===0,onClick:()=>void Zu()}])}async function Le(U){try{await navigator.clipboard.writeText(U),X("ok",n("menuPathCopied"))}catch{X("error",n("menuPathCopyFail"))}}return(U,N)=>(l(),r("div",{class:te(["fw-nav",{"external-active":p.value}])},[_e.value?(l(),r("button",{key:0,class:te(["fw-nav-item fw-nav-top fw-nav-leaf",{active:!p.value&&Ee(_e.value)}]),title:_e.value.path,onClick:N[0]||(N[0]=Q=>ye(_e.value)),onContextmenu:N[1]||(N[1]=be(Q=>rt(Q,_e.value),["prevent","stop"]))},[o("span",Om,[h(se,{name:"home",size:14})]),o("span",Lm,a(we(_e.value)),1)],42,Mm)):P("",!0),(l(!0),r(oe,null,Ae(ve.value.filter(Q=>Q.type!=="download"),Q=>(l(),r("button",{key:Q.path,class:te(["fw-nav-item fw-nav-top fw-nav-leaf",{active:!p.value&&Ee(Q)}]),title:Q.path,onClick:Te=>ye(Q),onContextmenu:be(Te=>rt(Te,Q),["prevent","stop"])},[o("span",Im,[h(se,{name:Ye(Q),size:14},null,8,["name"])]),o("span",jm,a(we(Q)),1),o("span",{class:"fw-nav-pin",title:s(n)("favoritePin")},[h(se,{name:"pin",size:11})],8,Vm)],42,Bm))),128)),o("button",{class:te(["fw-nav-item fw-nav-top",{active:!p.value&&s(ae).view==="recycle"}]),title:s(n)("recycleBin"),onClick:z,onContextmenu:be(it,["prevent","stop"])},[o("span",Um,[h(se,{name:"trash",size:14})]),o("span",Hm,a(s(n)("recycleBin")),1)],42,zm),N[7]||(N[7]=o("div",{class:"fw-nav-div","aria-hidden":"true"},null,-1)),(l(!0),r(oe,null,Ae(ve.value.filter(Q=>Q.type==="download"),Q=>(l(),r("button",{key:Q.path,class:te(["fw-nav-item fw-nav-top fw-nav-leaf",{active:!p.value&&Ee(Q)}]),title:Q.path,onClick:Te=>ye(Q),onContextmenu:be(Te=>rt(Te,Q),["prevent","stop"])},[o("span",Gm,[h(se,{name:Ye(Q),size:14},null,8,["name"])]),o("span",qm,a(we(Q)),1),o("span",{class:"fw-nav-pin",title:s(n)("favoritePin")},[h(se,{name:"pin",size:11})],8,Km)],42,Wm))),128)),N[8]||(N[8]=o("div",{class:"fw-nav-div","aria-hidden":"true"},null,-1)),o("div",{class:te(["fw-nav-sec",{collapsed:!s(b).myComputer,active:!p.value&&s(ae).view==="computer"}])},[o("button",{class:"fw-sec-h","aria-expanded":s(b).myComputer,onClick:W,onContextmenu:be(yt,["prevent","stop"])},[o("span",{class:te(["fw-caret",{open:s(b).myComputer}])},[h(se,{name:"chevronDown",size:11})],2),o("span",Ym,[o("span",Jm,[h(se,{name:"monitor",size:14})]),ue(a(s(n)("navThisPc")),1)])],40,Xm),s(b).myComputer?(l(),r("div",Qm,[s(ae).drivesErr?(l(),r("div",Zm,a(s(ae).drivesErr),1)):P("",!0),(l(!0),r(oe,null,Ae(s(ae).drives,Q=>(l(),r("button",{key:Q.path,class:te(["fw-nav-item fw-nav-drive",{active:!p.value&&Ve(Q)}]),title:Q.path,onClick:Te=>J(Q),onContextmenu:be(Te=>ut(Te,Q),["prevent","stop"])},[o("span",tg,[h(se,{name:"hardDrive",size:13})]),o("span",ng,a(Q.name),1)],42,eg))),128))])):P("",!0)],2),u.value.length?(l(),r("div",{key:1,class:te(["fw-nav-sec fw-nav-external",{collapsed:v.value}])},[o("button",{class:"fw-sec-h","aria-expanded":!v.value,onClick:N[2]||(N[2]=Q=>c("toggle-external"))},[o("span",{class:te(["fw-caret",{open:!v.value}])},[h(se,{name:"chevronDown",size:11})],2),o("span",og,a(s(n)("externalInjection")),1)],8,sg),v.value?P("",!0):(l(),r("div",ag,[(l(!0),r(oe,null,Ae(u.value,Q=>(l(),r("button",{key:Q.id,class:te(["fw-nav-item fw-nav-external-item",{active:d.value===Q.id}]),title:w(Q),onClick:Te=>c("select-external",Q.id)},[o("span",lg,[s(Oo)(Q.icon??"")?(l(),Xe(se,{key:0,name:Q.icon??"",size:14},null,8,["name"])):(l(),r("span",rg,a(w(Q).slice(0,1)),1))]),o("span",cg,[o("span",null,a(w(Q)),1)])],10,ig))),128))]))],2)):P("",!0),o("div",{class:te(["fw-nav-sec",{collapsed:!s(b).ssh}])},[o("button",{class:"fw-sec-h","aria-expanded":s(b).ssh,onClick:N[3]||(N[3]=Q=>x("ssh")),onContextmenu:be(C,["prevent","stop"])},[o("span",{class:te(["fw-caret",{open:s(b).ssh}])},[h(se,{name:"chevronDown",size:11})],2),o("span",dg,a(s(n)("sshNavGroup")),1)],40,ug),s(b).ssh?(l(),r("div",fg,[s(an).length===0?(l(),r("div",{key:0,class:"fw-nav-empty",onContextmenu:be(C,["prevent","stop"])},a(s(n)("sshEmpty")),33)):P("",!0),(l(!0),r(oe,null,Ae(s(an),Q=>(l(),r("button",{key:Q.id,class:te(["fw-nav-item",{active:!p.value&&A(Q)}]),title:`${Q.user}@${Q.host}:${Q.port}`,onClick:Te=>M(Q),onContextmenu:be(Te=>H(Te,Q),["prevent","stop"])},[o("span",vg,[h(se,{name:"globe",size:13})]),o("span",hg,a(Q.name||`${Q.user}@${Q.host}`),1),o("span",{class:te(["fw-ssh-dot",`is-${s(Ha)(Q.id)}`]),title:I(Q)},null,10,mg)],42,pg))),128))])):P("",!0)],2),o("div",{class:te(["fw-nav-sec",{collapsed:!s(b).favorites}])},[o("button",{class:"fw-sec-h","aria-expanded":s(b).favorites,onClick:N[4]||(N[4]=Q=>x("favorites"))},[o("span",{class:te(["fw-caret",{open:s(b).favorites}])},[h(se,{name:"chevronDown",size:11})],2),o("span",yg,a(s(n)("favorites")),1)],8,gg),s(b).favorites?(l(),r("div",wg,[Ze.value.length===0?(l(),r("div",bg,a(s(n)("emptyFavorites")),1)):P("",!0),(l(!0),r(oe,null,Ae(Ze.value,Q=>(l(),r("button",{key:Q.path,class:te(["fw-nav-item",{active:!p.value&&le.value===Q.path}]),title:Q.path,onClick:Te=>ge(Q.path),onContextmenu:be(Te=>Ie(Te,Q.path,{openEditor:!1,openTerminal:!1,openParent:!0}),["prevent","stop"])},[o("span",kg,[h(se,{name:"star",size:13})]),o("span",xg,a(Q.name),1)],42,_g))),128))])):P("",!0)],2),s(ae).loadErr?(l(),r("div",Cg,[o("span",$g,[h(se,{name:"warning",size:16})]),o("span",null,a(s(ae).loadErr),1),o("button",{class:"fw-retry",onClick:N[5]||(N[5]=Q=>s(Ft)())},a(s(n)("retry")),1)])):P("",!0),s(st)?(l(),Xe(Qt,{key:3,items:s(qe),x:s(pe),y:s(Ce),onClose:N[6]||(N[6]=Q=>st.value=!1)},null,8,["items","x","y"])):P("",!0),h(Nm)],2))}}),Eg=xt(Sg,[["__scopeId","data-v-f2446309"]]),Ja={start:0,end:0,padBefore:0,padAfter:0,total:0};function cc(t,e){return t<0?0:t>e?e:t}function Tg(t,e,n,i=8){const c=m({...Ja});function u(){const p=t.value,w=e.value;if(!p||w<=0||p.clientHeight<=0){c.value={...Ja};return}const b=Math.max(0,p.scrollTop),x=cc(Math.floor(b/n)-i,w),A=Math.ceil(p.clientHeight/n)+i*2,I=cc(x+A,w);c.value={start:x,end:I,padBefore:x*n,padAfter:(w-I)*n,total:w*n}}function v(){u()}let d=null;return Qe(t,p=>{d&&(d.disconnect(),d=null),Dt(u),p&&(d=new ResizeObserver(()=>{u()}),d.observe(p))}),Qe(e,()=>{Dt(u)}),zl(()=>{d?.disconnect(),d=null}),{range:c,onScroll:v,compute:u}}function Dg(t,e,n=90,i=3){const c=[],u=m({...Ja}),v=new WeakMap;let d=null;function p(){return d||(d=new ResizeObserver(V=>{let H=!1;for(const C of V){const Z=v.get(C.target);if(Z===void 0)continue;const G=Math.max(1,Math.round(C.contentRect.height));c[Z]!==G&&(c[Z]=G,H=!0)}H&&b()})),d}function w(V){return c[V]??n}function b(){const V=t.value,H=e.value;if(!V||H<=0||V.clientHeight<=0){u.value={...Ja};return}c.length>H&&(c.length=H);const C=Math.max(0,V.scrollTop),Z=new Array(H+1);Z[0]=0;for(let le=0;le<H;le++)Z[le+1]=Z[le]+w(le);const G=Z[H];let F=0,de=H;const B=C-i*n;for(;F<de;){const le=F+de>>1;Z[le]<B?F=le+1:de=le}let ve=Math.max(0,F-i),_e=ve;const ke=C+V.clientHeight+i*n;for(;_e<H&&Z[_e+1]<=ke;)_e++;_e=Math.min(H,_e+i),u.value={start:ve,end:_e,padBefore:Z[ve],padAfter:G-Z[_e],total:G}}function x(){b()}let A=null;Qe(t,V=>{A&&(A.disconnect(),A=null),Dt(b),V&&(A=new ResizeObserver(()=>b()),A.observe(V))});function I(V){return H=>{const C=H;if(!C)return;const Z=p();c.length<V+1&&(c.length=V+1),v.set(C,V),Z.observe(C);const G=Math.max(1,Math.round(C.getBoundingClientRect().height));c[V]!==G&&(c[V]=G,Dt(b))}}function M(){c.length=0,Dt(b)}return Qe(e,()=>{Dt(b)}),zl(()=>{A?.disconnect(),A=null,d?.disconnect(),d=null}),{range:u,onScroll:x,compute:b,measure:I,resetHeights:M}}const Fg={class:"fw-search"},Rg={class:"fw-search-head"},Ng={class:"fw-tree-head"},Pg={class:"fw-search-opts"},Ag=["title"],Mg=["title"],Og={key:0,class:"fw-loading"},Lg={key:1,class:"fw-count"},Bg={class:"fw-count-row"},Ig={key:0,class:"fw-scopeline"},jg={key:2,class:"fw-empty"},Vg=["onClick","title"],zg={class:"fw-ico"},Ug={class:"fw-namerow"},Hg={class:"fw-hitname"},Wg={key:0,class:"fw-badge"},Gg={class:"fw-hitpath"},qg={key:0,class:"fw-hitsnippet"},Kg=ht({__name:"SearchPane",setup(t){const{t:e}=Bt(),n=m(null),i=L(()=>Fe.search.hits.length),c=Dg(n,i,56),u=L(()=>Fe.search.hits.slice(c.range.value.start,c.range.value.end));Qe(()=>Fe.search.q,()=>{c.resetHeights(),n.value&&(n.value.scrollTop=0)});function v(){po("")}function d(){const V=Fe.search.q.trim();V&&po(V)}function p(){Po.value=!Po.value,d()}function w(){Ao.value=!Ao.value,d()}function b(V){sa(V)}function x(V){const H=(Fe.root||"").replace(/[\\/]+$/,"");return V.startsWith(H)?V.slice(H.length+1):V}const A=L(()=>Fe.search.hits.filter(V=>V.byContent)),I=m(!1);async function M(){const V=Fe.search.q.trim(),H=A.value.length;if(!H||!V)return;const C=await ds({title:e("searchReplaceTitle"),message:e("searchReplaceConfirm",{files:H,count:H}),placeholder:e("findReplacePlaceholder")});if(C!==null){I.value=!0;try{const Z=await Jc(V,C,{key:Fe.key,scope:Fe.search.scope||void 0,caseSensitive:Po.value,regex:Ao.value});X("ok",e("searchReplaceDone",{files:Z.files,count:Z.replacements})),po(V)}catch(Z){X("error",Z.message)}finally{I.value=!1}}}return(V,H)=>{const C=Mn;return l(),r("div",Fg,[o("div",Rg,[o("span",Ng,a(s(e)("searchTitle")),1),o("span",Pg,[o("button",{class:te(["fw-search-opt",{on:s(Po)}]),title:s(e)("searchCase"),onClick:p},"Aa",10,Ag),o("button",{class:te(["fw-search-opt",{on:s(Ao)}]),title:s(e)("searchRegex"),onClick:w},".*",10,Mg)]),h(C,{size:"small",text:"",title:s(e)("clearSearch"),onClick:v},{default:ne(()=>[...H[1]||(H[1]=[ue("✕",-1)])]),_:1},8,["title"])]),s(Fe).search.running?(l(),r("div",Og,a(s(e)("searching")),1)):s(Fe).search.q?(l(),r("div",Lg,[o("div",Bg,[o("span",null,[ue(a(s(e)("resultsCount",{count:s(Fe).search.hits.length})),1),s(Fe).search.truncated?(l(),r(oe,{key:0},[ue(a(s(e)("resultsSuffixTruncated")),1)],64)):P("",!0)]),A.value.length?(l(),Xe(C,{key:0,size:"small",type:"primary",plain:"",disabled:I.value,onClick:M},{default:ne(()=>[ue(a(I.value?s(e)("searchReplaceBusy"):s(e)("searchReplaceAll")),1)]),_:1},8,["disabled"])):P("",!0)]),s(Fe).search.scope?(l(),r("div",Ig,a(s(e)("searchScopeIn"))+" "+a(x(s(Fe).search.scope)),1)):P("",!0)])):(l(),r("div",jg,a(s(e)("searchIdle")),1)),o("div",{ref_key:"resRef",ref:n,class:"fw-results",onScroll:H[0]||(H[0]=(...Z)=>s(c).onScroll&&s(c).onScroll(...Z))},[o("div",{style:_t({height:s(c).range.value.padBefore+"px"})},null,4),(l(!0),r(oe,null,Ae(u.value,(Z,G)=>(l(),r("div",{key:Z.path,ref_for:!0,ref:s(c).measure(s(c).range.value.start+G),class:"fw-hit",onClick:F=>b(Z.path),title:s(e)("hitTitle")},[o("span",zg,[h(se,{name:"file",size:13})]),o("span",Ug,[o("span",Hg,a(Z.name),1),Z.byContent?(l(),r("span",Wg,a(s(e)("matchContent")),1)):P("",!0)]),o("span",Gg,a(x(Z.path)),1),Z.snippet?(l(),r("span",qg,a(Z.snippet),1)):P("",!0)],8,Vg))),128)),o("div",{style:_t({height:s(c).range.value.padAfter+"px"})},null,4)],544)])}}}),Xg=xt(Kg,[["__scopeId","data-v-3880eff0"]]),Yg=m(""),aa=m({op:"",paths:[]});function ka(t){aa.value={op:"copy",paths:t}}function Ro(t){aa.value={op:"cut",paths:t}}function Jg(){aa.value={op:"",paths:[]}}function _l(){return aa.value.paths.length>0}function Qg(){return aa.value}async function uc(t){try{return await navigator.clipboard.writeText(t),!0}catch{return!1}}const Rt=gt({visible:!1,canSwitchView:!1,total:0,selected:0,text:"",view:"details"});let fd=null;function Qa(t){fd=t}function Zg(t){fd?.(t)}function pd(){Rt.visible=!1,Rt.canSwitchView=!1,Rt.total=0,Rt.selected=0,Rt.text=""}const wi=gt({dirs:{}});async function ks(t){if(t)try{const e=await Mp(t);wi.dirs[t]={inRepo:e.inRepo,branch:e.branch??"",entries:e.entries}}catch{}}function vd(t){return wi.dirs[t]?.inRepo??!1}function hd(t,e){return wi.dirs[t]?.entries?.[e]??""}const Zo=gt({dirs:{}});async function so(t){if(t)try{const e=await ps(t);if(!e.inRepo||!e.svnAvailable){Zo.dirs[t]={inRepo:!1,entries:{}};return}const n=await Jt(t,["status","--depth","immediates"]),i={};if(n.code===0)for(const c of(n.stdout||"").split(/\r?\n/)){if(!c.trim())continue;const u=(c.slice(0,8)[0]??"").trim();let v=c.slice(8).trim();if(v=v.replace(/[\\/]+$/,""),!v||v==="."||v==="..")continue;const d=v.split(/[\\/]/).pop()??v,p=t1(u);p&&(i[d]=p)}Zo.dirs[t]={inRepo:!0,entries:i}}catch{}}function e1(t){return Zo.dirs[t]?.inRepo??!1}function md(t,e){return Zo.dirs[t]?.entries?.[e]??""}function t1(t){switch(t){case"A":return"added";case"M":return"modified";case"D":return"deleted";case"?":return"untracked";case"R":return"modified";case"!":return"deleted";case"C":return"modified";default:return""}}function n1(t){return(t||"").split(/\r?\n/).filter(e=>/^\s?[ADUGCER]{1,3}\s+\S/.test(e)).length}function s1(t){const e=[...(t||"").matchAll(/(?:revision|版本)\s*(\d+)/gi)];return e.length?e[e.length-1][1]:null}function o1(t){return t.slice(Math.max(t.lastIndexOf("/"),t.lastIndexOf("\\"))+1)}async function a1(t,e){try{if(!(await ps(t)).svnAvailable){X("error",y("svnNoCli"));return}const i=await Jt(t,e);i.code===0?X("ok",(i.stdout||y("svnDone")).split(`
`)[0].slice(0,200)):X("error",(i.stderr||y("svnFailed")).split(`
`)[0].slice(0,200))}catch(n){X("error",n.message)}}async function i1(t,e,n){try{if(!(await ps(t)).svnAvailable){X("error",y("svnNoCli"));return}const c=await Jt(t,["add","--",t]);c.code===0?X("ok",y("svnAdded")):X("error",(c.stderr||y("svnFailed")).split(`
`)[0].slice(0,200))}catch(i){X("error",i.message)}await n.afterMutate(e)}async function l1(t,e,n){try{if(!(await ps(t)).svnAvailable){X("error",y("svnNoCli"));return}const c=t.replace(/[\\/]$/,""),u=c.replace(/[\\/][^\\/]+$/,""),v=c.slice(u.length+1),p=((await Jt(u,["propget","svn:ignore",u])).stdout||"").split(/\r?\n/).map(x=>x.trim()).filter(Boolean);if(p.includes(v)){X("ok",y("gitIgnored")),await n.afterMutate(e);return}const w=[...p,v].join(`
`),b=await Jt(u,["propset","svn:ignore",w,u]);b.code===0?X("ok",y("gitIgnored")):X("error",(b.stderr||y("svnFailed")).split(`
`)[0].slice(0,200))}catch(i){X("error",i.message)}await n.afterMutate(e)}async function r1(t,e,n){try{await Lp(t),X("ok",y("gitAdded"))}catch(i){X("error",i.message)}await n.afterMutate(e)}async function c1(t,e,n){const i=o1(t);if(await Mt({title:y("gitDiscardTitle"),message:y("gitDiscardMsg",{name:i})})){try{await Ip(t),X("ok",y("gitDiscarded"))}catch(u){X("error",u.message)}await n.afterMutate(e)}}async function u1(t,e,n){try{await su(t),X("ok",y("gitIgnored"))}catch(i){X("error",i.message)}await n.afterMutate(e)}async function d1(t,e){try{const n=await Op(t);e.showGitDiff(n.output??"")}catch(n){X("error",n.message)}}function kl(t,e,n){return vd(t)?[{separator:!0},{icon:"git",label:y("gitMenu"),children:[{label:y("gitPanel"),icon:"git",onClick:()=>n.openGitPanel()},{separator:!0},{label:y("gitAdd"),icon:"upload",onClick:()=>void r1(e,t,n)},{label:y("gitCommit"),icon:"check",onClick:()=>n.openCommit()},{label:y("gitDiff"),icon:"code",onClick:()=>void d1(e,n)},{label:y("gitDiscard"),icon:"undo",onClick:()=>void c1(e,t,n)},{label:y("gitIgnore"),icon:"eyeOff",onClick:()=>void u1(e,t,n)}]}]:[]}function xl(t,e,n){return e1(t)?[{separator:!0},{icon:"svn",label:y("svnMenu"),children:[{label:y("svnPanel"),icon:"svn",onClick:()=>n.openSvnPanel()},{label:y("svnUpdate"),icon:"sync",onClick:()=>void a1(e,["update"])},{separator:!0},{label:y("svnAdd"),icon:"upload",onClick:()=>void i1(e,t,n)},{label:y("svnIgnore"),icon:"eyeOff",onClick:()=>void l1(e,t,n)}]}]:[]}const f1={key:0,class:"fw-quickcommit-empty"},p1={class:"fw-gitcommit-files-title fw-gitcommit-files-caption"},v1={class:"fw-gitcommit-files"},h1=["title"],m1={key:1,class:"fw-quickcommit-empty"},g1={key:2,class:"fw-gitcommit-error"},y1={class:"fw-gitconfig-field"},w1={class:"fw-gitconfig-field"},b1=ht({__name:"QuickCommit",props:{modelValue:{type:Boolean},dir:{}},emits:["update:modelValue","done"],setup(t,{emit:e}){const n=t,i=e,{t:c}=Bt(),u=m(null),v=m([]),d=m(""),p=m(""),w=gt({loading:!1,commit:!1,config:!1}),b=m(!1),x=m(""),A=m(""),I={"":"",untracked:"?",added:"A",modified:"M",deleted:"D"};function M(B){return I[B]}function V(){i("update:modelValue",!1)}async function H(){if(d.value="",p.value="",!n.dir){V();return}w.loading=!0;try{if(u.value=await Wo(n.dir),!u.value.inRepo){X("error",c("gitNotRepo")),V();return}if(await C(),!v.value.length){X("error",c("gitNoChanges")),V();return}}catch(B){X("error",B.message),V()}finally{w.loading=!1}}async function C(){u.value=await Wo(n.dir),v.value=u.value?.staged??[]}async function Z(){const B=d.value.trim();if(!(!B||!u.value)){w.commit=!0,p.value="";try{await Bp(u.value.repo,B),i("done"),X("ok",c("gitCommitted")),V()}catch(ve){p.value=ve.message}finally{w.commit=!1}}}const G=m(!1);Qe(p,B=>{G.value=/user\.(name|email)|Author identity/i.test(B??"")});async function F(){try{const B=await ou();x.value=B.name??"",A.value=B.email??""}catch{}b.value=!0}async function de(){w.config=!0;try{await au(x.value,A.value),p.value="",b.value=!1,X("ok",c("gitConfigSaved"))}catch(B){X("error",B.message)}finally{w.config=!1}}return(B,ve)=>{const _e=Ss,ke=Mn,le=rn;return l(),Xe(le,{"model-value":t.modelValue,title:s(c)("gitCommitTitle"),width:"520px",class:"fw-gitcommit-dialog","close-on-click-modal":!1,"onUpdate:modelValue":V,onOpen:H},{footer:ne(()=>[h(ke,{onClick:V},{default:ne(()=>[ue(a(s(c)("cancel")),1)]),_:1}),h(ke,{onClick:F},{default:ne(()=>[ue(a(s(c)("gitConfig")),1)]),_:1}),h(ke,{type:"primary",loading:w.commit,disabled:!d.value.trim(),onClick:Z},{default:ne(()=>[ue(a(s(c)("gitCommitConfirm")),1)]),_:1},8,["loading","disabled"])]),default:ne(()=>[w.loading?(l(),r("div",f1,a(s(c)("gitLoading")),1)):(l(),r(oe,{key:1},[h(_e,{modelValue:d.value,"onUpdate:modelValue":ve[0]||(ve[0]=re=>d.value=re),placeholder:s(c)("gitCommitPlaceholder"),type:"textarea",rows:3,class:"fw-gitcommit-msg",onKeydown:bt(be(Z,["ctrl"]),["enter"])},null,8,["modelValue","placeholder","onKeydown"]),v.value.length?(l(),r(oe,{key:0},[o("div",p1,a(s(c)("gitCommitFiles",{n:v.value.length})),1),o("div",v1,[(l(!0),r(oe,null,Ae(v.value,re=>(l(),r("div",{key:re.path,class:"fw-gitcommit-file"},[o("span",{class:te(["fw-gitpanel-st","st-"+re.status])},a(M(re.status)),3),o("span",{class:"fw-gitpanel-path",title:re.path},a(re.path),9,h1)]))),128))])],64)):(l(),r("div",m1,a(s(c)("gitNoChanges")),1)),p.value?(l(),r("div",g1,[ue(a(p.value)+" ",1),G.value?(l(),Xe(ke,{key:0,text:"",size:"small",onClick:F},{default:ne(()=>[ue(a(s(c)("gitConfigTitle")),1)]),_:1})):P("",!0)])):P("",!0),h(le,{modelValue:b.value,"onUpdate:modelValue":ve[4]||(ve[4]=re=>b.value=re),title:s(c)("gitConfigTitle"),width:"420px",class:"fw-gitconfig-dialog","close-on-click-modal":!1},{footer:ne(()=>[h(ke,{onClick:ve[3]||(ve[3]=re=>b.value=!1)},{default:ne(()=>[ue(a(s(c)("cancel")),1)]),_:1}),h(ke,{type:"primary",loading:w.config,onClick:de},{default:ne(()=>[ue(a(s(c)("gitConfigSave")),1)]),_:1},8,["loading"])]),default:ne(()=>[o("div",y1,[o("label",null,a(s(c)("gitConfigName")),1),h(_e,{modelValue:x.value,"onUpdate:modelValue":ve[1]||(ve[1]=re=>x.value=re),size:"small",placeholder:s(c)("gitConfigNamePlaceholder")},null,8,["modelValue","placeholder"])]),o("div",w1,[o("label",null,a(s(c)("gitConfigEmail")),1),h(_e,{modelValue:A.value,"onUpdate:modelValue":ve[2]||(ve[2]=re=>A.value=re),size:"small",placeholder:s(c)("gitConfigEmailPlaceholder")},null,8,["modelValue","placeholder"])])]),_:1},8,["modelValue","title"])],64))]),_:1},8,["model-value","title"])}}}),gd=xt(b1,[["__scopeId","data-v-e839f655"]]),Cl="",$l=["%H","%h","%an","%ae","%at","%ar","%s","%P","%D"].join("%x1f"),_1=["%H","%h","%an","%ae","%at","%ar","%P","%D","%s","%b"].join("%x1f");function yd(t){const e=t.trim();return e?e.split(",").map(n=>n.trim()).filter(Boolean).map(n=>n.startsWith("HEAD -> ")?{label:n.slice(8),kind:"head"}:n==="HEAD"?{label:"HEAD",kind:"head"}:n.startsWith("tag: ")?{label:n.slice(5),kind:"tag"}:n.includes("/")?{label:n,kind:"remote"}:{label:n,kind:"branch"}):[]}function Sl(t){const e=[];for(const n of t.split(`
`)){if(!n.trim())continue;const i=n.split(Cl);if(i.length<9)continue;const c=(i[7]??"").trim();e.push({hash:i[0],short:i[1],author:i[2],email:i[3],ts:Number(i[4])||0,date:i[5],subject:i[6],parents:c?c.split(/\s+/):[],refs:yd(i[8]??"")})}return e}function k1(t){const e=t.split(Cl);if(e.length<9)return null;const n=(e[6]??"").trim();return{hash:e[0],short:e[1],author:e[2],email:e[3],ts:Number(e[4])||0,date:e[5],subject:e[8],parents:n?n.split(/\s+/):[],refs:yd(e[7]??""),body:e.slice(9).join(Cl).trim()}}function x1(t){const e=[];for(const n of t.split(`
`)){if(!n.trim())continue;const i=n.split("	");if(i.length<3)continue;const[c,u]=i,v=i.slice(2).join("	");if(!v)continue;const d=c==="-"||u==="-";e.push({path:v,add:d?0:Number(c)||0,del:d?0:Number(u)||0,binary:d})}return e}function C1(t){const e=[],n=/^(\^?[0-9a-fA-F]{7,40})\s+\((.*?)\s+(\d{4}-\d{2}-\d{2})\s+(\d+)\)\s?(.*)$/;for(const i of t.split(`
`)){const c=n.exec(i);c&&e.push({hash:c[1].replace(/^\^/,""),author:c[2].trim(),date:c[3],line:Number(c[4])||0,text:c[5]??""})}return e}function $1(t){return t.startsWith("+++")||t.startsWith("---")?"head":t.startsWith("@@")?"meta":t.startsWith("diff ")||t.startsWith("index ")||t.startsWith("new file")||t.startsWith("deleted file")||t.startsWith("similarity index")||t.startsWith("rename ")||t.startsWith("Binary files")?"head":t.startsWith("+")?"add":t.startsWith("-")?"del":"ctx"}const dc=["#58a6ff","#f0883e","#3fb950","#bc8cff","#f778ba","#39c5cf","#d29922","#8b949e"];function wd(t){const e=[];let n=[],i=[],c=0;const u=v=>{for(;n.length<=v;)n.push(null),i.push(null)};for(const v of t){let d=n.indexOf(v.hash);if(d<0){let V=n.indexOf(null);V<0&&(V=n.length,u(V)),n[V]=v.hash,i[V]=c++,d=V}const p=i[d]??0,w=n.slice(),[b,...x]=v.parents;n[d]=null,i[d]=null,b!=null&&n.indexOf(b)<0&&(n[d]=b,i[d]=p);for(const V of x){if(n.includes(V))continue;let H=n.indexOf(null);H<0&&(H=n.length,u(H)),n[H]=V,i[H]=c++}const A=Math.max(w.length,n.length),I=[];for(let V=0;V<A;V++)V!==d&&(w[V]??null)!=null&&(n[V]??null)!=null&&I.push({lane:V,color:i[V]??0});const M=[];for(const V of v.parents){const H=n.indexOf(V);H>=0&&M.push({from:d,to:H,color:i[H]??p})}for(e.push({commit:v,lane:d,laneColor:p,topLine:w[d]!=null,through:I,bends:M,width:A});n.length&&n[n.length-1]===null;)n.pop(),i.pop()}return e}const Cs=14;function Xn(t){return dc[t%dc.length]}const qt=gt({open:!1,kind:"git",dir:"",key:"",onDone:void 0});function vr(t){qt.kind=t?.kind==="svn"?"svn":"git",qt.dir=t?.dir??"",qt.key=t?.key??"",qt.onDone=t?.onDone,qt.open=!0}function fc(){qt.open=!1,qt.onDone=void 0}const S1={class:"fw-diff"},E1={key:0,class:"fw-diff-empty"},T1={class:"fw-diff-body"},D1={key:0,class:"fw-diff-empty"},Li=5e3,F1=ht({__name:"GitDiffView",props:{lines:{},empty:{}},setup(t){const e=t,{t:n}=Bt(),i=L(()=>e.lines.length>Li?e.lines.slice(0,Li):e.lines),c=L(()=>e.lines.length>Li);return(u,v)=>(l(),r("div",S1,[t.lines.length?(l(),r(oe,{key:1},[o("div",T1,[(l(!0),r(oe,null,Ae(i.value,(d,p)=>(l(),r("div",{key:p,class:te(["fw-diff-line","dl-"+s($1)(d)])},a(d||" "),3))),128))]),c.value?(l(),r("div",D1,a(s(n)("gitDiffTruncated")),1)):P("",!0)],64)):(l(),r("div",E1,a(t.empty),1))]))}}),Uo=xt(F1,[["__scopeId","data-v-10e524c1"]]),R1={class:"fw-graph"},N1=["title","onClick"],P1=["width"],A1=["x1","x2","stroke"],M1=["x1","x2","y2","stroke"],O1=["x1","y1","x2","stroke"],L1=["d","stroke"],B1=["cx","cy","r","fill","stroke"],I1={class:"fw-graph-main"},j1={class:"fw-graph-subject"},V1={key:0,class:"fw-graph-refs"},z1={class:"fw-graph-meta"},U1={class:"fw-graph-hash"},H1={key:0,class:"fw-graph-empty"},as=28,Ls=8,W1=ht({__name:"GitGraphList",props:{rows:{},active:{},empty:{}},emits:["select"],setup(t){function e(v){return v*Cs+Cs/2}function n(v,d){const p=as/2,w=as*.82;return`M ${e(v)} ${p} C ${e(v)} ${w}, ${e(d)} ${w}, ${e(d)} ${as}`}function i(v){return v.through.filter(d=>d.lane<Ls)}function c(v){return v.bends.filter(d=>d.from<Ls&&d.to<Ls)}function u(v){return v.commit.refs.some(d=>d.kind==="head")}return(v,d)=>(l(),r("div",R1,[(l(!0),r(oe,null,Ae(t.rows,p=>(l(),r("button",{key:p.commit.hash,class:te(["fw-graph-row",{active:p.commit.hash===t.active}]),title:p.commit.subject,onClick:w=>v.$emit("select",p.commit)},[o("span",{class:"fw-graph-lanes",style:_t({width:`${Math.min(p.width,Ls)*s(Cs)}px`})},[(l(),r("svg",{width:Math.min(p.width,Ls)*s(Cs),height:as,"aria-hidden":"true"},[(l(!0),r(oe,null,Ae(i(p),(w,b)=>(l(),r("line",{key:"t"+b,x1:e(w.lane),y1:0,x2:e(w.lane),y2:as,stroke:s(Xn)(w.color)},null,8,A1))),128)),p.topLine&&p.lane<Ls?(l(),r("line",{key:0,x1:e(p.lane),y1:0,x2:e(p.lane),y2:as/2,stroke:s(Xn)(p.laneColor)},null,8,M1)):P("",!0),(l(!0),r(oe,null,Ae(c(p),(w,b)=>(l(),r(oe,{key:"b"+b},[w.from===w.to?(l(),r("line",{key:0,x1:e(w.from),y1:as/2,x2:e(w.to),y2:as,stroke:s(Xn)(w.color)},null,8,O1)):(l(),r("path",{key:1,d:n(w.from,w.to),fill:"none",stroke:s(Xn)(w.color)},null,8,L1))],64))),128)),p.lane<Ls?(l(),r("circle",{key:1,cx:e(p.lane),cy:as/2,r:u(p)?4.5:3.5,fill:s(Xn)(p.laneColor),stroke:u(p)?"var(--dsh-bg, #0d1117)":"none","stroke-width":"1.5"},null,8,B1)):P("",!0)],8,P1))],4),o("span",I1,[o("span",j1,a(p.commit.subject),1),p.commit.refs.length?(l(),r("span",V1,[(l(!0),r(oe,null,Ae(p.commit.refs,w=>(l(),r("span",{key:w.kind+w.label,class:te(["fw-graph-ref","rf-"+w.kind])},[h(se,{name:w.kind==="tag"?"tag":"git",size:9},null,8,["name"]),ue(" "+a(w.label),1)],2))),128))])):P("",!0)]),o("span",z1,[ue(a(p.commit.author),1),d[0]||(d[0]=o("span",{class:"fw-graph-dot"},"·",-1)),ue(a(p.commit.date),1)]),o("span",U1,a(p.commit.short),1)],10,N1))),128)),t.rows.length?P("",!0):(l(),r("div",H1,a(t.empty),1))]))}}),G1=xt(W1,[["__scopeId","data-v-61d062db"]]),Pn=m([]),q1=m(!1),kn=gt({open:!1,kind:"git",url:""});function hr(t){kn.kind=t.kind,kn.url=t.url??"",kn.open=!0}function Bi(){kn.open=!1}async function co(){const t=await zp().catch(()=>null);t&&(Pn.value=t.accounts),q1.value=!0}const K1={key:0,class:"fw-gp-shell"},X1={class:"fw-gp-head"},Y1=["title"],J1=["title"],Q1={class:"fw-gp-up-name"},Z1=["title"],ey={class:"fw-gp-headacts"},ty={class:"fw-gp-body"},ny={class:"fw-gp-rail"},sy=["onClick"],oy={class:"fw-gp-rail-txt"},ay={key:0,class:"fw-gp-rail-badge"},iy={key:0,class:"fw-gp-rail-op"},ly={class:"fw-gp-content"},ry={key:0,class:"fw-gp-split"},cy={class:"fw-gp-list"},uy={key:0,class:"fw-gp-empty"},dy={class:"fw-gp-groupbar"},fy={class:"fw-gp-groupname"},py={class:"fw-gp-groupcount"},vy=["title"],hy=["title","onClick","onContextmenu"],my={class:"fw-gp-path"},gy={key:0,class:"fw-gp-dir"},yy={class:"fw-gp-rowacts"},wy=["title","onClick"],by=["title","onClick"],_y={class:"fw-gp-detail"},ky={class:"fw-gp-detailhead"},xy=["title"],Cy={class:"fw-gp-detailacts"},$y=["title"],Sy=["title"],Ey=["title"],Ty=["title"],Dy={key:0,class:"fw-gp-empty"},Fy={key:0,class:"fw-gp-empty"},Ry={key:1,class:"fw-gp-scroll"},Ny={class:"fw-gp-hash"},Py=["title"],Ay={class:"fw-gp-filemeta"},My={key:0,class:"fw-gp-empty"},Oy={key:1,class:"fw-gp-scroll fw-gp-blame"},Ly=["title"],By=["title"],Iy={class:"fw-gp-blame-date"},jy={class:"fw-gp-blame-no"},Vy={class:"fw-gp-blame-txt"},zy={key:1,class:"fw-gp-split"},Uy={class:"fw-gp-list fw-gp-list-col"},Hy={class:"fw-gp-listbar"},Wy={class:"fw-gp-count"},Gy={class:"fw-gp-detail"},qy={key:0,class:"fw-gp-empty"},Ky={class:"fw-gp-detailhead"},Xy=["title"],Yy={class:"fw-gp-detailacts"},Jy=["title"],Qy=["title"],Zy=["title"],ew=["title"],tw={class:"fw-gp-scroll"},nw={class:"fw-gp-cmeta"},sw={class:"fw-gp-crow"},ow={class:"k"},aw={class:"v mono"},iw={class:"fw-gp-crow"},lw={class:"k"},rw={class:"v"},cw={class:"fw-gp-crow"},uw={class:"k"},dw={class:"v"},fw={class:"fw-gp-crow"},pw={class:"k"},vw={class:"v mono"},hw={key:0,class:"fw-gp-crow"},mw={class:"k"},gw={class:"v"},yw={class:"fw-gp-cbody"},ww={class:"fw-gp-cfiles"},bw={key:0,class:"fw-gp-empty"},_w=["title","onClick"],kw={class:"fw-gp-path"},xw={key:0,class:"fw-gp-dir"},Cw={class:"fw-gp-num"},$w={class:"add"},Sw={class:"del"},Ew={key:2,class:"fw-gp-one"},Tw={class:"fw-gp-listbar"},Dw={class:"fw-gp-sec-title"},Fw=["onContextmenu"],Rw={class:"fw-gp-st st-branch"},Nw={class:"fw-gp-path"},Pw={key:0,class:"fw-gp-cur"},Aw={class:"fw-gp-rowacts"},Mw={class:"fw-gp-sec-title"},Ow=["onContextmenu"],Lw={class:"fw-gp-st st-remote"},Bw={class:"fw-gp-path"},Iw={class:"fw-gp-rowacts"},jw={key:3,class:"fw-gp-one"},Vw={class:"fw-gp-sectabs"},zw={key:0,class:"fw-gp-sectab-n"},Uw={key:0,class:"fw-gp-sectab-n"},Hw={class:"fw-gp-form"},Ww={key:0,class:"fw-gp-empty"},Gw=["title","onContextmenu"],qw={class:"fw-gp-st st-tag"},Kw={class:"fw-gp-path"},Xw={key:0,class:"fw-gp-badge"},Yw={key:1,class:"fw-gp-badge fw-gp-badge-remote"},Jw={key:0,class:"fw-gp-date"},Qw=["title"],Zw={class:"fw-gp-hash"},eb={class:"fw-gp-rowacts"},tb={class:"fw-gp-form"},nb={key:0,class:"fw-gp-subject"},sb={class:"fw-gp-form"},ob={key:0,class:"fw-gp-empty"},ab={key:1,class:"fw-gp-empty"},ib=["title"],lb={class:"fw-gp-st st-tag"},rb={class:"fw-gp-path"},cb={class:"fw-gp-badge"},ub={key:0,class:"fw-gp-date"},db={class:"fw-gp-rowacts"},fb={key:4,class:"fw-gp-one"},pb={class:"fw-gp-form"},vb={key:0,class:"fw-gp-empty"},hb=["onContextmenu"],mb={class:"fw-gp-st st-remote"},gb={class:"fw-gp-path"},yb=["title"],wb={key:5,class:"fw-gp-split"},bb={class:"fw-gp-list"},_b={class:"fw-gp-listbar"},kb={key:0,class:"fw-gp-empty"},xb=["title","onClick","onContextmenu"],Cb={class:"fw-gp-st st-stash"},$b={class:"fw-gp-path"},Sb={class:"fw-gp-rowacts"},Eb=["title","onClick"],Tb={class:"fw-gp-detail"},Db={class:"fw-gp-detailhead"},Fb={class:"fw-gp-detailtitle"},Rb={key:6,class:"fw-gp-one fw-gp-cli-wrap"},Nb={key:0,class:"fw-gp-cli-hint"},Pb={class:"fw-gp-cli-prompt"},Ab={class:"fw-gp-cli-cmd"},Mb={class:"fw-gp-cli-inputline"},Ob={class:"fw-gp-cli-prompt"},Lb={key:0,class:"fw-gp-commitbar"},Bb={class:"fw-gp-commitacts"},Ib={class:"fw-gp-commitmeta"},jb={key:0},Vb={key:1,class:"fw-gitpanel-empty"},zb={key:1,class:"fw-norepo"},Ub={class:"fw-gp-cfgfield"},Hb={class:"fw-gp-cfgfield"},Wb={key:0,class:"fw-gp-cv"},Gb={class:"fw-gp-cv-meta"},qb={class:"fw-gp-crow"},Kb={class:"k"},Xb={class:"v mono"},Yb={class:"fw-gp-crow"},Jb={class:"k"},Qb={class:"v"},Zb={class:"fw-gp-crow"},e_={class:"k"},t_={class:"v"},n_={class:"fw-gp-cbody fw-gp-cbody-clamp"},s_={class:"fw-gp-cv-body"},o_={class:"fw-gp-cv-files"},a_={key:0,class:"fw-gp-empty"},i_=["title","onClick"],l_={class:"fw-gp-path"},r_={key:0,class:"fw-gp-dir"},c_={class:"fw-gp-num"},u_={class:"add"},d_={class:"del"},f_={class:"fw-gp-cv-diff"},p_={key:1,class:"fw-gp-empty"},v_={class:"fw-gp-cfgfield"},h_={class:"fw-gp-cfgfield"},m_={class:"fw-gp-cfgfield"},Ii=120,g_=ht({__name:"GitPanel",props:{modelValue:{type:Boolean},dir:{}},setup(t){const e=t,{t:n}=Bt(),i=[{key:"changes",icon:"fileText",label:"gitRailChanges"},{key:"history",icon:"clock",label:"gitRailHistory"},{key:"branches",icon:"git",label:"gitRailBranches"},{key:"tags",icon:"tag",label:"gitRailTags"},{key:"remotes",icon:"globe",label:"gitRailRemotes"},{key:"stash",icon:"stash",label:"gitRailStash"},{key:"cli",icon:"terminal",label:"gitRailCli"}],c=m("changes"),u=m(null),v=gt({refresh:!1,sync:"",op:!1,commit:!1,branch:!1,stash:!1,config:!1}),d=m(null),p=m("diff"),w=m([]),b=m(""),x=m([]),A=m([]),I=m(""),M=m([]),V=m(!1),H=m(""),C=m(null),Z=m([]),G=m(""),F=m([]),de=m(Ii),B=m([]),ve=m([]),_e=m([]),ke=m(""),le=m(""),re=m(""),Ee=m(""),Ve=m(!1),ye=m(!1),Ne=m(""),W=m(""),J=m(""),z=m("tags"),ee=m([]),me=m(""),je=m(!1),Ke=m(""),Ze=m(""),ge=m(""),we=m(""),Ye=m([]),st=m(""),pe=m(""),Ce=m([]),qe=m(!1),ce=m(""),Ie=m(""),rt=m(null),yt=m(null),ut=m(""),it=m([]),Le=L(()=>u.value?.branch??""),U=L(()=>!!u.value?.inRepo&&!Le.value),N=L(()=>(u.value?.repo??"").replace(/\\/g,"/")),Q=L(()=>B.value.find(E=>E.current)??null),Te=L(()=>Q.value?.upstream??""),O=m(0),T=m(0),K=L(()=>Te.value?`${Te.value}  ↑${O.value} ↓${T.value}`:n("gitNoUpstream")),S=L(()=>U.value?n("gitHeadDetached"):n("gitStatusColon",{branch:Le.value})),q=L(()=>B.value.filter(E=>!E.name.includes("/"))),De=L(()=>B.value.filter(E=>E.name.includes("/"))),ie=L(()=>`${N.value}>git `),ct=L(()=>(u.value?.unstaged.length??0)+(u.value?.staged.length??0)>0),wt=L(()=>_e.value.length>0),Ot=L(()=>{const E=u.value;return E?[{key:"staged",label:n("gitGroupStaged"),list:E.staged},{key:"unstaged",label:n("gitGroupUnstaged"),list:E.unstaged},{key:"untracked",label:n("gitGroupUntracked"),list:E.untracked}].filter($=>$.list.length>0):[]}),On=L(()=>d.value?p.value==="history"?`${n("gitFileHistory")} — ${d.value.file.path}`:p.value==="blame"?`${n("gitBlame")} — ${d.value.file.path}`:d.value.file.path:""),Gt=L(()=>b.value||n("gitDiffEmpty"));function ze(E){const $=u.value;return $?E==="changes"?$.staged.length+$.unstaged.length+$.untracked.length:E==="branches"?q.value.length:E==="tags"?ve.value.length:E==="remotes"?_e.value.length:E==="stash"?Ye.value.length:0:0}const Je={"":"",untracked:"?",added:"A",modified:"M",deleted:"D"};function et(E){return Je[E]}function lt(E){const $=E.lastIndexOf("/");return $>0?E.slice(0,$+1):""}function xn(E){const $=E.lastIndexOf("/");return $>=0?E.slice($+1):E}function Cn(E){return E?new Date(E*1e3).toLocaleString():"—"}async function zt(E){const $=u.value?.repo;if(!$)throw new Error(n("gitNotRepo"));return Bo($,E)}async function ot(E){const $=await zt(E);if($.code!==0)throw new Error(($.stderr||$.stdout||n("gitOpFailed")).trim());return $.stdout}async function ft(E,$,Se){v.op=!0;try{return await E(),$&&X("ok",n($,Se)),await Ct(),!0}catch(nt){return X("error",nt.message),!1}finally{v.op=!1}}async function Ct(E=!1){if(!(!e.dir||!di(e.dir))){E||(v.refresh=!0);try{if(u.value=await Wo(e.dir),!u.value.inRepo)return;await Promise.all([$n(),mn(),Ts()]),d.value&&await Bn(d.value.file,d.value.group,!0)}catch($){E||X("error",$.message)}finally{E||(v.refresh=!1)}}}function Ln(){c.value="changes",Ct()}Qe(()=>e.dir,()=>{e.modelValue&&Ct()});async function $n(){const E=await ot(["for-each-ref","--sort=-creatordate","--format=%(refname)%09%(objectname:short)%09%(upstream:short)%09%(HEAD)%09%(*objectname:short)%09%(creatordate:short)%09%(contents:subject)","refs/heads","refs/remotes","refs/tags"]).catch(()=>""),$=[],Se=[];for(const Tt of E.split(`
`)){if(!Tt.trim())continue;const[dt,j,at,fn,Vn,Os,...Ci]=Tt.split("	");if(dt)if(dt.startsWith("refs/remotes/")){const fa=dt.slice(13);if(fa.endsWith("/HEAD"))continue;$.push({name:fa,hash:j??"",upstream:"",current:!1})}else dt.startsWith("refs/heads/")?$.push({name:dt.slice(11),hash:j??"",upstream:at??"",current:fn==="*"}):dt.startsWith("refs/tags/")&&Se.push({name:dt.slice(10),hash:Vn||j||"",upstream:"",current:!1,deref:Vn,date:Os,subject:Ci.join("	").trim()})}if($.sort((Tt,dt)=>Tt.name.localeCompare(dt.name)),B.value=$,ve.value=Se,O.value=0,T.value=0,Te.value){const Tt=await zt(["rev-list","--left-right","--count",`HEAD...${Te.value}`]).catch(()=>null);if(Tt&&Tt.code===0){const[dt,j]=Tt.stdout.trim().split(/\s+/);O.value=Number(dt)||0,T.value=Number(j)||0}}const nt=await zt(["remote","-v"]).catch(()=>null),At=new Map;for(const Tt of(nt?.stdout??"").split(`
`)){const[dt,j]=Tt.split(/\s+/);dt&&j&&!At.has(dt)&&At.set(dt,j)}_e.value=[...At].map(([Tt,dt])=>({name:Tt,url:dt})),await Jn()}async function Jn(){const E=new Set(ve.value.map(nt=>nt.name)),$=new Set,Se=[];for(const nt of _e.value){const At=await zt(["ls-remote","--tags",nt.name]).catch(()=>null);if(!At||At.code!==0)continue;const Tt=new Map;for(const dt of At.stdout.split(`
`)){const j=/^([0-9a-f]+)\t(refs\/tags\/(.+))$/.exec(dt.trim());if(!j)continue;const at=j[1],fn=j[3];if(fn.endsWith("^{}")){const Vn=fn.slice(0,-3),Os=Tt.get(Vn);Os?Os.deref=at:Tt.set(Vn,{hash:at,deref:at})}else{const Vn=Tt.get(fn);Vn?Vn.hash=at:Tt.set(fn,{hash:at})}}for(const[dt,j]of Tt)E.has(dt)||$.has(dt)||($.add(dt),Se.push({name:dt,hash:j.deref||j.hash,upstream:"",current:!1,deref:j.deref,remoteOnly:!0,remote:nt.name}))}Se.length&&(ve.value=[...ve.value,...Se.sort((nt,At)=>At.name.localeCompare(nt.name,void 0,{numeric:!0}))])}async function mn(){const E=["log",`--max-count=${de.value}`,"--date-order"];V.value&&E.push("--all"),E.push(`--pretty=format:${$l}`);const $=await ot(E).catch(()=>"");M.value=wd(Sl($))}function Sn(E){V.value!==E&&(V.value=E,de.value=Ii,mn().catch(()=>{}))}async function Xs(){de.value+=Ii,await mn().catch(()=>{})}async function Ts(){const E=await zt(["stash","list"]).catch(()=>null);Ye.value=En(E?.stdout??"")}function En(E){const $=[];for(const Se of E.split(`
`)){const nt=/^(stash@\{[^}]+\}):\s*(.*)$/.exec(Se.trim());nt&&$.push({ref:nt[1],full:Se.trim(),message:nt[2]||nt[1]})}return $}async function cn(E,$){d.value={file:E,group:$},p.value="diff",await Bn(E,$)}async function Bn(E,$,Se=!1){b.value="";try{if($==="untracked"){w.value=[],b.value=n("gitDiffUntrackedHint");return}const nt=["diff","--no-color",...$==="staged"?["--cached"]:[],"--",E.path];Gn(await ot(nt))}catch(nt){Se||X("error",nt.message),w.value=[]}}function Gn(E){w.value=E?E.split(`
`):[]}async function Tn(){const E=d.value;if(E){p.value="history",x.value=[];try{const $=await ot(["log","--follow","--max-count=30",`--pretty=format:${$l}`,"--",E.file.path]);x.value=Sl($)}catch($){X("error",$.message)}}}async function gn(){const E=d.value;if(E){p.value="blame",A.value=[];try{const $=await ot(["blame","--date=short","-w","--",E.file.path]);A.value=C1($)}catch($){X("error",$.message)}}}async function yn(E){await ft(async()=>{await ot(["add","--",E.path])})}async function Qn(E){await ft(async()=>{await ot(["restore","--staged","--",E.path])})}async function Dn(E){await Mt({title:n("gitDiscardTitle"),message:n("gitDiscardMsg",{name:E.path})})&&await ft(async()=>{await ot(["checkout","--",E.path])},"gitDiscarded")}async function D(E){const $=u.value?.repo;if(!$)return;const Se=`${$.replace(/\\/g,"/")}/${E.path}`.replace(/\/{2,}/g,"/");await ft(async()=>{await su(Se)},"gitIgnored")}async function he(){await ft(async()=>{await ot(["add","-A"])})}async function Be(){const E=I.value.trim(),$=u.value;if(!(!E||!$?.staged.length)){v.commit=!0;try{await ot(["commit","-m",E]),I.value="",X("ok",n("gitCommitted")),await Ct()}catch(Se){X("error",Se.message)}finally{v.commit=!1}}}async function He(E){H.value=E.hash,G.value="",F.value=[],Z.value=[];try{const[$,Se]=await Promise.all([ot(["show","-s",`--format=${_1}`,E.hash]),ot(["diff-tree","--no-commit-id","--numstat","-r","--root",E.hash])]);C.value=k1($)??{...E,body:""},Z.value=x1(Se)}catch($){X("error",$.message)}}async function Pe(E){const $=H.value;if($){G.value=E.path,F.value=[];try{const Se=await ot(["show","--no-color","--format=",$,"--",E.path]);F.value=Se?Se.split(`
`):[]}catch(Se){X("error",Se.message)}Ve.value=!0}}async function Ge(E){try{await navigator.clipboard.writeText(E),X("ok",n("gitCopied"))}catch{X("error",n("gitOpFailed"))}}const{cmOpen:Et,cmX:$t,cmY:wn,cmItems:In,openMenu:Fn,closeMenu:Ys}=pn();function $o(E,$,Se){const nt=[{label:n("gitDiff"),icon:"code",onClick:()=>void cn($,Se)},{label:n("gitFileHistory"),icon:"clock",disabled:Se==="untracked",onClick:()=>void un($,Se)},{label:n("gitBlame"),icon:"activity",disabled:Se==="untracked",onClick:()=>void Ds($,Se)},{separator:!0},Se==="staged"?{label:n("gitUnstage"),icon:"undo",onClick:()=>void Qn($)}:{label:n("gitAddShort"),icon:"plus",onClick:()=>void yn($)},{label:n("gitIgnore"),icon:"eyeOff",disabled:Se!=="untracked",onClick:()=>void D($)},{label:n("gitDiscard"),icon:"close",disabled:Se==="untracked",onClick:()=>void Dn($)},{separator:!0},{label:n("gitCopyPath"),icon:"copy",onClick:()=>void Ge($.path)}];Fn(E,nt)}async function un(E,$){(!d.value||d.value.file.path!==E.path||d.value.group!==$)&&await cn(E,$),await Tn()}async function Ds(E,$){(!d.value||d.value.file.path!==E.path||d.value.group!==$)&&await cn(E,$),await gn()}function Fs(E,$){const Se=[{label:n("gitCheckout"),icon:"arrowRight",disabled:$.current,onClick:()=>void ns($.name)},{label:n("gitMergeIntoCurrent"),icon:"merge",disabled:$.current,onClick:()=>void k($.name)},{label:n("gitPushBranch"),icon:"upload",onClick:()=>void $e($.name)},{separator:!0},{label:n("gitBranchRename"),icon:"edit",disabled:!$.current,onClick:()=>void dn()},{label:n("gitDelete"),icon:"trash",disabled:$.current,onClick:()=>void g($.name)},{separator:!0},{label:n("gitCopyName"),icon:"copy",onClick:()=>void Ge($.name)}];Fn(E,Se)}function Zn(E,$){Fn(E,[{label:n("gitCheckout"),icon:"arrowRight",onClick:()=>void jn($.name)},{separator:!0},{label:n("gitCopyName"),icon:"copy",onClick:()=>void Ge($.name)}])}function es(E,$){const Se=[{label:n("gitView"),icon:"eye",onClick:()=>Me($)}];$.remoteOnly?Se.push({label:n("gitTagPull"),icon:"download",onClick:()=>void gs($)}):(Se.push({label:n("gitPushBranch"),icon:"upload",onClick:()=>void Xt($.name)}),Se.push({label:n("gitDelete"),icon:"trash",onClick:()=>void Re($.name)})),Se.push({separator:!0}),Se.push({label:n("gitCopyName"),icon:"copy",onClick:()=>void Ge($.name)}),Fn(E,Se)}function Rs(E,$){Fn(E,[{label:n("gitRemoteSetUrl"),icon:"edit",onClick:()=>void ys($)},{label:n("gitDelete"),icon:"trash",onClick:()=>void la($.name)},{separator:!0},{label:n("gitCopyUrl"),icon:"copy",onClick:()=>void Ge($.url)}])}function Js(E,$){Fn(E,[{label:n("gitStashApply"),icon:"download",onClick:()=>void Zs($.ref)},{label:n("gitStashPop"),icon:"upload",onClick:()=>void ki($.ref)},{label:n("gitStashDrop"),icon:"close",onClick:()=>void xi($.ref)},{separator:!0},{label:n("gitCopyMsg"),icon:"copy",onClick:()=>void Ge($.message)}])}function Rn(E){Fn(E,[{label:n("gitResetSoft"),icon:"undo",onClick:()=>void en("reset-soft")},{label:n("gitResetMixed"),icon:"undo",onClick:()=>void en("reset-mixed")},{label:n("gitResetHard"),icon:"warning",onClick:()=>void en("reset-hard")},{separator:!0},{label:n("gitRevert"),icon:"undo",onClick:()=>void en("revert")},{label:n("gitCherryPick"),icon:"check",onClick:()=>void en("cherry-pick")}])}function qn(){vr({kind:"git",dir:e.dir,key:Fe.key,onDone:()=>{Ct()}})}async function ts(){const E=H.value;if(!E)return;const Se=(await ds({title:n("gitBranchFromTitle"),placeholder:n("gitBranchFromPlaceholder")}))?.trim();Se&&await ft(async()=>{await ot(["branch",Se,E])},"gitBranchCreated",{name:Se})}async function Ns(){const E=H.value;!E||!await Mt({title:n("gitCheckoutCommit"),message:n("gitCheckoutCommitMsg",{hash:E.slice(0,7)})})||await ft(async()=>{await ot(["checkout",E])})}async function en(E){const $=H.value;if(!$)return;const Se=$.slice(0,7);if(E==="reset-soft"||E==="reset-mixed"||E==="reset-hard"){if(E==="reset-hard"&&!await Mt({title:n("gitResetHard"),message:n("gitResetHardMsg")}))return;const nt=E==="reset-soft"?"--soft":E==="reset-mixed"?"--mixed":"--hard";await ft(async()=>{await ot(["reset",nt,$])},"gitResetDone",{hash:Se});return}if(E==="revert"){await ft(async()=>{await ot(["revert","--no-edit",$])},"gitRevertDone",{hash:Se});return}E==="cherry-pick"&&await ft(async()=>{await ot(["cherry-pick",$])},"gitCherryPicked",{hash:Se})}async function Kt(){const E=ke.value.trim();if(!E)return;await ft(async()=>{await ot(["checkout","-b",E])},"gitBranchCreated",{name:E})&&(ke.value="")}async function ns(E){await ft(async()=>{await ot(["checkout",E])})}async function jn(E){const $=E.split("/").slice(1).join("/")||E;await ft(async()=>{await ot(["checkout","-b",$,"--track",E])},"gitBranchCreated",{name:$})}async function dn(){const E=Le.value;if(!E||U.value)return;const Se=(await ds({title:n("gitBranchRenameTitle"),placeholder:n("gitBranchRenamePlaceholder"),initial:E}))?.trim();!Se||Se===E||await ft(async()=>{await ot(["branch","-m",Se])},"gitBranchRenamed",{name:Se})}async function g(E){await Mt({title:n("gitDelete"),message:n("gitBranchDeleteMsg",{name:E})})&&await ft(async()=>{await ot(["branch","-D",E])})}async function k(E){await ft(async()=>{await ot(["merge","--no-edit",E])},"gitMergeDone",{name:E})}async function $e(E){const $=!!B.value.find(Se=>Se.name===E)?.upstream;await ft(async()=>{await ot($?["push"]:["push","-u","origin",E])},"gitPushed",{name:E})}function fe(E){const $=[E.name];return E.subject&&$.push(E.subject),$.push(`${E.hash}${E.date?` · ${E.date}`:""}`),$.join(`
`)}function Me(E){const $=E.hash;$&&(c.value="history",He({hash:$,short:$.slice(0,7),author:"",email:"",ts:E.date?Math.floor(Date.parse(E.date)/1e3):0,date:E.date??"",subject:E.subject??"",parents:[],refs:[{label:E.name,kind:"tag"}]}))}async function R(){const E=le.value.trim();if(!E)return;const $=re.value.trim(),Se=Ee.value.trim();await ft(async()=>{const At=Se?["tag","-a",E,"-m",Se]:["tag",E];$&&At.push($),await ot(At)},"gitTagCreated",{name:E})&&(le.value="",re.value="",Ee.value="")}async function Re(E){await Mt({title:n("gitDelete"),message:n("gitTagDeleteMsg",{name:E})})&&await ft(async()=>{await ot(["tag","-d",E])},"gitTagDeleted",{name:E})}async function Xt(E){await ft(async()=>{await ot(["push","origin",E])},"gitTagPushed",{name:E})}async function Ht(){await ft(async()=>{await ot(["fetch","--tags"])},"gitTagFetchAllDone")}async function gs(E){const $=E.remote||"origin";await ft(async()=>{await ot(["fetch",$,`refs/tags/${E.name}:refs/tags/${E.name}`])},"gitTagPulled",{name:E.name})}function Qs(){Ne.value="",W.value="",J.value="",ye.value=!0}function ss(E){z.value=E,E==="releases"&&Ps()}async function Ps(){const E=u.value?.repo;if(!(!E||je.value)){je.value=!0;try{const $=await Vp(E);ee.value=$.list,me.value=$.skipped??""}catch($){me.value=$.message}finally{je.value=!1}}}async function As(){const E=Ke.value.trim(),$=Ze.value.trim();if(!E||!$){X("error",n("gitReleaseRequireMsg"));return}const Se=u.value?.repo;if(!Se){X("error",n("gitNotRepo"));return}v.op=!0;try{const nt=await jr(Se,E,E,$);nt.url?(X("ok",n("gitReleaseCreated",{url:nt.url})),Ze.value="",await Ps()):X("info",n("gitReleaseGhSkip",{reason:nt.skipped??""}))}catch(nt){X("error",nt.message)}finally{v.op=!1}}function ia(E){E&&window.open(E,"_blank","noopener")}async function _i(){const E=Ne.value.trim(),$=J.value.trim(),Se=W.value.trim();if(!E||!$){X("error",n("gitReleaseRequireMsg"));return}const nt=u.value?.repo;if(!nt){X("error",n("gitNotRepo"));return}v.op=!0;try{if((await zt(["rev-parse","-q","--verify",`refs/tags/${E}`])).code!==0){const dt=["tag","-a",E,"-m",$];Se&&dt.push(Se),await ot(dt)}await ot(["push","origin",E]);let Tt="";try{const dt=await jr(nt,E,E,$);dt.url?Tt=dt.url:dt.skipped&&X("info",n("gitReleaseGhSkip",{reason:dt.skipped}))}catch(dt){X("info",n("gitReleaseGhSkip",{reason:dt.message}))}X("ok",Tt?`${n("gitReleased",{name:E})}  ${Tt}`:n("gitReleased",{name:E})),ye.value=!1,z.value==="releases"&&Ps(),await Ct()}catch(At){X("error",At.message)}finally{v.op=!1}}async function os(){const E=ge.value.trim(),$=we.value.trim();if(!E||!$)return;await ft(async()=>{await ot(["remote","add",E,$])},"gitRemoteAdded",{name:E})&&(ge.value="",we.value="")}async function ys(E){const Se=(await ds({title:n("gitRemoteUrlTitle"),placeholder:n("gitRemoteUrlPlaceholder"),initial:E.url}))?.trim();!Se||Se===E.url||await ft(async()=>{await ot(["remote","set-url",E.name,Se])},"gitRemoteUrlSaved")}async function la(E){await Mt({title:n("gitDelete"),message:n("gitRemoteRemoveMsg",{name:E})})&&await ft(async()=>{await ot(["remote","remove",E])},"gitRemoteRemoved",{name:E})}async function tn(){v.stash=!0;try{await ot(["stash","push","-m",st.value.trim()||"auto stash"]),st.value="",X("ok",n("gitStashCreated")),await Ct()}catch(E){X("error",E.message)}finally{v.stash=!1}}async function Zs(E){await ft(async()=>{await ot(["stash","apply",E])},"gitStashApplied")}async function ki(E){await ft(async()=>{await ot(["stash","pop",E])},"gitStashPopped")}async function xi(E){await Mt({title:n("gitStashDrop"),message:n("gitStashDropMsg",{ref:E})})&&await ft(async()=>{await ot(["stash","drop",E])},"gitStashDropped")}async function Ms(E){pe.value=E,Ce.value=[];try{const $=await ot(["stash","show","--no-color","-p",E]);Ce.value=$?$.split(`
`):[]}catch($){X("error",$.message)}}async function So(E){v.sync=E;try{const $=await zt([E]);if($.code!==0)throw new Error(($.stderr||$.stdout||n("gitOpFailed")).trim());X("ok",($.stderr||$.stdout||`${E} ok`).trim()),await Ct()}catch($){X("error",$.message)}finally{v.sync=""}}async function Eo(){const E=u.value?.repo??"";let $="";if(E){const Se=await Bo(E,["remote","get-url","origin"]).catch(()=>null);Se&&Se.code===0&&($=(Se.stdout.split(/\r?\n/)[0]??"").trim())}hr({kind:"git",url:$})}async function ra(){try{const E=await ou();ce.value=E.name??"",Ie.value=E.email??""}catch{}qe.value=!0}async function ca(){v.config=!0;try{await au(ce.value,Ie.value),qe.value=!1,X("ok",n("gitConfigSaved"))}catch(E){X("error",E.message)}finally{v.config=!1}}async function ua(){const E=ut.value.trim();if(E){ut.value="",it.value.push({kind:"cmd",text:E});try{const $=await zt(E.split(/\s+/));$.stdout&&it.value.push({kind:"out",text:$.stdout}),$.stderr&&it.value.push({kind:$.code===0?"out":"err",text:$.stderr}),!$.stdout&&!$.stderr&&it.value.push({kind:"out",text:`(exit ${$.code})`}),await Ct(!0)}catch($){it.value.push({kind:"err",text:$.message})}}}function da(){yt.value?.focus()}return(E,$)=>{const Se=Mn,nt=Ss,At=ai,Tt=oi,dt=rn;return l(),Xe(dt,{"model-value":t.modelValue,title:s(n)("gitPanelTitle"),width:"800px","align-center":"","modal-class":"fw-blur-overlay",class:"fw-gitpanel-dialog","close-on-click-modal":!1,"onUpdate:modelValue":$[33]||($[33]=j=>E.$emit("update:modelValue",j)),onOpen:Ln},{default:ne(()=>[u.value&&u.value.inRepo?(l(),r("div",K1,[o("div",X1,[o("span",{class:te(["fw-gp-branch",{detached:U.value}]),title:S.value},[h(se,{name:"git",size:13}),o("b",null,a(U.value?s(n)("gitHeadDetached"):Le.value||"—"),1)],10,Y1),o("span",{class:"fw-gp-up",title:K.value},[Te.value?(l(),r(oe,{key:0},[o("span",{class:te(["fw-gp-up-i",{zero:!O.value}])},"↑"+a(O.value),3),o("span",{class:te(["fw-gp-up-i",{zero:!T.value}])},"↓"+a(T.value),3),o("span",Q1,a(Te.value),1)],64)):(l(),r(oe,{key:1},[ue(a(s(n)("gitNoUpstream")),1)],64))],8,J1),o("span",{class:"fw-gp-repo",title:u.value.repo},a(s(n)("gitLocalRepo"))+a(N.value),9,Z1),o("span",ey,[h(Se,{size:"small",loading:v.sync==="fetch",onClick:$[0]||($[0]=j=>So("fetch"))},{default:ne(()=>[ue(a(s(n)("gitFetch")),1)]),_:1},8,["loading"]),h(Se,{size:"small",loading:v.sync==="pull",onClick:$[1]||($[1]=j=>So("pull"))},{default:ne(()=>[ue(a(s(n)("gitPull")),1)]),_:1},8,["loading"]),h(Se,{size:"small",loading:v.sync==="push",onClick:$[2]||($[2]=j=>So("push"))},{default:ne(()=>[ue(a(s(n)("gitPush")),1)]),_:1},8,["loading"]),h(Se,{size:"small",disabled:v.refresh,title:s(n)("gitRefresh"),onClick:$[3]||($[3]=j=>Ct())},{default:ne(()=>[o("span",{class:te(["fw-gp-refresh-ic",{spin:v.refresh}])},[h(se,{name:"refresh",size:13})],2)]),_:1},8,["disabled","title"]),h(Se,{size:"small",title:s(n)("gitConfig"),onClick:ra},{default:ne(()=>[h(se,{name:"gear",size:13})]),_:1},8,["title"]),h(Se,{size:"small",title:s(n)("accTitle"),onClick:Eo},{default:ne(()=>[h(se,{name:"shield",size:13})]),_:1},8,["title"])])]),o("div",ty,[o("nav",ny,[(l(),r(oe,null,Ae(i,j=>o("button",{key:j.key,class:te(["fw-gp-rail-btn",{active:c.value===j.key}]),onClick:at=>c.value=j.key},[h(se,{name:j.icon,size:14},null,8,["name"]),o("span",oy,a(s(n)(j.label)),1),ze(j.key)?(l(),r("span",ay,a(ze(j.key)),1)):P("",!0)],10,sy)),64)),$[35]||($[35]=o("span",{class:"fw-gp-rail-fill"},null,-1)),v.op?(l(),r("div",iy,[$[34]||($[34]=o("span",{class:"fw-gp-spin"},null,-1)),ue(a(s(n)("gitOpRunning")),1)])):P("",!0)]),o("section",ly,[c.value==="changes"?(l(),r("div",ry,[o("div",cy,[Ot.value.length?P("",!0):(l(),r("div",uy,a(s(n)("gitClean")),1)),(l(!0),r(oe,null,Ae(Ot.value,j=>(l(),r(oe,{key:j.key},[o("div",dy,[o("span",fy,a(j.label),1),o("span",py,a(j.list.length),1),j.key==="unstaged"?(l(),r("button",{key:0,class:"fw-gp-mini",title:s(n)("gitStageAll"),onClick:he},[h(se,{name:"plus",size:11})],8,vy)):P("",!0)]),(l(!0),r(oe,null,Ae(j.list,at=>(l(),r("div",{key:j.key+at.path,class:te(["fw-gp-row",{active:d.value&&d.value.file.path===at.path&&d.value.group===j.key}]),title:at.path,onClick:fn=>cn(at,j.key),onContextmenu:be(fn=>$o(fn,at,j.key),["prevent","stop"])},[o("span",{class:te(["fw-gp-st","st-"+at.status])},a(et(at.status)),3),o("span",my,[lt(at.path)?(l(),r("span",gy,a(lt(at.path)),1)):P("",!0),ue(a(xn(at.path)),1)]),o("span",yy,[j.key!=="staged"?(l(),r("button",{key:0,class:"fw-gp-mini",title:s(n)("gitAddShort"),onClick:be(fn=>yn(at),["stop"])},[h(se,{name:"plus",size:11})],8,wy)):(l(),r("button",{key:1,class:"fw-gp-mini",title:s(n)("gitUnstage"),onClick:be(fn=>Qn(at),["stop"])},[h(se,{name:"undo",size:11})],8,by))])],42,hy))),128))],64))),128))]),o("div",_y,[o("div",ky,[o("span",{class:"fw-gp-detailtitle",title:On.value},a(On.value),9,xy),o("span",Cy,[d.value&&p.value!=="diff"?(l(),r("button",{key:0,class:"fw-gp-mini",title:s(n)("gitDiff"),onClick:$[4]||($[4]=j=>cn(d.value.file,d.value.group))},[h(se,{name:"code",size:12})],8,$y)):P("",!0),d.value&&p.value!=="history"?(l(),r("button",{key:1,class:"fw-gp-mini",title:s(n)("gitFileHistory"),onClick:Tn},[h(se,{name:"clock",size:12})],8,Sy)):P("",!0),d.value&&p.value!=="blame"?(l(),r("button",{key:2,class:"fw-gp-mini",title:s(n)("gitBlame"),onClick:gn},[h(se,{name:"activity",size:12})],8,Ey)):P("",!0),d.value?(l(),r("button",{key:3,class:"fw-gp-mini",title:s(n)("gitCopyPath"),onClick:$[5]||($[5]=j=>Ge(d.value.file.path))},[h(se,{name:"copy",size:12})],8,Ty)):P("",!0)])]),d.value?p.value==="diff"?(l(),Xe(Uo,{key:1,lines:w.value,empty:Gt.value},null,8,["lines","empty"])):p.value==="history"?(l(),r(oe,{key:2},[x.value.length?(l(),r("div",Ry,[(l(!0),r(oe,null,Ae(x.value,j=>(l(),r("div",{key:j.hash,class:"fw-gp-filerow"},[o("span",Ny,a(j.short),1),o("span",{class:"fw-gp-filesub",title:j.subject},a(j.subject),9,Py),o("span",Ay,a(j.author)+" · "+a(j.date),1)]))),128))])):(l(),r("div",Fy,a(s(n)("gitFileHistoryEmpty")),1))],64)):(l(),r(oe,{key:3},[A.value.length?(l(),r("div",Oy,[(l(!0),r(oe,null,Ae(A.value,(j,at)=>(l(),r("div",{key:at,class:"fw-gp-blame-row"},[o("span",{class:"fw-gp-blame-hash",title:j.hash},a(j.hash.slice(0,7)),9,Ly),o("span",{class:"fw-gp-blame-author",title:j.author},a(j.author),9,By),o("span",Iy,a(j.date),1),o("span",jy,a(j.line),1),o("span",Vy,a(j.text),1)]))),128))])):(l(),r("div",My,a(s(n)("gitBlameEmpty")),1))],64)):(l(),r("div",Dy,a(s(n)("gitSelectFile")),1))])])):c.value==="history"?(l(),r("div",zy,[o("div",Uy,[o("div",Hy,[o("button",{class:te(["fw-gp-tab",{on:V.value}]),onClick:$[6]||($[6]=j=>Sn(!0))},a(s(n)("gitHistoryAll")),3),o("button",{class:te(["fw-gp-tab",{on:!V.value}]),onClick:$[7]||($[7]=j=>Sn(!1))},a(s(n)("gitHistoryCurrent")),3),$[36]||($[36]=o("span",{class:"fw-gp-spacer"},null,-1)),o("span",Wy,a(M.value.length),1),M.value.length>=de.value?(l(),r("button",{key:0,class:"fw-gp-tab",onClick:Xs},a(s(n)("gitLoadMore")),1)):P("",!0)]),h(G1,{rows:M.value,active:H.value,empty:s(n)("gitLogEmpty"),onSelect:He},null,8,["rows","active","empty"])]),o("div",Gy,[C.value?(l(),r(oe,{key:1},[o("div",Ky,[o("span",{class:"fw-gp-detailtitle",title:C.value.subject},a(s(n)("gitCommitDetail")),9,Xy),o("span",Yy,[o("button",{class:"fw-gp-mini",title:s(n)("gitCopyHash"),onClick:$[8]||($[8]=j=>Ge(C.value.hash))},[h(se,{name:"copy",size:12})],8,Jy),o("button",{class:"fw-gp-mini",title:s(n)("gitBranchFrom"),onClick:ts},[h(se,{name:"git",size:12})],8,Qy),o("button",{class:"fw-gp-mini",title:s(n)("gitCheckoutCommit"),onClick:Ns},[h(se,{name:"check",size:12})],8,Zy),o("button",{class:"fw-gp-mini",title:s(n)("gitMenu"),onClick:$[9]||($[9]=be(j=>Rn(j),["stop"]))},[h(se,{name:"sort",size:12})],8,ew)])]),o("div",tw,[o("div",nw,[o("div",sw,[o("span",ow,a(s(n)("gitCommitHash")),1),o("span",aw,a(C.value.hash),1)]),o("div",iw,[o("span",lw,a(s(n)("gitCommitAuthor")),1),o("span",rw,a(C.value.author)+" <"+a(C.value.email)+">",1)]),o("div",cw,[o("span",uw,a(s(n)("gitCommitDate")),1),o("span",dw,a(Cn(C.value.ts))+" · "+a(C.value.date),1)]),o("div",fw,[o("span",pw,a(s(n)("gitCommitParents")),1),o("span",vw,a(C.value.parents.map(j=>j.slice(0,7)).join(" ")||"—"),1)]),C.value.refs.length?(l(),r("div",hw,[o("span",mw,a(s(n)("gitCommitRefs")),1),o("span",gw,[(l(!0),r(oe,null,Ae(C.value.refs,j=>(l(),r("span",{key:j.label,class:te(["fw-gp-refchip","rf-"+j.kind])},a(j.label),3))),128))])])):P("",!0)]),o("pre",yw,a(C.value.body||C.value.subject),1),o("div",ww,a(s(n)("gitCommitChangedFiles",{n:Z.value.length})),1),Z.value.length?P("",!0):(l(),r("div",bw,a(s(n)("gitCommitNoFiles")),1)),(l(!0),r(oe,null,Ae(Z.value,j=>(l(),r("div",{key:j.path,class:te(["fw-gp-row",{active:G.value===j.path}]),title:s(n)("gitCommitOpenDiff",{path:j.path}),onClick:at=>Pe(j)},[o("span",kw,[lt(j.path)?(l(),r("span",xw,a(lt(j.path)),1)):P("",!0),ue(a(xn(j.path)),1)]),o("span",Cw,[o("span",$w,"+"+a(j.add),1),o("span",Sw,"-"+a(j.del),1)])],10,_w))),128))])],64)):(l(),r("div",qy,a(s(n)("gitSelectCommit")),1))])])):c.value==="branches"?(l(),r("div",Ew,[o("div",Tw,[h(nt,{modelValue:ke.value,"onUpdate:modelValue":$[10]||($[10]=j=>ke.value=j),size:"small",placeholder:s(n)("gitBranchNew"),onKeydown:bt(Kt,["enter"])},null,8,["modelValue","placeholder"]),h(Se,{size:"small",type:"primary",loading:v.branch,onClick:Kt},{default:ne(()=>[ue(a(s(n)("gitBranchCreateAndSwitch")),1)]),_:1},8,["loading"]),h(Se,{size:"small",disabled:U.value,onClick:dn},{default:ne(()=>[ue(a(s(n)("gitBranchRename")),1)]),_:1},8,["disabled"])]),o("div",Dw,a(s(n)("gitBranchLocalGroup")),1),(l(!0),r(oe,null,Ae(q.value,j=>(l(),r("div",{key:j.name,class:te(["fw-gp-row",{active:j.current}]),onContextmenu:be(at=>Fs(at,j),["prevent","stop"])},[o("span",Rw,[h(se,{name:"git",size:12})]),o("span",Nw,[ue(a(j.name),1),j.current?(l(),r("span",Pw," • "+a(s(n)("gitBranchCurrent")),1)):P("",!0)]),o("span",Aw,[j.current?(l(),Xe(Se,{key:1,text:"",size:"small",onClick:at=>$e(j.name)},{default:ne(()=>[ue(a(s(n)("gitPushBranch")),1)]),_:1},8,["onClick"])):(l(),Xe(Se,{key:0,text:"",size:"small",onClick:at=>ns(j.name)},{default:ne(()=>[ue(a(s(n)("gitCheckout")),1)]),_:1},8,["onClick"]))])],42,Fw))),128)),De.value.length?(l(),r(oe,{key:0},[o("div",Mw,a(s(n)("gitBranchRemoteGroup")),1),(l(!0),r(oe,null,Ae(De.value,j=>(l(),r("div",{key:j.name,class:"fw-gp-row",onContextmenu:be(at=>Zn(at,j),["prevent","stop"])},[o("span",Lw,[h(se,{name:"globe",size:12})]),o("span",Bw,a(j.name),1),o("span",Iw,[h(Se,{text:"",size:"small",onClick:at=>jn(j.name)},{default:ne(()=>[ue(a(s(n)("gitCheckout")),1)]),_:1},8,["onClick"])])],40,Ow))),128))],64)):P("",!0)])):c.value==="tags"?(l(),r("div",jw,[o("div",Vw,[o("button",{class:te(["fw-gp-sectab",{active:z.value==="tags"}]),onClick:$[11]||($[11]=j=>ss("tags"))},[ue(a(s(n)("gitTabTags")),1),ve.value.length?(l(),r("span",zw,a(ve.value.length),1)):P("",!0)],2),o("button",{class:te(["fw-gp-sectab",{active:z.value==="releases"}]),onClick:$[12]||($[12]=j=>ss("releases"))},[ue(a(s(n)("gitTabReleases")),1),ee.value.length?(l(),r("span",Uw,a(ee.value.length),1)):P("",!0)],2)]),z.value==="tags"?(l(),r(oe,{key:0},[o("div",Hw,[h(nt,{modelValue:le.value,"onUpdate:modelValue":$[13]||($[13]=j=>le.value=j),size:"small",class:"fw-gp-in-name",placeholder:s(n)("gitTagNamePlaceholder")},null,8,["modelValue","placeholder"]),h(nt,{modelValue:re.value,"onUpdate:modelValue":$[14]||($[14]=j=>re.value=j),size:"small",class:"fw-gp-in-target",placeholder:s(n)("gitTagTargetPlaceholder")},null,8,["modelValue","placeholder"]),h(nt,{modelValue:Ee.value,"onUpdate:modelValue":$[15]||($[15]=j=>Ee.value=j),size:"small",class:"fw-gp-in-msg",placeholder:s(n)("gitTagMessagePlaceholder")},null,8,["modelValue","placeholder"]),h(Se,{size:"small",type:"primary",disabled:!le.value.trim(),onClick:R},{default:ne(()=>[ue(a(s(n)("gitTagCreate")),1)]),_:1},8,["disabled"]),h(Se,{size:"small",loading:v.op,disabled:!wt.value,title:wt.value?"":s(n)("gitTagNoRemote"),onClick:Ht},{default:ne(()=>[ue(a(s(n)("gitTagFetchAll")),1)]),_:1},8,["loading","disabled","title"])]),ve.value.length?P("",!0):(l(),r("div",Ww,a(s(n)("gitTagEmpty")),1)),(l(!0),r(oe,null,Ae(ve.value,j=>(l(),r("div",{key:j.name,class:"fw-gp-row",title:fe(j),onContextmenu:be(at=>es(at,j),["prevent","stop"])},[o("span",qw,[h(se,{name:"tag",size:12})]),o("span",Kw,[ue(a(j.name)+" ",1),j.deref?(l(),r("span",Xw,a(s(n)("gitTagAnnotated")),1)):P("",!0),j.remoteOnly?(l(),r("span",Yw,a(s(n)("gitTagRemoteOnly")),1)):P("",!0)]),j.date?(l(),r("span",Jw,a(j.date),1)):P("",!0),j.subject?(l(),r("span",{key:1,class:"fw-gp-subject",title:j.subject},a(j.subject),9,Qw)):P("",!0),o("span",Zw,a(j.hash),1),o("span",eb,[h(Se,{text:"",size:"small",onClick:at=>Me(j)},{default:ne(()=>[ue(a(s(n)("gitView")),1)]),_:1},8,["onClick"])])],40,Gw))),128))],64)):(l(),r(oe,{key:1},[o("div",tb,[h(Se,{size:"small",type:"primary",disabled:!wt.value,title:wt.value?"":s(n)("gitTagNoRemote"),onClick:Qs},{default:ne(()=>[ue(a(s(n)("gitReleaseBtn")),1)]),_:1},8,["disabled","title"]),h(Se,{size:"small",loading:je.value,onClick:Ps},{default:ne(()=>[ue(a(s(n)("gitRefresh")),1)]),_:1},8,["loading"]),wt.value?P("",!0):(l(),r("span",nb,a(s(n)("gitTagNoRemote")),1))]),o("div",sb,[h(Tt,{modelValue:Ke.value,"onUpdate:modelValue":$[16]||($[16]=j=>Ke.value=j),size:"small",class:"fw-gp-in-name",placeholder:s(n)("gitReleaseChooseTag"),filterable:""},{default:ne(()=>[(l(!0),r(oe,null,Ae(ve.value,j=>(l(),Xe(At,{key:j.name,label:j.name,value:j.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"]),h(nt,{modelValue:Ze.value,"onUpdate:modelValue":$[17]||($[17]=j=>Ze.value=j),size:"small",type:"textarea",rows:2,resize:"none",placeholder:s(n)("gitReleaseNotesPlaceholder")},null,8,["modelValue","placeholder"]),h(Se,{size:"small",disabled:!Ke.value.trim()||!Ze.value.trim(),onClick:As},{default:ne(()=>[ue(a(s(n)("gitReleaseCreateForTag")),1)]),_:1},8,["disabled"])]),me.value?(l(),r("div",ob,a(s(n)("gitReleaseLoadSkip",{reason:me.value})),1)):!ee.value.length&&!je.value?(l(),r("div",ab,a(s(n)("gitReleaseEmpty")),1)):P("",!0),(l(!0),r(oe,null,Ae(ee.value,j=>(l(),r("div",{key:j.url||j.tag,class:"fw-gp-row",title:j.name},[o("span",lb,[h(se,{name:"tag",size:12})]),o("span",rb,[ue(a(j.name||j.tag)+" ",1),o("span",cb,a(j.tag),1)]),j.date?(l(),r("span",ub,a(j.date),1)):P("",!0),o("span",db,[h(Se,{text:"",size:"small",onClick:at=>ia(j.url)},{default:ne(()=>[ue(a(s(n)("gitReleaseOpen")),1)]),_:1},8,["onClick"])])],8,ib))),128))],64))])):c.value==="remotes"?(l(),r("div",fb,[o("div",pb,[h(nt,{modelValue:ge.value,"onUpdate:modelValue":$[18]||($[18]=j=>ge.value=j),size:"small",class:"fw-gp-in-name",placeholder:s(n)("gitRemoteNamePlaceholder")},null,8,["modelValue","placeholder"]),h(nt,{modelValue:we.value,"onUpdate:modelValue":$[19]||($[19]=j=>we.value=j),size:"small",class:"fw-gp-in-url",placeholder:s(n)("gitRemoteUrlPlaceholder")},null,8,["modelValue","placeholder"]),h(Se,{size:"small",type:"primary",disabled:!ge.value.trim()||!we.value.trim(),onClick:os},{default:ne(()=>[ue(a(s(n)("gitRemoteAdd")),1)]),_:1},8,["disabled"])]),_e.value.length?P("",!0):(l(),r("div",vb,a(s(n)("gitRemoteEmpty")),1)),(l(!0),r(oe,null,Ae(_e.value,j=>(l(),r("div",{key:j.name,class:"fw-gp-row",onContextmenu:be(at=>Rs(at,j),["prevent","stop"])},[o("span",mb,[h(se,{name:"globe",size:12})]),o("span",gb,a(j.name),1),o("span",{class:"fw-gp-remote-url",title:j.url},a(j.url),9,yb)],40,hb))),128))])):c.value==="stash"?(l(),r("div",wb,[o("div",bb,[o("div",_b,[h(nt,{modelValue:st.value,"onUpdate:modelValue":$[20]||($[20]=j=>st.value=j),size:"small",placeholder:s(n)("gitStashPlaceholder"),onKeydown:bt(tn,["enter"])},null,8,["modelValue","placeholder"]),h(Se,{size:"small",type:"primary",loading:v.stash,disabled:!ct.value,onClick:tn},{default:ne(()=>[ue(a(s(n)("gitStashNew")),1)]),_:1},8,["loading","disabled"])]),Ye.value.length?P("",!0):(l(),r("div",kb,a(ct.value?s(n)("gitStashEmpty"):s(n)("gitStashNone")),1)),(l(!0),r(oe,null,Ae(Ye.value,j=>(l(),r("div",{key:j.ref,class:te(["fw-gp-row",{active:pe.value===j.ref}]),title:j.full,onClick:at=>Ms(j.ref),onContextmenu:be(at=>Js(at,j),["prevent","stop"])},[o("span",Cb,[h(se,{name:"stash",size:12})]),o("span",$b,a(j.message),1),o("span",Sb,[o("button",{class:"fw-gp-mini",title:s(n)("gitStashApply"),onClick:be(at=>Zs(j.ref),["stop"])},[h(se,{name:"download",size:11})],8,Eb)])],42,xb))),128))]),o("div",Tb,[o("div",Db,[o("span",Fb,a(pe.value||s(n)("gitStashView")),1)]),h(Uo,{lines:Ce.value,empty:s(n)("gitStashEmpty")},null,8,["lines","empty"])])])):c.value==="cli"?(l(),r("div",Rb,[o("div",{ref_key:"cliRef",ref:rt,class:"fw-gp-cli",onClick:da},[it.value.length?P("",!0):(l(),r("div",Nb,a(s(n)("gitCliPlaceholder")),1)),(l(!0),r(oe,null,Ae(it.value,(j,at)=>(l(),r("div",{key:at,class:te(["fw-gp-cli-line","kind-"+j.kind])},[j.kind==="cmd"?(l(),r(oe,{key:0},[o("span",Pb,a(ie.value),1),o("span",Ab,a(j.text),1)],64)):(l(),r(oe,{key:1},[ue(a(j.text),1)],64))],2))),128)),o("div",Mb,[o("span",Ob,a(ie.value),1),kt(o("input",{ref_key:"cliInputRef",ref:yt,"onUpdate:modelValue":$[21]||($[21]=j=>ut.value=j),class:"fw-gp-cli-inner",spellcheck:"false",autocomplete:"off",onKeydown:bt(ua,["enter"])},null,544),[[Lt,ut.value]])])],512)])):P("",!0)])]),c.value==="changes"?(l(),r("div",Lb,[h(nt,{modelValue:I.value,"onUpdate:modelValue":$[22]||($[22]=j=>I.value=j),type:"textarea",rows:2,resize:"none",placeholder:s(n)("gitCommitMsgPlaceholder"),onKeydown:bt(be(Be,["ctrl","prevent"]),["enter"])},null,8,["modelValue","placeholder","onKeydown"]),o("div",Bb,[o("span",Ib,[u.value.staged.length?(l(),r(oe,{key:0},[ue(a(s(n)("gitCommitFiles",{n:u.value.staged.length})),1)],64)):(l(),r(oe,{key:1},[ue(a(s(n)("gitNoChanges")),1)],64))]),h(Se,{size:"small",disabled:!u.value.unstaged.length&&!u.value.untracked.length,onClick:he},{default:ne(()=>[ue(a(s(n)("gitStageAll")),1)]),_:1},8,["disabled"]),h(Se,{size:"small",type:"primary",loading:v.commit,disabled:!u.value.staged.length||!I.value.trim(),onClick:Be},{default:ne(()=>[ue(a(s(n)("gitCommit")),1),u.value.staged.length?(l(),r("span",jb,"（"+a(u.value.staged.length)+"）",1)):P("",!0)]),_:1},8,["loading","disabled"])])])):P("",!0)])):(l(),r("div",Vb,[v.refresh?(l(),r(oe,{key:0},[$[37]||($[37]=o("span",{class:"fw-gp-spin"},null,-1)),ue(a(s(n)("gitOpRunning")),1)],64)):(l(),r("div",zb,[h(se,{name:"git",size:28}),o("span",null,a(s(n)("gitNotRepo")),1),o("button",{class:"fw-retry",onClick:qn},a(s(n)("gitCloneHere")),1)]))])),h(dt,{"model-value":qe.value,title:s(n)("gitConfigTitle"),width:"420px","align-center":"","modal-class":"fw-blur-overlay",class:"fw-gitconfig-dialog","close-on-click-modal":!1,"onUpdate:modelValue":$[26]||($[26]=j=>qe.value=j)},{footer:ne(()=>[h(Se,{onClick:$[25]||($[25]=j=>qe.value=!1)},{default:ne(()=>[ue(a(s(n)("cancel")),1)]),_:1}),h(Se,{type:"primary",loading:v.config,onClick:ca},{default:ne(()=>[ue(a(s(n)("gitConfigSave")),1)]),_:1},8,["loading"])]),default:ne(()=>[o("div",Ub,[o("label",null,a(s(n)("gitConfigName")),1),h(nt,{modelValue:ce.value,"onUpdate:modelValue":$[23]||($[23]=j=>ce.value=j),size:"small",placeholder:s(n)("gitConfigNamePlaceholder")},null,8,["modelValue","placeholder"])]),o("div",Hb,[o("label",null,a(s(n)("gitConfigEmail")),1),h(nt,{modelValue:Ie.value,"onUpdate:modelValue":$[24]||($[24]=j=>Ie.value=j),size:"small",placeholder:s(n)("gitConfigEmailPlaceholder")},null,8,["modelValue","placeholder"])])]),_:1},8,["model-value","title"]),h(dt,{modelValue:Ve.value,"onUpdate:modelValue":$[27]||($[27]=j=>Ve.value=j),title:s(n)("gitCommitViewTitle"),width:"800px","align-center":"","modal-class":"fw-blur-overlay",class:"fw-gp-commitview-dialog","close-on-click-modal":!1},{default:ne(()=>[C.value?(l(),r("div",Wb,[o("div",Gb,[o("div",qb,[o("span",Kb,a(s(n)("gitCommitHash")),1),o("span",Xb,a(C.value.hash),1)]),o("div",Yb,[o("span",Jb,a(s(n)("gitCommitAuthor")),1),o("span",Qb,a(C.value.author)+" <"+a(C.value.email)+">",1)]),o("div",Zb,[o("span",e_,a(s(n)("gitCommitDate")),1),o("span",t_,a(Cn(C.value.ts))+" · "+a(C.value.date),1)]),o("pre",n_,a(C.value.body||C.value.subject),1)]),o("div",s_,[o("div",o_,[Z.value.length?P("",!0):(l(),r("div",a_,a(s(n)("gitCommitNoFiles")),1)),(l(!0),r(oe,null,Ae(Z.value,j=>(l(),r("div",{key:j.path,class:te(["fw-gp-row",{active:G.value===j.path}]),title:j.path,onClick:at=>Pe(j)},[o("span",l_,[lt(j.path)?(l(),r("span",r_,a(lt(j.path)),1)):P("",!0),ue(a(xn(j.path)),1)]),o("span",c_,[o("span",u_,"+"+a(j.add),1),o("span",d_,"-"+a(j.del),1)])],10,i_))),128))]),o("div",f_,[h(Uo,{lines:F.value,empty:s(n)("gitDiffEmpty")},null,8,["lines","empty"])])])])):(l(),r("div",p_,a(s(n)("gitSelectCommit")),1))]),_:1},8,["modelValue","title"]),h(dt,{modelValue:ye.value,"onUpdate:modelValue":$[32]||($[32]=j=>ye.value=j),title:s(n)("gitReleaseTitle"),width:"460px","align-center":"","modal-class":"fw-blur-overlay",class:"fw-gp-release-dialog","close-on-click-modal":!1},{footer:ne(()=>[h(Se,{onClick:$[31]||($[31]=j=>ye.value=!1)},{default:ne(()=>[ue(a(s(n)("cancel")),1)]),_:1}),h(Se,{type:"primary",loading:v.op,disabled:!Ne.value.trim()||!J.value.trim(),onClick:_i},{default:ne(()=>[ue(a(s(n)("gitReleasePublish")),1)]),_:1},8,["loading","disabled"])]),default:ne(()=>[o("div",v_,[o("label",null,a(s(n)("gitReleaseName")),1),h(nt,{modelValue:Ne.value,"onUpdate:modelValue":$[28]||($[28]=j=>Ne.value=j),size:"small",placeholder:s(n)("gitTagNamePlaceholder")},null,8,["modelValue","placeholder"])]),o("div",h_,[o("label",null,a(s(n)("gitReleaseTarget")),1),h(nt,{modelValue:W.value,"onUpdate:modelValue":$[29]||($[29]=j=>W.value=j),size:"small",placeholder:s(n)("gitTagTargetPlaceholder")},null,8,["modelValue","placeholder"])]),o("div",m_,[o("label",null,a(s(n)("gitReleaseMsg")),1),h(nt,{modelValue:J.value,"onUpdate:modelValue":$[30]||($[30]=j=>J.value=j),type:"textarea",rows:3,resize:"none",placeholder:s(n)("gitTagMessagePlaceholder")},null,8,["modelValue","placeholder"])])]),_:1},8,["modelValue","title"]),s(Et)?(l(),Xe(Qt,{key:2,items:s(In),x:s($t),y:s(wn),onClose:s(Ys)},null,8,["items","x","y","onClose"])):P("",!0)]),_:1},8,["model-value","title"])}}}),bd=xt(g_,[["__scopeId","data-v-001797f7"]]),y_={key:0,class:"fw-svn-shell"},w_={class:"fw-svn-head"},b_=["title"],__=["title"],k_=["title"],x_={class:"fw-svn-headacts"},C_={class:"fw-svn-body"},$_={class:"fw-svn-rail"},S_=["onClick"],E_={class:"fw-svn-rail-txt"},T_={key:0,class:"fw-svn-rail-badge"},D_={key:0,class:"fw-svn-rail-op"},F_={class:"fw-svn-content"},R_={key:0,class:"fw-svn-split"},N_={class:"fw-svn-list"},P_={class:"fw-svn-groupbar"},A_={class:"fw-svn-groupname"},M_={class:"fw-svn-selall"},O_=["checked"],L_={key:0,class:"fw-svn-empty"},B_=["title"],I_=["checked","onChange"],j_=["data-code"],V_={class:"fw-svn-path"},z_={key:0,class:"fw-svn-dir"},U_={class:"fw-svn-stext"},H_={class:"fw-svn-rowacts"},W_=["disabled","title","onClick"],G_=["disabled","title","onClick"],q_=["disabled","title","onClick"],K_=["disabled","title","onClick"],X_={class:"fw-svn-detail"},Y_={class:"fw-svn-detailhead"},J_={class:"fw-svn-detailtitle"},Q_=["placeholder"],Z_={class:"fw-svn-bulk"},e0=["disabled"],t0=["disabled"],n0=["disabled"],s0={class:"fw-svn-commit-acts"},o0={class:"fw-svn-hint"},a0=["disabled"],i0={key:1,class:"fw-svn-loglist"},l0={key:0,class:"fw-svn-empty"},r0=["title","onClick"],c0={class:"fw-svn-caret"},u0={class:"fw-svn-log-r"},d0=["title"],f0={class:"fw-svn-log-meta"},p0={key:0,class:"fw-svn-log-msg"},v0={class:"fw-svn-log-cfiles"},h0={key:0,class:"fw-svn-empty"},m0=["title","onClick"],g0={class:"fw-svn-cfile-path"},y0={key:0,class:"fw-svn-cfile-dir"},w0={key:2,class:"fw-svn-cli"},b0={class:"fw-svn-cli-body"},_0={key:1,class:"fw-svn-warn fw-svn-state"},k0={key:2,class:"fw-svn-checkout-form fw-svn-state"},x0={class:"fw-svn-tip"},C0={class:"fw-svn-checkout-row"},$0={class:"fw-svn-checkout-row"},S0={key:3,class:"fw-svn-empty fw-svn-state"},E0={class:"fw-svn-diffwrap"},T0={class:"fw-svn-blame"},D0={class:"fw-svn-co-form"},F0={class:"fw-svn-co-label"},R0={class:"fw-svn-co-label"},N0=ht({__name:"SvnPanel",props:{modelValue:{type:Boolean},dir:{}},setup(t){const e=t,{t:n}=Bt(),i=[{key:"changes",icon:"fileText",label:"svnRailChanges"},{key:"log",icon:"clock",label:"svnRailLog"},{key:"output",icon:"terminal",label:"svnOutput"}],c=m("changes"),u=m(null),v=m([]),d=m(new Set),p=m(""),w=m(!1),b=m(!1),x=m(""),A=m([]),I=m(!1),M=m(!1),V=m(""),H=m([]),C=m(!1),Z=m(""),G=m([]),F=m(!1),de=m(""),B=m(""),ve=L(()=>(u.value?.root??e.dir).replace(/\\/g,"/")),_e=L(()=>v.value.length>0&&d.value.size===v.value.length);function ke(T){return T!=="changes"?"":v.value.length?String(v.value.length):""}function le(T){c.value=T,T==="log"&&!A.value.length&&ce()}function re(T){const K=T.lastIndexOf("/");return K<0?"":T.slice(0,K+1)}function Ee(T){const K=T.lastIndexOf("/");return K<0?T:T.slice(K+1)}function Ve(T){return T.split(`
`)[0]??""}async function ye(){u.value=null,v.value=[],d.value=new Set,x.value="",A.value=[],c.value="changes";try{u.value=await ps(e.dir),u.value.inRepo&&u.value.svnAvailable&&await J()}catch(T){X("error",T.message)}}async function Ne(T,K=!1){if(w.value)return null;w.value=!0,c.value="output";try{const S=await Jt(e.dir,T),q=[S.stdout,S.stderr].filter(Boolean).join(`
`).trim();return x.value=`$ svn ${T.join(" ")}

${q||n("svnNoOutput")}`,S.code!==0?X("error",(S.stderr||n("svnFailed")).split(`
`)[0].slice(0,200)):!K&&S.stdout&&X("ok",S.stdout.split(`
`)[0].slice(0,200)),S}catch(S){return X("error",S.message),null}finally{w.value=!1}}function W(T){T&&(x.value=`${T}

${x.value}`)}async function J(){const T=await Jt(e.dir,["status"]),K=[];for(const q of(T.stdout||"").split(`
`)){if(!q.trim())continue;const De=q.slice(0,8),ie=q.slice(8).trim();if(!ie)continue;const ct=(De[0]??" ").trim();K.push({code:ct,path:ie.split(" -> ")[0],statusText:z(ct)})}v.value=K;const S=new Set(K.map(q=>q.path));d.value=new Set([...d.value].filter(q=>S.has(q)))}function z(T){return{A:n("svnStAdded"),M:n("svnStModified"),D:n("svnStDeleted"),R:n("svnStReplaced"),C:n("svnStConflicted"),"!":n("svnStMissing"),"~":n("svnStObstructed"),"?":n("svnStUnversioned"),I:n("svnStIgnored")," ":"",K:n("svnStLocked")}[T]??T}function ee(T){const K=new Set(d.value);K.has(T)?K.delete(T):K.add(T),d.value=K}function me(T){const K=T.target.checked;d.value=K?new Set(v.value.map(S=>S.path)):new Set}function je(){hr({kind:"svn",url:u.value?.url??""})}async function Ke(){b.value=!0;try{u.value=await ps(e.dir),u.value.inRepo&&u.value.svnAvailable&&await J()}catch(T){X("error",T.message)}finally{b.value=!1}}async function Ze(){const T=u.value?.revision??null,K=await Ne(["update"],!0);if(!K||K.code!==0)return;const S=n1(K.stdout),q=s1(K.stdout);await Ke();const De=u.value?.revision??q,ie=S?T?n("svnUpdateSummaryFrom",{from:T,to:De??T,n:S}):n("svnUpdateSummary",{n:S,to:De??"?"}):n("svnAlreadyLatest",{rev:De??T??"?"});W(ie),X("ok",ie)}async function ge(){const T=await Ne(["cleanup"]);T&&T.code===0&&await J()}async function we(){const T=await Ne(["add",...d.value]);T&&T.code===0&&await J()}async function Ye(T){const K=await Ne(["add","--",T]);K&&K.code===0&&await J()}async function st(T){const K=T.replace(/[\\/]$/,""),S=K.replace(/[\\/][^\\/]+$/,""),q=K.slice(S.length+1),De=await Jt(S,["propget","svn:ignore",S]),ie=(De.stdout||"").split(/\r?\n/).map(Ot=>Ot.trim()).filter(Boolean);if(ie.includes(q)){De.code===0&&X("ok",n("gitIgnored")),await J();return}const ct=[...ie,q].join(`
`),wt=await Jt(S,["propset","svn:ignore",ct,S]);wt.code===0?X("ok",n("gitIgnored")):X("error",(wt.stderr||n("svnFailed")).split(`
`)[0].slice(0,200)),await J()}async function pe(){const T=await Ne(["revert",...d.value]);T&&T.code===0&&await J()}async function Ce(){const T=await Ne(["resolve","--accept","working",...d.value]);T&&T.code===0&&await J()}async function qe(){const T=[...d.value],K=["commit","-m",p.value,...T],S=await Ne(K);S&&S.code===0&&(p.value="",d.value=new Set,await J())}async function ce(){I.value=!0;try{const T=await Jt(e.dir,["log","--xml","-v","-l","50"]);A.value=Ie(T.stdout),ut.value=new Set}catch(T){X("error",T.message)}finally{I.value=!1}}function Ie(T){const K=[];try{new DOMParser().parseFromString(T,"application/xml").querySelectorAll("logentry").forEach(q=>{const De=[];q.querySelectorAll("paths > path").forEach(ie=>De.push({action:ie.getAttribute("action"),text:ie.textContent})),K.push({revision:q.getAttribute("revision")??"",author:q.querySelector("author")?.textContent??"",date:q.querySelector("date")?.textContent??"",msg:q.querySelector("msg")?.textContent??"",paths:De})})}catch{}return K}function rt(T){if(!T)return"";const K=new Date(T);return isNaN(K.getTime())?T:K.toLocaleString()}async function yt(T){M.value=!0,V.value=" · "+T;try{const K=await Jt(e.dir,["diff",T]);H.value=(K.stdout||"").split(`
`)}catch(K){H.value=[K.message]}}const ut=m(new Set);function it(T){const K=new Set(ut.value);K.has(T)?K.delete(T):K.add(T),ut.value=K}function Le(T){if(!T)return"";const K=T.replace(/^\//,""),S=K.lastIndexOf("/");return S<0?"":K.slice(0,S+1)}function U(T){if(!T)return"";const K=T.replace(/^\//,"");return K.slice(K.lastIndexOf("/")+1)||K}async function N(T,K){if(K.text){M.value=!0,V.value=` · r${T} ${K.text}`,H.value=[];try{const S=await Jt(e.dir,["diff","-c",T,"--","^"+K.text]);H.value=(S.stdout||"").split(`
`)}catch(S){H.value=[S.message]}}}async function Q(T){C.value=!0,Z.value=" · "+T;try{const K=await Jt(e.dir,["blame","-v",T]);G.value=(K.stdout||"").split(`
`)}catch(K){G.value=[K.message]}}function Te(){de.value||(de.value=u.value?.url??""),B.value||(B.value=u.value?.root??e.dir)}async function O(){const T=de.value.trim(),K=B.value.trim();if(!T||!K)return;const S=K.replace(/[\\/][^\\/]*$/,"")||K;w.value=!0;try{const q=await Jt(S,["checkout",T,K]),De=[q.stdout,q.stderr].filter(Boolean).join(`
`).trim();x.value=`$ svn checkout ${T} ${K}

${De||n("svnNoOutput")}`,q.code===0?(X("ok",n("svnCheckedOut")),F.value=!1,u.value=await ps(K),u.value.inRepo&&await J()):X("error",(q.stderr||n("svnFailed")).split(`
`)[0].slice(0,200))}catch(q){X("error",q.message)}finally{w.value=!1}}return(T,K)=>{const S=Mn,q=Ss,De=rn;return l(),Xe(De,{"model-value":t.modelValue,title:s(n)("svnPanelTitle"),width:"800px","align-center":"","modal-class":"fw-blur-overlay",class:"fw-svn-dialog","close-on-click-modal":!1,"onUpdate:modelValue":K[10]||(K[10]=ie=>T.$emit("update:modelValue",ie)),onOpen:ye},{default:ne(()=>[u.value&&u.value.inRepo&&u.value.svnAvailable?(l(),r("div",y_,[o("div",w_,[o("span",{class:"fw-svn-revpill",title:u.value.revision?"r"+u.value.revision:""},[h(se,{name:"svn",size:13}),o("b",null,a(u.value.revision?"r"+u.value.revision:"—"),1)],8,b_),o("span",{class:"fw-svn-url",title:u.value.url??""},a(u.value.url||s(n)("svnNoUrl")),9,__),o("span",{class:"fw-svn-repo",title:u.value.root??""},a(s(n)("svnRepo"))+a(ve.value),9,k_),o("span",x_,[h(S,{size:"small",loading:w.value,onClick:Ze},{default:ne(()=>[ue(a(s(n)("svnUpdate")),1)]),_:1},8,["loading"]),h(S,{size:"small",disabled:w.value,onClick:ge},{default:ne(()=>[ue(a(s(n)("svnCleanup")),1)]),_:1},8,["disabled"]),h(S,{size:"small",onClick:K[0]||(K[0]=ie=>F.value=!0)},{default:ne(()=>[ue(a(s(n)("svnCheckout")),1)]),_:1}),h(S,{size:"small",loading:b.value,onClick:Ke,title:s(n)("svnRefresh")},{default:ne(()=>[h(se,{name:"refresh",size:13})]),_:1},8,["loading","title"]),h(S,{size:"small",title:s(n)("accTitle"),onClick:je},{default:ne(()=>[h(se,{name:"shield",size:13})]),_:1},8,["title"])])]),o("div",C_,[o("nav",$_,[(l(),r(oe,null,Ae(i,ie=>o("button",{key:ie.key,class:te(["fw-svn-rail-btn",{active:c.value===ie.key}]),onClick:ct=>le(ie.key)},[h(se,{name:ie.icon,size:14},null,8,["name"]),o("span",E_,a(s(n)(ie.label)),1),ke(ie.key)?(l(),r("span",T_,a(ke(ie.key)),1)):P("",!0)],10,S_)),64)),K[12]||(K[12]=o("span",{class:"fw-svn-rail-fill"},null,-1)),w.value?(l(),r("div",D_,[K[11]||(K[11]=o("span",{class:"fw-svn-spin"},null,-1)),ue(a(s(n)("svnRunning")),1)])):P("",!0)]),o("section",F_,[c.value==="changes"?(l(),r("div",R_,[o("div",N_,[o("div",P_,[o("span",A_,a(s(n)("svnModifiedCount",{n:v.value.length})),1),o("label",M_,[o("input",{type:"checkbox",checked:_e.value,onChange:me},null,40,O_),ue(a(s(n)("svnSelectAll")),1)])]),v.value.length?P("",!0):(l(),r("div",L_,a(s(n)("svnNoChanges")),1)),(l(!0),r(oe,null,Ae(v.value,ie=>(l(),r("div",{key:ie.path,class:"fw-svn-row",title:ie.path},[o("input",{type:"checkbox",checked:d.value.has(ie.path),onChange:ct=>ee(ie.path)},null,40,I_),o("span",{class:"fw-svn-badge","data-code":ie.code.trim()||"·"},a(ie.code.trim()||"·"),9,j_),o("span",V_,[re(ie.path)?(l(),r("span",z_,a(re(ie.path)),1)):P("",!0),ue(a(Ee(ie.path)),1)]),o("span",U_,a(ie.statusText),1),o("span",H_,[o("button",{class:"fw-svn-mini",disabled:w.value,title:s(n)("svnDiff"),onClick:be(ct=>yt(ie.path),["stop"])},[h(se,{name:"code",size:12})],8,W_),o("button",{class:"fw-svn-mini",disabled:w.value,title:s(n)("svnBlame"),onClick:be(ct=>Q(ie.path),["stop"])},[h(se,{name:"activity",size:12})],8,G_),ie.code.trim()==="?"?(l(),r(oe,{key:0},[o("button",{class:"fw-svn-mini",disabled:w.value,title:s(n)("svnAdd"),onClick:be(ct=>Ye(ie.path),["stop"])},[h(se,{name:"plus",size:12})],8,q_),o("button",{class:"fw-svn-mini",disabled:w.value,title:s(n)("svnIgnore"),onClick:be(ct=>st(ie.path),["stop"])},[h(se,{name:"eyeOff",size:12})],8,K_)],64)):P("",!0)])],8,B_))),128))]),o("div",X_,[o("div",Y_,[o("span",J_,a(s(n)("svnCommitBtn")),1)]),kt(o("textarea",{"onUpdate:modelValue":K[1]||(K[1]=ie=>p.value=ie),class:"fw-svn-msg",rows:"6",placeholder:s(n)("svnCommitPlaceholder")},null,8,Q_),[[Lt,p.value]]),o("div",Z_,[o("button",{class:"fw-svn-btn",disabled:w.value||!d.value.size,onClick:we},a(s(n)("svnAdd")),9,e0),o("button",{class:"fw-svn-btn",disabled:w.value||!d.value.size,onClick:pe},a(s(n)("svnRevert")),9,t0),o("button",{class:"fw-svn-btn",disabled:w.value||!d.value.size,onClick:Ce},a(s(n)("svnResolve")),9,n0)]),o("div",s0,[o("span",o0,a(d.value.size?s(n)("svnCommitSelected",{n:d.value.size}):s(n)("svnCommitAll")),1),o("button",{class:"fw-svn-btn primary",disabled:w.value||!p.value.trim(),onClick:qe},a(s(n)("svnCommitBtn")),9,a0)])])])):c.value==="log"?(l(),r("div",i0,[A.value.length?P("",!0):(l(),r("div",l0,a(I.value?s(n)("svnLoading"):s(n)("svnLogEmpty")),1)),(l(!0),r(oe,null,Ae(A.value,ie=>(l(),r("div",{key:ie.revision,class:te(["fw-svn-logitem",{open:ut.value.has(ie.revision)}])},[o("div",{class:"fw-svn-log-h",title:s(n)("svnLogToggle"),onClick:ct=>it(ie.revision)},[o("span",c0,a(ut.value.has(ie.revision)?"▾":"▸"),1),o("span",u0,"r"+a(ie.revision),1),o("span",{class:"fw-svn-log-msg1",title:ie.msg},a(Ve(ie.msg)),9,d0),o("span",f0,[o("span",null,a(ie.author),1),o("span",null,a(rt(ie.date)),1)])],8,r0),ut.value.has(ie.revision)?(l(),r(oe,{key:0},[ie.msg?(l(),r("pre",p0,a(ie.msg),1)):P("",!0),o("div",v0,[ie.paths.length?P("",!0):(l(),r("span",h0,a(s(n)("svnLogNoPaths")),1)),(l(!0),r(oe,null,Ae(ie.paths,(ct,wt)=>(l(),r("div",{key:wt,class:"fw-svn-cfile",title:s(n)("svnLogOpenDiff"),onClick:Ot=>N(ie.revision,ct)},[o("span",{class:te(["fw-svn-cfile-act","pa-"+(ct.action??"")])},a(ct.action),3),o("span",g0,[Le(ct.text)?(l(),r("span",y0,a(Le(ct.text)),1)):P("",!0),ue(a(U(ct.text)),1)])],8,m0))),128))])],64)):P("",!0)],2))),128))])):(l(),r("div",w0,[o("pre",b0,a(x.value||s(n)("svnNoOutput")),1)]))])])])):u.value&&u.value.inRepo&&!u.value.svnAvailable?(l(),r("div",_0,[h(se,{name:"warning",size:13}),ue(a(s(n)("svnNoCli")),1)])):u.value&&!u.value.inRepo?(l(),r("div",k0,[o("p",x0,a(s(n)("svnNotRepoTip")),1),o("div",C0,[h(q,{modelValue:de.value,"onUpdate:modelValue":K[2]||(K[2]=ie=>de.value=ie),size:"small",class:"fw-svn-co-url",placeholder:s(n)("svnCheckoutUrlPlaceholder")},null,8,["modelValue","placeholder"])]),o("div",$0,[h(q,{modelValue:B.value,"onUpdate:modelValue":K[3]||(K[3]=ie=>B.value=ie),size:"small",class:"fw-svn-co-target",placeholder:s(n)("svnCheckoutTargetPlaceholder")},null,8,["modelValue","placeholder"]),h(S,{size:"small",type:"primary",disabled:w.value||!de.value.trim()||!B.value.trim(),onClick:O},{default:ne(()=>[ue(a(s(n)("svnCheckout")),1)]),_:1},8,["disabled"])])])):(l(),r("div",S0,a(s(n)("svnLoading")),1)),h(De,{modelValue:M.value,"onUpdate:modelValue":K[4]||(K[4]=ie=>M.value=ie),title:s(n)("svnDiffTitle")+V.value,width:"800px","align-center":"","modal-class":"fw-blur-overlay","append-to-body":""},{default:ne(()=>[o("div",E0,[h(Uo,{lines:H.value,empty:s(n)("gitDiffEmpty")},null,8,["lines","empty"])])]),_:1},8,["modelValue","title"]),h(De,{modelValue:C.value,"onUpdate:modelValue":K[5]||(K[5]=ie=>C.value=ie),title:s(n)("svnBlameTitle")+Z.value,width:"800px","align-center":"","modal-class":"fw-blur-overlay","append-to-body":""},{default:ne(()=>[o("pre",T0,a(G.value.join(`
`)||s(n)("gitDiffEmpty")),1)]),_:1},8,["modelValue","title"]),h(De,{modelValue:F.value,"onUpdate:modelValue":K[9]||(K[9]=ie=>F.value=ie),title:s(n)("svnCheckout"),width:"560px","align-center":"","modal-class":"fw-blur-overlay","append-to-body":"",onOpen:Te},{footer:ne(()=>[h(S,{onClick:K[8]||(K[8]=ie=>F.value=!1)},{default:ne(()=>[ue(a(s(n)("cancel")),1)]),_:1}),h(S,{type:"primary",disabled:w.value||!de.value.trim()||!B.value.trim(),onClick:O},{default:ne(()=>[ue(a(s(n)("svnCheckout")),1)]),_:1},8,["disabled"])]),default:ne(()=>[o("div",D0,[o("label",F0,a(s(n)("svnCheckoutUrlPlaceholder")),1),h(q,{modelValue:de.value,"onUpdate:modelValue":K[6]||(K[6]=ie=>de.value=ie),size:"small"},null,8,["modelValue"]),o("label",R0,a(s(n)("svnCheckoutTargetPlaceholder")),1),h(q,{modelValue:B.value,"onUpdate:modelValue":K[7]||(K[7]=ie=>B.value=ie),size:"small"},null,8,["modelValue"])])]),_:1},8,["modelValue","title"])]),_:1},8,["model-value","title"])}}}),_d=xt(N0,[["__scopeId","data-v-8297810b"]]),P0={class:"fw-dlg-head"},A0={class:"fw-dlg-badge"},M0={class:"fw-dlg-headtext"},O0={class:"fw-dlg-headtitle"},L0={class:"fw-dlg-headsub"},B0=["onKeydown"],I0={class:"fw-np-menubar"},j0=["onClick","onMouseenter"],V0={key:0,class:"fw-np-dropdown"},z0={key:0,class:"fw-np-sep"},U0=["onClick"],H0={key:0,class:"fw-np-state"},W0={key:1,class:"fw-np-state fw-np-err"},G0=["readonly","wrap"],q0={key:3,class:"fw-np-status"},K0={key:0,class:"fw-np-seg fw-np-ro"},X0={class:"fw-np-seg"},Y0={class:"fw-np-seg fw-np-eol"},J0={class:"fw-np-seg"},Q0=ht({__name:"TxtEditor",props:{modelValue:{type:Boolean},path:{}},emits:["update:modelValue","saved"],setup(t,{emit:e}){const n=t,i=e,{t:c}=Bt(),u=L({get:()=>n.modelValue,set:N=>i("update:modelValue",N)}),v=L(()=>n.path.slice(Math.max(n.path.lastIndexOf("/"),n.path.lastIndexOf("\\"))+1)),d=m(""),p=m(""),w=m(!1),b=m(!1),x=m(""),A=m(!1),I=m(!1),M=m(null),V=m("utf8"),H=m(!1),C=m("lf"),Z=m(0),G={lf:"Unix (LF)",crlf:"Windows (CRLF)",cr:"Macintosh (CR)"},F=L(()=>G[C.value]),de=L(()=>{const N=V.value==="utf8"?"UTF-8":V.value.toUpperCase();return H.value?`${N} BOM`:N}),B=L({get:()=>Ue.txtWordWrap,set:N=>{Ue.txtWordWrap=N,Hn()}}),ve=L({get:()=>Ue.txtShowStatus,set:N=>{Ue.txtShowStatus=N,Hn()}}),_e=m(""),ke=m(1),le=m(1);function re(N){return/\.txt$/i.test(N)}Qe(()=>n.modelValue,async N=>{if(N&&n.path){if(!re(n.path)){u.value=!1;return}Ie(),await Ve(),await Dt(),Ne(),M.value?.focus()}else Ee()});function Ee(){d.value="",p.value="",A.value=!1,x.value="",_e.value="",ke.value=1,le.value=1}async function Ve(){w.value=!0,x.value="",I.value=!bs(n.path);try{const N=await sl(n.path);if(N.binary){x.value=c("vsBinaryHint");return}d.value=N.content,p.value=N.content,V.value=N.encoding,H.value=N.hasBom,C.value=N.eol,Z.value=N.mtime,A.value=!1}catch(N){x.value=c("txtReadError",{msg:N.message})}finally{w.value=!1}}function ye(){A.value=d.value!==p.value,Ne()}function Ne(){const N=M.value;if(!N)return;const Q=N.selectionStart,Te=d.value.slice(0,Q);ke.value=Te.split(`
`).length;const O=Te.lastIndexOf(`
`);le.value=Q-O}async function W(N){const Q=await Qi(n.path,d.value,{key:Fe.key,encoding:V.value,hasBom:H.value,eol:C.value,expectedMtime:Z.value,force:N});Z.value=Q.mtime,p.value=d.value,A.value=!1,X("ok",c("txtSaved")),i("saved"),u.value=!1}async function J(){if(!(I.value||!A.value||b.value)&&re(n.path)){b.value=!0;try{await W(!1)}catch(N){if(N instanceof Ws&&N.code==="mtime-conflict"){if(b.value=!1,!await Mt({title:c("vsConflictTitle"),message:c("vsConflictMsg",{name:v.value})}))return;try{await W(!0)}catch(Te){X("error",Te.message)}return}X("error",N.message)}finally{b.value=!1}}}function z(){J()}const ee=()=>{const N=M.value;return!N||N.selectionStart===N.selectionEnd};function me(){const N=M.value;return!N||N.selectionStart===N.selectionEnd?null:{s:N.selectionStart,e:N.selectionEnd}}function je(N,Q,Te){const O=M.value,T=d.value.slice(0,N)+Te+d.value.slice(Q);d.value=T,A.value=T!==p.value,Dt(()=>{O&&(O.focus(),O.selectionStart=O.selectionEnd=N+Te.length,Ne())})}function Ke(){M.value?.focus(),M.value?.select()}async function Ze(){const N=me();if(!N)return;const Q=d.value.slice(N.s,N.e);try{await navigator.clipboard.writeText(Q)}catch{M.value?.focus(),document.execCommand("copy")}}async function ge(){if(I.value)return;const N=me();if(!N)return;const Q=d.value.slice(N.s,N.e);try{await navigator.clipboard.writeText(Q)}catch{M.value?.focus(),document.execCommand("cut");return}je(N.s,N.e,"")}function we(){if(I.value)return;const N=me();N&&je(N.s,N.e,"")}async function Ye(){if(I.value)return;const N=M.value;if(!N)return;const Q=N.selectionStart,Te=N.selectionEnd;try{const O=await navigator.clipboard.readText();je(Q,Te,O)}catch{N.focus(),X("error","当前环境不允许读取剪贴板，请按 Ctrl+V 粘贴")}}function st(){I.value||(M.value?.focus(),document.execCommand("undo"),ye())}function pe(){if(I.value)return;const N=M.value;if(!N)return;const Q=new Date().toLocaleString("zh-CN",{hour12:!1});je(N.selectionStart,N.selectionEnd,Q)}const Ce=L(()=>[{name:"file",label:"文件",items:[{label:"保存",disabled:()=>I.value||!A.value,action:()=>void J()},{label:"退出",action:()=>void Le()}]},{name:"edit",label:"编辑",items:[{label:"撤销",disabled:()=>I.value,action:()=>st()},{label:"剪切",disabled:()=>I.value||ee(),action:()=>void ge()},{label:"复制",disabled:()=>ee(),action:()=>void Ze()},{label:"粘贴",disabled:()=>I.value,action:()=>void Ye()},{label:"删除",disabled:()=>I.value||ee(),action:()=>we()},{label:"-",sep:!0},{label:"全选",action:()=>Ke()},{label:"时间/日期",disabled:()=>I.value,action:()=>pe()}]},{name:"format",label:"格式",items:[{label:B.value?"☑ 自动换行":"☐ 自动换行",action:()=>{B.value=!B.value}}]},{name:"view",label:"查看",items:[{label:ve.value?"☑ 状态栏":"☐ 状态栏",action:()=>{ve.value=!ve.value}}]},{name:"help",label:"帮助",items:[{label:"关于记事本",action:()=>X("ok","记事本 — DSH 文件工作台文本编辑器")}]}]);function qe(N){_e.value=_e.value===N?"":N}function ce(N){_e.value&&(_e.value=N)}function Ie(){_e.value=""}function rt(N,Q){Q.sep||Q.disabled&&Q.disabled()||(Ie(),Q.action?.())}function yt(){Ie()}function ut(){return A.value&&!I.value?Mt({title:c("txtUnsavedTitle"),message:c("txtUnsavedMsg")}).then(N=>N):Promise.resolve(!0)}function it(N){ut().then(Q=>{Q&&N()})}async function Le(){await ut()&&(u.value=!1)}function U(){Ee()}return(N,Q)=>{const Te=gf("icon"),O=rn;return l(),Xe(O,{modelValue:u.value,"onUpdate:modelValue":Q[1]||(Q[1]=T=>u.value=T),class:"fw-clone-dialog fw-np-dialog",width:"800px","align-center":"","modal-class":"fw-blur-overlay","close-on-click-modal":!1,"before-close":it,"append-to-body":"",onClose:U},{header:ne(()=>[o("div",P0,[o("span",A0,[h(Te,{name:"fileText",size:20})]),o("span",M0,[o("span",O0,a(A.value?"* ":"")+a(v.value),1),o("span",L0,[ue(a(s(c)("txtEditorSub")),1),A.value?(l(),r(oe,{key:0},[ue(" · "+a(s(c)("txtUnsaved")),1)],64)):P("",!0)])])])]),default:ne(()=>[o("div",{class:"fw-np",tabindex:"-1",onKeydown:[bt(be(z,["ctrl","prevent"]),["s"]),bt(be(pe,["prevent"]),["f5"])]},[o("div",I0,[(l(!0),r(oe,null,Ae(Ce.value,T=>(l(),r("div",{key:T.name,class:te(["fw-np-menu",{open:_e.value===T.name}]),onClick:K=>qe(T.name),onMouseenter:K=>ce(T.name)},[ue(a(T.label)+" ",1),_e.value===T.name?(l(),r("div",V0,[(l(!0),r(oe,null,Ae(T.items,(K,S)=>(l(),r(oe,{key:S},[K.sep?(l(),r("div",z0)):(l(),r("div",{key:1,class:te(["fw-np-item",{disabled:K.disabled?K.disabled():!1}]),onClick:q=>rt(T.name,K)},a(K.label),11,U0))],64))),128))])):P("",!0)],42,j0))),128))]),w.value?(l(),r("div",H0,[Q[2]||(Q[2]=o("span",{class:"fw-np-spin"},null,-1)),ue(a(s(c)("txtLoading")),1)])):x.value?(l(),r("div",W0,a(x.value),1)):kt((l(),r("textarea",{key:2,ref_key:"taRef",ref:M,"onUpdate:modelValue":Q[0]||(Q[0]=T=>d.value=T),class:te(["fw-np-area",{wrap:B.value}]),readonly:I.value,wrap:B.value?"soft":"off",spellcheck:"false",onInput:ye,onKeyup:Ne,onClick:Ne,onContextmenu:be(yt,["prevent"])},null,42,G0)),[[Lt,d.value]]),ve.value&&!w.value&&!x.value?(l(),r("div",q0,[I.value?(l(),r("span",K0,a(s(c)("txtReadonly")),1)):P("",!0),Q[3]||(Q[3]=o("span",{class:"fw-np-spacer"},null,-1)),o("span",X0,"Ln "+a(ke.value)+", Col "+a(le.value),1),Q[4]||(Q[4]=o("span",{class:"fw-np-seg"},"100%",-1)),o("span",Y0,a(F.value),1),o("span",J0,a(de.value),1)])):P("",!0)],40,B0),_e.value?(l(),r("div",{key:0,class:"fw-np-backdrop",onClick:Ie,onContextmenu:be(Ie,["prevent"])},null,32)):P("",!0)]),_:1},8,["modelValue"])}}}),on=gt({sessionId:null,connected:!1,files:[],running:!1});let pc=!1,Ho=null;const vc="__DSH_FW_SESSION_SSE__",hc={dispose:()=>El()};function Z0(){const t=globalThis,e=t[vc];if(e&&e!==hc)try{e.dispose()}catch{}t[vc]=hc}function e2(t){const e=t;if(!(!e||typeof e!="object")&&on.sessionId&&!(e.sessionId&&e.sessionId!==on.sessionId))switch(e.type){case"snapshot":case"files":on.files=Array.isArray(e.files)?e.files:[],on.running=e.running===!0,on.connected=!0;break;case"status":on.running=e.running===!0,on.connected=!0;break}}function t2(t){on.sessionId!==t&&(on.sessionId=t,er(t))}function n2(){if(Z0(),Ho)return()=>El();pc||(pc=!0,hh(e2));const t=window.__DSH_FILE_WORKBENCH__;return!t||typeof t.subscribeCurrentSessionId!="function"?()=>{}:(Ho=t.subscribeCurrentSessionId(e=>{e?t2(e):(er(null),on.sessionId=null)}),()=>El())}function El(){try{Ho&&(Ho(),Ho=null)}catch{}er(null),on.sessionId=null,on.files=[],on.running=!1,on.connected=!1}function ji(t){const e=t.lastIndexOf(".");return e>0&&e<t.length-1?t.slice(e):""}function mc(t){if(t==null||t<0)return"—";const e=["B","KB","MB","GB","TB"];let n=t,i=0;for(;n>=1024&&i<e.length-1;)n/=1024,i+=1;return`${i===0?n:n>=10?Math.round(n):n.toFixed(1)} ${e[i]}`}const vn=gt({selectionCount:0,canOperate:!0,hasClipboard:!1,isRecycle:!1});let kd=null;function Za(t){kd=t}function s2(t,e){kd?.(t,e)}const o2={key:0,class:"fw-fl-tool"},a2={key:1,class:"fw-error"},i2={class:"fw-error-ico"},l2={key:1,class:"fw-table"},r2={key:0,class:"fw-sort"},c2={key:0,class:"fw-sort"},u2={key:0,class:"fw-sort"},d2={key:0,class:"fw-sort"},f2={key:0,class:"fw-vspacer"},p2=["data-path","title","draggable","onMouseenter","onMouseleave","onDragstart","onDragover","onDrop","onClick","onDblclick","onContextmenu"],v2={class:"col-name"},h2={class:"fw-n"},m2={class:"fw-ico"},g2={class:"fw-label"},y2=["title"],w2=["title"],b2={key:2,class:"fw-weak"},_2=["title"],k2={class:"col-size"},x2={class:"col-type"},C2={class:"col-mtime"},$2={key:1,class:"fw-vspacer"},S2={key:2},E2={colspan:4,class:"fw-empty-cell fw-inaccessible"},T2={key:3},D2={colspan:4,class:"fw-empty-cell"},F2=["data-path","title","draggable","onMouseenter","onMouseleave","onDragstart","onDragover","onDrop","onClick","onDblclick","onContextmenu"],R2={class:"fw-ico"},N2={class:"fw-list-name"},P2=["title"],A2=["title"],M2=["title"],O2=["data-path","title","draggable","onMouseenter","onMouseleave","onDragstart","onDragover","onDrop","onClick","onDblclick","onContextmenu"],L2={key:0,class:"fw-tile-thumb"},B2=["src","alt"],I2={key:1,class:"fw-tile-ico"},j2={class:"fw-tile-name"},V2=["title"],z2=["title"],U2={key:4,class:"fw-mode fw-content"},H2=["data-path","title","draggable","onMouseenter","onMouseleave","onDragstart","onDragover","onDrop","onClick","onDblclick","onContextmenu"],W2={class:"fw-ico"},G2={class:"fw-c-main"},q2={class:"fw-c-name"},K2={key:0,class:"fw-broken-tag"},X2={class:"fw-c-type"},Y2={class:"fw-c-meta"},J2={key:5,class:"fw-mode fw-tiles"},Q2=["data-path","title","draggable","onMouseenter","onMouseleave","onDragstart","onDragover","onDrop","onClick","onDblclick","onContextmenu"],Z2={key:0,class:"fw-tile-thumb"},ek=["src","alt"],tk={key:1,class:"fw-tile-ico"},nk={class:"fw-t2-body"},sk={class:"fw-t2-name"},ok={class:"fw-t2-type"},ak={class:"fw-t2-size"},ik={key:6,class:"fw-empty-small"},lk={key:3,class:"fw-refreshing"},rk={class:"fw-dlg-head"},ck={class:"fw-dlg-badge"},uk={class:"fw-dlg-headtext"},dk={class:"fw-dlg-headtitle"},fk={class:"fw-dlg-headsub"},pk={key:0,class:"fw-prop-body"},vk={class:"fw-prop-row"},hk={class:"k"},mk={class:"v"},gk={class:"fw-prop-row"},yk={class:"k"},wk={class:"v"},bk={class:"fw-prop-row"},_k={class:"k"},kk={class:"v"},xk={class:"fw-prop-row fw-prop-row-wide"},Ck={class:"k"},$k=["title"],Sk={class:"fw-gitdiff-body"},Ek=40,Tk=28,Dk=ht({__name:"FileListPane",setup(t){const{t:e}=Bt(),n=L(()=>ae.view==="recycle"),i=m(Ue.sortKey),c=m(Ue.asc),u=m(null);let v=0,d=0;function p(g){return{width:`${Ue.colWidths[g]}px`}}function w(g,k){u.value=k,v=g.clientX,d=Ue.colWidths[k],document.addEventListener("mousemove",b),document.addEventListener("mouseup",x)}function b(g){const k=u.value;k&&(Ue.colWidths[k]=Math.max(Ek,d+(g.clientX-v)))}function x(){u.value&&Hn(),u.value=null,document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",x)}Pt(()=>{document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",x)});const A=L(()=>n.value?"recycle":ae.listing?.path??""),I=m(ll(A.value)),M=L(()=>{const g=I.value;return g==="huge"||g==="large"||g==="medium"||g==="small"?"grid":g}),V=L(()=>{const g=I.value;return g==="small"?20:g==="medium"?32:g==="large"?48:72});Qe(()=>Ue.view,g=>{I.value!==g&&(I.value=g)}),Qe(A,g=>{const k=ll(g);I.value!==k&&(I.value=k)}),Qe(I,g=>za.value=g,{immediate:!0}),Qe(()=>Ue.sortKey,g=>{i.value!==g&&(i.value=g)}),Qe(()=>Ue.asc,g=>{c.value!==g&&(c.value=g)});const{cmOpen:H,cmX:C,cmY:Z,cmItems:G,openMenu:F}=pn(),de=m(!1),B=m(null),ve=m(!1),_e=m(""),ke=m(!1),le=m(!1),re=m(!1),Ee=m(!1),Ve=m("");function ye(g){Ve.value=g,Ee.value=!0}function Ne(){Ft()}function W(g){i.value===g?c.value=!c.value:(i.value=g,c.value=g!=="mtime"),Ue.sortKey=i.value,Ue.asc=c.value,Hn()}function J(g){if(g.isDir)return e("typeFolder");const k=g.name.lastIndexOf("."),$e=k>0?g.name.slice(k+1).toUpperCase():"";return $e?`${$e} ${e("typeFile")}`:e("typeFile")}const z=/\.(png|jpe?g|gif|svg|webp|bmp|ico|avif)$/i;function ee(g){return!g.isDir&&z.test(g.name)}function me(g){if(Ue.showExtensions||g.isDir)return g.name;const k=g.name.lastIndexOf(".");return k>0?g.name.slice(0,k):g.name}function je(g){if(g.isDir)return"";const k=g.size;if(k===void 0)return"—";const $e=["B","KB","MB","GB","TB"];let fe=k,Me=0;for(;fe>=1024&&Me<$e.length-1;)fe/=1024,Me+=1;return`${Me===0?fe:fe>=10?Math.round(fe):fe.toFixed(1)} ${$e[Me]}`}function Ke(g){if(g.mtime===void 0)return"";try{return new Date(g.mtime).toLocaleString(void 0,{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})}catch{return new Date(g.mtime).toLocaleString()}}function Ze(g){return g.path}const ge={"":"",untracked:"?",added:"A",modified:"M",deleted:"D"};function we(g){return hd(ae.listing?.path??"",g.name)}function Ye(g){return ge[we(g)]}function st(g){const k=we(g);return k==="untracked"?e("gitBadgeUntracked"):k==="added"?e("gitBadgeAdded"):k==="deleted"?e("gitBadgeDeleted"):k==="modified"?e("gitBadgeModified"):""}function pe(g){return md(ae.listing?.path??"",g.name)}function Ce(g){return ge[pe(g)]}function qe(g){const k=pe(g);return k==="untracked"?e("gitBadgeUntracked"):k==="added"?e("gitBadgeAdded"):k==="deleted"?e("gitBadgeDeleted"):k==="modified"?e("gitBadgeModified"):""}const ce=L(()=>{const g=[...ae.listing?.entries??[]],k={name:($e,fe)=>$e.name.localeCompare(fe.name,void 0,{sensitivity:"base"}),size:($e,fe)=>($e.size??-1)-(fe.size??-1),type:($e,fe)=>{const Me=R=>R.isDir?"0-folder":R.name.slice(R.name.lastIndexOf(".")).toLowerCase();return(J($e)+Me($e)).localeCompare(J(fe)+Me(fe))},mtime:($e,fe)=>($e.mtime??0)-(fe.mtime??0)};return g.sort(($e,fe)=>{if($e.isDir!==fe.isDir)return $e.isDir?-1:1;let Me=k[i.value]($e,fe);return Me===0&&(Me=$e.name.localeCompare(fe.name,void 0,{sensitivity:"base"})),c.value||(Me=-Me),Me}),g}),Ie=m(""),rt=L(()=>{const g=Ie.value.trim().toLowerCase();return ce.value.filter(k=>!Ue.showHidden&&k.hidden?!1:g?k.name.toLowerCase().includes(g):!0)}),yt=L(()=>ae.listing?.inaccessible?ae.listing.inaccessible:rt.value.length===0&&Ie.value?e("filterEmpty"):n.value?e("recycleEmptyList"):e("emptyDir")),ut=m(null),it=m(null);function Le(){it.value?.click()}async function U(g){const k=g.target,$e=k.files;$e?.length&&ae.listing&&await cn($e,ae.listing.path),k.value=""}const N=L(()=>rt.value.length),Q=Tg(ut,N,Tk),Te=L(()=>rt.value.slice(Q.range.value.start,Q.range.value.end));Qe(()=>ae.listing?.path,()=>{ut.value&&(ut.value.scrollTop=0)}),Qe(()=>ae.listing?.path,g=>{g&&!n.value&&(ks(g),so(g))},{immediate:!0});const O=m(new Set),T=m(""),K=m("");function S(g,k){if(g.shiftKey&&K.value){const $e=rt.value.map(R=>R.path),fe=$e.indexOf(K.value),Me=$e.indexOf(k.path);if(fe!==-1&&Me!==-1){const[R,Re]=fe<Me?[fe,Me]:[Me,fe],Xt=new Set;for(let Ht=R;Ht<=Re;Ht++)Xt.add($e[Ht]);O.value=Xt}T.value=k.path;return}if(g.ctrlKey||g.metaKey){const $e=new Set(O.value),fe=$e.has(k.path);fe?$e.delete(k.path):$e.add(k.path),O.value=$e,K.value=k.path,T.value=fe?"":k.path;return}O.value=new Set,T.value=k.path,K.value=k.path}function q(g,k){O.value=new Set,T.value=k.path,K.value=k.path,gn(k)}function De(){O.value=new Set,T.value="",K.value=""}function ie(g){ut.value?.focus({preventScroll:!0}),!(Ot||g.target.closest(".fw-row, .fw-list-row, .fw-tile, .fw-content-row, .fw-tile2, th"))&&De()}const ct=m(null);let wt=null,Ot=!1;function On(g){g.button!==0||!ae.listing||g.target.closest(".fw-row, .fw-list-row, .fw-tile, .fw-content-row, .fw-tile2, th, input, textarea")||(wt={x:g.clientX,y:g.clientY},window.addEventListener("mousemove",Gt),window.addEventListener("mouseup",ze,{once:!0}))}function Gt(g){if(!wt||!ut.value)return;const k=ut.value.getBoundingClientRect(),$e=Math.min(wt.x,g.clientX),fe=Math.min(wt.y,g.clientY),Me=Math.max(wt.x,g.clientX),R=Math.max(wt.y,g.clientY);ct.value={x:$e-k.left,y:fe-k.top,w:Me-$e,h:R-fe};const Re=new Set;ut.value.querySelectorAll("[data-path]").forEach(Xt=>{const Ht=Xt.getBoundingClientRect();Ht.left<Me&&Ht.right>$e&&Ht.top<R&&Ht.bottom>fe&&Re.add(Xt.dataset.path??"")}),Re.delete(""),O.value=Re,T.value=""}function ze(){wt&&(wt=null,ct.value=null,window.removeEventListener("mousemove",Gt),Ot=!0,setTimeout(()=>{Ot=!1},0))}function Je(g){if(g.target?.closest("input, textarea, select, [contenteditable='true'], .el-input, .el-textarea"))return;const $e=rt.value;if(!$e.length)return;const fe=$e.map(Re=>Re.path),Me=T.value?fe.indexOf(T.value):K.value?fe.indexOf(K.value):-1;if(g.ctrlKey&&g.shiftKey&&g.key.toLowerCase()==="n"){g.preventDefault(),dn("folder");return}if(g.ctrlKey||g.metaKey){switch(g.key.toLowerCase()){case"a":g.preventDefault(),O.value=new Set(fe);return;case"c":g.preventDefault(),O.value.size?Kt("copy"):T.value&&(ka([T.value]),X("ok",e("menuCopyDone")));return;case"x":g.preventDefault(),O.value.size?Kt("cut"):T.value&&(Ro([T.value]),X("ok",e("menuCutDone")));return;case"v":g.preventDefault(),ae.listing&&es(ae.listing.path);return;case"f":g.preventDefault(),lt();return}return}if(g.altKey){g.key==="ArrowUp"?(g.preventDefault(),gl()):g.key==="ArrowLeft"?(g.preventDefault(),Vu()):g.key==="ArrowRight"&&(g.preventDefault(),zu());return}switch(g.key){case"Backspace":g.preventDefault(),gl();return;case"Delete":g.preventDefault(),xn();return;case"F2":g.preventDefault(),Cn();return;case"F5":g.preventDefault(),n.value?_s():Ft();return;case"Enter":Me>=0&&gn($e[Me]);return}let R=Me;if(g.key==="ArrowDown")R=Me+1,g.preventDefault();else if(g.key==="ArrowUp")R=Me-1,g.preventDefault();else if(g.key==="Home")R=0,g.preventDefault();else if(g.key==="End")R=fe.length-1,g.preventDefault();else return;R<0||R>=fe.length||(O.value=new Set,T.value=fe[R],K.value=fe[R],ut.value?.querySelector(".fw-row.selected, .fw-list-row.selected, .fw-tile.selected, .fw-content-row.selected, .fw-tile2.selected")?.scrollIntoView({block:"nearest"}))}function et(g){return g?(ae.listing?.entries??[]).find(k=>k.path===g)??null:null}function lt(){ut.value?.parentElement?.querySelector(".fw-filter input")?.focus()}function xn(){if(O.value.size){if(n.value){qn([...O.value]);return}Kt("delete");return}const g=et(T.value);g&&Fs(g)}function Cn(){if(n.value||O.value.size)return;const g=et(T.value);g&&Ds(g)}function zt(g){return O.value.size?O.value.has(g.path):g.path===T.value}Qe(()=>ae.listing?.path,()=>{De()});const ot=m("");function ft(g){ot.value=g.path}function Ct(g){ot.value===g.path&&(ot.value="")}const Ln=L(()=>T.value),$n=L(()=>{const g=Ln.value;return g?(ae.listing?.entries??[]).find(k=>k.path===g)??null:null}),Jn=L(()=>{const g=$n.value;if(!g)return ae.listing?ae.listing.path:"";let $e=g.isDir?e("typeFolder"):(()=>{const fe=g.name.lastIndexOf(".");return fe>0&&fe<g.name.length-1?g.name.slice(fe):e("typeFile")})();return g.mtime!==void 0&&($e+=` · ${Ke(g)}`),!g.isDir&&g.size!==void 0&&($e+=` · ${je(g)}`),$e});let mn="";function Sn(g,k){g.dataTransfer&&(mn=k.path,Yg.value=k.path,g.dataTransfer.effectAllowed="move",g.dataTransfer.setData("text/plain",k.path))}function Xs(g){}function Ts(){}async function En(g,k){if(g.preventDefault(),n.value)return;const $e=g.dataTransfer?.files;if($e?.length){const R=k||ae.listing?.path||"";R&&await cn($e,R);return}const fe=mn;if(mn="",!fe||!k)return;const Me=fe.slice(0,Math.max(fe.lastIndexOf("/"),fe.lastIndexOf("\\")+1));Bn(Me)!==Bn(k)&&(Ro([fe]),await es(k))}async function cn(g,k){if(!un(k))return;const $e=sn(e("taskUploading"),k);let fe=0,Me=0;for(const R of Array.from(g)){$e.step(e("taskUploading"),R.name,void 0,ji(R.name)||e("typeFile"),R.size);try{await Pp(k,R,Fe.key),fe+=1}catch{Me+=1}}fe&&X("ok",e("uploaded",{count:fe})),Me&&X("error",e("uploadFailed",{count:Me})),Me?$e.fail(`${e("uploadFailed",{count:Me})}${fe?`，成功 ${fe}`:""}`):fe&&$e.done(e("uploaded",{count:fe})),await Ft()}function Bn(g){return g.replace(/[\\/]+/g,"/").replace(/\/+$/,"").toLowerCase()}function Gn(g){return g.isDir?{fileType:e("typeFolder")}:{fileType:ji(g.name)||e("typeFile"),fileSize:g.size}}async function Tn(g){try{const k=await Ba(g);return k.isDir?{fileType:e("typeFolder")}:{fileType:ji(k.name)||e("typeFile"),fileSize:k.size}}catch{return{}}}async function gn(g){if(n.value){await Rn([g.recycleFullPath??g.path]);return}if(g.isDir){await Vt(g.path);return}try{await sa(g.path)}catch(k){X("error",k.message)}}const yn={openGitPanel:()=>{le.value=!0},openSvnPanel:()=>{re.value=!0},openCommit:()=>{const g=ae.listing?.path??"";if(!vd(g)){X("error",e("gitNotRepo"));return}ke.value=!0},showGitDiff:g=>{_e.value=g,ve.value=!0},afterMutate:async g=>{await ks(g),await Ft()}};function Qn(g){return kl(ae.listing?.path??"",g,yn)}function Dn(g){return xl(ae.listing?.path??"",g,yn)}function D(g){const k=document.createElement("a");k.href=Cp(g),k.rel="noopener",document.body.appendChild(k),k.click(),k.remove()}function he(g){const k=g.isDir?g.path:g.path.slice(0,Math.max(g.path.lastIndexOf("/"),g.path.lastIndexOf("\\")));ko(k)}function Be(g,k=!0){ar(g,{isDir:k})}async function He(g,k,$e){const fe=await ds({title:g,message:e("subagentAsk"),placeholder:e("subagentAskPlaceholder"),initial:"",multiline:!0});if(fe!==null)try{const Me=await Rp(k,$e,fe,on.sessionId??void 0);if(Me.ok){const R=Me.mode==="oneshot"?Me.output??"":"";X("ok",R?R.slice(0,300)+(R.length>300?"…":""):e("subagentSpawned"))}else X("error",Me.error||e("subagentFailed"))}catch(Me){X("error",Me instanceof Error?Me.message:String(Me))}}function Pe(g){He(e("menuSubagent"),g.path,g.isDir)}function Ge(){He(e("menuNewSubagent"),"",!1)}function Et(g,k){if(O.value.has(k.path)||(O.value=new Set,T.value=k.path,K.value=k.path),n.value){F(g,Js(k));return}if(O.value.has(k.path)){const Re=[...O.value],Xt=!bs(k.path),Ht=ro(k.path);F(g,[{label:e("menuMultiCut"),icon:"cut",onClick:()=>Kt("cut"),disabled:Xt},{label:e("menuMultiCopy"),icon:"copy",onClick:()=>Kt("copy")},{label:e("menuMultiDelete"),icon:"trash",onClick:()=>Kt("delete"),disabled:Xt},{label:e("menuMultiCompress"),icon:"archive",onClick:()=>Kt("compress"),disabled:Xt},{separator:!0},{label:e(Ht?"favoriteRemove":"favoriteAdd"),icon:"star",onClick:()=>{const gs=[...O.value],Qs=gs.every(ss=>ro(ss));for(const ss of gs)ro(ss)===Qs&&Ua(ss);X("ok",e(Qs?"favoriteRemoved":"favoriteAdded"))}},{separator:!0},{label:e("cancel"),icon:"close",onClick:De},{label:`(${Re.length}) ✕ ${e("selectedCount",{count:Re.length})}`,icon:"",onClick:De}]);return}const $e=ro(k.path),fe=!bs(k.path),Me=/\.txt$/i.test(k.name),R=[{label:e("menuOpen"),icon:"arrowRight",onClick:()=>gn(k)},...Wt(k.path)?[]:[{label:e("menuOpenExternal"),icon:"monitor",onClick:()=>Ys(k.path)}]];Me&&R.push({label:e("menuEdit"),icon:"edit",disabled:fe,onClick:()=>ye(k.path)}),k.isDir&&R.push({label:e("menuOpenInEditor"),icon:"code",onClick:()=>Be(k.path)}),R.push({separator:!0}),R.push({label:e("menuCut"),icon:"cut",disabled:fe,onClick:()=>{Ro([k.path]),X("ok",e("menuCutDone"))}},{label:e("menuCopy"),icon:"copy",onClick:()=>{ka([k.path]),X("ok",e("menuCopyDone"))}},{label:e("menuCompress"),icon:"archive",disabled:fe,onClick:()=>Ns(k)},{label:e("menuExtract"),icon:"folderOpen",disabled:fe||k.isDir||!k.name.toLowerCase().endsWith(".zip"),onClick:()=>en(k)},{label:e("menuRename"),icon:"edit",disabled:fe,onClick:()=>Ds(k)},{label:e("menuDelete"),icon:"trash",disabled:fe,onClick:()=>Fs(k)},{separator:!0},{label:e($e?"favoriteRemove":"favoriteAdd"),icon:"star",onClick:()=>{const Re=Ua(k.path);X("ok",e(Re?"favoriteAdded":"favoriteRemoved"))}},{label:e("menuDownload"),icon:"download",disabled:k.isDir,onClick:()=>D(k.path)},{label:e("menuOpenTerminal"),icon:"terminal",onClick:()=>he(k)},{label:e("menuSubagent"),icon:"sparkle",onClick:()=>Pe(k)},...Qn(k.path),...Dn(k.path),{separator:!0},{label:e("menuCopyPath"),icon:"link",onClick:()=>$o(k.path)},{label:e("menuProperties"),icon:"info",onClick:()=>Zn(k.path)}),F(g,R)}function $t(g){if(!ae.listing)return;if(n.value){F(g,[{label:e("menuRefresh"),icon:"refresh",onClick:()=>_s()},{separator:!0},{label:e("recycleEmpty"),icon:"trash",disabled:(ae.recycleItems?.length??0)===0,onClick:()=>ts()}]);return}const k=ae.listing.path,$e=_l(),fe=!bs(k);F(g,[{label:e("menuRefresh"),icon:"refresh",onClick:Ft},{label:e("menuOpenInEditor"),icon:"code",onClick:()=>Be(k)},{separator:!0},{label:e("menuView"),icon:"eye",children:wn()},{label:e("menuSort"),icon:"sort",children:Fn()},{separator:!0},{label:e("menuPaste"),icon:"download",disabled:!$e||fe,onClick:()=>es(k)},{label:e("menuUpload"),icon:"upload",disabled:fe,onClick:()=>Le()},{label:e("menuNew"),icon:"sparkle",disabled:fe,children:[{label:e("menuNewFolder"),icon:"folder",onClick:()=>dn("folder")},{label:e("menuNewFile"),icon:"file",onClick:()=>dn("file")}]},...Qn(k),...Dn(k),{separator:!0},{label:e("menuOpenTerminal"),icon:"terminal",onClick:()=>ko(k)},{label:e("menuNewSubagent"),icon:"sparkle",onClick:()=>Ge()},{label:e("menuProperties"),icon:"info",onClick:()=>Zn(k)}])}function wn(){const g=I.value,k=($e,fe)=>({label:$e,checked:g===fe,onClick:()=>{I.value=fe,rl(A.value,fe)}});return[k(e("viewHuge"),"huge"),k(e("viewLarge"),"large"),k(e("viewMedium"),"medium"),k(e("viewSmall"),"small"),{separator:!0},k(e("viewList"),"list"),{separator:!0},k(e("viewDetails"),"details"),k(e("viewContent"),"content"),k(e("viewTiles"),"tiles")]}function In(g){I.value=g,rl(A.value,g)}Qa(In),Rt.canSwitchView=!0,$s(()=>{Rt.visible=!!ae.listing&&!ae.loadErr,Rt.total=rt.value.length,Rt.selected=O.value.size,Rt.text=Jn.value,Rt.view=I.value}),Za((g,k)=>{const $e=ae.listing?.path??"";if(n.value){const fe=O.value.size?[...O.value]:T.value?[T.value]:[];switch(g){case"restore":Rn(fe);break;case"delete":qn(fe);break;case"emptyRecycle":ts();break;case"refresh":_s();break;case"properties":T.value&&Zn(T.value);break}return}switch(g){case"newFolder":dn("folder");break;case"newFile":dn("file");break;case"upload":Le();break;case"cut":case"copy":{O.value.size?Kt(g):T.value&&((g==="cut"?Ro:ka)([T.value]),X("ok",e(g==="cut"?"menuCutDone":"menuCopyDone")));break}case"paste":$e&&es($e);break;case"rename":Cn();break;case"delete":xn();break;case"sort":k&&W(k);break;case"view":k&&In(k);break;case"toggleExt":Ue.showExtensions=!Ue.showExtensions,Hn();break;case"preview":{const fe=T.value?et(T.value):null;fe&&gn(fe);break}case"refresh":Ft();break;case"properties":T.value&&Zn(T.value);break}}),$s(()=>{vn.selectionCount=O.value.size||(T.value?1:0),vn.canOperate=ae.listing?bs(ae.listing.path):!1,vn.hasClipboard=_l(),vn.isRecycle=ae.view==="recycle"}),Pt(()=>Za(null)),Pt(()=>{Qa(null),pd()});function Fn(){return[["name",e("sortName")],["mtime",e("sortModified")],["type",e("sortType")],["size",e("sortSize")]].map(([k,$e])=>({label:$e,checked:i.value===k,onClick:()=>W(k)}))}async function Ys(g){if(Wt(g)){X("error",e("remoteNoExternal"));return}try{await nu(g),X("ok",e("menuOpened"))}catch(k){X("error",k.message)}}async function $o(g){try{await navigator.clipboard.writeText(g),X("ok",e("menuPathCopied"))}catch{X("error",e("menuPathCopyFail"))}}function un(g){return bs(g)?!0:(X("error",e("workspaceOutside")),!1)}async function Ds(g){if(!un(g.path))return;const k=(await ds({title:e("renameEntry"),initial:g.name}))?.trim();if(!k)return;const fe=`${g.path.slice(0,Math.max(g.path.lastIndexOf("/"),g.path.lastIndexOf("\\")))}/${k}`,Me=Gn(g),R=sn(e("taskRenaming"),`${g.name} → ${k}`,Me.fileType,Me.fileSize);try{await La(g.path,fe,Fe.key),X("ok",e("renamed")),R.done()}catch(Re){X("error",Re.message),R.fail(Re.message)}await Ft()}async function Fs(g){if(n.value){await qn([g.recycleFullPath??g.path]);return}if(!un(g.path)||!await Mt({title:e("deleteTitle"),message:e("confirmDelete",{name:g.name})}))return;const $e=Gn(g),fe=sn(e("taskDeleting"),g.name,$e.fileType,$e.fileSize);try{await el(g.path,Fe.key),X("ok",e("deleted")),fe.done()}catch(Me){X("error",Me.message),fe.fail(Me.message)}await Ft()}async function Zn(g){if(n.value){const k=et(g);if(!k)return;const $e=k.name.lastIndexOf(".");B.value={name:k.name,path:k.originalPath||k.path,isDir:k.isDir,ext:$e>0&&$e<k.name.length-1?k.name.slice($e):"",size:k.size??0,mtime:k.mtime??0},de.value=!0;return}if(ae.listing)try{B.value=await Ba(g),de.value=!0}catch(k){X("error",k.message)}}async function es(g){if(!un(g))return;const k=Qg();if(!k.paths.length)return;if(k.op==="cut"&&k.paths.some(fe=>!bs(fe))){X("error",e("workspaceOutside"));return}const $e=sn(k.op==="cut"?e("taskMoving"):e("taskCopying"),`${k.paths.length} → ${g}`);try{for(const fe of k.paths){const Me=fe.slice(Math.max(fe.lastIndexOf("/"),fe.lastIndexOf("\\"))+1),R=await Tn(fe);if(k.op==="cut"&&!R.fileType){X("error",e("taskSrcMissing",{name:Me})),$e.fail(e("taskSrcMissing",{name:Me})),await Ft();return}const Re=await jn(Me,g);$e.step(k.op==="cut"?e("taskMoving"):e("taskCopying"),fe,`→ ${g}`,R.fileType,R.fileSize),k.op==="cut"?await La(fe,Re,Fe.key):await Np(fe,g,Fe.key)}X("ok",k.op==="cut"?e("moved"):e("copied")),$e.done(),Jg()}catch(fe){X("error",fe.message),$e.fail(fe.message)}await Ft()}function Rs(g){return ae.listing?.entries.find(k=>k.path===g)?.name??null}function Js(g){const k=O.value.has(g.path)?[...O.value]:[g.recycleFullPath??g.path];return[{label:e("recycleRestore"),icon:"undo",onClick:()=>Rn(k)},{label:e("recycleDelete"),icon:"trash",onClick:()=>qn(k)},{separator:!0},{label:e("menuRefresh"),icon:"refresh",onClick:()=>_s()},{separator:!0},{label:e("recycleEmpty"),icon:"trash",disabled:(ae.recycleItems?.length??0)===0,onClick:()=>ts()},{separator:!0},{label:e("menuProperties"),icon:"info",onClick:()=>Zn(g.recycleFullPath??g.path)}]}async function Rn(g){if(!g.length)return;const k=sn(e("recycleRestore"),g.length>1?`${g.length} 项`:Rs(g[0])??"");let $e=0;for(const fe of g)try{await bp(fe),$e+=1}catch(Me){k.fail(Me.message),X("error",Me.message)}$e&&(X("ok",e("recycleRestored")),k.done(e("recycleRestored"))),De(),await _s()}async function qn(g){if(!g.length||!await Mt({title:e("recycleDelete"),message:g.length>1?e("recycleDeleteConfirmMulti",{count:g.length}):e("recycleDeleteConfirm",{name:Rs(g[0])??""})}))return;const $e=sn(e("recycleDelete"),`${g.length} 项`);let fe=0;for(const Me of g)try{await _p(Me),fe+=1}catch(R){$e.fail(R.message),X("error",R.message)}fe&&(X("ok",e("recycledDeleted")),$e.done(e("recycledDeleted"))),De(),await _s()}async function ts(){await Zu(),De()}async function Ns(g){if(!un(g.path))return;const k=Gn(g),$e=sn(e("taskCompressing"),g.name,k.fileType,k.fileSize);try{await Ir(g.path,void 0,Fe.key),X("ok",e("compressed")),$e.done()}catch(fe){X("error",fe.message),$e.fail(fe.message)}await Ft()}async function en(g){const k=ae.listing?.path??"";if(!k||!un(k))return;const $e=Gn(g),fe=sn(e("taskExtracting"),g.name,$e.fileType,$e.fileSize);try{const Me=await Ap(g.path,k,Fe.key);X("ok",e("extracted",{count:Me.count})),fe.done(e("extracted",{count:Me.count}))}catch(Me){X("error",`${e("extractFailed")}：${Me.message}`),fe.fail(Me.message)}await Ft()}async function Kt(g){const k=[...O.value];if(!k.length)return;if(g!=="copy"&&k.some(fe=>!bs(fe))){X("error",e("workspaceOutside"));return}const $e=g==="cut"?sn(e("taskMoving"),`${k.length} 项`):g==="copy"?sn(e("taskCopying"),`${k.length} 项`):g==="delete"?sn(e("taskDeleting"),`${k.length} 项`):sn(e("taskCompressing"),`${k.length} 项`);try{if(g==="cut")Ro(k),X("ok",e("menuCutDone"));else if(g==="copy")ka(k),X("ok",e("menuCopyDone"));else if(g==="delete"){if(!await Mt({title:e("deleteTitle"),message:e("confirmDelete",{name:`${k.length} 项`})}))return;for(const Me of k)try{const R=await Tn(Me);await el(Me,Fe.key),$e.step(e("taskDeleting"),Me,void 0,R.fileType,R.fileSize)}catch{}X("ok",e("deleted")),$e.done()}else if(g==="compress"){for(const fe of k)try{const Me=await Tn(fe);await Ir(fe,void 0,Fe.key),$e.step(e("taskCompressing"),fe,void 0,Me.fileType,Me.fileSize)}catch{}X("ok",e("compressed")),$e.done()}}catch(fe){X("error",fe.message),$e.fail(fe.message)}De(),await Ft()}async function ns(g){return jn(g,ae.listing?.path??"")}async function jn(g,k){const $e=k===ae.listing?.path?new Set((ae.listing?.entries??[]).map(gs=>gs.name.toLowerCase())):null,fe=g.lastIndexOf("."),Me=fe>0?g.slice(0,fe):g,R=fe>0?g.slice(fe):"";let Re=g,Xt=2;for(;$e&&$e.has(Re.toLowerCase());)Re=`${Me} (${Xt})${R}`,Xt+=1;const Ht=k.includes("\\")?"\\":"/";return`${k.replace(/[\\/]+$/,"")}${Ht}${Re}`}async function dn(g){if(!ae.listing||!un(ae.listing.path))return;const k=e(g==="folder"?"newFolderName":"newFileName"),$e=g==="folder"?k:`${k}.txt`;let fe=await ns($e);try{g==="folder"?await Oa(fe,Fe.key):await tu(fe,Fe.key),X("ok",e(g==="folder"?"createdFolder":"createdFile"))}catch(Me){X("error",Me.message),await Ft();return}await Ft()}return(g,k)=>{const $e=Ss,fe=Mn,Me=rn;return l(),r("div",{class:"fw-fl",onKeydown:Je},[o("input",{ref_key:"fileInputRef",ref:it,type:"file",multiple:"",class:"fw-hidden-input",onChange:U},null,544),s(ae).listing&&!s(ae).loadErr?(l(),r("div",o2,[h($e,{modelValue:Ie.value,"onUpdate:modelValue":k[0]||(k[0]=R=>Ie.value=R),size:"small",clearable:"",placeholder:s(e)("filterPlaceholder"),class:"fw-filter"},{prefix:ne(()=>[h(se,{name:"search",size:14,class:"fw-search-ico"})]),_:1},8,["modelValue","placeholder"])])):P("",!0),s(ae).loadErr?(l(),r("div",a2,[o("span",i2,[h(se,{name:"warning",size:16})]),o("span",null,a(s(ae).loadErr),1),o("button",{class:"fw-retry",onClick:k[1]||(k[1]=R=>s(Ft)())},a(s(e)("retry")),1)])):s(ae).listing?(l(),r("div",{key:2,ref_key:"wrapRef",ref:ut,class:"fw-table-wrap",tabindex:"0",onScroll:k[12]||(k[12]=(...R)=>s(Q).onScroll&&s(Q).onScroll(...R)),onClick:ie,onContextmenu:be($t,["prevent"]),onDragover:be(Ts,["prevent"]),onDrop:k[13]||(k[13]=be(R=>En(R,null),["prevent"])),onMousedown:On},[ct.value?(l(),r("div",{key:0,class:"fw-band",style:_t({left:ct.value.x+"px",top:ct.value.y+"px",width:ct.value.w+"px",height:ct.value.h+"px"})},null,4)):P("",!0),M.value==="details"?(l(),r("table",l2,[o("thead",null,[o("tr",null,[o("th",{class:te(["col-name",{active:i.value==="name"}]),style:_t(p("name")),onClick:k[4]||(k[4]=R=>W("name"))},[ue(a(s(e)("colName")),1),i.value==="name"?(l(),r("span",r2,a(c.value?"▲":"▼"),1)):P("",!0),o("span",{class:te(["fw-col-resize",{on:u.value==="name"}]),onMousedown:k[2]||(k[2]=be(R=>w(R,"name"),["prevent","stop"])),onClick:k[3]||(k[3]=be(()=>{},["stop"]))},null,34)],6),o("th",{class:te(["col-size",{active:i.value==="size"}]),style:_t(p("size")),onClick:k[7]||(k[7]=R=>W("size"))},[ue(a(s(e)("colSize")),1),i.value==="size"?(l(),r("span",c2,a(c.value?"▲":"▼"),1)):P("",!0),o("span",{class:te(["fw-col-resize",{on:u.value==="size"}]),onMousedown:k[5]||(k[5]=be(R=>w(R,"size"),["prevent","stop"])),onClick:k[6]||(k[6]=be(()=>{},["stop"]))},null,34)],6),o("th",{class:te(["col-type",{active:i.value==="type"}]),style:_t(p("type")),onClick:k[10]||(k[10]=R=>W("type"))},[ue(a(s(e)("colType")),1),i.value==="type"?(l(),r("span",u2,a(c.value?"▲":"▼"),1)):P("",!0),o("span",{class:te(["fw-col-resize",{on:u.value==="type"}]),onMousedown:k[8]||(k[8]=be(R=>w(R,"type"),["prevent","stop"])),onClick:k[9]||(k[9]=be(()=>{},["stop"]))},null,34)],6),o("th",{class:te(["col-mtime",{active:i.value==="mtime"}]),onClick:k[11]||(k[11]=R=>W("mtime"))},[ue(a(s(e)("colModified")),1),i.value==="mtime"?(l(),r("span",d2,a(c.value?"▲":"▼"),1)):P("",!0)],2)])]),o("tbody",null,[s(Q).range.value.padBefore?(l(),r("tr",f2,[o("td",{colspan:4,style:_t({height:s(Q).range.value.padBefore+"px"})},null,4)])):P("",!0),(l(!0),r(oe,null,Ae(Te.value,R=>(l(),r("tr",{key:R.path,class:te(["fw-row",{"is-dir":R.isDir,hidden:R.hidden,broken:R.broken,selected:zt(R)}]),"data-path":R.path,title:Ze(R),draggable:!n.value,onMouseenter:Re=>ft(R),onMouseleave:Re=>Ct(R),onDragstart:Re=>Sn(Re,R),onDragover:be(Re=>R.isDir&&(R.path,void 0),["prevent"]),onDrop:be(Re=>R.isDir&&En(Re,R.path),["prevent","stop"]),onClick:Re=>S(Re,R),onDblclick:Re=>q(Re,R),onContextmenu:be(Re=>Et(Re,R),["prevent","stop"])},[o("td",v2,[o("span",h2,[o("span",m2,[h(se,{name:R.isDir?"folder":"file",size:13},null,8,["name"])]),o("span",g2,a(me(R)),1),we(R)?(l(),r("span",{key:0,class:te(["fw-git-badge","st-"+we(R)]),title:st(R)},[h(se,{name:"git",size:10}),ue(a(Ye(R)),1)],10,y2)):pe(R)?(l(),r("span",{key:1,class:te(["fw-git-badge","st-"+pe(R)]),title:qe(R)},[h(se,{name:"svn",size:10}),ue(a(Ce(R)),1)],10,w2)):P("",!0),R.hidden?(l(),r("span",b2,"●")):P("",!0),R.broken?(l(),r("span",{key:3,class:"fw-broken-tag",title:s(e)("brokenLink")},"broken",8,_2)):P("",!0)])]),o("td",k2,a(je(R)),1),o("td",x2,a(J(R)),1),o("td",C2,a(Ke(R)),1)],42,p2))),128)),s(Q).range.value.padAfter?(l(),r("tr",$2,[o("td",{colspan:4,style:_t({height:s(Q).range.value.padAfter+"px"})},null,4)])):P("",!0),s(ae).listing.inaccessible?(l(),r("tr",S2,[o("td",E2,a(s(ae).listing.inaccessible),1)])):rt.value.length?P("",!0):(l(),r("tr",T2,[o("td",D2,a(yt.value),1)]))])])):M.value==="list"?(l(),r("div",{key:2,class:"fw-mode fw-list",style:_t({paddingTop:s(Q).range.value.padBefore+"px",paddingBottom:s(Q).range.value.padAfter+"px"})},[(l(!0),r(oe,null,Ae(Te.value,R=>(l(),r("div",{key:R.path,class:te(["fw-list-row",{"is-dir":R.isDir,hidden:R.hidden,broken:R.broken,selected:zt(R)}]),"data-path":R.path,title:Ze(R),draggable:!n.value,onMouseenter:Re=>ft(R),onMouseleave:Re=>Ct(R),onDragstart:Re=>Sn(Re,R),onDragover:be(Re=>R.isDir&&(R.path,void 0),["prevent"]),onDrop:be(Re=>R.isDir&&En(Re,R.path),["prevent","stop"]),onClick:Re=>S(Re,R),onDblclick:Re=>q(Re,R),onContextmenu:be(Re=>Et(Re,R),["prevent","stop"])},[o("span",R2,[h(se,{name:R.isDir?"folder":"file",size:14},null,8,["name"])]),o("span",N2,a(me(R)),1),we(R)?(l(),r("span",{key:0,class:te(["fw-git-badge","st-"+we(R)]),title:st(R)},[h(se,{name:"git",size:10}),ue(a(Ye(R)),1)],10,P2)):pe(R)?(l(),r("span",{key:1,class:te(["fw-git-badge","st-"+pe(R)]),title:qe(R)},[h(se,{name:"svn",size:10}),ue(a(Ce(R)),1)],10,A2)):P("",!0),R.broken?(l(),r("span",{key:2,class:"fw-broken-tag",title:s(e)("brokenLink")},"broken",8,M2)):P("",!0)],42,F2))),128)),s(ae).listing.inaccessible||!rt.value.length?(l(),r("div",{key:0,class:te(["fw-empty-cell",{"fw-inaccessible":!!s(ae).listing.inaccessible}])},a(yt.value),3)):P("",!0)],4)):M.value==="grid"?(l(),r("div",{key:3,class:te(["fw-mode fw-grid","fw-grid-"+I.value])},[(l(!0),r(oe,null,Ae(rt.value,R=>(l(),r("div",{key:R.path,class:te(["fw-tile",{"is-dir":R.isDir,hidden:R.hidden,selected:zt(R)}]),"data-path":R.path,title:Ze(R),draggable:!n.value,onMouseenter:Re=>ft(R),onMouseleave:Re=>Ct(R),onDragstart:Re=>Sn(Re,R),onDragover:be(Re=>R.isDir&&(R.path,void 0),["prevent"]),onDrop:be(Re=>R.isDir&&En(Re,R.path),["prevent","stop"]),onClick:Re=>S(Re,R),onDblclick:Re=>q(Re,R),onContextmenu:be(Re=>Et(Re,R),["prevent","stop"])},[ee(R)?(l(),r("span",L2,[o("img",{src:s(Br)(R.path),alt:R.name,loading:"lazy",draggable:"false"},null,8,B2)])):(l(),r("span",I2,[h(se,{name:R.isDir?"folder":"file",size:V.value},null,8,["name","size"])])),o("span",j2,[ue(a(me(R)),1),we(R)?(l(),r("span",{key:0,class:te(["fw-git-badge","st-"+we(R)]),title:st(R)},[h(se,{name:"git",size:10}),ue(a(Ye(R)),1)],10,V2)):pe(R)?(l(),r("span",{key:1,class:te(["fw-git-badge","st-"+pe(R)]),title:qe(R)},[h(se,{name:"svn",size:10}),ue(a(Ce(R)),1)],10,z2)):P("",!0)])],42,O2))),128)),s(ae).listing.inaccessible||!rt.value.length?(l(),r("div",{key:0,class:te(["fw-empty-cell",{"fw-inaccessible":!!s(ae).listing.inaccessible}])},a(yt.value),3)):P("",!0)],2)):M.value==="content"?(l(),r("div",U2,[(l(!0),r(oe,null,Ae(rt.value,R=>(l(),r("div",{key:R.path,class:te(["fw-content-row",{"is-dir":R.isDir,hidden:R.hidden,selected:zt(R)}]),"data-path":R.path,title:Ze(R),draggable:!n.value,onMouseenter:Re=>ft(R),onMouseleave:Re=>Ct(R),onDragstart:Re=>Sn(Re,R),onDragover:be(Re=>R.isDir&&(R.path,void 0),["prevent"]),onDrop:be(Re=>R.isDir&&En(Re,R.path),["prevent","stop"]),onClick:Re=>S(Re,R),onDblclick:Re=>q(Re,R),onContextmenu:be(Re=>Et(Re,R),["prevent","stop"])},[o("span",W2,[h(se,{name:R.isDir?"folder":"file",size:20},null,8,["name"])]),o("span",G2,[o("span",q2,[ue(a(me(R)),1),R.broken?(l(),r("span",K2,"broken")):P("",!0)]),o("span",X2,a(s(e)("colType"))+": "+a(J(R)),1)]),o("span",Y2,[o("span",null,a(s(e)("colModified"))+": "+a(Ke(R)),1),o("span",null,a(s(e)("colSize"))+": "+a(R.isDir?"":je(R)),1)])],42,H2))),128)),s(ae).listing.inaccessible||!rt.value.length?(l(),r("div",{key:0,class:te(["fw-empty-cell",{"fw-inaccessible":!!s(ae).listing.inaccessible}])},a(yt.value),3)):P("",!0)])):M.value==="tiles"?(l(),r("div",J2,[(l(!0),r(oe,null,Ae(rt.value,R=>(l(),r("div",{key:R.path,class:te(["fw-tile2",{"is-dir":R.isDir,hidden:R.hidden,selected:zt(R)}]),"data-path":R.path,title:Ze(R),draggable:!n.value,onMouseenter:Re=>ft(R),onMouseleave:Re=>Ct(R),onDragstart:Re=>Sn(Re,R),onDragover:be(Re=>R.isDir&&(R.path,void 0),["prevent"]),onDrop:be(Re=>R.isDir&&En(Re,R.path),["prevent","stop"]),onClick:Re=>S(Re,R),onDblclick:Re=>q(Re,R),onContextmenu:be(Re=>Et(Re,R),["prevent","stop"])},[ee(R)?(l(),r("span",Z2,[o("img",{src:s(Br)(R.path),alt:R.name,loading:"lazy",draggable:"false"},null,8,ek)])):(l(),r("span",tk,[h(se,{name:R.isDir?"folder":"file",size:34},null,8,["name"])])),o("span",nk,[o("span",sk,a(me(R)),1),o("span",ok,a(J(R)),1),o("span",ak,a(R.isDir?"":je(R)),1)])],42,Q2))),128)),s(ae).listing.inaccessible||!rt.value.length?(l(),r("div",{key:0,class:te(["fw-empty-cell",{"fw-inaccessible":!!s(ae).listing.inaccessible}])},a(yt.value),3)):P("",!0)])):P("",!0),s(ae).listing.truncated?(l(),r("div",ik,a(s(e)("resultsSuffixTruncated")),1)):P("",!0)],544)):P("",!0),s(ae).loading?(l(),r("div",lk,[...k[24]||(k[24]=[o("div",{class:"fw-refreshing-spinner"},null,-1)])])):P("",!0),s(H)?(l(),Xe(Qt,{key:4,items:s(G),x:s(C),y:s(Z),onClose:k[14]||(k[14]=R=>H.value=!1)},null,8,["items","x","y"])):P("",!0),h(Me,{modelValue:de.value,"onUpdate:modelValue":k[16]||(k[16]=R=>de.value=R),class:"fw-prop-dialog fw-clone-dialog",width:"420px","align-center":"","modal-class":"fw-blur-overlay","close-on-click-modal":!1},{header:ne(()=>[o("div",rk,[o("span",ck,[h(se,{name:B.value?.isDir?"folder":"file",size:20},null,8,["name"])]),o("span",uk,[o("span",dk,a(s(e)("menuProperties")),1),o("span",fk,a(B.value?.name),1)])])]),footer:ne(()=>[h(fe,{type:"primary",onClick:k[15]||(k[15]=R=>de.value=!1)},{default:ne(()=>[ue(a(s(e)("confirmOk")),1)]),_:1})]),default:ne(()=>[B.value?(l(),r("div",pk,[o("div",vk,[o("span",hk,a(s(e)("propKind")),1),o("span",mk,a(B.value.isDir?s(e)("typeFolder"):B.value.ext||s(e)("typeFile")),1)]),o("div",gk,[o("span",yk,a(s(e)("propSize")),1),o("span",wk,a(je({isDir:B.value.isDir,size:B.value.size})),1)]),o("div",bk,[o("span",_k,a(s(e)("propModified")),1),o("span",kk,a(Ke({mtime:B.value.mtime})),1)]),o("div",xk,[o("span",Ck,a(s(e)("propPath")),1),o("span",{class:"v mono",title:B.value.path},a(B.value.path),9,$k)])])):P("",!0)]),_:1},8,["modelValue"]),h(Me,{modelValue:ve.value,"onUpdate:modelValue":k[18]||(k[18]=R=>ve.value=R),class:"fw-gitdiff-dialog",title:s(e)("gitDiffTitle"),width:"680px","close-on-click-modal":!1},{footer:ne(()=>[h(fe,{type:"primary",onClick:k[17]||(k[17]=R=>ve.value=!1)},{default:ne(()=>[ue(a(s(e)("gitDiffClose")),1)]),_:1})]),default:ne(()=>[o("pre",Sk,a(_e.value||s(e)("gitDiffEmpty")),1)]),_:1},8,["modelValue","title"]),h(gd,{modelValue:ke.value,"onUpdate:modelValue":k[19]||(k[19]=R=>ke.value=R),dir:n.value?"":s(ae).listing?.path??"",onDone:k[20]||(k[20]=R=>s(ks)(s(ae).listing?.path??""))},null,8,["modelValue","dir"]),h(bd,{modelValue:le.value,"onUpdate:modelValue":k[21]||(k[21]=R=>le.value=R),dir:n.value?"":s(ae).listing?.path??""},null,8,["modelValue","dir"]),h(_d,{modelValue:re.value,"onUpdate:modelValue":k[22]||(k[22]=R=>re.value=R),dir:n.value?"":s(ae).listing?.path??""},null,8,["modelValue","dir"]),h(Q0,{modelValue:Ee.value,"onUpdate:modelValue":k[23]||(k[23]=R=>Ee.value=R),path:Ve.value,onSaved:Ne},null,8,["modelValue","path"])],32)}}}),Fk=xt(Dk,[["__scopeId","data-v-c2b328cc"]]),Rk={key:0,class:"fw-err"},Nk={class:"fw-tp-sec"},Pk={key:0,class:"fw-tp-grid"},Ak=["data-path","title","onClick","onDblclick","onContextmenu"],Mk={class:"fw-drive-ico"},Ok={class:"fw-drive-body"},Lk={class:"fw-drive-name"},Bk={class:"fw-drive-bar"},Ik={class:"fw-drive-cap"},jk={key:0,class:"fw-tp-empty"},Vk={key:1,class:"fw-tp-table"},zk={class:"col-name"},Uk={class:"col-type"},Hk={class:"col-total"},Wk={class:"col-free"},Gk={class:"col-fs"},qk=["data-path","title","onClick","onDblclick","onContextmenu"],Kk={class:"col-name"},Xk={class:"fw-tp-n"},Yk={class:"fw-tp-ico"},Jk={class:"fw-tp-label"},Qk={class:"col-type"},Zk={class:"col-total"},ex={class:"col-free"},tx={class:"col-fs"},nx={key:0},sx={colspan:5,class:"fw-tp-empty-cell"},ox={key:2,class:"fw-tp-loading"},ax={key:0,class:"fw-prop-body"},ix={class:"fw-prop-row"},lx={class:"k"},rx={class:"v"},cx={class:"fw-prop-row"},ux={class:"k"},dx={class:"v"},fx={class:"fw-prop-row"},px={class:"k"},vx={class:"v"},hx={class:"fw-prop-row"},mx={class:"k"},gx={class:"v"},yx={class:"fw-prop-row"},wx={class:"k"},bx={class:"v"},_x={class:"fw-prop-row"},kx={class:"k"},xx={class:"v"},Cx={class:"fw-prop-row"},$x={class:"k"},Sx={class:"v"},Ex={class:"fw-prop-bar"},gc="computer",Tx=ht({__name:"ThisPcPane",setup(t){const{t:e}=Bt(),n=["huge","large","medium","small"],i=L(()=>ll(gc)),c=L(()=>n.includes(i.value)),u=L(()=>i.value==="huge"?52:i.value==="large"?44:i.value==="medium"?36:20);$s(()=>za.value=i.value);const v=m(null),d=L(()=>{const W=[...ae.drives],J=v.value;return J&&W.sort((z,ee)=>J==="size"?(ee.total??-1)-(z.total??-1):J==="free"?(ee.free??-1)-(z.free??-1):J==="type"?Number(z.removable)-Number(ee.removable)||js(z).localeCompare(js(ee),void 0,{sensitivity:"base"}):js(z).localeCompare(js(ee),void 0,{sensitivity:"base"})),W});function p(W){if(W===void 0||!Number.isFinite(W))return"—";const J=["B","KB","MB","GB","TB","PB"];let z=W,ee=0;for(;z>=1024&&ee<J.length-1;)z/=1024,ee+=1;return`${ee>0&&z<100?z.toFixed(1):Math.round(z)} ${J[ee]}`}function w(W){if(!(W.total===void 0||W.free===void 0))return Math.max(0,W.total-W.free)}function b(W){const J=w(W);return J===void 0||!W.total?"0%":`${Math.min(100,Math.max(0,J/W.total*100)).toFixed(1)}%`}function x(W){return e("driveCapacity",{free:p(W.free),total:p(W.total)})}const A=m(""),I=m(null);function M(W){A.value=W.path}function V(W){I.value?.focus({preventScroll:!0}),!W.target.closest(".fw-drive, .fw-tp-row, th")&&(A.value="")}function H(W){A.value=W.path,Vt(W.path)}function C(W){const J=d.value;if(!J.length)return;if(W.key==="F5"){W.preventDefault(),Ft();return}if(W.key==="Enter"&&A.value){const me=J.find(je=>je.path===A.value);me&&(W.preventDefault(),H(me));return}if(W.key!=="ArrowDown"&&W.key!=="ArrowUp"&&W.key!=="Home"&&W.key!=="End")return;W.preventDefault();const z=J.findIndex(me=>me.path===A.value),ee=W.key==="Home"?0:W.key==="End"?J.length-1:W.key==="ArrowDown"?Math.min(J.length-1,z+1):Math.max(0,z<0?0:z-1);A.value=J[ee]?.path??""}function Z(W){rl(gc,W)}$s(()=>{Rt.visible=!0,Rt.canSwitchView=!0,Rt.total=d.value.length,Rt.selected=A.value?1:0,Rt.text="",Rt.view=i.value}),ln(()=>Qa(W=>Z(W))),Pt(()=>{Qa(null),pd()});const{cmOpen:G,cmX:F,cmY:de,cmItems:B,openMenu:ve}=pn();function _e(W,J){A.value=J.path;const z=ro(J.path);ve(W,[{label:e("menuOpen"),icon:"arrowRight",onClick:()=>H(J)},{label:e("menuOpenInEditor"),icon:"code",onClick:()=>ar(J.path)},{separator:!0},{label:e(z?"favoriteRemove":"favoriteAdd"),icon:"star",onClick:()=>{const ee=Ua(J.path);X("ok",e(ee?"favoriteAdded":"favoriteRemoved"))}},{label:e("menuCopyPath"),icon:"link",onClick:()=>void Ne(J.path)},{separator:!0},{label:e("menuProperties"),icon:"info",onClick:()=>ye(J)}])}function ke(W){ve(W,[{label:e("menuRefresh"),icon:"refresh",onClick:()=>void Ft()},{separator:!0},{label:e("menuView"),icon:"eye",children:le()},{label:e("menuSort"),icon:"sort",children:re()}])}function le(){const W=(J,z)=>({label:J,checked:i.value===z,onClick:()=>Z(z)});return[W(e("viewHuge"),"huge"),W(e("viewLarge"),"large"),W(e("viewMedium"),"medium"),W(e("viewSmall"),"small"),{separator:!0},W(e("viewList"),"list"),{separator:!0},W(e("viewDetails"),"details"),W(e("viewContent"),"content"),W(e("viewTiles"),"tiles")]}function re(){return[["name",e("sortName")],["size",e("driveTotal")],["free",e("driveFree")],["type",e("sortType")]].map(([J,z])=>({label:z,checked:v.value===J,onClick:()=>{v.value=J}}))}const Ee=m(!1),Ve=m(null);function ye(W){Ve.value=W,Ee.value=!0}async function Ne(W){try{await navigator.clipboard.writeText(W),X("ok",e("menuPathCopied"))}catch{X("error",e("menuPathCopyFail"))}}return Za((W,J)=>{switch(W){case"view":J&&n.concat(["list","details","content","tiles"]).includes(J)&&Z(J);break;case"sort":(J==="name"||J==="size"||J==="free"||J==="type")&&(v.value=J);break;case"refresh":Ft();break;case"properties":{const z=d.value.find(ee=>ee.path===A.value);z&&ye(z);break}}}),Pt(()=>Za(null)),$s(()=>{vn.selectionCount=A.value?1:0,vn.canOperate=!1,vn.hasClipboard=_l(),vn.isRecycle=!1}),(W,J)=>{const z=Mn,ee=rn;return l(),r("div",{class:"fw-tp",onKeydown:C},[s(ae).drivesErr?(l(),r("div",Rk,a(s(ae).drivesErr),1)):(l(),r("div",{key:1,ref_key:"wrapRef",ref:I,class:te(["fw-tp-wrap","fw-tp-"+i.value]),tabindex:"0",onClick:V,onContextmenu:be(ke,["prevent"])},[o("div",Nk,a(s(e)("thisPcDevices"))+" ("+a(d.value.length)+")",1),c.value?(l(),r("div",Pk,[(l(!0),r(oe,null,Ae(d.value,me=>(l(),r("div",{key:me.path,class:te(["fw-drive",{selected:me.path===A.value,removable:me.removable}]),"data-path":me.path,title:me.path,onClick:je=>M(me),onDblclick:je=>H(me),onContextmenu:be(je=>_e(je,me),["prevent","stop"])},[o("span",Mk,[h(se,{name:"hardDrive",size:u.value},null,8,["size"])]),o("span",Ok,[o("span",Lk,a(s(js)(me)),1),o("span",Bk,[o("span",{class:"fw-drive-fill",style:_t({width:b(me)})},null,4)]),o("span",Ik,a(x(me)),1)])],42,Ak))),128)),!d.value.length&&!s(ae).drivesLoading?(l(),r("div",jk,a(s(e)("emptyDrives")),1)):P("",!0)])):(l(),r("table",Vk,[o("thead",null,[o("tr",null,[o("th",zk,a(s(e)("colName")),1),o("th",Uk,a(s(e)("colType")),1),o("th",Hk,a(s(e)("driveTotal")),1),o("th",Wk,a(s(e)("driveFree")),1),o("th",Gk,a(s(e)("driveFs")),1)])]),o("tbody",null,[(l(!0),r(oe,null,Ae(d.value,me=>(l(),r("tr",{key:me.path,class:te(["fw-tp-row",{selected:me.path===A.value}]),"data-path":me.path,title:me.path,onClick:je=>M(me),onDblclick:je=>H(me),onContextmenu:be(je=>_e(je,me),["prevent","stop"])},[o("td",Kk,[o("span",Xk,[o("span",Yk,[h(se,{name:"hardDrive",size:16})]),o("span",Jk,a(s(js)(me)),1)])]),o("td",Qk,a(me.removable?s(e)("driveTypeRemovable"):s(e)("driveTypeFixed")),1),o("td",Zk,a(p(me.total)),1),o("td",ex,a(p(me.free)),1),o("td",tx,a(me.fsType||"—"),1)],42,qk))),128)),d.value.length?P("",!0):(l(),r("tr",nx,[o("td",sx,a(s(e)("emptyDrives")),1)]))])]))],34)),s(ae).drivesLoading?(l(),r("div",ox,[...J[3]||(J[3]=[o("div",{class:"fw-tp-spinner"},null,-1)])])):P("",!0),s(G)?(l(),Xe(Qt,{key:3,items:s(B),x:s(F),y:s(de),onClose:J[0]||(J[0]=me=>G.value=!1)},null,8,["items","x","y"])):P("",!0),h(ee,{modelValue:Ee.value,"onUpdate:modelValue":J[2]||(J[2]=me=>Ee.value=me),class:"fw-prop-dialog",title:s(e)("menuProperties"),width:"420px","close-on-click-modal":!1},{footer:ne(()=>[h(z,{type:"primary",onClick:J[1]||(J[1]=me=>Ee.value=!1)},{default:ne(()=>[ue(a(s(e)("confirmOk")),1)]),_:1})]),default:ne(()=>[Ve.value?(l(),r("div",ax,[o("div",ix,[o("span",lx,a(s(e)("propName")),1),o("span",rx,a(Ve.value.name),1)]),o("div",cx,[o("span",ux,a(s(e)("propPath")),1),o("span",dx,a(Ve.value.path),1)]),o("div",fx,[o("span",px,a(s(e)("propKind")),1),o("span",vx,a(Ve.value.removable?s(e)("driveTypeRemovable"):s(e)("driveTypeFixed")),1)]),o("div",hx,[o("span",mx,a(s(e)("driveFs")),1),o("span",gx,a(Ve.value.fsType||"—"),1)]),o("div",yx,[o("span",wx,a(s(e)("propSize")),1),o("span",bx,a(p(w(Ve.value))),1)]),o("div",_x,[o("span",kx,a(s(e)("driveFree")),1),o("span",xx,a(p(Ve.value.free)),1)]),o("div",Cx,[o("span",$x,a(s(e)("driveTotal")),1),o("span",Sx,a(p(Ve.value.total)),1)]),o("div",Ex,[o("span",{class:"fw-prop-fill",style:_t({width:b(Ve.value)})},null,4)])])):P("",!0)]),_:1},8,["modelValue","title"])],32)}}}),Dx=xt(Tx,[["__scopeId","data-v-5d2b5f89"]]),Fx=["title"],Rx=["disabled","title"],Nx=["disabled","title"],Px=["disabled","title"],Ax=["title"],Mx=["title"],Ox={class:"fw-pmenu-check"},Lx=["title"],Bx={class:"fw-pmenu-check"},Ix={class:"fw-pmenu-check"},jx=["disabled","title"],Vx=["disabled","title"],zx=["disabled","title"],Ux=["disabled","title"],Hx=["disabled","title"],Wx=["disabled","title"],Gx=["title"],qx={class:"fw-pmenu-check"},Kx=["title"],Xx={class:"fw-pmenu-check"},Yx={class:"fw-pmenu-check"},Jx=["disabled","title"],Qx=ht({__name:"CommandBar",props:{navFolded:{type:Boolean},compact:{type:Boolean}},emits:["unfold-nav"],setup(t){const{t:e}=Bt(),n=L(()=>vn.isRecycle||!vn.canOperate),i=L(()=>vn.selectionCount>0),c=L(()=>(ae.recycleItems?.length??0)>0),u=L(()=>[["name",e("sortName")],["mtime",e("sortModified")],["type",e("sortType")],["size",e("sortSize")]]),v=L(()=>[["huge",e("viewHuge")],["large",e("viewLarge")],["medium",e("viewMedium")],["small",e("viewSmall")],["list",e("viewList")],["details",e("viewDetails")],["content",e("viewContent")],["tiles",e("viewTiles")]]);function d(w,b){if(w==="newSshHost"){Au();return}if(w==="openTerminal"){ko(ae.listing?.path??"");return}if(w==="cloneGit"||w==="cloneSvn"){vr({kind:w==="cloneGit"?"git":"svn",dir:ae.listing?.path??"",key:Fe.key,onDone:({path:x})=>{Vt(x)}});return}s2(w,b)}function p(w){w==="toggleExt"?d("toggleExt"):d("view",w)}return(w,b)=>{const x=Sf,A=$f,I=Cf;return l(),r("div",{class:te(["fw-cmdbar",{"is-compact":t.compact}])},[t.navFolded?(l(),r("button",{key:0,class:"fw-cb-btn fw-cb-navtoggle",title:s(e)("expShowNav"),onClick:b[0]||(b[0]=M=>w.$emit("unfold-nav"))},[h(se,{class:"fw-cb-hamburger",name:"viewList",size:13}),ue(a(s(e)("expShowNav")),1)],8,Fx)):P("",!0),s(vn).isRecycle?(l(),r(oe,{key:1},[o("button",{class:"fw-cb-btn",disabled:!i.value,title:s(e)("recycleRestore"),onClick:b[1]||(b[1]=M=>d("restore"))},[h(se,{name:"undo",size:13}),ue(a(s(e)("recycleRestore")),1)],8,Rx),o("button",{class:"fw-cb-btn",disabled:!i.value,title:s(e)("recycleDelete"),onClick:b[2]||(b[2]=M=>d("delete"))},[h(se,{name:"trash",size:13}),ue(a(s(e)("recycleDelete")),1)],8,Nx),o("button",{class:"fw-cb-btn",disabled:!c.value,title:s(e)("recycleEmpty"),onClick:b[3]||(b[3]=M=>d("emptyRecycle"))},[h(se,{name:"close",size:13}),ue(a(s(e)("recycleEmpty")),1)],8,Px),o("button",{class:"fw-cb-btn",title:s(e)("menuRefresh"),onClick:b[4]||(b[4]=M=>d("refresh"))},[h(se,{name:"refresh",size:13}),ue(a(s(e)("menuRefresh")),1)],8,Ax),b[18]||(b[18]=o("span",{class:"fw-cb-sep"},null,-1)),h(I,{trigger:"click",teleported:!1,"popper-class":"fw-panelmenu-popper",onCommand:b[5]||(b[5]=M=>d("sort",String(M)))},{dropdown:ne(()=>[h(A,{class:"fw-panelmenu"},{default:ne(()=>[(l(!0),r(oe,null,Ae(u.value,M=>(l(),Xe(x,{key:M[0],command:M[0],class:"fw-panelitem"},{default:ne(()=>[o("span",Ox,a(s(Ue).sortKey===M[0]?"✓":""),1),ue(a(M[1]),1)]),_:2},1032,["command"]))),128))]),_:1})]),default:ne(()=>[o("button",{class:"fw-cb-btn",title:s(e)("menuSort")},[h(se,{name:"sort",size:13}),ue(a(s(e)("menuSort"))+" ",1),b[16]||(b[16]=o("span",{class:"caret"},"▾",-1))],8,Mx)]),_:1}),h(I,{trigger:"click",teleported:!1,"popper-class":"fw-panelmenu-popper",onCommand:b[6]||(b[6]=M=>p(String(M)))},{dropdown:ne(()=>[h(A,{class:"fw-panelmenu"},{default:ne(()=>[(l(!0),r(oe,null,Ae(v.value,M=>(l(),Xe(x,{key:M[0],command:M[0],class:"fw-panelitem"},{default:ne(()=>[o("span",Bx,a(s(za)===M[0]?"✓":""),1),ue(a(M[1]),1)]),_:2},1032,["command"]))),128)),h(x,{divided:"",command:"toggleExt",class:"fw-panelitem"},{default:ne(()=>[o("span",Ix,a(s(Ue).showExtensions?"✓":""),1),ue(a(s(e)("showExtensions")),1)]),_:1})]),_:1})]),default:ne(()=>[o("button",{class:"fw-cb-btn",title:s(e)("menuView")},[h(se,{name:"viewDetails",size:13}),ue(a(s(e)("menuView"))+" ",1),b[17]||(b[17]=o("span",{class:"caret"},"▾",-1))],8,Lx)]),_:1})],64)):(l(),r(oe,{key:2},[h(I,{trigger:"click",teleported:!1,"popper-class":"fw-panelmenu-popper",onCommand:b[7]||(b[7]=M=>d(String(M)))},{dropdown:ne(()=>[h(A,{class:"fw-panelmenu"},{default:ne(()=>[h(x,{command:"newFolder",class:"fw-panelitem"},{default:ne(()=>[ue(a(s(e)("menuNewFolder")),1)]),_:1}),h(x,{command:"newFile",class:"fw-panelitem"},{default:ne(()=>[ue(a(s(e)("menuNewFile")),1)]),_:1}),h(x,{command:"upload",class:"fw-panelitem"},{default:ne(()=>[ue(a(s(e)("menuUpload")),1)]),_:1}),h(x,{command:"cloneGit",class:"fw-panelitem"},{default:ne(()=>[ue(a(s(e)("menuCloneGit")),1)]),_:1}),h(x,{command:"cloneSvn",class:"fw-panelitem"},{default:ne(()=>[ue(a(s(e)("menuCloneSvn")),1)]),_:1}),h(x,{divided:"",command:"newSshHost",class:"fw-panelitem"},{default:ne(()=>[ue(a(s(e)("sshNewHost")),1)]),_:1}),h(x,{command:"openTerminal",class:"fw-panelitem"},{default:ne(()=>[ue(a(s(e)("terminalNew")),1)]),_:1})]),_:1})]),default:ne(()=>[o("button",{class:"fw-cb-btn",disabled:n.value,title:s(e)("menuNew")},[h(se,{name:"plus",size:13}),ue(a(s(e)("menuNew"))+" ",1),b[19]||(b[19]=o("span",{class:"caret"},"▾",-1))],8,jx)]),_:1}),o("button",{class:"fw-cb-btn",disabled:!i.value,title:s(e)("menuCut"),onClick:b[8]||(b[8]=M=>d("cut"))},[h(se,{name:"cut",size:13}),ue(a(s(e)("menuCut")),1)],8,Vx),o("button",{class:"fw-cb-btn",disabled:!i.value,title:s(e)("menuCopy"),onClick:b[9]||(b[9]=M=>d("copy"))},[h(se,{name:"copy",size:13}),ue(a(s(e)("menuCopy")),1)],8,zx),o("button",{class:"fw-cb-btn",disabled:s(vn).hasClipboard||n.value,title:s(e)("menuPaste"),onClick:b[10]||(b[10]=M=>d("paste"))},[h(se,{name:"paste",size:13}),ue(a(s(e)("menuPaste")),1)],8,Ux),o("button",{class:"fw-cb-btn",disabled:s(vn).selectionCount!==1||n.value,title:s(e)("menuRename"),onClick:b[11]||(b[11]=M=>d("rename"))},[h(se,{name:"edit",size:13}),ue(a(s(e)("menuRename")),1)],8,Hx),o("button",{class:"fw-cb-btn",disabled:!i.value||n.value,title:s(e)("menuDelete"),onClick:b[12]||(b[12]=M=>d("delete"))},[h(se,{name:"trash",size:13}),ue(a(s(e)("menuDelete")),1)],8,Wx),b[22]||(b[22]=o("span",{class:"fw-cb-sep"},null,-1)),h(I,{trigger:"click",teleported:!1,"popper-class":"fw-panelmenu-popper",onCommand:b[13]||(b[13]=M=>d("sort",String(M)))},{dropdown:ne(()=>[h(A,{class:"fw-panelmenu"},{default:ne(()=>[(l(!0),r(oe,null,Ae(u.value,M=>(l(),Xe(x,{key:M[0],command:M[0],class:"fw-panelitem"},{default:ne(()=>[o("span",qx,a(s(Ue).sortKey===M[0]?"✓":""),1),ue(a(M[1]),1)]),_:2},1032,["command"]))),128))]),_:1})]),default:ne(()=>[o("button",{class:"fw-cb-btn",title:s(e)("menuSort")},[h(se,{name:"sort",size:13}),ue(a(s(e)("menuSort"))+" ",1),b[20]||(b[20]=o("span",{class:"caret"},"▾",-1))],8,Gx)]),_:1}),h(I,{trigger:"click",teleported:!1,"popper-class":"fw-panelmenu-popper",onCommand:b[14]||(b[14]=M=>p(String(M)))},{dropdown:ne(()=>[h(A,{class:"fw-panelmenu"},{default:ne(()=>[(l(!0),r(oe,null,Ae(v.value,M=>(l(),Xe(x,{key:M[0],command:M[0],class:"fw-panelitem"},{default:ne(()=>[o("span",Xx,a(s(za)===M[0]?"✓":""),1),ue(a(M[1]),1)]),_:2},1032,["command"]))),128)),h(x,{divided:"",command:"toggleExt",class:"fw-panelitem"},{default:ne(()=>[o("span",Yx,a(s(Ue).showExtensions?"✓":""),1),ue(a(s(e)("showExtensions")),1)]),_:1})]),_:1})]),default:ne(()=>[o("button",{class:"fw-cb-btn",title:s(e)("menuView")},[h(se,{name:"viewDetails",size:13}),ue(a(s(e)("menuView"))+" ",1),b[21]||(b[21]=o("span",{class:"caret"},"▾",-1))],8,Kx)]),_:1}),b[23]||(b[23]=o("span",{class:"fw-cb-flex"},null,-1)),o("button",{class:"fw-cb-btn",disabled:!i.value,title:s(e)("cmdPreview"),onClick:b[15]||(b[15]=M=>d("preview"))},[h(se,{name:"eye",size:13}),ue(a(s(e)("cmdPreview")),1)],8,Jx)],64))],2)}}}),Zx=xt(Qx,[["__scopeId","data-v-940d1c90"]]),eC=["title"],tC={key:0,class:"fw-bg-task-badge"},nC={class:"fw-bg-task-head"},sC={class:"fw-bg-task-title"},oC={class:"fw-bg-task-headacts"},aC=["disabled"],iC=["disabled"],lC=["disabled"],rC=["title"],cC={key:0,class:"fw-bg-task-group"},uC={class:"fw-bg-task-grouplbl"},dC=["onClick"],fC={class:"fw-bg-task-label"},pC={key:0,class:"fw-bg-task-detail"},vC={class:"fw-bg-task-see"},hC={key:1,class:"fw-bg-task-group"},mC={class:"fw-bg-task-grouplbl"},gC=["onClick"],yC={class:"fw-bg-task-ico"},wC={class:"fw-bg-task-label"},bC={key:0,class:"fw-bg-task-detail"},_C={class:"fw-bg-task-see"},kC={key:2,class:"fw-bg-task-empty"},xC={class:"fw-dlg-head"},CC={class:"fw-dlg-badge"},$C={class:"fw-dlg-headtext"},SC={class:"fw-dlg-headtitle"},EC={class:"fw-dlg-headsub"},TC={class:"fw-tlog-head"},DC={class:"fw-tlog-name"},FC={key:0,class:"fw-tlog-fileitem"},RC={class:"fw-tlog-k"},NC=["title"],PC={class:"fw-tlog-meta"},AC={key:0},MC={key:1},OC={key:2},LC={class:"fw-tlog-timeline"},BC={class:"fw-tlog-rail"},IC={key:0,class:"fw-tlog-line"},jC={class:"fw-tlog-ct"},VC={class:"fw-tlog-brow"},zC={class:"fw-tlog-time"},UC={class:"fw-tlog-dur-tip"},HC={class:"fw-tlog-btext"},WC={key:0,class:"fw-tlog-bnote"},GC={class:"fw-dlg-head"},qC={class:"fw-dlg-badge"},KC={class:"fw-dlg-headtext"},XC={class:"fw-dlg-headtitle"},YC={class:"fw-dlg-headsub"},JC={class:"fw-taskarc"},QC={class:"fw-taskarc-dates"},ZC=["onClick"],e$={class:"fw-taskarc-cnt"},t$={class:"fw-taskarc-records"},n$={key:0,class:"fw-taskarc-none"},s$=["onClick"],o$={class:"fw-taskarc-ico"},a$={class:"fw-taskarc-label"},i$={key:0,class:"fw-taskarc-recdetail"},l$={class:"fw-taskarc-time"},r$={class:"fw-taskarc-detail"},c$={key:0,class:"fw-taskarc-none"},u$={class:"fw-tlog-head"},d$={class:"fw-tlog-name"},f$={key:0,class:"fw-tlog-fileitem"},p$={class:"fw-tlog-k"},v$=["title"],h$={class:"fw-tlog-meta"},m$={key:0},g$={key:1},y$={key:2},w$={class:"fw-tlog-timeline"},b$={class:"fw-tlog-rail"},_$={key:0,class:"fw-tlog-line"},k$={class:"fw-tlog-ct"},x$={class:"fw-tlog-brow"},C$={class:"fw-tlog-time"},$$={class:"fw-tlog-dur-tip"},S$={class:"fw-tlog-btext"},E$={key:0,class:"fw-tlog-bnote"},Vi=340,yc=11,No=8,T$=ht({__name:"BgTaskPanel",setup(t){const{t:e}=Bt(),n=L(()=>Kn.open.value),i=L(()=>Kn.state.list),c=L(()=>Kn.state.history),u=L(()=>i.value.filter(pe=>pe.status==="running")),v=L(()=>u.value.length),d=L(()=>c.value.length>0),p=m(null),w=m(!1),b=m(null),x=gt({width:Vi,left:0,bottom:0,maxH:360,arrow:Vi/2}),A=L(()=>({width:`${x.width}px`,left:`${x.left}px`,bottom:`${x.bottom}px`})),I=L(()=>({maxHeight:`${x.maxH}px`})),M=L(()=>({left:`${x.arrow}px`}));function V(){const pe=b.value;if(!pe)return;const Ce=pe.getBoundingClientRect(),qe=window.innerWidth,ce=window.innerHeight,Ie=Ce.left+Ce.width/2,rt=Math.min(Vi,Math.max(qe-No*2,200)),yt=Math.max(qe-rt-No,No),ut=Ie<qe/2?Ce.left-2:Ie-rt/2,it=Math.min(Math.max(ut,No),yt);x.width=Math.round(rt),x.left=Math.round(it),x.bottom=Math.round(ce-Ce.top+yc),x.maxH=Math.max(140,Math.min(Ce.top-yc-No,Math.round(ce*.6))),x.arrow=Math.round(Math.min(Math.max(Ie-it,16),rt-16))}Qe(n,pe=>{pe&&(V(),Dt(V))});const H=m(!1),C=m(null),Z=L(()=>Kn.state.archives),G=L(()=>Object.keys(Z.value).sort((pe,Ce)=>pe<Ce?1:-1).map(pe=>({date:pe,count:Z.value[pe].length}))),F=L(()=>{const pe=C.value;return[...pe&&Z.value[pe]?Z.value[pe]:[]].sort((qe,ce)=>(ce.doneAt??ce.startedAt)-(qe.doneAt??qe.startedAt))});function de(){G.value.length&&(C.value=G.value[0].date,H.value=!0)}function B(pe){Kn.setOpen(pe)}function ve(){Kn.clearFinished()}function _e(){Kn.clearAll()}function ke(pe){const Ce=pe.logs,qe=Ce&&Ce.length?Ce:[{time:pe.startedAt,status:"running",msg:pe.label,file:pe.detail},{time:pe.doneAt??Date.now(),status:pe.status,msg:pe.msg??"",file:pe.detail}];p.value={label:pe.label,fileTarget:pe.detail,status:pe.status,startedAt:pe.startedAt,doneAt:pe.doneAt,msg:pe.msg,logs:qe},w.value=!0}function le(pe,Ce){let qe=Ce;return pe.map(ce=>{const Ie=ce.time-qe>0?ce.time-qe:0;return qe=ce.time,{time:ce.time,status:ce.status,title:ce.msg,file:ce.file,detail:ce.detail,durMs:Ie}})}function re(pe){let Ce=0,qe=0;const ce=new Set;for(const Ie of pe)Ie.fileType&&(ce.add(Ie.fileType),Ce+=1,Ie.fileSize!==void 0&&(qe+=Ie.fileSize));return{count:Ce,size:qe,types:[...ce]}}const Ee=L(()=>p.value?re(p.value.logs):{count:0,size:0,types:[]}),Ve=L(()=>J.value?re(W(J.value)):{count:0,size:0,types:[]}),ye=L(()=>p.value?le(p.value.logs,p.value.startedAt):[]),Ne=L(()=>{const pe=p.value;if(!pe)return null;if(pe.doneAt)return pe.doneAt-pe.startedAt;const Ce=ye.value[ye.value.length-1];return Ce?Ce.time-pe.startedAt:0});function W(pe){return pe.logs&&pe.logs.length?pe.logs:[{time:pe.startedAt,status:"running",msg:pe.label,file:pe.detail},{time:pe.doneAt??Date.now(),status:pe.status,msg:pe.msg??"",file:pe.detail}]}const J=m(null),z=L(()=>J.value?le(W(J.value),J.value.startedAt):[]),ee=L(()=>{const pe=J.value;if(!pe)return null;if(pe.doneAt)return pe.doneAt-pe.startedAt;const Ce=z.value[z.value.length-1];return Ce?Ce.time-pe.startedAt:0});function me(){J.value=null}function je(pe){J.value=pe}function Ke(pe){const Ce=new Date(pe),qe=ce=>String(ce).padStart(2,"0");return`${qe(Ce.getHours())}:${qe(Ce.getMinutes())}:${qe(Ce.getSeconds())}`}function Ze(pe){const Ce=new Date(pe),qe=ce=>String(ce).padStart(2,"0");return`${Ce.getFullYear()}-${qe(Ce.getMonth()+1)}-${qe(Ce.getDate())} ${Ke(pe)}`}function ge(pe){if(pe==null)return"—";if(pe<0&&(pe=0),pe<1e3)return`${pe}ms`;const Ce=pe/1e3;if(Ce<60)return`${Ce.toFixed(1)}s`;const qe=Math.floor(Ce/60),ce=Math.round(Ce-qe*60);return`${qe}m ${String(ce).padStart(2,"0")}s`}function we(pe){return e(pe==="done"?"taskStatusDone":pe==="error"?"taskStatusError":"taskStatusRunning")}function Ye(pe){let Ce=pe.title??"";return pe.file&&(Ce=Ce?`${Ce}：${pe.file}`:pe.file),Ce}ln(()=>{Kn.initTaskLogs(),document.addEventListener("mousedown",st),window.addEventListener("resize",V),window.addEventListener("scroll",V,!0)}),Pt(()=>{document.removeEventListener("mousedown",st),window.removeEventListener("resize",V),window.removeEventListener("scroll",V,!0)});function st(pe){pe.target?.closest?.(".fw-bg-task-fab, .fw-bg-task-panel")||Kn.setOpen(!1)}return(pe,Ce)=>{const qe=rn;return l(),r(oe,null,[o("button",{ref_key:"fabRef",ref:b,class:te(["fw-bg-task-fab",{active:n.value}]),title:s(e)("taskFabTitle"),onClick:Ce[0]||(Ce[0]=ce=>B(!n.value))},[h(se,{name:"tasks",size:14}),v.value?(l(),r("span",tC,a(v.value),1)):P("",!0)],10,eC),h(yf,{name:"fw-bg-task-pop"},{default:ne(()=>[n.value?(l(),r("div",{key:0,class:"fw-bg-task-wrap",style:_t(A.value)},[o("div",{class:"fw-bg-task-panel",style:_t(I.value)},[o("div",nC,[o("span",sC,a(s(e)("taskPanelTitle")),1),o("div",oC,[o("button",{class:"fw-bg-task-link",disabled:!G.value.length,onClick:de},a(s(e)("taskArchiveOpen")),9,aC),o("button",{class:"fw-bg-task-link",disabled:!d.value,onClick:ve},a(s(e)("taskClearFinished")),9,iC),o("button",{class:"fw-bg-task-link",disabled:!i.value.length,onClick:_e},a(s(e)("taskClearAll")),9,lC),o("button",{class:"fw-bg-task-close",title:s(e)("taskClose"),onClick:Ce[1]||(Ce[1]=ce=>B(!1))},"✕",8,rC)])]),u.value.length?(l(),r("div",cC,[o("div",uC,a(s(e)("taskRunning")),1),(l(!0),r(oe,null,Ae(u.value,ce=>(l(),r("div",{key:ce.id,class:"fw-bg-task-row",onClick:Ie=>ke(ce)},[Ce[4]||(Ce[4]=o("span",{class:"fw-bg-task-spin"},null,-1)),o("span",fC,a(ce.label),1),ce.detail?(l(),r("span",pC,a(ce.detail),1)):P("",!0),o("span",vC,a(s(e)("taskViewLog")),1)],8,dC))),128))])):P("",!0),c.value.length?(l(),r("div",hC,[o("div",mC,a(s(e)("taskHistory")),1),(l(!0),r(oe,null,Ae(c.value,(ce,Ie)=>(l(),r("div",{key:ce.startedAt+"-"+Ie,class:te(["fw-bg-task-row",ce.status]),onClick:rt=>ke(ce)},[o("span",yC,[h(se,{name:ce.status==="done"?"check":"close",size:13},null,8,["name"])]),o("span",wC,a(ce.label),1),ce.detail?(l(),r("span",bC,a(ce.detail),1)):P("",!0),o("span",_C,a(s(e)("taskViewLog")),1)],10,gC))),128))])):P("",!0),!u.value.length&&!c.value.length?(l(),r("div",kC,a(s(e)("taskEmpty")),1)):P("",!0)],4),o("span",{class:"fw-bg-task-arrow",style:_t(M.value)},null,4)],4)):P("",!0)]),_:1}),h(qe,{modelValue:w.value,"onUpdate:modelValue":Ce[2]||(Ce[2]=ce=>w.value=ce),class:"fw-clone-dialog fw-tasklog-dialog",width:"580px","align-center":"","modal-class":"fw-blur-overlay","close-on-click-modal":!1,"modal-append-to-body":!1,"append-to-body":!1},{header:ne(()=>[o("div",xC,[o("span",CC,[h(se,{name:"tasks",size:20})]),o("span",$C,[o("span",SC,a(s(e)("taskLogTitle")),1),o("span",EC,a(p.value?.label),1)])])]),default:ne(()=>[p.value?(l(),r(oe,{key:0},[o("div",TC,[o("div",DC,a(p.value.label),1),p.value.fileTarget?(l(),r("div",FC,[o("span",RC,a(s(e)("taskFieldTarget")),1),o("span",{class:"fw-tlog-path",title:p.value.fileTarget},a(p.value.fileTarget),9,NC)])):P("",!0),o("div",PC,[o("span",{class:te(["fw-tlog-st-head",p.value.status])},a(we(p.value.status)),3),o("span",null,a(s(e)("taskStartTime"))+" "+a(Ze(p.value.startedAt)),1),p.value.doneAt?(l(),r("span",AC,a(s(e)("taskEndTime"))+" "+a(Ze(p.value.doneAt)),1)):P("",!0),o("span",null,a(s(e)("taskTotalSpent"))+" "+a(ge(Ne.value)),1),Ee.value.types.length?(l(),r("span",MC,a(s(e)("taskFieldType"))+"："+a(Ee.value.types.join("、")),1)):P("",!0),Ee.value.count?(l(),r("span",OC,a(s(e)("taskMetaFiles",{count:Ee.value.count,size:s(mc)(Ee.value.size)})),1)):P("",!0)])]),o("div",LC,[(l(!0),r(oe,null,Ae(ye.value,(ce,Ie)=>(l(),r("div",{key:Ie,class:"fw-tlog-step"},[o("div",BC,[o("span",{class:te(["fw-tlog-dot",ce.status])},null,2),Ie<ye.value.length-1?(l(),r("span",IC)):P("",!0)]),o("div",jC,[o("div",{class:te(["fw-tlog-bubble",ce.status])},[o("div",VC,[o("span",zC,a(Ke(ce.time)),1),o("span",{class:te(["fw-tlog-st",ce.status])},a(we(ce.status)),3),o("span",UC,[Ie!==0?(l(),r(oe,{key:0},[ue(a(s(e)("taskStepSpent"))+" ",1),o("b",null,a(ge(ce.durMs)),1)],64)):P("",!0)])]),o("div",HC,a(Ye(ce)),1),ce.detail&&ce.detail!==ce.file?(l(),r("div",WC,a(ce.detail),1)):P("",!0)],2)])]))),128))])],64)):P("",!0)]),_:1},8,["modelValue"]),h(qe,{modelValue:H.value,"onUpdate:modelValue":Ce[3]||(Ce[3]=ce=>H.value=ce),class:"fw-clone-dialog fw-taskarc-dialog",width:"880px","align-center":"","modal-class":"fw-blur-overlay","close-on-click-modal":!1,"modal-append-to-body":!1,"append-to-body":!1},{header:ne(()=>[o("div",GC,[o("span",qC,[h(se,{name:"archive",size:20})]),o("span",KC,[o("span",XC,a(s(e)("taskArchiveTitle")),1),o("span",YC,a(C.value??s(e)("taskArchiveOpen")),1)])])]),default:ne(()=>[o("div",JC,[o("div",QC,[(l(!0),r(oe,null,Ae(G.value,ce=>(l(),r("button",{key:ce.date,class:te(["fw-taskarc-date",{active:C.value===ce.date}]),onClick:Ie=>{C.value=ce.date,me()}},[o("span",null,a(ce.date),1),o("span",e$,a(s(e)("taskArchiveRecords",{count:ce.count})),1)],10,ZC))),128))]),o("div",t$,[F.value.length?P("",!0):(l(),r("div",n$,a(s(e)("taskArchiveNone")),1)),(l(!0),r(oe,null,Ae(F.value,(ce,Ie)=>(l(),r("div",{key:ce.startedAt+"-"+Ie,class:te(["fw-taskarc-row",{[ce.status]:!0,active:J.value===ce}]),onClick:rt=>je(ce)},[o("span",o$,[h(se,{name:ce.status==="done"?"check":"close",size:13},null,8,["name"])]),o("span",a$,a(ce.label),1),ce.detail?(l(),r("span",i$,a(ce.detail),1)):P("",!0),o("span",l$,a(Ze(ce.startedAt)),1)],10,s$))),128))]),o("div",r$,[J.value?(l(),r(oe,{key:1},[o("div",u$,[o("div",d$,a(J.value.label),1),J.value.detail?(l(),r("div",f$,[o("span",p$,a(s(e)("taskFieldTarget")),1),o("span",{class:"fw-tlog-path",title:J.value.detail},a(J.value.detail),9,v$)])):P("",!0),o("div",h$,[o("span",{class:te(["fw-tlog-st-head",J.value.status])},a(we(J.value.status)),3),o("span",null,a(s(e)("taskStartTime"))+" "+a(Ze(J.value.startedAt)),1),J.value.doneAt?(l(),r("span",m$,a(s(e)("taskEndTime"))+" "+a(Ze(J.value.doneAt)),1)):P("",!0),o("span",null,a(s(e)("taskTotalSpent"))+" "+a(ge(ee.value)),1),Ve.value.types.length?(l(),r("span",g$,a(s(e)("taskFieldType"))+"："+a(Ve.value.types.join("、")),1)):P("",!0),Ve.value.count?(l(),r("span",y$,a(s(e)("taskMetaFiles",{count:Ve.value.count,size:s(mc)(Ve.value.size)})),1)):P("",!0)])]),o("div",w$,[(l(!0),r(oe,null,Ae(z.value,(ce,Ie)=>(l(),r("div",{key:Ie,class:"fw-tlog-step"},[o("div",b$,[o("span",{class:te(["fw-tlog-dot",ce.status])},null,2),Ie<z.value.length-1?(l(),r("span",_$)):P("",!0)]),o("div",k$,[o("div",{class:te(["fw-tlog-bubble",ce.status])},[o("div",x$,[o("span",C$,a(Ke(ce.time)),1),o("span",{class:te(["fw-tlog-st",ce.status])},a(we(ce.status)),3),o("span",$$,[Ie!==0?(l(),r(oe,{key:0},[ue(a(s(e)("taskStepSpent"))+" ",1),o("b",null,a(ge(ce.durMs)),1)],64)):P("",!0)])]),o("div",S$,a(Ye(ce)),1),ce.detail&&ce.detail!==ce.file?(l(),r("div",E$,a(ce.detail),1)):P("",!0)],2)])]))),128))])],64)):(l(),r("div",c$,a(s(e)("taskArchiveNone")),1))])])]),_:1},8,["modelValue"])],64)}}}),D$=xt(T$,[["__scopeId","data-v-516f499d"]]),F$={key:0,class:"fw-status-progress","aria-hidden":"true"},R$={class:"fw-status-tasks"},N$=["title"],P$=["inert"],A$={key:0,class:"fw-status-busy"},M$={class:"fw-status-busy-txt"},O$={key:1,class:"fw-status-info"},L$={key:0},B$={key:1,class:"fw-status-sub"},I$={key:2},j$={key:3},V$=["inert"],z$=["title","onClick"],U$=ht({__name:"StatusBar",props:{chromeDisabled:{type:Boolean}},setup(t){const{t:e}=Bt(),n=t,i=L(()=>n.chromeDisabled??!1),c=m(null),{cmOpen:u,cmX:v,cmY:d,openMenuAt:p}=pn();function w(){const C=c.value?.getBoundingClientRect();C&&p(C.left,C.top-4)}function b(){return{path:null,projectDir:Fe.root||null}}const x=L(()=>Ya().length>0),A=L(()=>{Fe.root;const C=b();return Ya().map(Z=>({label:Z.text,disabled:!!Z.when&&!Z.when(C),onClick:()=>{try{hi(Z.commandId,C)}catch(G){X("error",G.message)}}}))}),I=[{key:"details",icon:"eye",label:"viewDetails"},{key:"list",icon:"sort",label:"viewList"},{key:"large",icon:"grid",label:"viewLarge"}],M=L(()=>Kn.state.list.filter(C=>C.status==="running")),V=L(()=>M.value.length>0||Fe.search.running||ae.loading||ae.recycleLoading||ae.drivesLoading),H=L(()=>{const C=M.value[0];return C?C.detail?`${C.label} · ${C.detail}`:C.label:Fe.search.running?e("statusSearching"):ae.loading||ae.recycleLoading||ae.drivesLoading?e("statusLoading"):""});return(C,Z)=>(l(),r("div",{class:te(["fw-statusbar",{busy:V.value}])},[V.value?(l(),r("div",F$)):P("",!0),o("div",R$,[h(D$),x.value?(l(),r("button",{key:0,ref_key:"extMenuBtnRef",ref:c,class:te(["fw-status-seg fw-status-ext-btn",{on:s(u)}]),title:s(e)("vsMenuExtensions"),onClick:w},[h(se,{name:"puzzle",size:13}),o("span",null,a(s(e)("vsMenuExtensions")),1)],10,N$)):P("",!0)]),o("div",{class:te(["fw-status-left",{"chrome-disabled":i.value}]),inert:i.value},[H.value?(l(),r("span",A$,[Z[1]||(Z[1]=o("span",{class:"fw-status-busy-dot","aria-hidden":"true"},null,-1)),o("span",M$,a(H.value),1)])):s(Rt).visible?(l(),r("span",O$,[o("span",null,a(s(e)("statusItemsCount",{count:s(Rt).total})),1),s(Rt).selected?(l(),r("span",L$,"，"+a(s(e)("selectedCount",{count:s(Rt).selected})),1)):P("",!0),s(Rt).text?(l(),r("span",B$," · "+a(s(Rt).text),1)):P("",!0)])):s(ae).view==="computer"?(l(),r("span",I$,a(s(e)("statusDrivesCount",{count:s(ae).drives.length})),1)):s(ae).view==="recycle"?(l(),r("span",j$,a(s(e)("statusItemsCount",{count:s(ae).recycleItems.length})),1)):P("",!0)],10,P$),o("div",{class:te(["fw-status-right",{"chrome-disabled":i.value}]),inert:i.value},[(l(),r(oe,null,Ae(I,G=>kt(o("button",{key:G.key,class:te(["fw-vs-btn",{on:s(Rt).view===G.key}]),title:s(e)(G.label),onClick:F=>s(Zg)(G.key)},[h(se,{name:G.icon,size:13},null,8,["name"])],10,z$),[[ho,s(Rt).canSwitchView]])),64))],10,V$),s(u)?(l(),Xe(Qt,{key:1,items:A.value,x:s(v),y:s(d),placement:"top",onClose:Z[0]||(Z[0]=G=>u.value=!1)},null,8,["items","x","y"])):P("",!0)],2))}}),H$=xt(U$,[["__scopeId","data-v-69ee25ba"]]),W$=["aria-disabled","inert"],G$={class:"fw-exp-left-main"},q$=["aria-valuenow"],K$={class:"fw-exp-right"},X$={class:"fw-explorer-statusbar-shell"},zi="dsh-file-workbench.activeExternalView",Y$=640,J$=780,Q$=680,Z$=ht({__name:"ExplorerPane",setup(t){const e=m(null),n=m(!1),i=rr(e),c=L(Pm);function u(){try{return localStorage.getItem(zi)??"files"}catch{return"files"}}const v=m(u()),d=m(!1),p=m(null),w=new Set,b=new Set,x={apiVersion:Ka,get projectDir(){return Fe.root||null},get theme(){return i.value},activeFile:null,onProjectChange(le){return w.add(le),le(Fe.root||null),()=>w.delete(le)},onThemeChange(le){return b.add(le),le(i.value),()=>b.delete(le)},onDidChangeActiveFile(le){return le(null),()=>{}},openFile:async le=>{await sa(le)},listOpenFiles:()=>[],openDiff:()=>X("info",y("gitDiffEmpty")),toast:X},A=L(()=>c.value.filter(le=>!le.when||le.when(x))),I=L(()=>A.value.find(le=>le.id===v.value));Qe(()=>v.value!=="files",le=>{Fe.externalViewActive=le},{immediate:!0});function M(le){v.value=le;try{localStorage.setItem(zi,le)}catch{}}function V(){v.value="files";try{localStorage.removeItem(zi)}catch{}}Qe(()=>Fe.root,le=>w.forEach(re=>re(le||null))),Qe(i,le=>b.forEach(re=>re(le))),$s(le=>{const re=I.value,Ee=p.value;if(!re||!Ee||re.when&&!re.when(x))return;const Ve=re.mount(Ee,x);Xa(Ee);const ye=new ResizeObserver(()=>Xa(Ee));ye.observe(Ee),le(()=>{if(ye.disconnect(),typeof Ve=="function")try{Ve()}catch{}Ee.replaceChildren()})},{flush:"post"});const H=m(!1),C=m(0),Z=L(()=>C.value>0&&C.value<Q$);let G=null;function F(){const le=e.value?.clientWidth??0;C.value=le,le<=Y$?H.value=!0:le>=J$&&(H.value=!1)}const de=L(()=>!!qa.value.trim()),B=L(()=>({width:`calc(${Math.round(Un.explorerSplit*1e3)/10}% - 3px)`}));function ve(le){if(!n.value||!e.value)return;const re=e.value.getBoundingClientRect();if(re.width<=0)return;const Ee=(le.clientX-re.left)/re.width;Un.explorerSplit=Math.min(.85,Math.max(.15,Ee))}function _e(){n.value&&(n.value=!1,document.removeEventListener("mousemove",ve),document.removeEventListener("mouseup",_e),document.body.style.userSelect="",document.body.style.cursor="",Da())}function ke(){n.value=!0,document.addEventListener("mousemove",ve),document.addEventListener("mouseup",_e),document.body.style.userSelect="none",document.body.style.cursor="col-resize"}return Pt(()=>{document.removeEventListener("mousemove",ve),document.removeEventListener("mouseup",_e),G?.disconnect(),G=null}),ln(()=>{e.value&&(G=new ResizeObserver(()=>F()),G.observe(e.value),F())}),(le,re)=>(l(),r("div",{ref_key:"rootRef",ref:e,class:te(["fw-explorer",{"user-slot-active":v.value!=="files"}])},[o("div",{class:te(["fw-explorer-topbar-shell",{"external-view-disabled":v.value!=="files"}]),"aria-disabled":v.value!=="files",inert:v.value!=="files"},[h(Zx,{"nav-folded":H.value,compact:Z.value,onUnfoldNav:re[0]||(re[0]=Ee=>H.value=!1)},null,8,["nav-folded","compact"])],10,W$),o("div",{class:te(["fw-exp-body",{"left-folded":H.value,"user-slot-active":v.value!=="files"}])},[o("div",{class:"fw-exp-left",style:_t(B.value)},[o("div",G$,[h(Eg,{"external-views":A.value,"external-collapsed":d.value,"active-external-id":v.value==="files"?"":v.value,"external-active":v.value!=="files"&&!!I.value,onToggleExternal:re[1]||(re[1]=Ee=>d.value=!d.value),onSelectExternal:M,onSelectLocal:V},null,8,["external-views","external-collapsed","active-external-id","external-active"])])],4),o("div",{class:te(["fw-exp-split",{dragging:n.value}]),role:"separator","aria-orientation":"vertical","aria-valuenow":Math.round(s(Un).explorerSplit*100),"aria-valuemin":15,"aria-valuemax":85,onMousedown:be(ke,["prevent"])},null,42,q$),o("div",K$,[I.value?(l(),r("div",{key:0,ref_key:"extHostRef",ref:p,class:"fw-exp-ext-view"},null,512)):(l(),r(oe,{key:1},[de.value?(l(),Xe(Xg,{key:0})):s(ae).view==="computer"?(l(),Xe(Dx,{key:1})):(l(),Xe(Fk,{key:2}))],64))])],2),o("div",X$,[h(H$,{"chrome-disabled":v.value!=="files"},null,8,["chrome-disabled"])])],2))}}),eS=xt(Z$,[["__scopeId","data-v-83c03138"]]),tS={class:"fw-navpath"},nS=["title"],sS={class:"fw-crumb last"},oS=["title"],aS=["onKeydown"],iS={key:0,class:"fw-crumb-sep"},lS=["title","onClick"],rS={key:2,class:"fw-path"},cS=ht({__name:"NavPathBar",setup(t){const{t:e}=Bt(),n=L(()=>yl.value||Fe.root||""),i=L(()=>ae.view==="computer"?e("navThisPc"):ae.view==="recycle"?e("recycleBin"):""),c=L(()=>ae.view==="computer"?"monitor":"trash"),u=L(()=>n.value.startsWith("ssh://")),v=L(()=>{const M=n.value;if(!M)return[];const V=Pu(M);if(V)return V;const H=M.replace(/\\/g,"/").split("/").filter(G=>G.length>0),C=[];let Z="";return H.forEach((G,F)=>{const de=/^[A-Za-z]:$/.test(G);Z=F===0?de?G+"/":"/"+G:Z.replace(/[\\/]+$/,"")+"/"+G,C.push({name:G,path:Z})}),C});function d(M){Vt(M)}const p=m(!1),w=m(""),b=m(null);function x(){w.value=n.value,p.value=!0,Dt(()=>{b.value?.focus(),b.value?.select()})}function A(){const M=w.value.trim();p.value=!1,M&&M!==n.value&&Vt(M).catch(V=>X("error",V.message))}function I(){p.value=!1}return(M,V)=>(l(),r("div",tS,[i.value?(l(),r("span",{key:0,class:"fw-path fw-crumbs fw-path-static",title:i.value},[h(se,{name:c.value,size:14,class:"fw-path-static-ico"},null,8,["name"]),o("span",sS,a(i.value),1)],8,nS)):n.value?(l(),r("span",{key:1,class:te(["fw-path",{"fw-crumbs":!p.value,editing:p.value}]),title:n.value,onClick:x},[p.value?kt((l(),r("input",{key:0,ref_key:"pathInputRef",ref:b,"onUpdate:modelValue":V[0]||(V[0]=H=>w.value=H),class:"fw-path-input",spellcheck:"false",onKeydown:[bt(be(A,["prevent"]),["enter"]),bt(be(I,["prevent"]),["esc"])],onBlur:I},null,40,aS)),[[Lt,w.value]]):(l(!0),r(oe,{key:1},Ae(v.value,(H,C)=>(l(),r(oe,{key:C},[C>0?(l(),r("span",iS,a(u.value?"/":"\\"),1)):P("",!0),o("button",{class:te(["fw-crumb",{last:C===v.value.length-1}]),title:H.path,onClick:be(Z=>d(H.path),["stop"])},a(H.name),11,lS)],64))),128))],10,oS)):(l(),r("span",rS,a(s(e)("noFolder")),1))]))}}),uS=xt(cS,[["__scopeId","data-v-7f7f6ad1"]]),dS=["aria-disabled","inert"],fS={class:"fw-right"},pS=640,vS=ht({__name:"WinMenuBar",props:{externalViewActive:{type:Boolean}},emits:["open-settings"],setup(t,{emit:e}){const n=e,{t:i}=Bt(),c=m(null),u=m(!1);let v=null;ln(()=>{c.value&&(v=new ResizeObserver(()=>{u.value=(c.value?.clientWidth??0)<pS}),v.observe(c.value))}),Pt(()=>{v?.disconnect(),v=null});const d=m(!1);let p;function w(){Ft(),d.value=!0,p&&clearTimeout(p),p=setTimeout(()=>d.value=!1,650)}const b=L(()=>ae.loading||d.value);function x(){Vu()}function A(){zu()}const I=L({get:()=>qa.value,set:Z=>ba(Z)});let M;const V=L(()=>di(yl.value)?yl.value:Fe.root||"");function H(){M&&clearTimeout(M);const Z=I.value;if(!Z.trim()){ba(""),po("").catch(G=>X("error",G.message));return}M=setTimeout(()=>{ba(Z),po(Z,V.value).catch(G=>X("error",G.message))},350)}function C(){I.value="",ba(""),po("")}return Qe(qa,Z=>{!Z&&I.value&&(I.value="")}),(Z,G)=>{const F=Mn,de=Ss;return l(),r("header",{ref_key:"toolbarRef",ref:c,class:te(["fw-toolbar",{"external-view-disabled":t.externalViewActive}]),"aria-disabled":t.externalViewActive,inert:t.externalViewActive},[kt(h(F,{text:"",size:"small",title:s(i)("goBack"),disabled:!s(Eh),onClick:x},{default:ne(()=>[h(se,{name:"arrowLeft",size:16})]),_:1},8,["title","disabled"]),[[ho,!u.value]]),kt(h(F,{text:"",size:"small",title:s(i)("goForward"),disabled:!s(Th),onClick:A},{default:ne(()=>[h(se,{name:"arrowRight",size:16})]),_:1},8,["title","disabled"]),[[ho,!u.value]]),h(F,{text:"",size:"small",title:s(i)("goUp"),disabled:!s(Dh),onClick:s(gl)},{default:ne(()=>[h(se,{name:"up",size:16})]),_:1},8,["title","disabled","onClick"]),h(F,{text:"",size:"small",title:s(i)("goSessionDir"),onClick:s(Hu)},{default:ne(()=>[h(se,{name:"compass",size:16})]),_:1},8,["title","onClick"]),h(F,{text:"",size:"small",title:s(i)("refreshList"),onClick:w},{default:ne(()=>[h(se,{name:"refresh",class:te(["fw-refresh-ic",{spinning:b.value}]),size:15},null,8,["class"])]),_:1},8,["title"]),h(F,{text:"",size:"small",title:s(i)("settings"),onClick:G[0]||(G[0]=B=>n("open-settings"))},{default:ne(()=>[h(se,{name:"gear",size:16})]),_:1},8,["title"]),h(uS),o("div",fS,[h(de,{modelValue:I.value,"onUpdate:modelValue":G[1]||(G[1]=B=>I.value=B),class:"fw-search-input",size:"small",clearable:"",placeholder:s(i)("searchPlaceholder"),onInput:H,onClear:C},{prefix:ne(()=>[h(se,{name:"search",size:14,class:"fw-search-ico"})]),_:1},8,["modelValue","placeholder"])])],10,dS)}}}),hS=xt(vS,[["__scopeId","data-v-ccd8c5b0"]]),mS={class:"fw-shortcut"},gS={class:"fw-shortcut-head"},yS={class:"fw-shortcut-title"},wS=["title"],bS={class:"fw-shortcut-body"},_S={class:"fw-shortcut-group-title"},kS={class:"fw-shortcut-keys"},xS={class:"fw-shortcut-desc"},CS={class:"fw-shortcut-foot"},$S=ht({__name:"ShortcutHelpDialog",setup(t,{expose:e}){const{t:n}=Bt(),i=m(!1),c=L(()=>[{title:n("shortcutGlobal"),items:[{keys:["?"],label:n("shGlobalHelp")}]},{title:n("shortcutFileList"),items:[{keys:["Ctrl","A"],label:n("shListSelectAll")},{keys:["Ctrl","C"],label:n("shListCopy")},{keys:["Ctrl","X"],label:n("shListCut")},{keys:["Ctrl","V"],label:n("shListPaste")},{keys:["Ctrl","F"],label:n("shListFilter")},{keys:["Ctrl","Shift","N"],label:n("shListNewFolder")},{keys:["Delete"],label:n("shListDelete")},{keys:["F2"],label:n("shListRename")},{keys:["F5"],label:n("shListRefresh")},{keys:["Enter"],label:n("shListOpen")},{keys:["↑","↓","Home","End"],label:n("shListMove")},{keys:["Backspace"],label:n("shListUp")},{keys:["Alt","←"],label:n("shListBack")},{keys:["Alt","→"],label:n("shListForward")}]}]);Qe(i,d=>{d?window.addEventListener("keydown",u):window.removeEventListener("keydown",u)});function u(d){d.key==="Escape"&&v()}function v(){i.value=!1}return e({open:()=>i.value=!0}),(d,p)=>(l(),Xe(jc,{to:"body"},[i.value?(l(),r("div",{key:0,class:"fw-shortcut-mask",onMousedown:be(v,["self"])},[o("div",mS,[o("div",gS,[o("span",yS,a(s(n)("shortcutHelp")),1),o("span",{class:"fw-shortcut-close",title:s(n)("closeTab"),onClick:v},"✕",8,wS)]),o("div",bS,[(l(!0),r(oe,null,Ae(c.value,w=>(l(),r("section",{key:w.title,class:"fw-shortcut-group"},[o("h4",_S,a(w.title),1),(l(!0),r(oe,null,Ae(w.items,b=>(l(),r("div",{key:b.keys.join(),class:"fw-shortcut-row"},[o("span",kS,[(l(!0),r(oe,null,Ae(b.keys,x=>(l(),r("kbd",{key:x,class:"fw-shortcut-kbd"},a(x),1))),128))]),o("span",xS,a(b.label),1)]))),128))]))),128))]),o("div",CS,a(s(n)("shortcutHint")),1)])],32)):P("",!0)]))}}),SS=xt($S,[["__scopeId","data-v-f4ba30d1"]]),ES={class:"fw-body"},TS=ht({__name:"App",setup(t){const e=m(null);rr(e);const n=L(()=>{const v=(Ue.fontFamily??"").trim(),d=v&&v!=="default"?v:"",p=Ue.fontSize??13;return{fontFamily:d?`${d}, var(--dsh-font, "Segoe UI", system-ui, sans-serif)`:void 0,fontSize:`${p}px`,"--dsh-fs-scale":String(p/13)}});$s(()=>{const v=Ue.fontSize??13;document.documentElement.style.setProperty("--dsh-fs-scale",String(v/13))});const i=m(null),c=m(null);ln(async()=>{try{await Sh()}catch{}await Lu(),sr(),Nh()&&(await Hu()||await Uu()),window.addEventListener("keydown",u)}),Pt(()=>{window.removeEventListener("keydown",u)});function u(v){if(!v.ctrlKey&&!v.metaKey&&!v.altKey&&v.key==="?"){if(v.target?.closest("input, textarea, select, [contenteditable='true'], .el-input, .el-textarea"))return;v.preventDefault(),c.value?.open()}}return(v,d)=>(l(),r("div",{ref_key:"rootEl",ref:e,class:"fw-root",style:_t(n.value)},[h(hS,{"external-view-active":s(Fe).externalViewActive,onOpenSettings:d[0]||(d[0]=p=>i.value?.open())},null,8,["external-view-active"]),o("div",ES,[h(eS)]),h(sh,{ref_key:"settingsRef",ref:i},null,512),h(Gc),h(SS,{ref_key:"shortcutRef",ref:c},null,512)],4))}}),DS=xt(TS,[["__scopeId","data-v-4a279056"]]);function xd(){return{projectDir:null,recentProjects:[],openTabs:[],activeTab:null,expanded:[],expandedSeeded:[],split:.26,termHeight:260,treeScroll:0,views:{},activityBar:{position:"top",hidden:[]},sidebarSide:"left"}}const ea=10,wc=8;function FS(t){return t<=1?"vscode":`vscode-${t}`}let zn={version:2,recents:[],slots:{}},Ui=null,ls=[];function RS(t){return Array.isArray(t)?[...new Set(t.filter(e=>typeof e=="string"&&e!==""))].slice(0,ea):[]}function NS(t){if(!t||typeof t!="object")return null;const e=t,n={};return typeof e.scrollTop=="number"&&Number.isFinite(e.scrollTop)&&e.scrollTop>=0&&(n.scrollTop=e.scrollTop),typeof e.anchor=="number"&&Number.isFinite(e.anchor)&&e.anchor>=0&&(n.anchor=e.anchor),n.scrollTop===void 0&&n.anchor===void 0?null:n}function bc(t){const e=xd();if(typeof t.projectDir=="string"&&(e.projectDir=t.projectDir),Array.isArray(t.recentProjects)&&(e.recentProjects=[...new Set(t.recentProjects.filter(n=>typeof n=="string"&&n!==""))].slice(0,ea)),Array.isArray(t.openTabs)&&(e.openTabs=t.openTabs.filter(n=>typeof n=="string")),typeof t.activeTab=="string"&&(e.activeTab=t.activeTab),Array.isArray(t.expanded)&&(e.expanded=t.expanded.filter(n=>typeof n=="string")),Array.isArray(t.expandedSeeded)&&(e.expandedSeeded=t.expandedSeeded.filter(n=>typeof n=="string")),typeof t.split=="number"&&t.split>.1&&t.split<.9&&(e.split=t.split),typeof t.termHeight=="number"&&Number.isFinite(t.termHeight)&&t.termHeight>=100&&(e.termHeight=Math.min(1200,t.termHeight)),typeof t.treeScroll=="number"&&Number.isFinite(t.treeScroll)&&t.treeScroll>=0&&(e.treeScroll=t.treeScroll),t.activityBar&&typeof t.activityBar=="object"&&(t.activityBar.position==="top"||t.activityBar.position==="bottom")){const n=t.activityBar;e.activityBar.position=n.position,Array.isArray(n.hidden)&&(e.activityBar.hidden=n.hidden.filter(i=>typeof i=="string"&&i!==""))}if((t.sidebarSide==="left"||t.sidebarSide==="right")&&(e.sidebarSide=t.sidebarSide),t.views&&typeof t.views=="object"){const n={};for(const[i,c]of Object.entries(t.views)){const u=NS(c);u&&(n[i]=u)}e.views=n}return e.activeTab&&!e.openTabs.includes(e.activeTab)&&(e.activeTab=e.openTabs[0]??null),e}function PS(t){if(!t||typeof t!="object")return{version:2,recents:[],slots:{}};const e=t;if(e.version===2&&e.slots&&typeof e.slots=="object"){const n={};for(const[c,u]of Object.entries(e.slots))u&&typeof u=="object"&&(n[c]=bc(u));let i;if(e.recents===void 0){const c=[];for(const u of Object.keys(n).sort((v,d)=>Number(v)-Number(d)))for(const v of n[u]?.recentProjects??[])c.includes(v)||c.push(v);i=c.slice(0,ea)}else i=RS(e.recents);for(const c of Object.values(n))c.recentProjects=[...i];return{version:2,recents:i,slots:n}}if(typeof e.projectDir=="string"||Array.isArray(e.openTabs)){const n=bc(e);return{version:2,recents:[...n.recentProjects],slots:{1:n}}}return{version:2,recents:[],slots:{}}}function AS(){return Ui||(Ui=(async()=>{const t=await lu().catch(()=>null);zn=PS(t?.vscode)})()),Ui}const Tl=new Map,Ra=new Map;function xa(t){ls=[...t];for(const e of Tl.values())e.state.recentProjects=[...ls]}function Cd(t){const e=t||"@default",n=Ra.get(e);if(n!==void 0)return n;const i=new Set(Ra.values());let c=1;for(;i.has(c);)c++;return Ra.set(e,c),c}function mr(t){let e=Tl.get(t);return e||(e=zS(t),Tl.set(t,e)),e}const ei=new Map;function $d(t){let e=ei.get(t);return e||(e=new Map,ei.set(t,e)),e}function Hi(t,e){ei.get(t)?.delete(e)}function MS(t){ei.delete(t)}const Dl=new Map;function _c(t,e){e?Dl.set(t,e):Dl.delete(t)}function OS(t){return Dl.get(t)}const Fl=new Map;function Ca(t,e){e?Fl.set(t,e):Fl.delete(t)}function LS(t){return Fl.get(t)}const Rl=new Map,Nl=new Map;function BS(t,e){let n=Rl.get(t);return n||(n=new Set,Rl.set(t,n)),n.add(e),()=>{n?.delete(e)}}function IS(t,e){let n=Nl.get(t);return n||(n=new Set,Nl.set(t,n)),n.add(e),()=>{n?.delete(e)}}function jS(t,e,n){Rl.get(t)?.forEach(i=>i(e,n))}function VS(t,e){Nl.get(t)?.forEach(n=>n(e))}const bi=Symbol("dsh-file-workbench/vscode-store");function zS(t){const e=gt(xd()),n=m(!1),i=m(null);let c=null,u=null,v=null,d=!1,p=null,w=0;const b={};let x={};function A(){const G=Object.keys(zn.slots).map(Number).filter(F=>Number.isFinite(F)&&F!==t).sort((F,de)=>F-de);for(const F of G){const de=zn.slots[String(F)]?.projectDir;if(de)return de}return null}function I(){const G=Object.keys(zn.slots);if(G.length<=wc)return;const F=new Set([...Ra.values()].map(String));F.add(String(t));const de=G.filter(B=>!F.has(B)).sort((B,ve)=>Number(B)-Number(ve));for(const B of de.slice(0,G.length-wc))delete zn.slots[B]}function M(){for(const G of Object.values(zn.slots))G.recentProjects=[...ls];zn.slots[String(t)]={...e,recentProjects:[...ls],views:{...e.views,...b}},zn.recents=[...ls],I(),Ks("vscode",zn)}function V(){p===null&&(p=setTimeout(()=>{p=null,M()},400))}function H(G){const F=G.trim();F&&(xa([F,...ls.filter(de=>de!==F)].slice(0,ea)),V())}function C(G){xa(ls.filter(F=>F!==G)),M()}function Z(){xa([]),M()}return{slot:t,rootKey:FS(t),state:e,ready:n,projectRequest:i,get tabId(){return c},get panelId(){return u},bindTab(G,F){c=G,u=F},markFresh(){d=!0},init(){return v||(v=(async()=>{if(await AS().catch(()=>{}),ls=[...zn.recents],!d){const G=zn.slots[String(t)];if(G)Object.assign(e,G,{views:{...G.views}});else if(!e.projectDir){const F=A();F&&(e.projectDir=F)}}xa([...new Set([...ls,...e.recentProjects])].slice(0,ea))})()),v},persist:M,persistSoon:V,rememberProject:H,forgetProject:C,clearRecentProjects:Z,fileViewOf(G){return G?b[G]??e.views[G]??{}:{}},rememberFileView(G,F){if(!G)return;const de=b[G];de&&de.scrollTop===F.scrollTop&&de.anchor===F.anchor||(b[G]={...F},V())},stashOpenBuffers(G){x={};for(const[F,de]of Object.entries(G))x[F]={...de}},takeStashedBuffers(){const G=x;return x={},G},requestOpenProject(G){const F=G?.trim();F&&(i.value={dir:F,n:++w})}}}function gr(){return mr(1)}const US={key:0,class:"vs-tree-loading"},HS={key:1,class:"vs-tree-empty"},WS=["onClick","onContextmenu","onDragstart","onDragover","onDragleave","onDrop"],GS=["onClick"],qS={key:0},KS=["title"],XS=["title"],YS=["title"],JS={key:2,class:"vs-loading"},QS={class:"vs-diff-body"},Pl=new Map,ZS=3e4;function e8(t,e){if(!e)return null;const n=Pl.get(t);return n&&n.root===e?n:null}const kc=new Set(["node_modules",".git",".svn",".hg","dist","build","out",".next",".nuxt",".cache","coverage","vendor","target",".venv","venv","__pycache__","bin","obj"]),t8=ht({__name:"ProjectTree",props:{root:{},activePath:{}},emits:["open-file","file-removed","file-renamed","project-missing","remove-project"],setup(t,{expose:e,emit:n}){const i=t,c=n,u=Ul(bi)??gr(),v=u.state,d=u.ready,p=u.rootKey,w=()=>u.persist(),b=()=>u.persistSoon();let x=e8(p,i.root);const A=x?x.nodes:gt({}),I=m(x?x.rootPath:null),M=m(null),V=m(!1);function H(D){const he=i.root;he&&(x={root:he,nodes:A,rootPath:I.value,at:Date.now()},Pl.set(p,x))}function C(){x=null,Pl.delete(p);for(const D of Object.keys(A))delete A[D];I.value=null}let Z=0;const G=3e3;async function F(){const D=i.root;if(!D||!d.value||Date.now()-Z<G)return;Z=Date.now();let he=!0;try{he=await tl(D,{silent:!0})}catch{he=!0}!he&&i.root===D&&(C(),c("project-missing",D))}function de(){F()}ln(()=>window.addEventListener("focus",de)),Pt(()=>window.removeEventListener("focus",de));function B(){x&&(x.at=Date.now())}const ve=L(()=>I.value?A[I.value]??null:null),_e=L(()=>{const D=[],he=ve.value;if(!he)return D;const Be=He=>{if(D.push(He),He.expanded)for(const Pe of He.children){const Ge=A[Pe];Ge&&Be(Ge)}};return Be(he),D});function ke(D,he,Be,He,Pe){return{path:D,name:he,isDir:Be,depth:He,owner:Pe,expanded:!1,loaded:!1,loading:!1,children:[]}}function le(D){return D.replace(/[\\/][^\\/]+$/,"")}function re(D){if(D.isDir)for(const he of D.children){const Be=A[he];!Be||!Be.isDir||!v.expanded.includes(Be.path)||(Be.expanded=!0,Be.loaded?re(Be):Ee(Be))}}async function Ee(D,he=!1){if(D=A[D.path]??D,!D.loading){D.loading=!0,ks(D.path),so(D.path);try{const Pe=(await Ta(D.path,p)).entries.filter(Ge=>!Ge.hidden).sort((Ge,Et)=>Number(Et.isDir)-Number(Ge.isDir)||Ge.name.localeCompare(Et.name,"zh"));D.children=[];for(const Ge of Pe){const Et=A[Ge.path]??ke(Ge.path,Ge.name,Ge.isDir,D.depth+1,D.path);Et.name=Ge.name,Et.isDir=Ge.isDir,Et.depth=D.depth+1,Et.owner=D.path,A[Ge.path]=Et,D.children.push(Ge.path)}D.loaded=!0,B(),re(D)}catch(He){if(D.loading=!1,Yc(He)){he||(await new Promise(Pe=>setTimeout(Pe,150)),await Ee(D,!0));return}if(D.depth===0&&He instanceof Ws&&He.status===404){C(),c("project-missing",D.path);return}X("error",He.message)}finally{D.loading=!1}}}function Ve(D){D.isDir&&(D.expanded=!D.expanded,Ne(D.path,D.expanded),D.expanded&&(D.loaded?re(D):Ee(D)))}function ye(D){D.isDir?Ve(D):c("open-file",D.path)}function Ne(D,he,Be=!0){const He=new Set(v.expanded),Pe=He.has(D);he?He.add(D):He.delete(D),Pe!==he&&(v.expanded=[...He],Be&&Dn())}const W=1,J=20;async function z(D,he,Be){if(!(!D.isDir||he<=0))for(const He of[...D.children]){if(Be.n>=J)return;const Pe=A[He];!Pe||!Pe.isDir||kc.has(Pe.name.toLowerCase())||(Be.n+=1,Pe.expanded=!0,Ne(Pe.path,!0,!1),Pe.loaded?re(Pe):await Ee(Pe),await z(Pe,he-1,Be))}}async function ee(D){D.expanded=!0,Ne(D.path,!0,!1),await z(D,W,{n:0}),v.expandedSeeded.includes(D.path)||(v.expandedSeeded=[...v.expandedSeeded,D.path]),Dn()}function me(){const D=M.value;D&&(v.treeScroll=D.scrollTop,b())}async function je(){await Dt();const D=M.value;D&&(D.scrollTop=v.treeScroll||0)}let Ke=0;async function Ze(){const D=Ke;for(const he of _e.value.filter(Be=>Be.isDir&&Be.loaded).map(Be=>Be.path)){if(D!==Ke)return;const Be=A[he];!Be||Be.loading||await Ee(Be)}B()}async function ge(){const D=++Ke;i.root&&(V.value=!0);try{if(i.root){let $t=!0;try{$t=await tl(i.root)}catch{$t=!0}if(!$t){C(),c("project-missing",i.root);return}}if(x&&i.root&&x.root===i.root&&A[i.root]){I.value=i.root,Date.now()-x.at>ZS?Ze():await je();return}x=null;for(const $t of Object.keys(A))delete A[$t];if(!i.root){I.value=null;return}try{await Gl(i.root,p)}catch{}if(D!==Ke)return;const he=Wt(i.root)?hl(i.root):i.root.split(/[\\/]/).filter(Boolean).pop()??i.root,Be=ke(i.root,he,!0,0,i.root);A[i.root]=Be,I.value=i.root;const He=A[i.root],Pe=i.root.replace(/[\\/]+$/,"").toLowerCase(),Ge=v.expanded.some($t=>{const wn=$t.replace(/[\\/]+$/,"").toLowerCase();return wn===Pe||wn.startsWith(`${Pe}\\`)||wn.startsWith(`${Pe}/`)});if(v.expandedSeeded.includes(i.root)&&Ge)He.expanded=v.expanded.includes(i.root),await Ee(He);else{if(He.expanded=!0,await Ee(He),D!==Ke)return;await ee(He)}if(D!==Ke)return;for(let $t=0;$t<3&&He.expanded&&He.children.length===0;$t+=1){if(await new Promise(wn=>setTimeout(wn,[200,600,1500][$t])),D!==Ke)return;He.loaded=!1,await Ee(He)}if(D!==Ke)return;await je(),H()}finally{D===Ke&&(V.value=!1)}}e({rebuild:ge,createFileAtRoot:Ts,createFolderAtRoot:En}),Qe(()=>[i.root,d.value],()=>{d.value&&ge()},{immediate:!0});const we={"":"",untracked:"?",added:"A",modified:"M",deleted:"D"};function Ye(D){return D.depth===0?"":hd(D.owner,D.name)}function st(D){return we[Ye(D)]}function pe(D){const he=Ye(D);return he==="untracked"?y("gitBadgeUntracked"):he==="added"?y("gitBadgeAdded"):he==="modified"?y("gitBadgeModified"):he==="deleted"?y("gitBadgeDeleted"):""}function Ce(D){return D.depth===0?"":md(D.owner,D.name)}function qe(D){return we[Ce(D)]}function ce(D){const he=Ce(D);return he==="untracked"?y("gitBadgeUntracked"):he==="added"?y("gitBadgeAdded"):he==="modified"?y("gitBadgeModified"):he==="deleted"?y("gitBadgeDeleted"):""}const{cmOpen:Ie,cmX:rt,cmY:yt,openMenu:ut}=pn(),it=m(null),Le=m(!1),U=L(()=>it.value?Le.value?T(it.value):O(it.value):[]);function N(D,he){Le.value=!1,it.value=D;const Be=Te(D);ks(Be),so(Be),ut(he)}function Q(D){const he=i.root?A[i.root]:void 0;he&&(Le.value=!0,it.value=he,ks(he.path),so(he.path),ut(D))}function Te(D){return D.owner||D.path}function O(D){const he=Te(D),Be=[];return Be.push(D.isDir?{label:y("menuOpen"),icon:"folderOpen",onClick:()=>Ve(D)}:{label:y("menuOpen"),icon:"arrowRight",onClick:()=>c("open-file",D.path)}),Be.push({separator:!0}),Be.push({label:y("vsNewFile"),icon:"file",onClick:()=>void cn(D)},{label:y("vsNewFolder"),icon:"folder",onClick:()=>void Bn(D)},{label:y("vsRename"),icon:"edit",onClick:()=>void Gn(D)},{label:y("vsDelete"),icon:"trash",onClick:()=>void Tn(D)}),Be.push(...kl(he,D.path,ze)),Be.push(...xl(he,D.path,ze)),Be.push({separator:!0},{label:y("menuCopyRelPath"),icon:"link",onClick:()=>void Cn(D.path)},{label:y("menuCopyAbsPath"),icon:"link",onClick:()=>void zt(D.path)},{label:y("menuOpenTerminal"),icon:"terminal",onClick:()=>ot(D)},{label:y("vsAddToSession"),icon:"sparkle",onClick:()=>ft(D)},{separator:!0},{label:y("vsRefresh"),icon:"refresh",onClick:()=>void gn(D)}),D.depth===0&&(Be.push({separator:!0}),Be.push({label:y("vsRemoveProject"),icon:"close",onClick:()=>c("remove-project",D.path)})),Be}function T(D){const he=D.path;return[{label:y("vsNewFile"),icon:"file",onClick:()=>void cn(D)},{label:y("vsNewFolder"),icon:"folder",onClick:()=>void Bn(D)},{separator:!0},{label:y("vsExpandAll"),icon:"chevronDown",onClick:()=>void De()},{label:y("vsCollapseAll"),icon:"chevronRight",onClick:K},...kl(he,he,ze),...xl(he,he,ze),{separator:!0},{label:y("menuCopyRelPath"),icon:"link",onClick:()=>void Cn(he)},{label:y("menuCopyAbsPath"),icon:"link",onClick:()=>void zt(he)},{label:y("menuOpenTerminal"),icon:"terminal",onClick:()=>ot(D)},{label:y("vsAddToSession"),icon:"sparkle",onClick:()=>ft(D)},{separator:!0},{label:y("vsRefresh"),icon:"refresh",onClick:()=>void gn(D)},{separator:!0},{label:y("vsRemoveProject"),icon:"close",onClick:()=>c("remove-project",D.path)}]}function K(){const D=i.root?A[i.root]:void 0;if(D){for(const he of Object.values(A))he.expanded=he.depth===0;v.expanded=[D.path],v.expandedSeeded=[...new Set([...v.expandedSeeded,D.path])],Dn()}}const S=120;async function q(){const D=i.root?A[i.root]:void 0;if(!D)return!1;let he=S,Be=!1;const He=async Pe=>{if(he<=0){Be=!0;return}he-=1;const Ge=A[Pe];if(Ge?.isDir){Ge.expanded=!0,Ne(Ge.path,!0,!1),Ge.loaded||await Ee(Ge);for(const Et of[...Ge.children]){const $t=A[Et];if($t?.isDir&&!kc.has($t.name.toLowerCase())&&(await He(Et),he<=0)){Be=!0;return}}}};return await He(D.path),Dn(),Be}async function De(){await q()&&X("info",y("vsExpandAllLimited",{n:String(S)}))}const ie=m(!1),ct=m(!1),wt=m(!1),Ot=m(!1),On=m(""),Gt=m(""),ze={openGitPanel:()=>{Gt.value=it.value?Te(it.value):i.root??"",ie.value=!0},openSvnPanel:()=>{Gt.value=it.value?Te(it.value):i.root??"",ct.value=!0},openCommit:()=>{Gt.value=it.value?Te(it.value):i.root??"",wt.value=!0},showGitDiff:D=>{On.value=D,Ot.value=!0},afterMutate:async D=>{await ks(D),await so(D)}};function Je(D){ie.value=D,D||lt()}function et(D){ct.value=D,D||lt()}async function lt(){xs("git"),xs("svn");const D=new Set([...Object.keys(wi.dirs),...Object.keys(Zo.dirs)]);i.root&&D.add(i.root),await Promise.all([...D].flatMap(he=>[ks(he),so(he)]))}function xn(D){const he=(i.root??"").replace(/[\\/]+$/,"");return he&&D.toLowerCase().startsWith(he.toLowerCase())?D.slice(he.length).replace(/^[\\/]+/,""):D}async function Cn(D){const he=await uc(xn(D));X(he?"ok":"error",y(he?"menuPathCopied":"menuPathCopyFail"))}async function zt(D){const he=await uc(D);X(he?"ok":"error",y(he?"menuPathCopied":"menuPathCopyFail"))}function ot(D){ko(D.isDir?D.path:le(D.path))}function ft(D){(window.__DSH_FILE_WORKBENCH__?.appendSessionReference?.(D.path,D.isDir)??!1)||X("error",y("vsAddToSessionFail"))}function Ct(D){return D.isDir?D:A[le(D.path)]??D}let Ln=null;const $n=m(null);function Jn(D,he){Ln=D.path,he.dataTransfer?.setData("text/plain",D.path),he.dataTransfer&&(he.dataTransfer.effectAllowed="move")}function mn(D,he){!Ln||Ln===D.path||(he.dataTransfer&&(he.dataTransfer.dropEffect="move"),$n.value=D.isDir?D.path:le(D.path))}function Sn(D){const he=D.isDir?D.path:le(D.path);$n.value===he&&($n.value=null)}async function Xs(D,he){const Be=Ln??he.dataTransfer?.getData("text/plain")??"",He=Ct(D).path;if(Ln=null,$n.value=null,!Be||!He)return;const Pe=He.replace(/[\\/]+$/,"");if(Be===He||Pe.startsWith(Be.replace(/[\\/]+$/,"")))return;const Ge=Be.split(/[\\/]/).filter(Boolean).pop()??"";if(!Ge)return;const Et=`${Pe}/${Ge}`;if(Et!==Be)try{await La(Be,Et,p),c("file-renamed",Be,Et);const $t=A[Pe];$t?.isDir&&!$t.expanded&&($t.expanded=!0,Ne(Pe,!0)),await Qn()}catch($t){X("error",$t.message)}}function Ts(){const D=i.root?A[i.root]:void 0;D&&cn(D)}function En(){const D=i.root?A[i.root]:void 0;D&&Bn(D)}async function cn(D){const he=Ct(D),Be=await ds({title:y("vsNewFile"),message:y("vsNewFileName"),placeholder:"untitled.txt",initial:"untitled.txt"})??null;if(!Be)return;const He=`${he.path.replace(/[\\/]+$/,"")}/${Be}`;try{await tu(He,p),await yn(he),c("open-file",He)}catch(Pe){X("error",Pe.message)}}async function Bn(D){const he=Ct(D),Be=await ds({title:y("vsNewFolder"),message:y("vsNewFolderName"),placeholder:"new-folder",initial:"new-folder"})??null;if(!Be)return;const He=`${he.path.replace(/[\\/]+$/,"")}/${Be}`;try{await Oa(He,p),await yn(he)}catch(Pe){X("error",Pe.message)}}async function Gn(D){const he=le(D.path),Be=D.name,He=await ds({title:y("vsRename"),message:y("vsRenameName"),placeholder:Be,initial:Be})??null;if(!He||He===Be)return;const Pe=`${he.replace(/[\\/]+$/,"")}/${He}`;try{await La(D.path,Pe,p),c("file-renamed",D.path,Pe);const Ge=A[he];Ge&&await yn(Ge)}catch(Ge){X("error",Ge.message)}}async function Tn(D){if(!await Mt({title:y("vsDelete"),message:`${y("vsDeleteConfirm")}「${D.name}」？`}))return;const Be=le(D.path);try{if(await el(D.path,p),c("file-removed",D.path),D.depth===0){C(),c("project-missing",D.path);return}const He=A[Be];He&&await yn(He)}catch(He){X("error",He.message)}}async function gn(D){await yn(D.isDir?D:A[le(D.path)]??D)}async function yn(D){xs("list:"),D.loaded=!1,D.expanded=!0,Ne(D.path,!0),await Ee(D)}async function Qn(){xs("list:");const D=ve.value;if(!D)return;const he=new Set,Be=async He=>{if(!he.has(He.path)){he.add(He.path),await Ee(He);for(const Pe of[...He.children]){const Ge=A[Pe];Ge?.isDir&&Ge.expanded&&!Ge.loading&&await Be(Ge)}}};await Be(D),B()}function Dn(){w()}return(D,he)=>{const Be=Mn,He=rn;return l(),r("div",{ref_key:"treeRef",ref:M,class:"vs-tree",onScrollPassive:me,onContextmenu:he[6]||(he[6]=be(Pe=>Q(Pe),["prevent"]))},[i.root&&!ve.value&&V.value?(l(),r("div",US,[he[7]||(he[7]=o("span",{class:"vs-tree-spin","aria-hidden":"true"},null,-1)),ue(a(s(y)("vsTreeLoading")),1)])):ve.value?(l(!0),r(oe,{key:2},Ae(_e.value,Pe=>(l(),r("div",{key:Pe.path,class:te(["vs-tree-row",{"is-active":Pe.path===t.activePath,"drop-target":$n.value===Pe.path}]),style:_t({paddingLeft:Pe.depth*12+6+"px"}),draggable:"true",onClick:be(Ge=>ye(Pe),["stop"]),onContextmenu:be(Ge=>N(Pe,Ge),["prevent","stop"]),onDragstart:Ge=>Jn(Pe,Ge),onDragover:be(Ge=>mn(Pe,Ge),["prevent"]),onDragleave:Ge=>Sn(Pe),onDrop:be(Ge=>Xs(Pe,Ge),["prevent"])},[o("span",{class:"vs-caret",onClick:be(Ge=>Ve(Pe),["stop"])},[Pe.isDir?(l(),r("span",qS,a(Pe.expanded?"▾":"▸"),1)):P("",!0)],8,GS),o("span",{class:te(["vs-ico",Pe.isDir?"ico-dir":"ico-file"])},null,2),o("span",{class:"vs-name",title:Pe.path},a(Pe.name),9,KS),Ye(Pe)?(l(),r("span",{key:0,class:te(["vs-git-badge","st-"+Ye(Pe)]),title:pe(Pe)},a(st(Pe)),11,XS)):Ce(Pe)?(l(),r("span",{key:1,class:te(["vs-git-badge","st-"+Ce(Pe)]),title:ce(Pe)},a(qe(Pe)),11,YS)):P("",!0),Pe.loading?(l(),r("span",JS,"…")):P("",!0)],46,WS))),128)):(l(),r("div",HS,a(s(y)("vsNoProject")),1)),s(Ie)?(l(),Xe(Qt,{key:3,items:U.value,x:s(rt),y:s(yt),onClose:he[0]||(he[0]=Pe=>Ie.value=!1)},null,8,["items","x","y"])):P("",!0),h(He,{modelValue:Ot.value,"onUpdate:modelValue":he[2]||(he[2]=Pe=>Ot.value=Pe),class:"vs-diff-dialog",title:s(y)("gitDiffTitle"),width:"760px","append-to-body":""},{footer:ne(()=>[h(Be,{type:"primary",onClick:he[1]||(he[1]=Pe=>Ot.value=!1)},{default:ne(()=>[ue(a(s(y)("gitDiffClose")),1)]),_:1})]),default:ne(()=>[o("pre",QS,a(On.value||s(y)("gitDiffEmpty")),1)]),_:1},8,["modelValue","title"]),h(gd,{modelValue:wt.value,"onUpdate:modelValue":he[3]||(he[3]=Pe=>wt.value=Pe),dir:Gt.value,onDone:lt},null,8,["modelValue","dir"]),h(bd,{modelValue:ie.value,"onUpdate:modelValue":[he[4]||(he[4]=Pe=>ie.value=Pe),Je],dir:Gt.value},null,8,["modelValue","dir"]),h(_d,{modelValue:ct.value,"onUpdate:modelValue":[he[5]||(he[5]=Pe=>ct.value=Pe),et],dir:Gt.value},null,8,["modelValue","dir"])],544)}}}),n8=xt(t8,[["__scopeId","data-v-71abbe1d"]]),s8={class:"vs-tabs-wrap"},o8=["title"],a8=["title","onClick","onContextmenu"],i8={class:"vs-tab-name"},l8=["title","onClick"],r8={key:2,class:"vs-tab-dot"},c8=["onClick"],u8={key:0,class:"vs-tabs-empty"},d8=["title"],f8=ht({__name:"TabBar",props:{tabs:{},active:{}},emits:["select","close","save","closeSave","closeOthers","closeRight","closeAll"],setup(t,{emit:e}){const n=t,i=e,c=m(null),u=m(!1),v=m(!1),d=m(!1);let p=null;function w(){const F=c.value;F&&(u.value=F.scrollWidth>F.clientWidth+1,v.value=F.scrollLeft>1,d.value=F.scrollLeft+F.clientWidth<F.scrollWidth-1)}function b(F){const de=c.value;de&&de.scrollBy({left:F*Math.max(200,de.clientWidth*.7),behavior:"smooth"})}ln(()=>{p=new ResizeObserver(w),c.value&&p.observe(c.value),w()}),Pt(()=>{p?.disconnect(),p=null}),Qe(()=>n?.tabs?.length,()=>void Dt(w));function x(F){const de=c.value;!de||de.scrollWidth<=de.clientWidth||(F.preventDefault(),de.scrollLeft+=Math.abs(F.deltaX)>Math.abs(F.deltaY)?F.deltaX:F.deltaY)}function A(F){return F.split(/[\\/]/).filter(Boolean).pop()??F}const{cmOpen:I,cmX:M,cmY:V,openMenu:H}=pn(),C=m(null);function Z(F,de){C.value=F,H(de,[])}const G=L(()=>{const F=C.value;if(!F)return[];const B=n.tabs.findIndex(ve=>ve.path===F.path)===n.tabs.length-1;return[{label:y("vsTabClose"),icon:"close",onClick:()=>i("close",F.path)},{label:y("vsTabCloseSave"),icon:"save",onClick:()=>i("closeSave",F.path)},{separator:!0},{label:y("vsTabCloseOthers"),icon:"close",disabled:n.tabs.length<2,onClick:()=>i("closeOthers",F.path)},{label:y("vsTabCloseRight"),icon:"close",disabled:B,onClick:()=>i("closeRight",F.path)},{label:y("vsTabCloseAll"),icon:"close",onClick:()=>i("closeAll")}]});return(F,de)=>(l(),r("div",s8,[o("button",{class:te(["vs-tab-arrow is-left",{dim:!v.value}]),title:s(y)("vsScrollLeft"),onClick:de[0]||(de[0]=B=>b(-1))},[h(se,{name:"chevronLeft",size:13})],10,o8),o("div",{ref_key:"tabsEl",ref:c,class:"vs-tabs",onWheel:x,onScroll:w},[(l(!0),r(oe,null,Ae(t.tabs,B=>(l(),r("div",{key:B.path,class:te(["vs-tab",{"is-active":B.path===t.active}]),title:B.path,onClick:ve=>F.$emit("select",B.path),onContextmenu:be(ve=>Z(B,ve),["prevent","stop"])},[B.icon?(l(),Xe(se,{key:0,name:B.icon,size:12},null,8,["name"])):P("",!0),o("span",i8,a(A(B.path)),1),B.dirty?(l(),r("span",{key:1,class:te(["vs-tab-dirty",{conflict:B.conflict}]),title:B.conflict?s(y)("vsConflictBadge"):"",onClick:be(ve=>F.$emit("save",B.path),["stop"])},null,10,l8)):(l(),r("span",r8)),o("span",{class:"vs-tab-close",onClick:be(ve=>F.$emit("close",B.path),["stop"])},"×",8,c8)],42,a8))),128)),t.tabs.length?P("",!0):(l(),r("div",u8,a(s(y)("vsNoOpenFile")),1)),s(I)?(l(),Xe(Qt,{key:1,items:G.value,x:s(M),y:s(V),onClose:de[1]||(de[1]=B=>I.value=!1)},null,8,["items","x","y"])):P("",!0)],544),o("button",{class:te(["vs-tab-arrow is-right",{dim:!d.value}]),title:s(y)("vsScrollRight"),onClick:de[2]||(de[2]=B=>b(1))},[h(se,{name:"chevronRight",size:13})],10,d8)]))}}),p8=xt(f8,[["__scopeId","data-v-3b8ef924"]]),v8="modulepreload",h8=function(t){return"/api/dsh-file-workbench/"+t},xc={},mt=function(e,n,i){let c=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const v=document.querySelector("meta[property=csp-nonce]"),d=v?.nonce||v?.getAttribute("nonce");c=Promise.allSettled(n.map(p=>{if(p=h8(p),p in xc)return;xc[p]=!0;const w=p.endsWith(".css"),b=w?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${b}`))return;const x=document.createElement("link");if(x.rel=w?"stylesheet":v8,w||(x.as="script"),x.crossOrigin="",x.href=p,d&&x.setAttribute("nonce",d),document.head.appendChild(x),w)return new Promise((A,I)=>{x.addEventListener("load",A),x.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${p}`)))})}))}function u(v){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=v,window.dispatchEvent(d),!d.defaultPrevented)throw v}return c.then(v=>{for(const d of v||[])d.status==="rejected"&&u(d.reason);return e().catch(u)})},m8={ts:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bm),__vite__mapDeps([0,1])).then(t=>[t.javascript({typescript:!0})]),tsx:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bm),__vite__mapDeps([0,1])).then(t=>[t.javascript({typescript:!0,jsx:!0})]),js:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bm),__vite__mapDeps([0,1])).then(t=>[t.javascript()]),jsx:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bm),__vite__mapDeps([0,1])).then(t=>[t.javascript({jsx:!0})]),mjs:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bm),__vite__mapDeps([0,1])).then(t=>[t.javascript()]),cjs:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bm),__vite__mapDeps([0,1])).then(t=>[t.javascript()]),json:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bn),__vite__mapDeps([0,1])).then(t=>[t.json()]),html:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bp),__vite__mapDeps([0,1])).then(t=>[t.html()]),htm:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bp),__vite__mapDeps([0,1])).then(t=>[t.html()]),vue:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bp),__vite__mapDeps([0,1])).then(t=>[t.html()]),css:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bo),__vite__mapDeps([0,1])).then(t=>[t.css()]),scss:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bo),__vite__mapDeps([0,1])).then(t=>[t.css()]),less:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bo),__vite__mapDeps([0,1])).then(t=>[t.css()]),md:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bq),__vite__mapDeps([0,1])).then(t=>[t.markdown()]),markdown:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bq),__vite__mapDeps([0,1])).then(t=>[t.markdown()]),yaml:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.br),__vite__mapDeps([0,1])).then(t=>[t.yaml()]),yml:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.br),__vite__mapDeps([0,1])).then(t=>[t.yaml()]),xml:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bs),__vite__mapDeps([0,1])).then(t=>[t.xml()]),svg:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bs),__vite__mapDeps([0,1])).then(t=>[t.xml()]),py:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bt),__vite__mapDeps([0,1])).then(t=>[t.python()]),sql:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bu),__vite__mapDeps([0,1])).then(t=>[t.sql()]),java:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bv),__vite__mapDeps([0,1])).then(t=>[t.java()]),c:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bw),__vite__mapDeps([0,1])).then(t=>[t.cpp()]),h:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bw),__vite__mapDeps([0,1])).then(t=>[t.cpp()]),cc:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bw),__vite__mapDeps([0,1])).then(t=>[t.cpp()]),cpp:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bw),__vite__mapDeps([0,1])).then(t=>[t.cpp()]),cxx:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bw),__vite__mapDeps([0,1])).then(t=>[t.cpp()]),hpp:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bw),__vite__mapDeps([0,1])).then(t=>[t.cpp()]),rs:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bx),__vite__mapDeps([0,1])).then(t=>[t.rust()]),go:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.by),__vite__mapDeps([0,1])).then(t=>[t.go()]),php:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bz),__vite__mapDeps([0,1])).then(t=>[t.php()]),cs:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bA),__vite__mapDeps([0,1])).then(t=>[Do.define(t.csharp)]),sh:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bB),__vite__mapDeps([0,1])).then(t=>[Do.define(t.shell)]),bash:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bB),__vite__mapDeps([0,1])).then(t=>[Do.define(t.shell)]),zsh:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bB),__vite__mapDeps([0,1])).then(t=>[Do.define(t.shell)]),rb:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bC),__vite__mapDeps([0,1])).then(t=>[Do.define(t.ruby)])},g8={ts:"TypeScript",tsx:"TypeScript JSX",js:"JavaScript",jsx:"JavaScript JSX",mjs:"JavaScript",cjs:"JavaScript",json:"JSON",html:"HTML",htm:"HTML",vue:"Vue",css:"CSS",scss:"SCSS",less:"LESS",md:"Markdown",markdown:"Markdown",yaml:"YAML",yml:"YAML",xml:"XML",svg:"SVG",py:"Python",sql:"SQL",java:"Java",c:"C",h:"C/C++",cc:"C++",cpp:"C++",cxx:"C++",hpp:"C/C++",rs:"Rust",go:"Go",php:"PHP",cs:"C#",sh:"Shell",bash:"Shell",zsh:"Shell",rb:"Ruby",txt:"Plain Text"};function Sd(t){const e=t.lastIndexOf(".");if(e<0)return"";const n=t.slice(e+1).toLowerCase();return n.length>0&&n.length<=10?n:""}async function y8(t){const e=m8[Sd(t)];if(!e)return[];try{return await e()}catch{return[]}}function w8(t){const e=Sd(t);return g8[e]??(e?e.toUpperCase():"Plain Text")}const Cc="dsh-plugin-deco-styles",b8=`
.dsh-deco-error   { text-decoration: underline wavy #f85149; text-decoration-skip-ink: none; }
.dsh-deco-warning { text-decoration: underline wavy #d29922; text-decoration-skip-ink: none; }
.dsh-deco-info    { text-decoration: underline wavy #58a6ff; text-decoration-skip-ink: none; }
.dsh-deco-hint    { text-decoration: underline dotted #8b949e; text-decoration-skip-ink: none; }
.dsh-deco-deprecated { text-decoration: line-through; opacity: .7; }
.dsh-deco-highlight { background: rgba(187,128,9,0.25); }
.dsh-deco-widget { color: var(--dsh-fg-dim, #8b949e); font-style: italic; opacity: .85; padding-left: 8px; }
.cm-gutter-marker { cursor: default; }
.cm-gutter-marker.dsh-deco-bookmark { color: #e3b341; font-weight: 700; }
`;function _8(){if(typeof document>"u"||document.getElementById(Cc))return;const t=document.createElement("style");t.id=Cc,t.textContent=b8,document.head.appendChild(t)}function k8(t){return[t.category?`dsh-deco-${t.category}`:"",t.className].filter(Boolean).join(" ")}function Wi(t,e,n){return Math.max(e,Math.min(n,t))}function Na(t,e,n=!1){if(typeof e.offset=="number")return Wi(e.offset,0,t.length);const i=Wi(e.line??1,1,t.lines),c=t.line(i);return e.character==null?n?c.to:c.from:Wi(c.from+Math.max(0,e.character-1),c.from,c.to)}class yr extends Nf{constructor(e,n,i){super(),this.elementClass=e,this.ch=n,this.tip=i}toDOM(){const e=document.createElement("div");return e.className=this.elementClass,e.textContent=this.ch,this.tip&&(e.title=this.tip),e}eq(e){return e instanceof yr&&this.elementClass===e.elementClass&&this.ch===e.ch&&this.tip===e.tip}}class wr extends Rf{constructor(e){super(),this.text=e}eq(e){return e instanceof wr&&e.text===this.text}toDOM(){const e=document.createElement("span");return e.className="dsh-deco-widget",e.textContent=this.text,e}destroy(){}}const Gi=Ef.define();function $c(t,e){const n=t.doc,i=[];for(const u of e){if(u.type!=="gutter")continue;const v=Na(n,u.start),d=n.lineAt(v),p=`cm-gutter-marker${u.category?` dsh-deco-${u.category}`:""}${u.className?` ${u.className}`:""}`,w=u.category==="bookmark"?"●":u.message?.[0]??"•";i.push({from:d.from,to:d.to,marker:new yr(p.trim(),w,u.message)})}i.sort((u,v)=>u.from-v.from||u.to-v.to);const c=new zc;for(const u of i)c.add(u.from,u.to,u.marker);return c.finish()}function x8(t){_8();let e=t;const n=Tf.fromClass(class{decorations;constructor(c){this.decorations=Sc(c.state.doc,e)}update(c){(c.docChanged||c.viewportChanged||c.transactions.some(u=>u.effects.some(v=>v.is(Gi))))&&(this.decorations=Sc(c.view.state.doc,e))}},{decorations:c=>c.decorations}),i=Df.define({create:c=>$c(c,e),update(c,u){return u.docChanged||u.effects.some(v=>v.is(Gi))?$c(u.state,e):c},provide:c=>Ff.compute([c],u=>u.field(c))});return{extension:[n,i],setItems(c){return e=c??[],Gi.of(null)}}}function Sc(t,e){const n=[];for(const c of e)if(c.type==="mark"){const u=Na(t,c.start),v=c.end?Na(t,c.end):t.lineAt(u).to;if(v<u)continue;n.push({from:u,to:v,deco:Rr.mark({class:k8(c),title:c.message})})}else if(c.type==="widget"){const u=Na(t,c.start,!0);n.push({from:u,to:u,deco:Rr.widget({widget:new wr(c.message??""),side:1})})}n.sort((c,u)=>c.from-u.from||c.to-u.to);const i=new zc;for(const c of n)i.add(c.from,c.to,c.deco);return i.finish()}const Ed="\0",Td="";function Dd(t,e){const n=[];return[t.replace(e,c=>(n.push(c),`${Ed}${n.length-1}${Td}`)),n]}function Al(t,e){return t.replace(new RegExp(`${Ed}(\\d+)${Td}`,"g"),(n,i)=>e[Number(i)]??"")}function C8(t){if(!t.includes("{"))return null;const[e,n]=Dd(t,/\/\*[\s\S]*?\*\/|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g);if(e.includes("/*"))return null;const i=(e.match(/{/g)??[]).length,c=(e.match(/}/g)??[]).length;if(i===0||i!==c)return null;const u=e.replace(/\s+/g," ").replace(/\s*([{};])\s*/g,"$1").trim(),v=[];let d="",p=0;const w=()=>"  ".repeat(p),b=x=>{const A=x.trim();A&&v.push(w()+A)};for(const x of u)if(x==="{")b(`${d} {`),d="",p+=1;else if(x==="}"){if(b(d),p-=1,b("}"),d="",p<0)return null}else x===";"?(b(`${d};`),d=""):x===","?(b(`${d},`),d=""):d+=x;return b(d),p!==0?null:Al(v.join(`
`),n)}const $8=new Set(["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"]);function S8(t,e){if(/<\s*(script|style|pre|textarea)\b/i.test(t))return null;const[n,i]=Dd(t,/<!--[\s\S]*?-->|<!\[CDATA\[[\s\S]*?\]\]>/g);if(n.includes("<!--"))return null;const c=[];let u=0;const v=/<[a-zA-Z!/][^>]*>/g;for(let x=v.exec(n);x;x=v.exec(n))x.index>u&&c.push({text:n.slice(u,x.index)}),c.push({tag:x[0]}),u=x.index+x[0].length;u<n.length&&c.push({text:n.slice(u)});const d=x=>x.replace(/^<\/?/,"").replace(/[\s/>].*$/s,"").toLowerCase(),p=[],w=[],b=(x,A)=>{const I=Al(A,i).replace(/\s+/g," ").trim();I&&p.push("  ".repeat(Math.max(0,x))+I)};for(let x=0;x<c.length;x+=1){const A=c[x];if(A.text!==void 0){A.text.trim()&&b(w.length,A.text);continue}const I=A.tag,M=d(I),V=I.startsWith("</"),H=I.endsWith("/>")||e&&$8.has(M);if(V){if(w.pop()!==M)return null;b(w.length,I);continue}const C=c[x+1],Z=c[x+2];if(!H&&C?.text!==void 0&&Z?.tag!==void 0&&d(Z.tag)===M&&Z.tag.startsWith("</")){const G=`${I}${C.text}${Z.tag}`;if(Al(G,i).replace(/\s+/g," ").trim().length<=80){b(w.length,G),x+=2;continue}}b(w.length,I),H||w.push(M)}return w.length!==0?null:p.join(`
`)}const E8={key:0,class:"vs-find"},T8={class:"vs-find-row"},D8=["placeholder","onKeydown"],F8={class:"vs-find-count"},R8=["title"],N8=["title"],P8=["title"],A8=["title"],M8=["title"],O8=["title"],L8=["title"],B8={key:0,class:"vs-find-row"},I8=["placeholder","onKeydown"],j8=["title"],V8=["title"];let vo=null;const z8=Pf.highest(Af.of([{key:"Mod-f",run:()=>(vo?.openFind(!1),!0)},{key:"Mod-h",run:()=>(vo?.openFind(!0),!0)},{key:"Escape",run:()=>vo?.closeFind()??!1}]));function U8(){const t=document.createElement("div");return t.className="vs-minimap",t}const uo=new Map,Fd=new Set;function H8(t){const e=Cd(t),n=uo.get(e);if(n){try{n.view.destroy()}catch{}uo.delete(e)}Fd.add(e)}typeof window<"u"&&(window.__dshFWDisposeEditorSlotByTabId=H8);const W8=ht({__name:"CodeEditor",props:{path:{},slot:{},initialContent:{},docRev:{},readonly:{type:Boolean},dark:{type:Boolean},initialView:{}},emits:["change","cursor","view","contextmenu"],setup(t,{expose:e,emit:n}){const i=t,c=n;function u(S){c("contextmenu",{x:S.clientX,y:S.clientY})}const v=m(null),d=wf(null),p=new to,w=new to,b=new to,x=new to,A=new to,I=new to;let M=0,V=null;const H=m(!1),C=m(!1),Z=m(""),G=m(""),F=m(!1),de=m(!1),B=m(!1),ve=m(0),_e=m(-1),ke=m(null),le=L(()=>Z.value?ve.value===0?y("vsFindNoMatch"):`${_e.value<0?"?":_e.value}/${ve.value}`:"");function re(){return new Pr({search:Z.value,replace:G.value,caseSensitive:F.value,regexp:de.value,wholeWord:B.value})}function Ee(){const S=d.value;S&&(S.dispatch({effects:Nr.of(re())}),Ve())}function Ve(){const S=d.value;if(!S||!Z.value){ve.value=0,_e.value=-1;return}const q=re(),De=S.state.selection.main.head;let ie=0,ct=-1;const wt=q.getCursor(S.state.doc);for(let Ot=wt.next();!Ot.done;Ot=wt.next())ie+=1,ct<0&&Ot.value.from>=De&&(ct=ie);ct<0&&ie>0&&(ct=1),ve.value=ie,_e.value=ct}function ye(){const S=d.value;S&&Mf(S),Ve()}function Ne(){const S=d.value;S&&Of(S),Ve()}function W(S){S?Ne():ye()}function J(){const S=d.value;S&&Lf(S),Ve()}function z(){const S=d.value;S&&Bf(S),Ve()}function ee(S){S==="case"?F.value=!F.value:S==="re"?de.value=!de.value:B.value=!B.value,Ee()}function me(S){H.value=!0,S&&(C.value=!0);const q=d.value;if(q){const De=q.state.selection.main;if(!De.empty&&De.to-De.from<=200){const ie=q.state.doc.sliceString(De.from,De.to);ie.includes(`
`)||(Z.value=ie)}}Ee(),Dt(()=>ke.value?.select())}function je(){const S=H.value;H.value=!1,C.value=!1,ve.value=0,_e.value=-1;const q=d.value;return q&&S&&q.dispatch({effects:Nr.of(new Pr({search:""}))}),q?.focus(),S}const Ke=i.slot??0,Ze=$d(Ke);function ge(){const S=d.value;S&&c("view",{scrollTop:S.scrollDOM.scrollTop,anchor:S.state.selection.main.head})}function we(S){const q=S;if(q.docChanged&&(c("change",q.state.doc.toString()),i.path&&Ze.set(i.path,q.state),H.value&&Ve(),jS(i.slot??0,q.state.doc.toString(),q.changes)),q.selectionSet||q.docChanged){const De=q.state.selection.main.head,ie=q.state.doc.lineAt(De);c("cursor",ie.number,De-ie.from+1),ge(),VS(i.slot??0,q.state.selection)}}function Ye(){return zf.of({create:()=>({dom:U8()}),displayText:"blocks"})}function st(S){const q=Math.max(0,Math.min(S.length,i.initialView?.anchor??0));return ga.create({doc:S,selection:{anchor:q},extensions:[jf,Vf(),z8,A.of(Ue.vsMinimap?Ye():[]),p.of([]),w.of(i.dark?Ri:[]),b.of(ga.readOnly.of(!!i.readonly)),x.of(eo.editable.of(!i.readonly)),I.of([]),eo.updateListener.of(De=>OS(i.slot??0)?.(De))]})}function pe(S){const q=Ze.get(S);if(q)return q;const De=st(i.initialContent??"");return Ze.set(S,De),De}async function Ce(){const S=M,q=await y8(i.path);S!==M||!d.value||d.value.dispatch({effects:p.reconfigure(q)})}function qe(S){const q=i.initialView?.scrollTop??0;q>0&&requestAnimationFrame(()=>{d.value===S&&(S.scrollDOM.scrollTop=q)})}function ce(S){S.dispatch({effects:[w.reconfigure(i.dark?Ri:[]),b.reconfigure(ga.readOnly.of(!!i.readonly)),x.reconfigure(eo.editable.of(!i.readonly)),A.reconfigure(Ue.vsMinimap?Ye():[])]})}function Ie(){const S=v.value;if(!S)return;const q=uo.get(Ke);if(q&&q.view.dom&&q.path===i.path){const ie=q.view;M++,d.value=ie,Ca(Ke,ie),uo.delete(Ke),S.appendChild(ie.dom),ce(ie),qe(ie),V=()=>ge(),ie.scrollDOM.addEventListener("scroll",V,{passive:!0}),Le(i.path),requestAnimationFrame(()=>{d.value===ie&&ie.requestMeasure()}),Ce();return}if(q){try{q.view.destroy()}catch{}uo.delete(Ke)}M++;const De=new eo({state:pe(i.path),parent:S});d.value=De,Ca(Ke,De),ce(De),qe(De),V=()=>ge(),De.scrollDOM.addEventListener("scroll",V,{passive:!0}),Ce()}function rt(S,q){const De=d.value;if(De){if(S&&S!==q){let ie=!0;try{ie=mr(Ke).state.openTabs.includes(S)}catch{}ie?Ze.set(S,De.state):Ze.delete(S)}M++,De.setState(pe(q)),ce(De),qe(De),Le(q),Ce()}}function yt(){const S=d.value;S&&V&&S.scrollDOM.removeEventListener("scroll",V),V=null}function ut(){d.value?.focus()}const it=new Map;function Le(S){const q=d.value;q&&q.dispatch({effects:I.reconfigure(it.get(S)??[])})}function U(S){i.path&&(it.set(i.path,S),Le(i.path))}const N=new Map;function Q(S){const q=i.path;if(!q)return;const De=d.value;if(!De)return;if(S===null){N.delete(q),it.delete(q),Le(q);return}let ie=N.get(q)??null;if(!ie){ie=x8(S),N.set(q,ie),it.set(q,ie.extension),Le(q);return}De.dispatch({effects:ie.setItems(S)})}function Te(S){const q=d.value;if(!q)return;const De=q.state.doc,ie=De.line(Math.max(1,Math.min(De.lines,S)));q.dispatch({selection:{anchor:ie.from,head:ie.to},effects:eo.scrollIntoView(ie.from,{y:"center"})}),q.focus(),requestAnimationFrame(()=>{const ct=q.domAtPos(ie.from).node,wt=ct instanceof HTMLElement?ct.closest?.(".cm-line"):null;wt&&(wt.classList.add("cm-flash-line"),window.setTimeout(()=>wt.classList.remove("cm-flash-line"),1200))})}function O(S){if(i.path.slice(i.path.lastIndexOf(".")).toLowerCase()!==".json")return null;try{return JSON.stringify(JSON.parse(S),null,2)}catch{return null}}function T(S){return[".css",".scss",".less"].includes(S)?C8:[".html",".htm",".xhtml",".xml",".svg",".vue"].includes(S)?q=>S8(q,S!==".xml"&&S!==".svg"):null}function K(){const S=d.value;if(!S||i.readonly)return!1;const q=S.state.doc.toString(),De=i.path.slice(i.path.lastIndexOf(".")).toLowerCase();if(De===".json"){const ie=O(q);if(ie!==null)return ie===q||S.dispatch({changes:{from:0,to:q.length,insert:ie}}),!0}else{const ie=T(De)?.(q);if(ie!=null)return ie===q||S.dispatch({changes:{from:0,to:q.length,insert:ie}}),!0}return S.dispatch({selection:{anchor:0,head:q.length}}),If(S),!0}return e({focus:ut,format:K,revealLine:Te,openFind:me,setExtension:U,setDecorationsSpec:Q}),ln(()=>{_c(i.slot??0,we),vo={openFind:S=>me(S),closeFind:()=>je()},Ie()}),Pt(()=>{if(_c(Ke,null),vo&&(vo=null),yt(),Fd.has(Ke)){d.value?.destroy(),d.value=null,Ca(Ke,null);return}d.value&&uo.set(Ke,{view:d.value,path:i.path}),Ca(Ke,null),d.value=null}),Qe(()=>i.path,(S,q)=>{S&&(q&&q!==S?rt(q,S):q||Ie())}),Qe(()=>i.docRev,()=>{if(!i.path)return;Ze.delete(i.path);const S=d.value;S&&(M++,S.setState(st(i.initialContent??"")),qe(S),Ce())}),Qe(()=>i.readonly,()=>{d.value?.dispatch({effects:[b.reconfigure(ga.readOnly.of(!!i.readonly)),x.reconfigure(eo.editable.of(!i.readonly))]})}),Qe(()=>i.dark,()=>{d.value?.dispatch({effects:w.reconfigure(i.dark?Ri:[])})}),Qe(()=>Ue.vsMinimap,()=>{d.value?.dispatch({effects:A.reconfigure(Ue.vsMinimap?Ye():[])})}),(S,q)=>(l(),r("div",{class:"vs-ce-root",onContextmenu:be(u,["prevent","stop"])},[o("div",{ref_key:"hostRef",ref:v,class:"vs-code-editor"},null,512),H.value?(l(),r("div",E8,[o("div",T8,[kt(o("input",{ref_key:"findInputRef",ref:ke,"onUpdate:modelValue":q[0]||(q[0]=De=>Z.value=De),class:"vs-find-input",placeholder:s(y)("vsFindPlaceholder"),onInput:Ee,onKeydown:[q[1]||(q[1]=bt(be(De=>W(De.shiftKey),["prevent"]),["enter"])),bt(be(je,["prevent"]),["esc"])]},null,40,D8),[[Lt,Z.value]]),o("span",F8,a(le.value),1),o("button",{class:te(["vs-find-btn",{on:F.value}]),title:s(y)("vsGrepCase"),onClick:q[2]||(q[2]=De=>ee("case"))},"Aa",10,R8),o("button",{class:te(["vs-find-btn",{on:de.value}]),title:s(y)("vsGrepRegex"),onClick:q[3]||(q[3]=De=>ee("re"))},".*",10,N8),o("button",{class:te(["vs-find-btn",{on:B.value}]),title:s(y)("vsFindWord"),onClick:q[4]||(q[4]=De=>ee("word"))},"|w|",10,P8),q[7]||(q[7]=o("span",{class:"vs-find-vsep"},null,-1)),o("button",{class:"vs-find-btn",title:s(y)("vsFindPrev"),onClick:Ne},"↑",8,A8),o("button",{class:"vs-find-btn",title:s(y)("vsFindNext"),onClick:ye},"↓",8,M8),o("button",{class:te(["vs-find-btn",{on:C.value}]),title:s(y)("vsFindToggleReplace"),onClick:q[5]||(q[5]=De=>C.value=!C.value)},"⇅",10,O8),o("button",{class:"vs-find-btn",title:s(y)("vsFindClose"),onClick:je},"×",8,L8)]),C.value?(l(),r("div",B8,[kt(o("input",{"onUpdate:modelValue":q[6]||(q[6]=De=>G.value=De),class:"vs-find-input",placeholder:s(y)("vsReplacePlaceholder"),onKeydown:[bt(be(J,["prevent"]),["enter"]),bt(be(je,["prevent"]),["esc"])]},null,40,I8),[[Lt,G.value]]),o("button",{class:"vs-find-btn",title:s(y)("vsFindReplace"),onClick:J},"⏎",8,j8),o("button",{class:"vs-find-btn",title:s(y)("vsFindReplaceAll"),onClick:z},"≡",8,V8)])):P("",!0)])):P("",!0)],32))}}),G8=xt(W8,[["__scopeId","data-v-2301eccb"]]),q8={class:"fsp"},K8={class:"fsp-bar"},X8=["title"],Y8=["disabled"],J8=["disabled"],Q8={key:0,class:"fsp-newrow"},Z8=["placeholder"],e6=["disabled"],t6={key:1,class:"fsp-error"},n6={class:"fsp-main"},s6={class:"fsp-side"},o6={class:"fsp-group"},a6={class:"fsp-group-title"},i6=["title","onClick"],l6={class:"fsp-side-name"},r6={key:0,class:"fsp-side-empty"},c6={class:"fsp-group"},u6={class:"fsp-group-title"},d6=["title","onClick"],f6={class:"fsp-side-name"},p6={key:0,class:"fsp-side-empty"},v6={key:0,class:"fsp-group"},h6={class:"fsp-group-title"},m6=["title","onClick"],g6=["title"],y6={class:"fsp-side-name"},w6={class:"fsp-content"},b6={key:0,class:"fsp-crumbs"},_6={key:0,class:"fsp-sep"},k6=["onClick"],x6={class:"fsp-list"},C6={key:0,class:"fsp-loading"},$6={key:1,class:"fsp-error"},S6=["onClick","onDblclick"],E6={class:"fsp-name"},T6={key:0,class:"fsp-empty"},D6={key:2,class:"fsp-namerow"},F6={class:"fsp-namelabel"},R6=["placeholder"],N6=["title"],P6={value:""},A6=["value"],M6={key:4,class:"fsp-manual"},O6=["placeholder"],L6=["disabled"],B6={class:"fsp-foot"},I6={class:"fsp-hint"},j6=["disabled"],V6=["disabled","title"],qi="vscode",ti=ht({__name:"PathPickerDialog",props:{modelValue:{type:Boolean},mode:{},initialDir:{},initialName:{}},emits:["update:modelValue","confirm"],setup(t,{emit:e}){const n=t,i=e,c=L({get:()=>n.modelValue,set:O=>i("update:modelValue",O)}),u=L(()=>n.mode==="file"),v=L(()=>u.value?y("vsSaveAsTitle"):y("vsPickFolderTitle")),d=m(null),p=m(!1),w=m(void 0),b=m(""),x=m(!1),A=m(""),I=m(null),M=m(!1),V=m(void 0),H=m(""),C=m(""),Z=m(null),G=m([]),F=L(()=>d.value?.crumbs??[]),de=L(()=>d.value?.entries??[]),B=L(()=>d.value?.path||null),ve=L(()=>{const O=de.value;return!u.value||!C.value?O:O.filter(T=>T.isDir||T.name.toLowerCase().endsWith(C.value))}),_e=L(()=>{const O=n.initialName??"",T=O.lastIndexOf(".");return T>0?O.slice(T).toLowerCase():""}),ke=L(()=>{const O=H.value.trim().toLowerCase();return O?de.value.some(T=>!T.isDir&&T.name.toLowerCase()===O):!1}),le=L(()=>{const O=H.value.trim();return O?ee(O)?O:me(B.value,O):""}),re=L(()=>{const O=H.value.trim();return!O||/[\\/]$/.test(O)?!1:ee(O)||!!B.value}),Ee=L(()=>G.value.filter(O=>O.type==="drive")),Ve=new Set(["pictures","music","videos","gallery"]),ye=L(()=>G.value.filter(O=>O.type!=="drive"&&O.type!=="recycle"&&!Ve.has(O.type)&&!!O.path));function Ne(O){const T=Ha(O.id),K=T==="online"?y("sshStatusOnline"):T==="offline"?y("sshStatusOffline"):"",S=T==="offline"?fl(O.id):"";return K&&S?`${K}：${S}`:K||`${O.user}@${O.host}:${O.port||22}`}function W(O){switch(O.type){case"drive":return nd(O);case"home":return y("navHome");case"desktop":return y("desktopEntry");case"download":return y("downloadEntry");case"documents":return y("documentEntry");case"pictures":return y("pictureEntry");case"music":return y("musicEntry");case"videos":return y("videoEntry");case"gallery":return y("navGallery");case"workspace":return y("workspaceEntry");default:return O.name}}function J(O){switch(O.type){case"home":return"ico-home";case"desktop":return"ico-desktop";case"download":return"ico-download";case"documents":return"ico-doc";case"pictures":case"gallery":return"ico-pic";case"music":return"ico-music";case"videos":return"ico-video";case"workspace":return"ico-folder";default:return"ico-dir"}}function z(){return window.__DSH_FILE_WORKBENCH__}function ee(O){return/^[a-zA-Z]:[\\/]/.test(O)||O.startsWith("/")||O.startsWith("\\\\")||Wt(O)}function me(O,T){if(!O)return T;if(Wt(O))return sc(O,T);const K=O.includes("\\")?"\\":"/";return`${O.replace(/[\\/]+$/,"")}${K}${T}`}const je=L(()=>!!B.value&&Wt(B.value)),Ke=L(()=>je.value?!0:F.value.length>=2);function Ze(O){const T=O.replace(/\\/g,"/").replace(/\/+$/,"");if(!T)return[];const K=/^[A-Za-z]:/.test(T),S=T.split("/").filter(Boolean),q=[];if(K){const ie=S.shift();q.push({name:ie,path:`${ie}/`,hidden:!1})}let De=K?`${q[0].path.replace(/\/$/,"")}`:"";for(const ie of S)De=`${De}/${ie}`,q.push({name:ie,path:De,hidden:!1});return q}async function ge(){const O=await Zc();return{path:"",home:"",crumbs:[],entries:(O.drives??[]).map(T=>({name:js(T),path:T.path,hidden:!1,isDir:!0}))}}async function we(O){if(!O)return await ge();const T=await Ta(O);return{path:O,home:"",crumbs:Ze(O),entries:(T.entries??[]).filter(K=>K.isDir&&!K.hidden).sort((K,S)=>K.name.localeCompare(S.name,"zh")).map(K=>({name:K.name,path:K.path,hidden:!!K.hidden,isDir:!0}))}}async function Ye(O){if(!O)return await ge();const K=((await Ta(O)).entries??[]).map(S=>({name:S.name,path:S.path,hidden:!!S.hidden,isDir:!!S.isDir})).sort((S,q)=>S.isDir===q.isDir?S.name.localeCompare(q.name,"zh"):S.isDir?-1:1);return{path:O,home:"",crumbs:Ze(O),entries:K}}async function st(O){const K=((await Ta(O,qi)).entries??[]).filter(q=>(u.value?!0:q.isDir)&&!q.hidden).sort((q,De)=>u.value&&q.isDir!==De.isDir?Number(De.isDir)-Number(q.isDir):q.name.localeCompare(De.name,"zh")).map(q=>({name:q.name,path:q.path,hidden:!!q.hidden,isDir:!!q.isDir})),S=(Pu(O)??[{name:O,path:O}]).map(q=>({name:q.name,path:q.path,hidden:!1}));return{path:O,home:"",crumbs:S,entries:K}}async function pe(O){p.value=!0,w.value=void 0,I.value=null;try{if(O&&Wt(O)){d.value=await st(O);return}if(u.value){d.value=await Ye(O);return}const T=z();if(T?.listDirectory){const K=await T.listDirectory(O);d.value={path:K.path,home:K.home,crumbs:K.crumbs??[],entries:(K.entries??[]).map(S=>({name:S.name,path:S.path,hidden:!!S.hidden,isDir:!0}))};return}d.value=await we(O)}catch(T){d.value=null,w.value=T.message}finally{p.value=!1}}function Ce(O){!O||O===B.value||pe(O)}function qe(O){I.value=O.path,u.value&&!O.isDir&&(H.value=O.name)}function ce(O){if(O.isDir){if(O.path===B.value)return;pe(O.path);return}u.value&&(H.value=O.name,Le())}function Ie(O){O!==B.value&&pe(O===""?void 0:O)}function rt(){const O=B.value;if(!O)return;if(Wt(O)){const S=Ga(O);pe(S||void 0);return}const T=F.value;if(T.length<2)return;const K=T[T.length-2];pe(K.hidden?void 0:K.path)}function yt(){x.value=!x.value,V.value=void 0,x.value&&(A.value="")}async function ut(){const O=A.value.trim(),T=B.value;if(!(!O||!T)){M.value=!0,V.value=void 0;try{const K=z();Wt(T)?await Oa(sc(T,O),qi):K?.createDirectory?await K.createDirectory(T,O):await Oa(`${T.replace(/[\\/]+$/,"")}/${O}`),x.value=!1,A.value="",await pe(T)}catch(K){V.value=K.message}finally{M.value=!1}}}function it(){const O=I.value||B.value;O&&(i("confirm",O),c.value=!1)}function Le(){if(!re.value)return;const O=le.value;O&&(i("confirm",O),c.value=!1)}function U(){const O=b.value.trim();O&&(i("confirm",O),c.value=!1)}async function N(){Hs();try{const O=await Qc(qi);G.value=O.items??[]}catch{G.value=[]}}function Q(){w.value=void 0,V.value=void 0,x.value=!1,A.value="",b.value=n.initialDir??"",H.value=n.initialName??"",C.value="",N(),pe(n.initialDir||void 0),u.value&&Dt(()=>{const O=Z.value;O&&(O.focus(),O.setSelectionRange(0,_e.value?O.value.length-_e.value.length:O.value.length))})}function Te(){d.value=null,b.value="",H.value="",C.value=""}return(O,T)=>{const K=rn;return l(),Xe(K,{modelValue:c.value,"onUpdate:modelValue":T[7]||(T[7]=S=>c.value=S),title:v.value,width:"720px","append-to-body":"",class:"fsp-dialog",onOpen:Q,onClosed:Te},{footer:ne(()=>[o("div",B6,[o("span",I6,a(u.value?s(y)("vsSaveAsHint"):s(y)("vsPickEnterHint")),1),T[10]||(T[10]=o("span",{class:"fsp-foot-spacer"},null,-1)),o("button",{class:"fsp-btn",onClick:T[6]||(T[6]=S=>c.value=!1)},a(s(y)("vsCancel")),1),u.value?(l(),r("button",{key:0,class:"fsp-btn primary",disabled:!re.value,onClick:Le},a(s(y)("vsSave")),9,j6)):(l(),r("button",{key:1,class:"fsp-btn primary",disabled:!I.value&&!B.value||p.value,title:I.value||B.value||void 0,onClick:it},a(s(y)("vsPickConfirm")),9,V6))])]),default:ne(()=>[o("div",q8,[o("div",K8,[o("div",{class:"fsp-path",title:B.value||void 0},a(B.value||s(y)("vsComputer")),9,X8),o("button",{class:"fsp-btn sm",disabled:p.value||!Ke.value,onClick:rt},a(s(y)("vsUp")),9,Y8),o("button",{class:"fsp-btn sm",disabled:p.value||!B.value,onClick:yt},a(s(y)("vsNewFolderBtn")),9,J8)]),x.value?(l(),r("div",Q8,[kt(o("input",{"onUpdate:modelValue":T[0]||(T[0]=S=>A.value=S),class:"fsp-input",placeholder:s(y)("vsNewFolderName"),onKeyup:[bt(ut,["enter"]),T[1]||(T[1]=bt(S=>x.value=!1,["esc"]))]},null,40,Z8),[[Lt,A.value]]),o("button",{class:"fsp-btn primary sm",disabled:M.value||!A.value.trim(),onClick:ut},a(s(y)("confirmOk")),9,e6),o("button",{class:"fsp-btn sm",onClick:T[2]||(T[2]=S=>x.value=!1)},a(s(y)("vsCancel")),1)])):P("",!0),V.value?(l(),r("div",t6,a(V.value),1)):P("",!0),o("div",n6,[o("div",s6,[o("div",o6,[o("div",a6,a(s(y)("myComputer")),1),(l(!0),r(oe,null,Ae(Ee.value,S=>(l(),r("div",{key:S.path,class:te(["fsp-side-row",{active:S.path===B.value}]),title:S.path,onClick:q=>Ce(S.path)},[T[8]||(T[8]=o("span",{class:"fsp-ico ico-drive"},null,-1)),o("span",l6,a(W(S)),1)],10,i6))),128)),Ee.value.length===0?(l(),r("div",r6,a(s(y)("vsLoading")),1)):P("",!0)]),o("div",c6,[o("div",u6,a(s(y)("vsQuickAccess")),1),(l(!0),r(oe,null,Ae(ye.value,S=>(l(),r("div",{key:S.type+S.path,class:te(["fsp-side-row",{active:S.path===B.value}]),title:S.path,onClick:q=>Ce(S.path)},[o("span",{class:te(["fsp-ico",J(S)])},null,2),o("span",f6,a(W(S)),1)],10,d6))),128)),ye.value.length===0?(l(),r("div",p6,a(s(y)("vsEmptyDir")),1)):P("",!0)]),s(an).length>0?(l(),r("div",v6,[o("div",h6,a(s(y)("sshNavGroup")),1),(l(!0),r(oe,null,Ae(s(an),S=>(l(),r("div",{key:S.id,class:te(["fsp-side-row",{active:s(zs)(S.id)===B.value}]),title:`${S.user}@${S.host}:${S.port||22}`,onClick:q=>Ce(s(zs)(S.id))},[o("span",{class:te(["fsp-dot",`dot-${s(Ha)(S.id)}`]),title:Ne(S)},null,10,g6),T[9]||(T[9]=o("span",{class:"fsp-ico ico-globe"},null,-1)),o("span",y6,a(S.name||`${S.user}@${S.host}`),1)],10,m6))),128))])):P("",!0)]),o("div",w6,[F.value.length>1?(l(),r("div",b6,[(l(!0),r(oe,null,Ae(F.value,(S,q)=>(l(),r(oe,{key:S.path+"#"+q},[q>0?(l(),r("span",_6,"›")):P("",!0),o("span",{class:te(["fsp-crumb",{active:q===F.value.length-1}]),onClick:De=>Ie(S.path)},a(S.name),11,k6)],64))),128))])):P("",!0),o("div",x6,[p.value?(l(),r("div",C6,a(s(y)("vsLoading")),1)):w.value?(l(),r("div",$6,a(w.value),1)):(l(),r(oe,{key:2},[(l(!0),r(oe,null,Ae(ve.value,S=>(l(),r("div",{key:S.path,class:te(["fsp-row",{dim:S.hidden,selected:S.path===I.value}]),onClick:q=>qe(S),onDblclick:q=>ce(S)},[o("span",{class:te(["fsp-ico",S.isDir?"ico-dir":"ico-file"])},null,2),o("span",E6,a(S.name),1)],42,S6))),128)),ve.value.length===0?(l(),r("div",T6,a(s(y)("vsEmptyDir")),1)):P("",!0)],64))])])]),u.value?(l(),r("div",D6,[o("span",F6,a(s(y)("vsFileName")),1),kt(o("input",{ref_key:"nameInputRef",ref:Z,"onUpdate:modelValue":T[3]||(T[3]=S=>H.value=S),class:"fsp-input",placeholder:s(y)("vsFileNamePlaceholder"),onKeyup:bt(Le,["enter"])},null,40,R6),[[Lt,H.value]]),kt(o("select",{"onUpdate:modelValue":T[4]||(T[4]=S=>C.value=S),class:"fsp-input fsp-select",title:s(y)("vsFileType")},[o("option",P6,a(s(y)("vsFilterAll")),1),_e.value?(l(),r("option",{key:0,value:_e.value},a(s(y)("vsFilterExt",{ext:_e.value})),9,A6)):P("",!0)],8,N6),[[bf,C.value]])])):P("",!0),u.value?(l(),r("div",{key:3,class:te(["fsp-hintline",{warn:ke.value}])},[ke.value?(l(),r(oe,{key:0},[ue(a(s(y)("vsSaveAsExists")),1)],64)):(l(),r(oe,{key:1},[ue(a(le.value||s(y)("vsSaveAsHint")),1)],64))],2)):P("",!0),u.value?P("",!0):(l(),r("div",M6,[kt(o("input",{"onUpdate:modelValue":T[5]||(T[5]=S=>b.value=S),class:"fsp-input",placeholder:s(y)("vsFolderPath"),onKeyup:bt(U,["enter"])},null,40,O6),[[Lt,b.value]]),o("button",{class:"fsp-btn sm",disabled:!b.value.trim(),onClick:U},a(s(y)("vsPickInput")),9,L6)]))])]),_:1},8,["modelValue","title"])}}}),z6={key:0,class:"vs-gitbar"},U6={class:"vs-gitbar-head"},H6=["title"],W6={class:"vs-gitbar-title"},G6={key:0,class:"vs-gitbar-count"},q6=["title"],K6={class:"vs-gitbar-list"},X6={key:0,class:"vs-gitbar-empty"},Y6={key:1,class:"vs-gitbar-empty"},J6=["title","onClick"],Q6=["width"],Z6=["x1","x2","stroke"],eE=["x1","x2","y2","stroke"],tE=["x1","y1","x2","stroke"],nE=["d","stroke"],sE=["cx","cy","r","fill","stroke"],oE={key:1,class:"vs-gitbar-dot","aria-hidden":"true"},aE={class:"vs-gitbar-subject"},iE={key:2,class:"vs-gitbar-refs"},lE={class:"vs-gitbar-meta"},rE={key:0,class:"vs-gitbar-files"},cE={key:0,class:"vs-gitbar-empty"},uE={key:0,class:"vs-gitbar-empty"},dE=["title"],fE={class:"name"},pE={class:"dir"},vE=["title","onClick"],is=24,Bs=6,hE=ht({__name:"VSGitBar",emits:["open-diff"],setup(t,{emit:e}){const n=Ul(bi)??gr(),i=m(null),c=L(()=>i.value!==null),u=m(""),v=m(""),d=m([]),p=m(!1);function w(W){return W*Cs+Cs/2}function b(W,J){const z=is/2,ee=is*.82;return`M ${w(W)} ${z} C ${w(W)} ${ee}, ${w(J)} ${ee}, ${w(J)} ${is}`}function x(W){return W.commit.refs.some(J=>J.kind==="head")}const A=L(()=>i.value==="git"?wd(d.value).map(W=>({commit:W.commit,graph:W})):d.value.map(W=>({commit:W}))),I=m(""),M=gt({}),V=gt({});function H(W){return M[W]??[]}function C(W){const J=Math.max(W.lastIndexOf("/"),W.lastIndexOf("\\"));return J>=0?W.slice(J+1):W}function Z(W){const J=Math.max(W.lastIndexOf("/"),W.lastIndexOf("\\"));return J>=0?W.slice(0,J):""}function G(W){if(I.value===W.hash){I.value="";return}I.value=W.hash,ye(W)}const F=e;async function de(W,J){let z=[];try{if(i.value==="git"){const ee=await Bo(u.value,["show","--no-color","--format=",W.hash,"--",J.path]);z=ee.code===0&&ee.stdout.trim()?ee.stdout.split(`
`):[]}else z=await B(W.hash,J.path)}catch{z=[]}F("open-diff",{title:`${C(J.path)} · ${W.short}`,lines:z})}async function B(W,J){const z=W.replace(/^r/,""),ee=await Jt(u.value,["diff","-c",z,"--","^"+J]);return ee.code===0&&ee.stdout.trim()?ee.stdout.split(`
`):[]}async function ve(W){if(!(M[W.hash]||V[W.hash])){V[W.hash]=!0;try{const J=await Bo(u.value,["diff-tree","--no-commit-id","--name-status","-r","--root",W.hash]);M[W.hash]=J.code===0?_e(J.stdout):[]}catch{M[W.hash]=[]}finally{V[W.hash]=!1}}}function _e(W){const J=[];for(const z of W.split(`
`)){if(!z.trim())continue;const ee=z.split("	");ee.length<2||J.push({status:ee[0][0]??"?",path:ee[ee.length-1]})}return J}function ke(W){const J=[];try{new DOMParser().parseFromString(W,"application/xml").querySelectorAll("logentry").forEach(ee=>{const me=[];ee.querySelectorAll("paths > path").forEach(we=>{const Ye=we.getAttribute("action"),st=we.textContent;st&&me.push({status:Ye??"",path:st})});const je="r"+(ee.getAttribute("revision")??""),Ke=ee.querySelector("author")?.textContent??"—",Ze=ee.querySelector("date")?.textContent??"",ge=ee.querySelector("msg")?.textContent??"";M[je]=me,J.push({hash:je,short:je,author:Ke,email:"",ts:Ze?Math.floor(new Date(Ze).getTime()/1e3):0,date:Ze?new Date(Ze).toLocaleString():"",subject:(ge.split(`
`)[0]??"").trim()||je,parents:[],refs:[]})})}catch{}return J}let le=0;async function re(){if(!i.value||!u.value)return;const W=++le,J=i.value,z=u.value;p.value=!0;try{if(J==="git"){const ee=await Bo(z,["log","--max-count=30",`--pretty=format:${$l}`]);if(W!==le)return;d.value=ee.code===0?Sl(ee.stdout):[]}else{const ee=await Jt(z,["log","--xml","-v","-l","30"]);if(W!==le)return;d.value=ee.code===0?ke(ee.stdout):[]}}catch{if(W!==le)return;d.value=[]}finally{W===le&&(p.value=!1)}}let Ee=0;async function Ve(){const W=++Ee,J=n.state.projectDir;if(!J||!di(J)){i.value=null,d.value=[];return}p.value=!0,I.value="",d.value=[];for(const z of Object.keys(M))delete M[z];try{const z=await Wo(J);if(W!==Ee)return;if(z.inRepo&&z.repo)i.value="git",u.value=z.repo,v.value=z.branch||"HEAD";else{const ee=await ps(J);if(W!==Ee)return;ee.inRepo&&ee.root&&ee.svnAvailable?(i.value="svn",u.value=ee.root,v.value=ee.revision?"r"+ee.revision:"svn"):(i.value=null,d.value=[])}}catch{if(W!==Ee)return;i.value=null,d.value=[]}finally{W===Ee&&(p.value=!1)}i.value&&re()}async function ye(W){if(i.value==="git")return ve(W)}Qe(()=>n.state.projectDir,()=>{Ve()},{immediate:!0});async function Ne(){xs("git"),xs("svn"),await Ve(),i.value&&re()}return(W,J)=>c.value?(l(),r("div",z6,[o("div",U6,[h(se,{name:i.value==="svn"?"clock":"git",size:12},null,8,["name"]),o("span",{class:te(["vs-gitbar-branch",{detached:i.value==="svn"}]),title:u.value},a(v.value),11,H6),o("span",W6,a(i.value==="svn"?"SVN · "+s(y)("vsGitHistory"):s(y)("vsGitHistory")),1),d.value.length?(l(),r("span",G6,a(d.value.length),1)):P("",!0),J[0]||(J[0]=o("span",{class:"vs-gitbar-fill"},null,-1)),o("button",{class:"vs-gitbar-act",title:s(y)("vsGitRefresh"),onClick:Ne},[h(se,{name:"refresh",size:12,class:te({spin:p.value})},null,8,["class"])],8,q6)]),o("div",K6,[p.value&&!A.value.length?(l(),r("div",X6,a(s(y)("vsLoading")),1)):A.value.length?(l(!0),r(oe,{key:2},Ae(A.value,z=>(l(),r(oe,{key:z.commit.hash},[o("div",{class:te(["vs-gitbar-row",{open:I.value===z.commit.hash}]),title:z.commit.subject,onClick:ee=>G(z.commit)},[z.graph?(l(),r("span",{key:0,class:"vs-gitbar-lanes",style:_t({width:`${Math.min(z.graph.width,Bs)*s(Cs)}px`})},[(l(),r("svg",{width:Math.min(z.graph.width,Bs)*s(Cs),height:is,"aria-hidden":"true"},[(l(!0),r(oe,null,Ae(z.graph.through.filter(ee=>ee.lane<Bs),(ee,me)=>(l(),r("line",{key:"t"+me,x1:w(ee.lane),y1:0,x2:w(ee.lane),y2:is,stroke:s(Xn)(ee.color)},null,8,Z6))),128)),z.graph.topLine&&z.graph.lane<Bs?(l(),r("line",{key:0,x1:w(z.graph.lane),y1:0,x2:w(z.graph.lane),y2:is/2,stroke:s(Xn)(z.graph.laneColor)},null,8,eE)):P("",!0),(l(!0),r(oe,null,Ae(z.graph.bends.filter(ee=>ee.from<Bs&&ee.to<Bs),(ee,me)=>(l(),r(oe,{key:"b"+me},[ee.from===ee.to?(l(),r("line",{key:0,x1:w(ee.from),y1:is/2,x2:w(ee.to),y2:is,stroke:s(Xn)(ee.color)},null,8,tE)):(l(),r("path",{key:1,d:b(ee.from,ee.to),fill:"none",stroke:s(Xn)(ee.color)},null,8,nE))],64))),128)),z.graph.lane<Bs?(l(),r("circle",{key:1,cx:w(z.graph.lane),cy:is/2,r:x(z.graph)?4:3,fill:s(Xn)(z.graph.laneColor),stroke:x(z.graph)?"var(--dsh-bg, #0d1117)":"none","stroke-width":"1.5"},null,8,sE)):P("",!0)],8,Q6))],4)):(l(),r("span",oE)),o("span",aE,a(z.commit.subject),1),z.commit.refs.length?(l(),r("span",iE,[(l(!0),r(oe,null,Ae(z.commit.refs,ee=>(l(),r("span",{key:ee.kind+ee.label,class:te(["vs-gitbar-ref","rf-"+ee.kind])},a(ee.label),3))),128))])):P("",!0),o("span",lE,a(z.commit.author),1)],10,J6),I.value===z.commit.hash?(l(),r("div",rE,[V[z.commit.hash]?(l(),r("div",cE,a(s(y)("vsLoading")),1)):(l(),r(oe,{key:1},[H(z.commit.hash).length?P("",!0):(l(),r("div",uE,a(s(y)("gitCommitNoFiles")),1)),(l(!0),r(oe,null,Ae(H(z.commit.hash),(ee,me)=>(l(),r("div",{key:me,class:"vs-gitbar-file",title:ee.path},[o("span",{class:te(["st","s-"+ee.status.toLowerCase()])},a(ee.status),3),h(se,{name:"fileText",size:11}),o("span",fE,a(C(ee.path)),1),o("span",pE,a(Z(ee.path)),1),o("button",{class:"vs-gitbar-act vs-gitbar-file-open",title:s(y)("vsGitFileDiff"),onClick:be(je=>de(z.commit,ee),["stop"])},[h(se,{name:"fileOut",size:11})],8,vE)],8,dE))),128))],64))])):P("",!0)],64))),128)):(l(),r("div",Y6,a(s(y)("gitLogEmpty")),1))])])):P("",!0)}}),mE=xt(hE,[["__scopeId","data-v-955f5249"]]),Rd="dsh-file-workbench.vscode.search.prefs",Ki={caseSensitive:!1,wholeWord:!1,regex:!1,preserveCase:!0,viewMode:"list",replaceOpen:!1,advancedOpen:!1};function gE(){try{const t=localStorage.getItem(Rd);return t?{...Ki,...JSON.parse(t)}:{...Ki}}catch{return{...Ki}}}function yE(){return{q:"",include:"",exclude:"",replacement:"",outcome:null,searched:!1}}const Ml=gt(gE()),Ol=gt(new Map);function wE(t,e){Ml[t]=e;try{localStorage.setItem(Rd,JSON.stringify(Ml))}catch{}}function Nd(t){let e=Ol.get(t);return e||(e=yE(),Ol.set(t,e)),e}function bE(t,e){const n=Nd(t);Object.assign(n,e)}function _E(t){Ol.delete(t)}function kE(){return{prefs:Ml,setPref:wE,getProject:Nd,saveProject:bE,clearProject:_E}}const xE={class:"vs-sp"},CE={class:"vs-sp-titlebar"},$E={class:"vs-sp-title"},SE={class:"vs-sp-actions"},EE=["title"],TE=["title","disabled"],DE=["title","disabled"],FE=["title","disabled"],RE=["title","disabled"],NE={class:"vs-sp-head"},PE={class:"vs-sp-inputwrap"},AE=["placeholder"],ME=["title"],OE=["title"],LE=["title"],BE=["title"],IE={key:0,class:"vs-sp-inputwrap vs-sp-replacerow"},jE=["placeholder","onKeydown"],VE=["title"],zE=["title","disabled"],UE={key:0,class:"vs-sp-adv"},HE={class:"vs-sp-field"},WE={class:"vs-sp-field-label"},GE=["placeholder","title"],qE={class:"vs-sp-field"},KE={class:"vs-sp-field-label"},XE=["placeholder","title"],YE={key:1,class:"vs-sp-summary"},JE={key:0,class:"vs-sp-trunc"},QE={key:1,class:"vs-sp-trunc"},ZE={key:2,class:"vs-sp-trunc"},e3={key:2,class:"vs-sp-list"},t3=["title","onClick"],n3={class:"vs-sp-name"},s3={class:"vs-sp-dir"},o3={class:"vs-sp-count"},a3=["title","onClick"],i3={class:"vs-sp-ln"},l3={class:"vs-sp-text"},r3={key:0},c3=["title","onClick"],u3={class:"vs-sp-name"},d3={class:"vs-sp-count"},f3=["title","onClick"],p3={class:"vs-sp-name"},v3={class:"vs-sp-count"},h3=["title","onClick"],m3={class:"vs-sp-ln"},g3={class:"vs-sp-text"},y3={key:0},w3=ht({__name:"VSSearchPanel",props:{projectDir:{}},emits:["open"],setup(t,{emit:e}){const n=t,i=e,c=kE(),{prefs:u}=c,v=c.getProject(n.projectDir),d=m(v.q),p=m(v.include),w=m(v.exclude),b=m(v.replacement),x=m(v.outcome),A=m(v.searched),I=m(u.caseSensitive),M=m(u.wholeWord),V=m(u.regex),H=m(u.preserveCase),C=m(u.viewMode),Z=m(u.replaceOpen),G=m(u.advancedOpen),F=m(!1),de=m(!1),B=m(new Set),ve=m(new Set(""));let _e=0,ke=0;const le=L(()=>d.value.trim().length>=2),re=L(()=>!!x.value&&x.value.files.length>0),Ee=L(()=>le.value&&re.value&&b.value.length>0&&!Wt(n.projectDir));function Ve(){return{path:n.projectDir,caseSensitive:I.value,regex:V.value,wholeWord:M.value,include:p.value.trim()||void 0,exclude:w.value.trim()||void 0}}async function ye(){const Le=++_e;if(!le.value){x.value=null,A.value=!1,F.value=!1,Ne();return}F.value=!0;try{const U=await dp(d.value.trim(),Ve());if(Le!==_e)return;x.value=U,A.value=!0,B.value=new Set(U.files.length<=8?U.files.map(N=>N.rel):[])}catch{Le===_e&&(x.value=null,A.value=!0)}finally{Le===_e&&(F.value=!1,Ne())}}function Ne(){n.projectDir&&c.saveProject(n.projectDir,{q:d.value,include:p.value,exclude:w.value,replacement:b.value,outcome:x.value,searched:A.value})}function W(){ke&&window.clearTimeout(ke),ke=window.setTimeout(()=>void ye(),300)}function J(){I.value=!I.value,c.setPref("caseSensitive",I.value),A.value&&ye()}function z(){M.value=!M.value,c.setPref("wholeWord",M.value),A.value&&ye()}function ee(){V.value=!V.value,c.setPref("regex",V.value),A.value&&ye()}function me(){C.value=C.value==="list"?"tree":"list",c.setPref("viewMode",C.value)}function je(){H.value=!H.value,c.setPref("preserveCase",H.value)}function Ke(){Z.value=!Z.value,c.setPref("replaceOpen",Z.value)}function Ze(){G.value=!G.value,c.setPref("advancedOpen",G.value)}function ge(){const Le=x.value;if(Le)if(C.value==="list")B.value=new Set(Le.files.map(U=>U.rel));else{const U=new Set("");for(const N of Le.files)Ye(U,N.rel);ve.value=U}}function we(){C.value==="list"?B.value=new Set:ve.value=new Set("")}function Ye(Le,U){const N=U.split("/");for(let Q=1;Q<N.length;Q++)Le.add(N.slice(0,Q).join("/"))}function st(Le){const U=new Set(ve.value);U.has(Le)?U.delete(Le):U.add(Le),ve.value=U}const pe=L(()=>{const Le=x.value;if(!Le||C.value!=="tree")return[];const U={name:"",path:"",dirs:new Map,files:[],count:0};for(const Te of Le.files){const O=Te.rel.split("/"),T={name:O[O.length-1],rel:Te.rel,count:Te.hits.length};let K=U;K.count+=Te.hits.length;for(let S=0;S<O.length-1;S++){const q=O[S],De=K.path?`${K.path}/${q}`:q;let ie=K.dirs.get(q);ie||(ie={name:q,path:De,dirs:new Map,files:[],count:0},K.dirs.set(q,ie)),K=ie,K.count+=Te.hits.length}K.files.push(T)}const N=[],Q=(Te,O)=>{const T=ve.value.has(Te.path);if(O>0&&N.push({kind:"dir",path:Te.path,name:Te.name,depth:O,count:Te.count,open:T}),!(!T&&O>0)){for(const K of[...Te.dirs.values()].sort((S,q)=>S.name.localeCompare(q.name)))Q(K,O+1);for(const K of[...Te.files].sort((S,q)=>S.name.localeCompare(q.name)))N.push({kind:"file",path:K.rel,name:K.name,dir:it(K.rel),depth:O,count:K.count,open:B.value.has(K.rel)})}};return Q(U,0),N});function Ce(){ke&&window.clearTimeout(ke),_e++,d.value="",b.value="",p.value="",w.value="",x.value=null,A.value=!1,F.value=!1,B.value=new Set,ve.value=new Set(""),c.clearProject(n.projectDir)}function qe(Le){const U=new Set(B.value);U.has(Le)?U.delete(Le):U.add(Le),B.value=U}function ce(Le){return x.value?.files.find(U=>U.rel===Le)?.hits??[]}async function Ie(){if(!Ee.value||de.value)return;const Le=x.value;if(!Le)return;const U=Le.total,N=Le.files.length,Q=y("vsReplaceConfirm",{files:String(N),n:String(U),q:d.value.trim(),r:b.value});if(window.confirm(Q)){de.value=!0;try{const Te=await Jc(d.value.trim(),b.value,{scope:n.projectDir,caseSensitive:I.value,regex:V.value,wholeWord:M.value,preserveCase:H.value,include:p.value.trim()||void 0,exclude:w.value.trim()||void 0});Te.replacements>0?X("ok",y("vsReplaceDone",{files:String(Te.files),n:String(Te.replacements)})):X("info",y("vsReplaceNone")),await ye()}catch(Te){console.warn("[dsh-file-workbench] replace failed:",Te)}finally{de.value=!1}}}function rt(Le){const U=c.getProject(Le);d.value=U.q,p.value=U.include,w.value=U.exclude,b.value=U.replacement,x.value=U.outcome,A.value=U.searched,B.value=new Set,ve.value=new Set("")}Qe(()=>n.projectDir,Le=>rt(Le)),ln(()=>{Ne(),le.value&&!x.value&&ye()}),Pt(()=>{ke&&window.clearTimeout(ke)});function yt(Le){const U=d.value.trim();if(!U)return[{t:Le,hit:!1}];let N;try{N=V.value?U:U.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}catch{return[{t:Le,hit:!1}]}M.value&&(N=`(?<![\\p{L}\\p{N}_])${N}(?![\\p{L}\\p{N}_])`);let Q;try{Q=new RegExp(N,I.value?"gu":"giu")}catch{return[{t:Le,hit:!1}]}const Te=[];let O=0;for(const T of Le.matchAll(Q))if(T.index>O&&Te.push({t:Le.slice(O,T.index),hit:!1}),Te.push({t:T[0]||U,hit:!0}),O=T.index+(T[0]?.length||U.length),T[0]==="")break;return O<Le.length&&Te.push({t:Le.slice(O),hit:!1}),Te}const ut=Le=>Le.slice(Le.lastIndexOf("/")+1),it=Le=>{const U=Le.lastIndexOf("/");return U<0?"":Le.slice(0,U)};return(Le,U)=>(l(),r("div",xE,[o("div",CE,[o("span",$E,a(s(y)("vsSearchTitle")),1),o("div",SE,[o("button",{class:"vs-sp-act",title:s(y)("vsViewModeSwitchTitle"),onClick:me},[h(se,{name:C.value==="list"?"sort":"folderOpen",size:13},null,8,["name"])],8,EE),o("button",{class:"vs-sp-act",title:s(y)("vsRefreshResults"),disabled:!le.value,onClick:U[0]||(U[0]=N=>ye())},[h(se,{name:"refresh",size:13})],8,TE),o("button",{class:"vs-sp-act",title:s(y)("vsExpandAll"),disabled:!re.value,onClick:ge},[h(se,{name:"chevronsDown",size:13})],8,DE),o("button",{class:"vs-sp-act",title:s(y)("vsCollapseAll"),disabled:!re.value,onClick:we},[h(se,{name:"chevronsUp",size:13})],8,FE),o("button",{class:"vs-sp-act",title:s(y)("vsClearAllResults"),disabled:!A.value&&!d.value,onClick:Ce},[h(se,{name:"close",size:13})],8,RE)])]),o("div",NE,[o("div",PE,[kt(o("input",{"onUpdate:modelValue":U[1]||(U[1]=N=>d.value=N),class:"vs-sp-input",placeholder:s(y)("vsGrepPlaceholder"),onKeydown:U[2]||(U[2]=bt(be(N=>ye(),["prevent"]),["enter"])),onInput:W},null,40,AE),[[Lt,d.value]]),o("button",{class:te(["vs-sp-toggle",{on:I.value}]),title:s(y)("vsGrepCase"),onClick:J},[...U[8]||(U[8]=[o("span",null,"Aa",-1)])],10,ME),o("button",{class:te(["vs-sp-toggle",{on:M.value}]),title:s(y)("vsGrepWholeWord"),onClick:z},[...U[9]||(U[9]=[o("span",null,"ab",-1)])],10,OE),o("button",{class:te(["vs-sp-toggle",{on:V.value}]),title:s(y)("vsGrepRegex"),onClick:ee},[...U[10]||(U[10]=[o("span",null,".*",-1)])],10,LE),o("button",{class:te(["vs-sp-toggle",{on:Z.value}]),title:s(y)("vsToggleReplace"),onClick:Ke},[h(se,{name:"chevronRight",size:12,class:te(["vs-sp-replace-caret",{open:Z.value}])},null,8,["class"])],10,BE)]),Z.value?(l(),r("div",IE,[kt(o("input",{"onUpdate:modelValue":U[3]||(U[3]=N=>b.value=N),class:"vs-sp-input",placeholder:s(y)("vsGrepReplacePlaceholder"),onKeydown:bt(be(Ie,["prevent"]),["enter"])},null,40,jE),[[Lt,b.value]]),o("button",{class:te(["vs-sp-toggle",{on:H.value}]),title:s(y)("vsReplacePreserveCase"),onClick:je},[...U[11]||(U[11]=[o("span",null,"AB",-1)])],10,VE),o("button",{class:"vs-sp-btn-replaceall",title:s(y)("vsReplaceAll"),disabled:!Ee.value||de.value,onClick:Ie},[h(se,{name:"chevronsRight",size:13})],8,zE)])):P("",!0)]),o("div",{class:"vs-sp-divider",onClick:Ze},[h(se,{name:"chevronRight",size:11,class:te(["vs-sp-div-caret",{open:G.value}])},null,8,["class"])]),G.value?(l(),r("div",UE,[o("div",HE,[o("div",WE,[h(se,{name:"file",size:12}),o("span",null,a(s(y)("vsFilesToInclude")),1)]),kt(o("input",{"onUpdate:modelValue":U[4]||(U[4]=N=>p.value=N),class:"vs-sp-field-input",placeholder:s(y)("vsFilesToIncludePlaceholder"),title:s(y)("vsFilesToIncludeTitle"),onKeydown:U[5]||(U[5]=bt(be(N=>ye(),["prevent"]),["enter"])),onInput:W},null,40,GE),[[Lt,p.value]])]),o("div",qE,[o("div",KE,[h(se,{name:"gear",size:12}),o("span",null,a(s(y)("vsFilesToExclude")),1)]),kt(o("input",{"onUpdate:modelValue":U[6]||(U[6]=N=>w.value=N),class:"vs-sp-field-input",placeholder:s(y)("vsFilesToExcludePlaceholder"),title:s(y)("vsFilesToExcludeTitle"),onKeydown:U[7]||(U[7]=bt(be(N=>ye(),["prevent"]),["enter"])),onInput:W},null,40,XE),[[Lt,w.value]])])])):P("",!0),A.value?(l(),r("div",YE,[x.value?(l(),r(oe,{key:0},[o("span",null,a(s(y)("vsGrepSummary",{files:x.value.files.length,n:x.value.total})),1),x.value.truncated?(l(),r("span",JE,a(s(y)("vsGrepTruncated")),1)):P("",!0)],64)):F.value?(l(),r("span",QE,a(s(y)("vsLoading")),1)):(l(),r("span",ZE,a(s(y)("vsGrepNoResult")),1))])):P("",!0),x.value?(l(),r("div",e3,[C.value==="list"?(l(!0),r(oe,{key:0},Ae(x.value.files,N=>(l(),r(oe,{key:N.rel},[o("div",{class:te(["vs-sp-file",{open:B.value.has(N.rel)}]),title:N.rel,onClick:Q=>qe(N.rel)},[h(se,{name:"chevronRight",size:11,class:"vs-sp-caret"}),h(se,{name:"fileText",size:12}),o("span",n3,a(ut(N.rel)),1),o("span",s3,a(it(N.rel)),1),o("span",o3,a(N.hits.length),1)],10,t3),B.value.has(N.rel)?(l(!0),r(oe,{key:0},Ae(N.hits,Q=>(l(),r("div",{key:N.rel+":"+Q.ln,class:"vs-sp-hit",title:s(y)("vsGrepOpenAt",{ln:Q.ln}),onClick:Te=>i("open",N.rel,Q.ln)},[o("span",i3,a(Q.ln),1),o("span",l3,[(l(!0),r(oe,null,Ae(yt(Q.text),(Te,O)=>(l(),r(oe,{key:O},[Te.hit?(l(),r("mark",r3,a(Te.t),1)):(l(),r(oe,{key:1},[ue(a(Te.t),1)],64))],64))),128))])],8,a3))),128)):P("",!0)],64))),128)):(l(!0),r(oe,{key:1},Ae(pe.value,N=>(l(),r(oe,{key:N.kind+":"+N.path},[N.kind==="dir"?(l(),r("div",{key:0,class:te(["vs-sp-file vs-sp-node",{open:N.open}]),style:_t({paddingLeft:8+(N.depth-1)*12+"px"}),title:N.path,onClick:Q=>st(N.path)},[h(se,{name:"chevronRight",size:11,class:"vs-sp-caret"}),h(se,{name:N.open?"folderOpen":"folder",size:12},null,8,["name"]),o("span",u3,a(N.name),1),o("span",d3,a(N.count),1)],14,c3)):(l(),r(oe,{key:1},[o("div",{class:te(["vs-sp-file vs-sp-node",{open:N.open}]),style:_t({paddingLeft:8+N.depth*12+"px"}),title:N.path,onClick:Q=>qe(N.path)},[h(se,{name:"chevronRight",size:11,class:"vs-sp-caret"}),h(se,{name:"fileText",size:12}),o("span",p3,a(N.name),1),o("span",v3,a(N.count),1)],14,f3),N.open?(l(!0),r(oe,{key:0},Ae(ce(N.path),Q=>(l(),r("div",{key:N.path+":"+Q.ln,class:"vs-sp-hit",style:_t({paddingLeft:26+N.depth*12+"px"}),title:s(y)("vsGrepOpenAt",{ln:Q.ln}),onClick:Te=>i("open",N.path,Q.ln)},[o("span",m3,a(Q.ln),1),o("span",g3,[(l(!0),r(oe,null,Ae(yt(Q.text),(Te,O)=>(l(),r(oe,{key:O},[Te.hit?(l(),r("mark",y3,a(Te.t),1)):(l(),r(oe,{key:1},[ue(a(Te.t),1)],64))],64))),128))])],12,h3))),128)):P("",!0)],64))],64))),128))])):P("",!0)]))}}),b3=xt(w3,[["__scopeId","data-v-0328b4ec"]]),Ec=1500;function _3(t,e){const n=t.split(`
`),i=e.split(`
`);if(t===e)return{lines:[]};let c=0;for(;c<n.length&&c<i.length&&n[c]===i[c];)c+=1;let u=n.length,v=i.length;for(;u>c&&v>c&&n[u-1]===i[v-1];)u-=1,v-=1;const d=n.slice(c,u),p=i.slice(c,v);if(d.length>Ec||p.length>Ec)return null;const w=d.length,b=p.length,x=new Int32Array((w+1)*(b+1)),A=(G,F)=>G*(b+1)+F;for(let G=w-1;G>=0;G-=1)for(let F=b-1;F>=0;F-=1)x[A(G,F)]=d[G]===p[F]?x[A(G+1,F+1)]+1:Math.max(x[A(G+1,F)],x[A(G,F+1)]);const I=[];let M=0,V=0;for(;M<w&&V<b;)d[M]===p[V]?(I.push({kind:" ",text:d[M]}),M+=1,V+=1):x[A(M+1,V)]>=x[A(M,V+1)]?(I.push({kind:"-",text:d[M]}),M+=1):(I.push({kind:"+",text:p[V]}),V+=1);for(;M<w;)I.push({kind:"-",text:d[M]}),M+=1;for(;V<b;)I.push({kind:"+",text:p[V]}),V+=1;const H=3,C=["--- 磁盘版本","+++ 未保存改动"];let Z=0;for(;Z<I.length;){if(I[Z].kind===" "){Z+=1;continue}let G=Math.max(0,Z-H);for(;G>0&&I[G].kind===" "&&Z-G<H;)G-=1;let F=Z,de=0,B=Z;for(;F<I.length;){if(I[F].kind!==" ")de=0,B=F;else if(de+=1,de>=H*2)break;F+=1}const ve=Math.min(I.length,B+1+H),_e=I.slice(G,ve),ke=c+G+1,le=c+G+1;C.push(`@@ -${ke} +${le} @@`);for(const re of _e)C.push(re.kind+re.text);Z=ve}return{lines:C}}const k3=[{id:"@sunjuntao/dsh-fw-find-references",name:"引用查找",version:"0.1.0",description:"DSH 文件编辑器「引用查找」插件：Activity Bar 注入视图，跟随编辑器光标选中词（v5 ctx.editor），用工作台 /grep 全词搜索项目内引用并点击跳转。对标 VS Code Find All References。",code:`window.__ModuleLoader__.load({
	id: "@sunjuntao/dsh-fw-find-references",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
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

// packages/find-references/src/client/index.js
var client_exports = {};
__export(client_exports, {
  apply: () => apply,
  inject: () => inject
});
module.exports = __toCommonJS(client_exports);
var API_KEY = "__dshFileWorkbenchVSCode__";
var PREFIX = "/api/dsh-file-workbench";
var VIEW_ID = "findReferences.view";
var NS = "dsh-fr";
var inject = [];
function apply(_ctx) {
  waitForApi(
    () => {
      const api = window[API_KEY];
      if (!api || !api.activityBar) return false;
      api.activityBar.register(buildView(api));
      return true;
    },
    \`register \${VIEW_ID}\`
  );
}
function buildView(api) {
  return {
    id: VIEW_ID,
    title: { zh: "\\u5F15\\u7528\\u67E5\\u627E", en: "Find References" },
    description: {
      zh: "\\u8DDF\\u968F\\u5149\\u6807\\u9009\\u4E2D\\u8BCD\\uFF0C\\u5728\\u9879\\u76EE\\u5185\\u67E5\\u627E\\u5168\\u90E8\\u5F15\\u7528\\u5E76\\u70B9\\u51FB\\u8DF3\\u8F6C",
      en: "Follow the word at the caret and find all references in the project"
    },
    icon: "search",
    order: 60,
    // 未打开项目时没有可扫描的范围，隐藏图标。
    when: (ctx) => !!ctx.projectDir,
    mount(el, ctx) {
      return mountView(el, ctx);
    }
  };
}
function mountView(el, ctx) {
  el.classList.add(\`\${NS}-view\`);
  el.innerHTML = \`
    <div class="\${NS}-root">
      <div class="\${NS}-head">
        <input class="\${NS}-input" type="text" spellcheck="false" placeholder="\\u8F93\\u5165\\u6216\\u8DDF\\u968F\\u5149\\u6807\\u53D6\\u8BCD\\u2026" />
        <button class="\${NS}-btn" type="button">\\u67E5\\u627E</button>
      </div>
      <div class="\${NS}-hint"></div>
      <div class="\${NS}-results"></div>
    </div>\`;
  const input = el.querySelector(\`.\${NS}-input\`);
  const btn = el.querySelector(\`.\${NS}-btn\`);
  const hint = el.querySelector(\`.\${NS}-hint\`);
  const results = el.querySelector(\`.\${NS}-results\`);
  let runId = 0;
  let offActive = null;
  function wordAtCaret() {
    const ed = ctx.editor;
    if (!ed || typeof ed.getSelection !== "function") return "";
    const sel = ed.getSelection();
    if (!sel) return "";
    const main = sel.main;
    if (!main) return "";
    let from = main.from;
    let to = main.to;
    const text = typeof ed.getText === "function" ? ed.getText() : ed.view?.state?.doc?.toString?.() ?? "";
    if (from === to) {
      const expanded = expandWord(text, from);
      from = expanded.from;
      to = expanded.to;
    }
    return text.slice(from, to).trim();
  }
  async function runSearch(termRaw) {
    const term = (termRaw ?? "").trim();
    if (!term) {
      hint.textContent = "\\u8BF7\\u8F93\\u5165\\u6216\\u628A\\u5149\\u6807\\u653E\\u5230\\u4E00\\u4E2A\\u6807\\u8BC6\\u7B26\\u4E0A\\u3002";
      results.replaceChildren();
      return;
    }
    if (!ctx.projectDir) {
      hint.textContent = "\\u8BF7\\u5148\\u6253\\u5F00\\u4E00\\u4E2A\\u9879\\u76EE\\u76EE\\u5F55\\u3002";
      results.replaceChildren();
      return;
    }
    const myRun = ++runId;
    hint.textContent = \`\\u6B63\\u5728\\u9879\\u76EE\\u5185\\u67E5\\u627E \\u201C\${term}\\u201D \\u2026\`;
    results.replaceChildren();
    try {
      const hits = await grep(term, ctx.projectDir);
      if (myRun !== runId) return;
      renderResults(results, hits, term, ctx);
      hint.textContent = hits.length ? \`\\u201C\${term}\\u201D \\xB7 \\u547D\\u4E2D \${hits.length} \\u5904\` : \`\\u201C\${term}\\u201D \\xB7 \\u65E0\\u5339\\u914D\`;
    } catch (e) {
      if (myRun !== runId) return;
      hint.textContent = \`\\u67E5\\u627E\\u5931\\u8D25\\uFF1A\${e?.message ?? e}\`;
    }
  }
  function syncFromCaret() {
    const w = wordAtCaret();
    if (w) {
      input.value = w;
      runSearch(w);
    }
  }
  btn.addEventListener("click", () => runSearch(input.value));
  input.addEventListener("keydown", (ev) => {
    if (ev.key === "Enter") runSearch(input.value);
  });
  if (typeof ctx.onDidChangeActiveFile === "function") {
    offActive = ctx.onDidChangeActiveFile(() => {
      const w = wordAtCaret();
      if (w) input.value = w;
    });
  }
  requestAnimationFrame(syncFromCaret);
  return () => {
    if (offActive) offActive();
    el.replaceChildren();
  };
}
async function grep(term, dir) {
  const params = new URLSearchParams({
    q: term,
    path: dir,
    word: "1",
    // 全词
    regex: "0",
    case: "0"
  });
  const url = \`\${PREFIX}/grep?\${params.toString()}\`;
  const res = await fetch(url, { headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
  const body = await res.json().catch(() => null);
  return normalizeHits(body, dir);
}
function normalizeHits(body, dir) {
  const flat = [];
  const push = (file, line, text) => file && flat.push({ file, line: Number(line) || 0, text: String(text ?? "") });
  const joinRoot = (rel) => {
    const r = String(rel).replace(/\\\\/g, "/").replace(/^\\/+/, "");
    return \`\${String(dir).replace(/\\\\/g, "/").replace(/\\/+$/, "")}/\${r}\`;
  };
  const data = body?.data ?? body;
  const groups = Array.isArray(data) ? data : data?.files ?? data?.groups ?? data?.matches ?? [];
  if (Array.isArray(groups)) {
    for (const g of groups) {
      const rel = g.rel ?? g.file ?? g.path ?? g.name;
      const file = rel ? joinRoot(rel) : null;
      const inner = g.hits ?? g.lines ?? g.matches ?? [];
      if (Array.isArray(inner)) {
        for (const h of inner) {
          if (h && typeof h === "object") push(file, h.ln ?? h.line, h.text ?? h.content ?? "");
          else push(file, h, "");
        }
      }
    }
  }
  return flat;
}
function renderResults(container, hits, term, ctx) {
  if (!hits.length) {
    container.replaceChildren();
    return;
  }
  const byFile = /* @__PURE__ */ new Map();
  for (const h of hits) {
    if (!byFile.has(h.file)) byFile.set(h.file, []);
    byFile.get(h.file).push(h);
  }
  const frag = document.createDocumentFragment();
  for (const [file, rows] of byFile) {
    const group = document.createElement("div");
    group.className = \`\${NS}-group\`;
    const ghead = document.createElement("button");
    ghead.type = "button";
    ghead.className = \`\${NS}-ghead\`;
    ghead.textContent = \`\${baseName(file)} (\${rows.length})\`;
    ghead.title = file;
    ghead.addEventListener("click", () => group.classList.toggle(\`\${NS}-collapsed\`));
    group.appendChild(ghead);
    const list = document.createElement("div");
    list.className = \`\${NS}-glist\`;
    for (const r of rows) {
      const row = document.createElement("button");
      row.type = "button";
      row.className = \`\${NS}-row\`;
      row.innerHTML = \`<span class="\${NS}-lineno">\${r.line}</span><span class="\${NS}-line"></span>\`;
      row.querySelector(\`.\${NS}-line\`).appendChild(highlight(r.text, term));
      row.addEventListener("click", () => openAt(ctx, r.file, r.line));
      list.appendChild(row);
    }
    group.appendChild(list);
    frag.appendChild(group);
  }
  container.replaceChildren(frag);
}
function openAt(ctx, file, line) {
  try {
    const p = ctx.openFile(file, line ? { line } : void 0);
    if (p && typeof p.catch === "function") p.catch(() => {
    });
  } catch {
  }
}
function highlight(text, term) {
  const span = document.createElement("span");
  if (!term) {
    span.textContent = text;
    return span;
  }
  const lower = text.toLowerCase();
  const tl = term.toLowerCase();
  let i = 0;
  let idx = lower.indexOf(tl);
  if (idx < 0) {
    span.textContent = text;
    return span;
  }
  while (idx >= 0) {
    if (idx > i) span.appendChild(document.createTextNode(text.slice(i, idx)));
    const mark = document.createElement("mark");
    mark.className = \`\${NS}-mark\`;
    mark.textContent = text.slice(idx, idx + term.length);
    span.appendChild(mark);
    i = idx + term.length;
    idx = lower.indexOf(tl, i);
  }
  if (i < text.length) span.appendChild(document.createTextNode(text.slice(i)));
  return span;
}
function expandWord(text, pos) {
  const isWord = (c) => c && /[A-Za-z0-9_$]/.test(c);
  let from = Math.max(0, Math.min(text.length, pos));
  let to = from;
  while (from > 0 && isWord(text[from - 1])) from--;
  while (to < text.length && isWord(text[to])) to++;
  return { from, to };
}
function baseName(p) {
  const norm = String(p).replace(/\\\\/g, "/");
  const i = norm.lastIndexOf("/");
  return i >= 0 ? norm.slice(i + 1) : norm;
}
function waitForApi(fn, label) {
  let tries = 0;
  const tick = () => {
    let ok = false;
    try {
      ok = fn();
    } catch (e) {
      console.warn(\`[dsh-find-references] \${label} failed:\`, e);
    }
    if (ok) return;
    if (++tries > 300) {
      console.warn(\`[dsh-find-references] \${label}: injection API not found, giving up.\`);
      return;
    }
    setTimeout(tick, 100);
  };
  tick();
}
injectStyles();
function injectStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(\`\${NS}-styles\`)) return;
  const css = \`
.\${NS}-view { color: var(--dsh-fg, #c9d1d9); font-size: 12px; }
.\${NS}-root { display: flex; flex-direction: column; min-height: 100%; }
.\${NS}-head { display: flex; gap: 6px; padding: 8px; position: sticky; top: 0; background: var(--dsh-bg, #0d1117); z-index: 1; }
.\${NS}-input { flex: 1 1 auto; min-width: 0; padding: 4px 8px; border: 1px solid var(--dsh-border, #30363d); border-radius: 6px; background: var(--dsh-bg2, #161b22); color: inherit; outline: none; }
.\${NS}-input:focus { border-color: var(--dsh-accent, #388bfd); }
.\${NS}-btn { flex: 0 0 auto; padding: 4px 10px; border: 1px solid var(--dsh-border, #30363d); border-radius: 6px; background: var(--dsh-bg2, #161b22); color: inherit; cursor: pointer; }
.\${NS}-btn:hover { border-color: var(--dsh-accent, #388bfd); }
.\${NS}-hint { padding: 4px 10px; color: var(--dsh-fg-dim, #8b949e); }
.\${NS}-results { flex: 1 1 auto; padding: 0 4px 8px; }
.\${NS}-group { margin: 2px 0; }
.\${NS}-ghead { display: block; width: 100%; text-align: left; padding: 3px 8px; border: 0; background: transparent; color: var(--dsh-fg, #c9d1d9); font-weight: 600; cursor: pointer; border-radius: 4px; }
.\${NS}-ghead:hover { background: var(--dsh-bg2, #161b22); }
.\${NS}-collapsed .\${NS}-glist { display: none; }
.\${NS}-row { display: flex; gap: 8px; width: 100%; text-align: left; padding: 2px 8px 2px 16px; border: 0; background: transparent; color: var(--dsh-fg, #c9d1d9); cursor: pointer; border-radius: 4px; white-space: nowrap; overflow: hidden; }
.\${NS}-row:hover { background: var(--dsh-hover, rgba(177,186,196,0.12)); }
.\${NS}-lineno { flex: 0 0 auto; min-width: 2.5em; text-align: right; color: var(--dsh-fg-dim, #8b949e); }
.\${NS}-line { overflow: hidden; text-overflow: ellipsis; }
.\${NS}-mark { background: rgba(46,160,67,0.35); color: inherit; border-radius: 2px; }
\`;
  const style = document.createElement("style");
  style.id = \`\${NS}-styles\`;
  style.textContent = css;
  document.head.appendChild(style);
}
		module.exports = { apply, inject };
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map
`},{id:"@sunjuntao/dsh-fw-bookmarks",name:"书签",version:"0.1.0",description:"DSH 文件编辑器「书签」插件：Activity Bar 注入视图，切换光标行书签、列出当前/全部项目书签并跳转。用 v5.1 ctx.editor.createDecorations(category:bookmark) gutter 标记 + /persist 按项目持久化。对标 VS Code Bookmarks。",code:`window.__ModuleLoader__.load({
	id: "@sunjuntao/dsh-fw-bookmarks",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
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

// packages/bookmarks/src/client/index.js
var client_exports = {};
__export(client_exports, {
  apply: () => apply,
  inject: () => inject
});
module.exports = __toCommonJS(client_exports);
var API_KEY = "__dshFileWorkbenchVSCode__";
var PREFIX = "/api/dsh-file-workbench";
var VIEW_ID = "bookmarks.view";
var NS = "dsh-bm";
var inject = [];
function apply(_ctx) {
  waitForApi(
    () => {
      const api = window[API_KEY];
      if (!api || !api.activityBar) return false;
      api.activityBar.register(buildView(api));
      return true;
    },
    \`register \${VIEW_ID}\`
  );
}
var store = /* @__PURE__ */ new Map();
var currentCtx = null;
var currentUi = null;
function hashKey(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h.toString(16).padStart(8, "0");
}
function persistKey(dir) {
  return \`dsh-fw.bookmarks.\${hashKey(String(dir))}\`;
}
async function loadProject(dir) {
  if (!dir) return [];
  if (store.has(dir)) return store.get(dir);
  let list = [];
  try {
    const res = await fetch(\`\${PREFIX}/plugin-data?k=\${encodeURIComponent(persistKey(dir))}\`, { headers: { Accept: "application/json" } });
    const body = await res.json().catch(() => null);
    const v = body?.data;
    if (Array.isArray(v)) list = v.filter((x) => x && typeof x.file === "string" && Number.isFinite(x.line));
  } catch {
  }
  store.set(dir, list);
  return list;
}
function saveProject(dir) {
  if (!dir) return;
  const list = store.get(dir) ?? [];
  fetch(\`\${PREFIX}/plugin-data\`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ k: persistKey(dir), v: list })
  }).catch(() => {
  });
}
function normPath(p) {
  return String(p).replace(/\\\\/g, "/");
}
function sameFile(a, b) {
  return normPath(a).toLowerCase() === normPath(b).toLowerCase();
}
function baseName(p) {
  const n = normPath(p);
  const i = n.lastIndexOf("/");
  return i >= 0 ? n.slice(i + 1) : n;
}
function buildView(api) {
  return {
    id: VIEW_ID,
    title: { zh: "\\u4E66\\u7B7E", en: "Bookmarks" },
    description: {
      zh: "\\u5207\\u6362\\u5149\\u6807\\u884C\\u4E66\\u7B7E\\u3001\\u6309\\u9879\\u76EE\\u6301\\u4E45\\u5316\\u5E76\\u70B9\\u51FB\\u8DF3\\u8F6C\\uFF08gutter \\u5706\\u70B9\\u6807\\u8BB0\\uFF09",
      en: "Toggle line bookmarks, persist per project, jump to them (gutter dots)"
    },
    icon: "bookmark",
    order: 62,
    when: (ctx) => !!ctx.projectDir,
    mount(el, ctx) {
      return mountView(el, ctx);
    }
  };
}
function caretLine(ed) {
  if (!ed) return null;
  const sel = typeof ed.getSelection === "function" ? ed.getSelection() : null;
  const head = sel?.main?.head;
  if (head == null) return null;
  const view = ed.view;
  if (!view) return null;
  return view.state.doc.lineAt(head).number;
}
function toggleFromActive() {
  const ctx = currentCtx;
  const ed = ctx?.editor;
  const file = ctx?.activeFile;
  if (!ctx || !ed || !file) return;
  const line = caretLine(ed);
  if (line == null) return;
  const dir = ctx.projectDir;
  const list = store.get(dir) ?? [];
  const idx = list.findIndex((b) => sameFile(b.file, file) && b.line === line);
  if (idx >= 0) list.splice(idx, 1);
  else list.push({ file, line });
  list.sort((a, b) => sameFile(a.file, b.file) ? a.line - b.line : normPath(a.file).localeCompare(normPath(b.file)));
  store.set(dir, list);
  saveProject(dir);
  applyDecos();
  currentUi?.refresh();
}
function applyDecos() {
  const ctx = currentCtx;
  const ed = ctx?.editor;
  const file = ctx?.activeFile;
  if (!ed || !file) {
    if (currentUi?.handle) {
      currentUi.handle.update([]);
      currentUi.handle = null;
    }
    return;
  }
  const items = bookmarkItemsFor(ed, file);
  if (!currentUi?.handle) currentUi.handle = ed.createDecorations({ items });
  else currentUi.handle.update(items);
}
function bookmarkItemsFor(ed, file) {
  const dir = currentCtx?.projectDir;
  const list = (store.get(dir) ?? []).filter((b) => sameFile(b.file, file));
  const view = ed.view;
  const doc = view?.state?.doc;
  if (!doc) return [];
  const max = doc.lines;
  return list.filter((b) => b.line >= 1 && b.line <= max).map((b) => ({ type: "gutter", start: { line: b.line, character: 1 }, category: "bookmark", message: \`\\u4E66\\u7B7E \\xB7 \\u7B2C \${b.line} \\u884C\` }));
}
function mountView(el, ctx) {
  el.classList.add(\`\${NS}-view\`);
  el.innerHTML = \`
    <div class="\${NS}-root">
      <div class="\${NS}-bar">
        <button class="\${NS}-toggle" type="button" title="\\u5207\\u6362\\u5F53\\u524D\\u884C\\u4E66\\u7B7E">\\u2605 \\u5207\\u6362\\u5F53\\u524D\\u884C</button>
      </div>
      <div class="\${NS}-hint"></div>
      <div class="\${NS}-list"></div>
    </div>\`;
  const hint = el.querySelector(\`.\${NS}-hint\`);
  const list = el.querySelector(\`.\${NS}-list\`);
  const toggleBtn = el.querySelector(\`.\${NS}-toggle\`);
  currentCtx = ctx;
  currentUi = { handle: null, refresh };
  let off = [];
  async function ensureLoaded() {
    if (ctx.projectDir) await loadProject(ctx.projectDir);
  }
  function refresh() {
    renderList(list, ctx, { onRemove: removeOne });
    renderHint(hint, ctx);
  }
  function removeOne(entry) {
    const dir = ctx.projectDir;
    const arr = store.get(dir) ?? [];
    const i = arr.findIndex((b) => sameFile(b.file, entry.file) && b.line === entry.line);
    if (i >= 0) arr.splice(i, 1);
    store.set(dir, arr);
    saveProject(dir);
    applyDecos();
    refresh();
  }
  toggleBtn.addEventListener("click", () => toggleFromActive());
  async function onActiveChanged() {
    applyDecos();
    refresh();
  }
  async function onProjectChanged(dir) {
    if (currentUi?.handle) {
      currentUi.handle.update([]);
      currentUi.handle = null;
    }
    if (dir) await loadProject(dir);
    applyDecos();
    refresh();
  }
  if (typeof ctx.onDidChangeActiveFile === "function") off.push(ctx.onDidChangeActiveFile(onActiveChanged));
  if (typeof ctx.onProjectChange === "function") off.push(ctx.onProjectChange(onProjectChanged));
  (async () => {
    await ensureLoaded();
    applyDecos();
    refresh();
  })();
  return () => {
    off.forEach((f) => {
      try {
        f();
      } catch {
      }
    });
    if (currentUi?.handle) {
      try {
        currentUi.handle.update([]);
      } catch {
      }
    }
    if (currentCtx === ctx) currentCtx = null;
    if (currentUi && !currentUi.handle) currentUi = null;
    el.replaceChildren();
  };
}
function renderHint(hint, ctx) {
  const dir = ctx.projectDir;
  const total = (store.get(dir) ?? []).length;
  const file = ctx.activeFile;
  const inCur = file ? (store.get(dir) ?? []).filter((b) => sameFile(b.file, file)).length : 0;
  hint.textContent = total ? \`\\u5171 \${total} \\u4E2A\\u4E66\\u7B7E\${file ? \` \\xB7 \\u5F53\\u524D\\u6587\\u4EF6 \${inCur} \\u4E2A\` : ""}\` : "\\u5C1A\\u65E0\\u4E66\\u7B7E\\uFF1A\\u628A\\u5149\\u6807\\u653E\\u5230\\u4E00\\u884C\\uFF0C\\u70B9\\u4E0A\\u65B9\\u6309\\u94AE\\u5207\\u6362\\u3002";
}
function renderList(container, ctx, { onRemove }) {
  const dir = ctx.projectDir;
  const all = store.get(dir) ?? [];
  const cur = ctx.activeFile;
  const groups = [
    { label: "\\u5F53\\u524D\\u6587\\u4EF6", rows: cur ? all.filter((b) => sameFile(b.file, cur)) : [], showFile: false },
    { label: "\\u5176\\u5B83\\u6587\\u4EF6", rows: cur ? all.filter((b) => !sameFile(b.file, cur)) : all, showFile: true }
  ];
  const frag = document.createDocumentFragment();
  let any = false;
  for (const g of groups) {
    if (!g.rows.length) continue;
    any = true;
    const sec = document.createElement("div");
    sec.className = \`\${NS}-group\`;
    const head = document.createElement("div");
    head.className = \`\${NS}-ghead\`;
    head.textContent = \`\${g.label} (\${g.rows.length})\`;
    sec.appendChild(head);
    const wrap = document.createElement("div");
    wrap.className = \`\${NS}-glist\`;
    for (const b of g.rows) {
      const row = document.createElement("div");
      row.className = \`\${NS}-row\`;
      const main = document.createElement("button");
      main.type = "button";
      main.className = \`\${NS}-jump\`;
      main.innerHTML = \`<span class="\${NS}-loc"></span>\${g.showFile ? \`<span class="\${NS}-file"></span>\` : ""}\`;
      main.querySelector(\`.\${NS}-loc\`).textContent = \`:\${b.line}\`;
      if (g.showFile) main.querySelector(\`.\${NS}-file\`).textContent = baseName(b.file);
      main.title = \`\${b.file}:\${b.line}\`;
      main.addEventListener("click", () => {
        try {
          const p = ctx.openFile(b.file, { line: b.line });
          if (p && typeof p.catch === "function") p.catch(() => {
          });
        } catch {
        }
      });
      const rm = document.createElement("button");
      rm.type = "button";
      rm.className = \`\${NS}-rm\`;
      rm.textContent = "\\xD7";
      rm.title = "\\u79FB\\u9664\\u6B64\\u4E66\\u7B7E";
      rm.addEventListener("click", () => onRemove(b));
      row.appendChild(main);
      row.appendChild(rm);
      wrap.appendChild(row);
    }
    sec.appendChild(wrap);
    frag.appendChild(sec);
  }
  if (!any) {
    const empty = document.createElement("div");
    empty.className = \`\${NS}-empty\`;
    empty.textContent = "\\uFF08\\u6B64\\u4F4D\\u7F6E\\u65E0\\u4E66\\u7B7E\\uFF09";
    frag.appendChild(empty);
  }
  container.replaceChildren(frag);
}
function waitForApi(fn, label) {
  let tries = 0;
  const tick = () => {
    let ok = false;
    try {
      ok = fn();
    } catch (e) {
      console.warn(\`[dsh-fw-bookmarks] \${label} failed:\`, e);
    }
    if (ok) return;
    if (++tries > 300) {
      console.warn(\`[dsh-fw-bookmarks] \${label}: injection API not found, giving up.\`);
      return;
    }
    setTimeout(tick, 100);
  };
  tick();
}
injectStyles();
function injectStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(\`\${NS}-styles\`)) return;
  const css = \`
.\${NS}-view { color: var(--dsh-fg, #c9d1d9); font-size: 12px; }
.\${NS}-root { display: flex; flex-direction: column; min-height: 100%; }
.\${NS}-bar { padding: 8px; position: sticky; top: 0; background: var(--dsh-bg, #0d1117); z-index: 1; }
.\${NS}-toggle { width: 100%; padding: 5px 10px; border: 1px solid var(--dsh-border, #30363d); border-radius: 6px; background: var(--dsh-bg2, #161b22); color: inherit; cursor: pointer; }
.\${NS}-toggle:hover { border-color: var(--dsh-accent, #388bfd); }
.\${NS}-hint { padding: 4px 10px; color: var(--dsh-fg-dim, #8b949e); }
.\${NS}-list { flex: 1 1 auto; padding: 0 4px 8px; }
.\${NS}-group { margin: 2px 0; }
.\${NS}-ghead { padding: 3px 8px; color: var(--dsh-fg, #c9d1d9); font-weight: 600; }
.\${NS}-row { display: flex; align-items: center; gap: 4px; }
.\${NS}-jump { flex: 1 1 auto; min-width: 0; display: flex; gap: 6px; align-items: baseline; text-align: left; padding: 2px 8px 2px 16px; border: 0; background: transparent; color: var(--dsh-fg, #c9d1d9); cursor: pointer; border-radius: 4px; white-space: nowrap; overflow: hidden; }
.\${NS}-jump:hover { background: var(--dsh-hover, rgba(177,186,196,0.12)); }
.\${NS}-loc { flex: 0 0 auto; color: var(--dsh-fg-dim, #8b949e); }
.\${NS}-file { overflow: hidden; text-overflow: ellipsis; }
.\${NS}-rm { flex: 0 0 auto; width: 18px; height: 18px; line-height: 16px; border: 0; border-radius: 4px; background: transparent; color: var(--dsh-fg-dim, #8b949e); cursor: pointer; }
.\${NS}-rm:hover { background: var(--dsh-hover, rgba(177,186,196,0.12)); color: #f85149; }
.\${NS}-empty { padding: 6px 12px; color: var(--dsh-fg-dim, #8b949e); font-style: italic; }
\`;
  const style = document.createElement("style");
  style.id = \`\${NS}-styles\`;
  style.textContent = css;
  document.head.appendChild(style);
}
		module.exports = { apply, inject };
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map
`},{id:"@sunjuntao/dsh-fw-linter",name:"外部 Linter",version:"0.1.0",description:"DSH 文件编辑器「外部 Linter」插件：Activity Bar 注入视图，运行用户配置的命令(node --check/tsc/eslint…)捕获诊断，解析 file:line:col message → v5.1 createDecorations 波浪线 + 面板列表点击跳转。对标 VS Code Problems/External Linter。",code:`window.__ModuleLoader__.load({
	id: "@sunjuntao/dsh-fw-linter",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
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

// packages/linter/src/client/index.js
var client_exports = {};
__export(client_exports, {
  apply: () => apply,
  inject: () => inject
});
module.exports = __toCommonJS(client_exports);
var API_KEY = "__dshFileWorkbenchVSCode__";
var PREFIX = "/api/dsh-file-workbench";
var VIEW_ID = "linter.view";
var NS = "dsh-ln";
var inject = [];
function apply(_ctx) {
  waitForApi(
    () => {
      const api = window[API_KEY];
      if (!api || !api.activityBar) return false;
      api.activityBar.register(buildView(api));
      return true;
    },
    \`register \${VIEW_ID}\`
  );
}
var cmdByProject = /* @__PURE__ */ new Map();
var problemsByProject = /* @__PURE__ */ new Map();
var currentCtx = null;
var currentUi = null;
function persistKey(dir) {
  return \`dsh-fw.linter.\${dir}\`;
}
async function loadCommand(dir) {
  if (!dir) return "";
  if (cmdByProject.has(dir)) return cmdByProject.get(dir);
  let cmd = "";
  try {
    const res = await fetch(\`\${PREFIX}/persist?k=\${encodeURIComponent(persistKey(dir))}\`, { headers: { Accept: "application/json" } });
    const body = await res.json().catch(() => null);
    const v = body?.data?.[persistKey(dir)];
    if (typeof v === "string") cmd = v;
  } catch {
  }
  cmdByProject.set(dir, cmd);
  return cmd;
}
function saveCommand(dir, cmd) {
  cmdByProject.set(dir, cmd);
  fetch(\`\${PREFIX}/persist\`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ k: persistKey(dir), v: cmd })
  }).catch(() => {
  });
}
function buildView(api) {
  return {
    id: VIEW_ID,
    title: { zh: "\\u5916\\u90E8\\u8BCA\\u65AD", en: "Problems" },
    description: {
      zh: "\\u8FD0\\u884C\\u53EF\\u914D\\u7F6E lint/tsc/node \\u547D\\u4EE4\\uFF0C\\u628A\\u8BCA\\u65AD\\u6807\\u6210\\u6CE2\\u6D6A\\u7EBF\\u5E76\\u5217\\u6210\\u53EF\\u8DF3\\u8F6C\\u95EE\\u9898\\u9762\\u677F",
      en: "Run a configurable lint/tsc/node command; show squiggles + a jumpable problems panel"
    },
    icon: "warning",
    order: 64,
    when: (ctx) => !!ctx.projectDir,
    mount(el, ctx) {
      return mountView(el, ctx);
    }
  };
}
function tokenize(cmd) {
  const out = [];
  let cur = "";
  let quote = null;
  let started = false;
  for (const ch of cmd) {
    if (quote) {
      if (ch === quote) {
        quote = null;
      } else cur += ch;
    } else if (ch === '"' || ch === "'") {
      quote = ch;
      started = true;
    } else if (/\\s/.test(ch)) {
      if (started || cur) {
        out.push(cur);
        cur = "";
        started = false;
      }
    } else {
      cur += ch;
      started = true;
    }
  }
  if (started || cur) out.push(cur);
  return out.filter(Boolean);
}
async function runCommand(dir, cmd) {
  const args = tokenize(cmd);
  if (!args.length) return "";
  const res = await fetch(\`\${PREFIX}/git/run\`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ path: dir, args })
  });
  const body = await res.json().catch(() => null);
  if (!body?.ok) throw new Error(body?.error || \`HTTP \${res.status}\`);
  const d = body.data || {};
  return \`\${d.stdout ?? ""}
\${d.stderr ?? ""}\`;
}
var SEV_RE = /(error|warning|err|warn|info|note)/i;
function sevFrom(s) {
  const m = s && s.match(SEV_RE);
  const k = m ? m[1].toLowerCase() : "";
  if (k === "warning" || k === "warn") return "warning";
  if (k === "info" || k === "note") return "info";
  return "error";
}
function toAbs(dir, file) {
  const f = String(file).trim().replace(/^["']|["']$/g, "");
  if (/^([a-zA-Z]:[\\\\/]|\\/|\\\\)/.test(f)) return f;
  const sep = /[\\\\/]/.test(dir) && dir.includes("\\\\") ? "\\\\" : "/";
  return dir.replace(/[\\\\/]+$/, "") + sep + f.replace(/^[\\\\/]+/, "");
}
function parseProblems(output, dir) {
  const found = [];
  const push = (file, line, col, severity, message) => {
    const abs = toAbs(dir, file);
    found.push({ file: abs, line: Number(line) || 0, col: Number(col) || 0, severity, message: String(message).trim() });
  };
  for (const raw of String(output).split(/\\r?\\n/)) {
    const line = raw.trimEnd();
    if (!line.trim()) continue;
    let m = line.match(/^(.+?\\.(?:ts|tsx|js|jsx|mjs|cjs|vue))\\((\\d+),(\\d+)\\):\\s+(error|warning)\\b[:\\s]*(.*)$/i);
    if (m) {
      push(m[1], m[2], m[3], sevFrom(m[4]), m[5]);
      continue;
    }
    m = line.match(/^\\s*at\\s.*?\\((.+?):(\\d+):(\\d+)\\)/);
    if (m) {
      push(m[1], m[2], m[3], "error", line.trim());
      continue;
    }
    m = line.match(/^(.+?):(\\d+):(\\d+):\\s*(?:(error|warning|info|note)\\b[:\\s-]*)?(.*)$/i);
    if (m && /\\.(ts|tsx|js|jsx|mjs|cjs|vue|css|scss|less|py|java|go|rs|php|rb|c|cpp|h|json)$/.test(m[1])) {
      push(m[1], m[2], m[3], m[4] ? sevFrom(m[4]) : "error", m[5] || line.trim());
      continue;
    }
    m = line.match(/^(.+?):(\\d+):\\s*(error|warning)\\b[:\\s-]*(.*)$/i);
    if (m && /\\./.test(m[1])) {
      push(m[1], m[2], 0, sevFrom(m[3]), m[4]);
      continue;
    }
  }
  const seen = /* @__PURE__ */ new Set();
  const out = [];
  for (const p of found) {
    const key = \`\${normPath(p.file)}:\${p.line}:\${p.col}:\${p.message}\`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(p);
  }
  return out;
}
function normPath(p) {
  return String(p).replace(/\\\\/g, "/");
}
function sameFile(a, b) {
  return normPath(a).toLowerCase() === normPath(b).toLowerCase();
}
function lineRange(ed, lineNo) {
  const doc = ed?.view?.state?.doc;
  if (!doc || lineNo < 1 || lineNo > doc.lines) return null;
  const ln = doc.line(lineNo);
  return { from: ln.from, len: ln.text.length };
}
function decoItemsFor(ed, file) {
  const dir = currentCtx?.projectDir;
  const probs = (problemsByProject.get(dir) ?? []).filter((p) => sameFile(p.file, file));
  const items = [];
  for (const p of probs) {
    const range = lineRange(ed, p.line);
    if (!range) continue;
    let from = range.from + Math.max(0, (p.col || 1) - 1);
    let to = from + 1;
    if (from > range.from + range.len) {
      from = range.from;
      to = range.from + Math.max(1, range.len);
    }
    items.push({ type: "mark", start: { offset: from }, end: { offset: to }, category: p.severity === "warning" ? "warning" : p.severity === "info" ? "info" : "error", message: \`[\${p.severity}] \${p.message}\` });
  }
  return items;
}
function applyDecos() {
  const ed = currentCtx?.editor;
  const file = currentCtx?.activeFile;
  if (!ed || !file) {
    if (currentUi?.handle) {
      currentUi.handle.update([]);
      currentUi.handle = null;
    }
    return;
  }
  const items = decoItemsFor(ed, file);
  if (!currentUi?.handle) currentUi.handle = ed.createDecorations({ items });
  else currentUi.handle.update(items);
}
function mountView(el, ctx) {
  el.classList.add(\`\${NS}-view\`);
  el.innerHTML = \`
    <div class="\${NS}-root">
      <div class="\${NS}-bar">
        <input class="\${NS}-cmd" type="text" spellcheck="false" placeholder="\\u547D\\u4EE4\\uFF0C\\u5982\\uFF1Anode --check app.js \\uFF5C npx tsc --noEmit \\uFF5C npx eslint ." />
        <button class="\${NS}-run" type="button">\\u8FD0\\u884C</button>
      </div>
      <div class="\${NS}-hint"></div>
      <div class="\${NS}-list"></div>
    </div>\`;
  const cmdInput = el.querySelector(\`.\${NS}-cmd\`);
  const runBtn = el.querySelector(\`.\${NS}-run\`);
  const hint = el.querySelector(\`.\${NS}-hint\`);
  const list = el.querySelector(\`.\${NS}-list\`);
  currentCtx = ctx;
  currentUi = { handle: null, refresh };
  let off = [];
  let running = false;
  async function run() {
    if (running) return;
    const dir = ctx.projectDir;
    if (!dir) return;
    const cmd = cmdInput.value.trim();
    if (!cmd) {
      hint.textContent = "\\u8BF7\\u5148\\u586B\\u5199\\u8981\\u8FD0\\u884C\\u7684\\u547D\\u4EE4\\u3002";
      return;
    }
    saveCommand(dir, cmd);
    running = true;
    runBtn.disabled = true;
    hint.textContent = "\\u6B63\\u5728\\u8FD0\\u884C\\u2026";
    list.replaceChildren();
    try {
      const output = await runCommand(dir, cmd);
      const problems = parseProblems(output, dir);
      problemsByProject.set(dir, problems);
      applyDecos();
      renderList(list, ctx);
      const errs = problems.filter((p) => p.severity === "error").length;
      hint.textContent = problems.length ? \`\\u8BCA\\u65AD \${problems.length} \\u6761\\uFF08error \${errs}\\uFF09\\xB7 \${(/* @__PURE__ */ new Date()).toLocaleTimeString()}\` : \`\\u65E0\\u8BCA\\u65AD\\uFF08\\u9000\\u51FA\\u7801\\u89C1\\u547D\\u4EE4\\u8F93\\u51FA\\uFF09\\xB7 \${(/* @__PURE__ */ new Date()).toLocaleTimeString()}\`;
    } catch (e) {
      hint.textContent = \`\\u8FD0\\u884C\\u5931\\u8D25\\uFF1A\${e?.message ?? e}\`;
    } finally {
      running = false;
      runBtn.disabled = false;
    }
  }
  runBtn.addEventListener("click", run);
  cmdInput.addEventListener("keydown", (ev) => {
    if (ev.key === "Enter") run();
  });
  function refresh() {
    renderList(list, ctx);
  }
  async function onActiveChanged() {
    applyDecos();
  }
  async function onProjectChanged(dir) {
    if (currentUi?.handle) {
      currentUi.handle.update([]);
      currentUi.handle = null;
    }
    cmdInput.value = dir ? await loadCommand(dir) : "";
    applyDecos();
    refresh();
  }
  if (typeof ctx.onDidChangeActiveFile === "function") off.push(ctx.onDidChangeActiveFile(onActiveChanged));
  if (typeof ctx.onProjectChange === "function") off.push(ctx.onProjectChange(onProjectChanged));
  (async () => {
    if (ctx.projectDir) cmdInput.value = await loadCommand(ctx.projectDir) || "";
    refresh();
  })();
  return () => {
    off.forEach((f) => {
      try {
        f();
      } catch {
      }
    });
    if (currentUi?.handle) {
      try {
        currentUi.handle.update([]);
      } catch {
      }
    }
    if (currentCtx === ctx) currentCtx = null;
    el.replaceChildren();
  };
}
function renderList(container, ctx) {
  const dir = ctx.projectDir;
  const problems = problemsByProject.get(dir) ?? [];
  if (!problems.length) {
    container.replaceChildren(empty("\\uFF08\\u6682\\u65E0\\u8BCA\\u65AD\\uFF0C\\u586B\\u547D\\u4EE4\\u540E\\u70B9\\u300C\\u8FD0\\u884C\\u300D\\uFF09"));
    return;
  }
  const byFile = /* @__PURE__ */ new Map();
  for (const p of problems) {
    if (!byFile.has(p.file)) byFile.set(p.file, []);
    byFile.get(p.file).push(p);
  }
  const frag = document.createDocumentFragment();
  for (const [file, rows] of byFile) {
    const group = document.createElement("div");
    group.className = \`\${NS}-group\`;
    const head = document.createElement("button");
    head.type = "button";
    head.className = \`\${NS}-ghead\`;
    head.textContent = \`\${baseName(file)} (\${rows.length})\`;
    head.title = file;
    head.addEventListener("click", () => group.classList.toggle(\`\${NS}-collapsed\`));
    group.appendChild(head);
    const wrap = document.createElement("div");
    wrap.className = \`\${NS}-glist\`;
    for (const p of rows) {
      const row = document.createElement("button");
      row.type = "button";
      row.className = \`\${NS}-row\`;
      row.innerHTML = \`<span class="\${NS}-sev \${NS}-sev-\${p.severity}"></span><span class="\${NS}-loc"></span><span class="\${NS}-msg"></span>\`;
      row.querySelector(\`.\${NS}-sev\`).textContent = p.severity === "error" ? "\\u2715" : p.severity === "info" ? "\\u2139" : "\\u25B2";
      row.querySelector(\`.\${NS}-loc\`).textContent = \`:\${p.line}\${p.col ? ":" + p.col : ""}\`;
      row.querySelector(\`.\${NS}-msg\`).textContent = p.message;
      row.title = \`\${file}:\${p.line}:\${p.col} \${p.message}\`;
      row.addEventListener("click", () => {
        try {
          const pr = ctx.openFile(file, p.line ? { line: p.line } : void 0);
          if (pr && typeof pr.catch === "function") pr.catch(() => {
          });
        } catch {
        }
      });
      wrap.appendChild(row);
    }
    group.appendChild(wrap);
    frag.appendChild(group);
  }
  container.replaceChildren(frag);
}
function empty(text) {
  const d = document.createElement("div");
  d.className = \`\${NS}-empty\`;
  d.textContent = text;
  return d;
}
function baseName(p) {
  const n = normPath(p);
  const i = n.lastIndexOf("/");
  return i >= 0 ? n.slice(i + 1) : n;
}
function waitForApi(fn, label) {
  let tries = 0;
  const tick = () => {
    let ok = false;
    try {
      ok = fn();
    } catch (e) {
      console.warn(\`[dsh-fw-linter] \${label} failed:\`, e);
    }
    if (ok) return;
    if (++tries > 300) {
      console.warn(\`[dsh-fw-linter] \${label}: injection API not found, giving up.\`);
      return;
    }
    setTimeout(tick, 100);
  };
  tick();
}
injectStyles();
function injectStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(\`\${NS}-styles\`)) return;
  const css = \`
.\${NS}-view { color: var(--dsh-fg, #c9d1d9); font-size: 12px; }
.\${NS}-root { display: flex; flex-direction: column; min-height: 100%; }
.\${NS}-bar { display: flex; gap: 6px; padding: 8px; position: sticky; top: 0; background: var(--dsh-bg, #0d1117); z-index: 1; }
.\${NS}-cmd { flex: 1 1 auto; min-width: 0; padding: 4px 8px; border: 1px solid var(--dsh-border, #30363d); border-radius: 6px; background: var(--dsh-bg2, #161b22); color: inherit; outline: none; font-family: var(--dsh-mono, monospace); }
.\${NS}-cmd:focus { border-color: var(--dsh-accent, #388bfd); }
.\${NS}-run { flex: 0 0 auto; padding: 4px 12px; border: 1px solid var(--dsh-border, #30363d); border-radius: 6px; background: var(--dsh-bg2, #161b22); color: inherit; cursor: pointer; }
.\${NS}-run:hover { border-color: var(--dsh-accent, #388bfd); }
.\${NS}-run:disabled { opacity: .5; cursor: default; }
.\${NS}-hint { padding: 4px 10px; color: var(--dsh-fg-dim, #8b949e); }
.\${NS}-list { flex: 1 1 auto; padding: 0 4px 8px; }
.\${NS}-group { margin: 2px 0; }
.\${NS}-ghead { display: block; width: 100%; text-align: left; padding: 3px 8px; border: 0; background: transparent; color: var(--dsh-fg, #c9d1d9); font-weight: 600; cursor: pointer; border-radius: 4px; }
.\${NS}-ghead:hover { background: var(--dsh-bg2, #161b22); }
.\${NS}-collapsed .\${NS}-glist { display: none; }
.\${NS}-row { display: flex; gap: 6px; align-items: baseline; width: 100%; text-align: left; padding: 2px 8px 2px 14px; border: 0; background: transparent; color: var(--dsh-fg, #c9d1d9); cursor: pointer; border-radius: 4px; white-space: nowrap; overflow: hidden; }
.\${NS}-row:hover { background: var(--dsh-hover, rgba(177,186,196,0.12)); }
.\${NS}-sev { flex: 0 0 auto; width: 1em; text-align: center; }
.\${NS}-sev-error { color: #f85149; }
.\${NS}-sev-warning { color: #d29922; }
.\${NS}-sev-info { color: #58a6ff; }
.\${NS}-loc { flex: 0 0 auto; color: var(--dsh-fg-dim, #8b949e); }
.\${NS}-msg { overflow: hidden; text-overflow: ellipsis; }
.\${NS}-empty { padding: 6px 12px; color: var(--dsh-fg-dim, #8b949e); font-style: italic; }
\`;
  const style = document.createElement("style");
  style.id = \`\${NS}-styles\`;
  style.textContent = css;
  document.head.appendChild(style);
}
		module.exports = { apply, inject };
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map
`},{id:"@sunjuntao/dsh-fw-todo-tree",name:"TODO 面板",version:"0.1.0",description:"DSH 文件编辑器「TODO 面板」插件：Activity Bar 注入视图，用 /grep 扫描项目内 TODO/FIXME/HACK/XXX(可配置)标签，按文件分组树形列表点击跳转；当前打开文件用 v5.1 createDecorations 高亮。对标 VS Code Todo Tree。",code:`window.__ModuleLoader__.load({
	id: "@sunjuntao/dsh-fw-todo-tree",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
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

// packages/todo-tree/src/client/index.js
var client_exports = {};
__export(client_exports, {
  apply: () => apply,
  inject: () => inject
});
module.exports = __toCommonJS(client_exports);
var API_KEY = "__dshFileWorkbenchVSCode__";
var PREFIX = "/api/dsh-file-workbench";
var VIEW_ID = "todoTree.view";
var NS = "dsh-td";
var DEFAULT_TAGS = "TODO,FIXME,HACK,XXX";
var inject = [];
function apply(_ctx) {
  waitForApi(
    () => {
      const api = window[API_KEY];
      if (!api || !api.activityBar) return false;
      api.activityBar.register(buildView(api));
      return true;
    },
    \`register \${VIEW_ID}\`
  );
}
var tagsByProject = /* @__PURE__ */ new Map();
var todosByProject = /* @__PURE__ */ new Map();
var currentCtx = null;
var currentUi = null;
function hashKey(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h.toString(16).padStart(8, "0");
}
function persistKey(dir) {
  return \`dsh-fw.todo.\${hashKey(String(dir))}\`;
}
async function loadTags(dir) {
  if (!dir) return DEFAULT_TAGS;
  if (tagsByProject.has(dir)) return tagsByProject.get(dir);
  let tags = DEFAULT_TAGS;
  try {
    const res = await fetch(\`\${PREFIX}/plugin-data?k=\${encodeURIComponent(persistKey(dir))}\`, { headers: { Accept: "application/json" } });
    const body = await res.json().catch(() => null);
    const v = body?.data;
    if (typeof v === "string" && v.trim()) tags = v;
  } catch {
  }
  tagsByProject.set(dir, tags);
  return tags;
}
function saveTags(dir, tags) {
  tagsByProject.set(dir, tags);
  fetch(\`\${PREFIX}/plugin-data\`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ k: persistKey(dir), v: tags })
  }).catch(() => {
  });
}
function buildView(api) {
  return {
    id: VIEW_ID,
    title: { zh: "TODO \\u9762\\u677F", en: "Todo Tree" },
    description: {
      zh: "\\u626B\\u63CF\\u9879\\u76EE\\u5185 TODO/FIXME/HACK \\u7B49\\u6807\\u7B7E\\uFF0C\\u5206\\u7EC4\\u6210\\u53EF\\u8DF3\\u8F6C\\u5217\\u8868\\u5E76\\u9AD8\\u4EAE\\u5F53\\u524D\\u6587\\u4EF6",
      en: "Scan TODO/FIXME/HACK tags across the project into a jumpable tree; highlight current file"
    },
    icon: "check",
    order: 66,
    when: (ctx) => !!ctx.projectDir,
    mount(el, ctx) {
      return mountView(el, ctx);
    }
  };
}
function tagsToRegex(tags) {
  const list = String(tags).split(/[,\\s]+/).map((t) => t.trim()).filter(Boolean).map((t) => t.replace(/[.*+?^\${}()|[\\]\\\\]/g, "\\\\$&"));
  if (!list.length) return "";
  return \`\\\\b(\${list.join("|")})\\\\b\`;
}
async function scan(dir, tags) {
  const re = tagsToRegex(tags);
  if (!re) return [];
  const params = new URLSearchParams({ q: re, path: dir, regex: "1", word: "0", case: "0" });
  const res = await fetch(\`\${PREFIX}/grep?\${params.toString()}\`, { headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
  const body = await res.json().catch(() => null);
  return normalizeHits(body, dir);
}
function normalizeHits(body, dir) {
  const flat = [];
  const push = (file, line, text) => file && flat.push({ file, line: Number(line) || 0, text: String(text ?? "") });
  const data = body?.data ?? body;
  const groups = Array.isArray(data) ? data : data?.files ?? data?.groups ?? data?.matches ?? [];
  if (Array.isArray(groups)) {
    for (const g of groups) {
      const rel = g.rel ?? g.file ?? g.path ?? g.name;
      const file = rel ? joinRoot(dir, rel) : null;
      const inner = g.hits ?? g.lines ?? g.matches ?? [];
      if (Array.isArray(inner)) {
        for (const h of inner) {
          if (h && typeof h === "object") push(file, h.ln ?? h.line, h.text ?? h.content ?? "");
          else push(file, h, "");
        }
      }
    }
  }
  return flat;
}
function joinRoot(dir, rel) {
  const r = normPath(rel).replace(/^\\/+/, "");
  const base = normPath(dir).replace(/\\/+$/, "");
  return \`\${base}/\${r}\`;
}
function normPath(p) {
  return String(p).replace(/\\\\/g, "/");
}
function sameFile(a, b) {
  return normPath(a).toLowerCase() === normPath(b).toLowerCase();
}
function decoItemsFor(ed, file) {
  const dir = currentCtx?.projectDir;
  const todos = (todosByProject.get(dir) ?? []).filter((t) => sameFile(t.file, file));
  const doc = ed?.view?.state?.doc;
  if (!doc) return [];
  const items = [];
  for (const t of todos) {
    if (t.line < 1 || t.line > doc.lines) continue;
    const ln = doc.line(t.line);
    items.push({ type: "mark", start: { line: t.line, character: 1 }, end: { offset: ln.to }, category: "highlight", message: t.text.trim().slice(0, 120) });
    items.push({ type: "gutter", start: { line: t.line, character: 1 }, category: "info", message: "TODO" });
  }
  return items;
}
function applyDecos() {
  const ed = currentCtx?.editor;
  const file = currentCtx?.activeFile;
  if (!ed || !file) {
    if (currentUi?.handle) {
      currentUi.handle.update([]);
      currentUi.handle = null;
    }
    return;
  }
  const items = decoItemsFor(ed, file);
  if (!currentUi?.handle) currentUi.handle = ed.createDecorations({ items });
  else currentUi.handle.update(items);
}
function mountView(el, ctx) {
  el.classList.add(\`\${NS}-view\`);
  el.innerHTML = \`
    <div class="\${NS}-root">
      <div class="\${NS}-bar">
        <input class="\${NS}-tags" type="text" spellcheck="false" placeholder="TODO,FIXME,HACK,XXX" />
        <button class="\${NS}-scan" type="button">\\u626B\\u63CF</button>
      </div>
      <div class="\${NS}-hint"></div>
      <div class="\${NS}-tree"></div>
    </div>\`;
  const tagsInput = el.querySelector(\`.\${NS}-tags\`);
  const scanBtn = el.querySelector(\`.\${NS}-scan\`);
  const hint = el.querySelector(\`.\${NS}-hint\`);
  const tree = el.querySelector(\`.\${NS}-tree\`);
  currentCtx = ctx;
  currentUi = { handle: null, refresh };
  let off = [];
  let scanning = false;
  async function doScan() {
    if (scanning) return;
    const dir = ctx.projectDir;
    if (!dir) return;
    const tags = tagsInput.value.trim() || DEFAULT_TAGS;
    saveTags(dir, tags);
    scanning = true;
    scanBtn.disabled = true;
    hint.textContent = "\\u6B63\\u5728\\u626B\\u63CF\\u9879\\u76EE\\u2026";
    tree.replaceChildren();
    try {
      const todos = await scan(dir, tags);
      todosByProject.set(dir, todos);
      applyDecos();
      renderTree(tree, ctx);
      hint.textContent = todos.length ? \`\\u547D\\u4E2D \${todos.length} \\u6761 \\xB7 \${countFiles(todos)} \\u4E2A\\u6587\\u4EF6\` : "\\u672A\\u627E\\u5230\\u5339\\u914D\\u7684\\u6807\\u7B7E";
    } catch (e) {
      hint.textContent = \`\\u626B\\u63CF\\u5931\\u8D25\\uFF1A\${e?.message ?? e}\`;
    } finally {
      scanning = false;
      scanBtn.disabled = false;
    }
  }
  scanBtn.addEventListener("click", doScan);
  tagsInput.addEventListener("keydown", (ev) => {
    if (ev.key === "Enter") doScan();
  });
  function refresh() {
    renderTree(tree, ctx);
  }
  function onActiveChanged() {
    applyDecos();
  }
  async function onProjectChanged(dir) {
    if (currentUi?.handle) {
      currentUi.handle.update([]);
      currentUi.handle = null;
    }
    tagsInput.value = dir ? await loadTags(dir) : DEFAULT_TAGS;
    applyDecos();
    refresh();
  }
  if (typeof ctx.onDidChangeActiveFile === "function") off.push(ctx.onDidChangeActiveFile(onActiveChanged));
  if (typeof ctx.onProjectChange === "function") off.push(ctx.onProjectChange(onProjectChanged));
  (async () => {
    if (ctx.projectDir) tagsInput.value = await loadTags(ctx.projectDir) || DEFAULT_TAGS;
    if (ctx.projectDir) doScan();
  })();
  return () => {
    off.forEach((f) => {
      try {
        f();
      } catch {
      }
    });
    if (currentUi?.handle) {
      try {
        currentUi.handle.update([]);
      } catch {
      }
    }
    if (currentCtx === ctx) currentCtx = null;
    el.replaceChildren();
  };
}
function countFiles(todos) {
  const s = /* @__PURE__ */ new Set();
  for (const t of todos) s.add(normPath(t.file).toLowerCase());
  return s.size;
}
function renderTree(container, ctx) {
  const dir = ctx.projectDir;
  const todos = todosByProject.get(dir) ?? [];
  if (!todos.length) {
    container.replaceChildren(emptyNode("\\uFF08\\u6682\\u65E0\\u7ED3\\u679C\\uFF0C\\u70B9\\u300C\\u626B\\u63CF\\u300D\\u641C\\u7D22\\u9879\\u76EE\\uFF09"));
    return;
  }
  const byFile = /* @__PURE__ */ new Map();
  for (const t of todos) {
    if (!byFile.has(t.file)) byFile.set(t.file, []);
    byFile.get(t.file).push(t);
  }
  const frag = document.createDocumentFragment();
  for (const [file, rows] of byFile) {
    const group = document.createElement("div");
    group.className = \`\${NS}-group\`;
    const head = document.createElement("button");
    head.type = "button";
    head.className = \`\${NS}-ghead\`;
    head.textContent = \`\${baseName(file)} (\${rows.length})\`;
    head.title = file;
    head.addEventListener("click", () => group.classList.toggle(\`\${NS}-collapsed\`));
    group.appendChild(head);
    const wrap = document.createElement("div");
    wrap.className = \`\${NS}-glist\`;
    for (const r of rows) {
      const row = document.createElement("button");
      row.type = "button";
      row.className = \`\${NS}-row\`;
      row.innerHTML = \`<span class="\${NS}-lineno">\${r.line}</span><span class="\${NS}-line"></span>\`;
      row.querySelector(\`.\${NS}-line\`).appendChild(highlightTag(r.text));
      row.title = \`\${file}:\${r.line}\`;
      row.addEventListener("click", () => {
        try {
          const p = ctx.openFile(file, r.line ? { line: r.line } : void 0);
          if (p && typeof p.catch === "function") p.catch(() => {
          });
        } catch {
        }
      });
      wrap.appendChild(row);
    }
    group.appendChild(wrap);
    frag.appendChild(group);
  }
  container.replaceChildren(frag);
}
function highlightTag(text) {
  const span = document.createElement("span");
  const re = /\\b(TODO|FIXME|HACK|XXX|NOTE)\\b/i;
  const m = text.match(re);
  if (!m) {
    span.textContent = text.trim();
    return span;
  }
  span.appendChild(document.createTextNode(text.slice(0, m.index)));
  const tag = document.createElement("span");
  tag.className = \`\${NS}-tag\`;
  tag.textContent = m[0];
  span.appendChild(tag);
  span.appendChild(document.createTextNode(text.slice(m.index + m[0].length).trim()));
  return span;
}
function emptyNode(text) {
  const d = document.createElement("div");
  d.className = \`\${NS}-empty\`;
  d.textContent = text;
  return d;
}
function baseName(p) {
  const n = normPath(p);
  const i = n.lastIndexOf("/");
  return i >= 0 ? n.slice(i + 1) : n;
}
function waitForApi(fn, label) {
  let tries = 0;
  const tick = () => {
    let ok = false;
    try {
      ok = fn();
    } catch (e) {
      console.warn(\`[dsh-fw-todo-tree] \${label} failed:\`, e);
    }
    if (ok) return;
    if (++tries > 300) {
      console.warn(\`[dsh-fw-todo-tree] \${label}: injection API not found, giving up.\`);
      return;
    }
    setTimeout(tick, 100);
  };
  tick();
}
injectStyles();
function injectStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(\`\${NS}-styles\`)) return;
  const css = \`
.\${NS}-view { color: var(--dsh-fg, #c9d1d9); font-size: 12px; }
.\${NS}-root { display: flex; flex-direction: column; min-height: 100%; }
.\${NS}-bar { display: flex; gap: 6px; padding: 8px; position: sticky; top: 0; background: var(--dsh-bg, #0d1117); z-index: 1; }
.\${NS}-tags { flex: 1 1 auto; min-width: 0; padding: 4px 8px; border: 1px solid var(--dsh-border, #30363d); border-radius: 6px; background: var(--dsh-bg2, #161b22); color: inherit; outline: none; }
.\${NS}-tags:focus { border-color: var(--dsh-accent, #388bfd); }
.\${NS}-scan { flex: 0 0 auto; padding: 4px 12px; border: 1px solid var(--dsh-border, #30363d); border-radius: 6px; background: var(--dsh-bg2, #161b22); color: inherit; cursor: pointer; }
.\${NS}-scan:hover { border-color: var(--dsh-accent, #388bfd); }
.\${NS}-scan:disabled { opacity: .5; cursor: default; }
.\${NS}-hint { padding: 4px 10px; color: var(--dsh-fg-dim, #8b949e); }
.\${NS}-tree { flex: 1 1 auto; padding: 0 4px 8px; }
.\${NS}-group { margin: 2px 0; }
.\${NS}-ghead { display: block; width: 100%; text-align: left; padding: 3px 8px; border: 0; background: transparent; color: var(--dsh-fg, #c9d1d9); font-weight: 600; cursor: pointer; border-radius: 4px; }
.\${NS}-ghead:hover { background: var(--dsh-bg2, #161b22); }
.\${NS}-collapsed .\${NS}-glist { display: none; }
.\${NS}-row { display: flex; gap: 8px; width: 100%; text-align: left; padding: 2px 8px 2px 16px; border: 0; background: transparent; color: var(--dsh-fg, #c9d1d9); cursor: pointer; border-radius: 4px; white-space: nowrap; overflow: hidden; }
.\${NS}-row:hover { background: var(--dsh-hover, rgba(177,186,196,0.12)); }
.\${NS}-lineno { flex: 0 0 auto; min-width: 2.5em; text-align: right; color: var(--dsh-fg-dim, #8b949e); }
.\${NS}-line { overflow: hidden; text-overflow: ellipsis; }
.\${NS}-tag { color: #d29922; font-weight: 700; }
.\${NS}-empty { padding: 6px 12px; color: var(--dsh-fg-dim, #8b949e); font-style: italic; }
\`;
  const style = document.createElement("style");
  style.id = \`\${NS}-styles\`;
  style.textContent = css;
  document.head.appendChild(style);
}
		module.exports = { apply, inject };
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map
`},{id:"@sunjuntao/dsh-fw-gitlens-lite",name:"GitLens-lite",version:"0.1.0",description:"DSH 文件编辑器「GitLens-lite」插件：Activity Bar 注入视图，对当前文件跑 git blame(经 /git/run --porcelain)，行级作者/时间列成面板并点击定位；用 v5.1 createDecorations widget 在行尾追加幽灵注释。对标 VS Code GitLens inline blame。",code:`window.__ModuleLoader__.load({
	id: "@sunjuntao/dsh-fw-gitlens-lite",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
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

// packages/gitlens-lite/src/client/index.js
var client_exports = {};
__export(client_exports, {
  apply: () => apply,
  inject: () => inject
});
module.exports = __toCommonJS(client_exports);
var API_KEY = "__dshFileWorkbenchVSCode__";
var PREFIX = "/api/dsh-file-workbench";
var VIEW_ID = "gitlens.view";
var NS = "dsh-gl";
var inject = [];
function apply(_ctx) {
  waitForApi(
    () => {
      const api = window[API_KEY];
      if (!api || !api.activityBar) return false;
      api.activityBar.register(buildView(api));
      return true;
    },
    \`register \${VIEW_ID}\`
  );
}
var blameByFile = /* @__PURE__ */ new Map();
var currentCtx = null;
var currentUi = null;
function buildView(api) {
  return {
    id: VIEW_ID,
    title: { zh: "Git \\u8FFD\\u6EAF", en: "GitLens-lite" },
    description: {
      zh: "\\u5BF9\\u5F53\\u524D\\u6587\\u4EF6 git blame\\uFF0C\\u884C\\u5C3E\\u5E7D\\u7075\\u6CE8\\u91CA + \\u53EF\\u8DF3\\u8F6C\\u7684\\u4F5C\\u8005/\\u65F6\\u95F4\\u5217\\u8868",
      en: "git blame the active file: inline ghost annotations + a jumpable author list"
    },
    icon: "commit",
    order: 68,
    when: (ctx) => !!ctx.projectDir,
    mount(el, ctx) {
      return mountView(el, ctx);
    }
  };
}
function normPath(p) {
  return String(p).replace(/\\\\/g, "/");
}
function relPath(dir, file) {
  const d = normPath(dir).replace(/\\/+$/, "").toLowerCase();
  const f = normPath(file);
  if (f.toLowerCase().startsWith(d)) {
    let r = f.slice(d.length).replace(/^\\/+/, "");
    return r || ".";
  }
  return f;
}
async function fetchBlame(dir, file) {
  const rel = relPath(dir, file);
  const res = await fetch(\`\${PREFIX}/git/run\`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ path: dir, args: ["blame", "--porcelain", "--", rel] })
  });
  const body = await res.json().catch(() => null);
  if (!body?.ok) throw new Error(body?.error || \`HTTP \${res.status}\`);
  const d = body.data || {};
  if (d.code !== 0) throw new Error((d.stderr || "git blame \\u5931\\u8D25").trim().slice(0, 200));
  return parsePorcelain(d.stdout || "", file);
}
function parsePorcelain(out, file) {
  const map = /* @__PURE__ */ new Map();
  const lines = out.split(/\\r?\\n/);
  let cur = null;
  for (const line of lines) {
    if (line.startsWith("	")) {
      if (cur && cur.final != null) {
        map.set(cur.final, {
          sha: cur.sha,
          author: cur.author || "?",
          when: cur.authorTime ? new Date(cur.authorTime * 1e3) : null,
          summary: cur.summary || "",
          text: line.slice(1),
          file
        });
      }
      cur = null;
      continue;
    }
    const header = line.match(/^([0-9a-f]{40})\\s+(\\d+)\\s+(\\d+)/);
    if (header) {
      const sha = header[1];
      if (cur && cur.sha === sha) {
        cur.final = Number(header[3]);
      } else {
        cur = { sha, final: Number(header[3]), author: "", authorTime: 0, summary: "" };
      }
      continue;
    }
    if (!cur) continue;
    let m = line.match(/^author\\s+(.*)$/);
    if (m) {
      cur.author = m[1];
      continue;
    }
    m = line.match(/^author-time\\s+(\\d+)$/);
    if (m) {
      cur.authorTime = Number(m[1]);
      continue;
    }
    m = line.match(/^summary\\s+(.*)$/);
    if (m) {
      cur.summary = m[1];
      continue;
    }
  }
  return map;
}
function fmtDate(d) {
  if (!d) return "";
  const y = d.getFullYear();
  const mo = String(d.getMonth() + 1).padStart(2, "0");
  const da = String(d.getDate()).padStart(2, "0");
  return \`\${y}-\${mo}-\${da}\`;
}
function decoItemsFor(ed, file) {
  const blame = blameByFile.get(normPath(file).toLowerCase());
  const doc = ed?.view?.state?.doc;
  if (!blame || !doc) return [];
  const items = [];
  for (const [lineNo, e] of blame) {
    if (lineNo < 1 || lineNo > doc.lines) continue;
    const label = \`\\u2014 \${e.author}\${e.when ? ", " + fmtDate(e.when) : ""}\`;
    items.push({ type: "widget", start: { line: lineNo, character: 1 }, message: label });
  }
  return items;
}
function applyDecos() {
  const ed = currentCtx?.editor;
  const file = currentCtx?.activeFile;
  if (!ed || !file) {
    if (currentUi?.handle) {
      currentUi.handle.update([]);
      currentUi.handle = null;
    }
    return;
  }
  const items = decoItemsFor(ed, file);
  if (!items.length) {
    if (currentUi?.handle) {
      currentUi.handle.update([]);
      currentUi.handle = null;
    }
    return;
  }
  if (!currentUi?.handle) currentUi.handle = ed.createDecorations({ items });
  else currentUi.handle.update(items);
}
function mountView(el, ctx) {
  el.classList.add(\`\${NS}-view\`);
  el.innerHTML = \`
    <div class="\${NS}-root">
      <div class="\${NS}-bar">
        <button class="\${NS}-refresh" type="button">\\u21BB \\u8FFD\\u6EAF\\u5F53\\u524D\\u6587\\u4EF6</button>
      </div>
      <div class="\${NS}-hint"></div>
      <div class="\${NS}-list"></div>
    </div>\`;
  const refreshBtn = el.querySelector(\`.\${NS}-refresh\`);
  const hint = el.querySelector(\`.\${NS}-hint\`);
  const list = el.querySelector(\`.\${NS}-list\`);
  currentCtx = ctx;
  currentUi = { handle: null, render };
  let off = [];
  let busy = false;
  async function doBlame() {
    if (busy) return;
    const dir = ctx.projectDir;
    const file = ctx.activeFile;
    if (!dir || !file) {
      hint.textContent = "\\u8BF7\\u5148\\u5728\\u7F16\\u8F91\\u5668\\u4E2D\\u6253\\u5F00\\u4E00\\u4E2A\\u6587\\u4EF6\\u3002";
      clear();
      return;
    }
    busy = true;
    refreshBtn.disabled = true;
    hint.textContent = "\\u6B63\\u5728 git blame\\u2026";
    try {
      const blame = await fetchBlame(dir, file);
      blameByFile.set(normPath(file).toLowerCase(), blame);
      applyDecos();
      render(file);
      hint.textContent = blame.size ? \`\${baseName(file)} \\xB7 \${blame.size} \\u884C\\u5DF2\\u8FFD\\u6EAF\` : \`\${baseName(file)} \\xB7 \\u65E0 blame \\u7ED3\\u679C\`;
    } catch (e) {
      hint.textContent = \`\\u8FFD\\u6EAF\\u5931\\u8D25\\uFF1A\${e?.message ?? e}\\uFF08\\u6587\\u4EF6\\u53EF\\u80FD\\u4E0D\\u5728 git \\u4ED3\\u5E93\\u5185\\u6216\\u5C1A\\u672A\\u63D0\\u4EA4\\uFF09\`;
      clear();
    } finally {
      busy = false;
      refreshBtn.disabled = false;
    }
  }
  function clear() {
    if (currentUi?.handle) {
      currentUi.handle.update([]);
      currentUi.handle = null;
    }
    list.replaceChildren();
  }
  function render(file) {
    renderList(list, ctx, file);
  }
  function onActiveChanged() {
    const file = ctx.activeFile;
    const cached = file ? blameByFile.get(normPath(file).toLowerCase()) : null;
    applyDecos();
    if (cached && file) {
      render(file);
      hint.textContent = \`\${baseName(file)} \\xB7 \${cached.size} \\u884C\\u5DF2\\u8FFD\\u6EAF\`;
    } else {
      list.replaceChildren();
      hint.textContent = file ? "\\u6B64\\u6587\\u4EF6\\u5C1A\\u672A\\u8FFD\\u6EAF\\uFF0C\\u70B9\\u4E0A\\u65B9\\u6309\\u94AE\\u8FD0\\u884C git blame\\u3002" : "\\u65E0\\u6FC0\\u6D3B\\u6587\\u4EF6\\u3002";
    }
  }
  function onProjectChanged() {
    clear();
    list.replaceChildren();
    hint.textContent = "";
  }
  refreshBtn.addEventListener("click", doBlame);
  if (typeof ctx.onDidChangeActiveFile === "function") off.push(ctx.onDidChangeActiveFile(onActiveChanged));
  if (typeof ctx.onProjectChange === "function") off.push(ctx.onProjectChange(onProjectChanged));
  requestAnimationFrame(onActiveChanged);
  return () => {
    off.forEach((f) => {
      try {
        f();
      } catch {
      }
    });
    if (currentUi?.handle) {
      try {
        currentUi.handle.update([]);
      } catch {
      }
    }
    if (currentCtx === ctx) currentCtx = null;
    el.replaceChildren();
  };
}
function renderList(container, ctx, file) {
  const blame = blameByFile.get(normPath(file).toLowerCase());
  if (!blame || !blame.size) {
    container.replaceChildren(emptyNode("\\uFF08\\u65E0 blame \\u7ED3\\u679C\\uFF09"));
    return;
  }
  const rows = [...blame.entries()].sort((a, b) => a[0] - b[0]);
  const frag = document.createDocumentFragment();
  for (const [lineNo, e] of rows) {
    const row = document.createElement("button");
    row.type = "button";
    row.className = \`\${NS}-row\`;
    row.innerHTML = \`<span class="\${NS}-lineno">\${lineNo}</span><span class="\${NS}-meta"></span><span class="\${NS}-sum"></span>\`;
    row.querySelector(\`.\${NS}-meta\`).textContent = \`\${e.author}\${e.when ? " \\xB7 " + fmtDate(e.when) : ""}\`;
    row.querySelector(\`.\${NS}-sum\`).textContent = e.summary || "";
    row.title = \`\${e.sha?.slice(0, 8) ?? ""} \${e.summary || ""}\`;
    row.addEventListener("click", () => {
      try {
        const p = ctx.openFile(file, { line: lineNo });
        if (p && typeof p.catch === "function") p.catch(() => {
        });
      } catch {
      }
    });
    frag.appendChild(row);
  }
  container.replaceChildren(frag);
}
function emptyNode(text) {
  const d = document.createElement("div");
  d.className = \`\${NS}-empty\`;
  d.textContent = text;
  return d;
}
function baseName(p) {
  const n = normPath(p);
  const i = n.lastIndexOf("/");
  return i >= 0 ? n.slice(i + 1) : n;
}
function waitForApi(fn, label) {
  let tries = 0;
  const tick = () => {
    let ok = false;
    try {
      ok = fn();
    } catch (e) {
      console.warn(\`[dsh-fw-gitlens-lite] \${label} failed:\`, e);
    }
    if (ok) return;
    if (++tries > 300) {
      console.warn(\`[dsh-fw-gitlens-lite] \${label}: injection API not found, giving up.\`);
      return;
    }
    setTimeout(tick, 100);
  };
  tick();
}
injectStyles();
function injectStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(\`\${NS}-styles\`)) return;
  const css = \`
.\${NS}-view { color: var(--dsh-fg, #c9d1d9); font-size: 12px; }
.\${NS}-root { display: flex; flex-direction: column; min-height: 100%; }
.\${NS}-bar { padding: 8px; position: sticky; top: 0; background: var(--dsh-bg, #0d1117); z-index: 1; }
.\${NS}-refresh { width: 100%; padding: 5px 10px; border: 1px solid var(--dsh-border, #30363d); border-radius: 6px; background: var(--dsh-bg2, #161b22); color: inherit; cursor: pointer; }
.\${NS}-refresh:hover { border-color: var(--dsh-accent, #388bfd); }
.\${NS}-refresh:disabled { opacity: .5; cursor: default; }
.\${NS}-hint { padding: 4px 10px; color: var(--dsh-fg-dim, #8b949e); }
.\${NS}-list { flex: 1 1 auto; padding: 0 4px 8px; overflow: auto; }
.\${NS}-row { display: flex; gap: 8px; align-items: baseline; width: 100%; text-align: left; padding: 2px 8px; border: 0; background: transparent; color: var(--dsh-fg, #c9d1d9); cursor: pointer; border-radius: 4px; white-space: nowrap; overflow: hidden; }
.\${NS}-row:hover { background: var(--dsh-hover, rgba(177,186,196,0.12)); }
.\${NS}-lineno { flex: 0 0 auto; min-width: 2.5em; text-align: right; color: var(--dsh-fg-dim, #8b949e); }
.\${NS}-meta { flex: 0 0 auto; color: var(--dsh-fg, #c9d1d9); }
.\${NS}-sum { overflow: hidden; text-overflow: ellipsis; color: var(--dsh-fg-dim, #8b949e); }
.\${NS}-empty { padding: 6px 12px; color: var(--dsh-fg-dim, #8b949e); font-style: italic; }
\`;
  const style = document.createElement("style");
  style.id = \`\${NS}-styles\`;
  style.textContent = css;
  document.head.appendChild(style);
}
		module.exports = { apply, inject };
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map
`},{id:"@sunjuntao/dsh-fw-outline",name:"大纲符号导航",version:"0.1.0",description:"DSH 文件编辑器「大纲符号导航」插件：Activity Bar 注入视图，基于 dsh-file-workbench-lib v5 注入 API（window.__dshFileWorkbenchVSCode__）。",code:`window.__ModuleLoader__.load({
	id: "@sunjuntao/dsh-fw-outline",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
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

// packages/outline/src/client/index.js
var client_exports = {};
__export(client_exports, {
  apply: () => apply,
  inject: () => inject
});
module.exports = __toCommonJS(client_exports);
var API_KEY = "__dshFileWorkbenchVSCode__";
var VIEW_ID = "outline.view";
var NS = "dsh-ol";
var inject = [];
function apply(_ctx) {
  waitForApi(
    () => {
      const api = window[API_KEY];
      if (!api || !api.activityBar) return false;
      api.activityBar.register(buildView());
      return true;
    },
    \`register \${VIEW_ID}\`
  );
}
var currentCtx = null;
function buildView() {
  return {
    id: VIEW_ID,
    title: { zh: "\\u5927\\u7EB2", en: "Outline" },
    description: {
      zh: "\\u4ECE\\u5F53\\u524D\\u7F13\\u51B2\\u63D0\\u53D6\\u51FD\\u6570/\\u7C7B/\\u6807\\u9898\\u7B49\\u7B26\\u53F7\\uFF0C\\u5217\\u8868\\u5E76\\u70B9\\u51FB\\u8DF3\\u8F6C",
      en: "Extract symbols (functions/classes/headings) from the active buffer and jump to them"
    },
    icon: "list-unordered",
    order: 63,
    when: (ctx) => !!ctx.projectDir,
    mount(el, ctx) {
      return mountView(el, ctx);
    }
  };
}
var JS_TS = [
  { re: /^\\s*(?:export\\s+)?(?:default\\s+)?async\\s+function\\*?\\s+([A-Za-z_$][\\w$]*)/, kind: "function" },
  { re: /^\\s*(?:export\\s+)?function\\*?\\s+([A-Za-z_$][\\w$]*)/, kind: "function" },
  { re: /^\\s*(?:export\\s+)?class\\s+([A-Za-z_$][\\w$]*)/, kind: "class" },
  { re: /^\\s*(?:export\\s+)?interface\\s+([A-Za-z_$][\\w$]*)/, kind: "interface" },
  { re: /^\\s*(?:export\\s+)?type\\s+([A-Za-z_$][\\w$]*)\\s*=/, kind: "type" },
  { re: /^\\s*(?:export\\s+)?enum\\s+([A-Za-z_$][\\w$]*)/, kind: "enum" },
  { re: /^\\s*(?:export\\s+)?const\\s+([A-Za-z_$][\\w$]*)\\s*=\\s*(?:async\\s*)?\\(/, kind: "function" },
  { re: /^\\s*(?:export\\s+)?const\\s+([A-Za-z_$][\\w$]*)\\s*=\\s*(?:async\\s*)?[A-Za-z_$][\\w$]*\\s*=>/, kind: "variable" }
];
var PY = [
  { re: /^\\s*(?:async\\s+)?def\\s+([A-Za-z_]\\w*)/, kind: "function" },
  { re: /^\\s*class\\s+([A-Za-z_]\\w*)/, kind: "class" }
];
var MD = [{ re: /^(#{1,6})\\s+(.*)$/, kind: "heading", heading: true }];
function extKind(file) {
  const f = String(file).toLowerCase();
  if (/\\.(ts|tsx|js|jsx|mjs|cjs)$/.test(f)) return JS_TS;
  if (/\\.py$/.test(f)) return PY;
  if (/\\.(md|markdown)$/.test(f)) return MD;
  return JS_TS;
}
function extractSymbols(text, file) {
  const rules = extKind(file);
  const lines = text.split("\\n");
  const out = [];
  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    if (!raw.trim()) continue;
    for (const r of rules) {
      const m = raw.match(r.re);
      if (!m) continue;
      if (r.heading) {
        out.push({ line: i + 1, kind: "heading", depth: m[1].length, name: m[2].trim() });
      } else {
        out.push({ line: i + 1, kind: r.kind, name: m[1] });
      }
      break;
    }
  }
  return out;
}
var KIND_GLYPH = {
  function: "\\u0192",
  class: "C",
  interface: "I",
  type: "T",
  enum: "E",
  variable: "v",
  heading: "#"
};
function renderList(container, ctx, syms) {
  if (!syms.length) {
    container.replaceChildren(emptyNode("\\u672A\\u53D1\\u73B0\\u53EF\\u5C55\\u793A\\u7684\\u7B26\\u53F7\\u3002"));
    return;
  }
  const frag = document.createDocumentFragment();
  for (const s of syms) {
    const row = document.createElement("button");
    row.type = "button";
    row.className = \`\${NS}-row\`;
    if (s.kind === "heading") row.style.paddingLeft = \`\${8 + (s.depth - 1) * 10}px\`;
    const glyph = document.createElement("span");
    glyph.className = \`\${NS}-kind \${NS}-k-\${s.kind}\`;
    glyph.textContent = KIND_GLYPH[s.kind] || "\\u2022";
    glyph.title = s.kind;
    const name = document.createElement("span");
    name.className = \`\${NS}-symname\`;
    name.textContent = s.name;
    const ln = document.createElement("span");
    ln.className = \`\${NS}-lineno\`;
    ln.textContent = String(s.line);
    row.append(glyph, name, ln);
    row.addEventListener("click", () => {
      const file = ctx.activeFile;
      if (!file) return;
      try {
        const p = ctx.openFile(file, { line: s.line });
        if (p && typeof p.catch === "function") p.catch(() => {
        });
      } catch {
      }
    });
    frag.appendChild(row);
  }
  container.replaceChildren(frag);
}
function emptyNode(text) {
  const d = document.createElement("div");
  d.className = \`\${NS}-empty\`;
  d.textContent = text;
  return d;
}
function mountView(el, ctx) {
  el.classList.add(\`\${NS}-view\`);
  el.innerHTML = \`
    <div class="\${NS}-root">
      <div class="\${NS}-bar"><span class="\${NS}-title"></span></div>
      <div class="\${NS}-hint"></div>
      <div class="\${NS}-list"></div>
    </div>\`;
  const titleEl = el.querySelector(\`.\${NS}-title\`);
  const hint = el.querySelector(\`.\${NS}-hint\`);
  const list = el.querySelector(\`.\${NS}-list\`);
  currentCtx = ctx;
  let off = [];
  function refresh() {
    const ed = ctx.editor;
    const file = ctx.activeFile;
    titleEl.textContent = file ? baseName(file) : "\\u65E0\\u6FC0\\u6D3B\\u6587\\u4EF6";
    if (!ed || !file) {
      hint.textContent = "";
      list.replaceChildren(emptyNode("\\u5728\\u7F16\\u8F91\\u5668\\u6253\\u5F00\\u4E00\\u4E2A\\u6587\\u4EF6\\u4EE5\\u67E5\\u770B\\u5176\\u5927\\u7EB2\\u3002"));
      return;
    }
    const syms = extractSymbols(ed.getText?.() ?? "", file);
    hint.textContent = syms.length ? \`\${syms.length} \\u4E2A\\u7B26\\u53F7\` : "";
    renderList(list, ctx, syms);
  }
  if (typeof ctx.onDidChangeActiveFile === "function") off.push(ctx.onDidChangeActiveFile(refresh));
  if (typeof ctx.editor?.onDidChangeTextDocument === "function") off.push(ctx.editor.onDidChangeTextDocument(refresh));
  if (typeof ctx.onProjectChange === "function") off.push(ctx.onProjectChange(refresh));
  requestAnimationFrame(refresh);
  return () => {
    off.forEach((f) => {
      try {
        f();
      } catch {
      }
    });
    if (currentCtx === ctx) currentCtx = null;
    el.replaceChildren();
  };
}
function baseName(p) {
  const n = String(p).replace(/\\\\/g, "/");
  const i = n.lastIndexOf("/");
  return i >= 0 ? n.slice(i + 1) : n;
}
function waitForApi(fn, label) {
  let tries = 0;
  const tick = () => {
    let ok = false;
    try {
      ok = fn();
    } catch (e) {
      console.warn(\`[dsh-fw-outline] \${label} failed:\`, e);
    }
    if (ok) return;
    if (++tries > 300) {
      console.warn(\`[dsh-fw-outline] \${label}: injection API not found, giving up.\`);
      return;
    }
    setTimeout(tick, 100);
  };
  tick();
}
injectStyles();
function injectStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(\`\${NS}-styles\`)) return;
  const css = \`
.\${NS}-view { color: var(--dsh-fg, #c9d1d9); font-size: 12px; }
.\${NS}-root { display: flex; flex-direction: column; min-height: 100%; }
.\${NS}-bar { padding: 8px 10px; position: sticky; top: 0; background: var(--dsh-bg, #0d1117); border-bottom: 1px solid var(--dsh-border, #30363d); z-index: 1; }
.\${NS}-title { font-weight: 600; color: var(--dsh-fg-dim, #8b949e); }
.\${NS}-hint { padding: 4px 10px; color: var(--dsh-fg-dim, #8b949e); }
.\${NS}-list { flex: 1 1 auto; padding: 0 4px 8px; overflow: auto; }
.\${NS}-row { display: flex; gap: 8px; align-items: center; width: 100%; text-align: left; padding: 2px 8px; border: 0; background: transparent; color: var(--dsh-fg, #c9d1d9); cursor: pointer; border-radius: 4px; white-space: nowrap; overflow: hidden; }
.\${NS}-row:hover { background: var(--dsh-hover, rgba(177,186,196,0.12)); }
.\${NS}-kind { flex: 0 0 auto; width: 16px; height: 16px; line-height: 16px; text-align: center; border-radius: 4px; font-size: 11px; font-weight: 700; background: var(--dsh-bg2,#161b22); color: var(--dsh-fg-dim,#8b949e); }
.\${NS}-k-function { color: #d2a8ff; } .\${NS}-k-class { color: #ffa657; } .\${NS}-k-interface { color: #7ee787; }
.\${NS}-k-type { color: #79c0ff; } .\${NS}-k-enum { color: #ffa657; } .\${NS}-k-heading { color: #388bfd; }
.\${NS}-symname { flex: 1 1 auto; min-width: 0; overflow: hidden; text-overflow: ellipsis; }
.\${NS}-lineno { flex: 0 0 auto; color: var(--dsh-fg-dim, #8b949e); font-family: var(--dsh-mono, monospace); }
.\${NS}-empty { padding: 6px 12px; color: var(--dsh-fg-dim, #8b949e); font-style: italic; }
\`;
  const style = document.createElement("style");
  style.id = \`\${NS}-styles\`;
  style.textContent = css;
  document.head.appendChild(style);
}
		module.exports = { apply, inject };
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map
`},{id:"@sunjuntao/dsh-fw-regex-highlight",name:"正则高亮导航",version:"0.1.0",description:"DSH 文件编辑器「正则高亮导航」插件：Activity Bar 注入视图，基于 dsh-file-workbench-lib v5 注入 API（window.__dshFileWorkbenchVSCode__）。",code:`window.__ModuleLoader__.load({
	id: "@sunjuntao/dsh-fw-regex-highlight",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
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

// packages/regex-highlight/src/client/index.js
var client_exports = {};
__export(client_exports, {
  apply: () => apply,
  inject: () => inject
});
module.exports = __toCommonJS(client_exports);
var API_KEY = "__dshFileWorkbenchVSCode__";
var VIEW_ID = "regexHighlight.view";
var NS = "dsh-rx";
var inject = [];
function apply(_ctx) {
  waitForApi(
    () => {
      const api = window[API_KEY];
      if (!api || !api.activityBar) return false;
      api.activityBar.register(buildView());
      return true;
    },
    \`register \${VIEW_ID}\`
  );
}
var currentCtx = null;
var currentUi = null;
var matches = [];
function buildView() {
  return {
    id: VIEW_ID,
    title: { zh: "\\u6B63\\u5219\\u9AD8\\u4EAE", en: "Regex Highlight" },
    description: {
      zh: "\\u5BF9\\u5F53\\u524D\\u6587\\u4EF6\\u6309\\u6B63\\u5219\\u9AD8\\u4EAE\\u6240\\u6709\\u547D\\u4E2D\\uFF0C\\u5217\\u8868 + prev/next \\u8DF3\\u8F6C",
      en: "Highlight all regex matches in the active file with a jump list"
    },
    icon: "search",
    order: 64,
    when: (ctx) => !!ctx.projectDir,
    mount(el, ctx) {
      return mountView(el, ctx);
    }
  };
}
function computeMatches(pattern, flags) {
  const ed = currentCtx?.editor;
  const view = ed?.view;
  if (!ed || !view) return [];
  const doc = view.state.doc;
  const re = new RegExp(pattern, flags.includes("g") ? flags : flags + "g");
  const out = [];
  for (let ln = 1; ln <= doc.lines; ln++) {
    const line = doc.line(ln);
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(line.text)) !== null) {
      if (m[0].length === 0) {
        re.lastIndex++;
        continue;
      }
      out.push({ line: ln, from: line.from + m.index, to: line.from + m.index + m[0].length, text: m[0] });
      if (out.length >= 5e3) return out;
    }
  }
  return out;
}
function decoItems() {
  return matches.map((h) => ({
    type: "mark",
    start: { offset: h.from },
    end: { offset: h.to },
    category: "highlight",
    message: h.text
  }));
}
function applyDecos() {
  const ed = currentCtx?.editor;
  if (!ed || !matches.length) {
    if (currentUi?.handle) {
      currentUi.handle.update([]);
      currentUi.handle = null;
    }
    return;
  }
  const items = decoItems();
  if (!currentUi?.handle) currentUi.handle = ed.createDecorations({ items });
  else currentUi.handle.update(items);
}
function rescan(cmdInput, flagsInput, hint, list) {
  const pattern = cmdInput.value;
  const flags = (flagsInput.value || "g").trim();
  matches = [];
  if (!pattern.trim()) {
    applyDecos();
    hint.textContent = "\\u8F93\\u5165\\u6B63\\u5219\\u8868\\u8FBE\\u5F0F\\u4EE5\\u9AD8\\u4EAE\\u5F53\\u524D\\u6587\\u4EF6\\u7684\\u5339\\u914D\\u3002";
    list.replaceChildren();
    return;
  }
  try {
    matches = computeMatches(pattern, flags);
  } catch (e) {
    hint.textContent = \`\\u6B63\\u5219\\u65E0\\u6548\\uFF1A\${e?.message ?? e}\`;
    applyDecos();
    list.replaceChildren();
    return;
  }
  applyDecos();
  hint.textContent = matches.length ? \`\${matches.length} \\u5904\\u547D\\u4E2D \\xB7 \\u70B9\\u6761\\u76EE\\u6216\\u4E0A\\u65B9 \\u25B2\\u25BC \\u8DF3\\u8F6C\` : "\\u65E0\\u5339\\u914D";
  renderList(list);
}
function gotoMatch(idx) {
  const h = matches[idx];
  const ctx = currentCtx;
  if (!h || !ctx) return;
  const file = ctx.activeFile;
  if (!file) return;
  try {
    const p = ctx.openFile(file, { line: h.line });
    if (p && typeof p.catch === "function") p.catch(() => {
    });
  } catch {
  }
}
function renderList(list) {
  const frag = document.createDocumentFragment();
  matches.forEach((h, i) => {
    const row = document.createElement("button");
    row.type = "button";
    row.className = \`\${NS}-row\`;
    row.innerHTML = \`<span class="\${NS}-loc"></span><span class="\${NS}-prev"></span>\`;
    row.querySelector(\`.\${NS}-loc\`).textContent = \`\${h.line}:\${offsetCol(h.from)}\`;
    row.querySelector(\`.\${NS}-prev\`).textContent = h.text;
    row.title = h.text;
    row.addEventListener("click", () => gotoMatch(i));
    frag.appendChild(row);
  });
  list.replaceChildren(frag);
}
function offsetCol(offset) {
  const doc = currentCtx?.editor?.view?.state?.doc;
  if (!doc) return 0;
  const line = doc.lineAt(offset);
  return offset - line.from + 1;
}
function mountView(el, ctx) {
  el.classList.add(\`\${NS}-view\`);
  el.innerHTML = \`
    <div class="\${NS}-root">
      <div class="\${NS}-bar">
        <input class="\${NS}-cmd" type="text" spellcheck="false" placeholder="\\u6B63\\u5219\\uFF0C\\u5982\\uFF1A\\\\bfoo\\\\w* \\uFF5C console\\\\.\\\\w+" />
        <input class="\${NS}-flags" type="text" spellcheck="false" value="g" title="flags\\uFF1Ag/i/m\\u2026" />
      </div>
      <div class="\${NS}-nav">
        <button class="\${NS}-prev" type="button" title="\\u4E0A\\u4E00\\u4E2A\\u547D\\u4E2D">\\u25B2</button>
        <button class="\${NS}-next" type="button" title="\\u4E0B\\u4E00\\u4E2A\\u547D\\u4E2D">\\u25BC</button>
        <span class="\${NS}-pos"></span>
      </div>
      <div class="\${NS}-hint"></div>
      <div class="\${NS}-list"></div>
    </div>\`;
  const cmdInput = el.querySelector(\`.\${NS}-cmd\`);
  const flagsInput = el.querySelector(\`.\${NS}-flags\`);
  const prevBtn = el.querySelector(\`.\${NS}-prev\`);
  const nextBtn = el.querySelector(\`.\${NS}-next\`);
  const posEl = el.querySelector(\`.\${NS}-pos\`);
  const hint = el.querySelector(\`.\${NS}-hint\`);
  const list = el.querySelector(\`.\${NS}-list\`);
  currentCtx = ctx;
  currentUi = { handle: null, refresh };
  let off = [];
  let cursor = 0;
  function updatePos() {
    posEl.textContent = matches.length ? \`\${Math.min(cursor + 1, matches.length)} / \${matches.length}\` : "";
  }
  function step(delta) {
    if (!matches.length) return;
    cursor = (cursor + delta + matches.length) % matches.length;
    updatePos();
    gotoMatch(cursor);
  }
  function refresh() {
    rescan(cmdInput, flagsInput, hint, list);
    cursor = 0;
    updatePos();
  }
  cmdInput.addEventListener("input", refresh);
  flagsInput.addEventListener("input", refresh);
  cmdInput.addEventListener("keydown", (ev) => {
    if (ev.key === "Enter") step(ev.shiftKey ? -1 : 1);
  });
  prevBtn.addEventListener("click", () => step(-1));
  nextBtn.addEventListener("click", () => step(1));
  function onActiveChanged() {
    currentUi.handle = null;
    refresh();
  }
  function onDocChange() {
    refresh();
  }
  function onProjectChanged() {
    cmdInput.value = "";
    currentUi.handle = null;
    refresh();
  }
  if (typeof ctx.onDidChangeActiveFile === "function") off.push(ctx.onDidChangeActiveFile(onActiveChanged));
  if (typeof ctx.editor?.onDidChangeTextDocument === "function") off.push(ctx.editor.onDidChangeTextDocument(onDocChange));
  if (typeof ctx.onProjectChange === "function") off.push(ctx.onProjectChange(onProjectChanged));
  requestAnimationFrame(refresh);
  return () => {
    off.forEach((f) => {
      try {
        f();
      } catch {
      }
    });
    if (currentUi?.handle) {
      try {
        currentUi.handle.update([]);
      } catch {
      }
    }
    matches = [];
    if (currentCtx === ctx) currentCtx = null;
    el.replaceChildren();
  };
}
function waitForApi(fn, label) {
  let tries = 0;
  const tick = () => {
    let ok = false;
    try {
      ok = fn();
    } catch (e) {
      console.warn(\`[dsh-fw-regex-highlight] \${label} failed:\`, e);
    }
    if (ok) return;
    if (++tries > 300) {
      console.warn(\`[dsh-fw-regex-highlight] \${label}: injection API not found, giving up.\`);
      return;
    }
    setTimeout(tick, 100);
  };
  tick();
}
injectStyles();
function injectStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(\`\${NS}-styles\`)) return;
  const css = \`
.\${NS}-view { color: var(--dsh-fg, #c9d1d9); font-size: 12px; }
.\${NS}-root { display: flex; flex-direction: column; min-height: 100%; }
.\${NS}-bar { padding: 8px 8px 4px; display: flex; gap: 6px; position: sticky; top: 0; background: var(--dsh-bg, #0d1117); z-index: 1; }
.\${NS}-cmd { flex: 1 1 auto; min-width: 0; padding: 5px 8px; border: 1px solid var(--dsh-border, #30363d); border-radius: 6px; background: var(--dsh-bg2, #161b22); color: inherit; outline: none; font-family: var(--dsh-mono, monospace); }
.\${NS}-cmd:focus { border-color: var(--dsh-accent, #388bfd); }
.\${NS}-flags { flex: 0 0 44px; width: 44px; padding: 5px 6px; border: 1px solid var(--dsh-border, #30363d); border-radius: 6px; background: var(--dsh-bg2, #161b22); color: inherit; outline: none; text-align: center; }
.\${NS}-nav { display: flex; align-items: center; gap: 6px; padding: 0 8px 4px; }
.\${NS}-nav .\${NS}-prev, .\${NS}-nav .\${NS}-next { width: 28px; padding: 3px 0; border: 1px solid var(--dsh-border, #30363d); border-radius: 6px; background: var(--dsh-bg2, #161b22); color: inherit; cursor: pointer; }
.\${NS}-nav .\${NS}-prev:hover, .\${NS}-nav .\${NS}-next:hover { border-color: var(--dsh-accent, #388bfd); }
.\${NS}-pos { color: var(--dsh-fg-dim, #8b949e); font-size: 11px; }
.\${NS}-hint { padding: 2px 10px 6px; color: var(--dsh-fg-dim, #8b949e); }
.\${NS}-list { flex: 1 1 auto; padding: 0 4px 8px; overflow: auto; }
.\${NS}-row { display: flex; gap: 8px; align-items: baseline; width: 100%; text-align: left; padding: 2px 8px; border: 0; background: transparent; color: var(--dsh-fg, #c9d1d9); cursor: pointer; border-radius: 4px; white-space: nowrap; overflow: hidden; }
.\${NS}-row:hover { background: var(--dsh-hover, rgba(177,186,196,0.12)); }
.\${NS}-loc { flex: 0 0 auto; min-width: 3.5em; text-align: right; color: var(--dsh-fg-dim, #8b949e); font-family: var(--dsh-mono, monospace); }
.\${NS}-prev { overflow: hidden; text-overflow: ellipsis; font-family: var(--dsh-mono, monospace); }
\`;
  const style = document.createElement("style");
  style.id = \`\${NS}-styles\`;
  style.textContent = css;
  document.head.appendChild(style);
}
		module.exports = { apply, inject };
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map
`},{id:"@sunjuntao/dsh-fw-json2interface",name:"JSON 转接口",version:"0.1.0",description:"DSH 文件编辑器「JSON 转接口」插件：Activity Bar 注入视图，基于 dsh-file-workbench-lib v5 注入 API（window.__dshFileWorkbenchVSCode__）。",code:`window.__ModuleLoader__.load({
	id: "@sunjuntao/dsh-fw-json2interface",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
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

// packages/json2interface/src/client/index.js
var client_exports = {};
__export(client_exports, {
  apply: () => apply,
  inject: () => inject
});
module.exports = __toCommonJS(client_exports);
var API_KEY = "__dshFileWorkbenchVSCode__";
var VIEW_ID = "json2interface.view";
var NS = "dsh-j2i";
var inject = [];
function apply(_ctx) {
  waitForApi(
    () => {
      const api = window[API_KEY];
      if (!api || !api.activityBar) return false;
      api.activityBar.register(buildView());
      return true;
    },
    \`register \${VIEW_ID}\`
  );
}
var currentCtx = null;
function buildView() {
  return {
    id: VIEW_ID,
    title: { zh: "JSON \\u8F6C\\u63A5\\u53E3", en: "JSON \\u2192 TS" },
    description: {
      zh: "\\u628A\\u5F53\\u524D JSON \\u7F13\\u51B2/\\u9009\\u533A\\u63A8\\u65AD\\u6210 TypeScript interface\\uFF0C\\u53EF\\u590D\\u5236\\u6216\\u63D2\\u5165",
      en: "Infer a TypeScript interface from the active JSON buffer/selection"
    },
    icon: "code",
    order: 65,
    when: (ctx) => !!ctx.projectDir,
    mount(el, ctx) {
      return mountView(el, ctx);
    }
  };
}
function sampleJson(ctx) {
  const ed = ctx.editor;
  if (!ed) return "";
  const sel = typeof ed.getSelection === "function" ? ed.getSelection() : null;
  const view = ed.view;
  if (sel && view && !sel.main.empty) {
    return view.state.sliceDoc(sel.main.from, sel.main.to).trim();
  }
  return (typeof ed.getText === "function" ? ed.getText() : "").trim();
}
function pascal(s) {
  const cleaned = String(s).replace(/[^a-zA-Z0-9]+/g, " ").trim();
  if (!cleaned) return "";
  return cleaned.split(/\\s+/).map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join("");
}
function singular(name) {
  if (/ies$/i.test(name)) return name.replace(/ies$/i, "y");
  if (/ses$/i.test(name)) return name.replace(/es$/i, "");
  if (/s$/i.test(name) && !/ss$/i.test(name)) return name.replace(/s$/i, "");
  return name;
}
function infer(value, rootName) {
  const interfaces = /* @__PURE__ */ new Map();
  const used = /* @__PURE__ */ new Set();
  function uniqueName(base) {
    let n = base || "T";
    if (!used.has(n)) {
      used.add(n);
      return n;
    }
    let i = 2;
    while (used.has(\`\${n}\${i}\`)) i++;
    used.add(\`\${n}\${i}\`);
    return \`\${n}\${i}\`;
  }
  function typeOf(v, hintName) {
    if (v === null) return "null";
    if (Array.isArray(v)) {
      if (!v.length) return "unknown[]";
      const inner = unionOf(v.map((x) => typeOf(x, singular(hintName) || "Item")));
      return arrayType(inner);
    }
    if (typeof v === "object") {
      const name = uniqueName(pascal(hintName) || "Obj");
      if (!interfaces.has(name)) {
        interfaces.set(name, null);
        const fields = /* @__PURE__ */ new Map();
        for (const [k, val] of Object.entries(v)) {
          const key = /^[a-zA-Z_$][\\w$]*$/.test(k) ? k : JSON.stringify(k);
          fields.set(key, typeOf(val, k));
        }
        interfaces.set(name, fields);
      }
      return name;
    }
    if (typeof v === "string") return "string";
    if (typeof v === "number") return "number";
    if (typeof v === "boolean") return "boolean";
    return "unknown";
  }
  function unionOf(types) {
    const set = [...new Set(types)];
    if (set.length === 1) return set[0];
    return set.join(" | ");
  }
  function arrayType(inner) {
    return inner.includes("|") ? \`(\${inner})[]\` : \`\${inner}[]\`;
  }
  const rootType = typeOf(value, rootName);
  return { rootType, interfaces };
}
function renderTs(rootName, value) {
  const { rootType, interfaces } = infer(value, rootName);
  const lines = [];
  for (const [name, fields] of interfaces) {
    if (!fields) continue;
    lines.push(\`export interface \${name} {\`);
    for (const [key, type] of fields) lines.push(\`  \${key}: \${type};\`);
    lines.push("}", "");
  }
  if (/^[A-Za-z_$][\\w$]*$/.test(rootType) && interfaces.has(rootType)) {
    lines.unshift(\`export type \${pascal(rootName) || "Root"} = \${rootType};\`, "");
  } else {
    lines.unshift(\`export type \${pascal(rootName) || "Root"} = \${rootType};\`, "");
  }
  return lines.join("\\n").trim();
}
function mountView(el, ctx) {
  el.classList.add(\`\${NS}-view\`);
  el.innerHTML = \`
    <div class="\${NS}-root">
      <div class="\${NS}-bar">
        <button class="\${NS}-gen" type="button">\\u4ECE\\u5F53\\u524D JSON \\u751F\\u6210</button>
        <input class="\${NS}-name" type="text" spellcheck="false" placeholder="\\u6839\\u7C7B\\u578B\\u540D\\uFF08\\u53EF\\u9009\\uFF09" />
      </div>
      <div class="\${NS}-hint"></div>
      <pre class="\${NS}-out"></pre>
      <div class="\${NS}-foot">
        <button class="\${NS}-copy" type="button">\\u590D\\u5236</button>
        <button class="\${NS}-insert" type="button">\\u63D2\\u5165\\u5230\\u6587\\u4EF6\\u5E95\\u90E8</button>
      </div>
    </div>\`;
  const genBtn = el.querySelector(\`.\${NS}-gen\`);
  const nameInput = el.querySelector(\`.\${NS}-name\`);
  const hint = el.querySelector(\`.\${NS}-hint\`);
  const out = el.querySelector(\`.\${NS}-out\`);
  const copyBtn = el.querySelector(\`.\${NS}-copy\`);
  const insertBtn = el.querySelector(\`.\${NS}-insert\`);
  currentCtx = ctx;
  let off = [];
  let lastText = "";
  function doGenerate() {
    const raw = sampleJson(ctx);
    if (!raw) {
      hint.textContent = "\\u65E0\\u5185\\u5BB9\\uFF1A\\u8BF7\\u5728\\u7F16\\u8F91\\u5668\\u6253\\u5F00\\u4E00\\u4E2A JSON \\u6587\\u4EF6\\u6216\\u9009\\u4E2D\\u4E00\\u6BB5 JSON\\u3002";
      out.textContent = "";
      lastText = "";
      return;
    }
    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch (e) {
      hint.textContent = \`JSON \\u89E3\\u6790\\u5931\\u8D25\\uFF1A\${e?.message ?? e}\`;
      out.textContent = "";
      lastText = "";
      return;
    }
    const rootName = nameInput.value.trim() || deriveRootName(ctx.activeFile);
    try {
      lastText = renderTs(rootName, parsed);
      out.textContent = lastText;
      hint.textContent = \`\\u5DF2\\u751F\\u6210 \\xB7 \\u6839\\u7C7B\\u578B \${pascal(rootName) || "Root"}\`;
    } catch (e) {
      hint.textContent = \`\\u751F\\u6210\\u5931\\u8D25\\uFF1A\${e?.message ?? e}\`;
      lastText = "";
    }
  }
  genBtn.addEventListener("click", doGenerate);
  copyBtn.addEventListener("click", async () => {
    if (!lastText) return;
    try {
      await navigator.clipboard.writeText(lastText);
      ctx.toast("ok", "\\u5DF2\\u590D\\u5236 interface \\u5230\\u526A\\u8D34\\u677F");
    } catch {
      ctx.toast("error", "\\u590D\\u5236\\u5931\\u8D25\\uFF08\\u526A\\u8D34\\u677F\\u4E0D\\u53EF\\u7528\\uFF09");
    }
  });
  insertBtn.addEventListener("click", () => {
    if (!lastText) return;
    const ed = ctx.editor;
    const view = ed?.view;
    if (!view) {
      ctx.toast("error", "\\u65E0\\u6FC0\\u6D3B\\u7F16\\u8F91\\u5668");
      return;
    }
    const len = view.state.doc.length;
    const block = \`

/* ---- generated by JSON\\u2192TS ---- */
\${lastText}
\`;
    if (ed.applyEdit([{ from: len, insert: block }])) ctx.toast("ok", "\\u5DF2\\u63D2\\u5165\\u5230\\u6587\\u4EF6\\u5E95\\u90E8");
    else ctx.toast("error", "\\u63D2\\u5165\\u5931\\u8D25");
  });
  requestAnimationFrame(() => {
    hint.textContent = "\\u6253\\u5F00 JSON \\u6587\\u4EF6\\uFF08\\u6216\\u9009\\u4E2D JSON \\u7247\\u6BB5\\uFF09\\uFF0C\\u70B9\\u300C\\u751F\\u6210\\u300D\\u3002";
  });
  return () => {
    off.forEach((f) => {
      try {
        f();
      } catch {
      }
    });
    if (currentCtx === ctx) currentCtx = null;
    el.replaceChildren();
  };
}
function deriveRootName(file) {
  if (!file) return "Root";
  const base = String(file).replace(/\\\\/g, "/").split("/").pop() || "Root";
  return base.replace(/\\.[^.]+$/, "") || "Root";
}
function waitForApi(fn, label) {
  let tries = 0;
  const tick = () => {
    let ok = false;
    try {
      ok = fn();
    } catch (e) {
      console.warn(\`[dsh-fw-json2interface] \${label} failed:\`, e);
    }
    if (ok) return;
    if (++tries > 300) {
      console.warn(\`[dsh-fw-json2interface] \${label}: injection API not found, giving up.\`);
      return;
    }
    setTimeout(tick, 100);
  };
  tick();
}
injectStyles();
function injectStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(\`\${NS}-styles\`)) return;
  const css = \`
.\${NS}-view { color: var(--dsh-fg, #c9d1d9); font-size: 12px; }
.\${NS}-root { display: flex; flex-direction: column; min-height: 100%; }
.\${NS}-bar { padding: 8px; display: flex; gap: 6px; position: sticky; top: 0; background: var(--dsh-bg, #0d1117); z-index: 1; }
.\${NS}-gen { flex: 0 0 auto; padding: 5px 10px; border: 1px solid var(--dsh-border, #30363d); border-radius: 6px; background: var(--dsh-bg2, #161b22); color: inherit; cursor: pointer; }
.\${NS}-gen:hover { border-color: var(--dsh-accent, #388bfd); }
.\${NS}-name { flex: 1 1 auto; min-width: 0; padding: 5px 8px; border: 1px solid var(--dsh-border, #30363d); border-radius: 6px; background: var(--dsh-bg2, #161b22); color: inherit; outline: none; }
.\${NS}-hint { padding: 2px 10px 6px; color: var(--dsh-fg-dim, #8b949e); }
.\${NS}-out { flex: 1 1 auto; margin: 0 8px; padding: 8px 10px; border: 1px solid var(--dsh-border, #30363d); border-radius: 8px; background: var(--dsh-bg, #0d1117); color: #a5d6ff; font-family: var(--dsh-mono, monospace); font-size: 11px; white-space: pre; overflow: auto; max-height: 60vh; }
.\${NS}-foot { display: flex; gap: 6px; padding: 8px; }
.\${NS}-copy, .\${NS}-insert { flex: 1 1 auto; padding: 5px 10px; border: 1px solid var(--dsh-border, #30363d); border-radius: 6px; background: var(--dsh-bg2, #161b22); color: inherit; cursor: pointer; }
.\${NS}-copy:hover, .\${NS}-insert:hover { border-color: var(--dsh-accent, #388bfd); }
\`;
  const style = document.createElement("style");
  style.id = \`\${NS}-styles\`;
  style.textContent = css;
  document.head.appendChild(style);
}
		module.exports = { apply, inject };
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map
`},{id:"@sunjuntao/dsh-fw-md-preview",name:"Markdown 预览",version:"0.1.0",description:"DSH 文件编辑器「Markdown 预览」插件：Activity Bar 注入视图，基于 dsh-file-workbench-lib v5 注入 API（window.__dshFileWorkbenchVSCode__）。",code:`window.__ModuleLoader__.load({
	id: "@sunjuntao/dsh-fw-md-preview",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
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

// packages/md-preview/src/client/index.js
var client_exports = {};
__export(client_exports, {
  apply: () => apply,
  inject: () => inject
});
module.exports = __toCommonJS(client_exports);
var API_KEY = "__dshFileWorkbenchVSCode__";
var VIEW_ID = "mdPreview.view";
var NS = "dsh-md";
var inject = [];
function apply(_ctx) {
  waitForApi(
    () => {
      const api = window[API_KEY];
      if (!api || !api.activityBar) return false;
      api.activityBar.register(buildView());
      return true;
    },
    \`register \${VIEW_ID}\`
  );
}
var currentCtx = null;
function buildView() {
  return {
    id: VIEW_ID,
    title: { zh: "Markdown \\u9884\\u89C8", en: "Markdown Preview" },
    description: {
      zh: "\\u628A\\u5F53\\u524D Markdown \\u7F13\\u51B2\\u5B9E\\u65F6\\u6E32\\u67D3\\u6210 HTML \\u9884\\u89C8\\uFF08\\u96F6\\u4F9D\\u8D56\\u3001\\u5DF2\\u505A\\u8F6C\\u4E49\\uFF09",
      en: "Live-render the active Markdown buffer to HTML (dependency-free, escaped)"
    },
    icon: "eye",
    order: 66,
    when: (ctx) => !!ctx.projectDir,
    mount(el, ctx) {
      return mountView(el, ctx);
    }
  };
}
function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function safeUrl(u) {
  const t = String(u).trim();
  if (/^(https?:|mailto:|#|\\/|\\.{1,2}\\/)/i.test(t)) return esc(t);
  if (/^[\\w.-]+\\.[a-z]{2,}(\\/|$)/i.test(t)) return "https://" + esc(t);
  return "#";
}
function inline(text) {
  let s = esc(text);
  s = s.replace(/\`([^\`]+)\`/g, (_m, c) => \`<code>\${c}</code>\`);
  s = s.replace(/!\\[([^\\]]*)\\]\\(([^)\\s]+)(?:\\s+&quot;[^&]*&quot;)?\\)/g, (_m, alt, url) => \`<img alt="\${alt}" src="\${safeUrl(url)}">\`);
  s = s.replace(/\\[([^\\]]+)\\]\\(([^)\\s]+)(?:\\s+&quot;[^&]*&quot;)?\\)/g, (_m, txt, url) => \`<a href="\${safeUrl(url)}" target="_blank" rel="noopener noreferrer">\${txt}</a>\`);
  s = s.replace(/\\*\\*([^*]+)\\*\\*/g, "<strong>$1</strong>").replace(/__([^_]+)__/g, "<strong>$1</strong>");
  s = s.replace(/(^|[^*])\\*([^*\\n]+)\\*/g, "$1<em>$2</em>").replace(/(^|[^_])_([^_\\n]+)_/g, "$1<em>$2</em>");
  s = s.replace(/~~([^~]+)~~/g, "<del>$1</del>");
  return s;
}
function render(src) {
  const lines = String(src).replace(/\\r\\n?/g, "\\n").split("\\n");
  const out = [];
  let i = 0;
  let para = [];
  const flushPara = () => {
    if (para.length) {
      out.push(\`<p>\${inline(para.join(" "))}</p>\`);
      para = [];
    }
  };
  while (i < lines.length) {
    const line = lines[i];
    const fence = line.match(/^\\s*\`\`\`(\\w*)\\s*$/);
    if (fence) {
      flushPara();
      const lang = fence[1];
      const buf = [];
      i++;
      while (i < lines.length && !/^\\s*\`\`\`\\s*$/.test(lines[i])) buf.push(lines[i++]);
      i++;
      out.push(\`<pre data-lang="\${esc(lang)}"><code>\${esc(buf.join("\\n"))}</code></pre>\`);
      continue;
    }
    const h = line.match(/^(#{1,6})\\s+(.*)$/);
    if (h) {
      flushPara();
      const lvl = h[1].length;
      out.push(\`<h\${lvl}>\${inline(h[2])}</h\${lvl}>\`);
      i++;
      continue;
    }
    if (/^\\s*([-*_])(\\s*\\1){2,}\\s*$/.test(line)) {
      flushPara();
      out.push("<hr>");
      i++;
      continue;
    }
    if (/^\\s*>\\s?/.test(line)) {
      flushPara();
      const buf = [];
      while (i < lines.length && /^\\s*>\\s?/.test(lines[i])) buf.push(lines[i++].replace(/^\\s*>\\s?/, ""));
      out.push(\`<blockquote>\${render(buf.join("\\n"))}</blockquote>\`);
      continue;
    }
    if (/^\\s*[-*+]\\s+/.test(line)) {
      flushPara();
      const items = [];
      while (i < lines.length && /^\\s*[-*+]\\s+/.test(lines[i])) items.push(lines[i++].replace(/^\\s*[-*+]\\s+/, ""));
      out.push(\`<ul>\${items.map((t) => \`<li>\${inline(t)}</li>\`).join("")}</ul>\`);
      continue;
    }
    if (/^\\s*\\d+\\.\\s+/.test(line)) {
      flushPara();
      const items = [];
      while (i < lines.length && /^\\s*\\d+\\.\\s+/.test(lines[i])) items.push(lines[i++].replace(/^\\s*\\d+\\.\\s+/, ""));
      out.push(\`<ol>\${items.map((t) => \`<li>\${inline(t)}</li>\`).join("")}</ol>\`);
      continue;
    }
    if (!line.trim()) {
      flushPara();
      i++;
      continue;
    }
    para.push(line);
    i++;
  }
  flushPara();
  return out.join("\\n");
}
function mountView(el, ctx) {
  el.classList.add(\`\${NS}-view\`);
  el.innerHTML = \`
    <div class="\${NS}-root">
      <div class="\${NS}-bar"><span class="\${NS}-title"></span></div>
      <div class="\${NS}-body"></div>
    </div>\`;
  const titleEl = el.querySelector(\`.\${NS}-title\`);
  const body = el.querySelector(\`.\${NS}-body\`);
  currentCtx = ctx;
  let off = [];
  function refresh() {
    const ed = ctx.editor;
    const file = ctx.activeFile;
    titleEl.textContent = file ? baseName(file) : "\\u65E0\\u6FC0\\u6D3B\\u6587\\u4EF6";
    if (!ed || !file) {
      body.innerHTML = \`<div class="\${NS}-empty">\\u5728\\u7F16\\u8F91\\u5668\\u6253\\u5F00\\u4E00\\u4E2A .md \\u6587\\u4EF6\\u5373\\u53EF\\u9884\\u89C8\\u3002</div>\`;
      return;
    }
    if (!/\\.(md|markdown)$/i.test(file)) {
      body.innerHTML = \`<div class="\${NS}-empty">\\u5F53\\u524D\\u6587\\u4EF6\\u4E0D\\u662F Markdown\\uFF08\\u4ECD\\u6309 Markdown \\u5C1D\\u8BD5\\u6E32\\u67D3\\uFF09\\u3002</div>\` + render(ed.getText?.() ?? "");
      return;
    }
    body.innerHTML = render(ed.getText?.() ?? "");
  }
  function onActiveChanged() {
    refresh();
  }
  function onDocChange() {
    refresh();
  }
  if (typeof ctx.onDidChangeActiveFile === "function") off.push(ctx.onDidChangeActiveFile(onActiveChanged));
  if (typeof ctx.editor?.onDidChangeTextDocument === "function") off.push(ctx.editor.onDidChangeTextDocument(onDocChange));
  requestAnimationFrame(refresh);
  return () => {
    off.forEach((f) => {
      try {
        f();
      } catch {
      }
    });
    if (currentCtx === ctx) currentCtx = null;
    el.replaceChildren();
  };
}
function baseName(p) {
  const n = String(p).replace(/\\\\/g, "/");
  const i = n.lastIndexOf("/");
  return i >= 0 ? n.slice(i + 1) : n;
}
function waitForApi(fn, label) {
  let tries = 0;
  const tick = () => {
    let ok = false;
    try {
      ok = fn();
    } catch (e) {
      console.warn(\`[dsh-fw-md-preview] \${label} failed:\`, e);
    }
    if (ok) return;
    if (++tries > 300) {
      console.warn(\`[dsh-fw-md-preview] \${label}: injection API not found, giving up.\`);
      return;
    }
    setTimeout(tick, 100);
  };
  tick();
}
injectStyles();
function injectStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(\`\${NS}-styles\`)) return;
  const css = \`
.\${NS}-view { color: var(--dsh-fg, #c9d1d9); font-size: 13px; }
.\${NS}-root { display: flex; flex-direction: column; min-height: 100%; }
.\${NS}-bar { padding: 8px 10px; position: sticky; top: 0; background: var(--dsh-bg, #0d1117); border-bottom: 1px solid var(--dsh-border, #30363d); z-index: 1; }
.\${NS}-title { font-weight: 600; color: var(--dsh-fg-dim, #8b949e); }
.\${NS}-body { flex: 1 1 auto; padding: 10px 12px 24px; overflow: auto; line-height: 1.6; }
.\${NS}-body h1,.\${NS}-body h2,.\${NS}-body h3,.\${NS}-body h4 { margin: .8em 0 .4em; font-weight: 700; line-height: 1.3; }
.\${NS}-body h1 { font-size: 1.5em; border-bottom: 1px solid var(--dsh-border,#30363d); padding-bottom: .2em; }
.\${NS}-body h2 { font-size: 1.3em; }
.\${NS}-body h3 { font-size: 1.12em; }
.\${NS}-body p { margin: .5em 0; }
.\${NS}-body a { color: var(--dsh-accent, #388bfd); text-decoration: none; }
.\${NS}-body a:hover { text-decoration: underline; }
.\${NS}-body code { background: var(--dsh-bg2,#161b22); border: 1px solid var(--dsh-border,#30363d); border-radius: 4px; padding: 1px 5px; font-family: var(--dsh-mono, monospace); font-size: .9em; }
.\${NS}-body pre { background: var(--dsh-bg,#0d1117); border: 1px solid var(--dsh-border,#30363d); border-radius: 8px; padding: 10px 12px; overflow: auto; }
.\${NS}-body pre code { background: transparent; border: 0; padding: 0; }
.\${NS}-body blockquote { margin: .5em 0; padding: .2em 12px; border-left: 3px solid var(--dsh-accent,#388bfd); color: var(--dsh-fg-dim,#8b949e); }
.\${NS}-body ul,.\${NS}-body ol { margin: .4em 0; padding-left: 1.6em; }
.\${NS}-body li { margin: .15em 0; }
.\${NS}-body hr { border: 0; border-top: 1px solid var(--dsh-border,#30363d); margin: 1em 0; }
.\${NS}-body img { max-width: 100%; border-radius: 6px; }
.\${NS}-empty { color: var(--dsh-fg-dim,#8b949e); font-style: italic; }
\`;
  const style = document.createElement("style");
  style.id = \`\${NS}-styles\`;
  style.textContent = css;
  document.head.appendChild(style);
}
		module.exports = { apply, inject };
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map
`},{id:"@sunjuntao/dsh-fw-hex-viewer",name:"十六进制查看器",version:"0.1.0",description:"DSH 文件编辑器「十六进制查看器」插件：Activity Bar 注入视图，基于 dsh-file-workbench-lib v5 注入 API（window.__dshFileWorkbenchVSCode__）。",code:`window.__ModuleLoader__.load({
	id: "@sunjuntao/dsh-fw-hex-viewer",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
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

// packages/hex-viewer/src/client/index.js
var client_exports = {};
__export(client_exports, {
  apply: () => apply,
  inject: () => inject
});
module.exports = __toCommonJS(client_exports);
var API_KEY = "__dshFileWorkbenchVSCode__";
var PREFIX = "/api/dsh-file-workbench";
var VIEW_ID = "hexViewer.view";
var NS = "dsh-hx";
var BYTES_PER_ROW = 16;
var MAX_BYTES = 512 * 1024;
var inject = [];
function apply(_ctx) {
  waitForApi(
    () => {
      const api = window[API_KEY];
      if (!api || !api.activityBar) return false;
      api.activityBar.register(buildView());
      return true;
    },
    \`register \${VIEW_ID}\`
  );
}
var currentCtx = null;
function buildView() {
  return {
    id: VIEW_ID,
    title: { zh: "\\u5341\\u516D\\u8FDB\\u5236\\u67E5\\u770B\\u5668", en: "Hex Viewer" },
    description: {
      zh: "\\u4EE5 offset/hex/ASCII \\u4E09\\u680F\\u67E5\\u770B\\u5F53\\u524D\\u6FC0\\u6D3B\\u6587\\u4EF6\\u7684\\u5B57\\u8282\\uFF08\\u53EA\\u8BFB\\uFF09",
      en: "Inspect the active file as offset/hex/ASCII (read-only)"
    },
    icon: "file-binary",
    order: 67,
    when: (ctx) => !!ctx.projectDir,
    mount(el, ctx) {
      return mountView(el, ctx);
    }
  };
}
async function fetchBytes(path) {
  const res = await fetch(\`\${PREFIX}/read?path=\${encodeURIComponent(path)}\`, { headers: { Accept: "application/json" } });
  const body = await res.json().catch(() => null);
  if (!body?.ok) throw new Error(body?.error || \`HTTP \${res.status}\`);
  const d = body.data || {};
  if (d.binary) return { binary: true, bytes: null, size: d.size ?? 0 };
  const bytes = new TextEncoder().encode(d.content ?? "");
  return { binary: false, bytes, size: d.size ?? bytes.length };
}
function hexByte(b) {
  return b.toString(16).padStart(2, "0");
}
function asciiOf(b) {
  return b >= 32 && b <= 126 ? String.fromCharCode(b) : ".";
}
function renderRows(container, bytes, truncated) {
  const frag = document.createDocumentFragment();
  const total = bytes.length;
  for (let off = 0; off < total; off += BYTES_PER_ROW) {
    const slice = bytes.subarray(off, Math.min(off + BYTES_PER_ROW, total));
    const row = document.createElement("div");
    row.className = \`\${NS}-row\`;
    const addr = document.createElement("span");
    addr.className = \`\${NS}-addr\`;
    addr.textContent = off.toString(16).padStart(8, "0");
    const hex = document.createElement("span");
    hex.className = \`\${NS}-hex\`;
    let hexStr = "";
    let ascStr = "";
    for (let k = 0; k < BYTES_PER_ROW; k++) {
      if (k < slice.length) {
        hexStr += hexByte(slice[k]) + (k === 7 ? "  " : " ");
        ascStr += asciiOf(slice[k]);
      } else {
        hexStr += k === 7 ? "   " : "   ";
      }
    }
    hex.textContent = hexStr;
    const asc = document.createElement("span");
    asc.className = \`\${NS}-ascii\`;
    asc.textContent = ascStr;
    row.append(addr, hex, asc);
    frag.appendChild(row);
  }
  if (truncated) {
    const note = document.createElement("div");
    note.className = \`\${NS}-note\`;
    note.textContent = \`\\uFF08\\u5DF2\\u622A\\u65AD\\u663E\\u793A\\u524D \${total.toLocaleString()} \\u5B57\\u8282\\uFF09\`;
    frag.appendChild(note);
  }
  container.replaceChildren(frag);
}
function mountView(el, ctx) {
  el.classList.add(\`\${NS}-view\`);
  el.innerHTML = \`
    <div class="\${NS}-root">
      <div class="\${NS}-bar">
        <span class="\${NS}-name"></span>
        <button class="\${NS}-reload" type="button">\\u21BB</button>
      </div>
      <div class="\${NS}-hint"></div>
      <pre class="\${NS}-dump"></pre>
    </div>\`;
  const nameEl = el.querySelector(\`.\${NS}-name\`);
  const reloadBtn = el.querySelector(\`.\${NS}-reload\`);
  const hint = el.querySelector(\`.\${NS}-hint\`);
  const dump = el.querySelector(\`.\${NS}-dump\`);
  currentCtx = ctx;
  let off = [];
  let busy = false;
  async function load() {
    const file = ctx.activeFile;
    nameEl.textContent = file ? baseName(file) : "\\u65E0\\u6FC0\\u6D3B\\u6587\\u4EF6";
    if (!file) {
      hint.textContent = "\\u5728\\u7F16\\u8F91\\u5668\\u6253\\u5F00\\u4E00\\u4E2A\\u6587\\u4EF6\\u5373\\u53EF\\u67E5\\u770B\\u5176\\u5B57\\u8282\\u3002";
      dump.replaceChildren();
      return;
    }
    if (busy) return;
    busy = true;
    reloadBtn.disabled = true;
    hint.textContent = "\\u8BFB\\u53D6\\u4E2D\\u2026";
    try {
      const { binary, bytes, size } = await fetchBytes(file);
      if (binary) {
        hint.textContent = \`\\u4E8C\\u8FDB\\u5236\\u6587\\u4EF6\\uFF08\${size.toLocaleString()} \\u5B57\\u8282\\uFF09\\u2014\\u2014\\u5BBF\\u4E3B /read \\u4EC5\\u8FD4\\u56DE\\u6587\\u672C\\uFF0C\\u65E0\\u6CD5\\u53D6\\u5F97\\u539F\\u59CB\\u5B57\\u8282\\u3002\`;
        dump.replaceChildren();
        return;
      }
      const truncated = bytes.length > MAX_BYTES;
      const shown = truncated ? bytes.subarray(0, MAX_BYTES) : bytes;
      hint.textContent = \`\${bytes.length.toLocaleString()} \\u5B57\\u8282 \\xB7 \${BYTES_PER_ROW}/\\u884C\`;
      renderRows(dump, shown, truncated);
    } catch (e) {
      hint.textContent = \`\\u8BFB\\u53D6\\u5931\\u8D25\\uFF1A\${e?.message ?? e}\`;
      dump.replaceChildren();
    } finally {
      busy = false;
      reloadBtn.disabled = false;
    }
  }
  reloadBtn.addEventListener("click", load);
  if (typeof ctx.onDidChangeActiveFile === "function") off.push(ctx.onDidChangeActiveFile(load));
  if (typeof ctx.onProjectChange === "function") off.push(ctx.onProjectChange(load));
  requestAnimationFrame(load);
  return () => {
    off.forEach((f) => {
      try {
        f();
      } catch {
      }
    });
    if (currentCtx === ctx) currentCtx = null;
    el.replaceChildren();
  };
}
function baseName(p) {
  const n = String(p).replace(/\\\\/g, "/");
  const i = n.lastIndexOf("/");
  return i >= 0 ? n.slice(i + 1) : n;
}
function waitForApi(fn, label) {
  let tries = 0;
  const tick = () => {
    let ok = false;
    try {
      ok = fn();
    } catch (e) {
      console.warn(\`[dsh-fw-hex-viewer] \${label} failed:\`, e);
    }
    if (ok) return;
    if (++tries > 300) {
      console.warn(\`[dsh-fw-hex-viewer] \${label}: injection API not found, giving up.\`);
      return;
    }
    setTimeout(tick, 100);
  };
  tick();
}
injectStyles();
function injectStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(\`\${NS}-styles\`)) return;
  const css = \`
.\${NS}-view { color: var(--dsh-fg, #c9d1d9); font-size: 12px; }
.\${NS}-root { display: flex; flex-direction: column; min-height: 100%; }
.\${NS}-bar { padding: 8px; display: flex; align-items: center; gap: 8px; position: sticky; top: 0; background: var(--dsh-bg, #0d1117); z-index: 1; }
.\${NS}-name { flex: 1 1 auto; min-width: 0; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.\${NS}-reload { flex: 0 0 auto; width: 28px; padding: 3px 0; border: 1px solid var(--dsh-border, #30363d); border-radius: 6px; background: var(--dsh-bg2, #161b22); color: inherit; cursor: pointer; }
.\${NS}-reload:hover { border-color: var(--dsh-accent, #388bfd); }
.\${NS}-hint { padding: 0 10px 6px; color: var(--dsh-fg-dim, #8b949e); }
.\${NS}-dump { flex: 1 1 auto; margin: 0 8px 8px; padding: 8px 10px; border: 1px solid var(--dsh-border, #30363d); border-radius: 8px; background: var(--dsh-bg, #0d1117); font-family: var(--dsh-mono, monospace); font-size: 11px; line-height: 1.5; overflow: auto; max-height: 70vh; }
.\${NS}-row { white-space: pre; }
.\${NS}-addr { color: var(--dsh-fg-dim, #8b949e); margin-right: 12px; }
.\${NS}-hex { color: #a5d6ff; margin-right: 12px; }
.\${NS}-ascii { color: var(--dsh-fg, #c9d1d9); }
.\${NS}-note { color: var(--dsh-fg-dim, #8b949e); font-style: italic; margin-top: 6px; }
\`;
  const style = document.createElement("style");
  style.id = \`\${NS}-styles\`;
  style.textContent = css;
  document.head.appendChild(style);
}
		module.exports = { apply, inject };
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map
`},{id:"@sunjuntao/dsh-fw-local-history",name:"本地历史",version:"0.1.0",description:"DSH 文件编辑器「本地历史」插件：Activity Bar 注入视图，基于 dsh-file-workbench-lib v5 注入 API（window.__dshFileWorkbenchVSCode__）。",code:`window.__ModuleLoader__.load({
	id: "@sunjuntao/dsh-fw-local-history",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
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

// packages/local-history/src/client/index.js
var client_exports = {};
__export(client_exports, {
  apply: () => apply,
  inject: () => inject
});
module.exports = __toCommonJS(client_exports);
var API_KEY = "__dshFileWorkbenchVSCode__";
var VIEW_ID = "localHistory.view";
var NS = "dsh-lh";
var inject = [];
function apply(_ctx) {
  waitForApi(
    () => {
      const api = window[API_KEY];
      if (!api || !api.activityBar) return false;
      api.activityBar.register(buildView());
      return true;
    },
    \`register \${VIEW_ID}\`
  );
}
function waitForApi(fn, label) {
  let tries = 0;
  const tick = () => {
    let ok = false;
    try {
      ok = fn();
    } catch (e) {
      console.warn(\`[dsh-fw-local-history] \${label} failed:\`, e);
    }
    if (ok) return;
    if (++tries > 300) {
      console.warn(\`[dsh-fw-local-history] \${label}: injection API not found, giving up.\`);
      return;
    }
    setTimeout(tick, 100);
  };
  tick();
}
injectStyles();
function injectStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(\`\${NS}-styles\`)) return;
  const css = \`
.\${NS}-view { color: var(--dsh-fg, #c9d1d9); font-size: 12px; }
.\${NS}-root { display: flex; flex-direction: column; min-height: 100%; }
.\${NS}-bar { padding: 8px 10px; position: sticky; top: 0; background: var(--dsh-bg, #0d1117); border-bottom: 1px solid var(--dsh-border, #30363d); z-index: 1; }
.\${NS}-title { font-weight: 600; color: var(--dsh-fg-dim, #8b949e); }
.\${NS}-hint { padding: 4px 10px; color: var(--dsh-fg-dim, #8b949e); }
.\${NS}-list { flex: 1 1 auto; padding: 0 4px 8px; overflow: auto; }
.\${NS}-row { display: flex; align-items: center; gap: 4px; }
.\${NS}-jump { flex: 1 1 auto; min-width: 0; display: flex; gap: 8px; align-items: baseline; text-align: left; padding: 3px 8px; border: 0; background: transparent; color: var(--dsh-fg, #c9d1d9); cursor: pointer; border-radius: 4px; white-space: nowrap; overflow: hidden; }
.\${NS}-jump:hover { background: var(--dsh-hover, rgba(177,186,196,0.12)); }
.\${NS}-ts { color: var(--dsh-fg, #c9d1d9); font-family: var(--dsh-mono, monospace); }
.\${NS}-size { overflow: hidden; text-overflow: ellipsis; color: var(--dsh-fg-dim, #8b949e); }
.\${NS}-restore { flex: 0 0 auto; padding: 2px 8px; margin-right: 8px; border: 1px solid var(--dsh-border, #30363d); border-radius: 6px; background: var(--dsh-bg2, #161b22); color: var(--dsh-fg-dim, #8b949e); cursor: pointer; }
.\${NS}-restore:hover { color: #388bfd; border-color: #388bfd; }
.\${NS}-empty { padding: 6px 12px; color: var(--dsh-fg-dim, #8b949e); font-style: italic; }
\`;
  const style = document.createElement("style");
  style.id = \`\${NS}-styles\`;
  style.textContent = css;
  document.head.appendChild(style);
}
		module.exports = { apply, inject };
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map
`}],Pd="dsh-fw.userPlugins",Wn=m([]),Vs=new Map;let Tc=!1,$a=null;async function x3(t,e){await fetch(`${Yn}/plugin-data`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({k:t,v:e})}).catch(()=>{})}async function C3(t){try{return(await(await fetch(`${Yn}/plugin-data?k=${encodeURIComponent(t)}`,{headers:{Accept:"application/json"}})).json().catch(()=>null))?.data??null}catch{return null}}function br(){$a&&clearTimeout($a),$a=setTimeout(()=>{$a=null,x3(Pd,Wn.value)},300)}async function $3(){const t=await C3(Pd);return Array.isArray(t)?t:[]}const Pa=new Map;function S3(){return{load(t){Pa.set(t.id,t)}}}function Dc(){return{views:od().map(t=>t.id),commands:fr(),status:gi().map(t=>t.id),menu:Jo().map(t=>t.id)}}function E3(t,e){const n=(i,c)=>c.filter(u=>!i.includes(u));return{views:n(t.views,e.views),commands:n(t.commands,e.commands),status:n(t.status,e.status),menu:n(t.menu,e.menu)}}function Ll(t){t&&(t.views.forEach(vi),t.commands.forEach(dr),t.status.forEach(mi),t.menu.forEach(yi))}function T3(t){const e=window,n=e.__ModuleLoader__,i=new Set(Pa.keys());e.__ModuleLoader__=S3();try{(0,eval)(t)}finally{e.__ModuleLoader__=n}const c=[...Pa.keys()].filter(v=>!i.has(v)),u=Dc();for(const v of c){const d=Pa.get(v).factory(()=>{});typeof d?.apply=="function"&&d.apply()}return E3(u,Dc())}function _r(t){return Wn.value.find(e=>e.id===t)}async function Co(t){const e=_r(t);if(e){Ll(Vs.get(t)),Vs.delete(t);try{const n=T3(e.code);Vs.set(t,n),e.enabled=!0,e.error=void 0}catch(n){e.enabled=!1,e.error=n instanceof Error?n.message:String(n),Ll(Vs.get(t)),Vs.delete(t)}br()}}function ni(t){const e=_r(t);e&&(Ll(Vs.get(t)),Vs.delete(t),e.enabled=!1,e.error=void 0,br())}function D3(t){const e=_r(t);!e||e.source==="builtin"||(ni(t),Wn.value=Wn.value.filter(n=>n.id!==t),br())}function Ad(t){return t.trim()}function Md(t){const e=Wn.value.findIndex(n=>n.id===t.id);e>=0?Wn.value.splice(e,1,t):Wn.value=[...Wn.value,t]}async function F3(t){const e=await t.text(),n=Ad(t.name.replace(/\.(c|m)?js$/i,""))||`file-${Date.now()}`;Md({id:n,name:t.name,source:"file",origin:t.name,code:e,enabled:!1}),await Co(n)}async function R3(t){const e=t.trim();if(!e)return;const n=await fetch(`${Yn}/fetch-plugin`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({url:e})}),i=await n.json().catch(()=>({ok:!1,error:"bad response"}));if(!i.ok||!i.data)throw new Error(i.error||`HTTP ${n.status}`);const{code:c,name:u}=i.data,v=u||e.split("/").pop()||e,d=Ad(v.replace(/\.(c|m)?js$/i,""))||`url-${Date.now()}`;Md({id:d,name:v,source:"url",origin:e,code:c,enabled:!1}),await Co(d)}function N3(t){const e=new Map(t.map(n=>[n.id,n]));for(const n of k3)e.has(n.id)||e.set(n.id,{id:n.id,name:n.name,source:"builtin",origin:n.id,version:n.version,description:n.description,code:n.code,enabled:!1});return[...e.values()]}async function P3(){if(Tc||typeof window>"u")return;Tc=!0;const t=await $3();Wn.value=N3(t);for(const e of[...Wn.value])e.enabled&&await Co(e.id)}function Bl(){return Wn.value}const A3="host.plugin-manager",xe="dsh-pm";let Fc=!1,Rc=!1;function M3(){Fc||typeof window>"u"||(Fc=!0,cr({id:A3,title:{zh:"插件管理",en:"Plugins"},icon:"puzzle",order:Number.MAX_SAFE_INTEGER,mount(t,e){const n=G3(t,e);return Rc||(Rc=!0,P3().then(()=>n.rerender())),n.cleanup}}))}function O3(){if(typeof document>"u"||document.getElementById(`${xe}-styles`))return;const t=`
.${xe}-view,.${xe}-menu{
  --pm-fg:#1f2328; --pm-fg-weak:#656d76; --pm-fg-muted:#8b949e;
  --pm-bg:#ffffff; --pm-bg2:#f6f8fa; --pm-bg3:#eaeef2;
  --pm-border:#d0d7de; --pm-hover:#e7ebef; --pm-accent:#0969da;
  --pm-danger:#cf222e; --pm-purple:#8250df; --pm-info:#0550ae; --pm-warn:#9a6700;
  --pm-input:#f2f4f7; --pm-menu:#ffffff; --pm-shadow:0 8px 24px rgba(31,35,40,.18);
  --pm-av-builtin:#57606a; --pm-av-file:#1f6feb; --pm-av-url:#8250df;}
.${xe}-view{color:var(--pm-fg);font-size:13px;}
:is(html[data-theme="dark"],html.dark,.fw-root[data-theme="dark"],.vs-pane[data-theme="dark"]) .${xe}-view,
:is(html[data-theme="dark"],html.dark,.fw-root[data-theme="dark"],.vs-pane[data-theme="dark"]) .${xe}-menu{
  --pm-fg:#c9d1d9; --pm-fg-weak:#8b949e; --pm-fg-muted:#6e7681;
  --pm-bg:#0d1117; --pm-bg2:#161b22; --pm-bg3:#21262d;
  --pm-border:#30363d; --pm-hover:#30363d; --pm-accent:#2f81f7;
  --pm-danger:#f85149; --pm-purple:#d2a8ff; --pm-info:#79c0ff; --pm-warn:#d29922;
  --pm-input:#0d1117; --pm-menu:#1c2128; --pm-shadow:0 8px 24px rgba(1,4,9,.6);
  --pm-av-builtin:#6e7681; --pm-av-file:#388bfd; --pm-av-url:#a371f7;}
.${xe}-root{display:flex;flex-direction:column;height:100%;min-height:0;gap:0;}

/* ---- 标题栏：标题 + 右侧工具条（排序 + 管理⋯），VS Code 同款 ---- */
.${xe}-hdr{display:flex;align-items:center;gap:6px;padding:6px 6px 6px 12px;position:sticky;top:0;background:var(--pm-bg);z-index:2;}
.${xe}-title{font-size:11px;font-weight:400;letter-spacing:.4px;text-transform:uppercase;color:var(--pm-fg-weak);}
.${xe}-spacer{flex:1 1 auto;}
.${xe}-tool{width:24px;height:22px;border:none;border-radius:4px;background:transparent;color:var(--pm-fg-weak);cursor:pointer;display:flex;align-items:center;justify-content:center;}
.${xe}-tool:hover{background:var(--pm-hover);color:var(--pm-fg);}
.${xe}-tool svg{width:15px;height:15px;}

/* ---- 搜索框 ---- */
.${xe}-search{padding:2px 12px 8px;position:relative;}
.${xe}-search-box{display:flex;align-items:center;gap:6px;padding:5px 8px;border:1px solid transparent;border-radius:3px;background:var(--pm-input);}
.${xe}-search-box:focus-within{border-color:var(--pm-accent);}
.${xe}-search-box svg{width:14px;height:14px;flex:0 0 auto;color:var(--pm-fg-muted);}
.${xe}-search-input{flex:1 1 auto;min-width:0;border:none;outline:none;background:transparent;color:inherit;font-size:13px;}
.${xe}-search-input::placeholder{color:var(--pm-fg-muted);}

/* ---- 可折叠分组头（▶ 已安装 (N)）---- */
.${xe}-section-head{display:flex;align-items:center;gap:5px;padding:4px 12px;font-size:11px;font-weight:700;color:var(--pm-fg);cursor:pointer;user-select:none;position:sticky;top:0;z-index:1;background:var(--pm-bg);}
.${xe}-section-head:hover{color:var(--pm-fg);}
.${xe}-twist{font-size:9px;line-height:1;color:var(--pm-fg-weak);transition:transform .1s;width:10px;}
.${xe}-section.collapsed .${xe}-twist{transform:rotate(-90deg);}
.${xe}-section-count{font-weight:400;color:var(--pm-fg-weak);}
.${xe}-section-body{overflow:hidden;}
.${xe}-section.collapsed .${xe}-section-body{display:none;}

/* ---- 列表行：紧凑，图标 · 两行文本，hover 浮出操作 ---- */
.${xe}-list{display:flex;flex-direction:column;padding:1px 0 6px;}
.${xe}-row{display:flex;align-items:flex-start;gap:10px;padding:6px 12px;cursor:default;position:relative;}
.${xe}-row:hover{background:var(--pm-hover);}
.${xe}-row.is-disabled{opacity:.55;}
.${xe}-avatar{width:32px;height:32px;flex:0 0 auto;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:700;color:#fff;background:var(--pm-av-builtin);overflow:hidden;}
.${xe}-avatar.file{background:var(--pm-av-file);}
.${xe}-avatar.url{background:var(--pm-av-url);}
.${xe}-avatar img{width:100%;height:100%;object-fit:cover;}
.${xe}-main{flex:1 1 auto;min-width:0;display:flex;flex-direction:column;gap:1px;padding-top:1px;}
.${xe}-nameline{display:flex;align-items:baseline;gap:6px;white-space:nowrap;overflow:hidden;}
.${xe}-name{font-weight:600;font-size:13px;color:var(--pm-fg);overflow:hidden;text-overflow:ellipsis;flex:0 1 auto;}
.${xe}-vendor{font-size:11px;color:var(--pm-fg-weak);font-weight:400;overflow:hidden;text-overflow:ellipsis;flex:0 1 auto;}
.${xe}-ver{font-size:11px;color:var(--pm-fg-muted);flex:0 0 auto;}
.${xe}-desc{font-size:12px;color:var(--pm-fg-weak);line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}
.${xe}-err{font-size:11px;color:var(--pm-danger);margin-top:2px;word-break:break-all;}

/* ---- 行内操作区：hover 才显出（VS Code 悬停浮出）---- */
.${xe}-rowacts{position:absolute;top:6px;right:10px;display:none;align-items:center;gap:4px;}
.${xe}-row:hover .${xe}-rowacts{display:flex;}
.${xe}-btn{font-size:11px;padding:2px 8px;border-radius:3px;border:1px solid var(--pm-border);background:var(--pm-bg2);color:var(--pm-fg);cursor:pointer;white-space:nowrap;}
.${xe}-btn.primary{background:var(--pm-accent);border-color:var(--pm-accent);color:#fff;}
.${xe}-btn:hover{filter:brightness(1.05);}
.${xe}-gear{width:22px;height:22px;border:none;border-radius:3px;background:transparent;color:var(--pm-fg-weak);cursor:pointer;display:flex;align-items:center;justify-content:center;}
.${xe}-gear:hover{background:color-mix(in srgb,var(--pm-fg) 12%,transparent);color:var(--pm-fg);}
.${xe}-gear svg{width:14px;height:14px;}

/* ---- 下拉菜单（fixed 定位，坐标由 JS 按锚点设定，挂 body 脱离 transform 包含块）---- */
.${xe}-menu{position:fixed;z-index:9999;min-width:176px;max-width:90vw;max-height:70vh;overflow:auto;padding:4px;border-radius:6px;background:var(--pm-menu);border:1px solid var(--pm-border);box-shadow:var(--pm-shadow);display:none;}
.${xe}-menu.open{display:block;}
.${xe}-menu-item{display:flex;align-items:center;gap:8px;padding:6px 10px;font-size:12px;border-radius:4px;cursor:pointer;color:var(--pm-fg);}
.${xe}-menu-item:hover{background:var(--pm-accent);color:#fff;}
.${xe}-menu-item.danger:hover{background:var(--pm-danger);}
.${xe}-menu-sep{height:1px;margin:4px 6px;background:var(--pm-border);}

/* ---- URL 输入弹层 ---- */
.${xe}-url-panel{overflow:hidden;max-height:0;opacity:0;transition:max-height .2s ease,opacity .15s;padding:0 12px;}
.${xe}-url-panel.open{max-height:48px;opacity:1;padding-bottom:8px;}
.${xe}-url-inner{display:flex;gap:6px;}
.${xe}-url-input{flex:1 1 auto;min-width:0;padding:5px 8px;border:1px solid var(--pm-border);border-radius:3px;background:var(--pm-input);color:var(--pm-fg);font-size:12px;outline:none;}
.${xe}-url-input:focus{border-color:var(--pm-accent);}
.${xe}-url-go{padding:5px 12px;font-size:12px;border:none;border-radius:3px;background:var(--pm-accent);color:#fff;cursor:pointer;}
.${xe}-url-go:hover{filter:brightness(1.1);}

/* ---- 空态 ---- */
.${xe}-empty{display:flex;flex-direction:column;align-items:center;gap:8px;padding:32px 16px;color:var(--pm-fg-muted);}
.${xe}-empty-icon{font-size:28px;opacity:.5;}
.${xe}-empty-text{font-size:12px;text-align:center;line-height:1.6;}
`,e=document.createElement("style");e.id=`${xe}-styles`,e.textContent=t,document.head.appendChild(e)}const L3='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',B3='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3.2"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',I3='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h13M4 12h9M4 18h5"/></svg>';let Il="",si=!1,jl="install";function j3(t){return t==="builtin"?"内置":t==="file"?"本地":"URL"}function Od(t){const e=t.description?.match(/对标\s*([^。（(]+)/);return e?e[1].trim():j3(t.source)}function V3(t){return(t.name.replace(/^@[^/]+\//,"")[0]??"?").toUpperCase()}function z3(t,e){return e?`${t.name} ${t.description??""} ${Od(t)}`.toLowerCase().includes(e):!0}function Mo(t){return t.name.replace(/^@[^/]+\//,"")}function U3(t){const e=[...t];return jl==="name"?e.sort((n,i)=>Mo(n).localeCompare(Mo(i))):jl==="source"&&e.sort((n,i)=>n.source.localeCompare(i.source)||Mo(n).localeCompare(Mo(i))),e}let Aa=null;function Vl(t,e){Ld();const n=document.createElement("div");n.className=`${xe}-menu`;for(const b of e){const x=document.createElement("div");x.className=`${xe}-menu-item${b.danger?" danger":""}`,x.textContent=b.label,x.addEventListener("click",A=>{A.stopPropagation(),p(),b.onClick()}),n.append(x)}document.body.appendChild(n);const i=t.getBoundingClientRect();n.style.visibility="hidden",n.classList.add("open");const c=n.offsetWidth,u=n.offsetHeight;let v=i.right-c;v<8&&(v=Math.max(8,i.left)),v+c>window.innerWidth-8&&(v=Math.max(8,window.innerWidth-8-c));let d=i.bottom+4;d+u>window.innerHeight-8&&(d=Math.max(8,i.top-4-u)),n.style.left=`${v}px`,n.style.top=`${d}px`,n.style.visibility="";function p(){document.removeEventListener("mousedown",w,!0),window.removeEventListener("resize",p),n.remove(),Aa?.el===n&&(Aa=null)}function w(b){n.contains(b.target)||p()}requestAnimationFrame(()=>document.addEventListener("mousedown",w,!0)),window.addEventListener("resize",p),Aa={el:n,close:p}}function Ld(){Aa?.close()}function Nn(t,e){const n=t.querySelector(`.${xe}-listwrap`);if(!n)return;const i=Il.trim().toLowerCase(),c=Bl(),u=U3(c.filter(p=>z3(p,i)));n.classList.toggle("collapsed",si);const v=n.querySelector(`.${xe}-section-count`);v&&(v.textContent=`(${u.length})`);const d=n.querySelector(`.${xe}-list`);if(d&&(d.replaceChildren(),!si)){if(!u.length){const p=document.createElement("div");p.className=`${xe}-empty`,p.innerHTML=`<div class="${xe}-empty-icon">&#x2699;</div><div class="${xe}-empty-text">${i?`没有匹配 “${H3(Il)}” 的插件<br>换个关键词，或用右上「···」导入`:"还没有插件<br>用右上「···」从本地文件或 URL 导入"}</div>`,d.append(p);return}for(const p of u)d.append(W3(p,t,e))}}function H3(t){return t.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}function W3(t,e,n){const i=document.createElement("div");i.className=`${xe}-row${t.enabled?"":" is-disabled"}`;const c=document.createElement("div");c.className=`${xe}-avatar ${t.source}`,c.textContent=V3(t),i.append(c);const u=document.createElement("div");u.className=`${xe}-main`;const v=document.createElement("div");v.className=`${xe}-nameline`;const d=document.createElement("span");d.className=`${xe}-name`,d.textContent=Mo(t),d.title=t.origin||t.name;const p=document.createElement("span");if(p.className=`${xe}-vendor`,p.textContent=Od(t),v.append(d,p),t.version){const A=document.createElement("span");A.className=`${xe}-ver`,A.textContent=`v${t.version}`,v.append(A)}if(u.append(v),t.description){const A=document.createElement("div");A.className=`${xe}-desc`,A.textContent=t.description,u.append(A)}if(t.error){const A=document.createElement("div");A.className=`${xe}-err`,A.textContent=t.error,u.append(A)}i.append(u);const w=document.createElement("div");w.className=`${xe}-rowacts`;const b=document.createElement("button");b.type="button",b.className=`${xe}-btn${t.enabled?"":" primary"}`,b.textContent=t.enabled?"禁用":"启用",b.addEventListener("click",A=>{A.stopPropagation(),t.enabled?ni(t.id):Co(t.id).then(()=>{t.error&&n.toast("error",t.error)}),Nn(e,n)}),w.append(b);const x=document.createElement("button");return x.type="button",x.className=`${xe}-gear`,x.title="更多操作",x.innerHTML=B3,x.addEventListener("click",A=>{A.stopPropagation();const I=[{label:t.enabled?"禁用":"启用",onClick:()=>{t.enabled?ni(t.id):Co(t.id).then(()=>{t.error&&n.toast("error",t.error)}),Nn(e,n)}}];t.source!=="builtin"&&I.push({label:"移除插件",danger:!0,onClick:()=>{D3(t.id),Nn(e,n)}}),Vl(x,I)}),w.append(x),i.append(w),i}function G3(t,e){O3(),t.classList.add(`${xe}-view`);const n=document.createElement("div");n.className=`${xe}-root`;const i=document.createElement("div");i.className=`${xe}-hdr`;const c=document.createElement("div");c.className=`${xe}-title`,c.textContent="扩展";const u=document.createElement("div");u.className=`${xe}-spacer`;const v=document.createElement("button");v.type="button",v.className=`${xe}-tool`,v.title="排序",v.innerHTML=I3,v.addEventListener("click",ve=>{ve.stopPropagation();const _e=(ke,le)=>({label:le,onClick:()=>{jl=ke,Nn(n,e)}});Vl(v,[_e("install","按安装次序"),_e("name","按名称"),_e("source","按来源")])});const d=document.createElement("button");d.type="button",d.className=`${xe}-tool`,d.title="管理",d.textContent="⋯",i.append(c,u,v,d);const p=document.createElement("div");p.className=`${xe}-search`;const w=document.createElement("div");w.className=`${xe}-search-box`,w.innerHTML=L3;const b=document.createElement("input");b.type="text",b.className=`${xe}-search-input`,b.placeholder="在已安装中搜索",b.addEventListener("input",()=>{Il=b.value,Nn(n,e)}),w.append(b),p.append(w);const x=document.createElement("div");x.className=`${xe}-listwrap`;const A=document.createElement("div");A.className=`${xe}-section-head`;const I=document.createElement("span");I.className=`${xe}-twist`,I.textContent="▾";const M=document.createElement("span");M.textContent="已安装";const V=document.createElement("span");V.className=`${xe}-section-count`,A.append(I,M,V),A.addEventListener("click",()=>{si=!si,Nn(n,e)});const H=document.createElement("div");H.className=`${xe}-list`,x.append(A,H);const C=document.createElement("input");C.type="file",C.accept=".js,.cjs,.mjs,text/javascript",C.multiple=!0,C.style.display="none",C.addEventListener("change",async()=>{const ve=[...C.files??[]];for(const _e of ve)try{await F3(_e)}catch(ke){e.toast("error",`导入 ${_e.name} 失败：${ke instanceof Error?ke.message:String(ke)}`)}C.value="",Nn(n,e)});const Z=document.createElement("div");Z.className=`${xe}-url-panel`;const G=document.createElement("div");G.className=`${xe}-url-inner`;const F=document.createElement("input");F.type="text",F.className=`${xe}-url-input`,F.placeholder="https://example.com/plugin.js";const de=document.createElement("button");de.type="button",de.className=`${xe}-url-go`,de.textContent="拉取";const B=async()=>{const ve=F.value.trim();if(ve){de.disabled=!0,de.textContent="…";try{await R3(ve),F.value="",Z.classList.remove("open"),e.toast("ok","已从 URL 导入并启用")}catch(_e){e.toast("error",`URL 导入失败：${_e instanceof Error?_e.message:String(_e)}`)}finally{de.disabled=!1,de.textContent="拉取",Nn(n,e)}}};return de.addEventListener("click",()=>void B()),F.addEventListener("keydown",ve=>{ve.key==="Enter"&&B()}),G.append(F,de),Z.append(G),d.addEventListener("click",ve=>{ve.stopPropagation(),Vl(d,[{label:"从本地文件导入…",onClick:()=>C.click()},{label:"从 URL 导入…",onClick:()=>{Z.classList.toggle("open"),Z.classList.contains("open")&&setTimeout(()=>F.focus(),80)}},{label:"全部启用",onClick:()=>{for(const _e of Bl())_e.enabled||Co(_e.id);Nn(n,e)}},{label:"全部禁用",onClick:()=>{for(const _e of Bl())_e.enabled&&ni(_e.id);Nn(n,e)}}])}),n.append(i,p,Z,x,C),t.replaceChildren(n),Nn(n,e),{cleanup(){Ld(),t.replaceChildren()},rerender(){Nn(n,e)}}}const q3=["data-theme"],K3=["title"],X3={class:"vs-topbar-txt"},Y3=["title"],J3={class:"vs-topbar-txt"},Q3=["title"],Z3={class:"vs-topbar-txt vs-recent-name"},eT=["title"],tT=["title","disabled"],nT={class:"vs-quickopen-ph"},sT=["disabled","title","onClick","onContextmenu"],oT={key:1,class:"vs-act-letter"},aT={class:"vs-left-main"},iT={key:1,class:"fw-empty vs-git-empty"},lT={class:"vs-right"},rT={class:"vs-editor-wrap"},cT={key:0,class:"vs-diffpane"},uT={key:1,class:"vs-empty"},dT={class:"vs-empty-title"},fT={class:"vs-empty-hint"},pT={class:"vs-empty-actions"},vT={key:2,class:"vs-loading-big"},hT={key:3,class:"vs-error"},mT={key:4,class:"vs-empty"},gT={class:"vs-empty-hint"},yT={class:"vs-status"},wT=["title"],bT={key:1,class:"vs-status-readonly"},_T=["title"],kT={class:"vs-status-seg"},xT=["disabled"],CT=["disabled"],$T={class:"vs-status-seg"},ST=["placeholder","onKeydown"],ET={class:"vs-quickopen-list"},TT=["title","onMousedown","onMouseenter"],DT={class:"vs-search-name"},FT={class:"vs-search-dir"},RT={key:0,class:"vs-search-note"},NT={key:1,class:"vs-search-note"},Nc=new Set,Pc=new Set,PT=ht({__name:"VSCodePane",setup(t){const e=Ul(bi)??gr(),n=e.state,i=e.ready,c=L(()=>n.projectDir?Wt(n.projectDir)?hl(n.projectDir):n.projectDir:y("vsNoProject")),u=e.rootKey,v=()=>e.init(),d=()=>e.persist(),p=f=>e.rememberProject(f),w=f=>e.fileViewOf(f),b=(f,_)=>e.rememberFileView(f,_),x=f=>e.stashOpenBuffers(f),A=()=>e.takeStashedBuffers(),I=`vscode:${e.slot}`,M=m(null),V=rr(M),H=L(()=>({fontSize:`${Ue.fontSize??13}px`,"--vs-fs-scale":String((Ue.fontSize??13)/13)})),C=gt({}),Z=gt(new Set),G=gt({}),F=gt({}),de=m(!1),B=m(!1),ve=L(()=>{const f=n.projectDir;if(!f)return null;if(Wt(f))return Ga(f)||null;const _=f.replace(/[\\/]+$/,""),Y=Math.max(_.lastIndexOf("/"),_.lastIndexOf("\\"));if(Y<=0)return null;const Oe=_.slice(0,Y);return/^[A-Za-z]:$/.test(Oe)?null:Oe}),_e=m(!1),ke=m(null),le=m(""),re=m(null),Ee="dsh-file-workbench.vscode.activeView";function Ve(){try{return localStorage.getItem(Ee)??"files"}catch{return"files"}}const ye=m(Ve()),Ne=m(!1);function W(f){ye.value=f;try{localStorage.setItem(Ee,f)}catch{}}Qe(()=>n.projectDir,f=>{!f&&ye.value!=="files"&&(ye.value="files")});const J=m("");Qe(()=>n.projectDir,async f=>{if(J.value="",!!f)try{const _=await Wo(f);if(_.inRepo&&_.repo)J.value=_.branch||"HEAD";else{const Y=await ps(f);Y.inRepo&&Y.svnAvailable&&(J.value=Y.revision?`r${Y.revision}`:"svn")}}catch{}},{immediate:!0});function z(f,_){n.projectDir&&os(Ys(f,n.projectDir),{line:_})}const ee=gt({line:1,col:1});let me=null;function je(f){return f.split(/[\\/]/).filter(Boolean).pop()??f}function Ke(f){const _=Math.max(f.lastIndexOf("/"),f.lastIndexOf("\\"));if(_<0)return"";const Y=_===0?f.slice(0,1):f.slice(0,_);return/^[A-Za-z]:$/.test(Y)?`${Y}${f[_]}`:Y}function Ze(f){return Wt(f)?Ga(f)||f:Ke(f)||f}function ge(f,_){if(!f)return!1;const Y=f.replace(/[\\/]+$/,"").toLowerCase(),Oe=_.replace(/[\\/]+$/,"").toLowerCase();return Oe===Y||Oe.startsWith(`${Y}\\`)||Oe.startsWith(`${Y}/`)}const we="vs-diff://",Ye=L(()=>{const f=n.openTabs.map(_=>({path:_,dirty:C[_]?.dirty??!1,conflict:C[_]?.conflict??!1}));return tn.value&&f.push({path:we+tn.value.title,dirty:!1,icon:"fileOut"}),f}),st=L(()=>tn.value?we+tn.value.title:n.activeTab);function pe(f){return f.startsWith(we)}const Ce=L(()=>n.activeTab?C[n.activeTab]:void 0),qe=L(()=>Ce.value?.content??""),ce=L(()=>n.activeTab?F[n.activeTab]??0:0),Ie=L(()=>n.activeTab?Z.has(n.activeTab):!1),rt=L(()=>n.activeTab?G[n.activeTab]:void 0),yt=L(()=>{const f=n.activeTab;return!f||!n.projectDir?!0:ge(n.projectDir,f)?!1:!Ue.allowOutsideRoot}),ut=L(()=>Ce.value?.conflict===!0),it=L(()=>n.activeTab?w8(n.activeTab):"Plain Text"),Le=L(()=>w(n.activeTab)),U=[{encoding:"utf8",hasBom:!1,label:"UTF-8"},{encoding:"utf8",hasBom:!0,label:"UTF-8 with BOM"},{encoding:"utf16le",hasBom:!0,label:"UTF-16 LE"},{encoding:"utf16be",hasBom:!0,label:"UTF-16 BE"},{encoding:"gb18030",hasBom:!1,label:"GB18030"},{encoding:"big5",hasBom:!1,label:"Big5"},{encoding:"latin1",hasBom:!1,label:"Latin-1"}],N={utf8:"UTF-8",utf16le:"UTF-16 LE",utf16be:"UTF-16 BE",gb18030:"GB18030",big5:"Big5",latin1:"Latin-1",binary:"Binary"},Q=L(()=>(Ce.value?.eol??"lf").toUpperCase()),Te=L(()=>{const f=Ce.value;if(!f)return"UTF-8";const _=N[f.encoding],Y=f.encoding==="utf8"||f.encoding==="utf16le"||f.encoding==="utf16be";return f.hasBom&&Y?`${_} BOM`:_}),{cmOpen:O,cmX:T,cmY:K,openMenuAt:S}=pn();function q(f){const _=f.currentTarget?.getBoundingClientRect();S(_?.left??0,_?.top??0)}const De=L(()=>{const f=Ce.value;return U.map(_=>({label:_.label,checked:!!f&&f.encoding===_.encoding&&f.hasBom===_.hasBom,disabled:!f||f.binary,onClick:()=>void Je(_.encoding,_.hasBom)}))}),{cmOpen:ie,cmX:ct,cmY:wt,openMenuAt:Ot}=pn();function On(f){const _=f.currentTarget?.getBoundingClientRect();Ot(_?.left??0,_?.top??0)}const Gt=L(()=>{const f=Ce.value,_=(Y,Oe)=>({label:Oe,checked:f?.eol===Y,disabled:!f||f.binary,onClick:()=>ze(Y)});return[_("lf","LF"),_("crlf","CRLF"),_("cr","CR")]});function ze(f){const _=n.activeTab,Y=_?C[_]:void 0;!_||!Y||Y.eol===f||(Y.eol=f,Y.dirty=!0)}async function Je(f,_){const Y=n.activeTab,Oe=Y?C[Y]:void 0;!Y||!Oe||Oe.encoding===f&&Oe.hasBom===_||Oe.dirty&&!await Mt({title:y("vsUnsavedTitle"),message:y("vsReopenLoseMsg")})||(await ys(Y,{encoding:f,hasBom:_,force:!0}),X("ok",y("vsEncodingSwitched",{enc:Te.value})))}const et=m(null),{cmOpen:lt,cmX:xn,cmY:Cn,openMenuAt:zt}=pn();function ot(){const f=et.value?.getBoundingClientRect();zt(f?.left??0,(f?.bottom??0)+2)}const ft=L(()=>!!Ce.value&&!Ce.value.binary&&!yt.value),Ct=L(()=>n.openTabs.filter(f=>C[f]?.dirty)),Ln=L(()=>[{label:y("vsOpenFolder"),icon:"folderOpen",onClick:Ht},{label:y("vsNewFile"),icon:"fileOut",disabled:!n.projectDir,onClick:()=>re.value?.createFileAtRoot()},{label:y("vsNewFolder"),icon:"folder",disabled:!n.projectDir,onClick:()=>re.value?.createFolderAtRoot()},{label:y("vsMenuRecent"),icon:"clock",disabled:n.recentProjects.length===0,children:[...n.recentProjects.map(f=>({label:je(f)||f,checked:f===n.projectDir,disabled:f===n.projectDir,onClick:()=>void As(f)})),{separator:!0},{label:y("vsRecentClearAll"),icon:"trash",disabled:n.recentProjects.length===0,onClick:()=>void gn()}]},{separator:!0},{label:y("menuCloneGit"),icon:"git",onClick:()=>void Tn("git")},{label:y("menuCloneSvn"),icon:"svn",onClick:()=>void Tn("svn")},{separator:!0},{label:y("vsNewWindow"),icon:"panellayout",onClick:gs},{label:y("vsFloatWindow"),icon:"float",disabled:!e.tabId,onClick:Qs},{label:y("vsNewTerminal"),icon:"terminal",onClick:ss},{separator:!0},{label:y("vsSave"),icon:"save",hint:"Ctrl+S",disabled:!ft.value,onClick:()=>void Si()},{label:y("vsSaveAs"),icon:"save",hint:"Ctrl+Shift+S",disabled:!ft.value,onClick:()=>Ei()},{label:y("vsSaveAll"),disabled:Ct.value.length===0,onClick:()=>void Cr()},{label:y("vsMenuLocalDiff"),icon:"fileOut",disabled:!(Ce.value?.dirty&&!Ce.value.binary),onClick:()=>void ki()}]),$n=m(null),{cmOpen:Jn,cmX:mn,cmY:Sn,openMenuAt:Xs}=pn(),Ts=L(()=>{const f=n.projectDir;if(!f)return y("vsNoProject");const _=je(f);return _||(Wt(f)?hl(f):f)}),En=L(()=>n.projectDir?`${c.value} · ${y("vsRecentProjects")}`:y("vsRecentProjects")),cn=L(()=>[{label:y("vsOpenFolder"),icon:"folderOpen",onClick:Ht},{separator:!0},...n.recentProjects.map(f=>({label:je(f)||f,checked:f===n.projectDir,disabled:f===n.projectDir,trailing:{icon:"close",title:y("vsRecentForgetTitle"),onClick:()=>void Gn(f)},onClick:()=>void As(f)})),{separator:!0},{label:y("vsRecentClearAll"),icon:"trash",disabled:n.recentProjects.length===0,onClick:()=>void gn()}]);function Bn(){const f=$n.value?.getBoundingClientRect();Xs(f?.left??0,(f?.bottom??0)+2)}async function Gn(f){const _=je(f)||f;await Mt({title:y("vsRecentForgetTitle"),message:y("vsRecentForgetConfirm",{name:_})})&&(e.forgetProject(f),X("ok",y("vsRecentForgot",{name:_})))}function Tn(f){const Y=ve.value??n.projectDir??"";vr({kind:f,dir:Y,key:u,onDone:({path:Oe})=>{As(Oe)}})}async function gn(){if(n.recentProjects.length===0)return;await Mt({title:y("vsRecentClearAllTitle"),message:y("vsRecentClearAllConfirm")})&&(e.clearRecentProjects(),X("ok",y("vsRecentCleared")))}async function yn(f){Dn(f),X("info",y("vsProjectGone"))}async function Qn(f){const _=n.projectDir===f&&Ct.value.length>0;await Mt({title:y(_?"vsUnsavedTitle":"vsRemoveProjectTitle"),message:_?y("vsSwitchLoseMsg",{n:String(Ct.value.length)}):y("vsRemoveProjectConfirm",{name:je(f)||f})})&&(Dn(f),X("ok",y("vsProjectRemoved")))}function Dn(f){e.forgetProject(f),n.projectDir===f&&(ia(),n.projectDir=null,d())}const D=50,he=3e4,Be=m(null),He=m(""),Pe=m(!1),Ge=m(0),Et=m([]),$t=m(""),wn=m(0),In=m(!1),Fn=m(!1);function Ys(f,_){const Y=_.includes("\\")?"\\":"/";return`${_.replace(/[\\/]+$/,"")}${Y}${f.split("/").join(Y)}`}function $o(f,_){const Y=f.lastIndexOf("/");if(f.slice(Y+1).includes(_))return 0;if(f.includes(_))return 1;let Oe=0;for(const pt of _){if(Oe=f.indexOf(pt,Oe),Oe<0)return null;Oe+=1}return 2}const un=L(()=>{const f=n.projectDir;if(!f)return[];const _=Et.value,Y=vt=>{const nn=vt.lastIndexOf("/");return{abs:Ys(vt,f),name:nn<0?vt:vt.slice(nn+1),dir:nn<0?"":vt.slice(0,nn)}},Oe=He.value.trim().toLowerCase();if(!Oe)return _.slice(0,D).map(Y);const pt=[];for(const vt of _){const nn=$o(vt.toLowerCase(),Oe);nn!==null&&pt.push({rel:vt,score:nn})}return pt.sort((vt,nn)=>vt.score-nn.score||vt.rel.length-nn.rel.length||(vt.rel<nn.rel?-1:1)),pt.slice(0,D).map(vt=>Y(vt.rel))});async function Ds(){const f=n.projectDir;if(!(!f||In.value)&&!($t.value===f&&Date.now()-wn.value<he)){In.value=!0;try{const _=await cp(f,u);Et.value=_.files,Fn.value=_.truncated,$t.value=f,wn.value=Date.now()}catch{Et.value=[],$t.value=""}finally{In.value=!1}}}function Fs(){n.projectDir&&(Pe.value=!0,Ge.value=0,Ds(),Dt(()=>Be.value?.focus()))}function Zn(){Ge.value=0}function es(){Pe.value=!1,He.value=""}function Rs(f){const _=un.value.length;_!==0&&(Pe.value=!0,Ge.value=(Ge.value+f+_)%_)}function Js(f){const _=un.value[f??Ge.value];_&&(Pe.value=!1,He.value="",Be.value?.blur(),os(_.abs))}const Rn=m(null),qn=new Set,ts=new Set,Ns=new Set;Qe(()=>n.projectDir,f=>qn.forEach(_=>_(f))),Qe(V,f=>ts.forEach(_=>_(f))),Qe(()=>n.activeTab,f=>Ns.forEach(_=>_(f)));function en(){return n.activeTab?LS(e.slot)??null:null}const Kt=new Set,ns=new Set;let jn=null,dn=null;const g={apiVersion:Ka,get projectDir(){return n.projectDir},get theme(){return V.value},get activeFile(){return n.activeTab},onProjectChange(f){return qn.add(f),f(n.projectDir),()=>qn.delete(f)},onThemeChange(f){return ts.add(f),f(V.value),()=>ts.delete(f)},onDidChangeActiveFile(f){return Ns.add(f),f(n.activeTab),()=>Ns.delete(f)},openFile:(f,_)=>os(f,_),listOpenFiles:()=>[...n.openTabs],openDiff:(f,_)=>Zs({title:f,lines:_}),toast:(f,_)=>X(f,_),editor:{get view(){return en()},getText:()=>en()?.state.doc.toString()??"",isDirty:()=>n.activeTab?C[n.activeTab]?.dirty??!1:!1,onDidChangeTextDocument(f){const _=(Oe,pt)=>f({text:Oe,changes:pt});Kt.add(_),jn||(jn=BS(e.slot,(Oe,pt)=>Kt.forEach(vt=>vt(Oe,pt))));const Y=en();return Y&&f({text:Y.state.doc.toString(),changes:null}),()=>{Kt.delete(_),Kt.size===0&&jn&&(jn(),jn=null)}},getSelection:()=>en()?.state.selection??null,onDidChangeSelection(f){const _=Oe=>f(Oe);ns.add(_),dn||(dn=IS(e.slot,Oe=>ns.forEach(pt=>pt(Oe))));const Y=en();return Y&&f(Y.state.selection),()=>{ns.delete(_),ns.size===0&&dn&&(dn(),dn=null)}},applyEdit(f){const _=en();return!_||!f.length?!1:(_.dispatch({changes:f}),!0)},setDecorations(f){en()&&Rn.value?.setExtension(f)},createDecorations(f){return Rn.value?.setDecorationsSpec(f.items),{extension:[],update(_){Rn.value?.setDecorationsSpec(_)}}}}},{cmOpen:k,cmX:$e,cmY:fe,openMenuAt:Me}=pn(),R=L(()=>[{label:y("vsFormat"),icon:"code",disabled:!n.activeTab||yt.value||Ce.value?.binary===!0,onClick:Xt},{separator:!0},{label:y("vsSave"),icon:"save",hint:"Ctrl+S",disabled:!ft.value||de.value,onClick:()=>void Si()},{label:y("vsSaveAs"),icon:"save",disabled:!ft.value,onClick:()=>Ei()},{label:y("vsSaveAll"),disabled:Ct.value.length===0,onClick:()=>void Cr()},{separator:!0},{label:y("vsMinimap"),checked:Ue.vsMinimap,onClick:()=>{Ue.vsMinimap=!Ue.vsMinimap,Hn()}},{separator:!0},{label:y("vsMultiCursorHint"),disabled:!0}]);function Re(f){Me(f.x,f.y)}function Xt(){if(!n.activeTab)return;Rn.value?.format()??!1?X("ok",y("vsFormatOk")):X("error",y("vsFormatFail",{msg:yt.value?y("vsReadonly"):""}))}function Ht(){B.value=!0}function gs(){d(),or({fresh:!0})||X("info",y("vsNewWindowLimit"))}function Qs(){e.tabId&&Ah(e.tabId)}function ss(){Ch(n.projectDir??"")}async function Ps(){await e.init();const f=e.projectRequest.value;if(!f)return;if(e.projectRequest.value=null,Oh(),f.dir===n.projectDir){const Y=lc();Y&&await os(Y);return}await As(f.dir);const _=lc();_&&await os(_)}Qe(()=>e.projectRequest.value?.n,()=>void Ps());async function As(f){const _=f!==n.projectDir;if(!(_&&Ct.value.length>0&&!await Mt({title:y("vsUnsavedTitle"),message:y("vsSwitchLoseMsg",{n:String(Ct.value.length)})}))){n.projectDir=f,p(f),$t.value="",wn.value=0;try{await Gl(f,u)}catch{}_&&ia(),d()}}function ia(){for(const f of Object.keys(C))delete C[f];for(const f of Object.keys(G))delete G[f];for(const f of Object.keys(F))delete F[f];MS(e.slot),n.openTabs=[],n.activeTab=null}async function _i(){if(Nc.has(u))return;Nc.add(u);let f=!1;const _=n.projectDir;if(_){const vt=await nl(_);if(vt&&!vt.isDir){const nn=Ze(_);nn&&nn!==_&&(n.projectDir=nn,n.openTabs.includes(_)||n.openTabs.push(_),n.activeTab=_,f=!0)}}const Y=[...n.openTabs];if(Y.length===0){f&&d();return}const Oe=await Promise.all(Y.map(async vt=>(await nl(vt))?.isDir?vt:null)),pt=new Set(Oe.filter(vt=>!!vt));if(pt.size===0){f&&d();return}for(const vt of pt)delete C[vt],delete G[vt],delete F[vt];n.openTabs=n.openTabs.filter(vt=>!pt.has(vt)),n.activeTab&&pt.has(n.activeTab)&&(n.activeTab=n.openTabs[n.openTabs.length-1]??null),d()}async function os(f,_){tn.value=null,Ne.value=!1,n.openTabs.includes(f)||n.openTabs.push(f),n.activeTab=f,C[f]||await ys(f),_?.line&&(await Dt(),Rn.value?.revealLine(_.line)),d()}async function ys(f,_={}){if(!Z.has(f)&&!(C[f]?.dirty&&!_.force)){Z.add(f),delete G[f];try{const Y=await sl(f,{encoding:_.encoding,hasBom:_.hasBom});C[f]={content:Y.content,dirty:!1,encoding:Y.encoding,hasBom:Y.hasBom,eol:Y.eol,mtime:Y.mtime,binary:Y.binary,conflict:!1},F[f]=(F[f]??0)+1}catch(Y){G[f]=Y instanceof Ws&&Y.status===413?y("vsTooLarge"):Y.message}finally{Z.delete(f)}}}function la(f){pe(f)||(tn.value=null,n.activeTab=f,!C[f]&&!G[f]&&ys(f),d())}const tn=m(null);function Zs(f){Ne.value=!1,tn.value=f}async function ki(){const f=n.activeTab,_=f?C[f]:void 0;if(!(!f||!_||_.binary))try{const Y=await sl(f),Oe=_3(Y.content,_.content);Zs({title:`${je(f)} · ${y("vsLocalDiffTitle")}`,lines:Oe?Oe.lines:[y("vsLocalDiffTooBig")]})}catch(Y){X("error",Y.message)}}const xi=1e3,Ms=new Map;function So(f){if(!Ue.autoSave)return;const _=Ms.get(f);_&&clearTimeout(_),Ms.set(f,setTimeout(()=>{Ms.delete(f),C[f]?.dirty&&ws(f,{quiet:!0})},xi))}function Eo(f){const _=Ms.get(f);_&&clearTimeout(_),Ms.delete(f)}const ra=L(od),ca=m(null),ua=L(()=>ra.value.find(f=>f.id===ye.value)),da=L(()=>[{id:"files",title:y("vsLeftTabFiles"),icon:"folder"},{id:"search",title:y("vsLeftTabSearch"),icon:"search",disabled:!n.projectDir},{id:"git",title:y("vsLeftTabGit"),icon:"git",disabled:!n.projectDir},...ra.value.filter(f=>!f.when||f.when(g)).map(f=>({id:f.id,title:sd(f.title),icon:f.icon}))]),E=L(()=>da.value.filter(f=>!n.activityBar.hidden.includes(f.id)));Qe(E,f=>{f.some(_=>_.id===ye.value)||(ye.value="files")},{immediate:!0});function $(f){n.activityBar.hidden.includes(f)||n.activityBar.hidden.push(f),ye.value===f&&(ye.value="files"),d()}function Se(f){n.activityBar.hidden=n.activityBar.hidden.filter(_=>_!==f),d()}function nt(f){n.activityBar.hidden.includes(f)?Se(f):$(f)}const At=m(!1),Tt=m(0),dt=m(0),j=m("bar"),at=m(null),fn=L(()=>({label:n.activityBar.position==="top"?y("vsActBarBottom"):y("vsActBarTop"),icon:"panellayout",onClick:()=>{n.activityBar.position=n.activityBar.position==="top"?"bottom":"top",d()}})),Vn=L(()=>({label:n.sidebarSide==="left"?y("vsSideRight"):y("vsSideLeft"),icon:"float",onClick:()=>{n.sidebarSide=n.sidebarSide==="left"?"right":"left",d()}})),Os=L(()=>({label:Ne.value?y("vsUnfoldEditor"):y("vsFoldEditor"),icon:Ne.value?"chevronsRight":"chevronsLeft",onClick:()=>{Ne.value=!Ne.value}})),Ci=L(()=>{if(j.value==="view"&&at.value){const f=at.value;return[{label:y("vsActHide",{name:f.title}),icon:"close",onClick:()=>$(f.id)},{separator:!0},Os.value,{separator:!0},fn.value,Vn.value]}return[...da.value.map(f=>({label:f.title,icon:f.icon??"",checked:!n.activityBar.hidden.includes(f.id),onClick:()=>nt(f.id)})),{separator:!0},Os.value,{separator:!0},fn.value,Vn.value]});function fa(f,_){const Y=_.currentTarget?.getBoundingClientRect();Tt.value=Y?.right??_.clientX,dt.value=Y?.bottom??_.clientY,j.value="view",at.value=f,At.value=!0}function Vd(f){Tt.value=f.clientX,dt.value=f.clientY,j.value="bar",at.value=null,At.value=!0}const kr=L(gi);function zd(){return{path:n.activeTab,projectDir:n.projectDir}}const xr=m(null),{cmOpen:$i,cmX:Ud,cmY:Hd,openMenuAt:Wd}=pn();function Gd(){const f=xr.value?.getBoundingClientRect();f&&Wd(f.left,f.top-4)}const qd=L(()=>{n.activeTab,n.projectDir;const f=zd();return[...kr.value,...Jo()].sort((Y,Oe)=>(Y.order??0)-(Oe.order??0)).map(Y=>({label:Y.text,disabled:!!Y.when&&!Y.when(f),onClick:()=>{try{hi(Y.commandId,f)}catch(Oe){X("error",Oe.message)}}}))}),Kd=L(()=>kr.value.length+Jo().length>0);$s(f=>{const _=ua.value,Y=ca.value;if(!_||!Y||_.when&&!_.when(g))return;const Oe=_.mount(Y,g);Xa(Y);const pt=new ResizeObserver(()=>Xa(Y));pt.observe(Y),f(()=>{if(pt.disconnect(),typeof Oe=="function")try{Oe()}catch{}Y.replaceChildren()})},{flush:"post"});function Xd(f){const _=n.activeTab?C[n.activeTab]:void 0;_&&(_.content=f,_.dirty=!0,n.activeTab&&So(n.activeTab))}function Yd(f,_){ee.line=f,ee.col=_}function Jd(f){n.activeTab&&b(n.activeTab,f)}async function Si(){const f=n.activeTab;if(!f)return;const _=C[f];!_||!_.dirty||await ws(f)}async function ws(f,_={}){const Y=C[f];if(!f||!Y||Y.binary)return!1;de.value=!0;try{const Oe=await Qi(f,Y.content,{key:u,encoding:Y.encoding,hasBom:Y.hasBom,eol:Y.eol,expectedMtime:Y.mtime,force:_.force});return Y.dirty=!1,Y.conflict=!1,Y.mtime=Oe.mtime,_.quiet||X("ok",y("vsSaved")),!0}catch(Oe){return Oe instanceof Ws&&Oe.code==="mtime-conflict"?(de.value=!1,await Mt({title:y("vsConflictTitle"),message:y("vsConflictMsg",{name:je(f)})})?await ws(f,{..._,force:!0}):!1):(X("error",Oe.message),!1)}finally{de.value=!1}}async function Cr(){const f=Ct.value.slice();if(f.length===0){X("info",y("vsNoDirty"));return}let _=0;for(const Y of f)await ws(Y,{quiet:!0})&&_++;_===f.length&&X("ok",y("vsAllSaved",{n:String(_)}))}function Ei(){const f=n.activeTab,_=f?C[f]:void 0;!f||!_||_.binary||(ke.value=Ke(f)||n.projectDir,le.value=je(f),_e.value=!0)}async function Qd(f){const _=n.activeTab,Y=_?C[_]:void 0;if(!_||!Y||Y.binary||f===_)return;if(n.openTabs.includes(f)&&C[f]?.dirty){X("error",y("vsSaveAsBlockedDirty",{name:je(f)}));return}let Oe=!1;try{Oe=await tl(f)}catch{return}if(!(Oe&&!await Mt({title:y("vsSaveAsTitle"),message:y("vsOverwriteMsg",{path:f})}))){de.value=!0;try{await Qi(f,Y.content,{key:u,encoding:Y.encoding,hasBom:Y.hasBom,eol:Y.eol}),X("ok",y("vsSavedAs",{path:je(f)})),delete C[_],delete G[_],delete F[_],delete C[f],delete G[f],delete F[f],n.openTabs=n.openTabs.filter(pt=>pt!==_&&pt!==f),await os(f)}catch(pt){X("error",pt.message)}finally{de.value=!1}}}async function Zd(f,_){const Y=C[f];if(!(!Y||Y.binary)&&_&&!(Math.abs(_.mtimeMs-Y.mtime)<1)){if(Y.dirty){Y.conflict||(Y.conflict=!0);return}await ys(f,{force:!0}),X("info",y("vsReloadedExternal",{name:je(f)}))}}function ef(){me=fh((f,_)=>{n.openTabs.includes(f)&&Zd(f,_)}),Qe(()=>n.openTabs.slice(),f=>uh(I,f),{immediate:!0})}async function tf(){const f=n.activeTab,_=f?C[f]:void 0;!f||!_||!await Mt({title:y("vsConflictTitle"),message:y("vsConflictMsgReload",{name:je(f)})})||await ys(f,{force:!0})}function nf(){const f=n.activeTab;if(f){if(Wt(f)){X("error",y("remoteNoExternal"));return}nu(f)}}async function pa(f){if(pe(f)){tn.value=null;return}if(C[f]?.dirty){const Y=await Ar({title:y("vsUnsavedTitle"),message:y("vsUnsavedMsg"),choices:[{id:"save",text:y("vsCloseSave"),primary:!0},{id:"discard",text:y("vsCloseDiscard")},{id:"cancel",text:y("cancel")}]});if(Y==="save"){if(!await ws(f,{quiet:!0}))return}else if(Y!=="discard")return}delete C[f],delete G[f],delete F[f],Eo(f),Hi(e.slot,f),n.openTabs=n.openTabs.filter(Y=>Y!==f),n.activeTab===f&&(n.activeTab=n.openTabs[n.openTabs.length-1]??null),d()}async function sf(f){await ws(f,{quiet:!0})&&await pa(f)}async function Ti(f){const _=f.filter(Oe=>C[Oe]?.dirty),Y=Oe=>{delete C[Oe],delete G[Oe],delete F[Oe],Eo(Oe),Hi(e.slot,Oe),n.openTabs=n.openTabs.filter(pt=>pt!==Oe)};if(_.length>1){const Oe=await Ar({title:y("vsUnsavedTitle"),message:y("vsCloseManyMsg",{n:String(_.length)}),choices:[{id:"save",text:y("vsCloseSaveAll"),primary:!0},{id:"discard",text:y("vsCloseDiscardAll")},{id:"cancel",text:y("cancel")}]});if(Oe!=="save"&&Oe!=="discard")return;const pt=new Set;if(Oe==="save")for(const vt of _)await ws(vt,{quiet:!0})||pt.add(vt);for(const vt of f)Oe==="save"&&pt.has(vt)||Y(vt);n.activeTab&&!n.openTabs.includes(n.activeTab)&&(n.activeTab=n.openTabs[n.openTabs.length-1]??null),d();return}for(const Oe of f)await pa(Oe)}async function of(f){pe(f)||await Ti(n.openTabs.filter(_=>_!==f))}async function af(f){if(pe(f))return;const _=n.openTabs.indexOf(f);_<0||await Ti(n.openTabs.slice(_+1))}async function lf(){await Ti([...n.openTabs])}function rf(f){delete C[f],delete G[f],delete F[f],Eo(f),Hi(e.slot,f),n.openTabs=n.openTabs.filter(_=>_!==f),n.activeTab===f&&(n.activeTab=n.openTabs[n.openTabs.length-1]??null),d()}function cf(f,_){const Y=C[f];Y&&(C[_]=Y,delete C[f]);const Oe=$d(e.slot),pt=Oe.get(f);pt&&(Oe.delete(f),Oe.set(_,pt)),F[f]!==void 0&&(F[_]=F[f],delete F[f]),delete G[f],G[_]&&delete G[_],n.openTabs=n.openTabs.map(vt=>vt===f?_:vt),n.activeTab===f&&(n.activeTab=_),d()}const To=m(!1),uf=L(()=>({width:`calc(${Math.round(n.split*1e3)/10}% - 3px)`}));function Di(f){if(!To.value||!M.value)return;const _=M.value.getBoundingClientRect();if(_.width<=0)return;let Y=(f.clientX-_.left)/_.width;n.sidebarSide==="right"&&(Y=1-Y),n.split=Math.min(.85,Math.max(.15,Y))}function Fi(){To.value&&(To.value=!1,document.removeEventListener("mousemove",Di),document.removeEventListener("mouseup",Fi),document.body.style.userSelect="",document.body.style.cursor="",d())}function df(){To.value=!0,document.addEventListener("mousemove",Di),document.addEventListener("mouseup",Fi),document.body.style.userSelect="none",document.body.style.cursor="col-resize"}function ff(f){const _=f?.tagName;return _==="INPUT"||_==="TEXTAREA"||_==="SELECT"}function $r(f){if(!(f.ctrlKey||f.metaKey))return;const _=f.key.toLowerCase();if(_==="p"){if(ff(f.target))return;f.preventDefault(),Fs();return}if(_!=="s"){if(_==="w"){f.preventDefault(),tn.value?tn.value=null:n.activeTab&&pa(n.activeTab);return}if(_==="pagedown"||_==="pageup"){f.preventDefault(),pf(_==="pagedown"?1:-1);return}return}f.preventDefault(),f.shiftKey?Ei():Si()}function pf(f){const _=n.openTabs;if(_.length<2)return;const Y=n.activeTab?_.indexOf(n.activeTab):-1,Oe=((Y<0?0:Y+f)+_.length)%_.length;la(_[Oe])}function Sr(f){Ct.value.length>0&&(f.preventDefault(),f.returnValue="")}const va=m(null),Er=m(!1);let ha=null;function Tr(){const f=va.value;if(!f)return;f.classList.remove("compact");const Y=f.scrollWidth-f.clientWidth>1;f.classList.toggle("compact",Y),Er.value=Y}const vf=560,hf=680;let ma=null;function Dr(){const f=M.value?.clientWidth??0;f<=vf&&n.projectDir?Ne.value=!0:f>=hf&&(Ne.value=!1)}return ln(async()=>{M3(),va.value&&(ha=new ResizeObserver(()=>Tr()),ha.observe(va.value),Tr()),M.value&&(ma=new ResizeObserver(()=>Dr()),ma.observe(M.value),Dr()),await v();const f=A();for(const[Oe,pt]of Object.entries(f))n.openTabs.includes(Oe)&&(C[Oe]=pt);await _i(),n.activeTab&&!C[n.activeTab]&&ys(n.activeTab),i.value=!0,await Dt(),await re.value?.rebuild(),window.addEventListener("keydown",$r),window.addEventListener("beforeunload",Sr),window.addEventListener("beforeunload",d),ef();const _=`${u}:${n.projectDir??""}`;n.projectDir&&!Pc.has(_)&&(Pc.add(_),Ds());const Y=Mh();Y&&e.requestOpenProject(Y),e.projectRequest.value&&await Ps()}),Pt(()=>{ha?.disconnect(),ha=null,ma?.disconnect(),ma=null,window.removeEventListener("keydown",$r),window.removeEventListener("beforeunload",Sr),window.removeEventListener("beforeunload",d),document.removeEventListener("mousemove",Di),document.removeEventListener("mouseup",Fi),me?.(),me=null,dh(I),x({...C}),d()}),(f,_)=>(l(),r("div",{ref_key:"rootRef",ref:M,class:"vs-pane","data-theme":s(V),style:_t(H.value)},[o("div",{ref_key:"topbarRef",ref:va,class:te(["vs-topbar",{compact:Er.value}])},[o("span",{class:"vs-brand",title:s(y)("vsBrand")},[h(se,{class:"vs-topbar-ico",name:"code",size:14}),o("span",X3,a(s(y)("vsBrand")),1)],8,K3),_[19]||(_[19]=o("span",{class:"vs-sep"},null,-1)),o("button",{ref_key:"fileBtnRef",ref:et,class:te(["vs-btn vs-btn-menu",{open:s(lt)}]),title:s(y)("vsMenuFile"),onClick:ot},[h(se,{class:"vs-topbar-ico",name:"folder",size:13}),o("span",J3,a(s(y)("vsMenuFile")),1),_[16]||(_[16]=o("span",{class:"vs-caret"},null,-1))],10,Y3),_[20]||(_[20]=o("span",{class:"vs-sep"},null,-1)),o("button",{ref_key:"recentBtnRef",ref:$n,class:te(["vs-btn vs-btn-menu vs-recent-btn",{open:s(Jn)}]),title:En.value,onClick:Bn},[h(se,{class:"vs-topbar-ico",name:"clock",size:13}),o("span",Z3,a(Ts.value),1),_[17]||(_[17]=o("span",{class:"vs-caret"},null,-1))],10,Q3),_[21]||(_[21]=o("span",{class:"vs-sep"},null,-1)),o("span",{class:"vs-project-path",title:s(n).projectDir??s(y)("vsNoProject")},a(c.value),9,eT),_[22]||(_[22]=o("span",{class:"vs-spacer"},null,-1)),o("button",{class:"vs-quickopen-trigger",title:s(y)("vsQuickOpenPlaceholder"),disabled:!s(n).projectDir,onClick:Fs},[h(se,{name:"search",size:13}),o("span",nT,a(In.value?s(y)("vsSearchIndexing"):s(y)("vsQuickOpenPlaceholder")),1),_[18]||(_[18]=o("span",{class:"vs-quickopen-kbd"},"Ctrl+P",-1))],8,tT)],2),o("div",{class:te(["vs-body",{"right-folded":Ne.value,"side-right":s(n).sidebarSide==="right"}])},[o("div",{class:"vs-left",style:_t(uf.value)},[o("div",{class:te(["vs-activity",{btm:s(n).activityBar.position==="bottom"}]),onContextmenu:be(Vd,["prevent"])},[(l(!0),r(oe,null,Ae(E.value,Y=>(l(),r("button",{key:Y.id,class:te(["vs-act-btn",{active:ye.value===Y.id}]),disabled:Y.disabled,title:Y.title,onClick:Oe=>W(Y.id),onContextmenu:be(Oe=>fa(Y,Oe),["prevent","stop"])},[s(Oo)(Y.icon??"")?(l(),Xe(se,{key:0,name:Y.icon??"",size:17},null,8,["name"])):(l(),r("span",oT,a(Y.title.slice(0,1)),1))],42,sT))),128))],34),o("div",aT,[kt(h(n8,{ref_key:"treeRef",ref:re,root:s(n).projectDir,"active-path":s(n).activeTab,onOpenFile:os,onFileRemoved:rf,onFileRenamed:cf,onProjectMissing:yn,onRemoveProject:Qn},null,8,["root","active-path"]),[[ho,ye.value==="files"]]),ye.value==="search"?(l(),Xe(b3,{key:0,"project-dir":s(n).projectDir||"",onOpen:z},null,8,["project-dir"])):P("",!0),kt(h(mE,{class:"vs-git-view",onOpenDiff:Zs},null,512),[[ho,ye.value==="git"]]),ye.value==="git"&&!J.value?(l(),r("div",iT,a(s(y)("vsGitNoRepo")),1)):P("",!0),ua.value?(l(),r("div",{key:2,ref_key:"extHostRef",ref:ca,class:"vs-ext-view"},null,512)):P("",!0)])],4),o("div",{class:te(["vs-split",{dragging:To.value}]),role:"separator","aria-orientation":"vertical",onMousedown:be(df,["prevent"])},null,34),o("div",lT,[h(p8,{tabs:Ye.value,active:st.value,onSelect:la,onClose:pa,onSave:ws,onCloseSave:sf,onCloseOthers:of,onCloseRight:af,onCloseAll:lf},null,8,["tabs","active"]),o("div",rT,[tn.value?(l(),r("div",cT,[h(Uo,{lines:tn.value.lines,empty:s(y)("gitDiffEmpty")},null,8,["lines","empty"])])):s(n).activeTab?Ie.value?(l(),r("div",vT,[_[23]||(_[23]=o("span",{class:"vs-loading-spin","aria-hidden":"true"},null,-1)),o("span",null,a(s(y)("vsLoading")),1)])):rt.value?(l(),r("div",hT,a(rt.value),1)):Ce.value?.binary?(l(),r("div",mT,[o("div",gT,a(s(y)("vsBinaryHint")),1),o("button",{class:"vs-btn",onClick:nf},a(s(y)("vsOpenExternal")),1)])):(l(),Xe(G8,{key:5,ref_key:"editorRef",ref:Rn,path:s(n).activeTab,slot:s(e).slot,"initial-content":qe.value,"initial-view":Le.value,"doc-rev":ce.value,readonly:yt.value,dark:s(V)==="dark",onChange:Xd,onCursor:Yd,onView:Jd,onContextmenu:Re},null,8,["path","slot","initial-content","initial-view","doc-rev","readonly","dark"])):(l(),r("div",uT,[h(se,{class:"vs-empty-ico",name:"code",size:44}),o("div",dT,a(s(y)("vsEmptyTitle")),1),o("div",fT,a(s(y)("vsEmptyHint")),1),o("div",pT,[o("button",{class:"vs-btn",onClick:Ht},a(s(y)("vsOpenFolder")),1),o("button",{class:"vs-btn",onClick:_[0]||(_[0]=Y=>Tn("git"))},a(s(y)("menuCloneGit")),1)])]))]),o("div",yT,[J.value?(l(),r("button",{key:0,class:"vs-status-seg vs-status-btn",title:s(n).projectDir??"",onClick:_[1]||(_[1]=Y=>W("git"))},[h(se,{name:"git",size:11}),ue(" "+a(J.value),1)],8,wT)):P("",!0),yt.value?(l(),r("span",bT,a(s(y)("vsReadonly")),1)):P("",!0),ut.value?(l(),r("button",{key:2,class:"vs-status-conflict",onClick:tf},a(s(y)("vsConflictBadge")),1)):P("",!0),Kd.value?(l(),r("button",{key:3,ref_key:"extMenuBtnRef",ref:xr,class:te(["vs-status-seg vs-status-btn vs-status-ext",{open:s($i)}]),title:s(y)("vsMenuExtensions"),onClick:Gd},[h(se,{name:"puzzle",size:11}),ue(" "+a(s(y)("vsMenuExtensions")),1)],10,_T)):P("",!0),_[24]||(_[24]=o("span",{class:"vs-status-spacer"},null,-1)),o("span",kT,"Ln "+a(ee.line)+", Col "+a(ee.col),1),o("button",{class:"vs-status-seg vs-status-btn",disabled:!s(n).activeTab,onClick:q},a(Te.value),9,xT),o("button",{class:"vs-status-seg vs-status-btn",disabled:!s(n).activeTab,onClick:On},a(Q.value),9,CT),o("span",$T,a(it.value),1)])])],2),s(lt)?(l(),Xe(Qt,{key:0,items:Ln.value,x:s(xn),y:s(Cn),onClose:_[2]||(_[2]=Y=>lt.value=!1)},null,8,["items","x","y"])):P("",!0),s($i)?(l(),Xe(Qt,{key:1,items:qd.value,x:s(Ud),y:s(Hd),placement:"top",onClose:_[3]||(_[3]=Y=>$i.value=!1)},null,8,["items","x","y"])):P("",!0),s(Jn)?(l(),Xe(Qt,{key:2,items:cn.value,x:s(mn),y:s(Sn),onClose:_[4]||(_[4]=Y=>Jn.value=!1)},null,8,["items","x","y"])):P("",!0),Pe.value?(l(),r("div",{key:3,class:"vs-quickopen-backdrop",onMousedown:be(es,["self"])},[o("div",{class:"vs-quickopen",onMousedown:_[9]||(_[9]=be(()=>{},["stop"]))},[kt(o("input",{ref_key:"searchInputRef",ref:Be,"onUpdate:modelValue":_[5]||(_[5]=Y=>He.value=Y),class:"vs-quickopen-input",placeholder:In.value?s(y)("vsSearchIndexing"):s(y)("vsQuickOpenPlaceholder"),onInput:Zn,onKeydown:[_[6]||(_[6]=bt(be(Y=>Rs(1),["prevent"]),["down"])),_[7]||(_[7]=bt(be(Y=>Rs(-1),["prevent"]),["up"])),_[8]||(_[8]=bt(be(Y=>Js(),["prevent"]),["enter"])),bt(be(es,["prevent"]),["esc"])]},null,40,ST),[[Lt,He.value]]),o("div",ET,[un.value.length>0?(l(),r(oe,{key:0},[(l(!0),r(oe,null,Ae(un.value,(Y,Oe)=>(l(),r("div",{key:Y.abs,class:te(["vs-search-row",{active:Oe===Ge.value}]),title:Y.abs,onMousedown:be(pt=>Js(Oe),["prevent"]),onMouseenter:pt=>Ge.value=Oe},[o("span",DT,a(Y.name),1),o("span",FT,a(Y.dir),1)],42,TT))),128)),Fn.value?(l(),r("div",RT,a(s(y)("vsSearchTruncated")),1)):P("",!0)],64)):He.value.trim()&&!In.value?(l(),r("div",NT,a(s(y)("vsSearchNoResult")),1)):P("",!0)])],32)],32)):P("",!0),s(O)?(l(),Xe(Qt,{key:4,items:De.value,x:s(T),y:s(K),onClose:_[10]||(_[10]=Y=>O.value=!1)},null,8,["items","x","y"])):P("",!0),s(ie)?(l(),Xe(Qt,{key:5,items:Gt.value,x:s(ct),y:s(wt),onClose:_[11]||(_[11]=Y=>ie.value=!1)},null,8,["items","x","y"])):P("",!0),s(k)?(l(),Xe(Qt,{key:6,items:R.value,x:s($e),y:s(fe),onClose:_[12]||(_[12]=Y=>k.value=!1)},null,8,["items","x","y"])):P("",!0),At.value?(l(),Xe(Qt,{key:7,items:Ci.value,x:Tt.value,y:dt.value,onClose:_[13]||(_[13]=Y=>At.value=!1)},null,8,["items","x","y"])):P("",!0),h(Gc),h(ti,{modelValue:B.value,"onUpdate:modelValue":_[14]||(_[14]=Y=>B.value=Y),"initial-dir":ve.value,onConfirm:As},null,8,["modelValue","initial-dir"]),h(ti,{modelValue:_e.value,"onUpdate:modelValue":_[15]||(_[15]=Y=>_e.value=Y),mode:"file","initial-dir":ke.value,"initial-name":le.value,onConfirm:Qd},null,8,["modelValue","initial-dir","initial-name"])],12,q3))}}),AT=xt(PT,[["__scopeId","data-v-8747da63"]]),MT={class:"fw-term-headicon"},OT={class:"fw-term-tag"},LT=["title"],BT={class:"fw-term-note"},IT=["title"],jT=["title"],VT={key:0,class:"fw-term-searchbar"},zT=["placeholder","onKeydown"],UT=["title"],HT=["title"],WT=["title"],GT=["title"],qT={class:"fw-term-footer"},KT=["title","disabled"],XT=["title","disabled"],YT=["title"],JT=["title"],QT=["title"],ZT={class:"fw-term-shellhint"},eD=["title"],tD=["title"],Xi=320,Yi=240,Ac=10,Mc=24,nD=ht({__name:"TerminalWindow",props:{tab:{}},emits:["close"],setup(t,{emit:e}){const n=t,i=e,{t:c}=Bt(),u=m(680),v=m(460),d=m(0),p=m(0),w=m(null);let b=!1;const x=m(null),A=L(()=>{const ze=n.tab.cwd?.trim();return ze?ze.replace(/[\\/]$/,"").split(/[\\/]/).pop()??"":""}),I=L(()=>n.tab.shell==="powershell"?"PS":"cmd"),M=L(()=>!!n.tab.ssh&&!n.tab.sshDegraded),V=L(()=>!!n.tab.ssh),H=L(()=>{const ze=n.tab.ssh;return ze?ze.remote&&ze.remote!=="/"?`${ze.label} · ${ze.remote}`:ze.label:""}),C=L(()=>M.value?H.value:A.value||n.tab.cwd||c("terminalTitle")),Z=L(()=>M.value?H.value:`${I.value} · ${A.value||n.tab.cwd||c("terminal")}`);function G(ze){return Math.min(Math.max(0,ze),Math.max(0,window.innerWidth-u.value))}function F(ze){return Math.min(Math.max(0,ze),Math.max(0,window.innerHeight-v.value))}function de(ze){u.value=Math.max(Xi,ze.w),v.value=Math.max(Yi,ze.h),d.value=G(ze.x),p.value=F(ze.y)}function B(){wv(n.tab.id,{x:d.value,y:p.value,w:u.value,h:v.value})}const ve=L(()=>({position:"fixed",left:`${d.value}px`,top:`${p.value}px`,width:`${u.value}px`,height:`${v.value}px`}));let _e=0;Qe([d,p,u,v],()=>{b&&(window.clearTimeout(_e),_e=window.setTimeout(B,250))});let ke=!1,le=0,re=0;function Ee(ze){ze.target.closest(".fw-term-headclose, .fw-term-headmin")||(b=!0,ke=!0,le=ze.clientX-d.value,re=ze.clientY-p.value,document.body.style.userSelect="none",document.addEventListener("mousemove",Ve),document.addEventListener("mouseup",ye))}function Ve(ze){if(!ke)return;const Je=w.value,et=Je?.offsetWidth??u.value,lt=Je?.offsetHeight??v.value;d.value=Math.min(Math.max(0,ze.clientX-le),window.innerWidth-et),p.value=Math.min(Math.max(0,ze.clientY-re),Math.max(0,window.innerHeight-lt))}function ye(){ke&&(ke=!1,document.body.style.userSelect="",document.removeEventListener("mousemove",Ve),document.removeEventListener("mouseup",ye),B())}Pt(ye);let Ne=!1,W=0,J=0,z=0,ee=0;function me(ze){b=!0,Ne=!0,W=ze.clientX,J=ze.clientY,z=u.value,ee=v.value,document.body.style.userSelect="none",document.addEventListener("mousemove",je),document.addEventListener("mouseup",Ke)}function je(ze){if(!Ne)return;const Je=Math.max(Xi,window.innerWidth-d.value-4),et=Math.max(Yi,window.innerHeight-p.value-4);u.value=Math.min(Math.max(Xi,z+(ze.clientX-W)),Je),v.value=Math.min(Math.max(Yi,ee+(ze.clientY-J)),et)}function Ke(){Ne&&(Ne=!1,document.body.style.userSelect="",document.removeEventListener("mousemove",je),document.removeEventListener("mouseup",Ke),B())}Pt(Ke);function Ze(){b=!0,u.value=Math.min(680,window.innerWidth-12),v.value=Math.min(460,window.innerHeight-12),B()}let ge=null,we=null,Ye=null,st=null,pe=null;function Ce(ze){const Je=ze??x.value,et=getComputedStyle(Je||document.documentElement),lt=(xn,Cn)=>(et.getPropertyValue(xn)||Cn).trim();return{background:lt("--base","#1e1e2e"),foreground:lt("--text","#cdd6f4"),cursor:lt("--text","#cdd6f4"),cursorAccent:lt("--base","#1e1e2e"),selectionBackground:lt("--wt-sel-bg","rgba(137, 180, 250, 0.35)"),black:lt("--wt-term-black","#11111b"),red:lt("--red","#f38ba8"),green:lt("--green","#a6e3a1"),yellow:lt("--yellow","#f9e2af"),blue:lt("--blue","#89b4fa"),magenta:lt("--mauve","#cba6f7"),cyan:lt("--teal","#94e2d5"),white:lt("--wt-term-white","#bac2de"),brightBlack:lt("--wt-term-brightblack","#585b70"),brightRed:lt("--red","#f38ba8"),brightGreen:lt("--green","#a6e3a1"),brightYellow:lt("--yellow","#f9e2af"),brightBlue:lt("--sapphire","#74c7ec"),brightMagenta:lt("--mauve","#cba6f7"),brightCyan:lt("--teal","#94e2d5"),brightWhite:lt("--wt-term-brightwhite","#cdd6f4")}}function qe(ze,Je){const et=x.value;return(getComputedStyle(et||document.documentElement).getPropertyValue(ze)||Je).trim()}function ce(){const ze=x.value;if(!ze||ge)return;const Je=$v(n.tab.id);st=document.createElement("div"),st.className="fw-term-xterm",ze.appendChild(st);const et=new Uf({cursorBlink:!0,fontSize:Q.value,fontFamily:'Consolas, "Cascadia Code", "Courier New", monospace',scrollback:1e4,theme:Ce(st),allowTransparency:!1,allowProposedApi:!0});ge=et,we=new Gf,et.loadAddon(we),et.loadAddon(new Hf),Ye=new Wf,et.loadAddon(Ye),et.attachCustomKeyEventHandler(De),et.open(st),et.write(n.tab.output),et.onData(lt=>hv(n.tab.session,lt)),Hr(n.tab.id,lt=>ge?.write(lt)),Dt(()=>{Ie(),Je&&ge?.focus()})}function Ie(){try{we?.fit()}catch{}rt()}function rt(){ge&&(ge.cols<2||ge.rows<2||mv(n.tab.session,ge.cols,ge.rows))}function yt(){ge?.focus()}function ut(ze){ze.target?.closest("button, input, textarea, .fw-term-resizer, .fw-term-headmin, .fw-term-headclose")||ge?.focus()}const it=m(!1),Le=m(""),U=m(!1),N=m(null),Q=L(()=>Ue.termFontSize);function Te(){return{caseSensitive:U.value,incremental:!0,decorations:{matchBackground:qe("--wt-search-match-bg","rgba(166, 173, 200, 0.4)"),matchBorder:qe("--wt-search-match-bg","rgba(166, 173, 200, 0)"),activeMatchBackground:qe("--wt-search-active-bg","rgba(166, 227, 161, 0.6)"),activeMatchBorder:qe("--wt-search-active-border","#a6e3a1"),matchOverviewRuler:qe("--wt-search-active-border","#a6e3a1"),activeMatchColorOverviewRuler:qe("--wt-search-active-border","#a6e3a1")}}}function O(ze){const Je=Le.value.trim();if(!Je){Ye?.clearDecorations();return}ze?Ye?.findNext(Je,Te()):Ye?.findPrevious(Je,Te())}function T(){it.value=!0,Dt(()=>{N.value?.focus(),N.value?.select()}),O(!0)}function K(){it.value=!1,Le.value="",Ye?.clearDecorations(),yt()}Qe([Le,U],()=>{it.value&&O(!0)});function S(ze){const Je=Math.min(Math.max(Ac,Math.round(ze)),Mc);Je!==Ue.termFontSize&&(Ue.termFontSize=Je,Hn(),ge&&(ge.options.fontSize=Je),Dt(Ie))}async function q(){try{const ze=await navigator.clipboard.readText();ze&&ge?.paste(ze)}catch{}}function De(ze){if(ze.type!=="keydown"||!ge)return!0;const Je=ze.ctrlKey||ze.metaKey,et=ze.key.toLowerCase();if(Je&&et==="f")return ze.preventDefault(),T(),!1;if(Je&&et==="c"){const lt=ge.getSelection();return lt?(ze.preventDefault(),navigator.clipboard.writeText(lt).catch(()=>{}),ge.clearSelection(),!1):!0}return Je&&(et==="v"||et==="y")?(ze.preventDefault(),q(),!1):(Je||ze.altKey)&&(et==="="||et==="+"||et==="-"||et==="_")?(ze.preventDefault(),S(Q.value+(et==="-"||et==="_"?-1:1)),!1):Je&&et==="0"?(ze.preventDefault(),S(13),!1):!0}function ie(){n.tab.shell=n.tab.shell==="powershell"?"cmd":"powershell",Kr(n.tab,Fe.key),Dt(Ie)}function ct(){Kr(n.tab,Fe.key),Dt(Ie)}function wt(){cs.value?X("ok",c("terminalAdminOn")):X("info",c("terminalAdminHint"))}function Ot(){n.tab.output="",ge?.clear()}function On(){Qp(n.tab.id)}Qe(()=>ol(n.tab.id),ze=>{ze||Dt(()=>{Ie(),ge?.focus()})});let Gt;return typeof MutationObserver<"u"&&(Gt=new MutationObserver(()=>{ge&&st&&(ge.options.theme=Ce(st))}),Gt.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]})),Pt(()=>Gt?.disconnect()),ln(()=>{const ze=yv(n.tab.id);de(ze??xv()),ru(),ce(),x.value&&typeof ResizeObserver<"u"&&(pe=new ResizeObserver(()=>Ie()),pe.observe(x.value))}),Pt(()=>{pe?.disconnect(),pe=null,gu(n.tab.session),Hr(n.tab.id,null),ge?.dispose(),ge=null,we=null,Ye=null,st?.remove(),st=null}),(ze,Je)=>(l(),r("div",{ref_key:"rootEl",ref:w,class:"fw-term-window",style:_t(ve.value),onMousedown:ut},[o("div",{class:"fw-term-head",onMousedown:be(Ee,["prevent"])},[o("span",MT,[h(se,{name:"terminal",size:13})]),o("span",OT,a(s(c)("terminal"))+" #"+a(t.tab.name),1),M.value?(l(),r("span",{key:0,class:"fw-term-sshbadge",title:s(c)("termSshBadge")},"SSH",8,LT)):P("",!0),o("span",BT,a(C.value),1),o("span",{class:"fw-term-headmin",title:s(c)("terminalMinimize"),onClick:be(On,["stop"])},"–",8,IT),o("span",{class:"fw-term-headclose",title:s(c)("terminalCloseTitle"),onClick:Je[0]||(Je[0]=be(et=>i("close"),["stop"]))},"✕",8,jT)],32),it.value?(l(),r("div",VT,[kt(o("input",{ref_key:"searchInputEl",ref:N,"onUpdate:modelValue":Je[1]||(Je[1]=et=>Le.value=et),class:"fw-term-search-input",placeholder:s(c)("termSearchPlaceholder"),spellcheck:"false",onKeydown:[Je[2]||(Je[2]=bt(be(et=>O(!0),["prevent"]),["enter"])),Je[3]||(Je[3]=bt(be(et=>O(!1),["shift","prevent"]),["enter"])),bt(be(K,["prevent"]),["esc"])]},null,40,zT),[[Lt,Le.value]]),o("button",{class:te(["fw-term-search-case",{on:U.value}]),title:s(c)("termSearchCase"),onClick:Je[4]||(Je[4]=et=>U.value=!U.value)},"Aa",10,UT),o("button",{class:"fw-term-search-btn",title:s(c)("termSearchPrev"),onClick:Je[5]||(Je[5]=et=>O(!1))},"▲",8,HT),o("button",{class:"fw-term-search-btn",title:s(c)("termSearchNext"),onClick:Je[6]||(Je[6]=et=>O(!0))},"▼",8,WT),o("button",{class:"fw-term-search-btn fw-term-search-close",title:s(c)("termSearchClose"),onClick:K},"✕",8,GT)])):P("",!0),o("div",{ref_key:"outEl",ref:x,class:"fw-term-out","box-":"double",onClick:yt},null,512),o("div",qT,[o("button",{class:"fw-term-btn",onClick:Ot},a(s(c)("terminalClear")),1),o("button",{class:"fw-term-btn",title:s(c)("termFontSmaller"),disabled:Q.value<=Ac,onClick:Je[7]||(Je[7]=et=>S(Q.value-1))},"A−",8,KT),o("button",{class:"fw-term-btn",title:s(c)("termFontLarger"),disabled:Q.value>=Mc,onClick:Je[8]||(Je[8]=et=>S(Q.value+1))},"A+",8,XT),V.value?(l(),r("button",{key:1,class:"fw-term-btn",title:s(c)("termSshReconnectTitle"),onClick:ct},a(s(c)("termSshReconnect")),9,JT)):(l(),r("button",{key:0,class:"fw-term-btn",title:s(c)("terminalShellSwitch"),onClick:ie},a(I.value),9,YT)),s(cs)!==null&&!M.value?(l(),r("button",{key:2,class:te(["fw-term-admin",{on:s(cs)}]),title:s(cs)?s(c)("terminalAdminOn"):s(c)("terminalAdminOff"),onClick:wt},[h(se,{name:"shield",size:11}),o("span",null,a(s(cs)?s(c)("terminalAdmin"):s(c)("terminalAdminNormal")),1)],10,QT)):P("",!0),Je[9]||(Je[9]=o("div",{class:"fw-spacer"},null,-1)),o("span",ZT,a(Z.value),1),o("span",{class:"fw-term-kbdhint",title:s(c)("termCopyHint")},"Ctrl+C 复制 · Ctrl+V 粘贴 · Ctrl+F 搜索",8,eD)]),o("div",{class:"fw-term-resizer",title:s(c)("terminalResizeTitle"),onMousedown:be(me,["prevent"]),onDblclick:be(Ze,["stop"])},null,40,tD)],36))}}),sD=xt(nD,[["__scopeId","data-v-6d3078d7"]]),oD=["title"],aD={class:"fw-term-card-head"},iD={class:"fw-term-card-ico"},lD={class:"fw-term-card-title"},rD=["title"],cD=["title"],uD=["title"],dD={class:"fw-term-card-body"},fD=ht({__name:"TerminalMiniWindow",props:{tab:{}},setup(t){const e=t,n=L(()=>{if(e.tab.ssh)return e.tab.ssh.label;const d=e.tab.cwd?.trim();if(d){const p=d.replace(/[\\/]$/,"").split(/[\\/]/).pop();if(p)return p}return y("terminal")}),i=L(()=>{const d=e.tab.ssh;return d?d.remote&&d.remote!=="/"?`${d.label} · ${d.remote}`:d.label:e.tab.cwd||y("terminal")}),c=L(()=>{const d=tv(e.tab.id);if(!d)return"";const p=d.replace(/\r/g,"").split(`
`);let w=p.length;for(;w>0&&!p[w-1].trim();)w--;return p.slice(Math.max(0,w-5),w).join(`
`)});function u(){Gs.value=e.tab.id,Kl(e.tab.id)}function v(){yu(e.tab.id),St.value.length||(Fe.termOpen=!1)}return(d,p)=>(l(),r("div",{class:te(["fw-term-card",{active:t.tab.id===s(Gs)}]),title:i.value,onClick:u},[o("div",aD,[o("span",iD,[h(se,{name:"terminal",size:12})]),o("span",lD,a(n.value),1),t.tab.ssh?(l(),r("span",{key:0,class:"fw-term-card-ssh",title:s(y)("termSshBadge")},"SSH",8,rD)):s(cs)?(l(),r("span",{key:1,class:"fw-term-card-admin",title:s(y)("terminalAdminOn")},[h(se,{name:"shield",size:10})],8,cD)):P("",!0),o("span",{class:"fw-term-card-close",title:s(y)("terminalCloseTitle"),onClick:be(v,["stop"])},"✕",8,uD)]),o("pre",dD,a(c.value),1)],10,oD))}}),pD=xt(fD,[["__scopeId","data-v-cfbf612f"]]),vD=["title"],hD={key:0,class:"dsh-term-dock-count"},mD=["title"],gD={class:"dsh-term-dock-listhead"},yD=["title"],wD=9,Sa=36,Yt=8,Oc=4,Ea=48,bD=ht({__name:"TerminalHost",setup(t){function e(){return document.documentElement.getAttribute("data-theme")==="light"?"light":"dark"}function n(){const z=document.getElementById("dsh-term-root");z&&z.setAttribute("data-term-theme",e())}n();let i;typeof MutationObserver<"u"&&(i=new MutationObserver(n),i.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]})),Pt(()=>i?.disconnect());const c=L(()=>St.value.filter(z=>ol(z.id))),u=m(null),v=m(!1),d=m(!1),p=L(()=>v.value),w=L(()=>{const z=bn.value;return!!z&&z.x<340}),b=L(()=>{const z=bn.value;return!!z&&z.y>window.innerHeight/2}),x=L(()=>{const z=bn.value;return z?{left:`${z.x}px`,top:`${z.y}px`}:void 0}),A=m(null),I=m(360);function M(){const z=u.value?.getBoundingClientRect();if(!z)return;const ee=b.value?z.bottom-Yt:window.innerHeight-z.top-Yt;I.value=Math.max(180,Math.min(Math.round(ee)-4,Math.round(window.innerHeight*.72)))}function V(z,ee){const me=Math.max(Yt,window.innerWidth-Sa-Yt),je=Math.max(Yt,window.innerHeight-Sa-Yt);return{x:Math.min(Math.max(Yt,z),me),y:Math.min(Math.max(Yt,ee),je)}}function H(z,ee){const me=V(z,ee),je=Math.max(Yt,window.innerWidth-Sa-Yt),Ke=Math.max(Yt,window.innerHeight-Sa-Yt);let Ze=me.x,ge=me.y;return me.x-Yt<=Ea?Ze=Yt:je-me.x<=Ea&&(Ze=je),me.y-Yt<=Ea?ge=Yt:Ke-me.y<=Ea&&(ge=Ke),{x:Ze,y:ge}}let C=null,Z=!1;function G(z){if(z.button!==0||!u.value)return;const ee=u.value.getBoundingClientRect();bn.value||(bn.value={x:ee.left,y:ee.top}),C={pid:z.pointerId,fromX:z.clientX,fromY:z.clientY,baseX:bn.value.x,baseY:bn.value.y,moved:!1},z.currentTarget.setPointerCapture(z.pointerId)}function F(z){if(!C||z.pointerId!==C.pid)return;const ee=z.clientX-C.fromX,me=z.clientY-C.fromY;!C.moved&&Math.abs(ee)<Oc&&Math.abs(me)<Oc||(C.moved=!0,d.value=!0,bn.value=V(C.baseX+ee,C.baseY+me))}function de(z){if(!C||z.pointerId!==C.pid)return;Z=C.moved;const ee=C.moved;if(C=null,d.value=!1,ee){const me=bn.value;me&&(bn.value=H(me.x,me.y))}}function B(){if(Z){Z=!1;return}v.value=!v.value}const ve=m(!1),_e=m({x:0,y:0});function ke(z){v.value=!1,_e.value={x:z.clientX,y:z.clientY},ve.value=!0}const le=L(()=>{const z=c.value.map(ee=>({label:re(ee),icon:"terminal",onClick:()=>{Gs.value=ee.id,Kl(ee.id)},trailing:{icon:"close",title:y("terminalCloseTitle"),onClick:()=>void Ee(ee.id)}}));return z.length&&z.push({separator:!0}),z.push({label:y("terminalDockCloseAll"),icon:"close",onClick:()=>void Ve()}),z});function re(z){if(z.ssh)return z.ssh.label;const ee=z.cwd?.trim();if(ee){const me=ee.replace(/[\\/]$/,"").split(/[\\/]/).pop();if(me)return me}return y("terminal")}async function Ee(z){Jr(z),St.value.length||(Fe.termOpen=!1)}async function Ve(){v.value=!1,await gv(),Fe.termOpen=!1}function ye(z){if(!p.value)return;const ee=u.value,me=z.target;ee&&me&&ee.contains(me)||(v.value=!1)}function Ne(){const z=bn.value;z&&(bn.value=V(z.x,z.y)),Dt(M)}function W(z=!1){if(St.value.length>=wD)return;const ee=Fe.termRequestSsh,me=ee?"":Fe.termRequestCwd||Fe.root||Fe.explorerPath||"",je=Fe.termRequestCmd;Fe.termRequestCwd="",Fe.termRequestCmd="",Fe.termRequestSsh=null,Cv(Fe.key,{cwd:me,initCmd:ee?void 0:je||void 0,fallbackCmd:ee&&je||void 0,shell:Ue.termShell,ssh:ee??void 0,focus:z})}function J(z){Jr(z),St.value.length===0&&(Fe.termOpen=!1)}return Qe(p,z=>{z&&Dt(M)}),Qe(()=>c.value.length,z=>{z||(v.value=!1)}),Qe(nr,()=>{Fe.termOpen||(Fe.termOpen=!0),W(!0)}),Qe(()=>Fe.termOpen,z=>{z&&St.value.length===0&&W(!0)}),ln(()=>{ru(),window.addEventListener("resize",Ne),document.addEventListener("pointerdown",ye,!0),Dt(M),Fe.termOpen&&St.value.length===0&&W(!1)}),Pt(()=>{window.removeEventListener("resize",Ne),document.removeEventListener("pointerdown",ye,!0)}),(z,ee)=>(l(),r(oe,null,[(l(!0),r(oe,null,Ae(s(St),me=>kt((l(),Xe(sD,{key:me.id,tab:me,onClose:je=>J(me.id)},null,8,["tab","onClose"])),[[ho,s(Fe).termOpen&&!s(ol)(me.id)]])),128)),s(Fe).termOpen&&c.value.length?(l(),r("div",{key:0,ref_key:"dockRef",ref:u,class:te(["dsh-term-dock",{"is-floating":!!s(bn),"is-dragging":d.value,"is-flip":w.value,"is-bottom":b.value}]),style:_t(x.value)},[o("div",{class:"dsh-term-dock-btn",title:s(y)("terminalDockDragTitle"),onClick:B,onContextmenu:be(ke,["prevent"]),onPointerdown:G,onPointermove:F,onPointerup:de,onPointercancel:de},[h(se,{name:"terminal",size:15}),c.value.length>1?(l(),r("span",hD,a(c.value.length),1)):P("",!0),s(cs)?(l(),r("span",{key:1,class:"dsh-term-dock-dot",title:s(y)("terminalAdminOn")},null,8,mD)):P("",!0)],40,vD),p.value&&!d.value?(l(),r("div",{key:0,ref_key:"listRef",ref:A,class:"dsh-term-dock-list",style:_t({maxHeight:`${I.value}px`})},[o("div",gD,a(s(y)("terminalDockSessions")),1),(l(!0),r(oe,null,Ae(c.value,me=>(l(),Xe(pD,{key:me.id,tab:me},null,8,["tab"]))),128)),o("button",{class:"dsh-term-dock-new",title:s(y)("terminalNew"),onClick:ee[0]||(ee[0]=be(me=>W(!0),["stop"]))},"＋ "+a(s(y)("terminalNew")),9,yD)],4)):P("",!0)],6)):P("",!0),ve.value?(l(),Xe(Qt,{key:1,items:le.value,x:_e.value.x,y:_e.value.y,onClose:ee[1]||(ee[1]=me=>ve.value=!1)},null,8,["items","x","y"])):P("",!0)],64))}}),_D=xt(bD,[["__scopeId","data-v-6b6a1886"]]),kD=/[<>:"|?*\u0000-\u001f]/g,Lc=120;function xD(t){let e=(t??"").trim().replace(/\\/g,"/");return!e||e.includes("/")||(e=e.replace(kD,"_").replace(/[. ]+$/,""),!e||e==="."||e==="..")?null:(e.length>Lc&&(e=e.slice(0,Lc).replace(/[. ]+$/,"")),e||null)}function Ji(t){let e=(t??"").trim().replace(/\\/g,"/");if(!e)return"";const n=/^[^/\s]+@[^/:\s]+:(.*)$/.exec(e);n?e=n[1]:e=e.replace(/^[a-zA-Z][a-zA-Z0-9+.-]*:\/\/[^/]*/,""),e=e.split("?")[0].split("#")[0],e=e.replace(/\/+$/,"");const c=(e.split("/").filter(Boolean).pop()??"").replace(/\.git$/i,"");return xD(c)??""}const Bc="__new__";function Bd(t){const{t:e}=Bt(),n=m({url:"",dir:qt.dir,name:"",shallow:!1,revision:"",accountId:""}),i=m(!1),c=m(!1),u=m(""),v=m(0),d=m(!1);let p=0,w=0;function b(ye,Ne){const W=(ye??"").trim();if(!W)return"";const J=W.includes("\\")?"\\":"/";return`${W.replace(/[\\/]+$/,"")}${J}${Ne}`}const x=L(()=>{const ye=n.value.name.trim()||Ji(n.value.url);return ye?b(n.value.dir,ye):""}),A=L(()=>!!n.value.url.trim()&&!!n.value.dir.trim()&&!!x.value);Qe(()=>n.value.url,ye=>{i.value||(n.value.name=Ji(ye))}),Qe(()=>n.value.name,(ye,Ne)=>{ye!==Ji(n.value.url)&&Ne!==void 0&&(i.value=!0)});const I=L(()=>Pn.value.filter(ye=>ye.kind===t)),M=L(()=>I.value.find(ye=>ye.id===n.value.accountId)??null),V=m(null);let H=0;async function C(){const ye=n.value.url.trim();if(!ye||n.value.accountId){V.value=null;return}const Ne=await iu(t,ye).catch(()=>null);V.value=Ne?.account??null}Qe(()=>n.value.url,()=>{H&&window.clearTimeout(H),H=window.setTimeout(()=>void C(),400)});const Z=L(()=>n.value.accountId?M.value:V.value),G=L(()=>n.value.dir.trim().startsWith("ssh://"));let F=[];const de=m(!1);function B(){F=Pn.value.map(ye=>ye.id),de.value=!0,hr({kind:t,url:n.value.url.trim()})}function ve(ye){const Ne=ye.target,W=Ne.value;if(W===Bc){Ne.value=n.value.accountId,B();return}n.value.accountId=W}Qe(()=>kn.open,async ye=>{if(ye||!de.value)return;de.value=!1,await co();const Ne=Pn.value.find(W=>W.kind===t&&!F.includes(W.id));Ne&&(n.value.accountId=Ne.id)}),Qe(()=>qt.open,ye=>{ye&&(n.value={url:"",dir:qt.dir,name:"",shallow:!1,revision:"",accountId:""},i.value=!1,u.value="",v.value=0,c.value=!1,V.value=null,co())},{immediate:!0});function _e(ye){n.value.dir=ye}function ke(ye){ye||c.value||fc()}function le(){v.value=Math.round((Date.now()-w)/1e3)}async function re(){if(c.value||!A.value)return;const{url:ye,dir:Ne,shallow:W,revision:J}=n.value;u.value="",c.value=!0,w=Date.now(),v.value=0,p=window.setInterval(le,1e3);try{const z=await jp(t,{url:ye.trim(),dir:Ne.trim(),name:n.value.name.trim()||void 0,depth:t==="git"&&W?1:0,revision:t==="svn"&&J.trim()||void 0,accountId:n.value.accountId||void 0,key:qt.key||void 0}),ee=qt.onDone;fc(),X("ok",e(t==="git"?"repoCloneDoneGit":"repoCloneDoneSvn",{name:z.name}));try{ee?.({path:z.path,name:z.name})}catch{}}catch(z){u.value=z?.message||String(z)}finally{c.value=!1,p&&(window.clearInterval(p),p=0)}}function Ee(){p&&window.clearInterval(p),H&&window.clearTimeout(H),p=0,H=0}function Ve(ye){return`${ye.name} · ${ye.url||e("accAllRepos")}`}return{t:e,state:n,busy:c,error:u,elapsed:v,pickerOpen:d,targetPath:x,canSubmit:A,accountOptions:I,effectiveAccount:Z,isRemoteDir:G,newAccountValue:Bc,accountLabel:Ve,onAccountChange:ve,onDirPicked:_e,onModel:ke,submit:re,dispose:Ee}}const CD={class:"fw-clone-head"},$D={class:"fw-clone-badge"},SD={class:"fw-clone-headtext"},ED={class:"fw-clone-headtitle"},TD={class:"fw-clone-headsub"},DD={class:"fw-clone"},FD={class:"fw-clone-field"},RD={class:"fw-clone-label"},ND=["placeholder","disabled"],PD={key:0,class:"fw-clone-field"},AD={class:"fw-clone-label"},MD=["value","disabled"],OD={value:""},LD=["value"],BD=["value"],ID={key:0,class:"fw-clone-tip"},jD={class:"fw-clone-field"},VD={class:"fw-clone-label"},zD={class:"fw-clone-row"},UD=["placeholder","disabled"],HD=["disabled"],WD={class:"fw-clone-field"},GD={class:"fw-clone-label"},qD=["placeholder","disabled"],KD={class:"fw-clone-check fw-clone-slot"},XD=["disabled"],YD={class:"fw-clone-checkhint"},JD=["title"],QD={class:"fw-clone-targetlabel"},ZD={class:"fw-clone-targetval"},e4={key:1,class:"fw-clone-busy"},t4={class:"fw-clone-elapsed"},n4={key:2,class:"fw-clone-tip"},s4={key:3,class:"fw-clone-error"},o4=["disabled"],a4=["disabled"],i4=ht({__name:"GitCloneDialog",setup(t){const{t:e,state:n,busy:i,error:c,elapsed:u,pickerOpen:v,targetPath:d,canSubmit:p,accountOptions:w,effectiveAccount:b,isRemoteDir:x,newAccountValue:A,accountLabel:I,onAccountChange:M,onDirPicked:V,onModel:H,submit:C,dispose:Z}=Bd("git");return Pt(Z),(G,F)=>{const de=rn;return l(),r(oe,null,[h(de,{"model-value":s(qt).open,width:"560px","append-to-body":"",class:"fw-clone-dialog fw-clone-git","close-on-click-modal":!1,"close-on-press-escape":!s(i),"show-close":!s(i),"onUpdate:modelValue":s(H)},{header:ne(()=>[o("div",CD,[o("span",$D,[h(se,{name:"git",size:20})]),o("div",SD,[o("div",ED,a(s(e)("repoCloneTitleGit")),1),o("div",TD,a(s(e)("repoCloneCaptionGit")),1)])])]),footer:ne(()=>[o("button",{class:"fw-clone-btn",disabled:s(i),onClick:F[7]||(F[7]=B=>s(H)(!1))},a(s(e)("cancel")),9,o4),o("button",{class:"fw-clone-btn primary",disabled:s(i)||!s(p),onClick:F[8]||(F[8]=(...B)=>s(C)&&s(C)(...B))},a(s(e)("repoCloneActionGit")),9,a4)]),default:ne(()=>[o("div",DD,[o("label",FD,[o("span",RD,a(s(e)("repoCloneUrl")),1),kt(o("input",{"onUpdate:modelValue":F[0]||(F[0]=B=>s(n).url=B),class:"fw-clone-input",placeholder:s(e)("repoCloneUrlGitPlaceholder"),spellcheck:"false",disabled:s(i),onKeyup:F[1]||(F[1]=bt((...B)=>s(C)&&s(C)(...B),["enter"]))},null,40,ND),[[Lt,s(n).url]])]),s(x)?P("",!0):(l(),r("label",PD,[o("span",AD,a(s(e)("repoCloneAccount")),1),o("select",{class:"fw-clone-input fw-clone-select",value:s(n).accountId,disabled:s(i),onChange:F[2]||(F[2]=(...B)=>s(M)&&s(M)(...B))},[o("option",OD,a(s(e)("repoCloneAccountAuto")),1),(l(!0),r(oe,null,Ae(s(w),B=>(l(),r("option",{key:B.id,value:B.id},a(s(I)(B)),9,LD))),128)),o("option",{value:s(A)},a(s(e)("repoCloneAccountNew")),9,BD)],40,MD),s(n).url.trim()||s(n).accountId?(l(),r("span",ID,[s(b)?(l(),r(oe,{key:0},[ue(a(s(e)("accEffective"))+" "+a(s(b).name)+"（"+a(s(b).username)+"@"+a(s(b).host)+"） ",1)],64)):(l(),r(oe,{key:1},[ue(a(s(e)("accEffectiveNone")),1)],64))])):P("",!0)])),o("label",jD,[o("span",VD,a(s(e)("repoCloneDir")),1),o("div",zD,[kt(o("input",{"onUpdate:modelValue":F[3]||(F[3]=B=>s(n).dir=B),class:"fw-clone-input",placeholder:s(e)("repoCloneDirPlaceholder"),spellcheck:"false",disabled:s(i)},null,8,UD),[[Lt,s(n).dir]]),o("button",{class:"fw-clone-btn",disabled:s(i),onClick:F[4]||(F[4]=B=>v.value=!0)},a(s(e)("repoCloneBrowse")),9,HD)])]),o("label",WD,[o("span",GD,a(s(e)("repoCloneName")),1),kt(o("input",{"onUpdate:modelValue":F[5]||(F[5]=B=>s(n).name=B),class:"fw-clone-input",placeholder:s(e)("repoCloneNamePlaceholder"),spellcheck:"false",disabled:s(i)},null,8,qD),[[Lt,s(n).name]])]),o("label",KD,[kt(o("input",{"onUpdate:modelValue":F[6]||(F[6]=B=>s(n).shallow=B),type:"checkbox",disabled:s(i)},null,8,XD),[[_f,s(n).shallow]]),o("span",null,a(s(e)("repoCloneShallow")),1),o("span",YD,a(s(e)("repoCloneShallowHint")),1)]),o("div",{class:"fw-clone-target",title:s(d)||void 0},[h(se,{name:"folderOpen",size:13}),o("span",QD,a(s(e)("repoCloneTargetGit")),1),o("span",ZD,a(s(d)||s(e)("repoCloneTargetEmpty")),1)],8,JD),s(i)?(l(),r("div",e4,[F[10]||(F[10]=o("span",{class:"fw-clone-spin","aria-hidden":"true"},null,-1)),o("span",null,a(s(e)("repoCloneRunningGit")),1),o("span",t4,a(s(e)("repoCloneElapsed",{s:s(u)})),1)])):P("",!0),s(i)?(l(),r("div",n4,a(s(e)("repoCloneKeepOpen")),1)):P("",!0),s(c)?(l(),r("div",s4,a(s(c)),1)):P("",!0)])]),_:1},8,["model-value","close-on-press-escape","show-close","onUpdate:modelValue"]),h(ti,{modelValue:s(v),"onUpdate:modelValue":F[9]||(F[9]=B=>Vc(v)?v.value=B:null),mode:"folder","initial-dir":s(n).dir,onConfirm:s(V)},null,8,["modelValue","initial-dir","onConfirm"])],64)}}}),l4={class:"fw-clone-head"},r4={class:"fw-clone-badge"},c4={class:"fw-clone-headtext"},u4={class:"fw-clone-headtitle"},d4={class:"fw-clone-headsub"},f4={class:"fw-clone"},p4={class:"fw-clone-field"},v4={class:"fw-clone-label"},h4=["placeholder","disabled"],m4={key:0,class:"fw-clone-field"},g4={class:"fw-clone-label"},y4=["value","disabled"],w4={value:""},b4=["value"],_4=["value"],k4={key:0,class:"fw-clone-tip"},x4={class:"fw-clone-field"},C4={class:"fw-clone-label"},$4={class:"fw-clone-row"},S4=["placeholder","disabled"],E4=["disabled"],T4={class:"fw-clone-field"},D4={class:"fw-clone-label"},F4=["placeholder","disabled"],R4={class:"fw-clone-field"},N4={class:"fw-clone-label"},P4=["placeholder","disabled"],A4=["title"],M4={class:"fw-clone-targetlabel"},O4={class:"fw-clone-targetval"},L4={key:1,class:"fw-clone-busy"},B4={class:"fw-clone-elapsed"},I4={key:2,class:"fw-clone-tip"},j4={key:3,class:"fw-clone-error"},V4=["disabled"],z4=["disabled"],U4=ht({__name:"SvnCheckoutDialog",setup(t){const{t:e,state:n,busy:i,error:c,elapsed:u,pickerOpen:v,targetPath:d,canSubmit:p,accountOptions:w,effectiveAccount:b,isRemoteDir:x,newAccountValue:A,accountLabel:I,onAccountChange:M,onDirPicked:V,onModel:H,submit:C,dispose:Z}=Bd("svn");return Pt(Z),(G,F)=>{const de=rn;return l(),r(oe,null,[h(de,{"model-value":s(qt).open,width:"560px","append-to-body":"",class:"fw-clone-dialog fw-clone-svn","close-on-click-modal":!1,"close-on-press-escape":!s(i),"show-close":!s(i),"onUpdate:modelValue":s(H)},{header:ne(()=>[o("div",l4,[o("span",r4,[h(se,{name:"svn",size:20})]),o("div",c4,[o("div",u4,a(s(e)("repoCloneTitleSvn")),1),o("div",d4,a(s(e)("repoCloneCaptionSvn")),1)])])]),footer:ne(()=>[o("button",{class:"fw-clone-btn",disabled:s(i),onClick:F[7]||(F[7]=B=>s(H)(!1))},a(s(e)("cancel")),9,V4),o("button",{class:"fw-clone-btn primary",disabled:s(i)||!s(p),onClick:F[8]||(F[8]=(...B)=>s(C)&&s(C)(...B))},a(s(e)("repoCloneActionSvn")),9,z4)]),default:ne(()=>[o("div",f4,[o("label",p4,[o("span",v4,a(s(e)("repoCloneUrl")),1),kt(o("input",{"onUpdate:modelValue":F[0]||(F[0]=B=>s(n).url=B),class:"fw-clone-input",placeholder:s(e)("svnCheckoutUrlPlaceholder"),spellcheck:"false",disabled:s(i),onKeyup:F[1]||(F[1]=bt((...B)=>s(C)&&s(C)(...B),["enter"]))},null,40,h4),[[Lt,s(n).url]])]),s(x)?P("",!0):(l(),r("label",m4,[o("span",g4,a(s(e)("repoCloneAccount")),1),o("select",{class:"fw-clone-input fw-clone-select",value:s(n).accountId,disabled:s(i),onChange:F[2]||(F[2]=(...B)=>s(M)&&s(M)(...B))},[o("option",w4,a(s(e)("repoCloneAccountAuto")),1),(l(!0),r(oe,null,Ae(s(w),B=>(l(),r("option",{key:B.id,value:B.id},a(s(I)(B)),9,b4))),128)),o("option",{value:s(A)},a(s(e)("repoCloneAccountNew")),9,_4)],40,y4),s(n).url.trim()||s(n).accountId?(l(),r("span",k4,[s(b)?(l(),r(oe,{key:0},[ue(a(s(e)("accEffective"))+" "+a(s(b).name)+"（"+a(s(b).username)+"@"+a(s(b).host)+"） ",1)],64)):(l(),r(oe,{key:1},[ue(a(s(e)("accEffectiveNone")),1)],64))])):P("",!0)])),o("label",x4,[o("span",C4,a(s(e)("repoCloneDir")),1),o("div",$4,[kt(o("input",{"onUpdate:modelValue":F[3]||(F[3]=B=>s(n).dir=B),class:"fw-clone-input",placeholder:s(e)("repoCloneDirPlaceholder"),spellcheck:"false",disabled:s(i)},null,8,S4),[[Lt,s(n).dir]]),o("button",{class:"fw-clone-btn",disabled:s(i),onClick:F[4]||(F[4]=B=>v.value=!0)},a(s(e)("repoCloneBrowse")),9,E4)])]),o("label",T4,[o("span",D4,a(s(e)("repoCloneName")),1),kt(o("input",{"onUpdate:modelValue":F[5]||(F[5]=B=>s(n).name=B),class:"fw-clone-input",placeholder:s(e)("repoCloneNamePlaceholder"),spellcheck:"false",disabled:s(i)},null,8,F4),[[Lt,s(n).name]])]),o("label",R4,[o("span",N4,a(s(e)("repoCloneRevision")),1),kt(o("input",{"onUpdate:modelValue":F[6]||(F[6]=B=>s(n).revision=B),class:"fw-clone-input",placeholder:s(e)("repoCloneRevisionPlaceholder"),spellcheck:"false",disabled:s(i)},null,8,P4),[[Lt,s(n).revision]])]),o("div",{class:"fw-clone-target",title:s(d)||void 0},[h(se,{name:"folderOpen",size:13}),o("span",M4,a(s(e)("repoCloneTargetSvn")),1),o("span",O4,a(s(d)||s(e)("repoCloneTargetEmpty")),1)],8,A4),s(i)?(l(),r("div",L4,[F[10]||(F[10]=o("span",{class:"fw-clone-spin","aria-hidden":"true"},null,-1)),o("span",null,a(s(e)("repoCloneRunningSvn")),1),o("span",B4,a(s(e)("repoCloneElapsed",{s:s(u)})),1)])):P("",!0),s(i)?(l(),r("div",I4,a(s(e)("repoCloneKeepOpen")),1)):P("",!0),s(c)?(l(),r("div",j4,a(s(c)),1)):P("",!0)])]),_:1},8,["model-value","close-on-press-escape","show-close","onUpdate:modelValue"]),h(ti,{modelValue:s(v),"onUpdate:modelValue":F[9]||(F[9]=B=>Vc(v)?v.value=B:null),mode:"folder","initial-dir":s(n).dir,onConfirm:s(V)},null,8,["modelValue","initial-dir","onConfirm"])],64)}}}),H4=ht({__name:"RepoCloneDialog",setup(t){return(e,n)=>s(qt).open&&s(qt).kind==="git"?(l(),Xe(i4,{key:0})):s(qt).open?(l(),Xe(U4,{key:1})):P("",!0)}}),W4={class:"fw-clone-head"},G4={class:"fw-clone-badge"},q4={class:"fw-clone-headtext"},K4={class:"fw-clone-headtitle"},X4={class:"fw-clone-headsub"},Y4={class:"fw-acc-split"},J4={class:"fw-acc-rail"},Q4={class:"fw-acc-railhead"},Z4={class:"fw-acc-count"},e5={key:0,class:"fw-acc-empty"},t5={key:1,class:"fw-acc-railist"},n5={key:0,class:"fw-acc-group"},s5=["onClick","onContextmenu"],o5=["data-kind"],a5={class:"fw-acc-itemtext"},i5=["title"],l5=["title"],r5=["title"],c5=["title"],u5={class:"fw-acc-efflabel"},d5={key:0,class:"fw-acc-effval"},f5={key:1,class:"fw-acc-effnone"},p5={class:"fw-acc-effhint"},v5={class:"fw-acc-detail"},h5={key:0,class:"fw-acc-blank"},m5={class:"fw-acc-detailhead"},g5={class:"fw-acc-detailtitle"},y5={key:0,class:"fw-acc-detailsub"},w5={class:"fw-acc-form"},b5={class:"fw-clone-field"},_5={class:"fw-clone-label"},k5={class:"fw-clone-field"},x5={class:"fw-clone-label"},C5={class:"fw-clone-field"},$5={class:"fw-clone-label"},S5={class:"fw-clone-field"},E5={class:"fw-clone-label"},T5={class:"fw-clone-tip"},D5={class:"fw-clone-field"},F5={class:"fw-clone-label"},R5={class:"fw-clone-field"},N5={class:"fw-clone-label"},P5={class:"fw-clone-row"},A5={class:"fw-clone-field"},M5={class:"fw-clone-label"},O5={key:0,class:"fw-clone-error"},L5={class:"fw-acc-actions"},B5={class:"fw-clone-tip"},I5=ht({__name:"AccountDialog",setup(t){const{t:e}=Bt(),n=L({get:()=>kn.open,set:ge=>{ge||Bi()}}),i=m(null),c=m(!1),u=L(()=>!c.value&&i.value!==null),v=L(()=>c.value||i.value!==null),d=L(()=>Pn.value.find(ge=>ge.id===i.value)??null),p=gt({kind:"git",name:"",host:"",url:"",username:"",secretKind:"password",secret:"",note:""}),w=m(!1),b=m(!1),x=m(null),A=m(""),I=m(null);async function M(){const ge=kn.url?.trim()??"";if(!ge){I.value=null;return}const we=await iu(kn.kind,ge).catch(()=>null);I.value=we?.account??null}const V=L(()=>["git","svn"].map(we=>({kind:we,list:Pn.value.filter(Ye=>Ye.kind===we)}))),H=m(null),{cmOpen:C,cmX:Z,cmY:G,cmItems:F,openMenu:de,closeMenu:B}=pn();function ve(ge,we){const Ye=[{label:e("accTest"),icon:"refresh",onClick:()=>_e(we)},{label:e("accApply"),icon:"check",onClick:()=>void ke(we)},{separator:!0},{label:e("accDelete"),icon:"trash",onClick:()=>void le(we)},{separator:!0},{label:e("accCopyIdent"),icon:"copy",onClick:()=>void re(we)}];de(ge,Ye)}async function _e(ge){Ne(ge),await Ke()}async function ke(ge){Ne(ge),await me()}async function le(ge){Ne(ge),await je(),x.value=null}async function re(ge){try{await navigator.clipboard.writeText(`${ge.username}@${ge.host}`)}catch{}}const Ee=L(()=>(c.value?p.kind:d.value?.kind??p.kind)==="svn"?"fw-clone-svn":"fw-clone-git"),Ve=L(()=>{const ge=p.username.trim()||"user",we=p.host.trim()||"host";return`${ge}@${we}`});function ye(ge){p.kind=ge.kind,p.name=ge.name,p.host=ge.host,p.url=ge.url,p.username=ge.username,p.secretKind=ge.secretKind,p.secret="",p.note=ge.note}function Ne(ge){c.value=!1,i.value=ge.id,x.value=null,A.value="",H.value=null,ye(ge)}Qe(()=>kn.open,ge=>{ge&&(c.value=!1,i.value=null,x.value=null,A.value="",w.value=!1,b.value=!1,I.value=null,(async()=>{await co(),await M();const we=Pn.value[0];we&&Ne(we)})())},{immediate:!0});function W(){Bi()}function J(){Bi()}function z(){c.value=!0,i.value=null,x.value=null,A.value="",p.kind=kn.kind,p.name="",p.host="",p.url=kn.url,p.username="",p.secretKind="password",p.secret="",p.note=""}async function ee(ge){w.value=!0,A.value="";try{await ge()}catch(we){A.value=we instanceof Error?we.message:String(we)}finally{w.value=!1}}async function me(){const ge=d.value;if(ge){b.value=!0;try{const we=await qp(ge.id);rs(`${e("accApplyOk")} · ${we.detail}`)}catch(we){fs(we instanceof Error?we.message:String(we))}finally{b.value=!1}}}async function je(){const ge=d.value;if(ge){if(x.value!==ge.id){x.value=ge.id;return}x.value=null;try{await Wp(ge.id),rs(e("accDeleted")),await co(),await M();const we=Pn.value[0];we?Ne(we):(i.value=null,c.value=!1)}catch(we){fs(we instanceof Error?we.message:String(we))}}}async function Ke(){if(!p.host.trim()||!p.username.trim()){ao(e("accRequired"));return}const ge=u.value&&!p.secret.trim();if(!ge&&!p.secret.trim()){ao(e("accSecretRequired"));return}await ee(async()=>{const we=await Gp(ge?{id:i.value??void 0}:{kind:p.kind,host:p.host.trim(),url:p.url.trim(),username:p.username.trim(),secret:p.secret,secretKind:p.secretKind});H.value={ok:we.ok,detail:we.detail},we.ok?rs(`${e("accTestOk")} · ${we.detail}`):fs(`${e("accTestFail")} · ${we.detail}`)})}async function Ze(){if(!p.host.trim()||!p.username.trim()){ao(e("accRequired"));return}if(c.value&&!p.secret){ao(e("accSecretRequired"));return}await ee(async()=>{const ge={kind:p.kind,host:p.host.trim(),url:p.url.trim(),name:p.name.trim(),username:p.username.trim(),secret:p.secret||void 0,secretKind:p.secretKind,note:p.note.trim()};if(u.value&&i.value){await Hp({id:i.value,...ge}),rs(e("accSaved")),await co(),await M();const we=Pn.value.find(Ye=>Ye.id===i.value);we&&ye(we)}else{const we=await Up(ge);rs(e("accSaved")),await co(),await M();const Ye=Pn.value.find(st=>st.id===we.account.id);Ye&&Ne(Ye)}})}return(ge,we)=>{const Ye=Mn,st=ai,pe=oi,Ce=Ss,qe=rn;return l(),Xe(qe,{modelValue:n.value,"onUpdate:modelValue":we[8]||(we[8]=ce=>n.value=ce),class:te(["fw-clone-dialog fw-acc-dlg",Ee.value]),width:"800px","align-center":"","close-on-click-modal":!1,"append-to-body":"",onClosed:W},{header:ne(()=>[o("div",W4,[o("span",G4,[h(se,{name:"shield",size:20})]),o("div",q4,[o("div",K4,a(s(e)("accTitle")),1),o("div",X4,a(s(e)("accCaption")),1)])])]),footer:ne(()=>[h(Ye,{size:"small",onClick:J},{default:ne(()=>[ue(a(s(e)("accCancel")),1)]),_:1}),h(Ye,{size:"small",type:"primary",loading:w.value,disabled:!v.value,onClick:Ze},{default:ne(()=>[ue(a(s(e)("accSave")),1)]),_:1},8,["loading","disabled"])]),default:ne(()=>[o("div",Y4,[o("div",J4,[o("div",Q4,[o("span",Z4,a(s(e)("accListTitle"))+" · "+a(s(Pn).length),1),h(Ye,{size:"small",class:"fw-acc-iconbtn",title:s(e)("accAdd"),onClick:z},{default:ne(()=>[h(se,{name:"plus",size:13})]),_:1},8,["title"])]),s(Pn).length?(l(),r("div",t5,[(l(!0),r(oe,null,Ae(V.value,ce=>(l(),r(oe,{key:ce.kind},[ce.list.length?(l(),r("div",n5,a(ce.kind==="svn"?"SVN":"Git"),1)):P("",!0),(l(!0),r(oe,null,Ae(ce.list,Ie=>(l(),r("button",{key:Ie.id,type:"button",class:te(["fw-acc-item",{on:!c.value&&Ie.id===i.value}]),onClick:rt=>Ne(Ie),onContextmenu:be(rt=>ve(rt,Ie),["prevent","stop"])},[o("span",{class:"fw-acc-kind","data-kind":Ie.kind},a(Ie.kind==="svn"?"SVN":"Git"),9,o5),o("span",a5,[o("span",{class:"fw-acc-itemname",title:Ie.name},a(Ie.name),9,i5),o("span",{class:"fw-acc-itemsub",title:`${Ie.username}@${Ie.host}`},a(Ie.username)+"@"+a(Ie.host),9,l5)]),Ie.hasSecret?(l(),Xe(se,{key:0,class:"fw-acc-lock",name:"shield",size:13,title:s(e)("accHasSecret")},null,8,["title"])):(l(),r("span",{key:1,class:"fw-acc-dot",title:s(e)("accNoSecret")},null,8,r5))],42,s5))),128))],64))),128))])):(l(),r("div",e5,a(s(e)("accEmpty")),1)),s(kn).url?(l(),r("div",{key:2,class:"fw-acc-effective",title:s(kn).url},[o("span",u5,a(s(e)("accEffective")),1),I.value?(l(),r("span",d5,a(I.value.name)+"（"+a(I.value.username)+"@"+a(I.value.host)+"）",1)):(l(),r("span",f5,a(s(e)("accEffectiveNone")),1)),o("span",p5,a(s(e)("accMatchHint")),1)],8,c5)):P("",!0)]),o("div",v5,[v.value?(l(),r(oe,{key:1},[o("div",m5,[o("span",g5,a(c.value?s(e)("accNewTitle"):s(e)("accEditTitle")),1),d.value?(l(),r("span",y5,a(d.value.username)+"@"+a(d.value.host),1)):P("",!0)]),o("div",w5,[o("div",b5,[o("span",_5,a(s(e)("accKind")),1),h(pe,{modelValue:p.kind,"onUpdate:modelValue":we[0]||(we[0]=ce=>p.kind=ce),size:"small",class:"fw-acc-kindsel","popper-class":"fw-acc-popper"},{default:ne(()=>[h(st,{value:"git",label:s(e)("accKindGit")},null,8,["label"]),h(st,{value:"svn",label:s(e)("accKindSvn")},null,8,["label"])]),_:1},8,["modelValue"])]),o("div",k5,[o("span",x5,a(s(e)("accName")),1),h(Ce,{modelValue:p.name,"onUpdate:modelValue":we[1]||(we[1]=ce=>p.name=ce),size:"small",placeholder:Ve.value},null,8,["modelValue","placeholder"])]),o("div",C5,[o("span",$5,a(s(e)("accHost")),1),h(Ce,{modelValue:p.host,"onUpdate:modelValue":we[2]||(we[2]=ce=>p.host=ce),size:"small",placeholder:s(e)("accHostPlaceholder")},null,8,["modelValue","placeholder"])]),o("div",S5,[o("span",E5,a(s(e)("accUrl")),1),h(Ce,{modelValue:p.url,"onUpdate:modelValue":we[3]||(we[3]=ce=>p.url=ce),size:"small",placeholder:s(e)("accUrlPlaceholder")},null,8,["modelValue","placeholder"]),o("span",T5,a(s(e)("accUrlHint")),1)]),o("div",D5,[o("span",F5,a(s(e)("accUsername")),1),h(Ce,{modelValue:p.username,"onUpdate:modelValue":we[4]||(we[4]=ce=>p.username=ce),size:"small",placeholder:s(e)("accUsername")},null,8,["modelValue","placeholder"])]),o("div",R5,[o("span",N5,a(s(e)("accSecretKind")),1),o("div",P5,[h(pe,{modelValue:p.secretKind,"onUpdate:modelValue":we[5]||(we[5]=ce=>p.secretKind=ce),size:"small",class:"fw-acc-kindslim","popper-class":"fw-acc-popper"},{default:ne(()=>[h(st,{value:"password",label:s(e)("accSecretPassword")},null,8,["label"]),h(st,{value:"token",label:s(e)("accSecretToken")},null,8,["label"])]),_:1},8,["modelValue"]),h(Ce,{modelValue:p.secret,"onUpdate:modelValue":we[6]||(we[6]=ce=>p.secret=ce),size:"small",type:"password","show-password":"",class:"fw-acc-secretinput",placeholder:u.value&&d.value?.hasSecret?s(e)("accKeepSecret"):s(e)("accSecret")},null,8,["modelValue","placeholder"])])]),o("div",A5,[o("span",M5,a(s(e)("accNote")),1),h(Ce,{modelValue:p.note,"onUpdate:modelValue":we[7]||(we[7]=ce=>p.note=ce),size:"small"},null,8,["modelValue"])])]),A.value?(l(),r("div",O5,a(A.value),1)):P("",!0),H.value?(l(),r("div",{key:1,class:te(["fw-acc-testres",H.value.ok?"is-ok":"is-fail"])},[h(se,{name:H.value.ok?"check":"warning",size:13},null,8,["name"]),o("span",null,a(H.value.ok?s(e)("accTestOk"):s(e)("accTestFail"))+" · "+a(H.value.detail),1)],2)):P("",!0),o("div",L5,[h(Ye,{size:"small",loading:w.value,onClick:Ke},{default:ne(()=>[ue(a(s(e)("accTest")),1)]),_:1},8,["loading"]),u.value?(l(),Xe(Ye,{key:0,size:"small",loading:b.value,onClick:me},{default:ne(()=>[ue(a(s(e)("accApply")),1)]),_:1},8,["loading"])):P("",!0),u.value?(l(),Xe(Ye,{key:1,size:"small",class:te({"fw-acc-danger":x.value===d.value?.id}),onClick:je},{default:ne(()=>[ue(a(x.value===d.value?.id?s(e)("accDeleteConfirm"):s(e)("accDelete")),1)]),_:1},8,["class"])):P("",!0)]),o("div",B5,a(s(e)("accApplyHint")),1)],64)):(l(),r("div",h5,a(s(e)("accPick")),1))])]),s(C)?(l(),Xe(Qt,{key:0,items:s(F),x:s(Z),y:s(G),onClose:s(B)},null,8,["items","x","y","onClose"])):P("",!0)]),_:1},8,["modelValue","class"])}}}),j5=xt(I5,[["__scopeId","data-v-d434fcb2"]]),V5={class:"fw-toast-host","aria-live":"polite","aria-atomic":"false"},z5=["onMouseenter","onMouseleave"],U5={class:"fw-toast-ico","aria-hidden":"true"},H5=["title","onClick"],W5=["title"],G5=["title","aria-label","onClick"],Ic=100,q5=48,K5=ht({__name:"ToastHost",setup(t){let e=null;function n(){if(Ni.value.length!==0)for(const w of[...Ni.value])w.paused||w.duration<=0||(w.remain-=Ic,w.remain<=0&&Lr(w.id))}ln(()=>{e=window.setInterval(n,Ic)}),Pt(()=>{e!==null&&window.clearInterval(e),e=null});const i={ok:"check",error:"warning",warning:"warning",info:"info"},c=gt(new Set);function u(w){c.has(w)?c.delete(w):c.add(w)}function v(w){return w.message.length>q5?w.message:void 0}function d(w){return Math.max(0,Math.ceil(w.remain/1e3))}function p(w){if(w.duration<=0)return"100%";const b=w.remain/w.duration*100;return`${Math.max(0,Math.min(100,b))}%`}return(w,b)=>(l(),r("div",V5,[(l(!0),r(oe,null,Ae(s(Ni),x=>(l(),r("div",{key:x.id,class:te(["fw-toast",`k-${x.kind}`]),role:"status",onMouseenter:A=>x.paused=!0,onMouseleave:A=>x.paused=!1},[o("span",U5,[h(se,{name:i[x.kind],size:15},null,8,["name"])]),o("span",{class:te(["fw-toast-msg",{"is-open":c.has(x.id)}]),title:v(x),onClick:A=>u(x.id)},a(x.message),11,H5),x.duration>0?(l(),r("span",{key:0,class:"fw-toast-count",title:`${d(x)}s`},a(d(x))+"s ",9,W5)):P("",!0),o("button",{class:"fw-toast-x",type:"button",title:s(y)("toastClose"),"aria-label":s(y)("toastClose"),onClick:A=>s(Lr)(x.id)},[h(se,{name:"close",size:13})],8,G5),x.duration>0?(l(),r("span",{key:1,class:"fw-toast-bar",style:_t({width:p(x)})},null,4)):P("",!0)],42,z5))),128))]))}}),Is=new Map;function X5(){const t=window.__DSH_FILE_WORKBENCH__;if(!t)return;t.openExternalFile=n=>{sa(n).catch(i=>X("error",i.message)),Ft()},t.openExternalFolder=n=>{Vt(n)},t.syncSessionWorkspace=()=>{Rh()};const e=t.pendingOpens;if(e&&e.length>0){t.pendingOpens=[];for(const n of e)n.kind==="file"?t.openExternalFile(n.path):t.openExternalFolder?.(n.path)}}function Id(t,e,n="workbench"){e?.apiBase&&(window.__DSH_FILE_WORKBENCH__=window.__DSH_FILE_WORKBENCH__??{},window.__DSH_FILE_WORKBENCH__.apiBase=e.apiBase);const i=Is.get(t);if(i){try{i.unmount()}catch{}Is.delete(t)}const c=ta(n==="vscode"?AT:DS);let u=null;n==="vscode"&&(u=mr(Cd(e?.instanceId)),e?.fresh&&u.markFresh(),u.bindTab(e?.instanceId??null,e?.panelId??null),c.provide(bi,u)),c.mount(t),Is.set(t,c),n==="workbench"&&X5(),Ev(),n==="workbench"&&n2();const v=c,d=u;return{unmount:()=>{try{v.unmount()}catch{}Is.get(t)===v&&Is.delete(t),Is.size===0&&setTimeout(()=>{Is.size===0&&ip()},3e3)},openProject:d?p=>d.requestOpenProject(p):void 0}}function jd(t,e){return Id(t,e,"workbench")}function Y5(t,e){return Id(t,e,"vscode")}window.__dshFileWorkbenchMountPane__=jd;window.__dshVSCodeMountPane__=Y5;function J5(){if(typeof document>"u"||!document.body)return;const t=ii();if(t.app&&t.el?.isConnected)return;if(t.app){try{t.app.unmount()}catch{}t.app=null,t.el=null}document.getElementById("dsh-toast-root")?.remove();const e=document.createElement("div");e.id="dsh-toast-root",e.style.position="fixed",e.style.left="0",e.style.top="0",e.style.width="0",e.style.height="0",e.style.overflow="visible",e.style.zIndex="2147483000",e.style.pointerEvents="none",document.body.appendChild(e);try{const n=ta(K5);n.mount(e),t.app=n,t.el=e}catch(n){console.error("[dsh-file-workbench] 提示宿主挂载失败：",n),e.remove()}}function Q5(){if(typeof document>"u"||!document.body||document.getElementById("dsh-term-root"))return;const t=document.createElement("div");t.id="dsh-term-root",t.style.position="fixed",t.style.left="0",t.style.top="0",t.style.width="0",t.style.height="0",t.style.overflow="visible",t.style.zIndex="10000",document.body.appendChild(t);try{ta(_D).mount(t)}catch(e){console.error("[dsh-file-workbench] 全局终端挂载失败：",e)}}J5();Q5();Z5();eF();function Z5(){if(typeof document>"u"||!document.body||document.getElementById("dsh-clone-root"))return;const t=document.createElement("div");t.id="dsh-clone-root",t.style.position="fixed",t.style.left="0",t.style.top="0",t.style.width="0",t.style.height="0",t.style.overflow="visible",t.style.zIndex="10000",document.body.appendChild(t);try{ta(H4).mount(t)}catch(e){console.error("[dsh-file-workbench] 全局克隆弹窗挂载失败：",e)}}if(typeof document<"u"){const t=document.getElementById("app");t&&jd(t,{apiBase:""})}window.__dshTestProbeUrl=`${(window.__DSH_FILE_WORKBENCH__?.apiBase||"/api/dsh-file-workbench").replace(/\/$/,"")}/assets/__dsh-test-probe.js`;function eF(){if(typeof document>"u"||!document.body||document.getElementById("dsh-acc-root"))return;const t=document.createElement("div");t.id="dsh-acc-root",t.style.position="fixed",t.style.left="0",t.style.top="0",t.style.width="0",t.style.height="0",t.style.overflow="visible",t.style.zIndex="10000",document.body.appendChild(t);try{ta(j5).mount(t)}catch(e){console.error("[dsh-file-workbench] 全局账号对话框挂载失败：",e)}}
