const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-C2cID70-.js","assets/vendor-vue-DSVMyY-k.js"])))=>i.map(i=>d[i]);
import{a1 as gt,r as g,a5 as Vr,y as vt,G as c,S as A,d as B,E as l,H as Xe,P as se,I as s,L as te,u as o,F as ie,W as m,V as i,ao as bt,a8 as ke,aa as Re,U as ue,e as Je,q as er,o as cn,l as At,T as eu,K as _t,J as Mf,n as Tt,Q as kt,ap as Lt,ag as Of,k as Do,Y as Lf,X as bs,m as tr,s as Bf,ay as If,ak as jf,p as tu,at as ui}from"./vendor-vue-DSVMyY-k.js";import{E as To,a as Mn,b as un,c as Vf,d as zf,e as va,f as ma,g as Uf,h as Hf,i as Wf}from"./vendor-element-plus-CPaGIovE.js";import{aV as Os,aW as Gf,aX as qf,aY as Kf,aZ as Xf,a_ as zr,a$ as nu,b0 as Yf,b1 as Jf,b2 as Qf,b3 as Zf,b4 as Ur,b5 as ep,b6 as tp,b7 as np,b8 as op,b9 as Hr,ba as as,bb as ls,bc as sp,bd as Ua,be as $i,bf as ip,bg as ap,bh as lp,bi as rp,bj as cp,bk as up,bl as dp}from"./vendor-C2cID70-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const u of r)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function n(r){const u={};return r.integrity&&(u.integrity=r.integrity),r.referrerPolicy&&(u.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?u.credentials="include":r.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(r){if(r.ep)return;r.ep=!0;const u=n(r);fetch(r.href,u)}})();const tt=gt({visible:!1,kind:"confirm",title:"",message:"",okText:"",cancelText:"",inputPlaceholder:"",inputValue:"",multiline:!1,choices:[],resolve:null});function Wr(t){return new Promise(e=>{tt.kind="confirm",tt.title=t.title??"",tt.message=t.message,tt.choices=t.choices,tt.visible=!0,tt.resolve=n=>e(typeof n=="string"?n:null)})}function Rt(t){return new Promise(e=>{tt.kind="confirm",tt.title=t.title??"",tt.message=t.message,tt.okText=t.okText??"",tt.cancelText=t.cancelText??"",tt.choices=[],tt.inputValue="",tt.visible=!0,tt.resolve=n=>e(n===!0)})}function fo(t){return new Promise(e=>{tt.kind="prompt",tt.title=t.title??"",tt.message=t.message??"",tt.okText=t.okText??"",tt.cancelText=t.cancelText??"",tt.choices=[],tt.inputPlaceholder=t.placeholder??"",tt.inputValue=t.initial??"",tt.multiline=t.multiline===!0,tt.visible=!0,tt.resolve=n=>e(n===null?null:String(n))})}function Ls(t){tt.visible=!1,tt.resolve?.(t),tt.resolve=null}const fp={tabFileWorkbench:"文件工作台",tabFileWorkbenchDesc:"浏览、预览、搜索本地文件，并引用到当前会话",tabVSCode:"文件编辑器",tabVSCodeDesc:"浏览项目目录，多标签编辑代码并高亮语法",tabMenuOpenInEditor:"在文件编辑器中打开工作区",tabMenuNewEditor:"新建编辑器窗口",tabMenuAnotherEditor:"再开一个编辑器窗口",tabMenuFloat:"弹出为浮窗",tabMenuDefaultLabel:"默认打开",guideMenuAria:"更多打开方式",vsNoProject:"未选择项目目录",vsTreeLoading:"正在加载项目…",vsOpenFolder:"打开文件夹",vsFolderPath:"请输入项目目录绝对路径",vsSave:"保存",vsSaved:"已保存",vsUnsavedTitle:"未保存的更改",vsUnsavedMsg:"当前文件有未保存的更改，确定关闭吗？",vsCloseManyMsg:"有 {n} 个标签未保存，全部保存并关闭？",vsTooLarge:"文件过大：超过 8MB 编辑上限，请用系统程序打开",vsScrollLeft:"向左滚动标签",vsScrollRight:"向右滚动标签",vsReadonly:"只读",vsEmptyHint:"选择项目目录后，从左侧树打开文件开始编辑",vsLoading:"正在加载…",vsBrand:"文件编辑器",vsQuickAccess:"快捷方式",vsFormat:"格式化内容",vsFormatOk:"已格式化",vsFormatFail:"格式化失败：{msg}",vsMenuFile:"文件",vsSaveAs:"另存为…",vsSaveAsTitle:"另存为",vsFileName:"文件名",vsFileNamePlaceholder:"输入文件名，或粘贴绝对路径",vsFileType:"文件类型",vsFilterAll:"所有文件",vsFilterExt:"仅 {ext} 文件",vsSaveAsHint:"浏览到目标文件夹并填写文件名；双击列表中的文件可直接覆盖保存",vsSaveAsExists:"同名文件已存在，保存将覆盖它",vsSaveAsBlockedDirty:"{name} 已在编辑器中打开且有未保存改动，请先保存或关闭它",vsRecentProjects:"最近项目",vsRecentClearAll:"清空全部",vsRecentClearAllTitle:"清空全部最近项目",vsRecentClearAllConfirm:"确定要清空全部最近项目记录吗？此操作不可撤销。",vsRecentCleared:"已清空最近项目",vsRecentForgetTitle:"移除最近项目",vsRecentForgetConfirm:"确定要从最近项目中移除「{name}」吗？此操作不可撤销。",vsRecentForgot:"已移除 {name}",vsRemoveProject:"移出项目",vsRemoveProjectTitle:"移出项目",vsRemoveProjectConfirm:"确定将「{name}」移出项目吗？此操作会从最近项目中移除该目录，并关闭它的文件树（未保存的改动将丢失）。",vsProjectRemoved:"已移出项目",vsProjectGone:"项目目录已不存在，已从最近项目中移除",vsGitHistory:"提交记录",vsGitExpand:"展开提交记录",vsGitCollapse:"收起提交记录",vsGitRefresh:"刷新提交记录",vsGitFiles:"变更文件",vsGitFileDiff:"在新标签页打开此文件变更",vsQuickOpenPlaceholder:"搜索项目内文件（Ctrl+P）",vsLeftTabFiles:"文件",vsLeftTabSearch:"搜索",vsLeftTabGit:"版本控制",vsGitNoRepo:"当前目录不是 Git / SVN 仓库",vsUnfoldEditor:"展开编辑器",vsFoldEditor:"折叠编辑器",vsSearchNeedsProject:"请先打开项目文件夹再使用搜索",vsMenuRecent:"打开最近项目",vsMenuExtensions:"扩展",vsEmptyTitle:"打开一个文件夹开始编辑",vsGrepPlaceholder:"搜索内容（Enter 立即搜）",vsGrepScopePlaceholder:"仅在此文件夹下搜索，如 src/components",vsGrepScopeTitle:"搜索范围：留空 = 整个项目；填写项目内子目录路径可限定搜索范围",vsGrepCase:"区分大小写",vsGrepRegex:"使用正则",vsGrepSummary:"{files} 个文件中 {n} 条结果",vsGrepTruncated:"结果过多，已截断",vsGrepNoResult:"未找到结果",vsGrepOpenAt:"打开并跳到第 {ln} 行",vsSearchTitle:"搜索",vsGrepWholeWord:"全字匹配",vsGrepReplacePlaceholder:"替换",vsReplaceAll:"全部替换",vsReplacePreserveCase:"保留大小写",vsReplaceConfirm:"将把 {files} 个文件中的 {n} 处 “{q}” 替换为 “{r}”，此操作会直接改写磁盘文件且不可撤销。确定继续？",vsReplaceDone:"已在 {files} 个文件中替换 {n} 处",vsReplaceNone:"没有可替换的匹配项",vsReplaceRemoteUnsupported:"远端（ssh）根不支持跨文件批量替换",vsFilesToInclude:"包含的文件",vsFilesToIncludePlaceholder:"要搜索的文件，如 *.ts, src/**/README.md",vsFilesToIncludeTitle:"仅在这些 glob 命中的文件中搜索/替换（逗号分隔，相对项目根）。留空 = 不限。",vsFilesToExclude:"排除的文件",vsFilesToExcludePlaceholder:"要排除的文件或文件夹，如 **/node_modules, !*.min.js",vsFilesToExcludeTitle:"跳过这些 glob 命中的文件/文件夹（逗号分隔，相对项目根）。",vsClearAllResults:"清除所有结果",vsRefreshResults:"重新搜索",vsToggleReplace:"显示/隐藏替换",vsViewModeList:"列表",vsViewModeTree:"树",vsViewModeSwitchTitle:"在列表视图与树视图之间切换",vsSearchIndexing:"正在建立索引…",vsSearchNoResult:"没有匹配的文件",vsSearchTruncated:"结果较多，仅显示前若干条，请补充关键词",vsSaveAll:"全部保存",vsSavedAs:"已另存为 {path}",vsOverwriteMsg:"{path} 已存在，确定覆盖吗？",vsNoDirty:"没有需要保存的修改",vsAllSaved:"已保存 {n} 个文件",vsConflictTitle:"文件已被外部修改",vsConflictMsg:"{name} 在磁盘上已被修改。仍要用当前内容覆盖吗？",vsConflictMsgReload:"放弃对 {name} 的本地修改，改用磁盘上的版本？",vsConflictBadge:"外部已修改",vsReloadedExternal:"{name} 已被外部修改，已重新加载",vsSwitchLoseMsg:"有 {n} 个文件尚未保存，切换项目会丢失这些修改。确定继续吗？",vsReopenLoseMsg:"以其它编码重读会丢失当前未保存的修改，确定继续吗？",vsEncodingSwitched:"已按 {enc} 重新读取",vsBinaryHint:"这是二进制文件，无法以文本方式编辑",vsNewWindow:"新建编辑器窗口",vsFloatWindow:"浮动为独立窗口",vsNewTerminal:"新建终端",vsReplacedOldest:"编辑器窗口已满 8 个：已替换最早的窗口",vsNewWindowLimit:"无法新建编辑器窗口：请稍后重试",vsOpenExternal:"用系统程序打开",vsNoOpenFile:"没有打开的文件",vsTabClose:"关闭",vsTabCloseSave:"保存并关闭",vsTabCloseOthers:"关闭其他",vsTabCloseRight:"关闭右侧标签页",vsTabCloseAll:"关闭全部",terminalRestore:"还原终端",vsNewFile:"新建文件",vsNewFolder:"新建文件夹",vsNewFileName:"文件名",vsNewFolderName:"文件夹名",vsRename:"重命名",vsRenameName:"新名称",vsDelete:"删除",vsDeleteConfirm:"确定删除",vsRefresh:"刷新",vsCollapseAll:"折叠全部",vsExpandAll:"展开全部",vsExpandAllLimited:"目录较多，已展开前 {n} 个文件夹（继续展开会产生大量请求）",vsPickFolderTitle:"选择项目文件夹",vsComputer:"我的电脑",vsUp:"上级",vsEmptyDir:"此文件夹为空",vsPickInput:"选择此路径",vsCancel:"取消",vsPickConfirm:"选择此文件夹",vsNewFolderBtn:"新建文件夹",vsPickEnterHint:"双击文件夹进入；单击选中；“选择此文件夹”取高亮项，无高亮则取当前目录",menuCopyRelPath:"复制相对路径",menuCopyAbsPath:"复制绝对路径",vsAddToSession:"添加到会话",vsAddToSessionOk:"已添加到会话输入框",vsAddToSessionFail:"请先打开对话输入框",goUp:"返回上级",goBack:"后退",goForward:"前进",refreshList:"刷新资源列表",noFolder:"未打开文件夹",goSessionDir:"回到当前会话目录",closeTab:"关闭",clearSearch:"清除搜索",cancel:"取消",confirmOk:"确定",deleteTitle:"确认删除",searchScopeIn:"范围：",myComputer:"我的电脑",navHome:"主文件夹",navGallery:"图库",navThisPc:"此电脑",navQuickAccess:"快速访问",externalInjection:"外部注入",driveLabel:"本地磁盘 ({drive}:)",toastClose:"关闭提示",thisPcDevices:"设备和驱动器",driveCapacity:"{free} 可用，共 {total}",driveTotal:"总大小",driveFree:"可用空间",driveFs:"文件系统",driveTypeFixed:"本地磁盘",driveTypeRemovable:"可移动磁盘",emptyDrives:"（未检测到驱动器）",navExpand:"展开",navCollapse:"折叠",favoritePin:"已固定到快速访问",desktopEntry:"桌面",downloadEntry:"下载",documentEntry:"文档",pictureEntry:"图片",musicEntry:"音乐",videoEntry:"视频",workspaceEntry:"工作区",emptyDir:"（空）",colName:"名称",colSize:"大小",colType:"类型",colModified:"修改日期",typeFolder:"文件夹",typeFile:"文件",renameEntry:"重命名：",confirmDelete:'确认删除 "{name}" ？',brokenLink:"失效软链接",save:"保存",menuEdit:"编辑",txtEditorTitle:"编辑文本 · {name}",txtLoading:"加载中…",txtEditorSub:"文本编辑器",txtUnsaved:"未保存的更改",txtReadError:"读取失败：{msg}",txtDirty:"未保存",txtReadonly:"只读（工作区外）",txtPlaceholder:"在此输入文本…",txtChars:"字符",txtUnsavedTitle:"未保存的改动",txtUnsavedMsg:"该文件有未保存的改动，确定关闭？",txtSaved:"已保存",download:"下载",statusItemsCount:"{count} 个项目",searchTitle:"搜索文件名/内容",searchPlaceholder:"输入关键字…",search:"搜索",searching:"搜索中…",searchCase:"区分大小写",searchRegex:"正则表达式匹配",searchIdle:"在顶部搜索框输入关键字，实时匹配文件名与文件内容。",resultsCount:"{count} 个结果",resultsSuffixTruncated:"（已截断）",hitTitle:"右键在资源管理器中定位\\左键打开",matchContent:"内容匹配",searchReplaceAll:"批量替换",searchReplaceTitle:"确认批量替换",searchReplaceConfirm:"将在 {files} 个文件中替换 {count} 处匹配，此操作不可撤销，确定继续？",searchReplaceBusy:"正在替换…",searchReplaceDone:"已替换 {files} 个文件（{count} 处）",openFolderFirst:"请先打开文件夹",dirCreated:"目录已创建",fileCreated:"文件已创建",renamed:"已重命名",deleted:"已删除",workspaceOutside:"操作被拒绝：该操作仅限工作区内的文件/文件夹",errForbidden:"无权限或操作被拒绝（403）",errNotFound:"文件或目录不存在（404）",errNoRoot:"未打开文件夹：请先选择工作区目录（409）",errTooLarge:"数据过大，超出允许范围（413）",errServer:"服务端处理失败，请稍后重试（500）",errNetwork:"网络请求失败，请检查 host 连接",menuOpen:"打开",menuOpenExternal:"使用系统默认程序打开",menuOpenInEditor:"在文件编辑器中打开",menuCut:"剪切",menuCopy:"复制",menuRename:"重命名",menuDelete:"删除",menuCopyPath:"复制完整路径",menuProperties:"属性",menuCutDone:"已剪切到剪贴板",menuCopyDone:"已复制到剪贴板",menuOpened:"已调用系统程序打开",menuPathCopied:"路径已复制",menuPathCopyFail:"路径复制失败",menuRefresh:"刷新",menuView:"查看",menuSort:"排序方式",expShowNav:"显示导航栏",menuPaste:"粘贴",menuUpload:"上传文件",uploaded:"已上传 {count} 个文件",uploadFailed:"有 {count} 个文件上传失败",menuNew:"新建",menuNewFolder:"文件夹",menuNewFile:"文本文件",viewHuge:"超大图标",sshHosts:"SSH 主机",sshAddHost:"添加主机",sshCancel:"取消",sshName:"显示名",sshAddr:"地址（用户 @ 主机 : 端口）",sshUser:"用户名",sshHostAddr:"主机地址",sshAuth:"认证方式",sshAuthPassword:"口令认证",sshAuthKey:"私钥认证",sshPassword:"SSH 口令",sshKeyPath:"私钥文件路径（支持 ~）",sshSaveAdd:"添加",sshTest:"测试",sshTestConn:"测试",sshDelete:"删除",sshDeleteConfirm:"再点一次确认删除",sshTestOk:"SSH 连接成功",sshTestFail:"SSH 连接失败",sshRequired:"主机地址与用户名为必填项",sshAddSuccess:"主机已添加",sshNewHost:"添加 SSH 主机",sshEdit:"编辑",sshEditTitle:"编辑 SSH 主机",sshHostCaption:"连接远程服务器，浏览文件与登录终端",sshUpdateSuccess:"主机已更新",sshSaveEdit:"保存修改",sshKeepSecret:"（留空则沿用原口令）",sshNoHosts:"还没有主机，点「添加主机」开始",accTitle:"账号管理",accCaption:"管理 Git / SVN 登录凭据，执行命令时自动注入",accListTitle:"已保存账号",accAdd:"添加账号",accNewTitle:"添加账号",accEditTitle:"编辑账号",accEdit:"编辑",accKind:"类型",accKindGit:"Git",accKindSvn:"SVN",accName:"显示名",accHost:"主机",accHostPlaceholder:"例如 github.com 或 113.57.110.41:804",accUrl:"仓库地址（选填）",accUrlPlaceholder:"https://github.com/owner/repo.git",accUrlHint:"留空 = 对该主机的全部仓库生效；填写后按地址前缀匹配，用于同主机多账号。「测试连通」与「写入系统」都需要它。",accUsername:"用户名",accSecret:"口令 / 访问令牌",accSecretKind:"凭据类型",accSecretPassword:"口令",accSecretToken:"访问令牌",accKeepSecret:"（留空则沿用已存口令）",accNote:"备注",accSave:"保存",accCancel:"取消",accDelete:"删除",accDeleteConfirm:"再点一次确认删除",accTest:"测试连通",accTestOk:"连通正常",accTestFail:"连接失败",accApply:"写入系统",accApplyOk:"已写入系统",accApplyHint:"写入系统凭据存储后，命令行与其它 GUI 工具也免密。",accSaved:"账号已保存",accDeleted:"账号已删除",accRequired:"主机与用户名为必填",accSecretRequired:"请填写口令或访问令牌",accEmpty:"还没有账号，点「添加账号」开始",accHasSecret:"已保存凭据",accNoSecret:"未保存凭据",accAllRepos:"该主机全部仓库",accEffective:"当前仓库将使用",accEffectiveNone:"当前仓库无匹配账号（将走系统凭据 / svn 自身缓存）",accCopyIdent:"复制账号标识",accMatchHint:"按主机或仓库地址前缀匹配，未命中时使用系统凭据",accUseCurrent:"用当前仓库填充",accBack:"返回列表",accPick:"从左侧选择一个账号，或点「添加账号」新建",accTip:"凭据仅存于本机插件配置，不会外发；口令不回显，留空即沿用原值。",sshStatusOnline:"已连接",sshStatusOffline:"未连接",sshStatusChecking:"检测中…",sshStatusUnknown:"尚未检测",remoteNoExternal:"远端文件无法用本机程序打开",remoteNoArchive:"远端目录暂不支持压缩 / 解压",remoteNoTerminal:"找不到该远端主机的配置，已在本机目录启动终端（可先在设置里添加该 SSH 主机）",remoteCachedHint:"远端文件已下载到本机临时文件后打开（改动不会回传远端）",sshNavGroup:"SSH 远程",sshEmpty:"尚未添加主机（在此右键添加，或用「新建 ▾」）",viewLarge:"大图标",viewMedium:"中等图标",viewSmall:"小图标",viewList:"列表",viewDetails:"详细信息",viewContent:"内容",viewTiles:"平铺",showExtensions:"显示文件扩展名",cmdPreview:"预览",sortName:"名称",sortModified:"修改日期",sortType:"类型",sortSize:"大小",moved:"已移动",copied:"已复制",createdFolder:"已新建文件夹",createdFile:"已新建文件",newFolderName:"新建文件夹",newFileName:"新建文本文件",propName:"名称",propPath:"路径",propKind:"类型",propSize:"大小",propModified:"修改日期",settings:"设置",settingsSubtitle:"个性化工作台的外观与行为",retry:"重试",taskSrcMissing:"源文件不存在（可能已被移动或删除），已刷新列表：{name}",menuMore:"更多",settingsGroupFiles:"文件",settingsGroupAppearance:"外观",autoSave:"自动保存（编辑停顿 1 秒后写入）",vsFindPlaceholder:"查找",vsReplacePlaceholder:"替换为",vsFindNext:"下一个（Enter）",vsFindPrev:"上一个（Shift+Enter）",vsFindReplace:"替换（Enter）",vsFindReplaceAll:"全部替换",vsFindToggleReplace:"展开 / 收起替换",vsFindClose:"关闭（Esc）",vsFindNoMatch:"无结果",vsFindWord:"全字匹配",vsMenuLocalDiff:"查看本地改动",vsLocalDiffTitle:"未保存改动",vsLocalDiffTooBig:"改动过大，无法生成对比",vsMultiCursorHint:"提示：Alt + 点击 可添加多光标",vsActHide:"隐藏「{name}」",vsActBarBottom:"活动栏移到底部",vsActBarTop:"活动栏移到顶部",vsSideRight:"侧栏移到右侧",vsSideLeft:"侧栏移到左侧",vsMinimap:"编辑器缩略图",vsCloseSave:"保存并关闭",vsCloseDiscard:"不保存关闭",vsCloseSaveAll:"全部保存并关闭",vsCloseDiscardAll:"全部不保存关闭",showHidden:"显示隐藏文件",allowOutsideRoot:"允许操作工作区外的文件 (root 开关)",defaultView:"默认视图",themeMode:"主题",themeAuto:"跟随系统",themeDark:"深色",themeLight:"浅色",accentColor:"强调色",accentReset:"恢复默认",fontFamily:"字体",fontDefault:"默认",fontOptionYahei:"微软雅黑",fontOptionConsolas:"Consolas（等宽）",fontOptionCourier:"Courier New（等宽）",fontOptionGeorgia:"Georgia（衬线）",fontSize:"字号",fontSizeSm:"小",fontSizeMd:"标准",fontSizeLg:"大",fontSizeXl:"特大",shortcutHelp:"快捷键",shortcutHint:"按 ? 随时唤起，按 Esc 关闭",shortcutGlobal:"全局",shortcutFileList:"文件列表",shGlobalHelp:"打开快捷键帮助",shListSelectAll:"全选",shListCopy:"复制",shListCut:"剪切",shListPaste:"粘贴",shListFilter:"聚焦筛选框",shListNewFolder:"新建文件夹",shListDelete:"删除（含确认）",shListRename:"重命名",shListRefresh:"刷新",shListOpen:"打开文件 / 进入目录",shListMove:"移动选中",shListUp:"返回上级目录",shListBack:"浏览后退",shListForward:"浏览前进",undo:"撤销",findReplacePlaceholder:"替换为…",favorites:"收藏",favoriteAdd:"收藏",favoriteRemove:"取消收藏",favoriteAdded:"已收藏",favoriteRemoved:"已取消收藏",emptyFavorites:"（暂无收藏）",menuCompress:"压缩为 .zip",compressed:"已压缩",menuExtract:"解压到当前目录",extracted:"已解压 {count} 个文件",extractFailed:"解压失败",selectedCount:"{count} 项已选",menuMultiDelete:"删除所选 ({count})",menuMultiCut:"剪切所选",menuMultiCopy:"复制所选",menuMultiCompress:"压缩所选",filterPlaceholder:"筛选当前目录…",filterEmpty:"（无匹配）",taskFabTitle:"后台任务",taskPanelTitle:"后台任务",taskRunning:"运行中",taskHistory:"历史",taskClearFinished:"清除已完成",taskClearAll:"清空",taskEmpty:"暂无任务",taskViewLog:"查看日志",taskLogTitle:"任务日志",taskClose:"关闭",taskFieldTarget:"目标",taskStatusRunning:"进行中",taskStatusDone:"完成",taskStatusError:"失败",taskFieldFile:"文件",taskStartTime:"开始",taskEndTime:"结束",taskTotalSpent:"总耗时",taskStepSpent:"耗时",taskRunningLive:"运行中",taskFieldType:"类型",taskMetaFiles:"{count} 项 · {size}",taskArchive:"归档",taskArchiveOpen:"查看归档",taskArchiveTitle:"任务归档",taskArchiveNone:"暂无归档",taskArchiveRecords:"{count} 条记录",taskUploading:"上传文件",taskCompressing:"压缩",taskExtracting:"解压",taskCopying:"复制",taskMoving:"移动",taskDeleting:"删除",taskRenaming:"重命名",gitMenu:"Git",gitAdd:"暂存 (git add)",gitCommit:"提交 (git commit)",gitCommitTitle:"Git 提交",gitCommitPlaceholder:"输入提交信息…",gitCommitted:"已提交",gitAdded:"已暂存",gitDiscard:"还原改动",gitDiscardTitle:"确认还原",gitDiscardMsg:'丢弃 "{name}" 的工作区改动（git checkout --）？',gitDiscarded:"已还原",gitDiff:"查看改动",gitDiffTitle:"Git 改动",gitDiffEmpty:"（无可用改动）",gitDiffClose:"关闭",gitBadgeUntracked:"未跟踪的新文件",gitBadgeAdded:"新添加到暂存区",gitBadgeModified:"已修改",gitBadgeDeleted:"已删除",gitNotRepo:"不在 git 仓库",gitNoChanges:"没有已暂存的改动，无法提交",gitLoading:"加载中…",gitCommitFiles:"将提交 {n} 个文件：",gitCommitConfirm:"确认提交",gitConfig:"配置身份",gitConfigTitle:"Git 身份配置",gitConfigName:"用户名（user.name）",gitConfigNamePlaceholder:"例如：yourname",gitConfigEmail:"邮箱（user.email）",gitConfigEmailPlaceholder:"例如：you@example.com",gitConfigSave:"保存",gitConfigSaved:"已保存 git 全局身份配置",gitPanel:"打开 Git 面板",gitIgnore:"忽略（加入 .gitignore）",gitIgnored:"已忽略",gitPanelTitle:"Git 管理",gitFetch:"获取",gitPull:"拉取",gitPush:"推送",gitLoadMore:"加载更多",gitDiffTruncated:"差异过大，仅显示前 5000 行（完整内容可在编辑器查看）",gitCopyName:"复制名称",gitCopyUrl:"复制 URL",gitCopyMsg:"复制说明",gitCloneHere:"克隆仓库…",gitStatusColon:"当前分支：{branch}",gitLocalRepo:"本地仓库：",gitTabStatus:"更改",gitTabLog:"提交记录",gitTabBranch:"分支",gitTabStash:"暂存区",gitTabCli:"命令",gitClean:"工作区干净，没有待提交的改动",gitAddShort:"暂存",gitUnstage:"取消暂存",gitUnstaged:"已取消暂存",gitStageAll:"全部暂存",gitGroupStaged:"已暂存的更改",gitGroupUnstaged:"更改",gitGroupUntracked:"未跟踪",gitLogEmpty:"（暂无提交记录）",gitBranchNew:"新分支名称",gitCheckout:"切换",gitDelete:"删除",gitBranchCreated:"已创建并切换到分支 {name}",gitBranchDeleteMsg:"确定删除分支 {name}？",gitStashPlaceholder:"暂存说明（可选）",gitStashCreate:"创建暂存",gitStashEmpty:"（暂无暂存记录）",gitStashApply:"应用",gitStashPop:"弹出",gitStashDrop:"删除",gitStashClear:"清空暂存区",gitStashCreated:"已创建暂存",gitStashApplied:"已应用暂存",gitStashPopped:"已弹出暂存",gitStashDropped:"已删除该条暂存",gitStashCleared:"已清空暂存区",gitStashDropMsg:"确定删除暂存 {ref}？",gitStashClearMsg:"确定清空全部暂存记录？此操作不可恢复。",gitCliPlaceholder:"输入 git 子命令，例如 status / log --oneline -5",gitRailChanges:"更改",gitRailHistory:"提交历史",gitRailBranches:"分支",gitRailTags:"标签",gitRailRemotes:"远程",gitRailStash:"储藏",gitRailCli:"命令台",gitHeadDetached:"分离头指针",gitNoUpstream:"无上游分支",gitAheadBehind:"领先 {ahead} · 落后 {behind}",gitSelectFile:"在左侧选择一个文件查看改动",gitDiffUntrackedHint:"未跟踪的新文件：暂存后可查看与 HEAD 的差异",gitCommitMsgPlaceholder:"提交说明…",gitFileHistory:"文件历史",gitBlame:"逐行追溯",gitBlameAuthor:"作者",gitBlameDate:"日期",gitBlameLine:"行",gitBlameEmpty:"（无法读取逐行追溯）",gitFileHistoryEmpty:"（该文件暂无历史）",gitBack:"返回",gitHistoryAll:"全部分支",gitHistoryCurrent:"仅当前分支",gitSelectCommit:"在左侧选择一个提交查看详情",gitCommitDetail:"提交详情",gitCommitHash:"提交哈希",gitCommitAuthor:"作者",gitCommitDate:"提交时间",gitCommitParents:"父提交",gitCommitRefs:"引用",gitCommitChangedFiles:"变更文件（{n}）",gitCommitNoFiles:"（无文件变更）",gitCopyHash:"复制哈希",gitCopyPath:"复制路径",gitCopied:"已复制到剪贴板",gitReset:"重置到此提交",gitResetSoft:"软重置（改动全部保留在暂存区）",gitResetMixed:"混合重置（改动保留在工作区）",gitResetHard:"硬重置（丢弃改动）",gitResetHardMsg:"硬重置会丢弃工作区与暂存区的全部改动，确定继续？",gitResetDone:"已重置到 {hash}",gitRevert:"还原此提交",gitRevertDone:"已还原 {hash}",gitCherryPick:"拣选到当前分支",gitCherryPicked:"已拣选 {hash}",gitCheckoutCommit:"检出此提交",gitCheckoutCommitMsg:"将进入分离头指针状态，确定检出 {hash}？",gitBranchFrom:"新建分支指向此提交",gitBranchFromTitle:"从此提交新建分支",gitBranchFromPlaceholder:"新分支名称",gitBranchRename:"重命名",gitBranchRenameTitle:"重命名当前分支",gitBranchRenamePlaceholder:"新的分支名",gitBranchRenamed:"已重命名为 {name}",gitMergeIntoCurrent:"合并到当前分支",gitMergeDone:"已合并 {name}",gitPushBranch:"推送",gitPushed:"已推送 {name}",gitBranchCurrent:"当前",gitBranchRemoteGroup:"远程分支",gitBranchLocalGroup:"本地分支",gitBranchCreateAndSwitch:"创建并切换",gitTagNew:"新建标签",gitTagNamePlaceholder:"标签名，如 v1.0.0",gitTagTargetPlaceholder:"目标提交（留空为 HEAD）",gitTagMessagePlaceholder:"说明（填写即创建附注标签）",gitTagCreate:"创建",gitTagEmpty:"（暂无标签）",gitTagAnnotated:"附注",gitView:"查看",gitTagCreated:"已创建标签 {name}",gitTagDeleteMsg:"确定删除标签 {name}？",gitTagDeleted:"已删除标签 {name}",gitTagPushed:"已推送标签 {name}",gitTagFetchAll:"从远程获取标签",gitTagFetchAllDone:"已从远程获取标签",gitTagRemoteOnly:"远程",gitTagPull:"拉取",gitTagPulled:"已拉取标签 {name}",gitTagNoRemote:"无远程仓库，无法获取或发布标签",gitCommitViewTitle:"提交对比",gitCommitOpenDiff:"查看 {path} 的差异",gitReleaseBtn:"发布新版本",gitReleaseTitle:"发布新版本（创建附注标签并推送到远程）",gitReleaseName:"版本标签名",gitReleaseTarget:"基于提交（留空为 HEAD）",gitReleaseMsg:"版本说明（必填）",gitReleasePublish:"创建并发布",gitReleaseRequireMsg:"发布版本需填写版本说明",gitReleased:"已发布 {name} 到远程",gitReleaseGhSkip:"GitHub Release 未创建：{reason}",gitRefresh:"刷新",gitTabTags:"标签",gitTabReleases:"版本",gitReleaseChooseTag:"选择已有标签",gitReleaseNotesPlaceholder:"版本说明（将显示在 Release 页面）",gitReleaseCreateForTag:"创建 Release",gitReleaseCreated:"Release 已创建：{url}",gitReleaseLoadSkip:"版本列表不可用：{reason}",gitReleaseEmpty:"暂无版本记录",gitReleaseOpen:"打开",gitRemoteNamePlaceholder:"名称，如 origin",gitRemoteUrlPlaceholder:"地址，如 https://github.com/user/repo.git",gitRemoteAdd:"添加远程",gitRemoteEmpty:"（暂无远程仓库）",gitRemoteAdded:"已添加远程 {name}",gitRemoteRemoveMsg:"确定移除远程 {name}？",gitRemoteRemoved:"已移除远程 {name}",gitRemoteSetUrl:"修改地址",gitRemoteUrlTitle:"修改远程地址",gitRemoteUrlSaved:"已更新远程地址",gitStashView:"查看内容",gitStashNew:"创建储藏",gitStashNone:"（工作区干净，无内容可储藏）",gitOpRunning:"执行中…",gitOpFailed:"操作失败",svnMenu:"SVN",svnPanel:"打开 SVN 管理",svnPanelTitle:"SVN 管理",svnRepo:"工作副本：",svnUpdate:"更新",svnCommitBtn:"提交",svnAdd:"加入版本控制",svnAdded:"已加入版本控制",svnIgnore:"忽略（svn:ignore）",svnRevert:"还原",svnCleanup:"清理",svnResolve:"解决冲突",svnDiff:"比较差异",svnBlame:"追溯",svnCheckout:"检出",svnFailed:"SVN 命令执行失败",svnRailChanges:"本地修改",svnRailLog:"提交日志",svnNoUrl:"未读取到仓库地址",svnRunning:"正在执行…",svnRefresh:"刷新",svnLoading:"加载中…",svnSelectAll:"全选",svnModifiedCount:"本地修改（{n}）",svnNoChanges:"无本地修改",svnCommitPlaceholder:"填写提交说明…",svnCommitSelected:"将提交选中的 {n} 个文件",svnCommitAll:"将提交全部本地修改",svnOutput:"命令输出",svnNoOutput:"（无输出）",svnNoCli:"未检测到 svn 命令行，请先安装 Subversion",svnDone:"SVN 命令已完成",svnUpdateSummaryFrom:"更新完成：r{from} → r{to}，{n} 个条目变更",svnUpdateSummary:"更新完成：{n} 个条目变更，当前版本 r{to}",svnAlreadyLatest:"已是最新版本 r{rev}，没有需要更新的内容",svnLogEmpty:"暂无日志",svnLogToggle:"点击展开 / 收起该次提交详情",svnLogNoPaths:"该提交没有变更文件记录",svnLogOpenDiff:"查看该文件在此次提交中的对比",svnDiffTitle:"差异对比 · ",svnBlameTitle:"追溯 · ",svnCheckoutUrlPlaceholder:"仓库地址（如 https://svn.example.com/svn/repo）",svnCheckoutTargetPlaceholder:"检出到本地目录",repoCloneTitle:"克隆 / 检出仓库",repoCloneKindGit:"Git",repoCloneKindSvn:"SVN",repoCloneTitleGit:"克隆 Git 仓库",repoCloneTitleSvn:"检出 SVN 仓库",repoCloneCaptionGit:"从远程仓库克隆完整副本到本地",repoCloneCaptionSvn:"从 SVN 服务器检出指定版本到本地",repoCloneTargetGit:"将克隆到",repoCloneTargetSvn:"将检出到",repoCloneUrl:"仓库地址",repoCloneUrlGitPlaceholder:"仓库地址（如 https://github.com/owner/repo.git）",repoCloneDir:"目标目录",repoCloneDirPlaceholder:"要克隆到的父目录",repoCloneBrowse:"浏览…",repoCloneName:"子目录名称",repoCloneNamePlaceholder:"留空则按地址推断",repoCloneShallow:"浅克隆（仅最新一次提交）",repoCloneShallowHint:"更快更小，但不含历史",repoCloneRevision:"版本号",repoCloneRevisionPlaceholder:"留空为最新（HEAD）",repoCloneAccount:"账号",repoCloneAccountAuto:"自动匹配（按地址）",repoCloneAccountNew:"新建账号…",repoCloneTargetEmpty:"请填写仓库地址与目标目录",repoCloneRunningGit:"正在克隆 Git 仓库…",repoCloneRunningSvn:"正在检出 SVN 仓库…",repoCloneElapsed:"已用时 {s} 秒",repoCloneKeepOpen:"保持窗口打开，完成后将收到通知。",repoCloneActionGit:"克隆",repoCloneActionSvn:"检出",repoCloneDoneGit:"已克隆仓库：{name}",repoCloneDoneSvn:"已检出仓库：{name}",menuCloneGit:"克隆 Git 仓库…",menuCloneSvn:"检出 SVN 仓库…",svnNotRepoTip:"当前目录不是 SVN 工作副本，可填写上方信息检出仓库。",svnCheckedOut:"已检出仓库",svnStAdded:"已添加",svnStModified:"已修改",svnStDeleted:"已删除",svnStReplaced:"已替换",svnStConflicted:"冲突",svnStMissing:"缺失",svnStObstructed:"受阻",svnStUnversioned:"未版本控制",svnStIgnored:"已忽略",svnStLocked:"已锁定",saveConfig:"保存",recycleBin:"回收站",recycleRestore:"恢复",recycleDelete:"彻底删除",recycleEmpty:"清空回收站",recycleEmptyConfirm:"确定清空回收站？此操作不可恢复。",recycleDeleteConfirm:"确定彻底删除“{name}”？此操作不可恢复。",recycleDeleteConfirmMulti:"确定彻底删除选中的 {count} 项？此操作不可恢复。",recycleEmptying:"正在清空回收站…",recycleEmptyProgress:"清空回收站：剩余 {count} 项",recycleEmptyDone:"回收站已清空",recycleEmptyList:"回收站是空的",recycleRestored:"已恢复到原位置",recycledDeleted:"已彻底删除",terminal:"终端",terminalTitle:"终端",terminalMinimize:"最小化到任务条",terminalCloseTitle:"关闭终端",terminalClose:"关闭",terminalNew:"新建终端",terminalShellSwitch:"切换默认 shell（cmd / powershell）",terminalAdmin:"管理员",terminalAdminNormal:"普通权限",terminalAdminOn:"当前以管理员身份运行：终端内命令拥有管理员权限",terminalAdminOff:"当前为普通权限：终端内命令无法修改系统级设置",terminalAdminHint:"以「管理员身份运行」启动 dsh web，面板内所有终端即拥有管理员权限（终端子进程继承宿主进程权限）。",terminalClear:"清屏",terminalResizeTitle:"拖动缩放终端",terminalDockDragTitle:"点击展开 · 拖动移动 · 右键菜单",terminalDockSessions:"已最小化的终端",terminalDockCloseAll:"全部关闭",terminalTab:"{n}",scrollLeft:"向左滚动",scrollRight:"向右滚动",termFontSmaller:"减小字号",termFontLarger:"增大字号",termInputFailed:"终端输入发送失败：{msg}",termSshBadge:"该终端已登录到远端 SSH 主机",termSshReconnect:"重连",termSshReconnectTitle:"重新登录远端（用已保存的口令 / 密钥自动登录）",termSearchPlaceholder:"在终端输出中搜索…",termSearchCase:"区分大小写",termSearchPrev:"上一个",termSearchNext:"下一个",termSearchClose:"关闭搜索",termCopyHint:"Ctrl+C 复制 · Ctrl+V 粘贴 · Ctrl+F 搜索",menuDownload:"下载文件",menuOpenTerminal:"在终端打开",menuSubagent:"用子代理处理",menuNewSubagent:"新建子代理对话",subagentAsk:"希望子代理做什么？",subagentAskPlaceholder:"描述任务（可留空，稍后在子代理会话中继续）",subagentSpawned:"已在官方子代理会话中打开",subagentFailed:"子代理发起失败",statusDrivesCount:"{count} 个驱动器",statusLoading:"加载中…",statusSearching:"搜索中…",statusTasks:"后台任务",statusTasksRunning:"{count} 个后台任务",statusTermRestore:"点击还原终端窗口",pmTitle:"扩展",pmManage:"管理",pmSort:"排序",pmSortInstall:"按安装次序",pmSortName:"按名称",pmSortSource:"按来源",pmInstalled:"已安装",pmSearchPlaceholder:"在已安装中搜索",pmImportFromFile:"从本地文件导入…",pmImportFromUrl:"从 URL 导入…",pmEnableAll:"全部启用",pmDisableAll:"全部禁用",pmEnable:"启用",pmDisable:"禁用",pmRemove:"移除插件",pmMoreActions:"更多操作",pmPull:"拉取",pmPulling:"…",pmUrlPlaceholder:"https://example.com/plugin.js",srcBuiltin:"内置",srcFile:"本地",srcUrl:"URL",pmEmptyWithQuery:"没有匹配 “{q}” 的插件<br>换个关键词，或用右上「···」导入",pmEmptyNoPlugins:"还没有插件<br>用右上「···」从本地文件或 URL 导入",pmImportFailed:"导入 {name} 失败：{msg}",pmUrlImported:"已从 URL 导入并启用",pmUrlImportFailed:"URL 导入失败：{msg}",pmNeedsProject:"已启用 · 打开项目目录后在侧边栏显示",vsExtNeedProject:"{n} 个扩展已启用，打开项目目录后显示在侧边栏",pmCheckEmpty:"文件内容为空。",pmCheckNotPlugin:"这不是插件文件：缺少 __ModuleLoader__ 登记或 activityBar 注册调用。",pmCheckNeedsHost:"此插件需要宿主 API v{need}，当前工作台为 v{have}，请升级后重试。",pmCheckNoContrib:"插件加载后未注册任何贡献点，已回滚。请检查插件是否适配本工作台 API。",pmRestoreFailed:"恢复插件 {name} 失败：{msg}",pmEnableFailed:"启用 {name} 失败：{msg}",pmReloadRequired:"{n} 个插件已启用但未能热加载，需要重新加载窗口。",pmReloadNow:"重新加载",pmReloadDismiss:"暂不处理"},Gr={tabFileWorkbench:"File Workbench",tabFileWorkbenchDesc:"Browse, preview, and search local files, then reference them to the session",tabVSCode:"File Editor",tabVSCodeDesc:"Open a code editor in the right sidebar: browse project tree, multi-tab editing, syntax highlight",tabMenuOpenInEditor:"Open Workspace in File Editor",tabMenuNewEditor:"New Editor Window",tabMenuAnotherEditor:"Open Another Editor Window",tabMenuFloat:"Open as Floating Window",tabMenuDefaultLabel:"Open by default",guideMenuAria:"More ways to open",vsNoProject:"No project folder selected",vsTreeLoading:"Loading project…",vsOpenFolder:"Open Folder",vsFolderPath:"Enter the absolute path of the project folder",vsSave:"Save",vsSaved:"Saved",vsUnsavedTitle:"Unsaved Changes",vsUnsavedMsg:"This file has unsaved changes. Close it anyway?",vsCloseManyMsg:"{n} unsaved tab(s). Save all and close?",vsTooLarge:"File too large: over the 8MB editing limit. Open it with the system app instead",vsScrollLeft:"Scroll tabs left",vsScrollRight:"Scroll tabs right",vsReadonly:"Read-only",vsEmptyHint:"Pick a project folder, then open a file from the left tree to start editing",vsLoading:"Loading…",vsBrand:"File Editor",vsQuickAccess:"Quick Access",vsFormat:"Format Content",vsFormatOk:"Formatted",vsFormatFail:"Format failed: {msg}",vsMenuFile:"File",vsSaveAs:"Save As…",vsSaveAsTitle:"Save As",vsFileName:"File name",vsFileNamePlaceholder:"File name, or paste an absolute path",vsFileType:"File type",vsFilterAll:"All files",vsFilterExt:"{ext} files only",vsSaveAsHint:"Browse to a folder and enter a file name; double-click a listed file to overwrite it directly",vsSaveAsExists:"A file with this name already exists and will be overwritten",vsSaveAsBlockedDirty:"{name} is open in the editor with unsaved changes — save or close it first",vsRecentProjects:"Recent Projects",vsRecentClearAll:"Clear All",vsRecentClearAllTitle:"Clear All Recent Projects",vsRecentClearAllConfirm:"Clear all recent project records? This cannot be undone.",vsRecentCleared:"Recent projects cleared",vsRecentForgetTitle:"Remove from recent projects",vsRecentForgetConfirm:'Remove "{name}" from recent projects? This cannot be undone.',vsRecentForgot:"Removed {name}",vsRemoveProject:"Remove from Project",vsRemoveProjectTitle:"Remove from Project",vsRemoveProjectConfirm:'Remove "{name}" from projects? This removes it from recent projects and closes its file tree (unsaved changes will be lost).',vsProjectRemoved:"Removed from project",vsProjectGone:"Project folder no longer exists; removed from recent projects",vsGitHistory:"History",vsGitExpand:"Show commit history",vsGitCollapse:"Collapse commit history",vsGitRefresh:"Refresh history",vsGitFiles:"Changed files",vsGitFileDiff:"Open this change in a new tab",vsQuickOpenPlaceholder:"Search files by name (Ctrl+P)",vsLeftTabFiles:"Files",vsLeftTabSearch:"Search",vsLeftTabGit:"Version Control",vsGitNoRepo:"This folder is not a Git / SVN repository",vsUnfoldEditor:"Show editor",vsFoldEditor:"Hide editor",vsSearchNeedsProject:"Open a project folder first to use search",vsMenuRecent:"Open Recent",vsMenuExtensions:"Extensions",vsEmptyTitle:"Open a folder to start editing",vsGrepPlaceholder:"Search in files (Enter to run)",vsGrepScopePlaceholder:"Search only in folder, e.g. src/components",vsGrepScopeTitle:"Search scope: empty = whole project; enter a project subfolder path to narrow the search",vsGrepCase:"Match case",vsGrepRegex:"Use regex",vsGrepSummary:"{n} results in {files} files",vsGrepTruncated:"Too many results, truncated",vsGrepNoResult:"No results found",vsGrepOpenAt:"Open and go to line {ln}",vsSearchTitle:"Search",vsGrepWholeWord:"Match whole word",vsGrepReplacePlaceholder:"Replace",vsReplaceAll:"Replace All",vsReplacePreserveCase:"Preserve case",vsReplaceConfirm:"This will replace {n} occurrences of “{q}” with “{r}” across {files} file(s), rewriting files on disk with no undo. Continue?",vsReplaceDone:"Replaced {n} occurrence(s) in {files} file(s)",vsReplaceNone:"Nothing to replace",vsReplaceRemoteUnsupported:"Cross-file replace is not supported on remote (ssh) roots",vsFilesToInclude:"files to include",vsFilesToIncludePlaceholder:"files to search, e.g. *.ts, src/**/README.md",vsFilesToIncludeTitle:"Only search/replace in files matching these globs (comma-separated, relative to project root). Empty = all.",vsFilesToExclude:"files to exclude",vsFilesToExcludePlaceholder:"files or folders to skip, e.g. **/node_modules, !*.min.js",vsFilesToExcludeTitle:"Skip files/folders matching these globs (comma-separated, relative to project root).",vsClearAllResults:"Clear All Results",vsRefreshResults:"Search Again",vsToggleReplace:"Show / Hide Replace",vsViewModeList:"List",vsViewModeTree:"Tree",vsViewModeSwitchTitle:"Switch between list and tree view",vsSearchIndexing:"Indexing…",vsSearchNoResult:"No matching files",vsSearchTruncated:"Lots of matches — showing the first few, refine your keywords",vsSaveAll:"Save All",vsSavedAs:"Saved as {path}",vsOverwriteMsg:"{path} already exists. Overwrite it?",vsNoDirty:"No changes to save",vsAllSaved:"Saved {n} file(s)",vsConflictTitle:"File Changed on Disk",vsConflictMsg:"{name} has changed on disk since it was opened. Overwrite it with your version?",vsConflictMsgReload:"Discard your local changes to {name} and reload from disk?",vsConflictBadge:"Changed on disk",vsReloadedExternal:"{name} changed on disk and has been reloaded",vsSwitchLoseMsg:"{n} file(s) have unsaved changes. Switching projects will discard them. Continue?",vsReopenLoseMsg:"Reopening with another encoding will discard unsaved changes. Continue?",vsEncodingSwitched:"Reopened as {enc}",vsBinaryHint:"This is a binary file and cannot be edited as text",vsNewWindow:"New Editor Window",vsFloatWindow:"Float as Separate Window",vsNewTerminal:"New Terminal",vsReplacedOldest:"Editor window limit (8) reached: the earliest window was replaced",vsNewWindowLimit:"Could not open a new editor window. Please try again.",vsOpenExternal:"Open with system app",vsNoOpenFile:"No open files",vsTabClose:"Close",vsTabCloseSave:"Save and Close",vsTabCloseOthers:"Close Others",vsTabCloseRight:"Close Tabs to the Right",vsTabCloseAll:"Close All",terminalRestore:"Restore terminal",vsNewFile:"New File",vsNewFolder:"New Folder",vsNewFileName:"File name",vsNewFolderName:"Folder name",vsRename:"Rename",vsRenameName:"New name",vsDelete:"Delete",vsDeleteConfirm:"Delete",vsRefresh:"Refresh",vsCollapseAll:"Collapse All",vsExpandAll:"Expand All",vsExpandAllLimited:"Many folders — expanded the first {n} (expanding further would issue too many requests)",vsPickFolderTitle:"Pick Project Folder",vsComputer:"My Computer",vsUp:"Up",vsEmptyDir:"This folder is empty",vsPickInput:"Use this path",vsCancel:"Cancel",vsPickConfirm:"Select This Folder",vsNewFolderBtn:"New Folder",vsPickEnterHint:"Double-click a folder to enter; single click selects it; “Select This Folder” picks the highlighted folder (or the current one)",menuCopyRelPath:"Copy relative path",menuCopyAbsPath:"Copy absolute path",vsAddToSession:"Add to Session",vsAddToSessionOk:"Added to the session input",vsAddToSessionFail:"Open a conversation input first",goUp:"Go Up",goBack:"Back",goForward:"Forward",refreshList:"Refresh resource list",noFolder:"No folder open",goSessionDir:"Go to current session folder",closeTab:"Close",clearSearch:"Clear search",cancel:"Cancel",confirmOk:"OK",deleteTitle:"Confirm delete",searchScopeIn:"In scope: ",myComputer:"My Computer",navHome:"Home",navGallery:"Gallery",navThisPc:"This PC",navQuickAccess:"Quick access",externalInjection:"External injections",driveLabel:"Local Disk ({drive}:)",toastClose:"Close notification",thisPcDevices:"Devices and drives",driveCapacity:"{free} free of {total}",driveTotal:"Total size",driveFree:"Free space",driveFs:"File system",driveTypeFixed:"Local Disk",driveTypeRemovable:"Removable Disk",emptyDrives:"(No drives detected)",navExpand:"Expand",navCollapse:"Collapse",favoritePin:"Pinned to Quick access",desktopEntry:"Desktop",downloadEntry:"Downloads",documentEntry:"Documents",pictureEntry:"Pictures",musicEntry:"Music",videoEntry:"Videos",workspaceEntry:"Workspace",emptyDir:"(empty)",colName:"Name",colSize:"Size",colType:"Type",colModified:"Date modified",typeFolder:"Folder",typeFile:"File",renameEntry:"Rename:",confirmDelete:'Delete "{name}"?',brokenLink:"Broken symlink",save:"Save",menuEdit:"Edit",txtEditorTitle:"Edit Text · {name}",txtLoading:"Loading…",txtEditorSub:"Text editor",txtUnsaved:"Unsaved changes",txtReadError:"Failed to read: {msg}",txtDirty:"Unsaved",txtReadonly:"Read-only (outside workspace)",txtPlaceholder:"Type text here…",txtChars:"chars",txtUnsavedTitle:"Unsaved changes",txtUnsavedMsg:"This file has unsaved changes. Close anyway?",txtSaved:"Saved",download:"Download",menuDownload:"Download",menuOpenTerminal:"Open in Terminal",menuSubagent:"Process with Sub-agent",menuNewSubagent:"New Sub-agent Chat",subagentAsk:"What should the sub-agent do?",subagentAskPlaceholder:"Describe the task (optional; continue in the sub-agent session)",subagentSpawned:"Opened in the official sub-agent session",subagentFailed:"Failed to start sub-agent",statusDrivesCount:"{count} drive(s)",statusLoading:"Loading…",statusSearching:"Searching…",statusTasks:"Background tasks",statusTasksRunning:"{count} running task(s)",statusTermRestore:"Click to restore the terminal window",statusItemsCount:"{count} items",searchTitle:"Search Files & Content",searchPlaceholder:"Enter keywords…",search:"Search",searching:"Searching…",searchCase:"Match case",searchRegex:"Regular expression match",searchIdle:"Type keywords in the top search box to match file names and content live.",resultsCount:"{count} result(s)",resultsSuffixTruncated:" (truncated)",hitTitle:"Right-click to locate in explorer \\ left-click to open",matchContent:"content",searchReplaceAll:"Replace All",searchReplaceTitle:"Confirm batch replace",searchReplaceConfirm:"Replace {count} match(es) across {files} file(s)? This cannot be undone.",searchReplaceBusy:"Replacing…",searchReplaceDone:"Replaced in {files} file(s) ({count} match(es))",openFolderFirst:"Open a folder first",dirCreated:"Directory created",fileCreated:"File created",renamed:"Renamed",deleted:"Deleted",workspaceOutside:"Operation denied: only allowed for files/folders inside the workspace",errForbidden:"Forbidden: no permission or denied (403)",errNotFound:"File or directory not found (404)",errNoRoot:"No workspace root set — open a folder first (409)",errTooLarge:"Payload too large, exceeds allowed limit (413)",errServer:"Server error, please retry later (500)",errNetwork:"Network request failed, check your host connection",menuOpen:"Open",menuOpenExternal:"Open with default app",menuOpenInEditor:"Open in File Editor",menuCut:"Cut",menuCopy:"Copy",menuRename:"Rename",menuDelete:"Delete",menuCopyPath:"Copy full path",menuProperties:"Properties",menuCutDone:"Cut to clipboard",menuCopyDone:"Copied to clipboard",menuOpened:"Opened with system default app",menuPathCopied:"Path copied",menuPathCopyFail:"Failed to copy path",menuRefresh:"Refresh",menuView:"View",menuSort:"Sort by",expShowNav:"Show navigation",menuPaste:"Paste",menuUpload:"Upload Files",uploaded:"Uploaded {count} file(s)",uploadFailed:"{count} file(s) failed to upload",menuNew:"New",menuNewFolder:"Folder",menuNewFile:"Text Document",viewHuge:"Extra large icons",sshHosts:"SSH Hosts",sshAddHost:"Add Host",sshCancel:"Cancel",sshName:"Display name",sshAddr:"Address (user @ host : port)",sshUser:"Username",sshHostAddr:"Host address",sshAuth:"Auth method",sshAuthPassword:"Password auth",sshAuthKey:"Private key auth",sshPassword:"SSH password",sshKeyPath:"Private key path (supports ~)",sshSaveAdd:"Add",sshTest:"Test",sshTestConn:"Test",sshDelete:"Delete",sshDeleteConfirm:"Click again to confirm",sshTestOk:"SSH connection OK",sshTestFail:"SSH connection failed",sshRequired:"Host address and username are required",sshAddSuccess:"Host added",sshNewHost:"Add SSH Host",sshEdit:"Edit",sshEditTitle:"Edit SSH Host",sshHostCaption:"Connect a remote server for file browsing and terminal",sshUpdateSuccess:"Host updated",sshSaveEdit:"Save Changes",sshKeepSecret:"(leave blank to keep existing password)",sshNoHosts:"No hosts yet — click “Add Host” to begin",accTitle:"Accounts",accCaption:"Manage Git / SVN credentials — injected automatically when running commands",accListTitle:"Saved accounts",accAdd:"Add account",accNewTitle:"Add account",accEditTitle:"Edit account",accEdit:"Edit",accKind:"Type",accKindGit:"Git",accKindSvn:"SVN",accName:"Display name",accHost:"Host",accHostPlaceholder:"e.g. github.com or 113.57.110.41:804",accUrl:"Repository URL (optional)",accUrlPlaceholder:"https://github.com/owner/repo.git",accUrlHint:"Leave blank to apply to every repository on this host; fill it in to match by URL prefix (multiple accounts per host). Test & Apply need it.",accUsername:"Username",accSecret:"Password / access token",accSecretKind:"Credential type",accSecretPassword:"Password",accSecretToken:"Access token",accKeepSecret:"(leave blank to keep the saved secret)",accNote:"Note",accSave:"Save",accCancel:"Cancel",accDelete:"Delete",accDeleteConfirm:"Click again to confirm",accTest:"Test",accTestOk:"Connection OK",accTestFail:"Connection failed",accApply:"Apply to system",accApplyOk:"Applied to system",accApplyHint:"Write the credential into the system store so the CLI and other GUI tools are prompted no more.",accSaved:"Account saved",accDeleted:"Account deleted",accRequired:"Host and username are required",accSecretRequired:"Password or access token is required",accEmpty:"No accounts yet — click “Add account” to begin",accHasSecret:"Secret saved",accNoSecret:"No secret saved",accAllRepos:"all repositories on this host",accEffective:"This repo will use",accEffectiveNone:"No matching account for this repo (falls back to system credentials / svn cache)",accMatchHint:"Matched by host or repository URL prefix; system credentials are used when nothing matches.",accCopyIdent:"Copy account id",accUseCurrent:"Fill from current repo",accBack:"Back to list",accPick:"Pick an account on the left, or click “Add account”",accTip:"Credentials live only in this plugin's local config and are never sent out; the secret is never echoed — leave it blank to keep the current one.",sshStatusOnline:"Connected",sshStatusOffline:"Disconnected",sshStatusChecking:"Checking…",sshStatusUnknown:"Not checked",remoteNoExternal:"Remote files cannot be opened with local programs",remoteNoArchive:"Compress / extract is not supported on remote directories yet",remoteNoTerminal:"Remote host config not found — started the terminal in a local directory (add the SSH host in Settings first)",remoteCachedHint:"Remote file downloaded to a local temp file and opened (edits are not written back)",sshNavGroup:"SSH Remote",sshEmpty:"No hosts yet — right-click here to add one, or use “New ▾”",viewLarge:"Large icons",viewMedium:"Medium icons",viewSmall:"Small icons",viewList:"List",viewDetails:"Details",viewContent:"Content",viewTiles:"Tiles",showExtensions:"File name extensions",cmdPreview:"Preview",sortName:"Name",sortModified:"Date modified",sortType:"Type",sortSize:"Size",moved:"Moved",copied:"Copied",createdFolder:"Folder created",createdFile:"File created",newFolderName:"New Folder",newFileName:"New Text Document",propName:"Name",propPath:"Path",propKind:"Type",propSize:"Size",propModified:"Date modified",settings:"Settings",settingsSubtitle:"Personalize the workbench look & behavior",retry:"Retry",taskSrcMissing:"Source no longer exists (it may have been moved or deleted); list refreshed: {name}",menuMore:"More",settingsGroupFiles:"Files",settingsGroupAppearance:"Appearance",autoSave:"Auto save (write 1s after edits pause)",vsFindPlaceholder:"Find",vsReplacePlaceholder:"Replace with",vsFindNext:"Next (Enter)",vsFindPrev:"Previous (Shift+Enter)",vsFindReplace:"Replace (Enter)",vsFindReplaceAll:"Replace All",vsFindToggleReplace:"Toggle replace",vsFindClose:"Close (Esc)",vsFindNoMatch:"No results",vsFindWord:"Whole word",vsMenuLocalDiff:"View Local Changes",vsLocalDiffTitle:"Unsaved Changes",vsLocalDiffTooBig:"Changes too large to diff",vsMultiCursorHint:"Tip: Alt+Click adds more cursors",vsActHide:'Hide "{name}"',vsActBarBottom:"Move Activity Bar to Bottom",vsActBarTop:"Move Activity Bar to Top",vsSideRight:"Move Side Bar to Right",vsSideLeft:"Move Side Bar to Left",vsMinimap:"Editor Thumbnail",vsCloseSave:"Save and Close",vsCloseDiscard:"Close without Saving",vsCloseSaveAll:"Save All and Close",vsCloseDiscardAll:"Close All without Saving",showHidden:"Show hidden files",allowOutsideRoot:"Operate on files outside the workspace (root toggle)",defaultView:"Default view",themeMode:"Theme",themeAuto:"Follow system",themeDark:"Dark",themeLight:"Light",accentColor:"Accent color",accentReset:"Reset",fontFamily:"Font",fontDefault:"Default",fontOptionYahei:"Microsoft YaHei",fontOptionConsolas:"Consolas (monospace)",fontOptionCourier:"Courier New (monospace)",fontOptionGeorgia:"Georgia (serif)",fontSize:"Font size",fontSizeSm:"Small",fontSizeMd:"Medium",fontSizeLg:"Large",fontSizeXl:"Extra large",shortcutHelp:"Keyboard Shortcuts",shortcutHint:"Press ? anytime to show, Esc to close",shortcutGlobal:"Global",shortcutFileList:"File List",shGlobalHelp:"Show shortcut help",shListSelectAll:"Select all",shListCopy:"Copy",shListCut:"Cut",shListPaste:"Paste",shListFilter:"Focus filter box",shListNewFolder:"New folder",shListDelete:"Delete (with confirm)",shListRename:"Rename",shListRefresh:"Refresh",shListOpen:"Open file / enter folder",shListMove:"Move selection",shListUp:"Go to parent folder",shListBack:"Browse back",shListForward:"Browse forward",undo:"Undo",findReplacePlaceholder:"Replace with…",favorites:"Favorites",favoriteAdd:"Favorites",favoriteRemove:"Remove from favorites",favoriteAdded:"Added to favorites",favoriteRemoved:"Removed from favorites",emptyFavorites:"(no favorites)",menuCompress:"Compress to .zip",compressed:"Compressed",menuExtract:"Extract to current folder",extracted:"Extracted {count} file(s)",extractFailed:"Extraction failed",selectedCount:"{count} item(s) selected",menuMultiDelete:"Delete selected ({count})",menuMultiCut:"Cut selected",menuMultiCopy:"Copy selected",menuMultiCompress:"Compress selected",filterPlaceholder:"Filter this folder…",filterEmpty:"(no match)",taskFabTitle:"Background tasks",taskPanelTitle:"Background tasks",taskRunning:"Running",taskHistory:"History",taskClearFinished:"Clear finished",taskClearAll:"Clear all",taskEmpty:"No tasks",taskViewLog:"View log",taskLogTitle:"Task log",taskClose:"Close",taskFieldTarget:"Target",taskStatusRunning:"Running",taskStatusDone:"Done",taskStatusError:"Failed",taskFieldFile:"File",taskStartTime:"Start",taskEndTime:"End",taskTotalSpent:"Total time",taskStepSpent:"Spent",taskRunningLive:"Running",taskFieldType:"Type",taskMetaFiles:"{count} files · {size}",taskArchive:"Archive",taskArchiveOpen:"View Archives",taskArchiveTitle:"Task Archives",taskArchiveNone:"No archives",taskArchiveRecords:"{count} records",taskUploading:"Upload file",taskCompressing:"Compress",taskExtracting:"Extract",taskCopying:"Copy",taskMoving:"Move",taskDeleting:"Delete",taskRenaming:"Rename",gitMenu:"Git",gitAdd:"Stage (git add)",gitCommit:"Commit (git commit)",gitCommitTitle:"Git commit",gitCommitPlaceholder:"Enter commit message…",gitCommitted:"Committed",gitAdded:"Staged",gitDiscard:"Discard changes",gitDiscardTitle:"Confirm discard",gitDiscardMsg:'Discard worktree changes of "{name}" (git checkout --)?',gitDiscarded:"Discarded",gitDiff:"View changes",gitDiffTitle:"Git changes",gitDiffEmpty:"(no changes available)",gitDiffClose:"Close",gitBadgeUntracked:"Untracked new file",gitBadgeAdded:"Newly staged",gitBadgeModified:"Modified",gitBadgeDeleted:"Deleted",gitNotRepo:"Not in a git repository",gitNoChanges:"Nothing staged, nothing to commit",gitLoading:"Loading…",gitCommitFiles:"Committing {n} file(s):",gitCommitConfirm:"Commit",gitConfig:"Configure identity",gitConfigTitle:"Git identity",gitConfigName:"Username (user.name)",gitConfigNamePlaceholder:"e.g. yourname",gitConfigEmail:"Email (user.email)",gitConfigEmailPlaceholder:"e.g. you@example.com",gitConfigSave:"Save",gitConfigSaved:"Git global identity saved",gitPanel:"Open Git Panel",gitIgnore:"Ignore (add to .gitignore)",gitIgnored:"Ignored",gitPanelTitle:"Git Manager",gitFetch:"Fetch",gitPull:"Pull",gitPush:"Push",gitLoadMore:"Load more",gitDiffTruncated:"Diff too large — showing the first 5000 lines (open in the editor for the full content)",gitCopyName:"Copy name",gitCopyUrl:"Copy URL",gitCopyMsg:"Copy message",gitCloneHere:"Clone repository…",gitStatusColon:"Branch: {branch}",gitLocalRepo:"Local repo: ",gitTabStatus:"Changes",gitTabLog:"Log",gitTabBranch:"Branches",gitTabStash:"Stash",gitTabCli:"Command",gitClean:"Working tree clean, nothing to commit",gitAddShort:"Stage",gitUnstage:"Unstage",gitUnstaged:"Unstaged",gitStageAll:"Stage All",gitGroupStaged:"Staged changes",gitGroupUnstaged:"Changes",gitGroupUntracked:"Untracked",gitLogEmpty:"(no commits yet)",gitBranchNew:"New branch name",gitCheckout:"Checkout",gitDelete:"Delete",gitBranchCreated:"Branch {name} created and checked out",gitBranchDeleteMsg:"Delete branch {name}?",gitStashPlaceholder:"Stash message (optional)",gitStashCreate:"Create Stash",gitStashEmpty:"(no stashes)",gitStashApply:"Apply",gitStashPop:"Pop",gitStashDrop:"Drop",gitStashClear:"Clear Stash",gitStashCreated:"Stash created",gitStashApplied:"Stash applied",gitStashPopped:"Stash popped",gitStashDropped:"Stash dropped",gitStashCleared:"Stash cleared",gitStashDropMsg:"Drop stash {ref}?",gitStashClearMsg:"Clear all stashes? This cannot be undone.",gitCliPlaceholder:"Enter a git subcommand, e.g. status / log --oneline -5",gitRailChanges:"Changes",gitRailHistory:"History",gitRailBranches:"Branches",gitRailTags:"Tags",gitRailRemotes:"Remotes",gitRailStash:"Stashes",gitRailCli:"Console",gitHeadDetached:"Detached HEAD",gitNoUpstream:"No upstream branch",gitAheadBehind:"Ahead {ahead} · Behind {behind}",gitSelectFile:"Select a file on the left to view changes",gitDiffUntrackedHint:"Untracked file: stage it to see the diff against HEAD",gitCommitMsgPlaceholder:"Commit message…",gitFileHistory:"File history",gitBlame:"Blame",gitBlameAuthor:"Author",gitBlameDate:"Date",gitBlameLine:"Line",gitBlameEmpty:"(blame unavailable)",gitFileHistoryEmpty:"(no history for this file)",gitBack:"Back",gitHistoryAll:"All branches",gitHistoryCurrent:"Current branch",gitSelectCommit:"Select a commit on the left to see details",gitCommitDetail:"Commit details",gitCommitHash:"Commit",gitCommitAuthor:"Author",gitCommitDate:"Date",gitCommitParents:"Parents",gitCommitRefs:"Refs",gitCommitChangedFiles:"Changed files ({n})",gitCommitNoFiles:"(no file changes)",gitCopyHash:"Copy hash",gitCopyPath:"Copy path",gitCopied:"Copied to clipboard",gitReset:"Reset to this commit",gitResetSoft:"Soft (keep changes staged)",gitResetMixed:"Mixed (keep changes in worktree)",gitResetHard:"Hard (discard changes)",gitResetHardMsg:"Hard reset discards all worktree and staged changes. Continue?",gitResetDone:"Reset to {hash}",gitRevert:"Revert this commit",gitRevertDone:"Reverted {hash}",gitCherryPick:"Cherry-pick onto current",gitCherryPicked:"Cherry-picked {hash}",gitCheckoutCommit:"Checkout this commit",gitCheckoutCommitMsg:"This enters detached HEAD. Checkout {hash}?",gitBranchFrom:"New branch at this commit",gitBranchFromTitle:"New branch at this commit",gitBranchFromPlaceholder:"New branch name",gitBranchRename:"Rename",gitBranchRenameTitle:"Rename current branch",gitBranchRenamePlaceholder:"New branch name",gitBranchRenamed:"Renamed to {name}",gitMergeIntoCurrent:"Merge into current",gitMergeDone:"Merged {name}",gitPushBranch:"Push",gitPushed:"Pushed {name}",gitBranchCurrent:"current",gitBranchRemoteGroup:"Remote branches",gitBranchLocalGroup:"Local branches",gitBranchCreateAndSwitch:"Create & switch",gitTagNew:"New tag",gitTagNamePlaceholder:"Tag name, e.g. v1.0.0",gitTagTargetPlaceholder:"Target commit (empty = HEAD)",gitTagMessagePlaceholder:"Message (annotated tag when filled)",gitTagCreate:"Create",gitTagEmpty:"(no tags)",gitTagAnnotated:"annotated",gitView:"View",gitTagCreated:"Tag {name} created",gitTagDeleteMsg:"Delete tag {name}?",gitTagDeleted:"Deleted {name}",gitTagPushed:"Tag {name} pushed",gitTagFetchAll:"Fetch tags from remote",gitTagFetchAllDone:"Fetched tags from remote",gitTagRemoteOnly:"remote",gitTagPull:"Fetch",gitTagPulled:"Fetched tag {name}",gitTagNoRemote:"No remote repo; cannot fetch or publish tags",gitCommitViewTitle:"Commit diff",gitCommitOpenDiff:"View diff of {path}",gitReleaseBtn:"Publish release",gitReleaseTitle:"Publish release (annotated tag + push to remote)",gitReleaseName:"Tag name",gitReleaseTarget:"Based on commit (empty = HEAD)",gitReleaseMsg:"Release notes (required)",gitReleasePublish:"Create & publish",gitReleaseRequireMsg:"Release notes are required",gitReleased:"Published {name} to remote",gitReleaseGhSkip:"GitHub Release not created: {reason}",gitRefresh:"Refresh",gitTabTags:"Tags",gitTabReleases:"Releases",gitReleaseChooseTag:"Choose an existing tag",gitReleaseNotesPlaceholder:"Release notes (shown on the Release page)",gitReleaseCreateForTag:"Create Release",gitReleaseCreated:"Release created: {url}",gitReleaseLoadSkip:"Releases unavailable: {reason}",gitReleaseEmpty:"No releases yet",gitReleaseOpen:"Open",gitRemoteNamePlaceholder:"Name, e.g. origin",gitRemoteUrlPlaceholder:"URL, e.g. https://github.com/user/repo.git",gitRemoteAdd:"Add remote",gitRemoteEmpty:"(no remotes)",gitRemoteAdded:"Remote {name} added",gitRemoteRemoveMsg:"Remove remote {name}?",gitRemoteRemoved:"Remote {name} removed",gitRemoteSetUrl:"Set URL",gitRemoteUrlTitle:"Set remote URL",gitRemoteUrlSaved:"Remote URL updated",gitStashView:"View contents",gitStashNew:"Create stash",gitStashNone:"(worktree clean, nothing to stash)",gitOpRunning:"Running…",gitOpFailed:"Operation failed",svnMenu:"SVN",svnPanel:"Open SVN Manager",svnPanelTitle:"SVN Manager",svnRepo:"Working copy: ",svnUpdate:"Update",svnCommitBtn:"Commit",svnAdd:"Add",svnAdded:"Added to version control",svnIgnore:"Ignore (svn:ignore)",svnRevert:"Revert",svnCleanup:"Clean up",svnResolve:"Resolve",svnDiff:"Diff",svnBlame:"Blame",svnCheckout:"Checkout",svnFailed:"SVN command failed",svnRailChanges:"Changes",svnRailLog:"Commit log",svnNoUrl:"Repository URL unavailable",svnRunning:"Running…",svnRefresh:"Refresh",svnLoading:"Loading…",svnSelectAll:"Select all",svnModifiedCount:"Local changes ({n})",svnNoChanges:"No local changes",svnCommitPlaceholder:"Enter commit message…",svnCommitSelected:"Will commit {n} selected file(s)",svnCommitAll:"Will commit all local changes",svnOutput:"Command output",svnNoOutput:"(no output)",svnNoCli:"svn CLI not found; please install Subversion",svnDone:"SVN command finished",svnUpdateSummaryFrom:"Update complete: r{from} → r{to}, {n} item(s) changed",svnUpdateSummary:"Update complete: {n} item(s) changed, now at r{to}",svnAlreadyLatest:"Already up to date at r{rev}; nothing to update",svnLogEmpty:"No log yet",svnLogToggle:"Click to expand / collapse this commit",svnLogNoPaths:"No changed files recorded for this commit",svnLogOpenDiff:"Show this file's diff in this commit",svnDiffTitle:"Diff · ",svnBlameTitle:"Blame · ",svnCheckoutUrlPlaceholder:"Repository URL (e.g. https://svn.example.com/svn/repo)",svnCheckoutTargetPlaceholder:"Checkout into local directory",repoCloneTitle:"Clone / Checkout Repository",repoCloneKindGit:"Git",repoCloneKindSvn:"SVN",repoCloneTitleGit:"Clone Git Repository",repoCloneTitleSvn:"Checkout SVN Repository",repoCloneCaptionGit:"Clone a full copy of a remote repository to local",repoCloneCaptionSvn:"Check out a specific revision from an SVN server",repoCloneTargetGit:"Will clone into",repoCloneTargetSvn:"Will check out into",repoCloneUrl:"Repository URL",repoCloneUrlGitPlaceholder:"Repository URL (e.g. https://github.com/owner/repo.git)",repoCloneDir:"Target directory",repoCloneDirPlaceholder:"Parent directory to clone into",repoCloneBrowse:"Browse…",repoCloneName:"Subdirectory name",repoCloneNamePlaceholder:"Leave empty to infer from URL",repoCloneShallow:"Shallow clone (latest commit only)",repoCloneShallowHint:"Faster and smaller, but without history",repoCloneRevision:"Revision",repoCloneRevisionPlaceholder:"Leave empty for latest (HEAD)",repoCloneAccount:"Account",repoCloneAccountAuto:"Auto (match by URL)",repoCloneAccountNew:"New account…",repoCloneTargetEmpty:"Please fill in the repository URL and target directory",repoCloneRunningGit:"Cloning Git repository…",repoCloneRunningSvn:"Checking out SVN repository…",repoCloneElapsed:"Elapsed {s}s",repoCloneKeepOpen:"Keep this window open; you will be notified when done.",repoCloneActionGit:"Clone",repoCloneActionSvn:"Checkout",repoCloneDoneGit:"Repository cloned: {name}",repoCloneDoneSvn:"Repository checked out: {name}",menuCloneGit:"Clone Git Repository…",menuCloneSvn:"Checkout SVN Repository…",svnNotRepoTip:"Not an SVN working copy. Fill in the form above to check out a repository.",svnCheckedOut:"Repository checked out",svnStAdded:"Added",svnStModified:"Modified",svnStDeleted:"Deleted",svnStReplaced:"Replaced",svnStConflicted:"Conflicted",svnStMissing:"Missing",svnStObstructed:"Obstructed",svnStUnversioned:"Unversioned",svnStIgnored:"Ignored",svnStLocked:"Locked",saveConfig:"Save",recycleBin:"Recycle Bin",recycleRestore:"Restore",recycleDelete:"Delete permanently",recycleEmpty:"Empty Recycle Bin",recycleEmptyConfirm:"Empty the Recycle Bin? This cannot be undone.",recycleDeleteConfirm:'Permanently delete "{name}"? This cannot be undone.',recycleDeleteConfirmMulti:"Permanently delete the {count} selected items? This cannot be undone.",recycleEmptying:"Emptying Recycle Bin…",recycleEmptyProgress:"Emptying Recycle Bin: {count} item(s) left",recycleEmptyDone:"Recycle Bin emptied",recycleEmptyList:"The Recycle Bin is empty",recycleRestored:"Restored to original location",recycledDeleted:"Permanently deleted",terminal:"Terminal",terminalTitle:"Terminal",terminalMinimize:"Minimize to task bar",terminalCloseTitle:"Close terminal",terminalClose:"Close",terminalNew:"New terminal",terminalShellSwitch:"Switch default shell (cmd / powershell)",terminalAdmin:"Administrator",terminalAdminNormal:"Standard",terminalAdminOn:"Running as administrator — commands here have admin rights",terminalAdminOff:"Standard privileges — commands here cannot change system-level settings",terminalAdminHint:'Launch dsh web as administrator (right-click the launcher → "Run as administrator") so every terminal in the panel gets admin rights — the shell inherits the host process token.',terminalClear:"Clear screen",terminalResizeTitle:"Drag to resize terminal",terminalDockDragTitle:"Click to expand · drag to move · right-click for menu",terminalDockSessions:"Minimized terminals",terminalDockCloseAll:"Close all",terminalTab:"{n}",scrollLeft:"Scroll left",scrollRight:"Scroll right",termFontSmaller:"Smaller font",termFontLarger:"Larger font",termInputFailed:"Terminal input failed: {msg}",termSshBadge:"This terminal is logged in to a remote SSH host",termSshReconnect:"Reconnect",termSshReconnectTitle:"Log in to the remote host again (auto, using the saved password / key)",termSearchPlaceholder:"Search terminal output…",termSearchCase:"Match case",termSearchPrev:"Previous",termSearchNext:"Next",termSearchClose:"Close search",termCopyHint:"Ctrl+C copy · Ctrl+V paste · Ctrl+F search",pmTitle:"Extensions",pmManage:"Manage",pmSort:"Sort",pmSortInstall:"Sort by Install Order",pmSortName:"Sort by Name",pmSortSource:"Sort by Source",pmInstalled:"Installed",pmSearchPlaceholder:"Search in Installed",pmImportFromFile:"Install from VSIX…",pmImportFromUrl:"Install from URL…",pmEnableAll:"Enable All",pmDisableAll:"Disable All",pmEnable:"Enable",pmDisable:"Disable",pmRemove:"Uninstall",pmMoreActions:"More Actions",pmPull:"Fetch",pmPulling:"…",pmUrlPlaceholder:"https://example.com/plugin.js",srcBuiltin:"Built-in",srcFile:"Local",srcUrl:"URL",pmEmptyWithQuery:"No extensions match “{q}”<br>Try another keyword, or install via the “···” menu",pmEmptyNoPlugins:"No extensions yet<br>Install one from a local file or URL via the “···” menu",pmImportFailed:"Failed to import {name}: {msg}",pmUrlImported:"Installed and enabled from URL",pmUrlImportFailed:"URL import failed: {msg}",pmNeedsProject:"Enabled · opens a project folder to show in the sidebar",vsExtNeedProject:"{n} extension(s) enabled — open a project folder to show them in the sidebar",pmCheckEmpty:"File is empty.",pmCheckNotPlugin:"Not a plugin file: missing __ModuleLoader__ registration or activityBar calls.",pmCheckNeedsHost:"This plugin requires host API v{need}; this workbench provides v{have}. Upgrade and retry.",pmCheckNoContrib:"The plugin registered no contribution points and was rolled back. Check it against this workbench API.",pmRestoreFailed:"Failed to restore plugin {name}: {msg}",pmEnableFailed:"Failed to enable {name}: {msg}",pmReloadRequired:"{n} plugin(s) enabled but could not hot-load; a window reload is required.",pmReloadNow:"Reload Window",pmReloadDismiss:"Not now"};function pp(t,e){return t===void 0?"":e?t.replace(/\{([^}]+)\}/g,(n,a)=>e[a]!==void 0?String(e[a]):`{${a}}`):t}function hp(t,e){return(t.toLowerCase().startsWith("zh")?fp:Gr)[e]??Gr[e]}function nr(){return typeof window<"u"?window.__DSH_FILE_WORKBENCH__?.locale:void 0}function ou(){const t=nr()?.getSnapshot()?.active;return t||(typeof navigator<"u"&&navigator.language?navigator.language:"en")}const Wo=g(ou());if(typeof window<"u"){const t=nr();t&&typeof t.subscribe=="function"&&t.subscribe(()=>{Wo.value=ou()})}function su(t,e,n){return pp(hp(t,e),n)}function Mt(){const t=g(Wo.value.toLowerCase().startsWith("zh"));if(typeof window<"u"){const e=nr();e&&typeof e.subscribe=="function"&&e.subscribe(()=>{t.value=Wo.value.toLowerCase().startsWith("zh")})}return{locale:Vr(Wo),isZh:Vr(t),t:(e,n)=>su(Wo.value,e,n)}}function v(t,e){return su(Wo.value,t,e)}function ga(){return Wo.value.toLowerCase().startsWith("zh")}const iu={home:'<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',up:'<line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 11 12 4 19 11"/>',compass:'<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',folder:'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',folderOpen:'<path d="M6 14l1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"/>',search:'<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',chat:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',bot:'<rect x="4" y="9" width="16" height="11" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M10 6v3"/><line x1="8" y1="14" x2="9" y2="14"/><line x1="15" y1="14" x2="16" y2="14"/><line x1="12" y1="14.5" x2="12" y2="18"/>',gear:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>',terminal:'<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>',sun:'<circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/><line x1="4.5" y1="4.5" x2="6.5" y2="6.5"/><line x1="17.5" y1="17.5" x2="19.5" y2="19.5"/><line x1="4.5" y1="19.5" x2="6.5" y2="17.5"/><line x1="17.5" y1="6.5" x2="19.5" y2="4.5"/>',moon:'<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',refresh:'<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>',star:'<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',close:'<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',file:'<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/>',fileText:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',video:'<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>',music:'<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',archive:'<polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/>',grid:'<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',viewList:'<path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/>',viewDetails:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 9v12"/>',code:'<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',trash:'<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',edit:'<path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z"/><path d="M15 5l4 4"/>',cut:'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="8.12" y1="8.12" x2="15.88" y2="15.88"/><line x1="15.88" y1="8.12" x2="8.12" y2="15.88"/>',copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>',paste:'<path d="M6 9V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4"/><rect x="4" y="7" width="16" height="14" rx="2"/><path d="M9 12h6"/><path d="M9 16h6"/>',eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',eyeOff:'<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>',undo:'<path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-15-6.7L3 13"/>',redo:'<path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 15-6.7L21 13"/>',print:'<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',pin:'<path d="M12 17v5"/><path d="M9 3h6l1 6a2 2 0 0 0 2 2h1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2h1a2 2 0 0 0 2-2z"/>',globe:'<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/>',sparkle:'<path d="M12 3l1.9 4.6 4.6 1.9-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9z"/><circle cx="18.5" cy="5.5" r="1"/>',bug:'<rect x="8" y="6" width="8" height="14" rx="4"/><path d="M19 7l-3 2M5 7l3 2M19 17l-3-2M5 17l3-2M3 12h4M17 12h4"/><path d="M12 6V3"/>',sync:'<path d="M21 2v6h-6"/><path d="M3 22v-6h6"/><path d="M21 8a9 9 0 0 0-14.14-5.86L3 5.96"/><path d="M3 16a9 9 0 0 0 14.14 5.86L21 18.04"/>',arrowRight:'<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',arrowLeft:'<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 5 5 12 12 19"/>',warning:'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',chevronLeft:'<polyline points="15 18 9 12 15 6"/>',chevronRight:'<polyline points="9 18 15 12 9 6"/>',chevronsLeft:'<polyline points="11 17 6 12 11 7"/><polyline points="18 17 13 12 18 7"/>',chevronsRight:'<polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/>',chevronUp:'<polyline points="18 15 12 9 6 15"/>',chevronDown:'<polyline points="6 9 12 15 18 9"/>',chevronsUp:'<polyline points="17 11 12 6 7 11"/><polyline points="17 18 12 13 7 18"/>',chevronsDown:'<polyline points="7 6 12 11 17 6"/><polyline points="7 13 12 18 17 13"/>',external:'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>',fileOut:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M11 15c0-4.5-2.5-7-7-7"/><polyline points="7 5 4 8 7 11"/>',info:'<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',monitor:'<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',sort:'<path d="M3 6h18"/><path d="M6 12h12"/><path d="M9 18h6"/>',message:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',brain:'<path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z"/>',paperclip:'<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/>',check:'<polyline points="20 6 9 17 4 12"/>',save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>',plus:'<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',panellayout:'<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="14" y1="3" x2="14" y2="11"/><line x1="14" y1="15" x2="14" y2="21"/>',hardDrive:'<line x1="22" y1="12" x2="2" y2="12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" y1="16" x2="6.01" y2="16"/><line x1="10" y1="16" x2="10.01" y2="16"/>',git:'<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',tasks:'<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>',clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',activity:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',float:'<path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/><circle cx="9" cy="9" r="2"/><path d="M4 14h6"/>',dock:'<path d="M12 17v5"/><path d="M14 9V4h4V2H6v2h4v5l-2 2v1h8v-1z"/><path d="M17 5h3"/>',fileWord:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M8 17l2-7 2 4 2-4 2 7"/>',fileExcel:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 12l6 6M15 12l-6 6"/>',merge:'<circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/>',tag:'<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>',stash:'<path d="M21 8v13H3V8"/><path d="M1 3h22v5H1z"/><line x1="10" y1="12" x2="14" y2="12"/>',commit:'<circle cx="12" cy="12" r="4"/><line x1="1.05" y1="12" x2="7" y2="12"/><line x1="17.01" y1="12" x2="22.96" y2="12"/>',svn:'<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h10"/><circle cx="19" cy="17" r="2"/>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',mail:'<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',inbox:'<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',send:'<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',bookmark:'<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',unlock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>',key:'<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>',heart:'<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',flag:'<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>',bell:'<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',layers:'<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',database:'<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>',server:'<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>',cloud:'<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>',cloudUpload:'<polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>',cloudDownload:'<polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>',palette:'<circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.436-.652-.436-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.504 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>',pieChart:'<path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',barChart:'<line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>',trendingUp:'<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',trendingDown:'<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/>',box:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',package:'<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',rocket:'<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',target:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',crosshair:'<circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/>',sliders:'<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>',filter:'<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',zap:'<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',flashlight:'<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/><path d="M6.39 15.5 4 17v3h16v-3l-2.39-1.5"/>',map:'<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>',landmark:'<line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/>',wifi:'<path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>',battery:'<rect x="1" y="6" width="18" height="12" rx="2"/><line x1="23" y1="13" x2="23" y2="11"/>',cpu:'<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>',creditCard:'<rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>',gift:'<polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>',award:'<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>',medal:'<circle cx="12" cy="15" r="6"/><path d="M12 12V2l4 4-4 4"/><path d="M8 6l4 6"/>',thumbsUp:'<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>',smile:'<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>',mic:'<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>',camera:'<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',headphones:'<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',play:'<polygon points="5 3 19 12 5 21 5 3"/>',pause:'<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>',stop:'<rect x="5" y="5" width="14" height="14" rx="2"/>',skipForward:'<polygon points="5 4 15 12 5 20 5 4"/><line x1="19" y1="5" x2="19" y2="19"/>',skipBack:'<polygon points="19 20 9 12 19 4 19 20"/><line x1="5" y1="19" x2="5" y2="5"/>',volume:'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>',volumeHigh:'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>',volumeOff:'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>',maximize:'<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>',minimize:'<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/>',move:'<polyline points="5 9 2 12 5 15"/><polyline points="9 5 12 2 15 5"/><polyline points="15 19 12 22 9 19"/><polyline points="19 9 22 12 19 15"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/>',crop:'<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"/><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"/>',wand:'<path d="M15 4V2m0 20v-2M8.5 8.5 7 7m12 12-1.5-1.5M4 15H2m20 0h-2M4 4l1.5 1.5M18.5 18.5 20 20"/><path d="M14 10 4 20l-2-2L12 8z"/>',anchor:'<circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/>',feather:'<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/>',lifeBuoy:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"/><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"/><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"/><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"/>',rss:'<path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>',command:'<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>',function:'<path d="M9 11 6 21M15 3a3 3 0 0 0-3 3v1M18 9h-8m2 4c0 3-1 5-3 6"/>',binary:'<rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/>',flow:'<rect x="2" y="3" width="6" height="6" rx="1"/><rect x="16" y="15" width="6" height="6" rx="1"/><path d="M8 6h6a2 2 0 0 1 2 2v7"/><path d="M11 18H5a2 2 0 0 1-2-2v-1"/>',gitBranch:'<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',gitCommit:'<circle cx="12" cy="12" r="4"/><line x1="1.05" y1="12" x2="7" y2="12"/><line x1="17.01" y1="12" x2="22.96" y2="12"/>',fork:'<circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="12" cy="18" r="3"/><path d="M6 9v1a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V9"/><line x1="12" y1="13" x2="12" y2="15"/>',cube:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',puzzle:'<path d="M19.44 12.99c.72-.23 1.56.06 1.56 1.01 0 .55-.45 1-1 1h-2v2c0 .55-.45 1-1 1-.95 0-1.24.84-1.01 1.56.18.55-.06 1.43-.99 1.43-.55 0-1-.45-1-1v-2h-2c-.55 0-1-.45-1-1 0-.95-.84-1.24-1.56-1.01-.55.18-1.43-.06-1.43-.99 0-.55.45-1 1-1h2v-2c0-.55.45-1 1-1 .95 0 1.24-.84 1.01-1.56-.18-.55.06-1.43.99-1.43.55 0 1 .45 1 1v2h2c.55 0 1 .45 1 1 0 .95.84 1.24 1.56 1.01z"/>'};function Hs(t){return Object.prototype.hasOwnProperty.call(iu,t)}const vp=["width","height","innerHTML"],oe=vt({__name:"Icon",props:{name:{},size:{default:15}},setup(t){const e=t,n=B(()=>iu[e.name]??""),a=B(()=>typeof e.size=="number"?`${e.size}px`:e.size);return(r,u)=>n.value?(l(),c("svg",{key:0,class:"fw-icon",viewBox:"0 0 24 24",width:a.value,height:a.value,fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",innerHTML:n.value},null,8,vp)):A("",!0)}}),mp={class:"fw-confirm-ico","aria-hidden":"true"},gp={class:"fw-confirm-msg"},yp={key:0,class:"fw-confirm-msg"},au=vt({__name:"ConfirmDialog",setup(t){const{t:e}=Mt(),n=B(()=>tt.okText||e("confirmOk")),a=B(()=>tt.cancelText||e("cancel"));function r(p){p||Ls(tt.kind==="prompt"||tt.choices.length?null:!1)}function u(p){Ls(p)}function h(){tt.kind==="prompt"?Ls(tt.inputValue.trim()):Ls(!0)}function d(){Ls(tt.kind==="prompt"?null:!1)}return(p,w)=>{const b=To,_=Mn,M=un;return l(),Xe(M,{"model-value":o(tt).visible,class:"fw-confirm-dialog",width:"380px","align-center":"","append-to-body":"","show-close":!0,"close-on-click-modal":!1,"close-on-press-escape":!1,"onUpdate:modelValue":r},{footer:se(()=>[o(tt).choices.length?(l(!0),c(ie,{key:0},Re(o(tt).choices,O=>(l(),Xe(_,{key:O.id,type:O.primary?"primary":"default",onClick:N=>u(O.id)},{default:se(()=>[ue(i(O.text),1)]),_:2},1032,["type","onClick"]))),128)):(l(),c(ie,{key:1},[m(_,{onClick:d},{default:se(()=>[ue(i(a.value),1)]),_:1}),m(_,{type:"primary",onClick:h},{default:se(()=>[ue(i(n.value),1)]),_:1})],64))]),default:se(()=>[s("div",{class:te(["fw-confirm-body",{"fw-confirm-up":o(tt).kind==="confirm"}])},[o(tt).kind==="confirm"?(l(),c(ie,{key:0},[s("span",mp,[m(oe,{name:"warning",size:22})]),s("p",gp,i(o(tt).message),1)],64)):(l(),c(ie,{key:1},[o(tt).message?(l(),c("p",yp,i(o(tt).message),1)):A("",!0),o(tt).multiline?(l(),Xe(b,{key:1,modelValue:o(tt).inputValue,"onUpdate:modelValue":w[0]||(w[0]=O=>o(tt).inputValue=O),type:"textarea",rows:5,placeholder:o(tt).inputPlaceholder,onKeydown:bt(ke(h,["ctrl","prevent"]),["enter"])},null,8,["modelValue","placeholder","onKeydown"])):(l(),Xe(b,{key:2,modelValue:o(tt).inputValue,"onUpdate:modelValue":w[1]||(w[1]=O=>o(tt).inputValue=O),placeholder:o(tt).inputPlaceholder,clearable:"",onKeyup:bt(h,["enter"])},null,8,["modelValue","placeholder"]))],64))],2)]),_:1},8,["model-value"])}}}),wp={ok:3e3,info:3e3,warning:4500,error:6e3},bp=5,qr="__DSH_FW_TOAST__";function ya(){const t=globalThis;let e=t[qr];return e||(e={items:g([]),seq:0,app:null,el:null},t[qr]=e),e}const Ha=ya().items;function wa(t,e,n){const a=ya(),r=++a.seq,u=n??wp[t];for(a.items.value.push({id:r,kind:t,message:e,duration:u,remain:u,paused:!1});a.items.value.length>bp;)a.items.value.shift();return r}function Kr(t){const e=ya(),n=e.items.value.findIndex(a=>a.id===t);n!==-1&&e.items.value.splice(n,1)}function Y(t,e,n){wa(t,e,n)}const po=(t,e)=>void wa("error",t,e),us=(t,e)=>void wa("warning",t,e),ro=(t,e)=>void wa("ok",t,e),_p=3e4,ds=new Map,Ei=new Map;function Zo(t,e,n=_p){const a=ds.get(t);if(a&&Date.now()-a.at<n)return Promise.resolve(a.value);const r=Ei.get(t);if(r)return r;const u=e().then(h=>(ds.set(t,{at:Date.now(),value:h}),Ei.delete(t),h),h=>{throw Ei.delete(t),h});return Ei.set(t,u),u}function ba(t=""){let e=0;if(!t)return e=ds.size,ds.clear(),e;for(const n of[...ds.keys()])n.startsWith(t)&&(ds.delete(n),e++);return e}function lu(t,e,n){const a=new URL(t,e);return a.protocol=a.protocol==="https:"?"wss:":"ws:",a.pathname=`${a.pathname.replace(/\/+$/,"")}/${n}`,a.search="",a.hash="",a.toString()}const kp={},xp="/api/dsh-file-workbench";function Cp(){if(typeof window<"u"&&window.__DSH_FILE_WORKBENCH__?.apiBase)return window.__DSH_FILE_WORKBENCH__.apiBase.replace(/\/$/,"");const t=kp?.VITE_API_BASE??"";return t?t.replace(/\/$/,""):xp}const Yn=Cp(),Ws=gt({seq:0,pending:0}),Hi=new Map;function Sp(){for(const t of Hi.values())t.abort();Hi.clear()}class ru extends Error{constructor(){super("request aborted"),this.name="AbortRequestError"}}class Yo extends Error{constructor(e,n,a){super(e),this.status=n,this.code=a,this.name="ApiError"}}const $p=new Set(["mtime-conflict"]);function cu(t,e){switch(t){case 403:return v("errForbidden");case 404:return v("errNotFound");case 409:return v("errNoRoot");case 413:return v("errTooLarge");case 500:return v("errServer");default:return e}}function uu(t){return t instanceof ru||t instanceof DOMException&&t.name==="AbortError"}async function We(t,e,n,a){const r=++Ws.seq;Ws.pending++;const u=new AbortController;Hi.set(r,u);const h=()=>u.abort();a?.signal&&(a.signal.aborted?u.abort():a.signal.addEventListener("abort",h,{once:!0}));const d={method:t,headers:{},signal:u.signal};n!==void 0&&(d.headers={"content-type":"application/json"},d.body=JSON.stringify(n));try{let p;try{p=await fetch(`${Yn}${e}`,d)}catch(b){throw u.signal.aborted?new ru:(a?.silent||po(v("errNetwork")),b instanceof Error?b:new Error(String(b)))}const w=await p.json().catch(()=>({ok:!1,error:"bad response"}));if(!w.ok){const b=w.error||`HTTP ${p.status}`;throw!!w.code&&$p.has(w.code)||(p.status===403&&/outside (root|workspace)/i.test(b)?a?.silent||po(v("workspaceOutside")):a?.silent||po(cu(p.status,b))),new Yo(b,p.status,w.code)}return w.data}finally{Ws.pending--,Hi.delete(r),a?.signal?.removeEventListener("abort",h)}}const Ht=t=>{const e=new URLSearchParams;for(const[a,r]of Object.entries(t))r&&e.set(a,r);const n=e.toString();return n?`?${n}`:""};function Bi(t,e){return Zo(`list:${e??""}:${t}`,()=>We("GET",`/list${Ht({key:e,path:t})}`))}function mn(t){return t.then(e=>(ba(),e))}function or(t){return t.then(e=>(ba("git"),e))}function So(t=""){return ba(t)}function Ep(t){return We("GET",`/root${Ht({key:t})}`)}function sr(t,e){return We("POST","/root",{key:e,path:t})}function ul(t,e,n={}){return mn(We("POST","/save",{key:n.key,path:t,content:e,encoding:n.encoding,hasBom:n.hasBom,eol:n.eol,expectedMtime:n.expectedMtime,force:n.force}))}function Dp(t,e){return Zo(`files:${e??""}:${t}`,()=>We("GET",`/files${Ht({key:e,path:t})}`))}function Tp(t,e={}){return We("GET",`/search${Ht({key:e.key,q:t,path:e.path,limit:e.limit?.toString(),case:e.caseSensitive?"1":void 0,regex:e.regex?"1":void 0})}`)}function du(t,e,n={}){return mn(We("POST","/replace",{key:n.key,scope:n.scope,q:t,replacement:e,caseSensitive:n.caseSensitive,regex:n.regex,wholeWord:n.wholeWord,preserveCase:n.preserveCase,include:n.include||void 0,exclude:n.exclude||void 0}))}function Np(t,e={}){return We("GET",`/grep${Ht({key:e.key,q:t,path:e.path,sub:e.sub||void 0,case:e.caseSensitive?"1":void 0,regex:e.regex?"1":void 0,word:e.wholeWord?"1":void 0,include:e.include||void 0,exclude:e.exclude||void 0})}`)}function Wt(t){return t.startsWith("ssh://")}function fu(t){return Zo(`mycomputer:${t??""}`,()=>We("GET",`/mycomputer${Ht({key:t})}`))}function pu(){return Zo("drives",()=>We("GET","/drives"))}function Fp(){return We("GET","/ssh/hosts",void 0,{silent:!0})}function Pp(t){return We("POST","/ssh/add",t)}function Ap(t){return We("POST","/ssh/update",t)}function Rp(t){return We("POST","/ssh/remove",{id:t})}function dl(t){return We("POST","/ssh/test",t)}function Mp(t){return We("POST","/ssh/ping",{id:t},{silent:!0})}function Op(t){return We("POST","/ssh/cache",{path:t})}function Lp(){return We("GET","/recycle-list")}function Bp(){return We("GET","/recycle-count")}function Ip(t){return mn(We("POST","/recycle-restore",{fullPath:t}))}function jp(t){return mn(We("POST","/recycle-delete",{fullPath:t}))}function Vp(){return mn(We("POST","/recycle-empty",{}))}function zp(t,e){return We("GET",`/browse${Ht({key:e,path:t})}`)}function Up(t){return`${Yn}/download?path=${encodeURIComponent(t)}`}function Xr(t){return`${Yn}/_read-image?path=${encodeURIComponent(t)}`}function Hp(t,e,n){const a=new URLSearchParams({session:e.session,shell:e.shell});return e.cwd&&a.set("cwd",e.cwd),e.key&&a.set("key",e.key),Gp(`/exec-stream?${a.toString()}`,t,n)}function Wp(t,e,n){const a=typeof location<"u"?location.href:"http://127.0.0.1/",r=lu(Yn,a,"exec-mux-ws")+(e.key?`?key=${encodeURIComponent(e.key)}`:"");return new Promise(u=>{let h;try{h=new WebSocket(r)}catch{u();return}let d=!1;const p=()=>{if(!d){d=!0;try{n?.removeEventListener("abort",w)}catch{}try{h.close()}catch{}u()}},w=()=>p();n?.addEventListener("abort",w),h.onmessage=b=>{try{t(JSON.parse(String(b.data)))}catch{}},h.onclose=p,h.onerror=()=>{}})}function Gp(t,e,n){return new Promise(a=>{const r=new EventSource(`${Yn}${t}`);let u=!1;const h=()=>{if(!u){u=!0;try{r.close()}catch{}a()}};r.onmessage=d=>{try{e(JSON.parse(d.data))}catch{}},r.onerror=h,n&&(n.aborted?h():n.addEventListener("abort",h,{once:!0}))})}function Wa(t){return We("POST","/exec-open",t)}function qp(t,e,n){return We("POST","/exec-resize",{session:t,cols:e,rows:n},{silent:!0})}function hu(t,e){return We("POST","/exec-input",{session:t,data:e},{silent:!0})}function Kp(t){return We("POST","/exec-kill",{session:t})}function Xp(){return We("GET","/term-env")}function Yp(t,e,n,a){return We("POST","/subagent/spawn",{path:t,isDir:e,instruction:n,session:a})}function Wi(t,e){return mn(We("POST","/mkdir",{key:e,path:t}))}function Gi(t,e,n){return mn(We("POST","/rename",{key:n,from:t,to:e}))}function fl(t,e){return mn(We("DELETE",`/remove${Ht({key:e,path:t})}`))}function vu(t,e){return mn(We("POST","/touch",{key:e,path:t}))}function Jp(t,e,n){return mn(We("POST","/copy",{key:n,src:t,destDir:e}))}async function Qp(t,e,n){Ws.pending++;try{const a=await fetch(`${Yn}/upload${Ht({dir:t,name:e.name,key:n})}`,{method:"POST",body:e}),r=await a.json().catch(()=>({ok:!1,error:"bad response"}));if(!r.ok)throw new Error(r.error||`HTTP ${a.status}`);return ba(),r.data}finally{Ws.pending--}}function qi(t){return We("GET",`/detail${Ht({path:t})}`)}async function pl(t,e){try{return await We("GET",`/detail${Ht({path:t})}`,void 0,{silent:!0}),!0}catch(n){if(n instanceof Yo&&n.status===404)return!1;throw!uu(n)&&!e?.silent&&po(n instanceof Yo?cu(n.status,n.message):v("errNetwork")),n}}async function hl(t){try{return await We("GET",`/detail${Ht({path:t})}`,void 0,{silent:!0})}catch{return null}}function vl(t,e={}){return We("GET",`/read${Ht({path:t,encoding:e.encoding,bom:e.hasBom===void 0?void 0:e.hasBom?"1":"0"})}`)}function Yr(t,e,n){return mn(We("POST","/compress",{key:n,path:t,to:e}))}function Zp(t,e,n){return mn(We("POST","/extract",{key:n,zipPath:t,destDir:e}))}function mu(t){return We("POST","/openExternal",{path:t})}function eh(t){return Zo(`gitstatus:${t}`,()=>We("GET",`/git/status${Ht({path:t})}`))}function th(t){return We("GET",`/git/diff${Ht({path:t})}`)}function nh(t){return or(We("POST","/git/add",{path:t}))}function gu(t){return or(We("POST","/git/ignore",{path:t}))}function oh(t,e){return or(We("POST","/git/commit",{path:t,message:e}))}function sh(t){return mn(We("POST","/git/discard",{path:t}))}function ei(t){return Zo(`gitpanel:${t}`,()=>We("GET",`/git/panel${Ht({path:t})}`))}function Gs(t,e){return We("POST","/git/run",{path:t,args:e})}function ih(t,e){return mn(We("POST",t==="git"?"/git/clone":"/svn/checkout",e))}function Jr(t,e,n,a){return We("POST","/git/gh-release",{path:t,tag:e,name:n,body:a})}function ah(t){return We("GET",`/git/gh-releases${Ht({path:t})}`)}function yu(){return We("GET","/git/config")}function wu(t,e){return We("POST","/git/config",{name:t,email:e})}function ho(t){return Zo(`svninfo:${t}`,()=>We("GET",`/svn/info${Ht({path:t})}`))}function Qt(t,e){return We("POST","/svn/run",{path:t,args:e})}function lh(){return We("GET","/accounts")}function rh(t){return We("POST","/accounts/add",t)}function bu(t,e){return We("GET",`/accounts/match${Ht({kind:t,url:e})}`,void 0,{silent:!0})}function ch(t){return We("POST","/accounts/update",t)}function uh(t){return We("POST","/accounts/remove",{id:t})}function dh(t){return We("POST","/accounts/test",t)}function fh(t){return We("POST","/accounts/apply",{id:t})}function _u(){return We("GET","/persist")}function es(t,e){return We("POST","/persist",{k:t,v:e})}async function ph(){const t=await We("GET","/persist?k=taskLogs");return Array.isArray(t?.taskLogs)?t.taskLogs:[]}function hh(t){return We("POST","/persist",{k:"taskLogs",v:t})}async function vh(){return(await We("GET","/task-archives"))?.map??{}}function ir(t){return We("POST","/task-archives",{map:t})}function No(){if(typeof window>"u")return null;const t=window.__DSH_FILE_WORKBENCH__?.officialTerminal;return t&&typeof t.create=="function"?t:null}function mh(){try{return No()?.available()??!1}catch{return!1}}const Et=g([]),Jo=g(""),co=g(null),_n=g(null),vo=g({});function ml(t){return vo.value[t]===!0}function gh(t){vo.value[t]||(vo.value={...vo.value,[t]:!0})}function ar(t){if(!vo.value[t])return;const e={...vo.value};delete e[t],vo.value=e}function yh(){Object.keys(vo.value).length&&(vo.value={})}const Rn=g({}),Qr=1500,wh=/\x1b\[[0-9;?]*[ -/]*[@-~]/g;function Ki(t,e){const n=e.replace(wh,"");if(!n.trim())return;let r=(Rn.value[t]??"")+n;r.length>Qr&&(r=r.slice(r.length-Qr)),Rn.value={...Rn.value,[t]:r}}function bh(t){return Rn.value[t]??""}function _h(t){if(Rn.value[t]===void 0)return;const e={...Rn.value};delete e[t],Rn.value=e}async function ku(){if(co.value===null)try{const t=await Xp();co.value=t.elevated===!0}catch{}}let Zr=0;function kh(){return Zr+=1,Zr}const ec=4*1024*1024;function _s(t){return t.length>ec?t.slice(t.length-ec):t}const ks=new Map;function tc(t,e){e?ks.set(t,e):ks.delete(t)}let fs=null,lr="",Ga=null;const xu="__DSH_FW_TERM_MUX_SSE__";function xh(){const e=globalThis[xu];if(e&&typeof e.dispose=="function")try{e.dispose()}catch{}}function Cu(t){const e=Et.value.find(n=>n.session===t.session);if(e){if(t.type==="output")e.output=_s(e.output+t.text),ks.get(e.id)?.(t.text),Ki(e.id,t.text);else if(t.type==="cwd")e.cwd=t.cwd;else if(t.type==="exit"){if(e.connected=!1,e.ssh){Ki(e.id,`
[ssh] session closed
`),e.output=_s(e.output+`\r
\x1B[33m[ssh] session closed — 点「重连」重新登录\x1B[0m\r
`);return}window.setTimeout(()=>void rr(e),300)}}}function Su(t){return t?.message||String(t)}async function $u(t,e){if(t.ssh){const a=t.ssh;try{const r=await Wa({session:t.session,kind:"ssh",hostId:a.hostId,remote:a.remote,key:e});if(r?.kind!=="ssh")throw new Error("宿主未启用远端终端（缺少 /exec-open 的 kind 支持），请重启 dsh web");return t.sshDegraded=!1,r}catch(r){const u=Su(r);t.output=_s(t.output+`\r
\x1B[33m[ssh] 自动登录 ${a.label} 失败：${u}\x1B[0m\r
\x1B[2m[ssh] 已回退到本机 ssh 客户端，请手动输入口令；修好后可用页脚「重连」再试直连。\x1B[0m\r
`),Ki(t.id,`[ssh] auto login failed: ${u}
`),t.sshDegraded=!0,t.cwd="";const h=await Wa({session:t.session,kind:"local",shell:t.shell,key:e});return t.initCmd=t.fallbackCmd,Xi(t),h}}const n=await Wa({session:t.session,kind:"local",shell:t.shell,cwd:t.cwd||void 0,key:e});return Xi(t),n}async function rr(t){if(!(!Et.value.includes(t)||t.connected)){if(t.output="",Rn.value={...Rn.value,[t.id]:""},t.backend==="official"){No()?.close(t.id),t.connected=!0,Tu(t);return}try{const e=await $u(t,lr||void 0);e?.cwd&&(t.cwd=e.cwd),t.connected=!0,Eu()}catch{t.connected=!1}}}function Eu(){if(fs)return;xh();const t=new AbortController;fs=t;const e={dispose:()=>_a()};globalThis[xu]=e;const n=async()=>{if(!t.signal.aborted){try{await Wp(Cu,{key:lr},t.signal)}catch{}if(t.signal.aborted){fs===t&&(fs=null);return}window.setTimeout(()=>void n(),500)}};n()}function _a(){fs?.abort(),fs=null}function Ch(){Et.value.some(t=>t.connected)||_a()}function Xi(t){const e=t.initCmd;e&&(t.initCmd=void 0,window.setTimeout(()=>{t.connected&&(t.backend==="official"?No()?.write(t.id,`${e}\r`):hu(t.session,`${e}\r`))},800))}function nc(t,e){const n=new AbortController;t.streamAbort=n;const a=async()=>{if(!(!t.connected||n.signal.aborted)){try{await Hp(r=>Cu({...r,session:t.session}),{session:t.session,cwd:t.cwd||void 0,key:e,shell:t.shell},n.signal)}catch{}t.connected&&!n.signal.aborted?window.setTimeout(()=>void a(),500):t.connected=!1}};Xi(t),a()}let oc=!1;function Du(t){return Et.value.find(e=>e.id===t&&e.backend==="official")}function Sh(t){const e=Du(t.tag);e&&(e.output=_s(e.output+t.text),ks.get(e.id)?.(t.text),Ki(e.id,t.text))}function $h(t){const e=Du(t.tag);if(e){if(t.cwd&&t.cwd!==e.cwd&&(e.cwd=t.cwd),t.exited){e.connected=!1,window.setTimeout(()=>void rr(e),300);return}if(t.phase==="connected"&&!e.connected)e.connected=!0,Xi(e);else if(t.phase==="failed"&&t.error){const n=`\r
\x1B[33m[term] ${t.error}\x1B[0m\r
`;e.output=_s(e.output+n),ks.get(e.id)?.(n)}}}function Eh(){oc||typeof window>"u"||(oc=!0,window.addEventListener("dshfw-ot-data",t=>Sh(t.detail)),window.addEventListener("dshfw-ot-status",t=>$h(t.detail)))}async function Tu(t){const e=No();if(!e){t.backend=void 0,t.connected=!1,Yi(t);return}Eh();const n=await e.create(t.id,{cols:80,rows:24}).catch(()=>null);if(n===null){t.backend=void 0,t.connected=!1,Yi(t);return}if(!Et.value.includes(t)){e.close(t.id);return}n.cwd&&(t.cwd=n.cwd)}function Yi(t,e){if(!t.connected){if(t.connected=!0,e&&(lr=e),!t.ssh&&mh()){t.backend="official",Tu(t);return}if(t.backend=void 0,Ga===!1){nc(t,e);return}Eu(),$u(t,e).then(n=>{Ga=!0,n?.cwd&&(t.cwd=n.cwd)}).catch(n=>{n?.status===404&&(Ga=!1,Et.value.some(a=>a.connected)||_a()),nc(t,e)})}}const Dh=16,Th=512,Nh=/[\r\n\x03\x04\x1a]/,uo=new Map;function Nu(t){let e=uo.get(t);return e||(e={pending:"",timer:0,inFlight:!1},uo.set(t,e)),e}function gl(t){const e=Nu(t);if(e.timer&&(window.clearTimeout(e.timer),e.timer=0),!e.pending)return;const n=Et.value.find(r=>r.session===t);if(n?.backend==="official"){const r=e.pending;e.pending="",No()?.write(n.id,r),!e.pending&&!e.timer&&uo.delete(t);return}if(e.inFlight)return;const a=e.pending;e.pending="",e.inFlight=!0,hu(t,a).catch(r=>{Ph(t,r)}).finally(()=>{const r=uo.get(t);r&&(r.inFlight=!1,r.pending?gl(t):r.timer||uo.delete(t))})}const Fh=3e3,sc=new Map,qa=new Set;function Ph(t,e){const n=Et.value.find(u=>u.session===t);if(!n)return;const a=Su(e),r=Date.now();if(r-(sc.get(t)??0)>=Fh){sc.set(t,r);const u=`\r
\x1B[31m[term] ${v("termInputFailed",{msg:a})}\x1B[0m\r
`;n.output=_s(n.output+u),ks.get(n.id)?.(u),Y("warning",v("termInputFailed",{msg:a}))}e?.status===404&&Ah(n)}async function Ah(t){if(!(qa.has(t.session)||!Et.value.includes(t))){qa.add(t.session);try{ka(t),await rr(t)}finally{qa.delete(t.session)}}}function Rh(t,e){if(!e)return;const n=Et.value.find(r=>r.session===t);if(n&&!n.connected)return;const a=Nu(t);if(a.pending+=e,Nh.test(e)||a.pending.length>=Th){gl(t);return}a.timer||(a.timer=window.setTimeout(()=>gl(t),Dh))}function Fu(t){if(t){const e=uo.get(t);e&&e.timer&&window.clearTimeout(e.timer),uo.delete(t);return}for(const[e,n]of uo)n.timer&&window.clearTimeout(n.timer),uo.delete(e)}function ka(t){t.connected=!1,t.backend==="official"&&No()?.detach(t.id),t.streamAbort?.abort(),t.streamAbort=void 0,Fu(t.session),yl.delete(t.session)}function cr(t){return t.backend==="official"?(No()?.close(t.id),Promise.resolve()):Kp(t.session).catch(()=>{})}const yl=new Map;function Mh(t,e,n){if(!e||!n)return;const a=`${e}x${n}`;if(yl.get(t)===a)return;yl.set(t,a);const r=Et.value.find(u=>u.session===t);if(r?.backend==="official"){No()?.resize(r.id,e,n);return}qp(t,e,n).catch(()=>{})}async function ic(t,e){const n=t.backend==="official";ka(t),t.output="",Rn.value={...Rn.value,[t.id]:""},await cr(t),n&&(t.backend=void 0),Yi(t,e)}function Pu(t){const e=Et.value.findIndex(a=>a.id===t),n=Et.value[e];if(n&&(ka(n),cr(n),Et.value.splice(e,1),_h(t),ar(t),Ch(),Jo.value===t)){const a=Et.value[e]??Et.value[e-1]??Et.value[0];Jo.value=a?a.id:""}}async function Oh(){const t=Et.value.slice();Et.value=[],Jo.value="",Rn.value={},yh(),_a(),await Promise.all(t.map(e=>(ka(e),cr(e).catch(()=>{}))))}const di=new Map;let ac=0;function Lh(t){return di.get(t)}function Bh(t,e){di.set(t,e),Au()}function Ih(t){di.delete(t)&&Au()}function Au(){es("termWins",Object.fromEntries(di))}function jh(t){if(!t||typeof t!="object")return;const e=t;for(const[n,a]of Object.entries(e)){if(!a||typeof a!="object")continue;const r=a;typeof r.x=="number"&&typeof r.y=="number"&&typeof r.w=="number"&&typeof r.h=="number"&&di.set(n,{x:r.x,y:r.y,w:r.w,h:r.h})}}function Vh(){return{w:680,h:460,x:Math.max(12,window.innerWidth-680-24),y:Math.max(12,window.innerHeight-460-24)}}function zh(){ac+=1;const t=Vh(),e=ac%8*30;return{w:t.w,h:t.h,x:Math.max(12,t.x-e),y:Math.max(12,t.y-e)}}function lc(){return`t${Date.now().toString(36)}${Math.random().toString(36).slice(2,10)}`}function Uh(t,e){const n={id:lc(),name:kh(),session:lc(),cwd:e?.cwd??"",shell:e?.shell??"cmd",ssh:e?.ssh,fallbackCmd:e?.fallbackCmd||void 0,output:"",connected:!1,initCmd:e?.initCmd||void 0,focusPending:e?.focus===!0};return Et.value.push(n),Jo.value=n.id,Yi(n,t),n}function rc(t){Pu(t),Ih(t)}function Hh(t){const e=Et.value.find(n=>n.id===t);return e?.focusPending?(e.focusPending=!1,!0):!1}const qs={showHidden:!0,view:"details",showExtensions:!0,sortKey:"name",asc:!0,theme:"auto",fontFamily:"default",fontSize:13,accentColor:"",allowOutsideRoot:!1,colWidths:{name:300,size:96,type:160},termShell:"cmd",termFontSize:13,txtWordWrap:!1,txtShowStatus:!0,vsGitBarH:0,autoSave:!1,vsMinimap:!0},Ue=gt({...qs}),Ru=["huge","large","medium","small","list","details","content","tiles"];function Wh(t){if(!t||typeof t!="object")return{};const e=t,n={};typeof e.showHidden=="boolean"&&(n.showHidden=e.showHidden),typeof e.showExtensions=="boolean"&&(n.showExtensions=e.showExtensions),Ru.includes(String(e.view))&&(n.view=e.view),["name","size","type","mtime"].includes(String(e.sortKey))&&(n.sortKey=e.sortKey),typeof e.asc=="boolean"&&(n.asc=e.asc),["auto","dark","light"].includes(String(e.theme))&&(n.theme=e.theme),typeof e.fontFamily=="string"&&(n.fontFamily=e.fontFamily.trim()||"default"),typeof e.fontSize=="number"&&e.fontSize>0&&(n.fontSize=e.fontSize),typeof e.accentColor=="string"&&/^#[0-9a-fA-F]{3,8}$/.test(e.accentColor)&&(n.accentColor=e.accentColor),typeof e.allowOutsideRoot=="boolean"&&(n.allowOutsideRoot=e.allowOutsideRoot);const a=e.colWidths;if(a&&typeof a=="object"){const r=(u,h)=>typeof u=="number"&&Number.isFinite(u)&&u>=40?u:h;n.colWidths={name:r(a.name,qs.colWidths.name),size:r(a.size,qs.colWidths.size),type:r(a.type,qs.colWidths.type)}}return(e.termShell==="powershell"||e.termShell==="cmd")&&(n.termShell=e.termShell),typeof e.termFontSize=="number"&&e.termFontSize>=8&&e.termFontSize<=36&&(n.termFontSize=e.termFontSize),typeof e.txtWordWrap=="boolean"&&(n.txtWordWrap=e.txtWordWrap),typeof e.txtShowStatus=="boolean"&&(n.txtShowStatus=e.txtShowStatus),typeof e.vsGitBarH=="number"&&e.vsGitBarH>=0&&(n.vsGitBarH=e.vsGitBarH),typeof e.autoSave=="boolean"&&(n.autoSave=e.autoSave),typeof e.vsMinimap=="boolean"&&(n.vsMinimap=e.vsMinimap),n}async function Gh(){const t=await _u().catch(()=>null);if(t){if(Object.assign(Ue,{...qs,...Wh(t.prefs)}),Array.isArray(t.favorites)&&(Ko.value=t.favorites.map(String)),t.layout&&typeof t.layout=="object"){const e=t.layout,n=e.navGroups;if(n&&typeof n=="object"){const a=n;Object.assign(Un.navGroups,Mu.navGroups),typeof a.home=="boolean"&&(Un.navGroups.home=a.home),typeof a.myComputer=="boolean"&&(Un.navGroups.myComputer=a.myComputer),typeof a.favorites=="boolean"&&(Un.navGroups.favorites=a.favorites),typeof a.ssh=="boolean"&&(Un.navGroups.ssh=a.ssh)}typeof e.explorerSplit=="number"&&e.explorerSplit>.05&&e.explorerSplit<.95&&(Un.explorerSplit=e.explorerSplit)}if(t.termWin&&typeof t.termWin=="object"){const e=t.termWin;typeof e.w=="number"&&e.w>0&&e.w,typeof e.h=="number"&&e.h>0&&e.h,typeof e.x=="number"&&e.x,typeof e.y=="number"&&e.y}if(t.termWins&&typeof t.termWins=="object"&&jh(t.termWins),t.folderViews&&typeof t.folderViews=="object"){for(const n of Object.keys(mo))delete mo[n];const e=t.folderViews;for(const[n,a]of Object.entries(e))Ru.includes(String(a))&&(mo[n]=String(a))}}}function Hn(){es("prefs",{...Ue})}const Mu={navGroups:{home:!0,myComputer:!0,favorites:!0,ssh:!0},explorerSplit:.3},Un=gt({...Mu});function Ii(){es("layout",{...Un})}const mo=gt({}),Ji=g(Ue.view);function wl(t){return mo[t]??Ue.view}function bl(t,e){mo[t]=e,es("folderViews",{...mo})}function qh(){for(const t of Object.keys(mo))delete mo[t];es("folderViews",{...mo})}const Ko=g([]);function cc(){es("favorites",Ko.value)}function ps(t){return Ko.value.includes(t)}function Qi(t){const e=Ko.value.indexOf(t);return e>=0?(Ko.value.splice(e,1),cc(),!1):(Ko.value.push(t),cc(),!0)}const Kh={class:"fw-dlg-head"},Xh={class:"fw-dlg-badge"},Yh={class:"fw-dlg-headtext"},Jh={class:"fw-dlg-headtitle"},Qh={class:"fw-dlg-headsub"},Zh={class:"fw-set-body"},ev={class:"fw-set-group"},tv={class:"fw-set-group-title"},nv={class:"fw-set-row"},ov={class:"k"},sv={class:"fw-set-row"},iv={class:"k"},av={class:"fw-set-row"},lv={class:"k"},rv={class:"fw-set-group"},cv={class:"fw-set-group-title"},uv={class:"fw-set-row"},dv={class:"k"},fv={class:"fw-set-accent"},pv={class:"fw-set-row"},hv={class:"k"},vv={class:"fw-set-row"},mv={class:"k"},gv={class:"fw-set-row"},yv={class:"k"},wv={class:"fw-set-row"},bv={class:"k"},_v=vt({__name:"SettingsDialog",setup(t,{expose:e}){const{t:n}=Mt(),a=g(!1),r=["#1f883d","#238636","#0969da","#8250df","#b35900","#cf222e","#0a3069","#116329"];function u(w){Ue.accentColor=typeof w=="string"?w:"",Hn()}function h(){Ue.accentColor="",Hn()}e({open:()=>{a.value=!0}});function d(){Hn()}function p(){qh(),Hn()}return(w,b)=>{const _=Vf,M=zf,O=Mn,N=ma,j=va,H=un;return l(),Xe(H,{modelValue:a.value,"onUpdate:modelValue":b[8]||(b[8]=C=>a.value=C),class:"fw-set-dialog",width:"460px","align-center":"","modal-class":"fw-blur-overlay","close-on-click-modal":!1},{header:se(()=>[s("div",Kh,[s("span",Xh,[m(oe,{name:"gear",size:20})]),s("span",Yh,[s("span",Jh,i(o(n)("settings")),1),s("span",Qh,i(o(n)("settingsSubtitle")),1)])])]),default:se(()=>[s("div",Zh,[s("div",ev,[s("div",tv,i(o(n)("settingsGroupFiles")),1),s("div",nv,[s("span",ov,i(o(n)("allowOutsideRoot")),1),m(_,{modelValue:o(Ue).allowOutsideRoot,"onUpdate:modelValue":b[0]||(b[0]=C=>o(Ue).allowOutsideRoot=C),onChange:d},null,8,["modelValue"])]),s("div",sv,[s("span",iv,i(o(n)("showHidden")),1),m(_,{modelValue:o(Ue).showHidden,"onUpdate:modelValue":b[1]||(b[1]=C=>o(Ue).showHidden=C),onChange:d},null,8,["modelValue"])]),s("div",av,[s("span",lv,i(o(n)("autoSave")),1),m(_,{modelValue:o(Ue).autoSave,"onUpdate:modelValue":b[2]||(b[2]=C=>o(Ue).autoSave=C),onChange:d},null,8,["modelValue"])])]),s("div",rv,[s("div",cv,i(o(n)("settingsGroupAppearance")),1),s("div",uv,[s("span",dv,i(o(n)("accentColor")),1),s("span",fv,[m(M,{modelValue:o(Ue).accentColor,"onUpdate:modelValue":b[3]||(b[3]=C=>o(Ue).accentColor=C),size:"small",predefine:r,"popper-class":"fw-set-popper",onChange:u},null,8,["modelValue"]),o(Ue).accentColor?(l(),Xe(O,{key:0,text:"",size:"small",class:"fw-set-accent-reset",onClick:h},{default:se(()=>[ue(i(o(n)("accentReset")),1)]),_:1})):A("",!0)])]),s("div",pv,[s("span",hv,i(o(n)("fontSize")),1),m(j,{modelValue:o(Ue).fontSize,"onUpdate:modelValue":b[4]||(b[4]=C=>o(Ue).fontSize=C),size:"small",class:"fw-set-select","popper-class":"fw-set-popper",onChange:d},{default:se(()=>[m(N,{value:12,label:o(n)("fontSizeSm")},null,8,["label"]),m(N,{value:13,label:o(n)("fontSizeMd")},null,8,["label"]),m(N,{value:14,label:o(n)("fontSizeLg")},null,8,["label"]),m(N,{value:16,label:o(n)("fontSizeXl")},null,8,["label"])]),_:1},8,["modelValue"])]),s("div",vv,[s("span",mv,i(o(n)("fontFamily")),1),m(j,{modelValue:o(Ue).fontFamily,"onUpdate:modelValue":b[5]||(b[5]=C=>o(Ue).fontFamily=C),size:"small",class:"fw-set-select","popper-class":"fw-set-popper",clearable:"",placeholder:o(n)("fontDefault"),onChange:d},{default:se(()=>[m(N,{value:"default",label:o(n)("fontDefault")},null,8,["label"]),m(N,{value:"'Segoe UI', 'Microsoft YaHei', system-ui",label:o(n)("fontOptionYahei")},null,8,["label"]),m(N,{value:"Consolas",label:o(n)("fontOptionConsolas")},null,8,["label"]),m(N,{value:"'Courier New', monospace",label:o(n)("fontOptionCourier")},null,8,["label"]),m(N,{value:"Georgia, 'Times New Roman', serif",label:o(n)("fontOptionGeorgia")},null,8,["label"])]),_:1},8,["modelValue","placeholder"])]),s("div",gv,[s("span",yv,i(o(n)("themeMode")),1),m(j,{modelValue:o(Ue).theme,"onUpdate:modelValue":b[6]||(b[6]=C=>o(Ue).theme=C),size:"small",class:"fw-set-select","popper-class":"fw-set-popper",onChange:d},{default:se(()=>[m(N,{value:"auto",label:o(n)("themeAuto")},null,8,["label"]),m(N,{value:"dark",label:o(n)("themeDark")},null,8,["label"]),m(N,{value:"light",label:o(n)("themeLight")},null,8,["label"])]),_:1},8,["modelValue"])]),s("div",wv,[s("span",bv,i(o(n)("defaultView")),1),m(j,{modelValue:o(Ue).view,"onUpdate:modelValue":b[7]||(b[7]=C=>o(Ue).view=C),size:"small",class:"fw-set-select","popper-class":"fw-set-popper",onChange:p},{default:se(()=>[m(N,{value:"details",label:o(n)("viewDetails")},null,8,["label"]),m(N,{value:"content",label:o(n)("viewContent")},null,8,["label"]),m(N,{value:"tiles",label:o(n)("viewTiles")},null,8,["label"]),m(N,{value:"list",label:o(n)("viewList")},null,8,["label"]),m(N,{value:"small",label:o(n)("viewSmall")},null,8,["label"]),m(N,{value:"medium",label:o(n)("viewMedium")},null,8,["label"]),m(N,{value:"large",label:o(n)("viewLarge")},null,8,["label"]),m(N,{value:"huge",label:o(n)("viewHuge")},null,8,["label"])]),_:1},8,["modelValue"])])])])]),_:1},8,["modelValue"])}}}),xt=(t,e)=>{const n=t.__vccOpts||t;for(const[a,r]of e)n[a]=r;return n},kv=xt(_v,[["__scopeId","data-v-fbafa4a0"]]),ur=new Map,dr=new Map,_l=new Set,kl=new Set,xl=new Set,Ks=new Set,ti=new Set;let Xs=null,xs="\0unset",It=null,go=0,Cs="",Ss="";const ji=new Set;let ms=!0;const uc="__DSH_FW_PUSH_WS__";function xv(){ms=!0,go&&(window.clearTimeout(go),go=0);const t=It;It=null;try{t?.close()}catch{}}const dc={dispose:()=>xv()};function Cv(){const t=globalThis,e=t[uc];if(e&&e!==dc&&typeof e.dispose=="function")try{e.dispose()}catch{}t[uc]=dc}Cv();function Ou(){const t=new Set;for(const e of ur.values())for(const n of e)t.add(n);return[...t].sort()}function Lu(){const t=new Set(Ks);for(const e of dr.values())for(const n of e)t.add(n);return[...t].sort()}function Sv(){if(!Ks.size)return;const t=new Set;for(const e of dr.values())for(const n of e)t.add(n);for(const e of ti)for(const n of e.ids)t.add(n);for(const e of[...Ks])t.has(e)||Ks.delete(e)}function $v(t,e){return lu(t,e,"push")}function Ev(){const t=typeof location<"u"?location.href:"http://127.0.0.1/";return $v(Yn,t)}function Bu(){return It!==null&&It.readyState===WebSocket.OPEN}function fc(){ms||go||(go=window.setTimeout(()=>{go=0,Iu()},1500))}function Iu(){if(ms||It&&(It.readyState===WebSocket.OPEN||It.readyState===WebSocket.CONNECTING))return;let t;try{t=new WebSocket(Ev())}catch{fc();return}It=t,t.onopen=()=>{Cs="",Ss="",xs="\0unset",ju()},t.onmessage=e=>Dv(e.data),t.onerror=()=>{},t.onclose=()=>{It===t&&(It=null),Cs="",Ss="",xs="\0unset",fc()}}function ju(){if(!It||It.readyState!==WebSocket.OPEN)return;const t=Ou(),e=t.join(`
`);e!==Cs&&(Cs=e,It.send(JSON.stringify({type:"watch",paths:t})));const n=Lu(),a=n.join(`
`);if(a!==Ss&&(Ss=a,It.send(JSON.stringify({type:"ssh-watch",ids:n}))),ji.size){const r=[...ji];ji.clear(),It.send(JSON.stringify({type:"ssh-check",ids:r}))}Xs!==xs&&(xs=Xs,It.send(JSON.stringify({type:"session-watch",id:Xs})))}function Dv(t){if(typeof t!="string")return;let e;try{e=JSON.parse(t)}catch{return}if(e.type==="changed"&&e.items){const n=e.items;for(const[a,r]of Object.entries(n))for(const u of _l)u(a,r);return}if(e.type==="ssh-status"&&e.items){const n=e.items;for(const a of kl)a(n);for(const a of[...ti])Object.keys(n).some(r=>a.ids.has(r))&&(ti.delete(a),a.resolve(n));return}if(e.type==="session-ev"&&e.ev&&typeof e.ev=="object")for(const n of xl)n(e.ev)}function $s(){if(!(Ou().length>0||Lu().length>0||Xs!==null)){ms=!0,Cs="",Ss="",xs="\0unset",go&&(window.clearTimeout(go),go=0);const e=It;It=null;try{e?.close()}catch{}return}ms&&(Cs="",Ss="",xs="\0unset"),ms=!1,Iu(),ju()}function Tv(t,e){ur.set(t,e),$s()}function Nv(t){ur.delete(t),$s()}function Fv(t){return _l.add(t),()=>_l.delete(t)}function Pv(t,e){dr.set(t,e),$s()}function Av(t){return kl.add(t),()=>kl.delete(t)}function Vu(t,e=12e3){const n=[...new Set(t.filter(Boolean))];if(!n.length)return Promise.resolve({});for(const a of n)Ks.add(a);return $s(),new Promise(a=>{let r=0;const u=d=>{r&&window.clearTimeout(r),ti.delete(h),Sv(),$s(),a(d)},h={ids:new Set(n),resolve:u};if(ti.add(h),r=window.setTimeout(()=>u({}),e),It&&It.readyState===WebSocket.OPEN)It.send(JSON.stringify({type:"ssh-check",ids:n}));else for(const d of n)ji.add(d)})}function fr(t){Xs=t,$s()}function Rv(t){return xl.add(t),()=>xl.delete(t)}const rn=g([]),zu=g(!1),en=g({});function Zi(t){return en.value[t]?.state??"unknown"}function Cl(t){return en.value[t]?.error??""}async function ea(t){en.value={...en.value,[t]:{state:"checking"}};const n=(await Vu([t]))[t];return n?(en.value={...en.value,[t]:n.alive?{state:"online"}:{state:"offline",error:n.error}},n.alive):(en.value={...en.value,[t]:{state:"unknown"}},!1)}async function Sl(){const t=rn.value.map(n=>n.id);if(!t.length)return;const e={...en.value};for(const n of t)e[n]={state:"checking"};if(en.value=e,!Bu()){await Uu();return}await Vu(t)}async function Xo(){try{const t=await Fp();rn.value=t.hosts??[];const e=new Set(rn.value.map(n=>n.id));for(const n of Object.keys(en.value))e.has(n)||delete en.value[n];Hu()}catch{rn.value=[]}finally{zu.value=!0}}let $l=!1;function Mv(){$l||($l=!0,Av(t=>{const e={...en.value};for(const[n,a]of Object.entries(t))e[n]=a.alive?{state:"online"}:{state:"offline",error:a.error};en.value=e})),Hu(),Lv()}const Ov=3e4;let pc=null;async function Uu(){const t=rn.value.slice();t.length&&await Promise.all(t.map(async e=>{const n=await Mp(e.id).catch(()=>null);n&&(en.value={...en.value,[e.id]:n.alive?{state:"online"}:{state:"offline",error:n.error}})}))}function Lv(){pc||(pc=setInterval(()=>{Bu()||Uu()},Ov))}function Hu(){$l&&Pv("ssh-store",rn.value.map(t=>t.id))}function Wu(t){if(!t.startsWith("ssh://"))return null;const e=t.slice(6),n=e.indexOf("/"),a=n===-1?e:e.slice(0,n);if(!a)return null;const r=n===-1?"/":e.slice(n)||"/";return{hostId:a,remote:r.replace(/\/+$/,"")||"/"}}function Bv(t,e="cmd"){const n=Wu(t);if(!n)return"";const a=rn.value.find(w=>w.id===n.hostId);if(!a)return"";const r=a.authType==="key"&&a.privateKeyPath?`-i "${a.privateKeyPath}" `:"",d=`cd ${`'${n.remote.replace(/'/g,"'\\''")}'`} && exec bash -l`.replace(/"/g,'\\"'),p=e==="powershell"?`'${d.replace(/'/g,"''")}'`:`"${d}"`;return`ssh ${r}-p ${a.port||22} -o StrictHostKeyChecking=accept-new -t ${a.user}@${a.host} ${p}`}function Go(t){return`ssh://${t}/`}function Iv(t){const e=Wu(t);if(!e)return null;const n=rn.value.find(a=>a.id===e.hostId);return n?{hostId:n.id,remote:jv(e.remote),label:n.name||`${n.user}@${n.host}`}:null}function jv(t){const e=(t??"").trim().replace(/\\/g,"/");return e?e.startsWith("/")?e.replace(/\/+$/,"")||"/":`/${e.replace(/\/+$/,"")}`:"/"}function pr(t){if(!t.startsWith("ssh://"))return"";const e=t.slice(6),n=e.indexOf("/");return(n===-1?e:e.slice(0,n)).trim()}function Gu(t){if(!t.startsWith("ssh://"))return"";const e=t.slice(6),n=e.indexOf("/");return(n===-1?"":e.slice(n)).replace(/\/+$/,"")||"/"}function El(t){const e=pr(t);if(!e)return t;const n=rn.value.find(u=>u.id===e),a=n?n.name||`${n.user}@${n.host}`:e,r=Gu(t);return r&&r!=="/"?`${a} · ${r}`:a}function ta(t){const e=pr(t);if(!e)return"";const n=Gu(t);if(!n||n==="/")return"";const a=n.lastIndexOf("/"),r=a<=0?"/":n.slice(0,a);return`ssh://${e}${r==="/"?"/":r}`}function hc(t,e){return`${t.replace(/\/+$/,"")}/${e}`}async function Vv(t=!1){zu.value&&!t||await Xo()}function qu(t){if(!t.startsWith("ssh://"))return null;const e=t.slice(6),n=e.indexOf("/"),a=n===-1?e:e.slice(0,n);if(!a)return null;const r=n===-1?"":e.slice(n),u=rn.value.find(w=>w.id===a),d=[{name:u?u.name||`${u.user}@${u.host}`:a,path:`ssh://${a}/`}];let p="";for(const w of r.split("/").filter(Boolean))p+=`/${w}`,d.push({name:w,path:`ssh://${a}${p}`});return d}const kn=gt({open:!1,editingId:null});function Ku(){kn.editingId=null,kn.open=!0}function zv(t){kn.editingId=t,kn.open=!0}function Di(){kn.open=!1}const Ne=gt({key:"default",root:"",explorerPath:"",externalViewActive:!1,search:{q:"",hits:[],truncated:!1,running:!1,scope:""},termOpen:!1,termRequestCwd:"",termRequestCmd:"",termRequestSsh:null}),na=g("");function Ti(t){na.value=t}const js=g(!1),Vs=g(!1);async function Xu(t){if(!Wt(t))return{cwd:t,cmd:"",ssh:null};await Vv();const e=Iv(t);return e?{cwd:"",cmd:Bv(t,Ue.termShell),ssh:e}:(Y("info",v("remoteNoTerminal")),{cwd:"",cmd:"",ssh:null})}async function Es(t=""){Yu(await Xu(t)),Ne.termOpen?hr.value++:Ne.termOpen=!0}function Yu(t){Ne.termRequestCwd=t.cwd,Ne.termRequestCmd=t.cmd,Ne.termRequestSsh=t.ssh}const hr=g(0);async function Uv(t=""){Yu(await Xu(t)),Ne.termOpen?hr.value++:Ne.termOpen=!0}async function Dl(t){const{root:e}=await sr(t,Ne.key);return e===Ne.root||(Ne.root=e,Ne.explorerPath=e,Ne.search.hits=[],Ne.search.q=""),e}function _o(t){return!Ne.root||Hv(Ne.root,t)?!0:Ue.allowOutsideRoot}function Hv(t,e){const n=u=>u.replace(/[\\/]+/g,"/").replace(/\/$/,""),a=n(t).toLowerCase(),r=n(e).toLowerCase();return r===a||r.startsWith(`${a}/`)}async function Wv(){if(Ne.root)return;const{root:t}=await Ep(Ne.key);if(t){Ne.root=t,Ne.explorerPath=t;return}const e=window.__DSH_FILE_WORKBENCH__?.getSessionDir?.();if(e){await Dl(e);return}const n=window.__DSH_FILE_WORKBENCH__?.pickDirectory;if(n){const a=await n();a&&await Dl(a)}}async function fi(t){const e=window.__DSH_FILE_WORKBENCH__;if(e?.openInSidebar){if(Wt(t)){const n=await Op(t);e.openInSidebar(n.path);return}e.openInSidebar(t)}}let Ka=0;async function gs(t,e){if(Ne.search.q=t,!t.trim()){Ne.search.hits=[],Ne.search.truncated=!1;return}const n=(e||Ne.root||"").replace(/[\\/]+$/,"");if(!n)return;const a=++Ka;Ne.search.running=!0;try{const{matches:r,truncated:u,byContent:h,snippets:d}=await Tp(t,{key:Ne.key,path:n,limit:2e3,caseSensitive:js.value,regex:Vs.value});if(a!==Ka)return;const p=new Set(h??[]);Ne.search.hits=r.map(w=>({name:w.slice(w.lastIndexOf("/")+1),path:`${n}/${w}`,isDir:!1,broken:!1,byContent:p.has(w),snippet:d?.[w]})),Ne.search.truncated=u,Ne.search.scope=n}finally{a===Ka&&(Ne.search.running=!1)}}const le=gt({homeItems:[],listing:null,loading:!1,loadErr:"",view:"files",recycleItems:[],recycleLoading:!1,recycleErr:"",drives:[],drivesLoading:!1,drivesErr:""});async function Ju(){le.loadErr="";try{le.homeItems=(await fu(Ne.key)).items}catch(t){le.loadErr=t.message}}const Bt=gt({history:[],idx:-1}),Ys="thispc",vc="回收站";function xa(t){const e=t.trim();return e.startsWith("ssh://")?!0:/^[A-Za-z]:[\\/]/.test(e)||/^[\\/]{1,2}[^\\/]/.test(e)||/^[\\/]$/.test(e)}const Gv=B(()=>Bt.idx>0),qv=B(()=>Bt.idx<Bt.history.length-1),Kv=B(()=>le.view==="files");function Qu(t,e){if(!e)return;const n=t===Ys?t:t.replace(/[\\/]+$/,""),a=Bt.history[Bt.idx]===Ys?Ys:Bt.history[Bt.idx]?.replace(/[\\/]+$/,"")??"";n!==a&&(Bt.history.length=Bt.idx+1,Bt.history.push(n),Bt.idx=Bt.history.length-1)}async function Vt(t,e=!0){if(xa(t)){le.view="files",Qu(t,e),le.loadErr="",le.loading=!0;try{le.listing=await zp(t,Ne.key)}catch(n){le.loadErr=n.message}finally{le.loading=!1}}}async function vr(){le.drivesErr="",le.drivesLoading=!0;try{le.drives=(await pu()).drives??[]}catch(t){le.drivesErr=t.message}finally{le.drivesLoading=!1}}async function Zu(t=!0){Qu(Ys,t),le.view="computer",le.loadErr="",le.listing=null,await vr()}async function ed(t,e=!0){t===Ys?await Zu(e):await Vt(t,e)}function td(){Bt.idx>0&&(Bt.idx-=1,ed(Bt.history[Bt.idx],!1))}function nd(){Bt.idx<Bt.history.length-1&&(Bt.idx+=1,ed(Bt.history[Bt.idx],!1))}async function od(){const t=le.homeItems,e=t.find(n=>n.type==="home")?.path??t.find(n=>n.type==="workspace")?.path??t.find(n=>n.type==="drive")?.path;e&&await Vt(e)}async function Tl(){le.view==="files"&&le.listing&&(le.listing.parent?await Vt(le.listing.parent):await od())}async function sd(){const t=window.__DSH_FILE_WORKBENCH__?.getSessionDir?.();if(!t)return!1;const e=Ne.root;try{await Dl(t)}catch{return!1}return Ne.root!==e&&await Ju(),await Vt(t),!0}function Nt(){return So("mycomputer"),So("drives"),le.view==="computer"?vr():le.view==="recycle"?ko():le.listing?Vt(le.listing.path,!1):Promise.resolve()}function Xv(){return(le.recycleItems??[]).map(t=>{const e=Date.parse(t.dateDeleted);return{name:t.name,path:t.fullPath,isDir:t.isDir,isSymlink:!1,broken:!1,hidden:!1,size:t.size||0,mtime:Number.isNaN(e)?void 0:e,recycleFullPath:t.fullPath,originalPath:t.originalPath,dateDeleted:t.dateDeleted}})}async function id(){le.recycleErr="",le.recycleLoading=!0,le.loading=!0,le.loadErr="";try{const t=(await Lp()).items;le.recycleItems=Array.isArray(t)?t:[],le.listing={path:vc,name:vc,entries:Xv(),truncated:!1}}catch(t){le.recycleErr=t.message,le.loadErr=t.message,le.listing=null}finally{le.recycleLoading=!1,le.loading=!1}}async function mc(){le.view="recycle",await id()}function ko(){return id()}async function Yv(){(window.__DSH_FILE_WORKBENCH__?.getSessionDir?.()??null)&&await Nt()}const Nl=B(()=>le.listing?.path??"");let gc=!1;function Jv(){return gc?!1:(gc=!0,!0)}const ad="vscode";function Ca(){return typeof window<"u"?window.__DSH_SIDEBAR_RIGHT__:void 0}function ld(t,e){Ca()?.openTab(t,e)}function mr(t){return Ca()?.newEditorTab(t)??!1}function Qv(){const t=Ca();if(!t)return!1;const e=t.editorTabLimit();return e>0&&t.editorTabCount()>=e}function Zv(t){Ca()?.float(t)}let Ds=null;function em(){const t=Ds;return Ds=null,t}function tm(){Ds=null}let Fl=null;function yc(){const t=Fl;return Fl=null,t}function gr(t,e={}){const n=t?.trim();if(!n)return;if(n.startsWith("ssh://")){nm(n,e.isDir);return}Ds=n;const a=Qv();if(!mr({projectDir:n})){ld(ad,{params:{projectDir:n}});return}a&&Y("info",v("vsReplacedOldest"))}async function nm(t,e){const n=Go(pr(t));let a=e;a===void 0&&t!==n&&(a=(await hl(t))?.isDir??!1);const r=t===n||a===!0;Ds=r?t:n,Fl=r?null:t;const u=Ds;mr({projectDir:u})||ld(ad,{params:{projectDir:u}})}const Pt=gt({list:[],history:[],archives:{}});let om=1,wc=!1;const rd=gt({value:!1});function sm(t){rd.value=t}function yr(t){const e=new Date(t),n=a=>String(a).padStart(2,"0");return`${e.getFullYear()}-${n(e.getMonth()+1)}-${n(e.getDate())}`}function wr(){return yr(Date.now())}function Ni(t){return t.doneAt??t.startedAt}function cd(t){let e=!0;for(let n=1;n<t.length;n++)if(Ni(t[n-1])<Ni(t[n])){e=!1;break}return e?!1:(t.sort((n,a)=>Ni(a)-Ni(n)),!0)}function ud(t){if(!t.length)return;const e=wr(),n=Pt.archives[e]??(Pt.archives[e]=[]);n.push(...t),cd(n),ir(Pt.archives)}async function im(){if(!wc){wc=!0;try{const t=await ph(),e=await vh(),n=wr(),a=[];let r=!1;for(const h of t){const d=yr(h.doneAt??h.startedAt);d===n?a.push(h):((e[d]??=[]).push(h),r=!0)}let u=!1;for(const h of Object.keys(e))cd(e[h])&&(u=!0);Pt.history=a,Pt.archives=e,(r||u)&&(Sa(),ir(e))}catch{Pt.history=[],Pt.archives={}}}}function Sa(){hh(Pt.history)}function am(t){const e=yr(t.doneAt??t.startedAt);e===wr()?(Pt.history.unshift(t),Pt.history.length>200&&(Pt.history.length=200),Sa()):((Pt.archives[e]??(Pt.archives[e]=[])).unshift(t),ir(Pt.archives))}function sn(t,e,n,a){const r=om++,u=gt({id:r,label:t,detail:e,status:"running",startedAt:Date.now(),logs:[{time:Date.now(),status:"running",msg:t,file:e,fileType:n,fileSize:a}]});Pt.list.unshift(u),Pt.list.length>80&&(Pt.list.length=80);const h=(w,b)=>{u.status=w,u.doneAt=Date.now(),u.msg=b,u.logs.push({time:u.doneAt,status:w,msg:b??"",file:e}),am({label:u.label,detail:e,status:w,msg:b,startedAt:u.startedAt,doneAt:u.doneAt,logs:u.logs.map(_=>({..._}))})};return{step:(w,b,_,M,O)=>{u.status==="running"&&u.logs.push({time:Date.now(),status:"running",msg:w,file:b,detail:_,fileType:M,fileSize:O})},updateLabel:w=>{u.label=w},done:w=>h("done",w),fail:w=>h("error",w)}}async function dd(){ud(Pt.history),Pt.history=[],Pt.list=Pt.list.filter(t=>t.status==="running"),Sa()}async function fd(){ud(Pt.history),Pt.history=[],Pt.list=[],Sa()}const Kn={state:Pt,startTask:sn,initTaskLogs:im,clearFinished:dd,clearAll:fd,setOpen:sm,open:rd},{t:rs}=Mt();function lm(t){return new Promise(e=>setTimeout(e,t))}async function pd(){if((le.recycleItems?.length??0)===0||!await Rt({title:rs("recycleEmpty"),message:rs("recycleEmptyConfirm")}))return;const e=sn(rs("recycleEmptying"),"");try{await Vp();let n=le.recycleItems?.length??0;for(let a=0;a<120;a+=1){await lm(1e3);try{n=(await Bp()).count}catch{}if(e.step(rs("recycleEmptyProgress",{count:n})),n<=0)break}e.updateLabel(rs("recycleEmptyDone")),e.done(rs("recycleEmptyDone")),await ko()}catch(n){e.fail(n.message),Y("error",n.message)}}function Pl(){return Ue.theme==="dark"?!0:Ue.theme==="light"?!1:typeof document>"u"?!0:document.documentElement.style.colorScheme!==""?document.body.hasAttribute("data-ds-dark-theme"):typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const hd=[["--dsh-bg","--dsw-alias-bg-base"],["--dsh-bg2","--dsw-alias-bg-layer-1"],["--dsh-border","--dsw-alias-border-l1"],["--dsh-fg","--dsw-alias-label-primary"],["--dsh-fg-weak","--dsw-alias-label-secondary"],["--dsh-hover","--dsw-alias-interactive-bg-hover"],["--dsh-accent","--dsw-alias-state-success-primary"]];function rm(t){if(typeof document>"u")return;const e=t??document.body??document.documentElement,n=getComputedStyle(e),a=[document.documentElement,t].filter(r=>!!r);for(const[r,u]of hd){const h=n.getPropertyValue(u).trim();if(h)for(const d of a)d.style.setProperty(r,h)}}function cm(t){if(typeof document>"u")return;const e=[document.documentElement,t].filter(n=>!!n);for(const[n]of hd)for(const a of e)a.style.removeProperty(n)}function um(){if(Ue.theme==="dark")return"dark";if(Ue.theme==="light")return"light";if(typeof document>"u")return"dark";const e=document.querySelector(".fw-root[data-theme]")?.getAttribute("data-theme");return e==="light"||e==="dark"?e:Pl()?"dark":"light"}function br(t){const e=g(Pl()?"dark":"light");function n(){const h=Pl();if(e.value=h?"dark":"light",t.value&&t.value.setAttribute("data-theme",e.value),typeof document<"u"){const d=document.documentElement;d.setAttribute("data-theme",e.value);const p=d.style.colorScheme!=="";Ue.theme==="auto"&&p?rm(t.value):cm(t.value),d.classList.toggle("dark",h),a(d),t.value&&a(t.value)}}function a(h){Ue.accentColor?h.style.setProperty("--dsh-accent",Ue.accentColor):h.style.removeProperty("--dsh-accent")}n();let r;typeof document<"u"&&typeof MutationObserver<"u"&&(r=new MutationObserver(n),r.observe(document.body,{attributes:!0,attributeFilter:["data-ds-dark-theme"]}));const u=typeof matchMedia<"u"?matchMedia("(prefers-color-scheme: dark)"):void 0;return u?.addEventListener("change",n),Je(()=>[Ue.theme,Ue.accentColor],n,{deep:!1}),er(()=>{r?.disconnect(),u?.removeEventListener("change",n)}),e}const dm=["data-theme"],fm={key:0,class:"fw-cm-header"},pm={key:0,class:"fw-cm-sep"},hm=["onMouseenter","onClick"],vm={class:"fw-cm-ico"},mm={key:1},gm={class:"fw-cm-label"},ym={key:0,class:"fw-cm-hint"},wm={class:"fw-cm-check"},bm={key:1,class:"fw-cm-arrow"},_m=["title","onClick"],km={key:1,class:"fw-cm-footer"},xm={key:0,class:"fw-cm-sep"},Cm=["onClick"],Sm={class:"fw-cm-ico"},$m={key:1},Em={class:"fw-cm-label"},Dm={key:0,class:"fw-cm-sep"},Tm=["onClick"],Nm={class:"fw-cm-ico"},Fm={key:1},Pm={class:"fw-cm-label"},Am={class:"fw-cm-check"},Rm=vt({__name:"ContextMenu",props:{items:{},x:{},y:{},maxHeight:{},footerItems:{},placement:{}},emits:["close"],setup(t,{emit:e}){const n=t,a=e,r=g(!1),u=g(null),h=g(null),d=g({x:n.x,y:n.y}),p=g(-1),w=g(!1),b=g(null),_=g({x:0,y:0}),M=g("dark");function O(){return M.value=um(),M.value}function N(ge){return!!ge.separator}Je(()=>[n.x,n.y],([ge,ne])=>{d.value={x:ge,y:ne},p.value=-1,b.value=null,r.value=!0,O(),requestAnimationFrame(j)}),Je(()=>n.items,()=>{r.value&&requestAnimationFrame(j)});function j(){const ge=u.value;if(!ge)return;const ne=window.innerWidth,ae=window.innerHeight,Ee=ge.getBoundingClientRect();let Ve=d.value.x,be=d.value.y;Ve+Ee.width>ne-4&&(Ve=Math.max(4,ne-Ee.width-4)),be+Ee.height>ae-4&&(be=Math.max(4,ae-Ee.height-4)),Ee.top<4&&(be=Math.max(4,be+(4-Ee.top))),d.value={x:Ve,y:be}}function H(ge,ne){p.value=ge;const ae=u.value,Ee=n.items[ge],Ve=ne?.currentTarget??ae?.querySelectorAll(".fw-cm-item")[ge]??null;w.value=!!ae&&d.value.x+ae.getBoundingClientRect().width+180>window.innerWidth,Ee?.children?.length?(b.value=Ee,C(Ve)):b.value=null}function C(ge){const ne=ge??null;if(!ne)return;const ae=ne.getBoundingClientRect();let Ve=w.value?ae.left-220:ae.right-2;const be=Math.max(4,ae.top-4);_.value={x:Ve,y:be},requestAnimationFrame(()=>{const Pe=h.value;if(!Pe)return;const W=Pe.getBoundingClientRect();let J=Ve,z=be;J+W.width>window.innerWidth-4&&(J=Math.max(4,window.innerWidth-W.width-4)),z+W.height>window.innerHeight-4&&(z=Math.max(4,window.innerHeight-W.height-4)),_.value={x:J,y:z}})}function Z(ge){ge.disabled||ge.children?.length||(ge.onClick?.(),I())}function G(ge){ge.disabled||(ge.onClick?.(),I())}function F(ge){ge.trailing?.disabled||ge.trailing?.onClick?.()}function de(ge){ge.disabled||(ge.onClick?.(),I())}function I(){r.value=!1,p.value=-1,b.value=null,a("close")}function he(){I()}function xe(ge){ge.key==="Escape"&&I()}return cn(()=>{r.value=!0,O(),requestAnimationFrame(j),window.addEventListener("keydown",xe)}),At(()=>{window.removeEventListener("keydown",xe)}),(ge,ne)=>(l(),Xe(eu,{to:"body"},[r.value?(l(),c("div",{key:0,class:"fw-cm-backdrop",onMousedown:he,onContextmenu:ke(he,["prevent"])},[s("div",{ref_key:"menuEl",ref:u,class:te(["fw-cm",{"fw-cm-up":n.placement==="top"}]),"data-theme":M.value,style:_t({left:d.value.x+"px",top:d.value.y+"px"}),onMousedown:ne[2]||(ne[2]=ke(()=>{},["stop"])),onContextmenu:ne[3]||(ne[3]=ke(()=>{},["prevent"]))},[ge.$slots.header?(l(),c("div",fm,[Mf(ge.$slots,"header",{},void 0,!0)])):A("",!0),s("div",{class:"fw-cm-scroll",style:_t(n.maxHeight?{maxHeight:n.maxHeight}:void 0)},[(l(!0),c(ie,null,Re(t.items,(ae,Ee)=>(l(),c(ie,{key:Ee},[N(ae)?(l(),c("div",pm)):(l(),c("div",{key:1,class:te(["fw-cm-item",{disabled:ae.disabled,checked:ae.checked,hasChild:!!ae.children?.length}]),onMouseenter:Ve=>H(Ee,Ve),onClick:Ve=>Z(ae)},[s("span",vm,[o(Hs)(ae.icon??"")?(l(),Xe(oe,{key:0,name:ae.icon??"",size:14},null,8,["name"])):(l(),c("span",mm,i(ae.icon??""),1))]),s("span",gm,i(ae.label),1),ae.hint?(l(),c("span",ym,i(ae.hint),1)):A("",!0),s("span",wm,i(ae.checked?"✓":""),1),ae.children?.length?(l(),c("span",bm,[m(oe,{name:"chevronRight",size:10})])):A("",!0),ae.trailing?(l(),c("span",{key:2,class:te(["fw-cm-trailing",{disabled:ae.trailing.disabled}]),title:ae.trailing.title,onClick:ke(Ve=>F(ae),["stop"]),onMousedown:ne[0]||(ne[0]=ke(()=>{},["stop"])),onMouseenter:ne[1]||(ne[1]=ke(()=>{},["stop"]))},[m(oe,{name:ae.trailing.icon,size:12},null,8,["name"])],42,_m)):A("",!0)],42,hm))],64))),128))],4),t.footerItems?.length?(l(),c("div",km,[(l(!0),c(ie,null,Re(t.footerItems,(ae,Ee)=>(l(),c(ie,{key:"f"+Ee},[N(ae)?(l(),c("div",xm)):(l(),c("div",{key:1,class:te(["fw-cm-item",{disabled:ae.disabled}]),onClick:Ve=>de(ae)},[s("span",Sm,[o(Hs)(ae.icon??"")?(l(),Xe(oe,{key:0,name:ae.icon??"",size:14},null,8,["name"])):(l(),c("span",$m,i(ae.icon??""),1))]),s("span",Em,i(ae.label),1)],10,Cm))],64))),128))])):A("",!0),b.value?(l(),c("div",{key:2,ref_key:"subEl",ref:h,class:te(["fw-cm fw-cm-sub",{"fw-cm-sub-left":w.value}]),style:_t({left:_.value.x+"px",top:_.value.y+"px"})},[(l(!0),c(ie,null,Re(b.value.children,(ae,Ee)=>(l(),c(ie,{key:Ee},[N(ae)?(l(),c("div",Dm)):(l(),c("div",{key:1,class:te(["fw-cm-item",{disabled:ae.disabled,checked:ae.checked}]),onClick:Ve=>G(ae)},[s("span",Nm,[o(Hs)(ae.icon??"")?(l(),Xe(oe,{key:0,name:ae.icon??"",size:14},null,8,["name"])):(l(),c("span",Fm,i(ae.icon??""),1))]),s("span",Pm,i(ae.label),1),s("span",Am,i(ae.checked?"✓":""),1)],10,Tm))],64))),128))],6)):A("",!0)],46,dm)],32)):A("",!0)]))}}),Zt=xt(Rm,[["__scopeId","data-v-00e617b4"]]);function hn(){const t=g(!1),e=g(0),n=g(0),a=g([]);function r(d,p=[]){u(d.clientX,d.clientY,p)}function u(d,p,w=[]){a.value=w,e.value=d,n.value=p,t.value=!0}function h(){t.value=!1}return{cmOpen:t,cmX:e,cmY:n,cmItems:a,openMenu:r,openMenuAt:u,closeMenu:h}}const Mm={class:"fw-clone-head"},Om={class:"fw-clone-badge"},Lm={class:"fw-clone-headtext"},Bm={class:"fw-clone-headtitle"},Im={class:"fw-clone-headsub"},jm={class:"fw-ssh-dlg-body"},Vm={class:"fw-ssh-field"},zm={class:"fw-ssh-lb"},Um={class:"fw-ssh-field"},Hm={class:"fw-ssh-lb"},Wm={class:"fw-ssh-addr"},Gm={class:"fw-ssh-field"},qm={class:"fw-ssh-lb"},Km={class:"fw-ssh-addr"},Xm={key:0,class:"fw-ssh-err"},Ym=vt({__name:"SshHostDialog",setup(t){const{t:e}=Mt(),n=B({get:()=>kn.open,set:H=>{H||Di()}}),a=B(()=>kn.editingId!==null),r=B(()=>rn.value.find(H=>H.id===kn.editingId)??null),u=gt({name:"",user:"",host:"",authType:"password",password:"",privateKeyPath:""}),h=g("22"),d=B(()=>Math.trunc(Number(h.value))||22),p=g(!1),w=g(""),b=B(()=>{const H=u.user.trim()||"user",C=u.host.trim()||"host";return`${H}@${C}`});Je(()=>kn.open,H=>{if(H)if(w.value="",p.value=!1,a.value&&r.value){const C=r.value;u.name=C.name,u.user=C.user,u.host=C.host,u.authType=C.authType,u.password="",u.privateKeyPath=C.privateKeyPath??"",h.value=String(C.port)}else u.name="",u.user="",u.host="",u.authType="password",u.password="",u.privateKeyPath="",h.value="22"},{immediate:!0});function _(){Di()}function M(){Di()}async function O(H){p.value=!0,w.value="";try{await H()}catch(C){w.value=C instanceof Error?C.message:String(C)}finally{p.value=!1}}async function N(){if(!u.host.trim()||!u.user.trim()){us(e("sshRequired"));return}if(a.value&&kn.editingId){const H=r.value;if(u.authType==="password"?!u.password.trim():!u.privateKeyPath.trim()||u.privateKeyPath.trim()===(H?.privateKeyPath??"")){const Z=kn.editingId??void 0;await O(async()=>{const G=await dl({id:Z});G.ok?ro(`${e("sshTestOk")}${G.banner?` (${G.banner})`:""}`):po(`${e("sshTestFail")}: ${G.error??""}`)});return}}await O(async()=>{const H=await dl({host:u.host.trim(),port:d.value,user:u.user.trim(),auth:u.authType==="password"?{type:"password",password:u.password}:{type:"key",privateKeyPath:u.privateKeyPath.trim()}});H.ok?ro(`${e("sshTestOk")}${H.banner?` (${H.banner})`:""}`):po(`${e("sshTestFail")}: ${H.error??""}`)})}async function j(){if(!u.host.trim()||!u.user.trim()){us(e("sshRequired"));return}await O(async()=>{if(a.value&&kn.editingId){const H=await Ap({id:kn.editingId,name:u.name.trim()||void 0,host:u.host.trim(),port:d.value,user:u.user.trim(),auth:u.authType==="password"?{type:"password",password:u.password||void 0}:{type:"key",privateKeyPath:u.privateKeyPath.trim()}});ro(e("sshUpdateSuccess")),await Xo(),await ea(H.host.id)}else{const H=await Pp({name:u.name.trim()||void 0,host:u.host.trim(),port:d.value,user:u.user.trim(),auth:u.authType==="password"?{type:"password",password:u.password}:{type:"key",privateKeyPath:u.privateKeyPath.trim()}});ro(e("sshAddSuccess")),await Xo(),await Sl(),await ea(H.host.id)}Di()})}return(H,C)=>{const Z=To,G=ma,F=va,de=Mn,I=un;return l(),Xe(I,{modelValue:n.value,"onUpdate:modelValue":C[7]||(C[7]=he=>n.value=he),class:"fw-ssh-dlg",width:"420px","close-on-click-modal":!0,"append-to-body":"",onClosed:_},{header:se(()=>[s("div",Mm,[s("span",Om,[m(oe,{name:"hardDrive",size:20})]),s("div",Lm,[s("div",Bm,i(a.value?o(e)("sshEditTitle"):o(e)("sshNewHost")),1),s("div",Im,i(o(e)("sshHostCaption")),1)])])]),footer:se(()=>[m(de,{size:"small",loading:p.value,onClick:N},{default:se(()=>[ue(i(o(e)("sshTestConn")),1)]),_:1},8,["loading"]),m(de,{size:"small",onClick:M},{default:se(()=>[ue(i(o(e)("sshCancel")),1)]),_:1}),m(de,{size:"small",type:"primary",loading:p.value,onClick:j},{default:se(()=>[ue(i(a.value?o(e)("sshSaveEdit"):o(e)("sshSaveAdd")),1)]),_:1},8,["loading"])]),default:se(()=>[s("div",jm,[s("label",Vm,[s("span",zm,i(o(e)("sshName")),1),m(Z,{modelValue:u.name,"onUpdate:modelValue":C[0]||(C[0]=he=>u.name=he),size:"small",placeholder:b.value},null,8,["modelValue","placeholder"])]),s("label",Um,[s("span",Hm,i(o(e)("sshAddr")),1),s("span",Wm,[m(Z,{modelValue:u.user,"onUpdate:modelValue":C[1]||(C[1]=he=>u.user=he),size:"small",placeholder:o(e)("sshUser"),class:"fw-ssh-user"},null,8,["modelValue","placeholder"]),C[8]||(C[8]=s("span",{class:"fw-ssh-at"},"@",-1)),m(Z,{modelValue:u.host,"onUpdate:modelValue":C[2]||(C[2]=he=>u.host=he),size:"small",placeholder:o(e)("sshHostAddr"),class:"fw-ssh-host"},null,8,["modelValue","placeholder"]),C[9]||(C[9]=s("span",{class:"fw-ssh-at"},":",-1)),m(Z,{modelValue:h.value,"onUpdate:modelValue":C[3]||(C[3]=he=>h.value=he),size:"small",placeholder:"22",class:"fw-ssh-port"},null,8,["modelValue"])])]),s("label",Gm,[s("span",qm,i(o(e)("sshAuth")),1),s("span",Km,[m(F,{modelValue:u.authType,"onUpdate:modelValue":C[4]||(C[4]=he=>u.authType=he),size:"small",class:"fw-ssh-auth"},{default:se(()=>[m(G,{value:"password",label:o(e)("sshAuthPassword")},null,8,["label"]),m(G,{value:"key",label:o(e)("sshAuthKey")},null,8,["label"])]),_:1},8,["modelValue"]),u.authType==="password"?(l(),Xe(Z,{key:0,modelValue:u.password,"onUpdate:modelValue":C[5]||(C[5]=he=>u.password=he),size:"small",type:"password","show-password":"",placeholder:a.value&&r.value?.hasSecret?o(e)("sshKeepSecret"):o(e)("sshPassword"),class:"fw-ssh-secret"},null,8,["modelValue","placeholder"])):(l(),Xe(Z,{key:1,modelValue:u.privateKeyPath,"onUpdate:modelValue":C[6]||(C[6]=he=>u.privateKeyPath=he),size:"small",placeholder:o(e)("sshKeyPath"),class:"fw-ssh-secret"},null,8,["modelValue","placeholder"]))])]),w.value?(l(),c("div",Xm,i(w.value),1)):A("",!0)])]),_:1},8,["modelValue"])}}}),Jm=xt(Ym,[["__scopeId","data-v-615d3584"]]);function vd(t,e){const n=(t??"").replace(":","").trim().charAt(0).toUpperCase();return n?e?`${e} (${n}:)`:v("driveLabel",{drive:n}):e||"/"}function Uo(t){return vd(t.letter,t.label)}function md(t){return t.type!=="drive"?t.name:vd(t.path?.charAt(0)??"",t.label)}const $o=5;function gd(t){if(typeof t=="string")return t;if(!t)return"";const e=typeof document<"u"?document.documentElement.lang||navigator.language:"en",n=e.toLowerCase();return t[e]??t[n]??(n.startsWith("zh")?t.zh??t.en:t.en??t.zh)??Object.values(t)[0]??""}const ni=g([]);function _r(t){yd(t,"activityBar.register"),$a(t.id),ni.value=[...ni.value,t].sort((e,n)=>(e.order??0)-(n.order??0))}function yd(t,e){if(!t||typeof t!="object")throw new Error(`${e}: 需要对象参数`);if(typeof t.id!="string"||!t.id.trim())throw new Error(`${e}: id 必须是非空字符串`);if(typeof t.title!="string"&&(typeof t.title!="object"||t.title===null))throw new Error(`${e}: title 必须是字符串或多语言文本对象`);if(typeof t.mount!="function")throw new Error(`${e}: mount 必须是函数`)}function $a(t){ni.value=ni.value.filter(e=>e.id!==t)}function Ea(){return ni.value}const oi=g([]);function wd(t){yd(t,"workbench.activityBar.register"),kr(t.id),oi.value=[...oi.value,t].sort((e,n)=>(e.order??0)-(n.order??0))}function kr(t){oi.value=oi.value.filter(e=>e.id!==t)}function Qm(){return oi.value}function oa(t){if(!t)return;t.style.overflowY="auto";const e=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT);for(let n=e.firstChild();n;n=e.nextSibling()){const a=n;if(a.scrollHeight<=a.clientHeight+1)continue;const r=getComputedStyle(a).overflowY;(r==="hidden"||r==="clip")&&(a.style.overflowY="auto")}}const pi=new Map;function bd(t,e){pi.set(t,e)}function xr(t){return pi.delete(t)}function _d(t){return pi.has(t)}function Cr(){return[...pi.keys()]}function Da(t,...e){const n=pi.get(t);if(n)return n(...e)}const si=g([]);function kd(t){Ta(t.id),si.value=[...si.value,t].sort((e,n)=>(e.order??0)-(n.order??0))}function Ta(t){si.value=si.value.filter(e=>e.id!==t)}function Na(){return si.value}const ii=g([]);function xd(t){Fa(t.id),ii.value=[...ii.value,t].sort((e,n)=>(e.order??0)-(n.order??0))}function Fa(t){ii.value=ii.value.filter(e=>e.id!==t)}function ai(){return ii.value}const li=g([]);function Cd(t){Sr(t.id),li.value=[...li.value,t].sort((e,n)=>(e.order??0)-(n.order??0))}function Sr(t){li.value=li.value.filter(e=>e.id!==t)}function sa(){return li.value}const Sd={start(t,e){return sn(t,e?.detail,e?.fileType,e?.fileSize)},clearFinished(){return dd()},clearAll(){return fd()}};function Zm(){const e=window.__dshFileWorkbenchVSCode__?.__proxy;return e?(e.rebindVSCode({registerView:_r,unregisterView:$a,registerCommand:bd,executeCommand:Da,hasCommand:_d,listCommands:Cr,unregisterCommand:xr,registerStatus:kd,unregisterStatus:Ta,listStatus:Na,registerMenu:xd,unregisterMenu:Fa,listMenu:ai}),e.rebindWorkbench({registerView:wd,unregisterView:kr,registerStatus:Cd,unregisterStatus:Sr,listStatus:sa,backgroundTasks:Sd}),queueMicrotask(()=>e.flush()),!0):!1}if(typeof window<"u"){const t=window,e={apiVersion:$o,activityBar:{register:_r,unregister:$a},commands:{register:bd,unregister:xr,execute:Da,list:Cr,has:_d},statusbar:{register:kd,unregister:Ta,list:Na,registerMenu:xd,unregisterMenu:Fa,listMenu:ai}},n={apiVersion:$o,activityBar:{register:wd,unregister:kr},statusbar:{register:Cd,unregister:Sr,list:sa},backgroundTasks:Sd};Zm()||(t.__dshFileWorkbenchVSCode__=e,t.__dshFileWorkbenchWorkbench__=n)}const eg=["title"],tg={class:"fw-nav-ico"},ng={class:"fw-nav-label"},og=["title","onClick","onContextmenu"],sg={class:"fw-nav-ico"},ig={class:"fw-nav-label"},ag=["title"],lg=["title"],rg={class:"fw-nav-ico"},cg={class:"fw-nav-label"},ug=["title","onClick","onContextmenu"],dg={class:"fw-nav-ico"},fg={class:"fw-nav-label"},pg=["title"],hg=["aria-expanded"],vg={class:"fw-sec-txt"},mg={class:"fw-sec-icon"},gg={key:0,class:"fw-sec-b"},yg={key:0,class:"fw-nav-empty is-err"},wg=["title","onClick","onContextmenu"],bg={class:"fw-nav-ico"},_g={class:"fw-nav-label"},kg=["aria-expanded"],xg={class:"fw-sec-txt"},Cg={key:0,class:"fw-sec-b"},Sg=["title","onClick"],$g={class:"fw-nav-ico"},Eg={key:1},Dg={class:"fw-nav-label"},Tg=["aria-expanded"],Ng={class:"fw-sec-txt"},Fg={key:0,class:"fw-sec-b"},Pg=["title","onClick","onContextmenu"],Ag={class:"fw-nav-ico"},Rg={class:"fw-nav-label"},Mg=["title"],Og=["aria-expanded"],Lg={class:"fw-sec-txt"},Bg={key:0,class:"fw-sec-b"},Ig={key:0,class:"fw-nav-empty"},jg=["title","onClick","onContextmenu"],Vg={class:"fw-nav-ico"},zg={class:"fw-nav-label"},Ug={key:2,class:"fw-error"},Hg={class:"fw-error-ico"},Wg=vt({__name:"NavPane",props:{externalViews:{default:()=>[]},externalCollapsed:{type:Boolean,default:!1},activeExternalId:{},externalActive:{type:Boolean}},emits:["toggle-external","select-external","select-local"],setup(t,{emit:e}){const{t:n}=Mt(),a=t,r=e,u=B(()=>a.externalViews??[]),h=B(()=>a.externalCollapsed===!0),d=B(()=>a.activeExternalId??""),p=B(()=>a.externalActive===!0);function w(U){return gd(U.title)}const b=Un.navGroups;function _(U){b[U]=!b[U],Ii()}cn(async()=>{await Xo(),Mv(),await Sl()});function M(U){if(ne.value||le.view!=="files")return!1;const R=le.listing?.path??"";return R?ge(R).startsWith(ge(Go(U.id))):!1}function O(U){const R=Zi(U.id),Q=n(R==="online"?"sshStatusOnline":R==="offline"?"sshStatusOffline":R==="checking"?"sshStatusChecking":"sshStatusUnknown");return R==="offline"&&Cl(U.id)?`${Q}：${Cl(U.id)}`:Q}function N(U){r("select-local"),ne.value=null,Vt(Go(U.id)),ea(U.id)}const j=g("");function H(U,R){ce(U,[{label:n("menuOpen"),icon:"arrowRight",onClick:()=>N(R)},{label:n("sshTest"),icon:"refresh",onClick:()=>void G(R)},{label:n("menuOpenTerminal"),icon:"terminal",onClick:()=>Es(Go(R.id))},{separator:!0},{label:n("sshEdit"),icon:"gear",onClick:()=>zv(R.id)},{label:j.value===R.id?n("sshDeleteConfirm"):n("sshDelete"),icon:"trash",onClick:()=>void F(R)},{separator:!0},{label:n("menuCopyPath"),icon:"link",onClick:()=>void Le(Go(R.id))}])}function C(U){ce(U,[{label:n("sshNewHost"),icon:"plus",onClick:()=>Ku()},{separator:!0},{label:b.ssh?n("navCollapse"):n("navExpand"),icon:b.ssh?"chevronDown":"chevronRight",onClick:()=>_("ssh")},{label:n("menuRefresh"),icon:"refresh",onClick:()=>void Z()}])}async function Z(){await Xo(),await Sl()}async function G(U){const R=await dl({id:U.id});R.ok?Y("ok",`${n("sshTestOk")}${R.banner?` (${R.banner})`:""}`):Y("error",`${n("sshTestFail")}: ${R.error??""}`),await ea(U.id)}async function F(U){if(j.value!==U.id){j.value=U.id;return}j.value="",await Rp(U.id),await Xo()}const de=B(()=>le.homeItems),I=["desktop","download"],he=B(()=>de.value.filter(U=>I.includes(U.type))),xe=B(()=>de.value.find(U=>U.type==="home")??null),ge=U=>U.replace(/[\\/]+/g,"/").replace(/\/$/,"").toLowerCase(),ne=g(null);function ae(){if(ne.value||le.view!=="files")return null;const U=le.listing?.path??"";if(!U)return null;const R=ge(U);let Q=null,De=-1;for(const L of de.value){const D=ge(L.path);!D||R!==D&&!R.startsWith(`${D}/`)||D.length>De&&(De=D.length,Q=L)}return Q}function Ee(U){return ae()?.path===U.path}function Ve(U){if(ne.value||le.view!=="files")return!1;const R=le.listing?.path??"";return R?U.letter?R.toLowerCase().startsWith(`${U.letter.toLowerCase()}:`):ge(R)==="/":!1}function be(U){if(r("select-local"),ne.value=null,U.type==="recycle"){mc();return}Vt(U.path)}function Pe(){r("select-local"),ne.value=null,b.myComputer||(b.myComputer=!0,Ii()),Zu()}function W(){b.myComputer=!b.myComputer,Ii()}function J(U){r("select-local"),ne.value=null,Vt(U.path)}function z(){r("select-local"),ne.value=null,mc()}const ee=U=>U.replace(/[\\/]+$/,"").split(/[\\/]/).pop()||U;function ye(U){const R=Math.max(U.lastIndexOf("/"),U.lastIndexOf("\\"));return R<0?U:U.slice(0,R)}function je(U){return Wt(U)?ta(U)||U:ye(U)}async function Ke(U){ne.value=U;try{const R=await qi(U);Vt(R.isDir?U:je(U))}catch{Vt(je(U))}}const Ze=B(()=>Ko.value.map(U=>({path:U,name:ee(U)})));async function we(U){r("select-local"),ne.value=U;try{(await qi(U)).isDir?Vt(U):(fi(U),Vt(ye(U)))}catch{Vt(U)}}function _e(U){switch(U.type){case"drive":return md(U);case"home":return n("navHome");case"desktop":return n("desktopEntry");case"download":return n("downloadEntry");case"documents":return n("documentEntry");case"pictures":return n("pictureEntry");case"music":return n("musicEntry");case"videos":return n("videoEntry");case"gallery":return n("navGallery");case"workspace":return n("workspaceEntry");case"recycle":return n("recycleBin");default:return U.name}}function Ye(U){switch(U.type){case"drive":return"hardDrive";case"recycle":return"trash";case"workspace":return"folder";case"home":return"home";case"desktop":return"monitor";case"download":return"download";case"documents":return"fileText";case"pictures":return"image";case"music":return"music";case"videos":return"video";case"gallery":return"image";default:return"folder"}}const{cmOpen:ot,cmX:pe,cmY:Ce,cmItems:qe,openMenu:ce}=hn();function Ie(U,R,Q={}){const De=ps(R),L=[Q.openParent?{label:n("menuOpen"),icon:"arrowRight",onClick:()=>void Ke(R)}:{label:n("menuOpen"),icon:"arrowRight",onClick:()=>void Vt(R)}];Q.openEditor!==!1&&L.push({label:n("menuOpenInEditor"),icon:"code",onClick:()=>gr(R)}),L.push({separator:!0}),L.push({label:n(De?"favoriteRemove":"favoriteAdd"),icon:"star",onClick:()=>{const D=Qi(R);Y("ok",n(D?"favoriteAdded":"favoriteRemoved"))}}),L.push({label:n("menuCopyPath"),icon:"link",onClick:()=>void Le(R)}),Q.openTerminal!==!1&&L.push({label:n("menuOpenTerminal"),icon:"terminal",onClick:()=>Es(R)}),ce(U,L)}function rt(U,R){Ie(U,R.path)}function yt(U){ce(U,[{label:b.myComputer?n("navCollapse"):n("navExpand"),icon:b.myComputer?"chevronDown":"chevronRight",onClick:()=>_("myComputer")},{label:n("menuOpen"),icon:"arrowRight",onClick:Pe},{separator:!0},{label:n("menuRefresh"),icon:"refresh",onClick:()=>void Nt()}])}function ut(U,R){Ie(U,R.path)}function it(U){ce(U,[{label:n("menuOpen"),icon:"arrowRight",onClick:z},{label:n("menuRefresh"),icon:"refresh",onClick:()=>void Nt()},{separator:!0},{label:n("recycleEmpty"),icon:"trash",disabled:(le.recycleItems?.length??0)===0,onClick:()=>void pd()}])}async function Le(U){try{await navigator.clipboard.writeText(U),Y("ok",n("menuPathCopied"))}catch{Y("error",n("menuPathCopyFail"))}}return(U,R)=>(l(),c("div",{class:te(["fw-nav",{"external-active":p.value}])},[xe.value?(l(),c("button",{key:0,class:te(["fw-nav-item fw-nav-top fw-nav-leaf",{active:!p.value&&Ee(xe.value)}]),title:xe.value.path,onClick:R[0]||(R[0]=Q=>be(xe.value)),onContextmenu:R[1]||(R[1]=ke(Q=>rt(Q,xe.value),["prevent","stop"]))},[s("span",tg,[m(oe,{name:"home",size:14})]),s("span",ng,i(_e(xe.value)),1)],42,eg)):A("",!0),(l(!0),c(ie,null,Re(he.value.filter(Q=>Q.type!=="download"),Q=>(l(),c("button",{key:Q.path,class:te(["fw-nav-item fw-nav-top fw-nav-leaf",{active:!p.value&&Ee(Q)}]),title:Q.path,onClick:De=>be(Q),onContextmenu:ke(De=>rt(De,Q),["prevent","stop"])},[s("span",sg,[m(oe,{name:Ye(Q),size:14},null,8,["name"])]),s("span",ig,i(_e(Q)),1),s("span",{class:"fw-nav-pin",title:o(n)("favoritePin")},[m(oe,{name:"pin",size:11})],8,ag)],42,og))),128)),s("button",{class:te(["fw-nav-item fw-nav-top",{active:!p.value&&o(le).view==="recycle"}]),title:o(n)("recycleBin"),onClick:z,onContextmenu:ke(it,["prevent","stop"])},[s("span",rg,[m(oe,{name:"trash",size:14})]),s("span",cg,i(o(n)("recycleBin")),1)],42,lg),R[7]||(R[7]=s("div",{class:"fw-nav-div","aria-hidden":"true"},null,-1)),(l(!0),c(ie,null,Re(he.value.filter(Q=>Q.type==="download"),Q=>(l(),c("button",{key:Q.path,class:te(["fw-nav-item fw-nav-top fw-nav-leaf",{active:!p.value&&Ee(Q)}]),title:Q.path,onClick:De=>be(Q),onContextmenu:ke(De=>rt(De,Q),["prevent","stop"])},[s("span",dg,[m(oe,{name:Ye(Q),size:14},null,8,["name"])]),s("span",fg,i(_e(Q)),1),s("span",{class:"fw-nav-pin",title:o(n)("favoritePin")},[m(oe,{name:"pin",size:11})],8,pg)],42,ug))),128)),R[8]||(R[8]=s("div",{class:"fw-nav-div","aria-hidden":"true"},null,-1)),s("div",{class:te(["fw-nav-sec",{collapsed:!o(b).myComputer,active:!p.value&&o(le).view==="computer"}])},[s("button",{class:"fw-sec-h","aria-expanded":o(b).myComputer,onClick:W,onContextmenu:ke(yt,["prevent","stop"])},[s("span",{class:te(["fw-caret",{open:o(b).myComputer}])},[m(oe,{name:"chevronDown",size:11})],2),s("span",vg,[s("span",mg,[m(oe,{name:"monitor",size:14})]),ue(i(o(n)("navThisPc")),1)])],40,hg),o(b).myComputer?(l(),c("div",gg,[o(le).drivesErr?(l(),c("div",yg,i(o(le).drivesErr),1)):A("",!0),(l(!0),c(ie,null,Re(o(le).drives,Q=>(l(),c("button",{key:Q.path,class:te(["fw-nav-item fw-nav-drive",{active:!p.value&&Ve(Q)}]),title:Q.path,onClick:De=>J(Q),onContextmenu:ke(De=>ut(De,Q),["prevent","stop"])},[s("span",bg,[m(oe,{name:"hardDrive",size:13})]),s("span",_g,i(Q.name),1)],42,wg))),128))])):A("",!0)],2),u.value.length?(l(),c("div",{key:1,class:te(["fw-nav-sec fw-nav-external",{collapsed:h.value}])},[s("button",{class:"fw-sec-h","aria-expanded":!h.value,onClick:R[2]||(R[2]=Q=>r("toggle-external"))},[s("span",{class:te(["fw-caret",{open:!h.value}])},[m(oe,{name:"chevronDown",size:11})],2),s("span",xg,i(o(n)("externalInjection")),1)],8,kg),h.value?A("",!0):(l(),c("div",Cg,[(l(!0),c(ie,null,Re(u.value,Q=>(l(),c("button",{key:Q.id,class:te(["fw-nav-item fw-nav-external-item",{active:d.value===Q.id}]),title:w(Q),onClick:De=>r("select-external",Q.id)},[s("span",$g,[o(Hs)(Q.icon??"")?(l(),Xe(oe,{key:0,name:Q.icon??"",size:14},null,8,["name"])):(l(),c("span",Eg,i(w(Q).slice(0,1)),1))]),s("span",Dg,[s("span",null,i(w(Q)),1)])],10,Sg))),128))]))],2)):A("",!0),s("div",{class:te(["fw-nav-sec",{collapsed:!o(b).ssh}])},[s("button",{class:"fw-sec-h","aria-expanded":o(b).ssh,onClick:R[3]||(R[3]=Q=>_("ssh")),onContextmenu:ke(C,["prevent","stop"])},[s("span",{class:te(["fw-caret",{open:o(b).ssh}])},[m(oe,{name:"chevronDown",size:11})],2),s("span",Ng,i(o(n)("sshNavGroup")),1)],40,Tg),o(b).ssh?(l(),c("div",Fg,[o(rn).length===0?(l(),c("div",{key:0,class:"fw-nav-empty",onContextmenu:ke(C,["prevent","stop"])},i(o(n)("sshEmpty")),33)):A("",!0),(l(!0),c(ie,null,Re(o(rn),Q=>(l(),c("button",{key:Q.id,class:te(["fw-nav-item",{active:!p.value&&M(Q)}]),title:`${Q.user}@${Q.host}:${Q.port}`,onClick:De=>N(Q),onContextmenu:ke(De=>H(De,Q),["prevent","stop"])},[s("span",Ag,[m(oe,{name:"globe",size:13})]),s("span",Rg,i(Q.name||`${Q.user}@${Q.host}`),1),s("span",{class:te(["fw-ssh-dot",`is-${o(Zi)(Q.id)}`]),title:O(Q)},null,10,Mg)],42,Pg))),128))])):A("",!0)],2),s("div",{class:te(["fw-nav-sec",{collapsed:!o(b).favorites}])},[s("button",{class:"fw-sec-h","aria-expanded":o(b).favorites,onClick:R[4]||(R[4]=Q=>_("favorites"))},[s("span",{class:te(["fw-caret",{open:o(b).favorites}])},[m(oe,{name:"chevronDown",size:11})],2),s("span",Lg,i(o(n)("favorites")),1)],8,Og),o(b).favorites?(l(),c("div",Bg,[Ze.value.length===0?(l(),c("div",Ig,i(o(n)("emptyFavorites")),1)):A("",!0),(l(!0),c(ie,null,Re(Ze.value,Q=>(l(),c("button",{key:Q.path,class:te(["fw-nav-item",{active:!p.value&&ne.value===Q.path}]),title:Q.path,onClick:De=>we(Q.path),onContextmenu:ke(De=>Ie(De,Q.path,{openEditor:!1,openTerminal:!1,openParent:!0}),["prevent","stop"])},[s("span",Vg,[m(oe,{name:"star",size:13})]),s("span",zg,i(Q.name),1)],42,jg))),128))])):A("",!0)],2),o(le).loadErr?(l(),c("div",Ug,[s("span",Hg,[m(oe,{name:"warning",size:16})]),s("span",null,i(o(le).loadErr),1),s("button",{class:"fw-retry",onClick:R[5]||(R[5]=Q=>o(Nt)())},i(o(n)("retry")),1)])):A("",!0),o(ot)?(l(),Xe(Zt,{key:3,items:o(qe),x:o(pe),y:o(Ce),onClose:R[6]||(R[6]=Q=>ot.value=!1)},null,8,["items","x","y"])):A("",!0),m(Jm)],2))}}),Gg=xt(Wg,[["__scopeId","data-v-f2446309"]]),ia={start:0,end:0,padBefore:0,padAfter:0,total:0};function bc(t,e){return t<0?0:t>e?e:t}function qg(t,e,n,a=8){const r=g({...ia});function u(){const p=t.value,w=e.value;if(!p||w<=0||p.clientHeight<=0){r.value={...ia};return}const b=Math.max(0,p.scrollTop),_=bc(Math.floor(b/n)-a,w),M=Math.ceil(p.clientHeight/n)+a*2,O=bc(_+M,w);r.value={start:_,end:O,padBefore:_*n,padAfter:(w-O)*n,total:w*n}}function h(){u()}let d=null;return Je(t,p=>{d&&(d.disconnect(),d=null),Tt(u),p&&(d=new ResizeObserver(()=>{u()}),d.observe(p))}),Je(e,()=>{Tt(u)}),er(()=>{d?.disconnect(),d=null}),{range:r,onScroll:h,compute:u}}function Kg(t,e,n=90,a=3){const r=[],u=g({...ia}),h=new WeakMap;let d=null;function p(){return d||(d=new ResizeObserver(j=>{let H=!1;for(const C of j){const Z=h.get(C.target);if(Z===void 0)continue;const G=Math.max(1,Math.round(C.contentRect.height));r[Z]!==G&&(r[Z]=G,H=!0)}H&&b()})),d}function w(j){return r[j]??n}function b(){const j=t.value,H=e.value;if(!j||H<=0||j.clientHeight<=0){u.value={...ia};return}r.length>H&&(r.length=H);const C=Math.max(0,j.scrollTop),Z=new Array(H+1);Z[0]=0;for(let ne=0;ne<H;ne++)Z[ne+1]=Z[ne]+w(ne);const G=Z[H];let F=0,de=H;const I=C-a*n;for(;F<de;){const ne=F+de>>1;Z[ne]<I?F=ne+1:de=ne}let he=Math.max(0,F-a),xe=he;const ge=C+j.clientHeight+a*n;for(;xe<H&&Z[xe+1]<=ge;)xe++;xe=Math.min(H,xe+a),u.value={start:he,end:xe,padBefore:Z[he],padAfter:G-Z[xe],total:G}}function _(){b()}let M=null;Je(t,j=>{M&&(M.disconnect(),M=null),Tt(b),j&&(M=new ResizeObserver(()=>b()),M.observe(j))});function O(j){return H=>{const C=H;if(!C)return;const Z=p();r.length<j+1&&(r.length=j+1),h.set(C,j),Z.observe(C);const G=Math.max(1,Math.round(C.getBoundingClientRect().height));r[j]!==G&&(r[j]=G,Tt(b))}}function N(){r.length=0,Tt(b)}return Je(e,()=>{Tt(b)}),er(()=>{M?.disconnect(),M=null,d?.disconnect(),d=null}),{range:u,onScroll:_,compute:b,measure:O,resetHeights:N}}const Xg={class:"fw-search"},Yg={class:"fw-search-head"},Jg={class:"fw-tree-head"},Qg={class:"fw-search-opts"},Zg=["title"],e1=["title"],t1={key:0,class:"fw-loading"},n1={key:1,class:"fw-count"},o1={class:"fw-count-row"},s1={key:0,class:"fw-scopeline"},i1={key:2,class:"fw-empty"},a1=["onClick","title"],l1={class:"fw-ico"},r1={class:"fw-namerow"},c1={class:"fw-hitname"},u1={key:0,class:"fw-badge"},d1={class:"fw-hitpath"},f1={key:0,class:"fw-hitsnippet"},p1=vt({__name:"SearchPane",setup(t){const{t:e}=Mt(),n=g(null),a=B(()=>Ne.search.hits.length),r=Kg(n,a,56),u=B(()=>Ne.search.hits.slice(r.range.value.start,r.range.value.end));Je(()=>Ne.search.q,()=>{r.resetHeights(),n.value&&(n.value.scrollTop=0)});function h(){gs("")}function d(){const j=Ne.search.q.trim();j&&gs(j)}function p(){js.value=!js.value,d()}function w(){Vs.value=!Vs.value,d()}function b(j){fi(j)}function _(j){const H=(Ne.root||"").replace(/[\\/]+$/,"");return j.startsWith(H)?j.slice(H.length+1):j}const M=B(()=>Ne.search.hits.filter(j=>j.byContent)),O=g(!1);async function N(){const j=Ne.search.q.trim(),H=M.value.length;if(!H||!j)return;const C=await fo({title:e("searchReplaceTitle"),message:e("searchReplaceConfirm",{files:H,count:H}),placeholder:e("findReplacePlaceholder")});if(C!==null){O.value=!0;try{const Z=await du(j,C,{key:Ne.key,scope:Ne.search.scope||void 0,caseSensitive:js.value,regex:Vs.value});Y("ok",e("searchReplaceDone",{files:Z.files,count:Z.replacements})),gs(j)}catch(Z){Y("error",Z.message)}finally{O.value=!1}}}return(j,H)=>{const C=Mn;return l(),c("div",Xg,[s("div",Yg,[s("span",Jg,i(o(e)("searchTitle")),1),s("span",Qg,[s("button",{class:te(["fw-search-opt",{on:o(js)}]),title:o(e)("searchCase"),onClick:p},"Aa",10,Zg),s("button",{class:te(["fw-search-opt",{on:o(Vs)}]),title:o(e)("searchRegex"),onClick:w},".*",10,e1)]),m(C,{size:"small",text:"",title:o(e)("clearSearch"),onClick:h},{default:se(()=>[...H[1]||(H[1]=[ue("✕",-1)])]),_:1},8,["title"])]),o(Ne).search.running?(l(),c("div",t1,i(o(e)("searching")),1)):o(Ne).search.q?(l(),c("div",n1,[s("div",o1,[s("span",null,[ue(i(o(e)("resultsCount",{count:o(Ne).search.hits.length})),1),o(Ne).search.truncated?(l(),c(ie,{key:0},[ue(i(o(e)("resultsSuffixTruncated")),1)],64)):A("",!0)]),M.value.length?(l(),Xe(C,{key:0,size:"small",type:"primary",plain:"",disabled:O.value,onClick:N},{default:se(()=>[ue(i(O.value?o(e)("searchReplaceBusy"):o(e)("searchReplaceAll")),1)]),_:1},8,["disabled"])):A("",!0)]),o(Ne).search.scope?(l(),c("div",s1,i(o(e)("searchScopeIn"))+" "+i(_(o(Ne).search.scope)),1)):A("",!0)])):(l(),c("div",i1,i(o(e)("searchIdle")),1)),s("div",{ref_key:"resRef",ref:n,class:"fw-results",onScroll:H[0]||(H[0]=(...Z)=>o(r).onScroll&&o(r).onScroll(...Z))},[s("div",{style:_t({height:o(r).range.value.padBefore+"px"})},null,4),(l(!0),c(ie,null,Re(u.value,(Z,G)=>(l(),c("div",{key:Z.path,ref_for:!0,ref:o(r).measure(o(r).range.value.start+G),class:"fw-hit",onClick:F=>b(Z.path),title:o(e)("hitTitle")},[s("span",l1,[m(oe,{name:"file",size:13})]),s("span",r1,[s("span",c1,i(Z.name),1),Z.byContent?(l(),c("span",u1,i(o(e)("matchContent")),1)):A("",!0)]),s("span",d1,i(_(Z.path)),1),Z.snippet?(l(),c("span",f1,i(Z.snippet),1)):A("",!0)],8,a1))),128)),s("div",{style:_t({height:o(r).range.value.padAfter+"px"})},null,4)],544)])}}}),h1=xt(p1,[["__scopeId","data-v-3880eff0"]]),v1=g(""),hi=g({op:"",paths:[]});function Fi(t){hi.value={op:"copy",paths:t}}function Bs(t){hi.value={op:"cut",paths:t}}function m1(){hi.value={op:"",paths:[]}}function Al(){return hi.value.paths.length>0}function g1(){return hi.value}async function _c(t){try{return await navigator.clipboard.writeText(t),!0}catch{return!1}}const Ft=gt({visible:!1,canSwitchView:!1,total:0,selected:0,text:"",view:"details"});let $d=null;function aa(t){$d=t}function y1(t){$d?.(t)}function Ed(){Ft.visible=!1,Ft.canSwitchView=!1,Ft.total=0,Ft.selected=0,Ft.text=""}const Pa=gt({dirs:{}});async function xo(t){if(t)try{const e=await eh(t);Pa.dirs[t]={inRepo:e.inRepo,branch:e.branch??"",entries:e.entries}}catch{}}function Dd(t){return Pa.dirs[t]?.inRepo??!1}function Td(t,e){return Pa.dirs[t]?.entries?.[e]??""}const ri=gt({dirs:{}});async function cs(t){if(t)try{const e=await ho(t);if(!e.inRepo||!e.svnAvailable){ri.dirs[t]={inRepo:!1,entries:{}};return}const n=await Qt(t,["status","--depth","immediates"]),a={};if(n.code===0)for(const r of(n.stdout||"").split(/\r?\n/)){if(!r.trim())continue;const u=(r.slice(0,8)[0]??"").trim();let h=r.slice(8).trim();if(h=h.replace(/[\\/]+$/,""),!h||h==="."||h==="..")continue;const d=h.split(/[\\/]/).pop()??h,p=b1(u);p&&(a[d]=p)}ri.dirs[t]={inRepo:!0,entries:a}}catch{}}function w1(t){return ri.dirs[t]?.inRepo??!1}function Nd(t,e){return ri.dirs[t]?.entries?.[e]??""}function b1(t){switch(t){case"A":return"added";case"M":return"modified";case"D":return"deleted";case"?":return"untracked";case"R":return"modified";case"!":return"deleted";case"C":return"modified";default:return""}}function _1(t){return(t||"").split(/\r?\n/).filter(e=>/^\s?[ADUGCER]{1,3}\s+\S/.test(e)).length}function k1(t){const e=[...(t||"").matchAll(/(?:revision|版本)\s*(\d+)/gi)];return e.length?e[e.length-1][1]:null}function x1(t){return t.slice(Math.max(t.lastIndexOf("/"),t.lastIndexOf("\\"))+1)}async function C1(t,e){try{if(!(await ho(t)).svnAvailable){Y("error",v("svnNoCli"));return}const a=await Qt(t,e);a.code===0?Y("ok",(a.stdout||v("svnDone")).split(`
`)[0].slice(0,200)):Y("error",(a.stderr||v("svnFailed")).split(`
`)[0].slice(0,200))}catch(n){Y("error",n.message)}}async function S1(t,e,n){try{if(!(await ho(t)).svnAvailable){Y("error",v("svnNoCli"));return}const r=await Qt(t,["add","--",t]);r.code===0?Y("ok",v("svnAdded")):Y("error",(r.stderr||v("svnFailed")).split(`
`)[0].slice(0,200))}catch(a){Y("error",a.message)}await n.afterMutate(e)}async function $1(t,e,n){try{if(!(await ho(t)).svnAvailable){Y("error",v("svnNoCli"));return}const r=t.replace(/[\\/]$/,""),u=r.replace(/[\\/][^\\/]+$/,""),h=r.slice(u.length+1),p=((await Qt(u,["propget","svn:ignore",u])).stdout||"").split(/\r?\n/).map(_=>_.trim()).filter(Boolean);if(p.includes(h)){Y("ok",v("gitIgnored")),await n.afterMutate(e);return}const w=[...p,h].join(`
`),b=await Qt(u,["propset","svn:ignore",w,u]);b.code===0?Y("ok",v("gitIgnored")):Y("error",(b.stderr||v("svnFailed")).split(`
`)[0].slice(0,200))}catch(a){Y("error",a.message)}await n.afterMutate(e)}async function E1(t,e,n){try{await nh(t),Y("ok",v("gitAdded"))}catch(a){Y("error",a.message)}await n.afterMutate(e)}async function D1(t,e,n){const a=x1(t);if(await Rt({title:v("gitDiscardTitle"),message:v("gitDiscardMsg",{name:a})})){try{await sh(t),Y("ok",v("gitDiscarded"))}catch(u){Y("error",u.message)}await n.afterMutate(e)}}async function T1(t,e,n){try{await gu(t),Y("ok",v("gitIgnored"))}catch(a){Y("error",a.message)}await n.afterMutate(e)}async function N1(t,e){try{const n=await th(t);e.showGitDiff(n.output??"")}catch(n){Y("error",n.message)}}function Rl(t,e,n){return Dd(t)?[{separator:!0},{icon:"git",label:v("gitMenu"),children:[{label:v("gitPanel"),icon:"git",onClick:()=>n.openGitPanel()},{separator:!0},{label:v("gitAdd"),icon:"upload",onClick:()=>void E1(e,t,n)},{label:v("gitCommit"),icon:"check",onClick:()=>n.openCommit()},{label:v("gitDiff"),icon:"code",onClick:()=>void N1(e,n)},{label:v("gitDiscard"),icon:"undo",onClick:()=>void D1(e,t,n)},{label:v("gitIgnore"),icon:"eyeOff",onClick:()=>void T1(e,t,n)}]}]:[]}function Ml(t,e,n){return w1(t)?[{separator:!0},{icon:"svn",label:v("svnMenu"),children:[{label:v("svnPanel"),icon:"svn",onClick:()=>n.openSvnPanel()},{label:v("svnUpdate"),icon:"sync",onClick:()=>void C1(e,["update"])},{separator:!0},{label:v("svnAdd"),icon:"upload",onClick:()=>void S1(e,t,n)},{label:v("svnIgnore"),icon:"eyeOff",onClick:()=>void $1(e,t,n)}]}]:[]}const F1={key:0,class:"fw-quickcommit-empty"},P1={class:"fw-gitcommit-files-title fw-gitcommit-files-caption"},A1={class:"fw-gitcommit-files"},R1=["title"],M1={key:1,class:"fw-quickcommit-empty"},O1={key:2,class:"fw-gitcommit-error"},L1={class:"fw-gitconfig-field"},B1={class:"fw-gitconfig-field"},I1=vt({__name:"QuickCommit",props:{modelValue:{type:Boolean},dir:{}},emits:["update:modelValue","done"],setup(t,{emit:e}){const n=t,a=e,{t:r}=Mt(),u=g(null),h=g([]),d=g(""),p=g(""),w=gt({loading:!1,commit:!1,config:!1}),b=g(!1),_=g(""),M=g(""),O={"":"",untracked:"?",added:"A",modified:"M",deleted:"D"};function N(I){return O[I]}function j(){a("update:modelValue",!1)}async function H(){if(d.value="",p.value="",!n.dir){j();return}w.loading=!0;try{if(u.value=await ei(n.dir),!u.value.inRepo){Y("error",r("gitNotRepo")),j();return}if(await C(),!h.value.length){Y("error",r("gitNoChanges")),j();return}}catch(I){Y("error",I.message),j()}finally{w.loading=!1}}async function C(){u.value=await ei(n.dir),h.value=u.value?.staged??[]}async function Z(){const I=d.value.trim();if(!(!I||!u.value)){w.commit=!0,p.value="";try{await oh(u.value.repo,I),a("done"),Y("ok",r("gitCommitted")),j()}catch(he){p.value=he.message}finally{w.commit=!1}}}const G=g(!1);Je(p,I=>{G.value=/user\.(name|email)|Author identity/i.test(I??"")});async function F(){try{const I=await yu();_.value=I.name??"",M.value=I.email??""}catch{}b.value=!0}async function de(){w.config=!0;try{await wu(_.value,M.value),p.value="",b.value=!1,Y("ok",r("gitConfigSaved"))}catch(I){Y("error",I.message)}finally{w.config=!1}}return(I,he)=>{const xe=To,ge=Mn,ne=un;return l(),Xe(ne,{"model-value":t.modelValue,title:o(r)("gitCommitTitle"),width:"520px",class:"fw-gitcommit-dialog","close-on-click-modal":!1,"onUpdate:modelValue":j,onOpen:H},{footer:se(()=>[m(ge,{onClick:j},{default:se(()=>[ue(i(o(r)("cancel")),1)]),_:1}),m(ge,{onClick:F},{default:se(()=>[ue(i(o(r)("gitConfig")),1)]),_:1}),m(ge,{type:"primary",loading:w.commit,disabled:!d.value.trim(),onClick:Z},{default:se(()=>[ue(i(o(r)("gitCommitConfirm")),1)]),_:1},8,["loading","disabled"])]),default:se(()=>[w.loading?(l(),c("div",F1,i(o(r)("gitLoading")),1)):(l(),c(ie,{key:1},[m(xe,{modelValue:d.value,"onUpdate:modelValue":he[0]||(he[0]=ae=>d.value=ae),placeholder:o(r)("gitCommitPlaceholder"),type:"textarea",rows:3,class:"fw-gitcommit-msg",onKeydown:bt(ke(Z,["ctrl"]),["enter"])},null,8,["modelValue","placeholder","onKeydown"]),h.value.length?(l(),c(ie,{key:0},[s("div",P1,i(o(r)("gitCommitFiles",{n:h.value.length})),1),s("div",A1,[(l(!0),c(ie,null,Re(h.value,ae=>(l(),c("div",{key:ae.path,class:"fw-gitcommit-file"},[s("span",{class:te(["fw-gitpanel-st","st-"+ae.status])},i(N(ae.status)),3),s("span",{class:"fw-gitpanel-path",title:ae.path},i(ae.path),9,R1)]))),128))])],64)):(l(),c("div",M1,i(o(r)("gitNoChanges")),1)),p.value?(l(),c("div",O1,[ue(i(p.value)+" ",1),G.value?(l(),Xe(ge,{key:0,text:"",size:"small",onClick:F},{default:se(()=>[ue(i(o(r)("gitConfigTitle")),1)]),_:1})):A("",!0)])):A("",!0),m(ne,{modelValue:b.value,"onUpdate:modelValue":he[4]||(he[4]=ae=>b.value=ae),title:o(r)("gitConfigTitle"),width:"420px",class:"fw-gitconfig-dialog","close-on-click-modal":!1},{footer:se(()=>[m(ge,{onClick:he[3]||(he[3]=ae=>b.value=!1)},{default:se(()=>[ue(i(o(r)("cancel")),1)]),_:1}),m(ge,{type:"primary",loading:w.config,onClick:de},{default:se(()=>[ue(i(o(r)("gitConfigSave")),1)]),_:1},8,["loading"])]),default:se(()=>[s("div",L1,[s("label",null,i(o(r)("gitConfigName")),1),m(xe,{modelValue:_.value,"onUpdate:modelValue":he[1]||(he[1]=ae=>_.value=ae),size:"small",placeholder:o(r)("gitConfigNamePlaceholder")},null,8,["modelValue","placeholder"])]),s("div",B1,[s("label",null,i(o(r)("gitConfigEmail")),1),m(xe,{modelValue:M.value,"onUpdate:modelValue":he[2]||(he[2]=ae=>M.value=ae),size:"small",placeholder:o(r)("gitConfigEmailPlaceholder")},null,8,["modelValue","placeholder"])])]),_:1},8,["modelValue","title"])],64))]),_:1},8,["model-value","title"])}}}),Fd=xt(I1,[["__scopeId","data-v-e839f655"]]),Ol="",Ll=["%H","%h","%an","%ae","%at","%ar","%s","%P","%D"].join("%x1f"),j1=["%H","%h","%an","%ae","%at","%ar","%P","%D","%s","%b"].join("%x1f");function Pd(t){const e=t.trim();return e?e.split(",").map(n=>n.trim()).filter(Boolean).map(n=>n.startsWith("HEAD -> ")?{label:n.slice(8),kind:"head"}:n==="HEAD"?{label:"HEAD",kind:"head"}:n.startsWith("tag: ")?{label:n.slice(5),kind:"tag"}:n.includes("/")?{label:n,kind:"remote"}:{label:n,kind:"branch"}):[]}function Bl(t){const e=[];for(const n of t.split(`
`)){if(!n.trim())continue;const a=n.split(Ol);if(a.length<9)continue;const r=(a[7]??"").trim();e.push({hash:a[0],short:a[1],author:a[2],email:a[3],ts:Number(a[4])||0,date:a[5],subject:a[6],parents:r?r.split(/\s+/):[],refs:Pd(a[8]??"")})}return e}function V1(t){const e=t.split(Ol);if(e.length<9)return null;const n=(e[6]??"").trim();return{hash:e[0],short:e[1],author:e[2],email:e[3],ts:Number(e[4])||0,date:e[5],subject:e[8],parents:n?n.split(/\s+/):[],refs:Pd(e[7]??""),body:e.slice(9).join(Ol).trim()}}function z1(t){const e=[];for(const n of t.split(`
`)){if(!n.trim())continue;const a=n.split("	");if(a.length<3)continue;const[r,u]=a,h=a.slice(2).join("	");if(!h)continue;const d=r==="-"||u==="-";e.push({path:h,add:d?0:Number(r)||0,del:d?0:Number(u)||0,binary:d})}return e}function U1(t){const e=[],n=/^(\^?[0-9a-fA-F]{7,40})\s+\((.*?)\s+(\d{4}-\d{2}-\d{2})\s+(\d+)\)\s?(.*)$/;for(const a of t.split(`
`)){const r=n.exec(a);r&&e.push({hash:r[1].replace(/^\^/,""),author:r[2].trim(),date:r[3],line:Number(r[4])||0,text:r[5]??""})}return e}function H1(t){return t.startsWith("+++")||t.startsWith("---")?"head":t.startsWith("@@")?"meta":t.startsWith("diff ")||t.startsWith("index ")||t.startsWith("new file")||t.startsWith("deleted file")||t.startsWith("similarity index")||t.startsWith("rename ")||t.startsWith("Binary files")?"head":t.startsWith("+")?"add":t.startsWith("-")?"del":"ctx"}const kc=["#58a6ff","#f0883e","#3fb950","#bc8cff","#f778ba","#39c5cf","#d29922","#8b949e"];function Ad(t){const e=[];let n=[],a=[],r=0;const u=h=>{for(;n.length<=h;)n.push(null),a.push(null)};for(const h of t){let d=n.indexOf(h.hash);if(d<0){let j=n.indexOf(null);j<0&&(j=n.length,u(j)),n[j]=h.hash,a[j]=r++,d=j}const p=a[d]??0,w=n.slice(),[b,..._]=h.parents;n[d]=null,a[d]=null,b!=null&&n.indexOf(b)<0&&(n[d]=b,a[d]=p);for(const j of _){if(n.includes(j))continue;let H=n.indexOf(null);H<0&&(H=n.length,u(H)),n[H]=j,a[H]=r++}const M=Math.max(w.length,n.length),O=[];for(let j=0;j<M;j++)j!==d&&(w[j]??null)!=null&&(n[j]??null)!=null&&O.push({lane:j,color:a[j]??0});const N=[];for(const j of h.parents){const H=n.indexOf(j);H>=0&&N.push({from:d,to:H,color:a[H]??p})}for(e.push({commit:h,lane:d,laneColor:p,topLine:w[d]!=null,through:O,bends:N,width:M});n.length&&n[n.length-1]===null;)n.pop(),a.pop()}return e}const Eo=14;function Xn(t){return kc[t%kc.length]}const qt=gt({open:!1,kind:"git",dir:"",key:"",onDone:void 0});function $r(t){qt.kind=t?.kind==="svn"?"svn":"git",qt.dir=t?.dir??"",qt.key=t?.key??"",qt.onDone=t?.onDone,qt.open=!0}function xc(){qt.open=!1,qt.onDone=void 0}const W1={class:"fw-diff"},G1={key:0,class:"fw-diff-empty"},q1={class:"fw-diff-body"},K1={key:0,class:"fw-diff-empty"},Xa=5e3,X1=vt({__name:"GitDiffView",props:{lines:{},empty:{}},setup(t){const e=t,{t:n}=Mt(),a=B(()=>e.lines.length>Xa?e.lines.slice(0,Xa):e.lines),r=B(()=>e.lines.length>Xa);return(u,h)=>(l(),c("div",W1,[t.lines.length?(l(),c(ie,{key:1},[s("div",q1,[(l(!0),c(ie,null,Re(a.value,(d,p)=>(l(),c("div",{key:p,class:te(["fw-diff-line","dl-"+o(H1)(d)])},i(d||" "),3))),128))]),r.value?(l(),c("div",K1,i(o(n)("gitDiffTruncated")),1)):A("",!0)],64)):(l(),c("div",G1,i(t.empty),1))]))}}),Js=xt(X1,[["__scopeId","data-v-10e524c1"]]),Y1={class:"fw-graph"},J1=["title","onClick"],Q1=["width"],Z1=["x1","x2","stroke"],ey=["x1","x2","y2","stroke"],ty=["x1","y1","x2","stroke"],ny=["d","stroke"],oy=["cx","cy","r","fill","stroke"],sy={class:"fw-graph-main"},iy={class:"fw-graph-subject"},ay={key:0,class:"fw-graph-refs"},ly={class:"fw-graph-meta"},ry={class:"fw-graph-hash"},cy={key:0,class:"fw-graph-empty"},io=28,jo=8,uy=vt({__name:"GitGraphList",props:{rows:{},active:{},empty:{}},emits:["select"],setup(t){function e(h){return h*Eo+Eo/2}function n(h,d){const p=io/2,w=io*.82;return`M ${e(h)} ${p} C ${e(h)} ${w}, ${e(d)} ${w}, ${e(d)} ${io}`}function a(h){return h.through.filter(d=>d.lane<jo)}function r(h){return h.bends.filter(d=>d.from<jo&&d.to<jo)}function u(h){return h.commit.refs.some(d=>d.kind==="head")}return(h,d)=>(l(),c("div",Y1,[(l(!0),c(ie,null,Re(t.rows,p=>(l(),c("button",{key:p.commit.hash,class:te(["fw-graph-row",{active:p.commit.hash===t.active}]),title:p.commit.subject,onClick:w=>h.$emit("select",p.commit)},[s("span",{class:"fw-graph-lanes",style:_t({width:`${Math.min(p.width,jo)*o(Eo)}px`})},[(l(),c("svg",{width:Math.min(p.width,jo)*o(Eo),height:io,"aria-hidden":"true"},[(l(!0),c(ie,null,Re(a(p),(w,b)=>(l(),c("line",{key:"t"+b,x1:e(w.lane),y1:0,x2:e(w.lane),y2:io,stroke:o(Xn)(w.color)},null,8,Z1))),128)),p.topLine&&p.lane<jo?(l(),c("line",{key:0,x1:e(p.lane),y1:0,x2:e(p.lane),y2:io/2,stroke:o(Xn)(p.laneColor)},null,8,ey)):A("",!0),(l(!0),c(ie,null,Re(r(p),(w,b)=>(l(),c(ie,{key:"b"+b},[w.from===w.to?(l(),c("line",{key:0,x1:e(w.from),y1:io/2,x2:e(w.to),y2:io,stroke:o(Xn)(w.color)},null,8,ty)):(l(),c("path",{key:1,d:n(w.from,w.to),fill:"none",stroke:o(Xn)(w.color)},null,8,ny))],64))),128)),p.lane<jo?(l(),c("circle",{key:1,cx:e(p.lane),cy:io/2,r:u(p)?4.5:3.5,fill:o(Xn)(p.laneColor),stroke:u(p)?"var(--dsh-bg, #0d1117)":"none","stroke-width":"1.5"},null,8,oy)):A("",!0)],8,Q1))],4),s("span",sy,[s("span",iy,i(p.commit.subject),1),p.commit.refs.length?(l(),c("span",ay,[(l(!0),c(ie,null,Re(p.commit.refs,w=>(l(),c("span",{key:w.kind+w.label,class:te(["fw-graph-ref","rf-"+w.kind])},[m(oe,{name:w.kind==="tag"?"tag":"git",size:9},null,8,["name"]),ue(" "+i(w.label),1)],2))),128))])):A("",!0)]),s("span",ly,[ue(i(p.commit.author),1),d[0]||(d[0]=s("span",{class:"fw-graph-dot"},"·",-1)),ue(i(p.commit.date),1)]),s("span",ry,i(p.commit.short),1)],10,J1))),128)),t.rows.length?A("",!0):(l(),c("div",cy,i(t.empty),1))]))}}),dy=xt(uy,[["__scopeId","data-v-61d062db"]]),An=g([]),fy=g(!1),xn=gt({open:!1,kind:"git",url:""});function Er(t){xn.kind=t.kind,xn.url=t.url??"",xn.open=!0}function Ya(){xn.open=!1}async function hs(){const t=await lh().catch(()=>null);t&&(An.value=t.accounts),fy.value=!0}const py={key:0,class:"fw-gp-shell"},hy={class:"fw-gp-head"},vy=["title"],my=["title"],gy={class:"fw-gp-up-name"},yy=["title"],wy={class:"fw-gp-headacts"},by={class:"fw-gp-body"},_y={class:"fw-gp-rail"},ky=["onClick"],xy={class:"fw-gp-rail-txt"},Cy={key:0,class:"fw-gp-rail-badge"},Sy={key:0,class:"fw-gp-rail-op"},$y={class:"fw-gp-content"},Ey={key:0,class:"fw-gp-split"},Dy={class:"fw-gp-list"},Ty={key:0,class:"fw-gp-empty"},Ny={class:"fw-gp-groupbar"},Fy={class:"fw-gp-groupname"},Py={class:"fw-gp-groupcount"},Ay=["title"],Ry=["title","onClick","onContextmenu"],My={class:"fw-gp-path"},Oy={key:0,class:"fw-gp-dir"},Ly={class:"fw-gp-rowacts"},By=["title","onClick"],Iy=["title","onClick"],jy={class:"fw-gp-detail"},Vy={class:"fw-gp-detailhead"},zy=["title"],Uy={class:"fw-gp-detailacts"},Hy=["title"],Wy=["title"],Gy=["title"],qy=["title"],Ky={key:0,class:"fw-gp-empty"},Xy={key:0,class:"fw-gp-empty"},Yy={key:1,class:"fw-gp-scroll"},Jy={class:"fw-gp-hash"},Qy=["title"],Zy={class:"fw-gp-filemeta"},ew={key:0,class:"fw-gp-empty"},tw={key:1,class:"fw-gp-scroll fw-gp-blame"},nw=["title"],ow=["title"],sw={class:"fw-gp-blame-date"},iw={class:"fw-gp-blame-no"},aw={class:"fw-gp-blame-txt"},lw={key:1,class:"fw-gp-split"},rw={class:"fw-gp-list fw-gp-list-col"},cw={class:"fw-gp-listbar"},uw={class:"fw-gp-count"},dw={class:"fw-gp-detail"},fw={key:0,class:"fw-gp-empty"},pw={class:"fw-gp-detailhead"},hw=["title"],vw={class:"fw-gp-detailacts"},mw=["title"],gw=["title"],yw=["title"],ww=["title"],bw={class:"fw-gp-scroll"},_w={class:"fw-gp-cmeta"},kw={class:"fw-gp-crow"},xw={class:"k"},Cw={class:"v mono"},Sw={class:"fw-gp-crow"},$w={class:"k"},Ew={class:"v"},Dw={class:"fw-gp-crow"},Tw={class:"k"},Nw={class:"v"},Fw={class:"fw-gp-crow"},Pw={class:"k"},Aw={class:"v mono"},Rw={key:0,class:"fw-gp-crow"},Mw={class:"k"},Ow={class:"v"},Lw={class:"fw-gp-cbody"},Bw={class:"fw-gp-cfiles"},Iw={key:0,class:"fw-gp-empty"},jw=["title","onClick"],Vw={class:"fw-gp-path"},zw={key:0,class:"fw-gp-dir"},Uw={class:"fw-gp-num"},Hw={class:"add"},Ww={class:"del"},Gw={key:2,class:"fw-gp-one"},qw={class:"fw-gp-listbar"},Kw={class:"fw-gp-sec-title"},Xw=["onContextmenu"],Yw={class:"fw-gp-st st-branch"},Jw={class:"fw-gp-path"},Qw={key:0,class:"fw-gp-cur"},Zw={class:"fw-gp-rowacts"},eb={class:"fw-gp-sec-title"},tb=["onContextmenu"],nb={class:"fw-gp-st st-remote"},ob={class:"fw-gp-path"},sb={class:"fw-gp-rowacts"},ib={key:3,class:"fw-gp-one"},ab={class:"fw-gp-sectabs"},lb={key:0,class:"fw-gp-sectab-n"},rb={key:0,class:"fw-gp-sectab-n"},cb={class:"fw-gp-form"},ub={key:0,class:"fw-gp-empty"},db=["title","onContextmenu"],fb={class:"fw-gp-st st-tag"},pb={class:"fw-gp-path"},hb={key:0,class:"fw-gp-badge"},vb={key:1,class:"fw-gp-badge fw-gp-badge-remote"},mb={key:0,class:"fw-gp-date"},gb=["title"],yb={class:"fw-gp-hash"},wb={class:"fw-gp-rowacts"},bb={class:"fw-gp-form"},_b={key:0,class:"fw-gp-subject"},kb={class:"fw-gp-form"},xb={key:0,class:"fw-gp-empty"},Cb={key:1,class:"fw-gp-empty"},Sb=["title"],$b={class:"fw-gp-st st-tag"},Eb={class:"fw-gp-path"},Db={class:"fw-gp-badge"},Tb={key:0,class:"fw-gp-date"},Nb={class:"fw-gp-rowacts"},Fb={key:4,class:"fw-gp-one"},Pb={class:"fw-gp-form"},Ab={key:0,class:"fw-gp-empty"},Rb=["onContextmenu"],Mb={class:"fw-gp-st st-remote"},Ob={class:"fw-gp-path"},Lb=["title"],Bb={key:5,class:"fw-gp-split"},Ib={class:"fw-gp-list"},jb={class:"fw-gp-listbar"},Vb={key:0,class:"fw-gp-empty"},zb=["title","onClick","onContextmenu"],Ub={class:"fw-gp-st st-stash"},Hb={class:"fw-gp-path"},Wb={class:"fw-gp-rowacts"},Gb=["title","onClick"],qb={class:"fw-gp-detail"},Kb={class:"fw-gp-detailhead"},Xb={class:"fw-gp-detailtitle"},Yb={key:6,class:"fw-gp-one fw-gp-cli-wrap"},Jb={key:0,class:"fw-gp-cli-hint"},Qb={class:"fw-gp-cli-prompt"},Zb={class:"fw-gp-cli-cmd"},e0={class:"fw-gp-cli-inputline"},t0={class:"fw-gp-cli-prompt"},n0={key:0,class:"fw-gp-commitbar"},o0={class:"fw-gp-commitacts"},s0={class:"fw-gp-commitmeta"},i0={key:0},a0={key:1,class:"fw-gitpanel-empty"},l0={key:1,class:"fw-norepo"},r0={class:"fw-gp-cfgfield"},c0={class:"fw-gp-cfgfield"},u0={key:0,class:"fw-gp-cv"},d0={class:"fw-gp-cv-meta"},f0={class:"fw-gp-crow"},p0={class:"k"},h0={class:"v mono"},v0={class:"fw-gp-crow"},m0={class:"k"},g0={class:"v"},y0={class:"fw-gp-crow"},w0={class:"k"},b0={class:"v"},_0={class:"fw-gp-cbody fw-gp-cbody-clamp"},k0={class:"fw-gp-cv-body"},x0={class:"fw-gp-cv-files"},C0={key:0,class:"fw-gp-empty"},S0=["title","onClick"],$0={class:"fw-gp-path"},E0={key:0,class:"fw-gp-dir"},D0={class:"fw-gp-num"},T0={class:"add"},N0={class:"del"},F0={class:"fw-gp-cv-diff"},P0={key:1,class:"fw-gp-empty"},A0={class:"fw-gp-cfgfield"},R0={class:"fw-gp-cfgfield"},M0={class:"fw-gp-cfgfield"},Ja=120,O0=vt({__name:"GitPanel",props:{modelValue:{type:Boolean},dir:{}},setup(t){const e=t,{t:n}=Mt(),a=[{key:"changes",icon:"fileText",label:"gitRailChanges"},{key:"history",icon:"clock",label:"gitRailHistory"},{key:"branches",icon:"git",label:"gitRailBranches"},{key:"tags",icon:"tag",label:"gitRailTags"},{key:"remotes",icon:"globe",label:"gitRailRemotes"},{key:"stash",icon:"stash",label:"gitRailStash"},{key:"cli",icon:"terminal",label:"gitRailCli"}],r=g("changes"),u=g(null),h=gt({refresh:!1,sync:"",op:!1,commit:!1,branch:!1,stash:!1,config:!1}),d=g(null),p=g("diff"),w=g([]),b=g(""),_=g([]),M=g([]),O=g(""),N=g([]),j=g(!1),H=g(""),C=g(null),Z=g([]),G=g(""),F=g([]),de=g(Ja),I=g([]),he=g([]),xe=g([]),ge=g(""),ne=g(""),ae=g(""),Ee=g(""),Ve=g(!1),be=g(!1),Pe=g(""),W=g(""),J=g(""),z=g("tags"),ee=g([]),ye=g(""),je=g(!1),Ke=g(""),Ze=g(""),we=g(""),_e=g(""),Ye=g([]),ot=g(""),pe=g(""),Ce=g([]),qe=g(!1),ce=g(""),Ie=g(""),rt=g(null),yt=g(null),ut=g(""),it=g([]),Le=B(()=>u.value?.branch??""),U=B(()=>!!u.value?.inRepo&&!Le.value),R=B(()=>(u.value?.repo??"").replace(/\\/g,"/")),Q=B(()=>I.value.find(E=>E.current)??null),De=B(()=>Q.value?.upstream??""),L=g(0),D=g(0),K=B(()=>De.value?`${De.value}  ↑${L.value} ↓${D.value}`:n("gitNoUpstream")),$=B(()=>U.value?n("gitHeadDetached"):n("gitStatusColon",{branch:Le.value})),q=B(()=>I.value.filter(E=>!E.name.includes("/"))),Te=B(()=>I.value.filter(E=>E.name.includes("/"))),re=B(()=>`${R.value}>git `),ct=B(()=>(u.value?.unstaged.length??0)+(u.value?.staged.length??0)>0),wt=B(()=>xe.value.length>0),Ot=B(()=>{const E=u.value;return E?[{key:"staged",label:n("gitGroupStaged"),list:E.staged},{key:"unstaged",label:n("gitGroupUnstaged"),list:E.unstaged},{key:"untracked",label:n("gitGroupUntracked"),list:E.untracked}].filter(S=>S.list.length>0):[]}),On=B(()=>d.value?p.value==="history"?`${n("gitFileHistory")} — ${d.value.file.path}`:p.value==="blame"?`${n("gitBlame")} — ${d.value.file.path}`:d.value.file.path:""),Gt=B(()=>b.value||n("gitDiffEmpty"));function ze(E){const S=u.value;return S?E==="changes"?S.staged.length+S.unstaged.length+S.untracked.length:E==="branches"?q.value.length:E==="tags"?he.value.length:E==="remotes"?xe.value.length:E==="stash"?Ye.value.length:0:0}const Qe={"":"",untracked:"?",added:"A",modified:"M",deleted:"D"};function et(E){return Qe[E]}function at(E){const S=E.lastIndexOf("/");return S>0?E.slice(0,S+1):""}function Cn(E){const S=E.lastIndexOf("/");return S>=0?E.slice(S+1):E}function Sn(E){return E?new Date(E*1e3).toLocaleString():"—"}async function zt(E){const S=u.value?.repo;if(!S)throw new Error(n("gitNotRepo"));return Gs(S,E)}async function st(E){const S=await zt(E);if(S.code!==0)throw new Error((S.stderr||S.stdout||n("gitOpFailed")).trim());return S.stdout}async function ft(E,S,$e){h.op=!0;try{return await E(),S&&Y("ok",n(S,$e)),await Ct(),!0}catch(nt){return Y("error",nt.message),!1}finally{h.op=!1}}async function Ct(E=!1){if(!(!e.dir||!xa(e.dir))){E||(h.refresh=!0);try{if(u.value=await ei(e.dir),!u.value.inRepo)return;await Promise.all([$n(),gn(),Fo()]),d.value&&await Bn(d.value.file,d.value.group,!0)}catch(S){E||Y("error",S.message)}finally{E||(h.refresh=!1)}}}function Ln(){r.value="changes",Ct()}Je(()=>e.dir,()=>{e.modelValue&&Ct()});async function $n(){const E=await st(["for-each-ref","--sort=-creatordate","--format=%(refname)%09%(objectname:short)%09%(upstream:short)%09%(HEAD)%09%(*objectname:short)%09%(creatordate:short)%09%(contents:subject)","refs/heads","refs/remotes","refs/tags"]).catch(()=>""),S=[],$e=[];for(const $t of E.split(`
`)){if(!$t.trim())continue;const[dt,V,lt,Yt,Vn,Io,...bi]=$t.split("	");if(dt)if(dt.startsWith("refs/remotes/")){const _i=dt.slice(13);if(_i.endsWith("/HEAD"))continue;S.push({name:_i,hash:V??"",upstream:"",current:!1})}else dt.startsWith("refs/heads/")?S.push({name:dt.slice(11),hash:V??"",upstream:lt??"",current:Yt==="*"}):dt.startsWith("refs/tags/")&&$e.push({name:dt.slice(10),hash:Vn||V||"",upstream:"",current:!1,deref:Vn,date:Io,subject:bi.join("	").trim()})}if(S.sort(($t,dt)=>$t.name.localeCompare(dt.name)),I.value=S,he.value=$e,L.value=0,D.value=0,De.value){const $t=await zt(["rev-list","--left-right","--count",`HEAD...${De.value}`]).catch(()=>null);if($t&&$t.code===0){const[dt,V]=$t.stdout.trim().split(/\s+/);L.value=Number(dt)||0,D.value=Number(V)||0}}const nt=await zt(["remote","-v"]).catch(()=>null),jt=new Map;for(const $t of(nt?.stdout??"").split(`
`)){const[dt,V]=$t.split(/\s+/);dt&&V&&!jt.has(dt)&&jt.set(dt,V)}xe.value=[...jt].map(([$t,dt])=>({name:$t,url:dt})),await Jn()}async function Jn(){const E=new Set(he.value.map(nt=>nt.name)),S=new Set,$e=[];for(const nt of xe.value){const jt=await zt(["ls-remote","--tags",nt.name]).catch(()=>null);if(!jt||jt.code!==0)continue;const $t=new Map;for(const dt of jt.stdout.split(`
`)){const V=/^([0-9a-f]+)\t(refs\/tags\/(.+))$/.exec(dt.trim());if(!V)continue;const lt=V[1],Yt=V[3];if(Yt.endsWith("^{}")){const Vn=Yt.slice(0,-3),Io=$t.get(Vn);Io?Io.deref=lt:$t.set(Vn,{hash:lt,deref:lt})}else{const Vn=$t.get(Yt);Vn?Vn.hash=lt:$t.set(Yt,{hash:lt})}}for(const[dt,V]of $t)E.has(dt)||S.has(dt)||(S.add(dt),$e.push({name:dt,hash:V.deref||V.hash,upstream:"",current:!1,deref:V.deref,remoteOnly:!0,remote:nt.name}))}$e.length&&(he.value=[...he.value,...$e.sort((nt,jt)=>jt.name.localeCompare(nt.name,void 0,{numeric:!0}))])}async function gn(){const E=["log",`--max-count=${de.value}`,"--date-order"];j.value&&E.push("--all"),E.push(`--pretty=format:${Ll}`);const S=await st(E).catch(()=>"");N.value=Ad(Bl(S))}function En(E){j.value!==E&&(j.value=E,de.value=Ja,gn().catch(()=>{}))}async function ts(){de.value+=Ja,await gn().catch(()=>{})}async function Fo(){const E=await zt(["stash","list"]).catch(()=>null);Ye.value=Dn(E?.stdout??"")}function Dn(E){const S=[];for(const $e of E.split(`
`)){const nt=/^(stash@\{[^}]+\}):\s*(.*)$/.exec($e.trim());nt&&S.push({ref:nt[1],full:$e.trim(),message:nt[2]||nt[1]})}return S}async function dn(E,S){d.value={file:E,group:S},p.value="diff",await Bn(E,S)}async function Bn(E,S,$e=!1){b.value="";try{if(S==="untracked"){w.value=[],b.value=n("gitDiffUntrackedHint");return}const nt=["diff","--no-color",...S==="staged"?["--cached"]:[],"--",E.path];Gn(await st(nt))}catch(nt){$e||Y("error",nt.message),w.value=[]}}function Gn(E){w.value=E?E.split(`
`):[]}async function Tn(){const E=d.value;if(E){p.value="history",_.value=[];try{const S=await st(["log","--follow","--max-count=30",`--pretty=format:${Ll}`,"--",E.file.path]);_.value=Bl(S)}catch(S){Y("error",S.message)}}}async function yn(){const E=d.value;if(E){p.value="blame",M.value=[];try{const S=await st(["blame","--date=short","-w","--",E.file.path]);M.value=U1(S)}catch(S){Y("error",S.message)}}}async function wn(E){await ft(async()=>{await st(["add","--",E.path])})}async function Qn(E){await ft(async()=>{await st(["restore","--staged","--",E.path])})}async function Nn(E){await Rt({title:n("gitDiscardTitle"),message:n("gitDiscardMsg",{name:E.path})})&&await ft(async()=>{await st(["checkout","--",E.path])},"gitDiscarded")}async function T(E){const S=u.value?.repo;if(!S)return;const $e=`${S.replace(/\\/g,"/")}/${E.path}`.replace(/\/{2,}/g,"/");await ft(async()=>{await gu($e)},"gitIgnored")}async function ve(){await ft(async()=>{await st(["add","-A"])})}async function Be(){const E=O.value.trim(),S=u.value;if(!(!E||!S?.staged.length)){h.commit=!0;try{await st(["commit","-m",E]),O.value="",Y("ok",n("gitCommitted")),await Ct()}catch($e){Y("error",$e.message)}finally{h.commit=!1}}}async function He(E){H.value=E.hash,G.value="",F.value=[],Z.value=[];try{const[S,$e]=await Promise.all([st(["show","-s",`--format=${j1}`,E.hash]),st(["diff-tree","--no-commit-id","--numstat","-r","--root",E.hash])]);C.value=V1(S)??{...E,body:""},Z.value=z1($e)}catch(S){Y("error",S.message)}}async function Ae(E){const S=H.value;if(S){G.value=E.path,F.value=[];try{const $e=await st(["show","--no-color","--format=",S,"--",E.path]);F.value=$e?$e.split(`
`):[]}catch($e){Y("error",$e.message)}Ve.value=!0}}async function Ge(E){try{await navigator.clipboard.writeText(E),Y("ok",n("gitCopied"))}catch{Y("error",n("gitOpFailed"))}}const{cmOpen:Dt,cmX:St,cmY:bn,cmItems:In,openMenu:Fn,closeMenu:ns}=hn();function Fs(E,S,$e){const nt=[{label:n("gitDiff"),icon:"code",onClick:()=>void dn(S,$e)},{label:n("gitFileHistory"),icon:"clock",disabled:$e==="untracked",onClick:()=>void fn(S,$e)},{label:n("gitBlame"),icon:"activity",disabled:$e==="untracked",onClick:()=>void Po(S,$e)},{separator:!0},$e==="staged"?{label:n("gitUnstage"),icon:"undo",onClick:()=>void Qn(S)}:{label:n("gitAddShort"),icon:"plus",onClick:()=>void wn(S)},{label:n("gitIgnore"),icon:"eyeOff",disabled:$e!=="untracked",onClick:()=>void T(S)},{label:n("gitDiscard"),icon:"close",disabled:$e==="untracked",onClick:()=>void Nn(S)},{separator:!0},{label:n("gitCopyPath"),icon:"copy",onClick:()=>void Ge(S.path)}];Fn(E,nt)}async function fn(E,S){(!d.value||d.value.file.path!==E.path||d.value.group!==S)&&await dn(E,S),await Tn()}async function Po(E,S){(!d.value||d.value.file.path!==E.path||d.value.group!==S)&&await dn(E,S),await yn()}function Ao(E,S){const $e=[{label:n("gitCheckout"),icon:"arrowRight",disabled:S.current,onClick:()=>void no(S.name)},{label:n("gitMergeIntoCurrent"),icon:"merge",disabled:S.current,onClick:()=>void x(S.name)},{label:n("gitPushBranch"),icon:"upload",onClick:()=>void Se(S.name)},{separator:!0},{label:n("gitBranchRename"),icon:"edit",disabled:!S.current,onClick:()=>void pn()},{label:n("gitDelete"),icon:"trash",disabled:S.current,onClick:()=>void y(S.name)},{separator:!0},{label:n("gitCopyName"),icon:"copy",onClick:()=>void Ge(S.name)}];Fn(E,$e)}function Zn(E,S){Fn(E,[{label:n("gitCheckout"),icon:"arrowRight",onClick:()=>void jn(S.name)},{separator:!0},{label:n("gitCopyName"),icon:"copy",onClick:()=>void Ge(S.name)}])}function eo(E,S){const $e=[{label:n("gitView"),icon:"eye",onClick:()=>Oe(S)}];S.remoteOnly?$e.push({label:n("gitTagPull"),icon:"download",onClick:()=>void yo(S)}):($e.push({label:n("gitPushBranch"),icon:"upload",onClick:()=>void Xt(S.name)}),$e.push({label:n("gitDelete"),icon:"trash",onClick:()=>void Fe(S.name)})),$e.push({separator:!0}),$e.push({label:n("gitCopyName"),icon:"copy",onClick:()=>void Ge(S.name)}),Fn(E,$e)}function Ro(E,S){Fn(E,[{label:n("gitRemoteSetUrl"),icon:"edit",onClick:()=>void wo(S)},{label:n("gitDelete"),icon:"trash",onClick:()=>void mi(S.name)},{separator:!0},{label:n("gitCopyUrl"),icon:"copy",onClick:()=>void Ge(S.url)}])}function os(E,S){Fn(E,[{label:n("gitStashApply"),icon:"download",onClick:()=>void is(S.ref)},{label:n("gitStashPop"),icon:"upload",onClick:()=>void Ma(S.ref)},{label:n("gitStashDrop"),icon:"close",onClick:()=>void Oa(S.ref)},{separator:!0},{label:n("gitCopyMsg"),icon:"copy",onClick:()=>void Ge(S.message)}])}function Pn(E){Fn(E,[{label:n("gitResetSoft"),icon:"undo",onClick:()=>void tn("reset-soft")},{label:n("gitResetMixed"),icon:"undo",onClick:()=>void tn("reset-mixed")},{label:n("gitResetHard"),icon:"warning",onClick:()=>void tn("reset-hard")},{separator:!0},{label:n("gitRevert"),icon:"undo",onClick:()=>void tn("revert")},{label:n("gitCherryPick"),icon:"check",onClick:()=>void tn("cherry-pick")}])}function qn(){$r({kind:"git",dir:e.dir,key:Ne.key,onDone:()=>{Ct()}})}async function to(){const E=H.value;if(!E)return;const $e=(await fo({title:n("gitBranchFromTitle"),placeholder:n("gitBranchFromPlaceholder")}))?.trim();$e&&await ft(async()=>{await st(["branch",$e,E])},"gitBranchCreated",{name:$e})}async function Mo(){const E=H.value;!E||!await Rt({title:n("gitCheckoutCommit"),message:n("gitCheckoutCommitMsg",{hash:E.slice(0,7)})})||await ft(async()=>{await st(["checkout",E])})}async function tn(E){const S=H.value;if(!S)return;const $e=S.slice(0,7);if(E==="reset-soft"||E==="reset-mixed"||E==="reset-hard"){if(E==="reset-hard"&&!await Rt({title:n("gitResetHard"),message:n("gitResetHardMsg")}))return;const nt=E==="reset-soft"?"--soft":E==="reset-mixed"?"--mixed":"--hard";await ft(async()=>{await st(["reset",nt,S])},"gitResetDone",{hash:$e});return}if(E==="revert"){await ft(async()=>{await st(["revert","--no-edit",S])},"gitRevertDone",{hash:$e});return}E==="cherry-pick"&&await ft(async()=>{await st(["cherry-pick",S])},"gitCherryPicked",{hash:$e})}async function Kt(){const E=ge.value.trim();if(!E)return;await ft(async()=>{await st(["checkout","-b",E])},"gitBranchCreated",{name:E})&&(ge.value="")}async function no(E){await ft(async()=>{await st(["checkout",E])})}async function jn(E){const S=E.split("/").slice(1).join("/")||E;await ft(async()=>{await st(["checkout","-b",S,"--track",E])},"gitBranchCreated",{name:S})}async function pn(){const E=Le.value;if(!E||U.value)return;const $e=(await fo({title:n("gitBranchRenameTitle"),placeholder:n("gitBranchRenamePlaceholder"),initial:E}))?.trim();!$e||$e===E||await ft(async()=>{await st(["branch","-m",$e])},"gitBranchRenamed",{name:$e})}async function y(E){await Rt({title:n("gitDelete"),message:n("gitBranchDeleteMsg",{name:E})})&&await ft(async()=>{await st(["branch","-D",E])})}async function x(E){await ft(async()=>{await st(["merge","--no-edit",E])},"gitMergeDone",{name:E})}async function Se(E){const S=!!I.value.find($e=>$e.name===E)?.upstream;await ft(async()=>{await st(S?["push"]:["push","-u","origin",E])},"gitPushed",{name:E})}function fe(E){const S=[E.name];return E.subject&&S.push(E.subject),S.push(`${E.hash}${E.date?` · ${E.date}`:""}`),S.join(`
`)}function Oe(E){const S=E.hash;S&&(r.value="history",He({hash:S,short:S.slice(0,7),author:"",email:"",ts:E.date?Math.floor(Date.parse(E.date)/1e3):0,date:E.date??"",subject:E.subject??"",parents:[],refs:[{label:E.name,kind:"tag"}]}))}async function P(){const E=ne.value.trim();if(!E)return;const S=ae.value.trim(),$e=Ee.value.trim();await ft(async()=>{const jt=$e?["tag","-a",E,"-m",$e]:["tag",E];S&&jt.push(S),await st(jt)},"gitTagCreated",{name:E})&&(ne.value="",ae.value="",Ee.value="")}async function Fe(E){await Rt({title:n("gitDelete"),message:n("gitTagDeleteMsg",{name:E})})&&await ft(async()=>{await st(["tag","-d",E])},"gitTagDeleted",{name:E})}async function Xt(E){await ft(async()=>{await st(["push","origin",E])},"gitTagPushed",{name:E})}async function Ut(){await ft(async()=>{await st(["fetch","--tags"])},"gitTagFetchAllDone")}async function yo(E){const S=E.remote||"origin";await ft(async()=>{await st(["fetch",S,`refs/tags/${E.name}:refs/tags/${E.name}`])},"gitTagPulled",{name:E.name})}function ss(){Pe.value="",W.value="",J.value="",be.value=!0}function oo(E){z.value=E,E==="releases"&&Oo()}async function Oo(){const E=u.value?.repo;if(!(!E||je.value)){je.value=!0;try{const S=await ah(E);ee.value=S.list,ye.value=S.skipped??""}catch(S){ye.value=S.message}finally{je.value=!1}}}async function Lo(){const E=Ke.value.trim(),S=Ze.value.trim();if(!E||!S){Y("error",n("gitReleaseRequireMsg"));return}const $e=u.value?.repo;if(!$e){Y("error",n("gitNotRepo"));return}h.op=!0;try{const nt=await Jr($e,E,E,S);nt.url?(Y("ok",n("gitReleaseCreated",{url:nt.url})),Ze.value="",await Oo()):Y("info",n("gitReleaseGhSkip",{reason:nt.skipped??""}))}catch(nt){Y("error",nt.message)}finally{h.op=!1}}function vi(E){E&&window.open(E,"_blank","noopener")}async function Ra(){const E=Pe.value.trim(),S=J.value.trim(),$e=W.value.trim();if(!E||!S){Y("error",n("gitReleaseRequireMsg"));return}const nt=u.value?.repo;if(!nt){Y("error",n("gitNotRepo"));return}h.op=!0;try{if((await zt(["rev-parse","-q","--verify",`refs/tags/${E}`])).code!==0){const dt=["tag","-a",E,"-m",S];$e&&dt.push($e),await st(dt)}await st(["push","origin",E]);let $t="";try{const dt=await Jr(nt,E,E,S);dt.url?$t=dt.url:dt.skipped&&Y("info",n("gitReleaseGhSkip",{reason:dt.skipped}))}catch(dt){Y("info",n("gitReleaseGhSkip",{reason:dt.message}))}Y("ok",$t?`${n("gitReleased",{name:E})}  ${$t}`:n("gitReleased",{name:E})),be.value=!1,z.value==="releases"&&Oo(),await Ct()}catch(jt){Y("error",jt.message)}finally{h.op=!1}}async function so(){const E=we.value.trim(),S=_e.value.trim();if(!E||!S)return;await ft(async()=>{await st(["remote","add",E,S])},"gitRemoteAdded",{name:E})&&(we.value="",_e.value="")}async function wo(E){const $e=(await fo({title:n("gitRemoteUrlTitle"),placeholder:n("gitRemoteUrlPlaceholder"),initial:E.url}))?.trim();!$e||$e===E.url||await ft(async()=>{await st(["remote","set-url",E.name,$e])},"gitRemoteUrlSaved")}async function mi(E){await Rt({title:n("gitDelete"),message:n("gitRemoteRemoveMsg",{name:E})})&&await ft(async()=>{await st(["remote","remove",E])},"gitRemoteRemoved",{name:E})}async function nn(){h.stash=!0;try{await st(["stash","push","-m",ot.value.trim()||"auto stash"]),ot.value="",Y("ok",n("gitStashCreated")),await Ct()}catch(E){Y("error",E.message)}finally{h.stash=!1}}async function is(E){await ft(async()=>{await st(["stash","apply",E])},"gitStashApplied")}async function Ma(E){await ft(async()=>{await st(["stash","pop",E])},"gitStashPopped")}async function Oa(E){await Rt({title:n("gitStashDrop"),message:n("gitStashDropMsg",{ref:E})})&&await ft(async()=>{await st(["stash","drop",E])},"gitStashDropped")}async function Bo(E){pe.value=E,Ce.value=[];try{const S=await st(["stash","show","--no-color","-p",E]);Ce.value=S?S.split(`
`):[]}catch(S){Y("error",S.message)}}async function Ps(E){h.sync=E;try{const S=await zt([E]);if(S.code!==0)throw new Error((S.stderr||S.stdout||n("gitOpFailed")).trim());Y("ok",(S.stderr||S.stdout||`${E} ok`).trim()),await Ct()}catch(S){Y("error",S.message)}finally{h.sync=""}}async function As(){const E=u.value?.repo??"";let S="";if(E){const $e=await Gs(E,["remote","get-url","origin"]).catch(()=>null);$e&&$e.code===0&&(S=($e.stdout.split(/\r?\n/)[0]??"").trim())}Er({kind:"git",url:S})}async function Rs(){try{const E=await yu();ce.value=E.name??"",Ie.value=E.email??""}catch{}qe.value=!0}async function gi(){h.config=!0;try{await wu(ce.value,Ie.value),qe.value=!1,Y("ok",n("gitConfigSaved"))}catch(E){Y("error",E.message)}finally{h.config=!1}}async function yi(){const E=ut.value.trim();if(E){ut.value="",it.value.push({kind:"cmd",text:E});try{const S=await zt(E.split(/\s+/));S.stdout&&it.value.push({kind:"out",text:S.stdout}),S.stderr&&it.value.push({kind:S.code===0?"out":"err",text:S.stderr}),!S.stdout&&!S.stderr&&it.value.push({kind:"out",text:`(exit ${S.code})`}),await Ct(!0)}catch(S){it.value.push({kind:"err",text:S.message})}}}function wi(){yt.value?.focus()}return(E,S)=>{const $e=Mn,nt=To,jt=ma,$t=va,dt=un;return l(),Xe(dt,{"model-value":t.modelValue,title:o(n)("gitPanelTitle"),width:"800px","align-center":"","modal-class":"fw-blur-overlay",class:"fw-gitpanel-dialog","close-on-click-modal":!1,"onUpdate:modelValue":S[33]||(S[33]=V=>E.$emit("update:modelValue",V)),onOpen:Ln},{default:se(()=>[u.value&&u.value.inRepo?(l(),c("div",py,[s("div",hy,[s("span",{class:te(["fw-gp-branch",{detached:U.value}]),title:$.value},[m(oe,{name:"git",size:13}),s("b",null,i(U.value?o(n)("gitHeadDetached"):Le.value||"—"),1)],10,vy),s("span",{class:"fw-gp-up",title:K.value},[De.value?(l(),c(ie,{key:0},[s("span",{class:te(["fw-gp-up-i",{zero:!L.value}])},"↑"+i(L.value),3),s("span",{class:te(["fw-gp-up-i",{zero:!D.value}])},"↓"+i(D.value),3),s("span",gy,i(De.value),1)],64)):(l(),c(ie,{key:1},[ue(i(o(n)("gitNoUpstream")),1)],64))],8,my),s("span",{class:"fw-gp-repo",title:u.value.repo},i(o(n)("gitLocalRepo"))+i(R.value),9,yy),s("span",wy,[m($e,{size:"small",loading:h.sync==="fetch",onClick:S[0]||(S[0]=V=>Ps("fetch"))},{default:se(()=>[ue(i(o(n)("gitFetch")),1)]),_:1},8,["loading"]),m($e,{size:"small",loading:h.sync==="pull",onClick:S[1]||(S[1]=V=>Ps("pull"))},{default:se(()=>[ue(i(o(n)("gitPull")),1)]),_:1},8,["loading"]),m($e,{size:"small",loading:h.sync==="push",onClick:S[2]||(S[2]=V=>Ps("push"))},{default:se(()=>[ue(i(o(n)("gitPush")),1)]),_:1},8,["loading"]),m($e,{size:"small",disabled:h.refresh,title:o(n)("gitRefresh"),onClick:S[3]||(S[3]=V=>Ct())},{default:se(()=>[s("span",{class:te(["fw-gp-refresh-ic",{spin:h.refresh}])},[m(oe,{name:"refresh",size:13})],2)]),_:1},8,["disabled","title"]),m($e,{size:"small",title:o(n)("gitConfig"),onClick:Rs},{default:se(()=>[m(oe,{name:"gear",size:13})]),_:1},8,["title"]),m($e,{size:"small",title:o(n)("accTitle"),onClick:As},{default:se(()=>[m(oe,{name:"shield",size:13})]),_:1},8,["title"])])]),s("div",by,[s("nav",_y,[(l(),c(ie,null,Re(a,V=>s("button",{key:V.key,class:te(["fw-gp-rail-btn",{active:r.value===V.key}]),onClick:lt=>r.value=V.key},[m(oe,{name:V.icon,size:14},null,8,["name"]),s("span",xy,i(o(n)(V.label)),1),ze(V.key)?(l(),c("span",Cy,i(ze(V.key)),1)):A("",!0)],10,ky)),64)),S[35]||(S[35]=s("span",{class:"fw-gp-rail-fill"},null,-1)),h.op?(l(),c("div",Sy,[S[34]||(S[34]=s("span",{class:"fw-gp-spin"},null,-1)),ue(i(o(n)("gitOpRunning")),1)])):A("",!0)]),s("section",$y,[r.value==="changes"?(l(),c("div",Ey,[s("div",Dy,[Ot.value.length?A("",!0):(l(),c("div",Ty,i(o(n)("gitClean")),1)),(l(!0),c(ie,null,Re(Ot.value,V=>(l(),c(ie,{key:V.key},[s("div",Ny,[s("span",Fy,i(V.label),1),s("span",Py,i(V.list.length),1),V.key==="unstaged"?(l(),c("button",{key:0,class:"fw-gp-mini",title:o(n)("gitStageAll"),onClick:ve},[m(oe,{name:"plus",size:11})],8,Ay)):A("",!0)]),(l(!0),c(ie,null,Re(V.list,lt=>(l(),c("div",{key:V.key+lt.path,class:te(["fw-gp-row",{active:d.value&&d.value.file.path===lt.path&&d.value.group===V.key}]),title:lt.path,onClick:Yt=>dn(lt,V.key),onContextmenu:ke(Yt=>Fs(Yt,lt,V.key),["prevent","stop"])},[s("span",{class:te(["fw-gp-st","st-"+lt.status])},i(et(lt.status)),3),s("span",My,[at(lt.path)?(l(),c("span",Oy,i(at(lt.path)),1)):A("",!0),ue(i(Cn(lt.path)),1)]),s("span",Ly,[V.key!=="staged"?(l(),c("button",{key:0,class:"fw-gp-mini",title:o(n)("gitAddShort"),onClick:ke(Yt=>wn(lt),["stop"])},[m(oe,{name:"plus",size:11})],8,By)):(l(),c("button",{key:1,class:"fw-gp-mini",title:o(n)("gitUnstage"),onClick:ke(Yt=>Qn(lt),["stop"])},[m(oe,{name:"undo",size:11})],8,Iy))])],42,Ry))),128))],64))),128))]),s("div",jy,[s("div",Vy,[s("span",{class:"fw-gp-detailtitle",title:On.value},i(On.value),9,zy),s("span",Uy,[d.value&&p.value!=="diff"?(l(),c("button",{key:0,class:"fw-gp-mini",title:o(n)("gitDiff"),onClick:S[4]||(S[4]=V=>dn(d.value.file,d.value.group))},[m(oe,{name:"code",size:12})],8,Hy)):A("",!0),d.value&&p.value!=="history"?(l(),c("button",{key:1,class:"fw-gp-mini",title:o(n)("gitFileHistory"),onClick:Tn},[m(oe,{name:"clock",size:12})],8,Wy)):A("",!0),d.value&&p.value!=="blame"?(l(),c("button",{key:2,class:"fw-gp-mini",title:o(n)("gitBlame"),onClick:yn},[m(oe,{name:"activity",size:12})],8,Gy)):A("",!0),d.value?(l(),c("button",{key:3,class:"fw-gp-mini",title:o(n)("gitCopyPath"),onClick:S[5]||(S[5]=V=>Ge(d.value.file.path))},[m(oe,{name:"copy",size:12})],8,qy)):A("",!0)])]),d.value?p.value==="diff"?(l(),Xe(Js,{key:1,lines:w.value,empty:Gt.value},null,8,["lines","empty"])):p.value==="history"?(l(),c(ie,{key:2},[_.value.length?(l(),c("div",Yy,[(l(!0),c(ie,null,Re(_.value,V=>(l(),c("div",{key:V.hash,class:"fw-gp-filerow"},[s("span",Jy,i(V.short),1),s("span",{class:"fw-gp-filesub",title:V.subject},i(V.subject),9,Qy),s("span",Zy,i(V.author)+" · "+i(V.date),1)]))),128))])):(l(),c("div",Xy,i(o(n)("gitFileHistoryEmpty")),1))],64)):(l(),c(ie,{key:3},[M.value.length?(l(),c("div",tw,[(l(!0),c(ie,null,Re(M.value,(V,lt)=>(l(),c("div",{key:lt,class:"fw-gp-blame-row"},[s("span",{class:"fw-gp-blame-hash",title:V.hash},i(V.hash.slice(0,7)),9,nw),s("span",{class:"fw-gp-blame-author",title:V.author},i(V.author),9,ow),s("span",sw,i(V.date),1),s("span",iw,i(V.line),1),s("span",aw,i(V.text),1)]))),128))])):(l(),c("div",ew,i(o(n)("gitBlameEmpty")),1))],64)):(l(),c("div",Ky,i(o(n)("gitSelectFile")),1))])])):r.value==="history"?(l(),c("div",lw,[s("div",rw,[s("div",cw,[s("button",{class:te(["fw-gp-tab",{on:j.value}]),onClick:S[6]||(S[6]=V=>En(!0))},i(o(n)("gitHistoryAll")),3),s("button",{class:te(["fw-gp-tab",{on:!j.value}]),onClick:S[7]||(S[7]=V=>En(!1))},i(o(n)("gitHistoryCurrent")),3),S[36]||(S[36]=s("span",{class:"fw-gp-spacer"},null,-1)),s("span",uw,i(N.value.length),1),N.value.length>=de.value?(l(),c("button",{key:0,class:"fw-gp-tab",onClick:ts},i(o(n)("gitLoadMore")),1)):A("",!0)]),m(dy,{rows:N.value,active:H.value,empty:o(n)("gitLogEmpty"),onSelect:He},null,8,["rows","active","empty"])]),s("div",dw,[C.value?(l(),c(ie,{key:1},[s("div",pw,[s("span",{class:"fw-gp-detailtitle",title:C.value.subject},i(o(n)("gitCommitDetail")),9,hw),s("span",vw,[s("button",{class:"fw-gp-mini",title:o(n)("gitCopyHash"),onClick:S[8]||(S[8]=V=>Ge(C.value.hash))},[m(oe,{name:"copy",size:12})],8,mw),s("button",{class:"fw-gp-mini",title:o(n)("gitBranchFrom"),onClick:to},[m(oe,{name:"git",size:12})],8,gw),s("button",{class:"fw-gp-mini",title:o(n)("gitCheckoutCommit"),onClick:Mo},[m(oe,{name:"check",size:12})],8,yw),s("button",{class:"fw-gp-mini",title:o(n)("gitMenu"),onClick:S[9]||(S[9]=ke(V=>Pn(V),["stop"]))},[m(oe,{name:"sort",size:12})],8,ww)])]),s("div",bw,[s("div",_w,[s("div",kw,[s("span",xw,i(o(n)("gitCommitHash")),1),s("span",Cw,i(C.value.hash),1)]),s("div",Sw,[s("span",$w,i(o(n)("gitCommitAuthor")),1),s("span",Ew,i(C.value.author)+" <"+i(C.value.email)+">",1)]),s("div",Dw,[s("span",Tw,i(o(n)("gitCommitDate")),1),s("span",Nw,i(Sn(C.value.ts))+" · "+i(C.value.date),1)]),s("div",Fw,[s("span",Pw,i(o(n)("gitCommitParents")),1),s("span",Aw,i(C.value.parents.map(V=>V.slice(0,7)).join(" ")||"—"),1)]),C.value.refs.length?(l(),c("div",Rw,[s("span",Mw,i(o(n)("gitCommitRefs")),1),s("span",Ow,[(l(!0),c(ie,null,Re(C.value.refs,V=>(l(),c("span",{key:V.label,class:te(["fw-gp-refchip","rf-"+V.kind])},i(V.label),3))),128))])])):A("",!0)]),s("pre",Lw,i(C.value.body||C.value.subject),1),s("div",Bw,i(o(n)("gitCommitChangedFiles",{n:Z.value.length})),1),Z.value.length?A("",!0):(l(),c("div",Iw,i(o(n)("gitCommitNoFiles")),1)),(l(!0),c(ie,null,Re(Z.value,V=>(l(),c("div",{key:V.path,class:te(["fw-gp-row",{active:G.value===V.path}]),title:o(n)("gitCommitOpenDiff",{path:V.path}),onClick:lt=>Ae(V)},[s("span",Vw,[at(V.path)?(l(),c("span",zw,i(at(V.path)),1)):A("",!0),ue(i(Cn(V.path)),1)]),s("span",Uw,[s("span",Hw,"+"+i(V.add),1),s("span",Ww,"-"+i(V.del),1)])],10,jw))),128))])],64)):(l(),c("div",fw,i(o(n)("gitSelectCommit")),1))])])):r.value==="branches"?(l(),c("div",Gw,[s("div",qw,[m(nt,{modelValue:ge.value,"onUpdate:modelValue":S[10]||(S[10]=V=>ge.value=V),size:"small",placeholder:o(n)("gitBranchNew"),onKeydown:bt(Kt,["enter"])},null,8,["modelValue","placeholder"]),m($e,{size:"small",type:"primary",loading:h.branch,onClick:Kt},{default:se(()=>[ue(i(o(n)("gitBranchCreateAndSwitch")),1)]),_:1},8,["loading"]),m($e,{size:"small",disabled:U.value,onClick:pn},{default:se(()=>[ue(i(o(n)("gitBranchRename")),1)]),_:1},8,["disabled"])]),s("div",Kw,i(o(n)("gitBranchLocalGroup")),1),(l(!0),c(ie,null,Re(q.value,V=>(l(),c("div",{key:V.name,class:te(["fw-gp-row",{active:V.current}]),onContextmenu:ke(lt=>Ao(lt,V),["prevent","stop"])},[s("span",Yw,[m(oe,{name:"git",size:12})]),s("span",Jw,[ue(i(V.name),1),V.current?(l(),c("span",Qw," • "+i(o(n)("gitBranchCurrent")),1)):A("",!0)]),s("span",Zw,[V.current?(l(),Xe($e,{key:1,text:"",size:"small",onClick:lt=>Se(V.name)},{default:se(()=>[ue(i(o(n)("gitPushBranch")),1)]),_:1},8,["onClick"])):(l(),Xe($e,{key:0,text:"",size:"small",onClick:lt=>no(V.name)},{default:se(()=>[ue(i(o(n)("gitCheckout")),1)]),_:1},8,["onClick"]))])],42,Xw))),128)),Te.value.length?(l(),c(ie,{key:0},[s("div",eb,i(o(n)("gitBranchRemoteGroup")),1),(l(!0),c(ie,null,Re(Te.value,V=>(l(),c("div",{key:V.name,class:"fw-gp-row",onContextmenu:ke(lt=>Zn(lt,V),["prevent","stop"])},[s("span",nb,[m(oe,{name:"globe",size:12})]),s("span",ob,i(V.name),1),s("span",sb,[m($e,{text:"",size:"small",onClick:lt=>jn(V.name)},{default:se(()=>[ue(i(o(n)("gitCheckout")),1)]),_:1},8,["onClick"])])],40,tb))),128))],64)):A("",!0)])):r.value==="tags"?(l(),c("div",ib,[s("div",ab,[s("button",{class:te(["fw-gp-sectab",{active:z.value==="tags"}]),onClick:S[11]||(S[11]=V=>oo("tags"))},[ue(i(o(n)("gitTabTags")),1),he.value.length?(l(),c("span",lb,i(he.value.length),1)):A("",!0)],2),s("button",{class:te(["fw-gp-sectab",{active:z.value==="releases"}]),onClick:S[12]||(S[12]=V=>oo("releases"))},[ue(i(o(n)("gitTabReleases")),1),ee.value.length?(l(),c("span",rb,i(ee.value.length),1)):A("",!0)],2)]),z.value==="tags"?(l(),c(ie,{key:0},[s("div",cb,[m(nt,{modelValue:ne.value,"onUpdate:modelValue":S[13]||(S[13]=V=>ne.value=V),size:"small",class:"fw-gp-in-name",placeholder:o(n)("gitTagNamePlaceholder")},null,8,["modelValue","placeholder"]),m(nt,{modelValue:ae.value,"onUpdate:modelValue":S[14]||(S[14]=V=>ae.value=V),size:"small",class:"fw-gp-in-target",placeholder:o(n)("gitTagTargetPlaceholder")},null,8,["modelValue","placeholder"]),m(nt,{modelValue:Ee.value,"onUpdate:modelValue":S[15]||(S[15]=V=>Ee.value=V),size:"small",class:"fw-gp-in-msg",placeholder:o(n)("gitTagMessagePlaceholder")},null,8,["modelValue","placeholder"]),m($e,{size:"small",type:"primary",disabled:!ne.value.trim(),onClick:P},{default:se(()=>[ue(i(o(n)("gitTagCreate")),1)]),_:1},8,["disabled"]),m($e,{size:"small",loading:h.op,disabled:!wt.value,title:wt.value?"":o(n)("gitTagNoRemote"),onClick:Ut},{default:se(()=>[ue(i(o(n)("gitTagFetchAll")),1)]),_:1},8,["loading","disabled","title"])]),he.value.length?A("",!0):(l(),c("div",ub,i(o(n)("gitTagEmpty")),1)),(l(!0),c(ie,null,Re(he.value,V=>(l(),c("div",{key:V.name,class:"fw-gp-row",title:fe(V),onContextmenu:ke(lt=>eo(lt,V),["prevent","stop"])},[s("span",fb,[m(oe,{name:"tag",size:12})]),s("span",pb,[ue(i(V.name)+" ",1),V.deref?(l(),c("span",hb,i(o(n)("gitTagAnnotated")),1)):A("",!0),V.remoteOnly?(l(),c("span",vb,i(o(n)("gitTagRemoteOnly")),1)):A("",!0)]),V.date?(l(),c("span",mb,i(V.date),1)):A("",!0),V.subject?(l(),c("span",{key:1,class:"fw-gp-subject",title:V.subject},i(V.subject),9,gb)):A("",!0),s("span",yb,i(V.hash),1),s("span",wb,[m($e,{text:"",size:"small",onClick:lt=>Oe(V)},{default:se(()=>[ue(i(o(n)("gitView")),1)]),_:1},8,["onClick"])])],40,db))),128))],64)):(l(),c(ie,{key:1},[s("div",bb,[m($e,{size:"small",type:"primary",disabled:!wt.value,title:wt.value?"":o(n)("gitTagNoRemote"),onClick:ss},{default:se(()=>[ue(i(o(n)("gitReleaseBtn")),1)]),_:1},8,["disabled","title"]),m($e,{size:"small",loading:je.value,onClick:Oo},{default:se(()=>[ue(i(o(n)("gitRefresh")),1)]),_:1},8,["loading"]),wt.value?A("",!0):(l(),c("span",_b,i(o(n)("gitTagNoRemote")),1))]),s("div",kb,[m($t,{modelValue:Ke.value,"onUpdate:modelValue":S[16]||(S[16]=V=>Ke.value=V),size:"small",class:"fw-gp-in-name",placeholder:o(n)("gitReleaseChooseTag"),filterable:""},{default:se(()=>[(l(!0),c(ie,null,Re(he.value,V=>(l(),Xe(jt,{key:V.name,label:V.name,value:V.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"]),m(nt,{modelValue:Ze.value,"onUpdate:modelValue":S[17]||(S[17]=V=>Ze.value=V),size:"small",type:"textarea",rows:2,resize:"none",placeholder:o(n)("gitReleaseNotesPlaceholder")},null,8,["modelValue","placeholder"]),m($e,{size:"small",disabled:!Ke.value.trim()||!Ze.value.trim(),onClick:Lo},{default:se(()=>[ue(i(o(n)("gitReleaseCreateForTag")),1)]),_:1},8,["disabled"])]),ye.value?(l(),c("div",xb,i(o(n)("gitReleaseLoadSkip",{reason:ye.value})),1)):!ee.value.length&&!je.value?(l(),c("div",Cb,i(o(n)("gitReleaseEmpty")),1)):A("",!0),(l(!0),c(ie,null,Re(ee.value,V=>(l(),c("div",{key:V.url||V.tag,class:"fw-gp-row",title:V.name},[s("span",$b,[m(oe,{name:"tag",size:12})]),s("span",Eb,[ue(i(V.name||V.tag)+" ",1),s("span",Db,i(V.tag),1)]),V.date?(l(),c("span",Tb,i(V.date),1)):A("",!0),s("span",Nb,[m($e,{text:"",size:"small",onClick:lt=>vi(V.url)},{default:se(()=>[ue(i(o(n)("gitReleaseOpen")),1)]),_:1},8,["onClick"])])],8,Sb))),128))],64))])):r.value==="remotes"?(l(),c("div",Fb,[s("div",Pb,[m(nt,{modelValue:we.value,"onUpdate:modelValue":S[18]||(S[18]=V=>we.value=V),size:"small",class:"fw-gp-in-name",placeholder:o(n)("gitRemoteNamePlaceholder")},null,8,["modelValue","placeholder"]),m(nt,{modelValue:_e.value,"onUpdate:modelValue":S[19]||(S[19]=V=>_e.value=V),size:"small",class:"fw-gp-in-url",placeholder:o(n)("gitRemoteUrlPlaceholder")},null,8,["modelValue","placeholder"]),m($e,{size:"small",type:"primary",disabled:!we.value.trim()||!_e.value.trim(),onClick:so},{default:se(()=>[ue(i(o(n)("gitRemoteAdd")),1)]),_:1},8,["disabled"])]),xe.value.length?A("",!0):(l(),c("div",Ab,i(o(n)("gitRemoteEmpty")),1)),(l(!0),c(ie,null,Re(xe.value,V=>(l(),c("div",{key:V.name,class:"fw-gp-row",onContextmenu:ke(lt=>Ro(lt,V),["prevent","stop"])},[s("span",Mb,[m(oe,{name:"globe",size:12})]),s("span",Ob,i(V.name),1),s("span",{class:"fw-gp-remote-url",title:V.url},i(V.url),9,Lb)],40,Rb))),128))])):r.value==="stash"?(l(),c("div",Bb,[s("div",Ib,[s("div",jb,[m(nt,{modelValue:ot.value,"onUpdate:modelValue":S[20]||(S[20]=V=>ot.value=V),size:"small",placeholder:o(n)("gitStashPlaceholder"),onKeydown:bt(nn,["enter"])},null,8,["modelValue","placeholder"]),m($e,{size:"small",type:"primary",loading:h.stash,disabled:!ct.value,onClick:nn},{default:se(()=>[ue(i(o(n)("gitStashNew")),1)]),_:1},8,["loading","disabled"])]),Ye.value.length?A("",!0):(l(),c("div",Vb,i(ct.value?o(n)("gitStashEmpty"):o(n)("gitStashNone")),1)),(l(!0),c(ie,null,Re(Ye.value,V=>(l(),c("div",{key:V.ref,class:te(["fw-gp-row",{active:pe.value===V.ref}]),title:V.full,onClick:lt=>Bo(V.ref),onContextmenu:ke(lt=>os(lt,V),["prevent","stop"])},[s("span",Ub,[m(oe,{name:"stash",size:12})]),s("span",Hb,i(V.message),1),s("span",Wb,[s("button",{class:"fw-gp-mini",title:o(n)("gitStashApply"),onClick:ke(lt=>is(V.ref),["stop"])},[m(oe,{name:"download",size:11})],8,Gb)])],42,zb))),128))]),s("div",qb,[s("div",Kb,[s("span",Xb,i(pe.value||o(n)("gitStashView")),1)]),m(Js,{lines:Ce.value,empty:o(n)("gitStashEmpty")},null,8,["lines","empty"])])])):r.value==="cli"?(l(),c("div",Yb,[s("div",{ref_key:"cliRef",ref:rt,class:"fw-gp-cli",onClick:wi},[it.value.length?A("",!0):(l(),c("div",Jb,i(o(n)("gitCliPlaceholder")),1)),(l(!0),c(ie,null,Re(it.value,(V,lt)=>(l(),c("div",{key:lt,class:te(["fw-gp-cli-line","kind-"+V.kind])},[V.kind==="cmd"?(l(),c(ie,{key:0},[s("span",Qb,i(re.value),1),s("span",Zb,i(V.text),1)],64)):(l(),c(ie,{key:1},[ue(i(V.text),1)],64))],2))),128)),s("div",e0,[s("span",t0,i(re.value),1),kt(s("input",{ref_key:"cliInputRef",ref:yt,"onUpdate:modelValue":S[21]||(S[21]=V=>ut.value=V),class:"fw-gp-cli-inner",spellcheck:"false",autocomplete:"off",onKeydown:bt(yi,["enter"])},null,544),[[Lt,ut.value]])])],512)])):A("",!0)])]),r.value==="changes"?(l(),c("div",n0,[m(nt,{modelValue:O.value,"onUpdate:modelValue":S[22]||(S[22]=V=>O.value=V),type:"textarea",rows:2,resize:"none",placeholder:o(n)("gitCommitMsgPlaceholder"),onKeydown:bt(ke(Be,["ctrl","prevent"]),["enter"])},null,8,["modelValue","placeholder","onKeydown"]),s("div",o0,[s("span",s0,[u.value.staged.length?(l(),c(ie,{key:0},[ue(i(o(n)("gitCommitFiles",{n:u.value.staged.length})),1)],64)):(l(),c(ie,{key:1},[ue(i(o(n)("gitNoChanges")),1)],64))]),m($e,{size:"small",disabled:!u.value.unstaged.length&&!u.value.untracked.length,onClick:ve},{default:se(()=>[ue(i(o(n)("gitStageAll")),1)]),_:1},8,["disabled"]),m($e,{size:"small",type:"primary",loading:h.commit,disabled:!u.value.staged.length||!O.value.trim(),onClick:Be},{default:se(()=>[ue(i(o(n)("gitCommit")),1),u.value.staged.length?(l(),c("span",i0,"（"+i(u.value.staged.length)+"）",1)):A("",!0)]),_:1},8,["loading","disabled"])])])):A("",!0)])):(l(),c("div",a0,[h.refresh?(l(),c(ie,{key:0},[S[37]||(S[37]=s("span",{class:"fw-gp-spin"},null,-1)),ue(i(o(n)("gitOpRunning")),1)],64)):(l(),c("div",l0,[m(oe,{name:"git",size:28}),s("span",null,i(o(n)("gitNotRepo")),1),s("button",{class:"fw-retry",onClick:qn},i(o(n)("gitCloneHere")),1)]))])),m(dt,{"model-value":qe.value,title:o(n)("gitConfigTitle"),width:"420px","align-center":"","modal-class":"fw-blur-overlay",class:"fw-gitconfig-dialog","close-on-click-modal":!1,"onUpdate:modelValue":S[26]||(S[26]=V=>qe.value=V)},{footer:se(()=>[m($e,{onClick:S[25]||(S[25]=V=>qe.value=!1)},{default:se(()=>[ue(i(o(n)("cancel")),1)]),_:1}),m($e,{type:"primary",loading:h.config,onClick:gi},{default:se(()=>[ue(i(o(n)("gitConfigSave")),1)]),_:1},8,["loading"])]),default:se(()=>[s("div",r0,[s("label",null,i(o(n)("gitConfigName")),1),m(nt,{modelValue:ce.value,"onUpdate:modelValue":S[23]||(S[23]=V=>ce.value=V),size:"small",placeholder:o(n)("gitConfigNamePlaceholder")},null,8,["modelValue","placeholder"])]),s("div",c0,[s("label",null,i(o(n)("gitConfigEmail")),1),m(nt,{modelValue:Ie.value,"onUpdate:modelValue":S[24]||(S[24]=V=>Ie.value=V),size:"small",placeholder:o(n)("gitConfigEmailPlaceholder")},null,8,["modelValue","placeholder"])])]),_:1},8,["model-value","title"]),m(dt,{modelValue:Ve.value,"onUpdate:modelValue":S[27]||(S[27]=V=>Ve.value=V),title:o(n)("gitCommitViewTitle"),width:"800px","align-center":"","modal-class":"fw-blur-overlay",class:"fw-gp-commitview-dialog","close-on-click-modal":!1},{default:se(()=>[C.value?(l(),c("div",u0,[s("div",d0,[s("div",f0,[s("span",p0,i(o(n)("gitCommitHash")),1),s("span",h0,i(C.value.hash),1)]),s("div",v0,[s("span",m0,i(o(n)("gitCommitAuthor")),1),s("span",g0,i(C.value.author)+" <"+i(C.value.email)+">",1)]),s("div",y0,[s("span",w0,i(o(n)("gitCommitDate")),1),s("span",b0,i(Sn(C.value.ts))+" · "+i(C.value.date),1)]),s("pre",_0,i(C.value.body||C.value.subject),1)]),s("div",k0,[s("div",x0,[Z.value.length?A("",!0):(l(),c("div",C0,i(o(n)("gitCommitNoFiles")),1)),(l(!0),c(ie,null,Re(Z.value,V=>(l(),c("div",{key:V.path,class:te(["fw-gp-row",{active:G.value===V.path}]),title:V.path,onClick:lt=>Ae(V)},[s("span",$0,[at(V.path)?(l(),c("span",E0,i(at(V.path)),1)):A("",!0),ue(i(Cn(V.path)),1)]),s("span",D0,[s("span",T0,"+"+i(V.add),1),s("span",N0,"-"+i(V.del),1)])],10,S0))),128))]),s("div",F0,[m(Js,{lines:F.value,empty:o(n)("gitDiffEmpty")},null,8,["lines","empty"])])])])):(l(),c("div",P0,i(o(n)("gitSelectCommit")),1))]),_:1},8,["modelValue","title"]),m(dt,{modelValue:be.value,"onUpdate:modelValue":S[32]||(S[32]=V=>be.value=V),title:o(n)("gitReleaseTitle"),width:"460px","align-center":"","modal-class":"fw-blur-overlay",class:"fw-gp-release-dialog","close-on-click-modal":!1},{footer:se(()=>[m($e,{onClick:S[31]||(S[31]=V=>be.value=!1)},{default:se(()=>[ue(i(o(n)("cancel")),1)]),_:1}),m($e,{type:"primary",loading:h.op,disabled:!Pe.value.trim()||!J.value.trim(),onClick:Ra},{default:se(()=>[ue(i(o(n)("gitReleasePublish")),1)]),_:1},8,["loading","disabled"])]),default:se(()=>[s("div",A0,[s("label",null,i(o(n)("gitReleaseName")),1),m(nt,{modelValue:Pe.value,"onUpdate:modelValue":S[28]||(S[28]=V=>Pe.value=V),size:"small",placeholder:o(n)("gitTagNamePlaceholder")},null,8,["modelValue","placeholder"])]),s("div",R0,[s("label",null,i(o(n)("gitReleaseTarget")),1),m(nt,{modelValue:W.value,"onUpdate:modelValue":S[29]||(S[29]=V=>W.value=V),size:"small",placeholder:o(n)("gitTagTargetPlaceholder")},null,8,["modelValue","placeholder"])]),s("div",M0,[s("label",null,i(o(n)("gitReleaseMsg")),1),m(nt,{modelValue:J.value,"onUpdate:modelValue":S[30]||(S[30]=V=>J.value=V),type:"textarea",rows:3,resize:"none",placeholder:o(n)("gitTagMessagePlaceholder")},null,8,["modelValue","placeholder"])])]),_:1},8,["modelValue","title"]),o(Dt)?(l(),Xe(Zt,{key:2,items:o(In),x:o(St),y:o(bn),onClose:o(ns)},null,8,["items","x","y","onClose"])):A("",!0)]),_:1},8,["model-value","title"])}}}),Rd=xt(O0,[["__scopeId","data-v-001797f7"]]),L0={key:0,class:"fw-svn-shell"},B0={class:"fw-svn-head"},I0=["title"],j0=["title"],V0=["title"],z0={class:"fw-svn-headacts"},U0={class:"fw-svn-body"},H0={class:"fw-svn-rail"},W0=["onClick"],G0={class:"fw-svn-rail-txt"},q0={key:0,class:"fw-svn-rail-badge"},K0={key:0,class:"fw-svn-rail-op"},X0={class:"fw-svn-content"},Y0={key:0,class:"fw-svn-split"},J0={class:"fw-svn-list"},Q0={class:"fw-svn-groupbar"},Z0={class:"fw-svn-groupname"},e_={class:"fw-svn-selall"},t_=["checked"],n_={key:0,class:"fw-svn-empty"},o_=["title"],s_=["checked","onChange"],i_=["data-code"],a_={class:"fw-svn-path"},l_={key:0,class:"fw-svn-dir"},r_={class:"fw-svn-stext"},c_={class:"fw-svn-rowacts"},u_=["disabled","title","onClick"],d_=["disabled","title","onClick"],f_=["disabled","title","onClick"],p_=["disabled","title","onClick"],h_={class:"fw-svn-detail"},v_={class:"fw-svn-detailhead"},m_={class:"fw-svn-detailtitle"},g_=["placeholder"],y_={class:"fw-svn-bulk"},w_=["disabled"],b_=["disabled"],__=["disabled"],k_={class:"fw-svn-commit-acts"},x_={class:"fw-svn-hint"},C_=["disabled"],S_={key:1,class:"fw-svn-loglist"},$_={key:0,class:"fw-svn-empty"},E_=["title","onClick"],D_={class:"fw-svn-caret"},T_={class:"fw-svn-log-r"},N_=["title"],F_={class:"fw-svn-log-meta"},P_={key:0,class:"fw-svn-log-msg"},A_={class:"fw-svn-log-cfiles"},R_={key:0,class:"fw-svn-empty"},M_=["title","onClick"],O_={class:"fw-svn-cfile-path"},L_={key:0,class:"fw-svn-cfile-dir"},B_={key:2,class:"fw-svn-cli"},I_={class:"fw-svn-cli-body"},j_={key:1,class:"fw-svn-warn fw-svn-state"},V_={key:2,class:"fw-svn-checkout-form fw-svn-state"},z_={class:"fw-svn-tip"},U_={class:"fw-svn-checkout-row"},H_={class:"fw-svn-checkout-row"},W_={key:3,class:"fw-svn-empty fw-svn-state"},G_={class:"fw-svn-diffwrap"},q_={class:"fw-svn-blame"},K_={class:"fw-svn-co-form"},X_={class:"fw-svn-co-label"},Y_={class:"fw-svn-co-label"},J_=vt({__name:"SvnPanel",props:{modelValue:{type:Boolean},dir:{}},setup(t){const e=t,{t:n}=Mt(),a=[{key:"changes",icon:"fileText",label:"svnRailChanges"},{key:"log",icon:"clock",label:"svnRailLog"},{key:"output",icon:"terminal",label:"svnOutput"}],r=g("changes"),u=g(null),h=g([]),d=g(new Set),p=g(""),w=g(!1),b=g(!1),_=g(""),M=g([]),O=g(!1),N=g(!1),j=g(""),H=g([]),C=g(!1),Z=g(""),G=g([]),F=g(!1),de=g(""),I=g(""),he=B(()=>(u.value?.root??e.dir).replace(/\\/g,"/")),xe=B(()=>h.value.length>0&&d.value.size===h.value.length);function ge(D){return D!=="changes"?"":h.value.length?String(h.value.length):""}function ne(D){r.value=D,D==="log"&&!M.value.length&&ce()}function ae(D){const K=D.lastIndexOf("/");return K<0?"":D.slice(0,K+1)}function Ee(D){const K=D.lastIndexOf("/");return K<0?D:D.slice(K+1)}function Ve(D){return D.split(`
`)[0]??""}async function be(){u.value=null,h.value=[],d.value=new Set,_.value="",M.value=[],r.value="changes";try{u.value=await ho(e.dir),u.value.inRepo&&u.value.svnAvailable&&await J()}catch(D){Y("error",D.message)}}async function Pe(D,K=!1){if(w.value)return null;w.value=!0,r.value="output";try{const $=await Qt(e.dir,D),q=[$.stdout,$.stderr].filter(Boolean).join(`
`).trim();return _.value=`$ svn ${D.join(" ")}

${q||n("svnNoOutput")}`,$.code!==0?Y("error",($.stderr||n("svnFailed")).split(`
`)[0].slice(0,200)):!K&&$.stdout&&Y("ok",$.stdout.split(`
`)[0].slice(0,200)),$}catch($){return Y("error",$.message),null}finally{w.value=!1}}function W(D){D&&(_.value=`${D}

${_.value}`)}async function J(){const D=await Qt(e.dir,["status"]),K=[];for(const q of(D.stdout||"").split(`
`)){if(!q.trim())continue;const Te=q.slice(0,8),re=q.slice(8).trim();if(!re)continue;const ct=(Te[0]??" ").trim();K.push({code:ct,path:re.split(" -> ")[0],statusText:z(ct)})}h.value=K;const $=new Set(K.map(q=>q.path));d.value=new Set([...d.value].filter(q=>$.has(q)))}function z(D){return{A:n("svnStAdded"),M:n("svnStModified"),D:n("svnStDeleted"),R:n("svnStReplaced"),C:n("svnStConflicted"),"!":n("svnStMissing"),"~":n("svnStObstructed"),"?":n("svnStUnversioned"),I:n("svnStIgnored")," ":"",K:n("svnStLocked")}[D]??D}function ee(D){const K=new Set(d.value);K.has(D)?K.delete(D):K.add(D),d.value=K}function ye(D){const K=D.target.checked;d.value=K?new Set(h.value.map($=>$.path)):new Set}function je(){Er({kind:"svn",url:u.value?.url??""})}async function Ke(){b.value=!0;try{u.value=await ho(e.dir),u.value.inRepo&&u.value.svnAvailable&&await J()}catch(D){Y("error",D.message)}finally{b.value=!1}}async function Ze(){const D=u.value?.revision??null,K=await Pe(["update"],!0);if(!K||K.code!==0)return;const $=_1(K.stdout),q=k1(K.stdout);await Ke();const Te=u.value?.revision??q,re=$?D?n("svnUpdateSummaryFrom",{from:D,to:Te??D,n:$}):n("svnUpdateSummary",{n:$,to:Te??"?"}):n("svnAlreadyLatest",{rev:Te??D??"?"});W(re),Y("ok",re)}async function we(){const D=await Pe(["cleanup"]);D&&D.code===0&&await J()}async function _e(){const D=await Pe(["add",...d.value]);D&&D.code===0&&await J()}async function Ye(D){const K=await Pe(["add","--",D]);K&&K.code===0&&await J()}async function ot(D){const K=D.replace(/[\\/]$/,""),$=K.replace(/[\\/][^\\/]+$/,""),q=K.slice($.length+1),Te=await Qt($,["propget","svn:ignore",$]),re=(Te.stdout||"").split(/\r?\n/).map(Ot=>Ot.trim()).filter(Boolean);if(re.includes(q)){Te.code===0&&Y("ok",n("gitIgnored")),await J();return}const ct=[...re,q].join(`
`),wt=await Qt($,["propset","svn:ignore",ct,$]);wt.code===0?Y("ok",n("gitIgnored")):Y("error",(wt.stderr||n("svnFailed")).split(`
`)[0].slice(0,200)),await J()}async function pe(){const D=await Pe(["revert",...d.value]);D&&D.code===0&&await J()}async function Ce(){const D=await Pe(["resolve","--accept","working",...d.value]);D&&D.code===0&&await J()}async function qe(){const D=[...d.value],K=["commit","-m",p.value,...D],$=await Pe(K);$&&$.code===0&&(p.value="",d.value=new Set,await J())}async function ce(){O.value=!0;try{const D=await Qt(e.dir,["log","--xml","-v","-l","50"]);M.value=Ie(D.stdout),ut.value=new Set}catch(D){Y("error",D.message)}finally{O.value=!1}}function Ie(D){const K=[];try{new DOMParser().parseFromString(D,"application/xml").querySelectorAll("logentry").forEach(q=>{const Te=[];q.querySelectorAll("paths > path").forEach(re=>Te.push({action:re.getAttribute("action"),text:re.textContent})),K.push({revision:q.getAttribute("revision")??"",author:q.querySelector("author")?.textContent??"",date:q.querySelector("date")?.textContent??"",msg:q.querySelector("msg")?.textContent??"",paths:Te})})}catch{}return K}function rt(D){if(!D)return"";const K=new Date(D);return isNaN(K.getTime())?D:K.toLocaleString()}async function yt(D){N.value=!0,j.value=" · "+D;try{const K=await Qt(e.dir,["diff",D]);H.value=(K.stdout||"").split(`
`)}catch(K){H.value=[K.message]}}const ut=g(new Set);function it(D){const K=new Set(ut.value);K.has(D)?K.delete(D):K.add(D),ut.value=K}function Le(D){if(!D)return"";const K=D.replace(/^\//,""),$=K.lastIndexOf("/");return $<0?"":K.slice(0,$+1)}function U(D){if(!D)return"";const K=D.replace(/^\//,"");return K.slice(K.lastIndexOf("/")+1)||K}async function R(D,K){if(K.text){N.value=!0,j.value=` · r${D} ${K.text}`,H.value=[];try{const $=await Qt(e.dir,["diff","-c",D,"--","^"+K.text]);H.value=($.stdout||"").split(`
`)}catch($){H.value=[$.message]}}}async function Q(D){C.value=!0,Z.value=" · "+D;try{const K=await Qt(e.dir,["blame","-v",D]);G.value=(K.stdout||"").split(`
`)}catch(K){G.value=[K.message]}}function De(){de.value||(de.value=u.value?.url??""),I.value||(I.value=u.value?.root??e.dir)}async function L(){const D=de.value.trim(),K=I.value.trim();if(!D||!K)return;const $=K.replace(/[\\/][^\\/]*$/,"")||K;w.value=!0;try{const q=await Qt($,["checkout",D,K]),Te=[q.stdout,q.stderr].filter(Boolean).join(`
`).trim();_.value=`$ svn checkout ${D} ${K}

${Te||n("svnNoOutput")}`,q.code===0?(Y("ok",n("svnCheckedOut")),F.value=!1,u.value=await ho(K),u.value.inRepo&&await J()):Y("error",(q.stderr||n("svnFailed")).split(`
`)[0].slice(0,200))}catch(q){Y("error",q.message)}finally{w.value=!1}}return(D,K)=>{const $=Mn,q=To,Te=un;return l(),Xe(Te,{"model-value":t.modelValue,title:o(n)("svnPanelTitle"),width:"800px","align-center":"","modal-class":"fw-blur-overlay",class:"fw-svn-dialog","close-on-click-modal":!1,"onUpdate:modelValue":K[10]||(K[10]=re=>D.$emit("update:modelValue",re)),onOpen:be},{default:se(()=>[u.value&&u.value.inRepo&&u.value.svnAvailable?(l(),c("div",L0,[s("div",B0,[s("span",{class:"fw-svn-revpill",title:u.value.revision?"r"+u.value.revision:""},[m(oe,{name:"svn",size:13}),s("b",null,i(u.value.revision?"r"+u.value.revision:"—"),1)],8,I0),s("span",{class:"fw-svn-url",title:u.value.url??""},i(u.value.url||o(n)("svnNoUrl")),9,j0),s("span",{class:"fw-svn-repo",title:u.value.root??""},i(o(n)("svnRepo"))+i(he.value),9,V0),s("span",z0,[m($,{size:"small",loading:w.value,onClick:Ze},{default:se(()=>[ue(i(o(n)("svnUpdate")),1)]),_:1},8,["loading"]),m($,{size:"small",disabled:w.value,onClick:we},{default:se(()=>[ue(i(o(n)("svnCleanup")),1)]),_:1},8,["disabled"]),m($,{size:"small",onClick:K[0]||(K[0]=re=>F.value=!0)},{default:se(()=>[ue(i(o(n)("svnCheckout")),1)]),_:1}),m($,{size:"small",loading:b.value,onClick:Ke,title:o(n)("svnRefresh")},{default:se(()=>[m(oe,{name:"refresh",size:13})]),_:1},8,["loading","title"]),m($,{size:"small",title:o(n)("accTitle"),onClick:je},{default:se(()=>[m(oe,{name:"shield",size:13})]),_:1},8,["title"])])]),s("div",U0,[s("nav",H0,[(l(),c(ie,null,Re(a,re=>s("button",{key:re.key,class:te(["fw-svn-rail-btn",{active:r.value===re.key}]),onClick:ct=>ne(re.key)},[m(oe,{name:re.icon,size:14},null,8,["name"]),s("span",G0,i(o(n)(re.label)),1),ge(re.key)?(l(),c("span",q0,i(ge(re.key)),1)):A("",!0)],10,W0)),64)),K[12]||(K[12]=s("span",{class:"fw-svn-rail-fill"},null,-1)),w.value?(l(),c("div",K0,[K[11]||(K[11]=s("span",{class:"fw-svn-spin"},null,-1)),ue(i(o(n)("svnRunning")),1)])):A("",!0)]),s("section",X0,[r.value==="changes"?(l(),c("div",Y0,[s("div",J0,[s("div",Q0,[s("span",Z0,i(o(n)("svnModifiedCount",{n:h.value.length})),1),s("label",e_,[s("input",{type:"checkbox",checked:xe.value,onChange:ye},null,40,t_),ue(i(o(n)("svnSelectAll")),1)])]),h.value.length?A("",!0):(l(),c("div",n_,i(o(n)("svnNoChanges")),1)),(l(!0),c(ie,null,Re(h.value,re=>(l(),c("div",{key:re.path,class:"fw-svn-row",title:re.path},[s("input",{type:"checkbox",checked:d.value.has(re.path),onChange:ct=>ee(re.path)},null,40,s_),s("span",{class:"fw-svn-badge","data-code":re.code.trim()||"·"},i(re.code.trim()||"·"),9,i_),s("span",a_,[ae(re.path)?(l(),c("span",l_,i(ae(re.path)),1)):A("",!0),ue(i(Ee(re.path)),1)]),s("span",r_,i(re.statusText),1),s("span",c_,[s("button",{class:"fw-svn-mini",disabled:w.value,title:o(n)("svnDiff"),onClick:ke(ct=>yt(re.path),["stop"])},[m(oe,{name:"code",size:12})],8,u_),s("button",{class:"fw-svn-mini",disabled:w.value,title:o(n)("svnBlame"),onClick:ke(ct=>Q(re.path),["stop"])},[m(oe,{name:"activity",size:12})],8,d_),re.code.trim()==="?"?(l(),c(ie,{key:0},[s("button",{class:"fw-svn-mini",disabled:w.value,title:o(n)("svnAdd"),onClick:ke(ct=>Ye(re.path),["stop"])},[m(oe,{name:"plus",size:12})],8,f_),s("button",{class:"fw-svn-mini",disabled:w.value,title:o(n)("svnIgnore"),onClick:ke(ct=>ot(re.path),["stop"])},[m(oe,{name:"eyeOff",size:12})],8,p_)],64)):A("",!0)])],8,o_))),128))]),s("div",h_,[s("div",v_,[s("span",m_,i(o(n)("svnCommitBtn")),1)]),kt(s("textarea",{"onUpdate:modelValue":K[1]||(K[1]=re=>p.value=re),class:"fw-svn-msg",rows:"6",placeholder:o(n)("svnCommitPlaceholder")},null,8,g_),[[Lt,p.value]]),s("div",y_,[s("button",{class:"fw-svn-btn",disabled:w.value||!d.value.size,onClick:_e},i(o(n)("svnAdd")),9,w_),s("button",{class:"fw-svn-btn",disabled:w.value||!d.value.size,onClick:pe},i(o(n)("svnRevert")),9,b_),s("button",{class:"fw-svn-btn",disabled:w.value||!d.value.size,onClick:Ce},i(o(n)("svnResolve")),9,__)]),s("div",k_,[s("span",x_,i(d.value.size?o(n)("svnCommitSelected",{n:d.value.size}):o(n)("svnCommitAll")),1),s("button",{class:"fw-svn-btn primary",disabled:w.value||!p.value.trim(),onClick:qe},i(o(n)("svnCommitBtn")),9,C_)])])])):r.value==="log"?(l(),c("div",S_,[M.value.length?A("",!0):(l(),c("div",$_,i(O.value?o(n)("svnLoading"):o(n)("svnLogEmpty")),1)),(l(!0),c(ie,null,Re(M.value,re=>(l(),c("div",{key:re.revision,class:te(["fw-svn-logitem",{open:ut.value.has(re.revision)}])},[s("div",{class:"fw-svn-log-h",title:o(n)("svnLogToggle"),onClick:ct=>it(re.revision)},[s("span",D_,i(ut.value.has(re.revision)?"▾":"▸"),1),s("span",T_,"r"+i(re.revision),1),s("span",{class:"fw-svn-log-msg1",title:re.msg},i(Ve(re.msg)),9,N_),s("span",F_,[s("span",null,i(re.author),1),s("span",null,i(rt(re.date)),1)])],8,E_),ut.value.has(re.revision)?(l(),c(ie,{key:0},[re.msg?(l(),c("pre",P_,i(re.msg),1)):A("",!0),s("div",A_,[re.paths.length?A("",!0):(l(),c("span",R_,i(o(n)("svnLogNoPaths")),1)),(l(!0),c(ie,null,Re(re.paths,(ct,wt)=>(l(),c("div",{key:wt,class:"fw-svn-cfile",title:o(n)("svnLogOpenDiff"),onClick:Ot=>R(re.revision,ct)},[s("span",{class:te(["fw-svn-cfile-act","pa-"+(ct.action??"")])},i(ct.action),3),s("span",O_,[Le(ct.text)?(l(),c("span",L_,i(Le(ct.text)),1)):A("",!0),ue(i(U(ct.text)),1)])],8,M_))),128))])],64)):A("",!0)],2))),128))])):(l(),c("div",B_,[s("pre",I_,i(_.value||o(n)("svnNoOutput")),1)]))])])])):u.value&&u.value.inRepo&&!u.value.svnAvailable?(l(),c("div",j_,[m(oe,{name:"warning",size:13}),ue(i(o(n)("svnNoCli")),1)])):u.value&&!u.value.inRepo?(l(),c("div",V_,[s("p",z_,i(o(n)("svnNotRepoTip")),1),s("div",U_,[m(q,{modelValue:de.value,"onUpdate:modelValue":K[2]||(K[2]=re=>de.value=re),size:"small",class:"fw-svn-co-url",placeholder:o(n)("svnCheckoutUrlPlaceholder")},null,8,["modelValue","placeholder"])]),s("div",H_,[m(q,{modelValue:I.value,"onUpdate:modelValue":K[3]||(K[3]=re=>I.value=re),size:"small",class:"fw-svn-co-target",placeholder:o(n)("svnCheckoutTargetPlaceholder")},null,8,["modelValue","placeholder"]),m($,{size:"small",type:"primary",disabled:w.value||!de.value.trim()||!I.value.trim(),onClick:L},{default:se(()=>[ue(i(o(n)("svnCheckout")),1)]),_:1},8,["disabled"])])])):(l(),c("div",W_,i(o(n)("svnLoading")),1)),m(Te,{modelValue:N.value,"onUpdate:modelValue":K[4]||(K[4]=re=>N.value=re),title:o(n)("svnDiffTitle")+j.value,width:"800px","align-center":"","modal-class":"fw-blur-overlay","append-to-body":""},{default:se(()=>[s("div",G_,[m(Js,{lines:H.value,empty:o(n)("gitDiffEmpty")},null,8,["lines","empty"])])]),_:1},8,["modelValue","title"]),m(Te,{modelValue:C.value,"onUpdate:modelValue":K[5]||(K[5]=re=>C.value=re),title:o(n)("svnBlameTitle")+Z.value,width:"800px","align-center":"","modal-class":"fw-blur-overlay","append-to-body":""},{default:se(()=>[s("pre",q_,i(G.value.join(`
`)||o(n)("gitDiffEmpty")),1)]),_:1},8,["modelValue","title"]),m(Te,{modelValue:F.value,"onUpdate:modelValue":K[9]||(K[9]=re=>F.value=re),title:o(n)("svnCheckout"),width:"560px","align-center":"","modal-class":"fw-blur-overlay","append-to-body":"",onOpen:De},{footer:se(()=>[m($,{onClick:K[8]||(K[8]=re=>F.value=!1)},{default:se(()=>[ue(i(o(n)("cancel")),1)]),_:1}),m($,{type:"primary",disabled:w.value||!de.value.trim()||!I.value.trim(),onClick:L},{default:se(()=>[ue(i(o(n)("svnCheckout")),1)]),_:1},8,["disabled"])]),default:se(()=>[s("div",K_,[s("label",X_,i(o(n)("svnCheckoutUrlPlaceholder")),1),m(q,{modelValue:de.value,"onUpdate:modelValue":K[6]||(K[6]=re=>de.value=re),size:"small"},null,8,["modelValue"]),s("label",Y_,i(o(n)("svnCheckoutTargetPlaceholder")),1),m(q,{modelValue:I.value,"onUpdate:modelValue":K[7]||(K[7]=re=>I.value=re),size:"small"},null,8,["modelValue"])])]),_:1},8,["modelValue","title"])]),_:1},8,["model-value","title"])}}}),Md=xt(J_,[["__scopeId","data-v-8297810b"]]),Q_={class:"fw-dlg-head"},Z_={class:"fw-dlg-badge"},e2={class:"fw-dlg-headtext"},t2={class:"fw-dlg-headtitle"},n2={class:"fw-dlg-headsub"},o2=["onKeydown"],s2={class:"fw-np-menubar"},i2=["onClick","onMouseenter"],a2={key:0,class:"fw-np-dropdown"},l2={key:0,class:"fw-np-sep"},r2=["onClick"],c2={key:0,class:"fw-np-state"},u2={key:1,class:"fw-np-state fw-np-err"},d2=["readonly","wrap"],f2={key:3,class:"fw-np-status"},p2={key:0,class:"fw-np-seg fw-np-ro"},h2={class:"fw-np-seg"},v2={class:"fw-np-seg fw-np-eol"},m2={class:"fw-np-seg"},g2=vt({__name:"TxtEditor",props:{modelValue:{type:Boolean},path:{}},emits:["update:modelValue","saved"],setup(t,{emit:e}){const n=t,a=e,{t:r}=Mt(),u=B({get:()=>n.modelValue,set:R=>a("update:modelValue",R)}),h=B(()=>n.path.slice(Math.max(n.path.lastIndexOf("/"),n.path.lastIndexOf("\\"))+1)),d=g(""),p=g(""),w=g(!1),b=g(!1),_=g(""),M=g(!1),O=g(!1),N=g(null),j=g("utf8"),H=g(!1),C=g("lf"),Z=g(0),G={lf:"Unix (LF)",crlf:"Windows (CRLF)",cr:"Macintosh (CR)"},F=B(()=>G[C.value]),de=B(()=>{const R=j.value==="utf8"?"UTF-8":j.value.toUpperCase();return H.value?`${R} BOM`:R}),I=B({get:()=>Ue.txtWordWrap,set:R=>{Ue.txtWordWrap=R,Hn()}}),he=B({get:()=>Ue.txtShowStatus,set:R=>{Ue.txtShowStatus=R,Hn()}}),xe=g(""),ge=g(1),ne=g(1);function ae(R){return/\.txt$/i.test(R)}Je(()=>n.modelValue,async R=>{if(R&&n.path){if(!ae(n.path)){u.value=!1;return}Ie(),await Ve(),await Tt(),Pe(),N.value?.focus()}else Ee()});function Ee(){d.value="",p.value="",M.value=!1,_.value="",xe.value="",ge.value=1,ne.value=1}async function Ve(){w.value=!0,_.value="",O.value=!_o(n.path);try{const R=await vl(n.path);if(R.binary){_.value=r("vsBinaryHint");return}d.value=R.content,p.value=R.content,j.value=R.encoding,H.value=R.hasBom,C.value=R.eol,Z.value=R.mtime,M.value=!1}catch(R){_.value=r("txtReadError",{msg:R.message})}finally{w.value=!1}}function be(){M.value=d.value!==p.value,Pe()}function Pe(){const R=N.value;if(!R)return;const Q=R.selectionStart,De=d.value.slice(0,Q);ge.value=De.split(`
`).length;const L=De.lastIndexOf(`
`);ne.value=Q-L}async function W(R){const Q=await ul(n.path,d.value,{key:Ne.key,encoding:j.value,hasBom:H.value,eol:C.value,expectedMtime:Z.value,force:R});Z.value=Q.mtime,p.value=d.value,M.value=!1,Y("ok",r("txtSaved")),a("saved"),u.value=!1}async function J(){if(!(O.value||!M.value||b.value)&&ae(n.path)){b.value=!0;try{await W(!1)}catch(R){if(R instanceof Yo&&R.code==="mtime-conflict"){if(b.value=!1,!await Rt({title:r("vsConflictTitle"),message:r("vsConflictMsg",{name:h.value})}))return;try{await W(!0)}catch(De){Y("error",De.message)}return}Y("error",R.message)}finally{b.value=!1}}}function z(){J()}const ee=()=>{const R=N.value;return!R||R.selectionStart===R.selectionEnd};function ye(){const R=N.value;return!R||R.selectionStart===R.selectionEnd?null:{s:R.selectionStart,e:R.selectionEnd}}function je(R,Q,De){const L=N.value,D=d.value.slice(0,R)+De+d.value.slice(Q);d.value=D,M.value=D!==p.value,Tt(()=>{L&&(L.focus(),L.selectionStart=L.selectionEnd=R+De.length,Pe())})}function Ke(){N.value?.focus(),N.value?.select()}async function Ze(){const R=ye();if(!R)return;const Q=d.value.slice(R.s,R.e);try{await navigator.clipboard.writeText(Q)}catch{N.value?.focus(),document.execCommand("copy")}}async function we(){if(O.value)return;const R=ye();if(!R)return;const Q=d.value.slice(R.s,R.e);try{await navigator.clipboard.writeText(Q)}catch{N.value?.focus(),document.execCommand("cut");return}je(R.s,R.e,"")}function _e(){if(O.value)return;const R=ye();R&&je(R.s,R.e,"")}async function Ye(){if(O.value)return;const R=N.value;if(!R)return;const Q=R.selectionStart,De=R.selectionEnd;try{const L=await navigator.clipboard.readText();je(Q,De,L)}catch{R.focus(),Y("error","当前环境不允许读取剪贴板，请按 Ctrl+V 粘贴")}}function ot(){O.value||(N.value?.focus(),document.execCommand("undo"),be())}function pe(){if(O.value)return;const R=N.value;if(!R)return;const Q=new Date().toLocaleString("zh-CN",{hour12:!1});je(R.selectionStart,R.selectionEnd,Q)}const Ce=B(()=>[{name:"file",label:"文件",items:[{label:"保存",disabled:()=>O.value||!M.value,action:()=>void J()},{label:"退出",action:()=>void Le()}]},{name:"edit",label:"编辑",items:[{label:"撤销",disabled:()=>O.value,action:()=>ot()},{label:"剪切",disabled:()=>O.value||ee(),action:()=>void we()},{label:"复制",disabled:()=>ee(),action:()=>void Ze()},{label:"粘贴",disabled:()=>O.value,action:()=>void Ye()},{label:"删除",disabled:()=>O.value||ee(),action:()=>_e()},{label:"-",sep:!0},{label:"全选",action:()=>Ke()},{label:"时间/日期",disabled:()=>O.value,action:()=>pe()}]},{name:"format",label:"格式",items:[{label:I.value?"☑ 自动换行":"☐ 自动换行",action:()=>{I.value=!I.value}}]},{name:"view",label:"查看",items:[{label:he.value?"☑ 状态栏":"☐ 状态栏",action:()=>{he.value=!he.value}}]},{name:"help",label:"帮助",items:[{label:"关于记事本",action:()=>Y("ok","记事本 — DSH 文件工作台文本编辑器")}]}]);function qe(R){xe.value=xe.value===R?"":R}function ce(R){xe.value&&(xe.value=R)}function Ie(){xe.value=""}function rt(R,Q){Q.sep||Q.disabled&&Q.disabled()||(Ie(),Q.action?.())}function yt(){Ie()}function ut(){return M.value&&!O.value?Rt({title:r("txtUnsavedTitle"),message:r("txtUnsavedMsg")}).then(R=>R):Promise.resolve(!0)}function it(R){ut().then(Q=>{Q&&R()})}async function Le(){await ut()&&(u.value=!1)}function U(){Ee()}return(R,Q)=>{const De=Of("icon"),L=un;return l(),Xe(L,{modelValue:u.value,"onUpdate:modelValue":Q[1]||(Q[1]=D=>u.value=D),class:"fw-clone-dialog fw-np-dialog",width:"800px","align-center":"","modal-class":"fw-blur-overlay","close-on-click-modal":!1,"before-close":it,"append-to-body":"",onClose:U},{header:se(()=>[s("div",Q_,[s("span",Z_,[m(De,{name:"fileText",size:20})]),s("span",e2,[s("span",t2,i(M.value?"* ":"")+i(h.value),1),s("span",n2,[ue(i(o(r)("txtEditorSub")),1),M.value?(l(),c(ie,{key:0},[ue(" · "+i(o(r)("txtUnsaved")),1)],64)):A("",!0)])])])]),default:se(()=>[s("div",{class:"fw-np",tabindex:"-1",onKeydown:[bt(ke(z,["ctrl","prevent"]),["s"]),bt(ke(pe,["prevent"]),["f5"])]},[s("div",s2,[(l(!0),c(ie,null,Re(Ce.value,D=>(l(),c("div",{key:D.name,class:te(["fw-np-menu",{open:xe.value===D.name}]),onClick:K=>qe(D.name),onMouseenter:K=>ce(D.name)},[ue(i(D.label)+" ",1),xe.value===D.name?(l(),c("div",a2,[(l(!0),c(ie,null,Re(D.items,(K,$)=>(l(),c(ie,{key:$},[K.sep?(l(),c("div",l2)):(l(),c("div",{key:1,class:te(["fw-np-item",{disabled:K.disabled?K.disabled():!1}]),onClick:q=>rt(D.name,K)},i(K.label),11,r2))],64))),128))])):A("",!0)],42,i2))),128))]),w.value?(l(),c("div",c2,[Q[2]||(Q[2]=s("span",{class:"fw-np-spin"},null,-1)),ue(i(o(r)("txtLoading")),1)])):_.value?(l(),c("div",u2,i(_.value),1)):kt((l(),c("textarea",{key:2,ref_key:"taRef",ref:N,"onUpdate:modelValue":Q[0]||(Q[0]=D=>d.value=D),class:te(["fw-np-area",{wrap:I.value}]),readonly:O.value,wrap:I.value?"soft":"off",spellcheck:"false",onInput:be,onKeyup:Pe,onClick:Pe,onContextmenu:ke(yt,["prevent"])},null,42,d2)),[[Lt,d.value]]),he.value&&!w.value&&!_.value?(l(),c("div",f2,[O.value?(l(),c("span",p2,i(o(r)("txtReadonly")),1)):A("",!0),Q[3]||(Q[3]=s("span",{class:"fw-np-spacer"},null,-1)),s("span",h2,"Ln "+i(ge.value)+", Col "+i(ne.value),1),Q[4]||(Q[4]=s("span",{class:"fw-np-seg"},"100%",-1)),s("span",v2,i(F.value),1),s("span",m2,i(de.value),1)])):A("",!0)],40,o2),xe.value?(l(),c("div",{key:0,class:"fw-np-backdrop",onClick:Ie,onContextmenu:ke(Ie,["prevent"])},null,32)):A("",!0)]),_:1},8,["modelValue"])}}}),ln=gt({sessionId:null,connected:!1,files:[],running:!1});let Cc=!1,Qs=null;const Sc="__DSH_FW_SESSION_SSE__",$c={dispose:()=>Il()};function y2(){const t=globalThis,e=t[Sc];if(e&&e!==$c)try{e.dispose()}catch{}t[Sc]=$c}function w2(t){const e=t;if(!(!e||typeof e!="object")&&ln.sessionId&&!(e.sessionId&&e.sessionId!==ln.sessionId))switch(e.type){case"snapshot":case"files":ln.files=Array.isArray(e.files)?e.files:[],ln.running=e.running===!0,ln.connected=!0;break;case"status":ln.running=e.running===!0,ln.connected=!0;break}}function b2(t){ln.sessionId!==t&&(ln.sessionId=t,fr(t))}function _2(){if(y2(),Qs)return()=>Il();Cc||(Cc=!0,Rv(w2));const t=window.__DSH_FILE_WORKBENCH__;return!t||typeof t.subscribeCurrentSessionId!="function"?()=>{}:(Qs=t.subscribeCurrentSessionId(e=>{e?b2(e):(fr(null),ln.sessionId=null)}),()=>Il())}function Il(){try{Qs&&(Qs(),Qs=null)}catch{}fr(null),ln.sessionId=null,ln.files=[],ln.running=!1,ln.connected=!1}function Qa(t){const e=t.lastIndexOf(".");return e>0&&e<t.length-1?t.slice(e):""}function Ec(t){if(t==null||t<0)return"—";const e=["B","KB","MB","GB","TB"];let n=t,a=0;for(;n>=1024&&a<e.length-1;)n/=1024,a+=1;return`${a===0?n:n>=10?Math.round(n):n.toFixed(1)} ${e[a]}`}const vn=gt({selectionCount:0,canOperate:!0,hasClipboard:!1,isRecycle:!1});let Od=null;function la(t){Od=t}function k2(t,e){Od?.(t,e)}const x2={key:0,class:"fw-fl-tool"},C2={key:1,class:"fw-error"},S2={class:"fw-error-ico"},$2={key:1,class:"fw-table"},E2={key:0,class:"fw-sort"},D2={key:0,class:"fw-sort"},T2={key:0,class:"fw-sort"},N2={key:0,class:"fw-sort"},F2={key:0,class:"fw-vspacer"},P2=["data-path","title","draggable","onMouseenter","onMouseleave","onDragstart","onDragover","onDrop","onClick","onDblclick","onContextmenu"],A2={class:"col-name"},R2={class:"fw-n"},M2={class:"fw-ico"},O2={class:"fw-label"},L2=["title"],B2=["title"],I2={key:2,class:"fw-weak"},j2=["title"],V2={class:"col-size"},z2={class:"col-type"},U2={class:"col-mtime"},H2={key:1,class:"fw-vspacer"},W2={key:2},G2={colspan:4,class:"fw-empty-cell fw-inaccessible"},q2={key:3},K2={colspan:4,class:"fw-empty-cell"},X2=["data-path","title","draggable","onMouseenter","onMouseleave","onDragstart","onDragover","onDrop","onClick","onDblclick","onContextmenu"],Y2={class:"fw-ico"},J2={class:"fw-list-name"},Q2=["title"],Z2=["title"],ek=["title"],tk=["data-path","title","draggable","onMouseenter","onMouseleave","onDragstart","onDragover","onDrop","onClick","onDblclick","onContextmenu"],nk={key:0,class:"fw-tile-thumb"},ok=["src","alt"],sk={key:1,class:"fw-tile-ico"},ik={class:"fw-tile-name"},ak=["title"],lk=["title"],rk={key:4,class:"fw-mode fw-content"},ck=["data-path","title","draggable","onMouseenter","onMouseleave","onDragstart","onDragover","onDrop","onClick","onDblclick","onContextmenu"],uk={class:"fw-ico"},dk={class:"fw-c-main"},fk={class:"fw-c-name"},pk={key:0,class:"fw-broken-tag"},hk={class:"fw-c-type"},vk={class:"fw-c-meta"},mk={key:5,class:"fw-mode fw-tiles"},gk=["data-path","title","draggable","onMouseenter","onMouseleave","onDragstart","onDragover","onDrop","onClick","onDblclick","onContextmenu"],yk={key:0,class:"fw-tile-thumb"},wk=["src","alt"],bk={key:1,class:"fw-tile-ico"},_k={class:"fw-t2-body"},kk={class:"fw-t2-name"},xk={class:"fw-t2-type"},Ck={class:"fw-t2-size"},Sk={key:6,class:"fw-empty-small"},$k={key:3,class:"fw-refreshing"},Ek={class:"fw-dlg-head"},Dk={class:"fw-dlg-badge"},Tk={class:"fw-dlg-headtext"},Nk={class:"fw-dlg-headtitle"},Fk={class:"fw-dlg-headsub"},Pk={key:0,class:"fw-prop-body"},Ak={class:"fw-prop-row"},Rk={class:"k"},Mk={class:"v"},Ok={class:"fw-prop-row"},Lk={class:"k"},Bk={class:"v"},Ik={class:"fw-prop-row"},jk={class:"k"},Vk={class:"v"},zk={class:"fw-prop-row fw-prop-row-wide"},Uk={class:"k"},Hk=["title"],Wk={class:"fw-gitdiff-body"},Gk=40,qk=28,Kk=vt({__name:"FileListPane",setup(t){const{t:e}=Mt(),n=B(()=>le.view==="recycle"),a=g(Ue.sortKey),r=g(Ue.asc),u=g(null);let h=0,d=0;function p(y){return{width:`${Ue.colWidths[y]}px`}}function w(y,x){u.value=x,h=y.clientX,d=Ue.colWidths[x],document.addEventListener("mousemove",b),document.addEventListener("mouseup",_)}function b(y){const x=u.value;x&&(Ue.colWidths[x]=Math.max(Gk,d+(y.clientX-h)))}function _(){u.value&&Hn(),u.value=null,document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",_)}At(()=>{document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",_)});const M=B(()=>n.value?"recycle":le.listing?.path??""),O=g(wl(M.value)),N=B(()=>{const y=O.value;return y==="huge"||y==="large"||y==="medium"||y==="small"?"grid":y}),j=B(()=>{const y=O.value;return y==="small"?20:y==="medium"?32:y==="large"?48:72});Je(()=>Ue.view,y=>{O.value!==y&&(O.value=y)}),Je(M,y=>{const x=wl(y);O.value!==x&&(O.value=x)}),Je(O,y=>Ji.value=y,{immediate:!0}),Je(()=>Ue.sortKey,y=>{a.value!==y&&(a.value=y)}),Je(()=>Ue.asc,y=>{r.value!==y&&(r.value=y)});const{cmOpen:H,cmX:C,cmY:Z,cmItems:G,openMenu:F}=hn(),de=g(!1),I=g(null),he=g(!1),xe=g(""),ge=g(!1),ne=g(!1),ae=g(!1),Ee=g(!1),Ve=g("");function be(y){Ve.value=y,Ee.value=!0}function Pe(){Nt()}function W(y){a.value===y?r.value=!r.value:(a.value=y,r.value=y!=="mtime"),Ue.sortKey=a.value,Ue.asc=r.value,Hn()}function J(y){if(y.isDir)return e("typeFolder");const x=y.name.lastIndexOf("."),Se=x>0?y.name.slice(x+1).toUpperCase():"";return Se?`${Se} ${e("typeFile")}`:e("typeFile")}const z=/\.(png|jpe?g|gif|svg|webp|bmp|ico|avif)$/i;function ee(y){return!y.isDir&&z.test(y.name)}function ye(y){if(Ue.showExtensions||y.isDir)return y.name;const x=y.name.lastIndexOf(".");return x>0?y.name.slice(0,x):y.name}function je(y){if(y.isDir)return"";const x=y.size;if(x===void 0)return"—";const Se=["B","KB","MB","GB","TB"];let fe=x,Oe=0;for(;fe>=1024&&Oe<Se.length-1;)fe/=1024,Oe+=1;return`${Oe===0?fe:fe>=10?Math.round(fe):fe.toFixed(1)} ${Se[Oe]}`}function Ke(y){if(y.mtime===void 0)return"";try{return new Date(y.mtime).toLocaleString(void 0,{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})}catch{return new Date(y.mtime).toLocaleString()}}function Ze(y){return y.path}const we={"":"",untracked:"?",added:"A",modified:"M",deleted:"D"};function _e(y){return Td(le.listing?.path??"",y.name)}function Ye(y){return we[_e(y)]}function ot(y){const x=_e(y);return x==="untracked"?e("gitBadgeUntracked"):x==="added"?e("gitBadgeAdded"):x==="deleted"?e("gitBadgeDeleted"):x==="modified"?e("gitBadgeModified"):""}function pe(y){return Nd(le.listing?.path??"",y.name)}function Ce(y){return we[pe(y)]}function qe(y){const x=pe(y);return x==="untracked"?e("gitBadgeUntracked"):x==="added"?e("gitBadgeAdded"):x==="deleted"?e("gitBadgeDeleted"):x==="modified"?e("gitBadgeModified"):""}const ce=B(()=>{const y=[...le.listing?.entries??[]],x={name:(Se,fe)=>Se.name.localeCompare(fe.name,void 0,{sensitivity:"base"}),size:(Se,fe)=>(Se.size??-1)-(fe.size??-1),type:(Se,fe)=>{const Oe=P=>P.isDir?"0-folder":P.name.slice(P.name.lastIndexOf(".")).toLowerCase();return(J(Se)+Oe(Se)).localeCompare(J(fe)+Oe(fe))},mtime:(Se,fe)=>(Se.mtime??0)-(fe.mtime??0)};return y.sort((Se,fe)=>{if(Se.isDir!==fe.isDir)return Se.isDir?-1:1;let Oe=x[a.value](Se,fe);return Oe===0&&(Oe=Se.name.localeCompare(fe.name,void 0,{sensitivity:"base"})),r.value||(Oe=-Oe),Oe}),y}),Ie=g(""),rt=B(()=>{const y=Ie.value.trim().toLowerCase();return ce.value.filter(x=>!Ue.showHidden&&x.hidden?!1:y?x.name.toLowerCase().includes(y):!0)}),yt=B(()=>le.listing?.inaccessible?le.listing.inaccessible:rt.value.length===0&&Ie.value?e("filterEmpty"):n.value?e("recycleEmptyList"):e("emptyDir")),ut=g(null),it=g(null);function Le(){it.value?.click()}async function U(y){const x=y.target,Se=x.files;Se?.length&&le.listing&&await dn(Se,le.listing.path),x.value=""}const R=B(()=>rt.value.length),Q=qg(ut,R,qk),De=B(()=>rt.value.slice(Q.range.value.start,Q.range.value.end));Je(()=>le.listing?.path,()=>{ut.value&&(ut.value.scrollTop=0)}),Je(()=>le.listing?.path,y=>{y&&!n.value&&(xo(y),cs(y))},{immediate:!0});const L=g(new Set),D=g(""),K=g("");function $(y,x){if(y.shiftKey&&K.value){const Se=rt.value.map(P=>P.path),fe=Se.indexOf(K.value),Oe=Se.indexOf(x.path);if(fe!==-1&&Oe!==-1){const[P,Fe]=fe<Oe?[fe,Oe]:[Oe,fe],Xt=new Set;for(let Ut=P;Ut<=Fe;Ut++)Xt.add(Se[Ut]);L.value=Xt}D.value=x.path;return}if(y.ctrlKey||y.metaKey){const Se=new Set(L.value),fe=Se.has(x.path);fe?Se.delete(x.path):Se.add(x.path),L.value=Se,K.value=x.path,D.value=fe?"":x.path;return}L.value=new Set,D.value=x.path,K.value=x.path}function q(y,x){L.value=new Set,D.value=x.path,K.value=x.path,yn(x)}function Te(){L.value=new Set,D.value="",K.value=""}function re(y){ut.value?.focus({preventScroll:!0}),!(Ot||y.target.closest(".fw-row, .fw-list-row, .fw-tile, .fw-content-row, .fw-tile2, th"))&&Te()}const ct=g(null);let wt=null,Ot=!1;function On(y){y.button!==0||!le.listing||y.target.closest(".fw-row, .fw-list-row, .fw-tile, .fw-content-row, .fw-tile2, th, input, textarea")||(wt={x:y.clientX,y:y.clientY},window.addEventListener("mousemove",Gt),window.addEventListener("mouseup",ze,{once:!0}))}function Gt(y){if(!wt||!ut.value)return;const x=ut.value.getBoundingClientRect(),Se=Math.min(wt.x,y.clientX),fe=Math.min(wt.y,y.clientY),Oe=Math.max(wt.x,y.clientX),P=Math.max(wt.y,y.clientY);ct.value={x:Se-x.left,y:fe-x.top,w:Oe-Se,h:P-fe};const Fe=new Set;ut.value.querySelectorAll("[data-path]").forEach(Xt=>{const Ut=Xt.getBoundingClientRect();Ut.left<Oe&&Ut.right>Se&&Ut.top<P&&Ut.bottom>fe&&Fe.add(Xt.dataset.path??"")}),Fe.delete(""),L.value=Fe,D.value=""}function ze(){wt&&(wt=null,ct.value=null,window.removeEventListener("mousemove",Gt),Ot=!0,setTimeout(()=>{Ot=!1},0))}function Qe(y){if(y.target?.closest("input, textarea, select, [contenteditable='true'], .el-input, .el-textarea"))return;const Se=rt.value;if(!Se.length)return;const fe=Se.map(Fe=>Fe.path),Oe=D.value?fe.indexOf(D.value):K.value?fe.indexOf(K.value):-1;if(y.ctrlKey&&y.shiftKey&&y.key.toLowerCase()==="n"){y.preventDefault(),pn("folder");return}if(y.ctrlKey||y.metaKey){switch(y.key.toLowerCase()){case"a":y.preventDefault(),L.value=new Set(fe);return;case"c":y.preventDefault(),L.value.size?Kt("copy"):D.value&&(Fi([D.value]),Y("ok",e("menuCopyDone")));return;case"x":y.preventDefault(),L.value.size?Kt("cut"):D.value&&(Bs([D.value]),Y("ok",e("menuCutDone")));return;case"v":y.preventDefault(),le.listing&&eo(le.listing.path);return;case"f":y.preventDefault(),at();return}return}if(y.altKey){y.key==="ArrowUp"?(y.preventDefault(),Tl()):y.key==="ArrowLeft"?(y.preventDefault(),td()):y.key==="ArrowRight"&&(y.preventDefault(),nd());return}switch(y.key){case"Backspace":y.preventDefault(),Tl();return;case"Delete":y.preventDefault(),Cn();return;case"F2":y.preventDefault(),Sn();return;case"F5":y.preventDefault(),n.value?ko():Nt();return;case"Enter":Oe>=0&&yn(Se[Oe]);return}let P=Oe;if(y.key==="ArrowDown")P=Oe+1,y.preventDefault();else if(y.key==="ArrowUp")P=Oe-1,y.preventDefault();else if(y.key==="Home")P=0,y.preventDefault();else if(y.key==="End")P=fe.length-1,y.preventDefault();else return;P<0||P>=fe.length||(L.value=new Set,D.value=fe[P],K.value=fe[P],ut.value?.querySelector(".fw-row.selected, .fw-list-row.selected, .fw-tile.selected, .fw-content-row.selected, .fw-tile2.selected")?.scrollIntoView({block:"nearest"}))}function et(y){return y?(le.listing?.entries??[]).find(x=>x.path===y)??null:null}function at(){ut.value?.parentElement?.querySelector(".fw-filter input")?.focus()}function Cn(){if(L.value.size){if(n.value){qn([...L.value]);return}Kt("delete");return}const y=et(D.value);y&&Ao(y)}function Sn(){if(n.value||L.value.size)return;const y=et(D.value);y&&Po(y)}function zt(y){return L.value.size?L.value.has(y.path):y.path===D.value}Je(()=>le.listing?.path,()=>{Te()});const st=g("");function ft(y){st.value=y.path}function Ct(y){st.value===y.path&&(st.value="")}const Ln=B(()=>D.value),$n=B(()=>{const y=Ln.value;return y?(le.listing?.entries??[]).find(x=>x.path===y)??null:null}),Jn=B(()=>{const y=$n.value;if(!y)return le.listing?le.listing.path:"";let Se=y.isDir?e("typeFolder"):(()=>{const fe=y.name.lastIndexOf(".");return fe>0&&fe<y.name.length-1?y.name.slice(fe):e("typeFile")})();return y.mtime!==void 0&&(Se+=` · ${Ke(y)}`),!y.isDir&&y.size!==void 0&&(Se+=` · ${je(y)}`),Se});let gn="";function En(y,x){y.dataTransfer&&(gn=x.path,v1.value=x.path,y.dataTransfer.effectAllowed="move",y.dataTransfer.setData("text/plain",x.path))}function ts(y){}function Fo(){}async function Dn(y,x){if(y.preventDefault(),n.value)return;const Se=y.dataTransfer?.files;if(Se?.length){const P=x||le.listing?.path||"";P&&await dn(Se,P);return}const fe=gn;if(gn="",!fe||!x)return;const Oe=fe.slice(0,Math.max(fe.lastIndexOf("/"),fe.lastIndexOf("\\")+1));Bn(Oe)!==Bn(x)&&(Bs([fe]),await eo(x))}async function dn(y,x){if(!fn(x))return;const Se=sn(e("taskUploading"),x);let fe=0,Oe=0;for(const P of Array.from(y)){Se.step(e("taskUploading"),P.name,void 0,Qa(P.name)||e("typeFile"),P.size);try{await Qp(x,P,Ne.key),fe+=1}catch{Oe+=1}}fe&&Y("ok",e("uploaded",{count:fe})),Oe&&Y("error",e("uploadFailed",{count:Oe})),Oe?Se.fail(`${e("uploadFailed",{count:Oe})}${fe?`，成功 ${fe}`:""}`):fe&&Se.done(e("uploaded",{count:fe})),await Nt()}function Bn(y){return y.replace(/[\\/]+/g,"/").replace(/\/+$/,"").toLowerCase()}function Gn(y){return y.isDir?{fileType:e("typeFolder")}:{fileType:Qa(y.name)||e("typeFile"),fileSize:y.size}}async function Tn(y){try{const x=await qi(y);return x.isDir?{fileType:e("typeFolder")}:{fileType:Qa(x.name)||e("typeFile"),fileSize:x.size}}catch{return{}}}async function yn(y){if(n.value){await Pn([y.recycleFullPath??y.path]);return}if(y.isDir){await Vt(y.path);return}try{await fi(y.path)}catch(x){Y("error",x.message)}}const wn={openGitPanel:()=>{ne.value=!0},openSvnPanel:()=>{ae.value=!0},openCommit:()=>{const y=le.listing?.path??"";if(!Dd(y)){Y("error",e("gitNotRepo"));return}ge.value=!0},showGitDiff:y=>{xe.value=y,he.value=!0},afterMutate:async y=>{await xo(y),await Nt()}};function Qn(y){return Rl(le.listing?.path??"",y,wn)}function Nn(y){return Ml(le.listing?.path??"",y,wn)}function T(y){const x=document.createElement("a");x.href=Up(y),x.rel="noopener",document.body.appendChild(x),x.click(),x.remove()}function ve(y){const x=y.isDir?y.path:y.path.slice(0,Math.max(y.path.lastIndexOf("/"),y.path.lastIndexOf("\\")));Es(x)}function Be(y,x=!0){gr(y,{isDir:x})}async function He(y,x,Se){const fe=await fo({title:y,message:e("subagentAsk"),placeholder:e("subagentAskPlaceholder"),initial:"",multiline:!0});if(fe!==null)try{const Oe=await Yp(x,Se,fe,ln.sessionId??void 0);if(Oe.ok){const P=Oe.mode==="oneshot"?Oe.output??"":"";Y("ok",P?P.slice(0,300)+(P.length>300?"…":""):e("subagentSpawned"))}else Y("error",Oe.error||e("subagentFailed"))}catch(Oe){Y("error",Oe instanceof Error?Oe.message:String(Oe))}}function Ae(y){He(e("menuSubagent"),y.path,y.isDir)}function Ge(){He(e("menuNewSubagent"),"",!1)}function Dt(y,x){if(L.value.has(x.path)||(L.value=new Set,D.value=x.path,K.value=x.path),n.value){F(y,os(x));return}if(L.value.has(x.path)){const Fe=[...L.value],Xt=!_o(x.path),Ut=ps(x.path);F(y,[{label:e("menuMultiCut"),icon:"cut",onClick:()=>Kt("cut"),disabled:Xt},{label:e("menuMultiCopy"),icon:"copy",onClick:()=>Kt("copy")},{label:e("menuMultiDelete"),icon:"trash",onClick:()=>Kt("delete"),disabled:Xt},{label:e("menuMultiCompress"),icon:"archive",onClick:()=>Kt("compress"),disabled:Xt},{separator:!0},{label:e(Ut?"favoriteRemove":"favoriteAdd"),icon:"star",onClick:()=>{const yo=[...L.value],ss=yo.every(oo=>ps(oo));for(const oo of yo)ps(oo)===ss&&Qi(oo);Y("ok",e(ss?"favoriteRemoved":"favoriteAdded"))}},{separator:!0},{label:e("cancel"),icon:"close",onClick:Te},{label:`(${Fe.length}) ✕ ${e("selectedCount",{count:Fe.length})}`,icon:"",onClick:Te}]);return}const Se=ps(x.path),fe=!_o(x.path),Oe=/\.txt$/i.test(x.name),P=[{label:e("menuOpen"),icon:"arrowRight",onClick:()=>yn(x)},...Wt(x.path)?[]:[{label:e("menuOpenExternal"),icon:"monitor",onClick:()=>ns(x.path)}]];Oe&&P.push({label:e("menuEdit"),icon:"edit",disabled:fe,onClick:()=>be(x.path)}),x.isDir&&P.push({label:e("menuOpenInEditor"),icon:"code",onClick:()=>Be(x.path)}),P.push({separator:!0}),P.push({label:e("menuCut"),icon:"cut",disabled:fe,onClick:()=>{Bs([x.path]),Y("ok",e("menuCutDone"))}},{label:e("menuCopy"),icon:"copy",onClick:()=>{Fi([x.path]),Y("ok",e("menuCopyDone"))}},{label:e("menuCompress"),icon:"archive",disabled:fe,onClick:()=>Mo(x)},{label:e("menuExtract"),icon:"folderOpen",disabled:fe||x.isDir||!x.name.toLowerCase().endsWith(".zip"),onClick:()=>tn(x)},{label:e("menuRename"),icon:"edit",disabled:fe,onClick:()=>Po(x)},{label:e("menuDelete"),icon:"trash",disabled:fe,onClick:()=>Ao(x)},{separator:!0},{label:e(Se?"favoriteRemove":"favoriteAdd"),icon:"star",onClick:()=>{const Fe=Qi(x.path);Y("ok",e(Fe?"favoriteAdded":"favoriteRemoved"))}},{label:e("menuDownload"),icon:"download",disabled:x.isDir,onClick:()=>T(x.path)},{label:e("menuOpenTerminal"),icon:"terminal",onClick:()=>ve(x)},{label:e("menuSubagent"),icon:"sparkle",onClick:()=>Ae(x)},...Qn(x.path),...Nn(x.path),{separator:!0},{label:e("menuCopyPath"),icon:"link",onClick:()=>Fs(x.path)},{label:e("menuProperties"),icon:"info",onClick:()=>Zn(x.path)}),F(y,P)}function St(y){if(!le.listing)return;if(n.value){F(y,[{label:e("menuRefresh"),icon:"refresh",onClick:()=>ko()},{separator:!0},{label:e("recycleEmpty"),icon:"trash",disabled:(le.recycleItems?.length??0)===0,onClick:()=>to()}]);return}const x=le.listing.path,Se=Al(),fe=!_o(x);F(y,[{label:e("menuRefresh"),icon:"refresh",onClick:Nt},{label:e("menuOpenInEditor"),icon:"code",onClick:()=>Be(x)},{separator:!0},{label:e("menuView"),icon:"eye",children:bn()},{label:e("menuSort"),icon:"sort",children:Fn()},{separator:!0},{label:e("menuPaste"),icon:"download",disabled:!Se||fe,onClick:()=>eo(x)},{label:e("menuUpload"),icon:"upload",disabled:fe,onClick:()=>Le()},{label:e("menuNew"),icon:"sparkle",disabled:fe,children:[{label:e("menuNewFolder"),icon:"folder",onClick:()=>pn("folder")},{label:e("menuNewFile"),icon:"file",onClick:()=>pn("file")}]},...Qn(x),...Nn(x),{separator:!0},{label:e("menuOpenTerminal"),icon:"terminal",onClick:()=>Es(x)},{label:e("menuNewSubagent"),icon:"sparkle",onClick:()=>Ge()},{label:e("menuProperties"),icon:"info",onClick:()=>Zn(x)}])}function bn(){const y=O.value,x=(Se,fe)=>({label:Se,checked:y===fe,onClick:()=>{O.value=fe,bl(M.value,fe)}});return[x(e("viewHuge"),"huge"),x(e("viewLarge"),"large"),x(e("viewMedium"),"medium"),x(e("viewSmall"),"small"),{separator:!0},x(e("viewList"),"list"),{separator:!0},x(e("viewDetails"),"details"),x(e("viewContent"),"content"),x(e("viewTiles"),"tiles")]}function In(y){O.value=y,bl(M.value,y)}aa(In),Ft.canSwitchView=!0,Do(()=>{Ft.visible=!!le.listing&&!le.loadErr,Ft.total=rt.value.length,Ft.selected=L.value.size,Ft.text=Jn.value,Ft.view=O.value}),la((y,x)=>{const Se=le.listing?.path??"";if(n.value){const fe=L.value.size?[...L.value]:D.value?[D.value]:[];switch(y){case"restore":Pn(fe);break;case"delete":qn(fe);break;case"emptyRecycle":to();break;case"refresh":ko();break;case"properties":D.value&&Zn(D.value);break}return}switch(y){case"newFolder":pn("folder");break;case"newFile":pn("file");break;case"upload":Le();break;case"cut":case"copy":{L.value.size?Kt(y):D.value&&((y==="cut"?Bs:Fi)([D.value]),Y("ok",e(y==="cut"?"menuCutDone":"menuCopyDone")));break}case"paste":Se&&eo(Se);break;case"rename":Sn();break;case"delete":Cn();break;case"sort":x&&W(x);break;case"view":x&&In(x);break;case"toggleExt":Ue.showExtensions=!Ue.showExtensions,Hn();break;case"preview":{const fe=D.value?et(D.value):null;fe&&yn(fe);break}case"refresh":Nt();break;case"properties":D.value&&Zn(D.value);break}}),Do(()=>{vn.selectionCount=L.value.size||(D.value?1:0),vn.canOperate=le.listing?_o(le.listing.path):!1,vn.hasClipboard=Al(),vn.isRecycle=le.view==="recycle"}),At(()=>la(null)),At(()=>{aa(null),Ed()});function Fn(){return[["name",e("sortName")],["mtime",e("sortModified")],["type",e("sortType")],["size",e("sortSize")]].map(([x,Se])=>({label:Se,checked:a.value===x,onClick:()=>W(x)}))}async function ns(y){if(Wt(y)){Y("error",e("remoteNoExternal"));return}try{await mu(y),Y("ok",e("menuOpened"))}catch(x){Y("error",x.message)}}async function Fs(y){try{await navigator.clipboard.writeText(y),Y("ok",e("menuPathCopied"))}catch{Y("error",e("menuPathCopyFail"))}}function fn(y){return _o(y)?!0:(Y("error",e("workspaceOutside")),!1)}async function Po(y){if(!fn(y.path))return;const x=(await fo({title:e("renameEntry"),initial:y.name}))?.trim();if(!x)return;const fe=`${y.path.slice(0,Math.max(y.path.lastIndexOf("/"),y.path.lastIndexOf("\\")))}/${x}`,Oe=Gn(y),P=sn(e("taskRenaming"),`${y.name} → ${x}`,Oe.fileType,Oe.fileSize);try{await Gi(y.path,fe,Ne.key),Y("ok",e("renamed")),P.done()}catch(Fe){Y("error",Fe.message),P.fail(Fe.message)}await Nt()}async function Ao(y){if(n.value){await qn([y.recycleFullPath??y.path]);return}if(!fn(y.path)||!await Rt({title:e("deleteTitle"),message:e("confirmDelete",{name:y.name})}))return;const Se=Gn(y),fe=sn(e("taskDeleting"),y.name,Se.fileType,Se.fileSize);try{await fl(y.path,Ne.key),Y("ok",e("deleted")),fe.done()}catch(Oe){Y("error",Oe.message),fe.fail(Oe.message)}await Nt()}async function Zn(y){if(n.value){const x=et(y);if(!x)return;const Se=x.name.lastIndexOf(".");I.value={name:x.name,path:x.originalPath||x.path,isDir:x.isDir,ext:Se>0&&Se<x.name.length-1?x.name.slice(Se):"",size:x.size??0,mtime:x.mtime??0},de.value=!0;return}if(le.listing)try{I.value=await qi(y),de.value=!0}catch(x){Y("error",x.message)}}async function eo(y){if(!fn(y))return;const x=g1();if(!x.paths.length)return;if(x.op==="cut"&&x.paths.some(fe=>!_o(fe))){Y("error",e("workspaceOutside"));return}const Se=sn(x.op==="cut"?e("taskMoving"):e("taskCopying"),`${x.paths.length} → ${y}`);try{for(const fe of x.paths){const Oe=fe.slice(Math.max(fe.lastIndexOf("/"),fe.lastIndexOf("\\"))+1),P=await Tn(fe);if(x.op==="cut"&&!P.fileType){Y("error",e("taskSrcMissing",{name:Oe})),Se.fail(e("taskSrcMissing",{name:Oe})),await Nt();return}const Fe=await jn(Oe,y);Se.step(x.op==="cut"?e("taskMoving"):e("taskCopying"),fe,`→ ${y}`,P.fileType,P.fileSize),x.op==="cut"?await Gi(fe,Fe,Ne.key):await Jp(fe,y,Ne.key)}Y("ok",x.op==="cut"?e("moved"):e("copied")),Se.done(),m1()}catch(fe){Y("error",fe.message),Se.fail(fe.message)}await Nt()}function Ro(y){return le.listing?.entries.find(x=>x.path===y)?.name??null}function os(y){const x=L.value.has(y.path)?[...L.value]:[y.recycleFullPath??y.path];return[{label:e("recycleRestore"),icon:"undo",onClick:()=>Pn(x)},{label:e("recycleDelete"),icon:"trash",onClick:()=>qn(x)},{separator:!0},{label:e("menuRefresh"),icon:"refresh",onClick:()=>ko()},{separator:!0},{label:e("recycleEmpty"),icon:"trash",disabled:(le.recycleItems?.length??0)===0,onClick:()=>to()},{separator:!0},{label:e("menuProperties"),icon:"info",onClick:()=>Zn(y.recycleFullPath??y.path)}]}async function Pn(y){if(!y.length)return;const x=sn(e("recycleRestore"),y.length>1?`${y.length} 项`:Ro(y[0])??"");let Se=0;for(const fe of y)try{await Ip(fe),Se+=1}catch(Oe){x.fail(Oe.message),Y("error",Oe.message)}Se&&(Y("ok",e("recycleRestored")),x.done(e("recycleRestored"))),Te(),await ko()}async function qn(y){if(!y.length||!await Rt({title:e("recycleDelete"),message:y.length>1?e("recycleDeleteConfirmMulti",{count:y.length}):e("recycleDeleteConfirm",{name:Ro(y[0])??""})}))return;const Se=sn(e("recycleDelete"),`${y.length} 项`);let fe=0;for(const Oe of y)try{await jp(Oe),fe+=1}catch(P){Se.fail(P.message),Y("error",P.message)}fe&&(Y("ok",e("recycledDeleted")),Se.done(e("recycledDeleted"))),Te(),await ko()}async function to(){await pd(),Te()}async function Mo(y){if(!fn(y.path))return;const x=Gn(y),Se=sn(e("taskCompressing"),y.name,x.fileType,x.fileSize);try{await Yr(y.path,void 0,Ne.key),Y("ok",e("compressed")),Se.done()}catch(fe){Y("error",fe.message),Se.fail(fe.message)}await Nt()}async function tn(y){const x=le.listing?.path??"";if(!x||!fn(x))return;const Se=Gn(y),fe=sn(e("taskExtracting"),y.name,Se.fileType,Se.fileSize);try{const Oe=await Zp(y.path,x,Ne.key);Y("ok",e("extracted",{count:Oe.count})),fe.done(e("extracted",{count:Oe.count}))}catch(Oe){Y("error",`${e("extractFailed")}：${Oe.message}`),fe.fail(Oe.message)}await Nt()}async function Kt(y){const x=[...L.value];if(!x.length)return;if(y!=="copy"&&x.some(fe=>!_o(fe))){Y("error",e("workspaceOutside"));return}const Se=y==="cut"?sn(e("taskMoving"),`${x.length} 项`):y==="copy"?sn(e("taskCopying"),`${x.length} 项`):y==="delete"?sn(e("taskDeleting"),`${x.length} 项`):sn(e("taskCompressing"),`${x.length} 项`);try{if(y==="cut")Bs(x),Y("ok",e("menuCutDone"));else if(y==="copy")Fi(x),Y("ok",e("menuCopyDone"));else if(y==="delete"){if(!await Rt({title:e("deleteTitle"),message:e("confirmDelete",{name:`${x.length} 项`})}))return;for(const Oe of x)try{const P=await Tn(Oe);await fl(Oe,Ne.key),Se.step(e("taskDeleting"),Oe,void 0,P.fileType,P.fileSize)}catch{}Y("ok",e("deleted")),Se.done()}else if(y==="compress"){for(const fe of x)try{const Oe=await Tn(fe);await Yr(fe,void 0,Ne.key),Se.step(e("taskCompressing"),fe,void 0,Oe.fileType,Oe.fileSize)}catch{}Y("ok",e("compressed")),Se.done()}}catch(fe){Y("error",fe.message),Se.fail(fe.message)}Te(),await Nt()}async function no(y){return jn(y,le.listing?.path??"")}async function jn(y,x){const Se=x===le.listing?.path?new Set((le.listing?.entries??[]).map(yo=>yo.name.toLowerCase())):null,fe=y.lastIndexOf("."),Oe=fe>0?y.slice(0,fe):y,P=fe>0?y.slice(fe):"";let Fe=y,Xt=2;for(;Se&&Se.has(Fe.toLowerCase());)Fe=`${Oe} (${Xt})${P}`,Xt+=1;const Ut=x.includes("\\")?"\\":"/";return`${x.replace(/[\\/]+$/,"")}${Ut}${Fe}`}async function pn(y){if(!le.listing||!fn(le.listing.path))return;const x=e(y==="folder"?"newFolderName":"newFileName"),Se=y==="folder"?x:`${x}.txt`;let fe=await no(Se);try{y==="folder"?await Wi(fe,Ne.key):await vu(fe,Ne.key),Y("ok",e(y==="folder"?"createdFolder":"createdFile"))}catch(Oe){Y("error",Oe.message),await Nt();return}await Nt()}return(y,x)=>{const Se=To,fe=Mn,Oe=un;return l(),c("div",{class:"fw-fl",onKeydown:Qe},[s("input",{ref_key:"fileInputRef",ref:it,type:"file",multiple:"",class:"fw-hidden-input",onChange:U},null,544),o(le).listing&&!o(le).loadErr?(l(),c("div",x2,[m(Se,{modelValue:Ie.value,"onUpdate:modelValue":x[0]||(x[0]=P=>Ie.value=P),size:"small",clearable:"",placeholder:o(e)("filterPlaceholder"),class:"fw-filter"},{prefix:se(()=>[m(oe,{name:"search",size:14,class:"fw-search-ico"})]),_:1},8,["modelValue","placeholder"])])):A("",!0),o(le).loadErr?(l(),c("div",C2,[s("span",S2,[m(oe,{name:"warning",size:16})]),s("span",null,i(o(le).loadErr),1),s("button",{class:"fw-retry",onClick:x[1]||(x[1]=P=>o(Nt)())},i(o(e)("retry")),1)])):o(le).listing?(l(),c("div",{key:2,ref_key:"wrapRef",ref:ut,class:"fw-table-wrap",tabindex:"0",onScroll:x[12]||(x[12]=(...P)=>o(Q).onScroll&&o(Q).onScroll(...P)),onClick:re,onContextmenu:ke(St,["prevent"]),onDragover:ke(Fo,["prevent"]),onDrop:x[13]||(x[13]=ke(P=>Dn(P,null),["prevent"])),onMousedown:On},[ct.value?(l(),c("div",{key:0,class:"fw-band",style:_t({left:ct.value.x+"px",top:ct.value.y+"px",width:ct.value.w+"px",height:ct.value.h+"px"})},null,4)):A("",!0),N.value==="details"?(l(),c("table",$2,[s("thead",null,[s("tr",null,[s("th",{class:te(["col-name",{active:a.value==="name"}]),style:_t(p("name")),onClick:x[4]||(x[4]=P=>W("name"))},[ue(i(o(e)("colName")),1),a.value==="name"?(l(),c("span",E2,i(r.value?"▲":"▼"),1)):A("",!0),s("span",{class:te(["fw-col-resize",{on:u.value==="name"}]),onMousedown:x[2]||(x[2]=ke(P=>w(P,"name"),["prevent","stop"])),onClick:x[3]||(x[3]=ke(()=>{},["stop"]))},null,34)],6),s("th",{class:te(["col-size",{active:a.value==="size"}]),style:_t(p("size")),onClick:x[7]||(x[7]=P=>W("size"))},[ue(i(o(e)("colSize")),1),a.value==="size"?(l(),c("span",D2,i(r.value?"▲":"▼"),1)):A("",!0),s("span",{class:te(["fw-col-resize",{on:u.value==="size"}]),onMousedown:x[5]||(x[5]=ke(P=>w(P,"size"),["prevent","stop"])),onClick:x[6]||(x[6]=ke(()=>{},["stop"]))},null,34)],6),s("th",{class:te(["col-type",{active:a.value==="type"}]),style:_t(p("type")),onClick:x[10]||(x[10]=P=>W("type"))},[ue(i(o(e)("colType")),1),a.value==="type"?(l(),c("span",T2,i(r.value?"▲":"▼"),1)):A("",!0),s("span",{class:te(["fw-col-resize",{on:u.value==="type"}]),onMousedown:x[8]||(x[8]=ke(P=>w(P,"type"),["prevent","stop"])),onClick:x[9]||(x[9]=ke(()=>{},["stop"]))},null,34)],6),s("th",{class:te(["col-mtime",{active:a.value==="mtime"}]),onClick:x[11]||(x[11]=P=>W("mtime"))},[ue(i(o(e)("colModified")),1),a.value==="mtime"?(l(),c("span",N2,i(r.value?"▲":"▼"),1)):A("",!0)],2)])]),s("tbody",null,[o(Q).range.value.padBefore?(l(),c("tr",F2,[s("td",{colspan:4,style:_t({height:o(Q).range.value.padBefore+"px"})},null,4)])):A("",!0),(l(!0),c(ie,null,Re(De.value,P=>(l(),c("tr",{key:P.path,class:te(["fw-row",{"is-dir":P.isDir,hidden:P.hidden,broken:P.broken,selected:zt(P)}]),"data-path":P.path,title:Ze(P),draggable:!n.value,onMouseenter:Fe=>ft(P),onMouseleave:Fe=>Ct(P),onDragstart:Fe=>En(Fe,P),onDragover:ke(Fe=>P.isDir&&(P.path,void 0),["prevent"]),onDrop:ke(Fe=>P.isDir&&Dn(Fe,P.path),["prevent","stop"]),onClick:Fe=>$(Fe,P),onDblclick:Fe=>q(Fe,P),onContextmenu:ke(Fe=>Dt(Fe,P),["prevent","stop"])},[s("td",A2,[s("span",R2,[s("span",M2,[m(oe,{name:P.isDir?"folder":"file",size:13},null,8,["name"])]),s("span",O2,i(ye(P)),1),_e(P)?(l(),c("span",{key:0,class:te(["fw-git-badge","st-"+_e(P)]),title:ot(P)},[m(oe,{name:"git",size:10}),ue(i(Ye(P)),1)],10,L2)):pe(P)?(l(),c("span",{key:1,class:te(["fw-git-badge","st-"+pe(P)]),title:qe(P)},[m(oe,{name:"svn",size:10}),ue(i(Ce(P)),1)],10,B2)):A("",!0),P.hidden?(l(),c("span",I2,"●")):A("",!0),P.broken?(l(),c("span",{key:3,class:"fw-broken-tag",title:o(e)("brokenLink")},"broken",8,j2)):A("",!0)])]),s("td",V2,i(je(P)),1),s("td",z2,i(J(P)),1),s("td",U2,i(Ke(P)),1)],42,P2))),128)),o(Q).range.value.padAfter?(l(),c("tr",H2,[s("td",{colspan:4,style:_t({height:o(Q).range.value.padAfter+"px"})},null,4)])):A("",!0),o(le).listing.inaccessible?(l(),c("tr",W2,[s("td",G2,i(o(le).listing.inaccessible),1)])):rt.value.length?A("",!0):(l(),c("tr",q2,[s("td",K2,i(yt.value),1)]))])])):N.value==="list"?(l(),c("div",{key:2,class:"fw-mode fw-list",style:_t({paddingTop:o(Q).range.value.padBefore+"px",paddingBottom:o(Q).range.value.padAfter+"px"})},[(l(!0),c(ie,null,Re(De.value,P=>(l(),c("div",{key:P.path,class:te(["fw-list-row",{"is-dir":P.isDir,hidden:P.hidden,broken:P.broken,selected:zt(P)}]),"data-path":P.path,title:Ze(P),draggable:!n.value,onMouseenter:Fe=>ft(P),onMouseleave:Fe=>Ct(P),onDragstart:Fe=>En(Fe,P),onDragover:ke(Fe=>P.isDir&&(P.path,void 0),["prevent"]),onDrop:ke(Fe=>P.isDir&&Dn(Fe,P.path),["prevent","stop"]),onClick:Fe=>$(Fe,P),onDblclick:Fe=>q(Fe,P),onContextmenu:ke(Fe=>Dt(Fe,P),["prevent","stop"])},[s("span",Y2,[m(oe,{name:P.isDir?"folder":"file",size:14},null,8,["name"])]),s("span",J2,i(ye(P)),1),_e(P)?(l(),c("span",{key:0,class:te(["fw-git-badge","st-"+_e(P)]),title:ot(P)},[m(oe,{name:"git",size:10}),ue(i(Ye(P)),1)],10,Q2)):pe(P)?(l(),c("span",{key:1,class:te(["fw-git-badge","st-"+pe(P)]),title:qe(P)},[m(oe,{name:"svn",size:10}),ue(i(Ce(P)),1)],10,Z2)):A("",!0),P.broken?(l(),c("span",{key:2,class:"fw-broken-tag",title:o(e)("brokenLink")},"broken",8,ek)):A("",!0)],42,X2))),128)),o(le).listing.inaccessible||!rt.value.length?(l(),c("div",{key:0,class:te(["fw-empty-cell",{"fw-inaccessible":!!o(le).listing.inaccessible}])},i(yt.value),3)):A("",!0)],4)):N.value==="grid"?(l(),c("div",{key:3,class:te(["fw-mode fw-grid","fw-grid-"+O.value])},[(l(!0),c(ie,null,Re(rt.value,P=>(l(),c("div",{key:P.path,class:te(["fw-tile",{"is-dir":P.isDir,hidden:P.hidden,selected:zt(P)}]),"data-path":P.path,title:Ze(P),draggable:!n.value,onMouseenter:Fe=>ft(P),onMouseleave:Fe=>Ct(P),onDragstart:Fe=>En(Fe,P),onDragover:ke(Fe=>P.isDir&&(P.path,void 0),["prevent"]),onDrop:ke(Fe=>P.isDir&&Dn(Fe,P.path),["prevent","stop"]),onClick:Fe=>$(Fe,P),onDblclick:Fe=>q(Fe,P),onContextmenu:ke(Fe=>Dt(Fe,P),["prevent","stop"])},[ee(P)?(l(),c("span",nk,[s("img",{src:o(Xr)(P.path),alt:P.name,loading:"lazy",draggable:"false"},null,8,ok)])):(l(),c("span",sk,[m(oe,{name:P.isDir?"folder":"file",size:j.value},null,8,["name","size"])])),s("span",ik,[ue(i(ye(P)),1),_e(P)?(l(),c("span",{key:0,class:te(["fw-git-badge","st-"+_e(P)]),title:ot(P)},[m(oe,{name:"git",size:10}),ue(i(Ye(P)),1)],10,ak)):pe(P)?(l(),c("span",{key:1,class:te(["fw-git-badge","st-"+pe(P)]),title:qe(P)},[m(oe,{name:"svn",size:10}),ue(i(Ce(P)),1)],10,lk)):A("",!0)])],42,tk))),128)),o(le).listing.inaccessible||!rt.value.length?(l(),c("div",{key:0,class:te(["fw-empty-cell",{"fw-inaccessible":!!o(le).listing.inaccessible}])},i(yt.value),3)):A("",!0)],2)):N.value==="content"?(l(),c("div",rk,[(l(!0),c(ie,null,Re(rt.value,P=>(l(),c("div",{key:P.path,class:te(["fw-content-row",{"is-dir":P.isDir,hidden:P.hidden,selected:zt(P)}]),"data-path":P.path,title:Ze(P),draggable:!n.value,onMouseenter:Fe=>ft(P),onMouseleave:Fe=>Ct(P),onDragstart:Fe=>En(Fe,P),onDragover:ke(Fe=>P.isDir&&(P.path,void 0),["prevent"]),onDrop:ke(Fe=>P.isDir&&Dn(Fe,P.path),["prevent","stop"]),onClick:Fe=>$(Fe,P),onDblclick:Fe=>q(Fe,P),onContextmenu:ke(Fe=>Dt(Fe,P),["prevent","stop"])},[s("span",uk,[m(oe,{name:P.isDir?"folder":"file",size:20},null,8,["name"])]),s("span",dk,[s("span",fk,[ue(i(ye(P)),1),P.broken?(l(),c("span",pk,"broken")):A("",!0)]),s("span",hk,i(o(e)("colType"))+": "+i(J(P)),1)]),s("span",vk,[s("span",null,i(o(e)("colModified"))+": "+i(Ke(P)),1),s("span",null,i(o(e)("colSize"))+": "+i(P.isDir?"":je(P)),1)])],42,ck))),128)),o(le).listing.inaccessible||!rt.value.length?(l(),c("div",{key:0,class:te(["fw-empty-cell",{"fw-inaccessible":!!o(le).listing.inaccessible}])},i(yt.value),3)):A("",!0)])):N.value==="tiles"?(l(),c("div",mk,[(l(!0),c(ie,null,Re(rt.value,P=>(l(),c("div",{key:P.path,class:te(["fw-tile2",{"is-dir":P.isDir,hidden:P.hidden,selected:zt(P)}]),"data-path":P.path,title:Ze(P),draggable:!n.value,onMouseenter:Fe=>ft(P),onMouseleave:Fe=>Ct(P),onDragstart:Fe=>En(Fe,P),onDragover:ke(Fe=>P.isDir&&(P.path,void 0),["prevent"]),onDrop:ke(Fe=>P.isDir&&Dn(Fe,P.path),["prevent","stop"]),onClick:Fe=>$(Fe,P),onDblclick:Fe=>q(Fe,P),onContextmenu:ke(Fe=>Dt(Fe,P),["prevent","stop"])},[ee(P)?(l(),c("span",yk,[s("img",{src:o(Xr)(P.path),alt:P.name,loading:"lazy",draggable:"false"},null,8,wk)])):(l(),c("span",bk,[m(oe,{name:P.isDir?"folder":"file",size:34},null,8,["name"])])),s("span",_k,[s("span",kk,i(ye(P)),1),s("span",xk,i(J(P)),1),s("span",Ck,i(P.isDir?"":je(P)),1)])],42,gk))),128)),o(le).listing.inaccessible||!rt.value.length?(l(),c("div",{key:0,class:te(["fw-empty-cell",{"fw-inaccessible":!!o(le).listing.inaccessible}])},i(yt.value),3)):A("",!0)])):A("",!0),o(le).listing.truncated?(l(),c("div",Sk,i(o(e)("resultsSuffixTruncated")),1)):A("",!0)],544)):A("",!0),o(le).loading?(l(),c("div",$k,[...x[24]||(x[24]=[s("div",{class:"fw-refreshing-spinner"},null,-1)])])):A("",!0),o(H)?(l(),Xe(Zt,{key:4,items:o(G),x:o(C),y:o(Z),onClose:x[14]||(x[14]=P=>H.value=!1)},null,8,["items","x","y"])):A("",!0),m(Oe,{modelValue:de.value,"onUpdate:modelValue":x[16]||(x[16]=P=>de.value=P),class:"fw-prop-dialog fw-clone-dialog",width:"420px","align-center":"","modal-class":"fw-blur-overlay","close-on-click-modal":!1},{header:se(()=>[s("div",Ek,[s("span",Dk,[m(oe,{name:I.value?.isDir?"folder":"file",size:20},null,8,["name"])]),s("span",Tk,[s("span",Nk,i(o(e)("menuProperties")),1),s("span",Fk,i(I.value?.name),1)])])]),footer:se(()=>[m(fe,{type:"primary",onClick:x[15]||(x[15]=P=>de.value=!1)},{default:se(()=>[ue(i(o(e)("confirmOk")),1)]),_:1})]),default:se(()=>[I.value?(l(),c("div",Pk,[s("div",Ak,[s("span",Rk,i(o(e)("propKind")),1),s("span",Mk,i(I.value.isDir?o(e)("typeFolder"):I.value.ext||o(e)("typeFile")),1)]),s("div",Ok,[s("span",Lk,i(o(e)("propSize")),1),s("span",Bk,i(je({isDir:I.value.isDir,size:I.value.size})),1)]),s("div",Ik,[s("span",jk,i(o(e)("propModified")),1),s("span",Vk,i(Ke({mtime:I.value.mtime})),1)]),s("div",zk,[s("span",Uk,i(o(e)("propPath")),1),s("span",{class:"v mono",title:I.value.path},i(I.value.path),9,Hk)])])):A("",!0)]),_:1},8,["modelValue"]),m(Oe,{modelValue:he.value,"onUpdate:modelValue":x[18]||(x[18]=P=>he.value=P),class:"fw-gitdiff-dialog",title:o(e)("gitDiffTitle"),width:"680px","close-on-click-modal":!1},{footer:se(()=>[m(fe,{type:"primary",onClick:x[17]||(x[17]=P=>he.value=!1)},{default:se(()=>[ue(i(o(e)("gitDiffClose")),1)]),_:1})]),default:se(()=>[s("pre",Wk,i(xe.value||o(e)("gitDiffEmpty")),1)]),_:1},8,["modelValue","title"]),m(Fd,{modelValue:ge.value,"onUpdate:modelValue":x[19]||(x[19]=P=>ge.value=P),dir:n.value?"":o(le).listing?.path??"",onDone:x[20]||(x[20]=P=>o(xo)(o(le).listing?.path??""))},null,8,["modelValue","dir"]),m(Rd,{modelValue:ne.value,"onUpdate:modelValue":x[21]||(x[21]=P=>ne.value=P),dir:n.value?"":o(le).listing?.path??""},null,8,["modelValue","dir"]),m(Md,{modelValue:ae.value,"onUpdate:modelValue":x[22]||(x[22]=P=>ae.value=P),dir:n.value?"":o(le).listing?.path??""},null,8,["modelValue","dir"]),m(g2,{modelValue:Ee.value,"onUpdate:modelValue":x[23]||(x[23]=P=>Ee.value=P),path:Ve.value,onSaved:Pe},null,8,["modelValue","path"])],32)}}}),Xk=xt(Kk,[["__scopeId","data-v-c2b328cc"]]),Yk={key:0,class:"fw-err"},Jk={class:"fw-tp-sec"},Qk={key:0,class:"fw-tp-grid"},Zk=["data-path","title","onClick","onDblclick","onContextmenu"],ex={class:"fw-drive-ico"},tx={class:"fw-drive-body"},nx={class:"fw-drive-name"},ox={class:"fw-drive-bar"},sx={class:"fw-drive-cap"},ix={key:0,class:"fw-tp-empty"},ax={key:1,class:"fw-tp-table"},lx={class:"col-name"},rx={class:"col-type"},cx={class:"col-total"},ux={class:"col-free"},dx={class:"col-fs"},fx=["data-path","title","onClick","onDblclick","onContextmenu"],px={class:"col-name"},hx={class:"fw-tp-n"},vx={class:"fw-tp-ico"},mx={class:"fw-tp-label"},gx={class:"col-type"},yx={class:"col-total"},wx={class:"col-free"},bx={class:"col-fs"},_x={key:0},kx={colspan:5,class:"fw-tp-empty-cell"},xx={key:2,class:"fw-tp-loading"},Cx={key:0,class:"fw-prop-body"},Sx={class:"fw-prop-row"},$x={class:"k"},Ex={class:"v"},Dx={class:"fw-prop-row"},Tx={class:"k"},Nx={class:"v"},Fx={class:"fw-prop-row"},Px={class:"k"},Ax={class:"v"},Rx={class:"fw-prop-row"},Mx={class:"k"},Ox={class:"v"},Lx={class:"fw-prop-row"},Bx={class:"k"},Ix={class:"v"},jx={class:"fw-prop-row"},Vx={class:"k"},zx={class:"v"},Ux={class:"fw-prop-row"},Hx={class:"k"},Wx={class:"v"},Gx={class:"fw-prop-bar"},Dc="computer",qx=vt({__name:"ThisPcPane",setup(t){const{t:e}=Mt(),n=["huge","large","medium","small"],a=B(()=>wl(Dc)),r=B(()=>n.includes(a.value)),u=B(()=>a.value==="huge"?52:a.value==="large"?44:a.value==="medium"?36:20);Do(()=>Ji.value=a.value);const h=g(null),d=B(()=>{const W=[...le.drives],J=h.value;return J&&W.sort((z,ee)=>J==="size"?(ee.total??-1)-(z.total??-1):J==="free"?(ee.free??-1)-(z.free??-1):J==="type"?Number(z.removable)-Number(ee.removable)||Uo(z).localeCompare(Uo(ee),void 0,{sensitivity:"base"}):Uo(z).localeCompare(Uo(ee),void 0,{sensitivity:"base"})),W});function p(W){if(W===void 0||!Number.isFinite(W))return"—";const J=["B","KB","MB","GB","TB","PB"];let z=W,ee=0;for(;z>=1024&&ee<J.length-1;)z/=1024,ee+=1;return`${ee>0&&z<100?z.toFixed(1):Math.round(z)} ${J[ee]}`}function w(W){if(!(W.total===void 0||W.free===void 0))return Math.max(0,W.total-W.free)}function b(W){const J=w(W);return J===void 0||!W.total?"0%":`${Math.min(100,Math.max(0,J/W.total*100)).toFixed(1)}%`}function _(W){return e("driveCapacity",{free:p(W.free),total:p(W.total)})}const M=g(""),O=g(null);function N(W){M.value=W.path}function j(W){O.value?.focus({preventScroll:!0}),!W.target.closest(".fw-drive, .fw-tp-row, th")&&(M.value="")}function H(W){M.value=W.path,Vt(W.path)}function C(W){const J=d.value;if(!J.length)return;if(W.key==="F5"){W.preventDefault(),Nt();return}if(W.key==="Enter"&&M.value){const ye=J.find(je=>je.path===M.value);ye&&(W.preventDefault(),H(ye));return}if(W.key!=="ArrowDown"&&W.key!=="ArrowUp"&&W.key!=="Home"&&W.key!=="End")return;W.preventDefault();const z=J.findIndex(ye=>ye.path===M.value),ee=W.key==="Home"?0:W.key==="End"?J.length-1:W.key==="ArrowDown"?Math.min(J.length-1,z+1):Math.max(0,z<0?0:z-1);M.value=J[ee]?.path??""}function Z(W){bl(Dc,W)}Do(()=>{Ft.visible=!0,Ft.canSwitchView=!0,Ft.total=d.value.length,Ft.selected=M.value?1:0,Ft.text="",Ft.view=a.value}),cn(()=>aa(W=>Z(W))),At(()=>{aa(null),Ed()});const{cmOpen:G,cmX:F,cmY:de,cmItems:I,openMenu:he}=hn();function xe(W,J){M.value=J.path;const z=ps(J.path);he(W,[{label:e("menuOpen"),icon:"arrowRight",onClick:()=>H(J)},{label:e("menuOpenInEditor"),icon:"code",onClick:()=>gr(J.path)},{separator:!0},{label:e(z?"favoriteRemove":"favoriteAdd"),icon:"star",onClick:()=>{const ee=Qi(J.path);Y("ok",e(ee?"favoriteAdded":"favoriteRemoved"))}},{label:e("menuCopyPath"),icon:"link",onClick:()=>void Pe(J.path)},{separator:!0},{label:e("menuProperties"),icon:"info",onClick:()=>be(J)}])}function ge(W){he(W,[{label:e("menuRefresh"),icon:"refresh",onClick:()=>void Nt()},{separator:!0},{label:e("menuView"),icon:"eye",children:ne()},{label:e("menuSort"),icon:"sort",children:ae()}])}function ne(){const W=(J,z)=>({label:J,checked:a.value===z,onClick:()=>Z(z)});return[W(e("viewHuge"),"huge"),W(e("viewLarge"),"large"),W(e("viewMedium"),"medium"),W(e("viewSmall"),"small"),{separator:!0},W(e("viewList"),"list"),{separator:!0},W(e("viewDetails"),"details"),W(e("viewContent"),"content"),W(e("viewTiles"),"tiles")]}function ae(){return[["name",e("sortName")],["size",e("driveTotal")],["free",e("driveFree")],["type",e("sortType")]].map(([J,z])=>({label:z,checked:h.value===J,onClick:()=>{h.value=J}}))}const Ee=g(!1),Ve=g(null);function be(W){Ve.value=W,Ee.value=!0}async function Pe(W){try{await navigator.clipboard.writeText(W),Y("ok",e("menuPathCopied"))}catch{Y("error",e("menuPathCopyFail"))}}return la((W,J)=>{switch(W){case"view":J&&n.concat(["list","details","content","tiles"]).includes(J)&&Z(J);break;case"sort":(J==="name"||J==="size"||J==="free"||J==="type")&&(h.value=J);break;case"refresh":Nt();break;case"properties":{const z=d.value.find(ee=>ee.path===M.value);z&&be(z);break}}}),At(()=>la(null)),Do(()=>{vn.selectionCount=M.value?1:0,vn.canOperate=!1,vn.hasClipboard=Al(),vn.isRecycle=!1}),(W,J)=>{const z=Mn,ee=un;return l(),c("div",{class:"fw-tp",onKeydown:C},[o(le).drivesErr?(l(),c("div",Yk,i(o(le).drivesErr),1)):(l(),c("div",{key:1,ref_key:"wrapRef",ref:O,class:te(["fw-tp-wrap","fw-tp-"+a.value]),tabindex:"0",onClick:j,onContextmenu:ke(ge,["prevent"])},[s("div",Jk,i(o(e)("thisPcDevices"))+" ("+i(d.value.length)+")",1),r.value?(l(),c("div",Qk,[(l(!0),c(ie,null,Re(d.value,ye=>(l(),c("div",{key:ye.path,class:te(["fw-drive",{selected:ye.path===M.value,removable:ye.removable}]),"data-path":ye.path,title:ye.path,onClick:je=>N(ye),onDblclick:je=>H(ye),onContextmenu:ke(je=>xe(je,ye),["prevent","stop"])},[s("span",ex,[m(oe,{name:"hardDrive",size:u.value},null,8,["size"])]),s("span",tx,[s("span",nx,i(o(Uo)(ye)),1),s("span",ox,[s("span",{class:"fw-drive-fill",style:_t({width:b(ye)})},null,4)]),s("span",sx,i(_(ye)),1)])],42,Zk))),128)),!d.value.length&&!o(le).drivesLoading?(l(),c("div",ix,i(o(e)("emptyDrives")),1)):A("",!0)])):(l(),c("table",ax,[s("thead",null,[s("tr",null,[s("th",lx,i(o(e)("colName")),1),s("th",rx,i(o(e)("colType")),1),s("th",cx,i(o(e)("driveTotal")),1),s("th",ux,i(o(e)("driveFree")),1),s("th",dx,i(o(e)("driveFs")),1)])]),s("tbody",null,[(l(!0),c(ie,null,Re(d.value,ye=>(l(),c("tr",{key:ye.path,class:te(["fw-tp-row",{selected:ye.path===M.value}]),"data-path":ye.path,title:ye.path,onClick:je=>N(ye),onDblclick:je=>H(ye),onContextmenu:ke(je=>xe(je,ye),["prevent","stop"])},[s("td",px,[s("span",hx,[s("span",vx,[m(oe,{name:"hardDrive",size:16})]),s("span",mx,i(o(Uo)(ye)),1)])]),s("td",gx,i(ye.removable?o(e)("driveTypeRemovable"):o(e)("driveTypeFixed")),1),s("td",yx,i(p(ye.total)),1),s("td",wx,i(p(ye.free)),1),s("td",bx,i(ye.fsType||"—"),1)],42,fx))),128)),d.value.length?A("",!0):(l(),c("tr",_x,[s("td",kx,i(o(e)("emptyDrives")),1)]))])]))],34)),o(le).drivesLoading?(l(),c("div",xx,[...J[3]||(J[3]=[s("div",{class:"fw-tp-spinner"},null,-1)])])):A("",!0),o(G)?(l(),Xe(Zt,{key:3,items:o(I),x:o(F),y:o(de),onClose:J[0]||(J[0]=ye=>G.value=!1)},null,8,["items","x","y"])):A("",!0),m(ee,{modelValue:Ee.value,"onUpdate:modelValue":J[2]||(J[2]=ye=>Ee.value=ye),class:"fw-prop-dialog",title:o(e)("menuProperties"),width:"420px","close-on-click-modal":!1},{footer:se(()=>[m(z,{type:"primary",onClick:J[1]||(J[1]=ye=>Ee.value=!1)},{default:se(()=>[ue(i(o(e)("confirmOk")),1)]),_:1})]),default:se(()=>[Ve.value?(l(),c("div",Cx,[s("div",Sx,[s("span",$x,i(o(e)("propName")),1),s("span",Ex,i(Ve.value.name),1)]),s("div",Dx,[s("span",Tx,i(o(e)("propPath")),1),s("span",Nx,i(Ve.value.path),1)]),s("div",Fx,[s("span",Px,i(o(e)("propKind")),1),s("span",Ax,i(Ve.value.removable?o(e)("driveTypeRemovable"):o(e)("driveTypeFixed")),1)]),s("div",Rx,[s("span",Mx,i(o(e)("driveFs")),1),s("span",Ox,i(Ve.value.fsType||"—"),1)]),s("div",Lx,[s("span",Bx,i(o(e)("propSize")),1),s("span",Ix,i(p(w(Ve.value))),1)]),s("div",jx,[s("span",Vx,i(o(e)("driveFree")),1),s("span",zx,i(p(Ve.value.free)),1)]),s("div",Ux,[s("span",Hx,i(o(e)("driveTotal")),1),s("span",Wx,i(p(Ve.value.total)),1)]),s("div",Gx,[s("span",{class:"fw-prop-fill",style:_t({width:b(Ve.value)})},null,4)])])):A("",!0)]),_:1},8,["modelValue","title"])],32)}}}),Kx=xt(qx,[["__scopeId","data-v-5d2b5f89"]]),Xx=["title"],Yx=["disabled","title"],Jx=["disabled","title"],Qx=["disabled","title"],Zx=["title"],eC=["title"],tC={class:"fw-pmenu-check"},nC=["title"],oC={class:"fw-pmenu-check"},sC={class:"fw-pmenu-check"},iC=["disabled","title"],aC=["disabled","title"],lC=["disabled","title"],rC=["disabled","title"],cC=["disabled","title"],uC=["disabled","title"],dC=["title"],fC={class:"fw-pmenu-check"},pC=["title"],hC={class:"fw-pmenu-check"},vC={class:"fw-pmenu-check"},mC=["disabled","title"],gC=vt({__name:"CommandBar",props:{navFolded:{type:Boolean},compact:{type:Boolean}},emits:["unfold-nav"],setup(t){const{t:e}=Mt(),n=B(()=>vn.isRecycle||!vn.canOperate),a=B(()=>vn.selectionCount>0),r=B(()=>(le.recycleItems?.length??0)>0),u=B(()=>[["name",e("sortName")],["mtime",e("sortModified")],["type",e("sortType")],["size",e("sortSize")]]),h=B(()=>[["huge",e("viewHuge")],["large",e("viewLarge")],["medium",e("viewMedium")],["small",e("viewSmall")],["list",e("viewList")],["details",e("viewDetails")],["content",e("viewContent")],["tiles",e("viewTiles")]]);function d(w,b){if(w==="newSshHost"){Ku();return}if(w==="openTerminal"){Es(le.listing?.path??"");return}if(w==="cloneGit"||w==="cloneSvn"){$r({kind:w==="cloneGit"?"git":"svn",dir:le.listing?.path??"",key:Ne.key,onDone:({path:_})=>{Vt(_)}});return}k2(w,b)}function p(w){w==="toggleExt"?d("toggleExt"):d("view",w)}return(w,b)=>{const _=Wf,M=Hf,O=Uf;return l(),c("div",{class:te(["fw-cmdbar",{"is-compact":t.compact}])},[t.navFolded?(l(),c("button",{key:0,class:"fw-cb-btn fw-cb-navtoggle",title:o(e)("expShowNav"),onClick:b[0]||(b[0]=N=>w.$emit("unfold-nav"))},[m(oe,{class:"fw-cb-hamburger",name:"viewList",size:13}),ue(i(o(e)("expShowNav")),1)],8,Xx)):A("",!0),o(vn).isRecycle?(l(),c(ie,{key:1},[s("button",{class:"fw-cb-btn",disabled:!a.value,title:o(e)("recycleRestore"),onClick:b[1]||(b[1]=N=>d("restore"))},[m(oe,{name:"undo",size:13}),ue(i(o(e)("recycleRestore")),1)],8,Yx),s("button",{class:"fw-cb-btn",disabled:!a.value,title:o(e)("recycleDelete"),onClick:b[2]||(b[2]=N=>d("delete"))},[m(oe,{name:"trash",size:13}),ue(i(o(e)("recycleDelete")),1)],8,Jx),s("button",{class:"fw-cb-btn",disabled:!r.value,title:o(e)("recycleEmpty"),onClick:b[3]||(b[3]=N=>d("emptyRecycle"))},[m(oe,{name:"close",size:13}),ue(i(o(e)("recycleEmpty")),1)],8,Qx),s("button",{class:"fw-cb-btn",title:o(e)("menuRefresh"),onClick:b[4]||(b[4]=N=>d("refresh"))},[m(oe,{name:"refresh",size:13}),ue(i(o(e)("menuRefresh")),1)],8,Zx),b[18]||(b[18]=s("span",{class:"fw-cb-sep"},null,-1)),m(O,{trigger:"click",teleported:!1,"popper-class":"fw-panelmenu-popper",onCommand:b[5]||(b[5]=N=>d("sort",String(N)))},{dropdown:se(()=>[m(M,{class:"fw-panelmenu"},{default:se(()=>[(l(!0),c(ie,null,Re(u.value,N=>(l(),Xe(_,{key:N[0],command:N[0],class:"fw-panelitem"},{default:se(()=>[s("span",tC,i(o(Ue).sortKey===N[0]?"✓":""),1),ue(i(N[1]),1)]),_:2},1032,["command"]))),128))]),_:1})]),default:se(()=>[s("button",{class:"fw-cb-btn",title:o(e)("menuSort")},[m(oe,{name:"sort",size:13}),ue(i(o(e)("menuSort"))+" ",1),b[16]||(b[16]=s("span",{class:"caret"},"▾",-1))],8,eC)]),_:1}),m(O,{trigger:"click",teleported:!1,"popper-class":"fw-panelmenu-popper",onCommand:b[6]||(b[6]=N=>p(String(N)))},{dropdown:se(()=>[m(M,{class:"fw-panelmenu"},{default:se(()=>[(l(!0),c(ie,null,Re(h.value,N=>(l(),Xe(_,{key:N[0],command:N[0],class:"fw-panelitem"},{default:se(()=>[s("span",oC,i(o(Ji)===N[0]?"✓":""),1),ue(i(N[1]),1)]),_:2},1032,["command"]))),128)),m(_,{divided:"",command:"toggleExt",class:"fw-panelitem"},{default:se(()=>[s("span",sC,i(o(Ue).showExtensions?"✓":""),1),ue(i(o(e)("showExtensions")),1)]),_:1})]),_:1})]),default:se(()=>[s("button",{class:"fw-cb-btn",title:o(e)("menuView")},[m(oe,{name:"viewDetails",size:13}),ue(i(o(e)("menuView"))+" ",1),b[17]||(b[17]=s("span",{class:"caret"},"▾",-1))],8,nC)]),_:1})],64)):(l(),c(ie,{key:2},[m(O,{trigger:"click",teleported:!1,"popper-class":"fw-panelmenu-popper",onCommand:b[7]||(b[7]=N=>d(String(N)))},{dropdown:se(()=>[m(M,{class:"fw-panelmenu"},{default:se(()=>[m(_,{command:"newFolder",class:"fw-panelitem"},{default:se(()=>[ue(i(o(e)("menuNewFolder")),1)]),_:1}),m(_,{command:"newFile",class:"fw-panelitem"},{default:se(()=>[ue(i(o(e)("menuNewFile")),1)]),_:1}),m(_,{command:"upload",class:"fw-panelitem"},{default:se(()=>[ue(i(o(e)("menuUpload")),1)]),_:1}),m(_,{command:"cloneGit",class:"fw-panelitem"},{default:se(()=>[ue(i(o(e)("menuCloneGit")),1)]),_:1}),m(_,{command:"cloneSvn",class:"fw-panelitem"},{default:se(()=>[ue(i(o(e)("menuCloneSvn")),1)]),_:1}),m(_,{divided:"",command:"newSshHost",class:"fw-panelitem"},{default:se(()=>[ue(i(o(e)("sshNewHost")),1)]),_:1}),m(_,{command:"openTerminal",class:"fw-panelitem"},{default:se(()=>[ue(i(o(e)("terminalNew")),1)]),_:1})]),_:1})]),default:se(()=>[s("button",{class:"fw-cb-btn",disabled:n.value,title:o(e)("menuNew")},[m(oe,{name:"plus",size:13}),ue(i(o(e)("menuNew"))+" ",1),b[19]||(b[19]=s("span",{class:"caret"},"▾",-1))],8,iC)]),_:1}),s("button",{class:"fw-cb-btn",disabled:!a.value,title:o(e)("menuCut"),onClick:b[8]||(b[8]=N=>d("cut"))},[m(oe,{name:"cut",size:13}),ue(i(o(e)("menuCut")),1)],8,aC),s("button",{class:"fw-cb-btn",disabled:!a.value,title:o(e)("menuCopy"),onClick:b[9]||(b[9]=N=>d("copy"))},[m(oe,{name:"copy",size:13}),ue(i(o(e)("menuCopy")),1)],8,lC),s("button",{class:"fw-cb-btn",disabled:o(vn).hasClipboard||n.value,title:o(e)("menuPaste"),onClick:b[10]||(b[10]=N=>d("paste"))},[m(oe,{name:"paste",size:13}),ue(i(o(e)("menuPaste")),1)],8,rC),s("button",{class:"fw-cb-btn",disabled:o(vn).selectionCount!==1||n.value,title:o(e)("menuRename"),onClick:b[11]||(b[11]=N=>d("rename"))},[m(oe,{name:"edit",size:13}),ue(i(o(e)("menuRename")),1)],8,cC),s("button",{class:"fw-cb-btn",disabled:!a.value||n.value,title:o(e)("menuDelete"),onClick:b[12]||(b[12]=N=>d("delete"))},[m(oe,{name:"trash",size:13}),ue(i(o(e)("menuDelete")),1)],8,uC),b[22]||(b[22]=s("span",{class:"fw-cb-sep"},null,-1)),m(O,{trigger:"click",teleported:!1,"popper-class":"fw-panelmenu-popper",onCommand:b[13]||(b[13]=N=>d("sort",String(N)))},{dropdown:se(()=>[m(M,{class:"fw-panelmenu"},{default:se(()=>[(l(!0),c(ie,null,Re(u.value,N=>(l(),Xe(_,{key:N[0],command:N[0],class:"fw-panelitem"},{default:se(()=>[s("span",fC,i(o(Ue).sortKey===N[0]?"✓":""),1),ue(i(N[1]),1)]),_:2},1032,["command"]))),128))]),_:1})]),default:se(()=>[s("button",{class:"fw-cb-btn",title:o(e)("menuSort")},[m(oe,{name:"sort",size:13}),ue(i(o(e)("menuSort"))+" ",1),b[20]||(b[20]=s("span",{class:"caret"},"▾",-1))],8,dC)]),_:1}),m(O,{trigger:"click",teleported:!1,"popper-class":"fw-panelmenu-popper",onCommand:b[14]||(b[14]=N=>p(String(N)))},{dropdown:se(()=>[m(M,{class:"fw-panelmenu"},{default:se(()=>[(l(!0),c(ie,null,Re(h.value,N=>(l(),Xe(_,{key:N[0],command:N[0],class:"fw-panelitem"},{default:se(()=>[s("span",hC,i(o(Ji)===N[0]?"✓":""),1),ue(i(N[1]),1)]),_:2},1032,["command"]))),128)),m(_,{divided:"",command:"toggleExt",class:"fw-panelitem"},{default:se(()=>[s("span",vC,i(o(Ue).showExtensions?"✓":""),1),ue(i(o(e)("showExtensions")),1)]),_:1})]),_:1})]),default:se(()=>[s("button",{class:"fw-cb-btn",title:o(e)("menuView")},[m(oe,{name:"viewDetails",size:13}),ue(i(o(e)("menuView"))+" ",1),b[21]||(b[21]=s("span",{class:"caret"},"▾",-1))],8,pC)]),_:1}),b[23]||(b[23]=s("span",{class:"fw-cb-flex"},null,-1)),s("button",{class:"fw-cb-btn",disabled:!a.value,title:o(e)("cmdPreview"),onClick:b[15]||(b[15]=N=>d("preview"))},[m(oe,{name:"eye",size:13}),ue(i(o(e)("cmdPreview")),1)],8,mC)],64))],2)}}}),yC=xt(gC,[["__scopeId","data-v-940d1c90"]]),wC=["title"],bC={key:0,class:"fw-bg-task-badge"},_C={class:"fw-bg-task-head"},kC={class:"fw-bg-task-title"},xC={class:"fw-bg-task-headacts"},CC=["disabled"],SC=["disabled"],$C=["disabled"],EC=["title"],DC={key:0,class:"fw-bg-task-group"},TC={class:"fw-bg-task-grouplbl"},NC=["onClick"],FC={class:"fw-bg-task-label"},PC={key:0,class:"fw-bg-task-detail"},AC={class:"fw-bg-task-see"},RC={key:1,class:"fw-bg-task-group"},MC={class:"fw-bg-task-grouplbl"},OC=["onClick"],LC={class:"fw-bg-task-ico"},BC={class:"fw-bg-task-label"},IC={key:0,class:"fw-bg-task-detail"},jC={class:"fw-bg-task-see"},VC={key:2,class:"fw-bg-task-empty"},zC={class:"fw-dlg-head"},UC={class:"fw-dlg-badge"},HC={class:"fw-dlg-headtext"},WC={class:"fw-dlg-headtitle"},GC={class:"fw-dlg-headsub"},qC={class:"fw-tlog-head"},KC={class:"fw-tlog-name"},XC={key:0,class:"fw-tlog-fileitem"},YC={class:"fw-tlog-k"},JC=["title"],QC={class:"fw-tlog-meta"},ZC={key:0},eS={key:1},tS={key:2},nS={class:"fw-tlog-timeline"},oS={class:"fw-tlog-rail"},sS={key:0,class:"fw-tlog-line"},iS={class:"fw-tlog-ct"},aS={class:"fw-tlog-brow"},lS={class:"fw-tlog-time"},rS={class:"fw-tlog-dur-tip"},cS={class:"fw-tlog-btext"},uS={key:0,class:"fw-tlog-bnote"},dS={class:"fw-dlg-head"},fS={class:"fw-dlg-badge"},pS={class:"fw-dlg-headtext"},hS={class:"fw-dlg-headtitle"},vS={class:"fw-dlg-headsub"},mS={class:"fw-taskarc"},gS={class:"fw-taskarc-dates"},yS=["onClick"],wS={class:"fw-taskarc-cnt"},bS={class:"fw-taskarc-records"},_S={key:0,class:"fw-taskarc-none"},kS=["onClick"],xS={class:"fw-taskarc-ico"},CS={class:"fw-taskarc-label"},SS={key:0,class:"fw-taskarc-recdetail"},$S={class:"fw-taskarc-time"},ES={class:"fw-taskarc-detail"},DS={key:0,class:"fw-taskarc-none"},TS={class:"fw-tlog-head"},NS={class:"fw-tlog-name"},FS={key:0,class:"fw-tlog-fileitem"},PS={class:"fw-tlog-k"},AS=["title"],RS={class:"fw-tlog-meta"},MS={key:0},OS={key:1},LS={key:2},BS={class:"fw-tlog-timeline"},IS={class:"fw-tlog-rail"},jS={key:0,class:"fw-tlog-line"},VS={class:"fw-tlog-ct"},zS={class:"fw-tlog-brow"},US={class:"fw-tlog-time"},HS={class:"fw-tlog-dur-tip"},WS={class:"fw-tlog-btext"},GS={key:0,class:"fw-tlog-bnote"},Za=340,Tc=11,Is=8,qS=vt({__name:"BgTaskPanel",setup(t){const{t:e}=Mt(),n=B(()=>Kn.open.value),a=B(()=>Kn.state.list),r=B(()=>Kn.state.history),u=B(()=>a.value.filter(pe=>pe.status==="running")),h=B(()=>u.value.length),d=B(()=>r.value.length>0),p=g(null),w=g(!1),b=g(null),_=gt({width:Za,left:0,bottom:0,maxH:360,arrow:Za/2}),M=B(()=>({width:`${_.width}px`,left:`${_.left}px`,bottom:`${_.bottom}px`})),O=B(()=>({maxHeight:`${_.maxH}px`})),N=B(()=>({left:`${_.arrow}px`}));function j(){const pe=b.value;if(!pe)return;const Ce=pe.getBoundingClientRect(),qe=window.innerWidth,ce=window.innerHeight,Ie=Ce.left+Ce.width/2,rt=Math.min(Za,Math.max(qe-Is*2,200)),yt=Math.max(qe-rt-Is,Is),ut=Ie<qe/2?Ce.left-2:Ie-rt/2,it=Math.min(Math.max(ut,Is),yt);_.width=Math.round(rt),_.left=Math.round(it),_.bottom=Math.round(ce-Ce.top+Tc),_.maxH=Math.max(140,Math.min(Ce.top-Tc-Is,Math.round(ce*.6))),_.arrow=Math.round(Math.min(Math.max(Ie-it,16),rt-16))}Je(n,pe=>{pe&&(j(),Tt(j))});const H=g(!1),C=g(null),Z=B(()=>Kn.state.archives),G=B(()=>Object.keys(Z.value).sort((pe,Ce)=>pe<Ce?1:-1).map(pe=>({date:pe,count:Z.value[pe].length}))),F=B(()=>{const pe=C.value;return[...pe&&Z.value[pe]?Z.value[pe]:[]].sort((qe,ce)=>(ce.doneAt??ce.startedAt)-(qe.doneAt??qe.startedAt))});function de(){G.value.length&&(C.value=G.value[0].date,H.value=!0)}function I(pe){Kn.setOpen(pe)}function he(){Kn.clearFinished()}function xe(){Kn.clearAll()}function ge(pe){const Ce=pe.logs,qe=Ce&&Ce.length?Ce:[{time:pe.startedAt,status:"running",msg:pe.label,file:pe.detail},{time:pe.doneAt??Date.now(),status:pe.status,msg:pe.msg??"",file:pe.detail}];p.value={label:pe.label,fileTarget:pe.detail,status:pe.status,startedAt:pe.startedAt,doneAt:pe.doneAt,msg:pe.msg,logs:qe},w.value=!0}function ne(pe,Ce){let qe=Ce;return pe.map(ce=>{const Ie=ce.time-qe>0?ce.time-qe:0;return qe=ce.time,{time:ce.time,status:ce.status,title:ce.msg,file:ce.file,detail:ce.detail,durMs:Ie}})}function ae(pe){let Ce=0,qe=0;const ce=new Set;for(const Ie of pe)Ie.fileType&&(ce.add(Ie.fileType),Ce+=1,Ie.fileSize!==void 0&&(qe+=Ie.fileSize));return{count:Ce,size:qe,types:[...ce]}}const Ee=B(()=>p.value?ae(p.value.logs):{count:0,size:0,types:[]}),Ve=B(()=>J.value?ae(W(J.value)):{count:0,size:0,types:[]}),be=B(()=>p.value?ne(p.value.logs,p.value.startedAt):[]),Pe=B(()=>{const pe=p.value;if(!pe)return null;if(pe.doneAt)return pe.doneAt-pe.startedAt;const Ce=be.value[be.value.length-1];return Ce?Ce.time-pe.startedAt:0});function W(pe){return pe.logs&&pe.logs.length?pe.logs:[{time:pe.startedAt,status:"running",msg:pe.label,file:pe.detail},{time:pe.doneAt??Date.now(),status:pe.status,msg:pe.msg??"",file:pe.detail}]}const J=g(null),z=B(()=>J.value?ne(W(J.value),J.value.startedAt):[]),ee=B(()=>{const pe=J.value;if(!pe)return null;if(pe.doneAt)return pe.doneAt-pe.startedAt;const Ce=z.value[z.value.length-1];return Ce?Ce.time-pe.startedAt:0});function ye(){J.value=null}function je(pe){J.value=pe}function Ke(pe){const Ce=new Date(pe),qe=ce=>String(ce).padStart(2,"0");return`${qe(Ce.getHours())}:${qe(Ce.getMinutes())}:${qe(Ce.getSeconds())}`}function Ze(pe){const Ce=new Date(pe),qe=ce=>String(ce).padStart(2,"0");return`${Ce.getFullYear()}-${qe(Ce.getMonth()+1)}-${qe(Ce.getDate())} ${Ke(pe)}`}function we(pe){if(pe==null)return"—";if(pe<0&&(pe=0),pe<1e3)return`${pe}ms`;const Ce=pe/1e3;if(Ce<60)return`${Ce.toFixed(1)}s`;const qe=Math.floor(Ce/60),ce=Math.round(Ce-qe*60);return`${qe}m ${String(ce).padStart(2,"0")}s`}function _e(pe){return e(pe==="done"?"taskStatusDone":pe==="error"?"taskStatusError":"taskStatusRunning")}function Ye(pe){let Ce=pe.title??"";return pe.file&&(Ce=Ce?`${Ce}：${pe.file}`:pe.file),Ce}cn(()=>{Kn.initTaskLogs(),document.addEventListener("mousedown",ot),window.addEventListener("resize",j),window.addEventListener("scroll",j,!0)}),At(()=>{document.removeEventListener("mousedown",ot),window.removeEventListener("resize",j),window.removeEventListener("scroll",j,!0)});function ot(pe){pe.target?.closest?.(".fw-bg-task-fab, .fw-bg-task-panel")||Kn.setOpen(!1)}return(pe,Ce)=>{const qe=un;return l(),c(ie,null,[s("button",{ref_key:"fabRef",ref:b,class:te(["fw-bg-task-fab",{active:n.value}]),title:o(e)("taskFabTitle"),onClick:Ce[0]||(Ce[0]=ce=>I(!n.value))},[m(oe,{name:"tasks",size:14}),h.value?(l(),c("span",bC,i(h.value),1)):A("",!0)],10,wC),m(Lf,{name:"fw-bg-task-pop"},{default:se(()=>[n.value?(l(),c("div",{key:0,class:"fw-bg-task-wrap",style:_t(M.value)},[s("div",{class:"fw-bg-task-panel",style:_t(O.value)},[s("div",_C,[s("span",kC,i(o(e)("taskPanelTitle")),1),s("div",xC,[s("button",{class:"fw-bg-task-link",disabled:!G.value.length,onClick:de},i(o(e)("taskArchiveOpen")),9,CC),s("button",{class:"fw-bg-task-link",disabled:!d.value,onClick:he},i(o(e)("taskClearFinished")),9,SC),s("button",{class:"fw-bg-task-link",disabled:!a.value.length,onClick:xe},i(o(e)("taskClearAll")),9,$C),s("button",{class:"fw-bg-task-close",title:o(e)("taskClose"),onClick:Ce[1]||(Ce[1]=ce=>I(!1))},"✕",8,EC)])]),u.value.length?(l(),c("div",DC,[s("div",TC,i(o(e)("taskRunning")),1),(l(!0),c(ie,null,Re(u.value,ce=>(l(),c("div",{key:ce.id,class:"fw-bg-task-row",onClick:Ie=>ge(ce)},[Ce[4]||(Ce[4]=s("span",{class:"fw-bg-task-spin"},null,-1)),s("span",FC,i(ce.label),1),ce.detail?(l(),c("span",PC,i(ce.detail),1)):A("",!0),s("span",AC,i(o(e)("taskViewLog")),1)],8,NC))),128))])):A("",!0),r.value.length?(l(),c("div",RC,[s("div",MC,i(o(e)("taskHistory")),1),(l(!0),c(ie,null,Re(r.value,(ce,Ie)=>(l(),c("div",{key:ce.startedAt+"-"+Ie,class:te(["fw-bg-task-row",ce.status]),onClick:rt=>ge(ce)},[s("span",LC,[m(oe,{name:ce.status==="done"?"check":"close",size:13},null,8,["name"])]),s("span",BC,i(ce.label),1),ce.detail?(l(),c("span",IC,i(ce.detail),1)):A("",!0),s("span",jC,i(o(e)("taskViewLog")),1)],10,OC))),128))])):A("",!0),!u.value.length&&!r.value.length?(l(),c("div",VC,i(o(e)("taskEmpty")),1)):A("",!0)],4),s("span",{class:"fw-bg-task-arrow",style:_t(N.value)},null,4)],4)):A("",!0)]),_:1}),m(qe,{modelValue:w.value,"onUpdate:modelValue":Ce[2]||(Ce[2]=ce=>w.value=ce),class:"fw-clone-dialog fw-tasklog-dialog",width:"580px","align-center":"","modal-class":"fw-blur-overlay","close-on-click-modal":!1,"modal-append-to-body":!1,"append-to-body":!1},{header:se(()=>[s("div",zC,[s("span",UC,[m(oe,{name:"tasks",size:20})]),s("span",HC,[s("span",WC,i(o(e)("taskLogTitle")),1),s("span",GC,i(p.value?.label),1)])])]),default:se(()=>[p.value?(l(),c(ie,{key:0},[s("div",qC,[s("div",KC,i(p.value.label),1),p.value.fileTarget?(l(),c("div",XC,[s("span",YC,i(o(e)("taskFieldTarget")),1),s("span",{class:"fw-tlog-path",title:p.value.fileTarget},i(p.value.fileTarget),9,JC)])):A("",!0),s("div",QC,[s("span",{class:te(["fw-tlog-st-head",p.value.status])},i(_e(p.value.status)),3),s("span",null,i(o(e)("taskStartTime"))+" "+i(Ze(p.value.startedAt)),1),p.value.doneAt?(l(),c("span",ZC,i(o(e)("taskEndTime"))+" "+i(Ze(p.value.doneAt)),1)):A("",!0),s("span",null,i(o(e)("taskTotalSpent"))+" "+i(we(Pe.value)),1),Ee.value.types.length?(l(),c("span",eS,i(o(e)("taskFieldType"))+"："+i(Ee.value.types.join("、")),1)):A("",!0),Ee.value.count?(l(),c("span",tS,i(o(e)("taskMetaFiles",{count:Ee.value.count,size:o(Ec)(Ee.value.size)})),1)):A("",!0)])]),s("div",nS,[(l(!0),c(ie,null,Re(be.value,(ce,Ie)=>(l(),c("div",{key:Ie,class:"fw-tlog-step"},[s("div",oS,[s("span",{class:te(["fw-tlog-dot",ce.status])},null,2),Ie<be.value.length-1?(l(),c("span",sS)):A("",!0)]),s("div",iS,[s("div",{class:te(["fw-tlog-bubble",ce.status])},[s("div",aS,[s("span",lS,i(Ke(ce.time)),1),s("span",{class:te(["fw-tlog-st",ce.status])},i(_e(ce.status)),3),s("span",rS,[Ie!==0?(l(),c(ie,{key:0},[ue(i(o(e)("taskStepSpent"))+" ",1),s("b",null,i(we(ce.durMs)),1)],64)):A("",!0)])]),s("div",cS,i(Ye(ce)),1),ce.detail&&ce.detail!==ce.file?(l(),c("div",uS,i(ce.detail),1)):A("",!0)],2)])]))),128))])],64)):A("",!0)]),_:1},8,["modelValue"]),m(qe,{modelValue:H.value,"onUpdate:modelValue":Ce[3]||(Ce[3]=ce=>H.value=ce),class:"fw-clone-dialog fw-taskarc-dialog",width:"880px","align-center":"","modal-class":"fw-blur-overlay","close-on-click-modal":!1,"modal-append-to-body":!1,"append-to-body":!1},{header:se(()=>[s("div",dS,[s("span",fS,[m(oe,{name:"archive",size:20})]),s("span",pS,[s("span",hS,i(o(e)("taskArchiveTitle")),1),s("span",vS,i(C.value??o(e)("taskArchiveOpen")),1)])])]),default:se(()=>[s("div",mS,[s("div",gS,[(l(!0),c(ie,null,Re(G.value,ce=>(l(),c("button",{key:ce.date,class:te(["fw-taskarc-date",{active:C.value===ce.date}]),onClick:Ie=>{C.value=ce.date,ye()}},[s("span",null,i(ce.date),1),s("span",wS,i(o(e)("taskArchiveRecords",{count:ce.count})),1)],10,yS))),128))]),s("div",bS,[F.value.length?A("",!0):(l(),c("div",_S,i(o(e)("taskArchiveNone")),1)),(l(!0),c(ie,null,Re(F.value,(ce,Ie)=>(l(),c("div",{key:ce.startedAt+"-"+Ie,class:te(["fw-taskarc-row",{[ce.status]:!0,active:J.value===ce}]),onClick:rt=>je(ce)},[s("span",xS,[m(oe,{name:ce.status==="done"?"check":"close",size:13},null,8,["name"])]),s("span",CS,i(ce.label),1),ce.detail?(l(),c("span",SS,i(ce.detail),1)):A("",!0),s("span",$S,i(Ze(ce.startedAt)),1)],10,kS))),128))]),s("div",ES,[J.value?(l(),c(ie,{key:1},[s("div",TS,[s("div",NS,i(J.value.label),1),J.value.detail?(l(),c("div",FS,[s("span",PS,i(o(e)("taskFieldTarget")),1),s("span",{class:"fw-tlog-path",title:J.value.detail},i(J.value.detail),9,AS)])):A("",!0),s("div",RS,[s("span",{class:te(["fw-tlog-st-head",J.value.status])},i(_e(J.value.status)),3),s("span",null,i(o(e)("taskStartTime"))+" "+i(Ze(J.value.startedAt)),1),J.value.doneAt?(l(),c("span",MS,i(o(e)("taskEndTime"))+" "+i(Ze(J.value.doneAt)),1)):A("",!0),s("span",null,i(o(e)("taskTotalSpent"))+" "+i(we(ee.value)),1),Ve.value.types.length?(l(),c("span",OS,i(o(e)("taskFieldType"))+"："+i(Ve.value.types.join("、")),1)):A("",!0),Ve.value.count?(l(),c("span",LS,i(o(e)("taskMetaFiles",{count:Ve.value.count,size:o(Ec)(Ve.value.size)})),1)):A("",!0)])]),s("div",BS,[(l(!0),c(ie,null,Re(z.value,(ce,Ie)=>(l(),c("div",{key:Ie,class:"fw-tlog-step"},[s("div",IS,[s("span",{class:te(["fw-tlog-dot",ce.status])},null,2),Ie<z.value.length-1?(l(),c("span",jS)):A("",!0)]),s("div",VS,[s("div",{class:te(["fw-tlog-bubble",ce.status])},[s("div",zS,[s("span",US,i(Ke(ce.time)),1),s("span",{class:te(["fw-tlog-st",ce.status])},i(_e(ce.status)),3),s("span",HS,[Ie!==0?(l(),c(ie,{key:0},[ue(i(o(e)("taskStepSpent"))+" ",1),s("b",null,i(we(ce.durMs)),1)],64)):A("",!0)])]),s("div",WS,i(Ye(ce)),1),ce.detail&&ce.detail!==ce.file?(l(),c("div",GS,i(ce.detail),1)):A("",!0)],2)])]))),128))])],64)):(l(),c("div",DS,i(o(e)("taskArchiveNone")),1))])])]),_:1},8,["modelValue"])],64)}}}),KS=xt(qS,[["__scopeId","data-v-516f499d"]]),XS={key:0,class:"fw-status-progress","aria-hidden":"true"},YS={class:"fw-status-tasks"},JS=["title"],QS=["inert"],ZS={key:0,class:"fw-status-busy"},e$={class:"fw-status-busy-txt"},t$={key:1,class:"fw-status-info"},n$={key:0},o$={key:1,class:"fw-status-sub"},s$={key:2},i$={key:3},a$=["inert"],l$=["title","onClick"],r$=vt({__name:"StatusBar",props:{chromeDisabled:{type:Boolean}},setup(t){const{t:e}=Mt(),n=t,a=B(()=>n.chromeDisabled??!1),r=g(null),{cmOpen:u,cmX:h,cmY:d,openMenuAt:p}=hn();function w(){const C=r.value?.getBoundingClientRect();C&&p(C.left,C.top-4)}function b(){return{path:null,projectDir:Ne.root||null}}const _=B(()=>sa().length>0),M=B(()=>{Ne.root;const C=b();return sa().map(Z=>({label:Z.text,disabled:!!Z.when&&!Z.when(C),onClick:()=>{try{Da(Z.commandId,C)}catch(G){Y("error",G.message)}}}))}),O=[{key:"details",icon:"eye",label:"viewDetails"},{key:"list",icon:"sort",label:"viewList"},{key:"large",icon:"grid",label:"viewLarge"}],N=B(()=>Kn.state.list.filter(C=>C.status==="running")),j=B(()=>N.value.length>0||Ne.search.running||le.loading||le.recycleLoading||le.drivesLoading),H=B(()=>{const C=N.value[0];return C?C.detail?`${C.label} · ${C.detail}`:C.label:Ne.search.running?e("statusSearching"):le.loading||le.recycleLoading||le.drivesLoading?e("statusLoading"):""});return(C,Z)=>(l(),c("div",{class:te(["fw-statusbar",{busy:j.value}])},[j.value?(l(),c("div",XS)):A("",!0),s("div",YS,[m(KS),_.value?(l(),c("button",{key:0,ref_key:"extMenuBtnRef",ref:r,class:te(["fw-status-seg fw-status-ext-btn",{on:o(u)}]),title:o(e)("vsMenuExtensions"),onClick:w},[m(oe,{name:"puzzle",size:13}),s("span",null,i(o(e)("vsMenuExtensions")),1)],10,JS)):A("",!0)]),s("div",{class:te(["fw-status-left",{"chrome-disabled":a.value}]),inert:a.value},[H.value?(l(),c("span",ZS,[Z[1]||(Z[1]=s("span",{class:"fw-status-busy-dot","aria-hidden":"true"},null,-1)),s("span",e$,i(H.value),1)])):o(Ft).visible?(l(),c("span",t$,[s("span",null,i(o(e)("statusItemsCount",{count:o(Ft).total})),1),o(Ft).selected?(l(),c("span",n$,"，"+i(o(e)("selectedCount",{count:o(Ft).selected})),1)):A("",!0),o(Ft).text?(l(),c("span",o$," · "+i(o(Ft).text),1)):A("",!0)])):o(le).view==="computer"?(l(),c("span",s$,i(o(e)("statusDrivesCount",{count:o(le).drives.length})),1)):o(le).view==="recycle"?(l(),c("span",i$,i(o(e)("statusItemsCount",{count:o(le).recycleItems.length})),1)):A("",!0)],10,QS),s("div",{class:te(["fw-status-right",{"chrome-disabled":a.value}]),inert:a.value},[(l(),c(ie,null,Re(O,G=>kt(s("button",{key:G.key,class:te(["fw-vs-btn",{on:o(Ft).view===G.key}]),title:o(e)(G.label),onClick:F=>o(y1)(G.key)},[m(oe,{name:G.icon,size:13},null,8,["name"])],10,l$),[[bs,o(Ft).canSwitchView]])),64))],10,a$),o(u)?(l(),Xe(Zt,{key:1,items:M.value,x:o(h),y:o(d),placement:"top",onClose:Z[0]||(Z[0]=G=>u.value=!1)},null,8,["items","x","y"])):A("",!0)],2))}}),c$=xt(r$,[["__scopeId","data-v-69ee25ba"]]),u$=["aria-disabled","inert"],d$={class:"fw-exp-left-main"},f$=["aria-valuenow"],p$={class:"fw-exp-right"},h$={class:"fw-explorer-statusbar-shell"},el="dsh-file-workbench.activeExternalView",v$=640,m$=780,g$=680,y$=vt({__name:"ExplorerPane",setup(t){const e=g(null),n=g(!1),a=br(e),r=B(Qm);function u(){try{return localStorage.getItem(el)??"files"}catch{return"files"}}const h=g(u()),d=g(!1),p=g(null),w=new Set,b=new Set,_={apiVersion:$o,get projectDir(){return Ne.root||null},get theme(){return a.value},activeFile:null,onProjectChange(ne){return w.add(ne),ne(Ne.root||null),()=>w.delete(ne)},onThemeChange(ne){return b.add(ne),ne(a.value),()=>b.delete(ne)},onDidChangeActiveFile(ne){return ne(null),()=>{}},openFile:async ne=>{await fi(ne)},listOpenFiles:()=>[],openDiff:()=>Y("info",v("gitDiffEmpty")),toast:Y},M=B(()=>r.value.filter(ne=>!ne.when||ne.when(_))),O=B(()=>M.value.find(ne=>ne.id===h.value));Je(()=>h.value!=="files",ne=>{Ne.externalViewActive=ne},{immediate:!0});function N(ne){h.value=ne;try{localStorage.setItem(el,ne)}catch{}}function j(){h.value="files";try{localStorage.removeItem(el)}catch{}}Je(()=>Ne.root,ne=>w.forEach(ae=>ae(ne||null))),Je(a,ne=>b.forEach(ae=>ae(ne))),Do(ne=>{const ae=O.value,Ee=p.value;if(!ae||!Ee||ae.when&&!ae.when(_))return;const Ve=ae.mount(Ee,_);oa(Ee);const be=new ResizeObserver(()=>oa(Ee));be.observe(Ee),ne(()=>{if(be.disconnect(),typeof Ve=="function")try{Ve()}catch{}Ee.replaceChildren()})},{flush:"post"});const H=g(!1),C=g(0),Z=B(()=>C.value>0&&C.value<g$);let G=null;function F(){const ne=e.value?.clientWidth??0;C.value=ne,ne<=v$?H.value=!0:ne>=m$&&(H.value=!1)}const de=B(()=>!!na.value.trim()),I=B(()=>({width:`calc(${Math.round(Un.explorerSplit*1e3)/10}% - 3px)`}));function he(ne){if(!n.value||!e.value)return;const ae=e.value.getBoundingClientRect();if(ae.width<=0)return;const Ee=(ne.clientX-ae.left)/ae.width;Un.explorerSplit=Math.min(.85,Math.max(.15,Ee))}function xe(){n.value&&(n.value=!1,document.removeEventListener("mousemove",he),document.removeEventListener("mouseup",xe),document.body.style.userSelect="",document.body.style.cursor="",Ii())}function ge(){n.value=!0,document.addEventListener("mousemove",he),document.addEventListener("mouseup",xe),document.body.style.userSelect="none",document.body.style.cursor="col-resize"}return At(()=>{document.removeEventListener("mousemove",he),document.removeEventListener("mouseup",xe),G?.disconnect(),G=null}),cn(()=>{e.value&&(G=new ResizeObserver(()=>F()),G.observe(e.value),F())}),(ne,ae)=>(l(),c("div",{ref_key:"rootRef",ref:e,class:te(["fw-explorer",{"user-slot-active":h.value!=="files"}])},[s("div",{class:te(["fw-explorer-topbar-shell",{"external-view-disabled":h.value!=="files"}]),"aria-disabled":h.value!=="files",inert:h.value!=="files"},[m(yC,{"nav-folded":H.value,compact:Z.value,onUnfoldNav:ae[0]||(ae[0]=Ee=>H.value=!1)},null,8,["nav-folded","compact"])],10,u$),s("div",{class:te(["fw-exp-body",{"left-folded":H.value,"user-slot-active":h.value!=="files"}])},[s("div",{class:"fw-exp-left",style:_t(I.value)},[s("div",d$,[m(Gg,{"external-views":M.value,"external-collapsed":d.value,"active-external-id":h.value==="files"?"":h.value,"external-active":h.value!=="files"&&!!O.value,onToggleExternal:ae[1]||(ae[1]=Ee=>d.value=!d.value),onSelectExternal:N,onSelectLocal:j},null,8,["external-views","external-collapsed","active-external-id","external-active"])])],4),s("div",{class:te(["fw-exp-split",{dragging:n.value}]),role:"separator","aria-orientation":"vertical","aria-valuenow":Math.round(o(Un).explorerSplit*100),"aria-valuemin":15,"aria-valuemax":85,onMousedown:ke(ge,["prevent"])},null,42,f$),s("div",p$,[O.value?(l(),c("div",{key:0,ref_key:"extHostRef",ref:p,class:"fw-exp-ext-view"},null,512)):(l(),c(ie,{key:1},[de.value?(l(),Xe(h1,{key:0})):o(le).view==="computer"?(l(),Xe(Kx,{key:1})):(l(),Xe(Xk,{key:2}))],64))])],2),s("div",h$,[m(c$,{"chrome-disabled":h.value!=="files"},null,8,["chrome-disabled"])])],2))}}),w$=xt(y$,[["__scopeId","data-v-83c03138"]]),b$={class:"fw-navpath"},_$=["title"],k$={class:"fw-crumb last"},x$=["title"],C$=["onKeydown"],S$={key:0,class:"fw-crumb-sep"},$$=["title","onClick"],E$={key:2,class:"fw-path"},D$=vt({__name:"NavPathBar",setup(t){const{t:e}=Mt(),n=B(()=>Nl.value||Ne.root||""),a=B(()=>le.view==="computer"?e("navThisPc"):le.view==="recycle"?e("recycleBin"):""),r=B(()=>le.view==="computer"?"monitor":"trash"),u=B(()=>n.value.startsWith("ssh://")),h=B(()=>{const N=n.value;if(!N)return[];const j=qu(N);if(j)return j;const H=N.replace(/\\/g,"/").split("/").filter(G=>G.length>0),C=[];let Z="";return H.forEach((G,F)=>{const de=/^[A-Za-z]:$/.test(G);Z=F===0?de?G+"/":"/"+G:Z.replace(/[\\/]+$/,"")+"/"+G,C.push({name:G,path:Z})}),C});function d(N){Vt(N)}const p=g(!1),w=g(""),b=g(null);function _(){w.value=n.value,p.value=!0,Tt(()=>{b.value?.focus(),b.value?.select()})}function M(){const N=w.value.trim();p.value=!1,N&&N!==n.value&&Vt(N).catch(j=>Y("error",j.message))}function O(){p.value=!1}return(N,j)=>(l(),c("div",b$,[a.value?(l(),c("span",{key:0,class:"fw-path fw-crumbs fw-path-static",title:a.value},[m(oe,{name:r.value,size:14,class:"fw-path-static-ico"},null,8,["name"]),s("span",k$,i(a.value),1)],8,_$)):n.value?(l(),c("span",{key:1,class:te(["fw-path",{"fw-crumbs":!p.value,editing:p.value}]),title:n.value,onClick:_},[p.value?kt((l(),c("input",{key:0,ref_key:"pathInputRef",ref:b,"onUpdate:modelValue":j[0]||(j[0]=H=>w.value=H),class:"fw-path-input",spellcheck:"false",onKeydown:[bt(ke(M,["prevent"]),["enter"]),bt(ke(O,["prevent"]),["esc"])],onBlur:O},null,40,C$)),[[Lt,w.value]]):(l(!0),c(ie,{key:1},Re(h.value,(H,C)=>(l(),c(ie,{key:C},[C>0?(l(),c("span",S$,i(u.value?"/":"\\"),1)):A("",!0),s("button",{class:te(["fw-crumb",{last:C===h.value.length-1}]),title:H.path,onClick:ke(Z=>d(H.path),["stop"])},i(H.name),11,$$)],64))),128))],10,x$)):(l(),c("span",E$,i(o(e)("noFolder")),1))]))}}),T$=xt(D$,[["__scopeId","data-v-7f7f6ad1"]]),N$=["aria-disabled","inert"],F$={class:"fw-right"},P$=640,A$=vt({__name:"WinMenuBar",props:{externalViewActive:{type:Boolean}},emits:["open-settings"],setup(t,{emit:e}){const n=e,{t:a}=Mt(),r=g(null),u=g(!1);let h=null;cn(()=>{r.value&&(h=new ResizeObserver(()=>{u.value=(r.value?.clientWidth??0)<P$}),h.observe(r.value))}),At(()=>{h?.disconnect(),h=null});const d=g(!1);let p;function w(){Nt(),d.value=!0,p&&clearTimeout(p),p=setTimeout(()=>d.value=!1,650)}const b=B(()=>le.loading||d.value);function _(){td()}function M(){nd()}const O=B({get:()=>na.value,set:Z=>Ti(Z)});let N;const j=B(()=>xa(Nl.value)?Nl.value:Ne.root||"");function H(){N&&clearTimeout(N);const Z=O.value;if(!Z.trim()){Ti(""),gs("").catch(G=>Y("error",G.message));return}N=setTimeout(()=>{Ti(Z),gs(Z,j.value).catch(G=>Y("error",G.message))},350)}function C(){O.value="",Ti(""),gs("")}return Je(na,Z=>{!Z&&O.value&&(O.value="")}),(Z,G)=>{const F=Mn,de=To;return l(),c("header",{ref_key:"toolbarRef",ref:r,class:te(["fw-toolbar",{"external-view-disabled":t.externalViewActive}]),"aria-disabled":t.externalViewActive,inert:t.externalViewActive},[kt(m(F,{text:"",size:"small",title:o(a)("goBack"),disabled:!o(Gv),onClick:_},{default:se(()=>[m(oe,{name:"arrowLeft",size:16})]),_:1},8,["title","disabled"]),[[bs,!u.value]]),kt(m(F,{text:"",size:"small",title:o(a)("goForward"),disabled:!o(qv),onClick:M},{default:se(()=>[m(oe,{name:"arrowRight",size:16})]),_:1},8,["title","disabled"]),[[bs,!u.value]]),m(F,{text:"",size:"small",title:o(a)("goUp"),disabled:!o(Kv),onClick:o(Tl)},{default:se(()=>[m(oe,{name:"up",size:16})]),_:1},8,["title","disabled","onClick"]),m(F,{text:"",size:"small",title:o(a)("goSessionDir"),onClick:o(sd)},{default:se(()=>[m(oe,{name:"compass",size:16})]),_:1},8,["title","onClick"]),m(F,{text:"",size:"small",title:o(a)("refreshList"),onClick:w},{default:se(()=>[m(oe,{name:"refresh",class:te(["fw-refresh-ic",{spinning:b.value}]),size:15},null,8,["class"])]),_:1},8,["title"]),m(F,{text:"",size:"small",title:o(a)("settings"),onClick:G[0]||(G[0]=I=>n("open-settings"))},{default:se(()=>[m(oe,{name:"gear",size:16})]),_:1},8,["title"]),m(T$),s("div",F$,[m(de,{modelValue:O.value,"onUpdate:modelValue":G[1]||(G[1]=I=>O.value=I),class:"fw-search-input",size:"small",clearable:"",placeholder:o(a)("searchPlaceholder"),onInput:H,onClear:C},{prefix:se(()=>[m(oe,{name:"search",size:14,class:"fw-search-ico"})]),_:1},8,["modelValue","placeholder"])])],10,N$)}}}),R$=xt(A$,[["__scopeId","data-v-ccd8c5b0"]]),M$={class:"fw-shortcut"},O$={class:"fw-shortcut-head"},L$={class:"fw-shortcut-title"},B$=["title"],I$={class:"fw-shortcut-body"},j$={class:"fw-shortcut-group-title"},V$={class:"fw-shortcut-keys"},z$={class:"fw-shortcut-desc"},U$={class:"fw-shortcut-foot"},H$=vt({__name:"ShortcutHelpDialog",setup(t,{expose:e}){const{t:n}=Mt(),a=g(!1),r=B(()=>[{title:n("shortcutGlobal"),items:[{keys:["?"],label:n("shGlobalHelp")}]},{title:n("shortcutFileList"),items:[{keys:["Ctrl","A"],label:n("shListSelectAll")},{keys:["Ctrl","C"],label:n("shListCopy")},{keys:["Ctrl","X"],label:n("shListCut")},{keys:["Ctrl","V"],label:n("shListPaste")},{keys:["Ctrl","F"],label:n("shListFilter")},{keys:["Ctrl","Shift","N"],label:n("shListNewFolder")},{keys:["Delete"],label:n("shListDelete")},{keys:["F2"],label:n("shListRename")},{keys:["F5"],label:n("shListRefresh")},{keys:["Enter"],label:n("shListOpen")},{keys:["↑","↓","Home","End"],label:n("shListMove")},{keys:["Backspace"],label:n("shListUp")},{keys:["Alt","←"],label:n("shListBack")},{keys:["Alt","→"],label:n("shListForward")}]}]);Je(a,d=>{d?window.addEventListener("keydown",u):window.removeEventListener("keydown",u)});function u(d){d.key==="Escape"&&h()}function h(){a.value=!1}return e({open:()=>a.value=!0}),(d,p)=>(l(),Xe(eu,{to:"body"},[a.value?(l(),c("div",{key:0,class:"fw-shortcut-mask",onMousedown:ke(h,["self"])},[s("div",M$,[s("div",O$,[s("span",L$,i(o(n)("shortcutHelp")),1),s("span",{class:"fw-shortcut-close",title:o(n)("closeTab"),onClick:h},"✕",8,B$)]),s("div",I$,[(l(!0),c(ie,null,Re(r.value,w=>(l(),c("section",{key:w.title,class:"fw-shortcut-group"},[s("h4",j$,i(w.title),1),(l(!0),c(ie,null,Re(w.items,b=>(l(),c("div",{key:b.keys.join(),class:"fw-shortcut-row"},[s("span",V$,[(l(!0),c(ie,null,Re(b.keys,_=>(l(),c("kbd",{key:_,class:"fw-shortcut-kbd"},i(_),1))),128))]),s("span",z$,i(b.label),1)]))),128))]))),128))]),s("div",U$,i(o(n)("shortcutHint")),1)])],32)):A("",!0)]))}}),W$=xt(H$,[["__scopeId","data-v-f4ba30d1"]]),G$={class:"fw-body"},q$=vt({__name:"App",setup(t){const e=g(null);br(e);const n=B(()=>{const h=(Ue.fontFamily??"").trim(),d=h&&h!=="default"?h:"",p=Ue.fontSize??13;return{fontFamily:d?`${d}, var(--dsh-font, "Segoe UI", system-ui, sans-serif)`:void 0,fontSize:`${p}px`,"--dsh-fs-scale":String(p/13)}});Do(()=>{const h=Ue.fontSize??13;document.documentElement.style.setProperty("--dsh-fs-scale",String(h/13))});const a=g(null),r=g(null);cn(async()=>{try{await Wv()}catch{}await Ju(),vr(),Jv()&&(await sd()||await od()),window.addEventListener("keydown",u)}),At(()=>{window.removeEventListener("keydown",u)});function u(h){if(!h.ctrlKey&&!h.metaKey&&!h.altKey&&h.key==="?"){if(h.target?.closest("input, textarea, select, [contenteditable='true'], .el-input, .el-textarea"))return;h.preventDefault(),r.value?.open()}}return(h,d)=>(l(),c("div",{ref_key:"rootEl",ref:e,class:"fw-root",style:_t(n.value)},[m(R$,{"external-view-active":o(Ne).externalViewActive,onOpenSettings:d[0]||(d[0]=p=>a.value?.open())},null,8,["external-view-active"]),s("div",G$,[m(w$)]),m(kv,{ref_key:"settingsRef",ref:a},null,512),m(au),m(W$,{ref_key:"shortcutRef",ref:r},null,512)],4))}}),K$=xt(q$,[["__scopeId","data-v-4a279056"]]);function Ld(){return{projectDir:null,recentProjects:[],openTabs:[],activeTab:null,expanded:[],expandedSeeded:[],split:.26,termHeight:260,treeScroll:0,views:{},activityBar:{position:"top",hidden:[]},sidebarSide:"left"}}const ci=10,Nc=8;function X$(t){return t<=1?"vscode":`vscode-${t}`}let zn={version:2,recents:[],slots:{}},tl=null,lo=[];function Y$(t){return Array.isArray(t)?[...new Set(t.filter(e=>typeof e=="string"&&e!==""))].slice(0,ci):[]}function J$(t){if(!t||typeof t!="object")return null;const e=t,n={};return typeof e.scrollTop=="number"&&Number.isFinite(e.scrollTop)&&e.scrollTop>=0&&(n.scrollTop=e.scrollTop),typeof e.anchor=="number"&&Number.isFinite(e.anchor)&&e.anchor>=0&&(n.anchor=e.anchor),n.scrollTop===void 0&&n.anchor===void 0?null:n}function Fc(t){const e=Ld();if(typeof t.projectDir=="string"&&(e.projectDir=t.projectDir),Array.isArray(t.recentProjects)&&(e.recentProjects=[...new Set(t.recentProjects.filter(n=>typeof n=="string"&&n!==""))].slice(0,ci)),Array.isArray(t.openTabs)&&(e.openTabs=t.openTabs.filter(n=>typeof n=="string")),typeof t.activeTab=="string"&&(e.activeTab=t.activeTab),Array.isArray(t.expanded)&&(e.expanded=t.expanded.filter(n=>typeof n=="string")),Array.isArray(t.expandedSeeded)&&(e.expandedSeeded=t.expandedSeeded.filter(n=>typeof n=="string")),typeof t.split=="number"&&t.split>.1&&t.split<.9&&(e.split=t.split),typeof t.termHeight=="number"&&Number.isFinite(t.termHeight)&&t.termHeight>=100&&(e.termHeight=Math.min(1200,t.termHeight)),typeof t.treeScroll=="number"&&Number.isFinite(t.treeScroll)&&t.treeScroll>=0&&(e.treeScroll=t.treeScroll),t.activityBar&&typeof t.activityBar=="object"&&(t.activityBar.position==="top"||t.activityBar.position==="bottom")){const n=t.activityBar;e.activityBar.position=n.position,Array.isArray(n.hidden)&&(e.activityBar.hidden=n.hidden.filter(a=>typeof a=="string"&&a!==""))}if((t.sidebarSide==="left"||t.sidebarSide==="right")&&(e.sidebarSide=t.sidebarSide),t.views&&typeof t.views=="object"){const n={};for(const[a,r]of Object.entries(t.views)){const u=J$(r);u&&(n[a]=u)}e.views=n}return e.activeTab&&!e.openTabs.includes(e.activeTab)&&(e.activeTab=e.openTabs[0]??null),e}function Q$(t){if(!t||typeof t!="object")return{version:2,recents:[],slots:{}};const e=t;if(e.version===2&&e.slots&&typeof e.slots=="object"){const n={};for(const[r,u]of Object.entries(e.slots))u&&typeof u=="object"&&(n[r]=Fc(u));let a;if(e.recents===void 0){const r=[];for(const u of Object.keys(n).sort((h,d)=>Number(h)-Number(d)))for(const h of n[u]?.recentProjects??[])r.includes(h)||r.push(h);a=r.slice(0,ci)}else a=Y$(e.recents);for(const r of Object.values(n))r.recentProjects=[...a];return{version:2,recents:a,slots:n}}if(typeof e.projectDir=="string"||Array.isArray(e.openTabs)){const n=Fc(e);return{version:2,recents:[...n.recentProjects],slots:{1:n}}}return{version:2,recents:[],slots:{}}}function Z$(){return tl||(tl=(async()=>{const t=await _u().catch(()=>null);zn=Q$(t?.vscode)})()),tl}const jl=new Map,Vi=new Map;function Pi(t){lo=[...t];for(const e of jl.values())e.state.recentProjects=[...lo]}function Bd(t){const e=t||"@default",n=Vi.get(e);if(n!==void 0)return n;const a=new Set(Vi.values());let r=1;for(;a.has(r);)r++;return Vi.set(e,r),r}function Dr(t){let e=jl.get(t);return e||(e=lE(t),jl.set(t,e)),e}const ra=new Map;function Id(t){let e=ra.get(t);return e||(e=new Map,ra.set(t,e)),e}function nl(t,e){ra.get(t)?.delete(e)}function eE(t){ra.delete(t)}const Vl=new Map;function Pc(t,e){e?Vl.set(t,e):Vl.delete(t)}function tE(t){return Vl.get(t)}const zl=new Map;function Ai(t,e){e?zl.set(t,e):zl.delete(t)}function nE(t){return zl.get(t)}const Ul=new Map,Hl=new Map;function oE(t,e){let n=Ul.get(t);return n||(n=new Set,Ul.set(t,n)),n.add(e),()=>{n?.delete(e)}}function sE(t,e){let n=Hl.get(t);return n||(n=new Set,Hl.set(t,n)),n.add(e),()=>{n?.delete(e)}}function iE(t,e,n){Ul.get(t)?.forEach(a=>a(e,n))}function aE(t,e){Hl.get(t)?.forEach(n=>n(e))}const Aa=Symbol("dsh-file-workbench/vscode-store");function lE(t){const e=gt(Ld()),n=g(!1),a=g(null);let r=null,u=null,h=null,d=!1,p=null,w=0;const b={};let _={};function M(){const G=Object.keys(zn.slots).map(Number).filter(F=>Number.isFinite(F)&&F!==t).sort((F,de)=>F-de);for(const F of G){const de=zn.slots[String(F)]?.projectDir;if(de)return de}return null}function O(){const G=Object.keys(zn.slots);if(G.length<=Nc)return;const F=new Set([...Vi.values()].map(String));F.add(String(t));const de=G.filter(I=>!F.has(I)).sort((I,he)=>Number(I)-Number(he));for(const I of de.slice(0,G.length-Nc))delete zn.slots[I]}function N(){for(const G of Object.values(zn.slots))G.recentProjects=[...lo];zn.slots[String(t)]={...e,recentProjects:[...lo],views:{...e.views,...b}},zn.recents=[...lo],O(),es("vscode",zn)}function j(){p===null&&(p=setTimeout(()=>{p=null,N()},400))}function H(G){const F=G.trim();F&&(Pi([F,...lo.filter(de=>de!==F)].slice(0,ci)),j())}function C(G){Pi(lo.filter(F=>F!==G)),N()}function Z(){Pi([]),N()}return{slot:t,rootKey:X$(t),state:e,ready:n,projectRequest:a,get tabId(){return r},get panelId(){return u},bindTab(G,F){r=G,u=F},markFresh(){d=!0},init(){return h||(h=(async()=>{if(await Z$().catch(()=>{}),lo=[...zn.recents],!d){const G=zn.slots[String(t)];if(G)Object.assign(e,G,{views:{...G.views}});else if(!e.projectDir){const F=M();F&&(e.projectDir=F)}}Pi([...new Set([...lo,...e.recentProjects])].slice(0,ci))})()),h},persist:N,persistSoon:j,rememberProject:H,forgetProject:C,clearRecentProjects:Z,fileViewOf(G){return G?b[G]??e.views[G]??{}:{}},rememberFileView(G,F){if(!G)return;const de=b[G];de&&de.scrollTop===F.scrollTop&&de.anchor===F.anchor||(b[G]={...F},j())},stashOpenBuffers(G){_={};for(const[F,de]of Object.entries(G))_[F]={...de}},takeStashedBuffers(){const G=_;return _={},G},requestOpenProject(G){const F=G?.trim();F&&(a.value={dir:F,n:++w})}}}function Tr(){return Dr(1)}const rE={key:0,class:"vs-tree-loading"},cE={key:1,class:"vs-tree-empty"},uE=["onClick","onContextmenu","onDragstart","onDragover","onDragleave","onDrop"],dE=["onClick"],fE={key:0},pE=["title"],hE=["title"],vE=["title"],mE={key:2,class:"vs-loading"},gE={class:"vs-diff-body"},Wl=new Map,yE=3e4;function wE(t,e){if(!e)return null;const n=Wl.get(t);return n&&n.root===e?n:null}const Ac=new Set(["node_modules",".git",".svn",".hg","dist","build","out",".next",".nuxt",".cache","coverage","vendor","target",".venv","venv","__pycache__","bin","obj"]),bE=vt({__name:"ProjectTree",props:{root:{},activePath:{}},emits:["open-file","file-removed","file-renamed","project-missing","remove-project"],setup(t,{expose:e,emit:n}){const a=t,r=n,u=tr(Aa)??Tr(),h=u.state,d=u.ready,p=u.rootKey,w=()=>u.persist(),b=()=>u.persistSoon();let _=wE(p,a.root);const M=_?_.nodes:gt({}),O=g(_?_.rootPath:null),N=g(null),j=g(!1);function H(T){const ve=a.root;ve&&(_={root:ve,nodes:M,rootPath:O.value,at:Date.now()},Wl.set(p,_))}function C(){_=null,Wl.delete(p);for(const T of Object.keys(M))delete M[T];O.value=null}let Z=0;const G=3e3;async function F(){const T=a.root;if(!T||!d.value||Date.now()-Z<G)return;Z=Date.now();let ve=!0;try{ve=await pl(T,{silent:!0})}catch{ve=!0}!ve&&a.root===T&&(C(),r("project-missing",T))}function de(){F()}cn(()=>window.addEventListener("focus",de)),At(()=>window.removeEventListener("focus",de));function I(){_&&(_.at=Date.now())}const he=B(()=>O.value?M[O.value]??null:null),xe=B(()=>{const T=[],ve=he.value;if(!ve)return T;const Be=He=>{if(T.push(He),He.expanded)for(const Ae of He.children){const Ge=M[Ae];Ge&&Be(Ge)}};return Be(ve),T});function ge(T,ve,Be,He,Ae){return{path:T,name:ve,isDir:Be,depth:He,owner:Ae,expanded:!1,loaded:!1,loading:!1,children:[]}}function ne(T){return T.replace(/[\\/][^\\/]+$/,"")}function ae(T){if(T.isDir)for(const ve of T.children){const Be=M[ve];!Be||!Be.isDir||!h.expanded.includes(Be.path)||(Be.expanded=!0,Be.loaded?ae(Be):Ee(Be))}}async function Ee(T,ve=!1){if(T=M[T.path]??T,!T.loading){T.loading=!0,xo(T.path),cs(T.path);try{const Ae=(await Bi(T.path,p)).entries.filter(Ge=>!Ge.hidden).sort((Ge,Dt)=>Number(Dt.isDir)-Number(Ge.isDir)||Ge.name.localeCompare(Dt.name,"zh"));T.children=[];for(const Ge of Ae){const Dt=M[Ge.path]??ge(Ge.path,Ge.name,Ge.isDir,T.depth+1,T.path);Dt.name=Ge.name,Dt.isDir=Ge.isDir,Dt.depth=T.depth+1,Dt.owner=T.path,M[Ge.path]=Dt,T.children.push(Ge.path)}T.loaded=!0,I(),ae(T)}catch(He){if(T.loading=!1,uu(He)){ve||(await new Promise(Ae=>setTimeout(Ae,150)),await Ee(T,!0));return}if(T.depth===0&&He instanceof Yo&&He.status===404){C(),r("project-missing",T.path);return}Y("error",He.message)}finally{T.loading=!1}}}function Ve(T){T.isDir&&(T.expanded=!T.expanded,Pe(T.path,T.expanded),T.expanded&&(T.loaded?ae(T):Ee(T)))}function be(T){T.isDir?Ve(T):r("open-file",T.path)}function Pe(T,ve,Be=!0){const He=new Set(h.expanded),Ae=He.has(T);ve?He.add(T):He.delete(T),Ae!==ve&&(h.expanded=[...He],Be&&Nn())}const W=1,J=20;async function z(T,ve,Be){if(!(!T.isDir||ve<=0))for(const He of[...T.children]){if(Be.n>=J)return;const Ae=M[He];!Ae||!Ae.isDir||Ac.has(Ae.name.toLowerCase())||(Be.n+=1,Ae.expanded=!0,Pe(Ae.path,!0,!1),Ae.loaded?ae(Ae):await Ee(Ae),await z(Ae,ve-1,Be))}}async function ee(T){T.expanded=!0,Pe(T.path,!0,!1),await z(T,W,{n:0}),h.expandedSeeded.includes(T.path)||(h.expandedSeeded=[...h.expandedSeeded,T.path]),Nn()}function ye(){const T=N.value;T&&(h.treeScroll=T.scrollTop,b())}async function je(){await Tt();const T=N.value;T&&(T.scrollTop=h.treeScroll||0)}let Ke=0;async function Ze(){const T=Ke;for(const ve of xe.value.filter(Be=>Be.isDir&&Be.loaded).map(Be=>Be.path)){if(T!==Ke)return;const Be=M[ve];!Be||Be.loading||await Ee(Be)}I()}async function we(){const T=++Ke;a.root&&(j.value=!0);try{if(a.root){let St=!0;try{St=await pl(a.root)}catch{St=!0}if(!St){C(),r("project-missing",a.root);return}}if(_&&a.root&&_.root===a.root&&M[a.root]){O.value=a.root,Date.now()-_.at>yE?Ze():await je();return}_=null;for(const St of Object.keys(M))delete M[St];if(!a.root){O.value=null;return}try{await sr(a.root,p)}catch{}if(T!==Ke)return;const ve=Wt(a.root)?El(a.root):a.root.split(/[\\/]/).filter(Boolean).pop()??a.root,Be=ge(a.root,ve,!0,0,a.root);M[a.root]=Be,O.value=a.root;const He=M[a.root],Ae=a.root.replace(/[\\/]+$/,"").toLowerCase(),Ge=h.expanded.some(St=>{const bn=St.replace(/[\\/]+$/,"").toLowerCase();return bn===Ae||bn.startsWith(`${Ae}\\`)||bn.startsWith(`${Ae}/`)});if(h.expandedSeeded.includes(a.root)&&Ge)He.expanded=h.expanded.includes(a.root),await Ee(He);else{if(He.expanded=!0,await Ee(He),T!==Ke)return;await ee(He)}if(T!==Ke)return;for(let St=0;St<3&&He.expanded&&He.children.length===0;St+=1){if(await new Promise(bn=>setTimeout(bn,[200,600,1500][St])),T!==Ke)return;He.loaded=!1,await Ee(He)}if(T!==Ke)return;await je(),H()}finally{T===Ke&&(j.value=!1)}}e({rebuild:we,createFileAtRoot:Fo,createFolderAtRoot:Dn}),Je(()=>[a.root,d.value],()=>{d.value&&we()},{immediate:!0});const _e={"":"",untracked:"?",added:"A",modified:"M",deleted:"D"};function Ye(T){return T.depth===0?"":Td(T.owner,T.name)}function ot(T){return _e[Ye(T)]}function pe(T){const ve=Ye(T);return ve==="untracked"?v("gitBadgeUntracked"):ve==="added"?v("gitBadgeAdded"):ve==="modified"?v("gitBadgeModified"):ve==="deleted"?v("gitBadgeDeleted"):""}function Ce(T){return T.depth===0?"":Nd(T.owner,T.name)}function qe(T){return _e[Ce(T)]}function ce(T){const ve=Ce(T);return ve==="untracked"?v("gitBadgeUntracked"):ve==="added"?v("gitBadgeAdded"):ve==="modified"?v("gitBadgeModified"):ve==="deleted"?v("gitBadgeDeleted"):""}const{cmOpen:Ie,cmX:rt,cmY:yt,openMenu:ut}=hn(),it=g(null),Le=g(!1),U=B(()=>it.value?Le.value?D(it.value):L(it.value):[]);function R(T,ve){Le.value=!1,it.value=T;const Be=De(T);xo(Be),cs(Be),ut(ve)}function Q(T){const ve=a.root?M[a.root]:void 0;ve&&(Le.value=!0,it.value=ve,xo(ve.path),cs(ve.path),ut(T))}function De(T){return T.owner||T.path}function L(T){const ve=De(T),Be=[];return Be.push(T.isDir?{label:v("menuOpen"),icon:"folderOpen",onClick:()=>Ve(T)}:{label:v("menuOpen"),icon:"arrowRight",onClick:()=>r("open-file",T.path)}),Be.push({separator:!0}),Be.push({label:v("vsNewFile"),icon:"file",onClick:()=>void dn(T)},{label:v("vsNewFolder"),icon:"folder",onClick:()=>void Bn(T)},{label:v("vsRename"),icon:"edit",onClick:()=>void Gn(T)},{label:v("vsDelete"),icon:"trash",onClick:()=>void Tn(T)}),Be.push(...Rl(ve,T.path,ze)),Be.push(...Ml(ve,T.path,ze)),Be.push({separator:!0},{label:v("menuCopyRelPath"),icon:"link",onClick:()=>void Sn(T.path)},{label:v("menuCopyAbsPath"),icon:"link",onClick:()=>void zt(T.path)},{label:v("menuOpenTerminal"),icon:"terminal",onClick:()=>st(T)},{label:v("vsAddToSession"),icon:"sparkle",onClick:()=>ft(T)},{separator:!0},{label:v("vsRefresh"),icon:"refresh",onClick:()=>void yn(T)}),T.depth===0&&(Be.push({separator:!0}),Be.push({label:v("vsRemoveProject"),icon:"close",onClick:()=>r("remove-project",T.path)})),Be}function D(T){const ve=T.path;return[{label:v("vsNewFile"),icon:"file",onClick:()=>void dn(T)},{label:v("vsNewFolder"),icon:"folder",onClick:()=>void Bn(T)},{separator:!0},{label:v("vsExpandAll"),icon:"chevronDown",onClick:()=>void Te()},{label:v("vsCollapseAll"),icon:"chevronRight",onClick:K},...Rl(ve,ve,ze),...Ml(ve,ve,ze),{separator:!0},{label:v("menuCopyRelPath"),icon:"link",onClick:()=>void Sn(ve)},{label:v("menuCopyAbsPath"),icon:"link",onClick:()=>void zt(ve)},{label:v("menuOpenTerminal"),icon:"terminal",onClick:()=>st(T)},{label:v("vsAddToSession"),icon:"sparkle",onClick:()=>ft(T)},{separator:!0},{label:v("vsRefresh"),icon:"refresh",onClick:()=>void yn(T)},{separator:!0},{label:v("vsRemoveProject"),icon:"close",onClick:()=>r("remove-project",T.path)}]}function K(){const T=a.root?M[a.root]:void 0;if(T){for(const ve of Object.values(M))ve.expanded=ve.depth===0;h.expanded=[T.path],h.expandedSeeded=[...new Set([...h.expandedSeeded,T.path])],Nn()}}const $=120;async function q(){const T=a.root?M[a.root]:void 0;if(!T)return!1;let ve=$,Be=!1;const He=async Ae=>{if(ve<=0){Be=!0;return}ve-=1;const Ge=M[Ae];if(Ge?.isDir){Ge.expanded=!0,Pe(Ge.path,!0,!1),Ge.loaded||await Ee(Ge);for(const Dt of[...Ge.children]){const St=M[Dt];if(St?.isDir&&!Ac.has(St.name.toLowerCase())&&(await He(Dt),ve<=0)){Be=!0;return}}}};return await He(T.path),Nn(),Be}async function Te(){await q()&&Y("info",v("vsExpandAllLimited",{n:String($)}))}const re=g(!1),ct=g(!1),wt=g(!1),Ot=g(!1),On=g(""),Gt=g(""),ze={openGitPanel:()=>{Gt.value=it.value?De(it.value):a.root??"",re.value=!0},openSvnPanel:()=>{Gt.value=it.value?De(it.value):a.root??"",ct.value=!0},openCommit:()=>{Gt.value=it.value?De(it.value):a.root??"",wt.value=!0},showGitDiff:T=>{On.value=T,Ot.value=!0},afterMutate:async T=>{await xo(T),await cs(T)}};function Qe(T){re.value=T,T||at()}function et(T){ct.value=T,T||at()}async function at(){So("git"),So("svn");const T=new Set([...Object.keys(Pa.dirs),...Object.keys(ri.dirs)]);a.root&&T.add(a.root),await Promise.all([...T].flatMap(ve=>[xo(ve),cs(ve)]))}function Cn(T){const ve=(a.root??"").replace(/[\\/]+$/,"");return ve&&T.toLowerCase().startsWith(ve.toLowerCase())?T.slice(ve.length).replace(/^[\\/]+/,""):T}async function Sn(T){const ve=await _c(Cn(T));Y(ve?"ok":"error",v(ve?"menuPathCopied":"menuPathCopyFail"))}async function zt(T){const ve=await _c(T);Y(ve?"ok":"error",v(ve?"menuPathCopied":"menuPathCopyFail"))}function st(T){Es(T.isDir?T.path:ne(T.path))}function ft(T){(window.__DSH_FILE_WORKBENCH__?.appendSessionReference?.(T.path,T.isDir)??!1)||Y("error",v("vsAddToSessionFail"))}function Ct(T){return T.isDir?T:M[ne(T.path)]??T}let Ln=null;const $n=g(null);function Jn(T,ve){Ln=T.path,ve.dataTransfer?.setData("text/plain",T.path),ve.dataTransfer&&(ve.dataTransfer.effectAllowed="move")}function gn(T,ve){!Ln||Ln===T.path||(ve.dataTransfer&&(ve.dataTransfer.dropEffect="move"),$n.value=T.isDir?T.path:ne(T.path))}function En(T){const ve=T.isDir?T.path:ne(T.path);$n.value===ve&&($n.value=null)}async function ts(T,ve){const Be=Ln??ve.dataTransfer?.getData("text/plain")??"",He=Ct(T).path;if(Ln=null,$n.value=null,!Be||!He)return;const Ae=He.replace(/[\\/]+$/,"");if(Be===He||Ae.startsWith(Be.replace(/[\\/]+$/,"")))return;const Ge=Be.split(/[\\/]/).filter(Boolean).pop()??"";if(!Ge)return;const Dt=`${Ae}/${Ge}`;if(Dt!==Be)try{await Gi(Be,Dt,p),r("file-renamed",Be,Dt);const St=M[Ae];St?.isDir&&!St.expanded&&(St.expanded=!0,Pe(Ae,!0)),await Qn()}catch(St){Y("error",St.message)}}function Fo(){const T=a.root?M[a.root]:void 0;T&&dn(T)}function Dn(){const T=a.root?M[a.root]:void 0;T&&Bn(T)}async function dn(T){const ve=Ct(T),Be=await fo({title:v("vsNewFile"),message:v("vsNewFileName"),placeholder:"untitled.txt",initial:"untitled.txt"})??null;if(!Be)return;const He=`${ve.path.replace(/[\\/]+$/,"")}/${Be}`;try{await vu(He,p),await wn(ve),r("open-file",He)}catch(Ae){Y("error",Ae.message)}}async function Bn(T){const ve=Ct(T),Be=await fo({title:v("vsNewFolder"),message:v("vsNewFolderName"),placeholder:"new-folder",initial:"new-folder"})??null;if(!Be)return;const He=`${ve.path.replace(/[\\/]+$/,"")}/${Be}`;try{await Wi(He,p),await wn(ve)}catch(Ae){Y("error",Ae.message)}}async function Gn(T){const ve=ne(T.path),Be=T.name,He=await fo({title:v("vsRename"),message:v("vsRenameName"),placeholder:Be,initial:Be})??null;if(!He||He===Be)return;const Ae=`${ve.replace(/[\\/]+$/,"")}/${He}`;try{await Gi(T.path,Ae,p),r("file-renamed",T.path,Ae);const Ge=M[ve];Ge&&await wn(Ge)}catch(Ge){Y("error",Ge.message)}}async function Tn(T){if(!await Rt({title:v("vsDelete"),message:`${v("vsDeleteConfirm")}「${T.name}」？`}))return;const Be=ne(T.path);try{if(await fl(T.path,p),r("file-removed",T.path),T.depth===0){C(),r("project-missing",T.path);return}const He=M[Be];He&&await wn(He)}catch(He){Y("error",He.message)}}async function yn(T){await wn(T.isDir?T:M[ne(T.path)]??T)}async function wn(T){So("list:"),T.loaded=!1,T.expanded=!0,Pe(T.path,!0),await Ee(T)}async function Qn(){So("list:");const T=he.value;if(!T)return;const ve=new Set,Be=async He=>{if(!ve.has(He.path)){ve.add(He.path),await Ee(He);for(const Ae of[...He.children]){const Ge=M[Ae];Ge?.isDir&&Ge.expanded&&!Ge.loading&&await Be(Ge)}}};await Be(T),I()}function Nn(){w()}return(T,ve)=>{const Be=Mn,He=un;return l(),c("div",{ref_key:"treeRef",ref:N,class:"vs-tree",onScrollPassive:ye,onContextmenu:ve[6]||(ve[6]=ke(Ae=>Q(Ae),["prevent"]))},[a.root&&!he.value&&j.value?(l(),c("div",rE,[ve[7]||(ve[7]=s("span",{class:"vs-tree-spin","aria-hidden":"true"},null,-1)),ue(i(o(v)("vsTreeLoading")),1)])):he.value?(l(!0),c(ie,{key:2},Re(xe.value,Ae=>(l(),c("div",{key:Ae.path,class:te(["vs-tree-row",{"is-active":Ae.path===t.activePath,"drop-target":$n.value===Ae.path}]),style:_t({paddingLeft:Ae.depth*12+6+"px"}),draggable:"true",onClick:ke(Ge=>be(Ae),["stop"]),onContextmenu:ke(Ge=>R(Ae,Ge),["prevent","stop"]),onDragstart:Ge=>Jn(Ae,Ge),onDragover:ke(Ge=>gn(Ae,Ge),["prevent"]),onDragleave:Ge=>En(Ae),onDrop:ke(Ge=>ts(Ae,Ge),["prevent"])},[s("span",{class:"vs-caret",onClick:ke(Ge=>Ve(Ae),["stop"])},[Ae.isDir?(l(),c("span",fE,i(Ae.expanded?"▾":"▸"),1)):A("",!0)],8,dE),s("span",{class:te(["vs-ico",Ae.isDir?"ico-dir":"ico-file"])},null,2),s("span",{class:"vs-name",title:Ae.path},i(Ae.name),9,pE),Ye(Ae)?(l(),c("span",{key:0,class:te(["vs-git-badge","st-"+Ye(Ae)]),title:pe(Ae)},i(ot(Ae)),11,hE)):Ce(Ae)?(l(),c("span",{key:1,class:te(["vs-git-badge","st-"+Ce(Ae)]),title:ce(Ae)},i(qe(Ae)),11,vE)):A("",!0),Ae.loading?(l(),c("span",mE,"…")):A("",!0)],46,uE))),128)):(l(),c("div",cE,i(o(v)("vsNoProject")),1)),o(Ie)?(l(),Xe(Zt,{key:3,items:U.value,x:o(rt),y:o(yt),onClose:ve[0]||(ve[0]=Ae=>Ie.value=!1)},null,8,["items","x","y"])):A("",!0),m(He,{modelValue:Ot.value,"onUpdate:modelValue":ve[2]||(ve[2]=Ae=>Ot.value=Ae),class:"vs-diff-dialog",title:o(v)("gitDiffTitle"),width:"760px","append-to-body":""},{footer:se(()=>[m(Be,{type:"primary",onClick:ve[1]||(ve[1]=Ae=>Ot.value=!1)},{default:se(()=>[ue(i(o(v)("gitDiffClose")),1)]),_:1})]),default:se(()=>[s("pre",gE,i(On.value||o(v)("gitDiffEmpty")),1)]),_:1},8,["modelValue","title"]),m(Fd,{modelValue:wt.value,"onUpdate:modelValue":ve[3]||(ve[3]=Ae=>wt.value=Ae),dir:Gt.value,onDone:at},null,8,["modelValue","dir"]),m(Rd,{modelValue:re.value,"onUpdate:modelValue":[ve[4]||(ve[4]=Ae=>re.value=Ae),Qe],dir:Gt.value},null,8,["modelValue","dir"]),m(Md,{modelValue:ct.value,"onUpdate:modelValue":[ve[5]||(ve[5]=Ae=>ct.value=Ae),et],dir:Gt.value},null,8,["modelValue","dir"])],544)}}}),_E=xt(bE,[["__scopeId","data-v-71abbe1d"]]),kE={class:"vs-tabs-wrap"},xE=["title"],CE=["title","onClick","onContextmenu"],SE={class:"vs-tab-name"},$E=["title","onClick"],EE={key:2,class:"vs-tab-dot"},DE=["onClick"],TE={key:0,class:"vs-tabs-empty"},NE=["title"],FE=vt({__name:"TabBar",props:{tabs:{},active:{}},emits:["select","close","save","closeSave","closeOthers","closeRight","closeAll"],setup(t,{emit:e}){const n=t,a=e,r=g(null),u=g(!1),h=g(!1),d=g(!1);let p=null;function w(){const F=r.value;F&&(u.value=F.scrollWidth>F.clientWidth+1,h.value=F.scrollLeft>1,d.value=F.scrollLeft+F.clientWidth<F.scrollWidth-1)}function b(F){const de=r.value;de&&de.scrollBy({left:F*Math.max(200,de.clientWidth*.7),behavior:"smooth"})}cn(()=>{p=new ResizeObserver(w),r.value&&p.observe(r.value),w()}),At(()=>{p?.disconnect(),p=null}),Je(()=>n?.tabs?.length,()=>void Tt(w));function _(F){const de=r.value;!de||de.scrollWidth<=de.clientWidth||(F.preventDefault(),de.scrollLeft+=Math.abs(F.deltaX)>Math.abs(F.deltaY)?F.deltaX:F.deltaY)}function M(F){return F.split(/[\\/]/).filter(Boolean).pop()??F}const{cmOpen:O,cmX:N,cmY:j,openMenu:H}=hn(),C=g(null);function Z(F,de){C.value=F,H(de,[])}const G=B(()=>{const F=C.value;if(!F)return[];const I=n.tabs.findIndex(he=>he.path===F.path)===n.tabs.length-1;return[{label:v("vsTabClose"),icon:"close",onClick:()=>a("close",F.path)},{label:v("vsTabCloseSave"),icon:"save",onClick:()=>a("closeSave",F.path)},{separator:!0},{label:v("vsTabCloseOthers"),icon:"close",disabled:n.tabs.length<2,onClick:()=>a("closeOthers",F.path)},{label:v("vsTabCloseRight"),icon:"close",disabled:I,onClick:()=>a("closeRight",F.path)},{label:v("vsTabCloseAll"),icon:"close",onClick:()=>a("closeAll")}]});return(F,de)=>(l(),c("div",kE,[s("button",{class:te(["vs-tab-arrow is-left",{dim:!h.value}]),title:o(v)("vsScrollLeft"),onClick:de[0]||(de[0]=I=>b(-1))},[m(oe,{name:"chevronLeft",size:13})],10,xE),s("div",{ref_key:"tabsEl",ref:r,class:"vs-tabs",onWheel:_,onScroll:w},[(l(!0),c(ie,null,Re(t.tabs,I=>(l(),c("div",{key:I.path,class:te(["vs-tab",{"is-active":I.path===t.active}]),title:I.path,onClick:he=>F.$emit("select",I.path),onContextmenu:ke(he=>Z(I,he),["prevent","stop"])},[I.icon?(l(),Xe(oe,{key:0,name:I.icon,size:12},null,8,["name"])):A("",!0),s("span",SE,i(M(I.path)),1),I.dirty?(l(),c("span",{key:1,class:te(["vs-tab-dirty",{conflict:I.conflict}]),title:I.conflict?o(v)("vsConflictBadge"):"",onClick:ke(he=>F.$emit("save",I.path),["stop"])},null,10,$E)):(l(),c("span",EE)),s("span",{class:"vs-tab-close",onClick:ke(he=>F.$emit("close",I.path),["stop"])},"×",8,DE)],42,CE))),128)),t.tabs.length?A("",!0):(l(),c("div",TE,i(o(v)("vsNoOpenFile")),1)),o(O)?(l(),Xe(Zt,{key:1,items:G.value,x:o(N),y:o(j),onClose:de[1]||(de[1]=I=>O.value=!1)},null,8,["items","x","y"])):A("",!0)],544),s("button",{class:te(["vs-tab-arrow is-right",{dim:!d.value}]),title:o(v)("vsScrollRight"),onClick:de[2]||(de[2]=I=>b(1))},[m(oe,{name:"chevronRight",size:13})],10,NE)]))}}),PE=xt(FE,[["__scopeId","data-v-3b8ef924"]]),AE="modulepreload",RE=function(t){return"/api/dsh-file-workbench/"+t},Rc={},mt=function(e,n,a){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),d=h?.nonce||h?.getAttribute("nonce");r=Promise.allSettled(n.map(p=>{if(p=RE(p),p in Rc)return;Rc[p]=!0;const w=p.endsWith(".css"),b=w?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${b}`))return;const _=document.createElement("link");if(_.rel=w?"stylesheet":AE,w||(_.as="script"),_.crossOrigin="",_.href=p,d&&_.setAttribute("nonce",d),document.head.appendChild(_),w)return new Promise((M,O)=>{_.addEventListener("load",M),_.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${p}`)))})}))}function u(h){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=h,window.dispatchEvent(d),!d.defaultPrevented)throw h}return r.then(h=>{for(const d of h||[])d.status==="rejected"&&u(d.reason);return e().catch(u)})},ME={ts:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bm),__vite__mapDeps([0,1])).then(t=>[t.javascript({typescript:!0})]),tsx:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bm),__vite__mapDeps([0,1])).then(t=>[t.javascript({typescript:!0,jsx:!0})]),js:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bm),__vite__mapDeps([0,1])).then(t=>[t.javascript()]),jsx:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bm),__vite__mapDeps([0,1])).then(t=>[t.javascript({jsx:!0})]),mjs:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bm),__vite__mapDeps([0,1])).then(t=>[t.javascript()]),cjs:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bm),__vite__mapDeps([0,1])).then(t=>[t.javascript()]),json:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bn),__vite__mapDeps([0,1])).then(t=>[t.json()]),html:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bp),__vite__mapDeps([0,1])).then(t=>[t.html()]),htm:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bp),__vite__mapDeps([0,1])).then(t=>[t.html()]),vue:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bp),__vite__mapDeps([0,1])).then(t=>[t.html()]),css:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bo),__vite__mapDeps([0,1])).then(t=>[t.css()]),scss:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bo),__vite__mapDeps([0,1])).then(t=>[t.css()]),less:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bo),__vite__mapDeps([0,1])).then(t=>[t.css()]),md:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bq),__vite__mapDeps([0,1])).then(t=>[t.markdown()]),markdown:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bq),__vite__mapDeps([0,1])).then(t=>[t.markdown()]),yaml:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.br),__vite__mapDeps([0,1])).then(t=>[t.yaml()]),yml:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.br),__vite__mapDeps([0,1])).then(t=>[t.yaml()]),xml:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bs),__vite__mapDeps([0,1])).then(t=>[t.xml()]),svg:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bs),__vite__mapDeps([0,1])).then(t=>[t.xml()]),py:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bt),__vite__mapDeps([0,1])).then(t=>[t.python()]),sql:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bu),__vite__mapDeps([0,1])).then(t=>[t.sql()]),java:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bv),__vite__mapDeps([0,1])).then(t=>[t.java()]),c:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bw),__vite__mapDeps([0,1])).then(t=>[t.cpp()]),h:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bw),__vite__mapDeps([0,1])).then(t=>[t.cpp()]),cc:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bw),__vite__mapDeps([0,1])).then(t=>[t.cpp()]),cpp:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bw),__vite__mapDeps([0,1])).then(t=>[t.cpp()]),cxx:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bw),__vite__mapDeps([0,1])).then(t=>[t.cpp()]),hpp:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bw),__vite__mapDeps([0,1])).then(t=>[t.cpp()]),rs:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bx),__vite__mapDeps([0,1])).then(t=>[t.rust()]),go:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.by),__vite__mapDeps([0,1])).then(t=>[t.go()]),php:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bz),__vite__mapDeps([0,1])).then(t=>[t.php()]),cs:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bA),__vite__mapDeps([0,1])).then(t=>[Os.define(t.csharp)]),sh:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bB),__vite__mapDeps([0,1])).then(t=>[Os.define(t.shell)]),bash:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bB),__vite__mapDeps([0,1])).then(t=>[Os.define(t.shell)]),zsh:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bB),__vite__mapDeps([0,1])).then(t=>[Os.define(t.shell)]),rb:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bC),__vite__mapDeps([0,1])).then(t=>[Os.define(t.ruby)])},OE={ts:"TypeScript",tsx:"TypeScript JSX",js:"JavaScript",jsx:"JavaScript JSX",mjs:"JavaScript",cjs:"JavaScript",json:"JSON",html:"HTML",htm:"HTML",vue:"Vue",css:"CSS",scss:"SCSS",less:"LESS",md:"Markdown",markdown:"Markdown",yaml:"YAML",yml:"YAML",xml:"XML",svg:"SVG",py:"Python",sql:"SQL",java:"Java",c:"C",h:"C/C++",cc:"C++",cpp:"C++",cxx:"C++",hpp:"C/C++",rs:"Rust",go:"Go",php:"PHP",cs:"C#",sh:"Shell",bash:"Shell",zsh:"Shell",rb:"Ruby",txt:"Plain Text"};function jd(t){const e=t.lastIndexOf(".");if(e<0)return"";const n=t.slice(e+1).toLowerCase();return n.length>0&&n.length<=10?n:""}async function LE(t){const e=ME[jd(t)];if(!e)return[];try{return await e()}catch{return[]}}function BE(t){const e=jd(t);return OE[e]??(e?e.toUpperCase():"Plain Text")}const Mc="dsh-plugin-deco-styles",IE=`
.dsh-deco-error   { text-decoration: underline wavy #f85149; text-decoration-skip-ink: none; }
.dsh-deco-warning { text-decoration: underline wavy #d29922; text-decoration-skip-ink: none; }
.dsh-deco-info    { text-decoration: underline wavy #58a6ff; text-decoration-skip-ink: none; }
.dsh-deco-hint    { text-decoration: underline dotted #8b949e; text-decoration-skip-ink: none; }
.dsh-deco-deprecated { text-decoration: line-through; opacity: .7; }
.dsh-deco-highlight { background: rgba(187,128,9,0.25); }
.dsh-deco-widget { color: var(--dsh-fg-dim, #8b949e); font-style: italic; opacity: .85; padding-left: 8px; }
.cm-gutter-marker { cursor: default; }
.cm-gutter-marker.dsh-deco-bookmark { color: #e3b341; font-weight: 700; }
`;function jE(){if(typeof document>"u"||document.getElementById(Mc))return;const t=document.createElement("style");t.id=Mc,t.textContent=IE,document.head.appendChild(t)}function VE(t){return[t.category?`dsh-deco-${t.category}`:"",t.className].filter(Boolean).join(" ")}function ol(t,e,n){return Math.max(e,Math.min(n,t))}function zi(t,e,n=!1){if(typeof e.offset=="number")return ol(e.offset,0,t.length);const a=ol(e.line??1,1,t.lines),r=t.line(a);return e.character==null?n?r.to:r.from:ol(r.from+Math.max(0,e.character-1),r.from,r.to)}class Nr extends Jf{constructor(e,n,a){super(),this.elementClass=e,this.ch=n,this.tip=a}toDOM(){const e=document.createElement("div");return e.className=this.elementClass,e.textContent=this.ch,this.tip&&(e.title=this.tip),e}eq(e){return e instanceof Nr&&this.elementClass===e.elementClass&&this.ch===e.ch&&this.tip===e.tip}}class Fr extends Yf{constructor(e){super(),this.text=e}eq(e){return e instanceof Fr&&e.text===this.text}toDOM(){const e=document.createElement("span");return e.className="dsh-deco-widget",e.textContent=this.text,e}destroy(){}}const sl=Gf.define();function Oc(t,e){const n=t.doc,a=[];for(const u of e){if(u.type!=="gutter")continue;const h=zi(n,u.start),d=n.lineAt(h),p=`cm-gutter-marker${u.category?` dsh-deco-${u.category}`:""}${u.className?` ${u.className}`:""}`,w=u.category==="bookmark"?"●":u.message?.[0]??"•";a.push({from:d.from,to:d.to,marker:new Nr(p.trim(),w,u.message)})}a.sort((u,h)=>u.from-h.from||u.to-h.to);const r=new nu;for(const u of a)r.add(u.from,u.to,u.marker);return r.finish()}function zE(t){jE();let e=t;const n=qf.fromClass(class{decorations;constructor(r){this.decorations=Lc(r.state.doc,e)}update(r){(r.docChanged||r.viewportChanged||r.transactions.some(u=>u.effects.some(h=>h.is(sl))))&&(this.decorations=Lc(r.view.state.doc,e))}},{decorations:r=>r.decorations}),a=Kf.define({create:r=>Oc(r,e),update(r,u){return u.docChanged||u.effects.some(h=>h.is(sl))?Oc(u.state,e):r},provide:r=>Xf.compute([r],u=>u.field(r))});return{extension:[n,a],setItems(r){return e=r??[],sl.of(null)}}}function Lc(t,e){const n=[];for(const r of e)if(r.type==="mark"){const u=zi(t,r.start),h=r.end?zi(t,r.end):t.lineAt(u).to;if(h<u)continue;n.push({from:u,to:h,deco:zr.mark({class:VE(r),title:r.message})})}else if(r.type==="widget"){const u=zi(t,r.start,!0);n.push({from:u,to:u,deco:zr.widget({widget:new Fr(r.message??""),side:1})})}n.sort((r,u)=>r.from-u.from||r.to-u.to);const a=new nu;for(const r of n)a.add(r.from,r.to,r.deco);return a.finish()}const Vd="\0",zd="";function Ud(t,e){const n=[];return[t.replace(e,r=>(n.push(r),`${Vd}${n.length-1}${zd}`)),n]}function Gl(t,e){return t.replace(new RegExp(`${Vd}(\\d+)${zd}`,"g"),(n,a)=>e[Number(a)]??"")}function UE(t){if(!t.includes("{"))return null;const[e,n]=Ud(t,/\/\*[\s\S]*?\*\/|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g);if(e.includes("/*"))return null;const a=(e.match(/{/g)??[]).length,r=(e.match(/}/g)??[]).length;if(a===0||a!==r)return null;const u=e.replace(/\s+/g," ").replace(/\s*([{};])\s*/g,"$1").trim(),h=[];let d="",p=0;const w=()=>"  ".repeat(p),b=_=>{const M=_.trim();M&&h.push(w()+M)};for(const _ of u)if(_==="{")b(`${d} {`),d="",p+=1;else if(_==="}"){if(b(d),p-=1,b("}"),d="",p<0)return null}else _===";"?(b(`${d};`),d=""):_===","?(b(`${d},`),d=""):d+=_;return b(d),p!==0?null:Gl(h.join(`
`),n)}const HE=new Set(["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"]);function WE(t,e){if(/<\s*(script|style|pre|textarea)\b/i.test(t))return null;const[n,a]=Ud(t,/<!--[\s\S]*?-->|<!\[CDATA\[[\s\S]*?\]\]>/g);if(n.includes("<!--"))return null;const r=[];let u=0;const h=/<[a-zA-Z!/][^>]*>/g;for(let _=h.exec(n);_;_=h.exec(n))_.index>u&&r.push({text:n.slice(u,_.index)}),r.push({tag:_[0]}),u=_.index+_[0].length;u<n.length&&r.push({text:n.slice(u)});const d=_=>_.replace(/^<\/?/,"").replace(/[\s/>].*$/s,"").toLowerCase(),p=[],w=[],b=(_,M)=>{const O=Gl(M,a).replace(/\s+/g," ").trim();O&&p.push("  ".repeat(Math.max(0,_))+O)};for(let _=0;_<r.length;_+=1){const M=r[_];if(M.text!==void 0){M.text.trim()&&b(w.length,M.text);continue}const O=M.tag,N=d(O),j=O.startsWith("</"),H=O.endsWith("/>")||e&&HE.has(N);if(j){if(w.pop()!==N)return null;b(w.length,O);continue}const C=r[_+1],Z=r[_+2];if(!H&&C?.text!==void 0&&Z?.tag!==void 0&&d(Z.tag)===N&&Z.tag.startsWith("</")){const G=`${O}${C.text}${Z.tag}`;if(Gl(G,a).replace(/\s+/g," ").trim().length<=80){b(w.length,G),_+=2;continue}}b(w.length,O),H||w.push(N)}return w.length!==0?null:p.join(`
`)}const GE={key:0,class:"vs-find"},qE={class:"vs-find-row"},KE=["placeholder","onKeydown"],XE={class:"vs-find-count"},YE=["title"],JE=["title"],QE=["title"],ZE=["title"],e8=["title"],t8=["title"],n8=["title"],o8={key:0,class:"vs-find-row"},s8=["placeholder","onKeydown"],i8=["title"],a8=["title"];let ys=null;const l8=Qf.highest(Zf.of([{key:"Mod-f",run:()=>(ys?.openFind(!1),!0)},{key:"Mod-h",run:()=>(ys?.openFind(!0),!0)},{key:"Escape",run:()=>ys?.closeFind()??!1}]));function r8(){const t=document.createElement("div");return t.className="vs-minimap",t}const vs=new Map,Hd=new Set;function c8(t){const e=Bd(t),n=vs.get(e);if(n){try{n.view.destroy()}catch{}vs.delete(e)}Hd.add(e)}typeof window<"u"&&(window.__dshFWDisposeEditorSlotByTabId=c8);const u8=vt({__name:"CodeEditor",props:{path:{},slot:{},initialContent:{},docRev:{},readonly:{type:Boolean},dark:{type:Boolean},initialView:{}},emits:["change","cursor","view","contextmenu"],setup(t,{expose:e,emit:n}){const a=t,r=n;function u($){r("contextmenu",{x:$.clientX,y:$.clientY})}const h=g(null),d=Bf(null),p=new ls,w=new ls,b=new ls,_=new ls,M=new ls,O=new ls;let N=0,j=null;const H=g(!1),C=g(!1),Z=g(""),G=g(""),F=g(!1),de=g(!1),I=g(!1),he=g(0),xe=g(-1),ge=g(null),ne=B(()=>Z.value?he.value===0?v("vsFindNoMatch"):`${xe.value<0?"?":xe.value}/${he.value}`:"");function ae(){return new Hr({search:Z.value,replace:G.value,caseSensitive:F.value,regexp:de.value,wholeWord:I.value})}function Ee(){const $=d.value;$&&($.dispatch({effects:Ur.of(ae())}),Ve())}function Ve(){const $=d.value;if(!$||!Z.value){he.value=0,xe.value=-1;return}const q=ae(),Te=$.state.selection.main.head;let re=0,ct=-1;const wt=q.getCursor($.state.doc);for(let Ot=wt.next();!Ot.done;Ot=wt.next())re+=1,ct<0&&Ot.value.from>=Te&&(ct=re);ct<0&&re>0&&(ct=1),he.value=re,xe.value=ct}function be(){const $=d.value;$&&ep($),Ve()}function Pe(){const $=d.value;$&&tp($),Ve()}function W($){$?Pe():be()}function J(){const $=d.value;$&&np($),Ve()}function z(){const $=d.value;$&&op($),Ve()}function ee($){$==="case"?F.value=!F.value:$==="re"?de.value=!de.value:I.value=!I.value,Ee()}function ye($){H.value=!0,$&&(C.value=!0);const q=d.value;if(q){const Te=q.state.selection.main;if(!Te.empty&&Te.to-Te.from<=200){const re=q.state.doc.sliceString(Te.from,Te.to);re.includes(`
`)||(Z.value=re)}}Ee(),Tt(()=>ge.value?.select())}function je(){const $=H.value;H.value=!1,C.value=!1,he.value=0,xe.value=-1;const q=d.value;return q&&$&&q.dispatch({effects:Ur.of(new Hr({search:""}))}),q?.focus(),$}const Ke=a.slot??0,Ze=Id(Ke);function we(){const $=d.value;$&&r("view",{scrollTop:$.scrollDOM.scrollTop,anchor:$.state.selection.main.head})}function _e($){const q=$;if(q.docChanged&&(r("change",q.state.doc.toString()),a.path&&Ze.set(a.path,q.state),H.value&&Ve(),iE(a.slot??0,q.state.doc.toString(),q.changes)),q.selectionSet||q.docChanged){const Te=q.state.selection.main.head,re=q.state.doc.lineAt(Te);r("cursor",re.number,Te-re.from+1),we(),aE(a.slot??0,q.state.selection)}}function Ye(){return lp.of({create:()=>({dom:r8()}),displayText:"blocks"})}function ot($){const q=Math.max(0,Math.min($.length,a.initialView?.anchor??0));return $i.create({doc:$,selection:{anchor:q},extensions:[ip,ap(),l8,M.of(Ue.vsMinimap?Ye():[]),p.of([]),w.of(a.dark?Ua:[]),b.of($i.readOnly.of(!!a.readonly)),_.of(as.editable.of(!a.readonly)),O.of([]),as.updateListener.of(Te=>tE(a.slot??0)?.(Te))]})}function pe($){const q=Ze.get($);if(q)return q;const Te=ot(a.initialContent??"");return Ze.set($,Te),Te}async function Ce(){const $=N,q=await LE(a.path);$!==N||!d.value||d.value.dispatch({effects:p.reconfigure(q)})}function qe($){const q=a.initialView?.scrollTop??0;q>0&&requestAnimationFrame(()=>{d.value===$&&($.scrollDOM.scrollTop=q)})}function ce($){$.dispatch({effects:[w.reconfigure(a.dark?Ua:[]),b.reconfigure($i.readOnly.of(!!a.readonly)),_.reconfigure(as.editable.of(!a.readonly)),M.reconfigure(Ue.vsMinimap?Ye():[])]})}function Ie(){const $=h.value;if(!$)return;const q=vs.get(Ke);if(q&&q.view.dom&&q.path===a.path){const re=q.view;N++,d.value=re,Ai(Ke,re),vs.delete(Ke),$.appendChild(re.dom),ce(re),qe(re),j=()=>we(),re.scrollDOM.addEventListener("scroll",j,{passive:!0}),Le(a.path),requestAnimationFrame(()=>{d.value===re&&re.requestMeasure()}),Ce();return}if(q){try{q.view.destroy()}catch{}vs.delete(Ke)}N++;const Te=new as({state:pe(a.path),parent:$});d.value=Te,Ai(Ke,Te),ce(Te),qe(Te),j=()=>we(),Te.scrollDOM.addEventListener("scroll",j,{passive:!0}),Ce()}function rt($,q){const Te=d.value;if(Te){if($&&$!==q){let re=!0;try{re=Dr(Ke).state.openTabs.includes($)}catch{}re?Ze.set($,Te.state):Ze.delete($)}N++,Te.setState(pe(q)),ce(Te),qe(Te),Le(q),Ce()}}function yt(){const $=d.value;$&&j&&$.scrollDOM.removeEventListener("scroll",j),j=null}function ut(){d.value?.focus()}const it=new Map;function Le($){const q=d.value;q&&q.dispatch({effects:O.reconfigure(it.get($)??[])})}function U($){a.path&&(it.set(a.path,$),Le(a.path))}const R=new Map;function Q($){const q=a.path;if(!q)return;const Te=d.value;if(!Te)return;if($===null){R.delete(q),it.delete(q),Le(q);return}let re=R.get(q)??null;if(!re){re=zE($),R.set(q,re),it.set(q,re.extension),Le(q);return}Te.dispatch({effects:re.setItems($)})}function De($){const q=d.value;if(!q)return;const Te=q.state.doc,re=Te.line(Math.max(1,Math.min(Te.lines,$)));q.dispatch({selection:{anchor:re.from,head:re.to},effects:as.scrollIntoView(re.from,{y:"center"})}),q.focus(),requestAnimationFrame(()=>{const ct=q.domAtPos(re.from).node,wt=ct instanceof HTMLElement?ct.closest?.(".cm-line"):null;wt&&(wt.classList.add("cm-flash-line"),window.setTimeout(()=>wt.classList.remove("cm-flash-line"),1200))})}function L($){if(a.path.slice(a.path.lastIndexOf(".")).toLowerCase()!==".json")return null;try{return JSON.stringify(JSON.parse($),null,2)}catch{return null}}function D($){return[".css",".scss",".less"].includes($)?UE:[".html",".htm",".xhtml",".xml",".svg",".vue"].includes($)?q=>WE(q,$!==".xml"&&$!==".svg"):null}function K(){const $=d.value;if(!$||a.readonly)return!1;const q=$.state.doc.toString(),Te=a.path.slice(a.path.lastIndexOf(".")).toLowerCase();if(Te===".json"){const re=L(q);if(re!==null)return re===q||$.dispatch({changes:{from:0,to:q.length,insert:re}}),!0}else{const re=D(Te)?.(q);if(re!=null)return re===q||$.dispatch({changes:{from:0,to:q.length,insert:re}}),!0}return $.dispatch({selection:{anchor:0,head:q.length}}),sp($),!0}return e({focus:ut,format:K,revealLine:De,openFind:ye,setExtension:U,setDecorationsSpec:Q}),cn(()=>{Pc(a.slot??0,_e),ys={openFind:$=>ye($),closeFind:()=>je()},Ie()}),At(()=>{if(Pc(Ke,null),ys&&(ys=null),yt(),Hd.has(Ke)){d.value?.destroy(),d.value=null,Ai(Ke,null);return}d.value&&vs.set(Ke,{view:d.value,path:a.path}),Ai(Ke,null),d.value=null}),Je(()=>a.path,($,q)=>{$&&(q&&q!==$?rt(q,$):q||Ie())}),Je(()=>a.docRev,()=>{if(!a.path)return;Ze.delete(a.path);const $=d.value;$&&(N++,$.setState(ot(a.initialContent??"")),qe($),Ce())}),Je(()=>a.readonly,()=>{d.value?.dispatch({effects:[b.reconfigure($i.readOnly.of(!!a.readonly)),_.reconfigure(as.editable.of(!a.readonly))]})}),Je(()=>a.dark,()=>{d.value?.dispatch({effects:w.reconfigure(a.dark?Ua:[])})}),Je(()=>Ue.vsMinimap,()=>{d.value?.dispatch({effects:M.reconfigure(Ue.vsMinimap?Ye():[])})}),($,q)=>(l(),c("div",{class:"vs-ce-root",onContextmenu:ke(u,["prevent","stop"])},[s("div",{ref_key:"hostRef",ref:h,class:"vs-code-editor"},null,512),H.value?(l(),c("div",GE,[s("div",qE,[kt(s("input",{ref_key:"findInputRef",ref:ge,"onUpdate:modelValue":q[0]||(q[0]=Te=>Z.value=Te),class:"vs-find-input",placeholder:o(v)("vsFindPlaceholder"),onInput:Ee,onKeydown:[q[1]||(q[1]=bt(ke(Te=>W(Te.shiftKey),["prevent"]),["enter"])),bt(ke(je,["prevent"]),["esc"])]},null,40,KE),[[Lt,Z.value]]),s("span",XE,i(ne.value),1),s("button",{class:te(["vs-find-btn",{on:F.value}]),title:o(v)("vsGrepCase"),onClick:q[2]||(q[2]=Te=>ee("case"))},"Aa",10,YE),s("button",{class:te(["vs-find-btn",{on:de.value}]),title:o(v)("vsGrepRegex"),onClick:q[3]||(q[3]=Te=>ee("re"))},".*",10,JE),s("button",{class:te(["vs-find-btn",{on:I.value}]),title:o(v)("vsFindWord"),onClick:q[4]||(q[4]=Te=>ee("word"))},"|w|",10,QE),q[7]||(q[7]=s("span",{class:"vs-find-vsep"},null,-1)),s("button",{class:"vs-find-btn",title:o(v)("vsFindPrev"),onClick:Pe},"↑",8,ZE),s("button",{class:"vs-find-btn",title:o(v)("vsFindNext"),onClick:be},"↓",8,e8),s("button",{class:te(["vs-find-btn",{on:C.value}]),title:o(v)("vsFindToggleReplace"),onClick:q[5]||(q[5]=Te=>C.value=!C.value)},"⇅",10,t8),s("button",{class:"vs-find-btn",title:o(v)("vsFindClose"),onClick:je},"×",8,n8)]),C.value?(l(),c("div",o8,[kt(s("input",{"onUpdate:modelValue":q[6]||(q[6]=Te=>G.value=Te),class:"vs-find-input",placeholder:o(v)("vsReplacePlaceholder"),onKeydown:[bt(ke(J,["prevent"]),["enter"]),bt(ke(je,["prevent"]),["esc"])]},null,40,s8),[[Lt,G.value]]),s("button",{class:"vs-find-btn",title:o(v)("vsFindReplace"),onClick:J},"⏎",8,i8),s("button",{class:"vs-find-btn",title:o(v)("vsFindReplaceAll"),onClick:z},"≡",8,a8)])):A("",!0)])):A("",!0)],32))}}),d8=xt(u8,[["__scopeId","data-v-2918732d"]]),f8={class:"fsp"},p8={class:"fsp-bar"},h8=["title"],v8=["disabled"],m8=["disabled"],g8={key:0,class:"fsp-newrow"},y8=["placeholder"],w8=["disabled"],b8={key:1,class:"fsp-error"},_8={class:"fsp-main"},k8={class:"fsp-side"},x8={class:"fsp-group"},C8={class:"fsp-group-title"},S8=["title","onClick"],$8={class:"fsp-side-name"},E8={key:0,class:"fsp-side-empty"},D8={class:"fsp-group"},T8={class:"fsp-group-title"},N8=["title","onClick"],F8={class:"fsp-side-name"},P8={key:0,class:"fsp-side-empty"},A8={key:0,class:"fsp-group"},R8={class:"fsp-group-title"},M8=["title","onClick"],O8=["title"],L8={class:"fsp-side-name"},B8={class:"fsp-content"},I8={key:0,class:"fsp-crumbs"},j8={key:0,class:"fsp-sep"},V8=["onClick"],z8={class:"fsp-list"},U8={key:0,class:"fsp-loading"},H8={key:1,class:"fsp-error"},W8=["onClick","onDblclick"],G8={class:"fsp-name"},q8={key:0,class:"fsp-empty"},K8={key:2,class:"fsp-namerow"},X8={class:"fsp-namelabel"},Y8=["placeholder"],J8=["title"],Q8={value:""},Z8=["value"],e6={key:4,class:"fsp-manual"},t6=["placeholder"],n6=["disabled"],o6={class:"fsp-foot"},s6={class:"fsp-hint"},i6=["disabled"],a6=["disabled","title"],il="vscode",ca=vt({__name:"PathPickerDialog",props:{modelValue:{type:Boolean},mode:{},initialDir:{},initialName:{}},emits:["update:modelValue","confirm"],setup(t,{emit:e}){const n=t,a=e,r=B({get:()=>n.modelValue,set:L=>a("update:modelValue",L)}),u=B(()=>n.mode==="file"),h=B(()=>u.value?v("vsSaveAsTitle"):v("vsPickFolderTitle")),d=g(null),p=g(!1),w=g(void 0),b=g(""),_=g(!1),M=g(""),O=g(null),N=g(!1),j=g(void 0),H=g(""),C=g(""),Z=g(null),G=g([]),F=B(()=>d.value?.crumbs??[]),de=B(()=>d.value?.entries??[]),I=B(()=>d.value?.path||null),he=B(()=>{const L=de.value;return!u.value||!C.value?L:L.filter(D=>D.isDir||D.name.toLowerCase().endsWith(C.value))}),xe=B(()=>{const L=n.initialName??"",D=L.lastIndexOf(".");return D>0?L.slice(D).toLowerCase():""}),ge=B(()=>{const L=H.value.trim().toLowerCase();return L?de.value.some(D=>!D.isDir&&D.name.toLowerCase()===L):!1}),ne=B(()=>{const L=H.value.trim();return L?ee(L)?L:ye(I.value,L):""}),ae=B(()=>{const L=H.value.trim();return!L||/[\\/]$/.test(L)?!1:ee(L)||!!I.value}),Ee=B(()=>G.value.filter(L=>L.type==="drive")),Ve=new Set(["pictures","music","videos","gallery"]),be=B(()=>G.value.filter(L=>L.type!=="drive"&&L.type!=="recycle"&&!Ve.has(L.type)&&!!L.path));function Pe(L){const D=Zi(L.id),K=D==="online"?v("sshStatusOnline"):D==="offline"?v("sshStatusOffline"):"",$=D==="offline"?Cl(L.id):"";return K&&$?`${K}：${$}`:K||`${L.user}@${L.host}:${L.port||22}`}function W(L){switch(L.type){case"drive":return md(L);case"home":return v("navHome");case"desktop":return v("desktopEntry");case"download":return v("downloadEntry");case"documents":return v("documentEntry");case"pictures":return v("pictureEntry");case"music":return v("musicEntry");case"videos":return v("videoEntry");case"gallery":return v("navGallery");case"workspace":return v("workspaceEntry");default:return L.name}}function J(L){switch(L.type){case"home":return"ico-home";case"desktop":return"ico-desktop";case"download":return"ico-download";case"documents":return"ico-doc";case"pictures":case"gallery":return"ico-pic";case"music":return"ico-music";case"videos":return"ico-video";case"workspace":return"ico-folder";default:return"ico-dir"}}function z(){return window.__DSH_FILE_WORKBENCH__}function ee(L){return/^[a-zA-Z]:[\\/]/.test(L)||L.startsWith("/")||L.startsWith("\\\\")||Wt(L)}function ye(L,D){if(!L)return D;if(Wt(L))return hc(L,D);const K=L.includes("\\")?"\\":"/";return`${L.replace(/[\\/]+$/,"")}${K}${D}`}const je=B(()=>!!I.value&&Wt(I.value)),Ke=B(()=>je.value?!0:F.value.length>=2);function Ze(L){const D=L.replace(/\\/g,"/").replace(/\/+$/,"");if(!D)return[];const K=/^[A-Za-z]:/.test(D),$=D.split("/").filter(Boolean),q=[];if(K){const re=$.shift();q.push({name:re,path:`${re}/`,hidden:!1})}let Te=K?`${q[0].path.replace(/\/$/,"")}`:"";for(const re of $)Te=`${Te}/${re}`,q.push({name:re,path:Te,hidden:!1});return q}async function we(){const L=await pu();return{path:"",home:"",crumbs:[],entries:(L.drives??[]).map(D=>({name:Uo(D),path:D.path,hidden:!1,isDir:!0}))}}async function _e(L){if(!L)return await we();const D=await Bi(L);return{path:L,home:"",crumbs:Ze(L),entries:(D.entries??[]).filter(K=>K.isDir&&!K.hidden).sort((K,$)=>K.name.localeCompare($.name,"zh")).map(K=>({name:K.name,path:K.path,hidden:!!K.hidden,isDir:!0}))}}async function Ye(L){if(!L)return await we();const K=((await Bi(L)).entries??[]).map($=>({name:$.name,path:$.path,hidden:!!$.hidden,isDir:!!$.isDir})).sort(($,q)=>$.isDir===q.isDir?$.name.localeCompare(q.name,"zh"):$.isDir?-1:1);return{path:L,home:"",crumbs:Ze(L),entries:K}}async function ot(L){const K=((await Bi(L,il)).entries??[]).filter(q=>(u.value?!0:q.isDir)&&!q.hidden).sort((q,Te)=>u.value&&q.isDir!==Te.isDir?Number(Te.isDir)-Number(q.isDir):q.name.localeCompare(Te.name,"zh")).map(q=>({name:q.name,path:q.path,hidden:!!q.hidden,isDir:!!q.isDir})),$=(qu(L)??[{name:L,path:L}]).map(q=>({name:q.name,path:q.path,hidden:!1}));return{path:L,home:"",crumbs:$,entries:K}}async function pe(L){p.value=!0,w.value=void 0,O.value=null;try{if(L&&Wt(L)){d.value=await ot(L);return}if(u.value){d.value=await Ye(L);return}const D=z();if(D?.listDirectory){const K=await D.listDirectory(L);d.value={path:K.path,home:K.home,crumbs:K.crumbs??[],entries:(K.entries??[]).map($=>({name:$.name,path:$.path,hidden:!!$.hidden,isDir:!0}))};return}d.value=await _e(L)}catch(D){d.value=null,w.value=D.message}finally{p.value=!1}}function Ce(L){!L||L===I.value||pe(L)}function qe(L){O.value=L.path,u.value&&!L.isDir&&(H.value=L.name)}function ce(L){if(L.isDir){if(L.path===I.value)return;pe(L.path);return}u.value&&(H.value=L.name,Le())}function Ie(L){L!==I.value&&pe(L===""?void 0:L)}function rt(){const L=I.value;if(!L)return;if(Wt(L)){const $=ta(L);pe($||void 0);return}const D=F.value;if(D.length<2)return;const K=D[D.length-2];pe(K.hidden?void 0:K.path)}function yt(){_.value=!_.value,j.value=void 0,_.value&&(M.value="")}async function ut(){const L=M.value.trim(),D=I.value;if(!(!L||!D)){N.value=!0,j.value=void 0;try{const K=z();Wt(D)?await Wi(hc(D,L),il):K?.createDirectory?await K.createDirectory(D,L):await Wi(`${D.replace(/[\\/]+$/,"")}/${L}`),_.value=!1,M.value="",await pe(D)}catch(K){j.value=K.message}finally{N.value=!1}}}function it(){const L=O.value||I.value;L&&(a("confirm",L),r.value=!1)}function Le(){if(!ae.value)return;const L=ne.value;L&&(a("confirm",L),r.value=!1)}function U(){const L=b.value.trim();L&&(a("confirm",L),r.value=!1)}async function R(){Xo();try{const L=await fu(il);G.value=L.items??[]}catch{G.value=[]}}function Q(){w.value=void 0,j.value=void 0,_.value=!1,M.value="",b.value=n.initialDir??"",H.value=n.initialName??"",C.value="",R(),pe(n.initialDir||void 0),u.value&&Tt(()=>{const L=Z.value;L&&(L.focus(),L.setSelectionRange(0,xe.value?L.value.length-xe.value.length:L.value.length))})}function De(){d.value=null,b.value="",H.value="",C.value=""}return(L,D)=>{const K=un;return l(),Xe(K,{modelValue:r.value,"onUpdate:modelValue":D[7]||(D[7]=$=>r.value=$),title:h.value,width:"720px","append-to-body":"",class:"fsp-dialog",onOpen:Q,onClosed:De},{footer:se(()=>[s("div",o6,[s("span",s6,i(u.value?o(v)("vsSaveAsHint"):o(v)("vsPickEnterHint")),1),D[10]||(D[10]=s("span",{class:"fsp-foot-spacer"},null,-1)),s("button",{class:"fsp-btn",onClick:D[6]||(D[6]=$=>r.value=!1)},i(o(v)("vsCancel")),1),u.value?(l(),c("button",{key:0,class:"fsp-btn primary",disabled:!ae.value,onClick:Le},i(o(v)("vsSave")),9,i6)):(l(),c("button",{key:1,class:"fsp-btn primary",disabled:!O.value&&!I.value||p.value,title:O.value||I.value||void 0,onClick:it},i(o(v)("vsPickConfirm")),9,a6))])]),default:se(()=>[s("div",f8,[s("div",p8,[s("div",{class:"fsp-path",title:I.value||void 0},i(I.value||o(v)("vsComputer")),9,h8),s("button",{class:"fsp-btn sm",disabled:p.value||!Ke.value,onClick:rt},i(o(v)("vsUp")),9,v8),s("button",{class:"fsp-btn sm",disabled:p.value||!I.value,onClick:yt},i(o(v)("vsNewFolderBtn")),9,m8)]),_.value?(l(),c("div",g8,[kt(s("input",{"onUpdate:modelValue":D[0]||(D[0]=$=>M.value=$),class:"fsp-input",placeholder:o(v)("vsNewFolderName"),onKeyup:[bt(ut,["enter"]),D[1]||(D[1]=bt($=>_.value=!1,["esc"]))]},null,40,y8),[[Lt,M.value]]),s("button",{class:"fsp-btn primary sm",disabled:N.value||!M.value.trim(),onClick:ut},i(o(v)("confirmOk")),9,w8),s("button",{class:"fsp-btn sm",onClick:D[2]||(D[2]=$=>_.value=!1)},i(o(v)("vsCancel")),1)])):A("",!0),j.value?(l(),c("div",b8,i(j.value),1)):A("",!0),s("div",_8,[s("div",k8,[s("div",x8,[s("div",C8,i(o(v)("myComputer")),1),(l(!0),c(ie,null,Re(Ee.value,$=>(l(),c("div",{key:$.path,class:te(["fsp-side-row",{active:$.path===I.value}]),title:$.path,onClick:q=>Ce($.path)},[D[8]||(D[8]=s("span",{class:"fsp-ico ico-drive"},null,-1)),s("span",$8,i(W($)),1)],10,S8))),128)),Ee.value.length===0?(l(),c("div",E8,i(o(v)("vsLoading")),1)):A("",!0)]),s("div",D8,[s("div",T8,i(o(v)("vsQuickAccess")),1),(l(!0),c(ie,null,Re(be.value,$=>(l(),c("div",{key:$.type+$.path,class:te(["fsp-side-row",{active:$.path===I.value}]),title:$.path,onClick:q=>Ce($.path)},[s("span",{class:te(["fsp-ico",J($)])},null,2),s("span",F8,i(W($)),1)],10,N8))),128)),be.value.length===0?(l(),c("div",P8,i(o(v)("vsEmptyDir")),1)):A("",!0)]),o(rn).length>0?(l(),c("div",A8,[s("div",R8,i(o(v)("sshNavGroup")),1),(l(!0),c(ie,null,Re(o(rn),$=>(l(),c("div",{key:$.id,class:te(["fsp-side-row",{active:o(Go)($.id)===I.value}]),title:`${$.user}@${$.host}:${$.port||22}`,onClick:q=>Ce(o(Go)($.id))},[s("span",{class:te(["fsp-dot",`dot-${o(Zi)($.id)}`]),title:Pe($)},null,10,O8),D[9]||(D[9]=s("span",{class:"fsp-ico ico-globe"},null,-1)),s("span",L8,i($.name||`${$.user}@${$.host}`),1)],10,M8))),128))])):A("",!0)]),s("div",B8,[F.value.length>1?(l(),c("div",I8,[(l(!0),c(ie,null,Re(F.value,($,q)=>(l(),c(ie,{key:$.path+"#"+q},[q>0?(l(),c("span",j8,"›")):A("",!0),s("span",{class:te(["fsp-crumb",{active:q===F.value.length-1}]),onClick:Te=>Ie($.path)},i($.name),11,V8)],64))),128))])):A("",!0),s("div",z8,[p.value?(l(),c("div",U8,i(o(v)("vsLoading")),1)):w.value?(l(),c("div",H8,i(w.value),1)):(l(),c(ie,{key:2},[(l(!0),c(ie,null,Re(he.value,$=>(l(),c("div",{key:$.path,class:te(["fsp-row",{dim:$.hidden,selected:$.path===O.value}]),onClick:q=>qe($),onDblclick:q=>ce($)},[s("span",{class:te(["fsp-ico",$.isDir?"ico-dir":"ico-file"])},null,2),s("span",G8,i($.name),1)],42,W8))),128)),he.value.length===0?(l(),c("div",q8,i(o(v)("vsEmptyDir")),1)):A("",!0)],64))])])]),u.value?(l(),c("div",K8,[s("span",X8,i(o(v)("vsFileName")),1),kt(s("input",{ref_key:"nameInputRef",ref:Z,"onUpdate:modelValue":D[3]||(D[3]=$=>H.value=$),class:"fsp-input",placeholder:o(v)("vsFileNamePlaceholder"),onKeyup:bt(Le,["enter"])},null,40,Y8),[[Lt,H.value]]),kt(s("select",{"onUpdate:modelValue":D[4]||(D[4]=$=>C.value=$),class:"fsp-input fsp-select",title:o(v)("vsFileType")},[s("option",Q8,i(o(v)("vsFilterAll")),1),xe.value?(l(),c("option",{key:0,value:xe.value},i(o(v)("vsFilterExt",{ext:xe.value})),9,Z8)):A("",!0)],8,J8),[[If,C.value]])])):A("",!0),u.value?(l(),c("div",{key:3,class:te(["fsp-hintline",{warn:ge.value}])},[ge.value?(l(),c(ie,{key:0},[ue(i(o(v)("vsSaveAsExists")),1)],64)):(l(),c(ie,{key:1},[ue(i(ne.value||o(v)("vsSaveAsHint")),1)],64))],2)):A("",!0),u.value?A("",!0):(l(),c("div",e6,[kt(s("input",{"onUpdate:modelValue":D[5]||(D[5]=$=>b.value=$),class:"fsp-input",placeholder:o(v)("vsFolderPath"),onKeyup:bt(U,["enter"])},null,40,t6),[[Lt,b.value]]),s("button",{class:"fsp-btn sm",disabled:!b.value.trim(),onClick:U},i(o(v)("vsPickInput")),9,n6)]))])]),_:1},8,["modelValue","title"])}}}),l6={key:0,class:"vs-gitbar"},r6={class:"vs-gitbar-head"},c6=["title"],u6={class:"vs-gitbar-title"},d6={key:0,class:"vs-gitbar-count"},f6=["title"],p6={class:"vs-gitbar-list"},h6={key:0,class:"vs-gitbar-empty"},v6={key:1,class:"vs-gitbar-empty"},m6=["title","onClick"],g6=["width"],y6=["x1","x2","stroke"],w6=["x1","x2","y2","stroke"],b6=["x1","y1","x2","stroke"],_6=["d","stroke"],k6=["cx","cy","r","fill","stroke"],x6={key:1,class:"vs-gitbar-dot","aria-hidden":"true"},C6={class:"vs-gitbar-subject"},S6={key:2,class:"vs-gitbar-refs"},$6={class:"vs-gitbar-meta"},E6={key:0,class:"vs-gitbar-files"},D6={key:0,class:"vs-gitbar-empty"},T6={key:0,class:"vs-gitbar-empty"},N6=["title"],F6={class:"name"},P6={class:"dir"},A6=["title","onClick"],ao=24,Vo=6,R6=vt({__name:"VSGitBar",emits:["open-diff"],setup(t,{emit:e}){const n=tr(Aa)??Tr(),a=g(null),r=B(()=>a.value!==null),u=g(""),h=g(""),d=g([]),p=g(!1);function w(W){return W*Eo+Eo/2}function b(W,J){const z=ao/2,ee=ao*.82;return`M ${w(W)} ${z} C ${w(W)} ${ee}, ${w(J)} ${ee}, ${w(J)} ${ao}`}function _(W){return W.commit.refs.some(J=>J.kind==="head")}const M=B(()=>a.value==="git"?Ad(d.value).map(W=>({commit:W.commit,graph:W})):d.value.map(W=>({commit:W}))),O=g(""),N=gt({}),j=gt({});function H(W){return N[W]??[]}function C(W){const J=Math.max(W.lastIndexOf("/"),W.lastIndexOf("\\"));return J>=0?W.slice(J+1):W}function Z(W){const J=Math.max(W.lastIndexOf("/"),W.lastIndexOf("\\"));return J>=0?W.slice(0,J):""}function G(W){if(O.value===W.hash){O.value="";return}O.value=W.hash,be(W)}const F=e;async function de(W,J){let z=[];try{if(a.value==="git"){const ee=await Gs(u.value,["show","--no-color","--format=",W.hash,"--",J.path]);z=ee.code===0&&ee.stdout.trim()?ee.stdout.split(`
`):[]}else z=await I(W.hash,J.path)}catch{z=[]}F("open-diff",{title:`${C(J.path)} · ${W.short}`,lines:z})}async function I(W,J){const z=W.replace(/^r/,""),ee=await Qt(u.value,["diff","-c",z,"--","^"+J]);return ee.code===0&&ee.stdout.trim()?ee.stdout.split(`
`):[]}async function he(W){if(!(N[W.hash]||j[W.hash])){j[W.hash]=!0;try{const J=await Gs(u.value,["diff-tree","--no-commit-id","--name-status","-r","--root",W.hash]);N[W.hash]=J.code===0?xe(J.stdout):[]}catch{N[W.hash]=[]}finally{j[W.hash]=!1}}}function xe(W){const J=[];for(const z of W.split(`
`)){if(!z.trim())continue;const ee=z.split("	");ee.length<2||J.push({status:ee[0][0]??"?",path:ee[ee.length-1]})}return J}function ge(W){const J=[];try{new DOMParser().parseFromString(W,"application/xml").querySelectorAll("logentry").forEach(ee=>{const ye=[];ee.querySelectorAll("paths > path").forEach(_e=>{const Ye=_e.getAttribute("action"),ot=_e.textContent;ot&&ye.push({status:Ye??"",path:ot})});const je="r"+(ee.getAttribute("revision")??""),Ke=ee.querySelector("author")?.textContent??"—",Ze=ee.querySelector("date")?.textContent??"",we=ee.querySelector("msg")?.textContent??"";N[je]=ye,J.push({hash:je,short:je,author:Ke,email:"",ts:Ze?Math.floor(new Date(Ze).getTime()/1e3):0,date:Ze?new Date(Ze).toLocaleString():"",subject:(we.split(`
`)[0]??"").trim()||je,parents:[],refs:[]})})}catch{}return J}let ne=0;async function ae(){if(!a.value||!u.value)return;const W=++ne,J=a.value,z=u.value;p.value=!0;try{if(J==="git"){const ee=await Gs(z,["log","--max-count=30",`--pretty=format:${Ll}`]);if(W!==ne)return;d.value=ee.code===0?Bl(ee.stdout):[]}else{const ee=await Qt(z,["log","--xml","-v","-l","30"]);if(W!==ne)return;d.value=ee.code===0?ge(ee.stdout):[]}}catch{if(W!==ne)return;d.value=[]}finally{W===ne&&(p.value=!1)}}let Ee=0;async function Ve(){const W=++Ee,J=n.state.projectDir;if(!J||!xa(J)){a.value=null,d.value=[];return}p.value=!0,O.value="",d.value=[];for(const z of Object.keys(N))delete N[z];try{const z=await ei(J);if(W!==Ee)return;if(z.inRepo&&z.repo)a.value="git",u.value=z.repo,h.value=z.branch||"HEAD";else{const ee=await ho(J);if(W!==Ee)return;ee.inRepo&&ee.root&&ee.svnAvailable?(a.value="svn",u.value=ee.root,h.value=ee.revision?"r"+ee.revision:"svn"):(a.value=null,d.value=[])}}catch{if(W!==Ee)return;a.value=null,d.value=[]}finally{W===Ee&&(p.value=!1)}a.value&&ae()}async function be(W){if(a.value==="git")return he(W)}Je(()=>n.state.projectDir,()=>{Ve()},{immediate:!0});async function Pe(){So("git"),So("svn"),await Ve(),a.value&&ae()}return(W,J)=>r.value?(l(),c("div",l6,[s("div",r6,[m(oe,{name:a.value==="svn"?"clock":"git",size:12},null,8,["name"]),s("span",{class:te(["vs-gitbar-branch",{detached:a.value==="svn"}]),title:u.value},i(h.value),11,c6),s("span",u6,i(a.value==="svn"?"SVN · "+o(v)("vsGitHistory"):o(v)("vsGitHistory")),1),d.value.length?(l(),c("span",d6,i(d.value.length),1)):A("",!0),J[0]||(J[0]=s("span",{class:"vs-gitbar-fill"},null,-1)),s("button",{class:"vs-gitbar-act",title:o(v)("vsGitRefresh"),onClick:Pe},[m(oe,{name:"refresh",size:12,class:te({spin:p.value})},null,8,["class"])],8,f6)]),s("div",p6,[p.value&&!M.value.length?(l(),c("div",h6,i(o(v)("vsLoading")),1)):M.value.length?(l(!0),c(ie,{key:2},Re(M.value,z=>(l(),c(ie,{key:z.commit.hash},[s("div",{class:te(["vs-gitbar-row",{open:O.value===z.commit.hash}]),title:z.commit.subject,onClick:ee=>G(z.commit)},[z.graph?(l(),c("span",{key:0,class:"vs-gitbar-lanes",style:_t({width:`${Math.min(z.graph.width,Vo)*o(Eo)}px`})},[(l(),c("svg",{width:Math.min(z.graph.width,Vo)*o(Eo),height:ao,"aria-hidden":"true"},[(l(!0),c(ie,null,Re(z.graph.through.filter(ee=>ee.lane<Vo),(ee,ye)=>(l(),c("line",{key:"t"+ye,x1:w(ee.lane),y1:0,x2:w(ee.lane),y2:ao,stroke:o(Xn)(ee.color)},null,8,y6))),128)),z.graph.topLine&&z.graph.lane<Vo?(l(),c("line",{key:0,x1:w(z.graph.lane),y1:0,x2:w(z.graph.lane),y2:ao/2,stroke:o(Xn)(z.graph.laneColor)},null,8,w6)):A("",!0),(l(!0),c(ie,null,Re(z.graph.bends.filter(ee=>ee.from<Vo&&ee.to<Vo),(ee,ye)=>(l(),c(ie,{key:"b"+ye},[ee.from===ee.to?(l(),c("line",{key:0,x1:w(ee.from),y1:ao/2,x2:w(ee.to),y2:ao,stroke:o(Xn)(ee.color)},null,8,b6)):(l(),c("path",{key:1,d:b(ee.from,ee.to),fill:"none",stroke:o(Xn)(ee.color)},null,8,_6))],64))),128)),z.graph.lane<Vo?(l(),c("circle",{key:1,cx:w(z.graph.lane),cy:ao/2,r:_(z.graph)?4:3,fill:o(Xn)(z.graph.laneColor),stroke:_(z.graph)?"var(--dsh-bg, #0d1117)":"none","stroke-width":"1.5"},null,8,k6)):A("",!0)],8,g6))],4)):(l(),c("span",x6)),s("span",C6,i(z.commit.subject),1),z.commit.refs.length?(l(),c("span",S6,[(l(!0),c(ie,null,Re(z.commit.refs,ee=>(l(),c("span",{key:ee.kind+ee.label,class:te(["vs-gitbar-ref","rf-"+ee.kind])},i(ee.label),3))),128))])):A("",!0),s("span",$6,i(z.commit.author),1)],10,m6),O.value===z.commit.hash?(l(),c("div",E6,[j[z.commit.hash]?(l(),c("div",D6,i(o(v)("vsLoading")),1)):(l(),c(ie,{key:1},[H(z.commit.hash).length?A("",!0):(l(),c("div",T6,i(o(v)("gitCommitNoFiles")),1)),(l(!0),c(ie,null,Re(H(z.commit.hash),(ee,ye)=>(l(),c("div",{key:ye,class:"vs-gitbar-file",title:ee.path},[s("span",{class:te(["st","s-"+ee.status.toLowerCase()])},i(ee.status),3),m(oe,{name:"fileText",size:11}),s("span",F6,i(C(ee.path)),1),s("span",P6,i(Z(ee.path)),1),s("button",{class:"vs-gitbar-act vs-gitbar-file-open",title:o(v)("vsGitFileDiff"),onClick:ke(je=>de(z.commit,ee),["stop"])},[m(oe,{name:"fileOut",size:11})],8,A6)],8,N6))),128))],64))])):A("",!0)],64))),128)):(l(),c("div",v6,i(o(v)("gitLogEmpty")),1))])])):A("",!0)}}),M6=xt(R6,[["__scopeId","data-v-955f5249"]]),Wd="dsh-file-workbench.vscode.search.prefs",al={caseSensitive:!1,wholeWord:!1,regex:!1,preserveCase:!0,viewMode:"list",replaceOpen:!1,advancedOpen:!1};function O6(){try{const t=localStorage.getItem(Wd);return t?{...al,...JSON.parse(t)}:{...al}}catch{return{...al}}}function L6(){return{q:"",include:"",exclude:"",replacement:"",outcome:null,searched:!1}}const ql=gt(O6()),Kl=gt(new Map);function B6(t,e){ql[t]=e;try{localStorage.setItem(Wd,JSON.stringify(ql))}catch{}}function Gd(t){let e=Kl.get(t);return e||(e=L6(),Kl.set(t,e)),e}function I6(t,e){const n=Gd(t);Object.assign(n,e)}function j6(t){Kl.delete(t)}function V6(){return{prefs:ql,setPref:B6,getProject:Gd,saveProject:I6,clearProject:j6}}const z6={class:"vs-sp"},U6={class:"vs-sp-titlebar"},H6={class:"vs-sp-title"},W6={class:"vs-sp-actions"},G6=["title"],q6=["title","disabled"],K6=["title","disabled"],X6=["title","disabled"],Y6=["title","disabled"],J6={class:"vs-sp-head"},Q6={class:"vs-sp-inputwrap"},Z6=["placeholder"],e3=["title"],t3=["title"],n3=["title"],o3=["title"],s3={key:0,class:"vs-sp-inputwrap vs-sp-replacerow"},i3=["placeholder","onKeydown"],a3=["title"],l3=["title","disabled"],r3={key:0,class:"vs-sp-adv"},c3={class:"vs-sp-field"},u3={class:"vs-sp-field-label"},d3=["placeholder","title"],f3={class:"vs-sp-field"},p3={class:"vs-sp-field-label"},h3=["placeholder","title"],v3={key:1,class:"vs-sp-summary"},m3={key:0,class:"vs-sp-trunc"},g3={key:1,class:"vs-sp-trunc"},y3={key:2,class:"vs-sp-trunc"},w3={key:2,class:"vs-sp-list"},b3=["title","onClick"],_3={class:"vs-sp-name"},k3={class:"vs-sp-dir"},x3={class:"vs-sp-count"},C3=["title","onClick"],S3={class:"vs-sp-ln"},$3={class:"vs-sp-text"},E3={key:0},D3=["title","onClick"],T3={class:"vs-sp-name"},N3={class:"vs-sp-count"},F3=["title","onClick"],P3={class:"vs-sp-name"},A3={class:"vs-sp-count"},R3=["title","onClick"],M3={class:"vs-sp-ln"},O3={class:"vs-sp-text"},L3={key:0},B3=vt({__name:"VSSearchPanel",props:{projectDir:{}},emits:["open"],setup(t,{emit:e}){const n=t,a=e,r=V6(),{prefs:u}=r,h=r.getProject(n.projectDir),d=g(h.q),p=g(h.include),w=g(h.exclude),b=g(h.replacement),_=g(h.outcome),M=g(h.searched),O=g(u.caseSensitive),N=g(u.wholeWord),j=g(u.regex),H=g(u.preserveCase),C=g(u.viewMode),Z=g(u.replaceOpen),G=g(u.advancedOpen),F=g(!1),de=g(!1),I=g(new Set),he=g(new Set(""));let xe=0,ge=0;const ne=B(()=>d.value.trim().length>=2),ae=B(()=>!!_.value&&_.value.files.length>0),Ee=B(()=>ne.value&&ae.value&&b.value.length>0&&!Wt(n.projectDir));function Ve(){return{path:n.projectDir,caseSensitive:O.value,regex:j.value,wholeWord:N.value,include:p.value.trim()||void 0,exclude:w.value.trim()||void 0}}async function be(){const Le=++xe;if(!ne.value){_.value=null,M.value=!1,F.value=!1,Pe();return}F.value=!0;try{const U=await Np(d.value.trim(),Ve());if(Le!==xe)return;_.value=U,M.value=!0,I.value=new Set(U.files.length<=8?U.files.map(R=>R.rel):[])}catch{Le===xe&&(_.value=null,M.value=!0)}finally{Le===xe&&(F.value=!1,Pe())}}function Pe(){n.projectDir&&r.saveProject(n.projectDir,{q:d.value,include:p.value,exclude:w.value,replacement:b.value,outcome:_.value,searched:M.value})}function W(){ge&&window.clearTimeout(ge),ge=window.setTimeout(()=>void be(),300)}function J(){O.value=!O.value,r.setPref("caseSensitive",O.value),M.value&&be()}function z(){N.value=!N.value,r.setPref("wholeWord",N.value),M.value&&be()}function ee(){j.value=!j.value,r.setPref("regex",j.value),M.value&&be()}function ye(){C.value=C.value==="list"?"tree":"list",r.setPref("viewMode",C.value)}function je(){H.value=!H.value,r.setPref("preserveCase",H.value)}function Ke(){Z.value=!Z.value,r.setPref("replaceOpen",Z.value)}function Ze(){G.value=!G.value,r.setPref("advancedOpen",G.value)}function we(){const Le=_.value;if(Le)if(C.value==="list")I.value=new Set(Le.files.map(U=>U.rel));else{const U=new Set("");for(const R of Le.files)Ye(U,R.rel);he.value=U}}function _e(){C.value==="list"?I.value=new Set:he.value=new Set("")}function Ye(Le,U){const R=U.split("/");for(let Q=1;Q<R.length;Q++)Le.add(R.slice(0,Q).join("/"))}function ot(Le){const U=new Set(he.value);U.has(Le)?U.delete(Le):U.add(Le),he.value=U}const pe=B(()=>{const Le=_.value;if(!Le||C.value!=="tree")return[];const U={name:"",path:"",dirs:new Map,files:[],count:0};for(const De of Le.files){const L=De.rel.split("/"),D={name:L[L.length-1],rel:De.rel,count:De.hits.length};let K=U;K.count+=De.hits.length;for(let $=0;$<L.length-1;$++){const q=L[$],Te=K.path?`${K.path}/${q}`:q;let re=K.dirs.get(q);re||(re={name:q,path:Te,dirs:new Map,files:[],count:0},K.dirs.set(q,re)),K=re,K.count+=De.hits.length}K.files.push(D)}const R=[],Q=(De,L)=>{const D=he.value.has(De.path);if(L>0&&R.push({kind:"dir",path:De.path,name:De.name,depth:L,count:De.count,open:D}),!(!D&&L>0)){for(const K of[...De.dirs.values()].sort(($,q)=>$.name.localeCompare(q.name)))Q(K,L+1);for(const K of[...De.files].sort(($,q)=>$.name.localeCompare(q.name)))R.push({kind:"file",path:K.rel,name:K.name,dir:it(K.rel),depth:L,count:K.count,open:I.value.has(K.rel)})}};return Q(U,0),R});function Ce(){ge&&window.clearTimeout(ge),xe++,d.value="",b.value="",p.value="",w.value="",_.value=null,M.value=!1,F.value=!1,I.value=new Set,he.value=new Set(""),r.clearProject(n.projectDir)}function qe(Le){const U=new Set(I.value);U.has(Le)?U.delete(Le):U.add(Le),I.value=U}function ce(Le){return _.value?.files.find(U=>U.rel===Le)?.hits??[]}async function Ie(){if(!Ee.value||de.value)return;const Le=_.value;if(!Le)return;const U=Le.total,R=Le.files.length,Q=v("vsReplaceConfirm",{files:String(R),n:String(U),q:d.value.trim(),r:b.value});if(window.confirm(Q)){de.value=!0;try{const De=await du(d.value.trim(),b.value,{scope:n.projectDir,caseSensitive:O.value,regex:j.value,wholeWord:N.value,preserveCase:H.value,include:p.value.trim()||void 0,exclude:w.value.trim()||void 0});De.replacements>0?Y("ok",v("vsReplaceDone",{files:String(De.files),n:String(De.replacements)})):Y("info",v("vsReplaceNone")),await be()}catch(De){console.warn("[dsh-file-workbench] replace failed:",De)}finally{de.value=!1}}}function rt(Le){const U=r.getProject(Le);d.value=U.q,p.value=U.include,w.value=U.exclude,b.value=U.replacement,_.value=U.outcome,M.value=U.searched,I.value=new Set,he.value=new Set("")}Je(()=>n.projectDir,Le=>rt(Le)),cn(()=>{Pe(),ne.value&&!_.value&&be()}),At(()=>{ge&&window.clearTimeout(ge)});function yt(Le){const U=d.value.trim();if(!U)return[{t:Le,hit:!1}];let R;try{R=j.value?U:U.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}catch{return[{t:Le,hit:!1}]}N.value&&(R=`(?<![\\p{L}\\p{N}_])${R}(?![\\p{L}\\p{N}_])`);let Q;try{Q=new RegExp(R,O.value?"gu":"giu")}catch{return[{t:Le,hit:!1}]}const De=[];let L=0;for(const D of Le.matchAll(Q))if(D.index>L&&De.push({t:Le.slice(L,D.index),hit:!1}),De.push({t:D[0]||U,hit:!0}),L=D.index+(D[0]?.length||U.length),D[0]==="")break;return L<Le.length&&De.push({t:Le.slice(L),hit:!1}),De}const ut=Le=>Le.slice(Le.lastIndexOf("/")+1),it=Le=>{const U=Le.lastIndexOf("/");return U<0?"":Le.slice(0,U)};return(Le,U)=>(l(),c("div",z6,[s("div",U6,[s("span",H6,i(o(v)("vsSearchTitle")),1),s("div",W6,[s("button",{class:"vs-sp-act",title:o(v)("vsViewModeSwitchTitle"),onClick:ye},[m(oe,{name:C.value==="list"?"sort":"folderOpen",size:13},null,8,["name"])],8,G6),s("button",{class:"vs-sp-act",title:o(v)("vsRefreshResults"),disabled:!ne.value,onClick:U[0]||(U[0]=R=>be())},[m(oe,{name:"refresh",size:13})],8,q6),s("button",{class:"vs-sp-act",title:o(v)("vsExpandAll"),disabled:!ae.value,onClick:we},[m(oe,{name:"chevronsDown",size:13})],8,K6),s("button",{class:"vs-sp-act",title:o(v)("vsCollapseAll"),disabled:!ae.value,onClick:_e},[m(oe,{name:"chevronsUp",size:13})],8,X6),s("button",{class:"vs-sp-act",title:o(v)("vsClearAllResults"),disabled:!M.value&&!d.value,onClick:Ce},[m(oe,{name:"close",size:13})],8,Y6)])]),s("div",J6,[s("div",Q6,[kt(s("input",{"onUpdate:modelValue":U[1]||(U[1]=R=>d.value=R),class:"vs-sp-input",placeholder:o(v)("vsGrepPlaceholder"),onKeydown:U[2]||(U[2]=bt(ke(R=>be(),["prevent"]),["enter"])),onInput:W},null,40,Z6),[[Lt,d.value]]),s("button",{class:te(["vs-sp-toggle",{on:O.value}]),title:o(v)("vsGrepCase"),onClick:J},[...U[8]||(U[8]=[s("span",null,"Aa",-1)])],10,e3),s("button",{class:te(["vs-sp-toggle",{on:N.value}]),title:o(v)("vsGrepWholeWord"),onClick:z},[...U[9]||(U[9]=[s("span",null,"ab",-1)])],10,t3),s("button",{class:te(["vs-sp-toggle",{on:j.value}]),title:o(v)("vsGrepRegex"),onClick:ee},[...U[10]||(U[10]=[s("span",null,".*",-1)])],10,n3),s("button",{class:te(["vs-sp-toggle",{on:Z.value}]),title:o(v)("vsToggleReplace"),onClick:Ke},[m(oe,{name:"chevronRight",size:12,class:te(["vs-sp-replace-caret",{open:Z.value}])},null,8,["class"])],10,o3)]),Z.value?(l(),c("div",s3,[kt(s("input",{"onUpdate:modelValue":U[3]||(U[3]=R=>b.value=R),class:"vs-sp-input",placeholder:o(v)("vsGrepReplacePlaceholder"),onKeydown:bt(ke(Ie,["prevent"]),["enter"])},null,40,i3),[[Lt,b.value]]),s("button",{class:te(["vs-sp-toggle",{on:H.value}]),title:o(v)("vsReplacePreserveCase"),onClick:je},[...U[11]||(U[11]=[s("span",null,"AB",-1)])],10,a3),s("button",{class:"vs-sp-btn-replaceall",title:o(v)("vsReplaceAll"),disabled:!Ee.value||de.value,onClick:Ie},[m(oe,{name:"chevronsRight",size:13})],8,l3)])):A("",!0)]),s("div",{class:"vs-sp-divider",onClick:Ze},[m(oe,{name:"chevronRight",size:11,class:te(["vs-sp-div-caret",{open:G.value}])},null,8,["class"])]),G.value?(l(),c("div",r3,[s("div",c3,[s("div",u3,[m(oe,{name:"file",size:12}),s("span",null,i(o(v)("vsFilesToInclude")),1)]),kt(s("input",{"onUpdate:modelValue":U[4]||(U[4]=R=>p.value=R),class:"vs-sp-field-input",placeholder:o(v)("vsFilesToIncludePlaceholder"),title:o(v)("vsFilesToIncludeTitle"),onKeydown:U[5]||(U[5]=bt(ke(R=>be(),["prevent"]),["enter"])),onInput:W},null,40,d3),[[Lt,p.value]])]),s("div",f3,[s("div",p3,[m(oe,{name:"gear",size:12}),s("span",null,i(o(v)("vsFilesToExclude")),1)]),kt(s("input",{"onUpdate:modelValue":U[6]||(U[6]=R=>w.value=R),class:"vs-sp-field-input",placeholder:o(v)("vsFilesToExcludePlaceholder"),title:o(v)("vsFilesToExcludeTitle"),onKeydown:U[7]||(U[7]=bt(ke(R=>be(),["prevent"]),["enter"])),onInput:W},null,40,h3),[[Lt,w.value]])])])):A("",!0),M.value?(l(),c("div",v3,[_.value?(l(),c(ie,{key:0},[s("span",null,i(o(v)("vsGrepSummary",{files:_.value.files.length,n:_.value.total})),1),_.value.truncated?(l(),c("span",m3,i(o(v)("vsGrepTruncated")),1)):A("",!0)],64)):F.value?(l(),c("span",g3,i(o(v)("vsLoading")),1)):(l(),c("span",y3,i(o(v)("vsGrepNoResult")),1))])):A("",!0),_.value?(l(),c("div",w3,[C.value==="list"?(l(!0),c(ie,{key:0},Re(_.value.files,R=>(l(),c(ie,{key:R.rel},[s("div",{class:te(["vs-sp-file",{open:I.value.has(R.rel)}]),title:R.rel,onClick:Q=>qe(R.rel)},[m(oe,{name:"chevronRight",size:11,class:"vs-sp-caret"}),m(oe,{name:"fileText",size:12}),s("span",_3,i(ut(R.rel)),1),s("span",k3,i(it(R.rel)),1),s("span",x3,i(R.hits.length),1)],10,b3),I.value.has(R.rel)?(l(!0),c(ie,{key:0},Re(R.hits,Q=>(l(),c("div",{key:R.rel+":"+Q.ln,class:"vs-sp-hit",title:o(v)("vsGrepOpenAt",{ln:Q.ln}),onClick:De=>a("open",R.rel,Q.ln)},[s("span",S3,i(Q.ln),1),s("span",$3,[(l(!0),c(ie,null,Re(yt(Q.text),(De,L)=>(l(),c(ie,{key:L},[De.hit?(l(),c("mark",E3,i(De.t),1)):(l(),c(ie,{key:1},[ue(i(De.t),1)],64))],64))),128))])],8,C3))),128)):A("",!0)],64))),128)):(l(!0),c(ie,{key:1},Re(pe.value,R=>(l(),c(ie,{key:R.kind+":"+R.path},[R.kind==="dir"?(l(),c("div",{key:0,class:te(["vs-sp-file vs-sp-node",{open:R.open}]),style:_t({paddingLeft:8+(R.depth-1)*12+"px"}),title:R.path,onClick:Q=>ot(R.path)},[m(oe,{name:"chevronRight",size:11,class:"vs-sp-caret"}),m(oe,{name:R.open?"folderOpen":"folder",size:12},null,8,["name"]),s("span",T3,i(R.name),1),s("span",N3,i(R.count),1)],14,D3)):(l(),c(ie,{key:1},[s("div",{class:te(["vs-sp-file vs-sp-node",{open:R.open}]),style:_t({paddingLeft:8+R.depth*12+"px"}),title:R.path,onClick:Q=>qe(R.path)},[m(oe,{name:"chevronRight",size:11,class:"vs-sp-caret"}),m(oe,{name:"fileText",size:12}),s("span",P3,i(R.name),1),s("span",A3,i(R.count),1)],14,F3),R.open?(l(!0),c(ie,{key:0},Re(ce(R.path),Q=>(l(),c("div",{key:R.path+":"+Q.ln,class:"vs-sp-hit",style:_t({paddingLeft:26+R.depth*12+"px"}),title:o(v)("vsGrepOpenAt",{ln:Q.ln}),onClick:De=>a("open",R.path,Q.ln)},[s("span",M3,i(Q.ln),1),s("span",O3,[(l(!0),c(ie,null,Re(yt(Q.text),(De,L)=>(l(),c(ie,{key:L},[De.hit?(l(),c("mark",L3,i(De.t),1)):(l(),c(ie,{key:1},[ue(i(De.t),1)],64))],64))),128))])],12,R3))),128)):A("",!0)],64))],64))),128))])):A("",!0)]))}}),I3=xt(B3,[["__scopeId","data-v-0328b4ec"]]),j3=[{id:"@sunjuntao/dsh-fw-find-references",name:"引用查找",version:"0.1.0",description:"DSH 文件编辑器「引用查找」插件：Activity Bar 注入视图，跟随编辑器光标选中词（v5 ctx.editor），用工作台 /grep 全词搜索项目内引用并点击跳转。对标 VS Code Find All References。",nameEn:"Find References",descriptionEn:"DSH file editor plugin: activity bar view that takes the word at the caret and finds all references in the project via /grep (whole-word), clicking a hit jumps there. Counterpart of VS Code Find All References.",code:`window.__ModuleLoader__.load({
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
    const chev = document.createElement("span");
    chev.className = \`\${NS}-chev\`;
    chev.textContent = "\\u25BE";
    const label = document.createElement("span");
    label.className = \`\${NS}-glabel\`;
    label.textContent = \`\${baseName(file)} (\${rows.length})\`;
    ghead.append(chev, label);
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
.\${NS}-head { display: flex; gap: 6px; padding: 8px 10px; position: sticky; top: 0; background: var(--dsh-bg, #0d1117); border-bottom: 1px solid var(--dsh-border, #30363d); z-index: 3; }
.\${NS}-input { flex: 1 1 auto; min-width: 0; padding: 4px 8px; border: 1px solid var(--dsh-border, #30363d); border-radius: 6px; background: var(--dsh-bg2, #161b22); color: inherit; outline: none; font: inherit; }
.\${NS}-input::placeholder { color: var(--dsh-fg-muted, #6e7681); }
.\${NS}-input:focus { border-color: var(--dsh-accent, #2f81f7); box-shadow: 0 0 0 2px var(--dsh-accent-weak, rgba(47,129,247,.14)); }
.\${NS}-btn { flex: 0 0 auto; padding: 4px 12px; border: 1px solid var(--dsh-border, #30363d); border-radius: 6px; background: var(--dsh-bg2, #161b22); color: inherit; cursor: pointer; font: inherit; }
.\${NS}-btn:hover { border-color: var(--dsh-accent, #2f81f7); color: var(--dsh-accent, #2f81f7); }
.\${NS}-btn:focus-visible, .\${NS}-ghead:focus-visible, .\${NS}-row:focus-visible { outline: 1px solid var(--dsh-accent, #2f81f7); outline-offset: -1px; }
.\${NS}-hint { padding: 5px 10px; color: var(--dsh-fg-weak, #8b949e); line-height: 1.5; }
.\${NS}-results { flex: 1 1 auto; padding: 2px 6px 8px; }
.\${NS}-group { margin: 2px 0; }
.\${NS}-ghead { display: flex; align-items: center; gap: 5px; width: 100%; text-align: left; padding: 4px 8px; border: 0; background: transparent; color: var(--dsh-fg, #c9d1d9); font-weight: 600; font-size: inherit; cursor: pointer; border-radius: 4px; }
.\${NS}-ghead:hover { background: var(--dsh-bg2, #161b22); }
.\${NS}-chev { flex: 0 0 auto; font-size: 9px; line-height: 1; color: var(--dsh-fg-weak, #8b949e); transition: transform .1s ease; }
.\${NS}-collapsed .\${NS}-chev { transform: rotate(-90deg); }
.\${NS}-glabel { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.\${NS}-collapsed .\${NS}-glist { display: none; }
.\${NS}-row { display: flex; gap: 8px; align-items: baseline; width: 100%; text-align: left; padding: 2px 8px 2px 22px; border: 0; background: transparent; color: var(--dsh-fg, #c9d1d9); font: inherit; cursor: pointer; border-radius: 4px; white-space: nowrap; overflow: hidden; }
.\${NS}-row:hover { background: var(--dsh-hover, #30363d); }
.\${NS}-lineno { flex: 0 0 auto; min-width: 2.5em; text-align: right; color: var(--dsh-fg-weak, #8b949e); font-family: var(--dsh-mono, monospace); }
.\${NS}-line { min-width: 0; overflow: hidden; text-overflow: ellipsis; }
.\${NS}-mark { background: var(--dsh-select, rgba(31,111,235,.2)); color: inherit; border-radius: 2px; padding: 0 1px; }
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
`},{id:"@sunjuntao/dsh-fw-bookmarks",name:"书签",version:"0.1.0",description:"DSH 文件编辑器「书签」插件：Activity Bar 注入视图，切换光标行书签、列出当前/全部项目书签并跳转。用 v5.1 ctx.editor.createDecorations(category:bookmark) gutter 标记 + /persist 按项目持久化。对标 VS Code Bookmarks。",nameEn:"Bookmarks",descriptionEn:"DSH file editor plugin: activity bar view that toggles line bookmarks, lists current/all-project bookmarks and jumps to them. Uses v5.1 ctx.editor.createDecorations(category:bookmark) gutter marks + /persist per project. Counterpart of VS Code Bookmarks.",code:`window.__ModuleLoader__.load({
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
        <button class="\${NS}-toggle" type="button" title="\\u5207\\u6362\\u5F53\\u524D\\u884C\\u4E66\\u7B7E\\uFF08\\u5149\\u6807\\u6240\\u5728\\u884C\\u52A0/\\u53BB\\u4E66\\u7B7E\\uFF09"><span class="\${NS}-star">\\u2605</span>\\u5207\\u6362\\u5F53\\u524D\\u884C</button>
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
    const label = document.createElement("span");
    label.textContent = g.label;
    const count = document.createElement("span");
    count.className = \`\${NS}-count\`;
    count.textContent = String(g.rows.length);
    head.append(label, count);
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
.\${NS}-bar { padding: 8px 10px; position: sticky; top: 0; background: var(--dsh-bg, #0d1117); border-bottom: 1px solid var(--dsh-border, #30363d); z-index: 3; }
.\${NS}-toggle { width: 100%; display: flex; align-items: center; justify-content: center; gap: 6px; padding: 5px 10px; border: 1px solid var(--dsh-accent, #2f81f7); border-radius: 6px; background: var(--dsh-accent-weak, rgba(47,129,247,.14)); color: var(--dsh-accent, #2f81f7); font: inherit; font-weight: 600; cursor: pointer; }
.\${NS}-toggle:hover { background: var(--dsh-accent-soft, rgba(47,129,247,.2)); }
.\${NS}-toggle:focus-visible { outline: 1px solid var(--dsh-accent, #2f81f7); outline-offset: -1px; }
.\${NS}-toggle .\${NS}-star { font-size: 13px; line-height: 1; }
.\${NS}-hint { padding: 5px 10px; color: var(--dsh-fg-weak, #8b949e); line-height: 1.5; }
.\${NS}-list { flex: 1 1 auto; padding: 2px 6px 8px; }
.\${NS}-group { margin: 3px 0; }
.\${NS}-ghead { display: flex; align-items: center; gap: 6px; padding: 4px 8px; color: var(--dsh-fg, #c9d1d9); font-weight: 600; }
.\${NS}-count { flex: 0 0 auto; min-width: 16px; padding: 0 5px; border-radius: 8px; background: var(--dsh-bg3, #21262d); color: var(--dsh-fg-weak, #8b949e); font-size: 10px; font-weight: 400; line-height: 15px; text-align: center; }
.\${NS}-row { display: flex; align-items: center; gap: 4px; }
.\${NS}-jump { flex: 1 1 auto; min-width: 0; display: flex; gap: 8px; align-items: baseline; text-align: left; padding: 3px 8px 3px 16px; border: 0; background: transparent; color: var(--dsh-fg, #c9d1d9); font: inherit; cursor: pointer; border-radius: 4px; white-space: nowrap; overflow: hidden; }
.\${NS}-jump:hover { background: var(--dsh-hover, #30363d); }
.\${NS}-jump:focus-visible { outline: 1px solid var(--dsh-accent, #2f81f7); outline-offset: -1px; }
.\${NS}-loc { flex: 0 0 auto; min-width: 2.5em; text-align: right; color: var(--dsh-fg-weak, #8b949e); font-family: var(--dsh-mono, monospace); }
.\${NS}-file { min-width: 0; overflow: hidden; text-overflow: ellipsis; }
.\${NS}-rm { flex: 0 0 auto; width: 18px; height: 18px; line-height: 16px; border: 0; border-radius: 4px; background: transparent; color: var(--dsh-fg-muted, #6e7681); font-size: 14px; cursor: pointer; opacity: 0; transition: opacity .1s ease; }
.\${NS}-row:hover .\${NS}-rm, .\${NS}-rm:focus-visible { opacity: 1; }
.\${NS}-rm:hover { background: var(--dsh-hover, #30363d); color: var(--dsh-danger, #f85149); }
.\${NS}-empty { padding: 10px 12px; color: var(--dsh-fg-muted, #6e7681); font-style: italic; text-align: center; }
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
`},{id:"@sunjuntao/dsh-fw-linter",name:"外部 Linter",version:"0.1.0",description:"DSH 文件编辑器「外部 Linter」插件：Activity Bar 注入视图，运行用户配置的命令(node --check/tsc/eslint…)捕获诊断，解析 file:line:col message → v5.1 createDecorations 波浪线 + 面板列表点击跳转。对标 VS Code Problems/External Linter。",nameEn:"External Linter",descriptionEn:"DSH file editor plugin: activity bar view that runs user-configured commands (node --check/tsc/eslint…) to capture diagnostics, parses file:line:col message → v5.1 createDecorations squiggles + a jumpable problems panel. Counterpart of VS Code Problems/External Linter.",code:`window.__ModuleLoader__.load({
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
    const chev = document.createElement("span");
    chev.className = \`\${NS}-chev\`;
    chev.textContent = "\\u25BE";
    const label = document.createElement("span");
    label.className = \`\${NS}-glabel\`;
    label.textContent = \`\${baseName(file)} (\${rows.length})\`;
    head.append(chev, label);
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
.\${NS}-bar { display: flex; gap: 6px; padding: 8px 10px; position: sticky; top: 0; background: var(--dsh-bg, #0d1117); border-bottom: 1px solid var(--dsh-border, #30363d); z-index: 3; }
.\${NS}-cmd { flex: 1 1 auto; min-width: 0; padding: 4px 8px; border: 1px solid var(--dsh-border, #30363d); border-radius: 6px; background: var(--dsh-bg2, #161b22); color: inherit; outline: none; font-family: var(--dsh-mono, monospace); font-size: inherit; }
.\${NS}-cmd::placeholder { color: var(--dsh-fg-muted, #6e7681); }
.\${NS}-cmd:focus { border-color: var(--dsh-accent, #2f81f7); box-shadow: 0 0 0 2px var(--dsh-accent-weak, rgba(47,129,247,.14)); }
.\${NS}-run { flex: 0 0 auto; padding: 4px 12px; border: 1px solid var(--dsh-accent, #2f81f7); border-radius: 6px; background: var(--dsh-accent-weak, rgba(47,129,247,.14)); color: var(--dsh-accent, #2f81f7); font: inherit; font-weight: 600; cursor: pointer; }
.\${NS}-run:hover:not(:disabled) { background: var(--dsh-accent-soft, rgba(47,129,247,.2)); }
.\${NS}-run:disabled { opacity: .5; cursor: default; }
.\${NS}-run:focus-visible { outline: 1px solid var(--dsh-accent, #2f81f7); outline-offset: -1px; }
.\${NS}-hint { padding: 5px 10px; color: var(--dsh-fg-weak, #8b949e); line-height: 1.5; }
.\${NS}-list { flex: 1 1 auto; padding: 2px 6px 8px; }
.\${NS}-group { margin: 2px 0; }
.\${NS}-ghead { display: flex; align-items: center; gap: 5px; width: 100%; text-align: left; padding: 4px 8px; border: 0; background: transparent; color: var(--dsh-fg, #c9d1d9); font: inherit; font-weight: 600; cursor: pointer; border-radius: 4px; }
.\${NS}-ghead:hover { background: var(--dsh-bg2, #161b22); }
.\${NS}-ghead:focus-visible { outline: 1px solid var(--dsh-accent, #2f81f7); outline-offset: -1px; }
.\${NS}-chev { flex: 0 0 auto; font-size: 9px; line-height: 1; color: var(--dsh-fg-weak, #8b949e); transition: transform .1s ease; }
.\${NS}-collapsed .\${NS}-chev { transform: rotate(-90deg); }
.\${NS}-glabel { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.\${NS}-collapsed .\${NS}-glist { display: none; }
.\${NS}-row { display: flex; gap: 7px; align-items: flex-start; width: 100%; text-align: left; padding: 3px 8px 3px 22px; border: 0; background: transparent; color: var(--dsh-fg, #c9d1d9); font: inherit; cursor: pointer; border-radius: 4px; white-space: nowrap; overflow: hidden; }
.\${NS}-row:hover { background: var(--dsh-hover, #30363d); }
.\${NS}-row:focus-visible { outline: 1px solid var(--dsh-accent, #2f81f7); outline-offset: -1px; }
.\${NS}-sev { flex: 0 0 auto; width: 8px; height: 8px; margin-top: 4px; border-radius: 50%; background: var(--dsh-fg-weak, #8b949e); }
.\${NS}-sev-error { background: var(--dsh-danger, #f85149); }
.\${NS}-sev-warning { background: var(--dsh-warn, #d29922); }
.\${NS}-sev-info { background: var(--dsh-info, #79c0ff); }
.\${NS}-loc { flex: 0 0 auto; min-width: 3.5em; text-align: right; color: var(--dsh-fg-weak, #8b949e); font-family: var(--dsh-mono, monospace); }
.\${NS}-msg { min-width: 0; overflow: hidden; text-overflow: ellipsis; }
.\${NS}-empty { padding: 10px 12px; color: var(--dsh-fg-muted, #6e7681); font-style: italic; text-align: center; }
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
`},{id:"@sunjuntao/dsh-fw-todo-tree",name:"TODO 面板",version:"0.1.0",description:"DSH 文件编辑器「TODO 面板」插件：Activity Bar 注入视图，用 /grep 扫描项目内 TODO/FIXME/HACK/XXX(可配置)标签，按文件分组树形列表点击跳转；当前打开文件用 v5.1 createDecorations 高亮。对标 VS Code Todo Tree。",nameEn:"Todo Tree",descriptionEn:"DSH file editor plugin: activity bar view that scans TODO/FIXME/HACK/XXX (configurable) tags across the project via /grep into a grouped jumpable tree; highlights the active file with v5.1 createDecorations. Counterpart of VS Code Todo Tree.",code:`window.__ModuleLoader__.load({
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
    icon: "tasks",
    order: 65,
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
    const chev = document.createElement("span");
    chev.className = \`\${NS}-chev\`;
    chev.textContent = "\\u25BE";
    const label = document.createElement("span");
    label.className = \`\${NS}-glabel\`;
    label.textContent = \`\${baseName(file)} (\${rows.length})\`;
    head.append(chev, label);
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
.\${NS}-bar { display: flex; gap: 6px; padding: 8px 10px; position: sticky; top: 0; background: var(--dsh-bg, #0d1117); border-bottom: 1px solid var(--dsh-border, #30363d); z-index: 3; }
.\${NS}-tags { flex: 1 1 auto; min-width: 0; padding: 4px 8px; border: 1px solid var(--dsh-border, #30363d); border-radius: 6px; background: var(--dsh-bg2, #161b22); color: inherit; outline: none; font: inherit; }
.\${NS}-tags::placeholder { color: var(--dsh-fg-muted, #6e7681); }
.\${NS}-tags:focus { border-color: var(--dsh-accent, #2f81f7); box-shadow: 0 0 0 2px var(--dsh-accent-weak, rgba(47,129,247,.14)); }
.\${NS}-scan { flex: 0 0 auto; padding: 4px 12px; border: 1px solid var(--dsh-accent, #2f81f7); border-radius: 6px; background: var(--dsh-accent-weak, rgba(47,129,247,.14)); color: var(--dsh-accent, #2f81f7); font: inherit; font-weight: 600; cursor: pointer; }
.\${NS}-scan:hover:not(:disabled) { background: var(--dsh-accent-soft, rgba(47,129,247,.2)); }
.\${NS}-scan:disabled { opacity: .5; cursor: default; }
.\${NS}-scan:focus-visible { outline: 1px solid var(--dsh-accent, #2f81f7); outline-offset: -1px; }
.\${NS}-hint { padding: 5px 10px; color: var(--dsh-fg-weak, #8b949e); line-height: 1.5; }
.\${NS}-tree { flex: 1 1 auto; padding: 2px 6px 8px; }
.\${NS}-group { margin: 2px 0; }
.\${NS}-ghead { display: flex; align-items: center; gap: 5px; width: 100%; text-align: left; padding: 4px 8px; border: 0; background: transparent; color: var(--dsh-fg, #c9d1d9); font: inherit; font-weight: 600; cursor: pointer; border-radius: 4px; }
.\${NS}-ghead:hover { background: var(--dsh-bg2, #161b22); }
.\${NS}-ghead:focus-visible { outline: 1px solid var(--dsh-accent, #2f81f7); outline-offset: -1px; }
.\${NS}-chev { flex: 0 0 auto; font-size: 9px; line-height: 1; color: var(--dsh-fg-weak, #8b949e); transition: transform .1s ease; }
.\${NS}-collapsed .\${NS}-chev { transform: rotate(-90deg); }
.\${NS}-glabel { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.\${NS}-collapsed .\${NS}-glist { display: none; }
.\${NS}-row { display: flex; gap: 8px; align-items: baseline; width: 100%; text-align: left; padding: 2px 8px 2px 22px; border: 0; background: transparent; color: var(--dsh-fg, #c9d1d9); font: inherit; cursor: pointer; border-radius: 4px; white-space: nowrap; overflow: hidden; }
.\${NS}-row:hover { background: var(--dsh-hover, #30363d); }
.\${NS}-row:focus-visible { outline: 1px solid var(--dsh-accent, #2f81f7); outline-offset: -1px; }
.\${NS}-lineno { flex: 0 0 auto; min-width: 2.5em; text-align: right; color: var(--dsh-fg-weak, #8b949e); font-family: var(--dsh-mono, monospace); }
.\${NS}-line { min-width: 0; overflow: hidden; text-overflow: ellipsis; }
.\${NS}-tag { display: inline-block; margin-right: 4px; padding: 0 5px; border-radius: 4px; background: color-mix(in srgb, var(--dsh-warn, #d29922) 18%, transparent); color: var(--dsh-warn, #d29922); font-weight: 700; font-size: 10px; }
.\${NS}-empty { padding: 10px 12px; color: var(--dsh-fg-muted, #6e7681); font-style: italic; text-align: center; }
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
`},{id:"@sunjuntao/dsh-fw-gitlens-lite",name:"GitLens-lite",version:"0.1.0",description:"DSH 文件编辑器「GitLens-lite」插件：Activity Bar 注入视图，对当前文件跑 git blame(经 /git/run --porcelain)，行级作者/时间列成面板并点击定位；用 v5.1 createDecorations widget 在行尾追加幽灵注释。对标 VS Code GitLens inline blame。",nameEn:"GitLens-lite",descriptionEn:"DSH file editor plugin: activity bar view that runs git blame on the active file (via /git/run --porcelain), lists per-line author/time and jumps to the line; appends ghost annotations with v5.1 createDecorations widgets. Counterpart of VS Code GitLens inline blame.",code:`window.__ModuleLoader__.load({
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
        <button class="\${NS}-refresh" type="button" title="\\u5BF9\\u5F53\\u524D\\u6FC0\\u6D3B\\u6587\\u4EF6\\u8FD0\\u884C git blame\\uFF08\\u884C\\u5C3E\\u5E7D\\u7075\\u6CE8\\u91CA + \\u53EF\\u8DF3\\u8F6C\\u5217\\u8868\\uFF09"><span>\\u21BB</span>\\u8FFD\\u6EAF\\u5F53\\u524D\\u6587\\u4EF6</button>
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
.\${NS}-bar { padding: 8px 10px; position: sticky; top: 0; background: var(--dsh-bg, #0d1117); border-bottom: 1px solid var(--dsh-border, #30363d); z-index: 3; }
.\${NS}-refresh { width: 100%; display: flex; align-items: center; justify-content: center; gap: 6px; padding: 5px 10px; border: 1px solid var(--dsh-accent, #2f81f7); border-radius: 6px; background: var(--dsh-accent-weak, rgba(47,129,247,.14)); color: var(--dsh-accent, #2f81f7); font: inherit; font-weight: 600; cursor: pointer; }
.\${NS}-refresh:hover:not(:disabled) { background: var(--dsh-accent-soft, rgba(47,129,247,.2)); }
.\${NS}-refresh:disabled { opacity: .5; cursor: default; }
.\${NS}-refresh:focus-visible { outline: 1px solid var(--dsh-accent, #2f81f7); outline-offset: -1px; }
.\${NS}-hint { padding: 5px 10px; color: var(--dsh-fg-weak, #8b949e); line-height: 1.5; }
.\${NS}-list { flex: 1 1 auto; padding: 2px 6px 8px; }
.\${NS}-row { display: flex; gap: 8px; align-items: baseline; width: 100%; text-align: left; padding: 2px 8px; border: 0; background: transparent; color: var(--dsh-fg, #c9d1d9); font: inherit; cursor: pointer; border-radius: 4px; white-space: nowrap; overflow: hidden; }
.\${NS}-row:hover { background: var(--dsh-hover, #30363d); }
.\${NS}-row:focus-visible { outline: 1px solid var(--dsh-accent, #2f81f7); outline-offset: -1px; }
.\${NS}-lineno { flex: 0 0 auto; min-width: 2.5em; text-align: right; color: var(--dsh-fg-weak, #8b949e); font-family: var(--dsh-mono, monospace); }
.\${NS}-meta { flex: 0 1 auto; min-width: 6em; max-width: 55%; overflow: hidden; text-overflow: ellipsis; color: var(--dsh-fg, #c9d1d9); }
.\${NS}-sum { flex: 1 1 auto; min-width: 0; overflow: hidden; text-overflow: ellipsis; color: var(--dsh-fg-weak, #8b949e); }
.\${NS}-empty { padding: 10px 12px; color: var(--dsh-fg-muted, #6e7681); font-style: italic; text-align: center; }
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
`},{id:"@sunjuntao/dsh-fw-outline",name:"大纲符号导航",version:"0.1.0",description:"DSH 文件编辑器「大纲符号导航」插件：Activity Bar 注入视图，基于 dsh-file-workbench-lib v5 注入 API（window.__dshFileWorkbenchVSCode__）。",nameEn:"Outline",descriptionEn:"DSH file editor plugin: activity bar view that extracts symbols (functions/classes/headings) from the active buffer and jumps to them, based on the dsh-file-workbench-lib v5 injection API (window.__dshFileWorkbenchVSCode__).",code:`window.__ModuleLoader__.load({
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
    icon: "viewList",
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
.\${NS}-bar { padding: 8px 10px; position: sticky; top: 0; background: var(--dsh-bg, #0d1117); border-bottom: 1px solid var(--dsh-border, #30363d); z-index: 3; }
.\${NS}-title { display: block; font-weight: 600; color: var(--dsh-fg, #c9d1d9); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.\${NS}-hint { padding: 5px 10px; color: var(--dsh-fg-weak, #8b949e); line-height: 1.5; }
.\${NS}-list { flex: 1 1 auto; padding: 2px 6px 8px; }
.\${NS}-row { display: flex; gap: 8px; align-items: center; width: 100%; text-align: left; padding: 3px 8px; border: 0; background: transparent; color: var(--dsh-fg, #c9d1d9); font: inherit; cursor: pointer; border-radius: 4px; white-space: nowrap; overflow: hidden; }
.\${NS}-row:hover { background: var(--dsh-hover, #30363d); }
.\${NS}-row:focus-visible { outline: 1px solid var(--dsh-accent, #2f81f7); outline-offset: -1px; }
.\${NS}-kind { flex: 0 0 auto; width: 16px; height: 16px; display: inline-flex; align-items: center; justify-content: center; border-radius: 4px; font-size: 10px; font-weight: 700; background: var(--dsh-bg3, #21262d); color: var(--dsh-fg-weak, #8b949e); }
.\${NS}-k-function { color: var(--dsh-purple, #d2a8ff); } .\${NS}-k-class { color: var(--dsh-warn, #d29922); } .\${NS}-k-interface { color: var(--dsh-success, #3fb950); }
.\${NS}-k-type { color: var(--dsh-info, #79c0ff); } .\${NS}-k-enum { color: var(--dsh-warn, #d29922); } .\${NS}-k-variable { color: var(--dsh-info, #79c0ff); } .\${NS}-k-heading { color: var(--dsh-accent, #2f81f7); }
.\${NS}-symname { flex: 1 1 auto; min-width: 0; overflow: hidden; text-overflow: ellipsis; }
.\${NS}-lineno { flex: 0 0 auto; min-width: 2.5em; text-align: right; color: var(--dsh-fg-weak, #8b949e); font-family: var(--dsh-mono, monospace); }
.\${NS}-empty { padding: 10px 12px; color: var(--dsh-fg-muted, #6e7681); font-style: italic; text-align: center; }
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
`},{id:"@sunjuntao/dsh-fw-regex-highlight",name:"正则高亮导航",version:"0.1.0",description:"DSH 文件编辑器「正则高亮导航」插件：Activity Bar 注入视图，基于 dsh-file-workbench-lib v5 注入 API（window.__dshFileWorkbenchVSCode__）。",nameEn:"Regex Highlight",descriptionEn:"DSH file editor plugin: activity bar view that highlights all regex matches in the active file with a jump list, based on the dsh-file-workbench-lib v5 injection API (window.__dshFileWorkbenchVSCode__).",code:`window.__ModuleLoader__.load({
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
    icon: "wand",
    order: 61,
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
    row.innerHTML = \`<span class="\${NS}-loc"></span><span class="\${NS}-matchtext"></span>\`;
    row.querySelector(\`.\${NS}-loc\`).textContent = \`\${h.line}:\${offsetCol(h.from)}\`;
    row.querySelector(\`.\${NS}-matchtext\`).textContent = h.text;
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
.\${NS}-bar { padding: 8px 10px 4px; display: flex; gap: 6px; position: sticky; top: 0; background: var(--dsh-bg, #0d1117); border-bottom: 1px solid var(--dsh-border, #30363d); z-index: 3; }
.\${NS}-cmd { flex: 1 1 auto; min-width: 0; padding: 5px 8px; border: 1px solid var(--dsh-border, #30363d); border-radius: 6px; background: var(--dsh-bg2, #161b22); color: inherit; outline: none; font-family: var(--dsh-mono, monospace); font-size: inherit; }
.\${NS}-cmd::placeholder { color: var(--dsh-fg-muted, #6e7681); }
.\${NS}-cmd:focus { border-color: var(--dsh-accent, #2f81f7); box-shadow: 0 0 0 2px var(--dsh-accent-weak, rgba(47,129,247,.14)); }
.\${NS}-flags { flex: 0 0 44px; width: 44px; padding: 5px 6px; border: 1px solid var(--dsh-border, #30363d); border-radius: 6px; background: var(--dsh-bg2, #161b22); color: inherit; outline: none; text-align: center; font: inherit; font-family: var(--dsh-mono, monospace); }
.\${NS}-flags:focus { border-color: var(--dsh-accent, #2f81f7); box-shadow: 0 0 0 2px var(--dsh-accent-weak, rgba(47,129,247,.14)); }
.\${NS}-nav { display: flex; align-items: center; gap: 6px; padding: 4px 10px 8px; position: sticky; top: 41px; background: var(--dsh-bg, #0d1117); z-index: 3; }
.\${NS}-nav .\${NS}-prev, .\${NS}-nav .\${NS}-next { width: 28px; height: 24px; padding: 0; border: 1px solid var(--dsh-border, #30363d); border-radius: 6px; background: var(--dsh-bg2, #161b22); color: inherit; font-size: 10px; line-height: 1; cursor: pointer; }
.\${NS}-nav .\${NS}-prev:hover, .\${NS}-nav .\${NS}-next:hover { border-color: var(--dsh-accent, #2f81f7); color: var(--dsh-accent, #2f81f7); }
.\${NS}-nav .\${NS}-prev:focus-visible, .\${NS}-nav .\${NS}-next:focus-visible { outline: 1px solid var(--dsh-accent, #2f81f7); outline-offset: -1px; }
.\${NS}-pos { margin-left: 2px; color: var(--dsh-fg-weak, #8b949e); font-size: 11px; font-family: var(--dsh-mono, monospace); }
.\${NS}-hint { padding: 5px 10px; color: var(--dsh-fg-weak, #8b949e); line-height: 1.5; }
.\${NS}-list { flex: 1 1 auto; padding: 2px 6px 8px; }
.\${NS}-row { display: flex; gap: 8px; align-items: baseline; width: 100%; text-align: left; padding: 2px 8px; border: 0; background: transparent; color: var(--dsh-fg, #c9d1d9); font: inherit; cursor: pointer; border-radius: 4px; white-space: nowrap; overflow: hidden; }
.\${NS}-row:hover { background: var(--dsh-hover, #30363d); }
.\${NS}-row:focus-visible { outline: 1px solid var(--dsh-accent, #2f81f7); outline-offset: -1px; }
.\${NS}-loc { flex: 0 0 auto; min-width: 3.5em; text-align: right; color: var(--dsh-fg-weak, #8b949e); font-family: var(--dsh-mono, monospace); }
.\${NS}-matchtext { min-width: 0; overflow: hidden; text-overflow: ellipsis; font-family: var(--dsh-mono, monospace); }
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
`},{id:"@sunjuntao/dsh-fw-json2interface",name:"JSON 转接口",version:"0.1.0",description:"DSH 文件编辑器「JSON 转接口」插件：Activity Bar 注入视图，基于 dsh-file-workbench-lib v5 注入 API（window.__dshFileWorkbenchVSCode__）。",nameEn:"JSON → TS",descriptionEn:"DSH file editor plugin: activity bar view that infers a TypeScript interface from the active JSON buffer/selection, based on the dsh-file-workbench-lib v5 injection API (window.__dshFileWorkbenchVSCode__).",code:`window.__ModuleLoader__.load({
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
.\${NS}-bar { padding: 8px 10px; display: flex; gap: 6px; position: sticky; top: 0; background: var(--dsh-bg, #0d1117); border-bottom: 1px solid var(--dsh-border, #30363d); z-index: 3; }
.\${NS}-gen { flex: 0 0 auto; padding: 5px 12px; border: 1px solid var(--dsh-accent, #2f81f7); border-radius: 6px; background: var(--dsh-accent-weak, rgba(47,129,247,.14)); color: var(--dsh-accent, #2f81f7); font: inherit; font-weight: 600; cursor: pointer; white-space: nowrap; }
.\${NS}-gen:hover { background: var(--dsh-accent-soft, rgba(47,129,247,.2)); }
.\${NS}-gen:focus-visible { outline: 1px solid var(--dsh-accent, #2f81f7); outline-offset: -1px; }
.\${NS}-name { flex: 1 1 auto; min-width: 0; padding: 5px 8px; border: 1px solid var(--dsh-border, #30363d); border-radius: 6px; background: var(--dsh-bg2, #161b22); color: inherit; outline: none; font: inherit; }
.\${NS}-name::placeholder { color: var(--dsh-fg-muted, #6e7681); }
.\${NS}-name:focus { border-color: var(--dsh-accent, #2f81f7); box-shadow: 0 0 0 2px var(--dsh-accent-weak, rgba(47,129,247,.14)); }
.\${NS}-hint { padding: 5px 10px; color: var(--dsh-fg-weak, #8b949e); line-height: 1.5; }
.\${NS}-out { flex: 1 1 auto; margin: 2px 8px; padding: 8px 10px; border: 1px solid var(--dsh-border, #30363d); border-radius: 8px; background: var(--dsh-bg2, #161b22); color: var(--dsh-info, #79c0ff); font-family: var(--dsh-mono, monospace); font-size: 11px; line-height: 1.6; white-space: pre; overflow: auto; max-height: calc(100vh - 260px); }
.\${NS}-foot { display: flex; gap: 6px; padding: 8px 10px; position: sticky; bottom: 0; background: var(--dsh-bg, #0d1117); border-top: 1px solid var(--dsh-border, #30363d); z-index: 3; }
.\${NS}-copy, .\${NS}-insert { flex: 1 1 auto; padding: 5px 10px; border: 1px solid var(--dsh-border, #30363d); border-radius: 6px; background: var(--dsh-bg2, #161b22); color: inherit; font: inherit; cursor: pointer; }
.\${NS}-copy:hover, .\${NS}-insert:hover { border-color: var(--dsh-accent, #2f81f7); color: var(--dsh-accent, #2f81f7); }
.\${NS}-copy:focus-visible, .\${NS}-insert:focus-visible { outline: 1px solid var(--dsh-accent, #2f81f7); outline-offset: -1px; }
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
`},{id:"@sunjuntao/dsh-fw-md-preview",name:"Markdown 预览",version:"0.1.0",description:"DSH 文件编辑器「Markdown 预览」插件：Activity Bar 注入视图，基于 dsh-file-workbench-lib v5 注入 API（window.__dshFileWorkbenchVSCode__）。",nameEn:"Markdown Preview",descriptionEn:"DSH file editor plugin: activity bar view that live-renders the active Markdown buffer to HTML (dependency-free, escaped), based on the dsh-file-workbench-lib v5 injection API (window.__dshFileWorkbenchVSCode__).",code:`window.__ModuleLoader__.load({
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
.\${NS}-bar { padding: 8px 10px; position: sticky; top: 0; background: var(--dsh-bg, #0d1117); border-bottom: 1px solid var(--dsh-border, #30363d); z-index: 3; }
.\${NS}-title { display: block; font-weight: 600; color: var(--dsh-fg, #c9d1d9); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.\${NS}-body { flex: 1 1 auto; padding: 10px 12px 24px; overflow: auto; line-height: 1.65; overflow-wrap: break-word; }
.\${NS}-body h1,.\${NS}-body h2,.\${NS}-body h3,.\${NS}-body h4,.\${NS}-body h5,.\${NS}-body h6 { margin: .8em 0 .4em; font-weight: 700; line-height: 1.3; }
.\${NS}-body h1 { font-size: 1.5em; border-bottom: 1px solid var(--dsh-border,#30363d); padding-bottom: .2em; }
.\${NS}-body h2 { font-size: 1.3em; }
.\${NS}-body h3 { font-size: 1.12em; }
.\${NS}-body h4 { font-size: 1em; }
.\${NS}-body h5,.\${NS}-body h6 { font-size: .92em; color: var(--dsh-fg-weak,#8b949e); }
.\${NS}-body p { margin: .5em 0; }
.\${NS}-body a { color: var(--dsh-accent, #2f81f7); text-decoration: none; }
.\${NS}-body a:hover { text-decoration: underline; }
.\${NS}-body code { background: var(--dsh-bg3,#21262d); border-radius: 4px; padding: 1px 5px; font-family: var(--dsh-mono, monospace); font-size: .9em; }
.\${NS}-body pre { background: var(--dsh-bg2,#161b22); border: 1px solid var(--dsh-border,#30363d); border-radius: 8px; padding: 10px 12px; overflow: auto; }
.\${NS}-body pre code { background: transparent; border: 0; padding: 0; }
.\${NS}-body blockquote { margin: .5em 0; padding: .2em 12px; border-left: 3px solid var(--dsh-accent,#2f81f7); color: var(--dsh-fg-weak,#8b949e); background: var(--dsh-bg2,#161b22); border-radius: 0 6px 6px 0; }
.\${NS}-body ul,.\${NS}-body ol { margin: .4em 0; padding-left: 1.6em; }
.\${NS}-body li { margin: .15em 0; }
.\${NS}-body hr { border: 0; border-top: 1px solid var(--dsh-border,#30363d); margin: 1em 0; }
.\${NS}-body img { max-width: 100%; border-radius: 6px; }
.\${NS}-empty { color: var(--dsh-fg-muted,#6e7681); font-style: italic; padding: 8px 0; }
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
`},{id:"@sunjuntao/dsh-fw-hex-viewer",name:"十六进制查看器",version:"0.1.0",description:"DSH 文件编辑器「十六进制查看器」插件：Activity Bar 注入视图，基于 dsh-file-workbench-lib v5 注入 API（window.__dshFileWorkbenchVSCode__）。",nameEn:"Hex Viewer",descriptionEn:"DSH file editor plugin: activity bar view that inspects the active file as offset/hex/ASCII (read-only), based on the dsh-file-workbench-lib v5 injection API (window.__dshFileWorkbenchVSCode__).",code:`window.__ModuleLoader__.load({
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
    icon: "binary",
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
.\${NS}-bar { padding: 8px 10px; display: flex; align-items: center; gap: 8px; position: sticky; top: 0; background: var(--dsh-bg, #0d1117); border-bottom: 1px solid var(--dsh-border, #30363d); z-index: 3; }
.\${NS}-name { flex: 1 1 auto; min-width: 0; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.\${NS}-reload { flex: 0 0 auto; width: 28px; height: 24px; padding: 0; border: 1px solid var(--dsh-border, #30363d); border-radius: 6px; background: var(--dsh-bg2, #161b22); color: inherit; font-size: 13px; line-height: 1; cursor: pointer; }
.\${NS}-reload:hover:not(:disabled) { border-color: var(--dsh-accent, #2f81f7); color: var(--dsh-accent, #2f81f7); }
.\${NS}-reload:disabled { opacity: .5; cursor: default; }
.\${NS}-reload:focus-visible { outline: 1px solid var(--dsh-accent, #2f81f7); outline-offset: -1px; }
.\${NS}-hint { padding: 5px 10px; color: var(--dsh-fg-weak, #8b949e); line-height: 1.5; }
.\${NS}-dump { flex: 1 1 auto; margin: 2px 8px 8px; padding: 8px 10px; border: 1px solid var(--dsh-border, #30363d); border-radius: 8px; background: var(--dsh-bg2, #161b22); font-family: var(--dsh-mono, monospace); font-size: 11px; line-height: 1.6; overflow: auto; max-height: calc(100vh - 220px); }
.\${NS}-row { white-space: pre; }
.\${NS}-addr { color: var(--dsh-fg-muted, #6e7681); margin-right: 12px; }
.\${NS}-hex { color: var(--dsh-info, #79c0ff); margin-right: 12px; }
.\${NS}-ascii { color: var(--dsh-fg, #c9d1d9); }
.\${NS}-note { color: var(--dsh-fg-weak, #8b949e); font-style: italic; margin-top: 6px; }
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
`},{id:"@sunjuntao/dsh-fw-local-history",name:"本地历史",version:"0.1.0",description:"DSH 文件编辑器「本地历史」插件：Activity Bar 注入视图，基于 dsh-file-workbench-lib v5 注入 API（window.__dshFileWorkbenchVSCode__）。",nameEn:"Local History",descriptionEn:"DSH file editor plugin: activity bar view that keeps timestamped snapshots of saved files and restores them, based on the dsh-file-workbench-lib v5 injection API (window.__dshFileWorkbenchVSCode__).",code:`window.__ModuleLoader__.load({
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
var PREFIX = "/api/dsh-file-workbench";
var VIEW_ID = "localHistory.view";
var NS = "dsh-lh";
var MAX_PER_FILE = 20;
var DEBOUNCE_MS = 1500;
var MIN_DELTA_CHARS = 8;
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
var historyByProject = /* @__PURE__ */ new Map();
var loadedProjects = /* @__PURE__ */ new Set();
var currentCtx = null;
var currentUi = null;
var saveTimer = null;
var lastSnapshotText = null;
function hashKey(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h.toString(16).padStart(8, "0");
}
function normPath(p) {
  return String(p).replace(/\\\\/g, "/");
}
function persistKey(dir) {
  return \`dsh-fw.localHistory.\${hashKey(String(dir))}\`;
}
async function loadProject(dir) {
  if (!dir || loadedProjects.has(dir)) return;
  loadedProjects.add(dir);
  if (!historyByProject.has(dir)) historyByProject.set(dir, {});
  try {
    const res = await fetch(\`\${PREFIX}/plugin-data?k=\${encodeURIComponent(persistKey(dir))}\`, { headers: { Accept: "application/json" } });
    const body = await res.json().catch(() => null);
    const data = body?.data;
    if (data && typeof data === "object") {
      const clean = {};
      for (const [f, arr] of Object.entries(data)) {
        if (Array.isArray(arr)) clean[f] = arr.filter((e) => e && Number.isFinite(e.ts) && typeof e.text === "string").slice(-MAX_PER_FILE);
      }
      historyByProject.set(dir, clean);
    }
  } catch {
  }
}
function schedulePersist(dir) {
  clearTimeout(schedulePersist._t);
  schedulePersist._t = setTimeout(() => {
    const map = historyByProject.get(dir) ?? {};
    fetch(\`\${PREFIX}/plugin-data\`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ k: persistKey(dir), v: map })
    }).catch(() => {
    });
  }, 400);
}
function maybeSnapshot() {
  const ctx = currentCtx;
  const file = ctx?.activeFile;
  const dir = ctx?.projectDir;
  const ed = ctx?.editor;
  if (!file || !dir || !ed) return;
  const text = ed.getText?.();
  if (text == null) return;
  const key = normPath(file);
  const map = historyByProject.get(dir) ?? {};
  const arr = map[key] ?? [];
  const prev = arr.length ? arr[arr.length - 1].text : "";
  if (arr.length && similarEnough(prev, text)) return;
  arr.push({ ts: Date.now(), text });
  if (arr.length > MAX_PER_FILE) arr.splice(0, arr.length - MAX_PER_FILE);
  map[key] = arr;
  historyByProject.set(dir, map);
  lastSnapshotText = text;
  schedulePersist(dir);
  currentUi?.refresh();
}
function similarEnough(a, b) {
  if (a === b) return true;
  if (Math.abs(a.length - b.length) < MIN_DELTA_CHARS && a.slice(0, 200) === b.slice(0, 200)) return true;
  return false;
}
function scheduleSnapshot() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(maybeSnapshot, DEBOUNCE_MS);
}
function restore(entry) {
  const ctx = currentCtx;
  const ed = ctx?.editor;
  const view = ed?.view;
  if (!ed || !view) {
    ctx?.toast?.("error", "\\u65E0\\u6FC0\\u6D3B\\u7F16\\u8F91\\u5668");
    return;
  }
  const len = view.state.doc.length;
  const ok = ed.applyEdit([{ from: 0, to: len, insert: entry.text }]);
  if (ok) ctx.toast("ok", "\\u5DF2\\u6062\\u590D\\u8BE5\\u5386\\u53F2\\u7248\\u672C\\uFF08\\u53EF\\u7528 Ctrl+Z \\u64A4\\u9500\\uFF09");
  else ctx.toast("error", "\\u6062\\u590D\\u5931\\u8D25");
}
function openCompare(entry) {
  const ctx = currentCtx;
  const cur = ctx?.editor?.getText?.() ?? "";
  const lines = simpleDiffLines(entry.text.split("\\n"), cur.split("\\n"));
  ctx?.openDiff?.(\`\\u5386\\u53F2\\u5BF9\\u6BD4 \\xB7 \${fmtTime(entry.ts)}\`, lines);
}
function simpleDiffLines(oldA, newA) {
  const out = [];
  let prefix = 0;
  while (prefix < oldA.length && prefix < newA.length && oldA[prefix] === newA[prefix]) prefix++;
  let suffix = 0;
  while (suffix < oldA.length - prefix && suffix < newA.length - prefix && oldA[oldA.length - 1 - suffix] === newA[newA.length - 1 - suffix])
    suffix++;
  for (let k = 0; k < prefix; k++) out.push(\` \${oldA[k]}\`);
  const oldMid = oldA.slice(prefix, oldA.length - suffix);
  const newMid = newA.slice(prefix, newA.length - suffix);
  for (const l of oldMid) out.push(\`-\${l}\`);
  for (const l of newMid) out.push(\`+\${l}\`);
  for (let k = oldA.length - suffix; k < oldA.length; k++) out.push(\` \${oldA[k]}\`);
  return out;
}
function fmtTime(ts) {
  const d = new Date(ts);
  const p = (n) => String(n).padStart(2, "0");
  return \`\${d.getFullYear()}-\${p(d.getMonth() + 1)}-\${p(d.getDate())} \${p(d.getHours())}:\${p(d.getMinutes())}:\${p(d.getSeconds())}\`;
}
function renderList(list, ctx) {
  const dir = ctx.projectDir;
  const file = ctx.activeFile;
  if (!dir || !file) {
    list.replaceChildren(emptyNode("\\u5728\\u7F16\\u8F91\\u5668\\u6253\\u5F00\\u4E00\\u4E2A\\u6587\\u4EF6\\u4EE5\\u67E5\\u770B\\u5176\\u672C\\u5730\\u5386\\u53F2\\u3002"));
    return;
  }
  const map = historyByProject.get(dir) ?? {};
  const arr = (map[normPath(file)] ?? []).slice().reverse();
  if (!arr.length) {
    list.replaceChildren(emptyNode("\\u6682\\u65E0\\u5386\\u53F2\\u5FEB\\u7167\\uFF1A\\u7F16\\u8F91\\u5F53\\u524D\\u6587\\u4EF6\\u540E\\u4F1A\\u81EA\\u52A8\\u8BB0\\u5F55\\u3002"));
    return;
  }
  const frag = document.createDocumentFragment();
  for (const entry of arr) {
    const row = document.createElement("div");
    row.className = \`\${NS}-row\`;
    const main = document.createElement("button");
    main.type = "button";
    main.className = \`\${NS}-jump\`;
    main.innerHTML = \`<span class="\${NS}-ts"></span><span class="\${NS}-size"></span>\`;
    main.querySelector(\`.\${NS}-ts\`).textContent = fmtTime(entry.ts);
    main.querySelector(\`.\${NS}-size\`).textContent = \`\${entry.text.length.toLocaleString()} \\u5B57\\u7B26\`;
    main.title = "\\u70B9\\u51FB\\u67E5\\u770B\\u5DEE\\u5F02";
    main.addEventListener("click", () => openCompare(entry));
    const rst = document.createElement("button");
    rst.type = "button";
    rst.className = \`\${NS}-restore\`;
    rst.textContent = "\\u6062\\u590D";
    rst.title = "\\u628A\\u6B64\\u7248\\u672C\\u5199\\u56DE\\u7F13\\u51B2\\u533A";
    rst.addEventListener("click", () => restore(entry));
    row.append(main, rst);
    frag.appendChild(row);
  }
  list.replaceChildren(frag);
}
function emptyNode(text) {
  const d = document.createElement("div");
  d.className = \`\${NS}-empty\`;
  d.textContent = text;
  return d;
}
function buildView() {
  return {
    id: VIEW_ID,
    title: { zh: "\\u672C\\u5730\\u5386\\u53F2", en: "Local History" },
    description: {
      zh: "\\u81EA\\u52A8\\u8BB0\\u5F55\\u7F16\\u8F91\\u5FEB\\u7167\\uFF0C\\u6309\\u65F6\\u95F4\\u5012\\u5E8F\\u5217\\u51FA\\uFF0C\\u53EF\\u5BF9\\u6BD4\\u5DEE\\u5F02\\u5E76\\u4E00\\u952E\\u6062\\u590D\\uFF08\\u5BF9\\u6807 VS Code Local History\\uFF09",
      en: "Auto snapshot on edit; browse, diff and restore past versions. Counterpart of VS Code Local History."
    },
    icon: "clock",
    order: 69,
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
      <div class="\${NS}-bar"><span class="\${NS}-title"></span></div>
      <div class="\${NS}-hint"></div>
      <div class="\${NS}-list"></div>
    </div>\`;
  const titleEl = el.querySelector(\`.\${NS}-title\`);
  const hint = el.querySelector(\`.\${NS}-hint\`);
  const list = el.querySelector(\`.\${NS}-list\`);
  currentCtx = ctx;
  currentUi = { refresh };
  let off = [];
  function refresh() {
    titleEl.textContent = ctx.activeFile ? baseName(ctx.activeFile) : "\\u65E0\\u6FC0\\u6D3B\\u6587\\u4EF6";
    const dir = ctx.projectDir;
    const file = ctx.activeFile;
    const map = dir ? historyByProject.get(dir) ?? {} : {};
    const n = file ? (map[normPath(file)] ?? []).length : 0;
    hint.textContent = n ? \`\${n} \\u4E2A\\u5386\\u53F2\\u7248\\u672C\` : "";
    renderList(list, ctx);
  }
  async function onActiveChanged() {
    lastSnapshotText = null;
    refresh();
  }
  async function onProjectChanged(dir) {
    if (dir) await loadProject(dir);
    refresh();
  }
  if (typeof ctx.onDidChangeActiveFile === "function") off.push(ctx.onDidChangeActiveFile(onActiveChanged));
  if (typeof ctx.editor?.onDidChangeTextDocument === "function") off.push(ctx.editor.onDidChangeTextDocument(scheduleSnapshot));
  if (typeof ctx.onProjectChange === "function") off.push(ctx.onProjectChange(onProjectChanged));
  (async () => {
    if (ctx.projectDir) await loadProject(ctx.projectDir);
    refresh();
  })();
  return () => {
    clearTimeout(saveTimer);
    off.forEach((f) => {
      try {
        f();
      } catch {
      }
    });
    if (currentUi && currentCtx === ctx) currentUi = null;
    if (currentCtx === ctx) currentCtx = null;
    el.replaceChildren();
  };
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
.\${NS}-bar { padding: 8px 10px; position: sticky; top: 0; background: var(--dsh-bg, #0d1117); border-bottom: 1px solid var(--dsh-border, #30363d); z-index: 3; }
.\${NS}-title { display: block; font-weight: 600; color: var(--dsh-fg, #c9d1d9); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.\${NS}-hint { padding: 5px 10px; color: var(--dsh-fg-weak, #8b949e); line-height: 1.5; }
.\${NS}-list { flex: 1 1 auto; padding: 2px 6px 8px; }
.\${NS}-row { display: flex; align-items: center; gap: 4px; border-radius: 4px; }
.\${NS}-row:hover { background: var(--dsh-hover, #30363d); }
.\${NS}-jump { flex: 1 1 auto; min-width: 0; display: flex; gap: 8px; align-items: baseline; text-align: left; padding: 3px 8px; border: 0; background: transparent; color: var(--dsh-fg, #c9d1d9); font: inherit; cursor: pointer; border-radius: 4px; white-space: nowrap; overflow: hidden; }
.\${NS}-jump:focus-visible { outline: 1px solid var(--dsh-accent, #2f81f7); outline-offset: -1px; }
.\${NS}-ts { color: var(--dsh-fg, #c9d1d9); font-family: var(--dsh-mono, monospace); }
.\${NS}-size { min-width: 0; overflow: hidden; text-overflow: ellipsis; color: var(--dsh-fg-weak, #8b949e); }
.\${NS}-restore { flex: 0 0 auto; margin-right: 4px; padding: 2px 8px; border: 1px solid var(--dsh-border, #30363d); border-radius: 6px; background: var(--dsh-bg2, #161b22); color: var(--dsh-fg-weak, #8b949e); font: inherit; font-size: 11px; cursor: pointer; opacity: 0; transition: opacity .1s ease; }
.\${NS}-row:hover .\${NS}-restore, .\${NS}-restore:focus-visible { opacity: 1; }
.\${NS}-restore:hover { color: var(--dsh-accent, #2f81f7); border-color: var(--dsh-accent, #2f81f7); }
.\${NS}-empty { padding: 10px 12px; color: var(--dsh-fg-muted, #6e7681); font-style: italic; text-align: center; }
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
`}],qd="dsh-fw.userPlugins",Wn=g([]),Co=new Map;let Bc=!1,Ri=null;async function V3(t,e){await fetch(`${Yn}/plugin-data`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({k:t,v:e})}).catch(()=>{})}async function z3(t){try{return(await(await fetch(`${Yn}/plugin-data?k=${encodeURIComponent(t)}`,{headers:{Accept:"application/json"}})).json().catch(()=>null))?.data??null}catch{return null}}function Pr(){Ri&&clearTimeout(Ri),Ri=setTimeout(()=>{Ri=null,V3(qd,Wn.value)},300)}async function U3(){const t=await z3(qd);return Array.isArray(t)?t:[]}const zs=new Map;function Ic(){return{load(t){zs.set(t.id,t)}}}function qo(){return{views:Ea().map(t=>t.id),commands:Cr(),status:Na().map(t=>t.id),menu:ai().map(t=>t.id)}}function ua(t,e){const n=(a,r)=>r.filter(u=>!a.includes(u));return{views:n(t.views,e.views),commands:n(t.commands,e.commands),status:n(t.status,e.status),menu:n(t.menu,e.menu)}}function da(t){t&&(t.views.forEach($a),t.commands.forEach(xr),t.status.forEach(Ta),t.menu.forEach(Fa))}const Kd=/__ModuleLoader__|__dshFileWorkbench(?:VSCode|Workbench)__/,H3=/__ModuleLoader__\.load\(\s*\{\s*id\s*:\s*(["'])((?:(?!\1)[\s\S])*)\1/;function Xd(t){if(!t.trim())return{ok:!1,error:v("pmCheckEmpty")};const e=t.match(H3);return{ok:Kd.test(t),error:v("pmCheckNotPlugin"),loaderId:e?.[2]?.trim()||void 0}}function W3(t){return/\bcreateDecorations\b/.test(t)?5.1:/\bctx\.editor\b|\beditor\s*[:.]|\bapiVersion\s*>=\s*5\b/.test(t)?5:1}const jc="dsh-fw.wrapped-plugin";function G3(t,e=W3(t)){const n=window,a=n.__ModuleLoader__,r=new Set(zs.keys());n.__ModuleLoader__=Ic();try{(0,eval)(t)}finally{n.__ModuleLoader__=a}let u=[...zs.keys()].filter(w=>!r.has(w));if(!u.length&&Kd.test(t)){const w=qo();if(Xl(ua(w,qo()))){const b=`window.__ModuleLoader__.load({id:${JSON.stringify(jc)},factory:(require)=>{var module={exports:{}};var exports=module.exports;
${t}
;return {apply(){}};}});`;n.__ModuleLoader__=Ic();try{(0,eval)(b)}finally{n.__ModuleLoader__=a}u=[...zs.keys()].filter(_=>!r.has(_))}}const h=qo(),d=[];for(const w of u){const b=zs.get(w);if(w===jc)continue;const _=K3(b,e);_&&d.push(_)}const p=ua(h,qo());return Object.defineProperty(p,"__confirms",{value:d,enumerable:!1})}function q3(t){return t.__confirms??[]}function Xl(t){return!t.views.length&&!t.commands.length&&!t.status.length&&!t.menu.length}function K3(t,e){if(e>$o)throw new Error(v("pmCheckNeedsHost",{need:e,have:$o}));if(typeof t.factory!="function")return null;const n=window,a="__dshFileWorkbenchVSCode__",r="__dshFileWorkbenchWorkbench__",u=()=>{},h=n[a],d=n[r];n[a]={apiVersion:$o,activityBar:{register:u,unregister:u},commands:{register:u,unregister:u,execute:u,list:()=>[],has:()=>!1},statusbar:{register:u,unregister:u,list:()=>[],registerMenu:u,unregisterMenu:u,listMenu:()=>[]}},n[r]={apiVersion:$o,activityBar:{register:u,unregister:u},statusbar:{register:u,unregister:u,list:()=>[]},backgroundTasks:{start:()=>({step:u,updateLabel:u,done:u,fail:u}),clearFinished:async()=>{},clearAll:async()=>{}}};try{const _=t.factory(()=>{});typeof _?.apply=="function"&&_.apply()}finally{n[a]=h,n[r]=d}const p=qo(),w=t.factory(()=>{});typeof w?.apply=="function"&&w.apply();const b=ua(p,qo());return Xl(b)?new Promise((_,M)=>{setTimeout(()=>{const O=ua(p,qo());if(!Xl(O))return _();da(O),M(new Error(v("pmCheckNoContrib")))},250)}):null}function Ns(t){return Wn.value.find(e=>e.id===t)}async function Ts(t){const e=Ns(t);if(e){da(Co.get(t)),Co.delete(t);try{const n=G3(e.code);Co.set(t,n),await Promise.all(q3(n)),e.enabled=!0,e.activated=!0,e.error=void 0}catch(n){e.enabled=!1,e.activated=!1,e.error=n instanceof Error?n.message:String(n),da(Co.get(t)),Co.delete(t)}Pr()}}function fa(t){const e=Ns(t);e&&(da(Co.get(t)),Co.delete(t),e.enabled=!1,e.error=void 0,Pr())}function X3(t){const e=Ns(t);!e||e.source==="builtin"||(fa(t),Wn.value=Wn.value.filter(n=>n.id!==t),Pr())}function Yd(t){return t.trim()}function Jd(t){const e=Wn.value.findIndex(n=>n.id===t.id);e>=0?Wn.value.splice(e,1,t):Wn.value=[...Wn.value,t]}async function Y3(t){const e=await t.text(),n=Xd(e);if(!n.ok)return{ok:!1,error:n.error};const a=Yd(n.loaderId||t.name.replace(/\.(c|m)?js$/i,""))||`file-${Date.now()}`;Jd({id:a,name:t.name,source:"file",origin:t.name,code:e,enabled:!1}),await Ts(a);const r=Ns(a);return{ok:!!r?.enabled,error:r?.error,id:a}}async function J3(t){const e=t.trim();if(!e)return{ok:!1,error:v("pmCheckEmpty")};const n=await fetch(`${Yn}/fetch-plugin`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({url:e})}),a=await n.json().catch(()=>({ok:!1,error:"bad response"}));if(!a.ok||!a.data)return{ok:!1,error:a.error||`HTTP ${n.status}`};const{code:r,name:u}=a.data,h=Xd(r);if(!h.ok)return{ok:!1,error:h.error};const d=u||e.split("/").pop()||e,p=Yd(h.loaderId||d.replace(/\.(c|m)?js$/i,""))||`url-${Date.now()}`;Jd({id:p,name:d,source:"url",origin:e,code:r,enabled:!1}),await Ts(p);const w=Ns(p);return{ok:!!w?.enabled,error:w?.error,id:p}}function Q3(t){const e=new Map(t.map(n=>[n.id,n]));for(const n of j3){const a=e.get(n.id);a?a.source==="builtin"&&Object.assign(a,{name:n.name,version:n.version,description:n.description,nameEn:n.nameEn,descriptionEn:n.descriptionEn,code:n.code}):e.set(n.id,{id:n.id,name:n.name,source:"builtin",origin:n.id,version:n.version,description:n.description,nameEn:n.nameEn,descriptionEn:n.descriptionEn,code:n.code,enabled:!1})}return[...e.values()]}async function Z3(){if(Bc||typeof window>"u")return;Bc=!0;const t=await U3();Wn.value=Q3(t);for(const e of[...Wn.value]){if(!e.enabled)continue;if(!e.activated){e.enabled=!1,e.error=void 0;continue}await Ts(e.id);const n=Ns(e.id);n&&!n.enabled&&Y("error",v("pmRestoreFailed",{name:n.name,msg:n.error||""}))}}function Ho(){return Wn.value}function Qd(t){return Co.get(t)?.views??[]}const Vc=1500;function e5(t,e){const n=t.split(`
`),a=e.split(`
`);if(t===e)return{lines:[]};let r=0;for(;r<n.length&&r<a.length&&n[r]===a[r];)r+=1;let u=n.length,h=a.length;for(;u>r&&h>r&&n[u-1]===a[h-1];)u-=1,h-=1;const d=n.slice(r,u),p=a.slice(r,h);if(d.length>Vc||p.length>Vc)return null;const w=d.length,b=p.length,_=new Int32Array((w+1)*(b+1)),M=(G,F)=>G*(b+1)+F;for(let G=w-1;G>=0;G-=1)for(let F=b-1;F>=0;F-=1)_[M(G,F)]=d[G]===p[F]?_[M(G+1,F+1)]+1:Math.max(_[M(G+1,F)],_[M(G,F+1)]);const O=[];let N=0,j=0;for(;N<w&&j<b;)d[N]===p[j]?(O.push({kind:" ",text:d[N]}),N+=1,j+=1):_[M(N+1,j)]>=_[M(N,j+1)]?(O.push({kind:"-",text:d[N]}),N+=1):(O.push({kind:"+",text:p[j]}),j+=1);for(;N<w;)O.push({kind:"-",text:d[N]}),N+=1;for(;j<b;)O.push({kind:"+",text:p[j]}),j+=1;const H=3,C=["--- 磁盘版本","+++ 未保存改动"];let Z=0;for(;Z<O.length;){if(O[Z].kind===" "){Z+=1;continue}let G=Math.max(0,Z-H);for(;G>0&&O[G].kind===" "&&Z-G<H;)G-=1;let F=Z,de=0,I=Z;for(;F<O.length;){if(O[F].kind!==" ")de=0,I=F;else if(de+=1,de>=H*2)break;F+=1}const he=Math.min(O.length,I+1+H),xe=O.slice(G,he),ge=r+G+1,ne=r+G+1;C.push(`@@ -${ge} +${ne} @@`);for(const ae of xe)C.push(ae.kind+ae.text);Z=he}return{lines:C}}const zc="host.plugin-manager",me="dsh-pm";function t5(t){return!ga()&&t.descriptionEn||t.description||""}let Uc=!1,Hc=!1,Zd;const Qo=new Set;function ws(){return new Set(Ea().map(t=>t.id))}function Zs(t,e){if(!t||!t.enabled||t.error)return;const n=Qd(t.id);if(!n.length)return;const a=Ea().find(u=>u.id===n[0]);if(a?.when&&!a.when(n5()))return;[...ws()].some(u=>!e.has(u)&&u!==Zd)?Qo.delete(t.id):Qo.add(t.id)}function n5(){return{projectDir:Yl,language:ga()?"zh":"en"}}let Yl;function o5(){Uc||typeof window>"u"||(Uc=!0,Hc||(Hc=!0,Z3().then(()=>Mi?.())),_r({id:zc,title:{zh:"插件管理",en:"Plugins"},icon:"puzzle",order:Number.MAX_SAFE_INTEGER,mount(t,e){Zd=zc,Yl=e.projectDir??void 0;const n=e.onProjectChange(r=>{Yl=r??void 0}),a=h5(t,e);return Mi=a.rerender,()=>{n(),Mi===a.rerender&&(Mi=void 0),a.cleanup()}}}))}let Mi;function s5(){if(typeof document>"u"||document.getElementById(`${me}-styles`))return;const t=`
.${me}-view,.${me}-menu{
  --pm-fg:#1f2328; --pm-fg-weak:#656d76; --pm-fg-muted:#8b949e;
  --pm-bg:#ffffff; --pm-bg2:#f6f8fa; --pm-bg3:#eaeef2;
  --pm-border:#d0d7de; --pm-hover:#e7ebef; --pm-accent:#0969da;
  --pm-danger:#cf222e; --pm-purple:#8250df; --pm-info:#0550ae; --pm-warn:#9a6700;
  --pm-input:#f2f4f7; --pm-menu:#ffffff; --pm-shadow:0 8px 24px rgba(31,35,40,.18);
  --pm-av-builtin:#57606a; --pm-av-file:#1f6feb; --pm-av-url:#8250df;}
.${me}-view{color:var(--pm-fg);font-size:13px;}
:is(html[data-theme="dark"],html.dark,.fw-root[data-theme="dark"],.vs-pane[data-theme="dark"]) .${me}-view,
:is(html[data-theme="dark"],html.dark,.fw-root[data-theme="dark"],.vs-pane[data-theme="dark"]) .${me}-menu{
  --pm-fg:#c9d1d9; --pm-fg-weak:#8b949e; --pm-fg-muted:#6e7681;
  --pm-bg:#0d1117; --pm-bg2:#161b22; --pm-bg3:#21262d;
  --pm-border:#30363d; --pm-hover:#30363d; --pm-accent:#2f81f7;
  --pm-danger:#f85149; --pm-purple:#d2a8ff; --pm-info:#79c0ff; --pm-warn:#d29922;
  --pm-input:#0d1117; --pm-menu:#1c2128; --pm-shadow:0 8px 24px rgba(1,4,9,.6);
  --pm-av-builtin:#6e7681; --pm-av-file:#388bfd; --pm-av-url:#a371f7;}
.${me}-root{display:flex;flex-direction:column;height:100%;min-height:0;gap:0;}

/* ---- 标题栏：标题 + 右侧工具条（排序 + 管理⋯），VS Code 同款 ---- */
.${me}-hdr{display:flex;align-items:center;gap:6px;padding:6px 6px 6px 12px;position:sticky;top:0;background:var(--pm-bg);z-index:2;}
.${me}-title{font-size:11px;font-weight:400;letter-spacing:.4px;text-transform:uppercase;color:var(--pm-fg-weak);}
.${me}-spacer{flex:1 1 auto;}
.${me}-tool{width:24px;height:22px;border:none;border-radius:4px;background:transparent;color:var(--pm-fg-weak);cursor:pointer;display:flex;align-items:center;justify-content:center;}
.${me}-tool:hover{background:var(--pm-hover);color:var(--pm-fg);}
.${me}-tool svg{width:15px;height:15px;}

/* ---- 搜索框 ---- */
.${me}-search{padding:2px 12px 8px;position:relative;}
.${me}-search-box{display:flex;align-items:center;gap:6px;padding:5px 8px;border:1px solid transparent;border-radius:3px;background:var(--pm-input);}
.${me}-search-box:focus-within{border-color:var(--pm-accent);}
.${me}-search-box svg{width:14px;height:14px;flex:0 0 auto;color:var(--pm-fg-muted);}
.${me}-search-input{flex:1 1 auto;min-width:0;border:none;outline:none;background:transparent;color:inherit;font-size:13px;}
.${me}-search-input::placeholder{color:var(--pm-fg-muted);}

/* ---- 可折叠分组头（▶ 已安装 (N)）---- */
.${me}-section-head{display:flex;align-items:center;gap:5px;padding:4px 12px;font-size:11px;font-weight:700;color:var(--pm-fg);cursor:pointer;user-select:none;position:sticky;top:0;z-index:1;background:var(--pm-bg);}
.${me}-section-head:hover{color:var(--pm-fg);}
.${me}-twist{font-size:9px;line-height:1;color:var(--pm-fg-weak);transition:transform .1s;width:10px;}
.${me}-section.collapsed .${me}-twist{transform:rotate(-90deg);}
.${me}-section-count{font-weight:400;color:var(--pm-fg-weak);}
.${me}-section-body{overflow:hidden;}
.${me}-section.collapsed .${me}-section-body{display:none;}

/* ---- 列表行：紧凑，图标 · 两行文本，hover 浮出操作 ---- */
.${me}-list{display:flex;flex-direction:column;padding:1px 0 6px;}
.${me}-row{display:flex;align-items:flex-start;gap:10px;padding:6px 12px;cursor:default;position:relative;}
.${me}-row:hover{background:var(--pm-hover);}
.${me}-row.is-disabled{opacity:.55;}
.${me}-avatar{width:32px;height:32px;flex:0 0 auto;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:700;color:#fff;background:var(--pm-av-builtin);overflow:hidden;}
.${me}-avatar.file{background:var(--pm-av-file);}
.${me}-avatar.url{background:var(--pm-av-url);}
.${me}-avatar img{width:100%;height:100%;object-fit:cover;}
.${me}-main{flex:1 1 auto;min-width:0;display:flex;flex-direction:column;gap:1px;padding-top:1px;}
.${me}-nameline{display:flex;align-items:baseline;gap:6px;white-space:nowrap;overflow:hidden;}
.${me}-name{font-weight:600;font-size:13px;color:var(--pm-fg);overflow:hidden;text-overflow:ellipsis;flex:0 1 auto;}
.${me}-vendor{font-size:11px;color:var(--pm-fg-weak);font-weight:400;overflow:hidden;text-overflow:ellipsis;flex:0 1 auto;}
.${me}-ver{font-size:11px;color:var(--pm-fg-muted);flex:0 0 auto;}
.${me}-desc{font-size:12px;color:var(--pm-fg-weak);line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}
.${me}-err{font-size:11px;color:var(--pm-danger);margin-top:2px;word-break:break-all;}

/* ---- 行内操作区：hover 才显出（VS Code 悬停浮出）---- */
.${me}-rowacts{position:absolute;top:6px;right:10px;display:none;align-items:center;gap:4px;}
.${me}-row:hover .${me}-rowacts{display:flex;}
.${me}-btn{font-size:11px;padding:2px 8px;border-radius:3px;border:1px solid var(--pm-border);background:var(--pm-bg2);color:var(--pm-fg);cursor:pointer;white-space:nowrap;}
.${me}-btn.primary{background:var(--pm-accent);border-color:var(--pm-accent);color:#fff;}
.${me}-btn:hover{filter:brightness(1.05);}
.${me}-gear{width:22px;height:22px;border:none;border-radius:3px;background:transparent;color:var(--pm-fg-weak);cursor:pointer;display:flex;align-items:center;justify-content:center;}
.${me}-gear:hover{background:color-mix(in srgb,var(--pm-fg) 12%,transparent);color:var(--pm-fg);}
.${me}-gear svg{width:14px;height:14px;}

/* ---- 下拉菜单（fixed 定位，坐标由 JS 按锚点设定，挂 body 脱离 transform 包含块）---- */
.${me}-menu{position:fixed;z-index:9999;min-width:176px;max-width:90vw;max-height:70vh;overflow:auto;padding:4px;border-radius:6px;background:var(--pm-menu);border:1px solid var(--pm-border);box-shadow:var(--pm-shadow);display:none;}
.${me}-menu.open{display:block;}
.${me}-menu-item{display:flex;align-items:center;gap:8px;padding:6px 10px;font-size:12px;border-radius:4px;cursor:pointer;color:var(--pm-fg);}
.${me}-menu-item:hover{background:var(--pm-accent);color:#fff;}
.${me}-menu-item.danger:hover{background:var(--pm-danger);}
.${me}-menu-sep{height:1px;margin:4px 6px;background:var(--pm-border);}

/* ---- URL 输入弹层 ---- */
.${me}-url-panel{overflow:hidden;max-height:0;opacity:0;transition:max-height .2s ease,opacity .15s;padding:0 12px;}
.${me}-url-panel.open{max-height:48px;opacity:1;padding-bottom:8px;}
.${me}-url-inner{display:flex;gap:6px;}
.${me}-url-input{flex:1 1 auto;min-width:0;padding:5px 8px;border:1px solid var(--pm-border);border-radius:3px;background:var(--pm-input);color:var(--pm-fg);font-size:12px;outline:none;}
.${me}-url-input:focus{border-color:var(--pm-accent);}
.${me}-url-go{padding:5px 12px;font-size:12px;border:none;border-radius:3px;background:var(--pm-accent);color:#fff;cursor:pointer;}
.${me}-url-go:hover{filter:brightness(1.1);}

/* ---- 空态 ---- */
.${me}-empty{display:flex;flex-direction:column;align-items:center;gap:8px;padding:32px 16px;color:var(--pm-fg-muted);}
.${me}-empty-icon{font-size:28px;opacity:.5;}
.${me}-empty-text{font-size:12px;text-align:center;line-height:1.6;}

/* ---- 「需要重新加载」横幅（VS Code Reload Required 同款） ---- */
.${me}-reload{display:flex;align-items:center;gap:8px;margin:8px 8px 10px;padding:8px 10px;border:1px solid color-mix(in srgb, var(--pm-warn) 45%, transparent);border-radius:6px;background:color-mix(in srgb, var(--pm-warn) 12%, var(--pm-bg));}
.${me}-reload-text{flex:1 1 auto;font-size:12px;line-height:1.5;color:var(--pm-fg);}
.${me}-reload-x{flex:0 0 auto;border:0;background:transparent;color:var(--pm-fg-muted);font-size:14px;line-height:1;padding:2px 4px;cursor:pointer;}
.${me}-reload-x:hover{color:var(--pm-fg);}
`,e=document.createElement("style");e.id=`${me}-styles`,e.textContent=t,document.head.appendChild(e)}const i5='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',a5='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3.2"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',l5='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h13M4 12h9M4 18h5"/></svg>';let Jl="",pa=!1,Ql="install";function r5(t){return v(t==="builtin"?"srcBuiltin":t==="file"?"srcFile":"srcUrl")}function ef(t){if(!ga()){const n=t.descriptionEn?.match(/Counterpart of (.+?)\./);if(n)return n[1].trim()}const e=t.description?.match(/对标\s*([^。（(]+)/);return e?e[1].trim():r5(t.source)}function c5(t){return(ha(t)[0]??"?").toUpperCase()}function u5(t,e){return e?`${t.name} ${t.nameEn??""} ${t.description??""} ${t.descriptionEn??""} ${ef(t)}`.toLowerCase().includes(e):!0}function ha(t){return t.name.replace(/^@[^/]+\//,"")}function Us(t){return!ga()&&t.nameEn||ha(t)}function d5(t){const e=[...t];return Ql==="name"?e.sort((n,a)=>Us(n).localeCompare(Us(a))):Ql==="source"&&e.sort((n,a)=>n.source.localeCompare(a.source)||Us(n).localeCompare(Us(a))),e}let Ui=null;function Zl(t,e){tf();const n=document.createElement("div");n.className=`${me}-menu`;for(const b of e){const _=document.createElement("div");_.className=`${me}-menu-item${b.danger?" danger":""}`,_.textContent=b.label,_.addEventListener("click",M=>{M.stopPropagation(),p(),b.onClick()}),n.append(_)}document.body.appendChild(n);const a=t.getBoundingClientRect();n.style.visibility="hidden",n.classList.add("open");const r=n.offsetWidth,u=n.offsetHeight;let h=a.right-r;h<8&&(h=Math.max(8,a.left)),h+r>window.innerWidth-8&&(h=Math.max(8,window.innerWidth-8-r));let d=a.bottom+4;d+u>window.innerHeight-8&&(d=Math.max(8,a.top-4-u)),n.style.left=`${h}px`,n.style.top=`${d}px`,n.style.visibility="";function p(){document.removeEventListener("mousedown",w,!0),window.removeEventListener("resize",p),n.remove(),Ui?.el===n&&(Ui=null)}function w(b){n.contains(b.target)||p()}requestAnimationFrame(()=>document.addEventListener("mousedown",w,!0)),window.addEventListener("resize",p),Ui={el:n,close:p}}function tf(){Ui?.close()}function an(t,e){const n=t.querySelector(`.${me}-listwrap`);if(!n)return;const a=Jl.trim().toLowerCase(),r=Ho(),u=d5(r.filter(w=>u5(w,a)));n.classList.toggle("collapsed",pa);const h=n.querySelector(`.${me}-section-count`);h&&(h.textContent=`(${u.length})`);const d=n.querySelector(`.${me}-list`);if(!d||(d.replaceChildren(),pa))return;if(!u.length){const w=document.createElement("div");w.className=`${me}-empty`,w.innerHTML=`<div class="${me}-empty-icon">&#x2699;</div><div class="${me}-empty-text">${a?v("pmEmptyWithQuery",{q:f5(Jl)}):v("pmEmptyNoPlugins")}</div>`,d.append(w);return}for(const w of u)d.append(p5(w,t,e));const p=[...Qo].filter(w=>r.some(b=>b.id===w&&b.enabled));if(p.length){const w=document.createElement("div");w.className=`${me}-reload`;const b=document.createElement("span");b.className=`${me}-reload-text`,b.textContent=v("pmReloadRequired",{n:String(p.length)});const _=document.createElement("button");_.type="button",_.className=`${me}-btn primary`,_.textContent=v("pmReloadNow"),_.addEventListener("click",O=>{O.stopPropagation(),window.location.reload()});const M=document.createElement("button");M.type="button",M.className=`${me}-tool ${me}-reload-x`,M.title=v("pmReloadDismiss"),M.textContent="×",M.addEventListener("click",O=>{O.stopPropagation();for(const N of p)Qo.delete(N);an(t,e)}),w.append(b,_,M),d.append(w)}}function f5(t){return t.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}function p5(t,e,n){const a=document.createElement("div");a.className=`${me}-row${t.enabled?"":" is-disabled"}`;const r=document.createElement("div");r.className=`${me}-avatar ${t.source}`,r.textContent=c5(t),a.append(r);const u=document.createElement("div");u.className=`${me}-main`;const h=document.createElement("div");h.className=`${me}-nameline`;const d=document.createElement("span");d.className=`${me}-name`,d.textContent=Us(t),d.title=t.origin||t.name;const p=document.createElement("span");if(p.className=`${me}-vendor`,p.textContent=ef(t),h.append(d,p),t.version){const O=document.createElement("span");O.className=`${me}-ver`,O.textContent=`v${t.version}`,h.append(O)}u.append(h);const w=t5(t);if(w){const O=document.createElement("div");O.className=`${me}-desc`,O.textContent=w,u.append(O)}if(t.enabled&&!n.projectDir){const O=document.createElement("div");O.className=`${me}-desc`,O.style.color="var(--pm-warn)",O.textContent=v("pmNeedsProject"),u.append(O)}if(t.error){const O=document.createElement("div");O.className=`${me}-err`,O.textContent=t.error,u.append(O)}a.append(u);const b=document.createElement("div");b.className=`${me}-rowacts`;const _=document.createElement("button");_.type="button",_.className=`${me}-btn${t.enabled?"":" primary"}`,_.textContent=t.enabled?v("pmDisable"):v("pmEnable"),_.addEventListener("click",O=>{if(O.stopPropagation(),t.enabled)fa(t.id),Qo.delete(t.id),an(e,n);else{const N=ws();Ts(t.id).then(()=>{t.error&&n.toast("error",v("pmEnableFailed",{name:ha(t),msg:t.error})),Zs(t,N),an(e,n)})}}),b.append(_);const M=document.createElement("button");return M.type="button",M.className=`${me}-gear`,M.title=v("pmMoreActions"),M.innerHTML=a5,M.addEventListener("click",O=>{O.stopPropagation();const N=[{label:t.enabled?v("pmDisable"):v("pmEnable"),onClick:()=>{if(t.enabled)fa(t.id),Qo.delete(t.id),an(e,n);else{const j=ws();Ts(t.id).then(()=>{t.error&&n.toast("error",v("pmEnableFailed",{name:ha(t),msg:t.error})),Zs(t,j),an(e,n)})}}}];t.source!=="builtin"&&N.push({label:v("pmRemove"),danger:!0,onClick:()=>{X3(t.id),an(e,n)}}),Zl(M,N)}),b.append(M),a.append(b),a}function Wc(t,e){const n=document.createElement("div");n.className=`${me}-root`;const a=document.createElement("div");a.className=`${me}-hdr`;const r=document.createElement("div");r.className=`${me}-title`,r.textContent=v("pmTitle");const u=document.createElement("div");u.className=`${me}-spacer`;const h=document.createElement("button");h.type="button",h.className=`${me}-tool`,h.title=v("pmSort"),h.innerHTML=l5,h.addEventListener("click",he=>{he.stopPropagation();const xe=(ge,ne)=>({label:ne,onClick:()=>{Ql=ge,an(n,e)}});Zl(h,[xe("install",v("pmSortInstall")),xe("name",v("pmSortName")),xe("source",v("pmSortSource"))])});const d=document.createElement("button");d.type="button",d.className=`${me}-tool`,d.title=v("pmManage"),d.textContent="⋯",a.append(r,u,h,d);const p=document.createElement("div");p.className=`${me}-search`;const w=document.createElement("div");w.className=`${me}-search-box`,w.innerHTML=i5;const b=document.createElement("input");b.type="text",b.className=`${me}-search-input`,b.placeholder=v("pmSearchPlaceholder"),b.addEventListener("input",()=>{Jl=b.value,an(n,e)}),w.append(b),p.append(w);const _=document.createElement("div");_.className=`${me}-listwrap`;const M=document.createElement("div");M.className=`${me}-section-head`;const O=document.createElement("span");O.className=`${me}-twist`,O.textContent="▾";const N=document.createElement("span");N.textContent=v("pmInstalled");const j=document.createElement("span");j.className=`${me}-section-count`,M.append(O,N,j),M.addEventListener("click",()=>{pa=!pa,an(n,e)});const H=document.createElement("div");H.className=`${me}-list`,_.append(M,H);const C=document.createElement("input");C.type="file",C.accept=".js,.cjs,.mjs,text/javascript",C.multiple=!0,C.style.display="none",C.addEventListener("change",async()=>{const he=[...C.files??[]];for(const xe of he){const ge=ws();try{const ne=await Y3(xe);if(!ne.ok)e.toast("error",v("pmImportFailed",{name:xe.name,msg:ne.error||""}));else if(ne.id){const ae=Ho().find(Ee=>Ee.id===ne.id);ae&&Zs(ae,ge)}}catch(ne){e.toast("error",v("pmImportFailed",{name:xe.name,msg:ne instanceof Error?ne.message:String(ne)}))}}C.value="",an(n,e)});const Z=document.createElement("div");Z.className=`${me}-url-panel`;const G=document.createElement("div");G.className=`${me}-url-inner`;const F=document.createElement("input");F.type="text",F.className=`${me}-url-input`,F.placeholder=v("pmUrlPlaceholder");const de=document.createElement("button");de.type="button",de.className=`${me}-url-go`,de.textContent=v("pmPull");const I=async()=>{const he=F.value.trim();if(!he)return;de.disabled=!0,de.textContent=v("pmPulling");const xe=ws();try{const ge=await J3(he);if(ge.ok){if(F.value="",Z.classList.remove("open"),e.toast("ok",v("pmUrlImported")),ge.id){const ne=Ho().find(ae=>ae.id===ge.id);ne&&Zs(ne,xe)}}else e.toast("error",v("pmUrlImportFailed",{msg:ge.error||""}))}catch(ge){e.toast("error",v("pmUrlImportFailed",{msg:ge instanceof Error?ge.message:String(ge)}))}finally{de.disabled=!1,de.textContent=v("pmPull"),an(n,e)}};return de.addEventListener("click",()=>void I()),F.addEventListener("keydown",he=>{he.key==="Enter"&&I()}),G.append(F,de),Z.append(G),d.addEventListener("click",he=>{he.stopPropagation(),Zl(d,[{label:v("pmImportFromFile"),onClick:()=>C.click()},{label:v("pmImportFromUrl"),onClick:()=>{Z.classList.toggle("open"),Z.classList.contains("open")&&setTimeout(()=>F.focus(),80)}},{label:v("pmEnableAll"),onClick:()=>{const xe=Ho().filter(ne=>!ne.enabled),ge=ws();Promise.all(xe.map(ne=>Ts(ne.id))).then(()=>{for(const ne of xe)Zs(Ho().find(ae=>ae.id===ne.id),ge);an(n,e)})}},{label:v("pmDisableAll"),onClick:()=>{for(const xe of Ho())xe.enabled&&(fa(xe.id),Qo.delete(xe.id));an(n,e)}}])}),n.append(a,p,Z,_,C),t.replaceChildren(n),an(n,e),{cleanup(){tf(),t.replaceChildren()},rerender(){an(n,e)}}}function h5(t,e){s5(),t.classList.add(`${me}-view`);const n=document.createElement("div");n.className=`${me}-inner`,n.style.cssText="display:flex;flex-direction:column;height:100%;min-height:0;",t.replaceChildren(n);let a=Wc(n,e);const{locale:r}=Mt(),u=Je(r,()=>{a.cleanup(),a=Wc(n,e)});return{cleanup(){u(),a.cleanup(),t.replaceChildren()},rerender(){a.rerender()}}}const v5=["data-theme"],m5=["title"],g5={class:"vs-topbar-txt"},y5=["title"],w5={class:"vs-topbar-txt"},b5=["title"],_5={class:"vs-topbar-txt vs-recent-name"},k5=["title"],x5=["title","disabled"],C5={class:"vs-quickopen-ph"},S5=["title"],$5=["disabled","title","onClick","onContextmenu"],E5={key:1,class:"vs-act-letter"},D5={class:"vs-left-main"},T5={key:1,class:"fw-empty vs-git-empty"},N5={class:"vs-right"},F5={class:"vs-editor-wrap"},P5={key:0,class:"vs-diffpane"},A5={key:1,class:"vs-empty"},R5={class:"vs-empty-title"},M5={class:"vs-empty-hint"},O5={class:"vs-empty-actions"},L5={key:2,class:"vs-loading-big"},B5={key:3,class:"vs-error"},I5={key:4,class:"vs-empty"},j5={class:"vs-empty-hint"},V5={class:"vs-status"},z5=["title"],U5={key:1,class:"vs-status-readonly"},H5=["title"],W5={class:"vs-status-seg"},G5=["disabled"],q5=["disabled"],K5={class:"vs-status-seg"},X5=["placeholder","onKeydown"],Y5={class:"vs-quickopen-list"},J5=["title","onMousedown","onMouseenter"],Q5={class:"vs-search-name"},Z5={class:"vs-search-dir"},eD={key:0,class:"vs-search-note"},tD={key:1,class:"vs-search-note"},Gc=new Set,qc=new Set,nD=vt({__name:"VSCodePane",setup(t){const e=tr(Aa)??Tr(),n=e.state,a=e.ready,r=B(()=>n.projectDir?Wt(n.projectDir)?El(n.projectDir):n.projectDir:v("vsNoProject")),u=e.rootKey,h=()=>e.init(),d=()=>e.persist(),p=f=>e.rememberProject(f),w=f=>e.fileViewOf(f),b=(f,k)=>e.rememberFileView(f,k),_=f=>e.stashOpenBuffers(f),M=()=>e.takeStashedBuffers(),O=`vscode:${e.slot}`,N=g(null),j=br(N),H=B(()=>({fontSize:`${Ue.fontSize??13}px`,"--vs-fs-scale":String((Ue.fontSize??13)/13)})),C=gt({}),Z=gt(new Set),G=gt({}),F=gt({}),de=g(!1),I=g(!1),he=B(()=>{const f=n.projectDir;if(!f)return null;if(Wt(f))return ta(f)||null;const k=f.replace(/[\\/]+$/,""),X=Math.max(k.lastIndexOf("/"),k.lastIndexOf("\\"));if(X<=0)return null;const Me=k.slice(0,X);return/^[A-Za-z]:$/.test(Me)?null:Me}),xe=g(!1),ge=g(null),ne=g(""),ae=g(null),Ee="dsh-file-workbench.vscode.activeView";function Ve(){try{return localStorage.getItem(Ee)??"files"}catch{return"files"}}const be=g(Ve()),Pe=g(!1);function W(f){be.value=f;try{localStorage.setItem(Ee,f)}catch{}}Je(()=>n.projectDir,f=>{!f&&be.value!=="files"&&(be.value="files")});const J=g("");Je(()=>n.projectDir,async f=>{if(J.value="",!!f)try{const k=await ei(f);if(k.inRepo&&k.repo)J.value=k.branch||"HEAD";else{const X=await ho(f);X.inRepo&&X.svnAvailable&&(J.value=X.revision?`r${X.revision}`:"svn")}}catch{}},{immediate:!0});function z(f,k){n.projectDir&&so(ns(f,n.projectDir),{line:k})}const ee=gt({line:1,col:1});let ye=null;function je(f){return f.split(/[\\/]/).filter(Boolean).pop()??f}function Ke(f){const k=Math.max(f.lastIndexOf("/"),f.lastIndexOf("\\"));if(k<0)return"";const X=k===0?f.slice(0,1):f.slice(0,k);return/^[A-Za-z]:$/.test(X)?`${X}${f[k]}`:X}function Ze(f){return Wt(f)?ta(f)||f:Ke(f)||f}function we(f,k){if(!f)return!1;const X=f.replace(/[\\/]+$/,"").toLowerCase(),Me=k.replace(/[\\/]+$/,"").toLowerCase();return Me===X||Me.startsWith(`${X}\\`)||Me.startsWith(`${X}/`)}const _e="vs-diff://",Ye=B(()=>{const f=n.openTabs.map(k=>({path:k,dirty:C[k]?.dirty??!1,conflict:C[k]?.conflict??!1}));return nn.value&&f.push({path:_e+nn.value.title,dirty:!1,icon:"fileOut"}),f}),ot=B(()=>nn.value?_e+nn.value.title:n.activeTab);function pe(f){return f.startsWith(_e)}const Ce=B(()=>n.activeTab?C[n.activeTab]:void 0),qe=B(()=>Ce.value?.content??""),ce=B(()=>n.activeTab?F[n.activeTab]??0:0),Ie=B(()=>n.activeTab?Z.has(n.activeTab):!1),rt=B(()=>n.activeTab?G[n.activeTab]:void 0),yt=B(()=>{const f=n.activeTab;return!f||!n.projectDir?!0:we(n.projectDir,f)?!1:!Ue.allowOutsideRoot}),ut=B(()=>Ce.value?.conflict===!0),it=B(()=>n.activeTab?BE(n.activeTab):"Plain Text"),Le=B(()=>w(n.activeTab)),U=[{encoding:"utf8",hasBom:!1,label:"UTF-8"},{encoding:"utf8",hasBom:!0,label:"UTF-8 with BOM"},{encoding:"utf16le",hasBom:!0,label:"UTF-16 LE"},{encoding:"utf16be",hasBom:!0,label:"UTF-16 BE"},{encoding:"gb18030",hasBom:!1,label:"GB18030"},{encoding:"big5",hasBom:!1,label:"Big5"},{encoding:"latin1",hasBom:!1,label:"Latin-1"}],R={utf8:"UTF-8",utf16le:"UTF-16 LE",utf16be:"UTF-16 BE",gb18030:"GB18030",big5:"Big5",latin1:"Latin-1",binary:"Binary"},Q=B(()=>(Ce.value?.eol??"lf").toUpperCase()),De=B(()=>{const f=Ce.value;if(!f)return"UTF-8";const k=R[f.encoding],X=f.encoding==="utf8"||f.encoding==="utf16le"||f.encoding==="utf16be";return f.hasBom&&X?`${k} BOM`:k}),{cmOpen:L,cmX:D,cmY:K,openMenuAt:$}=hn();function q(f){const k=f.currentTarget?.getBoundingClientRect();$(k?.left??0,k?.top??0)}const Te=B(()=>{const f=Ce.value;return U.map(k=>({label:k.label,checked:!!f&&f.encoding===k.encoding&&f.hasBom===k.hasBom,disabled:!f||f.binary,onClick:()=>void Qe(k.encoding,k.hasBom)}))}),{cmOpen:re,cmX:ct,cmY:wt,openMenuAt:Ot}=hn();function On(f){const k=f.currentTarget?.getBoundingClientRect();Ot(k?.left??0,k?.top??0)}const Gt=B(()=>{const f=Ce.value,k=(X,Me)=>({label:Me,checked:f?.eol===X,disabled:!f||f.binary,onClick:()=>ze(X)});return[k("lf","LF"),k("crlf","CRLF"),k("cr","CR")]});function ze(f){const k=n.activeTab,X=k?C[k]:void 0;!k||!X||X.eol===f||(X.eol=f,X.dirty=!0)}async function Qe(f,k){const X=n.activeTab,Me=X?C[X]:void 0;!X||!Me||Me.encoding===f&&Me.hasBom===k||Me.dirty&&!await Rt({title:v("vsUnsavedTitle"),message:v("vsReopenLoseMsg")})||(await wo(X,{encoding:f,hasBom:k,force:!0}),Y("ok",v("vsEncodingSwitched",{enc:De.value})))}const et=g(null),{cmOpen:at,cmX:Cn,cmY:Sn,openMenuAt:zt}=hn();function st(){const f=et.value?.getBoundingClientRect();zt(f?.left??0,(f?.bottom??0)+2)}const ft=B(()=>!!Ce.value&&!Ce.value.binary&&!yt.value),Ct=B(()=>n.openTabs.filter(f=>C[f]?.dirty)),Ln=B(()=>[{label:v("vsOpenFolder"),icon:"folderOpen",onClick:Ut},{label:v("vsNewFile"),icon:"fileOut",disabled:!n.projectDir,onClick:()=>ae.value?.createFileAtRoot()},{label:v("vsNewFolder"),icon:"folder",disabled:!n.projectDir,onClick:()=>ae.value?.createFolderAtRoot()},{label:v("vsMenuRecent"),icon:"clock",disabled:n.recentProjects.length===0,children:[...n.recentProjects.map(f=>({label:je(f)||f,checked:f===n.projectDir,disabled:f===n.projectDir,onClick:()=>void Lo(f)})),{separator:!0},{label:v("vsRecentClearAll"),icon:"trash",disabled:n.recentProjects.length===0,onClick:()=>void yn()}]},{separator:!0},{label:v("menuCloneGit"),icon:"git",onClick:()=>void Tn("git")},{label:v("menuCloneSvn"),icon:"svn",onClick:()=>void Tn("svn")},{separator:!0},{label:v("vsNewWindow"),icon:"panellayout",onClick:yo},{label:v("vsFloatWindow"),icon:"float",disabled:!e.tabId,onClick:ss},{label:v("vsNewTerminal"),icon:"terminal",onClick:oo},{separator:!0},{label:v("vsSave"),icon:"save",hint:"Ctrl+S",disabled:!ft.value,onClick:()=>void Ba()},{label:v("vsSaveAs"),icon:"save",hint:"Ctrl+Shift+S",disabled:!ft.value,onClick:()=>Ia()},{label:v("vsSaveAll"),disabled:Ct.value.length===0,onClick:()=>void Mr()},{label:v("vsMenuLocalDiff"),icon:"fileOut",disabled:!(Ce.value?.dirty&&!Ce.value.binary),onClick:()=>void Ma()}]),$n=g(null),{cmOpen:Jn,cmX:gn,cmY:En,openMenuAt:ts}=hn(),Fo=B(()=>{const f=n.projectDir;if(!f)return v("vsNoProject");const k=je(f);return k||(Wt(f)?El(f):f)}),Dn=B(()=>n.projectDir?`${r.value} · ${v("vsRecentProjects")}`:v("vsRecentProjects")),dn=B(()=>[{label:v("vsOpenFolder"),icon:"folderOpen",onClick:Ut},{separator:!0},...n.recentProjects.map(f=>({label:je(f)||f,checked:f===n.projectDir,disabled:f===n.projectDir,trailing:{icon:"close",title:v("vsRecentForgetTitle"),onClick:()=>void Gn(f)},onClick:()=>void Lo(f)})),{separator:!0},{label:v("vsRecentClearAll"),icon:"trash",disabled:n.recentProjects.length===0,onClick:()=>void yn()}]);function Bn(){const f=$n.value?.getBoundingClientRect();ts(f?.left??0,(f?.bottom??0)+2)}async function Gn(f){const k=je(f)||f;await Rt({title:v("vsRecentForgetTitle"),message:v("vsRecentForgetConfirm",{name:k})})&&(e.forgetProject(f),Y("ok",v("vsRecentForgot",{name:k})))}function Tn(f){const X=he.value??n.projectDir??"";$r({kind:f,dir:X,key:u,onDone:({path:Me})=>{Lo(Me)}})}async function yn(){if(n.recentProjects.length===0)return;await Rt({title:v("vsRecentClearAllTitle"),message:v("vsRecentClearAllConfirm")})&&(e.clearRecentProjects(),Y("ok",v("vsRecentCleared")))}async function wn(f){Nn(f),Y("info",v("vsProjectGone"))}async function Qn(f){const k=n.projectDir===f&&Ct.value.length>0;await Rt({title:v(k?"vsUnsavedTitle":"vsRemoveProjectTitle"),message:k?v("vsSwitchLoseMsg",{n:String(Ct.value.length)}):v("vsRemoveProjectConfirm",{name:je(f)||f})})&&(Nn(f),Y("ok",v("vsProjectRemoved")))}function Nn(f){e.forgetProject(f),n.projectDir===f&&(vi(),n.projectDir=null,d())}const T=50,ve=3e4,Be=g(null),He=g(""),Ae=g(!1),Ge=g(0),Dt=g([]),St=g(""),bn=g(0),In=g(!1),Fn=g(!1);function ns(f,k){const X=k.includes("\\")?"\\":"/";return`${k.replace(/[\\/]+$/,"")}${X}${f.split("/").join(X)}`}function Fs(f,k){const X=f.lastIndexOf("/");if(f.slice(X+1).includes(k))return 0;if(f.includes(k))return 1;let Me=0;for(const pt of k){if(Me=f.indexOf(pt,Me),Me<0)return null;Me+=1}return 2}const fn=B(()=>{const f=n.projectDir;if(!f)return[];const k=Dt.value,X=ht=>{const on=ht.lastIndexOf("/");return{abs:ns(ht,f),name:on<0?ht:ht.slice(on+1),dir:on<0?"":ht.slice(0,on)}},Me=He.value.trim().toLowerCase();if(!Me)return k.slice(0,T).map(X);const pt=[];for(const ht of k){const on=Fs(ht.toLowerCase(),Me);on!==null&&pt.push({rel:ht,score:on})}return pt.sort((ht,on)=>ht.score-on.score||ht.rel.length-on.rel.length||(ht.rel<on.rel?-1:1)),pt.slice(0,T).map(ht=>X(ht.rel))});async function Po(){const f=n.projectDir;if(!(!f||In.value)&&!(St.value===f&&Date.now()-bn.value<ve)){In.value=!0;try{const k=await Dp(f,u);Dt.value=k.files,Fn.value=k.truncated,St.value=f,bn.value=Date.now()}catch{Dt.value=[],St.value=""}finally{In.value=!1}}}function Ao(){n.projectDir&&(Ae.value=!0,Ge.value=0,Po(),Tt(()=>Be.value?.focus()))}function Zn(){Ge.value=0}function eo(){Ae.value=!1,He.value=""}function Ro(f){const k=fn.value.length;k!==0&&(Ae.value=!0,Ge.value=(Ge.value+f+k)%k)}function os(f){const k=fn.value[f??Ge.value];k&&(Ae.value=!1,He.value="",Be.value?.blur(),so(k.abs))}const Pn=g(null),qn=new Set,to=new Set,Mo=new Set;Je(()=>n.projectDir,f=>qn.forEach(k=>k(f))),Je(j,f=>to.forEach(k=>k(f))),Je(()=>n.activeTab,f=>Mo.forEach(k=>k(f)));function tn(){return n.activeTab?nE(e.slot)??null:null}const Kt=new Set,no=new Set;let jn=null,pn=null;const y={apiVersion:$o,get projectDir(){return n.projectDir},get theme(){return j.value},get activeFile(){return n.activeTab},onProjectChange(f){return qn.add(f),f(n.projectDir),()=>qn.delete(f)},onThemeChange(f){return to.add(f),f(j.value),()=>to.delete(f)},onDidChangeActiveFile(f){return Mo.add(f),f(n.activeTab),()=>Mo.delete(f)},openFile:(f,k)=>so(f,k),listOpenFiles:()=>[...n.openTabs],openDiff:(f,k)=>is({title:f,lines:k}),toast:(f,k)=>Y(f,k),editor:{get view(){return tn()},getText:()=>tn()?.state.doc.toString()??"",isDirty:()=>n.activeTab?C[n.activeTab]?.dirty??!1:!1,onDidChangeTextDocument(f){const k=(Me,pt)=>f({text:Me,changes:pt});Kt.add(k),jn||(jn=oE(e.slot,(Me,pt)=>Kt.forEach(ht=>ht(Me,pt))));const X=tn();return X&&f({text:X.state.doc.toString(),changes:null}),()=>{Kt.delete(k),Kt.size===0&&jn&&(jn(),jn=null)}},getSelection:()=>tn()?.state.selection??null,onDidChangeSelection(f){const k=Me=>f(Me);no.add(k),pn||(pn=sE(e.slot,Me=>no.forEach(pt=>pt(Me))));const X=tn();return X&&f(X.state.selection),()=>{no.delete(k),no.size===0&&pn&&(pn(),pn=null)}},applyEdit(f){const k=tn();return!k||!f.length?!1:(k.dispatch({changes:f}),!0)},setDecorations(f){tn()&&Pn.value?.setExtension(f)},createDecorations(f){return Pn.value?.setDecorationsSpec(f.items),{extension:[],update(k){Pn.value?.setDecorationsSpec(k)}}}}},{cmOpen:x,cmX:Se,cmY:fe,openMenuAt:Oe}=hn(),P=B(()=>[{label:v("vsFormat"),icon:"code",disabled:!n.activeTab||yt.value||Ce.value?.binary===!0,onClick:Xt},{separator:!0},{label:v("vsSave"),icon:"save",hint:"Ctrl+S",disabled:!ft.value||de.value,onClick:()=>void Ba()},{label:v("vsSaveAs"),icon:"save",disabled:!ft.value,onClick:()=>Ia()},{label:v("vsSaveAll"),disabled:Ct.value.length===0,onClick:()=>void Mr()},{separator:!0},{label:v("vsMinimap"),checked:Ue.vsMinimap,onClick:()=>{Ue.vsMinimap=!Ue.vsMinimap,Hn()}},{separator:!0},{label:v("vsMultiCursorHint"),disabled:!0}]);function Fe(f){Oe(f.x,f.y)}function Xt(){if(!n.activeTab)return;Pn.value?.format()??!1?Y("ok",v("vsFormatOk")):Y("error",v("vsFormatFail",{msg:yt.value?v("vsReadonly"):""}))}function Ut(){I.value=!0}function yo(){d(),mr({fresh:!0})||Y("info",v("vsNewWindowLimit"))}function ss(){e.tabId&&Zv(e.tabId)}function oo(){Uv(n.projectDir??"")}async function Oo(){await e.init();const f=e.projectRequest.value;if(!f)return;if(e.projectRequest.value=null,tm(),f.dir===n.projectDir){const X=yc();X&&await so(X);return}await Lo(f.dir);const k=yc();k&&await so(k)}Je(()=>e.projectRequest.value?.n,()=>void Oo());async function Lo(f){const k=f!==n.projectDir;if(!(k&&Ct.value.length>0&&!await Rt({title:v("vsUnsavedTitle"),message:v("vsSwitchLoseMsg",{n:String(Ct.value.length)})}))){n.projectDir=f,p(f),St.value="",bn.value=0;try{await sr(f,u)}catch{}k&&vi(),d()}}function vi(){for(const f of Object.keys(C))delete C[f];for(const f of Object.keys(G))delete G[f];for(const f of Object.keys(F))delete F[f];eE(e.slot),n.openTabs=[],n.activeTab=null}async function Ra(){if(Gc.has(u))return;Gc.add(u);let f=!1;const k=n.projectDir;if(k){const ht=await hl(k);if(ht&&!ht.isDir){const on=Ze(k);on&&on!==k&&(n.projectDir=on,n.openTabs.includes(k)||n.openTabs.push(k),n.activeTab=k,f=!0)}}const X=[...n.openTabs];if(X.length===0){f&&d();return}const Me=await Promise.all(X.map(async ht=>(await hl(ht))?.isDir?ht:null)),pt=new Set(Me.filter(ht=>!!ht));if(pt.size===0){f&&d();return}for(const ht of pt)delete C[ht],delete G[ht],delete F[ht];n.openTabs=n.openTabs.filter(ht=>!pt.has(ht)),n.activeTab&&pt.has(n.activeTab)&&(n.activeTab=n.openTabs[n.openTabs.length-1]??null),d()}async function so(f,k){nn.value=null,Pe.value=!1,n.openTabs.includes(f)||n.openTabs.push(f),n.activeTab=f,C[f]||await wo(f),k?.line&&(await Tt(),Pn.value?.revealLine(k.line)),d()}async function wo(f,k={}){if(!Z.has(f)&&!(C[f]?.dirty&&!k.force)){Z.add(f),delete G[f];try{const X=await vl(f,{encoding:k.encoding,hasBom:k.hasBom});C[f]={content:X.content,dirty:!1,encoding:X.encoding,hasBom:X.hasBom,eol:X.eol,mtime:X.mtime,binary:X.binary,conflict:!1},F[f]=(F[f]??0)+1}catch(X){G[f]=X instanceof Yo&&X.status===413?v("vsTooLarge"):X.message}finally{Z.delete(f)}}}function mi(f){pe(f)||(nn.value=null,n.activeTab=f,!C[f]&&!G[f]&&wo(f),d())}const nn=g(null);function is(f){Pe.value=!1,nn.value=f}async function Ma(){const f=n.activeTab,k=f?C[f]:void 0;if(!(!f||!k||k.binary))try{const X=await vl(f),Me=e5(X.content,k.content);is({title:`${je(f)} · ${v("vsLocalDiffTitle")}`,lines:Me?Me.lines:[v("vsLocalDiffTooBig")]})}catch(X){Y("error",X.message)}}const Oa=1e3,Bo=new Map;function Ps(f){if(!Ue.autoSave)return;const k=Bo.get(f);k&&clearTimeout(k),Bo.set(f,setTimeout(()=>{Bo.delete(f),C[f]?.dirty&&bo(f,{quiet:!0})},Oa))}function As(f){const k=Bo.get(f);k&&clearTimeout(k),Bo.delete(f)}const Rs=B(Ea),gi=g(null),yi=B(()=>Rs.value.find(f=>f.id===be.value)),wi=B(()=>[{id:"files",title:v("vsLeftTabFiles"),icon:"folder"},{id:"search",title:v("vsLeftTabSearch"),icon:"search",disabled:!n.projectDir},{id:"git",title:v("vsLeftTabGit"),icon:"git",disabled:!n.projectDir},...Rs.value.filter(f=>!f.when||f.when(y)).map(f=>({id:f.id,title:gd(f.title),icon:f.icon}))]),E=B(()=>wi.value.filter(f=>!n.activityBar.hidden.includes(f.id))),S=B(()=>{if(n.projectDir)return 0;const f=new Set(Rs.value.filter(X=>typeof X.when=="function").map(X=>X.id));if(!f.size)return 0;let k=0;for(const X of Ho())X.enabled&&Qd(X.id).some(Me=>f.has(Me))&&k++;return k});Je(E,f=>{f.some(k=>k.id===be.value)||(be.value="files")},{immediate:!0});function $e(f){n.activityBar.hidden.includes(f)||n.activityBar.hidden.push(f),be.value===f&&(be.value="files"),d()}function nt(f){n.activityBar.hidden=n.activityBar.hidden.filter(k=>k!==f),d()}function jt(f){n.activityBar.hidden.includes(f)?nt(f):$e(f)}const $t=g(!1),dt=g(0),V=g(0),lt=g("bar"),Yt=g(null),Vn=B(()=>({label:n.activityBar.position==="top"?v("vsActBarBottom"):v("vsActBarTop"),icon:"panellayout",onClick:()=>{n.activityBar.position=n.activityBar.position==="top"?"bottom":"top",d()}})),Io=B(()=>({label:n.sidebarSide==="left"?v("vsSideRight"):v("vsSideLeft"),icon:"float",onClick:()=>{n.sidebarSide=n.sidebarSide==="left"?"right":"left",d()}})),bi=B(()=>({label:Pe.value?v("vsUnfoldEditor"):v("vsFoldEditor"),icon:Pe.value?"chevronsRight":"chevronsLeft",onClick:()=>{Pe.value=!Pe.value}})),_i=B(()=>{if(lt.value==="view"&&Yt.value){const f=Yt.value;return[{label:v("vsActHide",{name:f.title}),icon:"close",onClick:()=>$e(f.id)},{separator:!0},bi.value,{separator:!0},Vn.value,Io.value]}return[...wi.value.map(f=>({label:f.title,icon:f.icon??"",checked:!n.activityBar.hidden.includes(f.id),onClick:()=>jt(f.id)})),{separator:!0},bi.value,{separator:!0},Vn.value,Io.value]});function af(f,k){const X=k.currentTarget?.getBoundingClientRect();dt.value=X?.right??k.clientX,V.value=X?.bottom??k.clientY,lt.value="view",Yt.value=f,$t.value=!0}function lf(f){dt.value=f.clientX,V.value=f.clientY,lt.value="bar",Yt.value=null,$t.value=!0}const Ar=B(Na);function rf(){return{path:n.activeTab,projectDir:n.projectDir}}const Rr=g(null),{cmOpen:La,cmX:cf,cmY:uf,openMenuAt:df}=hn();function ff(){const f=Rr.value?.getBoundingClientRect();f&&df(f.left,f.top-4)}const pf=B(()=>{n.activeTab,n.projectDir;const f=rf();return[...Ar.value,...ai()].sort((X,Me)=>(X.order??0)-(Me.order??0)).map(X=>({label:X.text,disabled:!!X.when&&!X.when(f),onClick:()=>{try{Da(X.commandId,f)}catch(Me){Y("error",Me.message)}}}))}),hf=B(()=>Ar.value.length+ai().length>0);Do(f=>{const k=yi.value,X=gi.value;if(!k||!X||k.when&&!k.when(y))return;const Me=k.mount(X,y);oa(X);const pt=new ResizeObserver(()=>oa(X));pt.observe(X),f(()=>{if(pt.disconnect(),typeof Me=="function")try{Me()}catch{}X.replaceChildren()})},{flush:"post"});function vf(f){const k=n.activeTab?C[n.activeTab]:void 0;k&&(k.content=f,k.dirty=!0,n.activeTab&&Ps(n.activeTab))}function mf(f,k){ee.line=f,ee.col=k}function gf(f){n.activeTab&&b(n.activeTab,f)}async function Ba(){const f=n.activeTab;if(!f)return;const k=C[f];!k||!k.dirty||await bo(f)}async function bo(f,k={}){const X=C[f];if(!f||!X||X.binary)return!1;de.value=!0;try{const Me=await ul(f,X.content,{key:u,encoding:X.encoding,hasBom:X.hasBom,eol:X.eol,expectedMtime:X.mtime,force:k.force});return X.dirty=!1,X.conflict=!1,X.mtime=Me.mtime,k.quiet||Y("ok",v("vsSaved")),!0}catch(Me){return Me instanceof Yo&&Me.code==="mtime-conflict"?(de.value=!1,await Rt({title:v("vsConflictTitle"),message:v("vsConflictMsg",{name:je(f)})})?await bo(f,{...k,force:!0}):!1):(Y("error",Me.message),!1)}finally{de.value=!1}}async function Mr(){const f=Ct.value.slice();if(f.length===0){Y("info",v("vsNoDirty"));return}let k=0;for(const X of f)await bo(X,{quiet:!0})&&k++;k===f.length&&Y("ok",v("vsAllSaved",{n:String(k)}))}function Ia(){const f=n.activeTab,k=f?C[f]:void 0;!f||!k||k.binary||(ge.value=Ke(f)||n.projectDir,ne.value=je(f),xe.value=!0)}async function yf(f){const k=n.activeTab,X=k?C[k]:void 0;if(!k||!X||X.binary||f===k)return;if(n.openTabs.includes(f)&&C[f]?.dirty){Y("error",v("vsSaveAsBlockedDirty",{name:je(f)}));return}let Me=!1;try{Me=await pl(f)}catch{return}if(!(Me&&!await Rt({title:v("vsSaveAsTitle"),message:v("vsOverwriteMsg",{path:f})}))){de.value=!0;try{await ul(f,X.content,{key:u,encoding:X.encoding,hasBom:X.hasBom,eol:X.eol}),Y("ok",v("vsSavedAs",{path:je(f)})),delete C[k],delete G[k],delete F[k],delete C[f],delete G[f],delete F[f],n.openTabs=n.openTabs.filter(pt=>pt!==k&&pt!==f),await so(f)}catch(pt){Y("error",pt.message)}finally{de.value=!1}}}async function wf(f,k){const X=C[f];if(!(!X||X.binary)&&k&&!(Math.abs(k.mtimeMs-X.mtime)<1)){if(X.dirty){X.conflict||(X.conflict=!0);return}await wo(f,{force:!0}),Y("info",v("vsReloadedExternal",{name:je(f)}))}}function bf(){ye=Fv((f,k)=>{n.openTabs.includes(f)&&wf(f,k)}),Je(()=>n.openTabs.slice(),f=>Tv(O,f),{immediate:!0})}async function _f(){const f=n.activeTab,k=f?C[f]:void 0;!f||!k||!await Rt({title:v("vsConflictTitle"),message:v("vsConflictMsgReload",{name:je(f)})})||await wo(f,{force:!0})}function kf(){const f=n.activeTab;if(f){if(Wt(f)){Y("error",v("remoteNoExternal"));return}mu(f)}}async function ki(f){if(pe(f)){nn.value=null;return}if(C[f]?.dirty){const X=await Wr({title:v("vsUnsavedTitle"),message:v("vsUnsavedMsg"),choices:[{id:"save",text:v("vsCloseSave"),primary:!0},{id:"discard",text:v("vsCloseDiscard")},{id:"cancel",text:v("cancel")}]});if(X==="save"){if(!await bo(f,{quiet:!0}))return}else if(X!=="discard")return}delete C[f],delete G[f],delete F[f],As(f),nl(e.slot,f),n.openTabs=n.openTabs.filter(X=>X!==f),n.activeTab===f&&(n.activeTab=n.openTabs[n.openTabs.length-1]??null),d()}async function xf(f){await bo(f,{quiet:!0})&&await ki(f)}async function ja(f){const k=f.filter(Me=>C[Me]?.dirty),X=Me=>{delete C[Me],delete G[Me],delete F[Me],As(Me),nl(e.slot,Me),n.openTabs=n.openTabs.filter(pt=>pt!==Me)};if(k.length>1){const Me=await Wr({title:v("vsUnsavedTitle"),message:v("vsCloseManyMsg",{n:String(k.length)}),choices:[{id:"save",text:v("vsCloseSaveAll"),primary:!0},{id:"discard",text:v("vsCloseDiscardAll")},{id:"cancel",text:v("cancel")}]});if(Me!=="save"&&Me!=="discard")return;const pt=new Set;if(Me==="save")for(const ht of k)await bo(ht,{quiet:!0})||pt.add(ht);for(const ht of f)Me==="save"&&pt.has(ht)||X(ht);n.activeTab&&!n.openTabs.includes(n.activeTab)&&(n.activeTab=n.openTabs[n.openTabs.length-1]??null),d();return}for(const Me of f)await ki(Me)}async function Cf(f){pe(f)||await ja(n.openTabs.filter(k=>k!==f))}async function Sf(f){if(pe(f))return;const k=n.openTabs.indexOf(f);k<0||await ja(n.openTabs.slice(k+1))}async function $f(){await ja([...n.openTabs])}function Ef(f){delete C[f],delete G[f],delete F[f],As(f),nl(e.slot,f),n.openTabs=n.openTabs.filter(k=>k!==f),n.activeTab===f&&(n.activeTab=n.openTabs[n.openTabs.length-1]??null),d()}function Df(f,k){const X=C[f];X&&(C[k]=X,delete C[f]);const Me=Id(e.slot),pt=Me.get(f);pt&&(Me.delete(f),Me.set(k,pt)),F[f]!==void 0&&(F[k]=F[f],delete F[f]),delete G[f],G[k]&&delete G[k],n.openTabs=n.openTabs.map(ht=>ht===f?k:ht),n.activeTab===f&&(n.activeTab=k),d()}const Ms=g(!1),Tf=B(()=>({width:`calc(${Math.round(n.split*1e3)/10}% - 3px)`}));function Va(f){if(!Ms.value||!N.value)return;const k=N.value.getBoundingClientRect();if(k.width<=0)return;let X=(f.clientX-k.left)/k.width;n.sidebarSide==="right"&&(X=1-X),n.split=Math.min(.85,Math.max(.15,X))}function za(){Ms.value&&(Ms.value=!1,document.removeEventListener("mousemove",Va),document.removeEventListener("mouseup",za),document.body.style.userSelect="",document.body.style.cursor="",d())}function Nf(){Ms.value=!0,document.addEventListener("mousemove",Va),document.addEventListener("mouseup",za),document.body.style.userSelect="none",document.body.style.cursor="col-resize"}function Ff(f){const k=f?.tagName;return k==="INPUT"||k==="TEXTAREA"||k==="SELECT"}function Or(f){if(!(f.ctrlKey||f.metaKey))return;const k=f.key.toLowerCase();if(k==="p"){if(Ff(f.target))return;f.preventDefault(),Ao();return}if(k!=="s"){if(k==="w"){f.preventDefault(),nn.value?nn.value=null:n.activeTab&&ki(n.activeTab);return}if(k==="pagedown"||k==="pageup"){f.preventDefault(),Pf(k==="pagedown"?1:-1);return}return}f.preventDefault(),f.shiftKey?Ia():Ba()}function Pf(f){const k=n.openTabs;if(k.length<2)return;const X=n.activeTab?k.indexOf(n.activeTab):-1,Me=((X<0?0:X+f)+k.length)%k.length;mi(k[Me])}function Lr(f){Ct.value.length>0&&(f.preventDefault(),f.returnValue="")}const xi=g(null),Br=g(!1);let Ci=null;function Ir(){const f=xi.value;if(!f)return;f.classList.remove("compact");const X=f.scrollWidth-f.clientWidth>1;f.classList.toggle("compact",X),Br.value=X}const Af=560,Rf=680;let Si=null;function jr(){const f=N.value?.clientWidth??0;f<=Af&&n.projectDir?Pe.value=!0:f>=Rf&&(Pe.value=!1)}return cn(async()=>{o5(),xi.value&&(Ci=new ResizeObserver(()=>Ir()),Ci.observe(xi.value),Ir()),N.value&&(Si=new ResizeObserver(()=>jr()),Si.observe(N.value),jr()),await h();const f=M();for(const[Me,pt]of Object.entries(f))n.openTabs.includes(Me)&&(C[Me]=pt);await Ra(),n.activeTab&&!C[n.activeTab]&&wo(n.activeTab),a.value=!0,await Tt(),await ae.value?.rebuild(),window.addEventListener("keydown",Or),window.addEventListener("beforeunload",Lr),window.addEventListener("beforeunload",d),bf();const k=`${u}:${n.projectDir??""}`;n.projectDir&&!qc.has(k)&&(qc.add(k),Po());const X=em();X&&e.requestOpenProject(X),e.projectRequest.value&&await Oo()}),At(()=>{Ci?.disconnect(),Ci=null,Si?.disconnect(),Si=null,window.removeEventListener("keydown",Or),window.removeEventListener("beforeunload",Lr),window.removeEventListener("beforeunload",d),document.removeEventListener("mousemove",Va),document.removeEventListener("mouseup",za),ye?.(),ye=null,Nv(O),_({...C}),d()}),(f,k)=>(l(),c("div",{ref_key:"rootRef",ref:N,class:"vs-pane","data-theme":o(j),style:_t(H.value)},[s("div",{ref_key:"topbarRef",ref:xi,class:te(["vs-topbar",{compact:Br.value}])},[s("span",{class:"vs-brand",title:o(v)("vsBrand")},[m(oe,{class:"vs-topbar-ico",name:"code",size:14}),s("span",g5,i(o(v)("vsBrand")),1)],8,m5),k[19]||(k[19]=s("span",{class:"vs-sep"},null,-1)),s("button",{ref_key:"fileBtnRef",ref:et,class:te(["vs-btn vs-btn-menu",{open:o(at)}]),title:o(v)("vsMenuFile"),onClick:st},[m(oe,{class:"vs-topbar-ico",name:"folder",size:13}),s("span",w5,i(o(v)("vsMenuFile")),1),k[16]||(k[16]=s("span",{class:"vs-caret"},null,-1))],10,y5),k[20]||(k[20]=s("span",{class:"vs-sep"},null,-1)),s("button",{ref_key:"recentBtnRef",ref:$n,class:te(["vs-btn vs-btn-menu vs-recent-btn",{open:o(Jn)}]),title:Dn.value,onClick:Bn},[m(oe,{class:"vs-topbar-ico",name:"clock",size:13}),s("span",_5,i(Fo.value),1),k[17]||(k[17]=s("span",{class:"vs-caret"},null,-1))],10,b5),k[21]||(k[21]=s("span",{class:"vs-sep"},null,-1)),s("span",{class:"vs-project-path",title:o(n).projectDir??o(v)("vsNoProject")},i(r.value),9,k5),k[22]||(k[22]=s("span",{class:"vs-spacer"},null,-1)),s("button",{class:"vs-quickopen-trigger",title:o(v)("vsQuickOpenPlaceholder"),disabled:!o(n).projectDir,onClick:Ao},[m(oe,{name:"search",size:13}),s("span",C5,i(In.value?o(v)("vsSearchIndexing"):o(v)("vsQuickOpenPlaceholder")),1),k[18]||(k[18]=s("span",{class:"vs-quickopen-kbd"},"Ctrl+P",-1))],8,x5)],2),S.value>0?(l(),c("button",{key:0,class:"vs-exthint",type:"button",title:o(v)("vsOpenFolder"),onClick:Ut},[m(oe,{name:"puzzle",size:13}),s("span",null,i(o(v)("vsExtNeedProject",{n:S.value})),1)],8,S5)):A("",!0),s("div",{class:te(["vs-body",{"right-folded":Pe.value,"side-right":o(n).sidebarSide==="right"}])},[s("div",{class:"vs-left",style:_t(Tf.value)},[s("div",{class:te(["vs-activity",{btm:o(n).activityBar.position==="bottom"}]),onContextmenu:ke(lf,["prevent"])},[(l(!0),c(ie,null,Re(E.value,X=>(l(),c("button",{key:X.id,class:te(["vs-act-btn",{active:be.value===X.id}]),disabled:X.disabled,title:X.title,onClick:Me=>W(X.id),onContextmenu:ke(Me=>af(X,Me),["prevent","stop"])},[o(Hs)(X.icon??"")?(l(),Xe(oe,{key:0,name:X.icon??"",size:17},null,8,["name"])):(l(),c("span",E5,i(X.title.slice(0,1)),1))],42,$5))),128))],34),s("div",D5,[kt(m(_E,{ref_key:"treeRef",ref:ae,root:o(n).projectDir,"active-path":o(n).activeTab,onOpenFile:so,onFileRemoved:Ef,onFileRenamed:Df,onProjectMissing:wn,onRemoveProject:Qn},null,8,["root","active-path"]),[[bs,be.value==="files"]]),be.value==="search"?(l(),Xe(I3,{key:0,"project-dir":o(n).projectDir||"",onOpen:z},null,8,["project-dir"])):A("",!0),kt(m(M6,{class:"vs-git-view",onOpenDiff:is},null,512),[[bs,be.value==="git"]]),be.value==="git"&&!J.value?(l(),c("div",T5,i(o(v)("vsGitNoRepo")),1)):A("",!0),yi.value?(l(),c("div",{key:2,ref_key:"extHostRef",ref:gi,class:"vs-ext-view"},null,512)):A("",!0)])],4),s("div",{class:te(["vs-split",{dragging:Ms.value}]),role:"separator","aria-orientation":"vertical",onMousedown:ke(Nf,["prevent"])},null,34),s("div",N5,[m(PE,{tabs:Ye.value,active:ot.value,onSelect:mi,onClose:ki,onSave:bo,onCloseSave:xf,onCloseOthers:Cf,onCloseRight:Sf,onCloseAll:$f},null,8,["tabs","active"]),s("div",F5,[nn.value?(l(),c("div",P5,[m(Js,{lines:nn.value.lines,empty:o(v)("gitDiffEmpty")},null,8,["lines","empty"])])):o(n).activeTab?Ie.value?(l(),c("div",L5,[k[23]||(k[23]=s("span",{class:"vs-loading-spin","aria-hidden":"true"},null,-1)),s("span",null,i(o(v)("vsLoading")),1)])):rt.value?(l(),c("div",B5,i(rt.value),1)):Ce.value?.binary?(l(),c("div",I5,[s("div",j5,i(o(v)("vsBinaryHint")),1),s("button",{class:"vs-btn",onClick:kf},i(o(v)("vsOpenExternal")),1)])):(l(),Xe(d8,{key:5,ref_key:"editorRef",ref:Pn,path:o(n).activeTab,slot:o(e).slot,"initial-content":qe.value,"initial-view":Le.value,"doc-rev":ce.value,readonly:yt.value,dark:o(j)==="dark",onChange:vf,onCursor:mf,onView:gf,onContextmenu:Fe},null,8,["path","slot","initial-content","initial-view","doc-rev","readonly","dark"])):(l(),c("div",A5,[m(oe,{class:"vs-empty-ico",name:"code",size:44}),s("div",R5,i(o(v)("vsEmptyTitle")),1),s("div",M5,i(o(v)("vsEmptyHint")),1),s("div",O5,[s("button",{class:"vs-btn",onClick:Ut},i(o(v)("vsOpenFolder")),1),s("button",{class:"vs-btn",onClick:k[0]||(k[0]=X=>Tn("git"))},i(o(v)("menuCloneGit")),1)])]))]),s("div",V5,[J.value?(l(),c("button",{key:0,class:"vs-status-seg vs-status-btn",title:o(n).projectDir??"",onClick:k[1]||(k[1]=X=>W("git"))},[m(oe,{name:"git",size:11}),ue(" "+i(J.value),1)],8,z5)):A("",!0),yt.value?(l(),c("span",U5,i(o(v)("vsReadonly")),1)):A("",!0),ut.value?(l(),c("button",{key:2,class:"vs-status-conflict",onClick:_f},i(o(v)("vsConflictBadge")),1)):A("",!0),hf.value?(l(),c("button",{key:3,ref_key:"extMenuBtnRef",ref:Rr,class:te(["vs-status-seg vs-status-btn vs-status-ext",{open:o(La)}]),title:o(v)("vsMenuExtensions"),onClick:ff},[m(oe,{name:"puzzle",size:11}),ue(" "+i(o(v)("vsMenuExtensions")),1)],10,H5)):A("",!0),k[24]||(k[24]=s("span",{class:"vs-status-spacer"},null,-1)),s("span",W5,"Ln "+i(ee.line)+", Col "+i(ee.col),1),s("button",{class:"vs-status-seg vs-status-btn",disabled:!o(n).activeTab,onClick:q},i(De.value),9,G5),s("button",{class:"vs-status-seg vs-status-btn",disabled:!o(n).activeTab,onClick:On},i(Q.value),9,q5),s("span",K5,i(it.value),1)])])],2),o(at)?(l(),Xe(Zt,{key:1,items:Ln.value,x:o(Cn),y:o(Sn),onClose:k[2]||(k[2]=X=>at.value=!1)},null,8,["items","x","y"])):A("",!0),o(La)?(l(),Xe(Zt,{key:2,items:pf.value,x:o(cf),y:o(uf),placement:"top",onClose:k[3]||(k[3]=X=>La.value=!1)},null,8,["items","x","y"])):A("",!0),o(Jn)?(l(),Xe(Zt,{key:3,items:dn.value,x:o(gn),y:o(En),onClose:k[4]||(k[4]=X=>Jn.value=!1)},null,8,["items","x","y"])):A("",!0),Ae.value?(l(),c("div",{key:4,class:"vs-quickopen-backdrop",onMousedown:ke(eo,["self"])},[s("div",{class:"vs-quickopen",onMousedown:k[9]||(k[9]=ke(()=>{},["stop"]))},[kt(s("input",{ref_key:"searchInputRef",ref:Be,"onUpdate:modelValue":k[5]||(k[5]=X=>He.value=X),class:"vs-quickopen-input",placeholder:In.value?o(v)("vsSearchIndexing"):o(v)("vsQuickOpenPlaceholder"),onInput:Zn,onKeydown:[k[6]||(k[6]=bt(ke(X=>Ro(1),["prevent"]),["down"])),k[7]||(k[7]=bt(ke(X=>Ro(-1),["prevent"]),["up"])),k[8]||(k[8]=bt(ke(X=>os(),["prevent"]),["enter"])),bt(ke(eo,["prevent"]),["esc"])]},null,40,X5),[[Lt,He.value]]),s("div",Y5,[fn.value.length>0?(l(),c(ie,{key:0},[(l(!0),c(ie,null,Re(fn.value,(X,Me)=>(l(),c("div",{key:X.abs,class:te(["vs-search-row",{active:Me===Ge.value}]),title:X.abs,onMousedown:ke(pt=>os(Me),["prevent"]),onMouseenter:pt=>Ge.value=Me},[s("span",Q5,i(X.name),1),s("span",Z5,i(X.dir),1)],42,J5))),128)),Fn.value?(l(),c("div",eD,i(o(v)("vsSearchTruncated")),1)):A("",!0)],64)):He.value.trim()&&!In.value?(l(),c("div",tD,i(o(v)("vsSearchNoResult")),1)):A("",!0)])],32)],32)):A("",!0),o(L)?(l(),Xe(Zt,{key:5,items:Te.value,x:o(D),y:o(K),onClose:k[10]||(k[10]=X=>L.value=!1)},null,8,["items","x","y"])):A("",!0),o(re)?(l(),Xe(Zt,{key:6,items:Gt.value,x:o(ct),y:o(wt),onClose:k[11]||(k[11]=X=>re.value=!1)},null,8,["items","x","y"])):A("",!0),o(x)?(l(),Xe(Zt,{key:7,items:P.value,x:o(Se),y:o(fe),onClose:k[12]||(k[12]=X=>x.value=!1)},null,8,["items","x","y"])):A("",!0),$t.value?(l(),Xe(Zt,{key:8,items:_i.value,x:dt.value,y:V.value,onClose:k[13]||(k[13]=X=>$t.value=!1)},null,8,["items","x","y"])):A("",!0),m(au),m(ca,{modelValue:I.value,"onUpdate:modelValue":k[14]||(k[14]=X=>I.value=X),"initial-dir":he.value,onConfirm:Lo},null,8,["modelValue","initial-dir"]),m(ca,{modelValue:xe.value,"onUpdate:modelValue":k[15]||(k[15]=X=>xe.value=X),mode:"file","initial-dir":ge.value,"initial-name":ne.value,onConfirm:yf},null,8,["modelValue","initial-dir","initial-name"])],12,v5))}}),oD=xt(nD,[["__scopeId","data-v-26cefa9f"]]),sD={class:"fw-term-headicon"},iD={class:"fw-term-tag"},aD=["title"],lD={class:"fw-term-note"},rD=["title"],cD=["title"],uD={key:0,class:"fw-term-searchbar"},dD=["placeholder","onKeydown"],fD=["title"],pD=["title"],hD=["title"],vD=["title"],mD={class:"fw-term-footer"},gD=["title","disabled"],yD=["title","disabled"],wD=["title"],bD=["title"],_D=["title"],kD={class:"fw-term-shellhint"},xD=["title"],CD=["title"],ll=320,rl=240,Kc=10,Xc=24,SD=vt({__name:"TerminalWindow",props:{tab:{}},emits:["close"],setup(t,{emit:e}){const n=t,a=e,{t:r}=Mt(),u=g(680),h=g(460),d=g(0),p=g(0),w=g(null);let b=!1;const _=g(null),M=B(()=>{const ze=n.tab.cwd?.trim();return ze?ze.replace(/[\\/]$/,"").split(/[\\/]/).pop()??"":""}),O=B(()=>n.tab.shell==="powershell"?"PS":"cmd"),N=B(()=>!!n.tab.ssh&&!n.tab.sshDegraded),j=B(()=>!!n.tab.ssh),H=B(()=>{const ze=n.tab.ssh;return ze?ze.remote&&ze.remote!=="/"?`${ze.label} · ${ze.remote}`:ze.label:""}),C=B(()=>N.value?H.value:M.value||n.tab.cwd||r("terminalTitle")),Z=B(()=>N.value?H.value:`${O.value} · ${M.value||n.tab.cwd||r("terminal")}`);function G(ze){return Math.min(Math.max(0,ze),Math.max(0,window.innerWidth-u.value))}function F(ze){return Math.min(Math.max(0,ze),Math.max(0,window.innerHeight-h.value))}function de(ze){u.value=Math.max(ll,ze.w),h.value=Math.max(rl,ze.h),d.value=G(ze.x),p.value=F(ze.y)}function I(){Bh(n.tab.id,{x:d.value,y:p.value,w:u.value,h:h.value})}const he=B(()=>({position:"fixed",left:`${d.value}px`,top:`${p.value}px`,width:`${u.value}px`,height:`${h.value}px`}));let xe=0;Je([d,p,u,h],()=>{b&&(window.clearTimeout(xe),xe=window.setTimeout(I,250))});let ge=!1,ne=0,ae=0;function Ee(ze){ze.target.closest(".fw-term-headclose, .fw-term-headmin")||(b=!0,ge=!0,ne=ze.clientX-d.value,ae=ze.clientY-p.value,document.body.style.userSelect="none",document.addEventListener("mousemove",Ve),document.addEventListener("mouseup",be))}function Ve(ze){if(!ge)return;const Qe=w.value,et=Qe?.offsetWidth??u.value,at=Qe?.offsetHeight??h.value;d.value=Math.min(Math.max(0,ze.clientX-ne),window.innerWidth-et),p.value=Math.min(Math.max(0,ze.clientY-ae),Math.max(0,window.innerHeight-at))}function be(){ge&&(ge=!1,document.body.style.userSelect="",document.removeEventListener("mousemove",Ve),document.removeEventListener("mouseup",be),I())}At(be);let Pe=!1,W=0,J=0,z=0,ee=0;function ye(ze){b=!0,Pe=!0,W=ze.clientX,J=ze.clientY,z=u.value,ee=h.value,document.body.style.userSelect="none",document.addEventListener("mousemove",je),document.addEventListener("mouseup",Ke)}function je(ze){if(!Pe)return;const Qe=Math.max(ll,window.innerWidth-d.value-4),et=Math.max(rl,window.innerHeight-p.value-4);u.value=Math.min(Math.max(ll,z+(ze.clientX-W)),Qe),h.value=Math.min(Math.max(rl,ee+(ze.clientY-J)),et)}function Ke(){Pe&&(Pe=!1,document.body.style.userSelect="",document.removeEventListener("mousemove",je),document.removeEventListener("mouseup",Ke),I())}At(Ke);function Ze(){b=!0,u.value=Math.min(680,window.innerWidth-12),h.value=Math.min(460,window.innerHeight-12),I()}let we=null,_e=null,Ye=null,ot=null,pe=null;function Ce(ze){const Qe=ze??_.value,et=getComputedStyle(Qe||document.documentElement),at=(Cn,Sn)=>(et.getPropertyValue(Cn)||Sn).trim();return{background:at("--base","#1e1e2e"),foreground:at("--text","#cdd6f4"),cursor:at("--text","#cdd6f4"),cursorAccent:at("--base","#1e1e2e"),selectionBackground:at("--wt-sel-bg","rgba(137, 180, 250, 0.35)"),black:at("--wt-term-black","#11111b"),red:at("--red","#f38ba8"),green:at("--green","#a6e3a1"),yellow:at("--yellow","#f9e2af"),blue:at("--blue","#89b4fa"),magenta:at("--mauve","#cba6f7"),cyan:at("--teal","#94e2d5"),white:at("--wt-term-white","#bac2de"),brightBlack:at("--wt-term-brightblack","#585b70"),brightRed:at("--red","#f38ba8"),brightGreen:at("--green","#a6e3a1"),brightYellow:at("--yellow","#f9e2af"),brightBlue:at("--sapphire","#74c7ec"),brightMagenta:at("--mauve","#cba6f7"),brightCyan:at("--teal","#94e2d5"),brightWhite:at("--wt-term-brightwhite","#cdd6f4")}}function qe(ze,Qe){const et=_.value;return(getComputedStyle(et||document.documentElement).getPropertyValue(ze)||Qe).trim()}function ce(){const ze=_.value;if(!ze||we)return;const Qe=Hh(n.tab.id);ot=document.createElement("div"),ot.className="fw-term-xterm",ze.appendChild(ot);const et=new rp({cursorBlink:!0,fontSize:Q.value,fontFamily:'Consolas, "Cascadia Code", "Courier New", monospace',scrollback:1e4,theme:Ce(ot),allowTransparency:!1,allowProposedApi:!0});we=et,_e=new dp,et.loadAddon(_e),et.loadAddon(new cp),Ye=new up,et.loadAddon(Ye),et.attachCustomKeyEventHandler(Te),et.open(ot),et.write(n.tab.output),et.onData(at=>Rh(n.tab.session,at)),tc(n.tab.id,at=>we?.write(at)),Tt(()=>{Ie(),Qe&&we?.focus()})}function Ie(){try{_e?.fit()}catch{}rt()}function rt(){we&&(we.cols<2||we.rows<2||Mh(n.tab.session,we.cols,we.rows))}function yt(){we?.focus()}function ut(ze){ze.target?.closest("button, input, textarea, .fw-term-resizer, .fw-term-headmin, .fw-term-headclose")||we?.focus()}const it=g(!1),Le=g(""),U=g(!1),R=g(null),Q=B(()=>Ue.termFontSize);function De(){return{caseSensitive:U.value,incremental:!0,decorations:{matchBackground:qe("--wt-search-match-bg","rgba(166, 173, 200, 0.4)"),matchBorder:qe("--wt-search-match-bg","rgba(166, 173, 200, 0)"),activeMatchBackground:qe("--wt-search-active-bg","rgba(166, 227, 161, 0.6)"),activeMatchBorder:qe("--wt-search-active-border","#a6e3a1"),matchOverviewRuler:qe("--wt-search-active-border","#a6e3a1"),activeMatchColorOverviewRuler:qe("--wt-search-active-border","#a6e3a1")}}}function L(ze){const Qe=Le.value.trim();if(!Qe){Ye?.clearDecorations();return}ze?Ye?.findNext(Qe,De()):Ye?.findPrevious(Qe,De())}function D(){it.value=!0,Tt(()=>{R.value?.focus(),R.value?.select()}),L(!0)}function K(){it.value=!1,Le.value="",Ye?.clearDecorations(),yt()}Je([Le,U],()=>{it.value&&L(!0)});function $(ze){const Qe=Math.min(Math.max(Kc,Math.round(ze)),Xc);Qe!==Ue.termFontSize&&(Ue.termFontSize=Qe,Hn(),we&&(we.options.fontSize=Qe),Tt(Ie))}async function q(){try{const ze=await navigator.clipboard.readText();ze&&we?.paste(ze)}catch{}}function Te(ze){if(ze.type!=="keydown"||!we)return!0;const Qe=ze.ctrlKey||ze.metaKey,et=ze.key.toLowerCase();if(Qe&&et==="f")return ze.preventDefault(),D(),!1;if(Qe&&et==="c"){const at=we.getSelection();return at?(ze.preventDefault(),navigator.clipboard.writeText(at).catch(()=>{}),we.clearSelection(),!1):!0}return Qe&&(et==="v"||et==="y")?(ze.preventDefault(),q(),!1):(Qe||ze.altKey)&&(et==="="||et==="+"||et==="-"||et==="_")?(ze.preventDefault(),$(Q.value+(et==="-"||et==="_"?-1:1)),!1):Qe&&et==="0"?(ze.preventDefault(),$(13),!1):!0}function re(){n.tab.shell=n.tab.shell==="powershell"?"cmd":"powershell",ic(n.tab,Ne.key),Tt(Ie)}function ct(){ic(n.tab,Ne.key),Tt(Ie)}function wt(){co.value?Y("ok",r("terminalAdminOn")):Y("info",r("terminalAdminHint"))}function Ot(){n.tab.output="",we?.clear()}function On(){gh(n.tab.id)}Je(()=>ml(n.tab.id),ze=>{ze||Tt(()=>{Ie(),we?.focus()})});let Gt;return typeof MutationObserver<"u"&&(Gt=new MutationObserver(()=>{we&&ot&&(we.options.theme=Ce(ot))}),Gt.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]})),At(()=>Gt?.disconnect()),cn(()=>{const ze=Lh(n.tab.id);de(ze??zh()),ku(),ce(),_.value&&typeof ResizeObserver<"u"&&(pe=new ResizeObserver(()=>Ie()),pe.observe(_.value))}),At(()=>{pe?.disconnect(),pe=null,Fu(n.tab.session),tc(n.tab.id,null),we?.dispose(),we=null,_e=null,Ye=null,ot?.remove(),ot=null}),(ze,Qe)=>(l(),c("div",{ref_key:"rootEl",ref:w,class:"fw-term-window",style:_t(he.value),onMousedown:ut},[s("div",{class:"fw-term-head",onMousedown:ke(Ee,["prevent"])},[s("span",sD,[m(oe,{name:"terminal",size:13})]),s("span",iD,i(o(r)("terminal"))+" #"+i(t.tab.name),1),N.value?(l(),c("span",{key:0,class:"fw-term-sshbadge",title:o(r)("termSshBadge")},"SSH",8,aD)):A("",!0),s("span",lD,i(C.value),1),s("span",{class:"fw-term-headmin",title:o(r)("terminalMinimize"),onClick:ke(On,["stop"])},"–",8,rD),s("span",{class:"fw-term-headclose",title:o(r)("terminalCloseTitle"),onClick:Qe[0]||(Qe[0]=ke(et=>a("close"),["stop"]))},"✕",8,cD)],32),it.value?(l(),c("div",uD,[kt(s("input",{ref_key:"searchInputEl",ref:R,"onUpdate:modelValue":Qe[1]||(Qe[1]=et=>Le.value=et),class:"fw-term-search-input",placeholder:o(r)("termSearchPlaceholder"),spellcheck:"false",onKeydown:[Qe[2]||(Qe[2]=bt(ke(et=>L(!0),["prevent"]),["enter"])),Qe[3]||(Qe[3]=bt(ke(et=>L(!1),["shift","prevent"]),["enter"])),bt(ke(K,["prevent"]),["esc"])]},null,40,dD),[[Lt,Le.value]]),s("button",{class:te(["fw-term-search-case",{on:U.value}]),title:o(r)("termSearchCase"),onClick:Qe[4]||(Qe[4]=et=>U.value=!U.value)},"Aa",10,fD),s("button",{class:"fw-term-search-btn",title:o(r)("termSearchPrev"),onClick:Qe[5]||(Qe[5]=et=>L(!1))},"▲",8,pD),s("button",{class:"fw-term-search-btn",title:o(r)("termSearchNext"),onClick:Qe[6]||(Qe[6]=et=>L(!0))},"▼",8,hD),s("button",{class:"fw-term-search-btn fw-term-search-close",title:o(r)("termSearchClose"),onClick:K},"✕",8,vD)])):A("",!0),s("div",{ref_key:"outEl",ref:_,class:"fw-term-out","box-":"double",onClick:yt},null,512),s("div",mD,[s("button",{class:"fw-term-btn",onClick:Ot},i(o(r)("terminalClear")),1),s("button",{class:"fw-term-btn",title:o(r)("termFontSmaller"),disabled:Q.value<=Kc,onClick:Qe[7]||(Qe[7]=et=>$(Q.value-1))},"A−",8,gD),s("button",{class:"fw-term-btn",title:o(r)("termFontLarger"),disabled:Q.value>=Xc,onClick:Qe[8]||(Qe[8]=et=>$(Q.value+1))},"A+",8,yD),j.value?(l(),c("button",{key:1,class:"fw-term-btn",title:o(r)("termSshReconnectTitle"),onClick:ct},i(o(r)("termSshReconnect")),9,bD)):(l(),c("button",{key:0,class:"fw-term-btn",title:o(r)("terminalShellSwitch"),onClick:re},i(O.value),9,wD)),o(co)!==null&&!N.value?(l(),c("button",{key:2,class:te(["fw-term-admin",{on:o(co)}]),title:o(co)?o(r)("terminalAdminOn"):o(r)("terminalAdminOff"),onClick:wt},[m(oe,{name:"shield",size:11}),s("span",null,i(o(co)?o(r)("terminalAdmin"):o(r)("terminalAdminNormal")),1)],10,_D)):A("",!0),Qe[9]||(Qe[9]=s("div",{class:"fw-spacer"},null,-1)),s("span",kD,i(Z.value),1),s("span",{class:"fw-term-kbdhint",title:o(r)("termCopyHint")},"Ctrl+C 复制 · Ctrl+V 粘贴 · Ctrl+F 搜索",8,xD)]),s("div",{class:"fw-term-resizer",title:o(r)("terminalResizeTitle"),onMousedown:ke(ye,["prevent"]),onDblclick:ke(Ze,["stop"])},null,40,CD)],36))}}),$D=xt(SD,[["__scopeId","data-v-6d3078d7"]]),ED=["title"],DD={class:"fw-term-card-head"},TD={class:"fw-term-card-ico"},ND={class:"fw-term-card-title"},FD=["title"],PD=["title"],AD=["title"],RD={class:"fw-term-card-body"},MD=vt({__name:"TerminalMiniWindow",props:{tab:{}},setup(t){const e=t,n=B(()=>{if(e.tab.ssh)return e.tab.ssh.label;const d=e.tab.cwd?.trim();if(d){const p=d.replace(/[\\/]$/,"").split(/[\\/]/).pop();if(p)return p}return v("terminal")}),a=B(()=>{const d=e.tab.ssh;return d?d.remote&&d.remote!=="/"?`${d.label} · ${d.remote}`:d.label:e.tab.cwd||v("terminal")}),r=B(()=>{const d=bh(e.tab.id);if(!d)return"";const p=d.replace(/\r/g,"").split(`
`);let w=p.length;for(;w>0&&!p[w-1].trim();)w--;return p.slice(Math.max(0,w-5),w).join(`
`)});function u(){Jo.value=e.tab.id,ar(e.tab.id)}function h(){Pu(e.tab.id),Et.value.length||(Ne.termOpen=!1)}return(d,p)=>(l(),c("div",{class:te(["fw-term-card",{active:t.tab.id===o(Jo)}]),title:a.value,onClick:u},[s("div",DD,[s("span",TD,[m(oe,{name:"terminal",size:12})]),s("span",ND,i(n.value),1),t.tab.ssh?(l(),c("span",{key:0,class:"fw-term-card-ssh",title:o(v)("termSshBadge")},"SSH",8,FD)):o(co)?(l(),c("span",{key:1,class:"fw-term-card-admin",title:o(v)("terminalAdminOn")},[m(oe,{name:"shield",size:10})],8,PD)):A("",!0),s("span",{class:"fw-term-card-close",title:o(v)("terminalCloseTitle"),onClick:ke(h,["stop"])},"✕",8,AD)]),s("pre",RD,i(r.value),1)],10,ED))}}),OD=xt(MD,[["__scopeId","data-v-cfbf612f"]]),LD=["title"],BD={key:0,class:"dsh-term-dock-count"},ID=["title"],jD={class:"dsh-term-dock-listhead"},VD=["title"],zD=9,Oi=36,Jt=8,Yc=4,Li=48,UD=vt({__name:"TerminalHost",setup(t){function e(){return document.documentElement.getAttribute("data-theme")==="light"?"light":"dark"}function n(){const z=document.getElementById("dsh-term-root");z&&z.setAttribute("data-term-theme",e())}n();let a;typeof MutationObserver<"u"&&(a=new MutationObserver(n),a.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]})),At(()=>a?.disconnect());const r=B(()=>Et.value.filter(z=>ml(z.id))),u=g(null),h=g(!1),d=g(!1),p=B(()=>h.value),w=B(()=>{const z=_n.value;return!!z&&z.x<340}),b=B(()=>{const z=_n.value;return!!z&&z.y>window.innerHeight/2}),_=B(()=>{const z=_n.value;return z?{left:`${z.x}px`,top:`${z.y}px`}:void 0}),M=g(null),O=g(360);function N(){const z=u.value?.getBoundingClientRect();if(!z)return;const ee=b.value?z.bottom-Jt:window.innerHeight-z.top-Jt;O.value=Math.max(180,Math.min(Math.round(ee)-4,Math.round(window.innerHeight*.72)))}function j(z,ee){const ye=Math.max(Jt,window.innerWidth-Oi-Jt),je=Math.max(Jt,window.innerHeight-Oi-Jt);return{x:Math.min(Math.max(Jt,z),ye),y:Math.min(Math.max(Jt,ee),je)}}function H(z,ee){const ye=j(z,ee),je=Math.max(Jt,window.innerWidth-Oi-Jt),Ke=Math.max(Jt,window.innerHeight-Oi-Jt);let Ze=ye.x,we=ye.y;return ye.x-Jt<=Li?Ze=Jt:je-ye.x<=Li&&(Ze=je),ye.y-Jt<=Li?we=Jt:Ke-ye.y<=Li&&(we=Ke),{x:Ze,y:we}}let C=null,Z=!1;function G(z){if(z.button!==0||!u.value)return;const ee=u.value.getBoundingClientRect();_n.value||(_n.value={x:ee.left,y:ee.top}),C={pid:z.pointerId,fromX:z.clientX,fromY:z.clientY,baseX:_n.value.x,baseY:_n.value.y,moved:!1},z.currentTarget.setPointerCapture(z.pointerId)}function F(z){if(!C||z.pointerId!==C.pid)return;const ee=z.clientX-C.fromX,ye=z.clientY-C.fromY;!C.moved&&Math.abs(ee)<Yc&&Math.abs(ye)<Yc||(C.moved=!0,d.value=!0,_n.value=j(C.baseX+ee,C.baseY+ye))}function de(z){if(!C||z.pointerId!==C.pid)return;Z=C.moved;const ee=C.moved;if(C=null,d.value=!1,ee){const ye=_n.value;ye&&(_n.value=H(ye.x,ye.y))}}function I(){if(Z){Z=!1;return}h.value=!h.value}const he=g(!1),xe=g({x:0,y:0});function ge(z){h.value=!1,xe.value={x:z.clientX,y:z.clientY},he.value=!0}const ne=B(()=>{const z=r.value.map(ee=>({label:ae(ee),icon:"terminal",onClick:()=>{Jo.value=ee.id,ar(ee.id)},trailing:{icon:"close",title:v("terminalCloseTitle"),onClick:()=>void Ee(ee.id)}}));return z.length&&z.push({separator:!0}),z.push({label:v("terminalDockCloseAll"),icon:"close",onClick:()=>void Ve()}),z});function ae(z){if(z.ssh)return z.ssh.label;const ee=z.cwd?.trim();if(ee){const ye=ee.replace(/[\\/]$/,"").split(/[\\/]/).pop();if(ye)return ye}return v("terminal")}async function Ee(z){rc(z),Et.value.length||(Ne.termOpen=!1)}async function Ve(){h.value=!1,await Oh(),Ne.termOpen=!1}function be(z){if(!p.value)return;const ee=u.value,ye=z.target;ee&&ye&&ee.contains(ye)||(h.value=!1)}function Pe(){const z=_n.value;z&&(_n.value=j(z.x,z.y)),Tt(N)}function W(z=!1){if(Et.value.length>=zD)return;const ee=Ne.termRequestSsh,ye=ee?"":Ne.termRequestCwd||Ne.root||Ne.explorerPath||"",je=Ne.termRequestCmd;Ne.termRequestCwd="",Ne.termRequestCmd="",Ne.termRequestSsh=null,Uh(Ne.key,{cwd:ye,initCmd:ee?void 0:je||void 0,fallbackCmd:ee&&je||void 0,shell:Ue.termShell,ssh:ee??void 0,focus:z})}function J(z){rc(z),Et.value.length===0&&(Ne.termOpen=!1)}return Je(p,z=>{z&&Tt(N)}),Je(()=>r.value.length,z=>{z||(h.value=!1)}),Je(hr,()=>{Ne.termOpen||(Ne.termOpen=!0),W(!0)}),Je(()=>Ne.termOpen,z=>{z&&Et.value.length===0&&W(!0)}),cn(()=>{ku(),window.addEventListener("resize",Pe),document.addEventListener("pointerdown",be,!0),Tt(N),Ne.termOpen&&Et.value.length===0&&W(!1)}),At(()=>{window.removeEventListener("resize",Pe),document.removeEventListener("pointerdown",be,!0)}),(z,ee)=>(l(),c(ie,null,[(l(!0),c(ie,null,Re(o(Et),ye=>kt((l(),Xe($D,{key:ye.id,tab:ye,onClose:je=>J(ye.id)},null,8,["tab","onClose"])),[[bs,o(Ne).termOpen&&!o(ml)(ye.id)]])),128)),o(Ne).termOpen&&r.value.length?(l(),c("div",{key:0,ref_key:"dockRef",ref:u,class:te(["dsh-term-dock",{"is-floating":!!o(_n),"is-dragging":d.value,"is-flip":w.value,"is-bottom":b.value}]),style:_t(_.value)},[s("div",{class:"dsh-term-dock-btn",title:o(v)("terminalDockDragTitle"),onClick:I,onContextmenu:ke(ge,["prevent"]),onPointerdown:G,onPointermove:F,onPointerup:de,onPointercancel:de},[m(oe,{name:"terminal",size:15}),r.value.length>1?(l(),c("span",BD,i(r.value.length),1)):A("",!0),o(co)?(l(),c("span",{key:1,class:"dsh-term-dock-dot",title:o(v)("terminalAdminOn")},null,8,ID)):A("",!0)],40,LD),p.value&&!d.value?(l(),c("div",{key:0,ref_key:"listRef",ref:M,class:"dsh-term-dock-list",style:_t({maxHeight:`${O.value}px`})},[s("div",jD,i(o(v)("terminalDockSessions")),1),(l(!0),c(ie,null,Re(r.value,ye=>(l(),Xe(OD,{key:ye.id,tab:ye},null,8,["tab"]))),128)),s("button",{class:"dsh-term-dock-new",title:o(v)("terminalNew"),onClick:ee[0]||(ee[0]=ke(ye=>W(!0),["stop"]))},"＋ "+i(o(v)("terminalNew")),9,VD)],4)):A("",!0)],6)):A("",!0),he.value?(l(),Xe(Zt,{key:1,items:ne.value,x:xe.value.x,y:xe.value.y,onClose:ee[1]||(ee[1]=ye=>he.value=!1)},null,8,["items","x","y"])):A("",!0)],64))}}),HD=xt(UD,[["__scopeId","data-v-6b6a1886"]]),WD=/[<>:"|?*\u0000-\u001f]/g,Jc=120;function GD(t){let e=(t??"").trim().replace(/\\/g,"/");return!e||e.includes("/")||(e=e.replace(WD,"_").replace(/[. ]+$/,""),!e||e==="."||e==="..")?null:(e.length>Jc&&(e=e.slice(0,Jc).replace(/[. ]+$/,"")),e||null)}function cl(t){let e=(t??"").trim().replace(/\\/g,"/");if(!e)return"";const n=/^[^/\s]+@[^/:\s]+:(.*)$/.exec(e);n?e=n[1]:e=e.replace(/^[a-zA-Z][a-zA-Z0-9+.-]*:\/\/[^/]*/,""),e=e.split("?")[0].split("#")[0],e=e.replace(/\/+$/,"");const r=(e.split("/").filter(Boolean).pop()??"").replace(/\.git$/i,"");return GD(r)??""}const Qc="__new__";function nf(t){const{t:e}=Mt(),n=g({url:"",dir:qt.dir,name:"",shallow:!1,revision:"",accountId:""}),a=g(!1),r=g(!1),u=g(""),h=g(0),d=g(!1);let p=0,w=0;function b(be,Pe){const W=(be??"").trim();if(!W)return"";const J=W.includes("\\")?"\\":"/";return`${W.replace(/[\\/]+$/,"")}${J}${Pe}`}const _=B(()=>{const be=n.value.name.trim()||cl(n.value.url);return be?b(n.value.dir,be):""}),M=B(()=>!!n.value.url.trim()&&!!n.value.dir.trim()&&!!_.value);Je(()=>n.value.url,be=>{a.value||(n.value.name=cl(be))}),Je(()=>n.value.name,(be,Pe)=>{be!==cl(n.value.url)&&Pe!==void 0&&(a.value=!0)});const O=B(()=>An.value.filter(be=>be.kind===t)),N=B(()=>O.value.find(be=>be.id===n.value.accountId)??null),j=g(null);let H=0;async function C(){const be=n.value.url.trim();if(!be||n.value.accountId){j.value=null;return}const Pe=await bu(t,be).catch(()=>null);j.value=Pe?.account??null}Je(()=>n.value.url,()=>{H&&window.clearTimeout(H),H=window.setTimeout(()=>void C(),400)});const Z=B(()=>n.value.accountId?N.value:j.value),G=B(()=>n.value.dir.trim().startsWith("ssh://"));let F=[];const de=g(!1);function I(){F=An.value.map(be=>be.id),de.value=!0,Er({kind:t,url:n.value.url.trim()})}function he(be){const Pe=be.target,W=Pe.value;if(W===Qc){Pe.value=n.value.accountId,I();return}n.value.accountId=W}Je(()=>xn.open,async be=>{if(be||!de.value)return;de.value=!1,await hs();const Pe=An.value.find(W=>W.kind===t&&!F.includes(W.id));Pe&&(n.value.accountId=Pe.id)}),Je(()=>qt.open,be=>{be&&(n.value={url:"",dir:qt.dir,name:"",shallow:!1,revision:"",accountId:""},a.value=!1,u.value="",h.value=0,r.value=!1,j.value=null,hs())},{immediate:!0});function xe(be){n.value.dir=be}function ge(be){be||r.value||xc()}function ne(){h.value=Math.round((Date.now()-w)/1e3)}async function ae(){if(r.value||!M.value)return;const{url:be,dir:Pe,shallow:W,revision:J}=n.value;u.value="",r.value=!0,w=Date.now(),h.value=0,p=window.setInterval(ne,1e3);try{const z=await ih(t,{url:be.trim(),dir:Pe.trim(),name:n.value.name.trim()||void 0,depth:t==="git"&&W?1:0,revision:t==="svn"&&J.trim()||void 0,accountId:n.value.accountId||void 0,key:qt.key||void 0}),ee=qt.onDone;xc(),Y("ok",e(t==="git"?"repoCloneDoneGit":"repoCloneDoneSvn",{name:z.name}));try{ee?.({path:z.path,name:z.name})}catch{}}catch(z){u.value=z?.message||String(z)}finally{r.value=!1,p&&(window.clearInterval(p),p=0)}}function Ee(){p&&window.clearInterval(p),H&&window.clearTimeout(H),p=0,H=0}function Ve(be){return`${be.name} · ${be.url||e("accAllRepos")}`}return{t:e,state:n,busy:r,error:u,elapsed:h,pickerOpen:d,targetPath:_,canSubmit:M,accountOptions:O,effectiveAccount:Z,isRemoteDir:G,newAccountValue:Qc,accountLabel:Ve,onAccountChange:he,onDirPicked:xe,onModel:ge,submit:ae,dispose:Ee}}const qD={class:"fw-clone-head"},KD={class:"fw-clone-badge"},XD={class:"fw-clone-headtext"},YD={class:"fw-clone-headtitle"},JD={class:"fw-clone-headsub"},QD={class:"fw-clone"},ZD={class:"fw-clone-field"},eT={class:"fw-clone-label"},tT=["placeholder","disabled"],nT={key:0,class:"fw-clone-field"},oT={class:"fw-clone-label"},sT=["value","disabled"],iT={value:""},aT=["value"],lT=["value"],rT={key:0,class:"fw-clone-tip"},cT={class:"fw-clone-field"},uT={class:"fw-clone-label"},dT={class:"fw-clone-row"},fT=["placeholder","disabled"],pT=["disabled"],hT={class:"fw-clone-field"},vT={class:"fw-clone-label"},mT=["placeholder","disabled"],gT={class:"fw-clone-check fw-clone-slot"},yT=["disabled"],wT={class:"fw-clone-checkhint"},bT=["title"],_T={class:"fw-clone-targetlabel"},kT={class:"fw-clone-targetval"},xT={key:1,class:"fw-clone-busy"},CT={class:"fw-clone-elapsed"},ST={key:2,class:"fw-clone-tip"},$T={key:3,class:"fw-clone-error"},ET=["disabled"],DT=["disabled"],TT=vt({__name:"GitCloneDialog",setup(t){const{t:e,state:n,busy:a,error:r,elapsed:u,pickerOpen:h,targetPath:d,canSubmit:p,accountOptions:w,effectiveAccount:b,isRemoteDir:_,newAccountValue:M,accountLabel:O,onAccountChange:N,onDirPicked:j,onModel:H,submit:C,dispose:Z}=nf("git");return At(Z),(G,F)=>{const de=un;return l(),c(ie,null,[m(de,{"model-value":o(qt).open,width:"560px","append-to-body":"",class:"fw-clone-dialog fw-clone-git","close-on-click-modal":!1,"close-on-press-escape":!o(a),"show-close":!o(a),"onUpdate:modelValue":o(H)},{header:se(()=>[s("div",qD,[s("span",KD,[m(oe,{name:"git",size:20})]),s("div",XD,[s("div",YD,i(o(e)("repoCloneTitleGit")),1),s("div",JD,i(o(e)("repoCloneCaptionGit")),1)])])]),footer:se(()=>[s("button",{class:"fw-clone-btn",disabled:o(a),onClick:F[7]||(F[7]=I=>o(H)(!1))},i(o(e)("cancel")),9,ET),s("button",{class:"fw-clone-btn primary",disabled:o(a)||!o(p),onClick:F[8]||(F[8]=(...I)=>o(C)&&o(C)(...I))},i(o(e)("repoCloneActionGit")),9,DT)]),default:se(()=>[s("div",QD,[s("label",ZD,[s("span",eT,i(o(e)("repoCloneUrl")),1),kt(s("input",{"onUpdate:modelValue":F[0]||(F[0]=I=>o(n).url=I),class:"fw-clone-input",placeholder:o(e)("repoCloneUrlGitPlaceholder"),spellcheck:"false",disabled:o(a),onKeyup:F[1]||(F[1]=bt((...I)=>o(C)&&o(C)(...I),["enter"]))},null,40,tT),[[Lt,o(n).url]])]),o(_)?A("",!0):(l(),c("label",nT,[s("span",oT,i(o(e)("repoCloneAccount")),1),s("select",{class:"fw-clone-input fw-clone-select",value:o(n).accountId,disabled:o(a),onChange:F[2]||(F[2]=(...I)=>o(N)&&o(N)(...I))},[s("option",iT,i(o(e)("repoCloneAccountAuto")),1),(l(!0),c(ie,null,Re(o(w),I=>(l(),c("option",{key:I.id,value:I.id},i(o(O)(I)),9,aT))),128)),s("option",{value:o(M)},i(o(e)("repoCloneAccountNew")),9,lT)],40,sT),o(n).url.trim()||o(n).accountId?(l(),c("span",rT,[o(b)?(l(),c(ie,{key:0},[ue(i(o(e)("accEffective"))+" "+i(o(b).name)+"（"+i(o(b).username)+"@"+i(o(b).host)+"） ",1)],64)):(l(),c(ie,{key:1},[ue(i(o(e)("accEffectiveNone")),1)],64))])):A("",!0)])),s("label",cT,[s("span",uT,i(o(e)("repoCloneDir")),1),s("div",dT,[kt(s("input",{"onUpdate:modelValue":F[3]||(F[3]=I=>o(n).dir=I),class:"fw-clone-input",placeholder:o(e)("repoCloneDirPlaceholder"),spellcheck:"false",disabled:o(a)},null,8,fT),[[Lt,o(n).dir]]),s("button",{class:"fw-clone-btn",disabled:o(a),onClick:F[4]||(F[4]=I=>h.value=!0)},i(o(e)("repoCloneBrowse")),9,pT)])]),s("label",hT,[s("span",vT,i(o(e)("repoCloneName")),1),kt(s("input",{"onUpdate:modelValue":F[5]||(F[5]=I=>o(n).name=I),class:"fw-clone-input",placeholder:o(e)("repoCloneNamePlaceholder"),spellcheck:"false",disabled:o(a)},null,8,mT),[[Lt,o(n).name]])]),s("label",gT,[kt(s("input",{"onUpdate:modelValue":F[6]||(F[6]=I=>o(n).shallow=I),type:"checkbox",disabled:o(a)},null,8,yT),[[jf,o(n).shallow]]),s("span",null,i(o(e)("repoCloneShallow")),1),s("span",wT,i(o(e)("repoCloneShallowHint")),1)]),s("div",{class:"fw-clone-target",title:o(d)||void 0},[m(oe,{name:"folderOpen",size:13}),s("span",_T,i(o(e)("repoCloneTargetGit")),1),s("span",kT,i(o(d)||o(e)("repoCloneTargetEmpty")),1)],8,bT),o(a)?(l(),c("div",xT,[F[10]||(F[10]=s("span",{class:"fw-clone-spin","aria-hidden":"true"},null,-1)),s("span",null,i(o(e)("repoCloneRunningGit")),1),s("span",CT,i(o(e)("repoCloneElapsed",{s:o(u)})),1)])):A("",!0),o(a)?(l(),c("div",ST,i(o(e)("repoCloneKeepOpen")),1)):A("",!0),o(r)?(l(),c("div",$T,i(o(r)),1)):A("",!0)])]),_:1},8,["model-value","close-on-press-escape","show-close","onUpdate:modelValue"]),m(ca,{modelValue:o(h),"onUpdate:modelValue":F[9]||(F[9]=I=>tu(h)?h.value=I:null),mode:"folder","initial-dir":o(n).dir,onConfirm:o(j)},null,8,["modelValue","initial-dir","onConfirm"])],64)}}}),NT={class:"fw-clone-head"},FT={class:"fw-clone-badge"},PT={class:"fw-clone-headtext"},AT={class:"fw-clone-headtitle"},RT={class:"fw-clone-headsub"},MT={class:"fw-clone"},OT={class:"fw-clone-field"},LT={class:"fw-clone-label"},BT=["placeholder","disabled"],IT={key:0,class:"fw-clone-field"},jT={class:"fw-clone-label"},VT=["value","disabled"],zT={value:""},UT=["value"],HT=["value"],WT={key:0,class:"fw-clone-tip"},GT={class:"fw-clone-field"},qT={class:"fw-clone-label"},KT={class:"fw-clone-row"},XT=["placeholder","disabled"],YT=["disabled"],JT={class:"fw-clone-field"},QT={class:"fw-clone-label"},ZT=["placeholder","disabled"],e4={class:"fw-clone-field"},t4={class:"fw-clone-label"},n4=["placeholder","disabled"],o4=["title"],s4={class:"fw-clone-targetlabel"},i4={class:"fw-clone-targetval"},a4={key:1,class:"fw-clone-busy"},l4={class:"fw-clone-elapsed"},r4={key:2,class:"fw-clone-tip"},c4={key:3,class:"fw-clone-error"},u4=["disabled"],d4=["disabled"],f4=vt({__name:"SvnCheckoutDialog",setup(t){const{t:e,state:n,busy:a,error:r,elapsed:u,pickerOpen:h,targetPath:d,canSubmit:p,accountOptions:w,effectiveAccount:b,isRemoteDir:_,newAccountValue:M,accountLabel:O,onAccountChange:N,onDirPicked:j,onModel:H,submit:C,dispose:Z}=nf("svn");return At(Z),(G,F)=>{const de=un;return l(),c(ie,null,[m(de,{"model-value":o(qt).open,width:"560px","append-to-body":"",class:"fw-clone-dialog fw-clone-svn","close-on-click-modal":!1,"close-on-press-escape":!o(a),"show-close":!o(a),"onUpdate:modelValue":o(H)},{header:se(()=>[s("div",NT,[s("span",FT,[m(oe,{name:"svn",size:20})]),s("div",PT,[s("div",AT,i(o(e)("repoCloneTitleSvn")),1),s("div",RT,i(o(e)("repoCloneCaptionSvn")),1)])])]),footer:se(()=>[s("button",{class:"fw-clone-btn",disabled:o(a),onClick:F[7]||(F[7]=I=>o(H)(!1))},i(o(e)("cancel")),9,u4),s("button",{class:"fw-clone-btn primary",disabled:o(a)||!o(p),onClick:F[8]||(F[8]=(...I)=>o(C)&&o(C)(...I))},i(o(e)("repoCloneActionSvn")),9,d4)]),default:se(()=>[s("div",MT,[s("label",OT,[s("span",LT,i(o(e)("repoCloneUrl")),1),kt(s("input",{"onUpdate:modelValue":F[0]||(F[0]=I=>o(n).url=I),class:"fw-clone-input",placeholder:o(e)("svnCheckoutUrlPlaceholder"),spellcheck:"false",disabled:o(a),onKeyup:F[1]||(F[1]=bt((...I)=>o(C)&&o(C)(...I),["enter"]))},null,40,BT),[[Lt,o(n).url]])]),o(_)?A("",!0):(l(),c("label",IT,[s("span",jT,i(o(e)("repoCloneAccount")),1),s("select",{class:"fw-clone-input fw-clone-select",value:o(n).accountId,disabled:o(a),onChange:F[2]||(F[2]=(...I)=>o(N)&&o(N)(...I))},[s("option",zT,i(o(e)("repoCloneAccountAuto")),1),(l(!0),c(ie,null,Re(o(w),I=>(l(),c("option",{key:I.id,value:I.id},i(o(O)(I)),9,UT))),128)),s("option",{value:o(M)},i(o(e)("repoCloneAccountNew")),9,HT)],40,VT),o(n).url.trim()||o(n).accountId?(l(),c("span",WT,[o(b)?(l(),c(ie,{key:0},[ue(i(o(e)("accEffective"))+" "+i(o(b).name)+"（"+i(o(b).username)+"@"+i(o(b).host)+"） ",1)],64)):(l(),c(ie,{key:1},[ue(i(o(e)("accEffectiveNone")),1)],64))])):A("",!0)])),s("label",GT,[s("span",qT,i(o(e)("repoCloneDir")),1),s("div",KT,[kt(s("input",{"onUpdate:modelValue":F[3]||(F[3]=I=>o(n).dir=I),class:"fw-clone-input",placeholder:o(e)("repoCloneDirPlaceholder"),spellcheck:"false",disabled:o(a)},null,8,XT),[[Lt,o(n).dir]]),s("button",{class:"fw-clone-btn",disabled:o(a),onClick:F[4]||(F[4]=I=>h.value=!0)},i(o(e)("repoCloneBrowse")),9,YT)])]),s("label",JT,[s("span",QT,i(o(e)("repoCloneName")),1),kt(s("input",{"onUpdate:modelValue":F[5]||(F[5]=I=>o(n).name=I),class:"fw-clone-input",placeholder:o(e)("repoCloneNamePlaceholder"),spellcheck:"false",disabled:o(a)},null,8,ZT),[[Lt,o(n).name]])]),s("label",e4,[s("span",t4,i(o(e)("repoCloneRevision")),1),kt(s("input",{"onUpdate:modelValue":F[6]||(F[6]=I=>o(n).revision=I),class:"fw-clone-input",placeholder:o(e)("repoCloneRevisionPlaceholder"),spellcheck:"false",disabled:o(a)},null,8,n4),[[Lt,o(n).revision]])]),s("div",{class:"fw-clone-target",title:o(d)||void 0},[m(oe,{name:"folderOpen",size:13}),s("span",s4,i(o(e)("repoCloneTargetSvn")),1),s("span",i4,i(o(d)||o(e)("repoCloneTargetEmpty")),1)],8,o4),o(a)?(l(),c("div",a4,[F[10]||(F[10]=s("span",{class:"fw-clone-spin","aria-hidden":"true"},null,-1)),s("span",null,i(o(e)("repoCloneRunningSvn")),1),s("span",l4,i(o(e)("repoCloneElapsed",{s:o(u)})),1)])):A("",!0),o(a)?(l(),c("div",r4,i(o(e)("repoCloneKeepOpen")),1)):A("",!0),o(r)?(l(),c("div",c4,i(o(r)),1)):A("",!0)])]),_:1},8,["model-value","close-on-press-escape","show-close","onUpdate:modelValue"]),m(ca,{modelValue:o(h),"onUpdate:modelValue":F[9]||(F[9]=I=>tu(h)?h.value=I:null),mode:"folder","initial-dir":o(n).dir,onConfirm:o(j)},null,8,["modelValue","initial-dir","onConfirm"])],64)}}}),p4=vt({__name:"RepoCloneDialog",setup(t){return(e,n)=>o(qt).open&&o(qt).kind==="git"?(l(),Xe(TT,{key:0})):o(qt).open?(l(),Xe(f4,{key:1})):A("",!0)}}),h4={class:"fw-clone-head"},v4={class:"fw-clone-badge"},m4={class:"fw-clone-headtext"},g4={class:"fw-clone-headtitle"},y4={class:"fw-clone-headsub"},w4={class:"fw-acc-split"},b4={class:"fw-acc-rail"},_4={class:"fw-acc-railhead"},k4={class:"fw-acc-count"},x4={key:0,class:"fw-acc-empty"},C4={key:1,class:"fw-acc-railist"},S4={key:0,class:"fw-acc-group"},$4=["onClick","onContextmenu"],E4=["data-kind"],D4={class:"fw-acc-itemtext"},T4=["title"],N4=["title"],F4=["title"],P4=["title"],A4={class:"fw-acc-efflabel"},R4={key:0,class:"fw-acc-effval"},M4={key:1,class:"fw-acc-effnone"},O4={class:"fw-acc-effhint"},L4={class:"fw-acc-detail"},B4={key:0,class:"fw-acc-blank"},I4={class:"fw-acc-detailhead"},j4={class:"fw-acc-detailtitle"},V4={key:0,class:"fw-acc-detailsub"},z4={class:"fw-acc-form"},U4={class:"fw-clone-field"},H4={class:"fw-clone-label"},W4={class:"fw-clone-field"},G4={class:"fw-clone-label"},q4={class:"fw-clone-field"},K4={class:"fw-clone-label"},X4={class:"fw-clone-field"},Y4={class:"fw-clone-label"},J4={class:"fw-clone-tip"},Q4={class:"fw-clone-field"},Z4={class:"fw-clone-label"},eN={class:"fw-clone-field"},tN={class:"fw-clone-label"},nN={class:"fw-clone-row"},oN={class:"fw-clone-field"},sN={class:"fw-clone-label"},iN={key:0,class:"fw-clone-error"},aN={class:"fw-acc-actions"},lN={class:"fw-clone-tip"},rN=vt({__name:"AccountDialog",setup(t){const{t:e}=Mt(),n=B({get:()=>xn.open,set:we=>{we||Ya()}}),a=g(null),r=g(!1),u=B(()=>!r.value&&a.value!==null),h=B(()=>r.value||a.value!==null),d=B(()=>An.value.find(we=>we.id===a.value)??null),p=gt({kind:"git",name:"",host:"",url:"",username:"",secretKind:"password",secret:"",note:""}),w=g(!1),b=g(!1),_=g(null),M=g(""),O=g(null);async function N(){const we=xn.url?.trim()??"";if(!we){O.value=null;return}const _e=await bu(xn.kind,we).catch(()=>null);O.value=_e?.account??null}const j=B(()=>["git","svn"].map(_e=>({kind:_e,list:An.value.filter(Ye=>Ye.kind===_e)}))),H=g(null),{cmOpen:C,cmX:Z,cmY:G,cmItems:F,openMenu:de,closeMenu:I}=hn();function he(we,_e){const Ye=[{label:e("accTest"),icon:"refresh",onClick:()=>xe(_e)},{label:e("accApply"),icon:"check",onClick:()=>void ge(_e)},{separator:!0},{label:e("accDelete"),icon:"trash",onClick:()=>void ne(_e)},{separator:!0},{label:e("accCopyIdent"),icon:"copy",onClick:()=>void ae(_e)}];de(we,Ye)}async function xe(we){Pe(we),await Ke()}async function ge(we){Pe(we),await ye()}async function ne(we){Pe(we),await je(),_.value=null}async function ae(we){try{await navigator.clipboard.writeText(`${we.username}@${we.host}`)}catch{}}const Ee=B(()=>(r.value?p.kind:d.value?.kind??p.kind)==="svn"?"fw-clone-svn":"fw-clone-git"),Ve=B(()=>{const we=p.username.trim()||"user",_e=p.host.trim()||"host";return`${we}@${_e}`});function be(we){p.kind=we.kind,p.name=we.name,p.host=we.host,p.url=we.url,p.username=we.username,p.secretKind=we.secretKind,p.secret="",p.note=we.note}function Pe(we){r.value=!1,a.value=we.id,_.value=null,M.value="",H.value=null,be(we)}Je(()=>xn.open,we=>{we&&(r.value=!1,a.value=null,_.value=null,M.value="",w.value=!1,b.value=!1,O.value=null,(async()=>{await hs(),await N();const _e=An.value[0];_e&&Pe(_e)})())},{immediate:!0});function W(){Ya()}function J(){Ya()}function z(){r.value=!0,a.value=null,_.value=null,M.value="",p.kind=xn.kind,p.name="",p.host="",p.url=xn.url,p.username="",p.secretKind="password",p.secret="",p.note=""}async function ee(we){w.value=!0,M.value="";try{await we()}catch(_e){M.value=_e instanceof Error?_e.message:String(_e)}finally{w.value=!1}}async function ye(){const we=d.value;if(we){b.value=!0;try{const _e=await fh(we.id);ro(`${e("accApplyOk")} · ${_e.detail}`)}catch(_e){po(_e instanceof Error?_e.message:String(_e))}finally{b.value=!1}}}async function je(){const we=d.value;if(we){if(_.value!==we.id){_.value=we.id;return}_.value=null;try{await uh(we.id),ro(e("accDeleted")),await hs(),await N();const _e=An.value[0];_e?Pe(_e):(a.value=null,r.value=!1)}catch(_e){po(_e instanceof Error?_e.message:String(_e))}}}async function Ke(){if(!p.host.trim()||!p.username.trim()){us(e("accRequired"));return}const we=u.value&&!p.secret.trim();if(!we&&!p.secret.trim()){us(e("accSecretRequired"));return}await ee(async()=>{const _e=await dh(we?{id:a.value??void 0}:{kind:p.kind,host:p.host.trim(),url:p.url.trim(),username:p.username.trim(),secret:p.secret,secretKind:p.secretKind});H.value={ok:_e.ok,detail:_e.detail},_e.ok?ro(`${e("accTestOk")} · ${_e.detail}`):po(`${e("accTestFail")} · ${_e.detail}`)})}async function Ze(){if(!p.host.trim()||!p.username.trim()){us(e("accRequired"));return}if(r.value&&!p.secret){us(e("accSecretRequired"));return}await ee(async()=>{const we={kind:p.kind,host:p.host.trim(),url:p.url.trim(),name:p.name.trim(),username:p.username.trim(),secret:p.secret||void 0,secretKind:p.secretKind,note:p.note.trim()};if(u.value&&a.value){await ch({id:a.value,...we}),ro(e("accSaved")),await hs(),await N();const _e=An.value.find(Ye=>Ye.id===a.value);_e&&be(_e)}else{const _e=await rh(we);ro(e("accSaved")),await hs(),await N();const Ye=An.value.find(ot=>ot.id===_e.account.id);Ye&&Pe(Ye)}})}return(we,_e)=>{const Ye=Mn,ot=ma,pe=va,Ce=To,qe=un;return l(),Xe(qe,{modelValue:n.value,"onUpdate:modelValue":_e[8]||(_e[8]=ce=>n.value=ce),class:te(["fw-clone-dialog fw-acc-dlg",Ee.value]),width:"800px","align-center":"","close-on-click-modal":!1,"append-to-body":"",onClosed:W},{header:se(()=>[s("div",h4,[s("span",v4,[m(oe,{name:"shield",size:20})]),s("div",m4,[s("div",g4,i(o(e)("accTitle")),1),s("div",y4,i(o(e)("accCaption")),1)])])]),footer:se(()=>[m(Ye,{size:"small",onClick:J},{default:se(()=>[ue(i(o(e)("accCancel")),1)]),_:1}),m(Ye,{size:"small",type:"primary",loading:w.value,disabled:!h.value,onClick:Ze},{default:se(()=>[ue(i(o(e)("accSave")),1)]),_:1},8,["loading","disabled"])]),default:se(()=>[s("div",w4,[s("div",b4,[s("div",_4,[s("span",k4,i(o(e)("accListTitle"))+" · "+i(o(An).length),1),m(Ye,{size:"small",class:"fw-acc-iconbtn",title:o(e)("accAdd"),onClick:z},{default:se(()=>[m(oe,{name:"plus",size:13})]),_:1},8,["title"])]),o(An).length?(l(),c("div",C4,[(l(!0),c(ie,null,Re(j.value,ce=>(l(),c(ie,{key:ce.kind},[ce.list.length?(l(),c("div",S4,i(ce.kind==="svn"?"SVN":"Git"),1)):A("",!0),(l(!0),c(ie,null,Re(ce.list,Ie=>(l(),c("button",{key:Ie.id,type:"button",class:te(["fw-acc-item",{on:!r.value&&Ie.id===a.value}]),onClick:rt=>Pe(Ie),onContextmenu:ke(rt=>he(rt,Ie),["prevent","stop"])},[s("span",{class:"fw-acc-kind","data-kind":Ie.kind},i(Ie.kind==="svn"?"SVN":"Git"),9,E4),s("span",D4,[s("span",{class:"fw-acc-itemname",title:Ie.name},i(Ie.name),9,T4),s("span",{class:"fw-acc-itemsub",title:`${Ie.username}@${Ie.host}`},i(Ie.username)+"@"+i(Ie.host),9,N4)]),Ie.hasSecret?(l(),Xe(oe,{key:0,class:"fw-acc-lock",name:"shield",size:13,title:o(e)("accHasSecret")},null,8,["title"])):(l(),c("span",{key:1,class:"fw-acc-dot",title:o(e)("accNoSecret")},null,8,F4))],42,$4))),128))],64))),128))])):(l(),c("div",x4,i(o(e)("accEmpty")),1)),o(xn).url?(l(),c("div",{key:2,class:"fw-acc-effective",title:o(xn).url},[s("span",A4,i(o(e)("accEffective")),1),O.value?(l(),c("span",R4,i(O.value.name)+"（"+i(O.value.username)+"@"+i(O.value.host)+"）",1)):(l(),c("span",M4,i(o(e)("accEffectiveNone")),1)),s("span",O4,i(o(e)("accMatchHint")),1)],8,P4)):A("",!0)]),s("div",L4,[h.value?(l(),c(ie,{key:1},[s("div",I4,[s("span",j4,i(r.value?o(e)("accNewTitle"):o(e)("accEditTitle")),1),d.value?(l(),c("span",V4,i(d.value.username)+"@"+i(d.value.host),1)):A("",!0)]),s("div",z4,[s("div",U4,[s("span",H4,i(o(e)("accKind")),1),m(pe,{modelValue:p.kind,"onUpdate:modelValue":_e[0]||(_e[0]=ce=>p.kind=ce),size:"small",class:"fw-acc-kindsel","popper-class":"fw-acc-popper"},{default:se(()=>[m(ot,{value:"git",label:o(e)("accKindGit")},null,8,["label"]),m(ot,{value:"svn",label:o(e)("accKindSvn")},null,8,["label"])]),_:1},8,["modelValue"])]),s("div",W4,[s("span",G4,i(o(e)("accName")),1),m(Ce,{modelValue:p.name,"onUpdate:modelValue":_e[1]||(_e[1]=ce=>p.name=ce),size:"small",placeholder:Ve.value},null,8,["modelValue","placeholder"])]),s("div",q4,[s("span",K4,i(o(e)("accHost")),1),m(Ce,{modelValue:p.host,"onUpdate:modelValue":_e[2]||(_e[2]=ce=>p.host=ce),size:"small",placeholder:o(e)("accHostPlaceholder")},null,8,["modelValue","placeholder"])]),s("div",X4,[s("span",Y4,i(o(e)("accUrl")),1),m(Ce,{modelValue:p.url,"onUpdate:modelValue":_e[3]||(_e[3]=ce=>p.url=ce),size:"small",placeholder:o(e)("accUrlPlaceholder")},null,8,["modelValue","placeholder"]),s("span",J4,i(o(e)("accUrlHint")),1)]),s("div",Q4,[s("span",Z4,i(o(e)("accUsername")),1),m(Ce,{modelValue:p.username,"onUpdate:modelValue":_e[4]||(_e[4]=ce=>p.username=ce),size:"small",placeholder:o(e)("accUsername")},null,8,["modelValue","placeholder"])]),s("div",eN,[s("span",tN,i(o(e)("accSecretKind")),1),s("div",nN,[m(pe,{modelValue:p.secretKind,"onUpdate:modelValue":_e[5]||(_e[5]=ce=>p.secretKind=ce),size:"small",class:"fw-acc-kindslim","popper-class":"fw-acc-popper"},{default:se(()=>[m(ot,{value:"password",label:o(e)("accSecretPassword")},null,8,["label"]),m(ot,{value:"token",label:o(e)("accSecretToken")},null,8,["label"])]),_:1},8,["modelValue"]),m(Ce,{modelValue:p.secret,"onUpdate:modelValue":_e[6]||(_e[6]=ce=>p.secret=ce),size:"small",type:"password","show-password":"",class:"fw-acc-secretinput",placeholder:u.value&&d.value?.hasSecret?o(e)("accKeepSecret"):o(e)("accSecret")},null,8,["modelValue","placeholder"])])]),s("div",oN,[s("span",sN,i(o(e)("accNote")),1),m(Ce,{modelValue:p.note,"onUpdate:modelValue":_e[7]||(_e[7]=ce=>p.note=ce),size:"small"},null,8,["modelValue"])])]),M.value?(l(),c("div",iN,i(M.value),1)):A("",!0),H.value?(l(),c("div",{key:1,class:te(["fw-acc-testres",H.value.ok?"is-ok":"is-fail"])},[m(oe,{name:H.value.ok?"check":"warning",size:13},null,8,["name"]),s("span",null,i(H.value.ok?o(e)("accTestOk"):o(e)("accTestFail"))+" · "+i(H.value.detail),1)],2)):A("",!0),s("div",aN,[m(Ye,{size:"small",loading:w.value,onClick:Ke},{default:se(()=>[ue(i(o(e)("accTest")),1)]),_:1},8,["loading"]),u.value?(l(),Xe(Ye,{key:0,size:"small",loading:b.value,onClick:ye},{default:se(()=>[ue(i(o(e)("accApply")),1)]),_:1},8,["loading"])):A("",!0),u.value?(l(),Xe(Ye,{key:1,size:"small",class:te({"fw-acc-danger":_.value===d.value?.id}),onClick:je},{default:se(()=>[ue(i(_.value===d.value?.id?o(e)("accDeleteConfirm"):o(e)("accDelete")),1)]),_:1},8,["class"])):A("",!0)]),s("div",lN,i(o(e)("accApplyHint")),1)],64)):(l(),c("div",B4,i(o(e)("accPick")),1))])]),o(C)?(l(),Xe(Zt,{key:0,items:o(F),x:o(Z),y:o(G),onClose:o(I)},null,8,["items","x","y","onClose"])):A("",!0)]),_:1},8,["modelValue","class"])}}}),cN=xt(rN,[["__scopeId","data-v-d434fcb2"]]),uN={class:"fw-toast-host","aria-live":"polite","aria-atomic":"false"},dN=["onMouseenter","onMouseleave"],fN={class:"fw-toast-ico","aria-hidden":"true"},pN=["title","onClick"],hN=["title"],vN=["title","aria-label","onClick"],Zc=100,mN=48,gN=vt({__name:"ToastHost",setup(t){let e=null;function n(){if(Ha.value.length!==0)for(const w of[...Ha.value])w.paused||w.duration<=0||(w.remain-=Zc,w.remain<=0&&Kr(w.id))}cn(()=>{e=window.setInterval(n,Zc)}),At(()=>{e!==null&&window.clearInterval(e),e=null});const a={ok:"check",error:"warning",warning:"warning",info:"info"},r=gt(new Set);function u(w){r.has(w)?r.delete(w):r.add(w)}function h(w){return w.message.length>mN?w.message:void 0}function d(w){return Math.max(0,Math.ceil(w.remain/1e3))}function p(w){if(w.duration<=0)return"100%";const b=w.remain/w.duration*100;return`${Math.max(0,Math.min(100,b))}%`}return(w,b)=>(l(),c("div",uN,[(l(!0),c(ie,null,Re(o(Ha),_=>(l(),c("div",{key:_.id,class:te(["fw-toast",`k-${_.kind}`]),role:"status",onMouseenter:M=>_.paused=!0,onMouseleave:M=>_.paused=!1},[s("span",fN,[m(oe,{name:a[_.kind],size:15},null,8,["name"])]),s("span",{class:te(["fw-toast-msg",{"is-open":r.has(_.id)}]),title:h(_),onClick:M=>u(_.id)},i(_.message),11,pN),_.duration>0?(l(),c("span",{key:0,class:"fw-toast-count",title:`${d(_)}s`},i(d(_))+"s ",9,hN)):A("",!0),s("button",{class:"fw-toast-x",type:"button",title:o(v)("toastClose"),"aria-label":o(v)("toastClose"),onClick:M=>o(Kr)(_.id)},[m(oe,{name:"close",size:13})],8,vN),_.duration>0?(l(),c("span",{key:1,class:"fw-toast-bar",style:_t({width:p(_)})},null,4)):A("",!0)],42,dN))),128))]))}}),zo=new Map;function yN(){const t=window.__DSH_FILE_WORKBENCH__;if(!t)return;t.openExternalFile=n=>{fi(n).catch(a=>Y("error",a.message)),Nt()},t.openExternalFolder=n=>{Vt(n)},t.syncSessionWorkspace=()=>{Yv()};const e=t.pendingOpens;if(e&&e.length>0){t.pendingOpens=[];for(const n of e)n.kind==="file"?t.openExternalFile(n.path):t.openExternalFolder?.(n.path)}}function of(t,e,n="workbench"){e?.apiBase&&(window.__DSH_FILE_WORKBENCH__=window.__DSH_FILE_WORKBENCH__??{},window.__DSH_FILE_WORKBENCH__.apiBase=e.apiBase);const a=zo.get(t);if(a){try{a.unmount()}catch{}zo.delete(t)}const r=ui(n==="vscode"?oD:K$);let u=null;n==="vscode"&&(u=Dr(Bd(e?.instanceId)),e?.fresh&&u.markFresh(),u.bindTab(e?.instanceId??null,e?.panelId??null),r.provide(Aa,u)),r.mount(t),zo.set(t,r),n==="workbench"&&yN(),Gh(),n==="workbench"&&_2();const h=r,d=u;return{unmount:()=>{try{h.unmount()}catch{}zo.get(t)===h&&zo.delete(t),zo.size===0&&setTimeout(()=>{zo.size===0&&Sp()},3e3)},openProject:d?p=>d.requestOpenProject(p):void 0}}function sf(t,e){return of(t,e,"workbench")}function wN(t,e){return of(t,e,"vscode")}window.__dshFileWorkbenchMountPane__=sf;window.__dshVSCodeMountPane__=wN;function bN(){if(typeof document>"u"||!document.body)return;const t=ya();if(t.app&&t.el?.isConnected)return;if(t.app){try{t.app.unmount()}catch{}t.app=null,t.el=null}document.getElementById("dsh-toast-root")?.remove();const e=document.createElement("div");e.id="dsh-toast-root",e.style.position="fixed",e.style.left="0",e.style.top="0",e.style.width="0",e.style.height="0",e.style.overflow="visible",e.style.zIndex="2147483000",e.style.pointerEvents="none",document.body.appendChild(e);try{const n=ui(gN);n.mount(e),t.app=n,t.el=e}catch(n){console.error("[dsh-file-workbench] 提示宿主挂载失败：",n),e.remove()}}function _N(){if(typeof document>"u"||!document.body||document.getElementById("dsh-term-root"))return;const t=document.createElement("div");t.id="dsh-term-root",t.style.position="fixed",t.style.left="0",t.style.top="0",t.style.width="0",t.style.height="0",t.style.overflow="visible",t.style.zIndex="10000",document.body.appendChild(t);try{ui(HD).mount(t)}catch(e){console.error("[dsh-file-workbench] 全局终端挂载失败：",e)}}bN();_N();kN();xN();function kN(){if(typeof document>"u"||!document.body||document.getElementById("dsh-clone-root"))return;const t=document.createElement("div");t.id="dsh-clone-root",t.style.position="fixed",t.style.left="0",t.style.top="0",t.style.width="0",t.style.height="0",t.style.overflow="visible",t.style.zIndex="10000",document.body.appendChild(t);try{ui(p4).mount(t)}catch(e){console.error("[dsh-file-workbench] 全局克隆弹窗挂载失败：",e)}}if(typeof document<"u"){const t=document.getElementById("app");t&&sf(t,{apiBase:""})}window.__dshTestProbeUrl=`${(window.__DSH_FILE_WORKBENCH__?.apiBase||"/api/dsh-file-workbench").replace(/\/$/,"")}/assets/__dsh-test-probe.js`;function xN(){if(typeof document>"u"||!document.body||document.getElementById("dsh-acc-root"))return;const t=document.createElement("div");t.id="dsh-acc-root",t.style.position="fixed",t.style.left="0",t.style.top="0",t.style.width="0",t.style.height="0",t.style.overflow="visible",t.style.zIndex="10000",document.body.appendChild(t);try{ui(cN).mount(t)}catch(e){console.error("[dsh-file-workbench] 全局账号对话框挂载失败：",e)}}
