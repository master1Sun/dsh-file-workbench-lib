const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-C2cID70-.js","assets/vendor-vue-DSVMyY-k.js"])))=>i.map(i=>d[i]);
import{a1 as gt,r as m,a5 as kr,y as ht,G as r,S as N,d as B,E as l,H as Xe,P as se,I as o,L as te,u as s,F as ae,W as h,V as a,ao as bt,a8 as _e,aa as Ae,U as ue,e as Ze,q as Ml,o as ln,l as Pt,T as Nc,K as _t,J as cf,n as Dt,Q as kt,ap as Lt,ag as uf,k as Cs,Y as df,X as ho,m as Ol,s as ff,ay as pf,ak as vf,p as Pc,at as ea}from"./vendor-vue-DSVMyY-k.js";import{E as $s,a as An,b as rn,c as hf,d as mf,e as ei,f as ti,g as gf,h as yf,i as wf}from"./vendor-element-plus-CPaGIovE.js";import{aV as To,aW as bf,aX as _f,aY as kf,aZ as xf,a_ as xr,a$ as Ac,b0 as Cf,b1 as $f,b2 as Sf,b3 as Ef,b4 as Cr,b5 as Tf,b6 as Df,b7 as Ff,b8 as Rf,b9 as $r,ba as Qs,bb as eo,bc as Nf,bd as Ti,be as ma,bf as Pf,bg as Af,bh as Mf,bi as Of,bj as Lf,bk as Bf,bl as If}from"./vendor-C2cID70-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))i(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const v of u.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&i(v)}).observe(document,{childList:!0,subtree:!0});function n(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function i(c){if(c.ep)return;c.ep=!0;const u=n(c);fetch(c.href,u)}})();const tt=gt({visible:!1,kind:"confirm",title:"",message:"",okText:"",cancelText:"",inputPlaceholder:"",inputValue:"",multiline:!1,choices:[],resolve:null});function Sr(t){return new Promise(e=>{tt.kind="confirm",tt.title=t.title??"",tt.message=t.message,tt.choices=t.choices,tt.visible=!0,tt.resolve=n=>e(typeof n=="string"?n:null)})}function Mt(t){return new Promise(e=>{tt.kind="confirm",tt.title=t.title??"",tt.message=t.message,tt.okText=t.okText??"",tt.cancelText=t.cancelText??"",tt.choices=[],tt.inputValue="",tt.visible=!0,tt.resolve=n=>e(n===!0)})}function us(t){return new Promise(e=>{tt.kind="prompt",tt.title=t.title??"",tt.message=t.message??"",tt.okText=t.okText??"",tt.cancelText=t.cancelText??"",tt.choices=[],tt.inputPlaceholder=t.placeholder??"",tt.inputValue=t.initial??"",tt.multiline=t.multiline===!0,tt.visible=!0,tt.resolve=n=>e(n===null?null:String(n))})}function Do(t){tt.visible=!1,tt.resolve?.(t),tt.resolve=null}const jf={tabFileWorkbench:"文件工作台",tabFileWorkbenchDesc:"浏览、预览、搜索本地文件，并引用到当前会话",tabVSCode:"文件编辑器",tabVSCodeDesc:"浏览项目目录，多标签编辑代码并高亮语法",tabMenuOpenInEditor:"在文件编辑器中打开工作区",tabMenuNewEditor:"新建编辑器窗口",tabMenuAnotherEditor:"再开一个编辑器窗口",tabMenuFloat:"弹出为浮窗",tabMenuDefaultLabel:"默认打开",guideMenuAria:"更多打开方式",vsNoProject:"未选择项目目录",vsTreeLoading:"正在加载项目…",vsOpenFolder:"打开文件夹",vsFolderPath:"请输入项目目录绝对路径",vsSave:"保存",vsSaved:"已保存",vsUnsavedTitle:"未保存的更改",vsUnsavedMsg:"当前文件有未保存的更改，确定关闭吗？",vsCloseManyMsg:"有 {n} 个标签未保存，全部保存并关闭？",vsTooLarge:"文件过大：超过 8MB 编辑上限，请用系统程序打开",vsScrollLeft:"向左滚动标签",vsScrollRight:"向右滚动标签",vsReadonly:"只读",vsEmptyHint:"选择项目目录后，从左侧树打开文件开始编辑",vsLoading:"正在加载…",vsBrand:"文件编辑器",vsQuickAccess:"快捷方式",vsFormat:"格式化内容",vsFormatOk:"已格式化",vsFormatFail:"格式化失败：{msg}",vsMenuFile:"文件",vsSaveAs:"另存为…",vsSaveAsTitle:"另存为",vsFileName:"文件名",vsFileNamePlaceholder:"输入文件名，或粘贴绝对路径",vsFileType:"文件类型",vsFilterAll:"所有文件",vsFilterExt:"仅 {ext} 文件",vsSaveAsHint:"浏览到目标文件夹并填写文件名；双击列表中的文件可直接覆盖保存",vsSaveAsExists:"同名文件已存在，保存将覆盖它",vsSaveAsBlockedDirty:"{name} 已在编辑器中打开且有未保存改动，请先保存或关闭它",vsRecentProjects:"最近项目",vsRecentClearAll:"清空全部",vsRecentClearAllTitle:"清空全部最近项目",vsRecentClearAllConfirm:"确定要清空全部最近项目记录吗？此操作不可撤销。",vsRecentCleared:"已清空最近项目",vsRecentForgetTitle:"移除最近项目",vsRecentForgetConfirm:"确定要从最近项目中移除「{name}」吗？此操作不可撤销。",vsRecentForgot:"已移除 {name}",vsRemoveProject:"移出项目",vsRemoveProjectTitle:"移出项目",vsRemoveProjectConfirm:"确定将「{name}」移出项目吗？此操作会从最近项目中移除该目录，并关闭它的文件树（未保存的改动将丢失）。",vsProjectRemoved:"已移出项目",vsProjectGone:"项目目录已不存在，已从最近项目中移除",vsGitHistory:"提交记录",vsGitExpand:"展开提交记录",vsGitCollapse:"收起提交记录",vsGitRefresh:"刷新提交记录",vsGitFiles:"变更文件",vsGitFileDiff:"在新标签页打开此文件变更",vsQuickOpenPlaceholder:"搜索项目内文件（Ctrl+P）",vsLeftTabFiles:"文件",vsLeftTabSearch:"搜索",vsLeftTabGit:"版本控制",vsGitNoRepo:"当前目录不是 Git / SVN 仓库",vsUnfoldEditor:"展开编辑器",vsFoldEditor:"折叠编辑器",vsSearchNeedsProject:"请先打开项目文件夹再使用搜索",vsMenuRecent:"打开最近项目",vsMenuExtensions:"扩展",vsEmptyTitle:"打开一个文件夹开始编辑",vsGrepPlaceholder:"搜索内容（Enter 立即搜）",vsGrepScopePlaceholder:"仅在此文件夹下搜索，如 src/components",vsGrepScopeTitle:"搜索范围：留空 = 整个项目；填写项目内子目录路径可限定搜索范围",vsGrepCase:"区分大小写",vsGrepRegex:"使用正则",vsGrepSummary:"{files} 个文件中 {n} 条结果",vsGrepTruncated:"结果过多，已截断",vsGrepNoResult:"未找到结果",vsGrepOpenAt:"打开并跳到第 {ln} 行",vsSearchTitle:"搜索",vsGrepWholeWord:"全字匹配",vsGrepReplacePlaceholder:"替换",vsReplaceAll:"全部替换",vsReplacePreserveCase:"保留大小写",vsReplaceConfirm:"将把 {files} 个文件中的 {n} 处 “{q}” 替换为 “{r}”，此操作会直接改写磁盘文件且不可撤销。确定继续？",vsReplaceDone:"已在 {files} 个文件中替换 {n} 处",vsReplaceNone:"没有可替换的匹配项",vsReplaceRemoteUnsupported:"远端（ssh）根不支持跨文件批量替换",vsFilesToInclude:"包含的文件",vsFilesToIncludePlaceholder:"要搜索的文件，如 *.ts, src/**/README.md",vsFilesToIncludeTitle:"仅在这些 glob 命中的文件中搜索/替换（逗号分隔，相对项目根）。留空 = 不限。",vsFilesToExclude:"排除的文件",vsFilesToExcludePlaceholder:"要排除的文件或文件夹，如 **/node_modules, !*.min.js",vsFilesToExcludeTitle:"跳过这些 glob 命中的文件/文件夹（逗号分隔，相对项目根）。",vsClearAllResults:"清除所有结果",vsRefreshResults:"重新搜索",vsToggleReplace:"显示/隐藏替换",vsViewModeList:"列表",vsViewModeTree:"树",vsViewModeSwitchTitle:"在列表视图与树视图之间切换",vsSearchIndexing:"正在建立索引…",vsSearchNoResult:"没有匹配的文件",vsSearchTruncated:"结果较多，仅显示前若干条，请补充关键词",vsSaveAll:"全部保存",vsSavedAs:"已另存为 {path}",vsOverwriteMsg:"{path} 已存在，确定覆盖吗？",vsNoDirty:"没有需要保存的修改",vsAllSaved:"已保存 {n} 个文件",vsConflictTitle:"文件已被外部修改",vsConflictMsg:"{name} 在磁盘上已被修改。仍要用当前内容覆盖吗？",vsConflictMsgReload:"放弃对 {name} 的本地修改，改用磁盘上的版本？",vsConflictBadge:"外部已修改",vsReloadedExternal:"{name} 已被外部修改，已重新加载",vsSwitchLoseMsg:"有 {n} 个文件尚未保存，切换项目会丢失这些修改。确定继续吗？",vsReopenLoseMsg:"以其它编码重读会丢失当前未保存的修改，确定继续吗？",vsEncodingSwitched:"已按 {enc} 重新读取",vsBinaryHint:"这是二进制文件，无法以文本方式编辑",vsNewWindow:"新建编辑器窗口",vsFloatWindow:"浮动为独立窗口",vsNewTerminal:"新建终端",vsReplacedOldest:"编辑器窗口已满 8 个：已替换最早的窗口",vsNewWindowLimit:"无法新建编辑器窗口：请稍后重试",vsOpenExternal:"用系统程序打开",vsNoOpenFile:"没有打开的文件",vsTabClose:"关闭",vsTabCloseSave:"保存并关闭",vsTabCloseOthers:"关闭其他",vsTabCloseRight:"关闭右侧标签页",vsTabCloseAll:"关闭全部",terminalRestore:"还原终端",vsNewFile:"新建文件",vsNewFolder:"新建文件夹",vsNewFileName:"文件名",vsNewFolderName:"文件夹名",vsRename:"重命名",vsRenameName:"新名称",vsDelete:"删除",vsDeleteConfirm:"确定删除",vsRefresh:"刷新",vsCollapseAll:"折叠全部",vsExpandAll:"展开全部",vsExpandAllLimited:"目录较多，已展开前 {n} 个文件夹（继续展开会产生大量请求）",vsPickFolderTitle:"选择项目文件夹",vsComputer:"我的电脑",vsUp:"上级",vsEmptyDir:"此文件夹为空",vsPickInput:"选择此路径",vsCancel:"取消",vsPickConfirm:"选择此文件夹",vsNewFolderBtn:"新建文件夹",vsPickEnterHint:"双击文件夹进入；单击选中；“选择此文件夹”取高亮项，无高亮则取当前目录",menuCopyRelPath:"复制相对路径",menuCopyAbsPath:"复制绝对路径",vsAddToSession:"添加到会话",vsAddToSessionOk:"已添加到会话输入框",vsAddToSessionFail:"请先打开对话输入框",goUp:"返回上级",goBack:"后退",goForward:"前进",refreshList:"刷新资源列表",noFolder:"未打开文件夹",goSessionDir:"回到当前会话目录",closeTab:"关闭",clearSearch:"清除搜索",cancel:"取消",confirmOk:"确定",deleteTitle:"确认删除",searchScopeIn:"范围：",myComputer:"我的电脑",navHome:"主文件夹",navGallery:"图库",navThisPc:"此电脑",navQuickAccess:"快速访问",externalInjection:"外部注入",driveLabel:"本地磁盘 ({drive}:)",toastClose:"关闭提示",thisPcDevices:"设备和驱动器",driveCapacity:"{free} 可用，共 {total}",driveTotal:"总大小",driveFree:"可用空间",driveFs:"文件系统",driveTypeFixed:"本地磁盘",driveTypeRemovable:"可移动磁盘",emptyDrives:"（未检测到驱动器）",navExpand:"展开",navCollapse:"折叠",favoritePin:"已固定到快速访问",desktopEntry:"桌面",downloadEntry:"下载",documentEntry:"文档",pictureEntry:"图片",musicEntry:"音乐",videoEntry:"视频",workspaceEntry:"工作区",emptyDir:"（空）",colName:"名称",colSize:"大小",colType:"类型",colModified:"修改日期",typeFolder:"文件夹",typeFile:"文件",renameEntry:"重命名：",confirmDelete:'确认删除 "{name}" ？',brokenLink:"失效软链接",save:"保存",menuEdit:"编辑",txtEditorTitle:"编辑文本 · {name}",txtLoading:"加载中…",txtEditorSub:"文本编辑器",txtUnsaved:"未保存的更改",txtReadError:"读取失败：{msg}",txtDirty:"未保存",txtReadonly:"只读（工作区外）",txtPlaceholder:"在此输入文本…",txtChars:"字符",txtUnsavedTitle:"未保存的改动",txtUnsavedMsg:"该文件有未保存的改动，确定关闭？",txtSaved:"已保存",download:"下载",statusItemsCount:"{count} 个项目",searchTitle:"搜索文件名/内容",searchPlaceholder:"输入关键字…",search:"搜索",searching:"搜索中…",searchCase:"区分大小写",searchRegex:"正则表达式匹配",searchIdle:"在顶部搜索框输入关键字，实时匹配文件名与文件内容。",resultsCount:"{count} 个结果",resultsSuffixTruncated:"（已截断）",hitTitle:"右键在资源管理器中定位\\左键打开",matchContent:"内容匹配",searchReplaceAll:"批量替换",searchReplaceTitle:"确认批量替换",searchReplaceConfirm:"将在 {files} 个文件中替换 {count} 处匹配，此操作不可撤销，确定继续？",searchReplaceBusy:"正在替换…",searchReplaceDone:"已替换 {files} 个文件（{count} 处）",openFolderFirst:"请先打开文件夹",dirCreated:"目录已创建",fileCreated:"文件已创建",renamed:"已重命名",deleted:"已删除",workspaceOutside:"操作被拒绝：该操作仅限工作区内的文件/文件夹",errForbidden:"无权限或操作被拒绝（403）",errNotFound:"文件或目录不存在（404）",errNoRoot:"未打开文件夹：请先选择工作区目录（409）",errTooLarge:"数据过大，超出允许范围（413）",errServer:"服务端处理失败，请稍后重试（500）",errNetwork:"网络请求失败，请检查 host 连接",menuOpen:"打开",menuOpenExternal:"使用系统默认程序打开",menuOpenInEditor:"在文件编辑器中打开",menuCut:"剪切",menuCopy:"复制",menuRename:"重命名",menuDelete:"删除",menuCopyPath:"复制完整路径",menuProperties:"属性",menuCutDone:"已剪切到剪贴板",menuCopyDone:"已复制到剪贴板",menuOpened:"已调用系统程序打开",menuPathCopied:"路径已复制",menuPathCopyFail:"路径复制失败",menuRefresh:"刷新",menuView:"查看",menuSort:"排序方式",expShowNav:"显示导航栏",menuPaste:"粘贴",menuUpload:"上传文件",uploaded:"已上传 {count} 个文件",uploadFailed:"有 {count} 个文件上传失败",menuNew:"新建",menuNewFolder:"文件夹",menuNewFile:"文本文件",viewHuge:"超大图标",sshHosts:"SSH 主机",sshAddHost:"添加主机",sshCancel:"取消",sshName:"显示名",sshAddr:"地址（用户 @ 主机 : 端口）",sshUser:"用户名",sshHostAddr:"主机地址",sshAuth:"认证方式",sshAuthPassword:"口令认证",sshAuthKey:"私钥认证",sshPassword:"SSH 口令",sshKeyPath:"私钥文件路径（支持 ~）",sshSaveAdd:"添加",sshTest:"测试",sshTestConn:"测试",sshDelete:"删除",sshDeleteConfirm:"再点一次确认删除",sshTestOk:"SSH 连接成功",sshTestFail:"SSH 连接失败",sshRequired:"主机地址与用户名为必填项",sshAddSuccess:"主机已添加",sshNewHost:"添加 SSH 主机",sshEdit:"编辑",sshEditTitle:"编辑 SSH 主机",sshHostCaption:"连接远程服务器，浏览文件与登录终端",sshUpdateSuccess:"主机已更新",sshSaveEdit:"保存修改",sshKeepSecret:"（留空则沿用原口令）",sshNoHosts:"还没有主机，点「添加主机」开始",accTitle:"账号管理",accCaption:"管理 Git / SVN 登录凭据，执行命令时自动注入",accListTitle:"已保存账号",accAdd:"添加账号",accNewTitle:"添加账号",accEditTitle:"编辑账号",accEdit:"编辑",accKind:"类型",accKindGit:"Git",accKindSvn:"SVN",accName:"显示名",accHost:"主机",accHostPlaceholder:"例如 github.com 或 113.57.110.41:804",accUrl:"仓库地址（选填）",accUrlPlaceholder:"https://github.com/owner/repo.git",accUrlHint:"留空 = 对该主机的全部仓库生效；填写后按地址前缀匹配，用于同主机多账号。「测试连通」与「写入系统」都需要它。",accUsername:"用户名",accSecret:"口令 / 访问令牌",accSecretKind:"凭据类型",accSecretPassword:"口令",accSecretToken:"访问令牌",accKeepSecret:"（留空则沿用已存口令）",accNote:"备注",accSave:"保存",accCancel:"取消",accDelete:"删除",accDeleteConfirm:"再点一次确认删除",accTest:"测试连通",accTestOk:"连通正常",accTestFail:"连接失败",accApply:"写入系统",accApplyOk:"已写入系统",accApplyHint:"写入系统凭据存储后，命令行与其它 GUI 工具也免密。",accSaved:"账号已保存",accDeleted:"账号已删除",accRequired:"主机与用户名为必填",accSecretRequired:"请填写口令或访问令牌",accEmpty:"还没有账号，点「添加账号」开始",accHasSecret:"已保存凭据",accNoSecret:"未保存凭据",accAllRepos:"该主机全部仓库",accEffective:"当前仓库将使用",accEffectiveNone:"当前仓库无匹配账号（将走系统凭据 / svn 自身缓存）",accCopyIdent:"复制账号标识",accMatchHint:"按主机或仓库地址前缀匹配，未命中时使用系统凭据",accUseCurrent:"用当前仓库填充",accBack:"返回列表",accPick:"从左侧选择一个账号，或点「添加账号」新建",accTip:"凭据仅存于本机插件配置，不会外发；口令不回显，留空即沿用原值。",sshStatusOnline:"已连接",sshStatusOffline:"未连接",sshStatusChecking:"检测中…",sshStatusUnknown:"尚未检测",remoteNoExternal:"远端文件无法用本机程序打开",remoteNoArchive:"远端目录暂不支持压缩 / 解压",remoteNoTerminal:"找不到该远端主机的配置，已在本机目录启动终端（可先在设置里添加该 SSH 主机）",remoteCachedHint:"远端文件已下载到本机临时文件后打开（改动不会回传远端）",sshNavGroup:"SSH 远程",sshEmpty:"尚未添加主机（在此右键添加，或用「新建 ▾」）",viewLarge:"大图标",viewMedium:"中等图标",viewSmall:"小图标",viewList:"列表",viewDetails:"详细信息",viewContent:"内容",viewTiles:"平铺",showExtensions:"显示文件扩展名",cmdPreview:"预览",sortName:"名称",sortModified:"修改日期",sortType:"类型",sortSize:"大小",moved:"已移动",copied:"已复制",createdFolder:"已新建文件夹",createdFile:"已新建文件",newFolderName:"新建文件夹",newFileName:"新建文本文件",propName:"名称",propPath:"路径",propKind:"类型",propSize:"大小",propModified:"修改日期",settings:"设置",settingsSubtitle:"个性化工作台的外观与行为",retry:"重试",taskSrcMissing:"源文件不存在（可能已被移动或删除），已刷新列表：{name}",menuMore:"更多",settingsGroupFiles:"文件",settingsGroupAppearance:"外观",autoSave:"自动保存（编辑停顿 1 秒后写入）",vsFindPlaceholder:"查找",vsReplacePlaceholder:"替换为",vsFindNext:"下一个（Enter）",vsFindPrev:"上一个（Shift+Enter）",vsFindReplace:"替换（Enter）",vsFindReplaceAll:"全部替换",vsFindToggleReplace:"展开 / 收起替换",vsFindClose:"关闭（Esc）",vsFindNoMatch:"无结果",vsFindWord:"全字匹配",vsMenuLocalDiff:"查看本地改动",vsLocalDiffTitle:"未保存改动",vsLocalDiffTooBig:"改动过大，无法生成对比",vsMultiCursorHint:"提示：Alt + 点击 可添加多光标",vsActHide:"隐藏「{name}」",vsActBarBottom:"活动栏移到底部",vsActBarTop:"活动栏移到顶部",vsSideRight:"侧栏移到右侧",vsSideLeft:"侧栏移到左侧",vsMinimap:"编辑器缩略图",vsCloseSave:"保存并关闭",vsCloseDiscard:"不保存关闭",vsCloseSaveAll:"全部保存并关闭",vsCloseDiscardAll:"全部不保存关闭",showHidden:"显示隐藏文件",allowOutsideRoot:"允许操作工作区外的文件 (root 开关)",defaultView:"默认视图",themeMode:"主题",themeAuto:"跟随系统",themeDark:"深色",themeLight:"浅色",accentColor:"强调色",accentReset:"恢复默认",fontFamily:"字体",fontDefault:"默认",fontOptionYahei:"微软雅黑",fontOptionConsolas:"Consolas（等宽）",fontOptionCourier:"Courier New（等宽）",fontOptionGeorgia:"Georgia（衬线）",fontSize:"字号",fontSizeSm:"小",fontSizeMd:"标准",fontSizeLg:"大",fontSizeXl:"特大",shortcutHelp:"快捷键",shortcutHint:"按 ? 随时唤起，按 Esc 关闭",shortcutGlobal:"全局",shortcutFileList:"文件列表",shGlobalHelp:"打开快捷键帮助",shListSelectAll:"全选",shListCopy:"复制",shListCut:"剪切",shListPaste:"粘贴",shListFilter:"聚焦筛选框",shListNewFolder:"新建文件夹",shListDelete:"删除（含确认）",shListRename:"重命名",shListRefresh:"刷新",shListOpen:"打开文件 / 进入目录",shListMove:"移动选中",shListUp:"返回上级目录",shListBack:"浏览后退",shListForward:"浏览前进",undo:"撤销",findReplacePlaceholder:"替换为…",favorites:"收藏",favoriteAdd:"收藏",favoriteRemove:"取消收藏",favoriteAdded:"已收藏",favoriteRemoved:"已取消收藏",emptyFavorites:"（暂无收藏）",menuCompress:"压缩为 .zip",compressed:"已压缩",menuExtract:"解压到当前目录",extracted:"已解压 {count} 个文件",extractFailed:"解压失败",selectedCount:"{count} 项已选",menuMultiDelete:"删除所选 ({count})",menuMultiCut:"剪切所选",menuMultiCopy:"复制所选",menuMultiCompress:"压缩所选",filterPlaceholder:"筛选当前目录…",filterEmpty:"（无匹配）",taskFabTitle:"后台任务",taskPanelTitle:"后台任务",taskRunning:"运行中",taskHistory:"历史",taskClearFinished:"清除已完成",taskClearAll:"清空",taskEmpty:"暂无任务",taskViewLog:"查看日志",taskLogTitle:"任务日志",taskClose:"关闭",taskFieldTarget:"目标",taskStatusRunning:"进行中",taskStatusDone:"完成",taskStatusError:"失败",taskFieldFile:"文件",taskStartTime:"开始",taskEndTime:"结束",taskTotalSpent:"总耗时",taskStepSpent:"耗时",taskRunningLive:"运行中",taskFieldType:"类型",taskMetaFiles:"{count} 项 · {size}",taskArchive:"归档",taskArchiveOpen:"查看归档",taskArchiveTitle:"任务归档",taskArchiveNone:"暂无归档",taskArchiveRecords:"{count} 条记录",taskUploading:"上传文件",taskCompressing:"压缩",taskExtracting:"解压",taskCopying:"复制",taskMoving:"移动",taskDeleting:"删除",taskRenaming:"重命名",gitMenu:"Git",gitAdd:"暂存 (git add)",gitCommit:"提交 (git commit)",gitCommitTitle:"Git 提交",gitCommitPlaceholder:"输入提交信息…",gitCommitted:"已提交",gitAdded:"已暂存",gitDiscard:"还原改动",gitDiscardTitle:"确认还原",gitDiscardMsg:'丢弃 "{name}" 的工作区改动（git checkout --）？',gitDiscarded:"已还原",gitDiff:"查看改动",gitDiffTitle:"Git 改动",gitDiffEmpty:"（无可用改动）",gitDiffClose:"关闭",gitBadgeUntracked:"未跟踪的新文件",gitBadgeAdded:"新添加到暂存区",gitBadgeModified:"已修改",gitBadgeDeleted:"已删除",gitNotRepo:"不在 git 仓库",gitNoChanges:"没有已暂存的改动，无法提交",gitLoading:"加载中…",gitCommitFiles:"将提交 {n} 个文件：",gitCommitConfirm:"确认提交",gitConfig:"配置身份",gitConfigTitle:"Git 身份配置",gitConfigName:"用户名（user.name）",gitConfigNamePlaceholder:"例如：yourname",gitConfigEmail:"邮箱（user.email）",gitConfigEmailPlaceholder:"例如：you@example.com",gitConfigSave:"保存",gitConfigSaved:"已保存 git 全局身份配置",gitPanel:"打开 Git 面板",gitIgnore:"忽略（加入 .gitignore）",gitIgnored:"已忽略",gitPanelTitle:"Git 管理",gitFetch:"获取",gitPull:"拉取",gitPush:"推送",gitLoadMore:"加载更多",gitDiffTruncated:"差异过大，仅显示前 5000 行（完整内容可在编辑器查看）",gitCopyName:"复制名称",gitCopyUrl:"复制 URL",gitCopyMsg:"复制说明",gitCloneHere:"克隆仓库…",gitStatusColon:"当前分支：{branch}",gitLocalRepo:"本地仓库：",gitTabStatus:"更改",gitTabLog:"提交记录",gitTabBranch:"分支",gitTabStash:"暂存区",gitTabCli:"命令",gitClean:"工作区干净，没有待提交的改动",gitAddShort:"暂存",gitUnstage:"取消暂存",gitUnstaged:"已取消暂存",gitStageAll:"全部暂存",gitGroupStaged:"已暂存的更改",gitGroupUnstaged:"更改",gitGroupUntracked:"未跟踪",gitLogEmpty:"（暂无提交记录）",gitBranchNew:"新分支名称",gitCheckout:"切换",gitDelete:"删除",gitBranchCreated:"已创建并切换到分支 {name}",gitBranchDeleteMsg:"确定删除分支 {name}？",gitStashPlaceholder:"暂存说明（可选）",gitStashCreate:"创建暂存",gitStashEmpty:"（暂无暂存记录）",gitStashApply:"应用",gitStashPop:"弹出",gitStashDrop:"删除",gitStashClear:"清空暂存区",gitStashCreated:"已创建暂存",gitStashApplied:"已应用暂存",gitStashPopped:"已弹出暂存",gitStashDropped:"已删除该条暂存",gitStashCleared:"已清空暂存区",gitStashDropMsg:"确定删除暂存 {ref}？",gitStashClearMsg:"确定清空全部暂存记录？此操作不可恢复。",gitCliPlaceholder:"输入 git 子命令，例如 status / log --oneline -5",gitRailChanges:"更改",gitRailHistory:"提交历史",gitRailBranches:"分支",gitRailTags:"标签",gitRailRemotes:"远程",gitRailStash:"储藏",gitRailCli:"命令台",gitHeadDetached:"分离头指针",gitNoUpstream:"无上游分支",gitAheadBehind:"领先 {ahead} · 落后 {behind}",gitSelectFile:"在左侧选择一个文件查看改动",gitDiffUntrackedHint:"未跟踪的新文件：暂存后可查看与 HEAD 的差异",gitCommitMsgPlaceholder:"提交说明…",gitFileHistory:"文件历史",gitBlame:"逐行追溯",gitBlameAuthor:"作者",gitBlameDate:"日期",gitBlameLine:"行",gitBlameEmpty:"（无法读取逐行追溯）",gitFileHistoryEmpty:"（该文件暂无历史）",gitBack:"返回",gitHistoryAll:"全部分支",gitHistoryCurrent:"仅当前分支",gitSelectCommit:"在左侧选择一个提交查看详情",gitCommitDetail:"提交详情",gitCommitHash:"提交哈希",gitCommitAuthor:"作者",gitCommitDate:"提交时间",gitCommitParents:"父提交",gitCommitRefs:"引用",gitCommitChangedFiles:"变更文件（{n}）",gitCommitNoFiles:"（无文件变更）",gitCopyHash:"复制哈希",gitCopyPath:"复制路径",gitCopied:"已复制到剪贴板",gitReset:"重置到此提交",gitResetSoft:"软重置（改动全部保留在暂存区）",gitResetMixed:"混合重置（改动保留在工作区）",gitResetHard:"硬重置（丢弃改动）",gitResetHardMsg:"硬重置会丢弃工作区与暂存区的全部改动，确定继续？",gitResetDone:"已重置到 {hash}",gitRevert:"还原此提交",gitRevertDone:"已还原 {hash}",gitCherryPick:"拣选到当前分支",gitCherryPicked:"已拣选 {hash}",gitCheckoutCommit:"检出此提交",gitCheckoutCommitMsg:"将进入分离头指针状态，确定检出 {hash}？",gitBranchFrom:"新建分支指向此提交",gitBranchFromTitle:"从此提交新建分支",gitBranchFromPlaceholder:"新分支名称",gitBranchRename:"重命名",gitBranchRenameTitle:"重命名当前分支",gitBranchRenamePlaceholder:"新的分支名",gitBranchRenamed:"已重命名为 {name}",gitMergeIntoCurrent:"合并到当前分支",gitMergeDone:"已合并 {name}",gitPushBranch:"推送",gitPushed:"已推送 {name}",gitBranchCurrent:"当前",gitBranchRemoteGroup:"远程分支",gitBranchLocalGroup:"本地分支",gitBranchCreateAndSwitch:"创建并切换",gitTagNew:"新建标签",gitTagNamePlaceholder:"标签名，如 v1.0.0",gitTagTargetPlaceholder:"目标提交（留空为 HEAD）",gitTagMessagePlaceholder:"说明（填写即创建附注标签）",gitTagCreate:"创建",gitTagEmpty:"（暂无标签）",gitTagAnnotated:"附注",gitView:"查看",gitTagCreated:"已创建标签 {name}",gitTagDeleteMsg:"确定删除标签 {name}？",gitTagDeleted:"已删除标签 {name}",gitTagPushed:"已推送标签 {name}",gitTagFetchAll:"从远程获取标签",gitTagFetchAllDone:"已从远程获取标签",gitTagRemoteOnly:"远程",gitTagPull:"拉取",gitTagPulled:"已拉取标签 {name}",gitTagNoRemote:"无远程仓库，无法获取或发布标签",gitCommitViewTitle:"提交对比",gitCommitOpenDiff:"查看 {path} 的差异",gitReleaseBtn:"发布新版本",gitReleaseTitle:"发布新版本（创建附注标签并推送到远程）",gitReleaseName:"版本标签名",gitReleaseTarget:"基于提交（留空为 HEAD）",gitReleaseMsg:"版本说明（必填）",gitReleasePublish:"创建并发布",gitReleaseRequireMsg:"发布版本需填写版本说明",gitReleased:"已发布 {name} 到远程",gitReleaseGhSkip:"GitHub Release 未创建：{reason}",gitRefresh:"刷新",gitTabTags:"标签",gitTabReleases:"版本",gitReleaseChooseTag:"选择已有标签",gitReleaseNotesPlaceholder:"版本说明（将显示在 Release 页面）",gitReleaseCreateForTag:"创建 Release",gitReleaseCreated:"Release 已创建：{url}",gitReleaseLoadSkip:"版本列表不可用：{reason}",gitReleaseEmpty:"暂无版本记录",gitReleaseOpen:"打开",gitRemoteNamePlaceholder:"名称，如 origin",gitRemoteUrlPlaceholder:"地址，如 https://github.com/user/repo.git",gitRemoteAdd:"添加远程",gitRemoteEmpty:"（暂无远程仓库）",gitRemoteAdded:"已添加远程 {name}",gitRemoteRemoveMsg:"确定移除远程 {name}？",gitRemoteRemoved:"已移除远程 {name}",gitRemoteSetUrl:"修改地址",gitRemoteUrlTitle:"修改远程地址",gitRemoteUrlSaved:"已更新远程地址",gitStashView:"查看内容",gitStashNew:"创建储藏",gitStashNone:"（工作区干净，无内容可储藏）",gitOpRunning:"执行中…",gitOpFailed:"操作失败",svnMenu:"SVN",svnPanel:"打开 SVN 管理",svnPanelTitle:"SVN 管理",svnRepo:"工作副本：",svnUpdate:"更新",svnCommitBtn:"提交",svnAdd:"加入版本控制",svnAdded:"已加入版本控制",svnIgnore:"忽略（svn:ignore）",svnRevert:"还原",svnCleanup:"清理",svnResolve:"解决冲突",svnDiff:"比较差异",svnBlame:"追溯",svnCheckout:"检出",svnFailed:"SVN 命令执行失败",svnRailChanges:"本地修改",svnRailLog:"提交日志",svnNoUrl:"未读取到仓库地址",svnRunning:"正在执行…",svnRefresh:"刷新",svnLoading:"加载中…",svnSelectAll:"全选",svnModifiedCount:"本地修改（{n}）",svnNoChanges:"无本地修改",svnCommitPlaceholder:"填写提交说明…",svnCommitSelected:"将提交选中的 {n} 个文件",svnCommitAll:"将提交全部本地修改",svnOutput:"命令输出",svnNoOutput:"（无输出）",svnNoCli:"未检测到 svn 命令行，请先安装 Subversion",svnDone:"SVN 命令已完成",svnUpdateSummaryFrom:"更新完成：r{from} → r{to}，{n} 个条目变更",svnUpdateSummary:"更新完成：{n} 个条目变更，当前版本 r{to}",svnAlreadyLatest:"已是最新版本 r{rev}，没有需要更新的内容",svnLogEmpty:"暂无日志",svnLogToggle:"点击展开 / 收起该次提交详情",svnLogNoPaths:"该提交没有变更文件记录",svnLogOpenDiff:"查看该文件在此次提交中的对比",svnDiffTitle:"差异对比 · ",svnBlameTitle:"追溯 · ",svnCheckoutUrlPlaceholder:"仓库地址（如 https://svn.example.com/svn/repo）",svnCheckoutTargetPlaceholder:"检出到本地目录",repoCloneTitle:"克隆 / 检出仓库",repoCloneKindGit:"Git",repoCloneKindSvn:"SVN",repoCloneTitleGit:"克隆 Git 仓库",repoCloneTitleSvn:"检出 SVN 仓库",repoCloneCaptionGit:"从远程仓库克隆完整副本到本地",repoCloneCaptionSvn:"从 SVN 服务器检出指定版本到本地",repoCloneTargetGit:"将克隆到",repoCloneTargetSvn:"将检出到",repoCloneUrl:"仓库地址",repoCloneUrlGitPlaceholder:"仓库地址（如 https://github.com/owner/repo.git）",repoCloneDir:"目标目录",repoCloneDirPlaceholder:"要克隆到的父目录",repoCloneBrowse:"浏览…",repoCloneName:"子目录名称",repoCloneNamePlaceholder:"留空则按地址推断",repoCloneShallow:"浅克隆（仅最新一次提交）",repoCloneShallowHint:"更快更小，但不含历史",repoCloneRevision:"版本号",repoCloneRevisionPlaceholder:"留空为最新（HEAD）",repoCloneAccount:"账号",repoCloneAccountAuto:"自动匹配（按地址）",repoCloneAccountNew:"新建账号…",repoCloneTargetEmpty:"请填写仓库地址与目标目录",repoCloneRunningGit:"正在克隆 Git 仓库…",repoCloneRunningSvn:"正在检出 SVN 仓库…",repoCloneElapsed:"已用时 {s} 秒",repoCloneKeepOpen:"保持窗口打开，完成后将收到通知。",repoCloneActionGit:"克隆",repoCloneActionSvn:"检出",repoCloneDoneGit:"已克隆仓库：{name}",repoCloneDoneSvn:"已检出仓库：{name}",menuCloneGit:"克隆 Git 仓库…",menuCloneSvn:"检出 SVN 仓库…",svnNotRepoTip:"当前目录不是 SVN 工作副本，可填写上方信息检出仓库。",svnCheckedOut:"已检出仓库",svnStAdded:"已添加",svnStModified:"已修改",svnStDeleted:"已删除",svnStReplaced:"已替换",svnStConflicted:"冲突",svnStMissing:"缺失",svnStObstructed:"受阻",svnStUnversioned:"未版本控制",svnStIgnored:"已忽略",svnStLocked:"已锁定",saveConfig:"保存",recycleBin:"回收站",recycleRestore:"恢复",recycleDelete:"彻底删除",recycleEmpty:"清空回收站",recycleEmptyConfirm:"确定清空回收站？此操作不可恢复。",recycleDeleteConfirm:"确定彻底删除“{name}”？此操作不可恢复。",recycleDeleteConfirmMulti:"确定彻底删除选中的 {count} 项？此操作不可恢复。",recycleEmptying:"正在清空回收站…",recycleEmptyProgress:"清空回收站：剩余 {count} 项",recycleEmptyDone:"回收站已清空",recycleEmptyList:"回收站是空的",recycleRestored:"已恢复到原位置",recycledDeleted:"已彻底删除",terminal:"终端",terminalTitle:"终端",terminalMinimize:"最小化到任务条",terminalCloseTitle:"关闭终端",terminalClose:"关闭",terminalNew:"新建终端",terminalShellSwitch:"切换默认 shell（cmd / powershell）",terminalAdmin:"管理员",terminalAdminNormal:"普通权限",terminalAdminOn:"当前以管理员身份运行：终端内命令拥有管理员权限",terminalAdminOff:"当前为普通权限：终端内命令无法修改系统级设置",terminalAdminHint:"以「管理员身份运行」启动 dsh web，面板内所有终端即拥有管理员权限（终端子进程继承宿主进程权限）。",terminalClear:"清屏",terminalResizeTitle:"拖动缩放终端",terminalDockDragTitle:"点击展开 · 拖动移动 · 右键菜单",terminalDockSessions:"已最小化的终端",terminalDockCloseAll:"全部关闭",terminalTab:"{n}",scrollLeft:"向左滚动",scrollRight:"向右滚动",termFontSmaller:"减小字号",termFontLarger:"增大字号",termInputFailed:"终端输入发送失败：{msg}",termSshBadge:"该终端已登录到远端 SSH 主机",termSshReconnect:"重连",termSshReconnectTitle:"重新登录远端（用已保存的口令 / 密钥自动登录）",termSearchPlaceholder:"在终端输出中搜索…",termSearchCase:"区分大小写",termSearchPrev:"上一个",termSearchNext:"下一个",termSearchClose:"关闭搜索",termCopyHint:"Ctrl+C 复制 · Ctrl+V 粘贴 · Ctrl+F 搜索",menuDownload:"下载文件",menuOpenTerminal:"在终端打开",menuSubagent:"用子代理处理",menuNewSubagent:"新建子代理对话",subagentAsk:"希望子代理做什么？",subagentAskPlaceholder:"描述任务（可留空，稍后在子代理会话中继续）",subagentSpawned:"已在官方子代理会话中打开",subagentFailed:"子代理发起失败",statusDrivesCount:"{count} 个驱动器",statusLoading:"加载中…",statusSearching:"搜索中…",statusTasks:"后台任务",statusTasksRunning:"{count} 个后台任务",statusTermRestore:"点击还原终端窗口"},Er={tabFileWorkbench:"File Workbench",tabFileWorkbenchDesc:"Browse, preview, and search local files, then reference them to the session",tabVSCode:"File Editor",tabVSCodeDesc:"Open a code editor in the right sidebar: browse project tree, multi-tab editing, syntax highlight",tabMenuOpenInEditor:"Open Workspace in File Editor",tabMenuNewEditor:"New Editor Window",tabMenuAnotherEditor:"Open Another Editor Window",tabMenuFloat:"Open as Floating Window",tabMenuDefaultLabel:"Open by default",guideMenuAria:"More ways to open",vsNoProject:"No project folder selected",vsTreeLoading:"Loading project…",vsOpenFolder:"Open Folder",vsFolderPath:"Enter the absolute path of the project folder",vsSave:"Save",vsSaved:"Saved",vsUnsavedTitle:"Unsaved Changes",vsUnsavedMsg:"This file has unsaved changes. Close it anyway?",vsCloseManyMsg:"{n} unsaved tab(s). Save all and close?",vsTooLarge:"File too large: over the 8MB editing limit. Open it with the system app instead",vsScrollLeft:"Scroll tabs left",vsScrollRight:"Scroll tabs right",vsReadonly:"Read-only",vsEmptyHint:"Pick a project folder, then open a file from the left tree to start editing",vsLoading:"Loading…",vsBrand:"File Editor",vsQuickAccess:"Quick Access",vsFormat:"Format Content",vsFormatOk:"Formatted",vsFormatFail:"Format failed: {msg}",vsMenuFile:"File",vsSaveAs:"Save As…",vsSaveAsTitle:"Save As",vsFileName:"File name",vsFileNamePlaceholder:"File name, or paste an absolute path",vsFileType:"File type",vsFilterAll:"All files",vsFilterExt:"{ext} files only",vsSaveAsHint:"Browse to a folder and enter a file name; double-click a listed file to overwrite it directly",vsSaveAsExists:"A file with this name already exists and will be overwritten",vsSaveAsBlockedDirty:"{name} is open in the editor with unsaved changes — save or close it first",vsRecentProjects:"Recent Projects",vsRecentClearAll:"Clear All",vsRecentClearAllTitle:"Clear All Recent Projects",vsRecentClearAllConfirm:"Clear all recent project records? This cannot be undone.",vsRecentCleared:"Recent projects cleared",vsRecentForgetTitle:"Remove from recent projects",vsRecentForgetConfirm:'Remove "{name}" from recent projects? This cannot be undone.',vsRecentForgot:"Removed {name}",vsRemoveProject:"Remove from Project",vsRemoveProjectTitle:"Remove from Project",vsRemoveProjectConfirm:'Remove "{name}" from projects? This removes it from recent projects and closes its file tree (unsaved changes will be lost).',vsProjectRemoved:"Removed from project",vsProjectGone:"Project folder no longer exists; removed from recent projects",vsGitHistory:"History",vsGitExpand:"Show commit history",vsGitCollapse:"Collapse commit history",vsGitRefresh:"Refresh history",vsGitFiles:"Changed files",vsGitFileDiff:"Open this change in a new tab",vsQuickOpenPlaceholder:"Search files by name (Ctrl+P)",vsLeftTabFiles:"Files",vsLeftTabSearch:"Search",vsLeftTabGit:"Version Control",vsGitNoRepo:"This folder is not a Git / SVN repository",vsUnfoldEditor:"Show editor",vsFoldEditor:"Hide editor",vsSearchNeedsProject:"Open a project folder first to use search",vsMenuRecent:"Open Recent",vsMenuExtensions:"Extensions",vsEmptyTitle:"Open a folder to start editing",vsGrepPlaceholder:"Search in files (Enter to run)",vsGrepScopePlaceholder:"Search only in folder, e.g. src/components",vsGrepScopeTitle:"Search scope: empty = whole project; enter a project subfolder path to narrow the search",vsGrepCase:"Match case",vsGrepRegex:"Use regex",vsGrepSummary:"{n} results in {files} files",vsGrepTruncated:"Too many results, truncated",vsGrepNoResult:"No results found",vsGrepOpenAt:"Open and go to line {ln}",vsSearchTitle:"Search",vsGrepWholeWord:"Match whole word",vsGrepReplacePlaceholder:"Replace",vsReplaceAll:"Replace All",vsReplacePreserveCase:"Preserve case",vsReplaceConfirm:"This will replace {n} occurrences of “{q}” with “{r}” across {files} file(s), rewriting files on disk with no undo. Continue?",vsReplaceDone:"Replaced {n} occurrence(s) in {files} file(s)",vsReplaceNone:"Nothing to replace",vsReplaceRemoteUnsupported:"Cross-file replace is not supported on remote (ssh) roots",vsFilesToInclude:"files to include",vsFilesToIncludePlaceholder:"files to search, e.g. *.ts, src/**/README.md",vsFilesToIncludeTitle:"Only search/replace in files matching these globs (comma-separated, relative to project root). Empty = all.",vsFilesToExclude:"files to exclude",vsFilesToExcludePlaceholder:"files or folders to skip, e.g. **/node_modules, !*.min.js",vsFilesToExcludeTitle:"Skip files/folders matching these globs (comma-separated, relative to project root).",vsClearAllResults:"Clear All Results",vsRefreshResults:"Search Again",vsToggleReplace:"Show / Hide Replace",vsViewModeList:"List",vsViewModeTree:"Tree",vsViewModeSwitchTitle:"Switch between list and tree view",vsSearchIndexing:"Indexing…",vsSearchNoResult:"No matching files",vsSearchTruncated:"Lots of matches — showing the first few, refine your keywords",vsSaveAll:"Save All",vsSavedAs:"Saved as {path}",vsOverwriteMsg:"{path} already exists. Overwrite it?",vsNoDirty:"No changes to save",vsAllSaved:"Saved {n} file(s)",vsConflictTitle:"File Changed on Disk",vsConflictMsg:"{name} has changed on disk since it was opened. Overwrite it with your version?",vsConflictMsgReload:"Discard your local changes to {name} and reload from disk?",vsConflictBadge:"Changed on disk",vsReloadedExternal:"{name} changed on disk and has been reloaded",vsSwitchLoseMsg:"{n} file(s) have unsaved changes. Switching projects will discard them. Continue?",vsReopenLoseMsg:"Reopening with another encoding will discard unsaved changes. Continue?",vsEncodingSwitched:"Reopened as {enc}",vsBinaryHint:"This is a binary file and cannot be edited as text",vsNewWindow:"New Editor Window",vsFloatWindow:"Float as Separate Window",vsNewTerminal:"New Terminal",vsReplacedOldest:"Editor window limit (8) reached: the earliest window was replaced",vsNewWindowLimit:"Could not open a new editor window. Please try again.",vsOpenExternal:"Open with system app",vsNoOpenFile:"No open files",vsTabClose:"Close",vsTabCloseSave:"Save and Close",vsTabCloseOthers:"Close Others",vsTabCloseRight:"Close Tabs to the Right",vsTabCloseAll:"Close All",terminalRestore:"Restore terminal",vsNewFile:"New File",vsNewFolder:"New Folder",vsNewFileName:"File name",vsNewFolderName:"Folder name",vsRename:"Rename",vsRenameName:"New name",vsDelete:"Delete",vsDeleteConfirm:"Delete",vsRefresh:"Refresh",vsCollapseAll:"Collapse All",vsExpandAll:"Expand All",vsExpandAllLimited:"Many folders — expanded the first {n} (expanding further would issue too many requests)",vsPickFolderTitle:"Pick Project Folder",vsComputer:"My Computer",vsUp:"Up",vsEmptyDir:"This folder is empty",vsPickInput:"Use this path",vsCancel:"Cancel",vsPickConfirm:"Select This Folder",vsNewFolderBtn:"New Folder",vsPickEnterHint:"Double-click a folder to enter; single click selects it; “Select This Folder” picks the highlighted folder (or the current one)",menuCopyRelPath:"Copy relative path",menuCopyAbsPath:"Copy absolute path",vsAddToSession:"Add to Session",vsAddToSessionOk:"Added to the session input",vsAddToSessionFail:"Open a conversation input first",goUp:"Go Up",goBack:"Back",goForward:"Forward",refreshList:"Refresh resource list",noFolder:"No folder open",goSessionDir:"Go to current session folder",closeTab:"Close",clearSearch:"Clear search",cancel:"Cancel",confirmOk:"OK",deleteTitle:"Confirm delete",searchScopeIn:"In scope: ",myComputer:"My Computer",navHome:"Home",navGallery:"Gallery",navThisPc:"This PC",navQuickAccess:"Quick access",externalInjection:"External injections",driveLabel:"Local Disk ({drive}:)",toastClose:"Close notification",thisPcDevices:"Devices and drives",driveCapacity:"{free} free of {total}",driveTotal:"Total size",driveFree:"Free space",driveFs:"File system",driveTypeFixed:"Local Disk",driveTypeRemovable:"Removable Disk",emptyDrives:"(No drives detected)",navExpand:"Expand",navCollapse:"Collapse",favoritePin:"Pinned to Quick access",desktopEntry:"Desktop",downloadEntry:"Downloads",documentEntry:"Documents",pictureEntry:"Pictures",musicEntry:"Music",videoEntry:"Videos",workspaceEntry:"Workspace",emptyDir:"(empty)",colName:"Name",colSize:"Size",colType:"Type",colModified:"Date modified",typeFolder:"Folder",typeFile:"File",renameEntry:"Rename:",confirmDelete:'Delete "{name}"?',brokenLink:"Broken symlink",save:"Save",menuEdit:"Edit",txtEditorTitle:"Edit Text · {name}",txtLoading:"Loading…",txtEditorSub:"Text editor",txtUnsaved:"Unsaved changes",txtReadError:"Failed to read: {msg}",txtDirty:"Unsaved",txtReadonly:"Read-only (outside workspace)",txtPlaceholder:"Type text here…",txtChars:"chars",txtUnsavedTitle:"Unsaved changes",txtUnsavedMsg:"This file has unsaved changes. Close anyway?",txtSaved:"Saved",download:"Download",menuDownload:"Download",menuOpenTerminal:"Open in Terminal",menuSubagent:"Process with Sub-agent",menuNewSubagent:"New Sub-agent Chat",subagentAsk:"What should the sub-agent do?",subagentAskPlaceholder:"Describe the task (optional; continue in the sub-agent session)",subagentSpawned:"Opened in the official sub-agent session",subagentFailed:"Failed to start sub-agent",statusDrivesCount:"{count} drive(s)",statusLoading:"Loading…",statusSearching:"Searching…",statusTasks:"Background tasks",statusTasksRunning:"{count} running task(s)",statusTermRestore:"Click to restore the terminal window",statusItemsCount:"{count} items",searchTitle:"Search Files & Content",searchPlaceholder:"Enter keywords…",search:"Search",searching:"Searching…",searchCase:"Match case",searchRegex:"Regular expression match",searchIdle:"Type keywords in the top search box to match file names and content live.",resultsCount:"{count} result(s)",resultsSuffixTruncated:" (truncated)",hitTitle:"Right-click to locate in explorer \\ left-click to open",matchContent:"content",searchReplaceAll:"Replace All",searchReplaceTitle:"Confirm batch replace",searchReplaceConfirm:"Replace {count} match(es) across {files} file(s)? This cannot be undone.",searchReplaceBusy:"Replacing…",searchReplaceDone:"Replaced in {files} file(s) ({count} match(es))",openFolderFirst:"Open a folder first",dirCreated:"Directory created",fileCreated:"File created",renamed:"Renamed",deleted:"Deleted",workspaceOutside:"Operation denied: only allowed for files/folders inside the workspace",errForbidden:"Forbidden: no permission or denied (403)",errNotFound:"File or directory not found (404)",errNoRoot:"No workspace root set — open a folder first (409)",errTooLarge:"Payload too large, exceeds allowed limit (413)",errServer:"Server error, please retry later (500)",errNetwork:"Network request failed, check your host connection",menuOpen:"Open",menuOpenExternal:"Open with default app",menuOpenInEditor:"Open in File Editor",menuCut:"Cut",menuCopy:"Copy",menuRename:"Rename",menuDelete:"Delete",menuCopyPath:"Copy full path",menuProperties:"Properties",menuCutDone:"Cut to clipboard",menuCopyDone:"Copied to clipboard",menuOpened:"Opened with system default app",menuPathCopied:"Path copied",menuPathCopyFail:"Failed to copy path",menuRefresh:"Refresh",menuView:"View",menuSort:"Sort by",expShowNav:"Show navigation",menuPaste:"Paste",menuUpload:"Upload Files",uploaded:"Uploaded {count} file(s)",uploadFailed:"{count} file(s) failed to upload",menuNew:"New",menuNewFolder:"Folder",menuNewFile:"Text Document",viewHuge:"Extra large icons",sshHosts:"SSH Hosts",sshAddHost:"Add Host",sshCancel:"Cancel",sshName:"Display name",sshAddr:"Address (user @ host : port)",sshUser:"Username",sshHostAddr:"Host address",sshAuth:"Auth method",sshAuthPassword:"Password auth",sshAuthKey:"Private key auth",sshPassword:"SSH password",sshKeyPath:"Private key path (supports ~)",sshSaveAdd:"Add",sshTest:"Test",sshTestConn:"Test",sshDelete:"Delete",sshDeleteConfirm:"Click again to confirm",sshTestOk:"SSH connection OK",sshTestFail:"SSH connection failed",sshRequired:"Host address and username are required",sshAddSuccess:"Host added",sshNewHost:"Add SSH Host",sshEdit:"Edit",sshEditTitle:"Edit SSH Host",sshHostCaption:"Connect a remote server for file browsing and terminal",sshUpdateSuccess:"Host updated",sshSaveEdit:"Save Changes",sshKeepSecret:"(leave blank to keep existing password)",sshNoHosts:"No hosts yet — click “Add Host” to begin",accTitle:"Accounts",accCaption:"Manage Git / SVN credentials — injected automatically when running commands",accListTitle:"Saved accounts",accAdd:"Add account",accNewTitle:"Add account",accEditTitle:"Edit account",accEdit:"Edit",accKind:"Type",accKindGit:"Git",accKindSvn:"SVN",accName:"Display name",accHost:"Host",accHostPlaceholder:"e.g. github.com or 113.57.110.41:804",accUrl:"Repository URL (optional)",accUrlPlaceholder:"https://github.com/owner/repo.git",accUrlHint:"Leave blank to apply to every repository on this host; fill it in to match by URL prefix (multiple accounts per host). Test & Apply need it.",accUsername:"Username",accSecret:"Password / access token",accSecretKind:"Credential type",accSecretPassword:"Password",accSecretToken:"Access token",accKeepSecret:"(leave blank to keep the saved secret)",accNote:"Note",accSave:"Save",accCancel:"Cancel",accDelete:"Delete",accDeleteConfirm:"Click again to confirm",accTest:"Test",accTestOk:"Connection OK",accTestFail:"Connection failed",accApply:"Apply to system",accApplyOk:"Applied to system",accApplyHint:"Write the credential into the system store so the CLI and other GUI tools are prompted no more.",accSaved:"Account saved",accDeleted:"Account deleted",accRequired:"Host and username are required",accSecretRequired:"Password or access token is required",accEmpty:"No accounts yet — click “Add account” to begin",accHasSecret:"Secret saved",accNoSecret:"No secret saved",accAllRepos:"all repositories on this host",accEffective:"This repo will use",accEffectiveNone:"No matching account for this repo (falls back to system credentials / svn cache)",accMatchHint:"Matched by host or repository URL prefix; system credentials are used when nothing matches.",accCopyIdent:"Copy account id",accUseCurrent:"Fill from current repo",accBack:"Back to list",accPick:"Pick an account on the left, or click “Add account”",accTip:"Credentials live only in this plugin's local config and are never sent out; the secret is never echoed — leave it blank to keep the current one.",sshStatusOnline:"Connected",sshStatusOffline:"Disconnected",sshStatusChecking:"Checking…",sshStatusUnknown:"Not checked",remoteNoExternal:"Remote files cannot be opened with local programs",remoteNoArchive:"Compress / extract is not supported on remote directories yet",remoteNoTerminal:"Remote host config not found — started the terminal in a local directory (add the SSH host in Settings first)",remoteCachedHint:"Remote file downloaded to a local temp file and opened (edits are not written back)",sshNavGroup:"SSH Remote",sshEmpty:"No hosts yet — right-click here to add one, or use “New ▾”",viewLarge:"Large icons",viewMedium:"Medium icons",viewSmall:"Small icons",viewList:"List",viewDetails:"Details",viewContent:"Content",viewTiles:"Tiles",showExtensions:"File name extensions",cmdPreview:"Preview",sortName:"Name",sortModified:"Date modified",sortType:"Type",sortSize:"Size",moved:"Moved",copied:"Copied",createdFolder:"Folder created",createdFile:"File created",newFolderName:"New Folder",newFileName:"New Text Document",propName:"Name",propPath:"Path",propKind:"Type",propSize:"Size",propModified:"Date modified",settings:"Settings",settingsSubtitle:"Personalize the workbench look & behavior",retry:"Retry",taskSrcMissing:"Source no longer exists (it may have been moved or deleted); list refreshed: {name}",menuMore:"More",settingsGroupFiles:"Files",settingsGroupAppearance:"Appearance",autoSave:"Auto save (write 1s after edits pause)",vsFindPlaceholder:"Find",vsReplacePlaceholder:"Replace with",vsFindNext:"Next (Enter)",vsFindPrev:"Previous (Shift+Enter)",vsFindReplace:"Replace (Enter)",vsFindReplaceAll:"Replace All",vsFindToggleReplace:"Toggle replace",vsFindClose:"Close (Esc)",vsFindNoMatch:"No results",vsFindWord:"Whole word",vsMenuLocalDiff:"View Local Changes",vsLocalDiffTitle:"Unsaved Changes",vsLocalDiffTooBig:"Changes too large to diff",vsMultiCursorHint:"Tip: Alt+Click adds more cursors",vsActHide:'Hide "{name}"',vsActBarBottom:"Move Activity Bar to Bottom",vsActBarTop:"Move Activity Bar to Top",vsSideRight:"Move Side Bar to Right",vsSideLeft:"Move Side Bar to Left",vsMinimap:"Editor Thumbnail",vsCloseSave:"Save and Close",vsCloseDiscard:"Close without Saving",vsCloseSaveAll:"Save All and Close",vsCloseDiscardAll:"Close All without Saving",showHidden:"Show hidden files",allowOutsideRoot:"Operate on files outside the workspace (root toggle)",defaultView:"Default view",themeMode:"Theme",themeAuto:"Follow system",themeDark:"Dark",themeLight:"Light",accentColor:"Accent color",accentReset:"Reset",fontFamily:"Font",fontDefault:"Default",fontOptionYahei:"Microsoft YaHei",fontOptionConsolas:"Consolas (monospace)",fontOptionCourier:"Courier New (monospace)",fontOptionGeorgia:"Georgia (serif)",fontSize:"Font size",fontSizeSm:"Small",fontSizeMd:"Medium",fontSizeLg:"Large",fontSizeXl:"Extra large",shortcutHelp:"Keyboard Shortcuts",shortcutHint:"Press ? anytime to show, Esc to close",shortcutGlobal:"Global",shortcutFileList:"File List",shGlobalHelp:"Show shortcut help",shListSelectAll:"Select all",shListCopy:"Copy",shListCut:"Cut",shListPaste:"Paste",shListFilter:"Focus filter box",shListNewFolder:"New folder",shListDelete:"Delete (with confirm)",shListRename:"Rename",shListRefresh:"Refresh",shListOpen:"Open file / enter folder",shListMove:"Move selection",shListUp:"Go to parent folder",shListBack:"Browse back",shListForward:"Browse forward",undo:"Undo",findReplacePlaceholder:"Replace with…",favorites:"Favorites",favoriteAdd:"Favorites",favoriteRemove:"Remove from favorites",favoriteAdded:"Added to favorites",favoriteRemoved:"Removed from favorites",emptyFavorites:"(no favorites)",menuCompress:"Compress to .zip",compressed:"Compressed",menuExtract:"Extract to current folder",extracted:"Extracted {count} file(s)",extractFailed:"Extraction failed",selectedCount:"{count} item(s) selected",menuMultiDelete:"Delete selected ({count})",menuMultiCut:"Cut selected",menuMultiCopy:"Copy selected",menuMultiCompress:"Compress selected",filterPlaceholder:"Filter this folder…",filterEmpty:"(no match)",taskFabTitle:"Background tasks",taskPanelTitle:"Background tasks",taskRunning:"Running",taskHistory:"History",taskClearFinished:"Clear finished",taskClearAll:"Clear all",taskEmpty:"No tasks",taskViewLog:"View log",taskLogTitle:"Task log",taskClose:"Close",taskFieldTarget:"Target",taskStatusRunning:"Running",taskStatusDone:"Done",taskStatusError:"Failed",taskFieldFile:"File",taskStartTime:"Start",taskEndTime:"End",taskTotalSpent:"Total time",taskStepSpent:"Spent",taskRunningLive:"Running",taskFieldType:"Type",taskMetaFiles:"{count} files · {size}",taskArchive:"Archive",taskArchiveOpen:"View Archives",taskArchiveTitle:"Task Archives",taskArchiveNone:"No archives",taskArchiveRecords:"{count} records",taskUploading:"Upload file",taskCompressing:"Compress",taskExtracting:"Extract",taskCopying:"Copy",taskMoving:"Move",taskDeleting:"Delete",taskRenaming:"Rename",gitMenu:"Git",gitAdd:"Stage (git add)",gitCommit:"Commit (git commit)",gitCommitTitle:"Git commit",gitCommitPlaceholder:"Enter commit message…",gitCommitted:"Committed",gitAdded:"Staged",gitDiscard:"Discard changes",gitDiscardTitle:"Confirm discard",gitDiscardMsg:'Discard worktree changes of "{name}" (git checkout --)?',gitDiscarded:"Discarded",gitDiff:"View changes",gitDiffTitle:"Git changes",gitDiffEmpty:"(no changes available)",gitDiffClose:"Close",gitBadgeUntracked:"Untracked new file",gitBadgeAdded:"Newly staged",gitBadgeModified:"Modified",gitBadgeDeleted:"Deleted",gitNotRepo:"Not in a git repository",gitNoChanges:"Nothing staged, nothing to commit",gitLoading:"Loading…",gitCommitFiles:"Committing {n} file(s):",gitCommitConfirm:"Commit",gitConfig:"Configure identity",gitConfigTitle:"Git identity",gitConfigName:"Username (user.name)",gitConfigNamePlaceholder:"e.g. yourname",gitConfigEmail:"Email (user.email)",gitConfigEmailPlaceholder:"e.g. you@example.com",gitConfigSave:"Save",gitConfigSaved:"Git global identity saved",gitPanel:"Open Git Panel",gitIgnore:"Ignore (add to .gitignore)",gitIgnored:"Ignored",gitPanelTitle:"Git Manager",gitFetch:"Fetch",gitPull:"Pull",gitPush:"Push",gitLoadMore:"Load more",gitDiffTruncated:"Diff too large — showing the first 5000 lines (open in the editor for the full content)",gitCopyName:"Copy name",gitCopyUrl:"Copy URL",gitCopyMsg:"Copy message",gitCloneHere:"Clone repository…",gitStatusColon:"Branch: {branch}",gitLocalRepo:"Local repo: ",gitTabStatus:"Changes",gitTabLog:"Log",gitTabBranch:"Branches",gitTabStash:"Stash",gitTabCli:"Command",gitClean:"Working tree clean, nothing to commit",gitAddShort:"Stage",gitUnstage:"Unstage",gitUnstaged:"Unstaged",gitStageAll:"Stage All",gitGroupStaged:"Staged changes",gitGroupUnstaged:"Changes",gitGroupUntracked:"Untracked",gitLogEmpty:"(no commits yet)",gitBranchNew:"New branch name",gitCheckout:"Checkout",gitDelete:"Delete",gitBranchCreated:"Branch {name} created and checked out",gitBranchDeleteMsg:"Delete branch {name}?",gitStashPlaceholder:"Stash message (optional)",gitStashCreate:"Create Stash",gitStashEmpty:"(no stashes)",gitStashApply:"Apply",gitStashPop:"Pop",gitStashDrop:"Drop",gitStashClear:"Clear Stash",gitStashCreated:"Stash created",gitStashApplied:"Stash applied",gitStashPopped:"Stash popped",gitStashDropped:"Stash dropped",gitStashCleared:"Stash cleared",gitStashDropMsg:"Drop stash {ref}?",gitStashClearMsg:"Clear all stashes? This cannot be undone.",gitCliPlaceholder:"Enter a git subcommand, e.g. status / log --oneline -5",gitRailChanges:"Changes",gitRailHistory:"History",gitRailBranches:"Branches",gitRailTags:"Tags",gitRailRemotes:"Remotes",gitRailStash:"Stashes",gitRailCli:"Console",gitHeadDetached:"Detached HEAD",gitNoUpstream:"No upstream branch",gitAheadBehind:"Ahead {ahead} · Behind {behind}",gitSelectFile:"Select a file on the left to view changes",gitDiffUntrackedHint:"Untracked file: stage it to see the diff against HEAD",gitCommitMsgPlaceholder:"Commit message…",gitFileHistory:"File history",gitBlame:"Blame",gitBlameAuthor:"Author",gitBlameDate:"Date",gitBlameLine:"Line",gitBlameEmpty:"(blame unavailable)",gitFileHistoryEmpty:"(no history for this file)",gitBack:"Back",gitHistoryAll:"All branches",gitHistoryCurrent:"Current branch",gitSelectCommit:"Select a commit on the left to see details",gitCommitDetail:"Commit details",gitCommitHash:"Commit",gitCommitAuthor:"Author",gitCommitDate:"Date",gitCommitParents:"Parents",gitCommitRefs:"Refs",gitCommitChangedFiles:"Changed files ({n})",gitCommitNoFiles:"(no file changes)",gitCopyHash:"Copy hash",gitCopyPath:"Copy path",gitCopied:"Copied to clipboard",gitReset:"Reset to this commit",gitResetSoft:"Soft (keep changes staged)",gitResetMixed:"Mixed (keep changes in worktree)",gitResetHard:"Hard (discard changes)",gitResetHardMsg:"Hard reset discards all worktree and staged changes. Continue?",gitResetDone:"Reset to {hash}",gitRevert:"Revert this commit",gitRevertDone:"Reverted {hash}",gitCherryPick:"Cherry-pick onto current",gitCherryPicked:"Cherry-picked {hash}",gitCheckoutCommit:"Checkout this commit",gitCheckoutCommitMsg:"This enters detached HEAD. Checkout {hash}?",gitBranchFrom:"New branch at this commit",gitBranchFromTitle:"New branch at this commit",gitBranchFromPlaceholder:"New branch name",gitBranchRename:"Rename",gitBranchRenameTitle:"Rename current branch",gitBranchRenamePlaceholder:"New branch name",gitBranchRenamed:"Renamed to {name}",gitMergeIntoCurrent:"Merge into current",gitMergeDone:"Merged {name}",gitPushBranch:"Push",gitPushed:"Pushed {name}",gitBranchCurrent:"current",gitBranchRemoteGroup:"Remote branches",gitBranchLocalGroup:"Local branches",gitBranchCreateAndSwitch:"Create & switch",gitTagNew:"New tag",gitTagNamePlaceholder:"Tag name, e.g. v1.0.0",gitTagTargetPlaceholder:"Target commit (empty = HEAD)",gitTagMessagePlaceholder:"Message (annotated tag when filled)",gitTagCreate:"Create",gitTagEmpty:"(no tags)",gitTagAnnotated:"annotated",gitView:"View",gitTagCreated:"Tag {name} created",gitTagDeleteMsg:"Delete tag {name}?",gitTagDeleted:"Deleted {name}",gitTagPushed:"Tag {name} pushed",gitTagFetchAll:"Fetch tags from remote",gitTagFetchAllDone:"Fetched tags from remote",gitTagRemoteOnly:"remote",gitTagPull:"Fetch",gitTagPulled:"Fetched tag {name}",gitTagNoRemote:"No remote repo; cannot fetch or publish tags",gitCommitViewTitle:"Commit diff",gitCommitOpenDiff:"View diff of {path}",gitReleaseBtn:"Publish release",gitReleaseTitle:"Publish release (annotated tag + push to remote)",gitReleaseName:"Tag name",gitReleaseTarget:"Based on commit (empty = HEAD)",gitReleaseMsg:"Release notes (required)",gitReleasePublish:"Create & publish",gitReleaseRequireMsg:"Release notes are required",gitReleased:"Published {name} to remote",gitReleaseGhSkip:"GitHub Release not created: {reason}",gitRefresh:"Refresh",gitTabTags:"Tags",gitTabReleases:"Releases",gitReleaseChooseTag:"Choose an existing tag",gitReleaseNotesPlaceholder:"Release notes (shown on the Release page)",gitReleaseCreateForTag:"Create Release",gitReleaseCreated:"Release created: {url}",gitReleaseLoadSkip:"Releases unavailable: {reason}",gitReleaseEmpty:"No releases yet",gitReleaseOpen:"Open",gitRemoteNamePlaceholder:"Name, e.g. origin",gitRemoteUrlPlaceholder:"URL, e.g. https://github.com/user/repo.git",gitRemoteAdd:"Add remote",gitRemoteEmpty:"(no remotes)",gitRemoteAdded:"Remote {name} added",gitRemoteRemoveMsg:"Remove remote {name}?",gitRemoteRemoved:"Remote {name} removed",gitRemoteSetUrl:"Set URL",gitRemoteUrlTitle:"Set remote URL",gitRemoteUrlSaved:"Remote URL updated",gitStashView:"View contents",gitStashNew:"Create stash",gitStashNone:"(worktree clean, nothing to stash)",gitOpRunning:"Running…",gitOpFailed:"Operation failed",svnMenu:"SVN",svnPanel:"Open SVN Manager",svnPanelTitle:"SVN Manager",svnRepo:"Working copy: ",svnUpdate:"Update",svnCommitBtn:"Commit",svnAdd:"Add",svnAdded:"Added to version control",svnIgnore:"Ignore (svn:ignore)",svnRevert:"Revert",svnCleanup:"Clean up",svnResolve:"Resolve",svnDiff:"Diff",svnBlame:"Blame",svnCheckout:"Checkout",svnFailed:"SVN command failed",svnRailChanges:"Changes",svnRailLog:"Commit log",svnNoUrl:"Repository URL unavailable",svnRunning:"Running…",svnRefresh:"Refresh",svnLoading:"Loading…",svnSelectAll:"Select all",svnModifiedCount:"Local changes ({n})",svnNoChanges:"No local changes",svnCommitPlaceholder:"Enter commit message…",svnCommitSelected:"Will commit {n} selected file(s)",svnCommitAll:"Will commit all local changes",svnOutput:"Command output",svnNoOutput:"(no output)",svnNoCli:"svn CLI not found; please install Subversion",svnDone:"SVN command finished",svnUpdateSummaryFrom:"Update complete: r{from} → r{to}, {n} item(s) changed",svnUpdateSummary:"Update complete: {n} item(s) changed, now at r{to}",svnAlreadyLatest:"Already up to date at r{rev}; nothing to update",svnLogEmpty:"No log yet",svnLogToggle:"Click to expand / collapse this commit",svnLogNoPaths:"No changed files recorded for this commit",svnLogOpenDiff:"Show this file's diff in this commit",svnDiffTitle:"Diff · ",svnBlameTitle:"Blame · ",svnCheckoutUrlPlaceholder:"Repository URL (e.g. https://svn.example.com/svn/repo)",svnCheckoutTargetPlaceholder:"Checkout into local directory",repoCloneTitle:"Clone / Checkout Repository",repoCloneKindGit:"Git",repoCloneKindSvn:"SVN",repoCloneTitleGit:"Clone Git Repository",repoCloneTitleSvn:"Checkout SVN Repository",repoCloneCaptionGit:"Clone a full copy of a remote repository to local",repoCloneCaptionSvn:"Check out a specific revision from an SVN server",repoCloneTargetGit:"Will clone into",repoCloneTargetSvn:"Will check out into",repoCloneUrl:"Repository URL",repoCloneUrlGitPlaceholder:"Repository URL (e.g. https://github.com/owner/repo.git)",repoCloneDir:"Target directory",repoCloneDirPlaceholder:"Parent directory to clone into",repoCloneBrowse:"Browse…",repoCloneName:"Subdirectory name",repoCloneNamePlaceholder:"Leave empty to infer from URL",repoCloneShallow:"Shallow clone (latest commit only)",repoCloneShallowHint:"Faster and smaller, but without history",repoCloneRevision:"Revision",repoCloneRevisionPlaceholder:"Leave empty for latest (HEAD)",repoCloneAccount:"Account",repoCloneAccountAuto:"Auto (match by URL)",repoCloneAccountNew:"New account…",repoCloneTargetEmpty:"Please fill in the repository URL and target directory",repoCloneRunningGit:"Cloning Git repository…",repoCloneRunningSvn:"Checking out SVN repository…",repoCloneElapsed:"Elapsed {s}s",repoCloneKeepOpen:"Keep this window open; you will be notified when done.",repoCloneActionGit:"Clone",repoCloneActionSvn:"Checkout",repoCloneDoneGit:"Repository cloned: {name}",repoCloneDoneSvn:"Repository checked out: {name}",menuCloneGit:"Clone Git Repository…",menuCloneSvn:"Checkout SVN Repository…",svnNotRepoTip:"Not an SVN working copy. Fill in the form above to check out a repository.",svnCheckedOut:"Repository checked out",svnStAdded:"Added",svnStModified:"Modified",svnStDeleted:"Deleted",svnStReplaced:"Replaced",svnStConflicted:"Conflicted",svnStMissing:"Missing",svnStObstructed:"Obstructed",svnStUnversioned:"Unversioned",svnStIgnored:"Ignored",svnStLocked:"Locked",saveConfig:"Save",recycleBin:"Recycle Bin",recycleRestore:"Restore",recycleDelete:"Delete permanently",recycleEmpty:"Empty Recycle Bin",recycleEmptyConfirm:"Empty the Recycle Bin? This cannot be undone.",recycleDeleteConfirm:'Permanently delete "{name}"? This cannot be undone.',recycleDeleteConfirmMulti:"Permanently delete the {count} selected items? This cannot be undone.",recycleEmptying:"Emptying Recycle Bin…",recycleEmptyProgress:"Emptying Recycle Bin: {count} item(s) left",recycleEmptyDone:"Recycle Bin emptied",recycleEmptyList:"The Recycle Bin is empty",recycleRestored:"Restored to original location",recycledDeleted:"Permanently deleted",terminal:"Terminal",terminalTitle:"Terminal",terminalMinimize:"Minimize to task bar",terminalCloseTitle:"Close terminal",terminalClose:"Close",terminalNew:"New terminal",terminalShellSwitch:"Switch default shell (cmd / powershell)",terminalAdmin:"Administrator",terminalAdminNormal:"Standard",terminalAdminOn:"Running as administrator — commands here have admin rights",terminalAdminOff:"Standard privileges — commands here cannot change system-level settings",terminalAdminHint:'Launch dsh web as administrator (right-click the launcher → "Run as administrator") so every terminal in the panel gets admin rights — the shell inherits the host process token.',terminalClear:"Clear screen",terminalResizeTitle:"Drag to resize terminal",terminalDockDragTitle:"Click to expand · drag to move · right-click for menu",terminalDockSessions:"Minimized terminals",terminalDockCloseAll:"Close all",terminalTab:"{n}",scrollLeft:"Scroll left",scrollRight:"Scroll right",termFontSmaller:"Smaller font",termFontLarger:"Larger font",termInputFailed:"Terminal input failed: {msg}",termSshBadge:"This terminal is logged in to a remote SSH host",termSshReconnect:"Reconnect",termSshReconnectTitle:"Log in to the remote host again (auto, using the saved password / key)",termSearchPlaceholder:"Search terminal output…",termSearchCase:"Match case",termSearchPrev:"Previous",termSearchNext:"Next",termSearchClose:"Close search",termCopyHint:"Ctrl+C copy · Ctrl+V paste · Ctrl+F search"};function Vf(t,e){return t===void 0?"":e?t.replace(/\{([^}]+)\}/g,(n,i)=>e[i]!==void 0?String(e[i]):`{${i}}`):t}function zf(t,e){return(t.toLowerCase().startsWith("zh")?jf:Er)[e]??Er[e]}function Ll(){return typeof window<"u"?window.__DSH_FILE_WORKBENCH__?.locale:void 0}function Mc(){const t=Ll()?.getSnapshot()?.active;return t||(typeof navigator<"u"&&navigator.language?navigator.language:"en")}const so=m(Mc());if(typeof window<"u"){const t=Ll();t&&typeof t.subscribe=="function"&&t.subscribe(()=>{so.value=Mc()})}function Oc(t,e,n){return Vf(zf(t,e),n)}function Bt(){const t=m(so.value.toLowerCase().startsWith("zh"));if(typeof window<"u"){const e=Ll();e&&typeof e.subscribe=="function"&&e.subscribe(()=>{t.value=so.value.toLowerCase().startsWith("zh")})}return{locale:kr(so),isZh:kr(t),t:(e,n)=>Oc(so.value,e,n)}}function y(t,e){return Oc(so.value,t,e)}const Lc={home:'<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',up:'<line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 11 12 4 19 11"/>',compass:'<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',folder:'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',folderOpen:'<path d="M6 14l1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"/>',search:'<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',chat:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',bot:'<rect x="4" y="9" width="16" height="11" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M10 6v3"/><line x1="8" y1="14" x2="9" y2="14"/><line x1="15" y1="14" x2="16" y2="14"/><line x1="12" y1="14.5" x2="12" y2="18"/>',gear:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>',terminal:'<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>',sun:'<circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/><line x1="4.5" y1="4.5" x2="6.5" y2="6.5"/><line x1="17.5" y1="17.5" x2="19.5" y2="19.5"/><line x1="4.5" y1="19.5" x2="6.5" y2="17.5"/><line x1="17.5" y1="6.5" x2="19.5" y2="4.5"/>',moon:'<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',refresh:'<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>',star:'<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',close:'<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',file:'<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/>',fileText:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',video:'<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>',music:'<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',archive:'<polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/>',grid:'<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',viewList:'<path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/>',viewDetails:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 9v12"/>',code:'<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',trash:'<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',edit:'<path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z"/><path d="M15 5l4 4"/>',cut:'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="8.12" y1="8.12" x2="15.88" y2="15.88"/><line x1="15.88" y1="8.12" x2="8.12" y2="15.88"/>',copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>',paste:'<path d="M6 9V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4"/><rect x="4" y="7" width="16" height="14" rx="2"/><path d="M9 12h6"/><path d="M9 16h6"/>',eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',eyeOff:'<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>',undo:'<path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-15-6.7L3 13"/>',redo:'<path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 15-6.7L21 13"/>',print:'<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',pin:'<path d="M12 17v5"/><path d="M9 3h6l1 6a2 2 0 0 0 2 2h1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2h1a2 2 0 0 0 2-2z"/>',globe:'<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/>',sparkle:'<path d="M12 3l1.9 4.6 4.6 1.9-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9z"/><circle cx="18.5" cy="5.5" r="1"/>',bug:'<rect x="8" y="6" width="8" height="14" rx="4"/><path d="M19 7l-3 2M5 7l3 2M19 17l-3-2M5 17l3-2M3 12h4M17 12h4"/><path d="M12 6V3"/>',sync:'<path d="M21 2v6h-6"/><path d="M3 22v-6h6"/><path d="M21 8a9 9 0 0 0-14.14-5.86L3 5.96"/><path d="M3 16a9 9 0 0 0 14.14 5.86L21 18.04"/>',arrowRight:'<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',arrowLeft:'<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 5 5 12 12 19"/>',warning:'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',chevronLeft:'<polyline points="15 18 9 12 15 6"/>',chevronRight:'<polyline points="9 18 15 12 9 6"/>',chevronsLeft:'<polyline points="11 17 6 12 11 7"/><polyline points="18 17 13 12 18 7"/>',chevronsRight:'<polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/>',chevronUp:'<polyline points="18 15 12 9 6 15"/>',chevronDown:'<polyline points="6 9 12 15 18 9"/>',chevronsUp:'<polyline points="17 11 12 6 7 11"/><polyline points="17 18 12 13 7 18"/>',chevronsDown:'<polyline points="7 6 12 11 17 6"/><polyline points="7 13 12 18 17 13"/>',external:'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>',fileOut:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M11 15c0-4.5-2.5-7-7-7"/><polyline points="7 5 4 8 7 11"/>',info:'<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',monitor:'<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',sort:'<path d="M3 6h18"/><path d="M6 12h12"/><path d="M9 18h6"/>',message:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',brain:'<path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z"/>',paperclip:'<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/>',check:'<polyline points="20 6 9 17 4 12"/>',save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>',plus:'<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',panellayout:'<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="14" y1="3" x2="14" y2="11"/><line x1="14" y1="15" x2="14" y2="21"/>',hardDrive:'<line x1="22" y1="12" x2="2" y2="12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" y1="16" x2="6.01" y2="16"/><line x1="10" y1="16" x2="10.01" y2="16"/>',git:'<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',tasks:'<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>',clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',activity:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',float:'<path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/><circle cx="9" cy="9" r="2"/><path d="M4 14h6"/>',dock:'<path d="M12 17v5"/><path d="M14 9V4h4V2H6v2h4v5l-2 2v1h8v-1z"/><path d="M17 5h3"/>',fileWord:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M8 17l2-7 2 4 2-4 2 7"/>',fileExcel:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 12l6 6M15 12l-6 6"/>',merge:'<circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/>',tag:'<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>',stash:'<path d="M21 8v13H3V8"/><path d="M1 3h22v5H1z"/><line x1="10" y1="12" x2="14" y2="12"/>',commit:'<circle cx="12" cy="12" r="4"/><line x1="1.05" y1="12" x2="7" y2="12"/><line x1="17.01" y1="12" x2="22.96" y2="12"/>',svn:'<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h10"/><circle cx="19" cy="17" r="2"/>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',mail:'<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',inbox:'<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',send:'<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',bookmark:'<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',unlock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>',key:'<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>',heart:'<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',flag:'<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>',bell:'<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',layers:'<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',database:'<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>',server:'<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>',cloud:'<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>',cloudUpload:'<polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>',cloudDownload:'<polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>',palette:'<circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.436-.652-.436-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.504 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>',pieChart:'<path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',barChart:'<line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>',trendingUp:'<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',trendingDown:'<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/>',box:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',package:'<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',rocket:'<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',target:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',crosshair:'<circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/>',sliders:'<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>',filter:'<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',zap:'<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',flashlight:'<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/><path d="M6.39 15.5 4 17v3h16v-3l-2.39-1.5"/>',map:'<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>',landmark:'<line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/>',wifi:'<path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>',battery:'<rect x="1" y="6" width="18" height="12" rx="2"/><line x1="23" y1="13" x2="23" y2="11"/>',cpu:'<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>',creditCard:'<rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>',gift:'<polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>',award:'<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>',medal:'<circle cx="12" cy="15" r="6"/><path d="M12 12V2l4 4-4 4"/><path d="M8 6l4 6"/>',thumbsUp:'<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>',smile:'<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>',mic:'<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>',camera:'<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',headphones:'<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',play:'<polygon points="5 3 19 12 5 21 5 3"/>',pause:'<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>',stop:'<rect x="5" y="5" width="14" height="14" rx="2"/>',skipForward:'<polygon points="5 4 15 12 5 20 5 4"/><line x1="19" y1="5" x2="19" y2="19"/>',skipBack:'<polygon points="19 20 9 12 19 4 19 20"/><line x1="5" y1="19" x2="5" y2="5"/>',volume:'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>',volumeHigh:'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>',volumeOff:'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>',maximize:'<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>',minimize:'<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/>',move:'<polyline points="5 9 2 12 5 15"/><polyline points="9 5 12 2 15 5"/><polyline points="15 19 12 22 9 19"/><polyline points="19 9 22 12 19 15"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/>',crop:'<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"/><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"/>',wand:'<path d="M15 4V2m0 20v-2M8.5 8.5 7 7m12 12-1.5-1.5M4 15H2m20 0h-2M4 4l1.5 1.5M18.5 18.5 20 20"/><path d="M14 10 4 20l-2-2L12 8z"/>',anchor:'<circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/>',feather:'<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/>',lifeBuoy:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"/><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"/><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"/><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"/>',rss:'<path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>',command:'<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>',function:'<path d="M9 11 6 21M15 3a3 3 0 0 0-3 3v1M18 9h-8m2 4c0 3-1 5-3 6"/>',binary:'<rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/>',flow:'<rect x="2" y="3" width="6" height="6" rx="1"/><rect x="16" y="15" width="6" height="6" rx="1"/><path d="M8 6h6a2 2 0 0 1 2 2v7"/><path d="M11 18H5a2 2 0 0 1-2-2v-1"/>',gitBranch:'<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',gitCommit:'<circle cx="12" cy="12" r="4"/><line x1="1.05" y1="12" x2="7" y2="12"/><line x1="17.01" y1="12" x2="22.96" y2="12"/>',fork:'<circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="12" cy="18" r="3"/><path d="M6 9v1a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V9"/><line x1="12" y1="13" x2="12" y2="15"/>',cube:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',puzzle:'<path d="M19.44 12.99c.72-.23 1.56.06 1.56 1.01 0 .55-.45 1-1 1h-2v2c0 .55-.45 1-1 1-.95 0-1.24.84-1.01 1.56.18.55-.06 1.43-.99 1.43-.55 0-1-.45-1-1v-2h-2c-.55 0-1-.45-1-1 0-.95-.84-1.24-1.56-1.01-.55.18-1.43-.06-1.43-.99 0-.55.45-1 1-1h2v-2c0-.55.45-1 1-1 .95 0 1.24-.84 1.01-1.56-.18-.55.06-1.43.99-1.43.55 0 1 .45 1 1v2h2c.55 0 1 .45 1 1 0 .95.84 1.24 1.56 1.01z"/>'};function Ao(t){return Object.prototype.hasOwnProperty.call(Lc,t)}const Uf=["width","height","innerHTML"],oe=ht({__name:"Icon",props:{name:{},size:{default:15}},setup(t){const e=t,n=B(()=>Lc[e.name]??""),i=B(()=>typeof e.size=="number"?`${e.size}px`:e.size);return(c,u)=>n.value?(l(),r("svg",{key:0,class:"fw-icon",viewBox:"0 0 24 24",width:i.value,height:i.value,fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",innerHTML:n.value},null,8,Uf)):N("",!0)}}),Hf={class:"fw-confirm-ico","aria-hidden":"true"},Wf={class:"fw-confirm-msg"},Gf={key:0,class:"fw-confirm-msg"},Bc=ht({__name:"ConfirmDialog",setup(t){const{t:e}=Bt(),n=B(()=>tt.okText||e("confirmOk")),i=B(()=>tt.cancelText||e("cancel"));function c(p){p||Do(tt.kind==="prompt"||tt.choices.length?null:!1)}function u(p){Do(p)}function v(){tt.kind==="prompt"?Do(tt.inputValue.trim()):Do(!0)}function d(){Do(tt.kind==="prompt"?null:!1)}return(p,w)=>{const b=$s,x=An,O=rn;return l(),Xe(O,{"model-value":s(tt).visible,class:"fw-confirm-dialog",width:"380px","align-center":"","append-to-body":"","show-close":!0,"close-on-click-modal":!1,"close-on-press-escape":!1,"onUpdate:modelValue":c},{footer:se(()=>[s(tt).choices.length?(l(!0),r(ae,{key:0},Ae(s(tt).choices,L=>(l(),Xe(x,{key:L.id,type:L.primary?"primary":"default",onClick:P=>u(L.id)},{default:se(()=>[ue(a(L.text),1)]),_:2},1032,["type","onClick"]))),128)):(l(),r(ae,{key:1},[h(x,{onClick:d},{default:se(()=>[ue(a(i.value),1)]),_:1}),h(x,{type:"primary",onClick:v},{default:se(()=>[ue(a(n.value),1)]),_:1})],64))]),default:se(()=>[o("div",{class:te(["fw-confirm-body",{"fw-confirm-up":s(tt).kind==="confirm"}])},[s(tt).kind==="confirm"?(l(),r(ae,{key:0},[o("span",Hf,[h(oe,{name:"warning",size:22})]),o("p",Wf,a(s(tt).message),1)],64)):(l(),r(ae,{key:1},[s(tt).message?(l(),r("p",Gf,a(s(tt).message),1)):N("",!0),s(tt).multiline?(l(),Xe(b,{key:1,modelValue:s(tt).inputValue,"onUpdate:modelValue":w[0]||(w[0]=L=>s(tt).inputValue=L),type:"textarea",rows:5,placeholder:s(tt).inputPlaceholder,onKeydown:bt(_e(v,["ctrl","prevent"]),["enter"])},null,8,["modelValue","placeholder","onKeydown"])):(l(),Xe(b,{key:2,modelValue:s(tt).inputValue,"onUpdate:modelValue":w[1]||(w[1]=L=>s(tt).inputValue=L),placeholder:s(tt).inputPlaceholder,clearable:"",onKeyup:bt(v,["enter"])},null,8,["modelValue","placeholder"]))],64))],2)]),_:1},8,["model-value"])}}}),qf={ok:3e3,info:3e3,warning:4500,error:6e3},Kf=5,Tr="__DSH_FW_TOAST__";function ni(){const t=globalThis;let e=t[Tr];return e||(e={items:m([]),seq:0,app:null,el:null},t[Tr]=e),e}const Di=ni().items;function si(t,e,n){const i=ni(),c=++i.seq,u=n??qf[t];for(i.items.value.push({id:c,kind:t,message:e,duration:u,remain:u,paused:!1});i.items.value.length>Kf;)i.items.value.shift();return c}function Dr(t){const e=ni(),n=e.items.value.findIndex(i=>i.id===t);n!==-1&&e.items.value.splice(n,1)}function X(t,e,n){si(t,e,n)}const ds=(t,e)=>void si("error",t,e),oo=(t,e)=>void si("warning",t,e),ls=(t,e)=>void si("ok",t,e),Xf=3e4,ao=new Map,ga=new Map;function Gs(t,e,n=Xf){const i=ao.get(t);if(i&&Date.now()-i.at<n)return Promise.resolve(i.value);const c=ga.get(t);if(c)return c;const u=e().then(v=>(ao.set(t,{at:Date.now(),value:v}),ga.delete(t),v),v=>{throw ga.delete(t),v});return ga.set(t,u),u}function oi(t=""){let e=0;if(!t)return e=ao.size,ao.clear(),e;for(const n of[...ao.keys()])n.startsWith(t)&&(ao.delete(n),e++);return e}function Ic(t,e,n){const i=new URL(t,e);return i.protocol=i.protocol==="https:"?"wss:":"ws:",i.pathname=`${i.pathname.replace(/\/+$/,"")}/${n}`,i.search="",i.hash="",i.toString()}const Yf={},Jf="/api/dsh-file-workbench";function Zf(){if(typeof window<"u"&&window.__DSH_FILE_WORKBENCH__?.apiBase)return window.__DSH_FILE_WORKBENCH__.apiBase.replace(/\/$/,"");const t=Yf?.VITE_API_BASE??"";return t?t.replace(/\/$/,""):Jf}const Xn=Zf(),Mo=gt({seq:0,pending:0}),Pa=new Map;function Qf(){for(const t of Pa.values())t.abort();Pa.clear()}class jc extends Error{constructor(){super("request aborted"),this.name="AbortRequestError"}}class Hs extends Error{constructor(e,n,i){super(e),this.status=n,this.code=i,this.name="ApiError"}}const ep=new Set(["mtime-conflict"]);function Vc(t,e){switch(t){case 403:return y("errForbidden");case 404:return y("errNotFound");case 409:return y("errNoRoot");case 413:return y("errTooLarge");case 500:return y("errServer");default:return e}}function zc(t){return t instanceof jc||t instanceof DOMException&&t.name==="AbortError"}async function We(t,e,n,i){const c=++Mo.seq;Mo.pending++;const u=new AbortController;Pa.set(c,u);const v=()=>u.abort();i?.signal&&(i.signal.aborted?u.abort():i.signal.addEventListener("abort",v,{once:!0}));const d={method:t,headers:{},signal:u.signal};n!==void 0&&(d.headers={"content-type":"application/json"},d.body=JSON.stringify(n));try{let p;try{p=await fetch(`${Xn}${e}`,d)}catch(b){throw u.signal.aborted?new jc:(i?.silent||ds(y("errNetwork")),b instanceof Error?b:new Error(String(b)))}const w=await p.json().catch(()=>({ok:!1,error:"bad response"}));if(!w.ok){const b=w.error||`HTTP ${p.status}`;throw!!w.code&&ep.has(w.code)||(p.status===403&&/outside (root|workspace)/i.test(b)?i?.silent||ds(y("workspaceOutside")):i?.silent||ds(Vc(p.status,b))),new Hs(b,p.status,w.code)}return w.data}finally{Mo.pending--,Pa.delete(c),i?.signal?.removeEventListener("abort",v)}}const Ut=t=>{const e=new URLSearchParams;for(const[i,c]of Object.entries(t))c&&e.set(i,c);const n=e.toString();return n?`?${n}`:""};function Ea(t,e){return Gs(`list:${e??""}:${t}`,()=>We("GET",`/list${Ut({key:e,path:t})}`))}function hn(t){return t.then(e=>(oi(),e))}function Bl(t){return t.then(e=>(oi("git"),e))}function ks(t=""){return oi(t)}function tp(t){return We("GET",`/root${Ut({key:t})}`)}function Il(t,e){return We("POST","/root",{key:e,path:t})}function Xi(t,e,n={}){return hn(We("POST","/save",{key:n.key,path:t,content:e,encoding:n.encoding,hasBom:n.hasBom,eol:n.eol,expectedMtime:n.expectedMtime,force:n.force}))}function np(t,e){return Gs(`files:${e??""}:${t}`,()=>We("GET",`/files${Ut({key:e,path:t})}`))}function sp(t,e={}){return We("GET",`/search${Ut({key:e.key,q:t,path:e.path,limit:e.limit?.toString(),case:e.caseSensitive?"1":void 0,regex:e.regex?"1":void 0})}`)}function Uc(t,e,n={}){return hn(We("POST","/replace",{key:n.key,scope:n.scope,q:t,replacement:e,caseSensitive:n.caseSensitive,regex:n.regex,wholeWord:n.wholeWord,preserveCase:n.preserveCase,include:n.include||void 0,exclude:n.exclude||void 0}))}function op(t,e={}){return We("GET",`/grep${Ut({key:e.key,q:t,path:e.path,sub:e.sub||void 0,case:e.caseSensitive?"1":void 0,regex:e.regex?"1":void 0,word:e.wholeWord?"1":void 0,include:e.include||void 0,exclude:e.exclude||void 0})}`)}function Wt(t){return t.startsWith("ssh://")}function Hc(t){return Gs(`mycomputer:${t??""}`,()=>We("GET",`/mycomputer${Ut({key:t})}`))}function Wc(){return Gs("drives",()=>We("GET","/drives"))}function ap(){return We("GET","/ssh/hosts",void 0,{silent:!0})}function ip(t){return We("POST","/ssh/add",t)}function lp(t){return We("POST","/ssh/update",t)}function rp(t){return We("POST","/ssh/remove",{id:t})}function Yi(t){return We("POST","/ssh/test",t)}function cp(t){return We("POST","/ssh/ping",{id:t},{silent:!0})}function up(t){return We("POST","/ssh/cache",{path:t})}function dp(){return We("GET","/recycle-list")}function fp(){return We("GET","/recycle-count")}function pp(t){return hn(We("POST","/recycle-restore",{fullPath:t}))}function vp(t){return hn(We("POST","/recycle-delete",{fullPath:t}))}function hp(){return hn(We("POST","/recycle-empty",{}))}function mp(t,e){return We("GET",`/browse${Ut({key:e,path:t})}`)}function gp(t){return`${Xn}/download?path=${encodeURIComponent(t)}`}function Fr(t){return`${Xn}/_read-image?path=${encodeURIComponent(t)}`}function yp(t,e,n){const i=new URLSearchParams({session:e.session,shell:e.shell});return e.cwd&&i.set("cwd",e.cwd),e.key&&i.set("key",e.key),bp(`/exec-stream?${i.toString()}`,t,n)}function wp(t,e,n){const i=typeof location<"u"?location.href:"http://127.0.0.1/",c=Ic(Xn,i,"exec-mux-ws")+(e.key?`?key=${encodeURIComponent(e.key)}`:"");return new Promise(u=>{let v;try{v=new WebSocket(c)}catch{u();return}let d=!1;const p=()=>{if(!d){d=!0;try{n?.removeEventListener("abort",w)}catch{}try{v.close()}catch{}u()}},w=()=>p();n?.addEventListener("abort",w),v.onmessage=b=>{try{t(JSON.parse(String(b.data)))}catch{}},v.onclose=p,v.onerror=()=>{}})}function bp(t,e,n){return new Promise(i=>{const c=new EventSource(`${Xn}${t}`);let u=!1;const v=()=>{if(!u){u=!0;try{c.close()}catch{}i()}};c.onmessage=d=>{try{e(JSON.parse(d.data))}catch{}},c.onerror=v,n&&(n.aborted?v():n.addEventListener("abort",v,{once:!0}))})}function Fi(t){return We("POST","/exec-open",t)}function _p(t,e,n){return We("POST","/exec-resize",{session:t,cols:e,rows:n},{silent:!0})}function Gc(t,e){return We("POST","/exec-input",{session:t,data:e},{silent:!0})}function kp(t){return We("POST","/exec-kill",{session:t})}function xp(){return We("GET","/term-env")}function Cp(t,e,n,i){return We("POST","/subagent/spawn",{path:t,isDir:e,instruction:n,session:i})}function Aa(t,e){return hn(We("POST","/mkdir",{key:e,path:t}))}function Ma(t,e,n){return hn(We("POST","/rename",{key:n,from:t,to:e}))}function Ji(t,e){return hn(We("DELETE",`/remove${Ut({key:e,path:t})}`))}function qc(t,e){return hn(We("POST","/touch",{key:e,path:t}))}function $p(t,e,n){return hn(We("POST","/copy",{key:n,src:t,destDir:e}))}async function Sp(t,e,n){Mo.pending++;try{const i=await fetch(`${Xn}/upload${Ut({dir:t,name:e.name,key:n})}`,{method:"POST",body:e}),c=await i.json().catch(()=>({ok:!1,error:"bad response"}));if(!c.ok)throw new Error(c.error||`HTTP ${i.status}`);return oi(),c.data}finally{Mo.pending--}}function Oa(t){return We("GET",`/detail${Ut({path:t})}`)}async function Zi(t,e){try{return await We("GET",`/detail${Ut({path:t})}`,void 0,{silent:!0}),!0}catch(n){if(n instanceof Hs&&n.status===404)return!1;throw!zc(n)&&!e?.silent&&ds(n instanceof Hs?Vc(n.status,n.message):y("errNetwork")),n}}async function Qi(t){try{return await We("GET",`/detail${Ut({path:t})}`,void 0,{silent:!0})}catch{return null}}function el(t,e={}){return We("GET",`/read${Ut({path:t,encoding:e.encoding,bom:e.hasBom===void 0?void 0:e.hasBom?"1":"0"})}`)}function Rr(t,e,n){return hn(We("POST","/compress",{key:n,path:t,to:e}))}function Ep(t,e,n){return hn(We("POST","/extract",{key:n,zipPath:t,destDir:e}))}function Kc(t){return We("POST","/openExternal",{path:t})}function Tp(t){return Gs(`gitstatus:${t}`,()=>We("GET",`/git/status${Ut({path:t})}`))}function Dp(t){return We("GET",`/git/diff${Ut({path:t})}`)}function Fp(t){return Bl(We("POST","/git/add",{path:t}))}function Xc(t){return Bl(We("POST","/git/ignore",{path:t}))}function Rp(t,e){return Bl(We("POST","/git/commit",{path:t,message:e}))}function Np(t){return hn(We("POST","/git/discard",{path:t}))}function Ho(t){return Gs(`gitpanel:${t}`,()=>We("GET",`/git/panel${Ut({path:t})}`))}function Oo(t,e){return We("POST","/git/run",{path:t,args:e})}function Pp(t,e){return hn(We("POST",t==="git"?"/git/clone":"/svn/checkout",e))}function Nr(t,e,n,i){return We("POST","/git/gh-release",{path:t,tag:e,name:n,body:i})}function Ap(t){return We("GET",`/git/gh-releases${Ut({path:t})}`)}function Yc(){return We("GET","/git/config")}function Jc(t,e){return We("POST","/git/config",{name:t,email:e})}function fs(t){return Gs(`svninfo:${t}`,()=>We("GET",`/svn/info${Ut({path:t})}`))}function Jt(t,e){return We("POST","/svn/run",{path:t,args:e})}function Mp(){return We("GET","/accounts")}function Op(t){return We("POST","/accounts/add",t)}function Zc(t,e){return We("GET",`/accounts/match${Ut({kind:t,url:e})}`,void 0,{silent:!0})}function Lp(t){return We("POST","/accounts/update",t)}function Bp(t){return We("POST","/accounts/remove",{id:t})}function Ip(t){return We("POST","/accounts/test",t)}function jp(t){return We("POST","/accounts/apply",{id:t})}function Qc(){return We("GET","/persist")}function qs(t,e){return We("POST","/persist",{k:t,v:e})}async function Vp(){const t=await We("GET","/persist?k=taskLogs");return Array.isArray(t?.taskLogs)?t.taskLogs:[]}function zp(t){return We("POST","/persist",{k:"taskLogs",v:t})}async function Up(){return(await We("GET","/task-archives"))?.map??{}}function jl(t){return We("POST","/task-archives",{map:t})}function Ss(){if(typeof window>"u")return null;const t=window.__DSH_FILE_WORKBENCH__?.officialTerminal;return t&&typeof t.create=="function"?t:null}function Hp(){try{return Ss()?.available()??!1}catch{return!1}}const St=m([]),Ws=m(""),rs=m(null),bn=m(null),ps=m({});function tl(t){return ps.value[t]===!0}function Wp(t){ps.value[t]||(ps.value={...ps.value,[t]:!0})}function Vl(t){if(!ps.value[t])return;const e={...ps.value};delete e[t],ps.value=e}function Gp(){Object.keys(ps.value).length&&(ps.value={})}const Pn=m({}),Pr=1500,qp=/\x1b\[[0-9;?]*[ -/]*[@-~]/g;function La(t,e){const n=e.replace(qp,"");if(!n.trim())return;let c=(Pn.value[t]??"")+n;c.length>Pr&&(c=c.slice(c.length-Pr)),Pn.value={...Pn.value,[t]:c}}function Kp(t){return Pn.value[t]??""}function Xp(t){if(Pn.value[t]===void 0)return;const e={...Pn.value};delete e[t],Pn.value=e}async function eu(){if(rs.value===null)try{const t=await xp();rs.value=t.elevated===!0}catch{}}let Ar=0;function Yp(){return Ar+=1,Ar}const Mr=4*1024*1024;function mo(t){return t.length>Mr?t.slice(t.length-Mr):t}const go=new Map;function Or(t,e){e?go.set(t,e):go.delete(t)}let io=null,zl="",Ri=null;const tu="__DSH_FW_TERM_MUX_SSE__";function Jp(){const e=globalThis[tu];if(e&&typeof e.dispose=="function")try{e.dispose()}catch{}}function nu(t){const e=St.value.find(n=>n.session===t.session);if(e){if(t.type==="output")e.output=mo(e.output+t.text),go.get(e.id)?.(t.text),La(e.id,t.text);else if(t.type==="cwd")e.cwd=t.cwd;else if(t.type==="exit"){if(e.connected=!1,e.ssh){La(e.id,`
[ssh] session closed
`),e.output=mo(e.output+`\r
\x1B[33m[ssh] session closed — 点「重连」重新登录\x1B[0m\r
`);return}window.setTimeout(()=>void Ul(e),300)}}}function su(t){return t?.message||String(t)}async function ou(t,e){if(t.ssh){const i=t.ssh;try{const c=await Fi({session:t.session,kind:"ssh",hostId:i.hostId,remote:i.remote,key:e});if(c?.kind!=="ssh")throw new Error("宿主未启用远端终端（缺少 /exec-open 的 kind 支持），请重启 dsh web");return t.sshDegraded=!1,c}catch(c){const u=su(c);t.output=mo(t.output+`\r
\x1B[33m[ssh] 自动登录 ${i.label} 失败：${u}\x1B[0m\r
\x1B[2m[ssh] 已回退到本机 ssh 客户端，请手动输入口令；修好后可用页脚「重连」再试直连。\x1B[0m\r
`),La(t.id,`[ssh] auto login failed: ${u}
`),t.sshDegraded=!0,t.cwd="";const v=await Fi({session:t.session,kind:"local",shell:t.shell,key:e});return t.initCmd=t.fallbackCmd,Ba(t),v}}const n=await Fi({session:t.session,kind:"local",shell:t.shell,cwd:t.cwd||void 0,key:e});return Ba(t),n}async function Ul(t){if(!(!St.value.includes(t)||t.connected)){if(t.output="",Pn.value={...Pn.value,[t.id]:""},t.backend==="official"){Ss()?.close(t.id),t.connected=!0,lu(t);return}try{const e=await ou(t,zl||void 0);e?.cwd&&(t.cwd=e.cwd),t.connected=!0,au()}catch{t.connected=!1}}}function au(){if(io)return;Jp();const t=new AbortController;io=t;const e={dispose:()=>ai()};globalThis[tu]=e;const n=async()=>{if(!t.signal.aborted){try{await wp(nu,{key:zl},t.signal)}catch{}if(t.signal.aborted){io===t&&(io=null);return}window.setTimeout(()=>void n(),500)}};n()}function ai(){io?.abort(),io=null}function Zp(){St.value.some(t=>t.connected)||ai()}function Ba(t){const e=t.initCmd;e&&(t.initCmd=void 0,window.setTimeout(()=>{t.connected&&(t.backend==="official"?Ss()?.write(t.id,`${e}\r`):Gc(t.session,`${e}\r`))},800))}function Lr(t,e){const n=new AbortController;t.streamAbort=n;const i=async()=>{if(!(!t.connected||n.signal.aborted)){try{await yp(c=>nu({...c,session:t.session}),{session:t.session,cwd:t.cwd||void 0,key:e,shell:t.shell},n.signal)}catch{}t.connected&&!n.signal.aborted?window.setTimeout(()=>void i(),500):t.connected=!1}};Ba(t),i()}let Br=!1;function iu(t){return St.value.find(e=>e.id===t&&e.backend==="official")}function Qp(t){const e=iu(t.tag);e&&(e.output=mo(e.output+t.text),go.get(e.id)?.(t.text),La(e.id,t.text))}function ev(t){const e=iu(t.tag);if(e){if(t.cwd&&t.cwd!==e.cwd&&(e.cwd=t.cwd),t.exited){e.connected=!1,window.setTimeout(()=>void Ul(e),300);return}if(t.phase==="connected"&&!e.connected)e.connected=!0,Ba(e);else if(t.phase==="failed"&&t.error){const n=`\r
\x1B[33m[term] ${t.error}\x1B[0m\r
`;e.output=mo(e.output+n),go.get(e.id)?.(n)}}}function tv(){Br||typeof window>"u"||(Br=!0,window.addEventListener("dshfw-ot-data",t=>Qp(t.detail)),window.addEventListener("dshfw-ot-status",t=>ev(t.detail)))}async function lu(t){const e=Ss();if(!e){t.backend=void 0,t.connected=!1,Ia(t);return}tv();const n=await e.create(t.id,{cols:80,rows:24}).catch(()=>null);if(n===null){t.backend=void 0,t.connected=!1,Ia(t);return}if(!St.value.includes(t)){e.close(t.id);return}n.cwd&&(t.cwd=n.cwd)}function Ia(t,e){if(!t.connected){if(t.connected=!0,e&&(zl=e),!t.ssh&&Hp()){t.backend="official",lu(t);return}if(t.backend=void 0,Ri===!1){Lr(t,e);return}au(),ou(t,e).then(n=>{Ri=!0,n?.cwd&&(t.cwd=n.cwd)}).catch(n=>{n?.status===404&&(Ri=!1,St.value.some(i=>i.connected)||ai()),Lr(t,e)})}}const nv=16,sv=512,ov=/[\r\n\x03\x04\x1a]/,cs=new Map;function ru(t){let e=cs.get(t);return e||(e={pending:"",timer:0,inFlight:!1},cs.set(t,e)),e}function nl(t){const e=ru(t);if(e.timer&&(window.clearTimeout(e.timer),e.timer=0),!e.pending)return;const n=St.value.find(c=>c.session===t);if(n?.backend==="official"){const c=e.pending;e.pending="",Ss()?.write(n.id,c),!e.pending&&!e.timer&&cs.delete(t);return}if(e.inFlight)return;const i=e.pending;e.pending="",e.inFlight=!0,Gc(t,i).catch(c=>{iv(t,c)}).finally(()=>{const c=cs.get(t);c&&(c.inFlight=!1,c.pending?nl(t):c.timer||cs.delete(t))})}const av=3e3,Ir=new Map,Ni=new Set;function iv(t,e){const n=St.value.find(u=>u.session===t);if(!n)return;const i=su(e),c=Date.now();if(c-(Ir.get(t)??0)>=av){Ir.set(t,c);const u=`\r
\x1B[31m[term] ${y("termInputFailed",{msg:i})}\x1B[0m\r
`;n.output=mo(n.output+u),go.get(n.id)?.(u),X("warning",y("termInputFailed",{msg:i}))}e?.status===404&&lv(n)}async function lv(t){if(!(Ni.has(t.session)||!St.value.includes(t))){Ni.add(t.session);try{ii(t),await Ul(t)}finally{Ni.delete(t.session)}}}function rv(t,e){if(!e)return;const n=St.value.find(c=>c.session===t);if(n&&!n.connected)return;const i=ru(t);if(i.pending+=e,ov.test(e)||i.pending.length>=sv){nl(t);return}i.timer||(i.timer=window.setTimeout(()=>nl(t),nv))}function cu(t){if(t){const e=cs.get(t);e&&e.timer&&window.clearTimeout(e.timer),cs.delete(t);return}for(const[e,n]of cs)n.timer&&window.clearTimeout(n.timer),cs.delete(e)}function ii(t){t.connected=!1,t.backend==="official"&&Ss()?.detach(t.id),t.streamAbort?.abort(),t.streamAbort=void 0,cu(t.session),sl.delete(t.session)}function Hl(t){return t.backend==="official"?(Ss()?.close(t.id),Promise.resolve()):kp(t.session).catch(()=>{})}const sl=new Map;function cv(t,e,n){if(!e||!n)return;const i=`${e}x${n}`;if(sl.get(t)===i)return;sl.set(t,i);const c=St.value.find(u=>u.session===t);if(c?.backend==="official"){Ss()?.resize(c.id,e,n);return}_p(t,e,n).catch(()=>{})}async function jr(t,e){const n=t.backend==="official";ii(t),t.output="",Pn.value={...Pn.value,[t.id]:""},await Hl(t),n&&(t.backend=void 0),Ia(t,e)}function uu(t){const e=St.value.findIndex(i=>i.id===t),n=St.value[e];if(n&&(ii(n),Hl(n),St.value.splice(e,1),Xp(t),Vl(t),Zp(),Ws.value===t)){const i=St.value[e]??St.value[e-1]??St.value[0];Ws.value=i?i.id:""}}async function uv(){const t=St.value.slice();St.value=[],Ws.value="",Pn.value={},Gp(),ai(),await Promise.all(t.map(e=>(ii(e),Hl(e).catch(()=>{}))))}const ta=new Map;let Vr=0;function dv(t){return ta.get(t)}function fv(t,e){ta.set(t,e),du()}function pv(t){ta.delete(t)&&du()}function du(){qs("termWins",Object.fromEntries(ta))}function vv(t){if(!t||typeof t!="object")return;const e=t;for(const[n,i]of Object.entries(e)){if(!i||typeof i!="object")continue;const c=i;typeof c.x=="number"&&typeof c.y=="number"&&typeof c.w=="number"&&typeof c.h=="number"&&ta.set(n,{x:c.x,y:c.y,w:c.w,h:c.h})}}function hv(){return{w:680,h:460,x:Math.max(12,window.innerWidth-680-24),y:Math.max(12,window.innerHeight-460-24)}}function mv(){Vr+=1;const t=hv(),e=Vr%8*30;return{w:t.w,h:t.h,x:Math.max(12,t.x-e),y:Math.max(12,t.y-e)}}function zr(){return`t${Date.now().toString(36)}${Math.random().toString(36).slice(2,10)}`}function gv(t,e){const n={id:zr(),name:Yp(),session:zr(),cwd:e?.cwd??"",shell:e?.shell??"cmd",ssh:e?.ssh,fallbackCmd:e?.fallbackCmd||void 0,output:"",connected:!1,initCmd:e?.initCmd||void 0,focusPending:e?.focus===!0};return St.value.push(n),Ws.value=n.id,Ia(n,t),n}function Ur(t){uu(t),pv(t)}function yv(t){const e=St.value.find(n=>n.id===t);return e?.focusPending?(e.focusPending=!1,!0):!1}const Lo={showHidden:!0,view:"details",showExtensions:!0,sortKey:"name",asc:!0,theme:"auto",fontFamily:"default",fontSize:13,accentColor:"",allowOutsideRoot:!1,colWidths:{name:300,size:96,type:160},termShell:"cmd",termFontSize:13,txtWordWrap:!1,txtShowStatus:!0,vsGitBarH:0,autoSave:!1,vsMinimap:!0},Ue=gt({...Lo}),fu=["huge","large","medium","small","list","details","content","tiles"];function wv(t){if(!t||typeof t!="object")return{};const e=t,n={};typeof e.showHidden=="boolean"&&(n.showHidden=e.showHidden),typeof e.showExtensions=="boolean"&&(n.showExtensions=e.showExtensions),fu.includes(String(e.view))&&(n.view=e.view),["name","size","type","mtime"].includes(String(e.sortKey))&&(n.sortKey=e.sortKey),typeof e.asc=="boolean"&&(n.asc=e.asc),["auto","dark","light"].includes(String(e.theme))&&(n.theme=e.theme),typeof e.fontFamily=="string"&&(n.fontFamily=e.fontFamily.trim()||"default"),typeof e.fontSize=="number"&&e.fontSize>0&&(n.fontSize=e.fontSize),typeof e.accentColor=="string"&&/^#[0-9a-fA-F]{3,8}$/.test(e.accentColor)&&(n.accentColor=e.accentColor),typeof e.allowOutsideRoot=="boolean"&&(n.allowOutsideRoot=e.allowOutsideRoot);const i=e.colWidths;if(i&&typeof i=="object"){const c=(u,v)=>typeof u=="number"&&Number.isFinite(u)&&u>=40?u:v;n.colWidths={name:c(i.name,Lo.colWidths.name),size:c(i.size,Lo.colWidths.size),type:c(i.type,Lo.colWidths.type)}}return(e.termShell==="powershell"||e.termShell==="cmd")&&(n.termShell=e.termShell),typeof e.termFontSize=="number"&&e.termFontSize>=8&&e.termFontSize<=36&&(n.termFontSize=e.termFontSize),typeof e.txtWordWrap=="boolean"&&(n.txtWordWrap=e.txtWordWrap),typeof e.txtShowStatus=="boolean"&&(n.txtShowStatus=e.txtShowStatus),typeof e.vsGitBarH=="number"&&e.vsGitBarH>=0&&(n.vsGitBarH=e.vsGitBarH),typeof e.autoSave=="boolean"&&(n.autoSave=e.autoSave),typeof e.vsMinimap=="boolean"&&(n.vsMinimap=e.vsMinimap),n}async function bv(){const t=await Qc().catch(()=>null);if(t){if(Object.assign(Ue,{...Lo,...wv(t.prefs)}),Array.isArray(t.favorites)&&(zs.value=t.favorites.map(String)),t.layout&&typeof t.layout=="object"){const e=t.layout,n=e.navGroups;if(n&&typeof n=="object"){const i=n;Object.assign(zn.navGroups,pu.navGroups),typeof i.home=="boolean"&&(zn.navGroups.home=i.home),typeof i.myComputer=="boolean"&&(zn.navGroups.myComputer=i.myComputer),typeof i.favorites=="boolean"&&(zn.navGroups.favorites=i.favorites),typeof i.ssh=="boolean"&&(zn.navGroups.ssh=i.ssh)}typeof e.explorerSplit=="number"&&e.explorerSplit>.05&&e.explorerSplit<.95&&(zn.explorerSplit=e.explorerSplit)}if(t.termWin&&typeof t.termWin=="object"){const e=t.termWin;typeof e.w=="number"&&e.w>0&&e.w,typeof e.h=="number"&&e.h>0&&e.h,typeof e.x=="number"&&e.x,typeof e.y=="number"&&e.y}if(t.termWins&&typeof t.termWins=="object"&&vv(t.termWins),t.folderViews&&typeof t.folderViews=="object"){for(const n of Object.keys(vs))delete vs[n];const e=t.folderViews;for(const[n,i]of Object.entries(e))fu.includes(String(i))&&(vs[n]=String(i))}}}function Un(){qs("prefs",{...Ue})}const pu={navGroups:{home:!0,myComputer:!0,favorites:!0,ssh:!0},explorerSplit:.3},zn=gt({...pu});function Ta(){qs("layout",{...zn})}const vs=gt({}),ja=m(Ue.view);function ol(t){return vs[t]??Ue.view}function al(t,e){vs[t]=e,qs("folderViews",{...vs})}function _v(){for(const t of Object.keys(vs))delete vs[t];qs("folderViews",{...vs})}const zs=m([]);function Hr(){qs("favorites",zs.value)}function lo(t){return zs.value.includes(t)}function Va(t){const e=zs.value.indexOf(t);return e>=0?(zs.value.splice(e,1),Hr(),!1):(zs.value.push(t),Hr(),!0)}const kv={class:"fw-dlg-head"},xv={class:"fw-dlg-badge"},Cv={class:"fw-dlg-headtext"},$v={class:"fw-dlg-headtitle"},Sv={class:"fw-dlg-headsub"},Ev={class:"fw-set-body"},Tv={class:"fw-set-group"},Dv={class:"fw-set-group-title"},Fv={class:"fw-set-row"},Rv={class:"k"},Nv={class:"fw-set-row"},Pv={class:"k"},Av={class:"fw-set-row"},Mv={class:"k"},Ov={class:"fw-set-group"},Lv={class:"fw-set-group-title"},Bv={class:"fw-set-row"},Iv={class:"k"},jv={class:"fw-set-accent"},Vv={class:"fw-set-row"},zv={class:"k"},Uv={class:"fw-set-row"},Hv={class:"k"},Wv={class:"fw-set-row"},Gv={class:"k"},qv={class:"fw-set-row"},Kv={class:"k"},Xv=ht({__name:"SettingsDialog",setup(t,{expose:e}){const{t:n}=Bt(),i=m(!1),c=["#1f883d","#238636","#0969da","#8250df","#b35900","#cf222e","#0a3069","#116329"];function u(w){Ue.accentColor=typeof w=="string"?w:"",Un()}function v(){Ue.accentColor="",Un()}e({open:()=>{i.value=!0}});function d(){Un()}function p(){_v(),Un()}return(w,b)=>{const x=hf,O=mf,L=An,P=ti,j=ei,U=rn;return l(),Xe(U,{modelValue:i.value,"onUpdate:modelValue":b[8]||(b[8]=$=>i.value=$),class:"fw-set-dialog",width:"460px","align-center":"","modal-class":"fw-blur-overlay","close-on-click-modal":!1},{header:se(()=>[o("div",kv,[o("span",xv,[h(oe,{name:"gear",size:20})]),o("span",Cv,[o("span",$v,a(s(n)("settings")),1),o("span",Sv,a(s(n)("settingsSubtitle")),1)])])]),default:se(()=>[o("div",Ev,[o("div",Tv,[o("div",Dv,a(s(n)("settingsGroupFiles")),1),o("div",Fv,[o("span",Rv,a(s(n)("allowOutsideRoot")),1),h(x,{modelValue:s(Ue).allowOutsideRoot,"onUpdate:modelValue":b[0]||(b[0]=$=>s(Ue).allowOutsideRoot=$),onChange:d},null,8,["modelValue"])]),o("div",Nv,[o("span",Pv,a(s(n)("showHidden")),1),h(x,{modelValue:s(Ue).showHidden,"onUpdate:modelValue":b[1]||(b[1]=$=>s(Ue).showHidden=$),onChange:d},null,8,["modelValue"])]),o("div",Av,[o("span",Mv,a(s(n)("autoSave")),1),h(x,{modelValue:s(Ue).autoSave,"onUpdate:modelValue":b[2]||(b[2]=$=>s(Ue).autoSave=$),onChange:d},null,8,["modelValue"])])]),o("div",Ov,[o("div",Lv,a(s(n)("settingsGroupAppearance")),1),o("div",Bv,[o("span",Iv,a(s(n)("accentColor")),1),o("span",jv,[h(O,{modelValue:s(Ue).accentColor,"onUpdate:modelValue":b[3]||(b[3]=$=>s(Ue).accentColor=$),size:"small",predefine:c,"popper-class":"fw-set-popper",onChange:u},null,8,["modelValue"]),s(Ue).accentColor?(l(),Xe(L,{key:0,text:"",size:"small",class:"fw-set-accent-reset",onClick:v},{default:se(()=>[ue(a(s(n)("accentReset")),1)]),_:1})):N("",!0)])]),o("div",Vv,[o("span",zv,a(s(n)("fontSize")),1),h(j,{modelValue:s(Ue).fontSize,"onUpdate:modelValue":b[4]||(b[4]=$=>s(Ue).fontSize=$),size:"small",class:"fw-set-select","popper-class":"fw-set-popper",onChange:d},{default:se(()=>[h(P,{value:12,label:s(n)("fontSizeSm")},null,8,["label"]),h(P,{value:13,label:s(n)("fontSizeMd")},null,8,["label"]),h(P,{value:14,label:s(n)("fontSizeLg")},null,8,["label"]),h(P,{value:16,label:s(n)("fontSizeXl")},null,8,["label"])]),_:1},8,["modelValue"])]),o("div",Uv,[o("span",Hv,a(s(n)("fontFamily")),1),h(j,{modelValue:s(Ue).fontFamily,"onUpdate:modelValue":b[5]||(b[5]=$=>s(Ue).fontFamily=$),size:"small",class:"fw-set-select","popper-class":"fw-set-popper",clearable:"",placeholder:s(n)("fontDefault"),onChange:d},{default:se(()=>[h(P,{value:"default",label:s(n)("fontDefault")},null,8,["label"]),h(P,{value:"'Segoe UI', 'Microsoft YaHei', system-ui",label:s(n)("fontOptionYahei")},null,8,["label"]),h(P,{value:"Consolas",label:s(n)("fontOptionConsolas")},null,8,["label"]),h(P,{value:"'Courier New', monospace",label:s(n)("fontOptionCourier")},null,8,["label"]),h(P,{value:"Georgia, 'Times New Roman', serif",label:s(n)("fontOptionGeorgia")},null,8,["label"])]),_:1},8,["modelValue","placeholder"])]),o("div",Wv,[o("span",Gv,a(s(n)("themeMode")),1),h(j,{modelValue:s(Ue).theme,"onUpdate:modelValue":b[6]||(b[6]=$=>s(Ue).theme=$),size:"small",class:"fw-set-select","popper-class":"fw-set-popper",onChange:d},{default:se(()=>[h(P,{value:"auto",label:s(n)("themeAuto")},null,8,["label"]),h(P,{value:"dark",label:s(n)("themeDark")},null,8,["label"]),h(P,{value:"light",label:s(n)("themeLight")},null,8,["label"])]),_:1},8,["modelValue"])]),o("div",qv,[o("span",Kv,a(s(n)("defaultView")),1),h(j,{modelValue:s(Ue).view,"onUpdate:modelValue":b[7]||(b[7]=$=>s(Ue).view=$),size:"small",class:"fw-set-select","popper-class":"fw-set-popper",onChange:p},{default:se(()=>[h(P,{value:"details",label:s(n)("viewDetails")},null,8,["label"]),h(P,{value:"content",label:s(n)("viewContent")},null,8,["label"]),h(P,{value:"tiles",label:s(n)("viewTiles")},null,8,["label"]),h(P,{value:"list",label:s(n)("viewList")},null,8,["label"]),h(P,{value:"small",label:s(n)("viewSmall")},null,8,["label"]),h(P,{value:"medium",label:s(n)("viewMedium")},null,8,["label"]),h(P,{value:"large",label:s(n)("viewLarge")},null,8,["label"]),h(P,{value:"huge",label:s(n)("viewHuge")},null,8,["label"])]),_:1},8,["modelValue"])])])])]),_:1},8,["modelValue"])}}}),xt=(t,e)=>{const n=t.__vccOpts||t;for(const[i,c]of e)n[i]=c;return n},Yv=xt(Xv,[["__scopeId","data-v-fbafa4a0"]]),Wl=new Map,Gl=new Map,il=new Set,ll=new Set,rl=new Set,Bo=new Set,Wo=new Set;let Io=null,yo="\0unset",jt=null,hs=0,wo="",bo="";const Da=new Set;let uo=!0;const Wr="__DSH_FW_PUSH_WS__";function Jv(){uo=!0,hs&&(window.clearTimeout(hs),hs=0);const t=jt;jt=null;try{t?.close()}catch{}}const Gr={dispose:()=>Jv()};function Zv(){const t=globalThis,e=t[Wr];if(e&&e!==Gr&&typeof e.dispose=="function")try{e.dispose()}catch{}t[Wr]=Gr}Zv();function vu(){const t=new Set;for(const e of Wl.values())for(const n of e)t.add(n);return[...t].sort()}function hu(){const t=new Set(Bo);for(const e of Gl.values())for(const n of e)t.add(n);return[...t].sort()}function Qv(){if(!Bo.size)return;const t=new Set;for(const e of Gl.values())for(const n of e)t.add(n);for(const e of Wo)for(const n of e.ids)t.add(n);for(const e of[...Bo])t.has(e)||Bo.delete(e)}function eh(t,e){return Ic(t,e,"push")}function th(){const t=typeof location<"u"?location.href:"http://127.0.0.1/";return eh(Xn,t)}function mu(){return jt!==null&&jt.readyState===WebSocket.OPEN}function qr(){uo||hs||(hs=window.setTimeout(()=>{hs=0,gu()},1500))}function gu(){if(uo||jt&&(jt.readyState===WebSocket.OPEN||jt.readyState===WebSocket.CONNECTING))return;let t;try{t=new WebSocket(th())}catch{qr();return}jt=t,t.onopen=()=>{wo="",bo="",yo="\0unset",yu()},t.onmessage=e=>nh(e.data),t.onerror=()=>{},t.onclose=()=>{jt===t&&(jt=null),wo="",bo="",yo="\0unset",qr()}}function yu(){if(!jt||jt.readyState!==WebSocket.OPEN)return;const t=vu(),e=t.join(`
`);e!==wo&&(wo=e,jt.send(JSON.stringify({type:"watch",paths:t})));const n=hu(),i=n.join(`
`);if(i!==bo&&(bo=i,jt.send(JSON.stringify({type:"ssh-watch",ids:n}))),Da.size){const c=[...Da];Da.clear(),jt.send(JSON.stringify({type:"ssh-check",ids:c}))}Io!==yo&&(yo=Io,jt.send(JSON.stringify({type:"session-watch",id:Io})))}function nh(t){if(typeof t!="string")return;let e;try{e=JSON.parse(t)}catch{return}if(e.type==="changed"&&e.items){const n=e.items;for(const[i,c]of Object.entries(n))for(const u of il)u(i,c);return}if(e.type==="ssh-status"&&e.items){const n=e.items;for(const i of ll)i(n);for(const i of[...Wo])Object.keys(n).some(c=>i.ids.has(c))&&(Wo.delete(i),i.resolve(n));return}if(e.type==="session-ev"&&e.ev&&typeof e.ev=="object")for(const n of rl)n(e.ev)}function _o(){if(!(vu().length>0||hu().length>0||Io!==null)){uo=!0,wo="",bo="",yo="\0unset",hs&&(window.clearTimeout(hs),hs=0);const e=jt;jt=null;try{e?.close()}catch{}return}uo&&(wo="",bo="",yo="\0unset"),uo=!1,gu(),yu()}function sh(t,e){Wl.set(t,e),_o()}function oh(t){Wl.delete(t),_o()}function ah(t){return il.add(t),()=>il.delete(t)}function ih(t,e){Gl.set(t,e),_o()}function lh(t){return ll.add(t),()=>ll.delete(t)}function wu(t,e=12e3){const n=[...new Set(t.filter(Boolean))];if(!n.length)return Promise.resolve({});for(const i of n)Bo.add(i);return _o(),new Promise(i=>{let c=0;const u=d=>{c&&window.clearTimeout(c),Wo.delete(v),Qv(),_o(),i(d)},v={ids:new Set(n),resolve:u};if(Wo.add(v),c=window.setTimeout(()=>u({}),e),jt&&jt.readyState===WebSocket.OPEN)jt.send(JSON.stringify({type:"ssh-check",ids:n}));else for(const d of n)Da.add(d)})}function ql(t){Io=t,_o()}function rh(t){return rl.add(t),()=>rl.delete(t)}const an=m([]),bu=m(!1),Qt=m({});function za(t){return Qt.value[t]?.state??"unknown"}function cl(t){return Qt.value[t]?.error??""}async function Ua(t){Qt.value={...Qt.value,[t]:{state:"checking"}};const n=(await wu([t]))[t];return n?(Qt.value={...Qt.value,[t]:n.alive?{state:"online"}:{state:"offline",error:n.error}},n.alive):(Qt.value={...Qt.value,[t]:{state:"unknown"}},!1)}async function ul(){const t=an.value.map(n=>n.id);if(!t.length)return;const e={...Qt.value};for(const n of t)e[n]={state:"checking"};if(Qt.value=e,!mu()){await _u();return}await wu(t)}async function Us(){try{const t=await ap();an.value=t.hosts??[];const e=new Set(an.value.map(n=>n.id));for(const n of Object.keys(Qt.value))e.has(n)||delete Qt.value[n];ku()}catch{an.value=[]}finally{bu.value=!0}}let dl=!1;function ch(){dl||(dl=!0,lh(t=>{const e={...Qt.value};for(const[n,i]of Object.entries(t))e[n]=i.alive?{state:"online"}:{state:"offline",error:i.error};Qt.value=e})),ku(),dh()}const uh=3e4;let Kr=null;async function _u(){const t=an.value.slice();t.length&&await Promise.all(t.map(async e=>{const n=await cp(e.id).catch(()=>null);n&&(Qt.value={...Qt.value,[e.id]:n.alive?{state:"online"}:{state:"offline",error:n.error}})}))}function dh(){Kr||(Kr=setInterval(()=>{mu()||_u()},uh))}function ku(){dl&&ih("ssh-store",an.value.map(t=>t.id))}function xu(t){if(!t.startsWith("ssh://"))return null;const e=t.slice(6),n=e.indexOf("/"),i=n===-1?e:e.slice(0,n);if(!i)return null;const c=n===-1?"/":e.slice(n)||"/";return{hostId:i,remote:c.replace(/\/+$/,"")||"/"}}function fh(t,e="cmd"){const n=xu(t);if(!n)return"";const i=an.value.find(w=>w.id===n.hostId);if(!i)return"";const c=i.authType==="key"&&i.privateKeyPath?`-i "${i.privateKeyPath}" `:"",d=`cd ${`'${n.remote.replace(/'/g,"'\\''")}'`} && exec bash -l`.replace(/"/g,'\\"'),p=e==="powershell"?`'${d.replace(/'/g,"''")}'`:`"${d}"`;return`ssh ${c}-p ${i.port||22} -o StrictHostKeyChecking=accept-new -t ${i.user}@${i.host} ${p}`}function Vs(t){return`ssh://${t}/`}function ph(t){const e=xu(t);if(!e)return null;const n=an.value.find(i=>i.id===e.hostId);return n?{hostId:n.id,remote:vh(e.remote),label:n.name||`${n.user}@${n.host}`}:null}function vh(t){const e=(t??"").trim().replace(/\\/g,"/");return e?e.startsWith("/")?e.replace(/\/+$/,"")||"/":`/${e.replace(/\/+$/,"")}`:"/"}function Kl(t){if(!t.startsWith("ssh://"))return"";const e=t.slice(6),n=e.indexOf("/");return(n===-1?e:e.slice(0,n)).trim()}function Cu(t){if(!t.startsWith("ssh://"))return"";const e=t.slice(6),n=e.indexOf("/");return(n===-1?"":e.slice(n)).replace(/\/+$/,"")||"/"}function fl(t){const e=Kl(t);if(!e)return t;const n=an.value.find(u=>u.id===e),i=n?n.name||`${n.user}@${n.host}`:e,c=Cu(t);return c&&c!=="/"?`${i} · ${c}`:i}function Ha(t){const e=Kl(t);if(!e)return"";const n=Cu(t);if(!n||n==="/")return"";const i=n.lastIndexOf("/"),c=i<=0?"/":n.slice(0,i);return`ssh://${e}${c==="/"?"/":c}`}function Xr(t,e){return`${t.replace(/\/+$/,"")}/${e}`}async function hh(t=!1){bu.value&&!t||await Us()}function $u(t){if(!t.startsWith("ssh://"))return null;const e=t.slice(6),n=e.indexOf("/"),i=n===-1?e:e.slice(0,n);if(!i)return null;const c=n===-1?"":e.slice(n),u=an.value.find(w=>w.id===i),d=[{name:u?u.name||`${u.user}@${u.host}`:i,path:`ssh://${i}/`}];let p="";for(const w of c.split("/").filter(Boolean))p+=`/${w}`,d.push({name:w,path:`ssh://${i}${p}`});return d}const _n=gt({open:!1,editingId:null});function Su(){_n.editingId=null,_n.open=!0}function mh(t){_n.editingId=t,_n.open=!0}function ya(){_n.open=!1}const De=gt({key:"default",root:"",explorerPath:"",externalViewActive:!1,search:{q:"",hits:[],truncated:!1,running:!1,scope:""},termOpen:!1,termRequestCwd:"",termRequestCmd:"",termRequestSsh:null}),Wa=m("");function wa(t){Wa.value=t}const No=m(!1),Po=m(!1);async function Eu(t){if(!Wt(t))return{cwd:t,cmd:"",ssh:null};await hh();const e=ph(t);return e?{cwd:"",cmd:fh(t,Ue.termShell),ssh:e}:(X("info",y("remoteNoTerminal")),{cwd:"",cmd:"",ssh:null})}async function ko(t=""){Tu(await Eu(t)),De.termOpen?Xl.value++:De.termOpen=!0}function Tu(t){De.termRequestCwd=t.cwd,De.termRequestCmd=t.cmd,De.termRequestSsh=t.ssh}const Xl=m(0);async function gh(t=""){Tu(await Eu(t)),De.termOpen?Xl.value++:De.termOpen=!0}async function pl(t){const{root:e}=await Il(t,De.key);return e===De.root||(De.root=e,De.explorerPath=e,De.search.hits=[],De.search.q=""),e}function ws(t){return!De.root||yh(De.root,t)?!0:Ue.allowOutsideRoot}function yh(t,e){const n=u=>u.replace(/[\\/]+/g,"/").replace(/\/$/,""),i=n(t).toLowerCase(),c=n(e).toLowerCase();return c===i||c.startsWith(`${i}/`)}async function wh(){if(De.root)return;const{root:t}=await tp(De.key);if(t){De.root=t,De.explorerPath=t;return}const e=window.__DSH_FILE_WORKBENCH__?.getSessionDir?.();if(e){await pl(e);return}const n=window.__DSH_FILE_WORKBENCH__?.pickDirectory;if(n){const i=await n();i&&await pl(i)}}async function na(t){const e=window.__DSH_FILE_WORKBENCH__;if(e?.openInSidebar){if(Wt(t)){const n=await up(t);e.openInSidebar(n.path);return}e.openInSidebar(t)}}let Pi=0;async function fo(t,e){if(De.search.q=t,!t.trim()){De.search.hits=[],De.search.truncated=!1;return}const n=(e||De.root||"").replace(/[\\/]+$/,"");if(!n)return;const i=++Pi;De.search.running=!0;try{const{matches:c,truncated:u,byContent:v,snippets:d}=await sp(t,{key:De.key,path:n,limit:2e3,caseSensitive:No.value,regex:Po.value});if(i!==Pi)return;const p=new Set(v??[]);De.search.hits=c.map(w=>({name:w.slice(w.lastIndexOf("/")+1),path:`${n}/${w}`,isDir:!1,broken:!1,byContent:p.has(w),snippet:d?.[w]})),De.search.truncated=u,De.search.scope=n}finally{i===Pi&&(De.search.running=!1)}}const ie=gt({homeItems:[],listing:null,loading:!1,loadErr:"",view:"files",recycleItems:[],recycleLoading:!1,recycleErr:"",drives:[],drivesLoading:!1,drivesErr:""});async function Du(){ie.loadErr="";try{ie.homeItems=(await Hc(De.key)).items}catch(t){ie.loadErr=t.message}}const It=gt({history:[],idx:-1}),jo="thispc",Yr="回收站";function li(t){const e=t.trim();return e.startsWith("ssh://")?!0:/^[A-Za-z]:[\\/]/.test(e)||/^[\\/]{1,2}[^\\/]/.test(e)||/^[\\/]$/.test(e)}const bh=B(()=>It.idx>0),_h=B(()=>It.idx<It.history.length-1),kh=B(()=>ie.view==="files");function Fu(t,e){if(!e)return;const n=t===jo?t:t.replace(/[\\/]+$/,""),i=It.history[It.idx]===jo?jo:It.history[It.idx]?.replace(/[\\/]+$/,"")??"";n!==i&&(It.history.length=It.idx+1,It.history.push(n),It.idx=It.history.length-1)}async function Vt(t,e=!0){if(li(t)){ie.view="files",Fu(t,e),ie.loadErr="",ie.loading=!0;try{ie.listing=await mp(t,De.key)}catch(n){ie.loadErr=n.message}finally{ie.loading=!1}}}async function Yl(){ie.drivesErr="",ie.drivesLoading=!0;try{ie.drives=(await Wc()).drives??[]}catch(t){ie.drivesErr=t.message}finally{ie.drivesLoading=!1}}async function Ru(t=!0){Fu(jo,t),ie.view="computer",ie.loadErr="",ie.listing=null,await Yl()}async function Nu(t,e=!0){t===jo?await Ru(e):await Vt(t,e)}function Pu(){It.idx>0&&(It.idx-=1,Nu(It.history[It.idx],!1))}function Au(){It.idx<It.history.length-1&&(It.idx+=1,Nu(It.history[It.idx],!1))}async function Mu(){const t=ie.homeItems,e=t.find(n=>n.type==="home")?.path??t.find(n=>n.type==="workspace")?.path??t.find(n=>n.type==="drive")?.path;e&&await Vt(e)}async function vl(){ie.view==="files"&&ie.listing&&(ie.listing.parent?await Vt(ie.listing.parent):await Mu())}async function Ou(){const t=window.__DSH_FILE_WORKBENCH__?.getSessionDir?.();if(!t)return!1;const e=De.root;try{await pl(t)}catch{return!1}return De.root!==e&&await Du(),await Vt(t),!0}function Ft(){return ks("mycomputer"),ks("drives"),ie.view==="computer"?Yl():ie.view==="recycle"?bs():ie.listing?Vt(ie.listing.path,!1):Promise.resolve()}function xh(){return(ie.recycleItems??[]).map(t=>{const e=Date.parse(t.dateDeleted);return{name:t.name,path:t.fullPath,isDir:t.isDir,isSymlink:!1,broken:!1,hidden:!1,size:t.size||0,mtime:Number.isNaN(e)?void 0:e,recycleFullPath:t.fullPath,originalPath:t.originalPath,dateDeleted:t.dateDeleted}})}async function Lu(){ie.recycleErr="",ie.recycleLoading=!0,ie.loading=!0,ie.loadErr="";try{const t=(await dp()).items;ie.recycleItems=Array.isArray(t)?t:[],ie.listing={path:Yr,name:Yr,entries:xh(),truncated:!1}}catch(t){ie.recycleErr=t.message,ie.loadErr=t.message,ie.listing=null}finally{ie.recycleLoading=!1,ie.loading=!1}}async function Jr(){ie.view="recycle",await Lu()}function bs(){return Lu()}async function Ch(){(window.__DSH_FILE_WORKBENCH__?.getSessionDir?.()??null)&&await Ft()}const hl=B(()=>ie.listing?.path??"");let Zr=!1;function $h(){return Zr?!1:(Zr=!0,!0)}const Bu="vscode";function ri(){return typeof window<"u"?window.__DSH_SIDEBAR_RIGHT__:void 0}function Iu(t,e){ri()?.openTab(t,e)}function Jl(t){return ri()?.newEditorTab(t)??!1}function Sh(){const t=ri();if(!t)return!1;const e=t.editorTabLimit();return e>0&&t.editorTabCount()>=e}function Eh(t){ri()?.float(t)}let xo=null;function Th(){const t=xo;return xo=null,t}function Dh(){xo=null}let ml=null;function Qr(){const t=ml;return ml=null,t}function Zl(t,e={}){const n=t?.trim();if(!n)return;if(n.startsWith("ssh://")){Fh(n,e.isDir);return}xo=n;const i=Sh();if(!Jl({projectDir:n})){Iu(Bu,{params:{projectDir:n}});return}i&&X("info",y("vsReplacedOldest"))}async function Fh(t,e){const n=Vs(Kl(t));let i=e;i===void 0&&t!==n&&(i=(await Qi(t))?.isDir??!1);const c=t===n||i===!0;xo=c?t:n,ml=c?null:t;const u=xo;Jl({projectDir:u})||Iu(Bu,{params:{projectDir:u}})}const Nt=gt({list:[],history:[],archives:{}});let Rh=1,ec=!1;const ju=gt({value:!1});function Nh(t){ju.value=t}function Ql(t){const e=new Date(t),n=i=>String(i).padStart(2,"0");return`${e.getFullYear()}-${n(e.getMonth()+1)}-${n(e.getDate())}`}function er(){return Ql(Date.now())}function ba(t){return t.doneAt??t.startedAt}function Vu(t){let e=!0;for(let n=1;n<t.length;n++)if(ba(t[n-1])<ba(t[n])){e=!1;break}return e?!1:(t.sort((n,i)=>ba(i)-ba(n)),!0)}function zu(t){if(!t.length)return;const e=er(),n=Nt.archives[e]??(Nt.archives[e]=[]);n.push(...t),Vu(n),jl(Nt.archives)}async function Ph(){if(!ec){ec=!0;try{const t=await Vp(),e=await Up(),n=er(),i=[];let c=!1;for(const v of t){const d=Ql(v.doneAt??v.startedAt);d===n?i.push(v):((e[d]??=[]).push(v),c=!0)}let u=!1;for(const v of Object.keys(e))Vu(e[v])&&(u=!0);Nt.history=i,Nt.archives=e,(c||u)&&(ci(),jl(e))}catch{Nt.history=[],Nt.archives={}}}}function ci(){zp(Nt.history)}function Ah(t){const e=Ql(t.doneAt??t.startedAt);e===er()?(Nt.history.unshift(t),Nt.history.length>200&&(Nt.history.length=200),ci()):((Nt.archives[e]??(Nt.archives[e]=[])).unshift(t),jl(Nt.archives))}function sn(t,e,n,i){const c=Rh++,u=gt({id:c,label:t,detail:e,status:"running",startedAt:Date.now(),logs:[{time:Date.now(),status:"running",msg:t,file:e,fileType:n,fileSize:i}]});Nt.list.unshift(u),Nt.list.length>80&&(Nt.list.length=80);const v=(w,b)=>{u.status=w,u.doneAt=Date.now(),u.msg=b,u.logs.push({time:u.doneAt,status:w,msg:b??"",file:e}),Ah({label:u.label,detail:e,status:w,msg:b,startedAt:u.startedAt,doneAt:u.doneAt,logs:u.logs.map(x=>({...x}))})};return{step:(w,b,x,O,L)=>{u.status==="running"&&u.logs.push({time:Date.now(),status:"running",msg:w,file:b,detail:x,fileType:O,fileSize:L})},updateLabel:w=>{u.label=w},done:w=>v("done",w),fail:w=>v("error",w)}}async function Uu(){zu(Nt.history),Nt.history=[],Nt.list=Nt.list.filter(t=>t.status==="running"),ci()}async function Hu(){zu(Nt.history),Nt.history=[],Nt.list=[],ci()}const qn={state:Nt,startTask:sn,initTaskLogs:Ph,clearFinished:Uu,clearAll:Hu,setOpen:Nh,open:ju},{t:to}=Bt();function Mh(t){return new Promise(e=>setTimeout(e,t))}async function Wu(){if((ie.recycleItems?.length??0)===0||!await Mt({title:to("recycleEmpty"),message:to("recycleEmptyConfirm")}))return;const e=sn(to("recycleEmptying"),"");try{await hp();let n=ie.recycleItems?.length??0;for(let i=0;i<120;i+=1){await Mh(1e3);try{n=(await fp()).count}catch{}if(e.step(to("recycleEmptyProgress",{count:n})),n<=0)break}e.updateLabel(to("recycleEmptyDone")),e.done(to("recycleEmptyDone")),await bs()}catch(n){e.fail(n.message),X("error",n.message)}}function gl(){return Ue.theme==="dark"?!0:Ue.theme==="light"?!1:typeof document>"u"?!0:document.documentElement.style.colorScheme!==""?document.body.hasAttribute("data-ds-dark-theme"):typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const Gu=[["--dsh-bg","--dsw-alias-bg-base"],["--dsh-bg2","--dsw-alias-bg-layer-1"],["--dsh-border","--dsw-alias-border-l1"],["--dsh-fg","--dsw-alias-label-primary"],["--dsh-fg-weak","--dsw-alias-label-secondary"],["--dsh-hover","--dsw-alias-interactive-bg-hover"],["--dsh-accent","--dsw-alias-state-success-primary"]];function Oh(t){if(typeof document>"u")return;const e=t??document.body??document.documentElement,n=getComputedStyle(e),i=[document.documentElement,t].filter(c=>!!c);for(const[c,u]of Gu){const v=n.getPropertyValue(u).trim();if(v)for(const d of i)d.style.setProperty(c,v)}}function Lh(t){if(typeof document>"u")return;const e=[document.documentElement,t].filter(n=>!!n);for(const[n]of Gu)for(const i of e)i.style.removeProperty(n)}function Bh(){if(Ue.theme==="dark")return"dark";if(Ue.theme==="light")return"light";if(typeof document>"u")return"dark";const e=document.querySelector(".fw-root[data-theme]")?.getAttribute("data-theme");return e==="light"||e==="dark"?e:gl()?"dark":"light"}function tr(t){const e=m(gl()?"dark":"light");function n(){const v=gl();if(e.value=v?"dark":"light",t.value&&t.value.setAttribute("data-theme",e.value),typeof document<"u"){const d=document.documentElement;d.setAttribute("data-theme",e.value);const p=d.style.colorScheme!=="";Ue.theme==="auto"&&p?Oh(t.value):Lh(t.value),d.classList.toggle("dark",v),i(d),t.value&&i(t.value)}}function i(v){Ue.accentColor?v.style.setProperty("--dsh-accent",Ue.accentColor):v.style.removeProperty("--dsh-accent")}n();let c;typeof document<"u"&&typeof MutationObserver<"u"&&(c=new MutationObserver(n),c.observe(document.body,{attributes:!0,attributeFilter:["data-ds-dark-theme"]}));const u=typeof matchMedia<"u"?matchMedia("(prefers-color-scheme: dark)"):void 0;return u?.addEventListener("change",n),Ze(()=>[Ue.theme,Ue.accentColor],n,{deep:!1}),Ml(()=>{c?.disconnect(),u?.removeEventListener("change",n)}),e}const Ih=["data-theme"],jh={key:0,class:"fw-cm-header"},Vh={key:0,class:"fw-cm-sep"},zh=["onMouseenter","onClick"],Uh={class:"fw-cm-ico"},Hh={key:1},Wh={class:"fw-cm-label"},Gh={key:0,class:"fw-cm-hint"},qh={class:"fw-cm-check"},Kh={key:1,class:"fw-cm-arrow"},Xh=["title","onClick"],Yh={key:1,class:"fw-cm-footer"},Jh={key:0,class:"fw-cm-sep"},Zh=["onClick"],Qh={class:"fw-cm-ico"},em={key:1},tm={class:"fw-cm-label"},nm={key:0,class:"fw-cm-sep"},sm=["onClick"],om={class:"fw-cm-ico"},am={key:1},im={class:"fw-cm-label"},lm={class:"fw-cm-check"},rm=ht({__name:"ContextMenu",props:{items:{},x:{},y:{},maxHeight:{},footerItems:{},placement:{}},emits:["close"],setup(t,{emit:e}){const n=t,i=e,c=m(!1),u=m(null),v=m(null),d=m({x:n.x,y:n.y}),p=m(-1),w=m(!1),b=m(null),x=m({x:0,y:0}),O=m("dark");function L(){return O.value=Bh(),O.value}function P(me){return!!me.separator}Ze(()=>[n.x,n.y],([me,ne])=>{d.value={x:me,y:ne},p.value=-1,b.value=null,c.value=!0,L(),requestAnimationFrame(j)}),Ze(()=>n.items,()=>{c.value&&requestAnimationFrame(j)});function j(){const me=u.value;if(!me)return;const ne=window.innerWidth,le=window.innerHeight,Se=me.getBoundingClientRect();let Ve=d.value.x,we=d.value.y;Ve+Se.width>ne-4&&(Ve=Math.max(4,ne-Se.width-4)),we+Se.height>le-4&&(we=Math.max(4,le-Se.height-4)),Se.top<4&&(we=Math.max(4,we+(4-Se.top))),d.value={x:Ve,y:we}}function U(me,ne){p.value=me;const le=u.value,Se=n.items[me],Ve=ne?.currentTarget??le?.querySelectorAll(".fw-cm-item")[me]??null;w.value=!!le&&d.value.x+le.getBoundingClientRect().width+180>window.innerWidth,Se?.children?.length?(b.value=Se,$(Ve)):b.value=null}function $(me){const ne=me??null;if(!ne)return;const le=ne.getBoundingClientRect();let Ve=w.value?le.left-220:le.right-2;const we=Math.max(4,le.top-4);x.value={x:Ve,y:we},requestAnimationFrame(()=>{const Ne=v.value;if(!Ne)return;const W=Ne.getBoundingClientRect();let J=Ve,z=we;J+W.width>window.innerWidth-4&&(J=Math.max(4,window.innerWidth-W.width-4)),z+W.height>window.innerHeight-4&&(z=Math.max(4,window.innerHeight-W.height-4)),x.value={x:J,y:z}})}function ee(me){me.disabled||me.children?.length||(me.onClick?.(),I())}function G(me){me.disabled||(me.onClick?.(),I())}function A(me){me.trailing?.disabled||me.trailing?.onClick?.()}function pe(me){me.disabled||(me.onClick?.(),I())}function I(){c.value=!1,p.value=-1,b.value=null,i("close")}function ve(){I()}function $e(me){me.key==="Escape"&&I()}return ln(()=>{c.value=!0,L(),requestAnimationFrame(j),window.addEventListener("keydown",$e)}),Pt(()=>{window.removeEventListener("keydown",$e)}),(me,ne)=>(l(),Xe(Nc,{to:"body"},[c.value?(l(),r("div",{key:0,class:"fw-cm-backdrop",onMousedown:ve,onContextmenu:_e(ve,["prevent"])},[o("div",{ref_key:"menuEl",ref:u,class:te(["fw-cm",{"fw-cm-up":n.placement==="top"}]),"data-theme":O.value,style:_t({left:d.value.x+"px",top:d.value.y+"px"}),onMousedown:ne[2]||(ne[2]=_e(()=>{},["stop"])),onContextmenu:ne[3]||(ne[3]=_e(()=>{},["prevent"]))},[me.$slots.header?(l(),r("div",jh,[cf(me.$slots,"header",{},void 0,!0)])):N("",!0),o("div",{class:"fw-cm-scroll",style:_t(n.maxHeight?{maxHeight:n.maxHeight}:void 0)},[(l(!0),r(ae,null,Ae(t.items,(le,Se)=>(l(),r(ae,{key:Se},[P(le)?(l(),r("div",Vh)):(l(),r("div",{key:1,class:te(["fw-cm-item",{disabled:le.disabled,checked:le.checked,hasChild:!!le.children?.length}]),onMouseenter:Ve=>U(Se,Ve),onClick:Ve=>ee(le)},[o("span",Uh,[s(Ao)(le.icon??"")?(l(),Xe(oe,{key:0,name:le.icon??"",size:14},null,8,["name"])):(l(),r("span",Hh,a(le.icon??""),1))]),o("span",Wh,a(le.label),1),le.hint?(l(),r("span",Gh,a(le.hint),1)):N("",!0),o("span",qh,a(le.checked?"✓":""),1),le.children?.length?(l(),r("span",Kh,[h(oe,{name:"chevronRight",size:10})])):N("",!0),le.trailing?(l(),r("span",{key:2,class:te(["fw-cm-trailing",{disabled:le.trailing.disabled}]),title:le.trailing.title,onClick:_e(Ve=>A(le),["stop"]),onMousedown:ne[0]||(ne[0]=_e(()=>{},["stop"])),onMouseenter:ne[1]||(ne[1]=_e(()=>{},["stop"]))},[h(oe,{name:le.trailing.icon,size:12},null,8,["name"])],42,Xh)):N("",!0)],42,zh))],64))),128))],4),t.footerItems?.length?(l(),r("div",Yh,[(l(!0),r(ae,null,Ae(t.footerItems,(le,Se)=>(l(),r(ae,{key:"f"+Se},[P(le)?(l(),r("div",Jh)):(l(),r("div",{key:1,class:te(["fw-cm-item",{disabled:le.disabled}]),onClick:Ve=>pe(le)},[o("span",Qh,[s(Ao)(le.icon??"")?(l(),Xe(oe,{key:0,name:le.icon??"",size:14},null,8,["name"])):(l(),r("span",em,a(le.icon??""),1))]),o("span",tm,a(le.label),1)],10,Zh))],64))),128))])):N("",!0),b.value?(l(),r("div",{key:2,ref_key:"subEl",ref:v,class:te(["fw-cm fw-cm-sub",{"fw-cm-sub-left":w.value}]),style:_t({left:x.value.x+"px",top:x.value.y+"px"})},[(l(!0),r(ae,null,Ae(b.value.children,(le,Se)=>(l(),r(ae,{key:Se},[P(le)?(l(),r("div",nm)):(l(),r("div",{key:1,class:te(["fw-cm-item",{disabled:le.disabled,checked:le.checked}]),onClick:Ve=>G(le)},[o("span",om,[s(Ao)(le.icon??"")?(l(),Xe(oe,{key:0,name:le.icon??"",size:14},null,8,["name"])):(l(),r("span",am,a(le.icon??""),1))]),o("span",im,a(le.label),1),o("span",lm,a(le.checked?"✓":""),1)],10,sm))],64))),128))],6)):N("",!0)],46,Ih)],32)):N("",!0)]))}}),Zt=xt(rm,[["__scopeId","data-v-00e617b4"]]);function pn(){const t=m(!1),e=m(0),n=m(0),i=m([]);function c(d,p=[]){u(d.clientX,d.clientY,p)}function u(d,p,w=[]){i.value=w,e.value=d,n.value=p,t.value=!0}function v(){t.value=!1}return{cmOpen:t,cmX:e,cmY:n,cmItems:i,openMenu:c,openMenuAt:u,closeMenu:v}}const cm={class:"fw-clone-head"},um={class:"fw-clone-badge"},dm={class:"fw-clone-headtext"},fm={class:"fw-clone-headtitle"},pm={class:"fw-clone-headsub"},vm={class:"fw-ssh-dlg-body"},hm={class:"fw-ssh-field"},mm={class:"fw-ssh-lb"},gm={class:"fw-ssh-field"},ym={class:"fw-ssh-lb"},wm={class:"fw-ssh-addr"},bm={class:"fw-ssh-field"},_m={class:"fw-ssh-lb"},km={class:"fw-ssh-addr"},xm={key:0,class:"fw-ssh-err"},Cm=ht({__name:"SshHostDialog",setup(t){const{t:e}=Bt(),n=B({get:()=>_n.open,set:U=>{U||ya()}}),i=B(()=>_n.editingId!==null),c=B(()=>an.value.find(U=>U.id===_n.editingId)??null),u=gt({name:"",user:"",host:"",authType:"password",password:"",privateKeyPath:""}),v=m("22"),d=B(()=>Math.trunc(Number(v.value))||22),p=m(!1),w=m(""),b=B(()=>{const U=u.user.trim()||"user",$=u.host.trim()||"host";return`${U}@${$}`});Ze(()=>_n.open,U=>{if(U)if(w.value="",p.value=!1,i.value&&c.value){const $=c.value;u.name=$.name,u.user=$.user,u.host=$.host,u.authType=$.authType,u.password="",u.privateKeyPath=$.privateKeyPath??"",v.value=String($.port)}else u.name="",u.user="",u.host="",u.authType="password",u.password="",u.privateKeyPath="",v.value="22"},{immediate:!0});function x(){ya()}function O(){ya()}async function L(U){p.value=!0,w.value="";try{await U()}catch($){w.value=$ instanceof Error?$.message:String($)}finally{p.value=!1}}async function P(){if(!u.host.trim()||!u.user.trim()){oo(e("sshRequired"));return}if(i.value&&_n.editingId){const U=c.value;if(u.authType==="password"?!u.password.trim():!u.privateKeyPath.trim()||u.privateKeyPath.trim()===(U?.privateKeyPath??"")){const ee=_n.editingId??void 0;await L(async()=>{const G=await Yi({id:ee});G.ok?ls(`${e("sshTestOk")}${G.banner?` (${G.banner})`:""}`):ds(`${e("sshTestFail")}: ${G.error??""}`)});return}}await L(async()=>{const U=await Yi({host:u.host.trim(),port:d.value,user:u.user.trim(),auth:u.authType==="password"?{type:"password",password:u.password}:{type:"key",privateKeyPath:u.privateKeyPath.trim()}});U.ok?ls(`${e("sshTestOk")}${U.banner?` (${U.banner})`:""}`):ds(`${e("sshTestFail")}: ${U.error??""}`)})}async function j(){if(!u.host.trim()||!u.user.trim()){oo(e("sshRequired"));return}await L(async()=>{if(i.value&&_n.editingId){const U=await lp({id:_n.editingId,name:u.name.trim()||void 0,host:u.host.trim(),port:d.value,user:u.user.trim(),auth:u.authType==="password"?{type:"password",password:u.password||void 0}:{type:"key",privateKeyPath:u.privateKeyPath.trim()}});ls(e("sshUpdateSuccess")),await Us(),await Ua(U.host.id)}else{const U=await ip({name:u.name.trim()||void 0,host:u.host.trim(),port:d.value,user:u.user.trim(),auth:u.authType==="password"?{type:"password",password:u.password}:{type:"key",privateKeyPath:u.privateKeyPath.trim()}});ls(e("sshAddSuccess")),await Us(),await ul(),await Ua(U.host.id)}ya()})}return(U,$)=>{const ee=$s,G=ti,A=ei,pe=An,I=rn;return l(),Xe(I,{modelValue:n.value,"onUpdate:modelValue":$[7]||($[7]=ve=>n.value=ve),class:"fw-ssh-dlg",width:"420px","close-on-click-modal":!0,"append-to-body":"",onClosed:x},{header:se(()=>[o("div",cm,[o("span",um,[h(oe,{name:"hardDrive",size:20})]),o("div",dm,[o("div",fm,a(i.value?s(e)("sshEditTitle"):s(e)("sshNewHost")),1),o("div",pm,a(s(e)("sshHostCaption")),1)])])]),footer:se(()=>[h(pe,{size:"small",loading:p.value,onClick:P},{default:se(()=>[ue(a(s(e)("sshTestConn")),1)]),_:1},8,["loading"]),h(pe,{size:"small",onClick:O},{default:se(()=>[ue(a(s(e)("sshCancel")),1)]),_:1}),h(pe,{size:"small",type:"primary",loading:p.value,onClick:j},{default:se(()=>[ue(a(i.value?s(e)("sshSaveEdit"):s(e)("sshSaveAdd")),1)]),_:1},8,["loading"])]),default:se(()=>[o("div",vm,[o("label",hm,[o("span",mm,a(s(e)("sshName")),1),h(ee,{modelValue:u.name,"onUpdate:modelValue":$[0]||($[0]=ve=>u.name=ve),size:"small",placeholder:b.value},null,8,["modelValue","placeholder"])]),o("label",gm,[o("span",ym,a(s(e)("sshAddr")),1),o("span",wm,[h(ee,{modelValue:u.user,"onUpdate:modelValue":$[1]||($[1]=ve=>u.user=ve),size:"small",placeholder:s(e)("sshUser"),class:"fw-ssh-user"},null,8,["modelValue","placeholder"]),$[8]||($[8]=o("span",{class:"fw-ssh-at"},"@",-1)),h(ee,{modelValue:u.host,"onUpdate:modelValue":$[2]||($[2]=ve=>u.host=ve),size:"small",placeholder:s(e)("sshHostAddr"),class:"fw-ssh-host"},null,8,["modelValue","placeholder"]),$[9]||($[9]=o("span",{class:"fw-ssh-at"},":",-1)),h(ee,{modelValue:v.value,"onUpdate:modelValue":$[3]||($[3]=ve=>v.value=ve),size:"small",placeholder:"22",class:"fw-ssh-port"},null,8,["modelValue"])])]),o("label",bm,[o("span",_m,a(s(e)("sshAuth")),1),o("span",km,[h(A,{modelValue:u.authType,"onUpdate:modelValue":$[4]||($[4]=ve=>u.authType=ve),size:"small",class:"fw-ssh-auth"},{default:se(()=>[h(G,{value:"password",label:s(e)("sshAuthPassword")},null,8,["label"]),h(G,{value:"key",label:s(e)("sshAuthKey")},null,8,["label"])]),_:1},8,["modelValue"]),u.authType==="password"?(l(),Xe(ee,{key:0,modelValue:u.password,"onUpdate:modelValue":$[5]||($[5]=ve=>u.password=ve),size:"small",type:"password","show-password":"",placeholder:i.value&&c.value?.hasSecret?s(e)("sshKeepSecret"):s(e)("sshPassword"),class:"fw-ssh-secret"},null,8,["modelValue","placeholder"])):(l(),Xe(ee,{key:1,modelValue:u.privateKeyPath,"onUpdate:modelValue":$[6]||($[6]=ve=>u.privateKeyPath=ve),size:"small",placeholder:s(e)("sshKeyPath"),class:"fw-ssh-secret"},null,8,["modelValue","placeholder"]))])]),w.value?(l(),r("div",xm,a(w.value),1)):N("",!0)])]),_:1},8,["modelValue"])}}}),$m=xt(Cm,[["__scopeId","data-v-615d3584"]]);function qu(t,e){const n=(t??"").replace(":","").trim().charAt(0).toUpperCase();return n?e?`${e} (${n}:)`:y("driveLabel",{drive:n}):e||"/"}function Is(t){return qu(t.letter,t.label)}function Ku(t){return t.type!=="drive"?t.name:qu(t.path?.charAt(0)??"",t.label)}const Ga=5;function Xu(t){if(typeof t=="string")return t;if(!t)return"";const e=typeof document<"u"?document.documentElement.lang||navigator.language:"en",n=e.toLowerCase();return t[e]??t[n]??(n.startsWith("zh")?t.zh??t.en:t.en??t.zh)??Object.values(t)[0]??""}const Go=m([]);function nr(t){ui(t.id),Go.value=[...Go.value,t].sort((e,n)=>(e.order??0)-(n.order??0))}function ui(t){Go.value=Go.value.filter(e=>e.id!==t)}function Yu(){return Go.value}const qo=m([]);function Ju(t){sr(t.id),qo.value=[...qo.value,t].sort((e,n)=>(e.order??0)-(n.order??0))}function sr(t){qo.value=qo.value.filter(e=>e.id!==t)}function Sm(){return qo.value}function qa(t){if(!t)return;t.style.overflowY="auto";const e=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT);for(let n=e.firstChild();n;n=e.nextSibling()){const i=n;if(i.scrollHeight<=i.clientHeight+1)continue;const c=getComputedStyle(i).overflowY;(c==="hidden"||c==="clip")&&(i.style.overflowY="auto")}}const sa=new Map;function Zu(t,e){sa.set(t,e)}function or(t){return sa.delete(t)}function Qu(t){return sa.has(t)}function ar(){return[...sa.keys()]}function di(t,...e){const n=sa.get(t);if(n)return n(...e)}const Ko=m([]);function ed(t){fi(t.id),Ko.value=[...Ko.value,t].sort((e,n)=>(e.order??0)-(n.order??0))}function fi(t){Ko.value=Ko.value.filter(e=>e.id!==t)}function pi(){return Ko.value}const Xo=m([]);function td(t){vi(t.id),Xo.value=[...Xo.value,t].sort((e,n)=>(e.order??0)-(n.order??0))}function vi(t){Xo.value=Xo.value.filter(e=>e.id!==t)}function Yo(){return Xo.value}const Jo=m([]);function nd(t){ir(t.id),Jo.value=[...Jo.value,t].sort((e,n)=>(e.order??0)-(n.order??0))}function ir(t){Jo.value=Jo.value.filter(e=>e.id!==t)}function Ka(){return Jo.value}const sd={start(t,e){return sn(t,e?.detail,e?.fileType,e?.fileSize)},clearFinished(){return Uu()},clearAll(){return Hu()}};function Em(){const e=window.__dshFileWorkbenchVSCode__?.__proxy;return e?(e.rebindVSCode({registerView:nr,unregisterView:ui,registerCommand:Zu,executeCommand:di,hasCommand:Qu,listCommands:ar,unregisterCommand:or,registerStatus:ed,unregisterStatus:fi,listStatus:pi,registerMenu:td,unregisterMenu:vi,listMenu:Yo}),e.rebindWorkbench({registerView:Ju,unregisterView:sr,registerStatus:nd,unregisterStatus:ir,listStatus:Ka,backgroundTasks:sd}),queueMicrotask(()=>e.flush()),!0):!1}if(typeof window<"u"){const t=window,e={apiVersion:Ga,activityBar:{register:nr,unregister:ui},commands:{register:Zu,unregister:or,execute:di,list:ar,has:Qu},statusbar:{register:ed,unregister:fi,list:pi,registerMenu:td,unregisterMenu:vi,listMenu:Yo}},n={apiVersion:Ga,activityBar:{register:Ju,unregister:sr},statusbar:{register:nd,unregister:ir,list:Ka},backgroundTasks:sd};Em()||(t.__dshFileWorkbenchVSCode__=e,t.__dshFileWorkbenchWorkbench__=n)}const Tm=["title"],Dm={class:"fw-nav-ico"},Fm={class:"fw-nav-label"},Rm=["title","onClick","onContextmenu"],Nm={class:"fw-nav-ico"},Pm={class:"fw-nav-label"},Am=["title"],Mm=["title"],Om={class:"fw-nav-ico"},Lm={class:"fw-nav-label"},Bm=["title","onClick","onContextmenu"],Im={class:"fw-nav-ico"},jm={class:"fw-nav-label"},Vm=["title"],zm=["aria-expanded"],Um={class:"fw-sec-txt"},Hm={class:"fw-sec-icon"},Wm={key:0,class:"fw-sec-b"},Gm={key:0,class:"fw-nav-empty is-err"},qm=["title","onClick","onContextmenu"],Km={class:"fw-nav-ico"},Xm={class:"fw-nav-label"},Ym=["aria-expanded"],Jm={class:"fw-sec-txt"},Zm={key:0,class:"fw-sec-b"},Qm=["title","onClick"],eg={class:"fw-nav-ico"},tg={key:1},ng={class:"fw-nav-label"},sg=["aria-expanded"],og={class:"fw-sec-txt"},ag={key:0,class:"fw-sec-b"},ig=["title","onClick","onContextmenu"],lg={class:"fw-nav-ico"},rg={class:"fw-nav-label"},cg=["title"],ug=["aria-expanded"],dg={class:"fw-sec-txt"},fg={key:0,class:"fw-sec-b"},pg={key:0,class:"fw-nav-empty"},vg=["title","onClick","onContextmenu"],hg={class:"fw-nav-ico"},mg={class:"fw-nav-label"},gg={key:2,class:"fw-error"},yg={class:"fw-error-ico"},wg=ht({__name:"NavPane",props:{externalViews:{default:()=>[]},externalCollapsed:{type:Boolean,default:!1},activeExternalId:{},externalActive:{type:Boolean}},emits:["toggle-external","select-external","select-local"],setup(t,{emit:e}){const{t:n}=Bt(),i=t,c=e,u=B(()=>i.externalViews??[]),v=B(()=>i.externalCollapsed===!0),d=B(()=>i.activeExternalId??""),p=B(()=>i.externalActive===!0);function w(H){return Xu(H.title)}const b=zn.navGroups;function x(H){b[H]=!b[H],Ta()}ln(async()=>{await Us(),ch(),await ul()});function O(H){if(ne.value||ie.view!=="files")return!1;const R=ie.listing?.path??"";return R?me(R).startsWith(me(Vs(H.id))):!1}function L(H){const R=za(H.id),Z=n(R==="online"?"sshStatusOnline":R==="offline"?"sshStatusOffline":R==="checking"?"sshStatusChecking":"sshStatusUnknown");return R==="offline"&&cl(H.id)?`${Z}：${cl(H.id)}`:Z}function P(H){c("select-local"),ne.value=null,Vt(Vs(H.id)),Ua(H.id)}const j=m("");function U(H,R){ce(H,[{label:n("menuOpen"),icon:"arrowRight",onClick:()=>P(R)},{label:n("sshTest"),icon:"refresh",onClick:()=>void G(R)},{label:n("menuOpenTerminal"),icon:"terminal",onClick:()=>ko(Vs(R.id))},{separator:!0},{label:n("sshEdit"),icon:"gear",onClick:()=>mh(R.id)},{label:j.value===R.id?n("sshDeleteConfirm"):n("sshDelete"),icon:"trash",onClick:()=>void A(R)},{separator:!0},{label:n("menuCopyPath"),icon:"link",onClick:()=>void Le(Vs(R.id))}])}function $(H){ce(H,[{label:n("sshNewHost"),icon:"plus",onClick:()=>Su()},{separator:!0},{label:b.ssh?n("navCollapse"):n("navExpand"),icon:b.ssh?"chevronDown":"chevronRight",onClick:()=>x("ssh")},{label:n("menuRefresh"),icon:"refresh",onClick:()=>void ee()}])}async function ee(){await Us(),await ul()}async function G(H){const R=await Yi({id:H.id});R.ok?X("ok",`${n("sshTestOk")}${R.banner?` (${R.banner})`:""}`):X("error",`${n("sshTestFail")}: ${R.error??""}`),await Ua(H.id)}async function A(H){if(j.value!==H.id){j.value=H.id;return}j.value="",await rp(H.id),await Us()}const pe=B(()=>ie.homeItems),I=["desktop","download"],ve=B(()=>pe.value.filter(H=>I.includes(H.type))),$e=B(()=>pe.value.find(H=>H.type==="home")??null),me=H=>H.replace(/[\\/]+/g,"/").replace(/\/$/,"").toLowerCase(),ne=m(null);function le(){if(ne.value||ie.view!=="files")return null;const H=ie.listing?.path??"";if(!H)return null;const R=me(H);let Z=null,Ee=-1;for(const M of pe.value){const T=me(M.path);!T||R!==T&&!R.startsWith(`${T}/`)||T.length>Ee&&(Ee=T.length,Z=M)}return Z}function Se(H){return le()?.path===H.path}function Ve(H){if(ne.value||ie.view!=="files")return!1;const R=ie.listing?.path??"";return R?H.letter?R.toLowerCase().startsWith(`${H.letter.toLowerCase()}:`):me(R)==="/":!1}function we(H){if(c("select-local"),ne.value=null,H.type==="recycle"){Jr();return}Vt(H.path)}function Ne(){c("select-local"),ne.value=null,b.myComputer||(b.myComputer=!0,Ta()),Ru()}function W(){b.myComputer=!b.myComputer,Ta()}function J(H){c("select-local"),ne.value=null,Vt(H.path)}function z(){c("select-local"),ne.value=null,Jr()}const Q=H=>H.replace(/[\\/]+$/,"").split(/[\\/]/).pop()||H;function ge(H){const R=Math.max(H.lastIndexOf("/"),H.lastIndexOf("\\"));return R<0?H:H.slice(0,R)}function je(H){return Wt(H)?Ha(H)||H:ge(H)}async function Ke(H){ne.value=H;try{const R=await Oa(H);Vt(R.isDir?H:je(H))}catch{Vt(je(H))}}const Qe=B(()=>zs.value.map(H=>({path:H,name:Q(H)})));async function ye(H){c("select-local"),ne.value=H;try{(await Oa(H)).isDir?Vt(H):(na(H),Vt(ge(H)))}catch{Vt(H)}}function be(H){switch(H.type){case"drive":return Ku(H);case"home":return n("navHome");case"desktop":return n("desktopEntry");case"download":return n("downloadEntry");case"documents":return n("documentEntry");case"pictures":return n("pictureEntry");case"music":return n("musicEntry");case"videos":return n("videoEntry");case"gallery":return n("navGallery");case"workspace":return n("workspaceEntry");case"recycle":return n("recycleBin");default:return H.name}}function Ye(H){switch(H.type){case"drive":return"hardDrive";case"recycle":return"trash";case"workspace":return"folder";case"home":return"home";case"desktop":return"monitor";case"download":return"download";case"documents":return"fileText";case"pictures":return"image";case"music":return"music";case"videos":return"video";case"gallery":return"image";default:return"folder"}}const{cmOpen:st,cmX:fe,cmY:ke,cmItems:qe,openMenu:ce}=pn();function Ie(H,R,Z={}){const Ee=lo(R),M=[Z.openParent?{label:n("menuOpen"),icon:"arrowRight",onClick:()=>void Ke(R)}:{label:n("menuOpen"),icon:"arrowRight",onClick:()=>void Vt(R)}];Z.openEditor!==!1&&M.push({label:n("menuOpenInEditor"),icon:"code",onClick:()=>Zl(R)}),M.push({separator:!0}),M.push({label:n(Ee?"favoriteRemove":"favoriteAdd"),icon:"star",onClick:()=>{const T=Va(R);X("ok",n(T?"favoriteAdded":"favoriteRemoved"))}}),M.push({label:n("menuCopyPath"),icon:"link",onClick:()=>void Le(R)}),Z.openTerminal!==!1&&M.push({label:n("menuOpenTerminal"),icon:"terminal",onClick:()=>ko(R)}),ce(H,M)}function rt(H,R){Ie(H,R.path)}function yt(H){ce(H,[{label:b.myComputer?n("navCollapse"):n("navExpand"),icon:b.myComputer?"chevronDown":"chevronRight",onClick:()=>x("myComputer")},{label:n("menuOpen"),icon:"arrowRight",onClick:Ne},{separator:!0},{label:n("menuRefresh"),icon:"refresh",onClick:()=>void Ft()}])}function ut(H,R){Ie(H,R.path)}function it(H){ce(H,[{label:n("menuOpen"),icon:"arrowRight",onClick:z},{label:n("menuRefresh"),icon:"refresh",onClick:()=>void Ft()},{separator:!0},{label:n("recycleEmpty"),icon:"trash",disabled:(ie.recycleItems?.length??0)===0,onClick:()=>void Wu()}])}async function Le(H){try{await navigator.clipboard.writeText(H),X("ok",n("menuPathCopied"))}catch{X("error",n("menuPathCopyFail"))}}return(H,R)=>(l(),r("div",{class:te(["fw-nav",{"external-active":p.value}])},[$e.value?(l(),r("button",{key:0,class:te(["fw-nav-item fw-nav-top fw-nav-leaf",{active:!p.value&&Se($e.value)}]),title:$e.value.path,onClick:R[0]||(R[0]=Z=>we($e.value)),onContextmenu:R[1]||(R[1]=_e(Z=>rt(Z,$e.value),["prevent","stop"]))},[o("span",Dm,[h(oe,{name:"home",size:14})]),o("span",Fm,a(be($e.value)),1)],42,Tm)):N("",!0),(l(!0),r(ae,null,Ae(ve.value.filter(Z=>Z.type!=="download"),Z=>(l(),r("button",{key:Z.path,class:te(["fw-nav-item fw-nav-top fw-nav-leaf",{active:!p.value&&Se(Z)}]),title:Z.path,onClick:Ee=>we(Z),onContextmenu:_e(Ee=>rt(Ee,Z),["prevent","stop"])},[o("span",Nm,[h(oe,{name:Ye(Z),size:14},null,8,["name"])]),o("span",Pm,a(be(Z)),1),o("span",{class:"fw-nav-pin",title:s(n)("favoritePin")},[h(oe,{name:"pin",size:11})],8,Am)],42,Rm))),128)),o("button",{class:te(["fw-nav-item fw-nav-top",{active:!p.value&&s(ie).view==="recycle"}]),title:s(n)("recycleBin"),onClick:z,onContextmenu:_e(it,["prevent","stop"])},[o("span",Om,[h(oe,{name:"trash",size:14})]),o("span",Lm,a(s(n)("recycleBin")),1)],42,Mm),R[7]||(R[7]=o("div",{class:"fw-nav-div","aria-hidden":"true"},null,-1)),(l(!0),r(ae,null,Ae(ve.value.filter(Z=>Z.type==="download"),Z=>(l(),r("button",{key:Z.path,class:te(["fw-nav-item fw-nav-top fw-nav-leaf",{active:!p.value&&Se(Z)}]),title:Z.path,onClick:Ee=>we(Z),onContextmenu:_e(Ee=>rt(Ee,Z),["prevent","stop"])},[o("span",Im,[h(oe,{name:Ye(Z),size:14},null,8,["name"])]),o("span",jm,a(be(Z)),1),o("span",{class:"fw-nav-pin",title:s(n)("favoritePin")},[h(oe,{name:"pin",size:11})],8,Vm)],42,Bm))),128)),R[8]||(R[8]=o("div",{class:"fw-nav-div","aria-hidden":"true"},null,-1)),o("div",{class:te(["fw-nav-sec",{collapsed:!s(b).myComputer,active:!p.value&&s(ie).view==="computer"}])},[o("button",{class:"fw-sec-h","aria-expanded":s(b).myComputer,onClick:W,onContextmenu:_e(yt,["prevent","stop"])},[o("span",{class:te(["fw-caret",{open:s(b).myComputer}])},[h(oe,{name:"chevronDown",size:11})],2),o("span",Um,[o("span",Hm,[h(oe,{name:"monitor",size:14})]),ue(a(s(n)("navThisPc")),1)])],40,zm),s(b).myComputer?(l(),r("div",Wm,[s(ie).drivesErr?(l(),r("div",Gm,a(s(ie).drivesErr),1)):N("",!0),(l(!0),r(ae,null,Ae(s(ie).drives,Z=>(l(),r("button",{key:Z.path,class:te(["fw-nav-item fw-nav-drive",{active:!p.value&&Ve(Z)}]),title:Z.path,onClick:Ee=>J(Z),onContextmenu:_e(Ee=>ut(Ee,Z),["prevent","stop"])},[o("span",Km,[h(oe,{name:"hardDrive",size:13})]),o("span",Xm,a(Z.name),1)],42,qm))),128))])):N("",!0)],2),u.value.length?(l(),r("div",{key:1,class:te(["fw-nav-sec fw-nav-external",{collapsed:v.value}])},[o("button",{class:"fw-sec-h","aria-expanded":!v.value,onClick:R[2]||(R[2]=Z=>c("toggle-external"))},[o("span",{class:te(["fw-caret",{open:!v.value}])},[h(oe,{name:"chevronDown",size:11})],2),o("span",Jm,a(s(n)("externalInjection")),1)],8,Ym),v.value?N("",!0):(l(),r("div",Zm,[(l(!0),r(ae,null,Ae(u.value,Z=>(l(),r("button",{key:Z.id,class:te(["fw-nav-item fw-nav-external-item",{active:d.value===Z.id}]),title:w(Z),onClick:Ee=>c("select-external",Z.id)},[o("span",eg,[s(Ao)(Z.icon??"")?(l(),Xe(oe,{key:0,name:Z.icon??"",size:14},null,8,["name"])):(l(),r("span",tg,a(w(Z).slice(0,1)),1))]),o("span",ng,[o("span",null,a(w(Z)),1)])],10,Qm))),128))]))],2)):N("",!0),o("div",{class:te(["fw-nav-sec",{collapsed:!s(b).ssh}])},[o("button",{class:"fw-sec-h","aria-expanded":s(b).ssh,onClick:R[3]||(R[3]=Z=>x("ssh")),onContextmenu:_e($,["prevent","stop"])},[o("span",{class:te(["fw-caret",{open:s(b).ssh}])},[h(oe,{name:"chevronDown",size:11})],2),o("span",og,a(s(n)("sshNavGroup")),1)],40,sg),s(b).ssh?(l(),r("div",ag,[s(an).length===0?(l(),r("div",{key:0,class:"fw-nav-empty",onContextmenu:_e($,["prevent","stop"])},a(s(n)("sshEmpty")),33)):N("",!0),(l(!0),r(ae,null,Ae(s(an),Z=>(l(),r("button",{key:Z.id,class:te(["fw-nav-item",{active:!p.value&&O(Z)}]),title:`${Z.user}@${Z.host}:${Z.port}`,onClick:Ee=>P(Z),onContextmenu:_e(Ee=>U(Ee,Z),["prevent","stop"])},[o("span",lg,[h(oe,{name:"globe",size:13})]),o("span",rg,a(Z.name||`${Z.user}@${Z.host}`),1),o("span",{class:te(["fw-ssh-dot",`is-${s(za)(Z.id)}`]),title:L(Z)},null,10,cg)],42,ig))),128))])):N("",!0)],2),o("div",{class:te(["fw-nav-sec",{collapsed:!s(b).favorites}])},[o("button",{class:"fw-sec-h","aria-expanded":s(b).favorites,onClick:R[4]||(R[4]=Z=>x("favorites"))},[o("span",{class:te(["fw-caret",{open:s(b).favorites}])},[h(oe,{name:"chevronDown",size:11})],2),o("span",dg,a(s(n)("favorites")),1)],8,ug),s(b).favorites?(l(),r("div",fg,[Qe.value.length===0?(l(),r("div",pg,a(s(n)("emptyFavorites")),1)):N("",!0),(l(!0),r(ae,null,Ae(Qe.value,Z=>(l(),r("button",{key:Z.path,class:te(["fw-nav-item",{active:!p.value&&ne.value===Z.path}]),title:Z.path,onClick:Ee=>ye(Z.path),onContextmenu:_e(Ee=>Ie(Ee,Z.path,{openEditor:!1,openTerminal:!1,openParent:!0}),["prevent","stop"])},[o("span",hg,[h(oe,{name:"star",size:13})]),o("span",mg,a(Z.name),1)],42,vg))),128))])):N("",!0)],2),s(ie).loadErr?(l(),r("div",gg,[o("span",yg,[h(oe,{name:"warning",size:16})]),o("span",null,a(s(ie).loadErr),1),o("button",{class:"fw-retry",onClick:R[5]||(R[5]=Z=>s(Ft)())},a(s(n)("retry")),1)])):N("",!0),s(st)?(l(),Xe(Zt,{key:3,items:s(qe),x:s(fe),y:s(ke),onClose:R[6]||(R[6]=Z=>st.value=!1)},null,8,["items","x","y"])):N("",!0),h($m)],2))}}),bg=xt(wg,[["__scopeId","data-v-f2446309"]]),Xa={start:0,end:0,padBefore:0,padAfter:0,total:0};function tc(t,e){return t<0?0:t>e?e:t}function _g(t,e,n,i=8){const c=m({...Xa});function u(){const p=t.value,w=e.value;if(!p||w<=0||p.clientHeight<=0){c.value={...Xa};return}const b=Math.max(0,p.scrollTop),x=tc(Math.floor(b/n)-i,w),O=Math.ceil(p.clientHeight/n)+i*2,L=tc(x+O,w);c.value={start:x,end:L,padBefore:x*n,padAfter:(w-L)*n,total:w*n}}function v(){u()}let d=null;return Ze(t,p=>{d&&(d.disconnect(),d=null),Dt(u),p&&(d=new ResizeObserver(()=>{u()}),d.observe(p))}),Ze(e,()=>{Dt(u)}),Ml(()=>{d?.disconnect(),d=null}),{range:c,onScroll:v,compute:u}}function kg(t,e,n=90,i=3){const c=[],u=m({...Xa}),v=new WeakMap;let d=null;function p(){return d||(d=new ResizeObserver(j=>{let U=!1;for(const $ of j){const ee=v.get($.target);if(ee===void 0)continue;const G=Math.max(1,Math.round($.contentRect.height));c[ee]!==G&&(c[ee]=G,U=!0)}U&&b()})),d}function w(j){return c[j]??n}function b(){const j=t.value,U=e.value;if(!j||U<=0||j.clientHeight<=0){u.value={...Xa};return}c.length>U&&(c.length=U);const $=Math.max(0,j.scrollTop),ee=new Array(U+1);ee[0]=0;for(let ne=0;ne<U;ne++)ee[ne+1]=ee[ne]+w(ne);const G=ee[U];let A=0,pe=U;const I=$-i*n;for(;A<pe;){const ne=A+pe>>1;ee[ne]<I?A=ne+1:pe=ne}let ve=Math.max(0,A-i),$e=ve;const me=$+j.clientHeight+i*n;for(;$e<U&&ee[$e+1]<=me;)$e++;$e=Math.min(U,$e+i),u.value={start:ve,end:$e,padBefore:ee[ve],padAfter:G-ee[$e],total:G}}function x(){b()}let O=null;Ze(t,j=>{O&&(O.disconnect(),O=null),Dt(b),j&&(O=new ResizeObserver(()=>b()),O.observe(j))});function L(j){return U=>{const $=U;if(!$)return;const ee=p();c.length<j+1&&(c.length=j+1),v.set($,j),ee.observe($);const G=Math.max(1,Math.round($.getBoundingClientRect().height));c[j]!==G&&(c[j]=G,Dt(b))}}function P(){c.length=0,Dt(b)}return Ze(e,()=>{Dt(b)}),Ml(()=>{O?.disconnect(),O=null,d?.disconnect(),d=null}),{range:u,onScroll:x,compute:b,measure:L,resetHeights:P}}const xg={class:"fw-search"},Cg={class:"fw-search-head"},$g={class:"fw-tree-head"},Sg={class:"fw-search-opts"},Eg=["title"],Tg=["title"],Dg={key:0,class:"fw-loading"},Fg={key:1,class:"fw-count"},Rg={class:"fw-count-row"},Ng={key:0,class:"fw-scopeline"},Pg={key:2,class:"fw-empty"},Ag=["onClick","title"],Mg={class:"fw-ico"},Og={class:"fw-namerow"},Lg={class:"fw-hitname"},Bg={key:0,class:"fw-badge"},Ig={class:"fw-hitpath"},jg={key:0,class:"fw-hitsnippet"},Vg=ht({__name:"SearchPane",setup(t){const{t:e}=Bt(),n=m(null),i=B(()=>De.search.hits.length),c=kg(n,i,56),u=B(()=>De.search.hits.slice(c.range.value.start,c.range.value.end));Ze(()=>De.search.q,()=>{c.resetHeights(),n.value&&(n.value.scrollTop=0)});function v(){fo("")}function d(){const j=De.search.q.trim();j&&fo(j)}function p(){No.value=!No.value,d()}function w(){Po.value=!Po.value,d()}function b(j){na(j)}function x(j){const U=(De.root||"").replace(/[\\/]+$/,"");return j.startsWith(U)?j.slice(U.length+1):j}const O=B(()=>De.search.hits.filter(j=>j.byContent)),L=m(!1);async function P(){const j=De.search.q.trim(),U=O.value.length;if(!U||!j)return;const $=await us({title:e("searchReplaceTitle"),message:e("searchReplaceConfirm",{files:U,count:U}),placeholder:e("findReplacePlaceholder")});if($!==null){L.value=!0;try{const ee=await Uc(j,$,{key:De.key,scope:De.search.scope||void 0,caseSensitive:No.value,regex:Po.value});X("ok",e("searchReplaceDone",{files:ee.files,count:ee.replacements})),fo(j)}catch(ee){X("error",ee.message)}finally{L.value=!1}}}return(j,U)=>{const $=An;return l(),r("div",xg,[o("div",Cg,[o("span",$g,a(s(e)("searchTitle")),1),o("span",Sg,[o("button",{class:te(["fw-search-opt",{on:s(No)}]),title:s(e)("searchCase"),onClick:p},"Aa",10,Eg),o("button",{class:te(["fw-search-opt",{on:s(Po)}]),title:s(e)("searchRegex"),onClick:w},".*",10,Tg)]),h($,{size:"small",text:"",title:s(e)("clearSearch"),onClick:v},{default:se(()=>[...U[1]||(U[1]=[ue("✕",-1)])]),_:1},8,["title"])]),s(De).search.running?(l(),r("div",Dg,a(s(e)("searching")),1)):s(De).search.q?(l(),r("div",Fg,[o("div",Rg,[o("span",null,[ue(a(s(e)("resultsCount",{count:s(De).search.hits.length})),1),s(De).search.truncated?(l(),r(ae,{key:0},[ue(a(s(e)("resultsSuffixTruncated")),1)],64)):N("",!0)]),O.value.length?(l(),Xe($,{key:0,size:"small",type:"primary",plain:"",disabled:L.value,onClick:P},{default:se(()=>[ue(a(L.value?s(e)("searchReplaceBusy"):s(e)("searchReplaceAll")),1)]),_:1},8,["disabled"])):N("",!0)]),s(De).search.scope?(l(),r("div",Ng,a(s(e)("searchScopeIn"))+" "+a(x(s(De).search.scope)),1)):N("",!0)])):(l(),r("div",Pg,a(s(e)("searchIdle")),1)),o("div",{ref_key:"resRef",ref:n,class:"fw-results",onScroll:U[0]||(U[0]=(...ee)=>s(c).onScroll&&s(c).onScroll(...ee))},[o("div",{style:_t({height:s(c).range.value.padBefore+"px"})},null,4),(l(!0),r(ae,null,Ae(u.value,(ee,G)=>(l(),r("div",{key:ee.path,ref_for:!0,ref:s(c).measure(s(c).range.value.start+G),class:"fw-hit",onClick:A=>b(ee.path),title:s(e)("hitTitle")},[o("span",Mg,[h(oe,{name:"file",size:13})]),o("span",Og,[o("span",Lg,a(ee.name),1),ee.byContent?(l(),r("span",Bg,a(s(e)("matchContent")),1)):N("",!0)]),o("span",Ig,a(x(ee.path)),1),ee.snippet?(l(),r("span",jg,a(ee.snippet),1)):N("",!0)],8,Ag))),128)),o("div",{style:_t({height:s(c).range.value.padAfter+"px"})},null,4)],544)])}}}),zg=xt(Vg,[["__scopeId","data-v-3880eff0"]]),Ug=m(""),oa=m({op:"",paths:[]});function _a(t){oa.value={op:"copy",paths:t}}function Fo(t){oa.value={op:"cut",paths:t}}function Hg(){oa.value={op:"",paths:[]}}function yl(){return oa.value.paths.length>0}function Wg(){return oa.value}async function nc(t){try{return await navigator.clipboard.writeText(t),!0}catch{return!1}}const Rt=gt({visible:!1,canSwitchView:!1,total:0,selected:0,text:"",view:"details"});let od=null;function Ya(t){od=t}function Gg(t){od?.(t)}function ad(){Rt.visible=!1,Rt.canSwitchView=!1,Rt.total=0,Rt.selected=0,Rt.text=""}const hi=gt({dirs:{}});async function _s(t){if(t)try{const e=await Tp(t);hi.dirs[t]={inRepo:e.inRepo,branch:e.branch??"",entries:e.entries}}catch{}}function id(t){return hi.dirs[t]?.inRepo??!1}function ld(t,e){return hi.dirs[t]?.entries?.[e]??""}const Zo=gt({dirs:{}});async function no(t){if(t)try{const e=await fs(t);if(!e.inRepo||!e.svnAvailable){Zo.dirs[t]={inRepo:!1,entries:{}};return}const n=await Jt(t,["status","--depth","immediates"]),i={};if(n.code===0)for(const c of(n.stdout||"").split(/\r?\n/)){if(!c.trim())continue;const u=(c.slice(0,8)[0]??"").trim();let v=c.slice(8).trim();if(v=v.replace(/[\\/]+$/,""),!v||v==="."||v==="..")continue;const d=v.split(/[\\/]/).pop()??v,p=Kg(u);p&&(i[d]=p)}Zo.dirs[t]={inRepo:!0,entries:i}}catch{}}function qg(t){return Zo.dirs[t]?.inRepo??!1}function rd(t,e){return Zo.dirs[t]?.entries?.[e]??""}function Kg(t){switch(t){case"A":return"added";case"M":return"modified";case"D":return"deleted";case"?":return"untracked";case"R":return"modified";case"!":return"deleted";case"C":return"modified";default:return""}}function Xg(t){return(t||"").split(/\r?\n/).filter(e=>/^\s?[ADUGCER]{1,3}\s+\S/.test(e)).length}function Yg(t){const e=[...(t||"").matchAll(/(?:revision|版本)\s*(\d+)/gi)];return e.length?e[e.length-1][1]:null}function Jg(t){return t.slice(Math.max(t.lastIndexOf("/"),t.lastIndexOf("\\"))+1)}async function Zg(t,e){try{if(!(await fs(t)).svnAvailable){X("error",y("svnNoCli"));return}const i=await Jt(t,e);i.code===0?X("ok",(i.stdout||y("svnDone")).split(`
`)[0].slice(0,200)):X("error",(i.stderr||y("svnFailed")).split(`
`)[0].slice(0,200))}catch(n){X("error",n.message)}}async function Qg(t,e,n){try{if(!(await fs(t)).svnAvailable){X("error",y("svnNoCli"));return}const c=await Jt(t,["add","--",t]);c.code===0?X("ok",y("svnAdded")):X("error",(c.stderr||y("svnFailed")).split(`
`)[0].slice(0,200))}catch(i){X("error",i.message)}await n.afterMutate(e)}async function e1(t,e,n){try{if(!(await fs(t)).svnAvailable){X("error",y("svnNoCli"));return}const c=t.replace(/[\\/]$/,""),u=c.replace(/[\\/][^\\/]+$/,""),v=c.slice(u.length+1),p=((await Jt(u,["propget","svn:ignore",u])).stdout||"").split(/\r?\n/).map(x=>x.trim()).filter(Boolean);if(p.includes(v)){X("ok",y("gitIgnored")),await n.afterMutate(e);return}const w=[...p,v].join(`
`),b=await Jt(u,["propset","svn:ignore",w,u]);b.code===0?X("ok",y("gitIgnored")):X("error",(b.stderr||y("svnFailed")).split(`
`)[0].slice(0,200))}catch(i){X("error",i.message)}await n.afterMutate(e)}async function t1(t,e,n){try{await Fp(t),X("ok",y("gitAdded"))}catch(i){X("error",i.message)}await n.afterMutate(e)}async function n1(t,e,n){const i=Jg(t);if(await Mt({title:y("gitDiscardTitle"),message:y("gitDiscardMsg",{name:i})})){try{await Np(t),X("ok",y("gitDiscarded"))}catch(u){X("error",u.message)}await n.afterMutate(e)}}async function s1(t,e,n){try{await Xc(t),X("ok",y("gitIgnored"))}catch(i){X("error",i.message)}await n.afterMutate(e)}async function o1(t,e){try{const n=await Dp(t);e.showGitDiff(n.output??"")}catch(n){X("error",n.message)}}function wl(t,e,n){return id(t)?[{separator:!0},{icon:"git",label:y("gitMenu"),children:[{label:y("gitPanel"),icon:"git",onClick:()=>n.openGitPanel()},{separator:!0},{label:y("gitAdd"),icon:"upload",onClick:()=>void t1(e,t,n)},{label:y("gitCommit"),icon:"check",onClick:()=>n.openCommit()},{label:y("gitDiff"),icon:"code",onClick:()=>void o1(e,n)},{label:y("gitDiscard"),icon:"undo",onClick:()=>void n1(e,t,n)},{label:y("gitIgnore"),icon:"eyeOff",onClick:()=>void s1(e,t,n)}]}]:[]}function bl(t,e,n){return qg(t)?[{separator:!0},{icon:"svn",label:y("svnMenu"),children:[{label:y("svnPanel"),icon:"svn",onClick:()=>n.openSvnPanel()},{label:y("svnUpdate"),icon:"sync",onClick:()=>void Zg(e,["update"])},{separator:!0},{label:y("svnAdd"),icon:"upload",onClick:()=>void Qg(e,t,n)},{label:y("svnIgnore"),icon:"eyeOff",onClick:()=>void e1(e,t,n)}]}]:[]}const a1={key:0,class:"fw-quickcommit-empty"},i1={class:"fw-gitcommit-files-title fw-gitcommit-files-caption"},l1={class:"fw-gitcommit-files"},r1=["title"],c1={key:1,class:"fw-quickcommit-empty"},u1={key:2,class:"fw-gitcommit-error"},d1={class:"fw-gitconfig-field"},f1={class:"fw-gitconfig-field"},p1=ht({__name:"QuickCommit",props:{modelValue:{type:Boolean},dir:{}},emits:["update:modelValue","done"],setup(t,{emit:e}){const n=t,i=e,{t:c}=Bt(),u=m(null),v=m([]),d=m(""),p=m(""),w=gt({loading:!1,commit:!1,config:!1}),b=m(!1),x=m(""),O=m(""),L={"":"",untracked:"?",added:"A",modified:"M",deleted:"D"};function P(I){return L[I]}function j(){i("update:modelValue",!1)}async function U(){if(d.value="",p.value="",!n.dir){j();return}w.loading=!0;try{if(u.value=await Ho(n.dir),!u.value.inRepo){X("error",c("gitNotRepo")),j();return}if(await $(),!v.value.length){X("error",c("gitNoChanges")),j();return}}catch(I){X("error",I.message),j()}finally{w.loading=!1}}async function $(){u.value=await Ho(n.dir),v.value=u.value?.staged??[]}async function ee(){const I=d.value.trim();if(!(!I||!u.value)){w.commit=!0,p.value="";try{await Rp(u.value.repo,I),i("done"),X("ok",c("gitCommitted")),j()}catch(ve){p.value=ve.message}finally{w.commit=!1}}}const G=m(!1);Ze(p,I=>{G.value=/user\.(name|email)|Author identity/i.test(I??"")});async function A(){try{const I=await Yc();x.value=I.name??"",O.value=I.email??""}catch{}b.value=!0}async function pe(){w.config=!0;try{await Jc(x.value,O.value),p.value="",b.value=!1,X("ok",c("gitConfigSaved"))}catch(I){X("error",I.message)}finally{w.config=!1}}return(I,ve)=>{const $e=$s,me=An,ne=rn;return l(),Xe(ne,{"model-value":t.modelValue,title:s(c)("gitCommitTitle"),width:"520px",class:"fw-gitcommit-dialog","close-on-click-modal":!1,"onUpdate:modelValue":j,onOpen:U},{footer:se(()=>[h(me,{onClick:j},{default:se(()=>[ue(a(s(c)("cancel")),1)]),_:1}),h(me,{onClick:A},{default:se(()=>[ue(a(s(c)("gitConfig")),1)]),_:1}),h(me,{type:"primary",loading:w.commit,disabled:!d.value.trim(),onClick:ee},{default:se(()=>[ue(a(s(c)("gitCommitConfirm")),1)]),_:1},8,["loading","disabled"])]),default:se(()=>[w.loading?(l(),r("div",a1,a(s(c)("gitLoading")),1)):(l(),r(ae,{key:1},[h($e,{modelValue:d.value,"onUpdate:modelValue":ve[0]||(ve[0]=le=>d.value=le),placeholder:s(c)("gitCommitPlaceholder"),type:"textarea",rows:3,class:"fw-gitcommit-msg",onKeydown:bt(_e(ee,["ctrl"]),["enter"])},null,8,["modelValue","placeholder","onKeydown"]),v.value.length?(l(),r(ae,{key:0},[o("div",i1,a(s(c)("gitCommitFiles",{n:v.value.length})),1),o("div",l1,[(l(!0),r(ae,null,Ae(v.value,le=>(l(),r("div",{key:le.path,class:"fw-gitcommit-file"},[o("span",{class:te(["fw-gitpanel-st","st-"+le.status])},a(P(le.status)),3),o("span",{class:"fw-gitpanel-path",title:le.path},a(le.path),9,r1)]))),128))])],64)):(l(),r("div",c1,a(s(c)("gitNoChanges")),1)),p.value?(l(),r("div",u1,[ue(a(p.value)+" ",1),G.value?(l(),Xe(me,{key:0,text:"",size:"small",onClick:A},{default:se(()=>[ue(a(s(c)("gitConfigTitle")),1)]),_:1})):N("",!0)])):N("",!0),h(ne,{modelValue:b.value,"onUpdate:modelValue":ve[4]||(ve[4]=le=>b.value=le),title:s(c)("gitConfigTitle"),width:"420px",class:"fw-gitconfig-dialog","close-on-click-modal":!1},{footer:se(()=>[h(me,{onClick:ve[3]||(ve[3]=le=>b.value=!1)},{default:se(()=>[ue(a(s(c)("cancel")),1)]),_:1}),h(me,{type:"primary",loading:w.config,onClick:pe},{default:se(()=>[ue(a(s(c)("gitConfigSave")),1)]),_:1},8,["loading"])]),default:se(()=>[o("div",d1,[o("label",null,a(s(c)("gitConfigName")),1),h($e,{modelValue:x.value,"onUpdate:modelValue":ve[1]||(ve[1]=le=>x.value=le),size:"small",placeholder:s(c)("gitConfigNamePlaceholder")},null,8,["modelValue","placeholder"])]),o("div",f1,[o("label",null,a(s(c)("gitConfigEmail")),1),h($e,{modelValue:O.value,"onUpdate:modelValue":ve[2]||(ve[2]=le=>O.value=le),size:"small",placeholder:s(c)("gitConfigEmailPlaceholder")},null,8,["modelValue","placeholder"])])]),_:1},8,["modelValue","title"])],64))]),_:1},8,["model-value","title"])}}}),cd=xt(p1,[["__scopeId","data-v-e839f655"]]),_l="",kl=["%H","%h","%an","%ae","%at","%ar","%s","%P","%D"].join("%x1f"),v1=["%H","%h","%an","%ae","%at","%ar","%P","%D","%s","%b"].join("%x1f");function ud(t){const e=t.trim();return e?e.split(",").map(n=>n.trim()).filter(Boolean).map(n=>n.startsWith("HEAD -> ")?{label:n.slice(8),kind:"head"}:n==="HEAD"?{label:"HEAD",kind:"head"}:n.startsWith("tag: ")?{label:n.slice(5),kind:"tag"}:n.includes("/")?{label:n,kind:"remote"}:{label:n,kind:"branch"}):[]}function xl(t){const e=[];for(const n of t.split(`
`)){if(!n.trim())continue;const i=n.split(_l);if(i.length<9)continue;const c=(i[7]??"").trim();e.push({hash:i[0],short:i[1],author:i[2],email:i[3],ts:Number(i[4])||0,date:i[5],subject:i[6],parents:c?c.split(/\s+/):[],refs:ud(i[8]??"")})}return e}function h1(t){const e=t.split(_l);if(e.length<9)return null;const n=(e[6]??"").trim();return{hash:e[0],short:e[1],author:e[2],email:e[3],ts:Number(e[4])||0,date:e[5],subject:e[8],parents:n?n.split(/\s+/):[],refs:ud(e[7]??""),body:e.slice(9).join(_l).trim()}}function m1(t){const e=[];for(const n of t.split(`
`)){if(!n.trim())continue;const i=n.split("	");if(i.length<3)continue;const[c,u]=i,v=i.slice(2).join("	");if(!v)continue;const d=c==="-"||u==="-";e.push({path:v,add:d?0:Number(c)||0,del:d?0:Number(u)||0,binary:d})}return e}function g1(t){const e=[],n=/^(\^?[0-9a-fA-F]{7,40})\s+\((.*?)\s+(\d{4}-\d{2}-\d{2})\s+(\d+)\)\s?(.*)$/;for(const i of t.split(`
`)){const c=n.exec(i);c&&e.push({hash:c[1].replace(/^\^/,""),author:c[2].trim(),date:c[3],line:Number(c[4])||0,text:c[5]??""})}return e}function y1(t){return t.startsWith("+++")||t.startsWith("---")?"head":t.startsWith("@@")?"meta":t.startsWith("diff ")||t.startsWith("index ")||t.startsWith("new file")||t.startsWith("deleted file")||t.startsWith("similarity index")||t.startsWith("rename ")||t.startsWith("Binary files")?"head":t.startsWith("+")?"add":t.startsWith("-")?"del":"ctx"}const sc=["#58a6ff","#f0883e","#3fb950","#bc8cff","#f778ba","#39c5cf","#d29922","#8b949e"];function dd(t){const e=[];let n=[],i=[],c=0;const u=v=>{for(;n.length<=v;)n.push(null),i.push(null)};for(const v of t){let d=n.indexOf(v.hash);if(d<0){let j=n.indexOf(null);j<0&&(j=n.length,u(j)),n[j]=v.hash,i[j]=c++,d=j}const p=i[d]??0,w=n.slice(),[b,...x]=v.parents;n[d]=null,i[d]=null,b!=null&&n.indexOf(b)<0&&(n[d]=b,i[d]=p);for(const j of x){if(n.includes(j))continue;let U=n.indexOf(null);U<0&&(U=n.length,u(U)),n[U]=j,i[U]=c++}const O=Math.max(w.length,n.length),L=[];for(let j=0;j<O;j++)j!==d&&(w[j]??null)!=null&&(n[j]??null)!=null&&L.push({lane:j,color:i[j]??0});const P=[];for(const j of v.parents){const U=n.indexOf(j);U>=0&&P.push({from:d,to:U,color:i[U]??p})}for(e.push({commit:v,lane:d,laneColor:p,topLine:w[d]!=null,through:L,bends:P,width:O});n.length&&n[n.length-1]===null;)n.pop(),i.pop()}return e}const xs=14;function Kn(t){return sc[t%sc.length]}const qt=gt({open:!1,kind:"git",dir:"",key:"",onDone:void 0});function lr(t){qt.kind=t?.kind==="svn"?"svn":"git",qt.dir=t?.dir??"",qt.key=t?.key??"",qt.onDone=t?.onDone,qt.open=!0}function oc(){qt.open=!1,qt.onDone=void 0}const w1={class:"fw-diff"},b1={key:0,class:"fw-diff-empty"},_1={class:"fw-diff-body"},k1={key:0,class:"fw-diff-empty"},Ai=5e3,x1=ht({__name:"GitDiffView",props:{lines:{},empty:{}},setup(t){const e=t,{t:n}=Bt(),i=B(()=>e.lines.length>Ai?e.lines.slice(0,Ai):e.lines),c=B(()=>e.lines.length>Ai);return(u,v)=>(l(),r("div",w1,[t.lines.length?(l(),r(ae,{key:1},[o("div",_1,[(l(!0),r(ae,null,Ae(i.value,(d,p)=>(l(),r("div",{key:p,class:te(["fw-diff-line","dl-"+s(y1)(d)])},a(d||" "),3))),128))]),c.value?(l(),r("div",k1,a(s(n)("gitDiffTruncated")),1)):N("",!0)],64)):(l(),r("div",b1,a(t.empty),1))]))}}),Vo=xt(x1,[["__scopeId","data-v-10e524c1"]]),C1={class:"fw-graph"},$1=["title","onClick"],S1=["width"],E1=["x1","x2","stroke"],T1=["x1","x2","y2","stroke"],D1=["x1","y1","x2","stroke"],F1=["d","stroke"],R1=["cx","cy","r","fill","stroke"],N1={class:"fw-graph-main"},P1={class:"fw-graph-subject"},A1={key:0,class:"fw-graph-refs"},M1={class:"fw-graph-meta"},O1={class:"fw-graph-hash"},L1={key:0,class:"fw-graph-empty"},os=28,Os=8,B1=ht({__name:"GitGraphList",props:{rows:{},active:{},empty:{}},emits:["select"],setup(t){function e(v){return v*xs+xs/2}function n(v,d){const p=os/2,w=os*.82;return`M ${e(v)} ${p} C ${e(v)} ${w}, ${e(d)} ${w}, ${e(d)} ${os}`}function i(v){return v.through.filter(d=>d.lane<Os)}function c(v){return v.bends.filter(d=>d.from<Os&&d.to<Os)}function u(v){return v.commit.refs.some(d=>d.kind==="head")}return(v,d)=>(l(),r("div",C1,[(l(!0),r(ae,null,Ae(t.rows,p=>(l(),r("button",{key:p.commit.hash,class:te(["fw-graph-row",{active:p.commit.hash===t.active}]),title:p.commit.subject,onClick:w=>v.$emit("select",p.commit)},[o("span",{class:"fw-graph-lanes",style:_t({width:`${Math.min(p.width,Os)*s(xs)}px`})},[(l(),r("svg",{width:Math.min(p.width,Os)*s(xs),height:os,"aria-hidden":"true"},[(l(!0),r(ae,null,Ae(i(p),(w,b)=>(l(),r("line",{key:"t"+b,x1:e(w.lane),y1:0,x2:e(w.lane),y2:os,stroke:s(Kn)(w.color)},null,8,E1))),128)),p.topLine&&p.lane<Os?(l(),r("line",{key:0,x1:e(p.lane),y1:0,x2:e(p.lane),y2:os/2,stroke:s(Kn)(p.laneColor)},null,8,T1)):N("",!0),(l(!0),r(ae,null,Ae(c(p),(w,b)=>(l(),r(ae,{key:"b"+b},[w.from===w.to?(l(),r("line",{key:0,x1:e(w.from),y1:os/2,x2:e(w.to),y2:os,stroke:s(Kn)(w.color)},null,8,D1)):(l(),r("path",{key:1,d:n(w.from,w.to),fill:"none",stroke:s(Kn)(w.color)},null,8,F1))],64))),128)),p.lane<Os?(l(),r("circle",{key:1,cx:e(p.lane),cy:os/2,r:u(p)?4.5:3.5,fill:s(Kn)(p.laneColor),stroke:u(p)?"var(--dsh-bg, #0d1117)":"none","stroke-width":"1.5"},null,8,R1)):N("",!0)],8,S1))],4),o("span",N1,[o("span",P1,a(p.commit.subject),1),p.commit.refs.length?(l(),r("span",A1,[(l(!0),r(ae,null,Ae(p.commit.refs,w=>(l(),r("span",{key:w.kind+w.label,class:te(["fw-graph-ref","rf-"+w.kind])},[h(oe,{name:w.kind==="tag"?"tag":"git",size:9},null,8,["name"]),ue(" "+a(w.label),1)],2))),128))])):N("",!0)]),o("span",M1,[ue(a(p.commit.author),1),d[0]||(d[0]=o("span",{class:"fw-graph-dot"},"·",-1)),ue(a(p.commit.date),1)]),o("span",O1,a(p.commit.short),1)],10,$1))),128)),t.rows.length?N("",!0):(l(),r("div",L1,a(t.empty),1))]))}}),I1=xt(B1,[["__scopeId","data-v-61d062db"]]),Nn=m([]),j1=m(!1),kn=gt({open:!1,kind:"git",url:""});function rr(t){kn.kind=t.kind,kn.url=t.url??"",kn.open=!0}function Mi(){kn.open=!1}async function ro(){const t=await Mp().catch(()=>null);t&&(Nn.value=t.accounts),j1.value=!0}const V1={key:0,class:"fw-gp-shell"},z1={class:"fw-gp-head"},U1=["title"],H1=["title"],W1={class:"fw-gp-up-name"},G1=["title"],q1={class:"fw-gp-headacts"},K1={class:"fw-gp-body"},X1={class:"fw-gp-rail"},Y1=["onClick"],J1={class:"fw-gp-rail-txt"},Z1={key:0,class:"fw-gp-rail-badge"},Q1={key:0,class:"fw-gp-rail-op"},ey={class:"fw-gp-content"},ty={key:0,class:"fw-gp-split"},ny={class:"fw-gp-list"},sy={key:0,class:"fw-gp-empty"},oy={class:"fw-gp-groupbar"},ay={class:"fw-gp-groupname"},iy={class:"fw-gp-groupcount"},ly=["title"],ry=["title","onClick","onContextmenu"],cy={class:"fw-gp-path"},uy={key:0,class:"fw-gp-dir"},dy={class:"fw-gp-rowacts"},fy=["title","onClick"],py=["title","onClick"],vy={class:"fw-gp-detail"},hy={class:"fw-gp-detailhead"},my=["title"],gy={class:"fw-gp-detailacts"},yy=["title"],wy=["title"],by=["title"],_y=["title"],ky={key:0,class:"fw-gp-empty"},xy={key:0,class:"fw-gp-empty"},Cy={key:1,class:"fw-gp-scroll"},$y={class:"fw-gp-hash"},Sy=["title"],Ey={class:"fw-gp-filemeta"},Ty={key:0,class:"fw-gp-empty"},Dy={key:1,class:"fw-gp-scroll fw-gp-blame"},Fy=["title"],Ry=["title"],Ny={class:"fw-gp-blame-date"},Py={class:"fw-gp-blame-no"},Ay={class:"fw-gp-blame-txt"},My={key:1,class:"fw-gp-split"},Oy={class:"fw-gp-list fw-gp-list-col"},Ly={class:"fw-gp-listbar"},By={class:"fw-gp-count"},Iy={class:"fw-gp-detail"},jy={key:0,class:"fw-gp-empty"},Vy={class:"fw-gp-detailhead"},zy=["title"],Uy={class:"fw-gp-detailacts"},Hy=["title"],Wy=["title"],Gy=["title"],qy=["title"],Ky={class:"fw-gp-scroll"},Xy={class:"fw-gp-cmeta"},Yy={class:"fw-gp-crow"},Jy={class:"k"},Zy={class:"v mono"},Qy={class:"fw-gp-crow"},ew={class:"k"},tw={class:"v"},nw={class:"fw-gp-crow"},sw={class:"k"},ow={class:"v"},aw={class:"fw-gp-crow"},iw={class:"k"},lw={class:"v mono"},rw={key:0,class:"fw-gp-crow"},cw={class:"k"},uw={class:"v"},dw={class:"fw-gp-cbody"},fw={class:"fw-gp-cfiles"},pw={key:0,class:"fw-gp-empty"},vw=["title","onClick"],hw={class:"fw-gp-path"},mw={key:0,class:"fw-gp-dir"},gw={class:"fw-gp-num"},yw={class:"add"},ww={class:"del"},bw={key:2,class:"fw-gp-one"},_w={class:"fw-gp-listbar"},kw={class:"fw-gp-sec-title"},xw=["onContextmenu"],Cw={class:"fw-gp-st st-branch"},$w={class:"fw-gp-path"},Sw={key:0,class:"fw-gp-cur"},Ew={class:"fw-gp-rowacts"},Tw={class:"fw-gp-sec-title"},Dw=["onContextmenu"],Fw={class:"fw-gp-st st-remote"},Rw={class:"fw-gp-path"},Nw={class:"fw-gp-rowacts"},Pw={key:3,class:"fw-gp-one"},Aw={class:"fw-gp-sectabs"},Mw={key:0,class:"fw-gp-sectab-n"},Ow={key:0,class:"fw-gp-sectab-n"},Lw={class:"fw-gp-form"},Bw={key:0,class:"fw-gp-empty"},Iw=["title","onContextmenu"],jw={class:"fw-gp-st st-tag"},Vw={class:"fw-gp-path"},zw={key:0,class:"fw-gp-badge"},Uw={key:1,class:"fw-gp-badge fw-gp-badge-remote"},Hw={key:0,class:"fw-gp-date"},Ww=["title"],Gw={class:"fw-gp-hash"},qw={class:"fw-gp-rowacts"},Kw={class:"fw-gp-form"},Xw={key:0,class:"fw-gp-subject"},Yw={class:"fw-gp-form"},Jw={key:0,class:"fw-gp-empty"},Zw={key:1,class:"fw-gp-empty"},Qw=["title"],eb={class:"fw-gp-st st-tag"},tb={class:"fw-gp-path"},nb={class:"fw-gp-badge"},sb={key:0,class:"fw-gp-date"},ob={class:"fw-gp-rowacts"},ab={key:4,class:"fw-gp-one"},ib={class:"fw-gp-form"},lb={key:0,class:"fw-gp-empty"},rb=["onContextmenu"],cb={class:"fw-gp-st st-remote"},ub={class:"fw-gp-path"},db=["title"],fb={key:5,class:"fw-gp-split"},pb={class:"fw-gp-list"},vb={class:"fw-gp-listbar"},hb={key:0,class:"fw-gp-empty"},mb=["title","onClick","onContextmenu"],gb={class:"fw-gp-st st-stash"},yb={class:"fw-gp-path"},wb={class:"fw-gp-rowacts"},bb=["title","onClick"],_b={class:"fw-gp-detail"},kb={class:"fw-gp-detailhead"},xb={class:"fw-gp-detailtitle"},Cb={key:6,class:"fw-gp-one fw-gp-cli-wrap"},$b={key:0,class:"fw-gp-cli-hint"},Sb={class:"fw-gp-cli-prompt"},Eb={class:"fw-gp-cli-cmd"},Tb={class:"fw-gp-cli-inputline"},Db={class:"fw-gp-cli-prompt"},Fb={key:0,class:"fw-gp-commitbar"},Rb={class:"fw-gp-commitacts"},Nb={class:"fw-gp-commitmeta"},Pb={key:0},Ab={key:1,class:"fw-gitpanel-empty"},Mb={key:1,class:"fw-norepo"},Ob={class:"fw-gp-cfgfield"},Lb={class:"fw-gp-cfgfield"},Bb={key:0,class:"fw-gp-cv"},Ib={class:"fw-gp-cv-meta"},jb={class:"fw-gp-crow"},Vb={class:"k"},zb={class:"v mono"},Ub={class:"fw-gp-crow"},Hb={class:"k"},Wb={class:"v"},Gb={class:"fw-gp-crow"},qb={class:"k"},Kb={class:"v"},Xb={class:"fw-gp-cbody fw-gp-cbody-clamp"},Yb={class:"fw-gp-cv-body"},Jb={class:"fw-gp-cv-files"},Zb={key:0,class:"fw-gp-empty"},Qb=["title","onClick"],e_={class:"fw-gp-path"},t_={key:0,class:"fw-gp-dir"},n_={class:"fw-gp-num"},s_={class:"add"},o_={class:"del"},a_={class:"fw-gp-cv-diff"},i_={key:1,class:"fw-gp-empty"},l_={class:"fw-gp-cfgfield"},r_={class:"fw-gp-cfgfield"},c_={class:"fw-gp-cfgfield"},Oi=120,u_=ht({__name:"GitPanel",props:{modelValue:{type:Boolean},dir:{}},setup(t){const e=t,{t:n}=Bt(),i=[{key:"changes",icon:"fileText",label:"gitRailChanges"},{key:"history",icon:"clock",label:"gitRailHistory"},{key:"branches",icon:"git",label:"gitRailBranches"},{key:"tags",icon:"tag",label:"gitRailTags"},{key:"remotes",icon:"globe",label:"gitRailRemotes"},{key:"stash",icon:"stash",label:"gitRailStash"},{key:"cli",icon:"terminal",label:"gitRailCli"}],c=m("changes"),u=m(null),v=gt({refresh:!1,sync:"",op:!1,commit:!1,branch:!1,stash:!1,config:!1}),d=m(null),p=m("diff"),w=m([]),b=m(""),x=m([]),O=m([]),L=m(""),P=m([]),j=m(!1),U=m(""),$=m(null),ee=m([]),G=m(""),A=m([]),pe=m(Oi),I=m([]),ve=m([]),$e=m([]),me=m(""),ne=m(""),le=m(""),Se=m(""),Ve=m(!1),we=m(!1),Ne=m(""),W=m(""),J=m(""),z=m("tags"),Q=m([]),ge=m(""),je=m(!1),Ke=m(""),Qe=m(""),ye=m(""),be=m(""),Ye=m([]),st=m(""),fe=m(""),ke=m([]),qe=m(!1),ce=m(""),Ie=m(""),rt=m(null),yt=m(null),ut=m(""),it=m([]),Le=B(()=>u.value?.branch??""),H=B(()=>!!u.value?.inRepo&&!Le.value),R=B(()=>(u.value?.repo??"").replace(/\\/g,"/")),Z=B(()=>I.value.find(E=>E.current)??null),Ee=B(()=>Z.value?.upstream??""),M=m(0),T=m(0),K=B(()=>Ee.value?`${Ee.value}  ↑${M.value} ↓${T.value}`:n("gitNoUpstream")),S=B(()=>H.value?n("gitHeadDetached"):n("gitStatusColon",{branch:Le.value})),q=B(()=>I.value.filter(E=>!E.name.includes("/"))),Te=B(()=>I.value.filter(E=>E.name.includes("/"))),re=B(()=>`${R.value}>git `),ct=B(()=>(u.value?.unstaged.length??0)+(u.value?.staged.length??0)>0),wt=B(()=>$e.value.length>0),Ot=B(()=>{const E=u.value;return E?[{key:"staged",label:n("gitGroupStaged"),list:E.staged},{key:"unstaged",label:n("gitGroupUnstaged"),list:E.unstaged},{key:"untracked",label:n("gitGroupUntracked"),list:E.untracked}].filter(C=>C.list.length>0):[]}),Mn=B(()=>d.value?p.value==="history"?`${n("gitFileHistory")} — ${d.value.file.path}`:p.value==="blame"?`${n("gitBlame")} — ${d.value.file.path}`:d.value.file.path:""),Gt=B(()=>b.value||n("gitDiffEmpty"));function ze(E){const C=u.value;return C?E==="changes"?C.staged.length+C.unstaged.length+C.untracked.length:E==="branches"?q.value.length:E==="tags"?ve.value.length:E==="remotes"?$e.value.length:E==="stash"?Ye.value.length:0:0}const Je={"":"",untracked:"?",added:"A",modified:"M",deleted:"D"};function et(E){return Je[E]}function lt(E){const C=E.lastIndexOf("/");return C>0?E.slice(0,C+1):""}function xn(E){const C=E.lastIndexOf("/");return C>=0?E.slice(C+1):E}function Cn(E){return E?new Date(E*1e3).toLocaleString():"—"}async function zt(E){const C=u.value?.repo;if(!C)throw new Error(n("gitNotRepo"));return Oo(C,E)}async function ot(E){const C=await zt(E);if(C.code!==0)throw new Error((C.stderr||C.stdout||n("gitOpFailed")).trim());return C.stdout}async function ft(E,C,Ce){v.op=!0;try{return await E(),C&&X("ok",n(C,Ce)),await Ct(),!0}catch(nt){return X("error",nt.message),!1}finally{v.op=!1}}async function Ct(E=!1){if(!(!e.dir||!li(e.dir))){E||(v.refresh=!0);try{if(u.value=await Ho(e.dir),!u.value.inRepo)return;await Promise.all([$n(),mn(),Es()]),d.value&&await Ln(d.value.file,d.value.group,!0)}catch(C){E||X("error",C.message)}finally{E||(v.refresh=!1)}}}function On(){c.value="changes",Ct()}Ze(()=>e.dir,()=>{e.modelValue&&Ct()});async function $n(){const E=await ot(["for-each-ref","--sort=-creatordate","--format=%(refname)%09%(objectname:short)%09%(upstream:short)%09%(HEAD)%09%(*objectname:short)%09%(creatordate:short)%09%(contents:subject)","refs/heads","refs/remotes","refs/tags"]).catch(()=>""),C=[],Ce=[];for(const Tt of E.split(`
`)){if(!Tt.trim())continue;const[dt,V,at,fn,jn,Ms,..._i]=Tt.split("	");if(dt)if(dt.startsWith("refs/remotes/")){const da=dt.slice(13);if(da.endsWith("/HEAD"))continue;C.push({name:da,hash:V??"",upstream:"",current:!1})}else dt.startsWith("refs/heads/")?C.push({name:dt.slice(11),hash:V??"",upstream:at??"",current:fn==="*"}):dt.startsWith("refs/tags/")&&Ce.push({name:dt.slice(10),hash:jn||V||"",upstream:"",current:!1,deref:jn,date:Ms,subject:_i.join("	").trim()})}if(C.sort((Tt,dt)=>Tt.name.localeCompare(dt.name)),I.value=C,ve.value=Ce,M.value=0,T.value=0,Ee.value){const Tt=await zt(["rev-list","--left-right","--count",`HEAD...${Ee.value}`]).catch(()=>null);if(Tt&&Tt.code===0){const[dt,V]=Tt.stdout.trim().split(/\s+/);M.value=Number(dt)||0,T.value=Number(V)||0}}const nt=await zt(["remote","-v"]).catch(()=>null),At=new Map;for(const Tt of(nt?.stdout??"").split(`
`)){const[dt,V]=Tt.split(/\s+/);dt&&V&&!At.has(dt)&&At.set(dt,V)}$e.value=[...At].map(([Tt,dt])=>({name:Tt,url:dt})),await Yn()}async function Yn(){const E=new Set(ve.value.map(nt=>nt.name)),C=new Set,Ce=[];for(const nt of $e.value){const At=await zt(["ls-remote","--tags",nt.name]).catch(()=>null);if(!At||At.code!==0)continue;const Tt=new Map;for(const dt of At.stdout.split(`
`)){const V=/^([0-9a-f]+)\t(refs\/tags\/(.+))$/.exec(dt.trim());if(!V)continue;const at=V[1],fn=V[3];if(fn.endsWith("^{}")){const jn=fn.slice(0,-3),Ms=Tt.get(jn);Ms?Ms.deref=at:Tt.set(jn,{hash:at,deref:at})}else{const jn=Tt.get(fn);jn?jn.hash=at:Tt.set(fn,{hash:at})}}for(const[dt,V]of Tt)E.has(dt)||C.has(dt)||(C.add(dt),Ce.push({name:dt,hash:V.deref||V.hash,upstream:"",current:!1,deref:V.deref,remoteOnly:!0,remote:nt.name}))}Ce.length&&(ve.value=[...ve.value,...Ce.sort((nt,At)=>At.name.localeCompare(nt.name,void 0,{numeric:!0}))])}async function mn(){const E=["log",`--max-count=${pe.value}`,"--date-order"];j.value&&E.push("--all"),E.push(`--pretty=format:${kl}`);const C=await ot(E).catch(()=>"");P.value=dd(xl(C))}function Sn(E){j.value!==E&&(j.value=E,pe.value=Oi,mn().catch(()=>{}))}async function Ks(){pe.value+=Oi,await mn().catch(()=>{})}async function Es(){const E=await zt(["stash","list"]).catch(()=>null);Ye.value=En(E?.stdout??"")}function En(E){const C=[];for(const Ce of E.split(`
`)){const nt=/^(stash@\{[^}]+\}):\s*(.*)$/.exec(Ce.trim());nt&&C.push({ref:nt[1],full:Ce.trim(),message:nt[2]||nt[1]})}return C}async function cn(E,C){d.value={file:E,group:C},p.value="diff",await Ln(E,C)}async function Ln(E,C,Ce=!1){b.value="";try{if(C==="untracked"){w.value=[],b.value=n("gitDiffUntrackedHint");return}const nt=["diff","--no-color",...C==="staged"?["--cached"]:[],"--",E.path];Wn(await ot(nt))}catch(nt){Ce||X("error",nt.message),w.value=[]}}function Wn(E){w.value=E?E.split(`
`):[]}async function Tn(){const E=d.value;if(E){p.value="history",x.value=[];try{const C=await ot(["log","--follow","--max-count=30",`--pretty=format:${kl}`,"--",E.file.path]);x.value=xl(C)}catch(C){X("error",C.message)}}}async function gn(){const E=d.value;if(E){p.value="blame",O.value=[];try{const C=await ot(["blame","--date=short","-w","--",E.file.path]);O.value=g1(C)}catch(C){X("error",C.message)}}}async function yn(E){await ft(async()=>{await ot(["add","--",E.path])})}async function Jn(E){await ft(async()=>{await ot(["restore","--staged","--",E.path])})}async function Dn(E){await Mt({title:n("gitDiscardTitle"),message:n("gitDiscardMsg",{name:E.path})})&&await ft(async()=>{await ot(["checkout","--",E.path])},"gitDiscarded")}async function D(E){const C=u.value?.repo;if(!C)return;const Ce=`${C.replace(/\\/g,"/")}/${E.path}`.replace(/\/{2,}/g,"/");await ft(async()=>{await Xc(Ce)},"gitIgnored")}async function he(){await ft(async()=>{await ot(["add","-A"])})}async function Be(){const E=L.value.trim(),C=u.value;if(!(!E||!C?.staged.length)){v.commit=!0;try{await ot(["commit","-m",E]),L.value="",X("ok",n("gitCommitted")),await Ct()}catch(Ce){X("error",Ce.message)}finally{v.commit=!1}}}async function He(E){U.value=E.hash,G.value="",A.value=[],ee.value=[];try{const[C,Ce]=await Promise.all([ot(["show","-s",`--format=${v1}`,E.hash]),ot(["diff-tree","--no-commit-id","--numstat","-r","--root",E.hash])]);$.value=h1(C)??{...E,body:""},ee.value=m1(Ce)}catch(C){X("error",C.message)}}async function Pe(E){const C=U.value;if(C){G.value=E.path,A.value=[];try{const Ce=await ot(["show","--no-color","--format=",C,"--",E.path]);A.value=Ce?Ce.split(`
`):[]}catch(Ce){X("error",Ce.message)}Ve.value=!0}}async function Ge(E){try{await navigator.clipboard.writeText(E),X("ok",n("gitCopied"))}catch{X("error",n("gitOpFailed"))}}const{cmOpen:Et,cmX:$t,cmY:wn,cmItems:Bn,openMenu:Fn,closeMenu:Xs}=pn();function Co(E,C,Ce){const nt=[{label:n("gitDiff"),icon:"code",onClick:()=>void cn(C,Ce)},{label:n("gitFileHistory"),icon:"clock",disabled:Ce==="untracked",onClick:()=>void un(C,Ce)},{label:n("gitBlame"),icon:"activity",disabled:Ce==="untracked",onClick:()=>void Ts(C,Ce)},{separator:!0},Ce==="staged"?{label:n("gitUnstage"),icon:"undo",onClick:()=>void Jn(C)}:{label:n("gitAddShort"),icon:"plus",onClick:()=>void yn(C)},{label:n("gitIgnore"),icon:"eyeOff",disabled:Ce!=="untracked",onClick:()=>void D(C)},{label:n("gitDiscard"),icon:"close",disabled:Ce==="untracked",onClick:()=>void Dn(C)},{separator:!0},{label:n("gitCopyPath"),icon:"copy",onClick:()=>void Ge(C.path)}];Fn(E,nt)}async function un(E,C){(!d.value||d.value.file.path!==E.path||d.value.group!==C)&&await cn(E,C),await Tn()}async function Ts(E,C){(!d.value||d.value.file.path!==E.path||d.value.group!==C)&&await cn(E,C),await gn()}function Ds(E,C){const Ce=[{label:n("gitCheckout"),icon:"arrowRight",disabled:C.current,onClick:()=>void ts(C.name)},{label:n("gitMergeIntoCurrent"),icon:"merge",disabled:C.current,onClick:()=>void k(C.name)},{label:n("gitPushBranch"),icon:"upload",onClick:()=>void xe(C.name)},{separator:!0},{label:n("gitBranchRename"),icon:"edit",disabled:!C.current,onClick:()=>void dn()},{label:n("gitDelete"),icon:"trash",disabled:C.current,onClick:()=>void g(C.name)},{separator:!0},{label:n("gitCopyName"),icon:"copy",onClick:()=>void Ge(C.name)}];Fn(E,Ce)}function Zn(E,C){Fn(E,[{label:n("gitCheckout"),icon:"arrowRight",onClick:()=>void In(C.name)},{separator:!0},{label:n("gitCopyName"),icon:"copy",onClick:()=>void Ge(C.name)}])}function Qn(E,C){const Ce=[{label:n("gitView"),icon:"eye",onClick:()=>Me(C)}];C.remoteOnly?Ce.push({label:n("gitTagPull"),icon:"download",onClick:()=>void ms(C)}):(Ce.push({label:n("gitPushBranch"),icon:"upload",onClick:()=>void Xt(C.name)}),Ce.push({label:n("gitDelete"),icon:"trash",onClick:()=>void Re(C.name)})),Ce.push({separator:!0}),Ce.push({label:n("gitCopyName"),icon:"copy",onClick:()=>void Ge(C.name)}),Fn(E,Ce)}function Fs(E,C){Fn(E,[{label:n("gitRemoteSetUrl"),icon:"edit",onClick:()=>void gs(C)},{label:n("gitDelete"),icon:"trash",onClick:()=>void ia(C.name)},{separator:!0},{label:n("gitCopyUrl"),icon:"copy",onClick:()=>void Ge(C.url)}])}function Ys(E,C){Fn(E,[{label:n("gitStashApply"),icon:"download",onClick:()=>void Zs(C.ref)},{label:n("gitStashPop"),icon:"upload",onClick:()=>void wi(C.ref)},{label:n("gitStashDrop"),icon:"close",onClick:()=>void bi(C.ref)},{separator:!0},{label:n("gitCopyMsg"),icon:"copy",onClick:()=>void Ge(C.message)}])}function Rn(E){Fn(E,[{label:n("gitResetSoft"),icon:"undo",onClick:()=>void en("reset-soft")},{label:n("gitResetMixed"),icon:"undo",onClick:()=>void en("reset-mixed")},{label:n("gitResetHard"),icon:"warning",onClick:()=>void en("reset-hard")},{separator:!0},{label:n("gitRevert"),icon:"undo",onClick:()=>void en("revert")},{label:n("gitCherryPick"),icon:"check",onClick:()=>void en("cherry-pick")}])}function Gn(){lr({kind:"git",dir:e.dir,key:De.key,onDone:()=>{Ct()}})}async function es(){const E=U.value;if(!E)return;const Ce=(await us({title:n("gitBranchFromTitle"),placeholder:n("gitBranchFromPlaceholder")}))?.trim();Ce&&await ft(async()=>{await ot(["branch",Ce,E])},"gitBranchCreated",{name:Ce})}async function Rs(){const E=U.value;!E||!await Mt({title:n("gitCheckoutCommit"),message:n("gitCheckoutCommitMsg",{hash:E.slice(0,7)})})||await ft(async()=>{await ot(["checkout",E])})}async function en(E){const C=U.value;if(!C)return;const Ce=C.slice(0,7);if(E==="reset-soft"||E==="reset-mixed"||E==="reset-hard"){if(E==="reset-hard"&&!await Mt({title:n("gitResetHard"),message:n("gitResetHardMsg")}))return;const nt=E==="reset-soft"?"--soft":E==="reset-mixed"?"--mixed":"--hard";await ft(async()=>{await ot(["reset",nt,C])},"gitResetDone",{hash:Ce});return}if(E==="revert"){await ft(async()=>{await ot(["revert","--no-edit",C])},"gitRevertDone",{hash:Ce});return}E==="cherry-pick"&&await ft(async()=>{await ot(["cherry-pick",C])},"gitCherryPicked",{hash:Ce})}async function Kt(){const E=me.value.trim();if(!E)return;await ft(async()=>{await ot(["checkout","-b",E])},"gitBranchCreated",{name:E})&&(me.value="")}async function ts(E){await ft(async()=>{await ot(["checkout",E])})}async function In(E){const C=E.split("/").slice(1).join("/")||E;await ft(async()=>{await ot(["checkout","-b",C,"--track",E])},"gitBranchCreated",{name:C})}async function dn(){const E=Le.value;if(!E||H.value)return;const Ce=(await us({title:n("gitBranchRenameTitle"),placeholder:n("gitBranchRenamePlaceholder"),initial:E}))?.trim();!Ce||Ce===E||await ft(async()=>{await ot(["branch","-m",Ce])},"gitBranchRenamed",{name:Ce})}async function g(E){await Mt({title:n("gitDelete"),message:n("gitBranchDeleteMsg",{name:E})})&&await ft(async()=>{await ot(["branch","-D",E])})}async function k(E){await ft(async()=>{await ot(["merge","--no-edit",E])},"gitMergeDone",{name:E})}async function xe(E){const C=!!I.value.find(Ce=>Ce.name===E)?.upstream;await ft(async()=>{await ot(C?["push"]:["push","-u","origin",E])},"gitPushed",{name:E})}function de(E){const C=[E.name];return E.subject&&C.push(E.subject),C.push(`${E.hash}${E.date?` · ${E.date}`:""}`),C.join(`
`)}function Me(E){const C=E.hash;C&&(c.value="history",He({hash:C,short:C.slice(0,7),author:"",email:"",ts:E.date?Math.floor(Date.parse(E.date)/1e3):0,date:E.date??"",subject:E.subject??"",parents:[],refs:[{label:E.name,kind:"tag"}]}))}async function F(){const E=ne.value.trim();if(!E)return;const C=le.value.trim(),Ce=Se.value.trim();await ft(async()=>{const At=Ce?["tag","-a",E,"-m",Ce]:["tag",E];C&&At.push(C),await ot(At)},"gitTagCreated",{name:E})&&(ne.value="",le.value="",Se.value="")}async function Re(E){await Mt({title:n("gitDelete"),message:n("gitTagDeleteMsg",{name:E})})&&await ft(async()=>{await ot(["tag","-d",E])},"gitTagDeleted",{name:E})}async function Xt(E){await ft(async()=>{await ot(["push","origin",E])},"gitTagPushed",{name:E})}async function Ht(){await ft(async()=>{await ot(["fetch","--tags"])},"gitTagFetchAllDone")}async function ms(E){const C=E.remote||"origin";await ft(async()=>{await ot(["fetch",C,`refs/tags/${E.name}:refs/tags/${E.name}`])},"gitTagPulled",{name:E.name})}function Js(){Ne.value="",W.value="",J.value="",we.value=!0}function ns(E){z.value=E,E==="releases"&&Ns()}async function Ns(){const E=u.value?.repo;if(!(!E||je.value)){je.value=!0;try{const C=await Ap(E);Q.value=C.list,ge.value=C.skipped??""}catch(C){ge.value=C.message}finally{je.value=!1}}}async function Ps(){const E=Ke.value.trim(),C=Qe.value.trim();if(!E||!C){X("error",n("gitReleaseRequireMsg"));return}const Ce=u.value?.repo;if(!Ce){X("error",n("gitNotRepo"));return}v.op=!0;try{const nt=await Nr(Ce,E,E,C);nt.url?(X("ok",n("gitReleaseCreated",{url:nt.url})),Qe.value="",await Ns()):X("info",n("gitReleaseGhSkip",{reason:nt.skipped??""}))}catch(nt){X("error",nt.message)}finally{v.op=!1}}function aa(E){E&&window.open(E,"_blank","noopener")}async function yi(){const E=Ne.value.trim(),C=J.value.trim(),Ce=W.value.trim();if(!E||!C){X("error",n("gitReleaseRequireMsg"));return}const nt=u.value?.repo;if(!nt){X("error",n("gitNotRepo"));return}v.op=!0;try{if((await zt(["rev-parse","-q","--verify",`refs/tags/${E}`])).code!==0){const dt=["tag","-a",E,"-m",C];Ce&&dt.push(Ce),await ot(dt)}await ot(["push","origin",E]);let Tt="";try{const dt=await Nr(nt,E,E,C);dt.url?Tt=dt.url:dt.skipped&&X("info",n("gitReleaseGhSkip",{reason:dt.skipped}))}catch(dt){X("info",n("gitReleaseGhSkip",{reason:dt.message}))}X("ok",Tt?`${n("gitReleased",{name:E})}  ${Tt}`:n("gitReleased",{name:E})),we.value=!1,z.value==="releases"&&Ns(),await Ct()}catch(At){X("error",At.message)}finally{v.op=!1}}async function ss(){const E=ye.value.trim(),C=be.value.trim();if(!E||!C)return;await ft(async()=>{await ot(["remote","add",E,C])},"gitRemoteAdded",{name:E})&&(ye.value="",be.value="")}async function gs(E){const Ce=(await us({title:n("gitRemoteUrlTitle"),placeholder:n("gitRemoteUrlPlaceholder"),initial:E.url}))?.trim();!Ce||Ce===E.url||await ft(async()=>{await ot(["remote","set-url",E.name,Ce])},"gitRemoteUrlSaved")}async function ia(E){await Mt({title:n("gitDelete"),message:n("gitRemoteRemoveMsg",{name:E})})&&await ft(async()=>{await ot(["remote","remove",E])},"gitRemoteRemoved",{name:E})}async function tn(){v.stash=!0;try{await ot(["stash","push","-m",st.value.trim()||"auto stash"]),st.value="",X("ok",n("gitStashCreated")),await Ct()}catch(E){X("error",E.message)}finally{v.stash=!1}}async function Zs(E){await ft(async()=>{await ot(["stash","apply",E])},"gitStashApplied")}async function wi(E){await ft(async()=>{await ot(["stash","pop",E])},"gitStashPopped")}async function bi(E){await Mt({title:n("gitStashDrop"),message:n("gitStashDropMsg",{ref:E})})&&await ft(async()=>{await ot(["stash","drop",E])},"gitStashDropped")}async function As(E){fe.value=E,ke.value=[];try{const C=await ot(["stash","show","--no-color","-p",E]);ke.value=C?C.split(`
`):[]}catch(C){X("error",C.message)}}async function $o(E){v.sync=E;try{const C=await zt([E]);if(C.code!==0)throw new Error((C.stderr||C.stdout||n("gitOpFailed")).trim());X("ok",(C.stderr||C.stdout||`${E} ok`).trim()),await Ct()}catch(C){X("error",C.message)}finally{v.sync=""}}async function So(){const E=u.value?.repo??"";let C="";if(E){const Ce=await Oo(E,["remote","get-url","origin"]).catch(()=>null);Ce&&Ce.code===0&&(C=(Ce.stdout.split(/\r?\n/)[0]??"").trim())}rr({kind:"git",url:C})}async function la(){try{const E=await Yc();ce.value=E.name??"",Ie.value=E.email??""}catch{}qe.value=!0}async function ra(){v.config=!0;try{await Jc(ce.value,Ie.value),qe.value=!1,X("ok",n("gitConfigSaved"))}catch(E){X("error",E.message)}finally{v.config=!1}}async function ca(){const E=ut.value.trim();if(E){ut.value="",it.value.push({kind:"cmd",text:E});try{const C=await zt(E.split(/\s+/));C.stdout&&it.value.push({kind:"out",text:C.stdout}),C.stderr&&it.value.push({kind:C.code===0?"out":"err",text:C.stderr}),!C.stdout&&!C.stderr&&it.value.push({kind:"out",text:`(exit ${C.code})`}),await Ct(!0)}catch(C){it.value.push({kind:"err",text:C.message})}}}function ua(){yt.value?.focus()}return(E,C)=>{const Ce=An,nt=$s,At=ti,Tt=ei,dt=rn;return l(),Xe(dt,{"model-value":t.modelValue,title:s(n)("gitPanelTitle"),width:"800px","align-center":"","modal-class":"fw-blur-overlay",class:"fw-gitpanel-dialog","close-on-click-modal":!1,"onUpdate:modelValue":C[33]||(C[33]=V=>E.$emit("update:modelValue",V)),onOpen:On},{default:se(()=>[u.value&&u.value.inRepo?(l(),r("div",V1,[o("div",z1,[o("span",{class:te(["fw-gp-branch",{detached:H.value}]),title:S.value},[h(oe,{name:"git",size:13}),o("b",null,a(H.value?s(n)("gitHeadDetached"):Le.value||"—"),1)],10,U1),o("span",{class:"fw-gp-up",title:K.value},[Ee.value?(l(),r(ae,{key:0},[o("span",{class:te(["fw-gp-up-i",{zero:!M.value}])},"↑"+a(M.value),3),o("span",{class:te(["fw-gp-up-i",{zero:!T.value}])},"↓"+a(T.value),3),o("span",W1,a(Ee.value),1)],64)):(l(),r(ae,{key:1},[ue(a(s(n)("gitNoUpstream")),1)],64))],8,H1),o("span",{class:"fw-gp-repo",title:u.value.repo},a(s(n)("gitLocalRepo"))+a(R.value),9,G1),o("span",q1,[h(Ce,{size:"small",loading:v.sync==="fetch",onClick:C[0]||(C[0]=V=>$o("fetch"))},{default:se(()=>[ue(a(s(n)("gitFetch")),1)]),_:1},8,["loading"]),h(Ce,{size:"small",loading:v.sync==="pull",onClick:C[1]||(C[1]=V=>$o("pull"))},{default:se(()=>[ue(a(s(n)("gitPull")),1)]),_:1},8,["loading"]),h(Ce,{size:"small",loading:v.sync==="push",onClick:C[2]||(C[2]=V=>$o("push"))},{default:se(()=>[ue(a(s(n)("gitPush")),1)]),_:1},8,["loading"]),h(Ce,{size:"small",disabled:v.refresh,title:s(n)("gitRefresh"),onClick:C[3]||(C[3]=V=>Ct())},{default:se(()=>[o("span",{class:te(["fw-gp-refresh-ic",{spin:v.refresh}])},[h(oe,{name:"refresh",size:13})],2)]),_:1},8,["disabled","title"]),h(Ce,{size:"small",title:s(n)("gitConfig"),onClick:la},{default:se(()=>[h(oe,{name:"gear",size:13})]),_:1},8,["title"]),h(Ce,{size:"small",title:s(n)("accTitle"),onClick:So},{default:se(()=>[h(oe,{name:"shield",size:13})]),_:1},8,["title"])])]),o("div",K1,[o("nav",X1,[(l(),r(ae,null,Ae(i,V=>o("button",{key:V.key,class:te(["fw-gp-rail-btn",{active:c.value===V.key}]),onClick:at=>c.value=V.key},[h(oe,{name:V.icon,size:14},null,8,["name"]),o("span",J1,a(s(n)(V.label)),1),ze(V.key)?(l(),r("span",Z1,a(ze(V.key)),1)):N("",!0)],10,Y1)),64)),C[35]||(C[35]=o("span",{class:"fw-gp-rail-fill"},null,-1)),v.op?(l(),r("div",Q1,[C[34]||(C[34]=o("span",{class:"fw-gp-spin"},null,-1)),ue(a(s(n)("gitOpRunning")),1)])):N("",!0)]),o("section",ey,[c.value==="changes"?(l(),r("div",ty,[o("div",ny,[Ot.value.length?N("",!0):(l(),r("div",sy,a(s(n)("gitClean")),1)),(l(!0),r(ae,null,Ae(Ot.value,V=>(l(),r(ae,{key:V.key},[o("div",oy,[o("span",ay,a(V.label),1),o("span",iy,a(V.list.length),1),V.key==="unstaged"?(l(),r("button",{key:0,class:"fw-gp-mini",title:s(n)("gitStageAll"),onClick:he},[h(oe,{name:"plus",size:11})],8,ly)):N("",!0)]),(l(!0),r(ae,null,Ae(V.list,at=>(l(),r("div",{key:V.key+at.path,class:te(["fw-gp-row",{active:d.value&&d.value.file.path===at.path&&d.value.group===V.key}]),title:at.path,onClick:fn=>cn(at,V.key),onContextmenu:_e(fn=>Co(fn,at,V.key),["prevent","stop"])},[o("span",{class:te(["fw-gp-st","st-"+at.status])},a(et(at.status)),3),o("span",cy,[lt(at.path)?(l(),r("span",uy,a(lt(at.path)),1)):N("",!0),ue(a(xn(at.path)),1)]),o("span",dy,[V.key!=="staged"?(l(),r("button",{key:0,class:"fw-gp-mini",title:s(n)("gitAddShort"),onClick:_e(fn=>yn(at),["stop"])},[h(oe,{name:"plus",size:11})],8,fy)):(l(),r("button",{key:1,class:"fw-gp-mini",title:s(n)("gitUnstage"),onClick:_e(fn=>Jn(at),["stop"])},[h(oe,{name:"undo",size:11})],8,py))])],42,ry))),128))],64))),128))]),o("div",vy,[o("div",hy,[o("span",{class:"fw-gp-detailtitle",title:Mn.value},a(Mn.value),9,my),o("span",gy,[d.value&&p.value!=="diff"?(l(),r("button",{key:0,class:"fw-gp-mini",title:s(n)("gitDiff"),onClick:C[4]||(C[4]=V=>cn(d.value.file,d.value.group))},[h(oe,{name:"code",size:12})],8,yy)):N("",!0),d.value&&p.value!=="history"?(l(),r("button",{key:1,class:"fw-gp-mini",title:s(n)("gitFileHistory"),onClick:Tn},[h(oe,{name:"clock",size:12})],8,wy)):N("",!0),d.value&&p.value!=="blame"?(l(),r("button",{key:2,class:"fw-gp-mini",title:s(n)("gitBlame"),onClick:gn},[h(oe,{name:"activity",size:12})],8,by)):N("",!0),d.value?(l(),r("button",{key:3,class:"fw-gp-mini",title:s(n)("gitCopyPath"),onClick:C[5]||(C[5]=V=>Ge(d.value.file.path))},[h(oe,{name:"copy",size:12})],8,_y)):N("",!0)])]),d.value?p.value==="diff"?(l(),Xe(Vo,{key:1,lines:w.value,empty:Gt.value},null,8,["lines","empty"])):p.value==="history"?(l(),r(ae,{key:2},[x.value.length?(l(),r("div",Cy,[(l(!0),r(ae,null,Ae(x.value,V=>(l(),r("div",{key:V.hash,class:"fw-gp-filerow"},[o("span",$y,a(V.short),1),o("span",{class:"fw-gp-filesub",title:V.subject},a(V.subject),9,Sy),o("span",Ey,a(V.author)+" · "+a(V.date),1)]))),128))])):(l(),r("div",xy,a(s(n)("gitFileHistoryEmpty")),1))],64)):(l(),r(ae,{key:3},[O.value.length?(l(),r("div",Dy,[(l(!0),r(ae,null,Ae(O.value,(V,at)=>(l(),r("div",{key:at,class:"fw-gp-blame-row"},[o("span",{class:"fw-gp-blame-hash",title:V.hash},a(V.hash.slice(0,7)),9,Fy),o("span",{class:"fw-gp-blame-author",title:V.author},a(V.author),9,Ry),o("span",Ny,a(V.date),1),o("span",Py,a(V.line),1),o("span",Ay,a(V.text),1)]))),128))])):(l(),r("div",Ty,a(s(n)("gitBlameEmpty")),1))],64)):(l(),r("div",ky,a(s(n)("gitSelectFile")),1))])])):c.value==="history"?(l(),r("div",My,[o("div",Oy,[o("div",Ly,[o("button",{class:te(["fw-gp-tab",{on:j.value}]),onClick:C[6]||(C[6]=V=>Sn(!0))},a(s(n)("gitHistoryAll")),3),o("button",{class:te(["fw-gp-tab",{on:!j.value}]),onClick:C[7]||(C[7]=V=>Sn(!1))},a(s(n)("gitHistoryCurrent")),3),C[36]||(C[36]=o("span",{class:"fw-gp-spacer"},null,-1)),o("span",By,a(P.value.length),1),P.value.length>=pe.value?(l(),r("button",{key:0,class:"fw-gp-tab",onClick:Ks},a(s(n)("gitLoadMore")),1)):N("",!0)]),h(I1,{rows:P.value,active:U.value,empty:s(n)("gitLogEmpty"),onSelect:He},null,8,["rows","active","empty"])]),o("div",Iy,[$.value?(l(),r(ae,{key:1},[o("div",Vy,[o("span",{class:"fw-gp-detailtitle",title:$.value.subject},a(s(n)("gitCommitDetail")),9,zy),o("span",Uy,[o("button",{class:"fw-gp-mini",title:s(n)("gitCopyHash"),onClick:C[8]||(C[8]=V=>Ge($.value.hash))},[h(oe,{name:"copy",size:12})],8,Hy),o("button",{class:"fw-gp-mini",title:s(n)("gitBranchFrom"),onClick:es},[h(oe,{name:"git",size:12})],8,Wy),o("button",{class:"fw-gp-mini",title:s(n)("gitCheckoutCommit"),onClick:Rs},[h(oe,{name:"check",size:12})],8,Gy),o("button",{class:"fw-gp-mini",title:s(n)("gitMenu"),onClick:C[9]||(C[9]=_e(V=>Rn(V),["stop"]))},[h(oe,{name:"sort",size:12})],8,qy)])]),o("div",Ky,[o("div",Xy,[o("div",Yy,[o("span",Jy,a(s(n)("gitCommitHash")),1),o("span",Zy,a($.value.hash),1)]),o("div",Qy,[o("span",ew,a(s(n)("gitCommitAuthor")),1),o("span",tw,a($.value.author)+" <"+a($.value.email)+">",1)]),o("div",nw,[o("span",sw,a(s(n)("gitCommitDate")),1),o("span",ow,a(Cn($.value.ts))+" · "+a($.value.date),1)]),o("div",aw,[o("span",iw,a(s(n)("gitCommitParents")),1),o("span",lw,a($.value.parents.map(V=>V.slice(0,7)).join(" ")||"—"),1)]),$.value.refs.length?(l(),r("div",rw,[o("span",cw,a(s(n)("gitCommitRefs")),1),o("span",uw,[(l(!0),r(ae,null,Ae($.value.refs,V=>(l(),r("span",{key:V.label,class:te(["fw-gp-refchip","rf-"+V.kind])},a(V.label),3))),128))])])):N("",!0)]),o("pre",dw,a($.value.body||$.value.subject),1),o("div",fw,a(s(n)("gitCommitChangedFiles",{n:ee.value.length})),1),ee.value.length?N("",!0):(l(),r("div",pw,a(s(n)("gitCommitNoFiles")),1)),(l(!0),r(ae,null,Ae(ee.value,V=>(l(),r("div",{key:V.path,class:te(["fw-gp-row",{active:G.value===V.path}]),title:s(n)("gitCommitOpenDiff",{path:V.path}),onClick:at=>Pe(V)},[o("span",hw,[lt(V.path)?(l(),r("span",mw,a(lt(V.path)),1)):N("",!0),ue(a(xn(V.path)),1)]),o("span",gw,[o("span",yw,"+"+a(V.add),1),o("span",ww,"-"+a(V.del),1)])],10,vw))),128))])],64)):(l(),r("div",jy,a(s(n)("gitSelectCommit")),1))])])):c.value==="branches"?(l(),r("div",bw,[o("div",_w,[h(nt,{modelValue:me.value,"onUpdate:modelValue":C[10]||(C[10]=V=>me.value=V),size:"small",placeholder:s(n)("gitBranchNew"),onKeydown:bt(Kt,["enter"])},null,8,["modelValue","placeholder"]),h(Ce,{size:"small",type:"primary",loading:v.branch,onClick:Kt},{default:se(()=>[ue(a(s(n)("gitBranchCreateAndSwitch")),1)]),_:1},8,["loading"]),h(Ce,{size:"small",disabled:H.value,onClick:dn},{default:se(()=>[ue(a(s(n)("gitBranchRename")),1)]),_:1},8,["disabled"])]),o("div",kw,a(s(n)("gitBranchLocalGroup")),1),(l(!0),r(ae,null,Ae(q.value,V=>(l(),r("div",{key:V.name,class:te(["fw-gp-row",{active:V.current}]),onContextmenu:_e(at=>Ds(at,V),["prevent","stop"])},[o("span",Cw,[h(oe,{name:"git",size:12})]),o("span",$w,[ue(a(V.name),1),V.current?(l(),r("span",Sw," • "+a(s(n)("gitBranchCurrent")),1)):N("",!0)]),o("span",Ew,[V.current?(l(),Xe(Ce,{key:1,text:"",size:"small",onClick:at=>xe(V.name)},{default:se(()=>[ue(a(s(n)("gitPushBranch")),1)]),_:1},8,["onClick"])):(l(),Xe(Ce,{key:0,text:"",size:"small",onClick:at=>ts(V.name)},{default:se(()=>[ue(a(s(n)("gitCheckout")),1)]),_:1},8,["onClick"]))])],42,xw))),128)),Te.value.length?(l(),r(ae,{key:0},[o("div",Tw,a(s(n)("gitBranchRemoteGroup")),1),(l(!0),r(ae,null,Ae(Te.value,V=>(l(),r("div",{key:V.name,class:"fw-gp-row",onContextmenu:_e(at=>Zn(at,V),["prevent","stop"])},[o("span",Fw,[h(oe,{name:"globe",size:12})]),o("span",Rw,a(V.name),1),o("span",Nw,[h(Ce,{text:"",size:"small",onClick:at=>In(V.name)},{default:se(()=>[ue(a(s(n)("gitCheckout")),1)]),_:1},8,["onClick"])])],40,Dw))),128))],64)):N("",!0)])):c.value==="tags"?(l(),r("div",Pw,[o("div",Aw,[o("button",{class:te(["fw-gp-sectab",{active:z.value==="tags"}]),onClick:C[11]||(C[11]=V=>ns("tags"))},[ue(a(s(n)("gitTabTags")),1),ve.value.length?(l(),r("span",Mw,a(ve.value.length),1)):N("",!0)],2),o("button",{class:te(["fw-gp-sectab",{active:z.value==="releases"}]),onClick:C[12]||(C[12]=V=>ns("releases"))},[ue(a(s(n)("gitTabReleases")),1),Q.value.length?(l(),r("span",Ow,a(Q.value.length),1)):N("",!0)],2)]),z.value==="tags"?(l(),r(ae,{key:0},[o("div",Lw,[h(nt,{modelValue:ne.value,"onUpdate:modelValue":C[13]||(C[13]=V=>ne.value=V),size:"small",class:"fw-gp-in-name",placeholder:s(n)("gitTagNamePlaceholder")},null,8,["modelValue","placeholder"]),h(nt,{modelValue:le.value,"onUpdate:modelValue":C[14]||(C[14]=V=>le.value=V),size:"small",class:"fw-gp-in-target",placeholder:s(n)("gitTagTargetPlaceholder")},null,8,["modelValue","placeholder"]),h(nt,{modelValue:Se.value,"onUpdate:modelValue":C[15]||(C[15]=V=>Se.value=V),size:"small",class:"fw-gp-in-msg",placeholder:s(n)("gitTagMessagePlaceholder")},null,8,["modelValue","placeholder"]),h(Ce,{size:"small",type:"primary",disabled:!ne.value.trim(),onClick:F},{default:se(()=>[ue(a(s(n)("gitTagCreate")),1)]),_:1},8,["disabled"]),h(Ce,{size:"small",loading:v.op,disabled:!wt.value,title:wt.value?"":s(n)("gitTagNoRemote"),onClick:Ht},{default:se(()=>[ue(a(s(n)("gitTagFetchAll")),1)]),_:1},8,["loading","disabled","title"])]),ve.value.length?N("",!0):(l(),r("div",Bw,a(s(n)("gitTagEmpty")),1)),(l(!0),r(ae,null,Ae(ve.value,V=>(l(),r("div",{key:V.name,class:"fw-gp-row",title:de(V),onContextmenu:_e(at=>Qn(at,V),["prevent","stop"])},[o("span",jw,[h(oe,{name:"tag",size:12})]),o("span",Vw,[ue(a(V.name)+" ",1),V.deref?(l(),r("span",zw,a(s(n)("gitTagAnnotated")),1)):N("",!0),V.remoteOnly?(l(),r("span",Uw,a(s(n)("gitTagRemoteOnly")),1)):N("",!0)]),V.date?(l(),r("span",Hw,a(V.date),1)):N("",!0),V.subject?(l(),r("span",{key:1,class:"fw-gp-subject",title:V.subject},a(V.subject),9,Ww)):N("",!0),o("span",Gw,a(V.hash),1),o("span",qw,[h(Ce,{text:"",size:"small",onClick:at=>Me(V)},{default:se(()=>[ue(a(s(n)("gitView")),1)]),_:1},8,["onClick"])])],40,Iw))),128))],64)):(l(),r(ae,{key:1},[o("div",Kw,[h(Ce,{size:"small",type:"primary",disabled:!wt.value,title:wt.value?"":s(n)("gitTagNoRemote"),onClick:Js},{default:se(()=>[ue(a(s(n)("gitReleaseBtn")),1)]),_:1},8,["disabled","title"]),h(Ce,{size:"small",loading:je.value,onClick:Ns},{default:se(()=>[ue(a(s(n)("gitRefresh")),1)]),_:1},8,["loading"]),wt.value?N("",!0):(l(),r("span",Xw,a(s(n)("gitTagNoRemote")),1))]),o("div",Yw,[h(Tt,{modelValue:Ke.value,"onUpdate:modelValue":C[16]||(C[16]=V=>Ke.value=V),size:"small",class:"fw-gp-in-name",placeholder:s(n)("gitReleaseChooseTag"),filterable:""},{default:se(()=>[(l(!0),r(ae,null,Ae(ve.value,V=>(l(),Xe(At,{key:V.name,label:V.name,value:V.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"]),h(nt,{modelValue:Qe.value,"onUpdate:modelValue":C[17]||(C[17]=V=>Qe.value=V),size:"small",type:"textarea",rows:2,resize:"none",placeholder:s(n)("gitReleaseNotesPlaceholder")},null,8,["modelValue","placeholder"]),h(Ce,{size:"small",disabled:!Ke.value.trim()||!Qe.value.trim(),onClick:Ps},{default:se(()=>[ue(a(s(n)("gitReleaseCreateForTag")),1)]),_:1},8,["disabled"])]),ge.value?(l(),r("div",Jw,a(s(n)("gitReleaseLoadSkip",{reason:ge.value})),1)):!Q.value.length&&!je.value?(l(),r("div",Zw,a(s(n)("gitReleaseEmpty")),1)):N("",!0),(l(!0),r(ae,null,Ae(Q.value,V=>(l(),r("div",{key:V.url||V.tag,class:"fw-gp-row",title:V.name},[o("span",eb,[h(oe,{name:"tag",size:12})]),o("span",tb,[ue(a(V.name||V.tag)+" ",1),o("span",nb,a(V.tag),1)]),V.date?(l(),r("span",sb,a(V.date),1)):N("",!0),o("span",ob,[h(Ce,{text:"",size:"small",onClick:at=>aa(V.url)},{default:se(()=>[ue(a(s(n)("gitReleaseOpen")),1)]),_:1},8,["onClick"])])],8,Qw))),128))],64))])):c.value==="remotes"?(l(),r("div",ab,[o("div",ib,[h(nt,{modelValue:ye.value,"onUpdate:modelValue":C[18]||(C[18]=V=>ye.value=V),size:"small",class:"fw-gp-in-name",placeholder:s(n)("gitRemoteNamePlaceholder")},null,8,["modelValue","placeholder"]),h(nt,{modelValue:be.value,"onUpdate:modelValue":C[19]||(C[19]=V=>be.value=V),size:"small",class:"fw-gp-in-url",placeholder:s(n)("gitRemoteUrlPlaceholder")},null,8,["modelValue","placeholder"]),h(Ce,{size:"small",type:"primary",disabled:!ye.value.trim()||!be.value.trim(),onClick:ss},{default:se(()=>[ue(a(s(n)("gitRemoteAdd")),1)]),_:1},8,["disabled"])]),$e.value.length?N("",!0):(l(),r("div",lb,a(s(n)("gitRemoteEmpty")),1)),(l(!0),r(ae,null,Ae($e.value,V=>(l(),r("div",{key:V.name,class:"fw-gp-row",onContextmenu:_e(at=>Fs(at,V),["prevent","stop"])},[o("span",cb,[h(oe,{name:"globe",size:12})]),o("span",ub,a(V.name),1),o("span",{class:"fw-gp-remote-url",title:V.url},a(V.url),9,db)],40,rb))),128))])):c.value==="stash"?(l(),r("div",fb,[o("div",pb,[o("div",vb,[h(nt,{modelValue:st.value,"onUpdate:modelValue":C[20]||(C[20]=V=>st.value=V),size:"small",placeholder:s(n)("gitStashPlaceholder"),onKeydown:bt(tn,["enter"])},null,8,["modelValue","placeholder"]),h(Ce,{size:"small",type:"primary",loading:v.stash,disabled:!ct.value,onClick:tn},{default:se(()=>[ue(a(s(n)("gitStashNew")),1)]),_:1},8,["loading","disabled"])]),Ye.value.length?N("",!0):(l(),r("div",hb,a(ct.value?s(n)("gitStashEmpty"):s(n)("gitStashNone")),1)),(l(!0),r(ae,null,Ae(Ye.value,V=>(l(),r("div",{key:V.ref,class:te(["fw-gp-row",{active:fe.value===V.ref}]),title:V.full,onClick:at=>As(V.ref),onContextmenu:_e(at=>Ys(at,V),["prevent","stop"])},[o("span",gb,[h(oe,{name:"stash",size:12})]),o("span",yb,a(V.message),1),o("span",wb,[o("button",{class:"fw-gp-mini",title:s(n)("gitStashApply"),onClick:_e(at=>Zs(V.ref),["stop"])},[h(oe,{name:"download",size:11})],8,bb)])],42,mb))),128))]),o("div",_b,[o("div",kb,[o("span",xb,a(fe.value||s(n)("gitStashView")),1)]),h(Vo,{lines:ke.value,empty:s(n)("gitStashEmpty")},null,8,["lines","empty"])])])):c.value==="cli"?(l(),r("div",Cb,[o("div",{ref_key:"cliRef",ref:rt,class:"fw-gp-cli",onClick:ua},[it.value.length?N("",!0):(l(),r("div",$b,a(s(n)("gitCliPlaceholder")),1)),(l(!0),r(ae,null,Ae(it.value,(V,at)=>(l(),r("div",{key:at,class:te(["fw-gp-cli-line","kind-"+V.kind])},[V.kind==="cmd"?(l(),r(ae,{key:0},[o("span",Sb,a(re.value),1),o("span",Eb,a(V.text),1)],64)):(l(),r(ae,{key:1},[ue(a(V.text),1)],64))],2))),128)),o("div",Tb,[o("span",Db,a(re.value),1),kt(o("input",{ref_key:"cliInputRef",ref:yt,"onUpdate:modelValue":C[21]||(C[21]=V=>ut.value=V),class:"fw-gp-cli-inner",spellcheck:"false",autocomplete:"off",onKeydown:bt(ca,["enter"])},null,544),[[Lt,ut.value]])])],512)])):N("",!0)])]),c.value==="changes"?(l(),r("div",Fb,[h(nt,{modelValue:L.value,"onUpdate:modelValue":C[22]||(C[22]=V=>L.value=V),type:"textarea",rows:2,resize:"none",placeholder:s(n)("gitCommitMsgPlaceholder"),onKeydown:bt(_e(Be,["ctrl","prevent"]),["enter"])},null,8,["modelValue","placeholder","onKeydown"]),o("div",Rb,[o("span",Nb,[u.value.staged.length?(l(),r(ae,{key:0},[ue(a(s(n)("gitCommitFiles",{n:u.value.staged.length})),1)],64)):(l(),r(ae,{key:1},[ue(a(s(n)("gitNoChanges")),1)],64))]),h(Ce,{size:"small",disabled:!u.value.unstaged.length&&!u.value.untracked.length,onClick:he},{default:se(()=>[ue(a(s(n)("gitStageAll")),1)]),_:1},8,["disabled"]),h(Ce,{size:"small",type:"primary",loading:v.commit,disabled:!u.value.staged.length||!L.value.trim(),onClick:Be},{default:se(()=>[ue(a(s(n)("gitCommit")),1),u.value.staged.length?(l(),r("span",Pb,"（"+a(u.value.staged.length)+"）",1)):N("",!0)]),_:1},8,["loading","disabled"])])])):N("",!0)])):(l(),r("div",Ab,[v.refresh?(l(),r(ae,{key:0},[C[37]||(C[37]=o("span",{class:"fw-gp-spin"},null,-1)),ue(a(s(n)("gitOpRunning")),1)],64)):(l(),r("div",Mb,[h(oe,{name:"git",size:28}),o("span",null,a(s(n)("gitNotRepo")),1),o("button",{class:"fw-retry",onClick:Gn},a(s(n)("gitCloneHere")),1)]))])),h(dt,{"model-value":qe.value,title:s(n)("gitConfigTitle"),width:"420px","align-center":"","modal-class":"fw-blur-overlay",class:"fw-gitconfig-dialog","close-on-click-modal":!1,"onUpdate:modelValue":C[26]||(C[26]=V=>qe.value=V)},{footer:se(()=>[h(Ce,{onClick:C[25]||(C[25]=V=>qe.value=!1)},{default:se(()=>[ue(a(s(n)("cancel")),1)]),_:1}),h(Ce,{type:"primary",loading:v.config,onClick:ra},{default:se(()=>[ue(a(s(n)("gitConfigSave")),1)]),_:1},8,["loading"])]),default:se(()=>[o("div",Ob,[o("label",null,a(s(n)("gitConfigName")),1),h(nt,{modelValue:ce.value,"onUpdate:modelValue":C[23]||(C[23]=V=>ce.value=V),size:"small",placeholder:s(n)("gitConfigNamePlaceholder")},null,8,["modelValue","placeholder"])]),o("div",Lb,[o("label",null,a(s(n)("gitConfigEmail")),1),h(nt,{modelValue:Ie.value,"onUpdate:modelValue":C[24]||(C[24]=V=>Ie.value=V),size:"small",placeholder:s(n)("gitConfigEmailPlaceholder")},null,8,["modelValue","placeholder"])])]),_:1},8,["model-value","title"]),h(dt,{modelValue:Ve.value,"onUpdate:modelValue":C[27]||(C[27]=V=>Ve.value=V),title:s(n)("gitCommitViewTitle"),width:"800px","align-center":"","modal-class":"fw-blur-overlay",class:"fw-gp-commitview-dialog","close-on-click-modal":!1},{default:se(()=>[$.value?(l(),r("div",Bb,[o("div",Ib,[o("div",jb,[o("span",Vb,a(s(n)("gitCommitHash")),1),o("span",zb,a($.value.hash),1)]),o("div",Ub,[o("span",Hb,a(s(n)("gitCommitAuthor")),1),o("span",Wb,a($.value.author)+" <"+a($.value.email)+">",1)]),o("div",Gb,[o("span",qb,a(s(n)("gitCommitDate")),1),o("span",Kb,a(Cn($.value.ts))+" · "+a($.value.date),1)]),o("pre",Xb,a($.value.body||$.value.subject),1)]),o("div",Yb,[o("div",Jb,[ee.value.length?N("",!0):(l(),r("div",Zb,a(s(n)("gitCommitNoFiles")),1)),(l(!0),r(ae,null,Ae(ee.value,V=>(l(),r("div",{key:V.path,class:te(["fw-gp-row",{active:G.value===V.path}]),title:V.path,onClick:at=>Pe(V)},[o("span",e_,[lt(V.path)?(l(),r("span",t_,a(lt(V.path)),1)):N("",!0),ue(a(xn(V.path)),1)]),o("span",n_,[o("span",s_,"+"+a(V.add),1),o("span",o_,"-"+a(V.del),1)])],10,Qb))),128))]),o("div",a_,[h(Vo,{lines:A.value,empty:s(n)("gitDiffEmpty")},null,8,["lines","empty"])])])])):(l(),r("div",i_,a(s(n)("gitSelectCommit")),1))]),_:1},8,["modelValue","title"]),h(dt,{modelValue:we.value,"onUpdate:modelValue":C[32]||(C[32]=V=>we.value=V),title:s(n)("gitReleaseTitle"),width:"460px","align-center":"","modal-class":"fw-blur-overlay",class:"fw-gp-release-dialog","close-on-click-modal":!1},{footer:se(()=>[h(Ce,{onClick:C[31]||(C[31]=V=>we.value=!1)},{default:se(()=>[ue(a(s(n)("cancel")),1)]),_:1}),h(Ce,{type:"primary",loading:v.op,disabled:!Ne.value.trim()||!J.value.trim(),onClick:yi},{default:se(()=>[ue(a(s(n)("gitReleasePublish")),1)]),_:1},8,["loading","disabled"])]),default:se(()=>[o("div",l_,[o("label",null,a(s(n)("gitReleaseName")),1),h(nt,{modelValue:Ne.value,"onUpdate:modelValue":C[28]||(C[28]=V=>Ne.value=V),size:"small",placeholder:s(n)("gitTagNamePlaceholder")},null,8,["modelValue","placeholder"])]),o("div",r_,[o("label",null,a(s(n)("gitReleaseTarget")),1),h(nt,{modelValue:W.value,"onUpdate:modelValue":C[29]||(C[29]=V=>W.value=V),size:"small",placeholder:s(n)("gitTagTargetPlaceholder")},null,8,["modelValue","placeholder"])]),o("div",c_,[o("label",null,a(s(n)("gitReleaseMsg")),1),h(nt,{modelValue:J.value,"onUpdate:modelValue":C[30]||(C[30]=V=>J.value=V),type:"textarea",rows:3,resize:"none",placeholder:s(n)("gitTagMessagePlaceholder")},null,8,["modelValue","placeholder"])])]),_:1},8,["modelValue","title"]),s(Et)?(l(),Xe(Zt,{key:2,items:s(Bn),x:s($t),y:s(wn),onClose:s(Xs)},null,8,["items","x","y","onClose"])):N("",!0)]),_:1},8,["model-value","title"])}}}),fd=xt(u_,[["__scopeId","data-v-001797f7"]]),d_={key:0,class:"fw-svn-shell"},f_={class:"fw-svn-head"},p_=["title"],v_=["title"],h_=["title"],m_={class:"fw-svn-headacts"},g_={class:"fw-svn-body"},y_={class:"fw-svn-rail"},w_=["onClick"],b_={class:"fw-svn-rail-txt"},__={key:0,class:"fw-svn-rail-badge"},k_={key:0,class:"fw-svn-rail-op"},x_={class:"fw-svn-content"},C_={key:0,class:"fw-svn-split"},$_={class:"fw-svn-list"},S_={class:"fw-svn-groupbar"},E_={class:"fw-svn-groupname"},T_={class:"fw-svn-selall"},D_=["checked"],F_={key:0,class:"fw-svn-empty"},R_=["title"],N_=["checked","onChange"],P_=["data-code"],A_={class:"fw-svn-path"},M_={key:0,class:"fw-svn-dir"},O_={class:"fw-svn-stext"},L_={class:"fw-svn-rowacts"},B_=["disabled","title","onClick"],I_=["disabled","title","onClick"],j_=["disabled","title","onClick"],V_=["disabled","title","onClick"],z_={class:"fw-svn-detail"},U_={class:"fw-svn-detailhead"},H_={class:"fw-svn-detailtitle"},W_=["placeholder"],G_={class:"fw-svn-bulk"},q_=["disabled"],K_=["disabled"],X_=["disabled"],Y_={class:"fw-svn-commit-acts"},J_={class:"fw-svn-hint"},Z_=["disabled"],Q_={key:1,class:"fw-svn-loglist"},e0={key:0,class:"fw-svn-empty"},t0=["title","onClick"],n0={class:"fw-svn-caret"},s0={class:"fw-svn-log-r"},o0=["title"],a0={class:"fw-svn-log-meta"},i0={key:0,class:"fw-svn-log-msg"},l0={class:"fw-svn-log-cfiles"},r0={key:0,class:"fw-svn-empty"},c0=["title","onClick"],u0={class:"fw-svn-cfile-path"},d0={key:0,class:"fw-svn-cfile-dir"},f0={key:2,class:"fw-svn-cli"},p0={class:"fw-svn-cli-body"},v0={key:1,class:"fw-svn-warn fw-svn-state"},h0={key:2,class:"fw-svn-checkout-form fw-svn-state"},m0={class:"fw-svn-tip"},g0={class:"fw-svn-checkout-row"},y0={class:"fw-svn-checkout-row"},w0={key:3,class:"fw-svn-empty fw-svn-state"},b0={class:"fw-svn-diffwrap"},_0={class:"fw-svn-blame"},k0={class:"fw-svn-co-form"},x0={class:"fw-svn-co-label"},C0={class:"fw-svn-co-label"},$0=ht({__name:"SvnPanel",props:{modelValue:{type:Boolean},dir:{}},setup(t){const e=t,{t:n}=Bt(),i=[{key:"changes",icon:"fileText",label:"svnRailChanges"},{key:"log",icon:"clock",label:"svnRailLog"},{key:"output",icon:"terminal",label:"svnOutput"}],c=m("changes"),u=m(null),v=m([]),d=m(new Set),p=m(""),w=m(!1),b=m(!1),x=m(""),O=m([]),L=m(!1),P=m(!1),j=m(""),U=m([]),$=m(!1),ee=m(""),G=m([]),A=m(!1),pe=m(""),I=m(""),ve=B(()=>(u.value?.root??e.dir).replace(/\\/g,"/")),$e=B(()=>v.value.length>0&&d.value.size===v.value.length);function me(T){return T!=="changes"?"":v.value.length?String(v.value.length):""}function ne(T){c.value=T,T==="log"&&!O.value.length&&ce()}function le(T){const K=T.lastIndexOf("/");return K<0?"":T.slice(0,K+1)}function Se(T){const K=T.lastIndexOf("/");return K<0?T:T.slice(K+1)}function Ve(T){return T.split(`
`)[0]??""}async function we(){u.value=null,v.value=[],d.value=new Set,x.value="",O.value=[],c.value="changes";try{u.value=await fs(e.dir),u.value.inRepo&&u.value.svnAvailable&&await J()}catch(T){X("error",T.message)}}async function Ne(T,K=!1){if(w.value)return null;w.value=!0,c.value="output";try{const S=await Jt(e.dir,T),q=[S.stdout,S.stderr].filter(Boolean).join(`
`).trim();return x.value=`$ svn ${T.join(" ")}

${q||n("svnNoOutput")}`,S.code!==0?X("error",(S.stderr||n("svnFailed")).split(`
`)[0].slice(0,200)):!K&&S.stdout&&X("ok",S.stdout.split(`
`)[0].slice(0,200)),S}catch(S){return X("error",S.message),null}finally{w.value=!1}}function W(T){T&&(x.value=`${T}

${x.value}`)}async function J(){const T=await Jt(e.dir,["status"]),K=[];for(const q of(T.stdout||"").split(`
`)){if(!q.trim())continue;const Te=q.slice(0,8),re=q.slice(8).trim();if(!re)continue;const ct=(Te[0]??" ").trim();K.push({code:ct,path:re.split(" -> ")[0],statusText:z(ct)})}v.value=K;const S=new Set(K.map(q=>q.path));d.value=new Set([...d.value].filter(q=>S.has(q)))}function z(T){return{A:n("svnStAdded"),M:n("svnStModified"),D:n("svnStDeleted"),R:n("svnStReplaced"),C:n("svnStConflicted"),"!":n("svnStMissing"),"~":n("svnStObstructed"),"?":n("svnStUnversioned"),I:n("svnStIgnored")," ":"",K:n("svnStLocked")}[T]??T}function Q(T){const K=new Set(d.value);K.has(T)?K.delete(T):K.add(T),d.value=K}function ge(T){const K=T.target.checked;d.value=K?new Set(v.value.map(S=>S.path)):new Set}function je(){rr({kind:"svn",url:u.value?.url??""})}async function Ke(){b.value=!0;try{u.value=await fs(e.dir),u.value.inRepo&&u.value.svnAvailable&&await J()}catch(T){X("error",T.message)}finally{b.value=!1}}async function Qe(){const T=u.value?.revision??null,K=await Ne(["update"],!0);if(!K||K.code!==0)return;const S=Xg(K.stdout),q=Yg(K.stdout);await Ke();const Te=u.value?.revision??q,re=S?T?n("svnUpdateSummaryFrom",{from:T,to:Te??T,n:S}):n("svnUpdateSummary",{n:S,to:Te??"?"}):n("svnAlreadyLatest",{rev:Te??T??"?"});W(re),X("ok",re)}async function ye(){const T=await Ne(["cleanup"]);T&&T.code===0&&await J()}async function be(){const T=await Ne(["add",...d.value]);T&&T.code===0&&await J()}async function Ye(T){const K=await Ne(["add","--",T]);K&&K.code===0&&await J()}async function st(T){const K=T.replace(/[\\/]$/,""),S=K.replace(/[\\/][^\\/]+$/,""),q=K.slice(S.length+1),Te=await Jt(S,["propget","svn:ignore",S]),re=(Te.stdout||"").split(/\r?\n/).map(Ot=>Ot.trim()).filter(Boolean);if(re.includes(q)){Te.code===0&&X("ok",n("gitIgnored")),await J();return}const ct=[...re,q].join(`
`),wt=await Jt(S,["propset","svn:ignore",ct,S]);wt.code===0?X("ok",n("gitIgnored")):X("error",(wt.stderr||n("svnFailed")).split(`
`)[0].slice(0,200)),await J()}async function fe(){const T=await Ne(["revert",...d.value]);T&&T.code===0&&await J()}async function ke(){const T=await Ne(["resolve","--accept","working",...d.value]);T&&T.code===0&&await J()}async function qe(){const T=[...d.value],K=["commit","-m",p.value,...T],S=await Ne(K);S&&S.code===0&&(p.value="",d.value=new Set,await J())}async function ce(){L.value=!0;try{const T=await Jt(e.dir,["log","--xml","-v","-l","50"]);O.value=Ie(T.stdout),ut.value=new Set}catch(T){X("error",T.message)}finally{L.value=!1}}function Ie(T){const K=[];try{new DOMParser().parseFromString(T,"application/xml").querySelectorAll("logentry").forEach(q=>{const Te=[];q.querySelectorAll("paths > path").forEach(re=>Te.push({action:re.getAttribute("action"),text:re.textContent})),K.push({revision:q.getAttribute("revision")??"",author:q.querySelector("author")?.textContent??"",date:q.querySelector("date")?.textContent??"",msg:q.querySelector("msg")?.textContent??"",paths:Te})})}catch{}return K}function rt(T){if(!T)return"";const K=new Date(T);return isNaN(K.getTime())?T:K.toLocaleString()}async function yt(T){P.value=!0,j.value=" · "+T;try{const K=await Jt(e.dir,["diff",T]);U.value=(K.stdout||"").split(`
`)}catch(K){U.value=[K.message]}}const ut=m(new Set);function it(T){const K=new Set(ut.value);K.has(T)?K.delete(T):K.add(T),ut.value=K}function Le(T){if(!T)return"";const K=T.replace(/^\//,""),S=K.lastIndexOf("/");return S<0?"":K.slice(0,S+1)}function H(T){if(!T)return"";const K=T.replace(/^\//,"");return K.slice(K.lastIndexOf("/")+1)||K}async function R(T,K){if(K.text){P.value=!0,j.value=` · r${T} ${K.text}`,U.value=[];try{const S=await Jt(e.dir,["diff","-c",T,"--","^"+K.text]);U.value=(S.stdout||"").split(`
`)}catch(S){U.value=[S.message]}}}async function Z(T){$.value=!0,ee.value=" · "+T;try{const K=await Jt(e.dir,["blame","-v",T]);G.value=(K.stdout||"").split(`
`)}catch(K){G.value=[K.message]}}function Ee(){pe.value||(pe.value=u.value?.url??""),I.value||(I.value=u.value?.root??e.dir)}async function M(){const T=pe.value.trim(),K=I.value.trim();if(!T||!K)return;const S=K.replace(/[\\/][^\\/]*$/,"")||K;w.value=!0;try{const q=await Jt(S,["checkout",T,K]),Te=[q.stdout,q.stderr].filter(Boolean).join(`
`).trim();x.value=`$ svn checkout ${T} ${K}

${Te||n("svnNoOutput")}`,q.code===0?(X("ok",n("svnCheckedOut")),A.value=!1,u.value=await fs(K),u.value.inRepo&&await J()):X("error",(q.stderr||n("svnFailed")).split(`
`)[0].slice(0,200))}catch(q){X("error",q.message)}finally{w.value=!1}}return(T,K)=>{const S=An,q=$s,Te=rn;return l(),Xe(Te,{"model-value":t.modelValue,title:s(n)("svnPanelTitle"),width:"800px","align-center":"","modal-class":"fw-blur-overlay",class:"fw-svn-dialog","close-on-click-modal":!1,"onUpdate:modelValue":K[10]||(K[10]=re=>T.$emit("update:modelValue",re)),onOpen:we},{default:se(()=>[u.value&&u.value.inRepo&&u.value.svnAvailable?(l(),r("div",d_,[o("div",f_,[o("span",{class:"fw-svn-revpill",title:u.value.revision?"r"+u.value.revision:""},[h(oe,{name:"svn",size:13}),o("b",null,a(u.value.revision?"r"+u.value.revision:"—"),1)],8,p_),o("span",{class:"fw-svn-url",title:u.value.url??""},a(u.value.url||s(n)("svnNoUrl")),9,v_),o("span",{class:"fw-svn-repo",title:u.value.root??""},a(s(n)("svnRepo"))+a(ve.value),9,h_),o("span",m_,[h(S,{size:"small",loading:w.value,onClick:Qe},{default:se(()=>[ue(a(s(n)("svnUpdate")),1)]),_:1},8,["loading"]),h(S,{size:"small",disabled:w.value,onClick:ye},{default:se(()=>[ue(a(s(n)("svnCleanup")),1)]),_:1},8,["disabled"]),h(S,{size:"small",onClick:K[0]||(K[0]=re=>A.value=!0)},{default:se(()=>[ue(a(s(n)("svnCheckout")),1)]),_:1}),h(S,{size:"small",loading:b.value,onClick:Ke,title:s(n)("svnRefresh")},{default:se(()=>[h(oe,{name:"refresh",size:13})]),_:1},8,["loading","title"]),h(S,{size:"small",title:s(n)("accTitle"),onClick:je},{default:se(()=>[h(oe,{name:"shield",size:13})]),_:1},8,["title"])])]),o("div",g_,[o("nav",y_,[(l(),r(ae,null,Ae(i,re=>o("button",{key:re.key,class:te(["fw-svn-rail-btn",{active:c.value===re.key}]),onClick:ct=>ne(re.key)},[h(oe,{name:re.icon,size:14},null,8,["name"]),o("span",b_,a(s(n)(re.label)),1),me(re.key)?(l(),r("span",__,a(me(re.key)),1)):N("",!0)],10,w_)),64)),K[12]||(K[12]=o("span",{class:"fw-svn-rail-fill"},null,-1)),w.value?(l(),r("div",k_,[K[11]||(K[11]=o("span",{class:"fw-svn-spin"},null,-1)),ue(a(s(n)("svnRunning")),1)])):N("",!0)]),o("section",x_,[c.value==="changes"?(l(),r("div",C_,[o("div",$_,[o("div",S_,[o("span",E_,a(s(n)("svnModifiedCount",{n:v.value.length})),1),o("label",T_,[o("input",{type:"checkbox",checked:$e.value,onChange:ge},null,40,D_),ue(a(s(n)("svnSelectAll")),1)])]),v.value.length?N("",!0):(l(),r("div",F_,a(s(n)("svnNoChanges")),1)),(l(!0),r(ae,null,Ae(v.value,re=>(l(),r("div",{key:re.path,class:"fw-svn-row",title:re.path},[o("input",{type:"checkbox",checked:d.value.has(re.path),onChange:ct=>Q(re.path)},null,40,N_),o("span",{class:"fw-svn-badge","data-code":re.code.trim()||"·"},a(re.code.trim()||"·"),9,P_),o("span",A_,[le(re.path)?(l(),r("span",M_,a(le(re.path)),1)):N("",!0),ue(a(Se(re.path)),1)]),o("span",O_,a(re.statusText),1),o("span",L_,[o("button",{class:"fw-svn-mini",disabled:w.value,title:s(n)("svnDiff"),onClick:_e(ct=>yt(re.path),["stop"])},[h(oe,{name:"code",size:12})],8,B_),o("button",{class:"fw-svn-mini",disabled:w.value,title:s(n)("svnBlame"),onClick:_e(ct=>Z(re.path),["stop"])},[h(oe,{name:"activity",size:12})],8,I_),re.code.trim()==="?"?(l(),r(ae,{key:0},[o("button",{class:"fw-svn-mini",disabled:w.value,title:s(n)("svnAdd"),onClick:_e(ct=>Ye(re.path),["stop"])},[h(oe,{name:"plus",size:12})],8,j_),o("button",{class:"fw-svn-mini",disabled:w.value,title:s(n)("svnIgnore"),onClick:_e(ct=>st(re.path),["stop"])},[h(oe,{name:"eyeOff",size:12})],8,V_)],64)):N("",!0)])],8,R_))),128))]),o("div",z_,[o("div",U_,[o("span",H_,a(s(n)("svnCommitBtn")),1)]),kt(o("textarea",{"onUpdate:modelValue":K[1]||(K[1]=re=>p.value=re),class:"fw-svn-msg",rows:"6",placeholder:s(n)("svnCommitPlaceholder")},null,8,W_),[[Lt,p.value]]),o("div",G_,[o("button",{class:"fw-svn-btn",disabled:w.value||!d.value.size,onClick:be},a(s(n)("svnAdd")),9,q_),o("button",{class:"fw-svn-btn",disabled:w.value||!d.value.size,onClick:fe},a(s(n)("svnRevert")),9,K_),o("button",{class:"fw-svn-btn",disabled:w.value||!d.value.size,onClick:ke},a(s(n)("svnResolve")),9,X_)]),o("div",Y_,[o("span",J_,a(d.value.size?s(n)("svnCommitSelected",{n:d.value.size}):s(n)("svnCommitAll")),1),o("button",{class:"fw-svn-btn primary",disabled:w.value||!p.value.trim(),onClick:qe},a(s(n)("svnCommitBtn")),9,Z_)])])])):c.value==="log"?(l(),r("div",Q_,[O.value.length?N("",!0):(l(),r("div",e0,a(L.value?s(n)("svnLoading"):s(n)("svnLogEmpty")),1)),(l(!0),r(ae,null,Ae(O.value,re=>(l(),r("div",{key:re.revision,class:te(["fw-svn-logitem",{open:ut.value.has(re.revision)}])},[o("div",{class:"fw-svn-log-h",title:s(n)("svnLogToggle"),onClick:ct=>it(re.revision)},[o("span",n0,a(ut.value.has(re.revision)?"▾":"▸"),1),o("span",s0,"r"+a(re.revision),1),o("span",{class:"fw-svn-log-msg1",title:re.msg},a(Ve(re.msg)),9,o0),o("span",a0,[o("span",null,a(re.author),1),o("span",null,a(rt(re.date)),1)])],8,t0),ut.value.has(re.revision)?(l(),r(ae,{key:0},[re.msg?(l(),r("pre",i0,a(re.msg),1)):N("",!0),o("div",l0,[re.paths.length?N("",!0):(l(),r("span",r0,a(s(n)("svnLogNoPaths")),1)),(l(!0),r(ae,null,Ae(re.paths,(ct,wt)=>(l(),r("div",{key:wt,class:"fw-svn-cfile",title:s(n)("svnLogOpenDiff"),onClick:Ot=>R(re.revision,ct)},[o("span",{class:te(["fw-svn-cfile-act","pa-"+(ct.action??"")])},a(ct.action),3),o("span",u0,[Le(ct.text)?(l(),r("span",d0,a(Le(ct.text)),1)):N("",!0),ue(a(H(ct.text)),1)])],8,c0))),128))])],64)):N("",!0)],2))),128))])):(l(),r("div",f0,[o("pre",p0,a(x.value||s(n)("svnNoOutput")),1)]))])])])):u.value&&u.value.inRepo&&!u.value.svnAvailable?(l(),r("div",v0,[h(oe,{name:"warning",size:13}),ue(a(s(n)("svnNoCli")),1)])):u.value&&!u.value.inRepo?(l(),r("div",h0,[o("p",m0,a(s(n)("svnNotRepoTip")),1),o("div",g0,[h(q,{modelValue:pe.value,"onUpdate:modelValue":K[2]||(K[2]=re=>pe.value=re),size:"small",class:"fw-svn-co-url",placeholder:s(n)("svnCheckoutUrlPlaceholder")},null,8,["modelValue","placeholder"])]),o("div",y0,[h(q,{modelValue:I.value,"onUpdate:modelValue":K[3]||(K[3]=re=>I.value=re),size:"small",class:"fw-svn-co-target",placeholder:s(n)("svnCheckoutTargetPlaceholder")},null,8,["modelValue","placeholder"]),h(S,{size:"small",type:"primary",disabled:w.value||!pe.value.trim()||!I.value.trim(),onClick:M},{default:se(()=>[ue(a(s(n)("svnCheckout")),1)]),_:1},8,["disabled"])])])):(l(),r("div",w0,a(s(n)("svnLoading")),1)),h(Te,{modelValue:P.value,"onUpdate:modelValue":K[4]||(K[4]=re=>P.value=re),title:s(n)("svnDiffTitle")+j.value,width:"800px","align-center":"","modal-class":"fw-blur-overlay","append-to-body":""},{default:se(()=>[o("div",b0,[h(Vo,{lines:U.value,empty:s(n)("gitDiffEmpty")},null,8,["lines","empty"])])]),_:1},8,["modelValue","title"]),h(Te,{modelValue:$.value,"onUpdate:modelValue":K[5]||(K[5]=re=>$.value=re),title:s(n)("svnBlameTitle")+ee.value,width:"800px","align-center":"","modal-class":"fw-blur-overlay","append-to-body":""},{default:se(()=>[o("pre",_0,a(G.value.join(`
`)||s(n)("gitDiffEmpty")),1)]),_:1},8,["modelValue","title"]),h(Te,{modelValue:A.value,"onUpdate:modelValue":K[9]||(K[9]=re=>A.value=re),title:s(n)("svnCheckout"),width:"560px","align-center":"","modal-class":"fw-blur-overlay","append-to-body":"",onOpen:Ee},{footer:se(()=>[h(S,{onClick:K[8]||(K[8]=re=>A.value=!1)},{default:se(()=>[ue(a(s(n)("cancel")),1)]),_:1}),h(S,{type:"primary",disabled:w.value||!pe.value.trim()||!I.value.trim(),onClick:M},{default:se(()=>[ue(a(s(n)("svnCheckout")),1)]),_:1},8,["disabled"])]),default:se(()=>[o("div",k0,[o("label",x0,a(s(n)("svnCheckoutUrlPlaceholder")),1),h(q,{modelValue:pe.value,"onUpdate:modelValue":K[6]||(K[6]=re=>pe.value=re),size:"small"},null,8,["modelValue"]),o("label",C0,a(s(n)("svnCheckoutTargetPlaceholder")),1),h(q,{modelValue:I.value,"onUpdate:modelValue":K[7]||(K[7]=re=>I.value=re),size:"small"},null,8,["modelValue"])])]),_:1},8,["modelValue","title"])]),_:1},8,["model-value","title"])}}}),pd=xt($0,[["__scopeId","data-v-8297810b"]]),S0={class:"fw-dlg-head"},E0={class:"fw-dlg-badge"},T0={class:"fw-dlg-headtext"},D0={class:"fw-dlg-headtitle"},F0={class:"fw-dlg-headsub"},R0=["onKeydown"],N0={class:"fw-np-menubar"},P0=["onClick","onMouseenter"],A0={key:0,class:"fw-np-dropdown"},M0={key:0,class:"fw-np-sep"},O0=["onClick"],L0={key:0,class:"fw-np-state"},B0={key:1,class:"fw-np-state fw-np-err"},I0=["readonly","wrap"],j0={key:3,class:"fw-np-status"},V0={key:0,class:"fw-np-seg fw-np-ro"},z0={class:"fw-np-seg"},U0={class:"fw-np-seg fw-np-eol"},H0={class:"fw-np-seg"},W0=ht({__name:"TxtEditor",props:{modelValue:{type:Boolean},path:{}},emits:["update:modelValue","saved"],setup(t,{emit:e}){const n=t,i=e,{t:c}=Bt(),u=B({get:()=>n.modelValue,set:R=>i("update:modelValue",R)}),v=B(()=>n.path.slice(Math.max(n.path.lastIndexOf("/"),n.path.lastIndexOf("\\"))+1)),d=m(""),p=m(""),w=m(!1),b=m(!1),x=m(""),O=m(!1),L=m(!1),P=m(null),j=m("utf8"),U=m(!1),$=m("lf"),ee=m(0),G={lf:"Unix (LF)",crlf:"Windows (CRLF)",cr:"Macintosh (CR)"},A=B(()=>G[$.value]),pe=B(()=>{const R=j.value==="utf8"?"UTF-8":j.value.toUpperCase();return U.value?`${R} BOM`:R}),I=B({get:()=>Ue.txtWordWrap,set:R=>{Ue.txtWordWrap=R,Un()}}),ve=B({get:()=>Ue.txtShowStatus,set:R=>{Ue.txtShowStatus=R,Un()}}),$e=m(""),me=m(1),ne=m(1);function le(R){return/\.txt$/i.test(R)}Ze(()=>n.modelValue,async R=>{if(R&&n.path){if(!le(n.path)){u.value=!1;return}Ie(),await Ve(),await Dt(),Ne(),P.value?.focus()}else Se()});function Se(){d.value="",p.value="",O.value=!1,x.value="",$e.value="",me.value=1,ne.value=1}async function Ve(){w.value=!0,x.value="",L.value=!ws(n.path);try{const R=await el(n.path);if(R.binary){x.value=c("vsBinaryHint");return}d.value=R.content,p.value=R.content,j.value=R.encoding,U.value=R.hasBom,$.value=R.eol,ee.value=R.mtime,O.value=!1}catch(R){x.value=c("txtReadError",{msg:R.message})}finally{w.value=!1}}function we(){O.value=d.value!==p.value,Ne()}function Ne(){const R=P.value;if(!R)return;const Z=R.selectionStart,Ee=d.value.slice(0,Z);me.value=Ee.split(`
`).length;const M=Ee.lastIndexOf(`
`);ne.value=Z-M}async function W(R){const Z=await Xi(n.path,d.value,{key:De.key,encoding:j.value,hasBom:U.value,eol:$.value,expectedMtime:ee.value,force:R});ee.value=Z.mtime,p.value=d.value,O.value=!1,X("ok",c("txtSaved")),i("saved"),u.value=!1}async function J(){if(!(L.value||!O.value||b.value)&&le(n.path)){b.value=!0;try{await W(!1)}catch(R){if(R instanceof Hs&&R.code==="mtime-conflict"){if(b.value=!1,!await Mt({title:c("vsConflictTitle"),message:c("vsConflictMsg",{name:v.value})}))return;try{await W(!0)}catch(Ee){X("error",Ee.message)}return}X("error",R.message)}finally{b.value=!1}}}function z(){J()}const Q=()=>{const R=P.value;return!R||R.selectionStart===R.selectionEnd};function ge(){const R=P.value;return!R||R.selectionStart===R.selectionEnd?null:{s:R.selectionStart,e:R.selectionEnd}}function je(R,Z,Ee){const M=P.value,T=d.value.slice(0,R)+Ee+d.value.slice(Z);d.value=T,O.value=T!==p.value,Dt(()=>{M&&(M.focus(),M.selectionStart=M.selectionEnd=R+Ee.length,Ne())})}function Ke(){P.value?.focus(),P.value?.select()}async function Qe(){const R=ge();if(!R)return;const Z=d.value.slice(R.s,R.e);try{await navigator.clipboard.writeText(Z)}catch{P.value?.focus(),document.execCommand("copy")}}async function ye(){if(L.value)return;const R=ge();if(!R)return;const Z=d.value.slice(R.s,R.e);try{await navigator.clipboard.writeText(Z)}catch{P.value?.focus(),document.execCommand("cut");return}je(R.s,R.e,"")}function be(){if(L.value)return;const R=ge();R&&je(R.s,R.e,"")}async function Ye(){if(L.value)return;const R=P.value;if(!R)return;const Z=R.selectionStart,Ee=R.selectionEnd;try{const M=await navigator.clipboard.readText();je(Z,Ee,M)}catch{R.focus(),X("error","当前环境不允许读取剪贴板，请按 Ctrl+V 粘贴")}}function st(){L.value||(P.value?.focus(),document.execCommand("undo"),we())}function fe(){if(L.value)return;const R=P.value;if(!R)return;const Z=new Date().toLocaleString("zh-CN",{hour12:!1});je(R.selectionStart,R.selectionEnd,Z)}const ke=B(()=>[{name:"file",label:"文件",items:[{label:"保存",disabled:()=>L.value||!O.value,action:()=>void J()},{label:"退出",action:()=>void Le()}]},{name:"edit",label:"编辑",items:[{label:"撤销",disabled:()=>L.value,action:()=>st()},{label:"剪切",disabled:()=>L.value||Q(),action:()=>void ye()},{label:"复制",disabled:()=>Q(),action:()=>void Qe()},{label:"粘贴",disabled:()=>L.value,action:()=>void Ye()},{label:"删除",disabled:()=>L.value||Q(),action:()=>be()},{label:"-",sep:!0},{label:"全选",action:()=>Ke()},{label:"时间/日期",disabled:()=>L.value,action:()=>fe()}]},{name:"format",label:"格式",items:[{label:I.value?"☑ 自动换行":"☐ 自动换行",action:()=>{I.value=!I.value}}]},{name:"view",label:"查看",items:[{label:ve.value?"☑ 状态栏":"☐ 状态栏",action:()=>{ve.value=!ve.value}}]},{name:"help",label:"帮助",items:[{label:"关于记事本",action:()=>X("ok","记事本 — DSH 文件工作台文本编辑器")}]}]);function qe(R){$e.value=$e.value===R?"":R}function ce(R){$e.value&&($e.value=R)}function Ie(){$e.value=""}function rt(R,Z){Z.sep||Z.disabled&&Z.disabled()||(Ie(),Z.action?.())}function yt(){Ie()}function ut(){return O.value&&!L.value?Mt({title:c("txtUnsavedTitle"),message:c("txtUnsavedMsg")}).then(R=>R):Promise.resolve(!0)}function it(R){ut().then(Z=>{Z&&R()})}async function Le(){await ut()&&(u.value=!1)}function H(){Se()}return(R,Z)=>{const Ee=uf("icon"),M=rn;return l(),Xe(M,{modelValue:u.value,"onUpdate:modelValue":Z[1]||(Z[1]=T=>u.value=T),class:"fw-clone-dialog fw-np-dialog",width:"800px","align-center":"","modal-class":"fw-blur-overlay","close-on-click-modal":!1,"before-close":it,"append-to-body":"",onClose:H},{header:se(()=>[o("div",S0,[o("span",E0,[h(Ee,{name:"fileText",size:20})]),o("span",T0,[o("span",D0,a(O.value?"* ":"")+a(v.value),1),o("span",F0,[ue(a(s(c)("txtEditorSub")),1),O.value?(l(),r(ae,{key:0},[ue(" · "+a(s(c)("txtUnsaved")),1)],64)):N("",!0)])])])]),default:se(()=>[o("div",{class:"fw-np",tabindex:"-1",onKeydown:[bt(_e(z,["ctrl","prevent"]),["s"]),bt(_e(fe,["prevent"]),["f5"])]},[o("div",N0,[(l(!0),r(ae,null,Ae(ke.value,T=>(l(),r("div",{key:T.name,class:te(["fw-np-menu",{open:$e.value===T.name}]),onClick:K=>qe(T.name),onMouseenter:K=>ce(T.name)},[ue(a(T.label)+" ",1),$e.value===T.name?(l(),r("div",A0,[(l(!0),r(ae,null,Ae(T.items,(K,S)=>(l(),r(ae,{key:S},[K.sep?(l(),r("div",M0)):(l(),r("div",{key:1,class:te(["fw-np-item",{disabled:K.disabled?K.disabled():!1}]),onClick:q=>rt(T.name,K)},a(K.label),11,O0))],64))),128))])):N("",!0)],42,P0))),128))]),w.value?(l(),r("div",L0,[Z[2]||(Z[2]=o("span",{class:"fw-np-spin"},null,-1)),ue(a(s(c)("txtLoading")),1)])):x.value?(l(),r("div",B0,a(x.value),1)):kt((l(),r("textarea",{key:2,ref_key:"taRef",ref:P,"onUpdate:modelValue":Z[0]||(Z[0]=T=>d.value=T),class:te(["fw-np-area",{wrap:I.value}]),readonly:L.value,wrap:I.value?"soft":"off",spellcheck:"false",onInput:we,onKeyup:Ne,onClick:Ne,onContextmenu:_e(yt,["prevent"])},null,42,I0)),[[Lt,d.value]]),ve.value&&!w.value&&!x.value?(l(),r("div",j0,[L.value?(l(),r("span",V0,a(s(c)("txtReadonly")),1)):N("",!0),Z[3]||(Z[3]=o("span",{class:"fw-np-spacer"},null,-1)),o("span",z0,"Ln "+a(me.value)+", Col "+a(ne.value),1),Z[4]||(Z[4]=o("span",{class:"fw-np-seg"},"100%",-1)),o("span",U0,a(A.value),1),o("span",H0,a(pe.value),1)])):N("",!0)],40,R0),$e.value?(l(),r("div",{key:0,class:"fw-np-backdrop",onClick:Ie,onContextmenu:_e(Ie,["prevent"])},null,32)):N("",!0)]),_:1},8,["modelValue"])}}}),on=gt({sessionId:null,connected:!1,files:[],running:!1});let ac=!1,zo=null;const ic="__DSH_FW_SESSION_SSE__",lc={dispose:()=>Cl()};function G0(){const t=globalThis,e=t[ic];if(e&&e!==lc)try{e.dispose()}catch{}t[ic]=lc}function q0(t){const e=t;if(!(!e||typeof e!="object")&&on.sessionId&&!(e.sessionId&&e.sessionId!==on.sessionId))switch(e.type){case"snapshot":case"files":on.files=Array.isArray(e.files)?e.files:[],on.running=e.running===!0,on.connected=!0;break;case"status":on.running=e.running===!0,on.connected=!0;break}}function K0(t){on.sessionId!==t&&(on.sessionId=t,ql(t))}function X0(){if(G0(),zo)return()=>Cl();ac||(ac=!0,rh(q0));const t=window.__DSH_FILE_WORKBENCH__;return!t||typeof t.subscribeCurrentSessionId!="function"?()=>{}:(zo=t.subscribeCurrentSessionId(e=>{e?K0(e):(ql(null),on.sessionId=null)}),()=>Cl())}function Cl(){try{zo&&(zo(),zo=null)}catch{}ql(null),on.sessionId=null,on.files=[],on.running=!1,on.connected=!1}function Li(t){const e=t.lastIndexOf(".");return e>0&&e<t.length-1?t.slice(e):""}function rc(t){if(t==null||t<0)return"—";const e=["B","KB","MB","GB","TB"];let n=t,i=0;for(;n>=1024&&i<e.length-1;)n/=1024,i+=1;return`${i===0?n:n>=10?Math.round(n):n.toFixed(1)} ${e[i]}`}const vn=gt({selectionCount:0,canOperate:!0,hasClipboard:!1,isRecycle:!1});let vd=null;function Ja(t){vd=t}function Y0(t,e){vd?.(t,e)}const J0={key:0,class:"fw-fl-tool"},Z0={key:1,class:"fw-error"},Q0={class:"fw-error-ico"},e2={key:1,class:"fw-table"},t2={key:0,class:"fw-sort"},n2={key:0,class:"fw-sort"},s2={key:0,class:"fw-sort"},o2={key:0,class:"fw-sort"},a2={key:0,class:"fw-vspacer"},i2=["data-path","title","draggable","onMouseenter","onMouseleave","onDragstart","onDragover","onDrop","onClick","onDblclick","onContextmenu"],l2={class:"col-name"},r2={class:"fw-n"},c2={class:"fw-ico"},u2={class:"fw-label"},d2=["title"],f2=["title"],p2={key:2,class:"fw-weak"},v2=["title"],h2={class:"col-size"},m2={class:"col-type"},g2={class:"col-mtime"},y2={key:1,class:"fw-vspacer"},w2={key:2},b2={colspan:4,class:"fw-empty-cell fw-inaccessible"},_2={key:3},k2={colspan:4,class:"fw-empty-cell"},x2=["data-path","title","draggable","onMouseenter","onMouseleave","onDragstart","onDragover","onDrop","onClick","onDblclick","onContextmenu"],C2={class:"fw-ico"},$2={class:"fw-list-name"},S2=["title"],E2=["title"],T2=["title"],D2=["data-path","title","draggable","onMouseenter","onMouseleave","onDragstart","onDragover","onDrop","onClick","onDblclick","onContextmenu"],F2={key:0,class:"fw-tile-thumb"},R2=["src","alt"],N2={key:1,class:"fw-tile-ico"},P2={class:"fw-tile-name"},A2=["title"],M2=["title"],O2={key:4,class:"fw-mode fw-content"},L2=["data-path","title","draggable","onMouseenter","onMouseleave","onDragstart","onDragover","onDrop","onClick","onDblclick","onContextmenu"],B2={class:"fw-ico"},I2={class:"fw-c-main"},j2={class:"fw-c-name"},V2={key:0,class:"fw-broken-tag"},z2={class:"fw-c-type"},U2={class:"fw-c-meta"},H2={key:5,class:"fw-mode fw-tiles"},W2=["data-path","title","draggable","onMouseenter","onMouseleave","onDragstart","onDragover","onDrop","onClick","onDblclick","onContextmenu"],G2={key:0,class:"fw-tile-thumb"},q2=["src","alt"],K2={key:1,class:"fw-tile-ico"},X2={class:"fw-t2-body"},Y2={class:"fw-t2-name"},J2={class:"fw-t2-type"},Z2={class:"fw-t2-size"},Q2={key:6,class:"fw-empty-small"},ek={key:3,class:"fw-refreshing"},tk={class:"fw-dlg-head"},nk={class:"fw-dlg-badge"},sk={class:"fw-dlg-headtext"},ok={class:"fw-dlg-headtitle"},ak={class:"fw-dlg-headsub"},ik={key:0,class:"fw-prop-body"},lk={class:"fw-prop-row"},rk={class:"k"},ck={class:"v"},uk={class:"fw-prop-row"},dk={class:"k"},fk={class:"v"},pk={class:"fw-prop-row"},vk={class:"k"},hk={class:"v"},mk={class:"fw-prop-row fw-prop-row-wide"},gk={class:"k"},yk=["title"],wk={class:"fw-gitdiff-body"},bk=40,_k=28,kk=ht({__name:"FileListPane",setup(t){const{t:e}=Bt(),n=B(()=>ie.view==="recycle"),i=m(Ue.sortKey),c=m(Ue.asc),u=m(null);let v=0,d=0;function p(g){return{width:`${Ue.colWidths[g]}px`}}function w(g,k){u.value=k,v=g.clientX,d=Ue.colWidths[k],document.addEventListener("mousemove",b),document.addEventListener("mouseup",x)}function b(g){const k=u.value;k&&(Ue.colWidths[k]=Math.max(bk,d+(g.clientX-v)))}function x(){u.value&&Un(),u.value=null,document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",x)}Pt(()=>{document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",x)});const O=B(()=>n.value?"recycle":ie.listing?.path??""),L=m(ol(O.value)),P=B(()=>{const g=L.value;return g==="huge"||g==="large"||g==="medium"||g==="small"?"grid":g}),j=B(()=>{const g=L.value;return g==="small"?20:g==="medium"?32:g==="large"?48:72});Ze(()=>Ue.view,g=>{L.value!==g&&(L.value=g)}),Ze(O,g=>{const k=ol(g);L.value!==k&&(L.value=k)}),Ze(L,g=>ja.value=g,{immediate:!0}),Ze(()=>Ue.sortKey,g=>{i.value!==g&&(i.value=g)}),Ze(()=>Ue.asc,g=>{c.value!==g&&(c.value=g)});const{cmOpen:U,cmX:$,cmY:ee,cmItems:G,openMenu:A}=pn(),pe=m(!1),I=m(null),ve=m(!1),$e=m(""),me=m(!1),ne=m(!1),le=m(!1),Se=m(!1),Ve=m("");function we(g){Ve.value=g,Se.value=!0}function Ne(){Ft()}function W(g){i.value===g?c.value=!c.value:(i.value=g,c.value=g!=="mtime"),Ue.sortKey=i.value,Ue.asc=c.value,Un()}function J(g){if(g.isDir)return e("typeFolder");const k=g.name.lastIndexOf("."),xe=k>0?g.name.slice(k+1).toUpperCase():"";return xe?`${xe} ${e("typeFile")}`:e("typeFile")}const z=/\.(png|jpe?g|gif|svg|webp|bmp|ico|avif)$/i;function Q(g){return!g.isDir&&z.test(g.name)}function ge(g){if(Ue.showExtensions||g.isDir)return g.name;const k=g.name.lastIndexOf(".");return k>0?g.name.slice(0,k):g.name}function je(g){if(g.isDir)return"";const k=g.size;if(k===void 0)return"—";const xe=["B","KB","MB","GB","TB"];let de=k,Me=0;for(;de>=1024&&Me<xe.length-1;)de/=1024,Me+=1;return`${Me===0?de:de>=10?Math.round(de):de.toFixed(1)} ${xe[Me]}`}function Ke(g){if(g.mtime===void 0)return"";try{return new Date(g.mtime).toLocaleString(void 0,{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})}catch{return new Date(g.mtime).toLocaleString()}}function Qe(g){return g.path}const ye={"":"",untracked:"?",added:"A",modified:"M",deleted:"D"};function be(g){return ld(ie.listing?.path??"",g.name)}function Ye(g){return ye[be(g)]}function st(g){const k=be(g);return k==="untracked"?e("gitBadgeUntracked"):k==="added"?e("gitBadgeAdded"):k==="deleted"?e("gitBadgeDeleted"):k==="modified"?e("gitBadgeModified"):""}function fe(g){return rd(ie.listing?.path??"",g.name)}function ke(g){return ye[fe(g)]}function qe(g){const k=fe(g);return k==="untracked"?e("gitBadgeUntracked"):k==="added"?e("gitBadgeAdded"):k==="deleted"?e("gitBadgeDeleted"):k==="modified"?e("gitBadgeModified"):""}const ce=B(()=>{const g=[...ie.listing?.entries??[]],k={name:(xe,de)=>xe.name.localeCompare(de.name,void 0,{sensitivity:"base"}),size:(xe,de)=>(xe.size??-1)-(de.size??-1),type:(xe,de)=>{const Me=F=>F.isDir?"0-folder":F.name.slice(F.name.lastIndexOf(".")).toLowerCase();return(J(xe)+Me(xe)).localeCompare(J(de)+Me(de))},mtime:(xe,de)=>(xe.mtime??0)-(de.mtime??0)};return g.sort((xe,de)=>{if(xe.isDir!==de.isDir)return xe.isDir?-1:1;let Me=k[i.value](xe,de);return Me===0&&(Me=xe.name.localeCompare(de.name,void 0,{sensitivity:"base"})),c.value||(Me=-Me),Me}),g}),Ie=m(""),rt=B(()=>{const g=Ie.value.trim().toLowerCase();return ce.value.filter(k=>!Ue.showHidden&&k.hidden?!1:g?k.name.toLowerCase().includes(g):!0)}),yt=B(()=>ie.listing?.inaccessible?ie.listing.inaccessible:rt.value.length===0&&Ie.value?e("filterEmpty"):n.value?e("recycleEmptyList"):e("emptyDir")),ut=m(null),it=m(null);function Le(){it.value?.click()}async function H(g){const k=g.target,xe=k.files;xe?.length&&ie.listing&&await cn(xe,ie.listing.path),k.value=""}const R=B(()=>rt.value.length),Z=_g(ut,R,_k),Ee=B(()=>rt.value.slice(Z.range.value.start,Z.range.value.end));Ze(()=>ie.listing?.path,()=>{ut.value&&(ut.value.scrollTop=0)}),Ze(()=>ie.listing?.path,g=>{g&&!n.value&&(_s(g),no(g))},{immediate:!0});const M=m(new Set),T=m(""),K=m("");function S(g,k){if(g.shiftKey&&K.value){const xe=rt.value.map(F=>F.path),de=xe.indexOf(K.value),Me=xe.indexOf(k.path);if(de!==-1&&Me!==-1){const[F,Re]=de<Me?[de,Me]:[Me,de],Xt=new Set;for(let Ht=F;Ht<=Re;Ht++)Xt.add(xe[Ht]);M.value=Xt}T.value=k.path;return}if(g.ctrlKey||g.metaKey){const xe=new Set(M.value),de=xe.has(k.path);de?xe.delete(k.path):xe.add(k.path),M.value=xe,K.value=k.path,T.value=de?"":k.path;return}M.value=new Set,T.value=k.path,K.value=k.path}function q(g,k){M.value=new Set,T.value=k.path,K.value=k.path,gn(k)}function Te(){M.value=new Set,T.value="",K.value=""}function re(g){ut.value?.focus({preventScroll:!0}),!(Ot||g.target.closest(".fw-row, .fw-list-row, .fw-tile, .fw-content-row, .fw-tile2, th"))&&Te()}const ct=m(null);let wt=null,Ot=!1;function Mn(g){g.button!==0||!ie.listing||g.target.closest(".fw-row, .fw-list-row, .fw-tile, .fw-content-row, .fw-tile2, th, input, textarea")||(wt={x:g.clientX,y:g.clientY},window.addEventListener("mousemove",Gt),window.addEventListener("mouseup",ze,{once:!0}))}function Gt(g){if(!wt||!ut.value)return;const k=ut.value.getBoundingClientRect(),xe=Math.min(wt.x,g.clientX),de=Math.min(wt.y,g.clientY),Me=Math.max(wt.x,g.clientX),F=Math.max(wt.y,g.clientY);ct.value={x:xe-k.left,y:de-k.top,w:Me-xe,h:F-de};const Re=new Set;ut.value.querySelectorAll("[data-path]").forEach(Xt=>{const Ht=Xt.getBoundingClientRect();Ht.left<Me&&Ht.right>xe&&Ht.top<F&&Ht.bottom>de&&Re.add(Xt.dataset.path??"")}),Re.delete(""),M.value=Re,T.value=""}function ze(){wt&&(wt=null,ct.value=null,window.removeEventListener("mousemove",Gt),Ot=!0,setTimeout(()=>{Ot=!1},0))}function Je(g){if(g.target?.closest("input, textarea, select, [contenteditable='true'], .el-input, .el-textarea"))return;const xe=rt.value;if(!xe.length)return;const de=xe.map(Re=>Re.path),Me=T.value?de.indexOf(T.value):K.value?de.indexOf(K.value):-1;if(g.ctrlKey&&g.shiftKey&&g.key.toLowerCase()==="n"){g.preventDefault(),dn("folder");return}if(g.ctrlKey||g.metaKey){switch(g.key.toLowerCase()){case"a":g.preventDefault(),M.value=new Set(de);return;case"c":g.preventDefault(),M.value.size?Kt("copy"):T.value&&(_a([T.value]),X("ok",e("menuCopyDone")));return;case"x":g.preventDefault(),M.value.size?Kt("cut"):T.value&&(Fo([T.value]),X("ok",e("menuCutDone")));return;case"v":g.preventDefault(),ie.listing&&Qn(ie.listing.path);return;case"f":g.preventDefault(),lt();return}return}if(g.altKey){g.key==="ArrowUp"?(g.preventDefault(),vl()):g.key==="ArrowLeft"?(g.preventDefault(),Pu()):g.key==="ArrowRight"&&(g.preventDefault(),Au());return}switch(g.key){case"Backspace":g.preventDefault(),vl();return;case"Delete":g.preventDefault(),xn();return;case"F2":g.preventDefault(),Cn();return;case"F5":g.preventDefault(),n.value?bs():Ft();return;case"Enter":Me>=0&&gn(xe[Me]);return}let F=Me;if(g.key==="ArrowDown")F=Me+1,g.preventDefault();else if(g.key==="ArrowUp")F=Me-1,g.preventDefault();else if(g.key==="Home")F=0,g.preventDefault();else if(g.key==="End")F=de.length-1,g.preventDefault();else return;F<0||F>=de.length||(M.value=new Set,T.value=de[F],K.value=de[F],ut.value?.querySelector(".fw-row.selected, .fw-list-row.selected, .fw-tile.selected, .fw-content-row.selected, .fw-tile2.selected")?.scrollIntoView({block:"nearest"}))}function et(g){return g?(ie.listing?.entries??[]).find(k=>k.path===g)??null:null}function lt(){ut.value?.parentElement?.querySelector(".fw-filter input")?.focus()}function xn(){if(M.value.size){if(n.value){Gn([...M.value]);return}Kt("delete");return}const g=et(T.value);g&&Ds(g)}function Cn(){if(n.value||M.value.size)return;const g=et(T.value);g&&Ts(g)}function zt(g){return M.value.size?M.value.has(g.path):g.path===T.value}Ze(()=>ie.listing?.path,()=>{Te()});const ot=m("");function ft(g){ot.value=g.path}function Ct(g){ot.value===g.path&&(ot.value="")}const On=B(()=>T.value),$n=B(()=>{const g=On.value;return g?(ie.listing?.entries??[]).find(k=>k.path===g)??null:null}),Yn=B(()=>{const g=$n.value;if(!g)return ie.listing?ie.listing.path:"";let xe=g.isDir?e("typeFolder"):(()=>{const de=g.name.lastIndexOf(".");return de>0&&de<g.name.length-1?g.name.slice(de):e("typeFile")})();return g.mtime!==void 0&&(xe+=` · ${Ke(g)}`),!g.isDir&&g.size!==void 0&&(xe+=` · ${je(g)}`),xe});let mn="";function Sn(g,k){g.dataTransfer&&(mn=k.path,Ug.value=k.path,g.dataTransfer.effectAllowed="move",g.dataTransfer.setData("text/plain",k.path))}function Ks(g){}function Es(){}async function En(g,k){if(g.preventDefault(),n.value)return;const xe=g.dataTransfer?.files;if(xe?.length){const F=k||ie.listing?.path||"";F&&await cn(xe,F);return}const de=mn;if(mn="",!de||!k)return;const Me=de.slice(0,Math.max(de.lastIndexOf("/"),de.lastIndexOf("\\")+1));Ln(Me)!==Ln(k)&&(Fo([de]),await Qn(k))}async function cn(g,k){if(!un(k))return;const xe=sn(e("taskUploading"),k);let de=0,Me=0;for(const F of Array.from(g)){xe.step(e("taskUploading"),F.name,void 0,Li(F.name)||e("typeFile"),F.size);try{await Sp(k,F,De.key),de+=1}catch{Me+=1}}de&&X("ok",e("uploaded",{count:de})),Me&&X("error",e("uploadFailed",{count:Me})),Me?xe.fail(`${e("uploadFailed",{count:Me})}${de?`，成功 ${de}`:""}`):de&&xe.done(e("uploaded",{count:de})),await Ft()}function Ln(g){return g.replace(/[\\/]+/g,"/").replace(/\/+$/,"").toLowerCase()}function Wn(g){return g.isDir?{fileType:e("typeFolder")}:{fileType:Li(g.name)||e("typeFile"),fileSize:g.size}}async function Tn(g){try{const k=await Oa(g);return k.isDir?{fileType:e("typeFolder")}:{fileType:Li(k.name)||e("typeFile"),fileSize:k.size}}catch{return{}}}async function gn(g){if(n.value){await Rn([g.recycleFullPath??g.path]);return}if(g.isDir){await Vt(g.path);return}try{await na(g.path)}catch(k){X("error",k.message)}}const yn={openGitPanel:()=>{ne.value=!0},openSvnPanel:()=>{le.value=!0},openCommit:()=>{const g=ie.listing?.path??"";if(!id(g)){X("error",e("gitNotRepo"));return}me.value=!0},showGitDiff:g=>{$e.value=g,ve.value=!0},afterMutate:async g=>{await _s(g),await Ft()}};function Jn(g){return wl(ie.listing?.path??"",g,yn)}function Dn(g){return bl(ie.listing?.path??"",g,yn)}function D(g){const k=document.createElement("a");k.href=gp(g),k.rel="noopener",document.body.appendChild(k),k.click(),k.remove()}function he(g){const k=g.isDir?g.path:g.path.slice(0,Math.max(g.path.lastIndexOf("/"),g.path.lastIndexOf("\\")));ko(k)}function Be(g,k=!0){Zl(g,{isDir:k})}async function He(g,k,xe){const de=await us({title:g,message:e("subagentAsk"),placeholder:e("subagentAskPlaceholder"),initial:"",multiline:!0});if(de!==null)try{const Me=await Cp(k,xe,de,on.sessionId??void 0);if(Me.ok){const F=Me.mode==="oneshot"?Me.output??"":"";X("ok",F?F.slice(0,300)+(F.length>300?"…":""):e("subagentSpawned"))}else X("error",Me.error||e("subagentFailed"))}catch(Me){X("error",Me instanceof Error?Me.message:String(Me))}}function Pe(g){He(e("menuSubagent"),g.path,g.isDir)}function Ge(){He(e("menuNewSubagent"),"",!1)}function Et(g,k){if(M.value.has(k.path)||(M.value=new Set,T.value=k.path,K.value=k.path),n.value){A(g,Ys(k));return}if(M.value.has(k.path)){const Re=[...M.value],Xt=!ws(k.path),Ht=lo(k.path);A(g,[{label:e("menuMultiCut"),icon:"cut",onClick:()=>Kt("cut"),disabled:Xt},{label:e("menuMultiCopy"),icon:"copy",onClick:()=>Kt("copy")},{label:e("menuMultiDelete"),icon:"trash",onClick:()=>Kt("delete"),disabled:Xt},{label:e("menuMultiCompress"),icon:"archive",onClick:()=>Kt("compress"),disabled:Xt},{separator:!0},{label:e(Ht?"favoriteRemove":"favoriteAdd"),icon:"star",onClick:()=>{const ms=[...M.value],Js=ms.every(ns=>lo(ns));for(const ns of ms)lo(ns)===Js&&Va(ns);X("ok",e(Js?"favoriteRemoved":"favoriteAdded"))}},{separator:!0},{label:e("cancel"),icon:"close",onClick:Te},{label:`(${Re.length}) ✕ ${e("selectedCount",{count:Re.length})}`,icon:"",onClick:Te}]);return}const xe=lo(k.path),de=!ws(k.path),Me=/\.txt$/i.test(k.name),F=[{label:e("menuOpen"),icon:"arrowRight",onClick:()=>gn(k)},...Wt(k.path)?[]:[{label:e("menuOpenExternal"),icon:"monitor",onClick:()=>Xs(k.path)}]];Me&&F.push({label:e("menuEdit"),icon:"edit",disabled:de,onClick:()=>we(k.path)}),k.isDir&&F.push({label:e("menuOpenInEditor"),icon:"code",onClick:()=>Be(k.path)}),F.push({separator:!0}),F.push({label:e("menuCut"),icon:"cut",disabled:de,onClick:()=>{Fo([k.path]),X("ok",e("menuCutDone"))}},{label:e("menuCopy"),icon:"copy",onClick:()=>{_a([k.path]),X("ok",e("menuCopyDone"))}},{label:e("menuCompress"),icon:"archive",disabled:de,onClick:()=>Rs(k)},{label:e("menuExtract"),icon:"folderOpen",disabled:de||k.isDir||!k.name.toLowerCase().endsWith(".zip"),onClick:()=>en(k)},{label:e("menuRename"),icon:"edit",disabled:de,onClick:()=>Ts(k)},{label:e("menuDelete"),icon:"trash",disabled:de,onClick:()=>Ds(k)},{separator:!0},{label:e(xe?"favoriteRemove":"favoriteAdd"),icon:"star",onClick:()=>{const Re=Va(k.path);X("ok",e(Re?"favoriteAdded":"favoriteRemoved"))}},{label:e("menuDownload"),icon:"download",disabled:k.isDir,onClick:()=>D(k.path)},{label:e("menuOpenTerminal"),icon:"terminal",onClick:()=>he(k)},{label:e("menuSubagent"),icon:"sparkle",onClick:()=>Pe(k)},...Jn(k.path),...Dn(k.path),{separator:!0},{label:e("menuCopyPath"),icon:"link",onClick:()=>Co(k.path)},{label:e("menuProperties"),icon:"info",onClick:()=>Zn(k.path)}),A(g,F)}function $t(g){if(!ie.listing)return;if(n.value){A(g,[{label:e("menuRefresh"),icon:"refresh",onClick:()=>bs()},{separator:!0},{label:e("recycleEmpty"),icon:"trash",disabled:(ie.recycleItems?.length??0)===0,onClick:()=>es()}]);return}const k=ie.listing.path,xe=yl(),de=!ws(k);A(g,[{label:e("menuRefresh"),icon:"refresh",onClick:Ft},{label:e("menuOpenInEditor"),icon:"code",onClick:()=>Be(k)},{separator:!0},{label:e("menuView"),icon:"eye",children:wn()},{label:e("menuSort"),icon:"sort",children:Fn()},{separator:!0},{label:e("menuPaste"),icon:"download",disabled:!xe||de,onClick:()=>Qn(k)},{label:e("menuUpload"),icon:"upload",disabled:de,onClick:()=>Le()},{label:e("menuNew"),icon:"sparkle",disabled:de,children:[{label:e("menuNewFolder"),icon:"folder",onClick:()=>dn("folder")},{label:e("menuNewFile"),icon:"file",onClick:()=>dn("file")}]},...Jn(k),...Dn(k),{separator:!0},{label:e("menuOpenTerminal"),icon:"terminal",onClick:()=>ko(k)},{label:e("menuNewSubagent"),icon:"sparkle",onClick:()=>Ge()},{label:e("menuProperties"),icon:"info",onClick:()=>Zn(k)}])}function wn(){const g=L.value,k=(xe,de)=>({label:xe,checked:g===de,onClick:()=>{L.value=de,al(O.value,de)}});return[k(e("viewHuge"),"huge"),k(e("viewLarge"),"large"),k(e("viewMedium"),"medium"),k(e("viewSmall"),"small"),{separator:!0},k(e("viewList"),"list"),{separator:!0},k(e("viewDetails"),"details"),k(e("viewContent"),"content"),k(e("viewTiles"),"tiles")]}function Bn(g){L.value=g,al(O.value,g)}Ya(Bn),Rt.canSwitchView=!0,Cs(()=>{Rt.visible=!!ie.listing&&!ie.loadErr,Rt.total=rt.value.length,Rt.selected=M.value.size,Rt.text=Yn.value,Rt.view=L.value}),Ja((g,k)=>{const xe=ie.listing?.path??"";if(n.value){const de=M.value.size?[...M.value]:T.value?[T.value]:[];switch(g){case"restore":Rn(de);break;case"delete":Gn(de);break;case"emptyRecycle":es();break;case"refresh":bs();break;case"properties":T.value&&Zn(T.value);break}return}switch(g){case"newFolder":dn("folder");break;case"newFile":dn("file");break;case"upload":Le();break;case"cut":case"copy":{M.value.size?Kt(g):T.value&&((g==="cut"?Fo:_a)([T.value]),X("ok",e(g==="cut"?"menuCutDone":"menuCopyDone")));break}case"paste":xe&&Qn(xe);break;case"rename":Cn();break;case"delete":xn();break;case"sort":k&&W(k);break;case"view":k&&Bn(k);break;case"toggleExt":Ue.showExtensions=!Ue.showExtensions,Un();break;case"preview":{const de=T.value?et(T.value):null;de&&gn(de);break}case"refresh":Ft();break;case"properties":T.value&&Zn(T.value);break}}),Cs(()=>{vn.selectionCount=M.value.size||(T.value?1:0),vn.canOperate=ie.listing?ws(ie.listing.path):!1,vn.hasClipboard=yl(),vn.isRecycle=ie.view==="recycle"}),Pt(()=>Ja(null)),Pt(()=>{Ya(null),ad()});function Fn(){return[["name",e("sortName")],["mtime",e("sortModified")],["type",e("sortType")],["size",e("sortSize")]].map(([k,xe])=>({label:xe,checked:i.value===k,onClick:()=>W(k)}))}async function Xs(g){if(Wt(g)){X("error",e("remoteNoExternal"));return}try{await Kc(g),X("ok",e("menuOpened"))}catch(k){X("error",k.message)}}async function Co(g){try{await navigator.clipboard.writeText(g),X("ok",e("menuPathCopied"))}catch{X("error",e("menuPathCopyFail"))}}function un(g){return ws(g)?!0:(X("error",e("workspaceOutside")),!1)}async function Ts(g){if(!un(g.path))return;const k=(await us({title:e("renameEntry"),initial:g.name}))?.trim();if(!k)return;const de=`${g.path.slice(0,Math.max(g.path.lastIndexOf("/"),g.path.lastIndexOf("\\")))}/${k}`,Me=Wn(g),F=sn(e("taskRenaming"),`${g.name} → ${k}`,Me.fileType,Me.fileSize);try{await Ma(g.path,de,De.key),X("ok",e("renamed")),F.done()}catch(Re){X("error",Re.message),F.fail(Re.message)}await Ft()}async function Ds(g){if(n.value){await Gn([g.recycleFullPath??g.path]);return}if(!un(g.path)||!await Mt({title:e("deleteTitle"),message:e("confirmDelete",{name:g.name})}))return;const xe=Wn(g),de=sn(e("taskDeleting"),g.name,xe.fileType,xe.fileSize);try{await Ji(g.path,De.key),X("ok",e("deleted")),de.done()}catch(Me){X("error",Me.message),de.fail(Me.message)}await Ft()}async function Zn(g){if(n.value){const k=et(g);if(!k)return;const xe=k.name.lastIndexOf(".");I.value={name:k.name,path:k.originalPath||k.path,isDir:k.isDir,ext:xe>0&&xe<k.name.length-1?k.name.slice(xe):"",size:k.size??0,mtime:k.mtime??0},pe.value=!0;return}if(ie.listing)try{I.value=await Oa(g),pe.value=!0}catch(k){X("error",k.message)}}async function Qn(g){if(!un(g))return;const k=Wg();if(!k.paths.length)return;if(k.op==="cut"&&k.paths.some(de=>!ws(de))){X("error",e("workspaceOutside"));return}const xe=sn(k.op==="cut"?e("taskMoving"):e("taskCopying"),`${k.paths.length} → ${g}`);try{for(const de of k.paths){const Me=de.slice(Math.max(de.lastIndexOf("/"),de.lastIndexOf("\\"))+1),F=await Tn(de);if(k.op==="cut"&&!F.fileType){X("error",e("taskSrcMissing",{name:Me})),xe.fail(e("taskSrcMissing",{name:Me})),await Ft();return}const Re=await In(Me,g);xe.step(k.op==="cut"?e("taskMoving"):e("taskCopying"),de,`→ ${g}`,F.fileType,F.fileSize),k.op==="cut"?await Ma(de,Re,De.key):await $p(de,g,De.key)}X("ok",k.op==="cut"?e("moved"):e("copied")),xe.done(),Hg()}catch(de){X("error",de.message),xe.fail(de.message)}await Ft()}function Fs(g){return ie.listing?.entries.find(k=>k.path===g)?.name??null}function Ys(g){const k=M.value.has(g.path)?[...M.value]:[g.recycleFullPath??g.path];return[{label:e("recycleRestore"),icon:"undo",onClick:()=>Rn(k)},{label:e("recycleDelete"),icon:"trash",onClick:()=>Gn(k)},{separator:!0},{label:e("menuRefresh"),icon:"refresh",onClick:()=>bs()},{separator:!0},{label:e("recycleEmpty"),icon:"trash",disabled:(ie.recycleItems?.length??0)===0,onClick:()=>es()},{separator:!0},{label:e("menuProperties"),icon:"info",onClick:()=>Zn(g.recycleFullPath??g.path)}]}async function Rn(g){if(!g.length)return;const k=sn(e("recycleRestore"),g.length>1?`${g.length} 项`:Fs(g[0])??"");let xe=0;for(const de of g)try{await pp(de),xe+=1}catch(Me){k.fail(Me.message),X("error",Me.message)}xe&&(X("ok",e("recycleRestored")),k.done(e("recycleRestored"))),Te(),await bs()}async function Gn(g){if(!g.length||!await Mt({title:e("recycleDelete"),message:g.length>1?e("recycleDeleteConfirmMulti",{count:g.length}):e("recycleDeleteConfirm",{name:Fs(g[0])??""})}))return;const xe=sn(e("recycleDelete"),`${g.length} 项`);let de=0;for(const Me of g)try{await vp(Me),de+=1}catch(F){xe.fail(F.message),X("error",F.message)}de&&(X("ok",e("recycledDeleted")),xe.done(e("recycledDeleted"))),Te(),await bs()}async function es(){await Wu(),Te()}async function Rs(g){if(!un(g.path))return;const k=Wn(g),xe=sn(e("taskCompressing"),g.name,k.fileType,k.fileSize);try{await Rr(g.path,void 0,De.key),X("ok",e("compressed")),xe.done()}catch(de){X("error",de.message),xe.fail(de.message)}await Ft()}async function en(g){const k=ie.listing?.path??"";if(!k||!un(k))return;const xe=Wn(g),de=sn(e("taskExtracting"),g.name,xe.fileType,xe.fileSize);try{const Me=await Ep(g.path,k,De.key);X("ok",e("extracted",{count:Me.count})),de.done(e("extracted",{count:Me.count}))}catch(Me){X("error",`${e("extractFailed")}：${Me.message}`),de.fail(Me.message)}await Ft()}async function Kt(g){const k=[...M.value];if(!k.length)return;if(g!=="copy"&&k.some(de=>!ws(de))){X("error",e("workspaceOutside"));return}const xe=g==="cut"?sn(e("taskMoving"),`${k.length} 项`):g==="copy"?sn(e("taskCopying"),`${k.length} 项`):g==="delete"?sn(e("taskDeleting"),`${k.length} 项`):sn(e("taskCompressing"),`${k.length} 项`);try{if(g==="cut")Fo(k),X("ok",e("menuCutDone"));else if(g==="copy")_a(k),X("ok",e("menuCopyDone"));else if(g==="delete"){if(!await Mt({title:e("deleteTitle"),message:e("confirmDelete",{name:`${k.length} 项`})}))return;for(const Me of k)try{const F=await Tn(Me);await Ji(Me,De.key),xe.step(e("taskDeleting"),Me,void 0,F.fileType,F.fileSize)}catch{}X("ok",e("deleted")),xe.done()}else if(g==="compress"){for(const de of k)try{const Me=await Tn(de);await Rr(de,void 0,De.key),xe.step(e("taskCompressing"),de,void 0,Me.fileType,Me.fileSize)}catch{}X("ok",e("compressed")),xe.done()}}catch(de){X("error",de.message),xe.fail(de.message)}Te(),await Ft()}async function ts(g){return In(g,ie.listing?.path??"")}async function In(g,k){const xe=k===ie.listing?.path?new Set((ie.listing?.entries??[]).map(ms=>ms.name.toLowerCase())):null,de=g.lastIndexOf("."),Me=de>0?g.slice(0,de):g,F=de>0?g.slice(de):"";let Re=g,Xt=2;for(;xe&&xe.has(Re.toLowerCase());)Re=`${Me} (${Xt})${F}`,Xt+=1;const Ht=k.includes("\\")?"\\":"/";return`${k.replace(/[\\/]+$/,"")}${Ht}${Re}`}async function dn(g){if(!ie.listing||!un(ie.listing.path))return;const k=e(g==="folder"?"newFolderName":"newFileName"),xe=g==="folder"?k:`${k}.txt`;let de=await ts(xe);try{g==="folder"?await Aa(de,De.key):await qc(de,De.key),X("ok",e(g==="folder"?"createdFolder":"createdFile"))}catch(Me){X("error",Me.message),await Ft();return}await Ft()}return(g,k)=>{const xe=$s,de=An,Me=rn;return l(),r("div",{class:"fw-fl",onKeydown:Je},[o("input",{ref_key:"fileInputRef",ref:it,type:"file",multiple:"",class:"fw-hidden-input",onChange:H},null,544),s(ie).listing&&!s(ie).loadErr?(l(),r("div",J0,[h(xe,{modelValue:Ie.value,"onUpdate:modelValue":k[0]||(k[0]=F=>Ie.value=F),size:"small",clearable:"",placeholder:s(e)("filterPlaceholder"),class:"fw-filter"},{prefix:se(()=>[h(oe,{name:"search",size:14,class:"fw-search-ico"})]),_:1},8,["modelValue","placeholder"])])):N("",!0),s(ie).loadErr?(l(),r("div",Z0,[o("span",Q0,[h(oe,{name:"warning",size:16})]),o("span",null,a(s(ie).loadErr),1),o("button",{class:"fw-retry",onClick:k[1]||(k[1]=F=>s(Ft)())},a(s(e)("retry")),1)])):s(ie).listing?(l(),r("div",{key:2,ref_key:"wrapRef",ref:ut,class:"fw-table-wrap",tabindex:"0",onScroll:k[12]||(k[12]=(...F)=>s(Z).onScroll&&s(Z).onScroll(...F)),onClick:re,onContextmenu:_e($t,["prevent"]),onDragover:_e(Es,["prevent"]),onDrop:k[13]||(k[13]=_e(F=>En(F,null),["prevent"])),onMousedown:Mn},[ct.value?(l(),r("div",{key:0,class:"fw-band",style:_t({left:ct.value.x+"px",top:ct.value.y+"px",width:ct.value.w+"px",height:ct.value.h+"px"})},null,4)):N("",!0),P.value==="details"?(l(),r("table",e2,[o("thead",null,[o("tr",null,[o("th",{class:te(["col-name",{active:i.value==="name"}]),style:_t(p("name")),onClick:k[4]||(k[4]=F=>W("name"))},[ue(a(s(e)("colName")),1),i.value==="name"?(l(),r("span",t2,a(c.value?"▲":"▼"),1)):N("",!0),o("span",{class:te(["fw-col-resize",{on:u.value==="name"}]),onMousedown:k[2]||(k[2]=_e(F=>w(F,"name"),["prevent","stop"])),onClick:k[3]||(k[3]=_e(()=>{},["stop"]))},null,34)],6),o("th",{class:te(["col-size",{active:i.value==="size"}]),style:_t(p("size")),onClick:k[7]||(k[7]=F=>W("size"))},[ue(a(s(e)("colSize")),1),i.value==="size"?(l(),r("span",n2,a(c.value?"▲":"▼"),1)):N("",!0),o("span",{class:te(["fw-col-resize",{on:u.value==="size"}]),onMousedown:k[5]||(k[5]=_e(F=>w(F,"size"),["prevent","stop"])),onClick:k[6]||(k[6]=_e(()=>{},["stop"]))},null,34)],6),o("th",{class:te(["col-type",{active:i.value==="type"}]),style:_t(p("type")),onClick:k[10]||(k[10]=F=>W("type"))},[ue(a(s(e)("colType")),1),i.value==="type"?(l(),r("span",s2,a(c.value?"▲":"▼"),1)):N("",!0),o("span",{class:te(["fw-col-resize",{on:u.value==="type"}]),onMousedown:k[8]||(k[8]=_e(F=>w(F,"type"),["prevent","stop"])),onClick:k[9]||(k[9]=_e(()=>{},["stop"]))},null,34)],6),o("th",{class:te(["col-mtime",{active:i.value==="mtime"}]),onClick:k[11]||(k[11]=F=>W("mtime"))},[ue(a(s(e)("colModified")),1),i.value==="mtime"?(l(),r("span",o2,a(c.value?"▲":"▼"),1)):N("",!0)],2)])]),o("tbody",null,[s(Z).range.value.padBefore?(l(),r("tr",a2,[o("td",{colspan:4,style:_t({height:s(Z).range.value.padBefore+"px"})},null,4)])):N("",!0),(l(!0),r(ae,null,Ae(Ee.value,F=>(l(),r("tr",{key:F.path,class:te(["fw-row",{"is-dir":F.isDir,hidden:F.hidden,broken:F.broken,selected:zt(F)}]),"data-path":F.path,title:Qe(F),draggable:!n.value,onMouseenter:Re=>ft(F),onMouseleave:Re=>Ct(F),onDragstart:Re=>Sn(Re,F),onDragover:_e(Re=>F.isDir&&(F.path,void 0),["prevent"]),onDrop:_e(Re=>F.isDir&&En(Re,F.path),["prevent","stop"]),onClick:Re=>S(Re,F),onDblclick:Re=>q(Re,F),onContextmenu:_e(Re=>Et(Re,F),["prevent","stop"])},[o("td",l2,[o("span",r2,[o("span",c2,[h(oe,{name:F.isDir?"folder":"file",size:13},null,8,["name"])]),o("span",u2,a(ge(F)),1),be(F)?(l(),r("span",{key:0,class:te(["fw-git-badge","st-"+be(F)]),title:st(F)},[h(oe,{name:"git",size:10}),ue(a(Ye(F)),1)],10,d2)):fe(F)?(l(),r("span",{key:1,class:te(["fw-git-badge","st-"+fe(F)]),title:qe(F)},[h(oe,{name:"svn",size:10}),ue(a(ke(F)),1)],10,f2)):N("",!0),F.hidden?(l(),r("span",p2,"●")):N("",!0),F.broken?(l(),r("span",{key:3,class:"fw-broken-tag",title:s(e)("brokenLink")},"broken",8,v2)):N("",!0)])]),o("td",h2,a(je(F)),1),o("td",m2,a(J(F)),1),o("td",g2,a(Ke(F)),1)],42,i2))),128)),s(Z).range.value.padAfter?(l(),r("tr",y2,[o("td",{colspan:4,style:_t({height:s(Z).range.value.padAfter+"px"})},null,4)])):N("",!0),s(ie).listing.inaccessible?(l(),r("tr",w2,[o("td",b2,a(s(ie).listing.inaccessible),1)])):rt.value.length?N("",!0):(l(),r("tr",_2,[o("td",k2,a(yt.value),1)]))])])):P.value==="list"?(l(),r("div",{key:2,class:"fw-mode fw-list",style:_t({paddingTop:s(Z).range.value.padBefore+"px",paddingBottom:s(Z).range.value.padAfter+"px"})},[(l(!0),r(ae,null,Ae(Ee.value,F=>(l(),r("div",{key:F.path,class:te(["fw-list-row",{"is-dir":F.isDir,hidden:F.hidden,broken:F.broken,selected:zt(F)}]),"data-path":F.path,title:Qe(F),draggable:!n.value,onMouseenter:Re=>ft(F),onMouseleave:Re=>Ct(F),onDragstart:Re=>Sn(Re,F),onDragover:_e(Re=>F.isDir&&(F.path,void 0),["prevent"]),onDrop:_e(Re=>F.isDir&&En(Re,F.path),["prevent","stop"]),onClick:Re=>S(Re,F),onDblclick:Re=>q(Re,F),onContextmenu:_e(Re=>Et(Re,F),["prevent","stop"])},[o("span",C2,[h(oe,{name:F.isDir?"folder":"file",size:14},null,8,["name"])]),o("span",$2,a(ge(F)),1),be(F)?(l(),r("span",{key:0,class:te(["fw-git-badge","st-"+be(F)]),title:st(F)},[h(oe,{name:"git",size:10}),ue(a(Ye(F)),1)],10,S2)):fe(F)?(l(),r("span",{key:1,class:te(["fw-git-badge","st-"+fe(F)]),title:qe(F)},[h(oe,{name:"svn",size:10}),ue(a(ke(F)),1)],10,E2)):N("",!0),F.broken?(l(),r("span",{key:2,class:"fw-broken-tag",title:s(e)("brokenLink")},"broken",8,T2)):N("",!0)],42,x2))),128)),s(ie).listing.inaccessible||!rt.value.length?(l(),r("div",{key:0,class:te(["fw-empty-cell",{"fw-inaccessible":!!s(ie).listing.inaccessible}])},a(yt.value),3)):N("",!0)],4)):P.value==="grid"?(l(),r("div",{key:3,class:te(["fw-mode fw-grid","fw-grid-"+L.value])},[(l(!0),r(ae,null,Ae(rt.value,F=>(l(),r("div",{key:F.path,class:te(["fw-tile",{"is-dir":F.isDir,hidden:F.hidden,selected:zt(F)}]),"data-path":F.path,title:Qe(F),draggable:!n.value,onMouseenter:Re=>ft(F),onMouseleave:Re=>Ct(F),onDragstart:Re=>Sn(Re,F),onDragover:_e(Re=>F.isDir&&(F.path,void 0),["prevent"]),onDrop:_e(Re=>F.isDir&&En(Re,F.path),["prevent","stop"]),onClick:Re=>S(Re,F),onDblclick:Re=>q(Re,F),onContextmenu:_e(Re=>Et(Re,F),["prevent","stop"])},[Q(F)?(l(),r("span",F2,[o("img",{src:s(Fr)(F.path),alt:F.name,loading:"lazy",draggable:"false"},null,8,R2)])):(l(),r("span",N2,[h(oe,{name:F.isDir?"folder":"file",size:j.value},null,8,["name","size"])])),o("span",P2,[ue(a(ge(F)),1),be(F)?(l(),r("span",{key:0,class:te(["fw-git-badge","st-"+be(F)]),title:st(F)},[h(oe,{name:"git",size:10}),ue(a(Ye(F)),1)],10,A2)):fe(F)?(l(),r("span",{key:1,class:te(["fw-git-badge","st-"+fe(F)]),title:qe(F)},[h(oe,{name:"svn",size:10}),ue(a(ke(F)),1)],10,M2)):N("",!0)])],42,D2))),128)),s(ie).listing.inaccessible||!rt.value.length?(l(),r("div",{key:0,class:te(["fw-empty-cell",{"fw-inaccessible":!!s(ie).listing.inaccessible}])},a(yt.value),3)):N("",!0)],2)):P.value==="content"?(l(),r("div",O2,[(l(!0),r(ae,null,Ae(rt.value,F=>(l(),r("div",{key:F.path,class:te(["fw-content-row",{"is-dir":F.isDir,hidden:F.hidden,selected:zt(F)}]),"data-path":F.path,title:Qe(F),draggable:!n.value,onMouseenter:Re=>ft(F),onMouseleave:Re=>Ct(F),onDragstart:Re=>Sn(Re,F),onDragover:_e(Re=>F.isDir&&(F.path,void 0),["prevent"]),onDrop:_e(Re=>F.isDir&&En(Re,F.path),["prevent","stop"]),onClick:Re=>S(Re,F),onDblclick:Re=>q(Re,F),onContextmenu:_e(Re=>Et(Re,F),["prevent","stop"])},[o("span",B2,[h(oe,{name:F.isDir?"folder":"file",size:20},null,8,["name"])]),o("span",I2,[o("span",j2,[ue(a(ge(F)),1),F.broken?(l(),r("span",V2,"broken")):N("",!0)]),o("span",z2,a(s(e)("colType"))+": "+a(J(F)),1)]),o("span",U2,[o("span",null,a(s(e)("colModified"))+": "+a(Ke(F)),1),o("span",null,a(s(e)("colSize"))+": "+a(F.isDir?"":je(F)),1)])],42,L2))),128)),s(ie).listing.inaccessible||!rt.value.length?(l(),r("div",{key:0,class:te(["fw-empty-cell",{"fw-inaccessible":!!s(ie).listing.inaccessible}])},a(yt.value),3)):N("",!0)])):P.value==="tiles"?(l(),r("div",H2,[(l(!0),r(ae,null,Ae(rt.value,F=>(l(),r("div",{key:F.path,class:te(["fw-tile2",{"is-dir":F.isDir,hidden:F.hidden,selected:zt(F)}]),"data-path":F.path,title:Qe(F),draggable:!n.value,onMouseenter:Re=>ft(F),onMouseleave:Re=>Ct(F),onDragstart:Re=>Sn(Re,F),onDragover:_e(Re=>F.isDir&&(F.path,void 0),["prevent"]),onDrop:_e(Re=>F.isDir&&En(Re,F.path),["prevent","stop"]),onClick:Re=>S(Re,F),onDblclick:Re=>q(Re,F),onContextmenu:_e(Re=>Et(Re,F),["prevent","stop"])},[Q(F)?(l(),r("span",G2,[o("img",{src:s(Fr)(F.path),alt:F.name,loading:"lazy",draggable:"false"},null,8,q2)])):(l(),r("span",K2,[h(oe,{name:F.isDir?"folder":"file",size:34},null,8,["name"])])),o("span",X2,[o("span",Y2,a(ge(F)),1),o("span",J2,a(J(F)),1),o("span",Z2,a(F.isDir?"":je(F)),1)])],42,W2))),128)),s(ie).listing.inaccessible||!rt.value.length?(l(),r("div",{key:0,class:te(["fw-empty-cell",{"fw-inaccessible":!!s(ie).listing.inaccessible}])},a(yt.value),3)):N("",!0)])):N("",!0),s(ie).listing.truncated?(l(),r("div",Q2,a(s(e)("resultsSuffixTruncated")),1)):N("",!0)],544)):N("",!0),s(ie).loading?(l(),r("div",ek,[...k[24]||(k[24]=[o("div",{class:"fw-refreshing-spinner"},null,-1)])])):N("",!0),s(U)?(l(),Xe(Zt,{key:4,items:s(G),x:s($),y:s(ee),onClose:k[14]||(k[14]=F=>U.value=!1)},null,8,["items","x","y"])):N("",!0),h(Me,{modelValue:pe.value,"onUpdate:modelValue":k[16]||(k[16]=F=>pe.value=F),class:"fw-prop-dialog fw-clone-dialog",width:"420px","align-center":"","modal-class":"fw-blur-overlay","close-on-click-modal":!1},{header:se(()=>[o("div",tk,[o("span",nk,[h(oe,{name:I.value?.isDir?"folder":"file",size:20},null,8,["name"])]),o("span",sk,[o("span",ok,a(s(e)("menuProperties")),1),o("span",ak,a(I.value?.name),1)])])]),footer:se(()=>[h(de,{type:"primary",onClick:k[15]||(k[15]=F=>pe.value=!1)},{default:se(()=>[ue(a(s(e)("confirmOk")),1)]),_:1})]),default:se(()=>[I.value?(l(),r("div",ik,[o("div",lk,[o("span",rk,a(s(e)("propKind")),1),o("span",ck,a(I.value.isDir?s(e)("typeFolder"):I.value.ext||s(e)("typeFile")),1)]),o("div",uk,[o("span",dk,a(s(e)("propSize")),1),o("span",fk,a(je({isDir:I.value.isDir,size:I.value.size})),1)]),o("div",pk,[o("span",vk,a(s(e)("propModified")),1),o("span",hk,a(Ke({mtime:I.value.mtime})),1)]),o("div",mk,[o("span",gk,a(s(e)("propPath")),1),o("span",{class:"v mono",title:I.value.path},a(I.value.path),9,yk)])])):N("",!0)]),_:1},8,["modelValue"]),h(Me,{modelValue:ve.value,"onUpdate:modelValue":k[18]||(k[18]=F=>ve.value=F),class:"fw-gitdiff-dialog",title:s(e)("gitDiffTitle"),width:"680px","close-on-click-modal":!1},{footer:se(()=>[h(de,{type:"primary",onClick:k[17]||(k[17]=F=>ve.value=!1)},{default:se(()=>[ue(a(s(e)("gitDiffClose")),1)]),_:1})]),default:se(()=>[o("pre",wk,a($e.value||s(e)("gitDiffEmpty")),1)]),_:1},8,["modelValue","title"]),h(cd,{modelValue:me.value,"onUpdate:modelValue":k[19]||(k[19]=F=>me.value=F),dir:n.value?"":s(ie).listing?.path??"",onDone:k[20]||(k[20]=F=>s(_s)(s(ie).listing?.path??""))},null,8,["modelValue","dir"]),h(fd,{modelValue:ne.value,"onUpdate:modelValue":k[21]||(k[21]=F=>ne.value=F),dir:n.value?"":s(ie).listing?.path??""},null,8,["modelValue","dir"]),h(pd,{modelValue:le.value,"onUpdate:modelValue":k[22]||(k[22]=F=>le.value=F),dir:n.value?"":s(ie).listing?.path??""},null,8,["modelValue","dir"]),h(W0,{modelValue:Se.value,"onUpdate:modelValue":k[23]||(k[23]=F=>Se.value=F),path:Ve.value,onSaved:Ne},null,8,["modelValue","path"])],32)}}}),xk=xt(kk,[["__scopeId","data-v-c2b328cc"]]),Ck={key:0,class:"fw-err"},$k={class:"fw-tp-sec"},Sk={key:0,class:"fw-tp-grid"},Ek=["data-path","title","onClick","onDblclick","onContextmenu"],Tk={class:"fw-drive-ico"},Dk={class:"fw-drive-body"},Fk={class:"fw-drive-name"},Rk={class:"fw-drive-bar"},Nk={class:"fw-drive-cap"},Pk={key:0,class:"fw-tp-empty"},Ak={key:1,class:"fw-tp-table"},Mk={class:"col-name"},Ok={class:"col-type"},Lk={class:"col-total"},Bk={class:"col-free"},Ik={class:"col-fs"},jk=["data-path","title","onClick","onDblclick","onContextmenu"],Vk={class:"col-name"},zk={class:"fw-tp-n"},Uk={class:"fw-tp-ico"},Hk={class:"fw-tp-label"},Wk={class:"col-type"},Gk={class:"col-total"},qk={class:"col-free"},Kk={class:"col-fs"},Xk={key:0},Yk={colspan:5,class:"fw-tp-empty-cell"},Jk={key:2,class:"fw-tp-loading"},Zk={key:0,class:"fw-prop-body"},Qk={class:"fw-prop-row"},ex={class:"k"},tx={class:"v"},nx={class:"fw-prop-row"},sx={class:"k"},ox={class:"v"},ax={class:"fw-prop-row"},ix={class:"k"},lx={class:"v"},rx={class:"fw-prop-row"},cx={class:"k"},ux={class:"v"},dx={class:"fw-prop-row"},fx={class:"k"},px={class:"v"},vx={class:"fw-prop-row"},hx={class:"k"},mx={class:"v"},gx={class:"fw-prop-row"},yx={class:"k"},wx={class:"v"},bx={class:"fw-prop-bar"},cc="computer",_x=ht({__name:"ThisPcPane",setup(t){const{t:e}=Bt(),n=["huge","large","medium","small"],i=B(()=>ol(cc)),c=B(()=>n.includes(i.value)),u=B(()=>i.value==="huge"?52:i.value==="large"?44:i.value==="medium"?36:20);Cs(()=>ja.value=i.value);const v=m(null),d=B(()=>{const W=[...ie.drives],J=v.value;return J&&W.sort((z,Q)=>J==="size"?(Q.total??-1)-(z.total??-1):J==="free"?(Q.free??-1)-(z.free??-1):J==="type"?Number(z.removable)-Number(Q.removable)||Is(z).localeCompare(Is(Q),void 0,{sensitivity:"base"}):Is(z).localeCompare(Is(Q),void 0,{sensitivity:"base"})),W});function p(W){if(W===void 0||!Number.isFinite(W))return"—";const J=["B","KB","MB","GB","TB","PB"];let z=W,Q=0;for(;z>=1024&&Q<J.length-1;)z/=1024,Q+=1;return`${Q>0&&z<100?z.toFixed(1):Math.round(z)} ${J[Q]}`}function w(W){if(!(W.total===void 0||W.free===void 0))return Math.max(0,W.total-W.free)}function b(W){const J=w(W);return J===void 0||!W.total?"0%":`${Math.min(100,Math.max(0,J/W.total*100)).toFixed(1)}%`}function x(W){return e("driveCapacity",{free:p(W.free),total:p(W.total)})}const O=m(""),L=m(null);function P(W){O.value=W.path}function j(W){L.value?.focus({preventScroll:!0}),!W.target.closest(".fw-drive, .fw-tp-row, th")&&(O.value="")}function U(W){O.value=W.path,Vt(W.path)}function $(W){const J=d.value;if(!J.length)return;if(W.key==="F5"){W.preventDefault(),Ft();return}if(W.key==="Enter"&&O.value){const ge=J.find(je=>je.path===O.value);ge&&(W.preventDefault(),U(ge));return}if(W.key!=="ArrowDown"&&W.key!=="ArrowUp"&&W.key!=="Home"&&W.key!=="End")return;W.preventDefault();const z=J.findIndex(ge=>ge.path===O.value),Q=W.key==="Home"?0:W.key==="End"?J.length-1:W.key==="ArrowDown"?Math.min(J.length-1,z+1):Math.max(0,z<0?0:z-1);O.value=J[Q]?.path??""}function ee(W){al(cc,W)}Cs(()=>{Rt.visible=!0,Rt.canSwitchView=!0,Rt.total=d.value.length,Rt.selected=O.value?1:0,Rt.text="",Rt.view=i.value}),ln(()=>Ya(W=>ee(W))),Pt(()=>{Ya(null),ad()});const{cmOpen:G,cmX:A,cmY:pe,cmItems:I,openMenu:ve}=pn();function $e(W,J){O.value=J.path;const z=lo(J.path);ve(W,[{label:e("menuOpen"),icon:"arrowRight",onClick:()=>U(J)},{label:e("menuOpenInEditor"),icon:"code",onClick:()=>Zl(J.path)},{separator:!0},{label:e(z?"favoriteRemove":"favoriteAdd"),icon:"star",onClick:()=>{const Q=Va(J.path);X("ok",e(Q?"favoriteAdded":"favoriteRemoved"))}},{label:e("menuCopyPath"),icon:"link",onClick:()=>void Ne(J.path)},{separator:!0},{label:e("menuProperties"),icon:"info",onClick:()=>we(J)}])}function me(W){ve(W,[{label:e("menuRefresh"),icon:"refresh",onClick:()=>void Ft()},{separator:!0},{label:e("menuView"),icon:"eye",children:ne()},{label:e("menuSort"),icon:"sort",children:le()}])}function ne(){const W=(J,z)=>({label:J,checked:i.value===z,onClick:()=>ee(z)});return[W(e("viewHuge"),"huge"),W(e("viewLarge"),"large"),W(e("viewMedium"),"medium"),W(e("viewSmall"),"small"),{separator:!0},W(e("viewList"),"list"),{separator:!0},W(e("viewDetails"),"details"),W(e("viewContent"),"content"),W(e("viewTiles"),"tiles")]}function le(){return[["name",e("sortName")],["size",e("driveTotal")],["free",e("driveFree")],["type",e("sortType")]].map(([J,z])=>({label:z,checked:v.value===J,onClick:()=>{v.value=J}}))}const Se=m(!1),Ve=m(null);function we(W){Ve.value=W,Se.value=!0}async function Ne(W){try{await navigator.clipboard.writeText(W),X("ok",e("menuPathCopied"))}catch{X("error",e("menuPathCopyFail"))}}return Ja((W,J)=>{switch(W){case"view":J&&n.concat(["list","details","content","tiles"]).includes(J)&&ee(J);break;case"sort":(J==="name"||J==="size"||J==="free"||J==="type")&&(v.value=J);break;case"refresh":Ft();break;case"properties":{const z=d.value.find(Q=>Q.path===O.value);z&&we(z);break}}}),Pt(()=>Ja(null)),Cs(()=>{vn.selectionCount=O.value?1:0,vn.canOperate=!1,vn.hasClipboard=yl(),vn.isRecycle=!1}),(W,J)=>{const z=An,Q=rn;return l(),r("div",{class:"fw-tp",onKeydown:$},[s(ie).drivesErr?(l(),r("div",Ck,a(s(ie).drivesErr),1)):(l(),r("div",{key:1,ref_key:"wrapRef",ref:L,class:te(["fw-tp-wrap","fw-tp-"+i.value]),tabindex:"0",onClick:j,onContextmenu:_e(me,["prevent"])},[o("div",$k,a(s(e)("thisPcDevices"))+" ("+a(d.value.length)+")",1),c.value?(l(),r("div",Sk,[(l(!0),r(ae,null,Ae(d.value,ge=>(l(),r("div",{key:ge.path,class:te(["fw-drive",{selected:ge.path===O.value,removable:ge.removable}]),"data-path":ge.path,title:ge.path,onClick:je=>P(ge),onDblclick:je=>U(ge),onContextmenu:_e(je=>$e(je,ge),["prevent","stop"])},[o("span",Tk,[h(oe,{name:"hardDrive",size:u.value},null,8,["size"])]),o("span",Dk,[o("span",Fk,a(s(Is)(ge)),1),o("span",Rk,[o("span",{class:"fw-drive-fill",style:_t({width:b(ge)})},null,4)]),o("span",Nk,a(x(ge)),1)])],42,Ek))),128)),!d.value.length&&!s(ie).drivesLoading?(l(),r("div",Pk,a(s(e)("emptyDrives")),1)):N("",!0)])):(l(),r("table",Ak,[o("thead",null,[o("tr",null,[o("th",Mk,a(s(e)("colName")),1),o("th",Ok,a(s(e)("colType")),1),o("th",Lk,a(s(e)("driveTotal")),1),o("th",Bk,a(s(e)("driveFree")),1),o("th",Ik,a(s(e)("driveFs")),1)])]),o("tbody",null,[(l(!0),r(ae,null,Ae(d.value,ge=>(l(),r("tr",{key:ge.path,class:te(["fw-tp-row",{selected:ge.path===O.value}]),"data-path":ge.path,title:ge.path,onClick:je=>P(ge),onDblclick:je=>U(ge),onContextmenu:_e(je=>$e(je,ge),["prevent","stop"])},[o("td",Vk,[o("span",zk,[o("span",Uk,[h(oe,{name:"hardDrive",size:16})]),o("span",Hk,a(s(Is)(ge)),1)])]),o("td",Wk,a(ge.removable?s(e)("driveTypeRemovable"):s(e)("driveTypeFixed")),1),o("td",Gk,a(p(ge.total)),1),o("td",qk,a(p(ge.free)),1),o("td",Kk,a(ge.fsType||"—"),1)],42,jk))),128)),d.value.length?N("",!0):(l(),r("tr",Xk,[o("td",Yk,a(s(e)("emptyDrives")),1)]))])]))],34)),s(ie).drivesLoading?(l(),r("div",Jk,[...J[3]||(J[3]=[o("div",{class:"fw-tp-spinner"},null,-1)])])):N("",!0),s(G)?(l(),Xe(Zt,{key:3,items:s(I),x:s(A),y:s(pe),onClose:J[0]||(J[0]=ge=>G.value=!1)},null,8,["items","x","y"])):N("",!0),h(Q,{modelValue:Se.value,"onUpdate:modelValue":J[2]||(J[2]=ge=>Se.value=ge),class:"fw-prop-dialog",title:s(e)("menuProperties"),width:"420px","close-on-click-modal":!1},{footer:se(()=>[h(z,{type:"primary",onClick:J[1]||(J[1]=ge=>Se.value=!1)},{default:se(()=>[ue(a(s(e)("confirmOk")),1)]),_:1})]),default:se(()=>[Ve.value?(l(),r("div",Zk,[o("div",Qk,[o("span",ex,a(s(e)("propName")),1),o("span",tx,a(Ve.value.name),1)]),o("div",nx,[o("span",sx,a(s(e)("propPath")),1),o("span",ox,a(Ve.value.path),1)]),o("div",ax,[o("span",ix,a(s(e)("propKind")),1),o("span",lx,a(Ve.value.removable?s(e)("driveTypeRemovable"):s(e)("driveTypeFixed")),1)]),o("div",rx,[o("span",cx,a(s(e)("driveFs")),1),o("span",ux,a(Ve.value.fsType||"—"),1)]),o("div",dx,[o("span",fx,a(s(e)("propSize")),1),o("span",px,a(p(w(Ve.value))),1)]),o("div",vx,[o("span",hx,a(s(e)("driveFree")),1),o("span",mx,a(p(Ve.value.free)),1)]),o("div",gx,[o("span",yx,a(s(e)("driveTotal")),1),o("span",wx,a(p(Ve.value.total)),1)]),o("div",bx,[o("span",{class:"fw-prop-fill",style:_t({width:b(Ve.value)})},null,4)])])):N("",!0)]),_:1},8,["modelValue","title"])],32)}}}),kx=xt(_x,[["__scopeId","data-v-5d2b5f89"]]),xx=["title"],Cx=["disabled","title"],$x=["disabled","title"],Sx=["disabled","title"],Ex=["title"],Tx=["title"],Dx={class:"fw-pmenu-check"},Fx=["title"],Rx={class:"fw-pmenu-check"},Nx={class:"fw-pmenu-check"},Px=["disabled","title"],Ax=["disabled","title"],Mx=["disabled","title"],Ox=["disabled","title"],Lx=["disabled","title"],Bx=["disabled","title"],Ix=["title"],jx={class:"fw-pmenu-check"},Vx=["title"],zx={class:"fw-pmenu-check"},Ux={class:"fw-pmenu-check"},Hx=["disabled","title"],Wx=ht({__name:"CommandBar",props:{navFolded:{type:Boolean},compact:{type:Boolean}},emits:["unfold-nav"],setup(t){const{t:e}=Bt(),n=B(()=>vn.isRecycle||!vn.canOperate),i=B(()=>vn.selectionCount>0),c=B(()=>(ie.recycleItems?.length??0)>0),u=B(()=>[["name",e("sortName")],["mtime",e("sortModified")],["type",e("sortType")],["size",e("sortSize")]]),v=B(()=>[["huge",e("viewHuge")],["large",e("viewLarge")],["medium",e("viewMedium")],["small",e("viewSmall")],["list",e("viewList")],["details",e("viewDetails")],["content",e("viewContent")],["tiles",e("viewTiles")]]);function d(w,b){if(w==="newSshHost"){Su();return}if(w==="openTerminal"){ko(ie.listing?.path??"");return}if(w==="cloneGit"||w==="cloneSvn"){lr({kind:w==="cloneGit"?"git":"svn",dir:ie.listing?.path??"",key:De.key,onDone:({path:x})=>{Vt(x)}});return}Y0(w,b)}function p(w){w==="toggleExt"?d("toggleExt"):d("view",w)}return(w,b)=>{const x=wf,O=yf,L=gf;return l(),r("div",{class:te(["fw-cmdbar",{"is-compact":t.compact}])},[t.navFolded?(l(),r("button",{key:0,class:"fw-cb-btn fw-cb-navtoggle",title:s(e)("expShowNav"),onClick:b[0]||(b[0]=P=>w.$emit("unfold-nav"))},[h(oe,{class:"fw-cb-hamburger",name:"viewList",size:13}),ue(a(s(e)("expShowNav")),1)],8,xx)):N("",!0),s(vn).isRecycle?(l(),r(ae,{key:1},[o("button",{class:"fw-cb-btn",disabled:!i.value,title:s(e)("recycleRestore"),onClick:b[1]||(b[1]=P=>d("restore"))},[h(oe,{name:"undo",size:13}),ue(a(s(e)("recycleRestore")),1)],8,Cx),o("button",{class:"fw-cb-btn",disabled:!i.value,title:s(e)("recycleDelete"),onClick:b[2]||(b[2]=P=>d("delete"))},[h(oe,{name:"trash",size:13}),ue(a(s(e)("recycleDelete")),1)],8,$x),o("button",{class:"fw-cb-btn",disabled:!c.value,title:s(e)("recycleEmpty"),onClick:b[3]||(b[3]=P=>d("emptyRecycle"))},[h(oe,{name:"close",size:13}),ue(a(s(e)("recycleEmpty")),1)],8,Sx),o("button",{class:"fw-cb-btn",title:s(e)("menuRefresh"),onClick:b[4]||(b[4]=P=>d("refresh"))},[h(oe,{name:"refresh",size:13}),ue(a(s(e)("menuRefresh")),1)],8,Ex),b[18]||(b[18]=o("span",{class:"fw-cb-sep"},null,-1)),h(L,{trigger:"click",teleported:!1,"popper-class":"fw-panelmenu-popper",onCommand:b[5]||(b[5]=P=>d("sort",String(P)))},{dropdown:se(()=>[h(O,{class:"fw-panelmenu"},{default:se(()=>[(l(!0),r(ae,null,Ae(u.value,P=>(l(),Xe(x,{key:P[0],command:P[0],class:"fw-panelitem"},{default:se(()=>[o("span",Dx,a(s(Ue).sortKey===P[0]?"✓":""),1),ue(a(P[1]),1)]),_:2},1032,["command"]))),128))]),_:1})]),default:se(()=>[o("button",{class:"fw-cb-btn",title:s(e)("menuSort")},[h(oe,{name:"sort",size:13}),ue(a(s(e)("menuSort"))+" ",1),b[16]||(b[16]=o("span",{class:"caret"},"▾",-1))],8,Tx)]),_:1}),h(L,{trigger:"click",teleported:!1,"popper-class":"fw-panelmenu-popper",onCommand:b[6]||(b[6]=P=>p(String(P)))},{dropdown:se(()=>[h(O,{class:"fw-panelmenu"},{default:se(()=>[(l(!0),r(ae,null,Ae(v.value,P=>(l(),Xe(x,{key:P[0],command:P[0],class:"fw-panelitem"},{default:se(()=>[o("span",Rx,a(s(ja)===P[0]?"✓":""),1),ue(a(P[1]),1)]),_:2},1032,["command"]))),128)),h(x,{divided:"",command:"toggleExt",class:"fw-panelitem"},{default:se(()=>[o("span",Nx,a(s(Ue).showExtensions?"✓":""),1),ue(a(s(e)("showExtensions")),1)]),_:1})]),_:1})]),default:se(()=>[o("button",{class:"fw-cb-btn",title:s(e)("menuView")},[h(oe,{name:"viewDetails",size:13}),ue(a(s(e)("menuView"))+" ",1),b[17]||(b[17]=o("span",{class:"caret"},"▾",-1))],8,Fx)]),_:1})],64)):(l(),r(ae,{key:2},[h(L,{trigger:"click",teleported:!1,"popper-class":"fw-panelmenu-popper",onCommand:b[7]||(b[7]=P=>d(String(P)))},{dropdown:se(()=>[h(O,{class:"fw-panelmenu"},{default:se(()=>[h(x,{command:"newFolder",class:"fw-panelitem"},{default:se(()=>[ue(a(s(e)("menuNewFolder")),1)]),_:1}),h(x,{command:"newFile",class:"fw-panelitem"},{default:se(()=>[ue(a(s(e)("menuNewFile")),1)]),_:1}),h(x,{command:"upload",class:"fw-panelitem"},{default:se(()=>[ue(a(s(e)("menuUpload")),1)]),_:1}),h(x,{command:"cloneGit",class:"fw-panelitem"},{default:se(()=>[ue(a(s(e)("menuCloneGit")),1)]),_:1}),h(x,{command:"cloneSvn",class:"fw-panelitem"},{default:se(()=>[ue(a(s(e)("menuCloneSvn")),1)]),_:1}),h(x,{divided:"",command:"newSshHost",class:"fw-panelitem"},{default:se(()=>[ue(a(s(e)("sshNewHost")),1)]),_:1}),h(x,{command:"openTerminal",class:"fw-panelitem"},{default:se(()=>[ue(a(s(e)("terminalNew")),1)]),_:1})]),_:1})]),default:se(()=>[o("button",{class:"fw-cb-btn",disabled:n.value,title:s(e)("menuNew")},[h(oe,{name:"plus",size:13}),ue(a(s(e)("menuNew"))+" ",1),b[19]||(b[19]=o("span",{class:"caret"},"▾",-1))],8,Px)]),_:1}),o("button",{class:"fw-cb-btn",disabled:!i.value,title:s(e)("menuCut"),onClick:b[8]||(b[8]=P=>d("cut"))},[h(oe,{name:"cut",size:13}),ue(a(s(e)("menuCut")),1)],8,Ax),o("button",{class:"fw-cb-btn",disabled:!i.value,title:s(e)("menuCopy"),onClick:b[9]||(b[9]=P=>d("copy"))},[h(oe,{name:"copy",size:13}),ue(a(s(e)("menuCopy")),1)],8,Mx),o("button",{class:"fw-cb-btn",disabled:s(vn).hasClipboard||n.value,title:s(e)("menuPaste"),onClick:b[10]||(b[10]=P=>d("paste"))},[h(oe,{name:"paste",size:13}),ue(a(s(e)("menuPaste")),1)],8,Ox),o("button",{class:"fw-cb-btn",disabled:s(vn).selectionCount!==1||n.value,title:s(e)("menuRename"),onClick:b[11]||(b[11]=P=>d("rename"))},[h(oe,{name:"edit",size:13}),ue(a(s(e)("menuRename")),1)],8,Lx),o("button",{class:"fw-cb-btn",disabled:!i.value||n.value,title:s(e)("menuDelete"),onClick:b[12]||(b[12]=P=>d("delete"))},[h(oe,{name:"trash",size:13}),ue(a(s(e)("menuDelete")),1)],8,Bx),b[22]||(b[22]=o("span",{class:"fw-cb-sep"},null,-1)),h(L,{trigger:"click",teleported:!1,"popper-class":"fw-panelmenu-popper",onCommand:b[13]||(b[13]=P=>d("sort",String(P)))},{dropdown:se(()=>[h(O,{class:"fw-panelmenu"},{default:se(()=>[(l(!0),r(ae,null,Ae(u.value,P=>(l(),Xe(x,{key:P[0],command:P[0],class:"fw-panelitem"},{default:se(()=>[o("span",jx,a(s(Ue).sortKey===P[0]?"✓":""),1),ue(a(P[1]),1)]),_:2},1032,["command"]))),128))]),_:1})]),default:se(()=>[o("button",{class:"fw-cb-btn",title:s(e)("menuSort")},[h(oe,{name:"sort",size:13}),ue(a(s(e)("menuSort"))+" ",1),b[20]||(b[20]=o("span",{class:"caret"},"▾",-1))],8,Ix)]),_:1}),h(L,{trigger:"click",teleported:!1,"popper-class":"fw-panelmenu-popper",onCommand:b[14]||(b[14]=P=>p(String(P)))},{dropdown:se(()=>[h(O,{class:"fw-panelmenu"},{default:se(()=>[(l(!0),r(ae,null,Ae(v.value,P=>(l(),Xe(x,{key:P[0],command:P[0],class:"fw-panelitem"},{default:se(()=>[o("span",zx,a(s(ja)===P[0]?"✓":""),1),ue(a(P[1]),1)]),_:2},1032,["command"]))),128)),h(x,{divided:"",command:"toggleExt",class:"fw-panelitem"},{default:se(()=>[o("span",Ux,a(s(Ue).showExtensions?"✓":""),1),ue(a(s(e)("showExtensions")),1)]),_:1})]),_:1})]),default:se(()=>[o("button",{class:"fw-cb-btn",title:s(e)("menuView")},[h(oe,{name:"viewDetails",size:13}),ue(a(s(e)("menuView"))+" ",1),b[21]||(b[21]=o("span",{class:"caret"},"▾",-1))],8,Vx)]),_:1}),b[23]||(b[23]=o("span",{class:"fw-cb-flex"},null,-1)),o("button",{class:"fw-cb-btn",disabled:!i.value,title:s(e)("cmdPreview"),onClick:b[15]||(b[15]=P=>d("preview"))},[h(oe,{name:"eye",size:13}),ue(a(s(e)("cmdPreview")),1)],8,Hx)],64))],2)}}}),Gx=xt(Wx,[["__scopeId","data-v-940d1c90"]]),qx=["title"],Kx={key:0,class:"fw-bg-task-badge"},Xx={class:"fw-bg-task-head"},Yx={class:"fw-bg-task-title"},Jx={class:"fw-bg-task-headacts"},Zx=["disabled"],Qx=["disabled"],eC=["disabled"],tC=["title"],nC={key:0,class:"fw-bg-task-group"},sC={class:"fw-bg-task-grouplbl"},oC=["onClick"],aC={class:"fw-bg-task-label"},iC={key:0,class:"fw-bg-task-detail"},lC={class:"fw-bg-task-see"},rC={key:1,class:"fw-bg-task-group"},cC={class:"fw-bg-task-grouplbl"},uC=["onClick"],dC={class:"fw-bg-task-ico"},fC={class:"fw-bg-task-label"},pC={key:0,class:"fw-bg-task-detail"},vC={class:"fw-bg-task-see"},hC={key:2,class:"fw-bg-task-empty"},mC={class:"fw-dlg-head"},gC={class:"fw-dlg-badge"},yC={class:"fw-dlg-headtext"},wC={class:"fw-dlg-headtitle"},bC={class:"fw-dlg-headsub"},_C={class:"fw-tlog-head"},kC={class:"fw-tlog-name"},xC={key:0,class:"fw-tlog-fileitem"},CC={class:"fw-tlog-k"},$C=["title"],SC={class:"fw-tlog-meta"},EC={key:0},TC={key:1},DC={key:2},FC={class:"fw-tlog-timeline"},RC={class:"fw-tlog-rail"},NC={key:0,class:"fw-tlog-line"},PC={class:"fw-tlog-ct"},AC={class:"fw-tlog-brow"},MC={class:"fw-tlog-time"},OC={class:"fw-tlog-dur-tip"},LC={class:"fw-tlog-btext"},BC={key:0,class:"fw-tlog-bnote"},IC={class:"fw-dlg-head"},jC={class:"fw-dlg-badge"},VC={class:"fw-dlg-headtext"},zC={class:"fw-dlg-headtitle"},UC={class:"fw-dlg-headsub"},HC={class:"fw-taskarc"},WC={class:"fw-taskarc-dates"},GC=["onClick"],qC={class:"fw-taskarc-cnt"},KC={class:"fw-taskarc-records"},XC={key:0,class:"fw-taskarc-none"},YC=["onClick"],JC={class:"fw-taskarc-ico"},ZC={class:"fw-taskarc-label"},QC={key:0,class:"fw-taskarc-recdetail"},e$={class:"fw-taskarc-time"},t$={class:"fw-taskarc-detail"},n$={key:0,class:"fw-taskarc-none"},s$={class:"fw-tlog-head"},o$={class:"fw-tlog-name"},a$={key:0,class:"fw-tlog-fileitem"},i$={class:"fw-tlog-k"},l$=["title"],r$={class:"fw-tlog-meta"},c$={key:0},u$={key:1},d$={key:2},f$={class:"fw-tlog-timeline"},p$={class:"fw-tlog-rail"},v$={key:0,class:"fw-tlog-line"},h$={class:"fw-tlog-ct"},m$={class:"fw-tlog-brow"},g$={class:"fw-tlog-time"},y$={class:"fw-tlog-dur-tip"},w$={class:"fw-tlog-btext"},b$={key:0,class:"fw-tlog-bnote"},Bi=340,uc=11,Ro=8,_$=ht({__name:"BgTaskPanel",setup(t){const{t:e}=Bt(),n=B(()=>qn.open.value),i=B(()=>qn.state.list),c=B(()=>qn.state.history),u=B(()=>i.value.filter(fe=>fe.status==="running")),v=B(()=>u.value.length),d=B(()=>c.value.length>0),p=m(null),w=m(!1),b=m(null),x=gt({width:Bi,left:0,bottom:0,maxH:360,arrow:Bi/2}),O=B(()=>({width:`${x.width}px`,left:`${x.left}px`,bottom:`${x.bottom}px`})),L=B(()=>({maxHeight:`${x.maxH}px`})),P=B(()=>({left:`${x.arrow}px`}));function j(){const fe=b.value;if(!fe)return;const ke=fe.getBoundingClientRect(),qe=window.innerWidth,ce=window.innerHeight,Ie=ke.left+ke.width/2,rt=Math.min(Bi,Math.max(qe-Ro*2,200)),yt=Math.max(qe-rt-Ro,Ro),ut=Ie<qe/2?ke.left-2:Ie-rt/2,it=Math.min(Math.max(ut,Ro),yt);x.width=Math.round(rt),x.left=Math.round(it),x.bottom=Math.round(ce-ke.top+uc),x.maxH=Math.max(140,Math.min(ke.top-uc-Ro,Math.round(ce*.6))),x.arrow=Math.round(Math.min(Math.max(Ie-it,16),rt-16))}Ze(n,fe=>{fe&&(j(),Dt(j))});const U=m(!1),$=m(null),ee=B(()=>qn.state.archives),G=B(()=>Object.keys(ee.value).sort((fe,ke)=>fe<ke?1:-1).map(fe=>({date:fe,count:ee.value[fe].length}))),A=B(()=>{const fe=$.value;return[...fe&&ee.value[fe]?ee.value[fe]:[]].sort((qe,ce)=>(ce.doneAt??ce.startedAt)-(qe.doneAt??qe.startedAt))});function pe(){G.value.length&&($.value=G.value[0].date,U.value=!0)}function I(fe){qn.setOpen(fe)}function ve(){qn.clearFinished()}function $e(){qn.clearAll()}function me(fe){const ke=fe.logs,qe=ke&&ke.length?ke:[{time:fe.startedAt,status:"running",msg:fe.label,file:fe.detail},{time:fe.doneAt??Date.now(),status:fe.status,msg:fe.msg??"",file:fe.detail}];p.value={label:fe.label,fileTarget:fe.detail,status:fe.status,startedAt:fe.startedAt,doneAt:fe.doneAt,msg:fe.msg,logs:qe},w.value=!0}function ne(fe,ke){let qe=ke;return fe.map(ce=>{const Ie=ce.time-qe>0?ce.time-qe:0;return qe=ce.time,{time:ce.time,status:ce.status,title:ce.msg,file:ce.file,detail:ce.detail,durMs:Ie}})}function le(fe){let ke=0,qe=0;const ce=new Set;for(const Ie of fe)Ie.fileType&&(ce.add(Ie.fileType),ke+=1,Ie.fileSize!==void 0&&(qe+=Ie.fileSize));return{count:ke,size:qe,types:[...ce]}}const Se=B(()=>p.value?le(p.value.logs):{count:0,size:0,types:[]}),Ve=B(()=>J.value?le(W(J.value)):{count:0,size:0,types:[]}),we=B(()=>p.value?ne(p.value.logs,p.value.startedAt):[]),Ne=B(()=>{const fe=p.value;if(!fe)return null;if(fe.doneAt)return fe.doneAt-fe.startedAt;const ke=we.value[we.value.length-1];return ke?ke.time-fe.startedAt:0});function W(fe){return fe.logs&&fe.logs.length?fe.logs:[{time:fe.startedAt,status:"running",msg:fe.label,file:fe.detail},{time:fe.doneAt??Date.now(),status:fe.status,msg:fe.msg??"",file:fe.detail}]}const J=m(null),z=B(()=>J.value?ne(W(J.value),J.value.startedAt):[]),Q=B(()=>{const fe=J.value;if(!fe)return null;if(fe.doneAt)return fe.doneAt-fe.startedAt;const ke=z.value[z.value.length-1];return ke?ke.time-fe.startedAt:0});function ge(){J.value=null}function je(fe){J.value=fe}function Ke(fe){const ke=new Date(fe),qe=ce=>String(ce).padStart(2,"0");return`${qe(ke.getHours())}:${qe(ke.getMinutes())}:${qe(ke.getSeconds())}`}function Qe(fe){const ke=new Date(fe),qe=ce=>String(ce).padStart(2,"0");return`${ke.getFullYear()}-${qe(ke.getMonth()+1)}-${qe(ke.getDate())} ${Ke(fe)}`}function ye(fe){if(fe==null)return"—";if(fe<0&&(fe=0),fe<1e3)return`${fe}ms`;const ke=fe/1e3;if(ke<60)return`${ke.toFixed(1)}s`;const qe=Math.floor(ke/60),ce=Math.round(ke-qe*60);return`${qe}m ${String(ce).padStart(2,"0")}s`}function be(fe){return e(fe==="done"?"taskStatusDone":fe==="error"?"taskStatusError":"taskStatusRunning")}function Ye(fe){let ke=fe.title??"";return fe.file&&(ke=ke?`${ke}：${fe.file}`:fe.file),ke}ln(()=>{qn.initTaskLogs(),document.addEventListener("mousedown",st),window.addEventListener("resize",j),window.addEventListener("scroll",j,!0)}),Pt(()=>{document.removeEventListener("mousedown",st),window.removeEventListener("resize",j),window.removeEventListener("scroll",j,!0)});function st(fe){fe.target?.closest?.(".fw-bg-task-fab, .fw-bg-task-panel")||qn.setOpen(!1)}return(fe,ke)=>{const qe=rn;return l(),r(ae,null,[o("button",{ref_key:"fabRef",ref:b,class:te(["fw-bg-task-fab",{active:n.value}]),title:s(e)("taskFabTitle"),onClick:ke[0]||(ke[0]=ce=>I(!n.value))},[h(oe,{name:"tasks",size:14}),v.value?(l(),r("span",Kx,a(v.value),1)):N("",!0)],10,qx),h(df,{name:"fw-bg-task-pop"},{default:se(()=>[n.value?(l(),r("div",{key:0,class:"fw-bg-task-wrap",style:_t(O.value)},[o("div",{class:"fw-bg-task-panel",style:_t(L.value)},[o("div",Xx,[o("span",Yx,a(s(e)("taskPanelTitle")),1),o("div",Jx,[o("button",{class:"fw-bg-task-link",disabled:!G.value.length,onClick:pe},a(s(e)("taskArchiveOpen")),9,Zx),o("button",{class:"fw-bg-task-link",disabled:!d.value,onClick:ve},a(s(e)("taskClearFinished")),9,Qx),o("button",{class:"fw-bg-task-link",disabled:!i.value.length,onClick:$e},a(s(e)("taskClearAll")),9,eC),o("button",{class:"fw-bg-task-close",title:s(e)("taskClose"),onClick:ke[1]||(ke[1]=ce=>I(!1))},"✕",8,tC)])]),u.value.length?(l(),r("div",nC,[o("div",sC,a(s(e)("taskRunning")),1),(l(!0),r(ae,null,Ae(u.value,ce=>(l(),r("div",{key:ce.id,class:"fw-bg-task-row",onClick:Ie=>me(ce)},[ke[4]||(ke[4]=o("span",{class:"fw-bg-task-spin"},null,-1)),o("span",aC,a(ce.label),1),ce.detail?(l(),r("span",iC,a(ce.detail),1)):N("",!0),o("span",lC,a(s(e)("taskViewLog")),1)],8,oC))),128))])):N("",!0),c.value.length?(l(),r("div",rC,[o("div",cC,a(s(e)("taskHistory")),1),(l(!0),r(ae,null,Ae(c.value,(ce,Ie)=>(l(),r("div",{key:ce.startedAt+"-"+Ie,class:te(["fw-bg-task-row",ce.status]),onClick:rt=>me(ce)},[o("span",dC,[h(oe,{name:ce.status==="done"?"check":"close",size:13},null,8,["name"])]),o("span",fC,a(ce.label),1),ce.detail?(l(),r("span",pC,a(ce.detail),1)):N("",!0),o("span",vC,a(s(e)("taskViewLog")),1)],10,uC))),128))])):N("",!0),!u.value.length&&!c.value.length?(l(),r("div",hC,a(s(e)("taskEmpty")),1)):N("",!0)],4),o("span",{class:"fw-bg-task-arrow",style:_t(P.value)},null,4)],4)):N("",!0)]),_:1}),h(qe,{modelValue:w.value,"onUpdate:modelValue":ke[2]||(ke[2]=ce=>w.value=ce),class:"fw-clone-dialog fw-tasklog-dialog",width:"580px","align-center":"","modal-class":"fw-blur-overlay","close-on-click-modal":!1,"modal-append-to-body":!1,"append-to-body":!1},{header:se(()=>[o("div",mC,[o("span",gC,[h(oe,{name:"tasks",size:20})]),o("span",yC,[o("span",wC,a(s(e)("taskLogTitle")),1),o("span",bC,a(p.value?.label),1)])])]),default:se(()=>[p.value?(l(),r(ae,{key:0},[o("div",_C,[o("div",kC,a(p.value.label),1),p.value.fileTarget?(l(),r("div",xC,[o("span",CC,a(s(e)("taskFieldTarget")),1),o("span",{class:"fw-tlog-path",title:p.value.fileTarget},a(p.value.fileTarget),9,$C)])):N("",!0),o("div",SC,[o("span",{class:te(["fw-tlog-st-head",p.value.status])},a(be(p.value.status)),3),o("span",null,a(s(e)("taskStartTime"))+" "+a(Qe(p.value.startedAt)),1),p.value.doneAt?(l(),r("span",EC,a(s(e)("taskEndTime"))+" "+a(Qe(p.value.doneAt)),1)):N("",!0),o("span",null,a(s(e)("taskTotalSpent"))+" "+a(ye(Ne.value)),1),Se.value.types.length?(l(),r("span",TC,a(s(e)("taskFieldType"))+"："+a(Se.value.types.join("、")),1)):N("",!0),Se.value.count?(l(),r("span",DC,a(s(e)("taskMetaFiles",{count:Se.value.count,size:s(rc)(Se.value.size)})),1)):N("",!0)])]),o("div",FC,[(l(!0),r(ae,null,Ae(we.value,(ce,Ie)=>(l(),r("div",{key:Ie,class:"fw-tlog-step"},[o("div",RC,[o("span",{class:te(["fw-tlog-dot",ce.status])},null,2),Ie<we.value.length-1?(l(),r("span",NC)):N("",!0)]),o("div",PC,[o("div",{class:te(["fw-tlog-bubble",ce.status])},[o("div",AC,[o("span",MC,a(Ke(ce.time)),1),o("span",{class:te(["fw-tlog-st",ce.status])},a(be(ce.status)),3),o("span",OC,[Ie!==0?(l(),r(ae,{key:0},[ue(a(s(e)("taskStepSpent"))+" ",1),o("b",null,a(ye(ce.durMs)),1)],64)):N("",!0)])]),o("div",LC,a(Ye(ce)),1),ce.detail&&ce.detail!==ce.file?(l(),r("div",BC,a(ce.detail),1)):N("",!0)],2)])]))),128))])],64)):N("",!0)]),_:1},8,["modelValue"]),h(qe,{modelValue:U.value,"onUpdate:modelValue":ke[3]||(ke[3]=ce=>U.value=ce),class:"fw-clone-dialog fw-taskarc-dialog",width:"880px","align-center":"","modal-class":"fw-blur-overlay","close-on-click-modal":!1,"modal-append-to-body":!1,"append-to-body":!1},{header:se(()=>[o("div",IC,[o("span",jC,[h(oe,{name:"archive",size:20})]),o("span",VC,[o("span",zC,a(s(e)("taskArchiveTitle")),1),o("span",UC,a($.value??s(e)("taskArchiveOpen")),1)])])]),default:se(()=>[o("div",HC,[o("div",WC,[(l(!0),r(ae,null,Ae(G.value,ce=>(l(),r("button",{key:ce.date,class:te(["fw-taskarc-date",{active:$.value===ce.date}]),onClick:Ie=>{$.value=ce.date,ge()}},[o("span",null,a(ce.date),1),o("span",qC,a(s(e)("taskArchiveRecords",{count:ce.count})),1)],10,GC))),128))]),o("div",KC,[A.value.length?N("",!0):(l(),r("div",XC,a(s(e)("taskArchiveNone")),1)),(l(!0),r(ae,null,Ae(A.value,(ce,Ie)=>(l(),r("div",{key:ce.startedAt+"-"+Ie,class:te(["fw-taskarc-row",{[ce.status]:!0,active:J.value===ce}]),onClick:rt=>je(ce)},[o("span",JC,[h(oe,{name:ce.status==="done"?"check":"close",size:13},null,8,["name"])]),o("span",ZC,a(ce.label),1),ce.detail?(l(),r("span",QC,a(ce.detail),1)):N("",!0),o("span",e$,a(Qe(ce.startedAt)),1)],10,YC))),128))]),o("div",t$,[J.value?(l(),r(ae,{key:1},[o("div",s$,[o("div",o$,a(J.value.label),1),J.value.detail?(l(),r("div",a$,[o("span",i$,a(s(e)("taskFieldTarget")),1),o("span",{class:"fw-tlog-path",title:J.value.detail},a(J.value.detail),9,l$)])):N("",!0),o("div",r$,[o("span",{class:te(["fw-tlog-st-head",J.value.status])},a(be(J.value.status)),3),o("span",null,a(s(e)("taskStartTime"))+" "+a(Qe(J.value.startedAt)),1),J.value.doneAt?(l(),r("span",c$,a(s(e)("taskEndTime"))+" "+a(Qe(J.value.doneAt)),1)):N("",!0),o("span",null,a(s(e)("taskTotalSpent"))+" "+a(ye(Q.value)),1),Ve.value.types.length?(l(),r("span",u$,a(s(e)("taskFieldType"))+"："+a(Ve.value.types.join("、")),1)):N("",!0),Ve.value.count?(l(),r("span",d$,a(s(e)("taskMetaFiles",{count:Ve.value.count,size:s(rc)(Ve.value.size)})),1)):N("",!0)])]),o("div",f$,[(l(!0),r(ae,null,Ae(z.value,(ce,Ie)=>(l(),r("div",{key:Ie,class:"fw-tlog-step"},[o("div",p$,[o("span",{class:te(["fw-tlog-dot",ce.status])},null,2),Ie<z.value.length-1?(l(),r("span",v$)):N("",!0)]),o("div",h$,[o("div",{class:te(["fw-tlog-bubble",ce.status])},[o("div",m$,[o("span",g$,a(Ke(ce.time)),1),o("span",{class:te(["fw-tlog-st",ce.status])},a(be(ce.status)),3),o("span",y$,[Ie!==0?(l(),r(ae,{key:0},[ue(a(s(e)("taskStepSpent"))+" ",1),o("b",null,a(ye(ce.durMs)),1)],64)):N("",!0)])]),o("div",w$,a(Ye(ce)),1),ce.detail&&ce.detail!==ce.file?(l(),r("div",b$,a(ce.detail),1)):N("",!0)],2)])]))),128))])],64)):(l(),r("div",n$,a(s(e)("taskArchiveNone")),1))])])]),_:1},8,["modelValue"])],64)}}}),k$=xt(_$,[["__scopeId","data-v-516f499d"]]),x$={key:0,class:"fw-status-progress","aria-hidden":"true"},C$={class:"fw-status-tasks"},$$=["title"],S$=["inert"],E$={key:0,class:"fw-status-busy"},T$={class:"fw-status-busy-txt"},D$={key:1,class:"fw-status-info"},F$={key:0},R$={key:1,class:"fw-status-sub"},N$={key:2},P$={key:3},A$=["inert"],M$=["title","onClick"],O$=ht({__name:"StatusBar",props:{chromeDisabled:{type:Boolean}},setup(t){const{t:e}=Bt(),n=t,i=B(()=>n.chromeDisabled??!1),c=m(null),{cmOpen:u,cmX:v,cmY:d,openMenuAt:p}=pn();function w(){const $=c.value?.getBoundingClientRect();$&&p($.left,$.top-4)}function b(){return{path:null,projectDir:De.root||null}}const x=B(()=>Ka().length>0),O=B(()=>{De.root;const $=b();return Ka().map(ee=>({label:ee.text,disabled:!!ee.when&&!ee.when($),onClick:()=>{try{di(ee.commandId,$)}catch(G){X("error",G.message)}}}))}),L=[{key:"details",icon:"eye",label:"viewDetails"},{key:"list",icon:"sort",label:"viewList"},{key:"large",icon:"grid",label:"viewLarge"}],P=B(()=>qn.state.list.filter($=>$.status==="running")),j=B(()=>P.value.length>0||De.search.running||ie.loading||ie.recycleLoading||ie.drivesLoading),U=B(()=>{const $=P.value[0];return $?$.detail?`${$.label} · ${$.detail}`:$.label:De.search.running?e("statusSearching"):ie.loading||ie.recycleLoading||ie.drivesLoading?e("statusLoading"):""});return($,ee)=>(l(),r("div",{class:te(["fw-statusbar",{busy:j.value}])},[j.value?(l(),r("div",x$)):N("",!0),o("div",C$,[h(k$),x.value?(l(),r("button",{key:0,ref_key:"extMenuBtnRef",ref:c,class:te(["fw-status-seg fw-status-ext-btn",{on:s(u)}]),title:s(e)("vsMenuExtensions"),onClick:w},[h(oe,{name:"puzzle",size:13}),o("span",null,a(s(e)("vsMenuExtensions")),1)],10,$$)):N("",!0)]),o("div",{class:te(["fw-status-left",{"chrome-disabled":i.value}]),inert:i.value},[U.value?(l(),r("span",E$,[ee[1]||(ee[1]=o("span",{class:"fw-status-busy-dot","aria-hidden":"true"},null,-1)),o("span",T$,a(U.value),1)])):s(Rt).visible?(l(),r("span",D$,[o("span",null,a(s(e)("statusItemsCount",{count:s(Rt).total})),1),s(Rt).selected?(l(),r("span",F$,"，"+a(s(e)("selectedCount",{count:s(Rt).selected})),1)):N("",!0),s(Rt).text?(l(),r("span",R$," · "+a(s(Rt).text),1)):N("",!0)])):s(ie).view==="computer"?(l(),r("span",N$,a(s(e)("statusDrivesCount",{count:s(ie).drives.length})),1)):s(ie).view==="recycle"?(l(),r("span",P$,a(s(e)("statusItemsCount",{count:s(ie).recycleItems.length})),1)):N("",!0)],10,S$),o("div",{class:te(["fw-status-right",{"chrome-disabled":i.value}]),inert:i.value},[(l(),r(ae,null,Ae(L,G=>kt(o("button",{key:G.key,class:te(["fw-vs-btn",{on:s(Rt).view===G.key}]),title:s(e)(G.label),onClick:A=>s(Gg)(G.key)},[h(oe,{name:G.icon,size:13},null,8,["name"])],10,M$),[[ho,s(Rt).canSwitchView]])),64))],10,A$),s(u)?(l(),Xe(Zt,{key:1,items:O.value,x:s(v),y:s(d),placement:"top",onClose:ee[0]||(ee[0]=G=>u.value=!1)},null,8,["items","x","y"])):N("",!0)],2))}}),L$=xt(O$,[["__scopeId","data-v-69ee25ba"]]),B$=["aria-disabled","inert"],I$={class:"fw-exp-left-main"},j$=["aria-valuenow"],V$={class:"fw-exp-right"},z$={class:"fw-explorer-statusbar-shell"},Ii="dsh-file-workbench.activeExternalView",U$=640,H$=780,W$=680,G$=ht({__name:"ExplorerPane",setup(t){const e=m(null),n=m(!1),i=tr(e),c=B(Sm);function u(){try{return localStorage.getItem(Ii)??"files"}catch{return"files"}}const v=m(u()),d=m(!1),p=m(null),w=new Set,b=new Set,x={apiVersion:Ga,get projectDir(){return De.root||null},get theme(){return i.value},activeFile:null,onProjectChange(ne){return w.add(ne),ne(De.root||null),()=>w.delete(ne)},onThemeChange(ne){return b.add(ne),ne(i.value),()=>b.delete(ne)},onDidChangeActiveFile(ne){return ne(null),()=>{}},openFile:async ne=>{await na(ne)},listOpenFiles:()=>[],openDiff:()=>X("info",y("gitDiffEmpty")),toast:X},O=B(()=>c.value.filter(ne=>!ne.when||ne.when(x))),L=B(()=>O.value.find(ne=>ne.id===v.value));Ze(()=>v.value!=="files",ne=>{De.externalViewActive=ne},{immediate:!0});function P(ne){v.value=ne;try{localStorage.setItem(Ii,ne)}catch{}}function j(){v.value="files";try{localStorage.removeItem(Ii)}catch{}}Ze(()=>De.root,ne=>w.forEach(le=>le(ne||null))),Ze(i,ne=>b.forEach(le=>le(ne))),Cs(ne=>{const le=L.value,Se=p.value;if(!le||!Se||le.when&&!le.when(x))return;const Ve=le.mount(Se,x);qa(Se);const we=new ResizeObserver(()=>qa(Se));we.observe(Se),ne(()=>{if(we.disconnect(),typeof Ve=="function")try{Ve()}catch{}Se.replaceChildren()})},{flush:"post"});const U=m(!1),$=m(0),ee=B(()=>$.value>0&&$.value<W$);let G=null;function A(){const ne=e.value?.clientWidth??0;$.value=ne,ne<=U$?U.value=!0:ne>=H$&&(U.value=!1)}const pe=B(()=>!!Wa.value.trim()),I=B(()=>({width:`calc(${Math.round(zn.explorerSplit*1e3)/10}% - 3px)`}));function ve(ne){if(!n.value||!e.value)return;const le=e.value.getBoundingClientRect();if(le.width<=0)return;const Se=(ne.clientX-le.left)/le.width;zn.explorerSplit=Math.min(.85,Math.max(.15,Se))}function $e(){n.value&&(n.value=!1,document.removeEventListener("mousemove",ve),document.removeEventListener("mouseup",$e),document.body.style.userSelect="",document.body.style.cursor="",Ta())}function me(){n.value=!0,document.addEventListener("mousemove",ve),document.addEventListener("mouseup",$e),document.body.style.userSelect="none",document.body.style.cursor="col-resize"}return Pt(()=>{document.removeEventListener("mousemove",ve),document.removeEventListener("mouseup",$e),G?.disconnect(),G=null}),ln(()=>{e.value&&(G=new ResizeObserver(()=>A()),G.observe(e.value),A())}),(ne,le)=>(l(),r("div",{ref_key:"rootRef",ref:e,class:te(["fw-explorer",{"user-slot-active":v.value!=="files"}])},[o("div",{class:te(["fw-explorer-topbar-shell",{"external-view-disabled":v.value!=="files"}]),"aria-disabled":v.value!=="files",inert:v.value!=="files"},[h(Gx,{"nav-folded":U.value,compact:ee.value,onUnfoldNav:le[0]||(le[0]=Se=>U.value=!1)},null,8,["nav-folded","compact"])],10,B$),o("div",{class:te(["fw-exp-body",{"left-folded":U.value,"user-slot-active":v.value!=="files"}])},[o("div",{class:"fw-exp-left",style:_t(I.value)},[o("div",I$,[h(bg,{"external-views":O.value,"external-collapsed":d.value,"active-external-id":v.value==="files"?"":v.value,"external-active":v.value!=="files"&&!!L.value,onToggleExternal:le[1]||(le[1]=Se=>d.value=!d.value),onSelectExternal:P,onSelectLocal:j},null,8,["external-views","external-collapsed","active-external-id","external-active"])])],4),o("div",{class:te(["fw-exp-split",{dragging:n.value}]),role:"separator","aria-orientation":"vertical","aria-valuenow":Math.round(s(zn).explorerSplit*100),"aria-valuemin":15,"aria-valuemax":85,onMousedown:_e(me,["prevent"])},null,42,j$),o("div",V$,[L.value?(l(),r("div",{key:0,ref_key:"extHostRef",ref:p,class:"fw-exp-ext-view"},null,512)):(l(),r(ae,{key:1},[pe.value?(l(),Xe(zg,{key:0})):s(ie).view==="computer"?(l(),Xe(kx,{key:1})):(l(),Xe(xk,{key:2}))],64))])],2),o("div",z$,[h(L$,{"chrome-disabled":v.value!=="files"},null,8,["chrome-disabled"])])],2))}}),q$=xt(G$,[["__scopeId","data-v-83c03138"]]),K$={class:"fw-navpath"},X$=["title"],Y$={class:"fw-crumb last"},J$=["title"],Z$=["onKeydown"],Q$={key:0,class:"fw-crumb-sep"},eS=["title","onClick"],tS={key:2,class:"fw-path"},nS=ht({__name:"NavPathBar",setup(t){const{t:e}=Bt(),n=B(()=>hl.value||De.root||""),i=B(()=>ie.view==="computer"?e("navThisPc"):ie.view==="recycle"?e("recycleBin"):""),c=B(()=>ie.view==="computer"?"monitor":"trash"),u=B(()=>n.value.startsWith("ssh://")),v=B(()=>{const P=n.value;if(!P)return[];const j=$u(P);if(j)return j;const U=P.replace(/\\/g,"/").split("/").filter(G=>G.length>0),$=[];let ee="";return U.forEach((G,A)=>{const pe=/^[A-Za-z]:$/.test(G);ee=A===0?pe?G+"/":"/"+G:ee.replace(/[\\/]+$/,"")+"/"+G,$.push({name:G,path:ee})}),$});function d(P){Vt(P)}const p=m(!1),w=m(""),b=m(null);function x(){w.value=n.value,p.value=!0,Dt(()=>{b.value?.focus(),b.value?.select()})}function O(){const P=w.value.trim();p.value=!1,P&&P!==n.value&&Vt(P).catch(j=>X("error",j.message))}function L(){p.value=!1}return(P,j)=>(l(),r("div",K$,[i.value?(l(),r("span",{key:0,class:"fw-path fw-crumbs fw-path-static",title:i.value},[h(oe,{name:c.value,size:14,class:"fw-path-static-ico"},null,8,["name"]),o("span",Y$,a(i.value),1)],8,X$)):n.value?(l(),r("span",{key:1,class:te(["fw-path",{"fw-crumbs":!p.value,editing:p.value}]),title:n.value,onClick:x},[p.value?kt((l(),r("input",{key:0,ref_key:"pathInputRef",ref:b,"onUpdate:modelValue":j[0]||(j[0]=U=>w.value=U),class:"fw-path-input",spellcheck:"false",onKeydown:[bt(_e(O,["prevent"]),["enter"]),bt(_e(L,["prevent"]),["esc"])],onBlur:L},null,40,Z$)),[[Lt,w.value]]):(l(!0),r(ae,{key:1},Ae(v.value,(U,$)=>(l(),r(ae,{key:$},[$>0?(l(),r("span",Q$,a(u.value?"/":"\\"),1)):N("",!0),o("button",{class:te(["fw-crumb",{last:$===v.value.length-1}]),title:U.path,onClick:_e(ee=>d(U.path),["stop"])},a(U.name),11,eS)],64))),128))],10,J$)):(l(),r("span",tS,a(s(e)("noFolder")),1))]))}}),sS=xt(nS,[["__scopeId","data-v-7f7f6ad1"]]),oS=["aria-disabled","inert"],aS={class:"fw-right"},iS=640,lS=ht({__name:"WinMenuBar",props:{externalViewActive:{type:Boolean}},emits:["open-settings"],setup(t,{emit:e}){const n=e,{t:i}=Bt(),c=m(null),u=m(!1);let v=null;ln(()=>{c.value&&(v=new ResizeObserver(()=>{u.value=(c.value?.clientWidth??0)<iS}),v.observe(c.value))}),Pt(()=>{v?.disconnect(),v=null});const d=m(!1);let p;function w(){Ft(),d.value=!0,p&&clearTimeout(p),p=setTimeout(()=>d.value=!1,650)}const b=B(()=>ie.loading||d.value);function x(){Pu()}function O(){Au()}const L=B({get:()=>Wa.value,set:ee=>wa(ee)});let P;const j=B(()=>li(hl.value)?hl.value:De.root||"");function U(){P&&clearTimeout(P);const ee=L.value;if(!ee.trim()){wa(""),fo("").catch(G=>X("error",G.message));return}P=setTimeout(()=>{wa(ee),fo(ee,j.value).catch(G=>X("error",G.message))},350)}function $(){L.value="",wa(""),fo("")}return Ze(Wa,ee=>{!ee&&L.value&&(L.value="")}),(ee,G)=>{const A=An,pe=$s;return l(),r("header",{ref_key:"toolbarRef",ref:c,class:te(["fw-toolbar",{"external-view-disabled":t.externalViewActive}]),"aria-disabled":t.externalViewActive,inert:t.externalViewActive},[kt(h(A,{text:"",size:"small",title:s(i)("goBack"),disabled:!s(bh),onClick:x},{default:se(()=>[h(oe,{name:"arrowLeft",size:16})]),_:1},8,["title","disabled"]),[[ho,!u.value]]),kt(h(A,{text:"",size:"small",title:s(i)("goForward"),disabled:!s(_h),onClick:O},{default:se(()=>[h(oe,{name:"arrowRight",size:16})]),_:1},8,["title","disabled"]),[[ho,!u.value]]),h(A,{text:"",size:"small",title:s(i)("goUp"),disabled:!s(kh),onClick:s(vl)},{default:se(()=>[h(oe,{name:"up",size:16})]),_:1},8,["title","disabled","onClick"]),h(A,{text:"",size:"small",title:s(i)("goSessionDir"),onClick:s(Ou)},{default:se(()=>[h(oe,{name:"compass",size:16})]),_:1},8,["title","onClick"]),h(A,{text:"",size:"small",title:s(i)("refreshList"),onClick:w},{default:se(()=>[h(oe,{name:"refresh",class:te(["fw-refresh-ic",{spinning:b.value}]),size:15},null,8,["class"])]),_:1},8,["title"]),h(A,{text:"",size:"small",title:s(i)("settings"),onClick:G[0]||(G[0]=I=>n("open-settings"))},{default:se(()=>[h(oe,{name:"gear",size:16})]),_:1},8,["title"]),h(sS),o("div",aS,[h(pe,{modelValue:L.value,"onUpdate:modelValue":G[1]||(G[1]=I=>L.value=I),class:"fw-search-input",size:"small",clearable:"",placeholder:s(i)("searchPlaceholder"),onInput:U,onClear:$},{prefix:se(()=>[h(oe,{name:"search",size:14,class:"fw-search-ico"})]),_:1},8,["modelValue","placeholder"])])],10,oS)}}}),rS=xt(lS,[["__scopeId","data-v-ccd8c5b0"]]),cS={class:"fw-shortcut"},uS={class:"fw-shortcut-head"},dS={class:"fw-shortcut-title"},fS=["title"],pS={class:"fw-shortcut-body"},vS={class:"fw-shortcut-group-title"},hS={class:"fw-shortcut-keys"},mS={class:"fw-shortcut-desc"},gS={class:"fw-shortcut-foot"},yS=ht({__name:"ShortcutHelpDialog",setup(t,{expose:e}){const{t:n}=Bt(),i=m(!1),c=B(()=>[{title:n("shortcutGlobal"),items:[{keys:["?"],label:n("shGlobalHelp")}]},{title:n("shortcutFileList"),items:[{keys:["Ctrl","A"],label:n("shListSelectAll")},{keys:["Ctrl","C"],label:n("shListCopy")},{keys:["Ctrl","X"],label:n("shListCut")},{keys:["Ctrl","V"],label:n("shListPaste")},{keys:["Ctrl","F"],label:n("shListFilter")},{keys:["Ctrl","Shift","N"],label:n("shListNewFolder")},{keys:["Delete"],label:n("shListDelete")},{keys:["F2"],label:n("shListRename")},{keys:["F5"],label:n("shListRefresh")},{keys:["Enter"],label:n("shListOpen")},{keys:["↑","↓","Home","End"],label:n("shListMove")},{keys:["Backspace"],label:n("shListUp")},{keys:["Alt","←"],label:n("shListBack")},{keys:["Alt","→"],label:n("shListForward")}]}]);Ze(i,d=>{d?window.addEventListener("keydown",u):window.removeEventListener("keydown",u)});function u(d){d.key==="Escape"&&v()}function v(){i.value=!1}return e({open:()=>i.value=!0}),(d,p)=>(l(),Xe(Nc,{to:"body"},[i.value?(l(),r("div",{key:0,class:"fw-shortcut-mask",onMousedown:_e(v,["self"])},[o("div",cS,[o("div",uS,[o("span",dS,a(s(n)("shortcutHelp")),1),o("span",{class:"fw-shortcut-close",title:s(n)("closeTab"),onClick:v},"✕",8,fS)]),o("div",pS,[(l(!0),r(ae,null,Ae(c.value,w=>(l(),r("section",{key:w.title,class:"fw-shortcut-group"},[o("h4",vS,a(w.title),1),(l(!0),r(ae,null,Ae(w.items,b=>(l(),r("div",{key:b.keys.join(),class:"fw-shortcut-row"},[o("span",hS,[(l(!0),r(ae,null,Ae(b.keys,x=>(l(),r("kbd",{key:x,class:"fw-shortcut-kbd"},a(x),1))),128))]),o("span",mS,a(b.label),1)]))),128))]))),128))]),o("div",gS,a(s(n)("shortcutHint")),1)])],32)):N("",!0)]))}}),wS=xt(yS,[["__scopeId","data-v-f4ba30d1"]]),bS={class:"fw-body"},_S=ht({__name:"App",setup(t){const e=m(null);tr(e);const n=B(()=>{const v=(Ue.fontFamily??"").trim(),d=v&&v!=="default"?v:"",p=Ue.fontSize??13;return{fontFamily:d?`${d}, var(--dsh-font, "Segoe UI", system-ui, sans-serif)`:void 0,fontSize:`${p}px`,"--dsh-fs-scale":String(p/13)}});Cs(()=>{const v=Ue.fontSize??13;document.documentElement.style.setProperty("--dsh-fs-scale",String(v/13))});const i=m(null),c=m(null);ln(async()=>{try{await wh()}catch{}await Du(),Yl(),$h()&&(await Ou()||await Mu()),window.addEventListener("keydown",u)}),Pt(()=>{window.removeEventListener("keydown",u)});function u(v){if(!v.ctrlKey&&!v.metaKey&&!v.altKey&&v.key==="?"){if(v.target?.closest("input, textarea, select, [contenteditable='true'], .el-input, .el-textarea"))return;v.preventDefault(),c.value?.open()}}return(v,d)=>(l(),r("div",{ref_key:"rootEl",ref:e,class:"fw-root",style:_t(n.value)},[h(rS,{"external-view-active":s(De).externalViewActive,onOpenSettings:d[0]||(d[0]=p=>i.value?.open())},null,8,["external-view-active"]),o("div",bS,[h(q$)]),h(Yv,{ref_key:"settingsRef",ref:i},null,512),h(Bc),h(wS,{ref_key:"shortcutRef",ref:c},null,512)],4))}}),kS=xt(_S,[["__scopeId","data-v-4a279056"]]);function hd(){return{projectDir:null,recentProjects:[],openTabs:[],activeTab:null,expanded:[],expandedSeeded:[],split:.26,termHeight:260,treeScroll:0,views:{},activityBar:{position:"top",hidden:[]},sidebarSide:"left"}}const Qo=10,dc=8;function xS(t){return t<=1?"vscode":`vscode-${t}`}let Vn={version:2,recents:[],slots:{}},ji=null,is=[];function CS(t){return Array.isArray(t)?[...new Set(t.filter(e=>typeof e=="string"&&e!==""))].slice(0,Qo):[]}function $S(t){if(!t||typeof t!="object")return null;const e=t,n={};return typeof e.scrollTop=="number"&&Number.isFinite(e.scrollTop)&&e.scrollTop>=0&&(n.scrollTop=e.scrollTop),typeof e.anchor=="number"&&Number.isFinite(e.anchor)&&e.anchor>=0&&(n.anchor=e.anchor),n.scrollTop===void 0&&n.anchor===void 0?null:n}function fc(t){const e=hd();if(typeof t.projectDir=="string"&&(e.projectDir=t.projectDir),Array.isArray(t.recentProjects)&&(e.recentProjects=[...new Set(t.recentProjects.filter(n=>typeof n=="string"&&n!==""))].slice(0,Qo)),Array.isArray(t.openTabs)&&(e.openTabs=t.openTabs.filter(n=>typeof n=="string")),typeof t.activeTab=="string"&&(e.activeTab=t.activeTab),Array.isArray(t.expanded)&&(e.expanded=t.expanded.filter(n=>typeof n=="string")),Array.isArray(t.expandedSeeded)&&(e.expandedSeeded=t.expandedSeeded.filter(n=>typeof n=="string")),typeof t.split=="number"&&t.split>.1&&t.split<.9&&(e.split=t.split),typeof t.termHeight=="number"&&Number.isFinite(t.termHeight)&&t.termHeight>=100&&(e.termHeight=Math.min(1200,t.termHeight)),typeof t.treeScroll=="number"&&Number.isFinite(t.treeScroll)&&t.treeScroll>=0&&(e.treeScroll=t.treeScroll),t.activityBar&&typeof t.activityBar=="object"&&(t.activityBar.position==="top"||t.activityBar.position==="bottom")){const n=t.activityBar;e.activityBar.position=n.position,Array.isArray(n.hidden)&&(e.activityBar.hidden=n.hidden.filter(i=>typeof i=="string"&&i!==""))}if((t.sidebarSide==="left"||t.sidebarSide==="right")&&(e.sidebarSide=t.sidebarSide),t.views&&typeof t.views=="object"){const n={};for(const[i,c]of Object.entries(t.views)){const u=$S(c);u&&(n[i]=u)}e.views=n}return e.activeTab&&!e.openTabs.includes(e.activeTab)&&(e.activeTab=e.openTabs[0]??null),e}function SS(t){if(!t||typeof t!="object")return{version:2,recents:[],slots:{}};const e=t;if(e.version===2&&e.slots&&typeof e.slots=="object"){const n={};for(const[c,u]of Object.entries(e.slots))u&&typeof u=="object"&&(n[c]=fc(u));let i;if(e.recents===void 0){const c=[];for(const u of Object.keys(n).sort((v,d)=>Number(v)-Number(d)))for(const v of n[u]?.recentProjects??[])c.includes(v)||c.push(v);i=c.slice(0,Qo)}else i=CS(e.recents);for(const c of Object.values(n))c.recentProjects=[...i];return{version:2,recents:i,slots:n}}if(typeof e.projectDir=="string"||Array.isArray(e.openTabs)){const n=fc(e);return{version:2,recents:[...n.recentProjects],slots:{1:n}}}return{version:2,recents:[],slots:{}}}function ES(){return ji||(ji=(async()=>{const t=await Qc().catch(()=>null);Vn=SS(t?.vscode)})()),ji}const $l=new Map,Fa=new Map;function ka(t){is=[...t];for(const e of $l.values())e.state.recentProjects=[...is]}function md(t){const e=t||"@default",n=Fa.get(e);if(n!==void 0)return n;const i=new Set(Fa.values());let c=1;for(;i.has(c);)c++;return Fa.set(e,c),c}function cr(t){let e=$l.get(t);return e||(e=MS(t),$l.set(t,e)),e}const Za=new Map;function gd(t){let e=Za.get(t);return e||(e=new Map,Za.set(t,e)),e}function Vi(t,e){Za.get(t)?.delete(e)}function TS(t){Za.delete(t)}const Sl=new Map;function pc(t,e){e?Sl.set(t,e):Sl.delete(t)}function DS(t){return Sl.get(t)}const El=new Map;function xa(t,e){e?El.set(t,e):El.delete(t)}function FS(t){return El.get(t)}const Tl=new Map,Dl=new Map;function RS(t,e){let n=Tl.get(t);return n||(n=new Set,Tl.set(t,n)),n.add(e),()=>{n?.delete(e)}}function NS(t,e){let n=Dl.get(t);return n||(n=new Set,Dl.set(t,n)),n.add(e),()=>{n?.delete(e)}}function PS(t,e,n){Tl.get(t)?.forEach(i=>i(e,n))}function AS(t,e){Dl.get(t)?.forEach(n=>n(e))}const mi=Symbol("dsh-file-workbench/vscode-store");function MS(t){const e=gt(hd()),n=m(!1),i=m(null);let c=null,u=null,v=null,d=!1,p=null,w=0;const b={};let x={};function O(){const G=Object.keys(Vn.slots).map(Number).filter(A=>Number.isFinite(A)&&A!==t).sort((A,pe)=>A-pe);for(const A of G){const pe=Vn.slots[String(A)]?.projectDir;if(pe)return pe}return null}function L(){const G=Object.keys(Vn.slots);if(G.length<=dc)return;const A=new Set([...Fa.values()].map(String));A.add(String(t));const pe=G.filter(I=>!A.has(I)).sort((I,ve)=>Number(I)-Number(ve));for(const I of pe.slice(0,G.length-dc))delete Vn.slots[I]}function P(){for(const G of Object.values(Vn.slots))G.recentProjects=[...is];Vn.slots[String(t)]={...e,recentProjects:[...is],views:{...e.views,...b}},Vn.recents=[...is],L(),qs("vscode",Vn)}function j(){p===null&&(p=setTimeout(()=>{p=null,P()},400))}function U(G){const A=G.trim();A&&(ka([A,...is.filter(pe=>pe!==A)].slice(0,Qo)),j())}function $(G){ka(is.filter(A=>A!==G)),P()}function ee(){ka([]),P()}return{slot:t,rootKey:xS(t),state:e,ready:n,projectRequest:i,get tabId(){return c},get panelId(){return u},bindTab(G,A){c=G,u=A},markFresh(){d=!0},init(){return v||(v=(async()=>{if(await ES().catch(()=>{}),is=[...Vn.recents],!d){const G=Vn.slots[String(t)];if(G)Object.assign(e,G,{views:{...G.views}});else if(!e.projectDir){const A=O();A&&(e.projectDir=A)}}ka([...new Set([...is,...e.recentProjects])].slice(0,Qo))})()),v},persist:P,persistSoon:j,rememberProject:U,forgetProject:$,clearRecentProjects:ee,fileViewOf(G){return G?b[G]??e.views[G]??{}:{}},rememberFileView(G,A){if(!G)return;const pe=b[G];pe&&pe.scrollTop===A.scrollTop&&pe.anchor===A.anchor||(b[G]={...A},j())},stashOpenBuffers(G){x={};for(const[A,pe]of Object.entries(G))x[A]={...pe}},takeStashedBuffers(){const G=x;return x={},G},requestOpenProject(G){const A=G?.trim();A&&(i.value={dir:A,n:++w})}}}function ur(){return cr(1)}const OS={key:0,class:"vs-tree-loading"},LS={key:1,class:"vs-tree-empty"},BS=["onClick","onContextmenu","onDragstart","onDragover","onDragleave","onDrop"],IS=["onClick"],jS={key:0},VS=["title"],zS=["title"],US=["title"],HS={key:2,class:"vs-loading"},WS={class:"vs-diff-body"},Fl=new Map,GS=3e4;function qS(t,e){if(!e)return null;const n=Fl.get(t);return n&&n.root===e?n:null}const vc=new Set(["node_modules",".git",".svn",".hg","dist","build","out",".next",".nuxt",".cache","coverage","vendor","target",".venv","venv","__pycache__","bin","obj"]),KS=ht({__name:"ProjectTree",props:{root:{},activePath:{}},emits:["open-file","file-removed","file-renamed","project-missing","remove-project"],setup(t,{expose:e,emit:n}){const i=t,c=n,u=Ol(mi)??ur(),v=u.state,d=u.ready,p=u.rootKey,w=()=>u.persist(),b=()=>u.persistSoon();let x=qS(p,i.root);const O=x?x.nodes:gt({}),L=m(x?x.rootPath:null),P=m(null),j=m(!1);function U(D){const he=i.root;he&&(x={root:he,nodes:O,rootPath:L.value,at:Date.now()},Fl.set(p,x))}function $(){x=null,Fl.delete(p);for(const D of Object.keys(O))delete O[D];L.value=null}let ee=0;const G=3e3;async function A(){const D=i.root;if(!D||!d.value||Date.now()-ee<G)return;ee=Date.now();let he=!0;try{he=await Zi(D,{silent:!0})}catch{he=!0}!he&&i.root===D&&($(),c("project-missing",D))}function pe(){A()}ln(()=>window.addEventListener("focus",pe)),Pt(()=>window.removeEventListener("focus",pe));function I(){x&&(x.at=Date.now())}const ve=B(()=>L.value?O[L.value]??null:null),$e=B(()=>{const D=[],he=ve.value;if(!he)return D;const Be=He=>{if(D.push(He),He.expanded)for(const Pe of He.children){const Ge=O[Pe];Ge&&Be(Ge)}};return Be(he),D});function me(D,he,Be,He,Pe){return{path:D,name:he,isDir:Be,depth:He,owner:Pe,expanded:!1,loaded:!1,loading:!1,children:[]}}function ne(D){return D.replace(/[\\/][^\\/]+$/,"")}function le(D){if(D.isDir)for(const he of D.children){const Be=O[he];!Be||!Be.isDir||!v.expanded.includes(Be.path)||(Be.expanded=!0,Be.loaded?le(Be):Se(Be))}}async function Se(D,he=!1){if(D=O[D.path]??D,!D.loading){D.loading=!0,_s(D.path),no(D.path);try{const Pe=(await Ea(D.path,p)).entries.filter(Ge=>!Ge.hidden).sort((Ge,Et)=>Number(Et.isDir)-Number(Ge.isDir)||Ge.name.localeCompare(Et.name,"zh"));D.children=[];for(const Ge of Pe){const Et=O[Ge.path]??me(Ge.path,Ge.name,Ge.isDir,D.depth+1,D.path);Et.name=Ge.name,Et.isDir=Ge.isDir,Et.depth=D.depth+1,Et.owner=D.path,O[Ge.path]=Et,D.children.push(Ge.path)}D.loaded=!0,I(),le(D)}catch(He){if(D.loading=!1,zc(He)){he||(await new Promise(Pe=>setTimeout(Pe,150)),await Se(D,!0));return}if(D.depth===0&&He instanceof Hs&&He.status===404){$(),c("project-missing",D.path);return}X("error",He.message)}finally{D.loading=!1}}}function Ve(D){D.isDir&&(D.expanded=!D.expanded,Ne(D.path,D.expanded),D.expanded&&(D.loaded?le(D):Se(D)))}function we(D){D.isDir?Ve(D):c("open-file",D.path)}function Ne(D,he,Be=!0){const He=new Set(v.expanded),Pe=He.has(D);he?He.add(D):He.delete(D),Pe!==he&&(v.expanded=[...He],Be&&Dn())}const W=1,J=20;async function z(D,he,Be){if(!(!D.isDir||he<=0))for(const He of[...D.children]){if(Be.n>=J)return;const Pe=O[He];!Pe||!Pe.isDir||vc.has(Pe.name.toLowerCase())||(Be.n+=1,Pe.expanded=!0,Ne(Pe.path,!0,!1),Pe.loaded?le(Pe):await Se(Pe),await z(Pe,he-1,Be))}}async function Q(D){D.expanded=!0,Ne(D.path,!0,!1),await z(D,W,{n:0}),v.expandedSeeded.includes(D.path)||(v.expandedSeeded=[...v.expandedSeeded,D.path]),Dn()}function ge(){const D=P.value;D&&(v.treeScroll=D.scrollTop,b())}async function je(){await Dt();const D=P.value;D&&(D.scrollTop=v.treeScroll||0)}let Ke=0;async function Qe(){const D=Ke;for(const he of $e.value.filter(Be=>Be.isDir&&Be.loaded).map(Be=>Be.path)){if(D!==Ke)return;const Be=O[he];!Be||Be.loading||await Se(Be)}I()}async function ye(){const D=++Ke;i.root&&(j.value=!0);try{if(i.root){let $t=!0;try{$t=await Zi(i.root)}catch{$t=!0}if(!$t){$(),c("project-missing",i.root);return}}if(x&&i.root&&x.root===i.root&&O[i.root]){L.value=i.root,Date.now()-x.at>GS?Qe():await je();return}x=null;for(const $t of Object.keys(O))delete O[$t];if(!i.root){L.value=null;return}try{await Il(i.root,p)}catch{}if(D!==Ke)return;const he=Wt(i.root)?fl(i.root):i.root.split(/[\\/]/).filter(Boolean).pop()??i.root,Be=me(i.root,he,!0,0,i.root);O[i.root]=Be,L.value=i.root;const He=O[i.root],Pe=i.root.replace(/[\\/]+$/,"").toLowerCase(),Ge=v.expanded.some($t=>{const wn=$t.replace(/[\\/]+$/,"").toLowerCase();return wn===Pe||wn.startsWith(`${Pe}\\`)||wn.startsWith(`${Pe}/`)});if(v.expandedSeeded.includes(i.root)&&Ge)He.expanded=v.expanded.includes(i.root),await Se(He);else{if(He.expanded=!0,await Se(He),D!==Ke)return;await Q(He)}if(D!==Ke)return;for(let $t=0;$t<3&&He.expanded&&He.children.length===0;$t+=1){if(await new Promise(wn=>setTimeout(wn,[200,600,1500][$t])),D!==Ke)return;He.loaded=!1,await Se(He)}if(D!==Ke)return;await je(),U()}finally{D===Ke&&(j.value=!1)}}e({rebuild:ye,createFileAtRoot:Es,createFolderAtRoot:En}),Ze(()=>[i.root,d.value],()=>{d.value&&ye()},{immediate:!0});const be={"":"",untracked:"?",added:"A",modified:"M",deleted:"D"};function Ye(D){return D.depth===0?"":ld(D.owner,D.name)}function st(D){return be[Ye(D)]}function fe(D){const he=Ye(D);return he==="untracked"?y("gitBadgeUntracked"):he==="added"?y("gitBadgeAdded"):he==="modified"?y("gitBadgeModified"):he==="deleted"?y("gitBadgeDeleted"):""}function ke(D){return D.depth===0?"":rd(D.owner,D.name)}function qe(D){return be[ke(D)]}function ce(D){const he=ke(D);return he==="untracked"?y("gitBadgeUntracked"):he==="added"?y("gitBadgeAdded"):he==="modified"?y("gitBadgeModified"):he==="deleted"?y("gitBadgeDeleted"):""}const{cmOpen:Ie,cmX:rt,cmY:yt,openMenu:ut}=pn(),it=m(null),Le=m(!1),H=B(()=>it.value?Le.value?T(it.value):M(it.value):[]);function R(D,he){Le.value=!1,it.value=D;const Be=Ee(D);_s(Be),no(Be),ut(he)}function Z(D){const he=i.root?O[i.root]:void 0;he&&(Le.value=!0,it.value=he,_s(he.path),no(he.path),ut(D))}function Ee(D){return D.owner||D.path}function M(D){const he=Ee(D),Be=[];return Be.push(D.isDir?{label:y("menuOpen"),icon:"folderOpen",onClick:()=>Ve(D)}:{label:y("menuOpen"),icon:"arrowRight",onClick:()=>c("open-file",D.path)}),Be.push({separator:!0}),Be.push({label:y("vsNewFile"),icon:"file",onClick:()=>void cn(D)},{label:y("vsNewFolder"),icon:"folder",onClick:()=>void Ln(D)},{label:y("vsRename"),icon:"edit",onClick:()=>void Wn(D)},{label:y("vsDelete"),icon:"trash",onClick:()=>void Tn(D)}),Be.push(...wl(he,D.path,ze)),Be.push(...bl(he,D.path,ze)),Be.push({separator:!0},{label:y("menuCopyRelPath"),icon:"link",onClick:()=>void Cn(D.path)},{label:y("menuCopyAbsPath"),icon:"link",onClick:()=>void zt(D.path)},{label:y("menuOpenTerminal"),icon:"terminal",onClick:()=>ot(D)},{label:y("vsAddToSession"),icon:"sparkle",onClick:()=>ft(D)},{separator:!0},{label:y("vsRefresh"),icon:"refresh",onClick:()=>void gn(D)}),D.depth===0&&(Be.push({separator:!0}),Be.push({label:y("vsRemoveProject"),icon:"close",onClick:()=>c("remove-project",D.path)})),Be}function T(D){const he=D.path;return[{label:y("vsNewFile"),icon:"file",onClick:()=>void cn(D)},{label:y("vsNewFolder"),icon:"folder",onClick:()=>void Ln(D)},{separator:!0},{label:y("vsExpandAll"),icon:"chevronDown",onClick:()=>void Te()},{label:y("vsCollapseAll"),icon:"chevronRight",onClick:K},...wl(he,he,ze),...bl(he,he,ze),{separator:!0},{label:y("menuCopyRelPath"),icon:"link",onClick:()=>void Cn(he)},{label:y("menuCopyAbsPath"),icon:"link",onClick:()=>void zt(he)},{label:y("menuOpenTerminal"),icon:"terminal",onClick:()=>ot(D)},{label:y("vsAddToSession"),icon:"sparkle",onClick:()=>ft(D)},{separator:!0},{label:y("vsRefresh"),icon:"refresh",onClick:()=>void gn(D)},{separator:!0},{label:y("vsRemoveProject"),icon:"close",onClick:()=>c("remove-project",D.path)}]}function K(){const D=i.root?O[i.root]:void 0;if(D){for(const he of Object.values(O))he.expanded=he.depth===0;v.expanded=[D.path],v.expandedSeeded=[...new Set([...v.expandedSeeded,D.path])],Dn()}}const S=120;async function q(){const D=i.root?O[i.root]:void 0;if(!D)return!1;let he=S,Be=!1;const He=async Pe=>{if(he<=0){Be=!0;return}he-=1;const Ge=O[Pe];if(Ge?.isDir){Ge.expanded=!0,Ne(Ge.path,!0,!1),Ge.loaded||await Se(Ge);for(const Et of[...Ge.children]){const $t=O[Et];if($t?.isDir&&!vc.has($t.name.toLowerCase())&&(await He(Et),he<=0)){Be=!0;return}}}};return await He(D.path),Dn(),Be}async function Te(){await q()&&X("info",y("vsExpandAllLimited",{n:String(S)}))}const re=m(!1),ct=m(!1),wt=m(!1),Ot=m(!1),Mn=m(""),Gt=m(""),ze={openGitPanel:()=>{Gt.value=it.value?Ee(it.value):i.root??"",re.value=!0},openSvnPanel:()=>{Gt.value=it.value?Ee(it.value):i.root??"",ct.value=!0},openCommit:()=>{Gt.value=it.value?Ee(it.value):i.root??"",wt.value=!0},showGitDiff:D=>{Mn.value=D,Ot.value=!0},afterMutate:async D=>{await _s(D),await no(D)}};function Je(D){re.value=D,D||lt()}function et(D){ct.value=D,D||lt()}async function lt(){ks("git"),ks("svn");const D=new Set([...Object.keys(hi.dirs),...Object.keys(Zo.dirs)]);i.root&&D.add(i.root),await Promise.all([...D].flatMap(he=>[_s(he),no(he)]))}function xn(D){const he=(i.root??"").replace(/[\\/]+$/,"");return he&&D.toLowerCase().startsWith(he.toLowerCase())?D.slice(he.length).replace(/^[\\/]+/,""):D}async function Cn(D){const he=await nc(xn(D));X(he?"ok":"error",y(he?"menuPathCopied":"menuPathCopyFail"))}async function zt(D){const he=await nc(D);X(he?"ok":"error",y(he?"menuPathCopied":"menuPathCopyFail"))}function ot(D){ko(D.isDir?D.path:ne(D.path))}function ft(D){(window.__DSH_FILE_WORKBENCH__?.appendSessionReference?.(D.path,D.isDir)??!1)||X("error",y("vsAddToSessionFail"))}function Ct(D){return D.isDir?D:O[ne(D.path)]??D}let On=null;const $n=m(null);function Yn(D,he){On=D.path,he.dataTransfer?.setData("text/plain",D.path),he.dataTransfer&&(he.dataTransfer.effectAllowed="move")}function mn(D,he){!On||On===D.path||(he.dataTransfer&&(he.dataTransfer.dropEffect="move"),$n.value=D.isDir?D.path:ne(D.path))}function Sn(D){const he=D.isDir?D.path:ne(D.path);$n.value===he&&($n.value=null)}async function Ks(D,he){const Be=On??he.dataTransfer?.getData("text/plain")??"",He=Ct(D).path;if(On=null,$n.value=null,!Be||!He)return;const Pe=He.replace(/[\\/]+$/,"");if(Be===He||Pe.startsWith(Be.replace(/[\\/]+$/,"")))return;const Ge=Be.split(/[\\/]/).filter(Boolean).pop()??"";if(!Ge)return;const Et=`${Pe}/${Ge}`;if(Et!==Be)try{await Ma(Be,Et,p),c("file-renamed",Be,Et);const $t=O[Pe];$t?.isDir&&!$t.expanded&&($t.expanded=!0,Ne(Pe,!0)),await Jn()}catch($t){X("error",$t.message)}}function Es(){const D=i.root?O[i.root]:void 0;D&&cn(D)}function En(){const D=i.root?O[i.root]:void 0;D&&Ln(D)}async function cn(D){const he=Ct(D),Be=await us({title:y("vsNewFile"),message:y("vsNewFileName"),placeholder:"untitled.txt",initial:"untitled.txt"})??null;if(!Be)return;const He=`${he.path.replace(/[\\/]+$/,"")}/${Be}`;try{await qc(He,p),await yn(he),c("open-file",He)}catch(Pe){X("error",Pe.message)}}async function Ln(D){const he=Ct(D),Be=await us({title:y("vsNewFolder"),message:y("vsNewFolderName"),placeholder:"new-folder",initial:"new-folder"})??null;if(!Be)return;const He=`${he.path.replace(/[\\/]+$/,"")}/${Be}`;try{await Aa(He,p),await yn(he)}catch(Pe){X("error",Pe.message)}}async function Wn(D){const he=ne(D.path),Be=D.name,He=await us({title:y("vsRename"),message:y("vsRenameName"),placeholder:Be,initial:Be})??null;if(!He||He===Be)return;const Pe=`${he.replace(/[\\/]+$/,"")}/${He}`;try{await Ma(D.path,Pe,p),c("file-renamed",D.path,Pe);const Ge=O[he];Ge&&await yn(Ge)}catch(Ge){X("error",Ge.message)}}async function Tn(D){if(!await Mt({title:y("vsDelete"),message:`${y("vsDeleteConfirm")}「${D.name}」？`}))return;const Be=ne(D.path);try{if(await Ji(D.path,p),c("file-removed",D.path),D.depth===0){$(),c("project-missing",D.path);return}const He=O[Be];He&&await yn(He)}catch(He){X("error",He.message)}}async function gn(D){await yn(D.isDir?D:O[ne(D.path)]??D)}async function yn(D){ks("list:"),D.loaded=!1,D.expanded=!0,Ne(D.path,!0),await Se(D)}async function Jn(){ks("list:");const D=ve.value;if(!D)return;const he=new Set,Be=async He=>{if(!he.has(He.path)){he.add(He.path),await Se(He);for(const Pe of[...He.children]){const Ge=O[Pe];Ge?.isDir&&Ge.expanded&&!Ge.loading&&await Be(Ge)}}};await Be(D),I()}function Dn(){w()}return(D,he)=>{const Be=An,He=rn;return l(),r("div",{ref_key:"treeRef",ref:P,class:"vs-tree",onScrollPassive:ge,onContextmenu:he[6]||(he[6]=_e(Pe=>Z(Pe),["prevent"]))},[i.root&&!ve.value&&j.value?(l(),r("div",OS,[he[7]||(he[7]=o("span",{class:"vs-tree-spin","aria-hidden":"true"},null,-1)),ue(a(s(y)("vsTreeLoading")),1)])):ve.value?(l(!0),r(ae,{key:2},Ae($e.value,Pe=>(l(),r("div",{key:Pe.path,class:te(["vs-tree-row",{"is-active":Pe.path===t.activePath,"drop-target":$n.value===Pe.path}]),style:_t({paddingLeft:Pe.depth*12+6+"px"}),draggable:"true",onClick:_e(Ge=>we(Pe),["stop"]),onContextmenu:_e(Ge=>R(Pe,Ge),["prevent","stop"]),onDragstart:Ge=>Yn(Pe,Ge),onDragover:_e(Ge=>mn(Pe,Ge),["prevent"]),onDragleave:Ge=>Sn(Pe),onDrop:_e(Ge=>Ks(Pe,Ge),["prevent"])},[o("span",{class:"vs-caret",onClick:_e(Ge=>Ve(Pe),["stop"])},[Pe.isDir?(l(),r("span",jS,a(Pe.expanded?"▾":"▸"),1)):N("",!0)],8,IS),o("span",{class:te(["vs-ico",Pe.isDir?"ico-dir":"ico-file"])},null,2),o("span",{class:"vs-name",title:Pe.path},a(Pe.name),9,VS),Ye(Pe)?(l(),r("span",{key:0,class:te(["vs-git-badge","st-"+Ye(Pe)]),title:fe(Pe)},a(st(Pe)),11,zS)):ke(Pe)?(l(),r("span",{key:1,class:te(["vs-git-badge","st-"+ke(Pe)]),title:ce(Pe)},a(qe(Pe)),11,US)):N("",!0),Pe.loading?(l(),r("span",HS,"…")):N("",!0)],46,BS))),128)):(l(),r("div",LS,a(s(y)("vsNoProject")),1)),s(Ie)?(l(),Xe(Zt,{key:3,items:H.value,x:s(rt),y:s(yt),onClose:he[0]||(he[0]=Pe=>Ie.value=!1)},null,8,["items","x","y"])):N("",!0),h(He,{modelValue:Ot.value,"onUpdate:modelValue":he[2]||(he[2]=Pe=>Ot.value=Pe),class:"vs-diff-dialog",title:s(y)("gitDiffTitle"),width:"760px","append-to-body":""},{footer:se(()=>[h(Be,{type:"primary",onClick:he[1]||(he[1]=Pe=>Ot.value=!1)},{default:se(()=>[ue(a(s(y)("gitDiffClose")),1)]),_:1})]),default:se(()=>[o("pre",WS,a(Mn.value||s(y)("gitDiffEmpty")),1)]),_:1},8,["modelValue","title"]),h(cd,{modelValue:wt.value,"onUpdate:modelValue":he[3]||(he[3]=Pe=>wt.value=Pe),dir:Gt.value,onDone:lt},null,8,["modelValue","dir"]),h(fd,{modelValue:re.value,"onUpdate:modelValue":[he[4]||(he[4]=Pe=>re.value=Pe),Je],dir:Gt.value},null,8,["modelValue","dir"]),h(pd,{modelValue:ct.value,"onUpdate:modelValue":[he[5]||(he[5]=Pe=>ct.value=Pe),et],dir:Gt.value},null,8,["modelValue","dir"])],544)}}}),XS=xt(KS,[["__scopeId","data-v-71abbe1d"]]),YS={class:"vs-tabs-wrap"},JS=["title"],ZS=["title","onClick","onContextmenu"],QS={class:"vs-tab-name"},e8=["title","onClick"],t8={key:2,class:"vs-tab-dot"},n8=["onClick"],s8={key:0,class:"vs-tabs-empty"},o8=["title"],a8=ht({__name:"TabBar",props:{tabs:{},active:{}},emits:["select","close","save","closeSave","closeOthers","closeRight","closeAll"],setup(t,{emit:e}){const n=t,i=e,c=m(null),u=m(!1),v=m(!1),d=m(!1);let p=null;function w(){const A=c.value;A&&(u.value=A.scrollWidth>A.clientWidth+1,v.value=A.scrollLeft>1,d.value=A.scrollLeft+A.clientWidth<A.scrollWidth-1)}function b(A){const pe=c.value;pe&&pe.scrollBy({left:A*Math.max(200,pe.clientWidth*.7),behavior:"smooth"})}ln(()=>{p=new ResizeObserver(w),c.value&&p.observe(c.value),w()}),Pt(()=>{p?.disconnect(),p=null}),Ze(()=>n?.tabs?.length,()=>void Dt(w));function x(A){const pe=c.value;!pe||pe.scrollWidth<=pe.clientWidth||(A.preventDefault(),pe.scrollLeft+=Math.abs(A.deltaX)>Math.abs(A.deltaY)?A.deltaX:A.deltaY)}function O(A){return A.split(/[\\/]/).filter(Boolean).pop()??A}const{cmOpen:L,cmX:P,cmY:j,openMenu:U}=pn(),$=m(null);function ee(A,pe){$.value=A,U(pe,[])}const G=B(()=>{const A=$.value;if(!A)return[];const I=n.tabs.findIndex(ve=>ve.path===A.path)===n.tabs.length-1;return[{label:y("vsTabClose"),icon:"close",onClick:()=>i("close",A.path)},{label:y("vsTabCloseSave"),icon:"save",onClick:()=>i("closeSave",A.path)},{separator:!0},{label:y("vsTabCloseOthers"),icon:"close",disabled:n.tabs.length<2,onClick:()=>i("closeOthers",A.path)},{label:y("vsTabCloseRight"),icon:"close",disabled:I,onClick:()=>i("closeRight",A.path)},{label:y("vsTabCloseAll"),icon:"close",onClick:()=>i("closeAll")}]});return(A,pe)=>(l(),r("div",YS,[o("button",{class:te(["vs-tab-arrow is-left",{dim:!v.value}]),title:s(y)("vsScrollLeft"),onClick:pe[0]||(pe[0]=I=>b(-1))},[h(oe,{name:"chevronLeft",size:13})],10,JS),o("div",{ref_key:"tabsEl",ref:c,class:"vs-tabs",onWheel:x,onScroll:w},[(l(!0),r(ae,null,Ae(t.tabs,I=>(l(),r("div",{key:I.path,class:te(["vs-tab",{"is-active":I.path===t.active}]),title:I.path,onClick:ve=>A.$emit("select",I.path),onContextmenu:_e(ve=>ee(I,ve),["prevent","stop"])},[I.icon?(l(),Xe(oe,{key:0,name:I.icon,size:12},null,8,["name"])):N("",!0),o("span",QS,a(O(I.path)),1),I.dirty?(l(),r("span",{key:1,class:te(["vs-tab-dirty",{conflict:I.conflict}]),title:I.conflict?s(y)("vsConflictBadge"):"",onClick:_e(ve=>A.$emit("save",I.path),["stop"])},null,10,e8)):(l(),r("span",t8)),o("span",{class:"vs-tab-close",onClick:_e(ve=>A.$emit("close",I.path),["stop"])},"×",8,n8)],42,ZS))),128)),t.tabs.length?N("",!0):(l(),r("div",s8,a(s(y)("vsNoOpenFile")),1)),s(L)?(l(),Xe(Zt,{key:1,items:G.value,x:s(P),y:s(j),onClose:pe[1]||(pe[1]=I=>L.value=!1)},null,8,["items","x","y"])):N("",!0)],544),o("button",{class:te(["vs-tab-arrow is-right",{dim:!d.value}]),title:s(y)("vsScrollRight"),onClick:pe[2]||(pe[2]=I=>b(1))},[h(oe,{name:"chevronRight",size:13})],10,o8)]))}}),i8=xt(a8,[["__scopeId","data-v-3b8ef924"]]),l8="modulepreload",r8=function(t){return"/api/dsh-file-workbench/"+t},hc={},mt=function(e,n,i){let c=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const v=document.querySelector("meta[property=csp-nonce]"),d=v?.nonce||v?.getAttribute("nonce");c=Promise.allSettled(n.map(p=>{if(p=r8(p),p in hc)return;hc[p]=!0;const w=p.endsWith(".css"),b=w?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${b}`))return;const x=document.createElement("link");if(x.rel=w?"stylesheet":l8,w||(x.as="script"),x.crossOrigin="",x.href=p,d&&x.setAttribute("nonce",d),document.head.appendChild(x),w)return new Promise((O,L)=>{x.addEventListener("load",O),x.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${p}`)))})}))}function u(v){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=v,window.dispatchEvent(d),!d.defaultPrevented)throw v}return c.then(v=>{for(const d of v||[])d.status==="rejected"&&u(d.reason);return e().catch(u)})},c8={ts:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bm),__vite__mapDeps([0,1])).then(t=>[t.javascript({typescript:!0})]),tsx:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bm),__vite__mapDeps([0,1])).then(t=>[t.javascript({typescript:!0,jsx:!0})]),js:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bm),__vite__mapDeps([0,1])).then(t=>[t.javascript()]),jsx:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bm),__vite__mapDeps([0,1])).then(t=>[t.javascript({jsx:!0})]),mjs:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bm),__vite__mapDeps([0,1])).then(t=>[t.javascript()]),cjs:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bm),__vite__mapDeps([0,1])).then(t=>[t.javascript()]),json:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bn),__vite__mapDeps([0,1])).then(t=>[t.json()]),html:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bp),__vite__mapDeps([0,1])).then(t=>[t.html()]),htm:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bp),__vite__mapDeps([0,1])).then(t=>[t.html()]),vue:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bp),__vite__mapDeps([0,1])).then(t=>[t.html()]),css:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bo),__vite__mapDeps([0,1])).then(t=>[t.css()]),scss:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bo),__vite__mapDeps([0,1])).then(t=>[t.css()]),less:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bo),__vite__mapDeps([0,1])).then(t=>[t.css()]),md:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bq),__vite__mapDeps([0,1])).then(t=>[t.markdown()]),markdown:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bq),__vite__mapDeps([0,1])).then(t=>[t.markdown()]),yaml:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.br),__vite__mapDeps([0,1])).then(t=>[t.yaml()]),yml:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.br),__vite__mapDeps([0,1])).then(t=>[t.yaml()]),xml:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bs),__vite__mapDeps([0,1])).then(t=>[t.xml()]),svg:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bs),__vite__mapDeps([0,1])).then(t=>[t.xml()]),py:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bt),__vite__mapDeps([0,1])).then(t=>[t.python()]),sql:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bu),__vite__mapDeps([0,1])).then(t=>[t.sql()]),java:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bv),__vite__mapDeps([0,1])).then(t=>[t.java()]),c:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bw),__vite__mapDeps([0,1])).then(t=>[t.cpp()]),h:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bw),__vite__mapDeps([0,1])).then(t=>[t.cpp()]),cc:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bw),__vite__mapDeps([0,1])).then(t=>[t.cpp()]),cpp:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bw),__vite__mapDeps([0,1])).then(t=>[t.cpp()]),cxx:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bw),__vite__mapDeps([0,1])).then(t=>[t.cpp()]),hpp:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bw),__vite__mapDeps([0,1])).then(t=>[t.cpp()]),rs:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bx),__vite__mapDeps([0,1])).then(t=>[t.rust()]),go:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.by),__vite__mapDeps([0,1])).then(t=>[t.go()]),php:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bz),__vite__mapDeps([0,1])).then(t=>[t.php()]),cs:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bA),__vite__mapDeps([0,1])).then(t=>[To.define(t.csharp)]),sh:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bB),__vite__mapDeps([0,1])).then(t=>[To.define(t.shell)]),bash:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bB),__vite__mapDeps([0,1])).then(t=>[To.define(t.shell)]),zsh:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bB),__vite__mapDeps([0,1])).then(t=>[To.define(t.shell)]),rb:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bC),__vite__mapDeps([0,1])).then(t=>[To.define(t.ruby)])},u8={ts:"TypeScript",tsx:"TypeScript JSX",js:"JavaScript",jsx:"JavaScript JSX",mjs:"JavaScript",cjs:"JavaScript",json:"JSON",html:"HTML",htm:"HTML",vue:"Vue",css:"CSS",scss:"SCSS",less:"LESS",md:"Markdown",markdown:"Markdown",yaml:"YAML",yml:"YAML",xml:"XML",svg:"SVG",py:"Python",sql:"SQL",java:"Java",c:"C",h:"C/C++",cc:"C++",cpp:"C++",cxx:"C++",hpp:"C/C++",rs:"Rust",go:"Go",php:"PHP",cs:"C#",sh:"Shell",bash:"Shell",zsh:"Shell",rb:"Ruby",txt:"Plain Text"};function yd(t){const e=t.lastIndexOf(".");if(e<0)return"";const n=t.slice(e+1).toLowerCase();return n.length>0&&n.length<=10?n:""}async function d8(t){const e=c8[yd(t)];if(!e)return[];try{return await e()}catch{return[]}}function f8(t){const e=yd(t);return u8[e]??(e?e.toUpperCase():"Plain Text")}const mc="dsh-plugin-deco-styles",p8=`
.dsh-deco-error   { text-decoration: underline wavy #f85149; text-decoration-skip-ink: none; }
.dsh-deco-warning { text-decoration: underline wavy #d29922; text-decoration-skip-ink: none; }
.dsh-deco-info    { text-decoration: underline wavy #58a6ff; text-decoration-skip-ink: none; }
.dsh-deco-hint    { text-decoration: underline dotted #8b949e; text-decoration-skip-ink: none; }
.dsh-deco-deprecated { text-decoration: line-through; opacity: .7; }
.dsh-deco-highlight { background: rgba(187,128,9,0.25); }
.dsh-deco-widget { color: var(--dsh-fg-dim, #8b949e); font-style: italic; opacity: .85; padding-left: 8px; }
.cm-gutter-marker { cursor: default; }
.cm-gutter-marker.dsh-deco-bookmark { color: #e3b341; font-weight: 700; }
`;function v8(){if(typeof document>"u"||document.getElementById(mc))return;const t=document.createElement("style");t.id=mc,t.textContent=p8,document.head.appendChild(t)}function h8(t){return[t.category?`dsh-deco-${t.category}`:"",t.className].filter(Boolean).join(" ")}function zi(t,e,n){return Math.max(e,Math.min(n,t))}function Ra(t,e,n=!1){if(typeof e.offset=="number")return zi(e.offset,0,t.length);const i=zi(e.line??1,1,t.lines),c=t.line(i);return e.character==null?n?c.to:c.from:zi(c.from+Math.max(0,e.character-1),c.from,c.to)}class dr extends $f{constructor(e,n,i){super(),this.elementClass=e,this.ch=n,this.tip=i}toDOM(){const e=document.createElement("div");return e.className=this.elementClass,e.textContent=this.ch,this.tip&&(e.title=this.tip),e}eq(e){return e instanceof dr&&this.elementClass===e.elementClass&&this.ch===e.ch&&this.tip===e.tip}}class fr extends Cf{constructor(e){super(),this.text=e}eq(e){return e instanceof fr&&e.text===this.text}toDOM(){const e=document.createElement("span");return e.className="dsh-deco-widget",e.textContent=this.text,e}destroy(){}}const Ui=bf.define();function gc(t,e){const n=t.doc,i=[];for(const u of e){if(u.type!=="gutter")continue;const v=Ra(n,u.start),d=n.lineAt(v),p=`cm-gutter-marker${u.category?` dsh-deco-${u.category}`:""}${u.className?` ${u.className}`:""}`,w=u.category==="bookmark"?"●":u.message?.[0]??"•";i.push({from:d.from,to:d.to,marker:new dr(p.trim(),w,u.message)})}i.sort((u,v)=>u.from-v.from||u.to-v.to);const c=new Ac;for(const u of i)c.add(u.from,u.to,u.marker);return c.finish()}function m8(t){v8();let e=t;const n=_f.fromClass(class{decorations;constructor(c){this.decorations=yc(c.state.doc,e)}update(c){(c.docChanged||c.viewportChanged||c.transactions.some(u=>u.effects.some(v=>v.is(Ui))))&&(this.decorations=yc(c.view.state.doc,e))}},{decorations:c=>c.decorations}),i=kf.define({create:c=>gc(c,e),update(c,u){return u.docChanged||u.effects.some(v=>v.is(Ui))?gc(u.state,e):c},provide:c=>xf.compute([c],u=>u.field(c))});return{extension:[n,i],setItems(c){return e=c??[],Ui.of(null)}}}function yc(t,e){const n=[];for(const c of e)if(c.type==="mark"){const u=Ra(t,c.start),v=c.end?Ra(t,c.end):t.lineAt(u).to;if(v<u)continue;n.push({from:u,to:v,deco:xr.mark({class:h8(c),title:c.message})})}else if(c.type==="widget"){const u=Ra(t,c.start,!0);n.push({from:u,to:u,deco:xr.widget({widget:new fr(c.message??""),side:1})})}n.sort((c,u)=>c.from-u.from||c.to-u.to);const i=new Ac;for(const c of n)i.add(c.from,c.to,c.deco);return i.finish()}const wd="\0",bd="";function _d(t,e){const n=[];return[t.replace(e,c=>(n.push(c),`${wd}${n.length-1}${bd}`)),n]}function Rl(t,e){return t.replace(new RegExp(`${wd}(\\d+)${bd}`,"g"),(n,i)=>e[Number(i)]??"")}function g8(t){if(!t.includes("{"))return null;const[e,n]=_d(t,/\/\*[\s\S]*?\*\/|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g);if(e.includes("/*"))return null;const i=(e.match(/{/g)??[]).length,c=(e.match(/}/g)??[]).length;if(i===0||i!==c)return null;const u=e.replace(/\s+/g," ").replace(/\s*([{};])\s*/g,"$1").trim(),v=[];let d="",p=0;const w=()=>"  ".repeat(p),b=x=>{const O=x.trim();O&&v.push(w()+O)};for(const x of u)if(x==="{")b(`${d} {`),d="",p+=1;else if(x==="}"){if(b(d),p-=1,b("}"),d="",p<0)return null}else x===";"?(b(`${d};`),d=""):x===","?(b(`${d},`),d=""):d+=x;return b(d),p!==0?null:Rl(v.join(`
`),n)}const y8=new Set(["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"]);function w8(t,e){if(/<\s*(script|style|pre|textarea)\b/i.test(t))return null;const[n,i]=_d(t,/<!--[\s\S]*?-->|<!\[CDATA\[[\s\S]*?\]\]>/g);if(n.includes("<!--"))return null;const c=[];let u=0;const v=/<[a-zA-Z!/][^>]*>/g;for(let x=v.exec(n);x;x=v.exec(n))x.index>u&&c.push({text:n.slice(u,x.index)}),c.push({tag:x[0]}),u=x.index+x[0].length;u<n.length&&c.push({text:n.slice(u)});const d=x=>x.replace(/^<\/?/,"").replace(/[\s/>].*$/s,"").toLowerCase(),p=[],w=[],b=(x,O)=>{const L=Rl(O,i).replace(/\s+/g," ").trim();L&&p.push("  ".repeat(Math.max(0,x))+L)};for(let x=0;x<c.length;x+=1){const O=c[x];if(O.text!==void 0){O.text.trim()&&b(w.length,O.text);continue}const L=O.tag,P=d(L),j=L.startsWith("</"),U=L.endsWith("/>")||e&&y8.has(P);if(j){if(w.pop()!==P)return null;b(w.length,L);continue}const $=c[x+1],ee=c[x+2];if(!U&&$?.text!==void 0&&ee?.tag!==void 0&&d(ee.tag)===P&&ee.tag.startsWith("</")){const G=`${L}${$.text}${ee.tag}`;if(Rl(G,i).replace(/\s+/g," ").trim().length<=80){b(w.length,G),x+=2;continue}}b(w.length,L),U||w.push(P)}return w.length!==0?null:p.join(`
`)}const b8={key:0,class:"vs-find"},_8={class:"vs-find-row"},k8=["placeholder","onKeydown"],x8={class:"vs-find-count"},C8=["title"],$8=["title"],S8=["title"],E8=["title"],T8=["title"],D8=["title"],F8=["title"],R8={key:0,class:"vs-find-row"},N8=["placeholder","onKeydown"],P8=["title"],A8=["title"];let po=null;const M8=Sf.highest(Ef.of([{key:"Mod-f",run:()=>(po?.openFind(!1),!0)},{key:"Mod-h",run:()=>(po?.openFind(!0),!0)},{key:"Escape",run:()=>po?.closeFind()??!1}]));function O8(){const t=document.createElement("div");return t.className="vs-minimap",t}const co=new Map,kd=new Set;function L8(t){const e=md(t),n=co.get(e);if(n){try{n.view.destroy()}catch{}co.delete(e)}kd.add(e)}typeof window<"u"&&(window.__dshFWDisposeEditorSlotByTabId=L8);const B8=ht({__name:"CodeEditor",props:{path:{},slot:{},initialContent:{},docRev:{},readonly:{type:Boolean},dark:{type:Boolean},initialView:{}},emits:["change","cursor","view","contextmenu"],setup(t,{expose:e,emit:n}){const i=t,c=n;function u(S){c("contextmenu",{x:S.clientX,y:S.clientY})}const v=m(null),d=ff(null),p=new eo,w=new eo,b=new eo,x=new eo,O=new eo,L=new eo;let P=0,j=null;const U=m(!1),$=m(!1),ee=m(""),G=m(""),A=m(!1),pe=m(!1),I=m(!1),ve=m(0),$e=m(-1),me=m(null),ne=B(()=>ee.value?ve.value===0?y("vsFindNoMatch"):`${$e.value<0?"?":$e.value}/${ve.value}`:"");function le(){return new $r({search:ee.value,replace:G.value,caseSensitive:A.value,regexp:pe.value,wholeWord:I.value})}function Se(){const S=d.value;S&&(S.dispatch({effects:Cr.of(le())}),Ve())}function Ve(){const S=d.value;if(!S||!ee.value){ve.value=0,$e.value=-1;return}const q=le(),Te=S.state.selection.main.head;let re=0,ct=-1;const wt=q.getCursor(S.state.doc);for(let Ot=wt.next();!Ot.done;Ot=wt.next())re+=1,ct<0&&Ot.value.from>=Te&&(ct=re);ct<0&&re>0&&(ct=1),ve.value=re,$e.value=ct}function we(){const S=d.value;S&&Tf(S),Ve()}function Ne(){const S=d.value;S&&Df(S),Ve()}function W(S){S?Ne():we()}function J(){const S=d.value;S&&Ff(S),Ve()}function z(){const S=d.value;S&&Rf(S),Ve()}function Q(S){S==="case"?A.value=!A.value:S==="re"?pe.value=!pe.value:I.value=!I.value,Se()}function ge(S){U.value=!0,S&&($.value=!0);const q=d.value;if(q){const Te=q.state.selection.main;if(!Te.empty&&Te.to-Te.from<=200){const re=q.state.doc.sliceString(Te.from,Te.to);re.includes(`
`)||(ee.value=re)}}Se(),Dt(()=>me.value?.select())}function je(){const S=U.value;U.value=!1,$.value=!1,ve.value=0,$e.value=-1;const q=d.value;return q&&S&&q.dispatch({effects:Cr.of(new $r({search:""}))}),q?.focus(),S}const Ke=i.slot??0,Qe=gd(Ke);function ye(){const S=d.value;S&&c("view",{scrollTop:S.scrollDOM.scrollTop,anchor:S.state.selection.main.head})}function be(S){const q=S;if(q.docChanged&&(c("change",q.state.doc.toString()),i.path&&Qe.set(i.path,q.state),U.value&&Ve(),PS(i.slot??0,q.state.doc.toString(),q.changes)),q.selectionSet||q.docChanged){const Te=q.state.selection.main.head,re=q.state.doc.lineAt(Te);c("cursor",re.number,Te-re.from+1),ye(),AS(i.slot??0,q.state.selection)}}function Ye(){return Mf.of({create:()=>({dom:O8()}),displayText:"blocks"})}function st(S){const q=Math.max(0,Math.min(S.length,i.initialView?.anchor??0));return ma.create({doc:S,selection:{anchor:q},extensions:[Pf,Af(),M8,O.of(Ue.vsMinimap?Ye():[]),p.of([]),w.of(i.dark?Ti:[]),b.of(ma.readOnly.of(!!i.readonly)),x.of(Qs.editable.of(!i.readonly)),L.of([]),Qs.updateListener.of(Te=>DS(i.slot??0)?.(Te))]})}function fe(S){const q=Qe.get(S);if(q)return q;const Te=st(i.initialContent??"");return Qe.set(S,Te),Te}async function ke(){const S=P,q=await d8(i.path);S!==P||!d.value||d.value.dispatch({effects:p.reconfigure(q)})}function qe(S){const q=i.initialView?.scrollTop??0;q>0&&requestAnimationFrame(()=>{d.value===S&&(S.scrollDOM.scrollTop=q)})}function ce(S){S.dispatch({effects:[w.reconfigure(i.dark?Ti:[]),b.reconfigure(ma.readOnly.of(!!i.readonly)),x.reconfigure(Qs.editable.of(!i.readonly)),O.reconfigure(Ue.vsMinimap?Ye():[])]})}function Ie(){const S=v.value;if(!S)return;const q=co.get(Ke);if(q&&q.view.dom&&q.path===i.path){const re=q.view;P++,d.value=re,xa(Ke,re),co.delete(Ke),S.appendChild(re.dom),ce(re),qe(re),j=()=>ye(),re.scrollDOM.addEventListener("scroll",j,{passive:!0}),Le(i.path),requestAnimationFrame(()=>{d.value===re&&re.requestMeasure()}),ke();return}if(q){try{q.view.destroy()}catch{}co.delete(Ke)}P++;const Te=new Qs({state:fe(i.path),parent:S});d.value=Te,xa(Ke,Te),ce(Te),qe(Te),j=()=>ye(),Te.scrollDOM.addEventListener("scroll",j,{passive:!0}),ke()}function rt(S,q){const Te=d.value;if(Te){if(S&&S!==q){let re=!0;try{re=cr(Ke).state.openTabs.includes(S)}catch{}re?Qe.set(S,Te.state):Qe.delete(S)}P++,Te.setState(fe(q)),ce(Te),qe(Te),Le(q),ke()}}function yt(){const S=d.value;S&&j&&S.scrollDOM.removeEventListener("scroll",j),j=null}function ut(){d.value?.focus()}const it=new Map;function Le(S){const q=d.value;q&&q.dispatch({effects:L.reconfigure(it.get(S)??[])})}function H(S){i.path&&(it.set(i.path,S),Le(i.path))}const R=new Map;function Z(S){const q=i.path;if(!q)return;const Te=d.value;if(!Te)return;if(S===null){R.delete(q),it.delete(q),Le(q);return}let re=R.get(q)??null;if(!re){re=m8(S),R.set(q,re),it.set(q,re.extension),Le(q);return}Te.dispatch({effects:re.setItems(S)})}function Ee(S){const q=d.value;if(!q)return;const Te=q.state.doc,re=Te.line(Math.max(1,Math.min(Te.lines,S)));q.dispatch({selection:{anchor:re.from,head:re.to},effects:Qs.scrollIntoView(re.from,{y:"center"})}),q.focus(),requestAnimationFrame(()=>{const ct=q.domAtPos(re.from).node,wt=ct instanceof HTMLElement?ct.closest?.(".cm-line"):null;wt&&(wt.classList.add("cm-flash-line"),window.setTimeout(()=>wt.classList.remove("cm-flash-line"),1200))})}function M(S){if(i.path.slice(i.path.lastIndexOf(".")).toLowerCase()!==".json")return null;try{return JSON.stringify(JSON.parse(S),null,2)}catch{return null}}function T(S){return[".css",".scss",".less"].includes(S)?g8:[".html",".htm",".xhtml",".xml",".svg",".vue"].includes(S)?q=>w8(q,S!==".xml"&&S!==".svg"):null}function K(){const S=d.value;if(!S||i.readonly)return!1;const q=S.state.doc.toString(),Te=i.path.slice(i.path.lastIndexOf(".")).toLowerCase();if(Te===".json"){const re=M(q);if(re!==null)return re===q||S.dispatch({changes:{from:0,to:q.length,insert:re}}),!0}else{const re=T(Te)?.(q);if(re!=null)return re===q||S.dispatch({changes:{from:0,to:q.length,insert:re}}),!0}return S.dispatch({selection:{anchor:0,head:q.length}}),Nf(S),!0}return e({focus:ut,format:K,revealLine:Ee,openFind:ge,setExtension:H,setDecorationsSpec:Z}),ln(()=>{pc(i.slot??0,be),po={openFind:S=>ge(S),closeFind:()=>je()},Ie()}),Pt(()=>{if(pc(Ke,null),po&&(po=null),yt(),kd.has(Ke)){d.value?.destroy(),d.value=null,xa(Ke,null);return}d.value&&co.set(Ke,{view:d.value,path:i.path}),xa(Ke,null),d.value=null}),Ze(()=>i.path,(S,q)=>{S&&(q&&q!==S?rt(q,S):q||Ie())}),Ze(()=>i.docRev,()=>{if(!i.path)return;Qe.delete(i.path);const S=d.value;S&&(P++,S.setState(st(i.initialContent??"")),qe(S),ke())}),Ze(()=>i.readonly,()=>{d.value?.dispatch({effects:[b.reconfigure(ma.readOnly.of(!!i.readonly)),x.reconfigure(Qs.editable.of(!i.readonly))]})}),Ze(()=>i.dark,()=>{d.value?.dispatch({effects:w.reconfigure(i.dark?Ti:[])})}),Ze(()=>Ue.vsMinimap,()=>{d.value?.dispatch({effects:O.reconfigure(Ue.vsMinimap?Ye():[])})}),(S,q)=>(l(),r("div",{class:"vs-ce-root",onContextmenu:_e(u,["prevent","stop"])},[o("div",{ref_key:"hostRef",ref:v,class:"vs-code-editor"},null,512),U.value?(l(),r("div",b8,[o("div",_8,[kt(o("input",{ref_key:"findInputRef",ref:me,"onUpdate:modelValue":q[0]||(q[0]=Te=>ee.value=Te),class:"vs-find-input",placeholder:s(y)("vsFindPlaceholder"),onInput:Se,onKeydown:[q[1]||(q[1]=bt(_e(Te=>W(Te.shiftKey),["prevent"]),["enter"])),bt(_e(je,["prevent"]),["esc"])]},null,40,k8),[[Lt,ee.value]]),o("span",x8,a(ne.value),1),o("button",{class:te(["vs-find-btn",{on:A.value}]),title:s(y)("vsGrepCase"),onClick:q[2]||(q[2]=Te=>Q("case"))},"Aa",10,C8),o("button",{class:te(["vs-find-btn",{on:pe.value}]),title:s(y)("vsGrepRegex"),onClick:q[3]||(q[3]=Te=>Q("re"))},".*",10,$8),o("button",{class:te(["vs-find-btn",{on:I.value}]),title:s(y)("vsFindWord"),onClick:q[4]||(q[4]=Te=>Q("word"))},"|w|",10,S8),q[7]||(q[7]=o("span",{class:"vs-find-vsep"},null,-1)),o("button",{class:"vs-find-btn",title:s(y)("vsFindPrev"),onClick:Ne},"↑",8,E8),o("button",{class:"vs-find-btn",title:s(y)("vsFindNext"),onClick:we},"↓",8,T8),o("button",{class:te(["vs-find-btn",{on:$.value}]),title:s(y)("vsFindToggleReplace"),onClick:q[5]||(q[5]=Te=>$.value=!$.value)},"⇅",10,D8),o("button",{class:"vs-find-btn",title:s(y)("vsFindClose"),onClick:je},"×",8,F8)]),$.value?(l(),r("div",R8,[kt(o("input",{"onUpdate:modelValue":q[6]||(q[6]=Te=>G.value=Te),class:"vs-find-input",placeholder:s(y)("vsReplacePlaceholder"),onKeydown:[bt(_e(J,["prevent"]),["enter"]),bt(_e(je,["prevent"]),["esc"])]},null,40,N8),[[Lt,G.value]]),o("button",{class:"vs-find-btn",title:s(y)("vsFindReplace"),onClick:J},"⏎",8,P8),o("button",{class:"vs-find-btn",title:s(y)("vsFindReplaceAll"),onClick:z},"≡",8,A8)])):N("",!0)])):N("",!0)],32))}}),I8=xt(B8,[["__scopeId","data-v-2301eccb"]]),j8={class:"fsp"},V8={class:"fsp-bar"},z8=["title"],U8=["disabled"],H8=["disabled"],W8={key:0,class:"fsp-newrow"},G8=["placeholder"],q8=["disabled"],K8={key:1,class:"fsp-error"},X8={class:"fsp-main"},Y8={class:"fsp-side"},J8={class:"fsp-group"},Z8={class:"fsp-group-title"},Q8=["title","onClick"],eE={class:"fsp-side-name"},tE={key:0,class:"fsp-side-empty"},nE={class:"fsp-group"},sE={class:"fsp-group-title"},oE=["title","onClick"],aE={class:"fsp-side-name"},iE={key:0,class:"fsp-side-empty"},lE={key:0,class:"fsp-group"},rE={class:"fsp-group-title"},cE=["title","onClick"],uE=["title"],dE={class:"fsp-side-name"},fE={class:"fsp-content"},pE={key:0,class:"fsp-crumbs"},vE={key:0,class:"fsp-sep"},hE=["onClick"],mE={class:"fsp-list"},gE={key:0,class:"fsp-loading"},yE={key:1,class:"fsp-error"},wE=["onClick","onDblclick"],bE={class:"fsp-name"},_E={key:0,class:"fsp-empty"},kE={key:2,class:"fsp-namerow"},xE={class:"fsp-namelabel"},CE=["placeholder"],$E=["title"],SE={value:""},EE=["value"],TE={key:4,class:"fsp-manual"},DE=["placeholder"],FE=["disabled"],RE={class:"fsp-foot"},NE={class:"fsp-hint"},PE=["disabled"],AE=["disabled","title"],Hi="vscode",Qa=ht({__name:"PathPickerDialog",props:{modelValue:{type:Boolean},mode:{},initialDir:{},initialName:{}},emits:["update:modelValue","confirm"],setup(t,{emit:e}){const n=t,i=e,c=B({get:()=>n.modelValue,set:M=>i("update:modelValue",M)}),u=B(()=>n.mode==="file"),v=B(()=>u.value?y("vsSaveAsTitle"):y("vsPickFolderTitle")),d=m(null),p=m(!1),w=m(void 0),b=m(""),x=m(!1),O=m(""),L=m(null),P=m(!1),j=m(void 0),U=m(""),$=m(""),ee=m(null),G=m([]),A=B(()=>d.value?.crumbs??[]),pe=B(()=>d.value?.entries??[]),I=B(()=>d.value?.path||null),ve=B(()=>{const M=pe.value;return!u.value||!$.value?M:M.filter(T=>T.isDir||T.name.toLowerCase().endsWith($.value))}),$e=B(()=>{const M=n.initialName??"",T=M.lastIndexOf(".");return T>0?M.slice(T).toLowerCase():""}),me=B(()=>{const M=U.value.trim().toLowerCase();return M?pe.value.some(T=>!T.isDir&&T.name.toLowerCase()===M):!1}),ne=B(()=>{const M=U.value.trim();return M?Q(M)?M:ge(I.value,M):""}),le=B(()=>{const M=U.value.trim();return!M||/[\\/]$/.test(M)?!1:Q(M)||!!I.value}),Se=B(()=>G.value.filter(M=>M.type==="drive")),Ve=new Set(["pictures","music","videos","gallery"]),we=B(()=>G.value.filter(M=>M.type!=="drive"&&M.type!=="recycle"&&!Ve.has(M.type)&&!!M.path));function Ne(M){const T=za(M.id),K=T==="online"?y("sshStatusOnline"):T==="offline"?y("sshStatusOffline"):"",S=T==="offline"?cl(M.id):"";return K&&S?`${K}：${S}`:K||`${M.user}@${M.host}:${M.port||22}`}function W(M){switch(M.type){case"drive":return Ku(M);case"home":return y("navHome");case"desktop":return y("desktopEntry");case"download":return y("downloadEntry");case"documents":return y("documentEntry");case"pictures":return y("pictureEntry");case"music":return y("musicEntry");case"videos":return y("videoEntry");case"gallery":return y("navGallery");case"workspace":return y("workspaceEntry");default:return M.name}}function J(M){switch(M.type){case"home":return"ico-home";case"desktop":return"ico-desktop";case"download":return"ico-download";case"documents":return"ico-doc";case"pictures":case"gallery":return"ico-pic";case"music":return"ico-music";case"videos":return"ico-video";case"workspace":return"ico-folder";default:return"ico-dir"}}function z(){return window.__DSH_FILE_WORKBENCH__}function Q(M){return/^[a-zA-Z]:[\\/]/.test(M)||M.startsWith("/")||M.startsWith("\\\\")||Wt(M)}function ge(M,T){if(!M)return T;if(Wt(M))return Xr(M,T);const K=M.includes("\\")?"\\":"/";return`${M.replace(/[\\/]+$/,"")}${K}${T}`}const je=B(()=>!!I.value&&Wt(I.value)),Ke=B(()=>je.value?!0:A.value.length>=2);function Qe(M){const T=M.replace(/\\/g,"/").replace(/\/+$/,"");if(!T)return[];const K=/^[A-Za-z]:/.test(T),S=T.split("/").filter(Boolean),q=[];if(K){const re=S.shift();q.push({name:re,path:`${re}/`,hidden:!1})}let Te=K?`${q[0].path.replace(/\/$/,"")}`:"";for(const re of S)Te=`${Te}/${re}`,q.push({name:re,path:Te,hidden:!1});return q}async function ye(){const M=await Wc();return{path:"",home:"",crumbs:[],entries:(M.drives??[]).map(T=>({name:Is(T),path:T.path,hidden:!1,isDir:!0}))}}async function be(M){if(!M)return await ye();const T=await Ea(M);return{path:M,home:"",crumbs:Qe(M),entries:(T.entries??[]).filter(K=>K.isDir&&!K.hidden).sort((K,S)=>K.name.localeCompare(S.name,"zh")).map(K=>({name:K.name,path:K.path,hidden:!!K.hidden,isDir:!0}))}}async function Ye(M){if(!M)return await ye();const K=((await Ea(M)).entries??[]).map(S=>({name:S.name,path:S.path,hidden:!!S.hidden,isDir:!!S.isDir})).sort((S,q)=>S.isDir===q.isDir?S.name.localeCompare(q.name,"zh"):S.isDir?-1:1);return{path:M,home:"",crumbs:Qe(M),entries:K}}async function st(M){const K=((await Ea(M,Hi)).entries??[]).filter(q=>(u.value?!0:q.isDir)&&!q.hidden).sort((q,Te)=>u.value&&q.isDir!==Te.isDir?Number(Te.isDir)-Number(q.isDir):q.name.localeCompare(Te.name,"zh")).map(q=>({name:q.name,path:q.path,hidden:!!q.hidden,isDir:!!q.isDir})),S=($u(M)??[{name:M,path:M}]).map(q=>({name:q.name,path:q.path,hidden:!1}));return{path:M,home:"",crumbs:S,entries:K}}async function fe(M){p.value=!0,w.value=void 0,L.value=null;try{if(M&&Wt(M)){d.value=await st(M);return}if(u.value){d.value=await Ye(M);return}const T=z();if(T?.listDirectory){const K=await T.listDirectory(M);d.value={path:K.path,home:K.home,crumbs:K.crumbs??[],entries:(K.entries??[]).map(S=>({name:S.name,path:S.path,hidden:!!S.hidden,isDir:!0}))};return}d.value=await be(M)}catch(T){d.value=null,w.value=T.message}finally{p.value=!1}}function ke(M){!M||M===I.value||fe(M)}function qe(M){L.value=M.path,u.value&&!M.isDir&&(U.value=M.name)}function ce(M){if(M.isDir){if(M.path===I.value)return;fe(M.path);return}u.value&&(U.value=M.name,Le())}function Ie(M){M!==I.value&&fe(M===""?void 0:M)}function rt(){const M=I.value;if(!M)return;if(Wt(M)){const S=Ha(M);fe(S||void 0);return}const T=A.value;if(T.length<2)return;const K=T[T.length-2];fe(K.hidden?void 0:K.path)}function yt(){x.value=!x.value,j.value=void 0,x.value&&(O.value="")}async function ut(){const M=O.value.trim(),T=I.value;if(!(!M||!T)){P.value=!0,j.value=void 0;try{const K=z();Wt(T)?await Aa(Xr(T,M),Hi):K?.createDirectory?await K.createDirectory(T,M):await Aa(`${T.replace(/[\\/]+$/,"")}/${M}`),x.value=!1,O.value="",await fe(T)}catch(K){j.value=K.message}finally{P.value=!1}}}function it(){const M=L.value||I.value;M&&(i("confirm",M),c.value=!1)}function Le(){if(!le.value)return;const M=ne.value;M&&(i("confirm",M),c.value=!1)}function H(){const M=b.value.trim();M&&(i("confirm",M),c.value=!1)}async function R(){Us();try{const M=await Hc(Hi);G.value=M.items??[]}catch{G.value=[]}}function Z(){w.value=void 0,j.value=void 0,x.value=!1,O.value="",b.value=n.initialDir??"",U.value=n.initialName??"",$.value="",R(),fe(n.initialDir||void 0),u.value&&Dt(()=>{const M=ee.value;M&&(M.focus(),M.setSelectionRange(0,$e.value?M.value.length-$e.value.length:M.value.length))})}function Ee(){d.value=null,b.value="",U.value="",$.value=""}return(M,T)=>{const K=rn;return l(),Xe(K,{modelValue:c.value,"onUpdate:modelValue":T[7]||(T[7]=S=>c.value=S),title:v.value,width:"720px","append-to-body":"",class:"fsp-dialog",onOpen:Z,onClosed:Ee},{footer:se(()=>[o("div",RE,[o("span",NE,a(u.value?s(y)("vsSaveAsHint"):s(y)("vsPickEnterHint")),1),T[10]||(T[10]=o("span",{class:"fsp-foot-spacer"},null,-1)),o("button",{class:"fsp-btn",onClick:T[6]||(T[6]=S=>c.value=!1)},a(s(y)("vsCancel")),1),u.value?(l(),r("button",{key:0,class:"fsp-btn primary",disabled:!le.value,onClick:Le},a(s(y)("vsSave")),9,PE)):(l(),r("button",{key:1,class:"fsp-btn primary",disabled:!L.value&&!I.value||p.value,title:L.value||I.value||void 0,onClick:it},a(s(y)("vsPickConfirm")),9,AE))])]),default:se(()=>[o("div",j8,[o("div",V8,[o("div",{class:"fsp-path",title:I.value||void 0},a(I.value||s(y)("vsComputer")),9,z8),o("button",{class:"fsp-btn sm",disabled:p.value||!Ke.value,onClick:rt},a(s(y)("vsUp")),9,U8),o("button",{class:"fsp-btn sm",disabled:p.value||!I.value,onClick:yt},a(s(y)("vsNewFolderBtn")),9,H8)]),x.value?(l(),r("div",W8,[kt(o("input",{"onUpdate:modelValue":T[0]||(T[0]=S=>O.value=S),class:"fsp-input",placeholder:s(y)("vsNewFolderName"),onKeyup:[bt(ut,["enter"]),T[1]||(T[1]=bt(S=>x.value=!1,["esc"]))]},null,40,G8),[[Lt,O.value]]),o("button",{class:"fsp-btn primary sm",disabled:P.value||!O.value.trim(),onClick:ut},a(s(y)("confirmOk")),9,q8),o("button",{class:"fsp-btn sm",onClick:T[2]||(T[2]=S=>x.value=!1)},a(s(y)("vsCancel")),1)])):N("",!0),j.value?(l(),r("div",K8,a(j.value),1)):N("",!0),o("div",X8,[o("div",Y8,[o("div",J8,[o("div",Z8,a(s(y)("myComputer")),1),(l(!0),r(ae,null,Ae(Se.value,S=>(l(),r("div",{key:S.path,class:te(["fsp-side-row",{active:S.path===I.value}]),title:S.path,onClick:q=>ke(S.path)},[T[8]||(T[8]=o("span",{class:"fsp-ico ico-drive"},null,-1)),o("span",eE,a(W(S)),1)],10,Q8))),128)),Se.value.length===0?(l(),r("div",tE,a(s(y)("vsLoading")),1)):N("",!0)]),o("div",nE,[o("div",sE,a(s(y)("vsQuickAccess")),1),(l(!0),r(ae,null,Ae(we.value,S=>(l(),r("div",{key:S.type+S.path,class:te(["fsp-side-row",{active:S.path===I.value}]),title:S.path,onClick:q=>ke(S.path)},[o("span",{class:te(["fsp-ico",J(S)])},null,2),o("span",aE,a(W(S)),1)],10,oE))),128)),we.value.length===0?(l(),r("div",iE,a(s(y)("vsEmptyDir")),1)):N("",!0)]),s(an).length>0?(l(),r("div",lE,[o("div",rE,a(s(y)("sshNavGroup")),1),(l(!0),r(ae,null,Ae(s(an),S=>(l(),r("div",{key:S.id,class:te(["fsp-side-row",{active:s(Vs)(S.id)===I.value}]),title:`${S.user}@${S.host}:${S.port||22}`,onClick:q=>ke(s(Vs)(S.id))},[o("span",{class:te(["fsp-dot",`dot-${s(za)(S.id)}`]),title:Ne(S)},null,10,uE),T[9]||(T[9]=o("span",{class:"fsp-ico ico-globe"},null,-1)),o("span",dE,a(S.name||`${S.user}@${S.host}`),1)],10,cE))),128))])):N("",!0)]),o("div",fE,[A.value.length>1?(l(),r("div",pE,[(l(!0),r(ae,null,Ae(A.value,(S,q)=>(l(),r(ae,{key:S.path+"#"+q},[q>0?(l(),r("span",vE,"›")):N("",!0),o("span",{class:te(["fsp-crumb",{active:q===A.value.length-1}]),onClick:Te=>Ie(S.path)},a(S.name),11,hE)],64))),128))])):N("",!0),o("div",mE,[p.value?(l(),r("div",gE,a(s(y)("vsLoading")),1)):w.value?(l(),r("div",yE,a(w.value),1)):(l(),r(ae,{key:2},[(l(!0),r(ae,null,Ae(ve.value,S=>(l(),r("div",{key:S.path,class:te(["fsp-row",{dim:S.hidden,selected:S.path===L.value}]),onClick:q=>qe(S),onDblclick:q=>ce(S)},[o("span",{class:te(["fsp-ico",S.isDir?"ico-dir":"ico-file"])},null,2),o("span",bE,a(S.name),1)],42,wE))),128)),ve.value.length===0?(l(),r("div",_E,a(s(y)("vsEmptyDir")),1)):N("",!0)],64))])])]),u.value?(l(),r("div",kE,[o("span",xE,a(s(y)("vsFileName")),1),kt(o("input",{ref_key:"nameInputRef",ref:ee,"onUpdate:modelValue":T[3]||(T[3]=S=>U.value=S),class:"fsp-input",placeholder:s(y)("vsFileNamePlaceholder"),onKeyup:bt(Le,["enter"])},null,40,CE),[[Lt,U.value]]),kt(o("select",{"onUpdate:modelValue":T[4]||(T[4]=S=>$.value=S),class:"fsp-input fsp-select",title:s(y)("vsFileType")},[o("option",SE,a(s(y)("vsFilterAll")),1),$e.value?(l(),r("option",{key:0,value:$e.value},a(s(y)("vsFilterExt",{ext:$e.value})),9,EE)):N("",!0)],8,$E),[[pf,$.value]])])):N("",!0),u.value?(l(),r("div",{key:3,class:te(["fsp-hintline",{warn:me.value}])},[me.value?(l(),r(ae,{key:0},[ue(a(s(y)("vsSaveAsExists")),1)],64)):(l(),r(ae,{key:1},[ue(a(ne.value||s(y)("vsSaveAsHint")),1)],64))],2)):N("",!0),u.value?N("",!0):(l(),r("div",TE,[kt(o("input",{"onUpdate:modelValue":T[5]||(T[5]=S=>b.value=S),class:"fsp-input",placeholder:s(y)("vsFolderPath"),onKeyup:bt(H,["enter"])},null,40,DE),[[Lt,b.value]]),o("button",{class:"fsp-btn sm",disabled:!b.value.trim(),onClick:H},a(s(y)("vsPickInput")),9,FE)]))])]),_:1},8,["modelValue","title"])}}}),ME={key:0,class:"vs-gitbar"},OE={class:"vs-gitbar-head"},LE=["title"],BE={class:"vs-gitbar-title"},IE={key:0,class:"vs-gitbar-count"},jE=["title"],VE={class:"vs-gitbar-list"},zE={key:0,class:"vs-gitbar-empty"},UE={key:1,class:"vs-gitbar-empty"},HE=["title","onClick"],WE=["width"],GE=["x1","x2","stroke"],qE=["x1","x2","y2","stroke"],KE=["x1","y1","x2","stroke"],XE=["d","stroke"],YE=["cx","cy","r","fill","stroke"],JE={key:1,class:"vs-gitbar-dot","aria-hidden":"true"},ZE={class:"vs-gitbar-subject"},QE={key:2,class:"vs-gitbar-refs"},e3={class:"vs-gitbar-meta"},t3={key:0,class:"vs-gitbar-files"},n3={key:0,class:"vs-gitbar-empty"},s3={key:0,class:"vs-gitbar-empty"},o3=["title"],a3={class:"name"},i3={class:"dir"},l3=["title","onClick"],as=24,Ls=6,r3=ht({__name:"VSGitBar",emits:["open-diff"],setup(t,{emit:e}){const n=Ol(mi)??ur(),i=m(null),c=B(()=>i.value!==null),u=m(""),v=m(""),d=m([]),p=m(!1);function w(W){return W*xs+xs/2}function b(W,J){const z=as/2,Q=as*.82;return`M ${w(W)} ${z} C ${w(W)} ${Q}, ${w(J)} ${Q}, ${w(J)} ${as}`}function x(W){return W.commit.refs.some(J=>J.kind==="head")}const O=B(()=>i.value==="git"?dd(d.value).map(W=>({commit:W.commit,graph:W})):d.value.map(W=>({commit:W}))),L=m(""),P=gt({}),j=gt({});function U(W){return P[W]??[]}function $(W){const J=Math.max(W.lastIndexOf("/"),W.lastIndexOf("\\"));return J>=0?W.slice(J+1):W}function ee(W){const J=Math.max(W.lastIndexOf("/"),W.lastIndexOf("\\"));return J>=0?W.slice(0,J):""}function G(W){if(L.value===W.hash){L.value="";return}L.value=W.hash,we(W)}const A=e;async function pe(W,J){let z=[];try{if(i.value==="git"){const Q=await Oo(u.value,["show","--no-color","--format=",W.hash,"--",J.path]);z=Q.code===0&&Q.stdout.trim()?Q.stdout.split(`
`):[]}else z=await I(W.hash,J.path)}catch{z=[]}A("open-diff",{title:`${$(J.path)} · ${W.short}`,lines:z})}async function I(W,J){const z=W.replace(/^r/,""),Q=await Jt(u.value,["diff","-c",z,"--","^"+J]);return Q.code===0&&Q.stdout.trim()?Q.stdout.split(`
`):[]}async function ve(W){if(!(P[W.hash]||j[W.hash])){j[W.hash]=!0;try{const J=await Oo(u.value,["diff-tree","--no-commit-id","--name-status","-r","--root",W.hash]);P[W.hash]=J.code===0?$e(J.stdout):[]}catch{P[W.hash]=[]}finally{j[W.hash]=!1}}}function $e(W){const J=[];for(const z of W.split(`
`)){if(!z.trim())continue;const Q=z.split("	");Q.length<2||J.push({status:Q[0][0]??"?",path:Q[Q.length-1]})}return J}function me(W){const J=[];try{new DOMParser().parseFromString(W,"application/xml").querySelectorAll("logentry").forEach(Q=>{const ge=[];Q.querySelectorAll("paths > path").forEach(be=>{const Ye=be.getAttribute("action"),st=be.textContent;st&&ge.push({status:Ye??"",path:st})});const je="r"+(Q.getAttribute("revision")??""),Ke=Q.querySelector("author")?.textContent??"—",Qe=Q.querySelector("date")?.textContent??"",ye=Q.querySelector("msg")?.textContent??"";P[je]=ge,J.push({hash:je,short:je,author:Ke,email:"",ts:Qe?Math.floor(new Date(Qe).getTime()/1e3):0,date:Qe?new Date(Qe).toLocaleString():"",subject:(ye.split(`
`)[0]??"").trim()||je,parents:[],refs:[]})})}catch{}return J}let ne=0;async function le(){if(!i.value||!u.value)return;const W=++ne,J=i.value,z=u.value;p.value=!0;try{if(J==="git"){const Q=await Oo(z,["log","--max-count=30",`--pretty=format:${kl}`]);if(W!==ne)return;d.value=Q.code===0?xl(Q.stdout):[]}else{const Q=await Jt(z,["log","--xml","-v","-l","30"]);if(W!==ne)return;d.value=Q.code===0?me(Q.stdout):[]}}catch{if(W!==ne)return;d.value=[]}finally{W===ne&&(p.value=!1)}}let Se=0;async function Ve(){const W=++Se,J=n.state.projectDir;if(!J||!li(J)){i.value=null,d.value=[];return}p.value=!0,L.value="",d.value=[];for(const z of Object.keys(P))delete P[z];try{const z=await Ho(J);if(W!==Se)return;if(z.inRepo&&z.repo)i.value="git",u.value=z.repo,v.value=z.branch||"HEAD";else{const Q=await fs(J);if(W!==Se)return;Q.inRepo&&Q.root&&Q.svnAvailable?(i.value="svn",u.value=Q.root,v.value=Q.revision?"r"+Q.revision:"svn"):(i.value=null,d.value=[])}}catch{if(W!==Se)return;i.value=null,d.value=[]}finally{W===Se&&(p.value=!1)}i.value&&le()}async function we(W){if(i.value==="git")return ve(W)}Ze(()=>n.state.projectDir,()=>{Ve()},{immediate:!0});async function Ne(){ks("git"),ks("svn"),await Ve(),i.value&&le()}return(W,J)=>c.value?(l(),r("div",ME,[o("div",OE,[h(oe,{name:i.value==="svn"?"clock":"git",size:12},null,8,["name"]),o("span",{class:te(["vs-gitbar-branch",{detached:i.value==="svn"}]),title:u.value},a(v.value),11,LE),o("span",BE,a(i.value==="svn"?"SVN · "+s(y)("vsGitHistory"):s(y)("vsGitHistory")),1),d.value.length?(l(),r("span",IE,a(d.value.length),1)):N("",!0),J[0]||(J[0]=o("span",{class:"vs-gitbar-fill"},null,-1)),o("button",{class:"vs-gitbar-act",title:s(y)("vsGitRefresh"),onClick:Ne},[h(oe,{name:"refresh",size:12,class:te({spin:p.value})},null,8,["class"])],8,jE)]),o("div",VE,[p.value&&!O.value.length?(l(),r("div",zE,a(s(y)("vsLoading")),1)):O.value.length?(l(!0),r(ae,{key:2},Ae(O.value,z=>(l(),r(ae,{key:z.commit.hash},[o("div",{class:te(["vs-gitbar-row",{open:L.value===z.commit.hash}]),title:z.commit.subject,onClick:Q=>G(z.commit)},[z.graph?(l(),r("span",{key:0,class:"vs-gitbar-lanes",style:_t({width:`${Math.min(z.graph.width,Ls)*s(xs)}px`})},[(l(),r("svg",{width:Math.min(z.graph.width,Ls)*s(xs),height:as,"aria-hidden":"true"},[(l(!0),r(ae,null,Ae(z.graph.through.filter(Q=>Q.lane<Ls),(Q,ge)=>(l(),r("line",{key:"t"+ge,x1:w(Q.lane),y1:0,x2:w(Q.lane),y2:as,stroke:s(Kn)(Q.color)},null,8,GE))),128)),z.graph.topLine&&z.graph.lane<Ls?(l(),r("line",{key:0,x1:w(z.graph.lane),y1:0,x2:w(z.graph.lane),y2:as/2,stroke:s(Kn)(z.graph.laneColor)},null,8,qE)):N("",!0),(l(!0),r(ae,null,Ae(z.graph.bends.filter(Q=>Q.from<Ls&&Q.to<Ls),(Q,ge)=>(l(),r(ae,{key:"b"+ge},[Q.from===Q.to?(l(),r("line",{key:0,x1:w(Q.from),y1:as/2,x2:w(Q.to),y2:as,stroke:s(Kn)(Q.color)},null,8,KE)):(l(),r("path",{key:1,d:b(Q.from,Q.to),fill:"none",stroke:s(Kn)(Q.color)},null,8,XE))],64))),128)),z.graph.lane<Ls?(l(),r("circle",{key:1,cx:w(z.graph.lane),cy:as/2,r:x(z.graph)?4:3,fill:s(Kn)(z.graph.laneColor),stroke:x(z.graph)?"var(--dsh-bg, #0d1117)":"none","stroke-width":"1.5"},null,8,YE)):N("",!0)],8,WE))],4)):(l(),r("span",JE)),o("span",ZE,a(z.commit.subject),1),z.commit.refs.length?(l(),r("span",QE,[(l(!0),r(ae,null,Ae(z.commit.refs,Q=>(l(),r("span",{key:Q.kind+Q.label,class:te(["vs-gitbar-ref","rf-"+Q.kind])},a(Q.label),3))),128))])):N("",!0),o("span",e3,a(z.commit.author),1)],10,HE),L.value===z.commit.hash?(l(),r("div",t3,[j[z.commit.hash]?(l(),r("div",n3,a(s(y)("vsLoading")),1)):(l(),r(ae,{key:1},[U(z.commit.hash).length?N("",!0):(l(),r("div",s3,a(s(y)("gitCommitNoFiles")),1)),(l(!0),r(ae,null,Ae(U(z.commit.hash),(Q,ge)=>(l(),r("div",{key:ge,class:"vs-gitbar-file",title:Q.path},[o("span",{class:te(["st","s-"+Q.status.toLowerCase()])},a(Q.status),3),h(oe,{name:"fileText",size:11}),o("span",a3,a($(Q.path)),1),o("span",i3,a(ee(Q.path)),1),o("button",{class:"vs-gitbar-act vs-gitbar-file-open",title:s(y)("vsGitFileDiff"),onClick:_e(je=>pe(z.commit,Q),["stop"])},[h(oe,{name:"fileOut",size:11})],8,l3)],8,o3))),128))],64))])):N("",!0)],64))),128)):(l(),r("div",UE,a(s(y)("gitLogEmpty")),1))])])):N("",!0)}}),c3=xt(r3,[["__scopeId","data-v-955f5249"]]),xd="dsh-file-workbench.vscode.search.prefs",Wi={caseSensitive:!1,wholeWord:!1,regex:!1,preserveCase:!0,viewMode:"list",replaceOpen:!1,advancedOpen:!1};function u3(){try{const t=localStorage.getItem(xd);return t?{...Wi,...JSON.parse(t)}:{...Wi}}catch{return{...Wi}}}function d3(){return{q:"",include:"",exclude:"",replacement:"",outcome:null,searched:!1}}const Nl=gt(u3()),Pl=gt(new Map);function f3(t,e){Nl[t]=e;try{localStorage.setItem(xd,JSON.stringify(Nl))}catch{}}function Cd(t){let e=Pl.get(t);return e||(e=d3(),Pl.set(t,e)),e}function p3(t,e){const n=Cd(t);Object.assign(n,e)}function v3(t){Pl.delete(t)}function h3(){return{prefs:Nl,setPref:f3,getProject:Cd,saveProject:p3,clearProject:v3}}const m3={class:"vs-sp"},g3={class:"vs-sp-titlebar"},y3={class:"vs-sp-title"},w3={class:"vs-sp-actions"},b3=["title"],_3=["title","disabled"],k3=["title","disabled"],x3=["title","disabled"],C3=["title","disabled"],$3={class:"vs-sp-head"},S3={class:"vs-sp-inputwrap"},E3=["placeholder"],T3=["title"],D3=["title"],F3=["title"],R3=["title"],N3={key:0,class:"vs-sp-inputwrap vs-sp-replacerow"},P3=["placeholder","onKeydown"],A3=["title"],M3=["title","disabled"],O3={key:0,class:"vs-sp-adv"},L3={class:"vs-sp-field"},B3={class:"vs-sp-field-label"},I3=["placeholder","title"],j3={class:"vs-sp-field"},V3={class:"vs-sp-field-label"},z3=["placeholder","title"],U3={key:1,class:"vs-sp-summary"},H3={key:0,class:"vs-sp-trunc"},W3={key:1,class:"vs-sp-trunc"},G3={key:2,class:"vs-sp-trunc"},q3={key:2,class:"vs-sp-list"},K3=["title","onClick"],X3={class:"vs-sp-name"},Y3={class:"vs-sp-dir"},J3={class:"vs-sp-count"},Z3=["title","onClick"],Q3={class:"vs-sp-ln"},e6={class:"vs-sp-text"},t6={key:0},n6=["title","onClick"],s6={class:"vs-sp-name"},o6={class:"vs-sp-count"},a6=["title","onClick"],i6={class:"vs-sp-name"},l6={class:"vs-sp-count"},r6=["title","onClick"],c6={class:"vs-sp-ln"},u6={class:"vs-sp-text"},d6={key:0},f6=ht({__name:"VSSearchPanel",props:{projectDir:{}},emits:["open"],setup(t,{emit:e}){const n=t,i=e,c=h3(),{prefs:u}=c,v=c.getProject(n.projectDir),d=m(v.q),p=m(v.include),w=m(v.exclude),b=m(v.replacement),x=m(v.outcome),O=m(v.searched),L=m(u.caseSensitive),P=m(u.wholeWord),j=m(u.regex),U=m(u.preserveCase),$=m(u.viewMode),ee=m(u.replaceOpen),G=m(u.advancedOpen),A=m(!1),pe=m(!1),I=m(new Set),ve=m(new Set(""));let $e=0,me=0;const ne=B(()=>d.value.trim().length>=2),le=B(()=>!!x.value&&x.value.files.length>0),Se=B(()=>ne.value&&le.value&&b.value.length>0&&!Wt(n.projectDir));function Ve(){return{path:n.projectDir,caseSensitive:L.value,regex:j.value,wholeWord:P.value,include:p.value.trim()||void 0,exclude:w.value.trim()||void 0}}async function we(){const Le=++$e;if(!ne.value){x.value=null,O.value=!1,A.value=!1,Ne();return}A.value=!0;try{const H=await op(d.value.trim(),Ve());if(Le!==$e)return;x.value=H,O.value=!0,I.value=new Set(H.files.length<=8?H.files.map(R=>R.rel):[])}catch{Le===$e&&(x.value=null,O.value=!0)}finally{Le===$e&&(A.value=!1,Ne())}}function Ne(){n.projectDir&&c.saveProject(n.projectDir,{q:d.value,include:p.value,exclude:w.value,replacement:b.value,outcome:x.value,searched:O.value})}function W(){me&&window.clearTimeout(me),me=window.setTimeout(()=>void we(),300)}function J(){L.value=!L.value,c.setPref("caseSensitive",L.value),O.value&&we()}function z(){P.value=!P.value,c.setPref("wholeWord",P.value),O.value&&we()}function Q(){j.value=!j.value,c.setPref("regex",j.value),O.value&&we()}function ge(){$.value=$.value==="list"?"tree":"list",c.setPref("viewMode",$.value)}function je(){U.value=!U.value,c.setPref("preserveCase",U.value)}function Ke(){ee.value=!ee.value,c.setPref("replaceOpen",ee.value)}function Qe(){G.value=!G.value,c.setPref("advancedOpen",G.value)}function ye(){const Le=x.value;if(Le)if($.value==="list")I.value=new Set(Le.files.map(H=>H.rel));else{const H=new Set("");for(const R of Le.files)Ye(H,R.rel);ve.value=H}}function be(){$.value==="list"?I.value=new Set:ve.value=new Set("")}function Ye(Le,H){const R=H.split("/");for(let Z=1;Z<R.length;Z++)Le.add(R.slice(0,Z).join("/"))}function st(Le){const H=new Set(ve.value);H.has(Le)?H.delete(Le):H.add(Le),ve.value=H}const fe=B(()=>{const Le=x.value;if(!Le||$.value!=="tree")return[];const H={name:"",path:"",dirs:new Map,files:[],count:0};for(const Ee of Le.files){const M=Ee.rel.split("/"),T={name:M[M.length-1],rel:Ee.rel,count:Ee.hits.length};let K=H;K.count+=Ee.hits.length;for(let S=0;S<M.length-1;S++){const q=M[S],Te=K.path?`${K.path}/${q}`:q;let re=K.dirs.get(q);re||(re={name:q,path:Te,dirs:new Map,files:[],count:0},K.dirs.set(q,re)),K=re,K.count+=Ee.hits.length}K.files.push(T)}const R=[],Z=(Ee,M)=>{const T=ve.value.has(Ee.path);if(M>0&&R.push({kind:"dir",path:Ee.path,name:Ee.name,depth:M,count:Ee.count,open:T}),!(!T&&M>0)){for(const K of[...Ee.dirs.values()].sort((S,q)=>S.name.localeCompare(q.name)))Z(K,M+1);for(const K of[...Ee.files].sort((S,q)=>S.name.localeCompare(q.name)))R.push({kind:"file",path:K.rel,name:K.name,dir:it(K.rel),depth:M,count:K.count,open:I.value.has(K.rel)})}};return Z(H,0),R});function ke(){me&&window.clearTimeout(me),$e++,d.value="",b.value="",p.value="",w.value="",x.value=null,O.value=!1,A.value=!1,I.value=new Set,ve.value=new Set(""),c.clearProject(n.projectDir)}function qe(Le){const H=new Set(I.value);H.has(Le)?H.delete(Le):H.add(Le),I.value=H}function ce(Le){return x.value?.files.find(H=>H.rel===Le)?.hits??[]}async function Ie(){if(!Se.value||pe.value)return;const Le=x.value;if(!Le)return;const H=Le.total,R=Le.files.length,Z=y("vsReplaceConfirm",{files:String(R),n:String(H),q:d.value.trim(),r:b.value});if(window.confirm(Z)){pe.value=!0;try{const Ee=await Uc(d.value.trim(),b.value,{scope:n.projectDir,caseSensitive:L.value,regex:j.value,wholeWord:P.value,preserveCase:U.value,include:p.value.trim()||void 0,exclude:w.value.trim()||void 0});Ee.replacements>0?X("ok",y("vsReplaceDone",{files:String(Ee.files),n:String(Ee.replacements)})):X("info",y("vsReplaceNone")),await we()}catch(Ee){console.warn("[dsh-file-workbench] replace failed:",Ee)}finally{pe.value=!1}}}function rt(Le){const H=c.getProject(Le);d.value=H.q,p.value=H.include,w.value=H.exclude,b.value=H.replacement,x.value=H.outcome,O.value=H.searched,I.value=new Set,ve.value=new Set("")}Ze(()=>n.projectDir,Le=>rt(Le)),ln(()=>{Ne(),ne.value&&!x.value&&we()}),Pt(()=>{me&&window.clearTimeout(me)});function yt(Le){const H=d.value.trim();if(!H)return[{t:Le,hit:!1}];let R;try{R=j.value?H:H.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}catch{return[{t:Le,hit:!1}]}P.value&&(R=`(?<![\\p{L}\\p{N}_])${R}(?![\\p{L}\\p{N}_])`);let Z;try{Z=new RegExp(R,L.value?"gu":"giu")}catch{return[{t:Le,hit:!1}]}const Ee=[];let M=0;for(const T of Le.matchAll(Z))if(T.index>M&&Ee.push({t:Le.slice(M,T.index),hit:!1}),Ee.push({t:T[0]||H,hit:!0}),M=T.index+(T[0]?.length||H.length),T[0]==="")break;return M<Le.length&&Ee.push({t:Le.slice(M),hit:!1}),Ee}const ut=Le=>Le.slice(Le.lastIndexOf("/")+1),it=Le=>{const H=Le.lastIndexOf("/");return H<0?"":Le.slice(0,H)};return(Le,H)=>(l(),r("div",m3,[o("div",g3,[o("span",y3,a(s(y)("vsSearchTitle")),1),o("div",w3,[o("button",{class:"vs-sp-act",title:s(y)("vsViewModeSwitchTitle"),onClick:ge},[h(oe,{name:$.value==="list"?"sort":"folderOpen",size:13},null,8,["name"])],8,b3),o("button",{class:"vs-sp-act",title:s(y)("vsRefreshResults"),disabled:!ne.value,onClick:H[0]||(H[0]=R=>we())},[h(oe,{name:"refresh",size:13})],8,_3),o("button",{class:"vs-sp-act",title:s(y)("vsExpandAll"),disabled:!le.value,onClick:ye},[h(oe,{name:"chevronsDown",size:13})],8,k3),o("button",{class:"vs-sp-act",title:s(y)("vsCollapseAll"),disabled:!le.value,onClick:be},[h(oe,{name:"chevronsUp",size:13})],8,x3),o("button",{class:"vs-sp-act",title:s(y)("vsClearAllResults"),disabled:!O.value&&!d.value,onClick:ke},[h(oe,{name:"close",size:13})],8,C3)])]),o("div",$3,[o("div",S3,[kt(o("input",{"onUpdate:modelValue":H[1]||(H[1]=R=>d.value=R),class:"vs-sp-input",placeholder:s(y)("vsGrepPlaceholder"),onKeydown:H[2]||(H[2]=bt(_e(R=>we(),["prevent"]),["enter"])),onInput:W},null,40,E3),[[Lt,d.value]]),o("button",{class:te(["vs-sp-toggle",{on:L.value}]),title:s(y)("vsGrepCase"),onClick:J},[...H[8]||(H[8]=[o("span",null,"Aa",-1)])],10,T3),o("button",{class:te(["vs-sp-toggle",{on:P.value}]),title:s(y)("vsGrepWholeWord"),onClick:z},[...H[9]||(H[9]=[o("span",null,"ab",-1)])],10,D3),o("button",{class:te(["vs-sp-toggle",{on:j.value}]),title:s(y)("vsGrepRegex"),onClick:Q},[...H[10]||(H[10]=[o("span",null,".*",-1)])],10,F3),o("button",{class:te(["vs-sp-toggle",{on:ee.value}]),title:s(y)("vsToggleReplace"),onClick:Ke},[h(oe,{name:"chevronRight",size:12,class:te(["vs-sp-replace-caret",{open:ee.value}])},null,8,["class"])],10,R3)]),ee.value?(l(),r("div",N3,[kt(o("input",{"onUpdate:modelValue":H[3]||(H[3]=R=>b.value=R),class:"vs-sp-input",placeholder:s(y)("vsGrepReplacePlaceholder"),onKeydown:bt(_e(Ie,["prevent"]),["enter"])},null,40,P3),[[Lt,b.value]]),o("button",{class:te(["vs-sp-toggle",{on:U.value}]),title:s(y)("vsReplacePreserveCase"),onClick:je},[...H[11]||(H[11]=[o("span",null,"AB",-1)])],10,A3),o("button",{class:"vs-sp-btn-replaceall",title:s(y)("vsReplaceAll"),disabled:!Se.value||pe.value,onClick:Ie},[h(oe,{name:"chevronsRight",size:13})],8,M3)])):N("",!0)]),o("div",{class:"vs-sp-divider",onClick:Qe},[h(oe,{name:"chevronRight",size:11,class:te(["vs-sp-div-caret",{open:G.value}])},null,8,["class"])]),G.value?(l(),r("div",O3,[o("div",L3,[o("div",B3,[h(oe,{name:"file",size:12}),o("span",null,a(s(y)("vsFilesToInclude")),1)]),kt(o("input",{"onUpdate:modelValue":H[4]||(H[4]=R=>p.value=R),class:"vs-sp-field-input",placeholder:s(y)("vsFilesToIncludePlaceholder"),title:s(y)("vsFilesToIncludeTitle"),onKeydown:H[5]||(H[5]=bt(_e(R=>we(),["prevent"]),["enter"])),onInput:W},null,40,I3),[[Lt,p.value]])]),o("div",j3,[o("div",V3,[h(oe,{name:"gear",size:12}),o("span",null,a(s(y)("vsFilesToExclude")),1)]),kt(o("input",{"onUpdate:modelValue":H[6]||(H[6]=R=>w.value=R),class:"vs-sp-field-input",placeholder:s(y)("vsFilesToExcludePlaceholder"),title:s(y)("vsFilesToExcludeTitle"),onKeydown:H[7]||(H[7]=bt(_e(R=>we(),["prevent"]),["enter"])),onInput:W},null,40,z3),[[Lt,w.value]])])])):N("",!0),O.value?(l(),r("div",U3,[x.value?(l(),r(ae,{key:0},[o("span",null,a(s(y)("vsGrepSummary",{files:x.value.files.length,n:x.value.total})),1),x.value.truncated?(l(),r("span",H3,a(s(y)("vsGrepTruncated")),1)):N("",!0)],64)):A.value?(l(),r("span",W3,a(s(y)("vsLoading")),1)):(l(),r("span",G3,a(s(y)("vsGrepNoResult")),1))])):N("",!0),x.value?(l(),r("div",q3,[$.value==="list"?(l(!0),r(ae,{key:0},Ae(x.value.files,R=>(l(),r(ae,{key:R.rel},[o("div",{class:te(["vs-sp-file",{open:I.value.has(R.rel)}]),title:R.rel,onClick:Z=>qe(R.rel)},[h(oe,{name:"chevronRight",size:11,class:"vs-sp-caret"}),h(oe,{name:"fileText",size:12}),o("span",X3,a(ut(R.rel)),1),o("span",Y3,a(it(R.rel)),1),o("span",J3,a(R.hits.length),1)],10,K3),I.value.has(R.rel)?(l(!0),r(ae,{key:0},Ae(R.hits,Z=>(l(),r("div",{key:R.rel+":"+Z.ln,class:"vs-sp-hit",title:s(y)("vsGrepOpenAt",{ln:Z.ln}),onClick:Ee=>i("open",R.rel,Z.ln)},[o("span",Q3,a(Z.ln),1),o("span",e6,[(l(!0),r(ae,null,Ae(yt(Z.text),(Ee,M)=>(l(),r(ae,{key:M},[Ee.hit?(l(),r("mark",t6,a(Ee.t),1)):(l(),r(ae,{key:1},[ue(a(Ee.t),1)],64))],64))),128))])],8,Z3))),128)):N("",!0)],64))),128)):(l(!0),r(ae,{key:1},Ae(fe.value,R=>(l(),r(ae,{key:R.kind+":"+R.path},[R.kind==="dir"?(l(),r("div",{key:0,class:te(["vs-sp-file vs-sp-node",{open:R.open}]),style:_t({paddingLeft:8+(R.depth-1)*12+"px"}),title:R.path,onClick:Z=>st(R.path)},[h(oe,{name:"chevronRight",size:11,class:"vs-sp-caret"}),h(oe,{name:R.open?"folderOpen":"folder",size:12},null,8,["name"]),o("span",s6,a(R.name),1),o("span",o6,a(R.count),1)],14,n6)):(l(),r(ae,{key:1},[o("div",{class:te(["vs-sp-file vs-sp-node",{open:R.open}]),style:_t({paddingLeft:8+R.depth*12+"px"}),title:R.path,onClick:Z=>qe(R.path)},[h(oe,{name:"chevronRight",size:11,class:"vs-sp-caret"}),h(oe,{name:"fileText",size:12}),o("span",i6,a(R.name),1),o("span",l6,a(R.count),1)],14,a6),R.open?(l(!0),r(ae,{key:0},Ae(ce(R.path),Z=>(l(),r("div",{key:R.path+":"+Z.ln,class:"vs-sp-hit",style:_t({paddingLeft:26+R.depth*12+"px"}),title:s(y)("vsGrepOpenAt",{ln:Z.ln}),onClick:Ee=>i("open",R.path,Z.ln)},[o("span",c6,a(Z.ln),1),o("span",u6,[(l(!0),r(ae,null,Ae(yt(Z.text),(Ee,M)=>(l(),r(ae,{key:M},[Ee.hit?(l(),r("mark",d6,a(Ee.t),1)):(l(),r(ae,{key:1},[ue(a(Ee.t),1)],64))],64))),128))])],12,r6))),128)):N("",!0)],64))],64))),128))])):N("",!0)]))}}),p6=xt(f6,[["__scopeId","data-v-0328b4ec"]]),wc=1500;function v6(t,e){const n=t.split(`
`),i=e.split(`
`);if(t===e)return{lines:[]};let c=0;for(;c<n.length&&c<i.length&&n[c]===i[c];)c+=1;let u=n.length,v=i.length;for(;u>c&&v>c&&n[u-1]===i[v-1];)u-=1,v-=1;const d=n.slice(c,u),p=i.slice(c,v);if(d.length>wc||p.length>wc)return null;const w=d.length,b=p.length,x=new Int32Array((w+1)*(b+1)),O=(G,A)=>G*(b+1)+A;for(let G=w-1;G>=0;G-=1)for(let A=b-1;A>=0;A-=1)x[O(G,A)]=d[G]===p[A]?x[O(G+1,A+1)]+1:Math.max(x[O(G+1,A)],x[O(G,A+1)]);const L=[];let P=0,j=0;for(;P<w&&j<b;)d[P]===p[j]?(L.push({kind:" ",text:d[P]}),P+=1,j+=1):x[O(P+1,j)]>=x[O(P,j+1)]?(L.push({kind:"-",text:d[P]}),P+=1):(L.push({kind:"+",text:p[j]}),j+=1);for(;P<w;)L.push({kind:"-",text:d[P]}),P+=1;for(;j<b;)L.push({kind:"+",text:p[j]}),j+=1;const U=3,$=["--- 磁盘版本","+++ 未保存改动"];let ee=0;for(;ee<L.length;){if(L[ee].kind===" "){ee+=1;continue}let G=Math.max(0,ee-U);for(;G>0&&L[G].kind===" "&&ee-G<U;)G-=1;let A=ee,pe=0,I=ee;for(;A<L.length;){if(L[A].kind!==" ")pe=0,I=A;else if(pe+=1,pe>=U*2)break;A+=1}const ve=Math.min(L.length,I+1+U),$e=L.slice(G,ve),me=c+G+1,ne=c+G+1;$.push(`@@ -${me} +${ne} @@`);for(const le of $e)$.push(le.kind+le.text);ee=ve}return{lines:$}}const h6=[{id:"@sunjuntao/dsh-fw-find-references",name:"引用查找",version:"0.1.0",description:"DSH 文件编辑器「引用查找」插件：Activity Bar 注入视图，跟随编辑器光标选中词（v5 ctx.editor），用工作台 /grep 全词搜索项目内引用并点击跳转。对标 VS Code Find All References。",code:`window.__ModuleLoader__.load({
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
`}],$d="dsh-fw.userPlugins",Hn=m([]),js=new Map;let bc=!1,Ca=null;async function m6(t,e){await fetch(`${Xn}/plugin-data`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({k:t,v:e})}).catch(()=>{})}async function g6(t){try{return(await(await fetch(`${Xn}/plugin-data?k=${encodeURIComponent(t)}`,{headers:{Accept:"application/json"}})).json().catch(()=>null))?.data??null}catch{return null}}function pr(){Ca&&clearTimeout(Ca),Ca=setTimeout(()=>{Ca=null,m6($d,Hn.value)},300)}async function y6(){const t=await g6($d);return Array.isArray(t)?t:[]}const Na=new Map;function w6(){return{load(t){Na.set(t.id,t)}}}function _c(){return{views:Yu().map(t=>t.id),commands:ar(),status:pi().map(t=>t.id),menu:Yo().map(t=>t.id)}}function b6(t,e){const n=(i,c)=>c.filter(u=>!i.includes(u));return{views:n(t.views,e.views),commands:n(t.commands,e.commands),status:n(t.status,e.status),menu:n(t.menu,e.menu)}}function Al(t){t&&(t.views.forEach(ui),t.commands.forEach(or),t.status.forEach(fi),t.menu.forEach(vi))}function _6(t){const e=window,n=e.__ModuleLoader__,i=new Set(Na.keys());e.__ModuleLoader__=w6();try{(0,eval)(t)}finally{e.__ModuleLoader__=n}const c=[...Na.keys()].filter(v=>!i.has(v)),u=_c();for(const v of c){const d=Na.get(v).factory(()=>{});typeof d?.apply=="function"&&d.apply()}return b6(u,_c())}function Sd(t){return Hn.value.find(e=>e.id===t)}async function gi(t){const e=Sd(t);if(e){Al(js.get(t)),js.delete(t);try{const n=_6(e.code);js.set(t,n),e.enabled=!0,e.error=void 0}catch(n){e.enabled=!1,e.error=n instanceof Error?n.message:String(n),Al(js.get(t)),js.delete(t)}pr()}}function Ed(t){const e=Sd(t);e&&(Al(js.get(t)),js.delete(t),e.enabled=!1,e.error=void 0,pr())}function k6(t){Ed(t),Hn.value=Hn.value.filter(e=>e.id!==t),pr()}function Td(t){return t.trim()}function Dd(t){const e=Hn.value.findIndex(n=>n.id===t.id);e>=0?Hn.value.splice(e,1,t):Hn.value=[...Hn.value,t]}async function x6(t){const e=await t.text(),n=Td(t.name.replace(/\.(c|m)?js$/i,""))||`file-${Date.now()}`;Dd({id:n,name:t.name,source:"file",origin:t.name,code:e,enabled:!1}),await gi(n)}async function C6(t){const e=t.trim();if(!e)return;const n=await fetch(`${Xn}/fetch-plugin`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({url:e})}),i=await n.json().catch(()=>({ok:!1,error:"bad response"}));if(!i.ok||!i.data)throw new Error(i.error||`HTTP ${n.status}`);const{code:c,name:u}=i.data,v=u||e.split("/").pop()||e,d=Td(v.replace(/\.(c|m)?js$/i,""))||`url-${Date.now()}`;Dd({id:d,name:v,source:"url",origin:e,code:c,enabled:!1}),await gi(d)}function $6(t){const e=new Map(t.map(n=>[n.id,n]));for(const n of h6)e.has(n.id)||e.set(n.id,{id:n.id,name:n.name,source:"builtin",origin:n.id,version:n.version,description:n.description,code:n.code,enabled:!1});return[...e.values()]}async function S6(){if(bc||typeof window>"u")return;bc=!0;const t=await y6();Hn.value=$6(t);for(const e of[...Hn.value])e.enabled&&await gi(e.id)}function Fd(){return Hn.value}const E6="host.plugin-manager",Fe="dsh-pm";let kc=!1,xc=!1;function T6(){kc||typeof window>"u"||(kc=!0,nr({id:E6,title:{zh:"插件管理",en:"Plugins"},icon:"puzzle",order:Number.MAX_SAFE_INTEGER,mount(t,e){const n=O6(t,e);return xc||(xc=!0,S6().then(()=>n.rerender())),n.cleanup}}))}function D6(){if(typeof document>"u"||document.getElementById(`${Fe}-styles`))return;const t=`
.${Fe}-view{color:var(--dsh-fg,#c9d1d9);font-size:13px;}
.${Fe}-root{display:flex;flex-direction:column;min-height:100%;padding:14px 12px 20px;gap:14px;}

/* ---- header ---- */
.${Fe}-hdr{display:flex;align-items:center;gap:10px;}
.${Fe}-logo{width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#388bfd33,#a371f733);border:1px solid var(--dsh-border,#30363d);}
.${Fe}-logo svg{width:20px;height:20px;color:#a371f7;}
.${Fe}-title{font-size:16px;font-weight:700;line-height:1.2;}
.${Fe}-sub{font-size:11px;color:var(--dsh-fg-dim,#8b949e);margin-top:1px;}

/* ---- stats bar ---- */
.${Fe}-stats{display:flex;gap:10px;}
.${Fe}-stat{flex:1;padding:8px 10px;border-radius:8px;background:var(--dsh-bg2,#161b22);border:1px solid var(--dsh-border,#30363d);text-align:center;}
.${Fe}-stat b{display:block;font-size:18px;font-weight:700;line-height:1.3;}
.${Fe}-stat span{font-size:11px;color:var(--dsh-fg-dim,#8b949e);}

/* ---- import section ---- */
.${Fe}-import{display:flex;flex-direction:column;gap:8px;}
.${Fe}-import-row{display:flex;gap:8px;}
.${Fe}-btn{display:inline-flex;align-items:center;gap:6px;padding:7px 14px;border:1px solid var(--dsh-border,#30363d);border-radius:8px;background:var(--dsh-bg2,#161b22);color:inherit;font-size:12px;cursor:pointer;transition:border-color .15s,box-shadow .15s;}
.${Fe}-btn:hover{border-color:var(--dsh-accent,#388bfd);box-shadow:0 0 0 1px #388bfd44;}
.${Fe}-btn.primary{background:#388bfd;color:#fff;border-color:#388bfd;}
.${Fe}-btn.primary:hover{background:#58a6ff;border-color:#58a6ff;}
.${Fe}-btn svg{width:14px;height:14px;}
.${Fe}-url-panel{overflow:hidden;max-height:0;opacity:0;transition:max-height .25s ease,opacity .2s;}
.${Fe}-url-panel.open{max-height:60px;opacity:1;}
.${Fe}-url-inner{display:flex;gap:8px;padding-top:2px;}
.${Fe}-url-input{flex:1 1 auto;min-width:0;padding:7px 10px;border:1px solid var(--dsh-border,#30363d);border-radius:8px;background:var(--dsh-bg,#0d1117);color:inherit;font-size:12px;outline:none;transition:border-color .15s;}
.${Fe}-url-input:focus{border-color:var(--dsh-accent,#388bfd);}
.${Fe}-url-input::placeholder{color:var(--dsh-fg-dim,#8b949e);opacity:.7;}

/* ---- filter tabs ---- */
.${Fe}-tabs{display:flex;gap:2px;padding:2px;border-radius:8px;background:var(--dsh-bg2,#161b22);border:1px solid var(--dsh-border,#30363d);}
.${Fe}-tab{flex:1;padding:5px 0;text-align:center;font-size:11px;border-radius:6px;cursor:pointer;border:none;background:transparent;color:var(--dsh-fg-dim,#8b949e);transition:background .15s,color .15s;}
.${Fe}-tab.active{background:var(--dsh-bg,#0d1117);color:var(--dsh-fg,#c9d1d9);box-shadow:0 1px 3px rgba(0,0,0,.2);}
.${Fe}-tab:hover:not(.active){color:var(--dsh-fg,#c9d1d9);}

/* ---- plugin cards ---- */
.${Fe}-list{display:flex;flex-direction:column;gap:8px;}
.${Fe}-card{display:flex;align-items:flex-start;gap:10px;padding:12px;border-radius:10px;background:var(--dsh-bg2,#161b22);border:1px solid var(--dsh-border,#30363d);transition:border-color .15s,box-shadow .15s;}
.${Fe}-card:hover{border-color:#388bfd55;box-shadow:0 2px 8px rgba(0,0,0,.2);}
.${Fe}-avatar{width:34px;height:34px;flex:0 0 auto;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:700;color:#fff;}
.${Fe}-avatar.builtin{background:linear-gradient(135deg,#8b949e,#6e7681);}
.${Fe}-avatar.file{background:linear-gradient(135deg,#388bfd,#1f6feb);}
.${Fe}-avatar.url{background:linear-gradient(135deg,#a371f7,#8957e5);}
.${Fe}-body{flex:1 1 auto;min-width:0;display:flex;flex-direction:column;gap:3px;}
.${Fe}-name{font-weight:600;font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.${Fe}-desc{font-size:11px;color:var(--dsh-fg-dim,#8b949e);line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}
.${Fe}-tags{display:flex;gap:6px;align-items:center;flex-wrap:wrap;margin-top:1px;}
.${Fe}-tag{font-size:10px;padding:1px 6px;border-radius:10px;border:1px solid var(--dsh-border,#30363d);color:var(--dsh-fg-dim,#8b949e);}
.${Fe}-tag.src-builtin{color:#8b949e;border-color:#8b949e44;}
.${Fe}-tag.src-file{color:#388bfd;border-color:#388bfd44;}
.${Fe}-tag.src-url{color:#a371f7;border-color:#a371f744;}
.${Fe}-err{font-size:11px;color:#f85149;margin-top:2px;word-break:break-all;}

/* ---- switch ---- */
.${Fe}-actions{flex:0 0 auto;display:flex;flex-direction:column;align-items:center;gap:6px;padding-top:2px;}
.${Fe}-toggle{position:relative;width:36px;height:20px;border-radius:10px;background:var(--dsh-border,#30363d);cursor:pointer;transition:background .2s;border:none;padding:0;}
.${Fe}-toggle::after{content:"";position:absolute;top:2px;left:2px;width:16px;height:16px;border-radius:50%;background:#fff;transition:transform .2s;}
.${Fe}-toggle.on{background:#388bfd;}
.${Fe}-toggle.on::after{transform:translateX(16px);}
.${Fe}-rm{width:22px;height:22px;border-radius:6px;border:none;background:transparent;color:var(--dsh-fg-dim,#8b949e);cursor:pointer;font-size:14px;line-height:22px;text-align:center;transition:color .15s,background .15s;}
.${Fe}-rm:hover{color:#f85149;background:#f8514918;}

/* ---- empty state ---- */
.${Fe}-empty{display:flex;flex-direction:column;align-items:center;gap:8px;padding:28px 16px;color:var(--dsh-fg-dim,#8b949e);}
.${Fe}-empty-icon{font-size:28px;opacity:.5;}
.${Fe}-empty-text{font-size:12px;text-align:center;line-height:1.5;}

/* ---- trust note ---- */
.${Fe}-note{font-size:11px;color:var(--dsh-fg-dim,#8b949e);line-height:1.4;padding:8px 10px;border-radius:8px;background:#d2992212;border:1px solid #d2992230;}
`,e=document.createElement("style");e.id=`${Fe}-styles`,e.textContent=t,document.head.appendChild(e)}const F6='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19.44 12.99c.72-.23 1.56.06 1.56 1.01 0 .55-.45 1-1 1h-2v2c0 .55-.45 1-1 1-.95 0-1.24.84-1.01 1.56.18.55-.06 1.43-.99 1.43-.55 0-1-.45-1-1v-2h-2c-.55 0-1-.45-1-1 0-.95-.84-1.24-1.56-1.01-.55.18-1.43-.06-1.43-.99 0-.55.45-1 1-1h2v-2c0-.55.45-1 1-1 .95 0 1.24-.84 1.01-1.56-.18-.55.06-1.43.99-1.43.55 0 1 .45 1 1v2h2c.55 0 1 .45 1 1 0 .95.84 1.24 1.56 1.01z"/></svg>',R6='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',N6='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>';let vo="all";function P6(t){return t==="builtin"?"内置":t==="file"?"本地":"URL"}function A6(t){return(t.name.replace(/^@[^/]+\//,"")[0]??"?").toUpperCase()}function M6(t){const e=t.querySelector(`.${Fe}-sub`);if(!e)return;const n=Fd(),i=n.filter(c=>c.enabled).length;e.textContent=`${i} 已启用 · ${n.length} 总计`}function Uo(t){const e=t.querySelector(`.${Fe}-list`);if(!e)return;const n=Fd().filter(i=>vo==="all"||i.source===vo);if(e.replaceChildren(),M6(t),!n.length){const i=document.createElement("div");i.className=`${Fe}-empty`,i.innerHTML=`<div class="${Fe}-empty-icon">&#x2699;</div><div class="${Fe}-empty-text">${vo==="all"?"还没有插件<br>用上方按钮导入 .js 或启用内置项":"此分类下暂无插件"}</div>`,e.append(i);return}for(const i of n){const c=document.createElement("div");c.className=`${Fe}-card`;const u=document.createElement("div");u.className=`${Fe}-avatar ${i.source}`,u.textContent=A6(i),c.append(u);const v=document.createElement("div");v.className=`${Fe}-body`;const d=document.createElement("div");if(d.className=`${Fe}-name`,d.textContent=i.name,v.append(d),i.description){const L=document.createElement("div");L.className=`${Fe}-desc`,L.textContent=i.description,v.append(L)}const p=document.createElement("div");p.className=`${Fe}-tags`;const w=document.createElement("span");if(w.className=`${Fe}-tag src-${i.source}`,w.textContent=P6(i.source),p.append(w),i.version){const L=document.createElement("span");L.className=`${Fe}-tag`,L.textContent=`v${i.version}`,p.append(L)}if(v.append(p),i.error){const L=document.createElement("div");L.className=`${Fe}-err`,L.textContent=i.error,v.append(L)}c.append(v);const b=document.createElement("div");b.className=`${Fe}-actions`;const x=document.createElement("button");x.type="button",x.className=`${Fe}-toggle${i.enabled?" on":""}`,x.title=i.enabled?"点击停用":"点击启用",x.addEventListener("click",()=>{i.enabled?Ed(i.id):gi(i.id),Uo(t)}),b.append(x);const O=document.createElement("button");O.type="button",O.className=`${Fe}-rm`,O.textContent="×",O.title="移除插件",O.addEventListener("click",()=>{k6(i.id),Uo(t)}),b.append(O),c.append(b),e.append(c)}}function O6(t,e){D6(),t.classList.add(`${Fe}-view`);const n=()=>{Uo(i),I()},i=document.createElement("div");i.className=`${Fe}-root`;const c=document.createElement("div");c.className=`${Fe}-hdr`;const u=document.createElement("div");u.className=`${Fe}-logo`,u.innerHTML=F6;const v=document.createElement("div"),d=document.createElement("div");d.className=`${Fe}-title`,d.textContent="插件管理";const p=document.createElement("div");p.className=`${Fe}-sub`,v.append(d,p),c.append(u,v);const w=document.createElement("div");w.className=`${Fe}-import`;const b=document.createElement("div");b.className=`${Fe}-import-row`;const x=document.createElement("input");x.type="file",x.accept=".js,.cjs,.mjs,text/javascript",x.multiple=!0,x.style.display="none",x.addEventListener("change",async()=>{const me=[...x.files??[]];for(const ne of me)try{await x6(ne)}catch(le){e.toast("error",`导入 ${ne.name} 失败：${le instanceof Error?le.message:String(le)}`)}x.value="",n()});const O=document.createElement("button");O.className=`${Fe}-btn primary`,O.innerHTML=`${R6}<span>导入本地</span>`,O.addEventListener("click",()=>x.click());const L=document.createElement("div");L.className=`${Fe}-url-panel`;const P=document.createElement("div");P.className=`${Fe}-url-inner`;const j=document.createElement("input");j.type="text",j.className=`${Fe}-url-input`,j.placeholder="https://example.com/plugin.js";const U=document.createElement("button");U.className=`${Fe}-btn`,U.textContent="拉取";const $=async()=>{const me=j.value.trim();if(me){U.disabled=!0,U.textContent="…";try{await C6(me),j.value="",L.classList.remove("open"),e.toast("ok","已从 URL 导入并启用")}catch(ne){e.toast("error",`URL 导入失败：${ne instanceof Error?ne.message:String(ne)}`)}finally{U.disabled=!1,U.textContent="拉取",n()}}};U.addEventListener("click",()=>void $()),j.addEventListener("keydown",me=>{me.key==="Enter"&&$()}),P.append(j,U),L.append(P);const ee=document.createElement("button");ee.className=`${Fe}-btn`,ee.innerHTML=`${N6}<span>从 URL</span>`,ee.addEventListener("click",()=>{L.classList.toggle("open"),L.classList.contains("open")&&setTimeout(()=>j.focus(),100)}),b.append(O,ee,x),w.append(b,L);const G=document.createElement("div");G.className=`${Fe}-tabs`;const A=[{key:"all",label:"全部"},{key:"builtin",label:"内置"},{key:"file",label:"本地"},{key:"url",label:"URL"}],pe=new Map;for(const me of A){const ne=document.createElement("div");ne.className=`${Fe}-tab${me.key===vo?" active":""}`,ne.textContent=me.label,ne.addEventListener("click",()=>{vo=me.key,I(),Uo(i)}),pe.set(me.key,ne),G.append(ne)}function I(){for(const[me,ne]of pe)ne.classList.toggle("active",me===vo)}const ve=document.createElement("div");ve.className=`${Fe}-list`;const $e=document.createElement("div");return $e.className=`${Fe}-note`,$e.textContent="导入的脚本拥有当前页面全部权限（等同于控制台执行），请仅加载可信来源。",i.append(c,w,G,ve,$e),t.replaceChildren(i),Uo(i),{cleanup(){t.replaceChildren()},rerender:n}}const L6=["data-theme"],B6=["title"],I6={class:"vs-topbar-txt"},j6=["title"],V6={class:"vs-topbar-txt"},z6=["title"],U6={class:"vs-topbar-txt vs-recent-name"},H6=["title"],W6=["title","disabled"],G6={class:"vs-quickopen-ph"},q6=["disabled","title","onClick","onContextmenu"],K6={key:1,class:"vs-act-letter"},X6={class:"vs-left-main"},Y6={key:1,class:"fw-empty vs-git-empty"},J6={class:"vs-right"},Z6={class:"vs-editor-wrap"},Q6={key:0,class:"vs-diffpane"},eT={key:1,class:"vs-empty"},tT={class:"vs-empty-title"},nT={class:"vs-empty-hint"},sT={class:"vs-empty-actions"},oT={key:2,class:"vs-loading-big"},aT={key:3,class:"vs-error"},iT={key:4,class:"vs-empty"},lT={class:"vs-empty-hint"},rT={class:"vs-status"},cT=["title"],uT={key:1,class:"vs-status-readonly"},dT=["title"],fT={class:"vs-status-seg"},pT=["disabled"],vT=["disabled"],hT={class:"vs-status-seg"},mT=["placeholder","onKeydown"],gT={class:"vs-quickopen-list"},yT=["title","onMousedown","onMouseenter"],wT={class:"vs-search-name"},bT={class:"vs-search-dir"},_T={key:0,class:"vs-search-note"},kT={key:1,class:"vs-search-note"},Cc=new Set,$c=new Set,xT=ht({__name:"VSCodePane",setup(t){const e=Ol(mi)??ur(),n=e.state,i=e.ready,c=B(()=>n.projectDir?Wt(n.projectDir)?fl(n.projectDir):n.projectDir:y("vsNoProject")),u=e.rootKey,v=()=>e.init(),d=()=>e.persist(),p=f=>e.rememberProject(f),w=f=>e.fileViewOf(f),b=(f,_)=>e.rememberFileView(f,_),x=f=>e.stashOpenBuffers(f),O=()=>e.takeStashedBuffers(),L=`vscode:${e.slot}`,P=m(null),j=tr(P),U=B(()=>({fontSize:`${Ue.fontSize??13}px`,"--vs-fs-scale":String((Ue.fontSize??13)/13)})),$=gt({}),ee=gt(new Set),G=gt({}),A=gt({}),pe=m(!1),I=m(!1),ve=B(()=>{const f=n.projectDir;if(!f)return null;if(Wt(f))return Ha(f)||null;const _=f.replace(/[\\/]+$/,""),Y=Math.max(_.lastIndexOf("/"),_.lastIndexOf("\\"));if(Y<=0)return null;const Oe=_.slice(0,Y);return/^[A-Za-z]:$/.test(Oe)?null:Oe}),$e=m(!1),me=m(null),ne=m(""),le=m(null),Se="dsh-file-workbench.vscode.activeView";function Ve(){try{return localStorage.getItem(Se)??"files"}catch{return"files"}}const we=m(Ve()),Ne=m(!1);function W(f){we.value=f;try{localStorage.setItem(Se,f)}catch{}}Ze(()=>n.projectDir,f=>{!f&&we.value!=="files"&&(we.value="files")});const J=m("");Ze(()=>n.projectDir,async f=>{if(J.value="",!!f)try{const _=await Ho(f);if(_.inRepo&&_.repo)J.value=_.branch||"HEAD";else{const Y=await fs(f);Y.inRepo&&Y.svnAvailable&&(J.value=Y.revision?`r${Y.revision}`:"svn")}}catch{}},{immediate:!0});function z(f,_){n.projectDir&&ss(Xs(f,n.projectDir),{line:_})}const Q=gt({line:1,col:1});let ge=null;function je(f){return f.split(/[\\/]/).filter(Boolean).pop()??f}function Ke(f){const _=Math.max(f.lastIndexOf("/"),f.lastIndexOf("\\"));if(_<0)return"";const Y=_===0?f.slice(0,1):f.slice(0,_);return/^[A-Za-z]:$/.test(Y)?`${Y}${f[_]}`:Y}function Qe(f){return Wt(f)?Ha(f)||f:Ke(f)||f}function ye(f,_){if(!f)return!1;const Y=f.replace(/[\\/]+$/,"").toLowerCase(),Oe=_.replace(/[\\/]+$/,"").toLowerCase();return Oe===Y||Oe.startsWith(`${Y}\\`)||Oe.startsWith(`${Y}/`)}const be="vs-diff://",Ye=B(()=>{const f=n.openTabs.map(_=>({path:_,dirty:$[_]?.dirty??!1,conflict:$[_]?.conflict??!1}));return tn.value&&f.push({path:be+tn.value.title,dirty:!1,icon:"fileOut"}),f}),st=B(()=>tn.value?be+tn.value.title:n.activeTab);function fe(f){return f.startsWith(be)}const ke=B(()=>n.activeTab?$[n.activeTab]:void 0),qe=B(()=>ke.value?.content??""),ce=B(()=>n.activeTab?A[n.activeTab]??0:0),Ie=B(()=>n.activeTab?ee.has(n.activeTab):!1),rt=B(()=>n.activeTab?G[n.activeTab]:void 0),yt=B(()=>{const f=n.activeTab;return!f||!n.projectDir?!0:ye(n.projectDir,f)?!1:!Ue.allowOutsideRoot}),ut=B(()=>ke.value?.conflict===!0),it=B(()=>n.activeTab?f8(n.activeTab):"Plain Text"),Le=B(()=>w(n.activeTab)),H=[{encoding:"utf8",hasBom:!1,label:"UTF-8"},{encoding:"utf8",hasBom:!0,label:"UTF-8 with BOM"},{encoding:"utf16le",hasBom:!0,label:"UTF-16 LE"},{encoding:"utf16be",hasBom:!0,label:"UTF-16 BE"},{encoding:"gb18030",hasBom:!1,label:"GB18030"},{encoding:"big5",hasBom:!1,label:"Big5"},{encoding:"latin1",hasBom:!1,label:"Latin-1"}],R={utf8:"UTF-8",utf16le:"UTF-16 LE",utf16be:"UTF-16 BE",gb18030:"GB18030",big5:"Big5",latin1:"Latin-1",binary:"Binary"},Z=B(()=>(ke.value?.eol??"lf").toUpperCase()),Ee=B(()=>{const f=ke.value;if(!f)return"UTF-8";const _=R[f.encoding],Y=f.encoding==="utf8"||f.encoding==="utf16le"||f.encoding==="utf16be";return f.hasBom&&Y?`${_} BOM`:_}),{cmOpen:M,cmX:T,cmY:K,openMenuAt:S}=pn();function q(f){const _=f.currentTarget?.getBoundingClientRect();S(_?.left??0,_?.top??0)}const Te=B(()=>{const f=ke.value;return H.map(_=>({label:_.label,checked:!!f&&f.encoding===_.encoding&&f.hasBom===_.hasBom,disabled:!f||f.binary,onClick:()=>void Je(_.encoding,_.hasBom)}))}),{cmOpen:re,cmX:ct,cmY:wt,openMenuAt:Ot}=pn();function Mn(f){const _=f.currentTarget?.getBoundingClientRect();Ot(_?.left??0,_?.top??0)}const Gt=B(()=>{const f=ke.value,_=(Y,Oe)=>({label:Oe,checked:f?.eol===Y,disabled:!f||f.binary,onClick:()=>ze(Y)});return[_("lf","LF"),_("crlf","CRLF"),_("cr","CR")]});function ze(f){const _=n.activeTab,Y=_?$[_]:void 0;!_||!Y||Y.eol===f||(Y.eol=f,Y.dirty=!0)}async function Je(f,_){const Y=n.activeTab,Oe=Y?$[Y]:void 0;!Y||!Oe||Oe.encoding===f&&Oe.hasBom===_||Oe.dirty&&!await Mt({title:y("vsUnsavedTitle"),message:y("vsReopenLoseMsg")})||(await gs(Y,{encoding:f,hasBom:_,force:!0}),X("ok",y("vsEncodingSwitched",{enc:Ee.value})))}const et=m(null),{cmOpen:lt,cmX:xn,cmY:Cn,openMenuAt:zt}=pn();function ot(){const f=et.value?.getBoundingClientRect();zt(f?.left??0,(f?.bottom??0)+2)}const ft=B(()=>!!ke.value&&!ke.value.binary&&!yt.value),Ct=B(()=>n.openTabs.filter(f=>$[f]?.dirty)),On=B(()=>[{label:y("vsOpenFolder"),icon:"folderOpen",onClick:Ht},{label:y("vsNewFile"),icon:"fileOut",disabled:!n.projectDir,onClick:()=>le.value?.createFileAtRoot()},{label:y("vsNewFolder"),icon:"folder",disabled:!n.projectDir,onClick:()=>le.value?.createFolderAtRoot()},{label:y("vsMenuRecent"),icon:"clock",disabled:n.recentProjects.length===0,children:[...n.recentProjects.map(f=>({label:je(f)||f,checked:f===n.projectDir,disabled:f===n.projectDir,onClick:()=>void Ps(f)})),{separator:!0},{label:y("vsRecentClearAll"),icon:"trash",disabled:n.recentProjects.length===0,onClick:()=>void gn()}]},{separator:!0},{label:y("menuCloneGit"),icon:"git",onClick:()=>void Tn("git")},{label:y("menuCloneSvn"),icon:"svn",onClick:()=>void Tn("svn")},{separator:!0},{label:y("vsNewWindow"),icon:"panellayout",onClick:ms},{label:y("vsFloatWindow"),icon:"float",disabled:!e.tabId,onClick:Js},{label:y("vsNewTerminal"),icon:"terminal",onClick:ns},{separator:!0},{label:y("vsSave"),icon:"save",hint:"Ctrl+S",disabled:!ft.value,onClick:()=>void xi()},{label:y("vsSaveAs"),icon:"save",hint:"Ctrl+Shift+S",disabled:!ft.value,onClick:()=>Ci()},{label:y("vsSaveAll"),disabled:Ct.value.length===0,onClick:()=>void mr()},{label:y("vsMenuLocalDiff"),icon:"fileOut",disabled:!(ke.value?.dirty&&!ke.value.binary),onClick:()=>void wi()}]),$n=m(null),{cmOpen:Yn,cmX:mn,cmY:Sn,openMenuAt:Ks}=pn(),Es=B(()=>{const f=n.projectDir;if(!f)return y("vsNoProject");const _=je(f);return _||(Wt(f)?fl(f):f)}),En=B(()=>n.projectDir?`${c.value} · ${y("vsRecentProjects")}`:y("vsRecentProjects")),cn=B(()=>[{label:y("vsOpenFolder"),icon:"folderOpen",onClick:Ht},{separator:!0},...n.recentProjects.map(f=>({label:je(f)||f,checked:f===n.projectDir,disabled:f===n.projectDir,trailing:{icon:"close",title:y("vsRecentForgetTitle"),onClick:()=>void Wn(f)},onClick:()=>void Ps(f)})),{separator:!0},{label:y("vsRecentClearAll"),icon:"trash",disabled:n.recentProjects.length===0,onClick:()=>void gn()}]);function Ln(){const f=$n.value?.getBoundingClientRect();Ks(f?.left??0,(f?.bottom??0)+2)}async function Wn(f){const _=je(f)||f;await Mt({title:y("vsRecentForgetTitle"),message:y("vsRecentForgetConfirm",{name:_})})&&(e.forgetProject(f),X("ok",y("vsRecentForgot",{name:_})))}function Tn(f){const Y=ve.value??n.projectDir??"";lr({kind:f,dir:Y,key:u,onDone:({path:Oe})=>{Ps(Oe)}})}async function gn(){if(n.recentProjects.length===0)return;await Mt({title:y("vsRecentClearAllTitle"),message:y("vsRecentClearAllConfirm")})&&(e.clearRecentProjects(),X("ok",y("vsRecentCleared")))}async function yn(f){Dn(f),X("info",y("vsProjectGone"))}async function Jn(f){const _=n.projectDir===f&&Ct.value.length>0;await Mt({title:y(_?"vsUnsavedTitle":"vsRemoveProjectTitle"),message:_?y("vsSwitchLoseMsg",{n:String(Ct.value.length)}):y("vsRemoveProjectConfirm",{name:je(f)||f})})&&(Dn(f),X("ok",y("vsProjectRemoved")))}function Dn(f){e.forgetProject(f),n.projectDir===f&&(aa(),n.projectDir=null,d())}const D=50,he=3e4,Be=m(null),He=m(""),Pe=m(!1),Ge=m(0),Et=m([]),$t=m(""),wn=m(0),Bn=m(!1),Fn=m(!1);function Xs(f,_){const Y=_.includes("\\")?"\\":"/";return`${_.replace(/[\\/]+$/,"")}${Y}${f.split("/").join(Y)}`}function Co(f,_){const Y=f.lastIndexOf("/");if(f.slice(Y+1).includes(_))return 0;if(f.includes(_))return 1;let Oe=0;for(const pt of _){if(Oe=f.indexOf(pt,Oe),Oe<0)return null;Oe+=1}return 2}const un=B(()=>{const f=n.projectDir;if(!f)return[];const _=Et.value,Y=vt=>{const nn=vt.lastIndexOf("/");return{abs:Xs(vt,f),name:nn<0?vt:vt.slice(nn+1),dir:nn<0?"":vt.slice(0,nn)}},Oe=He.value.trim().toLowerCase();if(!Oe)return _.slice(0,D).map(Y);const pt=[];for(const vt of _){const nn=Co(vt.toLowerCase(),Oe);nn!==null&&pt.push({rel:vt,score:nn})}return pt.sort((vt,nn)=>vt.score-nn.score||vt.rel.length-nn.rel.length||(vt.rel<nn.rel?-1:1)),pt.slice(0,D).map(vt=>Y(vt.rel))});async function Ts(){const f=n.projectDir;if(!(!f||Bn.value)&&!($t.value===f&&Date.now()-wn.value<he)){Bn.value=!0;try{const _=await np(f,u);Et.value=_.files,Fn.value=_.truncated,$t.value=f,wn.value=Date.now()}catch{Et.value=[],$t.value=""}finally{Bn.value=!1}}}function Ds(){n.projectDir&&(Pe.value=!0,Ge.value=0,Ts(),Dt(()=>Be.value?.focus()))}function Zn(){Ge.value=0}function Qn(){Pe.value=!1,He.value=""}function Fs(f){const _=un.value.length;_!==0&&(Pe.value=!0,Ge.value=(Ge.value+f+_)%_)}function Ys(f){const _=un.value[f??Ge.value];_&&(Pe.value=!1,He.value="",Be.value?.blur(),ss(_.abs))}const Rn=m(null),Gn=new Set,es=new Set,Rs=new Set;Ze(()=>n.projectDir,f=>Gn.forEach(_=>_(f))),Ze(j,f=>es.forEach(_=>_(f))),Ze(()=>n.activeTab,f=>Rs.forEach(_=>_(f)));function en(){return n.activeTab?FS(e.slot)??null:null}const Kt=new Set,ts=new Set;let In=null,dn=null;const g={apiVersion:Ga,get projectDir(){return n.projectDir},get theme(){return j.value},get activeFile(){return n.activeTab},onProjectChange(f){return Gn.add(f),f(n.projectDir),()=>Gn.delete(f)},onThemeChange(f){return es.add(f),f(j.value),()=>es.delete(f)},onDidChangeActiveFile(f){return Rs.add(f),f(n.activeTab),()=>Rs.delete(f)},openFile:(f,_)=>ss(f,_),listOpenFiles:()=>[...n.openTabs],openDiff:(f,_)=>Zs({title:f,lines:_}),toast:(f,_)=>X(f,_),editor:{get view(){return en()},getText:()=>en()?.state.doc.toString()??"",isDirty:()=>n.activeTab?$[n.activeTab]?.dirty??!1:!1,onDidChangeTextDocument(f){const _=(Oe,pt)=>f({text:Oe,changes:pt});Kt.add(_),In||(In=RS(e.slot,(Oe,pt)=>Kt.forEach(vt=>vt(Oe,pt))));const Y=en();return Y&&f({text:Y.state.doc.toString(),changes:null}),()=>{Kt.delete(_),Kt.size===0&&In&&(In(),In=null)}},getSelection:()=>en()?.state.selection??null,onDidChangeSelection(f){const _=Oe=>f(Oe);ts.add(_),dn||(dn=NS(e.slot,Oe=>ts.forEach(pt=>pt(Oe))));const Y=en();return Y&&f(Y.state.selection),()=>{ts.delete(_),ts.size===0&&dn&&(dn(),dn=null)}},applyEdit(f){const _=en();return!_||!f.length?!1:(_.dispatch({changes:f}),!0)},setDecorations(f){en()&&Rn.value?.setExtension(f)},createDecorations(f){return Rn.value?.setDecorationsSpec(f.items),{extension:[],update(_){Rn.value?.setDecorationsSpec(_)}}}}},{cmOpen:k,cmX:xe,cmY:de,openMenuAt:Me}=pn(),F=B(()=>[{label:y("vsFormat"),icon:"code",disabled:!n.activeTab||yt.value||ke.value?.binary===!0,onClick:Xt},{separator:!0},{label:y("vsSave"),icon:"save",hint:"Ctrl+S",disabled:!ft.value||pe.value,onClick:()=>void xi()},{label:y("vsSaveAs"),icon:"save",disabled:!ft.value,onClick:()=>Ci()},{label:y("vsSaveAll"),disabled:Ct.value.length===0,onClick:()=>void mr()},{separator:!0},{label:y("vsMinimap"),checked:Ue.vsMinimap,onClick:()=>{Ue.vsMinimap=!Ue.vsMinimap,Un()}},{separator:!0},{label:y("vsMultiCursorHint"),disabled:!0}]);function Re(f){Me(f.x,f.y)}function Xt(){if(!n.activeTab)return;Rn.value?.format()??!1?X("ok",y("vsFormatOk")):X("error",y("vsFormatFail",{msg:yt.value?y("vsReadonly"):""}))}function Ht(){I.value=!0}function ms(){d(),Jl({fresh:!0})||X("info",y("vsNewWindowLimit"))}function Js(){e.tabId&&Eh(e.tabId)}function ns(){gh(n.projectDir??"")}async function Ns(){await e.init();const f=e.projectRequest.value;if(!f)return;if(e.projectRequest.value=null,Dh(),f.dir===n.projectDir){const Y=Qr();Y&&await ss(Y);return}await Ps(f.dir);const _=Qr();_&&await ss(_)}Ze(()=>e.projectRequest.value?.n,()=>void Ns());async function Ps(f){const _=f!==n.projectDir;if(!(_&&Ct.value.length>0&&!await Mt({title:y("vsUnsavedTitle"),message:y("vsSwitchLoseMsg",{n:String(Ct.value.length)})}))){n.projectDir=f,p(f),$t.value="",wn.value=0;try{await Il(f,u)}catch{}_&&aa(),d()}}function aa(){for(const f of Object.keys($))delete $[f];for(const f of Object.keys(G))delete G[f];for(const f of Object.keys(A))delete A[f];TS(e.slot),n.openTabs=[],n.activeTab=null}async function yi(){if(Cc.has(u))return;Cc.add(u);let f=!1;const _=n.projectDir;if(_){const vt=await Qi(_);if(vt&&!vt.isDir){const nn=Qe(_);nn&&nn!==_&&(n.projectDir=nn,n.openTabs.includes(_)||n.openTabs.push(_),n.activeTab=_,f=!0)}}const Y=[...n.openTabs];if(Y.length===0){f&&d();return}const Oe=await Promise.all(Y.map(async vt=>(await Qi(vt))?.isDir?vt:null)),pt=new Set(Oe.filter(vt=>!!vt));if(pt.size===0){f&&d();return}for(const vt of pt)delete $[vt],delete G[vt],delete A[vt];n.openTabs=n.openTabs.filter(vt=>!pt.has(vt)),n.activeTab&&pt.has(n.activeTab)&&(n.activeTab=n.openTabs[n.openTabs.length-1]??null),d()}async function ss(f,_){tn.value=null,Ne.value=!1,n.openTabs.includes(f)||n.openTabs.push(f),n.activeTab=f,$[f]||await gs(f),_?.line&&(await Dt(),Rn.value?.revealLine(_.line)),d()}async function gs(f,_={}){if(!ee.has(f)&&!($[f]?.dirty&&!_.force)){ee.add(f),delete G[f];try{const Y=await el(f,{encoding:_.encoding,hasBom:_.hasBom});$[f]={content:Y.content,dirty:!1,encoding:Y.encoding,hasBom:Y.hasBom,eol:Y.eol,mtime:Y.mtime,binary:Y.binary,conflict:!1},A[f]=(A[f]??0)+1}catch(Y){G[f]=Y instanceof Hs&&Y.status===413?y("vsTooLarge"):Y.message}finally{ee.delete(f)}}}function ia(f){fe(f)||(tn.value=null,n.activeTab=f,!$[f]&&!G[f]&&gs(f),d())}const tn=m(null);function Zs(f){Ne.value=!1,tn.value=f}async function wi(){const f=n.activeTab,_=f?$[f]:void 0;if(!(!f||!_||_.binary))try{const Y=await el(f),Oe=v6(Y.content,_.content);Zs({title:`${je(f)} · ${y("vsLocalDiffTitle")}`,lines:Oe?Oe.lines:[y("vsLocalDiffTooBig")]})}catch(Y){X("error",Y.message)}}const bi=1e3,As=new Map;function $o(f){if(!Ue.autoSave)return;const _=As.get(f);_&&clearTimeout(_),As.set(f,setTimeout(()=>{As.delete(f),$[f]?.dirty&&ys(f,{quiet:!0})},bi))}function So(f){const _=As.get(f);_&&clearTimeout(_),As.delete(f)}const la=B(Yu),ra=m(null),ca=B(()=>la.value.find(f=>f.id===we.value)),ua=B(()=>[{id:"files",title:y("vsLeftTabFiles"),icon:"folder"},{id:"search",title:y("vsLeftTabSearch"),icon:"search",disabled:!n.projectDir},{id:"git",title:y("vsLeftTabGit"),icon:"git",disabled:!n.projectDir},...la.value.filter(f=>!f.when||f.when(g)).map(f=>({id:f.id,title:Xu(f.title),icon:f.icon}))]),E=B(()=>ua.value.filter(f=>!n.activityBar.hidden.includes(f.id)));Ze(E,f=>{f.some(_=>_.id===we.value)||(we.value="files")},{immediate:!0});function C(f){n.activityBar.hidden.includes(f)||n.activityBar.hidden.push(f),we.value===f&&(we.value="files"),d()}function Ce(f){n.activityBar.hidden=n.activityBar.hidden.filter(_=>_!==f),d()}function nt(f){n.activityBar.hidden.includes(f)?Ce(f):C(f)}const At=m(!1),Tt=m(0),dt=m(0),V=m("bar"),at=m(null),fn=B(()=>({label:n.activityBar.position==="top"?y("vsActBarBottom"):y("vsActBarTop"),icon:"panellayout",onClick:()=>{n.activityBar.position=n.activityBar.position==="top"?"bottom":"top",d()}})),jn=B(()=>({label:n.sidebarSide==="left"?y("vsSideRight"):y("vsSideLeft"),icon:"float",onClick:()=>{n.sidebarSide=n.sidebarSide==="left"?"right":"left",d()}})),Ms=B(()=>({label:Ne.value?y("vsUnfoldEditor"):y("vsFoldEditor"),icon:Ne.value?"chevronsRight":"chevronsLeft",onClick:()=>{Ne.value=!Ne.value}})),_i=B(()=>{if(V.value==="view"&&at.value){const f=at.value;return[{label:y("vsActHide",{name:f.title}),icon:"close",onClick:()=>C(f.id)},{separator:!0},Ms.value,{separator:!0},fn.value,jn.value]}return[...ua.value.map(f=>({label:f.title,icon:f.icon??"",checked:!n.activityBar.hidden.includes(f.id),onClick:()=>nt(f.id)})),{separator:!0},Ms.value,{separator:!0},fn.value,jn.value]});function da(f,_){const Y=_.currentTarget?.getBoundingClientRect();Tt.value=Y?.right??_.clientX,dt.value=Y?.bottom??_.clientY,V.value="view",at.value=f,At.value=!0}function Ad(f){Tt.value=f.clientX,dt.value=f.clientY,V.value="bar",at.value=null,At.value=!0}const vr=B(pi);function Md(){return{path:n.activeTab,projectDir:n.projectDir}}const hr=m(null),{cmOpen:ki,cmX:Od,cmY:Ld,openMenuAt:Bd}=pn();function Id(){const f=hr.value?.getBoundingClientRect();f&&Bd(f.left,f.top-4)}const jd=B(()=>{n.activeTab,n.projectDir;const f=Md();return[...vr.value,...Yo()].sort((Y,Oe)=>(Y.order??0)-(Oe.order??0)).map(Y=>({label:Y.text,disabled:!!Y.when&&!Y.when(f),onClick:()=>{try{di(Y.commandId,f)}catch(Oe){X("error",Oe.message)}}}))}),Vd=B(()=>vr.value.length+Yo().length>0);Cs(f=>{const _=ca.value,Y=ra.value;if(!_||!Y||_.when&&!_.when(g))return;const Oe=_.mount(Y,g);qa(Y);const pt=new ResizeObserver(()=>qa(Y));pt.observe(Y),f(()=>{if(pt.disconnect(),typeof Oe=="function")try{Oe()}catch{}Y.replaceChildren()})},{flush:"post"});function zd(f){const _=n.activeTab?$[n.activeTab]:void 0;_&&(_.content=f,_.dirty=!0,n.activeTab&&$o(n.activeTab))}function Ud(f,_){Q.line=f,Q.col=_}function Hd(f){n.activeTab&&b(n.activeTab,f)}async function xi(){const f=n.activeTab;if(!f)return;const _=$[f];!_||!_.dirty||await ys(f)}async function ys(f,_={}){const Y=$[f];if(!f||!Y||Y.binary)return!1;pe.value=!0;try{const Oe=await Xi(f,Y.content,{key:u,encoding:Y.encoding,hasBom:Y.hasBom,eol:Y.eol,expectedMtime:Y.mtime,force:_.force});return Y.dirty=!1,Y.conflict=!1,Y.mtime=Oe.mtime,_.quiet||X("ok",y("vsSaved")),!0}catch(Oe){return Oe instanceof Hs&&Oe.code==="mtime-conflict"?(pe.value=!1,await Mt({title:y("vsConflictTitle"),message:y("vsConflictMsg",{name:je(f)})})?await ys(f,{..._,force:!0}):!1):(X("error",Oe.message),!1)}finally{pe.value=!1}}async function mr(){const f=Ct.value.slice();if(f.length===0){X("info",y("vsNoDirty"));return}let _=0;for(const Y of f)await ys(Y,{quiet:!0})&&_++;_===f.length&&X("ok",y("vsAllSaved",{n:String(_)}))}function Ci(){const f=n.activeTab,_=f?$[f]:void 0;!f||!_||_.binary||(me.value=Ke(f)||n.projectDir,ne.value=je(f),$e.value=!0)}async function Wd(f){const _=n.activeTab,Y=_?$[_]:void 0;if(!_||!Y||Y.binary||f===_)return;if(n.openTabs.includes(f)&&$[f]?.dirty){X("error",y("vsSaveAsBlockedDirty",{name:je(f)}));return}let Oe=!1;try{Oe=await Zi(f)}catch{return}if(!(Oe&&!await Mt({title:y("vsSaveAsTitle"),message:y("vsOverwriteMsg",{path:f})}))){pe.value=!0;try{await Xi(f,Y.content,{key:u,encoding:Y.encoding,hasBom:Y.hasBom,eol:Y.eol}),X("ok",y("vsSavedAs",{path:je(f)})),delete $[_],delete G[_],delete A[_],delete $[f],delete G[f],delete A[f],n.openTabs=n.openTabs.filter(pt=>pt!==_&&pt!==f),await ss(f)}catch(pt){X("error",pt.message)}finally{pe.value=!1}}}async function Gd(f,_){const Y=$[f];if(!(!Y||Y.binary)&&_&&!(Math.abs(_.mtimeMs-Y.mtime)<1)){if(Y.dirty){Y.conflict||(Y.conflict=!0);return}await gs(f,{force:!0}),X("info",y("vsReloadedExternal",{name:je(f)}))}}function qd(){ge=ah((f,_)=>{n.openTabs.includes(f)&&Gd(f,_)}),Ze(()=>n.openTabs.slice(),f=>sh(L,f),{immediate:!0})}async function Kd(){const f=n.activeTab,_=f?$[f]:void 0;!f||!_||!await Mt({title:y("vsConflictTitle"),message:y("vsConflictMsgReload",{name:je(f)})})||await gs(f,{force:!0})}function Xd(){const f=n.activeTab;if(f){if(Wt(f)){X("error",y("remoteNoExternal"));return}Kc(f)}}async function fa(f){if(fe(f)){tn.value=null;return}if($[f]?.dirty){const Y=await Sr({title:y("vsUnsavedTitle"),message:y("vsUnsavedMsg"),choices:[{id:"save",text:y("vsCloseSave"),primary:!0},{id:"discard",text:y("vsCloseDiscard")},{id:"cancel",text:y("cancel")}]});if(Y==="save"){if(!await ys(f,{quiet:!0}))return}else if(Y!=="discard")return}delete $[f],delete G[f],delete A[f],So(f),Vi(e.slot,f),n.openTabs=n.openTabs.filter(Y=>Y!==f),n.activeTab===f&&(n.activeTab=n.openTabs[n.openTabs.length-1]??null),d()}async function Yd(f){await ys(f,{quiet:!0})&&await fa(f)}async function $i(f){const _=f.filter(Oe=>$[Oe]?.dirty),Y=Oe=>{delete $[Oe],delete G[Oe],delete A[Oe],So(Oe),Vi(e.slot,Oe),n.openTabs=n.openTabs.filter(pt=>pt!==Oe)};if(_.length>1){const Oe=await Sr({title:y("vsUnsavedTitle"),message:y("vsCloseManyMsg",{n:String(_.length)}),choices:[{id:"save",text:y("vsCloseSaveAll"),primary:!0},{id:"discard",text:y("vsCloseDiscardAll")},{id:"cancel",text:y("cancel")}]});if(Oe!=="save"&&Oe!=="discard")return;const pt=new Set;if(Oe==="save")for(const vt of _)await ys(vt,{quiet:!0})||pt.add(vt);for(const vt of f)Oe==="save"&&pt.has(vt)||Y(vt);n.activeTab&&!n.openTabs.includes(n.activeTab)&&(n.activeTab=n.openTabs[n.openTabs.length-1]??null),d();return}for(const Oe of f)await fa(Oe)}async function Jd(f){fe(f)||await $i(n.openTabs.filter(_=>_!==f))}async function Zd(f){if(fe(f))return;const _=n.openTabs.indexOf(f);_<0||await $i(n.openTabs.slice(_+1))}async function Qd(){await $i([...n.openTabs])}function ef(f){delete $[f],delete G[f],delete A[f],So(f),Vi(e.slot,f),n.openTabs=n.openTabs.filter(_=>_!==f),n.activeTab===f&&(n.activeTab=n.openTabs[n.openTabs.length-1]??null),d()}function tf(f,_){const Y=$[f];Y&&($[_]=Y,delete $[f]);const Oe=gd(e.slot),pt=Oe.get(f);pt&&(Oe.delete(f),Oe.set(_,pt)),A[f]!==void 0&&(A[_]=A[f],delete A[f]),delete G[f],G[_]&&delete G[_],n.openTabs=n.openTabs.map(vt=>vt===f?_:vt),n.activeTab===f&&(n.activeTab=_),d()}const Eo=m(!1),nf=B(()=>({width:`calc(${Math.round(n.split*1e3)/10}% - 3px)`}));function Si(f){if(!Eo.value||!P.value)return;const _=P.value.getBoundingClientRect();if(_.width<=0)return;let Y=(f.clientX-_.left)/_.width;n.sidebarSide==="right"&&(Y=1-Y),n.split=Math.min(.85,Math.max(.15,Y))}function Ei(){Eo.value&&(Eo.value=!1,document.removeEventListener("mousemove",Si),document.removeEventListener("mouseup",Ei),document.body.style.userSelect="",document.body.style.cursor="",d())}function sf(){Eo.value=!0,document.addEventListener("mousemove",Si),document.addEventListener("mouseup",Ei),document.body.style.userSelect="none",document.body.style.cursor="col-resize"}function of(f){const _=f?.tagName;return _==="INPUT"||_==="TEXTAREA"||_==="SELECT"}function gr(f){if(!(f.ctrlKey||f.metaKey))return;const _=f.key.toLowerCase();if(_==="p"){if(of(f.target))return;f.preventDefault(),Ds();return}if(_!=="s"){if(_==="w"){f.preventDefault(),tn.value?tn.value=null:n.activeTab&&fa(n.activeTab);return}if(_==="pagedown"||_==="pageup"){f.preventDefault(),af(_==="pagedown"?1:-1);return}return}f.preventDefault(),f.shiftKey?Ci():xi()}function af(f){const _=n.openTabs;if(_.length<2)return;const Y=n.activeTab?_.indexOf(n.activeTab):-1,Oe=((Y<0?0:Y+f)+_.length)%_.length;ia(_[Oe])}function yr(f){Ct.value.length>0&&(f.preventDefault(),f.returnValue="")}const pa=m(null),wr=m(!1);let va=null;function br(){const f=pa.value;if(!f)return;f.classList.remove("compact");const Y=f.scrollWidth-f.clientWidth>1;f.classList.toggle("compact",Y),wr.value=Y}const lf=560,rf=680;let ha=null;function _r(){const f=P.value?.clientWidth??0;f<=lf&&n.projectDir?Ne.value=!0:f>=rf&&(Ne.value=!1)}return ln(async()=>{T6(),pa.value&&(va=new ResizeObserver(()=>br()),va.observe(pa.value),br()),P.value&&(ha=new ResizeObserver(()=>_r()),ha.observe(P.value),_r()),await v();const f=O();for(const[Oe,pt]of Object.entries(f))n.openTabs.includes(Oe)&&($[Oe]=pt);await yi(),n.activeTab&&!$[n.activeTab]&&gs(n.activeTab),i.value=!0,await Dt(),await le.value?.rebuild(),window.addEventListener("keydown",gr),window.addEventListener("beforeunload",yr),window.addEventListener("beforeunload",d),qd();const _=`${u}:${n.projectDir??""}`;n.projectDir&&!$c.has(_)&&($c.add(_),Ts());const Y=Th();Y&&e.requestOpenProject(Y),e.projectRequest.value&&await Ns()}),Pt(()=>{va?.disconnect(),va=null,ha?.disconnect(),ha=null,window.removeEventListener("keydown",gr),window.removeEventListener("beforeunload",yr),window.removeEventListener("beforeunload",d),document.removeEventListener("mousemove",Si),document.removeEventListener("mouseup",Ei),ge?.(),ge=null,oh(L),x({...$}),d()}),(f,_)=>(l(),r("div",{ref_key:"rootRef",ref:P,class:"vs-pane","data-theme":s(j),style:_t(U.value)},[o("div",{ref_key:"topbarRef",ref:pa,class:te(["vs-topbar",{compact:wr.value}])},[o("span",{class:"vs-brand",title:s(y)("vsBrand")},[h(oe,{class:"vs-topbar-ico",name:"code",size:14}),o("span",I6,a(s(y)("vsBrand")),1)],8,B6),_[19]||(_[19]=o("span",{class:"vs-sep"},null,-1)),o("button",{ref_key:"fileBtnRef",ref:et,class:te(["vs-btn vs-btn-menu",{open:s(lt)}]),title:s(y)("vsMenuFile"),onClick:ot},[h(oe,{class:"vs-topbar-ico",name:"folder",size:13}),o("span",V6,a(s(y)("vsMenuFile")),1),_[16]||(_[16]=o("span",{class:"vs-caret"},null,-1))],10,j6),_[20]||(_[20]=o("span",{class:"vs-sep"},null,-1)),o("button",{ref_key:"recentBtnRef",ref:$n,class:te(["vs-btn vs-btn-menu vs-recent-btn",{open:s(Yn)}]),title:En.value,onClick:Ln},[h(oe,{class:"vs-topbar-ico",name:"clock",size:13}),o("span",U6,a(Es.value),1),_[17]||(_[17]=o("span",{class:"vs-caret"},null,-1))],10,z6),_[21]||(_[21]=o("span",{class:"vs-sep"},null,-1)),o("span",{class:"vs-project-path",title:s(n).projectDir??s(y)("vsNoProject")},a(c.value),9,H6),_[22]||(_[22]=o("span",{class:"vs-spacer"},null,-1)),o("button",{class:"vs-quickopen-trigger",title:s(y)("vsQuickOpenPlaceholder"),disabled:!s(n).projectDir,onClick:Ds},[h(oe,{name:"search",size:13}),o("span",G6,a(Bn.value?s(y)("vsSearchIndexing"):s(y)("vsQuickOpenPlaceholder")),1),_[18]||(_[18]=o("span",{class:"vs-quickopen-kbd"},"Ctrl+P",-1))],8,W6)],2),o("div",{class:te(["vs-body",{"right-folded":Ne.value,"side-right":s(n).sidebarSide==="right"}])},[o("div",{class:"vs-left",style:_t(nf.value)},[o("div",{class:te(["vs-activity",{btm:s(n).activityBar.position==="bottom"}]),onContextmenu:_e(Ad,["prevent"])},[(l(!0),r(ae,null,Ae(E.value,Y=>(l(),r("button",{key:Y.id,class:te(["vs-act-btn",{active:we.value===Y.id}]),disabled:Y.disabled,title:Y.title,onClick:Oe=>W(Y.id),onContextmenu:_e(Oe=>da(Y,Oe),["prevent","stop"])},[s(Ao)(Y.icon??"")?(l(),Xe(oe,{key:0,name:Y.icon??"",size:17},null,8,["name"])):(l(),r("span",K6,a(Y.title.slice(0,1)),1))],42,q6))),128))],34),o("div",X6,[kt(h(XS,{ref_key:"treeRef",ref:le,root:s(n).projectDir,"active-path":s(n).activeTab,onOpenFile:ss,onFileRemoved:ef,onFileRenamed:tf,onProjectMissing:yn,onRemoveProject:Jn},null,8,["root","active-path"]),[[ho,we.value==="files"]]),we.value==="search"?(l(),Xe(p6,{key:0,"project-dir":s(n).projectDir||"",onOpen:z},null,8,["project-dir"])):N("",!0),kt(h(c3,{class:"vs-git-view",onOpenDiff:Zs},null,512),[[ho,we.value==="git"]]),we.value==="git"&&!J.value?(l(),r("div",Y6,a(s(y)("vsGitNoRepo")),1)):N("",!0),ca.value?(l(),r("div",{key:2,ref_key:"extHostRef",ref:ra,class:"vs-ext-view"},null,512)):N("",!0)])],4),o("div",{class:te(["vs-split",{dragging:Eo.value}]),role:"separator","aria-orientation":"vertical",onMousedown:_e(sf,["prevent"])},null,34),o("div",J6,[h(i8,{tabs:Ye.value,active:st.value,onSelect:ia,onClose:fa,onSave:ys,onCloseSave:Yd,onCloseOthers:Jd,onCloseRight:Zd,onCloseAll:Qd},null,8,["tabs","active"]),o("div",Z6,[tn.value?(l(),r("div",Q6,[h(Vo,{lines:tn.value.lines,empty:s(y)("gitDiffEmpty")},null,8,["lines","empty"])])):s(n).activeTab?Ie.value?(l(),r("div",oT,[_[23]||(_[23]=o("span",{class:"vs-loading-spin","aria-hidden":"true"},null,-1)),o("span",null,a(s(y)("vsLoading")),1)])):rt.value?(l(),r("div",aT,a(rt.value),1)):ke.value?.binary?(l(),r("div",iT,[o("div",lT,a(s(y)("vsBinaryHint")),1),o("button",{class:"vs-btn",onClick:Xd},a(s(y)("vsOpenExternal")),1)])):(l(),Xe(I8,{key:5,ref_key:"editorRef",ref:Rn,path:s(n).activeTab,slot:s(e).slot,"initial-content":qe.value,"initial-view":Le.value,"doc-rev":ce.value,readonly:yt.value,dark:s(j)==="dark",onChange:zd,onCursor:Ud,onView:Hd,onContextmenu:Re},null,8,["path","slot","initial-content","initial-view","doc-rev","readonly","dark"])):(l(),r("div",eT,[h(oe,{class:"vs-empty-ico",name:"code",size:44}),o("div",tT,a(s(y)("vsEmptyTitle")),1),o("div",nT,a(s(y)("vsEmptyHint")),1),o("div",sT,[o("button",{class:"vs-btn",onClick:Ht},a(s(y)("vsOpenFolder")),1),o("button",{class:"vs-btn",onClick:_[0]||(_[0]=Y=>Tn("git"))},a(s(y)("menuCloneGit")),1)])]))]),o("div",rT,[J.value?(l(),r("button",{key:0,class:"vs-status-seg vs-status-btn",title:s(n).projectDir??"",onClick:_[1]||(_[1]=Y=>W("git"))},[h(oe,{name:"git",size:11}),ue(" "+a(J.value),1)],8,cT)):N("",!0),yt.value?(l(),r("span",uT,a(s(y)("vsReadonly")),1)):N("",!0),ut.value?(l(),r("button",{key:2,class:"vs-status-conflict",onClick:Kd},a(s(y)("vsConflictBadge")),1)):N("",!0),Vd.value?(l(),r("button",{key:3,ref_key:"extMenuBtnRef",ref:hr,class:te(["vs-status-seg vs-status-btn vs-status-ext",{open:s(ki)}]),title:s(y)("vsMenuExtensions"),onClick:Id},[h(oe,{name:"puzzle",size:11}),ue(" "+a(s(y)("vsMenuExtensions")),1)],10,dT)):N("",!0),_[24]||(_[24]=o("span",{class:"vs-status-spacer"},null,-1)),o("span",fT,"Ln "+a(Q.line)+", Col "+a(Q.col),1),o("button",{class:"vs-status-seg vs-status-btn",disabled:!s(n).activeTab,onClick:q},a(Ee.value),9,pT),o("button",{class:"vs-status-seg vs-status-btn",disabled:!s(n).activeTab,onClick:Mn},a(Z.value),9,vT),o("span",hT,a(it.value),1)])])],2),s(lt)?(l(),Xe(Zt,{key:0,items:On.value,x:s(xn),y:s(Cn),onClose:_[2]||(_[2]=Y=>lt.value=!1)},null,8,["items","x","y"])):N("",!0),s(ki)?(l(),Xe(Zt,{key:1,items:jd.value,x:s(Od),y:s(Ld),placement:"top",onClose:_[3]||(_[3]=Y=>ki.value=!1)},null,8,["items","x","y"])):N("",!0),s(Yn)?(l(),Xe(Zt,{key:2,items:cn.value,x:s(mn),y:s(Sn),onClose:_[4]||(_[4]=Y=>Yn.value=!1)},null,8,["items","x","y"])):N("",!0),Pe.value?(l(),r("div",{key:3,class:"vs-quickopen-backdrop",onMousedown:_e(Qn,["self"])},[o("div",{class:"vs-quickopen",onMousedown:_[9]||(_[9]=_e(()=>{},["stop"]))},[kt(o("input",{ref_key:"searchInputRef",ref:Be,"onUpdate:modelValue":_[5]||(_[5]=Y=>He.value=Y),class:"vs-quickopen-input",placeholder:Bn.value?s(y)("vsSearchIndexing"):s(y)("vsQuickOpenPlaceholder"),onInput:Zn,onKeydown:[_[6]||(_[6]=bt(_e(Y=>Fs(1),["prevent"]),["down"])),_[7]||(_[7]=bt(_e(Y=>Fs(-1),["prevent"]),["up"])),_[8]||(_[8]=bt(_e(Y=>Ys(),["prevent"]),["enter"])),bt(_e(Qn,["prevent"]),["esc"])]},null,40,mT),[[Lt,He.value]]),o("div",gT,[un.value.length>0?(l(),r(ae,{key:0},[(l(!0),r(ae,null,Ae(un.value,(Y,Oe)=>(l(),r("div",{key:Y.abs,class:te(["vs-search-row",{active:Oe===Ge.value}]),title:Y.abs,onMousedown:_e(pt=>Ys(Oe),["prevent"]),onMouseenter:pt=>Ge.value=Oe},[o("span",wT,a(Y.name),1),o("span",bT,a(Y.dir),1)],42,yT))),128)),Fn.value?(l(),r("div",_T,a(s(y)("vsSearchTruncated")),1)):N("",!0)],64)):He.value.trim()&&!Bn.value?(l(),r("div",kT,a(s(y)("vsSearchNoResult")),1)):N("",!0)])],32)],32)):N("",!0),s(M)?(l(),Xe(Zt,{key:4,items:Te.value,x:s(T),y:s(K),onClose:_[10]||(_[10]=Y=>M.value=!1)},null,8,["items","x","y"])):N("",!0),s(re)?(l(),Xe(Zt,{key:5,items:Gt.value,x:s(ct),y:s(wt),onClose:_[11]||(_[11]=Y=>re.value=!1)},null,8,["items","x","y"])):N("",!0),s(k)?(l(),Xe(Zt,{key:6,items:F.value,x:s(xe),y:s(de),onClose:_[12]||(_[12]=Y=>k.value=!1)},null,8,["items","x","y"])):N("",!0),At.value?(l(),Xe(Zt,{key:7,items:_i.value,x:Tt.value,y:dt.value,onClose:_[13]||(_[13]=Y=>At.value=!1)},null,8,["items","x","y"])):N("",!0),h(Bc),h(Qa,{modelValue:I.value,"onUpdate:modelValue":_[14]||(_[14]=Y=>I.value=Y),"initial-dir":ve.value,onConfirm:Ps},null,8,["modelValue","initial-dir"]),h(Qa,{modelValue:$e.value,"onUpdate:modelValue":_[15]||(_[15]=Y=>$e.value=Y),mode:"file","initial-dir":me.value,"initial-name":ne.value,onConfirm:Wd},null,8,["modelValue","initial-dir","initial-name"])],12,L6))}}),CT=xt(xT,[["__scopeId","data-v-8747da63"]]),$T={class:"fw-term-headicon"},ST={class:"fw-term-tag"},ET=["title"],TT={class:"fw-term-note"},DT=["title"],FT=["title"],RT={key:0,class:"fw-term-searchbar"},NT=["placeholder","onKeydown"],PT=["title"],AT=["title"],MT=["title"],OT=["title"],LT={class:"fw-term-footer"},BT=["title","disabled"],IT=["title","disabled"],jT=["title"],VT=["title"],zT=["title"],UT={class:"fw-term-shellhint"},HT=["title"],WT=["title"],Gi=320,qi=240,Sc=10,Ec=24,GT=ht({__name:"TerminalWindow",props:{tab:{}},emits:["close"],setup(t,{emit:e}){const n=t,i=e,{t:c}=Bt(),u=m(680),v=m(460),d=m(0),p=m(0),w=m(null);let b=!1;const x=m(null),O=B(()=>{const ze=n.tab.cwd?.trim();return ze?ze.replace(/[\\/]$/,"").split(/[\\/]/).pop()??"":""}),L=B(()=>n.tab.shell==="powershell"?"PS":"cmd"),P=B(()=>!!n.tab.ssh&&!n.tab.sshDegraded),j=B(()=>!!n.tab.ssh),U=B(()=>{const ze=n.tab.ssh;return ze?ze.remote&&ze.remote!=="/"?`${ze.label} · ${ze.remote}`:ze.label:""}),$=B(()=>P.value?U.value:O.value||n.tab.cwd||c("terminalTitle")),ee=B(()=>P.value?U.value:`${L.value} · ${O.value||n.tab.cwd||c("terminal")}`);function G(ze){return Math.min(Math.max(0,ze),Math.max(0,window.innerWidth-u.value))}function A(ze){return Math.min(Math.max(0,ze),Math.max(0,window.innerHeight-v.value))}function pe(ze){u.value=Math.max(Gi,ze.w),v.value=Math.max(qi,ze.h),d.value=G(ze.x),p.value=A(ze.y)}function I(){fv(n.tab.id,{x:d.value,y:p.value,w:u.value,h:v.value})}const ve=B(()=>({position:"fixed",left:`${d.value}px`,top:`${p.value}px`,width:`${u.value}px`,height:`${v.value}px`}));let $e=0;Ze([d,p,u,v],()=>{b&&(window.clearTimeout($e),$e=window.setTimeout(I,250))});let me=!1,ne=0,le=0;function Se(ze){ze.target.closest(".fw-term-headclose, .fw-term-headmin")||(b=!0,me=!0,ne=ze.clientX-d.value,le=ze.clientY-p.value,document.body.style.userSelect="none",document.addEventListener("mousemove",Ve),document.addEventListener("mouseup",we))}function Ve(ze){if(!me)return;const Je=w.value,et=Je?.offsetWidth??u.value,lt=Je?.offsetHeight??v.value;d.value=Math.min(Math.max(0,ze.clientX-ne),window.innerWidth-et),p.value=Math.min(Math.max(0,ze.clientY-le),Math.max(0,window.innerHeight-lt))}function we(){me&&(me=!1,document.body.style.userSelect="",document.removeEventListener("mousemove",Ve),document.removeEventListener("mouseup",we),I())}Pt(we);let Ne=!1,W=0,J=0,z=0,Q=0;function ge(ze){b=!0,Ne=!0,W=ze.clientX,J=ze.clientY,z=u.value,Q=v.value,document.body.style.userSelect="none",document.addEventListener("mousemove",je),document.addEventListener("mouseup",Ke)}function je(ze){if(!Ne)return;const Je=Math.max(Gi,window.innerWidth-d.value-4),et=Math.max(qi,window.innerHeight-p.value-4);u.value=Math.min(Math.max(Gi,z+(ze.clientX-W)),Je),v.value=Math.min(Math.max(qi,Q+(ze.clientY-J)),et)}function Ke(){Ne&&(Ne=!1,document.body.style.userSelect="",document.removeEventListener("mousemove",je),document.removeEventListener("mouseup",Ke),I())}Pt(Ke);function Qe(){b=!0,u.value=Math.min(680,window.innerWidth-12),v.value=Math.min(460,window.innerHeight-12),I()}let ye=null,be=null,Ye=null,st=null,fe=null;function ke(ze){const Je=ze??x.value,et=getComputedStyle(Je||document.documentElement),lt=(xn,Cn)=>(et.getPropertyValue(xn)||Cn).trim();return{background:lt("--base","#1e1e2e"),foreground:lt("--text","#cdd6f4"),cursor:lt("--text","#cdd6f4"),cursorAccent:lt("--base","#1e1e2e"),selectionBackground:lt("--wt-sel-bg","rgba(137, 180, 250, 0.35)"),black:lt("--wt-term-black","#11111b"),red:lt("--red","#f38ba8"),green:lt("--green","#a6e3a1"),yellow:lt("--yellow","#f9e2af"),blue:lt("--blue","#89b4fa"),magenta:lt("--mauve","#cba6f7"),cyan:lt("--teal","#94e2d5"),white:lt("--wt-term-white","#bac2de"),brightBlack:lt("--wt-term-brightblack","#585b70"),brightRed:lt("--red","#f38ba8"),brightGreen:lt("--green","#a6e3a1"),brightYellow:lt("--yellow","#f9e2af"),brightBlue:lt("--sapphire","#74c7ec"),brightMagenta:lt("--mauve","#cba6f7"),brightCyan:lt("--teal","#94e2d5"),brightWhite:lt("--wt-term-brightwhite","#cdd6f4")}}function qe(ze,Je){const et=x.value;return(getComputedStyle(et||document.documentElement).getPropertyValue(ze)||Je).trim()}function ce(){const ze=x.value;if(!ze||ye)return;const Je=yv(n.tab.id);st=document.createElement("div"),st.className="fw-term-xterm",ze.appendChild(st);const et=new Of({cursorBlink:!0,fontSize:Z.value,fontFamily:'Consolas, "Cascadia Code", "Courier New", monospace',scrollback:1e4,theme:ke(st),allowTransparency:!1,allowProposedApi:!0});ye=et,be=new If,et.loadAddon(be),et.loadAddon(new Lf),Ye=new Bf,et.loadAddon(Ye),et.attachCustomKeyEventHandler(Te),et.open(st),et.write(n.tab.output),et.onData(lt=>rv(n.tab.session,lt)),Or(n.tab.id,lt=>ye?.write(lt)),Dt(()=>{Ie(),Je&&ye?.focus()})}function Ie(){try{be?.fit()}catch{}rt()}function rt(){ye&&(ye.cols<2||ye.rows<2||cv(n.tab.session,ye.cols,ye.rows))}function yt(){ye?.focus()}function ut(ze){ze.target?.closest("button, input, textarea, .fw-term-resizer, .fw-term-headmin, .fw-term-headclose")||ye?.focus()}const it=m(!1),Le=m(""),H=m(!1),R=m(null),Z=B(()=>Ue.termFontSize);function Ee(){return{caseSensitive:H.value,incremental:!0,decorations:{matchBackground:qe("--wt-search-match-bg","rgba(166, 173, 200, 0.4)"),matchBorder:qe("--wt-search-match-bg","rgba(166, 173, 200, 0)"),activeMatchBackground:qe("--wt-search-active-bg","rgba(166, 227, 161, 0.6)"),activeMatchBorder:qe("--wt-search-active-border","#a6e3a1"),matchOverviewRuler:qe("--wt-search-active-border","#a6e3a1"),activeMatchColorOverviewRuler:qe("--wt-search-active-border","#a6e3a1")}}}function M(ze){const Je=Le.value.trim();if(!Je){Ye?.clearDecorations();return}ze?Ye?.findNext(Je,Ee()):Ye?.findPrevious(Je,Ee())}function T(){it.value=!0,Dt(()=>{R.value?.focus(),R.value?.select()}),M(!0)}function K(){it.value=!1,Le.value="",Ye?.clearDecorations(),yt()}Ze([Le,H],()=>{it.value&&M(!0)});function S(ze){const Je=Math.min(Math.max(Sc,Math.round(ze)),Ec);Je!==Ue.termFontSize&&(Ue.termFontSize=Je,Un(),ye&&(ye.options.fontSize=Je),Dt(Ie))}async function q(){try{const ze=await navigator.clipboard.readText();ze&&ye?.paste(ze)}catch{}}function Te(ze){if(ze.type!=="keydown"||!ye)return!0;const Je=ze.ctrlKey||ze.metaKey,et=ze.key.toLowerCase();if(Je&&et==="f")return ze.preventDefault(),T(),!1;if(Je&&et==="c"){const lt=ye.getSelection();return lt?(ze.preventDefault(),navigator.clipboard.writeText(lt).catch(()=>{}),ye.clearSelection(),!1):!0}return Je&&(et==="v"||et==="y")?(ze.preventDefault(),q(),!1):(Je||ze.altKey)&&(et==="="||et==="+"||et==="-"||et==="_")?(ze.preventDefault(),S(Z.value+(et==="-"||et==="_"?-1:1)),!1):Je&&et==="0"?(ze.preventDefault(),S(13),!1):!0}function re(){n.tab.shell=n.tab.shell==="powershell"?"cmd":"powershell",jr(n.tab,De.key),Dt(Ie)}function ct(){jr(n.tab,De.key),Dt(Ie)}function wt(){rs.value?X("ok",c("terminalAdminOn")):X("info",c("terminalAdminHint"))}function Ot(){n.tab.output="",ye?.clear()}function Mn(){Wp(n.tab.id)}Ze(()=>tl(n.tab.id),ze=>{ze||Dt(()=>{Ie(),ye?.focus()})});let Gt;return typeof MutationObserver<"u"&&(Gt=new MutationObserver(()=>{ye&&st&&(ye.options.theme=ke(st))}),Gt.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]})),Pt(()=>Gt?.disconnect()),ln(()=>{const ze=dv(n.tab.id);pe(ze??mv()),eu(),ce(),x.value&&typeof ResizeObserver<"u"&&(fe=new ResizeObserver(()=>Ie()),fe.observe(x.value))}),Pt(()=>{fe?.disconnect(),fe=null,cu(n.tab.session),Or(n.tab.id,null),ye?.dispose(),ye=null,be=null,Ye=null,st?.remove(),st=null}),(ze,Je)=>(l(),r("div",{ref_key:"rootEl",ref:w,class:"fw-term-window",style:_t(ve.value),onMousedown:ut},[o("div",{class:"fw-term-head",onMousedown:_e(Se,["prevent"])},[o("span",$T,[h(oe,{name:"terminal",size:13})]),o("span",ST,a(s(c)("terminal"))+" #"+a(t.tab.name),1),P.value?(l(),r("span",{key:0,class:"fw-term-sshbadge",title:s(c)("termSshBadge")},"SSH",8,ET)):N("",!0),o("span",TT,a($.value),1),o("span",{class:"fw-term-headmin",title:s(c)("terminalMinimize"),onClick:_e(Mn,["stop"])},"–",8,DT),o("span",{class:"fw-term-headclose",title:s(c)("terminalCloseTitle"),onClick:Je[0]||(Je[0]=_e(et=>i("close"),["stop"]))},"✕",8,FT)],32),it.value?(l(),r("div",RT,[kt(o("input",{ref_key:"searchInputEl",ref:R,"onUpdate:modelValue":Je[1]||(Je[1]=et=>Le.value=et),class:"fw-term-search-input",placeholder:s(c)("termSearchPlaceholder"),spellcheck:"false",onKeydown:[Je[2]||(Je[2]=bt(_e(et=>M(!0),["prevent"]),["enter"])),Je[3]||(Je[3]=bt(_e(et=>M(!1),["shift","prevent"]),["enter"])),bt(_e(K,["prevent"]),["esc"])]},null,40,NT),[[Lt,Le.value]]),o("button",{class:te(["fw-term-search-case",{on:H.value}]),title:s(c)("termSearchCase"),onClick:Je[4]||(Je[4]=et=>H.value=!H.value)},"Aa",10,PT),o("button",{class:"fw-term-search-btn",title:s(c)("termSearchPrev"),onClick:Je[5]||(Je[5]=et=>M(!1))},"▲",8,AT),o("button",{class:"fw-term-search-btn",title:s(c)("termSearchNext"),onClick:Je[6]||(Je[6]=et=>M(!0))},"▼",8,MT),o("button",{class:"fw-term-search-btn fw-term-search-close",title:s(c)("termSearchClose"),onClick:K},"✕",8,OT)])):N("",!0),o("div",{ref_key:"outEl",ref:x,class:"fw-term-out","box-":"double",onClick:yt},null,512),o("div",LT,[o("button",{class:"fw-term-btn",onClick:Ot},a(s(c)("terminalClear")),1),o("button",{class:"fw-term-btn",title:s(c)("termFontSmaller"),disabled:Z.value<=Sc,onClick:Je[7]||(Je[7]=et=>S(Z.value-1))},"A−",8,BT),o("button",{class:"fw-term-btn",title:s(c)("termFontLarger"),disabled:Z.value>=Ec,onClick:Je[8]||(Je[8]=et=>S(Z.value+1))},"A+",8,IT),j.value?(l(),r("button",{key:1,class:"fw-term-btn",title:s(c)("termSshReconnectTitle"),onClick:ct},a(s(c)("termSshReconnect")),9,VT)):(l(),r("button",{key:0,class:"fw-term-btn",title:s(c)("terminalShellSwitch"),onClick:re},a(L.value),9,jT)),s(rs)!==null&&!P.value?(l(),r("button",{key:2,class:te(["fw-term-admin",{on:s(rs)}]),title:s(rs)?s(c)("terminalAdminOn"):s(c)("terminalAdminOff"),onClick:wt},[h(oe,{name:"shield",size:11}),o("span",null,a(s(rs)?s(c)("terminalAdmin"):s(c)("terminalAdminNormal")),1)],10,zT)):N("",!0),Je[9]||(Je[9]=o("div",{class:"fw-spacer"},null,-1)),o("span",UT,a(ee.value),1),o("span",{class:"fw-term-kbdhint",title:s(c)("termCopyHint")},"Ctrl+C 复制 · Ctrl+V 粘贴 · Ctrl+F 搜索",8,HT)]),o("div",{class:"fw-term-resizer",title:s(c)("terminalResizeTitle"),onMousedown:_e(ge,["prevent"]),onDblclick:_e(Qe,["stop"])},null,40,WT)],36))}}),qT=xt(GT,[["__scopeId","data-v-6d3078d7"]]),KT=["title"],XT={class:"fw-term-card-head"},YT={class:"fw-term-card-ico"},JT={class:"fw-term-card-title"},ZT=["title"],QT=["title"],e4=["title"],t4={class:"fw-term-card-body"},n4=ht({__name:"TerminalMiniWindow",props:{tab:{}},setup(t){const e=t,n=B(()=>{if(e.tab.ssh)return e.tab.ssh.label;const d=e.tab.cwd?.trim();if(d){const p=d.replace(/[\\/]$/,"").split(/[\\/]/).pop();if(p)return p}return y("terminal")}),i=B(()=>{const d=e.tab.ssh;return d?d.remote&&d.remote!=="/"?`${d.label} · ${d.remote}`:d.label:e.tab.cwd||y("terminal")}),c=B(()=>{const d=Kp(e.tab.id);if(!d)return"";const p=d.replace(/\r/g,"").split(`
`);let w=p.length;for(;w>0&&!p[w-1].trim();)w--;return p.slice(Math.max(0,w-5),w).join(`
`)});function u(){Ws.value=e.tab.id,Vl(e.tab.id)}function v(){uu(e.tab.id),St.value.length||(De.termOpen=!1)}return(d,p)=>(l(),r("div",{class:te(["fw-term-card",{active:t.tab.id===s(Ws)}]),title:i.value,onClick:u},[o("div",XT,[o("span",YT,[h(oe,{name:"terminal",size:12})]),o("span",JT,a(n.value),1),t.tab.ssh?(l(),r("span",{key:0,class:"fw-term-card-ssh",title:s(y)("termSshBadge")},"SSH",8,ZT)):s(rs)?(l(),r("span",{key:1,class:"fw-term-card-admin",title:s(y)("terminalAdminOn")},[h(oe,{name:"shield",size:10})],8,QT)):N("",!0),o("span",{class:"fw-term-card-close",title:s(y)("terminalCloseTitle"),onClick:_e(v,["stop"])},"✕",8,e4)]),o("pre",t4,a(c.value),1)],10,KT))}}),s4=xt(n4,[["__scopeId","data-v-cfbf612f"]]),o4=["title"],a4={key:0,class:"dsh-term-dock-count"},i4=["title"],l4={class:"dsh-term-dock-listhead"},r4=["title"],c4=9,$a=36,Yt=8,Tc=4,Sa=48,u4=ht({__name:"TerminalHost",setup(t){function e(){return document.documentElement.getAttribute("data-theme")==="light"?"light":"dark"}function n(){const z=document.getElementById("dsh-term-root");z&&z.setAttribute("data-term-theme",e())}n();let i;typeof MutationObserver<"u"&&(i=new MutationObserver(n),i.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]})),Pt(()=>i?.disconnect());const c=B(()=>St.value.filter(z=>tl(z.id))),u=m(null),v=m(!1),d=m(!1),p=B(()=>v.value),w=B(()=>{const z=bn.value;return!!z&&z.x<340}),b=B(()=>{const z=bn.value;return!!z&&z.y>window.innerHeight/2}),x=B(()=>{const z=bn.value;return z?{left:`${z.x}px`,top:`${z.y}px`}:void 0}),O=m(null),L=m(360);function P(){const z=u.value?.getBoundingClientRect();if(!z)return;const Q=b.value?z.bottom-Yt:window.innerHeight-z.top-Yt;L.value=Math.max(180,Math.min(Math.round(Q)-4,Math.round(window.innerHeight*.72)))}function j(z,Q){const ge=Math.max(Yt,window.innerWidth-$a-Yt),je=Math.max(Yt,window.innerHeight-$a-Yt);return{x:Math.min(Math.max(Yt,z),ge),y:Math.min(Math.max(Yt,Q),je)}}function U(z,Q){const ge=j(z,Q),je=Math.max(Yt,window.innerWidth-$a-Yt),Ke=Math.max(Yt,window.innerHeight-$a-Yt);let Qe=ge.x,ye=ge.y;return ge.x-Yt<=Sa?Qe=Yt:je-ge.x<=Sa&&(Qe=je),ge.y-Yt<=Sa?ye=Yt:Ke-ge.y<=Sa&&(ye=Ke),{x:Qe,y:ye}}let $=null,ee=!1;function G(z){if(z.button!==0||!u.value)return;const Q=u.value.getBoundingClientRect();bn.value||(bn.value={x:Q.left,y:Q.top}),$={pid:z.pointerId,fromX:z.clientX,fromY:z.clientY,baseX:bn.value.x,baseY:bn.value.y,moved:!1},z.currentTarget.setPointerCapture(z.pointerId)}function A(z){if(!$||z.pointerId!==$.pid)return;const Q=z.clientX-$.fromX,ge=z.clientY-$.fromY;!$.moved&&Math.abs(Q)<Tc&&Math.abs(ge)<Tc||($.moved=!0,d.value=!0,bn.value=j($.baseX+Q,$.baseY+ge))}function pe(z){if(!$||z.pointerId!==$.pid)return;ee=$.moved;const Q=$.moved;if($=null,d.value=!1,Q){const ge=bn.value;ge&&(bn.value=U(ge.x,ge.y))}}function I(){if(ee){ee=!1;return}v.value=!v.value}const ve=m(!1),$e=m({x:0,y:0});function me(z){v.value=!1,$e.value={x:z.clientX,y:z.clientY},ve.value=!0}const ne=B(()=>{const z=c.value.map(Q=>({label:le(Q),icon:"terminal",onClick:()=>{Ws.value=Q.id,Vl(Q.id)},trailing:{icon:"close",title:y("terminalCloseTitle"),onClick:()=>void Se(Q.id)}}));return z.length&&z.push({separator:!0}),z.push({label:y("terminalDockCloseAll"),icon:"close",onClick:()=>void Ve()}),z});function le(z){if(z.ssh)return z.ssh.label;const Q=z.cwd?.trim();if(Q){const ge=Q.replace(/[\\/]$/,"").split(/[\\/]/).pop();if(ge)return ge}return y("terminal")}async function Se(z){Ur(z),St.value.length||(De.termOpen=!1)}async function Ve(){v.value=!1,await uv(),De.termOpen=!1}function we(z){if(!p.value)return;const Q=u.value,ge=z.target;Q&&ge&&Q.contains(ge)||(v.value=!1)}function Ne(){const z=bn.value;z&&(bn.value=j(z.x,z.y)),Dt(P)}function W(z=!1){if(St.value.length>=c4)return;const Q=De.termRequestSsh,ge=Q?"":De.termRequestCwd||De.root||De.explorerPath||"",je=De.termRequestCmd;De.termRequestCwd="",De.termRequestCmd="",De.termRequestSsh=null,gv(De.key,{cwd:ge,initCmd:Q?void 0:je||void 0,fallbackCmd:Q&&je||void 0,shell:Ue.termShell,ssh:Q??void 0,focus:z})}function J(z){Ur(z),St.value.length===0&&(De.termOpen=!1)}return Ze(p,z=>{z&&Dt(P)}),Ze(()=>c.value.length,z=>{z||(v.value=!1)}),Ze(Xl,()=>{De.termOpen||(De.termOpen=!0),W(!0)}),Ze(()=>De.termOpen,z=>{z&&St.value.length===0&&W(!0)}),ln(()=>{eu(),window.addEventListener("resize",Ne),document.addEventListener("pointerdown",we,!0),Dt(P),De.termOpen&&St.value.length===0&&W(!1)}),Pt(()=>{window.removeEventListener("resize",Ne),document.removeEventListener("pointerdown",we,!0)}),(z,Q)=>(l(),r(ae,null,[(l(!0),r(ae,null,Ae(s(St),ge=>kt((l(),Xe(qT,{key:ge.id,tab:ge,onClose:je=>J(ge.id)},null,8,["tab","onClose"])),[[ho,s(De).termOpen&&!s(tl)(ge.id)]])),128)),s(De).termOpen&&c.value.length?(l(),r("div",{key:0,ref_key:"dockRef",ref:u,class:te(["dsh-term-dock",{"is-floating":!!s(bn),"is-dragging":d.value,"is-flip":w.value,"is-bottom":b.value}]),style:_t(x.value)},[o("div",{class:"dsh-term-dock-btn",title:s(y)("terminalDockDragTitle"),onClick:I,onContextmenu:_e(me,["prevent"]),onPointerdown:G,onPointermove:A,onPointerup:pe,onPointercancel:pe},[h(oe,{name:"terminal",size:15}),c.value.length>1?(l(),r("span",a4,a(c.value.length),1)):N("",!0),s(rs)?(l(),r("span",{key:1,class:"dsh-term-dock-dot",title:s(y)("terminalAdminOn")},null,8,i4)):N("",!0)],40,o4),p.value&&!d.value?(l(),r("div",{key:0,ref_key:"listRef",ref:O,class:"dsh-term-dock-list",style:_t({maxHeight:`${L.value}px`})},[o("div",l4,a(s(y)("terminalDockSessions")),1),(l(!0),r(ae,null,Ae(c.value,ge=>(l(),Xe(s4,{key:ge.id,tab:ge},null,8,["tab"]))),128)),o("button",{class:"dsh-term-dock-new",title:s(y)("terminalNew"),onClick:Q[0]||(Q[0]=_e(ge=>W(!0),["stop"]))},"＋ "+a(s(y)("terminalNew")),9,r4)],4)):N("",!0)],6)):N("",!0),ve.value?(l(),Xe(Zt,{key:1,items:ne.value,x:$e.value.x,y:$e.value.y,onClose:Q[1]||(Q[1]=ge=>ve.value=!1)},null,8,["items","x","y"])):N("",!0)],64))}}),d4=xt(u4,[["__scopeId","data-v-6b6a1886"]]),f4=/[<>:"|?*\u0000-\u001f]/g,Dc=120;function p4(t){let e=(t??"").trim().replace(/\\/g,"/");return!e||e.includes("/")||(e=e.replace(f4,"_").replace(/[. ]+$/,""),!e||e==="."||e==="..")?null:(e.length>Dc&&(e=e.slice(0,Dc).replace(/[. ]+$/,"")),e||null)}function Ki(t){let e=(t??"").trim().replace(/\\/g,"/");if(!e)return"";const n=/^[^/\s]+@[^/:\s]+:(.*)$/.exec(e);n?e=n[1]:e=e.replace(/^[a-zA-Z][a-zA-Z0-9+.-]*:\/\/[^/]*/,""),e=e.split("?")[0].split("#")[0],e=e.replace(/\/+$/,"");const c=(e.split("/").filter(Boolean).pop()??"").replace(/\.git$/i,"");return p4(c)??""}const Fc="__new__";function Rd(t){const{t:e}=Bt(),n=m({url:"",dir:qt.dir,name:"",shallow:!1,revision:"",accountId:""}),i=m(!1),c=m(!1),u=m(""),v=m(0),d=m(!1);let p=0,w=0;function b(we,Ne){const W=(we??"").trim();if(!W)return"";const J=W.includes("\\")?"\\":"/";return`${W.replace(/[\\/]+$/,"")}${J}${Ne}`}const x=B(()=>{const we=n.value.name.trim()||Ki(n.value.url);return we?b(n.value.dir,we):""}),O=B(()=>!!n.value.url.trim()&&!!n.value.dir.trim()&&!!x.value);Ze(()=>n.value.url,we=>{i.value||(n.value.name=Ki(we))}),Ze(()=>n.value.name,(we,Ne)=>{we!==Ki(n.value.url)&&Ne!==void 0&&(i.value=!0)});const L=B(()=>Nn.value.filter(we=>we.kind===t)),P=B(()=>L.value.find(we=>we.id===n.value.accountId)??null),j=m(null);let U=0;async function $(){const we=n.value.url.trim();if(!we||n.value.accountId){j.value=null;return}const Ne=await Zc(t,we).catch(()=>null);j.value=Ne?.account??null}Ze(()=>n.value.url,()=>{U&&window.clearTimeout(U),U=window.setTimeout(()=>void $(),400)});const ee=B(()=>n.value.accountId?P.value:j.value),G=B(()=>n.value.dir.trim().startsWith("ssh://"));let A=[];const pe=m(!1);function I(){A=Nn.value.map(we=>we.id),pe.value=!0,rr({kind:t,url:n.value.url.trim()})}function ve(we){const Ne=we.target,W=Ne.value;if(W===Fc){Ne.value=n.value.accountId,I();return}n.value.accountId=W}Ze(()=>kn.open,async we=>{if(we||!pe.value)return;pe.value=!1,await ro();const Ne=Nn.value.find(W=>W.kind===t&&!A.includes(W.id));Ne&&(n.value.accountId=Ne.id)}),Ze(()=>qt.open,we=>{we&&(n.value={url:"",dir:qt.dir,name:"",shallow:!1,revision:"",accountId:""},i.value=!1,u.value="",v.value=0,c.value=!1,j.value=null,ro())},{immediate:!0});function $e(we){n.value.dir=we}function me(we){we||c.value||oc()}function ne(){v.value=Math.round((Date.now()-w)/1e3)}async function le(){if(c.value||!O.value)return;const{url:we,dir:Ne,shallow:W,revision:J}=n.value;u.value="",c.value=!0,w=Date.now(),v.value=0,p=window.setInterval(ne,1e3);try{const z=await Pp(t,{url:we.trim(),dir:Ne.trim(),name:n.value.name.trim()||void 0,depth:t==="git"&&W?1:0,revision:t==="svn"&&J.trim()||void 0,accountId:n.value.accountId||void 0,key:qt.key||void 0}),Q=qt.onDone;oc(),X("ok",e(t==="git"?"repoCloneDoneGit":"repoCloneDoneSvn",{name:z.name}));try{Q?.({path:z.path,name:z.name})}catch{}}catch(z){u.value=z?.message||String(z)}finally{c.value=!1,p&&(window.clearInterval(p),p=0)}}function Se(){p&&window.clearInterval(p),U&&window.clearTimeout(U),p=0,U=0}function Ve(we){return`${we.name} · ${we.url||e("accAllRepos")}`}return{t:e,state:n,busy:c,error:u,elapsed:v,pickerOpen:d,targetPath:x,canSubmit:O,accountOptions:L,effectiveAccount:ee,isRemoteDir:G,newAccountValue:Fc,accountLabel:Ve,onAccountChange:ve,onDirPicked:$e,onModel:me,submit:le,dispose:Se}}const v4={class:"fw-clone-head"},h4={class:"fw-clone-badge"},m4={class:"fw-clone-headtext"},g4={class:"fw-clone-headtitle"},y4={class:"fw-clone-headsub"},w4={class:"fw-clone"},b4={class:"fw-clone-field"},_4={class:"fw-clone-label"},k4=["placeholder","disabled"],x4={key:0,class:"fw-clone-field"},C4={class:"fw-clone-label"},$4=["value","disabled"],S4={value:""},E4=["value"],T4=["value"],D4={key:0,class:"fw-clone-tip"},F4={class:"fw-clone-field"},R4={class:"fw-clone-label"},N4={class:"fw-clone-row"},P4=["placeholder","disabled"],A4=["disabled"],M4={class:"fw-clone-field"},O4={class:"fw-clone-label"},L4=["placeholder","disabled"],B4={class:"fw-clone-check fw-clone-slot"},I4=["disabled"],j4={class:"fw-clone-checkhint"},V4=["title"],z4={class:"fw-clone-targetlabel"},U4={class:"fw-clone-targetval"},H4={key:1,class:"fw-clone-busy"},W4={class:"fw-clone-elapsed"},G4={key:2,class:"fw-clone-tip"},q4={key:3,class:"fw-clone-error"},K4=["disabled"],X4=["disabled"],Y4=ht({__name:"GitCloneDialog",setup(t){const{t:e,state:n,busy:i,error:c,elapsed:u,pickerOpen:v,targetPath:d,canSubmit:p,accountOptions:w,effectiveAccount:b,isRemoteDir:x,newAccountValue:O,accountLabel:L,onAccountChange:P,onDirPicked:j,onModel:U,submit:$,dispose:ee}=Rd("git");return Pt(ee),(G,A)=>{const pe=rn;return l(),r(ae,null,[h(pe,{"model-value":s(qt).open,width:"560px","append-to-body":"",class:"fw-clone-dialog fw-clone-git","close-on-click-modal":!1,"close-on-press-escape":!s(i),"show-close":!s(i),"onUpdate:modelValue":s(U)},{header:se(()=>[o("div",v4,[o("span",h4,[h(oe,{name:"git",size:20})]),o("div",m4,[o("div",g4,a(s(e)("repoCloneTitleGit")),1),o("div",y4,a(s(e)("repoCloneCaptionGit")),1)])])]),footer:se(()=>[o("button",{class:"fw-clone-btn",disabled:s(i),onClick:A[7]||(A[7]=I=>s(U)(!1))},a(s(e)("cancel")),9,K4),o("button",{class:"fw-clone-btn primary",disabled:s(i)||!s(p),onClick:A[8]||(A[8]=(...I)=>s($)&&s($)(...I))},a(s(e)("repoCloneActionGit")),9,X4)]),default:se(()=>[o("div",w4,[o("label",b4,[o("span",_4,a(s(e)("repoCloneUrl")),1),kt(o("input",{"onUpdate:modelValue":A[0]||(A[0]=I=>s(n).url=I),class:"fw-clone-input",placeholder:s(e)("repoCloneUrlGitPlaceholder"),spellcheck:"false",disabled:s(i),onKeyup:A[1]||(A[1]=bt((...I)=>s($)&&s($)(...I),["enter"]))},null,40,k4),[[Lt,s(n).url]])]),s(x)?N("",!0):(l(),r("label",x4,[o("span",C4,a(s(e)("repoCloneAccount")),1),o("select",{class:"fw-clone-input fw-clone-select",value:s(n).accountId,disabled:s(i),onChange:A[2]||(A[2]=(...I)=>s(P)&&s(P)(...I))},[o("option",S4,a(s(e)("repoCloneAccountAuto")),1),(l(!0),r(ae,null,Ae(s(w),I=>(l(),r("option",{key:I.id,value:I.id},a(s(L)(I)),9,E4))),128)),o("option",{value:s(O)},a(s(e)("repoCloneAccountNew")),9,T4)],40,$4),s(n).url.trim()||s(n).accountId?(l(),r("span",D4,[s(b)?(l(),r(ae,{key:0},[ue(a(s(e)("accEffective"))+" "+a(s(b).name)+"（"+a(s(b).username)+"@"+a(s(b).host)+"） ",1)],64)):(l(),r(ae,{key:1},[ue(a(s(e)("accEffectiveNone")),1)],64))])):N("",!0)])),o("label",F4,[o("span",R4,a(s(e)("repoCloneDir")),1),o("div",N4,[kt(o("input",{"onUpdate:modelValue":A[3]||(A[3]=I=>s(n).dir=I),class:"fw-clone-input",placeholder:s(e)("repoCloneDirPlaceholder"),spellcheck:"false",disabled:s(i)},null,8,P4),[[Lt,s(n).dir]]),o("button",{class:"fw-clone-btn",disabled:s(i),onClick:A[4]||(A[4]=I=>v.value=!0)},a(s(e)("repoCloneBrowse")),9,A4)])]),o("label",M4,[o("span",O4,a(s(e)("repoCloneName")),1),kt(o("input",{"onUpdate:modelValue":A[5]||(A[5]=I=>s(n).name=I),class:"fw-clone-input",placeholder:s(e)("repoCloneNamePlaceholder"),spellcheck:"false",disabled:s(i)},null,8,L4),[[Lt,s(n).name]])]),o("label",B4,[kt(o("input",{"onUpdate:modelValue":A[6]||(A[6]=I=>s(n).shallow=I),type:"checkbox",disabled:s(i)},null,8,I4),[[vf,s(n).shallow]]),o("span",null,a(s(e)("repoCloneShallow")),1),o("span",j4,a(s(e)("repoCloneShallowHint")),1)]),o("div",{class:"fw-clone-target",title:s(d)||void 0},[h(oe,{name:"folderOpen",size:13}),o("span",z4,a(s(e)("repoCloneTargetGit")),1),o("span",U4,a(s(d)||s(e)("repoCloneTargetEmpty")),1)],8,V4),s(i)?(l(),r("div",H4,[A[10]||(A[10]=o("span",{class:"fw-clone-spin","aria-hidden":"true"},null,-1)),o("span",null,a(s(e)("repoCloneRunningGit")),1),o("span",W4,a(s(e)("repoCloneElapsed",{s:s(u)})),1)])):N("",!0),s(i)?(l(),r("div",G4,a(s(e)("repoCloneKeepOpen")),1)):N("",!0),s(c)?(l(),r("div",q4,a(s(c)),1)):N("",!0)])]),_:1},8,["model-value","close-on-press-escape","show-close","onUpdate:modelValue"]),h(Qa,{modelValue:s(v),"onUpdate:modelValue":A[9]||(A[9]=I=>Pc(v)?v.value=I:null),mode:"folder","initial-dir":s(n).dir,onConfirm:s(j)},null,8,["modelValue","initial-dir","onConfirm"])],64)}}}),J4={class:"fw-clone-head"},Z4={class:"fw-clone-badge"},Q4={class:"fw-clone-headtext"},e5={class:"fw-clone-headtitle"},t5={class:"fw-clone-headsub"},n5={class:"fw-clone"},s5={class:"fw-clone-field"},o5={class:"fw-clone-label"},a5=["placeholder","disabled"],i5={key:0,class:"fw-clone-field"},l5={class:"fw-clone-label"},r5=["value","disabled"],c5={value:""},u5=["value"],d5=["value"],f5={key:0,class:"fw-clone-tip"},p5={class:"fw-clone-field"},v5={class:"fw-clone-label"},h5={class:"fw-clone-row"},m5=["placeholder","disabled"],g5=["disabled"],y5={class:"fw-clone-field"},w5={class:"fw-clone-label"},b5=["placeholder","disabled"],_5={class:"fw-clone-field"},k5={class:"fw-clone-label"},x5=["placeholder","disabled"],C5=["title"],$5={class:"fw-clone-targetlabel"},S5={class:"fw-clone-targetval"},E5={key:1,class:"fw-clone-busy"},T5={class:"fw-clone-elapsed"},D5={key:2,class:"fw-clone-tip"},F5={key:3,class:"fw-clone-error"},R5=["disabled"],N5=["disabled"],P5=ht({__name:"SvnCheckoutDialog",setup(t){const{t:e,state:n,busy:i,error:c,elapsed:u,pickerOpen:v,targetPath:d,canSubmit:p,accountOptions:w,effectiveAccount:b,isRemoteDir:x,newAccountValue:O,accountLabel:L,onAccountChange:P,onDirPicked:j,onModel:U,submit:$,dispose:ee}=Rd("svn");return Pt(ee),(G,A)=>{const pe=rn;return l(),r(ae,null,[h(pe,{"model-value":s(qt).open,width:"560px","append-to-body":"",class:"fw-clone-dialog fw-clone-svn","close-on-click-modal":!1,"close-on-press-escape":!s(i),"show-close":!s(i),"onUpdate:modelValue":s(U)},{header:se(()=>[o("div",J4,[o("span",Z4,[h(oe,{name:"svn",size:20})]),o("div",Q4,[o("div",e5,a(s(e)("repoCloneTitleSvn")),1),o("div",t5,a(s(e)("repoCloneCaptionSvn")),1)])])]),footer:se(()=>[o("button",{class:"fw-clone-btn",disabled:s(i),onClick:A[7]||(A[7]=I=>s(U)(!1))},a(s(e)("cancel")),9,R5),o("button",{class:"fw-clone-btn primary",disabled:s(i)||!s(p),onClick:A[8]||(A[8]=(...I)=>s($)&&s($)(...I))},a(s(e)("repoCloneActionSvn")),9,N5)]),default:se(()=>[o("div",n5,[o("label",s5,[o("span",o5,a(s(e)("repoCloneUrl")),1),kt(o("input",{"onUpdate:modelValue":A[0]||(A[0]=I=>s(n).url=I),class:"fw-clone-input",placeholder:s(e)("svnCheckoutUrlPlaceholder"),spellcheck:"false",disabled:s(i),onKeyup:A[1]||(A[1]=bt((...I)=>s($)&&s($)(...I),["enter"]))},null,40,a5),[[Lt,s(n).url]])]),s(x)?N("",!0):(l(),r("label",i5,[o("span",l5,a(s(e)("repoCloneAccount")),1),o("select",{class:"fw-clone-input fw-clone-select",value:s(n).accountId,disabled:s(i),onChange:A[2]||(A[2]=(...I)=>s(P)&&s(P)(...I))},[o("option",c5,a(s(e)("repoCloneAccountAuto")),1),(l(!0),r(ae,null,Ae(s(w),I=>(l(),r("option",{key:I.id,value:I.id},a(s(L)(I)),9,u5))),128)),o("option",{value:s(O)},a(s(e)("repoCloneAccountNew")),9,d5)],40,r5),s(n).url.trim()||s(n).accountId?(l(),r("span",f5,[s(b)?(l(),r(ae,{key:0},[ue(a(s(e)("accEffective"))+" "+a(s(b).name)+"（"+a(s(b).username)+"@"+a(s(b).host)+"） ",1)],64)):(l(),r(ae,{key:1},[ue(a(s(e)("accEffectiveNone")),1)],64))])):N("",!0)])),o("label",p5,[o("span",v5,a(s(e)("repoCloneDir")),1),o("div",h5,[kt(o("input",{"onUpdate:modelValue":A[3]||(A[3]=I=>s(n).dir=I),class:"fw-clone-input",placeholder:s(e)("repoCloneDirPlaceholder"),spellcheck:"false",disabled:s(i)},null,8,m5),[[Lt,s(n).dir]]),o("button",{class:"fw-clone-btn",disabled:s(i),onClick:A[4]||(A[4]=I=>v.value=!0)},a(s(e)("repoCloneBrowse")),9,g5)])]),o("label",y5,[o("span",w5,a(s(e)("repoCloneName")),1),kt(o("input",{"onUpdate:modelValue":A[5]||(A[5]=I=>s(n).name=I),class:"fw-clone-input",placeholder:s(e)("repoCloneNamePlaceholder"),spellcheck:"false",disabled:s(i)},null,8,b5),[[Lt,s(n).name]])]),o("label",_5,[o("span",k5,a(s(e)("repoCloneRevision")),1),kt(o("input",{"onUpdate:modelValue":A[6]||(A[6]=I=>s(n).revision=I),class:"fw-clone-input",placeholder:s(e)("repoCloneRevisionPlaceholder"),spellcheck:"false",disabled:s(i)},null,8,x5),[[Lt,s(n).revision]])]),o("div",{class:"fw-clone-target",title:s(d)||void 0},[h(oe,{name:"folderOpen",size:13}),o("span",$5,a(s(e)("repoCloneTargetSvn")),1),o("span",S5,a(s(d)||s(e)("repoCloneTargetEmpty")),1)],8,C5),s(i)?(l(),r("div",E5,[A[10]||(A[10]=o("span",{class:"fw-clone-spin","aria-hidden":"true"},null,-1)),o("span",null,a(s(e)("repoCloneRunningSvn")),1),o("span",T5,a(s(e)("repoCloneElapsed",{s:s(u)})),1)])):N("",!0),s(i)?(l(),r("div",D5,a(s(e)("repoCloneKeepOpen")),1)):N("",!0),s(c)?(l(),r("div",F5,a(s(c)),1)):N("",!0)])]),_:1},8,["model-value","close-on-press-escape","show-close","onUpdate:modelValue"]),h(Qa,{modelValue:s(v),"onUpdate:modelValue":A[9]||(A[9]=I=>Pc(v)?v.value=I:null),mode:"folder","initial-dir":s(n).dir,onConfirm:s(j)},null,8,["modelValue","initial-dir","onConfirm"])],64)}}}),A5=ht({__name:"RepoCloneDialog",setup(t){return(e,n)=>s(qt).open&&s(qt).kind==="git"?(l(),Xe(Y4,{key:0})):s(qt).open?(l(),Xe(P5,{key:1})):N("",!0)}}),M5={class:"fw-clone-head"},O5={class:"fw-clone-badge"},L5={class:"fw-clone-headtext"},B5={class:"fw-clone-headtitle"},I5={class:"fw-clone-headsub"},j5={class:"fw-acc-split"},V5={class:"fw-acc-rail"},z5={class:"fw-acc-railhead"},U5={class:"fw-acc-count"},H5={key:0,class:"fw-acc-empty"},W5={key:1,class:"fw-acc-railist"},G5={key:0,class:"fw-acc-group"},q5=["onClick","onContextmenu"],K5=["data-kind"],X5={class:"fw-acc-itemtext"},Y5=["title"],J5=["title"],Z5=["title"],Q5=["title"],eD={class:"fw-acc-efflabel"},tD={key:0,class:"fw-acc-effval"},nD={key:1,class:"fw-acc-effnone"},sD={class:"fw-acc-effhint"},oD={class:"fw-acc-detail"},aD={key:0,class:"fw-acc-blank"},iD={class:"fw-acc-detailhead"},lD={class:"fw-acc-detailtitle"},rD={key:0,class:"fw-acc-detailsub"},cD={class:"fw-acc-form"},uD={class:"fw-clone-field"},dD={class:"fw-clone-label"},fD={class:"fw-clone-field"},pD={class:"fw-clone-label"},vD={class:"fw-clone-field"},hD={class:"fw-clone-label"},mD={class:"fw-clone-field"},gD={class:"fw-clone-label"},yD={class:"fw-clone-tip"},wD={class:"fw-clone-field"},bD={class:"fw-clone-label"},_D={class:"fw-clone-field"},kD={class:"fw-clone-label"},xD={class:"fw-clone-row"},CD={class:"fw-clone-field"},$D={class:"fw-clone-label"},SD={key:0,class:"fw-clone-error"},ED={class:"fw-acc-actions"},TD={class:"fw-clone-tip"},DD=ht({__name:"AccountDialog",setup(t){const{t:e}=Bt(),n=B({get:()=>kn.open,set:ye=>{ye||Mi()}}),i=m(null),c=m(!1),u=B(()=>!c.value&&i.value!==null),v=B(()=>c.value||i.value!==null),d=B(()=>Nn.value.find(ye=>ye.id===i.value)??null),p=gt({kind:"git",name:"",host:"",url:"",username:"",secretKind:"password",secret:"",note:""}),w=m(!1),b=m(!1),x=m(null),O=m(""),L=m(null);async function P(){const ye=kn.url?.trim()??"";if(!ye){L.value=null;return}const be=await Zc(kn.kind,ye).catch(()=>null);L.value=be?.account??null}const j=B(()=>["git","svn"].map(be=>({kind:be,list:Nn.value.filter(Ye=>Ye.kind===be)}))),U=m(null),{cmOpen:$,cmX:ee,cmY:G,cmItems:A,openMenu:pe,closeMenu:I}=pn();function ve(ye,be){const Ye=[{label:e("accTest"),icon:"refresh",onClick:()=>$e(be)},{label:e("accApply"),icon:"check",onClick:()=>void me(be)},{separator:!0},{label:e("accDelete"),icon:"trash",onClick:()=>void ne(be)},{separator:!0},{label:e("accCopyIdent"),icon:"copy",onClick:()=>void le(be)}];pe(ye,Ye)}async function $e(ye){Ne(ye),await Ke()}async function me(ye){Ne(ye),await ge()}async function ne(ye){Ne(ye),await je(),x.value=null}async function le(ye){try{await navigator.clipboard.writeText(`${ye.username}@${ye.host}`)}catch{}}const Se=B(()=>(c.value?p.kind:d.value?.kind??p.kind)==="svn"?"fw-clone-svn":"fw-clone-git"),Ve=B(()=>{const ye=p.username.trim()||"user",be=p.host.trim()||"host";return`${ye}@${be}`});function we(ye){p.kind=ye.kind,p.name=ye.name,p.host=ye.host,p.url=ye.url,p.username=ye.username,p.secretKind=ye.secretKind,p.secret="",p.note=ye.note}function Ne(ye){c.value=!1,i.value=ye.id,x.value=null,O.value="",U.value=null,we(ye)}Ze(()=>kn.open,ye=>{ye&&(c.value=!1,i.value=null,x.value=null,O.value="",w.value=!1,b.value=!1,L.value=null,(async()=>{await ro(),await P();const be=Nn.value[0];be&&Ne(be)})())},{immediate:!0});function W(){Mi()}function J(){Mi()}function z(){c.value=!0,i.value=null,x.value=null,O.value="",p.kind=kn.kind,p.name="",p.host="",p.url=kn.url,p.username="",p.secretKind="password",p.secret="",p.note=""}async function Q(ye){w.value=!0,O.value="";try{await ye()}catch(be){O.value=be instanceof Error?be.message:String(be)}finally{w.value=!1}}async function ge(){const ye=d.value;if(ye){b.value=!0;try{const be=await jp(ye.id);ls(`${e("accApplyOk")} · ${be.detail}`)}catch(be){ds(be instanceof Error?be.message:String(be))}finally{b.value=!1}}}async function je(){const ye=d.value;if(ye){if(x.value!==ye.id){x.value=ye.id;return}x.value=null;try{await Bp(ye.id),ls(e("accDeleted")),await ro(),await P();const be=Nn.value[0];be?Ne(be):(i.value=null,c.value=!1)}catch(be){ds(be instanceof Error?be.message:String(be))}}}async function Ke(){if(!p.host.trim()||!p.username.trim()){oo(e("accRequired"));return}const ye=u.value&&!p.secret.trim();if(!ye&&!p.secret.trim()){oo(e("accSecretRequired"));return}await Q(async()=>{const be=await Ip(ye?{id:i.value??void 0}:{kind:p.kind,host:p.host.trim(),url:p.url.trim(),username:p.username.trim(),secret:p.secret,secretKind:p.secretKind});U.value={ok:be.ok,detail:be.detail},be.ok?ls(`${e("accTestOk")} · ${be.detail}`):ds(`${e("accTestFail")} · ${be.detail}`)})}async function Qe(){if(!p.host.trim()||!p.username.trim()){oo(e("accRequired"));return}if(c.value&&!p.secret){oo(e("accSecretRequired"));return}await Q(async()=>{const ye={kind:p.kind,host:p.host.trim(),url:p.url.trim(),name:p.name.trim(),username:p.username.trim(),secret:p.secret||void 0,secretKind:p.secretKind,note:p.note.trim()};if(u.value&&i.value){await Lp({id:i.value,...ye}),ls(e("accSaved")),await ro(),await P();const be=Nn.value.find(Ye=>Ye.id===i.value);be&&we(be)}else{const be=await Op(ye);ls(e("accSaved")),await ro(),await P();const Ye=Nn.value.find(st=>st.id===be.account.id);Ye&&Ne(Ye)}})}return(ye,be)=>{const Ye=An,st=ti,fe=ei,ke=$s,qe=rn;return l(),Xe(qe,{modelValue:n.value,"onUpdate:modelValue":be[8]||(be[8]=ce=>n.value=ce),class:te(["fw-clone-dialog fw-acc-dlg",Se.value]),width:"800px","align-center":"","close-on-click-modal":!1,"append-to-body":"",onClosed:W},{header:se(()=>[o("div",M5,[o("span",O5,[h(oe,{name:"shield",size:20})]),o("div",L5,[o("div",B5,a(s(e)("accTitle")),1),o("div",I5,a(s(e)("accCaption")),1)])])]),footer:se(()=>[h(Ye,{size:"small",onClick:J},{default:se(()=>[ue(a(s(e)("accCancel")),1)]),_:1}),h(Ye,{size:"small",type:"primary",loading:w.value,disabled:!v.value,onClick:Qe},{default:se(()=>[ue(a(s(e)("accSave")),1)]),_:1},8,["loading","disabled"])]),default:se(()=>[o("div",j5,[o("div",V5,[o("div",z5,[o("span",U5,a(s(e)("accListTitle"))+" · "+a(s(Nn).length),1),h(Ye,{size:"small",class:"fw-acc-iconbtn",title:s(e)("accAdd"),onClick:z},{default:se(()=>[h(oe,{name:"plus",size:13})]),_:1},8,["title"])]),s(Nn).length?(l(),r("div",W5,[(l(!0),r(ae,null,Ae(j.value,ce=>(l(),r(ae,{key:ce.kind},[ce.list.length?(l(),r("div",G5,a(ce.kind==="svn"?"SVN":"Git"),1)):N("",!0),(l(!0),r(ae,null,Ae(ce.list,Ie=>(l(),r("button",{key:Ie.id,type:"button",class:te(["fw-acc-item",{on:!c.value&&Ie.id===i.value}]),onClick:rt=>Ne(Ie),onContextmenu:_e(rt=>ve(rt,Ie),["prevent","stop"])},[o("span",{class:"fw-acc-kind","data-kind":Ie.kind},a(Ie.kind==="svn"?"SVN":"Git"),9,K5),o("span",X5,[o("span",{class:"fw-acc-itemname",title:Ie.name},a(Ie.name),9,Y5),o("span",{class:"fw-acc-itemsub",title:`${Ie.username}@${Ie.host}`},a(Ie.username)+"@"+a(Ie.host),9,J5)]),Ie.hasSecret?(l(),Xe(oe,{key:0,class:"fw-acc-lock",name:"shield",size:13,title:s(e)("accHasSecret")},null,8,["title"])):(l(),r("span",{key:1,class:"fw-acc-dot",title:s(e)("accNoSecret")},null,8,Z5))],42,q5))),128))],64))),128))])):(l(),r("div",H5,a(s(e)("accEmpty")),1)),s(kn).url?(l(),r("div",{key:2,class:"fw-acc-effective",title:s(kn).url},[o("span",eD,a(s(e)("accEffective")),1),L.value?(l(),r("span",tD,a(L.value.name)+"（"+a(L.value.username)+"@"+a(L.value.host)+"）",1)):(l(),r("span",nD,a(s(e)("accEffectiveNone")),1)),o("span",sD,a(s(e)("accMatchHint")),1)],8,Q5)):N("",!0)]),o("div",oD,[v.value?(l(),r(ae,{key:1},[o("div",iD,[o("span",lD,a(c.value?s(e)("accNewTitle"):s(e)("accEditTitle")),1),d.value?(l(),r("span",rD,a(d.value.username)+"@"+a(d.value.host),1)):N("",!0)]),o("div",cD,[o("div",uD,[o("span",dD,a(s(e)("accKind")),1),h(fe,{modelValue:p.kind,"onUpdate:modelValue":be[0]||(be[0]=ce=>p.kind=ce),size:"small",class:"fw-acc-kindsel","popper-class":"fw-acc-popper"},{default:se(()=>[h(st,{value:"git",label:s(e)("accKindGit")},null,8,["label"]),h(st,{value:"svn",label:s(e)("accKindSvn")},null,8,["label"])]),_:1},8,["modelValue"])]),o("div",fD,[o("span",pD,a(s(e)("accName")),1),h(ke,{modelValue:p.name,"onUpdate:modelValue":be[1]||(be[1]=ce=>p.name=ce),size:"small",placeholder:Ve.value},null,8,["modelValue","placeholder"])]),o("div",vD,[o("span",hD,a(s(e)("accHost")),1),h(ke,{modelValue:p.host,"onUpdate:modelValue":be[2]||(be[2]=ce=>p.host=ce),size:"small",placeholder:s(e)("accHostPlaceholder")},null,8,["modelValue","placeholder"])]),o("div",mD,[o("span",gD,a(s(e)("accUrl")),1),h(ke,{modelValue:p.url,"onUpdate:modelValue":be[3]||(be[3]=ce=>p.url=ce),size:"small",placeholder:s(e)("accUrlPlaceholder")},null,8,["modelValue","placeholder"]),o("span",yD,a(s(e)("accUrlHint")),1)]),o("div",wD,[o("span",bD,a(s(e)("accUsername")),1),h(ke,{modelValue:p.username,"onUpdate:modelValue":be[4]||(be[4]=ce=>p.username=ce),size:"small",placeholder:s(e)("accUsername")},null,8,["modelValue","placeholder"])]),o("div",_D,[o("span",kD,a(s(e)("accSecretKind")),1),o("div",xD,[h(fe,{modelValue:p.secretKind,"onUpdate:modelValue":be[5]||(be[5]=ce=>p.secretKind=ce),size:"small",class:"fw-acc-kindslim","popper-class":"fw-acc-popper"},{default:se(()=>[h(st,{value:"password",label:s(e)("accSecretPassword")},null,8,["label"]),h(st,{value:"token",label:s(e)("accSecretToken")},null,8,["label"])]),_:1},8,["modelValue"]),h(ke,{modelValue:p.secret,"onUpdate:modelValue":be[6]||(be[6]=ce=>p.secret=ce),size:"small",type:"password","show-password":"",class:"fw-acc-secretinput",placeholder:u.value&&d.value?.hasSecret?s(e)("accKeepSecret"):s(e)("accSecret")},null,8,["modelValue","placeholder"])])]),o("div",CD,[o("span",$D,a(s(e)("accNote")),1),h(ke,{modelValue:p.note,"onUpdate:modelValue":be[7]||(be[7]=ce=>p.note=ce),size:"small"},null,8,["modelValue"])])]),O.value?(l(),r("div",SD,a(O.value),1)):N("",!0),U.value?(l(),r("div",{key:1,class:te(["fw-acc-testres",U.value.ok?"is-ok":"is-fail"])},[h(oe,{name:U.value.ok?"check":"warning",size:13},null,8,["name"]),o("span",null,a(U.value.ok?s(e)("accTestOk"):s(e)("accTestFail"))+" · "+a(U.value.detail),1)],2)):N("",!0),o("div",ED,[h(Ye,{size:"small",loading:w.value,onClick:Ke},{default:se(()=>[ue(a(s(e)("accTest")),1)]),_:1},8,["loading"]),u.value?(l(),Xe(Ye,{key:0,size:"small",loading:b.value,onClick:ge},{default:se(()=>[ue(a(s(e)("accApply")),1)]),_:1},8,["loading"])):N("",!0),u.value?(l(),Xe(Ye,{key:1,size:"small",class:te({"fw-acc-danger":x.value===d.value?.id}),onClick:je},{default:se(()=>[ue(a(x.value===d.value?.id?s(e)("accDeleteConfirm"):s(e)("accDelete")),1)]),_:1},8,["class"])):N("",!0)]),o("div",TD,a(s(e)("accApplyHint")),1)],64)):(l(),r("div",aD,a(s(e)("accPick")),1))])]),s($)?(l(),Xe(Zt,{key:0,items:s(A),x:s(ee),y:s(G),onClose:s(I)},null,8,["items","x","y","onClose"])):N("",!0)]),_:1},8,["modelValue","class"])}}}),FD=xt(DD,[["__scopeId","data-v-d434fcb2"]]),RD={class:"fw-toast-host","aria-live":"polite","aria-atomic":"false"},ND=["onMouseenter","onMouseleave"],PD={class:"fw-toast-ico","aria-hidden":"true"},AD=["title","onClick"],MD=["title"],OD=["title","aria-label","onClick"],Rc=100,LD=48,BD=ht({__name:"ToastHost",setup(t){let e=null;function n(){if(Di.value.length!==0)for(const w of[...Di.value])w.paused||w.duration<=0||(w.remain-=Rc,w.remain<=0&&Dr(w.id))}ln(()=>{e=window.setInterval(n,Rc)}),Pt(()=>{e!==null&&window.clearInterval(e),e=null});const i={ok:"check",error:"warning",warning:"warning",info:"info"},c=gt(new Set);function u(w){c.has(w)?c.delete(w):c.add(w)}function v(w){return w.message.length>LD?w.message:void 0}function d(w){return Math.max(0,Math.ceil(w.remain/1e3))}function p(w){if(w.duration<=0)return"100%";const b=w.remain/w.duration*100;return`${Math.max(0,Math.min(100,b))}%`}return(w,b)=>(l(),r("div",RD,[(l(!0),r(ae,null,Ae(s(Di),x=>(l(),r("div",{key:x.id,class:te(["fw-toast",`k-${x.kind}`]),role:"status",onMouseenter:O=>x.paused=!0,onMouseleave:O=>x.paused=!1},[o("span",PD,[h(oe,{name:i[x.kind],size:15},null,8,["name"])]),o("span",{class:te(["fw-toast-msg",{"is-open":c.has(x.id)}]),title:v(x),onClick:O=>u(x.id)},a(x.message),11,AD),x.duration>0?(l(),r("span",{key:0,class:"fw-toast-count",title:`${d(x)}s`},a(d(x))+"s ",9,MD)):N("",!0),o("button",{class:"fw-toast-x",type:"button",title:s(y)("toastClose"),"aria-label":s(y)("toastClose"),onClick:O=>s(Dr)(x.id)},[h(oe,{name:"close",size:13})],8,OD),x.duration>0?(l(),r("span",{key:1,class:"fw-toast-bar",style:_t({width:p(x)})},null,4)):N("",!0)],42,ND))),128))]))}}),Bs=new Map;function ID(){const t=window.__DSH_FILE_WORKBENCH__;if(!t)return;t.openExternalFile=n=>{na(n).catch(i=>X("error",i.message)),Ft()},t.openExternalFolder=n=>{Vt(n)},t.syncSessionWorkspace=()=>{Ch()};const e=t.pendingOpens;if(e&&e.length>0){t.pendingOpens=[];for(const n of e)n.kind==="file"?t.openExternalFile(n.path):t.openExternalFolder?.(n.path)}}function Nd(t,e,n="workbench"){e?.apiBase&&(window.__DSH_FILE_WORKBENCH__=window.__DSH_FILE_WORKBENCH__??{},window.__DSH_FILE_WORKBENCH__.apiBase=e.apiBase);const i=Bs.get(t);if(i){try{i.unmount()}catch{}Bs.delete(t)}const c=ea(n==="vscode"?CT:kS);let u=null;n==="vscode"&&(u=cr(md(e?.instanceId)),e?.fresh&&u.markFresh(),u.bindTab(e?.instanceId??null,e?.panelId??null),c.provide(mi,u)),c.mount(t),Bs.set(t,c),n==="workbench"&&ID(),bv(),n==="workbench"&&X0();const v=c,d=u;return{unmount:()=>{try{v.unmount()}catch{}Bs.get(t)===v&&Bs.delete(t),Bs.size===0&&setTimeout(()=>{Bs.size===0&&Qf()},3e3)},openProject:d?p=>d.requestOpenProject(p):void 0}}function Pd(t,e){return Nd(t,e,"workbench")}function jD(t,e){return Nd(t,e,"vscode")}window.__dshFileWorkbenchMountPane__=Pd;window.__dshVSCodeMountPane__=jD;function VD(){if(typeof document>"u"||!document.body)return;const t=ni();if(t.app&&t.el?.isConnected)return;if(t.app){try{t.app.unmount()}catch{}t.app=null,t.el=null}document.getElementById("dsh-toast-root")?.remove();const e=document.createElement("div");e.id="dsh-toast-root",e.style.position="fixed",e.style.left="0",e.style.top="0",e.style.width="0",e.style.height="0",e.style.overflow="visible",e.style.zIndex="2147483000",e.style.pointerEvents="none",document.body.appendChild(e);try{const n=ea(BD);n.mount(e),t.app=n,t.el=e}catch(n){console.error("[dsh-file-workbench] 提示宿主挂载失败：",n),e.remove()}}function zD(){if(typeof document>"u"||!document.body||document.getElementById("dsh-term-root"))return;const t=document.createElement("div");t.id="dsh-term-root",t.style.position="fixed",t.style.left="0",t.style.top="0",t.style.width="0",t.style.height="0",t.style.overflow="visible",t.style.zIndex="10000",document.body.appendChild(t);try{ea(d4).mount(t)}catch(e){console.error("[dsh-file-workbench] 全局终端挂载失败：",e)}}VD();zD();UD();HD();function UD(){if(typeof document>"u"||!document.body||document.getElementById("dsh-clone-root"))return;const t=document.createElement("div");t.id="dsh-clone-root",t.style.position="fixed",t.style.left="0",t.style.top="0",t.style.width="0",t.style.height="0",t.style.overflow="visible",t.style.zIndex="10000",document.body.appendChild(t);try{ea(A5).mount(t)}catch(e){console.error("[dsh-file-workbench] 全局克隆弹窗挂载失败：",e)}}if(typeof document<"u"){const t=document.getElementById("app");t&&Pd(t,{apiBase:""})}window.__dshTestProbeUrl=`${(window.__DSH_FILE_WORKBENCH__?.apiBase||"/api/dsh-file-workbench").replace(/\/$/,"")}/assets/__dsh-test-probe.js`;function HD(){if(typeof document>"u"||!document.body||document.getElementById("dsh-acc-root"))return;const t=document.createElement("div");t.id="dsh-acc-root",t.style.position="fixed",t.style.left="0",t.style.top="0",t.style.width="0",t.style.height="0",t.style.overflow="visible",t.style.zIndex="10000",document.body.appendChild(t);try{ea(FD).mount(t)}catch(e){console.error("[dsh-file-workbench] 全局账号对话框挂载失败：",e)}}
