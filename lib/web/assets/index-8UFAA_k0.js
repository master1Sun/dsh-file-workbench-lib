const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-C2cID70-.js","assets/vendor-vue-DSVMyY-k.js"])))=>i.map(i=>d[i]);
import{a1 as gt,r as m,a5 as Sr,y as ht,G as r,S as P,d as B,E as i,H as Xe,P as se,I as o,L as te,u as s,F as ae,W as h,V as a,ao as bt,a8 as _e,aa as Ae,U as ue,e as Qe,q as Ll,o as ln,l as Pt,T as Oc,K as _t,J as ff,n as Dt,Q as kt,ap as Lt,ag as pf,k as $s,Y as vf,X as mo,m as Bl,s as hf,ay as mf,ak as gf,p as Lc,at as ta}from"./vendor-vue-DSVMyY-k.js";import{E as Ss,a as An,b as rn,c as yf,d as wf,e as ti,f as ni,g as bf,h as _f,i as kf}from"./vendor-element-plus-CPaGIovE.js";import{aV as Fo,aW as xf,aX as Cf,aY as $f,aZ as Sf,a_ as Er,a$ as Bc,b0 as Ef,b1 as Tf,b2 as Df,b3 as Ff,b4 as Tr,b5 as Rf,b6 as Nf,b7 as Pf,b8 as Af,b9 as Dr,ba as eo,bb as to,bc as Mf,bd as Ti,be as ga,bf as Of,bg as Lf,bh as Bf,bi as If,bj as jf,bk as Vf,bl as zf}from"./vendor-C2cID70-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const v of u.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&l(v)}).observe(document,{childList:!0,subtree:!0});function n(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function l(c){if(c.ep)return;c.ep=!0;const u=n(c);fetch(c.href,u)}})();const tt=gt({visible:!1,kind:"confirm",title:"",message:"",okText:"",cancelText:"",inputPlaceholder:"",inputValue:"",multiline:!1,choices:[],resolve:null});function Fr(t){return new Promise(e=>{tt.kind="confirm",tt.title=t.title??"",tt.message=t.message,tt.choices=t.choices,tt.visible=!0,tt.resolve=n=>e(typeof n=="string"?n:null)})}function Mt(t){return new Promise(e=>{tt.kind="confirm",tt.title=t.title??"",tt.message=t.message,tt.okText=t.okText??"",tt.cancelText=t.cancelText??"",tt.choices=[],tt.inputValue="",tt.visible=!0,tt.resolve=n=>e(n===!0)})}function ds(t){return new Promise(e=>{tt.kind="prompt",tt.title=t.title??"",tt.message=t.message??"",tt.okText=t.okText??"",tt.cancelText=t.cancelText??"",tt.choices=[],tt.inputPlaceholder=t.placeholder??"",tt.inputValue=t.initial??"",tt.multiline=t.multiline===!0,tt.visible=!0,tt.resolve=n=>e(n===null?null:String(n))})}function Ro(t){tt.visible=!1,tt.resolve?.(t),tt.resolve=null}const Uf={tabFileWorkbench:"文件工作台",tabFileWorkbenchDesc:"浏览、预览、搜索本地文件，并引用到当前会话",tabVSCode:"文件编辑器",tabVSCodeDesc:"浏览项目目录，多标签编辑代码并高亮语法",tabMenuOpenInEditor:"在文件编辑器中打开工作区",tabMenuNewEditor:"新建编辑器窗口",tabMenuAnotherEditor:"再开一个编辑器窗口",tabMenuFloat:"弹出为浮窗",tabMenuDefaultLabel:"默认打开",guideMenuAria:"更多打开方式",vsNoProject:"未选择项目目录",vsTreeLoading:"正在加载项目…",vsOpenFolder:"打开文件夹",vsFolderPath:"请输入项目目录绝对路径",vsSave:"保存",vsSaved:"已保存",vsUnsavedTitle:"未保存的更改",vsUnsavedMsg:"当前文件有未保存的更改，确定关闭吗？",vsCloseManyMsg:"有 {n} 个标签未保存，全部保存并关闭？",vsTooLarge:"文件过大：超过 8MB 编辑上限，请用系统程序打开",vsScrollLeft:"向左滚动标签",vsScrollRight:"向右滚动标签",vsReadonly:"只读",vsEmptyHint:"选择项目目录后，从左侧树打开文件开始编辑",vsLoading:"正在加载…",vsBrand:"文件编辑器",vsQuickAccess:"快捷方式",vsFormat:"格式化内容",vsFormatOk:"已格式化",vsFormatFail:"格式化失败：{msg}",vsMenuFile:"文件",vsSaveAs:"另存为…",vsSaveAsTitle:"另存为",vsFileName:"文件名",vsFileNamePlaceholder:"输入文件名，或粘贴绝对路径",vsFileType:"文件类型",vsFilterAll:"所有文件",vsFilterExt:"仅 {ext} 文件",vsSaveAsHint:"浏览到目标文件夹并填写文件名；双击列表中的文件可直接覆盖保存",vsSaveAsExists:"同名文件已存在，保存将覆盖它",vsSaveAsBlockedDirty:"{name} 已在编辑器中打开且有未保存改动，请先保存或关闭它",vsRecentProjects:"最近项目",vsRecentClearAll:"清空全部",vsRecentClearAllTitle:"清空全部最近项目",vsRecentClearAllConfirm:"确定要清空全部最近项目记录吗？此操作不可撤销。",vsRecentCleared:"已清空最近项目",vsRecentForgetTitle:"移除最近项目",vsRecentForgetConfirm:"确定要从最近项目中移除「{name}」吗？此操作不可撤销。",vsRecentForgot:"已移除 {name}",vsRemoveProject:"移出项目",vsRemoveProjectTitle:"移出项目",vsRemoveProjectConfirm:"确定将「{name}」移出项目吗？此操作会从最近项目中移除该目录，并关闭它的文件树（未保存的改动将丢失）。",vsProjectRemoved:"已移出项目",vsProjectGone:"项目目录已不存在，已从最近项目中移除",vsGitHistory:"提交记录",vsGitExpand:"展开提交记录",vsGitCollapse:"收起提交记录",vsGitRefresh:"刷新提交记录",vsGitFiles:"变更文件",vsGitFileDiff:"在新标签页打开此文件变更",vsQuickOpenPlaceholder:"搜索项目内文件（Ctrl+P）",vsLeftTabFiles:"文件",vsLeftTabSearch:"搜索",vsLeftTabGit:"版本控制",vsGitNoRepo:"当前目录不是 Git / SVN 仓库",vsUnfoldEditor:"展开编辑器",vsFoldEditor:"折叠编辑器",vsSearchNeedsProject:"请先打开项目文件夹再使用搜索",vsMenuRecent:"打开最近项目",vsMenuExtensions:"扩展",vsEmptyTitle:"打开一个文件夹开始编辑",vsGrepPlaceholder:"搜索内容（Enter 立即搜）",vsGrepScopePlaceholder:"仅在此文件夹下搜索，如 src/components",vsGrepScopeTitle:"搜索范围：留空 = 整个项目；填写项目内子目录路径可限定搜索范围",vsGrepCase:"区分大小写",vsGrepRegex:"使用正则",vsGrepSummary:"{files} 个文件中 {n} 条结果",vsGrepTruncated:"结果过多，已截断",vsGrepNoResult:"未找到结果",vsGrepOpenAt:"打开并跳到第 {ln} 行",vsSearchTitle:"搜索",vsGrepWholeWord:"全字匹配",vsGrepReplacePlaceholder:"替换",vsReplaceAll:"全部替换",vsReplacePreserveCase:"保留大小写",vsReplaceConfirm:"将把 {files} 个文件中的 {n} 处 “{q}” 替换为 “{r}”，此操作会直接改写磁盘文件且不可撤销。确定继续？",vsReplaceDone:"已在 {files} 个文件中替换 {n} 处",vsReplaceNone:"没有可替换的匹配项",vsReplaceRemoteUnsupported:"远端（ssh）根不支持跨文件批量替换",vsFilesToInclude:"包含的文件",vsFilesToIncludePlaceholder:"要搜索的文件，如 *.ts, src/**/README.md",vsFilesToIncludeTitle:"仅在这些 glob 命中的文件中搜索/替换（逗号分隔，相对项目根）。留空 = 不限。",vsFilesToExclude:"排除的文件",vsFilesToExcludePlaceholder:"要排除的文件或文件夹，如 **/node_modules, !*.min.js",vsFilesToExcludeTitle:"跳过这些 glob 命中的文件/文件夹（逗号分隔，相对项目根）。",vsClearAllResults:"清除所有结果",vsRefreshResults:"重新搜索",vsToggleReplace:"显示/隐藏替换",vsViewModeList:"列表",vsViewModeTree:"树",vsViewModeSwitchTitle:"在列表视图与树视图之间切换",vsSearchIndexing:"正在建立索引…",vsSearchNoResult:"没有匹配的文件",vsSearchTruncated:"结果较多，仅显示前若干条，请补充关键词",vsSaveAll:"全部保存",vsSavedAs:"已另存为 {path}",vsOverwriteMsg:"{path} 已存在，确定覆盖吗？",vsNoDirty:"没有需要保存的修改",vsAllSaved:"已保存 {n} 个文件",vsConflictTitle:"文件已被外部修改",vsConflictMsg:"{name} 在磁盘上已被修改。仍要用当前内容覆盖吗？",vsConflictMsgReload:"放弃对 {name} 的本地修改，改用磁盘上的版本？",vsConflictBadge:"外部已修改",vsReloadedExternal:"{name} 已被外部修改，已重新加载",vsSwitchLoseMsg:"有 {n} 个文件尚未保存，切换项目会丢失这些修改。确定继续吗？",vsReopenLoseMsg:"以其它编码重读会丢失当前未保存的修改，确定继续吗？",vsEncodingSwitched:"已按 {enc} 重新读取",vsBinaryHint:"这是二进制文件，无法以文本方式编辑",vsNewWindow:"新建编辑器窗口",vsFloatWindow:"浮动为独立窗口",vsNewTerminal:"新建终端",vsReplacedOldest:"编辑器窗口已满 8 个：已替换最早的窗口",vsNewWindowLimit:"无法新建编辑器窗口：请稍后重试",vsOpenExternal:"用系统程序打开",vsNoOpenFile:"没有打开的文件",vsTabClose:"关闭",vsTabCloseSave:"保存并关闭",vsTabCloseOthers:"关闭其他",vsTabCloseRight:"关闭右侧标签页",vsTabCloseAll:"关闭全部",terminalRestore:"还原终端",vsNewFile:"新建文件",vsNewFolder:"新建文件夹",vsNewFileName:"文件名",vsNewFolderName:"文件夹名",vsRename:"重命名",vsRenameName:"新名称",vsDelete:"删除",vsDeleteConfirm:"确定删除",vsRefresh:"刷新",vsCollapseAll:"折叠全部",vsExpandAll:"展开全部",vsExpandAllLimited:"目录较多，已展开前 {n} 个文件夹（继续展开会产生大量请求）",vsPickFolderTitle:"选择项目文件夹",vsComputer:"我的电脑",vsUp:"上级",vsEmptyDir:"此文件夹为空",vsPickInput:"选择此路径",vsCancel:"取消",vsPickConfirm:"选择此文件夹",vsNewFolderBtn:"新建文件夹",vsPickEnterHint:"双击文件夹进入；单击选中；“选择此文件夹”取高亮项，无高亮则取当前目录",menuCopyRelPath:"复制相对路径",menuCopyAbsPath:"复制绝对路径",vsAddToSession:"添加到会话",vsAddToSessionOk:"已添加到会话输入框",vsAddToSessionFail:"请先打开对话输入框",goUp:"返回上级",goBack:"后退",goForward:"前进",refreshList:"刷新资源列表",noFolder:"未打开文件夹",goSessionDir:"回到当前会话目录",closeTab:"关闭",clearSearch:"清除搜索",cancel:"取消",confirmOk:"确定",deleteTitle:"确认删除",searchScopeIn:"范围：",myComputer:"我的电脑",navHome:"主文件夹",navGallery:"图库",navThisPc:"此电脑",navQuickAccess:"快速访问",externalInjection:"外部注入",driveLabel:"本地磁盘 ({drive}:)",toastClose:"关闭提示",thisPcDevices:"设备和驱动器",driveCapacity:"{free} 可用，共 {total}",driveTotal:"总大小",driveFree:"可用空间",driveFs:"文件系统",driveTypeFixed:"本地磁盘",driveTypeRemovable:"可移动磁盘",emptyDrives:"（未检测到驱动器）",navExpand:"展开",navCollapse:"折叠",favoritePin:"已固定到快速访问",desktopEntry:"桌面",downloadEntry:"下载",documentEntry:"文档",pictureEntry:"图片",musicEntry:"音乐",videoEntry:"视频",workspaceEntry:"工作区",emptyDir:"（空）",colName:"名称",colSize:"大小",colType:"类型",colModified:"修改日期",typeFolder:"文件夹",typeFile:"文件",renameEntry:"重命名：",confirmDelete:'确认删除 "{name}" ？',brokenLink:"失效软链接",save:"保存",menuEdit:"编辑",txtEditorTitle:"编辑文本 · {name}",txtLoading:"加载中…",txtEditorSub:"文本编辑器",txtUnsaved:"未保存的更改",txtReadError:"读取失败：{msg}",txtDirty:"未保存",txtReadonly:"只读（工作区外）",txtPlaceholder:"在此输入文本…",txtChars:"字符",txtUnsavedTitle:"未保存的改动",txtUnsavedMsg:"该文件有未保存的改动，确定关闭？",txtSaved:"已保存",download:"下载",statusItemsCount:"{count} 个项目",searchTitle:"搜索文件名/内容",searchPlaceholder:"输入关键字…",search:"搜索",searching:"搜索中…",searchCase:"区分大小写",searchRegex:"正则表达式匹配",searchIdle:"在顶部搜索框输入关键字，实时匹配文件名与文件内容。",resultsCount:"{count} 个结果",resultsSuffixTruncated:"（已截断）",hitTitle:"右键在资源管理器中定位\\左键打开",matchContent:"内容匹配",searchReplaceAll:"批量替换",searchReplaceTitle:"确认批量替换",searchReplaceConfirm:"将在 {files} 个文件中替换 {count} 处匹配，此操作不可撤销，确定继续？",searchReplaceBusy:"正在替换…",searchReplaceDone:"已替换 {files} 个文件（{count} 处）",openFolderFirst:"请先打开文件夹",dirCreated:"目录已创建",fileCreated:"文件已创建",renamed:"已重命名",deleted:"已删除",workspaceOutside:"操作被拒绝：该操作仅限工作区内的文件/文件夹",errForbidden:"无权限或操作被拒绝（403）",errNotFound:"文件或目录不存在（404）",errNoRoot:"未打开文件夹：请先选择工作区目录（409）",errTooLarge:"数据过大，超出允许范围（413）",errServer:"服务端处理失败，请稍后重试（500）",errNetwork:"网络请求失败，请检查 host 连接",menuOpen:"打开",menuOpenExternal:"使用系统默认程序打开",menuOpenInEditor:"在文件编辑器中打开",menuCut:"剪切",menuCopy:"复制",menuRename:"重命名",menuDelete:"删除",menuCopyPath:"复制完整路径",menuProperties:"属性",menuCutDone:"已剪切到剪贴板",menuCopyDone:"已复制到剪贴板",menuOpened:"已调用系统程序打开",menuPathCopied:"路径已复制",menuPathCopyFail:"路径复制失败",menuRefresh:"刷新",menuView:"查看",menuSort:"排序方式",expShowNav:"显示导航栏",menuPaste:"粘贴",menuUpload:"上传文件",uploaded:"已上传 {count} 个文件",uploadFailed:"有 {count} 个文件上传失败",menuNew:"新建",menuNewFolder:"文件夹",menuNewFile:"文本文件",viewHuge:"超大图标",sshHosts:"SSH 主机",sshAddHost:"添加主机",sshCancel:"取消",sshName:"显示名",sshAddr:"地址（用户 @ 主机 : 端口）",sshUser:"用户名",sshHostAddr:"主机地址",sshAuth:"认证方式",sshAuthPassword:"口令认证",sshAuthKey:"私钥认证",sshPassword:"SSH 口令",sshKeyPath:"私钥文件路径（支持 ~）",sshSaveAdd:"添加",sshTest:"测试",sshTestConn:"测试",sshDelete:"删除",sshDeleteConfirm:"再点一次确认删除",sshTestOk:"SSH 连接成功",sshTestFail:"SSH 连接失败",sshRequired:"主机地址与用户名为必填项",sshAddSuccess:"主机已添加",sshNewHost:"添加 SSH 主机",sshEdit:"编辑",sshEditTitle:"编辑 SSH 主机",sshHostCaption:"连接远程服务器，浏览文件与登录终端",sshUpdateSuccess:"主机已更新",sshSaveEdit:"保存修改",sshKeepSecret:"（留空则沿用原口令）",sshNoHosts:"还没有主机，点「添加主机」开始",accTitle:"账号管理",accCaption:"管理 Git / SVN 登录凭据，执行命令时自动注入",accListTitle:"已保存账号",accAdd:"添加账号",accNewTitle:"添加账号",accEditTitle:"编辑账号",accEdit:"编辑",accKind:"类型",accKindGit:"Git",accKindSvn:"SVN",accName:"显示名",accHost:"主机",accHostPlaceholder:"例如 github.com 或 113.57.110.41:804",accUrl:"仓库地址（选填）",accUrlPlaceholder:"https://github.com/owner/repo.git",accUrlHint:"留空 = 对该主机的全部仓库生效；填写后按地址前缀匹配，用于同主机多账号。「测试连通」与「写入系统」都需要它。",accUsername:"用户名",accSecret:"口令 / 访问令牌",accSecretKind:"凭据类型",accSecretPassword:"口令",accSecretToken:"访问令牌",accKeepSecret:"（留空则沿用已存口令）",accNote:"备注",accSave:"保存",accCancel:"取消",accDelete:"删除",accDeleteConfirm:"再点一次确认删除",accTest:"测试连通",accTestOk:"连通正常",accTestFail:"连接失败",accApply:"写入系统",accApplyOk:"已写入系统",accApplyHint:"写入系统凭据存储后，命令行与其它 GUI 工具也免密。",accSaved:"账号已保存",accDeleted:"账号已删除",accRequired:"主机与用户名为必填",accSecretRequired:"请填写口令或访问令牌",accEmpty:"还没有账号，点「添加账号」开始",accHasSecret:"已保存凭据",accNoSecret:"未保存凭据",accAllRepos:"该主机全部仓库",accEffective:"当前仓库将使用",accEffectiveNone:"当前仓库无匹配账号（将走系统凭据 / svn 自身缓存）",accCopyIdent:"复制账号标识",accMatchHint:"按主机或仓库地址前缀匹配，未命中时使用系统凭据",accUseCurrent:"用当前仓库填充",accBack:"返回列表",accPick:"从左侧选择一个账号，或点「添加账号」新建",accTip:"凭据仅存于本机插件配置，不会外发；口令不回显，留空即沿用原值。",sshStatusOnline:"已连接",sshStatusOffline:"未连接",sshStatusChecking:"检测中…",sshStatusUnknown:"尚未检测",remoteNoExternal:"远端文件无法用本机程序打开",remoteNoArchive:"远端目录暂不支持压缩 / 解压",remoteNoTerminal:"找不到该远端主机的配置，已在本机目录启动终端（可先在设置里添加该 SSH 主机）",remoteCachedHint:"远端文件已下载到本机临时文件后打开（改动不会回传远端）",sshNavGroup:"SSH 远程",sshEmpty:"尚未添加主机（在此右键添加，或用「新建 ▾」）",viewLarge:"大图标",viewMedium:"中等图标",viewSmall:"小图标",viewList:"列表",viewDetails:"详细信息",viewContent:"内容",viewTiles:"平铺",showExtensions:"显示文件扩展名",cmdPreview:"预览",sortName:"名称",sortModified:"修改日期",sortType:"类型",sortSize:"大小",moved:"已移动",copied:"已复制",createdFolder:"已新建文件夹",createdFile:"已新建文件",newFolderName:"新建文件夹",newFileName:"新建文本文件",propName:"名称",propPath:"路径",propKind:"类型",propSize:"大小",propModified:"修改日期",settings:"设置",settingsSubtitle:"个性化工作台的外观与行为",retry:"重试",taskSrcMissing:"源文件不存在（可能已被移动或删除），已刷新列表：{name}",menuMore:"更多",settingsGroupFiles:"文件",settingsGroupAppearance:"外观",autoSave:"自动保存（编辑停顿 1 秒后写入）",vsFindPlaceholder:"查找",vsReplacePlaceholder:"替换为",vsFindNext:"下一个（Enter）",vsFindPrev:"上一个（Shift+Enter）",vsFindReplace:"替换（Enter）",vsFindReplaceAll:"全部替换",vsFindToggleReplace:"展开 / 收起替换",vsFindClose:"关闭（Esc）",vsFindNoMatch:"无结果",vsFindWord:"全字匹配",vsMenuLocalDiff:"查看本地改动",vsLocalDiffTitle:"未保存改动",vsLocalDiffTooBig:"改动过大，无法生成对比",vsMultiCursorHint:"提示：Alt + 点击 可添加多光标",vsActHide:"隐藏「{name}」",vsActBarBottom:"活动栏移到底部",vsActBarTop:"活动栏移到顶部",vsSideRight:"侧栏移到右侧",vsSideLeft:"侧栏移到左侧",vsMinimap:"编辑器缩略图",vsCloseSave:"保存并关闭",vsCloseDiscard:"不保存关闭",vsCloseSaveAll:"全部保存并关闭",vsCloseDiscardAll:"全部不保存关闭",showHidden:"显示隐藏文件",allowOutsideRoot:"允许操作工作区外的文件 (root 开关)",defaultView:"默认视图",themeMode:"主题",themeAuto:"跟随系统",themeDark:"深色",themeLight:"浅色",accentColor:"强调色",accentReset:"恢复默认",fontFamily:"字体",fontDefault:"默认",fontOptionYahei:"微软雅黑",fontOptionConsolas:"Consolas（等宽）",fontOptionCourier:"Courier New（等宽）",fontOptionGeorgia:"Georgia（衬线）",fontSize:"字号",fontSizeSm:"小",fontSizeMd:"标准",fontSizeLg:"大",fontSizeXl:"特大",shortcutHelp:"快捷键",shortcutHint:"按 ? 随时唤起，按 Esc 关闭",shortcutGlobal:"全局",shortcutFileList:"文件列表",shGlobalHelp:"打开快捷键帮助",shListSelectAll:"全选",shListCopy:"复制",shListCut:"剪切",shListPaste:"粘贴",shListFilter:"聚焦筛选框",shListNewFolder:"新建文件夹",shListDelete:"删除（含确认）",shListRename:"重命名",shListRefresh:"刷新",shListOpen:"打开文件 / 进入目录",shListMove:"移动选中",shListUp:"返回上级目录",shListBack:"浏览后退",shListForward:"浏览前进",undo:"撤销",findReplacePlaceholder:"替换为…",favorites:"收藏",favoriteAdd:"收藏",favoriteRemove:"取消收藏",favoriteAdded:"已收藏",favoriteRemoved:"已取消收藏",emptyFavorites:"（暂无收藏）",menuCompress:"压缩为 .zip",compressed:"已压缩",menuExtract:"解压到当前目录",extracted:"已解压 {count} 个文件",extractFailed:"解压失败",selectedCount:"{count} 项已选",menuMultiDelete:"删除所选 ({count})",menuMultiCut:"剪切所选",menuMultiCopy:"复制所选",menuMultiCompress:"压缩所选",filterPlaceholder:"筛选当前目录…",filterEmpty:"（无匹配）",taskFabTitle:"后台任务",taskPanelTitle:"后台任务",taskRunning:"运行中",taskHistory:"历史",taskClearFinished:"清除已完成",taskClearAll:"清空",taskEmpty:"暂无任务",taskViewLog:"查看日志",taskLogTitle:"任务日志",taskClose:"关闭",taskFieldTarget:"目标",taskStatusRunning:"进行中",taskStatusDone:"完成",taskStatusError:"失败",taskFieldFile:"文件",taskStartTime:"开始",taskEndTime:"结束",taskTotalSpent:"总耗时",taskStepSpent:"耗时",taskRunningLive:"运行中",taskFieldType:"类型",taskMetaFiles:"{count} 项 · {size}",taskArchive:"归档",taskArchiveOpen:"查看归档",taskArchiveTitle:"任务归档",taskArchiveNone:"暂无归档",taskArchiveRecords:"{count} 条记录",taskUploading:"上传文件",taskCompressing:"压缩",taskExtracting:"解压",taskCopying:"复制",taskMoving:"移动",taskDeleting:"删除",taskRenaming:"重命名",gitMenu:"Git",gitAdd:"暂存 (git add)",gitCommit:"提交 (git commit)",gitCommitTitle:"Git 提交",gitCommitPlaceholder:"输入提交信息…",gitCommitted:"已提交",gitAdded:"已暂存",gitDiscard:"还原改动",gitDiscardTitle:"确认还原",gitDiscardMsg:'丢弃 "{name}" 的工作区改动（git checkout --）？',gitDiscarded:"已还原",gitDiff:"查看改动",gitDiffTitle:"Git 改动",gitDiffEmpty:"（无可用改动）",gitDiffClose:"关闭",gitBadgeUntracked:"未跟踪的新文件",gitBadgeAdded:"新添加到暂存区",gitBadgeModified:"已修改",gitBadgeDeleted:"已删除",gitNotRepo:"不在 git 仓库",gitNoChanges:"没有已暂存的改动，无法提交",gitLoading:"加载中…",gitCommitFiles:"将提交 {n} 个文件：",gitCommitConfirm:"确认提交",gitConfig:"配置身份",gitConfigTitle:"Git 身份配置",gitConfigName:"用户名（user.name）",gitConfigNamePlaceholder:"例如：yourname",gitConfigEmail:"邮箱（user.email）",gitConfigEmailPlaceholder:"例如：you@example.com",gitConfigSave:"保存",gitConfigSaved:"已保存 git 全局身份配置",gitPanel:"打开 Git 面板",gitIgnore:"忽略（加入 .gitignore）",gitIgnored:"已忽略",gitPanelTitle:"Git 管理",gitFetch:"获取",gitPull:"拉取",gitPush:"推送",gitLoadMore:"加载更多",gitDiffTruncated:"差异过大，仅显示前 5000 行（完整内容可在编辑器查看）",gitCopyName:"复制名称",gitCopyUrl:"复制 URL",gitCopyMsg:"复制说明",gitCloneHere:"克隆仓库…",gitStatusColon:"当前分支：{branch}",gitLocalRepo:"本地仓库：",gitTabStatus:"更改",gitTabLog:"提交记录",gitTabBranch:"分支",gitTabStash:"暂存区",gitTabCli:"命令",gitClean:"工作区干净，没有待提交的改动",gitAddShort:"暂存",gitUnstage:"取消暂存",gitUnstaged:"已取消暂存",gitStageAll:"全部暂存",gitGroupStaged:"已暂存的更改",gitGroupUnstaged:"更改",gitGroupUntracked:"未跟踪",gitLogEmpty:"（暂无提交记录）",gitBranchNew:"新分支名称",gitCheckout:"切换",gitDelete:"删除",gitBranchCreated:"已创建并切换到分支 {name}",gitBranchDeleteMsg:"确定删除分支 {name}？",gitStashPlaceholder:"暂存说明（可选）",gitStashCreate:"创建暂存",gitStashEmpty:"（暂无暂存记录）",gitStashApply:"应用",gitStashPop:"弹出",gitStashDrop:"删除",gitStashClear:"清空暂存区",gitStashCreated:"已创建暂存",gitStashApplied:"已应用暂存",gitStashPopped:"已弹出暂存",gitStashDropped:"已删除该条暂存",gitStashCleared:"已清空暂存区",gitStashDropMsg:"确定删除暂存 {ref}？",gitStashClearMsg:"确定清空全部暂存记录？此操作不可恢复。",gitCliPlaceholder:"输入 git 子命令，例如 status / log --oneline -5",gitRailChanges:"更改",gitRailHistory:"提交历史",gitRailBranches:"分支",gitRailTags:"标签",gitRailRemotes:"远程",gitRailStash:"储藏",gitRailCli:"命令台",gitHeadDetached:"分离头指针",gitNoUpstream:"无上游分支",gitAheadBehind:"领先 {ahead} · 落后 {behind}",gitSelectFile:"在左侧选择一个文件查看改动",gitDiffUntrackedHint:"未跟踪的新文件：暂存后可查看与 HEAD 的差异",gitCommitMsgPlaceholder:"提交说明…",gitFileHistory:"文件历史",gitBlame:"逐行追溯",gitBlameAuthor:"作者",gitBlameDate:"日期",gitBlameLine:"行",gitBlameEmpty:"（无法读取逐行追溯）",gitFileHistoryEmpty:"（该文件暂无历史）",gitBack:"返回",gitHistoryAll:"全部分支",gitHistoryCurrent:"仅当前分支",gitSelectCommit:"在左侧选择一个提交查看详情",gitCommitDetail:"提交详情",gitCommitHash:"提交哈希",gitCommitAuthor:"作者",gitCommitDate:"提交时间",gitCommitParents:"父提交",gitCommitRefs:"引用",gitCommitChangedFiles:"变更文件（{n}）",gitCommitNoFiles:"（无文件变更）",gitCopyHash:"复制哈希",gitCopyPath:"复制路径",gitCopied:"已复制到剪贴板",gitReset:"重置到此提交",gitResetSoft:"软重置（改动全部保留在暂存区）",gitResetMixed:"混合重置（改动保留在工作区）",gitResetHard:"硬重置（丢弃改动）",gitResetHardMsg:"硬重置会丢弃工作区与暂存区的全部改动，确定继续？",gitResetDone:"已重置到 {hash}",gitRevert:"还原此提交",gitRevertDone:"已还原 {hash}",gitCherryPick:"拣选到当前分支",gitCherryPicked:"已拣选 {hash}",gitCheckoutCommit:"检出此提交",gitCheckoutCommitMsg:"将进入分离头指针状态，确定检出 {hash}？",gitBranchFrom:"新建分支指向此提交",gitBranchFromTitle:"从此提交新建分支",gitBranchFromPlaceholder:"新分支名称",gitBranchRename:"重命名",gitBranchRenameTitle:"重命名当前分支",gitBranchRenamePlaceholder:"新的分支名",gitBranchRenamed:"已重命名为 {name}",gitMergeIntoCurrent:"合并到当前分支",gitMergeDone:"已合并 {name}",gitPushBranch:"推送",gitPushed:"已推送 {name}",gitBranchCurrent:"当前",gitBranchRemoteGroup:"远程分支",gitBranchLocalGroup:"本地分支",gitBranchCreateAndSwitch:"创建并切换",gitTagNew:"新建标签",gitTagNamePlaceholder:"标签名，如 v1.0.0",gitTagTargetPlaceholder:"目标提交（留空为 HEAD）",gitTagMessagePlaceholder:"说明（填写即创建附注标签）",gitTagCreate:"创建",gitTagEmpty:"（暂无标签）",gitTagAnnotated:"附注",gitView:"查看",gitTagCreated:"已创建标签 {name}",gitTagDeleteMsg:"确定删除标签 {name}？",gitTagDeleted:"已删除标签 {name}",gitTagPushed:"已推送标签 {name}",gitTagFetchAll:"从远程获取标签",gitTagFetchAllDone:"已从远程获取标签",gitTagRemoteOnly:"远程",gitTagPull:"拉取",gitTagPulled:"已拉取标签 {name}",gitTagNoRemote:"无远程仓库，无法获取或发布标签",gitCommitViewTitle:"提交对比",gitCommitOpenDiff:"查看 {path} 的差异",gitReleaseBtn:"发布新版本",gitReleaseTitle:"发布新版本（创建附注标签并推送到远程）",gitReleaseName:"版本标签名",gitReleaseTarget:"基于提交（留空为 HEAD）",gitReleaseMsg:"版本说明（必填）",gitReleasePublish:"创建并发布",gitReleaseRequireMsg:"发布版本需填写版本说明",gitReleased:"已发布 {name} 到远程",gitReleaseGhSkip:"GitHub Release 未创建：{reason}",gitRefresh:"刷新",gitTabTags:"标签",gitTabReleases:"版本",gitReleaseChooseTag:"选择已有标签",gitReleaseNotesPlaceholder:"版本说明（将显示在 Release 页面）",gitReleaseCreateForTag:"创建 Release",gitReleaseCreated:"Release 已创建：{url}",gitReleaseLoadSkip:"版本列表不可用：{reason}",gitReleaseEmpty:"暂无版本记录",gitReleaseOpen:"打开",gitRemoteNamePlaceholder:"名称，如 origin",gitRemoteUrlPlaceholder:"地址，如 https://github.com/user/repo.git",gitRemoteAdd:"添加远程",gitRemoteEmpty:"（暂无远程仓库）",gitRemoteAdded:"已添加远程 {name}",gitRemoteRemoveMsg:"确定移除远程 {name}？",gitRemoteRemoved:"已移除远程 {name}",gitRemoteSetUrl:"修改地址",gitRemoteUrlTitle:"修改远程地址",gitRemoteUrlSaved:"已更新远程地址",gitStashView:"查看内容",gitStashNew:"创建储藏",gitStashNone:"（工作区干净，无内容可储藏）",gitOpRunning:"执行中…",gitOpFailed:"操作失败",svnMenu:"SVN",svnPanel:"打开 SVN 管理",svnPanelTitle:"SVN 管理",svnRepo:"工作副本：",svnUpdate:"更新",svnCommitBtn:"提交",svnAdd:"加入版本控制",svnAdded:"已加入版本控制",svnIgnore:"忽略（svn:ignore）",svnRevert:"还原",svnCleanup:"清理",svnResolve:"解决冲突",svnDiff:"比较差异",svnBlame:"追溯",svnCheckout:"检出",svnFailed:"SVN 命令执行失败",svnRailChanges:"本地修改",svnRailLog:"提交日志",svnNoUrl:"未读取到仓库地址",svnRunning:"正在执行…",svnRefresh:"刷新",svnLoading:"加载中…",svnSelectAll:"全选",svnModifiedCount:"本地修改（{n}）",svnNoChanges:"无本地修改",svnCommitPlaceholder:"填写提交说明…",svnCommitSelected:"将提交选中的 {n} 个文件",svnCommitAll:"将提交全部本地修改",svnOutput:"命令输出",svnNoOutput:"（无输出）",svnNoCli:"未检测到 svn 命令行，请先安装 Subversion",svnDone:"SVN 命令已完成",svnUpdateSummaryFrom:"更新完成：r{from} → r{to}，{n} 个条目变更",svnUpdateSummary:"更新完成：{n} 个条目变更，当前版本 r{to}",svnAlreadyLatest:"已是最新版本 r{rev}，没有需要更新的内容",svnLogEmpty:"暂无日志",svnLogToggle:"点击展开 / 收起该次提交详情",svnLogNoPaths:"该提交没有变更文件记录",svnLogOpenDiff:"查看该文件在此次提交中的对比",svnDiffTitle:"差异对比 · ",svnBlameTitle:"追溯 · ",svnCheckoutUrlPlaceholder:"仓库地址（如 https://svn.example.com/svn/repo）",svnCheckoutTargetPlaceholder:"检出到本地目录",repoCloneTitle:"克隆 / 检出仓库",repoCloneKindGit:"Git",repoCloneKindSvn:"SVN",repoCloneTitleGit:"克隆 Git 仓库",repoCloneTitleSvn:"检出 SVN 仓库",repoCloneCaptionGit:"从远程仓库克隆完整副本到本地",repoCloneCaptionSvn:"从 SVN 服务器检出指定版本到本地",repoCloneTargetGit:"将克隆到",repoCloneTargetSvn:"将检出到",repoCloneUrl:"仓库地址",repoCloneUrlGitPlaceholder:"仓库地址（如 https://github.com/owner/repo.git）",repoCloneDir:"目标目录",repoCloneDirPlaceholder:"要克隆到的父目录",repoCloneBrowse:"浏览…",repoCloneName:"子目录名称",repoCloneNamePlaceholder:"留空则按地址推断",repoCloneShallow:"浅克隆（仅最新一次提交）",repoCloneShallowHint:"更快更小，但不含历史",repoCloneRevision:"版本号",repoCloneRevisionPlaceholder:"留空为最新（HEAD）",repoCloneAccount:"账号",repoCloneAccountAuto:"自动匹配（按地址）",repoCloneAccountNew:"新建账号…",repoCloneTargetEmpty:"请填写仓库地址与目标目录",repoCloneRunningGit:"正在克隆 Git 仓库…",repoCloneRunningSvn:"正在检出 SVN 仓库…",repoCloneElapsed:"已用时 {s} 秒",repoCloneKeepOpen:"保持窗口打开，完成后将收到通知。",repoCloneActionGit:"克隆",repoCloneActionSvn:"检出",repoCloneDoneGit:"已克隆仓库：{name}",repoCloneDoneSvn:"已检出仓库：{name}",menuCloneGit:"克隆 Git 仓库…",menuCloneSvn:"检出 SVN 仓库…",svnNotRepoTip:"当前目录不是 SVN 工作副本，可填写上方信息检出仓库。",svnCheckedOut:"已检出仓库",svnStAdded:"已添加",svnStModified:"已修改",svnStDeleted:"已删除",svnStReplaced:"已替换",svnStConflicted:"冲突",svnStMissing:"缺失",svnStObstructed:"受阻",svnStUnversioned:"未版本控制",svnStIgnored:"已忽略",svnStLocked:"已锁定",saveConfig:"保存",recycleBin:"回收站",recycleRestore:"恢复",recycleDelete:"彻底删除",recycleEmpty:"清空回收站",recycleEmptyConfirm:"确定清空回收站？此操作不可恢复。",recycleDeleteConfirm:"确定彻底删除“{name}”？此操作不可恢复。",recycleDeleteConfirmMulti:"确定彻底删除选中的 {count} 项？此操作不可恢复。",recycleEmptying:"正在清空回收站…",recycleEmptyProgress:"清空回收站：剩余 {count} 项",recycleEmptyDone:"回收站已清空",recycleEmptyList:"回收站是空的",recycleRestored:"已恢复到原位置",recycledDeleted:"已彻底删除",terminal:"终端",terminalTitle:"终端",terminalMinimize:"最小化到任务条",terminalCloseTitle:"关闭终端",terminalClose:"关闭",terminalNew:"新建终端",terminalShellSwitch:"切换默认 shell（cmd / powershell）",terminalAdmin:"管理员",terminalAdminNormal:"普通权限",terminalAdminOn:"当前以管理员身份运行：终端内命令拥有管理员权限",terminalAdminOff:"当前为普通权限：终端内命令无法修改系统级设置",terminalAdminHint:"以「管理员身份运行」启动 dsh web，面板内所有终端即拥有管理员权限（终端子进程继承宿主进程权限）。",terminalClear:"清屏",terminalResizeTitle:"拖动缩放终端",terminalDockDragTitle:"点击展开 · 拖动移动 · 右键菜单",terminalDockSessions:"已最小化的终端",terminalDockCloseAll:"全部关闭",terminalTab:"{n}",scrollLeft:"向左滚动",scrollRight:"向右滚动",termFontSmaller:"减小字号",termFontLarger:"增大字号",termInputFailed:"终端输入发送失败：{msg}",termSshBadge:"该终端已登录到远端 SSH 主机",termSshReconnect:"重连",termSshReconnectTitle:"重新登录远端（用已保存的口令 / 密钥自动登录）",termSearchPlaceholder:"在终端输出中搜索…",termSearchCase:"区分大小写",termSearchPrev:"上一个",termSearchNext:"下一个",termSearchClose:"关闭搜索",termCopyHint:"Ctrl+C 复制 · Ctrl+V 粘贴 · Ctrl+F 搜索",menuDownload:"下载文件",menuOpenTerminal:"在终端打开",menuSubagent:"用子代理处理",menuNewSubagent:"新建子代理对话",subagentAsk:"希望子代理做什么？",subagentAskPlaceholder:"描述任务（可留空，稍后在子代理会话中继续）",subagentSpawned:"已在官方子代理会话中打开",subagentFailed:"子代理发起失败",statusDrivesCount:"{count} 个驱动器",statusLoading:"加载中…",statusSearching:"搜索中…",statusTasks:"后台任务",statusTasksRunning:"{count} 个后台任务",statusTermRestore:"点击还原终端窗口"},Rr={tabFileWorkbench:"File Workbench",tabFileWorkbenchDesc:"Browse, preview, and search local files, then reference them to the session",tabVSCode:"File Editor",tabVSCodeDesc:"Open a code editor in the right sidebar: browse project tree, multi-tab editing, syntax highlight",tabMenuOpenInEditor:"Open Workspace in File Editor",tabMenuNewEditor:"New Editor Window",tabMenuAnotherEditor:"Open Another Editor Window",tabMenuFloat:"Open as Floating Window",tabMenuDefaultLabel:"Open by default",guideMenuAria:"More ways to open",vsNoProject:"No project folder selected",vsTreeLoading:"Loading project…",vsOpenFolder:"Open Folder",vsFolderPath:"Enter the absolute path of the project folder",vsSave:"Save",vsSaved:"Saved",vsUnsavedTitle:"Unsaved Changes",vsUnsavedMsg:"This file has unsaved changes. Close it anyway?",vsCloseManyMsg:"{n} unsaved tab(s). Save all and close?",vsTooLarge:"File too large: over the 8MB editing limit. Open it with the system app instead",vsScrollLeft:"Scroll tabs left",vsScrollRight:"Scroll tabs right",vsReadonly:"Read-only",vsEmptyHint:"Pick a project folder, then open a file from the left tree to start editing",vsLoading:"Loading…",vsBrand:"File Editor",vsQuickAccess:"Quick Access",vsFormat:"Format Content",vsFormatOk:"Formatted",vsFormatFail:"Format failed: {msg}",vsMenuFile:"File",vsSaveAs:"Save As…",vsSaveAsTitle:"Save As",vsFileName:"File name",vsFileNamePlaceholder:"File name, or paste an absolute path",vsFileType:"File type",vsFilterAll:"All files",vsFilterExt:"{ext} files only",vsSaveAsHint:"Browse to a folder and enter a file name; double-click a listed file to overwrite it directly",vsSaveAsExists:"A file with this name already exists and will be overwritten",vsSaveAsBlockedDirty:"{name} is open in the editor with unsaved changes — save or close it first",vsRecentProjects:"Recent Projects",vsRecentClearAll:"Clear All",vsRecentClearAllTitle:"Clear All Recent Projects",vsRecentClearAllConfirm:"Clear all recent project records? This cannot be undone.",vsRecentCleared:"Recent projects cleared",vsRecentForgetTitle:"Remove from recent projects",vsRecentForgetConfirm:'Remove "{name}" from recent projects? This cannot be undone.',vsRecentForgot:"Removed {name}",vsRemoveProject:"Remove from Project",vsRemoveProjectTitle:"Remove from Project",vsRemoveProjectConfirm:'Remove "{name}" from projects? This removes it from recent projects and closes its file tree (unsaved changes will be lost).',vsProjectRemoved:"Removed from project",vsProjectGone:"Project folder no longer exists; removed from recent projects",vsGitHistory:"History",vsGitExpand:"Show commit history",vsGitCollapse:"Collapse commit history",vsGitRefresh:"Refresh history",vsGitFiles:"Changed files",vsGitFileDiff:"Open this change in a new tab",vsQuickOpenPlaceholder:"Search files by name (Ctrl+P)",vsLeftTabFiles:"Files",vsLeftTabSearch:"Search",vsLeftTabGit:"Version Control",vsGitNoRepo:"This folder is not a Git / SVN repository",vsUnfoldEditor:"Show editor",vsFoldEditor:"Hide editor",vsSearchNeedsProject:"Open a project folder first to use search",vsMenuRecent:"Open Recent",vsMenuExtensions:"Extensions",vsEmptyTitle:"Open a folder to start editing",vsGrepPlaceholder:"Search in files (Enter to run)",vsGrepScopePlaceholder:"Search only in folder, e.g. src/components",vsGrepScopeTitle:"Search scope: empty = whole project; enter a project subfolder path to narrow the search",vsGrepCase:"Match case",vsGrepRegex:"Use regex",vsGrepSummary:"{n} results in {files} files",vsGrepTruncated:"Too many results, truncated",vsGrepNoResult:"No results found",vsGrepOpenAt:"Open and go to line {ln}",vsSearchTitle:"Search",vsGrepWholeWord:"Match whole word",vsGrepReplacePlaceholder:"Replace",vsReplaceAll:"Replace All",vsReplacePreserveCase:"Preserve case",vsReplaceConfirm:"This will replace {n} occurrences of “{q}” with “{r}” across {files} file(s), rewriting files on disk with no undo. Continue?",vsReplaceDone:"Replaced {n} occurrence(s) in {files} file(s)",vsReplaceNone:"Nothing to replace",vsReplaceRemoteUnsupported:"Cross-file replace is not supported on remote (ssh) roots",vsFilesToInclude:"files to include",vsFilesToIncludePlaceholder:"files to search, e.g. *.ts, src/**/README.md",vsFilesToIncludeTitle:"Only search/replace in files matching these globs (comma-separated, relative to project root). Empty = all.",vsFilesToExclude:"files to exclude",vsFilesToExcludePlaceholder:"files or folders to skip, e.g. **/node_modules, !*.min.js",vsFilesToExcludeTitle:"Skip files/folders matching these globs (comma-separated, relative to project root).",vsClearAllResults:"Clear All Results",vsRefreshResults:"Search Again",vsToggleReplace:"Show / Hide Replace",vsViewModeList:"List",vsViewModeTree:"Tree",vsViewModeSwitchTitle:"Switch between list and tree view",vsSearchIndexing:"Indexing…",vsSearchNoResult:"No matching files",vsSearchTruncated:"Lots of matches — showing the first few, refine your keywords",vsSaveAll:"Save All",vsSavedAs:"Saved as {path}",vsOverwriteMsg:"{path} already exists. Overwrite it?",vsNoDirty:"No changes to save",vsAllSaved:"Saved {n} file(s)",vsConflictTitle:"File Changed on Disk",vsConflictMsg:"{name} has changed on disk since it was opened. Overwrite it with your version?",vsConflictMsgReload:"Discard your local changes to {name} and reload from disk?",vsConflictBadge:"Changed on disk",vsReloadedExternal:"{name} changed on disk and has been reloaded",vsSwitchLoseMsg:"{n} file(s) have unsaved changes. Switching projects will discard them. Continue?",vsReopenLoseMsg:"Reopening with another encoding will discard unsaved changes. Continue?",vsEncodingSwitched:"Reopened as {enc}",vsBinaryHint:"This is a binary file and cannot be edited as text",vsNewWindow:"New Editor Window",vsFloatWindow:"Float as Separate Window",vsNewTerminal:"New Terminal",vsReplacedOldest:"Editor window limit (8) reached: the earliest window was replaced",vsNewWindowLimit:"Could not open a new editor window. Please try again.",vsOpenExternal:"Open with system app",vsNoOpenFile:"No open files",vsTabClose:"Close",vsTabCloseSave:"Save and Close",vsTabCloseOthers:"Close Others",vsTabCloseRight:"Close Tabs to the Right",vsTabCloseAll:"Close All",terminalRestore:"Restore terminal",vsNewFile:"New File",vsNewFolder:"New Folder",vsNewFileName:"File name",vsNewFolderName:"Folder name",vsRename:"Rename",vsRenameName:"New name",vsDelete:"Delete",vsDeleteConfirm:"Delete",vsRefresh:"Refresh",vsCollapseAll:"Collapse All",vsExpandAll:"Expand All",vsExpandAllLimited:"Many folders — expanded the first {n} (expanding further would issue too many requests)",vsPickFolderTitle:"Pick Project Folder",vsComputer:"My Computer",vsUp:"Up",vsEmptyDir:"This folder is empty",vsPickInput:"Use this path",vsCancel:"Cancel",vsPickConfirm:"Select This Folder",vsNewFolderBtn:"New Folder",vsPickEnterHint:"Double-click a folder to enter; single click selects it; “Select This Folder” picks the highlighted folder (or the current one)",menuCopyRelPath:"Copy relative path",menuCopyAbsPath:"Copy absolute path",vsAddToSession:"Add to Session",vsAddToSessionOk:"Added to the session input",vsAddToSessionFail:"Open a conversation input first",goUp:"Go Up",goBack:"Back",goForward:"Forward",refreshList:"Refresh resource list",noFolder:"No folder open",goSessionDir:"Go to current session folder",closeTab:"Close",clearSearch:"Clear search",cancel:"Cancel",confirmOk:"OK",deleteTitle:"Confirm delete",searchScopeIn:"In scope: ",myComputer:"My Computer",navHome:"Home",navGallery:"Gallery",navThisPc:"This PC",navQuickAccess:"Quick access",externalInjection:"External injections",driveLabel:"Local Disk ({drive}:)",toastClose:"Close notification",thisPcDevices:"Devices and drives",driveCapacity:"{free} free of {total}",driveTotal:"Total size",driveFree:"Free space",driveFs:"File system",driveTypeFixed:"Local Disk",driveTypeRemovable:"Removable Disk",emptyDrives:"(No drives detected)",navExpand:"Expand",navCollapse:"Collapse",favoritePin:"Pinned to Quick access",desktopEntry:"Desktop",downloadEntry:"Downloads",documentEntry:"Documents",pictureEntry:"Pictures",musicEntry:"Music",videoEntry:"Videos",workspaceEntry:"Workspace",emptyDir:"(empty)",colName:"Name",colSize:"Size",colType:"Type",colModified:"Date modified",typeFolder:"Folder",typeFile:"File",renameEntry:"Rename:",confirmDelete:'Delete "{name}"?',brokenLink:"Broken symlink",save:"Save",menuEdit:"Edit",txtEditorTitle:"Edit Text · {name}",txtLoading:"Loading…",txtEditorSub:"Text editor",txtUnsaved:"Unsaved changes",txtReadError:"Failed to read: {msg}",txtDirty:"Unsaved",txtReadonly:"Read-only (outside workspace)",txtPlaceholder:"Type text here…",txtChars:"chars",txtUnsavedTitle:"Unsaved changes",txtUnsavedMsg:"This file has unsaved changes. Close anyway?",txtSaved:"Saved",download:"Download",menuDownload:"Download",menuOpenTerminal:"Open in Terminal",menuSubagent:"Process with Sub-agent",menuNewSubagent:"New Sub-agent Chat",subagentAsk:"What should the sub-agent do?",subagentAskPlaceholder:"Describe the task (optional; continue in the sub-agent session)",subagentSpawned:"Opened in the official sub-agent session",subagentFailed:"Failed to start sub-agent",statusDrivesCount:"{count} drive(s)",statusLoading:"Loading…",statusSearching:"Searching…",statusTasks:"Background tasks",statusTasksRunning:"{count} running task(s)",statusTermRestore:"Click to restore the terminal window",statusItemsCount:"{count} items",searchTitle:"Search Files & Content",searchPlaceholder:"Enter keywords…",search:"Search",searching:"Searching…",searchCase:"Match case",searchRegex:"Regular expression match",searchIdle:"Type keywords in the top search box to match file names and content live.",resultsCount:"{count} result(s)",resultsSuffixTruncated:" (truncated)",hitTitle:"Right-click to locate in explorer \\ left-click to open",matchContent:"content",searchReplaceAll:"Replace All",searchReplaceTitle:"Confirm batch replace",searchReplaceConfirm:"Replace {count} match(es) across {files} file(s)? This cannot be undone.",searchReplaceBusy:"Replacing…",searchReplaceDone:"Replaced in {files} file(s) ({count} match(es))",openFolderFirst:"Open a folder first",dirCreated:"Directory created",fileCreated:"File created",renamed:"Renamed",deleted:"Deleted",workspaceOutside:"Operation denied: only allowed for files/folders inside the workspace",errForbidden:"Forbidden: no permission or denied (403)",errNotFound:"File or directory not found (404)",errNoRoot:"No workspace root set — open a folder first (409)",errTooLarge:"Payload too large, exceeds allowed limit (413)",errServer:"Server error, please retry later (500)",errNetwork:"Network request failed, check your host connection",menuOpen:"Open",menuOpenExternal:"Open with default app",menuOpenInEditor:"Open in File Editor",menuCut:"Cut",menuCopy:"Copy",menuRename:"Rename",menuDelete:"Delete",menuCopyPath:"Copy full path",menuProperties:"Properties",menuCutDone:"Cut to clipboard",menuCopyDone:"Copied to clipboard",menuOpened:"Opened with system default app",menuPathCopied:"Path copied",menuPathCopyFail:"Failed to copy path",menuRefresh:"Refresh",menuView:"View",menuSort:"Sort by",expShowNav:"Show navigation",menuPaste:"Paste",menuUpload:"Upload Files",uploaded:"Uploaded {count} file(s)",uploadFailed:"{count} file(s) failed to upload",menuNew:"New",menuNewFolder:"Folder",menuNewFile:"Text Document",viewHuge:"Extra large icons",sshHosts:"SSH Hosts",sshAddHost:"Add Host",sshCancel:"Cancel",sshName:"Display name",sshAddr:"Address (user @ host : port)",sshUser:"Username",sshHostAddr:"Host address",sshAuth:"Auth method",sshAuthPassword:"Password auth",sshAuthKey:"Private key auth",sshPassword:"SSH password",sshKeyPath:"Private key path (supports ~)",sshSaveAdd:"Add",sshTest:"Test",sshTestConn:"Test",sshDelete:"Delete",sshDeleteConfirm:"Click again to confirm",sshTestOk:"SSH connection OK",sshTestFail:"SSH connection failed",sshRequired:"Host address and username are required",sshAddSuccess:"Host added",sshNewHost:"Add SSH Host",sshEdit:"Edit",sshEditTitle:"Edit SSH Host",sshHostCaption:"Connect a remote server for file browsing and terminal",sshUpdateSuccess:"Host updated",sshSaveEdit:"Save Changes",sshKeepSecret:"(leave blank to keep existing password)",sshNoHosts:"No hosts yet — click “Add Host” to begin",accTitle:"Accounts",accCaption:"Manage Git / SVN credentials — injected automatically when running commands",accListTitle:"Saved accounts",accAdd:"Add account",accNewTitle:"Add account",accEditTitle:"Edit account",accEdit:"Edit",accKind:"Type",accKindGit:"Git",accKindSvn:"SVN",accName:"Display name",accHost:"Host",accHostPlaceholder:"e.g. github.com or 113.57.110.41:804",accUrl:"Repository URL (optional)",accUrlPlaceholder:"https://github.com/owner/repo.git",accUrlHint:"Leave blank to apply to every repository on this host; fill it in to match by URL prefix (multiple accounts per host). Test & Apply need it.",accUsername:"Username",accSecret:"Password / access token",accSecretKind:"Credential type",accSecretPassword:"Password",accSecretToken:"Access token",accKeepSecret:"(leave blank to keep the saved secret)",accNote:"Note",accSave:"Save",accCancel:"Cancel",accDelete:"Delete",accDeleteConfirm:"Click again to confirm",accTest:"Test",accTestOk:"Connection OK",accTestFail:"Connection failed",accApply:"Apply to system",accApplyOk:"Applied to system",accApplyHint:"Write the credential into the system store so the CLI and other GUI tools are prompted no more.",accSaved:"Account saved",accDeleted:"Account deleted",accRequired:"Host and username are required",accSecretRequired:"Password or access token is required",accEmpty:"No accounts yet — click “Add account” to begin",accHasSecret:"Secret saved",accNoSecret:"No secret saved",accAllRepos:"all repositories on this host",accEffective:"This repo will use",accEffectiveNone:"No matching account for this repo (falls back to system credentials / svn cache)",accMatchHint:"Matched by host or repository URL prefix; system credentials are used when nothing matches.",accCopyIdent:"Copy account id",accUseCurrent:"Fill from current repo",accBack:"Back to list",accPick:"Pick an account on the left, or click “Add account”",accTip:"Credentials live only in this plugin's local config and are never sent out; the secret is never echoed — leave it blank to keep the current one.",sshStatusOnline:"Connected",sshStatusOffline:"Disconnected",sshStatusChecking:"Checking…",sshStatusUnknown:"Not checked",remoteNoExternal:"Remote files cannot be opened with local programs",remoteNoArchive:"Compress / extract is not supported on remote directories yet",remoteNoTerminal:"Remote host config not found — started the terminal in a local directory (add the SSH host in Settings first)",remoteCachedHint:"Remote file downloaded to a local temp file and opened (edits are not written back)",sshNavGroup:"SSH Remote",sshEmpty:"No hosts yet — right-click here to add one, or use “New ▾”",viewLarge:"Large icons",viewMedium:"Medium icons",viewSmall:"Small icons",viewList:"List",viewDetails:"Details",viewContent:"Content",viewTiles:"Tiles",showExtensions:"File name extensions",cmdPreview:"Preview",sortName:"Name",sortModified:"Date modified",sortType:"Type",sortSize:"Size",moved:"Moved",copied:"Copied",createdFolder:"Folder created",createdFile:"File created",newFolderName:"New Folder",newFileName:"New Text Document",propName:"Name",propPath:"Path",propKind:"Type",propSize:"Size",propModified:"Date modified",settings:"Settings",settingsSubtitle:"Personalize the workbench look & behavior",retry:"Retry",taskSrcMissing:"Source no longer exists (it may have been moved or deleted); list refreshed: {name}",menuMore:"More",settingsGroupFiles:"Files",settingsGroupAppearance:"Appearance",autoSave:"Auto save (write 1s after edits pause)",vsFindPlaceholder:"Find",vsReplacePlaceholder:"Replace with",vsFindNext:"Next (Enter)",vsFindPrev:"Previous (Shift+Enter)",vsFindReplace:"Replace (Enter)",vsFindReplaceAll:"Replace All",vsFindToggleReplace:"Toggle replace",vsFindClose:"Close (Esc)",vsFindNoMatch:"No results",vsFindWord:"Whole word",vsMenuLocalDiff:"View Local Changes",vsLocalDiffTitle:"Unsaved Changes",vsLocalDiffTooBig:"Changes too large to diff",vsMultiCursorHint:"Tip: Alt+Click adds more cursors",vsActHide:'Hide "{name}"',vsActBarBottom:"Move Activity Bar to Bottom",vsActBarTop:"Move Activity Bar to Top",vsSideRight:"Move Side Bar to Right",vsSideLeft:"Move Side Bar to Left",vsMinimap:"Editor Thumbnail",vsCloseSave:"Save and Close",vsCloseDiscard:"Close without Saving",vsCloseSaveAll:"Save All and Close",vsCloseDiscardAll:"Close All without Saving",showHidden:"Show hidden files",allowOutsideRoot:"Operate on files outside the workspace (root toggle)",defaultView:"Default view",themeMode:"Theme",themeAuto:"Follow system",themeDark:"Dark",themeLight:"Light",accentColor:"Accent color",accentReset:"Reset",fontFamily:"Font",fontDefault:"Default",fontOptionYahei:"Microsoft YaHei",fontOptionConsolas:"Consolas (monospace)",fontOptionCourier:"Courier New (monospace)",fontOptionGeorgia:"Georgia (serif)",fontSize:"Font size",fontSizeSm:"Small",fontSizeMd:"Medium",fontSizeLg:"Large",fontSizeXl:"Extra large",shortcutHelp:"Keyboard Shortcuts",shortcutHint:"Press ? anytime to show, Esc to close",shortcutGlobal:"Global",shortcutFileList:"File List",shGlobalHelp:"Show shortcut help",shListSelectAll:"Select all",shListCopy:"Copy",shListCut:"Cut",shListPaste:"Paste",shListFilter:"Focus filter box",shListNewFolder:"New folder",shListDelete:"Delete (with confirm)",shListRename:"Rename",shListRefresh:"Refresh",shListOpen:"Open file / enter folder",shListMove:"Move selection",shListUp:"Go to parent folder",shListBack:"Browse back",shListForward:"Browse forward",undo:"Undo",findReplacePlaceholder:"Replace with…",favorites:"Favorites",favoriteAdd:"Favorites",favoriteRemove:"Remove from favorites",favoriteAdded:"Added to favorites",favoriteRemoved:"Removed from favorites",emptyFavorites:"(no favorites)",menuCompress:"Compress to .zip",compressed:"Compressed",menuExtract:"Extract to current folder",extracted:"Extracted {count} file(s)",extractFailed:"Extraction failed",selectedCount:"{count} item(s) selected",menuMultiDelete:"Delete selected ({count})",menuMultiCut:"Cut selected",menuMultiCopy:"Copy selected",menuMultiCompress:"Compress selected",filterPlaceholder:"Filter this folder…",filterEmpty:"(no match)",taskFabTitle:"Background tasks",taskPanelTitle:"Background tasks",taskRunning:"Running",taskHistory:"History",taskClearFinished:"Clear finished",taskClearAll:"Clear all",taskEmpty:"No tasks",taskViewLog:"View log",taskLogTitle:"Task log",taskClose:"Close",taskFieldTarget:"Target",taskStatusRunning:"Running",taskStatusDone:"Done",taskStatusError:"Failed",taskFieldFile:"File",taskStartTime:"Start",taskEndTime:"End",taskTotalSpent:"Total time",taskStepSpent:"Spent",taskRunningLive:"Running",taskFieldType:"Type",taskMetaFiles:"{count} files · {size}",taskArchive:"Archive",taskArchiveOpen:"View Archives",taskArchiveTitle:"Task Archives",taskArchiveNone:"No archives",taskArchiveRecords:"{count} records",taskUploading:"Upload file",taskCompressing:"Compress",taskExtracting:"Extract",taskCopying:"Copy",taskMoving:"Move",taskDeleting:"Delete",taskRenaming:"Rename",gitMenu:"Git",gitAdd:"Stage (git add)",gitCommit:"Commit (git commit)",gitCommitTitle:"Git commit",gitCommitPlaceholder:"Enter commit message…",gitCommitted:"Committed",gitAdded:"Staged",gitDiscard:"Discard changes",gitDiscardTitle:"Confirm discard",gitDiscardMsg:'Discard worktree changes of "{name}" (git checkout --)?',gitDiscarded:"Discarded",gitDiff:"View changes",gitDiffTitle:"Git changes",gitDiffEmpty:"(no changes available)",gitDiffClose:"Close",gitBadgeUntracked:"Untracked new file",gitBadgeAdded:"Newly staged",gitBadgeModified:"Modified",gitBadgeDeleted:"Deleted",gitNotRepo:"Not in a git repository",gitNoChanges:"Nothing staged, nothing to commit",gitLoading:"Loading…",gitCommitFiles:"Committing {n} file(s):",gitCommitConfirm:"Commit",gitConfig:"Configure identity",gitConfigTitle:"Git identity",gitConfigName:"Username (user.name)",gitConfigNamePlaceholder:"e.g. yourname",gitConfigEmail:"Email (user.email)",gitConfigEmailPlaceholder:"e.g. you@example.com",gitConfigSave:"Save",gitConfigSaved:"Git global identity saved",gitPanel:"Open Git Panel",gitIgnore:"Ignore (add to .gitignore)",gitIgnored:"Ignored",gitPanelTitle:"Git Manager",gitFetch:"Fetch",gitPull:"Pull",gitPush:"Push",gitLoadMore:"Load more",gitDiffTruncated:"Diff too large — showing the first 5000 lines (open in the editor for the full content)",gitCopyName:"Copy name",gitCopyUrl:"Copy URL",gitCopyMsg:"Copy message",gitCloneHere:"Clone repository…",gitStatusColon:"Branch: {branch}",gitLocalRepo:"Local repo: ",gitTabStatus:"Changes",gitTabLog:"Log",gitTabBranch:"Branches",gitTabStash:"Stash",gitTabCli:"Command",gitClean:"Working tree clean, nothing to commit",gitAddShort:"Stage",gitUnstage:"Unstage",gitUnstaged:"Unstaged",gitStageAll:"Stage All",gitGroupStaged:"Staged changes",gitGroupUnstaged:"Changes",gitGroupUntracked:"Untracked",gitLogEmpty:"(no commits yet)",gitBranchNew:"New branch name",gitCheckout:"Checkout",gitDelete:"Delete",gitBranchCreated:"Branch {name} created and checked out",gitBranchDeleteMsg:"Delete branch {name}?",gitStashPlaceholder:"Stash message (optional)",gitStashCreate:"Create Stash",gitStashEmpty:"(no stashes)",gitStashApply:"Apply",gitStashPop:"Pop",gitStashDrop:"Drop",gitStashClear:"Clear Stash",gitStashCreated:"Stash created",gitStashApplied:"Stash applied",gitStashPopped:"Stash popped",gitStashDropped:"Stash dropped",gitStashCleared:"Stash cleared",gitStashDropMsg:"Drop stash {ref}?",gitStashClearMsg:"Clear all stashes? This cannot be undone.",gitCliPlaceholder:"Enter a git subcommand, e.g. status / log --oneline -5",gitRailChanges:"Changes",gitRailHistory:"History",gitRailBranches:"Branches",gitRailTags:"Tags",gitRailRemotes:"Remotes",gitRailStash:"Stashes",gitRailCli:"Console",gitHeadDetached:"Detached HEAD",gitNoUpstream:"No upstream branch",gitAheadBehind:"Ahead {ahead} · Behind {behind}",gitSelectFile:"Select a file on the left to view changes",gitDiffUntrackedHint:"Untracked file: stage it to see the diff against HEAD",gitCommitMsgPlaceholder:"Commit message…",gitFileHistory:"File history",gitBlame:"Blame",gitBlameAuthor:"Author",gitBlameDate:"Date",gitBlameLine:"Line",gitBlameEmpty:"(blame unavailable)",gitFileHistoryEmpty:"(no history for this file)",gitBack:"Back",gitHistoryAll:"All branches",gitHistoryCurrent:"Current branch",gitSelectCommit:"Select a commit on the left to see details",gitCommitDetail:"Commit details",gitCommitHash:"Commit",gitCommitAuthor:"Author",gitCommitDate:"Date",gitCommitParents:"Parents",gitCommitRefs:"Refs",gitCommitChangedFiles:"Changed files ({n})",gitCommitNoFiles:"(no file changes)",gitCopyHash:"Copy hash",gitCopyPath:"Copy path",gitCopied:"Copied to clipboard",gitReset:"Reset to this commit",gitResetSoft:"Soft (keep changes staged)",gitResetMixed:"Mixed (keep changes in worktree)",gitResetHard:"Hard (discard changes)",gitResetHardMsg:"Hard reset discards all worktree and staged changes. Continue?",gitResetDone:"Reset to {hash}",gitRevert:"Revert this commit",gitRevertDone:"Reverted {hash}",gitCherryPick:"Cherry-pick onto current",gitCherryPicked:"Cherry-picked {hash}",gitCheckoutCommit:"Checkout this commit",gitCheckoutCommitMsg:"This enters detached HEAD. Checkout {hash}?",gitBranchFrom:"New branch at this commit",gitBranchFromTitle:"New branch at this commit",gitBranchFromPlaceholder:"New branch name",gitBranchRename:"Rename",gitBranchRenameTitle:"Rename current branch",gitBranchRenamePlaceholder:"New branch name",gitBranchRenamed:"Renamed to {name}",gitMergeIntoCurrent:"Merge into current",gitMergeDone:"Merged {name}",gitPushBranch:"Push",gitPushed:"Pushed {name}",gitBranchCurrent:"current",gitBranchRemoteGroup:"Remote branches",gitBranchLocalGroup:"Local branches",gitBranchCreateAndSwitch:"Create & switch",gitTagNew:"New tag",gitTagNamePlaceholder:"Tag name, e.g. v1.0.0",gitTagTargetPlaceholder:"Target commit (empty = HEAD)",gitTagMessagePlaceholder:"Message (annotated tag when filled)",gitTagCreate:"Create",gitTagEmpty:"(no tags)",gitTagAnnotated:"annotated",gitView:"View",gitTagCreated:"Tag {name} created",gitTagDeleteMsg:"Delete tag {name}?",gitTagDeleted:"Deleted {name}",gitTagPushed:"Tag {name} pushed",gitTagFetchAll:"Fetch tags from remote",gitTagFetchAllDone:"Fetched tags from remote",gitTagRemoteOnly:"remote",gitTagPull:"Fetch",gitTagPulled:"Fetched tag {name}",gitTagNoRemote:"No remote repo; cannot fetch or publish tags",gitCommitViewTitle:"Commit diff",gitCommitOpenDiff:"View diff of {path}",gitReleaseBtn:"Publish release",gitReleaseTitle:"Publish release (annotated tag + push to remote)",gitReleaseName:"Tag name",gitReleaseTarget:"Based on commit (empty = HEAD)",gitReleaseMsg:"Release notes (required)",gitReleasePublish:"Create & publish",gitReleaseRequireMsg:"Release notes are required",gitReleased:"Published {name} to remote",gitReleaseGhSkip:"GitHub Release not created: {reason}",gitRefresh:"Refresh",gitTabTags:"Tags",gitTabReleases:"Releases",gitReleaseChooseTag:"Choose an existing tag",gitReleaseNotesPlaceholder:"Release notes (shown on the Release page)",gitReleaseCreateForTag:"Create Release",gitReleaseCreated:"Release created: {url}",gitReleaseLoadSkip:"Releases unavailable: {reason}",gitReleaseEmpty:"No releases yet",gitReleaseOpen:"Open",gitRemoteNamePlaceholder:"Name, e.g. origin",gitRemoteUrlPlaceholder:"URL, e.g. https://github.com/user/repo.git",gitRemoteAdd:"Add remote",gitRemoteEmpty:"(no remotes)",gitRemoteAdded:"Remote {name} added",gitRemoteRemoveMsg:"Remove remote {name}?",gitRemoteRemoved:"Remote {name} removed",gitRemoteSetUrl:"Set URL",gitRemoteUrlTitle:"Set remote URL",gitRemoteUrlSaved:"Remote URL updated",gitStashView:"View contents",gitStashNew:"Create stash",gitStashNone:"(worktree clean, nothing to stash)",gitOpRunning:"Running…",gitOpFailed:"Operation failed",svnMenu:"SVN",svnPanel:"Open SVN Manager",svnPanelTitle:"SVN Manager",svnRepo:"Working copy: ",svnUpdate:"Update",svnCommitBtn:"Commit",svnAdd:"Add",svnAdded:"Added to version control",svnIgnore:"Ignore (svn:ignore)",svnRevert:"Revert",svnCleanup:"Clean up",svnResolve:"Resolve",svnDiff:"Diff",svnBlame:"Blame",svnCheckout:"Checkout",svnFailed:"SVN command failed",svnRailChanges:"Changes",svnRailLog:"Commit log",svnNoUrl:"Repository URL unavailable",svnRunning:"Running…",svnRefresh:"Refresh",svnLoading:"Loading…",svnSelectAll:"Select all",svnModifiedCount:"Local changes ({n})",svnNoChanges:"No local changes",svnCommitPlaceholder:"Enter commit message…",svnCommitSelected:"Will commit {n} selected file(s)",svnCommitAll:"Will commit all local changes",svnOutput:"Command output",svnNoOutput:"(no output)",svnNoCli:"svn CLI not found; please install Subversion",svnDone:"SVN command finished",svnUpdateSummaryFrom:"Update complete: r{from} → r{to}, {n} item(s) changed",svnUpdateSummary:"Update complete: {n} item(s) changed, now at r{to}",svnAlreadyLatest:"Already up to date at r{rev}; nothing to update",svnLogEmpty:"No log yet",svnLogToggle:"Click to expand / collapse this commit",svnLogNoPaths:"No changed files recorded for this commit",svnLogOpenDiff:"Show this file's diff in this commit",svnDiffTitle:"Diff · ",svnBlameTitle:"Blame · ",svnCheckoutUrlPlaceholder:"Repository URL (e.g. https://svn.example.com/svn/repo)",svnCheckoutTargetPlaceholder:"Checkout into local directory",repoCloneTitle:"Clone / Checkout Repository",repoCloneKindGit:"Git",repoCloneKindSvn:"SVN",repoCloneTitleGit:"Clone Git Repository",repoCloneTitleSvn:"Checkout SVN Repository",repoCloneCaptionGit:"Clone a full copy of a remote repository to local",repoCloneCaptionSvn:"Check out a specific revision from an SVN server",repoCloneTargetGit:"Will clone into",repoCloneTargetSvn:"Will check out into",repoCloneUrl:"Repository URL",repoCloneUrlGitPlaceholder:"Repository URL (e.g. https://github.com/owner/repo.git)",repoCloneDir:"Target directory",repoCloneDirPlaceholder:"Parent directory to clone into",repoCloneBrowse:"Browse…",repoCloneName:"Subdirectory name",repoCloneNamePlaceholder:"Leave empty to infer from URL",repoCloneShallow:"Shallow clone (latest commit only)",repoCloneShallowHint:"Faster and smaller, but without history",repoCloneRevision:"Revision",repoCloneRevisionPlaceholder:"Leave empty for latest (HEAD)",repoCloneAccount:"Account",repoCloneAccountAuto:"Auto (match by URL)",repoCloneAccountNew:"New account…",repoCloneTargetEmpty:"Please fill in the repository URL and target directory",repoCloneRunningGit:"Cloning Git repository…",repoCloneRunningSvn:"Checking out SVN repository…",repoCloneElapsed:"Elapsed {s}s",repoCloneKeepOpen:"Keep this window open; you will be notified when done.",repoCloneActionGit:"Clone",repoCloneActionSvn:"Checkout",repoCloneDoneGit:"Repository cloned: {name}",repoCloneDoneSvn:"Repository checked out: {name}",menuCloneGit:"Clone Git Repository…",menuCloneSvn:"Checkout SVN Repository…",svnNotRepoTip:"Not an SVN working copy. Fill in the form above to check out a repository.",svnCheckedOut:"Repository checked out",svnStAdded:"Added",svnStModified:"Modified",svnStDeleted:"Deleted",svnStReplaced:"Replaced",svnStConflicted:"Conflicted",svnStMissing:"Missing",svnStObstructed:"Obstructed",svnStUnversioned:"Unversioned",svnStIgnored:"Ignored",svnStLocked:"Locked",saveConfig:"Save",recycleBin:"Recycle Bin",recycleRestore:"Restore",recycleDelete:"Delete permanently",recycleEmpty:"Empty Recycle Bin",recycleEmptyConfirm:"Empty the Recycle Bin? This cannot be undone.",recycleDeleteConfirm:'Permanently delete "{name}"? This cannot be undone.',recycleDeleteConfirmMulti:"Permanently delete the {count} selected items? This cannot be undone.",recycleEmptying:"Emptying Recycle Bin…",recycleEmptyProgress:"Emptying Recycle Bin: {count} item(s) left",recycleEmptyDone:"Recycle Bin emptied",recycleEmptyList:"The Recycle Bin is empty",recycleRestored:"Restored to original location",recycledDeleted:"Permanently deleted",terminal:"Terminal",terminalTitle:"Terminal",terminalMinimize:"Minimize to task bar",terminalCloseTitle:"Close terminal",terminalClose:"Close",terminalNew:"New terminal",terminalShellSwitch:"Switch default shell (cmd / powershell)",terminalAdmin:"Administrator",terminalAdminNormal:"Standard",terminalAdminOn:"Running as administrator — commands here have admin rights",terminalAdminOff:"Standard privileges — commands here cannot change system-level settings",terminalAdminHint:'Launch dsh web as administrator (right-click the launcher → "Run as administrator") so every terminal in the panel gets admin rights — the shell inherits the host process token.',terminalClear:"Clear screen",terminalResizeTitle:"Drag to resize terminal",terminalDockDragTitle:"Click to expand · drag to move · right-click for menu",terminalDockSessions:"Minimized terminals",terminalDockCloseAll:"Close all",terminalTab:"{n}",scrollLeft:"Scroll left",scrollRight:"Scroll right",termFontSmaller:"Smaller font",termFontLarger:"Larger font",termInputFailed:"Terminal input failed: {msg}",termSshBadge:"This terminal is logged in to a remote SSH host",termSshReconnect:"Reconnect",termSshReconnectTitle:"Log in to the remote host again (auto, using the saved password / key)",termSearchPlaceholder:"Search terminal output…",termSearchCase:"Match case",termSearchPrev:"Previous",termSearchNext:"Next",termSearchClose:"Close search",termCopyHint:"Ctrl+C copy · Ctrl+V paste · Ctrl+F search"};function Hf(t,e){return t===void 0?"":e?t.replace(/\{([^}]+)\}/g,(n,l)=>e[l]!==void 0?String(e[l]):`{${l}}`):t}function Wf(t,e){return(t.toLowerCase().startsWith("zh")?Uf:Rr)[e]??Rr[e]}function Il(){return typeof window<"u"?window.__DSH_FILE_WORKBENCH__?.locale:void 0}function Ic(){const t=Il()?.getSnapshot()?.active;return t||(typeof navigator<"u"&&navigator.language?navigator.language:"en")}const oo=m(Ic());if(typeof window<"u"){const t=Il();t&&typeof t.subscribe=="function"&&t.subscribe(()=>{oo.value=Ic()})}function jc(t,e,n){return Hf(Wf(t,e),n)}function Bt(){const t=m(oo.value.toLowerCase().startsWith("zh"));if(typeof window<"u"){const e=Il();e&&typeof e.subscribe=="function"&&e.subscribe(()=>{t.value=oo.value.toLowerCase().startsWith("zh")})}return{locale:Sr(oo),isZh:Sr(t),t:(e,n)=>jc(oo.value,e,n)}}function y(t,e){return jc(oo.value,t,e)}const Vc={home:'<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',up:'<line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 11 12 4 19 11"/>',compass:'<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',folder:'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',folderOpen:'<path d="M6 14l1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"/>',search:'<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',chat:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',bot:'<rect x="4" y="9" width="16" height="11" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M10 6v3"/><line x1="8" y1="14" x2="9" y2="14"/><line x1="15" y1="14" x2="16" y2="14"/><line x1="12" y1="14.5" x2="12" y2="18"/>',gear:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>',terminal:'<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>',sun:'<circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/><line x1="4.5" y1="4.5" x2="6.5" y2="6.5"/><line x1="17.5" y1="17.5" x2="19.5" y2="19.5"/><line x1="4.5" y1="19.5" x2="6.5" y2="17.5"/><line x1="17.5" y1="6.5" x2="19.5" y2="4.5"/>',moon:'<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',refresh:'<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>',star:'<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',close:'<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',file:'<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/>',fileText:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',video:'<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>',music:'<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',archive:'<polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/>',grid:'<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',viewList:'<path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/>',viewDetails:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 9v12"/>',code:'<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',trash:'<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',edit:'<path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z"/><path d="M15 5l4 4"/>',cut:'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="8.12" y1="8.12" x2="15.88" y2="15.88"/><line x1="15.88" y1="8.12" x2="8.12" y2="15.88"/>',copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>',paste:'<path d="M6 9V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4"/><rect x="4" y="7" width="16" height="14" rx="2"/><path d="M9 12h6"/><path d="M9 16h6"/>',eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',eyeOff:'<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>',undo:'<path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-15-6.7L3 13"/>',redo:'<path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 15-6.7L21 13"/>',print:'<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',pin:'<path d="M12 17v5"/><path d="M9 3h6l1 6a2 2 0 0 0 2 2h1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2h1a2 2 0 0 0 2-2z"/>',globe:'<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/>',sparkle:'<path d="M12 3l1.9 4.6 4.6 1.9-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9z"/><circle cx="18.5" cy="5.5" r="1"/>',bug:'<rect x="8" y="6" width="8" height="14" rx="4"/><path d="M19 7l-3 2M5 7l3 2M19 17l-3-2M5 17l3-2M3 12h4M17 12h4"/><path d="M12 6V3"/>',sync:'<path d="M21 2v6h-6"/><path d="M3 22v-6h6"/><path d="M21 8a9 9 0 0 0-14.14-5.86L3 5.96"/><path d="M3 16a9 9 0 0 0 14.14 5.86L21 18.04"/>',arrowRight:'<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',arrowLeft:'<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 5 5 12 12 19"/>',warning:'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',chevronLeft:'<polyline points="15 18 9 12 15 6"/>',chevronRight:'<polyline points="9 18 15 12 9 6"/>',chevronsLeft:'<polyline points="11 17 6 12 11 7"/><polyline points="18 17 13 12 18 7"/>',chevronsRight:'<polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/>',chevronUp:'<polyline points="18 15 12 9 6 15"/>',chevronDown:'<polyline points="6 9 12 15 18 9"/>',chevronsUp:'<polyline points="17 11 12 6 7 11"/><polyline points="17 18 12 13 7 18"/>',chevronsDown:'<polyline points="7 6 12 11 17 6"/><polyline points="7 13 12 18 17 13"/>',external:'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>',fileOut:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M11 15c0-4.5-2.5-7-7-7"/><polyline points="7 5 4 8 7 11"/>',info:'<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',monitor:'<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',sort:'<path d="M3 6h18"/><path d="M6 12h12"/><path d="M9 18h6"/>',message:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',brain:'<path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z"/>',paperclip:'<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/>',check:'<polyline points="20 6 9 17 4 12"/>',save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>',plus:'<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',panellayout:'<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="14" y1="3" x2="14" y2="11"/><line x1="14" y1="15" x2="14" y2="21"/>',hardDrive:'<line x1="22" y1="12" x2="2" y2="12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" y1="16" x2="6.01" y2="16"/><line x1="10" y1="16" x2="10.01" y2="16"/>',git:'<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',tasks:'<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>',clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',activity:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',float:'<path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/><circle cx="9" cy="9" r="2"/><path d="M4 14h6"/>',dock:'<path d="M12 17v5"/><path d="M14 9V4h4V2H6v2h4v5l-2 2v1h8v-1z"/><path d="M17 5h3"/>',fileWord:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M8 17l2-7 2 4 2-4 2 7"/>',fileExcel:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 12l6 6M15 12l-6 6"/>',merge:'<circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/>',tag:'<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>',stash:'<path d="M21 8v13H3V8"/><path d="M1 3h22v5H1z"/><line x1="10" y1="12" x2="14" y2="12"/>',commit:'<circle cx="12" cy="12" r="4"/><line x1="1.05" y1="12" x2="7" y2="12"/><line x1="17.01" y1="12" x2="22.96" y2="12"/>',svn:'<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h10"/><circle cx="19" cy="17" r="2"/>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',mail:'<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',inbox:'<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',send:'<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',bookmark:'<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',unlock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>',key:'<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>',heart:'<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',flag:'<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>',bell:'<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',layers:'<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',database:'<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>',server:'<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>',cloud:'<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>',cloudUpload:'<polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>',cloudDownload:'<polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>',palette:'<circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.436-.652-.436-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.504 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>',pieChart:'<path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',barChart:'<line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>',trendingUp:'<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',trendingDown:'<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/>',box:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',package:'<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',rocket:'<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',target:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',crosshair:'<circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/>',sliders:'<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>',filter:'<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',zap:'<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',flashlight:'<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/><path d="M6.39 15.5 4 17v3h16v-3l-2.39-1.5"/>',map:'<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>',landmark:'<line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/>',wifi:'<path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>',battery:'<rect x="1" y="6" width="18" height="12" rx="2"/><line x1="23" y1="13" x2="23" y2="11"/>',cpu:'<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>',creditCard:'<rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>',gift:'<polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>',award:'<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>',medal:'<circle cx="12" cy="15" r="6"/><path d="M12 12V2l4 4-4 4"/><path d="M8 6l4 6"/>',thumbsUp:'<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>',smile:'<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>',mic:'<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>',camera:'<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',headphones:'<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',play:'<polygon points="5 3 19 12 5 21 5 3"/>',pause:'<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>',stop:'<rect x="5" y="5" width="14" height="14" rx="2"/>',skipForward:'<polygon points="5 4 15 12 5 20 5 4"/><line x1="19" y1="5" x2="19" y2="19"/>',skipBack:'<polygon points="19 20 9 12 19 4 19 20"/><line x1="5" y1="19" x2="5" y2="5"/>',volume:'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>',volumeHigh:'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>',volumeOff:'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>',maximize:'<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>',minimize:'<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/>',move:'<polyline points="5 9 2 12 5 15"/><polyline points="9 5 12 2 15 5"/><polyline points="15 19 12 22 9 19"/><polyline points="19 9 22 12 19 15"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/>',crop:'<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"/><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"/>',wand:'<path d="M15 4V2m0 20v-2M8.5 8.5 7 7m12 12-1.5-1.5M4 15H2m20 0h-2M4 4l1.5 1.5M18.5 18.5 20 20"/><path d="M14 10 4 20l-2-2L12 8z"/>',anchor:'<circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/>',feather:'<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/>',lifeBuoy:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"/><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"/><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"/><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"/>',rss:'<path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>',command:'<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>',function:'<path d="M9 11 6 21M15 3a3 3 0 0 0-3 3v1M18 9h-8m2 4c0 3-1 5-3 6"/>',binary:'<rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/>',flow:'<rect x="2" y="3" width="6" height="6" rx="1"/><rect x="16" y="15" width="6" height="6" rx="1"/><path d="M8 6h6a2 2 0 0 1 2 2v7"/><path d="M11 18H5a2 2 0 0 1-2-2v-1"/>',gitBranch:'<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',gitCommit:'<circle cx="12" cy="12" r="4"/><line x1="1.05" y1="12" x2="7" y2="12"/><line x1="17.01" y1="12" x2="22.96" y2="12"/>',fork:'<circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="12" cy="18" r="3"/><path d="M6 9v1a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V9"/><line x1="12" y1="13" x2="12" y2="15"/>',cube:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',puzzle:'<path d="M19.44 12.99c.72-.23 1.56.06 1.56 1.01 0 .55-.45 1-1 1h-2v2c0 .55-.45 1-1 1-.95 0-1.24.84-1.01 1.56.18.55-.06 1.43-.99 1.43-.55 0-1-.45-1-1v-2h-2c-.55 0-1-.45-1-1 0-.95-.84-1.24-1.56-1.01-.55.18-1.43-.06-1.43-.99 0-.55.45-1 1-1h2v-2c0-.55.45-1 1-1 .95 0 1.24-.84 1.01-1.56-.18-.55.06-1.43.99-1.43.55 0 1 .45 1 1v2h2c.55 0 1 .45 1 1 0 .95.84 1.24 1.56 1.01z"/>'};function Oo(t){return Object.prototype.hasOwnProperty.call(Vc,t)}const Gf=["width","height","innerHTML"],oe=ht({__name:"Icon",props:{name:{},size:{default:15}},setup(t){const e=t,n=B(()=>Vc[e.name]??""),l=B(()=>typeof e.size=="number"?`${e.size}px`:e.size);return(c,u)=>n.value?(i(),r("svg",{key:0,class:"fw-icon",viewBox:"0 0 24 24",width:l.value,height:l.value,fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",innerHTML:n.value},null,8,Gf)):P("",!0)}}),qf={class:"fw-confirm-ico","aria-hidden":"true"},Kf={class:"fw-confirm-msg"},Xf={key:0,class:"fw-confirm-msg"},zc=ht({__name:"ConfirmDialog",setup(t){const{t:e}=Bt(),n=B(()=>tt.okText||e("confirmOk")),l=B(()=>tt.cancelText||e("cancel"));function c(p){p||Ro(tt.kind==="prompt"||tt.choices.length?null:!1)}function u(p){Ro(p)}function v(){tt.kind==="prompt"?Ro(tt.inputValue.trim()):Ro(!0)}function d(){Ro(tt.kind==="prompt"?null:!1)}return(p,w)=>{const b=Ss,$=An,L=rn;return i(),Xe(L,{"model-value":s(tt).visible,class:"fw-confirm-dialog",width:"380px","align-center":"","append-to-body":"","show-close":!0,"close-on-click-modal":!1,"close-on-press-escape":!1,"onUpdate:modelValue":c},{footer:se(()=>[s(tt).choices.length?(i(!0),r(ae,{key:0},Ae(s(tt).choices,M=>(i(),Xe($,{key:M.id,type:M.primary?"primary":"default",onClick:A=>u(M.id)},{default:se(()=>[ue(a(M.text),1)]),_:2},1032,["type","onClick"]))),128)):(i(),r(ae,{key:1},[h($,{onClick:d},{default:se(()=>[ue(a(l.value),1)]),_:1}),h($,{type:"primary",onClick:v},{default:se(()=>[ue(a(n.value),1)]),_:1})],64))]),default:se(()=>[o("div",{class:te(["fw-confirm-body",{"fw-confirm-up":s(tt).kind==="confirm"}])},[s(tt).kind==="confirm"?(i(),r(ae,{key:0},[o("span",qf,[h(oe,{name:"warning",size:22})]),o("p",Kf,a(s(tt).message),1)],64)):(i(),r(ae,{key:1},[s(tt).message?(i(),r("p",Xf,a(s(tt).message),1)):P("",!0),s(tt).multiline?(i(),Xe(b,{key:1,modelValue:s(tt).inputValue,"onUpdate:modelValue":w[0]||(w[0]=M=>s(tt).inputValue=M),type:"textarea",rows:5,placeholder:s(tt).inputPlaceholder,onKeydown:bt(_e(v,["ctrl","prevent"]),["enter"])},null,8,["modelValue","placeholder","onKeydown"])):(i(),Xe(b,{key:2,modelValue:s(tt).inputValue,"onUpdate:modelValue":w[1]||(w[1]=M=>s(tt).inputValue=M),placeholder:s(tt).inputPlaceholder,clearable:"",onKeyup:bt(v,["enter"])},null,8,["modelValue","placeholder"]))],64))],2)]),_:1},8,["model-value"])}}}),Yf={ok:3e3,info:3e3,warning:4500,error:6e3},Jf=5,Nr="__DSH_FW_TOAST__";function si(){const t=globalThis;let e=t[Nr];return e||(e={items:m([]),seq:0,app:null,el:null},t[Nr]=e),e}const Di=si().items;function oi(t,e,n){const l=si(),c=++l.seq,u=n??Yf[t];for(l.items.value.push({id:c,kind:t,message:e,duration:u,remain:u,paused:!1});l.items.value.length>Jf;)l.items.value.shift();return c}function Pr(t){const e=si(),n=e.items.value.findIndex(l=>l.id===t);n!==-1&&e.items.value.splice(n,1)}function X(t,e,n){oi(t,e,n)}const fs=(t,e)=>void oi("error",t,e),ao=(t,e)=>void oi("warning",t,e),rs=(t,e)=>void oi("ok",t,e),Qf=3e4,io=new Map,ya=new Map;function qs(t,e,n=Qf){const l=io.get(t);if(l&&Date.now()-l.at<n)return Promise.resolve(l.value);const c=ya.get(t);if(c)return c;const u=e().then(v=>(io.set(t,{at:Date.now(),value:v}),ya.delete(t),v),v=>{throw ya.delete(t),v});return ya.set(t,u),u}function ai(t=""){let e=0;if(!t)return e=io.size,io.clear(),e;for(const n of[...io.keys()])n.startsWith(t)&&(io.delete(n),e++);return e}function Uc(t,e,n){const l=new URL(t,e);return l.protocol=l.protocol==="https:"?"wss:":"ws:",l.pathname=`${l.pathname.replace(/\/+$/,"")}/${n}`,l.search="",l.hash="",l.toString()}const Zf={},ep="/api/dsh-file-workbench";function tp(){if(typeof window<"u"&&window.__DSH_FILE_WORKBENCH__?.apiBase)return window.__DSH_FILE_WORKBENCH__.apiBase.replace(/\/$/,"");const t=Zf?.VITE_API_BASE??"";return t?t.replace(/\/$/,""):ep}const Yn=tp(),Lo=gt({seq:0,pending:0}),Aa=new Map;function np(){for(const t of Aa.values())t.abort();Aa.clear()}class Hc extends Error{constructor(){super("request aborted"),this.name="AbortRequestError"}}class Ws extends Error{constructor(e,n,l){super(e),this.status=n,this.code=l,this.name="ApiError"}}const sp=new Set(["mtime-conflict"]);function Wc(t,e){switch(t){case 403:return y("errForbidden");case 404:return y("errNotFound");case 409:return y("errNoRoot");case 413:return y("errTooLarge");case 500:return y("errServer");default:return e}}function Gc(t){return t instanceof Hc||t instanceof DOMException&&t.name==="AbortError"}async function We(t,e,n,l){const c=++Lo.seq;Lo.pending++;const u=new AbortController;Aa.set(c,u);const v=()=>u.abort();l?.signal&&(l.signal.aborted?u.abort():l.signal.addEventListener("abort",v,{once:!0}));const d={method:t,headers:{},signal:u.signal};n!==void 0&&(d.headers={"content-type":"application/json"},d.body=JSON.stringify(n));try{let p;try{p=await fetch(`${Yn}${e}`,d)}catch(b){throw u.signal.aborted?new Hc:(l?.silent||fs(y("errNetwork")),b instanceof Error?b:new Error(String(b)))}const w=await p.json().catch(()=>({ok:!1,error:"bad response"}));if(!w.ok){const b=w.error||`HTTP ${p.status}`;throw!!w.code&&sp.has(w.code)||(p.status===403&&/outside (root|workspace)/i.test(b)?l?.silent||fs(y("workspaceOutside")):l?.silent||fs(Wc(p.status,b))),new Ws(b,p.status,w.code)}return w.data}finally{Lo.pending--,Aa.delete(c),l?.signal?.removeEventListener("abort",v)}}const Ut=t=>{const e=new URLSearchParams;for(const[l,c]of Object.entries(t))c&&e.set(l,c);const n=e.toString();return n?`?${n}`:""};function Ta(t,e){return qs(`list:${e??""}:${t}`,()=>We("GET",`/list${Ut({key:e,path:t})}`))}function hn(t){return t.then(e=>(ai(),e))}function jl(t){return t.then(e=>(ai("git"),e))}function xs(t=""){return ai(t)}function op(t){return We("GET",`/root${Ut({key:t})}`)}function Vl(t,e){return We("POST","/root",{key:e,path:t})}function Xi(t,e,n={}){return hn(We("POST","/save",{key:n.key,path:t,content:e,encoding:n.encoding,hasBom:n.hasBom,eol:n.eol,expectedMtime:n.expectedMtime,force:n.force}))}function ap(t,e){return qs(`files:${e??""}:${t}`,()=>We("GET",`/files${Ut({key:e,path:t})}`))}function ip(t,e={}){return We("GET",`/search${Ut({key:e.key,q:t,path:e.path,limit:e.limit?.toString(),case:e.caseSensitive?"1":void 0,regex:e.regex?"1":void 0})}`)}function qc(t,e,n={}){return hn(We("POST","/replace",{key:n.key,scope:n.scope,q:t,replacement:e,caseSensitive:n.caseSensitive,regex:n.regex,wholeWord:n.wholeWord,preserveCase:n.preserveCase,include:n.include||void 0,exclude:n.exclude||void 0}))}function lp(t,e={}){return We("GET",`/grep${Ut({key:e.key,q:t,path:e.path,sub:e.sub||void 0,case:e.caseSensitive?"1":void 0,regex:e.regex?"1":void 0,word:e.wholeWord?"1":void 0,include:e.include||void 0,exclude:e.exclude||void 0})}`)}function Wt(t){return t.startsWith("ssh://")}function Kc(t){return qs(`mycomputer:${t??""}`,()=>We("GET",`/mycomputer${Ut({key:t})}`))}function Xc(){return qs("drives",()=>We("GET","/drives"))}function rp(){return We("GET","/ssh/hosts",void 0,{silent:!0})}function cp(t){return We("POST","/ssh/add",t)}function up(t){return We("POST","/ssh/update",t)}function dp(t){return We("POST","/ssh/remove",{id:t})}function Yi(t){return We("POST","/ssh/test",t)}function fp(t){return We("POST","/ssh/ping",{id:t},{silent:!0})}function pp(t){return We("POST","/ssh/cache",{path:t})}function vp(){return We("GET","/recycle-list")}function hp(){return We("GET","/recycle-count")}function mp(t){return hn(We("POST","/recycle-restore",{fullPath:t}))}function gp(t){return hn(We("POST","/recycle-delete",{fullPath:t}))}function yp(){return hn(We("POST","/recycle-empty",{}))}function wp(t,e){return We("GET",`/browse${Ut({key:e,path:t})}`)}function bp(t){return`${Yn}/download?path=${encodeURIComponent(t)}`}function Ar(t){return`${Yn}/_read-image?path=${encodeURIComponent(t)}`}function _p(t,e,n){const l=new URLSearchParams({session:e.session,shell:e.shell});return e.cwd&&l.set("cwd",e.cwd),e.key&&l.set("key",e.key),xp(`/exec-stream?${l.toString()}`,t,n)}function kp(t,e,n){const l=typeof location<"u"?location.href:"http://127.0.0.1/",c=Uc(Yn,l,"exec-mux-ws")+(e.key?`?key=${encodeURIComponent(e.key)}`:"");return new Promise(u=>{let v;try{v=new WebSocket(c)}catch{u();return}let d=!1;const p=()=>{if(!d){d=!0;try{n?.removeEventListener("abort",w)}catch{}try{v.close()}catch{}u()}},w=()=>p();n?.addEventListener("abort",w),v.onmessage=b=>{try{t(JSON.parse(String(b.data)))}catch{}},v.onclose=p,v.onerror=()=>{}})}function xp(t,e,n){return new Promise(l=>{const c=new EventSource(`${Yn}${t}`);let u=!1;const v=()=>{if(!u){u=!0;try{c.close()}catch{}l()}};c.onmessage=d=>{try{e(JSON.parse(d.data))}catch{}},c.onerror=v,n&&(n.aborted?v():n.addEventListener("abort",v,{once:!0}))})}function Fi(t){return We("POST","/exec-open",t)}function Cp(t,e,n){return We("POST","/exec-resize",{session:t,cols:e,rows:n},{silent:!0})}function Yc(t,e){return We("POST","/exec-input",{session:t,data:e},{silent:!0})}function $p(t){return We("POST","/exec-kill",{session:t})}function Sp(){return We("GET","/term-env")}function Ep(t,e,n,l){return We("POST","/subagent/spawn",{path:t,isDir:e,instruction:n,session:l})}function Ma(t,e){return hn(We("POST","/mkdir",{key:e,path:t}))}function Oa(t,e,n){return hn(We("POST","/rename",{key:n,from:t,to:e}))}function Ji(t,e){return hn(We("DELETE",`/remove${Ut({key:e,path:t})}`))}function Jc(t,e){return hn(We("POST","/touch",{key:e,path:t}))}function Tp(t,e,n){return hn(We("POST","/copy",{key:n,src:t,destDir:e}))}async function Dp(t,e,n){Lo.pending++;try{const l=await fetch(`${Yn}/upload${Ut({dir:t,name:e.name,key:n})}`,{method:"POST",body:e}),c=await l.json().catch(()=>({ok:!1,error:"bad response"}));if(!c.ok)throw new Error(c.error||`HTTP ${l.status}`);return ai(),c.data}finally{Lo.pending--}}function La(t){return We("GET",`/detail${Ut({path:t})}`)}async function Qi(t,e){try{return await We("GET",`/detail${Ut({path:t})}`,void 0,{silent:!0}),!0}catch(n){if(n instanceof Ws&&n.status===404)return!1;throw!Gc(n)&&!e?.silent&&fs(n instanceof Ws?Wc(n.status,n.message):y("errNetwork")),n}}async function Zi(t){try{return await We("GET",`/detail${Ut({path:t})}`,void 0,{silent:!0})}catch{return null}}function el(t,e={}){return We("GET",`/read${Ut({path:t,encoding:e.encoding,bom:e.hasBom===void 0?void 0:e.hasBom?"1":"0"})}`)}function Mr(t,e,n){return hn(We("POST","/compress",{key:n,path:t,to:e}))}function Fp(t,e,n){return hn(We("POST","/extract",{key:n,zipPath:t,destDir:e}))}function Qc(t){return We("POST","/openExternal",{path:t})}function Rp(t){return qs(`gitstatus:${t}`,()=>We("GET",`/git/status${Ut({path:t})}`))}function Np(t){return We("GET",`/git/diff${Ut({path:t})}`)}function Pp(t){return jl(We("POST","/git/add",{path:t}))}function Zc(t){return jl(We("POST","/git/ignore",{path:t}))}function Ap(t,e){return jl(We("POST","/git/commit",{path:t,message:e}))}function Mp(t){return hn(We("POST","/git/discard",{path:t}))}function Wo(t){return qs(`gitpanel:${t}`,()=>We("GET",`/git/panel${Ut({path:t})}`))}function Bo(t,e){return We("POST","/git/run",{path:t,args:e})}function Op(t,e){return hn(We("POST",t==="git"?"/git/clone":"/svn/checkout",e))}function Or(t,e,n,l){return We("POST","/git/gh-release",{path:t,tag:e,name:n,body:l})}function Lp(t){return We("GET",`/git/gh-releases${Ut({path:t})}`)}function eu(){return We("GET","/git/config")}function tu(t,e){return We("POST","/git/config",{name:t,email:e})}function ps(t){return qs(`svninfo:${t}`,()=>We("GET",`/svn/info${Ut({path:t})}`))}function Jt(t,e){return We("POST","/svn/run",{path:t,args:e})}function Bp(){return We("GET","/accounts")}function Ip(t){return We("POST","/accounts/add",t)}function nu(t,e){return We("GET",`/accounts/match${Ut({kind:t,url:e})}`,void 0,{silent:!0})}function jp(t){return We("POST","/accounts/update",t)}function Vp(t){return We("POST","/accounts/remove",{id:t})}function zp(t){return We("POST","/accounts/test",t)}function Up(t){return We("POST","/accounts/apply",{id:t})}function su(){return We("GET","/persist")}function Ks(t,e){return We("POST","/persist",{k:t,v:e})}async function Hp(){const t=await We("GET","/persist?k=taskLogs");return Array.isArray(t?.taskLogs)?t.taskLogs:[]}function Wp(t){return We("POST","/persist",{k:"taskLogs",v:t})}async function Gp(){return(await We("GET","/task-archives"))?.map??{}}function zl(t){return We("POST","/task-archives",{map:t})}function Es(){if(typeof window>"u")return null;const t=window.__DSH_FILE_WORKBENCH__?.officialTerminal;return t&&typeof t.create=="function"?t:null}function qp(){try{return Es()?.available()??!1}catch{return!1}}const St=m([]),Gs=m(""),cs=m(null),bn=m(null),vs=m({});function tl(t){return vs.value[t]===!0}function Kp(t){vs.value[t]||(vs.value={...vs.value,[t]:!0})}function Ul(t){if(!vs.value[t])return;const e={...vs.value};delete e[t],vs.value=e}function Xp(){Object.keys(vs.value).length&&(vs.value={})}const Pn=m({}),Lr=1500,Yp=/\x1b\[[0-9;?]*[ -/]*[@-~]/g;function Ba(t,e){const n=e.replace(Yp,"");if(!n.trim())return;let c=(Pn.value[t]??"")+n;c.length>Lr&&(c=c.slice(c.length-Lr)),Pn.value={...Pn.value,[t]:c}}function Jp(t){return Pn.value[t]??""}function Qp(t){if(Pn.value[t]===void 0)return;const e={...Pn.value};delete e[t],Pn.value=e}async function ou(){if(cs.value===null)try{const t=await Sp();cs.value=t.elevated===!0}catch{}}let Br=0;function Zp(){return Br+=1,Br}const Ir=4*1024*1024;function go(t){return t.length>Ir?t.slice(t.length-Ir):t}const yo=new Map;function jr(t,e){e?yo.set(t,e):yo.delete(t)}let lo=null,Hl="",Ri=null;const au="__DSH_FW_TERM_MUX_SSE__";function ev(){const e=globalThis[au];if(e&&typeof e.dispose=="function")try{e.dispose()}catch{}}function iu(t){const e=St.value.find(n=>n.session===t.session);if(e){if(t.type==="output")e.output=go(e.output+t.text),yo.get(e.id)?.(t.text),Ba(e.id,t.text);else if(t.type==="cwd")e.cwd=t.cwd;else if(t.type==="exit"){if(e.connected=!1,e.ssh){Ba(e.id,`
[ssh] session closed
`),e.output=go(e.output+`\r
\x1B[33m[ssh] session closed — 点「重连」重新登录\x1B[0m\r
`);return}window.setTimeout(()=>void Wl(e),300)}}}function lu(t){return t?.message||String(t)}async function ru(t,e){if(t.ssh){const l=t.ssh;try{const c=await Fi({session:t.session,kind:"ssh",hostId:l.hostId,remote:l.remote,key:e});if(c?.kind!=="ssh")throw new Error("宿主未启用远端终端（缺少 /exec-open 的 kind 支持），请重启 dsh web");return t.sshDegraded=!1,c}catch(c){const u=lu(c);t.output=go(t.output+`\r
\x1B[33m[ssh] 自动登录 ${l.label} 失败：${u}\x1B[0m\r
\x1B[2m[ssh] 已回退到本机 ssh 客户端，请手动输入口令；修好后可用页脚「重连」再试直连。\x1B[0m\r
`),Ba(t.id,`[ssh] auto login failed: ${u}
`),t.sshDegraded=!0,t.cwd="";const v=await Fi({session:t.session,kind:"local",shell:t.shell,key:e});return t.initCmd=t.fallbackCmd,Ia(t),v}}const n=await Fi({session:t.session,kind:"local",shell:t.shell,cwd:t.cwd||void 0,key:e});return Ia(t),n}async function Wl(t){if(!(!St.value.includes(t)||t.connected)){if(t.output="",Pn.value={...Pn.value,[t.id]:""},t.backend==="official"){Es()?.close(t.id),t.connected=!0,du(t);return}try{const e=await ru(t,Hl||void 0);e?.cwd&&(t.cwd=e.cwd),t.connected=!0,cu()}catch{t.connected=!1}}}function cu(){if(lo)return;ev();const t=new AbortController;lo=t;const e={dispose:()=>ii()};globalThis[au]=e;const n=async()=>{if(!t.signal.aborted){try{await kp(iu,{key:Hl},t.signal)}catch{}if(t.signal.aborted){lo===t&&(lo=null);return}window.setTimeout(()=>void n(),500)}};n()}function ii(){lo?.abort(),lo=null}function tv(){St.value.some(t=>t.connected)||ii()}function Ia(t){const e=t.initCmd;e&&(t.initCmd=void 0,window.setTimeout(()=>{t.connected&&(t.backend==="official"?Es()?.write(t.id,`${e}\r`):Yc(t.session,`${e}\r`))},800))}function Vr(t,e){const n=new AbortController;t.streamAbort=n;const l=async()=>{if(!(!t.connected||n.signal.aborted)){try{await _p(c=>iu({...c,session:t.session}),{session:t.session,cwd:t.cwd||void 0,key:e,shell:t.shell},n.signal)}catch{}t.connected&&!n.signal.aborted?window.setTimeout(()=>void l(),500):t.connected=!1}};Ia(t),l()}let zr=!1;function uu(t){return St.value.find(e=>e.id===t&&e.backend==="official")}function nv(t){const e=uu(t.tag);e&&(e.output=go(e.output+t.text),yo.get(e.id)?.(t.text),Ba(e.id,t.text))}function sv(t){const e=uu(t.tag);if(e){if(t.cwd&&t.cwd!==e.cwd&&(e.cwd=t.cwd),t.exited){e.connected=!1,window.setTimeout(()=>void Wl(e),300);return}if(t.phase==="connected"&&!e.connected)e.connected=!0,Ia(e);else if(t.phase==="failed"&&t.error){const n=`\r
\x1B[33m[term] ${t.error}\x1B[0m\r
`;e.output=go(e.output+n),yo.get(e.id)?.(n)}}}function ov(){zr||typeof window>"u"||(zr=!0,window.addEventListener("dshfw-ot-data",t=>nv(t.detail)),window.addEventListener("dshfw-ot-status",t=>sv(t.detail)))}async function du(t){const e=Es();if(!e){t.backend=void 0,t.connected=!1,ja(t);return}ov();const n=await e.create(t.id,{cols:80,rows:24}).catch(()=>null);if(n===null){t.backend=void 0,t.connected=!1,ja(t);return}if(!St.value.includes(t)){e.close(t.id);return}n.cwd&&(t.cwd=n.cwd)}function ja(t,e){if(!t.connected){if(t.connected=!0,e&&(Hl=e),!t.ssh&&qp()){t.backend="official",du(t);return}if(t.backend=void 0,Ri===!1){Vr(t,e);return}cu(),ru(t,e).then(n=>{Ri=!0,n?.cwd&&(t.cwd=n.cwd)}).catch(n=>{n?.status===404&&(Ri=!1,St.value.some(l=>l.connected)||ii()),Vr(t,e)})}}const av=16,iv=512,lv=/[\r\n\x03\x04\x1a]/,us=new Map;function fu(t){let e=us.get(t);return e||(e={pending:"",timer:0,inFlight:!1},us.set(t,e)),e}function nl(t){const e=fu(t);if(e.timer&&(window.clearTimeout(e.timer),e.timer=0),!e.pending)return;const n=St.value.find(c=>c.session===t);if(n?.backend==="official"){const c=e.pending;e.pending="",Es()?.write(n.id,c),!e.pending&&!e.timer&&us.delete(t);return}if(e.inFlight)return;const l=e.pending;e.pending="",e.inFlight=!0,Yc(t,l).catch(c=>{cv(t,c)}).finally(()=>{const c=us.get(t);c&&(c.inFlight=!1,c.pending?nl(t):c.timer||us.delete(t))})}const rv=3e3,Ur=new Map,Ni=new Set;function cv(t,e){const n=St.value.find(u=>u.session===t);if(!n)return;const l=lu(e),c=Date.now();if(c-(Ur.get(t)??0)>=rv){Ur.set(t,c);const u=`\r
\x1B[31m[term] ${y("termInputFailed",{msg:l})}\x1B[0m\r
`;n.output=go(n.output+u),yo.get(n.id)?.(u),X("warning",y("termInputFailed",{msg:l}))}e?.status===404&&uv(n)}async function uv(t){if(!(Ni.has(t.session)||!St.value.includes(t))){Ni.add(t.session);try{li(t),await Wl(t)}finally{Ni.delete(t.session)}}}function dv(t,e){if(!e)return;const n=St.value.find(c=>c.session===t);if(n&&!n.connected)return;const l=fu(t);if(l.pending+=e,lv.test(e)||l.pending.length>=iv){nl(t);return}l.timer||(l.timer=window.setTimeout(()=>nl(t),av))}function pu(t){if(t){const e=us.get(t);e&&e.timer&&window.clearTimeout(e.timer),us.delete(t);return}for(const[e,n]of us)n.timer&&window.clearTimeout(n.timer),us.delete(e)}function li(t){t.connected=!1,t.backend==="official"&&Es()?.detach(t.id),t.streamAbort?.abort(),t.streamAbort=void 0,pu(t.session),sl.delete(t.session)}function Gl(t){return t.backend==="official"?(Es()?.close(t.id),Promise.resolve()):$p(t.session).catch(()=>{})}const sl=new Map;function fv(t,e,n){if(!e||!n)return;const l=`${e}x${n}`;if(sl.get(t)===l)return;sl.set(t,l);const c=St.value.find(u=>u.session===t);if(c?.backend==="official"){Es()?.resize(c.id,e,n);return}Cp(t,e,n).catch(()=>{})}async function Hr(t,e){const n=t.backend==="official";li(t),t.output="",Pn.value={...Pn.value,[t.id]:""},await Gl(t),n&&(t.backend=void 0),ja(t,e)}function vu(t){const e=St.value.findIndex(l=>l.id===t),n=St.value[e];if(n&&(li(n),Gl(n),St.value.splice(e,1),Qp(t),Ul(t),tv(),Gs.value===t)){const l=St.value[e]??St.value[e-1]??St.value[0];Gs.value=l?l.id:""}}async function pv(){const t=St.value.slice();St.value=[],Gs.value="",Pn.value={},Xp(),ii(),await Promise.all(t.map(e=>(li(e),Gl(e).catch(()=>{}))))}const na=new Map;let Wr=0;function vv(t){return na.get(t)}function hv(t,e){na.set(t,e),hu()}function mv(t){na.delete(t)&&hu()}function hu(){Ks("termWins",Object.fromEntries(na))}function gv(t){if(!t||typeof t!="object")return;const e=t;for(const[n,l]of Object.entries(e)){if(!l||typeof l!="object")continue;const c=l;typeof c.x=="number"&&typeof c.y=="number"&&typeof c.w=="number"&&typeof c.h=="number"&&na.set(n,{x:c.x,y:c.y,w:c.w,h:c.h})}}function yv(){return{w:680,h:460,x:Math.max(12,window.innerWidth-680-24),y:Math.max(12,window.innerHeight-460-24)}}function wv(){Wr+=1;const t=yv(),e=Wr%8*30;return{w:t.w,h:t.h,x:Math.max(12,t.x-e),y:Math.max(12,t.y-e)}}function Gr(){return`t${Date.now().toString(36)}${Math.random().toString(36).slice(2,10)}`}function bv(t,e){const n={id:Gr(),name:Zp(),session:Gr(),cwd:e?.cwd??"",shell:e?.shell??"cmd",ssh:e?.ssh,fallbackCmd:e?.fallbackCmd||void 0,output:"",connected:!1,initCmd:e?.initCmd||void 0,focusPending:e?.focus===!0};return St.value.push(n),Gs.value=n.id,ja(n,t),n}function qr(t){vu(t),mv(t)}function _v(t){const e=St.value.find(n=>n.id===t);return e?.focusPending?(e.focusPending=!1,!0):!1}const Io={showHidden:!0,view:"details",showExtensions:!0,sortKey:"name",asc:!0,theme:"auto",fontFamily:"default",fontSize:13,accentColor:"",allowOutsideRoot:!1,colWidths:{name:300,size:96,type:160},termShell:"cmd",termFontSize:13,txtWordWrap:!1,txtShowStatus:!0,vsGitBarH:0,autoSave:!1,vsMinimap:!0},Ue=gt({...Io}),mu=["huge","large","medium","small","list","details","content","tiles"];function kv(t){if(!t||typeof t!="object")return{};const e=t,n={};typeof e.showHidden=="boolean"&&(n.showHidden=e.showHidden),typeof e.showExtensions=="boolean"&&(n.showExtensions=e.showExtensions),mu.includes(String(e.view))&&(n.view=e.view),["name","size","type","mtime"].includes(String(e.sortKey))&&(n.sortKey=e.sortKey),typeof e.asc=="boolean"&&(n.asc=e.asc),["auto","dark","light"].includes(String(e.theme))&&(n.theme=e.theme),typeof e.fontFamily=="string"&&(n.fontFamily=e.fontFamily.trim()||"default"),typeof e.fontSize=="number"&&e.fontSize>0&&(n.fontSize=e.fontSize),typeof e.accentColor=="string"&&/^#[0-9a-fA-F]{3,8}$/.test(e.accentColor)&&(n.accentColor=e.accentColor),typeof e.allowOutsideRoot=="boolean"&&(n.allowOutsideRoot=e.allowOutsideRoot);const l=e.colWidths;if(l&&typeof l=="object"){const c=(u,v)=>typeof u=="number"&&Number.isFinite(u)&&u>=40?u:v;n.colWidths={name:c(l.name,Io.colWidths.name),size:c(l.size,Io.colWidths.size),type:c(l.type,Io.colWidths.type)}}return(e.termShell==="powershell"||e.termShell==="cmd")&&(n.termShell=e.termShell),typeof e.termFontSize=="number"&&e.termFontSize>=8&&e.termFontSize<=36&&(n.termFontSize=e.termFontSize),typeof e.txtWordWrap=="boolean"&&(n.txtWordWrap=e.txtWordWrap),typeof e.txtShowStatus=="boolean"&&(n.txtShowStatus=e.txtShowStatus),typeof e.vsGitBarH=="number"&&e.vsGitBarH>=0&&(n.vsGitBarH=e.vsGitBarH),typeof e.autoSave=="boolean"&&(n.autoSave=e.autoSave),typeof e.vsMinimap=="boolean"&&(n.vsMinimap=e.vsMinimap),n}async function xv(){const t=await su().catch(()=>null);if(t){if(Object.assign(Ue,{...Io,...kv(t.prefs)}),Array.isArray(t.favorites)&&(Us.value=t.favorites.map(String)),t.layout&&typeof t.layout=="object"){const e=t.layout,n=e.navGroups;if(n&&typeof n=="object"){const l=n;Object.assign(Un.navGroups,gu.navGroups),typeof l.home=="boolean"&&(Un.navGroups.home=l.home),typeof l.myComputer=="boolean"&&(Un.navGroups.myComputer=l.myComputer),typeof l.favorites=="boolean"&&(Un.navGroups.favorites=l.favorites),typeof l.ssh=="boolean"&&(Un.navGroups.ssh=l.ssh)}typeof e.explorerSplit=="number"&&e.explorerSplit>.05&&e.explorerSplit<.95&&(Un.explorerSplit=e.explorerSplit)}if(t.termWin&&typeof t.termWin=="object"){const e=t.termWin;typeof e.w=="number"&&e.w>0&&e.w,typeof e.h=="number"&&e.h>0&&e.h,typeof e.x=="number"&&e.x,typeof e.y=="number"&&e.y}if(t.termWins&&typeof t.termWins=="object"&&gv(t.termWins),t.folderViews&&typeof t.folderViews=="object"){for(const n of Object.keys(hs))delete hs[n];const e=t.folderViews;for(const[n,l]of Object.entries(e))mu.includes(String(l))&&(hs[n]=String(l))}}}function Hn(){Ks("prefs",{...Ue})}const gu={navGroups:{home:!0,myComputer:!0,favorites:!0,ssh:!0},explorerSplit:.3},Un=gt({...gu});function Da(){Ks("layout",{...Un})}const hs=gt({}),Va=m(Ue.view);function ol(t){return hs[t]??Ue.view}function al(t,e){hs[t]=e,Ks("folderViews",{...hs})}function Cv(){for(const t of Object.keys(hs))delete hs[t];Ks("folderViews",{...hs})}const Us=m([]);function Kr(){Ks("favorites",Us.value)}function ro(t){return Us.value.includes(t)}function za(t){const e=Us.value.indexOf(t);return e>=0?(Us.value.splice(e,1),Kr(),!1):(Us.value.push(t),Kr(),!0)}const $v={class:"fw-dlg-head"},Sv={class:"fw-dlg-badge"},Ev={class:"fw-dlg-headtext"},Tv={class:"fw-dlg-headtitle"},Dv={class:"fw-dlg-headsub"},Fv={class:"fw-set-body"},Rv={class:"fw-set-group"},Nv={class:"fw-set-group-title"},Pv={class:"fw-set-row"},Av={class:"k"},Mv={class:"fw-set-row"},Ov={class:"k"},Lv={class:"fw-set-row"},Bv={class:"k"},Iv={class:"fw-set-group"},jv={class:"fw-set-group-title"},Vv={class:"fw-set-row"},zv={class:"k"},Uv={class:"fw-set-accent"},Hv={class:"fw-set-row"},Wv={class:"k"},Gv={class:"fw-set-row"},qv={class:"k"},Kv={class:"fw-set-row"},Xv={class:"k"},Yv={class:"fw-set-row"},Jv={class:"k"},Qv=ht({__name:"SettingsDialog",setup(t,{expose:e}){const{t:n}=Bt(),l=m(!1),c=["#1f883d","#238636","#0969da","#8250df","#b35900","#cf222e","#0a3069","#116329"];function u(w){Ue.accentColor=typeof w=="string"?w:"",Hn()}function v(){Ue.accentColor="",Hn()}e({open:()=>{l.value=!0}});function d(){Hn()}function p(){Cv(),Hn()}return(w,b)=>{const $=yf,L=wf,M=An,A=ni,I=ti,U=rn;return i(),Xe(U,{modelValue:l.value,"onUpdate:modelValue":b[8]||(b[8]=C=>l.value=C),class:"fw-set-dialog",width:"460px","align-center":"","modal-class":"fw-blur-overlay","close-on-click-modal":!1},{header:se(()=>[o("div",$v,[o("span",Sv,[h(oe,{name:"gear",size:20})]),o("span",Ev,[o("span",Tv,a(s(n)("settings")),1),o("span",Dv,a(s(n)("settingsSubtitle")),1)])])]),default:se(()=>[o("div",Fv,[o("div",Rv,[o("div",Nv,a(s(n)("settingsGroupFiles")),1),o("div",Pv,[o("span",Av,a(s(n)("allowOutsideRoot")),1),h($,{modelValue:s(Ue).allowOutsideRoot,"onUpdate:modelValue":b[0]||(b[0]=C=>s(Ue).allowOutsideRoot=C),onChange:d},null,8,["modelValue"])]),o("div",Mv,[o("span",Ov,a(s(n)("showHidden")),1),h($,{modelValue:s(Ue).showHidden,"onUpdate:modelValue":b[1]||(b[1]=C=>s(Ue).showHidden=C),onChange:d},null,8,["modelValue"])]),o("div",Lv,[o("span",Bv,a(s(n)("autoSave")),1),h($,{modelValue:s(Ue).autoSave,"onUpdate:modelValue":b[2]||(b[2]=C=>s(Ue).autoSave=C),onChange:d},null,8,["modelValue"])])]),o("div",Iv,[o("div",jv,a(s(n)("settingsGroupAppearance")),1),o("div",Vv,[o("span",zv,a(s(n)("accentColor")),1),o("span",Uv,[h(L,{modelValue:s(Ue).accentColor,"onUpdate:modelValue":b[3]||(b[3]=C=>s(Ue).accentColor=C),size:"small",predefine:c,"popper-class":"fw-set-popper",onChange:u},null,8,["modelValue"]),s(Ue).accentColor?(i(),Xe(M,{key:0,text:"",size:"small",class:"fw-set-accent-reset",onClick:v},{default:se(()=>[ue(a(s(n)("accentReset")),1)]),_:1})):P("",!0)])]),o("div",Hv,[o("span",Wv,a(s(n)("fontSize")),1),h(I,{modelValue:s(Ue).fontSize,"onUpdate:modelValue":b[4]||(b[4]=C=>s(Ue).fontSize=C),size:"small",class:"fw-set-select","popper-class":"fw-set-popper",onChange:d},{default:se(()=>[h(A,{value:12,label:s(n)("fontSizeSm")},null,8,["label"]),h(A,{value:13,label:s(n)("fontSizeMd")},null,8,["label"]),h(A,{value:14,label:s(n)("fontSizeLg")},null,8,["label"]),h(A,{value:16,label:s(n)("fontSizeXl")},null,8,["label"])]),_:1},8,["modelValue"])]),o("div",Gv,[o("span",qv,a(s(n)("fontFamily")),1),h(I,{modelValue:s(Ue).fontFamily,"onUpdate:modelValue":b[5]||(b[5]=C=>s(Ue).fontFamily=C),size:"small",class:"fw-set-select","popper-class":"fw-set-popper",clearable:"",placeholder:s(n)("fontDefault"),onChange:d},{default:se(()=>[h(A,{value:"default",label:s(n)("fontDefault")},null,8,["label"]),h(A,{value:"'Segoe UI', 'Microsoft YaHei', system-ui",label:s(n)("fontOptionYahei")},null,8,["label"]),h(A,{value:"Consolas",label:s(n)("fontOptionConsolas")},null,8,["label"]),h(A,{value:"'Courier New', monospace",label:s(n)("fontOptionCourier")},null,8,["label"]),h(A,{value:"Georgia, 'Times New Roman', serif",label:s(n)("fontOptionGeorgia")},null,8,["label"])]),_:1},8,["modelValue","placeholder"])]),o("div",Kv,[o("span",Xv,a(s(n)("themeMode")),1),h(I,{modelValue:s(Ue).theme,"onUpdate:modelValue":b[6]||(b[6]=C=>s(Ue).theme=C),size:"small",class:"fw-set-select","popper-class":"fw-set-popper",onChange:d},{default:se(()=>[h(A,{value:"auto",label:s(n)("themeAuto")},null,8,["label"]),h(A,{value:"dark",label:s(n)("themeDark")},null,8,["label"]),h(A,{value:"light",label:s(n)("themeLight")},null,8,["label"])]),_:1},8,["modelValue"])]),o("div",Yv,[o("span",Jv,a(s(n)("defaultView")),1),h(I,{modelValue:s(Ue).view,"onUpdate:modelValue":b[7]||(b[7]=C=>s(Ue).view=C),size:"small",class:"fw-set-select","popper-class":"fw-set-popper",onChange:p},{default:se(()=>[h(A,{value:"details",label:s(n)("viewDetails")},null,8,["label"]),h(A,{value:"content",label:s(n)("viewContent")},null,8,["label"]),h(A,{value:"tiles",label:s(n)("viewTiles")},null,8,["label"]),h(A,{value:"list",label:s(n)("viewList")},null,8,["label"]),h(A,{value:"small",label:s(n)("viewSmall")},null,8,["label"]),h(A,{value:"medium",label:s(n)("viewMedium")},null,8,["label"]),h(A,{value:"large",label:s(n)("viewLarge")},null,8,["label"]),h(A,{value:"huge",label:s(n)("viewHuge")},null,8,["label"])]),_:1},8,["modelValue"])])])])]),_:1},8,["modelValue"])}}}),xt=(t,e)=>{const n=t.__vccOpts||t;for(const[l,c]of e)n[l]=c;return n},Zv=xt(Qv,[["__scopeId","data-v-fbafa4a0"]]),ql=new Map,Kl=new Map,il=new Set,ll=new Set,rl=new Set,jo=new Set,Go=new Set;let Vo=null,wo="\0unset",jt=null,ms=0,bo="",_o="";const Fa=new Set;let fo=!0;const Xr="__DSH_FW_PUSH_WS__";function eh(){fo=!0,ms&&(window.clearTimeout(ms),ms=0);const t=jt;jt=null;try{t?.close()}catch{}}const Yr={dispose:()=>eh()};function th(){const t=globalThis,e=t[Xr];if(e&&e!==Yr&&typeof e.dispose=="function")try{e.dispose()}catch{}t[Xr]=Yr}th();function yu(){const t=new Set;for(const e of ql.values())for(const n of e)t.add(n);return[...t].sort()}function wu(){const t=new Set(jo);for(const e of Kl.values())for(const n of e)t.add(n);return[...t].sort()}function nh(){if(!jo.size)return;const t=new Set;for(const e of Kl.values())for(const n of e)t.add(n);for(const e of Go)for(const n of e.ids)t.add(n);for(const e of[...jo])t.has(e)||jo.delete(e)}function sh(t,e){return Uc(t,e,"push")}function oh(){const t=typeof location<"u"?location.href:"http://127.0.0.1/";return sh(Yn,t)}function bu(){return jt!==null&&jt.readyState===WebSocket.OPEN}function Jr(){fo||ms||(ms=window.setTimeout(()=>{ms=0,_u()},1500))}function _u(){if(fo||jt&&(jt.readyState===WebSocket.OPEN||jt.readyState===WebSocket.CONNECTING))return;let t;try{t=new WebSocket(oh())}catch{Jr();return}jt=t,t.onopen=()=>{bo="",_o="",wo="\0unset",ku()},t.onmessage=e=>ah(e.data),t.onerror=()=>{},t.onclose=()=>{jt===t&&(jt=null),bo="",_o="",wo="\0unset",Jr()}}function ku(){if(!jt||jt.readyState!==WebSocket.OPEN)return;const t=yu(),e=t.join(`
`);e!==bo&&(bo=e,jt.send(JSON.stringify({type:"watch",paths:t})));const n=wu(),l=n.join(`
`);if(l!==_o&&(_o=l,jt.send(JSON.stringify({type:"ssh-watch",ids:n}))),Fa.size){const c=[...Fa];Fa.clear(),jt.send(JSON.stringify({type:"ssh-check",ids:c}))}Vo!==wo&&(wo=Vo,jt.send(JSON.stringify({type:"session-watch",id:Vo})))}function ah(t){if(typeof t!="string")return;let e;try{e=JSON.parse(t)}catch{return}if(e.type==="changed"&&e.items){const n=e.items;for(const[l,c]of Object.entries(n))for(const u of il)u(l,c);return}if(e.type==="ssh-status"&&e.items){const n=e.items;for(const l of ll)l(n);for(const l of[...Go])Object.keys(n).some(c=>l.ids.has(c))&&(Go.delete(l),l.resolve(n));return}if(e.type==="session-ev"&&e.ev&&typeof e.ev=="object")for(const n of rl)n(e.ev)}function ko(){if(!(yu().length>0||wu().length>0||Vo!==null)){fo=!0,bo="",_o="",wo="\0unset",ms&&(window.clearTimeout(ms),ms=0);const e=jt;jt=null;try{e?.close()}catch{}return}fo&&(bo="",_o="",wo="\0unset"),fo=!1,_u(),ku()}function ih(t,e){ql.set(t,e),ko()}function lh(t){ql.delete(t),ko()}function rh(t){return il.add(t),()=>il.delete(t)}function ch(t,e){Kl.set(t,e),ko()}function uh(t){return ll.add(t),()=>ll.delete(t)}function xu(t,e=12e3){const n=[...new Set(t.filter(Boolean))];if(!n.length)return Promise.resolve({});for(const l of n)jo.add(l);return ko(),new Promise(l=>{let c=0;const u=d=>{c&&window.clearTimeout(c),Go.delete(v),nh(),ko(),l(d)},v={ids:new Set(n),resolve:u};if(Go.add(v),c=window.setTimeout(()=>u({}),e),jt&&jt.readyState===WebSocket.OPEN)jt.send(JSON.stringify({type:"ssh-check",ids:n}));else for(const d of n)Fa.add(d)})}function Xl(t){Vo=t,ko()}function dh(t){return rl.add(t),()=>rl.delete(t)}const an=m([]),Cu=m(!1),Zt=m({});function Ua(t){return Zt.value[t]?.state??"unknown"}function cl(t){return Zt.value[t]?.error??""}async function Ha(t){Zt.value={...Zt.value,[t]:{state:"checking"}};const n=(await xu([t]))[t];return n?(Zt.value={...Zt.value,[t]:n.alive?{state:"online"}:{state:"offline",error:n.error}},n.alive):(Zt.value={...Zt.value,[t]:{state:"unknown"}},!1)}async function ul(){const t=an.value.map(n=>n.id);if(!t.length)return;const e={...Zt.value};for(const n of t)e[n]={state:"checking"};if(Zt.value=e,!bu()){await $u();return}await xu(t)}async function Hs(){try{const t=await rp();an.value=t.hosts??[];const e=new Set(an.value.map(n=>n.id));for(const n of Object.keys(Zt.value))e.has(n)||delete Zt.value[n];Su()}catch{an.value=[]}finally{Cu.value=!0}}let dl=!1;function fh(){dl||(dl=!0,uh(t=>{const e={...Zt.value};for(const[n,l]of Object.entries(t))e[n]=l.alive?{state:"online"}:{state:"offline",error:l.error};Zt.value=e})),Su(),vh()}const ph=3e4;let Qr=null;async function $u(){const t=an.value.slice();t.length&&await Promise.all(t.map(async e=>{const n=await fp(e.id).catch(()=>null);n&&(Zt.value={...Zt.value,[e.id]:n.alive?{state:"online"}:{state:"offline",error:n.error}})}))}function vh(){Qr||(Qr=setInterval(()=>{bu()||$u()},ph))}function Su(){dl&&ch("ssh-store",an.value.map(t=>t.id))}function Eu(t){if(!t.startsWith("ssh://"))return null;const e=t.slice(6),n=e.indexOf("/"),l=n===-1?e:e.slice(0,n);if(!l)return null;const c=n===-1?"/":e.slice(n)||"/";return{hostId:l,remote:c.replace(/\/+$/,"")||"/"}}function hh(t,e="cmd"){const n=Eu(t);if(!n)return"";const l=an.value.find(w=>w.id===n.hostId);if(!l)return"";const c=l.authType==="key"&&l.privateKeyPath?`-i "${l.privateKeyPath}" `:"",d=`cd ${`'${n.remote.replace(/'/g,"'\\''")}'`} && exec bash -l`.replace(/"/g,'\\"'),p=e==="powershell"?`'${d.replace(/'/g,"''")}'`:`"${d}"`;return`ssh ${c}-p ${l.port||22} -o StrictHostKeyChecking=accept-new -t ${l.user}@${l.host} ${p}`}function zs(t){return`ssh://${t}/`}function mh(t){const e=Eu(t);if(!e)return null;const n=an.value.find(l=>l.id===e.hostId);return n?{hostId:n.id,remote:gh(e.remote),label:n.name||`${n.user}@${n.host}`}:null}function gh(t){const e=(t??"").trim().replace(/\\/g,"/");return e?e.startsWith("/")?e.replace(/\/+$/,"")||"/":`/${e.replace(/\/+$/,"")}`:"/"}function Yl(t){if(!t.startsWith("ssh://"))return"";const e=t.slice(6),n=e.indexOf("/");return(n===-1?e:e.slice(0,n)).trim()}function Tu(t){if(!t.startsWith("ssh://"))return"";const e=t.slice(6),n=e.indexOf("/");return(n===-1?"":e.slice(n)).replace(/\/+$/,"")||"/"}function fl(t){const e=Yl(t);if(!e)return t;const n=an.value.find(u=>u.id===e),l=n?n.name||`${n.user}@${n.host}`:e,c=Tu(t);return c&&c!=="/"?`${l} · ${c}`:l}function Wa(t){const e=Yl(t);if(!e)return"";const n=Tu(t);if(!n||n==="/")return"";const l=n.lastIndexOf("/"),c=l<=0?"/":n.slice(0,l);return`ssh://${e}${c==="/"?"/":c}`}function Zr(t,e){return`${t.replace(/\/+$/,"")}/${e}`}async function yh(t=!1){Cu.value&&!t||await Hs()}function Du(t){if(!t.startsWith("ssh://"))return null;const e=t.slice(6),n=e.indexOf("/"),l=n===-1?e:e.slice(0,n);if(!l)return null;const c=n===-1?"":e.slice(n),u=an.value.find(w=>w.id===l),d=[{name:u?u.name||`${u.user}@${u.host}`:l,path:`ssh://${l}/`}];let p="";for(const w of c.split("/").filter(Boolean))p+=`/${w}`,d.push({name:w,path:`ssh://${l}${p}`});return d}const _n=gt({open:!1,editingId:null});function Fu(){_n.editingId=null,_n.open=!0}function wh(t){_n.editingId=t,_n.open=!0}function wa(){_n.open=!1}const Fe=gt({key:"default",root:"",explorerPath:"",externalViewActive:!1,search:{q:"",hits:[],truncated:!1,running:!1,scope:""},termOpen:!1,termRequestCwd:"",termRequestCmd:"",termRequestSsh:null}),Ga=m("");function ba(t){Ga.value=t}const Ao=m(!1),Mo=m(!1);async function Ru(t){if(!Wt(t))return{cwd:t,cmd:"",ssh:null};await yh();const e=mh(t);return e?{cwd:"",cmd:hh(t,Ue.termShell),ssh:e}:(X("info",y("remoteNoTerminal")),{cwd:"",cmd:"",ssh:null})}async function xo(t=""){Nu(await Ru(t)),Fe.termOpen?Jl.value++:Fe.termOpen=!0}function Nu(t){Fe.termRequestCwd=t.cwd,Fe.termRequestCmd=t.cmd,Fe.termRequestSsh=t.ssh}const Jl=m(0);async function bh(t=""){Nu(await Ru(t)),Fe.termOpen?Jl.value++:Fe.termOpen=!0}async function pl(t){const{root:e}=await Vl(t,Fe.key);return e===Fe.root||(Fe.root=e,Fe.explorerPath=e,Fe.search.hits=[],Fe.search.q=""),e}function bs(t){return!Fe.root||_h(Fe.root,t)?!0:Ue.allowOutsideRoot}function _h(t,e){const n=u=>u.replace(/[\\/]+/g,"/").replace(/\/$/,""),l=n(t).toLowerCase(),c=n(e).toLowerCase();return c===l||c.startsWith(`${l}/`)}async function kh(){if(Fe.root)return;const{root:t}=await op(Fe.key);if(t){Fe.root=t,Fe.explorerPath=t;return}const e=window.__DSH_FILE_WORKBENCH__?.getSessionDir?.();if(e){await pl(e);return}const n=window.__DSH_FILE_WORKBENCH__?.pickDirectory;if(n){const l=await n();l&&await pl(l)}}async function sa(t){const e=window.__DSH_FILE_WORKBENCH__;if(e?.openInSidebar){if(Wt(t)){const n=await pp(t);e.openInSidebar(n.path);return}e.openInSidebar(t)}}let Pi=0;async function po(t,e){if(Fe.search.q=t,!t.trim()){Fe.search.hits=[],Fe.search.truncated=!1;return}const n=(e||Fe.root||"").replace(/[\\/]+$/,"");if(!n)return;const l=++Pi;Fe.search.running=!0;try{const{matches:c,truncated:u,byContent:v,snippets:d}=await ip(t,{key:Fe.key,path:n,limit:2e3,caseSensitive:Ao.value,regex:Mo.value});if(l!==Pi)return;const p=new Set(v??[]);Fe.search.hits=c.map(w=>({name:w.slice(w.lastIndexOf("/")+1),path:`${n}/${w}`,isDir:!1,broken:!1,byContent:p.has(w),snippet:d?.[w]})),Fe.search.truncated=u,Fe.search.scope=n}finally{l===Pi&&(Fe.search.running=!1)}}const le=gt({homeItems:[],listing:null,loading:!1,loadErr:"",view:"files",recycleItems:[],recycleLoading:!1,recycleErr:"",drives:[],drivesLoading:!1,drivesErr:""});async function Pu(){le.loadErr="";try{le.homeItems=(await Kc(Fe.key)).items}catch(t){le.loadErr=t.message}}const It=gt({history:[],idx:-1}),zo="thispc",ec="回收站";function ri(t){const e=t.trim();return e.startsWith("ssh://")?!0:/^[A-Za-z]:[\\/]/.test(e)||/^[\\/]{1,2}[^\\/]/.test(e)||/^[\\/]$/.test(e)}const xh=B(()=>It.idx>0),Ch=B(()=>It.idx<It.history.length-1),$h=B(()=>le.view==="files");function Au(t,e){if(!e)return;const n=t===zo?t:t.replace(/[\\/]+$/,""),l=It.history[It.idx]===zo?zo:It.history[It.idx]?.replace(/[\\/]+$/,"")??"";n!==l&&(It.history.length=It.idx+1,It.history.push(n),It.idx=It.history.length-1)}async function Vt(t,e=!0){if(ri(t)){le.view="files",Au(t,e),le.loadErr="",le.loading=!0;try{le.listing=await wp(t,Fe.key)}catch(n){le.loadErr=n.message}finally{le.loading=!1}}}async function Ql(){le.drivesErr="",le.drivesLoading=!0;try{le.drives=(await Xc()).drives??[]}catch(t){le.drivesErr=t.message}finally{le.drivesLoading=!1}}async function Mu(t=!0){Au(zo,t),le.view="computer",le.loadErr="",le.listing=null,await Ql()}async function Ou(t,e=!0){t===zo?await Mu(e):await Vt(t,e)}function Lu(){It.idx>0&&(It.idx-=1,Ou(It.history[It.idx],!1))}function Bu(){It.idx<It.history.length-1&&(It.idx+=1,Ou(It.history[It.idx],!1))}async function Iu(){const t=le.homeItems,e=t.find(n=>n.type==="home")?.path??t.find(n=>n.type==="workspace")?.path??t.find(n=>n.type==="drive")?.path;e&&await Vt(e)}async function vl(){le.view==="files"&&le.listing&&(le.listing.parent?await Vt(le.listing.parent):await Iu())}async function ju(){const t=window.__DSH_FILE_WORKBENCH__?.getSessionDir?.();if(!t)return!1;const e=Fe.root;try{await pl(t)}catch{return!1}return Fe.root!==e&&await Pu(),await Vt(t),!0}function Ft(){return xs("mycomputer"),xs("drives"),le.view==="computer"?Ql():le.view==="recycle"?_s():le.listing?Vt(le.listing.path,!1):Promise.resolve()}function Sh(){return(le.recycleItems??[]).map(t=>{const e=Date.parse(t.dateDeleted);return{name:t.name,path:t.fullPath,isDir:t.isDir,isSymlink:!1,broken:!1,hidden:!1,size:t.size||0,mtime:Number.isNaN(e)?void 0:e,recycleFullPath:t.fullPath,originalPath:t.originalPath,dateDeleted:t.dateDeleted}})}async function Vu(){le.recycleErr="",le.recycleLoading=!0,le.loading=!0,le.loadErr="";try{const t=(await vp()).items;le.recycleItems=Array.isArray(t)?t:[],le.listing={path:ec,name:ec,entries:Sh(),truncated:!1}}catch(t){le.recycleErr=t.message,le.loadErr=t.message,le.listing=null}finally{le.recycleLoading=!1,le.loading=!1}}async function tc(){le.view="recycle",await Vu()}function _s(){return Vu()}async function Eh(){(window.__DSH_FILE_WORKBENCH__?.getSessionDir?.()??null)&&await Ft()}const hl=B(()=>le.listing?.path??"");let nc=!1;function Th(){return nc?!1:(nc=!0,!0)}const zu="vscode";function ci(){return typeof window<"u"?window.__DSH_SIDEBAR_RIGHT__:void 0}function Uu(t,e){ci()?.openTab(t,e)}function Zl(t){return ci()?.newEditorTab(t)??!1}function Dh(){const t=ci();if(!t)return!1;const e=t.editorTabLimit();return e>0&&t.editorTabCount()>=e}function Fh(t){ci()?.float(t)}let Co=null;function Rh(){const t=Co;return Co=null,t}function Nh(){Co=null}let ml=null;function sc(){const t=ml;return ml=null,t}function er(t,e={}){const n=t?.trim();if(!n)return;if(n.startsWith("ssh://")){Ph(n,e.isDir);return}Co=n;const l=Dh();if(!Zl({projectDir:n})){Uu(zu,{params:{projectDir:n}});return}l&&X("info",y("vsReplacedOldest"))}async function Ph(t,e){const n=zs(Yl(t));let l=e;l===void 0&&t!==n&&(l=(await Zi(t))?.isDir??!1);const c=t===n||l===!0;Co=c?t:n,ml=c?null:t;const u=Co;Zl({projectDir:u})||Uu(zu,{params:{projectDir:u}})}const Nt=gt({list:[],history:[],archives:{}});let Ah=1,oc=!1;const Hu=gt({value:!1});function Mh(t){Hu.value=t}function tr(t){const e=new Date(t),n=l=>String(l).padStart(2,"0");return`${e.getFullYear()}-${n(e.getMonth()+1)}-${n(e.getDate())}`}function nr(){return tr(Date.now())}function _a(t){return t.doneAt??t.startedAt}function Wu(t){let e=!0;for(let n=1;n<t.length;n++)if(_a(t[n-1])<_a(t[n])){e=!1;break}return e?!1:(t.sort((n,l)=>_a(l)-_a(n)),!0)}function Gu(t){if(!t.length)return;const e=nr(),n=Nt.archives[e]??(Nt.archives[e]=[]);n.push(...t),Wu(n),zl(Nt.archives)}async function Oh(){if(!oc){oc=!0;try{const t=await Hp(),e=await Gp(),n=nr(),l=[];let c=!1;for(const v of t){const d=tr(v.doneAt??v.startedAt);d===n?l.push(v):((e[d]??=[]).push(v),c=!0)}let u=!1;for(const v of Object.keys(e))Wu(e[v])&&(u=!0);Nt.history=l,Nt.archives=e,(c||u)&&(ui(),zl(e))}catch{Nt.history=[],Nt.archives={}}}}function ui(){Wp(Nt.history)}function Lh(t){const e=tr(t.doneAt??t.startedAt);e===nr()?(Nt.history.unshift(t),Nt.history.length>200&&(Nt.history.length=200),ui()):((Nt.archives[e]??(Nt.archives[e]=[])).unshift(t),zl(Nt.archives))}function sn(t,e,n,l){const c=Ah++,u=gt({id:c,label:t,detail:e,status:"running",startedAt:Date.now(),logs:[{time:Date.now(),status:"running",msg:t,file:e,fileType:n,fileSize:l}]});Nt.list.unshift(u),Nt.list.length>80&&(Nt.list.length=80);const v=(w,b)=>{u.status=w,u.doneAt=Date.now(),u.msg=b,u.logs.push({time:u.doneAt,status:w,msg:b??"",file:e}),Lh({label:u.label,detail:e,status:w,msg:b,startedAt:u.startedAt,doneAt:u.doneAt,logs:u.logs.map($=>({...$}))})};return{step:(w,b,$,L,M)=>{u.status==="running"&&u.logs.push({time:Date.now(),status:"running",msg:w,file:b,detail:$,fileType:L,fileSize:M})},updateLabel:w=>{u.label=w},done:w=>v("done",w),fail:w=>v("error",w)}}async function qu(){Gu(Nt.history),Nt.history=[],Nt.list=Nt.list.filter(t=>t.status==="running"),ui()}async function Ku(){Gu(Nt.history),Nt.history=[],Nt.list=[],ui()}const Kn={state:Nt,startTask:sn,initTaskLogs:Oh,clearFinished:qu,clearAll:Ku,setOpen:Mh,open:Hu},{t:no}=Bt();function Bh(t){return new Promise(e=>setTimeout(e,t))}async function Xu(){if((le.recycleItems?.length??0)===0||!await Mt({title:no("recycleEmpty"),message:no("recycleEmptyConfirm")}))return;const e=sn(no("recycleEmptying"),"");try{await yp();let n=le.recycleItems?.length??0;for(let l=0;l<120;l+=1){await Bh(1e3);try{n=(await hp()).count}catch{}if(e.step(no("recycleEmptyProgress",{count:n})),n<=0)break}e.updateLabel(no("recycleEmptyDone")),e.done(no("recycleEmptyDone")),await _s()}catch(n){e.fail(n.message),X("error",n.message)}}function gl(){return Ue.theme==="dark"?!0:Ue.theme==="light"?!1:typeof document>"u"?!0:document.documentElement.style.colorScheme!==""?document.body.hasAttribute("data-ds-dark-theme"):typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const Yu=[["--dsh-bg","--dsw-alias-bg-base"],["--dsh-bg2","--dsw-alias-bg-layer-1"],["--dsh-border","--dsw-alias-border-l1"],["--dsh-fg","--dsw-alias-label-primary"],["--dsh-fg-weak","--dsw-alias-label-secondary"],["--dsh-hover","--dsw-alias-interactive-bg-hover"],["--dsh-accent","--dsw-alias-state-success-primary"]];function Ih(t){if(typeof document>"u")return;const e=t??document.body??document.documentElement,n=getComputedStyle(e),l=[document.documentElement,t].filter(c=>!!c);for(const[c,u]of Yu){const v=n.getPropertyValue(u).trim();if(v)for(const d of l)d.style.setProperty(c,v)}}function jh(t){if(typeof document>"u")return;const e=[document.documentElement,t].filter(n=>!!n);for(const[n]of Yu)for(const l of e)l.style.removeProperty(n)}function Vh(){if(Ue.theme==="dark")return"dark";if(Ue.theme==="light")return"light";if(typeof document>"u")return"dark";const e=document.querySelector(".fw-root[data-theme]")?.getAttribute("data-theme");return e==="light"||e==="dark"?e:gl()?"dark":"light"}function sr(t){const e=m(gl()?"dark":"light");function n(){const v=gl();if(e.value=v?"dark":"light",t.value&&t.value.setAttribute("data-theme",e.value),typeof document<"u"){const d=document.documentElement;d.setAttribute("data-theme",e.value);const p=d.style.colorScheme!=="";Ue.theme==="auto"&&p?Ih(t.value):jh(t.value),d.classList.toggle("dark",v),l(d),t.value&&l(t.value)}}function l(v){Ue.accentColor?v.style.setProperty("--dsh-accent",Ue.accentColor):v.style.removeProperty("--dsh-accent")}n();let c;typeof document<"u"&&typeof MutationObserver<"u"&&(c=new MutationObserver(n),c.observe(document.body,{attributes:!0,attributeFilter:["data-ds-dark-theme"]}));const u=typeof matchMedia<"u"?matchMedia("(prefers-color-scheme: dark)"):void 0;return u?.addEventListener("change",n),Qe(()=>[Ue.theme,Ue.accentColor],n,{deep:!1}),Ll(()=>{c?.disconnect(),u?.removeEventListener("change",n)}),e}const zh=["data-theme"],Uh={key:0,class:"fw-cm-header"},Hh={key:0,class:"fw-cm-sep"},Wh=["onMouseenter","onClick"],Gh={class:"fw-cm-ico"},qh={key:1},Kh={class:"fw-cm-label"},Xh={key:0,class:"fw-cm-hint"},Yh={class:"fw-cm-check"},Jh={key:1,class:"fw-cm-arrow"},Qh=["title","onClick"],Zh={key:1,class:"fw-cm-footer"},em={key:0,class:"fw-cm-sep"},tm=["onClick"],nm={class:"fw-cm-ico"},sm={key:1},om={class:"fw-cm-label"},am={key:0,class:"fw-cm-sep"},im=["onClick"],lm={class:"fw-cm-ico"},rm={key:1},cm={class:"fw-cm-label"},um={class:"fw-cm-check"},dm=ht({__name:"ContextMenu",props:{items:{},x:{},y:{},maxHeight:{},footerItems:{},placement:{}},emits:["close"],setup(t,{emit:e}){const n=t,l=e,c=m(!1),u=m(null),v=m(null),d=m({x:n.x,y:n.y}),p=m(-1),w=m(!1),b=m(null),$=m({x:0,y:0}),L=m("dark");function M(){return L.value=Vh(),L.value}function A(ve){return!!ve.separator}Qe(()=>[n.x,n.y],([ve,ne])=>{d.value={x:ve,y:ne},p.value=-1,b.value=null,c.value=!0,M(),requestAnimationFrame(I)}),Qe(()=>n.items,()=>{c.value&&requestAnimationFrame(I)});function I(){const ve=u.value;if(!ve)return;const ne=window.innerWidth,ie=window.innerHeight,Se=ve.getBoundingClientRect();let Ve=d.value.x,we=d.value.y;Ve+Se.width>ne-4&&(Ve=Math.max(4,ne-Se.width-4)),we+Se.height>ie-4&&(we=Math.max(4,ie-Se.height-4)),Se.top<4&&(we=Math.max(4,we+(4-Se.top))),d.value={x:Ve,y:we}}function U(ve,ne){p.value=ve;const ie=u.value,Se=n.items[ve],Ve=ne?.currentTarget??ie?.querySelectorAll(".fw-cm-item")[ve]??null;w.value=!!ie&&d.value.x+ie.getBoundingClientRect().width+180>window.innerWidth,Se?.children?.length?(b.value=Se,C(Ve)):b.value=null}function C(ve){const ne=ve??null;if(!ne)return;const ie=ne.getBoundingClientRect();let Ve=w.value?ie.left-220:ie.right-2;const we=Math.max(4,ie.top-4);$.value={x:Ve,y:we},requestAnimationFrame(()=>{const Ne=v.value;if(!Ne)return;const W=Ne.getBoundingClientRect();let J=Ve,z=we;J+W.width>window.innerWidth-4&&(J=Math.max(4,window.innerWidth-W.width-4)),z+W.height>window.innerHeight-4&&(z=Math.max(4,window.innerHeight-W.height-4)),$.value={x:J,y:z}})}function Z(ve){ve.disabled||ve.children?.length||(ve.onClick?.(),j())}function G(ve){ve.disabled||(ve.onClick?.(),j())}function F(ve){ve.trailing?.disabled||ve.trailing?.onClick?.()}function de(ve){ve.disabled||(ve.onClick?.(),j())}function j(){c.value=!1,p.value=-1,b.value=null,l("close")}function he(){j()}function Ee(ve){ve.key==="Escape"&&j()}return ln(()=>{c.value=!0,M(),requestAnimationFrame(I),window.addEventListener("keydown",Ee)}),Pt(()=>{window.removeEventListener("keydown",Ee)}),(ve,ne)=>(i(),Xe(Oc,{to:"body"},[c.value?(i(),r("div",{key:0,class:"fw-cm-backdrop",onMousedown:he,onContextmenu:_e(he,["prevent"])},[o("div",{ref_key:"menuEl",ref:u,class:te(["fw-cm",{"fw-cm-up":n.placement==="top"}]),"data-theme":L.value,style:_t({left:d.value.x+"px",top:d.value.y+"px"}),onMousedown:ne[2]||(ne[2]=_e(()=>{},["stop"])),onContextmenu:ne[3]||(ne[3]=_e(()=>{},["prevent"]))},[ve.$slots.header?(i(),r("div",Uh,[ff(ve.$slots,"header",{},void 0,!0)])):P("",!0),o("div",{class:"fw-cm-scroll",style:_t(n.maxHeight?{maxHeight:n.maxHeight}:void 0)},[(i(!0),r(ae,null,Ae(t.items,(ie,Se)=>(i(),r(ae,{key:Se},[A(ie)?(i(),r("div",Hh)):(i(),r("div",{key:1,class:te(["fw-cm-item",{disabled:ie.disabled,checked:ie.checked,hasChild:!!ie.children?.length}]),onMouseenter:Ve=>U(Se,Ve),onClick:Ve=>Z(ie)},[o("span",Gh,[s(Oo)(ie.icon??"")?(i(),Xe(oe,{key:0,name:ie.icon??"",size:14},null,8,["name"])):(i(),r("span",qh,a(ie.icon??""),1))]),o("span",Kh,a(ie.label),1),ie.hint?(i(),r("span",Xh,a(ie.hint),1)):P("",!0),o("span",Yh,a(ie.checked?"✓":""),1),ie.children?.length?(i(),r("span",Jh,[h(oe,{name:"chevronRight",size:10})])):P("",!0),ie.trailing?(i(),r("span",{key:2,class:te(["fw-cm-trailing",{disabled:ie.trailing.disabled}]),title:ie.trailing.title,onClick:_e(Ve=>F(ie),["stop"]),onMousedown:ne[0]||(ne[0]=_e(()=>{},["stop"])),onMouseenter:ne[1]||(ne[1]=_e(()=>{},["stop"]))},[h(oe,{name:ie.trailing.icon,size:12},null,8,["name"])],42,Qh)):P("",!0)],42,Wh))],64))),128))],4),t.footerItems?.length?(i(),r("div",Zh,[(i(!0),r(ae,null,Ae(t.footerItems,(ie,Se)=>(i(),r(ae,{key:"f"+Se},[A(ie)?(i(),r("div",em)):(i(),r("div",{key:1,class:te(["fw-cm-item",{disabled:ie.disabled}]),onClick:Ve=>de(ie)},[o("span",nm,[s(Oo)(ie.icon??"")?(i(),Xe(oe,{key:0,name:ie.icon??"",size:14},null,8,["name"])):(i(),r("span",sm,a(ie.icon??""),1))]),o("span",om,a(ie.label),1)],10,tm))],64))),128))])):P("",!0),b.value?(i(),r("div",{key:2,ref_key:"subEl",ref:v,class:te(["fw-cm fw-cm-sub",{"fw-cm-sub-left":w.value}]),style:_t({left:$.value.x+"px",top:$.value.y+"px"})},[(i(!0),r(ae,null,Ae(b.value.children,(ie,Se)=>(i(),r(ae,{key:Se},[A(ie)?(i(),r("div",am)):(i(),r("div",{key:1,class:te(["fw-cm-item",{disabled:ie.disabled,checked:ie.checked}]),onClick:Ve=>G(ie)},[o("span",lm,[s(Oo)(ie.icon??"")?(i(),Xe(oe,{key:0,name:ie.icon??"",size:14},null,8,["name"])):(i(),r("span",rm,a(ie.icon??""),1))]),o("span",cm,a(ie.label),1),o("span",um,a(ie.checked?"✓":""),1)],10,im))],64))),128))],6)):P("",!0)],46,zh)],32)):P("",!0)]))}}),Qt=xt(dm,[["__scopeId","data-v-00e617b4"]]);function pn(){const t=m(!1),e=m(0),n=m(0),l=m([]);function c(d,p=[]){u(d.clientX,d.clientY,p)}function u(d,p,w=[]){l.value=w,e.value=d,n.value=p,t.value=!0}function v(){t.value=!1}return{cmOpen:t,cmX:e,cmY:n,cmItems:l,openMenu:c,openMenuAt:u,closeMenu:v}}const fm={class:"fw-clone-head"},pm={class:"fw-clone-badge"},vm={class:"fw-clone-headtext"},hm={class:"fw-clone-headtitle"},mm={class:"fw-clone-headsub"},gm={class:"fw-ssh-dlg-body"},ym={class:"fw-ssh-field"},wm={class:"fw-ssh-lb"},bm={class:"fw-ssh-field"},_m={class:"fw-ssh-lb"},km={class:"fw-ssh-addr"},xm={class:"fw-ssh-field"},Cm={class:"fw-ssh-lb"},$m={class:"fw-ssh-addr"},Sm={key:0,class:"fw-ssh-err"},Em=ht({__name:"SshHostDialog",setup(t){const{t:e}=Bt(),n=B({get:()=>_n.open,set:U=>{U||wa()}}),l=B(()=>_n.editingId!==null),c=B(()=>an.value.find(U=>U.id===_n.editingId)??null),u=gt({name:"",user:"",host:"",authType:"password",password:"",privateKeyPath:""}),v=m("22"),d=B(()=>Math.trunc(Number(v.value))||22),p=m(!1),w=m(""),b=B(()=>{const U=u.user.trim()||"user",C=u.host.trim()||"host";return`${U}@${C}`});Qe(()=>_n.open,U=>{if(U)if(w.value="",p.value=!1,l.value&&c.value){const C=c.value;u.name=C.name,u.user=C.user,u.host=C.host,u.authType=C.authType,u.password="",u.privateKeyPath=C.privateKeyPath??"",v.value=String(C.port)}else u.name="",u.user="",u.host="",u.authType="password",u.password="",u.privateKeyPath="",v.value="22"},{immediate:!0});function $(){wa()}function L(){wa()}async function M(U){p.value=!0,w.value="";try{await U()}catch(C){w.value=C instanceof Error?C.message:String(C)}finally{p.value=!1}}async function A(){if(!u.host.trim()||!u.user.trim()){ao(e("sshRequired"));return}if(l.value&&_n.editingId){const U=c.value;if(u.authType==="password"?!u.password.trim():!u.privateKeyPath.trim()||u.privateKeyPath.trim()===(U?.privateKeyPath??"")){const Z=_n.editingId??void 0;await M(async()=>{const G=await Yi({id:Z});G.ok?rs(`${e("sshTestOk")}${G.banner?` (${G.banner})`:""}`):fs(`${e("sshTestFail")}: ${G.error??""}`)});return}}await M(async()=>{const U=await Yi({host:u.host.trim(),port:d.value,user:u.user.trim(),auth:u.authType==="password"?{type:"password",password:u.password}:{type:"key",privateKeyPath:u.privateKeyPath.trim()}});U.ok?rs(`${e("sshTestOk")}${U.banner?` (${U.banner})`:""}`):fs(`${e("sshTestFail")}: ${U.error??""}`)})}async function I(){if(!u.host.trim()||!u.user.trim()){ao(e("sshRequired"));return}await M(async()=>{if(l.value&&_n.editingId){const U=await up({id:_n.editingId,name:u.name.trim()||void 0,host:u.host.trim(),port:d.value,user:u.user.trim(),auth:u.authType==="password"?{type:"password",password:u.password||void 0}:{type:"key",privateKeyPath:u.privateKeyPath.trim()}});rs(e("sshUpdateSuccess")),await Hs(),await Ha(U.host.id)}else{const U=await cp({name:u.name.trim()||void 0,host:u.host.trim(),port:d.value,user:u.user.trim(),auth:u.authType==="password"?{type:"password",password:u.password}:{type:"key",privateKeyPath:u.privateKeyPath.trim()}});rs(e("sshAddSuccess")),await Hs(),await ul(),await Ha(U.host.id)}wa()})}return(U,C)=>{const Z=Ss,G=ni,F=ti,de=An,j=rn;return i(),Xe(j,{modelValue:n.value,"onUpdate:modelValue":C[7]||(C[7]=he=>n.value=he),class:"fw-ssh-dlg",width:"420px","close-on-click-modal":!0,"append-to-body":"",onClosed:$},{header:se(()=>[o("div",fm,[o("span",pm,[h(oe,{name:"hardDrive",size:20})]),o("div",vm,[o("div",hm,a(l.value?s(e)("sshEditTitle"):s(e)("sshNewHost")),1),o("div",mm,a(s(e)("sshHostCaption")),1)])])]),footer:se(()=>[h(de,{size:"small",loading:p.value,onClick:A},{default:se(()=>[ue(a(s(e)("sshTestConn")),1)]),_:1},8,["loading"]),h(de,{size:"small",onClick:L},{default:se(()=>[ue(a(s(e)("sshCancel")),1)]),_:1}),h(de,{size:"small",type:"primary",loading:p.value,onClick:I},{default:se(()=>[ue(a(l.value?s(e)("sshSaveEdit"):s(e)("sshSaveAdd")),1)]),_:1},8,["loading"])]),default:se(()=>[o("div",gm,[o("label",ym,[o("span",wm,a(s(e)("sshName")),1),h(Z,{modelValue:u.name,"onUpdate:modelValue":C[0]||(C[0]=he=>u.name=he),size:"small",placeholder:b.value},null,8,["modelValue","placeholder"])]),o("label",bm,[o("span",_m,a(s(e)("sshAddr")),1),o("span",km,[h(Z,{modelValue:u.user,"onUpdate:modelValue":C[1]||(C[1]=he=>u.user=he),size:"small",placeholder:s(e)("sshUser"),class:"fw-ssh-user"},null,8,["modelValue","placeholder"]),C[8]||(C[8]=o("span",{class:"fw-ssh-at"},"@",-1)),h(Z,{modelValue:u.host,"onUpdate:modelValue":C[2]||(C[2]=he=>u.host=he),size:"small",placeholder:s(e)("sshHostAddr"),class:"fw-ssh-host"},null,8,["modelValue","placeholder"]),C[9]||(C[9]=o("span",{class:"fw-ssh-at"},":",-1)),h(Z,{modelValue:v.value,"onUpdate:modelValue":C[3]||(C[3]=he=>v.value=he),size:"small",placeholder:"22",class:"fw-ssh-port"},null,8,["modelValue"])])]),o("label",xm,[o("span",Cm,a(s(e)("sshAuth")),1),o("span",$m,[h(F,{modelValue:u.authType,"onUpdate:modelValue":C[4]||(C[4]=he=>u.authType=he),size:"small",class:"fw-ssh-auth"},{default:se(()=>[h(G,{value:"password",label:s(e)("sshAuthPassword")},null,8,["label"]),h(G,{value:"key",label:s(e)("sshAuthKey")},null,8,["label"])]),_:1},8,["modelValue"]),u.authType==="password"?(i(),Xe(Z,{key:0,modelValue:u.password,"onUpdate:modelValue":C[5]||(C[5]=he=>u.password=he),size:"small",type:"password","show-password":"",placeholder:l.value&&c.value?.hasSecret?s(e)("sshKeepSecret"):s(e)("sshPassword"),class:"fw-ssh-secret"},null,8,["modelValue","placeholder"])):(i(),Xe(Z,{key:1,modelValue:u.privateKeyPath,"onUpdate:modelValue":C[6]||(C[6]=he=>u.privateKeyPath=he),size:"small",placeholder:s(e)("sshKeyPath"),class:"fw-ssh-secret"},null,8,["modelValue","placeholder"]))])]),w.value?(i(),r("div",Sm,a(w.value),1)):P("",!0)])]),_:1},8,["modelValue"])}}}),Tm=xt(Em,[["__scopeId","data-v-615d3584"]]);function Ju(t,e){const n=(t??"").replace(":","").trim().charAt(0).toUpperCase();return n?e?`${e} (${n}:)`:y("driveLabel",{drive:n}):e||"/"}function js(t){return Ju(t.letter,t.label)}function Qu(t){return t.type!=="drive"?t.name:Ju(t.path?.charAt(0)??"",t.label)}const qa=5;function Zu(t){if(typeof t=="string")return t;if(!t)return"";const e=typeof document<"u"?document.documentElement.lang||navigator.language:"en",n=e.toLowerCase();return t[e]??t[n]??(n.startsWith("zh")?t.zh??t.en:t.en??t.zh)??Object.values(t)[0]??""}const qo=m([]);function or(t){di(t.id),qo.value=[...qo.value,t].sort((e,n)=>(e.order??0)-(n.order??0))}function di(t){qo.value=qo.value.filter(e=>e.id!==t)}function ed(){return qo.value}const Ko=m([]);function td(t){ar(t.id),Ko.value=[...Ko.value,t].sort((e,n)=>(e.order??0)-(n.order??0))}function ar(t){Ko.value=Ko.value.filter(e=>e.id!==t)}function Dm(){return Ko.value}function Ka(t){if(!t)return;t.style.overflowY="auto";const e=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT);for(let n=e.firstChild();n;n=e.nextSibling()){const l=n;if(l.scrollHeight<=l.clientHeight+1)continue;const c=getComputedStyle(l).overflowY;(c==="hidden"||c==="clip")&&(l.style.overflowY="auto")}}const oa=new Map;function nd(t,e){oa.set(t,e)}function ir(t){return oa.delete(t)}function sd(t){return oa.has(t)}function lr(){return[...oa.keys()]}function fi(t,...e){const n=oa.get(t);if(n)return n(...e)}const Xo=m([]);function od(t){pi(t.id),Xo.value=[...Xo.value,t].sort((e,n)=>(e.order??0)-(n.order??0))}function pi(t){Xo.value=Xo.value.filter(e=>e.id!==t)}function vi(){return Xo.value}const Yo=m([]);function ad(t){hi(t.id),Yo.value=[...Yo.value,t].sort((e,n)=>(e.order??0)-(n.order??0))}function hi(t){Yo.value=Yo.value.filter(e=>e.id!==t)}function Jo(){return Yo.value}const Qo=m([]);function id(t){rr(t.id),Qo.value=[...Qo.value,t].sort((e,n)=>(e.order??0)-(n.order??0))}function rr(t){Qo.value=Qo.value.filter(e=>e.id!==t)}function Xa(){return Qo.value}const ld={start(t,e){return sn(t,e?.detail,e?.fileType,e?.fileSize)},clearFinished(){return qu()},clearAll(){return Ku()}};function Fm(){const e=window.__dshFileWorkbenchVSCode__?.__proxy;return e?(e.rebindVSCode({registerView:or,unregisterView:di,registerCommand:nd,executeCommand:fi,hasCommand:sd,listCommands:lr,unregisterCommand:ir,registerStatus:od,unregisterStatus:pi,listStatus:vi,registerMenu:ad,unregisterMenu:hi,listMenu:Jo}),e.rebindWorkbench({registerView:td,unregisterView:ar,registerStatus:id,unregisterStatus:rr,listStatus:Xa,backgroundTasks:ld}),queueMicrotask(()=>e.flush()),!0):!1}if(typeof window<"u"){const t=window,e={apiVersion:qa,activityBar:{register:or,unregister:di},commands:{register:nd,unregister:ir,execute:fi,list:lr,has:sd},statusbar:{register:od,unregister:pi,list:vi,registerMenu:ad,unregisterMenu:hi,listMenu:Jo}},n={apiVersion:qa,activityBar:{register:td,unregister:ar},statusbar:{register:id,unregister:rr,list:Xa},backgroundTasks:ld};Fm()||(t.__dshFileWorkbenchVSCode__=e,t.__dshFileWorkbenchWorkbench__=n)}const Rm=["title"],Nm={class:"fw-nav-ico"},Pm={class:"fw-nav-label"},Am=["title","onClick","onContextmenu"],Mm={class:"fw-nav-ico"},Om={class:"fw-nav-label"},Lm=["title"],Bm=["title"],Im={class:"fw-nav-ico"},jm={class:"fw-nav-label"},Vm=["title","onClick","onContextmenu"],zm={class:"fw-nav-ico"},Um={class:"fw-nav-label"},Hm=["title"],Wm=["aria-expanded"],Gm={class:"fw-sec-txt"},qm={class:"fw-sec-icon"},Km={key:0,class:"fw-sec-b"},Xm={key:0,class:"fw-nav-empty is-err"},Ym=["title","onClick","onContextmenu"],Jm={class:"fw-nav-ico"},Qm={class:"fw-nav-label"},Zm=["aria-expanded"],eg={class:"fw-sec-txt"},tg={key:0,class:"fw-sec-b"},ng=["title","onClick"],sg={class:"fw-nav-ico"},og={key:1},ag={class:"fw-nav-label"},ig=["aria-expanded"],lg={class:"fw-sec-txt"},rg={key:0,class:"fw-sec-b"},cg=["title","onClick","onContextmenu"],ug={class:"fw-nav-ico"},dg={class:"fw-nav-label"},fg=["title"],pg=["aria-expanded"],vg={class:"fw-sec-txt"},hg={key:0,class:"fw-sec-b"},mg={key:0,class:"fw-nav-empty"},gg=["title","onClick","onContextmenu"],yg={class:"fw-nav-ico"},wg={class:"fw-nav-label"},bg={key:2,class:"fw-error"},_g={class:"fw-error-ico"},kg=ht({__name:"NavPane",props:{externalViews:{default:()=>[]},externalCollapsed:{type:Boolean,default:!1},activeExternalId:{},externalActive:{type:Boolean}},emits:["toggle-external","select-external","select-local"],setup(t,{emit:e}){const{t:n}=Bt(),l=t,c=e,u=B(()=>l.externalViews??[]),v=B(()=>l.externalCollapsed===!0),d=B(()=>l.activeExternalId??""),p=B(()=>l.externalActive===!0);function w(H){return Zu(H.title)}const b=Un.navGroups;function $(H){b[H]=!b[H],Da()}ln(async()=>{await Hs(),fh(),await ul()});function L(H){if(ne.value||le.view!=="files")return!1;const N=le.listing?.path??"";return N?ve(N).startsWith(ve(zs(H.id))):!1}function M(H){const N=Ua(H.id),Q=n(N==="online"?"sshStatusOnline":N==="offline"?"sshStatusOffline":N==="checking"?"sshStatusChecking":"sshStatusUnknown");return N==="offline"&&cl(H.id)?`${Q}：${cl(H.id)}`:Q}function A(H){c("select-local"),ne.value=null,Vt(zs(H.id)),Ha(H.id)}const I=m("");function U(H,N){ce(H,[{label:n("menuOpen"),icon:"arrowRight",onClick:()=>A(N)},{label:n("sshTest"),icon:"refresh",onClick:()=>void G(N)},{label:n("menuOpenTerminal"),icon:"terminal",onClick:()=>xo(zs(N.id))},{separator:!0},{label:n("sshEdit"),icon:"gear",onClick:()=>wh(N.id)},{label:I.value===N.id?n("sshDeleteConfirm"):n("sshDelete"),icon:"trash",onClick:()=>void F(N)},{separator:!0},{label:n("menuCopyPath"),icon:"link",onClick:()=>void Le(zs(N.id))}])}function C(H){ce(H,[{label:n("sshNewHost"),icon:"plus",onClick:()=>Fu()},{separator:!0},{label:b.ssh?n("navCollapse"):n("navExpand"),icon:b.ssh?"chevronDown":"chevronRight",onClick:()=>$("ssh")},{label:n("menuRefresh"),icon:"refresh",onClick:()=>void Z()}])}async function Z(){await Hs(),await ul()}async function G(H){const N=await Yi({id:H.id});N.ok?X("ok",`${n("sshTestOk")}${N.banner?` (${N.banner})`:""}`):X("error",`${n("sshTestFail")}: ${N.error??""}`),await Ha(H.id)}async function F(H){if(I.value!==H.id){I.value=H.id;return}I.value="",await dp(H.id),await Hs()}const de=B(()=>le.homeItems),j=["desktop","download"],he=B(()=>de.value.filter(H=>j.includes(H.type))),Ee=B(()=>de.value.find(H=>H.type==="home")??null),ve=H=>H.replace(/[\\/]+/g,"/").replace(/\/$/,"").toLowerCase(),ne=m(null);function ie(){if(ne.value||le.view!=="files")return null;const H=le.listing?.path??"";if(!H)return null;const N=ve(H);let Q=null,Te=-1;for(const O of de.value){const T=ve(O.path);!T||N!==T&&!N.startsWith(`${T}/`)||T.length>Te&&(Te=T.length,Q=O)}return Q}function Se(H){return ie()?.path===H.path}function Ve(H){if(ne.value||le.view!=="files")return!1;const N=le.listing?.path??"";return N?H.letter?N.toLowerCase().startsWith(`${H.letter.toLowerCase()}:`):ve(N)==="/":!1}function we(H){if(c("select-local"),ne.value=null,H.type==="recycle"){tc();return}Vt(H.path)}function Ne(){c("select-local"),ne.value=null,b.myComputer||(b.myComputer=!0,Da()),Mu()}function W(){b.myComputer=!b.myComputer,Da()}function J(H){c("select-local"),ne.value=null,Vt(H.path)}function z(){c("select-local"),ne.value=null,tc()}const ee=H=>H.replace(/[\\/]+$/,"").split(/[\\/]/).pop()||H;function ge(H){const N=Math.max(H.lastIndexOf("/"),H.lastIndexOf("\\"));return N<0?H:H.slice(0,N)}function je(H){return Wt(H)?Wa(H)||H:ge(H)}async function Ke(H){ne.value=H;try{const N=await La(H);Vt(N.isDir?H:je(H))}catch{Vt(je(H))}}const Ze=B(()=>Us.value.map(H=>({path:H,name:ee(H)})));async function ye(H){c("select-local"),ne.value=H;try{(await La(H)).isDir?Vt(H):(sa(H),Vt(ge(H)))}catch{Vt(H)}}function be(H){switch(H.type){case"drive":return Qu(H);case"home":return n("navHome");case"desktop":return n("desktopEntry");case"download":return n("downloadEntry");case"documents":return n("documentEntry");case"pictures":return n("pictureEntry");case"music":return n("musicEntry");case"videos":return n("videoEntry");case"gallery":return n("navGallery");case"workspace":return n("workspaceEntry");case"recycle":return n("recycleBin");default:return H.name}}function Ye(H){switch(H.type){case"drive":return"hardDrive";case"recycle":return"trash";case"workspace":return"folder";case"home":return"home";case"desktop":return"monitor";case"download":return"download";case"documents":return"fileText";case"pictures":return"image";case"music":return"music";case"videos":return"video";case"gallery":return"image";default:return"folder"}}const{cmOpen:st,cmX:pe,cmY:ke,cmItems:qe,openMenu:ce}=pn();function Ie(H,N,Q={}){const Te=ro(N),O=[Q.openParent?{label:n("menuOpen"),icon:"arrowRight",onClick:()=>void Ke(N)}:{label:n("menuOpen"),icon:"arrowRight",onClick:()=>void Vt(N)}];Q.openEditor!==!1&&O.push({label:n("menuOpenInEditor"),icon:"code",onClick:()=>er(N)}),O.push({separator:!0}),O.push({label:n(Te?"favoriteRemove":"favoriteAdd"),icon:"star",onClick:()=>{const T=za(N);X("ok",n(T?"favoriteAdded":"favoriteRemoved"))}}),O.push({label:n("menuCopyPath"),icon:"link",onClick:()=>void Le(N)}),Q.openTerminal!==!1&&O.push({label:n("menuOpenTerminal"),icon:"terminal",onClick:()=>xo(N)}),ce(H,O)}function rt(H,N){Ie(H,N.path)}function yt(H){ce(H,[{label:b.myComputer?n("navCollapse"):n("navExpand"),icon:b.myComputer?"chevronDown":"chevronRight",onClick:()=>$("myComputer")},{label:n("menuOpen"),icon:"arrowRight",onClick:Ne},{separator:!0},{label:n("menuRefresh"),icon:"refresh",onClick:()=>void Ft()}])}function ut(H,N){Ie(H,N.path)}function it(H){ce(H,[{label:n("menuOpen"),icon:"arrowRight",onClick:z},{label:n("menuRefresh"),icon:"refresh",onClick:()=>void Ft()},{separator:!0},{label:n("recycleEmpty"),icon:"trash",disabled:(le.recycleItems?.length??0)===0,onClick:()=>void Xu()}])}async function Le(H){try{await navigator.clipboard.writeText(H),X("ok",n("menuPathCopied"))}catch{X("error",n("menuPathCopyFail"))}}return(H,N)=>(i(),r("div",{class:te(["fw-nav",{"external-active":p.value}])},[Ee.value?(i(),r("button",{key:0,class:te(["fw-nav-item fw-nav-top fw-nav-leaf",{active:!p.value&&Se(Ee.value)}]),title:Ee.value.path,onClick:N[0]||(N[0]=Q=>we(Ee.value)),onContextmenu:N[1]||(N[1]=_e(Q=>rt(Q,Ee.value),["prevent","stop"]))},[o("span",Nm,[h(oe,{name:"home",size:14})]),o("span",Pm,a(be(Ee.value)),1)],42,Rm)):P("",!0),(i(!0),r(ae,null,Ae(he.value.filter(Q=>Q.type!=="download"),Q=>(i(),r("button",{key:Q.path,class:te(["fw-nav-item fw-nav-top fw-nav-leaf",{active:!p.value&&Se(Q)}]),title:Q.path,onClick:Te=>we(Q),onContextmenu:_e(Te=>rt(Te,Q),["prevent","stop"])},[o("span",Mm,[h(oe,{name:Ye(Q),size:14},null,8,["name"])]),o("span",Om,a(be(Q)),1),o("span",{class:"fw-nav-pin",title:s(n)("favoritePin")},[h(oe,{name:"pin",size:11})],8,Lm)],42,Am))),128)),o("button",{class:te(["fw-nav-item fw-nav-top",{active:!p.value&&s(le).view==="recycle"}]),title:s(n)("recycleBin"),onClick:z,onContextmenu:_e(it,["prevent","stop"])},[o("span",Im,[h(oe,{name:"trash",size:14})]),o("span",jm,a(s(n)("recycleBin")),1)],42,Bm),N[7]||(N[7]=o("div",{class:"fw-nav-div","aria-hidden":"true"},null,-1)),(i(!0),r(ae,null,Ae(he.value.filter(Q=>Q.type==="download"),Q=>(i(),r("button",{key:Q.path,class:te(["fw-nav-item fw-nav-top fw-nav-leaf",{active:!p.value&&Se(Q)}]),title:Q.path,onClick:Te=>we(Q),onContextmenu:_e(Te=>rt(Te,Q),["prevent","stop"])},[o("span",zm,[h(oe,{name:Ye(Q),size:14},null,8,["name"])]),o("span",Um,a(be(Q)),1),o("span",{class:"fw-nav-pin",title:s(n)("favoritePin")},[h(oe,{name:"pin",size:11})],8,Hm)],42,Vm))),128)),N[8]||(N[8]=o("div",{class:"fw-nav-div","aria-hidden":"true"},null,-1)),o("div",{class:te(["fw-nav-sec",{collapsed:!s(b).myComputer,active:!p.value&&s(le).view==="computer"}])},[o("button",{class:"fw-sec-h","aria-expanded":s(b).myComputer,onClick:W,onContextmenu:_e(yt,["prevent","stop"])},[o("span",{class:te(["fw-caret",{open:s(b).myComputer}])},[h(oe,{name:"chevronDown",size:11})],2),o("span",Gm,[o("span",qm,[h(oe,{name:"monitor",size:14})]),ue(a(s(n)("navThisPc")),1)])],40,Wm),s(b).myComputer?(i(),r("div",Km,[s(le).drivesErr?(i(),r("div",Xm,a(s(le).drivesErr),1)):P("",!0),(i(!0),r(ae,null,Ae(s(le).drives,Q=>(i(),r("button",{key:Q.path,class:te(["fw-nav-item fw-nav-drive",{active:!p.value&&Ve(Q)}]),title:Q.path,onClick:Te=>J(Q),onContextmenu:_e(Te=>ut(Te,Q),["prevent","stop"])},[o("span",Jm,[h(oe,{name:"hardDrive",size:13})]),o("span",Qm,a(Q.name),1)],42,Ym))),128))])):P("",!0)],2),u.value.length?(i(),r("div",{key:1,class:te(["fw-nav-sec fw-nav-external",{collapsed:v.value}])},[o("button",{class:"fw-sec-h","aria-expanded":!v.value,onClick:N[2]||(N[2]=Q=>c("toggle-external"))},[o("span",{class:te(["fw-caret",{open:!v.value}])},[h(oe,{name:"chevronDown",size:11})],2),o("span",eg,a(s(n)("externalInjection")),1)],8,Zm),v.value?P("",!0):(i(),r("div",tg,[(i(!0),r(ae,null,Ae(u.value,Q=>(i(),r("button",{key:Q.id,class:te(["fw-nav-item fw-nav-external-item",{active:d.value===Q.id}]),title:w(Q),onClick:Te=>c("select-external",Q.id)},[o("span",sg,[s(Oo)(Q.icon??"")?(i(),Xe(oe,{key:0,name:Q.icon??"",size:14},null,8,["name"])):(i(),r("span",og,a(w(Q).slice(0,1)),1))]),o("span",ag,[o("span",null,a(w(Q)),1)])],10,ng))),128))]))],2)):P("",!0),o("div",{class:te(["fw-nav-sec",{collapsed:!s(b).ssh}])},[o("button",{class:"fw-sec-h","aria-expanded":s(b).ssh,onClick:N[3]||(N[3]=Q=>$("ssh")),onContextmenu:_e(C,["prevent","stop"])},[o("span",{class:te(["fw-caret",{open:s(b).ssh}])},[h(oe,{name:"chevronDown",size:11})],2),o("span",lg,a(s(n)("sshNavGroup")),1)],40,ig),s(b).ssh?(i(),r("div",rg,[s(an).length===0?(i(),r("div",{key:0,class:"fw-nav-empty",onContextmenu:_e(C,["prevent","stop"])},a(s(n)("sshEmpty")),33)):P("",!0),(i(!0),r(ae,null,Ae(s(an),Q=>(i(),r("button",{key:Q.id,class:te(["fw-nav-item",{active:!p.value&&L(Q)}]),title:`${Q.user}@${Q.host}:${Q.port}`,onClick:Te=>A(Q),onContextmenu:_e(Te=>U(Te,Q),["prevent","stop"])},[o("span",ug,[h(oe,{name:"globe",size:13})]),o("span",dg,a(Q.name||`${Q.user}@${Q.host}`),1),o("span",{class:te(["fw-ssh-dot",`is-${s(Ua)(Q.id)}`]),title:M(Q)},null,10,fg)],42,cg))),128))])):P("",!0)],2),o("div",{class:te(["fw-nav-sec",{collapsed:!s(b).favorites}])},[o("button",{class:"fw-sec-h","aria-expanded":s(b).favorites,onClick:N[4]||(N[4]=Q=>$("favorites"))},[o("span",{class:te(["fw-caret",{open:s(b).favorites}])},[h(oe,{name:"chevronDown",size:11})],2),o("span",vg,a(s(n)("favorites")),1)],8,pg),s(b).favorites?(i(),r("div",hg,[Ze.value.length===0?(i(),r("div",mg,a(s(n)("emptyFavorites")),1)):P("",!0),(i(!0),r(ae,null,Ae(Ze.value,Q=>(i(),r("button",{key:Q.path,class:te(["fw-nav-item",{active:!p.value&&ne.value===Q.path}]),title:Q.path,onClick:Te=>ye(Q.path),onContextmenu:_e(Te=>Ie(Te,Q.path,{openEditor:!1,openTerminal:!1,openParent:!0}),["prevent","stop"])},[o("span",yg,[h(oe,{name:"star",size:13})]),o("span",wg,a(Q.name),1)],42,gg))),128))])):P("",!0)],2),s(le).loadErr?(i(),r("div",bg,[o("span",_g,[h(oe,{name:"warning",size:16})]),o("span",null,a(s(le).loadErr),1),o("button",{class:"fw-retry",onClick:N[5]||(N[5]=Q=>s(Ft)())},a(s(n)("retry")),1)])):P("",!0),s(st)?(i(),Xe(Qt,{key:3,items:s(qe),x:s(pe),y:s(ke),onClose:N[6]||(N[6]=Q=>st.value=!1)},null,8,["items","x","y"])):P("",!0),h(Tm)],2))}}),xg=xt(kg,[["__scopeId","data-v-f2446309"]]),Ya={start:0,end:0,padBefore:0,padAfter:0,total:0};function ac(t,e){return t<0?0:t>e?e:t}function Cg(t,e,n,l=8){const c=m({...Ya});function u(){const p=t.value,w=e.value;if(!p||w<=0||p.clientHeight<=0){c.value={...Ya};return}const b=Math.max(0,p.scrollTop),$=ac(Math.floor(b/n)-l,w),L=Math.ceil(p.clientHeight/n)+l*2,M=ac($+L,w);c.value={start:$,end:M,padBefore:$*n,padAfter:(w-M)*n,total:w*n}}function v(){u()}let d=null;return Qe(t,p=>{d&&(d.disconnect(),d=null),Dt(u),p&&(d=new ResizeObserver(()=>{u()}),d.observe(p))}),Qe(e,()=>{Dt(u)}),Ll(()=>{d?.disconnect(),d=null}),{range:c,onScroll:v,compute:u}}function $g(t,e,n=90,l=3){const c=[],u=m({...Ya}),v=new WeakMap;let d=null;function p(){return d||(d=new ResizeObserver(I=>{let U=!1;for(const C of I){const Z=v.get(C.target);if(Z===void 0)continue;const G=Math.max(1,Math.round(C.contentRect.height));c[Z]!==G&&(c[Z]=G,U=!0)}U&&b()})),d}function w(I){return c[I]??n}function b(){const I=t.value,U=e.value;if(!I||U<=0||I.clientHeight<=0){u.value={...Ya};return}c.length>U&&(c.length=U);const C=Math.max(0,I.scrollTop),Z=new Array(U+1);Z[0]=0;for(let ne=0;ne<U;ne++)Z[ne+1]=Z[ne]+w(ne);const G=Z[U];let F=0,de=U;const j=C-l*n;for(;F<de;){const ne=F+de>>1;Z[ne]<j?F=ne+1:de=ne}let he=Math.max(0,F-l),Ee=he;const ve=C+I.clientHeight+l*n;for(;Ee<U&&Z[Ee+1]<=ve;)Ee++;Ee=Math.min(U,Ee+l),u.value={start:he,end:Ee,padBefore:Z[he],padAfter:G-Z[Ee],total:G}}function $(){b()}let L=null;Qe(t,I=>{L&&(L.disconnect(),L=null),Dt(b),I&&(L=new ResizeObserver(()=>b()),L.observe(I))});function M(I){return U=>{const C=U;if(!C)return;const Z=p();c.length<I+1&&(c.length=I+1),v.set(C,I),Z.observe(C);const G=Math.max(1,Math.round(C.getBoundingClientRect().height));c[I]!==G&&(c[I]=G,Dt(b))}}function A(){c.length=0,Dt(b)}return Qe(e,()=>{Dt(b)}),Ll(()=>{L?.disconnect(),L=null,d?.disconnect(),d=null}),{range:u,onScroll:$,compute:b,measure:M,resetHeights:A}}const Sg={class:"fw-search"},Eg={class:"fw-search-head"},Tg={class:"fw-tree-head"},Dg={class:"fw-search-opts"},Fg=["title"],Rg=["title"],Ng={key:0,class:"fw-loading"},Pg={key:1,class:"fw-count"},Ag={class:"fw-count-row"},Mg={key:0,class:"fw-scopeline"},Og={key:2,class:"fw-empty"},Lg=["onClick","title"],Bg={class:"fw-ico"},Ig={class:"fw-namerow"},jg={class:"fw-hitname"},Vg={key:0,class:"fw-badge"},zg={class:"fw-hitpath"},Ug={key:0,class:"fw-hitsnippet"},Hg=ht({__name:"SearchPane",setup(t){const{t:e}=Bt(),n=m(null),l=B(()=>Fe.search.hits.length),c=$g(n,l,56),u=B(()=>Fe.search.hits.slice(c.range.value.start,c.range.value.end));Qe(()=>Fe.search.q,()=>{c.resetHeights(),n.value&&(n.value.scrollTop=0)});function v(){po("")}function d(){const I=Fe.search.q.trim();I&&po(I)}function p(){Ao.value=!Ao.value,d()}function w(){Mo.value=!Mo.value,d()}function b(I){sa(I)}function $(I){const U=(Fe.root||"").replace(/[\\/]+$/,"");return I.startsWith(U)?I.slice(U.length+1):I}const L=B(()=>Fe.search.hits.filter(I=>I.byContent)),M=m(!1);async function A(){const I=Fe.search.q.trim(),U=L.value.length;if(!U||!I)return;const C=await ds({title:e("searchReplaceTitle"),message:e("searchReplaceConfirm",{files:U,count:U}),placeholder:e("findReplacePlaceholder")});if(C!==null){M.value=!0;try{const Z=await qc(I,C,{key:Fe.key,scope:Fe.search.scope||void 0,caseSensitive:Ao.value,regex:Mo.value});X("ok",e("searchReplaceDone",{files:Z.files,count:Z.replacements})),po(I)}catch(Z){X("error",Z.message)}finally{M.value=!1}}}return(I,U)=>{const C=An;return i(),r("div",Sg,[o("div",Eg,[o("span",Tg,a(s(e)("searchTitle")),1),o("span",Dg,[o("button",{class:te(["fw-search-opt",{on:s(Ao)}]),title:s(e)("searchCase"),onClick:p},"Aa",10,Fg),o("button",{class:te(["fw-search-opt",{on:s(Mo)}]),title:s(e)("searchRegex"),onClick:w},".*",10,Rg)]),h(C,{size:"small",text:"",title:s(e)("clearSearch"),onClick:v},{default:se(()=>[...U[1]||(U[1]=[ue("✕",-1)])]),_:1},8,["title"])]),s(Fe).search.running?(i(),r("div",Ng,a(s(e)("searching")),1)):s(Fe).search.q?(i(),r("div",Pg,[o("div",Ag,[o("span",null,[ue(a(s(e)("resultsCount",{count:s(Fe).search.hits.length})),1),s(Fe).search.truncated?(i(),r(ae,{key:0},[ue(a(s(e)("resultsSuffixTruncated")),1)],64)):P("",!0)]),L.value.length?(i(),Xe(C,{key:0,size:"small",type:"primary",plain:"",disabled:M.value,onClick:A},{default:se(()=>[ue(a(M.value?s(e)("searchReplaceBusy"):s(e)("searchReplaceAll")),1)]),_:1},8,["disabled"])):P("",!0)]),s(Fe).search.scope?(i(),r("div",Mg,a(s(e)("searchScopeIn"))+" "+a($(s(Fe).search.scope)),1)):P("",!0)])):(i(),r("div",Og,a(s(e)("searchIdle")),1)),o("div",{ref_key:"resRef",ref:n,class:"fw-results",onScroll:U[0]||(U[0]=(...Z)=>s(c).onScroll&&s(c).onScroll(...Z))},[o("div",{style:_t({height:s(c).range.value.padBefore+"px"})},null,4),(i(!0),r(ae,null,Ae(u.value,(Z,G)=>(i(),r("div",{key:Z.path,ref_for:!0,ref:s(c).measure(s(c).range.value.start+G),class:"fw-hit",onClick:F=>b(Z.path),title:s(e)("hitTitle")},[o("span",Bg,[h(oe,{name:"file",size:13})]),o("span",Ig,[o("span",jg,a(Z.name),1),Z.byContent?(i(),r("span",Vg,a(s(e)("matchContent")),1)):P("",!0)]),o("span",zg,a($(Z.path)),1),Z.snippet?(i(),r("span",Ug,a(Z.snippet),1)):P("",!0)],8,Lg))),128)),o("div",{style:_t({height:s(c).range.value.padAfter+"px"})},null,4)],544)])}}}),Wg=xt(Hg,[["__scopeId","data-v-3880eff0"]]),Gg=m(""),aa=m({op:"",paths:[]});function ka(t){aa.value={op:"copy",paths:t}}function No(t){aa.value={op:"cut",paths:t}}function qg(){aa.value={op:"",paths:[]}}function yl(){return aa.value.paths.length>0}function Kg(){return aa.value}async function ic(t){try{return await navigator.clipboard.writeText(t),!0}catch{return!1}}const Rt=gt({visible:!1,canSwitchView:!1,total:0,selected:0,text:"",view:"details"});let rd=null;function Ja(t){rd=t}function Xg(t){rd?.(t)}function cd(){Rt.visible=!1,Rt.canSwitchView=!1,Rt.total=0,Rt.selected=0,Rt.text=""}const mi=gt({dirs:{}});async function ks(t){if(t)try{const e=await Rp(t);mi.dirs[t]={inRepo:e.inRepo,branch:e.branch??"",entries:e.entries}}catch{}}function ud(t){return mi.dirs[t]?.inRepo??!1}function dd(t,e){return mi.dirs[t]?.entries?.[e]??""}const Zo=gt({dirs:{}});async function so(t){if(t)try{const e=await ps(t);if(!e.inRepo||!e.svnAvailable){Zo.dirs[t]={inRepo:!1,entries:{}};return}const n=await Jt(t,["status","--depth","immediates"]),l={};if(n.code===0)for(const c of(n.stdout||"").split(/\r?\n/)){if(!c.trim())continue;const u=(c.slice(0,8)[0]??"").trim();let v=c.slice(8).trim();if(v=v.replace(/[\\/]+$/,""),!v||v==="."||v==="..")continue;const d=v.split(/[\\/]/).pop()??v,p=Jg(u);p&&(l[d]=p)}Zo.dirs[t]={inRepo:!0,entries:l}}catch{}}function Yg(t){return Zo.dirs[t]?.inRepo??!1}function fd(t,e){return Zo.dirs[t]?.entries?.[e]??""}function Jg(t){switch(t){case"A":return"added";case"M":return"modified";case"D":return"deleted";case"?":return"untracked";case"R":return"modified";case"!":return"deleted";case"C":return"modified";default:return""}}function Qg(t){return(t||"").split(/\r?\n/).filter(e=>/^\s?[ADUGCER]{1,3}\s+\S/.test(e)).length}function Zg(t){const e=[...(t||"").matchAll(/(?:revision|版本)\s*(\d+)/gi)];return e.length?e[e.length-1][1]:null}function e1(t){return t.slice(Math.max(t.lastIndexOf("/"),t.lastIndexOf("\\"))+1)}async function t1(t,e){try{if(!(await ps(t)).svnAvailable){X("error",y("svnNoCli"));return}const l=await Jt(t,e);l.code===0?X("ok",(l.stdout||y("svnDone")).split(`
`)[0].slice(0,200)):X("error",(l.stderr||y("svnFailed")).split(`
`)[0].slice(0,200))}catch(n){X("error",n.message)}}async function n1(t,e,n){try{if(!(await ps(t)).svnAvailable){X("error",y("svnNoCli"));return}const c=await Jt(t,["add","--",t]);c.code===0?X("ok",y("svnAdded")):X("error",(c.stderr||y("svnFailed")).split(`
`)[0].slice(0,200))}catch(l){X("error",l.message)}await n.afterMutate(e)}async function s1(t,e,n){try{if(!(await ps(t)).svnAvailable){X("error",y("svnNoCli"));return}const c=t.replace(/[\\/]$/,""),u=c.replace(/[\\/][^\\/]+$/,""),v=c.slice(u.length+1),p=((await Jt(u,["propget","svn:ignore",u])).stdout||"").split(/\r?\n/).map($=>$.trim()).filter(Boolean);if(p.includes(v)){X("ok",y("gitIgnored")),await n.afterMutate(e);return}const w=[...p,v].join(`
`),b=await Jt(u,["propset","svn:ignore",w,u]);b.code===0?X("ok",y("gitIgnored")):X("error",(b.stderr||y("svnFailed")).split(`
`)[0].slice(0,200))}catch(l){X("error",l.message)}await n.afterMutate(e)}async function o1(t,e,n){try{await Pp(t),X("ok",y("gitAdded"))}catch(l){X("error",l.message)}await n.afterMutate(e)}async function a1(t,e,n){const l=e1(t);if(await Mt({title:y("gitDiscardTitle"),message:y("gitDiscardMsg",{name:l})})){try{await Mp(t),X("ok",y("gitDiscarded"))}catch(u){X("error",u.message)}await n.afterMutate(e)}}async function i1(t,e,n){try{await Zc(t),X("ok",y("gitIgnored"))}catch(l){X("error",l.message)}await n.afterMutate(e)}async function l1(t,e){try{const n=await Np(t);e.showGitDiff(n.output??"")}catch(n){X("error",n.message)}}function wl(t,e,n){return ud(t)?[{separator:!0},{icon:"git",label:y("gitMenu"),children:[{label:y("gitPanel"),icon:"git",onClick:()=>n.openGitPanel()},{separator:!0},{label:y("gitAdd"),icon:"upload",onClick:()=>void o1(e,t,n)},{label:y("gitCommit"),icon:"check",onClick:()=>n.openCommit()},{label:y("gitDiff"),icon:"code",onClick:()=>void l1(e,n)},{label:y("gitDiscard"),icon:"undo",onClick:()=>void a1(e,t,n)},{label:y("gitIgnore"),icon:"eyeOff",onClick:()=>void i1(e,t,n)}]}]:[]}function bl(t,e,n){return Yg(t)?[{separator:!0},{icon:"svn",label:y("svnMenu"),children:[{label:y("svnPanel"),icon:"svn",onClick:()=>n.openSvnPanel()},{label:y("svnUpdate"),icon:"sync",onClick:()=>void t1(e,["update"])},{separator:!0},{label:y("svnAdd"),icon:"upload",onClick:()=>void n1(e,t,n)},{label:y("svnIgnore"),icon:"eyeOff",onClick:()=>void s1(e,t,n)}]}]:[]}const r1={key:0,class:"fw-quickcommit-empty"},c1={class:"fw-gitcommit-files-title fw-gitcommit-files-caption"},u1={class:"fw-gitcommit-files"},d1=["title"],f1={key:1,class:"fw-quickcommit-empty"},p1={key:2,class:"fw-gitcommit-error"},v1={class:"fw-gitconfig-field"},h1={class:"fw-gitconfig-field"},m1=ht({__name:"QuickCommit",props:{modelValue:{type:Boolean},dir:{}},emits:["update:modelValue","done"],setup(t,{emit:e}){const n=t,l=e,{t:c}=Bt(),u=m(null),v=m([]),d=m(""),p=m(""),w=gt({loading:!1,commit:!1,config:!1}),b=m(!1),$=m(""),L=m(""),M={"":"",untracked:"?",added:"A",modified:"M",deleted:"D"};function A(j){return M[j]}function I(){l("update:modelValue",!1)}async function U(){if(d.value="",p.value="",!n.dir){I();return}w.loading=!0;try{if(u.value=await Wo(n.dir),!u.value.inRepo){X("error",c("gitNotRepo")),I();return}if(await C(),!v.value.length){X("error",c("gitNoChanges")),I();return}}catch(j){X("error",j.message),I()}finally{w.loading=!1}}async function C(){u.value=await Wo(n.dir),v.value=u.value?.staged??[]}async function Z(){const j=d.value.trim();if(!(!j||!u.value)){w.commit=!0,p.value="";try{await Ap(u.value.repo,j),l("done"),X("ok",c("gitCommitted")),I()}catch(he){p.value=he.message}finally{w.commit=!1}}}const G=m(!1);Qe(p,j=>{G.value=/user\.(name|email)|Author identity/i.test(j??"")});async function F(){try{const j=await eu();$.value=j.name??"",L.value=j.email??""}catch{}b.value=!0}async function de(){w.config=!0;try{await tu($.value,L.value),p.value="",b.value=!1,X("ok",c("gitConfigSaved"))}catch(j){X("error",j.message)}finally{w.config=!1}}return(j,he)=>{const Ee=Ss,ve=An,ne=rn;return i(),Xe(ne,{"model-value":t.modelValue,title:s(c)("gitCommitTitle"),width:"520px",class:"fw-gitcommit-dialog","close-on-click-modal":!1,"onUpdate:modelValue":I,onOpen:U},{footer:se(()=>[h(ve,{onClick:I},{default:se(()=>[ue(a(s(c)("cancel")),1)]),_:1}),h(ve,{onClick:F},{default:se(()=>[ue(a(s(c)("gitConfig")),1)]),_:1}),h(ve,{type:"primary",loading:w.commit,disabled:!d.value.trim(),onClick:Z},{default:se(()=>[ue(a(s(c)("gitCommitConfirm")),1)]),_:1},8,["loading","disabled"])]),default:se(()=>[w.loading?(i(),r("div",r1,a(s(c)("gitLoading")),1)):(i(),r(ae,{key:1},[h(Ee,{modelValue:d.value,"onUpdate:modelValue":he[0]||(he[0]=ie=>d.value=ie),placeholder:s(c)("gitCommitPlaceholder"),type:"textarea",rows:3,class:"fw-gitcommit-msg",onKeydown:bt(_e(Z,["ctrl"]),["enter"])},null,8,["modelValue","placeholder","onKeydown"]),v.value.length?(i(),r(ae,{key:0},[o("div",c1,a(s(c)("gitCommitFiles",{n:v.value.length})),1),o("div",u1,[(i(!0),r(ae,null,Ae(v.value,ie=>(i(),r("div",{key:ie.path,class:"fw-gitcommit-file"},[o("span",{class:te(["fw-gitpanel-st","st-"+ie.status])},a(A(ie.status)),3),o("span",{class:"fw-gitpanel-path",title:ie.path},a(ie.path),9,d1)]))),128))])],64)):(i(),r("div",f1,a(s(c)("gitNoChanges")),1)),p.value?(i(),r("div",p1,[ue(a(p.value)+" ",1),G.value?(i(),Xe(ve,{key:0,text:"",size:"small",onClick:F},{default:se(()=>[ue(a(s(c)("gitConfigTitle")),1)]),_:1})):P("",!0)])):P("",!0),h(ne,{modelValue:b.value,"onUpdate:modelValue":he[4]||(he[4]=ie=>b.value=ie),title:s(c)("gitConfigTitle"),width:"420px",class:"fw-gitconfig-dialog","close-on-click-modal":!1},{footer:se(()=>[h(ve,{onClick:he[3]||(he[3]=ie=>b.value=!1)},{default:se(()=>[ue(a(s(c)("cancel")),1)]),_:1}),h(ve,{type:"primary",loading:w.config,onClick:de},{default:se(()=>[ue(a(s(c)("gitConfigSave")),1)]),_:1},8,["loading"])]),default:se(()=>[o("div",v1,[o("label",null,a(s(c)("gitConfigName")),1),h(Ee,{modelValue:$.value,"onUpdate:modelValue":he[1]||(he[1]=ie=>$.value=ie),size:"small",placeholder:s(c)("gitConfigNamePlaceholder")},null,8,["modelValue","placeholder"])]),o("div",h1,[o("label",null,a(s(c)("gitConfigEmail")),1),h(Ee,{modelValue:L.value,"onUpdate:modelValue":he[2]||(he[2]=ie=>L.value=ie),size:"small",placeholder:s(c)("gitConfigEmailPlaceholder")},null,8,["modelValue","placeholder"])])]),_:1},8,["modelValue","title"])],64))]),_:1},8,["model-value","title"])}}}),pd=xt(m1,[["__scopeId","data-v-e839f655"]]),_l="",kl=["%H","%h","%an","%ae","%at","%ar","%s","%P","%D"].join("%x1f"),g1=["%H","%h","%an","%ae","%at","%ar","%P","%D","%s","%b"].join("%x1f");function vd(t){const e=t.trim();return e?e.split(",").map(n=>n.trim()).filter(Boolean).map(n=>n.startsWith("HEAD -> ")?{label:n.slice(8),kind:"head"}:n==="HEAD"?{label:"HEAD",kind:"head"}:n.startsWith("tag: ")?{label:n.slice(5),kind:"tag"}:n.includes("/")?{label:n,kind:"remote"}:{label:n,kind:"branch"}):[]}function xl(t){const e=[];for(const n of t.split(`
`)){if(!n.trim())continue;const l=n.split(_l);if(l.length<9)continue;const c=(l[7]??"").trim();e.push({hash:l[0],short:l[1],author:l[2],email:l[3],ts:Number(l[4])||0,date:l[5],subject:l[6],parents:c?c.split(/\s+/):[],refs:vd(l[8]??"")})}return e}function y1(t){const e=t.split(_l);if(e.length<9)return null;const n=(e[6]??"").trim();return{hash:e[0],short:e[1],author:e[2],email:e[3],ts:Number(e[4])||0,date:e[5],subject:e[8],parents:n?n.split(/\s+/):[],refs:vd(e[7]??""),body:e.slice(9).join(_l).trim()}}function w1(t){const e=[];for(const n of t.split(`
`)){if(!n.trim())continue;const l=n.split("	");if(l.length<3)continue;const[c,u]=l,v=l.slice(2).join("	");if(!v)continue;const d=c==="-"||u==="-";e.push({path:v,add:d?0:Number(c)||0,del:d?0:Number(u)||0,binary:d})}return e}function b1(t){const e=[],n=/^(\^?[0-9a-fA-F]{7,40})\s+\((.*?)\s+(\d{4}-\d{2}-\d{2})\s+(\d+)\)\s?(.*)$/;for(const l of t.split(`
`)){const c=n.exec(l);c&&e.push({hash:c[1].replace(/^\^/,""),author:c[2].trim(),date:c[3],line:Number(c[4])||0,text:c[5]??""})}return e}function _1(t){return t.startsWith("+++")||t.startsWith("---")?"head":t.startsWith("@@")?"meta":t.startsWith("diff ")||t.startsWith("index ")||t.startsWith("new file")||t.startsWith("deleted file")||t.startsWith("similarity index")||t.startsWith("rename ")||t.startsWith("Binary files")?"head":t.startsWith("+")?"add":t.startsWith("-")?"del":"ctx"}const lc=["#58a6ff","#f0883e","#3fb950","#bc8cff","#f778ba","#39c5cf","#d29922","#8b949e"];function hd(t){const e=[];let n=[],l=[],c=0;const u=v=>{for(;n.length<=v;)n.push(null),l.push(null)};for(const v of t){let d=n.indexOf(v.hash);if(d<0){let I=n.indexOf(null);I<0&&(I=n.length,u(I)),n[I]=v.hash,l[I]=c++,d=I}const p=l[d]??0,w=n.slice(),[b,...$]=v.parents;n[d]=null,l[d]=null,b!=null&&n.indexOf(b)<0&&(n[d]=b,l[d]=p);for(const I of $){if(n.includes(I))continue;let U=n.indexOf(null);U<0&&(U=n.length,u(U)),n[U]=I,l[U]=c++}const L=Math.max(w.length,n.length),M=[];for(let I=0;I<L;I++)I!==d&&(w[I]??null)!=null&&(n[I]??null)!=null&&M.push({lane:I,color:l[I]??0});const A=[];for(const I of v.parents){const U=n.indexOf(I);U>=0&&A.push({from:d,to:U,color:l[U]??p})}for(e.push({commit:v,lane:d,laneColor:p,topLine:w[d]!=null,through:M,bends:A,width:L});n.length&&n[n.length-1]===null;)n.pop(),l.pop()}return e}const Cs=14;function Xn(t){return lc[t%lc.length]}const qt=gt({open:!1,kind:"git",dir:"",key:"",onDone:void 0});function cr(t){qt.kind=t?.kind==="svn"?"svn":"git",qt.dir=t?.dir??"",qt.key=t?.key??"",qt.onDone=t?.onDone,qt.open=!0}function rc(){qt.open=!1,qt.onDone=void 0}const k1={class:"fw-diff"},x1={key:0,class:"fw-diff-empty"},C1={class:"fw-diff-body"},$1={key:0,class:"fw-diff-empty"},Ai=5e3,S1=ht({__name:"GitDiffView",props:{lines:{},empty:{}},setup(t){const e=t,{t:n}=Bt(),l=B(()=>e.lines.length>Ai?e.lines.slice(0,Ai):e.lines),c=B(()=>e.lines.length>Ai);return(u,v)=>(i(),r("div",k1,[t.lines.length?(i(),r(ae,{key:1},[o("div",C1,[(i(!0),r(ae,null,Ae(l.value,(d,p)=>(i(),r("div",{key:p,class:te(["fw-diff-line","dl-"+s(_1)(d)])},a(d||" "),3))),128))]),c.value?(i(),r("div",$1,a(s(n)("gitDiffTruncated")),1)):P("",!0)],64)):(i(),r("div",x1,a(t.empty),1))]))}}),Uo=xt(S1,[["__scopeId","data-v-10e524c1"]]),E1={class:"fw-graph"},T1=["title","onClick"],D1=["width"],F1=["x1","x2","stroke"],R1=["x1","x2","y2","stroke"],N1=["x1","y1","x2","stroke"],P1=["d","stroke"],A1=["cx","cy","r","fill","stroke"],M1={class:"fw-graph-main"},O1={class:"fw-graph-subject"},L1={key:0,class:"fw-graph-refs"},B1={class:"fw-graph-meta"},I1={class:"fw-graph-hash"},j1={key:0,class:"fw-graph-empty"},as=28,Ls=8,V1=ht({__name:"GitGraphList",props:{rows:{},active:{},empty:{}},emits:["select"],setup(t){function e(v){return v*Cs+Cs/2}function n(v,d){const p=as/2,w=as*.82;return`M ${e(v)} ${p} C ${e(v)} ${w}, ${e(d)} ${w}, ${e(d)} ${as}`}function l(v){return v.through.filter(d=>d.lane<Ls)}function c(v){return v.bends.filter(d=>d.from<Ls&&d.to<Ls)}function u(v){return v.commit.refs.some(d=>d.kind==="head")}return(v,d)=>(i(),r("div",E1,[(i(!0),r(ae,null,Ae(t.rows,p=>(i(),r("button",{key:p.commit.hash,class:te(["fw-graph-row",{active:p.commit.hash===t.active}]),title:p.commit.subject,onClick:w=>v.$emit("select",p.commit)},[o("span",{class:"fw-graph-lanes",style:_t({width:`${Math.min(p.width,Ls)*s(Cs)}px`})},[(i(),r("svg",{width:Math.min(p.width,Ls)*s(Cs),height:as,"aria-hidden":"true"},[(i(!0),r(ae,null,Ae(l(p),(w,b)=>(i(),r("line",{key:"t"+b,x1:e(w.lane),y1:0,x2:e(w.lane),y2:as,stroke:s(Xn)(w.color)},null,8,F1))),128)),p.topLine&&p.lane<Ls?(i(),r("line",{key:0,x1:e(p.lane),y1:0,x2:e(p.lane),y2:as/2,stroke:s(Xn)(p.laneColor)},null,8,R1)):P("",!0),(i(!0),r(ae,null,Ae(c(p),(w,b)=>(i(),r(ae,{key:"b"+b},[w.from===w.to?(i(),r("line",{key:0,x1:e(w.from),y1:as/2,x2:e(w.to),y2:as,stroke:s(Xn)(w.color)},null,8,N1)):(i(),r("path",{key:1,d:n(w.from,w.to),fill:"none",stroke:s(Xn)(w.color)},null,8,P1))],64))),128)),p.lane<Ls?(i(),r("circle",{key:1,cx:e(p.lane),cy:as/2,r:u(p)?4.5:3.5,fill:s(Xn)(p.laneColor),stroke:u(p)?"var(--dsh-bg, #0d1117)":"none","stroke-width":"1.5"},null,8,A1)):P("",!0)],8,D1))],4),o("span",M1,[o("span",O1,a(p.commit.subject),1),p.commit.refs.length?(i(),r("span",L1,[(i(!0),r(ae,null,Ae(p.commit.refs,w=>(i(),r("span",{key:w.kind+w.label,class:te(["fw-graph-ref","rf-"+w.kind])},[h(oe,{name:w.kind==="tag"?"tag":"git",size:9},null,8,["name"]),ue(" "+a(w.label),1)],2))),128))])):P("",!0)]),o("span",B1,[ue(a(p.commit.author),1),d[0]||(d[0]=o("span",{class:"fw-graph-dot"},"·",-1)),ue(a(p.commit.date),1)]),o("span",I1,a(p.commit.short),1)],10,T1))),128)),t.rows.length?P("",!0):(i(),r("div",j1,a(t.empty),1))]))}}),z1=xt(V1,[["__scopeId","data-v-61d062db"]]),Nn=m([]),U1=m(!1),kn=gt({open:!1,kind:"git",url:""});function ur(t){kn.kind=t.kind,kn.url=t.url??"",kn.open=!0}function Mi(){kn.open=!1}async function co(){const t=await Bp().catch(()=>null);t&&(Nn.value=t.accounts),U1.value=!0}const H1={key:0,class:"fw-gp-shell"},W1={class:"fw-gp-head"},G1=["title"],q1=["title"],K1={class:"fw-gp-up-name"},X1=["title"],Y1={class:"fw-gp-headacts"},J1={class:"fw-gp-body"},Q1={class:"fw-gp-rail"},Z1=["onClick"],ey={class:"fw-gp-rail-txt"},ty={key:0,class:"fw-gp-rail-badge"},ny={key:0,class:"fw-gp-rail-op"},sy={class:"fw-gp-content"},oy={key:0,class:"fw-gp-split"},ay={class:"fw-gp-list"},iy={key:0,class:"fw-gp-empty"},ly={class:"fw-gp-groupbar"},ry={class:"fw-gp-groupname"},cy={class:"fw-gp-groupcount"},uy=["title"],dy=["title","onClick","onContextmenu"],fy={class:"fw-gp-path"},py={key:0,class:"fw-gp-dir"},vy={class:"fw-gp-rowacts"},hy=["title","onClick"],my=["title","onClick"],gy={class:"fw-gp-detail"},yy={class:"fw-gp-detailhead"},wy=["title"],by={class:"fw-gp-detailacts"},_y=["title"],ky=["title"],xy=["title"],Cy=["title"],$y={key:0,class:"fw-gp-empty"},Sy={key:0,class:"fw-gp-empty"},Ey={key:1,class:"fw-gp-scroll"},Ty={class:"fw-gp-hash"},Dy=["title"],Fy={class:"fw-gp-filemeta"},Ry={key:0,class:"fw-gp-empty"},Ny={key:1,class:"fw-gp-scroll fw-gp-blame"},Py=["title"],Ay=["title"],My={class:"fw-gp-blame-date"},Oy={class:"fw-gp-blame-no"},Ly={class:"fw-gp-blame-txt"},By={key:1,class:"fw-gp-split"},Iy={class:"fw-gp-list fw-gp-list-col"},jy={class:"fw-gp-listbar"},Vy={class:"fw-gp-count"},zy={class:"fw-gp-detail"},Uy={key:0,class:"fw-gp-empty"},Hy={class:"fw-gp-detailhead"},Wy=["title"],Gy={class:"fw-gp-detailacts"},qy=["title"],Ky=["title"],Xy=["title"],Yy=["title"],Jy={class:"fw-gp-scroll"},Qy={class:"fw-gp-cmeta"},Zy={class:"fw-gp-crow"},ew={class:"k"},tw={class:"v mono"},nw={class:"fw-gp-crow"},sw={class:"k"},ow={class:"v"},aw={class:"fw-gp-crow"},iw={class:"k"},lw={class:"v"},rw={class:"fw-gp-crow"},cw={class:"k"},uw={class:"v mono"},dw={key:0,class:"fw-gp-crow"},fw={class:"k"},pw={class:"v"},vw={class:"fw-gp-cbody"},hw={class:"fw-gp-cfiles"},mw={key:0,class:"fw-gp-empty"},gw=["title","onClick"],yw={class:"fw-gp-path"},ww={key:0,class:"fw-gp-dir"},bw={class:"fw-gp-num"},_w={class:"add"},kw={class:"del"},xw={key:2,class:"fw-gp-one"},Cw={class:"fw-gp-listbar"},$w={class:"fw-gp-sec-title"},Sw=["onContextmenu"],Ew={class:"fw-gp-st st-branch"},Tw={class:"fw-gp-path"},Dw={key:0,class:"fw-gp-cur"},Fw={class:"fw-gp-rowacts"},Rw={class:"fw-gp-sec-title"},Nw=["onContextmenu"],Pw={class:"fw-gp-st st-remote"},Aw={class:"fw-gp-path"},Mw={class:"fw-gp-rowacts"},Ow={key:3,class:"fw-gp-one"},Lw={class:"fw-gp-sectabs"},Bw={key:0,class:"fw-gp-sectab-n"},Iw={key:0,class:"fw-gp-sectab-n"},jw={class:"fw-gp-form"},Vw={key:0,class:"fw-gp-empty"},zw=["title","onContextmenu"],Uw={class:"fw-gp-st st-tag"},Hw={class:"fw-gp-path"},Ww={key:0,class:"fw-gp-badge"},Gw={key:1,class:"fw-gp-badge fw-gp-badge-remote"},qw={key:0,class:"fw-gp-date"},Kw=["title"],Xw={class:"fw-gp-hash"},Yw={class:"fw-gp-rowacts"},Jw={class:"fw-gp-form"},Qw={key:0,class:"fw-gp-subject"},Zw={class:"fw-gp-form"},eb={key:0,class:"fw-gp-empty"},tb={key:1,class:"fw-gp-empty"},nb=["title"],sb={class:"fw-gp-st st-tag"},ob={class:"fw-gp-path"},ab={class:"fw-gp-badge"},ib={key:0,class:"fw-gp-date"},lb={class:"fw-gp-rowacts"},rb={key:4,class:"fw-gp-one"},cb={class:"fw-gp-form"},ub={key:0,class:"fw-gp-empty"},db=["onContextmenu"],fb={class:"fw-gp-st st-remote"},pb={class:"fw-gp-path"},vb=["title"],hb={key:5,class:"fw-gp-split"},mb={class:"fw-gp-list"},gb={class:"fw-gp-listbar"},yb={key:0,class:"fw-gp-empty"},wb=["title","onClick","onContextmenu"],bb={class:"fw-gp-st st-stash"},_b={class:"fw-gp-path"},kb={class:"fw-gp-rowacts"},xb=["title","onClick"],Cb={class:"fw-gp-detail"},$b={class:"fw-gp-detailhead"},Sb={class:"fw-gp-detailtitle"},Eb={key:6,class:"fw-gp-one fw-gp-cli-wrap"},Tb={key:0,class:"fw-gp-cli-hint"},Db={class:"fw-gp-cli-prompt"},Fb={class:"fw-gp-cli-cmd"},Rb={class:"fw-gp-cli-inputline"},Nb={class:"fw-gp-cli-prompt"},Pb={key:0,class:"fw-gp-commitbar"},Ab={class:"fw-gp-commitacts"},Mb={class:"fw-gp-commitmeta"},Ob={key:0},Lb={key:1,class:"fw-gitpanel-empty"},Bb={key:1,class:"fw-norepo"},Ib={class:"fw-gp-cfgfield"},jb={class:"fw-gp-cfgfield"},Vb={key:0,class:"fw-gp-cv"},zb={class:"fw-gp-cv-meta"},Ub={class:"fw-gp-crow"},Hb={class:"k"},Wb={class:"v mono"},Gb={class:"fw-gp-crow"},qb={class:"k"},Kb={class:"v"},Xb={class:"fw-gp-crow"},Yb={class:"k"},Jb={class:"v"},Qb={class:"fw-gp-cbody fw-gp-cbody-clamp"},Zb={class:"fw-gp-cv-body"},e_={class:"fw-gp-cv-files"},t_={key:0,class:"fw-gp-empty"},n_=["title","onClick"],s_={class:"fw-gp-path"},o_={key:0,class:"fw-gp-dir"},a_={class:"fw-gp-num"},i_={class:"add"},l_={class:"del"},r_={class:"fw-gp-cv-diff"},c_={key:1,class:"fw-gp-empty"},u_={class:"fw-gp-cfgfield"},d_={class:"fw-gp-cfgfield"},f_={class:"fw-gp-cfgfield"},Oi=120,p_=ht({__name:"GitPanel",props:{modelValue:{type:Boolean},dir:{}},setup(t){const e=t,{t:n}=Bt(),l=[{key:"changes",icon:"fileText",label:"gitRailChanges"},{key:"history",icon:"clock",label:"gitRailHistory"},{key:"branches",icon:"git",label:"gitRailBranches"},{key:"tags",icon:"tag",label:"gitRailTags"},{key:"remotes",icon:"globe",label:"gitRailRemotes"},{key:"stash",icon:"stash",label:"gitRailStash"},{key:"cli",icon:"terminal",label:"gitRailCli"}],c=m("changes"),u=m(null),v=gt({refresh:!1,sync:"",op:!1,commit:!1,branch:!1,stash:!1,config:!1}),d=m(null),p=m("diff"),w=m([]),b=m(""),$=m([]),L=m([]),M=m(""),A=m([]),I=m(!1),U=m(""),C=m(null),Z=m([]),G=m(""),F=m([]),de=m(Oi),j=m([]),he=m([]),Ee=m([]),ve=m(""),ne=m(""),ie=m(""),Se=m(""),Ve=m(!1),we=m(!1),Ne=m(""),W=m(""),J=m(""),z=m("tags"),ee=m([]),ge=m(""),je=m(!1),Ke=m(""),Ze=m(""),ye=m(""),be=m(""),Ye=m([]),st=m(""),pe=m(""),ke=m([]),qe=m(!1),ce=m(""),Ie=m(""),rt=m(null),yt=m(null),ut=m(""),it=m([]),Le=B(()=>u.value?.branch??""),H=B(()=>!!u.value?.inRepo&&!Le.value),N=B(()=>(u.value?.repo??"").replace(/\\/g,"/")),Q=B(()=>j.value.find(E=>E.current)??null),Te=B(()=>Q.value?.upstream??""),O=m(0),T=m(0),K=B(()=>Te.value?`${Te.value}  ↑${O.value} ↓${T.value}`:n("gitNoUpstream")),S=B(()=>H.value?n("gitHeadDetached"):n("gitStatusColon",{branch:Le.value})),q=B(()=>j.value.filter(E=>!E.name.includes("/"))),De=B(()=>j.value.filter(E=>E.name.includes("/"))),re=B(()=>`${N.value}>git `),ct=B(()=>(u.value?.unstaged.length??0)+(u.value?.staged.length??0)>0),wt=B(()=>Ee.value.length>0),Ot=B(()=>{const E=u.value;return E?[{key:"staged",label:n("gitGroupStaged"),list:E.staged},{key:"unstaged",label:n("gitGroupUnstaged"),list:E.unstaged},{key:"untracked",label:n("gitGroupUntracked"),list:E.untracked}].filter(x=>x.list.length>0):[]}),Mn=B(()=>d.value?p.value==="history"?`${n("gitFileHistory")} — ${d.value.file.path}`:p.value==="blame"?`${n("gitBlame")} — ${d.value.file.path}`:d.value.file.path:""),Gt=B(()=>b.value||n("gitDiffEmpty"));function ze(E){const x=u.value;return x?E==="changes"?x.staged.length+x.unstaged.length+x.untracked.length:E==="branches"?q.value.length:E==="tags"?he.value.length:E==="remotes"?Ee.value.length:E==="stash"?Ye.value.length:0:0}const Je={"":"",untracked:"?",added:"A",modified:"M",deleted:"D"};function et(E){return Je[E]}function lt(E){const x=E.lastIndexOf("/");return x>0?E.slice(0,x+1):""}function xn(E){const x=E.lastIndexOf("/");return x>=0?E.slice(x+1):E}function Cn(E){return E?new Date(E*1e3).toLocaleString():"—"}async function zt(E){const x=u.value?.repo;if(!x)throw new Error(n("gitNotRepo"));return Bo(x,E)}async function ot(E){const x=await zt(E);if(x.code!==0)throw new Error((x.stderr||x.stdout||n("gitOpFailed")).trim());return x.stdout}async function ft(E,x,Ce){v.op=!0;try{return await E(),x&&X("ok",n(x,Ce)),await Ct(),!0}catch(nt){return X("error",nt.message),!1}finally{v.op=!1}}async function Ct(E=!1){if(!(!e.dir||!ri(e.dir))){E||(v.refresh=!0);try{if(u.value=await Wo(e.dir),!u.value.inRepo)return;await Promise.all([$n(),mn(),Ts()]),d.value&&await Ln(d.value.file,d.value.group,!0)}catch(x){E||X("error",x.message)}finally{E||(v.refresh=!1)}}}function On(){c.value="changes",Ct()}Qe(()=>e.dir,()=>{e.modelValue&&Ct()});async function $n(){const E=await ot(["for-each-ref","--sort=-creatordate","--format=%(refname)%09%(objectname:short)%09%(upstream:short)%09%(HEAD)%09%(*objectname:short)%09%(creatordate:short)%09%(contents:subject)","refs/heads","refs/remotes","refs/tags"]).catch(()=>""),x=[],Ce=[];for(const Tt of E.split(`
`)){if(!Tt.trim())continue;const[dt,V,at,fn,jn,Os,..._i]=Tt.split("	");if(dt)if(dt.startsWith("refs/remotes/")){const fa=dt.slice(13);if(fa.endsWith("/HEAD"))continue;x.push({name:fa,hash:V??"",upstream:"",current:!1})}else dt.startsWith("refs/heads/")?x.push({name:dt.slice(11),hash:V??"",upstream:at??"",current:fn==="*"}):dt.startsWith("refs/tags/")&&Ce.push({name:dt.slice(10),hash:jn||V||"",upstream:"",current:!1,deref:jn,date:Os,subject:_i.join("	").trim()})}if(x.sort((Tt,dt)=>Tt.name.localeCompare(dt.name)),j.value=x,he.value=Ce,O.value=0,T.value=0,Te.value){const Tt=await zt(["rev-list","--left-right","--count",`HEAD...${Te.value}`]).catch(()=>null);if(Tt&&Tt.code===0){const[dt,V]=Tt.stdout.trim().split(/\s+/);O.value=Number(dt)||0,T.value=Number(V)||0}}const nt=await zt(["remote","-v"]).catch(()=>null),At=new Map;for(const Tt of(nt?.stdout??"").split(`
`)){const[dt,V]=Tt.split(/\s+/);dt&&V&&!At.has(dt)&&At.set(dt,V)}Ee.value=[...At].map(([Tt,dt])=>({name:Tt,url:dt})),await Jn()}async function Jn(){const E=new Set(he.value.map(nt=>nt.name)),x=new Set,Ce=[];for(const nt of Ee.value){const At=await zt(["ls-remote","--tags",nt.name]).catch(()=>null);if(!At||At.code!==0)continue;const Tt=new Map;for(const dt of At.stdout.split(`
`)){const V=/^([0-9a-f]+)\t(refs\/tags\/(.+))$/.exec(dt.trim());if(!V)continue;const at=V[1],fn=V[3];if(fn.endsWith("^{}")){const jn=fn.slice(0,-3),Os=Tt.get(jn);Os?Os.deref=at:Tt.set(jn,{hash:at,deref:at})}else{const jn=Tt.get(fn);jn?jn.hash=at:Tt.set(fn,{hash:at})}}for(const[dt,V]of Tt)E.has(dt)||x.has(dt)||(x.add(dt),Ce.push({name:dt,hash:V.deref||V.hash,upstream:"",current:!1,deref:V.deref,remoteOnly:!0,remote:nt.name}))}Ce.length&&(he.value=[...he.value,...Ce.sort((nt,At)=>At.name.localeCompare(nt.name,void 0,{numeric:!0}))])}async function mn(){const E=["log",`--max-count=${de.value}`,"--date-order"];I.value&&E.push("--all"),E.push(`--pretty=format:${kl}`);const x=await ot(E).catch(()=>"");A.value=hd(xl(x))}function Sn(E){I.value!==E&&(I.value=E,de.value=Oi,mn().catch(()=>{}))}async function Xs(){de.value+=Oi,await mn().catch(()=>{})}async function Ts(){const E=await zt(["stash","list"]).catch(()=>null);Ye.value=En(E?.stdout??"")}function En(E){const x=[];for(const Ce of E.split(`
`)){const nt=/^(stash@\{[^}]+\}):\s*(.*)$/.exec(Ce.trim());nt&&x.push({ref:nt[1],full:Ce.trim(),message:nt[2]||nt[1]})}return x}async function cn(E,x){d.value={file:E,group:x},p.value="diff",await Ln(E,x)}async function Ln(E,x,Ce=!1){b.value="";try{if(x==="untracked"){w.value=[],b.value=n("gitDiffUntrackedHint");return}const nt=["diff","--no-color",...x==="staged"?["--cached"]:[],"--",E.path];Gn(await ot(nt))}catch(nt){Ce||X("error",nt.message),w.value=[]}}function Gn(E){w.value=E?E.split(`
`):[]}async function Tn(){const E=d.value;if(E){p.value="history",$.value=[];try{const x=await ot(["log","--follow","--max-count=30",`--pretty=format:${kl}`,"--",E.file.path]);$.value=xl(x)}catch(x){X("error",x.message)}}}async function gn(){const E=d.value;if(E){p.value="blame",L.value=[];try{const x=await ot(["blame","--date=short","-w","--",E.file.path]);L.value=b1(x)}catch(x){X("error",x.message)}}}async function yn(E){await ft(async()=>{await ot(["add","--",E.path])})}async function Qn(E){await ft(async()=>{await ot(["restore","--staged","--",E.path])})}async function Dn(E){await Mt({title:n("gitDiscardTitle"),message:n("gitDiscardMsg",{name:E.path})})&&await ft(async()=>{await ot(["checkout","--",E.path])},"gitDiscarded")}async function D(E){const x=u.value?.repo;if(!x)return;const Ce=`${x.replace(/\\/g,"/")}/${E.path}`.replace(/\/{2,}/g,"/");await ft(async()=>{await Zc(Ce)},"gitIgnored")}async function me(){await ft(async()=>{await ot(["add","-A"])})}async function Be(){const E=M.value.trim(),x=u.value;if(!(!E||!x?.staged.length)){v.commit=!0;try{await ot(["commit","-m",E]),M.value="",X("ok",n("gitCommitted")),await Ct()}catch(Ce){X("error",Ce.message)}finally{v.commit=!1}}}async function He(E){U.value=E.hash,G.value="",F.value=[],Z.value=[];try{const[x,Ce]=await Promise.all([ot(["show","-s",`--format=${g1}`,E.hash]),ot(["diff-tree","--no-commit-id","--numstat","-r","--root",E.hash])]);C.value=y1(x)??{...E,body:""},Z.value=w1(Ce)}catch(x){X("error",x.message)}}async function Pe(E){const x=U.value;if(x){G.value=E.path,F.value=[];try{const Ce=await ot(["show","--no-color","--format=",x,"--",E.path]);F.value=Ce?Ce.split(`
`):[]}catch(Ce){X("error",Ce.message)}Ve.value=!0}}async function Ge(E){try{await navigator.clipboard.writeText(E),X("ok",n("gitCopied"))}catch{X("error",n("gitOpFailed"))}}const{cmOpen:Et,cmX:$t,cmY:wn,cmItems:Bn,openMenu:Fn,closeMenu:Ys}=pn();function So(E,x,Ce){const nt=[{label:n("gitDiff"),icon:"code",onClick:()=>void cn(x,Ce)},{label:n("gitFileHistory"),icon:"clock",disabled:Ce==="untracked",onClick:()=>void un(x,Ce)},{label:n("gitBlame"),icon:"activity",disabled:Ce==="untracked",onClick:()=>void Ds(x,Ce)},{separator:!0},Ce==="staged"?{label:n("gitUnstage"),icon:"undo",onClick:()=>void Qn(x)}:{label:n("gitAddShort"),icon:"plus",onClick:()=>void yn(x)},{label:n("gitIgnore"),icon:"eyeOff",disabled:Ce!=="untracked",onClick:()=>void D(x)},{label:n("gitDiscard"),icon:"close",disabled:Ce==="untracked",onClick:()=>void Dn(x)},{separator:!0},{label:n("gitCopyPath"),icon:"copy",onClick:()=>void Ge(x.path)}];Fn(E,nt)}async function un(E,x){(!d.value||d.value.file.path!==E.path||d.value.group!==x)&&await cn(E,x),await Tn()}async function Ds(E,x){(!d.value||d.value.file.path!==E.path||d.value.group!==x)&&await cn(E,x),await gn()}function Fs(E,x){const Ce=[{label:n("gitCheckout"),icon:"arrowRight",disabled:x.current,onClick:()=>void ns(x.name)},{label:n("gitMergeIntoCurrent"),icon:"merge",disabled:x.current,onClick:()=>void k(x.name)},{label:n("gitPushBranch"),icon:"upload",onClick:()=>void xe(x.name)},{separator:!0},{label:n("gitBranchRename"),icon:"edit",disabled:!x.current,onClick:()=>void dn()},{label:n("gitDelete"),icon:"trash",disabled:x.current,onClick:()=>void g(x.name)},{separator:!0},{label:n("gitCopyName"),icon:"copy",onClick:()=>void Ge(x.name)}];Fn(E,Ce)}function Zn(E,x){Fn(E,[{label:n("gitCheckout"),icon:"arrowRight",onClick:()=>void In(x.name)},{separator:!0},{label:n("gitCopyName"),icon:"copy",onClick:()=>void Ge(x.name)}])}function es(E,x){const Ce=[{label:n("gitView"),icon:"eye",onClick:()=>Me(x)}];x.remoteOnly?Ce.push({label:n("gitTagPull"),icon:"download",onClick:()=>void gs(x)}):(Ce.push({label:n("gitPushBranch"),icon:"upload",onClick:()=>void Xt(x.name)}),Ce.push({label:n("gitDelete"),icon:"trash",onClick:()=>void Re(x.name)})),Ce.push({separator:!0}),Ce.push({label:n("gitCopyName"),icon:"copy",onClick:()=>void Ge(x.name)}),Fn(E,Ce)}function Rs(E,x){Fn(E,[{label:n("gitRemoteSetUrl"),icon:"edit",onClick:()=>void ys(x)},{label:n("gitDelete"),icon:"trash",onClick:()=>void la(x.name)},{separator:!0},{label:n("gitCopyUrl"),icon:"copy",onClick:()=>void Ge(x.url)}])}function Js(E,x){Fn(E,[{label:n("gitStashApply"),icon:"download",onClick:()=>void Zs(x.ref)},{label:n("gitStashPop"),icon:"upload",onClick:()=>void wi(x.ref)},{label:n("gitStashDrop"),icon:"close",onClick:()=>void bi(x.ref)},{separator:!0},{label:n("gitCopyMsg"),icon:"copy",onClick:()=>void Ge(x.message)}])}function Rn(E){Fn(E,[{label:n("gitResetSoft"),icon:"undo",onClick:()=>void en("reset-soft")},{label:n("gitResetMixed"),icon:"undo",onClick:()=>void en("reset-mixed")},{label:n("gitResetHard"),icon:"warning",onClick:()=>void en("reset-hard")},{separator:!0},{label:n("gitRevert"),icon:"undo",onClick:()=>void en("revert")},{label:n("gitCherryPick"),icon:"check",onClick:()=>void en("cherry-pick")}])}function qn(){cr({kind:"git",dir:e.dir,key:Fe.key,onDone:()=>{Ct()}})}async function ts(){const E=U.value;if(!E)return;const Ce=(await ds({title:n("gitBranchFromTitle"),placeholder:n("gitBranchFromPlaceholder")}))?.trim();Ce&&await ft(async()=>{await ot(["branch",Ce,E])},"gitBranchCreated",{name:Ce})}async function Ns(){const E=U.value;!E||!await Mt({title:n("gitCheckoutCommit"),message:n("gitCheckoutCommitMsg",{hash:E.slice(0,7)})})||await ft(async()=>{await ot(["checkout",E])})}async function en(E){const x=U.value;if(!x)return;const Ce=x.slice(0,7);if(E==="reset-soft"||E==="reset-mixed"||E==="reset-hard"){if(E==="reset-hard"&&!await Mt({title:n("gitResetHard"),message:n("gitResetHardMsg")}))return;const nt=E==="reset-soft"?"--soft":E==="reset-mixed"?"--mixed":"--hard";await ft(async()=>{await ot(["reset",nt,x])},"gitResetDone",{hash:Ce});return}if(E==="revert"){await ft(async()=>{await ot(["revert","--no-edit",x])},"gitRevertDone",{hash:Ce});return}E==="cherry-pick"&&await ft(async()=>{await ot(["cherry-pick",x])},"gitCherryPicked",{hash:Ce})}async function Kt(){const E=ve.value.trim();if(!E)return;await ft(async()=>{await ot(["checkout","-b",E])},"gitBranchCreated",{name:E})&&(ve.value="")}async function ns(E){await ft(async()=>{await ot(["checkout",E])})}async function In(E){const x=E.split("/").slice(1).join("/")||E;await ft(async()=>{await ot(["checkout","-b",x,"--track",E])},"gitBranchCreated",{name:x})}async function dn(){const E=Le.value;if(!E||H.value)return;const Ce=(await ds({title:n("gitBranchRenameTitle"),placeholder:n("gitBranchRenamePlaceholder"),initial:E}))?.trim();!Ce||Ce===E||await ft(async()=>{await ot(["branch","-m",Ce])},"gitBranchRenamed",{name:Ce})}async function g(E){await Mt({title:n("gitDelete"),message:n("gitBranchDeleteMsg",{name:E})})&&await ft(async()=>{await ot(["branch","-D",E])})}async function k(E){await ft(async()=>{await ot(["merge","--no-edit",E])},"gitMergeDone",{name:E})}async function xe(E){const x=!!j.value.find(Ce=>Ce.name===E)?.upstream;await ft(async()=>{await ot(x?["push"]:["push","-u","origin",E])},"gitPushed",{name:E})}function fe(E){const x=[E.name];return E.subject&&x.push(E.subject),x.push(`${E.hash}${E.date?` · ${E.date}`:""}`),x.join(`
`)}function Me(E){const x=E.hash;x&&(c.value="history",He({hash:x,short:x.slice(0,7),author:"",email:"",ts:E.date?Math.floor(Date.parse(E.date)/1e3):0,date:E.date??"",subject:E.subject??"",parents:[],refs:[{label:E.name,kind:"tag"}]}))}async function R(){const E=ne.value.trim();if(!E)return;const x=ie.value.trim(),Ce=Se.value.trim();await ft(async()=>{const At=Ce?["tag","-a",E,"-m",Ce]:["tag",E];x&&At.push(x),await ot(At)},"gitTagCreated",{name:E})&&(ne.value="",ie.value="",Se.value="")}async function Re(E){await Mt({title:n("gitDelete"),message:n("gitTagDeleteMsg",{name:E})})&&await ft(async()=>{await ot(["tag","-d",E])},"gitTagDeleted",{name:E})}async function Xt(E){await ft(async()=>{await ot(["push","origin",E])},"gitTagPushed",{name:E})}async function Ht(){await ft(async()=>{await ot(["fetch","--tags"])},"gitTagFetchAllDone")}async function gs(E){const x=E.remote||"origin";await ft(async()=>{await ot(["fetch",x,`refs/tags/${E.name}:refs/tags/${E.name}`])},"gitTagPulled",{name:E.name})}function Qs(){Ne.value="",W.value="",J.value="",we.value=!0}function ss(E){z.value=E,E==="releases"&&Ps()}async function Ps(){const E=u.value?.repo;if(!(!E||je.value)){je.value=!0;try{const x=await Lp(E);ee.value=x.list,ge.value=x.skipped??""}catch(x){ge.value=x.message}finally{je.value=!1}}}async function As(){const E=Ke.value.trim(),x=Ze.value.trim();if(!E||!x){X("error",n("gitReleaseRequireMsg"));return}const Ce=u.value?.repo;if(!Ce){X("error",n("gitNotRepo"));return}v.op=!0;try{const nt=await Or(Ce,E,E,x);nt.url?(X("ok",n("gitReleaseCreated",{url:nt.url})),Ze.value="",await Ps()):X("info",n("gitReleaseGhSkip",{reason:nt.skipped??""}))}catch(nt){X("error",nt.message)}finally{v.op=!1}}function ia(E){E&&window.open(E,"_blank","noopener")}async function yi(){const E=Ne.value.trim(),x=J.value.trim(),Ce=W.value.trim();if(!E||!x){X("error",n("gitReleaseRequireMsg"));return}const nt=u.value?.repo;if(!nt){X("error",n("gitNotRepo"));return}v.op=!0;try{if((await zt(["rev-parse","-q","--verify",`refs/tags/${E}`])).code!==0){const dt=["tag","-a",E,"-m",x];Ce&&dt.push(Ce),await ot(dt)}await ot(["push","origin",E]);let Tt="";try{const dt=await Or(nt,E,E,x);dt.url?Tt=dt.url:dt.skipped&&X("info",n("gitReleaseGhSkip",{reason:dt.skipped}))}catch(dt){X("info",n("gitReleaseGhSkip",{reason:dt.message}))}X("ok",Tt?`${n("gitReleased",{name:E})}  ${Tt}`:n("gitReleased",{name:E})),we.value=!1,z.value==="releases"&&Ps(),await Ct()}catch(At){X("error",At.message)}finally{v.op=!1}}async function os(){const E=ye.value.trim(),x=be.value.trim();if(!E||!x)return;await ft(async()=>{await ot(["remote","add",E,x])},"gitRemoteAdded",{name:E})&&(ye.value="",be.value="")}async function ys(E){const Ce=(await ds({title:n("gitRemoteUrlTitle"),placeholder:n("gitRemoteUrlPlaceholder"),initial:E.url}))?.trim();!Ce||Ce===E.url||await ft(async()=>{await ot(["remote","set-url",E.name,Ce])},"gitRemoteUrlSaved")}async function la(E){await Mt({title:n("gitDelete"),message:n("gitRemoteRemoveMsg",{name:E})})&&await ft(async()=>{await ot(["remote","remove",E])},"gitRemoteRemoved",{name:E})}async function tn(){v.stash=!0;try{await ot(["stash","push","-m",st.value.trim()||"auto stash"]),st.value="",X("ok",n("gitStashCreated")),await Ct()}catch(E){X("error",E.message)}finally{v.stash=!1}}async function Zs(E){await ft(async()=>{await ot(["stash","apply",E])},"gitStashApplied")}async function wi(E){await ft(async()=>{await ot(["stash","pop",E])},"gitStashPopped")}async function bi(E){await Mt({title:n("gitStashDrop"),message:n("gitStashDropMsg",{ref:E})})&&await ft(async()=>{await ot(["stash","drop",E])},"gitStashDropped")}async function Ms(E){pe.value=E,ke.value=[];try{const x=await ot(["stash","show","--no-color","-p",E]);ke.value=x?x.split(`
`):[]}catch(x){X("error",x.message)}}async function Eo(E){v.sync=E;try{const x=await zt([E]);if(x.code!==0)throw new Error((x.stderr||x.stdout||n("gitOpFailed")).trim());X("ok",(x.stderr||x.stdout||`${E} ok`).trim()),await Ct()}catch(x){X("error",x.message)}finally{v.sync=""}}async function To(){const E=u.value?.repo??"";let x="";if(E){const Ce=await Bo(E,["remote","get-url","origin"]).catch(()=>null);Ce&&Ce.code===0&&(x=(Ce.stdout.split(/\r?\n/)[0]??"").trim())}ur({kind:"git",url:x})}async function ra(){try{const E=await eu();ce.value=E.name??"",Ie.value=E.email??""}catch{}qe.value=!0}async function ca(){v.config=!0;try{await tu(ce.value,Ie.value),qe.value=!1,X("ok",n("gitConfigSaved"))}catch(E){X("error",E.message)}finally{v.config=!1}}async function ua(){const E=ut.value.trim();if(E){ut.value="",it.value.push({kind:"cmd",text:E});try{const x=await zt(E.split(/\s+/));x.stdout&&it.value.push({kind:"out",text:x.stdout}),x.stderr&&it.value.push({kind:x.code===0?"out":"err",text:x.stderr}),!x.stdout&&!x.stderr&&it.value.push({kind:"out",text:`(exit ${x.code})`}),await Ct(!0)}catch(x){it.value.push({kind:"err",text:x.message})}}}function da(){yt.value?.focus()}return(E,x)=>{const Ce=An,nt=Ss,At=ni,Tt=ti,dt=rn;return i(),Xe(dt,{"model-value":t.modelValue,title:s(n)("gitPanelTitle"),width:"800px","align-center":"","modal-class":"fw-blur-overlay",class:"fw-gitpanel-dialog","close-on-click-modal":!1,"onUpdate:modelValue":x[33]||(x[33]=V=>E.$emit("update:modelValue",V)),onOpen:On},{default:se(()=>[u.value&&u.value.inRepo?(i(),r("div",H1,[o("div",W1,[o("span",{class:te(["fw-gp-branch",{detached:H.value}]),title:S.value},[h(oe,{name:"git",size:13}),o("b",null,a(H.value?s(n)("gitHeadDetached"):Le.value||"—"),1)],10,G1),o("span",{class:"fw-gp-up",title:K.value},[Te.value?(i(),r(ae,{key:0},[o("span",{class:te(["fw-gp-up-i",{zero:!O.value}])},"↑"+a(O.value),3),o("span",{class:te(["fw-gp-up-i",{zero:!T.value}])},"↓"+a(T.value),3),o("span",K1,a(Te.value),1)],64)):(i(),r(ae,{key:1},[ue(a(s(n)("gitNoUpstream")),1)],64))],8,q1),o("span",{class:"fw-gp-repo",title:u.value.repo},a(s(n)("gitLocalRepo"))+a(N.value),9,X1),o("span",Y1,[h(Ce,{size:"small",loading:v.sync==="fetch",onClick:x[0]||(x[0]=V=>Eo("fetch"))},{default:se(()=>[ue(a(s(n)("gitFetch")),1)]),_:1},8,["loading"]),h(Ce,{size:"small",loading:v.sync==="pull",onClick:x[1]||(x[1]=V=>Eo("pull"))},{default:se(()=>[ue(a(s(n)("gitPull")),1)]),_:1},8,["loading"]),h(Ce,{size:"small",loading:v.sync==="push",onClick:x[2]||(x[2]=V=>Eo("push"))},{default:se(()=>[ue(a(s(n)("gitPush")),1)]),_:1},8,["loading"]),h(Ce,{size:"small",disabled:v.refresh,title:s(n)("gitRefresh"),onClick:x[3]||(x[3]=V=>Ct())},{default:se(()=>[o("span",{class:te(["fw-gp-refresh-ic",{spin:v.refresh}])},[h(oe,{name:"refresh",size:13})],2)]),_:1},8,["disabled","title"]),h(Ce,{size:"small",title:s(n)("gitConfig"),onClick:ra},{default:se(()=>[h(oe,{name:"gear",size:13})]),_:1},8,["title"]),h(Ce,{size:"small",title:s(n)("accTitle"),onClick:To},{default:se(()=>[h(oe,{name:"shield",size:13})]),_:1},8,["title"])])]),o("div",J1,[o("nav",Q1,[(i(),r(ae,null,Ae(l,V=>o("button",{key:V.key,class:te(["fw-gp-rail-btn",{active:c.value===V.key}]),onClick:at=>c.value=V.key},[h(oe,{name:V.icon,size:14},null,8,["name"]),o("span",ey,a(s(n)(V.label)),1),ze(V.key)?(i(),r("span",ty,a(ze(V.key)),1)):P("",!0)],10,Z1)),64)),x[35]||(x[35]=o("span",{class:"fw-gp-rail-fill"},null,-1)),v.op?(i(),r("div",ny,[x[34]||(x[34]=o("span",{class:"fw-gp-spin"},null,-1)),ue(a(s(n)("gitOpRunning")),1)])):P("",!0)]),o("section",sy,[c.value==="changes"?(i(),r("div",oy,[o("div",ay,[Ot.value.length?P("",!0):(i(),r("div",iy,a(s(n)("gitClean")),1)),(i(!0),r(ae,null,Ae(Ot.value,V=>(i(),r(ae,{key:V.key},[o("div",ly,[o("span",ry,a(V.label),1),o("span",cy,a(V.list.length),1),V.key==="unstaged"?(i(),r("button",{key:0,class:"fw-gp-mini",title:s(n)("gitStageAll"),onClick:me},[h(oe,{name:"plus",size:11})],8,uy)):P("",!0)]),(i(!0),r(ae,null,Ae(V.list,at=>(i(),r("div",{key:V.key+at.path,class:te(["fw-gp-row",{active:d.value&&d.value.file.path===at.path&&d.value.group===V.key}]),title:at.path,onClick:fn=>cn(at,V.key),onContextmenu:_e(fn=>So(fn,at,V.key),["prevent","stop"])},[o("span",{class:te(["fw-gp-st","st-"+at.status])},a(et(at.status)),3),o("span",fy,[lt(at.path)?(i(),r("span",py,a(lt(at.path)),1)):P("",!0),ue(a(xn(at.path)),1)]),o("span",vy,[V.key!=="staged"?(i(),r("button",{key:0,class:"fw-gp-mini",title:s(n)("gitAddShort"),onClick:_e(fn=>yn(at),["stop"])},[h(oe,{name:"plus",size:11})],8,hy)):(i(),r("button",{key:1,class:"fw-gp-mini",title:s(n)("gitUnstage"),onClick:_e(fn=>Qn(at),["stop"])},[h(oe,{name:"undo",size:11})],8,my))])],42,dy))),128))],64))),128))]),o("div",gy,[o("div",yy,[o("span",{class:"fw-gp-detailtitle",title:Mn.value},a(Mn.value),9,wy),o("span",by,[d.value&&p.value!=="diff"?(i(),r("button",{key:0,class:"fw-gp-mini",title:s(n)("gitDiff"),onClick:x[4]||(x[4]=V=>cn(d.value.file,d.value.group))},[h(oe,{name:"code",size:12})],8,_y)):P("",!0),d.value&&p.value!=="history"?(i(),r("button",{key:1,class:"fw-gp-mini",title:s(n)("gitFileHistory"),onClick:Tn},[h(oe,{name:"clock",size:12})],8,ky)):P("",!0),d.value&&p.value!=="blame"?(i(),r("button",{key:2,class:"fw-gp-mini",title:s(n)("gitBlame"),onClick:gn},[h(oe,{name:"activity",size:12})],8,xy)):P("",!0),d.value?(i(),r("button",{key:3,class:"fw-gp-mini",title:s(n)("gitCopyPath"),onClick:x[5]||(x[5]=V=>Ge(d.value.file.path))},[h(oe,{name:"copy",size:12})],8,Cy)):P("",!0)])]),d.value?p.value==="diff"?(i(),Xe(Uo,{key:1,lines:w.value,empty:Gt.value},null,8,["lines","empty"])):p.value==="history"?(i(),r(ae,{key:2},[$.value.length?(i(),r("div",Ey,[(i(!0),r(ae,null,Ae($.value,V=>(i(),r("div",{key:V.hash,class:"fw-gp-filerow"},[o("span",Ty,a(V.short),1),o("span",{class:"fw-gp-filesub",title:V.subject},a(V.subject),9,Dy),o("span",Fy,a(V.author)+" · "+a(V.date),1)]))),128))])):(i(),r("div",Sy,a(s(n)("gitFileHistoryEmpty")),1))],64)):(i(),r(ae,{key:3},[L.value.length?(i(),r("div",Ny,[(i(!0),r(ae,null,Ae(L.value,(V,at)=>(i(),r("div",{key:at,class:"fw-gp-blame-row"},[o("span",{class:"fw-gp-blame-hash",title:V.hash},a(V.hash.slice(0,7)),9,Py),o("span",{class:"fw-gp-blame-author",title:V.author},a(V.author),9,Ay),o("span",My,a(V.date),1),o("span",Oy,a(V.line),1),o("span",Ly,a(V.text),1)]))),128))])):(i(),r("div",Ry,a(s(n)("gitBlameEmpty")),1))],64)):(i(),r("div",$y,a(s(n)("gitSelectFile")),1))])])):c.value==="history"?(i(),r("div",By,[o("div",Iy,[o("div",jy,[o("button",{class:te(["fw-gp-tab",{on:I.value}]),onClick:x[6]||(x[6]=V=>Sn(!0))},a(s(n)("gitHistoryAll")),3),o("button",{class:te(["fw-gp-tab",{on:!I.value}]),onClick:x[7]||(x[7]=V=>Sn(!1))},a(s(n)("gitHistoryCurrent")),3),x[36]||(x[36]=o("span",{class:"fw-gp-spacer"},null,-1)),o("span",Vy,a(A.value.length),1),A.value.length>=de.value?(i(),r("button",{key:0,class:"fw-gp-tab",onClick:Xs},a(s(n)("gitLoadMore")),1)):P("",!0)]),h(z1,{rows:A.value,active:U.value,empty:s(n)("gitLogEmpty"),onSelect:He},null,8,["rows","active","empty"])]),o("div",zy,[C.value?(i(),r(ae,{key:1},[o("div",Hy,[o("span",{class:"fw-gp-detailtitle",title:C.value.subject},a(s(n)("gitCommitDetail")),9,Wy),o("span",Gy,[o("button",{class:"fw-gp-mini",title:s(n)("gitCopyHash"),onClick:x[8]||(x[8]=V=>Ge(C.value.hash))},[h(oe,{name:"copy",size:12})],8,qy),o("button",{class:"fw-gp-mini",title:s(n)("gitBranchFrom"),onClick:ts},[h(oe,{name:"git",size:12})],8,Ky),o("button",{class:"fw-gp-mini",title:s(n)("gitCheckoutCommit"),onClick:Ns},[h(oe,{name:"check",size:12})],8,Xy),o("button",{class:"fw-gp-mini",title:s(n)("gitMenu"),onClick:x[9]||(x[9]=_e(V=>Rn(V),["stop"]))},[h(oe,{name:"sort",size:12})],8,Yy)])]),o("div",Jy,[o("div",Qy,[o("div",Zy,[o("span",ew,a(s(n)("gitCommitHash")),1),o("span",tw,a(C.value.hash),1)]),o("div",nw,[o("span",sw,a(s(n)("gitCommitAuthor")),1),o("span",ow,a(C.value.author)+" <"+a(C.value.email)+">",1)]),o("div",aw,[o("span",iw,a(s(n)("gitCommitDate")),1),o("span",lw,a(Cn(C.value.ts))+" · "+a(C.value.date),1)]),o("div",rw,[o("span",cw,a(s(n)("gitCommitParents")),1),o("span",uw,a(C.value.parents.map(V=>V.slice(0,7)).join(" ")||"—"),1)]),C.value.refs.length?(i(),r("div",dw,[o("span",fw,a(s(n)("gitCommitRefs")),1),o("span",pw,[(i(!0),r(ae,null,Ae(C.value.refs,V=>(i(),r("span",{key:V.label,class:te(["fw-gp-refchip","rf-"+V.kind])},a(V.label),3))),128))])])):P("",!0)]),o("pre",vw,a(C.value.body||C.value.subject),1),o("div",hw,a(s(n)("gitCommitChangedFiles",{n:Z.value.length})),1),Z.value.length?P("",!0):(i(),r("div",mw,a(s(n)("gitCommitNoFiles")),1)),(i(!0),r(ae,null,Ae(Z.value,V=>(i(),r("div",{key:V.path,class:te(["fw-gp-row",{active:G.value===V.path}]),title:s(n)("gitCommitOpenDiff",{path:V.path}),onClick:at=>Pe(V)},[o("span",yw,[lt(V.path)?(i(),r("span",ww,a(lt(V.path)),1)):P("",!0),ue(a(xn(V.path)),1)]),o("span",bw,[o("span",_w,"+"+a(V.add),1),o("span",kw,"-"+a(V.del),1)])],10,gw))),128))])],64)):(i(),r("div",Uy,a(s(n)("gitSelectCommit")),1))])])):c.value==="branches"?(i(),r("div",xw,[o("div",Cw,[h(nt,{modelValue:ve.value,"onUpdate:modelValue":x[10]||(x[10]=V=>ve.value=V),size:"small",placeholder:s(n)("gitBranchNew"),onKeydown:bt(Kt,["enter"])},null,8,["modelValue","placeholder"]),h(Ce,{size:"small",type:"primary",loading:v.branch,onClick:Kt},{default:se(()=>[ue(a(s(n)("gitBranchCreateAndSwitch")),1)]),_:1},8,["loading"]),h(Ce,{size:"small",disabled:H.value,onClick:dn},{default:se(()=>[ue(a(s(n)("gitBranchRename")),1)]),_:1},8,["disabled"])]),o("div",$w,a(s(n)("gitBranchLocalGroup")),1),(i(!0),r(ae,null,Ae(q.value,V=>(i(),r("div",{key:V.name,class:te(["fw-gp-row",{active:V.current}]),onContextmenu:_e(at=>Fs(at,V),["prevent","stop"])},[o("span",Ew,[h(oe,{name:"git",size:12})]),o("span",Tw,[ue(a(V.name),1),V.current?(i(),r("span",Dw," • "+a(s(n)("gitBranchCurrent")),1)):P("",!0)]),o("span",Fw,[V.current?(i(),Xe(Ce,{key:1,text:"",size:"small",onClick:at=>xe(V.name)},{default:se(()=>[ue(a(s(n)("gitPushBranch")),1)]),_:1},8,["onClick"])):(i(),Xe(Ce,{key:0,text:"",size:"small",onClick:at=>ns(V.name)},{default:se(()=>[ue(a(s(n)("gitCheckout")),1)]),_:1},8,["onClick"]))])],42,Sw))),128)),De.value.length?(i(),r(ae,{key:0},[o("div",Rw,a(s(n)("gitBranchRemoteGroup")),1),(i(!0),r(ae,null,Ae(De.value,V=>(i(),r("div",{key:V.name,class:"fw-gp-row",onContextmenu:_e(at=>Zn(at,V),["prevent","stop"])},[o("span",Pw,[h(oe,{name:"globe",size:12})]),o("span",Aw,a(V.name),1),o("span",Mw,[h(Ce,{text:"",size:"small",onClick:at=>In(V.name)},{default:se(()=>[ue(a(s(n)("gitCheckout")),1)]),_:1},8,["onClick"])])],40,Nw))),128))],64)):P("",!0)])):c.value==="tags"?(i(),r("div",Ow,[o("div",Lw,[o("button",{class:te(["fw-gp-sectab",{active:z.value==="tags"}]),onClick:x[11]||(x[11]=V=>ss("tags"))},[ue(a(s(n)("gitTabTags")),1),he.value.length?(i(),r("span",Bw,a(he.value.length),1)):P("",!0)],2),o("button",{class:te(["fw-gp-sectab",{active:z.value==="releases"}]),onClick:x[12]||(x[12]=V=>ss("releases"))},[ue(a(s(n)("gitTabReleases")),1),ee.value.length?(i(),r("span",Iw,a(ee.value.length),1)):P("",!0)],2)]),z.value==="tags"?(i(),r(ae,{key:0},[o("div",jw,[h(nt,{modelValue:ne.value,"onUpdate:modelValue":x[13]||(x[13]=V=>ne.value=V),size:"small",class:"fw-gp-in-name",placeholder:s(n)("gitTagNamePlaceholder")},null,8,["modelValue","placeholder"]),h(nt,{modelValue:ie.value,"onUpdate:modelValue":x[14]||(x[14]=V=>ie.value=V),size:"small",class:"fw-gp-in-target",placeholder:s(n)("gitTagTargetPlaceholder")},null,8,["modelValue","placeholder"]),h(nt,{modelValue:Se.value,"onUpdate:modelValue":x[15]||(x[15]=V=>Se.value=V),size:"small",class:"fw-gp-in-msg",placeholder:s(n)("gitTagMessagePlaceholder")},null,8,["modelValue","placeholder"]),h(Ce,{size:"small",type:"primary",disabled:!ne.value.trim(),onClick:R},{default:se(()=>[ue(a(s(n)("gitTagCreate")),1)]),_:1},8,["disabled"]),h(Ce,{size:"small",loading:v.op,disabled:!wt.value,title:wt.value?"":s(n)("gitTagNoRemote"),onClick:Ht},{default:se(()=>[ue(a(s(n)("gitTagFetchAll")),1)]),_:1},8,["loading","disabled","title"])]),he.value.length?P("",!0):(i(),r("div",Vw,a(s(n)("gitTagEmpty")),1)),(i(!0),r(ae,null,Ae(he.value,V=>(i(),r("div",{key:V.name,class:"fw-gp-row",title:fe(V),onContextmenu:_e(at=>es(at,V),["prevent","stop"])},[o("span",Uw,[h(oe,{name:"tag",size:12})]),o("span",Hw,[ue(a(V.name)+" ",1),V.deref?(i(),r("span",Ww,a(s(n)("gitTagAnnotated")),1)):P("",!0),V.remoteOnly?(i(),r("span",Gw,a(s(n)("gitTagRemoteOnly")),1)):P("",!0)]),V.date?(i(),r("span",qw,a(V.date),1)):P("",!0),V.subject?(i(),r("span",{key:1,class:"fw-gp-subject",title:V.subject},a(V.subject),9,Kw)):P("",!0),o("span",Xw,a(V.hash),1),o("span",Yw,[h(Ce,{text:"",size:"small",onClick:at=>Me(V)},{default:se(()=>[ue(a(s(n)("gitView")),1)]),_:1},8,["onClick"])])],40,zw))),128))],64)):(i(),r(ae,{key:1},[o("div",Jw,[h(Ce,{size:"small",type:"primary",disabled:!wt.value,title:wt.value?"":s(n)("gitTagNoRemote"),onClick:Qs},{default:se(()=>[ue(a(s(n)("gitReleaseBtn")),1)]),_:1},8,["disabled","title"]),h(Ce,{size:"small",loading:je.value,onClick:Ps},{default:se(()=>[ue(a(s(n)("gitRefresh")),1)]),_:1},8,["loading"]),wt.value?P("",!0):(i(),r("span",Qw,a(s(n)("gitTagNoRemote")),1))]),o("div",Zw,[h(Tt,{modelValue:Ke.value,"onUpdate:modelValue":x[16]||(x[16]=V=>Ke.value=V),size:"small",class:"fw-gp-in-name",placeholder:s(n)("gitReleaseChooseTag"),filterable:""},{default:se(()=>[(i(!0),r(ae,null,Ae(he.value,V=>(i(),Xe(At,{key:V.name,label:V.name,value:V.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"]),h(nt,{modelValue:Ze.value,"onUpdate:modelValue":x[17]||(x[17]=V=>Ze.value=V),size:"small",type:"textarea",rows:2,resize:"none",placeholder:s(n)("gitReleaseNotesPlaceholder")},null,8,["modelValue","placeholder"]),h(Ce,{size:"small",disabled:!Ke.value.trim()||!Ze.value.trim(),onClick:As},{default:se(()=>[ue(a(s(n)("gitReleaseCreateForTag")),1)]),_:1},8,["disabled"])]),ge.value?(i(),r("div",eb,a(s(n)("gitReleaseLoadSkip",{reason:ge.value})),1)):!ee.value.length&&!je.value?(i(),r("div",tb,a(s(n)("gitReleaseEmpty")),1)):P("",!0),(i(!0),r(ae,null,Ae(ee.value,V=>(i(),r("div",{key:V.url||V.tag,class:"fw-gp-row",title:V.name},[o("span",sb,[h(oe,{name:"tag",size:12})]),o("span",ob,[ue(a(V.name||V.tag)+" ",1),o("span",ab,a(V.tag),1)]),V.date?(i(),r("span",ib,a(V.date),1)):P("",!0),o("span",lb,[h(Ce,{text:"",size:"small",onClick:at=>ia(V.url)},{default:se(()=>[ue(a(s(n)("gitReleaseOpen")),1)]),_:1},8,["onClick"])])],8,nb))),128))],64))])):c.value==="remotes"?(i(),r("div",rb,[o("div",cb,[h(nt,{modelValue:ye.value,"onUpdate:modelValue":x[18]||(x[18]=V=>ye.value=V),size:"small",class:"fw-gp-in-name",placeholder:s(n)("gitRemoteNamePlaceholder")},null,8,["modelValue","placeholder"]),h(nt,{modelValue:be.value,"onUpdate:modelValue":x[19]||(x[19]=V=>be.value=V),size:"small",class:"fw-gp-in-url",placeholder:s(n)("gitRemoteUrlPlaceholder")},null,8,["modelValue","placeholder"]),h(Ce,{size:"small",type:"primary",disabled:!ye.value.trim()||!be.value.trim(),onClick:os},{default:se(()=>[ue(a(s(n)("gitRemoteAdd")),1)]),_:1},8,["disabled"])]),Ee.value.length?P("",!0):(i(),r("div",ub,a(s(n)("gitRemoteEmpty")),1)),(i(!0),r(ae,null,Ae(Ee.value,V=>(i(),r("div",{key:V.name,class:"fw-gp-row",onContextmenu:_e(at=>Rs(at,V),["prevent","stop"])},[o("span",fb,[h(oe,{name:"globe",size:12})]),o("span",pb,a(V.name),1),o("span",{class:"fw-gp-remote-url",title:V.url},a(V.url),9,vb)],40,db))),128))])):c.value==="stash"?(i(),r("div",hb,[o("div",mb,[o("div",gb,[h(nt,{modelValue:st.value,"onUpdate:modelValue":x[20]||(x[20]=V=>st.value=V),size:"small",placeholder:s(n)("gitStashPlaceholder"),onKeydown:bt(tn,["enter"])},null,8,["modelValue","placeholder"]),h(Ce,{size:"small",type:"primary",loading:v.stash,disabled:!ct.value,onClick:tn},{default:se(()=>[ue(a(s(n)("gitStashNew")),1)]),_:1},8,["loading","disabled"])]),Ye.value.length?P("",!0):(i(),r("div",yb,a(ct.value?s(n)("gitStashEmpty"):s(n)("gitStashNone")),1)),(i(!0),r(ae,null,Ae(Ye.value,V=>(i(),r("div",{key:V.ref,class:te(["fw-gp-row",{active:pe.value===V.ref}]),title:V.full,onClick:at=>Ms(V.ref),onContextmenu:_e(at=>Js(at,V),["prevent","stop"])},[o("span",bb,[h(oe,{name:"stash",size:12})]),o("span",_b,a(V.message),1),o("span",kb,[o("button",{class:"fw-gp-mini",title:s(n)("gitStashApply"),onClick:_e(at=>Zs(V.ref),["stop"])},[h(oe,{name:"download",size:11})],8,xb)])],42,wb))),128))]),o("div",Cb,[o("div",$b,[o("span",Sb,a(pe.value||s(n)("gitStashView")),1)]),h(Uo,{lines:ke.value,empty:s(n)("gitStashEmpty")},null,8,["lines","empty"])])])):c.value==="cli"?(i(),r("div",Eb,[o("div",{ref_key:"cliRef",ref:rt,class:"fw-gp-cli",onClick:da},[it.value.length?P("",!0):(i(),r("div",Tb,a(s(n)("gitCliPlaceholder")),1)),(i(!0),r(ae,null,Ae(it.value,(V,at)=>(i(),r("div",{key:at,class:te(["fw-gp-cli-line","kind-"+V.kind])},[V.kind==="cmd"?(i(),r(ae,{key:0},[o("span",Db,a(re.value),1),o("span",Fb,a(V.text),1)],64)):(i(),r(ae,{key:1},[ue(a(V.text),1)],64))],2))),128)),o("div",Rb,[o("span",Nb,a(re.value),1),kt(o("input",{ref_key:"cliInputRef",ref:yt,"onUpdate:modelValue":x[21]||(x[21]=V=>ut.value=V),class:"fw-gp-cli-inner",spellcheck:"false",autocomplete:"off",onKeydown:bt(ua,["enter"])},null,544),[[Lt,ut.value]])])],512)])):P("",!0)])]),c.value==="changes"?(i(),r("div",Pb,[h(nt,{modelValue:M.value,"onUpdate:modelValue":x[22]||(x[22]=V=>M.value=V),type:"textarea",rows:2,resize:"none",placeholder:s(n)("gitCommitMsgPlaceholder"),onKeydown:bt(_e(Be,["ctrl","prevent"]),["enter"])},null,8,["modelValue","placeholder","onKeydown"]),o("div",Ab,[o("span",Mb,[u.value.staged.length?(i(),r(ae,{key:0},[ue(a(s(n)("gitCommitFiles",{n:u.value.staged.length})),1)],64)):(i(),r(ae,{key:1},[ue(a(s(n)("gitNoChanges")),1)],64))]),h(Ce,{size:"small",disabled:!u.value.unstaged.length&&!u.value.untracked.length,onClick:me},{default:se(()=>[ue(a(s(n)("gitStageAll")),1)]),_:1},8,["disabled"]),h(Ce,{size:"small",type:"primary",loading:v.commit,disabled:!u.value.staged.length||!M.value.trim(),onClick:Be},{default:se(()=>[ue(a(s(n)("gitCommit")),1),u.value.staged.length?(i(),r("span",Ob,"（"+a(u.value.staged.length)+"）",1)):P("",!0)]),_:1},8,["loading","disabled"])])])):P("",!0)])):(i(),r("div",Lb,[v.refresh?(i(),r(ae,{key:0},[x[37]||(x[37]=o("span",{class:"fw-gp-spin"},null,-1)),ue(a(s(n)("gitOpRunning")),1)],64)):(i(),r("div",Bb,[h(oe,{name:"git",size:28}),o("span",null,a(s(n)("gitNotRepo")),1),o("button",{class:"fw-retry",onClick:qn},a(s(n)("gitCloneHere")),1)]))])),h(dt,{"model-value":qe.value,title:s(n)("gitConfigTitle"),width:"420px","align-center":"","modal-class":"fw-blur-overlay",class:"fw-gitconfig-dialog","close-on-click-modal":!1,"onUpdate:modelValue":x[26]||(x[26]=V=>qe.value=V)},{footer:se(()=>[h(Ce,{onClick:x[25]||(x[25]=V=>qe.value=!1)},{default:se(()=>[ue(a(s(n)("cancel")),1)]),_:1}),h(Ce,{type:"primary",loading:v.config,onClick:ca},{default:se(()=>[ue(a(s(n)("gitConfigSave")),1)]),_:1},8,["loading"])]),default:se(()=>[o("div",Ib,[o("label",null,a(s(n)("gitConfigName")),1),h(nt,{modelValue:ce.value,"onUpdate:modelValue":x[23]||(x[23]=V=>ce.value=V),size:"small",placeholder:s(n)("gitConfigNamePlaceholder")},null,8,["modelValue","placeholder"])]),o("div",jb,[o("label",null,a(s(n)("gitConfigEmail")),1),h(nt,{modelValue:Ie.value,"onUpdate:modelValue":x[24]||(x[24]=V=>Ie.value=V),size:"small",placeholder:s(n)("gitConfigEmailPlaceholder")},null,8,["modelValue","placeholder"])])]),_:1},8,["model-value","title"]),h(dt,{modelValue:Ve.value,"onUpdate:modelValue":x[27]||(x[27]=V=>Ve.value=V),title:s(n)("gitCommitViewTitle"),width:"800px","align-center":"","modal-class":"fw-blur-overlay",class:"fw-gp-commitview-dialog","close-on-click-modal":!1},{default:se(()=>[C.value?(i(),r("div",Vb,[o("div",zb,[o("div",Ub,[o("span",Hb,a(s(n)("gitCommitHash")),1),o("span",Wb,a(C.value.hash),1)]),o("div",Gb,[o("span",qb,a(s(n)("gitCommitAuthor")),1),o("span",Kb,a(C.value.author)+" <"+a(C.value.email)+">",1)]),o("div",Xb,[o("span",Yb,a(s(n)("gitCommitDate")),1),o("span",Jb,a(Cn(C.value.ts))+" · "+a(C.value.date),1)]),o("pre",Qb,a(C.value.body||C.value.subject),1)]),o("div",Zb,[o("div",e_,[Z.value.length?P("",!0):(i(),r("div",t_,a(s(n)("gitCommitNoFiles")),1)),(i(!0),r(ae,null,Ae(Z.value,V=>(i(),r("div",{key:V.path,class:te(["fw-gp-row",{active:G.value===V.path}]),title:V.path,onClick:at=>Pe(V)},[o("span",s_,[lt(V.path)?(i(),r("span",o_,a(lt(V.path)),1)):P("",!0),ue(a(xn(V.path)),1)]),o("span",a_,[o("span",i_,"+"+a(V.add),1),o("span",l_,"-"+a(V.del),1)])],10,n_))),128))]),o("div",r_,[h(Uo,{lines:F.value,empty:s(n)("gitDiffEmpty")},null,8,["lines","empty"])])])])):(i(),r("div",c_,a(s(n)("gitSelectCommit")),1))]),_:1},8,["modelValue","title"]),h(dt,{modelValue:we.value,"onUpdate:modelValue":x[32]||(x[32]=V=>we.value=V),title:s(n)("gitReleaseTitle"),width:"460px","align-center":"","modal-class":"fw-blur-overlay",class:"fw-gp-release-dialog","close-on-click-modal":!1},{footer:se(()=>[h(Ce,{onClick:x[31]||(x[31]=V=>we.value=!1)},{default:se(()=>[ue(a(s(n)("cancel")),1)]),_:1}),h(Ce,{type:"primary",loading:v.op,disabled:!Ne.value.trim()||!J.value.trim(),onClick:yi},{default:se(()=>[ue(a(s(n)("gitReleasePublish")),1)]),_:1},8,["loading","disabled"])]),default:se(()=>[o("div",u_,[o("label",null,a(s(n)("gitReleaseName")),1),h(nt,{modelValue:Ne.value,"onUpdate:modelValue":x[28]||(x[28]=V=>Ne.value=V),size:"small",placeholder:s(n)("gitTagNamePlaceholder")},null,8,["modelValue","placeholder"])]),o("div",d_,[o("label",null,a(s(n)("gitReleaseTarget")),1),h(nt,{modelValue:W.value,"onUpdate:modelValue":x[29]||(x[29]=V=>W.value=V),size:"small",placeholder:s(n)("gitTagTargetPlaceholder")},null,8,["modelValue","placeholder"])]),o("div",f_,[o("label",null,a(s(n)("gitReleaseMsg")),1),h(nt,{modelValue:J.value,"onUpdate:modelValue":x[30]||(x[30]=V=>J.value=V),type:"textarea",rows:3,resize:"none",placeholder:s(n)("gitTagMessagePlaceholder")},null,8,["modelValue","placeholder"])])]),_:1},8,["modelValue","title"]),s(Et)?(i(),Xe(Qt,{key:2,items:s(Bn),x:s($t),y:s(wn),onClose:s(Ys)},null,8,["items","x","y","onClose"])):P("",!0)]),_:1},8,["model-value","title"])}}}),md=xt(p_,[["__scopeId","data-v-001797f7"]]),v_={key:0,class:"fw-svn-shell"},h_={class:"fw-svn-head"},m_=["title"],g_=["title"],y_=["title"],w_={class:"fw-svn-headacts"},b_={class:"fw-svn-body"},__={class:"fw-svn-rail"},k_=["onClick"],x_={class:"fw-svn-rail-txt"},C_={key:0,class:"fw-svn-rail-badge"},$_={key:0,class:"fw-svn-rail-op"},S_={class:"fw-svn-content"},E_={key:0,class:"fw-svn-split"},T_={class:"fw-svn-list"},D_={class:"fw-svn-groupbar"},F_={class:"fw-svn-groupname"},R_={class:"fw-svn-selall"},N_=["checked"],P_={key:0,class:"fw-svn-empty"},A_=["title"],M_=["checked","onChange"],O_=["data-code"],L_={class:"fw-svn-path"},B_={key:0,class:"fw-svn-dir"},I_={class:"fw-svn-stext"},j_={class:"fw-svn-rowacts"},V_=["disabled","title","onClick"],z_=["disabled","title","onClick"],U_=["disabled","title","onClick"],H_=["disabled","title","onClick"],W_={class:"fw-svn-detail"},G_={class:"fw-svn-detailhead"},q_={class:"fw-svn-detailtitle"},K_=["placeholder"],X_={class:"fw-svn-bulk"},Y_=["disabled"],J_=["disabled"],Q_=["disabled"],Z_={class:"fw-svn-commit-acts"},e0={class:"fw-svn-hint"},t0=["disabled"],n0={key:1,class:"fw-svn-loglist"},s0={key:0,class:"fw-svn-empty"},o0=["title","onClick"],a0={class:"fw-svn-caret"},i0={class:"fw-svn-log-r"},l0=["title"],r0={class:"fw-svn-log-meta"},c0={key:0,class:"fw-svn-log-msg"},u0={class:"fw-svn-log-cfiles"},d0={key:0,class:"fw-svn-empty"},f0=["title","onClick"],p0={class:"fw-svn-cfile-path"},v0={key:0,class:"fw-svn-cfile-dir"},h0={key:2,class:"fw-svn-cli"},m0={class:"fw-svn-cli-body"},g0={key:1,class:"fw-svn-warn fw-svn-state"},y0={key:2,class:"fw-svn-checkout-form fw-svn-state"},w0={class:"fw-svn-tip"},b0={class:"fw-svn-checkout-row"},_0={class:"fw-svn-checkout-row"},k0={key:3,class:"fw-svn-empty fw-svn-state"},x0={class:"fw-svn-diffwrap"},C0={class:"fw-svn-blame"},$0={class:"fw-svn-co-form"},S0={class:"fw-svn-co-label"},E0={class:"fw-svn-co-label"},T0=ht({__name:"SvnPanel",props:{modelValue:{type:Boolean},dir:{}},setup(t){const e=t,{t:n}=Bt(),l=[{key:"changes",icon:"fileText",label:"svnRailChanges"},{key:"log",icon:"clock",label:"svnRailLog"},{key:"output",icon:"terminal",label:"svnOutput"}],c=m("changes"),u=m(null),v=m([]),d=m(new Set),p=m(""),w=m(!1),b=m(!1),$=m(""),L=m([]),M=m(!1),A=m(!1),I=m(""),U=m([]),C=m(!1),Z=m(""),G=m([]),F=m(!1),de=m(""),j=m(""),he=B(()=>(u.value?.root??e.dir).replace(/\\/g,"/")),Ee=B(()=>v.value.length>0&&d.value.size===v.value.length);function ve(T){return T!=="changes"?"":v.value.length?String(v.value.length):""}function ne(T){c.value=T,T==="log"&&!L.value.length&&ce()}function ie(T){const K=T.lastIndexOf("/");return K<0?"":T.slice(0,K+1)}function Se(T){const K=T.lastIndexOf("/");return K<0?T:T.slice(K+1)}function Ve(T){return T.split(`
`)[0]??""}async function we(){u.value=null,v.value=[],d.value=new Set,$.value="",L.value=[],c.value="changes";try{u.value=await ps(e.dir),u.value.inRepo&&u.value.svnAvailable&&await J()}catch(T){X("error",T.message)}}async function Ne(T,K=!1){if(w.value)return null;w.value=!0,c.value="output";try{const S=await Jt(e.dir,T),q=[S.stdout,S.stderr].filter(Boolean).join(`
`).trim();return $.value=`$ svn ${T.join(" ")}

${q||n("svnNoOutput")}`,S.code!==0?X("error",(S.stderr||n("svnFailed")).split(`
`)[0].slice(0,200)):!K&&S.stdout&&X("ok",S.stdout.split(`
`)[0].slice(0,200)),S}catch(S){return X("error",S.message),null}finally{w.value=!1}}function W(T){T&&($.value=`${T}

${$.value}`)}async function J(){const T=await Jt(e.dir,["status"]),K=[];for(const q of(T.stdout||"").split(`
`)){if(!q.trim())continue;const De=q.slice(0,8),re=q.slice(8).trim();if(!re)continue;const ct=(De[0]??" ").trim();K.push({code:ct,path:re.split(" -> ")[0],statusText:z(ct)})}v.value=K;const S=new Set(K.map(q=>q.path));d.value=new Set([...d.value].filter(q=>S.has(q)))}function z(T){return{A:n("svnStAdded"),M:n("svnStModified"),D:n("svnStDeleted"),R:n("svnStReplaced"),C:n("svnStConflicted"),"!":n("svnStMissing"),"~":n("svnStObstructed"),"?":n("svnStUnversioned"),I:n("svnStIgnored")," ":"",K:n("svnStLocked")}[T]??T}function ee(T){const K=new Set(d.value);K.has(T)?K.delete(T):K.add(T),d.value=K}function ge(T){const K=T.target.checked;d.value=K?new Set(v.value.map(S=>S.path)):new Set}function je(){ur({kind:"svn",url:u.value?.url??""})}async function Ke(){b.value=!0;try{u.value=await ps(e.dir),u.value.inRepo&&u.value.svnAvailable&&await J()}catch(T){X("error",T.message)}finally{b.value=!1}}async function Ze(){const T=u.value?.revision??null,K=await Ne(["update"],!0);if(!K||K.code!==0)return;const S=Qg(K.stdout),q=Zg(K.stdout);await Ke();const De=u.value?.revision??q,re=S?T?n("svnUpdateSummaryFrom",{from:T,to:De??T,n:S}):n("svnUpdateSummary",{n:S,to:De??"?"}):n("svnAlreadyLatest",{rev:De??T??"?"});W(re),X("ok",re)}async function ye(){const T=await Ne(["cleanup"]);T&&T.code===0&&await J()}async function be(){const T=await Ne(["add",...d.value]);T&&T.code===0&&await J()}async function Ye(T){const K=await Ne(["add","--",T]);K&&K.code===0&&await J()}async function st(T){const K=T.replace(/[\\/]$/,""),S=K.replace(/[\\/][^\\/]+$/,""),q=K.slice(S.length+1),De=await Jt(S,["propget","svn:ignore",S]),re=(De.stdout||"").split(/\r?\n/).map(Ot=>Ot.trim()).filter(Boolean);if(re.includes(q)){De.code===0&&X("ok",n("gitIgnored")),await J();return}const ct=[...re,q].join(`
`),wt=await Jt(S,["propset","svn:ignore",ct,S]);wt.code===0?X("ok",n("gitIgnored")):X("error",(wt.stderr||n("svnFailed")).split(`
`)[0].slice(0,200)),await J()}async function pe(){const T=await Ne(["revert",...d.value]);T&&T.code===0&&await J()}async function ke(){const T=await Ne(["resolve","--accept","working",...d.value]);T&&T.code===0&&await J()}async function qe(){const T=[...d.value],K=["commit","-m",p.value,...T],S=await Ne(K);S&&S.code===0&&(p.value="",d.value=new Set,await J())}async function ce(){M.value=!0;try{const T=await Jt(e.dir,["log","--xml","-v","-l","50"]);L.value=Ie(T.stdout),ut.value=new Set}catch(T){X("error",T.message)}finally{M.value=!1}}function Ie(T){const K=[];try{new DOMParser().parseFromString(T,"application/xml").querySelectorAll("logentry").forEach(q=>{const De=[];q.querySelectorAll("paths > path").forEach(re=>De.push({action:re.getAttribute("action"),text:re.textContent})),K.push({revision:q.getAttribute("revision")??"",author:q.querySelector("author")?.textContent??"",date:q.querySelector("date")?.textContent??"",msg:q.querySelector("msg")?.textContent??"",paths:De})})}catch{}return K}function rt(T){if(!T)return"";const K=new Date(T);return isNaN(K.getTime())?T:K.toLocaleString()}async function yt(T){A.value=!0,I.value=" · "+T;try{const K=await Jt(e.dir,["diff",T]);U.value=(K.stdout||"").split(`
`)}catch(K){U.value=[K.message]}}const ut=m(new Set);function it(T){const K=new Set(ut.value);K.has(T)?K.delete(T):K.add(T),ut.value=K}function Le(T){if(!T)return"";const K=T.replace(/^\//,""),S=K.lastIndexOf("/");return S<0?"":K.slice(0,S+1)}function H(T){if(!T)return"";const K=T.replace(/^\//,"");return K.slice(K.lastIndexOf("/")+1)||K}async function N(T,K){if(K.text){A.value=!0,I.value=` · r${T} ${K.text}`,U.value=[];try{const S=await Jt(e.dir,["diff","-c",T,"--","^"+K.text]);U.value=(S.stdout||"").split(`
`)}catch(S){U.value=[S.message]}}}async function Q(T){C.value=!0,Z.value=" · "+T;try{const K=await Jt(e.dir,["blame","-v",T]);G.value=(K.stdout||"").split(`
`)}catch(K){G.value=[K.message]}}function Te(){de.value||(de.value=u.value?.url??""),j.value||(j.value=u.value?.root??e.dir)}async function O(){const T=de.value.trim(),K=j.value.trim();if(!T||!K)return;const S=K.replace(/[\\/][^\\/]*$/,"")||K;w.value=!0;try{const q=await Jt(S,["checkout",T,K]),De=[q.stdout,q.stderr].filter(Boolean).join(`
`).trim();$.value=`$ svn checkout ${T} ${K}

${De||n("svnNoOutput")}`,q.code===0?(X("ok",n("svnCheckedOut")),F.value=!1,u.value=await ps(K),u.value.inRepo&&await J()):X("error",(q.stderr||n("svnFailed")).split(`
`)[0].slice(0,200))}catch(q){X("error",q.message)}finally{w.value=!1}}return(T,K)=>{const S=An,q=Ss,De=rn;return i(),Xe(De,{"model-value":t.modelValue,title:s(n)("svnPanelTitle"),width:"800px","align-center":"","modal-class":"fw-blur-overlay",class:"fw-svn-dialog","close-on-click-modal":!1,"onUpdate:modelValue":K[10]||(K[10]=re=>T.$emit("update:modelValue",re)),onOpen:we},{default:se(()=>[u.value&&u.value.inRepo&&u.value.svnAvailable?(i(),r("div",v_,[o("div",h_,[o("span",{class:"fw-svn-revpill",title:u.value.revision?"r"+u.value.revision:""},[h(oe,{name:"svn",size:13}),o("b",null,a(u.value.revision?"r"+u.value.revision:"—"),1)],8,m_),o("span",{class:"fw-svn-url",title:u.value.url??""},a(u.value.url||s(n)("svnNoUrl")),9,g_),o("span",{class:"fw-svn-repo",title:u.value.root??""},a(s(n)("svnRepo"))+a(he.value),9,y_),o("span",w_,[h(S,{size:"small",loading:w.value,onClick:Ze},{default:se(()=>[ue(a(s(n)("svnUpdate")),1)]),_:1},8,["loading"]),h(S,{size:"small",disabled:w.value,onClick:ye},{default:se(()=>[ue(a(s(n)("svnCleanup")),1)]),_:1},8,["disabled"]),h(S,{size:"small",onClick:K[0]||(K[0]=re=>F.value=!0)},{default:se(()=>[ue(a(s(n)("svnCheckout")),1)]),_:1}),h(S,{size:"small",loading:b.value,onClick:Ke,title:s(n)("svnRefresh")},{default:se(()=>[h(oe,{name:"refresh",size:13})]),_:1},8,["loading","title"]),h(S,{size:"small",title:s(n)("accTitle"),onClick:je},{default:se(()=>[h(oe,{name:"shield",size:13})]),_:1},8,["title"])])]),o("div",b_,[o("nav",__,[(i(),r(ae,null,Ae(l,re=>o("button",{key:re.key,class:te(["fw-svn-rail-btn",{active:c.value===re.key}]),onClick:ct=>ne(re.key)},[h(oe,{name:re.icon,size:14},null,8,["name"]),o("span",x_,a(s(n)(re.label)),1),ve(re.key)?(i(),r("span",C_,a(ve(re.key)),1)):P("",!0)],10,k_)),64)),K[12]||(K[12]=o("span",{class:"fw-svn-rail-fill"},null,-1)),w.value?(i(),r("div",$_,[K[11]||(K[11]=o("span",{class:"fw-svn-spin"},null,-1)),ue(a(s(n)("svnRunning")),1)])):P("",!0)]),o("section",S_,[c.value==="changes"?(i(),r("div",E_,[o("div",T_,[o("div",D_,[o("span",F_,a(s(n)("svnModifiedCount",{n:v.value.length})),1),o("label",R_,[o("input",{type:"checkbox",checked:Ee.value,onChange:ge},null,40,N_),ue(a(s(n)("svnSelectAll")),1)])]),v.value.length?P("",!0):(i(),r("div",P_,a(s(n)("svnNoChanges")),1)),(i(!0),r(ae,null,Ae(v.value,re=>(i(),r("div",{key:re.path,class:"fw-svn-row",title:re.path},[o("input",{type:"checkbox",checked:d.value.has(re.path),onChange:ct=>ee(re.path)},null,40,M_),o("span",{class:"fw-svn-badge","data-code":re.code.trim()||"·"},a(re.code.trim()||"·"),9,O_),o("span",L_,[ie(re.path)?(i(),r("span",B_,a(ie(re.path)),1)):P("",!0),ue(a(Se(re.path)),1)]),o("span",I_,a(re.statusText),1),o("span",j_,[o("button",{class:"fw-svn-mini",disabled:w.value,title:s(n)("svnDiff"),onClick:_e(ct=>yt(re.path),["stop"])},[h(oe,{name:"code",size:12})],8,V_),o("button",{class:"fw-svn-mini",disabled:w.value,title:s(n)("svnBlame"),onClick:_e(ct=>Q(re.path),["stop"])},[h(oe,{name:"activity",size:12})],8,z_),re.code.trim()==="?"?(i(),r(ae,{key:0},[o("button",{class:"fw-svn-mini",disabled:w.value,title:s(n)("svnAdd"),onClick:_e(ct=>Ye(re.path),["stop"])},[h(oe,{name:"plus",size:12})],8,U_),o("button",{class:"fw-svn-mini",disabled:w.value,title:s(n)("svnIgnore"),onClick:_e(ct=>st(re.path),["stop"])},[h(oe,{name:"eyeOff",size:12})],8,H_)],64)):P("",!0)])],8,A_))),128))]),o("div",W_,[o("div",G_,[o("span",q_,a(s(n)("svnCommitBtn")),1)]),kt(o("textarea",{"onUpdate:modelValue":K[1]||(K[1]=re=>p.value=re),class:"fw-svn-msg",rows:"6",placeholder:s(n)("svnCommitPlaceholder")},null,8,K_),[[Lt,p.value]]),o("div",X_,[o("button",{class:"fw-svn-btn",disabled:w.value||!d.value.size,onClick:be},a(s(n)("svnAdd")),9,Y_),o("button",{class:"fw-svn-btn",disabled:w.value||!d.value.size,onClick:pe},a(s(n)("svnRevert")),9,J_),o("button",{class:"fw-svn-btn",disabled:w.value||!d.value.size,onClick:ke},a(s(n)("svnResolve")),9,Q_)]),o("div",Z_,[o("span",e0,a(d.value.size?s(n)("svnCommitSelected",{n:d.value.size}):s(n)("svnCommitAll")),1),o("button",{class:"fw-svn-btn primary",disabled:w.value||!p.value.trim(),onClick:qe},a(s(n)("svnCommitBtn")),9,t0)])])])):c.value==="log"?(i(),r("div",n0,[L.value.length?P("",!0):(i(),r("div",s0,a(M.value?s(n)("svnLoading"):s(n)("svnLogEmpty")),1)),(i(!0),r(ae,null,Ae(L.value,re=>(i(),r("div",{key:re.revision,class:te(["fw-svn-logitem",{open:ut.value.has(re.revision)}])},[o("div",{class:"fw-svn-log-h",title:s(n)("svnLogToggle"),onClick:ct=>it(re.revision)},[o("span",a0,a(ut.value.has(re.revision)?"▾":"▸"),1),o("span",i0,"r"+a(re.revision),1),o("span",{class:"fw-svn-log-msg1",title:re.msg},a(Ve(re.msg)),9,l0),o("span",r0,[o("span",null,a(re.author),1),o("span",null,a(rt(re.date)),1)])],8,o0),ut.value.has(re.revision)?(i(),r(ae,{key:0},[re.msg?(i(),r("pre",c0,a(re.msg),1)):P("",!0),o("div",u0,[re.paths.length?P("",!0):(i(),r("span",d0,a(s(n)("svnLogNoPaths")),1)),(i(!0),r(ae,null,Ae(re.paths,(ct,wt)=>(i(),r("div",{key:wt,class:"fw-svn-cfile",title:s(n)("svnLogOpenDiff"),onClick:Ot=>N(re.revision,ct)},[o("span",{class:te(["fw-svn-cfile-act","pa-"+(ct.action??"")])},a(ct.action),3),o("span",p0,[Le(ct.text)?(i(),r("span",v0,a(Le(ct.text)),1)):P("",!0),ue(a(H(ct.text)),1)])],8,f0))),128))])],64)):P("",!0)],2))),128))])):(i(),r("div",h0,[o("pre",m0,a($.value||s(n)("svnNoOutput")),1)]))])])])):u.value&&u.value.inRepo&&!u.value.svnAvailable?(i(),r("div",g0,[h(oe,{name:"warning",size:13}),ue(a(s(n)("svnNoCli")),1)])):u.value&&!u.value.inRepo?(i(),r("div",y0,[o("p",w0,a(s(n)("svnNotRepoTip")),1),o("div",b0,[h(q,{modelValue:de.value,"onUpdate:modelValue":K[2]||(K[2]=re=>de.value=re),size:"small",class:"fw-svn-co-url",placeholder:s(n)("svnCheckoutUrlPlaceholder")},null,8,["modelValue","placeholder"])]),o("div",_0,[h(q,{modelValue:j.value,"onUpdate:modelValue":K[3]||(K[3]=re=>j.value=re),size:"small",class:"fw-svn-co-target",placeholder:s(n)("svnCheckoutTargetPlaceholder")},null,8,["modelValue","placeholder"]),h(S,{size:"small",type:"primary",disabled:w.value||!de.value.trim()||!j.value.trim(),onClick:O},{default:se(()=>[ue(a(s(n)("svnCheckout")),1)]),_:1},8,["disabled"])])])):(i(),r("div",k0,a(s(n)("svnLoading")),1)),h(De,{modelValue:A.value,"onUpdate:modelValue":K[4]||(K[4]=re=>A.value=re),title:s(n)("svnDiffTitle")+I.value,width:"800px","align-center":"","modal-class":"fw-blur-overlay","append-to-body":""},{default:se(()=>[o("div",x0,[h(Uo,{lines:U.value,empty:s(n)("gitDiffEmpty")},null,8,["lines","empty"])])]),_:1},8,["modelValue","title"]),h(De,{modelValue:C.value,"onUpdate:modelValue":K[5]||(K[5]=re=>C.value=re),title:s(n)("svnBlameTitle")+Z.value,width:"800px","align-center":"","modal-class":"fw-blur-overlay","append-to-body":""},{default:se(()=>[o("pre",C0,a(G.value.join(`
`)||s(n)("gitDiffEmpty")),1)]),_:1},8,["modelValue","title"]),h(De,{modelValue:F.value,"onUpdate:modelValue":K[9]||(K[9]=re=>F.value=re),title:s(n)("svnCheckout"),width:"560px","align-center":"","modal-class":"fw-blur-overlay","append-to-body":"",onOpen:Te},{footer:se(()=>[h(S,{onClick:K[8]||(K[8]=re=>F.value=!1)},{default:se(()=>[ue(a(s(n)("cancel")),1)]),_:1}),h(S,{type:"primary",disabled:w.value||!de.value.trim()||!j.value.trim(),onClick:O},{default:se(()=>[ue(a(s(n)("svnCheckout")),1)]),_:1},8,["disabled"])]),default:se(()=>[o("div",$0,[o("label",S0,a(s(n)("svnCheckoutUrlPlaceholder")),1),h(q,{modelValue:de.value,"onUpdate:modelValue":K[6]||(K[6]=re=>de.value=re),size:"small"},null,8,["modelValue"]),o("label",E0,a(s(n)("svnCheckoutTargetPlaceholder")),1),h(q,{modelValue:j.value,"onUpdate:modelValue":K[7]||(K[7]=re=>j.value=re),size:"small"},null,8,["modelValue"])])]),_:1},8,["modelValue","title"])]),_:1},8,["model-value","title"])}}}),gd=xt(T0,[["__scopeId","data-v-8297810b"]]),D0={class:"fw-dlg-head"},F0={class:"fw-dlg-badge"},R0={class:"fw-dlg-headtext"},N0={class:"fw-dlg-headtitle"},P0={class:"fw-dlg-headsub"},A0=["onKeydown"],M0={class:"fw-np-menubar"},O0=["onClick","onMouseenter"],L0={key:0,class:"fw-np-dropdown"},B0={key:0,class:"fw-np-sep"},I0=["onClick"],j0={key:0,class:"fw-np-state"},V0={key:1,class:"fw-np-state fw-np-err"},z0=["readonly","wrap"],U0={key:3,class:"fw-np-status"},H0={key:0,class:"fw-np-seg fw-np-ro"},W0={class:"fw-np-seg"},G0={class:"fw-np-seg fw-np-eol"},q0={class:"fw-np-seg"},K0=ht({__name:"TxtEditor",props:{modelValue:{type:Boolean},path:{}},emits:["update:modelValue","saved"],setup(t,{emit:e}){const n=t,l=e,{t:c}=Bt(),u=B({get:()=>n.modelValue,set:N=>l("update:modelValue",N)}),v=B(()=>n.path.slice(Math.max(n.path.lastIndexOf("/"),n.path.lastIndexOf("\\"))+1)),d=m(""),p=m(""),w=m(!1),b=m(!1),$=m(""),L=m(!1),M=m(!1),A=m(null),I=m("utf8"),U=m(!1),C=m("lf"),Z=m(0),G={lf:"Unix (LF)",crlf:"Windows (CRLF)",cr:"Macintosh (CR)"},F=B(()=>G[C.value]),de=B(()=>{const N=I.value==="utf8"?"UTF-8":I.value.toUpperCase();return U.value?`${N} BOM`:N}),j=B({get:()=>Ue.txtWordWrap,set:N=>{Ue.txtWordWrap=N,Hn()}}),he=B({get:()=>Ue.txtShowStatus,set:N=>{Ue.txtShowStatus=N,Hn()}}),Ee=m(""),ve=m(1),ne=m(1);function ie(N){return/\.txt$/i.test(N)}Qe(()=>n.modelValue,async N=>{if(N&&n.path){if(!ie(n.path)){u.value=!1;return}Ie(),await Ve(),await Dt(),Ne(),A.value?.focus()}else Se()});function Se(){d.value="",p.value="",L.value=!1,$.value="",Ee.value="",ve.value=1,ne.value=1}async function Ve(){w.value=!0,$.value="",M.value=!bs(n.path);try{const N=await el(n.path);if(N.binary){$.value=c("vsBinaryHint");return}d.value=N.content,p.value=N.content,I.value=N.encoding,U.value=N.hasBom,C.value=N.eol,Z.value=N.mtime,L.value=!1}catch(N){$.value=c("txtReadError",{msg:N.message})}finally{w.value=!1}}function we(){L.value=d.value!==p.value,Ne()}function Ne(){const N=A.value;if(!N)return;const Q=N.selectionStart,Te=d.value.slice(0,Q);ve.value=Te.split(`
`).length;const O=Te.lastIndexOf(`
`);ne.value=Q-O}async function W(N){const Q=await Xi(n.path,d.value,{key:Fe.key,encoding:I.value,hasBom:U.value,eol:C.value,expectedMtime:Z.value,force:N});Z.value=Q.mtime,p.value=d.value,L.value=!1,X("ok",c("txtSaved")),l("saved"),u.value=!1}async function J(){if(!(M.value||!L.value||b.value)&&ie(n.path)){b.value=!0;try{await W(!1)}catch(N){if(N instanceof Ws&&N.code==="mtime-conflict"){if(b.value=!1,!await Mt({title:c("vsConflictTitle"),message:c("vsConflictMsg",{name:v.value})}))return;try{await W(!0)}catch(Te){X("error",Te.message)}return}X("error",N.message)}finally{b.value=!1}}}function z(){J()}const ee=()=>{const N=A.value;return!N||N.selectionStart===N.selectionEnd};function ge(){const N=A.value;return!N||N.selectionStart===N.selectionEnd?null:{s:N.selectionStart,e:N.selectionEnd}}function je(N,Q,Te){const O=A.value,T=d.value.slice(0,N)+Te+d.value.slice(Q);d.value=T,L.value=T!==p.value,Dt(()=>{O&&(O.focus(),O.selectionStart=O.selectionEnd=N+Te.length,Ne())})}function Ke(){A.value?.focus(),A.value?.select()}async function Ze(){const N=ge();if(!N)return;const Q=d.value.slice(N.s,N.e);try{await navigator.clipboard.writeText(Q)}catch{A.value?.focus(),document.execCommand("copy")}}async function ye(){if(M.value)return;const N=ge();if(!N)return;const Q=d.value.slice(N.s,N.e);try{await navigator.clipboard.writeText(Q)}catch{A.value?.focus(),document.execCommand("cut");return}je(N.s,N.e,"")}function be(){if(M.value)return;const N=ge();N&&je(N.s,N.e,"")}async function Ye(){if(M.value)return;const N=A.value;if(!N)return;const Q=N.selectionStart,Te=N.selectionEnd;try{const O=await navigator.clipboard.readText();je(Q,Te,O)}catch{N.focus(),X("error","当前环境不允许读取剪贴板，请按 Ctrl+V 粘贴")}}function st(){M.value||(A.value?.focus(),document.execCommand("undo"),we())}function pe(){if(M.value)return;const N=A.value;if(!N)return;const Q=new Date().toLocaleString("zh-CN",{hour12:!1});je(N.selectionStart,N.selectionEnd,Q)}const ke=B(()=>[{name:"file",label:"文件",items:[{label:"保存",disabled:()=>M.value||!L.value,action:()=>void J()},{label:"退出",action:()=>void Le()}]},{name:"edit",label:"编辑",items:[{label:"撤销",disabled:()=>M.value,action:()=>st()},{label:"剪切",disabled:()=>M.value||ee(),action:()=>void ye()},{label:"复制",disabled:()=>ee(),action:()=>void Ze()},{label:"粘贴",disabled:()=>M.value,action:()=>void Ye()},{label:"删除",disabled:()=>M.value||ee(),action:()=>be()},{label:"-",sep:!0},{label:"全选",action:()=>Ke()},{label:"时间/日期",disabled:()=>M.value,action:()=>pe()}]},{name:"format",label:"格式",items:[{label:j.value?"☑ 自动换行":"☐ 自动换行",action:()=>{j.value=!j.value}}]},{name:"view",label:"查看",items:[{label:he.value?"☑ 状态栏":"☐ 状态栏",action:()=>{he.value=!he.value}}]},{name:"help",label:"帮助",items:[{label:"关于记事本",action:()=>X("ok","记事本 — DSH 文件工作台文本编辑器")}]}]);function qe(N){Ee.value=Ee.value===N?"":N}function ce(N){Ee.value&&(Ee.value=N)}function Ie(){Ee.value=""}function rt(N,Q){Q.sep||Q.disabled&&Q.disabled()||(Ie(),Q.action?.())}function yt(){Ie()}function ut(){return L.value&&!M.value?Mt({title:c("txtUnsavedTitle"),message:c("txtUnsavedMsg")}).then(N=>N):Promise.resolve(!0)}function it(N){ut().then(Q=>{Q&&N()})}async function Le(){await ut()&&(u.value=!1)}function H(){Se()}return(N,Q)=>{const Te=pf("icon"),O=rn;return i(),Xe(O,{modelValue:u.value,"onUpdate:modelValue":Q[1]||(Q[1]=T=>u.value=T),class:"fw-clone-dialog fw-np-dialog",width:"800px","align-center":"","modal-class":"fw-blur-overlay","close-on-click-modal":!1,"before-close":it,"append-to-body":"",onClose:H},{header:se(()=>[o("div",D0,[o("span",F0,[h(Te,{name:"fileText",size:20})]),o("span",R0,[o("span",N0,a(L.value?"* ":"")+a(v.value),1),o("span",P0,[ue(a(s(c)("txtEditorSub")),1),L.value?(i(),r(ae,{key:0},[ue(" · "+a(s(c)("txtUnsaved")),1)],64)):P("",!0)])])])]),default:se(()=>[o("div",{class:"fw-np",tabindex:"-1",onKeydown:[bt(_e(z,["ctrl","prevent"]),["s"]),bt(_e(pe,["prevent"]),["f5"])]},[o("div",M0,[(i(!0),r(ae,null,Ae(ke.value,T=>(i(),r("div",{key:T.name,class:te(["fw-np-menu",{open:Ee.value===T.name}]),onClick:K=>qe(T.name),onMouseenter:K=>ce(T.name)},[ue(a(T.label)+" ",1),Ee.value===T.name?(i(),r("div",L0,[(i(!0),r(ae,null,Ae(T.items,(K,S)=>(i(),r(ae,{key:S},[K.sep?(i(),r("div",B0)):(i(),r("div",{key:1,class:te(["fw-np-item",{disabled:K.disabled?K.disabled():!1}]),onClick:q=>rt(T.name,K)},a(K.label),11,I0))],64))),128))])):P("",!0)],42,O0))),128))]),w.value?(i(),r("div",j0,[Q[2]||(Q[2]=o("span",{class:"fw-np-spin"},null,-1)),ue(a(s(c)("txtLoading")),1)])):$.value?(i(),r("div",V0,a($.value),1)):kt((i(),r("textarea",{key:2,ref_key:"taRef",ref:A,"onUpdate:modelValue":Q[0]||(Q[0]=T=>d.value=T),class:te(["fw-np-area",{wrap:j.value}]),readonly:M.value,wrap:j.value?"soft":"off",spellcheck:"false",onInput:we,onKeyup:Ne,onClick:Ne,onContextmenu:_e(yt,["prevent"])},null,42,z0)),[[Lt,d.value]]),he.value&&!w.value&&!$.value?(i(),r("div",U0,[M.value?(i(),r("span",H0,a(s(c)("txtReadonly")),1)):P("",!0),Q[3]||(Q[3]=o("span",{class:"fw-np-spacer"},null,-1)),o("span",W0,"Ln "+a(ve.value)+", Col "+a(ne.value),1),Q[4]||(Q[4]=o("span",{class:"fw-np-seg"},"100%",-1)),o("span",G0,a(F.value),1),o("span",q0,a(de.value),1)])):P("",!0)],40,A0),Ee.value?(i(),r("div",{key:0,class:"fw-np-backdrop",onClick:Ie,onContextmenu:_e(Ie,["prevent"])},null,32)):P("",!0)]),_:1},8,["modelValue"])}}}),on=gt({sessionId:null,connected:!1,files:[],running:!1});let cc=!1,Ho=null;const uc="__DSH_FW_SESSION_SSE__",dc={dispose:()=>Cl()};function X0(){const t=globalThis,e=t[uc];if(e&&e!==dc)try{e.dispose()}catch{}t[uc]=dc}function Y0(t){const e=t;if(!(!e||typeof e!="object")&&on.sessionId&&!(e.sessionId&&e.sessionId!==on.sessionId))switch(e.type){case"snapshot":case"files":on.files=Array.isArray(e.files)?e.files:[],on.running=e.running===!0,on.connected=!0;break;case"status":on.running=e.running===!0,on.connected=!0;break}}function J0(t){on.sessionId!==t&&(on.sessionId=t,Xl(t))}function Q0(){if(X0(),Ho)return()=>Cl();cc||(cc=!0,dh(Y0));const t=window.__DSH_FILE_WORKBENCH__;return!t||typeof t.subscribeCurrentSessionId!="function"?()=>{}:(Ho=t.subscribeCurrentSessionId(e=>{e?J0(e):(Xl(null),on.sessionId=null)}),()=>Cl())}function Cl(){try{Ho&&(Ho(),Ho=null)}catch{}Xl(null),on.sessionId=null,on.files=[],on.running=!1,on.connected=!1}function Li(t){const e=t.lastIndexOf(".");return e>0&&e<t.length-1?t.slice(e):""}function fc(t){if(t==null||t<0)return"—";const e=["B","KB","MB","GB","TB"];let n=t,l=0;for(;n>=1024&&l<e.length-1;)n/=1024,l+=1;return`${l===0?n:n>=10?Math.round(n):n.toFixed(1)} ${e[l]}`}const vn=gt({selectionCount:0,canOperate:!0,hasClipboard:!1,isRecycle:!1});let yd=null;function Qa(t){yd=t}function Z0(t,e){yd?.(t,e)}const e2={key:0,class:"fw-fl-tool"},t2={key:1,class:"fw-error"},n2={class:"fw-error-ico"},s2={key:1,class:"fw-table"},o2={key:0,class:"fw-sort"},a2={key:0,class:"fw-sort"},i2={key:0,class:"fw-sort"},l2={key:0,class:"fw-sort"},r2={key:0,class:"fw-vspacer"},c2=["data-path","title","draggable","onMouseenter","onMouseleave","onDragstart","onDragover","onDrop","onClick","onDblclick","onContextmenu"],u2={class:"col-name"},d2={class:"fw-n"},f2={class:"fw-ico"},p2={class:"fw-label"},v2=["title"],h2=["title"],m2={key:2,class:"fw-weak"},g2=["title"],y2={class:"col-size"},w2={class:"col-type"},b2={class:"col-mtime"},_2={key:1,class:"fw-vspacer"},k2={key:2},x2={colspan:4,class:"fw-empty-cell fw-inaccessible"},C2={key:3},$2={colspan:4,class:"fw-empty-cell"},S2=["data-path","title","draggable","onMouseenter","onMouseleave","onDragstart","onDragover","onDrop","onClick","onDblclick","onContextmenu"],E2={class:"fw-ico"},T2={class:"fw-list-name"},D2=["title"],F2=["title"],R2=["title"],N2=["data-path","title","draggable","onMouseenter","onMouseleave","onDragstart","onDragover","onDrop","onClick","onDblclick","onContextmenu"],P2={key:0,class:"fw-tile-thumb"},A2=["src","alt"],M2={key:1,class:"fw-tile-ico"},O2={class:"fw-tile-name"},L2=["title"],B2=["title"],I2={key:4,class:"fw-mode fw-content"},j2=["data-path","title","draggable","onMouseenter","onMouseleave","onDragstart","onDragover","onDrop","onClick","onDblclick","onContextmenu"],V2={class:"fw-ico"},z2={class:"fw-c-main"},U2={class:"fw-c-name"},H2={key:0,class:"fw-broken-tag"},W2={class:"fw-c-type"},G2={class:"fw-c-meta"},q2={key:5,class:"fw-mode fw-tiles"},K2=["data-path","title","draggable","onMouseenter","onMouseleave","onDragstart","onDragover","onDrop","onClick","onDblclick","onContextmenu"],X2={key:0,class:"fw-tile-thumb"},Y2=["src","alt"],J2={key:1,class:"fw-tile-ico"},Q2={class:"fw-t2-body"},Z2={class:"fw-t2-name"},ek={class:"fw-t2-type"},tk={class:"fw-t2-size"},nk={key:6,class:"fw-empty-small"},sk={key:3,class:"fw-refreshing"},ok={class:"fw-dlg-head"},ak={class:"fw-dlg-badge"},ik={class:"fw-dlg-headtext"},lk={class:"fw-dlg-headtitle"},rk={class:"fw-dlg-headsub"},ck={key:0,class:"fw-prop-body"},uk={class:"fw-prop-row"},dk={class:"k"},fk={class:"v"},pk={class:"fw-prop-row"},vk={class:"k"},hk={class:"v"},mk={class:"fw-prop-row"},gk={class:"k"},yk={class:"v"},wk={class:"fw-prop-row fw-prop-row-wide"},bk={class:"k"},_k=["title"],kk={class:"fw-gitdiff-body"},xk=40,Ck=28,$k=ht({__name:"FileListPane",setup(t){const{t:e}=Bt(),n=B(()=>le.view==="recycle"),l=m(Ue.sortKey),c=m(Ue.asc),u=m(null);let v=0,d=0;function p(g){return{width:`${Ue.colWidths[g]}px`}}function w(g,k){u.value=k,v=g.clientX,d=Ue.colWidths[k],document.addEventListener("mousemove",b),document.addEventListener("mouseup",$)}function b(g){const k=u.value;k&&(Ue.colWidths[k]=Math.max(xk,d+(g.clientX-v)))}function $(){u.value&&Hn(),u.value=null,document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",$)}Pt(()=>{document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",$)});const L=B(()=>n.value?"recycle":le.listing?.path??""),M=m(ol(L.value)),A=B(()=>{const g=M.value;return g==="huge"||g==="large"||g==="medium"||g==="small"?"grid":g}),I=B(()=>{const g=M.value;return g==="small"?20:g==="medium"?32:g==="large"?48:72});Qe(()=>Ue.view,g=>{M.value!==g&&(M.value=g)}),Qe(L,g=>{const k=ol(g);M.value!==k&&(M.value=k)}),Qe(M,g=>Va.value=g,{immediate:!0}),Qe(()=>Ue.sortKey,g=>{l.value!==g&&(l.value=g)}),Qe(()=>Ue.asc,g=>{c.value!==g&&(c.value=g)});const{cmOpen:U,cmX:C,cmY:Z,cmItems:G,openMenu:F}=pn(),de=m(!1),j=m(null),he=m(!1),Ee=m(""),ve=m(!1),ne=m(!1),ie=m(!1),Se=m(!1),Ve=m("");function we(g){Ve.value=g,Se.value=!0}function Ne(){Ft()}function W(g){l.value===g?c.value=!c.value:(l.value=g,c.value=g!=="mtime"),Ue.sortKey=l.value,Ue.asc=c.value,Hn()}function J(g){if(g.isDir)return e("typeFolder");const k=g.name.lastIndexOf("."),xe=k>0?g.name.slice(k+1).toUpperCase():"";return xe?`${xe} ${e("typeFile")}`:e("typeFile")}const z=/\.(png|jpe?g|gif|svg|webp|bmp|ico|avif)$/i;function ee(g){return!g.isDir&&z.test(g.name)}function ge(g){if(Ue.showExtensions||g.isDir)return g.name;const k=g.name.lastIndexOf(".");return k>0?g.name.slice(0,k):g.name}function je(g){if(g.isDir)return"";const k=g.size;if(k===void 0)return"—";const xe=["B","KB","MB","GB","TB"];let fe=k,Me=0;for(;fe>=1024&&Me<xe.length-1;)fe/=1024,Me+=1;return`${Me===0?fe:fe>=10?Math.round(fe):fe.toFixed(1)} ${xe[Me]}`}function Ke(g){if(g.mtime===void 0)return"";try{return new Date(g.mtime).toLocaleString(void 0,{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})}catch{return new Date(g.mtime).toLocaleString()}}function Ze(g){return g.path}const ye={"":"",untracked:"?",added:"A",modified:"M",deleted:"D"};function be(g){return dd(le.listing?.path??"",g.name)}function Ye(g){return ye[be(g)]}function st(g){const k=be(g);return k==="untracked"?e("gitBadgeUntracked"):k==="added"?e("gitBadgeAdded"):k==="deleted"?e("gitBadgeDeleted"):k==="modified"?e("gitBadgeModified"):""}function pe(g){return fd(le.listing?.path??"",g.name)}function ke(g){return ye[pe(g)]}function qe(g){const k=pe(g);return k==="untracked"?e("gitBadgeUntracked"):k==="added"?e("gitBadgeAdded"):k==="deleted"?e("gitBadgeDeleted"):k==="modified"?e("gitBadgeModified"):""}const ce=B(()=>{const g=[...le.listing?.entries??[]],k={name:(xe,fe)=>xe.name.localeCompare(fe.name,void 0,{sensitivity:"base"}),size:(xe,fe)=>(xe.size??-1)-(fe.size??-1),type:(xe,fe)=>{const Me=R=>R.isDir?"0-folder":R.name.slice(R.name.lastIndexOf(".")).toLowerCase();return(J(xe)+Me(xe)).localeCompare(J(fe)+Me(fe))},mtime:(xe,fe)=>(xe.mtime??0)-(fe.mtime??0)};return g.sort((xe,fe)=>{if(xe.isDir!==fe.isDir)return xe.isDir?-1:1;let Me=k[l.value](xe,fe);return Me===0&&(Me=xe.name.localeCompare(fe.name,void 0,{sensitivity:"base"})),c.value||(Me=-Me),Me}),g}),Ie=m(""),rt=B(()=>{const g=Ie.value.trim().toLowerCase();return ce.value.filter(k=>!Ue.showHidden&&k.hidden?!1:g?k.name.toLowerCase().includes(g):!0)}),yt=B(()=>le.listing?.inaccessible?le.listing.inaccessible:rt.value.length===0&&Ie.value?e("filterEmpty"):n.value?e("recycleEmptyList"):e("emptyDir")),ut=m(null),it=m(null);function Le(){it.value?.click()}async function H(g){const k=g.target,xe=k.files;xe?.length&&le.listing&&await cn(xe,le.listing.path),k.value=""}const N=B(()=>rt.value.length),Q=Cg(ut,N,Ck),Te=B(()=>rt.value.slice(Q.range.value.start,Q.range.value.end));Qe(()=>le.listing?.path,()=>{ut.value&&(ut.value.scrollTop=0)}),Qe(()=>le.listing?.path,g=>{g&&!n.value&&(ks(g),so(g))},{immediate:!0});const O=m(new Set),T=m(""),K=m("");function S(g,k){if(g.shiftKey&&K.value){const xe=rt.value.map(R=>R.path),fe=xe.indexOf(K.value),Me=xe.indexOf(k.path);if(fe!==-1&&Me!==-1){const[R,Re]=fe<Me?[fe,Me]:[Me,fe],Xt=new Set;for(let Ht=R;Ht<=Re;Ht++)Xt.add(xe[Ht]);O.value=Xt}T.value=k.path;return}if(g.ctrlKey||g.metaKey){const xe=new Set(O.value),fe=xe.has(k.path);fe?xe.delete(k.path):xe.add(k.path),O.value=xe,K.value=k.path,T.value=fe?"":k.path;return}O.value=new Set,T.value=k.path,K.value=k.path}function q(g,k){O.value=new Set,T.value=k.path,K.value=k.path,gn(k)}function De(){O.value=new Set,T.value="",K.value=""}function re(g){ut.value?.focus({preventScroll:!0}),!(Ot||g.target.closest(".fw-row, .fw-list-row, .fw-tile, .fw-content-row, .fw-tile2, th"))&&De()}const ct=m(null);let wt=null,Ot=!1;function Mn(g){g.button!==0||!le.listing||g.target.closest(".fw-row, .fw-list-row, .fw-tile, .fw-content-row, .fw-tile2, th, input, textarea")||(wt={x:g.clientX,y:g.clientY},window.addEventListener("mousemove",Gt),window.addEventListener("mouseup",ze,{once:!0}))}function Gt(g){if(!wt||!ut.value)return;const k=ut.value.getBoundingClientRect(),xe=Math.min(wt.x,g.clientX),fe=Math.min(wt.y,g.clientY),Me=Math.max(wt.x,g.clientX),R=Math.max(wt.y,g.clientY);ct.value={x:xe-k.left,y:fe-k.top,w:Me-xe,h:R-fe};const Re=new Set;ut.value.querySelectorAll("[data-path]").forEach(Xt=>{const Ht=Xt.getBoundingClientRect();Ht.left<Me&&Ht.right>xe&&Ht.top<R&&Ht.bottom>fe&&Re.add(Xt.dataset.path??"")}),Re.delete(""),O.value=Re,T.value=""}function ze(){wt&&(wt=null,ct.value=null,window.removeEventListener("mousemove",Gt),Ot=!0,setTimeout(()=>{Ot=!1},0))}function Je(g){if(g.target?.closest("input, textarea, select, [contenteditable='true'], .el-input, .el-textarea"))return;const xe=rt.value;if(!xe.length)return;const fe=xe.map(Re=>Re.path),Me=T.value?fe.indexOf(T.value):K.value?fe.indexOf(K.value):-1;if(g.ctrlKey&&g.shiftKey&&g.key.toLowerCase()==="n"){g.preventDefault(),dn("folder");return}if(g.ctrlKey||g.metaKey){switch(g.key.toLowerCase()){case"a":g.preventDefault(),O.value=new Set(fe);return;case"c":g.preventDefault(),O.value.size?Kt("copy"):T.value&&(ka([T.value]),X("ok",e("menuCopyDone")));return;case"x":g.preventDefault(),O.value.size?Kt("cut"):T.value&&(No([T.value]),X("ok",e("menuCutDone")));return;case"v":g.preventDefault(),le.listing&&es(le.listing.path);return;case"f":g.preventDefault(),lt();return}return}if(g.altKey){g.key==="ArrowUp"?(g.preventDefault(),vl()):g.key==="ArrowLeft"?(g.preventDefault(),Lu()):g.key==="ArrowRight"&&(g.preventDefault(),Bu());return}switch(g.key){case"Backspace":g.preventDefault(),vl();return;case"Delete":g.preventDefault(),xn();return;case"F2":g.preventDefault(),Cn();return;case"F5":g.preventDefault(),n.value?_s():Ft();return;case"Enter":Me>=0&&gn(xe[Me]);return}let R=Me;if(g.key==="ArrowDown")R=Me+1,g.preventDefault();else if(g.key==="ArrowUp")R=Me-1,g.preventDefault();else if(g.key==="Home")R=0,g.preventDefault();else if(g.key==="End")R=fe.length-1,g.preventDefault();else return;R<0||R>=fe.length||(O.value=new Set,T.value=fe[R],K.value=fe[R],ut.value?.querySelector(".fw-row.selected, .fw-list-row.selected, .fw-tile.selected, .fw-content-row.selected, .fw-tile2.selected")?.scrollIntoView({block:"nearest"}))}function et(g){return g?(le.listing?.entries??[]).find(k=>k.path===g)??null:null}function lt(){ut.value?.parentElement?.querySelector(".fw-filter input")?.focus()}function xn(){if(O.value.size){if(n.value){qn([...O.value]);return}Kt("delete");return}const g=et(T.value);g&&Fs(g)}function Cn(){if(n.value||O.value.size)return;const g=et(T.value);g&&Ds(g)}function zt(g){return O.value.size?O.value.has(g.path):g.path===T.value}Qe(()=>le.listing?.path,()=>{De()});const ot=m("");function ft(g){ot.value=g.path}function Ct(g){ot.value===g.path&&(ot.value="")}const On=B(()=>T.value),$n=B(()=>{const g=On.value;return g?(le.listing?.entries??[]).find(k=>k.path===g)??null:null}),Jn=B(()=>{const g=$n.value;if(!g)return le.listing?le.listing.path:"";let xe=g.isDir?e("typeFolder"):(()=>{const fe=g.name.lastIndexOf(".");return fe>0&&fe<g.name.length-1?g.name.slice(fe):e("typeFile")})();return g.mtime!==void 0&&(xe+=` · ${Ke(g)}`),!g.isDir&&g.size!==void 0&&(xe+=` · ${je(g)}`),xe});let mn="";function Sn(g,k){g.dataTransfer&&(mn=k.path,Gg.value=k.path,g.dataTransfer.effectAllowed="move",g.dataTransfer.setData("text/plain",k.path))}function Xs(g){}function Ts(){}async function En(g,k){if(g.preventDefault(),n.value)return;const xe=g.dataTransfer?.files;if(xe?.length){const R=k||le.listing?.path||"";R&&await cn(xe,R);return}const fe=mn;if(mn="",!fe||!k)return;const Me=fe.slice(0,Math.max(fe.lastIndexOf("/"),fe.lastIndexOf("\\")+1));Ln(Me)!==Ln(k)&&(No([fe]),await es(k))}async function cn(g,k){if(!un(k))return;const xe=sn(e("taskUploading"),k);let fe=0,Me=0;for(const R of Array.from(g)){xe.step(e("taskUploading"),R.name,void 0,Li(R.name)||e("typeFile"),R.size);try{await Dp(k,R,Fe.key),fe+=1}catch{Me+=1}}fe&&X("ok",e("uploaded",{count:fe})),Me&&X("error",e("uploadFailed",{count:Me})),Me?xe.fail(`${e("uploadFailed",{count:Me})}${fe?`，成功 ${fe}`:""}`):fe&&xe.done(e("uploaded",{count:fe})),await Ft()}function Ln(g){return g.replace(/[\\/]+/g,"/").replace(/\/+$/,"").toLowerCase()}function Gn(g){return g.isDir?{fileType:e("typeFolder")}:{fileType:Li(g.name)||e("typeFile"),fileSize:g.size}}async function Tn(g){try{const k=await La(g);return k.isDir?{fileType:e("typeFolder")}:{fileType:Li(k.name)||e("typeFile"),fileSize:k.size}}catch{return{}}}async function gn(g){if(n.value){await Rn([g.recycleFullPath??g.path]);return}if(g.isDir){await Vt(g.path);return}try{await sa(g.path)}catch(k){X("error",k.message)}}const yn={openGitPanel:()=>{ne.value=!0},openSvnPanel:()=>{ie.value=!0},openCommit:()=>{const g=le.listing?.path??"";if(!ud(g)){X("error",e("gitNotRepo"));return}ve.value=!0},showGitDiff:g=>{Ee.value=g,he.value=!0},afterMutate:async g=>{await ks(g),await Ft()}};function Qn(g){return wl(le.listing?.path??"",g,yn)}function Dn(g){return bl(le.listing?.path??"",g,yn)}function D(g){const k=document.createElement("a");k.href=bp(g),k.rel="noopener",document.body.appendChild(k),k.click(),k.remove()}function me(g){const k=g.isDir?g.path:g.path.slice(0,Math.max(g.path.lastIndexOf("/"),g.path.lastIndexOf("\\")));xo(k)}function Be(g,k=!0){er(g,{isDir:k})}async function He(g,k,xe){const fe=await ds({title:g,message:e("subagentAsk"),placeholder:e("subagentAskPlaceholder"),initial:"",multiline:!0});if(fe!==null)try{const Me=await Ep(k,xe,fe,on.sessionId??void 0);if(Me.ok){const R=Me.mode==="oneshot"?Me.output??"":"";X("ok",R?R.slice(0,300)+(R.length>300?"…":""):e("subagentSpawned"))}else X("error",Me.error||e("subagentFailed"))}catch(Me){X("error",Me instanceof Error?Me.message:String(Me))}}function Pe(g){He(e("menuSubagent"),g.path,g.isDir)}function Ge(){He(e("menuNewSubagent"),"",!1)}function Et(g,k){if(O.value.has(k.path)||(O.value=new Set,T.value=k.path,K.value=k.path),n.value){F(g,Js(k));return}if(O.value.has(k.path)){const Re=[...O.value],Xt=!bs(k.path),Ht=ro(k.path);F(g,[{label:e("menuMultiCut"),icon:"cut",onClick:()=>Kt("cut"),disabled:Xt},{label:e("menuMultiCopy"),icon:"copy",onClick:()=>Kt("copy")},{label:e("menuMultiDelete"),icon:"trash",onClick:()=>Kt("delete"),disabled:Xt},{label:e("menuMultiCompress"),icon:"archive",onClick:()=>Kt("compress"),disabled:Xt},{separator:!0},{label:e(Ht?"favoriteRemove":"favoriteAdd"),icon:"star",onClick:()=>{const gs=[...O.value],Qs=gs.every(ss=>ro(ss));for(const ss of gs)ro(ss)===Qs&&za(ss);X("ok",e(Qs?"favoriteRemoved":"favoriteAdded"))}},{separator:!0},{label:e("cancel"),icon:"close",onClick:De},{label:`(${Re.length}) ✕ ${e("selectedCount",{count:Re.length})}`,icon:"",onClick:De}]);return}const xe=ro(k.path),fe=!bs(k.path),Me=/\.txt$/i.test(k.name),R=[{label:e("menuOpen"),icon:"arrowRight",onClick:()=>gn(k)},...Wt(k.path)?[]:[{label:e("menuOpenExternal"),icon:"monitor",onClick:()=>Ys(k.path)}]];Me&&R.push({label:e("menuEdit"),icon:"edit",disabled:fe,onClick:()=>we(k.path)}),k.isDir&&R.push({label:e("menuOpenInEditor"),icon:"code",onClick:()=>Be(k.path)}),R.push({separator:!0}),R.push({label:e("menuCut"),icon:"cut",disabled:fe,onClick:()=>{No([k.path]),X("ok",e("menuCutDone"))}},{label:e("menuCopy"),icon:"copy",onClick:()=>{ka([k.path]),X("ok",e("menuCopyDone"))}},{label:e("menuCompress"),icon:"archive",disabled:fe,onClick:()=>Ns(k)},{label:e("menuExtract"),icon:"folderOpen",disabled:fe||k.isDir||!k.name.toLowerCase().endsWith(".zip"),onClick:()=>en(k)},{label:e("menuRename"),icon:"edit",disabled:fe,onClick:()=>Ds(k)},{label:e("menuDelete"),icon:"trash",disabled:fe,onClick:()=>Fs(k)},{separator:!0},{label:e(xe?"favoriteRemove":"favoriteAdd"),icon:"star",onClick:()=>{const Re=za(k.path);X("ok",e(Re?"favoriteAdded":"favoriteRemoved"))}},{label:e("menuDownload"),icon:"download",disabled:k.isDir,onClick:()=>D(k.path)},{label:e("menuOpenTerminal"),icon:"terminal",onClick:()=>me(k)},{label:e("menuSubagent"),icon:"sparkle",onClick:()=>Pe(k)},...Qn(k.path),...Dn(k.path),{separator:!0},{label:e("menuCopyPath"),icon:"link",onClick:()=>So(k.path)},{label:e("menuProperties"),icon:"info",onClick:()=>Zn(k.path)}),F(g,R)}function $t(g){if(!le.listing)return;if(n.value){F(g,[{label:e("menuRefresh"),icon:"refresh",onClick:()=>_s()},{separator:!0},{label:e("recycleEmpty"),icon:"trash",disabled:(le.recycleItems?.length??0)===0,onClick:()=>ts()}]);return}const k=le.listing.path,xe=yl(),fe=!bs(k);F(g,[{label:e("menuRefresh"),icon:"refresh",onClick:Ft},{label:e("menuOpenInEditor"),icon:"code",onClick:()=>Be(k)},{separator:!0},{label:e("menuView"),icon:"eye",children:wn()},{label:e("menuSort"),icon:"sort",children:Fn()},{separator:!0},{label:e("menuPaste"),icon:"download",disabled:!xe||fe,onClick:()=>es(k)},{label:e("menuUpload"),icon:"upload",disabled:fe,onClick:()=>Le()},{label:e("menuNew"),icon:"sparkle",disabled:fe,children:[{label:e("menuNewFolder"),icon:"folder",onClick:()=>dn("folder")},{label:e("menuNewFile"),icon:"file",onClick:()=>dn("file")}]},...Qn(k),...Dn(k),{separator:!0},{label:e("menuOpenTerminal"),icon:"terminal",onClick:()=>xo(k)},{label:e("menuNewSubagent"),icon:"sparkle",onClick:()=>Ge()},{label:e("menuProperties"),icon:"info",onClick:()=>Zn(k)}])}function wn(){const g=M.value,k=(xe,fe)=>({label:xe,checked:g===fe,onClick:()=>{M.value=fe,al(L.value,fe)}});return[k(e("viewHuge"),"huge"),k(e("viewLarge"),"large"),k(e("viewMedium"),"medium"),k(e("viewSmall"),"small"),{separator:!0},k(e("viewList"),"list"),{separator:!0},k(e("viewDetails"),"details"),k(e("viewContent"),"content"),k(e("viewTiles"),"tiles")]}function Bn(g){M.value=g,al(L.value,g)}Ja(Bn),Rt.canSwitchView=!0,$s(()=>{Rt.visible=!!le.listing&&!le.loadErr,Rt.total=rt.value.length,Rt.selected=O.value.size,Rt.text=Jn.value,Rt.view=M.value}),Qa((g,k)=>{const xe=le.listing?.path??"";if(n.value){const fe=O.value.size?[...O.value]:T.value?[T.value]:[];switch(g){case"restore":Rn(fe);break;case"delete":qn(fe);break;case"emptyRecycle":ts();break;case"refresh":_s();break;case"properties":T.value&&Zn(T.value);break}return}switch(g){case"newFolder":dn("folder");break;case"newFile":dn("file");break;case"upload":Le();break;case"cut":case"copy":{O.value.size?Kt(g):T.value&&((g==="cut"?No:ka)([T.value]),X("ok",e(g==="cut"?"menuCutDone":"menuCopyDone")));break}case"paste":xe&&es(xe);break;case"rename":Cn();break;case"delete":xn();break;case"sort":k&&W(k);break;case"view":k&&Bn(k);break;case"toggleExt":Ue.showExtensions=!Ue.showExtensions,Hn();break;case"preview":{const fe=T.value?et(T.value):null;fe&&gn(fe);break}case"refresh":Ft();break;case"properties":T.value&&Zn(T.value);break}}),$s(()=>{vn.selectionCount=O.value.size||(T.value?1:0),vn.canOperate=le.listing?bs(le.listing.path):!1,vn.hasClipboard=yl(),vn.isRecycle=le.view==="recycle"}),Pt(()=>Qa(null)),Pt(()=>{Ja(null),cd()});function Fn(){return[["name",e("sortName")],["mtime",e("sortModified")],["type",e("sortType")],["size",e("sortSize")]].map(([k,xe])=>({label:xe,checked:l.value===k,onClick:()=>W(k)}))}async function Ys(g){if(Wt(g)){X("error",e("remoteNoExternal"));return}try{await Qc(g),X("ok",e("menuOpened"))}catch(k){X("error",k.message)}}async function So(g){try{await navigator.clipboard.writeText(g),X("ok",e("menuPathCopied"))}catch{X("error",e("menuPathCopyFail"))}}function un(g){return bs(g)?!0:(X("error",e("workspaceOutside")),!1)}async function Ds(g){if(!un(g.path))return;const k=(await ds({title:e("renameEntry"),initial:g.name}))?.trim();if(!k)return;const fe=`${g.path.slice(0,Math.max(g.path.lastIndexOf("/"),g.path.lastIndexOf("\\")))}/${k}`,Me=Gn(g),R=sn(e("taskRenaming"),`${g.name} → ${k}`,Me.fileType,Me.fileSize);try{await Oa(g.path,fe,Fe.key),X("ok",e("renamed")),R.done()}catch(Re){X("error",Re.message),R.fail(Re.message)}await Ft()}async function Fs(g){if(n.value){await qn([g.recycleFullPath??g.path]);return}if(!un(g.path)||!await Mt({title:e("deleteTitle"),message:e("confirmDelete",{name:g.name})}))return;const xe=Gn(g),fe=sn(e("taskDeleting"),g.name,xe.fileType,xe.fileSize);try{await Ji(g.path,Fe.key),X("ok",e("deleted")),fe.done()}catch(Me){X("error",Me.message),fe.fail(Me.message)}await Ft()}async function Zn(g){if(n.value){const k=et(g);if(!k)return;const xe=k.name.lastIndexOf(".");j.value={name:k.name,path:k.originalPath||k.path,isDir:k.isDir,ext:xe>0&&xe<k.name.length-1?k.name.slice(xe):"",size:k.size??0,mtime:k.mtime??0},de.value=!0;return}if(le.listing)try{j.value=await La(g),de.value=!0}catch(k){X("error",k.message)}}async function es(g){if(!un(g))return;const k=Kg();if(!k.paths.length)return;if(k.op==="cut"&&k.paths.some(fe=>!bs(fe))){X("error",e("workspaceOutside"));return}const xe=sn(k.op==="cut"?e("taskMoving"):e("taskCopying"),`${k.paths.length} → ${g}`);try{for(const fe of k.paths){const Me=fe.slice(Math.max(fe.lastIndexOf("/"),fe.lastIndexOf("\\"))+1),R=await Tn(fe);if(k.op==="cut"&&!R.fileType){X("error",e("taskSrcMissing",{name:Me})),xe.fail(e("taskSrcMissing",{name:Me})),await Ft();return}const Re=await In(Me,g);xe.step(k.op==="cut"?e("taskMoving"):e("taskCopying"),fe,`→ ${g}`,R.fileType,R.fileSize),k.op==="cut"?await Oa(fe,Re,Fe.key):await Tp(fe,g,Fe.key)}X("ok",k.op==="cut"?e("moved"):e("copied")),xe.done(),qg()}catch(fe){X("error",fe.message),xe.fail(fe.message)}await Ft()}function Rs(g){return le.listing?.entries.find(k=>k.path===g)?.name??null}function Js(g){const k=O.value.has(g.path)?[...O.value]:[g.recycleFullPath??g.path];return[{label:e("recycleRestore"),icon:"undo",onClick:()=>Rn(k)},{label:e("recycleDelete"),icon:"trash",onClick:()=>qn(k)},{separator:!0},{label:e("menuRefresh"),icon:"refresh",onClick:()=>_s()},{separator:!0},{label:e("recycleEmpty"),icon:"trash",disabled:(le.recycleItems?.length??0)===0,onClick:()=>ts()},{separator:!0},{label:e("menuProperties"),icon:"info",onClick:()=>Zn(g.recycleFullPath??g.path)}]}async function Rn(g){if(!g.length)return;const k=sn(e("recycleRestore"),g.length>1?`${g.length} 项`:Rs(g[0])??"");let xe=0;for(const fe of g)try{await mp(fe),xe+=1}catch(Me){k.fail(Me.message),X("error",Me.message)}xe&&(X("ok",e("recycleRestored")),k.done(e("recycleRestored"))),De(),await _s()}async function qn(g){if(!g.length||!await Mt({title:e("recycleDelete"),message:g.length>1?e("recycleDeleteConfirmMulti",{count:g.length}):e("recycleDeleteConfirm",{name:Rs(g[0])??""})}))return;const xe=sn(e("recycleDelete"),`${g.length} 项`);let fe=0;for(const Me of g)try{await gp(Me),fe+=1}catch(R){xe.fail(R.message),X("error",R.message)}fe&&(X("ok",e("recycledDeleted")),xe.done(e("recycledDeleted"))),De(),await _s()}async function ts(){await Xu(),De()}async function Ns(g){if(!un(g.path))return;const k=Gn(g),xe=sn(e("taskCompressing"),g.name,k.fileType,k.fileSize);try{await Mr(g.path,void 0,Fe.key),X("ok",e("compressed")),xe.done()}catch(fe){X("error",fe.message),xe.fail(fe.message)}await Ft()}async function en(g){const k=le.listing?.path??"";if(!k||!un(k))return;const xe=Gn(g),fe=sn(e("taskExtracting"),g.name,xe.fileType,xe.fileSize);try{const Me=await Fp(g.path,k,Fe.key);X("ok",e("extracted",{count:Me.count})),fe.done(e("extracted",{count:Me.count}))}catch(Me){X("error",`${e("extractFailed")}：${Me.message}`),fe.fail(Me.message)}await Ft()}async function Kt(g){const k=[...O.value];if(!k.length)return;if(g!=="copy"&&k.some(fe=>!bs(fe))){X("error",e("workspaceOutside"));return}const xe=g==="cut"?sn(e("taskMoving"),`${k.length} 项`):g==="copy"?sn(e("taskCopying"),`${k.length} 项`):g==="delete"?sn(e("taskDeleting"),`${k.length} 项`):sn(e("taskCompressing"),`${k.length} 项`);try{if(g==="cut")No(k),X("ok",e("menuCutDone"));else if(g==="copy")ka(k),X("ok",e("menuCopyDone"));else if(g==="delete"){if(!await Mt({title:e("deleteTitle"),message:e("confirmDelete",{name:`${k.length} 项`})}))return;for(const Me of k)try{const R=await Tn(Me);await Ji(Me,Fe.key),xe.step(e("taskDeleting"),Me,void 0,R.fileType,R.fileSize)}catch{}X("ok",e("deleted")),xe.done()}else if(g==="compress"){for(const fe of k)try{const Me=await Tn(fe);await Mr(fe,void 0,Fe.key),xe.step(e("taskCompressing"),fe,void 0,Me.fileType,Me.fileSize)}catch{}X("ok",e("compressed")),xe.done()}}catch(fe){X("error",fe.message),xe.fail(fe.message)}De(),await Ft()}async function ns(g){return In(g,le.listing?.path??"")}async function In(g,k){const xe=k===le.listing?.path?new Set((le.listing?.entries??[]).map(gs=>gs.name.toLowerCase())):null,fe=g.lastIndexOf("."),Me=fe>0?g.slice(0,fe):g,R=fe>0?g.slice(fe):"";let Re=g,Xt=2;for(;xe&&xe.has(Re.toLowerCase());)Re=`${Me} (${Xt})${R}`,Xt+=1;const Ht=k.includes("\\")?"\\":"/";return`${k.replace(/[\\/]+$/,"")}${Ht}${Re}`}async function dn(g){if(!le.listing||!un(le.listing.path))return;const k=e(g==="folder"?"newFolderName":"newFileName"),xe=g==="folder"?k:`${k}.txt`;let fe=await ns(xe);try{g==="folder"?await Ma(fe,Fe.key):await Jc(fe,Fe.key),X("ok",e(g==="folder"?"createdFolder":"createdFile"))}catch(Me){X("error",Me.message),await Ft();return}await Ft()}return(g,k)=>{const xe=Ss,fe=An,Me=rn;return i(),r("div",{class:"fw-fl",onKeydown:Je},[o("input",{ref_key:"fileInputRef",ref:it,type:"file",multiple:"",class:"fw-hidden-input",onChange:H},null,544),s(le).listing&&!s(le).loadErr?(i(),r("div",e2,[h(xe,{modelValue:Ie.value,"onUpdate:modelValue":k[0]||(k[0]=R=>Ie.value=R),size:"small",clearable:"",placeholder:s(e)("filterPlaceholder"),class:"fw-filter"},{prefix:se(()=>[h(oe,{name:"search",size:14,class:"fw-search-ico"})]),_:1},8,["modelValue","placeholder"])])):P("",!0),s(le).loadErr?(i(),r("div",t2,[o("span",n2,[h(oe,{name:"warning",size:16})]),o("span",null,a(s(le).loadErr),1),o("button",{class:"fw-retry",onClick:k[1]||(k[1]=R=>s(Ft)())},a(s(e)("retry")),1)])):s(le).listing?(i(),r("div",{key:2,ref_key:"wrapRef",ref:ut,class:"fw-table-wrap",tabindex:"0",onScroll:k[12]||(k[12]=(...R)=>s(Q).onScroll&&s(Q).onScroll(...R)),onClick:re,onContextmenu:_e($t,["prevent"]),onDragover:_e(Ts,["prevent"]),onDrop:k[13]||(k[13]=_e(R=>En(R,null),["prevent"])),onMousedown:Mn},[ct.value?(i(),r("div",{key:0,class:"fw-band",style:_t({left:ct.value.x+"px",top:ct.value.y+"px",width:ct.value.w+"px",height:ct.value.h+"px"})},null,4)):P("",!0),A.value==="details"?(i(),r("table",s2,[o("thead",null,[o("tr",null,[o("th",{class:te(["col-name",{active:l.value==="name"}]),style:_t(p("name")),onClick:k[4]||(k[4]=R=>W("name"))},[ue(a(s(e)("colName")),1),l.value==="name"?(i(),r("span",o2,a(c.value?"▲":"▼"),1)):P("",!0),o("span",{class:te(["fw-col-resize",{on:u.value==="name"}]),onMousedown:k[2]||(k[2]=_e(R=>w(R,"name"),["prevent","stop"])),onClick:k[3]||(k[3]=_e(()=>{},["stop"]))},null,34)],6),o("th",{class:te(["col-size",{active:l.value==="size"}]),style:_t(p("size")),onClick:k[7]||(k[7]=R=>W("size"))},[ue(a(s(e)("colSize")),1),l.value==="size"?(i(),r("span",a2,a(c.value?"▲":"▼"),1)):P("",!0),o("span",{class:te(["fw-col-resize",{on:u.value==="size"}]),onMousedown:k[5]||(k[5]=_e(R=>w(R,"size"),["prevent","stop"])),onClick:k[6]||(k[6]=_e(()=>{},["stop"]))},null,34)],6),o("th",{class:te(["col-type",{active:l.value==="type"}]),style:_t(p("type")),onClick:k[10]||(k[10]=R=>W("type"))},[ue(a(s(e)("colType")),1),l.value==="type"?(i(),r("span",i2,a(c.value?"▲":"▼"),1)):P("",!0),o("span",{class:te(["fw-col-resize",{on:u.value==="type"}]),onMousedown:k[8]||(k[8]=_e(R=>w(R,"type"),["prevent","stop"])),onClick:k[9]||(k[9]=_e(()=>{},["stop"]))},null,34)],6),o("th",{class:te(["col-mtime",{active:l.value==="mtime"}]),onClick:k[11]||(k[11]=R=>W("mtime"))},[ue(a(s(e)("colModified")),1),l.value==="mtime"?(i(),r("span",l2,a(c.value?"▲":"▼"),1)):P("",!0)],2)])]),o("tbody",null,[s(Q).range.value.padBefore?(i(),r("tr",r2,[o("td",{colspan:4,style:_t({height:s(Q).range.value.padBefore+"px"})},null,4)])):P("",!0),(i(!0),r(ae,null,Ae(Te.value,R=>(i(),r("tr",{key:R.path,class:te(["fw-row",{"is-dir":R.isDir,hidden:R.hidden,broken:R.broken,selected:zt(R)}]),"data-path":R.path,title:Ze(R),draggable:!n.value,onMouseenter:Re=>ft(R),onMouseleave:Re=>Ct(R),onDragstart:Re=>Sn(Re,R),onDragover:_e(Re=>R.isDir&&(R.path,void 0),["prevent"]),onDrop:_e(Re=>R.isDir&&En(Re,R.path),["prevent","stop"]),onClick:Re=>S(Re,R),onDblclick:Re=>q(Re,R),onContextmenu:_e(Re=>Et(Re,R),["prevent","stop"])},[o("td",u2,[o("span",d2,[o("span",f2,[h(oe,{name:R.isDir?"folder":"file",size:13},null,8,["name"])]),o("span",p2,a(ge(R)),1),be(R)?(i(),r("span",{key:0,class:te(["fw-git-badge","st-"+be(R)]),title:st(R)},[h(oe,{name:"git",size:10}),ue(a(Ye(R)),1)],10,v2)):pe(R)?(i(),r("span",{key:1,class:te(["fw-git-badge","st-"+pe(R)]),title:qe(R)},[h(oe,{name:"svn",size:10}),ue(a(ke(R)),1)],10,h2)):P("",!0),R.hidden?(i(),r("span",m2,"●")):P("",!0),R.broken?(i(),r("span",{key:3,class:"fw-broken-tag",title:s(e)("brokenLink")},"broken",8,g2)):P("",!0)])]),o("td",y2,a(je(R)),1),o("td",w2,a(J(R)),1),o("td",b2,a(Ke(R)),1)],42,c2))),128)),s(Q).range.value.padAfter?(i(),r("tr",_2,[o("td",{colspan:4,style:_t({height:s(Q).range.value.padAfter+"px"})},null,4)])):P("",!0),s(le).listing.inaccessible?(i(),r("tr",k2,[o("td",x2,a(s(le).listing.inaccessible),1)])):rt.value.length?P("",!0):(i(),r("tr",C2,[o("td",$2,a(yt.value),1)]))])])):A.value==="list"?(i(),r("div",{key:2,class:"fw-mode fw-list",style:_t({paddingTop:s(Q).range.value.padBefore+"px",paddingBottom:s(Q).range.value.padAfter+"px"})},[(i(!0),r(ae,null,Ae(Te.value,R=>(i(),r("div",{key:R.path,class:te(["fw-list-row",{"is-dir":R.isDir,hidden:R.hidden,broken:R.broken,selected:zt(R)}]),"data-path":R.path,title:Ze(R),draggable:!n.value,onMouseenter:Re=>ft(R),onMouseleave:Re=>Ct(R),onDragstart:Re=>Sn(Re,R),onDragover:_e(Re=>R.isDir&&(R.path,void 0),["prevent"]),onDrop:_e(Re=>R.isDir&&En(Re,R.path),["prevent","stop"]),onClick:Re=>S(Re,R),onDblclick:Re=>q(Re,R),onContextmenu:_e(Re=>Et(Re,R),["prevent","stop"])},[o("span",E2,[h(oe,{name:R.isDir?"folder":"file",size:14},null,8,["name"])]),o("span",T2,a(ge(R)),1),be(R)?(i(),r("span",{key:0,class:te(["fw-git-badge","st-"+be(R)]),title:st(R)},[h(oe,{name:"git",size:10}),ue(a(Ye(R)),1)],10,D2)):pe(R)?(i(),r("span",{key:1,class:te(["fw-git-badge","st-"+pe(R)]),title:qe(R)},[h(oe,{name:"svn",size:10}),ue(a(ke(R)),1)],10,F2)):P("",!0),R.broken?(i(),r("span",{key:2,class:"fw-broken-tag",title:s(e)("brokenLink")},"broken",8,R2)):P("",!0)],42,S2))),128)),s(le).listing.inaccessible||!rt.value.length?(i(),r("div",{key:0,class:te(["fw-empty-cell",{"fw-inaccessible":!!s(le).listing.inaccessible}])},a(yt.value),3)):P("",!0)],4)):A.value==="grid"?(i(),r("div",{key:3,class:te(["fw-mode fw-grid","fw-grid-"+M.value])},[(i(!0),r(ae,null,Ae(rt.value,R=>(i(),r("div",{key:R.path,class:te(["fw-tile",{"is-dir":R.isDir,hidden:R.hidden,selected:zt(R)}]),"data-path":R.path,title:Ze(R),draggable:!n.value,onMouseenter:Re=>ft(R),onMouseleave:Re=>Ct(R),onDragstart:Re=>Sn(Re,R),onDragover:_e(Re=>R.isDir&&(R.path,void 0),["prevent"]),onDrop:_e(Re=>R.isDir&&En(Re,R.path),["prevent","stop"]),onClick:Re=>S(Re,R),onDblclick:Re=>q(Re,R),onContextmenu:_e(Re=>Et(Re,R),["prevent","stop"])},[ee(R)?(i(),r("span",P2,[o("img",{src:s(Ar)(R.path),alt:R.name,loading:"lazy",draggable:"false"},null,8,A2)])):(i(),r("span",M2,[h(oe,{name:R.isDir?"folder":"file",size:I.value},null,8,["name","size"])])),o("span",O2,[ue(a(ge(R)),1),be(R)?(i(),r("span",{key:0,class:te(["fw-git-badge","st-"+be(R)]),title:st(R)},[h(oe,{name:"git",size:10}),ue(a(Ye(R)),1)],10,L2)):pe(R)?(i(),r("span",{key:1,class:te(["fw-git-badge","st-"+pe(R)]),title:qe(R)},[h(oe,{name:"svn",size:10}),ue(a(ke(R)),1)],10,B2)):P("",!0)])],42,N2))),128)),s(le).listing.inaccessible||!rt.value.length?(i(),r("div",{key:0,class:te(["fw-empty-cell",{"fw-inaccessible":!!s(le).listing.inaccessible}])},a(yt.value),3)):P("",!0)],2)):A.value==="content"?(i(),r("div",I2,[(i(!0),r(ae,null,Ae(rt.value,R=>(i(),r("div",{key:R.path,class:te(["fw-content-row",{"is-dir":R.isDir,hidden:R.hidden,selected:zt(R)}]),"data-path":R.path,title:Ze(R),draggable:!n.value,onMouseenter:Re=>ft(R),onMouseleave:Re=>Ct(R),onDragstart:Re=>Sn(Re,R),onDragover:_e(Re=>R.isDir&&(R.path,void 0),["prevent"]),onDrop:_e(Re=>R.isDir&&En(Re,R.path),["prevent","stop"]),onClick:Re=>S(Re,R),onDblclick:Re=>q(Re,R),onContextmenu:_e(Re=>Et(Re,R),["prevent","stop"])},[o("span",V2,[h(oe,{name:R.isDir?"folder":"file",size:20},null,8,["name"])]),o("span",z2,[o("span",U2,[ue(a(ge(R)),1),R.broken?(i(),r("span",H2,"broken")):P("",!0)]),o("span",W2,a(s(e)("colType"))+": "+a(J(R)),1)]),o("span",G2,[o("span",null,a(s(e)("colModified"))+": "+a(Ke(R)),1),o("span",null,a(s(e)("colSize"))+": "+a(R.isDir?"":je(R)),1)])],42,j2))),128)),s(le).listing.inaccessible||!rt.value.length?(i(),r("div",{key:0,class:te(["fw-empty-cell",{"fw-inaccessible":!!s(le).listing.inaccessible}])},a(yt.value),3)):P("",!0)])):A.value==="tiles"?(i(),r("div",q2,[(i(!0),r(ae,null,Ae(rt.value,R=>(i(),r("div",{key:R.path,class:te(["fw-tile2",{"is-dir":R.isDir,hidden:R.hidden,selected:zt(R)}]),"data-path":R.path,title:Ze(R),draggable:!n.value,onMouseenter:Re=>ft(R),onMouseleave:Re=>Ct(R),onDragstart:Re=>Sn(Re,R),onDragover:_e(Re=>R.isDir&&(R.path,void 0),["prevent"]),onDrop:_e(Re=>R.isDir&&En(Re,R.path),["prevent","stop"]),onClick:Re=>S(Re,R),onDblclick:Re=>q(Re,R),onContextmenu:_e(Re=>Et(Re,R),["prevent","stop"])},[ee(R)?(i(),r("span",X2,[o("img",{src:s(Ar)(R.path),alt:R.name,loading:"lazy",draggable:"false"},null,8,Y2)])):(i(),r("span",J2,[h(oe,{name:R.isDir?"folder":"file",size:34},null,8,["name"])])),o("span",Q2,[o("span",Z2,a(ge(R)),1),o("span",ek,a(J(R)),1),o("span",tk,a(R.isDir?"":je(R)),1)])],42,K2))),128)),s(le).listing.inaccessible||!rt.value.length?(i(),r("div",{key:0,class:te(["fw-empty-cell",{"fw-inaccessible":!!s(le).listing.inaccessible}])},a(yt.value),3)):P("",!0)])):P("",!0),s(le).listing.truncated?(i(),r("div",nk,a(s(e)("resultsSuffixTruncated")),1)):P("",!0)],544)):P("",!0),s(le).loading?(i(),r("div",sk,[...k[24]||(k[24]=[o("div",{class:"fw-refreshing-spinner"},null,-1)])])):P("",!0),s(U)?(i(),Xe(Qt,{key:4,items:s(G),x:s(C),y:s(Z),onClose:k[14]||(k[14]=R=>U.value=!1)},null,8,["items","x","y"])):P("",!0),h(Me,{modelValue:de.value,"onUpdate:modelValue":k[16]||(k[16]=R=>de.value=R),class:"fw-prop-dialog fw-clone-dialog",width:"420px","align-center":"","modal-class":"fw-blur-overlay","close-on-click-modal":!1},{header:se(()=>[o("div",ok,[o("span",ak,[h(oe,{name:j.value?.isDir?"folder":"file",size:20},null,8,["name"])]),o("span",ik,[o("span",lk,a(s(e)("menuProperties")),1),o("span",rk,a(j.value?.name),1)])])]),footer:se(()=>[h(fe,{type:"primary",onClick:k[15]||(k[15]=R=>de.value=!1)},{default:se(()=>[ue(a(s(e)("confirmOk")),1)]),_:1})]),default:se(()=>[j.value?(i(),r("div",ck,[o("div",uk,[o("span",dk,a(s(e)("propKind")),1),o("span",fk,a(j.value.isDir?s(e)("typeFolder"):j.value.ext||s(e)("typeFile")),1)]),o("div",pk,[o("span",vk,a(s(e)("propSize")),1),o("span",hk,a(je({isDir:j.value.isDir,size:j.value.size})),1)]),o("div",mk,[o("span",gk,a(s(e)("propModified")),1),o("span",yk,a(Ke({mtime:j.value.mtime})),1)]),o("div",wk,[o("span",bk,a(s(e)("propPath")),1),o("span",{class:"v mono",title:j.value.path},a(j.value.path),9,_k)])])):P("",!0)]),_:1},8,["modelValue"]),h(Me,{modelValue:he.value,"onUpdate:modelValue":k[18]||(k[18]=R=>he.value=R),class:"fw-gitdiff-dialog",title:s(e)("gitDiffTitle"),width:"680px","close-on-click-modal":!1},{footer:se(()=>[h(fe,{type:"primary",onClick:k[17]||(k[17]=R=>he.value=!1)},{default:se(()=>[ue(a(s(e)("gitDiffClose")),1)]),_:1})]),default:se(()=>[o("pre",kk,a(Ee.value||s(e)("gitDiffEmpty")),1)]),_:1},8,["modelValue","title"]),h(pd,{modelValue:ve.value,"onUpdate:modelValue":k[19]||(k[19]=R=>ve.value=R),dir:n.value?"":s(le).listing?.path??"",onDone:k[20]||(k[20]=R=>s(ks)(s(le).listing?.path??""))},null,8,["modelValue","dir"]),h(md,{modelValue:ne.value,"onUpdate:modelValue":k[21]||(k[21]=R=>ne.value=R),dir:n.value?"":s(le).listing?.path??""},null,8,["modelValue","dir"]),h(gd,{modelValue:ie.value,"onUpdate:modelValue":k[22]||(k[22]=R=>ie.value=R),dir:n.value?"":s(le).listing?.path??""},null,8,["modelValue","dir"]),h(K0,{modelValue:Se.value,"onUpdate:modelValue":k[23]||(k[23]=R=>Se.value=R),path:Ve.value,onSaved:Ne},null,8,["modelValue","path"])],32)}}}),Sk=xt($k,[["__scopeId","data-v-c2b328cc"]]),Ek={key:0,class:"fw-err"},Tk={class:"fw-tp-sec"},Dk={key:0,class:"fw-tp-grid"},Fk=["data-path","title","onClick","onDblclick","onContextmenu"],Rk={class:"fw-drive-ico"},Nk={class:"fw-drive-body"},Pk={class:"fw-drive-name"},Ak={class:"fw-drive-bar"},Mk={class:"fw-drive-cap"},Ok={key:0,class:"fw-tp-empty"},Lk={key:1,class:"fw-tp-table"},Bk={class:"col-name"},Ik={class:"col-type"},jk={class:"col-total"},Vk={class:"col-free"},zk={class:"col-fs"},Uk=["data-path","title","onClick","onDblclick","onContextmenu"],Hk={class:"col-name"},Wk={class:"fw-tp-n"},Gk={class:"fw-tp-ico"},qk={class:"fw-tp-label"},Kk={class:"col-type"},Xk={class:"col-total"},Yk={class:"col-free"},Jk={class:"col-fs"},Qk={key:0},Zk={colspan:5,class:"fw-tp-empty-cell"},ex={key:2,class:"fw-tp-loading"},tx={key:0,class:"fw-prop-body"},nx={class:"fw-prop-row"},sx={class:"k"},ox={class:"v"},ax={class:"fw-prop-row"},ix={class:"k"},lx={class:"v"},rx={class:"fw-prop-row"},cx={class:"k"},ux={class:"v"},dx={class:"fw-prop-row"},fx={class:"k"},px={class:"v"},vx={class:"fw-prop-row"},hx={class:"k"},mx={class:"v"},gx={class:"fw-prop-row"},yx={class:"k"},wx={class:"v"},bx={class:"fw-prop-row"},_x={class:"k"},kx={class:"v"},xx={class:"fw-prop-bar"},pc="computer",Cx=ht({__name:"ThisPcPane",setup(t){const{t:e}=Bt(),n=["huge","large","medium","small"],l=B(()=>ol(pc)),c=B(()=>n.includes(l.value)),u=B(()=>l.value==="huge"?52:l.value==="large"?44:l.value==="medium"?36:20);$s(()=>Va.value=l.value);const v=m(null),d=B(()=>{const W=[...le.drives],J=v.value;return J&&W.sort((z,ee)=>J==="size"?(ee.total??-1)-(z.total??-1):J==="free"?(ee.free??-1)-(z.free??-1):J==="type"?Number(z.removable)-Number(ee.removable)||js(z).localeCompare(js(ee),void 0,{sensitivity:"base"}):js(z).localeCompare(js(ee),void 0,{sensitivity:"base"})),W});function p(W){if(W===void 0||!Number.isFinite(W))return"—";const J=["B","KB","MB","GB","TB","PB"];let z=W,ee=0;for(;z>=1024&&ee<J.length-1;)z/=1024,ee+=1;return`${ee>0&&z<100?z.toFixed(1):Math.round(z)} ${J[ee]}`}function w(W){if(!(W.total===void 0||W.free===void 0))return Math.max(0,W.total-W.free)}function b(W){const J=w(W);return J===void 0||!W.total?"0%":`${Math.min(100,Math.max(0,J/W.total*100)).toFixed(1)}%`}function $(W){return e("driveCapacity",{free:p(W.free),total:p(W.total)})}const L=m(""),M=m(null);function A(W){L.value=W.path}function I(W){M.value?.focus({preventScroll:!0}),!W.target.closest(".fw-drive, .fw-tp-row, th")&&(L.value="")}function U(W){L.value=W.path,Vt(W.path)}function C(W){const J=d.value;if(!J.length)return;if(W.key==="F5"){W.preventDefault(),Ft();return}if(W.key==="Enter"&&L.value){const ge=J.find(je=>je.path===L.value);ge&&(W.preventDefault(),U(ge));return}if(W.key!=="ArrowDown"&&W.key!=="ArrowUp"&&W.key!=="Home"&&W.key!=="End")return;W.preventDefault();const z=J.findIndex(ge=>ge.path===L.value),ee=W.key==="Home"?0:W.key==="End"?J.length-1:W.key==="ArrowDown"?Math.min(J.length-1,z+1):Math.max(0,z<0?0:z-1);L.value=J[ee]?.path??""}function Z(W){al(pc,W)}$s(()=>{Rt.visible=!0,Rt.canSwitchView=!0,Rt.total=d.value.length,Rt.selected=L.value?1:0,Rt.text="",Rt.view=l.value}),ln(()=>Ja(W=>Z(W))),Pt(()=>{Ja(null),cd()});const{cmOpen:G,cmX:F,cmY:de,cmItems:j,openMenu:he}=pn();function Ee(W,J){L.value=J.path;const z=ro(J.path);he(W,[{label:e("menuOpen"),icon:"arrowRight",onClick:()=>U(J)},{label:e("menuOpenInEditor"),icon:"code",onClick:()=>er(J.path)},{separator:!0},{label:e(z?"favoriteRemove":"favoriteAdd"),icon:"star",onClick:()=>{const ee=za(J.path);X("ok",e(ee?"favoriteAdded":"favoriteRemoved"))}},{label:e("menuCopyPath"),icon:"link",onClick:()=>void Ne(J.path)},{separator:!0},{label:e("menuProperties"),icon:"info",onClick:()=>we(J)}])}function ve(W){he(W,[{label:e("menuRefresh"),icon:"refresh",onClick:()=>void Ft()},{separator:!0},{label:e("menuView"),icon:"eye",children:ne()},{label:e("menuSort"),icon:"sort",children:ie()}])}function ne(){const W=(J,z)=>({label:J,checked:l.value===z,onClick:()=>Z(z)});return[W(e("viewHuge"),"huge"),W(e("viewLarge"),"large"),W(e("viewMedium"),"medium"),W(e("viewSmall"),"small"),{separator:!0},W(e("viewList"),"list"),{separator:!0},W(e("viewDetails"),"details"),W(e("viewContent"),"content"),W(e("viewTiles"),"tiles")]}function ie(){return[["name",e("sortName")],["size",e("driveTotal")],["free",e("driveFree")],["type",e("sortType")]].map(([J,z])=>({label:z,checked:v.value===J,onClick:()=>{v.value=J}}))}const Se=m(!1),Ve=m(null);function we(W){Ve.value=W,Se.value=!0}async function Ne(W){try{await navigator.clipboard.writeText(W),X("ok",e("menuPathCopied"))}catch{X("error",e("menuPathCopyFail"))}}return Qa((W,J)=>{switch(W){case"view":J&&n.concat(["list","details","content","tiles"]).includes(J)&&Z(J);break;case"sort":(J==="name"||J==="size"||J==="free"||J==="type")&&(v.value=J);break;case"refresh":Ft();break;case"properties":{const z=d.value.find(ee=>ee.path===L.value);z&&we(z);break}}}),Pt(()=>Qa(null)),$s(()=>{vn.selectionCount=L.value?1:0,vn.canOperate=!1,vn.hasClipboard=yl(),vn.isRecycle=!1}),(W,J)=>{const z=An,ee=rn;return i(),r("div",{class:"fw-tp",onKeydown:C},[s(le).drivesErr?(i(),r("div",Ek,a(s(le).drivesErr),1)):(i(),r("div",{key:1,ref_key:"wrapRef",ref:M,class:te(["fw-tp-wrap","fw-tp-"+l.value]),tabindex:"0",onClick:I,onContextmenu:_e(ve,["prevent"])},[o("div",Tk,a(s(e)("thisPcDevices"))+" ("+a(d.value.length)+")",1),c.value?(i(),r("div",Dk,[(i(!0),r(ae,null,Ae(d.value,ge=>(i(),r("div",{key:ge.path,class:te(["fw-drive",{selected:ge.path===L.value,removable:ge.removable}]),"data-path":ge.path,title:ge.path,onClick:je=>A(ge),onDblclick:je=>U(ge),onContextmenu:_e(je=>Ee(je,ge),["prevent","stop"])},[o("span",Rk,[h(oe,{name:"hardDrive",size:u.value},null,8,["size"])]),o("span",Nk,[o("span",Pk,a(s(js)(ge)),1),o("span",Ak,[o("span",{class:"fw-drive-fill",style:_t({width:b(ge)})},null,4)]),o("span",Mk,a($(ge)),1)])],42,Fk))),128)),!d.value.length&&!s(le).drivesLoading?(i(),r("div",Ok,a(s(e)("emptyDrives")),1)):P("",!0)])):(i(),r("table",Lk,[o("thead",null,[o("tr",null,[o("th",Bk,a(s(e)("colName")),1),o("th",Ik,a(s(e)("colType")),1),o("th",jk,a(s(e)("driveTotal")),1),o("th",Vk,a(s(e)("driveFree")),1),o("th",zk,a(s(e)("driveFs")),1)])]),o("tbody",null,[(i(!0),r(ae,null,Ae(d.value,ge=>(i(),r("tr",{key:ge.path,class:te(["fw-tp-row",{selected:ge.path===L.value}]),"data-path":ge.path,title:ge.path,onClick:je=>A(ge),onDblclick:je=>U(ge),onContextmenu:_e(je=>Ee(je,ge),["prevent","stop"])},[o("td",Hk,[o("span",Wk,[o("span",Gk,[h(oe,{name:"hardDrive",size:16})]),o("span",qk,a(s(js)(ge)),1)])]),o("td",Kk,a(ge.removable?s(e)("driveTypeRemovable"):s(e)("driveTypeFixed")),1),o("td",Xk,a(p(ge.total)),1),o("td",Yk,a(p(ge.free)),1),o("td",Jk,a(ge.fsType||"—"),1)],42,Uk))),128)),d.value.length?P("",!0):(i(),r("tr",Qk,[o("td",Zk,a(s(e)("emptyDrives")),1)]))])]))],34)),s(le).drivesLoading?(i(),r("div",ex,[...J[3]||(J[3]=[o("div",{class:"fw-tp-spinner"},null,-1)])])):P("",!0),s(G)?(i(),Xe(Qt,{key:3,items:s(j),x:s(F),y:s(de),onClose:J[0]||(J[0]=ge=>G.value=!1)},null,8,["items","x","y"])):P("",!0),h(ee,{modelValue:Se.value,"onUpdate:modelValue":J[2]||(J[2]=ge=>Se.value=ge),class:"fw-prop-dialog",title:s(e)("menuProperties"),width:"420px","close-on-click-modal":!1},{footer:se(()=>[h(z,{type:"primary",onClick:J[1]||(J[1]=ge=>Se.value=!1)},{default:se(()=>[ue(a(s(e)("confirmOk")),1)]),_:1})]),default:se(()=>[Ve.value?(i(),r("div",tx,[o("div",nx,[o("span",sx,a(s(e)("propName")),1),o("span",ox,a(Ve.value.name),1)]),o("div",ax,[o("span",ix,a(s(e)("propPath")),1),o("span",lx,a(Ve.value.path),1)]),o("div",rx,[o("span",cx,a(s(e)("propKind")),1),o("span",ux,a(Ve.value.removable?s(e)("driveTypeRemovable"):s(e)("driveTypeFixed")),1)]),o("div",dx,[o("span",fx,a(s(e)("driveFs")),1),o("span",px,a(Ve.value.fsType||"—"),1)]),o("div",vx,[o("span",hx,a(s(e)("propSize")),1),o("span",mx,a(p(w(Ve.value))),1)]),o("div",gx,[o("span",yx,a(s(e)("driveFree")),1),o("span",wx,a(p(Ve.value.free)),1)]),o("div",bx,[o("span",_x,a(s(e)("driveTotal")),1),o("span",kx,a(p(Ve.value.total)),1)]),o("div",xx,[o("span",{class:"fw-prop-fill",style:_t({width:b(Ve.value)})},null,4)])])):P("",!0)]),_:1},8,["modelValue","title"])],32)}}}),$x=xt(Cx,[["__scopeId","data-v-5d2b5f89"]]),Sx=["title"],Ex=["disabled","title"],Tx=["disabled","title"],Dx=["disabled","title"],Fx=["title"],Rx=["title"],Nx={class:"fw-pmenu-check"},Px=["title"],Ax={class:"fw-pmenu-check"},Mx={class:"fw-pmenu-check"},Ox=["disabled","title"],Lx=["disabled","title"],Bx=["disabled","title"],Ix=["disabled","title"],jx=["disabled","title"],Vx=["disabled","title"],zx=["title"],Ux={class:"fw-pmenu-check"},Hx=["title"],Wx={class:"fw-pmenu-check"},Gx={class:"fw-pmenu-check"},qx=["disabled","title"],Kx=ht({__name:"CommandBar",props:{navFolded:{type:Boolean},compact:{type:Boolean}},emits:["unfold-nav"],setup(t){const{t:e}=Bt(),n=B(()=>vn.isRecycle||!vn.canOperate),l=B(()=>vn.selectionCount>0),c=B(()=>(le.recycleItems?.length??0)>0),u=B(()=>[["name",e("sortName")],["mtime",e("sortModified")],["type",e("sortType")],["size",e("sortSize")]]),v=B(()=>[["huge",e("viewHuge")],["large",e("viewLarge")],["medium",e("viewMedium")],["small",e("viewSmall")],["list",e("viewList")],["details",e("viewDetails")],["content",e("viewContent")],["tiles",e("viewTiles")]]);function d(w,b){if(w==="newSshHost"){Fu();return}if(w==="openTerminal"){xo(le.listing?.path??"");return}if(w==="cloneGit"||w==="cloneSvn"){cr({kind:w==="cloneGit"?"git":"svn",dir:le.listing?.path??"",key:Fe.key,onDone:({path:$})=>{Vt($)}});return}Z0(w,b)}function p(w){w==="toggleExt"?d("toggleExt"):d("view",w)}return(w,b)=>{const $=kf,L=_f,M=bf;return i(),r("div",{class:te(["fw-cmdbar",{"is-compact":t.compact}])},[t.navFolded?(i(),r("button",{key:0,class:"fw-cb-btn fw-cb-navtoggle",title:s(e)("expShowNav"),onClick:b[0]||(b[0]=A=>w.$emit("unfold-nav"))},[h(oe,{class:"fw-cb-hamburger",name:"viewList",size:13}),ue(a(s(e)("expShowNav")),1)],8,Sx)):P("",!0),s(vn).isRecycle?(i(),r(ae,{key:1},[o("button",{class:"fw-cb-btn",disabled:!l.value,title:s(e)("recycleRestore"),onClick:b[1]||(b[1]=A=>d("restore"))},[h(oe,{name:"undo",size:13}),ue(a(s(e)("recycleRestore")),1)],8,Ex),o("button",{class:"fw-cb-btn",disabled:!l.value,title:s(e)("recycleDelete"),onClick:b[2]||(b[2]=A=>d("delete"))},[h(oe,{name:"trash",size:13}),ue(a(s(e)("recycleDelete")),1)],8,Tx),o("button",{class:"fw-cb-btn",disabled:!c.value,title:s(e)("recycleEmpty"),onClick:b[3]||(b[3]=A=>d("emptyRecycle"))},[h(oe,{name:"close",size:13}),ue(a(s(e)("recycleEmpty")),1)],8,Dx),o("button",{class:"fw-cb-btn",title:s(e)("menuRefresh"),onClick:b[4]||(b[4]=A=>d("refresh"))},[h(oe,{name:"refresh",size:13}),ue(a(s(e)("menuRefresh")),1)],8,Fx),b[18]||(b[18]=o("span",{class:"fw-cb-sep"},null,-1)),h(M,{trigger:"click",teleported:!1,"popper-class":"fw-panelmenu-popper",onCommand:b[5]||(b[5]=A=>d("sort",String(A)))},{dropdown:se(()=>[h(L,{class:"fw-panelmenu"},{default:se(()=>[(i(!0),r(ae,null,Ae(u.value,A=>(i(),Xe($,{key:A[0],command:A[0],class:"fw-panelitem"},{default:se(()=>[o("span",Nx,a(s(Ue).sortKey===A[0]?"✓":""),1),ue(a(A[1]),1)]),_:2},1032,["command"]))),128))]),_:1})]),default:se(()=>[o("button",{class:"fw-cb-btn",title:s(e)("menuSort")},[h(oe,{name:"sort",size:13}),ue(a(s(e)("menuSort"))+" ",1),b[16]||(b[16]=o("span",{class:"caret"},"▾",-1))],8,Rx)]),_:1}),h(M,{trigger:"click",teleported:!1,"popper-class":"fw-panelmenu-popper",onCommand:b[6]||(b[6]=A=>p(String(A)))},{dropdown:se(()=>[h(L,{class:"fw-panelmenu"},{default:se(()=>[(i(!0),r(ae,null,Ae(v.value,A=>(i(),Xe($,{key:A[0],command:A[0],class:"fw-panelitem"},{default:se(()=>[o("span",Ax,a(s(Va)===A[0]?"✓":""),1),ue(a(A[1]),1)]),_:2},1032,["command"]))),128)),h($,{divided:"",command:"toggleExt",class:"fw-panelitem"},{default:se(()=>[o("span",Mx,a(s(Ue).showExtensions?"✓":""),1),ue(a(s(e)("showExtensions")),1)]),_:1})]),_:1})]),default:se(()=>[o("button",{class:"fw-cb-btn",title:s(e)("menuView")},[h(oe,{name:"viewDetails",size:13}),ue(a(s(e)("menuView"))+" ",1),b[17]||(b[17]=o("span",{class:"caret"},"▾",-1))],8,Px)]),_:1})],64)):(i(),r(ae,{key:2},[h(M,{trigger:"click",teleported:!1,"popper-class":"fw-panelmenu-popper",onCommand:b[7]||(b[7]=A=>d(String(A)))},{dropdown:se(()=>[h(L,{class:"fw-panelmenu"},{default:se(()=>[h($,{command:"newFolder",class:"fw-panelitem"},{default:se(()=>[ue(a(s(e)("menuNewFolder")),1)]),_:1}),h($,{command:"newFile",class:"fw-panelitem"},{default:se(()=>[ue(a(s(e)("menuNewFile")),1)]),_:1}),h($,{command:"upload",class:"fw-panelitem"},{default:se(()=>[ue(a(s(e)("menuUpload")),1)]),_:1}),h($,{command:"cloneGit",class:"fw-panelitem"},{default:se(()=>[ue(a(s(e)("menuCloneGit")),1)]),_:1}),h($,{command:"cloneSvn",class:"fw-panelitem"},{default:se(()=>[ue(a(s(e)("menuCloneSvn")),1)]),_:1}),h($,{divided:"",command:"newSshHost",class:"fw-panelitem"},{default:se(()=>[ue(a(s(e)("sshNewHost")),1)]),_:1}),h($,{command:"openTerminal",class:"fw-panelitem"},{default:se(()=>[ue(a(s(e)("terminalNew")),1)]),_:1})]),_:1})]),default:se(()=>[o("button",{class:"fw-cb-btn",disabled:n.value,title:s(e)("menuNew")},[h(oe,{name:"plus",size:13}),ue(a(s(e)("menuNew"))+" ",1),b[19]||(b[19]=o("span",{class:"caret"},"▾",-1))],8,Ox)]),_:1}),o("button",{class:"fw-cb-btn",disabled:!l.value,title:s(e)("menuCut"),onClick:b[8]||(b[8]=A=>d("cut"))},[h(oe,{name:"cut",size:13}),ue(a(s(e)("menuCut")),1)],8,Lx),o("button",{class:"fw-cb-btn",disabled:!l.value,title:s(e)("menuCopy"),onClick:b[9]||(b[9]=A=>d("copy"))},[h(oe,{name:"copy",size:13}),ue(a(s(e)("menuCopy")),1)],8,Bx),o("button",{class:"fw-cb-btn",disabled:s(vn).hasClipboard||n.value,title:s(e)("menuPaste"),onClick:b[10]||(b[10]=A=>d("paste"))},[h(oe,{name:"paste",size:13}),ue(a(s(e)("menuPaste")),1)],8,Ix),o("button",{class:"fw-cb-btn",disabled:s(vn).selectionCount!==1||n.value,title:s(e)("menuRename"),onClick:b[11]||(b[11]=A=>d("rename"))},[h(oe,{name:"edit",size:13}),ue(a(s(e)("menuRename")),1)],8,jx),o("button",{class:"fw-cb-btn",disabled:!l.value||n.value,title:s(e)("menuDelete"),onClick:b[12]||(b[12]=A=>d("delete"))},[h(oe,{name:"trash",size:13}),ue(a(s(e)("menuDelete")),1)],8,Vx),b[22]||(b[22]=o("span",{class:"fw-cb-sep"},null,-1)),h(M,{trigger:"click",teleported:!1,"popper-class":"fw-panelmenu-popper",onCommand:b[13]||(b[13]=A=>d("sort",String(A)))},{dropdown:se(()=>[h(L,{class:"fw-panelmenu"},{default:se(()=>[(i(!0),r(ae,null,Ae(u.value,A=>(i(),Xe($,{key:A[0],command:A[0],class:"fw-panelitem"},{default:se(()=>[o("span",Ux,a(s(Ue).sortKey===A[0]?"✓":""),1),ue(a(A[1]),1)]),_:2},1032,["command"]))),128))]),_:1})]),default:se(()=>[o("button",{class:"fw-cb-btn",title:s(e)("menuSort")},[h(oe,{name:"sort",size:13}),ue(a(s(e)("menuSort"))+" ",1),b[20]||(b[20]=o("span",{class:"caret"},"▾",-1))],8,zx)]),_:1}),h(M,{trigger:"click",teleported:!1,"popper-class":"fw-panelmenu-popper",onCommand:b[14]||(b[14]=A=>p(String(A)))},{dropdown:se(()=>[h(L,{class:"fw-panelmenu"},{default:se(()=>[(i(!0),r(ae,null,Ae(v.value,A=>(i(),Xe($,{key:A[0],command:A[0],class:"fw-panelitem"},{default:se(()=>[o("span",Wx,a(s(Va)===A[0]?"✓":""),1),ue(a(A[1]),1)]),_:2},1032,["command"]))),128)),h($,{divided:"",command:"toggleExt",class:"fw-panelitem"},{default:se(()=>[o("span",Gx,a(s(Ue).showExtensions?"✓":""),1),ue(a(s(e)("showExtensions")),1)]),_:1})]),_:1})]),default:se(()=>[o("button",{class:"fw-cb-btn",title:s(e)("menuView")},[h(oe,{name:"viewDetails",size:13}),ue(a(s(e)("menuView"))+" ",1),b[21]||(b[21]=o("span",{class:"caret"},"▾",-1))],8,Hx)]),_:1}),b[23]||(b[23]=o("span",{class:"fw-cb-flex"},null,-1)),o("button",{class:"fw-cb-btn",disabled:!l.value,title:s(e)("cmdPreview"),onClick:b[15]||(b[15]=A=>d("preview"))},[h(oe,{name:"eye",size:13}),ue(a(s(e)("cmdPreview")),1)],8,qx)],64))],2)}}}),Xx=xt(Kx,[["__scopeId","data-v-940d1c90"]]),Yx=["title"],Jx={key:0,class:"fw-bg-task-badge"},Qx={class:"fw-bg-task-head"},Zx={class:"fw-bg-task-title"},eC={class:"fw-bg-task-headacts"},tC=["disabled"],nC=["disabled"],sC=["disabled"],oC=["title"],aC={key:0,class:"fw-bg-task-group"},iC={class:"fw-bg-task-grouplbl"},lC=["onClick"],rC={class:"fw-bg-task-label"},cC={key:0,class:"fw-bg-task-detail"},uC={class:"fw-bg-task-see"},dC={key:1,class:"fw-bg-task-group"},fC={class:"fw-bg-task-grouplbl"},pC=["onClick"],vC={class:"fw-bg-task-ico"},hC={class:"fw-bg-task-label"},mC={key:0,class:"fw-bg-task-detail"},gC={class:"fw-bg-task-see"},yC={key:2,class:"fw-bg-task-empty"},wC={class:"fw-dlg-head"},bC={class:"fw-dlg-badge"},_C={class:"fw-dlg-headtext"},kC={class:"fw-dlg-headtitle"},xC={class:"fw-dlg-headsub"},CC={class:"fw-tlog-head"},$C={class:"fw-tlog-name"},SC={key:0,class:"fw-tlog-fileitem"},EC={class:"fw-tlog-k"},TC=["title"],DC={class:"fw-tlog-meta"},FC={key:0},RC={key:1},NC={key:2},PC={class:"fw-tlog-timeline"},AC={class:"fw-tlog-rail"},MC={key:0,class:"fw-tlog-line"},OC={class:"fw-tlog-ct"},LC={class:"fw-tlog-brow"},BC={class:"fw-tlog-time"},IC={class:"fw-tlog-dur-tip"},jC={class:"fw-tlog-btext"},VC={key:0,class:"fw-tlog-bnote"},zC={class:"fw-dlg-head"},UC={class:"fw-dlg-badge"},HC={class:"fw-dlg-headtext"},WC={class:"fw-dlg-headtitle"},GC={class:"fw-dlg-headsub"},qC={class:"fw-taskarc"},KC={class:"fw-taskarc-dates"},XC=["onClick"],YC={class:"fw-taskarc-cnt"},JC={class:"fw-taskarc-records"},QC={key:0,class:"fw-taskarc-none"},ZC=["onClick"],e$={class:"fw-taskarc-ico"},t$={class:"fw-taskarc-label"},n$={key:0,class:"fw-taskarc-recdetail"},s$={class:"fw-taskarc-time"},o$={class:"fw-taskarc-detail"},a$={key:0,class:"fw-taskarc-none"},i$={class:"fw-tlog-head"},l$={class:"fw-tlog-name"},r$={key:0,class:"fw-tlog-fileitem"},c$={class:"fw-tlog-k"},u$=["title"],d$={class:"fw-tlog-meta"},f$={key:0},p$={key:1},v$={key:2},h$={class:"fw-tlog-timeline"},m$={class:"fw-tlog-rail"},g$={key:0,class:"fw-tlog-line"},y$={class:"fw-tlog-ct"},w$={class:"fw-tlog-brow"},b$={class:"fw-tlog-time"},_$={class:"fw-tlog-dur-tip"},k$={class:"fw-tlog-btext"},x$={key:0,class:"fw-tlog-bnote"},Bi=340,vc=11,Po=8,C$=ht({__name:"BgTaskPanel",setup(t){const{t:e}=Bt(),n=B(()=>Kn.open.value),l=B(()=>Kn.state.list),c=B(()=>Kn.state.history),u=B(()=>l.value.filter(pe=>pe.status==="running")),v=B(()=>u.value.length),d=B(()=>c.value.length>0),p=m(null),w=m(!1),b=m(null),$=gt({width:Bi,left:0,bottom:0,maxH:360,arrow:Bi/2}),L=B(()=>({width:`${$.width}px`,left:`${$.left}px`,bottom:`${$.bottom}px`})),M=B(()=>({maxHeight:`${$.maxH}px`})),A=B(()=>({left:`${$.arrow}px`}));function I(){const pe=b.value;if(!pe)return;const ke=pe.getBoundingClientRect(),qe=window.innerWidth,ce=window.innerHeight,Ie=ke.left+ke.width/2,rt=Math.min(Bi,Math.max(qe-Po*2,200)),yt=Math.max(qe-rt-Po,Po),ut=Ie<qe/2?ke.left-2:Ie-rt/2,it=Math.min(Math.max(ut,Po),yt);$.width=Math.round(rt),$.left=Math.round(it),$.bottom=Math.round(ce-ke.top+vc),$.maxH=Math.max(140,Math.min(ke.top-vc-Po,Math.round(ce*.6))),$.arrow=Math.round(Math.min(Math.max(Ie-it,16),rt-16))}Qe(n,pe=>{pe&&(I(),Dt(I))});const U=m(!1),C=m(null),Z=B(()=>Kn.state.archives),G=B(()=>Object.keys(Z.value).sort((pe,ke)=>pe<ke?1:-1).map(pe=>({date:pe,count:Z.value[pe].length}))),F=B(()=>{const pe=C.value;return[...pe&&Z.value[pe]?Z.value[pe]:[]].sort((qe,ce)=>(ce.doneAt??ce.startedAt)-(qe.doneAt??qe.startedAt))});function de(){G.value.length&&(C.value=G.value[0].date,U.value=!0)}function j(pe){Kn.setOpen(pe)}function he(){Kn.clearFinished()}function Ee(){Kn.clearAll()}function ve(pe){const ke=pe.logs,qe=ke&&ke.length?ke:[{time:pe.startedAt,status:"running",msg:pe.label,file:pe.detail},{time:pe.doneAt??Date.now(),status:pe.status,msg:pe.msg??"",file:pe.detail}];p.value={label:pe.label,fileTarget:pe.detail,status:pe.status,startedAt:pe.startedAt,doneAt:pe.doneAt,msg:pe.msg,logs:qe},w.value=!0}function ne(pe,ke){let qe=ke;return pe.map(ce=>{const Ie=ce.time-qe>0?ce.time-qe:0;return qe=ce.time,{time:ce.time,status:ce.status,title:ce.msg,file:ce.file,detail:ce.detail,durMs:Ie}})}function ie(pe){let ke=0,qe=0;const ce=new Set;for(const Ie of pe)Ie.fileType&&(ce.add(Ie.fileType),ke+=1,Ie.fileSize!==void 0&&(qe+=Ie.fileSize));return{count:ke,size:qe,types:[...ce]}}const Se=B(()=>p.value?ie(p.value.logs):{count:0,size:0,types:[]}),Ve=B(()=>J.value?ie(W(J.value)):{count:0,size:0,types:[]}),we=B(()=>p.value?ne(p.value.logs,p.value.startedAt):[]),Ne=B(()=>{const pe=p.value;if(!pe)return null;if(pe.doneAt)return pe.doneAt-pe.startedAt;const ke=we.value[we.value.length-1];return ke?ke.time-pe.startedAt:0});function W(pe){return pe.logs&&pe.logs.length?pe.logs:[{time:pe.startedAt,status:"running",msg:pe.label,file:pe.detail},{time:pe.doneAt??Date.now(),status:pe.status,msg:pe.msg??"",file:pe.detail}]}const J=m(null),z=B(()=>J.value?ne(W(J.value),J.value.startedAt):[]),ee=B(()=>{const pe=J.value;if(!pe)return null;if(pe.doneAt)return pe.doneAt-pe.startedAt;const ke=z.value[z.value.length-1];return ke?ke.time-pe.startedAt:0});function ge(){J.value=null}function je(pe){J.value=pe}function Ke(pe){const ke=new Date(pe),qe=ce=>String(ce).padStart(2,"0");return`${qe(ke.getHours())}:${qe(ke.getMinutes())}:${qe(ke.getSeconds())}`}function Ze(pe){const ke=new Date(pe),qe=ce=>String(ce).padStart(2,"0");return`${ke.getFullYear()}-${qe(ke.getMonth()+1)}-${qe(ke.getDate())} ${Ke(pe)}`}function ye(pe){if(pe==null)return"—";if(pe<0&&(pe=0),pe<1e3)return`${pe}ms`;const ke=pe/1e3;if(ke<60)return`${ke.toFixed(1)}s`;const qe=Math.floor(ke/60),ce=Math.round(ke-qe*60);return`${qe}m ${String(ce).padStart(2,"0")}s`}function be(pe){return e(pe==="done"?"taskStatusDone":pe==="error"?"taskStatusError":"taskStatusRunning")}function Ye(pe){let ke=pe.title??"";return pe.file&&(ke=ke?`${ke}：${pe.file}`:pe.file),ke}ln(()=>{Kn.initTaskLogs(),document.addEventListener("mousedown",st),window.addEventListener("resize",I),window.addEventListener("scroll",I,!0)}),Pt(()=>{document.removeEventListener("mousedown",st),window.removeEventListener("resize",I),window.removeEventListener("scroll",I,!0)});function st(pe){pe.target?.closest?.(".fw-bg-task-fab, .fw-bg-task-panel")||Kn.setOpen(!1)}return(pe,ke)=>{const qe=rn;return i(),r(ae,null,[o("button",{ref_key:"fabRef",ref:b,class:te(["fw-bg-task-fab",{active:n.value}]),title:s(e)("taskFabTitle"),onClick:ke[0]||(ke[0]=ce=>j(!n.value))},[h(oe,{name:"tasks",size:14}),v.value?(i(),r("span",Jx,a(v.value),1)):P("",!0)],10,Yx),h(vf,{name:"fw-bg-task-pop"},{default:se(()=>[n.value?(i(),r("div",{key:0,class:"fw-bg-task-wrap",style:_t(L.value)},[o("div",{class:"fw-bg-task-panel",style:_t(M.value)},[o("div",Qx,[o("span",Zx,a(s(e)("taskPanelTitle")),1),o("div",eC,[o("button",{class:"fw-bg-task-link",disabled:!G.value.length,onClick:de},a(s(e)("taskArchiveOpen")),9,tC),o("button",{class:"fw-bg-task-link",disabled:!d.value,onClick:he},a(s(e)("taskClearFinished")),9,nC),o("button",{class:"fw-bg-task-link",disabled:!l.value.length,onClick:Ee},a(s(e)("taskClearAll")),9,sC),o("button",{class:"fw-bg-task-close",title:s(e)("taskClose"),onClick:ke[1]||(ke[1]=ce=>j(!1))},"✕",8,oC)])]),u.value.length?(i(),r("div",aC,[o("div",iC,a(s(e)("taskRunning")),1),(i(!0),r(ae,null,Ae(u.value,ce=>(i(),r("div",{key:ce.id,class:"fw-bg-task-row",onClick:Ie=>ve(ce)},[ke[4]||(ke[4]=o("span",{class:"fw-bg-task-spin"},null,-1)),o("span",rC,a(ce.label),1),ce.detail?(i(),r("span",cC,a(ce.detail),1)):P("",!0),o("span",uC,a(s(e)("taskViewLog")),1)],8,lC))),128))])):P("",!0),c.value.length?(i(),r("div",dC,[o("div",fC,a(s(e)("taskHistory")),1),(i(!0),r(ae,null,Ae(c.value,(ce,Ie)=>(i(),r("div",{key:ce.startedAt+"-"+Ie,class:te(["fw-bg-task-row",ce.status]),onClick:rt=>ve(ce)},[o("span",vC,[h(oe,{name:ce.status==="done"?"check":"close",size:13},null,8,["name"])]),o("span",hC,a(ce.label),1),ce.detail?(i(),r("span",mC,a(ce.detail),1)):P("",!0),o("span",gC,a(s(e)("taskViewLog")),1)],10,pC))),128))])):P("",!0),!u.value.length&&!c.value.length?(i(),r("div",yC,a(s(e)("taskEmpty")),1)):P("",!0)],4),o("span",{class:"fw-bg-task-arrow",style:_t(A.value)},null,4)],4)):P("",!0)]),_:1}),h(qe,{modelValue:w.value,"onUpdate:modelValue":ke[2]||(ke[2]=ce=>w.value=ce),class:"fw-clone-dialog fw-tasklog-dialog",width:"580px","align-center":"","modal-class":"fw-blur-overlay","close-on-click-modal":!1,"modal-append-to-body":!1,"append-to-body":!1},{header:se(()=>[o("div",wC,[o("span",bC,[h(oe,{name:"tasks",size:20})]),o("span",_C,[o("span",kC,a(s(e)("taskLogTitle")),1),o("span",xC,a(p.value?.label),1)])])]),default:se(()=>[p.value?(i(),r(ae,{key:0},[o("div",CC,[o("div",$C,a(p.value.label),1),p.value.fileTarget?(i(),r("div",SC,[o("span",EC,a(s(e)("taskFieldTarget")),1),o("span",{class:"fw-tlog-path",title:p.value.fileTarget},a(p.value.fileTarget),9,TC)])):P("",!0),o("div",DC,[o("span",{class:te(["fw-tlog-st-head",p.value.status])},a(be(p.value.status)),3),o("span",null,a(s(e)("taskStartTime"))+" "+a(Ze(p.value.startedAt)),1),p.value.doneAt?(i(),r("span",FC,a(s(e)("taskEndTime"))+" "+a(Ze(p.value.doneAt)),1)):P("",!0),o("span",null,a(s(e)("taskTotalSpent"))+" "+a(ye(Ne.value)),1),Se.value.types.length?(i(),r("span",RC,a(s(e)("taskFieldType"))+"："+a(Se.value.types.join("、")),1)):P("",!0),Se.value.count?(i(),r("span",NC,a(s(e)("taskMetaFiles",{count:Se.value.count,size:s(fc)(Se.value.size)})),1)):P("",!0)])]),o("div",PC,[(i(!0),r(ae,null,Ae(we.value,(ce,Ie)=>(i(),r("div",{key:Ie,class:"fw-tlog-step"},[o("div",AC,[o("span",{class:te(["fw-tlog-dot",ce.status])},null,2),Ie<we.value.length-1?(i(),r("span",MC)):P("",!0)]),o("div",OC,[o("div",{class:te(["fw-tlog-bubble",ce.status])},[o("div",LC,[o("span",BC,a(Ke(ce.time)),1),o("span",{class:te(["fw-tlog-st",ce.status])},a(be(ce.status)),3),o("span",IC,[Ie!==0?(i(),r(ae,{key:0},[ue(a(s(e)("taskStepSpent"))+" ",1),o("b",null,a(ye(ce.durMs)),1)],64)):P("",!0)])]),o("div",jC,a(Ye(ce)),1),ce.detail&&ce.detail!==ce.file?(i(),r("div",VC,a(ce.detail),1)):P("",!0)],2)])]))),128))])],64)):P("",!0)]),_:1},8,["modelValue"]),h(qe,{modelValue:U.value,"onUpdate:modelValue":ke[3]||(ke[3]=ce=>U.value=ce),class:"fw-clone-dialog fw-taskarc-dialog",width:"880px","align-center":"","modal-class":"fw-blur-overlay","close-on-click-modal":!1,"modal-append-to-body":!1,"append-to-body":!1},{header:se(()=>[o("div",zC,[o("span",UC,[h(oe,{name:"archive",size:20})]),o("span",HC,[o("span",WC,a(s(e)("taskArchiveTitle")),1),o("span",GC,a(C.value??s(e)("taskArchiveOpen")),1)])])]),default:se(()=>[o("div",qC,[o("div",KC,[(i(!0),r(ae,null,Ae(G.value,ce=>(i(),r("button",{key:ce.date,class:te(["fw-taskarc-date",{active:C.value===ce.date}]),onClick:Ie=>{C.value=ce.date,ge()}},[o("span",null,a(ce.date),1),o("span",YC,a(s(e)("taskArchiveRecords",{count:ce.count})),1)],10,XC))),128))]),o("div",JC,[F.value.length?P("",!0):(i(),r("div",QC,a(s(e)("taskArchiveNone")),1)),(i(!0),r(ae,null,Ae(F.value,(ce,Ie)=>(i(),r("div",{key:ce.startedAt+"-"+Ie,class:te(["fw-taskarc-row",{[ce.status]:!0,active:J.value===ce}]),onClick:rt=>je(ce)},[o("span",e$,[h(oe,{name:ce.status==="done"?"check":"close",size:13},null,8,["name"])]),o("span",t$,a(ce.label),1),ce.detail?(i(),r("span",n$,a(ce.detail),1)):P("",!0),o("span",s$,a(Ze(ce.startedAt)),1)],10,ZC))),128))]),o("div",o$,[J.value?(i(),r(ae,{key:1},[o("div",i$,[o("div",l$,a(J.value.label),1),J.value.detail?(i(),r("div",r$,[o("span",c$,a(s(e)("taskFieldTarget")),1),o("span",{class:"fw-tlog-path",title:J.value.detail},a(J.value.detail),9,u$)])):P("",!0),o("div",d$,[o("span",{class:te(["fw-tlog-st-head",J.value.status])},a(be(J.value.status)),3),o("span",null,a(s(e)("taskStartTime"))+" "+a(Ze(J.value.startedAt)),1),J.value.doneAt?(i(),r("span",f$,a(s(e)("taskEndTime"))+" "+a(Ze(J.value.doneAt)),1)):P("",!0),o("span",null,a(s(e)("taskTotalSpent"))+" "+a(ye(ee.value)),1),Ve.value.types.length?(i(),r("span",p$,a(s(e)("taskFieldType"))+"："+a(Ve.value.types.join("、")),1)):P("",!0),Ve.value.count?(i(),r("span",v$,a(s(e)("taskMetaFiles",{count:Ve.value.count,size:s(fc)(Ve.value.size)})),1)):P("",!0)])]),o("div",h$,[(i(!0),r(ae,null,Ae(z.value,(ce,Ie)=>(i(),r("div",{key:Ie,class:"fw-tlog-step"},[o("div",m$,[o("span",{class:te(["fw-tlog-dot",ce.status])},null,2),Ie<z.value.length-1?(i(),r("span",g$)):P("",!0)]),o("div",y$,[o("div",{class:te(["fw-tlog-bubble",ce.status])},[o("div",w$,[o("span",b$,a(Ke(ce.time)),1),o("span",{class:te(["fw-tlog-st",ce.status])},a(be(ce.status)),3),o("span",_$,[Ie!==0?(i(),r(ae,{key:0},[ue(a(s(e)("taskStepSpent"))+" ",1),o("b",null,a(ye(ce.durMs)),1)],64)):P("",!0)])]),o("div",k$,a(Ye(ce)),1),ce.detail&&ce.detail!==ce.file?(i(),r("div",x$,a(ce.detail),1)):P("",!0)],2)])]))),128))])],64)):(i(),r("div",a$,a(s(e)("taskArchiveNone")),1))])])]),_:1},8,["modelValue"])],64)}}}),$$=xt(C$,[["__scopeId","data-v-516f499d"]]),S$={key:0,class:"fw-status-progress","aria-hidden":"true"},E$={class:"fw-status-tasks"},T$=["title"],D$=["inert"],F$={key:0,class:"fw-status-busy"},R$={class:"fw-status-busy-txt"},N$={key:1,class:"fw-status-info"},P$={key:0},A$={key:1,class:"fw-status-sub"},M$={key:2},O$={key:3},L$=["inert"],B$=["title","onClick"],I$=ht({__name:"StatusBar",props:{chromeDisabled:{type:Boolean}},setup(t){const{t:e}=Bt(),n=t,l=B(()=>n.chromeDisabled??!1),c=m(null),{cmOpen:u,cmX:v,cmY:d,openMenuAt:p}=pn();function w(){const C=c.value?.getBoundingClientRect();C&&p(C.left,C.top-4)}function b(){return{path:null,projectDir:Fe.root||null}}const $=B(()=>Xa().length>0),L=B(()=>{Fe.root;const C=b();return Xa().map(Z=>({label:Z.text,disabled:!!Z.when&&!Z.when(C),onClick:()=>{try{fi(Z.commandId,C)}catch(G){X("error",G.message)}}}))}),M=[{key:"details",icon:"eye",label:"viewDetails"},{key:"list",icon:"sort",label:"viewList"},{key:"large",icon:"grid",label:"viewLarge"}],A=B(()=>Kn.state.list.filter(C=>C.status==="running")),I=B(()=>A.value.length>0||Fe.search.running||le.loading||le.recycleLoading||le.drivesLoading),U=B(()=>{const C=A.value[0];return C?C.detail?`${C.label} · ${C.detail}`:C.label:Fe.search.running?e("statusSearching"):le.loading||le.recycleLoading||le.drivesLoading?e("statusLoading"):""});return(C,Z)=>(i(),r("div",{class:te(["fw-statusbar",{busy:I.value}])},[I.value?(i(),r("div",S$)):P("",!0),o("div",E$,[h($$),$.value?(i(),r("button",{key:0,ref_key:"extMenuBtnRef",ref:c,class:te(["fw-status-seg fw-status-ext-btn",{on:s(u)}]),title:s(e)("vsMenuExtensions"),onClick:w},[h(oe,{name:"puzzle",size:13}),o("span",null,a(s(e)("vsMenuExtensions")),1)],10,T$)):P("",!0)]),o("div",{class:te(["fw-status-left",{"chrome-disabled":l.value}]),inert:l.value},[U.value?(i(),r("span",F$,[Z[1]||(Z[1]=o("span",{class:"fw-status-busy-dot","aria-hidden":"true"},null,-1)),o("span",R$,a(U.value),1)])):s(Rt).visible?(i(),r("span",N$,[o("span",null,a(s(e)("statusItemsCount",{count:s(Rt).total})),1),s(Rt).selected?(i(),r("span",P$,"，"+a(s(e)("selectedCount",{count:s(Rt).selected})),1)):P("",!0),s(Rt).text?(i(),r("span",A$," · "+a(s(Rt).text),1)):P("",!0)])):s(le).view==="computer"?(i(),r("span",M$,a(s(e)("statusDrivesCount",{count:s(le).drives.length})),1)):s(le).view==="recycle"?(i(),r("span",O$,a(s(e)("statusItemsCount",{count:s(le).recycleItems.length})),1)):P("",!0)],10,D$),o("div",{class:te(["fw-status-right",{"chrome-disabled":l.value}]),inert:l.value},[(i(),r(ae,null,Ae(M,G=>kt(o("button",{key:G.key,class:te(["fw-vs-btn",{on:s(Rt).view===G.key}]),title:s(e)(G.label),onClick:F=>s(Xg)(G.key)},[h(oe,{name:G.icon,size:13},null,8,["name"])],10,B$),[[mo,s(Rt).canSwitchView]])),64))],10,L$),s(u)?(i(),Xe(Qt,{key:1,items:L.value,x:s(v),y:s(d),placement:"top",onClose:Z[0]||(Z[0]=G=>u.value=!1)},null,8,["items","x","y"])):P("",!0)],2))}}),j$=xt(I$,[["__scopeId","data-v-69ee25ba"]]),V$=["aria-disabled","inert"],z$={class:"fw-exp-left-main"},U$=["aria-valuenow"],H$={class:"fw-exp-right"},W$={class:"fw-explorer-statusbar-shell"},Ii="dsh-file-workbench.activeExternalView",G$=640,q$=780,K$=680,X$=ht({__name:"ExplorerPane",setup(t){const e=m(null),n=m(!1),l=sr(e),c=B(Dm);function u(){try{return localStorage.getItem(Ii)??"files"}catch{return"files"}}const v=m(u()),d=m(!1),p=m(null),w=new Set,b=new Set,$={apiVersion:qa,get projectDir(){return Fe.root||null},get theme(){return l.value},activeFile:null,onProjectChange(ne){return w.add(ne),ne(Fe.root||null),()=>w.delete(ne)},onThemeChange(ne){return b.add(ne),ne(l.value),()=>b.delete(ne)},onDidChangeActiveFile(ne){return ne(null),()=>{}},openFile:async ne=>{await sa(ne)},listOpenFiles:()=>[],openDiff:()=>X("info",y("gitDiffEmpty")),toast:X},L=B(()=>c.value.filter(ne=>!ne.when||ne.when($))),M=B(()=>L.value.find(ne=>ne.id===v.value));Qe(()=>v.value!=="files",ne=>{Fe.externalViewActive=ne},{immediate:!0});function A(ne){v.value=ne;try{localStorage.setItem(Ii,ne)}catch{}}function I(){v.value="files";try{localStorage.removeItem(Ii)}catch{}}Qe(()=>Fe.root,ne=>w.forEach(ie=>ie(ne||null))),Qe(l,ne=>b.forEach(ie=>ie(ne))),$s(ne=>{const ie=M.value,Se=p.value;if(!ie||!Se||ie.when&&!ie.when($))return;const Ve=ie.mount(Se,$);Ka(Se);const we=new ResizeObserver(()=>Ka(Se));we.observe(Se),ne(()=>{if(we.disconnect(),typeof Ve=="function")try{Ve()}catch{}Se.replaceChildren()})},{flush:"post"});const U=m(!1),C=m(0),Z=B(()=>C.value>0&&C.value<K$);let G=null;function F(){const ne=e.value?.clientWidth??0;C.value=ne,ne<=G$?U.value=!0:ne>=q$&&(U.value=!1)}const de=B(()=>!!Ga.value.trim()),j=B(()=>({width:`calc(${Math.round(Un.explorerSplit*1e3)/10}% - 3px)`}));function he(ne){if(!n.value||!e.value)return;const ie=e.value.getBoundingClientRect();if(ie.width<=0)return;const Se=(ne.clientX-ie.left)/ie.width;Un.explorerSplit=Math.min(.85,Math.max(.15,Se))}function Ee(){n.value&&(n.value=!1,document.removeEventListener("mousemove",he),document.removeEventListener("mouseup",Ee),document.body.style.userSelect="",document.body.style.cursor="",Da())}function ve(){n.value=!0,document.addEventListener("mousemove",he),document.addEventListener("mouseup",Ee),document.body.style.userSelect="none",document.body.style.cursor="col-resize"}return Pt(()=>{document.removeEventListener("mousemove",he),document.removeEventListener("mouseup",Ee),G?.disconnect(),G=null}),ln(()=>{e.value&&(G=new ResizeObserver(()=>F()),G.observe(e.value),F())}),(ne,ie)=>(i(),r("div",{ref_key:"rootRef",ref:e,class:te(["fw-explorer",{"user-slot-active":v.value!=="files"}])},[o("div",{class:te(["fw-explorer-topbar-shell",{"external-view-disabled":v.value!=="files"}]),"aria-disabled":v.value!=="files",inert:v.value!=="files"},[h(Xx,{"nav-folded":U.value,compact:Z.value,onUnfoldNav:ie[0]||(ie[0]=Se=>U.value=!1)},null,8,["nav-folded","compact"])],10,V$),o("div",{class:te(["fw-exp-body",{"left-folded":U.value,"user-slot-active":v.value!=="files"}])},[o("div",{class:"fw-exp-left",style:_t(j.value)},[o("div",z$,[h(xg,{"external-views":L.value,"external-collapsed":d.value,"active-external-id":v.value==="files"?"":v.value,"external-active":v.value!=="files"&&!!M.value,onToggleExternal:ie[1]||(ie[1]=Se=>d.value=!d.value),onSelectExternal:A,onSelectLocal:I},null,8,["external-views","external-collapsed","active-external-id","external-active"])])],4),o("div",{class:te(["fw-exp-split",{dragging:n.value}]),role:"separator","aria-orientation":"vertical","aria-valuenow":Math.round(s(Un).explorerSplit*100),"aria-valuemin":15,"aria-valuemax":85,onMousedown:_e(ve,["prevent"])},null,42,U$),o("div",H$,[M.value?(i(),r("div",{key:0,ref_key:"extHostRef",ref:p,class:"fw-exp-ext-view"},null,512)):(i(),r(ae,{key:1},[de.value?(i(),Xe(Wg,{key:0})):s(le).view==="computer"?(i(),Xe($x,{key:1})):(i(),Xe(Sk,{key:2}))],64))])],2),o("div",W$,[h(j$,{"chrome-disabled":v.value!=="files"},null,8,["chrome-disabled"])])],2))}}),Y$=xt(X$,[["__scopeId","data-v-83c03138"]]),J$={class:"fw-navpath"},Q$=["title"],Z$={class:"fw-crumb last"},eS=["title"],tS=["onKeydown"],nS={key:0,class:"fw-crumb-sep"},sS=["title","onClick"],oS={key:2,class:"fw-path"},aS=ht({__name:"NavPathBar",setup(t){const{t:e}=Bt(),n=B(()=>hl.value||Fe.root||""),l=B(()=>le.view==="computer"?e("navThisPc"):le.view==="recycle"?e("recycleBin"):""),c=B(()=>le.view==="computer"?"monitor":"trash"),u=B(()=>n.value.startsWith("ssh://")),v=B(()=>{const A=n.value;if(!A)return[];const I=Du(A);if(I)return I;const U=A.replace(/\\/g,"/").split("/").filter(G=>G.length>0),C=[];let Z="";return U.forEach((G,F)=>{const de=/^[A-Za-z]:$/.test(G);Z=F===0?de?G+"/":"/"+G:Z.replace(/[\\/]+$/,"")+"/"+G,C.push({name:G,path:Z})}),C});function d(A){Vt(A)}const p=m(!1),w=m(""),b=m(null);function $(){w.value=n.value,p.value=!0,Dt(()=>{b.value?.focus(),b.value?.select()})}function L(){const A=w.value.trim();p.value=!1,A&&A!==n.value&&Vt(A).catch(I=>X("error",I.message))}function M(){p.value=!1}return(A,I)=>(i(),r("div",J$,[l.value?(i(),r("span",{key:0,class:"fw-path fw-crumbs fw-path-static",title:l.value},[h(oe,{name:c.value,size:14,class:"fw-path-static-ico"},null,8,["name"]),o("span",Z$,a(l.value),1)],8,Q$)):n.value?(i(),r("span",{key:1,class:te(["fw-path",{"fw-crumbs":!p.value,editing:p.value}]),title:n.value,onClick:$},[p.value?kt((i(),r("input",{key:0,ref_key:"pathInputRef",ref:b,"onUpdate:modelValue":I[0]||(I[0]=U=>w.value=U),class:"fw-path-input",spellcheck:"false",onKeydown:[bt(_e(L,["prevent"]),["enter"]),bt(_e(M,["prevent"]),["esc"])],onBlur:M},null,40,tS)),[[Lt,w.value]]):(i(!0),r(ae,{key:1},Ae(v.value,(U,C)=>(i(),r(ae,{key:C},[C>0?(i(),r("span",nS,a(u.value?"/":"\\"),1)):P("",!0),o("button",{class:te(["fw-crumb",{last:C===v.value.length-1}]),title:U.path,onClick:_e(Z=>d(U.path),["stop"])},a(U.name),11,sS)],64))),128))],10,eS)):(i(),r("span",oS,a(s(e)("noFolder")),1))]))}}),iS=xt(aS,[["__scopeId","data-v-7f7f6ad1"]]),lS=["aria-disabled","inert"],rS={class:"fw-right"},cS=640,uS=ht({__name:"WinMenuBar",props:{externalViewActive:{type:Boolean}},emits:["open-settings"],setup(t,{emit:e}){const n=e,{t:l}=Bt(),c=m(null),u=m(!1);let v=null;ln(()=>{c.value&&(v=new ResizeObserver(()=>{u.value=(c.value?.clientWidth??0)<cS}),v.observe(c.value))}),Pt(()=>{v?.disconnect(),v=null});const d=m(!1);let p;function w(){Ft(),d.value=!0,p&&clearTimeout(p),p=setTimeout(()=>d.value=!1,650)}const b=B(()=>le.loading||d.value);function $(){Lu()}function L(){Bu()}const M=B({get:()=>Ga.value,set:Z=>ba(Z)});let A;const I=B(()=>ri(hl.value)?hl.value:Fe.root||"");function U(){A&&clearTimeout(A);const Z=M.value;if(!Z.trim()){ba(""),po("").catch(G=>X("error",G.message));return}A=setTimeout(()=>{ba(Z),po(Z,I.value).catch(G=>X("error",G.message))},350)}function C(){M.value="",ba(""),po("")}return Qe(Ga,Z=>{!Z&&M.value&&(M.value="")}),(Z,G)=>{const F=An,de=Ss;return i(),r("header",{ref_key:"toolbarRef",ref:c,class:te(["fw-toolbar",{"external-view-disabled":t.externalViewActive}]),"aria-disabled":t.externalViewActive,inert:t.externalViewActive},[kt(h(F,{text:"",size:"small",title:s(l)("goBack"),disabled:!s(xh),onClick:$},{default:se(()=>[h(oe,{name:"arrowLeft",size:16})]),_:1},8,["title","disabled"]),[[mo,!u.value]]),kt(h(F,{text:"",size:"small",title:s(l)("goForward"),disabled:!s(Ch),onClick:L},{default:se(()=>[h(oe,{name:"arrowRight",size:16})]),_:1},8,["title","disabled"]),[[mo,!u.value]]),h(F,{text:"",size:"small",title:s(l)("goUp"),disabled:!s($h),onClick:s(vl)},{default:se(()=>[h(oe,{name:"up",size:16})]),_:1},8,["title","disabled","onClick"]),h(F,{text:"",size:"small",title:s(l)("goSessionDir"),onClick:s(ju)},{default:se(()=>[h(oe,{name:"compass",size:16})]),_:1},8,["title","onClick"]),h(F,{text:"",size:"small",title:s(l)("refreshList"),onClick:w},{default:se(()=>[h(oe,{name:"refresh",class:te(["fw-refresh-ic",{spinning:b.value}]),size:15},null,8,["class"])]),_:1},8,["title"]),h(F,{text:"",size:"small",title:s(l)("settings"),onClick:G[0]||(G[0]=j=>n("open-settings"))},{default:se(()=>[h(oe,{name:"gear",size:16})]),_:1},8,["title"]),h(iS),o("div",rS,[h(de,{modelValue:M.value,"onUpdate:modelValue":G[1]||(G[1]=j=>M.value=j),class:"fw-search-input",size:"small",clearable:"",placeholder:s(l)("searchPlaceholder"),onInput:U,onClear:C},{prefix:se(()=>[h(oe,{name:"search",size:14,class:"fw-search-ico"})]),_:1},8,["modelValue","placeholder"])])],10,lS)}}}),dS=xt(uS,[["__scopeId","data-v-ccd8c5b0"]]),fS={class:"fw-shortcut"},pS={class:"fw-shortcut-head"},vS={class:"fw-shortcut-title"},hS=["title"],mS={class:"fw-shortcut-body"},gS={class:"fw-shortcut-group-title"},yS={class:"fw-shortcut-keys"},wS={class:"fw-shortcut-desc"},bS={class:"fw-shortcut-foot"},_S=ht({__name:"ShortcutHelpDialog",setup(t,{expose:e}){const{t:n}=Bt(),l=m(!1),c=B(()=>[{title:n("shortcutGlobal"),items:[{keys:["?"],label:n("shGlobalHelp")}]},{title:n("shortcutFileList"),items:[{keys:["Ctrl","A"],label:n("shListSelectAll")},{keys:["Ctrl","C"],label:n("shListCopy")},{keys:["Ctrl","X"],label:n("shListCut")},{keys:["Ctrl","V"],label:n("shListPaste")},{keys:["Ctrl","F"],label:n("shListFilter")},{keys:["Ctrl","Shift","N"],label:n("shListNewFolder")},{keys:["Delete"],label:n("shListDelete")},{keys:["F2"],label:n("shListRename")},{keys:["F5"],label:n("shListRefresh")},{keys:["Enter"],label:n("shListOpen")},{keys:["↑","↓","Home","End"],label:n("shListMove")},{keys:["Backspace"],label:n("shListUp")},{keys:["Alt","←"],label:n("shListBack")},{keys:["Alt","→"],label:n("shListForward")}]}]);Qe(l,d=>{d?window.addEventListener("keydown",u):window.removeEventListener("keydown",u)});function u(d){d.key==="Escape"&&v()}function v(){l.value=!1}return e({open:()=>l.value=!0}),(d,p)=>(i(),Xe(Oc,{to:"body"},[l.value?(i(),r("div",{key:0,class:"fw-shortcut-mask",onMousedown:_e(v,["self"])},[o("div",fS,[o("div",pS,[o("span",vS,a(s(n)("shortcutHelp")),1),o("span",{class:"fw-shortcut-close",title:s(n)("closeTab"),onClick:v},"✕",8,hS)]),o("div",mS,[(i(!0),r(ae,null,Ae(c.value,w=>(i(),r("section",{key:w.title,class:"fw-shortcut-group"},[o("h4",gS,a(w.title),1),(i(!0),r(ae,null,Ae(w.items,b=>(i(),r("div",{key:b.keys.join(),class:"fw-shortcut-row"},[o("span",yS,[(i(!0),r(ae,null,Ae(b.keys,$=>(i(),r("kbd",{key:$,class:"fw-shortcut-kbd"},a($),1))),128))]),o("span",wS,a(b.label),1)]))),128))]))),128))]),o("div",bS,a(s(n)("shortcutHint")),1)])],32)):P("",!0)]))}}),kS=xt(_S,[["__scopeId","data-v-f4ba30d1"]]),xS={class:"fw-body"},CS=ht({__name:"App",setup(t){const e=m(null);sr(e);const n=B(()=>{const v=(Ue.fontFamily??"").trim(),d=v&&v!=="default"?v:"",p=Ue.fontSize??13;return{fontFamily:d?`${d}, var(--dsh-font, "Segoe UI", system-ui, sans-serif)`:void 0,fontSize:`${p}px`,"--dsh-fs-scale":String(p/13)}});$s(()=>{const v=Ue.fontSize??13;document.documentElement.style.setProperty("--dsh-fs-scale",String(v/13))});const l=m(null),c=m(null);ln(async()=>{try{await kh()}catch{}await Pu(),Ql(),Th()&&(await ju()||await Iu()),window.addEventListener("keydown",u)}),Pt(()=>{window.removeEventListener("keydown",u)});function u(v){if(!v.ctrlKey&&!v.metaKey&&!v.altKey&&v.key==="?"){if(v.target?.closest("input, textarea, select, [contenteditable='true'], .el-input, .el-textarea"))return;v.preventDefault(),c.value?.open()}}return(v,d)=>(i(),r("div",{ref_key:"rootEl",ref:e,class:"fw-root",style:_t(n.value)},[h(dS,{"external-view-active":s(Fe).externalViewActive,onOpenSettings:d[0]||(d[0]=p=>l.value?.open())},null,8,["external-view-active"]),o("div",xS,[h(Y$)]),h(Zv,{ref_key:"settingsRef",ref:l},null,512),h(zc),h(kS,{ref_key:"shortcutRef",ref:c},null,512)],4))}}),$S=xt(CS,[["__scopeId","data-v-4a279056"]]);function wd(){return{projectDir:null,recentProjects:[],openTabs:[],activeTab:null,expanded:[],expandedSeeded:[],split:.26,termHeight:260,treeScroll:0,views:{},activityBar:{position:"top",hidden:[]},sidebarSide:"left"}}const ea=10,hc=8;function SS(t){return t<=1?"vscode":`vscode-${t}`}let Vn={version:2,recents:[],slots:{}},ji=null,ls=[];function ES(t){return Array.isArray(t)?[...new Set(t.filter(e=>typeof e=="string"&&e!==""))].slice(0,ea):[]}function TS(t){if(!t||typeof t!="object")return null;const e=t,n={};return typeof e.scrollTop=="number"&&Number.isFinite(e.scrollTop)&&e.scrollTop>=0&&(n.scrollTop=e.scrollTop),typeof e.anchor=="number"&&Number.isFinite(e.anchor)&&e.anchor>=0&&(n.anchor=e.anchor),n.scrollTop===void 0&&n.anchor===void 0?null:n}function mc(t){const e=wd();if(typeof t.projectDir=="string"&&(e.projectDir=t.projectDir),Array.isArray(t.recentProjects)&&(e.recentProjects=[...new Set(t.recentProjects.filter(n=>typeof n=="string"&&n!==""))].slice(0,ea)),Array.isArray(t.openTabs)&&(e.openTabs=t.openTabs.filter(n=>typeof n=="string")),typeof t.activeTab=="string"&&(e.activeTab=t.activeTab),Array.isArray(t.expanded)&&(e.expanded=t.expanded.filter(n=>typeof n=="string")),Array.isArray(t.expandedSeeded)&&(e.expandedSeeded=t.expandedSeeded.filter(n=>typeof n=="string")),typeof t.split=="number"&&t.split>.1&&t.split<.9&&(e.split=t.split),typeof t.termHeight=="number"&&Number.isFinite(t.termHeight)&&t.termHeight>=100&&(e.termHeight=Math.min(1200,t.termHeight)),typeof t.treeScroll=="number"&&Number.isFinite(t.treeScroll)&&t.treeScroll>=0&&(e.treeScroll=t.treeScroll),t.activityBar&&typeof t.activityBar=="object"&&(t.activityBar.position==="top"||t.activityBar.position==="bottom")){const n=t.activityBar;e.activityBar.position=n.position,Array.isArray(n.hidden)&&(e.activityBar.hidden=n.hidden.filter(l=>typeof l=="string"&&l!==""))}if((t.sidebarSide==="left"||t.sidebarSide==="right")&&(e.sidebarSide=t.sidebarSide),t.views&&typeof t.views=="object"){const n={};for(const[l,c]of Object.entries(t.views)){const u=TS(c);u&&(n[l]=u)}e.views=n}return e.activeTab&&!e.openTabs.includes(e.activeTab)&&(e.activeTab=e.openTabs[0]??null),e}function DS(t){if(!t||typeof t!="object")return{version:2,recents:[],slots:{}};const e=t;if(e.version===2&&e.slots&&typeof e.slots=="object"){const n={};for(const[c,u]of Object.entries(e.slots))u&&typeof u=="object"&&(n[c]=mc(u));let l;if(e.recents===void 0){const c=[];for(const u of Object.keys(n).sort((v,d)=>Number(v)-Number(d)))for(const v of n[u]?.recentProjects??[])c.includes(v)||c.push(v);l=c.slice(0,ea)}else l=ES(e.recents);for(const c of Object.values(n))c.recentProjects=[...l];return{version:2,recents:l,slots:n}}if(typeof e.projectDir=="string"||Array.isArray(e.openTabs)){const n=mc(e);return{version:2,recents:[...n.recentProjects],slots:{1:n}}}return{version:2,recents:[],slots:{}}}function FS(){return ji||(ji=(async()=>{const t=await su().catch(()=>null);Vn=DS(t?.vscode)})()),ji}const $l=new Map,Ra=new Map;function xa(t){ls=[...t];for(const e of $l.values())e.state.recentProjects=[...ls]}function bd(t){const e=t||"@default",n=Ra.get(e);if(n!==void 0)return n;const l=new Set(Ra.values());let c=1;for(;l.has(c);)c++;return Ra.set(e,c),c}function dr(t){let e=$l.get(t);return e||(e=BS(t),$l.set(t,e)),e}const Za=new Map;function _d(t){let e=Za.get(t);return e||(e=new Map,Za.set(t,e)),e}function Vi(t,e){Za.get(t)?.delete(e)}function RS(t){Za.delete(t)}const Sl=new Map;function gc(t,e){e?Sl.set(t,e):Sl.delete(t)}function NS(t){return Sl.get(t)}const El=new Map;function Ca(t,e){e?El.set(t,e):El.delete(t)}function PS(t){return El.get(t)}const Tl=new Map,Dl=new Map;function AS(t,e){let n=Tl.get(t);return n||(n=new Set,Tl.set(t,n)),n.add(e),()=>{n?.delete(e)}}function MS(t,e){let n=Dl.get(t);return n||(n=new Set,Dl.set(t,n)),n.add(e),()=>{n?.delete(e)}}function OS(t,e,n){Tl.get(t)?.forEach(l=>l(e,n))}function LS(t,e){Dl.get(t)?.forEach(n=>n(e))}const gi=Symbol("dsh-file-workbench/vscode-store");function BS(t){const e=gt(wd()),n=m(!1),l=m(null);let c=null,u=null,v=null,d=!1,p=null,w=0;const b={};let $={};function L(){const G=Object.keys(Vn.slots).map(Number).filter(F=>Number.isFinite(F)&&F!==t).sort((F,de)=>F-de);for(const F of G){const de=Vn.slots[String(F)]?.projectDir;if(de)return de}return null}function M(){const G=Object.keys(Vn.slots);if(G.length<=hc)return;const F=new Set([...Ra.values()].map(String));F.add(String(t));const de=G.filter(j=>!F.has(j)).sort((j,he)=>Number(j)-Number(he));for(const j of de.slice(0,G.length-hc))delete Vn.slots[j]}function A(){for(const G of Object.values(Vn.slots))G.recentProjects=[...ls];Vn.slots[String(t)]={...e,recentProjects:[...ls],views:{...e.views,...b}},Vn.recents=[...ls],M(),Ks("vscode",Vn)}function I(){p===null&&(p=setTimeout(()=>{p=null,A()},400))}function U(G){const F=G.trim();F&&(xa([F,...ls.filter(de=>de!==F)].slice(0,ea)),I())}function C(G){xa(ls.filter(F=>F!==G)),A()}function Z(){xa([]),A()}return{slot:t,rootKey:SS(t),state:e,ready:n,projectRequest:l,get tabId(){return c},get panelId(){return u},bindTab(G,F){c=G,u=F},markFresh(){d=!0},init(){return v||(v=(async()=>{if(await FS().catch(()=>{}),ls=[...Vn.recents],!d){const G=Vn.slots[String(t)];if(G)Object.assign(e,G,{views:{...G.views}});else if(!e.projectDir){const F=L();F&&(e.projectDir=F)}}xa([...new Set([...ls,...e.recentProjects])].slice(0,ea))})()),v},persist:A,persistSoon:I,rememberProject:U,forgetProject:C,clearRecentProjects:Z,fileViewOf(G){return G?b[G]??e.views[G]??{}:{}},rememberFileView(G,F){if(!G)return;const de=b[G];de&&de.scrollTop===F.scrollTop&&de.anchor===F.anchor||(b[G]={...F},I())},stashOpenBuffers(G){$={};for(const[F,de]of Object.entries(G))$[F]={...de}},takeStashedBuffers(){const G=$;return $={},G},requestOpenProject(G){const F=G?.trim();F&&(l.value={dir:F,n:++w})}}}function fr(){return dr(1)}const IS={key:0,class:"vs-tree-loading"},jS={key:1,class:"vs-tree-empty"},VS=["onClick","onContextmenu","onDragstart","onDragover","onDragleave","onDrop"],zS=["onClick"],US={key:0},HS=["title"],WS=["title"],GS=["title"],qS={key:2,class:"vs-loading"},KS={class:"vs-diff-body"},Fl=new Map,XS=3e4;function YS(t,e){if(!e)return null;const n=Fl.get(t);return n&&n.root===e?n:null}const yc=new Set(["node_modules",".git",".svn",".hg","dist","build","out",".next",".nuxt",".cache","coverage","vendor","target",".venv","venv","__pycache__","bin","obj"]),JS=ht({__name:"ProjectTree",props:{root:{},activePath:{}},emits:["open-file","file-removed","file-renamed","project-missing","remove-project"],setup(t,{expose:e,emit:n}){const l=t,c=n,u=Bl(gi)??fr(),v=u.state,d=u.ready,p=u.rootKey,w=()=>u.persist(),b=()=>u.persistSoon();let $=YS(p,l.root);const L=$?$.nodes:gt({}),M=m($?$.rootPath:null),A=m(null),I=m(!1);function U(D){const me=l.root;me&&($={root:me,nodes:L,rootPath:M.value,at:Date.now()},Fl.set(p,$))}function C(){$=null,Fl.delete(p);for(const D of Object.keys(L))delete L[D];M.value=null}let Z=0;const G=3e3;async function F(){const D=l.root;if(!D||!d.value||Date.now()-Z<G)return;Z=Date.now();let me=!0;try{me=await Qi(D,{silent:!0})}catch{me=!0}!me&&l.root===D&&(C(),c("project-missing",D))}function de(){F()}ln(()=>window.addEventListener("focus",de)),Pt(()=>window.removeEventListener("focus",de));function j(){$&&($.at=Date.now())}const he=B(()=>M.value?L[M.value]??null:null),Ee=B(()=>{const D=[],me=he.value;if(!me)return D;const Be=He=>{if(D.push(He),He.expanded)for(const Pe of He.children){const Ge=L[Pe];Ge&&Be(Ge)}};return Be(me),D});function ve(D,me,Be,He,Pe){return{path:D,name:me,isDir:Be,depth:He,owner:Pe,expanded:!1,loaded:!1,loading:!1,children:[]}}function ne(D){return D.replace(/[\\/][^\\/]+$/,"")}function ie(D){if(D.isDir)for(const me of D.children){const Be=L[me];!Be||!Be.isDir||!v.expanded.includes(Be.path)||(Be.expanded=!0,Be.loaded?ie(Be):Se(Be))}}async function Se(D,me=!1){if(D=L[D.path]??D,!D.loading){D.loading=!0,ks(D.path),so(D.path);try{const Pe=(await Ta(D.path,p)).entries.filter(Ge=>!Ge.hidden).sort((Ge,Et)=>Number(Et.isDir)-Number(Ge.isDir)||Ge.name.localeCompare(Et.name,"zh"));D.children=[];for(const Ge of Pe){const Et=L[Ge.path]??ve(Ge.path,Ge.name,Ge.isDir,D.depth+1,D.path);Et.name=Ge.name,Et.isDir=Ge.isDir,Et.depth=D.depth+1,Et.owner=D.path,L[Ge.path]=Et,D.children.push(Ge.path)}D.loaded=!0,j(),ie(D)}catch(He){if(D.loading=!1,Gc(He)){me||(await new Promise(Pe=>setTimeout(Pe,150)),await Se(D,!0));return}if(D.depth===0&&He instanceof Ws&&He.status===404){C(),c("project-missing",D.path);return}X("error",He.message)}finally{D.loading=!1}}}function Ve(D){D.isDir&&(D.expanded=!D.expanded,Ne(D.path,D.expanded),D.expanded&&(D.loaded?ie(D):Se(D)))}function we(D){D.isDir?Ve(D):c("open-file",D.path)}function Ne(D,me,Be=!0){const He=new Set(v.expanded),Pe=He.has(D);me?He.add(D):He.delete(D),Pe!==me&&(v.expanded=[...He],Be&&Dn())}const W=1,J=20;async function z(D,me,Be){if(!(!D.isDir||me<=0))for(const He of[...D.children]){if(Be.n>=J)return;const Pe=L[He];!Pe||!Pe.isDir||yc.has(Pe.name.toLowerCase())||(Be.n+=1,Pe.expanded=!0,Ne(Pe.path,!0,!1),Pe.loaded?ie(Pe):await Se(Pe),await z(Pe,me-1,Be))}}async function ee(D){D.expanded=!0,Ne(D.path,!0,!1),await z(D,W,{n:0}),v.expandedSeeded.includes(D.path)||(v.expandedSeeded=[...v.expandedSeeded,D.path]),Dn()}function ge(){const D=A.value;D&&(v.treeScroll=D.scrollTop,b())}async function je(){await Dt();const D=A.value;D&&(D.scrollTop=v.treeScroll||0)}let Ke=0;async function Ze(){const D=Ke;for(const me of Ee.value.filter(Be=>Be.isDir&&Be.loaded).map(Be=>Be.path)){if(D!==Ke)return;const Be=L[me];!Be||Be.loading||await Se(Be)}j()}async function ye(){const D=++Ke;l.root&&(I.value=!0);try{if(l.root){let $t=!0;try{$t=await Qi(l.root)}catch{$t=!0}if(!$t){C(),c("project-missing",l.root);return}}if($&&l.root&&$.root===l.root&&L[l.root]){M.value=l.root,Date.now()-$.at>XS?Ze():await je();return}$=null;for(const $t of Object.keys(L))delete L[$t];if(!l.root){M.value=null;return}try{await Vl(l.root,p)}catch{}if(D!==Ke)return;const me=Wt(l.root)?fl(l.root):l.root.split(/[\\/]/).filter(Boolean).pop()??l.root,Be=ve(l.root,me,!0,0,l.root);L[l.root]=Be,M.value=l.root;const He=L[l.root],Pe=l.root.replace(/[\\/]+$/,"").toLowerCase(),Ge=v.expanded.some($t=>{const wn=$t.replace(/[\\/]+$/,"").toLowerCase();return wn===Pe||wn.startsWith(`${Pe}\\`)||wn.startsWith(`${Pe}/`)});if(v.expandedSeeded.includes(l.root)&&Ge)He.expanded=v.expanded.includes(l.root),await Se(He);else{if(He.expanded=!0,await Se(He),D!==Ke)return;await ee(He)}if(D!==Ke)return;for(let $t=0;$t<3&&He.expanded&&He.children.length===0;$t+=1){if(await new Promise(wn=>setTimeout(wn,[200,600,1500][$t])),D!==Ke)return;He.loaded=!1,await Se(He)}if(D!==Ke)return;await je(),U()}finally{D===Ke&&(I.value=!1)}}e({rebuild:ye,createFileAtRoot:Ts,createFolderAtRoot:En}),Qe(()=>[l.root,d.value],()=>{d.value&&ye()},{immediate:!0});const be={"":"",untracked:"?",added:"A",modified:"M",deleted:"D"};function Ye(D){return D.depth===0?"":dd(D.owner,D.name)}function st(D){return be[Ye(D)]}function pe(D){const me=Ye(D);return me==="untracked"?y("gitBadgeUntracked"):me==="added"?y("gitBadgeAdded"):me==="modified"?y("gitBadgeModified"):me==="deleted"?y("gitBadgeDeleted"):""}function ke(D){return D.depth===0?"":fd(D.owner,D.name)}function qe(D){return be[ke(D)]}function ce(D){const me=ke(D);return me==="untracked"?y("gitBadgeUntracked"):me==="added"?y("gitBadgeAdded"):me==="modified"?y("gitBadgeModified"):me==="deleted"?y("gitBadgeDeleted"):""}const{cmOpen:Ie,cmX:rt,cmY:yt,openMenu:ut}=pn(),it=m(null),Le=m(!1),H=B(()=>it.value?Le.value?T(it.value):O(it.value):[]);function N(D,me){Le.value=!1,it.value=D;const Be=Te(D);ks(Be),so(Be),ut(me)}function Q(D){const me=l.root?L[l.root]:void 0;me&&(Le.value=!0,it.value=me,ks(me.path),so(me.path),ut(D))}function Te(D){return D.owner||D.path}function O(D){const me=Te(D),Be=[];return Be.push(D.isDir?{label:y("menuOpen"),icon:"folderOpen",onClick:()=>Ve(D)}:{label:y("menuOpen"),icon:"arrowRight",onClick:()=>c("open-file",D.path)}),Be.push({separator:!0}),Be.push({label:y("vsNewFile"),icon:"file",onClick:()=>void cn(D)},{label:y("vsNewFolder"),icon:"folder",onClick:()=>void Ln(D)},{label:y("vsRename"),icon:"edit",onClick:()=>void Gn(D)},{label:y("vsDelete"),icon:"trash",onClick:()=>void Tn(D)}),Be.push(...wl(me,D.path,ze)),Be.push(...bl(me,D.path,ze)),Be.push({separator:!0},{label:y("menuCopyRelPath"),icon:"link",onClick:()=>void Cn(D.path)},{label:y("menuCopyAbsPath"),icon:"link",onClick:()=>void zt(D.path)},{label:y("menuOpenTerminal"),icon:"terminal",onClick:()=>ot(D)},{label:y("vsAddToSession"),icon:"sparkle",onClick:()=>ft(D)},{separator:!0},{label:y("vsRefresh"),icon:"refresh",onClick:()=>void gn(D)}),D.depth===0&&(Be.push({separator:!0}),Be.push({label:y("vsRemoveProject"),icon:"close",onClick:()=>c("remove-project",D.path)})),Be}function T(D){const me=D.path;return[{label:y("vsNewFile"),icon:"file",onClick:()=>void cn(D)},{label:y("vsNewFolder"),icon:"folder",onClick:()=>void Ln(D)},{separator:!0},{label:y("vsExpandAll"),icon:"chevronDown",onClick:()=>void De()},{label:y("vsCollapseAll"),icon:"chevronRight",onClick:K},...wl(me,me,ze),...bl(me,me,ze),{separator:!0},{label:y("menuCopyRelPath"),icon:"link",onClick:()=>void Cn(me)},{label:y("menuCopyAbsPath"),icon:"link",onClick:()=>void zt(me)},{label:y("menuOpenTerminal"),icon:"terminal",onClick:()=>ot(D)},{label:y("vsAddToSession"),icon:"sparkle",onClick:()=>ft(D)},{separator:!0},{label:y("vsRefresh"),icon:"refresh",onClick:()=>void gn(D)},{separator:!0},{label:y("vsRemoveProject"),icon:"close",onClick:()=>c("remove-project",D.path)}]}function K(){const D=l.root?L[l.root]:void 0;if(D){for(const me of Object.values(L))me.expanded=me.depth===0;v.expanded=[D.path],v.expandedSeeded=[...new Set([...v.expandedSeeded,D.path])],Dn()}}const S=120;async function q(){const D=l.root?L[l.root]:void 0;if(!D)return!1;let me=S,Be=!1;const He=async Pe=>{if(me<=0){Be=!0;return}me-=1;const Ge=L[Pe];if(Ge?.isDir){Ge.expanded=!0,Ne(Ge.path,!0,!1),Ge.loaded||await Se(Ge);for(const Et of[...Ge.children]){const $t=L[Et];if($t?.isDir&&!yc.has($t.name.toLowerCase())&&(await He(Et),me<=0)){Be=!0;return}}}};return await He(D.path),Dn(),Be}async function De(){await q()&&X("info",y("vsExpandAllLimited",{n:String(S)}))}const re=m(!1),ct=m(!1),wt=m(!1),Ot=m(!1),Mn=m(""),Gt=m(""),ze={openGitPanel:()=>{Gt.value=it.value?Te(it.value):l.root??"",re.value=!0},openSvnPanel:()=>{Gt.value=it.value?Te(it.value):l.root??"",ct.value=!0},openCommit:()=>{Gt.value=it.value?Te(it.value):l.root??"",wt.value=!0},showGitDiff:D=>{Mn.value=D,Ot.value=!0},afterMutate:async D=>{await ks(D),await so(D)}};function Je(D){re.value=D,D||lt()}function et(D){ct.value=D,D||lt()}async function lt(){xs("git"),xs("svn");const D=new Set([...Object.keys(mi.dirs),...Object.keys(Zo.dirs)]);l.root&&D.add(l.root),await Promise.all([...D].flatMap(me=>[ks(me),so(me)]))}function xn(D){const me=(l.root??"").replace(/[\\/]+$/,"");return me&&D.toLowerCase().startsWith(me.toLowerCase())?D.slice(me.length).replace(/^[\\/]+/,""):D}async function Cn(D){const me=await ic(xn(D));X(me?"ok":"error",y(me?"menuPathCopied":"menuPathCopyFail"))}async function zt(D){const me=await ic(D);X(me?"ok":"error",y(me?"menuPathCopied":"menuPathCopyFail"))}function ot(D){xo(D.isDir?D.path:ne(D.path))}function ft(D){(window.__DSH_FILE_WORKBENCH__?.appendSessionReference?.(D.path,D.isDir)??!1)||X("error",y("vsAddToSessionFail"))}function Ct(D){return D.isDir?D:L[ne(D.path)]??D}let On=null;const $n=m(null);function Jn(D,me){On=D.path,me.dataTransfer?.setData("text/plain",D.path),me.dataTransfer&&(me.dataTransfer.effectAllowed="move")}function mn(D,me){!On||On===D.path||(me.dataTransfer&&(me.dataTransfer.dropEffect="move"),$n.value=D.isDir?D.path:ne(D.path))}function Sn(D){const me=D.isDir?D.path:ne(D.path);$n.value===me&&($n.value=null)}async function Xs(D,me){const Be=On??me.dataTransfer?.getData("text/plain")??"",He=Ct(D).path;if(On=null,$n.value=null,!Be||!He)return;const Pe=He.replace(/[\\/]+$/,"");if(Be===He||Pe.startsWith(Be.replace(/[\\/]+$/,"")))return;const Ge=Be.split(/[\\/]/).filter(Boolean).pop()??"";if(!Ge)return;const Et=`${Pe}/${Ge}`;if(Et!==Be)try{await Oa(Be,Et,p),c("file-renamed",Be,Et);const $t=L[Pe];$t?.isDir&&!$t.expanded&&($t.expanded=!0,Ne(Pe,!0)),await Qn()}catch($t){X("error",$t.message)}}function Ts(){const D=l.root?L[l.root]:void 0;D&&cn(D)}function En(){const D=l.root?L[l.root]:void 0;D&&Ln(D)}async function cn(D){const me=Ct(D),Be=await ds({title:y("vsNewFile"),message:y("vsNewFileName"),placeholder:"untitled.txt",initial:"untitled.txt"})??null;if(!Be)return;const He=`${me.path.replace(/[\\/]+$/,"")}/${Be}`;try{await Jc(He,p),await yn(me),c("open-file",He)}catch(Pe){X("error",Pe.message)}}async function Ln(D){const me=Ct(D),Be=await ds({title:y("vsNewFolder"),message:y("vsNewFolderName"),placeholder:"new-folder",initial:"new-folder"})??null;if(!Be)return;const He=`${me.path.replace(/[\\/]+$/,"")}/${Be}`;try{await Ma(He,p),await yn(me)}catch(Pe){X("error",Pe.message)}}async function Gn(D){const me=ne(D.path),Be=D.name,He=await ds({title:y("vsRename"),message:y("vsRenameName"),placeholder:Be,initial:Be})??null;if(!He||He===Be)return;const Pe=`${me.replace(/[\\/]+$/,"")}/${He}`;try{await Oa(D.path,Pe,p),c("file-renamed",D.path,Pe);const Ge=L[me];Ge&&await yn(Ge)}catch(Ge){X("error",Ge.message)}}async function Tn(D){if(!await Mt({title:y("vsDelete"),message:`${y("vsDeleteConfirm")}「${D.name}」？`}))return;const Be=ne(D.path);try{if(await Ji(D.path,p),c("file-removed",D.path),D.depth===0){C(),c("project-missing",D.path);return}const He=L[Be];He&&await yn(He)}catch(He){X("error",He.message)}}async function gn(D){await yn(D.isDir?D:L[ne(D.path)]??D)}async function yn(D){xs("list:"),D.loaded=!1,D.expanded=!0,Ne(D.path,!0),await Se(D)}async function Qn(){xs("list:");const D=he.value;if(!D)return;const me=new Set,Be=async He=>{if(!me.has(He.path)){me.add(He.path),await Se(He);for(const Pe of[...He.children]){const Ge=L[Pe];Ge?.isDir&&Ge.expanded&&!Ge.loading&&await Be(Ge)}}};await Be(D),j()}function Dn(){w()}return(D,me)=>{const Be=An,He=rn;return i(),r("div",{ref_key:"treeRef",ref:A,class:"vs-tree",onScrollPassive:ge,onContextmenu:me[6]||(me[6]=_e(Pe=>Q(Pe),["prevent"]))},[l.root&&!he.value&&I.value?(i(),r("div",IS,[me[7]||(me[7]=o("span",{class:"vs-tree-spin","aria-hidden":"true"},null,-1)),ue(a(s(y)("vsTreeLoading")),1)])):he.value?(i(!0),r(ae,{key:2},Ae(Ee.value,Pe=>(i(),r("div",{key:Pe.path,class:te(["vs-tree-row",{"is-active":Pe.path===t.activePath,"drop-target":$n.value===Pe.path}]),style:_t({paddingLeft:Pe.depth*12+6+"px"}),draggable:"true",onClick:_e(Ge=>we(Pe),["stop"]),onContextmenu:_e(Ge=>N(Pe,Ge),["prevent","stop"]),onDragstart:Ge=>Jn(Pe,Ge),onDragover:_e(Ge=>mn(Pe,Ge),["prevent"]),onDragleave:Ge=>Sn(Pe),onDrop:_e(Ge=>Xs(Pe,Ge),["prevent"])},[o("span",{class:"vs-caret",onClick:_e(Ge=>Ve(Pe),["stop"])},[Pe.isDir?(i(),r("span",US,a(Pe.expanded?"▾":"▸"),1)):P("",!0)],8,zS),o("span",{class:te(["vs-ico",Pe.isDir?"ico-dir":"ico-file"])},null,2),o("span",{class:"vs-name",title:Pe.path},a(Pe.name),9,HS),Ye(Pe)?(i(),r("span",{key:0,class:te(["vs-git-badge","st-"+Ye(Pe)]),title:pe(Pe)},a(st(Pe)),11,WS)):ke(Pe)?(i(),r("span",{key:1,class:te(["vs-git-badge","st-"+ke(Pe)]),title:ce(Pe)},a(qe(Pe)),11,GS)):P("",!0),Pe.loading?(i(),r("span",qS,"…")):P("",!0)],46,VS))),128)):(i(),r("div",jS,a(s(y)("vsNoProject")),1)),s(Ie)?(i(),Xe(Qt,{key:3,items:H.value,x:s(rt),y:s(yt),onClose:me[0]||(me[0]=Pe=>Ie.value=!1)},null,8,["items","x","y"])):P("",!0),h(He,{modelValue:Ot.value,"onUpdate:modelValue":me[2]||(me[2]=Pe=>Ot.value=Pe),class:"vs-diff-dialog",title:s(y)("gitDiffTitle"),width:"760px","append-to-body":""},{footer:se(()=>[h(Be,{type:"primary",onClick:me[1]||(me[1]=Pe=>Ot.value=!1)},{default:se(()=>[ue(a(s(y)("gitDiffClose")),1)]),_:1})]),default:se(()=>[o("pre",KS,a(Mn.value||s(y)("gitDiffEmpty")),1)]),_:1},8,["modelValue","title"]),h(pd,{modelValue:wt.value,"onUpdate:modelValue":me[3]||(me[3]=Pe=>wt.value=Pe),dir:Gt.value,onDone:lt},null,8,["modelValue","dir"]),h(md,{modelValue:re.value,"onUpdate:modelValue":[me[4]||(me[4]=Pe=>re.value=Pe),Je],dir:Gt.value},null,8,["modelValue","dir"]),h(gd,{modelValue:ct.value,"onUpdate:modelValue":[me[5]||(me[5]=Pe=>ct.value=Pe),et],dir:Gt.value},null,8,["modelValue","dir"])],544)}}}),QS=xt(JS,[["__scopeId","data-v-71abbe1d"]]),ZS={class:"vs-tabs-wrap"},e8=["title"],t8=["title","onClick","onContextmenu"],n8={class:"vs-tab-name"},s8=["title","onClick"],o8={key:2,class:"vs-tab-dot"},a8=["onClick"],i8={key:0,class:"vs-tabs-empty"},l8=["title"],r8=ht({__name:"TabBar",props:{tabs:{},active:{}},emits:["select","close","save","closeSave","closeOthers","closeRight","closeAll"],setup(t,{emit:e}){const n=t,l=e,c=m(null),u=m(!1),v=m(!1),d=m(!1);let p=null;function w(){const F=c.value;F&&(u.value=F.scrollWidth>F.clientWidth+1,v.value=F.scrollLeft>1,d.value=F.scrollLeft+F.clientWidth<F.scrollWidth-1)}function b(F){const de=c.value;de&&de.scrollBy({left:F*Math.max(200,de.clientWidth*.7),behavior:"smooth"})}ln(()=>{p=new ResizeObserver(w),c.value&&p.observe(c.value),w()}),Pt(()=>{p?.disconnect(),p=null}),Qe(()=>n?.tabs?.length,()=>void Dt(w));function $(F){const de=c.value;!de||de.scrollWidth<=de.clientWidth||(F.preventDefault(),de.scrollLeft+=Math.abs(F.deltaX)>Math.abs(F.deltaY)?F.deltaX:F.deltaY)}function L(F){return F.split(/[\\/]/).filter(Boolean).pop()??F}const{cmOpen:M,cmX:A,cmY:I,openMenu:U}=pn(),C=m(null);function Z(F,de){C.value=F,U(de,[])}const G=B(()=>{const F=C.value;if(!F)return[];const j=n.tabs.findIndex(he=>he.path===F.path)===n.tabs.length-1;return[{label:y("vsTabClose"),icon:"close",onClick:()=>l("close",F.path)},{label:y("vsTabCloseSave"),icon:"save",onClick:()=>l("closeSave",F.path)},{separator:!0},{label:y("vsTabCloseOthers"),icon:"close",disabled:n.tabs.length<2,onClick:()=>l("closeOthers",F.path)},{label:y("vsTabCloseRight"),icon:"close",disabled:j,onClick:()=>l("closeRight",F.path)},{label:y("vsTabCloseAll"),icon:"close",onClick:()=>l("closeAll")}]});return(F,de)=>(i(),r("div",ZS,[o("button",{class:te(["vs-tab-arrow is-left",{dim:!v.value}]),title:s(y)("vsScrollLeft"),onClick:de[0]||(de[0]=j=>b(-1))},[h(oe,{name:"chevronLeft",size:13})],10,e8),o("div",{ref_key:"tabsEl",ref:c,class:"vs-tabs",onWheel:$,onScroll:w},[(i(!0),r(ae,null,Ae(t.tabs,j=>(i(),r("div",{key:j.path,class:te(["vs-tab",{"is-active":j.path===t.active}]),title:j.path,onClick:he=>F.$emit("select",j.path),onContextmenu:_e(he=>Z(j,he),["prevent","stop"])},[j.icon?(i(),Xe(oe,{key:0,name:j.icon,size:12},null,8,["name"])):P("",!0),o("span",n8,a(L(j.path)),1),j.dirty?(i(),r("span",{key:1,class:te(["vs-tab-dirty",{conflict:j.conflict}]),title:j.conflict?s(y)("vsConflictBadge"):"",onClick:_e(he=>F.$emit("save",j.path),["stop"])},null,10,s8)):(i(),r("span",o8)),o("span",{class:"vs-tab-close",onClick:_e(he=>F.$emit("close",j.path),["stop"])},"×",8,a8)],42,t8))),128)),t.tabs.length?P("",!0):(i(),r("div",i8,a(s(y)("vsNoOpenFile")),1)),s(M)?(i(),Xe(Qt,{key:1,items:G.value,x:s(A),y:s(I),onClose:de[1]||(de[1]=j=>M.value=!1)},null,8,["items","x","y"])):P("",!0)],544),o("button",{class:te(["vs-tab-arrow is-right",{dim:!d.value}]),title:s(y)("vsScrollRight"),onClick:de[2]||(de[2]=j=>b(1))},[h(oe,{name:"chevronRight",size:13})],10,l8)]))}}),c8=xt(r8,[["__scopeId","data-v-3b8ef924"]]),u8="modulepreload",d8=function(t){return"/api/dsh-file-workbench/"+t},wc={},mt=function(e,n,l){let c=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const v=document.querySelector("meta[property=csp-nonce]"),d=v?.nonce||v?.getAttribute("nonce");c=Promise.allSettled(n.map(p=>{if(p=d8(p),p in wc)return;wc[p]=!0;const w=p.endsWith(".css"),b=w?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${b}`))return;const $=document.createElement("link");if($.rel=w?"stylesheet":u8,w||($.as="script"),$.crossOrigin="",$.href=p,d&&$.setAttribute("nonce",d),document.head.appendChild($),w)return new Promise((L,M)=>{$.addEventListener("load",L),$.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${p}`)))})}))}function u(v){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=v,window.dispatchEvent(d),!d.defaultPrevented)throw v}return c.then(v=>{for(const d of v||[])d.status==="rejected"&&u(d.reason);return e().catch(u)})},f8={ts:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bm),__vite__mapDeps([0,1])).then(t=>[t.javascript({typescript:!0})]),tsx:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bm),__vite__mapDeps([0,1])).then(t=>[t.javascript({typescript:!0,jsx:!0})]),js:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bm),__vite__mapDeps([0,1])).then(t=>[t.javascript()]),jsx:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bm),__vite__mapDeps([0,1])).then(t=>[t.javascript({jsx:!0})]),mjs:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bm),__vite__mapDeps([0,1])).then(t=>[t.javascript()]),cjs:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bm),__vite__mapDeps([0,1])).then(t=>[t.javascript()]),json:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bn),__vite__mapDeps([0,1])).then(t=>[t.json()]),html:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bp),__vite__mapDeps([0,1])).then(t=>[t.html()]),htm:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bp),__vite__mapDeps([0,1])).then(t=>[t.html()]),vue:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bp),__vite__mapDeps([0,1])).then(t=>[t.html()]),css:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bo),__vite__mapDeps([0,1])).then(t=>[t.css()]),scss:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bo),__vite__mapDeps([0,1])).then(t=>[t.css()]),less:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bo),__vite__mapDeps([0,1])).then(t=>[t.css()]),md:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bq),__vite__mapDeps([0,1])).then(t=>[t.markdown()]),markdown:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bq),__vite__mapDeps([0,1])).then(t=>[t.markdown()]),yaml:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.br),__vite__mapDeps([0,1])).then(t=>[t.yaml()]),yml:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.br),__vite__mapDeps([0,1])).then(t=>[t.yaml()]),xml:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bs),__vite__mapDeps([0,1])).then(t=>[t.xml()]),svg:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bs),__vite__mapDeps([0,1])).then(t=>[t.xml()]),py:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bt),__vite__mapDeps([0,1])).then(t=>[t.python()]),sql:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bu),__vite__mapDeps([0,1])).then(t=>[t.sql()]),java:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bv),__vite__mapDeps([0,1])).then(t=>[t.java()]),c:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bw),__vite__mapDeps([0,1])).then(t=>[t.cpp()]),h:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bw),__vite__mapDeps([0,1])).then(t=>[t.cpp()]),cc:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bw),__vite__mapDeps([0,1])).then(t=>[t.cpp()]),cpp:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bw),__vite__mapDeps([0,1])).then(t=>[t.cpp()]),cxx:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bw),__vite__mapDeps([0,1])).then(t=>[t.cpp()]),hpp:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bw),__vite__mapDeps([0,1])).then(t=>[t.cpp()]),rs:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bx),__vite__mapDeps([0,1])).then(t=>[t.rust()]),go:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.by),__vite__mapDeps([0,1])).then(t=>[t.go()]),php:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bz),__vite__mapDeps([0,1])).then(t=>[t.php()]),cs:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bA),__vite__mapDeps([0,1])).then(t=>[Fo.define(t.csharp)]),sh:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bB),__vite__mapDeps([0,1])).then(t=>[Fo.define(t.shell)]),bash:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bB),__vite__mapDeps([0,1])).then(t=>[Fo.define(t.shell)]),zsh:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bB),__vite__mapDeps([0,1])).then(t=>[Fo.define(t.shell)]),rb:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bC),__vite__mapDeps([0,1])).then(t=>[Fo.define(t.ruby)])},p8={ts:"TypeScript",tsx:"TypeScript JSX",js:"JavaScript",jsx:"JavaScript JSX",mjs:"JavaScript",cjs:"JavaScript",json:"JSON",html:"HTML",htm:"HTML",vue:"Vue",css:"CSS",scss:"SCSS",less:"LESS",md:"Markdown",markdown:"Markdown",yaml:"YAML",yml:"YAML",xml:"XML",svg:"SVG",py:"Python",sql:"SQL",java:"Java",c:"C",h:"C/C++",cc:"C++",cpp:"C++",cxx:"C++",hpp:"C/C++",rs:"Rust",go:"Go",php:"PHP",cs:"C#",sh:"Shell",bash:"Shell",zsh:"Shell",rb:"Ruby",txt:"Plain Text"};function kd(t){const e=t.lastIndexOf(".");if(e<0)return"";const n=t.slice(e+1).toLowerCase();return n.length>0&&n.length<=10?n:""}async function v8(t){const e=f8[kd(t)];if(!e)return[];try{return await e()}catch{return[]}}function h8(t){const e=kd(t);return p8[e]??(e?e.toUpperCase():"Plain Text")}const bc="dsh-plugin-deco-styles",m8=`
.dsh-deco-error   { text-decoration: underline wavy #f85149; text-decoration-skip-ink: none; }
.dsh-deco-warning { text-decoration: underline wavy #d29922; text-decoration-skip-ink: none; }
.dsh-deco-info    { text-decoration: underline wavy #58a6ff; text-decoration-skip-ink: none; }
.dsh-deco-hint    { text-decoration: underline dotted #8b949e; text-decoration-skip-ink: none; }
.dsh-deco-deprecated { text-decoration: line-through; opacity: .7; }
.dsh-deco-highlight { background: rgba(187,128,9,0.25); }
.dsh-deco-widget { color: var(--dsh-fg-dim, #8b949e); font-style: italic; opacity: .85; padding-left: 8px; }
.cm-gutter-marker { cursor: default; }
.cm-gutter-marker.dsh-deco-bookmark { color: #e3b341; font-weight: 700; }
`;function g8(){if(typeof document>"u"||document.getElementById(bc))return;const t=document.createElement("style");t.id=bc,t.textContent=m8,document.head.appendChild(t)}function y8(t){return[t.category?`dsh-deco-${t.category}`:"",t.className].filter(Boolean).join(" ")}function zi(t,e,n){return Math.max(e,Math.min(n,t))}function Na(t,e,n=!1){if(typeof e.offset=="number")return zi(e.offset,0,t.length);const l=zi(e.line??1,1,t.lines),c=t.line(l);return e.character==null?n?c.to:c.from:zi(c.from+Math.max(0,e.character-1),c.from,c.to)}class pr extends Tf{constructor(e,n,l){super(),this.elementClass=e,this.ch=n,this.tip=l}toDOM(){const e=document.createElement("div");return e.className=this.elementClass,e.textContent=this.ch,this.tip&&(e.title=this.tip),e}eq(e){return e instanceof pr&&this.elementClass===e.elementClass&&this.ch===e.ch&&this.tip===e.tip}}class vr extends Ef{constructor(e){super(),this.text=e}eq(e){return e instanceof vr&&e.text===this.text}toDOM(){const e=document.createElement("span");return e.className="dsh-deco-widget",e.textContent=this.text,e}destroy(){}}const Ui=xf.define();function _c(t,e){const n=t.doc,l=[];for(const u of e){if(u.type!=="gutter")continue;const v=Na(n,u.start),d=n.lineAt(v),p=`cm-gutter-marker${u.category?` dsh-deco-${u.category}`:""}${u.className?` ${u.className}`:""}`,w=u.category==="bookmark"?"●":u.message?.[0]??"•";l.push({from:d.from,to:d.to,marker:new pr(p.trim(),w,u.message)})}l.sort((u,v)=>u.from-v.from||u.to-v.to);const c=new Bc;for(const u of l)c.add(u.from,u.to,u.marker);return c.finish()}function w8(t){g8();let e=t;const n=Cf.fromClass(class{decorations;constructor(c){this.decorations=kc(c.state.doc,e)}update(c){(c.docChanged||c.viewportChanged||c.transactions.some(u=>u.effects.some(v=>v.is(Ui))))&&(this.decorations=kc(c.view.state.doc,e))}},{decorations:c=>c.decorations}),l=$f.define({create:c=>_c(c,e),update(c,u){return u.docChanged||u.effects.some(v=>v.is(Ui))?_c(u.state,e):c},provide:c=>Sf.compute([c],u=>u.field(c))});return{extension:[n,l],setItems(c){return e=c??[],Ui.of(null)}}}function kc(t,e){const n=[];for(const c of e)if(c.type==="mark"){const u=Na(t,c.start),v=c.end?Na(t,c.end):t.lineAt(u).to;if(v<u)continue;n.push({from:u,to:v,deco:Er.mark({class:y8(c),title:c.message})})}else if(c.type==="widget"){const u=Na(t,c.start,!0);n.push({from:u,to:u,deco:Er.widget({widget:new vr(c.message??""),side:1})})}n.sort((c,u)=>c.from-u.from||c.to-u.to);const l=new Bc;for(const c of n)l.add(c.from,c.to,c.deco);return l.finish()}const xd="\0",Cd="";function $d(t,e){const n=[];return[t.replace(e,c=>(n.push(c),`${xd}${n.length-1}${Cd}`)),n]}function Rl(t,e){return t.replace(new RegExp(`${xd}(\\d+)${Cd}`,"g"),(n,l)=>e[Number(l)]??"")}function b8(t){if(!t.includes("{"))return null;const[e,n]=$d(t,/\/\*[\s\S]*?\*\/|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g);if(e.includes("/*"))return null;const l=(e.match(/{/g)??[]).length,c=(e.match(/}/g)??[]).length;if(l===0||l!==c)return null;const u=e.replace(/\s+/g," ").replace(/\s*([{};])\s*/g,"$1").trim(),v=[];let d="",p=0;const w=()=>"  ".repeat(p),b=$=>{const L=$.trim();L&&v.push(w()+L)};for(const $ of u)if($==="{")b(`${d} {`),d="",p+=1;else if($==="}"){if(b(d),p-=1,b("}"),d="",p<0)return null}else $===";"?(b(`${d};`),d=""):$===","?(b(`${d},`),d=""):d+=$;return b(d),p!==0?null:Rl(v.join(`
`),n)}const _8=new Set(["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"]);function k8(t,e){if(/<\s*(script|style|pre|textarea)\b/i.test(t))return null;const[n,l]=$d(t,/<!--[\s\S]*?-->|<!\[CDATA\[[\s\S]*?\]\]>/g);if(n.includes("<!--"))return null;const c=[];let u=0;const v=/<[a-zA-Z!/][^>]*>/g;for(let $=v.exec(n);$;$=v.exec(n))$.index>u&&c.push({text:n.slice(u,$.index)}),c.push({tag:$[0]}),u=$.index+$[0].length;u<n.length&&c.push({text:n.slice(u)});const d=$=>$.replace(/^<\/?/,"").replace(/[\s/>].*$/s,"").toLowerCase(),p=[],w=[],b=($,L)=>{const M=Rl(L,l).replace(/\s+/g," ").trim();M&&p.push("  ".repeat(Math.max(0,$))+M)};for(let $=0;$<c.length;$+=1){const L=c[$];if(L.text!==void 0){L.text.trim()&&b(w.length,L.text);continue}const M=L.tag,A=d(M),I=M.startsWith("</"),U=M.endsWith("/>")||e&&_8.has(A);if(I){if(w.pop()!==A)return null;b(w.length,M);continue}const C=c[$+1],Z=c[$+2];if(!U&&C?.text!==void 0&&Z?.tag!==void 0&&d(Z.tag)===A&&Z.tag.startsWith("</")){const G=`${M}${C.text}${Z.tag}`;if(Rl(G,l).replace(/\s+/g," ").trim().length<=80){b(w.length,G),$+=2;continue}}b(w.length,M),U||w.push(A)}return w.length!==0?null:p.join(`
`)}const x8={key:0,class:"vs-find"},C8={class:"vs-find-row"},$8=["placeholder","onKeydown"],S8={class:"vs-find-count"},E8=["title"],T8=["title"],D8=["title"],F8=["title"],R8=["title"],N8=["title"],P8=["title"],A8={key:0,class:"vs-find-row"},M8=["placeholder","onKeydown"],O8=["title"],L8=["title"];let vo=null;const B8=Df.highest(Ff.of([{key:"Mod-f",run:()=>(vo?.openFind(!1),!0)},{key:"Mod-h",run:()=>(vo?.openFind(!0),!0)},{key:"Escape",run:()=>vo?.closeFind()??!1}]));function I8(){const t=document.createElement("div");return t.className="vs-minimap",t}const uo=new Map,Sd=new Set;function j8(t){const e=bd(t),n=uo.get(e);if(n){try{n.view.destroy()}catch{}uo.delete(e)}Sd.add(e)}typeof window<"u"&&(window.__dshFWDisposeEditorSlotByTabId=j8);const V8=ht({__name:"CodeEditor",props:{path:{},slot:{},initialContent:{},docRev:{},readonly:{type:Boolean},dark:{type:Boolean},initialView:{}},emits:["change","cursor","view","contextmenu"],setup(t,{expose:e,emit:n}){const l=t,c=n;function u(S){c("contextmenu",{x:S.clientX,y:S.clientY})}const v=m(null),d=hf(null),p=new to,w=new to,b=new to,$=new to,L=new to,M=new to;let A=0,I=null;const U=m(!1),C=m(!1),Z=m(""),G=m(""),F=m(!1),de=m(!1),j=m(!1),he=m(0),Ee=m(-1),ve=m(null),ne=B(()=>Z.value?he.value===0?y("vsFindNoMatch"):`${Ee.value<0?"?":Ee.value}/${he.value}`:"");function ie(){return new Dr({search:Z.value,replace:G.value,caseSensitive:F.value,regexp:de.value,wholeWord:j.value})}function Se(){const S=d.value;S&&(S.dispatch({effects:Tr.of(ie())}),Ve())}function Ve(){const S=d.value;if(!S||!Z.value){he.value=0,Ee.value=-1;return}const q=ie(),De=S.state.selection.main.head;let re=0,ct=-1;const wt=q.getCursor(S.state.doc);for(let Ot=wt.next();!Ot.done;Ot=wt.next())re+=1,ct<0&&Ot.value.from>=De&&(ct=re);ct<0&&re>0&&(ct=1),he.value=re,Ee.value=ct}function we(){const S=d.value;S&&Rf(S),Ve()}function Ne(){const S=d.value;S&&Nf(S),Ve()}function W(S){S?Ne():we()}function J(){const S=d.value;S&&Pf(S),Ve()}function z(){const S=d.value;S&&Af(S),Ve()}function ee(S){S==="case"?F.value=!F.value:S==="re"?de.value=!de.value:j.value=!j.value,Se()}function ge(S){U.value=!0,S&&(C.value=!0);const q=d.value;if(q){const De=q.state.selection.main;if(!De.empty&&De.to-De.from<=200){const re=q.state.doc.sliceString(De.from,De.to);re.includes(`
`)||(Z.value=re)}}Se(),Dt(()=>ve.value?.select())}function je(){const S=U.value;U.value=!1,C.value=!1,he.value=0,Ee.value=-1;const q=d.value;return q&&S&&q.dispatch({effects:Tr.of(new Dr({search:""}))}),q?.focus(),S}const Ke=l.slot??0,Ze=_d(Ke);function ye(){const S=d.value;S&&c("view",{scrollTop:S.scrollDOM.scrollTop,anchor:S.state.selection.main.head})}function be(S){const q=S;if(q.docChanged&&(c("change",q.state.doc.toString()),l.path&&Ze.set(l.path,q.state),U.value&&Ve(),OS(l.slot??0,q.state.doc.toString(),q.changes)),q.selectionSet||q.docChanged){const De=q.state.selection.main.head,re=q.state.doc.lineAt(De);c("cursor",re.number,De-re.from+1),ye(),LS(l.slot??0,q.state.selection)}}function Ye(){return Bf.of({create:()=>({dom:I8()}),displayText:"blocks"})}function st(S){const q=Math.max(0,Math.min(S.length,l.initialView?.anchor??0));return ga.create({doc:S,selection:{anchor:q},extensions:[Of,Lf(),B8,L.of(Ue.vsMinimap?Ye():[]),p.of([]),w.of(l.dark?Ti:[]),b.of(ga.readOnly.of(!!l.readonly)),$.of(eo.editable.of(!l.readonly)),M.of([]),eo.updateListener.of(De=>NS(l.slot??0)?.(De))]})}function pe(S){const q=Ze.get(S);if(q)return q;const De=st(l.initialContent??"");return Ze.set(S,De),De}async function ke(){const S=A,q=await v8(l.path);S!==A||!d.value||d.value.dispatch({effects:p.reconfigure(q)})}function qe(S){const q=l.initialView?.scrollTop??0;q>0&&requestAnimationFrame(()=>{d.value===S&&(S.scrollDOM.scrollTop=q)})}function ce(S){S.dispatch({effects:[w.reconfigure(l.dark?Ti:[]),b.reconfigure(ga.readOnly.of(!!l.readonly)),$.reconfigure(eo.editable.of(!l.readonly)),L.reconfigure(Ue.vsMinimap?Ye():[])]})}function Ie(){const S=v.value;if(!S)return;const q=uo.get(Ke);if(q&&q.view.dom&&q.path===l.path){const re=q.view;A++,d.value=re,Ca(Ke,re),uo.delete(Ke),S.appendChild(re.dom),ce(re),qe(re),I=()=>ye(),re.scrollDOM.addEventListener("scroll",I,{passive:!0}),Le(l.path),requestAnimationFrame(()=>{d.value===re&&re.requestMeasure()}),ke();return}if(q){try{q.view.destroy()}catch{}uo.delete(Ke)}A++;const De=new eo({state:pe(l.path),parent:S});d.value=De,Ca(Ke,De),ce(De),qe(De),I=()=>ye(),De.scrollDOM.addEventListener("scroll",I,{passive:!0}),ke()}function rt(S,q){const De=d.value;if(De){if(S&&S!==q){let re=!0;try{re=dr(Ke).state.openTabs.includes(S)}catch{}re?Ze.set(S,De.state):Ze.delete(S)}A++,De.setState(pe(q)),ce(De),qe(De),Le(q),ke()}}function yt(){const S=d.value;S&&I&&S.scrollDOM.removeEventListener("scroll",I),I=null}function ut(){d.value?.focus()}const it=new Map;function Le(S){const q=d.value;q&&q.dispatch({effects:M.reconfigure(it.get(S)??[])})}function H(S){l.path&&(it.set(l.path,S),Le(l.path))}const N=new Map;function Q(S){const q=l.path;if(!q)return;const De=d.value;if(!De)return;if(S===null){N.delete(q),it.delete(q),Le(q);return}let re=N.get(q)??null;if(!re){re=w8(S),N.set(q,re),it.set(q,re.extension),Le(q);return}De.dispatch({effects:re.setItems(S)})}function Te(S){const q=d.value;if(!q)return;const De=q.state.doc,re=De.line(Math.max(1,Math.min(De.lines,S)));q.dispatch({selection:{anchor:re.from,head:re.to},effects:eo.scrollIntoView(re.from,{y:"center"})}),q.focus(),requestAnimationFrame(()=>{const ct=q.domAtPos(re.from).node,wt=ct instanceof HTMLElement?ct.closest?.(".cm-line"):null;wt&&(wt.classList.add("cm-flash-line"),window.setTimeout(()=>wt.classList.remove("cm-flash-line"),1200))})}function O(S){if(l.path.slice(l.path.lastIndexOf(".")).toLowerCase()!==".json")return null;try{return JSON.stringify(JSON.parse(S),null,2)}catch{return null}}function T(S){return[".css",".scss",".less"].includes(S)?b8:[".html",".htm",".xhtml",".xml",".svg",".vue"].includes(S)?q=>k8(q,S!==".xml"&&S!==".svg"):null}function K(){const S=d.value;if(!S||l.readonly)return!1;const q=S.state.doc.toString(),De=l.path.slice(l.path.lastIndexOf(".")).toLowerCase();if(De===".json"){const re=O(q);if(re!==null)return re===q||S.dispatch({changes:{from:0,to:q.length,insert:re}}),!0}else{const re=T(De)?.(q);if(re!=null)return re===q||S.dispatch({changes:{from:0,to:q.length,insert:re}}),!0}return S.dispatch({selection:{anchor:0,head:q.length}}),Mf(S),!0}return e({focus:ut,format:K,revealLine:Te,openFind:ge,setExtension:H,setDecorationsSpec:Q}),ln(()=>{gc(l.slot??0,be),vo={openFind:S=>ge(S),closeFind:()=>je()},Ie()}),Pt(()=>{if(gc(Ke,null),vo&&(vo=null),yt(),Sd.has(Ke)){d.value?.destroy(),d.value=null,Ca(Ke,null);return}d.value&&uo.set(Ke,{view:d.value,path:l.path}),Ca(Ke,null),d.value=null}),Qe(()=>l.path,(S,q)=>{S&&(q&&q!==S?rt(q,S):q||Ie())}),Qe(()=>l.docRev,()=>{if(!l.path)return;Ze.delete(l.path);const S=d.value;S&&(A++,S.setState(st(l.initialContent??"")),qe(S),ke())}),Qe(()=>l.readonly,()=>{d.value?.dispatch({effects:[b.reconfigure(ga.readOnly.of(!!l.readonly)),$.reconfigure(eo.editable.of(!l.readonly))]})}),Qe(()=>l.dark,()=>{d.value?.dispatch({effects:w.reconfigure(l.dark?Ti:[])})}),Qe(()=>Ue.vsMinimap,()=>{d.value?.dispatch({effects:L.reconfigure(Ue.vsMinimap?Ye():[])})}),(S,q)=>(i(),r("div",{class:"vs-ce-root",onContextmenu:_e(u,["prevent","stop"])},[o("div",{ref_key:"hostRef",ref:v,class:"vs-code-editor"},null,512),U.value?(i(),r("div",x8,[o("div",C8,[kt(o("input",{ref_key:"findInputRef",ref:ve,"onUpdate:modelValue":q[0]||(q[0]=De=>Z.value=De),class:"vs-find-input",placeholder:s(y)("vsFindPlaceholder"),onInput:Se,onKeydown:[q[1]||(q[1]=bt(_e(De=>W(De.shiftKey),["prevent"]),["enter"])),bt(_e(je,["prevent"]),["esc"])]},null,40,$8),[[Lt,Z.value]]),o("span",S8,a(ne.value),1),o("button",{class:te(["vs-find-btn",{on:F.value}]),title:s(y)("vsGrepCase"),onClick:q[2]||(q[2]=De=>ee("case"))},"Aa",10,E8),o("button",{class:te(["vs-find-btn",{on:de.value}]),title:s(y)("vsGrepRegex"),onClick:q[3]||(q[3]=De=>ee("re"))},".*",10,T8),o("button",{class:te(["vs-find-btn",{on:j.value}]),title:s(y)("vsFindWord"),onClick:q[4]||(q[4]=De=>ee("word"))},"|w|",10,D8),q[7]||(q[7]=o("span",{class:"vs-find-vsep"},null,-1)),o("button",{class:"vs-find-btn",title:s(y)("vsFindPrev"),onClick:Ne},"↑",8,F8),o("button",{class:"vs-find-btn",title:s(y)("vsFindNext"),onClick:we},"↓",8,R8),o("button",{class:te(["vs-find-btn",{on:C.value}]),title:s(y)("vsFindToggleReplace"),onClick:q[5]||(q[5]=De=>C.value=!C.value)},"⇅",10,N8),o("button",{class:"vs-find-btn",title:s(y)("vsFindClose"),onClick:je},"×",8,P8)]),C.value?(i(),r("div",A8,[kt(o("input",{"onUpdate:modelValue":q[6]||(q[6]=De=>G.value=De),class:"vs-find-input",placeholder:s(y)("vsReplacePlaceholder"),onKeydown:[bt(_e(J,["prevent"]),["enter"]),bt(_e(je,["prevent"]),["esc"])]},null,40,M8),[[Lt,G.value]]),o("button",{class:"vs-find-btn",title:s(y)("vsFindReplace"),onClick:J},"⏎",8,O8),o("button",{class:"vs-find-btn",title:s(y)("vsFindReplaceAll"),onClick:z},"≡",8,L8)])):P("",!0)])):P("",!0)],32))}}),z8=xt(V8,[["__scopeId","data-v-2301eccb"]]),U8={class:"fsp"},H8={class:"fsp-bar"},W8=["title"],G8=["disabled"],q8=["disabled"],K8={key:0,class:"fsp-newrow"},X8=["placeholder"],Y8=["disabled"],J8={key:1,class:"fsp-error"},Q8={class:"fsp-main"},Z8={class:"fsp-side"},eE={class:"fsp-group"},tE={class:"fsp-group-title"},nE=["title","onClick"],sE={class:"fsp-side-name"},oE={key:0,class:"fsp-side-empty"},aE={class:"fsp-group"},iE={class:"fsp-group-title"},lE=["title","onClick"],rE={class:"fsp-side-name"},cE={key:0,class:"fsp-side-empty"},uE={key:0,class:"fsp-group"},dE={class:"fsp-group-title"},fE=["title","onClick"],pE=["title"],vE={class:"fsp-side-name"},hE={class:"fsp-content"},mE={key:0,class:"fsp-crumbs"},gE={key:0,class:"fsp-sep"},yE=["onClick"],wE={class:"fsp-list"},bE={key:0,class:"fsp-loading"},_E={key:1,class:"fsp-error"},kE=["onClick","onDblclick"],xE={class:"fsp-name"},CE={key:0,class:"fsp-empty"},$E={key:2,class:"fsp-namerow"},SE={class:"fsp-namelabel"},EE=["placeholder"],TE=["title"],DE={value:""},FE=["value"],RE={key:4,class:"fsp-manual"},NE=["placeholder"],PE=["disabled"],AE={class:"fsp-foot"},ME={class:"fsp-hint"},OE=["disabled"],LE=["disabled","title"],Hi="vscode",ei=ht({__name:"PathPickerDialog",props:{modelValue:{type:Boolean},mode:{},initialDir:{},initialName:{}},emits:["update:modelValue","confirm"],setup(t,{emit:e}){const n=t,l=e,c=B({get:()=>n.modelValue,set:O=>l("update:modelValue",O)}),u=B(()=>n.mode==="file"),v=B(()=>u.value?y("vsSaveAsTitle"):y("vsPickFolderTitle")),d=m(null),p=m(!1),w=m(void 0),b=m(""),$=m(!1),L=m(""),M=m(null),A=m(!1),I=m(void 0),U=m(""),C=m(""),Z=m(null),G=m([]),F=B(()=>d.value?.crumbs??[]),de=B(()=>d.value?.entries??[]),j=B(()=>d.value?.path||null),he=B(()=>{const O=de.value;return!u.value||!C.value?O:O.filter(T=>T.isDir||T.name.toLowerCase().endsWith(C.value))}),Ee=B(()=>{const O=n.initialName??"",T=O.lastIndexOf(".");return T>0?O.slice(T).toLowerCase():""}),ve=B(()=>{const O=U.value.trim().toLowerCase();return O?de.value.some(T=>!T.isDir&&T.name.toLowerCase()===O):!1}),ne=B(()=>{const O=U.value.trim();return O?ee(O)?O:ge(j.value,O):""}),ie=B(()=>{const O=U.value.trim();return!O||/[\\/]$/.test(O)?!1:ee(O)||!!j.value}),Se=B(()=>G.value.filter(O=>O.type==="drive")),Ve=new Set(["pictures","music","videos","gallery"]),we=B(()=>G.value.filter(O=>O.type!=="drive"&&O.type!=="recycle"&&!Ve.has(O.type)&&!!O.path));function Ne(O){const T=Ua(O.id),K=T==="online"?y("sshStatusOnline"):T==="offline"?y("sshStatusOffline"):"",S=T==="offline"?cl(O.id):"";return K&&S?`${K}：${S}`:K||`${O.user}@${O.host}:${O.port||22}`}function W(O){switch(O.type){case"drive":return Qu(O);case"home":return y("navHome");case"desktop":return y("desktopEntry");case"download":return y("downloadEntry");case"documents":return y("documentEntry");case"pictures":return y("pictureEntry");case"music":return y("musicEntry");case"videos":return y("videoEntry");case"gallery":return y("navGallery");case"workspace":return y("workspaceEntry");default:return O.name}}function J(O){switch(O.type){case"home":return"ico-home";case"desktop":return"ico-desktop";case"download":return"ico-download";case"documents":return"ico-doc";case"pictures":case"gallery":return"ico-pic";case"music":return"ico-music";case"videos":return"ico-video";case"workspace":return"ico-folder";default:return"ico-dir"}}function z(){return window.__DSH_FILE_WORKBENCH__}function ee(O){return/^[a-zA-Z]:[\\/]/.test(O)||O.startsWith("/")||O.startsWith("\\\\")||Wt(O)}function ge(O,T){if(!O)return T;if(Wt(O))return Zr(O,T);const K=O.includes("\\")?"\\":"/";return`${O.replace(/[\\/]+$/,"")}${K}${T}`}const je=B(()=>!!j.value&&Wt(j.value)),Ke=B(()=>je.value?!0:F.value.length>=2);function Ze(O){const T=O.replace(/\\/g,"/").replace(/\/+$/,"");if(!T)return[];const K=/^[A-Za-z]:/.test(T),S=T.split("/").filter(Boolean),q=[];if(K){const re=S.shift();q.push({name:re,path:`${re}/`,hidden:!1})}let De=K?`${q[0].path.replace(/\/$/,"")}`:"";for(const re of S)De=`${De}/${re}`,q.push({name:re,path:De,hidden:!1});return q}async function ye(){const O=await Xc();return{path:"",home:"",crumbs:[],entries:(O.drives??[]).map(T=>({name:js(T),path:T.path,hidden:!1,isDir:!0}))}}async function be(O){if(!O)return await ye();const T=await Ta(O);return{path:O,home:"",crumbs:Ze(O),entries:(T.entries??[]).filter(K=>K.isDir&&!K.hidden).sort((K,S)=>K.name.localeCompare(S.name,"zh")).map(K=>({name:K.name,path:K.path,hidden:!!K.hidden,isDir:!0}))}}async function Ye(O){if(!O)return await ye();const K=((await Ta(O)).entries??[]).map(S=>({name:S.name,path:S.path,hidden:!!S.hidden,isDir:!!S.isDir})).sort((S,q)=>S.isDir===q.isDir?S.name.localeCompare(q.name,"zh"):S.isDir?-1:1);return{path:O,home:"",crumbs:Ze(O),entries:K}}async function st(O){const K=((await Ta(O,Hi)).entries??[]).filter(q=>(u.value?!0:q.isDir)&&!q.hidden).sort((q,De)=>u.value&&q.isDir!==De.isDir?Number(De.isDir)-Number(q.isDir):q.name.localeCompare(De.name,"zh")).map(q=>({name:q.name,path:q.path,hidden:!!q.hidden,isDir:!!q.isDir})),S=(Du(O)??[{name:O,path:O}]).map(q=>({name:q.name,path:q.path,hidden:!1}));return{path:O,home:"",crumbs:S,entries:K}}async function pe(O){p.value=!0,w.value=void 0,M.value=null;try{if(O&&Wt(O)){d.value=await st(O);return}if(u.value){d.value=await Ye(O);return}const T=z();if(T?.listDirectory){const K=await T.listDirectory(O);d.value={path:K.path,home:K.home,crumbs:K.crumbs??[],entries:(K.entries??[]).map(S=>({name:S.name,path:S.path,hidden:!!S.hidden,isDir:!0}))};return}d.value=await be(O)}catch(T){d.value=null,w.value=T.message}finally{p.value=!1}}function ke(O){!O||O===j.value||pe(O)}function qe(O){M.value=O.path,u.value&&!O.isDir&&(U.value=O.name)}function ce(O){if(O.isDir){if(O.path===j.value)return;pe(O.path);return}u.value&&(U.value=O.name,Le())}function Ie(O){O!==j.value&&pe(O===""?void 0:O)}function rt(){const O=j.value;if(!O)return;if(Wt(O)){const S=Wa(O);pe(S||void 0);return}const T=F.value;if(T.length<2)return;const K=T[T.length-2];pe(K.hidden?void 0:K.path)}function yt(){$.value=!$.value,I.value=void 0,$.value&&(L.value="")}async function ut(){const O=L.value.trim(),T=j.value;if(!(!O||!T)){A.value=!0,I.value=void 0;try{const K=z();Wt(T)?await Ma(Zr(T,O),Hi):K?.createDirectory?await K.createDirectory(T,O):await Ma(`${T.replace(/[\\/]+$/,"")}/${O}`),$.value=!1,L.value="",await pe(T)}catch(K){I.value=K.message}finally{A.value=!1}}}function it(){const O=M.value||j.value;O&&(l("confirm",O),c.value=!1)}function Le(){if(!ie.value)return;const O=ne.value;O&&(l("confirm",O),c.value=!1)}function H(){const O=b.value.trim();O&&(l("confirm",O),c.value=!1)}async function N(){Hs();try{const O=await Kc(Hi);G.value=O.items??[]}catch{G.value=[]}}function Q(){w.value=void 0,I.value=void 0,$.value=!1,L.value="",b.value=n.initialDir??"",U.value=n.initialName??"",C.value="",N(),pe(n.initialDir||void 0),u.value&&Dt(()=>{const O=Z.value;O&&(O.focus(),O.setSelectionRange(0,Ee.value?O.value.length-Ee.value.length:O.value.length))})}function Te(){d.value=null,b.value="",U.value="",C.value=""}return(O,T)=>{const K=rn;return i(),Xe(K,{modelValue:c.value,"onUpdate:modelValue":T[7]||(T[7]=S=>c.value=S),title:v.value,width:"720px","append-to-body":"",class:"fsp-dialog",onOpen:Q,onClosed:Te},{footer:se(()=>[o("div",AE,[o("span",ME,a(u.value?s(y)("vsSaveAsHint"):s(y)("vsPickEnterHint")),1),T[10]||(T[10]=o("span",{class:"fsp-foot-spacer"},null,-1)),o("button",{class:"fsp-btn",onClick:T[6]||(T[6]=S=>c.value=!1)},a(s(y)("vsCancel")),1),u.value?(i(),r("button",{key:0,class:"fsp-btn primary",disabled:!ie.value,onClick:Le},a(s(y)("vsSave")),9,OE)):(i(),r("button",{key:1,class:"fsp-btn primary",disabled:!M.value&&!j.value||p.value,title:M.value||j.value||void 0,onClick:it},a(s(y)("vsPickConfirm")),9,LE))])]),default:se(()=>[o("div",U8,[o("div",H8,[o("div",{class:"fsp-path",title:j.value||void 0},a(j.value||s(y)("vsComputer")),9,W8),o("button",{class:"fsp-btn sm",disabled:p.value||!Ke.value,onClick:rt},a(s(y)("vsUp")),9,G8),o("button",{class:"fsp-btn sm",disabled:p.value||!j.value,onClick:yt},a(s(y)("vsNewFolderBtn")),9,q8)]),$.value?(i(),r("div",K8,[kt(o("input",{"onUpdate:modelValue":T[0]||(T[0]=S=>L.value=S),class:"fsp-input",placeholder:s(y)("vsNewFolderName"),onKeyup:[bt(ut,["enter"]),T[1]||(T[1]=bt(S=>$.value=!1,["esc"]))]},null,40,X8),[[Lt,L.value]]),o("button",{class:"fsp-btn primary sm",disabled:A.value||!L.value.trim(),onClick:ut},a(s(y)("confirmOk")),9,Y8),o("button",{class:"fsp-btn sm",onClick:T[2]||(T[2]=S=>$.value=!1)},a(s(y)("vsCancel")),1)])):P("",!0),I.value?(i(),r("div",J8,a(I.value),1)):P("",!0),o("div",Q8,[o("div",Z8,[o("div",eE,[o("div",tE,a(s(y)("myComputer")),1),(i(!0),r(ae,null,Ae(Se.value,S=>(i(),r("div",{key:S.path,class:te(["fsp-side-row",{active:S.path===j.value}]),title:S.path,onClick:q=>ke(S.path)},[T[8]||(T[8]=o("span",{class:"fsp-ico ico-drive"},null,-1)),o("span",sE,a(W(S)),1)],10,nE))),128)),Se.value.length===0?(i(),r("div",oE,a(s(y)("vsLoading")),1)):P("",!0)]),o("div",aE,[o("div",iE,a(s(y)("vsQuickAccess")),1),(i(!0),r(ae,null,Ae(we.value,S=>(i(),r("div",{key:S.type+S.path,class:te(["fsp-side-row",{active:S.path===j.value}]),title:S.path,onClick:q=>ke(S.path)},[o("span",{class:te(["fsp-ico",J(S)])},null,2),o("span",rE,a(W(S)),1)],10,lE))),128)),we.value.length===0?(i(),r("div",cE,a(s(y)("vsEmptyDir")),1)):P("",!0)]),s(an).length>0?(i(),r("div",uE,[o("div",dE,a(s(y)("sshNavGroup")),1),(i(!0),r(ae,null,Ae(s(an),S=>(i(),r("div",{key:S.id,class:te(["fsp-side-row",{active:s(zs)(S.id)===j.value}]),title:`${S.user}@${S.host}:${S.port||22}`,onClick:q=>ke(s(zs)(S.id))},[o("span",{class:te(["fsp-dot",`dot-${s(Ua)(S.id)}`]),title:Ne(S)},null,10,pE),T[9]||(T[9]=o("span",{class:"fsp-ico ico-globe"},null,-1)),o("span",vE,a(S.name||`${S.user}@${S.host}`),1)],10,fE))),128))])):P("",!0)]),o("div",hE,[F.value.length>1?(i(),r("div",mE,[(i(!0),r(ae,null,Ae(F.value,(S,q)=>(i(),r(ae,{key:S.path+"#"+q},[q>0?(i(),r("span",gE,"›")):P("",!0),o("span",{class:te(["fsp-crumb",{active:q===F.value.length-1}]),onClick:De=>Ie(S.path)},a(S.name),11,yE)],64))),128))])):P("",!0),o("div",wE,[p.value?(i(),r("div",bE,a(s(y)("vsLoading")),1)):w.value?(i(),r("div",_E,a(w.value),1)):(i(),r(ae,{key:2},[(i(!0),r(ae,null,Ae(he.value,S=>(i(),r("div",{key:S.path,class:te(["fsp-row",{dim:S.hidden,selected:S.path===M.value}]),onClick:q=>qe(S),onDblclick:q=>ce(S)},[o("span",{class:te(["fsp-ico",S.isDir?"ico-dir":"ico-file"])},null,2),o("span",xE,a(S.name),1)],42,kE))),128)),he.value.length===0?(i(),r("div",CE,a(s(y)("vsEmptyDir")),1)):P("",!0)],64))])])]),u.value?(i(),r("div",$E,[o("span",SE,a(s(y)("vsFileName")),1),kt(o("input",{ref_key:"nameInputRef",ref:Z,"onUpdate:modelValue":T[3]||(T[3]=S=>U.value=S),class:"fsp-input",placeholder:s(y)("vsFileNamePlaceholder"),onKeyup:bt(Le,["enter"])},null,40,EE),[[Lt,U.value]]),kt(o("select",{"onUpdate:modelValue":T[4]||(T[4]=S=>C.value=S),class:"fsp-input fsp-select",title:s(y)("vsFileType")},[o("option",DE,a(s(y)("vsFilterAll")),1),Ee.value?(i(),r("option",{key:0,value:Ee.value},a(s(y)("vsFilterExt",{ext:Ee.value})),9,FE)):P("",!0)],8,TE),[[mf,C.value]])])):P("",!0),u.value?(i(),r("div",{key:3,class:te(["fsp-hintline",{warn:ve.value}])},[ve.value?(i(),r(ae,{key:0},[ue(a(s(y)("vsSaveAsExists")),1)],64)):(i(),r(ae,{key:1},[ue(a(ne.value||s(y)("vsSaveAsHint")),1)],64))],2)):P("",!0),u.value?P("",!0):(i(),r("div",RE,[kt(o("input",{"onUpdate:modelValue":T[5]||(T[5]=S=>b.value=S),class:"fsp-input",placeholder:s(y)("vsFolderPath"),onKeyup:bt(H,["enter"])},null,40,NE),[[Lt,b.value]]),o("button",{class:"fsp-btn sm",disabled:!b.value.trim(),onClick:H},a(s(y)("vsPickInput")),9,PE)]))])]),_:1},8,["modelValue","title"])}}}),BE={key:0,class:"vs-gitbar"},IE={class:"vs-gitbar-head"},jE=["title"],VE={class:"vs-gitbar-title"},zE={key:0,class:"vs-gitbar-count"},UE=["title"],HE={class:"vs-gitbar-list"},WE={key:0,class:"vs-gitbar-empty"},GE={key:1,class:"vs-gitbar-empty"},qE=["title","onClick"],KE=["width"],XE=["x1","x2","stroke"],YE=["x1","x2","y2","stroke"],JE=["x1","y1","x2","stroke"],QE=["d","stroke"],ZE=["cx","cy","r","fill","stroke"],e6={key:1,class:"vs-gitbar-dot","aria-hidden":"true"},t6={class:"vs-gitbar-subject"},n6={key:2,class:"vs-gitbar-refs"},s6={class:"vs-gitbar-meta"},o6={key:0,class:"vs-gitbar-files"},a6={key:0,class:"vs-gitbar-empty"},i6={key:0,class:"vs-gitbar-empty"},l6=["title"],r6={class:"name"},c6={class:"dir"},u6=["title","onClick"],is=24,Bs=6,d6=ht({__name:"VSGitBar",emits:["open-diff"],setup(t,{emit:e}){const n=Bl(gi)??fr(),l=m(null),c=B(()=>l.value!==null),u=m(""),v=m(""),d=m([]),p=m(!1);function w(W){return W*Cs+Cs/2}function b(W,J){const z=is/2,ee=is*.82;return`M ${w(W)} ${z} C ${w(W)} ${ee}, ${w(J)} ${ee}, ${w(J)} ${is}`}function $(W){return W.commit.refs.some(J=>J.kind==="head")}const L=B(()=>l.value==="git"?hd(d.value).map(W=>({commit:W.commit,graph:W})):d.value.map(W=>({commit:W}))),M=m(""),A=gt({}),I=gt({});function U(W){return A[W]??[]}function C(W){const J=Math.max(W.lastIndexOf("/"),W.lastIndexOf("\\"));return J>=0?W.slice(J+1):W}function Z(W){const J=Math.max(W.lastIndexOf("/"),W.lastIndexOf("\\"));return J>=0?W.slice(0,J):""}function G(W){if(M.value===W.hash){M.value="";return}M.value=W.hash,we(W)}const F=e;async function de(W,J){let z=[];try{if(l.value==="git"){const ee=await Bo(u.value,["show","--no-color","--format=",W.hash,"--",J.path]);z=ee.code===0&&ee.stdout.trim()?ee.stdout.split(`
`):[]}else z=await j(W.hash,J.path)}catch{z=[]}F("open-diff",{title:`${C(J.path)} · ${W.short}`,lines:z})}async function j(W,J){const z=W.replace(/^r/,""),ee=await Jt(u.value,["diff","-c",z,"--","^"+J]);return ee.code===0&&ee.stdout.trim()?ee.stdout.split(`
`):[]}async function he(W){if(!(A[W.hash]||I[W.hash])){I[W.hash]=!0;try{const J=await Bo(u.value,["diff-tree","--no-commit-id","--name-status","-r","--root",W.hash]);A[W.hash]=J.code===0?Ee(J.stdout):[]}catch{A[W.hash]=[]}finally{I[W.hash]=!1}}}function Ee(W){const J=[];for(const z of W.split(`
`)){if(!z.trim())continue;const ee=z.split("	");ee.length<2||J.push({status:ee[0][0]??"?",path:ee[ee.length-1]})}return J}function ve(W){const J=[];try{new DOMParser().parseFromString(W,"application/xml").querySelectorAll("logentry").forEach(ee=>{const ge=[];ee.querySelectorAll("paths > path").forEach(be=>{const Ye=be.getAttribute("action"),st=be.textContent;st&&ge.push({status:Ye??"",path:st})});const je="r"+(ee.getAttribute("revision")??""),Ke=ee.querySelector("author")?.textContent??"—",Ze=ee.querySelector("date")?.textContent??"",ye=ee.querySelector("msg")?.textContent??"";A[je]=ge,J.push({hash:je,short:je,author:Ke,email:"",ts:Ze?Math.floor(new Date(Ze).getTime()/1e3):0,date:Ze?new Date(Ze).toLocaleString():"",subject:(ye.split(`
`)[0]??"").trim()||je,parents:[],refs:[]})})}catch{}return J}let ne=0;async function ie(){if(!l.value||!u.value)return;const W=++ne,J=l.value,z=u.value;p.value=!0;try{if(J==="git"){const ee=await Bo(z,["log","--max-count=30",`--pretty=format:${kl}`]);if(W!==ne)return;d.value=ee.code===0?xl(ee.stdout):[]}else{const ee=await Jt(z,["log","--xml","-v","-l","30"]);if(W!==ne)return;d.value=ee.code===0?ve(ee.stdout):[]}}catch{if(W!==ne)return;d.value=[]}finally{W===ne&&(p.value=!1)}}let Se=0;async function Ve(){const W=++Se,J=n.state.projectDir;if(!J||!ri(J)){l.value=null,d.value=[];return}p.value=!0,M.value="",d.value=[];for(const z of Object.keys(A))delete A[z];try{const z=await Wo(J);if(W!==Se)return;if(z.inRepo&&z.repo)l.value="git",u.value=z.repo,v.value=z.branch||"HEAD";else{const ee=await ps(J);if(W!==Se)return;ee.inRepo&&ee.root&&ee.svnAvailable?(l.value="svn",u.value=ee.root,v.value=ee.revision?"r"+ee.revision:"svn"):(l.value=null,d.value=[])}}catch{if(W!==Se)return;l.value=null,d.value=[]}finally{W===Se&&(p.value=!1)}l.value&&ie()}async function we(W){if(l.value==="git")return he(W)}Qe(()=>n.state.projectDir,()=>{Ve()},{immediate:!0});async function Ne(){xs("git"),xs("svn"),await Ve(),l.value&&ie()}return(W,J)=>c.value?(i(),r("div",BE,[o("div",IE,[h(oe,{name:l.value==="svn"?"clock":"git",size:12},null,8,["name"]),o("span",{class:te(["vs-gitbar-branch",{detached:l.value==="svn"}]),title:u.value},a(v.value),11,jE),o("span",VE,a(l.value==="svn"?"SVN · "+s(y)("vsGitHistory"):s(y)("vsGitHistory")),1),d.value.length?(i(),r("span",zE,a(d.value.length),1)):P("",!0),J[0]||(J[0]=o("span",{class:"vs-gitbar-fill"},null,-1)),o("button",{class:"vs-gitbar-act",title:s(y)("vsGitRefresh"),onClick:Ne},[h(oe,{name:"refresh",size:12,class:te({spin:p.value})},null,8,["class"])],8,UE)]),o("div",HE,[p.value&&!L.value.length?(i(),r("div",WE,a(s(y)("vsLoading")),1)):L.value.length?(i(!0),r(ae,{key:2},Ae(L.value,z=>(i(),r(ae,{key:z.commit.hash},[o("div",{class:te(["vs-gitbar-row",{open:M.value===z.commit.hash}]),title:z.commit.subject,onClick:ee=>G(z.commit)},[z.graph?(i(),r("span",{key:0,class:"vs-gitbar-lanes",style:_t({width:`${Math.min(z.graph.width,Bs)*s(Cs)}px`})},[(i(),r("svg",{width:Math.min(z.graph.width,Bs)*s(Cs),height:is,"aria-hidden":"true"},[(i(!0),r(ae,null,Ae(z.graph.through.filter(ee=>ee.lane<Bs),(ee,ge)=>(i(),r("line",{key:"t"+ge,x1:w(ee.lane),y1:0,x2:w(ee.lane),y2:is,stroke:s(Xn)(ee.color)},null,8,XE))),128)),z.graph.topLine&&z.graph.lane<Bs?(i(),r("line",{key:0,x1:w(z.graph.lane),y1:0,x2:w(z.graph.lane),y2:is/2,stroke:s(Xn)(z.graph.laneColor)},null,8,YE)):P("",!0),(i(!0),r(ae,null,Ae(z.graph.bends.filter(ee=>ee.from<Bs&&ee.to<Bs),(ee,ge)=>(i(),r(ae,{key:"b"+ge},[ee.from===ee.to?(i(),r("line",{key:0,x1:w(ee.from),y1:is/2,x2:w(ee.to),y2:is,stroke:s(Xn)(ee.color)},null,8,JE)):(i(),r("path",{key:1,d:b(ee.from,ee.to),fill:"none",stroke:s(Xn)(ee.color)},null,8,QE))],64))),128)),z.graph.lane<Bs?(i(),r("circle",{key:1,cx:w(z.graph.lane),cy:is/2,r:$(z.graph)?4:3,fill:s(Xn)(z.graph.laneColor),stroke:$(z.graph)?"var(--dsh-bg, #0d1117)":"none","stroke-width":"1.5"},null,8,ZE)):P("",!0)],8,KE))],4)):(i(),r("span",e6)),o("span",t6,a(z.commit.subject),1),z.commit.refs.length?(i(),r("span",n6,[(i(!0),r(ae,null,Ae(z.commit.refs,ee=>(i(),r("span",{key:ee.kind+ee.label,class:te(["vs-gitbar-ref","rf-"+ee.kind])},a(ee.label),3))),128))])):P("",!0),o("span",s6,a(z.commit.author),1)],10,qE),M.value===z.commit.hash?(i(),r("div",o6,[I[z.commit.hash]?(i(),r("div",a6,a(s(y)("vsLoading")),1)):(i(),r(ae,{key:1},[U(z.commit.hash).length?P("",!0):(i(),r("div",i6,a(s(y)("gitCommitNoFiles")),1)),(i(!0),r(ae,null,Ae(U(z.commit.hash),(ee,ge)=>(i(),r("div",{key:ge,class:"vs-gitbar-file",title:ee.path},[o("span",{class:te(["st","s-"+ee.status.toLowerCase()])},a(ee.status),3),h(oe,{name:"fileText",size:11}),o("span",r6,a(C(ee.path)),1),o("span",c6,a(Z(ee.path)),1),o("button",{class:"vs-gitbar-act vs-gitbar-file-open",title:s(y)("vsGitFileDiff"),onClick:_e(je=>de(z.commit,ee),["stop"])},[h(oe,{name:"fileOut",size:11})],8,u6)],8,l6))),128))],64))])):P("",!0)],64))),128)):(i(),r("div",GE,a(s(y)("gitLogEmpty")),1))])])):P("",!0)}}),f6=xt(d6,[["__scopeId","data-v-955f5249"]]),Ed="dsh-file-workbench.vscode.search.prefs",Wi={caseSensitive:!1,wholeWord:!1,regex:!1,preserveCase:!0,viewMode:"list",replaceOpen:!1,advancedOpen:!1};function p6(){try{const t=localStorage.getItem(Ed);return t?{...Wi,...JSON.parse(t)}:{...Wi}}catch{return{...Wi}}}function v6(){return{q:"",include:"",exclude:"",replacement:"",outcome:null,searched:!1}}const Nl=gt(p6()),Pl=gt(new Map);function h6(t,e){Nl[t]=e;try{localStorage.setItem(Ed,JSON.stringify(Nl))}catch{}}function Td(t){let e=Pl.get(t);return e||(e=v6(),Pl.set(t,e)),e}function m6(t,e){const n=Td(t);Object.assign(n,e)}function g6(t){Pl.delete(t)}function y6(){return{prefs:Nl,setPref:h6,getProject:Td,saveProject:m6,clearProject:g6}}const w6={class:"vs-sp"},b6={class:"vs-sp-titlebar"},_6={class:"vs-sp-title"},k6={class:"vs-sp-actions"},x6=["title"],C6=["title","disabled"],$6=["title","disabled"],S6=["title","disabled"],E6=["title","disabled"],T6={class:"vs-sp-head"},D6={class:"vs-sp-inputwrap"},F6=["placeholder"],R6=["title"],N6=["title"],P6=["title"],A6=["title"],M6={key:0,class:"vs-sp-inputwrap vs-sp-replacerow"},O6=["placeholder","onKeydown"],L6=["title"],B6=["title","disabled"],I6={key:0,class:"vs-sp-adv"},j6={class:"vs-sp-field"},V6={class:"vs-sp-field-label"},z6=["placeholder","title"],U6={class:"vs-sp-field"},H6={class:"vs-sp-field-label"},W6=["placeholder","title"],G6={key:1,class:"vs-sp-summary"},q6={key:0,class:"vs-sp-trunc"},K6={key:1,class:"vs-sp-trunc"},X6={key:2,class:"vs-sp-trunc"},Y6={key:2,class:"vs-sp-list"},J6=["title","onClick"],Q6={class:"vs-sp-name"},Z6={class:"vs-sp-dir"},e3={class:"vs-sp-count"},t3=["title","onClick"],n3={class:"vs-sp-ln"},s3={class:"vs-sp-text"},o3={key:0},a3=["title","onClick"],i3={class:"vs-sp-name"},l3={class:"vs-sp-count"},r3=["title","onClick"],c3={class:"vs-sp-name"},u3={class:"vs-sp-count"},d3=["title","onClick"],f3={class:"vs-sp-ln"},p3={class:"vs-sp-text"},v3={key:0},h3=ht({__name:"VSSearchPanel",props:{projectDir:{}},emits:["open"],setup(t,{emit:e}){const n=t,l=e,c=y6(),{prefs:u}=c,v=c.getProject(n.projectDir),d=m(v.q),p=m(v.include),w=m(v.exclude),b=m(v.replacement),$=m(v.outcome),L=m(v.searched),M=m(u.caseSensitive),A=m(u.wholeWord),I=m(u.regex),U=m(u.preserveCase),C=m(u.viewMode),Z=m(u.replaceOpen),G=m(u.advancedOpen),F=m(!1),de=m(!1),j=m(new Set),he=m(new Set(""));let Ee=0,ve=0;const ne=B(()=>d.value.trim().length>=2),ie=B(()=>!!$.value&&$.value.files.length>0),Se=B(()=>ne.value&&ie.value&&b.value.length>0&&!Wt(n.projectDir));function Ve(){return{path:n.projectDir,caseSensitive:M.value,regex:I.value,wholeWord:A.value,include:p.value.trim()||void 0,exclude:w.value.trim()||void 0}}async function we(){const Le=++Ee;if(!ne.value){$.value=null,L.value=!1,F.value=!1,Ne();return}F.value=!0;try{const H=await lp(d.value.trim(),Ve());if(Le!==Ee)return;$.value=H,L.value=!0,j.value=new Set(H.files.length<=8?H.files.map(N=>N.rel):[])}catch{Le===Ee&&($.value=null,L.value=!0)}finally{Le===Ee&&(F.value=!1,Ne())}}function Ne(){n.projectDir&&c.saveProject(n.projectDir,{q:d.value,include:p.value,exclude:w.value,replacement:b.value,outcome:$.value,searched:L.value})}function W(){ve&&window.clearTimeout(ve),ve=window.setTimeout(()=>void we(),300)}function J(){M.value=!M.value,c.setPref("caseSensitive",M.value),L.value&&we()}function z(){A.value=!A.value,c.setPref("wholeWord",A.value),L.value&&we()}function ee(){I.value=!I.value,c.setPref("regex",I.value),L.value&&we()}function ge(){C.value=C.value==="list"?"tree":"list",c.setPref("viewMode",C.value)}function je(){U.value=!U.value,c.setPref("preserveCase",U.value)}function Ke(){Z.value=!Z.value,c.setPref("replaceOpen",Z.value)}function Ze(){G.value=!G.value,c.setPref("advancedOpen",G.value)}function ye(){const Le=$.value;if(Le)if(C.value==="list")j.value=new Set(Le.files.map(H=>H.rel));else{const H=new Set("");for(const N of Le.files)Ye(H,N.rel);he.value=H}}function be(){C.value==="list"?j.value=new Set:he.value=new Set("")}function Ye(Le,H){const N=H.split("/");for(let Q=1;Q<N.length;Q++)Le.add(N.slice(0,Q).join("/"))}function st(Le){const H=new Set(he.value);H.has(Le)?H.delete(Le):H.add(Le),he.value=H}const pe=B(()=>{const Le=$.value;if(!Le||C.value!=="tree")return[];const H={name:"",path:"",dirs:new Map,files:[],count:0};for(const Te of Le.files){const O=Te.rel.split("/"),T={name:O[O.length-1],rel:Te.rel,count:Te.hits.length};let K=H;K.count+=Te.hits.length;for(let S=0;S<O.length-1;S++){const q=O[S],De=K.path?`${K.path}/${q}`:q;let re=K.dirs.get(q);re||(re={name:q,path:De,dirs:new Map,files:[],count:0},K.dirs.set(q,re)),K=re,K.count+=Te.hits.length}K.files.push(T)}const N=[],Q=(Te,O)=>{const T=he.value.has(Te.path);if(O>0&&N.push({kind:"dir",path:Te.path,name:Te.name,depth:O,count:Te.count,open:T}),!(!T&&O>0)){for(const K of[...Te.dirs.values()].sort((S,q)=>S.name.localeCompare(q.name)))Q(K,O+1);for(const K of[...Te.files].sort((S,q)=>S.name.localeCompare(q.name)))N.push({kind:"file",path:K.rel,name:K.name,dir:it(K.rel),depth:O,count:K.count,open:j.value.has(K.rel)})}};return Q(H,0),N});function ke(){ve&&window.clearTimeout(ve),Ee++,d.value="",b.value="",p.value="",w.value="",$.value=null,L.value=!1,F.value=!1,j.value=new Set,he.value=new Set(""),c.clearProject(n.projectDir)}function qe(Le){const H=new Set(j.value);H.has(Le)?H.delete(Le):H.add(Le),j.value=H}function ce(Le){return $.value?.files.find(H=>H.rel===Le)?.hits??[]}async function Ie(){if(!Se.value||de.value)return;const Le=$.value;if(!Le)return;const H=Le.total,N=Le.files.length,Q=y("vsReplaceConfirm",{files:String(N),n:String(H),q:d.value.trim(),r:b.value});if(window.confirm(Q)){de.value=!0;try{const Te=await qc(d.value.trim(),b.value,{scope:n.projectDir,caseSensitive:M.value,regex:I.value,wholeWord:A.value,preserveCase:U.value,include:p.value.trim()||void 0,exclude:w.value.trim()||void 0});Te.replacements>0?X("ok",y("vsReplaceDone",{files:String(Te.files),n:String(Te.replacements)})):X("info",y("vsReplaceNone")),await we()}catch(Te){console.warn("[dsh-file-workbench] replace failed:",Te)}finally{de.value=!1}}}function rt(Le){const H=c.getProject(Le);d.value=H.q,p.value=H.include,w.value=H.exclude,b.value=H.replacement,$.value=H.outcome,L.value=H.searched,j.value=new Set,he.value=new Set("")}Qe(()=>n.projectDir,Le=>rt(Le)),ln(()=>{Ne(),ne.value&&!$.value&&we()}),Pt(()=>{ve&&window.clearTimeout(ve)});function yt(Le){const H=d.value.trim();if(!H)return[{t:Le,hit:!1}];let N;try{N=I.value?H:H.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}catch{return[{t:Le,hit:!1}]}A.value&&(N=`(?<![\\p{L}\\p{N}_])${N}(?![\\p{L}\\p{N}_])`);let Q;try{Q=new RegExp(N,M.value?"gu":"giu")}catch{return[{t:Le,hit:!1}]}const Te=[];let O=0;for(const T of Le.matchAll(Q))if(T.index>O&&Te.push({t:Le.slice(O,T.index),hit:!1}),Te.push({t:T[0]||H,hit:!0}),O=T.index+(T[0]?.length||H.length),T[0]==="")break;return O<Le.length&&Te.push({t:Le.slice(O),hit:!1}),Te}const ut=Le=>Le.slice(Le.lastIndexOf("/")+1),it=Le=>{const H=Le.lastIndexOf("/");return H<0?"":Le.slice(0,H)};return(Le,H)=>(i(),r("div",w6,[o("div",b6,[o("span",_6,a(s(y)("vsSearchTitle")),1),o("div",k6,[o("button",{class:"vs-sp-act",title:s(y)("vsViewModeSwitchTitle"),onClick:ge},[h(oe,{name:C.value==="list"?"sort":"folderOpen",size:13},null,8,["name"])],8,x6),o("button",{class:"vs-sp-act",title:s(y)("vsRefreshResults"),disabled:!ne.value,onClick:H[0]||(H[0]=N=>we())},[h(oe,{name:"refresh",size:13})],8,C6),o("button",{class:"vs-sp-act",title:s(y)("vsExpandAll"),disabled:!ie.value,onClick:ye},[h(oe,{name:"chevronsDown",size:13})],8,$6),o("button",{class:"vs-sp-act",title:s(y)("vsCollapseAll"),disabled:!ie.value,onClick:be},[h(oe,{name:"chevronsUp",size:13})],8,S6),o("button",{class:"vs-sp-act",title:s(y)("vsClearAllResults"),disabled:!L.value&&!d.value,onClick:ke},[h(oe,{name:"close",size:13})],8,E6)])]),o("div",T6,[o("div",D6,[kt(o("input",{"onUpdate:modelValue":H[1]||(H[1]=N=>d.value=N),class:"vs-sp-input",placeholder:s(y)("vsGrepPlaceholder"),onKeydown:H[2]||(H[2]=bt(_e(N=>we(),["prevent"]),["enter"])),onInput:W},null,40,F6),[[Lt,d.value]]),o("button",{class:te(["vs-sp-toggle",{on:M.value}]),title:s(y)("vsGrepCase"),onClick:J},[...H[8]||(H[8]=[o("span",null,"Aa",-1)])],10,R6),o("button",{class:te(["vs-sp-toggle",{on:A.value}]),title:s(y)("vsGrepWholeWord"),onClick:z},[...H[9]||(H[9]=[o("span",null,"ab",-1)])],10,N6),o("button",{class:te(["vs-sp-toggle",{on:I.value}]),title:s(y)("vsGrepRegex"),onClick:ee},[...H[10]||(H[10]=[o("span",null,".*",-1)])],10,P6),o("button",{class:te(["vs-sp-toggle",{on:Z.value}]),title:s(y)("vsToggleReplace"),onClick:Ke},[h(oe,{name:"chevronRight",size:12,class:te(["vs-sp-replace-caret",{open:Z.value}])},null,8,["class"])],10,A6)]),Z.value?(i(),r("div",M6,[kt(o("input",{"onUpdate:modelValue":H[3]||(H[3]=N=>b.value=N),class:"vs-sp-input",placeholder:s(y)("vsGrepReplacePlaceholder"),onKeydown:bt(_e(Ie,["prevent"]),["enter"])},null,40,O6),[[Lt,b.value]]),o("button",{class:te(["vs-sp-toggle",{on:U.value}]),title:s(y)("vsReplacePreserveCase"),onClick:je},[...H[11]||(H[11]=[o("span",null,"AB",-1)])],10,L6),o("button",{class:"vs-sp-btn-replaceall",title:s(y)("vsReplaceAll"),disabled:!Se.value||de.value,onClick:Ie},[h(oe,{name:"chevronsRight",size:13})],8,B6)])):P("",!0)]),o("div",{class:"vs-sp-divider",onClick:Ze},[h(oe,{name:"chevronRight",size:11,class:te(["vs-sp-div-caret",{open:G.value}])},null,8,["class"])]),G.value?(i(),r("div",I6,[o("div",j6,[o("div",V6,[h(oe,{name:"file",size:12}),o("span",null,a(s(y)("vsFilesToInclude")),1)]),kt(o("input",{"onUpdate:modelValue":H[4]||(H[4]=N=>p.value=N),class:"vs-sp-field-input",placeholder:s(y)("vsFilesToIncludePlaceholder"),title:s(y)("vsFilesToIncludeTitle"),onKeydown:H[5]||(H[5]=bt(_e(N=>we(),["prevent"]),["enter"])),onInput:W},null,40,z6),[[Lt,p.value]])]),o("div",U6,[o("div",H6,[h(oe,{name:"gear",size:12}),o("span",null,a(s(y)("vsFilesToExclude")),1)]),kt(o("input",{"onUpdate:modelValue":H[6]||(H[6]=N=>w.value=N),class:"vs-sp-field-input",placeholder:s(y)("vsFilesToExcludePlaceholder"),title:s(y)("vsFilesToExcludeTitle"),onKeydown:H[7]||(H[7]=bt(_e(N=>we(),["prevent"]),["enter"])),onInput:W},null,40,W6),[[Lt,w.value]])])])):P("",!0),L.value?(i(),r("div",G6,[$.value?(i(),r(ae,{key:0},[o("span",null,a(s(y)("vsGrepSummary",{files:$.value.files.length,n:$.value.total})),1),$.value.truncated?(i(),r("span",q6,a(s(y)("vsGrepTruncated")),1)):P("",!0)],64)):F.value?(i(),r("span",K6,a(s(y)("vsLoading")),1)):(i(),r("span",X6,a(s(y)("vsGrepNoResult")),1))])):P("",!0),$.value?(i(),r("div",Y6,[C.value==="list"?(i(!0),r(ae,{key:0},Ae($.value.files,N=>(i(),r(ae,{key:N.rel},[o("div",{class:te(["vs-sp-file",{open:j.value.has(N.rel)}]),title:N.rel,onClick:Q=>qe(N.rel)},[h(oe,{name:"chevronRight",size:11,class:"vs-sp-caret"}),h(oe,{name:"fileText",size:12}),o("span",Q6,a(ut(N.rel)),1),o("span",Z6,a(it(N.rel)),1),o("span",e3,a(N.hits.length),1)],10,J6),j.value.has(N.rel)?(i(!0),r(ae,{key:0},Ae(N.hits,Q=>(i(),r("div",{key:N.rel+":"+Q.ln,class:"vs-sp-hit",title:s(y)("vsGrepOpenAt",{ln:Q.ln}),onClick:Te=>l("open",N.rel,Q.ln)},[o("span",n3,a(Q.ln),1),o("span",s3,[(i(!0),r(ae,null,Ae(yt(Q.text),(Te,O)=>(i(),r(ae,{key:O},[Te.hit?(i(),r("mark",o3,a(Te.t),1)):(i(),r(ae,{key:1},[ue(a(Te.t),1)],64))],64))),128))])],8,t3))),128)):P("",!0)],64))),128)):(i(!0),r(ae,{key:1},Ae(pe.value,N=>(i(),r(ae,{key:N.kind+":"+N.path},[N.kind==="dir"?(i(),r("div",{key:0,class:te(["vs-sp-file vs-sp-node",{open:N.open}]),style:_t({paddingLeft:8+(N.depth-1)*12+"px"}),title:N.path,onClick:Q=>st(N.path)},[h(oe,{name:"chevronRight",size:11,class:"vs-sp-caret"}),h(oe,{name:N.open?"folderOpen":"folder",size:12},null,8,["name"]),o("span",i3,a(N.name),1),o("span",l3,a(N.count),1)],14,a3)):(i(),r(ae,{key:1},[o("div",{class:te(["vs-sp-file vs-sp-node",{open:N.open}]),style:_t({paddingLeft:8+N.depth*12+"px"}),title:N.path,onClick:Q=>qe(N.path)},[h(oe,{name:"chevronRight",size:11,class:"vs-sp-caret"}),h(oe,{name:"fileText",size:12}),o("span",c3,a(N.name),1),o("span",u3,a(N.count),1)],14,r3),N.open?(i(!0),r(ae,{key:0},Ae(ce(N.path),Q=>(i(),r("div",{key:N.path+":"+Q.ln,class:"vs-sp-hit",style:_t({paddingLeft:26+N.depth*12+"px"}),title:s(y)("vsGrepOpenAt",{ln:Q.ln}),onClick:Te=>l("open",N.path,Q.ln)},[o("span",f3,a(Q.ln),1),o("span",p3,[(i(!0),r(ae,null,Ae(yt(Q.text),(Te,O)=>(i(),r(ae,{key:O},[Te.hit?(i(),r("mark",v3,a(Te.t),1)):(i(),r(ae,{key:1},[ue(a(Te.t),1)],64))],64))),128))])],12,d3))),128)):P("",!0)],64))],64))),128))])):P("",!0)]))}}),m3=xt(h3,[["__scopeId","data-v-0328b4ec"]]),xc=1500;function g3(t,e){const n=t.split(`
`),l=e.split(`
`);if(t===e)return{lines:[]};let c=0;for(;c<n.length&&c<l.length&&n[c]===l[c];)c+=1;let u=n.length,v=l.length;for(;u>c&&v>c&&n[u-1]===l[v-1];)u-=1,v-=1;const d=n.slice(c,u),p=l.slice(c,v);if(d.length>xc||p.length>xc)return null;const w=d.length,b=p.length,$=new Int32Array((w+1)*(b+1)),L=(G,F)=>G*(b+1)+F;for(let G=w-1;G>=0;G-=1)for(let F=b-1;F>=0;F-=1)$[L(G,F)]=d[G]===p[F]?$[L(G+1,F+1)]+1:Math.max($[L(G+1,F)],$[L(G,F+1)]);const M=[];let A=0,I=0;for(;A<w&&I<b;)d[A]===p[I]?(M.push({kind:" ",text:d[A]}),A+=1,I+=1):$[L(A+1,I)]>=$[L(A,I+1)]?(M.push({kind:"-",text:d[A]}),A+=1):(M.push({kind:"+",text:p[I]}),I+=1);for(;A<w;)M.push({kind:"-",text:d[A]}),A+=1;for(;I<b;)M.push({kind:"+",text:p[I]}),I+=1;const U=3,C=["--- 磁盘版本","+++ 未保存改动"];let Z=0;for(;Z<M.length;){if(M[Z].kind===" "){Z+=1;continue}let G=Math.max(0,Z-U);for(;G>0&&M[G].kind===" "&&Z-G<U;)G-=1;let F=Z,de=0,j=Z;for(;F<M.length;){if(M[F].kind!==" ")de=0,j=F;else if(de+=1,de>=U*2)break;F+=1}const he=Math.min(M.length,j+1+U),Ee=M.slice(G,he),ve=c+G+1,ne=c+G+1;C.push(`@@ -${ve} +${ne} @@`);for(const ie of Ee)C.push(ie.kind+ie.text);Z=he}return{lines:C}}const y3=[{id:"@sunjuntao/dsh-fw-find-references",name:"引用查找",version:"0.1.0",description:"DSH 文件编辑器「引用查找」插件：Activity Bar 注入视图，跟随编辑器光标选中词（v5 ctx.editor），用工作台 /grep 全词搜索项目内引用并点击跳转。对标 VS Code Find All References。",code:`window.__ModuleLoader__.load({
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
`}],Dd="dsh-fw.userPlugins",Wn=m([]),Vs=new Map;let Cc=!1,$a=null;async function w3(t,e){await fetch(`${Yn}/plugin-data`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({k:t,v:e})}).catch(()=>{})}async function b3(t){try{return(await(await fetch(`${Yn}/plugin-data?k=${encodeURIComponent(t)}`,{headers:{Accept:"application/json"}})).json().catch(()=>null))?.data??null}catch{return null}}function hr(){$a&&clearTimeout($a),$a=setTimeout(()=>{$a=null,w3(Dd,Wn.value)},300)}async function _3(){const t=await b3(Dd);return Array.isArray(t)?t:[]}const Pa=new Map;function k3(){return{load(t){Pa.set(t.id,t)}}}function $c(){return{views:ed().map(t=>t.id),commands:lr(),status:vi().map(t=>t.id),menu:Jo().map(t=>t.id)}}function x3(t,e){const n=(l,c)=>c.filter(u=>!l.includes(u));return{views:n(t.views,e.views),commands:n(t.commands,e.commands),status:n(t.status,e.status),menu:n(t.menu,e.menu)}}function Al(t){t&&(t.views.forEach(di),t.commands.forEach(ir),t.status.forEach(pi),t.menu.forEach(hi))}function C3(t){const e=window,n=e.__ModuleLoader__,l=new Set(Pa.keys());e.__ModuleLoader__=k3();try{(0,eval)(t)}finally{e.__ModuleLoader__=n}const c=[...Pa.keys()].filter(v=>!l.has(v)),u=$c();for(const v of c){const d=Pa.get(v).factory(()=>{});typeof d?.apply=="function"&&d.apply()}return x3(u,$c())}function mr(t){return Wn.value.find(e=>e.id===t)}async function $o(t){const e=mr(t);if(e){Al(Vs.get(t)),Vs.delete(t);try{const n=C3(e.code);Vs.set(t,n),e.enabled=!0,e.error=void 0}catch(n){e.enabled=!1,e.error=n instanceof Error?n.message:String(n),Al(Vs.get(t)),Vs.delete(t)}hr()}}function gr(t){const e=mr(t);e&&(Al(Vs.get(t)),Vs.delete(t),e.enabled=!1,e.error=void 0,hr())}function $3(t){const e=mr(t);!e||e.source==="builtin"||(gr(t),Wn.value=Wn.value.filter(n=>n.id!==t),hr())}function Fd(t){return t.trim()}function Rd(t){const e=Wn.value.findIndex(n=>n.id===t.id);e>=0?Wn.value.splice(e,1,t):Wn.value=[...Wn.value,t]}async function S3(t){const e=await t.text(),n=Fd(t.name.replace(/\.(c|m)?js$/i,""))||`file-${Date.now()}`;Rd({id:n,name:t.name,source:"file",origin:t.name,code:e,enabled:!1}),await $o(n)}async function E3(t){const e=t.trim();if(!e)return;const n=await fetch(`${Yn}/fetch-plugin`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({url:e})}),l=await n.json().catch(()=>({ok:!1,error:"bad response"}));if(!l.ok||!l.data)throw new Error(l.error||`HTTP ${n.status}`);const{code:c,name:u}=l.data,v=u||e.split("/").pop()||e,d=Fd(v.replace(/\.(c|m)?js$/i,""))||`url-${Date.now()}`;Rd({id:d,name:v,source:"url",origin:e,code:c,enabled:!1}),await $o(d)}function T3(t){const e=new Map(t.map(n=>[n.id,n]));for(const n of y3)e.has(n.id)||e.set(n.id,{id:n.id,name:n.name,source:"builtin",origin:n.id,version:n.version,description:n.description,code:n.code,enabled:!1});return[...e.values()]}async function D3(){if(Cc||typeof window>"u")return;Cc=!0;const t=await _3();Wn.value=T3(t);for(const e of[...Wn.value])e.enabled&&await $o(e.id)}function Ml(){return Wn.value}const F3="host.plugin-manager",$e="dsh-pm";let Sc=!1,Ec=!1;function R3(){Sc||typeof window>"u"||(Sc=!0,or({id:F3,title:{zh:"插件管理",en:"Plugins"},icon:"puzzle",order:Number.MAX_SAFE_INTEGER,mount(t,e){const n=B3(t,e);return Ec||(Ec=!0,D3().then(()=>n.rerender())),n.cleanup}}))}function N3(){if(typeof document>"u"||document.getElementById(`${$e}-styles`))return;const t=`
.${$e}-view{color:var(--dsh-fg,#cccccc);font-size:13px;}
.${$e}-root{display:flex;flex-direction:column;min-height:100%;gap:0;}

/* ---- header：标题 + 计数 + 右侧「···」菜单 ---- */
.${$e}-hdr{display:flex;align-items:center;gap:8px;padding:8px 10px 6px;position:sticky;top:0;background:var(--dsh-bg,#1e1e1e);z-index:2;}
.${$e}-title{font-size:11px;font-weight:700;letter-spacing:.6px;text-transform:uppercase;color:var(--dsh-fg-dim,#bbbbbb);}
.${$e}-count{font-size:11px;color:var(--dsh-fg-dim,#8b949e);}
.${$e}-spacer{flex:1 1 auto;}
.${$e}-kebab{width:24px;height:22px;border:none;border-radius:4px;background:transparent;color:var(--dsh-fg-dim,#bbbbbb);cursor:pointer;font-size:16px;line-height:1;display:flex;align-items:center;justify-content:center;}
.${$e}-kebab:hover{background:var(--dsh-hover,rgba(90,93,94,.4));color:var(--dsh-fg,#fff);}

/* ---- 搜索框 ---- */
.${$e}-search{padding:2px 10px 8px;position:relative;}
.${$e}-search-box{display:flex;align-items:center;gap:6px;padding:5px 8px;border:1px solid transparent;border-radius:3px;background:var(--dsh-input,#3c3c3c);}
.${$e}-search-box:focus-within{border-color:var(--dsh-focus,#007fd4);}
.${$e}-search-box svg{width:14px;height:14px;flex:0 0 auto;color:var(--dsh-fg-dim,#aaaaaa);}
.${$e}-search-input{flex:1 1 auto;min-width:0;border:none;outline:none;background:transparent;color:inherit;font-size:13px;}
.${$e}-search-input::placeholder{color:#8a8a8a;}

/* ---- 分段筛选（已安装 / 可用）---- */
.${$e}-seg{display:flex;gap:0;padding:0 10px 8px;border-bottom:1px solid var(--dsh-border,#3c3c3c);}
.${$e}-seg button{flex:1;padding:5px 0;font-size:12px;border:none;background:transparent;color:var(--dsh-fg-dim,#bbbbbb);cursor:pointer;border-bottom:2px solid transparent;}
.${$e}-seg button.active{color:var(--dsh-fg,#fff);border-bottom-color:var(--dsh-focus,#007fd4);}
.${$e}-seg button:hover:not(.active){color:var(--dsh-fg,#fff);}

/* ---- 列表 ---- */
.${$e}-list{display:flex;flex-direction:column;padding:6px 0;}
.${$e}-group-label{padding:8px 12px 4px;font-size:11px;font-weight:600;color:var(--dsh-fg-dim,#8b949e);}
.${$e}-row{display:flex;align-items:flex-start;gap:10px;padding:8px 12px;cursor:default;border-left:2px solid transparent;}
.${$e}-row:hover{background:var(--dsh-rowhover,#2a2d2e);}
.${$e}-row.is-active{background:var(--dsh-rowsel,#37373d);border-left-color:var(--dsh-focus,#007fd4);}
.${$e}-avatar{width:42px;height:42px;flex:0 0 auto;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;color:#fff;background:linear-gradient(135deg,#4a4a4a,#3a3a3a);overflow:hidden;}
.${$e}-avatar img{width:100%;height:100%;object-fit:cover;}
.${$e}-main{flex:1 1 auto;min-width:0;display:flex;flex-direction:column;gap:2px;}
.${$e}-nameline{display:flex;align-items:center;gap:8px;}
.${$e}-name{font-weight:600;font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.${$e}-switch{margin-left:auto;flex:0 0 auto;position:relative;width:34px;height:18px;border-radius:9px;background:var(--dsh-border,#4d4d4d);cursor:pointer;transition:background .15s;border:none;padding:0;}
.${$e}-switch::after{content:"";position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;background:#cdcdcd;transition:transform .15s,background .15s;}
.${$e}-switch.on{background:var(--dsh-focus,#0e639c);}
.${$e}-switch.on::after{transform:translateX(16px);background:#fff;}
.${$e}-desc{font-size:12px;color:var(--dsh-fg-dim,#a0a0a0);line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}
.${$e}-metas{display:flex;gap:8px;align-items:center;margin-top:1px;font-size:11px;color:var(--dsh-fg-dim,#8b949e);}
.${$e}-meta-sep{opacity:.5;}
.${$e}-badge{font-size:10px;padding:0 5px;border-radius:3px;border:1px solid var(--dsh-border,#4d4d4d);color:var(--dsh-fg-dim,#a0a0a0);}
.${$e}-badge.builtin{color:#c58bff;border-color:#c58bff55;}
.${$e}-badge.file{color:#4fc1ff;border-color:#4fc1ff55;}
.${$e}-badge.url{color:#dcdcaa;border-color:#dcdcaa55;}
.${$e}-err{font-size:11px;color:#f14c4c;margin-top:2px;word-break:break-all;}
.${$e}-acts{display:flex;gap:6px;margin-top:4px;}
.${$e}-act{font-size:11px;padding:2px 8px;border-radius:3px;border:1px solid var(--dsh-border,#4d4d4d);background:var(--dsh-btn,#3a3a3a);color:var(--dsh-fg,#cccccc);cursor:pointer;}
.${$e}-act:hover{background:#454545;}
.${$e}-act.danger:hover{border-color:#f14c4c;color:#f14c4c;}

/* ---- 「···」下拉菜单 ---- */
.${$e}-menu{position:absolute;right:10px;top:34px;min-width:168px;padding:4px;border-radius:6px;background:var(--dsh-menu,#252526);border:1px solid var(--dsh-border,#454545);box-shadow:0 4px 16px rgba(0,0,0,.4);z-index:20;display:none;}
.${$e}-menu.open{display:block;}
.${$e}-menu-item{display:flex;align-items:center;gap:8px;padding:6px 10px;font-size:12px;border-radius:4px;cursor:pointer;color:var(--dsh-fg,#cccccc);}
.${$e}-menu-item:hover{background:var(--dsh-focus,#007fd4);color:#fff;}
.${$e}-menu-sep{height:1px;margin:4px 6px;background:var(--dsh-border,#454545);}

/* ---- URL 输入弹层 ---- */
.${$e}-url-panel{overflow:hidden;max-height:0;opacity:0;transition:max-height .2s ease,opacity .15s;padding:0 10px;}
.${$e}-url-panel.open{max-height:48px;opacity:1;padding-bottom:8px;}
.${$e}-url-inner{display:flex;gap:6px;}
.${$e}-url-input{flex:1 1 auto;min-width:0;padding:5px 8px;border:1px solid transparent;border-radius:3px;background:var(--dsh-input,#3c3c3c);color:inherit;font-size:12px;outline:none;}
.${$e}-url-input:focus{border-color:var(--dsh-focus,#007fd4);}
.${$e}-url-go{padding:5px 12px;font-size:12px;border:none;border-radius:3px;background:var(--dsh-focus,#0e639c);color:#fff;cursor:pointer;}
.${$e}-url-go:hover{background:#1177bb;}

/* ---- 空态 ---- */
.${$e}-empty{display:flex;flex-direction:column;align-items:center;gap:8px;padding:36px 16px;color:var(--dsh-fg-dim,#8b949e);}
.${$e}-empty-icon{font-size:30px;opacity:.5;}
.${$e}-empty-text{font-size:12px;text-align:center;line-height:1.6;}
`,e=document.createElement("style");e.id=`${$e}-styles`,e.textContent=t,document.head.appendChild(e)}const P3='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>';let ho="installed",Ol="";function Nd(t){return t==="builtin"?"内置":t==="file"?"本地":"URL"}function Pd(t){const e=t.description?.match(/对标\s*([^。（(]+)/);return e?e[1].trim():Nd(t.source)}function A3(t){return(t.name.replace(/^@[^/]+\//,"")[0]??"?").toUpperCase()}function M3(t,e){return e?`${t.name} ${t.description??""} ${Pd(t)}`.toLowerCase().includes(e):!0}function zn(t,e){const n=t.querySelector(`.${$e}-list`),l=t.querySelector(`.${$e}-count`);if(!n)return;const c=Ol.trim().toLowerCase(),v=Ml().filter(b=>M3(b,c)),d=v.filter(b=>b.enabled),p=v.filter(b=>!b.enabled),w=ho==="installed"?d:p;if(l&&(l.textContent=ho==="installed"?`${d.length} 个已启用`:`${p.length} 个未启用`),n.replaceChildren(),!w.length){const b=document.createElement("div");b.className=`${$e}-empty`,b.innerHTML=`<div class="${$e}-empty-icon">&#x2699;</div><div class="${$e}-empty-text">${c?`没有匹配 “${O3(Ol)}” 的插件`:ho==="installed"?"当前没有已启用的插件<br>到「可用」里启用，或用右上「···」导入":"所有插件都已启用<br>用右上「···」从本地或 URL 导入更多"}</div>`,n.append(b);return}for(const b of w)n.append(L3(b,t,e))}function O3(t){return t.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}function L3(t,e,n){const l=document.createElement("div");l.className=`${$e}-row${t.enabled?" is-active":""}`;const c=document.createElement("div");c.className=`${$e}-avatar`,c.textContent=A3(t),l.append(c);const u=document.createElement("div");u.className=`${$e}-main`;const v=document.createElement("div");v.className=`${$e}-nameline`;const d=document.createElement("div");d.className=`${$e}-name`,d.textContent=t.name.replace(/^@[^/]+\//,""),d.title=t.origin||t.name;const p=document.createElement("button");if(p.type="button",p.className=`${$e}-switch${t.enabled?" on":""}`,p.title=t.enabled?"点击停用":"点击启用",p.addEventListener("click",M=>{M.stopPropagation(),t.enabled?gr(t.id):$o(t.id).then(()=>{t.error&&n.toast("error",t.error)}),zn(e,n)}),v.append(d,p),u.append(v),t.description){const M=document.createElement("div");M.className=`${$e}-desc`,M.textContent=t.description,u.append(M)}const w=document.createElement("div");w.className=`${$e}-metas`;const b=document.createElement("span");b.className=`${$e}-badge ${t.source}`,b.textContent=Nd(t.source),w.append(b);const $=document.createElement("span");if($.textContent=Pd(t),w.append($),t.version){const M=document.createElement("span");M.className=`${$e}-meta-sep`,M.textContent="·";const A=document.createElement("span");A.textContent=`v${t.version}`,w.append(M,A)}if(u.append(w),t.error){const M=document.createElement("div");M.className=`${$e}-err`,M.textContent=t.error,u.append(M)}const L=document.createElement("div");if(L.className=`${$e}-acts`,!t.enabled){const M=document.createElement("button");M.type="button",M.className=`${$e}-act`,M.textContent="启用",M.addEventListener("click",()=>{$o(t.id).then(()=>{t.error&&n.toast("error",t.error)}),zn(e,n)}),L.append(M)}if(t.source!=="builtin"){const M=document.createElement("button");M.type="button",M.className=`${$e}-act danger`,M.textContent="移除",M.addEventListener("click",()=>{$3(t.id),zn(e,n)}),L.append(M)}return L.childElementCount&&u.append(L),l.append(u),l}function B3(t,e){N3(),t.classList.add(`${$e}-view`);const n=document.createElement("div");n.className=`${$e}-root`;const l=document.createElement("div");l.className=`${$e}-hdr`;const c=document.createElement("div");c.className=`${$e}-title`,c.textContent="扩展";const u=document.createElement("div");u.className=`${$e}-count`;const v=document.createElement("div");v.className=`${$e}-spacer`;const d=document.createElement("button");d.type="button",d.className=`${$e}-kebab`,d.title="管理",d.textContent="⋯",l.append(c,u,v,d);const p=document.createElement("div");p.className=`${$e}-search`;const w=document.createElement("div");w.className=`${$e}-search-box`,w.innerHTML=P3;const b=document.createElement("input");b.type="text",b.className=`${$e}-search-input`,b.placeholder="在插件中搜索",b.addEventListener("input",()=>{Ol=b.value,zn(n,e)}),w.append(b),p.append(w);const $=document.createElement("div");$.className=`${$e}-seg`;const L=[{key:"installed",label:()=>"已安装"},{key:"available",label:()=>"可用"}],M=new Map;for(const ve of L){const ne=document.createElement("button");ne.type="button",ne.textContent=ve.label(),ne.className=ve.key===ho?"active":"",ne.addEventListener("click",()=>{ho=ve.key;for(const[ie,Se]of M)Se.classList.toggle("active",ie===ho);zn(n,e)}),M.set(ve.key,ne),$.append(ne)}const A=document.createElement("div");A.className=`${$e}-list`;const I=document.createElement("div");I.className=`${$e}-menu`;const U=document.createElement("input");U.type="file",U.accept=".js,.cjs,.mjs,text/javascript",U.multiple=!0,U.style.display="none",U.addEventListener("change",async()=>{const ve=[...U.files??[]];for(const ne of ve)try{await S3(ne)}catch(ie){e.toast("error",`导入 ${ne.name} 失败：${ie instanceof Error?ie.message:String(ie)}`)}U.value="",zn(n,e)});const C=(ve,ne)=>{const ie=document.createElement("div");return ie.className=`${$e}-menu-item`,ie.textContent=ve,ie.addEventListener("click",()=>{I.classList.remove("open"),ne()}),ie},Z=document.createElement("div");Z.className=`${$e}-url-panel`;const G=document.createElement("div");G.className=`${$e}-url-inner`;const F=document.createElement("input");F.type="text",F.className=`${$e}-url-input`,F.placeholder="https://example.com/plugin.js";const de=document.createElement("button");de.type="button",de.className=`${$e}-url-go`,de.textContent="拉取";const j=async()=>{const ve=F.value.trim();if(ve){de.disabled=!0,de.textContent="…";try{await E3(ve),F.value="",Z.classList.remove("open"),e.toast("ok","已从 URL 导入并启用")}catch(ne){e.toast("error",`URL 导入失败：${ne instanceof Error?ne.message:String(ne)}`)}finally{de.disabled=!1,de.textContent="拉取",zn(n,e)}}};de.addEventListener("click",()=>void j()),F.addEventListener("keydown",ve=>{ve.key==="Enter"&&j()}),G.append(F,de),Z.append(G),I.append(C("从本地文件导入…",()=>U.click()),C("从 URL 导入…",()=>{Z.classList.toggle("open"),Z.classList.contains("open")&&setTimeout(()=>F.focus(),80)}));const he=document.createElement("div");he.className=`${$e}-menu-sep`,I.append(he),I.append(C("全部启用",()=>{for(const ve of Ml())ve.enabled||$o(ve.id);zn(n,e)}),C("全部停用",()=>{for(const ve of Ml())ve.enabled&&gr(ve.id);zn(n,e)})),d.addEventListener("click",ve=>{ve.stopPropagation(),I.classList.toggle("open")});const Ee=ve=>{!I.contains(ve.target)&&ve.target!==d&&I.classList.remove("open")};return document.addEventListener("click",Ee),n.append(l,p,$,Z,A,I,U),t.replaceChildren(n),zn(n,e),{cleanup(){document.removeEventListener("click",Ee),t.replaceChildren()},rerender(){zn(n,e)}}}const I3=["data-theme"],j3=["title"],V3={class:"vs-topbar-txt"},z3=["title"],U3={class:"vs-topbar-txt"},H3=["title"],W3={class:"vs-topbar-txt vs-recent-name"},G3=["title"],q3=["title","disabled"],K3={class:"vs-quickopen-ph"},X3=["disabled","title","onClick","onContextmenu"],Y3={key:1,class:"vs-act-letter"},J3={class:"vs-left-main"},Q3={key:1,class:"fw-empty vs-git-empty"},Z3={class:"vs-right"},eT={class:"vs-editor-wrap"},tT={key:0,class:"vs-diffpane"},nT={key:1,class:"vs-empty"},sT={class:"vs-empty-title"},oT={class:"vs-empty-hint"},aT={class:"vs-empty-actions"},iT={key:2,class:"vs-loading-big"},lT={key:3,class:"vs-error"},rT={key:4,class:"vs-empty"},cT={class:"vs-empty-hint"},uT={class:"vs-status"},dT=["title"],fT={key:1,class:"vs-status-readonly"},pT=["title"],vT={class:"vs-status-seg"},hT=["disabled"],mT=["disabled"],gT={class:"vs-status-seg"},yT=["placeholder","onKeydown"],wT={class:"vs-quickopen-list"},bT=["title","onMousedown","onMouseenter"],_T={class:"vs-search-name"},kT={class:"vs-search-dir"},xT={key:0,class:"vs-search-note"},CT={key:1,class:"vs-search-note"},Tc=new Set,Dc=new Set,$T=ht({__name:"VSCodePane",setup(t){const e=Bl(gi)??fr(),n=e.state,l=e.ready,c=B(()=>n.projectDir?Wt(n.projectDir)?fl(n.projectDir):n.projectDir:y("vsNoProject")),u=e.rootKey,v=()=>e.init(),d=()=>e.persist(),p=f=>e.rememberProject(f),w=f=>e.fileViewOf(f),b=(f,_)=>e.rememberFileView(f,_),$=f=>e.stashOpenBuffers(f),L=()=>e.takeStashedBuffers(),M=`vscode:${e.slot}`,A=m(null),I=sr(A),U=B(()=>({fontSize:`${Ue.fontSize??13}px`,"--vs-fs-scale":String((Ue.fontSize??13)/13)})),C=gt({}),Z=gt(new Set),G=gt({}),F=gt({}),de=m(!1),j=m(!1),he=B(()=>{const f=n.projectDir;if(!f)return null;if(Wt(f))return Wa(f)||null;const _=f.replace(/[\\/]+$/,""),Y=Math.max(_.lastIndexOf("/"),_.lastIndexOf("\\"));if(Y<=0)return null;const Oe=_.slice(0,Y);return/^[A-Za-z]:$/.test(Oe)?null:Oe}),Ee=m(!1),ve=m(null),ne=m(""),ie=m(null),Se="dsh-file-workbench.vscode.activeView";function Ve(){try{return localStorage.getItem(Se)??"files"}catch{return"files"}}const we=m(Ve()),Ne=m(!1);function W(f){we.value=f;try{localStorage.setItem(Se,f)}catch{}}Qe(()=>n.projectDir,f=>{!f&&we.value!=="files"&&(we.value="files")});const J=m("");Qe(()=>n.projectDir,async f=>{if(J.value="",!!f)try{const _=await Wo(f);if(_.inRepo&&_.repo)J.value=_.branch||"HEAD";else{const Y=await ps(f);Y.inRepo&&Y.svnAvailable&&(J.value=Y.revision?`r${Y.revision}`:"svn")}}catch{}},{immediate:!0});function z(f,_){n.projectDir&&os(Ys(f,n.projectDir),{line:_})}const ee=gt({line:1,col:1});let ge=null;function je(f){return f.split(/[\\/]/).filter(Boolean).pop()??f}function Ke(f){const _=Math.max(f.lastIndexOf("/"),f.lastIndexOf("\\"));if(_<0)return"";const Y=_===0?f.slice(0,1):f.slice(0,_);return/^[A-Za-z]:$/.test(Y)?`${Y}${f[_]}`:Y}function Ze(f){return Wt(f)?Wa(f)||f:Ke(f)||f}function ye(f,_){if(!f)return!1;const Y=f.replace(/[\\/]+$/,"").toLowerCase(),Oe=_.replace(/[\\/]+$/,"").toLowerCase();return Oe===Y||Oe.startsWith(`${Y}\\`)||Oe.startsWith(`${Y}/`)}const be="vs-diff://",Ye=B(()=>{const f=n.openTabs.map(_=>({path:_,dirty:C[_]?.dirty??!1,conflict:C[_]?.conflict??!1}));return tn.value&&f.push({path:be+tn.value.title,dirty:!1,icon:"fileOut"}),f}),st=B(()=>tn.value?be+tn.value.title:n.activeTab);function pe(f){return f.startsWith(be)}const ke=B(()=>n.activeTab?C[n.activeTab]:void 0),qe=B(()=>ke.value?.content??""),ce=B(()=>n.activeTab?F[n.activeTab]??0:0),Ie=B(()=>n.activeTab?Z.has(n.activeTab):!1),rt=B(()=>n.activeTab?G[n.activeTab]:void 0),yt=B(()=>{const f=n.activeTab;return!f||!n.projectDir?!0:ye(n.projectDir,f)?!1:!Ue.allowOutsideRoot}),ut=B(()=>ke.value?.conflict===!0),it=B(()=>n.activeTab?h8(n.activeTab):"Plain Text"),Le=B(()=>w(n.activeTab)),H=[{encoding:"utf8",hasBom:!1,label:"UTF-8"},{encoding:"utf8",hasBom:!0,label:"UTF-8 with BOM"},{encoding:"utf16le",hasBom:!0,label:"UTF-16 LE"},{encoding:"utf16be",hasBom:!0,label:"UTF-16 BE"},{encoding:"gb18030",hasBom:!1,label:"GB18030"},{encoding:"big5",hasBom:!1,label:"Big5"},{encoding:"latin1",hasBom:!1,label:"Latin-1"}],N={utf8:"UTF-8",utf16le:"UTF-16 LE",utf16be:"UTF-16 BE",gb18030:"GB18030",big5:"Big5",latin1:"Latin-1",binary:"Binary"},Q=B(()=>(ke.value?.eol??"lf").toUpperCase()),Te=B(()=>{const f=ke.value;if(!f)return"UTF-8";const _=N[f.encoding],Y=f.encoding==="utf8"||f.encoding==="utf16le"||f.encoding==="utf16be";return f.hasBom&&Y?`${_} BOM`:_}),{cmOpen:O,cmX:T,cmY:K,openMenuAt:S}=pn();function q(f){const _=f.currentTarget?.getBoundingClientRect();S(_?.left??0,_?.top??0)}const De=B(()=>{const f=ke.value;return H.map(_=>({label:_.label,checked:!!f&&f.encoding===_.encoding&&f.hasBom===_.hasBom,disabled:!f||f.binary,onClick:()=>void Je(_.encoding,_.hasBom)}))}),{cmOpen:re,cmX:ct,cmY:wt,openMenuAt:Ot}=pn();function Mn(f){const _=f.currentTarget?.getBoundingClientRect();Ot(_?.left??0,_?.top??0)}const Gt=B(()=>{const f=ke.value,_=(Y,Oe)=>({label:Oe,checked:f?.eol===Y,disabled:!f||f.binary,onClick:()=>ze(Y)});return[_("lf","LF"),_("crlf","CRLF"),_("cr","CR")]});function ze(f){const _=n.activeTab,Y=_?C[_]:void 0;!_||!Y||Y.eol===f||(Y.eol=f,Y.dirty=!0)}async function Je(f,_){const Y=n.activeTab,Oe=Y?C[Y]:void 0;!Y||!Oe||Oe.encoding===f&&Oe.hasBom===_||Oe.dirty&&!await Mt({title:y("vsUnsavedTitle"),message:y("vsReopenLoseMsg")})||(await ys(Y,{encoding:f,hasBom:_,force:!0}),X("ok",y("vsEncodingSwitched",{enc:Te.value})))}const et=m(null),{cmOpen:lt,cmX:xn,cmY:Cn,openMenuAt:zt}=pn();function ot(){const f=et.value?.getBoundingClientRect();zt(f?.left??0,(f?.bottom??0)+2)}const ft=B(()=>!!ke.value&&!ke.value.binary&&!yt.value),Ct=B(()=>n.openTabs.filter(f=>C[f]?.dirty)),On=B(()=>[{label:y("vsOpenFolder"),icon:"folderOpen",onClick:Ht},{label:y("vsNewFile"),icon:"fileOut",disabled:!n.projectDir,onClick:()=>ie.value?.createFileAtRoot()},{label:y("vsNewFolder"),icon:"folder",disabled:!n.projectDir,onClick:()=>ie.value?.createFolderAtRoot()},{label:y("vsMenuRecent"),icon:"clock",disabled:n.recentProjects.length===0,children:[...n.recentProjects.map(f=>({label:je(f)||f,checked:f===n.projectDir,disabled:f===n.projectDir,onClick:()=>void As(f)})),{separator:!0},{label:y("vsRecentClearAll"),icon:"trash",disabled:n.recentProjects.length===0,onClick:()=>void gn()}]},{separator:!0},{label:y("menuCloneGit"),icon:"git",onClick:()=>void Tn("git")},{label:y("menuCloneSvn"),icon:"svn",onClick:()=>void Tn("svn")},{separator:!0},{label:y("vsNewWindow"),icon:"panellayout",onClick:gs},{label:y("vsFloatWindow"),icon:"float",disabled:!e.tabId,onClick:Qs},{label:y("vsNewTerminal"),icon:"terminal",onClick:ss},{separator:!0},{label:y("vsSave"),icon:"save",hint:"Ctrl+S",disabled:!ft.value,onClick:()=>void xi()},{label:y("vsSaveAs"),icon:"save",hint:"Ctrl+Shift+S",disabled:!ft.value,onClick:()=>Ci()},{label:y("vsSaveAll"),disabled:Ct.value.length===0,onClick:()=>void br()},{label:y("vsMenuLocalDiff"),icon:"fileOut",disabled:!(ke.value?.dirty&&!ke.value.binary),onClick:()=>void wi()}]),$n=m(null),{cmOpen:Jn,cmX:mn,cmY:Sn,openMenuAt:Xs}=pn(),Ts=B(()=>{const f=n.projectDir;if(!f)return y("vsNoProject");const _=je(f);return _||(Wt(f)?fl(f):f)}),En=B(()=>n.projectDir?`${c.value} · ${y("vsRecentProjects")}`:y("vsRecentProjects")),cn=B(()=>[{label:y("vsOpenFolder"),icon:"folderOpen",onClick:Ht},{separator:!0},...n.recentProjects.map(f=>({label:je(f)||f,checked:f===n.projectDir,disabled:f===n.projectDir,trailing:{icon:"close",title:y("vsRecentForgetTitle"),onClick:()=>void Gn(f)},onClick:()=>void As(f)})),{separator:!0},{label:y("vsRecentClearAll"),icon:"trash",disabled:n.recentProjects.length===0,onClick:()=>void gn()}]);function Ln(){const f=$n.value?.getBoundingClientRect();Xs(f?.left??0,(f?.bottom??0)+2)}async function Gn(f){const _=je(f)||f;await Mt({title:y("vsRecentForgetTitle"),message:y("vsRecentForgetConfirm",{name:_})})&&(e.forgetProject(f),X("ok",y("vsRecentForgot",{name:_})))}function Tn(f){const Y=he.value??n.projectDir??"";cr({kind:f,dir:Y,key:u,onDone:({path:Oe})=>{As(Oe)}})}async function gn(){if(n.recentProjects.length===0)return;await Mt({title:y("vsRecentClearAllTitle"),message:y("vsRecentClearAllConfirm")})&&(e.clearRecentProjects(),X("ok",y("vsRecentCleared")))}async function yn(f){Dn(f),X("info",y("vsProjectGone"))}async function Qn(f){const _=n.projectDir===f&&Ct.value.length>0;await Mt({title:y(_?"vsUnsavedTitle":"vsRemoveProjectTitle"),message:_?y("vsSwitchLoseMsg",{n:String(Ct.value.length)}):y("vsRemoveProjectConfirm",{name:je(f)||f})})&&(Dn(f),X("ok",y("vsProjectRemoved")))}function Dn(f){e.forgetProject(f),n.projectDir===f&&(ia(),n.projectDir=null,d())}const D=50,me=3e4,Be=m(null),He=m(""),Pe=m(!1),Ge=m(0),Et=m([]),$t=m(""),wn=m(0),Bn=m(!1),Fn=m(!1);function Ys(f,_){const Y=_.includes("\\")?"\\":"/";return`${_.replace(/[\\/]+$/,"")}${Y}${f.split("/").join(Y)}`}function So(f,_){const Y=f.lastIndexOf("/");if(f.slice(Y+1).includes(_))return 0;if(f.includes(_))return 1;let Oe=0;for(const pt of _){if(Oe=f.indexOf(pt,Oe),Oe<0)return null;Oe+=1}return 2}const un=B(()=>{const f=n.projectDir;if(!f)return[];const _=Et.value,Y=vt=>{const nn=vt.lastIndexOf("/");return{abs:Ys(vt,f),name:nn<0?vt:vt.slice(nn+1),dir:nn<0?"":vt.slice(0,nn)}},Oe=He.value.trim().toLowerCase();if(!Oe)return _.slice(0,D).map(Y);const pt=[];for(const vt of _){const nn=So(vt.toLowerCase(),Oe);nn!==null&&pt.push({rel:vt,score:nn})}return pt.sort((vt,nn)=>vt.score-nn.score||vt.rel.length-nn.rel.length||(vt.rel<nn.rel?-1:1)),pt.slice(0,D).map(vt=>Y(vt.rel))});async function Ds(){const f=n.projectDir;if(!(!f||Bn.value)&&!($t.value===f&&Date.now()-wn.value<me)){Bn.value=!0;try{const _=await ap(f,u);Et.value=_.files,Fn.value=_.truncated,$t.value=f,wn.value=Date.now()}catch{Et.value=[],$t.value=""}finally{Bn.value=!1}}}function Fs(){n.projectDir&&(Pe.value=!0,Ge.value=0,Ds(),Dt(()=>Be.value?.focus()))}function Zn(){Ge.value=0}function es(){Pe.value=!1,He.value=""}function Rs(f){const _=un.value.length;_!==0&&(Pe.value=!0,Ge.value=(Ge.value+f+_)%_)}function Js(f){const _=un.value[f??Ge.value];_&&(Pe.value=!1,He.value="",Be.value?.blur(),os(_.abs))}const Rn=m(null),qn=new Set,ts=new Set,Ns=new Set;Qe(()=>n.projectDir,f=>qn.forEach(_=>_(f))),Qe(I,f=>ts.forEach(_=>_(f))),Qe(()=>n.activeTab,f=>Ns.forEach(_=>_(f)));function en(){return n.activeTab?PS(e.slot)??null:null}const Kt=new Set,ns=new Set;let In=null,dn=null;const g={apiVersion:qa,get projectDir(){return n.projectDir},get theme(){return I.value},get activeFile(){return n.activeTab},onProjectChange(f){return qn.add(f),f(n.projectDir),()=>qn.delete(f)},onThemeChange(f){return ts.add(f),f(I.value),()=>ts.delete(f)},onDidChangeActiveFile(f){return Ns.add(f),f(n.activeTab),()=>Ns.delete(f)},openFile:(f,_)=>os(f,_),listOpenFiles:()=>[...n.openTabs],openDiff:(f,_)=>Zs({title:f,lines:_}),toast:(f,_)=>X(f,_),editor:{get view(){return en()},getText:()=>en()?.state.doc.toString()??"",isDirty:()=>n.activeTab?C[n.activeTab]?.dirty??!1:!1,onDidChangeTextDocument(f){const _=(Oe,pt)=>f({text:Oe,changes:pt});Kt.add(_),In||(In=AS(e.slot,(Oe,pt)=>Kt.forEach(vt=>vt(Oe,pt))));const Y=en();return Y&&f({text:Y.state.doc.toString(),changes:null}),()=>{Kt.delete(_),Kt.size===0&&In&&(In(),In=null)}},getSelection:()=>en()?.state.selection??null,onDidChangeSelection(f){const _=Oe=>f(Oe);ns.add(_),dn||(dn=MS(e.slot,Oe=>ns.forEach(pt=>pt(Oe))));const Y=en();return Y&&f(Y.state.selection),()=>{ns.delete(_),ns.size===0&&dn&&(dn(),dn=null)}},applyEdit(f){const _=en();return!_||!f.length?!1:(_.dispatch({changes:f}),!0)},setDecorations(f){en()&&Rn.value?.setExtension(f)},createDecorations(f){return Rn.value?.setDecorationsSpec(f.items),{extension:[],update(_){Rn.value?.setDecorationsSpec(_)}}}}},{cmOpen:k,cmX:xe,cmY:fe,openMenuAt:Me}=pn(),R=B(()=>[{label:y("vsFormat"),icon:"code",disabled:!n.activeTab||yt.value||ke.value?.binary===!0,onClick:Xt},{separator:!0},{label:y("vsSave"),icon:"save",hint:"Ctrl+S",disabled:!ft.value||de.value,onClick:()=>void xi()},{label:y("vsSaveAs"),icon:"save",disabled:!ft.value,onClick:()=>Ci()},{label:y("vsSaveAll"),disabled:Ct.value.length===0,onClick:()=>void br()},{separator:!0},{label:y("vsMinimap"),checked:Ue.vsMinimap,onClick:()=>{Ue.vsMinimap=!Ue.vsMinimap,Hn()}},{separator:!0},{label:y("vsMultiCursorHint"),disabled:!0}]);function Re(f){Me(f.x,f.y)}function Xt(){if(!n.activeTab)return;Rn.value?.format()??!1?X("ok",y("vsFormatOk")):X("error",y("vsFormatFail",{msg:yt.value?y("vsReadonly"):""}))}function Ht(){j.value=!0}function gs(){d(),Zl({fresh:!0})||X("info",y("vsNewWindowLimit"))}function Qs(){e.tabId&&Fh(e.tabId)}function ss(){bh(n.projectDir??"")}async function Ps(){await e.init();const f=e.projectRequest.value;if(!f)return;if(e.projectRequest.value=null,Nh(),f.dir===n.projectDir){const Y=sc();Y&&await os(Y);return}await As(f.dir);const _=sc();_&&await os(_)}Qe(()=>e.projectRequest.value?.n,()=>void Ps());async function As(f){const _=f!==n.projectDir;if(!(_&&Ct.value.length>0&&!await Mt({title:y("vsUnsavedTitle"),message:y("vsSwitchLoseMsg",{n:String(Ct.value.length)})}))){n.projectDir=f,p(f),$t.value="",wn.value=0;try{await Vl(f,u)}catch{}_&&ia(),d()}}function ia(){for(const f of Object.keys(C))delete C[f];for(const f of Object.keys(G))delete G[f];for(const f of Object.keys(F))delete F[f];RS(e.slot),n.openTabs=[],n.activeTab=null}async function yi(){if(Tc.has(u))return;Tc.add(u);let f=!1;const _=n.projectDir;if(_){const vt=await Zi(_);if(vt&&!vt.isDir){const nn=Ze(_);nn&&nn!==_&&(n.projectDir=nn,n.openTabs.includes(_)||n.openTabs.push(_),n.activeTab=_,f=!0)}}const Y=[...n.openTabs];if(Y.length===0){f&&d();return}const Oe=await Promise.all(Y.map(async vt=>(await Zi(vt))?.isDir?vt:null)),pt=new Set(Oe.filter(vt=>!!vt));if(pt.size===0){f&&d();return}for(const vt of pt)delete C[vt],delete G[vt],delete F[vt];n.openTabs=n.openTabs.filter(vt=>!pt.has(vt)),n.activeTab&&pt.has(n.activeTab)&&(n.activeTab=n.openTabs[n.openTabs.length-1]??null),d()}async function os(f,_){tn.value=null,Ne.value=!1,n.openTabs.includes(f)||n.openTabs.push(f),n.activeTab=f,C[f]||await ys(f),_?.line&&(await Dt(),Rn.value?.revealLine(_.line)),d()}async function ys(f,_={}){if(!Z.has(f)&&!(C[f]?.dirty&&!_.force)){Z.add(f),delete G[f];try{const Y=await el(f,{encoding:_.encoding,hasBom:_.hasBom});C[f]={content:Y.content,dirty:!1,encoding:Y.encoding,hasBom:Y.hasBom,eol:Y.eol,mtime:Y.mtime,binary:Y.binary,conflict:!1},F[f]=(F[f]??0)+1}catch(Y){G[f]=Y instanceof Ws&&Y.status===413?y("vsTooLarge"):Y.message}finally{Z.delete(f)}}}function la(f){pe(f)||(tn.value=null,n.activeTab=f,!C[f]&&!G[f]&&ys(f),d())}const tn=m(null);function Zs(f){Ne.value=!1,tn.value=f}async function wi(){const f=n.activeTab,_=f?C[f]:void 0;if(!(!f||!_||_.binary))try{const Y=await el(f),Oe=g3(Y.content,_.content);Zs({title:`${je(f)} · ${y("vsLocalDiffTitle")}`,lines:Oe?Oe.lines:[y("vsLocalDiffTooBig")]})}catch(Y){X("error",Y.message)}}const bi=1e3,Ms=new Map;function Eo(f){if(!Ue.autoSave)return;const _=Ms.get(f);_&&clearTimeout(_),Ms.set(f,setTimeout(()=>{Ms.delete(f),C[f]?.dirty&&ws(f,{quiet:!0})},bi))}function To(f){const _=Ms.get(f);_&&clearTimeout(_),Ms.delete(f)}const ra=B(ed),ca=m(null),ua=B(()=>ra.value.find(f=>f.id===we.value)),da=B(()=>[{id:"files",title:y("vsLeftTabFiles"),icon:"folder"},{id:"search",title:y("vsLeftTabSearch"),icon:"search",disabled:!n.projectDir},{id:"git",title:y("vsLeftTabGit"),icon:"git",disabled:!n.projectDir},...ra.value.filter(f=>!f.when||f.when(g)).map(f=>({id:f.id,title:Zu(f.title),icon:f.icon}))]),E=B(()=>da.value.filter(f=>!n.activityBar.hidden.includes(f.id)));Qe(E,f=>{f.some(_=>_.id===we.value)||(we.value="files")},{immediate:!0});function x(f){n.activityBar.hidden.includes(f)||n.activityBar.hidden.push(f),we.value===f&&(we.value="files"),d()}function Ce(f){n.activityBar.hidden=n.activityBar.hidden.filter(_=>_!==f),d()}function nt(f){n.activityBar.hidden.includes(f)?Ce(f):x(f)}const At=m(!1),Tt=m(0),dt=m(0),V=m("bar"),at=m(null),fn=B(()=>({label:n.activityBar.position==="top"?y("vsActBarBottom"):y("vsActBarTop"),icon:"panellayout",onClick:()=>{n.activityBar.position=n.activityBar.position==="top"?"bottom":"top",d()}})),jn=B(()=>({label:n.sidebarSide==="left"?y("vsSideRight"):y("vsSideLeft"),icon:"float",onClick:()=>{n.sidebarSide=n.sidebarSide==="left"?"right":"left",d()}})),Os=B(()=>({label:Ne.value?y("vsUnfoldEditor"):y("vsFoldEditor"),icon:Ne.value?"chevronsRight":"chevronsLeft",onClick:()=>{Ne.value=!Ne.value}})),_i=B(()=>{if(V.value==="view"&&at.value){const f=at.value;return[{label:y("vsActHide",{name:f.title}),icon:"close",onClick:()=>x(f.id)},{separator:!0},Os.value,{separator:!0},fn.value,jn.value]}return[...da.value.map(f=>({label:f.title,icon:f.icon??"",checked:!n.activityBar.hidden.includes(f.id),onClick:()=>nt(f.id)})),{separator:!0},Os.value,{separator:!0},fn.value,jn.value]});function fa(f,_){const Y=_.currentTarget?.getBoundingClientRect();Tt.value=Y?.right??_.clientX,dt.value=Y?.bottom??_.clientY,V.value="view",at.value=f,At.value=!0}function Ld(f){Tt.value=f.clientX,dt.value=f.clientY,V.value="bar",at.value=null,At.value=!0}const yr=B(vi);function Bd(){return{path:n.activeTab,projectDir:n.projectDir}}const wr=m(null),{cmOpen:ki,cmX:Id,cmY:jd,openMenuAt:Vd}=pn();function zd(){const f=wr.value?.getBoundingClientRect();f&&Vd(f.left,f.top-4)}const Ud=B(()=>{n.activeTab,n.projectDir;const f=Bd();return[...yr.value,...Jo()].sort((Y,Oe)=>(Y.order??0)-(Oe.order??0)).map(Y=>({label:Y.text,disabled:!!Y.when&&!Y.when(f),onClick:()=>{try{fi(Y.commandId,f)}catch(Oe){X("error",Oe.message)}}}))}),Hd=B(()=>yr.value.length+Jo().length>0);$s(f=>{const _=ua.value,Y=ca.value;if(!_||!Y||_.when&&!_.when(g))return;const Oe=_.mount(Y,g);Ka(Y);const pt=new ResizeObserver(()=>Ka(Y));pt.observe(Y),f(()=>{if(pt.disconnect(),typeof Oe=="function")try{Oe()}catch{}Y.replaceChildren()})},{flush:"post"});function Wd(f){const _=n.activeTab?C[n.activeTab]:void 0;_&&(_.content=f,_.dirty=!0,n.activeTab&&Eo(n.activeTab))}function Gd(f,_){ee.line=f,ee.col=_}function qd(f){n.activeTab&&b(n.activeTab,f)}async function xi(){const f=n.activeTab;if(!f)return;const _=C[f];!_||!_.dirty||await ws(f)}async function ws(f,_={}){const Y=C[f];if(!f||!Y||Y.binary)return!1;de.value=!0;try{const Oe=await Xi(f,Y.content,{key:u,encoding:Y.encoding,hasBom:Y.hasBom,eol:Y.eol,expectedMtime:Y.mtime,force:_.force});return Y.dirty=!1,Y.conflict=!1,Y.mtime=Oe.mtime,_.quiet||X("ok",y("vsSaved")),!0}catch(Oe){return Oe instanceof Ws&&Oe.code==="mtime-conflict"?(de.value=!1,await Mt({title:y("vsConflictTitle"),message:y("vsConflictMsg",{name:je(f)})})?await ws(f,{..._,force:!0}):!1):(X("error",Oe.message),!1)}finally{de.value=!1}}async function br(){const f=Ct.value.slice();if(f.length===0){X("info",y("vsNoDirty"));return}let _=0;for(const Y of f)await ws(Y,{quiet:!0})&&_++;_===f.length&&X("ok",y("vsAllSaved",{n:String(_)}))}function Ci(){const f=n.activeTab,_=f?C[f]:void 0;!f||!_||_.binary||(ve.value=Ke(f)||n.projectDir,ne.value=je(f),Ee.value=!0)}async function Kd(f){const _=n.activeTab,Y=_?C[_]:void 0;if(!_||!Y||Y.binary||f===_)return;if(n.openTabs.includes(f)&&C[f]?.dirty){X("error",y("vsSaveAsBlockedDirty",{name:je(f)}));return}let Oe=!1;try{Oe=await Qi(f)}catch{return}if(!(Oe&&!await Mt({title:y("vsSaveAsTitle"),message:y("vsOverwriteMsg",{path:f})}))){de.value=!0;try{await Xi(f,Y.content,{key:u,encoding:Y.encoding,hasBom:Y.hasBom,eol:Y.eol}),X("ok",y("vsSavedAs",{path:je(f)})),delete C[_],delete G[_],delete F[_],delete C[f],delete G[f],delete F[f],n.openTabs=n.openTabs.filter(pt=>pt!==_&&pt!==f),await os(f)}catch(pt){X("error",pt.message)}finally{de.value=!1}}}async function Xd(f,_){const Y=C[f];if(!(!Y||Y.binary)&&_&&!(Math.abs(_.mtimeMs-Y.mtime)<1)){if(Y.dirty){Y.conflict||(Y.conflict=!0);return}await ys(f,{force:!0}),X("info",y("vsReloadedExternal",{name:je(f)}))}}function Yd(){ge=rh((f,_)=>{n.openTabs.includes(f)&&Xd(f,_)}),Qe(()=>n.openTabs.slice(),f=>ih(M,f),{immediate:!0})}async function Jd(){const f=n.activeTab,_=f?C[f]:void 0;!f||!_||!await Mt({title:y("vsConflictTitle"),message:y("vsConflictMsgReload",{name:je(f)})})||await ys(f,{force:!0})}function Qd(){const f=n.activeTab;if(f){if(Wt(f)){X("error",y("remoteNoExternal"));return}Qc(f)}}async function pa(f){if(pe(f)){tn.value=null;return}if(C[f]?.dirty){const Y=await Fr({title:y("vsUnsavedTitle"),message:y("vsUnsavedMsg"),choices:[{id:"save",text:y("vsCloseSave"),primary:!0},{id:"discard",text:y("vsCloseDiscard")},{id:"cancel",text:y("cancel")}]});if(Y==="save"){if(!await ws(f,{quiet:!0}))return}else if(Y!=="discard")return}delete C[f],delete G[f],delete F[f],To(f),Vi(e.slot,f),n.openTabs=n.openTabs.filter(Y=>Y!==f),n.activeTab===f&&(n.activeTab=n.openTabs[n.openTabs.length-1]??null),d()}async function Zd(f){await ws(f,{quiet:!0})&&await pa(f)}async function $i(f){const _=f.filter(Oe=>C[Oe]?.dirty),Y=Oe=>{delete C[Oe],delete G[Oe],delete F[Oe],To(Oe),Vi(e.slot,Oe),n.openTabs=n.openTabs.filter(pt=>pt!==Oe)};if(_.length>1){const Oe=await Fr({title:y("vsUnsavedTitle"),message:y("vsCloseManyMsg",{n:String(_.length)}),choices:[{id:"save",text:y("vsCloseSaveAll"),primary:!0},{id:"discard",text:y("vsCloseDiscardAll")},{id:"cancel",text:y("cancel")}]});if(Oe!=="save"&&Oe!=="discard")return;const pt=new Set;if(Oe==="save")for(const vt of _)await ws(vt,{quiet:!0})||pt.add(vt);for(const vt of f)Oe==="save"&&pt.has(vt)||Y(vt);n.activeTab&&!n.openTabs.includes(n.activeTab)&&(n.activeTab=n.openTabs[n.openTabs.length-1]??null),d();return}for(const Oe of f)await pa(Oe)}async function ef(f){pe(f)||await $i(n.openTabs.filter(_=>_!==f))}async function tf(f){if(pe(f))return;const _=n.openTabs.indexOf(f);_<0||await $i(n.openTabs.slice(_+1))}async function nf(){await $i([...n.openTabs])}function sf(f){delete C[f],delete G[f],delete F[f],To(f),Vi(e.slot,f),n.openTabs=n.openTabs.filter(_=>_!==f),n.activeTab===f&&(n.activeTab=n.openTabs[n.openTabs.length-1]??null),d()}function of(f,_){const Y=C[f];Y&&(C[_]=Y,delete C[f]);const Oe=_d(e.slot),pt=Oe.get(f);pt&&(Oe.delete(f),Oe.set(_,pt)),F[f]!==void 0&&(F[_]=F[f],delete F[f]),delete G[f],G[_]&&delete G[_],n.openTabs=n.openTabs.map(vt=>vt===f?_:vt),n.activeTab===f&&(n.activeTab=_),d()}const Do=m(!1),af=B(()=>({width:`calc(${Math.round(n.split*1e3)/10}% - 3px)`}));function Si(f){if(!Do.value||!A.value)return;const _=A.value.getBoundingClientRect();if(_.width<=0)return;let Y=(f.clientX-_.left)/_.width;n.sidebarSide==="right"&&(Y=1-Y),n.split=Math.min(.85,Math.max(.15,Y))}function Ei(){Do.value&&(Do.value=!1,document.removeEventListener("mousemove",Si),document.removeEventListener("mouseup",Ei),document.body.style.userSelect="",document.body.style.cursor="",d())}function lf(){Do.value=!0,document.addEventListener("mousemove",Si),document.addEventListener("mouseup",Ei),document.body.style.userSelect="none",document.body.style.cursor="col-resize"}function rf(f){const _=f?.tagName;return _==="INPUT"||_==="TEXTAREA"||_==="SELECT"}function _r(f){if(!(f.ctrlKey||f.metaKey))return;const _=f.key.toLowerCase();if(_==="p"){if(rf(f.target))return;f.preventDefault(),Fs();return}if(_!=="s"){if(_==="w"){f.preventDefault(),tn.value?tn.value=null:n.activeTab&&pa(n.activeTab);return}if(_==="pagedown"||_==="pageup"){f.preventDefault(),cf(_==="pagedown"?1:-1);return}return}f.preventDefault(),f.shiftKey?Ci():xi()}function cf(f){const _=n.openTabs;if(_.length<2)return;const Y=n.activeTab?_.indexOf(n.activeTab):-1,Oe=((Y<0?0:Y+f)+_.length)%_.length;la(_[Oe])}function kr(f){Ct.value.length>0&&(f.preventDefault(),f.returnValue="")}const va=m(null),xr=m(!1);let ha=null;function Cr(){const f=va.value;if(!f)return;f.classList.remove("compact");const Y=f.scrollWidth-f.clientWidth>1;f.classList.toggle("compact",Y),xr.value=Y}const uf=560,df=680;let ma=null;function $r(){const f=A.value?.clientWidth??0;f<=uf&&n.projectDir?Ne.value=!0:f>=df&&(Ne.value=!1)}return ln(async()=>{R3(),va.value&&(ha=new ResizeObserver(()=>Cr()),ha.observe(va.value),Cr()),A.value&&(ma=new ResizeObserver(()=>$r()),ma.observe(A.value),$r()),await v();const f=L();for(const[Oe,pt]of Object.entries(f))n.openTabs.includes(Oe)&&(C[Oe]=pt);await yi(),n.activeTab&&!C[n.activeTab]&&ys(n.activeTab),l.value=!0,await Dt(),await ie.value?.rebuild(),window.addEventListener("keydown",_r),window.addEventListener("beforeunload",kr),window.addEventListener("beforeunload",d),Yd();const _=`${u}:${n.projectDir??""}`;n.projectDir&&!Dc.has(_)&&(Dc.add(_),Ds());const Y=Rh();Y&&e.requestOpenProject(Y),e.projectRequest.value&&await Ps()}),Pt(()=>{ha?.disconnect(),ha=null,ma?.disconnect(),ma=null,window.removeEventListener("keydown",_r),window.removeEventListener("beforeunload",kr),window.removeEventListener("beforeunload",d),document.removeEventListener("mousemove",Si),document.removeEventListener("mouseup",Ei),ge?.(),ge=null,lh(M),$({...C}),d()}),(f,_)=>(i(),r("div",{ref_key:"rootRef",ref:A,class:"vs-pane","data-theme":s(I),style:_t(U.value)},[o("div",{ref_key:"topbarRef",ref:va,class:te(["vs-topbar",{compact:xr.value}])},[o("span",{class:"vs-brand",title:s(y)("vsBrand")},[h(oe,{class:"vs-topbar-ico",name:"code",size:14}),o("span",V3,a(s(y)("vsBrand")),1)],8,j3),_[19]||(_[19]=o("span",{class:"vs-sep"},null,-1)),o("button",{ref_key:"fileBtnRef",ref:et,class:te(["vs-btn vs-btn-menu",{open:s(lt)}]),title:s(y)("vsMenuFile"),onClick:ot},[h(oe,{class:"vs-topbar-ico",name:"folder",size:13}),o("span",U3,a(s(y)("vsMenuFile")),1),_[16]||(_[16]=o("span",{class:"vs-caret"},null,-1))],10,z3),_[20]||(_[20]=o("span",{class:"vs-sep"},null,-1)),o("button",{ref_key:"recentBtnRef",ref:$n,class:te(["vs-btn vs-btn-menu vs-recent-btn",{open:s(Jn)}]),title:En.value,onClick:Ln},[h(oe,{class:"vs-topbar-ico",name:"clock",size:13}),o("span",W3,a(Ts.value),1),_[17]||(_[17]=o("span",{class:"vs-caret"},null,-1))],10,H3),_[21]||(_[21]=o("span",{class:"vs-sep"},null,-1)),o("span",{class:"vs-project-path",title:s(n).projectDir??s(y)("vsNoProject")},a(c.value),9,G3),_[22]||(_[22]=o("span",{class:"vs-spacer"},null,-1)),o("button",{class:"vs-quickopen-trigger",title:s(y)("vsQuickOpenPlaceholder"),disabled:!s(n).projectDir,onClick:Fs},[h(oe,{name:"search",size:13}),o("span",K3,a(Bn.value?s(y)("vsSearchIndexing"):s(y)("vsQuickOpenPlaceholder")),1),_[18]||(_[18]=o("span",{class:"vs-quickopen-kbd"},"Ctrl+P",-1))],8,q3)],2),o("div",{class:te(["vs-body",{"right-folded":Ne.value,"side-right":s(n).sidebarSide==="right"}])},[o("div",{class:"vs-left",style:_t(af.value)},[o("div",{class:te(["vs-activity",{btm:s(n).activityBar.position==="bottom"}]),onContextmenu:_e(Ld,["prevent"])},[(i(!0),r(ae,null,Ae(E.value,Y=>(i(),r("button",{key:Y.id,class:te(["vs-act-btn",{active:we.value===Y.id}]),disabled:Y.disabled,title:Y.title,onClick:Oe=>W(Y.id),onContextmenu:_e(Oe=>fa(Y,Oe),["prevent","stop"])},[s(Oo)(Y.icon??"")?(i(),Xe(oe,{key:0,name:Y.icon??"",size:17},null,8,["name"])):(i(),r("span",Y3,a(Y.title.slice(0,1)),1))],42,X3))),128))],34),o("div",J3,[kt(h(QS,{ref_key:"treeRef",ref:ie,root:s(n).projectDir,"active-path":s(n).activeTab,onOpenFile:os,onFileRemoved:sf,onFileRenamed:of,onProjectMissing:yn,onRemoveProject:Qn},null,8,["root","active-path"]),[[mo,we.value==="files"]]),we.value==="search"?(i(),Xe(m3,{key:0,"project-dir":s(n).projectDir||"",onOpen:z},null,8,["project-dir"])):P("",!0),kt(h(f6,{class:"vs-git-view",onOpenDiff:Zs},null,512),[[mo,we.value==="git"]]),we.value==="git"&&!J.value?(i(),r("div",Q3,a(s(y)("vsGitNoRepo")),1)):P("",!0),ua.value?(i(),r("div",{key:2,ref_key:"extHostRef",ref:ca,class:"vs-ext-view"},null,512)):P("",!0)])],4),o("div",{class:te(["vs-split",{dragging:Do.value}]),role:"separator","aria-orientation":"vertical",onMousedown:_e(lf,["prevent"])},null,34),o("div",Z3,[h(c8,{tabs:Ye.value,active:st.value,onSelect:la,onClose:pa,onSave:ws,onCloseSave:Zd,onCloseOthers:ef,onCloseRight:tf,onCloseAll:nf},null,8,["tabs","active"]),o("div",eT,[tn.value?(i(),r("div",tT,[h(Uo,{lines:tn.value.lines,empty:s(y)("gitDiffEmpty")},null,8,["lines","empty"])])):s(n).activeTab?Ie.value?(i(),r("div",iT,[_[23]||(_[23]=o("span",{class:"vs-loading-spin","aria-hidden":"true"},null,-1)),o("span",null,a(s(y)("vsLoading")),1)])):rt.value?(i(),r("div",lT,a(rt.value),1)):ke.value?.binary?(i(),r("div",rT,[o("div",cT,a(s(y)("vsBinaryHint")),1),o("button",{class:"vs-btn",onClick:Qd},a(s(y)("vsOpenExternal")),1)])):(i(),Xe(z8,{key:5,ref_key:"editorRef",ref:Rn,path:s(n).activeTab,slot:s(e).slot,"initial-content":qe.value,"initial-view":Le.value,"doc-rev":ce.value,readonly:yt.value,dark:s(I)==="dark",onChange:Wd,onCursor:Gd,onView:qd,onContextmenu:Re},null,8,["path","slot","initial-content","initial-view","doc-rev","readonly","dark"])):(i(),r("div",nT,[h(oe,{class:"vs-empty-ico",name:"code",size:44}),o("div",sT,a(s(y)("vsEmptyTitle")),1),o("div",oT,a(s(y)("vsEmptyHint")),1),o("div",aT,[o("button",{class:"vs-btn",onClick:Ht},a(s(y)("vsOpenFolder")),1),o("button",{class:"vs-btn",onClick:_[0]||(_[0]=Y=>Tn("git"))},a(s(y)("menuCloneGit")),1)])]))]),o("div",uT,[J.value?(i(),r("button",{key:0,class:"vs-status-seg vs-status-btn",title:s(n).projectDir??"",onClick:_[1]||(_[1]=Y=>W("git"))},[h(oe,{name:"git",size:11}),ue(" "+a(J.value),1)],8,dT)):P("",!0),yt.value?(i(),r("span",fT,a(s(y)("vsReadonly")),1)):P("",!0),ut.value?(i(),r("button",{key:2,class:"vs-status-conflict",onClick:Jd},a(s(y)("vsConflictBadge")),1)):P("",!0),Hd.value?(i(),r("button",{key:3,ref_key:"extMenuBtnRef",ref:wr,class:te(["vs-status-seg vs-status-btn vs-status-ext",{open:s(ki)}]),title:s(y)("vsMenuExtensions"),onClick:zd},[h(oe,{name:"puzzle",size:11}),ue(" "+a(s(y)("vsMenuExtensions")),1)],10,pT)):P("",!0),_[24]||(_[24]=o("span",{class:"vs-status-spacer"},null,-1)),o("span",vT,"Ln "+a(ee.line)+", Col "+a(ee.col),1),o("button",{class:"vs-status-seg vs-status-btn",disabled:!s(n).activeTab,onClick:q},a(Te.value),9,hT),o("button",{class:"vs-status-seg vs-status-btn",disabled:!s(n).activeTab,onClick:Mn},a(Q.value),9,mT),o("span",gT,a(it.value),1)])])],2),s(lt)?(i(),Xe(Qt,{key:0,items:On.value,x:s(xn),y:s(Cn),onClose:_[2]||(_[2]=Y=>lt.value=!1)},null,8,["items","x","y"])):P("",!0),s(ki)?(i(),Xe(Qt,{key:1,items:Ud.value,x:s(Id),y:s(jd),placement:"top",onClose:_[3]||(_[3]=Y=>ki.value=!1)},null,8,["items","x","y"])):P("",!0),s(Jn)?(i(),Xe(Qt,{key:2,items:cn.value,x:s(mn),y:s(Sn),onClose:_[4]||(_[4]=Y=>Jn.value=!1)},null,8,["items","x","y"])):P("",!0),Pe.value?(i(),r("div",{key:3,class:"vs-quickopen-backdrop",onMousedown:_e(es,["self"])},[o("div",{class:"vs-quickopen",onMousedown:_[9]||(_[9]=_e(()=>{},["stop"]))},[kt(o("input",{ref_key:"searchInputRef",ref:Be,"onUpdate:modelValue":_[5]||(_[5]=Y=>He.value=Y),class:"vs-quickopen-input",placeholder:Bn.value?s(y)("vsSearchIndexing"):s(y)("vsQuickOpenPlaceholder"),onInput:Zn,onKeydown:[_[6]||(_[6]=bt(_e(Y=>Rs(1),["prevent"]),["down"])),_[7]||(_[7]=bt(_e(Y=>Rs(-1),["prevent"]),["up"])),_[8]||(_[8]=bt(_e(Y=>Js(),["prevent"]),["enter"])),bt(_e(es,["prevent"]),["esc"])]},null,40,yT),[[Lt,He.value]]),o("div",wT,[un.value.length>0?(i(),r(ae,{key:0},[(i(!0),r(ae,null,Ae(un.value,(Y,Oe)=>(i(),r("div",{key:Y.abs,class:te(["vs-search-row",{active:Oe===Ge.value}]),title:Y.abs,onMousedown:_e(pt=>Js(Oe),["prevent"]),onMouseenter:pt=>Ge.value=Oe},[o("span",_T,a(Y.name),1),o("span",kT,a(Y.dir),1)],42,bT))),128)),Fn.value?(i(),r("div",xT,a(s(y)("vsSearchTruncated")),1)):P("",!0)],64)):He.value.trim()&&!Bn.value?(i(),r("div",CT,a(s(y)("vsSearchNoResult")),1)):P("",!0)])],32)],32)):P("",!0),s(O)?(i(),Xe(Qt,{key:4,items:De.value,x:s(T),y:s(K),onClose:_[10]||(_[10]=Y=>O.value=!1)},null,8,["items","x","y"])):P("",!0),s(re)?(i(),Xe(Qt,{key:5,items:Gt.value,x:s(ct),y:s(wt),onClose:_[11]||(_[11]=Y=>re.value=!1)},null,8,["items","x","y"])):P("",!0),s(k)?(i(),Xe(Qt,{key:6,items:R.value,x:s(xe),y:s(fe),onClose:_[12]||(_[12]=Y=>k.value=!1)},null,8,["items","x","y"])):P("",!0),At.value?(i(),Xe(Qt,{key:7,items:_i.value,x:Tt.value,y:dt.value,onClose:_[13]||(_[13]=Y=>At.value=!1)},null,8,["items","x","y"])):P("",!0),h(zc),h(ei,{modelValue:j.value,"onUpdate:modelValue":_[14]||(_[14]=Y=>j.value=Y),"initial-dir":he.value,onConfirm:As},null,8,["modelValue","initial-dir"]),h(ei,{modelValue:Ee.value,"onUpdate:modelValue":_[15]||(_[15]=Y=>Ee.value=Y),mode:"file","initial-dir":ve.value,"initial-name":ne.value,onConfirm:Kd},null,8,["modelValue","initial-dir","initial-name"])],12,I3))}}),ST=xt($T,[["__scopeId","data-v-8747da63"]]),ET={class:"fw-term-headicon"},TT={class:"fw-term-tag"},DT=["title"],FT={class:"fw-term-note"},RT=["title"],NT=["title"],PT={key:0,class:"fw-term-searchbar"},AT=["placeholder","onKeydown"],MT=["title"],OT=["title"],LT=["title"],BT=["title"],IT={class:"fw-term-footer"},jT=["title","disabled"],VT=["title","disabled"],zT=["title"],UT=["title"],HT=["title"],WT={class:"fw-term-shellhint"},GT=["title"],qT=["title"],Gi=320,qi=240,Fc=10,Rc=24,KT=ht({__name:"TerminalWindow",props:{tab:{}},emits:["close"],setup(t,{emit:e}){const n=t,l=e,{t:c}=Bt(),u=m(680),v=m(460),d=m(0),p=m(0),w=m(null);let b=!1;const $=m(null),L=B(()=>{const ze=n.tab.cwd?.trim();return ze?ze.replace(/[\\/]$/,"").split(/[\\/]/).pop()??"":""}),M=B(()=>n.tab.shell==="powershell"?"PS":"cmd"),A=B(()=>!!n.tab.ssh&&!n.tab.sshDegraded),I=B(()=>!!n.tab.ssh),U=B(()=>{const ze=n.tab.ssh;return ze?ze.remote&&ze.remote!=="/"?`${ze.label} · ${ze.remote}`:ze.label:""}),C=B(()=>A.value?U.value:L.value||n.tab.cwd||c("terminalTitle")),Z=B(()=>A.value?U.value:`${M.value} · ${L.value||n.tab.cwd||c("terminal")}`);function G(ze){return Math.min(Math.max(0,ze),Math.max(0,window.innerWidth-u.value))}function F(ze){return Math.min(Math.max(0,ze),Math.max(0,window.innerHeight-v.value))}function de(ze){u.value=Math.max(Gi,ze.w),v.value=Math.max(qi,ze.h),d.value=G(ze.x),p.value=F(ze.y)}function j(){hv(n.tab.id,{x:d.value,y:p.value,w:u.value,h:v.value})}const he=B(()=>({position:"fixed",left:`${d.value}px`,top:`${p.value}px`,width:`${u.value}px`,height:`${v.value}px`}));let Ee=0;Qe([d,p,u,v],()=>{b&&(window.clearTimeout(Ee),Ee=window.setTimeout(j,250))});let ve=!1,ne=0,ie=0;function Se(ze){ze.target.closest(".fw-term-headclose, .fw-term-headmin")||(b=!0,ve=!0,ne=ze.clientX-d.value,ie=ze.clientY-p.value,document.body.style.userSelect="none",document.addEventListener("mousemove",Ve),document.addEventListener("mouseup",we))}function Ve(ze){if(!ve)return;const Je=w.value,et=Je?.offsetWidth??u.value,lt=Je?.offsetHeight??v.value;d.value=Math.min(Math.max(0,ze.clientX-ne),window.innerWidth-et),p.value=Math.min(Math.max(0,ze.clientY-ie),Math.max(0,window.innerHeight-lt))}function we(){ve&&(ve=!1,document.body.style.userSelect="",document.removeEventListener("mousemove",Ve),document.removeEventListener("mouseup",we),j())}Pt(we);let Ne=!1,W=0,J=0,z=0,ee=0;function ge(ze){b=!0,Ne=!0,W=ze.clientX,J=ze.clientY,z=u.value,ee=v.value,document.body.style.userSelect="none",document.addEventListener("mousemove",je),document.addEventListener("mouseup",Ke)}function je(ze){if(!Ne)return;const Je=Math.max(Gi,window.innerWidth-d.value-4),et=Math.max(qi,window.innerHeight-p.value-4);u.value=Math.min(Math.max(Gi,z+(ze.clientX-W)),Je),v.value=Math.min(Math.max(qi,ee+(ze.clientY-J)),et)}function Ke(){Ne&&(Ne=!1,document.body.style.userSelect="",document.removeEventListener("mousemove",je),document.removeEventListener("mouseup",Ke),j())}Pt(Ke);function Ze(){b=!0,u.value=Math.min(680,window.innerWidth-12),v.value=Math.min(460,window.innerHeight-12),j()}let ye=null,be=null,Ye=null,st=null,pe=null;function ke(ze){const Je=ze??$.value,et=getComputedStyle(Je||document.documentElement),lt=(xn,Cn)=>(et.getPropertyValue(xn)||Cn).trim();return{background:lt("--base","#1e1e2e"),foreground:lt("--text","#cdd6f4"),cursor:lt("--text","#cdd6f4"),cursorAccent:lt("--base","#1e1e2e"),selectionBackground:lt("--wt-sel-bg","rgba(137, 180, 250, 0.35)"),black:lt("--wt-term-black","#11111b"),red:lt("--red","#f38ba8"),green:lt("--green","#a6e3a1"),yellow:lt("--yellow","#f9e2af"),blue:lt("--blue","#89b4fa"),magenta:lt("--mauve","#cba6f7"),cyan:lt("--teal","#94e2d5"),white:lt("--wt-term-white","#bac2de"),brightBlack:lt("--wt-term-brightblack","#585b70"),brightRed:lt("--red","#f38ba8"),brightGreen:lt("--green","#a6e3a1"),brightYellow:lt("--yellow","#f9e2af"),brightBlue:lt("--sapphire","#74c7ec"),brightMagenta:lt("--mauve","#cba6f7"),brightCyan:lt("--teal","#94e2d5"),brightWhite:lt("--wt-term-brightwhite","#cdd6f4")}}function qe(ze,Je){const et=$.value;return(getComputedStyle(et||document.documentElement).getPropertyValue(ze)||Je).trim()}function ce(){const ze=$.value;if(!ze||ye)return;const Je=_v(n.tab.id);st=document.createElement("div"),st.className="fw-term-xterm",ze.appendChild(st);const et=new If({cursorBlink:!0,fontSize:Q.value,fontFamily:'Consolas, "Cascadia Code", "Courier New", monospace',scrollback:1e4,theme:ke(st),allowTransparency:!1,allowProposedApi:!0});ye=et,be=new zf,et.loadAddon(be),et.loadAddon(new jf),Ye=new Vf,et.loadAddon(Ye),et.attachCustomKeyEventHandler(De),et.open(st),et.write(n.tab.output),et.onData(lt=>dv(n.tab.session,lt)),jr(n.tab.id,lt=>ye?.write(lt)),Dt(()=>{Ie(),Je&&ye?.focus()})}function Ie(){try{be?.fit()}catch{}rt()}function rt(){ye&&(ye.cols<2||ye.rows<2||fv(n.tab.session,ye.cols,ye.rows))}function yt(){ye?.focus()}function ut(ze){ze.target?.closest("button, input, textarea, .fw-term-resizer, .fw-term-headmin, .fw-term-headclose")||ye?.focus()}const it=m(!1),Le=m(""),H=m(!1),N=m(null),Q=B(()=>Ue.termFontSize);function Te(){return{caseSensitive:H.value,incremental:!0,decorations:{matchBackground:qe("--wt-search-match-bg","rgba(166, 173, 200, 0.4)"),matchBorder:qe("--wt-search-match-bg","rgba(166, 173, 200, 0)"),activeMatchBackground:qe("--wt-search-active-bg","rgba(166, 227, 161, 0.6)"),activeMatchBorder:qe("--wt-search-active-border","#a6e3a1"),matchOverviewRuler:qe("--wt-search-active-border","#a6e3a1"),activeMatchColorOverviewRuler:qe("--wt-search-active-border","#a6e3a1")}}}function O(ze){const Je=Le.value.trim();if(!Je){Ye?.clearDecorations();return}ze?Ye?.findNext(Je,Te()):Ye?.findPrevious(Je,Te())}function T(){it.value=!0,Dt(()=>{N.value?.focus(),N.value?.select()}),O(!0)}function K(){it.value=!1,Le.value="",Ye?.clearDecorations(),yt()}Qe([Le,H],()=>{it.value&&O(!0)});function S(ze){const Je=Math.min(Math.max(Fc,Math.round(ze)),Rc);Je!==Ue.termFontSize&&(Ue.termFontSize=Je,Hn(),ye&&(ye.options.fontSize=Je),Dt(Ie))}async function q(){try{const ze=await navigator.clipboard.readText();ze&&ye?.paste(ze)}catch{}}function De(ze){if(ze.type!=="keydown"||!ye)return!0;const Je=ze.ctrlKey||ze.metaKey,et=ze.key.toLowerCase();if(Je&&et==="f")return ze.preventDefault(),T(),!1;if(Je&&et==="c"){const lt=ye.getSelection();return lt?(ze.preventDefault(),navigator.clipboard.writeText(lt).catch(()=>{}),ye.clearSelection(),!1):!0}return Je&&(et==="v"||et==="y")?(ze.preventDefault(),q(),!1):(Je||ze.altKey)&&(et==="="||et==="+"||et==="-"||et==="_")?(ze.preventDefault(),S(Q.value+(et==="-"||et==="_"?-1:1)),!1):Je&&et==="0"?(ze.preventDefault(),S(13),!1):!0}function re(){n.tab.shell=n.tab.shell==="powershell"?"cmd":"powershell",Hr(n.tab,Fe.key),Dt(Ie)}function ct(){Hr(n.tab,Fe.key),Dt(Ie)}function wt(){cs.value?X("ok",c("terminalAdminOn")):X("info",c("terminalAdminHint"))}function Ot(){n.tab.output="",ye?.clear()}function Mn(){Kp(n.tab.id)}Qe(()=>tl(n.tab.id),ze=>{ze||Dt(()=>{Ie(),ye?.focus()})});let Gt;return typeof MutationObserver<"u"&&(Gt=new MutationObserver(()=>{ye&&st&&(ye.options.theme=ke(st))}),Gt.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]})),Pt(()=>Gt?.disconnect()),ln(()=>{const ze=vv(n.tab.id);de(ze??wv()),ou(),ce(),$.value&&typeof ResizeObserver<"u"&&(pe=new ResizeObserver(()=>Ie()),pe.observe($.value))}),Pt(()=>{pe?.disconnect(),pe=null,pu(n.tab.session),jr(n.tab.id,null),ye?.dispose(),ye=null,be=null,Ye=null,st?.remove(),st=null}),(ze,Je)=>(i(),r("div",{ref_key:"rootEl",ref:w,class:"fw-term-window",style:_t(he.value),onMousedown:ut},[o("div",{class:"fw-term-head",onMousedown:_e(Se,["prevent"])},[o("span",ET,[h(oe,{name:"terminal",size:13})]),o("span",TT,a(s(c)("terminal"))+" #"+a(t.tab.name),1),A.value?(i(),r("span",{key:0,class:"fw-term-sshbadge",title:s(c)("termSshBadge")},"SSH",8,DT)):P("",!0),o("span",FT,a(C.value),1),o("span",{class:"fw-term-headmin",title:s(c)("terminalMinimize"),onClick:_e(Mn,["stop"])},"–",8,RT),o("span",{class:"fw-term-headclose",title:s(c)("terminalCloseTitle"),onClick:Je[0]||(Je[0]=_e(et=>l("close"),["stop"]))},"✕",8,NT)],32),it.value?(i(),r("div",PT,[kt(o("input",{ref_key:"searchInputEl",ref:N,"onUpdate:modelValue":Je[1]||(Je[1]=et=>Le.value=et),class:"fw-term-search-input",placeholder:s(c)("termSearchPlaceholder"),spellcheck:"false",onKeydown:[Je[2]||(Je[2]=bt(_e(et=>O(!0),["prevent"]),["enter"])),Je[3]||(Je[3]=bt(_e(et=>O(!1),["shift","prevent"]),["enter"])),bt(_e(K,["prevent"]),["esc"])]},null,40,AT),[[Lt,Le.value]]),o("button",{class:te(["fw-term-search-case",{on:H.value}]),title:s(c)("termSearchCase"),onClick:Je[4]||(Je[4]=et=>H.value=!H.value)},"Aa",10,MT),o("button",{class:"fw-term-search-btn",title:s(c)("termSearchPrev"),onClick:Je[5]||(Je[5]=et=>O(!1))},"▲",8,OT),o("button",{class:"fw-term-search-btn",title:s(c)("termSearchNext"),onClick:Je[6]||(Je[6]=et=>O(!0))},"▼",8,LT),o("button",{class:"fw-term-search-btn fw-term-search-close",title:s(c)("termSearchClose"),onClick:K},"✕",8,BT)])):P("",!0),o("div",{ref_key:"outEl",ref:$,class:"fw-term-out","box-":"double",onClick:yt},null,512),o("div",IT,[o("button",{class:"fw-term-btn",onClick:Ot},a(s(c)("terminalClear")),1),o("button",{class:"fw-term-btn",title:s(c)("termFontSmaller"),disabled:Q.value<=Fc,onClick:Je[7]||(Je[7]=et=>S(Q.value-1))},"A−",8,jT),o("button",{class:"fw-term-btn",title:s(c)("termFontLarger"),disabled:Q.value>=Rc,onClick:Je[8]||(Je[8]=et=>S(Q.value+1))},"A+",8,VT),I.value?(i(),r("button",{key:1,class:"fw-term-btn",title:s(c)("termSshReconnectTitle"),onClick:ct},a(s(c)("termSshReconnect")),9,UT)):(i(),r("button",{key:0,class:"fw-term-btn",title:s(c)("terminalShellSwitch"),onClick:re},a(M.value),9,zT)),s(cs)!==null&&!A.value?(i(),r("button",{key:2,class:te(["fw-term-admin",{on:s(cs)}]),title:s(cs)?s(c)("terminalAdminOn"):s(c)("terminalAdminOff"),onClick:wt},[h(oe,{name:"shield",size:11}),o("span",null,a(s(cs)?s(c)("terminalAdmin"):s(c)("terminalAdminNormal")),1)],10,HT)):P("",!0),Je[9]||(Je[9]=o("div",{class:"fw-spacer"},null,-1)),o("span",WT,a(Z.value),1),o("span",{class:"fw-term-kbdhint",title:s(c)("termCopyHint")},"Ctrl+C 复制 · Ctrl+V 粘贴 · Ctrl+F 搜索",8,GT)]),o("div",{class:"fw-term-resizer",title:s(c)("terminalResizeTitle"),onMousedown:_e(ge,["prevent"]),onDblclick:_e(Ze,["stop"])},null,40,qT)],36))}}),XT=xt(KT,[["__scopeId","data-v-6d3078d7"]]),YT=["title"],JT={class:"fw-term-card-head"},QT={class:"fw-term-card-ico"},ZT={class:"fw-term-card-title"},e4=["title"],t4=["title"],n4=["title"],s4={class:"fw-term-card-body"},o4=ht({__name:"TerminalMiniWindow",props:{tab:{}},setup(t){const e=t,n=B(()=>{if(e.tab.ssh)return e.tab.ssh.label;const d=e.tab.cwd?.trim();if(d){const p=d.replace(/[\\/]$/,"").split(/[\\/]/).pop();if(p)return p}return y("terminal")}),l=B(()=>{const d=e.tab.ssh;return d?d.remote&&d.remote!=="/"?`${d.label} · ${d.remote}`:d.label:e.tab.cwd||y("terminal")}),c=B(()=>{const d=Jp(e.tab.id);if(!d)return"";const p=d.replace(/\r/g,"").split(`
`);let w=p.length;for(;w>0&&!p[w-1].trim();)w--;return p.slice(Math.max(0,w-5),w).join(`
`)});function u(){Gs.value=e.tab.id,Ul(e.tab.id)}function v(){vu(e.tab.id),St.value.length||(Fe.termOpen=!1)}return(d,p)=>(i(),r("div",{class:te(["fw-term-card",{active:t.tab.id===s(Gs)}]),title:l.value,onClick:u},[o("div",JT,[o("span",QT,[h(oe,{name:"terminal",size:12})]),o("span",ZT,a(n.value),1),t.tab.ssh?(i(),r("span",{key:0,class:"fw-term-card-ssh",title:s(y)("termSshBadge")},"SSH",8,e4)):s(cs)?(i(),r("span",{key:1,class:"fw-term-card-admin",title:s(y)("terminalAdminOn")},[h(oe,{name:"shield",size:10})],8,t4)):P("",!0),o("span",{class:"fw-term-card-close",title:s(y)("terminalCloseTitle"),onClick:_e(v,["stop"])},"✕",8,n4)]),o("pre",s4,a(c.value),1)],10,YT))}}),a4=xt(o4,[["__scopeId","data-v-cfbf612f"]]),i4=["title"],l4={key:0,class:"dsh-term-dock-count"},r4=["title"],c4={class:"dsh-term-dock-listhead"},u4=["title"],d4=9,Sa=36,Yt=8,Nc=4,Ea=48,f4=ht({__name:"TerminalHost",setup(t){function e(){return document.documentElement.getAttribute("data-theme")==="light"?"light":"dark"}function n(){const z=document.getElementById("dsh-term-root");z&&z.setAttribute("data-term-theme",e())}n();let l;typeof MutationObserver<"u"&&(l=new MutationObserver(n),l.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]})),Pt(()=>l?.disconnect());const c=B(()=>St.value.filter(z=>tl(z.id))),u=m(null),v=m(!1),d=m(!1),p=B(()=>v.value),w=B(()=>{const z=bn.value;return!!z&&z.x<340}),b=B(()=>{const z=bn.value;return!!z&&z.y>window.innerHeight/2}),$=B(()=>{const z=bn.value;return z?{left:`${z.x}px`,top:`${z.y}px`}:void 0}),L=m(null),M=m(360);function A(){const z=u.value?.getBoundingClientRect();if(!z)return;const ee=b.value?z.bottom-Yt:window.innerHeight-z.top-Yt;M.value=Math.max(180,Math.min(Math.round(ee)-4,Math.round(window.innerHeight*.72)))}function I(z,ee){const ge=Math.max(Yt,window.innerWidth-Sa-Yt),je=Math.max(Yt,window.innerHeight-Sa-Yt);return{x:Math.min(Math.max(Yt,z),ge),y:Math.min(Math.max(Yt,ee),je)}}function U(z,ee){const ge=I(z,ee),je=Math.max(Yt,window.innerWidth-Sa-Yt),Ke=Math.max(Yt,window.innerHeight-Sa-Yt);let Ze=ge.x,ye=ge.y;return ge.x-Yt<=Ea?Ze=Yt:je-ge.x<=Ea&&(Ze=je),ge.y-Yt<=Ea?ye=Yt:Ke-ge.y<=Ea&&(ye=Ke),{x:Ze,y:ye}}let C=null,Z=!1;function G(z){if(z.button!==0||!u.value)return;const ee=u.value.getBoundingClientRect();bn.value||(bn.value={x:ee.left,y:ee.top}),C={pid:z.pointerId,fromX:z.clientX,fromY:z.clientY,baseX:bn.value.x,baseY:bn.value.y,moved:!1},z.currentTarget.setPointerCapture(z.pointerId)}function F(z){if(!C||z.pointerId!==C.pid)return;const ee=z.clientX-C.fromX,ge=z.clientY-C.fromY;!C.moved&&Math.abs(ee)<Nc&&Math.abs(ge)<Nc||(C.moved=!0,d.value=!0,bn.value=I(C.baseX+ee,C.baseY+ge))}function de(z){if(!C||z.pointerId!==C.pid)return;Z=C.moved;const ee=C.moved;if(C=null,d.value=!1,ee){const ge=bn.value;ge&&(bn.value=U(ge.x,ge.y))}}function j(){if(Z){Z=!1;return}v.value=!v.value}const he=m(!1),Ee=m({x:0,y:0});function ve(z){v.value=!1,Ee.value={x:z.clientX,y:z.clientY},he.value=!0}const ne=B(()=>{const z=c.value.map(ee=>({label:ie(ee),icon:"terminal",onClick:()=>{Gs.value=ee.id,Ul(ee.id)},trailing:{icon:"close",title:y("terminalCloseTitle"),onClick:()=>void Se(ee.id)}}));return z.length&&z.push({separator:!0}),z.push({label:y("terminalDockCloseAll"),icon:"close",onClick:()=>void Ve()}),z});function ie(z){if(z.ssh)return z.ssh.label;const ee=z.cwd?.trim();if(ee){const ge=ee.replace(/[\\/]$/,"").split(/[\\/]/).pop();if(ge)return ge}return y("terminal")}async function Se(z){qr(z),St.value.length||(Fe.termOpen=!1)}async function Ve(){v.value=!1,await pv(),Fe.termOpen=!1}function we(z){if(!p.value)return;const ee=u.value,ge=z.target;ee&&ge&&ee.contains(ge)||(v.value=!1)}function Ne(){const z=bn.value;z&&(bn.value=I(z.x,z.y)),Dt(A)}function W(z=!1){if(St.value.length>=d4)return;const ee=Fe.termRequestSsh,ge=ee?"":Fe.termRequestCwd||Fe.root||Fe.explorerPath||"",je=Fe.termRequestCmd;Fe.termRequestCwd="",Fe.termRequestCmd="",Fe.termRequestSsh=null,bv(Fe.key,{cwd:ge,initCmd:ee?void 0:je||void 0,fallbackCmd:ee&&je||void 0,shell:Ue.termShell,ssh:ee??void 0,focus:z})}function J(z){qr(z),St.value.length===0&&(Fe.termOpen=!1)}return Qe(p,z=>{z&&Dt(A)}),Qe(()=>c.value.length,z=>{z||(v.value=!1)}),Qe(Jl,()=>{Fe.termOpen||(Fe.termOpen=!0),W(!0)}),Qe(()=>Fe.termOpen,z=>{z&&St.value.length===0&&W(!0)}),ln(()=>{ou(),window.addEventListener("resize",Ne),document.addEventListener("pointerdown",we,!0),Dt(A),Fe.termOpen&&St.value.length===0&&W(!1)}),Pt(()=>{window.removeEventListener("resize",Ne),document.removeEventListener("pointerdown",we,!0)}),(z,ee)=>(i(),r(ae,null,[(i(!0),r(ae,null,Ae(s(St),ge=>kt((i(),Xe(XT,{key:ge.id,tab:ge,onClose:je=>J(ge.id)},null,8,["tab","onClose"])),[[mo,s(Fe).termOpen&&!s(tl)(ge.id)]])),128)),s(Fe).termOpen&&c.value.length?(i(),r("div",{key:0,ref_key:"dockRef",ref:u,class:te(["dsh-term-dock",{"is-floating":!!s(bn),"is-dragging":d.value,"is-flip":w.value,"is-bottom":b.value}]),style:_t($.value)},[o("div",{class:"dsh-term-dock-btn",title:s(y)("terminalDockDragTitle"),onClick:j,onContextmenu:_e(ve,["prevent"]),onPointerdown:G,onPointermove:F,onPointerup:de,onPointercancel:de},[h(oe,{name:"terminal",size:15}),c.value.length>1?(i(),r("span",l4,a(c.value.length),1)):P("",!0),s(cs)?(i(),r("span",{key:1,class:"dsh-term-dock-dot",title:s(y)("terminalAdminOn")},null,8,r4)):P("",!0)],40,i4),p.value&&!d.value?(i(),r("div",{key:0,ref_key:"listRef",ref:L,class:"dsh-term-dock-list",style:_t({maxHeight:`${M.value}px`})},[o("div",c4,a(s(y)("terminalDockSessions")),1),(i(!0),r(ae,null,Ae(c.value,ge=>(i(),Xe(a4,{key:ge.id,tab:ge},null,8,["tab"]))),128)),o("button",{class:"dsh-term-dock-new",title:s(y)("terminalNew"),onClick:ee[0]||(ee[0]=_e(ge=>W(!0),["stop"]))},"＋ "+a(s(y)("terminalNew")),9,u4)],4)):P("",!0)],6)):P("",!0),he.value?(i(),Xe(Qt,{key:1,items:ne.value,x:Ee.value.x,y:Ee.value.y,onClose:ee[1]||(ee[1]=ge=>he.value=!1)},null,8,["items","x","y"])):P("",!0)],64))}}),p4=xt(f4,[["__scopeId","data-v-6b6a1886"]]),v4=/[<>:"|?*\u0000-\u001f]/g,Pc=120;function h4(t){let e=(t??"").trim().replace(/\\/g,"/");return!e||e.includes("/")||(e=e.replace(v4,"_").replace(/[. ]+$/,""),!e||e==="."||e==="..")?null:(e.length>Pc&&(e=e.slice(0,Pc).replace(/[. ]+$/,"")),e||null)}function Ki(t){let e=(t??"").trim().replace(/\\/g,"/");if(!e)return"";const n=/^[^/\s]+@[^/:\s]+:(.*)$/.exec(e);n?e=n[1]:e=e.replace(/^[a-zA-Z][a-zA-Z0-9+.-]*:\/\/[^/]*/,""),e=e.split("?")[0].split("#")[0],e=e.replace(/\/+$/,"");const c=(e.split("/").filter(Boolean).pop()??"").replace(/\.git$/i,"");return h4(c)??""}const Ac="__new__";function Ad(t){const{t:e}=Bt(),n=m({url:"",dir:qt.dir,name:"",shallow:!1,revision:"",accountId:""}),l=m(!1),c=m(!1),u=m(""),v=m(0),d=m(!1);let p=0,w=0;function b(we,Ne){const W=(we??"").trim();if(!W)return"";const J=W.includes("\\")?"\\":"/";return`${W.replace(/[\\/]+$/,"")}${J}${Ne}`}const $=B(()=>{const we=n.value.name.trim()||Ki(n.value.url);return we?b(n.value.dir,we):""}),L=B(()=>!!n.value.url.trim()&&!!n.value.dir.trim()&&!!$.value);Qe(()=>n.value.url,we=>{l.value||(n.value.name=Ki(we))}),Qe(()=>n.value.name,(we,Ne)=>{we!==Ki(n.value.url)&&Ne!==void 0&&(l.value=!0)});const M=B(()=>Nn.value.filter(we=>we.kind===t)),A=B(()=>M.value.find(we=>we.id===n.value.accountId)??null),I=m(null);let U=0;async function C(){const we=n.value.url.trim();if(!we||n.value.accountId){I.value=null;return}const Ne=await nu(t,we).catch(()=>null);I.value=Ne?.account??null}Qe(()=>n.value.url,()=>{U&&window.clearTimeout(U),U=window.setTimeout(()=>void C(),400)});const Z=B(()=>n.value.accountId?A.value:I.value),G=B(()=>n.value.dir.trim().startsWith("ssh://"));let F=[];const de=m(!1);function j(){F=Nn.value.map(we=>we.id),de.value=!0,ur({kind:t,url:n.value.url.trim()})}function he(we){const Ne=we.target,W=Ne.value;if(W===Ac){Ne.value=n.value.accountId,j();return}n.value.accountId=W}Qe(()=>kn.open,async we=>{if(we||!de.value)return;de.value=!1,await co();const Ne=Nn.value.find(W=>W.kind===t&&!F.includes(W.id));Ne&&(n.value.accountId=Ne.id)}),Qe(()=>qt.open,we=>{we&&(n.value={url:"",dir:qt.dir,name:"",shallow:!1,revision:"",accountId:""},l.value=!1,u.value="",v.value=0,c.value=!1,I.value=null,co())},{immediate:!0});function Ee(we){n.value.dir=we}function ve(we){we||c.value||rc()}function ne(){v.value=Math.round((Date.now()-w)/1e3)}async function ie(){if(c.value||!L.value)return;const{url:we,dir:Ne,shallow:W,revision:J}=n.value;u.value="",c.value=!0,w=Date.now(),v.value=0,p=window.setInterval(ne,1e3);try{const z=await Op(t,{url:we.trim(),dir:Ne.trim(),name:n.value.name.trim()||void 0,depth:t==="git"&&W?1:0,revision:t==="svn"&&J.trim()||void 0,accountId:n.value.accountId||void 0,key:qt.key||void 0}),ee=qt.onDone;rc(),X("ok",e(t==="git"?"repoCloneDoneGit":"repoCloneDoneSvn",{name:z.name}));try{ee?.({path:z.path,name:z.name})}catch{}}catch(z){u.value=z?.message||String(z)}finally{c.value=!1,p&&(window.clearInterval(p),p=0)}}function Se(){p&&window.clearInterval(p),U&&window.clearTimeout(U),p=0,U=0}function Ve(we){return`${we.name} · ${we.url||e("accAllRepos")}`}return{t:e,state:n,busy:c,error:u,elapsed:v,pickerOpen:d,targetPath:$,canSubmit:L,accountOptions:M,effectiveAccount:Z,isRemoteDir:G,newAccountValue:Ac,accountLabel:Ve,onAccountChange:he,onDirPicked:Ee,onModel:ve,submit:ie,dispose:Se}}const m4={class:"fw-clone-head"},g4={class:"fw-clone-badge"},y4={class:"fw-clone-headtext"},w4={class:"fw-clone-headtitle"},b4={class:"fw-clone-headsub"},_4={class:"fw-clone"},k4={class:"fw-clone-field"},x4={class:"fw-clone-label"},C4=["placeholder","disabled"],$4={key:0,class:"fw-clone-field"},S4={class:"fw-clone-label"},E4=["value","disabled"],T4={value:""},D4=["value"],F4=["value"],R4={key:0,class:"fw-clone-tip"},N4={class:"fw-clone-field"},P4={class:"fw-clone-label"},A4={class:"fw-clone-row"},M4=["placeholder","disabled"],O4=["disabled"],L4={class:"fw-clone-field"},B4={class:"fw-clone-label"},I4=["placeholder","disabled"],j4={class:"fw-clone-check fw-clone-slot"},V4=["disabled"],z4={class:"fw-clone-checkhint"},U4=["title"],H4={class:"fw-clone-targetlabel"},W4={class:"fw-clone-targetval"},G4={key:1,class:"fw-clone-busy"},q4={class:"fw-clone-elapsed"},K4={key:2,class:"fw-clone-tip"},X4={key:3,class:"fw-clone-error"},Y4=["disabled"],J4=["disabled"],Q4=ht({__name:"GitCloneDialog",setup(t){const{t:e,state:n,busy:l,error:c,elapsed:u,pickerOpen:v,targetPath:d,canSubmit:p,accountOptions:w,effectiveAccount:b,isRemoteDir:$,newAccountValue:L,accountLabel:M,onAccountChange:A,onDirPicked:I,onModel:U,submit:C,dispose:Z}=Ad("git");return Pt(Z),(G,F)=>{const de=rn;return i(),r(ae,null,[h(de,{"model-value":s(qt).open,width:"560px","append-to-body":"",class:"fw-clone-dialog fw-clone-git","close-on-click-modal":!1,"close-on-press-escape":!s(l),"show-close":!s(l),"onUpdate:modelValue":s(U)},{header:se(()=>[o("div",m4,[o("span",g4,[h(oe,{name:"git",size:20})]),o("div",y4,[o("div",w4,a(s(e)("repoCloneTitleGit")),1),o("div",b4,a(s(e)("repoCloneCaptionGit")),1)])])]),footer:se(()=>[o("button",{class:"fw-clone-btn",disabled:s(l),onClick:F[7]||(F[7]=j=>s(U)(!1))},a(s(e)("cancel")),9,Y4),o("button",{class:"fw-clone-btn primary",disabled:s(l)||!s(p),onClick:F[8]||(F[8]=(...j)=>s(C)&&s(C)(...j))},a(s(e)("repoCloneActionGit")),9,J4)]),default:se(()=>[o("div",_4,[o("label",k4,[o("span",x4,a(s(e)("repoCloneUrl")),1),kt(o("input",{"onUpdate:modelValue":F[0]||(F[0]=j=>s(n).url=j),class:"fw-clone-input",placeholder:s(e)("repoCloneUrlGitPlaceholder"),spellcheck:"false",disabled:s(l),onKeyup:F[1]||(F[1]=bt((...j)=>s(C)&&s(C)(...j),["enter"]))},null,40,C4),[[Lt,s(n).url]])]),s($)?P("",!0):(i(),r("label",$4,[o("span",S4,a(s(e)("repoCloneAccount")),1),o("select",{class:"fw-clone-input fw-clone-select",value:s(n).accountId,disabled:s(l),onChange:F[2]||(F[2]=(...j)=>s(A)&&s(A)(...j))},[o("option",T4,a(s(e)("repoCloneAccountAuto")),1),(i(!0),r(ae,null,Ae(s(w),j=>(i(),r("option",{key:j.id,value:j.id},a(s(M)(j)),9,D4))),128)),o("option",{value:s(L)},a(s(e)("repoCloneAccountNew")),9,F4)],40,E4),s(n).url.trim()||s(n).accountId?(i(),r("span",R4,[s(b)?(i(),r(ae,{key:0},[ue(a(s(e)("accEffective"))+" "+a(s(b).name)+"（"+a(s(b).username)+"@"+a(s(b).host)+"） ",1)],64)):(i(),r(ae,{key:1},[ue(a(s(e)("accEffectiveNone")),1)],64))])):P("",!0)])),o("label",N4,[o("span",P4,a(s(e)("repoCloneDir")),1),o("div",A4,[kt(o("input",{"onUpdate:modelValue":F[3]||(F[3]=j=>s(n).dir=j),class:"fw-clone-input",placeholder:s(e)("repoCloneDirPlaceholder"),spellcheck:"false",disabled:s(l)},null,8,M4),[[Lt,s(n).dir]]),o("button",{class:"fw-clone-btn",disabled:s(l),onClick:F[4]||(F[4]=j=>v.value=!0)},a(s(e)("repoCloneBrowse")),9,O4)])]),o("label",L4,[o("span",B4,a(s(e)("repoCloneName")),1),kt(o("input",{"onUpdate:modelValue":F[5]||(F[5]=j=>s(n).name=j),class:"fw-clone-input",placeholder:s(e)("repoCloneNamePlaceholder"),spellcheck:"false",disabled:s(l)},null,8,I4),[[Lt,s(n).name]])]),o("label",j4,[kt(o("input",{"onUpdate:modelValue":F[6]||(F[6]=j=>s(n).shallow=j),type:"checkbox",disabled:s(l)},null,8,V4),[[gf,s(n).shallow]]),o("span",null,a(s(e)("repoCloneShallow")),1),o("span",z4,a(s(e)("repoCloneShallowHint")),1)]),o("div",{class:"fw-clone-target",title:s(d)||void 0},[h(oe,{name:"folderOpen",size:13}),o("span",H4,a(s(e)("repoCloneTargetGit")),1),o("span",W4,a(s(d)||s(e)("repoCloneTargetEmpty")),1)],8,U4),s(l)?(i(),r("div",G4,[F[10]||(F[10]=o("span",{class:"fw-clone-spin","aria-hidden":"true"},null,-1)),o("span",null,a(s(e)("repoCloneRunningGit")),1),o("span",q4,a(s(e)("repoCloneElapsed",{s:s(u)})),1)])):P("",!0),s(l)?(i(),r("div",K4,a(s(e)("repoCloneKeepOpen")),1)):P("",!0),s(c)?(i(),r("div",X4,a(s(c)),1)):P("",!0)])]),_:1},8,["model-value","close-on-press-escape","show-close","onUpdate:modelValue"]),h(ei,{modelValue:s(v),"onUpdate:modelValue":F[9]||(F[9]=j=>Lc(v)?v.value=j:null),mode:"folder","initial-dir":s(n).dir,onConfirm:s(I)},null,8,["modelValue","initial-dir","onConfirm"])],64)}}}),Z4={class:"fw-clone-head"},eD={class:"fw-clone-badge"},tD={class:"fw-clone-headtext"},nD={class:"fw-clone-headtitle"},sD={class:"fw-clone-headsub"},oD={class:"fw-clone"},aD={class:"fw-clone-field"},iD={class:"fw-clone-label"},lD=["placeholder","disabled"],rD={key:0,class:"fw-clone-field"},cD={class:"fw-clone-label"},uD=["value","disabled"],dD={value:""},fD=["value"],pD=["value"],vD={key:0,class:"fw-clone-tip"},hD={class:"fw-clone-field"},mD={class:"fw-clone-label"},gD={class:"fw-clone-row"},yD=["placeholder","disabled"],wD=["disabled"],bD={class:"fw-clone-field"},_D={class:"fw-clone-label"},kD=["placeholder","disabled"],xD={class:"fw-clone-field"},CD={class:"fw-clone-label"},$D=["placeholder","disabled"],SD=["title"],ED={class:"fw-clone-targetlabel"},TD={class:"fw-clone-targetval"},DD={key:1,class:"fw-clone-busy"},FD={class:"fw-clone-elapsed"},RD={key:2,class:"fw-clone-tip"},ND={key:3,class:"fw-clone-error"},PD=["disabled"],AD=["disabled"],MD=ht({__name:"SvnCheckoutDialog",setup(t){const{t:e,state:n,busy:l,error:c,elapsed:u,pickerOpen:v,targetPath:d,canSubmit:p,accountOptions:w,effectiveAccount:b,isRemoteDir:$,newAccountValue:L,accountLabel:M,onAccountChange:A,onDirPicked:I,onModel:U,submit:C,dispose:Z}=Ad("svn");return Pt(Z),(G,F)=>{const de=rn;return i(),r(ae,null,[h(de,{"model-value":s(qt).open,width:"560px","append-to-body":"",class:"fw-clone-dialog fw-clone-svn","close-on-click-modal":!1,"close-on-press-escape":!s(l),"show-close":!s(l),"onUpdate:modelValue":s(U)},{header:se(()=>[o("div",Z4,[o("span",eD,[h(oe,{name:"svn",size:20})]),o("div",tD,[o("div",nD,a(s(e)("repoCloneTitleSvn")),1),o("div",sD,a(s(e)("repoCloneCaptionSvn")),1)])])]),footer:se(()=>[o("button",{class:"fw-clone-btn",disabled:s(l),onClick:F[7]||(F[7]=j=>s(U)(!1))},a(s(e)("cancel")),9,PD),o("button",{class:"fw-clone-btn primary",disabled:s(l)||!s(p),onClick:F[8]||(F[8]=(...j)=>s(C)&&s(C)(...j))},a(s(e)("repoCloneActionSvn")),9,AD)]),default:se(()=>[o("div",oD,[o("label",aD,[o("span",iD,a(s(e)("repoCloneUrl")),1),kt(o("input",{"onUpdate:modelValue":F[0]||(F[0]=j=>s(n).url=j),class:"fw-clone-input",placeholder:s(e)("svnCheckoutUrlPlaceholder"),spellcheck:"false",disabled:s(l),onKeyup:F[1]||(F[1]=bt((...j)=>s(C)&&s(C)(...j),["enter"]))},null,40,lD),[[Lt,s(n).url]])]),s($)?P("",!0):(i(),r("label",rD,[o("span",cD,a(s(e)("repoCloneAccount")),1),o("select",{class:"fw-clone-input fw-clone-select",value:s(n).accountId,disabled:s(l),onChange:F[2]||(F[2]=(...j)=>s(A)&&s(A)(...j))},[o("option",dD,a(s(e)("repoCloneAccountAuto")),1),(i(!0),r(ae,null,Ae(s(w),j=>(i(),r("option",{key:j.id,value:j.id},a(s(M)(j)),9,fD))),128)),o("option",{value:s(L)},a(s(e)("repoCloneAccountNew")),9,pD)],40,uD),s(n).url.trim()||s(n).accountId?(i(),r("span",vD,[s(b)?(i(),r(ae,{key:0},[ue(a(s(e)("accEffective"))+" "+a(s(b).name)+"（"+a(s(b).username)+"@"+a(s(b).host)+"） ",1)],64)):(i(),r(ae,{key:1},[ue(a(s(e)("accEffectiveNone")),1)],64))])):P("",!0)])),o("label",hD,[o("span",mD,a(s(e)("repoCloneDir")),1),o("div",gD,[kt(o("input",{"onUpdate:modelValue":F[3]||(F[3]=j=>s(n).dir=j),class:"fw-clone-input",placeholder:s(e)("repoCloneDirPlaceholder"),spellcheck:"false",disabled:s(l)},null,8,yD),[[Lt,s(n).dir]]),o("button",{class:"fw-clone-btn",disabled:s(l),onClick:F[4]||(F[4]=j=>v.value=!0)},a(s(e)("repoCloneBrowse")),9,wD)])]),o("label",bD,[o("span",_D,a(s(e)("repoCloneName")),1),kt(o("input",{"onUpdate:modelValue":F[5]||(F[5]=j=>s(n).name=j),class:"fw-clone-input",placeholder:s(e)("repoCloneNamePlaceholder"),spellcheck:"false",disabled:s(l)},null,8,kD),[[Lt,s(n).name]])]),o("label",xD,[o("span",CD,a(s(e)("repoCloneRevision")),1),kt(o("input",{"onUpdate:modelValue":F[6]||(F[6]=j=>s(n).revision=j),class:"fw-clone-input",placeholder:s(e)("repoCloneRevisionPlaceholder"),spellcheck:"false",disabled:s(l)},null,8,$D),[[Lt,s(n).revision]])]),o("div",{class:"fw-clone-target",title:s(d)||void 0},[h(oe,{name:"folderOpen",size:13}),o("span",ED,a(s(e)("repoCloneTargetSvn")),1),o("span",TD,a(s(d)||s(e)("repoCloneTargetEmpty")),1)],8,SD),s(l)?(i(),r("div",DD,[F[10]||(F[10]=o("span",{class:"fw-clone-spin","aria-hidden":"true"},null,-1)),o("span",null,a(s(e)("repoCloneRunningSvn")),1),o("span",FD,a(s(e)("repoCloneElapsed",{s:s(u)})),1)])):P("",!0),s(l)?(i(),r("div",RD,a(s(e)("repoCloneKeepOpen")),1)):P("",!0),s(c)?(i(),r("div",ND,a(s(c)),1)):P("",!0)])]),_:1},8,["model-value","close-on-press-escape","show-close","onUpdate:modelValue"]),h(ei,{modelValue:s(v),"onUpdate:modelValue":F[9]||(F[9]=j=>Lc(v)?v.value=j:null),mode:"folder","initial-dir":s(n).dir,onConfirm:s(I)},null,8,["modelValue","initial-dir","onConfirm"])],64)}}}),OD=ht({__name:"RepoCloneDialog",setup(t){return(e,n)=>s(qt).open&&s(qt).kind==="git"?(i(),Xe(Q4,{key:0})):s(qt).open?(i(),Xe(MD,{key:1})):P("",!0)}}),LD={class:"fw-clone-head"},BD={class:"fw-clone-badge"},ID={class:"fw-clone-headtext"},jD={class:"fw-clone-headtitle"},VD={class:"fw-clone-headsub"},zD={class:"fw-acc-split"},UD={class:"fw-acc-rail"},HD={class:"fw-acc-railhead"},WD={class:"fw-acc-count"},GD={key:0,class:"fw-acc-empty"},qD={key:1,class:"fw-acc-railist"},KD={key:0,class:"fw-acc-group"},XD=["onClick","onContextmenu"],YD=["data-kind"],JD={class:"fw-acc-itemtext"},QD=["title"],ZD=["title"],e5=["title"],t5=["title"],n5={class:"fw-acc-efflabel"},s5={key:0,class:"fw-acc-effval"},o5={key:1,class:"fw-acc-effnone"},a5={class:"fw-acc-effhint"},i5={class:"fw-acc-detail"},l5={key:0,class:"fw-acc-blank"},r5={class:"fw-acc-detailhead"},c5={class:"fw-acc-detailtitle"},u5={key:0,class:"fw-acc-detailsub"},d5={class:"fw-acc-form"},f5={class:"fw-clone-field"},p5={class:"fw-clone-label"},v5={class:"fw-clone-field"},h5={class:"fw-clone-label"},m5={class:"fw-clone-field"},g5={class:"fw-clone-label"},y5={class:"fw-clone-field"},w5={class:"fw-clone-label"},b5={class:"fw-clone-tip"},_5={class:"fw-clone-field"},k5={class:"fw-clone-label"},x5={class:"fw-clone-field"},C5={class:"fw-clone-label"},$5={class:"fw-clone-row"},S5={class:"fw-clone-field"},E5={class:"fw-clone-label"},T5={key:0,class:"fw-clone-error"},D5={class:"fw-acc-actions"},F5={class:"fw-clone-tip"},R5=ht({__name:"AccountDialog",setup(t){const{t:e}=Bt(),n=B({get:()=>kn.open,set:ye=>{ye||Mi()}}),l=m(null),c=m(!1),u=B(()=>!c.value&&l.value!==null),v=B(()=>c.value||l.value!==null),d=B(()=>Nn.value.find(ye=>ye.id===l.value)??null),p=gt({kind:"git",name:"",host:"",url:"",username:"",secretKind:"password",secret:"",note:""}),w=m(!1),b=m(!1),$=m(null),L=m(""),M=m(null);async function A(){const ye=kn.url?.trim()??"";if(!ye){M.value=null;return}const be=await nu(kn.kind,ye).catch(()=>null);M.value=be?.account??null}const I=B(()=>["git","svn"].map(be=>({kind:be,list:Nn.value.filter(Ye=>Ye.kind===be)}))),U=m(null),{cmOpen:C,cmX:Z,cmY:G,cmItems:F,openMenu:de,closeMenu:j}=pn();function he(ye,be){const Ye=[{label:e("accTest"),icon:"refresh",onClick:()=>Ee(be)},{label:e("accApply"),icon:"check",onClick:()=>void ve(be)},{separator:!0},{label:e("accDelete"),icon:"trash",onClick:()=>void ne(be)},{separator:!0},{label:e("accCopyIdent"),icon:"copy",onClick:()=>void ie(be)}];de(ye,Ye)}async function Ee(ye){Ne(ye),await Ke()}async function ve(ye){Ne(ye),await ge()}async function ne(ye){Ne(ye),await je(),$.value=null}async function ie(ye){try{await navigator.clipboard.writeText(`${ye.username}@${ye.host}`)}catch{}}const Se=B(()=>(c.value?p.kind:d.value?.kind??p.kind)==="svn"?"fw-clone-svn":"fw-clone-git"),Ve=B(()=>{const ye=p.username.trim()||"user",be=p.host.trim()||"host";return`${ye}@${be}`});function we(ye){p.kind=ye.kind,p.name=ye.name,p.host=ye.host,p.url=ye.url,p.username=ye.username,p.secretKind=ye.secretKind,p.secret="",p.note=ye.note}function Ne(ye){c.value=!1,l.value=ye.id,$.value=null,L.value="",U.value=null,we(ye)}Qe(()=>kn.open,ye=>{ye&&(c.value=!1,l.value=null,$.value=null,L.value="",w.value=!1,b.value=!1,M.value=null,(async()=>{await co(),await A();const be=Nn.value[0];be&&Ne(be)})())},{immediate:!0});function W(){Mi()}function J(){Mi()}function z(){c.value=!0,l.value=null,$.value=null,L.value="",p.kind=kn.kind,p.name="",p.host="",p.url=kn.url,p.username="",p.secretKind="password",p.secret="",p.note=""}async function ee(ye){w.value=!0,L.value="";try{await ye()}catch(be){L.value=be instanceof Error?be.message:String(be)}finally{w.value=!1}}async function ge(){const ye=d.value;if(ye){b.value=!0;try{const be=await Up(ye.id);rs(`${e("accApplyOk")} · ${be.detail}`)}catch(be){fs(be instanceof Error?be.message:String(be))}finally{b.value=!1}}}async function je(){const ye=d.value;if(ye){if($.value!==ye.id){$.value=ye.id;return}$.value=null;try{await Vp(ye.id),rs(e("accDeleted")),await co(),await A();const be=Nn.value[0];be?Ne(be):(l.value=null,c.value=!1)}catch(be){fs(be instanceof Error?be.message:String(be))}}}async function Ke(){if(!p.host.trim()||!p.username.trim()){ao(e("accRequired"));return}const ye=u.value&&!p.secret.trim();if(!ye&&!p.secret.trim()){ao(e("accSecretRequired"));return}await ee(async()=>{const be=await zp(ye?{id:l.value??void 0}:{kind:p.kind,host:p.host.trim(),url:p.url.trim(),username:p.username.trim(),secret:p.secret,secretKind:p.secretKind});U.value={ok:be.ok,detail:be.detail},be.ok?rs(`${e("accTestOk")} · ${be.detail}`):fs(`${e("accTestFail")} · ${be.detail}`)})}async function Ze(){if(!p.host.trim()||!p.username.trim()){ao(e("accRequired"));return}if(c.value&&!p.secret){ao(e("accSecretRequired"));return}await ee(async()=>{const ye={kind:p.kind,host:p.host.trim(),url:p.url.trim(),name:p.name.trim(),username:p.username.trim(),secret:p.secret||void 0,secretKind:p.secretKind,note:p.note.trim()};if(u.value&&l.value){await jp({id:l.value,...ye}),rs(e("accSaved")),await co(),await A();const be=Nn.value.find(Ye=>Ye.id===l.value);be&&we(be)}else{const be=await Ip(ye);rs(e("accSaved")),await co(),await A();const Ye=Nn.value.find(st=>st.id===be.account.id);Ye&&Ne(Ye)}})}return(ye,be)=>{const Ye=An,st=ni,pe=ti,ke=Ss,qe=rn;return i(),Xe(qe,{modelValue:n.value,"onUpdate:modelValue":be[8]||(be[8]=ce=>n.value=ce),class:te(["fw-clone-dialog fw-acc-dlg",Se.value]),width:"800px","align-center":"","close-on-click-modal":!1,"append-to-body":"",onClosed:W},{header:se(()=>[o("div",LD,[o("span",BD,[h(oe,{name:"shield",size:20})]),o("div",ID,[o("div",jD,a(s(e)("accTitle")),1),o("div",VD,a(s(e)("accCaption")),1)])])]),footer:se(()=>[h(Ye,{size:"small",onClick:J},{default:se(()=>[ue(a(s(e)("accCancel")),1)]),_:1}),h(Ye,{size:"small",type:"primary",loading:w.value,disabled:!v.value,onClick:Ze},{default:se(()=>[ue(a(s(e)("accSave")),1)]),_:1},8,["loading","disabled"])]),default:se(()=>[o("div",zD,[o("div",UD,[o("div",HD,[o("span",WD,a(s(e)("accListTitle"))+" · "+a(s(Nn).length),1),h(Ye,{size:"small",class:"fw-acc-iconbtn",title:s(e)("accAdd"),onClick:z},{default:se(()=>[h(oe,{name:"plus",size:13})]),_:1},8,["title"])]),s(Nn).length?(i(),r("div",qD,[(i(!0),r(ae,null,Ae(I.value,ce=>(i(),r(ae,{key:ce.kind},[ce.list.length?(i(),r("div",KD,a(ce.kind==="svn"?"SVN":"Git"),1)):P("",!0),(i(!0),r(ae,null,Ae(ce.list,Ie=>(i(),r("button",{key:Ie.id,type:"button",class:te(["fw-acc-item",{on:!c.value&&Ie.id===l.value}]),onClick:rt=>Ne(Ie),onContextmenu:_e(rt=>he(rt,Ie),["prevent","stop"])},[o("span",{class:"fw-acc-kind","data-kind":Ie.kind},a(Ie.kind==="svn"?"SVN":"Git"),9,YD),o("span",JD,[o("span",{class:"fw-acc-itemname",title:Ie.name},a(Ie.name),9,QD),o("span",{class:"fw-acc-itemsub",title:`${Ie.username}@${Ie.host}`},a(Ie.username)+"@"+a(Ie.host),9,ZD)]),Ie.hasSecret?(i(),Xe(oe,{key:0,class:"fw-acc-lock",name:"shield",size:13,title:s(e)("accHasSecret")},null,8,["title"])):(i(),r("span",{key:1,class:"fw-acc-dot",title:s(e)("accNoSecret")},null,8,e5))],42,XD))),128))],64))),128))])):(i(),r("div",GD,a(s(e)("accEmpty")),1)),s(kn).url?(i(),r("div",{key:2,class:"fw-acc-effective",title:s(kn).url},[o("span",n5,a(s(e)("accEffective")),1),M.value?(i(),r("span",s5,a(M.value.name)+"（"+a(M.value.username)+"@"+a(M.value.host)+"）",1)):(i(),r("span",o5,a(s(e)("accEffectiveNone")),1)),o("span",a5,a(s(e)("accMatchHint")),1)],8,t5)):P("",!0)]),o("div",i5,[v.value?(i(),r(ae,{key:1},[o("div",r5,[o("span",c5,a(c.value?s(e)("accNewTitle"):s(e)("accEditTitle")),1),d.value?(i(),r("span",u5,a(d.value.username)+"@"+a(d.value.host),1)):P("",!0)]),o("div",d5,[o("div",f5,[o("span",p5,a(s(e)("accKind")),1),h(pe,{modelValue:p.kind,"onUpdate:modelValue":be[0]||(be[0]=ce=>p.kind=ce),size:"small",class:"fw-acc-kindsel","popper-class":"fw-acc-popper"},{default:se(()=>[h(st,{value:"git",label:s(e)("accKindGit")},null,8,["label"]),h(st,{value:"svn",label:s(e)("accKindSvn")},null,8,["label"])]),_:1},8,["modelValue"])]),o("div",v5,[o("span",h5,a(s(e)("accName")),1),h(ke,{modelValue:p.name,"onUpdate:modelValue":be[1]||(be[1]=ce=>p.name=ce),size:"small",placeholder:Ve.value},null,8,["modelValue","placeholder"])]),o("div",m5,[o("span",g5,a(s(e)("accHost")),1),h(ke,{modelValue:p.host,"onUpdate:modelValue":be[2]||(be[2]=ce=>p.host=ce),size:"small",placeholder:s(e)("accHostPlaceholder")},null,8,["modelValue","placeholder"])]),o("div",y5,[o("span",w5,a(s(e)("accUrl")),1),h(ke,{modelValue:p.url,"onUpdate:modelValue":be[3]||(be[3]=ce=>p.url=ce),size:"small",placeholder:s(e)("accUrlPlaceholder")},null,8,["modelValue","placeholder"]),o("span",b5,a(s(e)("accUrlHint")),1)]),o("div",_5,[o("span",k5,a(s(e)("accUsername")),1),h(ke,{modelValue:p.username,"onUpdate:modelValue":be[4]||(be[4]=ce=>p.username=ce),size:"small",placeholder:s(e)("accUsername")},null,8,["modelValue","placeholder"])]),o("div",x5,[o("span",C5,a(s(e)("accSecretKind")),1),o("div",$5,[h(pe,{modelValue:p.secretKind,"onUpdate:modelValue":be[5]||(be[5]=ce=>p.secretKind=ce),size:"small",class:"fw-acc-kindslim","popper-class":"fw-acc-popper"},{default:se(()=>[h(st,{value:"password",label:s(e)("accSecretPassword")},null,8,["label"]),h(st,{value:"token",label:s(e)("accSecretToken")},null,8,["label"])]),_:1},8,["modelValue"]),h(ke,{modelValue:p.secret,"onUpdate:modelValue":be[6]||(be[6]=ce=>p.secret=ce),size:"small",type:"password","show-password":"",class:"fw-acc-secretinput",placeholder:u.value&&d.value?.hasSecret?s(e)("accKeepSecret"):s(e)("accSecret")},null,8,["modelValue","placeholder"])])]),o("div",S5,[o("span",E5,a(s(e)("accNote")),1),h(ke,{modelValue:p.note,"onUpdate:modelValue":be[7]||(be[7]=ce=>p.note=ce),size:"small"},null,8,["modelValue"])])]),L.value?(i(),r("div",T5,a(L.value),1)):P("",!0),U.value?(i(),r("div",{key:1,class:te(["fw-acc-testres",U.value.ok?"is-ok":"is-fail"])},[h(oe,{name:U.value.ok?"check":"warning",size:13},null,8,["name"]),o("span",null,a(U.value.ok?s(e)("accTestOk"):s(e)("accTestFail"))+" · "+a(U.value.detail),1)],2)):P("",!0),o("div",D5,[h(Ye,{size:"small",loading:w.value,onClick:Ke},{default:se(()=>[ue(a(s(e)("accTest")),1)]),_:1},8,["loading"]),u.value?(i(),Xe(Ye,{key:0,size:"small",loading:b.value,onClick:ge},{default:se(()=>[ue(a(s(e)("accApply")),1)]),_:1},8,["loading"])):P("",!0),u.value?(i(),Xe(Ye,{key:1,size:"small",class:te({"fw-acc-danger":$.value===d.value?.id}),onClick:je},{default:se(()=>[ue(a($.value===d.value?.id?s(e)("accDeleteConfirm"):s(e)("accDelete")),1)]),_:1},8,["class"])):P("",!0)]),o("div",F5,a(s(e)("accApplyHint")),1)],64)):(i(),r("div",l5,a(s(e)("accPick")),1))])]),s(C)?(i(),Xe(Qt,{key:0,items:s(F),x:s(Z),y:s(G),onClose:s(j)},null,8,["items","x","y","onClose"])):P("",!0)]),_:1},8,["modelValue","class"])}}}),N5=xt(R5,[["__scopeId","data-v-d434fcb2"]]),P5={class:"fw-toast-host","aria-live":"polite","aria-atomic":"false"},A5=["onMouseenter","onMouseleave"],M5={class:"fw-toast-ico","aria-hidden":"true"},O5=["title","onClick"],L5=["title"],B5=["title","aria-label","onClick"],Mc=100,I5=48,j5=ht({__name:"ToastHost",setup(t){let e=null;function n(){if(Di.value.length!==0)for(const w of[...Di.value])w.paused||w.duration<=0||(w.remain-=Mc,w.remain<=0&&Pr(w.id))}ln(()=>{e=window.setInterval(n,Mc)}),Pt(()=>{e!==null&&window.clearInterval(e),e=null});const l={ok:"check",error:"warning",warning:"warning",info:"info"},c=gt(new Set);function u(w){c.has(w)?c.delete(w):c.add(w)}function v(w){return w.message.length>I5?w.message:void 0}function d(w){return Math.max(0,Math.ceil(w.remain/1e3))}function p(w){if(w.duration<=0)return"100%";const b=w.remain/w.duration*100;return`${Math.max(0,Math.min(100,b))}%`}return(w,b)=>(i(),r("div",P5,[(i(!0),r(ae,null,Ae(s(Di),$=>(i(),r("div",{key:$.id,class:te(["fw-toast",`k-${$.kind}`]),role:"status",onMouseenter:L=>$.paused=!0,onMouseleave:L=>$.paused=!1},[o("span",M5,[h(oe,{name:l[$.kind],size:15},null,8,["name"])]),o("span",{class:te(["fw-toast-msg",{"is-open":c.has($.id)}]),title:v($),onClick:L=>u($.id)},a($.message),11,O5),$.duration>0?(i(),r("span",{key:0,class:"fw-toast-count",title:`${d($)}s`},a(d($))+"s ",9,L5)):P("",!0),o("button",{class:"fw-toast-x",type:"button",title:s(y)("toastClose"),"aria-label":s(y)("toastClose"),onClick:L=>s(Pr)($.id)},[h(oe,{name:"close",size:13})],8,B5),$.duration>0?(i(),r("span",{key:1,class:"fw-toast-bar",style:_t({width:p($)})},null,4)):P("",!0)],42,A5))),128))]))}}),Is=new Map;function V5(){const t=window.__DSH_FILE_WORKBENCH__;if(!t)return;t.openExternalFile=n=>{sa(n).catch(l=>X("error",l.message)),Ft()},t.openExternalFolder=n=>{Vt(n)},t.syncSessionWorkspace=()=>{Eh()};const e=t.pendingOpens;if(e&&e.length>0){t.pendingOpens=[];for(const n of e)n.kind==="file"?t.openExternalFile(n.path):t.openExternalFolder?.(n.path)}}function Md(t,e,n="workbench"){e?.apiBase&&(window.__DSH_FILE_WORKBENCH__=window.__DSH_FILE_WORKBENCH__??{},window.__DSH_FILE_WORKBENCH__.apiBase=e.apiBase);const l=Is.get(t);if(l){try{l.unmount()}catch{}Is.delete(t)}const c=ta(n==="vscode"?ST:$S);let u=null;n==="vscode"&&(u=dr(bd(e?.instanceId)),e?.fresh&&u.markFresh(),u.bindTab(e?.instanceId??null,e?.panelId??null),c.provide(gi,u)),c.mount(t),Is.set(t,c),n==="workbench"&&V5(),xv(),n==="workbench"&&Q0();const v=c,d=u;return{unmount:()=>{try{v.unmount()}catch{}Is.get(t)===v&&Is.delete(t),Is.size===0&&setTimeout(()=>{Is.size===0&&np()},3e3)},openProject:d?p=>d.requestOpenProject(p):void 0}}function Od(t,e){return Md(t,e,"workbench")}function z5(t,e){return Md(t,e,"vscode")}window.__dshFileWorkbenchMountPane__=Od;window.__dshVSCodeMountPane__=z5;function U5(){if(typeof document>"u"||!document.body)return;const t=si();if(t.app&&t.el?.isConnected)return;if(t.app){try{t.app.unmount()}catch{}t.app=null,t.el=null}document.getElementById("dsh-toast-root")?.remove();const e=document.createElement("div");e.id="dsh-toast-root",e.style.position="fixed",e.style.left="0",e.style.top="0",e.style.width="0",e.style.height="0",e.style.overflow="visible",e.style.zIndex="2147483000",e.style.pointerEvents="none",document.body.appendChild(e);try{const n=ta(j5);n.mount(e),t.app=n,t.el=e}catch(n){console.error("[dsh-file-workbench] 提示宿主挂载失败：",n),e.remove()}}function H5(){if(typeof document>"u"||!document.body||document.getElementById("dsh-term-root"))return;const t=document.createElement("div");t.id="dsh-term-root",t.style.position="fixed",t.style.left="0",t.style.top="0",t.style.width="0",t.style.height="0",t.style.overflow="visible",t.style.zIndex="10000",document.body.appendChild(t);try{ta(p4).mount(t)}catch(e){console.error("[dsh-file-workbench] 全局终端挂载失败：",e)}}U5();H5();W5();G5();function W5(){if(typeof document>"u"||!document.body||document.getElementById("dsh-clone-root"))return;const t=document.createElement("div");t.id="dsh-clone-root",t.style.position="fixed",t.style.left="0",t.style.top="0",t.style.width="0",t.style.height="0",t.style.overflow="visible",t.style.zIndex="10000",document.body.appendChild(t);try{ta(OD).mount(t)}catch(e){console.error("[dsh-file-workbench] 全局克隆弹窗挂载失败：",e)}}if(typeof document<"u"){const t=document.getElementById("app");t&&Od(t,{apiBase:""})}window.__dshTestProbeUrl=`${(window.__DSH_FILE_WORKBENCH__?.apiBase||"/api/dsh-file-workbench").replace(/\/$/,"")}/assets/__dsh-test-probe.js`;function G5(){if(typeof document>"u"||!document.body||document.getElementById("dsh-acc-root"))return;const t=document.createElement("div");t.id="dsh-acc-root",t.style.position="fixed",t.style.left="0",t.style.top="0",t.style.width="0",t.style.height="0",t.style.overflow="visible",t.style.zIndex="10000",document.body.appendChild(t);try{ta(N5).mount(t)}catch(e){console.error("[dsh-file-workbench] 全局账号对话框挂载失败：",e)}}
