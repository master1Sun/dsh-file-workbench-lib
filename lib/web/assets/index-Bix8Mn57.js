const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-C2cID70-.js","assets/vendor-vue-DSVMyY-k.js"])))=>i.map(i=>d[i]);
import{a1 as gt,r as g,a5 as Or,y as ht,G as c,S as N,d as B,E as l,H as Xe,P as se,I as o,L as te,u as s,F as oe,W as m,V as i,ao as bt,a8 as xe,aa as Ae,U as ue,e as Je,q as Kl,o as rn,l as Rt,T as qc,K as _t,J as Sp,n as Dt,Q as kt,ap as Lt,ag as $p,k as Es,Y as Ep,X as go,m as Xl,s as Tp,ay as Dp,ak as Fp,p as Kc,at as ai}from"./vendor-vue-DSVMyY-k.js";import{E as Ts,a as Mn,b as cn,c as Pp,d as Np,e as pa,f as fa,g as Rp,h as Ap,i as Mp}from"./vendor-element-plus-CPaGIovE.js";import{aV as Ro,aW as Op,aX as Lp,aY as Bp,aZ as Ip,a_ as Lr,a$ as Xc,b0 as jp,b1 as Vp,b2 as zp,b3 as Up,b4 as Br,b5 as Hp,b6 as Wp,b7 as Gp,b8 as qp,b9 as Ir,ba as so,bb as oo,bc as Kp,bd as Ba,be as ki,bf as Xp,bg as Yp,bh as Jp,bi as Qp,bj as Zp,bk as ef,bl as tf}from"./vendor-C2cID70-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const u of r)if(u.type==="childList")for(const v of u.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&a(v)}).observe(document,{childList:!0,subtree:!0});function n(r){const u={};return r.integrity&&(u.integrity=r.integrity),r.referrerPolicy&&(u.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?u.credentials="include":r.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(r){if(r.ep)return;r.ep=!0;const u=n(r);fetch(r.href,u)}})();const tt=gt({visible:!1,kind:"confirm",title:"",message:"",okText:"",cancelText:"",inputPlaceholder:"",inputValue:"",multiline:!1,choices:[],resolve:null});function jr(t){return new Promise(e=>{tt.kind="confirm",tt.title=t.title??"",tt.message=t.message,tt.choices=t.choices,tt.visible=!0,tt.resolve=n=>e(typeof n=="string"?n:null)})}function At(t){return new Promise(e=>{tt.kind="confirm",tt.title=t.title??"",tt.message=t.message,tt.okText=t.okText??"",tt.cancelText=t.cancelText??"",tt.choices=[],tt.inputValue="",tt.visible=!0,tt.resolve=n=>e(n===!0)})}function ds(t){return new Promise(e=>{tt.kind="prompt",tt.title=t.title??"",tt.message=t.message??"",tt.okText=t.okText??"",tt.cancelText=t.cancelText??"",tt.choices=[],tt.inputPlaceholder=t.placeholder??"",tt.inputValue=t.initial??"",tt.multiline=t.multiline===!0,tt.visible=!0,tt.resolve=n=>e(n===null?null:String(n))})}function Ao(t){tt.visible=!1,tt.resolve?.(t),tt.resolve=null}const nf={tabFileWorkbench:"文件工作台",tabFileWorkbenchDesc:"浏览、预览、搜索本地文件，并引用到当前会话",tabVSCode:"文件编辑器",tabVSCodeDesc:"浏览项目目录，多标签编辑代码并高亮语法",tabMenuOpenInEditor:"在文件编辑器中打开工作区",tabMenuNewEditor:"新建编辑器窗口",tabMenuAnotherEditor:"再开一个编辑器窗口",tabMenuFloat:"弹出为浮窗",tabMenuDefaultLabel:"默认打开",guideMenuAria:"更多打开方式",vsNoProject:"未选择项目目录",vsTreeLoading:"正在加载项目…",vsOpenFolder:"打开文件夹",vsFolderPath:"请输入项目目录绝对路径",vsSave:"保存",vsSaved:"已保存",vsUnsavedTitle:"未保存的更改",vsUnsavedMsg:"当前文件有未保存的更改，确定关闭吗？",vsCloseManyMsg:"有 {n} 个标签未保存，全部保存并关闭？",vsTooLarge:"文件过大：超过 8MB 编辑上限，请用系统程序打开",vsScrollLeft:"向左滚动标签",vsScrollRight:"向右滚动标签",vsReadonly:"只读",vsEmptyHint:"选择项目目录后，从左侧树打开文件开始编辑",vsLoading:"正在加载…",vsBrand:"文件编辑器",vsQuickAccess:"快捷方式",vsFormat:"格式化内容",vsFormatOk:"已格式化",vsFormatFail:"格式化失败：{msg}",vsMenuFile:"文件",vsSaveAs:"另存为…",vsSaveAsTitle:"另存为",vsFileName:"文件名",vsFileNamePlaceholder:"输入文件名，或粘贴绝对路径",vsFileType:"文件类型",vsFilterAll:"所有文件",vsFilterExt:"仅 {ext} 文件",vsSaveAsHint:"浏览到目标文件夹并填写文件名；双击列表中的文件可直接覆盖保存",vsSaveAsExists:"同名文件已存在，保存将覆盖它",vsSaveAsBlockedDirty:"{name} 已在编辑器中打开且有未保存改动，请先保存或关闭它",vsRecentProjects:"最近项目",vsRecentClearAll:"清空全部",vsRecentClearAllTitle:"清空全部最近项目",vsRecentClearAllConfirm:"确定要清空全部最近项目记录吗？此操作不可撤销。",vsRecentCleared:"已清空最近项目",vsRecentForgetTitle:"移除最近项目",vsRecentForgetConfirm:"确定要从最近项目中移除「{name}」吗？此操作不可撤销。",vsRecentForgot:"已移除 {name}",vsRemoveProject:"移出项目",vsRemoveProjectTitle:"移出项目",vsRemoveProjectConfirm:"确定将「{name}」移出项目吗？此操作会从最近项目中移除该目录，并关闭它的文件树（未保存的改动将丢失）。",vsProjectRemoved:"已移出项目",vsProjectGone:"项目目录已不存在，已从最近项目中移除",vsGitHistory:"提交记录",vsGitExpand:"展开提交记录",vsGitCollapse:"收起提交记录",vsGitRefresh:"刷新提交记录",vsGitFiles:"变更文件",vsGitFileDiff:"在新标签页打开此文件变更",vsQuickOpenPlaceholder:"搜索项目内文件（Ctrl+P）",vsLeftTabFiles:"文件",vsLeftTabSearch:"搜索",vsLeftTabGit:"版本控制",vsGitNoRepo:"当前目录不是 Git / SVN 仓库",vsUnfoldEditor:"展开编辑器",vsFoldEditor:"折叠编辑器",vsSearchNeedsProject:"请先打开项目文件夹再使用搜索",vsMenuRecent:"打开最近项目",vsMenuExtensions:"扩展",vsEmptyTitle:"打开一个文件夹开始编辑",vsGrepPlaceholder:"搜索内容（Enter 立即搜）",vsGrepScopePlaceholder:"仅在此文件夹下搜索，如 src/components",vsGrepScopeTitle:"搜索范围：留空 = 整个项目；填写项目内子目录路径可限定搜索范围",vsGrepCase:"区分大小写",vsGrepRegex:"使用正则",vsGrepSummary:"{files} 个文件中 {n} 条结果",vsGrepTruncated:"结果过多，已截断",vsGrepNoResult:"未找到结果",vsGrepOpenAt:"打开并跳到第 {ln} 行",vsSearchTitle:"搜索",vsGrepWholeWord:"全字匹配",vsGrepReplacePlaceholder:"替换",vsReplaceAll:"全部替换",vsReplacePreserveCase:"保留大小写",vsReplaceConfirm:"将把 {files} 个文件中的 {n} 处 “{q}” 替换为 “{r}”，此操作会直接改写磁盘文件且不可撤销。确定继续？",vsReplaceDone:"已在 {files} 个文件中替换 {n} 处",vsReplaceNone:"没有可替换的匹配项",vsReplaceRemoteUnsupported:"远端（ssh）根不支持跨文件批量替换",vsFilesToInclude:"包含的文件",vsFilesToIncludePlaceholder:"要搜索的文件，如 *.ts, src/**/README.md",vsFilesToIncludeTitle:"仅在这些 glob 命中的文件中搜索/替换（逗号分隔，相对项目根）。留空 = 不限。",vsFilesToExclude:"排除的文件",vsFilesToExcludePlaceholder:"要排除的文件或文件夹，如 **/node_modules, !*.min.js",vsFilesToExcludeTitle:"跳过这些 glob 命中的文件/文件夹（逗号分隔，相对项目根）。",vsClearAllResults:"清除所有结果",vsRefreshResults:"重新搜索",vsToggleReplace:"显示/隐藏替换",vsViewModeList:"列表",vsViewModeTree:"树",vsViewModeSwitchTitle:"在列表视图与树视图之间切换",vsSearchIndexing:"正在建立索引…",vsSearchNoResult:"没有匹配的文件",vsSearchTruncated:"结果较多，仅显示前若干条，请补充关键词",vsSaveAll:"全部保存",vsSavedAs:"已另存为 {path}",vsOverwriteMsg:"{path} 已存在，确定覆盖吗？",vsNoDirty:"没有需要保存的修改",vsAllSaved:"已保存 {n} 个文件",vsConflictTitle:"文件已被外部修改",vsConflictMsg:"{name} 在磁盘上已被修改。仍要用当前内容覆盖吗？",vsConflictMsgReload:"放弃对 {name} 的本地修改，改用磁盘上的版本？",vsConflictBadge:"外部已修改",vsReloadedExternal:"{name} 已被外部修改，已重新加载",vsSwitchLoseMsg:"有 {n} 个文件尚未保存，切换项目会丢失这些修改。确定继续吗？",vsReopenLoseMsg:"以其它编码重读会丢失当前未保存的修改，确定继续吗？",vsEncodingSwitched:"已按 {enc} 重新读取",vsBinaryHint:"这是二进制文件，无法以文本方式编辑",vsNewWindow:"新建编辑器窗口",vsFloatWindow:"浮动为独立窗口",vsNewTerminal:"新建终端",vsReplacedOldest:"编辑器窗口已满 8 个：已替换最早的窗口",vsNewWindowLimit:"无法新建编辑器窗口：请稍后重试",vsOpenExternal:"用系统程序打开",vsNoOpenFile:"没有打开的文件",vsTabClose:"关闭",vsTabCloseSave:"保存并关闭",vsTabCloseOthers:"关闭其他",vsTabCloseRight:"关闭右侧标签页",vsTabCloseAll:"关闭全部",terminalRestore:"还原终端",vsNewFile:"新建文件",vsNewFolder:"新建文件夹",vsNewFileName:"文件名",vsNewFolderName:"文件夹名",vsRename:"重命名",vsRenameName:"新名称",vsDelete:"删除",vsDeleteConfirm:"确定删除",vsRefresh:"刷新",vsCollapseAll:"折叠全部",vsExpandAll:"展开全部",vsExpandAllLimited:"目录较多，已展开前 {n} 个文件夹（继续展开会产生大量请求）",vsPickFolderTitle:"选择项目文件夹",vsComputer:"我的电脑",vsUp:"上级",vsEmptyDir:"此文件夹为空",vsPickInput:"选择此路径",vsCancel:"取消",vsPickConfirm:"选择此文件夹",vsNewFolderBtn:"新建文件夹",vsPickEnterHint:"双击文件夹进入；单击选中；“选择此文件夹”取高亮项，无高亮则取当前目录",menuCopyRelPath:"复制相对路径",menuCopyAbsPath:"复制绝对路径",vsAddToSession:"添加到会话",vsAddToSessionOk:"已添加到会话输入框",vsAddToSessionFail:"请先打开对话输入框",goUp:"返回上级",goBack:"后退",goForward:"前进",refreshList:"刷新资源列表",noFolder:"未打开文件夹",goSessionDir:"回到当前会话目录",closeTab:"关闭",clearSearch:"清除搜索",cancel:"取消",confirmOk:"确定",deleteTitle:"确认删除",searchScopeIn:"范围：",myComputer:"我的电脑",navHome:"主文件夹",navGallery:"图库",navThisPc:"此电脑",navQuickAccess:"快速访问",externalInjection:"外部注入",driveLabel:"本地磁盘 ({drive}:)",toastClose:"关闭提示",thisPcDevices:"设备和驱动器",driveCapacity:"{free} 可用，共 {total}",driveTotal:"总大小",driveFree:"可用空间",driveFs:"文件系统",driveTypeFixed:"本地磁盘",driveTypeRemovable:"可移动磁盘",emptyDrives:"（未检测到驱动器）",navExpand:"展开",navCollapse:"折叠",favoritePin:"已固定到快速访问",desktopEntry:"桌面",downloadEntry:"下载",documentEntry:"文档",pictureEntry:"图片",musicEntry:"音乐",videoEntry:"视频",workspaceEntry:"工作区",emptyDir:"（空）",colName:"名称",colSize:"大小",colType:"类型",colModified:"修改日期",typeFolder:"文件夹",typeFile:"文件",renameEntry:"重命名：",confirmDelete:'确认删除 "{name}" ？',brokenLink:"失效软链接",save:"保存",menuEdit:"编辑",txtEditorTitle:"编辑文本 · {name}",txtLoading:"加载中…",txtEditorSub:"文本编辑器",txtUnsaved:"未保存的更改",txtReadError:"读取失败：{msg}",txtDirty:"未保存",txtReadonly:"只读（工作区外）",txtPlaceholder:"在此输入文本…",txtChars:"字符",txtUnsavedTitle:"未保存的改动",txtUnsavedMsg:"该文件有未保存的改动，确定关闭？",txtSaved:"已保存",download:"下载",statusItemsCount:"{count} 个项目",searchTitle:"搜索文件名/内容",searchPlaceholder:"输入关键字…",search:"搜索",searching:"搜索中…",searchCase:"区分大小写",searchRegex:"正则表达式匹配",searchIdle:"在顶部搜索框输入关键字，实时匹配文件名与文件内容。",resultsCount:"{count} 个结果",resultsSuffixTruncated:"（已截断）",hitTitle:"右键在资源管理器中定位\\左键打开",matchContent:"内容匹配",searchReplaceAll:"批量替换",searchReplaceTitle:"确认批量替换",searchReplaceConfirm:"将在 {files} 个文件中替换 {count} 处匹配，此操作不可撤销，确定继续？",searchReplaceBusy:"正在替换…",searchReplaceDone:"已替换 {files} 个文件（{count} 处）",openFolderFirst:"请先打开文件夹",dirCreated:"目录已创建",fileCreated:"文件已创建",renamed:"已重命名",deleted:"已删除",workspaceOutside:"操作被拒绝：该操作仅限工作区内的文件/文件夹",errForbidden:"无权限或操作被拒绝（403）",errNotFound:"文件或目录不存在（404）",errNoRoot:"未打开文件夹：请先选择工作区目录（409）",errTooLarge:"数据过大，超出允许范围（413）",errServer:"服务端处理失败，请稍后重试（500）",errNetwork:"网络请求失败，请检查 host 连接",menuOpen:"打开",menuOpenExternal:"使用系统默认程序打开",menuOpenInEditor:"在文件编辑器中打开",menuCut:"剪切",menuCopy:"复制",menuRename:"重命名",menuDelete:"删除",menuCopyPath:"复制完整路径",menuProperties:"属性",menuCutDone:"已剪切到剪贴板",menuCopyDone:"已复制到剪贴板",menuOpened:"已调用系统程序打开",menuPathCopied:"路径已复制",menuPathCopyFail:"路径复制失败",menuRefresh:"刷新",menuView:"查看",menuSort:"排序方式",expShowNav:"显示导航栏",menuPaste:"粘贴",menuUpload:"上传文件",uploaded:"已上传 {count} 个文件",uploadFailed:"有 {count} 个文件上传失败",menuNew:"新建",menuNewFolder:"文件夹",menuNewFile:"文本文件",viewHuge:"超大图标",sshHosts:"SSH 主机",sshAddHost:"添加主机",sshCancel:"取消",sshName:"显示名",sshAddr:"地址（用户 @ 主机 : 端口）",sshUser:"用户名",sshHostAddr:"主机地址",sshAuth:"认证方式",sshAuthPassword:"口令认证",sshAuthKey:"私钥认证",sshPassword:"SSH 口令",sshKeyPath:"私钥文件路径（支持 ~）",sshSaveAdd:"添加",sshTest:"测试",sshTestConn:"测试",sshDelete:"删除",sshDeleteConfirm:"再点一次确认删除",sshTestOk:"SSH 连接成功",sshTestFail:"SSH 连接失败",sshRequired:"主机地址与用户名为必填项",sshAddSuccess:"主机已添加",sshNewHost:"添加 SSH 主机",sshEdit:"编辑",sshEditTitle:"编辑 SSH 主机",sshHostCaption:"连接远程服务器，浏览文件与登录终端",sshUpdateSuccess:"主机已更新",sshSaveEdit:"保存修改",sshKeepSecret:"（留空则沿用原口令）",sshNoHosts:"还没有主机，点「添加主机」开始",accTitle:"账号管理",accCaption:"管理 Git / SVN 登录凭据，执行命令时自动注入",accListTitle:"已保存账号",accAdd:"添加账号",accNewTitle:"添加账号",accEditTitle:"编辑账号",accEdit:"编辑",accKind:"类型",accKindGit:"Git",accKindSvn:"SVN",accName:"显示名",accHost:"主机",accHostPlaceholder:"例如 github.com 或 113.57.110.41:804",accUrl:"仓库地址（选填）",accUrlPlaceholder:"https://github.com/owner/repo.git",accUrlHint:"留空 = 对该主机的全部仓库生效；填写后按地址前缀匹配，用于同主机多账号。「测试连通」与「写入系统」都需要它。",accUsername:"用户名",accSecret:"口令 / 访问令牌",accSecretKind:"凭据类型",accSecretPassword:"口令",accSecretToken:"访问令牌",accKeepSecret:"（留空则沿用已存口令）",accNote:"备注",accSave:"保存",accCancel:"取消",accDelete:"删除",accDeleteConfirm:"再点一次确认删除",accTest:"测试连通",accTestOk:"连通正常",accTestFail:"连接失败",accApply:"写入系统",accApplyOk:"已写入系统",accApplyHint:"写入系统凭据存储后，命令行与其它 GUI 工具也免密。",accSaved:"账号已保存",accDeleted:"账号已删除",accRequired:"主机与用户名为必填",accSecretRequired:"请填写口令或访问令牌",accEmpty:"还没有账号，点「添加账号」开始",accHasSecret:"已保存凭据",accNoSecret:"未保存凭据",accAllRepos:"该主机全部仓库",accEffective:"当前仓库将使用",accEffectiveNone:"当前仓库无匹配账号（将走系统凭据 / svn 自身缓存）",accCopyIdent:"复制账号标识",accMatchHint:"按主机或仓库地址前缀匹配，未命中时使用系统凭据",accUseCurrent:"用当前仓库填充",accBack:"返回列表",accPick:"从左侧选择一个账号，或点「添加账号」新建",accTip:"凭据仅存于本机插件配置，不会外发；口令不回显，留空即沿用原值。",sshStatusOnline:"已连接",sshStatusOffline:"未连接",sshStatusChecking:"检测中…",sshStatusUnknown:"尚未检测",remoteNoExternal:"远端文件无法用本机程序打开",remoteNoArchive:"远端目录暂不支持压缩 / 解压",remoteNoTerminal:"找不到该远端主机的配置，已在本机目录启动终端（可先在设置里添加该 SSH 主机）",remoteCachedHint:"远端文件已下载到本机临时文件后打开（改动不会回传远端）",sshNavGroup:"SSH 远程",sshEmpty:"尚未添加主机（在此右键添加，或用「新建 ▾」）",viewLarge:"大图标",viewMedium:"中等图标",viewSmall:"小图标",viewList:"列表",viewDetails:"详细信息",viewContent:"内容",viewTiles:"平铺",showExtensions:"显示文件扩展名",cmdPreview:"预览",sortName:"名称",sortModified:"修改日期",sortType:"类型",sortSize:"大小",moved:"已移动",copied:"已复制",createdFolder:"已新建文件夹",createdFile:"已新建文件",newFolderName:"新建文件夹",newFileName:"新建文本文件",propName:"名称",propPath:"路径",propKind:"类型",propSize:"大小",propModified:"修改日期",settings:"设置",settingsSubtitle:"个性化工作台的外观与行为",retry:"重试",taskSrcMissing:"源文件不存在（可能已被移动或删除），已刷新列表：{name}",menuMore:"更多",settingsGroupFiles:"文件",settingsGroupAppearance:"外观",autoSave:"自动保存（编辑停顿 1 秒后写入）",vsFindPlaceholder:"查找",vsReplacePlaceholder:"替换为",vsFindNext:"下一个（Enter）",vsFindPrev:"上一个（Shift+Enter）",vsFindReplace:"替换（Enter）",vsFindReplaceAll:"全部替换",vsFindToggleReplace:"展开 / 收起替换",vsFindClose:"关闭（Esc）",vsFindNoMatch:"无结果",vsFindWord:"全字匹配",vsMenuLocalDiff:"查看本地改动",vsLocalDiffTitle:"未保存改动",vsLocalDiffTooBig:"改动过大，无法生成对比",vsMultiCursorHint:"提示：Alt + 点击 可添加多光标",vsActHide:"隐藏「{name}」",vsActBarBottom:"活动栏移到底部",vsActBarTop:"活动栏移到顶部",vsSideRight:"侧栏移到右侧",vsSideLeft:"侧栏移到左侧",vsMinimap:"编辑器缩略图",vsCloseSave:"保存并关闭",vsCloseDiscard:"不保存关闭",vsCloseSaveAll:"全部保存并关闭",vsCloseDiscardAll:"全部不保存关闭",showHidden:"显示隐藏文件",allowOutsideRoot:"允许操作工作区外的文件 (root 开关)",defaultView:"默认视图",themeMode:"主题",themeAuto:"跟随系统",themeDark:"深色",themeLight:"浅色",accentColor:"强调色",accentReset:"恢复默认",fontFamily:"字体",fontDefault:"默认",fontOptionYahei:"微软雅黑",fontOptionConsolas:"Consolas（等宽）",fontOptionCourier:"Courier New（等宽）",fontOptionGeorgia:"Georgia（衬线）",fontSize:"字号",fontSizeSm:"小",fontSizeMd:"标准",fontSizeLg:"大",fontSizeXl:"特大",shortcutHelp:"快捷键",shortcutHint:"按 ? 随时唤起，按 Esc 关闭",shortcutGlobal:"全局",shortcutFileList:"文件列表",shGlobalHelp:"打开快捷键帮助",shListSelectAll:"全选",shListCopy:"复制",shListCut:"剪切",shListPaste:"粘贴",shListFilter:"聚焦筛选框",shListNewFolder:"新建文件夹",shListDelete:"删除（含确认）",shListRename:"重命名",shListRefresh:"刷新",shListOpen:"打开文件 / 进入目录",shListMove:"移动选中",shListUp:"返回上级目录",shListBack:"浏览后退",shListForward:"浏览前进",undo:"撤销",findReplacePlaceholder:"替换为…",favorites:"收藏",favoriteAdd:"收藏",favoriteRemove:"取消收藏",favoriteAdded:"已收藏",favoriteRemoved:"已取消收藏",emptyFavorites:"（暂无收藏）",menuCompress:"压缩为 .zip",compressed:"已压缩",menuExtract:"解压到当前目录",extracted:"已解压 {count} 个文件",extractFailed:"解压失败",selectedCount:"{count} 项已选",menuMultiDelete:"删除所选 ({count})",menuMultiCut:"剪切所选",menuMultiCopy:"复制所选",menuMultiCompress:"压缩所选",filterPlaceholder:"筛选当前目录…",filterEmpty:"（无匹配）",taskFabTitle:"后台任务",taskPanelTitle:"后台任务",taskRunning:"运行中",taskHistory:"历史",taskClearFinished:"清除已完成",taskClearAll:"清空",taskEmpty:"暂无任务",taskViewLog:"查看日志",taskLogTitle:"任务日志",taskClose:"关闭",taskFieldTarget:"目标",taskStatusRunning:"进行中",taskStatusDone:"完成",taskStatusError:"失败",taskFieldFile:"文件",taskStartTime:"开始",taskEndTime:"结束",taskTotalSpent:"总耗时",taskStepSpent:"耗时",taskRunningLive:"运行中",taskFieldType:"类型",taskMetaFiles:"{count} 项 · {size}",taskArchive:"归档",taskArchiveOpen:"查看归档",taskArchiveTitle:"任务归档",taskArchiveNone:"暂无归档",taskArchiveRecords:"{count} 条记录",taskUploading:"上传文件",taskCompressing:"压缩",taskExtracting:"解压",taskCopying:"复制",taskMoving:"移动",taskDeleting:"删除",taskRenaming:"重命名",gitMenu:"Git",gitAdd:"暂存 (git add)",gitCommit:"提交 (git commit)",gitCommitTitle:"Git 提交",gitCommitPlaceholder:"输入提交信息…",gitCommitted:"已提交",gitAdded:"已暂存",gitDiscard:"还原改动",gitDiscardTitle:"确认还原",gitDiscardMsg:'丢弃 "{name}" 的工作区改动（git checkout --）？',gitDiscarded:"已还原",gitDiff:"查看改动",gitDiffTitle:"Git 改动",gitDiffEmpty:"（无可用改动）",gitDiffClose:"关闭",gitBadgeUntracked:"未跟踪的新文件",gitBadgeAdded:"新添加到暂存区",gitBadgeModified:"已修改",gitBadgeDeleted:"已删除",gitNotRepo:"不在 git 仓库",gitNoChanges:"没有已暂存的改动，无法提交",gitLoading:"加载中…",gitCommitFiles:"将提交 {n} 个文件：",gitCommitConfirm:"确认提交",gitConfig:"配置身份",gitConfigTitle:"Git 身份配置",gitConfigName:"用户名（user.name）",gitConfigNamePlaceholder:"例如：yourname",gitConfigEmail:"邮箱（user.email）",gitConfigEmailPlaceholder:"例如：you@example.com",gitConfigSave:"保存",gitConfigSaved:"已保存 git 全局身份配置",gitPanel:"打开 Git 面板",gitIgnore:"忽略（加入 .gitignore）",gitIgnored:"已忽略",gitPanelTitle:"Git 管理",gitFetch:"获取",gitPull:"拉取",gitPush:"推送",gitLoadMore:"加载更多",gitDiffTruncated:"差异过大，仅显示前 5000 行（完整内容可在编辑器查看）",gitCopyName:"复制名称",gitCopyUrl:"复制 URL",gitCopyMsg:"复制说明",gitCloneHere:"克隆仓库…",gitStatusColon:"当前分支：{branch}",gitLocalRepo:"本地仓库：",gitTabStatus:"更改",gitTabLog:"提交记录",gitTabBranch:"分支",gitTabStash:"暂存区",gitTabCli:"命令",gitClean:"工作区干净，没有待提交的改动",gitAddShort:"暂存",gitUnstage:"取消暂存",gitUnstaged:"已取消暂存",gitStageAll:"全部暂存",gitGroupStaged:"已暂存的更改",gitGroupUnstaged:"更改",gitGroupUntracked:"未跟踪",gitLogEmpty:"（暂无提交记录）",gitBranchNew:"新分支名称",gitCheckout:"切换",gitDelete:"删除",gitBranchCreated:"已创建并切换到分支 {name}",gitBranchDeleteMsg:"确定删除分支 {name}？",gitStashPlaceholder:"暂存说明（可选）",gitStashCreate:"创建暂存",gitStashEmpty:"（暂无暂存记录）",gitStashApply:"应用",gitStashPop:"弹出",gitStashDrop:"删除",gitStashClear:"清空暂存区",gitStashCreated:"已创建暂存",gitStashApplied:"已应用暂存",gitStashPopped:"已弹出暂存",gitStashDropped:"已删除该条暂存",gitStashCleared:"已清空暂存区",gitStashDropMsg:"确定删除暂存 {ref}？",gitStashClearMsg:"确定清空全部暂存记录？此操作不可恢复。",gitCliPlaceholder:"输入 git 子命令，例如 status / log --oneline -5",gitRailChanges:"更改",gitRailHistory:"提交历史",gitRailBranches:"分支",gitRailTags:"标签",gitRailRemotes:"远程",gitRailStash:"储藏",gitRailCli:"命令台",gitHeadDetached:"分离头指针",gitNoUpstream:"无上游分支",gitAheadBehind:"领先 {ahead} · 落后 {behind}",gitSelectFile:"在左侧选择一个文件查看改动",gitDiffUntrackedHint:"未跟踪的新文件：暂存后可查看与 HEAD 的差异",gitCommitMsgPlaceholder:"提交说明…",gitFileHistory:"文件历史",gitBlame:"逐行追溯",gitBlameAuthor:"作者",gitBlameDate:"日期",gitBlameLine:"行",gitBlameEmpty:"（无法读取逐行追溯）",gitFileHistoryEmpty:"（该文件暂无历史）",gitBack:"返回",gitHistoryAll:"全部分支",gitHistoryCurrent:"仅当前分支",gitSelectCommit:"在左侧选择一个提交查看详情",gitCommitDetail:"提交详情",gitCommitHash:"提交哈希",gitCommitAuthor:"作者",gitCommitDate:"提交时间",gitCommitParents:"父提交",gitCommitRefs:"引用",gitCommitChangedFiles:"变更文件（{n}）",gitCommitNoFiles:"（无文件变更）",gitCopyHash:"复制哈希",gitCopyPath:"复制路径",gitCopied:"已复制到剪贴板",gitReset:"重置到此提交",gitResetSoft:"软重置（改动全部保留在暂存区）",gitResetMixed:"混合重置（改动保留在工作区）",gitResetHard:"硬重置（丢弃改动）",gitResetHardMsg:"硬重置会丢弃工作区与暂存区的全部改动，确定继续？",gitResetDone:"已重置到 {hash}",gitRevert:"还原此提交",gitRevertDone:"已还原 {hash}",gitCherryPick:"拣选到当前分支",gitCherryPicked:"已拣选 {hash}",gitCheckoutCommit:"检出此提交",gitCheckoutCommitMsg:"将进入分离头指针状态，确定检出 {hash}？",gitBranchFrom:"新建分支指向此提交",gitBranchFromTitle:"从此提交新建分支",gitBranchFromPlaceholder:"新分支名称",gitBranchRename:"重命名",gitBranchRenameTitle:"重命名当前分支",gitBranchRenamePlaceholder:"新的分支名",gitBranchRenamed:"已重命名为 {name}",gitMergeIntoCurrent:"合并到当前分支",gitMergeDone:"已合并 {name}",gitPushBranch:"推送",gitPushed:"已推送 {name}",gitBranchCurrent:"当前",gitBranchRemoteGroup:"远程分支",gitBranchLocalGroup:"本地分支",gitBranchCreateAndSwitch:"创建并切换",gitTagNew:"新建标签",gitTagNamePlaceholder:"标签名，如 v1.0.0",gitTagTargetPlaceholder:"目标提交（留空为 HEAD）",gitTagMessagePlaceholder:"说明（填写即创建附注标签）",gitTagCreate:"创建",gitTagEmpty:"（暂无标签）",gitTagAnnotated:"附注",gitView:"查看",gitTagCreated:"已创建标签 {name}",gitTagDeleteMsg:"确定删除标签 {name}？",gitTagDeleted:"已删除标签 {name}",gitTagPushed:"已推送标签 {name}",gitTagFetchAll:"从远程获取标签",gitTagFetchAllDone:"已从远程获取标签",gitTagRemoteOnly:"远程",gitTagPull:"拉取",gitTagPulled:"已拉取标签 {name}",gitTagNoRemote:"无远程仓库，无法获取或发布标签",gitCommitViewTitle:"提交对比",gitCommitOpenDiff:"查看 {path} 的差异",gitReleaseBtn:"发布新版本",gitReleaseTitle:"发布新版本（创建附注标签并推送到远程）",gitReleaseName:"版本标签名",gitReleaseTarget:"基于提交（留空为 HEAD）",gitReleaseMsg:"版本说明（必填）",gitReleasePublish:"创建并发布",gitReleaseRequireMsg:"发布版本需填写版本说明",gitReleased:"已发布 {name} 到远程",gitReleaseGhSkip:"GitHub Release 未创建：{reason}",gitRefresh:"刷新",gitTabTags:"标签",gitTabReleases:"版本",gitReleaseChooseTag:"选择已有标签",gitReleaseNotesPlaceholder:"版本说明（将显示在 Release 页面）",gitReleaseCreateForTag:"创建 Release",gitReleaseCreated:"Release 已创建：{url}",gitReleaseLoadSkip:"版本列表不可用：{reason}",gitReleaseEmpty:"暂无版本记录",gitReleaseOpen:"打开",gitRemoteNamePlaceholder:"名称，如 origin",gitRemoteUrlPlaceholder:"地址，如 https://github.com/user/repo.git",gitRemoteAdd:"添加远程",gitRemoteEmpty:"（暂无远程仓库）",gitRemoteAdded:"已添加远程 {name}",gitRemoteRemoveMsg:"确定移除远程 {name}？",gitRemoteRemoved:"已移除远程 {name}",gitRemoteSetUrl:"修改地址",gitRemoteUrlTitle:"修改远程地址",gitRemoteUrlSaved:"已更新远程地址",gitStashView:"查看内容",gitStashNew:"创建储藏",gitStashNone:"（工作区干净，无内容可储藏）",gitOpRunning:"执行中…",gitOpFailed:"操作失败",svnMenu:"SVN",svnPanel:"打开 SVN 管理",svnPanelTitle:"SVN 管理",svnRepo:"工作副本：",svnUpdate:"更新",svnCommitBtn:"提交",svnAdd:"加入版本控制",svnAdded:"已加入版本控制",svnIgnore:"忽略（svn:ignore）",svnRevert:"还原",svnCleanup:"清理",svnResolve:"解决冲突",svnDiff:"比较差异",svnBlame:"追溯",svnCheckout:"检出",svnFailed:"SVN 命令执行失败",svnRailChanges:"本地修改",svnRailLog:"提交日志",svnNoUrl:"未读取到仓库地址",svnRunning:"正在执行…",svnRefresh:"刷新",svnLoading:"加载中…",svnSelectAll:"全选",svnModifiedCount:"本地修改（{n}）",svnNoChanges:"无本地修改",svnCommitPlaceholder:"填写提交说明…",svnCommitSelected:"将提交选中的 {n} 个文件",svnCommitAll:"将提交全部本地修改",svnOutput:"命令输出",svnNoOutput:"（无输出）",svnNoCli:"未检测到 svn 命令行，请先安装 Subversion",svnDone:"SVN 命令已完成",svnUpdateSummaryFrom:"更新完成：r{from} → r{to}，{n} 个条目变更",svnUpdateSummary:"更新完成：{n} 个条目变更，当前版本 r{to}",svnAlreadyLatest:"已是最新版本 r{rev}，没有需要更新的内容",svnLogEmpty:"暂无日志",svnLogToggle:"点击展开 / 收起该次提交详情",svnLogNoPaths:"该提交没有变更文件记录",svnLogOpenDiff:"查看该文件在此次提交中的对比",svnDiffTitle:"差异对比 · ",svnBlameTitle:"追溯 · ",svnCheckoutUrlPlaceholder:"仓库地址（如 https://svn.example.com/svn/repo）",svnCheckoutTargetPlaceholder:"检出到本地目录",repoCloneTitle:"克隆 / 检出仓库",repoCloneKindGit:"Git",repoCloneKindSvn:"SVN",repoCloneTitleGit:"克隆 Git 仓库",repoCloneTitleSvn:"检出 SVN 仓库",repoCloneCaptionGit:"从远程仓库克隆完整副本到本地",repoCloneCaptionSvn:"从 SVN 服务器检出指定版本到本地",repoCloneTargetGit:"将克隆到",repoCloneTargetSvn:"将检出到",repoCloneUrl:"仓库地址",repoCloneUrlGitPlaceholder:"仓库地址（如 https://github.com/owner/repo.git）",repoCloneDir:"目标目录",repoCloneDirPlaceholder:"要克隆到的父目录",repoCloneBrowse:"浏览…",repoCloneName:"子目录名称",repoCloneNamePlaceholder:"留空则按地址推断",repoCloneShallow:"浅克隆（仅最新一次提交）",repoCloneShallowHint:"更快更小，但不含历史",repoCloneRevision:"版本号",repoCloneRevisionPlaceholder:"留空为最新（HEAD）",repoCloneAccount:"账号",repoCloneAccountAuto:"自动匹配（按地址）",repoCloneAccountNew:"新建账号…",repoCloneTargetEmpty:"请填写仓库地址与目标目录",repoCloneRunningGit:"正在克隆 Git 仓库…",repoCloneRunningSvn:"正在检出 SVN 仓库…",repoCloneElapsed:"已用时 {s} 秒",repoCloneKeepOpen:"保持窗口打开，完成后将收到通知。",repoCloneActionGit:"克隆",repoCloneActionSvn:"检出",repoCloneDoneGit:"已克隆仓库：{name}",repoCloneDoneSvn:"已检出仓库：{name}",menuCloneGit:"克隆 Git 仓库…",menuCloneSvn:"检出 SVN 仓库…",svnNotRepoTip:"当前目录不是 SVN 工作副本，可填写上方信息检出仓库。",svnCheckedOut:"已检出仓库",svnStAdded:"已添加",svnStModified:"已修改",svnStDeleted:"已删除",svnStReplaced:"已替换",svnStConflicted:"冲突",svnStMissing:"缺失",svnStObstructed:"受阻",svnStUnversioned:"未版本控制",svnStIgnored:"已忽略",svnStLocked:"已锁定",saveConfig:"保存",recycleBin:"回收站",recycleRestore:"恢复",recycleDelete:"彻底删除",recycleEmpty:"清空回收站",recycleEmptyConfirm:"确定清空回收站？此操作不可恢复。",recycleDeleteConfirm:"确定彻底删除“{name}”？此操作不可恢复。",recycleDeleteConfirmMulti:"确定彻底删除选中的 {count} 项？此操作不可恢复。",recycleEmptying:"正在清空回收站…",recycleEmptyProgress:"清空回收站：剩余 {count} 项",recycleEmptyDone:"回收站已清空",recycleEmptyList:"回收站是空的",recycleRestored:"已恢复到原位置",recycledDeleted:"已彻底删除",terminal:"终端",terminalTitle:"终端",terminalMinimize:"最小化到任务条",terminalCloseTitle:"关闭终端",terminalClose:"关闭",terminalNew:"新建终端",terminalShellSwitch:"切换默认 shell（cmd / powershell）",terminalAdmin:"管理员",terminalAdminNormal:"普通权限",terminalAdminOn:"当前以管理员身份运行：终端内命令拥有管理员权限",terminalAdminOff:"当前为普通权限：终端内命令无法修改系统级设置",terminalAdminHint:"以「管理员身份运行」启动 dsh web，面板内所有终端即拥有管理员权限（终端子进程继承宿主进程权限）。",terminalClear:"清屏",terminalResizeTitle:"拖动缩放终端",terminalDockDragTitle:"点击展开 · 拖动移动 · 右键菜单",terminalDockSessions:"已最小化的终端",terminalDockCloseAll:"全部关闭",terminalTab:"{n}",scrollLeft:"向左滚动",scrollRight:"向右滚动",termFontSmaller:"减小字号",termFontLarger:"增大字号",termInputFailed:"终端输入发送失败：{msg}",termSshBadge:"该终端已登录到远端 SSH 主机",termSshReconnect:"重连",termSshReconnectTitle:"重新登录远端（用已保存的口令 / 密钥自动登录）",termSearchPlaceholder:"在终端输出中搜索…",termSearchCase:"区分大小写",termSearchPrev:"上一个",termSearchNext:"下一个",termSearchClose:"关闭搜索",termCopyHint:"Ctrl+C 复制 · Ctrl+V 粘贴 · Ctrl+F 搜索",menuDownload:"下载文件",menuOpenTerminal:"在终端打开",menuSubagent:"用子代理处理",menuNewSubagent:"新建子代理对话",subagentAsk:"希望子代理做什么？",subagentAskPlaceholder:"描述任务（可留空，稍后在子代理会话中继续）",subagentSpawned:"已在官方子代理会话中打开",subagentFailed:"子代理发起失败",statusDrivesCount:"{count} 个驱动器",statusLoading:"加载中…",statusSearching:"搜索中…",statusTasks:"后台任务",statusTasksRunning:"{count} 个后台任务",statusTermRestore:"点击还原终端窗口",pmTitle:"扩展",pmManage:"管理",pmSort:"排序",pmSortInstall:"按安装次序",pmSortName:"按名称",pmSortSource:"按来源",pmInstalled:"已安装",pmSearchPlaceholder:"在已安装中搜索",pmImportFromFile:"从本地文件导入…",pmImportFromUrl:"从 URL 导入…",pmEnableAll:"全部启用",pmDisableAll:"全部禁用",pmEnable:"启用",pmDisable:"禁用",pmRemove:"移除插件",pmMoreActions:"更多操作",pmPull:"拉取",pmPulling:"…",pmUrlPlaceholder:"https://example.com/plugin.js",srcBuiltin:"内置",srcFile:"本地",srcUrl:"URL",pmEmptyWithQuery:"没有匹配 “{q}” 的插件<br>换个关键词，或用右上「···」导入",pmEmptyNoPlugins:"还没有插件<br>用右上「···」从本地文件或 URL 导入",pmImportFailed:"导入 {name} 失败：{msg}",pmUrlImported:"已从 URL 导入并启用",pmUrlImportFailed:"URL 导入失败：{msg}",pmNeedsProject:"已启用 · 打开项目目录后在侧边栏显示",vsExtNeedProject:"{n} 个扩展已启用，打开项目目录后显示在侧边栏",pmCheckEmpty:"文件内容为空。",pmCheckNotPlugin:"这不是插件文件：缺少 __ModuleLoader__ 登记或 activityBar 注册调用。",pmCheckNeedsHost:"此插件需要宿主 API v{need}，当前工作台为 v{have}，请升级后重试。",pmCheckNoContrib:"插件加载后未注册任何贡献点，已回滚。请检查插件是否适配本工作台 API。",pmRestoreFailed:"恢复插件 {name} 失败：{msg}",pmEnableFailed:"启用 {name} 失败：{msg}"},Vr={tabFileWorkbench:"File Workbench",tabFileWorkbenchDesc:"Browse, preview, and search local files, then reference them to the session",tabVSCode:"File Editor",tabVSCodeDesc:"Open a code editor in the right sidebar: browse project tree, multi-tab editing, syntax highlight",tabMenuOpenInEditor:"Open Workspace in File Editor",tabMenuNewEditor:"New Editor Window",tabMenuAnotherEditor:"Open Another Editor Window",tabMenuFloat:"Open as Floating Window",tabMenuDefaultLabel:"Open by default",guideMenuAria:"More ways to open",vsNoProject:"No project folder selected",vsTreeLoading:"Loading project…",vsOpenFolder:"Open Folder",vsFolderPath:"Enter the absolute path of the project folder",vsSave:"Save",vsSaved:"Saved",vsUnsavedTitle:"Unsaved Changes",vsUnsavedMsg:"This file has unsaved changes. Close it anyway?",vsCloseManyMsg:"{n} unsaved tab(s). Save all and close?",vsTooLarge:"File too large: over the 8MB editing limit. Open it with the system app instead",vsScrollLeft:"Scroll tabs left",vsScrollRight:"Scroll tabs right",vsReadonly:"Read-only",vsEmptyHint:"Pick a project folder, then open a file from the left tree to start editing",vsLoading:"Loading…",vsBrand:"File Editor",vsQuickAccess:"Quick Access",vsFormat:"Format Content",vsFormatOk:"Formatted",vsFormatFail:"Format failed: {msg}",vsMenuFile:"File",vsSaveAs:"Save As…",vsSaveAsTitle:"Save As",vsFileName:"File name",vsFileNamePlaceholder:"File name, or paste an absolute path",vsFileType:"File type",vsFilterAll:"All files",vsFilterExt:"{ext} files only",vsSaveAsHint:"Browse to a folder and enter a file name; double-click a listed file to overwrite it directly",vsSaveAsExists:"A file with this name already exists and will be overwritten",vsSaveAsBlockedDirty:"{name} is open in the editor with unsaved changes — save or close it first",vsRecentProjects:"Recent Projects",vsRecentClearAll:"Clear All",vsRecentClearAllTitle:"Clear All Recent Projects",vsRecentClearAllConfirm:"Clear all recent project records? This cannot be undone.",vsRecentCleared:"Recent projects cleared",vsRecentForgetTitle:"Remove from recent projects",vsRecentForgetConfirm:'Remove "{name}" from recent projects? This cannot be undone.',vsRecentForgot:"Removed {name}",vsRemoveProject:"Remove from Project",vsRemoveProjectTitle:"Remove from Project",vsRemoveProjectConfirm:'Remove "{name}" from projects? This removes it from recent projects and closes its file tree (unsaved changes will be lost).',vsProjectRemoved:"Removed from project",vsProjectGone:"Project folder no longer exists; removed from recent projects",vsGitHistory:"History",vsGitExpand:"Show commit history",vsGitCollapse:"Collapse commit history",vsGitRefresh:"Refresh history",vsGitFiles:"Changed files",vsGitFileDiff:"Open this change in a new tab",vsQuickOpenPlaceholder:"Search files by name (Ctrl+P)",vsLeftTabFiles:"Files",vsLeftTabSearch:"Search",vsLeftTabGit:"Version Control",vsGitNoRepo:"This folder is not a Git / SVN repository",vsUnfoldEditor:"Show editor",vsFoldEditor:"Hide editor",vsSearchNeedsProject:"Open a project folder first to use search",vsMenuRecent:"Open Recent",vsMenuExtensions:"Extensions",vsEmptyTitle:"Open a folder to start editing",vsGrepPlaceholder:"Search in files (Enter to run)",vsGrepScopePlaceholder:"Search only in folder, e.g. src/components",vsGrepScopeTitle:"Search scope: empty = whole project; enter a project subfolder path to narrow the search",vsGrepCase:"Match case",vsGrepRegex:"Use regex",vsGrepSummary:"{n} results in {files} files",vsGrepTruncated:"Too many results, truncated",vsGrepNoResult:"No results found",vsGrepOpenAt:"Open and go to line {ln}",vsSearchTitle:"Search",vsGrepWholeWord:"Match whole word",vsGrepReplacePlaceholder:"Replace",vsReplaceAll:"Replace All",vsReplacePreserveCase:"Preserve case",vsReplaceConfirm:"This will replace {n} occurrences of “{q}” with “{r}” across {files} file(s), rewriting files on disk with no undo. Continue?",vsReplaceDone:"Replaced {n} occurrence(s) in {files} file(s)",vsReplaceNone:"Nothing to replace",vsReplaceRemoteUnsupported:"Cross-file replace is not supported on remote (ssh) roots",vsFilesToInclude:"files to include",vsFilesToIncludePlaceholder:"files to search, e.g. *.ts, src/**/README.md",vsFilesToIncludeTitle:"Only search/replace in files matching these globs (comma-separated, relative to project root). Empty = all.",vsFilesToExclude:"files to exclude",vsFilesToExcludePlaceholder:"files or folders to skip, e.g. **/node_modules, !*.min.js",vsFilesToExcludeTitle:"Skip files/folders matching these globs (comma-separated, relative to project root).",vsClearAllResults:"Clear All Results",vsRefreshResults:"Search Again",vsToggleReplace:"Show / Hide Replace",vsViewModeList:"List",vsViewModeTree:"Tree",vsViewModeSwitchTitle:"Switch between list and tree view",vsSearchIndexing:"Indexing…",vsSearchNoResult:"No matching files",vsSearchTruncated:"Lots of matches — showing the first few, refine your keywords",vsSaveAll:"Save All",vsSavedAs:"Saved as {path}",vsOverwriteMsg:"{path} already exists. Overwrite it?",vsNoDirty:"No changes to save",vsAllSaved:"Saved {n} file(s)",vsConflictTitle:"File Changed on Disk",vsConflictMsg:"{name} has changed on disk since it was opened. Overwrite it with your version?",vsConflictMsgReload:"Discard your local changes to {name} and reload from disk?",vsConflictBadge:"Changed on disk",vsReloadedExternal:"{name} changed on disk and has been reloaded",vsSwitchLoseMsg:"{n} file(s) have unsaved changes. Switching projects will discard them. Continue?",vsReopenLoseMsg:"Reopening with another encoding will discard unsaved changes. Continue?",vsEncodingSwitched:"Reopened as {enc}",vsBinaryHint:"This is a binary file and cannot be edited as text",vsNewWindow:"New Editor Window",vsFloatWindow:"Float as Separate Window",vsNewTerminal:"New Terminal",vsReplacedOldest:"Editor window limit (8) reached: the earliest window was replaced",vsNewWindowLimit:"Could not open a new editor window. Please try again.",vsOpenExternal:"Open with system app",vsNoOpenFile:"No open files",vsTabClose:"Close",vsTabCloseSave:"Save and Close",vsTabCloseOthers:"Close Others",vsTabCloseRight:"Close Tabs to the Right",vsTabCloseAll:"Close All",terminalRestore:"Restore terminal",vsNewFile:"New File",vsNewFolder:"New Folder",vsNewFileName:"File name",vsNewFolderName:"Folder name",vsRename:"Rename",vsRenameName:"New name",vsDelete:"Delete",vsDeleteConfirm:"Delete",vsRefresh:"Refresh",vsCollapseAll:"Collapse All",vsExpandAll:"Expand All",vsExpandAllLimited:"Many folders — expanded the first {n} (expanding further would issue too many requests)",vsPickFolderTitle:"Pick Project Folder",vsComputer:"My Computer",vsUp:"Up",vsEmptyDir:"This folder is empty",vsPickInput:"Use this path",vsCancel:"Cancel",vsPickConfirm:"Select This Folder",vsNewFolderBtn:"New Folder",vsPickEnterHint:"Double-click a folder to enter; single click selects it; “Select This Folder” picks the highlighted folder (or the current one)",menuCopyRelPath:"Copy relative path",menuCopyAbsPath:"Copy absolute path",vsAddToSession:"Add to Session",vsAddToSessionOk:"Added to the session input",vsAddToSessionFail:"Open a conversation input first",goUp:"Go Up",goBack:"Back",goForward:"Forward",refreshList:"Refresh resource list",noFolder:"No folder open",goSessionDir:"Go to current session folder",closeTab:"Close",clearSearch:"Clear search",cancel:"Cancel",confirmOk:"OK",deleteTitle:"Confirm delete",searchScopeIn:"In scope: ",myComputer:"My Computer",navHome:"Home",navGallery:"Gallery",navThisPc:"This PC",navQuickAccess:"Quick access",externalInjection:"External injections",driveLabel:"Local Disk ({drive}:)",toastClose:"Close notification",thisPcDevices:"Devices and drives",driveCapacity:"{free} free of {total}",driveTotal:"Total size",driveFree:"Free space",driveFs:"File system",driveTypeFixed:"Local Disk",driveTypeRemovable:"Removable Disk",emptyDrives:"(No drives detected)",navExpand:"Expand",navCollapse:"Collapse",favoritePin:"Pinned to Quick access",desktopEntry:"Desktop",downloadEntry:"Downloads",documentEntry:"Documents",pictureEntry:"Pictures",musicEntry:"Music",videoEntry:"Videos",workspaceEntry:"Workspace",emptyDir:"(empty)",colName:"Name",colSize:"Size",colType:"Type",colModified:"Date modified",typeFolder:"Folder",typeFile:"File",renameEntry:"Rename:",confirmDelete:'Delete "{name}"?',brokenLink:"Broken symlink",save:"Save",menuEdit:"Edit",txtEditorTitle:"Edit Text · {name}",txtLoading:"Loading…",txtEditorSub:"Text editor",txtUnsaved:"Unsaved changes",txtReadError:"Failed to read: {msg}",txtDirty:"Unsaved",txtReadonly:"Read-only (outside workspace)",txtPlaceholder:"Type text here…",txtChars:"chars",txtUnsavedTitle:"Unsaved changes",txtUnsavedMsg:"This file has unsaved changes. Close anyway?",txtSaved:"Saved",download:"Download",menuDownload:"Download",menuOpenTerminal:"Open in Terminal",menuSubagent:"Process with Sub-agent",menuNewSubagent:"New Sub-agent Chat",subagentAsk:"What should the sub-agent do?",subagentAskPlaceholder:"Describe the task (optional; continue in the sub-agent session)",subagentSpawned:"Opened in the official sub-agent session",subagentFailed:"Failed to start sub-agent",statusDrivesCount:"{count} drive(s)",statusLoading:"Loading…",statusSearching:"Searching…",statusTasks:"Background tasks",statusTasksRunning:"{count} running task(s)",statusTermRestore:"Click to restore the terminal window",statusItemsCount:"{count} items",searchTitle:"Search Files & Content",searchPlaceholder:"Enter keywords…",search:"Search",searching:"Searching…",searchCase:"Match case",searchRegex:"Regular expression match",searchIdle:"Type keywords in the top search box to match file names and content live.",resultsCount:"{count} result(s)",resultsSuffixTruncated:" (truncated)",hitTitle:"Right-click to locate in explorer \\ left-click to open",matchContent:"content",searchReplaceAll:"Replace All",searchReplaceTitle:"Confirm batch replace",searchReplaceConfirm:"Replace {count} match(es) across {files} file(s)? This cannot be undone.",searchReplaceBusy:"Replacing…",searchReplaceDone:"Replaced in {files} file(s) ({count} match(es))",openFolderFirst:"Open a folder first",dirCreated:"Directory created",fileCreated:"File created",renamed:"Renamed",deleted:"Deleted",workspaceOutside:"Operation denied: only allowed for files/folders inside the workspace",errForbidden:"Forbidden: no permission or denied (403)",errNotFound:"File or directory not found (404)",errNoRoot:"No workspace root set — open a folder first (409)",errTooLarge:"Payload too large, exceeds allowed limit (413)",errServer:"Server error, please retry later (500)",errNetwork:"Network request failed, check your host connection",menuOpen:"Open",menuOpenExternal:"Open with default app",menuOpenInEditor:"Open in File Editor",menuCut:"Cut",menuCopy:"Copy",menuRename:"Rename",menuDelete:"Delete",menuCopyPath:"Copy full path",menuProperties:"Properties",menuCutDone:"Cut to clipboard",menuCopyDone:"Copied to clipboard",menuOpened:"Opened with system default app",menuPathCopied:"Path copied",menuPathCopyFail:"Failed to copy path",menuRefresh:"Refresh",menuView:"View",menuSort:"Sort by",expShowNav:"Show navigation",menuPaste:"Paste",menuUpload:"Upload Files",uploaded:"Uploaded {count} file(s)",uploadFailed:"{count} file(s) failed to upload",menuNew:"New",menuNewFolder:"Folder",menuNewFile:"Text Document",viewHuge:"Extra large icons",sshHosts:"SSH Hosts",sshAddHost:"Add Host",sshCancel:"Cancel",sshName:"Display name",sshAddr:"Address (user @ host : port)",sshUser:"Username",sshHostAddr:"Host address",sshAuth:"Auth method",sshAuthPassword:"Password auth",sshAuthKey:"Private key auth",sshPassword:"SSH password",sshKeyPath:"Private key path (supports ~)",sshSaveAdd:"Add",sshTest:"Test",sshTestConn:"Test",sshDelete:"Delete",sshDeleteConfirm:"Click again to confirm",sshTestOk:"SSH connection OK",sshTestFail:"SSH connection failed",sshRequired:"Host address and username are required",sshAddSuccess:"Host added",sshNewHost:"Add SSH Host",sshEdit:"Edit",sshEditTitle:"Edit SSH Host",sshHostCaption:"Connect a remote server for file browsing and terminal",sshUpdateSuccess:"Host updated",sshSaveEdit:"Save Changes",sshKeepSecret:"(leave blank to keep existing password)",sshNoHosts:"No hosts yet — click “Add Host” to begin",accTitle:"Accounts",accCaption:"Manage Git / SVN credentials — injected automatically when running commands",accListTitle:"Saved accounts",accAdd:"Add account",accNewTitle:"Add account",accEditTitle:"Edit account",accEdit:"Edit",accKind:"Type",accKindGit:"Git",accKindSvn:"SVN",accName:"Display name",accHost:"Host",accHostPlaceholder:"e.g. github.com or 113.57.110.41:804",accUrl:"Repository URL (optional)",accUrlPlaceholder:"https://github.com/owner/repo.git",accUrlHint:"Leave blank to apply to every repository on this host; fill it in to match by URL prefix (multiple accounts per host). Test & Apply need it.",accUsername:"Username",accSecret:"Password / access token",accSecretKind:"Credential type",accSecretPassword:"Password",accSecretToken:"Access token",accKeepSecret:"(leave blank to keep the saved secret)",accNote:"Note",accSave:"Save",accCancel:"Cancel",accDelete:"Delete",accDeleteConfirm:"Click again to confirm",accTest:"Test",accTestOk:"Connection OK",accTestFail:"Connection failed",accApply:"Apply to system",accApplyOk:"Applied to system",accApplyHint:"Write the credential into the system store so the CLI and other GUI tools are prompted no more.",accSaved:"Account saved",accDeleted:"Account deleted",accRequired:"Host and username are required",accSecretRequired:"Password or access token is required",accEmpty:"No accounts yet — click “Add account” to begin",accHasSecret:"Secret saved",accNoSecret:"No secret saved",accAllRepos:"all repositories on this host",accEffective:"This repo will use",accEffectiveNone:"No matching account for this repo (falls back to system credentials / svn cache)",accMatchHint:"Matched by host or repository URL prefix; system credentials are used when nothing matches.",accCopyIdent:"Copy account id",accUseCurrent:"Fill from current repo",accBack:"Back to list",accPick:"Pick an account on the left, or click “Add account”",accTip:"Credentials live only in this plugin's local config and are never sent out; the secret is never echoed — leave it blank to keep the current one.",sshStatusOnline:"Connected",sshStatusOffline:"Disconnected",sshStatusChecking:"Checking…",sshStatusUnknown:"Not checked",remoteNoExternal:"Remote files cannot be opened with local programs",remoteNoArchive:"Compress / extract is not supported on remote directories yet",remoteNoTerminal:"Remote host config not found — started the terminal in a local directory (add the SSH host in Settings first)",remoteCachedHint:"Remote file downloaded to a local temp file and opened (edits are not written back)",sshNavGroup:"SSH Remote",sshEmpty:"No hosts yet — right-click here to add one, or use “New ▾”",viewLarge:"Large icons",viewMedium:"Medium icons",viewSmall:"Small icons",viewList:"List",viewDetails:"Details",viewContent:"Content",viewTiles:"Tiles",showExtensions:"File name extensions",cmdPreview:"Preview",sortName:"Name",sortModified:"Date modified",sortType:"Type",sortSize:"Size",moved:"Moved",copied:"Copied",createdFolder:"Folder created",createdFile:"File created",newFolderName:"New Folder",newFileName:"New Text Document",propName:"Name",propPath:"Path",propKind:"Type",propSize:"Size",propModified:"Date modified",settings:"Settings",settingsSubtitle:"Personalize the workbench look & behavior",retry:"Retry",taskSrcMissing:"Source no longer exists (it may have been moved or deleted); list refreshed: {name}",menuMore:"More",settingsGroupFiles:"Files",settingsGroupAppearance:"Appearance",autoSave:"Auto save (write 1s after edits pause)",vsFindPlaceholder:"Find",vsReplacePlaceholder:"Replace with",vsFindNext:"Next (Enter)",vsFindPrev:"Previous (Shift+Enter)",vsFindReplace:"Replace (Enter)",vsFindReplaceAll:"Replace All",vsFindToggleReplace:"Toggle replace",vsFindClose:"Close (Esc)",vsFindNoMatch:"No results",vsFindWord:"Whole word",vsMenuLocalDiff:"View Local Changes",vsLocalDiffTitle:"Unsaved Changes",vsLocalDiffTooBig:"Changes too large to diff",vsMultiCursorHint:"Tip: Alt+Click adds more cursors",vsActHide:'Hide "{name}"',vsActBarBottom:"Move Activity Bar to Bottom",vsActBarTop:"Move Activity Bar to Top",vsSideRight:"Move Side Bar to Right",vsSideLeft:"Move Side Bar to Left",vsMinimap:"Editor Thumbnail",vsCloseSave:"Save and Close",vsCloseDiscard:"Close without Saving",vsCloseSaveAll:"Save All and Close",vsCloseDiscardAll:"Close All without Saving",showHidden:"Show hidden files",allowOutsideRoot:"Operate on files outside the workspace (root toggle)",defaultView:"Default view",themeMode:"Theme",themeAuto:"Follow system",themeDark:"Dark",themeLight:"Light",accentColor:"Accent color",accentReset:"Reset",fontFamily:"Font",fontDefault:"Default",fontOptionYahei:"Microsoft YaHei",fontOptionConsolas:"Consolas (monospace)",fontOptionCourier:"Courier New (monospace)",fontOptionGeorgia:"Georgia (serif)",fontSize:"Font size",fontSizeSm:"Small",fontSizeMd:"Medium",fontSizeLg:"Large",fontSizeXl:"Extra large",shortcutHelp:"Keyboard Shortcuts",shortcutHint:"Press ? anytime to show, Esc to close",shortcutGlobal:"Global",shortcutFileList:"File List",shGlobalHelp:"Show shortcut help",shListSelectAll:"Select all",shListCopy:"Copy",shListCut:"Cut",shListPaste:"Paste",shListFilter:"Focus filter box",shListNewFolder:"New folder",shListDelete:"Delete (with confirm)",shListRename:"Rename",shListRefresh:"Refresh",shListOpen:"Open file / enter folder",shListMove:"Move selection",shListUp:"Go to parent folder",shListBack:"Browse back",shListForward:"Browse forward",undo:"Undo",findReplacePlaceholder:"Replace with…",favorites:"Favorites",favoriteAdd:"Favorites",favoriteRemove:"Remove from favorites",favoriteAdded:"Added to favorites",favoriteRemoved:"Removed from favorites",emptyFavorites:"(no favorites)",menuCompress:"Compress to .zip",compressed:"Compressed",menuExtract:"Extract to current folder",extracted:"Extracted {count} file(s)",extractFailed:"Extraction failed",selectedCount:"{count} item(s) selected",menuMultiDelete:"Delete selected ({count})",menuMultiCut:"Cut selected",menuMultiCopy:"Copy selected",menuMultiCompress:"Compress selected",filterPlaceholder:"Filter this folder…",filterEmpty:"(no match)",taskFabTitle:"Background tasks",taskPanelTitle:"Background tasks",taskRunning:"Running",taskHistory:"History",taskClearFinished:"Clear finished",taskClearAll:"Clear all",taskEmpty:"No tasks",taskViewLog:"View log",taskLogTitle:"Task log",taskClose:"Close",taskFieldTarget:"Target",taskStatusRunning:"Running",taskStatusDone:"Done",taskStatusError:"Failed",taskFieldFile:"File",taskStartTime:"Start",taskEndTime:"End",taskTotalSpent:"Total time",taskStepSpent:"Spent",taskRunningLive:"Running",taskFieldType:"Type",taskMetaFiles:"{count} files · {size}",taskArchive:"Archive",taskArchiveOpen:"View Archives",taskArchiveTitle:"Task Archives",taskArchiveNone:"No archives",taskArchiveRecords:"{count} records",taskUploading:"Upload file",taskCompressing:"Compress",taskExtracting:"Extract",taskCopying:"Copy",taskMoving:"Move",taskDeleting:"Delete",taskRenaming:"Rename",gitMenu:"Git",gitAdd:"Stage (git add)",gitCommit:"Commit (git commit)",gitCommitTitle:"Git commit",gitCommitPlaceholder:"Enter commit message…",gitCommitted:"Committed",gitAdded:"Staged",gitDiscard:"Discard changes",gitDiscardTitle:"Confirm discard",gitDiscardMsg:'Discard worktree changes of "{name}" (git checkout --)?',gitDiscarded:"Discarded",gitDiff:"View changes",gitDiffTitle:"Git changes",gitDiffEmpty:"(no changes available)",gitDiffClose:"Close",gitBadgeUntracked:"Untracked new file",gitBadgeAdded:"Newly staged",gitBadgeModified:"Modified",gitBadgeDeleted:"Deleted",gitNotRepo:"Not in a git repository",gitNoChanges:"Nothing staged, nothing to commit",gitLoading:"Loading…",gitCommitFiles:"Committing {n} file(s):",gitCommitConfirm:"Commit",gitConfig:"Configure identity",gitConfigTitle:"Git identity",gitConfigName:"Username (user.name)",gitConfigNamePlaceholder:"e.g. yourname",gitConfigEmail:"Email (user.email)",gitConfigEmailPlaceholder:"e.g. you@example.com",gitConfigSave:"Save",gitConfigSaved:"Git global identity saved",gitPanel:"Open Git Panel",gitIgnore:"Ignore (add to .gitignore)",gitIgnored:"Ignored",gitPanelTitle:"Git Manager",gitFetch:"Fetch",gitPull:"Pull",gitPush:"Push",gitLoadMore:"Load more",gitDiffTruncated:"Diff too large — showing the first 5000 lines (open in the editor for the full content)",gitCopyName:"Copy name",gitCopyUrl:"Copy URL",gitCopyMsg:"Copy message",gitCloneHere:"Clone repository…",gitStatusColon:"Branch: {branch}",gitLocalRepo:"Local repo: ",gitTabStatus:"Changes",gitTabLog:"Log",gitTabBranch:"Branches",gitTabStash:"Stash",gitTabCli:"Command",gitClean:"Working tree clean, nothing to commit",gitAddShort:"Stage",gitUnstage:"Unstage",gitUnstaged:"Unstaged",gitStageAll:"Stage All",gitGroupStaged:"Staged changes",gitGroupUnstaged:"Changes",gitGroupUntracked:"Untracked",gitLogEmpty:"(no commits yet)",gitBranchNew:"New branch name",gitCheckout:"Checkout",gitDelete:"Delete",gitBranchCreated:"Branch {name} created and checked out",gitBranchDeleteMsg:"Delete branch {name}?",gitStashPlaceholder:"Stash message (optional)",gitStashCreate:"Create Stash",gitStashEmpty:"(no stashes)",gitStashApply:"Apply",gitStashPop:"Pop",gitStashDrop:"Drop",gitStashClear:"Clear Stash",gitStashCreated:"Stash created",gitStashApplied:"Stash applied",gitStashPopped:"Stash popped",gitStashDropped:"Stash dropped",gitStashCleared:"Stash cleared",gitStashDropMsg:"Drop stash {ref}?",gitStashClearMsg:"Clear all stashes? This cannot be undone.",gitCliPlaceholder:"Enter a git subcommand, e.g. status / log --oneline -5",gitRailChanges:"Changes",gitRailHistory:"History",gitRailBranches:"Branches",gitRailTags:"Tags",gitRailRemotes:"Remotes",gitRailStash:"Stashes",gitRailCli:"Console",gitHeadDetached:"Detached HEAD",gitNoUpstream:"No upstream branch",gitAheadBehind:"Ahead {ahead} · Behind {behind}",gitSelectFile:"Select a file on the left to view changes",gitDiffUntrackedHint:"Untracked file: stage it to see the diff against HEAD",gitCommitMsgPlaceholder:"Commit message…",gitFileHistory:"File history",gitBlame:"Blame",gitBlameAuthor:"Author",gitBlameDate:"Date",gitBlameLine:"Line",gitBlameEmpty:"(blame unavailable)",gitFileHistoryEmpty:"(no history for this file)",gitBack:"Back",gitHistoryAll:"All branches",gitHistoryCurrent:"Current branch",gitSelectCommit:"Select a commit on the left to see details",gitCommitDetail:"Commit details",gitCommitHash:"Commit",gitCommitAuthor:"Author",gitCommitDate:"Date",gitCommitParents:"Parents",gitCommitRefs:"Refs",gitCommitChangedFiles:"Changed files ({n})",gitCommitNoFiles:"(no file changes)",gitCopyHash:"Copy hash",gitCopyPath:"Copy path",gitCopied:"Copied to clipboard",gitReset:"Reset to this commit",gitResetSoft:"Soft (keep changes staged)",gitResetMixed:"Mixed (keep changes in worktree)",gitResetHard:"Hard (discard changes)",gitResetHardMsg:"Hard reset discards all worktree and staged changes. Continue?",gitResetDone:"Reset to {hash}",gitRevert:"Revert this commit",gitRevertDone:"Reverted {hash}",gitCherryPick:"Cherry-pick onto current",gitCherryPicked:"Cherry-picked {hash}",gitCheckoutCommit:"Checkout this commit",gitCheckoutCommitMsg:"This enters detached HEAD. Checkout {hash}?",gitBranchFrom:"New branch at this commit",gitBranchFromTitle:"New branch at this commit",gitBranchFromPlaceholder:"New branch name",gitBranchRename:"Rename",gitBranchRenameTitle:"Rename current branch",gitBranchRenamePlaceholder:"New branch name",gitBranchRenamed:"Renamed to {name}",gitMergeIntoCurrent:"Merge into current",gitMergeDone:"Merged {name}",gitPushBranch:"Push",gitPushed:"Pushed {name}",gitBranchCurrent:"current",gitBranchRemoteGroup:"Remote branches",gitBranchLocalGroup:"Local branches",gitBranchCreateAndSwitch:"Create & switch",gitTagNew:"New tag",gitTagNamePlaceholder:"Tag name, e.g. v1.0.0",gitTagTargetPlaceholder:"Target commit (empty = HEAD)",gitTagMessagePlaceholder:"Message (annotated tag when filled)",gitTagCreate:"Create",gitTagEmpty:"(no tags)",gitTagAnnotated:"annotated",gitView:"View",gitTagCreated:"Tag {name} created",gitTagDeleteMsg:"Delete tag {name}?",gitTagDeleted:"Deleted {name}",gitTagPushed:"Tag {name} pushed",gitTagFetchAll:"Fetch tags from remote",gitTagFetchAllDone:"Fetched tags from remote",gitTagRemoteOnly:"remote",gitTagPull:"Fetch",gitTagPulled:"Fetched tag {name}",gitTagNoRemote:"No remote repo; cannot fetch or publish tags",gitCommitViewTitle:"Commit diff",gitCommitOpenDiff:"View diff of {path}",gitReleaseBtn:"Publish release",gitReleaseTitle:"Publish release (annotated tag + push to remote)",gitReleaseName:"Tag name",gitReleaseTarget:"Based on commit (empty = HEAD)",gitReleaseMsg:"Release notes (required)",gitReleasePublish:"Create & publish",gitReleaseRequireMsg:"Release notes are required",gitReleased:"Published {name} to remote",gitReleaseGhSkip:"GitHub Release not created: {reason}",gitRefresh:"Refresh",gitTabTags:"Tags",gitTabReleases:"Releases",gitReleaseChooseTag:"Choose an existing tag",gitReleaseNotesPlaceholder:"Release notes (shown on the Release page)",gitReleaseCreateForTag:"Create Release",gitReleaseCreated:"Release created: {url}",gitReleaseLoadSkip:"Releases unavailable: {reason}",gitReleaseEmpty:"No releases yet",gitReleaseOpen:"Open",gitRemoteNamePlaceholder:"Name, e.g. origin",gitRemoteUrlPlaceholder:"URL, e.g. https://github.com/user/repo.git",gitRemoteAdd:"Add remote",gitRemoteEmpty:"(no remotes)",gitRemoteAdded:"Remote {name} added",gitRemoteRemoveMsg:"Remove remote {name}?",gitRemoteRemoved:"Remote {name} removed",gitRemoteSetUrl:"Set URL",gitRemoteUrlTitle:"Set remote URL",gitRemoteUrlSaved:"Remote URL updated",gitStashView:"View contents",gitStashNew:"Create stash",gitStashNone:"(worktree clean, nothing to stash)",gitOpRunning:"Running…",gitOpFailed:"Operation failed",svnMenu:"SVN",svnPanel:"Open SVN Manager",svnPanelTitle:"SVN Manager",svnRepo:"Working copy: ",svnUpdate:"Update",svnCommitBtn:"Commit",svnAdd:"Add",svnAdded:"Added to version control",svnIgnore:"Ignore (svn:ignore)",svnRevert:"Revert",svnCleanup:"Clean up",svnResolve:"Resolve",svnDiff:"Diff",svnBlame:"Blame",svnCheckout:"Checkout",svnFailed:"SVN command failed",svnRailChanges:"Changes",svnRailLog:"Commit log",svnNoUrl:"Repository URL unavailable",svnRunning:"Running…",svnRefresh:"Refresh",svnLoading:"Loading…",svnSelectAll:"Select all",svnModifiedCount:"Local changes ({n})",svnNoChanges:"No local changes",svnCommitPlaceholder:"Enter commit message…",svnCommitSelected:"Will commit {n} selected file(s)",svnCommitAll:"Will commit all local changes",svnOutput:"Command output",svnNoOutput:"(no output)",svnNoCli:"svn CLI not found; please install Subversion",svnDone:"SVN command finished",svnUpdateSummaryFrom:"Update complete: r{from} → r{to}, {n} item(s) changed",svnUpdateSummary:"Update complete: {n} item(s) changed, now at r{to}",svnAlreadyLatest:"Already up to date at r{rev}; nothing to update",svnLogEmpty:"No log yet",svnLogToggle:"Click to expand / collapse this commit",svnLogNoPaths:"No changed files recorded for this commit",svnLogOpenDiff:"Show this file's diff in this commit",svnDiffTitle:"Diff · ",svnBlameTitle:"Blame · ",svnCheckoutUrlPlaceholder:"Repository URL (e.g. https://svn.example.com/svn/repo)",svnCheckoutTargetPlaceholder:"Checkout into local directory",repoCloneTitle:"Clone / Checkout Repository",repoCloneKindGit:"Git",repoCloneKindSvn:"SVN",repoCloneTitleGit:"Clone Git Repository",repoCloneTitleSvn:"Checkout SVN Repository",repoCloneCaptionGit:"Clone a full copy of a remote repository to local",repoCloneCaptionSvn:"Check out a specific revision from an SVN server",repoCloneTargetGit:"Will clone into",repoCloneTargetSvn:"Will check out into",repoCloneUrl:"Repository URL",repoCloneUrlGitPlaceholder:"Repository URL (e.g. https://github.com/owner/repo.git)",repoCloneDir:"Target directory",repoCloneDirPlaceholder:"Parent directory to clone into",repoCloneBrowse:"Browse…",repoCloneName:"Subdirectory name",repoCloneNamePlaceholder:"Leave empty to infer from URL",repoCloneShallow:"Shallow clone (latest commit only)",repoCloneShallowHint:"Faster and smaller, but without history",repoCloneRevision:"Revision",repoCloneRevisionPlaceholder:"Leave empty for latest (HEAD)",repoCloneAccount:"Account",repoCloneAccountAuto:"Auto (match by URL)",repoCloneAccountNew:"New account…",repoCloneTargetEmpty:"Please fill in the repository URL and target directory",repoCloneRunningGit:"Cloning Git repository…",repoCloneRunningSvn:"Checking out SVN repository…",repoCloneElapsed:"Elapsed {s}s",repoCloneKeepOpen:"Keep this window open; you will be notified when done.",repoCloneActionGit:"Clone",repoCloneActionSvn:"Checkout",repoCloneDoneGit:"Repository cloned: {name}",repoCloneDoneSvn:"Repository checked out: {name}",menuCloneGit:"Clone Git Repository…",menuCloneSvn:"Checkout SVN Repository…",svnNotRepoTip:"Not an SVN working copy. Fill in the form above to check out a repository.",svnCheckedOut:"Repository checked out",svnStAdded:"Added",svnStModified:"Modified",svnStDeleted:"Deleted",svnStReplaced:"Replaced",svnStConflicted:"Conflicted",svnStMissing:"Missing",svnStObstructed:"Obstructed",svnStUnversioned:"Unversioned",svnStIgnored:"Ignored",svnStLocked:"Locked",saveConfig:"Save",recycleBin:"Recycle Bin",recycleRestore:"Restore",recycleDelete:"Delete permanently",recycleEmpty:"Empty Recycle Bin",recycleEmptyConfirm:"Empty the Recycle Bin? This cannot be undone.",recycleDeleteConfirm:'Permanently delete "{name}"? This cannot be undone.',recycleDeleteConfirmMulti:"Permanently delete the {count} selected items? This cannot be undone.",recycleEmptying:"Emptying Recycle Bin…",recycleEmptyProgress:"Emptying Recycle Bin: {count} item(s) left",recycleEmptyDone:"Recycle Bin emptied",recycleEmptyList:"The Recycle Bin is empty",recycleRestored:"Restored to original location",recycledDeleted:"Permanently deleted",terminal:"Terminal",terminalTitle:"Terminal",terminalMinimize:"Minimize to task bar",terminalCloseTitle:"Close terminal",terminalClose:"Close",terminalNew:"New terminal",terminalShellSwitch:"Switch default shell (cmd / powershell)",terminalAdmin:"Administrator",terminalAdminNormal:"Standard",terminalAdminOn:"Running as administrator — commands here have admin rights",terminalAdminOff:"Standard privileges — commands here cannot change system-level settings",terminalAdminHint:'Launch dsh web as administrator (right-click the launcher → "Run as administrator") so every terminal in the panel gets admin rights — the shell inherits the host process token.',terminalClear:"Clear screen",terminalResizeTitle:"Drag to resize terminal",terminalDockDragTitle:"Click to expand · drag to move · right-click for menu",terminalDockSessions:"Minimized terminals",terminalDockCloseAll:"Close all",terminalTab:"{n}",scrollLeft:"Scroll left",scrollRight:"Scroll right",termFontSmaller:"Smaller font",termFontLarger:"Larger font",termInputFailed:"Terminal input failed: {msg}",termSshBadge:"This terminal is logged in to a remote SSH host",termSshReconnect:"Reconnect",termSshReconnectTitle:"Log in to the remote host again (auto, using the saved password / key)",termSearchPlaceholder:"Search terminal output…",termSearchCase:"Match case",termSearchPrev:"Previous",termSearchNext:"Next",termSearchClose:"Close search",termCopyHint:"Ctrl+C copy · Ctrl+V paste · Ctrl+F search",pmTitle:"Extensions",pmManage:"Manage",pmSort:"Sort",pmSortInstall:"Sort by Install Order",pmSortName:"Sort by Name",pmSortSource:"Sort by Source",pmInstalled:"Installed",pmSearchPlaceholder:"Search in Installed",pmImportFromFile:"Install from VSIX…",pmImportFromUrl:"Install from URL…",pmEnableAll:"Enable All",pmDisableAll:"Disable All",pmEnable:"Enable",pmDisable:"Disable",pmRemove:"Uninstall",pmMoreActions:"More Actions",pmPull:"Fetch",pmPulling:"…",pmUrlPlaceholder:"https://example.com/plugin.js",srcBuiltin:"Built-in",srcFile:"Local",srcUrl:"URL",pmEmptyWithQuery:"No extensions match “{q}”<br>Try another keyword, or install via the “···” menu",pmEmptyNoPlugins:"No extensions yet<br>Install one from a local file or URL via the “···” menu",pmImportFailed:"Failed to import {name}: {msg}",pmUrlImported:"Installed and enabled from URL",pmUrlImportFailed:"URL import failed: {msg}",pmNeedsProject:"Enabled · opens a project folder to show in the sidebar",vsExtNeedProject:"{n} extension(s) enabled — open a project folder to show them in the sidebar",pmCheckEmpty:"File is empty.",pmCheckNotPlugin:"Not a plugin file: missing __ModuleLoader__ registration or activityBar calls.",pmCheckNeedsHost:"This plugin requires host API v{need}; this workbench provides v{have}. Upgrade and retry.",pmCheckNoContrib:"The plugin registered no contribution points and was rolled back. Check it against this workbench API.",pmRestoreFailed:"Failed to restore plugin {name}: {msg}",pmEnableFailed:"Failed to enable {name}: {msg}"};function sf(t,e){return t===void 0?"":e?t.replace(/\{([^}]+)\}/g,(n,a)=>e[a]!==void 0?String(e[a]):`{${a}}`):t}function of(t,e){return(t.toLowerCase().startsWith("zh")?nf:Vr)[e]??Vr[e]}function Yl(){return typeof window<"u"?window.__DSH_FILE_WORKBENCH__?.locale:void 0}function Yc(){const t=Yl()?.getSnapshot()?.active;return t||(typeof navigator<"u"&&navigator.language?navigator.language:"en")}const Us=g(Yc());if(typeof window<"u"){const t=Yl();t&&typeof t.subscribe=="function"&&t.subscribe(()=>{Us.value=Yc()})}function Jc(t,e,n){return sf(of(t,e),n)}function Mt(){const t=g(Us.value.toLowerCase().startsWith("zh"));if(typeof window<"u"){const e=Yl();e&&typeof e.subscribe=="function"&&e.subscribe(()=>{t.value=Us.value.toLowerCase().startsWith("zh")})}return{locale:Or(Us),isZh:Or(t),t:(e,n)=>Jc(Us.value,e,n)}}function h(t,e){return Jc(Us.value,t,e)}function Jl(){return Us.value.toLowerCase().startsWith("zh")}const Qc={home:'<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',up:'<line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 11 12 4 19 11"/>',compass:'<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',folder:'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',folderOpen:'<path d="M6 14l1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"/>',search:'<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',chat:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',bot:'<rect x="4" y="9" width="16" height="11" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M10 6v3"/><line x1="8" y1="14" x2="9" y2="14"/><line x1="15" y1="14" x2="16" y2="14"/><line x1="12" y1="14.5" x2="12" y2="18"/>',gear:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>',terminal:'<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>',sun:'<circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/><line x1="4.5" y1="4.5" x2="6.5" y2="6.5"/><line x1="17.5" y1="17.5" x2="19.5" y2="19.5"/><line x1="4.5" y1="19.5" x2="6.5" y2="17.5"/><line x1="17.5" y1="6.5" x2="19.5" y2="4.5"/>',moon:'<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',refresh:'<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>',star:'<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',close:'<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',file:'<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/>',fileText:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',video:'<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>',music:'<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',archive:'<polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/>',grid:'<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',viewList:'<path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/>',viewDetails:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 9v12"/>',code:'<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',trash:'<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',edit:'<path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z"/><path d="M15 5l4 4"/>',cut:'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="8.12" y1="8.12" x2="15.88" y2="15.88"/><line x1="15.88" y1="8.12" x2="8.12" y2="15.88"/>',copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>',paste:'<path d="M6 9V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4"/><rect x="4" y="7" width="16" height="14" rx="2"/><path d="M9 12h6"/><path d="M9 16h6"/>',eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',eyeOff:'<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>',undo:'<path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-15-6.7L3 13"/>',redo:'<path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 15-6.7L21 13"/>',print:'<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',pin:'<path d="M12 17v5"/><path d="M9 3h6l1 6a2 2 0 0 0 2 2h1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2h1a2 2 0 0 0 2-2z"/>',globe:'<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/>',sparkle:'<path d="M12 3l1.9 4.6 4.6 1.9-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9z"/><circle cx="18.5" cy="5.5" r="1"/>',bug:'<rect x="8" y="6" width="8" height="14" rx="4"/><path d="M19 7l-3 2M5 7l3 2M19 17l-3-2M5 17l3-2M3 12h4M17 12h4"/><path d="M12 6V3"/>',sync:'<path d="M21 2v6h-6"/><path d="M3 22v-6h6"/><path d="M21 8a9 9 0 0 0-14.14-5.86L3 5.96"/><path d="M3 16a9 9 0 0 0 14.14 5.86L21 18.04"/>',arrowRight:'<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',arrowLeft:'<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 5 5 12 12 19"/>',warning:'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',chevronLeft:'<polyline points="15 18 9 12 15 6"/>',chevronRight:'<polyline points="9 18 15 12 9 6"/>',chevronsLeft:'<polyline points="11 17 6 12 11 7"/><polyline points="18 17 13 12 18 7"/>',chevronsRight:'<polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/>',chevronUp:'<polyline points="18 15 12 9 6 15"/>',chevronDown:'<polyline points="6 9 12 15 18 9"/>',chevronsUp:'<polyline points="17 11 12 6 7 11"/><polyline points="17 18 12 13 7 18"/>',chevronsDown:'<polyline points="7 6 12 11 17 6"/><polyline points="7 13 12 18 17 13"/>',external:'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>',fileOut:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M11 15c0-4.5-2.5-7-7-7"/><polyline points="7 5 4 8 7 11"/>',info:'<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',monitor:'<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',sort:'<path d="M3 6h18"/><path d="M6 12h12"/><path d="M9 18h6"/>',message:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',brain:'<path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z"/>',paperclip:'<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/>',check:'<polyline points="20 6 9 17 4 12"/>',save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>',plus:'<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',panellayout:'<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="14" y1="3" x2="14" y2="11"/><line x1="14" y1="15" x2="14" y2="21"/>',hardDrive:'<line x1="22" y1="12" x2="2" y2="12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" y1="16" x2="6.01" y2="16"/><line x1="10" y1="16" x2="10.01" y2="16"/>',git:'<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',tasks:'<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>',clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',activity:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',float:'<path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/><circle cx="9" cy="9" r="2"/><path d="M4 14h6"/>',dock:'<path d="M12 17v5"/><path d="M14 9V4h4V2H6v2h4v5l-2 2v1h8v-1z"/><path d="M17 5h3"/>',fileWord:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M8 17l2-7 2 4 2-4 2 7"/>',fileExcel:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 12l6 6M15 12l-6 6"/>',merge:'<circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/>',tag:'<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>',stash:'<path d="M21 8v13H3V8"/><path d="M1 3h22v5H1z"/><line x1="10" y1="12" x2="14" y2="12"/>',commit:'<circle cx="12" cy="12" r="4"/><line x1="1.05" y1="12" x2="7" y2="12"/><line x1="17.01" y1="12" x2="22.96" y2="12"/>',svn:'<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h10"/><circle cx="19" cy="17" r="2"/>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',mail:'<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',inbox:'<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',send:'<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',bookmark:'<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',unlock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>',key:'<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>',heart:'<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',flag:'<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>',bell:'<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',layers:'<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',database:'<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>',server:'<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>',cloud:'<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>',cloudUpload:'<polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>',cloudDownload:'<polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>',palette:'<circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.436-.652-.436-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.504 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>',pieChart:'<path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',barChart:'<line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>',trendingUp:'<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',trendingDown:'<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/>',box:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',package:'<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',rocket:'<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',target:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',crosshair:'<circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/>',sliders:'<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>',filter:'<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',zap:'<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',flashlight:'<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/><path d="M6.39 15.5 4 17v3h16v-3l-2.39-1.5"/>',map:'<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>',landmark:'<line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/>',wifi:'<path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>',battery:'<rect x="1" y="6" width="18" height="12" rx="2"/><line x1="23" y1="13" x2="23" y2="11"/>',cpu:'<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>',creditCard:'<rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>',gift:'<polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>',award:'<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>',medal:'<circle cx="12" cy="15" r="6"/><path d="M12 12V2l4 4-4 4"/><path d="M8 6l4 6"/>',thumbsUp:'<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>',smile:'<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>',mic:'<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>',camera:'<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',headphones:'<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',play:'<polygon points="5 3 19 12 5 21 5 3"/>',pause:'<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>',stop:'<rect x="5" y="5" width="14" height="14" rx="2"/>',skipForward:'<polygon points="5 4 15 12 5 20 5 4"/><line x1="19" y1="5" x2="19" y2="19"/>',skipBack:'<polygon points="19 20 9 12 19 4 19 20"/><line x1="5" y1="19" x2="5" y2="5"/>',volume:'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>',volumeHigh:'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>',volumeOff:'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>',maximize:'<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>',minimize:'<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/>',move:'<polyline points="5 9 2 12 5 15"/><polyline points="9 5 12 2 15 5"/><polyline points="15 19 12 22 9 19"/><polyline points="19 9 22 12 19 15"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/>',crop:'<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"/><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"/>',wand:'<path d="M15 4V2m0 20v-2M8.5 8.5 7 7m12 12-1.5-1.5M4 15H2m20 0h-2M4 4l1.5 1.5M18.5 18.5 20 20"/><path d="M14 10 4 20l-2-2L12 8z"/>',anchor:'<circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/>',feather:'<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/>',lifeBuoy:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"/><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"/><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"/><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"/>',rss:'<path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>',command:'<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>',function:'<path d="M9 11 6 21M15 3a3 3 0 0 0-3 3v1M18 9h-8m2 4c0 3-1 5-3 6"/>',binary:'<rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/>',flow:'<rect x="2" y="3" width="6" height="6" rx="1"/><rect x="16" y="15" width="6" height="6" rx="1"/><path d="M8 6h6a2 2 0 0 1 2 2v7"/><path d="M11 18H5a2 2 0 0 1-2-2v-1"/>',gitBranch:'<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',gitCommit:'<circle cx="12" cy="12" r="4"/><line x1="1.05" y1="12" x2="7" y2="12"/><line x1="17.01" y1="12" x2="22.96" y2="12"/>',fork:'<circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="12" cy="18" r="3"/><path d="M6 9v1a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V9"/><line x1="12" y1="13" x2="12" y2="15"/>',cube:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',puzzle:'<path d="M19.44 12.99c.72-.23 1.56.06 1.56 1.01 0 .55-.45 1-1 1h-2v2c0 .55-.45 1-1 1-.95 0-1.24.84-1.01 1.56.18.55-.06 1.43-.99 1.43-.55 0-1-.45-1-1v-2h-2c-.55 0-1-.45-1-1 0-.95-.84-1.24-1.56-1.01-.55.18-1.43-.06-1.43-.99 0-.55.45-1 1-1h2v-2c0-.55.45-1 1-1 .95 0 1.24-.84 1.01-1.56-.18-.55.06-1.43.99-1.43.55 0 1 .45 1 1v2h2c.55 0 1 .45 1 1 0 .95.84 1.24 1.56 1.01z"/>'};function Vo(t){return Object.prototype.hasOwnProperty.call(Qc,t)}const af=["width","height","innerHTML"],ne=ht({__name:"Icon",props:{name:{},size:{default:15}},setup(t){const e=t,n=B(()=>Qc[e.name]??""),a=B(()=>typeof e.size=="number"?`${e.size}px`:e.size);return(r,u)=>n.value?(l(),c("svg",{key:0,class:"fw-icon",viewBox:"0 0 24 24",width:a.value,height:a.value,fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",innerHTML:n.value},null,8,af)):N("",!0)}}),lf={class:"fw-confirm-ico","aria-hidden":"true"},rf={class:"fw-confirm-msg"},cf={key:0,class:"fw-confirm-msg"},Zc=ht({__name:"ConfirmDialog",setup(t){const{t:e}=Mt(),n=B(()=>tt.okText||e("confirmOk")),a=B(()=>tt.cancelText||e("cancel"));function r(f){f||Ao(tt.kind==="prompt"||tt.choices.length?null:!1)}function u(f){Ao(f)}function v(){tt.kind==="prompt"?Ao(tt.inputValue.trim()):Ao(!0)}function d(){Ao(tt.kind==="prompt"?null:!1)}return(f,w)=>{const b=Ts,k=Mn,O=cn;return l(),Xe(O,{"model-value":s(tt).visible,class:"fw-confirm-dialog",width:"380px","align-center":"","append-to-body":"","show-close":!0,"close-on-click-modal":!1,"close-on-press-escape":!1,"onUpdate:modelValue":r},{footer:se(()=>[s(tt).choices.length?(l(!0),c(oe,{key:0},Ae(s(tt).choices,M=>(l(),Xe(k,{key:M.id,type:M.primary?"primary":"default",onClick:A=>u(M.id)},{default:se(()=>[ue(i(M.text),1)]),_:2},1032,["type","onClick"]))),128)):(l(),c(oe,{key:1},[m(k,{onClick:d},{default:se(()=>[ue(i(a.value),1)]),_:1}),m(k,{type:"primary",onClick:v},{default:se(()=>[ue(i(n.value),1)]),_:1})],64))]),default:se(()=>[o("div",{class:te(["fw-confirm-body",{"fw-confirm-up":s(tt).kind==="confirm"}])},[s(tt).kind==="confirm"?(l(),c(oe,{key:0},[o("span",lf,[m(ne,{name:"warning",size:22})]),o("p",rf,i(s(tt).message),1)],64)):(l(),c(oe,{key:1},[s(tt).message?(l(),c("p",cf,i(s(tt).message),1)):N("",!0),s(tt).multiline?(l(),Xe(b,{key:1,modelValue:s(tt).inputValue,"onUpdate:modelValue":w[0]||(w[0]=M=>s(tt).inputValue=M),type:"textarea",rows:5,placeholder:s(tt).inputPlaceholder,onKeydown:bt(xe(v,["ctrl","prevent"]),["enter"])},null,8,["modelValue","placeholder","onKeydown"])):(l(),Xe(b,{key:2,modelValue:s(tt).inputValue,"onUpdate:modelValue":w[1]||(w[1]=M=>s(tt).inputValue=M),placeholder:s(tt).inputPlaceholder,clearable:"",onKeyup:bt(v,["enter"])},null,8,["modelValue","placeholder"]))],64))],2)]),_:1},8,["model-value"])}}}),uf={ok:3e3,info:3e3,warning:4500,error:6e3},df=5,zr="__DSH_FW_TOAST__";function va(){const t=globalThis;let e=t[zr];return e||(e={items:g([]),seq:0,app:null,el:null},t[zr]=e),e}const Ia=va().items;function ha(t,e,n){const a=va(),r=++a.seq,u=n??uf[t];for(a.items.value.push({id:r,kind:t,message:e,duration:u,remain:u,paused:!1});a.items.value.length>df;)a.items.value.shift();return r}function Ur(t){const e=va(),n=e.items.value.findIndex(a=>a.id===t);n!==-1&&e.items.value.splice(n,1)}function Y(t,e,n){ha(t,e,n)}const ps=(t,e)=>void ha("error",t,e),lo=(t,e)=>void ha("warning",t,e),rs=(t,e)=>void ha("ok",t,e),pf=3e4,ro=new Map,xi=new Map;function Ys(t,e,n=pf){const a=ro.get(t);if(a&&Date.now()-a.at<n)return Promise.resolve(a.value);const r=xi.get(t);if(r)return r;const u=e().then(v=>(ro.set(t,{at:Date.now(),value:v}),xi.delete(t),v),v=>{throw xi.delete(t),v});return xi.set(t,u),u}function ma(t=""){let e=0;if(!t)return e=ro.size,ro.clear(),e;for(const n of[...ro.keys()])n.startsWith(t)&&(ro.delete(n),e++);return e}function eu(t,e,n){const a=new URL(t,e);return a.protocol=a.protocol==="https:"?"wss:":"ws:",a.pathname=`${a.pathname.replace(/\/+$/,"")}/${n}`,a.search="",a.hash="",a.toString()}const ff={},vf="/api/dsh-file-workbench";function hf(){if(typeof window<"u"&&window.__DSH_FILE_WORKBENCH__?.apiBase)return window.__DSH_FILE_WORKBENCH__.apiBase.replace(/\/$/,"");const t=ff?.VITE_API_BASE??"";return t?t.replace(/\/$/,""):vf}const Yn=hf(),zo=gt({seq:0,pending:0}),ji=new Map;function mf(){for(const t of ji.values())t.abort();ji.clear()}class tu extends Error{constructor(){super("request aborted"),this.name="AbortRequestError"}}class Ks extends Error{constructor(e,n,a){super(e),this.status=n,this.code=a,this.name="ApiError"}}const gf=new Set(["mtime-conflict"]);function nu(t,e){switch(t){case 403:return h("errForbidden");case 404:return h("errNotFound");case 409:return h("errNoRoot");case 413:return h("errTooLarge");case 500:return h("errServer");default:return e}}function su(t){return t instanceof tu||t instanceof DOMException&&t.name==="AbortError"}async function We(t,e,n,a){const r=++zo.seq;zo.pending++;const u=new AbortController;ji.set(r,u);const v=()=>u.abort();a?.signal&&(a.signal.aborted?u.abort():a.signal.addEventListener("abort",v,{once:!0}));const d={method:t,headers:{},signal:u.signal};n!==void 0&&(d.headers={"content-type":"application/json"},d.body=JSON.stringify(n));try{let f;try{f=await fetch(`${Yn}${e}`,d)}catch(b){throw u.signal.aborted?new tu:(a?.silent||ps(h("errNetwork")),b instanceof Error?b:new Error(String(b)))}const w=await f.json().catch(()=>({ok:!1,error:"bad response"}));if(!w.ok){const b=w.error||`HTTP ${f.status}`;throw!!w.code&&gf.has(w.code)||(f.status===403&&/outside (root|workspace)/i.test(b)?a?.silent||ps(h("workspaceOutside")):a?.silent||ps(nu(f.status,b))),new Ks(b,f.status,w.code)}return w.data}finally{zo.pending--,ji.delete(r),a?.signal?.removeEventListener("abort",v)}}const Ht=t=>{const e=new URLSearchParams;for(const[a,r]of Object.entries(t))r&&e.set(a,r);const n=e.toString();return n?`?${n}`:""};function Ai(t,e){return Ys(`list:${e??""}:${t}`,()=>We("GET",`/list${Ht({key:e,path:t})}`))}function mn(t){return t.then(e=>(ma(),e))}function Ql(t){return t.then(e=>(ma("git"),e))}function Cs(t=""){return ma(t)}function yf(t){return We("GET",`/root${Ht({key:t})}`)}function Zl(t,e){return We("POST","/root",{key:e,path:t})}function il(t,e,n={}){return mn(We("POST","/save",{key:n.key,path:t,content:e,encoding:n.encoding,hasBom:n.hasBom,eol:n.eol,expectedMtime:n.expectedMtime,force:n.force}))}function wf(t,e){return Ys(`files:${e??""}:${t}`,()=>We("GET",`/files${Ht({key:e,path:t})}`))}function bf(t,e={}){return We("GET",`/search${Ht({key:e.key,q:t,path:e.path,limit:e.limit?.toString(),case:e.caseSensitive?"1":void 0,regex:e.regex?"1":void 0})}`)}function ou(t,e,n={}){return mn(We("POST","/replace",{key:n.key,scope:n.scope,q:t,replacement:e,caseSensitive:n.caseSensitive,regex:n.regex,wholeWord:n.wholeWord,preserveCase:n.preserveCase,include:n.include||void 0,exclude:n.exclude||void 0}))}function _f(t,e={}){return We("GET",`/grep${Ht({key:e.key,q:t,path:e.path,sub:e.sub||void 0,case:e.caseSensitive?"1":void 0,regex:e.regex?"1":void 0,word:e.wholeWord?"1":void 0,include:e.include||void 0,exclude:e.exclude||void 0})}`)}function Wt(t){return t.startsWith("ssh://")}function iu(t){return Ys(`mycomputer:${t??""}`,()=>We("GET",`/mycomputer${Ht({key:t})}`))}function au(){return Ys("drives",()=>We("GET","/drives"))}function kf(){return We("GET","/ssh/hosts",void 0,{silent:!0})}function xf(t){return We("POST","/ssh/add",t)}function Cf(t){return We("POST","/ssh/update",t)}function Sf(t){return We("POST","/ssh/remove",{id:t})}function al(t){return We("POST","/ssh/test",t)}function $f(t){return We("POST","/ssh/ping",{id:t},{silent:!0})}function Ef(t){return We("POST","/ssh/cache",{path:t})}function Tf(){return We("GET","/recycle-list")}function Df(){return We("GET","/recycle-count")}function Ff(t){return mn(We("POST","/recycle-restore",{fullPath:t}))}function Pf(t){return mn(We("POST","/recycle-delete",{fullPath:t}))}function Nf(){return mn(We("POST","/recycle-empty",{}))}function Rf(t,e){return We("GET",`/browse${Ht({key:e,path:t})}`)}function Af(t){return`${Yn}/download?path=${encodeURIComponent(t)}`}function Hr(t){return`${Yn}/_read-image?path=${encodeURIComponent(t)}`}function Mf(t,e,n){const a=new URLSearchParams({session:e.session,shell:e.shell});return e.cwd&&a.set("cwd",e.cwd),e.key&&a.set("key",e.key),Lf(`/exec-stream?${a.toString()}`,t,n)}function Of(t,e,n){const a=typeof location<"u"?location.href:"http://127.0.0.1/",r=eu(Yn,a,"exec-mux-ws")+(e.key?`?key=${encodeURIComponent(e.key)}`:"");return new Promise(u=>{let v;try{v=new WebSocket(r)}catch{u();return}let d=!1;const f=()=>{if(!d){d=!0;try{n?.removeEventListener("abort",w)}catch{}try{v.close()}catch{}u()}},w=()=>f();n?.addEventListener("abort",w),v.onmessage=b=>{try{t(JSON.parse(String(b.data)))}catch{}},v.onclose=f,v.onerror=()=>{}})}function Lf(t,e,n){return new Promise(a=>{const r=new EventSource(`${Yn}${t}`);let u=!1;const v=()=>{if(!u){u=!0;try{r.close()}catch{}a()}};r.onmessage=d=>{try{e(JSON.parse(d.data))}catch{}},r.onerror=v,n&&(n.aborted?v():n.addEventListener("abort",v,{once:!0}))})}function ja(t){return We("POST","/exec-open",t)}function Bf(t,e,n){return We("POST","/exec-resize",{session:t,cols:e,rows:n},{silent:!0})}function lu(t,e){return We("POST","/exec-input",{session:t,data:e},{silent:!0})}function If(t){return We("POST","/exec-kill",{session:t})}function jf(){return We("GET","/term-env")}function Vf(t,e,n,a){return We("POST","/subagent/spawn",{path:t,isDir:e,instruction:n,session:a})}function Vi(t,e){return mn(We("POST","/mkdir",{key:e,path:t}))}function zi(t,e,n){return mn(We("POST","/rename",{key:n,from:t,to:e}))}function ll(t,e){return mn(We("DELETE",`/remove${Ht({key:e,path:t})}`))}function ru(t,e){return mn(We("POST","/touch",{key:e,path:t}))}function zf(t,e,n){return mn(We("POST","/copy",{key:n,src:t,destDir:e}))}async function Uf(t,e,n){zo.pending++;try{const a=await fetch(`${Yn}/upload${Ht({dir:t,name:e.name,key:n})}`,{method:"POST",body:e}),r=await a.json().catch(()=>({ok:!1,error:"bad response"}));if(!r.ok)throw new Error(r.error||`HTTP ${a.status}`);return ma(),r.data}finally{zo.pending--}}function Ui(t){return We("GET",`/detail${Ht({path:t})}`)}async function rl(t,e){try{return await We("GET",`/detail${Ht({path:t})}`,void 0,{silent:!0}),!0}catch(n){if(n instanceof Ks&&n.status===404)return!1;throw!su(n)&&!e?.silent&&ps(n instanceof Ks?nu(n.status,n.message):h("errNetwork")),n}}async function cl(t){try{return await We("GET",`/detail${Ht({path:t})}`,void 0,{silent:!0})}catch{return null}}function ul(t,e={}){return We("GET",`/read${Ht({path:t,encoding:e.encoding,bom:e.hasBom===void 0?void 0:e.hasBom?"1":"0"})}`)}function Wr(t,e,n){return mn(We("POST","/compress",{key:n,path:t,to:e}))}function Hf(t,e,n){return mn(We("POST","/extract",{key:n,zipPath:t,destDir:e}))}function cu(t){return We("POST","/openExternal",{path:t})}function Wf(t){return Ys(`gitstatus:${t}`,()=>We("GET",`/git/status${Ht({path:t})}`))}function Gf(t){return We("GET",`/git/diff${Ht({path:t})}`)}function qf(t){return Ql(We("POST","/git/add",{path:t}))}function uu(t){return Ql(We("POST","/git/ignore",{path:t}))}function Kf(t,e){return Ql(We("POST","/git/commit",{path:t,message:e}))}function Xf(t){return mn(We("POST","/git/discard",{path:t}))}function Yo(t){return Ys(`gitpanel:${t}`,()=>We("GET",`/git/panel${Ht({path:t})}`))}function Uo(t,e){return We("POST","/git/run",{path:t,args:e})}function Yf(t,e){return mn(We("POST",t==="git"?"/git/clone":"/svn/checkout",e))}function Gr(t,e,n,a){return We("POST","/git/gh-release",{path:t,tag:e,name:n,body:a})}function Jf(t){return We("GET",`/git/gh-releases${Ht({path:t})}`)}function du(){return We("GET","/git/config")}function pu(t,e){return We("POST","/git/config",{name:t,email:e})}function fs(t){return Ys(`svninfo:${t}`,()=>We("GET",`/svn/info${Ht({path:t})}`))}function Qt(t,e){return We("POST","/svn/run",{path:t,args:e})}function Qf(){return We("GET","/accounts")}function Zf(t){return We("POST","/accounts/add",t)}function fu(t,e){return We("GET",`/accounts/match${Ht({kind:t,url:e})}`,void 0,{silent:!0})}function ev(t){return We("POST","/accounts/update",t)}function tv(t){return We("POST","/accounts/remove",{id:t})}function nv(t){return We("POST","/accounts/test",t)}function sv(t){return We("POST","/accounts/apply",{id:t})}function vu(){return We("GET","/persist")}function Js(t,e){return We("POST","/persist",{k:t,v:e})}async function ov(){const t=await We("GET","/persist?k=taskLogs");return Array.isArray(t?.taskLogs)?t.taskLogs:[]}function iv(t){return We("POST","/persist",{k:"taskLogs",v:t})}async function av(){return(await We("GET","/task-archives"))?.map??{}}function er(t){return We("POST","/task-archives",{map:t})}function Ds(){if(typeof window>"u")return null;const t=window.__DSH_FILE_WORKBENCH__?.officialTerminal;return t&&typeof t.create=="function"?t:null}function lv(){try{return Ds()?.available()??!1}catch{return!1}}const Et=g([]),Xs=g(""),cs=g(null),_n=g(null),vs=g({});function dl(t){return vs.value[t]===!0}function rv(t){vs.value[t]||(vs.value={...vs.value,[t]:!0})}function tr(t){if(!vs.value[t])return;const e={...vs.value};delete e[t],vs.value=e}function cv(){Object.keys(vs.value).length&&(vs.value={})}const An=g({}),qr=1500,uv=/\x1b\[[0-9;?]*[ -/]*[@-~]/g;function Hi(t,e){const n=e.replace(uv,"");if(!n.trim())return;let r=(An.value[t]??"")+n;r.length>qr&&(r=r.slice(r.length-qr)),An.value={...An.value,[t]:r}}function dv(t){return An.value[t]??""}function pv(t){if(An.value[t]===void 0)return;const e={...An.value};delete e[t],An.value=e}async function hu(){if(cs.value===null)try{const t=await jf();cs.value=t.elevated===!0}catch{}}let Kr=0;function fv(){return Kr+=1,Kr}const Xr=4*1024*1024;function yo(t){return t.length>Xr?t.slice(t.length-Xr):t}const wo=new Map;function Yr(t,e){e?wo.set(t,e):wo.delete(t)}let co=null,nr="",Va=null;const mu="__DSH_FW_TERM_MUX_SSE__";function vv(){const e=globalThis[mu];if(e&&typeof e.dispose=="function")try{e.dispose()}catch{}}function gu(t){const e=Et.value.find(n=>n.session===t.session);if(e){if(t.type==="output")e.output=yo(e.output+t.text),wo.get(e.id)?.(t.text),Hi(e.id,t.text);else if(t.type==="cwd")e.cwd=t.cwd;else if(t.type==="exit"){if(e.connected=!1,e.ssh){Hi(e.id,`
[ssh] session closed
`),e.output=yo(e.output+`\r
\x1B[33m[ssh] session closed — 点「重连」重新登录\x1B[0m\r
`);return}window.setTimeout(()=>void sr(e),300)}}}function yu(t){return t?.message||String(t)}async function wu(t,e){if(t.ssh){const a=t.ssh;try{const r=await ja({session:t.session,kind:"ssh",hostId:a.hostId,remote:a.remote,key:e});if(r?.kind!=="ssh")throw new Error("宿主未启用远端终端（缺少 /exec-open 的 kind 支持），请重启 dsh web");return t.sshDegraded=!1,r}catch(r){const u=yu(r);t.output=yo(t.output+`\r
\x1B[33m[ssh] 自动登录 ${a.label} 失败：${u}\x1B[0m\r
\x1B[2m[ssh] 已回退到本机 ssh 客户端，请手动输入口令；修好后可用页脚「重连」再试直连。\x1B[0m\r
`),Hi(t.id,`[ssh] auto login failed: ${u}
`),t.sshDegraded=!0,t.cwd="";const v=await ja({session:t.session,kind:"local",shell:t.shell,key:e});return t.initCmd=t.fallbackCmd,Wi(t),v}}const n=await ja({session:t.session,kind:"local",shell:t.shell,cwd:t.cwd||void 0,key:e});return Wi(t),n}async function sr(t){if(!(!Et.value.includes(t)||t.connected)){if(t.output="",An.value={...An.value,[t.id]:""},t.backend==="official"){Ds()?.close(t.id),t.connected=!0,ku(t);return}try{const e=await wu(t,nr||void 0);e?.cwd&&(t.cwd=e.cwd),t.connected=!0,bu()}catch{t.connected=!1}}}function bu(){if(co)return;vv();const t=new AbortController;co=t;const e={dispose:()=>ga()};globalThis[mu]=e;const n=async()=>{if(!t.signal.aborted){try{await Of(gu,{key:nr},t.signal)}catch{}if(t.signal.aborted){co===t&&(co=null);return}window.setTimeout(()=>void n(),500)}};n()}function ga(){co?.abort(),co=null}function hv(){Et.value.some(t=>t.connected)||ga()}function Wi(t){const e=t.initCmd;e&&(t.initCmd=void 0,window.setTimeout(()=>{t.connected&&(t.backend==="official"?Ds()?.write(t.id,`${e}\r`):lu(t.session,`${e}\r`))},800))}function Jr(t,e){const n=new AbortController;t.streamAbort=n;const a=async()=>{if(!(!t.connected||n.signal.aborted)){try{await Mf(r=>gu({...r,session:t.session}),{session:t.session,cwd:t.cwd||void 0,key:e,shell:t.shell},n.signal)}catch{}t.connected&&!n.signal.aborted?window.setTimeout(()=>void a(),500):t.connected=!1}};Wi(t),a()}let Qr=!1;function _u(t){return Et.value.find(e=>e.id===t&&e.backend==="official")}function mv(t){const e=_u(t.tag);e&&(e.output=yo(e.output+t.text),wo.get(e.id)?.(t.text),Hi(e.id,t.text))}function gv(t){const e=_u(t.tag);if(e){if(t.cwd&&t.cwd!==e.cwd&&(e.cwd=t.cwd),t.exited){e.connected=!1,window.setTimeout(()=>void sr(e),300);return}if(t.phase==="connected"&&!e.connected)e.connected=!0,Wi(e);else if(t.phase==="failed"&&t.error){const n=`\r
\x1B[33m[term] ${t.error}\x1B[0m\r
`;e.output=yo(e.output+n),wo.get(e.id)?.(n)}}}function yv(){Qr||typeof window>"u"||(Qr=!0,window.addEventListener("dshfw-ot-data",t=>mv(t.detail)),window.addEventListener("dshfw-ot-status",t=>gv(t.detail)))}async function ku(t){const e=Ds();if(!e){t.backend=void 0,t.connected=!1,Gi(t);return}yv();const n=await e.create(t.id,{cols:80,rows:24}).catch(()=>null);if(n===null){t.backend=void 0,t.connected=!1,Gi(t);return}if(!Et.value.includes(t)){e.close(t.id);return}n.cwd&&(t.cwd=n.cwd)}function Gi(t,e){if(!t.connected){if(t.connected=!0,e&&(nr=e),!t.ssh&&lv()){t.backend="official",ku(t);return}if(t.backend=void 0,Va===!1){Jr(t,e);return}bu(),wu(t,e).then(n=>{Va=!0,n?.cwd&&(t.cwd=n.cwd)}).catch(n=>{n?.status===404&&(Va=!1,Et.value.some(a=>a.connected)||ga()),Jr(t,e)})}}const wv=16,bv=512,_v=/[\r\n\x03\x04\x1a]/,us=new Map;function xu(t){let e=us.get(t);return e||(e={pending:"",timer:0,inFlight:!1},us.set(t,e)),e}function pl(t){const e=xu(t);if(e.timer&&(window.clearTimeout(e.timer),e.timer=0),!e.pending)return;const n=Et.value.find(r=>r.session===t);if(n?.backend==="official"){const r=e.pending;e.pending="",Ds()?.write(n.id,r),!e.pending&&!e.timer&&us.delete(t);return}if(e.inFlight)return;const a=e.pending;e.pending="",e.inFlight=!0,lu(t,a).catch(r=>{xv(t,r)}).finally(()=>{const r=us.get(t);r&&(r.inFlight=!1,r.pending?pl(t):r.timer||us.delete(t))})}const kv=3e3,Zr=new Map,za=new Set;function xv(t,e){const n=Et.value.find(u=>u.session===t);if(!n)return;const a=yu(e),r=Date.now();if(r-(Zr.get(t)??0)>=kv){Zr.set(t,r);const u=`\r
\x1B[31m[term] ${h("termInputFailed",{msg:a})}\x1B[0m\r
`;n.output=yo(n.output+u),wo.get(n.id)?.(u),Y("warning",h("termInputFailed",{msg:a}))}e?.status===404&&Cv(n)}async function Cv(t){if(!(za.has(t.session)||!Et.value.includes(t))){za.add(t.session);try{ya(t),await sr(t)}finally{za.delete(t.session)}}}function Sv(t,e){if(!e)return;const n=Et.value.find(r=>r.session===t);if(n&&!n.connected)return;const a=xu(t);if(a.pending+=e,_v.test(e)||a.pending.length>=bv){pl(t);return}a.timer||(a.timer=window.setTimeout(()=>pl(t),wv))}function Cu(t){if(t){const e=us.get(t);e&&e.timer&&window.clearTimeout(e.timer),us.delete(t);return}for(const[e,n]of us)n.timer&&window.clearTimeout(n.timer),us.delete(e)}function ya(t){t.connected=!1,t.backend==="official"&&Ds()?.detach(t.id),t.streamAbort?.abort(),t.streamAbort=void 0,Cu(t.session),fl.delete(t.session)}function or(t){return t.backend==="official"?(Ds()?.close(t.id),Promise.resolve()):If(t.session).catch(()=>{})}const fl=new Map;function $v(t,e,n){if(!e||!n)return;const a=`${e}x${n}`;if(fl.get(t)===a)return;fl.set(t,a);const r=Et.value.find(u=>u.session===t);if(r?.backend==="official"){Ds()?.resize(r.id,e,n);return}Bf(t,e,n).catch(()=>{})}async function ec(t,e){const n=t.backend==="official";ya(t),t.output="",An.value={...An.value,[t.id]:""},await or(t),n&&(t.backend=void 0),Gi(t,e)}function Su(t){const e=Et.value.findIndex(a=>a.id===t),n=Et.value[e];if(n&&(ya(n),or(n),Et.value.splice(e,1),pv(t),tr(t),hv(),Xs.value===t)){const a=Et.value[e]??Et.value[e-1]??Et.value[0];Xs.value=a?a.id:""}}async function Ev(){const t=Et.value.slice();Et.value=[],Xs.value="",An.value={},cv(),ga(),await Promise.all(t.map(e=>(ya(e),or(e).catch(()=>{}))))}const li=new Map;let tc=0;function Tv(t){return li.get(t)}function Dv(t,e){li.set(t,e),$u()}function Fv(t){li.delete(t)&&$u()}function $u(){Js("termWins",Object.fromEntries(li))}function Pv(t){if(!t||typeof t!="object")return;const e=t;for(const[n,a]of Object.entries(e)){if(!a||typeof a!="object")continue;const r=a;typeof r.x=="number"&&typeof r.y=="number"&&typeof r.w=="number"&&typeof r.h=="number"&&li.set(n,{x:r.x,y:r.y,w:r.w,h:r.h})}}function Nv(){return{w:680,h:460,x:Math.max(12,window.innerWidth-680-24),y:Math.max(12,window.innerHeight-460-24)}}function Rv(){tc+=1;const t=Nv(),e=tc%8*30;return{w:t.w,h:t.h,x:Math.max(12,t.x-e),y:Math.max(12,t.y-e)}}function nc(){return`t${Date.now().toString(36)}${Math.random().toString(36).slice(2,10)}`}function Av(t,e){const n={id:nc(),name:fv(),session:nc(),cwd:e?.cwd??"",shell:e?.shell??"cmd",ssh:e?.ssh,fallbackCmd:e?.fallbackCmd||void 0,output:"",connected:!1,initCmd:e?.initCmd||void 0,focusPending:e?.focus===!0};return Et.value.push(n),Xs.value=n.id,Gi(n,t),n}function sc(t){Su(t),Fv(t)}function Mv(t){const e=Et.value.find(n=>n.id===t);return e?.focusPending?(e.focusPending=!1,!0):!1}const Ho={showHidden:!0,view:"details",showExtensions:!0,sortKey:"name",asc:!0,theme:"auto",fontFamily:"default",fontSize:13,accentColor:"",allowOutsideRoot:!1,colWidths:{name:300,size:96,type:160},termShell:"cmd",termFontSize:13,txtWordWrap:!1,txtShowStatus:!0,vsGitBarH:0,autoSave:!1,vsMinimap:!0},Ue=gt({...Ho}),Eu=["huge","large","medium","small","list","details","content","tiles"];function Ov(t){if(!t||typeof t!="object")return{};const e=t,n={};typeof e.showHidden=="boolean"&&(n.showHidden=e.showHidden),typeof e.showExtensions=="boolean"&&(n.showExtensions=e.showExtensions),Eu.includes(String(e.view))&&(n.view=e.view),["name","size","type","mtime"].includes(String(e.sortKey))&&(n.sortKey=e.sortKey),typeof e.asc=="boolean"&&(n.asc=e.asc),["auto","dark","light"].includes(String(e.theme))&&(n.theme=e.theme),typeof e.fontFamily=="string"&&(n.fontFamily=e.fontFamily.trim()||"default"),typeof e.fontSize=="number"&&e.fontSize>0&&(n.fontSize=e.fontSize),typeof e.accentColor=="string"&&/^#[0-9a-fA-F]{3,8}$/.test(e.accentColor)&&(n.accentColor=e.accentColor),typeof e.allowOutsideRoot=="boolean"&&(n.allowOutsideRoot=e.allowOutsideRoot);const a=e.colWidths;if(a&&typeof a=="object"){const r=(u,v)=>typeof u=="number"&&Number.isFinite(u)&&u>=40?u:v;n.colWidths={name:r(a.name,Ho.colWidths.name),size:r(a.size,Ho.colWidths.size),type:r(a.type,Ho.colWidths.type)}}return(e.termShell==="powershell"||e.termShell==="cmd")&&(n.termShell=e.termShell),typeof e.termFontSize=="number"&&e.termFontSize>=8&&e.termFontSize<=36&&(n.termFontSize=e.termFontSize),typeof e.txtWordWrap=="boolean"&&(n.txtWordWrap=e.txtWordWrap),typeof e.txtShowStatus=="boolean"&&(n.txtShowStatus=e.txtShowStatus),typeof e.vsGitBarH=="number"&&e.vsGitBarH>=0&&(n.vsGitBarH=e.vsGitBarH),typeof e.autoSave=="boolean"&&(n.autoSave=e.autoSave),typeof e.vsMinimap=="boolean"&&(n.vsMinimap=e.vsMinimap),n}async function Lv(){const t=await vu().catch(()=>null);if(t){if(Object.assign(Ue,{...Ho,...Ov(t.prefs)}),Array.isArray(t.favorites)&&(Gs.value=t.favorites.map(String)),t.layout&&typeof t.layout=="object"){const e=t.layout,n=e.navGroups;if(n&&typeof n=="object"){const a=n;Object.assign(Un.navGroups,Tu.navGroups),typeof a.home=="boolean"&&(Un.navGroups.home=a.home),typeof a.myComputer=="boolean"&&(Un.navGroups.myComputer=a.myComputer),typeof a.favorites=="boolean"&&(Un.navGroups.favorites=a.favorites),typeof a.ssh=="boolean"&&(Un.navGroups.ssh=a.ssh)}typeof e.explorerSplit=="number"&&e.explorerSplit>.05&&e.explorerSplit<.95&&(Un.explorerSplit=e.explorerSplit)}if(t.termWin&&typeof t.termWin=="object"){const e=t.termWin;typeof e.w=="number"&&e.w>0&&e.w,typeof e.h=="number"&&e.h>0&&e.h,typeof e.x=="number"&&e.x,typeof e.y=="number"&&e.y}if(t.termWins&&typeof t.termWins=="object"&&Pv(t.termWins),t.folderViews&&typeof t.folderViews=="object"){for(const n of Object.keys(hs))delete hs[n];const e=t.folderViews;for(const[n,a]of Object.entries(e))Eu.includes(String(a))&&(hs[n]=String(a))}}}function Hn(){Js("prefs",{...Ue})}const Tu={navGroups:{home:!0,myComputer:!0,favorites:!0,ssh:!0},explorerSplit:.3},Un=gt({...Tu});function Mi(){Js("layout",{...Un})}const hs=gt({}),qi=g(Ue.view);function vl(t){return hs[t]??Ue.view}function hl(t,e){hs[t]=e,Js("folderViews",{...hs})}function Bv(){for(const t of Object.keys(hs))delete hs[t];Js("folderViews",{...hs})}const Gs=g([]);function oc(){Js("favorites",Gs.value)}function uo(t){return Gs.value.includes(t)}function Ki(t){const e=Gs.value.indexOf(t);return e>=0?(Gs.value.splice(e,1),oc(),!1):(Gs.value.push(t),oc(),!0)}const Iv={class:"fw-dlg-head"},jv={class:"fw-dlg-badge"},Vv={class:"fw-dlg-headtext"},zv={class:"fw-dlg-headtitle"},Uv={class:"fw-dlg-headsub"},Hv={class:"fw-set-body"},Wv={class:"fw-set-group"},Gv={class:"fw-set-group-title"},qv={class:"fw-set-row"},Kv={class:"k"},Xv={class:"fw-set-row"},Yv={class:"k"},Jv={class:"fw-set-row"},Qv={class:"k"},Zv={class:"fw-set-group"},eh={class:"fw-set-group-title"},th={class:"fw-set-row"},nh={class:"k"},sh={class:"fw-set-accent"},oh={class:"fw-set-row"},ih={class:"k"},ah={class:"fw-set-row"},lh={class:"k"},rh={class:"fw-set-row"},ch={class:"k"},uh={class:"fw-set-row"},dh={class:"k"},ph=ht({__name:"SettingsDialog",setup(t,{expose:e}){const{t:n}=Mt(),a=g(!1),r=["#1f883d","#238636","#0969da","#8250df","#b35900","#cf222e","#0a3069","#116329"];function u(w){Ue.accentColor=typeof w=="string"?w:"",Hn()}function v(){Ue.accentColor="",Hn()}e({open:()=>{a.value=!0}});function d(){Hn()}function f(){Bv(),Hn()}return(w,b)=>{const k=Pp,O=Np,M=Mn,A=fa,V=pa,H=cn;return l(),Xe(H,{modelValue:a.value,"onUpdate:modelValue":b[8]||(b[8]=C=>a.value=C),class:"fw-set-dialog",width:"460px","align-center":"","modal-class":"fw-blur-overlay","close-on-click-modal":!1},{header:se(()=>[o("div",Iv,[o("span",jv,[m(ne,{name:"gear",size:20})]),o("span",Vv,[o("span",zv,i(s(n)("settings")),1),o("span",Uv,i(s(n)("settingsSubtitle")),1)])])]),default:se(()=>[o("div",Hv,[o("div",Wv,[o("div",Gv,i(s(n)("settingsGroupFiles")),1),o("div",qv,[o("span",Kv,i(s(n)("allowOutsideRoot")),1),m(k,{modelValue:s(Ue).allowOutsideRoot,"onUpdate:modelValue":b[0]||(b[0]=C=>s(Ue).allowOutsideRoot=C),onChange:d},null,8,["modelValue"])]),o("div",Xv,[o("span",Yv,i(s(n)("showHidden")),1),m(k,{modelValue:s(Ue).showHidden,"onUpdate:modelValue":b[1]||(b[1]=C=>s(Ue).showHidden=C),onChange:d},null,8,["modelValue"])]),o("div",Jv,[o("span",Qv,i(s(n)("autoSave")),1),m(k,{modelValue:s(Ue).autoSave,"onUpdate:modelValue":b[2]||(b[2]=C=>s(Ue).autoSave=C),onChange:d},null,8,["modelValue"])])]),o("div",Zv,[o("div",eh,i(s(n)("settingsGroupAppearance")),1),o("div",th,[o("span",nh,i(s(n)("accentColor")),1),o("span",sh,[m(O,{modelValue:s(Ue).accentColor,"onUpdate:modelValue":b[3]||(b[3]=C=>s(Ue).accentColor=C),size:"small",predefine:r,"popper-class":"fw-set-popper",onChange:u},null,8,["modelValue"]),s(Ue).accentColor?(l(),Xe(M,{key:0,text:"",size:"small",class:"fw-set-accent-reset",onClick:v},{default:se(()=>[ue(i(s(n)("accentReset")),1)]),_:1})):N("",!0)])]),o("div",oh,[o("span",ih,i(s(n)("fontSize")),1),m(V,{modelValue:s(Ue).fontSize,"onUpdate:modelValue":b[4]||(b[4]=C=>s(Ue).fontSize=C),size:"small",class:"fw-set-select","popper-class":"fw-set-popper",onChange:d},{default:se(()=>[m(A,{value:12,label:s(n)("fontSizeSm")},null,8,["label"]),m(A,{value:13,label:s(n)("fontSizeMd")},null,8,["label"]),m(A,{value:14,label:s(n)("fontSizeLg")},null,8,["label"]),m(A,{value:16,label:s(n)("fontSizeXl")},null,8,["label"])]),_:1},8,["modelValue"])]),o("div",ah,[o("span",lh,i(s(n)("fontFamily")),1),m(V,{modelValue:s(Ue).fontFamily,"onUpdate:modelValue":b[5]||(b[5]=C=>s(Ue).fontFamily=C),size:"small",class:"fw-set-select","popper-class":"fw-set-popper",clearable:"",placeholder:s(n)("fontDefault"),onChange:d},{default:se(()=>[m(A,{value:"default",label:s(n)("fontDefault")},null,8,["label"]),m(A,{value:"'Segoe UI', 'Microsoft YaHei', system-ui",label:s(n)("fontOptionYahei")},null,8,["label"]),m(A,{value:"Consolas",label:s(n)("fontOptionConsolas")},null,8,["label"]),m(A,{value:"'Courier New', monospace",label:s(n)("fontOptionCourier")},null,8,["label"]),m(A,{value:"Georgia, 'Times New Roman', serif",label:s(n)("fontOptionGeorgia")},null,8,["label"])]),_:1},8,["modelValue","placeholder"])]),o("div",rh,[o("span",ch,i(s(n)("themeMode")),1),m(V,{modelValue:s(Ue).theme,"onUpdate:modelValue":b[6]||(b[6]=C=>s(Ue).theme=C),size:"small",class:"fw-set-select","popper-class":"fw-set-popper",onChange:d},{default:se(()=>[m(A,{value:"auto",label:s(n)("themeAuto")},null,8,["label"]),m(A,{value:"dark",label:s(n)("themeDark")},null,8,["label"]),m(A,{value:"light",label:s(n)("themeLight")},null,8,["label"])]),_:1},8,["modelValue"])]),o("div",uh,[o("span",dh,i(s(n)("defaultView")),1),m(V,{modelValue:s(Ue).view,"onUpdate:modelValue":b[7]||(b[7]=C=>s(Ue).view=C),size:"small",class:"fw-set-select","popper-class":"fw-set-popper",onChange:f},{default:se(()=>[m(A,{value:"details",label:s(n)("viewDetails")},null,8,["label"]),m(A,{value:"content",label:s(n)("viewContent")},null,8,["label"]),m(A,{value:"tiles",label:s(n)("viewTiles")},null,8,["label"]),m(A,{value:"list",label:s(n)("viewList")},null,8,["label"]),m(A,{value:"small",label:s(n)("viewSmall")},null,8,["label"]),m(A,{value:"medium",label:s(n)("viewMedium")},null,8,["label"]),m(A,{value:"large",label:s(n)("viewLarge")},null,8,["label"]),m(A,{value:"huge",label:s(n)("viewHuge")},null,8,["label"])]),_:1},8,["modelValue"])])])])]),_:1},8,["modelValue"])}}}),xt=(t,e)=>{const n=t.__vccOpts||t;for(const[a,r]of e)n[a]=r;return n},fh=xt(ph,[["__scopeId","data-v-fbafa4a0"]]),ir=new Map,ar=new Map,ml=new Set,gl=new Set,yl=new Set,Wo=new Set,Jo=new Set;let Go=null,bo="\0unset",It=null,ms=0,_o="",ko="";const Oi=new Set;let vo=!0;const ic="__DSH_FW_PUSH_WS__";function vh(){vo=!0,ms&&(window.clearTimeout(ms),ms=0);const t=It;It=null;try{t?.close()}catch{}}const ac={dispose:()=>vh()};function hh(){const t=globalThis,e=t[ic];if(e&&e!==ac&&typeof e.dispose=="function")try{e.dispose()}catch{}t[ic]=ac}hh();function Du(){const t=new Set;for(const e of ir.values())for(const n of e)t.add(n);return[...t].sort()}function Fu(){const t=new Set(Wo);for(const e of ar.values())for(const n of e)t.add(n);return[...t].sort()}function mh(){if(!Wo.size)return;const t=new Set;for(const e of ar.values())for(const n of e)t.add(n);for(const e of Jo)for(const n of e.ids)t.add(n);for(const e of[...Wo])t.has(e)||Wo.delete(e)}function gh(t,e){return eu(t,e,"push")}function yh(){const t=typeof location<"u"?location.href:"http://127.0.0.1/";return gh(Yn,t)}function Pu(){return It!==null&&It.readyState===WebSocket.OPEN}function lc(){vo||ms||(ms=window.setTimeout(()=>{ms=0,Nu()},1500))}function Nu(){if(vo||It&&(It.readyState===WebSocket.OPEN||It.readyState===WebSocket.CONNECTING))return;let t;try{t=new WebSocket(yh())}catch{lc();return}It=t,t.onopen=()=>{_o="",ko="",bo="\0unset",Ru()},t.onmessage=e=>wh(e.data),t.onerror=()=>{},t.onclose=()=>{It===t&&(It=null),_o="",ko="",bo="\0unset",lc()}}function Ru(){if(!It||It.readyState!==WebSocket.OPEN)return;const t=Du(),e=t.join(`
`);e!==_o&&(_o=e,It.send(JSON.stringify({type:"watch",paths:t})));const n=Fu(),a=n.join(`
`);if(a!==ko&&(ko=a,It.send(JSON.stringify({type:"ssh-watch",ids:n}))),Oi.size){const r=[...Oi];Oi.clear(),It.send(JSON.stringify({type:"ssh-check",ids:r}))}Go!==bo&&(bo=Go,It.send(JSON.stringify({type:"session-watch",id:Go})))}function wh(t){if(typeof t!="string")return;let e;try{e=JSON.parse(t)}catch{return}if(e.type==="changed"&&e.items){const n=e.items;for(const[a,r]of Object.entries(n))for(const u of ml)u(a,r);return}if(e.type==="ssh-status"&&e.items){const n=e.items;for(const a of gl)a(n);for(const a of[...Jo])Object.keys(n).some(r=>a.ids.has(r))&&(Jo.delete(a),a.resolve(n));return}if(e.type==="session-ev"&&e.ev&&typeof e.ev=="object")for(const n of yl)n(e.ev)}function xo(){if(!(Du().length>0||Fu().length>0||Go!==null)){vo=!0,_o="",ko="",bo="\0unset",ms&&(window.clearTimeout(ms),ms=0);const e=It;It=null;try{e?.close()}catch{}return}vo&&(_o="",ko="",bo="\0unset"),vo=!1,Nu(),Ru()}function bh(t,e){ir.set(t,e),xo()}function _h(t){ir.delete(t),xo()}function kh(t){return ml.add(t),()=>ml.delete(t)}function xh(t,e){ar.set(t,e),xo()}function Ch(t){return gl.add(t),()=>gl.delete(t)}function Au(t,e=12e3){const n=[...new Set(t.filter(Boolean))];if(!n.length)return Promise.resolve({});for(const a of n)Wo.add(a);return xo(),new Promise(a=>{let r=0;const u=d=>{r&&window.clearTimeout(r),Jo.delete(v),mh(),xo(),a(d)},v={ids:new Set(n),resolve:u};if(Jo.add(v),r=window.setTimeout(()=>u({}),e),It&&It.readyState===WebSocket.OPEN)It.send(JSON.stringify({type:"ssh-check",ids:n}));else for(const d of n)Oi.add(d)})}function lr(t){Go=t,xo()}function Sh(t){return yl.add(t),()=>yl.delete(t)}const ln=g([]),Mu=g(!1),en=g({});function Xi(t){return en.value[t]?.state??"unknown"}function wl(t){return en.value[t]?.error??""}async function Yi(t){en.value={...en.value,[t]:{state:"checking"}};const n=(await Au([t]))[t];return n?(en.value={...en.value,[t]:n.alive?{state:"online"}:{state:"offline",error:n.error}},n.alive):(en.value={...en.value,[t]:{state:"unknown"}},!1)}async function bl(){const t=ln.value.map(n=>n.id);if(!t.length)return;const e={...en.value};for(const n of t)e[n]={state:"checking"};if(en.value=e,!Pu()){await Ou();return}await Au(t)}async function qs(){try{const t=await kf();ln.value=t.hosts??[];const e=new Set(ln.value.map(n=>n.id));for(const n of Object.keys(en.value))e.has(n)||delete en.value[n];Lu()}catch{ln.value=[]}finally{Mu.value=!0}}let _l=!1;function $h(){_l||(_l=!0,Ch(t=>{const e={...en.value};for(const[n,a]of Object.entries(t))e[n]=a.alive?{state:"online"}:{state:"offline",error:a.error};en.value=e})),Lu(),Th()}const Eh=3e4;let rc=null;async function Ou(){const t=ln.value.slice();t.length&&await Promise.all(t.map(async e=>{const n=await $f(e.id).catch(()=>null);n&&(en.value={...en.value,[e.id]:n.alive?{state:"online"}:{state:"offline",error:n.error}})}))}function Th(){rc||(rc=setInterval(()=>{Pu()||Ou()},Eh))}function Lu(){_l&&xh("ssh-store",ln.value.map(t=>t.id))}function Bu(t){if(!t.startsWith("ssh://"))return null;const e=t.slice(6),n=e.indexOf("/"),a=n===-1?e:e.slice(0,n);if(!a)return null;const r=n===-1?"/":e.slice(n)||"/";return{hostId:a,remote:r.replace(/\/+$/,"")||"/"}}function Dh(t,e="cmd"){const n=Bu(t);if(!n)return"";const a=ln.value.find(w=>w.id===n.hostId);if(!a)return"";const r=a.authType==="key"&&a.privateKeyPath?`-i "${a.privateKeyPath}" `:"",d=`cd ${`'${n.remote.replace(/'/g,"'\\''")}'`} && exec bash -l`.replace(/"/g,'\\"'),f=e==="powershell"?`'${d.replace(/'/g,"''")}'`:`"${d}"`;return`ssh ${r}-p ${a.port||22} -o StrictHostKeyChecking=accept-new -t ${a.user}@${a.host} ${f}`}function Hs(t){return`ssh://${t}/`}function Fh(t){const e=Bu(t);if(!e)return null;const n=ln.value.find(a=>a.id===e.hostId);return n?{hostId:n.id,remote:Ph(e.remote),label:n.name||`${n.user}@${n.host}`}:null}function Ph(t){const e=(t??"").trim().replace(/\\/g,"/");return e?e.startsWith("/")?e.replace(/\/+$/,"")||"/":`/${e.replace(/\/+$/,"")}`:"/"}function rr(t){if(!t.startsWith("ssh://"))return"";const e=t.slice(6),n=e.indexOf("/");return(n===-1?e:e.slice(0,n)).trim()}function Iu(t){if(!t.startsWith("ssh://"))return"";const e=t.slice(6),n=e.indexOf("/");return(n===-1?"":e.slice(n)).replace(/\/+$/,"")||"/"}function kl(t){const e=rr(t);if(!e)return t;const n=ln.value.find(u=>u.id===e),a=n?n.name||`${n.user}@${n.host}`:e,r=Iu(t);return r&&r!=="/"?`${a} · ${r}`:a}function Ji(t){const e=rr(t);if(!e)return"";const n=Iu(t);if(!n||n==="/")return"";const a=n.lastIndexOf("/"),r=a<=0?"/":n.slice(0,a);return`ssh://${e}${r==="/"?"/":r}`}function cc(t,e){return`${t.replace(/\/+$/,"")}/${e}`}async function Nh(t=!1){Mu.value&&!t||await qs()}function ju(t){if(!t.startsWith("ssh://"))return null;const e=t.slice(6),n=e.indexOf("/"),a=n===-1?e:e.slice(0,n);if(!a)return null;const r=n===-1?"":e.slice(n),u=ln.value.find(w=>w.id===a),d=[{name:u?u.name||`${u.user}@${u.host}`:a,path:`ssh://${a}/`}];let f="";for(const w of r.split("/").filter(Boolean))f+=`/${w}`,d.push({name:w,path:`ssh://${a}${f}`});return d}const kn=gt({open:!1,editingId:null});function Vu(){kn.editingId=null,kn.open=!0}function Rh(t){kn.editingId=t,kn.open=!0}function Ci(){kn.open=!1}const Fe=gt({key:"default",root:"",explorerPath:"",externalViewActive:!1,search:{q:"",hits:[],truncated:!1,running:!1,scope:""},termOpen:!1,termRequestCwd:"",termRequestCmd:"",termRequestSsh:null}),Qi=g("");function Si(t){Qi.value=t}const Lo=g(!1),Bo=g(!1);async function zu(t){if(!Wt(t))return{cwd:t,cmd:"",ssh:null};await Nh();const e=Fh(t);return e?{cwd:"",cmd:Dh(t,Ue.termShell),ssh:e}:(Y("info",h("remoteNoTerminal")),{cwd:"",cmd:"",ssh:null})}async function Co(t=""){Uu(await zu(t)),Fe.termOpen?cr.value++:Fe.termOpen=!0}function Uu(t){Fe.termRequestCwd=t.cwd,Fe.termRequestCmd=t.cmd,Fe.termRequestSsh=t.ssh}const cr=g(0);async function Ah(t=""){Uu(await zu(t)),Fe.termOpen?cr.value++:Fe.termOpen=!0}async function xl(t){const{root:e}=await Zl(t,Fe.key);return e===Fe.root||(Fe.root=e,Fe.explorerPath=e,Fe.search.hits=[],Fe.search.q=""),e}function bs(t){return!Fe.root||Mh(Fe.root,t)?!0:Ue.allowOutsideRoot}function Mh(t,e){const n=u=>u.replace(/[\\/]+/g,"/").replace(/\/$/,""),a=n(t).toLowerCase(),r=n(e).toLowerCase();return r===a||r.startsWith(`${a}/`)}async function Oh(){if(Fe.root)return;const{root:t}=await yf(Fe.key);if(t){Fe.root=t,Fe.explorerPath=t;return}const e=window.__DSH_FILE_WORKBENCH__?.getSessionDir?.();if(e){await xl(e);return}const n=window.__DSH_FILE_WORKBENCH__?.pickDirectory;if(n){const a=await n();a&&await xl(a)}}async function ri(t){const e=window.__DSH_FILE_WORKBENCH__;if(e?.openInSidebar){if(Wt(t)){const n=await Ef(t);e.openInSidebar(n.path);return}e.openInSidebar(t)}}let Ua=0;async function ho(t,e){if(Fe.search.q=t,!t.trim()){Fe.search.hits=[],Fe.search.truncated=!1;return}const n=(e||Fe.root||"").replace(/[\\/]+$/,"");if(!n)return;const a=++Ua;Fe.search.running=!0;try{const{matches:r,truncated:u,byContent:v,snippets:d}=await bf(t,{key:Fe.key,path:n,limit:2e3,caseSensitive:Lo.value,regex:Bo.value});if(a!==Ua)return;const f=new Set(v??[]);Fe.search.hits=r.map(w=>({name:w.slice(w.lastIndexOf("/")+1),path:`${n}/${w}`,isDir:!1,broken:!1,byContent:f.has(w),snippet:d?.[w]})),Fe.search.truncated=u,Fe.search.scope=n}finally{a===Ua&&(Fe.search.running=!1)}}const ie=gt({homeItems:[],listing:null,loading:!1,loadErr:"",view:"files",recycleItems:[],recycleLoading:!1,recycleErr:"",drives:[],drivesLoading:!1,drivesErr:""});async function Hu(){ie.loadErr="";try{ie.homeItems=(await iu(Fe.key)).items}catch(t){ie.loadErr=t.message}}const Bt=gt({history:[],idx:-1}),qo="thispc",uc="回收站";function wa(t){const e=t.trim();return e.startsWith("ssh://")?!0:/^[A-Za-z]:[\\/]/.test(e)||/^[\\/]{1,2}[^\\/]/.test(e)||/^[\\/]$/.test(e)}const Lh=B(()=>Bt.idx>0),Bh=B(()=>Bt.idx<Bt.history.length-1),Ih=B(()=>ie.view==="files");function Wu(t,e){if(!e)return;const n=t===qo?t:t.replace(/[\\/]+$/,""),a=Bt.history[Bt.idx]===qo?qo:Bt.history[Bt.idx]?.replace(/[\\/]+$/,"")??"";n!==a&&(Bt.history.length=Bt.idx+1,Bt.history.push(n),Bt.idx=Bt.history.length-1)}async function Vt(t,e=!0){if(wa(t)){ie.view="files",Wu(t,e),ie.loadErr="",ie.loading=!0;try{ie.listing=await Rf(t,Fe.key)}catch(n){ie.loadErr=n.message}finally{ie.loading=!1}}}async function ur(){ie.drivesErr="",ie.drivesLoading=!0;try{ie.drives=(await au()).drives??[]}catch(t){ie.drivesErr=t.message}finally{ie.drivesLoading=!1}}async function Gu(t=!0){Wu(qo,t),ie.view="computer",ie.loadErr="",ie.listing=null,await ur()}async function qu(t,e=!0){t===qo?await Gu(e):await Vt(t,e)}function Ku(){Bt.idx>0&&(Bt.idx-=1,qu(Bt.history[Bt.idx],!1))}function Xu(){Bt.idx<Bt.history.length-1&&(Bt.idx+=1,qu(Bt.history[Bt.idx],!1))}async function Yu(){const t=ie.homeItems,e=t.find(n=>n.type==="home")?.path??t.find(n=>n.type==="workspace")?.path??t.find(n=>n.type==="drive")?.path;e&&await Vt(e)}async function Cl(){ie.view==="files"&&ie.listing&&(ie.listing.parent?await Vt(ie.listing.parent):await Yu())}async function Ju(){const t=window.__DSH_FILE_WORKBENCH__?.getSessionDir?.();if(!t)return!1;const e=Fe.root;try{await xl(t)}catch{return!1}return Fe.root!==e&&await Hu(),await Vt(t),!0}function Ft(){return Cs("mycomputer"),Cs("drives"),ie.view==="computer"?ur():ie.view==="recycle"?_s():ie.listing?Vt(ie.listing.path,!1):Promise.resolve()}function jh(){return(ie.recycleItems??[]).map(t=>{const e=Date.parse(t.dateDeleted);return{name:t.name,path:t.fullPath,isDir:t.isDir,isSymlink:!1,broken:!1,hidden:!1,size:t.size||0,mtime:Number.isNaN(e)?void 0:e,recycleFullPath:t.fullPath,originalPath:t.originalPath,dateDeleted:t.dateDeleted}})}async function Qu(){ie.recycleErr="",ie.recycleLoading=!0,ie.loading=!0,ie.loadErr="";try{const t=(await Tf()).items;ie.recycleItems=Array.isArray(t)?t:[],ie.listing={path:uc,name:uc,entries:jh(),truncated:!1}}catch(t){ie.recycleErr=t.message,ie.loadErr=t.message,ie.listing=null}finally{ie.recycleLoading=!1,ie.loading=!1}}async function dc(){ie.view="recycle",await Qu()}function _s(){return Qu()}async function Vh(){(window.__DSH_FILE_WORKBENCH__?.getSessionDir?.()??null)&&await Ft()}const Sl=B(()=>ie.listing?.path??"");let pc=!1;function zh(){return pc?!1:(pc=!0,!0)}const Zu="vscode";function ba(){return typeof window<"u"?window.__DSH_SIDEBAR_RIGHT__:void 0}function ed(t,e){ba()?.openTab(t,e)}function dr(t){return ba()?.newEditorTab(t)??!1}function Uh(){const t=ba();if(!t)return!1;const e=t.editorTabLimit();return e>0&&t.editorTabCount()>=e}function Hh(t){ba()?.float(t)}let So=null;function Wh(){const t=So;return So=null,t}function Gh(){So=null}let $l=null;function fc(){const t=$l;return $l=null,t}function pr(t,e={}){const n=t?.trim();if(!n)return;if(n.startsWith("ssh://")){qh(n,e.isDir);return}So=n;const a=Uh();if(!dr({projectDir:n})){ed(Zu,{params:{projectDir:n}});return}a&&Y("info",h("vsReplacedOldest"))}async function qh(t,e){const n=Hs(rr(t));let a=e;a===void 0&&t!==n&&(a=(await cl(t))?.isDir??!1);const r=t===n||a===!0;So=r?t:n,$l=r?null:t;const u=So;dr({projectDir:u})||ed(Zu,{params:{projectDir:u}})}const Nt=gt({list:[],history:[],archives:{}});let Kh=1,vc=!1;const td=gt({value:!1});function Xh(t){td.value=t}function fr(t){const e=new Date(t),n=a=>String(a).padStart(2,"0");return`${e.getFullYear()}-${n(e.getMonth()+1)}-${n(e.getDate())}`}function vr(){return fr(Date.now())}function $i(t){return t.doneAt??t.startedAt}function nd(t){let e=!0;for(let n=1;n<t.length;n++)if($i(t[n-1])<$i(t[n])){e=!1;break}return e?!1:(t.sort((n,a)=>$i(a)-$i(n)),!0)}function sd(t){if(!t.length)return;const e=vr(),n=Nt.archives[e]??(Nt.archives[e]=[]);n.push(...t),nd(n),er(Nt.archives)}async function Yh(){if(!vc){vc=!0;try{const t=await ov(),e=await av(),n=vr(),a=[];let r=!1;for(const v of t){const d=fr(v.doneAt??v.startedAt);d===n?a.push(v):((e[d]??=[]).push(v),r=!0)}let u=!1;for(const v of Object.keys(e))nd(e[v])&&(u=!0);Nt.history=a,Nt.archives=e,(r||u)&&(_a(),er(e))}catch{Nt.history=[],Nt.archives={}}}}function _a(){iv(Nt.history)}function Jh(t){const e=fr(t.doneAt??t.startedAt);e===vr()?(Nt.history.unshift(t),Nt.history.length>200&&(Nt.history.length=200),_a()):((Nt.archives[e]??(Nt.archives[e]=[])).unshift(t),er(Nt.archives))}function on(t,e,n,a){const r=Kh++,u=gt({id:r,label:t,detail:e,status:"running",startedAt:Date.now(),logs:[{time:Date.now(),status:"running",msg:t,file:e,fileType:n,fileSize:a}]});Nt.list.unshift(u),Nt.list.length>80&&(Nt.list.length=80);const v=(w,b)=>{u.status=w,u.doneAt=Date.now(),u.msg=b,u.logs.push({time:u.doneAt,status:w,msg:b??"",file:e}),Jh({label:u.label,detail:e,status:w,msg:b,startedAt:u.startedAt,doneAt:u.doneAt,logs:u.logs.map(k=>({...k}))})};return{step:(w,b,k,O,M)=>{u.status==="running"&&u.logs.push({time:Date.now(),status:"running",msg:w,file:b,detail:k,fileType:O,fileSize:M})},updateLabel:w=>{u.label=w},done:w=>v("done",w),fail:w=>v("error",w)}}async function od(){sd(Nt.history),Nt.history=[],Nt.list=Nt.list.filter(t=>t.status==="running"),_a()}async function id(){sd(Nt.history),Nt.history=[],Nt.list=[],_a()}const Kn={state:Nt,startTask:on,initTaskLogs:Yh,clearFinished:od,clearAll:id,setOpen:Xh,open:td},{t:io}=Mt();function Qh(t){return new Promise(e=>setTimeout(e,t))}async function ad(){if((ie.recycleItems?.length??0)===0||!await At({title:io("recycleEmpty"),message:io("recycleEmptyConfirm")}))return;const e=on(io("recycleEmptying"),"");try{await Nf();let n=ie.recycleItems?.length??0;for(let a=0;a<120;a+=1){await Qh(1e3);try{n=(await Df()).count}catch{}if(e.step(io("recycleEmptyProgress",{count:n})),n<=0)break}e.updateLabel(io("recycleEmptyDone")),e.done(io("recycleEmptyDone")),await _s()}catch(n){e.fail(n.message),Y("error",n.message)}}function El(){return Ue.theme==="dark"?!0:Ue.theme==="light"?!1:typeof document>"u"?!0:document.documentElement.style.colorScheme!==""?document.body.hasAttribute("data-ds-dark-theme"):typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const ld=[["--dsh-bg","--dsw-alias-bg-base"],["--dsh-bg2","--dsw-alias-bg-layer-1"],["--dsh-border","--dsw-alias-border-l1"],["--dsh-fg","--dsw-alias-label-primary"],["--dsh-fg-weak","--dsw-alias-label-secondary"],["--dsh-hover","--dsw-alias-interactive-bg-hover"],["--dsh-accent","--dsw-alias-state-success-primary"]];function Zh(t){if(typeof document>"u")return;const e=t??document.body??document.documentElement,n=getComputedStyle(e),a=[document.documentElement,t].filter(r=>!!r);for(const[r,u]of ld){const v=n.getPropertyValue(u).trim();if(v)for(const d of a)d.style.setProperty(r,v)}}function em(t){if(typeof document>"u")return;const e=[document.documentElement,t].filter(n=>!!n);for(const[n]of ld)for(const a of e)a.style.removeProperty(n)}function tm(){if(Ue.theme==="dark")return"dark";if(Ue.theme==="light")return"light";if(typeof document>"u")return"dark";const e=document.querySelector(".fw-root[data-theme]")?.getAttribute("data-theme");return e==="light"||e==="dark"?e:El()?"dark":"light"}function hr(t){const e=g(El()?"dark":"light");function n(){const v=El();if(e.value=v?"dark":"light",t.value&&t.value.setAttribute("data-theme",e.value),typeof document<"u"){const d=document.documentElement;d.setAttribute("data-theme",e.value);const f=d.style.colorScheme!=="";Ue.theme==="auto"&&f?Zh(t.value):em(t.value),d.classList.toggle("dark",v),a(d),t.value&&a(t.value)}}function a(v){Ue.accentColor?v.style.setProperty("--dsh-accent",Ue.accentColor):v.style.removeProperty("--dsh-accent")}n();let r;typeof document<"u"&&typeof MutationObserver<"u"&&(r=new MutationObserver(n),r.observe(document.body,{attributes:!0,attributeFilter:["data-ds-dark-theme"]}));const u=typeof matchMedia<"u"?matchMedia("(prefers-color-scheme: dark)"):void 0;return u?.addEventListener("change",n),Je(()=>[Ue.theme,Ue.accentColor],n,{deep:!1}),Kl(()=>{r?.disconnect(),u?.removeEventListener("change",n)}),e}const nm=["data-theme"],sm={key:0,class:"fw-cm-header"},om={key:0,class:"fw-cm-sep"},im=["onMouseenter","onClick"],am={class:"fw-cm-ico"},lm={key:1},rm={class:"fw-cm-label"},cm={key:0,class:"fw-cm-hint"},um={class:"fw-cm-check"},dm={key:1,class:"fw-cm-arrow"},pm=["title","onClick"],fm={key:1,class:"fw-cm-footer"},vm={key:0,class:"fw-cm-sep"},hm=["onClick"],mm={class:"fw-cm-ico"},gm={key:1},ym={class:"fw-cm-label"},wm={key:0,class:"fw-cm-sep"},bm=["onClick"],_m={class:"fw-cm-ico"},km={key:1},xm={class:"fw-cm-label"},Cm={class:"fw-cm-check"},Sm=ht({__name:"ContextMenu",props:{items:{},x:{},y:{},maxHeight:{},footerItems:{},placement:{}},emits:["close"],setup(t,{emit:e}){const n=t,a=e,r=g(!1),u=g(null),v=g(null),d=g({x:n.x,y:n.y}),f=g(-1),w=g(!1),b=g(null),k=g({x:0,y:0}),O=g("dark");function M(){return O.value=tm(),O.value}function A(be){return!!be.separator}Je(()=>[n.x,n.y],([be,le])=>{d.value={x:be,y:le},f.value=-1,b.value=null,r.value=!0,M(),requestAnimationFrame(V)}),Je(()=>n.items,()=>{r.value&&requestAnimationFrame(V)});function V(){const be=u.value;if(!be)return;const le=window.innerWidth,re=window.innerHeight,Ee=be.getBoundingClientRect();let Ve=d.value.x,we=d.value.y;Ve+Ee.width>le-4&&(Ve=Math.max(4,le-Ee.width-4)),we+Ee.height>re-4&&(we=Math.max(4,re-Ee.height-4)),Ee.top<4&&(we=Math.max(4,we+(4-Ee.top))),d.value={x:Ve,y:we}}function H(be,le){f.value=be;const re=u.value,Ee=n.items[be],Ve=le?.currentTarget??re?.querySelectorAll(".fw-cm-item")[be]??null;w.value=!!re&&d.value.x+re.getBoundingClientRect().width+180>window.innerWidth,Ee?.children?.length?(b.value=Ee,C(Ve)):b.value=null}function C(be){const le=be??null;if(!le)return;const re=le.getBoundingClientRect();let Ve=w.value?re.left-220:re.right-2;const we=Math.max(4,re.top-4);k.value={x:Ve,y:we},requestAnimationFrame(()=>{const Ne=v.value;if(!Ne)return;const W=Ne.getBoundingClientRect();let J=Ve,z=we;J+W.width>window.innerWidth-4&&(J=Math.max(4,window.innerWidth-W.width-4)),z+W.height>window.innerHeight-4&&(z=Math.max(4,window.innerHeight-W.height-4)),k.value={x:J,y:z}})}function Z(be){be.disabled||be.children?.length||(be.onClick?.(),I())}function G(be){be.disabled||(be.onClick?.(),I())}function F(be){be.trailing?.disabled||be.trailing?.onClick?.()}function de(be){be.disabled||(be.onClick?.(),I())}function I(){r.value=!1,f.value=-1,b.value=null,a("close")}function ve(){I()}function ye(be){be.key==="Escape"&&I()}return rn(()=>{r.value=!0,M(),requestAnimationFrame(V),window.addEventListener("keydown",ye)}),Rt(()=>{window.removeEventListener("keydown",ye)}),(be,le)=>(l(),Xe(qc,{to:"body"},[r.value?(l(),c("div",{key:0,class:"fw-cm-backdrop",onMousedown:ve,onContextmenu:xe(ve,["prevent"])},[o("div",{ref_key:"menuEl",ref:u,class:te(["fw-cm",{"fw-cm-up":n.placement==="top"}]),"data-theme":O.value,style:_t({left:d.value.x+"px",top:d.value.y+"px"}),onMousedown:le[2]||(le[2]=xe(()=>{},["stop"])),onContextmenu:le[3]||(le[3]=xe(()=>{},["prevent"]))},[be.$slots.header?(l(),c("div",sm,[Sp(be.$slots,"header",{},void 0,!0)])):N("",!0),o("div",{class:"fw-cm-scroll",style:_t(n.maxHeight?{maxHeight:n.maxHeight}:void 0)},[(l(!0),c(oe,null,Ae(t.items,(re,Ee)=>(l(),c(oe,{key:Ee},[A(re)?(l(),c("div",om)):(l(),c("div",{key:1,class:te(["fw-cm-item",{disabled:re.disabled,checked:re.checked,hasChild:!!re.children?.length}]),onMouseenter:Ve=>H(Ee,Ve),onClick:Ve=>Z(re)},[o("span",am,[s(Vo)(re.icon??"")?(l(),Xe(ne,{key:0,name:re.icon??"",size:14},null,8,["name"])):(l(),c("span",lm,i(re.icon??""),1))]),o("span",rm,i(re.label),1),re.hint?(l(),c("span",cm,i(re.hint),1)):N("",!0),o("span",um,i(re.checked?"✓":""),1),re.children?.length?(l(),c("span",dm,[m(ne,{name:"chevronRight",size:10})])):N("",!0),re.trailing?(l(),c("span",{key:2,class:te(["fw-cm-trailing",{disabled:re.trailing.disabled}]),title:re.trailing.title,onClick:xe(Ve=>F(re),["stop"]),onMousedown:le[0]||(le[0]=xe(()=>{},["stop"])),onMouseenter:le[1]||(le[1]=xe(()=>{},["stop"]))},[m(ne,{name:re.trailing.icon,size:12},null,8,["name"])],42,pm)):N("",!0)],42,im))],64))),128))],4),t.footerItems?.length?(l(),c("div",fm,[(l(!0),c(oe,null,Ae(t.footerItems,(re,Ee)=>(l(),c(oe,{key:"f"+Ee},[A(re)?(l(),c("div",vm)):(l(),c("div",{key:1,class:te(["fw-cm-item",{disabled:re.disabled}]),onClick:Ve=>de(re)},[o("span",mm,[s(Vo)(re.icon??"")?(l(),Xe(ne,{key:0,name:re.icon??"",size:14},null,8,["name"])):(l(),c("span",gm,i(re.icon??""),1))]),o("span",ym,i(re.label),1)],10,hm))],64))),128))])):N("",!0),b.value?(l(),c("div",{key:2,ref_key:"subEl",ref:v,class:te(["fw-cm fw-cm-sub",{"fw-cm-sub-left":w.value}]),style:_t({left:k.value.x+"px",top:k.value.y+"px"})},[(l(!0),c(oe,null,Ae(b.value.children,(re,Ee)=>(l(),c(oe,{key:Ee},[A(re)?(l(),c("div",wm)):(l(),c("div",{key:1,class:te(["fw-cm-item",{disabled:re.disabled,checked:re.checked}]),onClick:Ve=>G(re)},[o("span",_m,[s(Vo)(re.icon??"")?(l(),Xe(ne,{key:0,name:re.icon??"",size:14},null,8,["name"])):(l(),c("span",km,i(re.icon??""),1))]),o("span",xm,i(re.label),1),o("span",Cm,i(re.checked?"✓":""),1)],10,bm))],64))),128))],6)):N("",!0)],46,nm)],32)):N("",!0)]))}}),Zt=xt(Sm,[["__scopeId","data-v-00e617b4"]]);function vn(){const t=g(!1),e=g(0),n=g(0),a=g([]);function r(d,f=[]){u(d.clientX,d.clientY,f)}function u(d,f,w=[]){a.value=w,e.value=d,n.value=f,t.value=!0}function v(){t.value=!1}return{cmOpen:t,cmX:e,cmY:n,cmItems:a,openMenu:r,openMenuAt:u,closeMenu:v}}const $m={class:"fw-clone-head"},Em={class:"fw-clone-badge"},Tm={class:"fw-clone-headtext"},Dm={class:"fw-clone-headtitle"},Fm={class:"fw-clone-headsub"},Pm={class:"fw-ssh-dlg-body"},Nm={class:"fw-ssh-field"},Rm={class:"fw-ssh-lb"},Am={class:"fw-ssh-field"},Mm={class:"fw-ssh-lb"},Om={class:"fw-ssh-addr"},Lm={class:"fw-ssh-field"},Bm={class:"fw-ssh-lb"},Im={class:"fw-ssh-addr"},jm={key:0,class:"fw-ssh-err"},Vm=ht({__name:"SshHostDialog",setup(t){const{t:e}=Mt(),n=B({get:()=>kn.open,set:H=>{H||Ci()}}),a=B(()=>kn.editingId!==null),r=B(()=>ln.value.find(H=>H.id===kn.editingId)??null),u=gt({name:"",user:"",host:"",authType:"password",password:"",privateKeyPath:""}),v=g("22"),d=B(()=>Math.trunc(Number(v.value))||22),f=g(!1),w=g(""),b=B(()=>{const H=u.user.trim()||"user",C=u.host.trim()||"host";return`${H}@${C}`});Je(()=>kn.open,H=>{if(H)if(w.value="",f.value=!1,a.value&&r.value){const C=r.value;u.name=C.name,u.user=C.user,u.host=C.host,u.authType=C.authType,u.password="",u.privateKeyPath=C.privateKeyPath??"",v.value=String(C.port)}else u.name="",u.user="",u.host="",u.authType="password",u.password="",u.privateKeyPath="",v.value="22"},{immediate:!0});function k(){Ci()}function O(){Ci()}async function M(H){f.value=!0,w.value="";try{await H()}catch(C){w.value=C instanceof Error?C.message:String(C)}finally{f.value=!1}}async function A(){if(!u.host.trim()||!u.user.trim()){lo(e("sshRequired"));return}if(a.value&&kn.editingId){const H=r.value;if(u.authType==="password"?!u.password.trim():!u.privateKeyPath.trim()||u.privateKeyPath.trim()===(H?.privateKeyPath??"")){const Z=kn.editingId??void 0;await M(async()=>{const G=await al({id:Z});G.ok?rs(`${e("sshTestOk")}${G.banner?` (${G.banner})`:""}`):ps(`${e("sshTestFail")}: ${G.error??""}`)});return}}await M(async()=>{const H=await al({host:u.host.trim(),port:d.value,user:u.user.trim(),auth:u.authType==="password"?{type:"password",password:u.password}:{type:"key",privateKeyPath:u.privateKeyPath.trim()}});H.ok?rs(`${e("sshTestOk")}${H.banner?` (${H.banner})`:""}`):ps(`${e("sshTestFail")}: ${H.error??""}`)})}async function V(){if(!u.host.trim()||!u.user.trim()){lo(e("sshRequired"));return}await M(async()=>{if(a.value&&kn.editingId){const H=await Cf({id:kn.editingId,name:u.name.trim()||void 0,host:u.host.trim(),port:d.value,user:u.user.trim(),auth:u.authType==="password"?{type:"password",password:u.password||void 0}:{type:"key",privateKeyPath:u.privateKeyPath.trim()}});rs(e("sshUpdateSuccess")),await qs(),await Yi(H.host.id)}else{const H=await xf({name:u.name.trim()||void 0,host:u.host.trim(),port:d.value,user:u.user.trim(),auth:u.authType==="password"?{type:"password",password:u.password}:{type:"key",privateKeyPath:u.privateKeyPath.trim()}});rs(e("sshAddSuccess")),await qs(),await bl(),await Yi(H.host.id)}Ci()})}return(H,C)=>{const Z=Ts,G=fa,F=pa,de=Mn,I=cn;return l(),Xe(I,{modelValue:n.value,"onUpdate:modelValue":C[7]||(C[7]=ve=>n.value=ve),class:"fw-ssh-dlg",width:"420px","close-on-click-modal":!0,"append-to-body":"",onClosed:k},{header:se(()=>[o("div",$m,[o("span",Em,[m(ne,{name:"hardDrive",size:20})]),o("div",Tm,[o("div",Dm,i(a.value?s(e)("sshEditTitle"):s(e)("sshNewHost")),1),o("div",Fm,i(s(e)("sshHostCaption")),1)])])]),footer:se(()=>[m(de,{size:"small",loading:f.value,onClick:A},{default:se(()=>[ue(i(s(e)("sshTestConn")),1)]),_:1},8,["loading"]),m(de,{size:"small",onClick:O},{default:se(()=>[ue(i(s(e)("sshCancel")),1)]),_:1}),m(de,{size:"small",type:"primary",loading:f.value,onClick:V},{default:se(()=>[ue(i(a.value?s(e)("sshSaveEdit"):s(e)("sshSaveAdd")),1)]),_:1},8,["loading"])]),default:se(()=>[o("div",Pm,[o("label",Nm,[o("span",Rm,i(s(e)("sshName")),1),m(Z,{modelValue:u.name,"onUpdate:modelValue":C[0]||(C[0]=ve=>u.name=ve),size:"small",placeholder:b.value},null,8,["modelValue","placeholder"])]),o("label",Am,[o("span",Mm,i(s(e)("sshAddr")),1),o("span",Om,[m(Z,{modelValue:u.user,"onUpdate:modelValue":C[1]||(C[1]=ve=>u.user=ve),size:"small",placeholder:s(e)("sshUser"),class:"fw-ssh-user"},null,8,["modelValue","placeholder"]),C[8]||(C[8]=o("span",{class:"fw-ssh-at"},"@",-1)),m(Z,{modelValue:u.host,"onUpdate:modelValue":C[2]||(C[2]=ve=>u.host=ve),size:"small",placeholder:s(e)("sshHostAddr"),class:"fw-ssh-host"},null,8,["modelValue","placeholder"]),C[9]||(C[9]=o("span",{class:"fw-ssh-at"},":",-1)),m(Z,{modelValue:v.value,"onUpdate:modelValue":C[3]||(C[3]=ve=>v.value=ve),size:"small",placeholder:"22",class:"fw-ssh-port"},null,8,["modelValue"])])]),o("label",Lm,[o("span",Bm,i(s(e)("sshAuth")),1),o("span",Im,[m(F,{modelValue:u.authType,"onUpdate:modelValue":C[4]||(C[4]=ve=>u.authType=ve),size:"small",class:"fw-ssh-auth"},{default:se(()=>[m(G,{value:"password",label:s(e)("sshAuthPassword")},null,8,["label"]),m(G,{value:"key",label:s(e)("sshAuthKey")},null,8,["label"])]),_:1},8,["modelValue"]),u.authType==="password"?(l(),Xe(Z,{key:0,modelValue:u.password,"onUpdate:modelValue":C[5]||(C[5]=ve=>u.password=ve),size:"small",type:"password","show-password":"",placeholder:a.value&&r.value?.hasSecret?s(e)("sshKeepSecret"):s(e)("sshPassword"),class:"fw-ssh-secret"},null,8,["modelValue","placeholder"])):(l(),Xe(Z,{key:1,modelValue:u.privateKeyPath,"onUpdate:modelValue":C[6]||(C[6]=ve=>u.privateKeyPath=ve),size:"small",placeholder:s(e)("sshKeyPath"),class:"fw-ssh-secret"},null,8,["modelValue","placeholder"]))])]),w.value?(l(),c("div",jm,i(w.value),1)):N("",!0)])]),_:1},8,["modelValue"])}}}),zm=xt(Vm,[["__scopeId","data-v-615d3584"]]);function rd(t,e){const n=(t??"").replace(":","").trim().charAt(0).toUpperCase();return n?e?`${e} (${n}:)`:h("driveLabel",{drive:n}):e||"/"}function zs(t){return rd(t.letter,t.label)}function cd(t){return t.type!=="drive"?t.name:rd(t.path?.charAt(0)??"",t.label)}const Ss=5;function ud(t){if(typeof t=="string")return t;if(!t)return"";const e=typeof document<"u"?document.documentElement.lang||navigator.language:"en",n=e.toLowerCase();return t[e]??t[n]??(n.startsWith("zh")?t.zh??t.en:t.en??t.zh)??Object.values(t)[0]??""}const Qo=g([]);function mr(t){ka(t.id),Qo.value=[...Qo.value,t].sort((e,n)=>(e.order??0)-(n.order??0))}function ka(t){Qo.value=Qo.value.filter(e=>e.id!==t)}function dd(){return Qo.value}const Zo=g([]);function pd(t){gr(t.id),Zo.value=[...Zo.value,t].sort((e,n)=>(e.order??0)-(n.order??0))}function gr(t){Zo.value=Zo.value.filter(e=>e.id!==t)}function Um(){return Zo.value}function Zi(t){if(!t)return;t.style.overflowY="auto";const e=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT);for(let n=e.firstChild();n;n=e.nextSibling()){const a=n;if(a.scrollHeight<=a.clientHeight+1)continue;const r=getComputedStyle(a).overflowY;(r==="hidden"||r==="clip")&&(a.style.overflowY="auto")}}const ci=new Map;function fd(t,e){ci.set(t,e)}function yr(t){return ci.delete(t)}function vd(t){return ci.has(t)}function wr(){return[...ci.keys()]}function xa(t,...e){const n=ci.get(t);if(n)return n(...e)}const ei=g([]);function hd(t){Ca(t.id),ei.value=[...ei.value,t].sort((e,n)=>(e.order??0)-(n.order??0))}function Ca(t){ei.value=ei.value.filter(e=>e.id!==t)}function Sa(){return ei.value}const ti=g([]);function md(t){$a(t.id),ti.value=[...ti.value,t].sort((e,n)=>(e.order??0)-(n.order??0))}function $a(t){ti.value=ti.value.filter(e=>e.id!==t)}function ni(){return ti.value}const si=g([]);function gd(t){br(t.id),si.value=[...si.value,t].sort((e,n)=>(e.order??0)-(n.order??0))}function br(t){si.value=si.value.filter(e=>e.id!==t)}function ea(){return si.value}const yd={start(t,e){return on(t,e?.detail,e?.fileType,e?.fileSize)},clearFinished(){return od()},clearAll(){return id()}};function Hm(){const e=window.__dshFileWorkbenchVSCode__?.__proxy;return e?(e.rebindVSCode({registerView:mr,unregisterView:ka,registerCommand:fd,executeCommand:xa,hasCommand:vd,listCommands:wr,unregisterCommand:yr,registerStatus:hd,unregisterStatus:Ca,listStatus:Sa,registerMenu:md,unregisterMenu:$a,listMenu:ni}),e.rebindWorkbench({registerView:pd,unregisterView:gr,registerStatus:gd,unregisterStatus:br,listStatus:ea,backgroundTasks:yd}),queueMicrotask(()=>e.flush()),!0):!1}if(typeof window<"u"){const t=window,e={apiVersion:Ss,activityBar:{register:mr,unregister:ka},commands:{register:fd,unregister:yr,execute:xa,list:wr,has:vd},statusbar:{register:hd,unregister:Ca,list:Sa,registerMenu:md,unregisterMenu:$a,listMenu:ni}},n={apiVersion:Ss,activityBar:{register:pd,unregister:gr},statusbar:{register:gd,unregister:br,list:ea},backgroundTasks:yd};Hm()||(t.__dshFileWorkbenchVSCode__=e,t.__dshFileWorkbenchWorkbench__=n)}const Wm=["title"],Gm={class:"fw-nav-ico"},qm={class:"fw-nav-label"},Km=["title","onClick","onContextmenu"],Xm={class:"fw-nav-ico"},Ym={class:"fw-nav-label"},Jm=["title"],Qm=["title"],Zm={class:"fw-nav-ico"},eg={class:"fw-nav-label"},tg=["title","onClick","onContextmenu"],ng={class:"fw-nav-ico"},sg={class:"fw-nav-label"},og=["title"],ig=["aria-expanded"],ag={class:"fw-sec-txt"},lg={class:"fw-sec-icon"},rg={key:0,class:"fw-sec-b"},cg={key:0,class:"fw-nav-empty is-err"},ug=["title","onClick","onContextmenu"],dg={class:"fw-nav-ico"},pg={class:"fw-nav-label"},fg=["aria-expanded"],vg={class:"fw-sec-txt"},hg={key:0,class:"fw-sec-b"},mg=["title","onClick"],gg={class:"fw-nav-ico"},yg={key:1},wg={class:"fw-nav-label"},bg=["aria-expanded"],_g={class:"fw-sec-txt"},kg={key:0,class:"fw-sec-b"},xg=["title","onClick","onContextmenu"],Cg={class:"fw-nav-ico"},Sg={class:"fw-nav-label"},$g=["title"],Eg=["aria-expanded"],Tg={class:"fw-sec-txt"},Dg={key:0,class:"fw-sec-b"},Fg={key:0,class:"fw-nav-empty"},Pg=["title","onClick","onContextmenu"],Ng={class:"fw-nav-ico"},Rg={class:"fw-nav-label"},Ag={key:2,class:"fw-error"},Mg={class:"fw-error-ico"},Og=ht({__name:"NavPane",props:{externalViews:{default:()=>[]},externalCollapsed:{type:Boolean,default:!1},activeExternalId:{},externalActive:{type:Boolean}},emits:["toggle-external","select-external","select-local"],setup(t,{emit:e}){const{t:n}=Mt(),a=t,r=e,u=B(()=>a.externalViews??[]),v=B(()=>a.externalCollapsed===!0),d=B(()=>a.activeExternalId??""),f=B(()=>a.externalActive===!0);function w(U){return ud(U.title)}const b=Un.navGroups;function k(U){b[U]=!b[U],Mi()}rn(async()=>{await qs(),$h(),await bl()});function O(U){if(le.value||ie.view!=="files")return!1;const R=ie.listing?.path??"";return R?be(R).startsWith(be(Hs(U.id))):!1}function M(U){const R=Xi(U.id),Q=n(R==="online"?"sshStatusOnline":R==="offline"?"sshStatusOffline":R==="checking"?"sshStatusChecking":"sshStatusUnknown");return R==="offline"&&wl(U.id)?`${Q}：${wl(U.id)}`:Q}function A(U){r("select-local"),le.value=null,Vt(Hs(U.id)),Yi(U.id)}const V=g("");function H(U,R){ce(U,[{label:n("menuOpen"),icon:"arrowRight",onClick:()=>A(R)},{label:n("sshTest"),icon:"refresh",onClick:()=>void G(R)},{label:n("menuOpenTerminal"),icon:"terminal",onClick:()=>Co(Hs(R.id))},{separator:!0},{label:n("sshEdit"),icon:"gear",onClick:()=>Rh(R.id)},{label:V.value===R.id?n("sshDeleteConfirm"):n("sshDelete"),icon:"trash",onClick:()=>void F(R)},{separator:!0},{label:n("menuCopyPath"),icon:"link",onClick:()=>void Le(Hs(R.id))}])}function C(U){ce(U,[{label:n("sshNewHost"),icon:"plus",onClick:()=>Vu()},{separator:!0},{label:b.ssh?n("navCollapse"):n("navExpand"),icon:b.ssh?"chevronDown":"chevronRight",onClick:()=>k("ssh")},{label:n("menuRefresh"),icon:"refresh",onClick:()=>void Z()}])}async function Z(){await qs(),await bl()}async function G(U){const R=await al({id:U.id});R.ok?Y("ok",`${n("sshTestOk")}${R.banner?` (${R.banner})`:""}`):Y("error",`${n("sshTestFail")}: ${R.error??""}`),await Yi(U.id)}async function F(U){if(V.value!==U.id){V.value=U.id;return}V.value="",await Sf(U.id),await qs()}const de=B(()=>ie.homeItems),I=["desktop","download"],ve=B(()=>de.value.filter(U=>I.includes(U.type))),ye=B(()=>de.value.find(U=>U.type==="home")??null),be=U=>U.replace(/[\\/]+/g,"/").replace(/\/$/,"").toLowerCase(),le=g(null);function re(){if(le.value||ie.view!=="files")return null;const U=ie.listing?.path??"";if(!U)return null;const R=be(U);let Q=null,Te=-1;for(const L of de.value){const T=be(L.path);!T||R!==T&&!R.startsWith(`${T}/`)||T.length>Te&&(Te=T.length,Q=L)}return Q}function Ee(U){return re()?.path===U.path}function Ve(U){if(le.value||ie.view!=="files")return!1;const R=ie.listing?.path??"";return R?U.letter?R.toLowerCase().startsWith(`${U.letter.toLowerCase()}:`):be(R)==="/":!1}function we(U){if(r("select-local"),le.value=null,U.type==="recycle"){dc();return}Vt(U.path)}function Ne(){r("select-local"),le.value=null,b.myComputer||(b.myComputer=!0,Mi()),Gu()}function W(){b.myComputer=!b.myComputer,Mi()}function J(U){r("select-local"),le.value=null,Vt(U.path)}function z(){r("select-local"),le.value=null,dc()}const ee=U=>U.replace(/[\\/]+$/,"").split(/[\\/]/).pop()||U;function me(U){const R=Math.max(U.lastIndexOf("/"),U.lastIndexOf("\\"));return R<0?U:U.slice(0,R)}function je(U){return Wt(U)?Ji(U)||U:me(U)}async function Ke(U){le.value=U;try{const R=await Ui(U);Vt(R.isDir?U:je(U))}catch{Vt(je(U))}}const Ze=B(()=>Gs.value.map(U=>({path:U,name:ee(U)})));async function ge(U){r("select-local"),le.value=U;try{(await Ui(U)).isDir?Vt(U):(ri(U),Vt(me(U)))}catch{Vt(U)}}function _e(U){switch(U.type){case"drive":return cd(U);case"home":return n("navHome");case"desktop":return n("desktopEntry");case"download":return n("downloadEntry");case"documents":return n("documentEntry");case"pictures":return n("pictureEntry");case"music":return n("musicEntry");case"videos":return n("videoEntry");case"gallery":return n("navGallery");case"workspace":return n("workspaceEntry");case"recycle":return n("recycleBin");default:return U.name}}function Ye(U){switch(U.type){case"drive":return"hardDrive";case"recycle":return"trash";case"workspace":return"folder";case"home":return"home";case"desktop":return"monitor";case"download":return"download";case"documents":return"fileText";case"pictures":return"image";case"music":return"music";case"videos":return"video";case"gallery":return"image";default:return"folder"}}const{cmOpen:st,cmX:fe,cmY:Ce,cmItems:qe,openMenu:ce}=vn();function Ie(U,R,Q={}){const Te=uo(R),L=[Q.openParent?{label:n("menuOpen"),icon:"arrowRight",onClick:()=>void Ke(R)}:{label:n("menuOpen"),icon:"arrowRight",onClick:()=>void Vt(R)}];Q.openEditor!==!1&&L.push({label:n("menuOpenInEditor"),icon:"code",onClick:()=>pr(R)}),L.push({separator:!0}),L.push({label:n(Te?"favoriteRemove":"favoriteAdd"),icon:"star",onClick:()=>{const T=Ki(R);Y("ok",n(T?"favoriteAdded":"favoriteRemoved"))}}),L.push({label:n("menuCopyPath"),icon:"link",onClick:()=>void Le(R)}),Q.openTerminal!==!1&&L.push({label:n("menuOpenTerminal"),icon:"terminal",onClick:()=>Co(R)}),ce(U,L)}function rt(U,R){Ie(U,R.path)}function yt(U){ce(U,[{label:b.myComputer?n("navCollapse"):n("navExpand"),icon:b.myComputer?"chevronDown":"chevronRight",onClick:()=>k("myComputer")},{label:n("menuOpen"),icon:"arrowRight",onClick:Ne},{separator:!0},{label:n("menuRefresh"),icon:"refresh",onClick:()=>void Ft()}])}function ut(U,R){Ie(U,R.path)}function it(U){ce(U,[{label:n("menuOpen"),icon:"arrowRight",onClick:z},{label:n("menuRefresh"),icon:"refresh",onClick:()=>void Ft()},{separator:!0},{label:n("recycleEmpty"),icon:"trash",disabled:(ie.recycleItems?.length??0)===0,onClick:()=>void ad()}])}async function Le(U){try{await navigator.clipboard.writeText(U),Y("ok",n("menuPathCopied"))}catch{Y("error",n("menuPathCopyFail"))}}return(U,R)=>(l(),c("div",{class:te(["fw-nav",{"external-active":f.value}])},[ye.value?(l(),c("button",{key:0,class:te(["fw-nav-item fw-nav-top fw-nav-leaf",{active:!f.value&&Ee(ye.value)}]),title:ye.value.path,onClick:R[0]||(R[0]=Q=>we(ye.value)),onContextmenu:R[1]||(R[1]=xe(Q=>rt(Q,ye.value),["prevent","stop"]))},[o("span",Gm,[m(ne,{name:"home",size:14})]),o("span",qm,i(_e(ye.value)),1)],42,Wm)):N("",!0),(l(!0),c(oe,null,Ae(ve.value.filter(Q=>Q.type!=="download"),Q=>(l(),c("button",{key:Q.path,class:te(["fw-nav-item fw-nav-top fw-nav-leaf",{active:!f.value&&Ee(Q)}]),title:Q.path,onClick:Te=>we(Q),onContextmenu:xe(Te=>rt(Te,Q),["prevent","stop"])},[o("span",Xm,[m(ne,{name:Ye(Q),size:14},null,8,["name"])]),o("span",Ym,i(_e(Q)),1),o("span",{class:"fw-nav-pin",title:s(n)("favoritePin")},[m(ne,{name:"pin",size:11})],8,Jm)],42,Km))),128)),o("button",{class:te(["fw-nav-item fw-nav-top",{active:!f.value&&s(ie).view==="recycle"}]),title:s(n)("recycleBin"),onClick:z,onContextmenu:xe(it,["prevent","stop"])},[o("span",Zm,[m(ne,{name:"trash",size:14})]),o("span",eg,i(s(n)("recycleBin")),1)],42,Qm),R[7]||(R[7]=o("div",{class:"fw-nav-div","aria-hidden":"true"},null,-1)),(l(!0),c(oe,null,Ae(ve.value.filter(Q=>Q.type==="download"),Q=>(l(),c("button",{key:Q.path,class:te(["fw-nav-item fw-nav-top fw-nav-leaf",{active:!f.value&&Ee(Q)}]),title:Q.path,onClick:Te=>we(Q),onContextmenu:xe(Te=>rt(Te,Q),["prevent","stop"])},[o("span",ng,[m(ne,{name:Ye(Q),size:14},null,8,["name"])]),o("span",sg,i(_e(Q)),1),o("span",{class:"fw-nav-pin",title:s(n)("favoritePin")},[m(ne,{name:"pin",size:11})],8,og)],42,tg))),128)),R[8]||(R[8]=o("div",{class:"fw-nav-div","aria-hidden":"true"},null,-1)),o("div",{class:te(["fw-nav-sec",{collapsed:!s(b).myComputer,active:!f.value&&s(ie).view==="computer"}])},[o("button",{class:"fw-sec-h","aria-expanded":s(b).myComputer,onClick:W,onContextmenu:xe(yt,["prevent","stop"])},[o("span",{class:te(["fw-caret",{open:s(b).myComputer}])},[m(ne,{name:"chevronDown",size:11})],2),o("span",ag,[o("span",lg,[m(ne,{name:"monitor",size:14})]),ue(i(s(n)("navThisPc")),1)])],40,ig),s(b).myComputer?(l(),c("div",rg,[s(ie).drivesErr?(l(),c("div",cg,i(s(ie).drivesErr),1)):N("",!0),(l(!0),c(oe,null,Ae(s(ie).drives,Q=>(l(),c("button",{key:Q.path,class:te(["fw-nav-item fw-nav-drive",{active:!f.value&&Ve(Q)}]),title:Q.path,onClick:Te=>J(Q),onContextmenu:xe(Te=>ut(Te,Q),["prevent","stop"])},[o("span",dg,[m(ne,{name:"hardDrive",size:13})]),o("span",pg,i(Q.name),1)],42,ug))),128))])):N("",!0)],2),u.value.length?(l(),c("div",{key:1,class:te(["fw-nav-sec fw-nav-external",{collapsed:v.value}])},[o("button",{class:"fw-sec-h","aria-expanded":!v.value,onClick:R[2]||(R[2]=Q=>r("toggle-external"))},[o("span",{class:te(["fw-caret",{open:!v.value}])},[m(ne,{name:"chevronDown",size:11})],2),o("span",vg,i(s(n)("externalInjection")),1)],8,fg),v.value?N("",!0):(l(),c("div",hg,[(l(!0),c(oe,null,Ae(u.value,Q=>(l(),c("button",{key:Q.id,class:te(["fw-nav-item fw-nav-external-item",{active:d.value===Q.id}]),title:w(Q),onClick:Te=>r("select-external",Q.id)},[o("span",gg,[s(Vo)(Q.icon??"")?(l(),Xe(ne,{key:0,name:Q.icon??"",size:14},null,8,["name"])):(l(),c("span",yg,i(w(Q).slice(0,1)),1))]),o("span",wg,[o("span",null,i(w(Q)),1)])],10,mg))),128))]))],2)):N("",!0),o("div",{class:te(["fw-nav-sec",{collapsed:!s(b).ssh}])},[o("button",{class:"fw-sec-h","aria-expanded":s(b).ssh,onClick:R[3]||(R[3]=Q=>k("ssh")),onContextmenu:xe(C,["prevent","stop"])},[o("span",{class:te(["fw-caret",{open:s(b).ssh}])},[m(ne,{name:"chevronDown",size:11})],2),o("span",_g,i(s(n)("sshNavGroup")),1)],40,bg),s(b).ssh?(l(),c("div",kg,[s(ln).length===0?(l(),c("div",{key:0,class:"fw-nav-empty",onContextmenu:xe(C,["prevent","stop"])},i(s(n)("sshEmpty")),33)):N("",!0),(l(!0),c(oe,null,Ae(s(ln),Q=>(l(),c("button",{key:Q.id,class:te(["fw-nav-item",{active:!f.value&&O(Q)}]),title:`${Q.user}@${Q.host}:${Q.port}`,onClick:Te=>A(Q),onContextmenu:xe(Te=>H(Te,Q),["prevent","stop"])},[o("span",Cg,[m(ne,{name:"globe",size:13})]),o("span",Sg,i(Q.name||`${Q.user}@${Q.host}`),1),o("span",{class:te(["fw-ssh-dot",`is-${s(Xi)(Q.id)}`]),title:M(Q)},null,10,$g)],42,xg))),128))])):N("",!0)],2),o("div",{class:te(["fw-nav-sec",{collapsed:!s(b).favorites}])},[o("button",{class:"fw-sec-h","aria-expanded":s(b).favorites,onClick:R[4]||(R[4]=Q=>k("favorites"))},[o("span",{class:te(["fw-caret",{open:s(b).favorites}])},[m(ne,{name:"chevronDown",size:11})],2),o("span",Tg,i(s(n)("favorites")),1)],8,Eg),s(b).favorites?(l(),c("div",Dg,[Ze.value.length===0?(l(),c("div",Fg,i(s(n)("emptyFavorites")),1)):N("",!0),(l(!0),c(oe,null,Ae(Ze.value,Q=>(l(),c("button",{key:Q.path,class:te(["fw-nav-item",{active:!f.value&&le.value===Q.path}]),title:Q.path,onClick:Te=>ge(Q.path),onContextmenu:xe(Te=>Ie(Te,Q.path,{openEditor:!1,openTerminal:!1,openParent:!0}),["prevent","stop"])},[o("span",Ng,[m(ne,{name:"star",size:13})]),o("span",Rg,i(Q.name),1)],42,Pg))),128))])):N("",!0)],2),s(ie).loadErr?(l(),c("div",Ag,[o("span",Mg,[m(ne,{name:"warning",size:16})]),o("span",null,i(s(ie).loadErr),1),o("button",{class:"fw-retry",onClick:R[5]||(R[5]=Q=>s(Ft)())},i(s(n)("retry")),1)])):N("",!0),s(st)?(l(),Xe(Zt,{key:3,items:s(qe),x:s(fe),y:s(Ce),onClose:R[6]||(R[6]=Q=>st.value=!1)},null,8,["items","x","y"])):N("",!0),m(zm)],2))}}),Lg=xt(Og,[["__scopeId","data-v-f2446309"]]),ta={start:0,end:0,padBefore:0,padAfter:0,total:0};function hc(t,e){return t<0?0:t>e?e:t}function Bg(t,e,n,a=8){const r=g({...ta});function u(){const f=t.value,w=e.value;if(!f||w<=0||f.clientHeight<=0){r.value={...ta};return}const b=Math.max(0,f.scrollTop),k=hc(Math.floor(b/n)-a,w),O=Math.ceil(f.clientHeight/n)+a*2,M=hc(k+O,w);r.value={start:k,end:M,padBefore:k*n,padAfter:(w-M)*n,total:w*n}}function v(){u()}let d=null;return Je(t,f=>{d&&(d.disconnect(),d=null),Dt(u),f&&(d=new ResizeObserver(()=>{u()}),d.observe(f))}),Je(e,()=>{Dt(u)}),Kl(()=>{d?.disconnect(),d=null}),{range:r,onScroll:v,compute:u}}function Ig(t,e,n=90,a=3){const r=[],u=g({...ta}),v=new WeakMap;let d=null;function f(){return d||(d=new ResizeObserver(V=>{let H=!1;for(const C of V){const Z=v.get(C.target);if(Z===void 0)continue;const G=Math.max(1,Math.round(C.contentRect.height));r[Z]!==G&&(r[Z]=G,H=!0)}H&&b()})),d}function w(V){return r[V]??n}function b(){const V=t.value,H=e.value;if(!V||H<=0||V.clientHeight<=0){u.value={...ta};return}r.length>H&&(r.length=H);const C=Math.max(0,V.scrollTop),Z=new Array(H+1);Z[0]=0;for(let le=0;le<H;le++)Z[le+1]=Z[le]+w(le);const G=Z[H];let F=0,de=H;const I=C-a*n;for(;F<de;){const le=F+de>>1;Z[le]<I?F=le+1:de=le}let ve=Math.max(0,F-a),ye=ve;const be=C+V.clientHeight+a*n;for(;ye<H&&Z[ye+1]<=be;)ye++;ye=Math.min(H,ye+a),u.value={start:ve,end:ye,padBefore:Z[ve],padAfter:G-Z[ye],total:G}}function k(){b()}let O=null;Je(t,V=>{O&&(O.disconnect(),O=null),Dt(b),V&&(O=new ResizeObserver(()=>b()),O.observe(V))});function M(V){return H=>{const C=H;if(!C)return;const Z=f();r.length<V+1&&(r.length=V+1),v.set(C,V),Z.observe(C);const G=Math.max(1,Math.round(C.getBoundingClientRect().height));r[V]!==G&&(r[V]=G,Dt(b))}}function A(){r.length=0,Dt(b)}return Je(e,()=>{Dt(b)}),Kl(()=>{O?.disconnect(),O=null,d?.disconnect(),d=null}),{range:u,onScroll:k,compute:b,measure:M,resetHeights:A}}const jg={class:"fw-search"},Vg={class:"fw-search-head"},zg={class:"fw-tree-head"},Ug={class:"fw-search-opts"},Hg=["title"],Wg=["title"],Gg={key:0,class:"fw-loading"},qg={key:1,class:"fw-count"},Kg={class:"fw-count-row"},Xg={key:0,class:"fw-scopeline"},Yg={key:2,class:"fw-empty"},Jg=["onClick","title"],Qg={class:"fw-ico"},Zg={class:"fw-namerow"},e1={class:"fw-hitname"},t1={key:0,class:"fw-badge"},n1={class:"fw-hitpath"},s1={key:0,class:"fw-hitsnippet"},o1=ht({__name:"SearchPane",setup(t){const{t:e}=Mt(),n=g(null),a=B(()=>Fe.search.hits.length),r=Ig(n,a,56),u=B(()=>Fe.search.hits.slice(r.range.value.start,r.range.value.end));Je(()=>Fe.search.q,()=>{r.resetHeights(),n.value&&(n.value.scrollTop=0)});function v(){ho("")}function d(){const V=Fe.search.q.trim();V&&ho(V)}function f(){Lo.value=!Lo.value,d()}function w(){Bo.value=!Bo.value,d()}function b(V){ri(V)}function k(V){const H=(Fe.root||"").replace(/[\\/]+$/,"");return V.startsWith(H)?V.slice(H.length+1):V}const O=B(()=>Fe.search.hits.filter(V=>V.byContent)),M=g(!1);async function A(){const V=Fe.search.q.trim(),H=O.value.length;if(!H||!V)return;const C=await ds({title:e("searchReplaceTitle"),message:e("searchReplaceConfirm",{files:H,count:H}),placeholder:e("findReplacePlaceholder")});if(C!==null){M.value=!0;try{const Z=await ou(V,C,{key:Fe.key,scope:Fe.search.scope||void 0,caseSensitive:Lo.value,regex:Bo.value});Y("ok",e("searchReplaceDone",{files:Z.files,count:Z.replacements})),ho(V)}catch(Z){Y("error",Z.message)}finally{M.value=!1}}}return(V,H)=>{const C=Mn;return l(),c("div",jg,[o("div",Vg,[o("span",zg,i(s(e)("searchTitle")),1),o("span",Ug,[o("button",{class:te(["fw-search-opt",{on:s(Lo)}]),title:s(e)("searchCase"),onClick:f},"Aa",10,Hg),o("button",{class:te(["fw-search-opt",{on:s(Bo)}]),title:s(e)("searchRegex"),onClick:w},".*",10,Wg)]),m(C,{size:"small",text:"",title:s(e)("clearSearch"),onClick:v},{default:se(()=>[...H[1]||(H[1]=[ue("✕",-1)])]),_:1},8,["title"])]),s(Fe).search.running?(l(),c("div",Gg,i(s(e)("searching")),1)):s(Fe).search.q?(l(),c("div",qg,[o("div",Kg,[o("span",null,[ue(i(s(e)("resultsCount",{count:s(Fe).search.hits.length})),1),s(Fe).search.truncated?(l(),c(oe,{key:0},[ue(i(s(e)("resultsSuffixTruncated")),1)],64)):N("",!0)]),O.value.length?(l(),Xe(C,{key:0,size:"small",type:"primary",plain:"",disabled:M.value,onClick:A},{default:se(()=>[ue(i(M.value?s(e)("searchReplaceBusy"):s(e)("searchReplaceAll")),1)]),_:1},8,["disabled"])):N("",!0)]),s(Fe).search.scope?(l(),c("div",Xg,i(s(e)("searchScopeIn"))+" "+i(k(s(Fe).search.scope)),1)):N("",!0)])):(l(),c("div",Yg,i(s(e)("searchIdle")),1)),o("div",{ref_key:"resRef",ref:n,class:"fw-results",onScroll:H[0]||(H[0]=(...Z)=>s(r).onScroll&&s(r).onScroll(...Z))},[o("div",{style:_t({height:s(r).range.value.padBefore+"px"})},null,4),(l(!0),c(oe,null,Ae(u.value,(Z,G)=>(l(),c("div",{key:Z.path,ref_for:!0,ref:s(r).measure(s(r).range.value.start+G),class:"fw-hit",onClick:F=>b(Z.path),title:s(e)("hitTitle")},[o("span",Qg,[m(ne,{name:"file",size:13})]),o("span",Zg,[o("span",e1,i(Z.name),1),Z.byContent?(l(),c("span",t1,i(s(e)("matchContent")),1)):N("",!0)]),o("span",n1,i(k(Z.path)),1),Z.snippet?(l(),c("span",s1,i(Z.snippet),1)):N("",!0)],8,Jg))),128)),o("div",{style:_t({height:s(r).range.value.padAfter+"px"})},null,4)],544)])}}}),i1=xt(o1,[["__scopeId","data-v-3880eff0"]]),a1=g(""),ui=g({op:"",paths:[]});function Ei(t){ui.value={op:"copy",paths:t}}function Mo(t){ui.value={op:"cut",paths:t}}function l1(){ui.value={op:"",paths:[]}}function Tl(){return ui.value.paths.length>0}function r1(){return ui.value}async function mc(t){try{return await navigator.clipboard.writeText(t),!0}catch{return!1}}const Pt=gt({visible:!1,canSwitchView:!1,total:0,selected:0,text:"",view:"details"});let wd=null;function na(t){wd=t}function c1(t){wd?.(t)}function bd(){Pt.visible=!1,Pt.canSwitchView=!1,Pt.total=0,Pt.selected=0,Pt.text=""}const Ea=gt({dirs:{}});async function ks(t){if(t)try{const e=await Wf(t);Ea.dirs[t]={inRepo:e.inRepo,branch:e.branch??"",entries:e.entries}}catch{}}function _d(t){return Ea.dirs[t]?.inRepo??!1}function kd(t,e){return Ea.dirs[t]?.entries?.[e]??""}const oi=gt({dirs:{}});async function ao(t){if(t)try{const e=await fs(t);if(!e.inRepo||!e.svnAvailable){oi.dirs[t]={inRepo:!1,entries:{}};return}const n=await Qt(t,["status","--depth","immediates"]),a={};if(n.code===0)for(const r of(n.stdout||"").split(/\r?\n/)){if(!r.trim())continue;const u=(r.slice(0,8)[0]??"").trim();let v=r.slice(8).trim();if(v=v.replace(/[\\/]+$/,""),!v||v==="."||v==="..")continue;const d=v.split(/[\\/]/).pop()??v,f=d1(u);f&&(a[d]=f)}oi.dirs[t]={inRepo:!0,entries:a}}catch{}}function u1(t){return oi.dirs[t]?.inRepo??!1}function xd(t,e){return oi.dirs[t]?.entries?.[e]??""}function d1(t){switch(t){case"A":return"added";case"M":return"modified";case"D":return"deleted";case"?":return"untracked";case"R":return"modified";case"!":return"deleted";case"C":return"modified";default:return""}}function p1(t){return(t||"").split(/\r?\n/).filter(e=>/^\s?[ADUGCER]{1,3}\s+\S/.test(e)).length}function f1(t){const e=[...(t||"").matchAll(/(?:revision|版本)\s*(\d+)/gi)];return e.length?e[e.length-1][1]:null}function v1(t){return t.slice(Math.max(t.lastIndexOf("/"),t.lastIndexOf("\\"))+1)}async function h1(t,e){try{if(!(await fs(t)).svnAvailable){Y("error",h("svnNoCli"));return}const a=await Qt(t,e);a.code===0?Y("ok",(a.stdout||h("svnDone")).split(`
`)[0].slice(0,200)):Y("error",(a.stderr||h("svnFailed")).split(`
`)[0].slice(0,200))}catch(n){Y("error",n.message)}}async function m1(t,e,n){try{if(!(await fs(t)).svnAvailable){Y("error",h("svnNoCli"));return}const r=await Qt(t,["add","--",t]);r.code===0?Y("ok",h("svnAdded")):Y("error",(r.stderr||h("svnFailed")).split(`
`)[0].slice(0,200))}catch(a){Y("error",a.message)}await n.afterMutate(e)}async function g1(t,e,n){try{if(!(await fs(t)).svnAvailable){Y("error",h("svnNoCli"));return}const r=t.replace(/[\\/]$/,""),u=r.replace(/[\\/][^\\/]+$/,""),v=r.slice(u.length+1),f=((await Qt(u,["propget","svn:ignore",u])).stdout||"").split(/\r?\n/).map(k=>k.trim()).filter(Boolean);if(f.includes(v)){Y("ok",h("gitIgnored")),await n.afterMutate(e);return}const w=[...f,v].join(`
`),b=await Qt(u,["propset","svn:ignore",w,u]);b.code===0?Y("ok",h("gitIgnored")):Y("error",(b.stderr||h("svnFailed")).split(`
`)[0].slice(0,200))}catch(a){Y("error",a.message)}await n.afterMutate(e)}async function y1(t,e,n){try{await qf(t),Y("ok",h("gitAdded"))}catch(a){Y("error",a.message)}await n.afterMutate(e)}async function w1(t,e,n){const a=v1(t);if(await At({title:h("gitDiscardTitle"),message:h("gitDiscardMsg",{name:a})})){try{await Xf(t),Y("ok",h("gitDiscarded"))}catch(u){Y("error",u.message)}await n.afterMutate(e)}}async function b1(t,e,n){try{await uu(t),Y("ok",h("gitIgnored"))}catch(a){Y("error",a.message)}await n.afterMutate(e)}async function _1(t,e){try{const n=await Gf(t);e.showGitDiff(n.output??"")}catch(n){Y("error",n.message)}}function Dl(t,e,n){return _d(t)?[{separator:!0},{icon:"git",label:h("gitMenu"),children:[{label:h("gitPanel"),icon:"git",onClick:()=>n.openGitPanel()},{separator:!0},{label:h("gitAdd"),icon:"upload",onClick:()=>void y1(e,t,n)},{label:h("gitCommit"),icon:"check",onClick:()=>n.openCommit()},{label:h("gitDiff"),icon:"code",onClick:()=>void _1(e,n)},{label:h("gitDiscard"),icon:"undo",onClick:()=>void w1(e,t,n)},{label:h("gitIgnore"),icon:"eyeOff",onClick:()=>void b1(e,t,n)}]}]:[]}function Fl(t,e,n){return u1(t)?[{separator:!0},{icon:"svn",label:h("svnMenu"),children:[{label:h("svnPanel"),icon:"svn",onClick:()=>n.openSvnPanel()},{label:h("svnUpdate"),icon:"sync",onClick:()=>void h1(e,["update"])},{separator:!0},{label:h("svnAdd"),icon:"upload",onClick:()=>void m1(e,t,n)},{label:h("svnIgnore"),icon:"eyeOff",onClick:()=>void g1(e,t,n)}]}]:[]}const k1={key:0,class:"fw-quickcommit-empty"},x1={class:"fw-gitcommit-files-title fw-gitcommit-files-caption"},C1={class:"fw-gitcommit-files"},S1=["title"],$1={key:1,class:"fw-quickcommit-empty"},E1={key:2,class:"fw-gitcommit-error"},T1={class:"fw-gitconfig-field"},D1={class:"fw-gitconfig-field"},F1=ht({__name:"QuickCommit",props:{modelValue:{type:Boolean},dir:{}},emits:["update:modelValue","done"],setup(t,{emit:e}){const n=t,a=e,{t:r}=Mt(),u=g(null),v=g([]),d=g(""),f=g(""),w=gt({loading:!1,commit:!1,config:!1}),b=g(!1),k=g(""),O=g(""),M={"":"",untracked:"?",added:"A",modified:"M",deleted:"D"};function A(I){return M[I]}function V(){a("update:modelValue",!1)}async function H(){if(d.value="",f.value="",!n.dir){V();return}w.loading=!0;try{if(u.value=await Yo(n.dir),!u.value.inRepo){Y("error",r("gitNotRepo")),V();return}if(await C(),!v.value.length){Y("error",r("gitNoChanges")),V();return}}catch(I){Y("error",I.message),V()}finally{w.loading=!1}}async function C(){u.value=await Yo(n.dir),v.value=u.value?.staged??[]}async function Z(){const I=d.value.trim();if(!(!I||!u.value)){w.commit=!0,f.value="";try{await Kf(u.value.repo,I),a("done"),Y("ok",r("gitCommitted")),V()}catch(ve){f.value=ve.message}finally{w.commit=!1}}}const G=g(!1);Je(f,I=>{G.value=/user\.(name|email)|Author identity/i.test(I??"")});async function F(){try{const I=await du();k.value=I.name??"",O.value=I.email??""}catch{}b.value=!0}async function de(){w.config=!0;try{await pu(k.value,O.value),f.value="",b.value=!1,Y("ok",r("gitConfigSaved"))}catch(I){Y("error",I.message)}finally{w.config=!1}}return(I,ve)=>{const ye=Ts,be=Mn,le=cn;return l(),Xe(le,{"model-value":t.modelValue,title:s(r)("gitCommitTitle"),width:"520px",class:"fw-gitcommit-dialog","close-on-click-modal":!1,"onUpdate:modelValue":V,onOpen:H},{footer:se(()=>[m(be,{onClick:V},{default:se(()=>[ue(i(s(r)("cancel")),1)]),_:1}),m(be,{onClick:F},{default:se(()=>[ue(i(s(r)("gitConfig")),1)]),_:1}),m(be,{type:"primary",loading:w.commit,disabled:!d.value.trim(),onClick:Z},{default:se(()=>[ue(i(s(r)("gitCommitConfirm")),1)]),_:1},8,["loading","disabled"])]),default:se(()=>[w.loading?(l(),c("div",k1,i(s(r)("gitLoading")),1)):(l(),c(oe,{key:1},[m(ye,{modelValue:d.value,"onUpdate:modelValue":ve[0]||(ve[0]=re=>d.value=re),placeholder:s(r)("gitCommitPlaceholder"),type:"textarea",rows:3,class:"fw-gitcommit-msg",onKeydown:bt(xe(Z,["ctrl"]),["enter"])},null,8,["modelValue","placeholder","onKeydown"]),v.value.length?(l(),c(oe,{key:0},[o("div",x1,i(s(r)("gitCommitFiles",{n:v.value.length})),1),o("div",C1,[(l(!0),c(oe,null,Ae(v.value,re=>(l(),c("div",{key:re.path,class:"fw-gitcommit-file"},[o("span",{class:te(["fw-gitpanel-st","st-"+re.status])},i(A(re.status)),3),o("span",{class:"fw-gitpanel-path",title:re.path},i(re.path),9,S1)]))),128))])],64)):(l(),c("div",$1,i(s(r)("gitNoChanges")),1)),f.value?(l(),c("div",E1,[ue(i(f.value)+" ",1),G.value?(l(),Xe(be,{key:0,text:"",size:"small",onClick:F},{default:se(()=>[ue(i(s(r)("gitConfigTitle")),1)]),_:1})):N("",!0)])):N("",!0),m(le,{modelValue:b.value,"onUpdate:modelValue":ve[4]||(ve[4]=re=>b.value=re),title:s(r)("gitConfigTitle"),width:"420px",class:"fw-gitconfig-dialog","close-on-click-modal":!1},{footer:se(()=>[m(be,{onClick:ve[3]||(ve[3]=re=>b.value=!1)},{default:se(()=>[ue(i(s(r)("cancel")),1)]),_:1}),m(be,{type:"primary",loading:w.config,onClick:de},{default:se(()=>[ue(i(s(r)("gitConfigSave")),1)]),_:1},8,["loading"])]),default:se(()=>[o("div",T1,[o("label",null,i(s(r)("gitConfigName")),1),m(ye,{modelValue:k.value,"onUpdate:modelValue":ve[1]||(ve[1]=re=>k.value=re),size:"small",placeholder:s(r)("gitConfigNamePlaceholder")},null,8,["modelValue","placeholder"])]),o("div",D1,[o("label",null,i(s(r)("gitConfigEmail")),1),m(ye,{modelValue:O.value,"onUpdate:modelValue":ve[2]||(ve[2]=re=>O.value=re),size:"small",placeholder:s(r)("gitConfigEmailPlaceholder")},null,8,["modelValue","placeholder"])])]),_:1},8,["modelValue","title"])],64))]),_:1},8,["model-value","title"])}}}),Cd=xt(F1,[["__scopeId","data-v-e839f655"]]),Pl="",Nl=["%H","%h","%an","%ae","%at","%ar","%s","%P","%D"].join("%x1f"),P1=["%H","%h","%an","%ae","%at","%ar","%P","%D","%s","%b"].join("%x1f");function Sd(t){const e=t.trim();return e?e.split(",").map(n=>n.trim()).filter(Boolean).map(n=>n.startsWith("HEAD -> ")?{label:n.slice(8),kind:"head"}:n==="HEAD"?{label:"HEAD",kind:"head"}:n.startsWith("tag: ")?{label:n.slice(5),kind:"tag"}:n.includes("/")?{label:n,kind:"remote"}:{label:n,kind:"branch"}):[]}function Rl(t){const e=[];for(const n of t.split(`
`)){if(!n.trim())continue;const a=n.split(Pl);if(a.length<9)continue;const r=(a[7]??"").trim();e.push({hash:a[0],short:a[1],author:a[2],email:a[3],ts:Number(a[4])||0,date:a[5],subject:a[6],parents:r?r.split(/\s+/):[],refs:Sd(a[8]??"")})}return e}function N1(t){const e=t.split(Pl);if(e.length<9)return null;const n=(e[6]??"").trim();return{hash:e[0],short:e[1],author:e[2],email:e[3],ts:Number(e[4])||0,date:e[5],subject:e[8],parents:n?n.split(/\s+/):[],refs:Sd(e[7]??""),body:e.slice(9).join(Pl).trim()}}function R1(t){const e=[];for(const n of t.split(`
`)){if(!n.trim())continue;const a=n.split("	");if(a.length<3)continue;const[r,u]=a,v=a.slice(2).join("	");if(!v)continue;const d=r==="-"||u==="-";e.push({path:v,add:d?0:Number(r)||0,del:d?0:Number(u)||0,binary:d})}return e}function A1(t){const e=[],n=/^(\^?[0-9a-fA-F]{7,40})\s+\((.*?)\s+(\d{4}-\d{2}-\d{2})\s+(\d+)\)\s?(.*)$/;for(const a of t.split(`
`)){const r=n.exec(a);r&&e.push({hash:r[1].replace(/^\^/,""),author:r[2].trim(),date:r[3],line:Number(r[4])||0,text:r[5]??""})}return e}function M1(t){return t.startsWith("+++")||t.startsWith("---")?"head":t.startsWith("@@")?"meta":t.startsWith("diff ")||t.startsWith("index ")||t.startsWith("new file")||t.startsWith("deleted file")||t.startsWith("similarity index")||t.startsWith("rename ")||t.startsWith("Binary files")?"head":t.startsWith("+")?"add":t.startsWith("-")?"del":"ctx"}const gc=["#58a6ff","#f0883e","#3fb950","#bc8cff","#f778ba","#39c5cf","#d29922","#8b949e"];function $d(t){const e=[];let n=[],a=[],r=0;const u=v=>{for(;n.length<=v;)n.push(null),a.push(null)};for(const v of t){let d=n.indexOf(v.hash);if(d<0){let V=n.indexOf(null);V<0&&(V=n.length,u(V)),n[V]=v.hash,a[V]=r++,d=V}const f=a[d]??0,w=n.slice(),[b,...k]=v.parents;n[d]=null,a[d]=null,b!=null&&n.indexOf(b)<0&&(n[d]=b,a[d]=f);for(const V of k){if(n.includes(V))continue;let H=n.indexOf(null);H<0&&(H=n.length,u(H)),n[H]=V,a[H]=r++}const O=Math.max(w.length,n.length),M=[];for(let V=0;V<O;V++)V!==d&&(w[V]??null)!=null&&(n[V]??null)!=null&&M.push({lane:V,color:a[V]??0});const A=[];for(const V of v.parents){const H=n.indexOf(V);H>=0&&A.push({from:d,to:H,color:a[H]??f})}for(e.push({commit:v,lane:d,laneColor:f,topLine:w[d]!=null,through:M,bends:A,width:O});n.length&&n[n.length-1]===null;)n.pop(),a.pop()}return e}const $s=14;function Xn(t){return gc[t%gc.length]}const qt=gt({open:!1,kind:"git",dir:"",key:"",onDone:void 0});function _r(t){qt.kind=t?.kind==="svn"?"svn":"git",qt.dir=t?.dir??"",qt.key=t?.key??"",qt.onDone=t?.onDone,qt.open=!0}function yc(){qt.open=!1,qt.onDone=void 0}const O1={class:"fw-diff"},L1={key:0,class:"fw-diff-empty"},B1={class:"fw-diff-body"},I1={key:0,class:"fw-diff-empty"},Ha=5e3,j1=ht({__name:"GitDiffView",props:{lines:{},empty:{}},setup(t){const e=t,{t:n}=Mt(),a=B(()=>e.lines.length>Ha?e.lines.slice(0,Ha):e.lines),r=B(()=>e.lines.length>Ha);return(u,v)=>(l(),c("div",O1,[t.lines.length?(l(),c(oe,{key:1},[o("div",B1,[(l(!0),c(oe,null,Ae(a.value,(d,f)=>(l(),c("div",{key:f,class:te(["fw-diff-line","dl-"+s(M1)(d)])},i(d||" "),3))),128))]),r.value?(l(),c("div",I1,i(s(n)("gitDiffTruncated")),1)):N("",!0)],64)):(l(),c("div",L1,i(t.empty),1))]))}}),Ko=xt(j1,[["__scopeId","data-v-10e524c1"]]),V1={class:"fw-graph"},z1=["title","onClick"],U1=["width"],H1=["x1","x2","stroke"],W1=["x1","x2","y2","stroke"],G1=["x1","y1","x2","stroke"],q1=["d","stroke"],K1=["cx","cy","r","fill","stroke"],X1={class:"fw-graph-main"},Y1={class:"fw-graph-subject"},J1={key:0,class:"fw-graph-refs"},Q1={class:"fw-graph-meta"},Z1={class:"fw-graph-hash"},ey={key:0,class:"fw-graph-empty"},is=28,Is=8,ty=ht({__name:"GitGraphList",props:{rows:{},active:{},empty:{}},emits:["select"],setup(t){function e(v){return v*$s+$s/2}function n(v,d){const f=is/2,w=is*.82;return`M ${e(v)} ${f} C ${e(v)} ${w}, ${e(d)} ${w}, ${e(d)} ${is}`}function a(v){return v.through.filter(d=>d.lane<Is)}function r(v){return v.bends.filter(d=>d.from<Is&&d.to<Is)}function u(v){return v.commit.refs.some(d=>d.kind==="head")}return(v,d)=>(l(),c("div",V1,[(l(!0),c(oe,null,Ae(t.rows,f=>(l(),c("button",{key:f.commit.hash,class:te(["fw-graph-row",{active:f.commit.hash===t.active}]),title:f.commit.subject,onClick:w=>v.$emit("select",f.commit)},[o("span",{class:"fw-graph-lanes",style:_t({width:`${Math.min(f.width,Is)*s($s)}px`})},[(l(),c("svg",{width:Math.min(f.width,Is)*s($s),height:is,"aria-hidden":"true"},[(l(!0),c(oe,null,Ae(a(f),(w,b)=>(l(),c("line",{key:"t"+b,x1:e(w.lane),y1:0,x2:e(w.lane),y2:is,stroke:s(Xn)(w.color)},null,8,H1))),128)),f.topLine&&f.lane<Is?(l(),c("line",{key:0,x1:e(f.lane),y1:0,x2:e(f.lane),y2:is/2,stroke:s(Xn)(f.laneColor)},null,8,W1)):N("",!0),(l(!0),c(oe,null,Ae(r(f),(w,b)=>(l(),c(oe,{key:"b"+b},[w.from===w.to?(l(),c("line",{key:0,x1:e(w.from),y1:is/2,x2:e(w.to),y2:is,stroke:s(Xn)(w.color)},null,8,G1)):(l(),c("path",{key:1,d:n(w.from,w.to),fill:"none",stroke:s(Xn)(w.color)},null,8,q1))],64))),128)),f.lane<Is?(l(),c("circle",{key:1,cx:e(f.lane),cy:is/2,r:u(f)?4.5:3.5,fill:s(Xn)(f.laneColor),stroke:u(f)?"var(--dsh-bg, #0d1117)":"none","stroke-width":"1.5"},null,8,K1)):N("",!0)],8,U1))],4),o("span",X1,[o("span",Y1,i(f.commit.subject),1),f.commit.refs.length?(l(),c("span",J1,[(l(!0),c(oe,null,Ae(f.commit.refs,w=>(l(),c("span",{key:w.kind+w.label,class:te(["fw-graph-ref","rf-"+w.kind])},[m(ne,{name:w.kind==="tag"?"tag":"git",size:9},null,8,["name"]),ue(" "+i(w.label),1)],2))),128))])):N("",!0)]),o("span",Q1,[ue(i(f.commit.author),1),d[0]||(d[0]=o("span",{class:"fw-graph-dot"},"·",-1)),ue(i(f.commit.date),1)]),o("span",Z1,i(f.commit.short),1)],10,z1))),128)),t.rows.length?N("",!0):(l(),c("div",ey,i(t.empty),1))]))}}),ny=xt(ty,[["__scopeId","data-v-61d062db"]]),Rn=g([]),sy=g(!1),xn=gt({open:!1,kind:"git",url:""});function kr(t){xn.kind=t.kind,xn.url=t.url??"",xn.open=!0}function Wa(){xn.open=!1}async function po(){const t=await Qf().catch(()=>null);t&&(Rn.value=t.accounts),sy.value=!0}const oy={key:0,class:"fw-gp-shell"},iy={class:"fw-gp-head"},ay=["title"],ly=["title"],ry={class:"fw-gp-up-name"},cy=["title"],uy={class:"fw-gp-headacts"},dy={class:"fw-gp-body"},py={class:"fw-gp-rail"},fy=["onClick"],vy={class:"fw-gp-rail-txt"},hy={key:0,class:"fw-gp-rail-badge"},my={key:0,class:"fw-gp-rail-op"},gy={class:"fw-gp-content"},yy={key:0,class:"fw-gp-split"},wy={class:"fw-gp-list"},by={key:0,class:"fw-gp-empty"},_y={class:"fw-gp-groupbar"},ky={class:"fw-gp-groupname"},xy={class:"fw-gp-groupcount"},Cy=["title"],Sy=["title","onClick","onContextmenu"],$y={class:"fw-gp-path"},Ey={key:0,class:"fw-gp-dir"},Ty={class:"fw-gp-rowacts"},Dy=["title","onClick"],Fy=["title","onClick"],Py={class:"fw-gp-detail"},Ny={class:"fw-gp-detailhead"},Ry=["title"],Ay={class:"fw-gp-detailacts"},My=["title"],Oy=["title"],Ly=["title"],By=["title"],Iy={key:0,class:"fw-gp-empty"},jy={key:0,class:"fw-gp-empty"},Vy={key:1,class:"fw-gp-scroll"},zy={class:"fw-gp-hash"},Uy=["title"],Hy={class:"fw-gp-filemeta"},Wy={key:0,class:"fw-gp-empty"},Gy={key:1,class:"fw-gp-scroll fw-gp-blame"},qy=["title"],Ky=["title"],Xy={class:"fw-gp-blame-date"},Yy={class:"fw-gp-blame-no"},Jy={class:"fw-gp-blame-txt"},Qy={key:1,class:"fw-gp-split"},Zy={class:"fw-gp-list fw-gp-list-col"},ew={class:"fw-gp-listbar"},tw={class:"fw-gp-count"},nw={class:"fw-gp-detail"},sw={key:0,class:"fw-gp-empty"},ow={class:"fw-gp-detailhead"},iw=["title"],aw={class:"fw-gp-detailacts"},lw=["title"],rw=["title"],cw=["title"],uw=["title"],dw={class:"fw-gp-scroll"},pw={class:"fw-gp-cmeta"},fw={class:"fw-gp-crow"},vw={class:"k"},hw={class:"v mono"},mw={class:"fw-gp-crow"},gw={class:"k"},yw={class:"v"},ww={class:"fw-gp-crow"},bw={class:"k"},_w={class:"v"},kw={class:"fw-gp-crow"},xw={class:"k"},Cw={class:"v mono"},Sw={key:0,class:"fw-gp-crow"},$w={class:"k"},Ew={class:"v"},Tw={class:"fw-gp-cbody"},Dw={class:"fw-gp-cfiles"},Fw={key:0,class:"fw-gp-empty"},Pw=["title","onClick"],Nw={class:"fw-gp-path"},Rw={key:0,class:"fw-gp-dir"},Aw={class:"fw-gp-num"},Mw={class:"add"},Ow={class:"del"},Lw={key:2,class:"fw-gp-one"},Bw={class:"fw-gp-listbar"},Iw={class:"fw-gp-sec-title"},jw=["onContextmenu"],Vw={class:"fw-gp-st st-branch"},zw={class:"fw-gp-path"},Uw={key:0,class:"fw-gp-cur"},Hw={class:"fw-gp-rowacts"},Ww={class:"fw-gp-sec-title"},Gw=["onContextmenu"],qw={class:"fw-gp-st st-remote"},Kw={class:"fw-gp-path"},Xw={class:"fw-gp-rowacts"},Yw={key:3,class:"fw-gp-one"},Jw={class:"fw-gp-sectabs"},Qw={key:0,class:"fw-gp-sectab-n"},Zw={key:0,class:"fw-gp-sectab-n"},eb={class:"fw-gp-form"},tb={key:0,class:"fw-gp-empty"},nb=["title","onContextmenu"],sb={class:"fw-gp-st st-tag"},ob={class:"fw-gp-path"},ib={key:0,class:"fw-gp-badge"},ab={key:1,class:"fw-gp-badge fw-gp-badge-remote"},lb={key:0,class:"fw-gp-date"},rb=["title"],cb={class:"fw-gp-hash"},ub={class:"fw-gp-rowacts"},db={class:"fw-gp-form"},pb={key:0,class:"fw-gp-subject"},fb={class:"fw-gp-form"},vb={key:0,class:"fw-gp-empty"},hb={key:1,class:"fw-gp-empty"},mb=["title"],gb={class:"fw-gp-st st-tag"},yb={class:"fw-gp-path"},wb={class:"fw-gp-badge"},bb={key:0,class:"fw-gp-date"},_b={class:"fw-gp-rowacts"},kb={key:4,class:"fw-gp-one"},xb={class:"fw-gp-form"},Cb={key:0,class:"fw-gp-empty"},Sb=["onContextmenu"],$b={class:"fw-gp-st st-remote"},Eb={class:"fw-gp-path"},Tb=["title"],Db={key:5,class:"fw-gp-split"},Fb={class:"fw-gp-list"},Pb={class:"fw-gp-listbar"},Nb={key:0,class:"fw-gp-empty"},Rb=["title","onClick","onContextmenu"],Ab={class:"fw-gp-st st-stash"},Mb={class:"fw-gp-path"},Ob={class:"fw-gp-rowacts"},Lb=["title","onClick"],Bb={class:"fw-gp-detail"},Ib={class:"fw-gp-detailhead"},jb={class:"fw-gp-detailtitle"},Vb={key:6,class:"fw-gp-one fw-gp-cli-wrap"},zb={key:0,class:"fw-gp-cli-hint"},Ub={class:"fw-gp-cli-prompt"},Hb={class:"fw-gp-cli-cmd"},Wb={class:"fw-gp-cli-inputline"},Gb={class:"fw-gp-cli-prompt"},qb={key:0,class:"fw-gp-commitbar"},Kb={class:"fw-gp-commitacts"},Xb={class:"fw-gp-commitmeta"},Yb={key:0},Jb={key:1,class:"fw-gitpanel-empty"},Qb={key:1,class:"fw-norepo"},Zb={class:"fw-gp-cfgfield"},e_={class:"fw-gp-cfgfield"},t_={key:0,class:"fw-gp-cv"},n_={class:"fw-gp-cv-meta"},s_={class:"fw-gp-crow"},o_={class:"k"},i_={class:"v mono"},a_={class:"fw-gp-crow"},l_={class:"k"},r_={class:"v"},c_={class:"fw-gp-crow"},u_={class:"k"},d_={class:"v"},p_={class:"fw-gp-cbody fw-gp-cbody-clamp"},f_={class:"fw-gp-cv-body"},v_={class:"fw-gp-cv-files"},h_={key:0,class:"fw-gp-empty"},m_=["title","onClick"],g_={class:"fw-gp-path"},y_={key:0,class:"fw-gp-dir"},w_={class:"fw-gp-num"},b_={class:"add"},__={class:"del"},k_={class:"fw-gp-cv-diff"},x_={key:1,class:"fw-gp-empty"},C_={class:"fw-gp-cfgfield"},S_={class:"fw-gp-cfgfield"},$_={class:"fw-gp-cfgfield"},Ga=120,E_=ht({__name:"GitPanel",props:{modelValue:{type:Boolean},dir:{}},setup(t){const e=t,{t:n}=Mt(),a=[{key:"changes",icon:"fileText",label:"gitRailChanges"},{key:"history",icon:"clock",label:"gitRailHistory"},{key:"branches",icon:"git",label:"gitRailBranches"},{key:"tags",icon:"tag",label:"gitRailTags"},{key:"remotes",icon:"globe",label:"gitRailRemotes"},{key:"stash",icon:"stash",label:"gitRailStash"},{key:"cli",icon:"terminal",label:"gitRailCli"}],r=g("changes"),u=g(null),v=gt({refresh:!1,sync:"",op:!1,commit:!1,branch:!1,stash:!1,config:!1}),d=g(null),f=g("diff"),w=g([]),b=g(""),k=g([]),O=g([]),M=g(""),A=g([]),V=g(!1),H=g(""),C=g(null),Z=g([]),G=g(""),F=g([]),de=g(Ga),I=g([]),ve=g([]),ye=g([]),be=g(""),le=g(""),re=g(""),Ee=g(""),Ve=g(!1),we=g(!1),Ne=g(""),W=g(""),J=g(""),z=g("tags"),ee=g([]),me=g(""),je=g(!1),Ke=g(""),Ze=g(""),ge=g(""),_e=g(""),Ye=g([]),st=g(""),fe=g(""),Ce=g([]),qe=g(!1),ce=g(""),Ie=g(""),rt=g(null),yt=g(null),ut=g(""),it=g([]),Le=B(()=>u.value?.branch??""),U=B(()=>!!u.value?.inRepo&&!Le.value),R=B(()=>(u.value?.repo??"").replace(/\\/g,"/")),Q=B(()=>I.value.find(E=>E.current)??null),Te=B(()=>Q.value?.upstream??""),L=g(0),T=g(0),K=B(()=>Te.value?`${Te.value}  ↑${L.value} ↓${T.value}`:n("gitNoUpstream")),$=B(()=>U.value?n("gitHeadDetached"):n("gitStatusColon",{branch:Le.value})),q=B(()=>I.value.filter(E=>!E.name.includes("/"))),De=B(()=>I.value.filter(E=>E.name.includes("/"))),ae=B(()=>`${R.value}>git `),ct=B(()=>(u.value?.unstaged.length??0)+(u.value?.staged.length??0)>0),wt=B(()=>ye.value.length>0),Ot=B(()=>{const E=u.value;return E?[{key:"staged",label:n("gitGroupStaged"),list:E.staged},{key:"unstaged",label:n("gitGroupUnstaged"),list:E.unstaged},{key:"untracked",label:n("gitGroupUntracked"),list:E.untracked}].filter(S=>S.list.length>0):[]}),On=B(()=>d.value?f.value==="history"?`${n("gitFileHistory")} — ${d.value.file.path}`:f.value==="blame"?`${n("gitBlame")} — ${d.value.file.path}`:d.value.file.path:""),Gt=B(()=>b.value||n("gitDiffEmpty"));function ze(E){const S=u.value;return S?E==="changes"?S.staged.length+S.unstaged.length+S.untracked.length:E==="branches"?q.value.length:E==="tags"?ve.value.length:E==="remotes"?ye.value.length:E==="stash"?Ye.value.length:0:0}const Qe={"":"",untracked:"?",added:"A",modified:"M",deleted:"D"};function et(E){return Qe[E]}function at(E){const S=E.lastIndexOf("/");return S>0?E.slice(0,S+1):""}function Cn(E){const S=E.lastIndexOf("/");return S>=0?E.slice(S+1):E}function Sn(E){return E?new Date(E*1e3).toLocaleString():"—"}async function zt(E){const S=u.value?.repo;if(!S)throw new Error(n("gitNotRepo"));return Uo(S,E)}async function ot(E){const S=await zt(E);if(S.code!==0)throw new Error((S.stderr||S.stdout||n("gitOpFailed")).trim());return S.stdout}async function pt(E,S,$e){v.op=!0;try{return await E(),S&&Y("ok",n(S,$e)),await Ct(),!0}catch(nt){return Y("error",nt.message),!1}finally{v.op=!1}}async function Ct(E=!1){if(!(!e.dir||!wa(e.dir))){E||(v.refresh=!0);try{if(u.value=await Yo(e.dir),!u.value.inRepo)return;await Promise.all([$n(),gn(),Fs()]),d.value&&await Bn(d.value.file,d.value.group,!0)}catch(S){E||Y("error",S.message)}finally{E||(v.refresh=!1)}}}function Ln(){r.value="changes",Ct()}Je(()=>e.dir,()=>{e.modelValue&&Ct()});async function $n(){const E=await ot(["for-each-ref","--sort=-creatordate","--format=%(refname)%09%(objectname:short)%09%(upstream:short)%09%(HEAD)%09%(*objectname:short)%09%(creatordate:short)%09%(contents:subject)","refs/heads","refs/remotes","refs/tags"]).catch(()=>""),S=[],$e=[];for(const $t of E.split(`
`)){if(!$t.trim())continue;const[dt,j,lt,Yt,Vn,Bs,...mi]=$t.split("	");if(dt)if(dt.startsWith("refs/remotes/")){const gi=dt.slice(13);if(gi.endsWith("/HEAD"))continue;S.push({name:gi,hash:j??"",upstream:"",current:!1})}else dt.startsWith("refs/heads/")?S.push({name:dt.slice(11),hash:j??"",upstream:lt??"",current:Yt==="*"}):dt.startsWith("refs/tags/")&&$e.push({name:dt.slice(10),hash:Vn||j||"",upstream:"",current:!1,deref:Vn,date:Bs,subject:mi.join("	").trim()})}if(S.sort(($t,dt)=>$t.name.localeCompare(dt.name)),I.value=S,ve.value=$e,L.value=0,T.value=0,Te.value){const $t=await zt(["rev-list","--left-right","--count",`HEAD...${Te.value}`]).catch(()=>null);if($t&&$t.code===0){const[dt,j]=$t.stdout.trim().split(/\s+/);L.value=Number(dt)||0,T.value=Number(j)||0}}const nt=await zt(["remote","-v"]).catch(()=>null),jt=new Map;for(const $t of(nt?.stdout??"").split(`
`)){const[dt,j]=$t.split(/\s+/);dt&&j&&!jt.has(dt)&&jt.set(dt,j)}ye.value=[...jt].map(([$t,dt])=>({name:$t,url:dt})),await Jn()}async function Jn(){const E=new Set(ve.value.map(nt=>nt.name)),S=new Set,$e=[];for(const nt of ye.value){const jt=await zt(["ls-remote","--tags",nt.name]).catch(()=>null);if(!jt||jt.code!==0)continue;const $t=new Map;for(const dt of jt.stdout.split(`
`)){const j=/^([0-9a-f]+)\t(refs\/tags\/(.+))$/.exec(dt.trim());if(!j)continue;const lt=j[1],Yt=j[3];if(Yt.endsWith("^{}")){const Vn=Yt.slice(0,-3),Bs=$t.get(Vn);Bs?Bs.deref=lt:$t.set(Vn,{hash:lt,deref:lt})}else{const Vn=$t.get(Yt);Vn?Vn.hash=lt:$t.set(Yt,{hash:lt})}}for(const[dt,j]of $t)E.has(dt)||S.has(dt)||(S.add(dt),$e.push({name:dt,hash:j.deref||j.hash,upstream:"",current:!1,deref:j.deref,remoteOnly:!0,remote:nt.name}))}$e.length&&(ve.value=[...ve.value,...$e.sort((nt,jt)=>jt.name.localeCompare(nt.name,void 0,{numeric:!0}))])}async function gn(){const E=["log",`--max-count=${de.value}`,"--date-order"];V.value&&E.push("--all"),E.push(`--pretty=format:${Nl}`);const S=await ot(E).catch(()=>"");A.value=$d(Rl(S))}function En(E){V.value!==E&&(V.value=E,de.value=Ga,gn().catch(()=>{}))}async function Qs(){de.value+=Ga,await gn().catch(()=>{})}async function Fs(){const E=await zt(["stash","list"]).catch(()=>null);Ye.value=Tn(E?.stdout??"")}function Tn(E){const S=[];for(const $e of E.split(`
`)){const nt=/^(stash@\{[^}]+\}):\s*(.*)$/.exec($e.trim());nt&&S.push({ref:nt[1],full:$e.trim(),message:nt[2]||nt[1]})}return S}async function un(E,S){d.value={file:E,group:S},f.value="diff",await Bn(E,S)}async function Bn(E,S,$e=!1){b.value="";try{if(S==="untracked"){w.value=[],b.value=n("gitDiffUntrackedHint");return}const nt=["diff","--no-color",...S==="staged"?["--cached"]:[],"--",E.path];Gn(await ot(nt))}catch(nt){$e||Y("error",nt.message),w.value=[]}}function Gn(E){w.value=E?E.split(`
`):[]}async function Dn(){const E=d.value;if(E){f.value="history",k.value=[];try{const S=await ot(["log","--follow","--max-count=30",`--pretty=format:${Nl}`,"--",E.file.path]);k.value=Rl(S)}catch(S){Y("error",S.message)}}}async function yn(){const E=d.value;if(E){f.value="blame",O.value=[];try{const S=await ot(["blame","--date=short","-w","--",E.file.path]);O.value=A1(S)}catch(S){Y("error",S.message)}}}async function wn(E){await pt(async()=>{await ot(["add","--",E.path])})}async function Qn(E){await pt(async()=>{await ot(["restore","--staged","--",E.path])})}async function Fn(E){await At({title:n("gitDiscardTitle"),message:n("gitDiscardMsg",{name:E.path})})&&await pt(async()=>{await ot(["checkout","--",E.path])},"gitDiscarded")}async function D(E){const S=u.value?.repo;if(!S)return;const $e=`${S.replace(/\\/g,"/")}/${E.path}`.replace(/\/{2,}/g,"/");await pt(async()=>{await uu($e)},"gitIgnored")}async function he(){await pt(async()=>{await ot(["add","-A"])})}async function Be(){const E=M.value.trim(),S=u.value;if(!(!E||!S?.staged.length)){v.commit=!0;try{await ot(["commit","-m",E]),M.value="",Y("ok",n("gitCommitted")),await Ct()}catch($e){Y("error",$e.message)}finally{v.commit=!1}}}async function He(E){H.value=E.hash,G.value="",F.value=[],Z.value=[];try{const[S,$e]=await Promise.all([ot(["show","-s",`--format=${P1}`,E.hash]),ot(["diff-tree","--no-commit-id","--numstat","-r","--root",E.hash])]);C.value=N1(S)??{...E,body:""},Z.value=R1($e)}catch(S){Y("error",S.message)}}async function Re(E){const S=H.value;if(S){G.value=E.path,F.value=[];try{const $e=await ot(["show","--no-color","--format=",S,"--",E.path]);F.value=$e?$e.split(`
`):[]}catch($e){Y("error",$e.message)}Ve.value=!0}}async function Ge(E){try{await navigator.clipboard.writeText(E),Y("ok",n("gitCopied"))}catch{Y("error",n("gitOpFailed"))}}const{cmOpen:Tt,cmX:St,cmY:bn,cmItems:In,openMenu:Pn,closeMenu:Zs}=vn();function To(E,S,$e){const nt=[{label:n("gitDiff"),icon:"code",onClick:()=>void un(S,$e)},{label:n("gitFileHistory"),icon:"clock",disabled:$e==="untracked",onClick:()=>void dn(S,$e)},{label:n("gitBlame"),icon:"activity",disabled:$e==="untracked",onClick:()=>void Ps(S,$e)},{separator:!0},$e==="staged"?{label:n("gitUnstage"),icon:"undo",onClick:()=>void Qn(S)}:{label:n("gitAddShort"),icon:"plus",onClick:()=>void wn(S)},{label:n("gitIgnore"),icon:"eyeOff",disabled:$e!=="untracked",onClick:()=>void D(S)},{label:n("gitDiscard"),icon:"close",disabled:$e==="untracked",onClick:()=>void Fn(S)},{separator:!0},{label:n("gitCopyPath"),icon:"copy",onClick:()=>void Ge(S.path)}];Pn(E,nt)}async function dn(E,S){(!d.value||d.value.file.path!==E.path||d.value.group!==S)&&await un(E,S),await Dn()}async function Ps(E,S){(!d.value||d.value.file.path!==E.path||d.value.group!==S)&&await un(E,S),await yn()}function Ns(E,S){const $e=[{label:n("gitCheckout"),icon:"arrowRight",disabled:S.current,onClick:()=>void ns(S.name)},{label:n("gitMergeIntoCurrent"),icon:"merge",disabled:S.current,onClick:()=>void x(S.name)},{label:n("gitPushBranch"),icon:"upload",onClick:()=>void Se(S.name)},{separator:!0},{label:n("gitBranchRename"),icon:"edit",disabled:!S.current,onClick:()=>void pn()},{label:n("gitDelete"),icon:"trash",disabled:S.current,onClick:()=>void y(S.name)},{separator:!0},{label:n("gitCopyName"),icon:"copy",onClick:()=>void Ge(S.name)}];Pn(E,$e)}function Zn(E,S){Pn(E,[{label:n("gitCheckout"),icon:"arrowRight",onClick:()=>void jn(S.name)},{separator:!0},{label:n("gitCopyName"),icon:"copy",onClick:()=>void Ge(S.name)}])}function es(E,S){const $e=[{label:n("gitView"),icon:"eye",onClick:()=>Oe(S)}];S.remoteOnly?$e.push({label:n("gitTagPull"),icon:"download",onClick:()=>void gs(S)}):($e.push({label:n("gitPushBranch"),icon:"upload",onClick:()=>void Xt(S.name)}),$e.push({label:n("gitDelete"),icon:"trash",onClick:()=>void Pe(S.name)})),$e.push({separator:!0}),$e.push({label:n("gitCopyName"),icon:"copy",onClick:()=>void Ge(S.name)}),Pn(E,$e)}function Rs(E,S){Pn(E,[{label:n("gitRemoteSetUrl"),icon:"edit",onClick:()=>void ys(S)},{label:n("gitDelete"),icon:"trash",onClick:()=>void pi(S.name)},{separator:!0},{label:n("gitCopyUrl"),icon:"copy",onClick:()=>void Ge(S.url)}])}function eo(E,S){Pn(E,[{label:n("gitStashApply"),icon:"download",onClick:()=>void no(S.ref)},{label:n("gitStashPop"),icon:"upload",onClick:()=>void Fa(S.ref)},{label:n("gitStashDrop"),icon:"close",onClick:()=>void Pa(S.ref)},{separator:!0},{label:n("gitCopyMsg"),icon:"copy",onClick:()=>void Ge(S.message)}])}function Nn(E){Pn(E,[{label:n("gitResetSoft"),icon:"undo",onClick:()=>void tn("reset-soft")},{label:n("gitResetMixed"),icon:"undo",onClick:()=>void tn("reset-mixed")},{label:n("gitResetHard"),icon:"warning",onClick:()=>void tn("reset-hard")},{separator:!0},{label:n("gitRevert"),icon:"undo",onClick:()=>void tn("revert")},{label:n("gitCherryPick"),icon:"check",onClick:()=>void tn("cherry-pick")}])}function qn(){_r({kind:"git",dir:e.dir,key:Fe.key,onDone:()=>{Ct()}})}async function ts(){const E=H.value;if(!E)return;const $e=(await ds({title:n("gitBranchFromTitle"),placeholder:n("gitBranchFromPlaceholder")}))?.trim();$e&&await pt(async()=>{await ot(["branch",$e,E])},"gitBranchCreated",{name:$e})}async function As(){const E=H.value;!E||!await At({title:n("gitCheckoutCommit"),message:n("gitCheckoutCommitMsg",{hash:E.slice(0,7)})})||await pt(async()=>{await ot(["checkout",E])})}async function tn(E){const S=H.value;if(!S)return;const $e=S.slice(0,7);if(E==="reset-soft"||E==="reset-mixed"||E==="reset-hard"){if(E==="reset-hard"&&!await At({title:n("gitResetHard"),message:n("gitResetHardMsg")}))return;const nt=E==="reset-soft"?"--soft":E==="reset-mixed"?"--mixed":"--hard";await pt(async()=>{await ot(["reset",nt,S])},"gitResetDone",{hash:$e});return}if(E==="revert"){await pt(async()=>{await ot(["revert","--no-edit",S])},"gitRevertDone",{hash:$e});return}E==="cherry-pick"&&await pt(async()=>{await ot(["cherry-pick",S])},"gitCherryPicked",{hash:$e})}async function Kt(){const E=be.value.trim();if(!E)return;await pt(async()=>{await ot(["checkout","-b",E])},"gitBranchCreated",{name:E})&&(be.value="")}async function ns(E){await pt(async()=>{await ot(["checkout",E])})}async function jn(E){const S=E.split("/").slice(1).join("/")||E;await pt(async()=>{await ot(["checkout","-b",S,"--track",E])},"gitBranchCreated",{name:S})}async function pn(){const E=Le.value;if(!E||U.value)return;const $e=(await ds({title:n("gitBranchRenameTitle"),placeholder:n("gitBranchRenamePlaceholder"),initial:E}))?.trim();!$e||$e===E||await pt(async()=>{await ot(["branch","-m",$e])},"gitBranchRenamed",{name:$e})}async function y(E){await At({title:n("gitDelete"),message:n("gitBranchDeleteMsg",{name:E})})&&await pt(async()=>{await ot(["branch","-D",E])})}async function x(E){await pt(async()=>{await ot(["merge","--no-edit",E])},"gitMergeDone",{name:E})}async function Se(E){const S=!!I.value.find($e=>$e.name===E)?.upstream;await pt(async()=>{await ot(S?["push"]:["push","-u","origin",E])},"gitPushed",{name:E})}function pe(E){const S=[E.name];return E.subject&&S.push(E.subject),S.push(`${E.hash}${E.date?` · ${E.date}`:""}`),S.join(`
`)}function Oe(E){const S=E.hash;S&&(r.value="history",He({hash:S,short:S.slice(0,7),author:"",email:"",ts:E.date?Math.floor(Date.parse(E.date)/1e3):0,date:E.date??"",subject:E.subject??"",parents:[],refs:[{label:E.name,kind:"tag"}]}))}async function P(){const E=le.value.trim();if(!E)return;const S=re.value.trim(),$e=Ee.value.trim();await pt(async()=>{const jt=$e?["tag","-a",E,"-m",$e]:["tag",E];S&&jt.push(S),await ot(jt)},"gitTagCreated",{name:E})&&(le.value="",re.value="",Ee.value="")}async function Pe(E){await At({title:n("gitDelete"),message:n("gitTagDeleteMsg",{name:E})})&&await pt(async()=>{await ot(["tag","-d",E])},"gitTagDeleted",{name:E})}async function Xt(E){await pt(async()=>{await ot(["push","origin",E])},"gitTagPushed",{name:E})}async function Ut(){await pt(async()=>{await ot(["fetch","--tags"])},"gitTagFetchAllDone")}async function gs(E){const S=E.remote||"origin";await pt(async()=>{await ot(["fetch",S,`refs/tags/${E.name}:refs/tags/${E.name}`])},"gitTagPulled",{name:E.name})}function to(){Ne.value="",W.value="",J.value="",we.value=!0}function ss(E){z.value=E,E==="releases"&&Ms()}async function Ms(){const E=u.value?.repo;if(!(!E||je.value)){je.value=!0;try{const S=await Jf(E);ee.value=S.list,me.value=S.skipped??""}catch(S){me.value=S.message}finally{je.value=!1}}}async function Os(){const E=Ke.value.trim(),S=Ze.value.trim();if(!E||!S){Y("error",n("gitReleaseRequireMsg"));return}const $e=u.value?.repo;if(!$e){Y("error",n("gitNotRepo"));return}v.op=!0;try{const nt=await Gr($e,E,E,S);nt.url?(Y("ok",n("gitReleaseCreated",{url:nt.url})),Ze.value="",await Ms()):Y("info",n("gitReleaseGhSkip",{reason:nt.skipped??""}))}catch(nt){Y("error",nt.message)}finally{v.op=!1}}function di(E){E&&window.open(E,"_blank","noopener")}async function Da(){const E=Ne.value.trim(),S=J.value.trim(),$e=W.value.trim();if(!E||!S){Y("error",n("gitReleaseRequireMsg"));return}const nt=u.value?.repo;if(!nt){Y("error",n("gitNotRepo"));return}v.op=!0;try{if((await zt(["rev-parse","-q","--verify",`refs/tags/${E}`])).code!==0){const dt=["tag","-a",E,"-m",S];$e&&dt.push($e),await ot(dt)}await ot(["push","origin",E]);let $t="";try{const dt=await Gr(nt,E,E,S);dt.url?$t=dt.url:dt.skipped&&Y("info",n("gitReleaseGhSkip",{reason:dt.skipped}))}catch(dt){Y("info",n("gitReleaseGhSkip",{reason:dt.message}))}Y("ok",$t?`${n("gitReleased",{name:E})}  ${$t}`:n("gitReleased",{name:E})),we.value=!1,z.value==="releases"&&Ms(),await Ct()}catch(jt){Y("error",jt.message)}finally{v.op=!1}}async function os(){const E=ge.value.trim(),S=_e.value.trim();if(!E||!S)return;await pt(async()=>{await ot(["remote","add",E,S])},"gitRemoteAdded",{name:E})&&(ge.value="",_e.value="")}async function ys(E){const $e=(await ds({title:n("gitRemoteUrlTitle"),placeholder:n("gitRemoteUrlPlaceholder"),initial:E.url}))?.trim();!$e||$e===E.url||await pt(async()=>{await ot(["remote","set-url",E.name,$e])},"gitRemoteUrlSaved")}async function pi(E){await At({title:n("gitDelete"),message:n("gitRemoteRemoveMsg",{name:E})})&&await pt(async()=>{await ot(["remote","remove",E])},"gitRemoteRemoved",{name:E})}async function nn(){v.stash=!0;try{await ot(["stash","push","-m",st.value.trim()||"auto stash"]),st.value="",Y("ok",n("gitStashCreated")),await Ct()}catch(E){Y("error",E.message)}finally{v.stash=!1}}async function no(E){await pt(async()=>{await ot(["stash","apply",E])},"gitStashApplied")}async function Fa(E){await pt(async()=>{await ot(["stash","pop",E])},"gitStashPopped")}async function Pa(E){await At({title:n("gitStashDrop"),message:n("gitStashDropMsg",{ref:E})})&&await pt(async()=>{await ot(["stash","drop",E])},"gitStashDropped")}async function Ls(E){fe.value=E,Ce.value=[];try{const S=await ot(["stash","show","--no-color","-p",E]);Ce.value=S?S.split(`
`):[]}catch(S){Y("error",S.message)}}async function Do(E){v.sync=E;try{const S=await zt([E]);if(S.code!==0)throw new Error((S.stderr||S.stdout||n("gitOpFailed")).trim());Y("ok",(S.stderr||S.stdout||`${E} ok`).trim()),await Ct()}catch(S){Y("error",S.message)}finally{v.sync=""}}async function Fo(){const E=u.value?.repo??"";let S="";if(E){const $e=await Uo(E,["remote","get-url","origin"]).catch(()=>null);$e&&$e.code===0&&(S=($e.stdout.split(/\r?\n/)[0]??"").trim())}kr({kind:"git",url:S})}async function Po(){try{const E=await du();ce.value=E.name??"",Ie.value=E.email??""}catch{}qe.value=!0}async function fi(){v.config=!0;try{await pu(ce.value,Ie.value),qe.value=!1,Y("ok",n("gitConfigSaved"))}catch(E){Y("error",E.message)}finally{v.config=!1}}async function vi(){const E=ut.value.trim();if(E){ut.value="",it.value.push({kind:"cmd",text:E});try{const S=await zt(E.split(/\s+/));S.stdout&&it.value.push({kind:"out",text:S.stdout}),S.stderr&&it.value.push({kind:S.code===0?"out":"err",text:S.stderr}),!S.stdout&&!S.stderr&&it.value.push({kind:"out",text:`(exit ${S.code})`}),await Ct(!0)}catch(S){it.value.push({kind:"err",text:S.message})}}}function hi(){yt.value?.focus()}return(E,S)=>{const $e=Mn,nt=Ts,jt=fa,$t=pa,dt=cn;return l(),Xe(dt,{"model-value":t.modelValue,title:s(n)("gitPanelTitle"),width:"800px","align-center":"","modal-class":"fw-blur-overlay",class:"fw-gitpanel-dialog","close-on-click-modal":!1,"onUpdate:modelValue":S[33]||(S[33]=j=>E.$emit("update:modelValue",j)),onOpen:Ln},{default:se(()=>[u.value&&u.value.inRepo?(l(),c("div",oy,[o("div",iy,[o("span",{class:te(["fw-gp-branch",{detached:U.value}]),title:$.value},[m(ne,{name:"git",size:13}),o("b",null,i(U.value?s(n)("gitHeadDetached"):Le.value||"—"),1)],10,ay),o("span",{class:"fw-gp-up",title:K.value},[Te.value?(l(),c(oe,{key:0},[o("span",{class:te(["fw-gp-up-i",{zero:!L.value}])},"↑"+i(L.value),3),o("span",{class:te(["fw-gp-up-i",{zero:!T.value}])},"↓"+i(T.value),3),o("span",ry,i(Te.value),1)],64)):(l(),c(oe,{key:1},[ue(i(s(n)("gitNoUpstream")),1)],64))],8,ly),o("span",{class:"fw-gp-repo",title:u.value.repo},i(s(n)("gitLocalRepo"))+i(R.value),9,cy),o("span",uy,[m($e,{size:"small",loading:v.sync==="fetch",onClick:S[0]||(S[0]=j=>Do("fetch"))},{default:se(()=>[ue(i(s(n)("gitFetch")),1)]),_:1},8,["loading"]),m($e,{size:"small",loading:v.sync==="pull",onClick:S[1]||(S[1]=j=>Do("pull"))},{default:se(()=>[ue(i(s(n)("gitPull")),1)]),_:1},8,["loading"]),m($e,{size:"small",loading:v.sync==="push",onClick:S[2]||(S[2]=j=>Do("push"))},{default:se(()=>[ue(i(s(n)("gitPush")),1)]),_:1},8,["loading"]),m($e,{size:"small",disabled:v.refresh,title:s(n)("gitRefresh"),onClick:S[3]||(S[3]=j=>Ct())},{default:se(()=>[o("span",{class:te(["fw-gp-refresh-ic",{spin:v.refresh}])},[m(ne,{name:"refresh",size:13})],2)]),_:1},8,["disabled","title"]),m($e,{size:"small",title:s(n)("gitConfig"),onClick:Po},{default:se(()=>[m(ne,{name:"gear",size:13})]),_:1},8,["title"]),m($e,{size:"small",title:s(n)("accTitle"),onClick:Fo},{default:se(()=>[m(ne,{name:"shield",size:13})]),_:1},8,["title"])])]),o("div",dy,[o("nav",py,[(l(),c(oe,null,Ae(a,j=>o("button",{key:j.key,class:te(["fw-gp-rail-btn",{active:r.value===j.key}]),onClick:lt=>r.value=j.key},[m(ne,{name:j.icon,size:14},null,8,["name"]),o("span",vy,i(s(n)(j.label)),1),ze(j.key)?(l(),c("span",hy,i(ze(j.key)),1)):N("",!0)],10,fy)),64)),S[35]||(S[35]=o("span",{class:"fw-gp-rail-fill"},null,-1)),v.op?(l(),c("div",my,[S[34]||(S[34]=o("span",{class:"fw-gp-spin"},null,-1)),ue(i(s(n)("gitOpRunning")),1)])):N("",!0)]),o("section",gy,[r.value==="changes"?(l(),c("div",yy,[o("div",wy,[Ot.value.length?N("",!0):(l(),c("div",by,i(s(n)("gitClean")),1)),(l(!0),c(oe,null,Ae(Ot.value,j=>(l(),c(oe,{key:j.key},[o("div",_y,[o("span",ky,i(j.label),1),o("span",xy,i(j.list.length),1),j.key==="unstaged"?(l(),c("button",{key:0,class:"fw-gp-mini",title:s(n)("gitStageAll"),onClick:he},[m(ne,{name:"plus",size:11})],8,Cy)):N("",!0)]),(l(!0),c(oe,null,Ae(j.list,lt=>(l(),c("div",{key:j.key+lt.path,class:te(["fw-gp-row",{active:d.value&&d.value.file.path===lt.path&&d.value.group===j.key}]),title:lt.path,onClick:Yt=>un(lt,j.key),onContextmenu:xe(Yt=>To(Yt,lt,j.key),["prevent","stop"])},[o("span",{class:te(["fw-gp-st","st-"+lt.status])},i(et(lt.status)),3),o("span",$y,[at(lt.path)?(l(),c("span",Ey,i(at(lt.path)),1)):N("",!0),ue(i(Cn(lt.path)),1)]),o("span",Ty,[j.key!=="staged"?(l(),c("button",{key:0,class:"fw-gp-mini",title:s(n)("gitAddShort"),onClick:xe(Yt=>wn(lt),["stop"])},[m(ne,{name:"plus",size:11})],8,Dy)):(l(),c("button",{key:1,class:"fw-gp-mini",title:s(n)("gitUnstage"),onClick:xe(Yt=>Qn(lt),["stop"])},[m(ne,{name:"undo",size:11})],8,Fy))])],42,Sy))),128))],64))),128))]),o("div",Py,[o("div",Ny,[o("span",{class:"fw-gp-detailtitle",title:On.value},i(On.value),9,Ry),o("span",Ay,[d.value&&f.value!=="diff"?(l(),c("button",{key:0,class:"fw-gp-mini",title:s(n)("gitDiff"),onClick:S[4]||(S[4]=j=>un(d.value.file,d.value.group))},[m(ne,{name:"code",size:12})],8,My)):N("",!0),d.value&&f.value!=="history"?(l(),c("button",{key:1,class:"fw-gp-mini",title:s(n)("gitFileHistory"),onClick:Dn},[m(ne,{name:"clock",size:12})],8,Oy)):N("",!0),d.value&&f.value!=="blame"?(l(),c("button",{key:2,class:"fw-gp-mini",title:s(n)("gitBlame"),onClick:yn},[m(ne,{name:"activity",size:12})],8,Ly)):N("",!0),d.value?(l(),c("button",{key:3,class:"fw-gp-mini",title:s(n)("gitCopyPath"),onClick:S[5]||(S[5]=j=>Ge(d.value.file.path))},[m(ne,{name:"copy",size:12})],8,By)):N("",!0)])]),d.value?f.value==="diff"?(l(),Xe(Ko,{key:1,lines:w.value,empty:Gt.value},null,8,["lines","empty"])):f.value==="history"?(l(),c(oe,{key:2},[k.value.length?(l(),c("div",Vy,[(l(!0),c(oe,null,Ae(k.value,j=>(l(),c("div",{key:j.hash,class:"fw-gp-filerow"},[o("span",zy,i(j.short),1),o("span",{class:"fw-gp-filesub",title:j.subject},i(j.subject),9,Uy),o("span",Hy,i(j.author)+" · "+i(j.date),1)]))),128))])):(l(),c("div",jy,i(s(n)("gitFileHistoryEmpty")),1))],64)):(l(),c(oe,{key:3},[O.value.length?(l(),c("div",Gy,[(l(!0),c(oe,null,Ae(O.value,(j,lt)=>(l(),c("div",{key:lt,class:"fw-gp-blame-row"},[o("span",{class:"fw-gp-blame-hash",title:j.hash},i(j.hash.slice(0,7)),9,qy),o("span",{class:"fw-gp-blame-author",title:j.author},i(j.author),9,Ky),o("span",Xy,i(j.date),1),o("span",Yy,i(j.line),1),o("span",Jy,i(j.text),1)]))),128))])):(l(),c("div",Wy,i(s(n)("gitBlameEmpty")),1))],64)):(l(),c("div",Iy,i(s(n)("gitSelectFile")),1))])])):r.value==="history"?(l(),c("div",Qy,[o("div",Zy,[o("div",ew,[o("button",{class:te(["fw-gp-tab",{on:V.value}]),onClick:S[6]||(S[6]=j=>En(!0))},i(s(n)("gitHistoryAll")),3),o("button",{class:te(["fw-gp-tab",{on:!V.value}]),onClick:S[7]||(S[7]=j=>En(!1))},i(s(n)("gitHistoryCurrent")),3),S[36]||(S[36]=o("span",{class:"fw-gp-spacer"},null,-1)),o("span",tw,i(A.value.length),1),A.value.length>=de.value?(l(),c("button",{key:0,class:"fw-gp-tab",onClick:Qs},i(s(n)("gitLoadMore")),1)):N("",!0)]),m(ny,{rows:A.value,active:H.value,empty:s(n)("gitLogEmpty"),onSelect:He},null,8,["rows","active","empty"])]),o("div",nw,[C.value?(l(),c(oe,{key:1},[o("div",ow,[o("span",{class:"fw-gp-detailtitle",title:C.value.subject},i(s(n)("gitCommitDetail")),9,iw),o("span",aw,[o("button",{class:"fw-gp-mini",title:s(n)("gitCopyHash"),onClick:S[8]||(S[8]=j=>Ge(C.value.hash))},[m(ne,{name:"copy",size:12})],8,lw),o("button",{class:"fw-gp-mini",title:s(n)("gitBranchFrom"),onClick:ts},[m(ne,{name:"git",size:12})],8,rw),o("button",{class:"fw-gp-mini",title:s(n)("gitCheckoutCommit"),onClick:As},[m(ne,{name:"check",size:12})],8,cw),o("button",{class:"fw-gp-mini",title:s(n)("gitMenu"),onClick:S[9]||(S[9]=xe(j=>Nn(j),["stop"]))},[m(ne,{name:"sort",size:12})],8,uw)])]),o("div",dw,[o("div",pw,[o("div",fw,[o("span",vw,i(s(n)("gitCommitHash")),1),o("span",hw,i(C.value.hash),1)]),o("div",mw,[o("span",gw,i(s(n)("gitCommitAuthor")),1),o("span",yw,i(C.value.author)+" <"+i(C.value.email)+">",1)]),o("div",ww,[o("span",bw,i(s(n)("gitCommitDate")),1),o("span",_w,i(Sn(C.value.ts))+" · "+i(C.value.date),1)]),o("div",kw,[o("span",xw,i(s(n)("gitCommitParents")),1),o("span",Cw,i(C.value.parents.map(j=>j.slice(0,7)).join(" ")||"—"),1)]),C.value.refs.length?(l(),c("div",Sw,[o("span",$w,i(s(n)("gitCommitRefs")),1),o("span",Ew,[(l(!0),c(oe,null,Ae(C.value.refs,j=>(l(),c("span",{key:j.label,class:te(["fw-gp-refchip","rf-"+j.kind])},i(j.label),3))),128))])])):N("",!0)]),o("pre",Tw,i(C.value.body||C.value.subject),1),o("div",Dw,i(s(n)("gitCommitChangedFiles",{n:Z.value.length})),1),Z.value.length?N("",!0):(l(),c("div",Fw,i(s(n)("gitCommitNoFiles")),1)),(l(!0),c(oe,null,Ae(Z.value,j=>(l(),c("div",{key:j.path,class:te(["fw-gp-row",{active:G.value===j.path}]),title:s(n)("gitCommitOpenDiff",{path:j.path}),onClick:lt=>Re(j)},[o("span",Nw,[at(j.path)?(l(),c("span",Rw,i(at(j.path)),1)):N("",!0),ue(i(Cn(j.path)),1)]),o("span",Aw,[o("span",Mw,"+"+i(j.add),1),o("span",Ow,"-"+i(j.del),1)])],10,Pw))),128))])],64)):(l(),c("div",sw,i(s(n)("gitSelectCommit")),1))])])):r.value==="branches"?(l(),c("div",Lw,[o("div",Bw,[m(nt,{modelValue:be.value,"onUpdate:modelValue":S[10]||(S[10]=j=>be.value=j),size:"small",placeholder:s(n)("gitBranchNew"),onKeydown:bt(Kt,["enter"])},null,8,["modelValue","placeholder"]),m($e,{size:"small",type:"primary",loading:v.branch,onClick:Kt},{default:se(()=>[ue(i(s(n)("gitBranchCreateAndSwitch")),1)]),_:1},8,["loading"]),m($e,{size:"small",disabled:U.value,onClick:pn},{default:se(()=>[ue(i(s(n)("gitBranchRename")),1)]),_:1},8,["disabled"])]),o("div",Iw,i(s(n)("gitBranchLocalGroup")),1),(l(!0),c(oe,null,Ae(q.value,j=>(l(),c("div",{key:j.name,class:te(["fw-gp-row",{active:j.current}]),onContextmenu:xe(lt=>Ns(lt,j),["prevent","stop"])},[o("span",Vw,[m(ne,{name:"git",size:12})]),o("span",zw,[ue(i(j.name),1),j.current?(l(),c("span",Uw," • "+i(s(n)("gitBranchCurrent")),1)):N("",!0)]),o("span",Hw,[j.current?(l(),Xe($e,{key:1,text:"",size:"small",onClick:lt=>Se(j.name)},{default:se(()=>[ue(i(s(n)("gitPushBranch")),1)]),_:1},8,["onClick"])):(l(),Xe($e,{key:0,text:"",size:"small",onClick:lt=>ns(j.name)},{default:se(()=>[ue(i(s(n)("gitCheckout")),1)]),_:1},8,["onClick"]))])],42,jw))),128)),De.value.length?(l(),c(oe,{key:0},[o("div",Ww,i(s(n)("gitBranchRemoteGroup")),1),(l(!0),c(oe,null,Ae(De.value,j=>(l(),c("div",{key:j.name,class:"fw-gp-row",onContextmenu:xe(lt=>Zn(lt,j),["prevent","stop"])},[o("span",qw,[m(ne,{name:"globe",size:12})]),o("span",Kw,i(j.name),1),o("span",Xw,[m($e,{text:"",size:"small",onClick:lt=>jn(j.name)},{default:se(()=>[ue(i(s(n)("gitCheckout")),1)]),_:1},8,["onClick"])])],40,Gw))),128))],64)):N("",!0)])):r.value==="tags"?(l(),c("div",Yw,[o("div",Jw,[o("button",{class:te(["fw-gp-sectab",{active:z.value==="tags"}]),onClick:S[11]||(S[11]=j=>ss("tags"))},[ue(i(s(n)("gitTabTags")),1),ve.value.length?(l(),c("span",Qw,i(ve.value.length),1)):N("",!0)],2),o("button",{class:te(["fw-gp-sectab",{active:z.value==="releases"}]),onClick:S[12]||(S[12]=j=>ss("releases"))},[ue(i(s(n)("gitTabReleases")),1),ee.value.length?(l(),c("span",Zw,i(ee.value.length),1)):N("",!0)],2)]),z.value==="tags"?(l(),c(oe,{key:0},[o("div",eb,[m(nt,{modelValue:le.value,"onUpdate:modelValue":S[13]||(S[13]=j=>le.value=j),size:"small",class:"fw-gp-in-name",placeholder:s(n)("gitTagNamePlaceholder")},null,8,["modelValue","placeholder"]),m(nt,{modelValue:re.value,"onUpdate:modelValue":S[14]||(S[14]=j=>re.value=j),size:"small",class:"fw-gp-in-target",placeholder:s(n)("gitTagTargetPlaceholder")},null,8,["modelValue","placeholder"]),m(nt,{modelValue:Ee.value,"onUpdate:modelValue":S[15]||(S[15]=j=>Ee.value=j),size:"small",class:"fw-gp-in-msg",placeholder:s(n)("gitTagMessagePlaceholder")},null,8,["modelValue","placeholder"]),m($e,{size:"small",type:"primary",disabled:!le.value.trim(),onClick:P},{default:se(()=>[ue(i(s(n)("gitTagCreate")),1)]),_:1},8,["disabled"]),m($e,{size:"small",loading:v.op,disabled:!wt.value,title:wt.value?"":s(n)("gitTagNoRemote"),onClick:Ut},{default:se(()=>[ue(i(s(n)("gitTagFetchAll")),1)]),_:1},8,["loading","disabled","title"])]),ve.value.length?N("",!0):(l(),c("div",tb,i(s(n)("gitTagEmpty")),1)),(l(!0),c(oe,null,Ae(ve.value,j=>(l(),c("div",{key:j.name,class:"fw-gp-row",title:pe(j),onContextmenu:xe(lt=>es(lt,j),["prevent","stop"])},[o("span",sb,[m(ne,{name:"tag",size:12})]),o("span",ob,[ue(i(j.name)+" ",1),j.deref?(l(),c("span",ib,i(s(n)("gitTagAnnotated")),1)):N("",!0),j.remoteOnly?(l(),c("span",ab,i(s(n)("gitTagRemoteOnly")),1)):N("",!0)]),j.date?(l(),c("span",lb,i(j.date),1)):N("",!0),j.subject?(l(),c("span",{key:1,class:"fw-gp-subject",title:j.subject},i(j.subject),9,rb)):N("",!0),o("span",cb,i(j.hash),1),o("span",ub,[m($e,{text:"",size:"small",onClick:lt=>Oe(j)},{default:se(()=>[ue(i(s(n)("gitView")),1)]),_:1},8,["onClick"])])],40,nb))),128))],64)):(l(),c(oe,{key:1},[o("div",db,[m($e,{size:"small",type:"primary",disabled:!wt.value,title:wt.value?"":s(n)("gitTagNoRemote"),onClick:to},{default:se(()=>[ue(i(s(n)("gitReleaseBtn")),1)]),_:1},8,["disabled","title"]),m($e,{size:"small",loading:je.value,onClick:Ms},{default:se(()=>[ue(i(s(n)("gitRefresh")),1)]),_:1},8,["loading"]),wt.value?N("",!0):(l(),c("span",pb,i(s(n)("gitTagNoRemote")),1))]),o("div",fb,[m($t,{modelValue:Ke.value,"onUpdate:modelValue":S[16]||(S[16]=j=>Ke.value=j),size:"small",class:"fw-gp-in-name",placeholder:s(n)("gitReleaseChooseTag"),filterable:""},{default:se(()=>[(l(!0),c(oe,null,Ae(ve.value,j=>(l(),Xe(jt,{key:j.name,label:j.name,value:j.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"]),m(nt,{modelValue:Ze.value,"onUpdate:modelValue":S[17]||(S[17]=j=>Ze.value=j),size:"small",type:"textarea",rows:2,resize:"none",placeholder:s(n)("gitReleaseNotesPlaceholder")},null,8,["modelValue","placeholder"]),m($e,{size:"small",disabled:!Ke.value.trim()||!Ze.value.trim(),onClick:Os},{default:se(()=>[ue(i(s(n)("gitReleaseCreateForTag")),1)]),_:1},8,["disabled"])]),me.value?(l(),c("div",vb,i(s(n)("gitReleaseLoadSkip",{reason:me.value})),1)):!ee.value.length&&!je.value?(l(),c("div",hb,i(s(n)("gitReleaseEmpty")),1)):N("",!0),(l(!0),c(oe,null,Ae(ee.value,j=>(l(),c("div",{key:j.url||j.tag,class:"fw-gp-row",title:j.name},[o("span",gb,[m(ne,{name:"tag",size:12})]),o("span",yb,[ue(i(j.name||j.tag)+" ",1),o("span",wb,i(j.tag),1)]),j.date?(l(),c("span",bb,i(j.date),1)):N("",!0),o("span",_b,[m($e,{text:"",size:"small",onClick:lt=>di(j.url)},{default:se(()=>[ue(i(s(n)("gitReleaseOpen")),1)]),_:1},8,["onClick"])])],8,mb))),128))],64))])):r.value==="remotes"?(l(),c("div",kb,[o("div",xb,[m(nt,{modelValue:ge.value,"onUpdate:modelValue":S[18]||(S[18]=j=>ge.value=j),size:"small",class:"fw-gp-in-name",placeholder:s(n)("gitRemoteNamePlaceholder")},null,8,["modelValue","placeholder"]),m(nt,{modelValue:_e.value,"onUpdate:modelValue":S[19]||(S[19]=j=>_e.value=j),size:"small",class:"fw-gp-in-url",placeholder:s(n)("gitRemoteUrlPlaceholder")},null,8,["modelValue","placeholder"]),m($e,{size:"small",type:"primary",disabled:!ge.value.trim()||!_e.value.trim(),onClick:os},{default:se(()=>[ue(i(s(n)("gitRemoteAdd")),1)]),_:1},8,["disabled"])]),ye.value.length?N("",!0):(l(),c("div",Cb,i(s(n)("gitRemoteEmpty")),1)),(l(!0),c(oe,null,Ae(ye.value,j=>(l(),c("div",{key:j.name,class:"fw-gp-row",onContextmenu:xe(lt=>Rs(lt,j),["prevent","stop"])},[o("span",$b,[m(ne,{name:"globe",size:12})]),o("span",Eb,i(j.name),1),o("span",{class:"fw-gp-remote-url",title:j.url},i(j.url),9,Tb)],40,Sb))),128))])):r.value==="stash"?(l(),c("div",Db,[o("div",Fb,[o("div",Pb,[m(nt,{modelValue:st.value,"onUpdate:modelValue":S[20]||(S[20]=j=>st.value=j),size:"small",placeholder:s(n)("gitStashPlaceholder"),onKeydown:bt(nn,["enter"])},null,8,["modelValue","placeholder"]),m($e,{size:"small",type:"primary",loading:v.stash,disabled:!ct.value,onClick:nn},{default:se(()=>[ue(i(s(n)("gitStashNew")),1)]),_:1},8,["loading","disabled"])]),Ye.value.length?N("",!0):(l(),c("div",Nb,i(ct.value?s(n)("gitStashEmpty"):s(n)("gitStashNone")),1)),(l(!0),c(oe,null,Ae(Ye.value,j=>(l(),c("div",{key:j.ref,class:te(["fw-gp-row",{active:fe.value===j.ref}]),title:j.full,onClick:lt=>Ls(j.ref),onContextmenu:xe(lt=>eo(lt,j),["prevent","stop"])},[o("span",Ab,[m(ne,{name:"stash",size:12})]),o("span",Mb,i(j.message),1),o("span",Ob,[o("button",{class:"fw-gp-mini",title:s(n)("gitStashApply"),onClick:xe(lt=>no(j.ref),["stop"])},[m(ne,{name:"download",size:11})],8,Lb)])],42,Rb))),128))]),o("div",Bb,[o("div",Ib,[o("span",jb,i(fe.value||s(n)("gitStashView")),1)]),m(Ko,{lines:Ce.value,empty:s(n)("gitStashEmpty")},null,8,["lines","empty"])])])):r.value==="cli"?(l(),c("div",Vb,[o("div",{ref_key:"cliRef",ref:rt,class:"fw-gp-cli",onClick:hi},[it.value.length?N("",!0):(l(),c("div",zb,i(s(n)("gitCliPlaceholder")),1)),(l(!0),c(oe,null,Ae(it.value,(j,lt)=>(l(),c("div",{key:lt,class:te(["fw-gp-cli-line","kind-"+j.kind])},[j.kind==="cmd"?(l(),c(oe,{key:0},[o("span",Ub,i(ae.value),1),o("span",Hb,i(j.text),1)],64)):(l(),c(oe,{key:1},[ue(i(j.text),1)],64))],2))),128)),o("div",Wb,[o("span",Gb,i(ae.value),1),kt(o("input",{ref_key:"cliInputRef",ref:yt,"onUpdate:modelValue":S[21]||(S[21]=j=>ut.value=j),class:"fw-gp-cli-inner",spellcheck:"false",autocomplete:"off",onKeydown:bt(vi,["enter"])},null,544),[[Lt,ut.value]])])],512)])):N("",!0)])]),r.value==="changes"?(l(),c("div",qb,[m(nt,{modelValue:M.value,"onUpdate:modelValue":S[22]||(S[22]=j=>M.value=j),type:"textarea",rows:2,resize:"none",placeholder:s(n)("gitCommitMsgPlaceholder"),onKeydown:bt(xe(Be,["ctrl","prevent"]),["enter"])},null,8,["modelValue","placeholder","onKeydown"]),o("div",Kb,[o("span",Xb,[u.value.staged.length?(l(),c(oe,{key:0},[ue(i(s(n)("gitCommitFiles",{n:u.value.staged.length})),1)],64)):(l(),c(oe,{key:1},[ue(i(s(n)("gitNoChanges")),1)],64))]),m($e,{size:"small",disabled:!u.value.unstaged.length&&!u.value.untracked.length,onClick:he},{default:se(()=>[ue(i(s(n)("gitStageAll")),1)]),_:1},8,["disabled"]),m($e,{size:"small",type:"primary",loading:v.commit,disabled:!u.value.staged.length||!M.value.trim(),onClick:Be},{default:se(()=>[ue(i(s(n)("gitCommit")),1),u.value.staged.length?(l(),c("span",Yb,"（"+i(u.value.staged.length)+"）",1)):N("",!0)]),_:1},8,["loading","disabled"])])])):N("",!0)])):(l(),c("div",Jb,[v.refresh?(l(),c(oe,{key:0},[S[37]||(S[37]=o("span",{class:"fw-gp-spin"},null,-1)),ue(i(s(n)("gitOpRunning")),1)],64)):(l(),c("div",Qb,[m(ne,{name:"git",size:28}),o("span",null,i(s(n)("gitNotRepo")),1),o("button",{class:"fw-retry",onClick:qn},i(s(n)("gitCloneHere")),1)]))])),m(dt,{"model-value":qe.value,title:s(n)("gitConfigTitle"),width:"420px","align-center":"","modal-class":"fw-blur-overlay",class:"fw-gitconfig-dialog","close-on-click-modal":!1,"onUpdate:modelValue":S[26]||(S[26]=j=>qe.value=j)},{footer:se(()=>[m($e,{onClick:S[25]||(S[25]=j=>qe.value=!1)},{default:se(()=>[ue(i(s(n)("cancel")),1)]),_:1}),m($e,{type:"primary",loading:v.config,onClick:fi},{default:se(()=>[ue(i(s(n)("gitConfigSave")),1)]),_:1},8,["loading"])]),default:se(()=>[o("div",Zb,[o("label",null,i(s(n)("gitConfigName")),1),m(nt,{modelValue:ce.value,"onUpdate:modelValue":S[23]||(S[23]=j=>ce.value=j),size:"small",placeholder:s(n)("gitConfigNamePlaceholder")},null,8,["modelValue","placeholder"])]),o("div",e_,[o("label",null,i(s(n)("gitConfigEmail")),1),m(nt,{modelValue:Ie.value,"onUpdate:modelValue":S[24]||(S[24]=j=>Ie.value=j),size:"small",placeholder:s(n)("gitConfigEmailPlaceholder")},null,8,["modelValue","placeholder"])])]),_:1},8,["model-value","title"]),m(dt,{modelValue:Ve.value,"onUpdate:modelValue":S[27]||(S[27]=j=>Ve.value=j),title:s(n)("gitCommitViewTitle"),width:"800px","align-center":"","modal-class":"fw-blur-overlay",class:"fw-gp-commitview-dialog","close-on-click-modal":!1},{default:se(()=>[C.value?(l(),c("div",t_,[o("div",n_,[o("div",s_,[o("span",o_,i(s(n)("gitCommitHash")),1),o("span",i_,i(C.value.hash),1)]),o("div",a_,[o("span",l_,i(s(n)("gitCommitAuthor")),1),o("span",r_,i(C.value.author)+" <"+i(C.value.email)+">",1)]),o("div",c_,[o("span",u_,i(s(n)("gitCommitDate")),1),o("span",d_,i(Sn(C.value.ts))+" · "+i(C.value.date),1)]),o("pre",p_,i(C.value.body||C.value.subject),1)]),o("div",f_,[o("div",v_,[Z.value.length?N("",!0):(l(),c("div",h_,i(s(n)("gitCommitNoFiles")),1)),(l(!0),c(oe,null,Ae(Z.value,j=>(l(),c("div",{key:j.path,class:te(["fw-gp-row",{active:G.value===j.path}]),title:j.path,onClick:lt=>Re(j)},[o("span",g_,[at(j.path)?(l(),c("span",y_,i(at(j.path)),1)):N("",!0),ue(i(Cn(j.path)),1)]),o("span",w_,[o("span",b_,"+"+i(j.add),1),o("span",__,"-"+i(j.del),1)])],10,m_))),128))]),o("div",k_,[m(Ko,{lines:F.value,empty:s(n)("gitDiffEmpty")},null,8,["lines","empty"])])])])):(l(),c("div",x_,i(s(n)("gitSelectCommit")),1))]),_:1},8,["modelValue","title"]),m(dt,{modelValue:we.value,"onUpdate:modelValue":S[32]||(S[32]=j=>we.value=j),title:s(n)("gitReleaseTitle"),width:"460px","align-center":"","modal-class":"fw-blur-overlay",class:"fw-gp-release-dialog","close-on-click-modal":!1},{footer:se(()=>[m($e,{onClick:S[31]||(S[31]=j=>we.value=!1)},{default:se(()=>[ue(i(s(n)("cancel")),1)]),_:1}),m($e,{type:"primary",loading:v.op,disabled:!Ne.value.trim()||!J.value.trim(),onClick:Da},{default:se(()=>[ue(i(s(n)("gitReleasePublish")),1)]),_:1},8,["loading","disabled"])]),default:se(()=>[o("div",C_,[o("label",null,i(s(n)("gitReleaseName")),1),m(nt,{modelValue:Ne.value,"onUpdate:modelValue":S[28]||(S[28]=j=>Ne.value=j),size:"small",placeholder:s(n)("gitTagNamePlaceholder")},null,8,["modelValue","placeholder"])]),o("div",S_,[o("label",null,i(s(n)("gitReleaseTarget")),1),m(nt,{modelValue:W.value,"onUpdate:modelValue":S[29]||(S[29]=j=>W.value=j),size:"small",placeholder:s(n)("gitTagTargetPlaceholder")},null,8,["modelValue","placeholder"])]),o("div",$_,[o("label",null,i(s(n)("gitReleaseMsg")),1),m(nt,{modelValue:J.value,"onUpdate:modelValue":S[30]||(S[30]=j=>J.value=j),type:"textarea",rows:3,resize:"none",placeholder:s(n)("gitTagMessagePlaceholder")},null,8,["modelValue","placeholder"])])]),_:1},8,["modelValue","title"]),s(Tt)?(l(),Xe(Zt,{key:2,items:s(In),x:s(St),y:s(bn),onClose:s(Zs)},null,8,["items","x","y","onClose"])):N("",!0)]),_:1},8,["model-value","title"])}}}),Ed=xt(E_,[["__scopeId","data-v-001797f7"]]),T_={key:0,class:"fw-svn-shell"},D_={class:"fw-svn-head"},F_=["title"],P_=["title"],N_=["title"],R_={class:"fw-svn-headacts"},A_={class:"fw-svn-body"},M_={class:"fw-svn-rail"},O_=["onClick"],L_={class:"fw-svn-rail-txt"},B_={key:0,class:"fw-svn-rail-badge"},I_={key:0,class:"fw-svn-rail-op"},j_={class:"fw-svn-content"},V_={key:0,class:"fw-svn-split"},z_={class:"fw-svn-list"},U_={class:"fw-svn-groupbar"},H_={class:"fw-svn-groupname"},W_={class:"fw-svn-selall"},G_=["checked"],q_={key:0,class:"fw-svn-empty"},K_=["title"],X_=["checked","onChange"],Y_=["data-code"],J_={class:"fw-svn-path"},Q_={key:0,class:"fw-svn-dir"},Z_={class:"fw-svn-stext"},e0={class:"fw-svn-rowacts"},t0=["disabled","title","onClick"],n0=["disabled","title","onClick"],s0=["disabled","title","onClick"],o0=["disabled","title","onClick"],i0={class:"fw-svn-detail"},a0={class:"fw-svn-detailhead"},l0={class:"fw-svn-detailtitle"},r0=["placeholder"],c0={class:"fw-svn-bulk"},u0=["disabled"],d0=["disabled"],p0=["disabled"],f0={class:"fw-svn-commit-acts"},v0={class:"fw-svn-hint"},h0=["disabled"],m0={key:1,class:"fw-svn-loglist"},g0={key:0,class:"fw-svn-empty"},y0=["title","onClick"],w0={class:"fw-svn-caret"},b0={class:"fw-svn-log-r"},_0=["title"],k0={class:"fw-svn-log-meta"},x0={key:0,class:"fw-svn-log-msg"},C0={class:"fw-svn-log-cfiles"},S0={key:0,class:"fw-svn-empty"},$0=["title","onClick"],E0={class:"fw-svn-cfile-path"},T0={key:0,class:"fw-svn-cfile-dir"},D0={key:2,class:"fw-svn-cli"},F0={class:"fw-svn-cli-body"},P0={key:1,class:"fw-svn-warn fw-svn-state"},N0={key:2,class:"fw-svn-checkout-form fw-svn-state"},R0={class:"fw-svn-tip"},A0={class:"fw-svn-checkout-row"},M0={class:"fw-svn-checkout-row"},O0={key:3,class:"fw-svn-empty fw-svn-state"},L0={class:"fw-svn-diffwrap"},B0={class:"fw-svn-blame"},I0={class:"fw-svn-co-form"},j0={class:"fw-svn-co-label"},V0={class:"fw-svn-co-label"},z0=ht({__name:"SvnPanel",props:{modelValue:{type:Boolean},dir:{}},setup(t){const e=t,{t:n}=Mt(),a=[{key:"changes",icon:"fileText",label:"svnRailChanges"},{key:"log",icon:"clock",label:"svnRailLog"},{key:"output",icon:"terminal",label:"svnOutput"}],r=g("changes"),u=g(null),v=g([]),d=g(new Set),f=g(""),w=g(!1),b=g(!1),k=g(""),O=g([]),M=g(!1),A=g(!1),V=g(""),H=g([]),C=g(!1),Z=g(""),G=g([]),F=g(!1),de=g(""),I=g(""),ve=B(()=>(u.value?.root??e.dir).replace(/\\/g,"/")),ye=B(()=>v.value.length>0&&d.value.size===v.value.length);function be(T){return T!=="changes"?"":v.value.length?String(v.value.length):""}function le(T){r.value=T,T==="log"&&!O.value.length&&ce()}function re(T){const K=T.lastIndexOf("/");return K<0?"":T.slice(0,K+1)}function Ee(T){const K=T.lastIndexOf("/");return K<0?T:T.slice(K+1)}function Ve(T){return T.split(`
`)[0]??""}async function we(){u.value=null,v.value=[],d.value=new Set,k.value="",O.value=[],r.value="changes";try{u.value=await fs(e.dir),u.value.inRepo&&u.value.svnAvailable&&await J()}catch(T){Y("error",T.message)}}async function Ne(T,K=!1){if(w.value)return null;w.value=!0,r.value="output";try{const $=await Qt(e.dir,T),q=[$.stdout,$.stderr].filter(Boolean).join(`
`).trim();return k.value=`$ svn ${T.join(" ")}

${q||n("svnNoOutput")}`,$.code!==0?Y("error",($.stderr||n("svnFailed")).split(`
`)[0].slice(0,200)):!K&&$.stdout&&Y("ok",$.stdout.split(`
`)[0].slice(0,200)),$}catch($){return Y("error",$.message),null}finally{w.value=!1}}function W(T){T&&(k.value=`${T}

${k.value}`)}async function J(){const T=await Qt(e.dir,["status"]),K=[];for(const q of(T.stdout||"").split(`
`)){if(!q.trim())continue;const De=q.slice(0,8),ae=q.slice(8).trim();if(!ae)continue;const ct=(De[0]??" ").trim();K.push({code:ct,path:ae.split(" -> ")[0],statusText:z(ct)})}v.value=K;const $=new Set(K.map(q=>q.path));d.value=new Set([...d.value].filter(q=>$.has(q)))}function z(T){return{A:n("svnStAdded"),M:n("svnStModified"),D:n("svnStDeleted"),R:n("svnStReplaced"),C:n("svnStConflicted"),"!":n("svnStMissing"),"~":n("svnStObstructed"),"?":n("svnStUnversioned"),I:n("svnStIgnored")," ":"",K:n("svnStLocked")}[T]??T}function ee(T){const K=new Set(d.value);K.has(T)?K.delete(T):K.add(T),d.value=K}function me(T){const K=T.target.checked;d.value=K?new Set(v.value.map($=>$.path)):new Set}function je(){kr({kind:"svn",url:u.value?.url??""})}async function Ke(){b.value=!0;try{u.value=await fs(e.dir),u.value.inRepo&&u.value.svnAvailable&&await J()}catch(T){Y("error",T.message)}finally{b.value=!1}}async function Ze(){const T=u.value?.revision??null,K=await Ne(["update"],!0);if(!K||K.code!==0)return;const $=p1(K.stdout),q=f1(K.stdout);await Ke();const De=u.value?.revision??q,ae=$?T?n("svnUpdateSummaryFrom",{from:T,to:De??T,n:$}):n("svnUpdateSummary",{n:$,to:De??"?"}):n("svnAlreadyLatest",{rev:De??T??"?"});W(ae),Y("ok",ae)}async function ge(){const T=await Ne(["cleanup"]);T&&T.code===0&&await J()}async function _e(){const T=await Ne(["add",...d.value]);T&&T.code===0&&await J()}async function Ye(T){const K=await Ne(["add","--",T]);K&&K.code===0&&await J()}async function st(T){const K=T.replace(/[\\/]$/,""),$=K.replace(/[\\/][^\\/]+$/,""),q=K.slice($.length+1),De=await Qt($,["propget","svn:ignore",$]),ae=(De.stdout||"").split(/\r?\n/).map(Ot=>Ot.trim()).filter(Boolean);if(ae.includes(q)){De.code===0&&Y("ok",n("gitIgnored")),await J();return}const ct=[...ae,q].join(`
`),wt=await Qt($,["propset","svn:ignore",ct,$]);wt.code===0?Y("ok",n("gitIgnored")):Y("error",(wt.stderr||n("svnFailed")).split(`
`)[0].slice(0,200)),await J()}async function fe(){const T=await Ne(["revert",...d.value]);T&&T.code===0&&await J()}async function Ce(){const T=await Ne(["resolve","--accept","working",...d.value]);T&&T.code===0&&await J()}async function qe(){const T=[...d.value],K=["commit","-m",f.value,...T],$=await Ne(K);$&&$.code===0&&(f.value="",d.value=new Set,await J())}async function ce(){M.value=!0;try{const T=await Qt(e.dir,["log","--xml","-v","-l","50"]);O.value=Ie(T.stdout),ut.value=new Set}catch(T){Y("error",T.message)}finally{M.value=!1}}function Ie(T){const K=[];try{new DOMParser().parseFromString(T,"application/xml").querySelectorAll("logentry").forEach(q=>{const De=[];q.querySelectorAll("paths > path").forEach(ae=>De.push({action:ae.getAttribute("action"),text:ae.textContent})),K.push({revision:q.getAttribute("revision")??"",author:q.querySelector("author")?.textContent??"",date:q.querySelector("date")?.textContent??"",msg:q.querySelector("msg")?.textContent??"",paths:De})})}catch{}return K}function rt(T){if(!T)return"";const K=new Date(T);return isNaN(K.getTime())?T:K.toLocaleString()}async function yt(T){A.value=!0,V.value=" · "+T;try{const K=await Qt(e.dir,["diff",T]);H.value=(K.stdout||"").split(`
`)}catch(K){H.value=[K.message]}}const ut=g(new Set);function it(T){const K=new Set(ut.value);K.has(T)?K.delete(T):K.add(T),ut.value=K}function Le(T){if(!T)return"";const K=T.replace(/^\//,""),$=K.lastIndexOf("/");return $<0?"":K.slice(0,$+1)}function U(T){if(!T)return"";const K=T.replace(/^\//,"");return K.slice(K.lastIndexOf("/")+1)||K}async function R(T,K){if(K.text){A.value=!0,V.value=` · r${T} ${K.text}`,H.value=[];try{const $=await Qt(e.dir,["diff","-c",T,"--","^"+K.text]);H.value=($.stdout||"").split(`
`)}catch($){H.value=[$.message]}}}async function Q(T){C.value=!0,Z.value=" · "+T;try{const K=await Qt(e.dir,["blame","-v",T]);G.value=(K.stdout||"").split(`
`)}catch(K){G.value=[K.message]}}function Te(){de.value||(de.value=u.value?.url??""),I.value||(I.value=u.value?.root??e.dir)}async function L(){const T=de.value.trim(),K=I.value.trim();if(!T||!K)return;const $=K.replace(/[\\/][^\\/]*$/,"")||K;w.value=!0;try{const q=await Qt($,["checkout",T,K]),De=[q.stdout,q.stderr].filter(Boolean).join(`
`).trim();k.value=`$ svn checkout ${T} ${K}

${De||n("svnNoOutput")}`,q.code===0?(Y("ok",n("svnCheckedOut")),F.value=!1,u.value=await fs(K),u.value.inRepo&&await J()):Y("error",(q.stderr||n("svnFailed")).split(`
`)[0].slice(0,200))}catch(q){Y("error",q.message)}finally{w.value=!1}}return(T,K)=>{const $=Mn,q=Ts,De=cn;return l(),Xe(De,{"model-value":t.modelValue,title:s(n)("svnPanelTitle"),width:"800px","align-center":"","modal-class":"fw-blur-overlay",class:"fw-svn-dialog","close-on-click-modal":!1,"onUpdate:modelValue":K[10]||(K[10]=ae=>T.$emit("update:modelValue",ae)),onOpen:we},{default:se(()=>[u.value&&u.value.inRepo&&u.value.svnAvailable?(l(),c("div",T_,[o("div",D_,[o("span",{class:"fw-svn-revpill",title:u.value.revision?"r"+u.value.revision:""},[m(ne,{name:"svn",size:13}),o("b",null,i(u.value.revision?"r"+u.value.revision:"—"),1)],8,F_),o("span",{class:"fw-svn-url",title:u.value.url??""},i(u.value.url||s(n)("svnNoUrl")),9,P_),o("span",{class:"fw-svn-repo",title:u.value.root??""},i(s(n)("svnRepo"))+i(ve.value),9,N_),o("span",R_,[m($,{size:"small",loading:w.value,onClick:Ze},{default:se(()=>[ue(i(s(n)("svnUpdate")),1)]),_:1},8,["loading"]),m($,{size:"small",disabled:w.value,onClick:ge},{default:se(()=>[ue(i(s(n)("svnCleanup")),1)]),_:1},8,["disabled"]),m($,{size:"small",onClick:K[0]||(K[0]=ae=>F.value=!0)},{default:se(()=>[ue(i(s(n)("svnCheckout")),1)]),_:1}),m($,{size:"small",loading:b.value,onClick:Ke,title:s(n)("svnRefresh")},{default:se(()=>[m(ne,{name:"refresh",size:13})]),_:1},8,["loading","title"]),m($,{size:"small",title:s(n)("accTitle"),onClick:je},{default:se(()=>[m(ne,{name:"shield",size:13})]),_:1},8,["title"])])]),o("div",A_,[o("nav",M_,[(l(),c(oe,null,Ae(a,ae=>o("button",{key:ae.key,class:te(["fw-svn-rail-btn",{active:r.value===ae.key}]),onClick:ct=>le(ae.key)},[m(ne,{name:ae.icon,size:14},null,8,["name"]),o("span",L_,i(s(n)(ae.label)),1),be(ae.key)?(l(),c("span",B_,i(be(ae.key)),1)):N("",!0)],10,O_)),64)),K[12]||(K[12]=o("span",{class:"fw-svn-rail-fill"},null,-1)),w.value?(l(),c("div",I_,[K[11]||(K[11]=o("span",{class:"fw-svn-spin"},null,-1)),ue(i(s(n)("svnRunning")),1)])):N("",!0)]),o("section",j_,[r.value==="changes"?(l(),c("div",V_,[o("div",z_,[o("div",U_,[o("span",H_,i(s(n)("svnModifiedCount",{n:v.value.length})),1),o("label",W_,[o("input",{type:"checkbox",checked:ye.value,onChange:me},null,40,G_),ue(i(s(n)("svnSelectAll")),1)])]),v.value.length?N("",!0):(l(),c("div",q_,i(s(n)("svnNoChanges")),1)),(l(!0),c(oe,null,Ae(v.value,ae=>(l(),c("div",{key:ae.path,class:"fw-svn-row",title:ae.path},[o("input",{type:"checkbox",checked:d.value.has(ae.path),onChange:ct=>ee(ae.path)},null,40,X_),o("span",{class:"fw-svn-badge","data-code":ae.code.trim()||"·"},i(ae.code.trim()||"·"),9,Y_),o("span",J_,[re(ae.path)?(l(),c("span",Q_,i(re(ae.path)),1)):N("",!0),ue(i(Ee(ae.path)),1)]),o("span",Z_,i(ae.statusText),1),o("span",e0,[o("button",{class:"fw-svn-mini",disabled:w.value,title:s(n)("svnDiff"),onClick:xe(ct=>yt(ae.path),["stop"])},[m(ne,{name:"code",size:12})],8,t0),o("button",{class:"fw-svn-mini",disabled:w.value,title:s(n)("svnBlame"),onClick:xe(ct=>Q(ae.path),["stop"])},[m(ne,{name:"activity",size:12})],8,n0),ae.code.trim()==="?"?(l(),c(oe,{key:0},[o("button",{class:"fw-svn-mini",disabled:w.value,title:s(n)("svnAdd"),onClick:xe(ct=>Ye(ae.path),["stop"])},[m(ne,{name:"plus",size:12})],8,s0),o("button",{class:"fw-svn-mini",disabled:w.value,title:s(n)("svnIgnore"),onClick:xe(ct=>st(ae.path),["stop"])},[m(ne,{name:"eyeOff",size:12})],8,o0)],64)):N("",!0)])],8,K_))),128))]),o("div",i0,[o("div",a0,[o("span",l0,i(s(n)("svnCommitBtn")),1)]),kt(o("textarea",{"onUpdate:modelValue":K[1]||(K[1]=ae=>f.value=ae),class:"fw-svn-msg",rows:"6",placeholder:s(n)("svnCommitPlaceholder")},null,8,r0),[[Lt,f.value]]),o("div",c0,[o("button",{class:"fw-svn-btn",disabled:w.value||!d.value.size,onClick:_e},i(s(n)("svnAdd")),9,u0),o("button",{class:"fw-svn-btn",disabled:w.value||!d.value.size,onClick:fe},i(s(n)("svnRevert")),9,d0),o("button",{class:"fw-svn-btn",disabled:w.value||!d.value.size,onClick:Ce},i(s(n)("svnResolve")),9,p0)]),o("div",f0,[o("span",v0,i(d.value.size?s(n)("svnCommitSelected",{n:d.value.size}):s(n)("svnCommitAll")),1),o("button",{class:"fw-svn-btn primary",disabled:w.value||!f.value.trim(),onClick:qe},i(s(n)("svnCommitBtn")),9,h0)])])])):r.value==="log"?(l(),c("div",m0,[O.value.length?N("",!0):(l(),c("div",g0,i(M.value?s(n)("svnLoading"):s(n)("svnLogEmpty")),1)),(l(!0),c(oe,null,Ae(O.value,ae=>(l(),c("div",{key:ae.revision,class:te(["fw-svn-logitem",{open:ut.value.has(ae.revision)}])},[o("div",{class:"fw-svn-log-h",title:s(n)("svnLogToggle"),onClick:ct=>it(ae.revision)},[o("span",w0,i(ut.value.has(ae.revision)?"▾":"▸"),1),o("span",b0,"r"+i(ae.revision),1),o("span",{class:"fw-svn-log-msg1",title:ae.msg},i(Ve(ae.msg)),9,_0),o("span",k0,[o("span",null,i(ae.author),1),o("span",null,i(rt(ae.date)),1)])],8,y0),ut.value.has(ae.revision)?(l(),c(oe,{key:0},[ae.msg?(l(),c("pre",x0,i(ae.msg),1)):N("",!0),o("div",C0,[ae.paths.length?N("",!0):(l(),c("span",S0,i(s(n)("svnLogNoPaths")),1)),(l(!0),c(oe,null,Ae(ae.paths,(ct,wt)=>(l(),c("div",{key:wt,class:"fw-svn-cfile",title:s(n)("svnLogOpenDiff"),onClick:Ot=>R(ae.revision,ct)},[o("span",{class:te(["fw-svn-cfile-act","pa-"+(ct.action??"")])},i(ct.action),3),o("span",E0,[Le(ct.text)?(l(),c("span",T0,i(Le(ct.text)),1)):N("",!0),ue(i(U(ct.text)),1)])],8,$0))),128))])],64)):N("",!0)],2))),128))])):(l(),c("div",D0,[o("pre",F0,i(k.value||s(n)("svnNoOutput")),1)]))])])])):u.value&&u.value.inRepo&&!u.value.svnAvailable?(l(),c("div",P0,[m(ne,{name:"warning",size:13}),ue(i(s(n)("svnNoCli")),1)])):u.value&&!u.value.inRepo?(l(),c("div",N0,[o("p",R0,i(s(n)("svnNotRepoTip")),1),o("div",A0,[m(q,{modelValue:de.value,"onUpdate:modelValue":K[2]||(K[2]=ae=>de.value=ae),size:"small",class:"fw-svn-co-url",placeholder:s(n)("svnCheckoutUrlPlaceholder")},null,8,["modelValue","placeholder"])]),o("div",M0,[m(q,{modelValue:I.value,"onUpdate:modelValue":K[3]||(K[3]=ae=>I.value=ae),size:"small",class:"fw-svn-co-target",placeholder:s(n)("svnCheckoutTargetPlaceholder")},null,8,["modelValue","placeholder"]),m($,{size:"small",type:"primary",disabled:w.value||!de.value.trim()||!I.value.trim(),onClick:L},{default:se(()=>[ue(i(s(n)("svnCheckout")),1)]),_:1},8,["disabled"])])])):(l(),c("div",O0,i(s(n)("svnLoading")),1)),m(De,{modelValue:A.value,"onUpdate:modelValue":K[4]||(K[4]=ae=>A.value=ae),title:s(n)("svnDiffTitle")+V.value,width:"800px","align-center":"","modal-class":"fw-blur-overlay","append-to-body":""},{default:se(()=>[o("div",L0,[m(Ko,{lines:H.value,empty:s(n)("gitDiffEmpty")},null,8,["lines","empty"])])]),_:1},8,["modelValue","title"]),m(De,{modelValue:C.value,"onUpdate:modelValue":K[5]||(K[5]=ae=>C.value=ae),title:s(n)("svnBlameTitle")+Z.value,width:"800px","align-center":"","modal-class":"fw-blur-overlay","append-to-body":""},{default:se(()=>[o("pre",B0,i(G.value.join(`
`)||s(n)("gitDiffEmpty")),1)]),_:1},8,["modelValue","title"]),m(De,{modelValue:F.value,"onUpdate:modelValue":K[9]||(K[9]=ae=>F.value=ae),title:s(n)("svnCheckout"),width:"560px","align-center":"","modal-class":"fw-blur-overlay","append-to-body":"",onOpen:Te},{footer:se(()=>[m($,{onClick:K[8]||(K[8]=ae=>F.value=!1)},{default:se(()=>[ue(i(s(n)("cancel")),1)]),_:1}),m($,{type:"primary",disabled:w.value||!de.value.trim()||!I.value.trim(),onClick:L},{default:se(()=>[ue(i(s(n)("svnCheckout")),1)]),_:1},8,["disabled"])]),default:se(()=>[o("div",I0,[o("label",j0,i(s(n)("svnCheckoutUrlPlaceholder")),1),m(q,{modelValue:de.value,"onUpdate:modelValue":K[6]||(K[6]=ae=>de.value=ae),size:"small"},null,8,["modelValue"]),o("label",V0,i(s(n)("svnCheckoutTargetPlaceholder")),1),m(q,{modelValue:I.value,"onUpdate:modelValue":K[7]||(K[7]=ae=>I.value=ae),size:"small"},null,8,["modelValue"])])]),_:1},8,["modelValue","title"])]),_:1},8,["model-value","title"])}}}),Td=xt(z0,[["__scopeId","data-v-8297810b"]]),U0={class:"fw-dlg-head"},H0={class:"fw-dlg-badge"},W0={class:"fw-dlg-headtext"},G0={class:"fw-dlg-headtitle"},q0={class:"fw-dlg-headsub"},K0=["onKeydown"],X0={class:"fw-np-menubar"},Y0=["onClick","onMouseenter"],J0={key:0,class:"fw-np-dropdown"},Q0={key:0,class:"fw-np-sep"},Z0=["onClick"],e2={key:0,class:"fw-np-state"},t2={key:1,class:"fw-np-state fw-np-err"},n2=["readonly","wrap"],s2={key:3,class:"fw-np-status"},o2={key:0,class:"fw-np-seg fw-np-ro"},i2={class:"fw-np-seg"},a2={class:"fw-np-seg fw-np-eol"},l2={class:"fw-np-seg"},r2=ht({__name:"TxtEditor",props:{modelValue:{type:Boolean},path:{}},emits:["update:modelValue","saved"],setup(t,{emit:e}){const n=t,a=e,{t:r}=Mt(),u=B({get:()=>n.modelValue,set:R=>a("update:modelValue",R)}),v=B(()=>n.path.slice(Math.max(n.path.lastIndexOf("/"),n.path.lastIndexOf("\\"))+1)),d=g(""),f=g(""),w=g(!1),b=g(!1),k=g(""),O=g(!1),M=g(!1),A=g(null),V=g("utf8"),H=g(!1),C=g("lf"),Z=g(0),G={lf:"Unix (LF)",crlf:"Windows (CRLF)",cr:"Macintosh (CR)"},F=B(()=>G[C.value]),de=B(()=>{const R=V.value==="utf8"?"UTF-8":V.value.toUpperCase();return H.value?`${R} BOM`:R}),I=B({get:()=>Ue.txtWordWrap,set:R=>{Ue.txtWordWrap=R,Hn()}}),ve=B({get:()=>Ue.txtShowStatus,set:R=>{Ue.txtShowStatus=R,Hn()}}),ye=g(""),be=g(1),le=g(1);function re(R){return/\.txt$/i.test(R)}Je(()=>n.modelValue,async R=>{if(R&&n.path){if(!re(n.path)){u.value=!1;return}Ie(),await Ve(),await Dt(),Ne(),A.value?.focus()}else Ee()});function Ee(){d.value="",f.value="",O.value=!1,k.value="",ye.value="",be.value=1,le.value=1}async function Ve(){w.value=!0,k.value="",M.value=!bs(n.path);try{const R=await ul(n.path);if(R.binary){k.value=r("vsBinaryHint");return}d.value=R.content,f.value=R.content,V.value=R.encoding,H.value=R.hasBom,C.value=R.eol,Z.value=R.mtime,O.value=!1}catch(R){k.value=r("txtReadError",{msg:R.message})}finally{w.value=!1}}function we(){O.value=d.value!==f.value,Ne()}function Ne(){const R=A.value;if(!R)return;const Q=R.selectionStart,Te=d.value.slice(0,Q);be.value=Te.split(`
`).length;const L=Te.lastIndexOf(`
`);le.value=Q-L}async function W(R){const Q=await il(n.path,d.value,{key:Fe.key,encoding:V.value,hasBom:H.value,eol:C.value,expectedMtime:Z.value,force:R});Z.value=Q.mtime,f.value=d.value,O.value=!1,Y("ok",r("txtSaved")),a("saved"),u.value=!1}async function J(){if(!(M.value||!O.value||b.value)&&re(n.path)){b.value=!0;try{await W(!1)}catch(R){if(R instanceof Ks&&R.code==="mtime-conflict"){if(b.value=!1,!await At({title:r("vsConflictTitle"),message:r("vsConflictMsg",{name:v.value})}))return;try{await W(!0)}catch(Te){Y("error",Te.message)}return}Y("error",R.message)}finally{b.value=!1}}}function z(){J()}const ee=()=>{const R=A.value;return!R||R.selectionStart===R.selectionEnd};function me(){const R=A.value;return!R||R.selectionStart===R.selectionEnd?null:{s:R.selectionStart,e:R.selectionEnd}}function je(R,Q,Te){const L=A.value,T=d.value.slice(0,R)+Te+d.value.slice(Q);d.value=T,O.value=T!==f.value,Dt(()=>{L&&(L.focus(),L.selectionStart=L.selectionEnd=R+Te.length,Ne())})}function Ke(){A.value?.focus(),A.value?.select()}async function Ze(){const R=me();if(!R)return;const Q=d.value.slice(R.s,R.e);try{await navigator.clipboard.writeText(Q)}catch{A.value?.focus(),document.execCommand("copy")}}async function ge(){if(M.value)return;const R=me();if(!R)return;const Q=d.value.slice(R.s,R.e);try{await navigator.clipboard.writeText(Q)}catch{A.value?.focus(),document.execCommand("cut");return}je(R.s,R.e,"")}function _e(){if(M.value)return;const R=me();R&&je(R.s,R.e,"")}async function Ye(){if(M.value)return;const R=A.value;if(!R)return;const Q=R.selectionStart,Te=R.selectionEnd;try{const L=await navigator.clipboard.readText();je(Q,Te,L)}catch{R.focus(),Y("error","当前环境不允许读取剪贴板，请按 Ctrl+V 粘贴")}}function st(){M.value||(A.value?.focus(),document.execCommand("undo"),we())}function fe(){if(M.value)return;const R=A.value;if(!R)return;const Q=new Date().toLocaleString("zh-CN",{hour12:!1});je(R.selectionStart,R.selectionEnd,Q)}const Ce=B(()=>[{name:"file",label:"文件",items:[{label:"保存",disabled:()=>M.value||!O.value,action:()=>void J()},{label:"退出",action:()=>void Le()}]},{name:"edit",label:"编辑",items:[{label:"撤销",disabled:()=>M.value,action:()=>st()},{label:"剪切",disabled:()=>M.value||ee(),action:()=>void ge()},{label:"复制",disabled:()=>ee(),action:()=>void Ze()},{label:"粘贴",disabled:()=>M.value,action:()=>void Ye()},{label:"删除",disabled:()=>M.value||ee(),action:()=>_e()},{label:"-",sep:!0},{label:"全选",action:()=>Ke()},{label:"时间/日期",disabled:()=>M.value,action:()=>fe()}]},{name:"format",label:"格式",items:[{label:I.value?"☑ 自动换行":"☐ 自动换行",action:()=>{I.value=!I.value}}]},{name:"view",label:"查看",items:[{label:ve.value?"☑ 状态栏":"☐ 状态栏",action:()=>{ve.value=!ve.value}}]},{name:"help",label:"帮助",items:[{label:"关于记事本",action:()=>Y("ok","记事本 — DSH 文件工作台文本编辑器")}]}]);function qe(R){ye.value=ye.value===R?"":R}function ce(R){ye.value&&(ye.value=R)}function Ie(){ye.value=""}function rt(R,Q){Q.sep||Q.disabled&&Q.disabled()||(Ie(),Q.action?.())}function yt(){Ie()}function ut(){return O.value&&!M.value?At({title:r("txtUnsavedTitle"),message:r("txtUnsavedMsg")}).then(R=>R):Promise.resolve(!0)}function it(R){ut().then(Q=>{Q&&R()})}async function Le(){await ut()&&(u.value=!1)}function U(){Ee()}return(R,Q)=>{const Te=$p("icon"),L=cn;return l(),Xe(L,{modelValue:u.value,"onUpdate:modelValue":Q[1]||(Q[1]=T=>u.value=T),class:"fw-clone-dialog fw-np-dialog",width:"800px","align-center":"","modal-class":"fw-blur-overlay","close-on-click-modal":!1,"before-close":it,"append-to-body":"",onClose:U},{header:se(()=>[o("div",U0,[o("span",H0,[m(Te,{name:"fileText",size:20})]),o("span",W0,[o("span",G0,i(O.value?"* ":"")+i(v.value),1),o("span",q0,[ue(i(s(r)("txtEditorSub")),1),O.value?(l(),c(oe,{key:0},[ue(" · "+i(s(r)("txtUnsaved")),1)],64)):N("",!0)])])])]),default:se(()=>[o("div",{class:"fw-np",tabindex:"-1",onKeydown:[bt(xe(z,["ctrl","prevent"]),["s"]),bt(xe(fe,["prevent"]),["f5"])]},[o("div",X0,[(l(!0),c(oe,null,Ae(Ce.value,T=>(l(),c("div",{key:T.name,class:te(["fw-np-menu",{open:ye.value===T.name}]),onClick:K=>qe(T.name),onMouseenter:K=>ce(T.name)},[ue(i(T.label)+" ",1),ye.value===T.name?(l(),c("div",J0,[(l(!0),c(oe,null,Ae(T.items,(K,$)=>(l(),c(oe,{key:$},[K.sep?(l(),c("div",Q0)):(l(),c("div",{key:1,class:te(["fw-np-item",{disabled:K.disabled?K.disabled():!1}]),onClick:q=>rt(T.name,K)},i(K.label),11,Z0))],64))),128))])):N("",!0)],42,Y0))),128))]),w.value?(l(),c("div",e2,[Q[2]||(Q[2]=o("span",{class:"fw-np-spin"},null,-1)),ue(i(s(r)("txtLoading")),1)])):k.value?(l(),c("div",t2,i(k.value),1)):kt((l(),c("textarea",{key:2,ref_key:"taRef",ref:A,"onUpdate:modelValue":Q[0]||(Q[0]=T=>d.value=T),class:te(["fw-np-area",{wrap:I.value}]),readonly:M.value,wrap:I.value?"soft":"off",spellcheck:"false",onInput:we,onKeyup:Ne,onClick:Ne,onContextmenu:xe(yt,["prevent"])},null,42,n2)),[[Lt,d.value]]),ve.value&&!w.value&&!k.value?(l(),c("div",s2,[M.value?(l(),c("span",o2,i(s(r)("txtReadonly")),1)):N("",!0),Q[3]||(Q[3]=o("span",{class:"fw-np-spacer"},null,-1)),o("span",i2,"Ln "+i(be.value)+", Col "+i(le.value),1),Q[4]||(Q[4]=o("span",{class:"fw-np-seg"},"100%",-1)),o("span",a2,i(F.value),1),o("span",l2,i(de.value),1)])):N("",!0)],40,K0),ye.value?(l(),c("div",{key:0,class:"fw-np-backdrop",onClick:Ie,onContextmenu:xe(Ie,["prevent"])},null,32)):N("",!0)]),_:1},8,["modelValue"])}}}),an=gt({sessionId:null,connected:!1,files:[],running:!1});let wc=!1,Xo=null;const bc="__DSH_FW_SESSION_SSE__",_c={dispose:()=>Al()};function c2(){const t=globalThis,e=t[bc];if(e&&e!==_c)try{e.dispose()}catch{}t[bc]=_c}function u2(t){const e=t;if(!(!e||typeof e!="object")&&an.sessionId&&!(e.sessionId&&e.sessionId!==an.sessionId))switch(e.type){case"snapshot":case"files":an.files=Array.isArray(e.files)?e.files:[],an.running=e.running===!0,an.connected=!0;break;case"status":an.running=e.running===!0,an.connected=!0;break}}function d2(t){an.sessionId!==t&&(an.sessionId=t,lr(t))}function p2(){if(c2(),Xo)return()=>Al();wc||(wc=!0,Sh(u2));const t=window.__DSH_FILE_WORKBENCH__;return!t||typeof t.subscribeCurrentSessionId!="function"?()=>{}:(Xo=t.subscribeCurrentSessionId(e=>{e?d2(e):(lr(null),an.sessionId=null)}),()=>Al())}function Al(){try{Xo&&(Xo(),Xo=null)}catch{}lr(null),an.sessionId=null,an.files=[],an.running=!1,an.connected=!1}function qa(t){const e=t.lastIndexOf(".");return e>0&&e<t.length-1?t.slice(e):""}function kc(t){if(t==null||t<0)return"—";const e=["B","KB","MB","GB","TB"];let n=t,a=0;for(;n>=1024&&a<e.length-1;)n/=1024,a+=1;return`${a===0?n:n>=10?Math.round(n):n.toFixed(1)} ${e[a]}`}const hn=gt({selectionCount:0,canOperate:!0,hasClipboard:!1,isRecycle:!1});let Dd=null;function sa(t){Dd=t}function f2(t,e){Dd?.(t,e)}const v2={key:0,class:"fw-fl-tool"},h2={key:1,class:"fw-error"},m2={class:"fw-error-ico"},g2={key:1,class:"fw-table"},y2={key:0,class:"fw-sort"},w2={key:0,class:"fw-sort"},b2={key:0,class:"fw-sort"},_2={key:0,class:"fw-sort"},k2={key:0,class:"fw-vspacer"},x2=["data-path","title","draggable","onMouseenter","onMouseleave","onDragstart","onDragover","onDrop","onClick","onDblclick","onContextmenu"],C2={class:"col-name"},S2={class:"fw-n"},$2={class:"fw-ico"},E2={class:"fw-label"},T2=["title"],D2=["title"],F2={key:2,class:"fw-weak"},P2=["title"],N2={class:"col-size"},R2={class:"col-type"},A2={class:"col-mtime"},M2={key:1,class:"fw-vspacer"},O2={key:2},L2={colspan:4,class:"fw-empty-cell fw-inaccessible"},B2={key:3},I2={colspan:4,class:"fw-empty-cell"},j2=["data-path","title","draggable","onMouseenter","onMouseleave","onDragstart","onDragover","onDrop","onClick","onDblclick","onContextmenu"],V2={class:"fw-ico"},z2={class:"fw-list-name"},U2=["title"],H2=["title"],W2=["title"],G2=["data-path","title","draggable","onMouseenter","onMouseleave","onDragstart","onDragover","onDrop","onClick","onDblclick","onContextmenu"],q2={key:0,class:"fw-tile-thumb"},K2=["src","alt"],X2={key:1,class:"fw-tile-ico"},Y2={class:"fw-tile-name"},J2=["title"],Q2=["title"],Z2={key:4,class:"fw-mode fw-content"},ek=["data-path","title","draggable","onMouseenter","onMouseleave","onDragstart","onDragover","onDrop","onClick","onDblclick","onContextmenu"],tk={class:"fw-ico"},nk={class:"fw-c-main"},sk={class:"fw-c-name"},ok={key:0,class:"fw-broken-tag"},ik={class:"fw-c-type"},ak={class:"fw-c-meta"},lk={key:5,class:"fw-mode fw-tiles"},rk=["data-path","title","draggable","onMouseenter","onMouseleave","onDragstart","onDragover","onDrop","onClick","onDblclick","onContextmenu"],ck={key:0,class:"fw-tile-thumb"},uk=["src","alt"],dk={key:1,class:"fw-tile-ico"},pk={class:"fw-t2-body"},fk={class:"fw-t2-name"},vk={class:"fw-t2-type"},hk={class:"fw-t2-size"},mk={key:6,class:"fw-empty-small"},gk={key:3,class:"fw-refreshing"},yk={class:"fw-dlg-head"},wk={class:"fw-dlg-badge"},bk={class:"fw-dlg-headtext"},_k={class:"fw-dlg-headtitle"},kk={class:"fw-dlg-headsub"},xk={key:0,class:"fw-prop-body"},Ck={class:"fw-prop-row"},Sk={class:"k"},$k={class:"v"},Ek={class:"fw-prop-row"},Tk={class:"k"},Dk={class:"v"},Fk={class:"fw-prop-row"},Pk={class:"k"},Nk={class:"v"},Rk={class:"fw-prop-row fw-prop-row-wide"},Ak={class:"k"},Mk=["title"],Ok={class:"fw-gitdiff-body"},Lk=40,Bk=28,Ik=ht({__name:"FileListPane",setup(t){const{t:e}=Mt(),n=B(()=>ie.view==="recycle"),a=g(Ue.sortKey),r=g(Ue.asc),u=g(null);let v=0,d=0;function f(y){return{width:`${Ue.colWidths[y]}px`}}function w(y,x){u.value=x,v=y.clientX,d=Ue.colWidths[x],document.addEventListener("mousemove",b),document.addEventListener("mouseup",k)}function b(y){const x=u.value;x&&(Ue.colWidths[x]=Math.max(Lk,d+(y.clientX-v)))}function k(){u.value&&Hn(),u.value=null,document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",k)}Rt(()=>{document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",k)});const O=B(()=>n.value?"recycle":ie.listing?.path??""),M=g(vl(O.value)),A=B(()=>{const y=M.value;return y==="huge"||y==="large"||y==="medium"||y==="small"?"grid":y}),V=B(()=>{const y=M.value;return y==="small"?20:y==="medium"?32:y==="large"?48:72});Je(()=>Ue.view,y=>{M.value!==y&&(M.value=y)}),Je(O,y=>{const x=vl(y);M.value!==x&&(M.value=x)}),Je(M,y=>qi.value=y,{immediate:!0}),Je(()=>Ue.sortKey,y=>{a.value!==y&&(a.value=y)}),Je(()=>Ue.asc,y=>{r.value!==y&&(r.value=y)});const{cmOpen:H,cmX:C,cmY:Z,cmItems:G,openMenu:F}=vn(),de=g(!1),I=g(null),ve=g(!1),ye=g(""),be=g(!1),le=g(!1),re=g(!1),Ee=g(!1),Ve=g("");function we(y){Ve.value=y,Ee.value=!0}function Ne(){Ft()}function W(y){a.value===y?r.value=!r.value:(a.value=y,r.value=y!=="mtime"),Ue.sortKey=a.value,Ue.asc=r.value,Hn()}function J(y){if(y.isDir)return e("typeFolder");const x=y.name.lastIndexOf("."),Se=x>0?y.name.slice(x+1).toUpperCase():"";return Se?`${Se} ${e("typeFile")}`:e("typeFile")}const z=/\.(png|jpe?g|gif|svg|webp|bmp|ico|avif)$/i;function ee(y){return!y.isDir&&z.test(y.name)}function me(y){if(Ue.showExtensions||y.isDir)return y.name;const x=y.name.lastIndexOf(".");return x>0?y.name.slice(0,x):y.name}function je(y){if(y.isDir)return"";const x=y.size;if(x===void 0)return"—";const Se=["B","KB","MB","GB","TB"];let pe=x,Oe=0;for(;pe>=1024&&Oe<Se.length-1;)pe/=1024,Oe+=1;return`${Oe===0?pe:pe>=10?Math.round(pe):pe.toFixed(1)} ${Se[Oe]}`}function Ke(y){if(y.mtime===void 0)return"";try{return new Date(y.mtime).toLocaleString(void 0,{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})}catch{return new Date(y.mtime).toLocaleString()}}function Ze(y){return y.path}const ge={"":"",untracked:"?",added:"A",modified:"M",deleted:"D"};function _e(y){return kd(ie.listing?.path??"",y.name)}function Ye(y){return ge[_e(y)]}function st(y){const x=_e(y);return x==="untracked"?e("gitBadgeUntracked"):x==="added"?e("gitBadgeAdded"):x==="deleted"?e("gitBadgeDeleted"):x==="modified"?e("gitBadgeModified"):""}function fe(y){return xd(ie.listing?.path??"",y.name)}function Ce(y){return ge[fe(y)]}function qe(y){const x=fe(y);return x==="untracked"?e("gitBadgeUntracked"):x==="added"?e("gitBadgeAdded"):x==="deleted"?e("gitBadgeDeleted"):x==="modified"?e("gitBadgeModified"):""}const ce=B(()=>{const y=[...ie.listing?.entries??[]],x={name:(Se,pe)=>Se.name.localeCompare(pe.name,void 0,{sensitivity:"base"}),size:(Se,pe)=>(Se.size??-1)-(pe.size??-1),type:(Se,pe)=>{const Oe=P=>P.isDir?"0-folder":P.name.slice(P.name.lastIndexOf(".")).toLowerCase();return(J(Se)+Oe(Se)).localeCompare(J(pe)+Oe(pe))},mtime:(Se,pe)=>(Se.mtime??0)-(pe.mtime??0)};return y.sort((Se,pe)=>{if(Se.isDir!==pe.isDir)return Se.isDir?-1:1;let Oe=x[a.value](Se,pe);return Oe===0&&(Oe=Se.name.localeCompare(pe.name,void 0,{sensitivity:"base"})),r.value||(Oe=-Oe),Oe}),y}),Ie=g(""),rt=B(()=>{const y=Ie.value.trim().toLowerCase();return ce.value.filter(x=>!Ue.showHidden&&x.hidden?!1:y?x.name.toLowerCase().includes(y):!0)}),yt=B(()=>ie.listing?.inaccessible?ie.listing.inaccessible:rt.value.length===0&&Ie.value?e("filterEmpty"):n.value?e("recycleEmptyList"):e("emptyDir")),ut=g(null),it=g(null);function Le(){it.value?.click()}async function U(y){const x=y.target,Se=x.files;Se?.length&&ie.listing&&await un(Se,ie.listing.path),x.value=""}const R=B(()=>rt.value.length),Q=Bg(ut,R,Bk),Te=B(()=>rt.value.slice(Q.range.value.start,Q.range.value.end));Je(()=>ie.listing?.path,()=>{ut.value&&(ut.value.scrollTop=0)}),Je(()=>ie.listing?.path,y=>{y&&!n.value&&(ks(y),ao(y))},{immediate:!0});const L=g(new Set),T=g(""),K=g("");function $(y,x){if(y.shiftKey&&K.value){const Se=rt.value.map(P=>P.path),pe=Se.indexOf(K.value),Oe=Se.indexOf(x.path);if(pe!==-1&&Oe!==-1){const[P,Pe]=pe<Oe?[pe,Oe]:[Oe,pe],Xt=new Set;for(let Ut=P;Ut<=Pe;Ut++)Xt.add(Se[Ut]);L.value=Xt}T.value=x.path;return}if(y.ctrlKey||y.metaKey){const Se=new Set(L.value),pe=Se.has(x.path);pe?Se.delete(x.path):Se.add(x.path),L.value=Se,K.value=x.path,T.value=pe?"":x.path;return}L.value=new Set,T.value=x.path,K.value=x.path}function q(y,x){L.value=new Set,T.value=x.path,K.value=x.path,yn(x)}function De(){L.value=new Set,T.value="",K.value=""}function ae(y){ut.value?.focus({preventScroll:!0}),!(Ot||y.target.closest(".fw-row, .fw-list-row, .fw-tile, .fw-content-row, .fw-tile2, th"))&&De()}const ct=g(null);let wt=null,Ot=!1;function On(y){y.button!==0||!ie.listing||y.target.closest(".fw-row, .fw-list-row, .fw-tile, .fw-content-row, .fw-tile2, th, input, textarea")||(wt={x:y.clientX,y:y.clientY},window.addEventListener("mousemove",Gt),window.addEventListener("mouseup",ze,{once:!0}))}function Gt(y){if(!wt||!ut.value)return;const x=ut.value.getBoundingClientRect(),Se=Math.min(wt.x,y.clientX),pe=Math.min(wt.y,y.clientY),Oe=Math.max(wt.x,y.clientX),P=Math.max(wt.y,y.clientY);ct.value={x:Se-x.left,y:pe-x.top,w:Oe-Se,h:P-pe};const Pe=new Set;ut.value.querySelectorAll("[data-path]").forEach(Xt=>{const Ut=Xt.getBoundingClientRect();Ut.left<Oe&&Ut.right>Se&&Ut.top<P&&Ut.bottom>pe&&Pe.add(Xt.dataset.path??"")}),Pe.delete(""),L.value=Pe,T.value=""}function ze(){wt&&(wt=null,ct.value=null,window.removeEventListener("mousemove",Gt),Ot=!0,setTimeout(()=>{Ot=!1},0))}function Qe(y){if(y.target?.closest("input, textarea, select, [contenteditable='true'], .el-input, .el-textarea"))return;const Se=rt.value;if(!Se.length)return;const pe=Se.map(Pe=>Pe.path),Oe=T.value?pe.indexOf(T.value):K.value?pe.indexOf(K.value):-1;if(y.ctrlKey&&y.shiftKey&&y.key.toLowerCase()==="n"){y.preventDefault(),pn("folder");return}if(y.ctrlKey||y.metaKey){switch(y.key.toLowerCase()){case"a":y.preventDefault(),L.value=new Set(pe);return;case"c":y.preventDefault(),L.value.size?Kt("copy"):T.value&&(Ei([T.value]),Y("ok",e("menuCopyDone")));return;case"x":y.preventDefault(),L.value.size?Kt("cut"):T.value&&(Mo([T.value]),Y("ok",e("menuCutDone")));return;case"v":y.preventDefault(),ie.listing&&es(ie.listing.path);return;case"f":y.preventDefault(),at();return}return}if(y.altKey){y.key==="ArrowUp"?(y.preventDefault(),Cl()):y.key==="ArrowLeft"?(y.preventDefault(),Ku()):y.key==="ArrowRight"&&(y.preventDefault(),Xu());return}switch(y.key){case"Backspace":y.preventDefault(),Cl();return;case"Delete":y.preventDefault(),Cn();return;case"F2":y.preventDefault(),Sn();return;case"F5":y.preventDefault(),n.value?_s():Ft();return;case"Enter":Oe>=0&&yn(Se[Oe]);return}let P=Oe;if(y.key==="ArrowDown")P=Oe+1,y.preventDefault();else if(y.key==="ArrowUp")P=Oe-1,y.preventDefault();else if(y.key==="Home")P=0,y.preventDefault();else if(y.key==="End")P=pe.length-1,y.preventDefault();else return;P<0||P>=pe.length||(L.value=new Set,T.value=pe[P],K.value=pe[P],ut.value?.querySelector(".fw-row.selected, .fw-list-row.selected, .fw-tile.selected, .fw-content-row.selected, .fw-tile2.selected")?.scrollIntoView({block:"nearest"}))}function et(y){return y?(ie.listing?.entries??[]).find(x=>x.path===y)??null:null}function at(){ut.value?.parentElement?.querySelector(".fw-filter input")?.focus()}function Cn(){if(L.value.size){if(n.value){qn([...L.value]);return}Kt("delete");return}const y=et(T.value);y&&Ns(y)}function Sn(){if(n.value||L.value.size)return;const y=et(T.value);y&&Ps(y)}function zt(y){return L.value.size?L.value.has(y.path):y.path===T.value}Je(()=>ie.listing?.path,()=>{De()});const ot=g("");function pt(y){ot.value=y.path}function Ct(y){ot.value===y.path&&(ot.value="")}const Ln=B(()=>T.value),$n=B(()=>{const y=Ln.value;return y?(ie.listing?.entries??[]).find(x=>x.path===y)??null:null}),Jn=B(()=>{const y=$n.value;if(!y)return ie.listing?ie.listing.path:"";let Se=y.isDir?e("typeFolder"):(()=>{const pe=y.name.lastIndexOf(".");return pe>0&&pe<y.name.length-1?y.name.slice(pe):e("typeFile")})();return y.mtime!==void 0&&(Se+=` · ${Ke(y)}`),!y.isDir&&y.size!==void 0&&(Se+=` · ${je(y)}`),Se});let gn="";function En(y,x){y.dataTransfer&&(gn=x.path,a1.value=x.path,y.dataTransfer.effectAllowed="move",y.dataTransfer.setData("text/plain",x.path))}function Qs(y){}function Fs(){}async function Tn(y,x){if(y.preventDefault(),n.value)return;const Se=y.dataTransfer?.files;if(Se?.length){const P=x||ie.listing?.path||"";P&&await un(Se,P);return}const pe=gn;if(gn="",!pe||!x)return;const Oe=pe.slice(0,Math.max(pe.lastIndexOf("/"),pe.lastIndexOf("\\")+1));Bn(Oe)!==Bn(x)&&(Mo([pe]),await es(x))}async function un(y,x){if(!dn(x))return;const Se=on(e("taskUploading"),x);let pe=0,Oe=0;for(const P of Array.from(y)){Se.step(e("taskUploading"),P.name,void 0,qa(P.name)||e("typeFile"),P.size);try{await Uf(x,P,Fe.key),pe+=1}catch{Oe+=1}}pe&&Y("ok",e("uploaded",{count:pe})),Oe&&Y("error",e("uploadFailed",{count:Oe})),Oe?Se.fail(`${e("uploadFailed",{count:Oe})}${pe?`，成功 ${pe}`:""}`):pe&&Se.done(e("uploaded",{count:pe})),await Ft()}function Bn(y){return y.replace(/[\\/]+/g,"/").replace(/\/+$/,"").toLowerCase()}function Gn(y){return y.isDir?{fileType:e("typeFolder")}:{fileType:qa(y.name)||e("typeFile"),fileSize:y.size}}async function Dn(y){try{const x=await Ui(y);return x.isDir?{fileType:e("typeFolder")}:{fileType:qa(x.name)||e("typeFile"),fileSize:x.size}}catch{return{}}}async function yn(y){if(n.value){await Nn([y.recycleFullPath??y.path]);return}if(y.isDir){await Vt(y.path);return}try{await ri(y.path)}catch(x){Y("error",x.message)}}const wn={openGitPanel:()=>{le.value=!0},openSvnPanel:()=>{re.value=!0},openCommit:()=>{const y=ie.listing?.path??"";if(!_d(y)){Y("error",e("gitNotRepo"));return}be.value=!0},showGitDiff:y=>{ye.value=y,ve.value=!0},afterMutate:async y=>{await ks(y),await Ft()}};function Qn(y){return Dl(ie.listing?.path??"",y,wn)}function Fn(y){return Fl(ie.listing?.path??"",y,wn)}function D(y){const x=document.createElement("a");x.href=Af(y),x.rel="noopener",document.body.appendChild(x),x.click(),x.remove()}function he(y){const x=y.isDir?y.path:y.path.slice(0,Math.max(y.path.lastIndexOf("/"),y.path.lastIndexOf("\\")));Co(x)}function Be(y,x=!0){pr(y,{isDir:x})}async function He(y,x,Se){const pe=await ds({title:y,message:e("subagentAsk"),placeholder:e("subagentAskPlaceholder"),initial:"",multiline:!0});if(pe!==null)try{const Oe=await Vf(x,Se,pe,an.sessionId??void 0);if(Oe.ok){const P=Oe.mode==="oneshot"?Oe.output??"":"";Y("ok",P?P.slice(0,300)+(P.length>300?"…":""):e("subagentSpawned"))}else Y("error",Oe.error||e("subagentFailed"))}catch(Oe){Y("error",Oe instanceof Error?Oe.message:String(Oe))}}function Re(y){He(e("menuSubagent"),y.path,y.isDir)}function Ge(){He(e("menuNewSubagent"),"",!1)}function Tt(y,x){if(L.value.has(x.path)||(L.value=new Set,T.value=x.path,K.value=x.path),n.value){F(y,eo(x));return}if(L.value.has(x.path)){const Pe=[...L.value],Xt=!bs(x.path),Ut=uo(x.path);F(y,[{label:e("menuMultiCut"),icon:"cut",onClick:()=>Kt("cut"),disabled:Xt},{label:e("menuMultiCopy"),icon:"copy",onClick:()=>Kt("copy")},{label:e("menuMultiDelete"),icon:"trash",onClick:()=>Kt("delete"),disabled:Xt},{label:e("menuMultiCompress"),icon:"archive",onClick:()=>Kt("compress"),disabled:Xt},{separator:!0},{label:e(Ut?"favoriteRemove":"favoriteAdd"),icon:"star",onClick:()=>{const gs=[...L.value],to=gs.every(ss=>uo(ss));for(const ss of gs)uo(ss)===to&&Ki(ss);Y("ok",e(to?"favoriteRemoved":"favoriteAdded"))}},{separator:!0},{label:e("cancel"),icon:"close",onClick:De},{label:`(${Pe.length}) ✕ ${e("selectedCount",{count:Pe.length})}`,icon:"",onClick:De}]);return}const Se=uo(x.path),pe=!bs(x.path),Oe=/\.txt$/i.test(x.name),P=[{label:e("menuOpen"),icon:"arrowRight",onClick:()=>yn(x)},...Wt(x.path)?[]:[{label:e("menuOpenExternal"),icon:"monitor",onClick:()=>Zs(x.path)}]];Oe&&P.push({label:e("menuEdit"),icon:"edit",disabled:pe,onClick:()=>we(x.path)}),x.isDir&&P.push({label:e("menuOpenInEditor"),icon:"code",onClick:()=>Be(x.path)}),P.push({separator:!0}),P.push({label:e("menuCut"),icon:"cut",disabled:pe,onClick:()=>{Mo([x.path]),Y("ok",e("menuCutDone"))}},{label:e("menuCopy"),icon:"copy",onClick:()=>{Ei([x.path]),Y("ok",e("menuCopyDone"))}},{label:e("menuCompress"),icon:"archive",disabled:pe,onClick:()=>As(x)},{label:e("menuExtract"),icon:"folderOpen",disabled:pe||x.isDir||!x.name.toLowerCase().endsWith(".zip"),onClick:()=>tn(x)},{label:e("menuRename"),icon:"edit",disabled:pe,onClick:()=>Ps(x)},{label:e("menuDelete"),icon:"trash",disabled:pe,onClick:()=>Ns(x)},{separator:!0},{label:e(Se?"favoriteRemove":"favoriteAdd"),icon:"star",onClick:()=>{const Pe=Ki(x.path);Y("ok",e(Pe?"favoriteAdded":"favoriteRemoved"))}},{label:e("menuDownload"),icon:"download",disabled:x.isDir,onClick:()=>D(x.path)},{label:e("menuOpenTerminal"),icon:"terminal",onClick:()=>he(x)},{label:e("menuSubagent"),icon:"sparkle",onClick:()=>Re(x)},...Qn(x.path),...Fn(x.path),{separator:!0},{label:e("menuCopyPath"),icon:"link",onClick:()=>To(x.path)},{label:e("menuProperties"),icon:"info",onClick:()=>Zn(x.path)}),F(y,P)}function St(y){if(!ie.listing)return;if(n.value){F(y,[{label:e("menuRefresh"),icon:"refresh",onClick:()=>_s()},{separator:!0},{label:e("recycleEmpty"),icon:"trash",disabled:(ie.recycleItems?.length??0)===0,onClick:()=>ts()}]);return}const x=ie.listing.path,Se=Tl(),pe=!bs(x);F(y,[{label:e("menuRefresh"),icon:"refresh",onClick:Ft},{label:e("menuOpenInEditor"),icon:"code",onClick:()=>Be(x)},{separator:!0},{label:e("menuView"),icon:"eye",children:bn()},{label:e("menuSort"),icon:"sort",children:Pn()},{separator:!0},{label:e("menuPaste"),icon:"download",disabled:!Se||pe,onClick:()=>es(x)},{label:e("menuUpload"),icon:"upload",disabled:pe,onClick:()=>Le()},{label:e("menuNew"),icon:"sparkle",disabled:pe,children:[{label:e("menuNewFolder"),icon:"folder",onClick:()=>pn("folder")},{label:e("menuNewFile"),icon:"file",onClick:()=>pn("file")}]},...Qn(x),...Fn(x),{separator:!0},{label:e("menuOpenTerminal"),icon:"terminal",onClick:()=>Co(x)},{label:e("menuNewSubagent"),icon:"sparkle",onClick:()=>Ge()},{label:e("menuProperties"),icon:"info",onClick:()=>Zn(x)}])}function bn(){const y=M.value,x=(Se,pe)=>({label:Se,checked:y===pe,onClick:()=>{M.value=pe,hl(O.value,pe)}});return[x(e("viewHuge"),"huge"),x(e("viewLarge"),"large"),x(e("viewMedium"),"medium"),x(e("viewSmall"),"small"),{separator:!0},x(e("viewList"),"list"),{separator:!0},x(e("viewDetails"),"details"),x(e("viewContent"),"content"),x(e("viewTiles"),"tiles")]}function In(y){M.value=y,hl(O.value,y)}na(In),Pt.canSwitchView=!0,Es(()=>{Pt.visible=!!ie.listing&&!ie.loadErr,Pt.total=rt.value.length,Pt.selected=L.value.size,Pt.text=Jn.value,Pt.view=M.value}),sa((y,x)=>{const Se=ie.listing?.path??"";if(n.value){const pe=L.value.size?[...L.value]:T.value?[T.value]:[];switch(y){case"restore":Nn(pe);break;case"delete":qn(pe);break;case"emptyRecycle":ts();break;case"refresh":_s();break;case"properties":T.value&&Zn(T.value);break}return}switch(y){case"newFolder":pn("folder");break;case"newFile":pn("file");break;case"upload":Le();break;case"cut":case"copy":{L.value.size?Kt(y):T.value&&((y==="cut"?Mo:Ei)([T.value]),Y("ok",e(y==="cut"?"menuCutDone":"menuCopyDone")));break}case"paste":Se&&es(Se);break;case"rename":Sn();break;case"delete":Cn();break;case"sort":x&&W(x);break;case"view":x&&In(x);break;case"toggleExt":Ue.showExtensions=!Ue.showExtensions,Hn();break;case"preview":{const pe=T.value?et(T.value):null;pe&&yn(pe);break}case"refresh":Ft();break;case"properties":T.value&&Zn(T.value);break}}),Es(()=>{hn.selectionCount=L.value.size||(T.value?1:0),hn.canOperate=ie.listing?bs(ie.listing.path):!1,hn.hasClipboard=Tl(),hn.isRecycle=ie.view==="recycle"}),Rt(()=>sa(null)),Rt(()=>{na(null),bd()});function Pn(){return[["name",e("sortName")],["mtime",e("sortModified")],["type",e("sortType")],["size",e("sortSize")]].map(([x,Se])=>({label:Se,checked:a.value===x,onClick:()=>W(x)}))}async function Zs(y){if(Wt(y)){Y("error",e("remoteNoExternal"));return}try{await cu(y),Y("ok",e("menuOpened"))}catch(x){Y("error",x.message)}}async function To(y){try{await navigator.clipboard.writeText(y),Y("ok",e("menuPathCopied"))}catch{Y("error",e("menuPathCopyFail"))}}function dn(y){return bs(y)?!0:(Y("error",e("workspaceOutside")),!1)}async function Ps(y){if(!dn(y.path))return;const x=(await ds({title:e("renameEntry"),initial:y.name}))?.trim();if(!x)return;const pe=`${y.path.slice(0,Math.max(y.path.lastIndexOf("/"),y.path.lastIndexOf("\\")))}/${x}`,Oe=Gn(y),P=on(e("taskRenaming"),`${y.name} → ${x}`,Oe.fileType,Oe.fileSize);try{await zi(y.path,pe,Fe.key),Y("ok",e("renamed")),P.done()}catch(Pe){Y("error",Pe.message),P.fail(Pe.message)}await Ft()}async function Ns(y){if(n.value){await qn([y.recycleFullPath??y.path]);return}if(!dn(y.path)||!await At({title:e("deleteTitle"),message:e("confirmDelete",{name:y.name})}))return;const Se=Gn(y),pe=on(e("taskDeleting"),y.name,Se.fileType,Se.fileSize);try{await ll(y.path,Fe.key),Y("ok",e("deleted")),pe.done()}catch(Oe){Y("error",Oe.message),pe.fail(Oe.message)}await Ft()}async function Zn(y){if(n.value){const x=et(y);if(!x)return;const Se=x.name.lastIndexOf(".");I.value={name:x.name,path:x.originalPath||x.path,isDir:x.isDir,ext:Se>0&&Se<x.name.length-1?x.name.slice(Se):"",size:x.size??0,mtime:x.mtime??0},de.value=!0;return}if(ie.listing)try{I.value=await Ui(y),de.value=!0}catch(x){Y("error",x.message)}}async function es(y){if(!dn(y))return;const x=r1();if(!x.paths.length)return;if(x.op==="cut"&&x.paths.some(pe=>!bs(pe))){Y("error",e("workspaceOutside"));return}const Se=on(x.op==="cut"?e("taskMoving"):e("taskCopying"),`${x.paths.length} → ${y}`);try{for(const pe of x.paths){const Oe=pe.slice(Math.max(pe.lastIndexOf("/"),pe.lastIndexOf("\\"))+1),P=await Dn(pe);if(x.op==="cut"&&!P.fileType){Y("error",e("taskSrcMissing",{name:Oe})),Se.fail(e("taskSrcMissing",{name:Oe})),await Ft();return}const Pe=await jn(Oe,y);Se.step(x.op==="cut"?e("taskMoving"):e("taskCopying"),pe,`→ ${y}`,P.fileType,P.fileSize),x.op==="cut"?await zi(pe,Pe,Fe.key):await zf(pe,y,Fe.key)}Y("ok",x.op==="cut"?e("moved"):e("copied")),Se.done(),l1()}catch(pe){Y("error",pe.message),Se.fail(pe.message)}await Ft()}function Rs(y){return ie.listing?.entries.find(x=>x.path===y)?.name??null}function eo(y){const x=L.value.has(y.path)?[...L.value]:[y.recycleFullPath??y.path];return[{label:e("recycleRestore"),icon:"undo",onClick:()=>Nn(x)},{label:e("recycleDelete"),icon:"trash",onClick:()=>qn(x)},{separator:!0},{label:e("menuRefresh"),icon:"refresh",onClick:()=>_s()},{separator:!0},{label:e("recycleEmpty"),icon:"trash",disabled:(ie.recycleItems?.length??0)===0,onClick:()=>ts()},{separator:!0},{label:e("menuProperties"),icon:"info",onClick:()=>Zn(y.recycleFullPath??y.path)}]}async function Nn(y){if(!y.length)return;const x=on(e("recycleRestore"),y.length>1?`${y.length} 项`:Rs(y[0])??"");let Se=0;for(const pe of y)try{await Ff(pe),Se+=1}catch(Oe){x.fail(Oe.message),Y("error",Oe.message)}Se&&(Y("ok",e("recycleRestored")),x.done(e("recycleRestored"))),De(),await _s()}async function qn(y){if(!y.length||!await At({title:e("recycleDelete"),message:y.length>1?e("recycleDeleteConfirmMulti",{count:y.length}):e("recycleDeleteConfirm",{name:Rs(y[0])??""})}))return;const Se=on(e("recycleDelete"),`${y.length} 项`);let pe=0;for(const Oe of y)try{await Pf(Oe),pe+=1}catch(P){Se.fail(P.message),Y("error",P.message)}pe&&(Y("ok",e("recycledDeleted")),Se.done(e("recycledDeleted"))),De(),await _s()}async function ts(){await ad(),De()}async function As(y){if(!dn(y.path))return;const x=Gn(y),Se=on(e("taskCompressing"),y.name,x.fileType,x.fileSize);try{await Wr(y.path,void 0,Fe.key),Y("ok",e("compressed")),Se.done()}catch(pe){Y("error",pe.message),Se.fail(pe.message)}await Ft()}async function tn(y){const x=ie.listing?.path??"";if(!x||!dn(x))return;const Se=Gn(y),pe=on(e("taskExtracting"),y.name,Se.fileType,Se.fileSize);try{const Oe=await Hf(y.path,x,Fe.key);Y("ok",e("extracted",{count:Oe.count})),pe.done(e("extracted",{count:Oe.count}))}catch(Oe){Y("error",`${e("extractFailed")}：${Oe.message}`),pe.fail(Oe.message)}await Ft()}async function Kt(y){const x=[...L.value];if(!x.length)return;if(y!=="copy"&&x.some(pe=>!bs(pe))){Y("error",e("workspaceOutside"));return}const Se=y==="cut"?on(e("taskMoving"),`${x.length} 项`):y==="copy"?on(e("taskCopying"),`${x.length} 项`):y==="delete"?on(e("taskDeleting"),`${x.length} 项`):on(e("taskCompressing"),`${x.length} 项`);try{if(y==="cut")Mo(x),Y("ok",e("menuCutDone"));else if(y==="copy")Ei(x),Y("ok",e("menuCopyDone"));else if(y==="delete"){if(!await At({title:e("deleteTitle"),message:e("confirmDelete",{name:`${x.length} 项`})}))return;for(const Oe of x)try{const P=await Dn(Oe);await ll(Oe,Fe.key),Se.step(e("taskDeleting"),Oe,void 0,P.fileType,P.fileSize)}catch{}Y("ok",e("deleted")),Se.done()}else if(y==="compress"){for(const pe of x)try{const Oe=await Dn(pe);await Wr(pe,void 0,Fe.key),Se.step(e("taskCompressing"),pe,void 0,Oe.fileType,Oe.fileSize)}catch{}Y("ok",e("compressed")),Se.done()}}catch(pe){Y("error",pe.message),Se.fail(pe.message)}De(),await Ft()}async function ns(y){return jn(y,ie.listing?.path??"")}async function jn(y,x){const Se=x===ie.listing?.path?new Set((ie.listing?.entries??[]).map(gs=>gs.name.toLowerCase())):null,pe=y.lastIndexOf("."),Oe=pe>0?y.slice(0,pe):y,P=pe>0?y.slice(pe):"";let Pe=y,Xt=2;for(;Se&&Se.has(Pe.toLowerCase());)Pe=`${Oe} (${Xt})${P}`,Xt+=1;const Ut=x.includes("\\")?"\\":"/";return`${x.replace(/[\\/]+$/,"")}${Ut}${Pe}`}async function pn(y){if(!ie.listing||!dn(ie.listing.path))return;const x=e(y==="folder"?"newFolderName":"newFileName"),Se=y==="folder"?x:`${x}.txt`;let pe=await ns(Se);try{y==="folder"?await Vi(pe,Fe.key):await ru(pe,Fe.key),Y("ok",e(y==="folder"?"createdFolder":"createdFile"))}catch(Oe){Y("error",Oe.message),await Ft();return}await Ft()}return(y,x)=>{const Se=Ts,pe=Mn,Oe=cn;return l(),c("div",{class:"fw-fl",onKeydown:Qe},[o("input",{ref_key:"fileInputRef",ref:it,type:"file",multiple:"",class:"fw-hidden-input",onChange:U},null,544),s(ie).listing&&!s(ie).loadErr?(l(),c("div",v2,[m(Se,{modelValue:Ie.value,"onUpdate:modelValue":x[0]||(x[0]=P=>Ie.value=P),size:"small",clearable:"",placeholder:s(e)("filterPlaceholder"),class:"fw-filter"},{prefix:se(()=>[m(ne,{name:"search",size:14,class:"fw-search-ico"})]),_:1},8,["modelValue","placeholder"])])):N("",!0),s(ie).loadErr?(l(),c("div",h2,[o("span",m2,[m(ne,{name:"warning",size:16})]),o("span",null,i(s(ie).loadErr),1),o("button",{class:"fw-retry",onClick:x[1]||(x[1]=P=>s(Ft)())},i(s(e)("retry")),1)])):s(ie).listing?(l(),c("div",{key:2,ref_key:"wrapRef",ref:ut,class:"fw-table-wrap",tabindex:"0",onScroll:x[12]||(x[12]=(...P)=>s(Q).onScroll&&s(Q).onScroll(...P)),onClick:ae,onContextmenu:xe(St,["prevent"]),onDragover:xe(Fs,["prevent"]),onDrop:x[13]||(x[13]=xe(P=>Tn(P,null),["prevent"])),onMousedown:On},[ct.value?(l(),c("div",{key:0,class:"fw-band",style:_t({left:ct.value.x+"px",top:ct.value.y+"px",width:ct.value.w+"px",height:ct.value.h+"px"})},null,4)):N("",!0),A.value==="details"?(l(),c("table",g2,[o("thead",null,[o("tr",null,[o("th",{class:te(["col-name",{active:a.value==="name"}]),style:_t(f("name")),onClick:x[4]||(x[4]=P=>W("name"))},[ue(i(s(e)("colName")),1),a.value==="name"?(l(),c("span",y2,i(r.value?"▲":"▼"),1)):N("",!0),o("span",{class:te(["fw-col-resize",{on:u.value==="name"}]),onMousedown:x[2]||(x[2]=xe(P=>w(P,"name"),["prevent","stop"])),onClick:x[3]||(x[3]=xe(()=>{},["stop"]))},null,34)],6),o("th",{class:te(["col-size",{active:a.value==="size"}]),style:_t(f("size")),onClick:x[7]||(x[7]=P=>W("size"))},[ue(i(s(e)("colSize")),1),a.value==="size"?(l(),c("span",w2,i(r.value?"▲":"▼"),1)):N("",!0),o("span",{class:te(["fw-col-resize",{on:u.value==="size"}]),onMousedown:x[5]||(x[5]=xe(P=>w(P,"size"),["prevent","stop"])),onClick:x[6]||(x[6]=xe(()=>{},["stop"]))},null,34)],6),o("th",{class:te(["col-type",{active:a.value==="type"}]),style:_t(f("type")),onClick:x[10]||(x[10]=P=>W("type"))},[ue(i(s(e)("colType")),1),a.value==="type"?(l(),c("span",b2,i(r.value?"▲":"▼"),1)):N("",!0),o("span",{class:te(["fw-col-resize",{on:u.value==="type"}]),onMousedown:x[8]||(x[8]=xe(P=>w(P,"type"),["prevent","stop"])),onClick:x[9]||(x[9]=xe(()=>{},["stop"]))},null,34)],6),o("th",{class:te(["col-mtime",{active:a.value==="mtime"}]),onClick:x[11]||(x[11]=P=>W("mtime"))},[ue(i(s(e)("colModified")),1),a.value==="mtime"?(l(),c("span",_2,i(r.value?"▲":"▼"),1)):N("",!0)],2)])]),o("tbody",null,[s(Q).range.value.padBefore?(l(),c("tr",k2,[o("td",{colspan:4,style:_t({height:s(Q).range.value.padBefore+"px"})},null,4)])):N("",!0),(l(!0),c(oe,null,Ae(Te.value,P=>(l(),c("tr",{key:P.path,class:te(["fw-row",{"is-dir":P.isDir,hidden:P.hidden,broken:P.broken,selected:zt(P)}]),"data-path":P.path,title:Ze(P),draggable:!n.value,onMouseenter:Pe=>pt(P),onMouseleave:Pe=>Ct(P),onDragstart:Pe=>En(Pe,P),onDragover:xe(Pe=>P.isDir&&(P.path,void 0),["prevent"]),onDrop:xe(Pe=>P.isDir&&Tn(Pe,P.path),["prevent","stop"]),onClick:Pe=>$(Pe,P),onDblclick:Pe=>q(Pe,P),onContextmenu:xe(Pe=>Tt(Pe,P),["prevent","stop"])},[o("td",C2,[o("span",S2,[o("span",$2,[m(ne,{name:P.isDir?"folder":"file",size:13},null,8,["name"])]),o("span",E2,i(me(P)),1),_e(P)?(l(),c("span",{key:0,class:te(["fw-git-badge","st-"+_e(P)]),title:st(P)},[m(ne,{name:"git",size:10}),ue(i(Ye(P)),1)],10,T2)):fe(P)?(l(),c("span",{key:1,class:te(["fw-git-badge","st-"+fe(P)]),title:qe(P)},[m(ne,{name:"svn",size:10}),ue(i(Ce(P)),1)],10,D2)):N("",!0),P.hidden?(l(),c("span",F2,"●")):N("",!0),P.broken?(l(),c("span",{key:3,class:"fw-broken-tag",title:s(e)("brokenLink")},"broken",8,P2)):N("",!0)])]),o("td",N2,i(je(P)),1),o("td",R2,i(J(P)),1),o("td",A2,i(Ke(P)),1)],42,x2))),128)),s(Q).range.value.padAfter?(l(),c("tr",M2,[o("td",{colspan:4,style:_t({height:s(Q).range.value.padAfter+"px"})},null,4)])):N("",!0),s(ie).listing.inaccessible?(l(),c("tr",O2,[o("td",L2,i(s(ie).listing.inaccessible),1)])):rt.value.length?N("",!0):(l(),c("tr",B2,[o("td",I2,i(yt.value),1)]))])])):A.value==="list"?(l(),c("div",{key:2,class:"fw-mode fw-list",style:_t({paddingTop:s(Q).range.value.padBefore+"px",paddingBottom:s(Q).range.value.padAfter+"px"})},[(l(!0),c(oe,null,Ae(Te.value,P=>(l(),c("div",{key:P.path,class:te(["fw-list-row",{"is-dir":P.isDir,hidden:P.hidden,broken:P.broken,selected:zt(P)}]),"data-path":P.path,title:Ze(P),draggable:!n.value,onMouseenter:Pe=>pt(P),onMouseleave:Pe=>Ct(P),onDragstart:Pe=>En(Pe,P),onDragover:xe(Pe=>P.isDir&&(P.path,void 0),["prevent"]),onDrop:xe(Pe=>P.isDir&&Tn(Pe,P.path),["prevent","stop"]),onClick:Pe=>$(Pe,P),onDblclick:Pe=>q(Pe,P),onContextmenu:xe(Pe=>Tt(Pe,P),["prevent","stop"])},[o("span",V2,[m(ne,{name:P.isDir?"folder":"file",size:14},null,8,["name"])]),o("span",z2,i(me(P)),1),_e(P)?(l(),c("span",{key:0,class:te(["fw-git-badge","st-"+_e(P)]),title:st(P)},[m(ne,{name:"git",size:10}),ue(i(Ye(P)),1)],10,U2)):fe(P)?(l(),c("span",{key:1,class:te(["fw-git-badge","st-"+fe(P)]),title:qe(P)},[m(ne,{name:"svn",size:10}),ue(i(Ce(P)),1)],10,H2)):N("",!0),P.broken?(l(),c("span",{key:2,class:"fw-broken-tag",title:s(e)("brokenLink")},"broken",8,W2)):N("",!0)],42,j2))),128)),s(ie).listing.inaccessible||!rt.value.length?(l(),c("div",{key:0,class:te(["fw-empty-cell",{"fw-inaccessible":!!s(ie).listing.inaccessible}])},i(yt.value),3)):N("",!0)],4)):A.value==="grid"?(l(),c("div",{key:3,class:te(["fw-mode fw-grid","fw-grid-"+M.value])},[(l(!0),c(oe,null,Ae(rt.value,P=>(l(),c("div",{key:P.path,class:te(["fw-tile",{"is-dir":P.isDir,hidden:P.hidden,selected:zt(P)}]),"data-path":P.path,title:Ze(P),draggable:!n.value,onMouseenter:Pe=>pt(P),onMouseleave:Pe=>Ct(P),onDragstart:Pe=>En(Pe,P),onDragover:xe(Pe=>P.isDir&&(P.path,void 0),["prevent"]),onDrop:xe(Pe=>P.isDir&&Tn(Pe,P.path),["prevent","stop"]),onClick:Pe=>$(Pe,P),onDblclick:Pe=>q(Pe,P),onContextmenu:xe(Pe=>Tt(Pe,P),["prevent","stop"])},[ee(P)?(l(),c("span",q2,[o("img",{src:s(Hr)(P.path),alt:P.name,loading:"lazy",draggable:"false"},null,8,K2)])):(l(),c("span",X2,[m(ne,{name:P.isDir?"folder":"file",size:V.value},null,8,["name","size"])])),o("span",Y2,[ue(i(me(P)),1),_e(P)?(l(),c("span",{key:0,class:te(["fw-git-badge","st-"+_e(P)]),title:st(P)},[m(ne,{name:"git",size:10}),ue(i(Ye(P)),1)],10,J2)):fe(P)?(l(),c("span",{key:1,class:te(["fw-git-badge","st-"+fe(P)]),title:qe(P)},[m(ne,{name:"svn",size:10}),ue(i(Ce(P)),1)],10,Q2)):N("",!0)])],42,G2))),128)),s(ie).listing.inaccessible||!rt.value.length?(l(),c("div",{key:0,class:te(["fw-empty-cell",{"fw-inaccessible":!!s(ie).listing.inaccessible}])},i(yt.value),3)):N("",!0)],2)):A.value==="content"?(l(),c("div",Z2,[(l(!0),c(oe,null,Ae(rt.value,P=>(l(),c("div",{key:P.path,class:te(["fw-content-row",{"is-dir":P.isDir,hidden:P.hidden,selected:zt(P)}]),"data-path":P.path,title:Ze(P),draggable:!n.value,onMouseenter:Pe=>pt(P),onMouseleave:Pe=>Ct(P),onDragstart:Pe=>En(Pe,P),onDragover:xe(Pe=>P.isDir&&(P.path,void 0),["prevent"]),onDrop:xe(Pe=>P.isDir&&Tn(Pe,P.path),["prevent","stop"]),onClick:Pe=>$(Pe,P),onDblclick:Pe=>q(Pe,P),onContextmenu:xe(Pe=>Tt(Pe,P),["prevent","stop"])},[o("span",tk,[m(ne,{name:P.isDir?"folder":"file",size:20},null,8,["name"])]),o("span",nk,[o("span",sk,[ue(i(me(P)),1),P.broken?(l(),c("span",ok,"broken")):N("",!0)]),o("span",ik,i(s(e)("colType"))+": "+i(J(P)),1)]),o("span",ak,[o("span",null,i(s(e)("colModified"))+": "+i(Ke(P)),1),o("span",null,i(s(e)("colSize"))+": "+i(P.isDir?"":je(P)),1)])],42,ek))),128)),s(ie).listing.inaccessible||!rt.value.length?(l(),c("div",{key:0,class:te(["fw-empty-cell",{"fw-inaccessible":!!s(ie).listing.inaccessible}])},i(yt.value),3)):N("",!0)])):A.value==="tiles"?(l(),c("div",lk,[(l(!0),c(oe,null,Ae(rt.value,P=>(l(),c("div",{key:P.path,class:te(["fw-tile2",{"is-dir":P.isDir,hidden:P.hidden,selected:zt(P)}]),"data-path":P.path,title:Ze(P),draggable:!n.value,onMouseenter:Pe=>pt(P),onMouseleave:Pe=>Ct(P),onDragstart:Pe=>En(Pe,P),onDragover:xe(Pe=>P.isDir&&(P.path,void 0),["prevent"]),onDrop:xe(Pe=>P.isDir&&Tn(Pe,P.path),["prevent","stop"]),onClick:Pe=>$(Pe,P),onDblclick:Pe=>q(Pe,P),onContextmenu:xe(Pe=>Tt(Pe,P),["prevent","stop"])},[ee(P)?(l(),c("span",ck,[o("img",{src:s(Hr)(P.path),alt:P.name,loading:"lazy",draggable:"false"},null,8,uk)])):(l(),c("span",dk,[m(ne,{name:P.isDir?"folder":"file",size:34},null,8,["name"])])),o("span",pk,[o("span",fk,i(me(P)),1),o("span",vk,i(J(P)),1),o("span",hk,i(P.isDir?"":je(P)),1)])],42,rk))),128)),s(ie).listing.inaccessible||!rt.value.length?(l(),c("div",{key:0,class:te(["fw-empty-cell",{"fw-inaccessible":!!s(ie).listing.inaccessible}])},i(yt.value),3)):N("",!0)])):N("",!0),s(ie).listing.truncated?(l(),c("div",mk,i(s(e)("resultsSuffixTruncated")),1)):N("",!0)],544)):N("",!0),s(ie).loading?(l(),c("div",gk,[...x[24]||(x[24]=[o("div",{class:"fw-refreshing-spinner"},null,-1)])])):N("",!0),s(H)?(l(),Xe(Zt,{key:4,items:s(G),x:s(C),y:s(Z),onClose:x[14]||(x[14]=P=>H.value=!1)},null,8,["items","x","y"])):N("",!0),m(Oe,{modelValue:de.value,"onUpdate:modelValue":x[16]||(x[16]=P=>de.value=P),class:"fw-prop-dialog fw-clone-dialog",width:"420px","align-center":"","modal-class":"fw-blur-overlay","close-on-click-modal":!1},{header:se(()=>[o("div",yk,[o("span",wk,[m(ne,{name:I.value?.isDir?"folder":"file",size:20},null,8,["name"])]),o("span",bk,[o("span",_k,i(s(e)("menuProperties")),1),o("span",kk,i(I.value?.name),1)])])]),footer:se(()=>[m(pe,{type:"primary",onClick:x[15]||(x[15]=P=>de.value=!1)},{default:se(()=>[ue(i(s(e)("confirmOk")),1)]),_:1})]),default:se(()=>[I.value?(l(),c("div",xk,[o("div",Ck,[o("span",Sk,i(s(e)("propKind")),1),o("span",$k,i(I.value.isDir?s(e)("typeFolder"):I.value.ext||s(e)("typeFile")),1)]),o("div",Ek,[o("span",Tk,i(s(e)("propSize")),1),o("span",Dk,i(je({isDir:I.value.isDir,size:I.value.size})),1)]),o("div",Fk,[o("span",Pk,i(s(e)("propModified")),1),o("span",Nk,i(Ke({mtime:I.value.mtime})),1)]),o("div",Rk,[o("span",Ak,i(s(e)("propPath")),1),o("span",{class:"v mono",title:I.value.path},i(I.value.path),9,Mk)])])):N("",!0)]),_:1},8,["modelValue"]),m(Oe,{modelValue:ve.value,"onUpdate:modelValue":x[18]||(x[18]=P=>ve.value=P),class:"fw-gitdiff-dialog",title:s(e)("gitDiffTitle"),width:"680px","close-on-click-modal":!1},{footer:se(()=>[m(pe,{type:"primary",onClick:x[17]||(x[17]=P=>ve.value=!1)},{default:se(()=>[ue(i(s(e)("gitDiffClose")),1)]),_:1})]),default:se(()=>[o("pre",Ok,i(ye.value||s(e)("gitDiffEmpty")),1)]),_:1},8,["modelValue","title"]),m(Cd,{modelValue:be.value,"onUpdate:modelValue":x[19]||(x[19]=P=>be.value=P),dir:n.value?"":s(ie).listing?.path??"",onDone:x[20]||(x[20]=P=>s(ks)(s(ie).listing?.path??""))},null,8,["modelValue","dir"]),m(Ed,{modelValue:le.value,"onUpdate:modelValue":x[21]||(x[21]=P=>le.value=P),dir:n.value?"":s(ie).listing?.path??""},null,8,["modelValue","dir"]),m(Td,{modelValue:re.value,"onUpdate:modelValue":x[22]||(x[22]=P=>re.value=P),dir:n.value?"":s(ie).listing?.path??""},null,8,["modelValue","dir"]),m(r2,{modelValue:Ee.value,"onUpdate:modelValue":x[23]||(x[23]=P=>Ee.value=P),path:Ve.value,onSaved:Ne},null,8,["modelValue","path"])],32)}}}),jk=xt(Ik,[["__scopeId","data-v-c2b328cc"]]),Vk={key:0,class:"fw-err"},zk={class:"fw-tp-sec"},Uk={key:0,class:"fw-tp-grid"},Hk=["data-path","title","onClick","onDblclick","onContextmenu"],Wk={class:"fw-drive-ico"},Gk={class:"fw-drive-body"},qk={class:"fw-drive-name"},Kk={class:"fw-drive-bar"},Xk={class:"fw-drive-cap"},Yk={key:0,class:"fw-tp-empty"},Jk={key:1,class:"fw-tp-table"},Qk={class:"col-name"},Zk={class:"col-type"},ex={class:"col-total"},tx={class:"col-free"},nx={class:"col-fs"},sx=["data-path","title","onClick","onDblclick","onContextmenu"],ox={class:"col-name"},ix={class:"fw-tp-n"},ax={class:"fw-tp-ico"},lx={class:"fw-tp-label"},rx={class:"col-type"},cx={class:"col-total"},ux={class:"col-free"},dx={class:"col-fs"},px={key:0},fx={colspan:5,class:"fw-tp-empty-cell"},vx={key:2,class:"fw-tp-loading"},hx={key:0,class:"fw-prop-body"},mx={class:"fw-prop-row"},gx={class:"k"},yx={class:"v"},wx={class:"fw-prop-row"},bx={class:"k"},_x={class:"v"},kx={class:"fw-prop-row"},xx={class:"k"},Cx={class:"v"},Sx={class:"fw-prop-row"},$x={class:"k"},Ex={class:"v"},Tx={class:"fw-prop-row"},Dx={class:"k"},Fx={class:"v"},Px={class:"fw-prop-row"},Nx={class:"k"},Rx={class:"v"},Ax={class:"fw-prop-row"},Mx={class:"k"},Ox={class:"v"},Lx={class:"fw-prop-bar"},xc="computer",Bx=ht({__name:"ThisPcPane",setup(t){const{t:e}=Mt(),n=["huge","large","medium","small"],a=B(()=>vl(xc)),r=B(()=>n.includes(a.value)),u=B(()=>a.value==="huge"?52:a.value==="large"?44:a.value==="medium"?36:20);Es(()=>qi.value=a.value);const v=g(null),d=B(()=>{const W=[...ie.drives],J=v.value;return J&&W.sort((z,ee)=>J==="size"?(ee.total??-1)-(z.total??-1):J==="free"?(ee.free??-1)-(z.free??-1):J==="type"?Number(z.removable)-Number(ee.removable)||zs(z).localeCompare(zs(ee),void 0,{sensitivity:"base"}):zs(z).localeCompare(zs(ee),void 0,{sensitivity:"base"})),W});function f(W){if(W===void 0||!Number.isFinite(W))return"—";const J=["B","KB","MB","GB","TB","PB"];let z=W,ee=0;for(;z>=1024&&ee<J.length-1;)z/=1024,ee+=1;return`${ee>0&&z<100?z.toFixed(1):Math.round(z)} ${J[ee]}`}function w(W){if(!(W.total===void 0||W.free===void 0))return Math.max(0,W.total-W.free)}function b(W){const J=w(W);return J===void 0||!W.total?"0%":`${Math.min(100,Math.max(0,J/W.total*100)).toFixed(1)}%`}function k(W){return e("driveCapacity",{free:f(W.free),total:f(W.total)})}const O=g(""),M=g(null);function A(W){O.value=W.path}function V(W){M.value?.focus({preventScroll:!0}),!W.target.closest(".fw-drive, .fw-tp-row, th")&&(O.value="")}function H(W){O.value=W.path,Vt(W.path)}function C(W){const J=d.value;if(!J.length)return;if(W.key==="F5"){W.preventDefault(),Ft();return}if(W.key==="Enter"&&O.value){const me=J.find(je=>je.path===O.value);me&&(W.preventDefault(),H(me));return}if(W.key!=="ArrowDown"&&W.key!=="ArrowUp"&&W.key!=="Home"&&W.key!=="End")return;W.preventDefault();const z=J.findIndex(me=>me.path===O.value),ee=W.key==="Home"?0:W.key==="End"?J.length-1:W.key==="ArrowDown"?Math.min(J.length-1,z+1):Math.max(0,z<0?0:z-1);O.value=J[ee]?.path??""}function Z(W){hl(xc,W)}Es(()=>{Pt.visible=!0,Pt.canSwitchView=!0,Pt.total=d.value.length,Pt.selected=O.value?1:0,Pt.text="",Pt.view=a.value}),rn(()=>na(W=>Z(W))),Rt(()=>{na(null),bd()});const{cmOpen:G,cmX:F,cmY:de,cmItems:I,openMenu:ve}=vn();function ye(W,J){O.value=J.path;const z=uo(J.path);ve(W,[{label:e("menuOpen"),icon:"arrowRight",onClick:()=>H(J)},{label:e("menuOpenInEditor"),icon:"code",onClick:()=>pr(J.path)},{separator:!0},{label:e(z?"favoriteRemove":"favoriteAdd"),icon:"star",onClick:()=>{const ee=Ki(J.path);Y("ok",e(ee?"favoriteAdded":"favoriteRemoved"))}},{label:e("menuCopyPath"),icon:"link",onClick:()=>void Ne(J.path)},{separator:!0},{label:e("menuProperties"),icon:"info",onClick:()=>we(J)}])}function be(W){ve(W,[{label:e("menuRefresh"),icon:"refresh",onClick:()=>void Ft()},{separator:!0},{label:e("menuView"),icon:"eye",children:le()},{label:e("menuSort"),icon:"sort",children:re()}])}function le(){const W=(J,z)=>({label:J,checked:a.value===z,onClick:()=>Z(z)});return[W(e("viewHuge"),"huge"),W(e("viewLarge"),"large"),W(e("viewMedium"),"medium"),W(e("viewSmall"),"small"),{separator:!0},W(e("viewList"),"list"),{separator:!0},W(e("viewDetails"),"details"),W(e("viewContent"),"content"),W(e("viewTiles"),"tiles")]}function re(){return[["name",e("sortName")],["size",e("driveTotal")],["free",e("driveFree")],["type",e("sortType")]].map(([J,z])=>({label:z,checked:v.value===J,onClick:()=>{v.value=J}}))}const Ee=g(!1),Ve=g(null);function we(W){Ve.value=W,Ee.value=!0}async function Ne(W){try{await navigator.clipboard.writeText(W),Y("ok",e("menuPathCopied"))}catch{Y("error",e("menuPathCopyFail"))}}return sa((W,J)=>{switch(W){case"view":J&&n.concat(["list","details","content","tiles"]).includes(J)&&Z(J);break;case"sort":(J==="name"||J==="size"||J==="free"||J==="type")&&(v.value=J);break;case"refresh":Ft();break;case"properties":{const z=d.value.find(ee=>ee.path===O.value);z&&we(z);break}}}),Rt(()=>sa(null)),Es(()=>{hn.selectionCount=O.value?1:0,hn.canOperate=!1,hn.hasClipboard=Tl(),hn.isRecycle=!1}),(W,J)=>{const z=Mn,ee=cn;return l(),c("div",{class:"fw-tp",onKeydown:C},[s(ie).drivesErr?(l(),c("div",Vk,i(s(ie).drivesErr),1)):(l(),c("div",{key:1,ref_key:"wrapRef",ref:M,class:te(["fw-tp-wrap","fw-tp-"+a.value]),tabindex:"0",onClick:V,onContextmenu:xe(be,["prevent"])},[o("div",zk,i(s(e)("thisPcDevices"))+" ("+i(d.value.length)+")",1),r.value?(l(),c("div",Uk,[(l(!0),c(oe,null,Ae(d.value,me=>(l(),c("div",{key:me.path,class:te(["fw-drive",{selected:me.path===O.value,removable:me.removable}]),"data-path":me.path,title:me.path,onClick:je=>A(me),onDblclick:je=>H(me),onContextmenu:xe(je=>ye(je,me),["prevent","stop"])},[o("span",Wk,[m(ne,{name:"hardDrive",size:u.value},null,8,["size"])]),o("span",Gk,[o("span",qk,i(s(zs)(me)),1),o("span",Kk,[o("span",{class:"fw-drive-fill",style:_t({width:b(me)})},null,4)]),o("span",Xk,i(k(me)),1)])],42,Hk))),128)),!d.value.length&&!s(ie).drivesLoading?(l(),c("div",Yk,i(s(e)("emptyDrives")),1)):N("",!0)])):(l(),c("table",Jk,[o("thead",null,[o("tr",null,[o("th",Qk,i(s(e)("colName")),1),o("th",Zk,i(s(e)("colType")),1),o("th",ex,i(s(e)("driveTotal")),1),o("th",tx,i(s(e)("driveFree")),1),o("th",nx,i(s(e)("driveFs")),1)])]),o("tbody",null,[(l(!0),c(oe,null,Ae(d.value,me=>(l(),c("tr",{key:me.path,class:te(["fw-tp-row",{selected:me.path===O.value}]),"data-path":me.path,title:me.path,onClick:je=>A(me),onDblclick:je=>H(me),onContextmenu:xe(je=>ye(je,me),["prevent","stop"])},[o("td",ox,[o("span",ix,[o("span",ax,[m(ne,{name:"hardDrive",size:16})]),o("span",lx,i(s(zs)(me)),1)])]),o("td",rx,i(me.removable?s(e)("driveTypeRemovable"):s(e)("driveTypeFixed")),1),o("td",cx,i(f(me.total)),1),o("td",ux,i(f(me.free)),1),o("td",dx,i(me.fsType||"—"),1)],42,sx))),128)),d.value.length?N("",!0):(l(),c("tr",px,[o("td",fx,i(s(e)("emptyDrives")),1)]))])]))],34)),s(ie).drivesLoading?(l(),c("div",vx,[...J[3]||(J[3]=[o("div",{class:"fw-tp-spinner"},null,-1)])])):N("",!0),s(G)?(l(),Xe(Zt,{key:3,items:s(I),x:s(F),y:s(de),onClose:J[0]||(J[0]=me=>G.value=!1)},null,8,["items","x","y"])):N("",!0),m(ee,{modelValue:Ee.value,"onUpdate:modelValue":J[2]||(J[2]=me=>Ee.value=me),class:"fw-prop-dialog",title:s(e)("menuProperties"),width:"420px","close-on-click-modal":!1},{footer:se(()=>[m(z,{type:"primary",onClick:J[1]||(J[1]=me=>Ee.value=!1)},{default:se(()=>[ue(i(s(e)("confirmOk")),1)]),_:1})]),default:se(()=>[Ve.value?(l(),c("div",hx,[o("div",mx,[o("span",gx,i(s(e)("propName")),1),o("span",yx,i(Ve.value.name),1)]),o("div",wx,[o("span",bx,i(s(e)("propPath")),1),o("span",_x,i(Ve.value.path),1)]),o("div",kx,[o("span",xx,i(s(e)("propKind")),1),o("span",Cx,i(Ve.value.removable?s(e)("driveTypeRemovable"):s(e)("driveTypeFixed")),1)]),o("div",Sx,[o("span",$x,i(s(e)("driveFs")),1),o("span",Ex,i(Ve.value.fsType||"—"),1)]),o("div",Tx,[o("span",Dx,i(s(e)("propSize")),1),o("span",Fx,i(f(w(Ve.value))),1)]),o("div",Px,[o("span",Nx,i(s(e)("driveFree")),1),o("span",Rx,i(f(Ve.value.free)),1)]),o("div",Ax,[o("span",Mx,i(s(e)("driveTotal")),1),o("span",Ox,i(f(Ve.value.total)),1)]),o("div",Lx,[o("span",{class:"fw-prop-fill",style:_t({width:b(Ve.value)})},null,4)])])):N("",!0)]),_:1},8,["modelValue","title"])],32)}}}),Ix=xt(Bx,[["__scopeId","data-v-5d2b5f89"]]),jx=["title"],Vx=["disabled","title"],zx=["disabled","title"],Ux=["disabled","title"],Hx=["title"],Wx=["title"],Gx={class:"fw-pmenu-check"},qx=["title"],Kx={class:"fw-pmenu-check"},Xx={class:"fw-pmenu-check"},Yx=["disabled","title"],Jx=["disabled","title"],Qx=["disabled","title"],Zx=["disabled","title"],eC=["disabled","title"],tC=["disabled","title"],nC=["title"],sC={class:"fw-pmenu-check"},oC=["title"],iC={class:"fw-pmenu-check"},aC={class:"fw-pmenu-check"},lC=["disabled","title"],rC=ht({__name:"CommandBar",props:{navFolded:{type:Boolean},compact:{type:Boolean}},emits:["unfold-nav"],setup(t){const{t:e}=Mt(),n=B(()=>hn.isRecycle||!hn.canOperate),a=B(()=>hn.selectionCount>0),r=B(()=>(ie.recycleItems?.length??0)>0),u=B(()=>[["name",e("sortName")],["mtime",e("sortModified")],["type",e("sortType")],["size",e("sortSize")]]),v=B(()=>[["huge",e("viewHuge")],["large",e("viewLarge")],["medium",e("viewMedium")],["small",e("viewSmall")],["list",e("viewList")],["details",e("viewDetails")],["content",e("viewContent")],["tiles",e("viewTiles")]]);function d(w,b){if(w==="newSshHost"){Vu();return}if(w==="openTerminal"){Co(ie.listing?.path??"");return}if(w==="cloneGit"||w==="cloneSvn"){_r({kind:w==="cloneGit"?"git":"svn",dir:ie.listing?.path??"",key:Fe.key,onDone:({path:k})=>{Vt(k)}});return}f2(w,b)}function f(w){w==="toggleExt"?d("toggleExt"):d("view",w)}return(w,b)=>{const k=Mp,O=Ap,M=Rp;return l(),c("div",{class:te(["fw-cmdbar",{"is-compact":t.compact}])},[t.navFolded?(l(),c("button",{key:0,class:"fw-cb-btn fw-cb-navtoggle",title:s(e)("expShowNav"),onClick:b[0]||(b[0]=A=>w.$emit("unfold-nav"))},[m(ne,{class:"fw-cb-hamburger",name:"viewList",size:13}),ue(i(s(e)("expShowNav")),1)],8,jx)):N("",!0),s(hn).isRecycle?(l(),c(oe,{key:1},[o("button",{class:"fw-cb-btn",disabled:!a.value,title:s(e)("recycleRestore"),onClick:b[1]||(b[1]=A=>d("restore"))},[m(ne,{name:"undo",size:13}),ue(i(s(e)("recycleRestore")),1)],8,Vx),o("button",{class:"fw-cb-btn",disabled:!a.value,title:s(e)("recycleDelete"),onClick:b[2]||(b[2]=A=>d("delete"))},[m(ne,{name:"trash",size:13}),ue(i(s(e)("recycleDelete")),1)],8,zx),o("button",{class:"fw-cb-btn",disabled:!r.value,title:s(e)("recycleEmpty"),onClick:b[3]||(b[3]=A=>d("emptyRecycle"))},[m(ne,{name:"close",size:13}),ue(i(s(e)("recycleEmpty")),1)],8,Ux),o("button",{class:"fw-cb-btn",title:s(e)("menuRefresh"),onClick:b[4]||(b[4]=A=>d("refresh"))},[m(ne,{name:"refresh",size:13}),ue(i(s(e)("menuRefresh")),1)],8,Hx),b[18]||(b[18]=o("span",{class:"fw-cb-sep"},null,-1)),m(M,{trigger:"click",teleported:!1,"popper-class":"fw-panelmenu-popper",onCommand:b[5]||(b[5]=A=>d("sort",String(A)))},{dropdown:se(()=>[m(O,{class:"fw-panelmenu"},{default:se(()=>[(l(!0),c(oe,null,Ae(u.value,A=>(l(),Xe(k,{key:A[0],command:A[0],class:"fw-panelitem"},{default:se(()=>[o("span",Gx,i(s(Ue).sortKey===A[0]?"✓":""),1),ue(i(A[1]),1)]),_:2},1032,["command"]))),128))]),_:1})]),default:se(()=>[o("button",{class:"fw-cb-btn",title:s(e)("menuSort")},[m(ne,{name:"sort",size:13}),ue(i(s(e)("menuSort"))+" ",1),b[16]||(b[16]=o("span",{class:"caret"},"▾",-1))],8,Wx)]),_:1}),m(M,{trigger:"click",teleported:!1,"popper-class":"fw-panelmenu-popper",onCommand:b[6]||(b[6]=A=>f(String(A)))},{dropdown:se(()=>[m(O,{class:"fw-panelmenu"},{default:se(()=>[(l(!0),c(oe,null,Ae(v.value,A=>(l(),Xe(k,{key:A[0],command:A[0],class:"fw-panelitem"},{default:se(()=>[o("span",Kx,i(s(qi)===A[0]?"✓":""),1),ue(i(A[1]),1)]),_:2},1032,["command"]))),128)),m(k,{divided:"",command:"toggleExt",class:"fw-panelitem"},{default:se(()=>[o("span",Xx,i(s(Ue).showExtensions?"✓":""),1),ue(i(s(e)("showExtensions")),1)]),_:1})]),_:1})]),default:se(()=>[o("button",{class:"fw-cb-btn",title:s(e)("menuView")},[m(ne,{name:"viewDetails",size:13}),ue(i(s(e)("menuView"))+" ",1),b[17]||(b[17]=o("span",{class:"caret"},"▾",-1))],8,qx)]),_:1})],64)):(l(),c(oe,{key:2},[m(M,{trigger:"click",teleported:!1,"popper-class":"fw-panelmenu-popper",onCommand:b[7]||(b[7]=A=>d(String(A)))},{dropdown:se(()=>[m(O,{class:"fw-panelmenu"},{default:se(()=>[m(k,{command:"newFolder",class:"fw-panelitem"},{default:se(()=>[ue(i(s(e)("menuNewFolder")),1)]),_:1}),m(k,{command:"newFile",class:"fw-panelitem"},{default:se(()=>[ue(i(s(e)("menuNewFile")),1)]),_:1}),m(k,{command:"upload",class:"fw-panelitem"},{default:se(()=>[ue(i(s(e)("menuUpload")),1)]),_:1}),m(k,{command:"cloneGit",class:"fw-panelitem"},{default:se(()=>[ue(i(s(e)("menuCloneGit")),1)]),_:1}),m(k,{command:"cloneSvn",class:"fw-panelitem"},{default:se(()=>[ue(i(s(e)("menuCloneSvn")),1)]),_:1}),m(k,{divided:"",command:"newSshHost",class:"fw-panelitem"},{default:se(()=>[ue(i(s(e)("sshNewHost")),1)]),_:1}),m(k,{command:"openTerminal",class:"fw-panelitem"},{default:se(()=>[ue(i(s(e)("terminalNew")),1)]),_:1})]),_:1})]),default:se(()=>[o("button",{class:"fw-cb-btn",disabled:n.value,title:s(e)("menuNew")},[m(ne,{name:"plus",size:13}),ue(i(s(e)("menuNew"))+" ",1),b[19]||(b[19]=o("span",{class:"caret"},"▾",-1))],8,Yx)]),_:1}),o("button",{class:"fw-cb-btn",disabled:!a.value,title:s(e)("menuCut"),onClick:b[8]||(b[8]=A=>d("cut"))},[m(ne,{name:"cut",size:13}),ue(i(s(e)("menuCut")),1)],8,Jx),o("button",{class:"fw-cb-btn",disabled:!a.value,title:s(e)("menuCopy"),onClick:b[9]||(b[9]=A=>d("copy"))},[m(ne,{name:"copy",size:13}),ue(i(s(e)("menuCopy")),1)],8,Qx),o("button",{class:"fw-cb-btn",disabled:s(hn).hasClipboard||n.value,title:s(e)("menuPaste"),onClick:b[10]||(b[10]=A=>d("paste"))},[m(ne,{name:"paste",size:13}),ue(i(s(e)("menuPaste")),1)],8,Zx),o("button",{class:"fw-cb-btn",disabled:s(hn).selectionCount!==1||n.value,title:s(e)("menuRename"),onClick:b[11]||(b[11]=A=>d("rename"))},[m(ne,{name:"edit",size:13}),ue(i(s(e)("menuRename")),1)],8,eC),o("button",{class:"fw-cb-btn",disabled:!a.value||n.value,title:s(e)("menuDelete"),onClick:b[12]||(b[12]=A=>d("delete"))},[m(ne,{name:"trash",size:13}),ue(i(s(e)("menuDelete")),1)],8,tC),b[22]||(b[22]=o("span",{class:"fw-cb-sep"},null,-1)),m(M,{trigger:"click",teleported:!1,"popper-class":"fw-panelmenu-popper",onCommand:b[13]||(b[13]=A=>d("sort",String(A)))},{dropdown:se(()=>[m(O,{class:"fw-panelmenu"},{default:se(()=>[(l(!0),c(oe,null,Ae(u.value,A=>(l(),Xe(k,{key:A[0],command:A[0],class:"fw-panelitem"},{default:se(()=>[o("span",sC,i(s(Ue).sortKey===A[0]?"✓":""),1),ue(i(A[1]),1)]),_:2},1032,["command"]))),128))]),_:1})]),default:se(()=>[o("button",{class:"fw-cb-btn",title:s(e)("menuSort")},[m(ne,{name:"sort",size:13}),ue(i(s(e)("menuSort"))+" ",1),b[20]||(b[20]=o("span",{class:"caret"},"▾",-1))],8,nC)]),_:1}),m(M,{trigger:"click",teleported:!1,"popper-class":"fw-panelmenu-popper",onCommand:b[14]||(b[14]=A=>f(String(A)))},{dropdown:se(()=>[m(O,{class:"fw-panelmenu"},{default:se(()=>[(l(!0),c(oe,null,Ae(v.value,A=>(l(),Xe(k,{key:A[0],command:A[0],class:"fw-panelitem"},{default:se(()=>[o("span",iC,i(s(qi)===A[0]?"✓":""),1),ue(i(A[1]),1)]),_:2},1032,["command"]))),128)),m(k,{divided:"",command:"toggleExt",class:"fw-panelitem"},{default:se(()=>[o("span",aC,i(s(Ue).showExtensions?"✓":""),1),ue(i(s(e)("showExtensions")),1)]),_:1})]),_:1})]),default:se(()=>[o("button",{class:"fw-cb-btn",title:s(e)("menuView")},[m(ne,{name:"viewDetails",size:13}),ue(i(s(e)("menuView"))+" ",1),b[21]||(b[21]=o("span",{class:"caret"},"▾",-1))],8,oC)]),_:1}),b[23]||(b[23]=o("span",{class:"fw-cb-flex"},null,-1)),o("button",{class:"fw-cb-btn",disabled:!a.value,title:s(e)("cmdPreview"),onClick:b[15]||(b[15]=A=>d("preview"))},[m(ne,{name:"eye",size:13}),ue(i(s(e)("cmdPreview")),1)],8,lC)],64))],2)}}}),cC=xt(rC,[["__scopeId","data-v-940d1c90"]]),uC=["title"],dC={key:0,class:"fw-bg-task-badge"},pC={class:"fw-bg-task-head"},fC={class:"fw-bg-task-title"},vC={class:"fw-bg-task-headacts"},hC=["disabled"],mC=["disabled"],gC=["disabled"],yC=["title"],wC={key:0,class:"fw-bg-task-group"},bC={class:"fw-bg-task-grouplbl"},_C=["onClick"],kC={class:"fw-bg-task-label"},xC={key:0,class:"fw-bg-task-detail"},CC={class:"fw-bg-task-see"},SC={key:1,class:"fw-bg-task-group"},$C={class:"fw-bg-task-grouplbl"},EC=["onClick"],TC={class:"fw-bg-task-ico"},DC={class:"fw-bg-task-label"},FC={key:0,class:"fw-bg-task-detail"},PC={class:"fw-bg-task-see"},NC={key:2,class:"fw-bg-task-empty"},RC={class:"fw-dlg-head"},AC={class:"fw-dlg-badge"},MC={class:"fw-dlg-headtext"},OC={class:"fw-dlg-headtitle"},LC={class:"fw-dlg-headsub"},BC={class:"fw-tlog-head"},IC={class:"fw-tlog-name"},jC={key:0,class:"fw-tlog-fileitem"},VC={class:"fw-tlog-k"},zC=["title"],UC={class:"fw-tlog-meta"},HC={key:0},WC={key:1},GC={key:2},qC={class:"fw-tlog-timeline"},KC={class:"fw-tlog-rail"},XC={key:0,class:"fw-tlog-line"},YC={class:"fw-tlog-ct"},JC={class:"fw-tlog-brow"},QC={class:"fw-tlog-time"},ZC={class:"fw-tlog-dur-tip"},eS={class:"fw-tlog-btext"},tS={key:0,class:"fw-tlog-bnote"},nS={class:"fw-dlg-head"},sS={class:"fw-dlg-badge"},oS={class:"fw-dlg-headtext"},iS={class:"fw-dlg-headtitle"},aS={class:"fw-dlg-headsub"},lS={class:"fw-taskarc"},rS={class:"fw-taskarc-dates"},cS=["onClick"],uS={class:"fw-taskarc-cnt"},dS={class:"fw-taskarc-records"},pS={key:0,class:"fw-taskarc-none"},fS=["onClick"],vS={class:"fw-taskarc-ico"},hS={class:"fw-taskarc-label"},mS={key:0,class:"fw-taskarc-recdetail"},gS={class:"fw-taskarc-time"},yS={class:"fw-taskarc-detail"},wS={key:0,class:"fw-taskarc-none"},bS={class:"fw-tlog-head"},_S={class:"fw-tlog-name"},kS={key:0,class:"fw-tlog-fileitem"},xS={class:"fw-tlog-k"},CS=["title"],SS={class:"fw-tlog-meta"},$S={key:0},ES={key:1},TS={key:2},DS={class:"fw-tlog-timeline"},FS={class:"fw-tlog-rail"},PS={key:0,class:"fw-tlog-line"},NS={class:"fw-tlog-ct"},RS={class:"fw-tlog-brow"},AS={class:"fw-tlog-time"},MS={class:"fw-tlog-dur-tip"},OS={class:"fw-tlog-btext"},LS={key:0,class:"fw-tlog-bnote"},Ka=340,Cc=11,Oo=8,BS=ht({__name:"BgTaskPanel",setup(t){const{t:e}=Mt(),n=B(()=>Kn.open.value),a=B(()=>Kn.state.list),r=B(()=>Kn.state.history),u=B(()=>a.value.filter(fe=>fe.status==="running")),v=B(()=>u.value.length),d=B(()=>r.value.length>0),f=g(null),w=g(!1),b=g(null),k=gt({width:Ka,left:0,bottom:0,maxH:360,arrow:Ka/2}),O=B(()=>({width:`${k.width}px`,left:`${k.left}px`,bottom:`${k.bottom}px`})),M=B(()=>({maxHeight:`${k.maxH}px`})),A=B(()=>({left:`${k.arrow}px`}));function V(){const fe=b.value;if(!fe)return;const Ce=fe.getBoundingClientRect(),qe=window.innerWidth,ce=window.innerHeight,Ie=Ce.left+Ce.width/2,rt=Math.min(Ka,Math.max(qe-Oo*2,200)),yt=Math.max(qe-rt-Oo,Oo),ut=Ie<qe/2?Ce.left-2:Ie-rt/2,it=Math.min(Math.max(ut,Oo),yt);k.width=Math.round(rt),k.left=Math.round(it),k.bottom=Math.round(ce-Ce.top+Cc),k.maxH=Math.max(140,Math.min(Ce.top-Cc-Oo,Math.round(ce*.6))),k.arrow=Math.round(Math.min(Math.max(Ie-it,16),rt-16))}Je(n,fe=>{fe&&(V(),Dt(V))});const H=g(!1),C=g(null),Z=B(()=>Kn.state.archives),G=B(()=>Object.keys(Z.value).sort((fe,Ce)=>fe<Ce?1:-1).map(fe=>({date:fe,count:Z.value[fe].length}))),F=B(()=>{const fe=C.value;return[...fe&&Z.value[fe]?Z.value[fe]:[]].sort((qe,ce)=>(ce.doneAt??ce.startedAt)-(qe.doneAt??qe.startedAt))});function de(){G.value.length&&(C.value=G.value[0].date,H.value=!0)}function I(fe){Kn.setOpen(fe)}function ve(){Kn.clearFinished()}function ye(){Kn.clearAll()}function be(fe){const Ce=fe.logs,qe=Ce&&Ce.length?Ce:[{time:fe.startedAt,status:"running",msg:fe.label,file:fe.detail},{time:fe.doneAt??Date.now(),status:fe.status,msg:fe.msg??"",file:fe.detail}];f.value={label:fe.label,fileTarget:fe.detail,status:fe.status,startedAt:fe.startedAt,doneAt:fe.doneAt,msg:fe.msg,logs:qe},w.value=!0}function le(fe,Ce){let qe=Ce;return fe.map(ce=>{const Ie=ce.time-qe>0?ce.time-qe:0;return qe=ce.time,{time:ce.time,status:ce.status,title:ce.msg,file:ce.file,detail:ce.detail,durMs:Ie}})}function re(fe){let Ce=0,qe=0;const ce=new Set;for(const Ie of fe)Ie.fileType&&(ce.add(Ie.fileType),Ce+=1,Ie.fileSize!==void 0&&(qe+=Ie.fileSize));return{count:Ce,size:qe,types:[...ce]}}const Ee=B(()=>f.value?re(f.value.logs):{count:0,size:0,types:[]}),Ve=B(()=>J.value?re(W(J.value)):{count:0,size:0,types:[]}),we=B(()=>f.value?le(f.value.logs,f.value.startedAt):[]),Ne=B(()=>{const fe=f.value;if(!fe)return null;if(fe.doneAt)return fe.doneAt-fe.startedAt;const Ce=we.value[we.value.length-1];return Ce?Ce.time-fe.startedAt:0});function W(fe){return fe.logs&&fe.logs.length?fe.logs:[{time:fe.startedAt,status:"running",msg:fe.label,file:fe.detail},{time:fe.doneAt??Date.now(),status:fe.status,msg:fe.msg??"",file:fe.detail}]}const J=g(null),z=B(()=>J.value?le(W(J.value),J.value.startedAt):[]),ee=B(()=>{const fe=J.value;if(!fe)return null;if(fe.doneAt)return fe.doneAt-fe.startedAt;const Ce=z.value[z.value.length-1];return Ce?Ce.time-fe.startedAt:0});function me(){J.value=null}function je(fe){J.value=fe}function Ke(fe){const Ce=new Date(fe),qe=ce=>String(ce).padStart(2,"0");return`${qe(Ce.getHours())}:${qe(Ce.getMinutes())}:${qe(Ce.getSeconds())}`}function Ze(fe){const Ce=new Date(fe),qe=ce=>String(ce).padStart(2,"0");return`${Ce.getFullYear()}-${qe(Ce.getMonth()+1)}-${qe(Ce.getDate())} ${Ke(fe)}`}function ge(fe){if(fe==null)return"—";if(fe<0&&(fe=0),fe<1e3)return`${fe}ms`;const Ce=fe/1e3;if(Ce<60)return`${Ce.toFixed(1)}s`;const qe=Math.floor(Ce/60),ce=Math.round(Ce-qe*60);return`${qe}m ${String(ce).padStart(2,"0")}s`}function _e(fe){return e(fe==="done"?"taskStatusDone":fe==="error"?"taskStatusError":"taskStatusRunning")}function Ye(fe){let Ce=fe.title??"";return fe.file&&(Ce=Ce?`${Ce}：${fe.file}`:fe.file),Ce}rn(()=>{Kn.initTaskLogs(),document.addEventListener("mousedown",st),window.addEventListener("resize",V),window.addEventListener("scroll",V,!0)}),Rt(()=>{document.removeEventListener("mousedown",st),window.removeEventListener("resize",V),window.removeEventListener("scroll",V,!0)});function st(fe){fe.target?.closest?.(".fw-bg-task-fab, .fw-bg-task-panel")||Kn.setOpen(!1)}return(fe,Ce)=>{const qe=cn;return l(),c(oe,null,[o("button",{ref_key:"fabRef",ref:b,class:te(["fw-bg-task-fab",{active:n.value}]),title:s(e)("taskFabTitle"),onClick:Ce[0]||(Ce[0]=ce=>I(!n.value))},[m(ne,{name:"tasks",size:14}),v.value?(l(),c("span",dC,i(v.value),1)):N("",!0)],10,uC),m(Ep,{name:"fw-bg-task-pop"},{default:se(()=>[n.value?(l(),c("div",{key:0,class:"fw-bg-task-wrap",style:_t(O.value)},[o("div",{class:"fw-bg-task-panel",style:_t(M.value)},[o("div",pC,[o("span",fC,i(s(e)("taskPanelTitle")),1),o("div",vC,[o("button",{class:"fw-bg-task-link",disabled:!G.value.length,onClick:de},i(s(e)("taskArchiveOpen")),9,hC),o("button",{class:"fw-bg-task-link",disabled:!d.value,onClick:ve},i(s(e)("taskClearFinished")),9,mC),o("button",{class:"fw-bg-task-link",disabled:!a.value.length,onClick:ye},i(s(e)("taskClearAll")),9,gC),o("button",{class:"fw-bg-task-close",title:s(e)("taskClose"),onClick:Ce[1]||(Ce[1]=ce=>I(!1))},"✕",8,yC)])]),u.value.length?(l(),c("div",wC,[o("div",bC,i(s(e)("taskRunning")),1),(l(!0),c(oe,null,Ae(u.value,ce=>(l(),c("div",{key:ce.id,class:"fw-bg-task-row",onClick:Ie=>be(ce)},[Ce[4]||(Ce[4]=o("span",{class:"fw-bg-task-spin"},null,-1)),o("span",kC,i(ce.label),1),ce.detail?(l(),c("span",xC,i(ce.detail),1)):N("",!0),o("span",CC,i(s(e)("taskViewLog")),1)],8,_C))),128))])):N("",!0),r.value.length?(l(),c("div",SC,[o("div",$C,i(s(e)("taskHistory")),1),(l(!0),c(oe,null,Ae(r.value,(ce,Ie)=>(l(),c("div",{key:ce.startedAt+"-"+Ie,class:te(["fw-bg-task-row",ce.status]),onClick:rt=>be(ce)},[o("span",TC,[m(ne,{name:ce.status==="done"?"check":"close",size:13},null,8,["name"])]),o("span",DC,i(ce.label),1),ce.detail?(l(),c("span",FC,i(ce.detail),1)):N("",!0),o("span",PC,i(s(e)("taskViewLog")),1)],10,EC))),128))])):N("",!0),!u.value.length&&!r.value.length?(l(),c("div",NC,i(s(e)("taskEmpty")),1)):N("",!0)],4),o("span",{class:"fw-bg-task-arrow",style:_t(A.value)},null,4)],4)):N("",!0)]),_:1}),m(qe,{modelValue:w.value,"onUpdate:modelValue":Ce[2]||(Ce[2]=ce=>w.value=ce),class:"fw-clone-dialog fw-tasklog-dialog",width:"580px","align-center":"","modal-class":"fw-blur-overlay","close-on-click-modal":!1,"modal-append-to-body":!1,"append-to-body":!1},{header:se(()=>[o("div",RC,[o("span",AC,[m(ne,{name:"tasks",size:20})]),o("span",MC,[o("span",OC,i(s(e)("taskLogTitle")),1),o("span",LC,i(f.value?.label),1)])])]),default:se(()=>[f.value?(l(),c(oe,{key:0},[o("div",BC,[o("div",IC,i(f.value.label),1),f.value.fileTarget?(l(),c("div",jC,[o("span",VC,i(s(e)("taskFieldTarget")),1),o("span",{class:"fw-tlog-path",title:f.value.fileTarget},i(f.value.fileTarget),9,zC)])):N("",!0),o("div",UC,[o("span",{class:te(["fw-tlog-st-head",f.value.status])},i(_e(f.value.status)),3),o("span",null,i(s(e)("taskStartTime"))+" "+i(Ze(f.value.startedAt)),1),f.value.doneAt?(l(),c("span",HC,i(s(e)("taskEndTime"))+" "+i(Ze(f.value.doneAt)),1)):N("",!0),o("span",null,i(s(e)("taskTotalSpent"))+" "+i(ge(Ne.value)),1),Ee.value.types.length?(l(),c("span",WC,i(s(e)("taskFieldType"))+"："+i(Ee.value.types.join("、")),1)):N("",!0),Ee.value.count?(l(),c("span",GC,i(s(e)("taskMetaFiles",{count:Ee.value.count,size:s(kc)(Ee.value.size)})),1)):N("",!0)])]),o("div",qC,[(l(!0),c(oe,null,Ae(we.value,(ce,Ie)=>(l(),c("div",{key:Ie,class:"fw-tlog-step"},[o("div",KC,[o("span",{class:te(["fw-tlog-dot",ce.status])},null,2),Ie<we.value.length-1?(l(),c("span",XC)):N("",!0)]),o("div",YC,[o("div",{class:te(["fw-tlog-bubble",ce.status])},[o("div",JC,[o("span",QC,i(Ke(ce.time)),1),o("span",{class:te(["fw-tlog-st",ce.status])},i(_e(ce.status)),3),o("span",ZC,[Ie!==0?(l(),c(oe,{key:0},[ue(i(s(e)("taskStepSpent"))+" ",1),o("b",null,i(ge(ce.durMs)),1)],64)):N("",!0)])]),o("div",eS,i(Ye(ce)),1),ce.detail&&ce.detail!==ce.file?(l(),c("div",tS,i(ce.detail),1)):N("",!0)],2)])]))),128))])],64)):N("",!0)]),_:1},8,["modelValue"]),m(qe,{modelValue:H.value,"onUpdate:modelValue":Ce[3]||(Ce[3]=ce=>H.value=ce),class:"fw-clone-dialog fw-taskarc-dialog",width:"880px","align-center":"","modal-class":"fw-blur-overlay","close-on-click-modal":!1,"modal-append-to-body":!1,"append-to-body":!1},{header:se(()=>[o("div",nS,[o("span",sS,[m(ne,{name:"archive",size:20})]),o("span",oS,[o("span",iS,i(s(e)("taskArchiveTitle")),1),o("span",aS,i(C.value??s(e)("taskArchiveOpen")),1)])])]),default:se(()=>[o("div",lS,[o("div",rS,[(l(!0),c(oe,null,Ae(G.value,ce=>(l(),c("button",{key:ce.date,class:te(["fw-taskarc-date",{active:C.value===ce.date}]),onClick:Ie=>{C.value=ce.date,me()}},[o("span",null,i(ce.date),1),o("span",uS,i(s(e)("taskArchiveRecords",{count:ce.count})),1)],10,cS))),128))]),o("div",dS,[F.value.length?N("",!0):(l(),c("div",pS,i(s(e)("taskArchiveNone")),1)),(l(!0),c(oe,null,Ae(F.value,(ce,Ie)=>(l(),c("div",{key:ce.startedAt+"-"+Ie,class:te(["fw-taskarc-row",{[ce.status]:!0,active:J.value===ce}]),onClick:rt=>je(ce)},[o("span",vS,[m(ne,{name:ce.status==="done"?"check":"close",size:13},null,8,["name"])]),o("span",hS,i(ce.label),1),ce.detail?(l(),c("span",mS,i(ce.detail),1)):N("",!0),o("span",gS,i(Ze(ce.startedAt)),1)],10,fS))),128))]),o("div",yS,[J.value?(l(),c(oe,{key:1},[o("div",bS,[o("div",_S,i(J.value.label),1),J.value.detail?(l(),c("div",kS,[o("span",xS,i(s(e)("taskFieldTarget")),1),o("span",{class:"fw-tlog-path",title:J.value.detail},i(J.value.detail),9,CS)])):N("",!0),o("div",SS,[o("span",{class:te(["fw-tlog-st-head",J.value.status])},i(_e(J.value.status)),3),o("span",null,i(s(e)("taskStartTime"))+" "+i(Ze(J.value.startedAt)),1),J.value.doneAt?(l(),c("span",$S,i(s(e)("taskEndTime"))+" "+i(Ze(J.value.doneAt)),1)):N("",!0),o("span",null,i(s(e)("taskTotalSpent"))+" "+i(ge(ee.value)),1),Ve.value.types.length?(l(),c("span",ES,i(s(e)("taskFieldType"))+"："+i(Ve.value.types.join("、")),1)):N("",!0),Ve.value.count?(l(),c("span",TS,i(s(e)("taskMetaFiles",{count:Ve.value.count,size:s(kc)(Ve.value.size)})),1)):N("",!0)])]),o("div",DS,[(l(!0),c(oe,null,Ae(z.value,(ce,Ie)=>(l(),c("div",{key:Ie,class:"fw-tlog-step"},[o("div",FS,[o("span",{class:te(["fw-tlog-dot",ce.status])},null,2),Ie<z.value.length-1?(l(),c("span",PS)):N("",!0)]),o("div",NS,[o("div",{class:te(["fw-tlog-bubble",ce.status])},[o("div",RS,[o("span",AS,i(Ke(ce.time)),1),o("span",{class:te(["fw-tlog-st",ce.status])},i(_e(ce.status)),3),o("span",MS,[Ie!==0?(l(),c(oe,{key:0},[ue(i(s(e)("taskStepSpent"))+" ",1),o("b",null,i(ge(ce.durMs)),1)],64)):N("",!0)])]),o("div",OS,i(Ye(ce)),1),ce.detail&&ce.detail!==ce.file?(l(),c("div",LS,i(ce.detail),1)):N("",!0)],2)])]))),128))])],64)):(l(),c("div",wS,i(s(e)("taskArchiveNone")),1))])])]),_:1},8,["modelValue"])],64)}}}),IS=xt(BS,[["__scopeId","data-v-516f499d"]]),jS={key:0,class:"fw-status-progress","aria-hidden":"true"},VS={class:"fw-status-tasks"},zS=["title"],US=["inert"],HS={key:0,class:"fw-status-busy"},WS={class:"fw-status-busy-txt"},GS={key:1,class:"fw-status-info"},qS={key:0},KS={key:1,class:"fw-status-sub"},XS={key:2},YS={key:3},JS=["inert"],QS=["title","onClick"],ZS=ht({__name:"StatusBar",props:{chromeDisabled:{type:Boolean}},setup(t){const{t:e}=Mt(),n=t,a=B(()=>n.chromeDisabled??!1),r=g(null),{cmOpen:u,cmX:v,cmY:d,openMenuAt:f}=vn();function w(){const C=r.value?.getBoundingClientRect();C&&f(C.left,C.top-4)}function b(){return{path:null,projectDir:Fe.root||null}}const k=B(()=>ea().length>0),O=B(()=>{Fe.root;const C=b();return ea().map(Z=>({label:Z.text,disabled:!!Z.when&&!Z.when(C),onClick:()=>{try{xa(Z.commandId,C)}catch(G){Y("error",G.message)}}}))}),M=[{key:"details",icon:"eye",label:"viewDetails"},{key:"list",icon:"sort",label:"viewList"},{key:"large",icon:"grid",label:"viewLarge"}],A=B(()=>Kn.state.list.filter(C=>C.status==="running")),V=B(()=>A.value.length>0||Fe.search.running||ie.loading||ie.recycleLoading||ie.drivesLoading),H=B(()=>{const C=A.value[0];return C?C.detail?`${C.label} · ${C.detail}`:C.label:Fe.search.running?e("statusSearching"):ie.loading||ie.recycleLoading||ie.drivesLoading?e("statusLoading"):""});return(C,Z)=>(l(),c("div",{class:te(["fw-statusbar",{busy:V.value}])},[V.value?(l(),c("div",jS)):N("",!0),o("div",VS,[m(IS),k.value?(l(),c("button",{key:0,ref_key:"extMenuBtnRef",ref:r,class:te(["fw-status-seg fw-status-ext-btn",{on:s(u)}]),title:s(e)("vsMenuExtensions"),onClick:w},[m(ne,{name:"puzzle",size:13}),o("span",null,i(s(e)("vsMenuExtensions")),1)],10,zS)):N("",!0)]),o("div",{class:te(["fw-status-left",{"chrome-disabled":a.value}]),inert:a.value},[H.value?(l(),c("span",HS,[Z[1]||(Z[1]=o("span",{class:"fw-status-busy-dot","aria-hidden":"true"},null,-1)),o("span",WS,i(H.value),1)])):s(Pt).visible?(l(),c("span",GS,[o("span",null,i(s(e)("statusItemsCount",{count:s(Pt).total})),1),s(Pt).selected?(l(),c("span",qS,"，"+i(s(e)("selectedCount",{count:s(Pt).selected})),1)):N("",!0),s(Pt).text?(l(),c("span",KS," · "+i(s(Pt).text),1)):N("",!0)])):s(ie).view==="computer"?(l(),c("span",XS,i(s(e)("statusDrivesCount",{count:s(ie).drives.length})),1)):s(ie).view==="recycle"?(l(),c("span",YS,i(s(e)("statusItemsCount",{count:s(ie).recycleItems.length})),1)):N("",!0)],10,US),o("div",{class:te(["fw-status-right",{"chrome-disabled":a.value}]),inert:a.value},[(l(),c(oe,null,Ae(M,G=>kt(o("button",{key:G.key,class:te(["fw-vs-btn",{on:s(Pt).view===G.key}]),title:s(e)(G.label),onClick:F=>s(c1)(G.key)},[m(ne,{name:G.icon,size:13},null,8,["name"])],10,QS),[[go,s(Pt).canSwitchView]])),64))],10,JS),s(u)?(l(),Xe(Zt,{key:1,items:O.value,x:s(v),y:s(d),placement:"top",onClose:Z[0]||(Z[0]=G=>u.value=!1)},null,8,["items","x","y"])):N("",!0)],2))}}),e$=xt(ZS,[["__scopeId","data-v-69ee25ba"]]),t$=["aria-disabled","inert"],n$={class:"fw-exp-left-main"},s$=["aria-valuenow"],o$={class:"fw-exp-right"},i$={class:"fw-explorer-statusbar-shell"},Xa="dsh-file-workbench.activeExternalView",a$=640,l$=780,r$=680,c$=ht({__name:"ExplorerPane",setup(t){const e=g(null),n=g(!1),a=hr(e),r=B(Um);function u(){try{return localStorage.getItem(Xa)??"files"}catch{return"files"}}const v=g(u()),d=g(!1),f=g(null),w=new Set,b=new Set,k={apiVersion:Ss,get projectDir(){return Fe.root||null},get theme(){return a.value},activeFile:null,onProjectChange(le){return w.add(le),le(Fe.root||null),()=>w.delete(le)},onThemeChange(le){return b.add(le),le(a.value),()=>b.delete(le)},onDidChangeActiveFile(le){return le(null),()=>{}},openFile:async le=>{await ri(le)},listOpenFiles:()=>[],openDiff:()=>Y("info",h("gitDiffEmpty")),toast:Y},O=B(()=>r.value.filter(le=>!le.when||le.when(k))),M=B(()=>O.value.find(le=>le.id===v.value));Je(()=>v.value!=="files",le=>{Fe.externalViewActive=le},{immediate:!0});function A(le){v.value=le;try{localStorage.setItem(Xa,le)}catch{}}function V(){v.value="files";try{localStorage.removeItem(Xa)}catch{}}Je(()=>Fe.root,le=>w.forEach(re=>re(le||null))),Je(a,le=>b.forEach(re=>re(le))),Es(le=>{const re=M.value,Ee=f.value;if(!re||!Ee||re.when&&!re.when(k))return;const Ve=re.mount(Ee,k);Zi(Ee);const we=new ResizeObserver(()=>Zi(Ee));we.observe(Ee),le(()=>{if(we.disconnect(),typeof Ve=="function")try{Ve()}catch{}Ee.replaceChildren()})},{flush:"post"});const H=g(!1),C=g(0),Z=B(()=>C.value>0&&C.value<r$);let G=null;function F(){const le=e.value?.clientWidth??0;C.value=le,le<=a$?H.value=!0:le>=l$&&(H.value=!1)}const de=B(()=>!!Qi.value.trim()),I=B(()=>({width:`calc(${Math.round(Un.explorerSplit*1e3)/10}% - 3px)`}));function ve(le){if(!n.value||!e.value)return;const re=e.value.getBoundingClientRect();if(re.width<=0)return;const Ee=(le.clientX-re.left)/re.width;Un.explorerSplit=Math.min(.85,Math.max(.15,Ee))}function ye(){n.value&&(n.value=!1,document.removeEventListener("mousemove",ve),document.removeEventListener("mouseup",ye),document.body.style.userSelect="",document.body.style.cursor="",Mi())}function be(){n.value=!0,document.addEventListener("mousemove",ve),document.addEventListener("mouseup",ye),document.body.style.userSelect="none",document.body.style.cursor="col-resize"}return Rt(()=>{document.removeEventListener("mousemove",ve),document.removeEventListener("mouseup",ye),G?.disconnect(),G=null}),rn(()=>{e.value&&(G=new ResizeObserver(()=>F()),G.observe(e.value),F())}),(le,re)=>(l(),c("div",{ref_key:"rootRef",ref:e,class:te(["fw-explorer",{"user-slot-active":v.value!=="files"}])},[o("div",{class:te(["fw-explorer-topbar-shell",{"external-view-disabled":v.value!=="files"}]),"aria-disabled":v.value!=="files",inert:v.value!=="files"},[m(cC,{"nav-folded":H.value,compact:Z.value,onUnfoldNav:re[0]||(re[0]=Ee=>H.value=!1)},null,8,["nav-folded","compact"])],10,t$),o("div",{class:te(["fw-exp-body",{"left-folded":H.value,"user-slot-active":v.value!=="files"}])},[o("div",{class:"fw-exp-left",style:_t(I.value)},[o("div",n$,[m(Lg,{"external-views":O.value,"external-collapsed":d.value,"active-external-id":v.value==="files"?"":v.value,"external-active":v.value!=="files"&&!!M.value,onToggleExternal:re[1]||(re[1]=Ee=>d.value=!d.value),onSelectExternal:A,onSelectLocal:V},null,8,["external-views","external-collapsed","active-external-id","external-active"])])],4),o("div",{class:te(["fw-exp-split",{dragging:n.value}]),role:"separator","aria-orientation":"vertical","aria-valuenow":Math.round(s(Un).explorerSplit*100),"aria-valuemin":15,"aria-valuemax":85,onMousedown:xe(be,["prevent"])},null,42,s$),o("div",o$,[M.value?(l(),c("div",{key:0,ref_key:"extHostRef",ref:f,class:"fw-exp-ext-view"},null,512)):(l(),c(oe,{key:1},[de.value?(l(),Xe(i1,{key:0})):s(ie).view==="computer"?(l(),Xe(Ix,{key:1})):(l(),Xe(jk,{key:2}))],64))])],2),o("div",i$,[m(e$,{"chrome-disabled":v.value!=="files"},null,8,["chrome-disabled"])])],2))}}),u$=xt(c$,[["__scopeId","data-v-83c03138"]]),d$={class:"fw-navpath"},p$=["title"],f$={class:"fw-crumb last"},v$=["title"],h$=["onKeydown"],m$={key:0,class:"fw-crumb-sep"},g$=["title","onClick"],y$={key:2,class:"fw-path"},w$=ht({__name:"NavPathBar",setup(t){const{t:e}=Mt(),n=B(()=>Sl.value||Fe.root||""),a=B(()=>ie.view==="computer"?e("navThisPc"):ie.view==="recycle"?e("recycleBin"):""),r=B(()=>ie.view==="computer"?"monitor":"trash"),u=B(()=>n.value.startsWith("ssh://")),v=B(()=>{const A=n.value;if(!A)return[];const V=ju(A);if(V)return V;const H=A.replace(/\\/g,"/").split("/").filter(G=>G.length>0),C=[];let Z="";return H.forEach((G,F)=>{const de=/^[A-Za-z]:$/.test(G);Z=F===0?de?G+"/":"/"+G:Z.replace(/[\\/]+$/,"")+"/"+G,C.push({name:G,path:Z})}),C});function d(A){Vt(A)}const f=g(!1),w=g(""),b=g(null);function k(){w.value=n.value,f.value=!0,Dt(()=>{b.value?.focus(),b.value?.select()})}function O(){const A=w.value.trim();f.value=!1,A&&A!==n.value&&Vt(A).catch(V=>Y("error",V.message))}function M(){f.value=!1}return(A,V)=>(l(),c("div",d$,[a.value?(l(),c("span",{key:0,class:"fw-path fw-crumbs fw-path-static",title:a.value},[m(ne,{name:r.value,size:14,class:"fw-path-static-ico"},null,8,["name"]),o("span",f$,i(a.value),1)],8,p$)):n.value?(l(),c("span",{key:1,class:te(["fw-path",{"fw-crumbs":!f.value,editing:f.value}]),title:n.value,onClick:k},[f.value?kt((l(),c("input",{key:0,ref_key:"pathInputRef",ref:b,"onUpdate:modelValue":V[0]||(V[0]=H=>w.value=H),class:"fw-path-input",spellcheck:"false",onKeydown:[bt(xe(O,["prevent"]),["enter"]),bt(xe(M,["prevent"]),["esc"])],onBlur:M},null,40,h$)),[[Lt,w.value]]):(l(!0),c(oe,{key:1},Ae(v.value,(H,C)=>(l(),c(oe,{key:C},[C>0?(l(),c("span",m$,i(u.value?"/":"\\"),1)):N("",!0),o("button",{class:te(["fw-crumb",{last:C===v.value.length-1}]),title:H.path,onClick:xe(Z=>d(H.path),["stop"])},i(H.name),11,g$)],64))),128))],10,v$)):(l(),c("span",y$,i(s(e)("noFolder")),1))]))}}),b$=xt(w$,[["__scopeId","data-v-7f7f6ad1"]]),_$=["aria-disabled","inert"],k$={class:"fw-right"},x$=640,C$=ht({__name:"WinMenuBar",props:{externalViewActive:{type:Boolean}},emits:["open-settings"],setup(t,{emit:e}){const n=e,{t:a}=Mt(),r=g(null),u=g(!1);let v=null;rn(()=>{r.value&&(v=new ResizeObserver(()=>{u.value=(r.value?.clientWidth??0)<x$}),v.observe(r.value))}),Rt(()=>{v?.disconnect(),v=null});const d=g(!1);let f;function w(){Ft(),d.value=!0,f&&clearTimeout(f),f=setTimeout(()=>d.value=!1,650)}const b=B(()=>ie.loading||d.value);function k(){Ku()}function O(){Xu()}const M=B({get:()=>Qi.value,set:Z=>Si(Z)});let A;const V=B(()=>wa(Sl.value)?Sl.value:Fe.root||"");function H(){A&&clearTimeout(A);const Z=M.value;if(!Z.trim()){Si(""),ho("").catch(G=>Y("error",G.message));return}A=setTimeout(()=>{Si(Z),ho(Z,V.value).catch(G=>Y("error",G.message))},350)}function C(){M.value="",Si(""),ho("")}return Je(Qi,Z=>{!Z&&M.value&&(M.value="")}),(Z,G)=>{const F=Mn,de=Ts;return l(),c("header",{ref_key:"toolbarRef",ref:r,class:te(["fw-toolbar",{"external-view-disabled":t.externalViewActive}]),"aria-disabled":t.externalViewActive,inert:t.externalViewActive},[kt(m(F,{text:"",size:"small",title:s(a)("goBack"),disabled:!s(Lh),onClick:k},{default:se(()=>[m(ne,{name:"arrowLeft",size:16})]),_:1},8,["title","disabled"]),[[go,!u.value]]),kt(m(F,{text:"",size:"small",title:s(a)("goForward"),disabled:!s(Bh),onClick:O},{default:se(()=>[m(ne,{name:"arrowRight",size:16})]),_:1},8,["title","disabled"]),[[go,!u.value]]),m(F,{text:"",size:"small",title:s(a)("goUp"),disabled:!s(Ih),onClick:s(Cl)},{default:se(()=>[m(ne,{name:"up",size:16})]),_:1},8,["title","disabled","onClick"]),m(F,{text:"",size:"small",title:s(a)("goSessionDir"),onClick:s(Ju)},{default:se(()=>[m(ne,{name:"compass",size:16})]),_:1},8,["title","onClick"]),m(F,{text:"",size:"small",title:s(a)("refreshList"),onClick:w},{default:se(()=>[m(ne,{name:"refresh",class:te(["fw-refresh-ic",{spinning:b.value}]),size:15},null,8,["class"])]),_:1},8,["title"]),m(F,{text:"",size:"small",title:s(a)("settings"),onClick:G[0]||(G[0]=I=>n("open-settings"))},{default:se(()=>[m(ne,{name:"gear",size:16})]),_:1},8,["title"]),m(b$),o("div",k$,[m(de,{modelValue:M.value,"onUpdate:modelValue":G[1]||(G[1]=I=>M.value=I),class:"fw-search-input",size:"small",clearable:"",placeholder:s(a)("searchPlaceholder"),onInput:H,onClear:C},{prefix:se(()=>[m(ne,{name:"search",size:14,class:"fw-search-ico"})]),_:1},8,["modelValue","placeholder"])])],10,_$)}}}),S$=xt(C$,[["__scopeId","data-v-ccd8c5b0"]]),$$={class:"fw-shortcut"},E$={class:"fw-shortcut-head"},T$={class:"fw-shortcut-title"},D$=["title"],F$={class:"fw-shortcut-body"},P$={class:"fw-shortcut-group-title"},N$={class:"fw-shortcut-keys"},R$={class:"fw-shortcut-desc"},A$={class:"fw-shortcut-foot"},M$=ht({__name:"ShortcutHelpDialog",setup(t,{expose:e}){const{t:n}=Mt(),a=g(!1),r=B(()=>[{title:n("shortcutGlobal"),items:[{keys:["?"],label:n("shGlobalHelp")}]},{title:n("shortcutFileList"),items:[{keys:["Ctrl","A"],label:n("shListSelectAll")},{keys:["Ctrl","C"],label:n("shListCopy")},{keys:["Ctrl","X"],label:n("shListCut")},{keys:["Ctrl","V"],label:n("shListPaste")},{keys:["Ctrl","F"],label:n("shListFilter")},{keys:["Ctrl","Shift","N"],label:n("shListNewFolder")},{keys:["Delete"],label:n("shListDelete")},{keys:["F2"],label:n("shListRename")},{keys:["F5"],label:n("shListRefresh")},{keys:["Enter"],label:n("shListOpen")},{keys:["↑","↓","Home","End"],label:n("shListMove")},{keys:["Backspace"],label:n("shListUp")},{keys:["Alt","←"],label:n("shListBack")},{keys:["Alt","→"],label:n("shListForward")}]}]);Je(a,d=>{d?window.addEventListener("keydown",u):window.removeEventListener("keydown",u)});function u(d){d.key==="Escape"&&v()}function v(){a.value=!1}return e({open:()=>a.value=!0}),(d,f)=>(l(),Xe(qc,{to:"body"},[a.value?(l(),c("div",{key:0,class:"fw-shortcut-mask",onMousedown:xe(v,["self"])},[o("div",$$,[o("div",E$,[o("span",T$,i(s(n)("shortcutHelp")),1),o("span",{class:"fw-shortcut-close",title:s(n)("closeTab"),onClick:v},"✕",8,D$)]),o("div",F$,[(l(!0),c(oe,null,Ae(r.value,w=>(l(),c("section",{key:w.title,class:"fw-shortcut-group"},[o("h4",P$,i(w.title),1),(l(!0),c(oe,null,Ae(w.items,b=>(l(),c("div",{key:b.keys.join(),class:"fw-shortcut-row"},[o("span",N$,[(l(!0),c(oe,null,Ae(b.keys,k=>(l(),c("kbd",{key:k,class:"fw-shortcut-kbd"},i(k),1))),128))]),o("span",R$,i(b.label),1)]))),128))]))),128))]),o("div",A$,i(s(n)("shortcutHint")),1)])],32)):N("",!0)]))}}),O$=xt(M$,[["__scopeId","data-v-f4ba30d1"]]),L$={class:"fw-body"},B$=ht({__name:"App",setup(t){const e=g(null);hr(e);const n=B(()=>{const v=(Ue.fontFamily??"").trim(),d=v&&v!=="default"?v:"",f=Ue.fontSize??13;return{fontFamily:d?`${d}, var(--dsh-font, "Segoe UI", system-ui, sans-serif)`:void 0,fontSize:`${f}px`,"--dsh-fs-scale":String(f/13)}});Es(()=>{const v=Ue.fontSize??13;document.documentElement.style.setProperty("--dsh-fs-scale",String(v/13))});const a=g(null),r=g(null);rn(async()=>{try{await Oh()}catch{}await Hu(),ur(),zh()&&(await Ju()||await Yu()),window.addEventListener("keydown",u)}),Rt(()=>{window.removeEventListener("keydown",u)});function u(v){if(!v.ctrlKey&&!v.metaKey&&!v.altKey&&v.key==="?"){if(v.target?.closest("input, textarea, select, [contenteditable='true'], .el-input, .el-textarea"))return;v.preventDefault(),r.value?.open()}}return(v,d)=>(l(),c("div",{ref_key:"rootEl",ref:e,class:"fw-root",style:_t(n.value)},[m(S$,{"external-view-active":s(Fe).externalViewActive,onOpenSettings:d[0]||(d[0]=f=>a.value?.open())},null,8,["external-view-active"]),o("div",L$,[m(u$)]),m(fh,{ref_key:"settingsRef",ref:a},null,512),m(Zc),m(O$,{ref_key:"shortcutRef",ref:r},null,512)],4))}}),I$=xt(B$,[["__scopeId","data-v-4a279056"]]);function Fd(){return{projectDir:null,recentProjects:[],openTabs:[],activeTab:null,expanded:[],expandedSeeded:[],split:.26,termHeight:260,treeScroll:0,views:{},activityBar:{position:"top",hidden:[]},sidebarSide:"left"}}const ii=10,Sc=8;function j$(t){return t<=1?"vscode":`vscode-${t}`}let zn={version:2,recents:[],slots:{}},Ya=null,ls=[];function V$(t){return Array.isArray(t)?[...new Set(t.filter(e=>typeof e=="string"&&e!==""))].slice(0,ii):[]}function z$(t){if(!t||typeof t!="object")return null;const e=t,n={};return typeof e.scrollTop=="number"&&Number.isFinite(e.scrollTop)&&e.scrollTop>=0&&(n.scrollTop=e.scrollTop),typeof e.anchor=="number"&&Number.isFinite(e.anchor)&&e.anchor>=0&&(n.anchor=e.anchor),n.scrollTop===void 0&&n.anchor===void 0?null:n}function $c(t){const e=Fd();if(typeof t.projectDir=="string"&&(e.projectDir=t.projectDir),Array.isArray(t.recentProjects)&&(e.recentProjects=[...new Set(t.recentProjects.filter(n=>typeof n=="string"&&n!==""))].slice(0,ii)),Array.isArray(t.openTabs)&&(e.openTabs=t.openTabs.filter(n=>typeof n=="string")),typeof t.activeTab=="string"&&(e.activeTab=t.activeTab),Array.isArray(t.expanded)&&(e.expanded=t.expanded.filter(n=>typeof n=="string")),Array.isArray(t.expandedSeeded)&&(e.expandedSeeded=t.expandedSeeded.filter(n=>typeof n=="string")),typeof t.split=="number"&&t.split>.1&&t.split<.9&&(e.split=t.split),typeof t.termHeight=="number"&&Number.isFinite(t.termHeight)&&t.termHeight>=100&&(e.termHeight=Math.min(1200,t.termHeight)),typeof t.treeScroll=="number"&&Number.isFinite(t.treeScroll)&&t.treeScroll>=0&&(e.treeScroll=t.treeScroll),t.activityBar&&typeof t.activityBar=="object"&&(t.activityBar.position==="top"||t.activityBar.position==="bottom")){const n=t.activityBar;e.activityBar.position=n.position,Array.isArray(n.hidden)&&(e.activityBar.hidden=n.hidden.filter(a=>typeof a=="string"&&a!==""))}if((t.sidebarSide==="left"||t.sidebarSide==="right")&&(e.sidebarSide=t.sidebarSide),t.views&&typeof t.views=="object"){const n={};for(const[a,r]of Object.entries(t.views)){const u=z$(r);u&&(n[a]=u)}e.views=n}return e.activeTab&&!e.openTabs.includes(e.activeTab)&&(e.activeTab=e.openTabs[0]??null),e}function U$(t){if(!t||typeof t!="object")return{version:2,recents:[],slots:{}};const e=t;if(e.version===2&&e.slots&&typeof e.slots=="object"){const n={};for(const[r,u]of Object.entries(e.slots))u&&typeof u=="object"&&(n[r]=$c(u));let a;if(e.recents===void 0){const r=[];for(const u of Object.keys(n).sort((v,d)=>Number(v)-Number(d)))for(const v of n[u]?.recentProjects??[])r.includes(v)||r.push(v);a=r.slice(0,ii)}else a=V$(e.recents);for(const r of Object.values(n))r.recentProjects=[...a];return{version:2,recents:a,slots:n}}if(typeof e.projectDir=="string"||Array.isArray(e.openTabs)){const n=$c(e);return{version:2,recents:[...n.recentProjects],slots:{1:n}}}return{version:2,recents:[],slots:{}}}function H$(){return Ya||(Ya=(async()=>{const t=await vu().catch(()=>null);zn=U$(t?.vscode)})()),Ya}const Ml=new Map,Li=new Map;function Ti(t){ls=[...t];for(const e of Ml.values())e.state.recentProjects=[...ls]}function Pd(t){const e=t||"@default",n=Li.get(e);if(n!==void 0)return n;const a=new Set(Li.values());let r=1;for(;a.has(r);)r++;return Li.set(e,r),r}function xr(t){let e=Ml.get(t);return e||(e=Q$(t),Ml.set(t,e)),e}const oa=new Map;function Nd(t){let e=oa.get(t);return e||(e=new Map,oa.set(t,e)),e}function Ja(t,e){oa.get(t)?.delete(e)}function W$(t){oa.delete(t)}const Ol=new Map;function Ec(t,e){e?Ol.set(t,e):Ol.delete(t)}function G$(t){return Ol.get(t)}const Ll=new Map;function Di(t,e){e?Ll.set(t,e):Ll.delete(t)}function q$(t){return Ll.get(t)}const Bl=new Map,Il=new Map;function K$(t,e){let n=Bl.get(t);return n||(n=new Set,Bl.set(t,n)),n.add(e),()=>{n?.delete(e)}}function X$(t,e){let n=Il.get(t);return n||(n=new Set,Il.set(t,n)),n.add(e),()=>{n?.delete(e)}}function Y$(t,e,n){Bl.get(t)?.forEach(a=>a(e,n))}function J$(t,e){Il.get(t)?.forEach(n=>n(e))}const Ta=Symbol("dsh-file-workbench/vscode-store");function Q$(t){const e=gt(Fd()),n=g(!1),a=g(null);let r=null,u=null,v=null,d=!1,f=null,w=0;const b={};let k={};function O(){const G=Object.keys(zn.slots).map(Number).filter(F=>Number.isFinite(F)&&F!==t).sort((F,de)=>F-de);for(const F of G){const de=zn.slots[String(F)]?.projectDir;if(de)return de}return null}function M(){const G=Object.keys(zn.slots);if(G.length<=Sc)return;const F=new Set([...Li.values()].map(String));F.add(String(t));const de=G.filter(I=>!F.has(I)).sort((I,ve)=>Number(I)-Number(ve));for(const I of de.slice(0,G.length-Sc))delete zn.slots[I]}function A(){for(const G of Object.values(zn.slots))G.recentProjects=[...ls];zn.slots[String(t)]={...e,recentProjects:[...ls],views:{...e.views,...b}},zn.recents=[...ls],M(),Js("vscode",zn)}function V(){f===null&&(f=setTimeout(()=>{f=null,A()},400))}function H(G){const F=G.trim();F&&(Ti([F,...ls.filter(de=>de!==F)].slice(0,ii)),V())}function C(G){Ti(ls.filter(F=>F!==G)),A()}function Z(){Ti([]),A()}return{slot:t,rootKey:j$(t),state:e,ready:n,projectRequest:a,get tabId(){return r},get panelId(){return u},bindTab(G,F){r=G,u=F},markFresh(){d=!0},init(){return v||(v=(async()=>{if(await H$().catch(()=>{}),ls=[...zn.recents],!d){const G=zn.slots[String(t)];if(G)Object.assign(e,G,{views:{...G.views}});else if(!e.projectDir){const F=O();F&&(e.projectDir=F)}}Ti([...new Set([...ls,...e.recentProjects])].slice(0,ii))})()),v},persist:A,persistSoon:V,rememberProject:H,forgetProject:C,clearRecentProjects:Z,fileViewOf(G){return G?b[G]??e.views[G]??{}:{}},rememberFileView(G,F){if(!G)return;const de=b[G];de&&de.scrollTop===F.scrollTop&&de.anchor===F.anchor||(b[G]={...F},V())},stashOpenBuffers(G){k={};for(const[F,de]of Object.entries(G))k[F]={...de}},takeStashedBuffers(){const G=k;return k={},G},requestOpenProject(G){const F=G?.trim();F&&(a.value={dir:F,n:++w})}}}function Cr(){return xr(1)}const Z$={key:0,class:"vs-tree-loading"},e8={key:1,class:"vs-tree-empty"},t8=["onClick","onContextmenu","onDragstart","onDragover","onDragleave","onDrop"],n8=["onClick"],s8={key:0},o8=["title"],i8=["title"],a8=["title"],l8={key:2,class:"vs-loading"},r8={class:"vs-diff-body"},jl=new Map,c8=3e4;function u8(t,e){if(!e)return null;const n=jl.get(t);return n&&n.root===e?n:null}const Tc=new Set(["node_modules",".git",".svn",".hg","dist","build","out",".next",".nuxt",".cache","coverage","vendor","target",".venv","venv","__pycache__","bin","obj"]),d8=ht({__name:"ProjectTree",props:{root:{},activePath:{}},emits:["open-file","file-removed","file-renamed","project-missing","remove-project"],setup(t,{expose:e,emit:n}){const a=t,r=n,u=Xl(Ta)??Cr(),v=u.state,d=u.ready,f=u.rootKey,w=()=>u.persist(),b=()=>u.persistSoon();let k=u8(f,a.root);const O=k?k.nodes:gt({}),M=g(k?k.rootPath:null),A=g(null),V=g(!1);function H(D){const he=a.root;he&&(k={root:he,nodes:O,rootPath:M.value,at:Date.now()},jl.set(f,k))}function C(){k=null,jl.delete(f);for(const D of Object.keys(O))delete O[D];M.value=null}let Z=0;const G=3e3;async function F(){const D=a.root;if(!D||!d.value||Date.now()-Z<G)return;Z=Date.now();let he=!0;try{he=await rl(D,{silent:!0})}catch{he=!0}!he&&a.root===D&&(C(),r("project-missing",D))}function de(){F()}rn(()=>window.addEventListener("focus",de)),Rt(()=>window.removeEventListener("focus",de));function I(){k&&(k.at=Date.now())}const ve=B(()=>M.value?O[M.value]??null:null),ye=B(()=>{const D=[],he=ve.value;if(!he)return D;const Be=He=>{if(D.push(He),He.expanded)for(const Re of He.children){const Ge=O[Re];Ge&&Be(Ge)}};return Be(he),D});function be(D,he,Be,He,Re){return{path:D,name:he,isDir:Be,depth:He,owner:Re,expanded:!1,loaded:!1,loading:!1,children:[]}}function le(D){return D.replace(/[\\/][^\\/]+$/,"")}function re(D){if(D.isDir)for(const he of D.children){const Be=O[he];!Be||!Be.isDir||!v.expanded.includes(Be.path)||(Be.expanded=!0,Be.loaded?re(Be):Ee(Be))}}async function Ee(D,he=!1){if(D=O[D.path]??D,!D.loading){D.loading=!0,ks(D.path),ao(D.path);try{const Re=(await Ai(D.path,f)).entries.filter(Ge=>!Ge.hidden).sort((Ge,Tt)=>Number(Tt.isDir)-Number(Ge.isDir)||Ge.name.localeCompare(Tt.name,"zh"));D.children=[];for(const Ge of Re){const Tt=O[Ge.path]??be(Ge.path,Ge.name,Ge.isDir,D.depth+1,D.path);Tt.name=Ge.name,Tt.isDir=Ge.isDir,Tt.depth=D.depth+1,Tt.owner=D.path,O[Ge.path]=Tt,D.children.push(Ge.path)}D.loaded=!0,I(),re(D)}catch(He){if(D.loading=!1,su(He)){he||(await new Promise(Re=>setTimeout(Re,150)),await Ee(D,!0));return}if(D.depth===0&&He instanceof Ks&&He.status===404){C(),r("project-missing",D.path);return}Y("error",He.message)}finally{D.loading=!1}}}function Ve(D){D.isDir&&(D.expanded=!D.expanded,Ne(D.path,D.expanded),D.expanded&&(D.loaded?re(D):Ee(D)))}function we(D){D.isDir?Ve(D):r("open-file",D.path)}function Ne(D,he,Be=!0){const He=new Set(v.expanded),Re=He.has(D);he?He.add(D):He.delete(D),Re!==he&&(v.expanded=[...He],Be&&Fn())}const W=1,J=20;async function z(D,he,Be){if(!(!D.isDir||he<=0))for(const He of[...D.children]){if(Be.n>=J)return;const Re=O[He];!Re||!Re.isDir||Tc.has(Re.name.toLowerCase())||(Be.n+=1,Re.expanded=!0,Ne(Re.path,!0,!1),Re.loaded?re(Re):await Ee(Re),await z(Re,he-1,Be))}}async function ee(D){D.expanded=!0,Ne(D.path,!0,!1),await z(D,W,{n:0}),v.expandedSeeded.includes(D.path)||(v.expandedSeeded=[...v.expandedSeeded,D.path]),Fn()}function me(){const D=A.value;D&&(v.treeScroll=D.scrollTop,b())}async function je(){await Dt();const D=A.value;D&&(D.scrollTop=v.treeScroll||0)}let Ke=0;async function Ze(){const D=Ke;for(const he of ye.value.filter(Be=>Be.isDir&&Be.loaded).map(Be=>Be.path)){if(D!==Ke)return;const Be=O[he];!Be||Be.loading||await Ee(Be)}I()}async function ge(){const D=++Ke;a.root&&(V.value=!0);try{if(a.root){let St=!0;try{St=await rl(a.root)}catch{St=!0}if(!St){C(),r("project-missing",a.root);return}}if(k&&a.root&&k.root===a.root&&O[a.root]){M.value=a.root,Date.now()-k.at>c8?Ze():await je();return}k=null;for(const St of Object.keys(O))delete O[St];if(!a.root){M.value=null;return}try{await Zl(a.root,f)}catch{}if(D!==Ke)return;const he=Wt(a.root)?kl(a.root):a.root.split(/[\\/]/).filter(Boolean).pop()??a.root,Be=be(a.root,he,!0,0,a.root);O[a.root]=Be,M.value=a.root;const He=O[a.root],Re=a.root.replace(/[\\/]+$/,"").toLowerCase(),Ge=v.expanded.some(St=>{const bn=St.replace(/[\\/]+$/,"").toLowerCase();return bn===Re||bn.startsWith(`${Re}\\`)||bn.startsWith(`${Re}/`)});if(v.expandedSeeded.includes(a.root)&&Ge)He.expanded=v.expanded.includes(a.root),await Ee(He);else{if(He.expanded=!0,await Ee(He),D!==Ke)return;await ee(He)}if(D!==Ke)return;for(let St=0;St<3&&He.expanded&&He.children.length===0;St+=1){if(await new Promise(bn=>setTimeout(bn,[200,600,1500][St])),D!==Ke)return;He.loaded=!1,await Ee(He)}if(D!==Ke)return;await je(),H()}finally{D===Ke&&(V.value=!1)}}e({rebuild:ge,createFileAtRoot:Fs,createFolderAtRoot:Tn}),Je(()=>[a.root,d.value],()=>{d.value&&ge()},{immediate:!0});const _e={"":"",untracked:"?",added:"A",modified:"M",deleted:"D"};function Ye(D){return D.depth===0?"":kd(D.owner,D.name)}function st(D){return _e[Ye(D)]}function fe(D){const he=Ye(D);return he==="untracked"?h("gitBadgeUntracked"):he==="added"?h("gitBadgeAdded"):he==="modified"?h("gitBadgeModified"):he==="deleted"?h("gitBadgeDeleted"):""}function Ce(D){return D.depth===0?"":xd(D.owner,D.name)}function qe(D){return _e[Ce(D)]}function ce(D){const he=Ce(D);return he==="untracked"?h("gitBadgeUntracked"):he==="added"?h("gitBadgeAdded"):he==="modified"?h("gitBadgeModified"):he==="deleted"?h("gitBadgeDeleted"):""}const{cmOpen:Ie,cmX:rt,cmY:yt,openMenu:ut}=vn(),it=g(null),Le=g(!1),U=B(()=>it.value?Le.value?T(it.value):L(it.value):[]);function R(D,he){Le.value=!1,it.value=D;const Be=Te(D);ks(Be),ao(Be),ut(he)}function Q(D){const he=a.root?O[a.root]:void 0;he&&(Le.value=!0,it.value=he,ks(he.path),ao(he.path),ut(D))}function Te(D){return D.owner||D.path}function L(D){const he=Te(D),Be=[];return Be.push(D.isDir?{label:h("menuOpen"),icon:"folderOpen",onClick:()=>Ve(D)}:{label:h("menuOpen"),icon:"arrowRight",onClick:()=>r("open-file",D.path)}),Be.push({separator:!0}),Be.push({label:h("vsNewFile"),icon:"file",onClick:()=>void un(D)},{label:h("vsNewFolder"),icon:"folder",onClick:()=>void Bn(D)},{label:h("vsRename"),icon:"edit",onClick:()=>void Gn(D)},{label:h("vsDelete"),icon:"trash",onClick:()=>void Dn(D)}),Be.push(...Dl(he,D.path,ze)),Be.push(...Fl(he,D.path,ze)),Be.push({separator:!0},{label:h("menuCopyRelPath"),icon:"link",onClick:()=>void Sn(D.path)},{label:h("menuCopyAbsPath"),icon:"link",onClick:()=>void zt(D.path)},{label:h("menuOpenTerminal"),icon:"terminal",onClick:()=>ot(D)},{label:h("vsAddToSession"),icon:"sparkle",onClick:()=>pt(D)},{separator:!0},{label:h("vsRefresh"),icon:"refresh",onClick:()=>void yn(D)}),D.depth===0&&(Be.push({separator:!0}),Be.push({label:h("vsRemoveProject"),icon:"close",onClick:()=>r("remove-project",D.path)})),Be}function T(D){const he=D.path;return[{label:h("vsNewFile"),icon:"file",onClick:()=>void un(D)},{label:h("vsNewFolder"),icon:"folder",onClick:()=>void Bn(D)},{separator:!0},{label:h("vsExpandAll"),icon:"chevronDown",onClick:()=>void De()},{label:h("vsCollapseAll"),icon:"chevronRight",onClick:K},...Dl(he,he,ze),...Fl(he,he,ze),{separator:!0},{label:h("menuCopyRelPath"),icon:"link",onClick:()=>void Sn(he)},{label:h("menuCopyAbsPath"),icon:"link",onClick:()=>void zt(he)},{label:h("menuOpenTerminal"),icon:"terminal",onClick:()=>ot(D)},{label:h("vsAddToSession"),icon:"sparkle",onClick:()=>pt(D)},{separator:!0},{label:h("vsRefresh"),icon:"refresh",onClick:()=>void yn(D)},{separator:!0},{label:h("vsRemoveProject"),icon:"close",onClick:()=>r("remove-project",D.path)}]}function K(){const D=a.root?O[a.root]:void 0;if(D){for(const he of Object.values(O))he.expanded=he.depth===0;v.expanded=[D.path],v.expandedSeeded=[...new Set([...v.expandedSeeded,D.path])],Fn()}}const $=120;async function q(){const D=a.root?O[a.root]:void 0;if(!D)return!1;let he=$,Be=!1;const He=async Re=>{if(he<=0){Be=!0;return}he-=1;const Ge=O[Re];if(Ge?.isDir){Ge.expanded=!0,Ne(Ge.path,!0,!1),Ge.loaded||await Ee(Ge);for(const Tt of[...Ge.children]){const St=O[Tt];if(St?.isDir&&!Tc.has(St.name.toLowerCase())&&(await He(Tt),he<=0)){Be=!0;return}}}};return await He(D.path),Fn(),Be}async function De(){await q()&&Y("info",h("vsExpandAllLimited",{n:String($)}))}const ae=g(!1),ct=g(!1),wt=g(!1),Ot=g(!1),On=g(""),Gt=g(""),ze={openGitPanel:()=>{Gt.value=it.value?Te(it.value):a.root??"",ae.value=!0},openSvnPanel:()=>{Gt.value=it.value?Te(it.value):a.root??"",ct.value=!0},openCommit:()=>{Gt.value=it.value?Te(it.value):a.root??"",wt.value=!0},showGitDiff:D=>{On.value=D,Ot.value=!0},afterMutate:async D=>{await ks(D),await ao(D)}};function Qe(D){ae.value=D,D||at()}function et(D){ct.value=D,D||at()}async function at(){Cs("git"),Cs("svn");const D=new Set([...Object.keys(Ea.dirs),...Object.keys(oi.dirs)]);a.root&&D.add(a.root),await Promise.all([...D].flatMap(he=>[ks(he),ao(he)]))}function Cn(D){const he=(a.root??"").replace(/[\\/]+$/,"");return he&&D.toLowerCase().startsWith(he.toLowerCase())?D.slice(he.length).replace(/^[\\/]+/,""):D}async function Sn(D){const he=await mc(Cn(D));Y(he?"ok":"error",h(he?"menuPathCopied":"menuPathCopyFail"))}async function zt(D){const he=await mc(D);Y(he?"ok":"error",h(he?"menuPathCopied":"menuPathCopyFail"))}function ot(D){Co(D.isDir?D.path:le(D.path))}function pt(D){(window.__DSH_FILE_WORKBENCH__?.appendSessionReference?.(D.path,D.isDir)??!1)||Y("error",h("vsAddToSessionFail"))}function Ct(D){return D.isDir?D:O[le(D.path)]??D}let Ln=null;const $n=g(null);function Jn(D,he){Ln=D.path,he.dataTransfer?.setData("text/plain",D.path),he.dataTransfer&&(he.dataTransfer.effectAllowed="move")}function gn(D,he){!Ln||Ln===D.path||(he.dataTransfer&&(he.dataTransfer.dropEffect="move"),$n.value=D.isDir?D.path:le(D.path))}function En(D){const he=D.isDir?D.path:le(D.path);$n.value===he&&($n.value=null)}async function Qs(D,he){const Be=Ln??he.dataTransfer?.getData("text/plain")??"",He=Ct(D).path;if(Ln=null,$n.value=null,!Be||!He)return;const Re=He.replace(/[\\/]+$/,"");if(Be===He||Re.startsWith(Be.replace(/[\\/]+$/,"")))return;const Ge=Be.split(/[\\/]/).filter(Boolean).pop()??"";if(!Ge)return;const Tt=`${Re}/${Ge}`;if(Tt!==Be)try{await zi(Be,Tt,f),r("file-renamed",Be,Tt);const St=O[Re];St?.isDir&&!St.expanded&&(St.expanded=!0,Ne(Re,!0)),await Qn()}catch(St){Y("error",St.message)}}function Fs(){const D=a.root?O[a.root]:void 0;D&&un(D)}function Tn(){const D=a.root?O[a.root]:void 0;D&&Bn(D)}async function un(D){const he=Ct(D),Be=await ds({title:h("vsNewFile"),message:h("vsNewFileName"),placeholder:"untitled.txt",initial:"untitled.txt"})??null;if(!Be)return;const He=`${he.path.replace(/[\\/]+$/,"")}/${Be}`;try{await ru(He,f),await wn(he),r("open-file",He)}catch(Re){Y("error",Re.message)}}async function Bn(D){const he=Ct(D),Be=await ds({title:h("vsNewFolder"),message:h("vsNewFolderName"),placeholder:"new-folder",initial:"new-folder"})??null;if(!Be)return;const He=`${he.path.replace(/[\\/]+$/,"")}/${Be}`;try{await Vi(He,f),await wn(he)}catch(Re){Y("error",Re.message)}}async function Gn(D){const he=le(D.path),Be=D.name,He=await ds({title:h("vsRename"),message:h("vsRenameName"),placeholder:Be,initial:Be})??null;if(!He||He===Be)return;const Re=`${he.replace(/[\\/]+$/,"")}/${He}`;try{await zi(D.path,Re,f),r("file-renamed",D.path,Re);const Ge=O[he];Ge&&await wn(Ge)}catch(Ge){Y("error",Ge.message)}}async function Dn(D){if(!await At({title:h("vsDelete"),message:`${h("vsDeleteConfirm")}「${D.name}」？`}))return;const Be=le(D.path);try{if(await ll(D.path,f),r("file-removed",D.path),D.depth===0){C(),r("project-missing",D.path);return}const He=O[Be];He&&await wn(He)}catch(He){Y("error",He.message)}}async function yn(D){await wn(D.isDir?D:O[le(D.path)]??D)}async function wn(D){Cs("list:"),D.loaded=!1,D.expanded=!0,Ne(D.path,!0),await Ee(D)}async function Qn(){Cs("list:");const D=ve.value;if(!D)return;const he=new Set,Be=async He=>{if(!he.has(He.path)){he.add(He.path),await Ee(He);for(const Re of[...He.children]){const Ge=O[Re];Ge?.isDir&&Ge.expanded&&!Ge.loading&&await Be(Ge)}}};await Be(D),I()}function Fn(){w()}return(D,he)=>{const Be=Mn,He=cn;return l(),c("div",{ref_key:"treeRef",ref:A,class:"vs-tree",onScrollPassive:me,onContextmenu:he[6]||(he[6]=xe(Re=>Q(Re),["prevent"]))},[a.root&&!ve.value&&V.value?(l(),c("div",Z$,[he[7]||(he[7]=o("span",{class:"vs-tree-spin","aria-hidden":"true"},null,-1)),ue(i(s(h)("vsTreeLoading")),1)])):ve.value?(l(!0),c(oe,{key:2},Ae(ye.value,Re=>(l(),c("div",{key:Re.path,class:te(["vs-tree-row",{"is-active":Re.path===t.activePath,"drop-target":$n.value===Re.path}]),style:_t({paddingLeft:Re.depth*12+6+"px"}),draggable:"true",onClick:xe(Ge=>we(Re),["stop"]),onContextmenu:xe(Ge=>R(Re,Ge),["prevent","stop"]),onDragstart:Ge=>Jn(Re,Ge),onDragover:xe(Ge=>gn(Re,Ge),["prevent"]),onDragleave:Ge=>En(Re),onDrop:xe(Ge=>Qs(Re,Ge),["prevent"])},[o("span",{class:"vs-caret",onClick:xe(Ge=>Ve(Re),["stop"])},[Re.isDir?(l(),c("span",s8,i(Re.expanded?"▾":"▸"),1)):N("",!0)],8,n8),o("span",{class:te(["vs-ico",Re.isDir?"ico-dir":"ico-file"])},null,2),o("span",{class:"vs-name",title:Re.path},i(Re.name),9,o8),Ye(Re)?(l(),c("span",{key:0,class:te(["vs-git-badge","st-"+Ye(Re)]),title:fe(Re)},i(st(Re)),11,i8)):Ce(Re)?(l(),c("span",{key:1,class:te(["vs-git-badge","st-"+Ce(Re)]),title:ce(Re)},i(qe(Re)),11,a8)):N("",!0),Re.loading?(l(),c("span",l8,"…")):N("",!0)],46,t8))),128)):(l(),c("div",e8,i(s(h)("vsNoProject")),1)),s(Ie)?(l(),Xe(Zt,{key:3,items:U.value,x:s(rt),y:s(yt),onClose:he[0]||(he[0]=Re=>Ie.value=!1)},null,8,["items","x","y"])):N("",!0),m(He,{modelValue:Ot.value,"onUpdate:modelValue":he[2]||(he[2]=Re=>Ot.value=Re),class:"vs-diff-dialog",title:s(h)("gitDiffTitle"),width:"760px","append-to-body":""},{footer:se(()=>[m(Be,{type:"primary",onClick:he[1]||(he[1]=Re=>Ot.value=!1)},{default:se(()=>[ue(i(s(h)("gitDiffClose")),1)]),_:1})]),default:se(()=>[o("pre",r8,i(On.value||s(h)("gitDiffEmpty")),1)]),_:1},8,["modelValue","title"]),m(Cd,{modelValue:wt.value,"onUpdate:modelValue":he[3]||(he[3]=Re=>wt.value=Re),dir:Gt.value,onDone:at},null,8,["modelValue","dir"]),m(Ed,{modelValue:ae.value,"onUpdate:modelValue":[he[4]||(he[4]=Re=>ae.value=Re),Qe],dir:Gt.value},null,8,["modelValue","dir"]),m(Td,{modelValue:ct.value,"onUpdate:modelValue":[he[5]||(he[5]=Re=>ct.value=Re),et],dir:Gt.value},null,8,["modelValue","dir"])],544)}}}),p8=xt(d8,[["__scopeId","data-v-71abbe1d"]]),f8={class:"vs-tabs-wrap"},v8=["title"],h8=["title","onClick","onContextmenu"],m8={class:"vs-tab-name"},g8=["title","onClick"],y8={key:2,class:"vs-tab-dot"},w8=["onClick"],b8={key:0,class:"vs-tabs-empty"},_8=["title"],k8=ht({__name:"TabBar",props:{tabs:{},active:{}},emits:["select","close","save","closeSave","closeOthers","closeRight","closeAll"],setup(t,{emit:e}){const n=t,a=e,r=g(null),u=g(!1),v=g(!1),d=g(!1);let f=null;function w(){const F=r.value;F&&(u.value=F.scrollWidth>F.clientWidth+1,v.value=F.scrollLeft>1,d.value=F.scrollLeft+F.clientWidth<F.scrollWidth-1)}function b(F){const de=r.value;de&&de.scrollBy({left:F*Math.max(200,de.clientWidth*.7),behavior:"smooth"})}rn(()=>{f=new ResizeObserver(w),r.value&&f.observe(r.value),w()}),Rt(()=>{f?.disconnect(),f=null}),Je(()=>n?.tabs?.length,()=>void Dt(w));function k(F){const de=r.value;!de||de.scrollWidth<=de.clientWidth||(F.preventDefault(),de.scrollLeft+=Math.abs(F.deltaX)>Math.abs(F.deltaY)?F.deltaX:F.deltaY)}function O(F){return F.split(/[\\/]/).filter(Boolean).pop()??F}const{cmOpen:M,cmX:A,cmY:V,openMenu:H}=vn(),C=g(null);function Z(F,de){C.value=F,H(de,[])}const G=B(()=>{const F=C.value;if(!F)return[];const I=n.tabs.findIndex(ve=>ve.path===F.path)===n.tabs.length-1;return[{label:h("vsTabClose"),icon:"close",onClick:()=>a("close",F.path)},{label:h("vsTabCloseSave"),icon:"save",onClick:()=>a("closeSave",F.path)},{separator:!0},{label:h("vsTabCloseOthers"),icon:"close",disabled:n.tabs.length<2,onClick:()=>a("closeOthers",F.path)},{label:h("vsTabCloseRight"),icon:"close",disabled:I,onClick:()=>a("closeRight",F.path)},{label:h("vsTabCloseAll"),icon:"close",onClick:()=>a("closeAll")}]});return(F,de)=>(l(),c("div",f8,[o("button",{class:te(["vs-tab-arrow is-left",{dim:!v.value}]),title:s(h)("vsScrollLeft"),onClick:de[0]||(de[0]=I=>b(-1))},[m(ne,{name:"chevronLeft",size:13})],10,v8),o("div",{ref_key:"tabsEl",ref:r,class:"vs-tabs",onWheel:k,onScroll:w},[(l(!0),c(oe,null,Ae(t.tabs,I=>(l(),c("div",{key:I.path,class:te(["vs-tab",{"is-active":I.path===t.active}]),title:I.path,onClick:ve=>F.$emit("select",I.path),onContextmenu:xe(ve=>Z(I,ve),["prevent","stop"])},[I.icon?(l(),Xe(ne,{key:0,name:I.icon,size:12},null,8,["name"])):N("",!0),o("span",m8,i(O(I.path)),1),I.dirty?(l(),c("span",{key:1,class:te(["vs-tab-dirty",{conflict:I.conflict}]),title:I.conflict?s(h)("vsConflictBadge"):"",onClick:xe(ve=>F.$emit("save",I.path),["stop"])},null,10,g8)):(l(),c("span",y8)),o("span",{class:"vs-tab-close",onClick:xe(ve=>F.$emit("close",I.path),["stop"])},"×",8,w8)],42,h8))),128)),t.tabs.length?N("",!0):(l(),c("div",b8,i(s(h)("vsNoOpenFile")),1)),s(M)?(l(),Xe(Zt,{key:1,items:G.value,x:s(A),y:s(V),onClose:de[1]||(de[1]=I=>M.value=!1)},null,8,["items","x","y"])):N("",!0)],544),o("button",{class:te(["vs-tab-arrow is-right",{dim:!d.value}]),title:s(h)("vsScrollRight"),onClick:de[2]||(de[2]=I=>b(1))},[m(ne,{name:"chevronRight",size:13})],10,_8)]))}}),x8=xt(k8,[["__scopeId","data-v-3b8ef924"]]),C8="modulepreload",S8=function(t){return"/api/dsh-file-workbench/"+t},Dc={},mt=function(e,n,a){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const v=document.querySelector("meta[property=csp-nonce]"),d=v?.nonce||v?.getAttribute("nonce");r=Promise.allSettled(n.map(f=>{if(f=S8(f),f in Dc)return;Dc[f]=!0;const w=f.endsWith(".css"),b=w?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${b}`))return;const k=document.createElement("link");if(k.rel=w?"stylesheet":C8,w||(k.as="script"),k.crossOrigin="",k.href=f,d&&k.setAttribute("nonce",d),document.head.appendChild(k),w)return new Promise((O,M)=>{k.addEventListener("load",O),k.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${f}`)))})}))}function u(v){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=v,window.dispatchEvent(d),!d.defaultPrevented)throw v}return r.then(v=>{for(const d of v||[])d.status==="rejected"&&u(d.reason);return e().catch(u)})},$8={ts:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bm),__vite__mapDeps([0,1])).then(t=>[t.javascript({typescript:!0})]),tsx:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bm),__vite__mapDeps([0,1])).then(t=>[t.javascript({typescript:!0,jsx:!0})]),js:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bm),__vite__mapDeps([0,1])).then(t=>[t.javascript()]),jsx:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bm),__vite__mapDeps([0,1])).then(t=>[t.javascript({jsx:!0})]),mjs:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bm),__vite__mapDeps([0,1])).then(t=>[t.javascript()]),cjs:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bm),__vite__mapDeps([0,1])).then(t=>[t.javascript()]),json:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bn),__vite__mapDeps([0,1])).then(t=>[t.json()]),html:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bp),__vite__mapDeps([0,1])).then(t=>[t.html()]),htm:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bp),__vite__mapDeps([0,1])).then(t=>[t.html()]),vue:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bp),__vite__mapDeps([0,1])).then(t=>[t.html()]),css:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bo),__vite__mapDeps([0,1])).then(t=>[t.css()]),scss:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bo),__vite__mapDeps([0,1])).then(t=>[t.css()]),less:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bo),__vite__mapDeps([0,1])).then(t=>[t.css()]),md:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bq),__vite__mapDeps([0,1])).then(t=>[t.markdown()]),markdown:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bq),__vite__mapDeps([0,1])).then(t=>[t.markdown()]),yaml:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.br),__vite__mapDeps([0,1])).then(t=>[t.yaml()]),yml:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.br),__vite__mapDeps([0,1])).then(t=>[t.yaml()]),xml:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bs),__vite__mapDeps([0,1])).then(t=>[t.xml()]),svg:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bs),__vite__mapDeps([0,1])).then(t=>[t.xml()]),py:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bt),__vite__mapDeps([0,1])).then(t=>[t.python()]),sql:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bu),__vite__mapDeps([0,1])).then(t=>[t.sql()]),java:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bv),__vite__mapDeps([0,1])).then(t=>[t.java()]),c:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bw),__vite__mapDeps([0,1])).then(t=>[t.cpp()]),h:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bw),__vite__mapDeps([0,1])).then(t=>[t.cpp()]),cc:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bw),__vite__mapDeps([0,1])).then(t=>[t.cpp()]),cpp:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bw),__vite__mapDeps([0,1])).then(t=>[t.cpp()]),cxx:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bw),__vite__mapDeps([0,1])).then(t=>[t.cpp()]),hpp:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bw),__vite__mapDeps([0,1])).then(t=>[t.cpp()]),rs:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bx),__vite__mapDeps([0,1])).then(t=>[t.rust()]),go:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.by),__vite__mapDeps([0,1])).then(t=>[t.go()]),php:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bz),__vite__mapDeps([0,1])).then(t=>[t.php()]),cs:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bA),__vite__mapDeps([0,1])).then(t=>[Ro.define(t.csharp)]),sh:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bB),__vite__mapDeps([0,1])).then(t=>[Ro.define(t.shell)]),bash:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bB),__vite__mapDeps([0,1])).then(t=>[Ro.define(t.shell)]),zsh:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bB),__vite__mapDeps([0,1])).then(t=>[Ro.define(t.shell)]),rb:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bC),__vite__mapDeps([0,1])).then(t=>[Ro.define(t.ruby)])},E8={ts:"TypeScript",tsx:"TypeScript JSX",js:"JavaScript",jsx:"JavaScript JSX",mjs:"JavaScript",cjs:"JavaScript",json:"JSON",html:"HTML",htm:"HTML",vue:"Vue",css:"CSS",scss:"SCSS",less:"LESS",md:"Markdown",markdown:"Markdown",yaml:"YAML",yml:"YAML",xml:"XML",svg:"SVG",py:"Python",sql:"SQL",java:"Java",c:"C",h:"C/C++",cc:"C++",cpp:"C++",cxx:"C++",hpp:"C/C++",rs:"Rust",go:"Go",php:"PHP",cs:"C#",sh:"Shell",bash:"Shell",zsh:"Shell",rb:"Ruby",txt:"Plain Text"};function Rd(t){const e=t.lastIndexOf(".");if(e<0)return"";const n=t.slice(e+1).toLowerCase();return n.length>0&&n.length<=10?n:""}async function T8(t){const e=$8[Rd(t)];if(!e)return[];try{return await e()}catch{return[]}}function D8(t){const e=Rd(t);return E8[e]??(e?e.toUpperCase():"Plain Text")}const Fc="dsh-plugin-deco-styles",F8=`
.dsh-deco-error   { text-decoration: underline wavy #f85149; text-decoration-skip-ink: none; }
.dsh-deco-warning { text-decoration: underline wavy #d29922; text-decoration-skip-ink: none; }
.dsh-deco-info    { text-decoration: underline wavy #58a6ff; text-decoration-skip-ink: none; }
.dsh-deco-hint    { text-decoration: underline dotted #8b949e; text-decoration-skip-ink: none; }
.dsh-deco-deprecated { text-decoration: line-through; opacity: .7; }
.dsh-deco-highlight { background: rgba(187,128,9,0.25); }
.dsh-deco-widget { color: var(--dsh-fg-dim, #8b949e); font-style: italic; opacity: .85; padding-left: 8px; }
.cm-gutter-marker { cursor: default; }
.cm-gutter-marker.dsh-deco-bookmark { color: #e3b341; font-weight: 700; }
`;function P8(){if(typeof document>"u"||document.getElementById(Fc))return;const t=document.createElement("style");t.id=Fc,t.textContent=F8,document.head.appendChild(t)}function N8(t){return[t.category?`dsh-deco-${t.category}`:"",t.className].filter(Boolean).join(" ")}function Qa(t,e,n){return Math.max(e,Math.min(n,t))}function Bi(t,e,n=!1){if(typeof e.offset=="number")return Qa(e.offset,0,t.length);const a=Qa(e.line??1,1,t.lines),r=t.line(a);return e.character==null?n?r.to:r.from:Qa(r.from+Math.max(0,e.character-1),r.from,r.to)}class Sr extends Vp{constructor(e,n,a){super(),this.elementClass=e,this.ch=n,this.tip=a}toDOM(){const e=document.createElement("div");return e.className=this.elementClass,e.textContent=this.ch,this.tip&&(e.title=this.tip),e}eq(e){return e instanceof Sr&&this.elementClass===e.elementClass&&this.ch===e.ch&&this.tip===e.tip}}class $r extends jp{constructor(e){super(),this.text=e}eq(e){return e instanceof $r&&e.text===this.text}toDOM(){const e=document.createElement("span");return e.className="dsh-deco-widget",e.textContent=this.text,e}destroy(){}}const Za=Op.define();function Pc(t,e){const n=t.doc,a=[];for(const u of e){if(u.type!=="gutter")continue;const v=Bi(n,u.start),d=n.lineAt(v),f=`cm-gutter-marker${u.category?` dsh-deco-${u.category}`:""}${u.className?` ${u.className}`:""}`,w=u.category==="bookmark"?"●":u.message?.[0]??"•";a.push({from:d.from,to:d.to,marker:new Sr(f.trim(),w,u.message)})}a.sort((u,v)=>u.from-v.from||u.to-v.to);const r=new Xc;for(const u of a)r.add(u.from,u.to,u.marker);return r.finish()}function R8(t){P8();let e=t;const n=Lp.fromClass(class{decorations;constructor(r){this.decorations=Nc(r.state.doc,e)}update(r){(r.docChanged||r.viewportChanged||r.transactions.some(u=>u.effects.some(v=>v.is(Za))))&&(this.decorations=Nc(r.view.state.doc,e))}},{decorations:r=>r.decorations}),a=Bp.define({create:r=>Pc(r,e),update(r,u){return u.docChanged||u.effects.some(v=>v.is(Za))?Pc(u.state,e):r},provide:r=>Ip.compute([r],u=>u.field(r))});return{extension:[n,a],setItems(r){return e=r??[],Za.of(null)}}}function Nc(t,e){const n=[];for(const r of e)if(r.type==="mark"){const u=Bi(t,r.start),v=r.end?Bi(t,r.end):t.lineAt(u).to;if(v<u)continue;n.push({from:u,to:v,deco:Lr.mark({class:N8(r),title:r.message})})}else if(r.type==="widget"){const u=Bi(t,r.start,!0);n.push({from:u,to:u,deco:Lr.widget({widget:new $r(r.message??""),side:1})})}n.sort((r,u)=>r.from-u.from||r.to-u.to);const a=new Xc;for(const r of n)a.add(r.from,r.to,r.deco);return a.finish()}const Ad="\0",Md="";function Od(t,e){const n=[];return[t.replace(e,r=>(n.push(r),`${Ad}${n.length-1}${Md}`)),n]}function Vl(t,e){return t.replace(new RegExp(`${Ad}(\\d+)${Md}`,"g"),(n,a)=>e[Number(a)]??"")}function A8(t){if(!t.includes("{"))return null;const[e,n]=Od(t,/\/\*[\s\S]*?\*\/|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g);if(e.includes("/*"))return null;const a=(e.match(/{/g)??[]).length,r=(e.match(/}/g)??[]).length;if(a===0||a!==r)return null;const u=e.replace(/\s+/g," ").replace(/\s*([{};])\s*/g,"$1").trim(),v=[];let d="",f=0;const w=()=>"  ".repeat(f),b=k=>{const O=k.trim();O&&v.push(w()+O)};for(const k of u)if(k==="{")b(`${d} {`),d="",f+=1;else if(k==="}"){if(b(d),f-=1,b("}"),d="",f<0)return null}else k===";"?(b(`${d};`),d=""):k===","?(b(`${d},`),d=""):d+=k;return b(d),f!==0?null:Vl(v.join(`
`),n)}const M8=new Set(["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"]);function O8(t,e){if(/<\s*(script|style|pre|textarea)\b/i.test(t))return null;const[n,a]=Od(t,/<!--[\s\S]*?-->|<!\[CDATA\[[\s\S]*?\]\]>/g);if(n.includes("<!--"))return null;const r=[];let u=0;const v=/<[a-zA-Z!/][^>]*>/g;for(let k=v.exec(n);k;k=v.exec(n))k.index>u&&r.push({text:n.slice(u,k.index)}),r.push({tag:k[0]}),u=k.index+k[0].length;u<n.length&&r.push({text:n.slice(u)});const d=k=>k.replace(/^<\/?/,"").replace(/[\s/>].*$/s,"").toLowerCase(),f=[],w=[],b=(k,O)=>{const M=Vl(O,a).replace(/\s+/g," ").trim();M&&f.push("  ".repeat(Math.max(0,k))+M)};for(let k=0;k<r.length;k+=1){const O=r[k];if(O.text!==void 0){O.text.trim()&&b(w.length,O.text);continue}const M=O.tag,A=d(M),V=M.startsWith("</"),H=M.endsWith("/>")||e&&M8.has(A);if(V){if(w.pop()!==A)return null;b(w.length,M);continue}const C=r[k+1],Z=r[k+2];if(!H&&C?.text!==void 0&&Z?.tag!==void 0&&d(Z.tag)===A&&Z.tag.startsWith("</")){const G=`${M}${C.text}${Z.tag}`;if(Vl(G,a).replace(/\s+/g," ").trim().length<=80){b(w.length,G),k+=2;continue}}b(w.length,M),H||w.push(A)}return w.length!==0?null:f.join(`
`)}const L8={key:0,class:"vs-find"},B8={class:"vs-find-row"},I8=["placeholder","onKeydown"],j8={class:"vs-find-count"},V8=["title"],z8=["title"],U8=["title"],H8=["title"],W8=["title"],G8=["title"],q8=["title"],K8={key:0,class:"vs-find-row"},X8=["placeholder","onKeydown"],Y8=["title"],J8=["title"];let mo=null;const Q8=zp.highest(Up.of([{key:"Mod-f",run:()=>(mo?.openFind(!1),!0)},{key:"Mod-h",run:()=>(mo?.openFind(!0),!0)},{key:"Escape",run:()=>mo?.closeFind()??!1}]));function Z8(){const t=document.createElement("div");return t.className="vs-minimap",t}const fo=new Map,Ld=new Set;function eE(t){const e=Pd(t),n=fo.get(e);if(n){try{n.view.destroy()}catch{}fo.delete(e)}Ld.add(e)}typeof window<"u"&&(window.__dshFWDisposeEditorSlotByTabId=eE);const tE=ht({__name:"CodeEditor",props:{path:{},slot:{},initialContent:{},docRev:{},readonly:{type:Boolean},dark:{type:Boolean},initialView:{}},emits:["change","cursor","view","contextmenu"],setup(t,{expose:e,emit:n}){const a=t,r=n;function u($){r("contextmenu",{x:$.clientX,y:$.clientY})}const v=g(null),d=Tp(null),f=new oo,w=new oo,b=new oo,k=new oo,O=new oo,M=new oo;let A=0,V=null;const H=g(!1),C=g(!1),Z=g(""),G=g(""),F=g(!1),de=g(!1),I=g(!1),ve=g(0),ye=g(-1),be=g(null),le=B(()=>Z.value?ve.value===0?h("vsFindNoMatch"):`${ye.value<0?"?":ye.value}/${ve.value}`:"");function re(){return new Ir({search:Z.value,replace:G.value,caseSensitive:F.value,regexp:de.value,wholeWord:I.value})}function Ee(){const $=d.value;$&&($.dispatch({effects:Br.of(re())}),Ve())}function Ve(){const $=d.value;if(!$||!Z.value){ve.value=0,ye.value=-1;return}const q=re(),De=$.state.selection.main.head;let ae=0,ct=-1;const wt=q.getCursor($.state.doc);for(let Ot=wt.next();!Ot.done;Ot=wt.next())ae+=1,ct<0&&Ot.value.from>=De&&(ct=ae);ct<0&&ae>0&&(ct=1),ve.value=ae,ye.value=ct}function we(){const $=d.value;$&&Hp($),Ve()}function Ne(){const $=d.value;$&&Wp($),Ve()}function W($){$?Ne():we()}function J(){const $=d.value;$&&Gp($),Ve()}function z(){const $=d.value;$&&qp($),Ve()}function ee($){$==="case"?F.value=!F.value:$==="re"?de.value=!de.value:I.value=!I.value,Ee()}function me($){H.value=!0,$&&(C.value=!0);const q=d.value;if(q){const De=q.state.selection.main;if(!De.empty&&De.to-De.from<=200){const ae=q.state.doc.sliceString(De.from,De.to);ae.includes(`
`)||(Z.value=ae)}}Ee(),Dt(()=>be.value?.select())}function je(){const $=H.value;H.value=!1,C.value=!1,ve.value=0,ye.value=-1;const q=d.value;return q&&$&&q.dispatch({effects:Br.of(new Ir({search:""}))}),q?.focus(),$}const Ke=a.slot??0,Ze=Nd(Ke);function ge(){const $=d.value;$&&r("view",{scrollTop:$.scrollDOM.scrollTop,anchor:$.state.selection.main.head})}function _e($){const q=$;if(q.docChanged&&(r("change",q.state.doc.toString()),a.path&&Ze.set(a.path,q.state),H.value&&Ve(),Y$(a.slot??0,q.state.doc.toString(),q.changes)),q.selectionSet||q.docChanged){const De=q.state.selection.main.head,ae=q.state.doc.lineAt(De);r("cursor",ae.number,De-ae.from+1),ge(),J$(a.slot??0,q.state.selection)}}function Ye(){return Jp.of({create:()=>({dom:Z8()}),displayText:"blocks"})}function st($){const q=Math.max(0,Math.min($.length,a.initialView?.anchor??0));return ki.create({doc:$,selection:{anchor:q},extensions:[Xp,Yp(),Q8,O.of(Ue.vsMinimap?Ye():[]),f.of([]),w.of(a.dark?Ba:[]),b.of(ki.readOnly.of(!!a.readonly)),k.of(so.editable.of(!a.readonly)),M.of([]),so.updateListener.of(De=>G$(a.slot??0)?.(De))]})}function fe($){const q=Ze.get($);if(q)return q;const De=st(a.initialContent??"");return Ze.set($,De),De}async function Ce(){const $=A,q=await T8(a.path);$!==A||!d.value||d.value.dispatch({effects:f.reconfigure(q)})}function qe($){const q=a.initialView?.scrollTop??0;q>0&&requestAnimationFrame(()=>{d.value===$&&($.scrollDOM.scrollTop=q)})}function ce($){$.dispatch({effects:[w.reconfigure(a.dark?Ba:[]),b.reconfigure(ki.readOnly.of(!!a.readonly)),k.reconfigure(so.editable.of(!a.readonly)),O.reconfigure(Ue.vsMinimap?Ye():[])]})}function Ie(){const $=v.value;if(!$)return;const q=fo.get(Ke);if(q&&q.view.dom&&q.path===a.path){const ae=q.view;A++,d.value=ae,Di(Ke,ae),fo.delete(Ke),$.appendChild(ae.dom),ce(ae),qe(ae),V=()=>ge(),ae.scrollDOM.addEventListener("scroll",V,{passive:!0}),Le(a.path),requestAnimationFrame(()=>{d.value===ae&&ae.requestMeasure()}),Ce();return}if(q){try{q.view.destroy()}catch{}fo.delete(Ke)}A++;const De=new so({state:fe(a.path),parent:$});d.value=De,Di(Ke,De),ce(De),qe(De),V=()=>ge(),De.scrollDOM.addEventListener("scroll",V,{passive:!0}),Ce()}function rt($,q){const De=d.value;if(De){if($&&$!==q){let ae=!0;try{ae=xr(Ke).state.openTabs.includes($)}catch{}ae?Ze.set($,De.state):Ze.delete($)}A++,De.setState(fe(q)),ce(De),qe(De),Le(q),Ce()}}function yt(){const $=d.value;$&&V&&$.scrollDOM.removeEventListener("scroll",V),V=null}function ut(){d.value?.focus()}const it=new Map;function Le($){const q=d.value;q&&q.dispatch({effects:M.reconfigure(it.get($)??[])})}function U($){a.path&&(it.set(a.path,$),Le(a.path))}const R=new Map;function Q($){const q=a.path;if(!q)return;const De=d.value;if(!De)return;if($===null){R.delete(q),it.delete(q),Le(q);return}let ae=R.get(q)??null;if(!ae){ae=R8($),R.set(q,ae),it.set(q,ae.extension),Le(q);return}De.dispatch({effects:ae.setItems($)})}function Te($){const q=d.value;if(!q)return;const De=q.state.doc,ae=De.line(Math.max(1,Math.min(De.lines,$)));q.dispatch({selection:{anchor:ae.from,head:ae.to},effects:so.scrollIntoView(ae.from,{y:"center"})}),q.focus(),requestAnimationFrame(()=>{const ct=q.domAtPos(ae.from).node,wt=ct instanceof HTMLElement?ct.closest?.(".cm-line"):null;wt&&(wt.classList.add("cm-flash-line"),window.setTimeout(()=>wt.classList.remove("cm-flash-line"),1200))})}function L($){if(a.path.slice(a.path.lastIndexOf(".")).toLowerCase()!==".json")return null;try{return JSON.stringify(JSON.parse($),null,2)}catch{return null}}function T($){return[".css",".scss",".less"].includes($)?A8:[".html",".htm",".xhtml",".xml",".svg",".vue"].includes($)?q=>O8(q,$!==".xml"&&$!==".svg"):null}function K(){const $=d.value;if(!$||a.readonly)return!1;const q=$.state.doc.toString(),De=a.path.slice(a.path.lastIndexOf(".")).toLowerCase();if(De===".json"){const ae=L(q);if(ae!==null)return ae===q||$.dispatch({changes:{from:0,to:q.length,insert:ae}}),!0}else{const ae=T(De)?.(q);if(ae!=null)return ae===q||$.dispatch({changes:{from:0,to:q.length,insert:ae}}),!0}return $.dispatch({selection:{anchor:0,head:q.length}}),Kp($),!0}return e({focus:ut,format:K,revealLine:Te,openFind:me,setExtension:U,setDecorationsSpec:Q}),rn(()=>{Ec(a.slot??0,_e),mo={openFind:$=>me($),closeFind:()=>je()},Ie()}),Rt(()=>{if(Ec(Ke,null),mo&&(mo=null),yt(),Ld.has(Ke)){d.value?.destroy(),d.value=null,Di(Ke,null);return}d.value&&fo.set(Ke,{view:d.value,path:a.path}),Di(Ke,null),d.value=null}),Je(()=>a.path,($,q)=>{$&&(q&&q!==$?rt(q,$):q||Ie())}),Je(()=>a.docRev,()=>{if(!a.path)return;Ze.delete(a.path);const $=d.value;$&&(A++,$.setState(st(a.initialContent??"")),qe($),Ce())}),Je(()=>a.readonly,()=>{d.value?.dispatch({effects:[b.reconfigure(ki.readOnly.of(!!a.readonly)),k.reconfigure(so.editable.of(!a.readonly))]})}),Je(()=>a.dark,()=>{d.value?.dispatch({effects:w.reconfigure(a.dark?Ba:[])})}),Je(()=>Ue.vsMinimap,()=>{d.value?.dispatch({effects:O.reconfigure(Ue.vsMinimap?Ye():[])})}),($,q)=>(l(),c("div",{class:"vs-ce-root",onContextmenu:xe(u,["prevent","stop"])},[o("div",{ref_key:"hostRef",ref:v,class:"vs-code-editor"},null,512),H.value?(l(),c("div",L8,[o("div",B8,[kt(o("input",{ref_key:"findInputRef",ref:be,"onUpdate:modelValue":q[0]||(q[0]=De=>Z.value=De),class:"vs-find-input",placeholder:s(h)("vsFindPlaceholder"),onInput:Ee,onKeydown:[q[1]||(q[1]=bt(xe(De=>W(De.shiftKey),["prevent"]),["enter"])),bt(xe(je,["prevent"]),["esc"])]},null,40,I8),[[Lt,Z.value]]),o("span",j8,i(le.value),1),o("button",{class:te(["vs-find-btn",{on:F.value}]),title:s(h)("vsGrepCase"),onClick:q[2]||(q[2]=De=>ee("case"))},"Aa",10,V8),o("button",{class:te(["vs-find-btn",{on:de.value}]),title:s(h)("vsGrepRegex"),onClick:q[3]||(q[3]=De=>ee("re"))},".*",10,z8),o("button",{class:te(["vs-find-btn",{on:I.value}]),title:s(h)("vsFindWord"),onClick:q[4]||(q[4]=De=>ee("word"))},"|w|",10,U8),q[7]||(q[7]=o("span",{class:"vs-find-vsep"},null,-1)),o("button",{class:"vs-find-btn",title:s(h)("vsFindPrev"),onClick:Ne},"↑",8,H8),o("button",{class:"vs-find-btn",title:s(h)("vsFindNext"),onClick:we},"↓",8,W8),o("button",{class:te(["vs-find-btn",{on:C.value}]),title:s(h)("vsFindToggleReplace"),onClick:q[5]||(q[5]=De=>C.value=!C.value)},"⇅",10,G8),o("button",{class:"vs-find-btn",title:s(h)("vsFindClose"),onClick:je},"×",8,q8)]),C.value?(l(),c("div",K8,[kt(o("input",{"onUpdate:modelValue":q[6]||(q[6]=De=>G.value=De),class:"vs-find-input",placeholder:s(h)("vsReplacePlaceholder"),onKeydown:[bt(xe(J,["prevent"]),["enter"]),bt(xe(je,["prevent"]),["esc"])]},null,40,X8),[[Lt,G.value]]),o("button",{class:"vs-find-btn",title:s(h)("vsFindReplace"),onClick:J},"⏎",8,Y8),o("button",{class:"vs-find-btn",title:s(h)("vsFindReplaceAll"),onClick:z},"≡",8,J8)])):N("",!0)])):N("",!0)],32))}}),nE=xt(tE,[["__scopeId","data-v-2918732d"]]),sE={class:"fsp"},oE={class:"fsp-bar"},iE=["title"],aE=["disabled"],lE=["disabled"],rE={key:0,class:"fsp-newrow"},cE=["placeholder"],uE=["disabled"],dE={key:1,class:"fsp-error"},pE={class:"fsp-main"},fE={class:"fsp-side"},vE={class:"fsp-group"},hE={class:"fsp-group-title"},mE=["title","onClick"],gE={class:"fsp-side-name"},yE={key:0,class:"fsp-side-empty"},wE={class:"fsp-group"},bE={class:"fsp-group-title"},_E=["title","onClick"],kE={class:"fsp-side-name"},xE={key:0,class:"fsp-side-empty"},CE={key:0,class:"fsp-group"},SE={class:"fsp-group-title"},$E=["title","onClick"],EE=["title"],TE={class:"fsp-side-name"},DE={class:"fsp-content"},FE={key:0,class:"fsp-crumbs"},PE={key:0,class:"fsp-sep"},NE=["onClick"],RE={class:"fsp-list"},AE={key:0,class:"fsp-loading"},ME={key:1,class:"fsp-error"},OE=["onClick","onDblclick"],LE={class:"fsp-name"},BE={key:0,class:"fsp-empty"},IE={key:2,class:"fsp-namerow"},jE={class:"fsp-namelabel"},VE=["placeholder"],zE=["title"],UE={value:""},HE=["value"],WE={key:4,class:"fsp-manual"},GE=["placeholder"],qE=["disabled"],KE={class:"fsp-foot"},XE={class:"fsp-hint"},YE=["disabled"],JE=["disabled","title"],el="vscode",ia=ht({__name:"PathPickerDialog",props:{modelValue:{type:Boolean},mode:{},initialDir:{},initialName:{}},emits:["update:modelValue","confirm"],setup(t,{emit:e}){const n=t,a=e,r=B({get:()=>n.modelValue,set:L=>a("update:modelValue",L)}),u=B(()=>n.mode==="file"),v=B(()=>u.value?h("vsSaveAsTitle"):h("vsPickFolderTitle")),d=g(null),f=g(!1),w=g(void 0),b=g(""),k=g(!1),O=g(""),M=g(null),A=g(!1),V=g(void 0),H=g(""),C=g(""),Z=g(null),G=g([]),F=B(()=>d.value?.crumbs??[]),de=B(()=>d.value?.entries??[]),I=B(()=>d.value?.path||null),ve=B(()=>{const L=de.value;return!u.value||!C.value?L:L.filter(T=>T.isDir||T.name.toLowerCase().endsWith(C.value))}),ye=B(()=>{const L=n.initialName??"",T=L.lastIndexOf(".");return T>0?L.slice(T).toLowerCase():""}),be=B(()=>{const L=H.value.trim().toLowerCase();return L?de.value.some(T=>!T.isDir&&T.name.toLowerCase()===L):!1}),le=B(()=>{const L=H.value.trim();return L?ee(L)?L:me(I.value,L):""}),re=B(()=>{const L=H.value.trim();return!L||/[\\/]$/.test(L)?!1:ee(L)||!!I.value}),Ee=B(()=>G.value.filter(L=>L.type==="drive")),Ve=new Set(["pictures","music","videos","gallery"]),we=B(()=>G.value.filter(L=>L.type!=="drive"&&L.type!=="recycle"&&!Ve.has(L.type)&&!!L.path));function Ne(L){const T=Xi(L.id),K=T==="online"?h("sshStatusOnline"):T==="offline"?h("sshStatusOffline"):"",$=T==="offline"?wl(L.id):"";return K&&$?`${K}：${$}`:K||`${L.user}@${L.host}:${L.port||22}`}function W(L){switch(L.type){case"drive":return cd(L);case"home":return h("navHome");case"desktop":return h("desktopEntry");case"download":return h("downloadEntry");case"documents":return h("documentEntry");case"pictures":return h("pictureEntry");case"music":return h("musicEntry");case"videos":return h("videoEntry");case"gallery":return h("navGallery");case"workspace":return h("workspaceEntry");default:return L.name}}function J(L){switch(L.type){case"home":return"ico-home";case"desktop":return"ico-desktop";case"download":return"ico-download";case"documents":return"ico-doc";case"pictures":case"gallery":return"ico-pic";case"music":return"ico-music";case"videos":return"ico-video";case"workspace":return"ico-folder";default:return"ico-dir"}}function z(){return window.__DSH_FILE_WORKBENCH__}function ee(L){return/^[a-zA-Z]:[\\/]/.test(L)||L.startsWith("/")||L.startsWith("\\\\")||Wt(L)}function me(L,T){if(!L)return T;if(Wt(L))return cc(L,T);const K=L.includes("\\")?"\\":"/";return`${L.replace(/[\\/]+$/,"")}${K}${T}`}const je=B(()=>!!I.value&&Wt(I.value)),Ke=B(()=>je.value?!0:F.value.length>=2);function Ze(L){const T=L.replace(/\\/g,"/").replace(/\/+$/,"");if(!T)return[];const K=/^[A-Za-z]:/.test(T),$=T.split("/").filter(Boolean),q=[];if(K){const ae=$.shift();q.push({name:ae,path:`${ae}/`,hidden:!1})}let De=K?`${q[0].path.replace(/\/$/,"")}`:"";for(const ae of $)De=`${De}/${ae}`,q.push({name:ae,path:De,hidden:!1});return q}async function ge(){const L=await au();return{path:"",home:"",crumbs:[],entries:(L.drives??[]).map(T=>({name:zs(T),path:T.path,hidden:!1,isDir:!0}))}}async function _e(L){if(!L)return await ge();const T=await Ai(L);return{path:L,home:"",crumbs:Ze(L),entries:(T.entries??[]).filter(K=>K.isDir&&!K.hidden).sort((K,$)=>K.name.localeCompare($.name,"zh")).map(K=>({name:K.name,path:K.path,hidden:!!K.hidden,isDir:!0}))}}async function Ye(L){if(!L)return await ge();const K=((await Ai(L)).entries??[]).map($=>({name:$.name,path:$.path,hidden:!!$.hidden,isDir:!!$.isDir})).sort(($,q)=>$.isDir===q.isDir?$.name.localeCompare(q.name,"zh"):$.isDir?-1:1);return{path:L,home:"",crumbs:Ze(L),entries:K}}async function st(L){const K=((await Ai(L,el)).entries??[]).filter(q=>(u.value?!0:q.isDir)&&!q.hidden).sort((q,De)=>u.value&&q.isDir!==De.isDir?Number(De.isDir)-Number(q.isDir):q.name.localeCompare(De.name,"zh")).map(q=>({name:q.name,path:q.path,hidden:!!q.hidden,isDir:!!q.isDir})),$=(ju(L)??[{name:L,path:L}]).map(q=>({name:q.name,path:q.path,hidden:!1}));return{path:L,home:"",crumbs:$,entries:K}}async function fe(L){f.value=!0,w.value=void 0,M.value=null;try{if(L&&Wt(L)){d.value=await st(L);return}if(u.value){d.value=await Ye(L);return}const T=z();if(T?.listDirectory){const K=await T.listDirectory(L);d.value={path:K.path,home:K.home,crumbs:K.crumbs??[],entries:(K.entries??[]).map($=>({name:$.name,path:$.path,hidden:!!$.hidden,isDir:!0}))};return}d.value=await _e(L)}catch(T){d.value=null,w.value=T.message}finally{f.value=!1}}function Ce(L){!L||L===I.value||fe(L)}function qe(L){M.value=L.path,u.value&&!L.isDir&&(H.value=L.name)}function ce(L){if(L.isDir){if(L.path===I.value)return;fe(L.path);return}u.value&&(H.value=L.name,Le())}function Ie(L){L!==I.value&&fe(L===""?void 0:L)}function rt(){const L=I.value;if(!L)return;if(Wt(L)){const $=Ji(L);fe($||void 0);return}const T=F.value;if(T.length<2)return;const K=T[T.length-2];fe(K.hidden?void 0:K.path)}function yt(){k.value=!k.value,V.value=void 0,k.value&&(O.value="")}async function ut(){const L=O.value.trim(),T=I.value;if(!(!L||!T)){A.value=!0,V.value=void 0;try{const K=z();Wt(T)?await Vi(cc(T,L),el):K?.createDirectory?await K.createDirectory(T,L):await Vi(`${T.replace(/[\\/]+$/,"")}/${L}`),k.value=!1,O.value="",await fe(T)}catch(K){V.value=K.message}finally{A.value=!1}}}function it(){const L=M.value||I.value;L&&(a("confirm",L),r.value=!1)}function Le(){if(!re.value)return;const L=le.value;L&&(a("confirm",L),r.value=!1)}function U(){const L=b.value.trim();L&&(a("confirm",L),r.value=!1)}async function R(){qs();try{const L=await iu(el);G.value=L.items??[]}catch{G.value=[]}}function Q(){w.value=void 0,V.value=void 0,k.value=!1,O.value="",b.value=n.initialDir??"",H.value=n.initialName??"",C.value="",R(),fe(n.initialDir||void 0),u.value&&Dt(()=>{const L=Z.value;L&&(L.focus(),L.setSelectionRange(0,ye.value?L.value.length-ye.value.length:L.value.length))})}function Te(){d.value=null,b.value="",H.value="",C.value=""}return(L,T)=>{const K=cn;return l(),Xe(K,{modelValue:r.value,"onUpdate:modelValue":T[7]||(T[7]=$=>r.value=$),title:v.value,width:"720px","append-to-body":"",class:"fsp-dialog",onOpen:Q,onClosed:Te},{footer:se(()=>[o("div",KE,[o("span",XE,i(u.value?s(h)("vsSaveAsHint"):s(h)("vsPickEnterHint")),1),T[10]||(T[10]=o("span",{class:"fsp-foot-spacer"},null,-1)),o("button",{class:"fsp-btn",onClick:T[6]||(T[6]=$=>r.value=!1)},i(s(h)("vsCancel")),1),u.value?(l(),c("button",{key:0,class:"fsp-btn primary",disabled:!re.value,onClick:Le},i(s(h)("vsSave")),9,YE)):(l(),c("button",{key:1,class:"fsp-btn primary",disabled:!M.value&&!I.value||f.value,title:M.value||I.value||void 0,onClick:it},i(s(h)("vsPickConfirm")),9,JE))])]),default:se(()=>[o("div",sE,[o("div",oE,[o("div",{class:"fsp-path",title:I.value||void 0},i(I.value||s(h)("vsComputer")),9,iE),o("button",{class:"fsp-btn sm",disabled:f.value||!Ke.value,onClick:rt},i(s(h)("vsUp")),9,aE),o("button",{class:"fsp-btn sm",disabled:f.value||!I.value,onClick:yt},i(s(h)("vsNewFolderBtn")),9,lE)]),k.value?(l(),c("div",rE,[kt(o("input",{"onUpdate:modelValue":T[0]||(T[0]=$=>O.value=$),class:"fsp-input",placeholder:s(h)("vsNewFolderName"),onKeyup:[bt(ut,["enter"]),T[1]||(T[1]=bt($=>k.value=!1,["esc"]))]},null,40,cE),[[Lt,O.value]]),o("button",{class:"fsp-btn primary sm",disabled:A.value||!O.value.trim(),onClick:ut},i(s(h)("confirmOk")),9,uE),o("button",{class:"fsp-btn sm",onClick:T[2]||(T[2]=$=>k.value=!1)},i(s(h)("vsCancel")),1)])):N("",!0),V.value?(l(),c("div",dE,i(V.value),1)):N("",!0),o("div",pE,[o("div",fE,[o("div",vE,[o("div",hE,i(s(h)("myComputer")),1),(l(!0),c(oe,null,Ae(Ee.value,$=>(l(),c("div",{key:$.path,class:te(["fsp-side-row",{active:$.path===I.value}]),title:$.path,onClick:q=>Ce($.path)},[T[8]||(T[8]=o("span",{class:"fsp-ico ico-drive"},null,-1)),o("span",gE,i(W($)),1)],10,mE))),128)),Ee.value.length===0?(l(),c("div",yE,i(s(h)("vsLoading")),1)):N("",!0)]),o("div",wE,[o("div",bE,i(s(h)("vsQuickAccess")),1),(l(!0),c(oe,null,Ae(we.value,$=>(l(),c("div",{key:$.type+$.path,class:te(["fsp-side-row",{active:$.path===I.value}]),title:$.path,onClick:q=>Ce($.path)},[o("span",{class:te(["fsp-ico",J($)])},null,2),o("span",kE,i(W($)),1)],10,_E))),128)),we.value.length===0?(l(),c("div",xE,i(s(h)("vsEmptyDir")),1)):N("",!0)]),s(ln).length>0?(l(),c("div",CE,[o("div",SE,i(s(h)("sshNavGroup")),1),(l(!0),c(oe,null,Ae(s(ln),$=>(l(),c("div",{key:$.id,class:te(["fsp-side-row",{active:s(Hs)($.id)===I.value}]),title:`${$.user}@${$.host}:${$.port||22}`,onClick:q=>Ce(s(Hs)($.id))},[o("span",{class:te(["fsp-dot",`dot-${s(Xi)($.id)}`]),title:Ne($)},null,10,EE),T[9]||(T[9]=o("span",{class:"fsp-ico ico-globe"},null,-1)),o("span",TE,i($.name||`${$.user}@${$.host}`),1)],10,$E))),128))])):N("",!0)]),o("div",DE,[F.value.length>1?(l(),c("div",FE,[(l(!0),c(oe,null,Ae(F.value,($,q)=>(l(),c(oe,{key:$.path+"#"+q},[q>0?(l(),c("span",PE,"›")):N("",!0),o("span",{class:te(["fsp-crumb",{active:q===F.value.length-1}]),onClick:De=>Ie($.path)},i($.name),11,NE)],64))),128))])):N("",!0),o("div",RE,[f.value?(l(),c("div",AE,i(s(h)("vsLoading")),1)):w.value?(l(),c("div",ME,i(w.value),1)):(l(),c(oe,{key:2},[(l(!0),c(oe,null,Ae(ve.value,$=>(l(),c("div",{key:$.path,class:te(["fsp-row",{dim:$.hidden,selected:$.path===M.value}]),onClick:q=>qe($),onDblclick:q=>ce($)},[o("span",{class:te(["fsp-ico",$.isDir?"ico-dir":"ico-file"])},null,2),o("span",LE,i($.name),1)],42,OE))),128)),ve.value.length===0?(l(),c("div",BE,i(s(h)("vsEmptyDir")),1)):N("",!0)],64))])])]),u.value?(l(),c("div",IE,[o("span",jE,i(s(h)("vsFileName")),1),kt(o("input",{ref_key:"nameInputRef",ref:Z,"onUpdate:modelValue":T[3]||(T[3]=$=>H.value=$),class:"fsp-input",placeholder:s(h)("vsFileNamePlaceholder"),onKeyup:bt(Le,["enter"])},null,40,VE),[[Lt,H.value]]),kt(o("select",{"onUpdate:modelValue":T[4]||(T[4]=$=>C.value=$),class:"fsp-input fsp-select",title:s(h)("vsFileType")},[o("option",UE,i(s(h)("vsFilterAll")),1),ye.value?(l(),c("option",{key:0,value:ye.value},i(s(h)("vsFilterExt",{ext:ye.value})),9,HE)):N("",!0)],8,zE),[[Dp,C.value]])])):N("",!0),u.value?(l(),c("div",{key:3,class:te(["fsp-hintline",{warn:be.value}])},[be.value?(l(),c(oe,{key:0},[ue(i(s(h)("vsSaveAsExists")),1)],64)):(l(),c(oe,{key:1},[ue(i(le.value||s(h)("vsSaveAsHint")),1)],64))],2)):N("",!0),u.value?N("",!0):(l(),c("div",WE,[kt(o("input",{"onUpdate:modelValue":T[5]||(T[5]=$=>b.value=$),class:"fsp-input",placeholder:s(h)("vsFolderPath"),onKeyup:bt(U,["enter"])},null,40,GE),[[Lt,b.value]]),o("button",{class:"fsp-btn sm",disabled:!b.value.trim(),onClick:U},i(s(h)("vsPickInput")),9,qE)]))])]),_:1},8,["modelValue","title"])}}}),QE={key:0,class:"vs-gitbar"},ZE={class:"vs-gitbar-head"},e6=["title"],t6={class:"vs-gitbar-title"},n6={key:0,class:"vs-gitbar-count"},s6=["title"],o6={class:"vs-gitbar-list"},i6={key:0,class:"vs-gitbar-empty"},a6={key:1,class:"vs-gitbar-empty"},l6=["title","onClick"],r6=["width"],c6=["x1","x2","stroke"],u6=["x1","x2","y2","stroke"],d6=["x1","y1","x2","stroke"],p6=["d","stroke"],f6=["cx","cy","r","fill","stroke"],v6={key:1,class:"vs-gitbar-dot","aria-hidden":"true"},h6={class:"vs-gitbar-subject"},m6={key:2,class:"vs-gitbar-refs"},g6={class:"vs-gitbar-meta"},y6={key:0,class:"vs-gitbar-files"},w6={key:0,class:"vs-gitbar-empty"},b6={key:0,class:"vs-gitbar-empty"},_6=["title"],k6={class:"name"},x6={class:"dir"},C6=["title","onClick"],as=24,js=6,S6=ht({__name:"VSGitBar",emits:["open-diff"],setup(t,{emit:e}){const n=Xl(Ta)??Cr(),a=g(null),r=B(()=>a.value!==null),u=g(""),v=g(""),d=g([]),f=g(!1);function w(W){return W*$s+$s/2}function b(W,J){const z=as/2,ee=as*.82;return`M ${w(W)} ${z} C ${w(W)} ${ee}, ${w(J)} ${ee}, ${w(J)} ${as}`}function k(W){return W.commit.refs.some(J=>J.kind==="head")}const O=B(()=>a.value==="git"?$d(d.value).map(W=>({commit:W.commit,graph:W})):d.value.map(W=>({commit:W}))),M=g(""),A=gt({}),V=gt({});function H(W){return A[W]??[]}function C(W){const J=Math.max(W.lastIndexOf("/"),W.lastIndexOf("\\"));return J>=0?W.slice(J+1):W}function Z(W){const J=Math.max(W.lastIndexOf("/"),W.lastIndexOf("\\"));return J>=0?W.slice(0,J):""}function G(W){if(M.value===W.hash){M.value="";return}M.value=W.hash,we(W)}const F=e;async function de(W,J){let z=[];try{if(a.value==="git"){const ee=await Uo(u.value,["show","--no-color","--format=",W.hash,"--",J.path]);z=ee.code===0&&ee.stdout.trim()?ee.stdout.split(`
`):[]}else z=await I(W.hash,J.path)}catch{z=[]}F("open-diff",{title:`${C(J.path)} · ${W.short}`,lines:z})}async function I(W,J){const z=W.replace(/^r/,""),ee=await Qt(u.value,["diff","-c",z,"--","^"+J]);return ee.code===0&&ee.stdout.trim()?ee.stdout.split(`
`):[]}async function ve(W){if(!(A[W.hash]||V[W.hash])){V[W.hash]=!0;try{const J=await Uo(u.value,["diff-tree","--no-commit-id","--name-status","-r","--root",W.hash]);A[W.hash]=J.code===0?ye(J.stdout):[]}catch{A[W.hash]=[]}finally{V[W.hash]=!1}}}function ye(W){const J=[];for(const z of W.split(`
`)){if(!z.trim())continue;const ee=z.split("	");ee.length<2||J.push({status:ee[0][0]??"?",path:ee[ee.length-1]})}return J}function be(W){const J=[];try{new DOMParser().parseFromString(W,"application/xml").querySelectorAll("logentry").forEach(ee=>{const me=[];ee.querySelectorAll("paths > path").forEach(_e=>{const Ye=_e.getAttribute("action"),st=_e.textContent;st&&me.push({status:Ye??"",path:st})});const je="r"+(ee.getAttribute("revision")??""),Ke=ee.querySelector("author")?.textContent??"—",Ze=ee.querySelector("date")?.textContent??"",ge=ee.querySelector("msg")?.textContent??"";A[je]=me,J.push({hash:je,short:je,author:Ke,email:"",ts:Ze?Math.floor(new Date(Ze).getTime()/1e3):0,date:Ze?new Date(Ze).toLocaleString():"",subject:(ge.split(`
`)[0]??"").trim()||je,parents:[],refs:[]})})}catch{}return J}let le=0;async function re(){if(!a.value||!u.value)return;const W=++le,J=a.value,z=u.value;f.value=!0;try{if(J==="git"){const ee=await Uo(z,["log","--max-count=30",`--pretty=format:${Nl}`]);if(W!==le)return;d.value=ee.code===0?Rl(ee.stdout):[]}else{const ee=await Qt(z,["log","--xml","-v","-l","30"]);if(W!==le)return;d.value=ee.code===0?be(ee.stdout):[]}}catch{if(W!==le)return;d.value=[]}finally{W===le&&(f.value=!1)}}let Ee=0;async function Ve(){const W=++Ee,J=n.state.projectDir;if(!J||!wa(J)){a.value=null,d.value=[];return}f.value=!0,M.value="",d.value=[];for(const z of Object.keys(A))delete A[z];try{const z=await Yo(J);if(W!==Ee)return;if(z.inRepo&&z.repo)a.value="git",u.value=z.repo,v.value=z.branch||"HEAD";else{const ee=await fs(J);if(W!==Ee)return;ee.inRepo&&ee.root&&ee.svnAvailable?(a.value="svn",u.value=ee.root,v.value=ee.revision?"r"+ee.revision:"svn"):(a.value=null,d.value=[])}}catch{if(W!==Ee)return;a.value=null,d.value=[]}finally{W===Ee&&(f.value=!1)}a.value&&re()}async function we(W){if(a.value==="git")return ve(W)}Je(()=>n.state.projectDir,()=>{Ve()},{immediate:!0});async function Ne(){Cs("git"),Cs("svn"),await Ve(),a.value&&re()}return(W,J)=>r.value?(l(),c("div",QE,[o("div",ZE,[m(ne,{name:a.value==="svn"?"clock":"git",size:12},null,8,["name"]),o("span",{class:te(["vs-gitbar-branch",{detached:a.value==="svn"}]),title:u.value},i(v.value),11,e6),o("span",t6,i(a.value==="svn"?"SVN · "+s(h)("vsGitHistory"):s(h)("vsGitHistory")),1),d.value.length?(l(),c("span",n6,i(d.value.length),1)):N("",!0),J[0]||(J[0]=o("span",{class:"vs-gitbar-fill"},null,-1)),o("button",{class:"vs-gitbar-act",title:s(h)("vsGitRefresh"),onClick:Ne},[m(ne,{name:"refresh",size:12,class:te({spin:f.value})},null,8,["class"])],8,s6)]),o("div",o6,[f.value&&!O.value.length?(l(),c("div",i6,i(s(h)("vsLoading")),1)):O.value.length?(l(!0),c(oe,{key:2},Ae(O.value,z=>(l(),c(oe,{key:z.commit.hash},[o("div",{class:te(["vs-gitbar-row",{open:M.value===z.commit.hash}]),title:z.commit.subject,onClick:ee=>G(z.commit)},[z.graph?(l(),c("span",{key:0,class:"vs-gitbar-lanes",style:_t({width:`${Math.min(z.graph.width,js)*s($s)}px`})},[(l(),c("svg",{width:Math.min(z.graph.width,js)*s($s),height:as,"aria-hidden":"true"},[(l(!0),c(oe,null,Ae(z.graph.through.filter(ee=>ee.lane<js),(ee,me)=>(l(),c("line",{key:"t"+me,x1:w(ee.lane),y1:0,x2:w(ee.lane),y2:as,stroke:s(Xn)(ee.color)},null,8,c6))),128)),z.graph.topLine&&z.graph.lane<js?(l(),c("line",{key:0,x1:w(z.graph.lane),y1:0,x2:w(z.graph.lane),y2:as/2,stroke:s(Xn)(z.graph.laneColor)},null,8,u6)):N("",!0),(l(!0),c(oe,null,Ae(z.graph.bends.filter(ee=>ee.from<js&&ee.to<js),(ee,me)=>(l(),c(oe,{key:"b"+me},[ee.from===ee.to?(l(),c("line",{key:0,x1:w(ee.from),y1:as/2,x2:w(ee.to),y2:as,stroke:s(Xn)(ee.color)},null,8,d6)):(l(),c("path",{key:1,d:b(ee.from,ee.to),fill:"none",stroke:s(Xn)(ee.color)},null,8,p6))],64))),128)),z.graph.lane<js?(l(),c("circle",{key:1,cx:w(z.graph.lane),cy:as/2,r:k(z.graph)?4:3,fill:s(Xn)(z.graph.laneColor),stroke:k(z.graph)?"var(--dsh-bg, #0d1117)":"none","stroke-width":"1.5"},null,8,f6)):N("",!0)],8,r6))],4)):(l(),c("span",v6)),o("span",h6,i(z.commit.subject),1),z.commit.refs.length?(l(),c("span",m6,[(l(!0),c(oe,null,Ae(z.commit.refs,ee=>(l(),c("span",{key:ee.kind+ee.label,class:te(["vs-gitbar-ref","rf-"+ee.kind])},i(ee.label),3))),128))])):N("",!0),o("span",g6,i(z.commit.author),1)],10,l6),M.value===z.commit.hash?(l(),c("div",y6,[V[z.commit.hash]?(l(),c("div",w6,i(s(h)("vsLoading")),1)):(l(),c(oe,{key:1},[H(z.commit.hash).length?N("",!0):(l(),c("div",b6,i(s(h)("gitCommitNoFiles")),1)),(l(!0),c(oe,null,Ae(H(z.commit.hash),(ee,me)=>(l(),c("div",{key:me,class:"vs-gitbar-file",title:ee.path},[o("span",{class:te(["st","s-"+ee.status.toLowerCase()])},i(ee.status),3),m(ne,{name:"fileText",size:11}),o("span",k6,i(C(ee.path)),1),o("span",x6,i(Z(ee.path)),1),o("button",{class:"vs-gitbar-act vs-gitbar-file-open",title:s(h)("vsGitFileDiff"),onClick:xe(je=>de(z.commit,ee),["stop"])},[m(ne,{name:"fileOut",size:11})],8,C6)],8,_6))),128))],64))])):N("",!0)],64))),128)):(l(),c("div",a6,i(s(h)("gitLogEmpty")),1))])])):N("",!0)}}),$6=xt(S6,[["__scopeId","data-v-955f5249"]]),Bd="dsh-file-workbench.vscode.search.prefs",tl={caseSensitive:!1,wholeWord:!1,regex:!1,preserveCase:!0,viewMode:"list",replaceOpen:!1,advancedOpen:!1};function E6(){try{const t=localStorage.getItem(Bd);return t?{...tl,...JSON.parse(t)}:{...tl}}catch{return{...tl}}}function T6(){return{q:"",include:"",exclude:"",replacement:"",outcome:null,searched:!1}}const zl=gt(E6()),Ul=gt(new Map);function D6(t,e){zl[t]=e;try{localStorage.setItem(Bd,JSON.stringify(zl))}catch{}}function Id(t){let e=Ul.get(t);return e||(e=T6(),Ul.set(t,e)),e}function F6(t,e){const n=Id(t);Object.assign(n,e)}function P6(t){Ul.delete(t)}function N6(){return{prefs:zl,setPref:D6,getProject:Id,saveProject:F6,clearProject:P6}}const R6={class:"vs-sp"},A6={class:"vs-sp-titlebar"},M6={class:"vs-sp-title"},O6={class:"vs-sp-actions"},L6=["title"],B6=["title","disabled"],I6=["title","disabled"],j6=["title","disabled"],V6=["title","disabled"],z6={class:"vs-sp-head"},U6={class:"vs-sp-inputwrap"},H6=["placeholder"],W6=["title"],G6=["title"],q6=["title"],K6=["title"],X6={key:0,class:"vs-sp-inputwrap vs-sp-replacerow"},Y6=["placeholder","onKeydown"],J6=["title"],Q6=["title","disabled"],Z6={key:0,class:"vs-sp-adv"},e3={class:"vs-sp-field"},t3={class:"vs-sp-field-label"},n3=["placeholder","title"],s3={class:"vs-sp-field"},o3={class:"vs-sp-field-label"},i3=["placeholder","title"],a3={key:1,class:"vs-sp-summary"},l3={key:0,class:"vs-sp-trunc"},r3={key:1,class:"vs-sp-trunc"},c3={key:2,class:"vs-sp-trunc"},u3={key:2,class:"vs-sp-list"},d3=["title","onClick"],p3={class:"vs-sp-name"},f3={class:"vs-sp-dir"},v3={class:"vs-sp-count"},h3=["title","onClick"],m3={class:"vs-sp-ln"},g3={class:"vs-sp-text"},y3={key:0},w3=["title","onClick"],b3={class:"vs-sp-name"},_3={class:"vs-sp-count"},k3=["title","onClick"],x3={class:"vs-sp-name"},C3={class:"vs-sp-count"},S3=["title","onClick"],$3={class:"vs-sp-ln"},E3={class:"vs-sp-text"},T3={key:0},D3=ht({__name:"VSSearchPanel",props:{projectDir:{}},emits:["open"],setup(t,{emit:e}){const n=t,a=e,r=N6(),{prefs:u}=r,v=r.getProject(n.projectDir),d=g(v.q),f=g(v.include),w=g(v.exclude),b=g(v.replacement),k=g(v.outcome),O=g(v.searched),M=g(u.caseSensitive),A=g(u.wholeWord),V=g(u.regex),H=g(u.preserveCase),C=g(u.viewMode),Z=g(u.replaceOpen),G=g(u.advancedOpen),F=g(!1),de=g(!1),I=g(new Set),ve=g(new Set(""));let ye=0,be=0;const le=B(()=>d.value.trim().length>=2),re=B(()=>!!k.value&&k.value.files.length>0),Ee=B(()=>le.value&&re.value&&b.value.length>0&&!Wt(n.projectDir));function Ve(){return{path:n.projectDir,caseSensitive:M.value,regex:V.value,wholeWord:A.value,include:f.value.trim()||void 0,exclude:w.value.trim()||void 0}}async function we(){const Le=++ye;if(!le.value){k.value=null,O.value=!1,F.value=!1,Ne();return}F.value=!0;try{const U=await _f(d.value.trim(),Ve());if(Le!==ye)return;k.value=U,O.value=!0,I.value=new Set(U.files.length<=8?U.files.map(R=>R.rel):[])}catch{Le===ye&&(k.value=null,O.value=!0)}finally{Le===ye&&(F.value=!1,Ne())}}function Ne(){n.projectDir&&r.saveProject(n.projectDir,{q:d.value,include:f.value,exclude:w.value,replacement:b.value,outcome:k.value,searched:O.value})}function W(){be&&window.clearTimeout(be),be=window.setTimeout(()=>void we(),300)}function J(){M.value=!M.value,r.setPref("caseSensitive",M.value),O.value&&we()}function z(){A.value=!A.value,r.setPref("wholeWord",A.value),O.value&&we()}function ee(){V.value=!V.value,r.setPref("regex",V.value),O.value&&we()}function me(){C.value=C.value==="list"?"tree":"list",r.setPref("viewMode",C.value)}function je(){H.value=!H.value,r.setPref("preserveCase",H.value)}function Ke(){Z.value=!Z.value,r.setPref("replaceOpen",Z.value)}function Ze(){G.value=!G.value,r.setPref("advancedOpen",G.value)}function ge(){const Le=k.value;if(Le)if(C.value==="list")I.value=new Set(Le.files.map(U=>U.rel));else{const U=new Set("");for(const R of Le.files)Ye(U,R.rel);ve.value=U}}function _e(){C.value==="list"?I.value=new Set:ve.value=new Set("")}function Ye(Le,U){const R=U.split("/");for(let Q=1;Q<R.length;Q++)Le.add(R.slice(0,Q).join("/"))}function st(Le){const U=new Set(ve.value);U.has(Le)?U.delete(Le):U.add(Le),ve.value=U}const fe=B(()=>{const Le=k.value;if(!Le||C.value!=="tree")return[];const U={name:"",path:"",dirs:new Map,files:[],count:0};for(const Te of Le.files){const L=Te.rel.split("/"),T={name:L[L.length-1],rel:Te.rel,count:Te.hits.length};let K=U;K.count+=Te.hits.length;for(let $=0;$<L.length-1;$++){const q=L[$],De=K.path?`${K.path}/${q}`:q;let ae=K.dirs.get(q);ae||(ae={name:q,path:De,dirs:new Map,files:[],count:0},K.dirs.set(q,ae)),K=ae,K.count+=Te.hits.length}K.files.push(T)}const R=[],Q=(Te,L)=>{const T=ve.value.has(Te.path);if(L>0&&R.push({kind:"dir",path:Te.path,name:Te.name,depth:L,count:Te.count,open:T}),!(!T&&L>0)){for(const K of[...Te.dirs.values()].sort(($,q)=>$.name.localeCompare(q.name)))Q(K,L+1);for(const K of[...Te.files].sort(($,q)=>$.name.localeCompare(q.name)))R.push({kind:"file",path:K.rel,name:K.name,dir:it(K.rel),depth:L,count:K.count,open:I.value.has(K.rel)})}};return Q(U,0),R});function Ce(){be&&window.clearTimeout(be),ye++,d.value="",b.value="",f.value="",w.value="",k.value=null,O.value=!1,F.value=!1,I.value=new Set,ve.value=new Set(""),r.clearProject(n.projectDir)}function qe(Le){const U=new Set(I.value);U.has(Le)?U.delete(Le):U.add(Le),I.value=U}function ce(Le){return k.value?.files.find(U=>U.rel===Le)?.hits??[]}async function Ie(){if(!Ee.value||de.value)return;const Le=k.value;if(!Le)return;const U=Le.total,R=Le.files.length,Q=h("vsReplaceConfirm",{files:String(R),n:String(U),q:d.value.trim(),r:b.value});if(window.confirm(Q)){de.value=!0;try{const Te=await ou(d.value.trim(),b.value,{scope:n.projectDir,caseSensitive:M.value,regex:V.value,wholeWord:A.value,preserveCase:H.value,include:f.value.trim()||void 0,exclude:w.value.trim()||void 0});Te.replacements>0?Y("ok",h("vsReplaceDone",{files:String(Te.files),n:String(Te.replacements)})):Y("info",h("vsReplaceNone")),await we()}catch(Te){console.warn("[dsh-file-workbench] replace failed:",Te)}finally{de.value=!1}}}function rt(Le){const U=r.getProject(Le);d.value=U.q,f.value=U.include,w.value=U.exclude,b.value=U.replacement,k.value=U.outcome,O.value=U.searched,I.value=new Set,ve.value=new Set("")}Je(()=>n.projectDir,Le=>rt(Le)),rn(()=>{Ne(),le.value&&!k.value&&we()}),Rt(()=>{be&&window.clearTimeout(be)});function yt(Le){const U=d.value.trim();if(!U)return[{t:Le,hit:!1}];let R;try{R=V.value?U:U.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}catch{return[{t:Le,hit:!1}]}A.value&&(R=`(?<![\\p{L}\\p{N}_])${R}(?![\\p{L}\\p{N}_])`);let Q;try{Q=new RegExp(R,M.value?"gu":"giu")}catch{return[{t:Le,hit:!1}]}const Te=[];let L=0;for(const T of Le.matchAll(Q))if(T.index>L&&Te.push({t:Le.slice(L,T.index),hit:!1}),Te.push({t:T[0]||U,hit:!0}),L=T.index+(T[0]?.length||U.length),T[0]==="")break;return L<Le.length&&Te.push({t:Le.slice(L),hit:!1}),Te}const ut=Le=>Le.slice(Le.lastIndexOf("/")+1),it=Le=>{const U=Le.lastIndexOf("/");return U<0?"":Le.slice(0,U)};return(Le,U)=>(l(),c("div",R6,[o("div",A6,[o("span",M6,i(s(h)("vsSearchTitle")),1),o("div",O6,[o("button",{class:"vs-sp-act",title:s(h)("vsViewModeSwitchTitle"),onClick:me},[m(ne,{name:C.value==="list"?"sort":"folderOpen",size:13},null,8,["name"])],8,L6),o("button",{class:"vs-sp-act",title:s(h)("vsRefreshResults"),disabled:!le.value,onClick:U[0]||(U[0]=R=>we())},[m(ne,{name:"refresh",size:13})],8,B6),o("button",{class:"vs-sp-act",title:s(h)("vsExpandAll"),disabled:!re.value,onClick:ge},[m(ne,{name:"chevronsDown",size:13})],8,I6),o("button",{class:"vs-sp-act",title:s(h)("vsCollapseAll"),disabled:!re.value,onClick:_e},[m(ne,{name:"chevronsUp",size:13})],8,j6),o("button",{class:"vs-sp-act",title:s(h)("vsClearAllResults"),disabled:!O.value&&!d.value,onClick:Ce},[m(ne,{name:"close",size:13})],8,V6)])]),o("div",z6,[o("div",U6,[kt(o("input",{"onUpdate:modelValue":U[1]||(U[1]=R=>d.value=R),class:"vs-sp-input",placeholder:s(h)("vsGrepPlaceholder"),onKeydown:U[2]||(U[2]=bt(xe(R=>we(),["prevent"]),["enter"])),onInput:W},null,40,H6),[[Lt,d.value]]),o("button",{class:te(["vs-sp-toggle",{on:M.value}]),title:s(h)("vsGrepCase"),onClick:J},[...U[8]||(U[8]=[o("span",null,"Aa",-1)])],10,W6),o("button",{class:te(["vs-sp-toggle",{on:A.value}]),title:s(h)("vsGrepWholeWord"),onClick:z},[...U[9]||(U[9]=[o("span",null,"ab",-1)])],10,G6),o("button",{class:te(["vs-sp-toggle",{on:V.value}]),title:s(h)("vsGrepRegex"),onClick:ee},[...U[10]||(U[10]=[o("span",null,".*",-1)])],10,q6),o("button",{class:te(["vs-sp-toggle",{on:Z.value}]),title:s(h)("vsToggleReplace"),onClick:Ke},[m(ne,{name:"chevronRight",size:12,class:te(["vs-sp-replace-caret",{open:Z.value}])},null,8,["class"])],10,K6)]),Z.value?(l(),c("div",X6,[kt(o("input",{"onUpdate:modelValue":U[3]||(U[3]=R=>b.value=R),class:"vs-sp-input",placeholder:s(h)("vsGrepReplacePlaceholder"),onKeydown:bt(xe(Ie,["prevent"]),["enter"])},null,40,Y6),[[Lt,b.value]]),o("button",{class:te(["vs-sp-toggle",{on:H.value}]),title:s(h)("vsReplacePreserveCase"),onClick:je},[...U[11]||(U[11]=[o("span",null,"AB",-1)])],10,J6),o("button",{class:"vs-sp-btn-replaceall",title:s(h)("vsReplaceAll"),disabled:!Ee.value||de.value,onClick:Ie},[m(ne,{name:"chevronsRight",size:13})],8,Q6)])):N("",!0)]),o("div",{class:"vs-sp-divider",onClick:Ze},[m(ne,{name:"chevronRight",size:11,class:te(["vs-sp-div-caret",{open:G.value}])},null,8,["class"])]),G.value?(l(),c("div",Z6,[o("div",e3,[o("div",t3,[m(ne,{name:"file",size:12}),o("span",null,i(s(h)("vsFilesToInclude")),1)]),kt(o("input",{"onUpdate:modelValue":U[4]||(U[4]=R=>f.value=R),class:"vs-sp-field-input",placeholder:s(h)("vsFilesToIncludePlaceholder"),title:s(h)("vsFilesToIncludeTitle"),onKeydown:U[5]||(U[5]=bt(xe(R=>we(),["prevent"]),["enter"])),onInput:W},null,40,n3),[[Lt,f.value]])]),o("div",s3,[o("div",o3,[m(ne,{name:"gear",size:12}),o("span",null,i(s(h)("vsFilesToExclude")),1)]),kt(o("input",{"onUpdate:modelValue":U[6]||(U[6]=R=>w.value=R),class:"vs-sp-field-input",placeholder:s(h)("vsFilesToExcludePlaceholder"),title:s(h)("vsFilesToExcludeTitle"),onKeydown:U[7]||(U[7]=bt(xe(R=>we(),["prevent"]),["enter"])),onInput:W},null,40,i3),[[Lt,w.value]])])])):N("",!0),O.value?(l(),c("div",a3,[k.value?(l(),c(oe,{key:0},[o("span",null,i(s(h)("vsGrepSummary",{files:k.value.files.length,n:k.value.total})),1),k.value.truncated?(l(),c("span",l3,i(s(h)("vsGrepTruncated")),1)):N("",!0)],64)):F.value?(l(),c("span",r3,i(s(h)("vsLoading")),1)):(l(),c("span",c3,i(s(h)("vsGrepNoResult")),1))])):N("",!0),k.value?(l(),c("div",u3,[C.value==="list"?(l(!0),c(oe,{key:0},Ae(k.value.files,R=>(l(),c(oe,{key:R.rel},[o("div",{class:te(["vs-sp-file",{open:I.value.has(R.rel)}]),title:R.rel,onClick:Q=>qe(R.rel)},[m(ne,{name:"chevronRight",size:11,class:"vs-sp-caret"}),m(ne,{name:"fileText",size:12}),o("span",p3,i(ut(R.rel)),1),o("span",f3,i(it(R.rel)),1),o("span",v3,i(R.hits.length),1)],10,d3),I.value.has(R.rel)?(l(!0),c(oe,{key:0},Ae(R.hits,Q=>(l(),c("div",{key:R.rel+":"+Q.ln,class:"vs-sp-hit",title:s(h)("vsGrepOpenAt",{ln:Q.ln}),onClick:Te=>a("open",R.rel,Q.ln)},[o("span",m3,i(Q.ln),1),o("span",g3,[(l(!0),c(oe,null,Ae(yt(Q.text),(Te,L)=>(l(),c(oe,{key:L},[Te.hit?(l(),c("mark",y3,i(Te.t),1)):(l(),c(oe,{key:1},[ue(i(Te.t),1)],64))],64))),128))])],8,h3))),128)):N("",!0)],64))),128)):(l(!0),c(oe,{key:1},Ae(fe.value,R=>(l(),c(oe,{key:R.kind+":"+R.path},[R.kind==="dir"?(l(),c("div",{key:0,class:te(["vs-sp-file vs-sp-node",{open:R.open}]),style:_t({paddingLeft:8+(R.depth-1)*12+"px"}),title:R.path,onClick:Q=>st(R.path)},[m(ne,{name:"chevronRight",size:11,class:"vs-sp-caret"}),m(ne,{name:R.open?"folderOpen":"folder",size:12},null,8,["name"]),o("span",b3,i(R.name),1),o("span",_3,i(R.count),1)],14,w3)):(l(),c(oe,{key:1},[o("div",{class:te(["vs-sp-file vs-sp-node",{open:R.open}]),style:_t({paddingLeft:8+R.depth*12+"px"}),title:R.path,onClick:Q=>qe(R.path)},[m(ne,{name:"chevronRight",size:11,class:"vs-sp-caret"}),m(ne,{name:"fileText",size:12}),o("span",x3,i(R.name),1),o("span",C3,i(R.count),1)],14,k3),R.open?(l(!0),c(oe,{key:0},Ae(ce(R.path),Q=>(l(),c("div",{key:R.path+":"+Q.ln,class:"vs-sp-hit",style:_t({paddingLeft:26+R.depth*12+"px"}),title:s(h)("vsGrepOpenAt",{ln:Q.ln}),onClick:Te=>a("open",R.path,Q.ln)},[o("span",$3,i(Q.ln),1),o("span",E3,[(l(!0),c(oe,null,Ae(yt(Q.text),(Te,L)=>(l(),c(oe,{key:L},[Te.hit?(l(),c("mark",T3,i(Te.t),1)):(l(),c(oe,{key:1},[ue(i(Te.t),1)],64))],64))),128))])],12,S3))),128)):N("",!0)],64))],64))),128))])):N("",!0)]))}}),F3=xt(D3,[["__scopeId","data-v-0328b4ec"]]),P3=[{id:"@sunjuntao/dsh-fw-find-references",name:"引用查找",version:"0.1.0",description:"DSH 文件编辑器「引用查找」插件：Activity Bar 注入视图，跟随编辑器光标选中词（v5 ctx.editor），用工作台 /grep 全词搜索项目内引用并点击跳转。对标 VS Code Find All References。",nameEn:"Find References",descriptionEn:"DSH file editor plugin: activity bar view that takes the word at the caret and finds all references in the project via /grep (whole-word), clicking a hit jumps there. Counterpart of VS Code Find All References.",code:`window.__ModuleLoader__.load({
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
`}],jd="dsh-fw.userPlugins",Wn=g([]),xs=new Map;let Rc=!1,Fi=null;async function N3(t,e){await fetch(`${Yn}/plugin-data`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({k:t,v:e})}).catch(()=>{})}async function R3(t){try{return(await(await fetch(`${Yn}/plugin-data?k=${encodeURIComponent(t)}`,{headers:{Accept:"application/json"}})).json().catch(()=>null))?.data??null}catch{return null}}function Er(){Fi&&clearTimeout(Fi),Fi=setTimeout(()=>{Fi=null,N3(jd,Wn.value)},300)}async function A3(){const t=await R3(jd);return Array.isArray(t)?t:[]}const Io=new Map;function Ac(){return{load(t){Io.set(t.id,t)}}}function Ws(){return{views:dd().map(t=>t.id),commands:wr(),status:Sa().map(t=>t.id),menu:ni().map(t=>t.id)}}function aa(t,e){const n=(a,r)=>r.filter(u=>!a.includes(u));return{views:n(t.views,e.views),commands:n(t.commands,e.commands),status:n(t.status,e.status),menu:n(t.menu,e.menu)}}function la(t){t&&(t.views.forEach(ka),t.commands.forEach(yr),t.status.forEach(Ca),t.menu.forEach($a))}const Vd=/__ModuleLoader__|__dshFileWorkbench(?:VSCode|Workbench)__/,M3=/__ModuleLoader__\.load\(\s*\{\s*id\s*:\s*(["'])((?:(?!\1)[\s\S])*)\1/;function zd(t){if(!t.trim())return{ok:!1,error:h("pmCheckEmpty")};const e=t.match(M3);return{ok:Vd.test(t),error:h("pmCheckNotPlugin"),loaderId:e?.[2]?.trim()||void 0}}function O3(t){return/\bcreateDecorations\b/.test(t)?5.1:/\bctx\.editor\b|\beditor\s*[:.]|\bapiVersion\s*>=\s*5\b/.test(t)?5:1}function L3(t,e=O3(t)){const n=window,a=n.__ModuleLoader__,r=new Set(Io.keys());n.__ModuleLoader__=Ac();try{(0,eval)(t)}finally{n.__ModuleLoader__=a}let u=[...Io.keys()].filter(w=>!r.has(w));if(!u.length&&Vd.test(t)){const w=Ws();if(Hl(aa(w,Ws()))){const b=`window.__ModuleLoader__.load({id:"wrapped",factory:(require)=>{var module={exports:{}};var exports=module.exports;
${t}
;return {apply(){}};}});`;n.__ModuleLoader__=Ac();try{(0,eval)(b)}finally{n.__ModuleLoader__=a}u=[...Io.keys()].filter(k=>!r.has(k))}}const v=Ws(),d=[];for(const w of u){const b=Io.get(w);if(w==="wrapped")continue;const k=I3(b,e);k&&d.push(k)}const f=aa(v,Ws());return Object.defineProperty(f,"__confirms",{value:d,enumerable:!1})}function B3(t){return t.__confirms??[]}function Hl(t){return!t.views.length&&!t.commands.length&&!t.status.length&&!t.menu.length}function I3(t,e){if(e>Ss)throw new Error(h("pmCheckNeedsHost",{need:e,have:Ss}));if(typeof t.factory!="function")return null;const n=window,a="__dshFileWorkbenchVSCode__",r="__dshFileWorkbenchWorkbench__",u=()=>{},v=n[a],d=n[r];n[a]={apiVersion:Ss,activityBar:{register:u,unregister:u},commands:{register:u,unregister:u,execute:u,list:()=>[],has:()=>!1},statusbar:{register:u,unregister:u,list:()=>[],registerMenu:u,unregisterMenu:u,listMenu:()=>[]}},n[r]={apiVersion:Ss,activityBar:{register:u,unregister:u},statusbar:{register:u,unregister:u,list:()=>[]},backgroundTasks:{start:()=>({step:u,updateLabel:u,done:u,fail:u}),clearFinished:async()=>{},clearAll:async()=>{}}};try{const k=t.factory(()=>{});typeof k?.apply=="function"&&k.apply()}finally{n[a]=v,n[r]=d}const f=Ws(),w=t.factory(()=>{});typeof w?.apply=="function"&&w.apply();const b=aa(f,Ws());return Hl(b)?new Promise((k,O)=>{setTimeout(()=>{const M=aa(f,Ws());if(!Hl(M))return k();la(M),O(new Error(h("pmCheckNoContrib")))},250)}):null}function Eo(t){return Wn.value.find(e=>e.id===t)}async function $o(t){const e=Eo(t);if(e){la(xs.get(t)),xs.delete(t);try{const n=L3(e.code);xs.set(t,n),await Promise.all(B3(n)),e.enabled=!0,e.activated=!0,e.error=void 0}catch(n){e.enabled=!1,e.activated=!1,e.error=n instanceof Error?n.message:String(n),la(xs.get(t)),xs.delete(t)}Er()}}function ra(t){const e=Eo(t);e&&(la(xs.get(t)),xs.delete(t),e.enabled=!1,e.error=void 0,Er())}function j3(t){const e=Eo(t);!e||e.source==="builtin"||(ra(t),Wn.value=Wn.value.filter(n=>n.id!==t),Er())}function Ud(t){return t.trim()}function Hd(t){const e=Wn.value.findIndex(n=>n.id===t.id);e>=0?Wn.value.splice(e,1,t):Wn.value=[...Wn.value,t]}async function V3(t){const e=await t.text(),n=zd(e);if(!n.ok)return{ok:!1,error:n.error};const a=Ud(n.loaderId||t.name.replace(/\.(c|m)?js$/i,""))||`file-${Date.now()}`;Hd({id:a,name:t.name,source:"file",origin:t.name,code:e,enabled:!1}),await $o(a);const r=Eo(a);return{ok:!!r?.enabled,error:r?.error,id:a}}async function z3(t){const e=t.trim();if(!e)return{ok:!1,error:h("pmCheckEmpty")};const n=await fetch(`${Yn}/fetch-plugin`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({url:e})}),a=await n.json().catch(()=>({ok:!1,error:"bad response"}));if(!a.ok||!a.data)return{ok:!1,error:a.error||`HTTP ${n.status}`};const{code:r,name:u}=a.data,v=zd(r);if(!v.ok)return{ok:!1,error:v.error};const d=u||e.split("/").pop()||e,f=Ud(v.loaderId||d.replace(/\.(c|m)?js$/i,""))||`url-${Date.now()}`;Hd({id:f,name:d,source:"url",origin:e,code:r,enabled:!1}),await $o(f);const w=Eo(f);return{ok:!!w?.enabled,error:w?.error,id:f}}function U3(t){const e=new Map(t.map(n=>[n.id,n]));for(const n of P3){const a=e.get(n.id);a?a.source==="builtin"&&Object.assign(a,{name:n.name,version:n.version,description:n.description,nameEn:n.nameEn,descriptionEn:n.descriptionEn,code:n.code}):e.set(n.id,{id:n.id,name:n.name,source:"builtin",origin:n.id,version:n.version,description:n.description,nameEn:n.nameEn,descriptionEn:n.descriptionEn,code:n.code,enabled:!1})}return[...e.values()]}async function H3(){if(Rc||typeof window>"u")return;Rc=!0;const t=await A3();Wn.value=U3(t);for(const e of[...Wn.value]){if(!e.enabled)continue;if(!e.activated){e.enabled=!1,e.error=void 0;continue}await $o(e.id);const n=Eo(e.id);n&&!n.enabled&&Y("error",h("pmRestoreFailed",{name:n.name,msg:n.error||""}))}}function ca(){return Wn.value}function W3(t){return xs.get(t)?.views??[]}const Mc=1500;function G3(t,e){const n=t.split(`
`),a=e.split(`
`);if(t===e)return{lines:[]};let r=0;for(;r<n.length&&r<a.length&&n[r]===a[r];)r+=1;let u=n.length,v=a.length;for(;u>r&&v>r&&n[u-1]===a[v-1];)u-=1,v-=1;const d=n.slice(r,u),f=a.slice(r,v);if(d.length>Mc||f.length>Mc)return null;const w=d.length,b=f.length,k=new Int32Array((w+1)*(b+1)),O=(G,F)=>G*(b+1)+F;for(let G=w-1;G>=0;G-=1)for(let F=b-1;F>=0;F-=1)k[O(G,F)]=d[G]===f[F]?k[O(G+1,F+1)]+1:Math.max(k[O(G+1,F)],k[O(G,F+1)]);const M=[];let A=0,V=0;for(;A<w&&V<b;)d[A]===f[V]?(M.push({kind:" ",text:d[A]}),A+=1,V+=1):k[O(A+1,V)]>=k[O(A,V+1)]?(M.push({kind:"-",text:d[A]}),A+=1):(M.push({kind:"+",text:f[V]}),V+=1);for(;A<w;)M.push({kind:"-",text:d[A]}),A+=1;for(;V<b;)M.push({kind:"+",text:f[V]}),V+=1;const H=3,C=["--- 磁盘版本","+++ 未保存改动"];let Z=0;for(;Z<M.length;){if(M[Z].kind===" "){Z+=1;continue}let G=Math.max(0,Z-H);for(;G>0&&M[G].kind===" "&&Z-G<H;)G-=1;let F=Z,de=0,I=Z;for(;F<M.length;){if(M[F].kind!==" ")de=0,I=F;else if(de+=1,de>=H*2)break;F+=1}const ve=Math.min(M.length,I+1+H),ye=M.slice(G,ve),be=r+G+1,le=r+G+1;C.push(`@@ -${be} +${le} @@`);for(const re of ye)C.push(re.kind+re.text);Z=ve}return{lines:C}}const q3="host.plugin-manager",ke="dsh-pm";function K3(t){return!Jl()&&t.descriptionEn||t.description||""}let Oc=!1,Lc=!1;function X3(){Oc||typeof window>"u"||(Oc=!0,Lc||(Lc=!0,H3().then(()=>Pi?.())),mr({id:q3,title:{zh:"插件管理",en:"Plugins"},icon:"puzzle",order:Number.MAX_SAFE_INTEGER,mount(t,e){const n=aT(t,e);return Pi=n.rerender,()=>{Pi===n.rerender&&(Pi=void 0),n.cleanup()}}}))}let Pi;function Y3(){if(typeof document>"u"||document.getElementById(`${ke}-styles`))return;const t=`
.${ke}-view,.${ke}-menu{
  --pm-fg:#1f2328; --pm-fg-weak:#656d76; --pm-fg-muted:#8b949e;
  --pm-bg:#ffffff; --pm-bg2:#f6f8fa; --pm-bg3:#eaeef2;
  --pm-border:#d0d7de; --pm-hover:#e7ebef; --pm-accent:#0969da;
  --pm-danger:#cf222e; --pm-purple:#8250df; --pm-info:#0550ae; --pm-warn:#9a6700;
  --pm-input:#f2f4f7; --pm-menu:#ffffff; --pm-shadow:0 8px 24px rgba(31,35,40,.18);
  --pm-av-builtin:#57606a; --pm-av-file:#1f6feb; --pm-av-url:#8250df;}
.${ke}-view{color:var(--pm-fg);font-size:13px;}
:is(html[data-theme="dark"],html.dark,.fw-root[data-theme="dark"],.vs-pane[data-theme="dark"]) .${ke}-view,
:is(html[data-theme="dark"],html.dark,.fw-root[data-theme="dark"],.vs-pane[data-theme="dark"]) .${ke}-menu{
  --pm-fg:#c9d1d9; --pm-fg-weak:#8b949e; --pm-fg-muted:#6e7681;
  --pm-bg:#0d1117; --pm-bg2:#161b22; --pm-bg3:#21262d;
  --pm-border:#30363d; --pm-hover:#30363d; --pm-accent:#2f81f7;
  --pm-danger:#f85149; --pm-purple:#d2a8ff; --pm-info:#79c0ff; --pm-warn:#d29922;
  --pm-input:#0d1117; --pm-menu:#1c2128; --pm-shadow:0 8px 24px rgba(1,4,9,.6);
  --pm-av-builtin:#6e7681; --pm-av-file:#388bfd; --pm-av-url:#a371f7;}
.${ke}-root{display:flex;flex-direction:column;height:100%;min-height:0;gap:0;}

/* ---- 标题栏：标题 + 右侧工具条（排序 + 管理⋯），VS Code 同款 ---- */
.${ke}-hdr{display:flex;align-items:center;gap:6px;padding:6px 6px 6px 12px;position:sticky;top:0;background:var(--pm-bg);z-index:2;}
.${ke}-title{font-size:11px;font-weight:400;letter-spacing:.4px;text-transform:uppercase;color:var(--pm-fg-weak);}
.${ke}-spacer{flex:1 1 auto;}
.${ke}-tool{width:24px;height:22px;border:none;border-radius:4px;background:transparent;color:var(--pm-fg-weak);cursor:pointer;display:flex;align-items:center;justify-content:center;}
.${ke}-tool:hover{background:var(--pm-hover);color:var(--pm-fg);}
.${ke}-tool svg{width:15px;height:15px;}

/* ---- 搜索框 ---- */
.${ke}-search{padding:2px 12px 8px;position:relative;}
.${ke}-search-box{display:flex;align-items:center;gap:6px;padding:5px 8px;border:1px solid transparent;border-radius:3px;background:var(--pm-input);}
.${ke}-search-box:focus-within{border-color:var(--pm-accent);}
.${ke}-search-box svg{width:14px;height:14px;flex:0 0 auto;color:var(--pm-fg-muted);}
.${ke}-search-input{flex:1 1 auto;min-width:0;border:none;outline:none;background:transparent;color:inherit;font-size:13px;}
.${ke}-search-input::placeholder{color:var(--pm-fg-muted);}

/* ---- 可折叠分组头（▶ 已安装 (N)）---- */
.${ke}-section-head{display:flex;align-items:center;gap:5px;padding:4px 12px;font-size:11px;font-weight:700;color:var(--pm-fg);cursor:pointer;user-select:none;position:sticky;top:0;z-index:1;background:var(--pm-bg);}
.${ke}-section-head:hover{color:var(--pm-fg);}
.${ke}-twist{font-size:9px;line-height:1;color:var(--pm-fg-weak);transition:transform .1s;width:10px;}
.${ke}-section.collapsed .${ke}-twist{transform:rotate(-90deg);}
.${ke}-section-count{font-weight:400;color:var(--pm-fg-weak);}
.${ke}-section-body{overflow:hidden;}
.${ke}-section.collapsed .${ke}-section-body{display:none;}

/* ---- 列表行：紧凑，图标 · 两行文本，hover 浮出操作 ---- */
.${ke}-list{display:flex;flex-direction:column;padding:1px 0 6px;}
.${ke}-row{display:flex;align-items:flex-start;gap:10px;padding:6px 12px;cursor:default;position:relative;}
.${ke}-row:hover{background:var(--pm-hover);}
.${ke}-row.is-disabled{opacity:.55;}
.${ke}-avatar{width:32px;height:32px;flex:0 0 auto;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:700;color:#fff;background:var(--pm-av-builtin);overflow:hidden;}
.${ke}-avatar.file{background:var(--pm-av-file);}
.${ke}-avatar.url{background:var(--pm-av-url);}
.${ke}-avatar img{width:100%;height:100%;object-fit:cover;}
.${ke}-main{flex:1 1 auto;min-width:0;display:flex;flex-direction:column;gap:1px;padding-top:1px;}
.${ke}-nameline{display:flex;align-items:baseline;gap:6px;white-space:nowrap;overflow:hidden;}
.${ke}-name{font-weight:600;font-size:13px;color:var(--pm-fg);overflow:hidden;text-overflow:ellipsis;flex:0 1 auto;}
.${ke}-vendor{font-size:11px;color:var(--pm-fg-weak);font-weight:400;overflow:hidden;text-overflow:ellipsis;flex:0 1 auto;}
.${ke}-ver{font-size:11px;color:var(--pm-fg-muted);flex:0 0 auto;}
.${ke}-desc{font-size:12px;color:var(--pm-fg-weak);line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}
.${ke}-err{font-size:11px;color:var(--pm-danger);margin-top:2px;word-break:break-all;}

/* ---- 行内操作区：hover 才显出（VS Code 悬停浮出）---- */
.${ke}-rowacts{position:absolute;top:6px;right:10px;display:none;align-items:center;gap:4px;}
.${ke}-row:hover .${ke}-rowacts{display:flex;}
.${ke}-btn{font-size:11px;padding:2px 8px;border-radius:3px;border:1px solid var(--pm-border);background:var(--pm-bg2);color:var(--pm-fg);cursor:pointer;white-space:nowrap;}
.${ke}-btn.primary{background:var(--pm-accent);border-color:var(--pm-accent);color:#fff;}
.${ke}-btn:hover{filter:brightness(1.05);}
.${ke}-gear{width:22px;height:22px;border:none;border-radius:3px;background:transparent;color:var(--pm-fg-weak);cursor:pointer;display:flex;align-items:center;justify-content:center;}
.${ke}-gear:hover{background:color-mix(in srgb,var(--pm-fg) 12%,transparent);color:var(--pm-fg);}
.${ke}-gear svg{width:14px;height:14px;}

/* ---- 下拉菜单（fixed 定位，坐标由 JS 按锚点设定，挂 body 脱离 transform 包含块）---- */
.${ke}-menu{position:fixed;z-index:9999;min-width:176px;max-width:90vw;max-height:70vh;overflow:auto;padding:4px;border-radius:6px;background:var(--pm-menu);border:1px solid var(--pm-border);box-shadow:var(--pm-shadow);display:none;}
.${ke}-menu.open{display:block;}
.${ke}-menu-item{display:flex;align-items:center;gap:8px;padding:6px 10px;font-size:12px;border-radius:4px;cursor:pointer;color:var(--pm-fg);}
.${ke}-menu-item:hover{background:var(--pm-accent);color:#fff;}
.${ke}-menu-item.danger:hover{background:var(--pm-danger);}
.${ke}-menu-sep{height:1px;margin:4px 6px;background:var(--pm-border);}

/* ---- URL 输入弹层 ---- */
.${ke}-url-panel{overflow:hidden;max-height:0;opacity:0;transition:max-height .2s ease,opacity .15s;padding:0 12px;}
.${ke}-url-panel.open{max-height:48px;opacity:1;padding-bottom:8px;}
.${ke}-url-inner{display:flex;gap:6px;}
.${ke}-url-input{flex:1 1 auto;min-width:0;padding:5px 8px;border:1px solid var(--pm-border);border-radius:3px;background:var(--pm-input);color:var(--pm-fg);font-size:12px;outline:none;}
.${ke}-url-input:focus{border-color:var(--pm-accent);}
.${ke}-url-go{padding:5px 12px;font-size:12px;border:none;border-radius:3px;background:var(--pm-accent);color:#fff;cursor:pointer;}
.${ke}-url-go:hover{filter:brightness(1.1);}

/* ---- 空态 ---- */
.${ke}-empty{display:flex;flex-direction:column;align-items:center;gap:8px;padding:32px 16px;color:var(--pm-fg-muted);}
.${ke}-empty-icon{font-size:28px;opacity:.5;}
.${ke}-empty-text{font-size:12px;text-align:center;line-height:1.6;}
`,e=document.createElement("style");e.id=`${ke}-styles`,e.textContent=t,document.head.appendChild(e)}const J3='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',Q3='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3.2"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',Z3='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h13M4 12h9M4 18h5"/></svg>';let Wl="",ua=!1,Gl="install";function eT(t){return h(t==="builtin"?"srcBuiltin":t==="file"?"srcFile":"srcUrl")}function Wd(t){if(!Jl()){const n=t.descriptionEn?.match(/Counterpart of (.+?)\./);if(n)return n[1].trim()}const e=t.description?.match(/对标\s*([^。（(]+)/);return e?e[1].trim():eT(t.source)}function tT(t){return(da(t)[0]??"?").toUpperCase()}function nT(t,e){return e?`${t.name} ${t.nameEn??""} ${t.description??""} ${t.descriptionEn??""} ${Wd(t)}`.toLowerCase().includes(e):!0}function da(t){return t.name.replace(/^@[^/]+\//,"")}function jo(t){return!Jl()&&t.nameEn||da(t)}function sT(t){const e=[...t];return Gl==="name"?e.sort((n,a)=>jo(n).localeCompare(jo(a))):Gl==="source"&&e.sort((n,a)=>n.source.localeCompare(a.source)||jo(n).localeCompare(jo(a))),e}let Ii=null;function ql(t,e){Gd();const n=document.createElement("div");n.className=`${ke}-menu`;for(const b of e){const k=document.createElement("div");k.className=`${ke}-menu-item${b.danger?" danger":""}`,k.textContent=b.label,k.addEventListener("click",O=>{O.stopPropagation(),f(),b.onClick()}),n.append(k)}document.body.appendChild(n);const a=t.getBoundingClientRect();n.style.visibility="hidden",n.classList.add("open");const r=n.offsetWidth,u=n.offsetHeight;let v=a.right-r;v<8&&(v=Math.max(8,a.left)),v+r>window.innerWidth-8&&(v=Math.max(8,window.innerWidth-8-r));let d=a.bottom+4;d+u>window.innerHeight-8&&(d=Math.max(8,a.top-4-u)),n.style.left=`${v}px`,n.style.top=`${d}px`,n.style.visibility="";function f(){document.removeEventListener("mousedown",w,!0),window.removeEventListener("resize",f),n.remove(),Ii?.el===n&&(Ii=null)}function w(b){n.contains(b.target)||f()}requestAnimationFrame(()=>document.addEventListener("mousedown",w,!0)),window.addEventListener("resize",f),Ii={el:n,close:f}}function Gd(){Ii?.close()}function fn(t,e){const n=t.querySelector(`.${ke}-listwrap`);if(!n)return;const a=Wl.trim().toLowerCase(),r=ca(),u=sT(r.filter(f=>nT(f,a)));n.classList.toggle("collapsed",ua);const v=n.querySelector(`.${ke}-section-count`);v&&(v.textContent=`(${u.length})`);const d=n.querySelector(`.${ke}-list`);if(d&&(d.replaceChildren(),!ua)){if(!u.length){const f=document.createElement("div");f.className=`${ke}-empty`,f.innerHTML=`<div class="${ke}-empty-icon">&#x2699;</div><div class="${ke}-empty-text">${a?h("pmEmptyWithQuery",{q:oT(Wl)}):h("pmEmptyNoPlugins")}</div>`,d.append(f);return}for(const f of u)d.append(iT(f,t,e))}}function oT(t){return t.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}function iT(t,e,n){const a=document.createElement("div");a.className=`${ke}-row${t.enabled?"":" is-disabled"}`;const r=document.createElement("div");r.className=`${ke}-avatar ${t.source}`,r.textContent=tT(t),a.append(r);const u=document.createElement("div");u.className=`${ke}-main`;const v=document.createElement("div");v.className=`${ke}-nameline`;const d=document.createElement("span");d.className=`${ke}-name`,d.textContent=jo(t),d.title=t.origin||t.name;const f=document.createElement("span");if(f.className=`${ke}-vendor`,f.textContent=Wd(t),v.append(d,f),t.version){const M=document.createElement("span");M.className=`${ke}-ver`,M.textContent=`v${t.version}`,v.append(M)}u.append(v);const w=K3(t);if(w){const M=document.createElement("div");M.className=`${ke}-desc`,M.textContent=w,u.append(M)}if(t.enabled&&!n.projectDir){const M=document.createElement("div");M.className=`${ke}-desc`,M.style.color="var(--pm-warn)",M.textContent=h("pmNeedsProject"),u.append(M)}if(t.error){const M=document.createElement("div");M.className=`${ke}-err`,M.textContent=t.error,u.append(M)}a.append(u);const b=document.createElement("div");b.className=`${ke}-rowacts`;const k=document.createElement("button");k.type="button",k.className=`${ke}-btn${t.enabled?"":" primary"}`,k.textContent=t.enabled?h("pmDisable"):h("pmEnable"),k.addEventListener("click",M=>{M.stopPropagation(),t.enabled?(ra(t.id),fn(e,n)):$o(t.id).then(()=>{t.error&&n.toast("error",h("pmEnableFailed",{name:da(t),msg:t.error})),fn(e,n)})}),b.append(k);const O=document.createElement("button");return O.type="button",O.className=`${ke}-gear`,O.title=h("pmMoreActions"),O.innerHTML=Q3,O.addEventListener("click",M=>{M.stopPropagation();const A=[{label:t.enabled?h("pmDisable"):h("pmEnable"),onClick:()=>{t.enabled?(ra(t.id),fn(e,n)):$o(t.id).then(()=>{t.error&&n.toast("error",h("pmEnableFailed",{name:da(t),msg:t.error})),fn(e,n)})}}];t.source!=="builtin"&&A.push({label:h("pmRemove"),danger:!0,onClick:()=>{j3(t.id),fn(e,n)}}),ql(O,A)}),b.append(O),a.append(b),a}function Bc(t,e){const n=document.createElement("div");n.className=`${ke}-root`;const a=document.createElement("div");a.className=`${ke}-hdr`;const r=document.createElement("div");r.className=`${ke}-title`,r.textContent=h("pmTitle");const u=document.createElement("div");u.className=`${ke}-spacer`;const v=document.createElement("button");v.type="button",v.className=`${ke}-tool`,v.title=h("pmSort"),v.innerHTML=Z3,v.addEventListener("click",ve=>{ve.stopPropagation();const ye=(be,le)=>({label:le,onClick:()=>{Gl=be,fn(n,e)}});ql(v,[ye("install",h("pmSortInstall")),ye("name",h("pmSortName")),ye("source",h("pmSortSource"))])});const d=document.createElement("button");d.type="button",d.className=`${ke}-tool`,d.title=h("pmManage"),d.textContent="⋯",a.append(r,u,v,d);const f=document.createElement("div");f.className=`${ke}-search`;const w=document.createElement("div");w.className=`${ke}-search-box`,w.innerHTML=J3;const b=document.createElement("input");b.type="text",b.className=`${ke}-search-input`,b.placeholder=h("pmSearchPlaceholder"),b.addEventListener("input",()=>{Wl=b.value,fn(n,e)}),w.append(b),f.append(w);const k=document.createElement("div");k.className=`${ke}-listwrap`;const O=document.createElement("div");O.className=`${ke}-section-head`;const M=document.createElement("span");M.className=`${ke}-twist`,M.textContent="▾";const A=document.createElement("span");A.textContent=h("pmInstalled");const V=document.createElement("span");V.className=`${ke}-section-count`,O.append(M,A,V),O.addEventListener("click",()=>{ua=!ua,fn(n,e)});const H=document.createElement("div");H.className=`${ke}-list`,k.append(O,H);const C=document.createElement("input");C.type="file",C.accept=".js,.cjs,.mjs,text/javascript",C.multiple=!0,C.style.display="none",C.addEventListener("change",async()=>{const ve=[...C.files??[]];for(const ye of ve)try{const be=await V3(ye);be.ok||e.toast("error",h("pmImportFailed",{name:ye.name,msg:be.error||""}))}catch(be){e.toast("error",h("pmImportFailed",{name:ye.name,msg:be instanceof Error?be.message:String(be)}))}C.value="",fn(n,e)});const Z=document.createElement("div");Z.className=`${ke}-url-panel`;const G=document.createElement("div");G.className=`${ke}-url-inner`;const F=document.createElement("input");F.type="text",F.className=`${ke}-url-input`,F.placeholder=h("pmUrlPlaceholder");const de=document.createElement("button");de.type="button",de.className=`${ke}-url-go`,de.textContent=h("pmPull");const I=async()=>{const ve=F.value.trim();if(ve){de.disabled=!0,de.textContent=h("pmPulling");try{const ye=await z3(ve);ye.ok?(F.value="",Z.classList.remove("open"),e.toast("ok",h("pmUrlImported"))):e.toast("error",h("pmUrlImportFailed",{msg:ye.error||""}))}catch(ye){e.toast("error",h("pmUrlImportFailed",{msg:ye instanceof Error?ye.message:String(ye)}))}finally{de.disabled=!1,de.textContent=h("pmPull"),fn(n,e)}}};return de.addEventListener("click",()=>void I()),F.addEventListener("keydown",ve=>{ve.key==="Enter"&&I()}),G.append(F,de),Z.append(G),d.addEventListener("click",ve=>{ve.stopPropagation(),ql(d,[{label:h("pmImportFromFile"),onClick:()=>C.click()},{label:h("pmImportFromUrl"),onClick:()=>{Z.classList.toggle("open"),Z.classList.contains("open")&&setTimeout(()=>F.focus(),80)}},{label:h("pmEnableAll"),onClick:()=>{Promise.all(ca().filter(ye=>!ye.enabled).map(ye=>$o(ye.id))).then(()=>fn(n,e))}},{label:h("pmDisableAll"),onClick:()=>{for(const ye of ca())ye.enabled&&ra(ye.id);fn(n,e)}}])}),n.append(a,f,Z,k,C),t.replaceChildren(n),fn(n,e),{cleanup(){Gd(),t.replaceChildren()},rerender(){fn(n,e)}}}function aT(t,e){Y3(),t.classList.add(`${ke}-view`);const n=document.createElement("div");n.className=`${ke}-inner`,n.style.cssText="display:flex;flex-direction:column;height:100%;min-height:0;",t.replaceChildren(n);let a=Bc(n,e);const{locale:r}=Mt(),u=Je(r,()=>{a.cleanup(),a=Bc(n,e)});return{cleanup(){u(),a.cleanup(),t.replaceChildren()},rerender(){a.rerender()}}}const lT=["data-theme"],rT=["title"],cT={class:"vs-topbar-txt"},uT=["title"],dT={class:"vs-topbar-txt"},pT=["title"],fT={class:"vs-topbar-txt vs-recent-name"},vT=["title"],hT=["title","disabled"],mT={class:"vs-quickopen-ph"},gT=["title"],yT=["disabled","title","onClick","onContextmenu"],wT={key:1,class:"vs-act-letter"},bT={class:"vs-left-main"},_T={key:1,class:"fw-empty vs-git-empty"},kT={class:"vs-right"},xT={class:"vs-editor-wrap"},CT={key:0,class:"vs-diffpane"},ST={key:1,class:"vs-empty"},$T={class:"vs-empty-title"},ET={class:"vs-empty-hint"},TT={class:"vs-empty-actions"},DT={key:2,class:"vs-loading-big"},FT={key:3,class:"vs-error"},PT={key:4,class:"vs-empty"},NT={class:"vs-empty-hint"},RT={class:"vs-status"},AT=["title"],MT={key:1,class:"vs-status-readonly"},OT=["title"],LT={class:"vs-status-seg"},BT=["disabled"],IT=["disabled"],jT={class:"vs-status-seg"},VT=["placeholder","onKeydown"],zT={class:"vs-quickopen-list"},UT=["title","onMousedown","onMouseenter"],HT={class:"vs-search-name"},WT={class:"vs-search-dir"},GT={key:0,class:"vs-search-note"},qT={key:1,class:"vs-search-note"},Ic=new Set,jc=new Set,KT=ht({__name:"VSCodePane",setup(t){const e=Xl(Ta)??Cr(),n=e.state,a=e.ready,r=B(()=>n.projectDir?Wt(n.projectDir)?kl(n.projectDir):n.projectDir:h("vsNoProject")),u=e.rootKey,v=()=>e.init(),d=()=>e.persist(),f=p=>e.rememberProject(p),w=p=>e.fileViewOf(p),b=(p,_)=>e.rememberFileView(p,_),k=p=>e.stashOpenBuffers(p),O=()=>e.takeStashedBuffers(),M=`vscode:${e.slot}`,A=g(null),V=hr(A),H=B(()=>({fontSize:`${Ue.fontSize??13}px`,"--vs-fs-scale":String((Ue.fontSize??13)/13)})),C=gt({}),Z=gt(new Set),G=gt({}),F=gt({}),de=g(!1),I=g(!1),ve=B(()=>{const p=n.projectDir;if(!p)return null;if(Wt(p))return Ji(p)||null;const _=p.replace(/[\\/]+$/,""),X=Math.max(_.lastIndexOf("/"),_.lastIndexOf("\\"));if(X<=0)return null;const Me=_.slice(0,X);return/^[A-Za-z]:$/.test(Me)?null:Me}),ye=g(!1),be=g(null),le=g(""),re=g(null),Ee="dsh-file-workbench.vscode.activeView";function Ve(){try{return localStorage.getItem(Ee)??"files"}catch{return"files"}}const we=g(Ve()),Ne=g(!1);function W(p){we.value=p;try{localStorage.setItem(Ee,p)}catch{}}Je(()=>n.projectDir,p=>{!p&&we.value!=="files"&&(we.value="files")});const J=g("");Je(()=>n.projectDir,async p=>{if(J.value="",!!p)try{const _=await Yo(p);if(_.inRepo&&_.repo)J.value=_.branch||"HEAD";else{const X=await fs(p);X.inRepo&&X.svnAvailable&&(J.value=X.revision?`r${X.revision}`:"svn")}}catch{}},{immediate:!0});function z(p,_){n.projectDir&&os(Zs(p,n.projectDir),{line:_})}const ee=gt({line:1,col:1});let me=null;function je(p){return p.split(/[\\/]/).filter(Boolean).pop()??p}function Ke(p){const _=Math.max(p.lastIndexOf("/"),p.lastIndexOf("\\"));if(_<0)return"";const X=_===0?p.slice(0,1):p.slice(0,_);return/^[A-Za-z]:$/.test(X)?`${X}${p[_]}`:X}function Ze(p){return Wt(p)?Ji(p)||p:Ke(p)||p}function ge(p,_){if(!p)return!1;const X=p.replace(/[\\/]+$/,"").toLowerCase(),Me=_.replace(/[\\/]+$/,"").toLowerCase();return Me===X||Me.startsWith(`${X}\\`)||Me.startsWith(`${X}/`)}const _e="vs-diff://",Ye=B(()=>{const p=n.openTabs.map(_=>({path:_,dirty:C[_]?.dirty??!1,conflict:C[_]?.conflict??!1}));return nn.value&&p.push({path:_e+nn.value.title,dirty:!1,icon:"fileOut"}),p}),st=B(()=>nn.value?_e+nn.value.title:n.activeTab);function fe(p){return p.startsWith(_e)}const Ce=B(()=>n.activeTab?C[n.activeTab]:void 0),qe=B(()=>Ce.value?.content??""),ce=B(()=>n.activeTab?F[n.activeTab]??0:0),Ie=B(()=>n.activeTab?Z.has(n.activeTab):!1),rt=B(()=>n.activeTab?G[n.activeTab]:void 0),yt=B(()=>{const p=n.activeTab;return!p||!n.projectDir?!0:ge(n.projectDir,p)?!1:!Ue.allowOutsideRoot}),ut=B(()=>Ce.value?.conflict===!0),it=B(()=>n.activeTab?D8(n.activeTab):"Plain Text"),Le=B(()=>w(n.activeTab)),U=[{encoding:"utf8",hasBom:!1,label:"UTF-8"},{encoding:"utf8",hasBom:!0,label:"UTF-8 with BOM"},{encoding:"utf16le",hasBom:!0,label:"UTF-16 LE"},{encoding:"utf16be",hasBom:!0,label:"UTF-16 BE"},{encoding:"gb18030",hasBom:!1,label:"GB18030"},{encoding:"big5",hasBom:!1,label:"Big5"},{encoding:"latin1",hasBom:!1,label:"Latin-1"}],R={utf8:"UTF-8",utf16le:"UTF-16 LE",utf16be:"UTF-16 BE",gb18030:"GB18030",big5:"Big5",latin1:"Latin-1",binary:"Binary"},Q=B(()=>(Ce.value?.eol??"lf").toUpperCase()),Te=B(()=>{const p=Ce.value;if(!p)return"UTF-8";const _=R[p.encoding],X=p.encoding==="utf8"||p.encoding==="utf16le"||p.encoding==="utf16be";return p.hasBom&&X?`${_} BOM`:_}),{cmOpen:L,cmX:T,cmY:K,openMenuAt:$}=vn();function q(p){const _=p.currentTarget?.getBoundingClientRect();$(_?.left??0,_?.top??0)}const De=B(()=>{const p=Ce.value;return U.map(_=>({label:_.label,checked:!!p&&p.encoding===_.encoding&&p.hasBom===_.hasBom,disabled:!p||p.binary,onClick:()=>void Qe(_.encoding,_.hasBom)}))}),{cmOpen:ae,cmX:ct,cmY:wt,openMenuAt:Ot}=vn();function On(p){const _=p.currentTarget?.getBoundingClientRect();Ot(_?.left??0,_?.top??0)}const Gt=B(()=>{const p=Ce.value,_=(X,Me)=>({label:Me,checked:p?.eol===X,disabled:!p||p.binary,onClick:()=>ze(X)});return[_("lf","LF"),_("crlf","CRLF"),_("cr","CR")]});function ze(p){const _=n.activeTab,X=_?C[_]:void 0;!_||!X||X.eol===p||(X.eol=p,X.dirty=!0)}async function Qe(p,_){const X=n.activeTab,Me=X?C[X]:void 0;!X||!Me||Me.encoding===p&&Me.hasBom===_||Me.dirty&&!await At({title:h("vsUnsavedTitle"),message:h("vsReopenLoseMsg")})||(await ys(X,{encoding:p,hasBom:_,force:!0}),Y("ok",h("vsEncodingSwitched",{enc:Te.value})))}const et=g(null),{cmOpen:at,cmX:Cn,cmY:Sn,openMenuAt:zt}=vn();function ot(){const p=et.value?.getBoundingClientRect();zt(p?.left??0,(p?.bottom??0)+2)}const pt=B(()=>!!Ce.value&&!Ce.value.binary&&!yt.value),Ct=B(()=>n.openTabs.filter(p=>C[p]?.dirty)),Ln=B(()=>[{label:h("vsOpenFolder"),icon:"folderOpen",onClick:Ut},{label:h("vsNewFile"),icon:"fileOut",disabled:!n.projectDir,onClick:()=>re.value?.createFileAtRoot()},{label:h("vsNewFolder"),icon:"folder",disabled:!n.projectDir,onClick:()=>re.value?.createFolderAtRoot()},{label:h("vsMenuRecent"),icon:"clock",disabled:n.recentProjects.length===0,children:[...n.recentProjects.map(p=>({label:je(p)||p,checked:p===n.projectDir,disabled:p===n.projectDir,onClick:()=>void Os(p)})),{separator:!0},{label:h("vsRecentClearAll"),icon:"trash",disabled:n.recentProjects.length===0,onClick:()=>void yn()}]},{separator:!0},{label:h("menuCloneGit"),icon:"git",onClick:()=>void Dn("git")},{label:h("menuCloneSvn"),icon:"svn",onClick:()=>void Dn("svn")},{separator:!0},{label:h("vsNewWindow"),icon:"panellayout",onClick:gs},{label:h("vsFloatWindow"),icon:"float",disabled:!e.tabId,onClick:to},{label:h("vsNewTerminal"),icon:"terminal",onClick:ss},{separator:!0},{label:h("vsSave"),icon:"save",hint:"Ctrl+S",disabled:!pt.value,onClick:()=>void Ra()},{label:h("vsSaveAs"),icon:"save",hint:"Ctrl+Shift+S",disabled:!pt.value,onClick:()=>Aa()},{label:h("vsSaveAll"),disabled:Ct.value.length===0,onClick:()=>void Fr()},{label:h("vsMenuLocalDiff"),icon:"fileOut",disabled:!(Ce.value?.dirty&&!Ce.value.binary),onClick:()=>void Fa()}]),$n=g(null),{cmOpen:Jn,cmX:gn,cmY:En,openMenuAt:Qs}=vn(),Fs=B(()=>{const p=n.projectDir;if(!p)return h("vsNoProject");const _=je(p);return _||(Wt(p)?kl(p):p)}),Tn=B(()=>n.projectDir?`${r.value} · ${h("vsRecentProjects")}`:h("vsRecentProjects")),un=B(()=>[{label:h("vsOpenFolder"),icon:"folderOpen",onClick:Ut},{separator:!0},...n.recentProjects.map(p=>({label:je(p)||p,checked:p===n.projectDir,disabled:p===n.projectDir,trailing:{icon:"close",title:h("vsRecentForgetTitle"),onClick:()=>void Gn(p)},onClick:()=>void Os(p)})),{separator:!0},{label:h("vsRecentClearAll"),icon:"trash",disabled:n.recentProjects.length===0,onClick:()=>void yn()}]);function Bn(){const p=$n.value?.getBoundingClientRect();Qs(p?.left??0,(p?.bottom??0)+2)}async function Gn(p){const _=je(p)||p;await At({title:h("vsRecentForgetTitle"),message:h("vsRecentForgetConfirm",{name:_})})&&(e.forgetProject(p),Y("ok",h("vsRecentForgot",{name:_})))}function Dn(p){const X=ve.value??n.projectDir??"";_r({kind:p,dir:X,key:u,onDone:({path:Me})=>{Os(Me)}})}async function yn(){if(n.recentProjects.length===0)return;await At({title:h("vsRecentClearAllTitle"),message:h("vsRecentClearAllConfirm")})&&(e.clearRecentProjects(),Y("ok",h("vsRecentCleared")))}async function wn(p){Fn(p),Y("info",h("vsProjectGone"))}async function Qn(p){const _=n.projectDir===p&&Ct.value.length>0;await At({title:h(_?"vsUnsavedTitle":"vsRemoveProjectTitle"),message:_?h("vsSwitchLoseMsg",{n:String(Ct.value.length)}):h("vsRemoveProjectConfirm",{name:je(p)||p})})&&(Fn(p),Y("ok",h("vsProjectRemoved")))}function Fn(p){e.forgetProject(p),n.projectDir===p&&(di(),n.projectDir=null,d())}const D=50,he=3e4,Be=g(null),He=g(""),Re=g(!1),Ge=g(0),Tt=g([]),St=g(""),bn=g(0),In=g(!1),Pn=g(!1);function Zs(p,_){const X=_.includes("\\")?"\\":"/";return`${_.replace(/[\\/]+$/,"")}${X}${p.split("/").join(X)}`}function To(p,_){const X=p.lastIndexOf("/");if(p.slice(X+1).includes(_))return 0;if(p.includes(_))return 1;let Me=0;for(const ft of _){if(Me=p.indexOf(ft,Me),Me<0)return null;Me+=1}return 2}const dn=B(()=>{const p=n.projectDir;if(!p)return[];const _=Tt.value,X=vt=>{const sn=vt.lastIndexOf("/");return{abs:Zs(vt,p),name:sn<0?vt:vt.slice(sn+1),dir:sn<0?"":vt.slice(0,sn)}},Me=He.value.trim().toLowerCase();if(!Me)return _.slice(0,D).map(X);const ft=[];for(const vt of _){const sn=To(vt.toLowerCase(),Me);sn!==null&&ft.push({rel:vt,score:sn})}return ft.sort((vt,sn)=>vt.score-sn.score||vt.rel.length-sn.rel.length||(vt.rel<sn.rel?-1:1)),ft.slice(0,D).map(vt=>X(vt.rel))});async function Ps(){const p=n.projectDir;if(!(!p||In.value)&&!(St.value===p&&Date.now()-bn.value<he)){In.value=!0;try{const _=await wf(p,u);Tt.value=_.files,Pn.value=_.truncated,St.value=p,bn.value=Date.now()}catch{Tt.value=[],St.value=""}finally{In.value=!1}}}function Ns(){n.projectDir&&(Re.value=!0,Ge.value=0,Ps(),Dt(()=>Be.value?.focus()))}function Zn(){Ge.value=0}function es(){Re.value=!1,He.value=""}function Rs(p){const _=dn.value.length;_!==0&&(Re.value=!0,Ge.value=(Ge.value+p+_)%_)}function eo(p){const _=dn.value[p??Ge.value];_&&(Re.value=!1,He.value="",Be.value?.blur(),os(_.abs))}const Nn=g(null),qn=new Set,ts=new Set,As=new Set;Je(()=>n.projectDir,p=>qn.forEach(_=>_(p))),Je(V,p=>ts.forEach(_=>_(p))),Je(()=>n.activeTab,p=>As.forEach(_=>_(p)));function tn(){return n.activeTab?q$(e.slot)??null:null}const Kt=new Set,ns=new Set;let jn=null,pn=null;const y={apiVersion:Ss,get projectDir(){return n.projectDir},get theme(){return V.value},get activeFile(){return n.activeTab},onProjectChange(p){return qn.add(p),p(n.projectDir),()=>qn.delete(p)},onThemeChange(p){return ts.add(p),p(V.value),()=>ts.delete(p)},onDidChangeActiveFile(p){return As.add(p),p(n.activeTab),()=>As.delete(p)},openFile:(p,_)=>os(p,_),listOpenFiles:()=>[...n.openTabs],openDiff:(p,_)=>no({title:p,lines:_}),toast:(p,_)=>Y(p,_),editor:{get view(){return tn()},getText:()=>tn()?.state.doc.toString()??"",isDirty:()=>n.activeTab?C[n.activeTab]?.dirty??!1:!1,onDidChangeTextDocument(p){const _=(Me,ft)=>p({text:Me,changes:ft});Kt.add(_),jn||(jn=K$(e.slot,(Me,ft)=>Kt.forEach(vt=>vt(Me,ft))));const X=tn();return X&&p({text:X.state.doc.toString(),changes:null}),()=>{Kt.delete(_),Kt.size===0&&jn&&(jn(),jn=null)}},getSelection:()=>tn()?.state.selection??null,onDidChangeSelection(p){const _=Me=>p(Me);ns.add(_),pn||(pn=X$(e.slot,Me=>ns.forEach(ft=>ft(Me))));const X=tn();return X&&p(X.state.selection),()=>{ns.delete(_),ns.size===0&&pn&&(pn(),pn=null)}},applyEdit(p){const _=tn();return!_||!p.length?!1:(_.dispatch({changes:p}),!0)},setDecorations(p){tn()&&Nn.value?.setExtension(p)},createDecorations(p){return Nn.value?.setDecorationsSpec(p.items),{extension:[],update(_){Nn.value?.setDecorationsSpec(_)}}}}},{cmOpen:x,cmX:Se,cmY:pe,openMenuAt:Oe}=vn(),P=B(()=>[{label:h("vsFormat"),icon:"code",disabled:!n.activeTab||yt.value||Ce.value?.binary===!0,onClick:Xt},{separator:!0},{label:h("vsSave"),icon:"save",hint:"Ctrl+S",disabled:!pt.value||de.value,onClick:()=>void Ra()},{label:h("vsSaveAs"),icon:"save",disabled:!pt.value,onClick:()=>Aa()},{label:h("vsSaveAll"),disabled:Ct.value.length===0,onClick:()=>void Fr()},{separator:!0},{label:h("vsMinimap"),checked:Ue.vsMinimap,onClick:()=>{Ue.vsMinimap=!Ue.vsMinimap,Hn()}},{separator:!0},{label:h("vsMultiCursorHint"),disabled:!0}]);function Pe(p){Oe(p.x,p.y)}function Xt(){if(!n.activeTab)return;Nn.value?.format()??!1?Y("ok",h("vsFormatOk")):Y("error",h("vsFormatFail",{msg:yt.value?h("vsReadonly"):""}))}function Ut(){I.value=!0}function gs(){d(),dr({fresh:!0})||Y("info",h("vsNewWindowLimit"))}function to(){e.tabId&&Hh(e.tabId)}function ss(){Ah(n.projectDir??"")}async function Ms(){await e.init();const p=e.projectRequest.value;if(!p)return;if(e.projectRequest.value=null,Gh(),p.dir===n.projectDir){const X=fc();X&&await os(X);return}await Os(p.dir);const _=fc();_&&await os(_)}Je(()=>e.projectRequest.value?.n,()=>void Ms());async function Os(p){const _=p!==n.projectDir;if(!(_&&Ct.value.length>0&&!await At({title:h("vsUnsavedTitle"),message:h("vsSwitchLoseMsg",{n:String(Ct.value.length)})}))){n.projectDir=p,f(p),St.value="",bn.value=0;try{await Zl(p,u)}catch{}_&&di(),d()}}function di(){for(const p of Object.keys(C))delete C[p];for(const p of Object.keys(G))delete G[p];for(const p of Object.keys(F))delete F[p];W$(e.slot),n.openTabs=[],n.activeTab=null}async function Da(){if(Ic.has(u))return;Ic.add(u);let p=!1;const _=n.projectDir;if(_){const vt=await cl(_);if(vt&&!vt.isDir){const sn=Ze(_);sn&&sn!==_&&(n.projectDir=sn,n.openTabs.includes(_)||n.openTabs.push(_),n.activeTab=_,p=!0)}}const X=[...n.openTabs];if(X.length===0){p&&d();return}const Me=await Promise.all(X.map(async vt=>(await cl(vt))?.isDir?vt:null)),ft=new Set(Me.filter(vt=>!!vt));if(ft.size===0){p&&d();return}for(const vt of ft)delete C[vt],delete G[vt],delete F[vt];n.openTabs=n.openTabs.filter(vt=>!ft.has(vt)),n.activeTab&&ft.has(n.activeTab)&&(n.activeTab=n.openTabs[n.openTabs.length-1]??null),d()}async function os(p,_){nn.value=null,Ne.value=!1,n.openTabs.includes(p)||n.openTabs.push(p),n.activeTab=p,C[p]||await ys(p),_?.line&&(await Dt(),Nn.value?.revealLine(_.line)),d()}async function ys(p,_={}){if(!Z.has(p)&&!(C[p]?.dirty&&!_.force)){Z.add(p),delete G[p];try{const X=await ul(p,{encoding:_.encoding,hasBom:_.hasBom});C[p]={content:X.content,dirty:!1,encoding:X.encoding,hasBom:X.hasBom,eol:X.eol,mtime:X.mtime,binary:X.binary,conflict:!1},F[p]=(F[p]??0)+1}catch(X){G[p]=X instanceof Ks&&X.status===413?h("vsTooLarge"):X.message}finally{Z.delete(p)}}}function pi(p){fe(p)||(nn.value=null,n.activeTab=p,!C[p]&&!G[p]&&ys(p),d())}const nn=g(null);function no(p){Ne.value=!1,nn.value=p}async function Fa(){const p=n.activeTab,_=p?C[p]:void 0;if(!(!p||!_||_.binary))try{const X=await ul(p),Me=G3(X.content,_.content);no({title:`${je(p)} · ${h("vsLocalDiffTitle")}`,lines:Me?Me.lines:[h("vsLocalDiffTooBig")]})}catch(X){Y("error",X.message)}}const Pa=1e3,Ls=new Map;function Do(p){if(!Ue.autoSave)return;const _=Ls.get(p);_&&clearTimeout(_),Ls.set(p,setTimeout(()=>{Ls.delete(p),C[p]?.dirty&&ws(p,{quiet:!0})},Pa))}function Fo(p){const _=Ls.get(p);_&&clearTimeout(_),Ls.delete(p)}const Po=B(dd),fi=g(null),vi=B(()=>Po.value.find(p=>p.id===we.value)),hi=B(()=>[{id:"files",title:h("vsLeftTabFiles"),icon:"folder"},{id:"search",title:h("vsLeftTabSearch"),icon:"search",disabled:!n.projectDir},{id:"git",title:h("vsLeftTabGit"),icon:"git",disabled:!n.projectDir},...Po.value.filter(p=>!p.when||p.when(y)).map(p=>({id:p.id,title:ud(p.title),icon:p.icon}))]),E=B(()=>hi.value.filter(p=>!n.activityBar.hidden.includes(p.id))),S=B(()=>{if(n.projectDir)return 0;const p=new Set(Po.value.filter(X=>typeof X.when=="function").map(X=>X.id));if(!p.size)return 0;let _=0;for(const X of ca())X.enabled&&W3(X.id).some(Me=>p.has(Me))&&_++;return _});Je(E,p=>{p.some(_=>_.id===we.value)||(we.value="files")},{immediate:!0});function $e(p){n.activityBar.hidden.includes(p)||n.activityBar.hidden.push(p),we.value===p&&(we.value="files"),d()}function nt(p){n.activityBar.hidden=n.activityBar.hidden.filter(_=>_!==p),d()}function jt(p){n.activityBar.hidden.includes(p)?nt(p):$e(p)}const $t=g(!1),dt=g(0),j=g(0),lt=g("bar"),Yt=g(null),Vn=B(()=>({label:n.activityBar.position==="top"?h("vsActBarBottom"):h("vsActBarTop"),icon:"panellayout",onClick:()=>{n.activityBar.position=n.activityBar.position==="top"?"bottom":"top",d()}})),Bs=B(()=>({label:n.sidebarSide==="left"?h("vsSideRight"):h("vsSideLeft"),icon:"float",onClick:()=>{n.sidebarSide=n.sidebarSide==="left"?"right":"left",d()}})),mi=B(()=>({label:Ne.value?h("vsUnfoldEditor"):h("vsFoldEditor"),icon:Ne.value?"chevronsRight":"chevronsLeft",onClick:()=>{Ne.value=!Ne.value}})),gi=B(()=>{if(lt.value==="view"&&Yt.value){const p=Yt.value;return[{label:h("vsActHide",{name:p.title}),icon:"close",onClick:()=>$e(p.id)},{separator:!0},mi.value,{separator:!0},Vn.value,Bs.value]}return[...hi.value.map(p=>({label:p.title,icon:p.icon??"",checked:!n.activityBar.hidden.includes(p.id),onClick:()=>jt(p.id)})),{separator:!0},mi.value,{separator:!0},Vn.value,Bs.value]});function Yd(p,_){const X=_.currentTarget?.getBoundingClientRect();dt.value=X?.right??_.clientX,j.value=X?.bottom??_.clientY,lt.value="view",Yt.value=p,$t.value=!0}function Jd(p){dt.value=p.clientX,j.value=p.clientY,lt.value="bar",Yt.value=null,$t.value=!0}const Tr=B(Sa);function Qd(){return{path:n.activeTab,projectDir:n.projectDir}}const Dr=g(null),{cmOpen:Na,cmX:Zd,cmY:ep,openMenuAt:tp}=vn();function np(){const p=Dr.value?.getBoundingClientRect();p&&tp(p.left,p.top-4)}const sp=B(()=>{n.activeTab,n.projectDir;const p=Qd();return[...Tr.value,...ni()].sort((X,Me)=>(X.order??0)-(Me.order??0)).map(X=>({label:X.text,disabled:!!X.when&&!X.when(p),onClick:()=>{try{xa(X.commandId,p)}catch(Me){Y("error",Me.message)}}}))}),op=B(()=>Tr.value.length+ni().length>0);Es(p=>{const _=vi.value,X=fi.value;if(!_||!X||_.when&&!_.when(y))return;const Me=_.mount(X,y);Zi(X);const ft=new ResizeObserver(()=>Zi(X));ft.observe(X),p(()=>{if(ft.disconnect(),typeof Me=="function")try{Me()}catch{}X.replaceChildren()})},{flush:"post"});function ip(p){const _=n.activeTab?C[n.activeTab]:void 0;_&&(_.content=p,_.dirty=!0,n.activeTab&&Do(n.activeTab))}function ap(p,_){ee.line=p,ee.col=_}function lp(p){n.activeTab&&b(n.activeTab,p)}async function Ra(){const p=n.activeTab;if(!p)return;const _=C[p];!_||!_.dirty||await ws(p)}async function ws(p,_={}){const X=C[p];if(!p||!X||X.binary)return!1;de.value=!0;try{const Me=await il(p,X.content,{key:u,encoding:X.encoding,hasBom:X.hasBom,eol:X.eol,expectedMtime:X.mtime,force:_.force});return X.dirty=!1,X.conflict=!1,X.mtime=Me.mtime,_.quiet||Y("ok",h("vsSaved")),!0}catch(Me){return Me instanceof Ks&&Me.code==="mtime-conflict"?(de.value=!1,await At({title:h("vsConflictTitle"),message:h("vsConflictMsg",{name:je(p)})})?await ws(p,{..._,force:!0}):!1):(Y("error",Me.message),!1)}finally{de.value=!1}}async function Fr(){const p=Ct.value.slice();if(p.length===0){Y("info",h("vsNoDirty"));return}let _=0;for(const X of p)await ws(X,{quiet:!0})&&_++;_===p.length&&Y("ok",h("vsAllSaved",{n:String(_)}))}function Aa(){const p=n.activeTab,_=p?C[p]:void 0;!p||!_||_.binary||(be.value=Ke(p)||n.projectDir,le.value=je(p),ye.value=!0)}async function rp(p){const _=n.activeTab,X=_?C[_]:void 0;if(!_||!X||X.binary||p===_)return;if(n.openTabs.includes(p)&&C[p]?.dirty){Y("error",h("vsSaveAsBlockedDirty",{name:je(p)}));return}let Me=!1;try{Me=await rl(p)}catch{return}if(!(Me&&!await At({title:h("vsSaveAsTitle"),message:h("vsOverwriteMsg",{path:p})}))){de.value=!0;try{await il(p,X.content,{key:u,encoding:X.encoding,hasBom:X.hasBom,eol:X.eol}),Y("ok",h("vsSavedAs",{path:je(p)})),delete C[_],delete G[_],delete F[_],delete C[p],delete G[p],delete F[p],n.openTabs=n.openTabs.filter(ft=>ft!==_&&ft!==p),await os(p)}catch(ft){Y("error",ft.message)}finally{de.value=!1}}}async function cp(p,_){const X=C[p];if(!(!X||X.binary)&&_&&!(Math.abs(_.mtimeMs-X.mtime)<1)){if(X.dirty){X.conflict||(X.conflict=!0);return}await ys(p,{force:!0}),Y("info",h("vsReloadedExternal",{name:je(p)}))}}function up(){me=kh((p,_)=>{n.openTabs.includes(p)&&cp(p,_)}),Je(()=>n.openTabs.slice(),p=>bh(M,p),{immediate:!0})}async function dp(){const p=n.activeTab,_=p?C[p]:void 0;!p||!_||!await At({title:h("vsConflictTitle"),message:h("vsConflictMsgReload",{name:je(p)})})||await ys(p,{force:!0})}function pp(){const p=n.activeTab;if(p){if(Wt(p)){Y("error",h("remoteNoExternal"));return}cu(p)}}async function yi(p){if(fe(p)){nn.value=null;return}if(C[p]?.dirty){const X=await jr({title:h("vsUnsavedTitle"),message:h("vsUnsavedMsg"),choices:[{id:"save",text:h("vsCloseSave"),primary:!0},{id:"discard",text:h("vsCloseDiscard")},{id:"cancel",text:h("cancel")}]});if(X==="save"){if(!await ws(p,{quiet:!0}))return}else if(X!=="discard")return}delete C[p],delete G[p],delete F[p],Fo(p),Ja(e.slot,p),n.openTabs=n.openTabs.filter(X=>X!==p),n.activeTab===p&&(n.activeTab=n.openTabs[n.openTabs.length-1]??null),d()}async function fp(p){await ws(p,{quiet:!0})&&await yi(p)}async function Ma(p){const _=p.filter(Me=>C[Me]?.dirty),X=Me=>{delete C[Me],delete G[Me],delete F[Me],Fo(Me),Ja(e.slot,Me),n.openTabs=n.openTabs.filter(ft=>ft!==Me)};if(_.length>1){const Me=await jr({title:h("vsUnsavedTitle"),message:h("vsCloseManyMsg",{n:String(_.length)}),choices:[{id:"save",text:h("vsCloseSaveAll"),primary:!0},{id:"discard",text:h("vsCloseDiscardAll")},{id:"cancel",text:h("cancel")}]});if(Me!=="save"&&Me!=="discard")return;const ft=new Set;if(Me==="save")for(const vt of _)await ws(vt,{quiet:!0})||ft.add(vt);for(const vt of p)Me==="save"&&ft.has(vt)||X(vt);n.activeTab&&!n.openTabs.includes(n.activeTab)&&(n.activeTab=n.openTabs[n.openTabs.length-1]??null),d();return}for(const Me of p)await yi(Me)}async function vp(p){fe(p)||await Ma(n.openTabs.filter(_=>_!==p))}async function hp(p){if(fe(p))return;const _=n.openTabs.indexOf(p);_<0||await Ma(n.openTabs.slice(_+1))}async function mp(){await Ma([...n.openTabs])}function gp(p){delete C[p],delete G[p],delete F[p],Fo(p),Ja(e.slot,p),n.openTabs=n.openTabs.filter(_=>_!==p),n.activeTab===p&&(n.activeTab=n.openTabs[n.openTabs.length-1]??null),d()}function yp(p,_){const X=C[p];X&&(C[_]=X,delete C[p]);const Me=Nd(e.slot),ft=Me.get(p);ft&&(Me.delete(p),Me.set(_,ft)),F[p]!==void 0&&(F[_]=F[p],delete F[p]),delete G[p],G[_]&&delete G[_],n.openTabs=n.openTabs.map(vt=>vt===p?_:vt),n.activeTab===p&&(n.activeTab=_),d()}const No=g(!1),wp=B(()=>({width:`calc(${Math.round(n.split*1e3)/10}% - 3px)`}));function Oa(p){if(!No.value||!A.value)return;const _=A.value.getBoundingClientRect();if(_.width<=0)return;let X=(p.clientX-_.left)/_.width;n.sidebarSide==="right"&&(X=1-X),n.split=Math.min(.85,Math.max(.15,X))}function La(){No.value&&(No.value=!1,document.removeEventListener("mousemove",Oa),document.removeEventListener("mouseup",La),document.body.style.userSelect="",document.body.style.cursor="",d())}function bp(){No.value=!0,document.addEventListener("mousemove",Oa),document.addEventListener("mouseup",La),document.body.style.userSelect="none",document.body.style.cursor="col-resize"}function _p(p){const _=p?.tagName;return _==="INPUT"||_==="TEXTAREA"||_==="SELECT"}function Pr(p){if(!(p.ctrlKey||p.metaKey))return;const _=p.key.toLowerCase();if(_==="p"){if(_p(p.target))return;p.preventDefault(),Ns();return}if(_!=="s"){if(_==="w"){p.preventDefault(),nn.value?nn.value=null:n.activeTab&&yi(n.activeTab);return}if(_==="pagedown"||_==="pageup"){p.preventDefault(),kp(_==="pagedown"?1:-1);return}return}p.preventDefault(),p.shiftKey?Aa():Ra()}function kp(p){const _=n.openTabs;if(_.length<2)return;const X=n.activeTab?_.indexOf(n.activeTab):-1,Me=((X<0?0:X+p)+_.length)%_.length;pi(_[Me])}function Nr(p){Ct.value.length>0&&(p.preventDefault(),p.returnValue="")}const wi=g(null),Rr=g(!1);let bi=null;function Ar(){const p=wi.value;if(!p)return;p.classList.remove("compact");const X=p.scrollWidth-p.clientWidth>1;p.classList.toggle("compact",X),Rr.value=X}const xp=560,Cp=680;let _i=null;function Mr(){const p=A.value?.clientWidth??0;p<=xp&&n.projectDir?Ne.value=!0:p>=Cp&&(Ne.value=!1)}return rn(async()=>{X3(),wi.value&&(bi=new ResizeObserver(()=>Ar()),bi.observe(wi.value),Ar()),A.value&&(_i=new ResizeObserver(()=>Mr()),_i.observe(A.value),Mr()),await v();const p=O();for(const[Me,ft]of Object.entries(p))n.openTabs.includes(Me)&&(C[Me]=ft);await Da(),n.activeTab&&!C[n.activeTab]&&ys(n.activeTab),a.value=!0,await Dt(),await re.value?.rebuild(),window.addEventListener("keydown",Pr),window.addEventListener("beforeunload",Nr),window.addEventListener("beforeunload",d),up();const _=`${u}:${n.projectDir??""}`;n.projectDir&&!jc.has(_)&&(jc.add(_),Ps());const X=Wh();X&&e.requestOpenProject(X),e.projectRequest.value&&await Ms()}),Rt(()=>{bi?.disconnect(),bi=null,_i?.disconnect(),_i=null,window.removeEventListener("keydown",Pr),window.removeEventListener("beforeunload",Nr),window.removeEventListener("beforeunload",d),document.removeEventListener("mousemove",Oa),document.removeEventListener("mouseup",La),me?.(),me=null,_h(M),k({...C}),d()}),(p,_)=>(l(),c("div",{ref_key:"rootRef",ref:A,class:"vs-pane","data-theme":s(V),style:_t(H.value)},[o("div",{ref_key:"topbarRef",ref:wi,class:te(["vs-topbar",{compact:Rr.value}])},[o("span",{class:"vs-brand",title:s(h)("vsBrand")},[m(ne,{class:"vs-topbar-ico",name:"code",size:14}),o("span",cT,i(s(h)("vsBrand")),1)],8,rT),_[19]||(_[19]=o("span",{class:"vs-sep"},null,-1)),o("button",{ref_key:"fileBtnRef",ref:et,class:te(["vs-btn vs-btn-menu",{open:s(at)}]),title:s(h)("vsMenuFile"),onClick:ot},[m(ne,{class:"vs-topbar-ico",name:"folder",size:13}),o("span",dT,i(s(h)("vsMenuFile")),1),_[16]||(_[16]=o("span",{class:"vs-caret"},null,-1))],10,uT),_[20]||(_[20]=o("span",{class:"vs-sep"},null,-1)),o("button",{ref_key:"recentBtnRef",ref:$n,class:te(["vs-btn vs-btn-menu vs-recent-btn",{open:s(Jn)}]),title:Tn.value,onClick:Bn},[m(ne,{class:"vs-topbar-ico",name:"clock",size:13}),o("span",fT,i(Fs.value),1),_[17]||(_[17]=o("span",{class:"vs-caret"},null,-1))],10,pT),_[21]||(_[21]=o("span",{class:"vs-sep"},null,-1)),o("span",{class:"vs-project-path",title:s(n).projectDir??s(h)("vsNoProject")},i(r.value),9,vT),_[22]||(_[22]=o("span",{class:"vs-spacer"},null,-1)),o("button",{class:"vs-quickopen-trigger",title:s(h)("vsQuickOpenPlaceholder"),disabled:!s(n).projectDir,onClick:Ns},[m(ne,{name:"search",size:13}),o("span",mT,i(In.value?s(h)("vsSearchIndexing"):s(h)("vsQuickOpenPlaceholder")),1),_[18]||(_[18]=o("span",{class:"vs-quickopen-kbd"},"Ctrl+P",-1))],8,hT)],2),S.value>0?(l(),c("button",{key:0,class:"vs-exthint",type:"button",title:s(h)("vsOpenFolder"),onClick:Ut},[m(ne,{name:"puzzle",size:13}),o("span",null,i(s(h)("vsExtNeedProject",{n:S.value})),1)],8,gT)):N("",!0),o("div",{class:te(["vs-body",{"right-folded":Ne.value,"side-right":s(n).sidebarSide==="right"}])},[o("div",{class:"vs-left",style:_t(wp.value)},[o("div",{class:te(["vs-activity",{btm:s(n).activityBar.position==="bottom"}]),onContextmenu:xe(Jd,["prevent"])},[(l(!0),c(oe,null,Ae(E.value,X=>(l(),c("button",{key:X.id,class:te(["vs-act-btn",{active:we.value===X.id}]),disabled:X.disabled,title:X.title,onClick:Me=>W(X.id),onContextmenu:xe(Me=>Yd(X,Me),["prevent","stop"])},[s(Vo)(X.icon??"")?(l(),Xe(ne,{key:0,name:X.icon??"",size:17},null,8,["name"])):(l(),c("span",wT,i(X.title.slice(0,1)),1))],42,yT))),128))],34),o("div",bT,[kt(m(p8,{ref_key:"treeRef",ref:re,root:s(n).projectDir,"active-path":s(n).activeTab,onOpenFile:os,onFileRemoved:gp,onFileRenamed:yp,onProjectMissing:wn,onRemoveProject:Qn},null,8,["root","active-path"]),[[go,we.value==="files"]]),we.value==="search"?(l(),Xe(F3,{key:0,"project-dir":s(n).projectDir||"",onOpen:z},null,8,["project-dir"])):N("",!0),kt(m($6,{class:"vs-git-view",onOpenDiff:no},null,512),[[go,we.value==="git"]]),we.value==="git"&&!J.value?(l(),c("div",_T,i(s(h)("vsGitNoRepo")),1)):N("",!0),vi.value?(l(),c("div",{key:2,ref_key:"extHostRef",ref:fi,class:"vs-ext-view"},null,512)):N("",!0)])],4),o("div",{class:te(["vs-split",{dragging:No.value}]),role:"separator","aria-orientation":"vertical",onMousedown:xe(bp,["prevent"])},null,34),o("div",kT,[m(x8,{tabs:Ye.value,active:st.value,onSelect:pi,onClose:yi,onSave:ws,onCloseSave:fp,onCloseOthers:vp,onCloseRight:hp,onCloseAll:mp},null,8,["tabs","active"]),o("div",xT,[nn.value?(l(),c("div",CT,[m(Ko,{lines:nn.value.lines,empty:s(h)("gitDiffEmpty")},null,8,["lines","empty"])])):s(n).activeTab?Ie.value?(l(),c("div",DT,[_[23]||(_[23]=o("span",{class:"vs-loading-spin","aria-hidden":"true"},null,-1)),o("span",null,i(s(h)("vsLoading")),1)])):rt.value?(l(),c("div",FT,i(rt.value),1)):Ce.value?.binary?(l(),c("div",PT,[o("div",NT,i(s(h)("vsBinaryHint")),1),o("button",{class:"vs-btn",onClick:pp},i(s(h)("vsOpenExternal")),1)])):(l(),Xe(nE,{key:5,ref_key:"editorRef",ref:Nn,path:s(n).activeTab,slot:s(e).slot,"initial-content":qe.value,"initial-view":Le.value,"doc-rev":ce.value,readonly:yt.value,dark:s(V)==="dark",onChange:ip,onCursor:ap,onView:lp,onContextmenu:Pe},null,8,["path","slot","initial-content","initial-view","doc-rev","readonly","dark"])):(l(),c("div",ST,[m(ne,{class:"vs-empty-ico",name:"code",size:44}),o("div",$T,i(s(h)("vsEmptyTitle")),1),o("div",ET,i(s(h)("vsEmptyHint")),1),o("div",TT,[o("button",{class:"vs-btn",onClick:Ut},i(s(h)("vsOpenFolder")),1),o("button",{class:"vs-btn",onClick:_[0]||(_[0]=X=>Dn("git"))},i(s(h)("menuCloneGit")),1)])]))]),o("div",RT,[J.value?(l(),c("button",{key:0,class:"vs-status-seg vs-status-btn",title:s(n).projectDir??"",onClick:_[1]||(_[1]=X=>W("git"))},[m(ne,{name:"git",size:11}),ue(" "+i(J.value),1)],8,AT)):N("",!0),yt.value?(l(),c("span",MT,i(s(h)("vsReadonly")),1)):N("",!0),ut.value?(l(),c("button",{key:2,class:"vs-status-conflict",onClick:dp},i(s(h)("vsConflictBadge")),1)):N("",!0),op.value?(l(),c("button",{key:3,ref_key:"extMenuBtnRef",ref:Dr,class:te(["vs-status-seg vs-status-btn vs-status-ext",{open:s(Na)}]),title:s(h)("vsMenuExtensions"),onClick:np},[m(ne,{name:"puzzle",size:11}),ue(" "+i(s(h)("vsMenuExtensions")),1)],10,OT)):N("",!0),_[24]||(_[24]=o("span",{class:"vs-status-spacer"},null,-1)),o("span",LT,"Ln "+i(ee.line)+", Col "+i(ee.col),1),o("button",{class:"vs-status-seg vs-status-btn",disabled:!s(n).activeTab,onClick:q},i(Te.value),9,BT),o("button",{class:"vs-status-seg vs-status-btn",disabled:!s(n).activeTab,onClick:On},i(Q.value),9,IT),o("span",jT,i(it.value),1)])])],2),s(at)?(l(),Xe(Zt,{key:1,items:Ln.value,x:s(Cn),y:s(Sn),onClose:_[2]||(_[2]=X=>at.value=!1)},null,8,["items","x","y"])):N("",!0),s(Na)?(l(),Xe(Zt,{key:2,items:sp.value,x:s(Zd),y:s(ep),placement:"top",onClose:_[3]||(_[3]=X=>Na.value=!1)},null,8,["items","x","y"])):N("",!0),s(Jn)?(l(),Xe(Zt,{key:3,items:un.value,x:s(gn),y:s(En),onClose:_[4]||(_[4]=X=>Jn.value=!1)},null,8,["items","x","y"])):N("",!0),Re.value?(l(),c("div",{key:4,class:"vs-quickopen-backdrop",onMousedown:xe(es,["self"])},[o("div",{class:"vs-quickopen",onMousedown:_[9]||(_[9]=xe(()=>{},["stop"]))},[kt(o("input",{ref_key:"searchInputRef",ref:Be,"onUpdate:modelValue":_[5]||(_[5]=X=>He.value=X),class:"vs-quickopen-input",placeholder:In.value?s(h)("vsSearchIndexing"):s(h)("vsQuickOpenPlaceholder"),onInput:Zn,onKeydown:[_[6]||(_[6]=bt(xe(X=>Rs(1),["prevent"]),["down"])),_[7]||(_[7]=bt(xe(X=>Rs(-1),["prevent"]),["up"])),_[8]||(_[8]=bt(xe(X=>eo(),["prevent"]),["enter"])),bt(xe(es,["prevent"]),["esc"])]},null,40,VT),[[Lt,He.value]]),o("div",zT,[dn.value.length>0?(l(),c(oe,{key:0},[(l(!0),c(oe,null,Ae(dn.value,(X,Me)=>(l(),c("div",{key:X.abs,class:te(["vs-search-row",{active:Me===Ge.value}]),title:X.abs,onMousedown:xe(ft=>eo(Me),["prevent"]),onMouseenter:ft=>Ge.value=Me},[o("span",HT,i(X.name),1),o("span",WT,i(X.dir),1)],42,UT))),128)),Pn.value?(l(),c("div",GT,i(s(h)("vsSearchTruncated")),1)):N("",!0)],64)):He.value.trim()&&!In.value?(l(),c("div",qT,i(s(h)("vsSearchNoResult")),1)):N("",!0)])],32)],32)):N("",!0),s(L)?(l(),Xe(Zt,{key:5,items:De.value,x:s(T),y:s(K),onClose:_[10]||(_[10]=X=>L.value=!1)},null,8,["items","x","y"])):N("",!0),s(ae)?(l(),Xe(Zt,{key:6,items:Gt.value,x:s(ct),y:s(wt),onClose:_[11]||(_[11]=X=>ae.value=!1)},null,8,["items","x","y"])):N("",!0),s(x)?(l(),Xe(Zt,{key:7,items:P.value,x:s(Se),y:s(pe),onClose:_[12]||(_[12]=X=>x.value=!1)},null,8,["items","x","y"])):N("",!0),$t.value?(l(),Xe(Zt,{key:8,items:gi.value,x:dt.value,y:j.value,onClose:_[13]||(_[13]=X=>$t.value=!1)},null,8,["items","x","y"])):N("",!0),m(Zc),m(ia,{modelValue:I.value,"onUpdate:modelValue":_[14]||(_[14]=X=>I.value=X),"initial-dir":ve.value,onConfirm:Os},null,8,["modelValue","initial-dir"]),m(ia,{modelValue:ye.value,"onUpdate:modelValue":_[15]||(_[15]=X=>ye.value=X),mode:"file","initial-dir":be.value,"initial-name":le.value,onConfirm:rp},null,8,["modelValue","initial-dir","initial-name"])],12,lT))}}),XT=xt(KT,[["__scopeId","data-v-26cefa9f"]]),YT={class:"fw-term-headicon"},JT={class:"fw-term-tag"},QT=["title"],ZT={class:"fw-term-note"},eD=["title"],tD=["title"],nD={key:0,class:"fw-term-searchbar"},sD=["placeholder","onKeydown"],oD=["title"],iD=["title"],aD=["title"],lD=["title"],rD={class:"fw-term-footer"},cD=["title","disabled"],uD=["title","disabled"],dD=["title"],pD=["title"],fD=["title"],vD={class:"fw-term-shellhint"},hD=["title"],mD=["title"],nl=320,sl=240,Vc=10,zc=24,gD=ht({__name:"TerminalWindow",props:{tab:{}},emits:["close"],setup(t,{emit:e}){const n=t,a=e,{t:r}=Mt(),u=g(680),v=g(460),d=g(0),f=g(0),w=g(null);let b=!1;const k=g(null),O=B(()=>{const ze=n.tab.cwd?.trim();return ze?ze.replace(/[\\/]$/,"").split(/[\\/]/).pop()??"":""}),M=B(()=>n.tab.shell==="powershell"?"PS":"cmd"),A=B(()=>!!n.tab.ssh&&!n.tab.sshDegraded),V=B(()=>!!n.tab.ssh),H=B(()=>{const ze=n.tab.ssh;return ze?ze.remote&&ze.remote!=="/"?`${ze.label} · ${ze.remote}`:ze.label:""}),C=B(()=>A.value?H.value:O.value||n.tab.cwd||r("terminalTitle")),Z=B(()=>A.value?H.value:`${M.value} · ${O.value||n.tab.cwd||r("terminal")}`);function G(ze){return Math.min(Math.max(0,ze),Math.max(0,window.innerWidth-u.value))}function F(ze){return Math.min(Math.max(0,ze),Math.max(0,window.innerHeight-v.value))}function de(ze){u.value=Math.max(nl,ze.w),v.value=Math.max(sl,ze.h),d.value=G(ze.x),f.value=F(ze.y)}function I(){Dv(n.tab.id,{x:d.value,y:f.value,w:u.value,h:v.value})}const ve=B(()=>({position:"fixed",left:`${d.value}px`,top:`${f.value}px`,width:`${u.value}px`,height:`${v.value}px`}));let ye=0;Je([d,f,u,v],()=>{b&&(window.clearTimeout(ye),ye=window.setTimeout(I,250))});let be=!1,le=0,re=0;function Ee(ze){ze.target.closest(".fw-term-headclose, .fw-term-headmin")||(b=!0,be=!0,le=ze.clientX-d.value,re=ze.clientY-f.value,document.body.style.userSelect="none",document.addEventListener("mousemove",Ve),document.addEventListener("mouseup",we))}function Ve(ze){if(!be)return;const Qe=w.value,et=Qe?.offsetWidth??u.value,at=Qe?.offsetHeight??v.value;d.value=Math.min(Math.max(0,ze.clientX-le),window.innerWidth-et),f.value=Math.min(Math.max(0,ze.clientY-re),Math.max(0,window.innerHeight-at))}function we(){be&&(be=!1,document.body.style.userSelect="",document.removeEventListener("mousemove",Ve),document.removeEventListener("mouseup",we),I())}Rt(we);let Ne=!1,W=0,J=0,z=0,ee=0;function me(ze){b=!0,Ne=!0,W=ze.clientX,J=ze.clientY,z=u.value,ee=v.value,document.body.style.userSelect="none",document.addEventListener("mousemove",je),document.addEventListener("mouseup",Ke)}function je(ze){if(!Ne)return;const Qe=Math.max(nl,window.innerWidth-d.value-4),et=Math.max(sl,window.innerHeight-f.value-4);u.value=Math.min(Math.max(nl,z+(ze.clientX-W)),Qe),v.value=Math.min(Math.max(sl,ee+(ze.clientY-J)),et)}function Ke(){Ne&&(Ne=!1,document.body.style.userSelect="",document.removeEventListener("mousemove",je),document.removeEventListener("mouseup",Ke),I())}Rt(Ke);function Ze(){b=!0,u.value=Math.min(680,window.innerWidth-12),v.value=Math.min(460,window.innerHeight-12),I()}let ge=null,_e=null,Ye=null,st=null,fe=null;function Ce(ze){const Qe=ze??k.value,et=getComputedStyle(Qe||document.documentElement),at=(Cn,Sn)=>(et.getPropertyValue(Cn)||Sn).trim();return{background:at("--base","#1e1e2e"),foreground:at("--text","#cdd6f4"),cursor:at("--text","#cdd6f4"),cursorAccent:at("--base","#1e1e2e"),selectionBackground:at("--wt-sel-bg","rgba(137, 180, 250, 0.35)"),black:at("--wt-term-black","#11111b"),red:at("--red","#f38ba8"),green:at("--green","#a6e3a1"),yellow:at("--yellow","#f9e2af"),blue:at("--blue","#89b4fa"),magenta:at("--mauve","#cba6f7"),cyan:at("--teal","#94e2d5"),white:at("--wt-term-white","#bac2de"),brightBlack:at("--wt-term-brightblack","#585b70"),brightRed:at("--red","#f38ba8"),brightGreen:at("--green","#a6e3a1"),brightYellow:at("--yellow","#f9e2af"),brightBlue:at("--sapphire","#74c7ec"),brightMagenta:at("--mauve","#cba6f7"),brightCyan:at("--teal","#94e2d5"),brightWhite:at("--wt-term-brightwhite","#cdd6f4")}}function qe(ze,Qe){const et=k.value;return(getComputedStyle(et||document.documentElement).getPropertyValue(ze)||Qe).trim()}function ce(){const ze=k.value;if(!ze||ge)return;const Qe=Mv(n.tab.id);st=document.createElement("div"),st.className="fw-term-xterm",ze.appendChild(st);const et=new Qp({cursorBlink:!0,fontSize:Q.value,fontFamily:'Consolas, "Cascadia Code", "Courier New", monospace',scrollback:1e4,theme:Ce(st),allowTransparency:!1,allowProposedApi:!0});ge=et,_e=new tf,et.loadAddon(_e),et.loadAddon(new Zp),Ye=new ef,et.loadAddon(Ye),et.attachCustomKeyEventHandler(De),et.open(st),et.write(n.tab.output),et.onData(at=>Sv(n.tab.session,at)),Yr(n.tab.id,at=>ge?.write(at)),Dt(()=>{Ie(),Qe&&ge?.focus()})}function Ie(){try{_e?.fit()}catch{}rt()}function rt(){ge&&(ge.cols<2||ge.rows<2||$v(n.tab.session,ge.cols,ge.rows))}function yt(){ge?.focus()}function ut(ze){ze.target?.closest("button, input, textarea, .fw-term-resizer, .fw-term-headmin, .fw-term-headclose")||ge?.focus()}const it=g(!1),Le=g(""),U=g(!1),R=g(null),Q=B(()=>Ue.termFontSize);function Te(){return{caseSensitive:U.value,incremental:!0,decorations:{matchBackground:qe("--wt-search-match-bg","rgba(166, 173, 200, 0.4)"),matchBorder:qe("--wt-search-match-bg","rgba(166, 173, 200, 0)"),activeMatchBackground:qe("--wt-search-active-bg","rgba(166, 227, 161, 0.6)"),activeMatchBorder:qe("--wt-search-active-border","#a6e3a1"),matchOverviewRuler:qe("--wt-search-active-border","#a6e3a1"),activeMatchColorOverviewRuler:qe("--wt-search-active-border","#a6e3a1")}}}function L(ze){const Qe=Le.value.trim();if(!Qe){Ye?.clearDecorations();return}ze?Ye?.findNext(Qe,Te()):Ye?.findPrevious(Qe,Te())}function T(){it.value=!0,Dt(()=>{R.value?.focus(),R.value?.select()}),L(!0)}function K(){it.value=!1,Le.value="",Ye?.clearDecorations(),yt()}Je([Le,U],()=>{it.value&&L(!0)});function $(ze){const Qe=Math.min(Math.max(Vc,Math.round(ze)),zc);Qe!==Ue.termFontSize&&(Ue.termFontSize=Qe,Hn(),ge&&(ge.options.fontSize=Qe),Dt(Ie))}async function q(){try{const ze=await navigator.clipboard.readText();ze&&ge?.paste(ze)}catch{}}function De(ze){if(ze.type!=="keydown"||!ge)return!0;const Qe=ze.ctrlKey||ze.metaKey,et=ze.key.toLowerCase();if(Qe&&et==="f")return ze.preventDefault(),T(),!1;if(Qe&&et==="c"){const at=ge.getSelection();return at?(ze.preventDefault(),navigator.clipboard.writeText(at).catch(()=>{}),ge.clearSelection(),!1):!0}return Qe&&(et==="v"||et==="y")?(ze.preventDefault(),q(),!1):(Qe||ze.altKey)&&(et==="="||et==="+"||et==="-"||et==="_")?(ze.preventDefault(),$(Q.value+(et==="-"||et==="_"?-1:1)),!1):Qe&&et==="0"?(ze.preventDefault(),$(13),!1):!0}function ae(){n.tab.shell=n.tab.shell==="powershell"?"cmd":"powershell",ec(n.tab,Fe.key),Dt(Ie)}function ct(){ec(n.tab,Fe.key),Dt(Ie)}function wt(){cs.value?Y("ok",r("terminalAdminOn")):Y("info",r("terminalAdminHint"))}function Ot(){n.tab.output="",ge?.clear()}function On(){rv(n.tab.id)}Je(()=>dl(n.tab.id),ze=>{ze||Dt(()=>{Ie(),ge?.focus()})});let Gt;return typeof MutationObserver<"u"&&(Gt=new MutationObserver(()=>{ge&&st&&(ge.options.theme=Ce(st))}),Gt.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]})),Rt(()=>Gt?.disconnect()),rn(()=>{const ze=Tv(n.tab.id);de(ze??Rv()),hu(),ce(),k.value&&typeof ResizeObserver<"u"&&(fe=new ResizeObserver(()=>Ie()),fe.observe(k.value))}),Rt(()=>{fe?.disconnect(),fe=null,Cu(n.tab.session),Yr(n.tab.id,null),ge?.dispose(),ge=null,_e=null,Ye=null,st?.remove(),st=null}),(ze,Qe)=>(l(),c("div",{ref_key:"rootEl",ref:w,class:"fw-term-window",style:_t(ve.value),onMousedown:ut},[o("div",{class:"fw-term-head",onMousedown:xe(Ee,["prevent"])},[o("span",YT,[m(ne,{name:"terminal",size:13})]),o("span",JT,i(s(r)("terminal"))+" #"+i(t.tab.name),1),A.value?(l(),c("span",{key:0,class:"fw-term-sshbadge",title:s(r)("termSshBadge")},"SSH",8,QT)):N("",!0),o("span",ZT,i(C.value),1),o("span",{class:"fw-term-headmin",title:s(r)("terminalMinimize"),onClick:xe(On,["stop"])},"–",8,eD),o("span",{class:"fw-term-headclose",title:s(r)("terminalCloseTitle"),onClick:Qe[0]||(Qe[0]=xe(et=>a("close"),["stop"]))},"✕",8,tD)],32),it.value?(l(),c("div",nD,[kt(o("input",{ref_key:"searchInputEl",ref:R,"onUpdate:modelValue":Qe[1]||(Qe[1]=et=>Le.value=et),class:"fw-term-search-input",placeholder:s(r)("termSearchPlaceholder"),spellcheck:"false",onKeydown:[Qe[2]||(Qe[2]=bt(xe(et=>L(!0),["prevent"]),["enter"])),Qe[3]||(Qe[3]=bt(xe(et=>L(!1),["shift","prevent"]),["enter"])),bt(xe(K,["prevent"]),["esc"])]},null,40,sD),[[Lt,Le.value]]),o("button",{class:te(["fw-term-search-case",{on:U.value}]),title:s(r)("termSearchCase"),onClick:Qe[4]||(Qe[4]=et=>U.value=!U.value)},"Aa",10,oD),o("button",{class:"fw-term-search-btn",title:s(r)("termSearchPrev"),onClick:Qe[5]||(Qe[5]=et=>L(!1))},"▲",8,iD),o("button",{class:"fw-term-search-btn",title:s(r)("termSearchNext"),onClick:Qe[6]||(Qe[6]=et=>L(!0))},"▼",8,aD),o("button",{class:"fw-term-search-btn fw-term-search-close",title:s(r)("termSearchClose"),onClick:K},"✕",8,lD)])):N("",!0),o("div",{ref_key:"outEl",ref:k,class:"fw-term-out","box-":"double",onClick:yt},null,512),o("div",rD,[o("button",{class:"fw-term-btn",onClick:Ot},i(s(r)("terminalClear")),1),o("button",{class:"fw-term-btn",title:s(r)("termFontSmaller"),disabled:Q.value<=Vc,onClick:Qe[7]||(Qe[7]=et=>$(Q.value-1))},"A−",8,cD),o("button",{class:"fw-term-btn",title:s(r)("termFontLarger"),disabled:Q.value>=zc,onClick:Qe[8]||(Qe[8]=et=>$(Q.value+1))},"A+",8,uD),V.value?(l(),c("button",{key:1,class:"fw-term-btn",title:s(r)("termSshReconnectTitle"),onClick:ct},i(s(r)("termSshReconnect")),9,pD)):(l(),c("button",{key:0,class:"fw-term-btn",title:s(r)("terminalShellSwitch"),onClick:ae},i(M.value),9,dD)),s(cs)!==null&&!A.value?(l(),c("button",{key:2,class:te(["fw-term-admin",{on:s(cs)}]),title:s(cs)?s(r)("terminalAdminOn"):s(r)("terminalAdminOff"),onClick:wt},[m(ne,{name:"shield",size:11}),o("span",null,i(s(cs)?s(r)("terminalAdmin"):s(r)("terminalAdminNormal")),1)],10,fD)):N("",!0),Qe[9]||(Qe[9]=o("div",{class:"fw-spacer"},null,-1)),o("span",vD,i(Z.value),1),o("span",{class:"fw-term-kbdhint",title:s(r)("termCopyHint")},"Ctrl+C 复制 · Ctrl+V 粘贴 · Ctrl+F 搜索",8,hD)]),o("div",{class:"fw-term-resizer",title:s(r)("terminalResizeTitle"),onMousedown:xe(me,["prevent"]),onDblclick:xe(Ze,["stop"])},null,40,mD)],36))}}),yD=xt(gD,[["__scopeId","data-v-6d3078d7"]]),wD=["title"],bD={class:"fw-term-card-head"},_D={class:"fw-term-card-ico"},kD={class:"fw-term-card-title"},xD=["title"],CD=["title"],SD=["title"],$D={class:"fw-term-card-body"},ED=ht({__name:"TerminalMiniWindow",props:{tab:{}},setup(t){const e=t,n=B(()=>{if(e.tab.ssh)return e.tab.ssh.label;const d=e.tab.cwd?.trim();if(d){const f=d.replace(/[\\/]$/,"").split(/[\\/]/).pop();if(f)return f}return h("terminal")}),a=B(()=>{const d=e.tab.ssh;return d?d.remote&&d.remote!=="/"?`${d.label} · ${d.remote}`:d.label:e.tab.cwd||h("terminal")}),r=B(()=>{const d=dv(e.tab.id);if(!d)return"";const f=d.replace(/\r/g,"").split(`
`);let w=f.length;for(;w>0&&!f[w-1].trim();)w--;return f.slice(Math.max(0,w-5),w).join(`
`)});function u(){Xs.value=e.tab.id,tr(e.tab.id)}function v(){Su(e.tab.id),Et.value.length||(Fe.termOpen=!1)}return(d,f)=>(l(),c("div",{class:te(["fw-term-card",{active:t.tab.id===s(Xs)}]),title:a.value,onClick:u},[o("div",bD,[o("span",_D,[m(ne,{name:"terminal",size:12})]),o("span",kD,i(n.value),1),t.tab.ssh?(l(),c("span",{key:0,class:"fw-term-card-ssh",title:s(h)("termSshBadge")},"SSH",8,xD)):s(cs)?(l(),c("span",{key:1,class:"fw-term-card-admin",title:s(h)("terminalAdminOn")},[m(ne,{name:"shield",size:10})],8,CD)):N("",!0),o("span",{class:"fw-term-card-close",title:s(h)("terminalCloseTitle"),onClick:xe(v,["stop"])},"✕",8,SD)]),o("pre",$D,i(r.value),1)],10,wD))}}),TD=xt(ED,[["__scopeId","data-v-cfbf612f"]]),DD=["title"],FD={key:0,class:"dsh-term-dock-count"},PD=["title"],ND={class:"dsh-term-dock-listhead"},RD=["title"],AD=9,Ni=36,Jt=8,Uc=4,Ri=48,MD=ht({__name:"TerminalHost",setup(t){function e(){return document.documentElement.getAttribute("data-theme")==="light"?"light":"dark"}function n(){const z=document.getElementById("dsh-term-root");z&&z.setAttribute("data-term-theme",e())}n();let a;typeof MutationObserver<"u"&&(a=new MutationObserver(n),a.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]})),Rt(()=>a?.disconnect());const r=B(()=>Et.value.filter(z=>dl(z.id))),u=g(null),v=g(!1),d=g(!1),f=B(()=>v.value),w=B(()=>{const z=_n.value;return!!z&&z.x<340}),b=B(()=>{const z=_n.value;return!!z&&z.y>window.innerHeight/2}),k=B(()=>{const z=_n.value;return z?{left:`${z.x}px`,top:`${z.y}px`}:void 0}),O=g(null),M=g(360);function A(){const z=u.value?.getBoundingClientRect();if(!z)return;const ee=b.value?z.bottom-Jt:window.innerHeight-z.top-Jt;M.value=Math.max(180,Math.min(Math.round(ee)-4,Math.round(window.innerHeight*.72)))}function V(z,ee){const me=Math.max(Jt,window.innerWidth-Ni-Jt),je=Math.max(Jt,window.innerHeight-Ni-Jt);return{x:Math.min(Math.max(Jt,z),me),y:Math.min(Math.max(Jt,ee),je)}}function H(z,ee){const me=V(z,ee),je=Math.max(Jt,window.innerWidth-Ni-Jt),Ke=Math.max(Jt,window.innerHeight-Ni-Jt);let Ze=me.x,ge=me.y;return me.x-Jt<=Ri?Ze=Jt:je-me.x<=Ri&&(Ze=je),me.y-Jt<=Ri?ge=Jt:Ke-me.y<=Ri&&(ge=Ke),{x:Ze,y:ge}}let C=null,Z=!1;function G(z){if(z.button!==0||!u.value)return;const ee=u.value.getBoundingClientRect();_n.value||(_n.value={x:ee.left,y:ee.top}),C={pid:z.pointerId,fromX:z.clientX,fromY:z.clientY,baseX:_n.value.x,baseY:_n.value.y,moved:!1},z.currentTarget.setPointerCapture(z.pointerId)}function F(z){if(!C||z.pointerId!==C.pid)return;const ee=z.clientX-C.fromX,me=z.clientY-C.fromY;!C.moved&&Math.abs(ee)<Uc&&Math.abs(me)<Uc||(C.moved=!0,d.value=!0,_n.value=V(C.baseX+ee,C.baseY+me))}function de(z){if(!C||z.pointerId!==C.pid)return;Z=C.moved;const ee=C.moved;if(C=null,d.value=!1,ee){const me=_n.value;me&&(_n.value=H(me.x,me.y))}}function I(){if(Z){Z=!1;return}v.value=!v.value}const ve=g(!1),ye=g({x:0,y:0});function be(z){v.value=!1,ye.value={x:z.clientX,y:z.clientY},ve.value=!0}const le=B(()=>{const z=r.value.map(ee=>({label:re(ee),icon:"terminal",onClick:()=>{Xs.value=ee.id,tr(ee.id)},trailing:{icon:"close",title:h("terminalCloseTitle"),onClick:()=>void Ee(ee.id)}}));return z.length&&z.push({separator:!0}),z.push({label:h("terminalDockCloseAll"),icon:"close",onClick:()=>void Ve()}),z});function re(z){if(z.ssh)return z.ssh.label;const ee=z.cwd?.trim();if(ee){const me=ee.replace(/[\\/]$/,"").split(/[\\/]/).pop();if(me)return me}return h("terminal")}async function Ee(z){sc(z),Et.value.length||(Fe.termOpen=!1)}async function Ve(){v.value=!1,await Ev(),Fe.termOpen=!1}function we(z){if(!f.value)return;const ee=u.value,me=z.target;ee&&me&&ee.contains(me)||(v.value=!1)}function Ne(){const z=_n.value;z&&(_n.value=V(z.x,z.y)),Dt(A)}function W(z=!1){if(Et.value.length>=AD)return;const ee=Fe.termRequestSsh,me=ee?"":Fe.termRequestCwd||Fe.root||Fe.explorerPath||"",je=Fe.termRequestCmd;Fe.termRequestCwd="",Fe.termRequestCmd="",Fe.termRequestSsh=null,Av(Fe.key,{cwd:me,initCmd:ee?void 0:je||void 0,fallbackCmd:ee&&je||void 0,shell:Ue.termShell,ssh:ee??void 0,focus:z})}function J(z){sc(z),Et.value.length===0&&(Fe.termOpen=!1)}return Je(f,z=>{z&&Dt(A)}),Je(()=>r.value.length,z=>{z||(v.value=!1)}),Je(cr,()=>{Fe.termOpen||(Fe.termOpen=!0),W(!0)}),Je(()=>Fe.termOpen,z=>{z&&Et.value.length===0&&W(!0)}),rn(()=>{hu(),window.addEventListener("resize",Ne),document.addEventListener("pointerdown",we,!0),Dt(A),Fe.termOpen&&Et.value.length===0&&W(!1)}),Rt(()=>{window.removeEventListener("resize",Ne),document.removeEventListener("pointerdown",we,!0)}),(z,ee)=>(l(),c(oe,null,[(l(!0),c(oe,null,Ae(s(Et),me=>kt((l(),Xe(yD,{key:me.id,tab:me,onClose:je=>J(me.id)},null,8,["tab","onClose"])),[[go,s(Fe).termOpen&&!s(dl)(me.id)]])),128)),s(Fe).termOpen&&r.value.length?(l(),c("div",{key:0,ref_key:"dockRef",ref:u,class:te(["dsh-term-dock",{"is-floating":!!s(_n),"is-dragging":d.value,"is-flip":w.value,"is-bottom":b.value}]),style:_t(k.value)},[o("div",{class:"dsh-term-dock-btn",title:s(h)("terminalDockDragTitle"),onClick:I,onContextmenu:xe(be,["prevent"]),onPointerdown:G,onPointermove:F,onPointerup:de,onPointercancel:de},[m(ne,{name:"terminal",size:15}),r.value.length>1?(l(),c("span",FD,i(r.value.length),1)):N("",!0),s(cs)?(l(),c("span",{key:1,class:"dsh-term-dock-dot",title:s(h)("terminalAdminOn")},null,8,PD)):N("",!0)],40,DD),f.value&&!d.value?(l(),c("div",{key:0,ref_key:"listRef",ref:O,class:"dsh-term-dock-list",style:_t({maxHeight:`${M.value}px`})},[o("div",ND,i(s(h)("terminalDockSessions")),1),(l(!0),c(oe,null,Ae(r.value,me=>(l(),Xe(TD,{key:me.id,tab:me},null,8,["tab"]))),128)),o("button",{class:"dsh-term-dock-new",title:s(h)("terminalNew"),onClick:ee[0]||(ee[0]=xe(me=>W(!0),["stop"]))},"＋ "+i(s(h)("terminalNew")),9,RD)],4)):N("",!0)],6)):N("",!0),ve.value?(l(),Xe(Zt,{key:1,items:le.value,x:ye.value.x,y:ye.value.y,onClose:ee[1]||(ee[1]=me=>ve.value=!1)},null,8,["items","x","y"])):N("",!0)],64))}}),OD=xt(MD,[["__scopeId","data-v-6b6a1886"]]),LD=/[<>:"|?*\u0000-\u001f]/g,Hc=120;function BD(t){let e=(t??"").trim().replace(/\\/g,"/");return!e||e.includes("/")||(e=e.replace(LD,"_").replace(/[. ]+$/,""),!e||e==="."||e==="..")?null:(e.length>Hc&&(e=e.slice(0,Hc).replace(/[. ]+$/,"")),e||null)}function ol(t){let e=(t??"").trim().replace(/\\/g,"/");if(!e)return"";const n=/^[^/\s]+@[^/:\s]+:(.*)$/.exec(e);n?e=n[1]:e=e.replace(/^[a-zA-Z][a-zA-Z0-9+.-]*:\/\/[^/]*/,""),e=e.split("?")[0].split("#")[0],e=e.replace(/\/+$/,"");const r=(e.split("/").filter(Boolean).pop()??"").replace(/\.git$/i,"");return BD(r)??""}const Wc="__new__";function qd(t){const{t:e}=Mt(),n=g({url:"",dir:qt.dir,name:"",shallow:!1,revision:"",accountId:""}),a=g(!1),r=g(!1),u=g(""),v=g(0),d=g(!1);let f=0,w=0;function b(we,Ne){const W=(we??"").trim();if(!W)return"";const J=W.includes("\\")?"\\":"/";return`${W.replace(/[\\/]+$/,"")}${J}${Ne}`}const k=B(()=>{const we=n.value.name.trim()||ol(n.value.url);return we?b(n.value.dir,we):""}),O=B(()=>!!n.value.url.trim()&&!!n.value.dir.trim()&&!!k.value);Je(()=>n.value.url,we=>{a.value||(n.value.name=ol(we))}),Je(()=>n.value.name,(we,Ne)=>{we!==ol(n.value.url)&&Ne!==void 0&&(a.value=!0)});const M=B(()=>Rn.value.filter(we=>we.kind===t)),A=B(()=>M.value.find(we=>we.id===n.value.accountId)??null),V=g(null);let H=0;async function C(){const we=n.value.url.trim();if(!we||n.value.accountId){V.value=null;return}const Ne=await fu(t,we).catch(()=>null);V.value=Ne?.account??null}Je(()=>n.value.url,()=>{H&&window.clearTimeout(H),H=window.setTimeout(()=>void C(),400)});const Z=B(()=>n.value.accountId?A.value:V.value),G=B(()=>n.value.dir.trim().startsWith("ssh://"));let F=[];const de=g(!1);function I(){F=Rn.value.map(we=>we.id),de.value=!0,kr({kind:t,url:n.value.url.trim()})}function ve(we){const Ne=we.target,W=Ne.value;if(W===Wc){Ne.value=n.value.accountId,I();return}n.value.accountId=W}Je(()=>xn.open,async we=>{if(we||!de.value)return;de.value=!1,await po();const Ne=Rn.value.find(W=>W.kind===t&&!F.includes(W.id));Ne&&(n.value.accountId=Ne.id)}),Je(()=>qt.open,we=>{we&&(n.value={url:"",dir:qt.dir,name:"",shallow:!1,revision:"",accountId:""},a.value=!1,u.value="",v.value=0,r.value=!1,V.value=null,po())},{immediate:!0});function ye(we){n.value.dir=we}function be(we){we||r.value||yc()}function le(){v.value=Math.round((Date.now()-w)/1e3)}async function re(){if(r.value||!O.value)return;const{url:we,dir:Ne,shallow:W,revision:J}=n.value;u.value="",r.value=!0,w=Date.now(),v.value=0,f=window.setInterval(le,1e3);try{const z=await Yf(t,{url:we.trim(),dir:Ne.trim(),name:n.value.name.trim()||void 0,depth:t==="git"&&W?1:0,revision:t==="svn"&&J.trim()||void 0,accountId:n.value.accountId||void 0,key:qt.key||void 0}),ee=qt.onDone;yc(),Y("ok",e(t==="git"?"repoCloneDoneGit":"repoCloneDoneSvn",{name:z.name}));try{ee?.({path:z.path,name:z.name})}catch{}}catch(z){u.value=z?.message||String(z)}finally{r.value=!1,f&&(window.clearInterval(f),f=0)}}function Ee(){f&&window.clearInterval(f),H&&window.clearTimeout(H),f=0,H=0}function Ve(we){return`${we.name} · ${we.url||e("accAllRepos")}`}return{t:e,state:n,busy:r,error:u,elapsed:v,pickerOpen:d,targetPath:k,canSubmit:O,accountOptions:M,effectiveAccount:Z,isRemoteDir:G,newAccountValue:Wc,accountLabel:Ve,onAccountChange:ve,onDirPicked:ye,onModel:be,submit:re,dispose:Ee}}const ID={class:"fw-clone-head"},jD={class:"fw-clone-badge"},VD={class:"fw-clone-headtext"},zD={class:"fw-clone-headtitle"},UD={class:"fw-clone-headsub"},HD={class:"fw-clone"},WD={class:"fw-clone-field"},GD={class:"fw-clone-label"},qD=["placeholder","disabled"],KD={key:0,class:"fw-clone-field"},XD={class:"fw-clone-label"},YD=["value","disabled"],JD={value:""},QD=["value"],ZD=["value"],e5={key:0,class:"fw-clone-tip"},t5={class:"fw-clone-field"},n5={class:"fw-clone-label"},s5={class:"fw-clone-row"},o5=["placeholder","disabled"],i5=["disabled"],a5={class:"fw-clone-field"},l5={class:"fw-clone-label"},r5=["placeholder","disabled"],c5={class:"fw-clone-check fw-clone-slot"},u5=["disabled"],d5={class:"fw-clone-checkhint"},p5=["title"],f5={class:"fw-clone-targetlabel"},v5={class:"fw-clone-targetval"},h5={key:1,class:"fw-clone-busy"},m5={class:"fw-clone-elapsed"},g5={key:2,class:"fw-clone-tip"},y5={key:3,class:"fw-clone-error"},w5=["disabled"],b5=["disabled"],_5=ht({__name:"GitCloneDialog",setup(t){const{t:e,state:n,busy:a,error:r,elapsed:u,pickerOpen:v,targetPath:d,canSubmit:f,accountOptions:w,effectiveAccount:b,isRemoteDir:k,newAccountValue:O,accountLabel:M,onAccountChange:A,onDirPicked:V,onModel:H,submit:C,dispose:Z}=qd("git");return Rt(Z),(G,F)=>{const de=cn;return l(),c(oe,null,[m(de,{"model-value":s(qt).open,width:"560px","append-to-body":"",class:"fw-clone-dialog fw-clone-git","close-on-click-modal":!1,"close-on-press-escape":!s(a),"show-close":!s(a),"onUpdate:modelValue":s(H)},{header:se(()=>[o("div",ID,[o("span",jD,[m(ne,{name:"git",size:20})]),o("div",VD,[o("div",zD,i(s(e)("repoCloneTitleGit")),1),o("div",UD,i(s(e)("repoCloneCaptionGit")),1)])])]),footer:se(()=>[o("button",{class:"fw-clone-btn",disabled:s(a),onClick:F[7]||(F[7]=I=>s(H)(!1))},i(s(e)("cancel")),9,w5),o("button",{class:"fw-clone-btn primary",disabled:s(a)||!s(f),onClick:F[8]||(F[8]=(...I)=>s(C)&&s(C)(...I))},i(s(e)("repoCloneActionGit")),9,b5)]),default:se(()=>[o("div",HD,[o("label",WD,[o("span",GD,i(s(e)("repoCloneUrl")),1),kt(o("input",{"onUpdate:modelValue":F[0]||(F[0]=I=>s(n).url=I),class:"fw-clone-input",placeholder:s(e)("repoCloneUrlGitPlaceholder"),spellcheck:"false",disabled:s(a),onKeyup:F[1]||(F[1]=bt((...I)=>s(C)&&s(C)(...I),["enter"]))},null,40,qD),[[Lt,s(n).url]])]),s(k)?N("",!0):(l(),c("label",KD,[o("span",XD,i(s(e)("repoCloneAccount")),1),o("select",{class:"fw-clone-input fw-clone-select",value:s(n).accountId,disabled:s(a),onChange:F[2]||(F[2]=(...I)=>s(A)&&s(A)(...I))},[o("option",JD,i(s(e)("repoCloneAccountAuto")),1),(l(!0),c(oe,null,Ae(s(w),I=>(l(),c("option",{key:I.id,value:I.id},i(s(M)(I)),9,QD))),128)),o("option",{value:s(O)},i(s(e)("repoCloneAccountNew")),9,ZD)],40,YD),s(n).url.trim()||s(n).accountId?(l(),c("span",e5,[s(b)?(l(),c(oe,{key:0},[ue(i(s(e)("accEffective"))+" "+i(s(b).name)+"（"+i(s(b).username)+"@"+i(s(b).host)+"） ",1)],64)):(l(),c(oe,{key:1},[ue(i(s(e)("accEffectiveNone")),1)],64))])):N("",!0)])),o("label",t5,[o("span",n5,i(s(e)("repoCloneDir")),1),o("div",s5,[kt(o("input",{"onUpdate:modelValue":F[3]||(F[3]=I=>s(n).dir=I),class:"fw-clone-input",placeholder:s(e)("repoCloneDirPlaceholder"),spellcheck:"false",disabled:s(a)},null,8,o5),[[Lt,s(n).dir]]),o("button",{class:"fw-clone-btn",disabled:s(a),onClick:F[4]||(F[4]=I=>v.value=!0)},i(s(e)("repoCloneBrowse")),9,i5)])]),o("label",a5,[o("span",l5,i(s(e)("repoCloneName")),1),kt(o("input",{"onUpdate:modelValue":F[5]||(F[5]=I=>s(n).name=I),class:"fw-clone-input",placeholder:s(e)("repoCloneNamePlaceholder"),spellcheck:"false",disabled:s(a)},null,8,r5),[[Lt,s(n).name]])]),o("label",c5,[kt(o("input",{"onUpdate:modelValue":F[6]||(F[6]=I=>s(n).shallow=I),type:"checkbox",disabled:s(a)},null,8,u5),[[Fp,s(n).shallow]]),o("span",null,i(s(e)("repoCloneShallow")),1),o("span",d5,i(s(e)("repoCloneShallowHint")),1)]),o("div",{class:"fw-clone-target",title:s(d)||void 0},[m(ne,{name:"folderOpen",size:13}),o("span",f5,i(s(e)("repoCloneTargetGit")),1),o("span",v5,i(s(d)||s(e)("repoCloneTargetEmpty")),1)],8,p5),s(a)?(l(),c("div",h5,[F[10]||(F[10]=o("span",{class:"fw-clone-spin","aria-hidden":"true"},null,-1)),o("span",null,i(s(e)("repoCloneRunningGit")),1),o("span",m5,i(s(e)("repoCloneElapsed",{s:s(u)})),1)])):N("",!0),s(a)?(l(),c("div",g5,i(s(e)("repoCloneKeepOpen")),1)):N("",!0),s(r)?(l(),c("div",y5,i(s(r)),1)):N("",!0)])]),_:1},8,["model-value","close-on-press-escape","show-close","onUpdate:modelValue"]),m(ia,{modelValue:s(v),"onUpdate:modelValue":F[9]||(F[9]=I=>Kc(v)?v.value=I:null),mode:"folder","initial-dir":s(n).dir,onConfirm:s(V)},null,8,["modelValue","initial-dir","onConfirm"])],64)}}}),k5={class:"fw-clone-head"},x5={class:"fw-clone-badge"},C5={class:"fw-clone-headtext"},S5={class:"fw-clone-headtitle"},$5={class:"fw-clone-headsub"},E5={class:"fw-clone"},T5={class:"fw-clone-field"},D5={class:"fw-clone-label"},F5=["placeholder","disabled"],P5={key:0,class:"fw-clone-field"},N5={class:"fw-clone-label"},R5=["value","disabled"],A5={value:""},M5=["value"],O5=["value"],L5={key:0,class:"fw-clone-tip"},B5={class:"fw-clone-field"},I5={class:"fw-clone-label"},j5={class:"fw-clone-row"},V5=["placeholder","disabled"],z5=["disabled"],U5={class:"fw-clone-field"},H5={class:"fw-clone-label"},W5=["placeholder","disabled"],G5={class:"fw-clone-field"},q5={class:"fw-clone-label"},K5=["placeholder","disabled"],X5=["title"],Y5={class:"fw-clone-targetlabel"},J5={class:"fw-clone-targetval"},Q5={key:1,class:"fw-clone-busy"},Z5={class:"fw-clone-elapsed"},e4={key:2,class:"fw-clone-tip"},t4={key:3,class:"fw-clone-error"},n4=["disabled"],s4=["disabled"],o4=ht({__name:"SvnCheckoutDialog",setup(t){const{t:e,state:n,busy:a,error:r,elapsed:u,pickerOpen:v,targetPath:d,canSubmit:f,accountOptions:w,effectiveAccount:b,isRemoteDir:k,newAccountValue:O,accountLabel:M,onAccountChange:A,onDirPicked:V,onModel:H,submit:C,dispose:Z}=qd("svn");return Rt(Z),(G,F)=>{const de=cn;return l(),c(oe,null,[m(de,{"model-value":s(qt).open,width:"560px","append-to-body":"",class:"fw-clone-dialog fw-clone-svn","close-on-click-modal":!1,"close-on-press-escape":!s(a),"show-close":!s(a),"onUpdate:modelValue":s(H)},{header:se(()=>[o("div",k5,[o("span",x5,[m(ne,{name:"svn",size:20})]),o("div",C5,[o("div",S5,i(s(e)("repoCloneTitleSvn")),1),o("div",$5,i(s(e)("repoCloneCaptionSvn")),1)])])]),footer:se(()=>[o("button",{class:"fw-clone-btn",disabled:s(a),onClick:F[7]||(F[7]=I=>s(H)(!1))},i(s(e)("cancel")),9,n4),o("button",{class:"fw-clone-btn primary",disabled:s(a)||!s(f),onClick:F[8]||(F[8]=(...I)=>s(C)&&s(C)(...I))},i(s(e)("repoCloneActionSvn")),9,s4)]),default:se(()=>[o("div",E5,[o("label",T5,[o("span",D5,i(s(e)("repoCloneUrl")),1),kt(o("input",{"onUpdate:modelValue":F[0]||(F[0]=I=>s(n).url=I),class:"fw-clone-input",placeholder:s(e)("svnCheckoutUrlPlaceholder"),spellcheck:"false",disabled:s(a),onKeyup:F[1]||(F[1]=bt((...I)=>s(C)&&s(C)(...I),["enter"]))},null,40,F5),[[Lt,s(n).url]])]),s(k)?N("",!0):(l(),c("label",P5,[o("span",N5,i(s(e)("repoCloneAccount")),1),o("select",{class:"fw-clone-input fw-clone-select",value:s(n).accountId,disabled:s(a),onChange:F[2]||(F[2]=(...I)=>s(A)&&s(A)(...I))},[o("option",A5,i(s(e)("repoCloneAccountAuto")),1),(l(!0),c(oe,null,Ae(s(w),I=>(l(),c("option",{key:I.id,value:I.id},i(s(M)(I)),9,M5))),128)),o("option",{value:s(O)},i(s(e)("repoCloneAccountNew")),9,O5)],40,R5),s(n).url.trim()||s(n).accountId?(l(),c("span",L5,[s(b)?(l(),c(oe,{key:0},[ue(i(s(e)("accEffective"))+" "+i(s(b).name)+"（"+i(s(b).username)+"@"+i(s(b).host)+"） ",1)],64)):(l(),c(oe,{key:1},[ue(i(s(e)("accEffectiveNone")),1)],64))])):N("",!0)])),o("label",B5,[o("span",I5,i(s(e)("repoCloneDir")),1),o("div",j5,[kt(o("input",{"onUpdate:modelValue":F[3]||(F[3]=I=>s(n).dir=I),class:"fw-clone-input",placeholder:s(e)("repoCloneDirPlaceholder"),spellcheck:"false",disabled:s(a)},null,8,V5),[[Lt,s(n).dir]]),o("button",{class:"fw-clone-btn",disabled:s(a),onClick:F[4]||(F[4]=I=>v.value=!0)},i(s(e)("repoCloneBrowse")),9,z5)])]),o("label",U5,[o("span",H5,i(s(e)("repoCloneName")),1),kt(o("input",{"onUpdate:modelValue":F[5]||(F[5]=I=>s(n).name=I),class:"fw-clone-input",placeholder:s(e)("repoCloneNamePlaceholder"),spellcheck:"false",disabled:s(a)},null,8,W5),[[Lt,s(n).name]])]),o("label",G5,[o("span",q5,i(s(e)("repoCloneRevision")),1),kt(o("input",{"onUpdate:modelValue":F[6]||(F[6]=I=>s(n).revision=I),class:"fw-clone-input",placeholder:s(e)("repoCloneRevisionPlaceholder"),spellcheck:"false",disabled:s(a)},null,8,K5),[[Lt,s(n).revision]])]),o("div",{class:"fw-clone-target",title:s(d)||void 0},[m(ne,{name:"folderOpen",size:13}),o("span",Y5,i(s(e)("repoCloneTargetSvn")),1),o("span",J5,i(s(d)||s(e)("repoCloneTargetEmpty")),1)],8,X5),s(a)?(l(),c("div",Q5,[F[10]||(F[10]=o("span",{class:"fw-clone-spin","aria-hidden":"true"},null,-1)),o("span",null,i(s(e)("repoCloneRunningSvn")),1),o("span",Z5,i(s(e)("repoCloneElapsed",{s:s(u)})),1)])):N("",!0),s(a)?(l(),c("div",e4,i(s(e)("repoCloneKeepOpen")),1)):N("",!0),s(r)?(l(),c("div",t4,i(s(r)),1)):N("",!0)])]),_:1},8,["model-value","close-on-press-escape","show-close","onUpdate:modelValue"]),m(ia,{modelValue:s(v),"onUpdate:modelValue":F[9]||(F[9]=I=>Kc(v)?v.value=I:null),mode:"folder","initial-dir":s(n).dir,onConfirm:s(V)},null,8,["modelValue","initial-dir","onConfirm"])],64)}}}),i4=ht({__name:"RepoCloneDialog",setup(t){return(e,n)=>s(qt).open&&s(qt).kind==="git"?(l(),Xe(_5,{key:0})):s(qt).open?(l(),Xe(o4,{key:1})):N("",!0)}}),a4={class:"fw-clone-head"},l4={class:"fw-clone-badge"},r4={class:"fw-clone-headtext"},c4={class:"fw-clone-headtitle"},u4={class:"fw-clone-headsub"},d4={class:"fw-acc-split"},p4={class:"fw-acc-rail"},f4={class:"fw-acc-railhead"},v4={class:"fw-acc-count"},h4={key:0,class:"fw-acc-empty"},m4={key:1,class:"fw-acc-railist"},g4={key:0,class:"fw-acc-group"},y4=["onClick","onContextmenu"],w4=["data-kind"],b4={class:"fw-acc-itemtext"},_4=["title"],k4=["title"],x4=["title"],C4=["title"],S4={class:"fw-acc-efflabel"},$4={key:0,class:"fw-acc-effval"},E4={key:1,class:"fw-acc-effnone"},T4={class:"fw-acc-effhint"},D4={class:"fw-acc-detail"},F4={key:0,class:"fw-acc-blank"},P4={class:"fw-acc-detailhead"},N4={class:"fw-acc-detailtitle"},R4={key:0,class:"fw-acc-detailsub"},A4={class:"fw-acc-form"},M4={class:"fw-clone-field"},O4={class:"fw-clone-label"},L4={class:"fw-clone-field"},B4={class:"fw-clone-label"},I4={class:"fw-clone-field"},j4={class:"fw-clone-label"},V4={class:"fw-clone-field"},z4={class:"fw-clone-label"},U4={class:"fw-clone-tip"},H4={class:"fw-clone-field"},W4={class:"fw-clone-label"},G4={class:"fw-clone-field"},q4={class:"fw-clone-label"},K4={class:"fw-clone-row"},X4={class:"fw-clone-field"},Y4={class:"fw-clone-label"},J4={key:0,class:"fw-clone-error"},Q4={class:"fw-acc-actions"},Z4={class:"fw-clone-tip"},eF=ht({__name:"AccountDialog",setup(t){const{t:e}=Mt(),n=B({get:()=>xn.open,set:ge=>{ge||Wa()}}),a=g(null),r=g(!1),u=B(()=>!r.value&&a.value!==null),v=B(()=>r.value||a.value!==null),d=B(()=>Rn.value.find(ge=>ge.id===a.value)??null),f=gt({kind:"git",name:"",host:"",url:"",username:"",secretKind:"password",secret:"",note:""}),w=g(!1),b=g(!1),k=g(null),O=g(""),M=g(null);async function A(){const ge=xn.url?.trim()??"";if(!ge){M.value=null;return}const _e=await fu(xn.kind,ge).catch(()=>null);M.value=_e?.account??null}const V=B(()=>["git","svn"].map(_e=>({kind:_e,list:Rn.value.filter(Ye=>Ye.kind===_e)}))),H=g(null),{cmOpen:C,cmX:Z,cmY:G,cmItems:F,openMenu:de,closeMenu:I}=vn();function ve(ge,_e){const Ye=[{label:e("accTest"),icon:"refresh",onClick:()=>ye(_e)},{label:e("accApply"),icon:"check",onClick:()=>void be(_e)},{separator:!0},{label:e("accDelete"),icon:"trash",onClick:()=>void le(_e)},{separator:!0},{label:e("accCopyIdent"),icon:"copy",onClick:()=>void re(_e)}];de(ge,Ye)}async function ye(ge){Ne(ge),await Ke()}async function be(ge){Ne(ge),await me()}async function le(ge){Ne(ge),await je(),k.value=null}async function re(ge){try{await navigator.clipboard.writeText(`${ge.username}@${ge.host}`)}catch{}}const Ee=B(()=>(r.value?f.kind:d.value?.kind??f.kind)==="svn"?"fw-clone-svn":"fw-clone-git"),Ve=B(()=>{const ge=f.username.trim()||"user",_e=f.host.trim()||"host";return`${ge}@${_e}`});function we(ge){f.kind=ge.kind,f.name=ge.name,f.host=ge.host,f.url=ge.url,f.username=ge.username,f.secretKind=ge.secretKind,f.secret="",f.note=ge.note}function Ne(ge){r.value=!1,a.value=ge.id,k.value=null,O.value="",H.value=null,we(ge)}Je(()=>xn.open,ge=>{ge&&(r.value=!1,a.value=null,k.value=null,O.value="",w.value=!1,b.value=!1,M.value=null,(async()=>{await po(),await A();const _e=Rn.value[0];_e&&Ne(_e)})())},{immediate:!0});function W(){Wa()}function J(){Wa()}function z(){r.value=!0,a.value=null,k.value=null,O.value="",f.kind=xn.kind,f.name="",f.host="",f.url=xn.url,f.username="",f.secretKind="password",f.secret="",f.note=""}async function ee(ge){w.value=!0,O.value="";try{await ge()}catch(_e){O.value=_e instanceof Error?_e.message:String(_e)}finally{w.value=!1}}async function me(){const ge=d.value;if(ge){b.value=!0;try{const _e=await sv(ge.id);rs(`${e("accApplyOk")} · ${_e.detail}`)}catch(_e){ps(_e instanceof Error?_e.message:String(_e))}finally{b.value=!1}}}async function je(){const ge=d.value;if(ge){if(k.value!==ge.id){k.value=ge.id;return}k.value=null;try{await tv(ge.id),rs(e("accDeleted")),await po(),await A();const _e=Rn.value[0];_e?Ne(_e):(a.value=null,r.value=!1)}catch(_e){ps(_e instanceof Error?_e.message:String(_e))}}}async function Ke(){if(!f.host.trim()||!f.username.trim()){lo(e("accRequired"));return}const ge=u.value&&!f.secret.trim();if(!ge&&!f.secret.trim()){lo(e("accSecretRequired"));return}await ee(async()=>{const _e=await nv(ge?{id:a.value??void 0}:{kind:f.kind,host:f.host.trim(),url:f.url.trim(),username:f.username.trim(),secret:f.secret,secretKind:f.secretKind});H.value={ok:_e.ok,detail:_e.detail},_e.ok?rs(`${e("accTestOk")} · ${_e.detail}`):ps(`${e("accTestFail")} · ${_e.detail}`)})}async function Ze(){if(!f.host.trim()||!f.username.trim()){lo(e("accRequired"));return}if(r.value&&!f.secret){lo(e("accSecretRequired"));return}await ee(async()=>{const ge={kind:f.kind,host:f.host.trim(),url:f.url.trim(),name:f.name.trim(),username:f.username.trim(),secret:f.secret||void 0,secretKind:f.secretKind,note:f.note.trim()};if(u.value&&a.value){await ev({id:a.value,...ge}),rs(e("accSaved")),await po(),await A();const _e=Rn.value.find(Ye=>Ye.id===a.value);_e&&we(_e)}else{const _e=await Zf(ge);rs(e("accSaved")),await po(),await A();const Ye=Rn.value.find(st=>st.id===_e.account.id);Ye&&Ne(Ye)}})}return(ge,_e)=>{const Ye=Mn,st=fa,fe=pa,Ce=Ts,qe=cn;return l(),Xe(qe,{modelValue:n.value,"onUpdate:modelValue":_e[8]||(_e[8]=ce=>n.value=ce),class:te(["fw-clone-dialog fw-acc-dlg",Ee.value]),width:"800px","align-center":"","close-on-click-modal":!1,"append-to-body":"",onClosed:W},{header:se(()=>[o("div",a4,[o("span",l4,[m(ne,{name:"shield",size:20})]),o("div",r4,[o("div",c4,i(s(e)("accTitle")),1),o("div",u4,i(s(e)("accCaption")),1)])])]),footer:se(()=>[m(Ye,{size:"small",onClick:J},{default:se(()=>[ue(i(s(e)("accCancel")),1)]),_:1}),m(Ye,{size:"small",type:"primary",loading:w.value,disabled:!v.value,onClick:Ze},{default:se(()=>[ue(i(s(e)("accSave")),1)]),_:1},8,["loading","disabled"])]),default:se(()=>[o("div",d4,[o("div",p4,[o("div",f4,[o("span",v4,i(s(e)("accListTitle"))+" · "+i(s(Rn).length),1),m(Ye,{size:"small",class:"fw-acc-iconbtn",title:s(e)("accAdd"),onClick:z},{default:se(()=>[m(ne,{name:"plus",size:13})]),_:1},8,["title"])]),s(Rn).length?(l(),c("div",m4,[(l(!0),c(oe,null,Ae(V.value,ce=>(l(),c(oe,{key:ce.kind},[ce.list.length?(l(),c("div",g4,i(ce.kind==="svn"?"SVN":"Git"),1)):N("",!0),(l(!0),c(oe,null,Ae(ce.list,Ie=>(l(),c("button",{key:Ie.id,type:"button",class:te(["fw-acc-item",{on:!r.value&&Ie.id===a.value}]),onClick:rt=>Ne(Ie),onContextmenu:xe(rt=>ve(rt,Ie),["prevent","stop"])},[o("span",{class:"fw-acc-kind","data-kind":Ie.kind},i(Ie.kind==="svn"?"SVN":"Git"),9,w4),o("span",b4,[o("span",{class:"fw-acc-itemname",title:Ie.name},i(Ie.name),9,_4),o("span",{class:"fw-acc-itemsub",title:`${Ie.username}@${Ie.host}`},i(Ie.username)+"@"+i(Ie.host),9,k4)]),Ie.hasSecret?(l(),Xe(ne,{key:0,class:"fw-acc-lock",name:"shield",size:13,title:s(e)("accHasSecret")},null,8,["title"])):(l(),c("span",{key:1,class:"fw-acc-dot",title:s(e)("accNoSecret")},null,8,x4))],42,y4))),128))],64))),128))])):(l(),c("div",h4,i(s(e)("accEmpty")),1)),s(xn).url?(l(),c("div",{key:2,class:"fw-acc-effective",title:s(xn).url},[o("span",S4,i(s(e)("accEffective")),1),M.value?(l(),c("span",$4,i(M.value.name)+"（"+i(M.value.username)+"@"+i(M.value.host)+"）",1)):(l(),c("span",E4,i(s(e)("accEffectiveNone")),1)),o("span",T4,i(s(e)("accMatchHint")),1)],8,C4)):N("",!0)]),o("div",D4,[v.value?(l(),c(oe,{key:1},[o("div",P4,[o("span",N4,i(r.value?s(e)("accNewTitle"):s(e)("accEditTitle")),1),d.value?(l(),c("span",R4,i(d.value.username)+"@"+i(d.value.host),1)):N("",!0)]),o("div",A4,[o("div",M4,[o("span",O4,i(s(e)("accKind")),1),m(fe,{modelValue:f.kind,"onUpdate:modelValue":_e[0]||(_e[0]=ce=>f.kind=ce),size:"small",class:"fw-acc-kindsel","popper-class":"fw-acc-popper"},{default:se(()=>[m(st,{value:"git",label:s(e)("accKindGit")},null,8,["label"]),m(st,{value:"svn",label:s(e)("accKindSvn")},null,8,["label"])]),_:1},8,["modelValue"])]),o("div",L4,[o("span",B4,i(s(e)("accName")),1),m(Ce,{modelValue:f.name,"onUpdate:modelValue":_e[1]||(_e[1]=ce=>f.name=ce),size:"small",placeholder:Ve.value},null,8,["modelValue","placeholder"])]),o("div",I4,[o("span",j4,i(s(e)("accHost")),1),m(Ce,{modelValue:f.host,"onUpdate:modelValue":_e[2]||(_e[2]=ce=>f.host=ce),size:"small",placeholder:s(e)("accHostPlaceholder")},null,8,["modelValue","placeholder"])]),o("div",V4,[o("span",z4,i(s(e)("accUrl")),1),m(Ce,{modelValue:f.url,"onUpdate:modelValue":_e[3]||(_e[3]=ce=>f.url=ce),size:"small",placeholder:s(e)("accUrlPlaceholder")},null,8,["modelValue","placeholder"]),o("span",U4,i(s(e)("accUrlHint")),1)]),o("div",H4,[o("span",W4,i(s(e)("accUsername")),1),m(Ce,{modelValue:f.username,"onUpdate:modelValue":_e[4]||(_e[4]=ce=>f.username=ce),size:"small",placeholder:s(e)("accUsername")},null,8,["modelValue","placeholder"])]),o("div",G4,[o("span",q4,i(s(e)("accSecretKind")),1),o("div",K4,[m(fe,{modelValue:f.secretKind,"onUpdate:modelValue":_e[5]||(_e[5]=ce=>f.secretKind=ce),size:"small",class:"fw-acc-kindslim","popper-class":"fw-acc-popper"},{default:se(()=>[m(st,{value:"password",label:s(e)("accSecretPassword")},null,8,["label"]),m(st,{value:"token",label:s(e)("accSecretToken")},null,8,["label"])]),_:1},8,["modelValue"]),m(Ce,{modelValue:f.secret,"onUpdate:modelValue":_e[6]||(_e[6]=ce=>f.secret=ce),size:"small",type:"password","show-password":"",class:"fw-acc-secretinput",placeholder:u.value&&d.value?.hasSecret?s(e)("accKeepSecret"):s(e)("accSecret")},null,8,["modelValue","placeholder"])])]),o("div",X4,[o("span",Y4,i(s(e)("accNote")),1),m(Ce,{modelValue:f.note,"onUpdate:modelValue":_e[7]||(_e[7]=ce=>f.note=ce),size:"small"},null,8,["modelValue"])])]),O.value?(l(),c("div",J4,i(O.value),1)):N("",!0),H.value?(l(),c("div",{key:1,class:te(["fw-acc-testres",H.value.ok?"is-ok":"is-fail"])},[m(ne,{name:H.value.ok?"check":"warning",size:13},null,8,["name"]),o("span",null,i(H.value.ok?s(e)("accTestOk"):s(e)("accTestFail"))+" · "+i(H.value.detail),1)],2)):N("",!0),o("div",Q4,[m(Ye,{size:"small",loading:w.value,onClick:Ke},{default:se(()=>[ue(i(s(e)("accTest")),1)]),_:1},8,["loading"]),u.value?(l(),Xe(Ye,{key:0,size:"small",loading:b.value,onClick:me},{default:se(()=>[ue(i(s(e)("accApply")),1)]),_:1},8,["loading"])):N("",!0),u.value?(l(),Xe(Ye,{key:1,size:"small",class:te({"fw-acc-danger":k.value===d.value?.id}),onClick:je},{default:se(()=>[ue(i(k.value===d.value?.id?s(e)("accDeleteConfirm"):s(e)("accDelete")),1)]),_:1},8,["class"])):N("",!0)]),o("div",Z4,i(s(e)("accApplyHint")),1)],64)):(l(),c("div",F4,i(s(e)("accPick")),1))])]),s(C)?(l(),Xe(Zt,{key:0,items:s(F),x:s(Z),y:s(G),onClose:s(I)},null,8,["items","x","y","onClose"])):N("",!0)]),_:1},8,["modelValue","class"])}}}),tF=xt(eF,[["__scopeId","data-v-d434fcb2"]]),nF={class:"fw-toast-host","aria-live":"polite","aria-atomic":"false"},sF=["onMouseenter","onMouseleave"],oF={class:"fw-toast-ico","aria-hidden":"true"},iF=["title","onClick"],aF=["title"],lF=["title","aria-label","onClick"],Gc=100,rF=48,cF=ht({__name:"ToastHost",setup(t){let e=null;function n(){if(Ia.value.length!==0)for(const w of[...Ia.value])w.paused||w.duration<=0||(w.remain-=Gc,w.remain<=0&&Ur(w.id))}rn(()=>{e=window.setInterval(n,Gc)}),Rt(()=>{e!==null&&window.clearInterval(e),e=null});const a={ok:"check",error:"warning",warning:"warning",info:"info"},r=gt(new Set);function u(w){r.has(w)?r.delete(w):r.add(w)}function v(w){return w.message.length>rF?w.message:void 0}function d(w){return Math.max(0,Math.ceil(w.remain/1e3))}function f(w){if(w.duration<=0)return"100%";const b=w.remain/w.duration*100;return`${Math.max(0,Math.min(100,b))}%`}return(w,b)=>(l(),c("div",nF,[(l(!0),c(oe,null,Ae(s(Ia),k=>(l(),c("div",{key:k.id,class:te(["fw-toast",`k-${k.kind}`]),role:"status",onMouseenter:O=>k.paused=!0,onMouseleave:O=>k.paused=!1},[o("span",oF,[m(ne,{name:a[k.kind],size:15},null,8,["name"])]),o("span",{class:te(["fw-toast-msg",{"is-open":r.has(k.id)}]),title:v(k),onClick:O=>u(k.id)},i(k.message),11,iF),k.duration>0?(l(),c("span",{key:0,class:"fw-toast-count",title:`${d(k)}s`},i(d(k))+"s ",9,aF)):N("",!0),o("button",{class:"fw-toast-x",type:"button",title:s(h)("toastClose"),"aria-label":s(h)("toastClose"),onClick:O=>s(Ur)(k.id)},[m(ne,{name:"close",size:13})],8,lF),k.duration>0?(l(),c("span",{key:1,class:"fw-toast-bar",style:_t({width:f(k)})},null,4)):N("",!0)],42,sF))),128))]))}}),Vs=new Map;function uF(){const t=window.__DSH_FILE_WORKBENCH__;if(!t)return;t.openExternalFile=n=>{ri(n).catch(a=>Y("error",a.message)),Ft()},t.openExternalFolder=n=>{Vt(n)},t.syncSessionWorkspace=()=>{Vh()};const e=t.pendingOpens;if(e&&e.length>0){t.pendingOpens=[];for(const n of e)n.kind==="file"?t.openExternalFile(n.path):t.openExternalFolder?.(n.path)}}function Kd(t,e,n="workbench"){e?.apiBase&&(window.__DSH_FILE_WORKBENCH__=window.__DSH_FILE_WORKBENCH__??{},window.__DSH_FILE_WORKBENCH__.apiBase=e.apiBase);const a=Vs.get(t);if(a){try{a.unmount()}catch{}Vs.delete(t)}const r=ai(n==="vscode"?XT:I$);let u=null;n==="vscode"&&(u=xr(Pd(e?.instanceId)),e?.fresh&&u.markFresh(),u.bindTab(e?.instanceId??null,e?.panelId??null),r.provide(Ta,u)),r.mount(t),Vs.set(t,r),n==="workbench"&&uF(),Lv(),n==="workbench"&&p2();const v=r,d=u;return{unmount:()=>{try{v.unmount()}catch{}Vs.get(t)===v&&Vs.delete(t),Vs.size===0&&setTimeout(()=>{Vs.size===0&&mf()},3e3)},openProject:d?f=>d.requestOpenProject(f):void 0}}function Xd(t,e){return Kd(t,e,"workbench")}function dF(t,e){return Kd(t,e,"vscode")}window.__dshFileWorkbenchMountPane__=Xd;window.__dshVSCodeMountPane__=dF;function pF(){if(typeof document>"u"||!document.body)return;const t=va();if(t.app&&t.el?.isConnected)return;if(t.app){try{t.app.unmount()}catch{}t.app=null,t.el=null}document.getElementById("dsh-toast-root")?.remove();const e=document.createElement("div");e.id="dsh-toast-root",e.style.position="fixed",e.style.left="0",e.style.top="0",e.style.width="0",e.style.height="0",e.style.overflow="visible",e.style.zIndex="2147483000",e.style.pointerEvents="none",document.body.appendChild(e);try{const n=ai(cF);n.mount(e),t.app=n,t.el=e}catch(n){console.error("[dsh-file-workbench] 提示宿主挂载失败：",n),e.remove()}}function fF(){if(typeof document>"u"||!document.body||document.getElementById("dsh-term-root"))return;const t=document.createElement("div");t.id="dsh-term-root",t.style.position="fixed",t.style.left="0",t.style.top="0",t.style.width="0",t.style.height="0",t.style.overflow="visible",t.style.zIndex="10000",document.body.appendChild(t);try{ai(OD).mount(t)}catch(e){console.error("[dsh-file-workbench] 全局终端挂载失败：",e)}}pF();fF();vF();hF();function vF(){if(typeof document>"u"||!document.body||document.getElementById("dsh-clone-root"))return;const t=document.createElement("div");t.id="dsh-clone-root",t.style.position="fixed",t.style.left="0",t.style.top="0",t.style.width="0",t.style.height="0",t.style.overflow="visible",t.style.zIndex="10000",document.body.appendChild(t);try{ai(i4).mount(t)}catch(e){console.error("[dsh-file-workbench] 全局克隆弹窗挂载失败：",e)}}if(typeof document<"u"){const t=document.getElementById("app");t&&Xd(t,{apiBase:""})}window.__dshTestProbeUrl=`${(window.__DSH_FILE_WORKBENCH__?.apiBase||"/api/dsh-file-workbench").replace(/\/$/,"")}/assets/__dsh-test-probe.js`;function hF(){if(typeof document>"u"||!document.body||document.getElementById("dsh-acc-root"))return;const t=document.createElement("div");t.id="dsh-acc-root",t.style.position="fixed",t.style.left="0",t.style.top="0",t.style.width="0",t.style.height="0",t.style.overflow="visible",t.style.zIndex="10000",document.body.appendChild(t);try{ai(tF).mount(t)}catch(e){console.error("[dsh-file-workbench] 全局账号对话框挂载失败：",e)}}
