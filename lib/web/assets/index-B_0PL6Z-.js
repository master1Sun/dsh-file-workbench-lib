const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-C2cID70-.js","assets/vendor-vue-DSVMyY-k.js"])))=>i.map(i=>d[i]);
import{a1 as gt,r as g,a5 as jr,y as vt,G as c,S as M,d as I,E as l,H as Xe,P as oe,I as o,L as te,u as s,F as ie,W as m,V as i,ao as bt,a8 as xe,aa as Pe,U as de,e as Je,q as er,o as cn,l as Mt,T as ed,K as kt,J as Ff,n as Nt,Q as xt,ap as Ot,ag as Lf,k as Ts,Y as Of,X as bo,m as tr,s as If,ay as Vf,ak as zf,p as td,at as di}from"./vendor-vue-DSVMyY-k.js";import{E as Es,a as Fn,b as dn,c as jf,d as Bf,e as va,f as ma,g as Uf,h as Hf,i as Wf}from"./vendor-element-plus-CPaGIovE.js";import{aV as Lo,aW as Gf,aX as qf,aY as Kf,aZ as Xf,a_ as Br,a$ as nd,b0 as Yf,b1 as Jf,b2 as Qf,b3 as Zf,b4 as Ur,b5 as ep,b6 as tp,b7 as np,b8 as sp,b9 as Hr,ba as io,bb as ao,bc as op,bd as Ua,be as $i,bf as ip,bg as ap,bh as lp,bi as rp,bj as cp,bk as dp,bl as up}from"./vendor-C2cID70-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const d of r)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function n(r){const d={};return r.integrity&&(d.integrity=r.integrity),r.referrerPolicy&&(d.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?d.credentials="include":r.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function a(r){if(r.ep)return;r.ep=!0;const d=n(r);fetch(r.href,d)}})();const tt=gt({visible:!1,kind:"confirm",title:"",message:"",okText:"",cancelText:"",inputPlaceholder:"",inputValue:"",multiline:!1,choices:[],resolve:null});function Wr(t){return new Promise(e=>{tt.kind="confirm",tt.title=t.title??"",tt.message=t.message,tt.choices=t.choices,tt.visible=!0,tt.resolve=n=>e(typeof n=="string"?n:null)})}function Pt(t){return new Promise(e=>{tt.kind="confirm",tt.title=t.title??"",tt.message=t.message,tt.okText=t.okText??"",tt.cancelText=t.cancelText??"",tt.choices=[],tt.inputValue="",tt.visible=!0,tt.resolve=n=>e(n===!0)})}function us(t){return new Promise(e=>{tt.kind="prompt",tt.title=t.title??"",tt.message=t.message??"",tt.okText=t.okText??"",tt.cancelText=t.cancelText??"",tt.choices=[],tt.inputPlaceholder=t.placeholder??"",tt.inputValue=t.initial??"",tt.multiline=t.multiline===!0,tt.visible=!0,tt.resolve=n=>e(n===null?null:String(n))})}function Oo(t){tt.visible=!1,tt.resolve?.(t),tt.resolve=null}const fp={tabFileWorkbench:"文件工作台",tabFileWorkbenchDesc:"浏览、预览、搜索本地文件，并引用到当前会话",tabVSCode:"文件编辑器",tabVSCodeDesc:"浏览项目目录，多标签编辑代码并高亮语法",tabMenuOpenInEditor:"在文件编辑器中打开工作区",tabMenuNewEditor:"新建编辑器窗口",tabMenuAnotherEditor:"再开一个编辑器窗口",tabMenuFloat:"弹出为浮窗",tabMenuDefaultLabel:"默认打开",guideMenuAria:"更多打开方式",vsNoProject:"未选择项目目录",vsTreeLoading:"正在加载项目…",vsOpenFolder:"打开文件夹",vsFolderPath:"请输入项目目录绝对路径",vsSave:"保存",vsSaved:"已保存",vsUnsavedTitle:"未保存的更改",vsUnsavedMsg:"当前文件有未保存的更改，确定关闭吗？",vsCloseManyMsg:"有 {n} 个标签未保存，全部保存并关闭？",vsTooLarge:"文件过大：超过 8MB 编辑上限，请用系统程序打开",vsScrollLeft:"向左滚动标签",vsScrollRight:"向右滚动标签",vsReadonly:"只读",vsEmptyHint:"选择项目目录后，从左侧树打开文件开始编辑",vsLoading:"正在加载…",vsBrand:"文件编辑器",vsQuickAccess:"快捷方式",vsFormat:"格式化内容",vsFormatOk:"已格式化",vsFormatFail:"格式化失败：{msg}",vsMenuFile:"文件",vsSaveAs:"另存为…",vsSaveAsTitle:"另存为",vsFileName:"文件名",vsFileNamePlaceholder:"输入文件名，或粘贴绝对路径",vsFileType:"文件类型",vsFilterAll:"所有文件",vsFilterExt:"仅 {ext} 文件",vsSaveAsHint:"浏览到目标文件夹并填写文件名；双击列表中的文件可直接覆盖保存",vsSaveAsExists:"同名文件已存在，保存将覆盖它",vsSaveAsBlockedDirty:"{name} 已在编辑器中打开且有未保存改动，请先保存或关闭它",vsRecentProjects:"最近项目",vsRecentClearAll:"清空全部",vsRecentClearAllTitle:"清空全部最近项目",vsRecentClearAllConfirm:"确定要清空全部最近项目记录吗？此操作不可撤销。",vsRecentCleared:"已清空最近项目",vsRecentForgetTitle:"移除最近项目",vsRecentForgetConfirm:"确定要从最近项目中移除「{name}」吗？此操作不可撤销。",vsRecentForgot:"已移除 {name}",vsRemoveProject:"移出项目",vsRemoveProjectTitle:"移出项目",vsRemoveProjectConfirm:"确定将「{name}」移出项目吗？此操作会从最近项目中移除该目录，并关闭它的文件树（未保存的改动将丢失）。",vsProjectRemoved:"已移出项目",vsProjectGone:"项目目录已不存在，已从最近项目中移除",vsGitHistory:"提交记录",vsGitExpand:"展开提交记录",vsGitCollapse:"收起提交记录",vsGitRefresh:"刷新提交记录",vsGitFiles:"变更文件",vsGitFileDiff:"在新标签页打开此文件变更",vsQuickOpenPlaceholder:"搜索项目内文件（Ctrl+P）",vsLeftTabFiles:"文件",vsLeftTabSearch:"搜索",vsLeftTabGit:"版本控制",vsGitNoRepo:"当前目录不是 Git / SVN 仓库",vsUnfoldEditor:"展开编辑器",vsFoldEditor:"折叠编辑器",vsSearchNeedsProject:"请先打开项目文件夹再使用搜索",vsMenuRecent:"打开最近项目",vsMenuExtensions:"扩展",vsEmptyTitle:"打开一个文件夹开始编辑",vsGrepPlaceholder:"搜索内容（Enter 立即搜）",vsGrepScopePlaceholder:"仅在此文件夹下搜索，如 src/components",vsGrepScopeTitle:"搜索范围：留空 = 整个项目；填写项目内子目录路径可限定搜索范围",vsGrepCase:"区分大小写",vsGrepRegex:"使用正则",vsGrepSummary:"{files} 个文件中 {n} 条结果",vsGrepTruncated:"结果过多，已截断",vsGrepNoResult:"未找到结果",vsGrepOpenAt:"打开并跳到第 {ln} 行",vsSearchTitle:"搜索",vsGrepWholeWord:"全字匹配",vsGrepReplacePlaceholder:"替换",vsReplaceAll:"全部替换",vsReplacePreserveCase:"保留大小写",vsReplaceConfirm:"将把 {files} 个文件中的 {n} 处 “{q}” 替换为 “{r}”，此操作会直接改写磁盘文件且不可撤销。确定继续？",vsReplaceDone:"已在 {files} 个文件中替换 {n} 处",vsReplaceNone:"没有可替换的匹配项",vsReplaceRemoteUnsupported:"远端（ssh）根不支持跨文件批量替换",vsFilesToInclude:"包含的文件",vsFilesToIncludePlaceholder:"要搜索的文件，如 *.ts, src/**/README.md",vsFilesToIncludeTitle:"仅在这些 glob 命中的文件中搜索/替换（逗号分隔，相对项目根）。留空 = 不限。",vsFilesToExclude:"排除的文件",vsFilesToExcludePlaceholder:"要排除的文件或文件夹，如 **/node_modules, !*.min.js",vsFilesToExcludeTitle:"跳过这些 glob 命中的文件/文件夹（逗号分隔，相对项目根）。",vsClearAllResults:"清除所有结果",vsRefreshResults:"重新搜索",vsToggleReplace:"显示/隐藏替换",vsViewModeList:"列表",vsViewModeTree:"树",vsViewModeSwitchTitle:"在列表视图与树视图之间切换",vsSearchIndexing:"正在建立索引…",vsSearchNoResult:"没有匹配的文件",vsSearchTruncated:"结果较多，仅显示前若干条，请补充关键词",vsSaveAll:"全部保存",vsSavedAs:"已另存为 {path}",vsOverwriteMsg:"{path} 已存在，确定覆盖吗？",vsNoDirty:"没有需要保存的修改",vsAllSaved:"已保存 {n} 个文件",vsConflictTitle:"文件已被外部修改",vsConflictMsg:"{name} 在磁盘上已被修改。仍要用当前内容覆盖吗？",vsConflictMsgReload:"放弃对 {name} 的本地修改，改用磁盘上的版本？",vsConflictBadge:"外部已修改",vsReloadedExternal:"{name} 已被外部修改，已重新加载",vsSwitchLoseMsg:"有 {n} 个文件尚未保存，切换项目会丢失这些修改。确定继续吗？",vsReopenLoseMsg:"以其它编码重读会丢失当前未保存的修改，确定继续吗？",vsEncodingSwitched:"已按 {enc} 重新读取",vsBinaryHint:"这是二进制文件，无法以文本方式编辑",vsNewWindow:"新建编辑器窗口",vsFloatWindow:"浮动为独立窗口",vsNewTerminal:"新建终端",vsReplacedOldest:"编辑器窗口已满 8 个：已替换最早的窗口",vsNewWindowLimit:"无法新建编辑器窗口：请稍后重试",vsOpenExternal:"用系统程序打开",vsNoOpenFile:"没有打开的文件",vsTabClose:"关闭",vsTabCloseSave:"保存并关闭",vsTabCloseOthers:"关闭其他",vsTabCloseRight:"关闭右侧标签页",vsTabCloseAll:"关闭全部",terminalRestore:"还原终端",vsNewFile:"新建文件",vsNewFolder:"新建文件夹",vsNewFileName:"文件名",vsNewFolderName:"文件夹名",vsRename:"重命名",vsRenameName:"新名称",vsDelete:"删除",vsDeleteConfirm:"确定删除",vsRefresh:"刷新",vsCollapseAll:"折叠全部",vsExpandAll:"展开全部",vsExpandAllLimited:"目录较多，已展开前 {n} 个文件夹（继续展开会产生大量请求）",vsPickFolderTitle:"选择项目文件夹",vsComputer:"我的电脑",vsUp:"上级",vsEmptyDir:"此文件夹为空",vsPickInput:"选择此路径",vsCancel:"取消",vsPickConfirm:"选择此文件夹",vsNewFolderBtn:"新建文件夹",vsPickEnterHint:"双击文件夹进入；单击选中；“选择此文件夹”取高亮项，无高亮则取当前目录",menuCopyRelPath:"复制相对路径",menuCopyAbsPath:"复制绝对路径",vsAddToSession:"添加到会话",vsAddToSessionOk:"已添加到会话输入框",vsAddToSessionFail:"请先打开对话输入框",goUp:"返回上级",goBack:"后退",goForward:"前进",refreshList:"刷新资源列表",noFolder:"未打开文件夹",goSessionDir:"回到当前会话目录",closeTab:"关闭",clearSearch:"清除搜索",cancel:"取消",confirmOk:"确定",deleteTitle:"确认删除",searchScopeIn:"范围：",myComputer:"我的电脑",navHome:"主文件夹",navGallery:"图库",navThisPc:"此电脑",navQuickAccess:"快速访问",externalInjection:"外部注入",driveLabel:"本地磁盘 ({drive}:)",toastClose:"关闭提示",thisPcDevices:"设备和驱动器",driveCapacity:"{free} 可用，共 {total}",driveTotal:"总大小",driveFree:"可用空间",driveFs:"文件系统",driveTypeFixed:"本地磁盘",driveTypeRemovable:"可移动磁盘",emptyDrives:"（未检测到驱动器）",navExpand:"展开",navCollapse:"折叠",favoritePin:"已固定到快速访问",desktopEntry:"桌面",downloadEntry:"下载",documentEntry:"文档",pictureEntry:"图片",musicEntry:"音乐",videoEntry:"视频",workspaceEntry:"工作区",emptyDir:"（空）",colName:"名称",colSize:"大小",colType:"类型",colModified:"修改日期",typeFolder:"文件夹",typeFile:"文件",renameEntry:"重命名：",confirmDelete:'确认删除 "{name}" ？',brokenLink:"失效软链接",save:"保存",menuEdit:"编辑",txtEditorTitle:"编辑文本 · {name}",txtLoading:"加载中…",txtEditorSub:"文本编辑器",txtUnsaved:"未保存的更改",txtReadError:"读取失败：{msg}",txtDirty:"未保存",txtReadonly:"只读（工作区外）",txtPlaceholder:"在此输入文本…",txtChars:"字符",txtUnsavedTitle:"未保存的改动",txtUnsavedMsg:"该文件有未保存的改动，确定关闭？",txtSaved:"已保存",download:"下载",statusItemsCount:"{count} 个项目",searchTitle:"搜索文件名/内容",searchPlaceholder:"输入关键字…",search:"搜索",searching:"搜索中…",searchCase:"区分大小写",searchRegex:"正则表达式匹配",searchIdle:"在顶部搜索框输入关键字，实时匹配文件名与文件内容。",resultsCount:"{count} 个结果",resultsSuffixTruncated:"（已截断）",hitTitle:"右键在资源管理器中定位\\左键打开",matchContent:"内容匹配",searchReplaceAll:"批量替换",searchReplaceTitle:"确认批量替换",searchReplaceConfirm:"将在 {files} 个文件中替换 {count} 处匹配，此操作不可撤销，确定继续？",searchReplaceBusy:"正在替换…",searchReplaceDone:"已替换 {files} 个文件（{count} 处）",openFolderFirst:"请先打开文件夹",dirCreated:"目录已创建",fileCreated:"文件已创建",renamed:"已重命名",deleted:"已删除",workspaceOutside:"操作被拒绝：该操作仅限工作区内的文件/文件夹",errForbidden:"无权限或操作被拒绝（403）",errNotFound:"文件或目录不存在（404）",errNoRoot:"未打开文件夹：请先选择工作区目录（409）",errTooLarge:"数据过大，超出允许范围（413）",errServer:"服务端处理失败，请稍后重试（500）",errNetwork:"网络请求失败，请检查 host 连接",menuOpen:"打开",menuOpenExternal:"使用系统默认程序打开",menuOpenInEditor:"在文件编辑器中打开",menuCut:"剪切",menuCopy:"复制",menuRename:"重命名",menuDelete:"删除",menuCopyPath:"复制完整路径",menuProperties:"属性",menuCutDone:"已剪切到剪贴板",menuCopyDone:"已复制到剪贴板",menuOpened:"已调用系统程序打开",menuPathCopied:"路径已复制",menuPathCopyFail:"路径复制失败",menuRefresh:"刷新",menuView:"查看",menuSort:"排序方式",expShowNav:"显示导航栏",menuPaste:"粘贴",menuUpload:"上传文件",uploaded:"已上传 {count} 个文件",uploadFailed:"有 {count} 个文件上传失败",menuNew:"新建",menuNewFolder:"文件夹",menuNewFile:"文本文件",viewHuge:"超大图标",sshHosts:"SSH 主机",sshAddHost:"添加主机",sshCancel:"取消",sshName:"显示名",sshAddr:"地址（用户 @ 主机 : 端口）",sshUser:"用户名",sshHostAddr:"主机地址",sshAuth:"认证方式",sshAuthPassword:"口令认证",sshAuthKey:"私钥认证",sshPassword:"SSH 口令",sshKeyPath:"私钥文件路径（支持 ~）",sshSaveAdd:"添加",sshTest:"测试",sshTestConn:"测试",sshDelete:"删除",sshDeleteConfirm:"再点一次确认删除",sshTestOk:"SSH 连接成功",sshTestFail:"SSH 连接失败",sshRequired:"主机地址与用户名为必填项",sshAddSuccess:"主机已添加",sshNewHost:"添加 SSH 主机",sshEdit:"编辑",sshEditTitle:"编辑 SSH 主机",sshHostCaption:"连接远程服务器，浏览文件与登录终端",sshUpdateSuccess:"主机已更新",sshSaveEdit:"保存修改",sshKeepSecret:"（留空则沿用原口令）",sshNoHosts:"还没有主机，点「添加主机」开始",accTitle:"账号管理",accCaption:"管理 Git / SVN 登录凭据，执行命令时自动注入",accListTitle:"已保存账号",accAdd:"添加账号",accNewTitle:"添加账号",accEditTitle:"编辑账号",accEdit:"编辑",accKind:"类型",accKindGit:"Git",accKindSvn:"SVN",accName:"显示名",accHost:"主机",accHostPlaceholder:"例如 github.com 或 113.57.110.41:804",accUrl:"仓库地址（选填）",accUrlPlaceholder:"https://github.com/owner/repo.git",accUrlHint:"留空 = 对该主机的全部仓库生效；填写后按地址前缀匹配，用于同主机多账号。「测试连通」与「写入系统」都需要它。",accUsername:"用户名",accSecret:"口令 / 访问令牌",accSecretKind:"凭据类型",accSecretPassword:"口令",accSecretToken:"访问令牌",accKeepSecret:"（留空则沿用已存口令）",accNote:"备注",accSave:"保存",accCancel:"取消",accDelete:"删除",accDeleteConfirm:"再点一次确认删除",accTest:"测试连通",accTestOk:"连通正常",accTestFail:"连接失败",accApply:"写入系统",accApplyOk:"已写入系统",accApplyHint:"写入系统凭据存储后，命令行与其它 GUI 工具也免密。",accSaved:"账号已保存",accDeleted:"账号已删除",accRequired:"主机与用户名为必填",accSecretRequired:"请填写口令或访问令牌",accEmpty:"还没有账号，点「添加账号」开始",accHasSecret:"已保存凭据",accNoSecret:"未保存凭据",accAllRepos:"该主机全部仓库",accEffective:"当前仓库将使用",accEffectiveNone:"当前仓库无匹配账号（将走系统凭据 / svn 自身缓存）",accCopyIdent:"复制账号标识",accMatchHint:"按主机或仓库地址前缀匹配，未命中时使用系统凭据",accUseCurrent:"用当前仓库填充",accBack:"返回列表",accPick:"从左侧选择一个账号，或点「添加账号」新建",accTip:"凭据仅存于本机插件配置，不会外发；口令不回显，留空即沿用原值。",sshStatusOnline:"已连接",sshStatusOffline:"未连接",sshStatusChecking:"检测中…",sshStatusUnknown:"尚未检测",remoteNoExternal:"远端文件无法用本机程序打开",remoteNoArchive:"远端目录暂不支持压缩 / 解压",remoteNoTerminal:"找不到该远端主机的配置，已在本机目录启动终端（可先在设置里添加该 SSH 主机）",remoteCachedHint:"远端文件已下载到本机临时文件后打开（改动不会回传远端）",sshNavGroup:"SSH 远程",sshEmpty:"尚未添加主机（在此右键添加，或用「新建 ▾」）",viewLarge:"大图标",viewMedium:"中等图标",viewSmall:"小图标",viewList:"列表",viewDetails:"详细信息",viewContent:"内容",viewTiles:"平铺",showExtensions:"显示文件扩展名",cmdPreview:"预览",sortName:"名称",sortModified:"修改日期",sortType:"类型",sortSize:"大小",moved:"已移动",copied:"已复制",createdFolder:"已新建文件夹",createdFile:"已新建文件",newFolderName:"新建文件夹",newFileName:"新建文本文件",propName:"名称",propPath:"路径",propKind:"类型",propSize:"大小",propModified:"修改日期",settings:"设置",settingsSubtitle:"个性化工作台的外观与行为",retry:"重试",taskSrcMissing:"源文件不存在（可能已被移动或删除），已刷新列表：{name}",menuMore:"更多",settingsGroupFiles:"文件",settingsGroupAppearance:"外观",autoSave:"自动保存（编辑停顿 1 秒后写入）",vsFindPlaceholder:"查找",vsReplacePlaceholder:"替换为",vsFindNext:"下一个（Enter）",vsFindPrev:"上一个（Shift+Enter）",vsFindReplace:"替换（Enter）",vsFindReplaceAll:"全部替换",vsFindToggleReplace:"展开 / 收起替换",vsFindClose:"关闭（Esc）",vsFindNoMatch:"无结果",vsFindWord:"全字匹配",vsMenuLocalDiff:"查看本地改动",vsLocalDiffTitle:"未保存改动",vsLocalDiffTooBig:"改动过大，无法生成对比",vsMultiCursorHint:"提示：Alt + 点击 可添加多光标",vsActHide:"隐藏「{name}」",vsActBarBottom:"活动栏移到底部",vsActBarTop:"活动栏移到顶部",vsSideRight:"侧栏移到右侧",vsSideLeft:"侧栏移到左侧",vsMinimap:"编辑器缩略图",vsCloseSave:"保存并关闭",vsCloseDiscard:"不保存关闭",vsCloseSaveAll:"全部保存并关闭",vsCloseDiscardAll:"全部不保存关闭",showHidden:"显示隐藏文件",allowOutsideRoot:"允许操作工作区外的文件 (root 开关)",defaultView:"默认视图",themeMode:"主题",themeAuto:"跟随系统",themeDark:"深色",themeLight:"浅色",accentColor:"强调色",accentReset:"恢复默认",fontFamily:"字体",fontDefault:"默认",fontOptionYahei:"微软雅黑",fontOptionConsolas:"Consolas（等宽）",fontOptionCourier:"Courier New（等宽）",fontOptionGeorgia:"Georgia（衬线）",fontSize:"字号",fontSizeSm:"小",fontSizeMd:"标准",fontSizeLg:"大",fontSizeXl:"特大",shortcutHelp:"快捷键",shortcutHint:"按 ? 随时唤起，按 Esc 关闭",shortcutGlobal:"全局",shortcutFileList:"文件列表",shGlobalHelp:"打开快捷键帮助",shListSelectAll:"全选",shListCopy:"复制",shListCut:"剪切",shListPaste:"粘贴",shListFilter:"聚焦筛选框",shListNewFolder:"新建文件夹",shListDelete:"删除（含确认）",shListRename:"重命名",shListRefresh:"刷新",shListOpen:"打开文件 / 进入目录",shListMove:"移动选中",shListUp:"返回上级目录",shListBack:"浏览后退",shListForward:"浏览前进",undo:"撤销",findReplacePlaceholder:"替换为…",favorites:"收藏",favoriteAdd:"收藏",favoriteRemove:"取消收藏",favoriteAdded:"已收藏",favoriteRemoved:"已取消收藏",emptyFavorites:"（暂无收藏）",menuCompress:"压缩为 .zip",compressed:"已压缩",menuExtract:"解压到当前目录",extracted:"已解压 {count} 个文件",extractFailed:"解压失败",selectedCount:"{count} 项已选",menuMultiDelete:"删除所选 ({count})",menuMultiCut:"剪切所选",menuMultiCopy:"复制所选",menuMultiCompress:"压缩所选",filterPlaceholder:"筛选当前目录…",filterEmpty:"（无匹配）",taskFabTitle:"后台任务",taskPanelTitle:"后台任务",taskRunning:"运行中",taskHistory:"历史",taskClearFinished:"清除已完成",taskClearAll:"清空",taskEmpty:"暂无任务",taskViewLog:"查看日志",taskLogTitle:"任务日志",taskClose:"关闭",taskFieldTarget:"目标",taskStatusRunning:"进行中",taskStatusDone:"完成",taskStatusError:"失败",taskFieldFile:"文件",taskStartTime:"开始",taskEndTime:"结束",taskTotalSpent:"总耗时",taskStepSpent:"耗时",taskRunningLive:"运行中",taskFieldType:"类型",taskMetaFiles:"{count} 项 · {size}",taskArchive:"归档",taskArchiveOpen:"查看归档",taskArchiveTitle:"任务归档",taskArchiveNone:"暂无归档",taskArchiveRecords:"{count} 条记录",taskUploading:"上传文件",taskCompressing:"压缩",taskExtracting:"解压",taskCopying:"复制",taskMoving:"移动",taskDeleting:"删除",taskRenaming:"重命名",gitMenu:"Git",gitAdd:"暂存 (git add)",gitCommit:"提交 (git commit)",gitCommitTitle:"Git 提交",gitCommitPlaceholder:"输入提交信息…",gitCommitted:"已提交",gitAdded:"已暂存",gitDiscard:"还原改动",gitDiscardTitle:"确认还原",gitDiscardMsg:'丢弃 "{name}" 的工作区改动（git checkout --）？',gitDiscarded:"已还原",gitDiff:"查看改动",gitDiffTitle:"Git 改动",gitDiffEmpty:"（无可用改动）",gitDiffClose:"关闭",gitBadgeUntracked:"未跟踪的新文件",gitBadgeAdded:"新添加到暂存区",gitBadgeModified:"已修改",gitBadgeDeleted:"已删除",gitNotRepo:"不在 git 仓库",gitNoChanges:"没有已暂存的改动，无法提交",gitLoading:"加载中…",gitCommitFiles:"将提交 {n} 个文件：",gitCommitConfirm:"确认提交",gitConfig:"配置身份",gitConfigTitle:"Git 身份配置",gitConfigName:"用户名（user.name）",gitConfigNamePlaceholder:"例如：yourname",gitConfigEmail:"邮箱（user.email）",gitConfigEmailPlaceholder:"例如：you@example.com",gitConfigSave:"保存",gitConfigSaved:"已保存 git 全局身份配置",gitPanel:"打开 Git 面板",gitIgnore:"忽略（加入 .gitignore）",gitIgnored:"已忽略",gitPanelTitle:"Git 管理",gitFetch:"获取",gitPull:"拉取",gitPush:"推送",gitLoadMore:"加载更多",gitDiffTruncated:"差异过大，仅显示前 5000 行（完整内容可在编辑器查看）",gitCopyName:"复制名称",gitCopyUrl:"复制 URL",gitCopyMsg:"复制说明",gitCloneHere:"克隆仓库…",gitStatusColon:"当前分支：{branch}",gitLocalRepo:"本地仓库：",gitTabStatus:"更改",gitTabLog:"提交记录",gitTabBranch:"分支",gitTabStash:"暂存区",gitTabCli:"命令",gitClean:"工作区干净，没有待提交的改动",gitAddShort:"暂存",gitUnstage:"取消暂存",gitUnstaged:"已取消暂存",gitStageAll:"全部暂存",gitGroupStaged:"已暂存的更改",gitGroupUnstaged:"更改",gitGroupUntracked:"未跟踪",gitLogEmpty:"（暂无提交记录）",gitBranchNew:"新分支名称",gitCheckout:"切换",gitDelete:"删除",gitBranchCreated:"已创建并切换到分支 {name}",gitBranchDeleteMsg:"确定删除分支 {name}？",gitStashPlaceholder:"暂存说明（可选）",gitStashCreate:"创建暂存",gitStashEmpty:"（暂无暂存记录）",gitStashApply:"应用",gitStashPop:"弹出",gitStashDrop:"删除",gitStashClear:"清空暂存区",gitStashCreated:"已创建暂存",gitStashApplied:"已应用暂存",gitStashPopped:"已弹出暂存",gitStashDropped:"已删除该条暂存",gitStashCleared:"已清空暂存区",gitStashDropMsg:"确定删除暂存 {ref}？",gitStashClearMsg:"确定清空全部暂存记录？此操作不可恢复。",gitCliPlaceholder:"输入 git 子命令，例如 status / log --oneline -5",gitRailChanges:"更改",gitRailHistory:"提交历史",gitRailBranches:"分支",gitRailTags:"标签",gitRailRemotes:"远程",gitRailStash:"储藏",gitRailCli:"命令台",gitHeadDetached:"分离头指针",gitNoUpstream:"无上游分支",gitAheadBehind:"领先 {ahead} · 落后 {behind}",gitSelectFile:"在左侧选择一个文件查看改动",gitDiffUntrackedHint:"未跟踪的新文件：暂存后可查看与 HEAD 的差异",gitCommitMsgPlaceholder:"提交说明…",gitFileHistory:"文件历史",gitBlame:"逐行追溯",gitBlameAuthor:"作者",gitBlameDate:"日期",gitBlameLine:"行",gitBlameEmpty:"（无法读取逐行追溯）",gitFileHistoryEmpty:"（该文件暂无历史）",gitBack:"返回",gitHistoryAll:"全部分支",gitHistoryCurrent:"仅当前分支",gitSelectCommit:"在左侧选择一个提交查看详情",gitCommitDetail:"提交详情",gitCommitHash:"提交哈希",gitCommitAuthor:"作者",gitCommitDate:"提交时间",gitCommitParents:"父提交",gitCommitRefs:"引用",gitCommitChangedFiles:"变更文件（{n}）",gitCommitNoFiles:"（无文件变更）",gitCopyHash:"复制哈希",gitCopyPath:"复制路径",gitCopied:"已复制到剪贴板",gitReset:"重置到此提交",gitResetSoft:"软重置（改动全部保留在暂存区）",gitResetMixed:"混合重置（改动保留在工作区）",gitResetHard:"硬重置（丢弃改动）",gitResetHardMsg:"硬重置会丢弃工作区与暂存区的全部改动，确定继续？",gitResetDone:"已重置到 {hash}",gitRevert:"还原此提交",gitRevertDone:"已还原 {hash}",gitCherryPick:"拣选到当前分支",gitCherryPicked:"已拣选 {hash}",gitCheckoutCommit:"检出此提交",gitCheckoutCommitMsg:"将进入分离头指针状态，确定检出 {hash}？",gitBranchFrom:"新建分支指向此提交",gitBranchFromTitle:"从此提交新建分支",gitBranchFromPlaceholder:"新分支名称",gitBranchRename:"重命名",gitBranchRenameTitle:"重命名当前分支",gitBranchRenamePlaceholder:"新的分支名",gitBranchRenamed:"已重命名为 {name}",gitMergeIntoCurrent:"合并到当前分支",gitMergeDone:"已合并 {name}",gitPushBranch:"推送",gitPushed:"已推送 {name}",gitBranchCurrent:"当前",gitBranchRemoteGroup:"远程分支",gitBranchLocalGroup:"本地分支",gitBranchCreateAndSwitch:"创建并切换",gitTagNew:"新建标签",gitTagNamePlaceholder:"标签名，如 v1.0.0",gitTagTargetPlaceholder:"目标提交（留空为 HEAD）",gitTagMessagePlaceholder:"说明（填写即创建附注标签）",gitTagCreate:"创建",gitTagEmpty:"（暂无标签）",gitTagAnnotated:"附注",gitView:"查看",gitTagCreated:"已创建标签 {name}",gitTagDeleteMsg:"确定删除标签 {name}？",gitTagDeleted:"已删除标签 {name}",gitTagPushed:"已推送标签 {name}",gitTagFetchAll:"从远程获取标签",gitTagFetchAllDone:"已从远程获取标签",gitTagRemoteOnly:"远程",gitTagPull:"拉取",gitTagPulled:"已拉取标签 {name}",gitTagNoRemote:"无远程仓库，无法获取或发布标签",gitCommitViewTitle:"提交对比",gitCommitOpenDiff:"查看 {path} 的差异",gitReleaseBtn:"发布新版本",gitReleaseTitle:"发布新版本（创建附注标签并推送到远程）",gitReleaseName:"版本标签名",gitReleaseTarget:"基于提交（留空为 HEAD）",gitReleaseMsg:"版本说明（必填）",gitReleasePublish:"创建并发布",gitReleaseRequireMsg:"发布版本需填写版本说明",gitReleased:"已发布 {name} 到远程",gitReleaseGhSkip:"GitHub Release 未创建：{reason}",gitRefresh:"刷新",gitTabTags:"标签",gitTabReleases:"版本",gitReleaseChooseTag:"选择已有标签",gitReleaseNotesPlaceholder:"版本说明（将显示在 Release 页面）",gitReleaseCreateForTag:"创建 Release",gitReleaseCreated:"Release 已创建：{url}",gitReleaseLoadSkip:"版本列表不可用：{reason}",gitReleaseEmpty:"暂无版本记录",gitReleaseOpen:"打开",gitRemoteNamePlaceholder:"名称，如 origin",gitRemoteUrlPlaceholder:"地址，如 https://github.com/user/repo.git",gitRemoteAdd:"添加远程",gitRemoteEmpty:"（暂无远程仓库）",gitRemoteAdded:"已添加远程 {name}",gitRemoteRemoveMsg:"确定移除远程 {name}？",gitRemoteRemoved:"已移除远程 {name}",gitRemoteSetUrl:"修改地址",gitRemoteUrlTitle:"修改远程地址",gitRemoteUrlSaved:"已更新远程地址",gitStashView:"查看内容",gitStashNew:"创建储藏",gitStashNone:"（工作区干净，无内容可储藏）",gitOpRunning:"执行中…",gitOpFailed:"操作失败",svnMenu:"SVN",svnPanel:"打开 SVN 管理",svnPanelTitle:"SVN 管理",svnRepo:"工作副本：",svnUpdate:"更新",svnCommitBtn:"提交",svnAdd:"加入版本控制",svnAdded:"已加入版本控制",svnIgnore:"忽略（svn:ignore）",svnRevert:"还原",svnCleanup:"清理",svnResolve:"解决冲突",svnDiff:"比较差异",svnBlame:"追溯",svnCheckout:"检出",svnFailed:"SVN 命令执行失败",svnRailChanges:"本地修改",svnRailLog:"提交日志",svnNoUrl:"未读取到仓库地址",svnRunning:"正在执行…",svnRefresh:"刷新",svnLoading:"加载中…",svnSelectAll:"全选",svnModifiedCount:"本地修改（{n}）",svnNoChanges:"无本地修改",svnCommitPlaceholder:"填写提交说明…",svnCommitSelected:"将提交选中的 {n} 个文件",svnCommitAll:"将提交全部本地修改",svnOutput:"命令输出",svnNoOutput:"（无输出）",svnNoCli:"未检测到 svn 命令行，请先安装 Subversion",svnDone:"SVN 命令已完成",svnUpdateSummaryFrom:"更新完成：r{from} → r{to}，{n} 个条目变更",svnUpdateSummary:"更新完成：{n} 个条目变更，当前版本 r{to}",svnAlreadyLatest:"已是最新版本 r{rev}，没有需要更新的内容",svnLogEmpty:"暂无日志",svnLogToggle:"点击展开 / 收起该次提交详情",svnLogNoPaths:"该提交没有变更文件记录",svnLogOpenDiff:"查看该文件在此次提交中的对比",svnDiffTitle:"差异对比 · ",svnBlameTitle:"追溯 · ",svnCheckoutUrlPlaceholder:"仓库地址（如 https://svn.example.com/svn/repo）",svnCheckoutTargetPlaceholder:"检出到本地目录",repoCloneTitle:"克隆 / 检出仓库",repoCloneKindGit:"Git",repoCloneKindSvn:"SVN",repoCloneTitleGit:"克隆 Git 仓库",repoCloneTitleSvn:"检出 SVN 仓库",repoCloneCaptionGit:"从远程仓库克隆完整副本到本地",repoCloneCaptionSvn:"从 SVN 服务器检出指定版本到本地",repoCloneTargetGit:"将克隆到",repoCloneTargetSvn:"将检出到",repoCloneUrl:"仓库地址",repoCloneUrlGitPlaceholder:"仓库地址（如 https://github.com/owner/repo.git）",repoCloneDir:"目标目录",repoCloneDirPlaceholder:"要克隆到的父目录",repoCloneBrowse:"浏览…",repoCloneName:"子目录名称",repoCloneNamePlaceholder:"留空则按地址推断",repoCloneShallow:"浅克隆（仅最新一次提交）",repoCloneShallowHint:"更快更小，但不含历史",repoCloneRevision:"版本号",repoCloneRevisionPlaceholder:"留空为最新（HEAD）",repoCloneAccount:"账号",repoCloneAccountAuto:"自动匹配（按地址）",repoCloneAccountNew:"新建账号…",repoCloneTargetEmpty:"请填写仓库地址与目标目录",repoCloneRunningGit:"正在克隆 Git 仓库…",repoCloneRunningSvn:"正在检出 SVN 仓库…",repoCloneElapsed:"已用时 {s} 秒",repoCloneKeepOpen:"保持窗口打开，完成后将收到通知。",repoCloneActionGit:"克隆",repoCloneActionSvn:"检出",repoCloneDoneGit:"已克隆仓库：{name}",repoCloneDoneSvn:"已检出仓库：{name}",menuCloneGit:"克隆 Git 仓库…",menuCloneSvn:"检出 SVN 仓库…",svnNotRepoTip:"当前目录不是 SVN 工作副本，可填写上方信息检出仓库。",svnCheckedOut:"已检出仓库",svnStAdded:"已添加",svnStModified:"已修改",svnStDeleted:"已删除",svnStReplaced:"已替换",svnStConflicted:"冲突",svnStMissing:"缺失",svnStObstructed:"受阻",svnStUnversioned:"未版本控制",svnStIgnored:"已忽略",svnStLocked:"已锁定",saveConfig:"保存",recycleBin:"回收站",recycleRestore:"恢复",recycleDelete:"彻底删除",recycleEmpty:"清空回收站",recycleEmptyConfirm:"确定清空回收站？此操作不可恢复。",recycleDeleteConfirm:"确定彻底删除“{name}”？此操作不可恢复。",recycleDeleteConfirmMulti:"确定彻底删除选中的 {count} 项？此操作不可恢复。",recycleEmptying:"正在清空回收站…",recycleEmptyProgress:"清空回收站：剩余 {count} 项",recycleEmptyDone:"回收站已清空",recycleEmptyList:"回收站是空的",recycleRestored:"已恢复到原位置",recycledDeleted:"已彻底删除",terminal:"终端",terminalTitle:"终端",terminalMinimize:"最小化到任务条",terminalCloseTitle:"关闭终端",terminalClose:"关闭",terminalNew:"新建终端",terminalShellSwitch:"切换默认 shell（cmd / powershell）",terminalAdmin:"管理员",terminalAdminNormal:"普通权限",terminalAdminOn:"当前以管理员身份运行：终端内命令拥有管理员权限",terminalAdminOff:"当前为普通权限：终端内命令无法修改系统级设置",terminalAdminHint:"以「管理员身份运行」启动 dsh web，面板内所有终端即拥有管理员权限（终端子进程继承宿主进程权限）。",terminalClear:"清屏",terminalResizeTitle:"拖动缩放终端",terminalDockDragTitle:"点击展开 · 拖动移动 · 右键菜单",terminalDockSessions:"已最小化的终端",terminalDockCloseAll:"全部关闭",terminalTab:"{n}",scrollLeft:"向左滚动",scrollRight:"向右滚动",termFontSmaller:"减小字号",termFontLarger:"增大字号",termInputFailed:"终端输入发送失败：{msg}",termSshBadge:"该终端已登录到远端 SSH 主机",termSshReconnect:"重连",termSshReconnectTitle:"重新登录远端（用已保存的口令 / 密钥自动登录）",termSearchPlaceholder:"在终端输出中搜索…",termSearchCase:"区分大小写",termSearchPrev:"上一个",termSearchNext:"下一个",termSearchClose:"关闭搜索",termCopyHint:"Ctrl+C 复制 · Ctrl+V 粘贴 · Ctrl+F 搜索",menuDownload:"下载文件",menuOpenTerminal:"在终端打开",menuSubagent:"用子代理处理",menuNewSubagent:"新建子代理对话",subagentAsk:"希望子代理做什么？",subagentAskPlaceholder:"描述任务（可留空，稍后在子代理会话中继续）",subagentSpawned:"已在官方子代理会话中打开",subagentFailed:"子代理发起失败",statusDrivesCount:"{count} 个驱动器",statusLoading:"加载中…",statusSearching:"搜索中…",statusTasks:"后台任务",statusTasksRunning:"{count} 个后台任务",statusTermRestore:"点击还原终端窗口",pmTitle:"扩展",pmManage:"管理",pmSort:"排序",pmSortInstall:"按安装次序",pmSortName:"按名称",pmSortSource:"按来源",pmInstalled:"已安装",pmSearchPlaceholder:"在已安装中搜索",pmImportFromFile:"从本地文件导入…",pmImportFromUrl:"从 URL 导入…",pmEnableAll:"全部启用",pmDisableAll:"全部禁用",pmEnable:"启用",pmDisable:"禁用",pmRemove:"移除插件",pmMoreActions:"更多操作",pmPull:"拉取",pmPulling:"…",pmUrlPlaceholder:"https://example.com/plugin.js",srcBuiltin:"内置",srcFile:"本地",srcUrl:"URL",pmEmptyWithQuery:"没有匹配 “{q}” 的插件<br>换个关键词，或用右上「···」导入",pmEmptyNoPlugins:"还没有插件<br>用右上「···」从本地文件或 URL 导入",pmImportFailed:"导入 {name} 失败：{msg}",pmUrlImported:"已从 URL 导入并启用",pmUrlImportFailed:"URL 导入失败：{msg}",pmNeedsProject:"已启用 · 打开项目目录后在侧边栏显示",vsExtNeedProject:"{n} 个扩展已启用，打开项目目录后显示在侧边栏",pmCheckEmpty:"文件内容为空。",pmCheckNotPlugin:"这不是插件文件：缺少 __ModuleLoader__ 登记或 activityBar 注册调用。",pmCheckNeedsHost:"此插件需要宿主 API v{need}，当前工作台为 v{have}，请升级后重试。",pmCheckNoContrib:"插件加载后未注册任何贡献点，已回滚。请检查插件是否适配本工作台 API。",pmRestoreFailed:"恢复插件 {name} 失败：{msg}",pmEnableFailed:"启用 {name} 失败：{msg}",pmReloadRequired:"{n} 个插件已启用但未能热加载，需要重新加载窗口。",pmReloadNow:"重新加载",pmReloadDismiss:"暂不处理"},Gr={tabFileWorkbench:"File Workbench",tabFileWorkbenchDesc:"Browse, preview, and search local files, then reference them to the session",tabVSCode:"File Editor",tabVSCodeDesc:"Open a code editor in the right sidebar: browse project tree, multi-tab editing, syntax highlight",tabMenuOpenInEditor:"Open Workspace in File Editor",tabMenuNewEditor:"New Editor Window",tabMenuAnotherEditor:"Open Another Editor Window",tabMenuFloat:"Open as Floating Window",tabMenuDefaultLabel:"Open by default",guideMenuAria:"More ways to open",vsNoProject:"No project folder selected",vsTreeLoading:"Loading project…",vsOpenFolder:"Open Folder",vsFolderPath:"Enter the absolute path of the project folder",vsSave:"Save",vsSaved:"Saved",vsUnsavedTitle:"Unsaved Changes",vsUnsavedMsg:"This file has unsaved changes. Close it anyway?",vsCloseManyMsg:"{n} unsaved tab(s). Save all and close?",vsTooLarge:"File too large: over the 8MB editing limit. Open it with the system app instead",vsScrollLeft:"Scroll tabs left",vsScrollRight:"Scroll tabs right",vsReadonly:"Read-only",vsEmptyHint:"Pick a project folder, then open a file from the left tree to start editing",vsLoading:"Loading…",vsBrand:"File Editor",vsQuickAccess:"Quick Access",vsFormat:"Format Content",vsFormatOk:"Formatted",vsFormatFail:"Format failed: {msg}",vsMenuFile:"File",vsSaveAs:"Save As…",vsSaveAsTitle:"Save As",vsFileName:"File name",vsFileNamePlaceholder:"File name, or paste an absolute path",vsFileType:"File type",vsFilterAll:"All files",vsFilterExt:"{ext} files only",vsSaveAsHint:"Browse to a folder and enter a file name; double-click a listed file to overwrite it directly",vsSaveAsExists:"A file with this name already exists and will be overwritten",vsSaveAsBlockedDirty:"{name} is open in the editor with unsaved changes — save or close it first",vsRecentProjects:"Recent Projects",vsRecentClearAll:"Clear All",vsRecentClearAllTitle:"Clear All Recent Projects",vsRecentClearAllConfirm:"Clear all recent project records? This cannot be undone.",vsRecentCleared:"Recent projects cleared",vsRecentForgetTitle:"Remove from recent projects",vsRecentForgetConfirm:'Remove "{name}" from recent projects? This cannot be undone.',vsRecentForgot:"Removed {name}",vsRemoveProject:"Remove from Project",vsRemoveProjectTitle:"Remove from Project",vsRemoveProjectConfirm:'Remove "{name}" from projects? This removes it from recent projects and closes its file tree (unsaved changes will be lost).',vsProjectRemoved:"Removed from project",vsProjectGone:"Project folder no longer exists; removed from recent projects",vsGitHistory:"History",vsGitExpand:"Show commit history",vsGitCollapse:"Collapse commit history",vsGitRefresh:"Refresh history",vsGitFiles:"Changed files",vsGitFileDiff:"Open this change in a new tab",vsQuickOpenPlaceholder:"Search files by name (Ctrl+P)",vsLeftTabFiles:"Files",vsLeftTabSearch:"Search",vsLeftTabGit:"Version Control",vsGitNoRepo:"This folder is not a Git / SVN repository",vsUnfoldEditor:"Show editor",vsFoldEditor:"Hide editor",vsSearchNeedsProject:"Open a project folder first to use search",vsMenuRecent:"Open Recent",vsMenuExtensions:"Extensions",vsEmptyTitle:"Open a folder to start editing",vsGrepPlaceholder:"Search in files (Enter to run)",vsGrepScopePlaceholder:"Search only in folder, e.g. src/components",vsGrepScopeTitle:"Search scope: empty = whole project; enter a project subfolder path to narrow the search",vsGrepCase:"Match case",vsGrepRegex:"Use regex",vsGrepSummary:"{n} results in {files} files",vsGrepTruncated:"Too many results, truncated",vsGrepNoResult:"No results found",vsGrepOpenAt:"Open and go to line {ln}",vsSearchTitle:"Search",vsGrepWholeWord:"Match whole word",vsGrepReplacePlaceholder:"Replace",vsReplaceAll:"Replace All",vsReplacePreserveCase:"Preserve case",vsReplaceConfirm:"This will replace {n} occurrences of “{q}” with “{r}” across {files} file(s), rewriting files on disk with no undo. Continue?",vsReplaceDone:"Replaced {n} occurrence(s) in {files} file(s)",vsReplaceNone:"Nothing to replace",vsReplaceRemoteUnsupported:"Cross-file replace is not supported on remote (ssh) roots",vsFilesToInclude:"files to include",vsFilesToIncludePlaceholder:"files to search, e.g. *.ts, src/**/README.md",vsFilesToIncludeTitle:"Only search/replace in files matching these globs (comma-separated, relative to project root). Empty = all.",vsFilesToExclude:"files to exclude",vsFilesToExcludePlaceholder:"files or folders to skip, e.g. **/node_modules, !*.min.js",vsFilesToExcludeTitle:"Skip files/folders matching these globs (comma-separated, relative to project root).",vsClearAllResults:"Clear All Results",vsRefreshResults:"Search Again",vsToggleReplace:"Show / Hide Replace",vsViewModeList:"List",vsViewModeTree:"Tree",vsViewModeSwitchTitle:"Switch between list and tree view",vsSearchIndexing:"Indexing…",vsSearchNoResult:"No matching files",vsSearchTruncated:"Lots of matches — showing the first few, refine your keywords",vsSaveAll:"Save All",vsSavedAs:"Saved as {path}",vsOverwriteMsg:"{path} already exists. Overwrite it?",vsNoDirty:"No changes to save",vsAllSaved:"Saved {n} file(s)",vsConflictTitle:"File Changed on Disk",vsConflictMsg:"{name} has changed on disk since it was opened. Overwrite it with your version?",vsConflictMsgReload:"Discard your local changes to {name} and reload from disk?",vsConflictBadge:"Changed on disk",vsReloadedExternal:"{name} changed on disk and has been reloaded",vsSwitchLoseMsg:"{n} file(s) have unsaved changes. Switching projects will discard them. Continue?",vsReopenLoseMsg:"Reopening with another encoding will discard unsaved changes. Continue?",vsEncodingSwitched:"Reopened as {enc}",vsBinaryHint:"This is a binary file and cannot be edited as text",vsNewWindow:"New Editor Window",vsFloatWindow:"Float as Separate Window",vsNewTerminal:"New Terminal",vsReplacedOldest:"Editor window limit (8) reached: the earliest window was replaced",vsNewWindowLimit:"Could not open a new editor window. Please try again.",vsOpenExternal:"Open with system app",vsNoOpenFile:"No open files",vsTabClose:"Close",vsTabCloseSave:"Save and Close",vsTabCloseOthers:"Close Others",vsTabCloseRight:"Close Tabs to the Right",vsTabCloseAll:"Close All",terminalRestore:"Restore terminal",vsNewFile:"New File",vsNewFolder:"New Folder",vsNewFileName:"File name",vsNewFolderName:"Folder name",vsRename:"Rename",vsRenameName:"New name",vsDelete:"Delete",vsDeleteConfirm:"Delete",vsRefresh:"Refresh",vsCollapseAll:"Collapse All",vsExpandAll:"Expand All",vsExpandAllLimited:"Many folders — expanded the first {n} (expanding further would issue too many requests)",vsPickFolderTitle:"Pick Project Folder",vsComputer:"My Computer",vsUp:"Up",vsEmptyDir:"This folder is empty",vsPickInput:"Use this path",vsCancel:"Cancel",vsPickConfirm:"Select This Folder",vsNewFolderBtn:"New Folder",vsPickEnterHint:"Double-click a folder to enter; single click selects it; “Select This Folder” picks the highlighted folder (or the current one)",menuCopyRelPath:"Copy relative path",menuCopyAbsPath:"Copy absolute path",vsAddToSession:"Add to Session",vsAddToSessionOk:"Added to the session input",vsAddToSessionFail:"Open a conversation input first",goUp:"Go Up",goBack:"Back",goForward:"Forward",refreshList:"Refresh resource list",noFolder:"No folder open",goSessionDir:"Go to current session folder",closeTab:"Close",clearSearch:"Clear search",cancel:"Cancel",confirmOk:"OK",deleteTitle:"Confirm delete",searchScopeIn:"In scope: ",myComputer:"My Computer",navHome:"Home",navGallery:"Gallery",navThisPc:"This PC",navQuickAccess:"Quick access",externalInjection:"External injections",driveLabel:"Local Disk ({drive}:)",toastClose:"Close notification",thisPcDevices:"Devices and drives",driveCapacity:"{free} free of {total}",driveTotal:"Total size",driveFree:"Free space",driveFs:"File system",driveTypeFixed:"Local Disk",driveTypeRemovable:"Removable Disk",emptyDrives:"(No drives detected)",navExpand:"Expand",navCollapse:"Collapse",favoritePin:"Pinned to Quick access",desktopEntry:"Desktop",downloadEntry:"Downloads",documentEntry:"Documents",pictureEntry:"Pictures",musicEntry:"Music",videoEntry:"Videos",workspaceEntry:"Workspace",emptyDir:"(empty)",colName:"Name",colSize:"Size",colType:"Type",colModified:"Date modified",typeFolder:"Folder",typeFile:"File",renameEntry:"Rename:",confirmDelete:'Delete "{name}"?',brokenLink:"Broken symlink",save:"Save",menuEdit:"Edit",txtEditorTitle:"Edit Text · {name}",txtLoading:"Loading…",txtEditorSub:"Text editor",txtUnsaved:"Unsaved changes",txtReadError:"Failed to read: {msg}",txtDirty:"Unsaved",txtReadonly:"Read-only (outside workspace)",txtPlaceholder:"Type text here…",txtChars:"chars",txtUnsavedTitle:"Unsaved changes",txtUnsavedMsg:"This file has unsaved changes. Close anyway?",txtSaved:"Saved",download:"Download",menuDownload:"Download",menuOpenTerminal:"Open in Terminal",menuSubagent:"Process with Sub-agent",menuNewSubagent:"New Sub-agent Chat",subagentAsk:"What should the sub-agent do?",subagentAskPlaceholder:"Describe the task (optional; continue in the sub-agent session)",subagentSpawned:"Opened in the official sub-agent session",subagentFailed:"Failed to start sub-agent",statusDrivesCount:"{count} drive(s)",statusLoading:"Loading…",statusSearching:"Searching…",statusTasks:"Background tasks",statusTasksRunning:"{count} running task(s)",statusTermRestore:"Click to restore the terminal window",statusItemsCount:"{count} items",searchTitle:"Search Files & Content",searchPlaceholder:"Enter keywords…",search:"Search",searching:"Searching…",searchCase:"Match case",searchRegex:"Regular expression match",searchIdle:"Type keywords in the top search box to match file names and content live.",resultsCount:"{count} result(s)",resultsSuffixTruncated:" (truncated)",hitTitle:"Right-click to locate in explorer \\ left-click to open",matchContent:"content",searchReplaceAll:"Replace All",searchReplaceTitle:"Confirm batch replace",searchReplaceConfirm:"Replace {count} match(es) across {files} file(s)? This cannot be undone.",searchReplaceBusy:"Replacing…",searchReplaceDone:"Replaced in {files} file(s) ({count} match(es))",openFolderFirst:"Open a folder first",dirCreated:"Directory created",fileCreated:"File created",renamed:"Renamed",deleted:"Deleted",workspaceOutside:"Operation denied: only allowed for files/folders inside the workspace",errForbidden:"Forbidden: no permission or denied (403)",errNotFound:"File or directory not found (404)",errNoRoot:"No workspace root set — open a folder first (409)",errTooLarge:"Payload too large, exceeds allowed limit (413)",errServer:"Server error, please retry later (500)",errNetwork:"Network request failed, check your host connection",menuOpen:"Open",menuOpenExternal:"Open with default app",menuOpenInEditor:"Open in File Editor",menuCut:"Cut",menuCopy:"Copy",menuRename:"Rename",menuDelete:"Delete",menuCopyPath:"Copy full path",menuProperties:"Properties",menuCutDone:"Cut to clipboard",menuCopyDone:"Copied to clipboard",menuOpened:"Opened with system default app",menuPathCopied:"Path copied",menuPathCopyFail:"Failed to copy path",menuRefresh:"Refresh",menuView:"View",menuSort:"Sort by",expShowNav:"Show navigation",menuPaste:"Paste",menuUpload:"Upload Files",uploaded:"Uploaded {count} file(s)",uploadFailed:"{count} file(s) failed to upload",menuNew:"New",menuNewFolder:"Folder",menuNewFile:"Text Document",viewHuge:"Extra large icons",sshHosts:"SSH Hosts",sshAddHost:"Add Host",sshCancel:"Cancel",sshName:"Display name",sshAddr:"Address (user @ host : port)",sshUser:"Username",sshHostAddr:"Host address",sshAuth:"Auth method",sshAuthPassword:"Password auth",sshAuthKey:"Private key auth",sshPassword:"SSH password",sshKeyPath:"Private key path (supports ~)",sshSaveAdd:"Add",sshTest:"Test",sshTestConn:"Test",sshDelete:"Delete",sshDeleteConfirm:"Click again to confirm",sshTestOk:"SSH connection OK",sshTestFail:"SSH connection failed",sshRequired:"Host address and username are required",sshAddSuccess:"Host added",sshNewHost:"Add SSH Host",sshEdit:"Edit",sshEditTitle:"Edit SSH Host",sshHostCaption:"Connect a remote server for file browsing and terminal",sshUpdateSuccess:"Host updated",sshSaveEdit:"Save Changes",sshKeepSecret:"(leave blank to keep existing password)",sshNoHosts:"No hosts yet — click “Add Host” to begin",accTitle:"Accounts",accCaption:"Manage Git / SVN credentials — injected automatically when running commands",accListTitle:"Saved accounts",accAdd:"Add account",accNewTitle:"Add account",accEditTitle:"Edit account",accEdit:"Edit",accKind:"Type",accKindGit:"Git",accKindSvn:"SVN",accName:"Display name",accHost:"Host",accHostPlaceholder:"e.g. github.com or 113.57.110.41:804",accUrl:"Repository URL (optional)",accUrlPlaceholder:"https://github.com/owner/repo.git",accUrlHint:"Leave blank to apply to every repository on this host; fill it in to match by URL prefix (multiple accounts per host). Test & Apply need it.",accUsername:"Username",accSecret:"Password / access token",accSecretKind:"Credential type",accSecretPassword:"Password",accSecretToken:"Access token",accKeepSecret:"(leave blank to keep the saved secret)",accNote:"Note",accSave:"Save",accCancel:"Cancel",accDelete:"Delete",accDeleteConfirm:"Click again to confirm",accTest:"Test",accTestOk:"Connection OK",accTestFail:"Connection failed",accApply:"Apply to system",accApplyOk:"Applied to system",accApplyHint:"Write the credential into the system store so the CLI and other GUI tools are prompted no more.",accSaved:"Account saved",accDeleted:"Account deleted",accRequired:"Host and username are required",accSecretRequired:"Password or access token is required",accEmpty:"No accounts yet — click “Add account” to begin",accHasSecret:"Secret saved",accNoSecret:"No secret saved",accAllRepos:"all repositories on this host",accEffective:"This repo will use",accEffectiveNone:"No matching account for this repo (falls back to system credentials / svn cache)",accMatchHint:"Matched by host or repository URL prefix; system credentials are used when nothing matches.",accCopyIdent:"Copy account id",accUseCurrent:"Fill from current repo",accBack:"Back to list",accPick:"Pick an account on the left, or click “Add account”",accTip:"Credentials live only in this plugin's local config and are never sent out; the secret is never echoed — leave it blank to keep the current one.",sshStatusOnline:"Connected",sshStatusOffline:"Disconnected",sshStatusChecking:"Checking…",sshStatusUnknown:"Not checked",remoteNoExternal:"Remote files cannot be opened with local programs",remoteNoArchive:"Compress / extract is not supported on remote directories yet",remoteNoTerminal:"Remote host config not found — started the terminal in a local directory (add the SSH host in Settings first)",remoteCachedHint:"Remote file downloaded to a local temp file and opened (edits are not written back)",sshNavGroup:"SSH Remote",sshEmpty:"No hosts yet — right-click here to add one, or use “New ▾”",viewLarge:"Large icons",viewMedium:"Medium icons",viewSmall:"Small icons",viewList:"List",viewDetails:"Details",viewContent:"Content",viewTiles:"Tiles",showExtensions:"File name extensions",cmdPreview:"Preview",sortName:"Name",sortModified:"Date modified",sortType:"Type",sortSize:"Size",moved:"Moved",copied:"Copied",createdFolder:"Folder created",createdFile:"File created",newFolderName:"New Folder",newFileName:"New Text Document",propName:"Name",propPath:"Path",propKind:"Type",propSize:"Size",propModified:"Date modified",settings:"Settings",settingsSubtitle:"Personalize the workbench look & behavior",retry:"Retry",taskSrcMissing:"Source no longer exists (it may have been moved or deleted); list refreshed: {name}",menuMore:"More",settingsGroupFiles:"Files",settingsGroupAppearance:"Appearance",autoSave:"Auto save (write 1s after edits pause)",vsFindPlaceholder:"Find",vsReplacePlaceholder:"Replace with",vsFindNext:"Next (Enter)",vsFindPrev:"Previous (Shift+Enter)",vsFindReplace:"Replace (Enter)",vsFindReplaceAll:"Replace All",vsFindToggleReplace:"Toggle replace",vsFindClose:"Close (Esc)",vsFindNoMatch:"No results",vsFindWord:"Whole word",vsMenuLocalDiff:"View Local Changes",vsLocalDiffTitle:"Unsaved Changes",vsLocalDiffTooBig:"Changes too large to diff",vsMultiCursorHint:"Tip: Alt+Click adds more cursors",vsActHide:'Hide "{name}"',vsActBarBottom:"Move Activity Bar to Bottom",vsActBarTop:"Move Activity Bar to Top",vsSideRight:"Move Side Bar to Right",vsSideLeft:"Move Side Bar to Left",vsMinimap:"Editor Thumbnail",vsCloseSave:"Save and Close",vsCloseDiscard:"Close without Saving",vsCloseSaveAll:"Save All and Close",vsCloseDiscardAll:"Close All without Saving",showHidden:"Show hidden files",allowOutsideRoot:"Operate on files outside the workspace (root toggle)",defaultView:"Default view",themeMode:"Theme",themeAuto:"Follow system",themeDark:"Dark",themeLight:"Light",accentColor:"Accent color",accentReset:"Reset",fontFamily:"Font",fontDefault:"Default",fontOptionYahei:"Microsoft YaHei",fontOptionConsolas:"Consolas (monospace)",fontOptionCourier:"Courier New (monospace)",fontOptionGeorgia:"Georgia (serif)",fontSize:"Font size",fontSizeSm:"Small",fontSizeMd:"Medium",fontSizeLg:"Large",fontSizeXl:"Extra large",shortcutHelp:"Keyboard Shortcuts",shortcutHint:"Press ? anytime to show, Esc to close",shortcutGlobal:"Global",shortcutFileList:"File List",shGlobalHelp:"Show shortcut help",shListSelectAll:"Select all",shListCopy:"Copy",shListCut:"Cut",shListPaste:"Paste",shListFilter:"Focus filter box",shListNewFolder:"New folder",shListDelete:"Delete (with confirm)",shListRename:"Rename",shListRefresh:"Refresh",shListOpen:"Open file / enter folder",shListMove:"Move selection",shListUp:"Go to parent folder",shListBack:"Browse back",shListForward:"Browse forward",undo:"Undo",findReplacePlaceholder:"Replace with…",favorites:"Favorites",favoriteAdd:"Favorites",favoriteRemove:"Remove from favorites",favoriteAdded:"Added to favorites",favoriteRemoved:"Removed from favorites",emptyFavorites:"(no favorites)",menuCompress:"Compress to .zip",compressed:"Compressed",menuExtract:"Extract to current folder",extracted:"Extracted {count} file(s)",extractFailed:"Extraction failed",selectedCount:"{count} item(s) selected",menuMultiDelete:"Delete selected ({count})",menuMultiCut:"Cut selected",menuMultiCopy:"Copy selected",menuMultiCompress:"Compress selected",filterPlaceholder:"Filter this folder…",filterEmpty:"(no match)",taskFabTitle:"Background tasks",taskPanelTitle:"Background tasks",taskRunning:"Running",taskHistory:"History",taskClearFinished:"Clear finished",taskClearAll:"Clear all",taskEmpty:"No tasks",taskViewLog:"View log",taskLogTitle:"Task log",taskClose:"Close",taskFieldTarget:"Target",taskStatusRunning:"Running",taskStatusDone:"Done",taskStatusError:"Failed",taskFieldFile:"File",taskStartTime:"Start",taskEndTime:"End",taskTotalSpent:"Total time",taskStepSpent:"Spent",taskRunningLive:"Running",taskFieldType:"Type",taskMetaFiles:"{count} files · {size}",taskArchive:"Archive",taskArchiveOpen:"View Archives",taskArchiveTitle:"Task Archives",taskArchiveNone:"No archives",taskArchiveRecords:"{count} records",taskUploading:"Upload file",taskCompressing:"Compress",taskExtracting:"Extract",taskCopying:"Copy",taskMoving:"Move",taskDeleting:"Delete",taskRenaming:"Rename",gitMenu:"Git",gitAdd:"Stage (git add)",gitCommit:"Commit (git commit)",gitCommitTitle:"Git commit",gitCommitPlaceholder:"Enter commit message…",gitCommitted:"Committed",gitAdded:"Staged",gitDiscard:"Discard changes",gitDiscardTitle:"Confirm discard",gitDiscardMsg:'Discard worktree changes of "{name}" (git checkout --)?',gitDiscarded:"Discarded",gitDiff:"View changes",gitDiffTitle:"Git changes",gitDiffEmpty:"(no changes available)",gitDiffClose:"Close",gitBadgeUntracked:"Untracked new file",gitBadgeAdded:"Newly staged",gitBadgeModified:"Modified",gitBadgeDeleted:"Deleted",gitNotRepo:"Not in a git repository",gitNoChanges:"Nothing staged, nothing to commit",gitLoading:"Loading…",gitCommitFiles:"Committing {n} file(s):",gitCommitConfirm:"Commit",gitConfig:"Configure identity",gitConfigTitle:"Git identity",gitConfigName:"Username (user.name)",gitConfigNamePlaceholder:"e.g. yourname",gitConfigEmail:"Email (user.email)",gitConfigEmailPlaceholder:"e.g. you@example.com",gitConfigSave:"Save",gitConfigSaved:"Git global identity saved",gitPanel:"Open Git Panel",gitIgnore:"Ignore (add to .gitignore)",gitIgnored:"Ignored",gitPanelTitle:"Git Manager",gitFetch:"Fetch",gitPull:"Pull",gitPush:"Push",gitLoadMore:"Load more",gitDiffTruncated:"Diff too large — showing the first 5000 lines (open in the editor for the full content)",gitCopyName:"Copy name",gitCopyUrl:"Copy URL",gitCopyMsg:"Copy message",gitCloneHere:"Clone repository…",gitStatusColon:"Branch: {branch}",gitLocalRepo:"Local repo: ",gitTabStatus:"Changes",gitTabLog:"Log",gitTabBranch:"Branches",gitTabStash:"Stash",gitTabCli:"Command",gitClean:"Working tree clean, nothing to commit",gitAddShort:"Stage",gitUnstage:"Unstage",gitUnstaged:"Unstaged",gitStageAll:"Stage All",gitGroupStaged:"Staged changes",gitGroupUnstaged:"Changes",gitGroupUntracked:"Untracked",gitLogEmpty:"(no commits yet)",gitBranchNew:"New branch name",gitCheckout:"Checkout",gitDelete:"Delete",gitBranchCreated:"Branch {name} created and checked out",gitBranchDeleteMsg:"Delete branch {name}?",gitStashPlaceholder:"Stash message (optional)",gitStashCreate:"Create Stash",gitStashEmpty:"(no stashes)",gitStashApply:"Apply",gitStashPop:"Pop",gitStashDrop:"Drop",gitStashClear:"Clear Stash",gitStashCreated:"Stash created",gitStashApplied:"Stash applied",gitStashPopped:"Stash popped",gitStashDropped:"Stash dropped",gitStashCleared:"Stash cleared",gitStashDropMsg:"Drop stash {ref}?",gitStashClearMsg:"Clear all stashes? This cannot be undone.",gitCliPlaceholder:"Enter a git subcommand, e.g. status / log --oneline -5",gitRailChanges:"Changes",gitRailHistory:"History",gitRailBranches:"Branches",gitRailTags:"Tags",gitRailRemotes:"Remotes",gitRailStash:"Stashes",gitRailCli:"Console",gitHeadDetached:"Detached HEAD",gitNoUpstream:"No upstream branch",gitAheadBehind:"Ahead {ahead} · Behind {behind}",gitSelectFile:"Select a file on the left to view changes",gitDiffUntrackedHint:"Untracked file: stage it to see the diff against HEAD",gitCommitMsgPlaceholder:"Commit message…",gitFileHistory:"File history",gitBlame:"Blame",gitBlameAuthor:"Author",gitBlameDate:"Date",gitBlameLine:"Line",gitBlameEmpty:"(blame unavailable)",gitFileHistoryEmpty:"(no history for this file)",gitBack:"Back",gitHistoryAll:"All branches",gitHistoryCurrent:"Current branch",gitSelectCommit:"Select a commit on the left to see details",gitCommitDetail:"Commit details",gitCommitHash:"Commit",gitCommitAuthor:"Author",gitCommitDate:"Date",gitCommitParents:"Parents",gitCommitRefs:"Refs",gitCommitChangedFiles:"Changed files ({n})",gitCommitNoFiles:"(no file changes)",gitCopyHash:"Copy hash",gitCopyPath:"Copy path",gitCopied:"Copied to clipboard",gitReset:"Reset to this commit",gitResetSoft:"Soft (keep changes staged)",gitResetMixed:"Mixed (keep changes in worktree)",gitResetHard:"Hard (discard changes)",gitResetHardMsg:"Hard reset discards all worktree and staged changes. Continue?",gitResetDone:"Reset to {hash}",gitRevert:"Revert this commit",gitRevertDone:"Reverted {hash}",gitCherryPick:"Cherry-pick onto current",gitCherryPicked:"Cherry-picked {hash}",gitCheckoutCommit:"Checkout this commit",gitCheckoutCommitMsg:"This enters detached HEAD. Checkout {hash}?",gitBranchFrom:"New branch at this commit",gitBranchFromTitle:"New branch at this commit",gitBranchFromPlaceholder:"New branch name",gitBranchRename:"Rename",gitBranchRenameTitle:"Rename current branch",gitBranchRenamePlaceholder:"New branch name",gitBranchRenamed:"Renamed to {name}",gitMergeIntoCurrent:"Merge into current",gitMergeDone:"Merged {name}",gitPushBranch:"Push",gitPushed:"Pushed {name}",gitBranchCurrent:"current",gitBranchRemoteGroup:"Remote branches",gitBranchLocalGroup:"Local branches",gitBranchCreateAndSwitch:"Create & switch",gitTagNew:"New tag",gitTagNamePlaceholder:"Tag name, e.g. v1.0.0",gitTagTargetPlaceholder:"Target commit (empty = HEAD)",gitTagMessagePlaceholder:"Message (annotated tag when filled)",gitTagCreate:"Create",gitTagEmpty:"(no tags)",gitTagAnnotated:"annotated",gitView:"View",gitTagCreated:"Tag {name} created",gitTagDeleteMsg:"Delete tag {name}?",gitTagDeleted:"Deleted {name}",gitTagPushed:"Tag {name} pushed",gitTagFetchAll:"Fetch tags from remote",gitTagFetchAllDone:"Fetched tags from remote",gitTagRemoteOnly:"remote",gitTagPull:"Fetch",gitTagPulled:"Fetched tag {name}",gitTagNoRemote:"No remote repo; cannot fetch or publish tags",gitCommitViewTitle:"Commit diff",gitCommitOpenDiff:"View diff of {path}",gitReleaseBtn:"Publish release",gitReleaseTitle:"Publish release (annotated tag + push to remote)",gitReleaseName:"Tag name",gitReleaseTarget:"Based on commit (empty = HEAD)",gitReleaseMsg:"Release notes (required)",gitReleasePublish:"Create & publish",gitReleaseRequireMsg:"Release notes are required",gitReleased:"Published {name} to remote",gitReleaseGhSkip:"GitHub Release not created: {reason}",gitRefresh:"Refresh",gitTabTags:"Tags",gitTabReleases:"Releases",gitReleaseChooseTag:"Choose an existing tag",gitReleaseNotesPlaceholder:"Release notes (shown on the Release page)",gitReleaseCreateForTag:"Create Release",gitReleaseCreated:"Release created: {url}",gitReleaseLoadSkip:"Releases unavailable: {reason}",gitReleaseEmpty:"No releases yet",gitReleaseOpen:"Open",gitRemoteNamePlaceholder:"Name, e.g. origin",gitRemoteUrlPlaceholder:"URL, e.g. https://github.com/user/repo.git",gitRemoteAdd:"Add remote",gitRemoteEmpty:"(no remotes)",gitRemoteAdded:"Remote {name} added",gitRemoteRemoveMsg:"Remove remote {name}?",gitRemoteRemoved:"Remote {name} removed",gitRemoteSetUrl:"Set URL",gitRemoteUrlTitle:"Set remote URL",gitRemoteUrlSaved:"Remote URL updated",gitStashView:"View contents",gitStashNew:"Create stash",gitStashNone:"(worktree clean, nothing to stash)",gitOpRunning:"Running…",gitOpFailed:"Operation failed",svnMenu:"SVN",svnPanel:"Open SVN Manager",svnPanelTitle:"SVN Manager",svnRepo:"Working copy: ",svnUpdate:"Update",svnCommitBtn:"Commit",svnAdd:"Add",svnAdded:"Added to version control",svnIgnore:"Ignore (svn:ignore)",svnRevert:"Revert",svnCleanup:"Clean up",svnResolve:"Resolve",svnDiff:"Diff",svnBlame:"Blame",svnCheckout:"Checkout",svnFailed:"SVN command failed",svnRailChanges:"Changes",svnRailLog:"Commit log",svnNoUrl:"Repository URL unavailable",svnRunning:"Running…",svnRefresh:"Refresh",svnLoading:"Loading…",svnSelectAll:"Select all",svnModifiedCount:"Local changes ({n})",svnNoChanges:"No local changes",svnCommitPlaceholder:"Enter commit message…",svnCommitSelected:"Will commit {n} selected file(s)",svnCommitAll:"Will commit all local changes",svnOutput:"Command output",svnNoOutput:"(no output)",svnNoCli:"svn CLI not found; please install Subversion",svnDone:"SVN command finished",svnUpdateSummaryFrom:"Update complete: r{from} → r{to}, {n} item(s) changed",svnUpdateSummary:"Update complete: {n} item(s) changed, now at r{to}",svnAlreadyLatest:"Already up to date at r{rev}; nothing to update",svnLogEmpty:"No log yet",svnLogToggle:"Click to expand / collapse this commit",svnLogNoPaths:"No changed files recorded for this commit",svnLogOpenDiff:"Show this file's diff in this commit",svnDiffTitle:"Diff · ",svnBlameTitle:"Blame · ",svnCheckoutUrlPlaceholder:"Repository URL (e.g. https://svn.example.com/svn/repo)",svnCheckoutTargetPlaceholder:"Checkout into local directory",repoCloneTitle:"Clone / Checkout Repository",repoCloneKindGit:"Git",repoCloneKindSvn:"SVN",repoCloneTitleGit:"Clone Git Repository",repoCloneTitleSvn:"Checkout SVN Repository",repoCloneCaptionGit:"Clone a full copy of a remote repository to local",repoCloneCaptionSvn:"Check out a specific revision from an SVN server",repoCloneTargetGit:"Will clone into",repoCloneTargetSvn:"Will check out into",repoCloneUrl:"Repository URL",repoCloneUrlGitPlaceholder:"Repository URL (e.g. https://github.com/owner/repo.git)",repoCloneDir:"Target directory",repoCloneDirPlaceholder:"Parent directory to clone into",repoCloneBrowse:"Browse…",repoCloneName:"Subdirectory name",repoCloneNamePlaceholder:"Leave empty to infer from URL",repoCloneShallow:"Shallow clone (latest commit only)",repoCloneShallowHint:"Faster and smaller, but without history",repoCloneRevision:"Revision",repoCloneRevisionPlaceholder:"Leave empty for latest (HEAD)",repoCloneAccount:"Account",repoCloneAccountAuto:"Auto (match by URL)",repoCloneAccountNew:"New account…",repoCloneTargetEmpty:"Please fill in the repository URL and target directory",repoCloneRunningGit:"Cloning Git repository…",repoCloneRunningSvn:"Checking out SVN repository…",repoCloneElapsed:"Elapsed {s}s",repoCloneKeepOpen:"Keep this window open; you will be notified when done.",repoCloneActionGit:"Clone",repoCloneActionSvn:"Checkout",repoCloneDoneGit:"Repository cloned: {name}",repoCloneDoneSvn:"Repository checked out: {name}",menuCloneGit:"Clone Git Repository…",menuCloneSvn:"Checkout SVN Repository…",svnNotRepoTip:"Not an SVN working copy. Fill in the form above to check out a repository.",svnCheckedOut:"Repository checked out",svnStAdded:"Added",svnStModified:"Modified",svnStDeleted:"Deleted",svnStReplaced:"Replaced",svnStConflicted:"Conflicted",svnStMissing:"Missing",svnStObstructed:"Obstructed",svnStUnversioned:"Unversioned",svnStIgnored:"Ignored",svnStLocked:"Locked",saveConfig:"Save",recycleBin:"Recycle Bin",recycleRestore:"Restore",recycleDelete:"Delete permanently",recycleEmpty:"Empty Recycle Bin",recycleEmptyConfirm:"Empty the Recycle Bin? This cannot be undone.",recycleDeleteConfirm:'Permanently delete "{name}"? This cannot be undone.',recycleDeleteConfirmMulti:"Permanently delete the {count} selected items? This cannot be undone.",recycleEmptying:"Emptying Recycle Bin…",recycleEmptyProgress:"Emptying Recycle Bin: {count} item(s) left",recycleEmptyDone:"Recycle Bin emptied",recycleEmptyList:"The Recycle Bin is empty",recycleRestored:"Restored to original location",recycledDeleted:"Permanently deleted",terminal:"Terminal",terminalTitle:"Terminal",terminalMinimize:"Minimize to task bar",terminalCloseTitle:"Close terminal",terminalClose:"Close",terminalNew:"New terminal",terminalShellSwitch:"Switch default shell (cmd / powershell)",terminalAdmin:"Administrator",terminalAdminNormal:"Standard",terminalAdminOn:"Running as administrator — commands here have admin rights",terminalAdminOff:"Standard privileges — commands here cannot change system-level settings",terminalAdminHint:'Launch dsh web as administrator (right-click the launcher → "Run as administrator") so every terminal in the panel gets admin rights — the shell inherits the host process token.',terminalClear:"Clear screen",terminalResizeTitle:"Drag to resize terminal",terminalDockDragTitle:"Click to expand · drag to move · right-click for menu",terminalDockSessions:"Minimized terminals",terminalDockCloseAll:"Close all",terminalTab:"{n}",scrollLeft:"Scroll left",scrollRight:"Scroll right",termFontSmaller:"Smaller font",termFontLarger:"Larger font",termInputFailed:"Terminal input failed: {msg}",termSshBadge:"This terminal is logged in to a remote SSH host",termSshReconnect:"Reconnect",termSshReconnectTitle:"Log in to the remote host again (auto, using the saved password / key)",termSearchPlaceholder:"Search terminal output…",termSearchCase:"Match case",termSearchPrev:"Previous",termSearchNext:"Next",termSearchClose:"Close search",termCopyHint:"Ctrl+C copy · Ctrl+V paste · Ctrl+F search",pmTitle:"Extensions",pmManage:"Manage",pmSort:"Sort",pmSortInstall:"Sort by Install Order",pmSortName:"Sort by Name",pmSortSource:"Sort by Source",pmInstalled:"Installed",pmSearchPlaceholder:"Search in Installed",pmImportFromFile:"Install from VSIX…",pmImportFromUrl:"Install from URL…",pmEnableAll:"Enable All",pmDisableAll:"Disable All",pmEnable:"Enable",pmDisable:"Disable",pmRemove:"Uninstall",pmMoreActions:"More Actions",pmPull:"Fetch",pmPulling:"…",pmUrlPlaceholder:"https://example.com/plugin.js",srcBuiltin:"Built-in",srcFile:"Local",srcUrl:"URL",pmEmptyWithQuery:"No extensions match “{q}”<br>Try another keyword, or install via the “···” menu",pmEmptyNoPlugins:"No extensions yet<br>Install one from a local file or URL via the “···” menu",pmImportFailed:"Failed to import {name}: {msg}",pmUrlImported:"Installed and enabled from URL",pmUrlImportFailed:"URL import failed: {msg}",pmNeedsProject:"Enabled · opens a project folder to show in the sidebar",vsExtNeedProject:"{n} extension(s) enabled — open a project folder to show them in the sidebar",pmCheckEmpty:"File is empty.",pmCheckNotPlugin:"Not a plugin file: missing __ModuleLoader__ registration or activityBar calls.",pmCheckNeedsHost:"This plugin requires host API v{need}; this workbench provides v{have}. Upgrade and retry.",pmCheckNoContrib:"The plugin registered no contribution points and was rolled back. Check it against this workbench API.",pmRestoreFailed:"Failed to restore plugin {name}: {msg}",pmEnableFailed:"Failed to enable {name}: {msg}",pmReloadRequired:"{n} plugin(s) enabled but could not hot-load; a window reload is required.",pmReloadNow:"Reload Window",pmReloadDismiss:"Not now"};function pp(t,e){return t===void 0?"":e?t.replace(/\{([^}]+)\}/g,(n,a)=>e[a]!==void 0?String(e[a]):`{${a}}`):t}function hp(t,e){return(t.toLowerCase().startsWith("zh")?fp:Gr)[e]??Gr[e]}function nr(){return typeof window<"u"?window.__DSH_FILE_WORKBENCH__?.locale:void 0}function sd(){const t=nr()?.getSnapshot()?.active;return t||(typeof navigator<"u"&&navigator.language?navigator.language:"en")}const Hs=g(sd());if(typeof window<"u"){const t=nr();t&&typeof t.subscribe=="function"&&t.subscribe(()=>{Hs.value=sd()})}function od(t,e,n){return pp(hp(t,e),n)}function Ft(){const t=g(Hs.value.toLowerCase().startsWith("zh"));if(typeof window<"u"){const e=nr();e&&typeof e.subscribe=="function"&&e.subscribe(()=>{t.value=Hs.value.toLowerCase().startsWith("zh")})}return{locale:jr(Hs),isZh:jr(t),t:(e,n)=>od(Hs.value,e,n)}}function v(t,e){return od(Hs.value,t,e)}function ga(){return Hs.value.toLowerCase().startsWith("zh")}const id={home:'<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',up:'<line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 11 12 4 19 11"/>',compass:'<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',folder:'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',folderOpen:'<path d="M6 14l1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"/>',search:'<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',chat:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',bot:'<rect x="4" y="9" width="16" height="11" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M10 6v3"/><line x1="8" y1="14" x2="9" y2="14"/><line x1="15" y1="14" x2="16" y2="14"/><line x1="12" y1="14.5" x2="12" y2="18"/>',gear:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>',terminal:'<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>',sun:'<circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/><line x1="4.5" y1="4.5" x2="6.5" y2="6.5"/><line x1="17.5" y1="17.5" x2="19.5" y2="19.5"/><line x1="4.5" y1="19.5" x2="6.5" y2="17.5"/><line x1="17.5" y1="6.5" x2="19.5" y2="4.5"/>',moon:'<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',refresh:'<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>',star:'<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',close:'<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',file:'<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/>',fileText:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',video:'<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>',music:'<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',archive:'<polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/>',grid:'<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',viewList:'<path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/>',viewDetails:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 9v12"/>',code:'<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',trash:'<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',edit:'<path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z"/><path d="M15 5l4 4"/>',cut:'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="8.12" y1="8.12" x2="15.88" y2="15.88"/><line x1="15.88" y1="8.12" x2="8.12" y2="15.88"/>',copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>',paste:'<path d="M6 9V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4"/><rect x="4" y="7" width="16" height="14" rx="2"/><path d="M9 12h6"/><path d="M9 16h6"/>',eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',eyeOff:'<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>',undo:'<path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-15-6.7L3 13"/>',redo:'<path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 15-6.7L21 13"/>',print:'<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',pin:'<path d="M12 17v5"/><path d="M9 3h6l1 6a2 2 0 0 0 2 2h1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2h1a2 2 0 0 0 2-2z"/>',globe:'<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/>',sparkle:'<path d="M12 3l1.9 4.6 4.6 1.9-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9z"/><circle cx="18.5" cy="5.5" r="1"/>',bug:'<rect x="8" y="6" width="8" height="14" rx="4"/><path d="M19 7l-3 2M5 7l3 2M19 17l-3-2M5 17l3-2M3 12h4M17 12h4"/><path d="M12 6V3"/>',sync:'<path d="M21 2v6h-6"/><path d="M3 22v-6h6"/><path d="M21 8a9 9 0 0 0-14.14-5.86L3 5.96"/><path d="M3 16a9 9 0 0 0 14.14 5.86L21 18.04"/>',arrowRight:'<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',arrowLeft:'<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 5 5 12 12 19"/>',warning:'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',chevronLeft:'<polyline points="15 18 9 12 15 6"/>',chevronRight:'<polyline points="9 18 15 12 9 6"/>',chevronsLeft:'<polyline points="11 17 6 12 11 7"/><polyline points="18 17 13 12 18 7"/>',chevronsRight:'<polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/>',chevronUp:'<polyline points="18 15 12 9 6 15"/>',chevronDown:'<polyline points="6 9 12 15 18 9"/>',chevronsUp:'<polyline points="17 11 12 6 7 11"/><polyline points="17 18 12 13 7 18"/>',chevronsDown:'<polyline points="7 6 12 11 17 6"/><polyline points="7 13 12 18 17 13"/>',external:'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>',fileOut:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M11 15c0-4.5-2.5-7-7-7"/><polyline points="7 5 4 8 7 11"/>',info:'<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',monitor:'<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',sort:'<path d="M3 6h18"/><path d="M6 12h12"/><path d="M9 18h6"/>',message:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',brain:'<path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z"/>',paperclip:'<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/>',check:'<polyline points="20 6 9 17 4 12"/>',save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>',plus:'<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',panellayout:'<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="14" y1="3" x2="14" y2="11"/><line x1="14" y1="15" x2="14" y2="21"/>',hardDrive:'<line x1="22" y1="12" x2="2" y2="12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" y1="16" x2="6.01" y2="16"/><line x1="10" y1="16" x2="10.01" y2="16"/>',git:'<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',tasks:'<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>',clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',activity:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',float:'<path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/><circle cx="9" cy="9" r="2"/><path d="M4 14h6"/>',dock:'<path d="M12 17v5"/><path d="M14 9V4h4V2H6v2h4v5l-2 2v1h8v-1z"/><path d="M17 5h3"/>',fileWord:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M8 17l2-7 2 4 2-4 2 7"/>',fileExcel:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 12l6 6M15 12l-6 6"/>',merge:'<circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/>',tag:'<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>',stash:'<path d="M21 8v13H3V8"/><path d="M1 3h22v5H1z"/><line x1="10" y1="12" x2="14" y2="12"/>',commit:'<circle cx="12" cy="12" r="4"/><line x1="1.05" y1="12" x2="7" y2="12"/><line x1="17.01" y1="12" x2="22.96" y2="12"/>',svn:'<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h10"/><circle cx="19" cy="17" r="2"/>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',mail:'<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',inbox:'<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',send:'<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',bookmark:'<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',unlock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>',key:'<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>',heart:'<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',flag:'<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>',bell:'<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',layers:'<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',database:'<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>',server:'<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>',cloud:'<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>',cloudUpload:'<polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>',cloudDownload:'<polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>',palette:'<circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.436-.652-.436-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.504 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>',pieChart:'<path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',barChart:'<line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>',trendingUp:'<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',trendingDown:'<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/>',box:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',package:'<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',rocket:'<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',target:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',crosshair:'<circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/>',sliders:'<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>',filter:'<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',zap:'<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',flashlight:'<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/><path d="M6.39 15.5 4 17v3h16v-3l-2.39-1.5"/>',map:'<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>',landmark:'<line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/>',wifi:'<path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>',battery:'<rect x="1" y="6" width="18" height="12" rx="2"/><line x1="23" y1="13" x2="23" y2="11"/>',cpu:'<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>',creditCard:'<rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>',gift:'<polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>',award:'<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>',medal:'<circle cx="12" cy="15" r="6"/><path d="M12 12V2l4 4-4 4"/><path d="M8 6l4 6"/>',thumbsUp:'<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>',smile:'<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>',mic:'<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>',camera:'<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',headphones:'<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',play:'<polygon points="5 3 19 12 5 21 5 3"/>',pause:'<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>',stop:'<rect x="5" y="5" width="14" height="14" rx="2"/>',skipForward:'<polygon points="5 4 15 12 5 20 5 4"/><line x1="19" y1="5" x2="19" y2="19"/>',skipBack:'<polygon points="19 20 9 12 19 4 19 20"/><line x1="5" y1="19" x2="5" y2="5"/>',volume:'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>',volumeHigh:'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>',volumeOff:'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>',maximize:'<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>',minimize:'<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/>',move:'<polyline points="5 9 2 12 5 15"/><polyline points="9 5 12 2 15 5"/><polyline points="15 19 12 22 9 19"/><polyline points="19 9 22 12 19 15"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/>',crop:'<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"/><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"/>',wand:'<path d="M15 4V2m0 20v-2M8.5 8.5 7 7m12 12-1.5-1.5M4 15H2m20 0h-2M4 4l1.5 1.5M18.5 18.5 20 20"/><path d="M14 10 4 20l-2-2L12 8z"/>',anchor:'<circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/>',feather:'<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/>',lifeBuoy:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"/><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"/><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"/><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"/>',rss:'<path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>',command:'<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>',function:'<path d="M9 11 6 21M15 3a3 3 0 0 0-3 3v1M18 9h-8m2 4c0 3-1 5-3 6"/>',binary:'<rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/>',flow:'<rect x="2" y="3" width="6" height="6" rx="1"/><rect x="16" y="15" width="6" height="6" rx="1"/><path d="M8 6h6a2 2 0 0 1 2 2v7"/><path d="M11 18H5a2 2 0 0 1-2-2v-1"/>',gitBranch:'<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',gitCommit:'<circle cx="12" cy="12" r="4"/><line x1="1.05" y1="12" x2="7" y2="12"/><line x1="17.01" y1="12" x2="22.96" y2="12"/>',fork:'<circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="12" cy="18" r="3"/><path d="M6 9v1a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V9"/><line x1="12" y1="13" x2="12" y2="15"/>',cube:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',puzzle:'<path d="M19.44 12.99c.72-.23 1.56.06 1.56 1.01 0 .55-.45 1-1 1h-2v2c0 .55-.45 1-1 1-.95 0-1.24.84-1.01 1.56.18.55-.06 1.43-.99 1.43-.55 0-1-.45-1-1v-2h-2c-.55 0-1-.45-1-1 0-.95-.84-1.24-1.56-1.01-.55.18-1.43-.06-1.43-.99 0-.55.45-1 1-1h2v-2c0-.55.45-1 1-1 .95 0 1.24-.84 1.01-1.56-.18-.55.06-1.43.99-1.43.55 0 1 .45 1 1v2h2c.55 0 1 .45 1 1 0 .95.84 1.24 1.56 1.01z"/>'};function Ho(t){return Object.prototype.hasOwnProperty.call(id,t)}const vp=["width","height","innerHTML"],se=vt({__name:"Icon",props:{name:{},size:{default:15}},setup(t){const e=t,n=I(()=>id[e.name]??""),a=I(()=>typeof e.size=="number"?`${e.size}px`:e.size);return(r,d)=>n.value?(l(),c("svg",{key:0,class:"fw-icon",viewBox:"0 0 24 24",width:a.value,height:a.value,fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",innerHTML:n.value},null,8,vp)):M("",!0)}}),mp={class:"fw-confirm-ico","aria-hidden":"true"},gp={class:"fw-confirm-msg"},yp={key:0,class:"fw-confirm-msg"},ad=vt({__name:"ConfirmDialog",setup(t){const{t:e}=Ft(),n=I(()=>tt.okText||e("confirmOk")),a=I(()=>tt.cancelText||e("cancel"));function r(p){p||Oo(tt.kind==="prompt"||tt.choices.length?null:!1)}function d(p){Oo(p)}function h(){tt.kind==="prompt"?Oo(tt.inputValue.trim()):Oo(!0)}function u(){Oo(tt.kind==="prompt"?null:!1)}return(p,w)=>{const b=Es,k=Fn,F=dn;return l(),Xe(F,{"model-value":s(tt).visible,class:"fw-confirm-dialog",width:"380px","align-center":"","append-to-body":"","show-close":!0,"close-on-click-modal":!1,"close-on-press-escape":!1,"onUpdate:modelValue":r},{footer:oe(()=>[s(tt).choices.length?(l(!0),c(ie,{key:0},Pe(s(tt).choices,L=>(l(),Xe(k,{key:L.id,type:L.primary?"primary":"default",onClick:D=>d(L.id)},{default:oe(()=>[de(i(L.text),1)]),_:2},1032,["type","onClick"]))),128)):(l(),c(ie,{key:1},[m(k,{onClick:u},{default:oe(()=>[de(i(a.value),1)]),_:1}),m(k,{type:"primary",onClick:h},{default:oe(()=>[de(i(n.value),1)]),_:1})],64))]),default:oe(()=>[o("div",{class:te(["fw-confirm-body",{"fw-confirm-up":s(tt).kind==="confirm"}])},[s(tt).kind==="confirm"?(l(),c(ie,{key:0},[o("span",mp,[m(se,{name:"warning",size:22})]),o("p",gp,i(s(tt).message),1)],64)):(l(),c(ie,{key:1},[s(tt).message?(l(),c("p",yp,i(s(tt).message),1)):M("",!0),s(tt).multiline?(l(),Xe(b,{key:1,modelValue:s(tt).inputValue,"onUpdate:modelValue":w[0]||(w[0]=L=>s(tt).inputValue=L),type:"textarea",rows:5,placeholder:s(tt).inputPlaceholder,onKeydown:bt(xe(h,["ctrl","prevent"]),["enter"])},null,8,["modelValue","placeholder","onKeydown"])):(l(),Xe(b,{key:2,modelValue:s(tt).inputValue,"onUpdate:modelValue":w[1]||(w[1]=L=>s(tt).inputValue=L),placeholder:s(tt).inputPlaceholder,clearable:"",onKeyup:bt(h,["enter"])},null,8,["modelValue","placeholder"]))],64))],2)]),_:1},8,["model-value"])}}}),wp={ok:3e3,info:3e3,warning:4500,error:6e3},bp=5,qr="__DSH_FW_TOAST__";function ya(){const t=globalThis;let e=t[qr];return e||(e={items:g([]),seq:0,app:null,el:null},t[qr]=e),e}const Ha=ya().items;function wa(t,e,n){const a=ya(),r=++a.seq,d=n??wp[t];for(a.items.value.push({id:r,kind:t,message:e,duration:d,remain:d,paused:!1});a.items.value.length>bp;)a.items.value.shift();return r}function Kr(t){const e=ya(),n=e.items.value.findIndex(a=>a.id===t);n!==-1&&e.items.value.splice(n,1)}function Y(t,e,n){wa(t,e,n)}const fs=(t,e)=>void wa("error",t,e),co=(t,e)=>void wa("warning",t,e),rs=(t,e)=>void wa("ok",t,e),kp=3e4,uo=new Map,Ti=new Map;function Qs(t,e,n=kp){const a=uo.get(t);if(a&&Date.now()-a.at<n)return Promise.resolve(a.value);const r=Ti.get(t);if(r)return r;const d=e().then(h=>(uo.set(t,{at:Date.now(),value:h}),Ti.delete(t),h),h=>{throw Ti.delete(t),h});return Ti.set(t,d),d}function ba(t=""){let e=0;if(!t)return e=uo.size,uo.clear(),e;for(const n of[...uo.keys()])n.startsWith(t)&&(uo.delete(n),e++);return e}function ld(t,e,n){const a=new URL(t,e);return a.protocol=a.protocol==="https:"?"wss:":"ws:",a.pathname=`${a.pathname.replace(/\/+$/,"")}/${n}`,a.search="",a.hash="",a.toString()}const xp={},_p="/api/dsh-file-workbench";function Cp(){if(typeof window<"u"&&window.__DSH_FILE_WORKBENCH__?.apiBase)return window.__DSH_FILE_WORKBENCH__.apiBase.replace(/\/$/,"");const t=xp?.VITE_API_BASE??"";return t?t.replace(/\/$/,""):_p}const Yn=Cp(),Wo=gt({seq:0,pending:0}),Hi=new Map;function Sp(){for(const t of Hi.values())t.abort();Hi.clear()}class rd extends Error{constructor(){super("request aborted"),this.name="AbortRequestError"}}class Xs extends Error{constructor(e,n,a){super(e),this.status=n,this.code=a,this.name="ApiError"}}const $p=new Set(["mtime-conflict"]);function cd(t,e){switch(t){case 403:return v("errForbidden");case 404:return v("errNotFound");case 409:return v("errNoRoot");case 413:return v("errTooLarge");case 500:return v("errServer");default:return e}}function dd(t){return t instanceof rd||t instanceof DOMException&&t.name==="AbortError"}async function We(t,e,n,a){const r=++Wo.seq;Wo.pending++;const d=new AbortController;Hi.set(r,d);const h=()=>d.abort();a?.signal&&(a.signal.aborted?d.abort():a.signal.addEventListener("abort",h,{once:!0}));const u={method:t,headers:{},signal:d.signal};n!==void 0&&(u.headers={"content-type":"application/json"},u.body=JSON.stringify(n));try{let p;try{p=await fetch(`${Yn}${e}`,u)}catch(b){throw d.signal.aborted?new rd:(a?.silent||fs(v("errNetwork")),b instanceof Error?b:new Error(String(b)))}const w=await p.json().catch(()=>({ok:!1,error:"bad response"}));if(!w.ok){const b=w.error||`HTTP ${p.status}`;throw!!w.code&&$p.has(w.code)||(p.status===403&&/outside (root|workspace)/i.test(b)?a?.silent||fs(v("workspaceOutside")):a?.silent||fs(cd(p.status,b))),new Xs(b,p.status,w.code)}return w.data}finally{Wo.pending--,Hi.delete(r),a?.signal?.removeEventListener("abort",h)}}const Ht=t=>{const e=new URLSearchParams;for(const[a,r]of Object.entries(t))r&&e.set(a,r);const n=e.toString();return n?`?${n}`:""};function Ii(t,e){return Qs(`list:${e??""}:${t}`,()=>We("GET",`/list${Ht({key:e,path:t})}`))}function mn(t){return t.then(e=>(ba(),e))}function sr(t){return t.then(e=>(ba("git"),e))}function Cs(t=""){return ba(t)}function Tp(t){return We("GET",`/root${Ht({key:t})}`)}function or(t,e){return We("POST","/root",{key:e,path:t})}function dl(t,e,n={}){return mn(We("POST","/save",{key:n.key,path:t,content:e,encoding:n.encoding,hasBom:n.hasBom,eol:n.eol,expectedMtime:n.expectedMtime,force:n.force}))}function Ep(t,e){return Qs(`files:${e??""}:${t}`,()=>We("GET",`/files${Ht({key:e,path:t})}`))}function Np(t,e={}){return We("GET",`/search${Ht({key:e.key,q:t,path:e.path,limit:e.limit?.toString(),case:e.caseSensitive?"1":void 0,regex:e.regex?"1":void 0})}`)}function ud(t,e,n={}){return mn(We("POST","/replace",{key:n.key,scope:n.scope,q:t,replacement:e,caseSensitive:n.caseSensitive,regex:n.regex,wholeWord:n.wholeWord,preserveCase:n.preserveCase,include:n.include||void 0,exclude:n.exclude||void 0}))}function Dp(t,e={}){return We("GET",`/grep${Ht({key:e.key,q:t,path:e.path,sub:e.sub||void 0,case:e.caseSensitive?"1":void 0,regex:e.regex?"1":void 0,word:e.wholeWord?"1":void 0,include:e.include||void 0,exclude:e.exclude||void 0})}`)}function Wt(t){return t.startsWith("ssh://")}function fd(t){return Qs(`mycomputer:${t??""}`,()=>We("GET",`/mycomputer${Ht({key:t})}`))}function pd(){return Qs("drives",()=>We("GET","/drives"))}function Rp(){return We("GET","/ssh/hosts",void 0,{silent:!0})}function Ap(t){return We("POST","/ssh/add",t)}function Mp(t){return We("POST","/ssh/update",t)}function Pp(t){return We("POST","/ssh/remove",{id:t})}function ul(t){return We("POST","/ssh/test",t)}function Fp(t){return We("POST","/ssh/ping",{id:t},{silent:!0})}function Lp(t){return We("POST","/ssh/cache",{path:t})}function Op(){return We("GET","/recycle-list")}function Ip(){return We("GET","/recycle-count")}function Vp(t){return mn(We("POST","/recycle-restore",{fullPath:t}))}function zp(t){return mn(We("POST","/recycle-delete",{fullPath:t}))}function jp(){return mn(We("POST","/recycle-empty",{}))}function Bp(t,e){return We("GET",`/browse${Ht({key:e,path:t})}`)}function Up(t){return`${Yn}/download?path=${encodeURIComponent(t)}`}function Xr(t){return`${Yn}/_read-image?path=${encodeURIComponent(t)}`}function Hp(t,e,n){const a=new URLSearchParams({session:e.session,shell:e.shell});return e.cwd&&a.set("cwd",e.cwd),e.key&&a.set("key",e.key),Gp(`/exec-stream?${a.toString()}`,t,n)}function Wp(t,e,n){const a=typeof location<"u"?location.href:"http://127.0.0.1/",r=ld(Yn,a,"exec-mux-ws")+(e.key?`?key=${encodeURIComponent(e.key)}`:"");return new Promise(d=>{let h;try{h=new WebSocket(r)}catch{d();return}let u=!1;const p=()=>{if(!u){u=!0;try{n?.removeEventListener("abort",w)}catch{}try{h.close()}catch{}d()}},w=()=>p();n?.addEventListener("abort",w),h.onmessage=b=>{try{t(JSON.parse(String(b.data)))}catch{}},h.onclose=p,h.onerror=()=>{}})}function Gp(t,e,n){return new Promise(a=>{const r=new EventSource(`${Yn}${t}`);let d=!1;const h=()=>{if(!d){d=!0;try{r.close()}catch{}a()}};r.onmessage=u=>{try{e(JSON.parse(u.data))}catch{}},r.onerror=h,n&&(n.aborted?h():n.addEventListener("abort",h,{once:!0}))})}function Wa(t){return We("POST","/exec-open",t)}function qp(t,e,n){return We("POST","/exec-resize",{session:t,cols:e,rows:n},{silent:!0})}function hd(t,e){return We("POST","/exec-input",{session:t,data:e},{silent:!0})}function Kp(t){return We("POST","/exec-kill",{session:t})}function Xp(){return We("GET","/term-env")}function Yp(t,e,n,a){return We("POST","/subagent/spawn",{path:t,isDir:e,instruction:n,session:a})}function Wi(t,e){return mn(We("POST","/mkdir",{key:e,path:t}))}function Gi(t,e,n){return mn(We("POST","/rename",{key:n,from:t,to:e}))}function fl(t,e){return mn(We("DELETE",`/remove${Ht({key:e,path:t})}`))}function vd(t,e){return mn(We("POST","/touch",{key:e,path:t}))}function Jp(t,e,n){return mn(We("POST","/copy",{key:n,src:t,destDir:e}))}async function Qp(t,e,n){Wo.pending++;try{const a=await fetch(`${Yn}/upload${Ht({dir:t,name:e.name,key:n})}`,{method:"POST",body:e}),r=await a.json().catch(()=>({ok:!1,error:"bad response"}));if(!r.ok)throw new Error(r.error||`HTTP ${a.status}`);return ba(),r.data}finally{Wo.pending--}}function qi(t){return We("GET",`/detail${Ht({path:t})}`)}async function pl(t,e){try{return await We("GET",`/detail${Ht({path:t})}`,void 0,{silent:!0}),!0}catch(n){if(n instanceof Xs&&n.status===404)return!1;throw!dd(n)&&!e?.silent&&fs(n instanceof Xs?cd(n.status,n.message):v("errNetwork")),n}}async function hl(t){try{return await We("GET",`/detail${Ht({path:t})}`,void 0,{silent:!0})}catch{return null}}function vl(t,e={}){return We("GET",`/read${Ht({path:t,encoding:e.encoding,bom:e.hasBom===void 0?void 0:e.hasBom?"1":"0"})}`)}function Yr(t,e,n){return mn(We("POST","/compress",{key:n,path:t,to:e}))}function Zp(t,e,n){return mn(We("POST","/extract",{key:n,zipPath:t,destDir:e}))}function md(t){return We("POST","/openExternal",{path:t})}function eh(t){return Qs(`gitstatus:${t}`,()=>We("GET",`/git/status${Ht({path:t})}`))}function th(t){return We("GET",`/git/diff${Ht({path:t})}`)}function nh(t){return sr(We("POST","/git/add",{path:t}))}function gd(t){return sr(We("POST","/git/ignore",{path:t}))}function sh(t,e){return sr(We("POST","/git/commit",{path:t,message:e}))}function oh(t){return mn(We("POST","/git/discard",{path:t}))}function ei(t){return Qs(`gitpanel:${t}`,()=>We("GET",`/git/panel${Ht({path:t})}`))}function Go(t,e){return We("POST","/git/run",{path:t,args:e})}function ih(t,e){return mn(We("POST",t==="git"?"/git/clone":"/svn/checkout",e))}function Jr(t,e,n,a){return We("POST","/git/gh-release",{path:t,tag:e,name:n,body:a})}function ah(t){return We("GET",`/git/gh-releases${Ht({path:t})}`)}function yd(){return We("GET","/git/config")}function wd(t,e){return We("POST","/git/config",{name:t,email:e})}function ps(t){return Qs(`svninfo:${t}`,()=>We("GET",`/svn/info${Ht({path:t})}`))}function Qt(t,e){return We("POST","/svn/run",{path:t,args:e})}function lh(){return We("GET","/accounts")}function rh(t){return We("POST","/accounts/add",t)}function bd(t,e){return We("GET",`/accounts/match${Ht({kind:t,url:e})}`,void 0,{silent:!0})}function ch(t){return We("POST","/accounts/update",t)}function dh(t){return We("POST","/accounts/remove",{id:t})}function uh(t){return We("POST","/accounts/test",t)}function fh(t){return We("POST","/accounts/apply",{id:t})}function kd(){return We("GET","/persist")}function Zs(t,e){return We("POST","/persist",{k:t,v:e})}async function ph(){const t=await We("GET","/persist?k=taskLogs");return Array.isArray(t?.taskLogs)?t.taskLogs:[]}function hh(t){return We("POST","/persist",{k:"taskLogs",v:t})}async function vh(){return(await We("GET","/task-archives"))?.map??{}}function ir(t){return We("POST","/task-archives",{map:t})}function Ns(){if(typeof window>"u")return null;const t=window.__DSH_FILE_WORKBENCH__?.officialTerminal;return t&&typeof t.create=="function"?t:null}function mh(){try{return Ns()?.available()??!1}catch{return!1}}const Tt=g([]),Ys=g(""),cs=g(null),kn=g(null),hs=g({});function ml(t){return hs.value[t]===!0}function gh(t){hs.value[t]||(hs.value={...hs.value,[t]:!0})}function ar(t){if(!hs.value[t])return;const e={...hs.value};delete e[t],hs.value=e}function yh(){Object.keys(hs.value).length&&(hs.value={})}const Pn=g({}),Qr=1500,wh=/\x1b\[[0-9;?]*[ -/]*[@-~]/g;function Ki(t,e){const n=e.replace(wh,"");if(!n.trim())return;let r=(Pn.value[t]??"")+n;r.length>Qr&&(r=r.slice(r.length-Qr)),Pn.value={...Pn.value,[t]:r}}function bh(t){return Pn.value[t]??""}function kh(t){if(Pn.value[t]===void 0)return;const e={...Pn.value};delete e[t],Pn.value=e}async function xd(){if(cs.value===null)try{const t=await Xp();cs.value=t.elevated===!0}catch{}}let Zr=0;function xh(){return Zr+=1,Zr}const ec=4*1024*1024;function ko(t){return t.length>ec?t.slice(t.length-ec):t}const xo=new Map;function tc(t,e){e?xo.set(t,e):xo.delete(t)}let fo=null,lr="",Ga=null;const _d="__DSH_FW_TERM_MUX_SSE__";function _h(){const e=globalThis[_d];if(e&&typeof e.dispose=="function")try{e.dispose()}catch{}}function Cd(t){const e=Tt.value.find(n=>n.session===t.session);if(e){if(t.type==="output")e.output=ko(e.output+t.text),xo.get(e.id)?.(t.text),Ki(e.id,t.text);else if(t.type==="cwd")e.cwd=t.cwd;else if(t.type==="exit"){if(e.connected=!1,e.ssh){Ki(e.id,`
[ssh] session closed
`),e.output=ko(e.output+`\r
\x1B[33m[ssh] session closed — 点「重连」重新登录\x1B[0m\r
`);return}window.setTimeout(()=>void rr(e),300)}}}function Sd(t){return t?.message||String(t)}async function $d(t,e){if(t.ssh){const a=t.ssh;try{const r=await Wa({session:t.session,kind:"ssh",hostId:a.hostId,remote:a.remote,key:e});if(r?.kind!=="ssh")throw new Error("宿主未启用远端终端（缺少 /exec-open 的 kind 支持），请重启 dsh web");return t.sshDegraded=!1,r}catch(r){const d=Sd(r);t.output=ko(t.output+`\r
\x1B[33m[ssh] 自动登录 ${a.label} 失败：${d}\x1B[0m\r
\x1B[2m[ssh] 已回退到本机 ssh 客户端，请手动输入口令；修好后可用页脚「重连」再试直连。\x1B[0m\r
`),Ki(t.id,`[ssh] auto login failed: ${d}
`),t.sshDegraded=!0,t.cwd="";const h=await Wa({session:t.session,kind:"local",shell:t.shell,key:e});return t.initCmd=t.fallbackCmd,Xi(t),h}}const n=await Wa({session:t.session,kind:"local",shell:t.shell,cwd:t.cwd||void 0,key:e});return Xi(t),n}async function rr(t){if(!(!Tt.value.includes(t)||t.connected)){if(t.output="",Pn.value={...Pn.value,[t.id]:""},t.backend==="official"){Ns()?.close(t.id),t.connected=!0,Nd(t);return}try{const e=await $d(t,lr||void 0);e?.cwd&&(t.cwd=e.cwd),t.connected=!0,Td()}catch{t.connected=!1}}}function Td(){if(fo)return;_h();const t=new AbortController;fo=t;const e={dispose:()=>ka()};globalThis[_d]=e;const n=async()=>{if(!t.signal.aborted){try{await Wp(Cd,{key:lr},t.signal)}catch{}if(t.signal.aborted){fo===t&&(fo=null);return}window.setTimeout(()=>void n(),500)}};n()}function ka(){fo?.abort(),fo=null}function Ch(){Tt.value.some(t=>t.connected)||ka()}function Xi(t){const e=t.initCmd;e&&(t.initCmd=void 0,window.setTimeout(()=>{t.connected&&(t.backend==="official"?Ns()?.write(t.id,`${e}\r`):hd(t.session,`${e}\r`))},800))}function nc(t,e){const n=new AbortController;t.streamAbort=n;const a=async()=>{if(!(!t.connected||n.signal.aborted)){try{await Hp(r=>Cd({...r,session:t.session}),{session:t.session,cwd:t.cwd||void 0,key:e,shell:t.shell},n.signal)}catch{}t.connected&&!n.signal.aborted?window.setTimeout(()=>void a(),500):t.connected=!1}};Xi(t),a()}let sc=!1;function Ed(t){return Tt.value.find(e=>e.id===t&&e.backend==="official")}function Sh(t){const e=Ed(t.tag);e&&(e.output=ko(e.output+t.text),xo.get(e.id)?.(t.text),Ki(e.id,t.text))}function $h(t){const e=Ed(t.tag);if(e){if(t.cwd&&t.cwd!==e.cwd&&(e.cwd=t.cwd),t.exited){e.connected=!1,window.setTimeout(()=>void rr(e),300);return}if(t.phase==="connected"&&!e.connected)e.connected=!0,Xi(e);else if(t.phase==="failed"&&t.error){const n=`\r
\x1B[33m[term] ${t.error}\x1B[0m\r
`;e.output=ko(e.output+n),xo.get(e.id)?.(n)}}}function Th(){sc||typeof window>"u"||(sc=!0,window.addEventListener("dshfw-ot-data",t=>Sh(t.detail)),window.addEventListener("dshfw-ot-status",t=>$h(t.detail)))}async function Nd(t){const e=Ns();if(!e){t.backend=void 0,t.connected=!1,Yi(t);return}Th();const n=await e.create(t.id,{cols:80,rows:24}).catch(()=>null);if(n===null){t.backend=void 0,t.connected=!1,Yi(t);return}if(!Tt.value.includes(t)){e.close(t.id);return}n.cwd&&(t.cwd=n.cwd)}function Yi(t,e){if(!t.connected){if(t.connected=!0,e&&(lr=e),!t.ssh&&mh()){t.backend="official",Nd(t);return}if(t.backend=void 0,Ga===!1){nc(t,e);return}Td(),$d(t,e).then(n=>{Ga=!0,n?.cwd&&(t.cwd=n.cwd)}).catch(n=>{n?.status===404&&(Ga=!1,Tt.value.some(a=>a.connected)||ka()),nc(t,e)})}}const Eh=16,Nh=512,Dh=/[\r\n\x03\x04\x1a]/,ds=new Map;function Dd(t){let e=ds.get(t);return e||(e={pending:"",timer:0,inFlight:!1},ds.set(t,e)),e}function gl(t){const e=Dd(t);if(e.timer&&(window.clearTimeout(e.timer),e.timer=0),!e.pending)return;const n=Tt.value.find(r=>r.session===t);if(n?.backend==="official"){const r=e.pending;e.pending="",Ns()?.write(n.id,r),!e.pending&&!e.timer&&ds.delete(t);return}if(e.inFlight)return;const a=e.pending;e.pending="",e.inFlight=!0,hd(t,a).catch(r=>{Ah(t,r)}).finally(()=>{const r=ds.get(t);r&&(r.inFlight=!1,r.pending?gl(t):r.timer||ds.delete(t))})}const Rh=3e3,oc=new Map,qa=new Set;function Ah(t,e){const n=Tt.value.find(d=>d.session===t);if(!n)return;const a=Sd(e),r=Date.now();if(r-(oc.get(t)??0)>=Rh){oc.set(t,r);const d=`\r
\x1B[31m[term] ${v("termInputFailed",{msg:a})}\x1B[0m\r
`;n.output=ko(n.output+d),xo.get(n.id)?.(d),Y("warning",v("termInputFailed",{msg:a}))}e?.status===404&&Mh(n)}async function Mh(t){if(!(qa.has(t.session)||!Tt.value.includes(t))){qa.add(t.session);try{xa(t),await rr(t)}finally{qa.delete(t.session)}}}function Ph(t,e){if(!e)return;const n=Tt.value.find(r=>r.session===t);if(n&&!n.connected)return;const a=Dd(t);if(a.pending+=e,Dh.test(e)||a.pending.length>=Nh){gl(t);return}a.timer||(a.timer=window.setTimeout(()=>gl(t),Eh))}function Rd(t){if(t){const e=ds.get(t);e&&e.timer&&window.clearTimeout(e.timer),ds.delete(t);return}for(const[e,n]of ds)n.timer&&window.clearTimeout(n.timer),ds.delete(e)}function xa(t){t.connected=!1,t.backend==="official"&&Ns()?.detach(t.id),t.streamAbort?.abort(),t.streamAbort=void 0,Rd(t.session),yl.delete(t.session)}function cr(t){return t.backend==="official"?(Ns()?.close(t.id),Promise.resolve()):Kp(t.session).catch(()=>{})}const yl=new Map;function Fh(t,e,n){if(!e||!n)return;const a=`${e}x${n}`;if(yl.get(t)===a)return;yl.set(t,a);const r=Tt.value.find(d=>d.session===t);if(r?.backend==="official"){Ns()?.resize(r.id,e,n);return}qp(t,e,n).catch(()=>{})}async function ic(t,e){const n=t.backend==="official";xa(t),t.output="",Pn.value={...Pn.value,[t.id]:""},await cr(t),n&&(t.backend=void 0),Yi(t,e)}function Ad(t){const e=Tt.value.findIndex(a=>a.id===t),n=Tt.value[e];if(n&&(xa(n),cr(n),Tt.value.splice(e,1),kh(t),ar(t),Ch(),Ys.value===t)){const a=Tt.value[e]??Tt.value[e-1]??Tt.value[0];Ys.value=a?a.id:""}}async function Lh(){const t=Tt.value.slice();Tt.value=[],Ys.value="",Pn.value={},yh(),ka(),await Promise.all(t.map(e=>(xa(e),cr(e).catch(()=>{}))))}const ui=new Map;let ac=0;function Oh(t){return ui.get(t)}function Ih(t,e){ui.set(t,e),Md()}function Vh(t){ui.delete(t)&&Md()}function Md(){Zs("termWins",Object.fromEntries(ui))}function zh(t){if(!t||typeof t!="object")return;const e=t;for(const[n,a]of Object.entries(e)){if(!a||typeof a!="object")continue;const r=a;typeof r.x=="number"&&typeof r.y=="number"&&typeof r.w=="number"&&typeof r.h=="number"&&ui.set(n,{x:r.x,y:r.y,w:r.w,h:r.h})}}function jh(){return{w:680,h:460,x:Math.max(12,window.innerWidth-680-24),y:Math.max(12,window.innerHeight-460-24)}}function Bh(){ac+=1;const t=jh(),e=ac%8*30;return{w:t.w,h:t.h,x:Math.max(12,t.x-e),y:Math.max(12,t.y-e)}}function lc(){return`t${Date.now().toString(36)}${Math.random().toString(36).slice(2,10)}`}function Uh(t,e){const n={id:lc(),name:xh(),session:lc(),cwd:e?.cwd??"",shell:e?.shell??"cmd",ssh:e?.ssh,fallbackCmd:e?.fallbackCmd||void 0,output:"",connected:!1,initCmd:e?.initCmd||void 0,focusPending:e?.focus===!0};return Tt.value.push(n),Ys.value=n.id,Yi(n,t),n}function rc(t){Ad(t),Vh(t)}function Hh(t){const e=Tt.value.find(n=>n.id===t);return e?.focusPending?(e.focusPending=!1,!0):!1}const qo={showHidden:!0,view:"details",showExtensions:!0,sortKey:"name",asc:!0,theme:"auto",fontFamily:"default",fontSize:13,accentColor:"",allowOutsideRoot:!1,colWidths:{name:300,size:96,type:160},termShell:"cmd",termFontSize:13,txtWordWrap:!1,txtShowStatus:!0,vsGitBarH:0,autoSave:!1,vsMinimap:!0},Ue=gt({...qo}),Pd=["huge","large","medium","small","list","details","content","tiles"];function Wh(t){if(!t||typeof t!="object")return{};const e=t,n={};typeof e.showHidden=="boolean"&&(n.showHidden=e.showHidden),typeof e.showExtensions=="boolean"&&(n.showExtensions=e.showExtensions),Pd.includes(String(e.view))&&(n.view=e.view),["name","size","type","mtime"].includes(String(e.sortKey))&&(n.sortKey=e.sortKey),typeof e.asc=="boolean"&&(n.asc=e.asc),["auto","dark","light"].includes(String(e.theme))&&(n.theme=e.theme),typeof e.fontFamily=="string"&&(n.fontFamily=e.fontFamily.trim()||"default"),typeof e.fontSize=="number"&&e.fontSize>0&&(n.fontSize=e.fontSize),typeof e.accentColor=="string"&&/^#[0-9a-fA-F]{3,8}$/.test(e.accentColor)&&(n.accentColor=e.accentColor),typeof e.allowOutsideRoot=="boolean"&&(n.allowOutsideRoot=e.allowOutsideRoot);const a=e.colWidths;if(a&&typeof a=="object"){const r=(d,h)=>typeof d=="number"&&Number.isFinite(d)&&d>=40?d:h;n.colWidths={name:r(a.name,qo.colWidths.name),size:r(a.size,qo.colWidths.size),type:r(a.type,qo.colWidths.type)}}return(e.termShell==="powershell"||e.termShell==="cmd")&&(n.termShell=e.termShell),typeof e.termFontSize=="number"&&e.termFontSize>=8&&e.termFontSize<=36&&(n.termFontSize=e.termFontSize),typeof e.txtWordWrap=="boolean"&&(n.txtWordWrap=e.txtWordWrap),typeof e.txtShowStatus=="boolean"&&(n.txtShowStatus=e.txtShowStatus),typeof e.vsGitBarH=="number"&&e.vsGitBarH>=0&&(n.vsGitBarH=e.vsGitBarH),typeof e.autoSave=="boolean"&&(n.autoSave=e.autoSave),typeof e.vsMinimap=="boolean"&&(n.vsMinimap=e.vsMinimap),n}async function Gh(){const t=await kd().catch(()=>null);if(t){if(Object.assign(Ue,{...qo,...Wh(t.prefs)}),Array.isArray(t.favorites)&&(qs.value=t.favorites.map(String)),t.layout&&typeof t.layout=="object"){const e=t.layout,n=e.navGroups;if(n&&typeof n=="object"){const a=n;Object.assign(Un.navGroups,Fd.navGroups),typeof a.home=="boolean"&&(Un.navGroups.home=a.home),typeof a.myComputer=="boolean"&&(Un.navGroups.myComputer=a.myComputer),typeof a.favorites=="boolean"&&(Un.navGroups.favorites=a.favorites),typeof a.ssh=="boolean"&&(Un.navGroups.ssh=a.ssh)}typeof e.explorerSplit=="number"&&e.explorerSplit>.05&&e.explorerSplit<.95&&(Un.explorerSplit=e.explorerSplit)}if(t.termWin&&typeof t.termWin=="object"){const e=t.termWin;typeof e.w=="number"&&e.w>0&&e.w,typeof e.h=="number"&&e.h>0&&e.h,typeof e.x=="number"&&e.x,typeof e.y=="number"&&e.y}if(t.termWins&&typeof t.termWins=="object"&&zh(t.termWins),t.folderViews&&typeof t.folderViews=="object"){for(const n of Object.keys(vs))delete vs[n];const e=t.folderViews;for(const[n,a]of Object.entries(e))Pd.includes(String(a))&&(vs[n]=String(a))}}}function Hn(){Zs("prefs",{...Ue})}const Fd={navGroups:{home:!0,myComputer:!0,favorites:!0,ssh:!0},explorerSplit:.3},Un=gt({...Fd});function Vi(){Zs("layout",{...Un})}const vs=gt({}),Ji=g(Ue.view);function wl(t){return vs[t]??Ue.view}function bl(t,e){vs[t]=e,Zs("folderViews",{...vs})}function qh(){for(const t of Object.keys(vs))delete vs[t];Zs("folderViews",{...vs})}const qs=g([]);function cc(){Zs("favorites",qs.value)}function po(t){return qs.value.includes(t)}function Qi(t){const e=qs.value.indexOf(t);return e>=0?(qs.value.splice(e,1),cc(),!1):(qs.value.push(t),cc(),!0)}const Kh={class:"fw-dlg-head"},Xh={class:"fw-dlg-badge"},Yh={class:"fw-dlg-headtext"},Jh={class:"fw-dlg-headtitle"},Qh={class:"fw-dlg-headsub"},Zh={class:"fw-set-body"},ev={class:"fw-set-group"},tv={class:"fw-set-group-title"},nv={class:"fw-set-row"},sv={class:"k"},ov={class:"fw-set-row"},iv={class:"k"},av={class:"fw-set-row"},lv={class:"k"},rv={class:"fw-set-group"},cv={class:"fw-set-group-title"},dv={class:"fw-set-row"},uv={class:"k"},fv={class:"fw-set-accent"},pv={class:"fw-set-row"},hv={class:"k"},vv={class:"fw-set-row"},mv={class:"k"},gv={class:"fw-set-row"},yv={class:"k"},wv={class:"fw-set-row"},bv={class:"k"},kv=vt({__name:"SettingsDialog",setup(t,{expose:e}){const{t:n}=Ft(),a=g(!1),r=["#1f883d","#238636","#0969da","#8250df","#b35900","#cf222e","#0a3069","#116329"];function d(w){Ue.accentColor=typeof w=="string"?w:"",Hn()}function h(){Ue.accentColor="",Hn()}e({open:()=>{a.value=!0}});function u(){Hn()}function p(){qh(),Hn()}return(w,b)=>{const k=jf,F=Bf,L=Fn,D=ma,z=va,H=dn;return l(),Xe(H,{modelValue:a.value,"onUpdate:modelValue":b[8]||(b[8]=C=>a.value=C),class:"fw-set-dialog",width:"460px","align-center":"","modal-class":"fw-blur-overlay","close-on-click-modal":!1},{header:oe(()=>[o("div",Kh,[o("span",Xh,[m(se,{name:"gear",size:20})]),o("span",Yh,[o("span",Jh,i(s(n)("settings")),1),o("span",Qh,i(s(n)("settingsSubtitle")),1)])])]),default:oe(()=>[o("div",Zh,[o("div",ev,[o("div",tv,i(s(n)("settingsGroupFiles")),1),o("div",nv,[o("span",sv,i(s(n)("allowOutsideRoot")),1),m(k,{modelValue:s(Ue).allowOutsideRoot,"onUpdate:modelValue":b[0]||(b[0]=C=>s(Ue).allowOutsideRoot=C),onChange:u},null,8,["modelValue"])]),o("div",ov,[o("span",iv,i(s(n)("showHidden")),1),m(k,{modelValue:s(Ue).showHidden,"onUpdate:modelValue":b[1]||(b[1]=C=>s(Ue).showHidden=C),onChange:u},null,8,["modelValue"])]),o("div",av,[o("span",lv,i(s(n)("autoSave")),1),m(k,{modelValue:s(Ue).autoSave,"onUpdate:modelValue":b[2]||(b[2]=C=>s(Ue).autoSave=C),onChange:u},null,8,["modelValue"])])]),o("div",rv,[o("div",cv,i(s(n)("settingsGroupAppearance")),1),o("div",dv,[o("span",uv,i(s(n)("accentColor")),1),o("span",fv,[m(F,{modelValue:s(Ue).accentColor,"onUpdate:modelValue":b[3]||(b[3]=C=>s(Ue).accentColor=C),size:"small",predefine:r,"popper-class":"fw-set-popper",onChange:d},null,8,["modelValue"]),s(Ue).accentColor?(l(),Xe(L,{key:0,text:"",size:"small",class:"fw-set-accent-reset",onClick:h},{default:oe(()=>[de(i(s(n)("accentReset")),1)]),_:1})):M("",!0)])]),o("div",pv,[o("span",hv,i(s(n)("fontSize")),1),m(z,{modelValue:s(Ue).fontSize,"onUpdate:modelValue":b[4]||(b[4]=C=>s(Ue).fontSize=C),size:"small",class:"fw-set-select","popper-class":"fw-set-popper",onChange:u},{default:oe(()=>[m(D,{value:12,label:s(n)("fontSizeSm")},null,8,["label"]),m(D,{value:13,label:s(n)("fontSizeMd")},null,8,["label"]),m(D,{value:14,label:s(n)("fontSizeLg")},null,8,["label"]),m(D,{value:16,label:s(n)("fontSizeXl")},null,8,["label"])]),_:1},8,["modelValue"])]),o("div",vv,[o("span",mv,i(s(n)("fontFamily")),1),m(z,{modelValue:s(Ue).fontFamily,"onUpdate:modelValue":b[5]||(b[5]=C=>s(Ue).fontFamily=C),size:"small",class:"fw-set-select","popper-class":"fw-set-popper",clearable:"",placeholder:s(n)("fontDefault"),onChange:u},{default:oe(()=>[m(D,{value:"default",label:s(n)("fontDefault")},null,8,["label"]),m(D,{value:"'Segoe UI', 'Microsoft YaHei', system-ui",label:s(n)("fontOptionYahei")},null,8,["label"]),m(D,{value:"Consolas",label:s(n)("fontOptionConsolas")},null,8,["label"]),m(D,{value:"'Courier New', monospace",label:s(n)("fontOptionCourier")},null,8,["label"]),m(D,{value:"Georgia, 'Times New Roman', serif",label:s(n)("fontOptionGeorgia")},null,8,["label"])]),_:1},8,["modelValue","placeholder"])]),o("div",gv,[o("span",yv,i(s(n)("themeMode")),1),m(z,{modelValue:s(Ue).theme,"onUpdate:modelValue":b[6]||(b[6]=C=>s(Ue).theme=C),size:"small",class:"fw-set-select","popper-class":"fw-set-popper",onChange:u},{default:oe(()=>[m(D,{value:"auto",label:s(n)("themeAuto")},null,8,["label"]),m(D,{value:"dark",label:s(n)("themeDark")},null,8,["label"]),m(D,{value:"light",label:s(n)("themeLight")},null,8,["label"])]),_:1},8,["modelValue"])]),o("div",wv,[o("span",bv,i(s(n)("defaultView")),1),m(z,{modelValue:s(Ue).view,"onUpdate:modelValue":b[7]||(b[7]=C=>s(Ue).view=C),size:"small",class:"fw-set-select","popper-class":"fw-set-popper",onChange:p},{default:oe(()=>[m(D,{value:"details",label:s(n)("viewDetails")},null,8,["label"]),m(D,{value:"content",label:s(n)("viewContent")},null,8,["label"]),m(D,{value:"tiles",label:s(n)("viewTiles")},null,8,["label"]),m(D,{value:"list",label:s(n)("viewList")},null,8,["label"]),m(D,{value:"small",label:s(n)("viewSmall")},null,8,["label"]),m(D,{value:"medium",label:s(n)("viewMedium")},null,8,["label"]),m(D,{value:"large",label:s(n)("viewLarge")},null,8,["label"]),m(D,{value:"huge",label:s(n)("viewHuge")},null,8,["label"])]),_:1},8,["modelValue"])])])])]),_:1},8,["modelValue"])}}}),_t=(t,e)=>{const n=t.__vccOpts||t;for(const[a,r]of e)n[a]=r;return n},xv=_t(kv,[["__scopeId","data-v-fbafa4a0"]]),dr=new Map,ur=new Map,kl=new Set,xl=new Set,_l=new Set,Ko=new Set,ti=new Set;let Xo=null,_o="\0unset",Vt=null,ms=0,Co="",So="";const zi=new Set;let mo=!0;const dc="__DSH_FW_PUSH_WS__";function _v(){mo=!0,ms&&(window.clearTimeout(ms),ms=0);const t=Vt;Vt=null;try{t?.close()}catch{}}const uc={dispose:()=>_v()};function Cv(){const t=globalThis,e=t[dc];if(e&&e!==uc&&typeof e.dispose=="function")try{e.dispose()}catch{}t[dc]=uc}Cv();function Ld(){const t=new Set;for(const e of dr.values())for(const n of e)t.add(n);return[...t].sort()}function Od(){const t=new Set(Ko);for(const e of ur.values())for(const n of e)t.add(n);return[...t].sort()}function Sv(){if(!Ko.size)return;const t=new Set;for(const e of ur.values())for(const n of e)t.add(n);for(const e of ti)for(const n of e.ids)t.add(n);for(const e of[...Ko])t.has(e)||Ko.delete(e)}function $v(t,e){return ld(t,e,"push")}function Tv(){const t=typeof location<"u"?location.href:"http://127.0.0.1/";return $v(Yn,t)}function Id(){return Vt!==null&&Vt.readyState===WebSocket.OPEN}function fc(){mo||ms||(ms=window.setTimeout(()=>{ms=0,Vd()},1500))}function Vd(){if(mo||Vt&&(Vt.readyState===WebSocket.OPEN||Vt.readyState===WebSocket.CONNECTING))return;let t;try{t=new WebSocket(Tv())}catch{fc();return}Vt=t,t.onopen=()=>{Co="",So="",_o="\0unset",zd()},t.onmessage=e=>Ev(e.data),t.onerror=()=>{},t.onclose=()=>{Vt===t&&(Vt=null),Co="",So="",_o="\0unset",fc()}}function zd(){if(!Vt||Vt.readyState!==WebSocket.OPEN)return;const t=Ld(),e=t.join(`
`);e!==Co&&(Co=e,Vt.send(JSON.stringify({type:"watch",paths:t})));const n=Od(),a=n.join(`
`);if(a!==So&&(So=a,Vt.send(JSON.stringify({type:"ssh-watch",ids:n}))),zi.size){const r=[...zi];zi.clear(),Vt.send(JSON.stringify({type:"ssh-check",ids:r}))}Xo!==_o&&(_o=Xo,Vt.send(JSON.stringify({type:"session-watch",id:Xo})))}function Ev(t){if(typeof t!="string")return;let e;try{e=JSON.parse(t)}catch{return}if(e.type==="changed"&&e.items){const n=e.items;for(const[a,r]of Object.entries(n))for(const d of kl)d(a,r);return}if(e.type==="ssh-status"&&e.items){const n=e.items;for(const a of xl)a(n);for(const a of[...ti])Object.keys(n).some(r=>a.ids.has(r))&&(ti.delete(a),a.resolve(n));return}if(e.type==="session-ev"&&e.ev&&typeof e.ev=="object")for(const n of _l)n(e.ev)}function $o(){if(!(Ld().length>0||Od().length>0||Xo!==null)){mo=!0,Co="",So="",_o="\0unset",ms&&(window.clearTimeout(ms),ms=0);const e=Vt;Vt=null;try{e?.close()}catch{}return}mo&&(Co="",So="",_o="\0unset"),mo=!1,Vd(),zd()}function Nv(t,e){dr.set(t,e),$o()}function Dv(t){dr.delete(t),$o()}function Rv(t){return kl.add(t),()=>kl.delete(t)}function Av(t,e){ur.set(t,e),$o()}function Mv(t){return xl.add(t),()=>xl.delete(t)}function jd(t,e=12e3){const n=[...new Set(t.filter(Boolean))];if(!n.length)return Promise.resolve({});for(const a of n)Ko.add(a);return $o(),new Promise(a=>{let r=0;const d=u=>{r&&window.clearTimeout(r),ti.delete(h),Sv(),$o(),a(u)},h={ids:new Set(n),resolve:d};if(ti.add(h),r=window.setTimeout(()=>d({}),e),Vt&&Vt.readyState===WebSocket.OPEN)Vt.send(JSON.stringify({type:"ssh-check",ids:n}));else for(const u of n)zi.add(u)})}function fr(t){Xo=t,$o()}function Pv(t){return _l.add(t),()=>_l.delete(t)}const rn=g([]),Bd=g(!1),en=g({});function Zi(t){return en.value[t]?.state??"unknown"}function Cl(t){return en.value[t]?.error??""}async function ea(t){en.value={...en.value,[t]:{state:"checking"}};const n=(await jd([t]))[t];return n?(en.value={...en.value,[t]:n.alive?{state:"online"}:{state:"offline",error:n.error}},n.alive):(en.value={...en.value,[t]:{state:"unknown"}},!1)}async function Sl(){const t=rn.value.map(n=>n.id);if(!t.length)return;const e={...en.value};for(const n of t)e[n]={state:"checking"};if(en.value=e,!Id()){await Ud();return}await jd(t)}async function Ks(){try{const t=await Rp();rn.value=t.hosts??[];const e=new Set(rn.value.map(n=>n.id));for(const n of Object.keys(en.value))e.has(n)||delete en.value[n];Hd()}catch{rn.value=[]}finally{Bd.value=!0}}let $l=!1;function Fv(){$l||($l=!0,Mv(t=>{const e={...en.value};for(const[n,a]of Object.entries(t))e[n]=a.alive?{state:"online"}:{state:"offline",error:a.error};en.value=e})),Hd(),Ov()}const Lv=3e4;let pc=null;async function Ud(){const t=rn.value.slice();t.length&&await Promise.all(t.map(async e=>{const n=await Fp(e.id).catch(()=>null);n&&(en.value={...en.value,[e.id]:n.alive?{state:"online"}:{state:"offline",error:n.error}})}))}function Ov(){pc||(pc=setInterval(()=>{Id()||Ud()},Lv))}function Hd(){$l&&Av("ssh-store",rn.value.map(t=>t.id))}function Wd(t){if(!t.startsWith("ssh://"))return null;const e=t.slice(6),n=e.indexOf("/"),a=n===-1?e:e.slice(0,n);if(!a)return null;const r=n===-1?"/":e.slice(n)||"/";return{hostId:a,remote:r.replace(/\/+$/,"")||"/"}}function Iv(t,e="cmd"){const n=Wd(t);if(!n)return"";const a=rn.value.find(w=>w.id===n.hostId);if(!a)return"";const r=a.authType==="key"&&a.privateKeyPath?`-i "${a.privateKeyPath}" `:"",u=`cd ${`'${n.remote.replace(/'/g,"'\\''")}'`} && exec bash -l`.replace(/"/g,'\\"'),p=e==="powershell"?`'${u.replace(/'/g,"''")}'`:`"${u}"`;return`ssh ${r}-p ${a.port||22} -o StrictHostKeyChecking=accept-new -t ${a.user}@${a.host} ${p}`}function Ws(t){return`ssh://${t}/`}function Vv(t){const e=Wd(t);if(!e)return null;const n=rn.value.find(a=>a.id===e.hostId);return n?{hostId:n.id,remote:zv(e.remote),label:n.name||`${n.user}@${n.host}`}:null}function zv(t){const e=(t??"").trim().replace(/\\/g,"/");return e?e.startsWith("/")?e.replace(/\/+$/,"")||"/":`/${e.replace(/\/+$/,"")}`:"/"}function pr(t){if(!t.startsWith("ssh://"))return"";const e=t.slice(6),n=e.indexOf("/");return(n===-1?e:e.slice(0,n)).trim()}function Gd(t){if(!t.startsWith("ssh://"))return"";const e=t.slice(6),n=e.indexOf("/");return(n===-1?"":e.slice(n)).replace(/\/+$/,"")||"/"}function Tl(t){const e=pr(t);if(!e)return t;const n=rn.value.find(d=>d.id===e),a=n?n.name||`${n.user}@${n.host}`:e,r=Gd(t);return r&&r!=="/"?`${a} · ${r}`:a}function ta(t){const e=pr(t);if(!e)return"";const n=Gd(t);if(!n||n==="/")return"";const a=n.lastIndexOf("/"),r=a<=0?"/":n.slice(0,a);return`ssh://${e}${r==="/"?"/":r}`}function hc(t,e){return`${t.replace(/\/+$/,"")}/${e}`}async function jv(t=!1){Bd.value&&!t||await Ks()}function qd(t){if(!t.startsWith("ssh://"))return null;const e=t.slice(6),n=e.indexOf("/"),a=n===-1?e:e.slice(0,n);if(!a)return null;const r=n===-1?"":e.slice(n),d=rn.value.find(w=>w.id===a),u=[{name:d?d.name||`${d.user}@${d.host}`:a,path:`ssh://${a}/`}];let p="";for(const w of r.split("/").filter(Boolean))p+=`/${w}`,u.push({name:w,path:`ssh://${a}${p}`});return u}const xn=gt({open:!1,editingId:null});function Kd(){xn.editingId=null,xn.open=!0}function Bv(t){xn.editingId=t,xn.open=!0}function Ei(){xn.open=!1}const De=gt({key:"default",root:"",explorerPath:"",externalViewActive:!1,search:{q:"",hits:[],truncated:!1,running:!1,scope:""},termOpen:!1,termRequestCwd:"",termRequestCmd:"",termRequestSsh:null}),na=g("");function Ni(t){na.value=t}const zo=g(!1),jo=g(!1);async function Xd(t){if(!Wt(t))return{cwd:t,cmd:"",ssh:null};await jv();const e=Vv(t);return e?{cwd:"",cmd:Iv(t,Ue.termShell),ssh:e}:(Y("info",v("remoteNoTerminal")),{cwd:"",cmd:"",ssh:null})}async function To(t=""){Yd(await Xd(t)),De.termOpen?hr.value++:De.termOpen=!0}function Yd(t){De.termRequestCwd=t.cwd,De.termRequestCmd=t.cmd,De.termRequestSsh=t.ssh}const hr=g(0);async function Uv(t=""){Yd(await Xd(t)),De.termOpen?hr.value++:De.termOpen=!0}async function El(t){const{root:e}=await or(t,De.key);return e===De.root||(De.root=e,De.explorerPath=e,De.search.hits=[],De.search.q=""),e}function bs(t){return!De.root||Hv(De.root,t)?!0:Ue.allowOutsideRoot}function Hv(t,e){const n=d=>d.replace(/[\\/]+/g,"/").replace(/\/$/,""),a=n(t).toLowerCase(),r=n(e).toLowerCase();return r===a||r.startsWith(`${a}/`)}async function Wv(){if(De.root)return;const{root:t}=await Tp(De.key);if(t){De.root=t,De.explorerPath=t;return}const e=window.__DSH_FILE_WORKBENCH__?.getSessionDir?.();if(e){await El(e);return}const n=window.__DSH_FILE_WORKBENCH__?.pickDirectory;if(n){const a=await n();a&&await El(a)}}async function fi(t){const e=window.__DSH_FILE_WORKBENCH__;if(e?.openInSidebar){if(Wt(t)){const n=await Lp(t);e.openInSidebar(n.path);return}e.openInSidebar(t)}}let Ka=0;async function go(t,e){if(De.search.q=t,!t.trim()){De.search.hits=[],De.search.truncated=!1;return}const n=(e||De.root||"").replace(/[\\/]+$/,"");if(!n)return;const a=++Ka;De.search.running=!0;try{const{matches:r,truncated:d,byContent:h,snippets:u}=await Np(t,{key:De.key,path:n,limit:2e3,caseSensitive:zo.value,regex:jo.value});if(a!==Ka)return;const p=new Set(h??[]);De.search.hits=r.map(w=>({name:w.slice(w.lastIndexOf("/")+1),path:`${n}/${w}`,isDir:!1,broken:!1,byContent:p.has(w),snippet:u?.[w]})),De.search.truncated=d,De.search.scope=n}finally{a===Ka&&(De.search.running=!1)}}const le=gt({homeItems:[],listing:null,loading:!1,loadErr:"",view:"files",recycleItems:[],recycleLoading:!1,recycleErr:"",drives:[],drivesLoading:!1,drivesErr:""});async function Jd(){le.loadErr="";try{le.homeItems=(await fd(De.key)).items}catch(t){le.loadErr=t.message}}const It=gt({history:[],idx:-1}),Yo="thispc",vc="回收站";function _a(t){const e=t.trim();return e.startsWith("ssh://")?!0:/^[A-Za-z]:[\\/]/.test(e)||/^[\\/]{1,2}[^\\/]/.test(e)||/^[\\/]$/.test(e)}const Gv=I(()=>It.idx>0),qv=I(()=>It.idx<It.history.length-1),Kv=I(()=>le.view==="files");function Qd(t,e){if(!e)return;const n=t===Yo?t:t.replace(/[\\/]+$/,""),a=It.history[It.idx]===Yo?Yo:It.history[It.idx]?.replace(/[\\/]+$/,"")??"";n!==a&&(It.history.length=It.idx+1,It.history.push(n),It.idx=It.history.length-1)}async function jt(t,e=!0){if(_a(t)){le.view="files",Qd(t,e),le.loadErr="",le.loading=!0;try{le.listing=await Bp(t,De.key)}catch(n){le.loadErr=n.message}finally{le.loading=!1}}}async function vr(){le.drivesErr="",le.drivesLoading=!0;try{le.drives=(await pd()).drives??[]}catch(t){le.drivesErr=t.message}finally{le.drivesLoading=!1}}async function Zd(t=!0){Qd(Yo,t),le.view="computer",le.loadErr="",le.listing=null,await vr()}async function eu(t,e=!0){t===Yo?await Zd(e):await jt(t,e)}function tu(){It.idx>0&&(It.idx-=1,eu(It.history[It.idx],!1))}function nu(){It.idx<It.history.length-1&&(It.idx+=1,eu(It.history[It.idx],!1))}async function su(){const t=le.homeItems,e=t.find(n=>n.type==="home")?.path??t.find(n=>n.type==="workspace")?.path??t.find(n=>n.type==="drive")?.path;e&&await jt(e)}async function Nl(){le.view==="files"&&le.listing&&(le.listing.parent?await jt(le.listing.parent):await su())}async function ou(){const t=window.__DSH_FILE_WORKBENCH__?.getSessionDir?.();if(!t)return!1;const e=De.root;try{await El(t)}catch{return!1}return De.root!==e&&await Jd(),await jt(t),!0}function Dt(){return Cs("mycomputer"),Cs("drives"),le.view==="computer"?vr():le.view==="recycle"?ks():le.listing?jt(le.listing.path,!1):Promise.resolve()}function Xv(){return(le.recycleItems??[]).map(t=>{const e=Date.parse(t.dateDeleted);return{name:t.name,path:t.fullPath,isDir:t.isDir,isSymlink:!1,broken:!1,hidden:!1,size:t.size||0,mtime:Number.isNaN(e)?void 0:e,recycleFullPath:t.fullPath,originalPath:t.originalPath,dateDeleted:t.dateDeleted}})}async function iu(){le.recycleErr="",le.recycleLoading=!0,le.loading=!0,le.loadErr="";try{const t=(await Op()).items;le.recycleItems=Array.isArray(t)?t:[],le.listing={path:vc,name:vc,entries:Xv(),truncated:!1}}catch(t){le.recycleErr=t.message,le.loadErr=t.message,le.listing=null}finally{le.recycleLoading=!1,le.loading=!1}}async function mc(){le.view="recycle",await iu()}function ks(){return iu()}async function Yv(){(window.__DSH_FILE_WORKBENCH__?.getSessionDir?.()??null)&&await Dt()}const Dl=I(()=>le.listing?.path??"");let gc=!1;function Jv(){return gc?!1:(gc=!0,!0)}const au="vscode";function Ca(){return typeof window<"u"?window.__DSH_SIDEBAR_RIGHT__:void 0}function lu(t,e){Ca()?.openTab(t,e)}function mr(t){return Ca()?.newEditorTab(t)??!1}function Qv(){const t=Ca();if(!t)return!1;const e=t.editorTabLimit();return e>0&&t.editorTabCount()>=e}function Zv(t){Ca()?.float(t)}let Eo=null;function em(){const t=Eo;return Eo=null,t}function tm(){Eo=null}let Rl=null;function yc(){const t=Rl;return Rl=null,t}function gr(t,e={}){const n=t?.trim();if(!n)return;if(n.startsWith("ssh://")){nm(n,e.isDir);return}Eo=n;const a=Qv();if(!mr({projectDir:n})){lu(au,{params:{projectDir:n}});return}a&&Y("info",v("vsReplacedOldest"))}async function nm(t,e){const n=Ws(pr(t));let a=e;a===void 0&&t!==n&&(a=(await hl(t))?.isDir??!1);const r=t===n||a===!0;Eo=r?t:n,Rl=r?null:t;const d=Eo;mr({projectDir:d})||lu(au,{params:{projectDir:d}})}const At=gt({list:[],history:[],archives:{}});let sm=1,wc=!1;const ru=gt({value:!1});function om(t){ru.value=t}function yr(t){const e=new Date(t),n=a=>String(a).padStart(2,"0");return`${e.getFullYear()}-${n(e.getMonth()+1)}-${n(e.getDate())}`}function wr(){return yr(Date.now())}function Di(t){return t.doneAt??t.startedAt}function cu(t){let e=!0;for(let n=1;n<t.length;n++)if(Di(t[n-1])<Di(t[n])){e=!1;break}return e?!1:(t.sort((n,a)=>Di(a)-Di(n)),!0)}function du(t){if(!t.length)return;const e=wr(),n=At.archives[e]??(At.archives[e]=[]);n.push(...t),cu(n),ir(At.archives)}async function im(){if(!wc){wc=!0;try{const t=await ph(),e=await vh(),n=wr(),a=[];let r=!1;for(const h of t){const u=yr(h.doneAt??h.startedAt);u===n?a.push(h):((e[u]??=[]).push(h),r=!0)}let d=!1;for(const h of Object.keys(e))cu(e[h])&&(d=!0);At.history=a,At.archives=e,(r||d)&&(Sa(),ir(e))}catch{At.history=[],At.archives={}}}}function Sa(){hh(At.history)}function am(t){const e=yr(t.doneAt??t.startedAt);e===wr()?(At.history.unshift(t),At.history.length>200&&(At.history.length=200),Sa()):((At.archives[e]??(At.archives[e]=[])).unshift(t),ir(At.archives))}function on(t,e,n,a){const r=sm++,d=gt({id:r,label:t,detail:e,status:"running",startedAt:Date.now(),logs:[{time:Date.now(),status:"running",msg:t,file:e,fileType:n,fileSize:a}]});At.list.unshift(d),At.list.length>80&&(At.list.length=80);const h=(w,b)=>{d.status=w,d.doneAt=Date.now(),d.msg=b,d.logs.push({time:d.doneAt,status:w,msg:b??"",file:e}),am({label:d.label,detail:e,status:w,msg:b,startedAt:d.startedAt,doneAt:d.doneAt,logs:d.logs.map(k=>({...k}))})};return{step:(w,b,k,F,L)=>{d.status==="running"&&d.logs.push({time:Date.now(),status:"running",msg:w,file:b,detail:k,fileType:F,fileSize:L})},updateLabel:w=>{d.label=w},done:w=>h("done",w),fail:w=>h("error",w)}}async function uu(){du(At.history),At.history=[],At.list=At.list.filter(t=>t.status==="running"),Sa()}async function fu(){du(At.history),At.history=[],At.list=[],Sa()}const Kn={state:At,startTask:on,initTaskLogs:im,clearFinished:uu,clearAll:fu,setOpen:om,open:ru},{t:lo}=Ft();function lm(t){return new Promise(e=>setTimeout(e,t))}async function pu(){if((le.recycleItems?.length??0)===0||!await Pt({title:lo("recycleEmpty"),message:lo("recycleEmptyConfirm")}))return;const e=on(lo("recycleEmptying"),"");try{await jp();let n=le.recycleItems?.length??0;for(let a=0;a<120;a+=1){await lm(1e3);try{n=(await Ip()).count}catch{}if(e.step(lo("recycleEmptyProgress",{count:n})),n<=0)break}e.updateLabel(lo("recycleEmptyDone")),e.done(lo("recycleEmptyDone")),await ks()}catch(n){e.fail(n.message),Y("error",n.message)}}function Al(){return Ue.theme==="dark"?!0:Ue.theme==="light"?!1:typeof document>"u"?!0:document.documentElement.style.colorScheme!==""?document.body.hasAttribute("data-ds-dark-theme"):typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const hu=[["--dsh-bg","--dsw-alias-bg-base"],["--dsh-bg2","--dsw-alias-bg-layer-1"],["--dsh-border","--dsw-alias-border-l1"],["--dsh-fg","--dsw-alias-label-primary"],["--dsh-fg-weak","--dsw-alias-label-secondary"],["--dsh-hover","--dsw-alias-interactive-bg-hover"],["--dsh-accent","--dsw-alias-state-success-primary"]];function rm(t){if(typeof document>"u")return;const e=t??document.body??document.documentElement,n=getComputedStyle(e),a=[document.documentElement,t].filter(r=>!!r);for(const[r,d]of hu){const h=n.getPropertyValue(d).trim();if(h)for(const u of a)u.style.setProperty(r,h)}}function cm(t){if(typeof document>"u")return;const e=[document.documentElement,t].filter(n=>!!n);for(const[n]of hu)for(const a of e)a.style.removeProperty(n)}function dm(){if(Ue.theme==="dark")return"dark";if(Ue.theme==="light")return"light";if(typeof document>"u")return"dark";const e=document.querySelector(".fw-root[data-theme]")?.getAttribute("data-theme");return e==="light"||e==="dark"?e:Al()?"dark":"light"}function br(t){const e=g(Al()?"dark":"light");function n(){const h=Al();if(e.value=h?"dark":"light",t.value&&t.value.setAttribute("data-theme",e.value),typeof document<"u"){const u=document.documentElement;u.setAttribute("data-theme",e.value);const p=u.style.colorScheme!=="";Ue.theme==="auto"&&p?rm(t.value):cm(t.value),u.classList.toggle("dark",h),a(u),t.value&&a(t.value)}}function a(h){Ue.accentColor?h.style.setProperty("--dsh-accent",Ue.accentColor):h.style.removeProperty("--dsh-accent")}n();let r;typeof document<"u"&&typeof MutationObserver<"u"&&(r=new MutationObserver(n),r.observe(document.body,{attributes:!0,attributeFilter:["data-ds-dark-theme"]}));const d=typeof matchMedia<"u"?matchMedia("(prefers-color-scheme: dark)"):void 0;return d?.addEventListener("change",n),Je(()=>[Ue.theme,Ue.accentColor],n,{deep:!1}),er(()=>{r?.disconnect(),d?.removeEventListener("change",n)}),e}const um=["data-theme"],fm={key:0,class:"fw-cm-header"},pm={key:0,class:"fw-cm-sep"},hm=["onMouseenter","onClick"],vm={class:"fw-cm-ico"},mm={key:1},gm={class:"fw-cm-label"},ym={key:0,class:"fw-cm-hint"},wm={class:"fw-cm-check"},bm={key:1,class:"fw-cm-arrow"},km=["title","onClick"],xm={key:1,class:"fw-cm-footer"},_m={key:0,class:"fw-cm-sep"},Cm=["onClick"],Sm={class:"fw-cm-ico"},$m={key:1},Tm={class:"fw-cm-label"},Em={key:0,class:"fw-cm-sep"},Nm=["onClick"],Dm={class:"fw-cm-ico"},Rm={key:1},Am={class:"fw-cm-label"},Mm={class:"fw-cm-check"},Pm=vt({__name:"ContextMenu",props:{items:{},x:{},y:{},maxHeight:{},footerItems:{},placement:{}},emits:["close"],setup(t,{emit:e}){const n=t,a=e,r=g(!1),d=g(null),h=g(null),u=g({x:n.x,y:n.y}),p=g(-1),w=g(!1),b=g(null),k=g({x:0,y:0}),F=g("dark");function L(){return F.value=dm(),F.value}function D(ge){return!!ge.separator}Je(()=>[n.x,n.y],([ge,ne])=>{u.value={x:ge,y:ne},p.value=-1,b.value=null,r.value=!0,L(),requestAnimationFrame(z)}),Je(()=>n.items,()=>{r.value&&requestAnimationFrame(z)});function z(){const ge=d.value;if(!ge)return;const ne=window.innerWidth,ae=window.innerHeight,Te=ge.getBoundingClientRect();let je=u.value.x,be=u.value.y;je+Te.width>ne-4&&(je=Math.max(4,ne-Te.width-4)),be+Te.height>ae-4&&(be=Math.max(4,ae-Te.height-4)),Te.top<4&&(be=Math.max(4,be+(4-Te.top))),u.value={x:je,y:be}}function H(ge,ne){p.value=ge;const ae=d.value,Te=n.items[ge],je=ne?.currentTarget??ae?.querySelectorAll(".fw-cm-item")[ge]??null;w.value=!!ae&&u.value.x+ae.getBoundingClientRect().width+180>window.innerWidth,Te?.children?.length?(b.value=Te,C(je)):b.value=null}function C(ge){const ne=ge??null;if(!ne)return;const ae=ne.getBoundingClientRect();let je=w.value?ae.left-220:ae.right-2;const be=Math.max(4,ae.top-4);k.value={x:je,y:be},requestAnimationFrame(()=>{const Ae=h.value;if(!Ae)return;const W=Ae.getBoundingClientRect();let J=je,B=be;J+W.width>window.innerWidth-4&&(J=Math.max(4,window.innerWidth-W.width-4)),B+W.height>window.innerHeight-4&&(B=Math.max(4,window.innerHeight-W.height-4)),k.value={x:J,y:B}})}function Z(ge){ge.disabled||ge.children?.length||(ge.onClick?.(),V())}function G(ge){ge.disabled||(ge.onClick?.(),V())}function R(ge){ge.trailing?.disabled||ge.trailing?.onClick?.()}function ue(ge){ge.disabled||(ge.onClick?.(),V())}function V(){r.value=!1,p.value=-1,b.value=null,a("close")}function he(){V()}function _e(ge){ge.key==="Escape"&&V()}return cn(()=>{r.value=!0,L(),requestAnimationFrame(z),window.addEventListener("keydown",_e)}),Mt(()=>{window.removeEventListener("keydown",_e)}),(ge,ne)=>(l(),Xe(ed,{to:"body"},[r.value?(l(),c("div",{key:0,class:"fw-cm-backdrop",onMousedown:he,onContextmenu:xe(he,["prevent"])},[o("div",{ref_key:"menuEl",ref:d,class:te(["fw-cm",{"fw-cm-up":n.placement==="top"}]),"data-theme":F.value,style:kt({left:u.value.x+"px",top:u.value.y+"px"}),onMousedown:ne[2]||(ne[2]=xe(()=>{},["stop"])),onContextmenu:ne[3]||(ne[3]=xe(()=>{},["prevent"]))},[ge.$slots.header?(l(),c("div",fm,[Ff(ge.$slots,"header",{},void 0,!0)])):M("",!0),o("div",{class:"fw-cm-scroll",style:kt(n.maxHeight?{maxHeight:n.maxHeight}:void 0)},[(l(!0),c(ie,null,Pe(t.items,(ae,Te)=>(l(),c(ie,{key:Te},[D(ae)?(l(),c("div",pm)):(l(),c("div",{key:1,class:te(["fw-cm-item",{disabled:ae.disabled,checked:ae.checked,hasChild:!!ae.children?.length}]),onMouseenter:je=>H(Te,je),onClick:je=>Z(ae)},[o("span",vm,[s(Ho)(ae.icon??"")?(l(),Xe(se,{key:0,name:ae.icon??"",size:14},null,8,["name"])):(l(),c("span",mm,i(ae.icon??""),1))]),o("span",gm,i(ae.label),1),ae.hint?(l(),c("span",ym,i(ae.hint),1)):M("",!0),o("span",wm,i(ae.checked?"✓":""),1),ae.children?.length?(l(),c("span",bm,[m(se,{name:"chevronRight",size:10})])):M("",!0),ae.trailing?(l(),c("span",{key:2,class:te(["fw-cm-trailing",{disabled:ae.trailing.disabled}]),title:ae.trailing.title,onClick:xe(je=>R(ae),["stop"]),onMousedown:ne[0]||(ne[0]=xe(()=>{},["stop"])),onMouseenter:ne[1]||(ne[1]=xe(()=>{},["stop"]))},[m(se,{name:ae.trailing.icon,size:12},null,8,["name"])],42,km)):M("",!0)],42,hm))],64))),128))],4),t.footerItems?.length?(l(),c("div",xm,[(l(!0),c(ie,null,Pe(t.footerItems,(ae,Te)=>(l(),c(ie,{key:"f"+Te},[D(ae)?(l(),c("div",_m)):(l(),c("div",{key:1,class:te(["fw-cm-item",{disabled:ae.disabled}]),onClick:je=>ue(ae)},[o("span",Sm,[s(Ho)(ae.icon??"")?(l(),Xe(se,{key:0,name:ae.icon??"",size:14},null,8,["name"])):(l(),c("span",$m,i(ae.icon??""),1))]),o("span",Tm,i(ae.label),1)],10,Cm))],64))),128))])):M("",!0),b.value?(l(),c("div",{key:2,ref_key:"subEl",ref:h,class:te(["fw-cm fw-cm-sub",{"fw-cm-sub-left":w.value}]),style:kt({left:k.value.x+"px",top:k.value.y+"px"})},[(l(!0),c(ie,null,Pe(b.value.children,(ae,Te)=>(l(),c(ie,{key:Te},[D(ae)?(l(),c("div",Em)):(l(),c("div",{key:1,class:te(["fw-cm-item",{disabled:ae.disabled,checked:ae.checked}]),onClick:je=>G(ae)},[o("span",Dm,[s(Ho)(ae.icon??"")?(l(),Xe(se,{key:0,name:ae.icon??"",size:14},null,8,["name"])):(l(),c("span",Rm,i(ae.icon??""),1))]),o("span",Am,i(ae.label),1),o("span",Mm,i(ae.checked?"✓":""),1)],10,Nm))],64))),128))],6)):M("",!0)],46,um)],32)):M("",!0)]))}}),Zt=_t(Pm,[["__scopeId","data-v-00e617b4"]]);function hn(){const t=g(!1),e=g(0),n=g(0),a=g([]);function r(u,p=[]){d(u.clientX,u.clientY,p)}function d(u,p,w=[]){a.value=w,e.value=u,n.value=p,t.value=!0}function h(){t.value=!1}return{cmOpen:t,cmX:e,cmY:n,cmItems:a,openMenu:r,openMenuAt:d,closeMenu:h}}const Fm={class:"fw-clone-head"},Lm={class:"fw-clone-badge"},Om={class:"fw-clone-headtext"},Im={class:"fw-clone-headtitle"},Vm={class:"fw-clone-headsub"},zm={class:"fw-ssh-dlg-body"},jm={class:"fw-ssh-field"},Bm={class:"fw-ssh-lb"},Um={class:"fw-ssh-field"},Hm={class:"fw-ssh-lb"},Wm={class:"fw-ssh-addr"},Gm={class:"fw-ssh-field"},qm={class:"fw-ssh-lb"},Km={class:"fw-ssh-addr"},Xm={key:0,class:"fw-ssh-err"},Ym=vt({__name:"SshHostDialog",setup(t){const{t:e}=Ft(),n=I({get:()=>xn.open,set:H=>{H||Ei()}}),a=I(()=>xn.editingId!==null),r=I(()=>rn.value.find(H=>H.id===xn.editingId)??null),d=gt({name:"",user:"",host:"",authType:"password",password:"",privateKeyPath:""}),h=g("22"),u=I(()=>Math.trunc(Number(h.value))||22),p=g(!1),w=g(""),b=I(()=>{const H=d.user.trim()||"user",C=d.host.trim()||"host";return`${H}@${C}`});Je(()=>xn.open,H=>{if(H)if(w.value="",p.value=!1,a.value&&r.value){const C=r.value;d.name=C.name,d.user=C.user,d.host=C.host,d.authType=C.authType,d.password="",d.privateKeyPath=C.privateKeyPath??"",h.value=String(C.port)}else d.name="",d.user="",d.host="",d.authType="password",d.password="",d.privateKeyPath="",h.value="22"},{immediate:!0});function k(){Ei()}function F(){Ei()}async function L(H){p.value=!0,w.value="";try{await H()}catch(C){w.value=C instanceof Error?C.message:String(C)}finally{p.value=!1}}async function D(){if(!d.host.trim()||!d.user.trim()){co(e("sshRequired"));return}if(a.value&&xn.editingId){const H=r.value;if(d.authType==="password"?!d.password.trim():!d.privateKeyPath.trim()||d.privateKeyPath.trim()===(H?.privateKeyPath??"")){const Z=xn.editingId??void 0;await L(async()=>{const G=await ul({id:Z});G.ok?rs(`${e("sshTestOk")}${G.banner?` (${G.banner})`:""}`):fs(`${e("sshTestFail")}: ${G.error??""}`)});return}}await L(async()=>{const H=await ul({host:d.host.trim(),port:u.value,user:d.user.trim(),auth:d.authType==="password"?{type:"password",password:d.password}:{type:"key",privateKeyPath:d.privateKeyPath.trim()}});H.ok?rs(`${e("sshTestOk")}${H.banner?` (${H.banner})`:""}`):fs(`${e("sshTestFail")}: ${H.error??""}`)})}async function z(){if(!d.host.trim()||!d.user.trim()){co(e("sshRequired"));return}await L(async()=>{if(a.value&&xn.editingId){const H=await Mp({id:xn.editingId,name:d.name.trim()||void 0,host:d.host.trim(),port:u.value,user:d.user.trim(),auth:d.authType==="password"?{type:"password",password:d.password||void 0}:{type:"key",privateKeyPath:d.privateKeyPath.trim()}});rs(e("sshUpdateSuccess")),await Ks(),await ea(H.host.id)}else{const H=await Ap({name:d.name.trim()||void 0,host:d.host.trim(),port:u.value,user:d.user.trim(),auth:d.authType==="password"?{type:"password",password:d.password}:{type:"key",privateKeyPath:d.privateKeyPath.trim()}});rs(e("sshAddSuccess")),await Ks(),await Sl(),await ea(H.host.id)}Ei()})}return(H,C)=>{const Z=Es,G=ma,R=va,ue=Fn,V=dn;return l(),Xe(V,{modelValue:n.value,"onUpdate:modelValue":C[7]||(C[7]=he=>n.value=he),class:"fw-ssh-dlg",width:"420px","close-on-click-modal":!0,"append-to-body":"",onClosed:k},{header:oe(()=>[o("div",Fm,[o("span",Lm,[m(se,{name:"hardDrive",size:20})]),o("div",Om,[o("div",Im,i(a.value?s(e)("sshEditTitle"):s(e)("sshNewHost")),1),o("div",Vm,i(s(e)("sshHostCaption")),1)])])]),footer:oe(()=>[m(ue,{size:"small",loading:p.value,onClick:D},{default:oe(()=>[de(i(s(e)("sshTestConn")),1)]),_:1},8,["loading"]),m(ue,{size:"small",onClick:F},{default:oe(()=>[de(i(s(e)("sshCancel")),1)]),_:1}),m(ue,{size:"small",type:"primary",loading:p.value,onClick:z},{default:oe(()=>[de(i(a.value?s(e)("sshSaveEdit"):s(e)("sshSaveAdd")),1)]),_:1},8,["loading"])]),default:oe(()=>[o("div",zm,[o("label",jm,[o("span",Bm,i(s(e)("sshName")),1),m(Z,{modelValue:d.name,"onUpdate:modelValue":C[0]||(C[0]=he=>d.name=he),size:"small",placeholder:b.value},null,8,["modelValue","placeholder"])]),o("label",Um,[o("span",Hm,i(s(e)("sshAddr")),1),o("span",Wm,[m(Z,{modelValue:d.user,"onUpdate:modelValue":C[1]||(C[1]=he=>d.user=he),size:"small",placeholder:s(e)("sshUser"),class:"fw-ssh-user"},null,8,["modelValue","placeholder"]),C[8]||(C[8]=o("span",{class:"fw-ssh-at"},"@",-1)),m(Z,{modelValue:d.host,"onUpdate:modelValue":C[2]||(C[2]=he=>d.host=he),size:"small",placeholder:s(e)("sshHostAddr"),class:"fw-ssh-host"},null,8,["modelValue","placeholder"]),C[9]||(C[9]=o("span",{class:"fw-ssh-at"},":",-1)),m(Z,{modelValue:h.value,"onUpdate:modelValue":C[3]||(C[3]=he=>h.value=he),size:"small",placeholder:"22",class:"fw-ssh-port"},null,8,["modelValue"])])]),o("label",Gm,[o("span",qm,i(s(e)("sshAuth")),1),o("span",Km,[m(R,{modelValue:d.authType,"onUpdate:modelValue":C[4]||(C[4]=he=>d.authType=he),size:"small",class:"fw-ssh-auth"},{default:oe(()=>[m(G,{value:"password",label:s(e)("sshAuthPassword")},null,8,["label"]),m(G,{value:"key",label:s(e)("sshAuthKey")},null,8,["label"])]),_:1},8,["modelValue"]),d.authType==="password"?(l(),Xe(Z,{key:0,modelValue:d.password,"onUpdate:modelValue":C[5]||(C[5]=he=>d.password=he),size:"small",type:"password","show-password":"",placeholder:a.value&&r.value?.hasSecret?s(e)("sshKeepSecret"):s(e)("sshPassword"),class:"fw-ssh-secret"},null,8,["modelValue","placeholder"])):(l(),Xe(Z,{key:1,modelValue:d.privateKeyPath,"onUpdate:modelValue":C[6]||(C[6]=he=>d.privateKeyPath=he),size:"small",placeholder:s(e)("sshKeyPath"),class:"fw-ssh-secret"},null,8,["modelValue","placeholder"]))])]),w.value?(l(),c("div",Xm,i(w.value),1)):M("",!0)])]),_:1},8,["modelValue"])}}}),Jm=_t(Ym,[["__scopeId","data-v-615d3584"]]);function vu(t,e){const n=(t??"").replace(":","").trim().charAt(0).toUpperCase();return n?e?`${e} (${n}:)`:v("driveLabel",{drive:n}):e||"/"}function Bs(t){return vu(t.letter,t.label)}function mu(t){return t.type!=="drive"?t.name:vu(t.path?.charAt(0)??"",t.label)}const Ss=1;function gu(t){if(typeof t=="string")return t;if(!t)return"";const e=typeof document<"u"?document.documentElement.lang||navigator.language:"en",n=e.toLowerCase();return t[e]??t[n]??(n.startsWith("zh")?t.zh??t.en:t.en??t.zh)??Object.values(t)[0]??""}const ni=g([]);function kr(t){yu(t,"activityBar.register"),$a(t.id),ni.value=[...ni.value,t].sort((e,n)=>(e.order??0)-(n.order??0))}function yu(t,e){if(!t||typeof t!="object")throw new Error(`${e}: 需要对象参数`);if(typeof t.id!="string"||!t.id.trim())throw new Error(`${e}: id 必须是非空字符串`);if(typeof t.title!="string"&&(typeof t.title!="object"||t.title===null))throw new Error(`${e}: title 必须是字符串或多语言文本对象`);if(typeof t.mount!="function")throw new Error(`${e}: mount 必须是函数`)}function $a(t){ni.value=ni.value.filter(e=>e.id!==t)}function Ta(){return ni.value}const si=g([]);function wu(t){yu(t,"workbench.activityBar.register"),xr(t.id),si.value=[...si.value,t].sort((e,n)=>(e.order??0)-(n.order??0))}function xr(t){si.value=si.value.filter(e=>e.id!==t)}function Qm(){return si.value}function sa(t){if(!t)return;t.style.overflowY="auto";const e=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT);for(let n=e.firstChild();n;n=e.nextSibling()){const a=n;if(a.scrollHeight<=a.clientHeight+1)continue;const r=getComputedStyle(a).overflowY;(r==="hidden"||r==="clip")&&(a.style.overflowY="auto")}}const pi=new Map;function bu(t,e){pi.set(t,e)}function _r(t){return pi.delete(t)}function ku(t){return pi.has(t)}function Cr(){return[...pi.keys()]}function Ea(t,...e){const n=pi.get(t);if(n)return n(...e)}const oi=g([]);function xu(t){Na(t.id),oi.value=[...oi.value,t].sort((e,n)=>(e.order??0)-(n.order??0))}function Na(t){oi.value=oi.value.filter(e=>e.id!==t)}function Da(){return oi.value}const ii=g([]);function _u(t){Ra(t.id),ii.value=[...ii.value,t].sort((e,n)=>(e.order??0)-(n.order??0))}function Ra(t){ii.value=ii.value.filter(e=>e.id!==t)}function ai(){return ii.value}const li=g([]);function Cu(t){Sr(t.id),li.value=[...li.value,t].sort((e,n)=>(e.order??0)-(n.order??0))}function Sr(t){li.value=li.value.filter(e=>e.id!==t)}function oa(){return li.value}const Su={start(t,e){return on(t,e?.detail,e?.fileType,e?.fileSize)},clearFinished(){return uu()},clearAll(){return fu()}};function Zm(){const e=window.__dshFileWorkbenchVSCode__?.__proxy;return e?(e.rebindVSCode({registerView:kr,unregisterView:$a,registerCommand:bu,executeCommand:Ea,hasCommand:ku,listCommands:Cr,unregisterCommand:_r,registerStatus:xu,unregisterStatus:Na,listStatus:Da,registerMenu:_u,unregisterMenu:Ra,listMenu:ai}),e.rebindWorkbench({registerView:wu,unregisterView:xr,registerStatus:Cu,unregisterStatus:Sr,listStatus:oa,backgroundTasks:Su}),queueMicrotask(()=>e.flush()),!0):!1}if(typeof window<"u"){const t=window,e={apiVersion:Ss,activityBar:{register:kr,unregister:$a},commands:{register:bu,unregister:_r,execute:Ea,list:Cr,has:ku},statusbar:{register:xu,unregister:Na,list:Da,registerMenu:_u,unregisterMenu:Ra,listMenu:ai}},n={apiVersion:Ss,activityBar:{register:wu,unregister:xr},statusbar:{register:Cu,unregister:Sr,list:oa},backgroundTasks:Su};Zm()||(t.__dshFileWorkbenchVSCode__=e,t.__dshFileWorkbenchWorkbench__=n)}const eg=["title"],tg={class:"fw-nav-ico"},ng={class:"fw-nav-label"},sg=["title","onClick","onContextmenu"],og={class:"fw-nav-ico"},ig={class:"fw-nav-label"},ag=["title"],lg=["title"],rg={class:"fw-nav-ico"},cg={class:"fw-nav-label"},dg=["title","onClick","onContextmenu"],ug={class:"fw-nav-ico"},fg={class:"fw-nav-label"},pg=["title"],hg=["aria-expanded"],vg={class:"fw-sec-txt"},mg={class:"fw-sec-icon"},gg={key:0,class:"fw-sec-b"},yg={key:0,class:"fw-nav-empty is-err"},wg=["title","onClick","onContextmenu"],bg={class:"fw-nav-ico"},kg={class:"fw-nav-label"},xg=["aria-expanded"],_g={class:"fw-sec-txt"},Cg={key:0,class:"fw-sec-b"},Sg=["title","onClick"],$g={class:"fw-nav-ico"},Tg={key:1},Eg={class:"fw-nav-label"},Ng=["aria-expanded"],Dg={class:"fw-sec-txt"},Rg={key:0,class:"fw-sec-b"},Ag=["title","onClick","onContextmenu"],Mg={class:"fw-nav-ico"},Pg={class:"fw-nav-label"},Fg=["title"],Lg=["aria-expanded"],Og={class:"fw-sec-txt"},Ig={key:0,class:"fw-sec-b"},Vg={key:0,class:"fw-nav-empty"},zg=["title","onClick","onContextmenu"],jg={class:"fw-nav-ico"},Bg={class:"fw-nav-label"},Ug={key:2,class:"fw-error"},Hg={class:"fw-error-ico"},Wg=vt({__name:"NavPane",props:{externalViews:{default:()=>[]},externalCollapsed:{type:Boolean,default:!1},activeExternalId:{},externalActive:{type:Boolean}},emits:["toggle-external","select-external","select-local"],setup(t,{emit:e}){const{t:n}=Ft(),a=t,r=e,d=I(()=>a.externalViews??[]),h=I(()=>a.externalCollapsed===!0),u=I(()=>a.activeExternalId??""),p=I(()=>a.externalActive===!0);function w(U){return gu(U.title)}const b=Un.navGroups;function k(U){b[U]=!b[U],Vi()}cn(async()=>{await Ks(),Fv(),await Sl()});function F(U){if(ne.value||le.view!=="files")return!1;const P=le.listing?.path??"";return P?ge(P).startsWith(ge(Ws(U.id))):!1}function L(U){const P=Zi(U.id),Q=n(P==="online"?"sshStatusOnline":P==="offline"?"sshStatusOffline":P==="checking"?"sshStatusChecking":"sshStatusUnknown");return P==="offline"&&Cl(U.id)?`${Q}：${Cl(U.id)}`:Q}function D(U){r("select-local"),ne.value=null,jt(Ws(U.id)),ea(U.id)}const z=g("");function H(U,P){ce(U,[{label:n("menuOpen"),icon:"arrowRight",onClick:()=>D(P)},{label:n("sshTest"),icon:"refresh",onClick:()=>void G(P)},{label:n("menuOpenTerminal"),icon:"terminal",onClick:()=>To(Ws(P.id))},{separator:!0},{label:n("sshEdit"),icon:"gear",onClick:()=>Bv(P.id)},{label:z.value===P.id?n("sshDeleteConfirm"):n("sshDelete"),icon:"trash",onClick:()=>void R(P)},{separator:!0},{label:n("menuCopyPath"),icon:"link",onClick:()=>void Oe(Ws(P.id))}])}function C(U){ce(U,[{label:n("sshNewHost"),icon:"plus",onClick:()=>Kd()},{separator:!0},{label:b.ssh?n("navCollapse"):n("navExpand"),icon:b.ssh?"chevronDown":"chevronRight",onClick:()=>k("ssh")},{label:n("menuRefresh"),icon:"refresh",onClick:()=>void Z()}])}async function Z(){await Ks(),await Sl()}async function G(U){const P=await ul({id:U.id});P.ok?Y("ok",`${n("sshTestOk")}${P.banner?` (${P.banner})`:""}`):Y("error",`${n("sshTestFail")}: ${P.error??""}`),await ea(U.id)}async function R(U){if(z.value!==U.id){z.value=U.id;return}z.value="",await Pp(U.id),await Ks()}const ue=I(()=>le.homeItems),V=["desktop","download"],he=I(()=>ue.value.filter(U=>V.includes(U.type))),_e=I(()=>ue.value.find(U=>U.type==="home")??null),ge=U=>U.replace(/[\\/]+/g,"/").replace(/\/$/,"").toLowerCase(),ne=g(null);function ae(){if(ne.value||le.view!=="files")return null;const U=le.listing?.path??"";if(!U)return null;const P=ge(U);let Q=null,Ee=-1;for(const O of ue.value){const E=ge(O.path);!E||P!==E&&!P.startsWith(`${E}/`)||E.length>Ee&&(Ee=E.length,Q=O)}return Q}function Te(U){return ae()?.path===U.path}function je(U){if(ne.value||le.view!=="files")return!1;const P=le.listing?.path??"";return P?U.letter?P.toLowerCase().startsWith(`${U.letter.toLowerCase()}:`):ge(P)==="/":!1}function be(U){if(r("select-local"),ne.value=null,U.type==="recycle"){mc();return}jt(U.path)}function Ae(){r("select-local"),ne.value=null,b.myComputer||(b.myComputer=!0,Vi()),Zd()}function W(){b.myComputer=!b.myComputer,Vi()}function J(U){r("select-local"),ne.value=null,jt(U.path)}function B(){r("select-local"),ne.value=null,mc()}const ee=U=>U.replace(/[\\/]+$/,"").split(/[\\/]/).pop()||U;function ye(U){const P=Math.max(U.lastIndexOf("/"),U.lastIndexOf("\\"));return P<0?U:U.slice(0,P)}function ze(U){return Wt(U)?ta(U)||U:ye(U)}async function Ke(U){ne.value=U;try{const P=await qi(U);jt(P.isDir?U:ze(U))}catch{jt(ze(U))}}const Ze=I(()=>qs.value.map(U=>({path:U,name:ee(U)})));async function we(U){r("select-local"),ne.value=U;try{(await qi(U)).isDir?jt(U):(fi(U),jt(ye(U)))}catch{jt(U)}}function ke(U){switch(U.type){case"drive":return mu(U);case"home":return n("navHome");case"desktop":return n("desktopEntry");case"download":return n("downloadEntry");case"documents":return n("documentEntry");case"pictures":return n("pictureEntry");case"music":return n("musicEntry");case"videos":return n("videoEntry");case"gallery":return n("navGallery");case"workspace":return n("workspaceEntry");case"recycle":return n("recycleBin");default:return U.name}}function Ye(U){switch(U.type){case"drive":return"hardDrive";case"recycle":return"trash";case"workspace":return"folder";case"home":return"home";case"desktop":return"monitor";case"download":return"download";case"documents":return"fileText";case"pictures":return"image";case"music":return"music";case"videos":return"video";case"gallery":return"image";default:return"folder"}}const{cmOpen:st,cmX:pe,cmY:Ce,cmItems:qe,openMenu:ce}=hn();function Ve(U,P,Q={}){const Ee=po(P),O=[Q.openParent?{label:n("menuOpen"),icon:"arrowRight",onClick:()=>void Ke(P)}:{label:n("menuOpen"),icon:"arrowRight",onClick:()=>void jt(P)}];Q.openEditor!==!1&&O.push({label:n("menuOpenInEditor"),icon:"code",onClick:()=>gr(P)}),O.push({separator:!0}),O.push({label:n(Ee?"favoriteRemove":"favoriteAdd"),icon:"star",onClick:()=>{const E=Qi(P);Y("ok",n(E?"favoriteAdded":"favoriteRemoved"))}}),O.push({label:n("menuCopyPath"),icon:"link",onClick:()=>void Oe(P)}),Q.openTerminal!==!1&&O.push({label:n("menuOpenTerminal"),icon:"terminal",onClick:()=>To(P)}),ce(U,O)}function rt(U,P){Ve(U,P.path)}function yt(U){ce(U,[{label:b.myComputer?n("navCollapse"):n("navExpand"),icon:b.myComputer?"chevronDown":"chevronRight",onClick:()=>k("myComputer")},{label:n("menuOpen"),icon:"arrowRight",onClick:Ae},{separator:!0},{label:n("menuRefresh"),icon:"refresh",onClick:()=>void Dt()}])}function dt(U,P){Ve(U,P.path)}function it(U){ce(U,[{label:n("menuOpen"),icon:"arrowRight",onClick:B},{label:n("menuRefresh"),icon:"refresh",onClick:()=>void Dt()},{separator:!0},{label:n("recycleEmpty"),icon:"trash",disabled:(le.recycleItems?.length??0)===0,onClick:()=>void pu()}])}async function Oe(U){try{await navigator.clipboard.writeText(U),Y("ok",n("menuPathCopied"))}catch{Y("error",n("menuPathCopyFail"))}}return(U,P)=>(l(),c("div",{class:te(["fw-nav",{"external-active":p.value}])},[_e.value?(l(),c("button",{key:0,class:te(["fw-nav-item fw-nav-top fw-nav-leaf",{active:!p.value&&Te(_e.value)}]),title:_e.value.path,onClick:P[0]||(P[0]=Q=>be(_e.value)),onContextmenu:P[1]||(P[1]=xe(Q=>rt(Q,_e.value),["prevent","stop"]))},[o("span",tg,[m(se,{name:"home",size:14})]),o("span",ng,i(ke(_e.value)),1)],42,eg)):M("",!0),(l(!0),c(ie,null,Pe(he.value.filter(Q=>Q.type!=="download"),Q=>(l(),c("button",{key:Q.path,class:te(["fw-nav-item fw-nav-top fw-nav-leaf",{active:!p.value&&Te(Q)}]),title:Q.path,onClick:Ee=>be(Q),onContextmenu:xe(Ee=>rt(Ee,Q),["prevent","stop"])},[o("span",og,[m(se,{name:Ye(Q),size:14},null,8,["name"])]),o("span",ig,i(ke(Q)),1),o("span",{class:"fw-nav-pin",title:s(n)("favoritePin")},[m(se,{name:"pin",size:11})],8,ag)],42,sg))),128)),o("button",{class:te(["fw-nav-item fw-nav-top",{active:!p.value&&s(le).view==="recycle"}]),title:s(n)("recycleBin"),onClick:B,onContextmenu:xe(it,["prevent","stop"])},[o("span",rg,[m(se,{name:"trash",size:14})]),o("span",cg,i(s(n)("recycleBin")),1)],42,lg),P[7]||(P[7]=o("div",{class:"fw-nav-div","aria-hidden":"true"},null,-1)),(l(!0),c(ie,null,Pe(he.value.filter(Q=>Q.type==="download"),Q=>(l(),c("button",{key:Q.path,class:te(["fw-nav-item fw-nav-top fw-nav-leaf",{active:!p.value&&Te(Q)}]),title:Q.path,onClick:Ee=>be(Q),onContextmenu:xe(Ee=>rt(Ee,Q),["prevent","stop"])},[o("span",ug,[m(se,{name:Ye(Q),size:14},null,8,["name"])]),o("span",fg,i(ke(Q)),1),o("span",{class:"fw-nav-pin",title:s(n)("favoritePin")},[m(se,{name:"pin",size:11})],8,pg)],42,dg))),128)),P[8]||(P[8]=o("div",{class:"fw-nav-div","aria-hidden":"true"},null,-1)),o("div",{class:te(["fw-nav-sec",{collapsed:!s(b).myComputer,active:!p.value&&s(le).view==="computer"}])},[o("button",{class:"fw-sec-h","aria-expanded":s(b).myComputer,onClick:W,onContextmenu:xe(yt,["prevent","stop"])},[o("span",{class:te(["fw-caret",{open:s(b).myComputer}])},[m(se,{name:"chevronDown",size:11})],2),o("span",vg,[o("span",mg,[m(se,{name:"monitor",size:14})]),de(i(s(n)("navThisPc")),1)])],40,hg),s(b).myComputer?(l(),c("div",gg,[s(le).drivesErr?(l(),c("div",yg,i(s(le).drivesErr),1)):M("",!0),(l(!0),c(ie,null,Pe(s(le).drives,Q=>(l(),c("button",{key:Q.path,class:te(["fw-nav-item fw-nav-drive",{active:!p.value&&je(Q)}]),title:Q.path,onClick:Ee=>J(Q),onContextmenu:xe(Ee=>dt(Ee,Q),["prevent","stop"])},[o("span",bg,[m(se,{name:"hardDrive",size:13})]),o("span",kg,i(Q.name),1)],42,wg))),128))])):M("",!0)],2),d.value.length?(l(),c("div",{key:1,class:te(["fw-nav-sec fw-nav-external",{collapsed:h.value}])},[o("button",{class:"fw-sec-h","aria-expanded":!h.value,onClick:P[2]||(P[2]=Q=>r("toggle-external"))},[o("span",{class:te(["fw-caret",{open:!h.value}])},[m(se,{name:"chevronDown",size:11})],2),o("span",_g,i(s(n)("externalInjection")),1)],8,xg),h.value?M("",!0):(l(),c("div",Cg,[(l(!0),c(ie,null,Pe(d.value,Q=>(l(),c("button",{key:Q.id,class:te(["fw-nav-item fw-nav-external-item",{active:u.value===Q.id}]),title:w(Q),onClick:Ee=>r("select-external",Q.id)},[o("span",$g,[s(Ho)(Q.icon??"")?(l(),Xe(se,{key:0,name:Q.icon??"",size:14},null,8,["name"])):(l(),c("span",Tg,i(w(Q).slice(0,1)),1))]),o("span",Eg,[o("span",null,i(w(Q)),1)])],10,Sg))),128))]))],2)):M("",!0),o("div",{class:te(["fw-nav-sec",{collapsed:!s(b).ssh}])},[o("button",{class:"fw-sec-h","aria-expanded":s(b).ssh,onClick:P[3]||(P[3]=Q=>k("ssh")),onContextmenu:xe(C,["prevent","stop"])},[o("span",{class:te(["fw-caret",{open:s(b).ssh}])},[m(se,{name:"chevronDown",size:11})],2),o("span",Dg,i(s(n)("sshNavGroup")),1)],40,Ng),s(b).ssh?(l(),c("div",Rg,[s(rn).length===0?(l(),c("div",{key:0,class:"fw-nav-empty",onContextmenu:xe(C,["prevent","stop"])},i(s(n)("sshEmpty")),33)):M("",!0),(l(!0),c(ie,null,Pe(s(rn),Q=>(l(),c("button",{key:Q.id,class:te(["fw-nav-item",{active:!p.value&&F(Q)}]),title:`${Q.user}@${Q.host}:${Q.port}`,onClick:Ee=>D(Q),onContextmenu:xe(Ee=>H(Ee,Q),["prevent","stop"])},[o("span",Mg,[m(se,{name:"globe",size:13})]),o("span",Pg,i(Q.name||`${Q.user}@${Q.host}`),1),o("span",{class:te(["fw-ssh-dot",`is-${s(Zi)(Q.id)}`]),title:L(Q)},null,10,Fg)],42,Ag))),128))])):M("",!0)],2),o("div",{class:te(["fw-nav-sec",{collapsed:!s(b).favorites}])},[o("button",{class:"fw-sec-h","aria-expanded":s(b).favorites,onClick:P[4]||(P[4]=Q=>k("favorites"))},[o("span",{class:te(["fw-caret",{open:s(b).favorites}])},[m(se,{name:"chevronDown",size:11})],2),o("span",Og,i(s(n)("favorites")),1)],8,Lg),s(b).favorites?(l(),c("div",Ig,[Ze.value.length===0?(l(),c("div",Vg,i(s(n)("emptyFavorites")),1)):M("",!0),(l(!0),c(ie,null,Pe(Ze.value,Q=>(l(),c("button",{key:Q.path,class:te(["fw-nav-item",{active:!p.value&&ne.value===Q.path}]),title:Q.path,onClick:Ee=>we(Q.path),onContextmenu:xe(Ee=>Ve(Ee,Q.path,{openEditor:!1,openTerminal:!1,openParent:!0}),["prevent","stop"])},[o("span",jg,[m(se,{name:"star",size:13})]),o("span",Bg,i(Q.name),1)],42,zg))),128))])):M("",!0)],2),s(le).loadErr?(l(),c("div",Ug,[o("span",Hg,[m(se,{name:"warning",size:16})]),o("span",null,i(s(le).loadErr),1),o("button",{class:"fw-retry",onClick:P[5]||(P[5]=Q=>s(Dt)())},i(s(n)("retry")),1)])):M("",!0),s(st)?(l(),Xe(Zt,{key:3,items:s(qe),x:s(pe),y:s(Ce),onClose:P[6]||(P[6]=Q=>st.value=!1)},null,8,["items","x","y"])):M("",!0),m(Jm)],2))}}),Gg=_t(Wg,[["__scopeId","data-v-f2446309"]]),ia={start:0,end:0,padBefore:0,padAfter:0,total:0};function bc(t,e){return t<0?0:t>e?e:t}function qg(t,e,n,a=8){const r=g({...ia});function d(){const p=t.value,w=e.value;if(!p||w<=0||p.clientHeight<=0){r.value={...ia};return}const b=Math.max(0,p.scrollTop),k=bc(Math.floor(b/n)-a,w),F=Math.ceil(p.clientHeight/n)+a*2,L=bc(k+F,w);r.value={start:k,end:L,padBefore:k*n,padAfter:(w-L)*n,total:w*n}}function h(){d()}let u=null;return Je(t,p=>{u&&(u.disconnect(),u=null),Nt(d),p&&(u=new ResizeObserver(()=>{d()}),u.observe(p))}),Je(e,()=>{Nt(d)}),er(()=>{u?.disconnect(),u=null}),{range:r,onScroll:h,compute:d}}function Kg(t,e,n=90,a=3){const r=[],d=g({...ia}),h=new WeakMap;let u=null;function p(){return u||(u=new ResizeObserver(z=>{let H=!1;for(const C of z){const Z=h.get(C.target);if(Z===void 0)continue;const G=Math.max(1,Math.round(C.contentRect.height));r[Z]!==G&&(r[Z]=G,H=!0)}H&&b()})),u}function w(z){return r[z]??n}function b(){const z=t.value,H=e.value;if(!z||H<=0||z.clientHeight<=0){d.value={...ia};return}r.length>H&&(r.length=H);const C=Math.max(0,z.scrollTop),Z=new Array(H+1);Z[0]=0;for(let ne=0;ne<H;ne++)Z[ne+1]=Z[ne]+w(ne);const G=Z[H];let R=0,ue=H;const V=C-a*n;for(;R<ue;){const ne=R+ue>>1;Z[ne]<V?R=ne+1:ue=ne}let he=Math.max(0,R-a),_e=he;const ge=C+z.clientHeight+a*n;for(;_e<H&&Z[_e+1]<=ge;)_e++;_e=Math.min(H,_e+a),d.value={start:he,end:_e,padBefore:Z[he],padAfter:G-Z[_e],total:G}}function k(){b()}let F=null;Je(t,z=>{F&&(F.disconnect(),F=null),Nt(b),z&&(F=new ResizeObserver(()=>b()),F.observe(z))});function L(z){return H=>{const C=H;if(!C)return;const Z=p();r.length<z+1&&(r.length=z+1),h.set(C,z),Z.observe(C);const G=Math.max(1,Math.round(C.getBoundingClientRect().height));r[z]!==G&&(r[z]=G,Nt(b))}}function D(){r.length=0,Nt(b)}return Je(e,()=>{Nt(b)}),er(()=>{F?.disconnect(),F=null,u?.disconnect(),u=null}),{range:d,onScroll:k,compute:b,measure:L,resetHeights:D}}const Xg={class:"fw-search"},Yg={class:"fw-search-head"},Jg={class:"fw-tree-head"},Qg={class:"fw-search-opts"},Zg=["title"],e1=["title"],t1={key:0,class:"fw-loading"},n1={key:1,class:"fw-count"},s1={class:"fw-count-row"},o1={key:0,class:"fw-scopeline"},i1={key:2,class:"fw-empty"},a1=["onClick","title"],l1={class:"fw-ico"},r1={class:"fw-namerow"},c1={class:"fw-hitname"},d1={key:0,class:"fw-badge"},u1={class:"fw-hitpath"},f1={key:0,class:"fw-hitsnippet"},p1=vt({__name:"SearchPane",setup(t){const{t:e}=Ft(),n=g(null),a=I(()=>De.search.hits.length),r=Kg(n,a,56),d=I(()=>De.search.hits.slice(r.range.value.start,r.range.value.end));Je(()=>De.search.q,()=>{r.resetHeights(),n.value&&(n.value.scrollTop=0)});function h(){go("")}function u(){const z=De.search.q.trim();z&&go(z)}function p(){zo.value=!zo.value,u()}function w(){jo.value=!jo.value,u()}function b(z){fi(z)}function k(z){const H=(De.root||"").replace(/[\\/]+$/,"");return z.startsWith(H)?z.slice(H.length+1):z}const F=I(()=>De.search.hits.filter(z=>z.byContent)),L=g(!1);async function D(){const z=De.search.q.trim(),H=F.value.length;if(!H||!z)return;const C=await us({title:e("searchReplaceTitle"),message:e("searchReplaceConfirm",{files:H,count:H}),placeholder:e("findReplacePlaceholder")});if(C!==null){L.value=!0;try{const Z=await ud(z,C,{key:De.key,scope:De.search.scope||void 0,caseSensitive:zo.value,regex:jo.value});Y("ok",e("searchReplaceDone",{files:Z.files,count:Z.replacements})),go(z)}catch(Z){Y("error",Z.message)}finally{L.value=!1}}}return(z,H)=>{const C=Fn;return l(),c("div",Xg,[o("div",Yg,[o("span",Jg,i(s(e)("searchTitle")),1),o("span",Qg,[o("button",{class:te(["fw-search-opt",{on:s(zo)}]),title:s(e)("searchCase"),onClick:p},"Aa",10,Zg),o("button",{class:te(["fw-search-opt",{on:s(jo)}]),title:s(e)("searchRegex"),onClick:w},".*",10,e1)]),m(C,{size:"small",text:"",title:s(e)("clearSearch"),onClick:h},{default:oe(()=>[...H[1]||(H[1]=[de("✕",-1)])]),_:1},8,["title"])]),s(De).search.running?(l(),c("div",t1,i(s(e)("searching")),1)):s(De).search.q?(l(),c("div",n1,[o("div",s1,[o("span",null,[de(i(s(e)("resultsCount",{count:s(De).search.hits.length})),1),s(De).search.truncated?(l(),c(ie,{key:0},[de(i(s(e)("resultsSuffixTruncated")),1)],64)):M("",!0)]),F.value.length?(l(),Xe(C,{key:0,size:"small",type:"primary",plain:"",disabled:L.value,onClick:D},{default:oe(()=>[de(i(L.value?s(e)("searchReplaceBusy"):s(e)("searchReplaceAll")),1)]),_:1},8,["disabled"])):M("",!0)]),s(De).search.scope?(l(),c("div",o1,i(s(e)("searchScopeIn"))+" "+i(k(s(De).search.scope)),1)):M("",!0)])):(l(),c("div",i1,i(s(e)("searchIdle")),1)),o("div",{ref_key:"resRef",ref:n,class:"fw-results",onScroll:H[0]||(H[0]=(...Z)=>s(r).onScroll&&s(r).onScroll(...Z))},[o("div",{style:kt({height:s(r).range.value.padBefore+"px"})},null,4),(l(!0),c(ie,null,Pe(d.value,(Z,G)=>(l(),c("div",{key:Z.path,ref_for:!0,ref:s(r).measure(s(r).range.value.start+G),class:"fw-hit",onClick:R=>b(Z.path),title:s(e)("hitTitle")},[o("span",l1,[m(se,{name:"file",size:13})]),o("span",r1,[o("span",c1,i(Z.name),1),Z.byContent?(l(),c("span",d1,i(s(e)("matchContent")),1)):M("",!0)]),o("span",u1,i(k(Z.path)),1),Z.snippet?(l(),c("span",f1,i(Z.snippet),1)):M("",!0)],8,a1))),128)),o("div",{style:kt({height:s(r).range.value.padAfter+"px"})},null,4)],544)])}}}),h1=_t(p1,[["__scopeId","data-v-3880eff0"]]),v1=g(""),hi=g({op:"",paths:[]});function Ri(t){hi.value={op:"copy",paths:t}}function Io(t){hi.value={op:"cut",paths:t}}function m1(){hi.value={op:"",paths:[]}}function Ml(){return hi.value.paths.length>0}function g1(){return hi.value}async function kc(t){try{return await navigator.clipboard.writeText(t),!0}catch{return!1}}const Rt=gt({visible:!1,canSwitchView:!1,total:0,selected:0,text:"",view:"details"});let $u=null;function aa(t){$u=t}function y1(t){$u?.(t)}function Tu(){Rt.visible=!1,Rt.canSwitchView=!1,Rt.total=0,Rt.selected=0,Rt.text=""}const Aa=gt({dirs:{}});async function xs(t){if(t)try{const e=await eh(t);Aa.dirs[t]={inRepo:e.inRepo,branch:e.branch??"",entries:e.entries}}catch{}}function Eu(t){return Aa.dirs[t]?.inRepo??!1}function Nu(t,e){return Aa.dirs[t]?.entries?.[e]??""}const ri=gt({dirs:{}});async function ro(t){if(t)try{const e=await ps(t);if(!e.inRepo||!e.svnAvailable){ri.dirs[t]={inRepo:!1,entries:{}};return}const n=await Qt(t,["status","--depth","immediates"]),a={};if(n.code===0)for(const r of(n.stdout||"").split(/\r?\n/)){if(!r.trim())continue;const d=(r.slice(0,8)[0]??"").trim();let h=r.slice(8).trim();if(h=h.replace(/[\\/]+$/,""),!h||h==="."||h==="..")continue;const u=h.split(/[\\/]/).pop()??h,p=b1(d);p&&(a[u]=p)}ri.dirs[t]={inRepo:!0,entries:a}}catch{}}function w1(t){return ri.dirs[t]?.inRepo??!1}function Du(t,e){return ri.dirs[t]?.entries?.[e]??""}function b1(t){switch(t){case"A":return"added";case"M":return"modified";case"D":return"deleted";case"?":return"untracked";case"R":return"modified";case"!":return"deleted";case"C":return"modified";default:return""}}function k1(t){return(t||"").split(/\r?\n/).filter(e=>/^\s?[ADUGCER]{1,3}\s+\S/.test(e)).length}function x1(t){const e=[...(t||"").matchAll(/(?:revision|版本)\s*(\d+)/gi)];return e.length?e[e.length-1][1]:null}function _1(t){return t.slice(Math.max(t.lastIndexOf("/"),t.lastIndexOf("\\"))+1)}async function C1(t,e){try{if(!(await ps(t)).svnAvailable){Y("error",v("svnNoCli"));return}const a=await Qt(t,e);a.code===0?Y("ok",(a.stdout||v("svnDone")).split(`
`)[0].slice(0,200)):Y("error",(a.stderr||v("svnFailed")).split(`
`)[0].slice(0,200))}catch(n){Y("error",n.message)}}async function S1(t,e,n){try{if(!(await ps(t)).svnAvailable){Y("error",v("svnNoCli"));return}const r=await Qt(t,["add","--",t]);r.code===0?Y("ok",v("svnAdded")):Y("error",(r.stderr||v("svnFailed")).split(`
`)[0].slice(0,200))}catch(a){Y("error",a.message)}await n.afterMutate(e)}async function $1(t,e,n){try{if(!(await ps(t)).svnAvailable){Y("error",v("svnNoCli"));return}const r=t.replace(/[\\/]$/,""),d=r.replace(/[\\/][^\\/]+$/,""),h=r.slice(d.length+1),p=((await Qt(d,["propget","svn:ignore",d])).stdout||"").split(/\r?\n/).map(k=>k.trim()).filter(Boolean);if(p.includes(h)){Y("ok",v("gitIgnored")),await n.afterMutate(e);return}const w=[...p,h].join(`
`),b=await Qt(d,["propset","svn:ignore",w,d]);b.code===0?Y("ok",v("gitIgnored")):Y("error",(b.stderr||v("svnFailed")).split(`
`)[0].slice(0,200))}catch(a){Y("error",a.message)}await n.afterMutate(e)}async function T1(t,e,n){try{await nh(t),Y("ok",v("gitAdded"))}catch(a){Y("error",a.message)}await n.afterMutate(e)}async function E1(t,e,n){const a=_1(t);if(await Pt({title:v("gitDiscardTitle"),message:v("gitDiscardMsg",{name:a})})){try{await oh(t),Y("ok",v("gitDiscarded"))}catch(d){Y("error",d.message)}await n.afterMutate(e)}}async function N1(t,e,n){try{await gd(t),Y("ok",v("gitIgnored"))}catch(a){Y("error",a.message)}await n.afterMutate(e)}async function D1(t,e){try{const n=await th(t);e.showGitDiff(n.output??"")}catch(n){Y("error",n.message)}}function Pl(t,e,n){return Eu(t)?[{separator:!0},{icon:"git",label:v("gitMenu"),children:[{label:v("gitPanel"),icon:"git",onClick:()=>n.openGitPanel()},{separator:!0},{label:v("gitAdd"),icon:"upload",onClick:()=>void T1(e,t,n)},{label:v("gitCommit"),icon:"check",onClick:()=>n.openCommit()},{label:v("gitDiff"),icon:"code",onClick:()=>void D1(e,n)},{label:v("gitDiscard"),icon:"undo",onClick:()=>void E1(e,t,n)},{label:v("gitIgnore"),icon:"eyeOff",onClick:()=>void N1(e,t,n)}]}]:[]}function Fl(t,e,n){return w1(t)?[{separator:!0},{icon:"svn",label:v("svnMenu"),children:[{label:v("svnPanel"),icon:"svn",onClick:()=>n.openSvnPanel()},{label:v("svnUpdate"),icon:"sync",onClick:()=>void C1(e,["update"])},{separator:!0},{label:v("svnAdd"),icon:"upload",onClick:()=>void S1(e,t,n)},{label:v("svnIgnore"),icon:"eyeOff",onClick:()=>void $1(e,t,n)}]}]:[]}const R1={key:0,class:"fw-quickcommit-empty"},A1={class:"fw-gitcommit-files-title fw-gitcommit-files-caption"},M1={class:"fw-gitcommit-files"},P1=["title"],F1={key:1,class:"fw-quickcommit-empty"},L1={key:2,class:"fw-gitcommit-error"},O1={class:"fw-gitconfig-field"},I1={class:"fw-gitconfig-field"},V1=vt({__name:"QuickCommit",props:{modelValue:{type:Boolean},dir:{}},emits:["update:modelValue","done"],setup(t,{emit:e}){const n=t,a=e,{t:r}=Ft(),d=g(null),h=g([]),u=g(""),p=g(""),w=gt({loading:!1,commit:!1,config:!1}),b=g(!1),k=g(""),F=g(""),L={"":"",untracked:"?",added:"A",modified:"M",deleted:"D"};function D(V){return L[V]}function z(){a("update:modelValue",!1)}async function H(){if(u.value="",p.value="",!n.dir){z();return}w.loading=!0;try{if(d.value=await ei(n.dir),!d.value.inRepo){Y("error",r("gitNotRepo")),z();return}if(await C(),!h.value.length){Y("error",r("gitNoChanges")),z();return}}catch(V){Y("error",V.message),z()}finally{w.loading=!1}}async function C(){d.value=await ei(n.dir),h.value=d.value?.staged??[]}async function Z(){const V=u.value.trim();if(!(!V||!d.value)){w.commit=!0,p.value="";try{await sh(d.value.repo,V),a("done"),Y("ok",r("gitCommitted")),z()}catch(he){p.value=he.message}finally{w.commit=!1}}}const G=g(!1);Je(p,V=>{G.value=/user\.(name|email)|Author identity/i.test(V??"")});async function R(){try{const V=await yd();k.value=V.name??"",F.value=V.email??""}catch{}b.value=!0}async function ue(){w.config=!0;try{await wd(k.value,F.value),p.value="",b.value=!1,Y("ok",r("gitConfigSaved"))}catch(V){Y("error",V.message)}finally{w.config=!1}}return(V,he)=>{const _e=Es,ge=Fn,ne=dn;return l(),Xe(ne,{"model-value":t.modelValue,title:s(r)("gitCommitTitle"),width:"520px",class:"fw-gitcommit-dialog","close-on-click-modal":!1,"onUpdate:modelValue":z,onOpen:H},{footer:oe(()=>[m(ge,{onClick:z},{default:oe(()=>[de(i(s(r)("cancel")),1)]),_:1}),m(ge,{onClick:R},{default:oe(()=>[de(i(s(r)("gitConfig")),1)]),_:1}),m(ge,{type:"primary",loading:w.commit,disabled:!u.value.trim(),onClick:Z},{default:oe(()=>[de(i(s(r)("gitCommitConfirm")),1)]),_:1},8,["loading","disabled"])]),default:oe(()=>[w.loading?(l(),c("div",R1,i(s(r)("gitLoading")),1)):(l(),c(ie,{key:1},[m(_e,{modelValue:u.value,"onUpdate:modelValue":he[0]||(he[0]=ae=>u.value=ae),placeholder:s(r)("gitCommitPlaceholder"),type:"textarea",rows:3,class:"fw-gitcommit-msg",onKeydown:bt(xe(Z,["ctrl"]),["enter"])},null,8,["modelValue","placeholder","onKeydown"]),h.value.length?(l(),c(ie,{key:0},[o("div",A1,i(s(r)("gitCommitFiles",{n:h.value.length})),1),o("div",M1,[(l(!0),c(ie,null,Pe(h.value,ae=>(l(),c("div",{key:ae.path,class:"fw-gitcommit-file"},[o("span",{class:te(["fw-gitpanel-st","st-"+ae.status])},i(D(ae.status)),3),o("span",{class:"fw-gitpanel-path",title:ae.path},i(ae.path),9,P1)]))),128))])],64)):(l(),c("div",F1,i(s(r)("gitNoChanges")),1)),p.value?(l(),c("div",L1,[de(i(p.value)+" ",1),G.value?(l(),Xe(ge,{key:0,text:"",size:"small",onClick:R},{default:oe(()=>[de(i(s(r)("gitConfigTitle")),1)]),_:1})):M("",!0)])):M("",!0),m(ne,{modelValue:b.value,"onUpdate:modelValue":he[4]||(he[4]=ae=>b.value=ae),title:s(r)("gitConfigTitle"),width:"420px",class:"fw-gitconfig-dialog","close-on-click-modal":!1},{footer:oe(()=>[m(ge,{onClick:he[3]||(he[3]=ae=>b.value=!1)},{default:oe(()=>[de(i(s(r)("cancel")),1)]),_:1}),m(ge,{type:"primary",loading:w.config,onClick:ue},{default:oe(()=>[de(i(s(r)("gitConfigSave")),1)]),_:1},8,["loading"])]),default:oe(()=>[o("div",O1,[o("label",null,i(s(r)("gitConfigName")),1),m(_e,{modelValue:k.value,"onUpdate:modelValue":he[1]||(he[1]=ae=>k.value=ae),size:"small",placeholder:s(r)("gitConfigNamePlaceholder")},null,8,["modelValue","placeholder"])]),o("div",I1,[o("label",null,i(s(r)("gitConfigEmail")),1),m(_e,{modelValue:F.value,"onUpdate:modelValue":he[2]||(he[2]=ae=>F.value=ae),size:"small",placeholder:s(r)("gitConfigEmailPlaceholder")},null,8,["modelValue","placeholder"])])]),_:1},8,["modelValue","title"])],64))]),_:1},8,["model-value","title"])}}}),Ru=_t(V1,[["__scopeId","data-v-e839f655"]]),Ll="",Ol=["%H","%h","%an","%ae","%at","%ar","%s","%P","%D"].join("%x1f"),z1=["%H","%h","%an","%ae","%at","%ar","%P","%D","%s","%b"].join("%x1f");function Au(t){const e=t.trim();return e?e.split(",").map(n=>n.trim()).filter(Boolean).map(n=>n.startsWith("HEAD -> ")?{label:n.slice(8),kind:"head"}:n==="HEAD"?{label:"HEAD",kind:"head"}:n.startsWith("tag: ")?{label:n.slice(5),kind:"tag"}:n.includes("/")?{label:n,kind:"remote"}:{label:n,kind:"branch"}):[]}function Il(t){const e=[];for(const n of t.split(`
`)){if(!n.trim())continue;const a=n.split(Ll);if(a.length<9)continue;const r=(a[7]??"").trim();e.push({hash:a[0],short:a[1],author:a[2],email:a[3],ts:Number(a[4])||0,date:a[5],subject:a[6],parents:r?r.split(/\s+/):[],refs:Au(a[8]??"")})}return e}function j1(t){const e=t.split(Ll);if(e.length<9)return null;const n=(e[6]??"").trim();return{hash:e[0],short:e[1],author:e[2],email:e[3],ts:Number(e[4])||0,date:e[5],subject:e[8],parents:n?n.split(/\s+/):[],refs:Au(e[7]??""),body:e.slice(9).join(Ll).trim()}}function B1(t){const e=[];for(const n of t.split(`
`)){if(!n.trim())continue;const a=n.split("	");if(a.length<3)continue;const[r,d]=a,h=a.slice(2).join("	");if(!h)continue;const u=r==="-"||d==="-";e.push({path:h,add:u?0:Number(r)||0,del:u?0:Number(d)||0,binary:u})}return e}function U1(t){const e=[],n=/^(\^?[0-9a-fA-F]{7,40})\s+\((.*?)\s+(\d{4}-\d{2}-\d{2})\s+(\d+)\)\s?(.*)$/;for(const a of t.split(`
`)){const r=n.exec(a);r&&e.push({hash:r[1].replace(/^\^/,""),author:r[2].trim(),date:r[3],line:Number(r[4])||0,text:r[5]??""})}return e}function H1(t){return t.startsWith("+++")||t.startsWith("---")?"head":t.startsWith("@@")?"meta":t.startsWith("diff ")||t.startsWith("index ")||t.startsWith("new file")||t.startsWith("deleted file")||t.startsWith("similarity index")||t.startsWith("rename ")||t.startsWith("Binary files")?"head":t.startsWith("+")?"add":t.startsWith("-")?"del":"ctx"}const xc=["#58a6ff","#f0883e","#3fb950","#bc8cff","#f778ba","#39c5cf","#d29922","#8b949e"];function Mu(t){const e=[];let n=[],a=[],r=0;const d=h=>{for(;n.length<=h;)n.push(null),a.push(null)};for(const h of t){let u=n.indexOf(h.hash);if(u<0){let z=n.indexOf(null);z<0&&(z=n.length,d(z)),n[z]=h.hash,a[z]=r++,u=z}const p=a[u]??0,w=n.slice(),[b,...k]=h.parents;n[u]=null,a[u]=null,b!=null&&n.indexOf(b)<0&&(n[u]=b,a[u]=p);for(const z of k){if(n.includes(z))continue;let H=n.indexOf(null);H<0&&(H=n.length,d(H)),n[H]=z,a[H]=r++}const F=Math.max(w.length,n.length),L=[];for(let z=0;z<F;z++)z!==u&&(w[z]??null)!=null&&(n[z]??null)!=null&&L.push({lane:z,color:a[z]??0});const D=[];for(const z of h.parents){const H=n.indexOf(z);H>=0&&D.push({from:u,to:H,color:a[H]??p})}for(e.push({commit:h,lane:u,laneColor:p,topLine:w[u]!=null,through:L,bends:D,width:F});n.length&&n[n.length-1]===null;)n.pop(),a.pop()}return e}const $s=14;function Xn(t){return xc[t%xc.length]}const qt=gt({open:!1,kind:"git",dir:"",key:"",onDone:void 0});function $r(t){qt.kind=t?.kind==="svn"?"svn":"git",qt.dir=t?.dir??"",qt.key=t?.key??"",qt.onDone=t?.onDone,qt.open=!0}function _c(){qt.open=!1,qt.onDone=void 0}const W1={class:"fw-diff"},G1={key:0,class:"fw-diff-empty"},q1={class:"fw-diff-body"},K1={key:0,class:"fw-diff-empty"},Xa=5e3,X1=vt({__name:"GitDiffView",props:{lines:{},empty:{}},setup(t){const e=t,{t:n}=Ft(),a=I(()=>e.lines.length>Xa?e.lines.slice(0,Xa):e.lines),r=I(()=>e.lines.length>Xa);return(d,h)=>(l(),c("div",W1,[t.lines.length?(l(),c(ie,{key:1},[o("div",q1,[(l(!0),c(ie,null,Pe(a.value,(u,p)=>(l(),c("div",{key:p,class:te(["fw-diff-line","dl-"+s(H1)(u)])},i(u||" "),3))),128))]),r.value?(l(),c("div",K1,i(s(n)("gitDiffTruncated")),1)):M("",!0)],64)):(l(),c("div",G1,i(t.empty),1))]))}}),Jo=_t(X1,[["__scopeId","data-v-10e524c1"]]),Y1={class:"fw-graph"},J1=["title","onClick"],Q1=["width"],Z1=["x1","x2","stroke"],ey=["x1","x2","y2","stroke"],ty=["x1","y1","x2","stroke"],ny=["d","stroke"],sy=["cx","cy","r","fill","stroke"],oy={class:"fw-graph-main"},iy={class:"fw-graph-subject"},ay={key:0,class:"fw-graph-refs"},ly={class:"fw-graph-meta"},ry={class:"fw-graph-hash"},cy={key:0,class:"fw-graph-empty"},is=28,Vs=8,dy=vt({__name:"GitGraphList",props:{rows:{},active:{},empty:{}},emits:["select"],setup(t){function e(h){return h*$s+$s/2}function n(h,u){const p=is/2,w=is*.82;return`M ${e(h)} ${p} C ${e(h)} ${w}, ${e(u)} ${w}, ${e(u)} ${is}`}function a(h){return h.through.filter(u=>u.lane<Vs)}function r(h){return h.bends.filter(u=>u.from<Vs&&u.to<Vs)}function d(h){return h.commit.refs.some(u=>u.kind==="head")}return(h,u)=>(l(),c("div",Y1,[(l(!0),c(ie,null,Pe(t.rows,p=>(l(),c("button",{key:p.commit.hash,class:te(["fw-graph-row",{active:p.commit.hash===t.active}]),title:p.commit.subject,onClick:w=>h.$emit("select",p.commit)},[o("span",{class:"fw-graph-lanes",style:kt({width:`${Math.min(p.width,Vs)*s($s)}px`})},[(l(),c("svg",{width:Math.min(p.width,Vs)*s($s),height:is,"aria-hidden":"true"},[(l(!0),c(ie,null,Pe(a(p),(w,b)=>(l(),c("line",{key:"t"+b,x1:e(w.lane),y1:0,x2:e(w.lane),y2:is,stroke:s(Xn)(w.color)},null,8,Z1))),128)),p.topLine&&p.lane<Vs?(l(),c("line",{key:0,x1:e(p.lane),y1:0,x2:e(p.lane),y2:is/2,stroke:s(Xn)(p.laneColor)},null,8,ey)):M("",!0),(l(!0),c(ie,null,Pe(r(p),(w,b)=>(l(),c(ie,{key:"b"+b},[w.from===w.to?(l(),c("line",{key:0,x1:e(w.from),y1:is/2,x2:e(w.to),y2:is,stroke:s(Xn)(w.color)},null,8,ty)):(l(),c("path",{key:1,d:n(w.from,w.to),fill:"none",stroke:s(Xn)(w.color)},null,8,ny))],64))),128)),p.lane<Vs?(l(),c("circle",{key:1,cx:e(p.lane),cy:is/2,r:d(p)?4.5:3.5,fill:s(Xn)(p.laneColor),stroke:d(p)?"var(--dsh-bg, #0d1117)":"none","stroke-width":"1.5"},null,8,sy)):M("",!0)],8,Q1))],4),o("span",oy,[o("span",iy,i(p.commit.subject),1),p.commit.refs.length?(l(),c("span",ay,[(l(!0),c(ie,null,Pe(p.commit.refs,w=>(l(),c("span",{key:w.kind+w.label,class:te(["fw-graph-ref","rf-"+w.kind])},[m(se,{name:w.kind==="tag"?"tag":"git",size:9},null,8,["name"]),de(" "+i(w.label),1)],2))),128))])):M("",!0)]),o("span",ly,[de(i(p.commit.author),1),u[0]||(u[0]=o("span",{class:"fw-graph-dot"},"·",-1)),de(i(p.commit.date),1)]),o("span",ry,i(p.commit.short),1)],10,J1))),128)),t.rows.length?M("",!0):(l(),c("div",cy,i(t.empty),1))]))}}),uy=_t(dy,[["__scopeId","data-v-61d062db"]]),Mn=g([]),fy=g(!1),_n=gt({open:!1,kind:"git",url:""});function Tr(t){_n.kind=t.kind,_n.url=t.url??"",_n.open=!0}function Ya(){_n.open=!1}async function ho(){const t=await lh().catch(()=>null);t&&(Mn.value=t.accounts),fy.value=!0}const py={key:0,class:"fw-gp-shell"},hy={class:"fw-gp-head"},vy=["title"],my=["title"],gy={class:"fw-gp-up-name"},yy=["title"],wy={class:"fw-gp-headacts"},by={class:"fw-gp-body"},ky={class:"fw-gp-rail"},xy=["onClick"],_y={class:"fw-gp-rail-txt"},Cy={key:0,class:"fw-gp-rail-badge"},Sy={key:0,class:"fw-gp-rail-op"},$y={class:"fw-gp-content"},Ty={key:0,class:"fw-gp-split"},Ey={class:"fw-gp-list"},Ny={key:0,class:"fw-gp-empty"},Dy={class:"fw-gp-groupbar"},Ry={class:"fw-gp-groupname"},Ay={class:"fw-gp-groupcount"},My=["title"],Py=["title","onClick","onContextmenu"],Fy={class:"fw-gp-path"},Ly={key:0,class:"fw-gp-dir"},Oy={class:"fw-gp-rowacts"},Iy=["title","onClick"],Vy=["title","onClick"],zy={class:"fw-gp-detail"},jy={class:"fw-gp-detailhead"},By=["title"],Uy={class:"fw-gp-detailacts"},Hy=["title"],Wy=["title"],Gy=["title"],qy=["title"],Ky={key:0,class:"fw-gp-empty"},Xy={key:0,class:"fw-gp-empty"},Yy={key:1,class:"fw-gp-scroll"},Jy={class:"fw-gp-hash"},Qy=["title"],Zy={class:"fw-gp-filemeta"},ew={key:0,class:"fw-gp-empty"},tw={key:1,class:"fw-gp-scroll fw-gp-blame"},nw=["title"],sw=["title"],ow={class:"fw-gp-blame-date"},iw={class:"fw-gp-blame-no"},aw={class:"fw-gp-blame-txt"},lw={key:1,class:"fw-gp-split"},rw={class:"fw-gp-list fw-gp-list-col"},cw={class:"fw-gp-listbar"},dw={class:"fw-gp-count"},uw={class:"fw-gp-detail"},fw={key:0,class:"fw-gp-empty"},pw={class:"fw-gp-detailhead"},hw=["title"],vw={class:"fw-gp-detailacts"},mw=["title"],gw=["title"],yw=["title"],ww=["title"],bw={class:"fw-gp-scroll"},kw={class:"fw-gp-cmeta"},xw={class:"fw-gp-crow"},_w={class:"k"},Cw={class:"v mono"},Sw={class:"fw-gp-crow"},$w={class:"k"},Tw={class:"v"},Ew={class:"fw-gp-crow"},Nw={class:"k"},Dw={class:"v"},Rw={class:"fw-gp-crow"},Aw={class:"k"},Mw={class:"v mono"},Pw={key:0,class:"fw-gp-crow"},Fw={class:"k"},Lw={class:"v"},Ow={class:"fw-gp-cbody"},Iw={class:"fw-gp-cfiles"},Vw={key:0,class:"fw-gp-empty"},zw=["title","onClick"],jw={class:"fw-gp-path"},Bw={key:0,class:"fw-gp-dir"},Uw={class:"fw-gp-num"},Hw={class:"add"},Ww={class:"del"},Gw={key:2,class:"fw-gp-one"},qw={class:"fw-gp-listbar"},Kw={class:"fw-gp-sec-title"},Xw=["onContextmenu"],Yw={class:"fw-gp-st st-branch"},Jw={class:"fw-gp-path"},Qw={key:0,class:"fw-gp-cur"},Zw={class:"fw-gp-rowacts"},eb={class:"fw-gp-sec-title"},tb=["onContextmenu"],nb={class:"fw-gp-st st-remote"},sb={class:"fw-gp-path"},ob={class:"fw-gp-rowacts"},ib={key:3,class:"fw-gp-one"},ab={class:"fw-gp-sectabs"},lb={key:0,class:"fw-gp-sectab-n"},rb={key:0,class:"fw-gp-sectab-n"},cb={class:"fw-gp-form"},db={key:0,class:"fw-gp-empty"},ub=["title","onContextmenu"],fb={class:"fw-gp-st st-tag"},pb={class:"fw-gp-path"},hb={key:0,class:"fw-gp-badge"},vb={key:1,class:"fw-gp-badge fw-gp-badge-remote"},mb={key:0,class:"fw-gp-date"},gb=["title"],yb={class:"fw-gp-hash"},wb={class:"fw-gp-rowacts"},bb={class:"fw-gp-form"},kb={key:0,class:"fw-gp-subject"},xb={class:"fw-gp-form"},_b={key:0,class:"fw-gp-empty"},Cb={key:1,class:"fw-gp-empty"},Sb=["title"],$b={class:"fw-gp-st st-tag"},Tb={class:"fw-gp-path"},Eb={class:"fw-gp-badge"},Nb={key:0,class:"fw-gp-date"},Db={class:"fw-gp-rowacts"},Rb={key:4,class:"fw-gp-one"},Ab={class:"fw-gp-form"},Mb={key:0,class:"fw-gp-empty"},Pb=["onContextmenu"],Fb={class:"fw-gp-st st-remote"},Lb={class:"fw-gp-path"},Ob=["title"],Ib={key:5,class:"fw-gp-split"},Vb={class:"fw-gp-list"},zb={class:"fw-gp-listbar"},jb={key:0,class:"fw-gp-empty"},Bb=["title","onClick","onContextmenu"],Ub={class:"fw-gp-st st-stash"},Hb={class:"fw-gp-path"},Wb={class:"fw-gp-rowacts"},Gb=["title","onClick"],qb={class:"fw-gp-detail"},Kb={class:"fw-gp-detailhead"},Xb={class:"fw-gp-detailtitle"},Yb={key:6,class:"fw-gp-one fw-gp-cli-wrap"},Jb={key:0,class:"fw-gp-cli-hint"},Qb={class:"fw-gp-cli-prompt"},Zb={class:"fw-gp-cli-cmd"},e0={class:"fw-gp-cli-inputline"},t0={class:"fw-gp-cli-prompt"},n0={key:0,class:"fw-gp-commitbar"},s0={class:"fw-gp-commitacts"},o0={class:"fw-gp-commitmeta"},i0={key:0},a0={key:1,class:"fw-gitpanel-empty"},l0={key:1,class:"fw-norepo"},r0={class:"fw-gp-cfgfield"},c0={class:"fw-gp-cfgfield"},d0={key:0,class:"fw-gp-cv"},u0={class:"fw-gp-cv-meta"},f0={class:"fw-gp-crow"},p0={class:"k"},h0={class:"v mono"},v0={class:"fw-gp-crow"},m0={class:"k"},g0={class:"v"},y0={class:"fw-gp-crow"},w0={class:"k"},b0={class:"v"},k0={class:"fw-gp-cbody fw-gp-cbody-clamp"},x0={class:"fw-gp-cv-body"},_0={class:"fw-gp-cv-files"},C0={key:0,class:"fw-gp-empty"},S0=["title","onClick"],$0={class:"fw-gp-path"},T0={key:0,class:"fw-gp-dir"},E0={class:"fw-gp-num"},N0={class:"add"},D0={class:"del"},R0={class:"fw-gp-cv-diff"},A0={key:1,class:"fw-gp-empty"},M0={class:"fw-gp-cfgfield"},P0={class:"fw-gp-cfgfield"},F0={class:"fw-gp-cfgfield"},Ja=120,L0=vt({__name:"GitPanel",props:{modelValue:{type:Boolean},dir:{}},setup(t){const e=t,{t:n}=Ft(),a=[{key:"changes",icon:"fileText",label:"gitRailChanges"},{key:"history",icon:"clock",label:"gitRailHistory"},{key:"branches",icon:"git",label:"gitRailBranches"},{key:"tags",icon:"tag",label:"gitRailTags"},{key:"remotes",icon:"globe",label:"gitRailRemotes"},{key:"stash",icon:"stash",label:"gitRailStash"},{key:"cli",icon:"terminal",label:"gitRailCli"}],r=g("changes"),d=g(null),h=gt({refresh:!1,sync:"",op:!1,commit:!1,branch:!1,stash:!1,config:!1}),u=g(null),p=g("diff"),w=g([]),b=g(""),k=g([]),F=g([]),L=g(""),D=g([]),z=g(!1),H=g(""),C=g(null),Z=g([]),G=g(""),R=g([]),ue=g(Ja),V=g([]),he=g([]),_e=g([]),ge=g(""),ne=g(""),ae=g(""),Te=g(""),je=g(!1),be=g(!1),Ae=g(""),W=g(""),J=g(""),B=g("tags"),ee=g([]),ye=g(""),ze=g(!1),Ke=g(""),Ze=g(""),we=g(""),ke=g(""),Ye=g([]),st=g(""),pe=g(""),Ce=g([]),qe=g(!1),ce=g(""),Ve=g(""),rt=g(null),yt=g(null),dt=g(""),it=g([]),Oe=I(()=>d.value?.branch??""),U=I(()=>!!d.value?.inRepo&&!Oe.value),P=I(()=>(d.value?.repo??"").replace(/\\/g,"/")),Q=I(()=>V.value.find(T=>T.current)??null),Ee=I(()=>Q.value?.upstream??""),O=g(0),E=g(0),K=I(()=>Ee.value?`${Ee.value}  ↑${O.value} ↓${E.value}`:n("gitNoUpstream")),$=I(()=>U.value?n("gitHeadDetached"):n("gitStatusColon",{branch:Oe.value})),q=I(()=>V.value.filter(T=>!T.name.includes("/"))),Ne=I(()=>V.value.filter(T=>T.name.includes("/"))),re=I(()=>`${P.value}>git `),ct=I(()=>(d.value?.unstaged.length??0)+(d.value?.staged.length??0)>0),wt=I(()=>_e.value.length>0),Lt=I(()=>{const T=d.value;return T?[{key:"staged",label:n("gitGroupStaged"),list:T.staged},{key:"unstaged",label:n("gitGroupUnstaged"),list:T.unstaged},{key:"untracked",label:n("gitGroupUntracked"),list:T.untracked}].filter(S=>S.list.length>0):[]}),Ln=I(()=>u.value?p.value==="history"?`${n("gitFileHistory")} — ${u.value.file.path}`:p.value==="blame"?`${n("gitBlame")} — ${u.value.file.path}`:u.value.file.path:""),Gt=I(()=>b.value||n("gitDiffEmpty"));function Be(T){const S=d.value;return S?T==="changes"?S.staged.length+S.unstaged.length+S.untracked.length:T==="branches"?q.value.length:T==="tags"?he.value.length:T==="remotes"?_e.value.length:T==="stash"?Ye.value.length:0:0}const Qe={"":"",untracked:"?",added:"A",modified:"M",deleted:"D"};function et(T){return Qe[T]}function at(T){const S=T.lastIndexOf("/");return S>0?T.slice(0,S+1):""}function Cn(T){const S=T.lastIndexOf("/");return S>=0?T.slice(S+1):T}function Sn(T){return T?new Date(T*1e3).toLocaleString():"—"}async function Bt(T){const S=d.value?.repo;if(!S)throw new Error(n("gitNotRepo"));return Go(S,T)}async function ot(T){const S=await Bt(T);if(S.code!==0)throw new Error((S.stderr||S.stdout||n("gitOpFailed")).trim());return S.stdout}async function ft(T,S,$e){h.op=!0;try{return await T(),S&&Y("ok",n(S,$e)),await Ct(),!0}catch(nt){return Y("error",nt.message),!1}finally{h.op=!1}}async function Ct(T=!1){if(!(!e.dir||!_a(e.dir))){T||(h.refresh=!0);try{if(d.value=await ei(e.dir),!d.value.inRepo)return;await Promise.all([$n(),gn(),Ds()]),u.value&&await In(u.value.file,u.value.group,!0)}catch(S){T||Y("error",S.message)}finally{T||(h.refresh=!1)}}}function On(){r.value="changes",Ct()}Je(()=>e.dir,()=>{e.modelValue&&Ct()});async function $n(){const T=await ot(["for-each-ref","--sort=-creatordate","--format=%(refname)%09%(objectname:short)%09%(upstream:short)%09%(HEAD)%09%(*objectname:short)%09%(creatordate:short)%09%(contents:subject)","refs/heads","refs/remotes","refs/tags"]).catch(()=>""),S=[],$e=[];for(const $t of T.split(`
`)){if(!$t.trim())continue;const[ut,j,lt,Yt,jn,Is,...bi]=$t.split("	");if(ut)if(ut.startsWith("refs/remotes/")){const ki=ut.slice(13);if(ki.endsWith("/HEAD"))continue;S.push({name:ki,hash:j??"",upstream:"",current:!1})}else ut.startsWith("refs/heads/")?S.push({name:ut.slice(11),hash:j??"",upstream:lt??"",current:Yt==="*"}):ut.startsWith("refs/tags/")&&$e.push({name:ut.slice(10),hash:jn||j||"",upstream:"",current:!1,deref:jn,date:Is,subject:bi.join("	").trim()})}if(S.sort(($t,ut)=>$t.name.localeCompare(ut.name)),V.value=S,he.value=$e,O.value=0,E.value=0,Ee.value){const $t=await Bt(["rev-list","--left-right","--count",`HEAD...${Ee.value}`]).catch(()=>null);if($t&&$t.code===0){const[ut,j]=$t.stdout.trim().split(/\s+/);O.value=Number(ut)||0,E.value=Number(j)||0}}const nt=await Bt(["remote","-v"]).catch(()=>null),zt=new Map;for(const $t of(nt?.stdout??"").split(`
`)){const[ut,j]=$t.split(/\s+/);ut&&j&&!zt.has(ut)&&zt.set(ut,j)}_e.value=[...zt].map(([$t,ut])=>({name:$t,url:ut})),await Jn()}async function Jn(){const T=new Set(he.value.map(nt=>nt.name)),S=new Set,$e=[];for(const nt of _e.value){const zt=await Bt(["ls-remote","--tags",nt.name]).catch(()=>null);if(!zt||zt.code!==0)continue;const $t=new Map;for(const ut of zt.stdout.split(`
`)){const j=/^([0-9a-f]+)\t(refs\/tags\/(.+))$/.exec(ut.trim());if(!j)continue;const lt=j[1],Yt=j[3];if(Yt.endsWith("^{}")){const jn=Yt.slice(0,-3),Is=$t.get(jn);Is?Is.deref=lt:$t.set(jn,{hash:lt,deref:lt})}else{const jn=$t.get(Yt);jn?jn.hash=lt:$t.set(Yt,{hash:lt})}}for(const[ut,j]of $t)T.has(ut)||S.has(ut)||(S.add(ut),$e.push({name:ut,hash:j.deref||j.hash,upstream:"",current:!1,deref:j.deref,remoteOnly:!0,remote:nt.name}))}$e.length&&(he.value=[...he.value,...$e.sort((nt,zt)=>zt.name.localeCompare(nt.name,void 0,{numeric:!0}))])}async function gn(){const T=["log",`--max-count=${ue.value}`,"--date-order"];z.value&&T.push("--all"),T.push(`--pretty=format:${Ol}`);const S=await ot(T).catch(()=>"");D.value=Mu(Il(S))}function Tn(T){z.value!==T&&(z.value=T,ue.value=Ja,gn().catch(()=>{}))}async function eo(){ue.value+=Ja,await gn().catch(()=>{})}async function Ds(){const T=await Bt(["stash","list"]).catch(()=>null);Ye.value=En(T?.stdout??"")}function En(T){const S=[];for(const $e of T.split(`
`)){const nt=/^(stash@\{[^}]+\}):\s*(.*)$/.exec($e.trim());nt&&S.push({ref:nt[1],full:$e.trim(),message:nt[2]||nt[1]})}return S}async function un(T,S){u.value={file:T,group:S},p.value="diff",await In(T,S)}async function In(T,S,$e=!1){b.value="";try{if(S==="untracked"){w.value=[],b.value=n("gitDiffUntrackedHint");return}const nt=["diff","--no-color",...S==="staged"?["--cached"]:[],"--",T.path];Gn(await ot(nt))}catch(nt){$e||Y("error",nt.message),w.value=[]}}function Gn(T){w.value=T?T.split(`
`):[]}async function Nn(){const T=u.value;if(T){p.value="history",k.value=[];try{const S=await ot(["log","--follow","--max-count=30",`--pretty=format:${Ol}`,"--",T.file.path]);k.value=Il(S)}catch(S){Y("error",S.message)}}}async function yn(){const T=u.value;if(T){p.value="blame",F.value=[];try{const S=await ot(["blame","--date=short","-w","--",T.file.path]);F.value=U1(S)}catch(S){Y("error",S.message)}}}async function wn(T){await ft(async()=>{await ot(["add","--",T.path])})}async function Qn(T){await ft(async()=>{await ot(["restore","--staged","--",T.path])})}async function Dn(T){await Pt({title:n("gitDiscardTitle"),message:n("gitDiscardMsg",{name:T.path})})&&await ft(async()=>{await ot(["checkout","--",T.path])},"gitDiscarded")}async function N(T){const S=d.value?.repo;if(!S)return;const $e=`${S.replace(/\\/g,"/")}/${T.path}`.replace(/\/{2,}/g,"/");await ft(async()=>{await gd($e)},"gitIgnored")}async function ve(){await ft(async()=>{await ot(["add","-A"])})}async function Ie(){const T=L.value.trim(),S=d.value;if(!(!T||!S?.staged.length)){h.commit=!0;try{await ot(["commit","-m",T]),L.value="",Y("ok",n("gitCommitted")),await Ct()}catch($e){Y("error",$e.message)}finally{h.commit=!1}}}async function He(T){H.value=T.hash,G.value="",R.value=[],Z.value=[];try{const[S,$e]=await Promise.all([ot(["show","-s",`--format=${z1}`,T.hash]),ot(["diff-tree","--no-commit-id","--numstat","-r","--root",T.hash])]);C.value=j1(S)??{...T,body:""},Z.value=B1($e)}catch(S){Y("error",S.message)}}async function Me(T){const S=H.value;if(S){G.value=T.path,R.value=[];try{const $e=await ot(["show","--no-color","--format=",S,"--",T.path]);R.value=$e?$e.split(`
`):[]}catch($e){Y("error",$e.message)}je.value=!0}}async function Ge(T){try{await navigator.clipboard.writeText(T),Y("ok",n("gitCopied"))}catch{Y("error",n("gitOpFailed"))}}const{cmOpen:Et,cmX:St,cmY:bn,cmItems:Vn,openMenu:Rn,closeMenu:to}=hn();function Ro(T,S,$e){const nt=[{label:n("gitDiff"),icon:"code",onClick:()=>void un(S,$e)},{label:n("gitFileHistory"),icon:"clock",disabled:$e==="untracked",onClick:()=>void fn(S,$e)},{label:n("gitBlame"),icon:"activity",disabled:$e==="untracked",onClick:()=>void Rs(S,$e)},{separator:!0},$e==="staged"?{label:n("gitUnstage"),icon:"undo",onClick:()=>void Qn(S)}:{label:n("gitAddShort"),icon:"plus",onClick:()=>void wn(S)},{label:n("gitIgnore"),icon:"eyeOff",disabled:$e!=="untracked",onClick:()=>void N(S)},{label:n("gitDiscard"),icon:"close",disabled:$e==="untracked",onClick:()=>void Dn(S)},{separator:!0},{label:n("gitCopyPath"),icon:"copy",onClick:()=>void Ge(S.path)}];Rn(T,nt)}async function fn(T,S){(!u.value||u.value.file.path!==T.path||u.value.group!==S)&&await un(T,S),await Nn()}async function Rs(T,S){(!u.value||u.value.file.path!==T.path||u.value.group!==S)&&await un(T,S),await yn()}function As(T,S){const $e=[{label:n("gitCheckout"),icon:"arrowRight",disabled:S.current,onClick:()=>void ns(S.name)},{label:n("gitMergeIntoCurrent"),icon:"merge",disabled:S.current,onClick:()=>void _(S.name)},{label:n("gitPushBranch"),icon:"upload",onClick:()=>void Se(S.name)},{separator:!0},{label:n("gitBranchRename"),icon:"edit",disabled:!S.current,onClick:()=>void pn()},{label:n("gitDelete"),icon:"trash",disabled:S.current,onClick:()=>void y(S.name)},{separator:!0},{label:n("gitCopyName"),icon:"copy",onClick:()=>void Ge(S.name)}];Rn(T,$e)}function Zn(T,S){Rn(T,[{label:n("gitCheckout"),icon:"arrowRight",onClick:()=>void zn(S.name)},{separator:!0},{label:n("gitCopyName"),icon:"copy",onClick:()=>void Ge(S.name)}])}function es(T,S){const $e=[{label:n("gitView"),icon:"eye",onClick:()=>Le(S)}];S.remoteOnly?$e.push({label:n("gitTagPull"),icon:"download",onClick:()=>void gs(S)}):($e.push({label:n("gitPushBranch"),icon:"upload",onClick:()=>void Xt(S.name)}),$e.push({label:n("gitDelete"),icon:"trash",onClick:()=>void Re(S.name)})),$e.push({separator:!0}),$e.push({label:n("gitCopyName"),icon:"copy",onClick:()=>void Ge(S.name)}),Rn(T,$e)}function Ms(T,S){Rn(T,[{label:n("gitRemoteSetUrl"),icon:"edit",onClick:()=>void ys(S)},{label:n("gitDelete"),icon:"trash",onClick:()=>void mi(S.name)},{separator:!0},{label:n("gitCopyUrl"),icon:"copy",onClick:()=>void Ge(S.url)}])}function no(T,S){Rn(T,[{label:n("gitStashApply"),icon:"download",onClick:()=>void oo(S.ref)},{label:n("gitStashPop"),icon:"upload",onClick:()=>void Fa(S.ref)},{label:n("gitStashDrop"),icon:"close",onClick:()=>void La(S.ref)},{separator:!0},{label:n("gitCopyMsg"),icon:"copy",onClick:()=>void Ge(S.message)}])}function An(T){Rn(T,[{label:n("gitResetSoft"),icon:"undo",onClick:()=>void tn("reset-soft")},{label:n("gitResetMixed"),icon:"undo",onClick:()=>void tn("reset-mixed")},{label:n("gitResetHard"),icon:"warning",onClick:()=>void tn("reset-hard")},{separator:!0},{label:n("gitRevert"),icon:"undo",onClick:()=>void tn("revert")},{label:n("gitCherryPick"),icon:"check",onClick:()=>void tn("cherry-pick")}])}function qn(){$r({kind:"git",dir:e.dir,key:De.key,onDone:()=>{Ct()}})}async function ts(){const T=H.value;if(!T)return;const $e=(await us({title:n("gitBranchFromTitle"),placeholder:n("gitBranchFromPlaceholder")}))?.trim();$e&&await ft(async()=>{await ot(["branch",$e,T])},"gitBranchCreated",{name:$e})}async function Ps(){const T=H.value;!T||!await Pt({title:n("gitCheckoutCommit"),message:n("gitCheckoutCommitMsg",{hash:T.slice(0,7)})})||await ft(async()=>{await ot(["checkout",T])})}async function tn(T){const S=H.value;if(!S)return;const $e=S.slice(0,7);if(T==="reset-soft"||T==="reset-mixed"||T==="reset-hard"){if(T==="reset-hard"&&!await Pt({title:n("gitResetHard"),message:n("gitResetHardMsg")}))return;const nt=T==="reset-soft"?"--soft":T==="reset-mixed"?"--mixed":"--hard";await ft(async()=>{await ot(["reset",nt,S])},"gitResetDone",{hash:$e});return}if(T==="revert"){await ft(async()=>{await ot(["revert","--no-edit",S])},"gitRevertDone",{hash:$e});return}T==="cherry-pick"&&await ft(async()=>{await ot(["cherry-pick",S])},"gitCherryPicked",{hash:$e})}async function Kt(){const T=ge.value.trim();if(!T)return;await ft(async()=>{await ot(["checkout","-b",T])},"gitBranchCreated",{name:T})&&(ge.value="")}async function ns(T){await ft(async()=>{await ot(["checkout",T])})}async function zn(T){const S=T.split("/").slice(1).join("/")||T;await ft(async()=>{await ot(["checkout","-b",S,"--track",T])},"gitBranchCreated",{name:S})}async function pn(){const T=Oe.value;if(!T||U.value)return;const $e=(await us({title:n("gitBranchRenameTitle"),placeholder:n("gitBranchRenamePlaceholder"),initial:T}))?.trim();!$e||$e===T||await ft(async()=>{await ot(["branch","-m",$e])},"gitBranchRenamed",{name:$e})}async function y(T){await Pt({title:n("gitDelete"),message:n("gitBranchDeleteMsg",{name:T})})&&await ft(async()=>{await ot(["branch","-D",T])})}async function _(T){await ft(async()=>{await ot(["merge","--no-edit",T])},"gitMergeDone",{name:T})}async function Se(T){const S=!!V.value.find($e=>$e.name===T)?.upstream;await ft(async()=>{await ot(S?["push"]:["push","-u","origin",T])},"gitPushed",{name:T})}function fe(T){const S=[T.name];return T.subject&&S.push(T.subject),S.push(`${T.hash}${T.date?` · ${T.date}`:""}`),S.join(`
`)}function Le(T){const S=T.hash;S&&(r.value="history",He({hash:S,short:S.slice(0,7),author:"",email:"",ts:T.date?Math.floor(Date.parse(T.date)/1e3):0,date:T.date??"",subject:T.subject??"",parents:[],refs:[{label:T.name,kind:"tag"}]}))}async function A(){const T=ne.value.trim();if(!T)return;const S=ae.value.trim(),$e=Te.value.trim();await ft(async()=>{const zt=$e?["tag","-a",T,"-m",$e]:["tag",T];S&&zt.push(S),await ot(zt)},"gitTagCreated",{name:T})&&(ne.value="",ae.value="",Te.value="")}async function Re(T){await Pt({title:n("gitDelete"),message:n("gitTagDeleteMsg",{name:T})})&&await ft(async()=>{await ot(["tag","-d",T])},"gitTagDeleted",{name:T})}async function Xt(T){await ft(async()=>{await ot(["push","origin",T])},"gitTagPushed",{name:T})}async function Ut(){await ft(async()=>{await ot(["fetch","--tags"])},"gitTagFetchAllDone")}async function gs(T){const S=T.remote||"origin";await ft(async()=>{await ot(["fetch",S,`refs/tags/${T.name}:refs/tags/${T.name}`])},"gitTagPulled",{name:T.name})}function so(){Ae.value="",W.value="",J.value="",be.value=!0}function ss(T){B.value=T,T==="releases"&&Fs()}async function Fs(){const T=d.value?.repo;if(!(!T||ze.value)){ze.value=!0;try{const S=await ah(T);ee.value=S.list,ye.value=S.skipped??""}catch(S){ye.value=S.message}finally{ze.value=!1}}}async function Ls(){const T=Ke.value.trim(),S=Ze.value.trim();if(!T||!S){Y("error",n("gitReleaseRequireMsg"));return}const $e=d.value?.repo;if(!$e){Y("error",n("gitNotRepo"));return}h.op=!0;try{const nt=await Jr($e,T,T,S);nt.url?(Y("ok",n("gitReleaseCreated",{url:nt.url})),Ze.value="",await Fs()):Y("info",n("gitReleaseGhSkip",{reason:nt.skipped??""}))}catch(nt){Y("error",nt.message)}finally{h.op=!1}}function vi(T){T&&window.open(T,"_blank","noopener")}async function Pa(){const T=Ae.value.trim(),S=J.value.trim(),$e=W.value.trim();if(!T||!S){Y("error",n("gitReleaseRequireMsg"));return}const nt=d.value?.repo;if(!nt){Y("error",n("gitNotRepo"));return}h.op=!0;try{if((await Bt(["rev-parse","-q","--verify",`refs/tags/${T}`])).code!==0){const ut=["tag","-a",T,"-m",S];$e&&ut.push($e),await ot(ut)}await ot(["push","origin",T]);let $t="";try{const ut=await Jr(nt,T,T,S);ut.url?$t=ut.url:ut.skipped&&Y("info",n("gitReleaseGhSkip",{reason:ut.skipped}))}catch(ut){Y("info",n("gitReleaseGhSkip",{reason:ut.message}))}Y("ok",$t?`${n("gitReleased",{name:T})}  ${$t}`:n("gitReleased",{name:T})),be.value=!1,B.value==="releases"&&Fs(),await Ct()}catch(zt){Y("error",zt.message)}finally{h.op=!1}}async function os(){const T=we.value.trim(),S=ke.value.trim();if(!T||!S)return;await ft(async()=>{await ot(["remote","add",T,S])},"gitRemoteAdded",{name:T})&&(we.value="",ke.value="")}async function ys(T){const $e=(await us({title:n("gitRemoteUrlTitle"),placeholder:n("gitRemoteUrlPlaceholder"),initial:T.url}))?.trim();!$e||$e===T.url||await ft(async()=>{await ot(["remote","set-url",T.name,$e])},"gitRemoteUrlSaved")}async function mi(T){await Pt({title:n("gitDelete"),message:n("gitRemoteRemoveMsg",{name:T})})&&await ft(async()=>{await ot(["remote","remove",T])},"gitRemoteRemoved",{name:T})}async function nn(){h.stash=!0;try{await ot(["stash","push","-m",st.value.trim()||"auto stash"]),st.value="",Y("ok",n("gitStashCreated")),await Ct()}catch(T){Y("error",T.message)}finally{h.stash=!1}}async function oo(T){await ft(async()=>{await ot(["stash","apply",T])},"gitStashApplied")}async function Fa(T){await ft(async()=>{await ot(["stash","pop",T])},"gitStashPopped")}async function La(T){await Pt({title:n("gitStashDrop"),message:n("gitStashDropMsg",{ref:T})})&&await ft(async()=>{await ot(["stash","drop",T])},"gitStashDropped")}async function Os(T){pe.value=T,Ce.value=[];try{const S=await ot(["stash","show","--no-color","-p",T]);Ce.value=S?S.split(`
`):[]}catch(S){Y("error",S.message)}}async function Ao(T){h.sync=T;try{const S=await Bt([T]);if(S.code!==0)throw new Error((S.stderr||S.stdout||n("gitOpFailed")).trim());Y("ok",(S.stderr||S.stdout||`${T} ok`).trim()),await Ct()}catch(S){Y("error",S.message)}finally{h.sync=""}}async function Mo(){const T=d.value?.repo??"";let S="";if(T){const $e=await Go(T,["remote","get-url","origin"]).catch(()=>null);$e&&$e.code===0&&(S=($e.stdout.split(/\r?\n/)[0]??"").trim())}Tr({kind:"git",url:S})}async function Po(){try{const T=await yd();ce.value=T.name??"",Ve.value=T.email??""}catch{}qe.value=!0}async function gi(){h.config=!0;try{await wd(ce.value,Ve.value),qe.value=!1,Y("ok",n("gitConfigSaved"))}catch(T){Y("error",T.message)}finally{h.config=!1}}async function yi(){const T=dt.value.trim();if(T){dt.value="",it.value.push({kind:"cmd",text:T});try{const S=await Bt(T.split(/\s+/));S.stdout&&it.value.push({kind:"out",text:S.stdout}),S.stderr&&it.value.push({kind:S.code===0?"out":"err",text:S.stderr}),!S.stdout&&!S.stderr&&it.value.push({kind:"out",text:`(exit ${S.code})`}),await Ct(!0)}catch(S){it.value.push({kind:"err",text:S.message})}}}function wi(){yt.value?.focus()}return(T,S)=>{const $e=Fn,nt=Es,zt=ma,$t=va,ut=dn;return l(),Xe(ut,{"model-value":t.modelValue,title:s(n)("gitPanelTitle"),width:"800px","align-center":"","modal-class":"fw-blur-overlay",class:"fw-gitpanel-dialog","close-on-click-modal":!1,"onUpdate:modelValue":S[33]||(S[33]=j=>T.$emit("update:modelValue",j)),onOpen:On},{default:oe(()=>[d.value&&d.value.inRepo?(l(),c("div",py,[o("div",hy,[o("span",{class:te(["fw-gp-branch",{detached:U.value}]),title:$.value},[m(se,{name:"git",size:13}),o("b",null,i(U.value?s(n)("gitHeadDetached"):Oe.value||"—"),1)],10,vy),o("span",{class:"fw-gp-up",title:K.value},[Ee.value?(l(),c(ie,{key:0},[o("span",{class:te(["fw-gp-up-i",{zero:!O.value}])},"↑"+i(O.value),3),o("span",{class:te(["fw-gp-up-i",{zero:!E.value}])},"↓"+i(E.value),3),o("span",gy,i(Ee.value),1)],64)):(l(),c(ie,{key:1},[de(i(s(n)("gitNoUpstream")),1)],64))],8,my),o("span",{class:"fw-gp-repo",title:d.value.repo},i(s(n)("gitLocalRepo"))+i(P.value),9,yy),o("span",wy,[m($e,{size:"small",loading:h.sync==="fetch",onClick:S[0]||(S[0]=j=>Ao("fetch"))},{default:oe(()=>[de(i(s(n)("gitFetch")),1)]),_:1},8,["loading"]),m($e,{size:"small",loading:h.sync==="pull",onClick:S[1]||(S[1]=j=>Ao("pull"))},{default:oe(()=>[de(i(s(n)("gitPull")),1)]),_:1},8,["loading"]),m($e,{size:"small",loading:h.sync==="push",onClick:S[2]||(S[2]=j=>Ao("push"))},{default:oe(()=>[de(i(s(n)("gitPush")),1)]),_:1},8,["loading"]),m($e,{size:"small",disabled:h.refresh,title:s(n)("gitRefresh"),onClick:S[3]||(S[3]=j=>Ct())},{default:oe(()=>[o("span",{class:te(["fw-gp-refresh-ic",{spin:h.refresh}])},[m(se,{name:"refresh",size:13})],2)]),_:1},8,["disabled","title"]),m($e,{size:"small",title:s(n)("gitConfig"),onClick:Po},{default:oe(()=>[m(se,{name:"gear",size:13})]),_:1},8,["title"]),m($e,{size:"small",title:s(n)("accTitle"),onClick:Mo},{default:oe(()=>[m(se,{name:"shield",size:13})]),_:1},8,["title"])])]),o("div",by,[o("nav",ky,[(l(),c(ie,null,Pe(a,j=>o("button",{key:j.key,class:te(["fw-gp-rail-btn",{active:r.value===j.key}]),onClick:lt=>r.value=j.key},[m(se,{name:j.icon,size:14},null,8,["name"]),o("span",_y,i(s(n)(j.label)),1),Be(j.key)?(l(),c("span",Cy,i(Be(j.key)),1)):M("",!0)],10,xy)),64)),S[35]||(S[35]=o("span",{class:"fw-gp-rail-fill"},null,-1)),h.op?(l(),c("div",Sy,[S[34]||(S[34]=o("span",{class:"fw-gp-spin"},null,-1)),de(i(s(n)("gitOpRunning")),1)])):M("",!0)]),o("section",$y,[r.value==="changes"?(l(),c("div",Ty,[o("div",Ey,[Lt.value.length?M("",!0):(l(),c("div",Ny,i(s(n)("gitClean")),1)),(l(!0),c(ie,null,Pe(Lt.value,j=>(l(),c(ie,{key:j.key},[o("div",Dy,[o("span",Ry,i(j.label),1),o("span",Ay,i(j.list.length),1),j.key==="unstaged"?(l(),c("button",{key:0,class:"fw-gp-mini",title:s(n)("gitStageAll"),onClick:ve},[m(se,{name:"plus",size:11})],8,My)):M("",!0)]),(l(!0),c(ie,null,Pe(j.list,lt=>(l(),c("div",{key:j.key+lt.path,class:te(["fw-gp-row",{active:u.value&&u.value.file.path===lt.path&&u.value.group===j.key}]),title:lt.path,onClick:Yt=>un(lt,j.key),onContextmenu:xe(Yt=>Ro(Yt,lt,j.key),["prevent","stop"])},[o("span",{class:te(["fw-gp-st","st-"+lt.status])},i(et(lt.status)),3),o("span",Fy,[at(lt.path)?(l(),c("span",Ly,i(at(lt.path)),1)):M("",!0),de(i(Cn(lt.path)),1)]),o("span",Oy,[j.key!=="staged"?(l(),c("button",{key:0,class:"fw-gp-mini",title:s(n)("gitAddShort"),onClick:xe(Yt=>wn(lt),["stop"])},[m(se,{name:"plus",size:11})],8,Iy)):(l(),c("button",{key:1,class:"fw-gp-mini",title:s(n)("gitUnstage"),onClick:xe(Yt=>Qn(lt),["stop"])},[m(se,{name:"undo",size:11})],8,Vy))])],42,Py))),128))],64))),128))]),o("div",zy,[o("div",jy,[o("span",{class:"fw-gp-detailtitle",title:Ln.value},i(Ln.value),9,By),o("span",Uy,[u.value&&p.value!=="diff"?(l(),c("button",{key:0,class:"fw-gp-mini",title:s(n)("gitDiff"),onClick:S[4]||(S[4]=j=>un(u.value.file,u.value.group))},[m(se,{name:"code",size:12})],8,Hy)):M("",!0),u.value&&p.value!=="history"?(l(),c("button",{key:1,class:"fw-gp-mini",title:s(n)("gitFileHistory"),onClick:Nn},[m(se,{name:"clock",size:12})],8,Wy)):M("",!0),u.value&&p.value!=="blame"?(l(),c("button",{key:2,class:"fw-gp-mini",title:s(n)("gitBlame"),onClick:yn},[m(se,{name:"activity",size:12})],8,Gy)):M("",!0),u.value?(l(),c("button",{key:3,class:"fw-gp-mini",title:s(n)("gitCopyPath"),onClick:S[5]||(S[5]=j=>Ge(u.value.file.path))},[m(se,{name:"copy",size:12})],8,qy)):M("",!0)])]),u.value?p.value==="diff"?(l(),Xe(Jo,{key:1,lines:w.value,empty:Gt.value},null,8,["lines","empty"])):p.value==="history"?(l(),c(ie,{key:2},[k.value.length?(l(),c("div",Yy,[(l(!0),c(ie,null,Pe(k.value,j=>(l(),c("div",{key:j.hash,class:"fw-gp-filerow"},[o("span",Jy,i(j.short),1),o("span",{class:"fw-gp-filesub",title:j.subject},i(j.subject),9,Qy),o("span",Zy,i(j.author)+" · "+i(j.date),1)]))),128))])):(l(),c("div",Xy,i(s(n)("gitFileHistoryEmpty")),1))],64)):(l(),c(ie,{key:3},[F.value.length?(l(),c("div",tw,[(l(!0),c(ie,null,Pe(F.value,(j,lt)=>(l(),c("div",{key:lt,class:"fw-gp-blame-row"},[o("span",{class:"fw-gp-blame-hash",title:j.hash},i(j.hash.slice(0,7)),9,nw),o("span",{class:"fw-gp-blame-author",title:j.author},i(j.author),9,sw),o("span",ow,i(j.date),1),o("span",iw,i(j.line),1),o("span",aw,i(j.text),1)]))),128))])):(l(),c("div",ew,i(s(n)("gitBlameEmpty")),1))],64)):(l(),c("div",Ky,i(s(n)("gitSelectFile")),1))])])):r.value==="history"?(l(),c("div",lw,[o("div",rw,[o("div",cw,[o("button",{class:te(["fw-gp-tab",{on:z.value}]),onClick:S[6]||(S[6]=j=>Tn(!0))},i(s(n)("gitHistoryAll")),3),o("button",{class:te(["fw-gp-tab",{on:!z.value}]),onClick:S[7]||(S[7]=j=>Tn(!1))},i(s(n)("gitHistoryCurrent")),3),S[36]||(S[36]=o("span",{class:"fw-gp-spacer"},null,-1)),o("span",dw,i(D.value.length),1),D.value.length>=ue.value?(l(),c("button",{key:0,class:"fw-gp-tab",onClick:eo},i(s(n)("gitLoadMore")),1)):M("",!0)]),m(uy,{rows:D.value,active:H.value,empty:s(n)("gitLogEmpty"),onSelect:He},null,8,["rows","active","empty"])]),o("div",uw,[C.value?(l(),c(ie,{key:1},[o("div",pw,[o("span",{class:"fw-gp-detailtitle",title:C.value.subject},i(s(n)("gitCommitDetail")),9,hw),o("span",vw,[o("button",{class:"fw-gp-mini",title:s(n)("gitCopyHash"),onClick:S[8]||(S[8]=j=>Ge(C.value.hash))},[m(se,{name:"copy",size:12})],8,mw),o("button",{class:"fw-gp-mini",title:s(n)("gitBranchFrom"),onClick:ts},[m(se,{name:"git",size:12})],8,gw),o("button",{class:"fw-gp-mini",title:s(n)("gitCheckoutCommit"),onClick:Ps},[m(se,{name:"check",size:12})],8,yw),o("button",{class:"fw-gp-mini",title:s(n)("gitMenu"),onClick:S[9]||(S[9]=xe(j=>An(j),["stop"]))},[m(se,{name:"sort",size:12})],8,ww)])]),o("div",bw,[o("div",kw,[o("div",xw,[o("span",_w,i(s(n)("gitCommitHash")),1),o("span",Cw,i(C.value.hash),1)]),o("div",Sw,[o("span",$w,i(s(n)("gitCommitAuthor")),1),o("span",Tw,i(C.value.author)+" <"+i(C.value.email)+">",1)]),o("div",Ew,[o("span",Nw,i(s(n)("gitCommitDate")),1),o("span",Dw,i(Sn(C.value.ts))+" · "+i(C.value.date),1)]),o("div",Rw,[o("span",Aw,i(s(n)("gitCommitParents")),1),o("span",Mw,i(C.value.parents.map(j=>j.slice(0,7)).join(" ")||"—"),1)]),C.value.refs.length?(l(),c("div",Pw,[o("span",Fw,i(s(n)("gitCommitRefs")),1),o("span",Lw,[(l(!0),c(ie,null,Pe(C.value.refs,j=>(l(),c("span",{key:j.label,class:te(["fw-gp-refchip","rf-"+j.kind])},i(j.label),3))),128))])])):M("",!0)]),o("pre",Ow,i(C.value.body||C.value.subject),1),o("div",Iw,i(s(n)("gitCommitChangedFiles",{n:Z.value.length})),1),Z.value.length?M("",!0):(l(),c("div",Vw,i(s(n)("gitCommitNoFiles")),1)),(l(!0),c(ie,null,Pe(Z.value,j=>(l(),c("div",{key:j.path,class:te(["fw-gp-row",{active:G.value===j.path}]),title:s(n)("gitCommitOpenDiff",{path:j.path}),onClick:lt=>Me(j)},[o("span",jw,[at(j.path)?(l(),c("span",Bw,i(at(j.path)),1)):M("",!0),de(i(Cn(j.path)),1)]),o("span",Uw,[o("span",Hw,"+"+i(j.add),1),o("span",Ww,"-"+i(j.del),1)])],10,zw))),128))])],64)):(l(),c("div",fw,i(s(n)("gitSelectCommit")),1))])])):r.value==="branches"?(l(),c("div",Gw,[o("div",qw,[m(nt,{modelValue:ge.value,"onUpdate:modelValue":S[10]||(S[10]=j=>ge.value=j),size:"small",placeholder:s(n)("gitBranchNew"),onKeydown:bt(Kt,["enter"])},null,8,["modelValue","placeholder"]),m($e,{size:"small",type:"primary",loading:h.branch,onClick:Kt},{default:oe(()=>[de(i(s(n)("gitBranchCreateAndSwitch")),1)]),_:1},8,["loading"]),m($e,{size:"small",disabled:U.value,onClick:pn},{default:oe(()=>[de(i(s(n)("gitBranchRename")),1)]),_:1},8,["disabled"])]),o("div",Kw,i(s(n)("gitBranchLocalGroup")),1),(l(!0),c(ie,null,Pe(q.value,j=>(l(),c("div",{key:j.name,class:te(["fw-gp-row",{active:j.current}]),onContextmenu:xe(lt=>As(lt,j),["prevent","stop"])},[o("span",Yw,[m(se,{name:"git",size:12})]),o("span",Jw,[de(i(j.name),1),j.current?(l(),c("span",Qw," • "+i(s(n)("gitBranchCurrent")),1)):M("",!0)]),o("span",Zw,[j.current?(l(),Xe($e,{key:1,text:"",size:"small",onClick:lt=>Se(j.name)},{default:oe(()=>[de(i(s(n)("gitPushBranch")),1)]),_:1},8,["onClick"])):(l(),Xe($e,{key:0,text:"",size:"small",onClick:lt=>ns(j.name)},{default:oe(()=>[de(i(s(n)("gitCheckout")),1)]),_:1},8,["onClick"]))])],42,Xw))),128)),Ne.value.length?(l(),c(ie,{key:0},[o("div",eb,i(s(n)("gitBranchRemoteGroup")),1),(l(!0),c(ie,null,Pe(Ne.value,j=>(l(),c("div",{key:j.name,class:"fw-gp-row",onContextmenu:xe(lt=>Zn(lt,j),["prevent","stop"])},[o("span",nb,[m(se,{name:"globe",size:12})]),o("span",sb,i(j.name),1),o("span",ob,[m($e,{text:"",size:"small",onClick:lt=>zn(j.name)},{default:oe(()=>[de(i(s(n)("gitCheckout")),1)]),_:1},8,["onClick"])])],40,tb))),128))],64)):M("",!0)])):r.value==="tags"?(l(),c("div",ib,[o("div",ab,[o("button",{class:te(["fw-gp-sectab",{active:B.value==="tags"}]),onClick:S[11]||(S[11]=j=>ss("tags"))},[de(i(s(n)("gitTabTags")),1),he.value.length?(l(),c("span",lb,i(he.value.length),1)):M("",!0)],2),o("button",{class:te(["fw-gp-sectab",{active:B.value==="releases"}]),onClick:S[12]||(S[12]=j=>ss("releases"))},[de(i(s(n)("gitTabReleases")),1),ee.value.length?(l(),c("span",rb,i(ee.value.length),1)):M("",!0)],2)]),B.value==="tags"?(l(),c(ie,{key:0},[o("div",cb,[m(nt,{modelValue:ne.value,"onUpdate:modelValue":S[13]||(S[13]=j=>ne.value=j),size:"small",class:"fw-gp-in-name",placeholder:s(n)("gitTagNamePlaceholder")},null,8,["modelValue","placeholder"]),m(nt,{modelValue:ae.value,"onUpdate:modelValue":S[14]||(S[14]=j=>ae.value=j),size:"small",class:"fw-gp-in-target",placeholder:s(n)("gitTagTargetPlaceholder")},null,8,["modelValue","placeholder"]),m(nt,{modelValue:Te.value,"onUpdate:modelValue":S[15]||(S[15]=j=>Te.value=j),size:"small",class:"fw-gp-in-msg",placeholder:s(n)("gitTagMessagePlaceholder")},null,8,["modelValue","placeholder"]),m($e,{size:"small",type:"primary",disabled:!ne.value.trim(),onClick:A},{default:oe(()=>[de(i(s(n)("gitTagCreate")),1)]),_:1},8,["disabled"]),m($e,{size:"small",loading:h.op,disabled:!wt.value,title:wt.value?"":s(n)("gitTagNoRemote"),onClick:Ut},{default:oe(()=>[de(i(s(n)("gitTagFetchAll")),1)]),_:1},8,["loading","disabled","title"])]),he.value.length?M("",!0):(l(),c("div",db,i(s(n)("gitTagEmpty")),1)),(l(!0),c(ie,null,Pe(he.value,j=>(l(),c("div",{key:j.name,class:"fw-gp-row",title:fe(j),onContextmenu:xe(lt=>es(lt,j),["prevent","stop"])},[o("span",fb,[m(se,{name:"tag",size:12})]),o("span",pb,[de(i(j.name)+" ",1),j.deref?(l(),c("span",hb,i(s(n)("gitTagAnnotated")),1)):M("",!0),j.remoteOnly?(l(),c("span",vb,i(s(n)("gitTagRemoteOnly")),1)):M("",!0)]),j.date?(l(),c("span",mb,i(j.date),1)):M("",!0),j.subject?(l(),c("span",{key:1,class:"fw-gp-subject",title:j.subject},i(j.subject),9,gb)):M("",!0),o("span",yb,i(j.hash),1),o("span",wb,[m($e,{text:"",size:"small",onClick:lt=>Le(j)},{default:oe(()=>[de(i(s(n)("gitView")),1)]),_:1},8,["onClick"])])],40,ub))),128))],64)):(l(),c(ie,{key:1},[o("div",bb,[m($e,{size:"small",type:"primary",disabled:!wt.value,title:wt.value?"":s(n)("gitTagNoRemote"),onClick:so},{default:oe(()=>[de(i(s(n)("gitReleaseBtn")),1)]),_:1},8,["disabled","title"]),m($e,{size:"small",loading:ze.value,onClick:Fs},{default:oe(()=>[de(i(s(n)("gitRefresh")),1)]),_:1},8,["loading"]),wt.value?M("",!0):(l(),c("span",kb,i(s(n)("gitTagNoRemote")),1))]),o("div",xb,[m($t,{modelValue:Ke.value,"onUpdate:modelValue":S[16]||(S[16]=j=>Ke.value=j),size:"small",class:"fw-gp-in-name",placeholder:s(n)("gitReleaseChooseTag"),filterable:""},{default:oe(()=>[(l(!0),c(ie,null,Pe(he.value,j=>(l(),Xe(zt,{key:j.name,label:j.name,value:j.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"]),m(nt,{modelValue:Ze.value,"onUpdate:modelValue":S[17]||(S[17]=j=>Ze.value=j),size:"small",type:"textarea",rows:2,resize:"none",placeholder:s(n)("gitReleaseNotesPlaceholder")},null,8,["modelValue","placeholder"]),m($e,{size:"small",disabled:!Ke.value.trim()||!Ze.value.trim(),onClick:Ls},{default:oe(()=>[de(i(s(n)("gitReleaseCreateForTag")),1)]),_:1},8,["disabled"])]),ye.value?(l(),c("div",_b,i(s(n)("gitReleaseLoadSkip",{reason:ye.value})),1)):!ee.value.length&&!ze.value?(l(),c("div",Cb,i(s(n)("gitReleaseEmpty")),1)):M("",!0),(l(!0),c(ie,null,Pe(ee.value,j=>(l(),c("div",{key:j.url||j.tag,class:"fw-gp-row",title:j.name},[o("span",$b,[m(se,{name:"tag",size:12})]),o("span",Tb,[de(i(j.name||j.tag)+" ",1),o("span",Eb,i(j.tag),1)]),j.date?(l(),c("span",Nb,i(j.date),1)):M("",!0),o("span",Db,[m($e,{text:"",size:"small",onClick:lt=>vi(j.url)},{default:oe(()=>[de(i(s(n)("gitReleaseOpen")),1)]),_:1},8,["onClick"])])],8,Sb))),128))],64))])):r.value==="remotes"?(l(),c("div",Rb,[o("div",Ab,[m(nt,{modelValue:we.value,"onUpdate:modelValue":S[18]||(S[18]=j=>we.value=j),size:"small",class:"fw-gp-in-name",placeholder:s(n)("gitRemoteNamePlaceholder")},null,8,["modelValue","placeholder"]),m(nt,{modelValue:ke.value,"onUpdate:modelValue":S[19]||(S[19]=j=>ke.value=j),size:"small",class:"fw-gp-in-url",placeholder:s(n)("gitRemoteUrlPlaceholder")},null,8,["modelValue","placeholder"]),m($e,{size:"small",type:"primary",disabled:!we.value.trim()||!ke.value.trim(),onClick:os},{default:oe(()=>[de(i(s(n)("gitRemoteAdd")),1)]),_:1},8,["disabled"])]),_e.value.length?M("",!0):(l(),c("div",Mb,i(s(n)("gitRemoteEmpty")),1)),(l(!0),c(ie,null,Pe(_e.value,j=>(l(),c("div",{key:j.name,class:"fw-gp-row",onContextmenu:xe(lt=>Ms(lt,j),["prevent","stop"])},[o("span",Fb,[m(se,{name:"globe",size:12})]),o("span",Lb,i(j.name),1),o("span",{class:"fw-gp-remote-url",title:j.url},i(j.url),9,Ob)],40,Pb))),128))])):r.value==="stash"?(l(),c("div",Ib,[o("div",Vb,[o("div",zb,[m(nt,{modelValue:st.value,"onUpdate:modelValue":S[20]||(S[20]=j=>st.value=j),size:"small",placeholder:s(n)("gitStashPlaceholder"),onKeydown:bt(nn,["enter"])},null,8,["modelValue","placeholder"]),m($e,{size:"small",type:"primary",loading:h.stash,disabled:!ct.value,onClick:nn},{default:oe(()=>[de(i(s(n)("gitStashNew")),1)]),_:1},8,["loading","disabled"])]),Ye.value.length?M("",!0):(l(),c("div",jb,i(ct.value?s(n)("gitStashEmpty"):s(n)("gitStashNone")),1)),(l(!0),c(ie,null,Pe(Ye.value,j=>(l(),c("div",{key:j.ref,class:te(["fw-gp-row",{active:pe.value===j.ref}]),title:j.full,onClick:lt=>Os(j.ref),onContextmenu:xe(lt=>no(lt,j),["prevent","stop"])},[o("span",Ub,[m(se,{name:"stash",size:12})]),o("span",Hb,i(j.message),1),o("span",Wb,[o("button",{class:"fw-gp-mini",title:s(n)("gitStashApply"),onClick:xe(lt=>oo(j.ref),["stop"])},[m(se,{name:"download",size:11})],8,Gb)])],42,Bb))),128))]),o("div",qb,[o("div",Kb,[o("span",Xb,i(pe.value||s(n)("gitStashView")),1)]),m(Jo,{lines:Ce.value,empty:s(n)("gitStashEmpty")},null,8,["lines","empty"])])])):r.value==="cli"?(l(),c("div",Yb,[o("div",{ref_key:"cliRef",ref:rt,class:"fw-gp-cli",onClick:wi},[it.value.length?M("",!0):(l(),c("div",Jb,i(s(n)("gitCliPlaceholder")),1)),(l(!0),c(ie,null,Pe(it.value,(j,lt)=>(l(),c("div",{key:lt,class:te(["fw-gp-cli-line","kind-"+j.kind])},[j.kind==="cmd"?(l(),c(ie,{key:0},[o("span",Qb,i(re.value),1),o("span",Zb,i(j.text),1)],64)):(l(),c(ie,{key:1},[de(i(j.text),1)],64))],2))),128)),o("div",e0,[o("span",t0,i(re.value),1),xt(o("input",{ref_key:"cliInputRef",ref:yt,"onUpdate:modelValue":S[21]||(S[21]=j=>dt.value=j),class:"fw-gp-cli-inner",spellcheck:"false",autocomplete:"off",onKeydown:bt(yi,["enter"])},null,544),[[Ot,dt.value]])])],512)])):M("",!0)])]),r.value==="changes"?(l(),c("div",n0,[m(nt,{modelValue:L.value,"onUpdate:modelValue":S[22]||(S[22]=j=>L.value=j),type:"textarea",rows:2,resize:"none",placeholder:s(n)("gitCommitMsgPlaceholder"),onKeydown:bt(xe(Ie,["ctrl","prevent"]),["enter"])},null,8,["modelValue","placeholder","onKeydown"]),o("div",s0,[o("span",o0,[d.value.staged.length?(l(),c(ie,{key:0},[de(i(s(n)("gitCommitFiles",{n:d.value.staged.length})),1)],64)):(l(),c(ie,{key:1},[de(i(s(n)("gitNoChanges")),1)],64))]),m($e,{size:"small",disabled:!d.value.unstaged.length&&!d.value.untracked.length,onClick:ve},{default:oe(()=>[de(i(s(n)("gitStageAll")),1)]),_:1},8,["disabled"]),m($e,{size:"small",type:"primary",loading:h.commit,disabled:!d.value.staged.length||!L.value.trim(),onClick:Ie},{default:oe(()=>[de(i(s(n)("gitCommit")),1),d.value.staged.length?(l(),c("span",i0,"（"+i(d.value.staged.length)+"）",1)):M("",!0)]),_:1},8,["loading","disabled"])])])):M("",!0)])):(l(),c("div",a0,[h.refresh?(l(),c(ie,{key:0},[S[37]||(S[37]=o("span",{class:"fw-gp-spin"},null,-1)),de(i(s(n)("gitOpRunning")),1)],64)):(l(),c("div",l0,[m(se,{name:"git",size:28}),o("span",null,i(s(n)("gitNotRepo")),1),o("button",{class:"fw-retry",onClick:qn},i(s(n)("gitCloneHere")),1)]))])),m(ut,{"model-value":qe.value,title:s(n)("gitConfigTitle"),width:"420px","align-center":"","modal-class":"fw-blur-overlay",class:"fw-gitconfig-dialog","close-on-click-modal":!1,"onUpdate:modelValue":S[26]||(S[26]=j=>qe.value=j)},{footer:oe(()=>[m($e,{onClick:S[25]||(S[25]=j=>qe.value=!1)},{default:oe(()=>[de(i(s(n)("cancel")),1)]),_:1}),m($e,{type:"primary",loading:h.config,onClick:gi},{default:oe(()=>[de(i(s(n)("gitConfigSave")),1)]),_:1},8,["loading"])]),default:oe(()=>[o("div",r0,[o("label",null,i(s(n)("gitConfigName")),1),m(nt,{modelValue:ce.value,"onUpdate:modelValue":S[23]||(S[23]=j=>ce.value=j),size:"small",placeholder:s(n)("gitConfigNamePlaceholder")},null,8,["modelValue","placeholder"])]),o("div",c0,[o("label",null,i(s(n)("gitConfigEmail")),1),m(nt,{modelValue:Ve.value,"onUpdate:modelValue":S[24]||(S[24]=j=>Ve.value=j),size:"small",placeholder:s(n)("gitConfigEmailPlaceholder")},null,8,["modelValue","placeholder"])])]),_:1},8,["model-value","title"]),m(ut,{modelValue:je.value,"onUpdate:modelValue":S[27]||(S[27]=j=>je.value=j),title:s(n)("gitCommitViewTitle"),width:"800px","align-center":"","modal-class":"fw-blur-overlay",class:"fw-gp-commitview-dialog","close-on-click-modal":!1},{default:oe(()=>[C.value?(l(),c("div",d0,[o("div",u0,[o("div",f0,[o("span",p0,i(s(n)("gitCommitHash")),1),o("span",h0,i(C.value.hash),1)]),o("div",v0,[o("span",m0,i(s(n)("gitCommitAuthor")),1),o("span",g0,i(C.value.author)+" <"+i(C.value.email)+">",1)]),o("div",y0,[o("span",w0,i(s(n)("gitCommitDate")),1),o("span",b0,i(Sn(C.value.ts))+" · "+i(C.value.date),1)]),o("pre",k0,i(C.value.body||C.value.subject),1)]),o("div",x0,[o("div",_0,[Z.value.length?M("",!0):(l(),c("div",C0,i(s(n)("gitCommitNoFiles")),1)),(l(!0),c(ie,null,Pe(Z.value,j=>(l(),c("div",{key:j.path,class:te(["fw-gp-row",{active:G.value===j.path}]),title:j.path,onClick:lt=>Me(j)},[o("span",$0,[at(j.path)?(l(),c("span",T0,i(at(j.path)),1)):M("",!0),de(i(Cn(j.path)),1)]),o("span",E0,[o("span",N0,"+"+i(j.add),1),o("span",D0,"-"+i(j.del),1)])],10,S0))),128))]),o("div",R0,[m(Jo,{lines:R.value,empty:s(n)("gitDiffEmpty")},null,8,["lines","empty"])])])])):(l(),c("div",A0,i(s(n)("gitSelectCommit")),1))]),_:1},8,["modelValue","title"]),m(ut,{modelValue:be.value,"onUpdate:modelValue":S[32]||(S[32]=j=>be.value=j),title:s(n)("gitReleaseTitle"),width:"460px","align-center":"","modal-class":"fw-blur-overlay",class:"fw-gp-release-dialog","close-on-click-modal":!1},{footer:oe(()=>[m($e,{onClick:S[31]||(S[31]=j=>be.value=!1)},{default:oe(()=>[de(i(s(n)("cancel")),1)]),_:1}),m($e,{type:"primary",loading:h.op,disabled:!Ae.value.trim()||!J.value.trim(),onClick:Pa},{default:oe(()=>[de(i(s(n)("gitReleasePublish")),1)]),_:1},8,["loading","disabled"])]),default:oe(()=>[o("div",M0,[o("label",null,i(s(n)("gitReleaseName")),1),m(nt,{modelValue:Ae.value,"onUpdate:modelValue":S[28]||(S[28]=j=>Ae.value=j),size:"small",placeholder:s(n)("gitTagNamePlaceholder")},null,8,["modelValue","placeholder"])]),o("div",P0,[o("label",null,i(s(n)("gitReleaseTarget")),1),m(nt,{modelValue:W.value,"onUpdate:modelValue":S[29]||(S[29]=j=>W.value=j),size:"small",placeholder:s(n)("gitTagTargetPlaceholder")},null,8,["modelValue","placeholder"])]),o("div",F0,[o("label",null,i(s(n)("gitReleaseMsg")),1),m(nt,{modelValue:J.value,"onUpdate:modelValue":S[30]||(S[30]=j=>J.value=j),type:"textarea",rows:3,resize:"none",placeholder:s(n)("gitTagMessagePlaceholder")},null,8,["modelValue","placeholder"])])]),_:1},8,["modelValue","title"]),s(Et)?(l(),Xe(Zt,{key:2,items:s(Vn),x:s(St),y:s(bn),onClose:s(to)},null,8,["items","x","y","onClose"])):M("",!0)]),_:1},8,["model-value","title"])}}}),Pu=_t(L0,[["__scopeId","data-v-001797f7"]]),O0={key:0,class:"fw-svn-shell"},I0={class:"fw-svn-head"},V0=["title"],z0=["title"],j0=["title"],B0={class:"fw-svn-headacts"},U0={class:"fw-svn-body"},H0={class:"fw-svn-rail"},W0=["onClick"],G0={class:"fw-svn-rail-txt"},q0={key:0,class:"fw-svn-rail-badge"},K0={key:0,class:"fw-svn-rail-op"},X0={class:"fw-svn-content"},Y0={key:0,class:"fw-svn-split"},J0={class:"fw-svn-list"},Q0={class:"fw-svn-groupbar"},Z0={class:"fw-svn-groupname"},ek={class:"fw-svn-selall"},tk=["checked"],nk={key:0,class:"fw-svn-empty"},sk=["title"],ok=["checked","onChange"],ik=["data-code"],ak={class:"fw-svn-path"},lk={key:0,class:"fw-svn-dir"},rk={class:"fw-svn-stext"},ck={class:"fw-svn-rowacts"},dk=["disabled","title","onClick"],uk=["disabled","title","onClick"],fk=["disabled","title","onClick"],pk=["disabled","title","onClick"],hk={class:"fw-svn-detail"},vk={class:"fw-svn-detailhead"},mk={class:"fw-svn-detailtitle"},gk=["placeholder"],yk={class:"fw-svn-bulk"},wk=["disabled"],bk=["disabled"],kk=["disabled"],xk={class:"fw-svn-commit-acts"},_k={class:"fw-svn-hint"},Ck=["disabled"],Sk={key:1,class:"fw-svn-loglist"},$k={key:0,class:"fw-svn-empty"},Tk=["title","onClick"],Ek={class:"fw-svn-caret"},Nk={class:"fw-svn-log-r"},Dk=["title"],Rk={class:"fw-svn-log-meta"},Ak={key:0,class:"fw-svn-log-msg"},Mk={class:"fw-svn-log-cfiles"},Pk={key:0,class:"fw-svn-empty"},Fk=["title","onClick"],Lk={class:"fw-svn-cfile-path"},Ok={key:0,class:"fw-svn-cfile-dir"},Ik={key:2,class:"fw-svn-cli"},Vk={class:"fw-svn-cli-body"},zk={key:1,class:"fw-svn-warn fw-svn-state"},jk={key:2,class:"fw-svn-checkout-form fw-svn-state"},Bk={class:"fw-svn-tip"},Uk={class:"fw-svn-checkout-row"},Hk={class:"fw-svn-checkout-row"},Wk={key:3,class:"fw-svn-empty fw-svn-state"},Gk={class:"fw-svn-diffwrap"},qk={class:"fw-svn-blame"},Kk={class:"fw-svn-co-form"},Xk={class:"fw-svn-co-label"},Yk={class:"fw-svn-co-label"},Jk=vt({__name:"SvnPanel",props:{modelValue:{type:Boolean},dir:{}},setup(t){const e=t,{t:n}=Ft(),a=[{key:"changes",icon:"fileText",label:"svnRailChanges"},{key:"log",icon:"clock",label:"svnRailLog"},{key:"output",icon:"terminal",label:"svnOutput"}],r=g("changes"),d=g(null),h=g([]),u=g(new Set),p=g(""),w=g(!1),b=g(!1),k=g(""),F=g([]),L=g(!1),D=g(!1),z=g(""),H=g([]),C=g(!1),Z=g(""),G=g([]),R=g(!1),ue=g(""),V=g(""),he=I(()=>(d.value?.root??e.dir).replace(/\\/g,"/")),_e=I(()=>h.value.length>0&&u.value.size===h.value.length);function ge(E){return E!=="changes"?"":h.value.length?String(h.value.length):""}function ne(E){r.value=E,E==="log"&&!F.value.length&&ce()}function ae(E){const K=E.lastIndexOf("/");return K<0?"":E.slice(0,K+1)}function Te(E){const K=E.lastIndexOf("/");return K<0?E:E.slice(K+1)}function je(E){return E.split(`
`)[0]??""}async function be(){d.value=null,h.value=[],u.value=new Set,k.value="",F.value=[],r.value="changes";try{d.value=await ps(e.dir),d.value.inRepo&&d.value.svnAvailable&&await J()}catch(E){Y("error",E.message)}}async function Ae(E,K=!1){if(w.value)return null;w.value=!0,r.value="output";try{const $=await Qt(e.dir,E),q=[$.stdout,$.stderr].filter(Boolean).join(`
`).trim();return k.value=`$ svn ${E.join(" ")}

${q||n("svnNoOutput")}`,$.code!==0?Y("error",($.stderr||n("svnFailed")).split(`
`)[0].slice(0,200)):!K&&$.stdout&&Y("ok",$.stdout.split(`
`)[0].slice(0,200)),$}catch($){return Y("error",$.message),null}finally{w.value=!1}}function W(E){E&&(k.value=`${E}

${k.value}`)}async function J(){const E=await Qt(e.dir,["status"]),K=[];for(const q of(E.stdout||"").split(`
`)){if(!q.trim())continue;const Ne=q.slice(0,8),re=q.slice(8).trim();if(!re)continue;const ct=(Ne[0]??" ").trim();K.push({code:ct,path:re.split(" -> ")[0],statusText:B(ct)})}h.value=K;const $=new Set(K.map(q=>q.path));u.value=new Set([...u.value].filter(q=>$.has(q)))}function B(E){return{A:n("svnStAdded"),M:n("svnStModified"),D:n("svnStDeleted"),R:n("svnStReplaced"),C:n("svnStConflicted"),"!":n("svnStMissing"),"~":n("svnStObstructed"),"?":n("svnStUnversioned"),I:n("svnStIgnored")," ":"",K:n("svnStLocked")}[E]??E}function ee(E){const K=new Set(u.value);K.has(E)?K.delete(E):K.add(E),u.value=K}function ye(E){const K=E.target.checked;u.value=K?new Set(h.value.map($=>$.path)):new Set}function ze(){Tr({kind:"svn",url:d.value?.url??""})}async function Ke(){b.value=!0;try{d.value=await ps(e.dir),d.value.inRepo&&d.value.svnAvailable&&await J()}catch(E){Y("error",E.message)}finally{b.value=!1}}async function Ze(){const E=d.value?.revision??null,K=await Ae(["update"],!0);if(!K||K.code!==0)return;const $=k1(K.stdout),q=x1(K.stdout);await Ke();const Ne=d.value?.revision??q,re=$?E?n("svnUpdateSummaryFrom",{from:E,to:Ne??E,n:$}):n("svnUpdateSummary",{n:$,to:Ne??"?"}):n("svnAlreadyLatest",{rev:Ne??E??"?"});W(re),Y("ok",re)}async function we(){const E=await Ae(["cleanup"]);E&&E.code===0&&await J()}async function ke(){const E=await Ae(["add",...u.value]);E&&E.code===0&&await J()}async function Ye(E){const K=await Ae(["add","--",E]);K&&K.code===0&&await J()}async function st(E){const K=E.replace(/[\\/]$/,""),$=K.replace(/[\\/][^\\/]+$/,""),q=K.slice($.length+1),Ne=await Qt($,["propget","svn:ignore",$]),re=(Ne.stdout||"").split(/\r?\n/).map(Lt=>Lt.trim()).filter(Boolean);if(re.includes(q)){Ne.code===0&&Y("ok",n("gitIgnored")),await J();return}const ct=[...re,q].join(`
`),wt=await Qt($,["propset","svn:ignore",ct,$]);wt.code===0?Y("ok",n("gitIgnored")):Y("error",(wt.stderr||n("svnFailed")).split(`
`)[0].slice(0,200)),await J()}async function pe(){const E=await Ae(["revert",...u.value]);E&&E.code===0&&await J()}async function Ce(){const E=await Ae(["resolve","--accept","working",...u.value]);E&&E.code===0&&await J()}async function qe(){const E=[...u.value],K=["commit","-m",p.value,...E],$=await Ae(K);$&&$.code===0&&(p.value="",u.value=new Set,await J())}async function ce(){L.value=!0;try{const E=await Qt(e.dir,["log","--xml","-v","-l","50"]);F.value=Ve(E.stdout),dt.value=new Set}catch(E){Y("error",E.message)}finally{L.value=!1}}function Ve(E){const K=[];try{new DOMParser().parseFromString(E,"application/xml").querySelectorAll("logentry").forEach(q=>{const Ne=[];q.querySelectorAll("paths > path").forEach(re=>Ne.push({action:re.getAttribute("action"),text:re.textContent})),K.push({revision:q.getAttribute("revision")??"",author:q.querySelector("author")?.textContent??"",date:q.querySelector("date")?.textContent??"",msg:q.querySelector("msg")?.textContent??"",paths:Ne})})}catch{}return K}function rt(E){if(!E)return"";const K=new Date(E);return isNaN(K.getTime())?E:K.toLocaleString()}async function yt(E){D.value=!0,z.value=" · "+E;try{const K=await Qt(e.dir,["diff",E]);H.value=(K.stdout||"").split(`
`)}catch(K){H.value=[K.message]}}const dt=g(new Set);function it(E){const K=new Set(dt.value);K.has(E)?K.delete(E):K.add(E),dt.value=K}function Oe(E){if(!E)return"";const K=E.replace(/^\//,""),$=K.lastIndexOf("/");return $<0?"":K.slice(0,$+1)}function U(E){if(!E)return"";const K=E.replace(/^\//,"");return K.slice(K.lastIndexOf("/")+1)||K}async function P(E,K){if(K.text){D.value=!0,z.value=` · r${E} ${K.text}`,H.value=[];try{const $=await Qt(e.dir,["diff","-c",E,"--","^"+K.text]);H.value=($.stdout||"").split(`
`)}catch($){H.value=[$.message]}}}async function Q(E){C.value=!0,Z.value=" · "+E;try{const K=await Qt(e.dir,["blame","-v",E]);G.value=(K.stdout||"").split(`
`)}catch(K){G.value=[K.message]}}function Ee(){ue.value||(ue.value=d.value?.url??""),V.value||(V.value=d.value?.root??e.dir)}async function O(){const E=ue.value.trim(),K=V.value.trim();if(!E||!K)return;const $=K.replace(/[\\/][^\\/]*$/,"")||K;w.value=!0;try{const q=await Qt($,["checkout",E,K]),Ne=[q.stdout,q.stderr].filter(Boolean).join(`
`).trim();k.value=`$ svn checkout ${E} ${K}

${Ne||n("svnNoOutput")}`,q.code===0?(Y("ok",n("svnCheckedOut")),R.value=!1,d.value=await ps(K),d.value.inRepo&&await J()):Y("error",(q.stderr||n("svnFailed")).split(`
`)[0].slice(0,200))}catch(q){Y("error",q.message)}finally{w.value=!1}}return(E,K)=>{const $=Fn,q=Es,Ne=dn;return l(),Xe(Ne,{"model-value":t.modelValue,title:s(n)("svnPanelTitle"),width:"800px","align-center":"","modal-class":"fw-blur-overlay",class:"fw-svn-dialog","close-on-click-modal":!1,"onUpdate:modelValue":K[10]||(K[10]=re=>E.$emit("update:modelValue",re)),onOpen:be},{default:oe(()=>[d.value&&d.value.inRepo&&d.value.svnAvailable?(l(),c("div",O0,[o("div",I0,[o("span",{class:"fw-svn-revpill",title:d.value.revision?"r"+d.value.revision:""},[m(se,{name:"svn",size:13}),o("b",null,i(d.value.revision?"r"+d.value.revision:"—"),1)],8,V0),o("span",{class:"fw-svn-url",title:d.value.url??""},i(d.value.url||s(n)("svnNoUrl")),9,z0),o("span",{class:"fw-svn-repo",title:d.value.root??""},i(s(n)("svnRepo"))+i(he.value),9,j0),o("span",B0,[m($,{size:"small",loading:w.value,onClick:Ze},{default:oe(()=>[de(i(s(n)("svnUpdate")),1)]),_:1},8,["loading"]),m($,{size:"small",disabled:w.value,onClick:we},{default:oe(()=>[de(i(s(n)("svnCleanup")),1)]),_:1},8,["disabled"]),m($,{size:"small",onClick:K[0]||(K[0]=re=>R.value=!0)},{default:oe(()=>[de(i(s(n)("svnCheckout")),1)]),_:1}),m($,{size:"small",loading:b.value,onClick:Ke,title:s(n)("svnRefresh")},{default:oe(()=>[m(se,{name:"refresh",size:13})]),_:1},8,["loading","title"]),m($,{size:"small",title:s(n)("accTitle"),onClick:ze},{default:oe(()=>[m(se,{name:"shield",size:13})]),_:1},8,["title"])])]),o("div",U0,[o("nav",H0,[(l(),c(ie,null,Pe(a,re=>o("button",{key:re.key,class:te(["fw-svn-rail-btn",{active:r.value===re.key}]),onClick:ct=>ne(re.key)},[m(se,{name:re.icon,size:14},null,8,["name"]),o("span",G0,i(s(n)(re.label)),1),ge(re.key)?(l(),c("span",q0,i(ge(re.key)),1)):M("",!0)],10,W0)),64)),K[12]||(K[12]=o("span",{class:"fw-svn-rail-fill"},null,-1)),w.value?(l(),c("div",K0,[K[11]||(K[11]=o("span",{class:"fw-svn-spin"},null,-1)),de(i(s(n)("svnRunning")),1)])):M("",!0)]),o("section",X0,[r.value==="changes"?(l(),c("div",Y0,[o("div",J0,[o("div",Q0,[o("span",Z0,i(s(n)("svnModifiedCount",{n:h.value.length})),1),o("label",ek,[o("input",{type:"checkbox",checked:_e.value,onChange:ye},null,40,tk),de(i(s(n)("svnSelectAll")),1)])]),h.value.length?M("",!0):(l(),c("div",nk,i(s(n)("svnNoChanges")),1)),(l(!0),c(ie,null,Pe(h.value,re=>(l(),c("div",{key:re.path,class:"fw-svn-row",title:re.path},[o("input",{type:"checkbox",checked:u.value.has(re.path),onChange:ct=>ee(re.path)},null,40,ok),o("span",{class:"fw-svn-badge","data-code":re.code.trim()||"·"},i(re.code.trim()||"·"),9,ik),o("span",ak,[ae(re.path)?(l(),c("span",lk,i(ae(re.path)),1)):M("",!0),de(i(Te(re.path)),1)]),o("span",rk,i(re.statusText),1),o("span",ck,[o("button",{class:"fw-svn-mini",disabled:w.value,title:s(n)("svnDiff"),onClick:xe(ct=>yt(re.path),["stop"])},[m(se,{name:"code",size:12})],8,dk),o("button",{class:"fw-svn-mini",disabled:w.value,title:s(n)("svnBlame"),onClick:xe(ct=>Q(re.path),["stop"])},[m(se,{name:"activity",size:12})],8,uk),re.code.trim()==="?"?(l(),c(ie,{key:0},[o("button",{class:"fw-svn-mini",disabled:w.value,title:s(n)("svnAdd"),onClick:xe(ct=>Ye(re.path),["stop"])},[m(se,{name:"plus",size:12})],8,fk),o("button",{class:"fw-svn-mini",disabled:w.value,title:s(n)("svnIgnore"),onClick:xe(ct=>st(re.path),["stop"])},[m(se,{name:"eyeOff",size:12})],8,pk)],64)):M("",!0)])],8,sk))),128))]),o("div",hk,[o("div",vk,[o("span",mk,i(s(n)("svnCommitBtn")),1)]),xt(o("textarea",{"onUpdate:modelValue":K[1]||(K[1]=re=>p.value=re),class:"fw-svn-msg",rows:"6",placeholder:s(n)("svnCommitPlaceholder")},null,8,gk),[[Ot,p.value]]),o("div",yk,[o("button",{class:"fw-svn-btn",disabled:w.value||!u.value.size,onClick:ke},i(s(n)("svnAdd")),9,wk),o("button",{class:"fw-svn-btn",disabled:w.value||!u.value.size,onClick:pe},i(s(n)("svnRevert")),9,bk),o("button",{class:"fw-svn-btn",disabled:w.value||!u.value.size,onClick:Ce},i(s(n)("svnResolve")),9,kk)]),o("div",xk,[o("span",_k,i(u.value.size?s(n)("svnCommitSelected",{n:u.value.size}):s(n)("svnCommitAll")),1),o("button",{class:"fw-svn-btn primary",disabled:w.value||!p.value.trim(),onClick:qe},i(s(n)("svnCommitBtn")),9,Ck)])])])):r.value==="log"?(l(),c("div",Sk,[F.value.length?M("",!0):(l(),c("div",$k,i(L.value?s(n)("svnLoading"):s(n)("svnLogEmpty")),1)),(l(!0),c(ie,null,Pe(F.value,re=>(l(),c("div",{key:re.revision,class:te(["fw-svn-logitem",{open:dt.value.has(re.revision)}])},[o("div",{class:"fw-svn-log-h",title:s(n)("svnLogToggle"),onClick:ct=>it(re.revision)},[o("span",Ek,i(dt.value.has(re.revision)?"▾":"▸"),1),o("span",Nk,"r"+i(re.revision),1),o("span",{class:"fw-svn-log-msg1",title:re.msg},i(je(re.msg)),9,Dk),o("span",Rk,[o("span",null,i(re.author),1),o("span",null,i(rt(re.date)),1)])],8,Tk),dt.value.has(re.revision)?(l(),c(ie,{key:0},[re.msg?(l(),c("pre",Ak,i(re.msg),1)):M("",!0),o("div",Mk,[re.paths.length?M("",!0):(l(),c("span",Pk,i(s(n)("svnLogNoPaths")),1)),(l(!0),c(ie,null,Pe(re.paths,(ct,wt)=>(l(),c("div",{key:wt,class:"fw-svn-cfile",title:s(n)("svnLogOpenDiff"),onClick:Lt=>P(re.revision,ct)},[o("span",{class:te(["fw-svn-cfile-act","pa-"+(ct.action??"")])},i(ct.action),3),o("span",Lk,[Oe(ct.text)?(l(),c("span",Ok,i(Oe(ct.text)),1)):M("",!0),de(i(U(ct.text)),1)])],8,Fk))),128))])],64)):M("",!0)],2))),128))])):(l(),c("div",Ik,[o("pre",Vk,i(k.value||s(n)("svnNoOutput")),1)]))])])])):d.value&&d.value.inRepo&&!d.value.svnAvailable?(l(),c("div",zk,[m(se,{name:"warning",size:13}),de(i(s(n)("svnNoCli")),1)])):d.value&&!d.value.inRepo?(l(),c("div",jk,[o("p",Bk,i(s(n)("svnNotRepoTip")),1),o("div",Uk,[m(q,{modelValue:ue.value,"onUpdate:modelValue":K[2]||(K[2]=re=>ue.value=re),size:"small",class:"fw-svn-co-url",placeholder:s(n)("svnCheckoutUrlPlaceholder")},null,8,["modelValue","placeholder"])]),o("div",Hk,[m(q,{modelValue:V.value,"onUpdate:modelValue":K[3]||(K[3]=re=>V.value=re),size:"small",class:"fw-svn-co-target",placeholder:s(n)("svnCheckoutTargetPlaceholder")},null,8,["modelValue","placeholder"]),m($,{size:"small",type:"primary",disabled:w.value||!ue.value.trim()||!V.value.trim(),onClick:O},{default:oe(()=>[de(i(s(n)("svnCheckout")),1)]),_:1},8,["disabled"])])])):(l(),c("div",Wk,i(s(n)("svnLoading")),1)),m(Ne,{modelValue:D.value,"onUpdate:modelValue":K[4]||(K[4]=re=>D.value=re),title:s(n)("svnDiffTitle")+z.value,width:"800px","align-center":"","modal-class":"fw-blur-overlay","append-to-body":""},{default:oe(()=>[o("div",Gk,[m(Jo,{lines:H.value,empty:s(n)("gitDiffEmpty")},null,8,["lines","empty"])])]),_:1},8,["modelValue","title"]),m(Ne,{modelValue:C.value,"onUpdate:modelValue":K[5]||(K[5]=re=>C.value=re),title:s(n)("svnBlameTitle")+Z.value,width:"800px","align-center":"","modal-class":"fw-blur-overlay","append-to-body":""},{default:oe(()=>[o("pre",qk,i(G.value.join(`
`)||s(n)("gitDiffEmpty")),1)]),_:1},8,["modelValue","title"]),m(Ne,{modelValue:R.value,"onUpdate:modelValue":K[9]||(K[9]=re=>R.value=re),title:s(n)("svnCheckout"),width:"560px","align-center":"","modal-class":"fw-blur-overlay","append-to-body":"",onOpen:Ee},{footer:oe(()=>[m($,{onClick:K[8]||(K[8]=re=>R.value=!1)},{default:oe(()=>[de(i(s(n)("cancel")),1)]),_:1}),m($,{type:"primary",disabled:w.value||!ue.value.trim()||!V.value.trim(),onClick:O},{default:oe(()=>[de(i(s(n)("svnCheckout")),1)]),_:1},8,["disabled"])]),default:oe(()=>[o("div",Kk,[o("label",Xk,i(s(n)("svnCheckoutUrlPlaceholder")),1),m(q,{modelValue:ue.value,"onUpdate:modelValue":K[6]||(K[6]=re=>ue.value=re),size:"small"},null,8,["modelValue"]),o("label",Yk,i(s(n)("svnCheckoutTargetPlaceholder")),1),m(q,{modelValue:V.value,"onUpdate:modelValue":K[7]||(K[7]=re=>V.value=re),size:"small"},null,8,["modelValue"])])]),_:1},8,["modelValue","title"])]),_:1},8,["model-value","title"])}}}),Fu=_t(Jk,[["__scopeId","data-v-8297810b"]]),Qk={class:"fw-dlg-head"},Zk={class:"fw-dlg-badge"},ex={class:"fw-dlg-headtext"},tx={class:"fw-dlg-headtitle"},nx={class:"fw-dlg-headsub"},sx=["onKeydown"],ox={class:"fw-np-menubar"},ix=["onClick","onMouseenter"],ax={key:0,class:"fw-np-dropdown"},lx={key:0,class:"fw-np-sep"},rx=["onClick"],cx={key:0,class:"fw-np-state"},dx={key:1,class:"fw-np-state fw-np-err"},ux=["readonly","wrap"],fx={key:3,class:"fw-np-status"},px={key:0,class:"fw-np-seg fw-np-ro"},hx={class:"fw-np-seg"},vx={class:"fw-np-seg fw-np-eol"},mx={class:"fw-np-seg"},gx=vt({__name:"TxtEditor",props:{modelValue:{type:Boolean},path:{}},emits:["update:modelValue","saved"],setup(t,{emit:e}){const n=t,a=e,{t:r}=Ft(),d=I({get:()=>n.modelValue,set:P=>a("update:modelValue",P)}),h=I(()=>n.path.slice(Math.max(n.path.lastIndexOf("/"),n.path.lastIndexOf("\\"))+1)),u=g(""),p=g(""),w=g(!1),b=g(!1),k=g(""),F=g(!1),L=g(!1),D=g(null),z=g("utf8"),H=g(!1),C=g("lf"),Z=g(0),G={lf:"Unix (LF)",crlf:"Windows (CRLF)",cr:"Macintosh (CR)"},R=I(()=>G[C.value]),ue=I(()=>{const P=z.value==="utf8"?"UTF-8":z.value.toUpperCase();return H.value?`${P} BOM`:P}),V=I({get:()=>Ue.txtWordWrap,set:P=>{Ue.txtWordWrap=P,Hn()}}),he=I({get:()=>Ue.txtShowStatus,set:P=>{Ue.txtShowStatus=P,Hn()}}),_e=g(""),ge=g(1),ne=g(1);function ae(P){return/\.txt$/i.test(P)}Je(()=>n.modelValue,async P=>{if(P&&n.path){if(!ae(n.path)){d.value=!1;return}Ve(),await je(),await Nt(),Ae(),D.value?.focus()}else Te()});function Te(){u.value="",p.value="",F.value=!1,k.value="",_e.value="",ge.value=1,ne.value=1}async function je(){w.value=!0,k.value="",L.value=!bs(n.path);try{const P=await vl(n.path);if(P.binary){k.value=r("vsBinaryHint");return}u.value=P.content,p.value=P.content,z.value=P.encoding,H.value=P.hasBom,C.value=P.eol,Z.value=P.mtime,F.value=!1}catch(P){k.value=r("txtReadError",{msg:P.message})}finally{w.value=!1}}function be(){F.value=u.value!==p.value,Ae()}function Ae(){const P=D.value;if(!P)return;const Q=P.selectionStart,Ee=u.value.slice(0,Q);ge.value=Ee.split(`
`).length;const O=Ee.lastIndexOf(`
`);ne.value=Q-O}async function W(P){const Q=await dl(n.path,u.value,{key:De.key,encoding:z.value,hasBom:H.value,eol:C.value,expectedMtime:Z.value,force:P});Z.value=Q.mtime,p.value=u.value,F.value=!1,Y("ok",r("txtSaved")),a("saved"),d.value=!1}async function J(){if(!(L.value||!F.value||b.value)&&ae(n.path)){b.value=!0;try{await W(!1)}catch(P){if(P instanceof Xs&&P.code==="mtime-conflict"){if(b.value=!1,!await Pt({title:r("vsConflictTitle"),message:r("vsConflictMsg",{name:h.value})}))return;try{await W(!0)}catch(Ee){Y("error",Ee.message)}return}Y("error",P.message)}finally{b.value=!1}}}function B(){J()}const ee=()=>{const P=D.value;return!P||P.selectionStart===P.selectionEnd};function ye(){const P=D.value;return!P||P.selectionStart===P.selectionEnd?null:{s:P.selectionStart,e:P.selectionEnd}}function ze(P,Q,Ee){const O=D.value,E=u.value.slice(0,P)+Ee+u.value.slice(Q);u.value=E,F.value=E!==p.value,Nt(()=>{O&&(O.focus(),O.selectionStart=O.selectionEnd=P+Ee.length,Ae())})}function Ke(){D.value?.focus(),D.value?.select()}async function Ze(){const P=ye();if(!P)return;const Q=u.value.slice(P.s,P.e);try{await navigator.clipboard.writeText(Q)}catch{D.value?.focus(),document.execCommand("copy")}}async function we(){if(L.value)return;const P=ye();if(!P)return;const Q=u.value.slice(P.s,P.e);try{await navigator.clipboard.writeText(Q)}catch{D.value?.focus(),document.execCommand("cut");return}ze(P.s,P.e,"")}function ke(){if(L.value)return;const P=ye();P&&ze(P.s,P.e,"")}async function Ye(){if(L.value)return;const P=D.value;if(!P)return;const Q=P.selectionStart,Ee=P.selectionEnd;try{const O=await navigator.clipboard.readText();ze(Q,Ee,O)}catch{P.focus(),Y("error","当前环境不允许读取剪贴板，请按 Ctrl+V 粘贴")}}function st(){L.value||(D.value?.focus(),document.execCommand("undo"),be())}function pe(){if(L.value)return;const P=D.value;if(!P)return;const Q=new Date().toLocaleString("zh-CN",{hour12:!1});ze(P.selectionStart,P.selectionEnd,Q)}const Ce=I(()=>[{name:"file",label:"文件",items:[{label:"保存",disabled:()=>L.value||!F.value,action:()=>void J()},{label:"退出",action:()=>void Oe()}]},{name:"edit",label:"编辑",items:[{label:"撤销",disabled:()=>L.value,action:()=>st()},{label:"剪切",disabled:()=>L.value||ee(),action:()=>void we()},{label:"复制",disabled:()=>ee(),action:()=>void Ze()},{label:"粘贴",disabled:()=>L.value,action:()=>void Ye()},{label:"删除",disabled:()=>L.value||ee(),action:()=>ke()},{label:"-",sep:!0},{label:"全选",action:()=>Ke()},{label:"时间/日期",disabled:()=>L.value,action:()=>pe()}]},{name:"format",label:"格式",items:[{label:V.value?"☑ 自动换行":"☐ 自动换行",action:()=>{V.value=!V.value}}]},{name:"view",label:"查看",items:[{label:he.value?"☑ 状态栏":"☐ 状态栏",action:()=>{he.value=!he.value}}]},{name:"help",label:"帮助",items:[{label:"关于记事本",action:()=>Y("ok","记事本 — DSH 文件工作台文本编辑器")}]}]);function qe(P){_e.value=_e.value===P?"":P}function ce(P){_e.value&&(_e.value=P)}function Ve(){_e.value=""}function rt(P,Q){Q.sep||Q.disabled&&Q.disabled()||(Ve(),Q.action?.())}function yt(){Ve()}function dt(){return F.value&&!L.value?Pt({title:r("txtUnsavedTitle"),message:r("txtUnsavedMsg")}).then(P=>P):Promise.resolve(!0)}function it(P){dt().then(Q=>{Q&&P()})}async function Oe(){await dt()&&(d.value=!1)}function U(){Te()}return(P,Q)=>{const Ee=Lf("icon"),O=dn;return l(),Xe(O,{modelValue:d.value,"onUpdate:modelValue":Q[1]||(Q[1]=E=>d.value=E),class:"fw-clone-dialog fw-np-dialog",width:"800px","align-center":"","modal-class":"fw-blur-overlay","close-on-click-modal":!1,"before-close":it,"append-to-body":"",onClose:U},{header:oe(()=>[o("div",Qk,[o("span",Zk,[m(Ee,{name:"fileText",size:20})]),o("span",ex,[o("span",tx,i(F.value?"* ":"")+i(h.value),1),o("span",nx,[de(i(s(r)("txtEditorSub")),1),F.value?(l(),c(ie,{key:0},[de(" · "+i(s(r)("txtUnsaved")),1)],64)):M("",!0)])])])]),default:oe(()=>[o("div",{class:"fw-np",tabindex:"-1",onKeydown:[bt(xe(B,["ctrl","prevent"]),["s"]),bt(xe(pe,["prevent"]),["f5"])]},[o("div",ox,[(l(!0),c(ie,null,Pe(Ce.value,E=>(l(),c("div",{key:E.name,class:te(["fw-np-menu",{open:_e.value===E.name}]),onClick:K=>qe(E.name),onMouseenter:K=>ce(E.name)},[de(i(E.label)+" ",1),_e.value===E.name?(l(),c("div",ax,[(l(!0),c(ie,null,Pe(E.items,(K,$)=>(l(),c(ie,{key:$},[K.sep?(l(),c("div",lx)):(l(),c("div",{key:1,class:te(["fw-np-item",{disabled:K.disabled?K.disabled():!1}]),onClick:q=>rt(E.name,K)},i(K.label),11,rx))],64))),128))])):M("",!0)],42,ix))),128))]),w.value?(l(),c("div",cx,[Q[2]||(Q[2]=o("span",{class:"fw-np-spin"},null,-1)),de(i(s(r)("txtLoading")),1)])):k.value?(l(),c("div",dx,i(k.value),1)):xt((l(),c("textarea",{key:2,ref_key:"taRef",ref:D,"onUpdate:modelValue":Q[0]||(Q[0]=E=>u.value=E),class:te(["fw-np-area",{wrap:V.value}]),readonly:L.value,wrap:V.value?"soft":"off",spellcheck:"false",onInput:be,onKeyup:Ae,onClick:Ae,onContextmenu:xe(yt,["prevent"])},null,42,ux)),[[Ot,u.value]]),he.value&&!w.value&&!k.value?(l(),c("div",fx,[L.value?(l(),c("span",px,i(s(r)("txtReadonly")),1)):M("",!0),Q[3]||(Q[3]=o("span",{class:"fw-np-spacer"},null,-1)),o("span",hx,"Ln "+i(ge.value)+", Col "+i(ne.value),1),Q[4]||(Q[4]=o("span",{class:"fw-np-seg"},"100%",-1)),o("span",vx,i(R.value),1),o("span",mx,i(ue.value),1)])):M("",!0)],40,sx),_e.value?(l(),c("div",{key:0,class:"fw-np-backdrop",onClick:Ve,onContextmenu:xe(Ve,["prevent"])},null,32)):M("",!0)]),_:1},8,["modelValue"])}}}),ln=gt({sessionId:null,connected:!1,files:[],running:!1});let Cc=!1,Qo=null;const Sc="__DSH_FW_SESSION_SSE__",$c={dispose:()=>Vl()};function yx(){const t=globalThis,e=t[Sc];if(e&&e!==$c)try{e.dispose()}catch{}t[Sc]=$c}function wx(t){const e=t;if(!(!e||typeof e!="object")&&ln.sessionId&&!(e.sessionId&&e.sessionId!==ln.sessionId))switch(e.type){case"snapshot":case"files":ln.files=Array.isArray(e.files)?e.files:[],ln.running=e.running===!0,ln.connected=!0;break;case"status":ln.running=e.running===!0,ln.connected=!0;break}}function bx(t){ln.sessionId!==t&&(ln.sessionId=t,fr(t))}function kx(){if(yx(),Qo)return()=>Vl();Cc||(Cc=!0,Pv(wx));const t=window.__DSH_FILE_WORKBENCH__;return!t||typeof t.subscribeCurrentSessionId!="function"?()=>{}:(Qo=t.subscribeCurrentSessionId(e=>{e?bx(e):(fr(null),ln.sessionId=null)}),()=>Vl())}function Vl(){try{Qo&&(Qo(),Qo=null)}catch{}fr(null),ln.sessionId=null,ln.files=[],ln.running=!1,ln.connected=!1}function Qa(t){const e=t.lastIndexOf(".");return e>0&&e<t.length-1?t.slice(e):""}function Tc(t){if(t==null||t<0)return"—";const e=["B","KB","MB","GB","TB"];let n=t,a=0;for(;n>=1024&&a<e.length-1;)n/=1024,a+=1;return`${a===0?n:n>=10?Math.round(n):n.toFixed(1)} ${e[a]}`}const vn=gt({selectionCount:0,canOperate:!0,hasClipboard:!1,isRecycle:!1});let Lu=null;function la(t){Lu=t}function xx(t,e){Lu?.(t,e)}const _x={key:0,class:"fw-fl-tool"},Cx={key:1,class:"fw-error"},Sx={class:"fw-error-ico"},$x={key:1,class:"fw-table"},Tx={key:0,class:"fw-sort"},Ex={key:0,class:"fw-sort"},Nx={key:0,class:"fw-sort"},Dx={key:0,class:"fw-sort"},Rx={key:0,class:"fw-vspacer"},Ax=["data-path","title","draggable","onMouseenter","onMouseleave","onDragstart","onDragover","onDrop","onClick","onDblclick","onContextmenu"],Mx={class:"col-name"},Px={class:"fw-n"},Fx={class:"fw-ico"},Lx={class:"fw-label"},Ox=["title"],Ix=["title"],Vx={key:2,class:"fw-weak"},zx=["title"],jx={class:"col-size"},Bx={class:"col-type"},Ux={class:"col-mtime"},Hx={key:1,class:"fw-vspacer"},Wx={key:2},Gx={colspan:4,class:"fw-empty-cell fw-inaccessible"},qx={key:3},Kx={colspan:4,class:"fw-empty-cell"},Xx=["data-path","title","draggable","onMouseenter","onMouseleave","onDragstart","onDragover","onDrop","onClick","onDblclick","onContextmenu"],Yx={class:"fw-ico"},Jx={class:"fw-list-name"},Qx=["title"],Zx=["title"],e_=["title"],t_=["data-path","title","draggable","onMouseenter","onMouseleave","onDragstart","onDragover","onDrop","onClick","onDblclick","onContextmenu"],n_={key:0,class:"fw-tile-thumb"},s_=["src","alt"],o_={key:1,class:"fw-tile-ico"},i_={class:"fw-tile-name"},a_=["title"],l_=["title"],r_={key:4,class:"fw-mode fw-content"},c_=["data-path","title","draggable","onMouseenter","onMouseleave","onDragstart","onDragover","onDrop","onClick","onDblclick","onContextmenu"],d_={class:"fw-ico"},u_={class:"fw-c-main"},f_={class:"fw-c-name"},p_={key:0,class:"fw-broken-tag"},h_={class:"fw-c-type"},v_={class:"fw-c-meta"},m_={key:5,class:"fw-mode fw-tiles"},g_=["data-path","title","draggable","onMouseenter","onMouseleave","onDragstart","onDragover","onDrop","onClick","onDblclick","onContextmenu"],y_={key:0,class:"fw-tile-thumb"},w_=["src","alt"],b_={key:1,class:"fw-tile-ico"},k_={class:"fw-t2-body"},x_={class:"fw-t2-name"},__={class:"fw-t2-type"},C_={class:"fw-t2-size"},S_={key:6,class:"fw-empty-small"},$_={key:3,class:"fw-refreshing"},T_={class:"fw-dlg-head"},E_={class:"fw-dlg-badge"},N_={class:"fw-dlg-headtext"},D_={class:"fw-dlg-headtitle"},R_={class:"fw-dlg-headsub"},A_={key:0,class:"fw-prop-body"},M_={class:"fw-prop-row"},P_={class:"k"},F_={class:"v"},L_={class:"fw-prop-row"},O_={class:"k"},I_={class:"v"},V_={class:"fw-prop-row"},z_={class:"k"},j_={class:"v"},B_={class:"fw-prop-row fw-prop-row-wide"},U_={class:"k"},H_=["title"],W_={class:"fw-gitdiff-body"},G_=40,q_=28,K_=vt({__name:"FileListPane",setup(t){const{t:e}=Ft(),n=I(()=>le.view==="recycle"),a=g(Ue.sortKey),r=g(Ue.asc),d=g(null);let h=0,u=0;function p(y){return{width:`${Ue.colWidths[y]}px`}}function w(y,_){d.value=_,h=y.clientX,u=Ue.colWidths[_],document.addEventListener("mousemove",b),document.addEventListener("mouseup",k)}function b(y){const _=d.value;_&&(Ue.colWidths[_]=Math.max(G_,u+(y.clientX-h)))}function k(){d.value&&Hn(),d.value=null,document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",k)}Mt(()=>{document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",k)});const F=I(()=>n.value?"recycle":le.listing?.path??""),L=g(wl(F.value)),D=I(()=>{const y=L.value;return y==="huge"||y==="large"||y==="medium"||y==="small"?"grid":y}),z=I(()=>{const y=L.value;return y==="small"?20:y==="medium"?32:y==="large"?48:72});Je(()=>Ue.view,y=>{L.value!==y&&(L.value=y)}),Je(F,y=>{const _=wl(y);L.value!==_&&(L.value=_)}),Je(L,y=>Ji.value=y,{immediate:!0}),Je(()=>Ue.sortKey,y=>{a.value!==y&&(a.value=y)}),Je(()=>Ue.asc,y=>{r.value!==y&&(r.value=y)});const{cmOpen:H,cmX:C,cmY:Z,cmItems:G,openMenu:R}=hn(),ue=g(!1),V=g(null),he=g(!1),_e=g(""),ge=g(!1),ne=g(!1),ae=g(!1),Te=g(!1),je=g("");function be(y){je.value=y,Te.value=!0}function Ae(){Dt()}function W(y){a.value===y?r.value=!r.value:(a.value=y,r.value=y!=="mtime"),Ue.sortKey=a.value,Ue.asc=r.value,Hn()}function J(y){if(y.isDir)return e("typeFolder");const _=y.name.lastIndexOf("."),Se=_>0?y.name.slice(_+1).toUpperCase():"";return Se?`${Se} ${e("typeFile")}`:e("typeFile")}const B=/\.(png|jpe?g|gif|svg|webp|bmp|ico|avif)$/i;function ee(y){return!y.isDir&&B.test(y.name)}function ye(y){if(Ue.showExtensions||y.isDir)return y.name;const _=y.name.lastIndexOf(".");return _>0?y.name.slice(0,_):y.name}function ze(y){if(y.isDir)return"";const _=y.size;if(_===void 0)return"—";const Se=["B","KB","MB","GB","TB"];let fe=_,Le=0;for(;fe>=1024&&Le<Se.length-1;)fe/=1024,Le+=1;return`${Le===0?fe:fe>=10?Math.round(fe):fe.toFixed(1)} ${Se[Le]}`}function Ke(y){if(y.mtime===void 0)return"";try{return new Date(y.mtime).toLocaleString(void 0,{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})}catch{return new Date(y.mtime).toLocaleString()}}function Ze(y){return y.path}const we={"":"",untracked:"?",added:"A",modified:"M",deleted:"D"};function ke(y){return Nu(le.listing?.path??"",y.name)}function Ye(y){return we[ke(y)]}function st(y){const _=ke(y);return _==="untracked"?e("gitBadgeUntracked"):_==="added"?e("gitBadgeAdded"):_==="deleted"?e("gitBadgeDeleted"):_==="modified"?e("gitBadgeModified"):""}function pe(y){return Du(le.listing?.path??"",y.name)}function Ce(y){return we[pe(y)]}function qe(y){const _=pe(y);return _==="untracked"?e("gitBadgeUntracked"):_==="added"?e("gitBadgeAdded"):_==="deleted"?e("gitBadgeDeleted"):_==="modified"?e("gitBadgeModified"):""}const ce=I(()=>{const y=[...le.listing?.entries??[]],_={name:(Se,fe)=>Se.name.localeCompare(fe.name,void 0,{sensitivity:"base"}),size:(Se,fe)=>(Se.size??-1)-(fe.size??-1),type:(Se,fe)=>{const Le=A=>A.isDir?"0-folder":A.name.slice(A.name.lastIndexOf(".")).toLowerCase();return(J(Se)+Le(Se)).localeCompare(J(fe)+Le(fe))},mtime:(Se,fe)=>(Se.mtime??0)-(fe.mtime??0)};return y.sort((Se,fe)=>{if(Se.isDir!==fe.isDir)return Se.isDir?-1:1;let Le=_[a.value](Se,fe);return Le===0&&(Le=Se.name.localeCompare(fe.name,void 0,{sensitivity:"base"})),r.value||(Le=-Le),Le}),y}),Ve=g(""),rt=I(()=>{const y=Ve.value.trim().toLowerCase();return ce.value.filter(_=>!Ue.showHidden&&_.hidden?!1:y?_.name.toLowerCase().includes(y):!0)}),yt=I(()=>le.listing?.inaccessible?le.listing.inaccessible:rt.value.length===0&&Ve.value?e("filterEmpty"):n.value?e("recycleEmptyList"):e("emptyDir")),dt=g(null),it=g(null);function Oe(){it.value?.click()}async function U(y){const _=y.target,Se=_.files;Se?.length&&le.listing&&await un(Se,le.listing.path),_.value=""}const P=I(()=>rt.value.length),Q=qg(dt,P,q_),Ee=I(()=>rt.value.slice(Q.range.value.start,Q.range.value.end));Je(()=>le.listing?.path,()=>{dt.value&&(dt.value.scrollTop=0)}),Je(()=>le.listing?.path,y=>{y&&!n.value&&(xs(y),ro(y))},{immediate:!0});const O=g(new Set),E=g(""),K=g("");function $(y,_){if(y.shiftKey&&K.value){const Se=rt.value.map(A=>A.path),fe=Se.indexOf(K.value),Le=Se.indexOf(_.path);if(fe!==-1&&Le!==-1){const[A,Re]=fe<Le?[fe,Le]:[Le,fe],Xt=new Set;for(let Ut=A;Ut<=Re;Ut++)Xt.add(Se[Ut]);O.value=Xt}E.value=_.path;return}if(y.ctrlKey||y.metaKey){const Se=new Set(O.value),fe=Se.has(_.path);fe?Se.delete(_.path):Se.add(_.path),O.value=Se,K.value=_.path,E.value=fe?"":_.path;return}O.value=new Set,E.value=_.path,K.value=_.path}function q(y,_){O.value=new Set,E.value=_.path,K.value=_.path,yn(_)}function Ne(){O.value=new Set,E.value="",K.value=""}function re(y){dt.value?.focus({preventScroll:!0}),!(Lt||y.target.closest(".fw-row, .fw-list-row, .fw-tile, .fw-content-row, .fw-tile2, th"))&&Ne()}const ct=g(null);let wt=null,Lt=!1;function Ln(y){y.button!==0||!le.listing||y.target.closest(".fw-row, .fw-list-row, .fw-tile, .fw-content-row, .fw-tile2, th, input, textarea")||(wt={x:y.clientX,y:y.clientY},window.addEventListener("mousemove",Gt),window.addEventListener("mouseup",Be,{once:!0}))}function Gt(y){if(!wt||!dt.value)return;const _=dt.value.getBoundingClientRect(),Se=Math.min(wt.x,y.clientX),fe=Math.min(wt.y,y.clientY),Le=Math.max(wt.x,y.clientX),A=Math.max(wt.y,y.clientY);ct.value={x:Se-_.left,y:fe-_.top,w:Le-Se,h:A-fe};const Re=new Set;dt.value.querySelectorAll("[data-path]").forEach(Xt=>{const Ut=Xt.getBoundingClientRect();Ut.left<Le&&Ut.right>Se&&Ut.top<A&&Ut.bottom>fe&&Re.add(Xt.dataset.path??"")}),Re.delete(""),O.value=Re,E.value=""}function Be(){wt&&(wt=null,ct.value=null,window.removeEventListener("mousemove",Gt),Lt=!0,setTimeout(()=>{Lt=!1},0))}function Qe(y){if(y.target?.closest("input, textarea, select, [contenteditable='true'], .el-input, .el-textarea"))return;const Se=rt.value;if(!Se.length)return;const fe=Se.map(Re=>Re.path),Le=E.value?fe.indexOf(E.value):K.value?fe.indexOf(K.value):-1;if(y.ctrlKey&&y.shiftKey&&y.key.toLowerCase()==="n"){y.preventDefault(),pn("folder");return}if(y.ctrlKey||y.metaKey){switch(y.key.toLowerCase()){case"a":y.preventDefault(),O.value=new Set(fe);return;case"c":y.preventDefault(),O.value.size?Kt("copy"):E.value&&(Ri([E.value]),Y("ok",e("menuCopyDone")));return;case"x":y.preventDefault(),O.value.size?Kt("cut"):E.value&&(Io([E.value]),Y("ok",e("menuCutDone")));return;case"v":y.preventDefault(),le.listing&&es(le.listing.path);return;case"f":y.preventDefault(),at();return}return}if(y.altKey){y.key==="ArrowUp"?(y.preventDefault(),Nl()):y.key==="ArrowLeft"?(y.preventDefault(),tu()):y.key==="ArrowRight"&&(y.preventDefault(),nu());return}switch(y.key){case"Backspace":y.preventDefault(),Nl();return;case"Delete":y.preventDefault(),Cn();return;case"F2":y.preventDefault(),Sn();return;case"F5":y.preventDefault(),n.value?ks():Dt();return;case"Enter":Le>=0&&yn(Se[Le]);return}let A=Le;if(y.key==="ArrowDown")A=Le+1,y.preventDefault();else if(y.key==="ArrowUp")A=Le-1,y.preventDefault();else if(y.key==="Home")A=0,y.preventDefault();else if(y.key==="End")A=fe.length-1,y.preventDefault();else return;A<0||A>=fe.length||(O.value=new Set,E.value=fe[A],K.value=fe[A],dt.value?.querySelector(".fw-row.selected, .fw-list-row.selected, .fw-tile.selected, .fw-content-row.selected, .fw-tile2.selected")?.scrollIntoView({block:"nearest"}))}function et(y){return y?(le.listing?.entries??[]).find(_=>_.path===y)??null:null}function at(){dt.value?.parentElement?.querySelector(".fw-filter input")?.focus()}function Cn(){if(O.value.size){if(n.value){qn([...O.value]);return}Kt("delete");return}const y=et(E.value);y&&As(y)}function Sn(){if(n.value||O.value.size)return;const y=et(E.value);y&&Rs(y)}function Bt(y){return O.value.size?O.value.has(y.path):y.path===E.value}Je(()=>le.listing?.path,()=>{Ne()});const ot=g("");function ft(y){ot.value=y.path}function Ct(y){ot.value===y.path&&(ot.value="")}const On=I(()=>E.value),$n=I(()=>{const y=On.value;return y?(le.listing?.entries??[]).find(_=>_.path===y)??null:null}),Jn=I(()=>{const y=$n.value;if(!y)return le.listing?le.listing.path:"";let Se=y.isDir?e("typeFolder"):(()=>{const fe=y.name.lastIndexOf(".");return fe>0&&fe<y.name.length-1?y.name.slice(fe):e("typeFile")})();return y.mtime!==void 0&&(Se+=` · ${Ke(y)}`),!y.isDir&&y.size!==void 0&&(Se+=` · ${ze(y)}`),Se});let gn="";function Tn(y,_){y.dataTransfer&&(gn=_.path,v1.value=_.path,y.dataTransfer.effectAllowed="move",y.dataTransfer.setData("text/plain",_.path))}function eo(y){}function Ds(){}async function En(y,_){if(y.preventDefault(),n.value)return;const Se=y.dataTransfer?.files;if(Se?.length){const A=_||le.listing?.path||"";A&&await un(Se,A);return}const fe=gn;if(gn="",!fe||!_)return;const Le=fe.slice(0,Math.max(fe.lastIndexOf("/"),fe.lastIndexOf("\\")+1));In(Le)!==In(_)&&(Io([fe]),await es(_))}async function un(y,_){if(!fn(_))return;const Se=on(e("taskUploading"),_);let fe=0,Le=0;for(const A of Array.from(y)){Se.step(e("taskUploading"),A.name,void 0,Qa(A.name)||e("typeFile"),A.size);try{await Qp(_,A,De.key),fe+=1}catch{Le+=1}}fe&&Y("ok",e("uploaded",{count:fe})),Le&&Y("error",e("uploadFailed",{count:Le})),Le?Se.fail(`${e("uploadFailed",{count:Le})}${fe?`，成功 ${fe}`:""}`):fe&&Se.done(e("uploaded",{count:fe})),await Dt()}function In(y){return y.replace(/[\\/]+/g,"/").replace(/\/+$/,"").toLowerCase()}function Gn(y){return y.isDir?{fileType:e("typeFolder")}:{fileType:Qa(y.name)||e("typeFile"),fileSize:y.size}}async function Nn(y){try{const _=await qi(y);return _.isDir?{fileType:e("typeFolder")}:{fileType:Qa(_.name)||e("typeFile"),fileSize:_.size}}catch{return{}}}async function yn(y){if(n.value){await An([y.recycleFullPath??y.path]);return}if(y.isDir){await jt(y.path);return}try{await fi(y.path)}catch(_){Y("error",_.message)}}const wn={openGitPanel:()=>{ne.value=!0},openSvnPanel:()=>{ae.value=!0},openCommit:()=>{const y=le.listing?.path??"";if(!Eu(y)){Y("error",e("gitNotRepo"));return}ge.value=!0},showGitDiff:y=>{_e.value=y,he.value=!0},afterMutate:async y=>{await xs(y),await Dt()}};function Qn(y){return Pl(le.listing?.path??"",y,wn)}function Dn(y){return Fl(le.listing?.path??"",y,wn)}function N(y){const _=document.createElement("a");_.href=Up(y),_.rel="noopener",document.body.appendChild(_),_.click(),_.remove()}function ve(y){const _=y.isDir?y.path:y.path.slice(0,Math.max(y.path.lastIndexOf("/"),y.path.lastIndexOf("\\")));To(_)}function Ie(y,_=!0){gr(y,{isDir:_})}async function He(y,_,Se){const fe=await us({title:y,message:e("subagentAsk"),placeholder:e("subagentAskPlaceholder"),initial:"",multiline:!0});if(fe!==null)try{const Le=await Yp(_,Se,fe,ln.sessionId??void 0);if(Le.ok){const A=Le.mode==="oneshot"?Le.output??"":"";Y("ok",A?A.slice(0,300)+(A.length>300?"…":""):e("subagentSpawned"))}else Y("error",Le.error||e("subagentFailed"))}catch(Le){Y("error",Le instanceof Error?Le.message:String(Le))}}function Me(y){He(e("menuSubagent"),y.path,y.isDir)}function Ge(){He(e("menuNewSubagent"),"",!1)}function Et(y,_){if(O.value.has(_.path)||(O.value=new Set,E.value=_.path,K.value=_.path),n.value){R(y,no(_));return}if(O.value.has(_.path)){const Re=[...O.value],Xt=!bs(_.path),Ut=po(_.path);R(y,[{label:e("menuMultiCut"),icon:"cut",onClick:()=>Kt("cut"),disabled:Xt},{label:e("menuMultiCopy"),icon:"copy",onClick:()=>Kt("copy")},{label:e("menuMultiDelete"),icon:"trash",onClick:()=>Kt("delete"),disabled:Xt},{label:e("menuMultiCompress"),icon:"archive",onClick:()=>Kt("compress"),disabled:Xt},{separator:!0},{label:e(Ut?"favoriteRemove":"favoriteAdd"),icon:"star",onClick:()=>{const gs=[...O.value],so=gs.every(ss=>po(ss));for(const ss of gs)po(ss)===so&&Qi(ss);Y("ok",e(so?"favoriteRemoved":"favoriteAdded"))}},{separator:!0},{label:e("cancel"),icon:"close",onClick:Ne},{label:`(${Re.length}) ✕ ${e("selectedCount",{count:Re.length})}`,icon:"",onClick:Ne}]);return}const Se=po(_.path),fe=!bs(_.path),Le=/\.txt$/i.test(_.name),A=[{label:e("menuOpen"),icon:"arrowRight",onClick:()=>yn(_)},...Wt(_.path)?[]:[{label:e("menuOpenExternal"),icon:"monitor",onClick:()=>to(_.path)}]];Le&&A.push({label:e("menuEdit"),icon:"edit",disabled:fe,onClick:()=>be(_.path)}),_.isDir&&A.push({label:e("menuOpenInEditor"),icon:"code",onClick:()=>Ie(_.path)}),A.push({separator:!0}),A.push({label:e("menuCut"),icon:"cut",disabled:fe,onClick:()=>{Io([_.path]),Y("ok",e("menuCutDone"))}},{label:e("menuCopy"),icon:"copy",onClick:()=>{Ri([_.path]),Y("ok",e("menuCopyDone"))}},{label:e("menuCompress"),icon:"archive",disabled:fe,onClick:()=>Ps(_)},{label:e("menuExtract"),icon:"folderOpen",disabled:fe||_.isDir||!_.name.toLowerCase().endsWith(".zip"),onClick:()=>tn(_)},{label:e("menuRename"),icon:"edit",disabled:fe,onClick:()=>Rs(_)},{label:e("menuDelete"),icon:"trash",disabled:fe,onClick:()=>As(_)},{separator:!0},{label:e(Se?"favoriteRemove":"favoriteAdd"),icon:"star",onClick:()=>{const Re=Qi(_.path);Y("ok",e(Re?"favoriteAdded":"favoriteRemoved"))}},{label:e("menuDownload"),icon:"download",disabled:_.isDir,onClick:()=>N(_.path)},{label:e("menuOpenTerminal"),icon:"terminal",onClick:()=>ve(_)},{label:e("menuSubagent"),icon:"sparkle",onClick:()=>Me(_)},...Qn(_.path),...Dn(_.path),{separator:!0},{label:e("menuCopyPath"),icon:"link",onClick:()=>Ro(_.path)},{label:e("menuProperties"),icon:"info",onClick:()=>Zn(_.path)}),R(y,A)}function St(y){if(!le.listing)return;if(n.value){R(y,[{label:e("menuRefresh"),icon:"refresh",onClick:()=>ks()},{separator:!0},{label:e("recycleEmpty"),icon:"trash",disabled:(le.recycleItems?.length??0)===0,onClick:()=>ts()}]);return}const _=le.listing.path,Se=Ml(),fe=!bs(_);R(y,[{label:e("menuRefresh"),icon:"refresh",onClick:Dt},{label:e("menuOpenInEditor"),icon:"code",onClick:()=>Ie(_)},{separator:!0},{label:e("menuView"),icon:"eye",children:bn()},{label:e("menuSort"),icon:"sort",children:Rn()},{separator:!0},{label:e("menuPaste"),icon:"download",disabled:!Se||fe,onClick:()=>es(_)},{label:e("menuUpload"),icon:"upload",disabled:fe,onClick:()=>Oe()},{label:e("menuNew"),icon:"sparkle",disabled:fe,children:[{label:e("menuNewFolder"),icon:"folder",onClick:()=>pn("folder")},{label:e("menuNewFile"),icon:"file",onClick:()=>pn("file")}]},...Qn(_),...Dn(_),{separator:!0},{label:e("menuOpenTerminal"),icon:"terminal",onClick:()=>To(_)},{label:e("menuNewSubagent"),icon:"sparkle",onClick:()=>Ge()},{label:e("menuProperties"),icon:"info",onClick:()=>Zn(_)}])}function bn(){const y=L.value,_=(Se,fe)=>({label:Se,checked:y===fe,onClick:()=>{L.value=fe,bl(F.value,fe)}});return[_(e("viewHuge"),"huge"),_(e("viewLarge"),"large"),_(e("viewMedium"),"medium"),_(e("viewSmall"),"small"),{separator:!0},_(e("viewList"),"list"),{separator:!0},_(e("viewDetails"),"details"),_(e("viewContent"),"content"),_(e("viewTiles"),"tiles")]}function Vn(y){L.value=y,bl(F.value,y)}aa(Vn),Rt.canSwitchView=!0,Ts(()=>{Rt.visible=!!le.listing&&!le.loadErr,Rt.total=rt.value.length,Rt.selected=O.value.size,Rt.text=Jn.value,Rt.view=L.value}),la((y,_)=>{const Se=le.listing?.path??"";if(n.value){const fe=O.value.size?[...O.value]:E.value?[E.value]:[];switch(y){case"restore":An(fe);break;case"delete":qn(fe);break;case"emptyRecycle":ts();break;case"refresh":ks();break;case"properties":E.value&&Zn(E.value);break}return}switch(y){case"newFolder":pn("folder");break;case"newFile":pn("file");break;case"upload":Oe();break;case"cut":case"copy":{O.value.size?Kt(y):E.value&&((y==="cut"?Io:Ri)([E.value]),Y("ok",e(y==="cut"?"menuCutDone":"menuCopyDone")));break}case"paste":Se&&es(Se);break;case"rename":Sn();break;case"delete":Cn();break;case"sort":_&&W(_);break;case"view":_&&Vn(_);break;case"toggleExt":Ue.showExtensions=!Ue.showExtensions,Hn();break;case"preview":{const fe=E.value?et(E.value):null;fe&&yn(fe);break}case"refresh":Dt();break;case"properties":E.value&&Zn(E.value);break}}),Ts(()=>{vn.selectionCount=O.value.size||(E.value?1:0),vn.canOperate=le.listing?bs(le.listing.path):!1,vn.hasClipboard=Ml(),vn.isRecycle=le.view==="recycle"}),Mt(()=>la(null)),Mt(()=>{aa(null),Tu()});function Rn(){return[["name",e("sortName")],["mtime",e("sortModified")],["type",e("sortType")],["size",e("sortSize")]].map(([_,Se])=>({label:Se,checked:a.value===_,onClick:()=>W(_)}))}async function to(y){if(Wt(y)){Y("error",e("remoteNoExternal"));return}try{await md(y),Y("ok",e("menuOpened"))}catch(_){Y("error",_.message)}}async function Ro(y){try{await navigator.clipboard.writeText(y),Y("ok",e("menuPathCopied"))}catch{Y("error",e("menuPathCopyFail"))}}function fn(y){return bs(y)?!0:(Y("error",e("workspaceOutside")),!1)}async function Rs(y){if(!fn(y.path))return;const _=(await us({title:e("renameEntry"),initial:y.name}))?.trim();if(!_)return;const fe=`${y.path.slice(0,Math.max(y.path.lastIndexOf("/"),y.path.lastIndexOf("\\")))}/${_}`,Le=Gn(y),A=on(e("taskRenaming"),`${y.name} → ${_}`,Le.fileType,Le.fileSize);try{await Gi(y.path,fe,De.key),Y("ok",e("renamed")),A.done()}catch(Re){Y("error",Re.message),A.fail(Re.message)}await Dt()}async function As(y){if(n.value){await qn([y.recycleFullPath??y.path]);return}if(!fn(y.path)||!await Pt({title:e("deleteTitle"),message:e("confirmDelete",{name:y.name})}))return;const Se=Gn(y),fe=on(e("taskDeleting"),y.name,Se.fileType,Se.fileSize);try{await fl(y.path,De.key),Y("ok",e("deleted")),fe.done()}catch(Le){Y("error",Le.message),fe.fail(Le.message)}await Dt()}async function Zn(y){if(n.value){const _=et(y);if(!_)return;const Se=_.name.lastIndexOf(".");V.value={name:_.name,path:_.originalPath||_.path,isDir:_.isDir,ext:Se>0&&Se<_.name.length-1?_.name.slice(Se):"",size:_.size??0,mtime:_.mtime??0},ue.value=!0;return}if(le.listing)try{V.value=await qi(y),ue.value=!0}catch(_){Y("error",_.message)}}async function es(y){if(!fn(y))return;const _=g1();if(!_.paths.length)return;if(_.op==="cut"&&_.paths.some(fe=>!bs(fe))){Y("error",e("workspaceOutside"));return}const Se=on(_.op==="cut"?e("taskMoving"):e("taskCopying"),`${_.paths.length} → ${y}`);try{for(const fe of _.paths){const Le=fe.slice(Math.max(fe.lastIndexOf("/"),fe.lastIndexOf("\\"))+1),A=await Nn(fe);if(_.op==="cut"&&!A.fileType){Y("error",e("taskSrcMissing",{name:Le})),Se.fail(e("taskSrcMissing",{name:Le})),await Dt();return}const Re=await zn(Le,y);Se.step(_.op==="cut"?e("taskMoving"):e("taskCopying"),fe,`→ ${y}`,A.fileType,A.fileSize),_.op==="cut"?await Gi(fe,Re,De.key):await Jp(fe,y,De.key)}Y("ok",_.op==="cut"?e("moved"):e("copied")),Se.done(),m1()}catch(fe){Y("error",fe.message),Se.fail(fe.message)}await Dt()}function Ms(y){return le.listing?.entries.find(_=>_.path===y)?.name??null}function no(y){const _=O.value.has(y.path)?[...O.value]:[y.recycleFullPath??y.path];return[{label:e("recycleRestore"),icon:"undo",onClick:()=>An(_)},{label:e("recycleDelete"),icon:"trash",onClick:()=>qn(_)},{separator:!0},{label:e("menuRefresh"),icon:"refresh",onClick:()=>ks()},{separator:!0},{label:e("recycleEmpty"),icon:"trash",disabled:(le.recycleItems?.length??0)===0,onClick:()=>ts()},{separator:!0},{label:e("menuProperties"),icon:"info",onClick:()=>Zn(y.recycleFullPath??y.path)}]}async function An(y){if(!y.length)return;const _=on(e("recycleRestore"),y.length>1?`${y.length} 项`:Ms(y[0])??"");let Se=0;for(const fe of y)try{await Vp(fe),Se+=1}catch(Le){_.fail(Le.message),Y("error",Le.message)}Se&&(Y("ok",e("recycleRestored")),_.done(e("recycleRestored"))),Ne(),await ks()}async function qn(y){if(!y.length||!await Pt({title:e("recycleDelete"),message:y.length>1?e("recycleDeleteConfirmMulti",{count:y.length}):e("recycleDeleteConfirm",{name:Ms(y[0])??""})}))return;const Se=on(e("recycleDelete"),`${y.length} 项`);let fe=0;for(const Le of y)try{await zp(Le),fe+=1}catch(A){Se.fail(A.message),Y("error",A.message)}fe&&(Y("ok",e("recycledDeleted")),Se.done(e("recycledDeleted"))),Ne(),await ks()}async function ts(){await pu(),Ne()}async function Ps(y){if(!fn(y.path))return;const _=Gn(y),Se=on(e("taskCompressing"),y.name,_.fileType,_.fileSize);try{await Yr(y.path,void 0,De.key),Y("ok",e("compressed")),Se.done()}catch(fe){Y("error",fe.message),Se.fail(fe.message)}await Dt()}async function tn(y){const _=le.listing?.path??"";if(!_||!fn(_))return;const Se=Gn(y),fe=on(e("taskExtracting"),y.name,Se.fileType,Se.fileSize);try{const Le=await Zp(y.path,_,De.key);Y("ok",e("extracted",{count:Le.count})),fe.done(e("extracted",{count:Le.count}))}catch(Le){Y("error",`${e("extractFailed")}：${Le.message}`),fe.fail(Le.message)}await Dt()}async function Kt(y){const _=[...O.value];if(!_.length)return;if(y!=="copy"&&_.some(fe=>!bs(fe))){Y("error",e("workspaceOutside"));return}const Se=y==="cut"?on(e("taskMoving"),`${_.length} 项`):y==="copy"?on(e("taskCopying"),`${_.length} 项`):y==="delete"?on(e("taskDeleting"),`${_.length} 项`):on(e("taskCompressing"),`${_.length} 项`);try{if(y==="cut")Io(_),Y("ok",e("menuCutDone"));else if(y==="copy")Ri(_),Y("ok",e("menuCopyDone"));else if(y==="delete"){if(!await Pt({title:e("deleteTitle"),message:e("confirmDelete",{name:`${_.length} 项`})}))return;for(const Le of _)try{const A=await Nn(Le);await fl(Le,De.key),Se.step(e("taskDeleting"),Le,void 0,A.fileType,A.fileSize)}catch{}Y("ok",e("deleted")),Se.done()}else if(y==="compress"){for(const fe of _)try{const Le=await Nn(fe);await Yr(fe,void 0,De.key),Se.step(e("taskCompressing"),fe,void 0,Le.fileType,Le.fileSize)}catch{}Y("ok",e("compressed")),Se.done()}}catch(fe){Y("error",fe.message),Se.fail(fe.message)}Ne(),await Dt()}async function ns(y){return zn(y,le.listing?.path??"")}async function zn(y,_){const Se=_===le.listing?.path?new Set((le.listing?.entries??[]).map(gs=>gs.name.toLowerCase())):null,fe=y.lastIndexOf("."),Le=fe>0?y.slice(0,fe):y,A=fe>0?y.slice(fe):"";let Re=y,Xt=2;for(;Se&&Se.has(Re.toLowerCase());)Re=`${Le} (${Xt})${A}`,Xt+=1;const Ut=_.includes("\\")?"\\":"/";return`${_.replace(/[\\/]+$/,"")}${Ut}${Re}`}async function pn(y){if(!le.listing||!fn(le.listing.path))return;const _=e(y==="folder"?"newFolderName":"newFileName"),Se=y==="folder"?_:`${_}.txt`;let fe=await ns(Se);try{y==="folder"?await Wi(fe,De.key):await vd(fe,De.key),Y("ok",e(y==="folder"?"createdFolder":"createdFile"))}catch(Le){Y("error",Le.message),await Dt();return}await Dt()}return(y,_)=>{const Se=Es,fe=Fn,Le=dn;return l(),c("div",{class:"fw-fl",onKeydown:Qe},[o("input",{ref_key:"fileInputRef",ref:it,type:"file",multiple:"",class:"fw-hidden-input",onChange:U},null,544),s(le).listing&&!s(le).loadErr?(l(),c("div",_x,[m(Se,{modelValue:Ve.value,"onUpdate:modelValue":_[0]||(_[0]=A=>Ve.value=A),size:"small",clearable:"",placeholder:s(e)("filterPlaceholder"),class:"fw-filter"},{prefix:oe(()=>[m(se,{name:"search",size:14,class:"fw-search-ico"})]),_:1},8,["modelValue","placeholder"])])):M("",!0),s(le).loadErr?(l(),c("div",Cx,[o("span",Sx,[m(se,{name:"warning",size:16})]),o("span",null,i(s(le).loadErr),1),o("button",{class:"fw-retry",onClick:_[1]||(_[1]=A=>s(Dt)())},i(s(e)("retry")),1)])):s(le).listing?(l(),c("div",{key:2,ref_key:"wrapRef",ref:dt,class:"fw-table-wrap",tabindex:"0",onScroll:_[12]||(_[12]=(...A)=>s(Q).onScroll&&s(Q).onScroll(...A)),onClick:re,onContextmenu:xe(St,["prevent"]),onDragover:xe(Ds,["prevent"]),onDrop:_[13]||(_[13]=xe(A=>En(A,null),["prevent"])),onMousedown:Ln},[ct.value?(l(),c("div",{key:0,class:"fw-band",style:kt({left:ct.value.x+"px",top:ct.value.y+"px",width:ct.value.w+"px",height:ct.value.h+"px"})},null,4)):M("",!0),D.value==="details"?(l(),c("table",$x,[o("thead",null,[o("tr",null,[o("th",{class:te(["col-name",{active:a.value==="name"}]),style:kt(p("name")),onClick:_[4]||(_[4]=A=>W("name"))},[de(i(s(e)("colName")),1),a.value==="name"?(l(),c("span",Tx,i(r.value?"▲":"▼"),1)):M("",!0),o("span",{class:te(["fw-col-resize",{on:d.value==="name"}]),onMousedown:_[2]||(_[2]=xe(A=>w(A,"name"),["prevent","stop"])),onClick:_[3]||(_[3]=xe(()=>{},["stop"]))},null,34)],6),o("th",{class:te(["col-size",{active:a.value==="size"}]),style:kt(p("size")),onClick:_[7]||(_[7]=A=>W("size"))},[de(i(s(e)("colSize")),1),a.value==="size"?(l(),c("span",Ex,i(r.value?"▲":"▼"),1)):M("",!0),o("span",{class:te(["fw-col-resize",{on:d.value==="size"}]),onMousedown:_[5]||(_[5]=xe(A=>w(A,"size"),["prevent","stop"])),onClick:_[6]||(_[6]=xe(()=>{},["stop"]))},null,34)],6),o("th",{class:te(["col-type",{active:a.value==="type"}]),style:kt(p("type")),onClick:_[10]||(_[10]=A=>W("type"))},[de(i(s(e)("colType")),1),a.value==="type"?(l(),c("span",Nx,i(r.value?"▲":"▼"),1)):M("",!0),o("span",{class:te(["fw-col-resize",{on:d.value==="type"}]),onMousedown:_[8]||(_[8]=xe(A=>w(A,"type"),["prevent","stop"])),onClick:_[9]||(_[9]=xe(()=>{},["stop"]))},null,34)],6),o("th",{class:te(["col-mtime",{active:a.value==="mtime"}]),onClick:_[11]||(_[11]=A=>W("mtime"))},[de(i(s(e)("colModified")),1),a.value==="mtime"?(l(),c("span",Dx,i(r.value?"▲":"▼"),1)):M("",!0)],2)])]),o("tbody",null,[s(Q).range.value.padBefore?(l(),c("tr",Rx,[o("td",{colspan:4,style:kt({height:s(Q).range.value.padBefore+"px"})},null,4)])):M("",!0),(l(!0),c(ie,null,Pe(Ee.value,A=>(l(),c("tr",{key:A.path,class:te(["fw-row",{"is-dir":A.isDir,hidden:A.hidden,broken:A.broken,selected:Bt(A)}]),"data-path":A.path,title:Ze(A),draggable:!n.value,onMouseenter:Re=>ft(A),onMouseleave:Re=>Ct(A),onDragstart:Re=>Tn(Re,A),onDragover:xe(Re=>A.isDir&&(A.path,void 0),["prevent"]),onDrop:xe(Re=>A.isDir&&En(Re,A.path),["prevent","stop"]),onClick:Re=>$(Re,A),onDblclick:Re=>q(Re,A),onContextmenu:xe(Re=>Et(Re,A),["prevent","stop"])},[o("td",Mx,[o("span",Px,[o("span",Fx,[m(se,{name:A.isDir?"folder":"file",size:13},null,8,["name"])]),o("span",Lx,i(ye(A)),1),ke(A)?(l(),c("span",{key:0,class:te(["fw-git-badge","st-"+ke(A)]),title:st(A)},[m(se,{name:"git",size:10}),de(i(Ye(A)),1)],10,Ox)):pe(A)?(l(),c("span",{key:1,class:te(["fw-git-badge","st-"+pe(A)]),title:qe(A)},[m(se,{name:"svn",size:10}),de(i(Ce(A)),1)],10,Ix)):M("",!0),A.hidden?(l(),c("span",Vx,"●")):M("",!0),A.broken?(l(),c("span",{key:3,class:"fw-broken-tag",title:s(e)("brokenLink")},"broken",8,zx)):M("",!0)])]),o("td",jx,i(ze(A)),1),o("td",Bx,i(J(A)),1),o("td",Ux,i(Ke(A)),1)],42,Ax))),128)),s(Q).range.value.padAfter?(l(),c("tr",Hx,[o("td",{colspan:4,style:kt({height:s(Q).range.value.padAfter+"px"})},null,4)])):M("",!0),s(le).listing.inaccessible?(l(),c("tr",Wx,[o("td",Gx,i(s(le).listing.inaccessible),1)])):rt.value.length?M("",!0):(l(),c("tr",qx,[o("td",Kx,i(yt.value),1)]))])])):D.value==="list"?(l(),c("div",{key:2,class:"fw-mode fw-list",style:kt({paddingTop:s(Q).range.value.padBefore+"px",paddingBottom:s(Q).range.value.padAfter+"px"})},[(l(!0),c(ie,null,Pe(Ee.value,A=>(l(),c("div",{key:A.path,class:te(["fw-list-row",{"is-dir":A.isDir,hidden:A.hidden,broken:A.broken,selected:Bt(A)}]),"data-path":A.path,title:Ze(A),draggable:!n.value,onMouseenter:Re=>ft(A),onMouseleave:Re=>Ct(A),onDragstart:Re=>Tn(Re,A),onDragover:xe(Re=>A.isDir&&(A.path,void 0),["prevent"]),onDrop:xe(Re=>A.isDir&&En(Re,A.path),["prevent","stop"]),onClick:Re=>$(Re,A),onDblclick:Re=>q(Re,A),onContextmenu:xe(Re=>Et(Re,A),["prevent","stop"])},[o("span",Yx,[m(se,{name:A.isDir?"folder":"file",size:14},null,8,["name"])]),o("span",Jx,i(ye(A)),1),ke(A)?(l(),c("span",{key:0,class:te(["fw-git-badge","st-"+ke(A)]),title:st(A)},[m(se,{name:"git",size:10}),de(i(Ye(A)),1)],10,Qx)):pe(A)?(l(),c("span",{key:1,class:te(["fw-git-badge","st-"+pe(A)]),title:qe(A)},[m(se,{name:"svn",size:10}),de(i(Ce(A)),1)],10,Zx)):M("",!0),A.broken?(l(),c("span",{key:2,class:"fw-broken-tag",title:s(e)("brokenLink")},"broken",8,e_)):M("",!0)],42,Xx))),128)),s(le).listing.inaccessible||!rt.value.length?(l(),c("div",{key:0,class:te(["fw-empty-cell",{"fw-inaccessible":!!s(le).listing.inaccessible}])},i(yt.value),3)):M("",!0)],4)):D.value==="grid"?(l(),c("div",{key:3,class:te(["fw-mode fw-grid","fw-grid-"+L.value])},[(l(!0),c(ie,null,Pe(rt.value,A=>(l(),c("div",{key:A.path,class:te(["fw-tile",{"is-dir":A.isDir,hidden:A.hidden,selected:Bt(A)}]),"data-path":A.path,title:Ze(A),draggable:!n.value,onMouseenter:Re=>ft(A),onMouseleave:Re=>Ct(A),onDragstart:Re=>Tn(Re,A),onDragover:xe(Re=>A.isDir&&(A.path,void 0),["prevent"]),onDrop:xe(Re=>A.isDir&&En(Re,A.path),["prevent","stop"]),onClick:Re=>$(Re,A),onDblclick:Re=>q(Re,A),onContextmenu:xe(Re=>Et(Re,A),["prevent","stop"])},[ee(A)?(l(),c("span",n_,[o("img",{src:s(Xr)(A.path),alt:A.name,loading:"lazy",draggable:"false"},null,8,s_)])):(l(),c("span",o_,[m(se,{name:A.isDir?"folder":"file",size:z.value},null,8,["name","size"])])),o("span",i_,[de(i(ye(A)),1),ke(A)?(l(),c("span",{key:0,class:te(["fw-git-badge","st-"+ke(A)]),title:st(A)},[m(se,{name:"git",size:10}),de(i(Ye(A)),1)],10,a_)):pe(A)?(l(),c("span",{key:1,class:te(["fw-git-badge","st-"+pe(A)]),title:qe(A)},[m(se,{name:"svn",size:10}),de(i(Ce(A)),1)],10,l_)):M("",!0)])],42,t_))),128)),s(le).listing.inaccessible||!rt.value.length?(l(),c("div",{key:0,class:te(["fw-empty-cell",{"fw-inaccessible":!!s(le).listing.inaccessible}])},i(yt.value),3)):M("",!0)],2)):D.value==="content"?(l(),c("div",r_,[(l(!0),c(ie,null,Pe(rt.value,A=>(l(),c("div",{key:A.path,class:te(["fw-content-row",{"is-dir":A.isDir,hidden:A.hidden,selected:Bt(A)}]),"data-path":A.path,title:Ze(A),draggable:!n.value,onMouseenter:Re=>ft(A),onMouseleave:Re=>Ct(A),onDragstart:Re=>Tn(Re,A),onDragover:xe(Re=>A.isDir&&(A.path,void 0),["prevent"]),onDrop:xe(Re=>A.isDir&&En(Re,A.path),["prevent","stop"]),onClick:Re=>$(Re,A),onDblclick:Re=>q(Re,A),onContextmenu:xe(Re=>Et(Re,A),["prevent","stop"])},[o("span",d_,[m(se,{name:A.isDir?"folder":"file",size:20},null,8,["name"])]),o("span",u_,[o("span",f_,[de(i(ye(A)),1),A.broken?(l(),c("span",p_,"broken")):M("",!0)]),o("span",h_,i(s(e)("colType"))+": "+i(J(A)),1)]),o("span",v_,[o("span",null,i(s(e)("colModified"))+": "+i(Ke(A)),1),o("span",null,i(s(e)("colSize"))+": "+i(A.isDir?"":ze(A)),1)])],42,c_))),128)),s(le).listing.inaccessible||!rt.value.length?(l(),c("div",{key:0,class:te(["fw-empty-cell",{"fw-inaccessible":!!s(le).listing.inaccessible}])},i(yt.value),3)):M("",!0)])):D.value==="tiles"?(l(),c("div",m_,[(l(!0),c(ie,null,Pe(rt.value,A=>(l(),c("div",{key:A.path,class:te(["fw-tile2",{"is-dir":A.isDir,hidden:A.hidden,selected:Bt(A)}]),"data-path":A.path,title:Ze(A),draggable:!n.value,onMouseenter:Re=>ft(A),onMouseleave:Re=>Ct(A),onDragstart:Re=>Tn(Re,A),onDragover:xe(Re=>A.isDir&&(A.path,void 0),["prevent"]),onDrop:xe(Re=>A.isDir&&En(Re,A.path),["prevent","stop"]),onClick:Re=>$(Re,A),onDblclick:Re=>q(Re,A),onContextmenu:xe(Re=>Et(Re,A),["prevent","stop"])},[ee(A)?(l(),c("span",y_,[o("img",{src:s(Xr)(A.path),alt:A.name,loading:"lazy",draggable:"false"},null,8,w_)])):(l(),c("span",b_,[m(se,{name:A.isDir?"folder":"file",size:34},null,8,["name"])])),o("span",k_,[o("span",x_,i(ye(A)),1),o("span",__,i(J(A)),1),o("span",C_,i(A.isDir?"":ze(A)),1)])],42,g_))),128)),s(le).listing.inaccessible||!rt.value.length?(l(),c("div",{key:0,class:te(["fw-empty-cell",{"fw-inaccessible":!!s(le).listing.inaccessible}])},i(yt.value),3)):M("",!0)])):M("",!0),s(le).listing.truncated?(l(),c("div",S_,i(s(e)("resultsSuffixTruncated")),1)):M("",!0)],544)):M("",!0),s(le).loading?(l(),c("div",$_,[..._[24]||(_[24]=[o("div",{class:"fw-refreshing-spinner"},null,-1)])])):M("",!0),s(H)?(l(),Xe(Zt,{key:4,items:s(G),x:s(C),y:s(Z),onClose:_[14]||(_[14]=A=>H.value=!1)},null,8,["items","x","y"])):M("",!0),m(Le,{modelValue:ue.value,"onUpdate:modelValue":_[16]||(_[16]=A=>ue.value=A),class:"fw-prop-dialog fw-clone-dialog",width:"420px","align-center":"","modal-class":"fw-blur-overlay","close-on-click-modal":!1},{header:oe(()=>[o("div",T_,[o("span",E_,[m(se,{name:V.value?.isDir?"folder":"file",size:20},null,8,["name"])]),o("span",N_,[o("span",D_,i(s(e)("menuProperties")),1),o("span",R_,i(V.value?.name),1)])])]),footer:oe(()=>[m(fe,{type:"primary",onClick:_[15]||(_[15]=A=>ue.value=!1)},{default:oe(()=>[de(i(s(e)("confirmOk")),1)]),_:1})]),default:oe(()=>[V.value?(l(),c("div",A_,[o("div",M_,[o("span",P_,i(s(e)("propKind")),1),o("span",F_,i(V.value.isDir?s(e)("typeFolder"):V.value.ext||s(e)("typeFile")),1)]),o("div",L_,[o("span",O_,i(s(e)("propSize")),1),o("span",I_,i(ze({isDir:V.value.isDir,size:V.value.size})),1)]),o("div",V_,[o("span",z_,i(s(e)("propModified")),1),o("span",j_,i(Ke({mtime:V.value.mtime})),1)]),o("div",B_,[o("span",U_,i(s(e)("propPath")),1),o("span",{class:"v mono",title:V.value.path},i(V.value.path),9,H_)])])):M("",!0)]),_:1},8,["modelValue"]),m(Le,{modelValue:he.value,"onUpdate:modelValue":_[18]||(_[18]=A=>he.value=A),class:"fw-gitdiff-dialog",title:s(e)("gitDiffTitle"),width:"680px","close-on-click-modal":!1},{footer:oe(()=>[m(fe,{type:"primary",onClick:_[17]||(_[17]=A=>he.value=!1)},{default:oe(()=>[de(i(s(e)("gitDiffClose")),1)]),_:1})]),default:oe(()=>[o("pre",W_,i(_e.value||s(e)("gitDiffEmpty")),1)]),_:1},8,["modelValue","title"]),m(Ru,{modelValue:ge.value,"onUpdate:modelValue":_[19]||(_[19]=A=>ge.value=A),dir:n.value?"":s(le).listing?.path??"",onDone:_[20]||(_[20]=A=>s(xs)(s(le).listing?.path??""))},null,8,["modelValue","dir"]),m(Pu,{modelValue:ne.value,"onUpdate:modelValue":_[21]||(_[21]=A=>ne.value=A),dir:n.value?"":s(le).listing?.path??""},null,8,["modelValue","dir"]),m(Fu,{modelValue:ae.value,"onUpdate:modelValue":_[22]||(_[22]=A=>ae.value=A),dir:n.value?"":s(le).listing?.path??""},null,8,["modelValue","dir"]),m(gx,{modelValue:Te.value,"onUpdate:modelValue":_[23]||(_[23]=A=>Te.value=A),path:je.value,onSaved:Ae},null,8,["modelValue","path"])],32)}}}),X_=_t(K_,[["__scopeId","data-v-c2b328cc"]]),Y_={key:0,class:"fw-err"},J_={class:"fw-tp-sec"},Q_={key:0,class:"fw-tp-grid"},Z_=["data-path","title","onClick","onDblclick","onContextmenu"],e2={class:"fw-drive-ico"},t2={class:"fw-drive-body"},n2={class:"fw-drive-name"},s2={class:"fw-drive-bar"},o2={class:"fw-drive-cap"},i2={key:0,class:"fw-tp-empty"},a2={key:1,class:"fw-tp-table"},l2={class:"col-name"},r2={class:"col-type"},c2={class:"col-total"},d2={class:"col-free"},u2={class:"col-fs"},f2=["data-path","title","onClick","onDblclick","onContextmenu"],p2={class:"col-name"},h2={class:"fw-tp-n"},v2={class:"fw-tp-ico"},m2={class:"fw-tp-label"},g2={class:"col-type"},y2={class:"col-total"},w2={class:"col-free"},b2={class:"col-fs"},k2={key:0},x2={colspan:5,class:"fw-tp-empty-cell"},_2={key:2,class:"fw-tp-loading"},C2={key:0,class:"fw-prop-body"},S2={class:"fw-prop-row"},$2={class:"k"},T2={class:"v"},E2={class:"fw-prop-row"},N2={class:"k"},D2={class:"v"},R2={class:"fw-prop-row"},A2={class:"k"},M2={class:"v"},P2={class:"fw-prop-row"},F2={class:"k"},L2={class:"v"},O2={class:"fw-prop-row"},I2={class:"k"},V2={class:"v"},z2={class:"fw-prop-row"},j2={class:"k"},B2={class:"v"},U2={class:"fw-prop-row"},H2={class:"k"},W2={class:"v"},G2={class:"fw-prop-bar"},Ec="computer",q2=vt({__name:"ThisPcPane",setup(t){const{t:e}=Ft(),n=["huge","large","medium","small"],a=I(()=>wl(Ec)),r=I(()=>n.includes(a.value)),d=I(()=>a.value==="huge"?52:a.value==="large"?44:a.value==="medium"?36:20);Ts(()=>Ji.value=a.value);const h=g(null),u=I(()=>{const W=[...le.drives],J=h.value;return J&&W.sort((B,ee)=>J==="size"?(ee.total??-1)-(B.total??-1):J==="free"?(ee.free??-1)-(B.free??-1):J==="type"?Number(B.removable)-Number(ee.removable)||Bs(B).localeCompare(Bs(ee),void 0,{sensitivity:"base"}):Bs(B).localeCompare(Bs(ee),void 0,{sensitivity:"base"})),W});function p(W){if(W===void 0||!Number.isFinite(W))return"—";const J=["B","KB","MB","GB","TB","PB"];let B=W,ee=0;for(;B>=1024&&ee<J.length-1;)B/=1024,ee+=1;return`${ee>0&&B<100?B.toFixed(1):Math.round(B)} ${J[ee]}`}function w(W){if(!(W.total===void 0||W.free===void 0))return Math.max(0,W.total-W.free)}function b(W){const J=w(W);return J===void 0||!W.total?"0%":`${Math.min(100,Math.max(0,J/W.total*100)).toFixed(1)}%`}function k(W){return e("driveCapacity",{free:p(W.free),total:p(W.total)})}const F=g(""),L=g(null);function D(W){F.value=W.path}function z(W){L.value?.focus({preventScroll:!0}),!W.target.closest(".fw-drive, .fw-tp-row, th")&&(F.value="")}function H(W){F.value=W.path,jt(W.path)}function C(W){const J=u.value;if(!J.length)return;if(W.key==="F5"){W.preventDefault(),Dt();return}if(W.key==="Enter"&&F.value){const ye=J.find(ze=>ze.path===F.value);ye&&(W.preventDefault(),H(ye));return}if(W.key!=="ArrowDown"&&W.key!=="ArrowUp"&&W.key!=="Home"&&W.key!=="End")return;W.preventDefault();const B=J.findIndex(ye=>ye.path===F.value),ee=W.key==="Home"?0:W.key==="End"?J.length-1:W.key==="ArrowDown"?Math.min(J.length-1,B+1):Math.max(0,B<0?0:B-1);F.value=J[ee]?.path??""}function Z(W){bl(Ec,W)}Ts(()=>{Rt.visible=!0,Rt.canSwitchView=!0,Rt.total=u.value.length,Rt.selected=F.value?1:0,Rt.text="",Rt.view=a.value}),cn(()=>aa(W=>Z(W))),Mt(()=>{aa(null),Tu()});const{cmOpen:G,cmX:R,cmY:ue,cmItems:V,openMenu:he}=hn();function _e(W,J){F.value=J.path;const B=po(J.path);he(W,[{label:e("menuOpen"),icon:"arrowRight",onClick:()=>H(J)},{label:e("menuOpenInEditor"),icon:"code",onClick:()=>gr(J.path)},{separator:!0},{label:e(B?"favoriteRemove":"favoriteAdd"),icon:"star",onClick:()=>{const ee=Qi(J.path);Y("ok",e(ee?"favoriteAdded":"favoriteRemoved"))}},{label:e("menuCopyPath"),icon:"link",onClick:()=>void Ae(J.path)},{separator:!0},{label:e("menuProperties"),icon:"info",onClick:()=>be(J)}])}function ge(W){he(W,[{label:e("menuRefresh"),icon:"refresh",onClick:()=>void Dt()},{separator:!0},{label:e("menuView"),icon:"eye",children:ne()},{label:e("menuSort"),icon:"sort",children:ae()}])}function ne(){const W=(J,B)=>({label:J,checked:a.value===B,onClick:()=>Z(B)});return[W(e("viewHuge"),"huge"),W(e("viewLarge"),"large"),W(e("viewMedium"),"medium"),W(e("viewSmall"),"small"),{separator:!0},W(e("viewList"),"list"),{separator:!0},W(e("viewDetails"),"details"),W(e("viewContent"),"content"),W(e("viewTiles"),"tiles")]}function ae(){return[["name",e("sortName")],["size",e("driveTotal")],["free",e("driveFree")],["type",e("sortType")]].map(([J,B])=>({label:B,checked:h.value===J,onClick:()=>{h.value=J}}))}const Te=g(!1),je=g(null);function be(W){je.value=W,Te.value=!0}async function Ae(W){try{await navigator.clipboard.writeText(W),Y("ok",e("menuPathCopied"))}catch{Y("error",e("menuPathCopyFail"))}}return la((W,J)=>{switch(W){case"view":J&&n.concat(["list","details","content","tiles"]).includes(J)&&Z(J);break;case"sort":(J==="name"||J==="size"||J==="free"||J==="type")&&(h.value=J);break;case"refresh":Dt();break;case"properties":{const B=u.value.find(ee=>ee.path===F.value);B&&be(B);break}}}),Mt(()=>la(null)),Ts(()=>{vn.selectionCount=F.value?1:0,vn.canOperate=!1,vn.hasClipboard=Ml(),vn.isRecycle=!1}),(W,J)=>{const B=Fn,ee=dn;return l(),c("div",{class:"fw-tp",onKeydown:C},[s(le).drivesErr?(l(),c("div",Y_,i(s(le).drivesErr),1)):(l(),c("div",{key:1,ref_key:"wrapRef",ref:L,class:te(["fw-tp-wrap","fw-tp-"+a.value]),tabindex:"0",onClick:z,onContextmenu:xe(ge,["prevent"])},[o("div",J_,i(s(e)("thisPcDevices"))+" ("+i(u.value.length)+")",1),r.value?(l(),c("div",Q_,[(l(!0),c(ie,null,Pe(u.value,ye=>(l(),c("div",{key:ye.path,class:te(["fw-drive",{selected:ye.path===F.value,removable:ye.removable}]),"data-path":ye.path,title:ye.path,onClick:ze=>D(ye),onDblclick:ze=>H(ye),onContextmenu:xe(ze=>_e(ze,ye),["prevent","stop"])},[o("span",e2,[m(se,{name:"hardDrive",size:d.value},null,8,["size"])]),o("span",t2,[o("span",n2,i(s(Bs)(ye)),1),o("span",s2,[o("span",{class:"fw-drive-fill",style:kt({width:b(ye)})},null,4)]),o("span",o2,i(k(ye)),1)])],42,Z_))),128)),!u.value.length&&!s(le).drivesLoading?(l(),c("div",i2,i(s(e)("emptyDrives")),1)):M("",!0)])):(l(),c("table",a2,[o("thead",null,[o("tr",null,[o("th",l2,i(s(e)("colName")),1),o("th",r2,i(s(e)("colType")),1),o("th",c2,i(s(e)("driveTotal")),1),o("th",d2,i(s(e)("driveFree")),1),o("th",u2,i(s(e)("driveFs")),1)])]),o("tbody",null,[(l(!0),c(ie,null,Pe(u.value,ye=>(l(),c("tr",{key:ye.path,class:te(["fw-tp-row",{selected:ye.path===F.value}]),"data-path":ye.path,title:ye.path,onClick:ze=>D(ye),onDblclick:ze=>H(ye),onContextmenu:xe(ze=>_e(ze,ye),["prevent","stop"])},[o("td",p2,[o("span",h2,[o("span",v2,[m(se,{name:"hardDrive",size:16})]),o("span",m2,i(s(Bs)(ye)),1)])]),o("td",g2,i(ye.removable?s(e)("driveTypeRemovable"):s(e)("driveTypeFixed")),1),o("td",y2,i(p(ye.total)),1),o("td",w2,i(p(ye.free)),1),o("td",b2,i(ye.fsType||"—"),1)],42,f2))),128)),u.value.length?M("",!0):(l(),c("tr",k2,[o("td",x2,i(s(e)("emptyDrives")),1)]))])]))],34)),s(le).drivesLoading?(l(),c("div",_2,[...J[3]||(J[3]=[o("div",{class:"fw-tp-spinner"},null,-1)])])):M("",!0),s(G)?(l(),Xe(Zt,{key:3,items:s(V),x:s(R),y:s(ue),onClose:J[0]||(J[0]=ye=>G.value=!1)},null,8,["items","x","y"])):M("",!0),m(ee,{modelValue:Te.value,"onUpdate:modelValue":J[2]||(J[2]=ye=>Te.value=ye),class:"fw-prop-dialog",title:s(e)("menuProperties"),width:"420px","close-on-click-modal":!1},{footer:oe(()=>[m(B,{type:"primary",onClick:J[1]||(J[1]=ye=>Te.value=!1)},{default:oe(()=>[de(i(s(e)("confirmOk")),1)]),_:1})]),default:oe(()=>[je.value?(l(),c("div",C2,[o("div",S2,[o("span",$2,i(s(e)("propName")),1),o("span",T2,i(je.value.name),1)]),o("div",E2,[o("span",N2,i(s(e)("propPath")),1),o("span",D2,i(je.value.path),1)]),o("div",R2,[o("span",A2,i(s(e)("propKind")),1),o("span",M2,i(je.value.removable?s(e)("driveTypeRemovable"):s(e)("driveTypeFixed")),1)]),o("div",P2,[o("span",F2,i(s(e)("driveFs")),1),o("span",L2,i(je.value.fsType||"—"),1)]),o("div",O2,[o("span",I2,i(s(e)("propSize")),1),o("span",V2,i(p(w(je.value))),1)]),o("div",z2,[o("span",j2,i(s(e)("driveFree")),1),o("span",B2,i(p(je.value.free)),1)]),o("div",U2,[o("span",H2,i(s(e)("driveTotal")),1),o("span",W2,i(p(je.value.total)),1)]),o("div",G2,[o("span",{class:"fw-prop-fill",style:kt({width:b(je.value)})},null,4)])])):M("",!0)]),_:1},8,["modelValue","title"])],32)}}}),K2=_t(q2,[["__scopeId","data-v-5d2b5f89"]]),X2=["title"],Y2=["disabled","title"],J2=["disabled","title"],Q2=["disabled","title"],Z2=["title"],eC=["title"],tC={class:"fw-pmenu-check"},nC=["title"],sC={class:"fw-pmenu-check"},oC={class:"fw-pmenu-check"},iC=["disabled","title"],aC=["disabled","title"],lC=["disabled","title"],rC=["disabled","title"],cC=["disabled","title"],dC=["disabled","title"],uC=["title"],fC={class:"fw-pmenu-check"},pC=["title"],hC={class:"fw-pmenu-check"},vC={class:"fw-pmenu-check"},mC=["disabled","title"],gC=vt({__name:"CommandBar",props:{navFolded:{type:Boolean},compact:{type:Boolean}},emits:["unfold-nav"],setup(t){const{t:e}=Ft(),n=I(()=>vn.isRecycle||!vn.canOperate),a=I(()=>vn.selectionCount>0),r=I(()=>(le.recycleItems?.length??0)>0),d=I(()=>[["name",e("sortName")],["mtime",e("sortModified")],["type",e("sortType")],["size",e("sortSize")]]),h=I(()=>[["huge",e("viewHuge")],["large",e("viewLarge")],["medium",e("viewMedium")],["small",e("viewSmall")],["list",e("viewList")],["details",e("viewDetails")],["content",e("viewContent")],["tiles",e("viewTiles")]]);function u(w,b){if(w==="newSshHost"){Kd();return}if(w==="openTerminal"){To(le.listing?.path??"");return}if(w==="cloneGit"||w==="cloneSvn"){$r({kind:w==="cloneGit"?"git":"svn",dir:le.listing?.path??"",key:De.key,onDone:({path:k})=>{jt(k)}});return}xx(w,b)}function p(w){w==="toggleExt"?u("toggleExt"):u("view",w)}return(w,b)=>{const k=Wf,F=Hf,L=Uf;return l(),c("div",{class:te(["fw-cmdbar",{"is-compact":t.compact}])},[t.navFolded?(l(),c("button",{key:0,class:"fw-cb-btn fw-cb-navtoggle",title:s(e)("expShowNav"),onClick:b[0]||(b[0]=D=>w.$emit("unfold-nav"))},[m(se,{class:"fw-cb-hamburger",name:"viewList",size:13}),de(i(s(e)("expShowNav")),1)],8,X2)):M("",!0),s(vn).isRecycle?(l(),c(ie,{key:1},[o("button",{class:"fw-cb-btn",disabled:!a.value,title:s(e)("recycleRestore"),onClick:b[1]||(b[1]=D=>u("restore"))},[m(se,{name:"undo",size:13}),de(i(s(e)("recycleRestore")),1)],8,Y2),o("button",{class:"fw-cb-btn",disabled:!a.value,title:s(e)("recycleDelete"),onClick:b[2]||(b[2]=D=>u("delete"))},[m(se,{name:"trash",size:13}),de(i(s(e)("recycleDelete")),1)],8,J2),o("button",{class:"fw-cb-btn",disabled:!r.value,title:s(e)("recycleEmpty"),onClick:b[3]||(b[3]=D=>u("emptyRecycle"))},[m(se,{name:"close",size:13}),de(i(s(e)("recycleEmpty")),1)],8,Q2),o("button",{class:"fw-cb-btn",title:s(e)("menuRefresh"),onClick:b[4]||(b[4]=D=>u("refresh"))},[m(se,{name:"refresh",size:13}),de(i(s(e)("menuRefresh")),1)],8,Z2),b[18]||(b[18]=o("span",{class:"fw-cb-sep"},null,-1)),m(L,{trigger:"click",teleported:!1,"popper-class":"fw-panelmenu-popper",onCommand:b[5]||(b[5]=D=>u("sort",String(D)))},{dropdown:oe(()=>[m(F,{class:"fw-panelmenu"},{default:oe(()=>[(l(!0),c(ie,null,Pe(d.value,D=>(l(),Xe(k,{key:D[0],command:D[0],class:"fw-panelitem"},{default:oe(()=>[o("span",tC,i(s(Ue).sortKey===D[0]?"✓":""),1),de(i(D[1]),1)]),_:2},1032,["command"]))),128))]),_:1})]),default:oe(()=>[o("button",{class:"fw-cb-btn",title:s(e)("menuSort")},[m(se,{name:"sort",size:13}),de(i(s(e)("menuSort"))+" ",1),b[16]||(b[16]=o("span",{class:"caret"},"▾",-1))],8,eC)]),_:1}),m(L,{trigger:"click",teleported:!1,"popper-class":"fw-panelmenu-popper",onCommand:b[6]||(b[6]=D=>p(String(D)))},{dropdown:oe(()=>[m(F,{class:"fw-panelmenu"},{default:oe(()=>[(l(!0),c(ie,null,Pe(h.value,D=>(l(),Xe(k,{key:D[0],command:D[0],class:"fw-panelitem"},{default:oe(()=>[o("span",sC,i(s(Ji)===D[0]?"✓":""),1),de(i(D[1]),1)]),_:2},1032,["command"]))),128)),m(k,{divided:"",command:"toggleExt",class:"fw-panelitem"},{default:oe(()=>[o("span",oC,i(s(Ue).showExtensions?"✓":""),1),de(i(s(e)("showExtensions")),1)]),_:1})]),_:1})]),default:oe(()=>[o("button",{class:"fw-cb-btn",title:s(e)("menuView")},[m(se,{name:"viewDetails",size:13}),de(i(s(e)("menuView"))+" ",1),b[17]||(b[17]=o("span",{class:"caret"},"▾",-1))],8,nC)]),_:1})],64)):(l(),c(ie,{key:2},[m(L,{trigger:"click",teleported:!1,"popper-class":"fw-panelmenu-popper",onCommand:b[7]||(b[7]=D=>u(String(D)))},{dropdown:oe(()=>[m(F,{class:"fw-panelmenu"},{default:oe(()=>[m(k,{command:"newFolder",class:"fw-panelitem"},{default:oe(()=>[de(i(s(e)("menuNewFolder")),1)]),_:1}),m(k,{command:"newFile",class:"fw-panelitem"},{default:oe(()=>[de(i(s(e)("menuNewFile")),1)]),_:1}),m(k,{command:"upload",class:"fw-panelitem"},{default:oe(()=>[de(i(s(e)("menuUpload")),1)]),_:1}),m(k,{command:"cloneGit",class:"fw-panelitem"},{default:oe(()=>[de(i(s(e)("menuCloneGit")),1)]),_:1}),m(k,{command:"cloneSvn",class:"fw-panelitem"},{default:oe(()=>[de(i(s(e)("menuCloneSvn")),1)]),_:1}),m(k,{divided:"",command:"newSshHost",class:"fw-panelitem"},{default:oe(()=>[de(i(s(e)("sshNewHost")),1)]),_:1}),m(k,{command:"openTerminal",class:"fw-panelitem"},{default:oe(()=>[de(i(s(e)("terminalNew")),1)]),_:1})]),_:1})]),default:oe(()=>[o("button",{class:"fw-cb-btn",disabled:n.value,title:s(e)("menuNew")},[m(se,{name:"plus",size:13}),de(i(s(e)("menuNew"))+" ",1),b[19]||(b[19]=o("span",{class:"caret"},"▾",-1))],8,iC)]),_:1}),o("button",{class:"fw-cb-btn",disabled:!a.value,title:s(e)("menuCut"),onClick:b[8]||(b[8]=D=>u("cut"))},[m(se,{name:"cut",size:13}),de(i(s(e)("menuCut")),1)],8,aC),o("button",{class:"fw-cb-btn",disabled:!a.value,title:s(e)("menuCopy"),onClick:b[9]||(b[9]=D=>u("copy"))},[m(se,{name:"copy",size:13}),de(i(s(e)("menuCopy")),1)],8,lC),o("button",{class:"fw-cb-btn",disabled:s(vn).hasClipboard||n.value,title:s(e)("menuPaste"),onClick:b[10]||(b[10]=D=>u("paste"))},[m(se,{name:"paste",size:13}),de(i(s(e)("menuPaste")),1)],8,rC),o("button",{class:"fw-cb-btn",disabled:s(vn).selectionCount!==1||n.value,title:s(e)("menuRename"),onClick:b[11]||(b[11]=D=>u("rename"))},[m(se,{name:"edit",size:13}),de(i(s(e)("menuRename")),1)],8,cC),o("button",{class:"fw-cb-btn",disabled:!a.value||n.value,title:s(e)("menuDelete"),onClick:b[12]||(b[12]=D=>u("delete"))},[m(se,{name:"trash",size:13}),de(i(s(e)("menuDelete")),1)],8,dC),b[22]||(b[22]=o("span",{class:"fw-cb-sep"},null,-1)),m(L,{trigger:"click",teleported:!1,"popper-class":"fw-panelmenu-popper",onCommand:b[13]||(b[13]=D=>u("sort",String(D)))},{dropdown:oe(()=>[m(F,{class:"fw-panelmenu"},{default:oe(()=>[(l(!0),c(ie,null,Pe(d.value,D=>(l(),Xe(k,{key:D[0],command:D[0],class:"fw-panelitem"},{default:oe(()=>[o("span",fC,i(s(Ue).sortKey===D[0]?"✓":""),1),de(i(D[1]),1)]),_:2},1032,["command"]))),128))]),_:1})]),default:oe(()=>[o("button",{class:"fw-cb-btn",title:s(e)("menuSort")},[m(se,{name:"sort",size:13}),de(i(s(e)("menuSort"))+" ",1),b[20]||(b[20]=o("span",{class:"caret"},"▾",-1))],8,uC)]),_:1}),m(L,{trigger:"click",teleported:!1,"popper-class":"fw-panelmenu-popper",onCommand:b[14]||(b[14]=D=>p(String(D)))},{dropdown:oe(()=>[m(F,{class:"fw-panelmenu"},{default:oe(()=>[(l(!0),c(ie,null,Pe(h.value,D=>(l(),Xe(k,{key:D[0],command:D[0],class:"fw-panelitem"},{default:oe(()=>[o("span",hC,i(s(Ji)===D[0]?"✓":""),1),de(i(D[1]),1)]),_:2},1032,["command"]))),128)),m(k,{divided:"",command:"toggleExt",class:"fw-panelitem"},{default:oe(()=>[o("span",vC,i(s(Ue).showExtensions?"✓":""),1),de(i(s(e)("showExtensions")),1)]),_:1})]),_:1})]),default:oe(()=>[o("button",{class:"fw-cb-btn",title:s(e)("menuView")},[m(se,{name:"viewDetails",size:13}),de(i(s(e)("menuView"))+" ",1),b[21]||(b[21]=o("span",{class:"caret"},"▾",-1))],8,pC)]),_:1}),b[23]||(b[23]=o("span",{class:"fw-cb-flex"},null,-1)),o("button",{class:"fw-cb-btn",disabled:!a.value,title:s(e)("cmdPreview"),onClick:b[15]||(b[15]=D=>u("preview"))},[m(se,{name:"eye",size:13}),de(i(s(e)("cmdPreview")),1)],8,mC)],64))],2)}}}),yC=_t(gC,[["__scopeId","data-v-940d1c90"]]),wC=["title"],bC={key:0,class:"fw-bg-task-badge"},kC={class:"fw-bg-task-head"},xC={class:"fw-bg-task-title"},_C={class:"fw-bg-task-headacts"},CC=["disabled"],SC=["disabled"],$C=["disabled"],TC=["title"],EC={key:0,class:"fw-bg-task-group"},NC={class:"fw-bg-task-grouplbl"},DC=["onClick"],RC={class:"fw-bg-task-label"},AC={key:0,class:"fw-bg-task-detail"},MC={class:"fw-bg-task-see"},PC={key:1,class:"fw-bg-task-group"},FC={class:"fw-bg-task-grouplbl"},LC=["onClick"],OC={class:"fw-bg-task-ico"},IC={class:"fw-bg-task-label"},VC={key:0,class:"fw-bg-task-detail"},zC={class:"fw-bg-task-see"},jC={key:2,class:"fw-bg-task-empty"},BC={class:"fw-dlg-head"},UC={class:"fw-dlg-badge"},HC={class:"fw-dlg-headtext"},WC={class:"fw-dlg-headtitle"},GC={class:"fw-dlg-headsub"},qC={class:"fw-tlog-head"},KC={class:"fw-tlog-name"},XC={key:0,class:"fw-tlog-fileitem"},YC={class:"fw-tlog-k"},JC=["title"],QC={class:"fw-tlog-meta"},ZC={key:0},eS={key:1},tS={key:2},nS={class:"fw-tlog-timeline"},sS={class:"fw-tlog-rail"},oS={key:0,class:"fw-tlog-line"},iS={class:"fw-tlog-ct"},aS={class:"fw-tlog-brow"},lS={class:"fw-tlog-time"},rS={class:"fw-tlog-dur-tip"},cS={class:"fw-tlog-btext"},dS={key:0,class:"fw-tlog-bnote"},uS={class:"fw-dlg-head"},fS={class:"fw-dlg-badge"},pS={class:"fw-dlg-headtext"},hS={class:"fw-dlg-headtitle"},vS={class:"fw-dlg-headsub"},mS={class:"fw-taskarc"},gS={class:"fw-taskarc-dates"},yS=["onClick"],wS={class:"fw-taskarc-cnt"},bS={class:"fw-taskarc-records"},kS={key:0,class:"fw-taskarc-none"},xS=["onClick"],_S={class:"fw-taskarc-ico"},CS={class:"fw-taskarc-label"},SS={key:0,class:"fw-taskarc-recdetail"},$S={class:"fw-taskarc-time"},TS={class:"fw-taskarc-detail"},ES={key:0,class:"fw-taskarc-none"},NS={class:"fw-tlog-head"},DS={class:"fw-tlog-name"},RS={key:0,class:"fw-tlog-fileitem"},AS={class:"fw-tlog-k"},MS=["title"],PS={class:"fw-tlog-meta"},FS={key:0},LS={key:1},OS={key:2},IS={class:"fw-tlog-timeline"},VS={class:"fw-tlog-rail"},zS={key:0,class:"fw-tlog-line"},jS={class:"fw-tlog-ct"},BS={class:"fw-tlog-brow"},US={class:"fw-tlog-time"},HS={class:"fw-tlog-dur-tip"},WS={class:"fw-tlog-btext"},GS={key:0,class:"fw-tlog-bnote"},Za=340,Nc=11,Vo=8,qS=vt({__name:"BgTaskPanel",setup(t){const{t:e}=Ft(),n=I(()=>Kn.open.value),a=I(()=>Kn.state.list),r=I(()=>Kn.state.history),d=I(()=>a.value.filter(pe=>pe.status==="running")),h=I(()=>d.value.length),u=I(()=>r.value.length>0),p=g(null),w=g(!1),b=g(null),k=gt({width:Za,left:0,bottom:0,maxH:360,arrow:Za/2}),F=I(()=>({width:`${k.width}px`,left:`${k.left}px`,bottom:`${k.bottom}px`})),L=I(()=>({maxHeight:`${k.maxH}px`})),D=I(()=>({left:`${k.arrow}px`}));function z(){const pe=b.value;if(!pe)return;const Ce=pe.getBoundingClientRect(),qe=window.innerWidth,ce=window.innerHeight,Ve=Ce.left+Ce.width/2,rt=Math.min(Za,Math.max(qe-Vo*2,200)),yt=Math.max(qe-rt-Vo,Vo),dt=Ve<qe/2?Ce.left-2:Ve-rt/2,it=Math.min(Math.max(dt,Vo),yt);k.width=Math.round(rt),k.left=Math.round(it),k.bottom=Math.round(ce-Ce.top+Nc),k.maxH=Math.max(140,Math.min(Ce.top-Nc-Vo,Math.round(ce*.6))),k.arrow=Math.round(Math.min(Math.max(Ve-it,16),rt-16))}Je(n,pe=>{pe&&(z(),Nt(z))});const H=g(!1),C=g(null),Z=I(()=>Kn.state.archives),G=I(()=>Object.keys(Z.value).sort((pe,Ce)=>pe<Ce?1:-1).map(pe=>({date:pe,count:Z.value[pe].length}))),R=I(()=>{const pe=C.value;return[...pe&&Z.value[pe]?Z.value[pe]:[]].sort((qe,ce)=>(ce.doneAt??ce.startedAt)-(qe.doneAt??qe.startedAt))});function ue(){G.value.length&&(C.value=G.value[0].date,H.value=!0)}function V(pe){Kn.setOpen(pe)}function he(){Kn.clearFinished()}function _e(){Kn.clearAll()}function ge(pe){const Ce=pe.logs,qe=Ce&&Ce.length?Ce:[{time:pe.startedAt,status:"running",msg:pe.label,file:pe.detail},{time:pe.doneAt??Date.now(),status:pe.status,msg:pe.msg??"",file:pe.detail}];p.value={label:pe.label,fileTarget:pe.detail,status:pe.status,startedAt:pe.startedAt,doneAt:pe.doneAt,msg:pe.msg,logs:qe},w.value=!0}function ne(pe,Ce){let qe=Ce;return pe.map(ce=>{const Ve=ce.time-qe>0?ce.time-qe:0;return qe=ce.time,{time:ce.time,status:ce.status,title:ce.msg,file:ce.file,detail:ce.detail,durMs:Ve}})}function ae(pe){let Ce=0,qe=0;const ce=new Set;for(const Ve of pe)Ve.fileType&&(ce.add(Ve.fileType),Ce+=1,Ve.fileSize!==void 0&&(qe+=Ve.fileSize));return{count:Ce,size:qe,types:[...ce]}}const Te=I(()=>p.value?ae(p.value.logs):{count:0,size:0,types:[]}),je=I(()=>J.value?ae(W(J.value)):{count:0,size:0,types:[]}),be=I(()=>p.value?ne(p.value.logs,p.value.startedAt):[]),Ae=I(()=>{const pe=p.value;if(!pe)return null;if(pe.doneAt)return pe.doneAt-pe.startedAt;const Ce=be.value[be.value.length-1];return Ce?Ce.time-pe.startedAt:0});function W(pe){return pe.logs&&pe.logs.length?pe.logs:[{time:pe.startedAt,status:"running",msg:pe.label,file:pe.detail},{time:pe.doneAt??Date.now(),status:pe.status,msg:pe.msg??"",file:pe.detail}]}const J=g(null),B=I(()=>J.value?ne(W(J.value),J.value.startedAt):[]),ee=I(()=>{const pe=J.value;if(!pe)return null;if(pe.doneAt)return pe.doneAt-pe.startedAt;const Ce=B.value[B.value.length-1];return Ce?Ce.time-pe.startedAt:0});function ye(){J.value=null}function ze(pe){J.value=pe}function Ke(pe){const Ce=new Date(pe),qe=ce=>String(ce).padStart(2,"0");return`${qe(Ce.getHours())}:${qe(Ce.getMinutes())}:${qe(Ce.getSeconds())}`}function Ze(pe){const Ce=new Date(pe),qe=ce=>String(ce).padStart(2,"0");return`${Ce.getFullYear()}-${qe(Ce.getMonth()+1)}-${qe(Ce.getDate())} ${Ke(pe)}`}function we(pe){if(pe==null)return"—";if(pe<0&&(pe=0),pe<1e3)return`${pe}ms`;const Ce=pe/1e3;if(Ce<60)return`${Ce.toFixed(1)}s`;const qe=Math.floor(Ce/60),ce=Math.round(Ce-qe*60);return`${qe}m ${String(ce).padStart(2,"0")}s`}function ke(pe){return e(pe==="done"?"taskStatusDone":pe==="error"?"taskStatusError":"taskStatusRunning")}function Ye(pe){let Ce=pe.title??"";return pe.file&&(Ce=Ce?`${Ce}：${pe.file}`:pe.file),Ce}cn(()=>{Kn.initTaskLogs(),document.addEventListener("mousedown",st),window.addEventListener("resize",z),window.addEventListener("scroll",z,!0)}),Mt(()=>{document.removeEventListener("mousedown",st),window.removeEventListener("resize",z),window.removeEventListener("scroll",z,!0)});function st(pe){pe.target?.closest?.(".fw-bg-task-fab, .fw-bg-task-panel")||Kn.setOpen(!1)}return(pe,Ce)=>{const qe=dn;return l(),c(ie,null,[o("button",{ref_key:"fabRef",ref:b,class:te(["fw-bg-task-fab",{active:n.value}]),title:s(e)("taskFabTitle"),onClick:Ce[0]||(Ce[0]=ce=>V(!n.value))},[m(se,{name:"tasks",size:14}),h.value?(l(),c("span",bC,i(h.value),1)):M("",!0)],10,wC),m(Of,{name:"fw-bg-task-pop"},{default:oe(()=>[n.value?(l(),c("div",{key:0,class:"fw-bg-task-wrap",style:kt(F.value)},[o("div",{class:"fw-bg-task-panel",style:kt(L.value)},[o("div",kC,[o("span",xC,i(s(e)("taskPanelTitle")),1),o("div",_C,[o("button",{class:"fw-bg-task-link",disabled:!G.value.length,onClick:ue},i(s(e)("taskArchiveOpen")),9,CC),o("button",{class:"fw-bg-task-link",disabled:!u.value,onClick:he},i(s(e)("taskClearFinished")),9,SC),o("button",{class:"fw-bg-task-link",disabled:!a.value.length,onClick:_e},i(s(e)("taskClearAll")),9,$C),o("button",{class:"fw-bg-task-close",title:s(e)("taskClose"),onClick:Ce[1]||(Ce[1]=ce=>V(!1))},"✕",8,TC)])]),d.value.length?(l(),c("div",EC,[o("div",NC,i(s(e)("taskRunning")),1),(l(!0),c(ie,null,Pe(d.value,ce=>(l(),c("div",{key:ce.id,class:"fw-bg-task-row",onClick:Ve=>ge(ce)},[Ce[4]||(Ce[4]=o("span",{class:"fw-bg-task-spin"},null,-1)),o("span",RC,i(ce.label),1),ce.detail?(l(),c("span",AC,i(ce.detail),1)):M("",!0),o("span",MC,i(s(e)("taskViewLog")),1)],8,DC))),128))])):M("",!0),r.value.length?(l(),c("div",PC,[o("div",FC,i(s(e)("taskHistory")),1),(l(!0),c(ie,null,Pe(r.value,(ce,Ve)=>(l(),c("div",{key:ce.startedAt+"-"+Ve,class:te(["fw-bg-task-row",ce.status]),onClick:rt=>ge(ce)},[o("span",OC,[m(se,{name:ce.status==="done"?"check":"close",size:13},null,8,["name"])]),o("span",IC,i(ce.label),1),ce.detail?(l(),c("span",VC,i(ce.detail),1)):M("",!0),o("span",zC,i(s(e)("taskViewLog")),1)],10,LC))),128))])):M("",!0),!d.value.length&&!r.value.length?(l(),c("div",jC,i(s(e)("taskEmpty")),1)):M("",!0)],4),o("span",{class:"fw-bg-task-arrow",style:kt(D.value)},null,4)],4)):M("",!0)]),_:1}),m(qe,{modelValue:w.value,"onUpdate:modelValue":Ce[2]||(Ce[2]=ce=>w.value=ce),class:"fw-clone-dialog fw-tasklog-dialog",width:"580px","align-center":"","modal-class":"fw-blur-overlay","close-on-click-modal":!1,"modal-append-to-body":!1,"append-to-body":!1},{header:oe(()=>[o("div",BC,[o("span",UC,[m(se,{name:"tasks",size:20})]),o("span",HC,[o("span",WC,i(s(e)("taskLogTitle")),1),o("span",GC,i(p.value?.label),1)])])]),default:oe(()=>[p.value?(l(),c(ie,{key:0},[o("div",qC,[o("div",KC,i(p.value.label),1),p.value.fileTarget?(l(),c("div",XC,[o("span",YC,i(s(e)("taskFieldTarget")),1),o("span",{class:"fw-tlog-path",title:p.value.fileTarget},i(p.value.fileTarget),9,JC)])):M("",!0),o("div",QC,[o("span",{class:te(["fw-tlog-st-head",p.value.status])},i(ke(p.value.status)),3),o("span",null,i(s(e)("taskStartTime"))+" "+i(Ze(p.value.startedAt)),1),p.value.doneAt?(l(),c("span",ZC,i(s(e)("taskEndTime"))+" "+i(Ze(p.value.doneAt)),1)):M("",!0),o("span",null,i(s(e)("taskTotalSpent"))+" "+i(we(Ae.value)),1),Te.value.types.length?(l(),c("span",eS,i(s(e)("taskFieldType"))+"："+i(Te.value.types.join("、")),1)):M("",!0),Te.value.count?(l(),c("span",tS,i(s(e)("taskMetaFiles",{count:Te.value.count,size:s(Tc)(Te.value.size)})),1)):M("",!0)])]),o("div",nS,[(l(!0),c(ie,null,Pe(be.value,(ce,Ve)=>(l(),c("div",{key:Ve,class:"fw-tlog-step"},[o("div",sS,[o("span",{class:te(["fw-tlog-dot",ce.status])},null,2),Ve<be.value.length-1?(l(),c("span",oS)):M("",!0)]),o("div",iS,[o("div",{class:te(["fw-tlog-bubble",ce.status])},[o("div",aS,[o("span",lS,i(Ke(ce.time)),1),o("span",{class:te(["fw-tlog-st",ce.status])},i(ke(ce.status)),3),o("span",rS,[Ve!==0?(l(),c(ie,{key:0},[de(i(s(e)("taskStepSpent"))+" ",1),o("b",null,i(we(ce.durMs)),1)],64)):M("",!0)])]),o("div",cS,i(Ye(ce)),1),ce.detail&&ce.detail!==ce.file?(l(),c("div",dS,i(ce.detail),1)):M("",!0)],2)])]))),128))])],64)):M("",!0)]),_:1},8,["modelValue"]),m(qe,{modelValue:H.value,"onUpdate:modelValue":Ce[3]||(Ce[3]=ce=>H.value=ce),class:"fw-clone-dialog fw-taskarc-dialog",width:"880px","align-center":"","modal-class":"fw-blur-overlay","close-on-click-modal":!1,"modal-append-to-body":!1,"append-to-body":!1},{header:oe(()=>[o("div",uS,[o("span",fS,[m(se,{name:"archive",size:20})]),o("span",pS,[o("span",hS,i(s(e)("taskArchiveTitle")),1),o("span",vS,i(C.value??s(e)("taskArchiveOpen")),1)])])]),default:oe(()=>[o("div",mS,[o("div",gS,[(l(!0),c(ie,null,Pe(G.value,ce=>(l(),c("button",{key:ce.date,class:te(["fw-taskarc-date",{active:C.value===ce.date}]),onClick:Ve=>{C.value=ce.date,ye()}},[o("span",null,i(ce.date),1),o("span",wS,i(s(e)("taskArchiveRecords",{count:ce.count})),1)],10,yS))),128))]),o("div",bS,[R.value.length?M("",!0):(l(),c("div",kS,i(s(e)("taskArchiveNone")),1)),(l(!0),c(ie,null,Pe(R.value,(ce,Ve)=>(l(),c("div",{key:ce.startedAt+"-"+Ve,class:te(["fw-taskarc-row",{[ce.status]:!0,active:J.value===ce}]),onClick:rt=>ze(ce)},[o("span",_S,[m(se,{name:ce.status==="done"?"check":"close",size:13},null,8,["name"])]),o("span",CS,i(ce.label),1),ce.detail?(l(),c("span",SS,i(ce.detail),1)):M("",!0),o("span",$S,i(Ze(ce.startedAt)),1)],10,xS))),128))]),o("div",TS,[J.value?(l(),c(ie,{key:1},[o("div",NS,[o("div",DS,i(J.value.label),1),J.value.detail?(l(),c("div",RS,[o("span",AS,i(s(e)("taskFieldTarget")),1),o("span",{class:"fw-tlog-path",title:J.value.detail},i(J.value.detail),9,MS)])):M("",!0),o("div",PS,[o("span",{class:te(["fw-tlog-st-head",J.value.status])},i(ke(J.value.status)),3),o("span",null,i(s(e)("taskStartTime"))+" "+i(Ze(J.value.startedAt)),1),J.value.doneAt?(l(),c("span",FS,i(s(e)("taskEndTime"))+" "+i(Ze(J.value.doneAt)),1)):M("",!0),o("span",null,i(s(e)("taskTotalSpent"))+" "+i(we(ee.value)),1),je.value.types.length?(l(),c("span",LS,i(s(e)("taskFieldType"))+"："+i(je.value.types.join("、")),1)):M("",!0),je.value.count?(l(),c("span",OS,i(s(e)("taskMetaFiles",{count:je.value.count,size:s(Tc)(je.value.size)})),1)):M("",!0)])]),o("div",IS,[(l(!0),c(ie,null,Pe(B.value,(ce,Ve)=>(l(),c("div",{key:Ve,class:"fw-tlog-step"},[o("div",VS,[o("span",{class:te(["fw-tlog-dot",ce.status])},null,2),Ve<B.value.length-1?(l(),c("span",zS)):M("",!0)]),o("div",jS,[o("div",{class:te(["fw-tlog-bubble",ce.status])},[o("div",BS,[o("span",US,i(Ke(ce.time)),1),o("span",{class:te(["fw-tlog-st",ce.status])},i(ke(ce.status)),3),o("span",HS,[Ve!==0?(l(),c(ie,{key:0},[de(i(s(e)("taskStepSpent"))+" ",1),o("b",null,i(we(ce.durMs)),1)],64)):M("",!0)])]),o("div",WS,i(Ye(ce)),1),ce.detail&&ce.detail!==ce.file?(l(),c("div",GS,i(ce.detail),1)):M("",!0)],2)])]))),128))])],64)):(l(),c("div",ES,i(s(e)("taskArchiveNone")),1))])])]),_:1},8,["modelValue"])],64)}}}),KS=_t(qS,[["__scopeId","data-v-516f499d"]]),XS={key:0,class:"fw-status-progress","aria-hidden":"true"},YS={class:"fw-status-tasks"},JS=["title"],QS=["inert"],ZS={key:0,class:"fw-status-busy"},e$={class:"fw-status-busy-txt"},t$={key:1,class:"fw-status-info"},n$={key:0},s$={key:1,class:"fw-status-sub"},o$={key:2},i$={key:3},a$=["inert"],l$=["title","onClick"],r$=vt({__name:"StatusBar",props:{chromeDisabled:{type:Boolean}},setup(t){const{t:e}=Ft(),n=t,a=I(()=>n.chromeDisabled??!1),r=g(null),{cmOpen:d,cmX:h,cmY:u,openMenuAt:p}=hn();function w(){const C=r.value?.getBoundingClientRect();C&&p(C.left,C.top-4)}function b(){return{path:null,projectDir:De.root||null}}const k=I(()=>oa().length>0),F=I(()=>{De.root;const C=b();return oa().map(Z=>({label:Z.text,disabled:!!Z.when&&!Z.when(C),onClick:()=>{try{Ea(Z.commandId,C)}catch(G){Y("error",G.message)}}}))}),L=[{key:"details",icon:"eye",label:"viewDetails"},{key:"list",icon:"sort",label:"viewList"},{key:"large",icon:"grid",label:"viewLarge"}],D=I(()=>Kn.state.list.filter(C=>C.status==="running")),z=I(()=>D.value.length>0||De.search.running||le.loading||le.recycleLoading||le.drivesLoading),H=I(()=>{const C=D.value[0];return C?C.detail?`${C.label} · ${C.detail}`:C.label:De.search.running?e("statusSearching"):le.loading||le.recycleLoading||le.drivesLoading?e("statusLoading"):""});return(C,Z)=>(l(),c("div",{class:te(["fw-statusbar",{busy:z.value}])},[z.value?(l(),c("div",XS)):M("",!0),o("div",YS,[m(KS),k.value?(l(),c("button",{key:0,ref_key:"extMenuBtnRef",ref:r,class:te(["fw-status-seg fw-status-ext-btn",{on:s(d)}]),title:s(e)("vsMenuExtensions"),onClick:w},[m(se,{name:"puzzle",size:13}),o("span",null,i(s(e)("vsMenuExtensions")),1)],10,JS)):M("",!0)]),o("div",{class:te(["fw-status-left",{"chrome-disabled":a.value}]),inert:a.value},[H.value?(l(),c("span",ZS,[Z[1]||(Z[1]=o("span",{class:"fw-status-busy-dot","aria-hidden":"true"},null,-1)),o("span",e$,i(H.value),1)])):s(Rt).visible?(l(),c("span",t$,[o("span",null,i(s(e)("statusItemsCount",{count:s(Rt).total})),1),s(Rt).selected?(l(),c("span",n$,"，"+i(s(e)("selectedCount",{count:s(Rt).selected})),1)):M("",!0),s(Rt).text?(l(),c("span",s$," · "+i(s(Rt).text),1)):M("",!0)])):s(le).view==="computer"?(l(),c("span",o$,i(s(e)("statusDrivesCount",{count:s(le).drives.length})),1)):s(le).view==="recycle"?(l(),c("span",i$,i(s(e)("statusItemsCount",{count:s(le).recycleItems.length})),1)):M("",!0)],10,QS),o("div",{class:te(["fw-status-right",{"chrome-disabled":a.value}]),inert:a.value},[(l(),c(ie,null,Pe(L,G=>xt(o("button",{key:G.key,class:te(["fw-vs-btn",{on:s(Rt).view===G.key}]),title:s(e)(G.label),onClick:R=>s(y1)(G.key)},[m(se,{name:G.icon,size:13},null,8,["name"])],10,l$),[[bo,s(Rt).canSwitchView]])),64))],10,a$),s(d)?(l(),Xe(Zt,{key:1,items:F.value,x:s(h),y:s(u),placement:"top",onClose:Z[0]||(Z[0]=G=>d.value=!1)},null,8,["items","x","y"])):M("",!0)],2))}}),c$=_t(r$,[["__scopeId","data-v-69ee25ba"]]),d$=["aria-disabled","inert"],u$={class:"fw-exp-left-main"},f$=["aria-valuenow"],p$={class:"fw-exp-right"},h$={class:"fw-explorer-statusbar-shell"},el="dsh-file-workbench.activeExternalView",v$=640,m$=780,g$=680,y$=vt({__name:"ExplorerPane",setup(t){const e=g(null),n=g(!1),a=br(e),r=I(Qm);function d(){try{return localStorage.getItem(el)??"files"}catch{return"files"}}const h=g(d()),u=g(!1),p=g(null),w=new Set,b=new Set,k={apiVersion:Ss,get projectDir(){return De.root||null},get theme(){return a.value},activeFile:null,onProjectChange(ne){return w.add(ne),ne(De.root||null),()=>w.delete(ne)},onThemeChange(ne){return b.add(ne),ne(a.value),()=>b.delete(ne)},onDidChangeActiveFile(ne){return ne(null),()=>{}},openFile:async ne=>{await fi(ne)},listOpenFiles:()=>[],openDiff:()=>Y("info",v("gitDiffEmpty")),toast:Y},F=I(()=>r.value.filter(ne=>!ne.when||ne.when(k))),L=I(()=>F.value.find(ne=>ne.id===h.value));Je(()=>h.value!=="files",ne=>{De.externalViewActive=ne},{immediate:!0});function D(ne){h.value=ne;try{localStorage.setItem(el,ne)}catch{}}function z(){h.value="files";try{localStorage.removeItem(el)}catch{}}Je(()=>De.root,ne=>w.forEach(ae=>ae(ne||null))),Je(a,ne=>b.forEach(ae=>ae(ne))),Ts(ne=>{const ae=L.value,Te=p.value;if(!ae||!Te||ae.when&&!ae.when(k))return;const je=ae.mount(Te,k);sa(Te);const be=new ResizeObserver(()=>sa(Te));be.observe(Te),ne(()=>{if(be.disconnect(),typeof je=="function")try{je()}catch{}Te.replaceChildren()})},{flush:"post"});const H=g(!1),C=g(0),Z=I(()=>C.value>0&&C.value<g$);let G=null;function R(){const ne=e.value?.clientWidth??0;C.value=ne,ne<=v$?H.value=!0:ne>=m$&&(H.value=!1)}const ue=I(()=>!!na.value.trim()),V=I(()=>({width:`calc(${Math.round(Un.explorerSplit*1e3)/10}% - 3px)`}));function he(ne){if(!n.value||!e.value)return;const ae=e.value.getBoundingClientRect();if(ae.width<=0)return;const Te=(ne.clientX-ae.left)/ae.width;Un.explorerSplit=Math.min(.85,Math.max(.15,Te))}function _e(){n.value&&(n.value=!1,document.removeEventListener("mousemove",he),document.removeEventListener("mouseup",_e),document.body.style.userSelect="",document.body.style.cursor="",Vi())}function ge(){n.value=!0,document.addEventListener("mousemove",he),document.addEventListener("mouseup",_e),document.body.style.userSelect="none",document.body.style.cursor="col-resize"}return Mt(()=>{document.removeEventListener("mousemove",he),document.removeEventListener("mouseup",_e),G?.disconnect(),G=null}),cn(()=>{e.value&&(G=new ResizeObserver(()=>R()),G.observe(e.value),R())}),(ne,ae)=>(l(),c("div",{ref_key:"rootRef",ref:e,class:te(["fw-explorer",{"user-slot-active":h.value!=="files"}])},[o("div",{class:te(["fw-explorer-topbar-shell",{"external-view-disabled":h.value!=="files"}]),"aria-disabled":h.value!=="files",inert:h.value!=="files"},[m(yC,{"nav-folded":H.value,compact:Z.value,onUnfoldNav:ae[0]||(ae[0]=Te=>H.value=!1)},null,8,["nav-folded","compact"])],10,d$),o("div",{class:te(["fw-exp-body",{"left-folded":H.value,"user-slot-active":h.value!=="files"}])},[o("div",{class:"fw-exp-left",style:kt(V.value)},[o("div",u$,[m(Gg,{"external-views":F.value,"external-collapsed":u.value,"active-external-id":h.value==="files"?"":h.value,"external-active":h.value!=="files"&&!!L.value,onToggleExternal:ae[1]||(ae[1]=Te=>u.value=!u.value),onSelectExternal:D,onSelectLocal:z},null,8,["external-views","external-collapsed","active-external-id","external-active"])])],4),o("div",{class:te(["fw-exp-split",{dragging:n.value}]),role:"separator","aria-orientation":"vertical","aria-valuenow":Math.round(s(Un).explorerSplit*100),"aria-valuemin":15,"aria-valuemax":85,onMousedown:xe(ge,["prevent"])},null,42,f$),o("div",p$,[L.value?(l(),c("div",{key:0,ref_key:"extHostRef",ref:p,class:"fw-exp-ext-view"},null,512)):(l(),c(ie,{key:1},[ue.value?(l(),Xe(h1,{key:0})):s(le).view==="computer"?(l(),Xe(K2,{key:1})):(l(),Xe(X_,{key:2}))],64))])],2),o("div",h$,[m(c$,{"chrome-disabled":h.value!=="files"},null,8,["chrome-disabled"])])],2))}}),w$=_t(y$,[["__scopeId","data-v-e000b320"]]),b$={class:"fw-navpath"},k$=["title"],x$={class:"fw-crumb last"},_$=["title"],C$=["onKeydown"],S$={key:0,class:"fw-crumb-sep"},$$=["title","onClick"],T$={key:2,class:"fw-path"},E$=vt({__name:"NavPathBar",setup(t){const{t:e}=Ft(),n=I(()=>Dl.value||De.root||""),a=I(()=>le.view==="computer"?e("navThisPc"):le.view==="recycle"?e("recycleBin"):""),r=I(()=>le.view==="computer"?"monitor":"trash"),d=I(()=>n.value.startsWith("ssh://")),h=I(()=>{const D=n.value;if(!D)return[];const z=qd(D);if(z)return z;const H=D.replace(/\\/g,"/").split("/").filter(G=>G.length>0),C=[];let Z="";return H.forEach((G,R)=>{const ue=/^[A-Za-z]:$/.test(G);Z=R===0?ue?G+"/":"/"+G:Z.replace(/[\\/]+$/,"")+"/"+G,C.push({name:G,path:Z})}),C});function u(D){jt(D)}const p=g(!1),w=g(""),b=g(null);function k(){w.value=n.value,p.value=!0,Nt(()=>{b.value?.focus(),b.value?.select()})}function F(){const D=w.value.trim();p.value=!1,D&&D!==n.value&&jt(D).catch(z=>Y("error",z.message))}function L(){p.value=!1}return(D,z)=>(l(),c("div",b$,[a.value?(l(),c("span",{key:0,class:"fw-path fw-crumbs fw-path-static",title:a.value},[m(se,{name:r.value,size:14,class:"fw-path-static-ico"},null,8,["name"]),o("span",x$,i(a.value),1)],8,k$)):n.value?(l(),c("span",{key:1,class:te(["fw-path",{"fw-crumbs":!p.value,editing:p.value}]),title:n.value,onClick:k},[p.value?xt((l(),c("input",{key:0,ref_key:"pathInputRef",ref:b,"onUpdate:modelValue":z[0]||(z[0]=H=>w.value=H),class:"fw-path-input",spellcheck:"false",onKeydown:[bt(xe(F,["prevent"]),["enter"]),bt(xe(L,["prevent"]),["esc"])],onBlur:L},null,40,C$)),[[Ot,w.value]]):(l(!0),c(ie,{key:1},Pe(h.value,(H,C)=>(l(),c(ie,{key:C},[C>0?(l(),c("span",S$,i(d.value?"/":"\\"),1)):M("",!0),o("button",{class:te(["fw-crumb",{last:C===h.value.length-1}]),title:H.path,onClick:xe(Z=>u(H.path),["stop"])},i(H.name),11,$$)],64))),128))],10,_$)):(l(),c("span",T$,i(s(e)("noFolder")),1))]))}}),N$=_t(E$,[["__scopeId","data-v-7f7f6ad1"]]),D$=["aria-disabled","inert"],R$={class:"fw-right"},A$=640,M$=vt({__name:"WinMenuBar",props:{externalViewActive:{type:Boolean}},emits:["open-settings"],setup(t,{emit:e}){const n=e,{t:a}=Ft(),r=g(null),d=g(!1);let h=null;cn(()=>{r.value&&(h=new ResizeObserver(()=>{d.value=(r.value?.clientWidth??0)<A$}),h.observe(r.value))}),Mt(()=>{h?.disconnect(),h=null});const u=g(!1);let p;function w(){Dt(),u.value=!0,p&&clearTimeout(p),p=setTimeout(()=>u.value=!1,650)}const b=I(()=>le.loading||u.value);function k(){tu()}function F(){nu()}const L=I({get:()=>na.value,set:Z=>Ni(Z)});let D;const z=I(()=>_a(Dl.value)?Dl.value:De.root||"");function H(){D&&clearTimeout(D);const Z=L.value;if(!Z.trim()){Ni(""),go("").catch(G=>Y("error",G.message));return}D=setTimeout(()=>{Ni(Z),go(Z,z.value).catch(G=>Y("error",G.message))},350)}function C(){L.value="",Ni(""),go("")}return Je(na,Z=>{!Z&&L.value&&(L.value="")}),(Z,G)=>{const R=Fn,ue=Es;return l(),c("header",{ref_key:"toolbarRef",ref:r,class:te(["fw-toolbar",{"external-view-disabled":t.externalViewActive}]),"aria-disabled":t.externalViewActive,inert:t.externalViewActive},[xt(m(R,{text:"",size:"small",title:s(a)("goBack"),disabled:!s(Gv),onClick:k},{default:oe(()=>[m(se,{name:"arrowLeft",size:16})]),_:1},8,["title","disabled"]),[[bo,!d.value]]),xt(m(R,{text:"",size:"small",title:s(a)("goForward"),disabled:!s(qv),onClick:F},{default:oe(()=>[m(se,{name:"arrowRight",size:16})]),_:1},8,["title","disabled"]),[[bo,!d.value]]),m(R,{text:"",size:"small",title:s(a)("goUp"),disabled:!s(Kv),onClick:s(Nl)},{default:oe(()=>[m(se,{name:"up",size:16})]),_:1},8,["title","disabled","onClick"]),m(R,{text:"",size:"small",title:s(a)("goSessionDir"),onClick:s(ou)},{default:oe(()=>[m(se,{name:"compass",size:16})]),_:1},8,["title","onClick"]),m(R,{text:"",size:"small",title:s(a)("refreshList"),onClick:w},{default:oe(()=>[m(se,{name:"refresh",class:te(["fw-refresh-ic",{spinning:b.value}]),size:15},null,8,["class"])]),_:1},8,["title"]),m(R,{text:"",size:"small",title:s(a)("settings"),onClick:G[0]||(G[0]=V=>n("open-settings"))},{default:oe(()=>[m(se,{name:"gear",size:16})]),_:1},8,["title"]),m(N$),o("div",R$,[m(ue,{modelValue:L.value,"onUpdate:modelValue":G[1]||(G[1]=V=>L.value=V),class:"fw-search-input",size:"small",clearable:"",placeholder:s(a)("searchPlaceholder"),onInput:H,onClear:C},{prefix:oe(()=>[m(se,{name:"search",size:14,class:"fw-search-ico"})]),_:1},8,["modelValue","placeholder"])])],10,D$)}}}),P$=_t(M$,[["__scopeId","data-v-ccd8c5b0"]]),F$={class:"fw-shortcut"},L$={class:"fw-shortcut-head"},O$={class:"fw-shortcut-title"},I$=["title"],V$={class:"fw-shortcut-body"},z$={class:"fw-shortcut-group-title"},j$={class:"fw-shortcut-keys"},B$={class:"fw-shortcut-desc"},U$={class:"fw-shortcut-foot"},H$=vt({__name:"ShortcutHelpDialog",setup(t,{expose:e}){const{t:n}=Ft(),a=g(!1),r=I(()=>[{title:n("shortcutGlobal"),items:[{keys:["?"],label:n("shGlobalHelp")}]},{title:n("shortcutFileList"),items:[{keys:["Ctrl","A"],label:n("shListSelectAll")},{keys:["Ctrl","C"],label:n("shListCopy")},{keys:["Ctrl","X"],label:n("shListCut")},{keys:["Ctrl","V"],label:n("shListPaste")},{keys:["Ctrl","F"],label:n("shListFilter")},{keys:["Ctrl","Shift","N"],label:n("shListNewFolder")},{keys:["Delete"],label:n("shListDelete")},{keys:["F2"],label:n("shListRename")},{keys:["F5"],label:n("shListRefresh")},{keys:["Enter"],label:n("shListOpen")},{keys:["↑","↓","Home","End"],label:n("shListMove")},{keys:["Backspace"],label:n("shListUp")},{keys:["Alt","←"],label:n("shListBack")},{keys:["Alt","→"],label:n("shListForward")}]}]);Je(a,u=>{u?window.addEventListener("keydown",d):window.removeEventListener("keydown",d)});function d(u){u.key==="Escape"&&h()}function h(){a.value=!1}return e({open:()=>a.value=!0}),(u,p)=>(l(),Xe(ed,{to:"body"},[a.value?(l(),c("div",{key:0,class:"fw-shortcut-mask",onMousedown:xe(h,["self"])},[o("div",F$,[o("div",L$,[o("span",O$,i(s(n)("shortcutHelp")),1),o("span",{class:"fw-shortcut-close",title:s(n)("closeTab"),onClick:h},"✕",8,I$)]),o("div",V$,[(l(!0),c(ie,null,Pe(r.value,w=>(l(),c("section",{key:w.title,class:"fw-shortcut-group"},[o("h4",z$,i(w.title),1),(l(!0),c(ie,null,Pe(w.items,b=>(l(),c("div",{key:b.keys.join(),class:"fw-shortcut-row"},[o("span",j$,[(l(!0),c(ie,null,Pe(b.keys,k=>(l(),c("kbd",{key:k,class:"fw-shortcut-kbd"},i(k),1))),128))]),o("span",B$,i(b.label),1)]))),128))]))),128))]),o("div",U$,i(s(n)("shortcutHint")),1)])],32)):M("",!0)]))}}),W$=_t(H$,[["__scopeId","data-v-f4ba30d1"]]),G$={class:"fw-body"},q$=vt({__name:"App",setup(t){const e=g(null);br(e);const n=I(()=>{const h=(Ue.fontFamily??"").trim(),u=h&&h!=="default"?h:"",p=Ue.fontSize??13;return{fontFamily:u?`${u}, var(--dsh-font, "Segoe UI", system-ui, sans-serif)`:void 0,fontSize:`${p}px`,"--dsh-fs-scale":String(p/13)}});Ts(()=>{const h=Ue.fontSize??13;document.documentElement.style.setProperty("--dsh-fs-scale",String(h/13))});const a=g(null),r=g(null);cn(async()=>{try{await Wv()}catch{}await Jd(),vr(),Jv()&&(await ou()||await su()),window.addEventListener("keydown",d)}),Mt(()=>{window.removeEventListener("keydown",d)});function d(h){if(!h.ctrlKey&&!h.metaKey&&!h.altKey&&h.key==="?"){if(h.target?.closest("input, textarea, select, [contenteditable='true'], .el-input, .el-textarea"))return;h.preventDefault(),r.value?.open()}}return(h,u)=>(l(),c("div",{ref_key:"rootEl",ref:e,class:"fw-root",style:kt(n.value)},[m(P$,{"external-view-active":s(De).externalViewActive,onOpenSettings:u[0]||(u[0]=p=>a.value?.open())},null,8,["external-view-active"]),o("div",G$,[m(w$)]),m(xv,{ref_key:"settingsRef",ref:a},null,512),m(ad),m(W$,{ref_key:"shortcutRef",ref:r},null,512)],4))}}),K$=_t(q$,[["__scopeId","data-v-4a279056"]]);function Ou(){return{projectDir:null,recentProjects:[],openTabs:[],activeTab:null,expanded:[],expandedSeeded:[],split:.26,termHeight:260,treeScroll:0,views:{},activityBar:{position:"top",hidden:[]},sidebarSide:"left"}}const ci=10,Dc=8;function X$(t){return t<=1?"vscode":`vscode-${t}`}let Bn={version:2,recents:[],slots:{}},tl=null,ls=[];function Y$(t){return Array.isArray(t)?[...new Set(t.filter(e=>typeof e=="string"&&e!==""))].slice(0,ci):[]}function J$(t){if(!t||typeof t!="object")return null;const e=t,n={};return typeof e.scrollTop=="number"&&Number.isFinite(e.scrollTop)&&e.scrollTop>=0&&(n.scrollTop=e.scrollTop),typeof e.anchor=="number"&&Number.isFinite(e.anchor)&&e.anchor>=0&&(n.anchor=e.anchor),n.scrollTop===void 0&&n.anchor===void 0?null:n}function Rc(t){const e=Ou();if(typeof t.projectDir=="string"&&(e.projectDir=t.projectDir),Array.isArray(t.recentProjects)&&(e.recentProjects=[...new Set(t.recentProjects.filter(n=>typeof n=="string"&&n!==""))].slice(0,ci)),Array.isArray(t.openTabs)&&(e.openTabs=t.openTabs.filter(n=>typeof n=="string")),typeof t.activeTab=="string"&&(e.activeTab=t.activeTab),Array.isArray(t.expanded)&&(e.expanded=t.expanded.filter(n=>typeof n=="string")),Array.isArray(t.expandedSeeded)&&(e.expandedSeeded=t.expandedSeeded.filter(n=>typeof n=="string")),typeof t.split=="number"&&t.split>.1&&t.split<.9&&(e.split=t.split),typeof t.termHeight=="number"&&Number.isFinite(t.termHeight)&&t.termHeight>=100&&(e.termHeight=Math.min(1200,t.termHeight)),typeof t.treeScroll=="number"&&Number.isFinite(t.treeScroll)&&t.treeScroll>=0&&(e.treeScroll=t.treeScroll),t.activityBar&&typeof t.activityBar=="object"&&(t.activityBar.position==="top"||t.activityBar.position==="bottom")){const n=t.activityBar;e.activityBar.position=n.position,Array.isArray(n.hidden)&&(e.activityBar.hidden=n.hidden.filter(a=>typeof a=="string"&&a!==""))}if((t.sidebarSide==="left"||t.sidebarSide==="right")&&(e.sidebarSide=t.sidebarSide),t.views&&typeof t.views=="object"){const n={};for(const[a,r]of Object.entries(t.views)){const d=J$(r);d&&(n[a]=d)}e.views=n}return e.activeTab&&!e.openTabs.includes(e.activeTab)&&(e.activeTab=e.openTabs[0]??null),e}function Q$(t){if(!t||typeof t!="object")return{version:2,recents:[],slots:{}};const e=t;if(e.version===2&&e.slots&&typeof e.slots=="object"){const n={};for(const[r,d]of Object.entries(e.slots))d&&typeof d=="object"&&(n[r]=Rc(d));let a;if(e.recents===void 0){const r=[];for(const d of Object.keys(n).sort((h,u)=>Number(h)-Number(u)))for(const h of n[d]?.recentProjects??[])r.includes(h)||r.push(h);a=r.slice(0,ci)}else a=Y$(e.recents);for(const r of Object.values(n))r.recentProjects=[...a];return{version:2,recents:a,slots:n}}if(typeof e.projectDir=="string"||Array.isArray(e.openTabs)){const n=Rc(e);return{version:2,recents:[...n.recentProjects],slots:{1:n}}}return{version:2,recents:[],slots:{}}}function Z$(){return tl||(tl=(async()=>{const t=await kd().catch(()=>null);Bn=Q$(t?.vscode)})()),tl}const zl=new Map,ji=new Map;function Ai(t){ls=[...t];for(const e of zl.values())e.state.recentProjects=[...ls]}function Iu(t){const e=t||"@default",n=ji.get(e);if(n!==void 0)return n;const a=new Set(ji.values());let r=1;for(;a.has(r);)r++;return ji.set(e,r),r}function Er(t){let e=zl.get(t);return e||(e=lT(t),zl.set(t,e)),e}const ra=new Map;function Vu(t){let e=ra.get(t);return e||(e=new Map,ra.set(t,e)),e}function nl(t,e){ra.get(t)?.delete(e)}function eT(t){ra.delete(t)}const jl=new Map;function Ac(t,e){e?jl.set(t,e):jl.delete(t)}function tT(t){return jl.get(t)}const Bl=new Map;function Mi(t,e){e?Bl.set(t,e):Bl.delete(t)}function nT(t){return Bl.get(t)}const Ul=new Map,Hl=new Map;function sT(t,e){let n=Ul.get(t);return n||(n=new Set,Ul.set(t,n)),n.add(e),()=>{n?.delete(e)}}function oT(t,e){let n=Hl.get(t);return n||(n=new Set,Hl.set(t,n)),n.add(e),()=>{n?.delete(e)}}function iT(t,e,n){Ul.get(t)?.forEach(a=>a(e,n))}function aT(t,e){Hl.get(t)?.forEach(n=>n(e))}const Ma=Symbol("dsh-file-workbench/vscode-store");function lT(t){const e=gt(Ou()),n=g(!1),a=g(null);let r=null,d=null,h=null,u=!1,p=null,w=0;const b={};let k={};function F(){const G=Object.keys(Bn.slots).map(Number).filter(R=>Number.isFinite(R)&&R!==t).sort((R,ue)=>R-ue);for(const R of G){const ue=Bn.slots[String(R)]?.projectDir;if(ue)return ue}return null}function L(){const G=Object.keys(Bn.slots);if(G.length<=Dc)return;const R=new Set([...ji.values()].map(String));R.add(String(t));const ue=G.filter(V=>!R.has(V)).sort((V,he)=>Number(V)-Number(he));for(const V of ue.slice(0,G.length-Dc))delete Bn.slots[V]}function D(){for(const G of Object.values(Bn.slots))G.recentProjects=[...ls];Bn.slots[String(t)]={...e,recentProjects:[...ls],views:{...e.views,...b}},Bn.recents=[...ls],L(),Zs("vscode",Bn)}function z(){p===null&&(p=setTimeout(()=>{p=null,D()},400))}function H(G){const R=G.trim();R&&(Ai([R,...ls.filter(ue=>ue!==R)].slice(0,ci)),z())}function C(G){Ai(ls.filter(R=>R!==G)),D()}function Z(){Ai([]),D()}return{slot:t,rootKey:X$(t),state:e,ready:n,projectRequest:a,get tabId(){return r},get panelId(){return d},bindTab(G,R){r=G,d=R},markFresh(){u=!0},init(){return h||(h=(async()=>{if(await Z$().catch(()=>{}),ls=[...Bn.recents],!u){const G=Bn.slots[String(t)];if(G)Object.assign(e,G,{views:{...G.views}});else if(!e.projectDir){const R=F();R&&(e.projectDir=R)}}Ai([...new Set([...ls,...e.recentProjects])].slice(0,ci))})()),h},persist:D,persistSoon:z,rememberProject:H,forgetProject:C,clearRecentProjects:Z,fileViewOf(G){return G?b[G]??e.views[G]??{}:{}},rememberFileView(G,R){if(!G)return;const ue=b[G];ue&&ue.scrollTop===R.scrollTop&&ue.anchor===R.anchor||(b[G]={...R},z())},stashOpenBuffers(G){k={};for(const[R,ue]of Object.entries(G))k[R]={...ue}},takeStashedBuffers(){const G=k;return k={},G},requestOpenProject(G){const R=G?.trim();R&&(a.value={dir:R,n:++w})}}}function Nr(){return Er(1)}const rT={key:0,class:"vs-tree-loading"},cT={key:1,class:"vs-tree-empty"},dT=["onClick","onContextmenu","onDragstart","onDragover","onDragleave","onDrop"],uT=["onClick"],fT={key:0},pT=["title"],hT=["title"],vT=["title"],mT={key:2,class:"vs-loading"},gT={class:"vs-diff-body"},Wl=new Map,yT=3e4;function wT(t,e){if(!e)return null;const n=Wl.get(t);return n&&n.root===e?n:null}const Mc=new Set(["node_modules",".git",".svn",".hg","dist","build","out",".next",".nuxt",".cache","coverage","vendor","target",".venv","venv","__pycache__","bin","obj"]),bT=vt({__name:"ProjectTree",props:{root:{},activePath:{}},emits:["open-file","file-removed","file-renamed","project-missing","remove-project"],setup(t,{expose:e,emit:n}){const a=t,r=n,d=tr(Ma)??Nr(),h=d.state,u=d.ready,p=d.rootKey,w=()=>d.persist(),b=()=>d.persistSoon();let k=wT(p,a.root);const F=k?k.nodes:gt({}),L=g(k?k.rootPath:null),D=g(null),z=g(!1);function H(N){const ve=a.root;ve&&(k={root:ve,nodes:F,rootPath:L.value,at:Date.now()},Wl.set(p,k))}function C(){k=null,Wl.delete(p);for(const N of Object.keys(F))delete F[N];L.value=null}let Z=0;const G=3e3;async function R(){const N=a.root;if(!N||!u.value||Date.now()-Z<G)return;Z=Date.now();let ve=!0;try{ve=await pl(N,{silent:!0})}catch{ve=!0}!ve&&a.root===N&&(C(),r("project-missing",N))}function ue(){R()}cn(()=>window.addEventListener("focus",ue)),Mt(()=>window.removeEventListener("focus",ue));function V(){k&&(k.at=Date.now())}const he=I(()=>L.value?F[L.value]??null:null),_e=I(()=>{const N=[],ve=he.value;if(!ve)return N;const Ie=He=>{if(N.push(He),He.expanded)for(const Me of He.children){const Ge=F[Me];Ge&&Ie(Ge)}};return Ie(ve),N});function ge(N,ve,Ie,He,Me){return{path:N,name:ve,isDir:Ie,depth:He,owner:Me,expanded:!1,loaded:!1,loading:!1,children:[]}}function ne(N){return N.replace(/[\\/][^\\/]+$/,"")}function ae(N){if(N.isDir)for(const ve of N.children){const Ie=F[ve];!Ie||!Ie.isDir||!h.expanded.includes(Ie.path)||(Ie.expanded=!0,Ie.loaded?ae(Ie):Te(Ie))}}async function Te(N,ve=!1){if(N=F[N.path]??N,!N.loading){N.loading=!0,xs(N.path),ro(N.path);try{const Me=(await Ii(N.path,p)).entries.filter(Ge=>!Ge.hidden).sort((Ge,Et)=>Number(Et.isDir)-Number(Ge.isDir)||Ge.name.localeCompare(Et.name,"zh"));N.children=[];for(const Ge of Me){const Et=F[Ge.path]??ge(Ge.path,Ge.name,Ge.isDir,N.depth+1,N.path);Et.name=Ge.name,Et.isDir=Ge.isDir,Et.depth=N.depth+1,Et.owner=N.path,F[Ge.path]=Et,N.children.push(Ge.path)}N.loaded=!0,V(),ae(N)}catch(He){if(N.loading=!1,dd(He)){ve||(await new Promise(Me=>setTimeout(Me,150)),await Te(N,!0));return}if(N.depth===0&&He instanceof Xs&&He.status===404){C(),r("project-missing",N.path);return}Y("error",He.message)}finally{N.loading=!1}}}function je(N){N.isDir&&(N.expanded=!N.expanded,Ae(N.path,N.expanded),N.expanded&&(N.loaded?ae(N):Te(N)))}function be(N){N.isDir?je(N):r("open-file",N.path)}function Ae(N,ve,Ie=!0){const He=new Set(h.expanded),Me=He.has(N);ve?He.add(N):He.delete(N),Me!==ve&&(h.expanded=[...He],Ie&&Dn())}const W=1,J=20;async function B(N,ve,Ie){if(!(!N.isDir||ve<=0))for(const He of[...N.children]){if(Ie.n>=J)return;const Me=F[He];!Me||!Me.isDir||Mc.has(Me.name.toLowerCase())||(Ie.n+=1,Me.expanded=!0,Ae(Me.path,!0,!1),Me.loaded?ae(Me):await Te(Me),await B(Me,ve-1,Ie))}}async function ee(N){N.expanded=!0,Ae(N.path,!0,!1),await B(N,W,{n:0}),h.expandedSeeded.includes(N.path)||(h.expandedSeeded=[...h.expandedSeeded,N.path]),Dn()}function ye(){const N=D.value;N&&(h.treeScroll=N.scrollTop,b())}async function ze(){await Nt();const N=D.value;N&&(N.scrollTop=h.treeScroll||0)}let Ke=0;async function Ze(){const N=Ke;for(const ve of _e.value.filter(Ie=>Ie.isDir&&Ie.loaded).map(Ie=>Ie.path)){if(N!==Ke)return;const Ie=F[ve];!Ie||Ie.loading||await Te(Ie)}V()}async function we(){const N=++Ke;a.root&&(z.value=!0);try{if(a.root){let St=!0;try{St=await pl(a.root)}catch{St=!0}if(!St){C(),r("project-missing",a.root);return}}if(k&&a.root&&k.root===a.root&&F[a.root]){L.value=a.root,Date.now()-k.at>yT?Ze():await ze();return}k=null;for(const St of Object.keys(F))delete F[St];if(!a.root){L.value=null;return}try{await or(a.root,p)}catch{}if(N!==Ke)return;const ve=Wt(a.root)?Tl(a.root):a.root.split(/[\\/]/).filter(Boolean).pop()??a.root,Ie=ge(a.root,ve,!0,0,a.root);F[a.root]=Ie,L.value=a.root;const He=F[a.root],Me=a.root.replace(/[\\/]+$/,"").toLowerCase(),Ge=h.expanded.some(St=>{const bn=St.replace(/[\\/]+$/,"").toLowerCase();return bn===Me||bn.startsWith(`${Me}\\`)||bn.startsWith(`${Me}/`)});if(h.expandedSeeded.includes(a.root)&&Ge)He.expanded=h.expanded.includes(a.root),await Te(He);else{if(He.expanded=!0,await Te(He),N!==Ke)return;await ee(He)}if(N!==Ke)return;for(let St=0;St<3&&He.expanded&&He.children.length===0;St+=1){if(await new Promise(bn=>setTimeout(bn,[200,600,1500][St])),N!==Ke)return;He.loaded=!1,await Te(He)}if(N!==Ke)return;await ze(),H()}finally{N===Ke&&(z.value=!1)}}e({rebuild:we,createFileAtRoot:Ds,createFolderAtRoot:En}),Je(()=>[a.root,u.value],()=>{u.value&&we()},{immediate:!0});const ke={"":"",untracked:"?",added:"A",modified:"M",deleted:"D"};function Ye(N){return N.depth===0?"":Nu(N.owner,N.name)}function st(N){return ke[Ye(N)]}function pe(N){const ve=Ye(N);return ve==="untracked"?v("gitBadgeUntracked"):ve==="added"?v("gitBadgeAdded"):ve==="modified"?v("gitBadgeModified"):ve==="deleted"?v("gitBadgeDeleted"):""}function Ce(N){return N.depth===0?"":Du(N.owner,N.name)}function qe(N){return ke[Ce(N)]}function ce(N){const ve=Ce(N);return ve==="untracked"?v("gitBadgeUntracked"):ve==="added"?v("gitBadgeAdded"):ve==="modified"?v("gitBadgeModified"):ve==="deleted"?v("gitBadgeDeleted"):""}const{cmOpen:Ve,cmX:rt,cmY:yt,openMenu:dt}=hn(),it=g(null),Oe=g(!1),U=I(()=>it.value?Oe.value?E(it.value):O(it.value):[]);function P(N,ve){Oe.value=!1,it.value=N;const Ie=Ee(N);xs(Ie),ro(Ie),dt(ve)}function Q(N){const ve=a.root?F[a.root]:void 0;ve&&(Oe.value=!0,it.value=ve,xs(ve.path),ro(ve.path),dt(N))}function Ee(N){return N.owner||N.path}function O(N){const ve=Ee(N),Ie=[];return Ie.push(N.isDir?{label:v("menuOpen"),icon:"folderOpen",onClick:()=>je(N)}:{label:v("menuOpen"),icon:"arrowRight",onClick:()=>r("open-file",N.path)}),Ie.push({separator:!0}),Ie.push({label:v("vsNewFile"),icon:"file",onClick:()=>void un(N)},{label:v("vsNewFolder"),icon:"folder",onClick:()=>void In(N)},{label:v("vsRename"),icon:"edit",onClick:()=>void Gn(N)},{label:v("vsDelete"),icon:"trash",onClick:()=>void Nn(N)}),Ie.push(...Pl(ve,N.path,Be)),Ie.push(...Fl(ve,N.path,Be)),Ie.push({separator:!0},{label:v("menuCopyRelPath"),icon:"link",onClick:()=>void Sn(N.path)},{label:v("menuCopyAbsPath"),icon:"link",onClick:()=>void Bt(N.path)},{label:v("menuOpenTerminal"),icon:"terminal",onClick:()=>ot(N)},{label:v("vsAddToSession"),icon:"sparkle",onClick:()=>ft(N)},{separator:!0},{label:v("vsRefresh"),icon:"refresh",onClick:()=>void yn(N)}),N.depth===0&&(Ie.push({separator:!0}),Ie.push({label:v("vsRemoveProject"),icon:"close",onClick:()=>r("remove-project",N.path)})),Ie}function E(N){const ve=N.path;return[{label:v("vsNewFile"),icon:"file",onClick:()=>void un(N)},{label:v("vsNewFolder"),icon:"folder",onClick:()=>void In(N)},{separator:!0},{label:v("vsExpandAll"),icon:"chevronDown",onClick:()=>void Ne()},{label:v("vsCollapseAll"),icon:"chevronRight",onClick:K},...Pl(ve,ve,Be),...Fl(ve,ve,Be),{separator:!0},{label:v("menuCopyRelPath"),icon:"link",onClick:()=>void Sn(ve)},{label:v("menuCopyAbsPath"),icon:"link",onClick:()=>void Bt(ve)},{label:v("menuOpenTerminal"),icon:"terminal",onClick:()=>ot(N)},{label:v("vsAddToSession"),icon:"sparkle",onClick:()=>ft(N)},{separator:!0},{label:v("vsRefresh"),icon:"refresh",onClick:()=>void yn(N)},{separator:!0},{label:v("vsRemoveProject"),icon:"close",onClick:()=>r("remove-project",N.path)}]}function K(){const N=a.root?F[a.root]:void 0;if(N){for(const ve of Object.values(F))ve.expanded=ve.depth===0;h.expanded=[N.path],h.expandedSeeded=[...new Set([...h.expandedSeeded,N.path])],Dn()}}const $=120;async function q(){const N=a.root?F[a.root]:void 0;if(!N)return!1;let ve=$,Ie=!1;const He=async Me=>{if(ve<=0){Ie=!0;return}ve-=1;const Ge=F[Me];if(Ge?.isDir){Ge.expanded=!0,Ae(Ge.path,!0,!1),Ge.loaded||await Te(Ge);for(const Et of[...Ge.children]){const St=F[Et];if(St?.isDir&&!Mc.has(St.name.toLowerCase())&&(await He(Et),ve<=0)){Ie=!0;return}}}};return await He(N.path),Dn(),Ie}async function Ne(){await q()&&Y("info",v("vsExpandAllLimited",{n:String($)}))}const re=g(!1),ct=g(!1),wt=g(!1),Lt=g(!1),Ln=g(""),Gt=g(""),Be={openGitPanel:()=>{Gt.value=it.value?Ee(it.value):a.root??"",re.value=!0},openSvnPanel:()=>{Gt.value=it.value?Ee(it.value):a.root??"",ct.value=!0},openCommit:()=>{Gt.value=it.value?Ee(it.value):a.root??"",wt.value=!0},showGitDiff:N=>{Ln.value=N,Lt.value=!0},afterMutate:async N=>{await xs(N),await ro(N)}};function Qe(N){re.value=N,N||at()}function et(N){ct.value=N,N||at()}async function at(){Cs("git"),Cs("svn");const N=new Set([...Object.keys(Aa.dirs),...Object.keys(ri.dirs)]);a.root&&N.add(a.root),await Promise.all([...N].flatMap(ve=>[xs(ve),ro(ve)]))}function Cn(N){const ve=(a.root??"").replace(/[\\/]+$/,"");return ve&&N.toLowerCase().startsWith(ve.toLowerCase())?N.slice(ve.length).replace(/^[\\/]+/,""):N}async function Sn(N){const ve=await kc(Cn(N));Y(ve?"ok":"error",v(ve?"menuPathCopied":"menuPathCopyFail"))}async function Bt(N){const ve=await kc(N);Y(ve?"ok":"error",v(ve?"menuPathCopied":"menuPathCopyFail"))}function ot(N){To(N.isDir?N.path:ne(N.path))}function ft(N){(window.__DSH_FILE_WORKBENCH__?.appendSessionReference?.(N.path,N.isDir)??!1)||Y("error",v("vsAddToSessionFail"))}function Ct(N){return N.isDir?N:F[ne(N.path)]??N}let On=null;const $n=g(null);function Jn(N,ve){On=N.path,ve.dataTransfer?.setData("text/plain",N.path),ve.dataTransfer&&(ve.dataTransfer.effectAllowed="move")}function gn(N,ve){!On||On===N.path||(ve.dataTransfer&&(ve.dataTransfer.dropEffect="move"),$n.value=N.isDir?N.path:ne(N.path))}function Tn(N){const ve=N.isDir?N.path:ne(N.path);$n.value===ve&&($n.value=null)}async function eo(N,ve){const Ie=On??ve.dataTransfer?.getData("text/plain")??"",He=Ct(N).path;if(On=null,$n.value=null,!Ie||!He)return;const Me=He.replace(/[\\/]+$/,"");if(Ie===He||Me.startsWith(Ie.replace(/[\\/]+$/,"")))return;const Ge=Ie.split(/[\\/]/).filter(Boolean).pop()??"";if(!Ge)return;const Et=`${Me}/${Ge}`;if(Et!==Ie)try{await Gi(Ie,Et,p),r("file-renamed",Ie,Et);const St=F[Me];St?.isDir&&!St.expanded&&(St.expanded=!0,Ae(Me,!0)),await Qn()}catch(St){Y("error",St.message)}}function Ds(){const N=a.root?F[a.root]:void 0;N&&un(N)}function En(){const N=a.root?F[a.root]:void 0;N&&In(N)}async function un(N){const ve=Ct(N),Ie=await us({title:v("vsNewFile"),message:v("vsNewFileName"),placeholder:"untitled.txt",initial:"untitled.txt"})??null;if(!Ie)return;const He=`${ve.path.replace(/[\\/]+$/,"")}/${Ie}`;try{await vd(He,p),await wn(ve),r("open-file",He)}catch(Me){Y("error",Me.message)}}async function In(N){const ve=Ct(N),Ie=await us({title:v("vsNewFolder"),message:v("vsNewFolderName"),placeholder:"new-folder",initial:"new-folder"})??null;if(!Ie)return;const He=`${ve.path.replace(/[\\/]+$/,"")}/${Ie}`;try{await Wi(He,p),await wn(ve)}catch(Me){Y("error",Me.message)}}async function Gn(N){const ve=ne(N.path),Ie=N.name,He=await us({title:v("vsRename"),message:v("vsRenameName"),placeholder:Ie,initial:Ie})??null;if(!He||He===Ie)return;const Me=`${ve.replace(/[\\/]+$/,"")}/${He}`;try{await Gi(N.path,Me,p),r("file-renamed",N.path,Me);const Ge=F[ve];Ge&&await wn(Ge)}catch(Ge){Y("error",Ge.message)}}async function Nn(N){if(!await Pt({title:v("vsDelete"),message:`${v("vsDeleteConfirm")}「${N.name}」？`}))return;const Ie=ne(N.path);try{if(await fl(N.path,p),r("file-removed",N.path),N.depth===0){C(),r("project-missing",N.path);return}const He=F[Ie];He&&await wn(He)}catch(He){Y("error",He.message)}}async function yn(N){await wn(N.isDir?N:F[ne(N.path)]??N)}async function wn(N){Cs("list:"),N.loaded=!1,N.expanded=!0,Ae(N.path,!0),await Te(N)}async function Qn(){Cs("list:");const N=he.value;if(!N)return;const ve=new Set,Ie=async He=>{if(!ve.has(He.path)){ve.add(He.path),await Te(He);for(const Me of[...He.children]){const Ge=F[Me];Ge?.isDir&&Ge.expanded&&!Ge.loading&&await Ie(Ge)}}};await Ie(N),V()}function Dn(){w()}return(N,ve)=>{const Ie=Fn,He=dn;return l(),c("div",{ref_key:"treeRef",ref:D,class:"vs-tree",onScrollPassive:ye,onContextmenu:ve[6]||(ve[6]=xe(Me=>Q(Me),["prevent"]))},[a.root&&!he.value&&z.value?(l(),c("div",rT,[ve[7]||(ve[7]=o("span",{class:"vs-tree-spin","aria-hidden":"true"},null,-1)),de(i(s(v)("vsTreeLoading")),1)])):he.value?(l(!0),c(ie,{key:2},Pe(_e.value,Me=>(l(),c("div",{key:Me.path,class:te(["vs-tree-row",{"is-active":Me.path===t.activePath,"drop-target":$n.value===Me.path}]),style:kt({paddingLeft:Me.depth*12+6+"px"}),draggable:"true",onClick:xe(Ge=>be(Me),["stop"]),onContextmenu:xe(Ge=>P(Me,Ge),["prevent","stop"]),onDragstart:Ge=>Jn(Me,Ge),onDragover:xe(Ge=>gn(Me,Ge),["prevent"]),onDragleave:Ge=>Tn(Me),onDrop:xe(Ge=>eo(Me,Ge),["prevent"])},[o("span",{class:"vs-caret",onClick:xe(Ge=>je(Me),["stop"])},[Me.isDir?(l(),c("span",fT,i(Me.expanded?"▾":"▸"),1)):M("",!0)],8,uT),o("span",{class:te(["vs-ico",Me.isDir?"ico-dir":"ico-file"])},null,2),o("span",{class:"vs-name",title:Me.path},i(Me.name),9,pT),Ye(Me)?(l(),c("span",{key:0,class:te(["vs-git-badge","st-"+Ye(Me)]),title:pe(Me)},i(st(Me)),11,hT)):Ce(Me)?(l(),c("span",{key:1,class:te(["vs-git-badge","st-"+Ce(Me)]),title:ce(Me)},i(qe(Me)),11,vT)):M("",!0),Me.loading?(l(),c("span",mT,"…")):M("",!0)],46,dT))),128)):(l(),c("div",cT,i(s(v)("vsNoProject")),1)),s(Ve)?(l(),Xe(Zt,{key:3,items:U.value,x:s(rt),y:s(yt),onClose:ve[0]||(ve[0]=Me=>Ve.value=!1)},null,8,["items","x","y"])):M("",!0),m(He,{modelValue:Lt.value,"onUpdate:modelValue":ve[2]||(ve[2]=Me=>Lt.value=Me),class:"vs-diff-dialog",title:s(v)("gitDiffTitle"),width:"760px","append-to-body":""},{footer:oe(()=>[m(Ie,{type:"primary",onClick:ve[1]||(ve[1]=Me=>Lt.value=!1)},{default:oe(()=>[de(i(s(v)("gitDiffClose")),1)]),_:1})]),default:oe(()=>[o("pre",gT,i(Ln.value||s(v)("gitDiffEmpty")),1)]),_:1},8,["modelValue","title"]),m(Ru,{modelValue:wt.value,"onUpdate:modelValue":ve[3]||(ve[3]=Me=>wt.value=Me),dir:Gt.value,onDone:at},null,8,["modelValue","dir"]),m(Pu,{modelValue:re.value,"onUpdate:modelValue":[ve[4]||(ve[4]=Me=>re.value=Me),Qe],dir:Gt.value},null,8,["modelValue","dir"]),m(Fu,{modelValue:ct.value,"onUpdate:modelValue":[ve[5]||(ve[5]=Me=>ct.value=Me),et],dir:Gt.value},null,8,["modelValue","dir"])],544)}}}),kT=_t(bT,[["__scopeId","data-v-71abbe1d"]]),xT={class:"vs-tabs-wrap"},_T=["title"],CT=["title","onClick","onContextmenu"],ST={class:"vs-tab-name"},$T=["title","onClick"],TT={key:2,class:"vs-tab-dot"},ET=["onClick"],NT={key:0,class:"vs-tabs-empty"},DT=["title"],RT=vt({__name:"TabBar",props:{tabs:{},active:{}},emits:["select","close","save","closeSave","closeOthers","closeRight","closeAll"],setup(t,{emit:e}){const n=t,a=e,r=g(null),d=g(!1),h=g(!1),u=g(!1);let p=null;function w(){const R=r.value;R&&(d.value=R.scrollWidth>R.clientWidth+1,h.value=R.scrollLeft>1,u.value=R.scrollLeft+R.clientWidth<R.scrollWidth-1)}function b(R){const ue=r.value;ue&&ue.scrollBy({left:R*Math.max(200,ue.clientWidth*.7),behavior:"smooth"})}cn(()=>{p=new ResizeObserver(w),r.value&&p.observe(r.value),w()}),Mt(()=>{p?.disconnect(),p=null}),Je(()=>n?.tabs?.length,()=>void Nt(w));function k(R){const ue=r.value;!ue||ue.scrollWidth<=ue.clientWidth||(R.preventDefault(),ue.scrollLeft+=Math.abs(R.deltaX)>Math.abs(R.deltaY)?R.deltaX:R.deltaY)}function F(R){return R.split(/[\\/]/).filter(Boolean).pop()??R}const{cmOpen:L,cmX:D,cmY:z,openMenu:H}=hn(),C=g(null);function Z(R,ue){C.value=R,H(ue,[])}const G=I(()=>{const R=C.value;if(!R)return[];const V=n.tabs.findIndex(he=>he.path===R.path)===n.tabs.length-1;return[{label:v("vsTabClose"),icon:"close",onClick:()=>a("close",R.path)},{label:v("vsTabCloseSave"),icon:"save",onClick:()=>a("closeSave",R.path)},{separator:!0},{label:v("vsTabCloseOthers"),icon:"close",disabled:n.tabs.length<2,onClick:()=>a("closeOthers",R.path)},{label:v("vsTabCloseRight"),icon:"close",disabled:V,onClick:()=>a("closeRight",R.path)},{label:v("vsTabCloseAll"),icon:"close",onClick:()=>a("closeAll")}]});return(R,ue)=>(l(),c("div",xT,[o("button",{class:te(["vs-tab-arrow is-left",{dim:!h.value}]),title:s(v)("vsScrollLeft"),onClick:ue[0]||(ue[0]=V=>b(-1))},[m(se,{name:"chevronLeft",size:13})],10,_T),o("div",{ref_key:"tabsEl",ref:r,class:"vs-tabs",onWheel:k,onScroll:w},[(l(!0),c(ie,null,Pe(t.tabs,V=>(l(),c("div",{key:V.path,class:te(["vs-tab",{"is-active":V.path===t.active}]),title:V.path,onClick:he=>R.$emit("select",V.path),onContextmenu:xe(he=>Z(V,he),["prevent","stop"])},[V.icon?(l(),Xe(se,{key:0,name:V.icon,size:12},null,8,["name"])):M("",!0),o("span",ST,i(F(V.path)),1),V.dirty?(l(),c("span",{key:1,class:te(["vs-tab-dirty",{conflict:V.conflict}]),title:V.conflict?s(v)("vsConflictBadge"):"",onClick:xe(he=>R.$emit("save",V.path),["stop"])},null,10,$T)):(l(),c("span",TT)),o("span",{class:"vs-tab-close",onClick:xe(he=>R.$emit("close",V.path),["stop"])},"×",8,ET)],42,CT))),128)),t.tabs.length?M("",!0):(l(),c("div",NT,i(s(v)("vsNoOpenFile")),1)),s(L)?(l(),Xe(Zt,{key:1,items:G.value,x:s(D),y:s(z),onClose:ue[1]||(ue[1]=V=>L.value=!1)},null,8,["items","x","y"])):M("",!0)],544),o("button",{class:te(["vs-tab-arrow is-right",{dim:!u.value}]),title:s(v)("vsScrollRight"),onClick:ue[2]||(ue[2]=V=>b(1))},[m(se,{name:"chevronRight",size:13})],10,DT)]))}}),AT=_t(RT,[["__scopeId","data-v-3b8ef924"]]),MT="modulepreload",PT=function(t){return"/api/dsh-file-workbench/"+t},Pc={},mt=function(e,n,a){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),u=h?.nonce||h?.getAttribute("nonce");r=Promise.allSettled(n.map(p=>{if(p=PT(p),p in Pc)return;Pc[p]=!0;const w=p.endsWith(".css"),b=w?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${b}`))return;const k=document.createElement("link");if(k.rel=w?"stylesheet":MT,w||(k.as="script"),k.crossOrigin="",k.href=p,u&&k.setAttribute("nonce",u),document.head.appendChild(k),w)return new Promise((F,L)=>{k.addEventListener("load",F),k.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${p}`)))})}))}function d(h){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=h,window.dispatchEvent(u),!u.defaultPrevented)throw h}return r.then(h=>{for(const u of h||[])u.status==="rejected"&&d(u.reason);return e().catch(d)})},FT={ts:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bm),__vite__mapDeps([0,1])).then(t=>[t.javascript({typescript:!0})]),tsx:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bm),__vite__mapDeps([0,1])).then(t=>[t.javascript({typescript:!0,jsx:!0})]),js:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bm),__vite__mapDeps([0,1])).then(t=>[t.javascript()]),jsx:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bm),__vite__mapDeps([0,1])).then(t=>[t.javascript({jsx:!0})]),mjs:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bm),__vite__mapDeps([0,1])).then(t=>[t.javascript()]),cjs:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bm),__vite__mapDeps([0,1])).then(t=>[t.javascript()]),json:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bn),__vite__mapDeps([0,1])).then(t=>[t.json()]),html:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bp),__vite__mapDeps([0,1])).then(t=>[t.html()]),htm:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bp),__vite__mapDeps([0,1])).then(t=>[t.html()]),vue:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bp),__vite__mapDeps([0,1])).then(t=>[t.html()]),css:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bo),__vite__mapDeps([0,1])).then(t=>[t.css()]),scss:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bo),__vite__mapDeps([0,1])).then(t=>[t.css()]),less:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bo),__vite__mapDeps([0,1])).then(t=>[t.css()]),md:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bq),__vite__mapDeps([0,1])).then(t=>[t.markdown()]),markdown:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bq),__vite__mapDeps([0,1])).then(t=>[t.markdown()]),yaml:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.br),__vite__mapDeps([0,1])).then(t=>[t.yaml()]),yml:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.br),__vite__mapDeps([0,1])).then(t=>[t.yaml()]),xml:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bs),__vite__mapDeps([0,1])).then(t=>[t.xml()]),svg:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bs),__vite__mapDeps([0,1])).then(t=>[t.xml()]),py:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bt),__vite__mapDeps([0,1])).then(t=>[t.python()]),sql:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bu),__vite__mapDeps([0,1])).then(t=>[t.sql()]),java:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bv),__vite__mapDeps([0,1])).then(t=>[t.java()]),c:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bw),__vite__mapDeps([0,1])).then(t=>[t.cpp()]),h:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bw),__vite__mapDeps([0,1])).then(t=>[t.cpp()]),cc:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bw),__vite__mapDeps([0,1])).then(t=>[t.cpp()]),cpp:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bw),__vite__mapDeps([0,1])).then(t=>[t.cpp()]),cxx:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bw),__vite__mapDeps([0,1])).then(t=>[t.cpp()]),hpp:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bw),__vite__mapDeps([0,1])).then(t=>[t.cpp()]),rs:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bx),__vite__mapDeps([0,1])).then(t=>[t.rust()]),go:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.by),__vite__mapDeps([0,1])).then(t=>[t.go()]),php:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bz),__vite__mapDeps([0,1])).then(t=>[t.php()]),cs:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bA),__vite__mapDeps([0,1])).then(t=>[Lo.define(t.csharp)]),sh:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bB),__vite__mapDeps([0,1])).then(t=>[Lo.define(t.shell)]),bash:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bB),__vite__mapDeps([0,1])).then(t=>[Lo.define(t.shell)]),zsh:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bB),__vite__mapDeps([0,1])).then(t=>[Lo.define(t.shell)]),rb:()=>mt(()=>import("./vendor-C2cID70-.js").then(t=>t.bC),__vite__mapDeps([0,1])).then(t=>[Lo.define(t.ruby)])},LT={ts:"TypeScript",tsx:"TypeScript JSX",js:"JavaScript",jsx:"JavaScript JSX",mjs:"JavaScript",cjs:"JavaScript",json:"JSON",html:"HTML",htm:"HTML",vue:"Vue",css:"CSS",scss:"SCSS",less:"LESS",md:"Markdown",markdown:"Markdown",yaml:"YAML",yml:"YAML",xml:"XML",svg:"SVG",py:"Python",sql:"SQL",java:"Java",c:"C",h:"C/C++",cc:"C++",cpp:"C++",cxx:"C++",hpp:"C/C++",rs:"Rust",go:"Go",php:"PHP",cs:"C#",sh:"Shell",bash:"Shell",zsh:"Shell",rb:"Ruby",txt:"Plain Text"};function zu(t){const e=t.lastIndexOf(".");if(e<0)return"";const n=t.slice(e+1).toLowerCase();return n.length>0&&n.length<=10?n:""}async function OT(t){const e=FT[zu(t)];if(!e)return[];try{return await e()}catch{return[]}}function IT(t){const e=zu(t);return LT[e]??(e?e.toUpperCase():"Plain Text")}const Fc="dsh-plugin-deco-styles",VT=`
.dsh-deco-error   { text-decoration: underline wavy #f85149; text-decoration-skip-ink: none; }
.dsh-deco-warning { text-decoration: underline wavy #d29922; text-decoration-skip-ink: none; }
.dsh-deco-info    { text-decoration: underline wavy #58a6ff; text-decoration-skip-ink: none; }
.dsh-deco-hint    { text-decoration: underline dotted #8b949e; text-decoration-skip-ink: none; }
.dsh-deco-deprecated { text-decoration: line-through; opacity: .7; }
.dsh-deco-highlight { background: rgba(187,128,9,0.25); }
.dsh-deco-widget { color: var(--dsh-fg-dim, #8b949e); font-style: italic; opacity: .85; padding-left: 8px; }
.cm-gutter-marker { cursor: default; }
.cm-gutter-marker.dsh-deco-bookmark { color: #e3b341; font-weight: 700; }
`;function zT(){if(typeof document>"u"||document.getElementById(Fc))return;const t=document.createElement("style");t.id=Fc,t.textContent=VT,document.head.appendChild(t)}function jT(t){return[t.category?`dsh-deco-${t.category}`:"",t.className].filter(Boolean).join(" ")}function sl(t,e,n){return Math.max(e,Math.min(n,t))}function Bi(t,e,n=!1){if(typeof e.offset=="number")return sl(e.offset,0,t.length);const a=sl(e.line??1,1,t.lines),r=t.line(a);return e.character==null?n?r.to:r.from:sl(r.from+Math.max(0,e.character-1),r.from,r.to)}class Dr extends Jf{constructor(e,n,a){super(),this.elementClass=e,this.ch=n,this.tip=a}toDOM(){const e=document.createElement("div");return e.className=this.elementClass,e.textContent=this.ch,this.tip&&(e.title=this.tip),e}eq(e){return e instanceof Dr&&this.elementClass===e.elementClass&&this.ch===e.ch&&this.tip===e.tip}}class Rr extends Yf{constructor(e){super(),this.text=e}eq(e){return e instanceof Rr&&e.text===this.text}toDOM(){const e=document.createElement("span");return e.className="dsh-deco-widget",e.textContent=this.text,e}destroy(){}}const ol=Gf.define();function Lc(t,e){const n=t.doc,a=[];for(const d of e){if(d.type!=="gutter")continue;const h=Bi(n,d.start),u=n.lineAt(h),p=`cm-gutter-marker${d.category?` dsh-deco-${d.category}`:""}${d.className?` ${d.className}`:""}`,w=d.category==="bookmark"?"●":d.message?.[0]??"•";a.push({from:u.from,to:u.to,marker:new Dr(p.trim(),w,d.message)})}a.sort((d,h)=>d.from-h.from||d.to-h.to);const r=new nd;for(const d of a)r.add(d.from,d.to,d.marker);return r.finish()}function BT(t){zT();let e=t;const n=qf.fromClass(class{decorations;constructor(r){this.decorations=Oc(r.state.doc,e)}update(r){(r.docChanged||r.viewportChanged||r.transactions.some(d=>d.effects.some(h=>h.is(ol))))&&(this.decorations=Oc(r.view.state.doc,e))}},{decorations:r=>r.decorations}),a=Kf.define({create:r=>Lc(r,e),update(r,d){return d.docChanged||d.effects.some(h=>h.is(ol))?Lc(d.state,e):r},provide:r=>Xf.compute([r],d=>d.field(r))});return{extension:[n,a],setItems(r){return e=r??[],ol.of(null)}}}function Oc(t,e){const n=[];for(const r of e)if(r.type==="mark"){const d=Bi(t,r.start),h=r.end?Bi(t,r.end):t.lineAt(d).to;if(h<d)continue;n.push({from:d,to:h,deco:Br.mark({class:jT(r),title:r.message})})}else if(r.type==="widget"){const d=Bi(t,r.start,!0);n.push({from:d,to:d,deco:Br.widget({widget:new Rr(r.message??""),side:1})})}n.sort((r,d)=>r.from-d.from||r.to-d.to);const a=new nd;for(const r of n)a.add(r.from,r.to,r.deco);return a.finish()}const ju="\0",Bu="";function Uu(t,e){const n=[];return[t.replace(e,r=>(n.push(r),`${ju}${n.length-1}${Bu}`)),n]}function Gl(t,e){return t.replace(new RegExp(`${ju}(\\d+)${Bu}`,"g"),(n,a)=>e[Number(a)]??"")}function UT(t){if(!t.includes("{"))return null;const[e,n]=Uu(t,/\/\*[\s\S]*?\*\/|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g);if(e.includes("/*"))return null;const a=(e.match(/{/g)??[]).length,r=(e.match(/}/g)??[]).length;if(a===0||a!==r)return null;const d=e.replace(/\s+/g," ").replace(/\s*([{};])\s*/g,"$1").trim(),h=[];let u="",p=0;const w=()=>"  ".repeat(p),b=k=>{const F=k.trim();F&&h.push(w()+F)};for(const k of d)if(k==="{")b(`${u} {`),u="",p+=1;else if(k==="}"){if(b(u),p-=1,b("}"),u="",p<0)return null}else k===";"?(b(`${u};`),u=""):k===","?(b(`${u},`),u=""):u+=k;return b(u),p!==0?null:Gl(h.join(`
`),n)}const HT=new Set(["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"]);function WT(t,e){if(/<\s*(script|style|pre|textarea)\b/i.test(t))return null;const[n,a]=Uu(t,/<!--[\s\S]*?-->|<!\[CDATA\[[\s\S]*?\]\]>/g);if(n.includes("<!--"))return null;const r=[];let d=0;const h=/<[a-zA-Z!/][^>]*>/g;for(let k=h.exec(n);k;k=h.exec(n))k.index>d&&r.push({text:n.slice(d,k.index)}),r.push({tag:k[0]}),d=k.index+k[0].length;d<n.length&&r.push({text:n.slice(d)});const u=k=>k.replace(/^<\/?/,"").replace(/[\s/>].*$/s,"").toLowerCase(),p=[],w=[],b=(k,F)=>{const L=Gl(F,a).replace(/\s+/g," ").trim();L&&p.push("  ".repeat(Math.max(0,k))+L)};for(let k=0;k<r.length;k+=1){const F=r[k];if(F.text!==void 0){F.text.trim()&&b(w.length,F.text);continue}const L=F.tag,D=u(L),z=L.startsWith("</"),H=L.endsWith("/>")||e&&HT.has(D);if(z){if(w.pop()!==D)return null;b(w.length,L);continue}const C=r[k+1],Z=r[k+2];if(!H&&C?.text!==void 0&&Z?.tag!==void 0&&u(Z.tag)===D&&Z.tag.startsWith("</")){const G=`${L}${C.text}${Z.tag}`;if(Gl(G,a).replace(/\s+/g," ").trim().length<=80){b(w.length,G),k+=2;continue}}b(w.length,L),H||w.push(D)}return w.length!==0?null:p.join(`
`)}const GT={key:0,class:"vs-find"},qT={class:"vs-find-row"},KT=["placeholder","onKeydown"],XT={class:"vs-find-count"},YT=["title"],JT=["title"],QT=["title"],ZT=["title"],eE=["title"],tE=["title"],nE=["title"],sE={key:0,class:"vs-find-row"},oE=["placeholder","onKeydown"],iE=["title"],aE=["title"];let yo=null;const lE=Qf.highest(Zf.of([{key:"Mod-f",run:()=>(yo?.openFind(!1),!0)},{key:"Mod-h",run:()=>(yo?.openFind(!0),!0)},{key:"Escape",run:()=>yo?.closeFind()??!1}]));function rE(){const t=document.createElement("div");return t.className="vs-minimap",t}const vo=new Map,Hu=new Set;function cE(t){const e=Iu(t),n=vo.get(e);if(n){try{n.view.destroy()}catch{}vo.delete(e)}Hu.add(e)}typeof window<"u"&&(window.__dshFWDisposeEditorSlotByTabId=cE);const dE=vt({__name:"CodeEditor",props:{path:{},slot:{},initialContent:{},docRev:{},readonly:{type:Boolean},dark:{type:Boolean},initialView:{}},emits:["change","cursor","view","contextmenu"],setup(t,{expose:e,emit:n}){const a=t,r=n;function d($){r("contextmenu",{x:$.clientX,y:$.clientY})}const h=g(null),u=If(null),p=new ao,w=new ao,b=new ao,k=new ao,F=new ao,L=new ao;let D=0,z=null;const H=g(!1),C=g(!1),Z=g(""),G=g(""),R=g(!1),ue=g(!1),V=g(!1),he=g(0),_e=g(-1),ge=g(null),ne=I(()=>Z.value?he.value===0?v("vsFindNoMatch"):`${_e.value<0?"?":_e.value}/${he.value}`:"");function ae(){return new Hr({search:Z.value,replace:G.value,caseSensitive:R.value,regexp:ue.value,wholeWord:V.value})}function Te(){const $=u.value;$&&($.dispatch({effects:Ur.of(ae())}),je())}function je(){const $=u.value;if(!$||!Z.value){he.value=0,_e.value=-1;return}const q=ae(),Ne=$.state.selection.main.head;let re=0,ct=-1;const wt=q.getCursor($.state.doc);for(let Lt=wt.next();!Lt.done;Lt=wt.next())re+=1,ct<0&&Lt.value.from>=Ne&&(ct=re);ct<0&&re>0&&(ct=1),he.value=re,_e.value=ct}function be(){const $=u.value;$&&ep($),je()}function Ae(){const $=u.value;$&&tp($),je()}function W($){$?Ae():be()}function J(){const $=u.value;$&&np($),je()}function B(){const $=u.value;$&&sp($),je()}function ee($){$==="case"?R.value=!R.value:$==="re"?ue.value=!ue.value:V.value=!V.value,Te()}function ye($){H.value=!0,$&&(C.value=!0);const q=u.value;if(q){const Ne=q.state.selection.main;if(!Ne.empty&&Ne.to-Ne.from<=200){const re=q.state.doc.sliceString(Ne.from,Ne.to);re.includes(`
`)||(Z.value=re)}}Te(),Nt(()=>ge.value?.select())}function ze(){const $=H.value;H.value=!1,C.value=!1,he.value=0,_e.value=-1;const q=u.value;return q&&$&&q.dispatch({effects:Ur.of(new Hr({search:""}))}),q?.focus(),$}const Ke=a.slot??0,Ze=Vu(Ke);function we(){const $=u.value;$&&r("view",{scrollTop:$.scrollDOM.scrollTop,anchor:$.state.selection.main.head})}function ke($){const q=$;if(q.docChanged&&(r("change",q.state.doc.toString()),a.path&&Ze.set(a.path,q.state),H.value&&je(),iT(a.slot??0,q.state.doc.toString(),q.changes)),q.selectionSet||q.docChanged){const Ne=q.state.selection.main.head,re=q.state.doc.lineAt(Ne);r("cursor",re.number,Ne-re.from+1),we(),aT(a.slot??0,q.state.selection)}}function Ye(){return lp.of({create:()=>({dom:rE()}),displayText:"blocks"})}function st($){const q=Math.max(0,Math.min($.length,a.initialView?.anchor??0));return $i.create({doc:$,selection:{anchor:q},extensions:[ip,ap(),lE,F.of(Ue.vsMinimap?Ye():[]),p.of([]),w.of(a.dark?Ua:[]),b.of($i.readOnly.of(!!a.readonly)),k.of(io.editable.of(!a.readonly)),L.of([]),io.updateListener.of(Ne=>tT(a.slot??0)?.(Ne))]})}function pe($){const q=Ze.get($);if(q)return q;const Ne=st(a.initialContent??"");return Ze.set($,Ne),Ne}async function Ce(){const $=D,q=await OT(a.path);$!==D||!u.value||u.value.dispatch({effects:p.reconfigure(q)})}function qe($){const q=a.initialView?.scrollTop??0;q>0&&requestAnimationFrame(()=>{u.value===$&&($.scrollDOM.scrollTop=q)})}function ce($){$.dispatch({effects:[w.reconfigure(a.dark?Ua:[]),b.reconfigure($i.readOnly.of(!!a.readonly)),k.reconfigure(io.editable.of(!a.readonly)),F.reconfigure(Ue.vsMinimap?Ye():[])]})}function Ve(){const $=h.value;if(!$)return;const q=vo.get(Ke);if(q&&q.view.dom&&q.path===a.path){const re=q.view;D++,u.value=re,Mi(Ke,re),vo.delete(Ke),$.appendChild(re.dom),ce(re),qe(re),z=()=>we(),re.scrollDOM.addEventListener("scroll",z,{passive:!0}),Oe(a.path),requestAnimationFrame(()=>{u.value===re&&re.requestMeasure()}),Ce();return}if(q){try{q.view.destroy()}catch{}vo.delete(Ke)}D++;const Ne=new io({state:pe(a.path),parent:$});u.value=Ne,Mi(Ke,Ne),ce(Ne),qe(Ne),z=()=>we(),Ne.scrollDOM.addEventListener("scroll",z,{passive:!0}),Ce()}function rt($,q){const Ne=u.value;if(Ne){if($&&$!==q){let re=!0;try{re=Er(Ke).state.openTabs.includes($)}catch{}re?Ze.set($,Ne.state):Ze.delete($)}D++,Ne.setState(pe(q)),ce(Ne),qe(Ne),Oe(q),Ce()}}function yt(){const $=u.value;$&&z&&$.scrollDOM.removeEventListener("scroll",z),z=null}function dt(){u.value?.focus()}const it=new Map;function Oe($){const q=u.value;q&&q.dispatch({effects:L.reconfigure(it.get($)??[])})}function U($){a.path&&(it.set(a.path,$),Oe(a.path))}const P=new Map;function Q($){const q=a.path;if(!q)return;const Ne=u.value;if(!Ne)return;if($===null){P.delete(q),it.delete(q),Oe(q);return}let re=P.get(q)??null;if(!re){re=BT($),P.set(q,re),it.set(q,re.extension),Oe(q);return}Ne.dispatch({effects:re.setItems($)})}function Ee($){const q=u.value;if(!q)return;const Ne=q.state.doc,re=Ne.line(Math.max(1,Math.min(Ne.lines,$)));q.dispatch({selection:{anchor:re.from,head:re.to},effects:io.scrollIntoView(re.from,{y:"center"})}),q.focus(),requestAnimationFrame(()=>{const ct=q.domAtPos(re.from).node,wt=ct instanceof HTMLElement?ct.closest?.(".cm-line"):null;wt&&(wt.classList.add("cm-flash-line"),window.setTimeout(()=>wt.classList.remove("cm-flash-line"),1200))})}function O($){if(a.path.slice(a.path.lastIndexOf(".")).toLowerCase()!==".json")return null;try{return JSON.stringify(JSON.parse($),null,2)}catch{return null}}function E($){return[".css",".scss",".less"].includes($)?UT:[".html",".htm",".xhtml",".xml",".svg",".vue"].includes($)?q=>WT(q,$!==".xml"&&$!==".svg"):null}function K(){const $=u.value;if(!$||a.readonly)return!1;const q=$.state.doc.toString(),Ne=a.path.slice(a.path.lastIndexOf(".")).toLowerCase();if(Ne===".json"){const re=O(q);if(re!==null)return re===q||$.dispatch({changes:{from:0,to:q.length,insert:re}}),!0}else{const re=E(Ne)?.(q);if(re!=null)return re===q||$.dispatch({changes:{from:0,to:q.length,insert:re}}),!0}return $.dispatch({selection:{anchor:0,head:q.length}}),op($),!0}return e({focus:dt,format:K,revealLine:Ee,openFind:ye,setExtension:U,setDecorationsSpec:Q}),cn(()=>{Ac(a.slot??0,ke),yo={openFind:$=>ye($),closeFind:()=>ze()},Ve()}),Mt(()=>{if(Ac(Ke,null),yo&&(yo=null),yt(),Hu.has(Ke)){u.value?.destroy(),u.value=null,Mi(Ke,null);return}u.value&&vo.set(Ke,{view:u.value,path:a.path}),Mi(Ke,null),u.value=null}),Je(()=>a.path,($,q)=>{$&&(q&&q!==$?rt(q,$):q||Ve())}),Je(()=>a.docRev,()=>{if(!a.path)return;Ze.delete(a.path);const $=u.value;$&&(D++,$.setState(st(a.initialContent??"")),qe($),Ce())}),Je(()=>a.readonly,()=>{u.value?.dispatch({effects:[b.reconfigure($i.readOnly.of(!!a.readonly)),k.reconfigure(io.editable.of(!a.readonly))]})}),Je(()=>a.dark,()=>{u.value?.dispatch({effects:w.reconfigure(a.dark?Ua:[])})}),Je(()=>Ue.vsMinimap,()=>{u.value?.dispatch({effects:F.reconfigure(Ue.vsMinimap?Ye():[])})}),($,q)=>(l(),c("div",{class:"vs-ce-root",onContextmenu:xe(d,["prevent","stop"])},[o("div",{ref_key:"hostRef",ref:h,class:"vs-code-editor"},null,512),H.value?(l(),c("div",GT,[o("div",qT,[xt(o("input",{ref_key:"findInputRef",ref:ge,"onUpdate:modelValue":q[0]||(q[0]=Ne=>Z.value=Ne),class:"vs-find-input",placeholder:s(v)("vsFindPlaceholder"),onInput:Te,onKeydown:[q[1]||(q[1]=bt(xe(Ne=>W(Ne.shiftKey),["prevent"]),["enter"])),bt(xe(ze,["prevent"]),["esc"])]},null,40,KT),[[Ot,Z.value]]),o("span",XT,i(ne.value),1),o("button",{class:te(["vs-find-btn",{on:R.value}]),title:s(v)("vsGrepCase"),onClick:q[2]||(q[2]=Ne=>ee("case"))},"Aa",10,YT),o("button",{class:te(["vs-find-btn",{on:ue.value}]),title:s(v)("vsGrepRegex"),onClick:q[3]||(q[3]=Ne=>ee("re"))},".*",10,JT),o("button",{class:te(["vs-find-btn",{on:V.value}]),title:s(v)("vsFindWord"),onClick:q[4]||(q[4]=Ne=>ee("word"))},"|w|",10,QT),q[7]||(q[7]=o("span",{class:"vs-find-vsep"},null,-1)),o("button",{class:"vs-find-btn",title:s(v)("vsFindPrev"),onClick:Ae},"↑",8,ZT),o("button",{class:"vs-find-btn",title:s(v)("vsFindNext"),onClick:be},"↓",8,eE),o("button",{class:te(["vs-find-btn",{on:C.value}]),title:s(v)("vsFindToggleReplace"),onClick:q[5]||(q[5]=Ne=>C.value=!C.value)},"⇅",10,tE),o("button",{class:"vs-find-btn",title:s(v)("vsFindClose"),onClick:ze},"×",8,nE)]),C.value?(l(),c("div",sE,[xt(o("input",{"onUpdate:modelValue":q[6]||(q[6]=Ne=>G.value=Ne),class:"vs-find-input",placeholder:s(v)("vsReplacePlaceholder"),onKeydown:[bt(xe(J,["prevent"]),["enter"]),bt(xe(ze,["prevent"]),["esc"])]},null,40,oE),[[Ot,G.value]]),o("button",{class:"vs-find-btn",title:s(v)("vsFindReplace"),onClick:J},"⏎",8,iE),o("button",{class:"vs-find-btn",title:s(v)("vsFindReplaceAll"),onClick:B},"≡",8,aE)])):M("",!0)])):M("",!0)],32))}}),uE=_t(dE,[["__scopeId","data-v-52d75f41"]]),fE={class:"fsp"},pE={class:"fsp-bar"},hE=["title"],vE=["disabled"],mE=["disabled"],gE={key:0,class:"fsp-newrow"},yE=["placeholder"],wE=["disabled"],bE={key:1,class:"fsp-error"},kE={class:"fsp-main"},xE={class:"fsp-side"},_E={class:"fsp-group"},CE={class:"fsp-group-title"},SE=["title","onClick"],$E={class:"fsp-side-name"},TE={key:0,class:"fsp-side-empty"},EE={class:"fsp-group"},NE={class:"fsp-group-title"},DE=["title","onClick"],RE={class:"fsp-side-name"},AE={key:0,class:"fsp-side-empty"},ME={key:0,class:"fsp-group"},PE={class:"fsp-group-title"},FE=["title","onClick"],LE=["title"],OE={class:"fsp-side-name"},IE={class:"fsp-content"},VE={key:0,class:"fsp-crumbs"},zE={key:0,class:"fsp-sep"},jE=["onClick"],BE={class:"fsp-list"},UE={key:0,class:"fsp-loading"},HE={key:1,class:"fsp-error"},WE=["onClick","onDblclick"],GE={class:"fsp-name"},qE={key:0,class:"fsp-empty"},KE={key:2,class:"fsp-namerow"},XE={class:"fsp-namelabel"},YE=["placeholder"],JE=["title"],QE={value:""},ZE=["value"],eN={key:4,class:"fsp-manual"},tN=["placeholder"],nN=["disabled"],sN={class:"fsp-foot"},oN={class:"fsp-hint"},iN=["disabled"],aN=["disabled","title"],il="vscode",ca=vt({__name:"PathPickerDialog",props:{modelValue:{type:Boolean},mode:{},initialDir:{},initialName:{}},emits:["update:modelValue","confirm"],setup(t,{emit:e}){const n=t,a=e,r=I({get:()=>n.modelValue,set:O=>a("update:modelValue",O)}),d=I(()=>n.mode==="file"),h=I(()=>d.value?v("vsSaveAsTitle"):v("vsPickFolderTitle")),u=g(null),p=g(!1),w=g(void 0),b=g(""),k=g(!1),F=g(""),L=g(null),D=g(!1),z=g(void 0),H=g(""),C=g(""),Z=g(null),G=g([]),R=I(()=>u.value?.crumbs??[]),ue=I(()=>u.value?.entries??[]),V=I(()=>u.value?.path||null),he=I(()=>{const O=ue.value;return!d.value||!C.value?O:O.filter(E=>E.isDir||E.name.toLowerCase().endsWith(C.value))}),_e=I(()=>{const O=n.initialName??"",E=O.lastIndexOf(".");return E>0?O.slice(E).toLowerCase():""}),ge=I(()=>{const O=H.value.trim().toLowerCase();return O?ue.value.some(E=>!E.isDir&&E.name.toLowerCase()===O):!1}),ne=I(()=>{const O=H.value.trim();return O?ee(O)?O:ye(V.value,O):""}),ae=I(()=>{const O=H.value.trim();return!O||/[\\/]$/.test(O)?!1:ee(O)||!!V.value}),Te=I(()=>G.value.filter(O=>O.type==="drive")),je=new Set(["pictures","music","videos","gallery"]),be=I(()=>G.value.filter(O=>O.type!=="drive"&&O.type!=="recycle"&&!je.has(O.type)&&!!O.path));function Ae(O){const E=Zi(O.id),K=E==="online"?v("sshStatusOnline"):E==="offline"?v("sshStatusOffline"):"",$=E==="offline"?Cl(O.id):"";return K&&$?`${K}：${$}`:K||`${O.user}@${O.host}:${O.port||22}`}function W(O){switch(O.type){case"drive":return mu(O);case"home":return v("navHome");case"desktop":return v("desktopEntry");case"download":return v("downloadEntry");case"documents":return v("documentEntry");case"pictures":return v("pictureEntry");case"music":return v("musicEntry");case"videos":return v("videoEntry");case"gallery":return v("navGallery");case"workspace":return v("workspaceEntry");default:return O.name}}function J(O){switch(O.type){case"home":return"ico-home";case"desktop":return"ico-desktop";case"download":return"ico-download";case"documents":return"ico-doc";case"pictures":case"gallery":return"ico-pic";case"music":return"ico-music";case"videos":return"ico-video";case"workspace":return"ico-folder";default:return"ico-dir"}}function B(){return window.__DSH_FILE_WORKBENCH__}function ee(O){return/^[a-zA-Z]:[\\/]/.test(O)||O.startsWith("/")||O.startsWith("\\\\")||Wt(O)}function ye(O,E){if(!O)return E;if(Wt(O))return hc(O,E);const K=O.includes("\\")?"\\":"/";return`${O.replace(/[\\/]+$/,"")}${K}${E}`}const ze=I(()=>!!V.value&&Wt(V.value)),Ke=I(()=>ze.value?!0:R.value.length>=2);function Ze(O){const E=O.replace(/\\/g,"/").replace(/\/+$/,"");if(!E)return[];const K=/^[A-Za-z]:/.test(E),$=E.split("/").filter(Boolean),q=[];if(K){const re=$.shift();q.push({name:re,path:`${re}/`,hidden:!1})}let Ne=K?`${q[0].path.replace(/\/$/,"")}`:"";for(const re of $)Ne=`${Ne}/${re}`,q.push({name:re,path:Ne,hidden:!1});return q}async function we(){const O=await pd();return{path:"",home:"",crumbs:[],entries:(O.drives??[]).map(E=>({name:Bs(E),path:E.path,hidden:!1,isDir:!0}))}}async function ke(O){if(!O)return await we();const E=await Ii(O);return{path:O,home:"",crumbs:Ze(O),entries:(E.entries??[]).filter(K=>K.isDir&&!K.hidden).sort((K,$)=>K.name.localeCompare($.name,"zh")).map(K=>({name:K.name,path:K.path,hidden:!!K.hidden,isDir:!0}))}}async function Ye(O){if(!O)return await we();const K=((await Ii(O)).entries??[]).map($=>({name:$.name,path:$.path,hidden:!!$.hidden,isDir:!!$.isDir})).sort(($,q)=>$.isDir===q.isDir?$.name.localeCompare(q.name,"zh"):$.isDir?-1:1);return{path:O,home:"",crumbs:Ze(O),entries:K}}async function st(O){const K=((await Ii(O,il)).entries??[]).filter(q=>(d.value?!0:q.isDir)&&!q.hidden).sort((q,Ne)=>d.value&&q.isDir!==Ne.isDir?Number(Ne.isDir)-Number(q.isDir):q.name.localeCompare(Ne.name,"zh")).map(q=>({name:q.name,path:q.path,hidden:!!q.hidden,isDir:!!q.isDir})),$=(qd(O)??[{name:O,path:O}]).map(q=>({name:q.name,path:q.path,hidden:!1}));return{path:O,home:"",crumbs:$,entries:K}}async function pe(O){p.value=!0,w.value=void 0,L.value=null;try{if(O&&Wt(O)){u.value=await st(O);return}if(d.value){u.value=await Ye(O);return}const E=B();if(E?.listDirectory){const K=await E.listDirectory(O);u.value={path:K.path,home:K.home,crumbs:K.crumbs??[],entries:(K.entries??[]).map($=>({name:$.name,path:$.path,hidden:!!$.hidden,isDir:!0}))};return}u.value=await ke(O)}catch(E){u.value=null,w.value=E.message}finally{p.value=!1}}function Ce(O){!O||O===V.value||pe(O)}function qe(O){L.value=O.path,d.value&&!O.isDir&&(H.value=O.name)}function ce(O){if(O.isDir){if(O.path===V.value)return;pe(O.path);return}d.value&&(H.value=O.name,Oe())}function Ve(O){O!==V.value&&pe(O===""?void 0:O)}function rt(){const O=V.value;if(!O)return;if(Wt(O)){const $=ta(O);pe($||void 0);return}const E=R.value;if(E.length<2)return;const K=E[E.length-2];pe(K.hidden?void 0:K.path)}function yt(){k.value=!k.value,z.value=void 0,k.value&&(F.value="")}async function dt(){const O=F.value.trim(),E=V.value;if(!(!O||!E)){D.value=!0,z.value=void 0;try{const K=B();Wt(E)?await Wi(hc(E,O),il):K?.createDirectory?await K.createDirectory(E,O):await Wi(`${E.replace(/[\\/]+$/,"")}/${O}`),k.value=!1,F.value="",await pe(E)}catch(K){z.value=K.message}finally{D.value=!1}}}function it(){const O=L.value||V.value;O&&(a("confirm",O),r.value=!1)}function Oe(){if(!ae.value)return;const O=ne.value;O&&(a("confirm",O),r.value=!1)}function U(){const O=b.value.trim();O&&(a("confirm",O),r.value=!1)}async function P(){Ks();try{const O=await fd(il);G.value=O.items??[]}catch{G.value=[]}}function Q(){w.value=void 0,z.value=void 0,k.value=!1,F.value="",b.value=n.initialDir??"",H.value=n.initialName??"",C.value="",P(),pe(n.initialDir||void 0),d.value&&Nt(()=>{const O=Z.value;O&&(O.focus(),O.setSelectionRange(0,_e.value?O.value.length-_e.value.length:O.value.length))})}function Ee(){u.value=null,b.value="",H.value="",C.value=""}return(O,E)=>{const K=dn;return l(),Xe(K,{modelValue:r.value,"onUpdate:modelValue":E[7]||(E[7]=$=>r.value=$),title:h.value,width:"720px","append-to-body":"",class:"fsp-dialog",onOpen:Q,onClosed:Ee},{footer:oe(()=>[o("div",sN,[o("span",oN,i(d.value?s(v)("vsSaveAsHint"):s(v)("vsPickEnterHint")),1),E[10]||(E[10]=o("span",{class:"fsp-foot-spacer"},null,-1)),o("button",{class:"fsp-btn",onClick:E[6]||(E[6]=$=>r.value=!1)},i(s(v)("vsCancel")),1),d.value?(l(),c("button",{key:0,class:"fsp-btn primary",disabled:!ae.value,onClick:Oe},i(s(v)("vsSave")),9,iN)):(l(),c("button",{key:1,class:"fsp-btn primary",disabled:!L.value&&!V.value||p.value,title:L.value||V.value||void 0,onClick:it},i(s(v)("vsPickConfirm")),9,aN))])]),default:oe(()=>[o("div",fE,[o("div",pE,[o("div",{class:"fsp-path",title:V.value||void 0},i(V.value||s(v)("vsComputer")),9,hE),o("button",{class:"fsp-btn sm",disabled:p.value||!Ke.value,onClick:rt},i(s(v)("vsUp")),9,vE),o("button",{class:"fsp-btn sm",disabled:p.value||!V.value,onClick:yt},i(s(v)("vsNewFolderBtn")),9,mE)]),k.value?(l(),c("div",gE,[xt(o("input",{"onUpdate:modelValue":E[0]||(E[0]=$=>F.value=$),class:"fsp-input",placeholder:s(v)("vsNewFolderName"),onKeyup:[bt(dt,["enter"]),E[1]||(E[1]=bt($=>k.value=!1,["esc"]))]},null,40,yE),[[Ot,F.value]]),o("button",{class:"fsp-btn primary sm",disabled:D.value||!F.value.trim(),onClick:dt},i(s(v)("confirmOk")),9,wE),o("button",{class:"fsp-btn sm",onClick:E[2]||(E[2]=$=>k.value=!1)},i(s(v)("vsCancel")),1)])):M("",!0),z.value?(l(),c("div",bE,i(z.value),1)):M("",!0),o("div",kE,[o("div",xE,[o("div",_E,[o("div",CE,i(s(v)("myComputer")),1),(l(!0),c(ie,null,Pe(Te.value,$=>(l(),c("div",{key:$.path,class:te(["fsp-side-row",{active:$.path===V.value}]),title:$.path,onClick:q=>Ce($.path)},[E[8]||(E[8]=o("span",{class:"fsp-ico ico-drive"},null,-1)),o("span",$E,i(W($)),1)],10,SE))),128)),Te.value.length===0?(l(),c("div",TE,i(s(v)("vsLoading")),1)):M("",!0)]),o("div",EE,[o("div",NE,i(s(v)("vsQuickAccess")),1),(l(!0),c(ie,null,Pe(be.value,$=>(l(),c("div",{key:$.type+$.path,class:te(["fsp-side-row",{active:$.path===V.value}]),title:$.path,onClick:q=>Ce($.path)},[o("span",{class:te(["fsp-ico",J($)])},null,2),o("span",RE,i(W($)),1)],10,DE))),128)),be.value.length===0?(l(),c("div",AE,i(s(v)("vsEmptyDir")),1)):M("",!0)]),s(rn).length>0?(l(),c("div",ME,[o("div",PE,i(s(v)("sshNavGroup")),1),(l(!0),c(ie,null,Pe(s(rn),$=>(l(),c("div",{key:$.id,class:te(["fsp-side-row",{active:s(Ws)($.id)===V.value}]),title:`${$.user}@${$.host}:${$.port||22}`,onClick:q=>Ce(s(Ws)($.id))},[o("span",{class:te(["fsp-dot",`dot-${s(Zi)($.id)}`]),title:Ae($)},null,10,LE),E[9]||(E[9]=o("span",{class:"fsp-ico ico-globe"},null,-1)),o("span",OE,i($.name||`${$.user}@${$.host}`),1)],10,FE))),128))])):M("",!0)]),o("div",IE,[R.value.length>1?(l(),c("div",VE,[(l(!0),c(ie,null,Pe(R.value,($,q)=>(l(),c(ie,{key:$.path+"#"+q},[q>0?(l(),c("span",zE,"›")):M("",!0),o("span",{class:te(["fsp-crumb",{active:q===R.value.length-1}]),onClick:Ne=>Ve($.path)},i($.name),11,jE)],64))),128))])):M("",!0),o("div",BE,[p.value?(l(),c("div",UE,i(s(v)("vsLoading")),1)):w.value?(l(),c("div",HE,i(w.value),1)):(l(),c(ie,{key:2},[(l(!0),c(ie,null,Pe(he.value,$=>(l(),c("div",{key:$.path,class:te(["fsp-row",{dim:$.hidden,selected:$.path===L.value}]),onClick:q=>qe($),onDblclick:q=>ce($)},[o("span",{class:te(["fsp-ico",$.isDir?"ico-dir":"ico-file"])},null,2),o("span",GE,i($.name),1)],42,WE))),128)),he.value.length===0?(l(),c("div",qE,i(s(v)("vsEmptyDir")),1)):M("",!0)],64))])])]),d.value?(l(),c("div",KE,[o("span",XE,i(s(v)("vsFileName")),1),xt(o("input",{ref_key:"nameInputRef",ref:Z,"onUpdate:modelValue":E[3]||(E[3]=$=>H.value=$),class:"fsp-input",placeholder:s(v)("vsFileNamePlaceholder"),onKeyup:bt(Oe,["enter"])},null,40,YE),[[Ot,H.value]]),xt(o("select",{"onUpdate:modelValue":E[4]||(E[4]=$=>C.value=$),class:"fsp-input fsp-select",title:s(v)("vsFileType")},[o("option",QE,i(s(v)("vsFilterAll")),1),_e.value?(l(),c("option",{key:0,value:_e.value},i(s(v)("vsFilterExt",{ext:_e.value})),9,ZE)):M("",!0)],8,JE),[[Vf,C.value]])])):M("",!0),d.value?(l(),c("div",{key:3,class:te(["fsp-hintline",{warn:ge.value}])},[ge.value?(l(),c(ie,{key:0},[de(i(s(v)("vsSaveAsExists")),1)],64)):(l(),c(ie,{key:1},[de(i(ne.value||s(v)("vsSaveAsHint")),1)],64))],2)):M("",!0),d.value?M("",!0):(l(),c("div",eN,[xt(o("input",{"onUpdate:modelValue":E[5]||(E[5]=$=>b.value=$),class:"fsp-input",placeholder:s(v)("vsFolderPath"),onKeyup:bt(U,["enter"])},null,40,tN),[[Ot,b.value]]),o("button",{class:"fsp-btn sm",disabled:!b.value.trim(),onClick:U},i(s(v)("vsPickInput")),9,nN)]))])]),_:1},8,["modelValue","title"])}}}),lN={key:0,class:"vs-gitbar"},rN={class:"vs-gitbar-head"},cN=["title"],dN={class:"vs-gitbar-title"},uN={key:0,class:"vs-gitbar-count"},fN=["title"],pN={class:"vs-gitbar-list"},hN={key:0,class:"vs-gitbar-empty"},vN={key:1,class:"vs-gitbar-empty"},mN=["title","onClick"],gN=["width"],yN=["x1","x2","stroke"],wN=["x1","x2","y2","stroke"],bN=["x1","y1","x2","stroke"],kN=["d","stroke"],xN=["cx","cy","r","fill","stroke"],_N={key:1,class:"vs-gitbar-dot","aria-hidden":"true"},CN={class:"vs-gitbar-subject"},SN={key:2,class:"vs-gitbar-refs"},$N={class:"vs-gitbar-meta"},TN={key:0,class:"vs-gitbar-files"},EN={key:0,class:"vs-gitbar-empty"},NN={key:0,class:"vs-gitbar-empty"},DN=["title"],RN={class:"name"},AN={class:"dir"},MN=["title","onClick"],as=24,zs=6,PN=vt({__name:"VSGitBar",emits:["open-diff"],setup(t,{emit:e}){const n=tr(Ma)??Nr(),a=g(null),r=I(()=>a.value!==null),d=g(""),h=g(""),u=g([]),p=g(!1);function w(W){return W*$s+$s/2}function b(W,J){const B=as/2,ee=as*.82;return`M ${w(W)} ${B} C ${w(W)} ${ee}, ${w(J)} ${ee}, ${w(J)} ${as}`}function k(W){return W.commit.refs.some(J=>J.kind==="head")}const F=I(()=>a.value==="git"?Mu(u.value).map(W=>({commit:W.commit,graph:W})):u.value.map(W=>({commit:W}))),L=g(""),D=gt({}),z=gt({});function H(W){return D[W]??[]}function C(W){const J=Math.max(W.lastIndexOf("/"),W.lastIndexOf("\\"));return J>=0?W.slice(J+1):W}function Z(W){const J=Math.max(W.lastIndexOf("/"),W.lastIndexOf("\\"));return J>=0?W.slice(0,J):""}function G(W){if(L.value===W.hash){L.value="";return}L.value=W.hash,be(W)}const R=e;async function ue(W,J){let B=[];try{if(a.value==="git"){const ee=await Go(d.value,["show","--no-color","--format=",W.hash,"--",J.path]);B=ee.code===0&&ee.stdout.trim()?ee.stdout.split(`
`):[]}else B=await V(W.hash,J.path)}catch{B=[]}R("open-diff",{title:`${C(J.path)} · ${W.short}`,lines:B})}async function V(W,J){const B=W.replace(/^r/,""),ee=await Qt(d.value,["diff","-c",B,"--","^"+J]);return ee.code===0&&ee.stdout.trim()?ee.stdout.split(`
`):[]}async function he(W){if(!(D[W.hash]||z[W.hash])){z[W.hash]=!0;try{const J=await Go(d.value,["diff-tree","--no-commit-id","--name-status","-r","--root",W.hash]);D[W.hash]=J.code===0?_e(J.stdout):[]}catch{D[W.hash]=[]}finally{z[W.hash]=!1}}}function _e(W){const J=[];for(const B of W.split(`
`)){if(!B.trim())continue;const ee=B.split("	");ee.length<2||J.push({status:ee[0][0]??"?",path:ee[ee.length-1]})}return J}function ge(W){const J=[];try{new DOMParser().parseFromString(W,"application/xml").querySelectorAll("logentry").forEach(ee=>{const ye=[];ee.querySelectorAll("paths > path").forEach(ke=>{const Ye=ke.getAttribute("action"),st=ke.textContent;st&&ye.push({status:Ye??"",path:st})});const ze="r"+(ee.getAttribute("revision")??""),Ke=ee.querySelector("author")?.textContent??"—",Ze=ee.querySelector("date")?.textContent??"",we=ee.querySelector("msg")?.textContent??"";D[ze]=ye,J.push({hash:ze,short:ze,author:Ke,email:"",ts:Ze?Math.floor(new Date(Ze).getTime()/1e3):0,date:Ze?new Date(Ze).toLocaleString():"",subject:(we.split(`
`)[0]??"").trim()||ze,parents:[],refs:[]})})}catch{}return J}let ne=0;async function ae(){if(!a.value||!d.value)return;const W=++ne,J=a.value,B=d.value;p.value=!0;try{if(J==="git"){const ee=await Go(B,["log","--max-count=30",`--pretty=format:${Ol}`]);if(W!==ne)return;u.value=ee.code===0?Il(ee.stdout):[]}else{const ee=await Qt(B,["log","--xml","-v","-l","30"]);if(W!==ne)return;u.value=ee.code===0?ge(ee.stdout):[]}}catch{if(W!==ne)return;u.value=[]}finally{W===ne&&(p.value=!1)}}let Te=0;async function je(){const W=++Te,J=n.state.projectDir;if(!J||!_a(J)){a.value=null,u.value=[];return}p.value=!0,L.value="",u.value=[];for(const B of Object.keys(D))delete D[B];try{const B=await ei(J);if(W!==Te)return;if(B.inRepo&&B.repo)a.value="git",d.value=B.repo,h.value=B.branch||"HEAD";else{const ee=await ps(J);if(W!==Te)return;ee.inRepo&&ee.root&&ee.svnAvailable?(a.value="svn",d.value=ee.root,h.value=ee.revision?"r"+ee.revision:"svn"):(a.value=null,u.value=[])}}catch{if(W!==Te)return;a.value=null,u.value=[]}finally{W===Te&&(p.value=!1)}a.value&&ae()}async function be(W){if(a.value==="git")return he(W)}Je(()=>n.state.projectDir,()=>{je()},{immediate:!0});async function Ae(){Cs("git"),Cs("svn"),await je(),a.value&&ae()}return(W,J)=>r.value?(l(),c("div",lN,[o("div",rN,[m(se,{name:a.value==="svn"?"clock":"git",size:12},null,8,["name"]),o("span",{class:te(["vs-gitbar-branch",{detached:a.value==="svn"}]),title:d.value},i(h.value),11,cN),o("span",dN,i(a.value==="svn"?"SVN · "+s(v)("vsGitHistory"):s(v)("vsGitHistory")),1),u.value.length?(l(),c("span",uN,i(u.value.length),1)):M("",!0),J[0]||(J[0]=o("span",{class:"vs-gitbar-fill"},null,-1)),o("button",{class:"vs-gitbar-act",title:s(v)("vsGitRefresh"),onClick:Ae},[m(se,{name:"refresh",size:12,class:te({spin:p.value})},null,8,["class"])],8,fN)]),o("div",pN,[p.value&&!F.value.length?(l(),c("div",hN,i(s(v)("vsLoading")),1)):F.value.length?(l(!0),c(ie,{key:2},Pe(F.value,B=>(l(),c(ie,{key:B.commit.hash},[o("div",{class:te(["vs-gitbar-row",{open:L.value===B.commit.hash}]),title:B.commit.subject,onClick:ee=>G(B.commit)},[B.graph?(l(),c("span",{key:0,class:"vs-gitbar-lanes",style:kt({width:`${Math.min(B.graph.width,zs)*s($s)}px`})},[(l(),c("svg",{width:Math.min(B.graph.width,zs)*s($s),height:as,"aria-hidden":"true"},[(l(!0),c(ie,null,Pe(B.graph.through.filter(ee=>ee.lane<zs),(ee,ye)=>(l(),c("line",{key:"t"+ye,x1:w(ee.lane),y1:0,x2:w(ee.lane),y2:as,stroke:s(Xn)(ee.color)},null,8,yN))),128)),B.graph.topLine&&B.graph.lane<zs?(l(),c("line",{key:0,x1:w(B.graph.lane),y1:0,x2:w(B.graph.lane),y2:as/2,stroke:s(Xn)(B.graph.laneColor)},null,8,wN)):M("",!0),(l(!0),c(ie,null,Pe(B.graph.bends.filter(ee=>ee.from<zs&&ee.to<zs),(ee,ye)=>(l(),c(ie,{key:"b"+ye},[ee.from===ee.to?(l(),c("line",{key:0,x1:w(ee.from),y1:as/2,x2:w(ee.to),y2:as,stroke:s(Xn)(ee.color)},null,8,bN)):(l(),c("path",{key:1,d:b(ee.from,ee.to),fill:"none",stroke:s(Xn)(ee.color)},null,8,kN))],64))),128)),B.graph.lane<zs?(l(),c("circle",{key:1,cx:w(B.graph.lane),cy:as/2,r:k(B.graph)?4:3,fill:s(Xn)(B.graph.laneColor),stroke:k(B.graph)?"var(--dsh-bg, #0d1117)":"none","stroke-width":"1.5"},null,8,xN)):M("",!0)],8,gN))],4)):(l(),c("span",_N)),o("span",CN,i(B.commit.subject),1),B.commit.refs.length?(l(),c("span",SN,[(l(!0),c(ie,null,Pe(B.commit.refs,ee=>(l(),c("span",{key:ee.kind+ee.label,class:te(["vs-gitbar-ref","rf-"+ee.kind])},i(ee.label),3))),128))])):M("",!0),o("span",$N,i(B.commit.author),1)],10,mN),L.value===B.commit.hash?(l(),c("div",TN,[z[B.commit.hash]?(l(),c("div",EN,i(s(v)("vsLoading")),1)):(l(),c(ie,{key:1},[H(B.commit.hash).length?M("",!0):(l(),c("div",NN,i(s(v)("gitCommitNoFiles")),1)),(l(!0),c(ie,null,Pe(H(B.commit.hash),(ee,ye)=>(l(),c("div",{key:ye,class:"vs-gitbar-file",title:ee.path},[o("span",{class:te(["st","s-"+ee.status.toLowerCase()])},i(ee.status),3),m(se,{name:"fileText",size:11}),o("span",RN,i(C(ee.path)),1),o("span",AN,i(Z(ee.path)),1),o("button",{class:"vs-gitbar-act vs-gitbar-file-open",title:s(v)("vsGitFileDiff"),onClick:xe(ze=>ue(B.commit,ee),["stop"])},[m(se,{name:"fileOut",size:11})],8,MN)],8,DN))),128))],64))])):M("",!0)],64))),128)):(l(),c("div",vN,i(s(v)("gitLogEmpty")),1))])])):M("",!0)}}),FN=_t(PN,[["__scopeId","data-v-955f5249"]]),Wu="dsh-file-workbench.vscode.search.prefs",al={caseSensitive:!1,wholeWord:!1,regex:!1,preserveCase:!0,viewMode:"list",replaceOpen:!1,advancedOpen:!1};function LN(){try{const t=localStorage.getItem(Wu);return t?{...al,...JSON.parse(t)}:{...al}}catch{return{...al}}}function ON(){return{q:"",include:"",exclude:"",replacement:"",outcome:null,searched:!1}}const ql=gt(LN()),Kl=gt(new Map);function IN(t,e){ql[t]=e;try{localStorage.setItem(Wu,JSON.stringify(ql))}catch{}}function Gu(t){let e=Kl.get(t);return e||(e=ON(),Kl.set(t,e)),e}function VN(t,e){const n=Gu(t);Object.assign(n,e)}function zN(t){Kl.delete(t)}function jN(){return{prefs:ql,setPref:IN,getProject:Gu,saveProject:VN,clearProject:zN}}const BN={class:"vs-sp"},UN={class:"vs-sp-titlebar"},HN={class:"vs-sp-title"},WN={class:"vs-sp-actions"},GN=["title"],qN=["title","disabled"],KN=["title","disabled"],XN=["title","disabled"],YN=["title","disabled"],JN={class:"vs-sp-head"},QN={class:"vs-sp-inputwrap"},ZN=["placeholder"],e8=["title"],t8=["title"],n8=["title"],s8=["title"],o8={key:0,class:"vs-sp-inputwrap vs-sp-replacerow"},i8=["placeholder","onKeydown"],a8=["title"],l8=["title","disabled"],r8={key:0,class:"vs-sp-adv"},c8={class:"vs-sp-field"},d8={class:"vs-sp-field-label"},u8=["placeholder","title"],f8={class:"vs-sp-field"},p8={class:"vs-sp-field-label"},h8=["placeholder","title"],v8={key:1,class:"vs-sp-summary"},m8={key:0,class:"vs-sp-trunc"},g8={key:1,class:"vs-sp-trunc"},y8={key:2,class:"vs-sp-trunc"},w8={key:2,class:"vs-sp-list"},b8=["title","onClick"],k8={class:"vs-sp-name"},x8={class:"vs-sp-dir"},_8={class:"vs-sp-count"},C8=["title","onClick"],S8={class:"vs-sp-ln"},$8={class:"vs-sp-text"},T8={key:0},E8=["title","onClick"],N8={class:"vs-sp-name"},D8={class:"vs-sp-count"},R8=["title","onClick"],A8={class:"vs-sp-name"},M8={class:"vs-sp-count"},P8=["title","onClick"],F8={class:"vs-sp-ln"},L8={class:"vs-sp-text"},O8={key:0},I8=vt({__name:"VSSearchPanel",props:{projectDir:{}},emits:["open"],setup(t,{emit:e}){const n=t,a=e,r=jN(),{prefs:d}=r,h=r.getProject(n.projectDir),u=g(h.q),p=g(h.include),w=g(h.exclude),b=g(h.replacement),k=g(h.outcome),F=g(h.searched),L=g(d.caseSensitive),D=g(d.wholeWord),z=g(d.regex),H=g(d.preserveCase),C=g(d.viewMode),Z=g(d.replaceOpen),G=g(d.advancedOpen),R=g(!1),ue=g(!1),V=g(new Set),he=g(new Set(""));let _e=0,ge=0;const ne=I(()=>u.value.trim().length>=2),ae=I(()=>!!k.value&&k.value.files.length>0),Te=I(()=>ne.value&&ae.value&&b.value.length>0&&!Wt(n.projectDir));function je(){return{path:n.projectDir,caseSensitive:L.value,regex:z.value,wholeWord:D.value,include:p.value.trim()||void 0,exclude:w.value.trim()||void 0}}async function be(){const Oe=++_e;if(!ne.value){k.value=null,F.value=!1,R.value=!1,Ae();return}R.value=!0;try{const U=await Dp(u.value.trim(),je());if(Oe!==_e)return;k.value=U,F.value=!0,V.value=new Set(U.files.length<=8?U.files.map(P=>P.rel):[])}catch{Oe===_e&&(k.value=null,F.value=!0)}finally{Oe===_e&&(R.value=!1,Ae())}}function Ae(){n.projectDir&&r.saveProject(n.projectDir,{q:u.value,include:p.value,exclude:w.value,replacement:b.value,outcome:k.value,searched:F.value})}function W(){ge&&window.clearTimeout(ge),ge=window.setTimeout(()=>void be(),300)}function J(){L.value=!L.value,r.setPref("caseSensitive",L.value),F.value&&be()}function B(){D.value=!D.value,r.setPref("wholeWord",D.value),F.value&&be()}function ee(){z.value=!z.value,r.setPref("regex",z.value),F.value&&be()}function ye(){C.value=C.value==="list"?"tree":"list",r.setPref("viewMode",C.value)}function ze(){H.value=!H.value,r.setPref("preserveCase",H.value)}function Ke(){Z.value=!Z.value,r.setPref("replaceOpen",Z.value)}function Ze(){G.value=!G.value,r.setPref("advancedOpen",G.value)}function we(){const Oe=k.value;if(Oe)if(C.value==="list")V.value=new Set(Oe.files.map(U=>U.rel));else{const U=new Set("");for(const P of Oe.files)Ye(U,P.rel);he.value=U}}function ke(){C.value==="list"?V.value=new Set:he.value=new Set("")}function Ye(Oe,U){const P=U.split("/");for(let Q=1;Q<P.length;Q++)Oe.add(P.slice(0,Q).join("/"))}function st(Oe){const U=new Set(he.value);U.has(Oe)?U.delete(Oe):U.add(Oe),he.value=U}const pe=I(()=>{const Oe=k.value;if(!Oe||C.value!=="tree")return[];const U={name:"",path:"",dirs:new Map,files:[],count:0};for(const Ee of Oe.files){const O=Ee.rel.split("/"),E={name:O[O.length-1],rel:Ee.rel,count:Ee.hits.length};let K=U;K.count+=Ee.hits.length;for(let $=0;$<O.length-1;$++){const q=O[$],Ne=K.path?`${K.path}/${q}`:q;let re=K.dirs.get(q);re||(re={name:q,path:Ne,dirs:new Map,files:[],count:0},K.dirs.set(q,re)),K=re,K.count+=Ee.hits.length}K.files.push(E)}const P=[],Q=(Ee,O)=>{const E=he.value.has(Ee.path);if(O>0&&P.push({kind:"dir",path:Ee.path,name:Ee.name,depth:O,count:Ee.count,open:E}),!(!E&&O>0)){for(const K of[...Ee.dirs.values()].sort(($,q)=>$.name.localeCompare(q.name)))Q(K,O+1);for(const K of[...Ee.files].sort(($,q)=>$.name.localeCompare(q.name)))P.push({kind:"file",path:K.rel,name:K.name,dir:it(K.rel),depth:O,count:K.count,open:V.value.has(K.rel)})}};return Q(U,0),P});function Ce(){ge&&window.clearTimeout(ge),_e++,u.value="",b.value="",p.value="",w.value="",k.value=null,F.value=!1,R.value=!1,V.value=new Set,he.value=new Set(""),r.clearProject(n.projectDir)}function qe(Oe){const U=new Set(V.value);U.has(Oe)?U.delete(Oe):U.add(Oe),V.value=U}function ce(Oe){return k.value?.files.find(U=>U.rel===Oe)?.hits??[]}async function Ve(){if(!Te.value||ue.value)return;const Oe=k.value;if(!Oe)return;const U=Oe.total,P=Oe.files.length,Q=v("vsReplaceConfirm",{files:String(P),n:String(U),q:u.value.trim(),r:b.value});if(window.confirm(Q)){ue.value=!0;try{const Ee=await ud(u.value.trim(),b.value,{scope:n.projectDir,caseSensitive:L.value,regex:z.value,wholeWord:D.value,preserveCase:H.value,include:p.value.trim()||void 0,exclude:w.value.trim()||void 0});Ee.replacements>0?Y("ok",v("vsReplaceDone",{files:String(Ee.files),n:String(Ee.replacements)})):Y("info",v("vsReplaceNone")),await be()}catch(Ee){console.warn("[dsh-file-workbench] replace failed:",Ee)}finally{ue.value=!1}}}function rt(Oe){const U=r.getProject(Oe);u.value=U.q,p.value=U.include,w.value=U.exclude,b.value=U.replacement,k.value=U.outcome,F.value=U.searched,V.value=new Set,he.value=new Set("")}Je(()=>n.projectDir,Oe=>rt(Oe)),cn(()=>{Ae(),ne.value&&!k.value&&be()}),Mt(()=>{ge&&window.clearTimeout(ge)});function yt(Oe){const U=u.value.trim();if(!U)return[{t:Oe,hit:!1}];let P;try{P=z.value?U:U.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}catch{return[{t:Oe,hit:!1}]}D.value&&(P=`(?<![\\p{L}\\p{N}_])${P}(?![\\p{L}\\p{N}_])`);let Q;try{Q=new RegExp(P,L.value?"gu":"giu")}catch{return[{t:Oe,hit:!1}]}const Ee=[];let O=0;for(const E of Oe.matchAll(Q))if(E.index>O&&Ee.push({t:Oe.slice(O,E.index),hit:!1}),Ee.push({t:E[0]||U,hit:!0}),O=E.index+(E[0]?.length||U.length),E[0]==="")break;return O<Oe.length&&Ee.push({t:Oe.slice(O),hit:!1}),Ee}const dt=Oe=>Oe.slice(Oe.lastIndexOf("/")+1),it=Oe=>{const U=Oe.lastIndexOf("/");return U<0?"":Oe.slice(0,U)};return(Oe,U)=>(l(),c("div",BN,[o("div",UN,[o("span",HN,i(s(v)("vsSearchTitle")),1),o("div",WN,[o("button",{class:"vs-sp-act",title:s(v)("vsViewModeSwitchTitle"),onClick:ye},[m(se,{name:C.value==="list"?"sort":"folderOpen",size:13},null,8,["name"])],8,GN),o("button",{class:"vs-sp-act",title:s(v)("vsRefreshResults"),disabled:!ne.value,onClick:U[0]||(U[0]=P=>be())},[m(se,{name:"refresh",size:13})],8,qN),o("button",{class:"vs-sp-act",title:s(v)("vsExpandAll"),disabled:!ae.value,onClick:we},[m(se,{name:"chevronsDown",size:13})],8,KN),o("button",{class:"vs-sp-act",title:s(v)("vsCollapseAll"),disabled:!ae.value,onClick:ke},[m(se,{name:"chevronsUp",size:13})],8,XN),o("button",{class:"vs-sp-act",title:s(v)("vsClearAllResults"),disabled:!F.value&&!u.value,onClick:Ce},[m(se,{name:"close",size:13})],8,YN)])]),o("div",JN,[o("div",QN,[xt(o("input",{"onUpdate:modelValue":U[1]||(U[1]=P=>u.value=P),class:"vs-sp-input",placeholder:s(v)("vsGrepPlaceholder"),onKeydown:U[2]||(U[2]=bt(xe(P=>be(),["prevent"]),["enter"])),onInput:W},null,40,ZN),[[Ot,u.value]]),o("button",{class:te(["vs-sp-toggle",{on:L.value}]),title:s(v)("vsGrepCase"),onClick:J},[...U[8]||(U[8]=[o("span",null,"Aa",-1)])],10,e8),o("button",{class:te(["vs-sp-toggle",{on:D.value}]),title:s(v)("vsGrepWholeWord"),onClick:B},[...U[9]||(U[9]=[o("span",null,"ab",-1)])],10,t8),o("button",{class:te(["vs-sp-toggle",{on:z.value}]),title:s(v)("vsGrepRegex"),onClick:ee},[...U[10]||(U[10]=[o("span",null,".*",-1)])],10,n8),o("button",{class:te(["vs-sp-toggle",{on:Z.value}]),title:s(v)("vsToggleReplace"),onClick:Ke},[m(se,{name:"chevronRight",size:12,class:te(["vs-sp-replace-caret",{open:Z.value}])},null,8,["class"])],10,s8)]),Z.value?(l(),c("div",o8,[xt(o("input",{"onUpdate:modelValue":U[3]||(U[3]=P=>b.value=P),class:"vs-sp-input",placeholder:s(v)("vsGrepReplacePlaceholder"),onKeydown:bt(xe(Ve,["prevent"]),["enter"])},null,40,i8),[[Ot,b.value]]),o("button",{class:te(["vs-sp-toggle",{on:H.value}]),title:s(v)("vsReplacePreserveCase"),onClick:ze},[...U[11]||(U[11]=[o("span",null,"AB",-1)])],10,a8),o("button",{class:"vs-sp-btn-replaceall",title:s(v)("vsReplaceAll"),disabled:!Te.value||ue.value,onClick:Ve},[m(se,{name:"chevronsRight",size:13})],8,l8)])):M("",!0)]),o("div",{class:"vs-sp-divider",onClick:Ze},[m(se,{name:"chevronRight",size:11,class:te(["vs-sp-div-caret",{open:G.value}])},null,8,["class"])]),G.value?(l(),c("div",r8,[o("div",c8,[o("div",d8,[m(se,{name:"file",size:12}),o("span",null,i(s(v)("vsFilesToInclude")),1)]),xt(o("input",{"onUpdate:modelValue":U[4]||(U[4]=P=>p.value=P),class:"vs-sp-field-input",placeholder:s(v)("vsFilesToIncludePlaceholder"),title:s(v)("vsFilesToIncludeTitle"),onKeydown:U[5]||(U[5]=bt(xe(P=>be(),["prevent"]),["enter"])),onInput:W},null,40,u8),[[Ot,p.value]])]),o("div",f8,[o("div",p8,[m(se,{name:"gear",size:12}),o("span",null,i(s(v)("vsFilesToExclude")),1)]),xt(o("input",{"onUpdate:modelValue":U[6]||(U[6]=P=>w.value=P),class:"vs-sp-field-input",placeholder:s(v)("vsFilesToExcludePlaceholder"),title:s(v)("vsFilesToExcludeTitle"),onKeydown:U[7]||(U[7]=bt(xe(P=>be(),["prevent"]),["enter"])),onInput:W},null,40,h8),[[Ot,w.value]])])])):M("",!0),F.value?(l(),c("div",v8,[k.value?(l(),c(ie,{key:0},[o("span",null,i(s(v)("vsGrepSummary",{files:k.value.files.length,n:k.value.total})),1),k.value.truncated?(l(),c("span",m8,i(s(v)("vsGrepTruncated")),1)):M("",!0)],64)):R.value?(l(),c("span",g8,i(s(v)("vsLoading")),1)):(l(),c("span",y8,i(s(v)("vsGrepNoResult")),1))])):M("",!0),k.value?(l(),c("div",w8,[C.value==="list"?(l(!0),c(ie,{key:0},Pe(k.value.files,P=>(l(),c(ie,{key:P.rel},[o("div",{class:te(["vs-sp-file",{open:V.value.has(P.rel)}]),title:P.rel,onClick:Q=>qe(P.rel)},[m(se,{name:"chevronRight",size:11,class:"vs-sp-caret"}),m(se,{name:"fileText",size:12}),o("span",k8,i(dt(P.rel)),1),o("span",x8,i(it(P.rel)),1),o("span",_8,i(P.hits.length),1)],10,b8),V.value.has(P.rel)?(l(!0),c(ie,{key:0},Pe(P.hits,Q=>(l(),c("div",{key:P.rel+":"+Q.ln,class:"vs-sp-hit",title:s(v)("vsGrepOpenAt",{ln:Q.ln}),onClick:Ee=>a("open",P.rel,Q.ln)},[o("span",S8,i(Q.ln),1),o("span",$8,[(l(!0),c(ie,null,Pe(yt(Q.text),(Ee,O)=>(l(),c(ie,{key:O},[Ee.hit?(l(),c("mark",T8,i(Ee.t),1)):(l(),c(ie,{key:1},[de(i(Ee.t),1)],64))],64))),128))])],8,C8))),128)):M("",!0)],64))),128)):(l(!0),c(ie,{key:1},Pe(pe.value,P=>(l(),c(ie,{key:P.kind+":"+P.path},[P.kind==="dir"?(l(),c("div",{key:0,class:te(["vs-sp-file vs-sp-node",{open:P.open}]),style:kt({paddingLeft:8+(P.depth-1)*12+"px"}),title:P.path,onClick:Q=>st(P.path)},[m(se,{name:"chevronRight",size:11,class:"vs-sp-caret"}),m(se,{name:P.open?"folderOpen":"folder",size:12},null,8,["name"]),o("span",N8,i(P.name),1),o("span",D8,i(P.count),1)],14,E8)):(l(),c(ie,{key:1},[o("div",{class:te(["vs-sp-file vs-sp-node",{open:P.open}]),style:kt({paddingLeft:8+P.depth*12+"px"}),title:P.path,onClick:Q=>qe(P.path)},[m(se,{name:"chevronRight",size:11,class:"vs-sp-caret"}),m(se,{name:"fileText",size:12}),o("span",A8,i(P.name),1),o("span",M8,i(P.count),1)],14,R8),P.open?(l(!0),c(ie,{key:0},Pe(ce(P.path),Q=>(l(),c("div",{key:P.path+":"+Q.ln,class:"vs-sp-hit",style:kt({paddingLeft:26+P.depth*12+"px"}),title:s(v)("vsGrepOpenAt",{ln:Q.ln}),onClick:Ee=>a("open",P.path,Q.ln)},[o("span",F8,i(Q.ln),1),o("span",L8,[(l(!0),c(ie,null,Pe(yt(Q.text),(Ee,O)=>(l(),c(ie,{key:O},[Ee.hit?(l(),c("mark",O8,i(Ee.t),1)):(l(),c(ie,{key:1},[de(i(Ee.t),1)],64))],64))),128))])],12,P8))),128)):M("",!0)],64))],64))),128))])):M("",!0)]))}}),V8=_t(I8,[["__scopeId","data-v-0328b4ec"]]),z8=[{id:"find-references",name:"引用查找",version:"",description:"跟随光标选中词，在项目内查找全部引用并点击跳转",nameEn:"Find References",descriptionEn:"DSH file editor plugin: activity bar view that takes the word at the caret and finds all references in the project via /grep (whole-word), clicking a hit jumps there. Counterpart of VS Code Find All References.",code:`window.__ModuleLoader__.load({
	id: "dsh-fw.find-references",
	factory: (require) => {
		/**
		 * find-references.js — DSH 文件编辑器外部插件（纯 JS 单文件）。
		 *
		 * 宿主加载器执行 apply(ctx)。本插件不依赖任何宿主 ctx 服务——它只经文件编辑器
		 * 暴露到 window 上的**外部注入 API**（window.__dshFileWorkbenchVSCode__）注册一个
		 * Activity Bar 视图，因此 inject = []。
		 *
		 * 能力：在编辑器左栏放一个「引用查找」图标。点开即跟随当前光标处的单词（v1
		 * ctx.editor.getSelection），用工作台 host 的 /grep 接口在项目内做全词搜索，把命中
		 * 按文件分组列成可点击列表，点一条即在编辑器打开对应文件并跳到该行。对标 VS Code
		 * Shift+F12「Find All References」。
		 *
		 * 无 v1 / 无选区时降级为视图内一个输入框，手动输入要查的词——保证功能始终可用。
		 */

		/** 本插件用到的注入 API 命名空间与最小类型（避免引宿主类型包）。 */
		const API_KEY = "__dshFileWorkbenchVSCode__";
		/** host REST 前缀（与 workbench 一致）。 */
		const PREFIX = "/api/dsh-file-workbench";
		/** 本视图的稳定 id（带命名空间；同 id 覆盖，幂等支持热更新）。 */
		const VIEW_ID = "findReferences.view";
		/** CSS 命名空间前缀，避免与工作台 / 其他插件样式冲突。 */
		const NS = "dsh-fr";

		const inject = [];

		/**
		 * @param _ctx - 宿主根上下文（本插件不使用，仅满足加载器契约）。
		 */

		/* ------------------------------------------------------------------ 视图定义 */

		function buildView() {
		  return {
		    id: VIEW_ID,
		    title: { zh: "引用查找", en: "Find References" },
		    description: {
		      zh: "跟随光标选中词，在项目内查找全部引用并点击跳转",
		      en: "Follow the word at the caret and find all references in the project",
		    },
		    icon: "search",
		    order: 60,
		    // 未打开项目时没有可扫描的范围，隐藏图标。
		    when: (ctx) => !!ctx.projectDir,
		    mount(el, ctx) {
		      return mountView(el, ctx);
		    },
		  };
		}

		/** 挂载：渲染 UI + 绑定交互，返回清理函数。 */
		function mountView(el, ctx) {
		  el.classList.add(\`\${NS}-view\`);
		  el.innerHTML = \`
		    <div class="\${NS}-root">
		      <div class="\${NS}-head">
		        <input class="\${NS}-input" type="text" spellcheck="false" placeholder="输入或跟随光标取词…" />
		        <button class="\${NS}-btn" type="button">查找</button>
		      </div>
		      <div class="\${NS}-hint"></div>
		      <div class="\${NS}-results"></div>
		    </div>\`;

		  const input = el.querySelector(\`.\${NS}-input\`);
		  const btn = el.querySelector(\`.\${NS}-btn\`);
		  const hint = el.querySelector(\`.\${NS}-hint\`);
		  const results = el.querySelector(\`.\${NS}-results\`);

		  let runId = 0; // 竞态守卫：慢响应不得覆盖新查询
		  let offActive = null;

		  /** 从 v1 编辑器门面读取光标处的单词；不可用时返回 ""。 */
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
		      // 无选区：以光标为中心向两侧扩到单词边界。
		      const expanded = expandWord(text, from);
		      from = expanded.from;
		      to = expanded.to;
		    }
		    return text.slice(from, to).trim();
		  }

		  async function runSearch(termRaw) {
		    const term = (termRaw ?? "").trim();
		    if (!term) {
		      hint.textContent = "请输入或把光标放到一个标识符上。";
		      results.replaceChildren();
		      return;
		    }
		    if (!ctx.projectDir) {
		      hint.textContent = "请先打开一个项目目录。";
		      results.replaceChildren();
		      return;
		    }
		    const myRun = ++runId;
		    hint.textContent = \`正在项目内查找 “\${term}” …\`;
		    results.replaceChildren();
		    try {
		      const hits = await grep(term, ctx.projectDir);
		      if (myRun !== runId) return; // 已被更新的查询取代
		      renderResults(results, hits, term, ctx);
		      hint.textContent = hits.length
		        ? \`“\${term}” · 命中 \${hits.length} 处\`
		        : \`“\${term}” · 无匹配\`;
		    } catch (e) {
		      if (myRun !== runId) return;
		      hint.textContent = \`查找失败：\${e?.message ?? e}\`;
		    }
		  }

		  // 跟随光标：激活文件切换 / 首次进入时，取一次光标词填入输入框。
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

		  // v1：订阅激活文件变化，切文件时重新取光标词（不自动跑，仅填词，避免频繁全盘扫）。
		  if (typeof ctx.onDidChangeActiveFile === "function") {
		    offActive = ctx.onDidChangeActiveFile(() => {
		      const w = wordAtCaret();
		      if (w) input.value = w;
		    });
		  }

		  // 首帧尝试跟随光标取词；取不到则留空待用户输入。
		  requestAnimationFrame(syncFromCaret);

		  return () => {
		    if (offActive) offActive();
		    el.replaceChildren();
		  };
		}

		/* ------------------------------------------------------------------ grep 调用 */

		/** 调 host /grep 做全词内容搜索，返回扁平命中数组。 */
		async function grep(term, dir) {
		  const params = new URLSearchParams({
		    q: term,
		    path: dir,
		    word: "1", // 全词
		    regex: "0",
		    case: "0",
		  });
		  const url = \`\${PREFIX}/grep?\${params.toString()}\`;
		  const res = await fetch(url, { headers: { Accept: "application/json" } });
		  if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
		  const body = await res.json().catch(() => null);
		  return normalizeHits(body, dir);
		}

		/**
		 * 归一化 /grep 载荷（{ ok, data: { files:[{ rel, hits:[{ ln, text }] }] } }）为 [{ file, line, text }]。
		 * rel 是相对搜索根的路径，拼回绝对路径以匹配编辑器 activeFile / openFile。
		 */
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
		          else push(file, h, ""); // inner 是纯行号数组
		        }
		      }
		    }
		  }
		  return flat;
		}

		/* ------------------------------------------------------------------ 结果渲染 */

		function renderResults(container, hits, term, ctx) {
		  if (!hits.length) {
		    container.replaceChildren();
		    return;
		  }
		  // 按文件分组，保持首次出现顺序。
		  const byFile = new Map();
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
		    chev.textContent = "\\u25be"; // ▾
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

		/** 点击一条命中：在工作台/编辑器中打开文件并跳到该行。 */
		function openAt(ctx, file, line) {
		  try {
		    const p = ctx.openFile(file, line ? { line } : undefined);
		    if (p && typeof p.catch === "function") p.catch(() => {});
		  } catch {
		    /* openFile 抛错时静默；面板已捕获主要错误路径 */
		  }
		}

		/** 把命中行里的 term 片段包成 <mark>（大小写不敏感，先转义再高亮）。 */
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

		/* ------------------------------------------------------------------ 小工具 */

		/** 从 pos 向两侧扩展到最近的非单词字符边界，得到光标所在单词区间。 */
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

		/** 轮询直到 predicate 成功（注入 API 可能晚于本 apply 就绪）。 */

		/* ------------------------------------------------------------------ 样式（注入一次，命名空间隔离） */

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

		function apply(_ctx) {
		  const api = typeof window !== "undefined" ? window.__dshFileWorkbenchVSCode__ : null;
		  if (api?.activityBar) api.activityBar.register(buildView());
		}
		return { apply, inject };
	}
});
`},{id:"bookmarks",name:"书签",version:"",description:"切换光标行书签、按项目持久化并点击跳转（gutter 圆点标记）",nameEn:"Bookmarks",descriptionEn:"DSH file editor plugin: activity bar view that toggles line bookmarks, lists current/all-project bookmarks and jumps to them. Uses v1 ctx.editor.createDecorations(category:bookmark) gutter marks + /persist per project. Counterpart of VS Code Bookmarks.",code:`window.__ModuleLoader__.load({
	id: "dsh-fw.bookmarks",
	factory: (require) => {
		/**
		 * bookmarks.js — DSH 文件编辑器外部插件（纯 JS 单文件）。
		 *
		 * 本插件不依赖宿主 ctx 服务，只经 window.__dshFileWorkbenchVSCode__ 注册一个 Activity Bar「书签」视图。
		 *
		 * 能力（对标 VS Code Bookmarks）：
		 *  - 切换当前光标行书签（视图顶部按钮）；
		 *  - 视图列出「当前文件」与「其它文件」两组书签，点击跳转、可逐条移除；
		 *  - 用 v1 ctx.editor.createDecorations(category:"bookmark") 在 gutter 打圆点标记当前文件书签；
		 *  - 按项目目录持久化到 host /plugin-data（key = dsh-fw.bookmarks.<hash(projectDir)>）。
		 *
		 * 书签以 { file, line } 存储（line 为 1 起始行号），列内偏移仅由当前缓冲文本即时算出——
		 * 因此编辑器内增删行导致的漂移不影响持久数据，重开文件仍能落到原行。
		 */

		const API_KEY = "__dshFileWorkbenchVSCode__";
		const PREFIX = "/api/dsh-file-workbench";
		const VIEW_ID = "bookmarks.view";
		const NS = "dsh-bm";

		const inject = [];


		/* ------------------------------------------------------------------ 跨挂载状态（模块级单例） */

		/** projectDir → [{ file, line }]。视图卸载/重挂不丢，热更新后仍在内存。 */
		const store = new Map();
		let currentCtx = null; // 最近一次 mount 的 ctx，供装饰刷新取当前编辑器
		let currentUi = null; // 最近一次 mount 的 UI 句柄，供操作后刷新列表

		/** 稳定字符串哈希（FNV-1a，32bit）：把任意项目路径压成安全 key 片段。 */
		function hashKey(s) {
		  let h = 0x811c9dc5;
		  for (let i = 0; i < s.length; i++) {
		    h ^= s.charCodeAt(i);
		    h = Math.imul(h, 0x01000193) >>> 0;
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
		    /* 读失败按空处理 */
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
		    body: JSON.stringify({ k: persistKey(dir), v: list }),
		  }).catch(() => {});
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

		/* ------------------------------------------------------------------ 视图定义 */

		function buildView() {
		  return {
		    id: VIEW_ID,
		    title: { zh: "书签", en: "Bookmarks" },
		    description: {
		      zh: "切换光标行书签、按项目持久化并点击跳转（gutter 圆点标记）",
		      en: "Toggle line bookmarks, persist per project, jump to them (gutter dots)",
		    },
		    icon: "bookmark",
		    order: 62,
		    when: (ctx) => !!ctx.projectDir,
		    mount(el, ctx) {
		      return mountView(el, ctx);
		    },
		  };
		}

		/* ------------------------------------------------------------------ 核心操作 */

		/** 当前光标所在行号（1 起始）；无编辑器/无文件返回 null。 */
		function caretLine(ed) {
		  if (!ed) return null;
		  const sel = typeof ed.getSelection === "function" ? ed.getSelection() : null;
		  const head = sel?.main?.head;
		  if (head == null) return null;
		  const view = ed.view;
		  if (!view) return null;
		  return view.state.doc.lineAt(head).number;
		}

		/** 切换当前激活文件·当前行的书签。 */
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
		  list.sort((a, b) => (sameFile(a.file, b.file) ? a.line - b.line : normPath(a.file).localeCompare(normPath(b.file))));
		  store.set(dir, list);
		  saveProject(dir);
		  applyDecos();
		  currentUi?.refresh();
		}

		/** 应用当前文件的 gutter 装饰（createDecorations/update）。 */
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

		/** 把某文件的书签行换算成 gutter 装饰条目（列固定行首）。 */
		function bookmarkItemsFor(ed, file) {
		  const dir = currentCtx?.projectDir;
		  const list = (store.get(dir) ?? []).filter((b) => sameFile(b.file, file));
		  const view = ed.view;
		  const doc = view?.state?.doc;
		  if (!doc) return [];
		  const max = doc.lines;
		  return list
		    .filter((b) => b.line >= 1 && b.line <= max)
		    .map((b) => ({ type: "gutter", start: { line: b.line, character: 1 }, category: "bookmark", message: \`书签 · 第 \${b.line} 行\` }));
		}

		/* ------------------------------------------------------------------ 挂载 UI */

		function mountView(el, ctx) {
		  el.classList.add(\`\${NS}-view\`);
		  el.innerHTML = \`
		    <div class="\${NS}-root">
		      <div class="\${NS}-bar">
		        <button class="\${NS}-toggle" type="button" title="切换当前行书签（光标所在行加/去书签）"><span class="\${NS}-star">★</span>切换当前行</button>
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
		        /* noop */
		      }
		    });
		    if (currentUi?.handle) {
		      try {
		        currentUi.handle.update([]);
		      } catch {
		        /* noop */
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
		  hint.textContent = total ? \`共 \${total} 个书签\${file ? \` · 当前文件 \${inCur} 个\` : ""}\` : "尚无书签：把光标放到一行，点上方按钮切换。";
		}

		function renderList(container, ctx, { onRemove }) {
		  const dir = ctx.projectDir;
		  const all = store.get(dir) ?? [];
		  const cur = ctx.activeFile;
		  const groups = [
		    { label: "当前文件", rows: cur ? all.filter((b) => sameFile(b.file, cur)) : [], showFile: false },
		    { label: "其它文件", rows: cur ? all.filter((b) => !sameFile(b.file, cur)) : all, showFile: true },
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
		          if (p && typeof p.catch === "function") p.catch(() => {});
		        } catch {
		          /* noop */
		        }
		      });
		      const rm = document.createElement("button");
		      rm.type = "button";
		      rm.className = \`\${NS}-rm\`;
		      rm.textContent = "×";
		      rm.title = "移除此书签";
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
		    empty.textContent = "（此位置无书签）";
		    frag.appendChild(empty);
		  }
		  container.replaceChildren(frag);
		}

		/* ------------------------------------------------------------------ 小工具 */


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

		function apply(_ctx) {
		  const api = typeof window !== "undefined" ? window.__dshFileWorkbenchVSCode__ : null;
		  if (api?.activityBar) api.activityBar.register(buildView());
		}
		return { apply, inject };
	}
});
`},{id:"linter",name:"外部诊断",version:"",description:"运行可配置 lint/tsc/node 命令，把诊断标成波浪线并列成可跳转问题面板",nameEn:"External Linter",descriptionEn:"DSH file editor plugin: activity bar view that runs user-configured commands (node --check/tsc/eslint…) to capture diagnostics, parses file:line:col message → v1 createDecorations squiggles + a jumpable problems panel. Counterpart of VS Code Problems/External Linter.",code:`window.__ModuleLoader__.load({
	id: "dsh-fw.linter",
	factory: (require) => {
		/**
		 * linter.js — DSH 文件编辑器外部插件（纯 JS 单文件）。
		 *
		 * 本插件不依赖宿主 ctx 服务，只经 window.__dshFileWorkbenchVSCode__ 注册一个 Activity Bar「外部诊断」视图。
		 *
		 * 能力（对标 VS Code Problems / External Linter）：
		 *  - 运行用户配置的命令（如 \`node --check app.js\`、\`npx tsc --noEmit\`、\`npx eslint .\`），
		 *    捕获 stdout+stderr；命令经 host \`POST /git/run { path:projectDir, args:[...] }\` 在**项目根**执行
		 *    （该端点同步返回 { code, stdout, stderr }，比交互式 exec-stream 更适合一次性取输出）；
		 *  - 按常见诊断格式解析出 file[:line[:col]] severity message（tsc/eslint-stylish/node/通用）；
		 *  - 用 v1 ctx.editor.createDecorations 把 error/warning 标成对应颜色波浪线（mark）；
		 *  - 面板按文件分组列出诊断，点击跳转并高亮该行区间；
		 *  - 每个项目的命令持久化到 /persist（key = dsh-fw.linter.<projectDir>）。
		 *
		 * 说明：本插件是「装饰通路 + 外部命令」的参考实现——不做语言服务器，纯靠可配置命令行工具，
		 * 契合工作台「零重依赖、复用现有 REST」的定位。
		 */

		const API_KEY = "__dshFileWorkbenchVSCode__";
		const PREFIX = "/api/dsh-file-workbench";
		const VIEW_ID = "linter.view";
		const NS = "dsh-ln";

		const inject = [];


		/* ------------------------------------------------------------------ 跨挂载状态 */

		/** projectDir → 命令字符串。 */
		const cmdByProject = new Map();
		/** projectDir → 归一化诊断数组 [{ file, line, col, severity, message }]。 */
		const problemsByProject = new Map();
		let currentCtx = null;
		let currentUi = null;

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
		    /* ignore */
		  }
		  cmdByProject.set(dir, cmd);
		  return cmd;
		}

		function saveCommand(dir, cmd) {
		  cmdByProject.set(dir, cmd);
		  fetch(\`\${PREFIX}/persist\`, {
		    method: "POST",
		    headers: { "Content-Type": "application/json" },
		    body: JSON.stringify({ k: persistKey(dir), v: cmd }),
		  }).catch(() => {});
		}

		/* ------------------------------------------------------------------ 视图定义 */

		function buildView() {
		  return {
		    id: VIEW_ID,
		    title: { zh: "外部诊断", en: "Problems" },
		    description: {
		      zh: "运行可配置 lint/tsc/node 命令，把诊断标成波浪线并列成可跳转问题面板",
		      en: "Run a configurable lint/tsc/node command; show squiggles + a jumpable problems panel",
		    },
		    icon: "warning",
		    order: 64,
		    when: (ctx) => !!ctx.projectDir,
		    mount(el, ctx) {
		      return mountView(el, ctx);
		    },
		  };
		}

		/* ------------------------------------------------------------------ 命令执行 */

		/** 把命令行串切成 argv（支持单/双引号包裹含空格参数）。 */
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

		/** 经 host /git/run 在项目根执行命令，返回合并输出文本。 */
		async function runCommand(dir, cmd) {
		  const args = tokenize(cmd);
		  if (!args.length) return "";
		  const res = await fetch(\`\${PREFIX}/git/run\`, {
		    method: "POST",
		    headers: { "Content-Type": "application/json" },
		    body: JSON.stringify({ path: dir, args }),
		  });
		  const body = await res.json().catch(() => null);
		  if (!body?.ok) throw new Error(body?.error || \`HTTP \${res.status}\`);
		  const d = body.data || {};
		  return \`\${d.stdout ?? ""}\\n\${d.stderr ?? ""}\`;
		}

		/* ------------------------------------------------------------------ 诊断解析 */

		const SEV_RE = /(error|warning|err|warn|info|note)/i;
		function sevFrom(s) {
		  const m = s && s.match(SEV_RE);
		  const k = m ? m[1].toLowerCase() : "";
		  if (k === "warning" || k === "warn") return "warning";
		  if (k === "info" || k === "note") return "info";
		  return "error";
		}

		/** 把相对路径按项目根解析为绝对路径（用于匹配编辑器 activeFile）。 */
		function toAbs(dir, file) {
		  const f = String(file).trim().replace(/^["']|["']$/g, "");
		  if (/^([a-zA-Z]:[\\\\/]|\\/|\\\\)/.test(f)) return f; // 已是绝对路径
		  const sep = /[\\\\/]/.test(dir) && dir.includes("\\\\") ? "\\\\" : "/";
		  return dir.replace(/[\\\\/]+$/, "") + sep + f.replace(/^[\\\\/]+/, "");
		}

		/** 解析命令输出为归一化诊断列表。多策略叠加，去重。 */
		function parseProblems(output, dir) {
		  const found = [];
		  const push = (file, line, col, severity, message) => {
		    const abs = toAbs(dir, file);
		    found.push({ file: abs, line: Number(line) || 0, col: Number(col) || 0, severity, message: String(message).trim() });
		  };

		  for (const raw of String(output).split(/\\r?\\n/)) {
		    const line = raw.trimEnd();
		    if (!line.trim()) continue;

		    // A) tsc: file(ts|js|...):(line,col): error TSxxxx: message
		    let m = line.match(/^(.+?\\.(?:ts|tsx|js|jsx|mjs|cjs|vue))\\((\\d+),(\\d+)\\):\\s+(error|warning)\\b[:\\s]*(.*)$/i);
		    if (m) {
		      push(m[1], m[2], m[3], sevFrom(m[4]), m[5]);
		      continue;
		    }
		    // B) node/python/generic: [at ]file:(line):col|message  —— 无显式 severity，默认 error
		    m = line.match(/^\\s*at\\s.*?\\((.+?):(\\d+):(\\d+)\\)/);
		    if (m) {
		      push(m[1], m[2], m[3], "error", line.trim());
		      continue;
		    }
		    // C) generic: file:line:col: severity message  或  file:line:col message
		    m = line.match(/^(.+?):(\\d+):(\\d+):\\s*(?:(error|warning|info|note)\\b[:\\s-]*)?(.*)$/i);
		    if (m && /\\.(ts|tsx|js|jsx|mjs|cjs|vue|css|scss|less|py|java|go|rs|php|rb|c|cpp|h|json)$/.test(m[1])) {
		      push(m[1], m[2], m[3], m[4] ? sevFrom(m[4]) : "error", m[5] || line.trim());
		      continue;
		    }
		    // D) file:line severity message（无列）
		    m = line.match(/^(.+?):(\\d+):\\s*(error|warning)\\b[:\\s-]*(.*)$/i);
		    if (m && /\\./.test(m[1])) {
		      push(m[1], m[2], 0, sevFrom(m[3]), m[4]);
		      continue;
		    }
		  }

		  // 去重（同 file/line/col/message）。
		  const seen = new Set();
		  const out = [];
		  for (const p of found) {
		    const key = \`\${normPath(p.file)}:\${p.line}:\${p.col}:\${p.message}\`;
		    if (seen.has(key)) continue;
		    seen.add(key);
		    out.push(p);
		  }
		  return out;
		}

		/* ------------------------------------------------------------------ 装饰应用 */

		function normPath(p) {
		  return String(p).replace(/\\\\/g, "/");
		}
		function sameFile(a, b) {
		  return normPath(a).toLowerCase() === normPath(b).toLowerCase();
		}

		/** 由当前缓冲文本算某行的起始偏移与长度。 */
		function lineRange(ed, lineNo) {
		  const doc = ed?.view?.state?.doc;
		  if (!doc || lineNo < 1 || lineNo > doc.lines) return null;
		  const ln = doc.line(lineNo);
		  return { from: ln.from, len: ln.text.length };
		}

		/** 把当前文件的诊断换算成 mark 装饰条目。 */
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

		/* ------------------------------------------------------------------ 挂载 UI */

		function mountView(el, ctx) {
		  el.classList.add(\`\${NS}-view\`);
		  el.innerHTML = \`
		    <div class="\${NS}-root">
		      <div class="\${NS}-bar">
		        <input class="\${NS}-cmd" type="text" spellcheck="false" placeholder="命令，如：node --check app.js ｜ npx tsc --noEmit ｜ npx eslint ." />
		        <button class="\${NS}-run" type="button">运行</button>
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
		      hint.textContent = "请先填写要运行的命令。";
		      return;
		    }
		    saveCommand(dir, cmd);
		    running = true;
		    runBtn.disabled = true;
		    hint.textContent = "正在运行…";
		    list.replaceChildren();
		    try {
		      const output = await runCommand(dir, cmd);
		      const problems = parseProblems(output, dir);
		      problemsByProject.set(dir, problems);
		      applyDecos();
		      renderList(list, ctx);
		      const errs = problems.filter((p) => p.severity === "error").length;
		      hint.textContent = problems.length
		        ? \`诊断 \${problems.length} 条（error \${errs}）· \${new Date().toLocaleTimeString()}\`
		        : \`无诊断（退出码见命令输出）· \${new Date().toLocaleTimeString()}\`;
		    } catch (e) {
		      hint.textContent = \`运行失败：\${e?.message ?? e}\`;
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
		    if (ctx.projectDir) cmdInput.value = (await loadCommand(ctx.projectDir)) || "";
		    refresh();
		  })();

		  return () => {
		    off.forEach((f) => {
		      try {
		        f();
		      } catch {
		        /* noop */
		      }
		    });
		    if (currentUi?.handle) {
		      try {
		        currentUi.handle.update([]);
		      } catch {
		        /* noop */
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
		    container.replaceChildren(empty("（暂无诊断，填命令后点「运行」）"));
		    return;
		  }
		  const byFile = new Map();
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
		    chev.textContent = "\\u25be"; // ▾
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
		          const pr = ctx.openFile(file, p.line ? { line: p.line } : undefined);
		          if (pr && typeof pr.catch === "function") pr.catch(() => {});
		        } catch {
		          /* noop */
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

		/* ------------------------------------------------------------------ 小工具 */


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

		function apply(_ctx) {
		  const api = typeof window !== "undefined" ? window.__dshFileWorkbenchVSCode__ : null;
		  if (api?.activityBar) api.activityBar.register(buildView());
		}
		return { apply, inject };
	}
});
`},{id:"todo-tree",name:"TODO 面板",version:"",description:"扫描项目内 TODO/FIXME/HACK 等标签，分组成可跳转列表并高亮当前文件",nameEn:"Todo Tree",descriptionEn:"DSH file editor plugin: activity bar view that scans TODO/FIXME/HACK/XXX (configurable) tags across the project via /grep into a grouped jumpable tree; highlights the active file with v1 createDecorations. Counterpart of VS Code Todo Tree.",code:`window.__ModuleLoader__.load({
	id: "dsh-fw.todo-tree",
	factory: (require) => {
		/**
		 * todo-tree.js — DSH 文件编辑器外部插件（纯 JS 单文件）。
		 *
		 * 本插件不依赖宿主 ctx 服务，只经 window.__dshFileWorkbenchVSCode__ 注册一个 Activity Bar「TODO」视图。
		 *
		 * 能力（对标 VS Code Todo Tree）：
		 *  - 用 host \`GET /grep\`（正则模式）扫描项目内 TODO/FIXME/HACK/XXX…标签（可配置）；
		 *  - 按文件分组列成树形面板，点击在编辑器打开并跳到该行；
		 *  - 当前打开文件里命中的 TODO 行用 v1 createDecorations 高亮底色 + gutter 圆点；
		 *  - 每个项目的标签集合持久化到 /plugin-data（key = dsh-fw.todo.<hash(projectDir)>）。
		 */

		const API_KEY = "__dshFileWorkbenchVSCode__";
		const PREFIX = "/api/dsh-file-workbench";
		const VIEW_ID = "todoTree.view";
		const NS = "dsh-td";
		const DEFAULT_TAGS = "TODO,FIXME,HACK,XXX";

		const inject = [];


		/* ------------------------------------------------------------------ 跨挂载状态 */

		/** projectDir → 标签串。 */
		const tagsByProject = new Map();
		/** projectDir → [{ file, line, text }]。 */
		const todosByProject = new Map();
		let currentCtx = null;
		let currentUi = null;

		/** 稳定字符串哈希（FNV-1a，32bit）：把任意项目路径压成安全 key 片段。 */
		function hashKey(s) {
		  let h = 0x811c9dc5;
		  for (let i = 0; i < s.length; i++) {
		    h ^= s.charCodeAt(i);
		    h = Math.imul(h, 0x01000193) >>> 0;
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
		    /* ignore */
		  }
		  tagsByProject.set(dir, tags);
		  return tags;
		}

		function saveTags(dir, tags) {
		  tagsByProject.set(dir, tags);
		  fetch(\`\${PREFIX}/plugin-data\`, {
		    method: "POST",
		    headers: { "Content-Type": "application/json" },
		    body: JSON.stringify({ k: persistKey(dir), v: tags }),
		  }).catch(() => {});
		}

		/* ------------------------------------------------------------------ 视图定义 */

		function buildView() {
		  return {
		    id: VIEW_ID,
		    title: { zh: "TODO 面板", en: "Todo Tree" },
		    description: {
		      zh: "扫描项目内 TODO/FIXME/HACK 等标签，分组成可跳转列表并高亮当前文件",
		      en: "Scan TODO/FIXME/HACK tags across the project into a jumpable tree; highlight current file",
		    },
		    icon: "tasks",
		    order: 70,
		    when: (ctx) => !!ctx.projectDir,
		    mount(el, ctx) {
		      return mountView(el, ctx);
		    },
		  };
		}

		/* ------------------------------------------------------------------ grep 扫描 */

		/** 把标签串拼成 /grep 的正则：词边界 + 大小写不敏感。 */
		function tagsToRegex(tags) {
		  const list = String(tags)
		    .split(/[,\\s]+/)
		    .map((t) => t.trim())
		    .filter(Boolean)
		    .map((t) => t.replace(/[.*+?^\${}()|[\\]\\\\]/g, "\\\\$&"));
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

		/** 兼容 /grep 载荷（{ ok, data: { files:[{ rel, hits:[{ ln, text }] }] } }），归一化为 [{ file, line, text }]。 */
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
		          else push(file, h, ""); // inner 是纯行号数组
		        }
		      }
		    }
		  }
		  return flat;
		}

		/** 把 /grep 的相对路径拼成绝对路径，供 openFile 与 activeFile 匹配。 */
		function joinRoot(dir, rel) {
		  const r = normPath(rel).replace(/^\\/+/, "");
		  const base = normPath(dir).replace(/\\/+$/, "");
		  return \`\${base}/\${r}\`;
		}

		/* ------------------------------------------------------------------ 装饰应用 */

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

		/* ------------------------------------------------------------------ 挂载 UI */

		function mountView(el, ctx) {
		  el.classList.add(\`\${NS}-view\`);
		  el.innerHTML = \`
		    <div class="\${NS}-root">
		      <div class="\${NS}-bar">
		        <input class="\${NS}-tags" type="text" spellcheck="false" placeholder="TODO,FIXME,HACK,XXX" />
		        <button class="\${NS}-scan" type="button">扫描</button>
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
		    hint.textContent = "正在扫描项目…";
		    tree.replaceChildren();
		    try {
		      const todos = await scan(dir, tags);
		      todosByProject.set(dir, todos);
		      applyDecos();
		      renderTree(tree, ctx);
		      hint.textContent = todos.length ? \`命中 \${todos.length} 条 · \${countFiles(todos)} 个文件\` : "未找到匹配的标签";
		    } catch (e) {
		      hint.textContent = \`扫描失败：\${e?.message ?? e}\`;
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
		    if (ctx.projectDir) tagsInput.value = (await loadTags(ctx.projectDir)) || DEFAULT_TAGS;
		    // 进入即扫一次，保证有内容可看。
		    if (ctx.projectDir) doScan();
		  })();

		  return () => {
		    off.forEach((f) => {
		      try {
		        f();
		      } catch {
		        /* noop */
		      }
		    });
		    if (currentUi?.handle) {
		      try {
		        currentUi.handle.update([]);
		      } catch {
		        /* noop */
		      }
		    }
		    if (currentCtx === ctx) currentCtx = null;
		    el.replaceChildren();
		  };
		}

		function countFiles(todos) {
		  const s = new Set();
		  for (const t of todos) s.add(normPath(t.file).toLowerCase());
		  return s.size;
		}

		function renderTree(container, ctx) {
		  const dir = ctx.projectDir;
		  const todos = todosByProject.get(dir) ?? [];
		  if (!todos.length) {
		    container.replaceChildren(emptyNode("（暂无结果，点「扫描」搜索项目）"));
		    return;
		  }
		  const byFile = new Map();
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
		    chev.textContent = "\\u25be"; // ▾
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
		          const p = ctx.openFile(file, r.line ? { line: r.line } : undefined);
		          if (p && typeof p.catch === "function") p.catch(() => {});
		        } catch {
		          /* noop */
		        }
		      });
		      wrap.appendChild(row);
		    }
		    group.appendChild(wrap);
		    frag.appendChild(group);
		  }
		  container.replaceChildren(frag);
		}

		/** 把行文本里的 TODO/FIXME 等标签包成彩色 span（简单起见按已知词高亮）。 */
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

		/* ------------------------------------------------------------------ 小工具 */


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

		function apply(_ctx) {
		  const api = typeof window !== "undefined" ? window.__dshFileWorkbenchVSCode__ : null;
		  if (api?.activityBar) api.activityBar.register(buildView());
		}
		return { apply, inject };
	}
});
`},{id:"gitlens-lite",name:"Git 追溯",version:"",description:"对当前文件 git blame，行尾幽灵注释 + 可跳转的作者/时间列表",nameEn:"GitLens-lite",descriptionEn:"DSH file editor plugin: activity bar view that runs git blame on the active file (via /git/run --porcelain), lists per-line author/time and jumps to the line; appends ghost annotations with v1 createDecorations widgets. Counterpart of VS Code GitLens inline blame.",code:`window.__ModuleLoader__.load({
	id: "dsh-fw.gitlens-lite",
	factory: (require) => {
		/**
		 * gitlens-lite.js — DSH 文件编辑器外部插件（纯 JS 单文件）。
		 *
		 * 本插件不依赖宿主 ctx 服务，只经 window.__dshFileWorkbenchVSCode__ 注册一个 Activity Bar「Git 追溯」视图。
		 *
		 * 能力（对标 VS Code GitLens inline blame）：
		 *  - 对当前打开文件跑 \`git blame --porcelain\`（经 host \`POST /git/run { path:projectDir, args }\`），
		 *    解析出**每一行**的提交作者 / 时间 / 摘要；
		 *  - 用 v1 ctx.editor.createDecorations 的 widget 在每行行尾追加淡灰幽灵注释（作者 · 日期）；
		 *  - 面板列出各行 blame 信息，点击跳到该行；顶部显示光标所在行的 blame 概要；
		 *  - 仅对 git 仓库内的文件生效；未保存新文件或不在仓库时安全降级为提示。
		 *
		 * 说明：blame 反映的是磁盘上的最后一次提交内容。若编辑器有未保存改动，行号可能与 HEAD 略有偏移，
		 * 幽灵注释仍按当前缓冲行号渲染——够用且零额外依赖。
		 */

		const API_KEY = "__dshFileWorkbenchVSCode__";
		const PREFIX = "/api/dsh-file-workbench";
		const VIEW_ID = "gitlens.view";
		const NS = "dsh-gl";

		const inject = [];


		/* ------------------------------------------------------------------ 跨挂载状态 */

		/** file(abs,norm) → Map<lineNo, {author, when, summary, sha}>。按文件缓存 blame，切回即现。 */
		const blameByFile = new Map();
		let currentCtx = null;
		let currentUi = null;

		/* ------------------------------------------------------------------ 视图定义 */

		function buildView() {
		  return {
		    id: VIEW_ID,
		    title: { zh: "Git 追溯", en: "GitLens-lite" },
		    description: {
		      zh: "对当前文件 git blame，行尾幽灵注释 + 可跳转的作者/时间列表",
		      en: "git blame the active file: inline ghost annotations + a jumpable author list",
		    },
		    icon: "commit",
		    order: 68,
		    when: (ctx) => !!ctx.projectDir,
		    mount(el, ctx) {
		      return mountView(el, ctx);
		    },
		  };
		}

		/* ------------------------------------------------------------------ 路径工具 */

		function normPath(p) {
		  return String(p).replace(/\\\\/g, "/");
		}
		function sameFile(a, b) {
		  return normPath(a).toLowerCase() === normPath(b).toLowerCase();
		}
		/** 相对项目根（posix 风格），供 git blame 参数。 */
		function relPath(dir, file) {
		  const d = normPath(dir).replace(/\\/+$/, "").toLowerCase();
		  const f = normPath(file);
		  if (f.toLowerCase().startsWith(d)) {
		    let r = f.slice(d.length).replace(/^\\/+/, "");
		    return r || ".";
		  }
		  return f; // 兜底：绝对路径 git 也能接受（若在仓库内）
		}

		/* ------------------------------------------------------------------ blame 获取 + 解析 */

		async function fetchBlame(dir, file) {
		  const rel = relPath(dir, file);
		  const res = await fetch(\`\${PREFIX}/git/run\`, {
		    method: "POST",
		    headers: { "Content-Type": "application/json" },
		    body: JSON.stringify({ path: dir, args: ["blame", "--porcelain", "--", rel] }),
		  });
		  const body = await res.json().catch(() => null);
		  if (!body?.ok) throw new Error(body?.error || \`HTTP \${res.status}\`);
		  const d = body.data || {};
		  if (d.code !== 0) throw new Error((d.stderr || "git blame 失败").trim().slice(0, 200));
		  return parsePorcelain(d.stdout || "", file);
		}

		/**
		 * 解析 \`git blame --porcelain\` 输出 → Map<finalLineNo, entry>。
		 * 结构：<sha> <orig> <final> [<numLines]>
		 *   author A / author-time T / committer … / summary S   （每个 header 块内，首见为准）
		 *   filename F
		 *   \\t<line text>                                        （porcelain 每条最终都带 \\t 内容行）
		 */
		function parsePorcelain(out, file) {
		  const map = new Map();
		  const lines = out.split(/\\r?\\n/);
		  let cur = null; // { sha, final, author, authorTime, summary }
		  for (const line of lines) {
		    if (line.startsWith("\\t")) {
		      if (cur && cur.final != null) {
		        map.set(cur.final, {
		          sha: cur.sha,
		          author: cur.author || "?",
		          when: cur.authorTime ? new Date(cur.authorTime * 1000) : null,
		          summary: cur.summary || "",
		          text: line.slice(1),
		          file,
		        });
		      }
		      cur = null;
		      continue;
		    }
		    const header = line.match(/^([0-9a-f]{40})\\s+(\\d+)\\s+(\\d+)/);
		    if (header) {
		      const sha = header[1];
		      if (cur && cur.sha === sha) {
		        // 同一提交的后续行：沿用已收集的元数据。
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
		    // filename / 其它键忽略。
		  }
		  return map;
		}

		/* ------------------------------------------------------------------ 装饰应用 */

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
		    const label = \`— \${e.author}\${e.when ? ", " + fmtDate(e.when) : ""}\`;
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

		/* ------------------------------------------------------------------ 挂载 UI */

		function mountView(el, ctx) {
		  el.classList.add(\`\${NS}-view\`);
		  el.innerHTML = \`
		    <div class="\${NS}-root">
		      <div class="\${NS}-bar">
		        <button class="\${NS}-refresh" type="button" title="对当前激活文件运行 git blame（行尾幽灵注释 + 可跳转列表）"><span>↻</span>追溯当前文件</button>
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
		      hint.textContent = "请先在编辑器中打开一个文件。";
		      clear();
		      return;
		    }
		    busy = true;
		    refreshBtn.disabled = true;
		    hint.textContent = "正在 git blame…";
		    try {
		      const blame = await fetchBlame(dir, file);
		      blameByFile.set(normPath(file).toLowerCase(), blame);
		      applyDecos();
		      render(file);
		      hint.textContent = blame.size ? \`\${baseName(file)} · \${blame.size} 行已追溯\` : \`\${baseName(file)} · 无 blame 结果\`;
		    } catch (e) {
		      hint.textContent = \`追溯失败：\${e?.message ?? e}（文件可能不在 git 仓库内或尚未提交）\`;
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
		      hint.textContent = \`\${baseName(file)} · \${cached.size} 行已追溯\`;
		    } else {
		      list.replaceChildren();
		      hint.textContent = file ? "此文件尚未追溯，点上方按钮运行 git blame。" : "无激活文件。";
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
		        /* noop */
		      }
		    });
		    if (currentUi?.handle) {
		      try {
		        currentUi.handle.update([]);
		      } catch {
		        /* noop */
		      }
		    }
		    if (currentCtx === ctx) currentCtx = null;
		    el.replaceChildren();
		  };
		}

		function renderList(container, ctx, file) {
		  const blame = blameByFile.get(normPath(file).toLowerCase());
		  if (!blame || !blame.size) {
		    container.replaceChildren(emptyNode("（无 blame 结果）"));
		    return;
		  }
		  const rows = [...blame.entries()].sort((a, b) => a[0] - b[0]);
		  const frag = document.createDocumentFragment();
		  for (const [lineNo, e] of rows) {
		    const row = document.createElement("button");
		    row.type = "button";
		    row.className = \`\${NS}-row\`;
		    row.innerHTML = \`<span class="\${NS}-lineno">\${lineNo}</span><span class="\${NS}-meta"></span><span class="\${NS}-sum"></span>\`;
		    row.querySelector(\`.\${NS}-meta\`).textContent = \`\${e.author}\${e.when ? " · " + fmtDate(e.when) : ""}\`;
		    row.querySelector(\`.\${NS}-sum\`).textContent = e.summary || "";
		    row.title = \`\${e.sha?.slice(0, 8) ?? ""} \${e.summary || ""}\`;
		    row.addEventListener("click", () => {
		      try {
		        const p = ctx.openFile(file, { line: lineNo });
		        if (p && typeof p.catch === "function") p.catch(() => {});
		      } catch {
		        /* noop */
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

		/* ------------------------------------------------------------------ 小工具 */


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

		function apply(_ctx) {
		  const api = typeof window !== "undefined" ? window.__dshFileWorkbenchVSCode__ : null;
		  if (api?.activityBar) api.activityBar.register(buildView());
		}
		return { apply, inject };
	}
});
`},{id:"outline",name:"大纲",version:"",description:"从当前缓冲提取函数/类/标题等符号，列表并点击跳转",nameEn:"Outline",descriptionEn:"DSH file editor plugin: activity bar view that extracts symbols (functions/classes/headings) from the active buffer and jumps to them, based on the dsh-file-workbench-lib v1 injection API (window.__dshFileWorkbenchVSCode__).",code:`window.__ModuleLoader__.load({
	id: "dsh-fw.outline",
	factory: (require) => {
		/**
		 * outline.js — DSH 文件编辑器外部插件（纯 JS 单文件）。
		 *
		 *
		 * 能力（对标 VS Code Outline，最小启发式版）：
		 *  - 读当前激活文件的**未保存缓冲区**，按扩展名选择符号提取规则；
		 *  - JS/TS：function / class / interface / type / enum / const 箭头函数 / export；
		 *    Python：def / class；Markdown：#~###### 标题；其它：尽力用通用正则；
		 *  - 面板按行号列出符号（带类型徽标），点击 openFile(line) 跳转；
		 *  - 随文档 / 激活文件变更刷新；无编辑器安全降级。
		 */

		const API_KEY = "__dshFileWorkbenchVSCode__";
		const VIEW_ID = "outline.view";
		const NS = "dsh-ol";

		const inject = [];


		let currentCtx = null;

		function buildView() {
		  return {
		    id: VIEW_ID,
		    title: { zh: "大纲", en: "Outline" },
		    description: {
		      zh: "从当前缓冲提取函数/类/标题等符号，列表并点击跳转",
		      en: "Extract symbols (functions/classes/headings) from the active buffer and jump to them",
		    },
		    icon: "viewList",
		    order: 63,
		    when: (ctx) => !!ctx.projectDir,
		    mount(el, ctx) {
		      return mountView(el, ctx);
		    },
		  };
		}

		/* ------------------------------------------------------------------ 符号提取 */

		// 每条规则：{ re, kind(匹配组索引→类型), name(组索引), lineMatch? }
		const JS_TS = [
		  { re: /^\\s*(?:export\\s+)?(?:default\\s+)?async\\s+function\\*?\\s+([A-Za-z_$][\\w$]*)/, kind: "function" },
		  { re: /^\\s*(?:export\\s+)?function\\*?\\s+([A-Za-z_$][\\w$]*)/, kind: "function" },
		  { re: /^\\s*(?:export\\s+)?class\\s+([A-Za-z_$][\\w$]*)/, kind: "class" },
		  { re: /^\\s*(?:export\\s+)?interface\\s+([A-Za-z_$][\\w$]*)/, kind: "interface" },
		  { re: /^\\s*(?:export\\s+)?type\\s+([A-Za-z_$][\\w$]*)\\s*=/, kind: "type" },
		  { re: /^\\s*(?:export\\s+)?enum\\s+([A-Za-z_$][\\w$]*)/, kind: "enum" },
		  { re: /^\\s*(?:export\\s+)?const\\s+([A-Za-z_$][\\w$]*)\\s*=\\s*(?:async\\s*)?\\(/, kind: "function" },
		  { re: /^\\s*(?:export\\s+)?const\\s+([A-Za-z_$][\\w$]*)\\s*=\\s*(?:async\\s*)?[A-Za-z_$][\\w$]*\\s*=>/, kind: "variable" },
		];
		const PY = [
		  { re: /^\\s*(?:async\\s+)?def\\s+([A-Za-z_]\\w*)/, kind: "function" },
		  { re: /^\\s*class\\s+([A-Za-z_]\\w*)/, kind: "class" },
		];
		const MD = [{ re: /^(#{1,6})\\s+(.*)$/, kind: "heading", heading: true }];

		function extKind(file) {
		  const f = String(file).toLowerCase();
		  if (/\\.(ts|tsx|js|jsx|mjs|cjs)$/.test(f)) return JS_TS;
		  if (/\\.py$/.test(f)) return PY;
		  if (/\\.(md|markdown)$/.test(f)) return MD;
		  return JS_TS; // 兜底：多数文本可试 TS 规则
		}

		/** 扫描缓冲全文，返回 [{ line, kind, name }]。 */
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
		      break; // 一行只认第一个匹配
		    }
		  }
		  return out;
		}

		const KIND_GLYPH = {
		  function: "ƒ",
		  class: "C",
		  interface: "I",
		  type: "T",
		  enum: "E",
		  variable: "v",
		  heading: "#",
		};

		/* ------------------------------------------------------------------ 渲染 */

		function renderList(container, ctx, syms) {
		  if (!syms.length) {
		    container.replaceChildren(emptyNode("未发现可展示的符号。"));
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
		    glyph.textContent = KIND_GLYPH[s.kind] || "•";
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
		        if (p && typeof p.catch === "function") p.catch(() => {});
		      } catch {
		        /* noop */
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

		/* ------------------------------------------------------------------ 挂载 UI */

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
		    titleEl.textContent = file ? baseName(file) : "无激活文件";
		    if (!ed || !file) {
		      hint.textContent = "";
		      list.replaceChildren(emptyNode("在编辑器打开一个文件以查看其大纲。"));
		      return;
		    }
		    const syms = extractSymbols(ed.getText?.() ?? "", file);
		    hint.textContent = syms.length ? \`\${syms.length} 个符号\` : "";
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
		        /* noop */
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

		/* ------------------------------------------------------------------ 小工具 */


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

		function apply(_ctx) {
		  const api = typeof window !== "undefined" ? window.__dshFileWorkbenchVSCode__ : null;
		  if (api?.activityBar) api.activityBar.register(buildView());
		}
		return { apply, inject };
	}
});
`},{id:"regex-highlight",name:"正则高亮",version:"",description:"对当前文件按正则高亮所有命中，列表 + prev/next 跳转",nameEn:"Regex Highlight",descriptionEn:"DSH file editor plugin: activity bar view that highlights all regex matches in the active file with a jump list, based on the dsh-file-workbench-lib v1 injection API (window.__dshFileWorkbenchVSCode__).",code:`window.__ModuleLoader__.load({
	id: "dsh-fw.regex-highlight",
	factory: (require) => {
		/**
		 * regex-highlight.js — DSH 文件编辑器外部插件（纯 JS 单文件）。
		 *
		 *
		 * 能力（对标 VS Code 的 find-with-regex，但独立于内置搜索、可叠加多组）：
		 *  - 输入正则 + flags（默认 g / 可选 i m），对**当前文件未保存缓冲区**逐行匹配；
		 *  - 用 v1 ctx.editor.createDecorations(category:"highlight") 精确覆盖每个命中区间；
		 *  - 面板列出命中（行:列 · 预览），点击跳到该行；顶部 prev/next 循环定位并 reveal；
		 *  - 随文档 / 激活文件变更实时重算；无编辑器或非法正则安全降级为提示。
		 */

		const API_KEY = "__dshFileWorkbenchVSCode__";
		const VIEW_ID = "regexHighlight.view";
		const NS = "dsh-rx";

		const inject = [];


		/* ------------------------------------------------------------------ 跨挂载状态 */

		let currentCtx = null;
		let currentUi = null; // { handle, refresh }
		/** 当前文件的命中列表：[{ line, from, to, text }]（from/to 为绝对 offset）。 */
		let matches = [];

		/* ------------------------------------------------------------------ 视图定义 */

		function buildView() {
		  return {
		    id: VIEW_ID,
		    title: { zh: "正则高亮", en: "Regex Highlight" },
		    description: {
		      zh: "对当前文件按正则高亮所有命中，列表 + prev/next 跳转",
		      en: "Highlight all regex matches in the active file with a jump list",
		    },
		    icon: "wand",
		    order: 61,
		    when: (ctx) => !!ctx.projectDir,
		    mount(el, ctx) {
		      return mountView(el, ctx);
		    },
		  };
		}

		/* ------------------------------------------------------------------ 匹配计算 */

		/** 在当前缓冲区上跑正则，返回 [{ line, from, to, text }]。抛错由上层捕获。 */
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
		        re.lastIndex++; // 零宽匹配防死循环
		        continue;
		      }
		      out.push({ line: ln, from: line.from + m.index, to: line.from + m.index + m[0].length, text: m[0] });
		      if (out.length >= 5000) return out; // 命中上限，防超大结果卡死
		    }
		  }
		  return out;
		}

		/** 把命中换算成 mark 装饰条目。 */
		function decoItems() {
		  return matches.map((h) => ({
		    type: "mark",
		    start: { offset: h.from },
		    end: { offset: h.to },
		    category: "highlight",
		    message: h.text,
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

		/** 重算并刷新装饰 + 列表。pattern 为空则清空。 */
		function rescan(cmdInput, flagsInput, hint, list) {
		  const pattern = cmdInput.value;
		  const flags = (flagsInput.value || "g").trim();
		  matches = [];
		  if (!pattern.trim()) {
		    applyDecos();
		    hint.textContent = "输入正则表达式以高亮当前文件的匹配。";
		    list.replaceChildren();
		    return;
		  }
		  try {
		    matches = computeMatches(pattern, flags);
		  } catch (e) {
		    hint.textContent = \`正则无效：\${e?.message ?? e}\`;
		    applyDecos();
		    list.replaceChildren();
		    return;
		  }
		  applyDecos();
		  hint.textContent = matches.length ? \`\${matches.length} 处命中 · 点条目或上方 ▲▼ 跳转\` : "无匹配";
		  renderList(list);
		}

		/* ------------------------------------------------------------------ 跳转 */

		function gotoMatch(idx) {
		  const h = matches[idx];
		  const ctx = currentCtx;
		  if (!h || !ctx) return;
		  const file = ctx.activeFile;
		  if (!file) return;
		  try {
		    const p = ctx.openFile(file, { line: h.line });
		    if (p && typeof p.catch === "function") p.catch(() => {});
		  } catch {
		    /* noop */
		  }
		}

		/* ------------------------------------------------------------------ 列表渲染 */

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

		/** 由绝对 offset 反推列号（1 起始）——仅用于展示。 */
		function offsetCol(offset) {
		  const doc = currentCtx?.editor?.view?.state?.doc;
		  if (!doc) return 0;
		  const line = doc.lineAt(offset);
		  return offset - line.from + 1;
		}

		/* ------------------------------------------------------------------ 挂载 UI */

		function mountView(el, ctx) {
		  el.classList.add(\`\${NS}-view\`);
		  el.innerHTML = \`
		    <div class="\${NS}-root">
		      <div class="\${NS}-bar">
		        <input class="\${NS}-cmd" type="text" spellcheck="false" placeholder="正则，如：\\\\bfoo\\\\w* ｜ console\\\\.\\\\w+" />
		        <input class="\${NS}-flags" type="text" spellcheck="false" value="g" title="flags：g/i/m…" />
		      </div>
		      <div class="\${NS}-nav">
		        <button class="\${NS}-prev" type="button" title="上一个命中">▲</button>
		        <button class="\${NS}-next" type="button" title="下一个命中">▼</button>
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
		    currentUi.handle = null; // 换文件：旧句柄作废，重新 create
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
		        /* noop */
		      }
		    });
		    if (currentUi?.handle) {
		      try {
		        currentUi.handle.update([]);
		      } catch {
		        /* noop */
		      }
		    }
		    matches = [];
		    if (currentCtx === ctx) currentCtx = null;
		    el.replaceChildren();
		  };
		}

		/* ------------------------------------------------------------------ 小工具 */


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

		function apply(_ctx) {
		  const api = typeof window !== "undefined" ? window.__dshFileWorkbenchVSCode__ : null;
		  if (api?.activityBar) api.activityBar.register(buildView());
		}
		return { apply, inject };
	}
});
`},{id:"json2interface",name:"JSON 转接口",version:"",description:"把当前 JSON 缓冲/选区推断成 TypeScript interface，可复制或插入",nameEn:"JSON → TS",descriptionEn:"DSH file editor plugin: activity bar view that infers a TypeScript interface from the active JSON buffer/selection, based on the dsh-file-workbench-lib v1 injection API (window.__dshFileWorkbenchVSCode__).",code:`window.__ModuleLoader__.load({
	id: "dsh-fw.json2interface",
	factory: (require) => {
		/**
		 * json2interface.js — DSH 文件编辑器外部插件（纯 JS 单文件）。
		 *
		 *
		 * 能力（对标 quicktype 的最小离线版）：
		 *  - 读当前激活文件的**未保存缓冲区**（要求是 JSON，或选区为 JSON 片段）；
		 *  - 推断 TypeScript interface 结构（对象/数组/基本类型/可空/嵌套命名），输出到面板；
		 *  - 「复制」写剪贴板，「插入到底部」把结果作为注释块追加进当前文件末尾（走 applyEdit，保留撤销栈）。
		 * 纯前端、无网络、无第三方依赖。
		 */

		const API_KEY = "__dshFileWorkbenchVSCode__";
		const VIEW_ID = "json2interface.view";
		const NS = "dsh-j2i";

		const inject = [];


		let currentCtx = null;

		function buildView() {
		  return {
		    id: VIEW_ID,
		    title: { zh: "JSON 转接口", en: "JSON → TS" },
		    description: {
		      zh: "把当前 JSON 缓冲/选区推断成 TypeScript interface，可复制或插入",
		      en: "Infer a TypeScript interface from the active JSON buffer/selection",
		    },
		    icon: "code",
		    order: 65,
		    when: (ctx) => !!ctx.projectDir,
		    mount(el, ctx) {
		      return mountView(el, ctx);
		    },
		  };
		}

		/* ------------------------------------------------------------------ JSON 取样 */

		/** 取候选 JSON 文本：优先非空选区，否则整份缓冲。 */
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

		/* ------------------------------------------------------------------ 类型推断 */

		function pascal(s) {
		  const cleaned = String(s).replace(/[^a-zA-Z0-9]+/g, " ").trim();
		  if (!cleaned) return "";
		  return cleaned
		    .split(/\\s+/)
		    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
		    .join("");
		}

		function singular(name) {
		  if (/ies$/i.test(name)) return name.replace(/ies$/i, "y");
		  if (/ses$/i.test(name)) return name.replace(/es$/i, "");
		  if (/s$/i.test(name) && !/ss$/i.test(name)) return name.replace(/s$/i, "");
		  return name;
		}

		/** 收集所有子对象结构，按字段签名去重生成 interface 名。 */
		function infer(value, rootName) {
		  const interfaces = new Map(); // name -> { fields:Map<key,typeStr>, }
		  const used = new Set();

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

		  /** 返回某值的 TS 类型字符串；对象会登记 interface 并返回其名。 */
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
		        interfaces.set(name, null); // 占位防自递归死循环
		        const fields = new Map();
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
		    // 联合类型加括号。
		    return inner.includes("|") ? \`(\${inner})[]\` : \`\${inner}[]\`;
		  }

		  const rootType = typeOf(value, rootName);
		  return { rootType, interfaces };
		}

		/** 渲染成 TS 源码文本。 */
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
		    // 根即某已生成 interface：补一个别名方便引用。
		    lines.unshift(\`export type \${pascal(rootName) || "Root"} = \${rootType};\`, "");
		  } else {
		    lines.unshift(\`export type \${pascal(rootName) || "Root"} = \${rootType};\`, "");
		  }
		  return lines.join("\\n").trim();
		}

		/* ------------------------------------------------------------------ 挂载 UI */

		function mountView(el, ctx) {
		  el.classList.add(\`\${NS}-view\`);
		  el.innerHTML = \`
		    <div class="\${NS}-root">
		      <div class="\${NS}-bar">
		        <button class="\${NS}-gen" type="button">从当前 JSON 生成</button>
		        <input class="\${NS}-name" type="text" spellcheck="false" placeholder="根类型名（可选）" />
		      </div>
		      <div class="\${NS}-hint"></div>
		      <pre class="\${NS}-out"></pre>
		      <div class="\${NS}-foot">
		        <button class="\${NS}-copy" type="button">复制</button>
		        <button class="\${NS}-insert" type="button">插入到文件底部</button>
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
		      hint.textContent = "无内容：请在编辑器打开一个 JSON 文件或选中一段 JSON。";
		      out.textContent = "";
		      lastText = "";
		      return;
		    }
		    let parsed;
		    try {
		      parsed = JSON.parse(raw);
		    } catch (e) {
		      hint.textContent = \`JSON 解析失败：\${e?.message ?? e}\`;
		      out.textContent = "";
		      lastText = "";
		      return;
		    }
		    const rootName = nameInput.value.trim() || deriveRootName(ctx.activeFile);
		    try {
		      lastText = renderTs(rootName, parsed);
		      out.textContent = lastText;
		      hint.textContent = \`已生成 · 根类型 \${pascal(rootName) || "Root"}\`;
		    } catch (e) {
		      hint.textContent = \`生成失败：\${e?.message ?? e}\`;
		      lastText = "";
		    }
		  }

		  genBtn.addEventListener("click", doGenerate);

		  copyBtn.addEventListener("click", async () => {
		    if (!lastText) return;
		    try {
		      await navigator.clipboard.writeText(lastText);
		      ctx.toast("ok", "已复制 interface 到剪贴板");
		    } catch {
		      ctx.toast("error", "复制失败（剪贴板不可用）");
		    }
		  });

		  insertBtn.addEventListener("click", () => {
		    if (!lastText) return;
		    const ed = ctx.editor;
		    const view = ed?.view;
		    if (!view) {
		      ctx.toast("error", "无激活编辑器");
		      return;
		    }
		    const len = view.state.doc.length;
		    const block = \`\\n\\n/* ---- generated by JSON→TS ---- */\\n\${lastText}\\n\`;
		    if (ed.applyEdit([{ from: len, insert: block }])) ctx.toast("ok", "已插入到文件底部");
		    else ctx.toast("error", "插入失败");
		  });

		  requestAnimationFrame(() => {
		    hint.textContent = "打开 JSON 文件（或选中 JSON 片段），点「生成」。";
		  });

		  return () => {
		    off.forEach((f) => {
		      try {
		        f();
		      } catch {
		        /* noop */
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

		/* ------------------------------------------------------------------ 小工具 */


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

		function apply(_ctx) {
		  const api = typeof window !== "undefined" ? window.__dshFileWorkbenchVSCode__ : null;
		  if (api?.activityBar) api.activityBar.register(buildView());
		}
		return { apply, inject };
	}
});
`},{id:"md-preview",name:"Markdown 预览",version:"",description:"把当前 Markdown 缓冲实时渲染成 HTML 预览（零依赖、已做转义）",nameEn:"Markdown Preview",descriptionEn:"DSH file editor plugin: activity bar view that live-renders the active Markdown buffer to HTML (dependency-free, escaped), based on the dsh-file-workbench-lib v1 injection API (window.__dshFileWorkbenchVSCode__).",code:`window.__ModuleLoader__.load({
	id: "dsh-fw.md-preview",
	factory: (require) => {
		/**
		 * md-preview.js — DSH 文件编辑器外部插件（纯 JS 单文件）。
		 *
		 *
		 * 能力（对标 VS Code Markdown Preview，最小离线版）：
		 *  - 读当前激活 .md 文件的**未保存缓冲区**，实时渲染到面板；
		 *  - 自带零依赖 markdown 子集解析器：标题 / 粗斜体 / 行内码 / 围栏代码块 / 引用 /
		 *    有序无序列表 / 链接 / 图片 / 分割线 / 段落；
		 *  - **全部文本先 HTML 转义**，仅放行受控标签，杜绝脚本注入；链接强制 http(s)/mailto；
		 *  - 随文档变更与激活文件切换刷新；非 .md 文件提示但仍尝试渲染。
		 */

		const API_KEY = "__dshFileWorkbenchVSCode__";
		const VIEW_ID = "mdPreview.view";
		const NS = "dsh-md";

		const inject = [];


		let currentCtx = null;

		function buildView() {
		  return {
		    id: VIEW_ID,
		    title: { zh: "Markdown 预览", en: "Markdown Preview" },
		    description: {
		      zh: "把当前 Markdown 缓冲实时渲染成 HTML 预览（零依赖、已做转义）",
		      en: "Live-render the active Markdown buffer to HTML (dependency-free, escaped)",
		    },
		    icon: "eye",
		    order: 66,
		    when: (ctx) => !!ctx.projectDir,
		    mount(el, ctx) {
		      return mountView(el, ctx);
		    },
		  };
		}

		/* ------------------------------------------------------------------ 转义 + 渲染 */

		function esc(s) {
		  return String(s)
		    .replace(/&/g, "&amp;")
		    .replace(/</g, "&lt;")
		    .replace(/>/g, "&gt;")
		    .replace(/"/g, "&quot;");
		}

		/** 只允许安全协议的链接 URL。 */
		function safeUrl(u) {
		  const t = String(u).trim();
		  if (/^(https?:|mailto:|#|\\/|\\.{1,2}\\/)/i.test(t)) return esc(t);
		  if (/^[\\w.-]+\\.[a-z]{2,}(\\/|$)/i.test(t)) return "https://" + esc(t); // 裸域名补协议
		  return "#";
		}

		/** 行内元素：在已转义文本上套用少量标记。顺序敏感——先保护行内码。 */
		function inline(text) {
		  let s = esc(text);
		  // 行内码 \`code\`
		  s = s.replace(/\`([^\`]+)\`/g, (_m, c) => \`<code>\${c}</code>\`);
		  // 图片 ![alt](url)
		  s = s.replace(/!\\[([^\\]]*)\\]\\(([^)\\s]+)(?:\\s+&quot;[^&]*&quot;)?\\)/g, (_m, alt, url) => \`<img alt="\${alt}" src="\${safeUrl(url)}">\`);
		  // 链接 [text](url)
		  s = s.replace(/\\[([^\\]]+)\\]\\(([^)\\s]+)(?:\\s+&quot;[^&]*&quot;)?\\)/g, (_m, txt, url) => \`<a href="\${safeUrl(url)}" target="_blank" rel="noopener noreferrer">\${txt}</a>\`);
		  // 粗体 **x** / __x__
		  s = s.replace(/\\*\\*([^*]+)\\*\\*/g, "<strong>$1</strong>").replace(/__([^_]+)__/g, "<strong>$1</strong>");
		  // 斜体 *x* / _x_
		  s = s.replace(/(^|[^*])\\*([^*\\n]+)\\*/g, "$1<em>$2</em>").replace(/(^|[^_])_([^_\\n]+)_/g, "$1<em>$2</em>");
		  // 删除线 ~~x~~
		  s = s.replace(/~~([^~]+)~~/g, "<del>$1</del>");
		  return s;
		}

		/** 块级解析：逐行扫描，处理围栏代码、标题、引用、列表、分割线、段落。 */
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

		    // 围栏代码块 \`\`\`lang
		    const fence = line.match(/^\\s*\`\`\`(\\w*)\\s*$/);
		    if (fence) {
		      flushPara();
		      const lang = fence[1];
		      const buf = [];
		      i++;
		      while (i < lines.length && !/^\\s*\`\`\`\\s*$/.test(lines[i])) buf.push(lines[i++]);
		      i++; // 跳过收尾 \`\`\`
		      out.push(\`<pre data-lang="\${esc(lang)}"><code>\${esc(buf.join("\\n"))}</code></pre>\`);
		      continue;
		    }

		    // ATX 标题
		    const h = line.match(/^(#{1,6})\\s+(.*)$/);
		    if (h) {
		      flushPara();
		      const lvl = h[1].length;
		      out.push(\`<h\${lvl}>\${inline(h[2])}</h\${lvl}>\`);
		      i++;
		      continue;
		    }

		    // 分割线
		    if (/^\\s*([-*_])(\\s*\\1){2,}\\s*$/.test(line)) {
		      flushPara();
		      out.push("<hr>");
		      i++;
		      continue;
		    }

		    // 引用块
		    if (/^\\s*>\\s?/.test(line)) {
		      flushPara();
		      const buf = [];
		      while (i < lines.length && /^\\s*>\\s?/.test(lines[i])) buf.push(lines[i++].replace(/^\\s*>\\s?/, ""));
		      out.push(\`<blockquote>\${render(buf.join("\\n"))}</blockquote>\`);
		      continue;
		    }

		    // 无序列表
		    if (/^\\s*[-*+]\\s+/.test(line)) {
		      flushPara();
		      const items = [];
		      while (i < lines.length && /^\\s*[-*+]\\s+/.test(lines[i])) items.push(lines[i++].replace(/^\\s*[-*+]\\s+/, ""));
		      out.push(\`<ul>\${items.map((t) => \`<li>\${inline(t)}</li>\`).join("")}</ul>\`);
		      continue;
		    }

		    // 有序列表
		    if (/^\\s*\\d+\\.\\s+/.test(line)) {
		      flushPara();
		      const items = [];
		      while (i < lines.length && /^\\s*\\d+\\.\\s+/.test(lines[i])) items.push(lines[i++].replace(/^\\s*\\d+\\.\\s+/, ""));
		      out.push(\`<ol>\${items.map((t) => \`<li>\${inline(t)}</li>\`).join("")}</ol>\`);
		      continue;
		    }

		    // 空行 → 段落边界
		    if (!line.trim()) {
		      flushPara();
		      i++;
		      continue;
		    }

		    // 普通段落行
		    para.push(line);
		    i++;
		  }
		  flushPara();
		  return out.join("\\n");
		}

		/* ------------------------------------------------------------------ 挂载 UI */

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
		    titleEl.textContent = file ? baseName(file) : "无激活文件";
		    if (!ed || !file) {
		      body.innerHTML = \`<div class="\${NS}-empty">在编辑器打开一个 .md 文件即可预览。</div>\`;
		      return;
		    }
		    if (!/\\.(md|markdown)$/i.test(file)) {
		      body.innerHTML = \`<div class="\${NS}-empty">当前文件不是 Markdown（仍按 Markdown 尝试渲染）。</div>\` + render(ed.getText?.() ?? "");
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
		        /* noop */
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

		/* ------------------------------------------------------------------ 小工具 */


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

		function apply(_ctx) {
		  const api = typeof window !== "undefined" ? window.__dshFileWorkbenchVSCode__ : null;
		  if (api?.activityBar) api.activityBar.register(buildView());
		}
		return { apply, inject };
	}
});
`},{id:"hex-viewer",name:"十六进制查看器",version:"",description:"以 offset/hex/ASCII 三栏查看当前激活文件的字节（只读）",nameEn:"Hex Viewer",descriptionEn:"DSH file editor plugin: activity bar view that inspects the active file as offset/hex/ASCII (read-only), based on the dsh-file-workbench-lib v1 injection API (window.__dshFileWorkbenchVSCode__).",code:`window.__ModuleLoader__.load({
	id: "dsh-fw.hex-viewer",
	factory: (require) => {
		/**
		 * hex-viewer.js — DSH 文件编辑器外部插件（纯 JS 单文件）。
		 *
		 *
		 * 能力（对标 VS Code HEXRAPL / 内置 hex editor，只读）：
		 *  - 对当前激活文件路径 fetch host \`GET /read?path=\`；
		 *  - 若 data.binary 为真 → 提示「二进制无法按文本读取」（本宿主 /read 仅回文本，无字节通道）；
		 *  - 否则把解码后的文本用 UTF-8 编码器转成字节，渲染 offset | 16 字节 hex | ASCII 三栏；
		 *  - 支持跳转偏移、大文件截断保护；纯展示，不改动磁盘。
		 */

		const API_KEY = "__dshFileWorkbenchVSCode__";
		const PREFIX = "/api/dsh-file-workbench";
		const VIEW_ID = "hexViewer.view";
		const NS = "dsh-hx";
		const BYTES_PER_ROW = 16;
		const MAX_BYTES = 512 * 1024; // 展示上限，超出截断并提示

		const inject = [];


		let currentCtx = null;

		function buildView() {
		  return {
		    id: VIEW_ID,
		    title: { zh: "十六进制查看器", en: "Hex Viewer" },
		    description: {
		      zh: "以 offset/hex/ASCII 三栏查看当前激活文件的字节（只读）",
		      en: "Inspect the active file as offset/hex/ASCII (read-only)",
		    },
		    icon: "binary",
		    order: 67,
		    when: (ctx) => !!ctx.projectDir,
		    mount(el, ctx) {
		      return mountView(el, ctx);
		    },
		  };
		}

		/* ------------------------------------------------------------------ 取字节 */

		async function fetchBytes(path) {
		  const res = await fetch(\`\${PREFIX}/read?path=\${encodeURIComponent(path)}\`, { headers: { Accept: "application/json" } });
		  const body = await res.json().catch(() => null);
		  if (!body?.ok) throw new Error(body?.error || \`HTTP \${res.status}\`);
		  const d = body.data || {};
		  if (d.binary) return { binary: true, bytes: null, size: d.size ?? 0 };
		  const bytes = new TextEncoder().encode(d.content ?? "");
		  return { binary: false, bytes, size: d.size ?? bytes.length };
		}

		/* ------------------------------------------------------------------ 渲染 */

		function hexByte(b) {
		  return b.toString(16).padStart(2, "0");
		}
		function asciiOf(b) {
		  return b >= 0x20 && b <= 0x7e ? String.fromCharCode(b) : ".";
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
		    note.textContent = \`（已截断显示前 \${total.toLocaleString()} 字节）\`;
		    frag.appendChild(note);
		  }
		  container.replaceChildren(frag);
		}

		/* ------------------------------------------------------------------ 挂载 UI */

		function mountView(el, ctx) {
		  el.classList.add(\`\${NS}-view\`);
		  el.innerHTML = \`
		    <div class="\${NS}-root">
		      <div class="\${NS}-bar">
		        <span class="\${NS}-name"></span>
		        <button class="\${NS}-reload" type="button">↻</button>
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
		    nameEl.textContent = file ? baseName(file) : "无激活文件";
		    if (!file) {
		      hint.textContent = "在编辑器打开一个文件即可查看其字节。";
		      dump.replaceChildren();
		      return;
		    }
		    if (busy) return;
		    busy = true;
		    reloadBtn.disabled = true;
		    hint.textContent = "读取中…";
		    try {
		      const { binary, bytes, size } = await fetchBytes(file);
		      if (binary) {
		        hint.textContent = \`二进制文件（\${size.toLocaleString()} 字节）——宿主 /read 仅返回文本，无法取得原始字节。\`;
		        dump.replaceChildren();
		        return;
		      }
		      const truncated = bytes.length > MAX_BYTES;
		      const shown = truncated ? bytes.subarray(0, MAX_BYTES) : bytes;
		      hint.textContent = \`\${bytes.length.toLocaleString()} 字节 · \${BYTES_PER_ROW}/行\`;
		      renderRows(dump, shown, truncated);
		    } catch (e) {
		      hint.textContent = \`读取失败：\${e?.message ?? e}\`;
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
		        /* noop */
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

		/* ------------------------------------------------------------------ 小工具 */


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

		function apply(_ctx) {
		  const api = typeof window !== "undefined" ? window.__dshFileWorkbenchVSCode__ : null;
		  if (api?.activityBar) api.activityBar.register(buildView());
		}
		return { apply, inject };
	}
});
`},{id:"local-history",name:"本地历史",version:"",description:"自动记录编辑快照，按时间倒序列出，可对比差异并一键恢复（对标 VS Code Local History）",nameEn:"Local History",descriptionEn:"DSH file editor plugin: activity bar view that keeps timestamped snapshots of saved files and restores them, based on the dsh-file-workbench-lib v1 injection API (window.__dshFileWorkbenchVSCode__).",code:`window.__ModuleLoader__.load({
	id: "dsh-fw.local-history",
	factory: (require) => {
		/**
		 * local-history.js — DSH 文件编辑器外部插件（纯 JS 单文件）。
		 *
		 *
		 * 能力（对标 VS Code Local History 扩展）：
		 *  - 订阅当前文件文档变更，**防抖 1.5s** 落一次内容快照；同项目按文件路径累积（每文件最多 N 条）；
		 *  - 快照持久化到 host \`/plugin-data\`（key = dsh-fw.localHistory.<hash(projectDir)>），跨重启保留；
		 *  - 面板列出当前文件的历史时间点，点击用 \`ctx.openDiff\` 做「当前 vs 历史」差异预览；
		 *  - 「恢复」按钮把选中快照整份写回缓冲区（applyEdit 全替换，保留撤销栈，可再撤销）。
		 */

		const API_KEY = "__dshFileWorkbenchVSCode__";
		const PREFIX = "/api/dsh-file-workbench";
		const VIEW_ID = "localHistory.view";
		const NS = "dsh-lh";
		const MAX_PER_FILE = 20; // 每文件保留快照上限
		const DEBOUNCE_MS = 1500;
		const MIN_DELTA_CHARS = 8; // 与上次快照差异过小则跳过，避免噪声

		const inject = [];


		/* ------------------------------------------------------------------ 跨挂载状态 */

		/** projectDir → { [fileAbsPath]: [{ ts, text }] }（时间升序）。 */
		const historyByProject = new Map();
		const loadedProjects = new Set();
		let currentCtx = null;
		let currentUi = null;
		let saveTimer = null;
		let lastSnapshotText = null; // 上次为当前文件落快照的文本，用于去重

		function hashKey(s) {
		  let h = 0x811c9dc5;
		  for (let i = 0; i < s.length; i++) {
		    h ^= s.charCodeAt(i);
		    h = Math.imul(h, 0x01000193) >>> 0;
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
		      // 校验结构后再覆盖内存。
		      const clean = {};
		      for (const [f, arr] of Object.entries(data)) {
		        if (Array.isArray(arr)) clean[f] = arr.filter((e) => e && Number.isFinite(e.ts) && typeof e.text === "string").slice(-MAX_PER_FILE);
		      }
		      historyByProject.set(dir, clean);
		    }
		  } catch {
		    /* 读失败保持空 */
		  }
		}

		function schedulePersist(dir) {
		  clearTimeout(schedulePersist._t);
		  schedulePersist._t = setTimeout(() => {
		    const map = historyByProject.get(dir) ?? {};
		    fetch(\`\${PREFIX}/plugin-data\`, {
		      method: "POST",
		      headers: { "Content-Type": "application/json" },
		      body: JSON.stringify({ k: persistKey(dir), v: map }),
		    }).catch(() => {});
		  }, 400);
		}

		/* ------------------------------------------------------------------ 快照采集 */

		/** 若与当前文件最近快照差异足够大，追加一条并刷新 UI。 */
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

		/** 粗略判等：长度接近且内容相同视为无实质变化。 */
		function similarEnough(a, b) {
		  if (a === b) return true;
		  if (Math.abs(a.length - b.length) < MIN_DELTA_CHARS && a.slice(0, 200) === b.slice(0, 200)) return true;
		  return false;
		}

		/** 变更后防抖落快照。 */
		function scheduleSnapshot() {
		  clearTimeout(saveTimer);
		  saveTimer = setTimeout(maybeSnapshot, DEBOUNCE_MS);
		}

		/* ------------------------------------------------------------------ 恢复 / 对比 */

		function restore(entry) {
		  const ctx = currentCtx;
		  const ed = ctx?.editor;
		  const view = ed?.view;
		  if (!ed || !view) {
		    ctx?.toast?.("error", "无激活编辑器");
		    return;
		  }
		  const len = view.state.doc.length;
		  const ok = ed.applyEdit([{ from: 0, to: len, insert: entry.text }]);
		  if (ok) ctx.toast("ok", "已恢复该历史版本（可用 Ctrl+Z 撤销）");
		  else ctx.toast("error", "恢复失败");
		}

		function openCompare(entry) {
		  const ctx = currentCtx;
		  const cur = ctx?.editor?.getText?.() ?? "";
		  const lines = simpleDiffLines(entry.text.split("\\n"), cur.split("\\n"));
		  ctx?.openDiff?.(\`历史对比 · \${fmtTime(entry.ts)}\`, lines);
		}

		/** 极简行级 LCS diff → "+/-/空格" 前缀行（复用宿主 GitDiffView 着色）。 */
		function simpleDiffLines(oldA, newA) {
		  const out = [];
		  // 从两端剥离公共前后缀，中间整体标 +/- ——够用且 O(n)。
		  let prefix = 0;
		  while (prefix < oldA.length && prefix < newA.length && oldA[prefix] === newA[prefix]) prefix++;
		  let suffix = 0;
		  while (
		    suffix < oldA.length - prefix &&
		    suffix < newA.length - prefix &&
		    oldA[oldA.length - 1 - suffix] === newA[newA.length - 1 - suffix]
		  )
		    suffix++;
		  for (let k = 0; k < prefix; k++) out.push(\` \${oldA[k]}\`);
		  const oldMid = oldA.slice(prefix, oldA.length - suffix);
		  const newMid = newA.slice(prefix, newA.length - suffix);
		  for (const l of oldMid) out.push(\`-\${l}\`);
		  for (const l of newMid) out.push(\`+\${l}\`);
		  for (let k = oldA.length - suffix; k < oldA.length; k++) out.push(\` \${oldA[k]}\`);
		  return out;
		}

		/* ------------------------------------------------------------------ 渲染 */

		function fmtTime(ts) {
		  const d = new Date(ts);
		  const p = (n) => String(n).padStart(2, "0");
		  return \`\${d.getFullYear()}-\${p(d.getMonth() + 1)}-\${p(d.getDate())} \${p(d.getHours())}:\${p(d.getMinutes())}:\${p(d.getSeconds())}\`;
		}

		function renderList(list, ctx) {
		  const dir = ctx.projectDir;
		  const file = ctx.activeFile;
		  if (!dir || !file) {
		    list.replaceChildren(emptyNode("在编辑器打开一个文件以查看其本地历史。"));
		    return;
		  }
		  const map = historyByProject.get(dir) ?? {};
		  const arr = (map[normPath(file)] ?? []).slice().reverse(); // 新→旧
		  if (!arr.length) {
		    list.replaceChildren(emptyNode("暂无历史快照：编辑当前文件后会自动记录。"));
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
		    main.querySelector(\`.\${NS}-size\`).textContent = \`\${entry.text.length.toLocaleString()} 字符\`;
		    main.title = "点击查看差异";
		    main.addEventListener("click", () => openCompare(entry));
		    const rst = document.createElement("button");
		    rst.type = "button";
		    rst.className = \`\${NS}-restore\`;
		    rst.textContent = "恢复";
		    rst.title = "把此版本写回缓冲区";
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

		/* ------------------------------------------------------------------ 视图定义 */

		function buildView() {
		  return {
		    id: VIEW_ID,
		    title: { zh: "本地历史", en: "Local History" },
		    description: {
		      zh: "自动记录编辑快照，按时间倒序列出，可对比差异并一键恢复（对标 VS Code Local History）",
		      en: "Auto snapshot on edit; browse, diff and restore past versions. Counterpart of VS Code Local History.",
		    },
		    icon: "clock",
		    order: 69,
		    when: (ctx) => !!ctx.projectDir,
		    mount(el, ctx) {
		      return mountView(el, ctx);
		    },
		  };
		}

		/* ------------------------------------------------------------------ 挂载 UI */

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
		    titleEl.textContent = ctx.activeFile ? baseName(ctx.activeFile) : "无激活文件";
		    const dir = ctx.projectDir;
		    const file = ctx.activeFile;
		    const map = dir ? historyByProject.get(dir) ?? {} : {};
		    const n = file ? (map[normPath(file)] ?? []).length : 0;
		    hint.textContent = n ? \`\${n} 个历史版本\` : "";
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
		        /* noop */
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

		/* ------------------------------------------------------------------ 小工具 */


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

		function apply(_ctx) {
		  const api = typeof window !== "undefined" ? window.__dshFileWorkbenchVSCode__ : null;
		  if (api?.activityBar) api.activityBar.register(buildView());
		}
		return { apply, inject };
	}
});
`}],qu="dsh-fw.userPlugins",Wn=g([]),_s=new Map;let Ic=!1,Pi=null;async function j8(t,e){await fetch(`${Yn}/plugin-data`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({k:t,v:e})}).catch(()=>{})}async function B8(t){try{return(await(await fetch(`${Yn}/plugin-data?k=${encodeURIComponent(t)}`,{headers:{Accept:"application/json"}})).json().catch(()=>null))?.data??null}catch{return null}}function Ar(){Pi&&clearTimeout(Pi),Pi=setTimeout(()=>{Pi=null,j8(qu,Wn.value)},300)}async function U8(){const t=await B8(qu);return Array.isArray(t)?t:[]}const Bo=new Map;function Vc(){return{load(t){Bo.set(t.id,t)}}}function Gs(){return{views:Ta().map(t=>t.id),commands:Cr(),status:Da().map(t=>t.id),menu:ai().map(t=>t.id)}}function da(t,e){const n=(a,r)=>r.filter(d=>!a.includes(d));return{views:n(t.views,e.views),commands:n(t.commands,e.commands),status:n(t.status,e.status),menu:n(t.menu,e.menu)}}function ua(t){t&&(t.views.forEach($a),t.commands.forEach(_r),t.status.forEach(Na),t.menu.forEach(Ra))}const Ku=/__ModuleLoader__|__dshFileWorkbench(?:VSCode|Workbench)__/,H8=/__ModuleLoader__\.load\(\s*\{\s*id\s*:\s*(["'])((?:(?!\1)[\s\S])*)\1/;function Xu(t){if(!t.trim())return{ok:!1,error:v("pmCheckEmpty")};const e=t.match(H8);return{ok:Ku.test(t),error:v("pmCheckNotPlugin"),loaderId:e?.[2]?.trim()||void 0}}function W8(t){return 1}const zc="dsh-fw.wrapped-plugin";function G8(t,e=W8()){const n=window,a=n.__ModuleLoader__,r=new Set(Bo.keys());n.__ModuleLoader__=Vc();try{(0,eval)(t)}finally{n.__ModuleLoader__=a}let d=[...Bo.keys()].filter(w=>!r.has(w));if(!d.length&&Ku.test(t)){const w=Gs();if(Xl(da(w,Gs()))){const b=`window.__ModuleLoader__.load({id:${JSON.stringify(zc)},factory:(require)=>{var module={exports:{}};var exports=module.exports;
${t}
;return {apply(){}};}});`;n.__ModuleLoader__=Vc();try{(0,eval)(b)}finally{n.__ModuleLoader__=a}d=[...Bo.keys()].filter(k=>!r.has(k))}}const h=Gs(),u=[];for(const w of d){const b=Bo.get(w);if(w===zc)continue;const k=K8(b,e);k&&u.push(k)}const p=da(h,Gs());return Object.defineProperty(p,"__confirms",{value:u,enumerable:!1})}function q8(t){return t.__confirms??[]}function Xl(t){return!t.views.length&&!t.commands.length&&!t.status.length&&!t.menu.length}function K8(t,e){if(e>Ss)throw new Error(v("pmCheckNeedsHost",{need:e,have:Ss}));if(typeof t.factory!="function")return null;const n=window,a="__dshFileWorkbenchVSCode__",r="__dshFileWorkbenchWorkbench__",d=()=>{},h=n[a],u=n[r];n[a]={apiVersion:Ss,activityBar:{register:d,unregister:d},commands:{register:d,unregister:d,execute:d,list:()=>[],has:()=>!1},statusbar:{register:d,unregister:d,list:()=>[],registerMenu:d,unregisterMenu:d,listMenu:()=>[]}},n[r]={apiVersion:Ss,activityBar:{register:d,unregister:d},statusbar:{register:d,unregister:d,list:()=>[]},backgroundTasks:{start:()=>({step:d,updateLabel:d,done:d,fail:d}),clearFinished:async()=>{},clearAll:async()=>{}}};try{const k=t.factory(()=>{});typeof k?.apply=="function"&&k.apply()}finally{n[a]=h,n[r]=u}const p=Gs(),w=t.factory(()=>{});typeof w?.apply=="function"&&w.apply();const b=da(p,Gs());return Xl(b)?new Promise((k,F)=>{setTimeout(()=>{const L=da(p,Gs());if(!Xl(L))return k();ua(L),F(new Error(v("pmCheckNoContrib")))},250)}):null}function Do(t){return Wn.value.find(e=>e.id===t)}async function No(t){const e=Do(t);if(e){ua(_s.get(t)),_s.delete(t);try{const n=G8(e.code);_s.set(t,n),await Promise.all(q8(n)),e.enabled=!0,e.activated=!0,e.error=void 0}catch(n){e.enabled=!1,e.activated=!1,e.error=n instanceof Error?n.message:String(n),ua(_s.get(t)),_s.delete(t)}Ar()}}function fa(t){const e=Do(t);e&&(ua(_s.get(t)),_s.delete(t),e.enabled=!1,e.error=void 0,Ar())}function X8(t){const e=Do(t);!e||e.source==="builtin"||(fa(t),Wn.value=Wn.value.filter(n=>n.id!==t),Ar())}function Yu(t){return t.trim()}function Ju(t){const e=Wn.value.findIndex(n=>n.id===t.id);e>=0?Wn.value.splice(e,1,t):Wn.value=[...Wn.value,t]}async function Y8(t){const e=await t.text(),n=Xu(e);if(!n.ok)return{ok:!1,error:n.error};const a=Yu(n.loaderId||t.name.replace(/\.(c|m)?js$/i,""))||`file-${Date.now()}`;Ju({id:a,name:t.name,source:"file",origin:t.name,code:e,enabled:!1}),await No(a);const r=Do(a);return{ok:!!r?.enabled,error:r?.error,id:a}}async function J8(t){const e=t.trim();if(!e)return{ok:!1,error:v("pmCheckEmpty")};const n=await fetch(`${Yn}/fetch-plugin`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({url:e})}),a=await n.json().catch(()=>({ok:!1,error:"bad response"}));if(!a.ok||!a.data)return{ok:!1,error:a.error||`HTTP ${n.status}`};const{code:r,name:d}=a.data,h=Xu(r);if(!h.ok)return{ok:!1,error:h.error};const u=d||e.split("/").pop()||e,p=Yu(h.loaderId||u.replace(/\.(c|m)?js$/i,""))||`url-${Date.now()}`;Ju({id:p,name:u,source:"url",origin:e,code:r,enabled:!1}),await No(p);const w=Do(p);return{ok:!!w?.enabled,error:w?.error,id:p}}function Q8(t){const e=new Map(t.map(n=>[n.id,n]));for(const n of z8){const a=e.get(n.id);a?a.source==="builtin"&&Object.assign(a,{name:n.name,version:n.version,description:n.description,nameEn:n.nameEn,descriptionEn:n.descriptionEn,code:n.code}):e.set(n.id,{id:n.id,name:n.name,source:"builtin",origin:n.id,version:n.version,description:n.description,nameEn:n.nameEn,descriptionEn:n.descriptionEn,code:n.code,enabled:!1})}return[...e.values()]}async function Z8(){if(Ic||typeof window>"u")return;Ic=!0;const t=await U8();Wn.value=Q8(t);for(const e of[...Wn.value]){if(!e.enabled)continue;if(!e.activated){e.enabled=!1,e.error=void 0;continue}await No(e.id);const n=Do(e.id);n&&!n.enabled&&Y("error",v("pmRestoreFailed",{name:n.name,msg:n.error||""}))}}function Us(){return Wn.value}function Qu(t){return _s.get(t)?.views??[]}const jc=1500;function e3(t,e){const n=t.split(`
`),a=e.split(`
`);if(t===e)return{lines:[]};let r=0;for(;r<n.length&&r<a.length&&n[r]===a[r];)r+=1;let d=n.length,h=a.length;for(;d>r&&h>r&&n[d-1]===a[h-1];)d-=1,h-=1;const u=n.slice(r,d),p=a.slice(r,h);if(u.length>jc||p.length>jc)return null;const w=u.length,b=p.length,k=new Int32Array((w+1)*(b+1)),F=(G,R)=>G*(b+1)+R;for(let G=w-1;G>=0;G-=1)for(let R=b-1;R>=0;R-=1)k[F(G,R)]=u[G]===p[R]?k[F(G+1,R+1)]+1:Math.max(k[F(G+1,R)],k[F(G,R+1)]);const L=[];let D=0,z=0;for(;D<w&&z<b;)u[D]===p[z]?(L.push({kind:" ",text:u[D]}),D+=1,z+=1):k[F(D+1,z)]>=k[F(D,z+1)]?(L.push({kind:"-",text:u[D]}),D+=1):(L.push({kind:"+",text:p[z]}),z+=1);for(;D<w;)L.push({kind:"-",text:u[D]}),D+=1;for(;z<b;)L.push({kind:"+",text:p[z]}),z+=1;const H=3,C=["--- 磁盘版本","+++ 未保存改动"];let Z=0;for(;Z<L.length;){if(L[Z].kind===" "){Z+=1;continue}let G=Math.max(0,Z-H);for(;G>0&&L[G].kind===" "&&Z-G<H;)G-=1;let R=Z,ue=0,V=Z;for(;R<L.length;){if(L[R].kind!==" ")ue=0,V=R;else if(ue+=1,ue>=H*2)break;R+=1}const he=Math.min(L.length,V+1+H),_e=L.slice(G,he),ge=r+G+1,ne=r+G+1;C.push(`@@ -${ge} +${ne} @@`);for(const ae of _e)C.push(ae.kind+ae.text);Z=he}return{lines:C}}const Bc="host.plugin-manager",me="dsh-pm";function t3(t){return!ga()&&t.descriptionEn||t.description||""}let Uc=!1,Hc=!1,Zu;const Js=new Set;function wo(){return new Set(Ta().map(t=>t.id))}function Zo(t,e){if(!t||!t.enabled||t.error)return;const n=Qu(t.id);if(!n.length)return;const a=Ta().find(d=>d.id===n[0]);if(a?.when&&!a.when(n3()))return;[...wo()].some(d=>!e.has(d)&&d!==Zu)?Js.delete(t.id):Js.add(t.id)}function n3(){return{projectDir:Yl,language:ga()?"zh":"en"}}let Yl;function s3(){Uc||typeof window>"u"||(Uc=!0,Hc||(Hc=!0,Z8().then(()=>Fi?.())),kr({id:Bc,title:{zh:"插件管理",en:"Plugins"},icon:"puzzle",order:Number.MAX_SAFE_INTEGER,mount(t,e){Zu=Bc,Yl=e.projectDir??void 0;const n=e.onProjectChange(r=>{Yl=r??void 0}),a=h3(t,e);return Fi=a.rerender,()=>{n(),Fi===a.rerender&&(Fi=void 0),a.cleanup()}}}))}let Fi;function o3(){if(typeof document>"u"||document.getElementById(`${me}-styles`))return;const t=`
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
`,e=document.createElement("style");e.id=`${me}-styles`,e.textContent=t,document.head.appendChild(e)}const i3='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',a3='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3.2"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',l3='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h13M4 12h9M4 18h5"/></svg>';let Jl="",pa=!1,Ql="install";function r3(t){return v(t==="builtin"?"srcBuiltin":t==="file"?"srcFile":"srcUrl")}function ef(t){if(!ga()){const n=t.descriptionEn?.match(/Counterpart of (.+?)\./);if(n)return n[1].trim()}const e=t.description?.match(/对标\s*([^。（(]+)/);return e?e[1].trim():r3(t.source)}function c3(t){return(ha(t)[0]??"?").toUpperCase()}function d3(t,e){return e?`${t.name} ${t.nameEn??""} ${t.description??""} ${t.descriptionEn??""} ${ef(t)}`.toLowerCase().includes(e):!0}function ha(t){return t.name.replace(/^@[^/]+\//,"")}function Uo(t){return!ga()&&t.nameEn||ha(t)}function u3(t){const e=[...t];return Ql==="name"?e.sort((n,a)=>Uo(n).localeCompare(Uo(a))):Ql==="source"&&e.sort((n,a)=>n.source.localeCompare(a.source)||Uo(n).localeCompare(Uo(a))),e}let Ui=null;function Zl(t,e){tf();const n=document.createElement("div");n.className=`${me}-menu`;for(const b of e){const k=document.createElement("div");k.className=`${me}-menu-item${b.danger?" danger":""}`,k.textContent=b.label,k.addEventListener("click",F=>{F.stopPropagation(),p(),b.onClick()}),n.append(k)}document.body.appendChild(n);const a=t.getBoundingClientRect();n.style.visibility="hidden",n.classList.add("open");const r=n.offsetWidth,d=n.offsetHeight;let h=a.right-r;h<8&&(h=Math.max(8,a.left)),h+r>window.innerWidth-8&&(h=Math.max(8,window.innerWidth-8-r));let u=a.bottom+4;u+d>window.innerHeight-8&&(u=Math.max(8,a.top-4-d)),n.style.left=`${h}px`,n.style.top=`${u}px`,n.style.visibility="";function p(){document.removeEventListener("mousedown",w,!0),window.removeEventListener("resize",p),n.remove(),Ui?.el===n&&(Ui=null)}function w(b){n.contains(b.target)||p()}requestAnimationFrame(()=>document.addEventListener("mousedown",w,!0)),window.addEventListener("resize",p),Ui={el:n,close:p}}function tf(){Ui?.close()}function an(t,e){const n=t.querySelector(`.${me}-listwrap`);if(!n)return;const a=Jl.trim().toLowerCase(),r=Us(),d=u3(r.filter(w=>d3(w,a)));n.classList.toggle("collapsed",pa);const h=n.querySelector(`.${me}-section-count`);h&&(h.textContent=`(${d.length})`);const u=n.querySelector(`.${me}-list`);if(!u||(u.replaceChildren(),pa))return;if(!d.length){const w=document.createElement("div");w.className=`${me}-empty`,w.innerHTML=`<div class="${me}-empty-icon">&#x2699;</div><div class="${me}-empty-text">${a?v("pmEmptyWithQuery",{q:f3(Jl)}):v("pmEmptyNoPlugins")}</div>`,u.append(w);return}for(const w of d)u.append(p3(w,t,e));const p=[...Js].filter(w=>r.some(b=>b.id===w&&b.enabled));if(p.length){const w=document.createElement("div");w.className=`${me}-reload`;const b=document.createElement("span");b.className=`${me}-reload-text`,b.textContent=v("pmReloadRequired",{n:String(p.length)});const k=document.createElement("button");k.type="button",k.className=`${me}-btn primary`,k.textContent=v("pmReloadNow"),k.addEventListener("click",L=>{L.stopPropagation(),window.location.reload()});const F=document.createElement("button");F.type="button",F.className=`${me}-tool ${me}-reload-x`,F.title=v("pmReloadDismiss"),F.textContent="×",F.addEventListener("click",L=>{L.stopPropagation();for(const D of p)Js.delete(D);an(t,e)}),w.append(b,k,F),u.append(w)}}function f3(t){return t.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}function p3(t,e,n){const a=document.createElement("div");a.className=`${me}-row${t.enabled?"":" is-disabled"}`;const r=document.createElement("div");r.className=`${me}-avatar ${t.source}`,r.textContent=c3(t),a.append(r);const d=document.createElement("div");d.className=`${me}-main`;const h=document.createElement("div");h.className=`${me}-nameline`;const u=document.createElement("span");u.className=`${me}-name`,u.textContent=Uo(t),u.title=t.origin||t.name;const p=document.createElement("span");if(p.className=`${me}-vendor`,p.textContent=ef(t),h.append(u,p),t.version){const L=document.createElement("span");L.className=`${me}-ver`,L.textContent=`v${t.version}`,h.append(L)}d.append(h);const w=t3(t);if(w){const L=document.createElement("div");L.className=`${me}-desc`,L.textContent=w,d.append(L)}if(t.enabled&&!n.projectDir){const L=document.createElement("div");L.className=`${me}-desc`,L.style.color="var(--pm-warn)",L.textContent=v("pmNeedsProject"),d.append(L)}if(t.error){const L=document.createElement("div");L.className=`${me}-err`,L.textContent=t.error,d.append(L)}a.append(d);const b=document.createElement("div");b.className=`${me}-rowacts`;const k=document.createElement("button");k.type="button",k.className=`${me}-btn${t.enabled?"":" primary"}`,k.textContent=t.enabled?v("pmDisable"):v("pmEnable"),k.addEventListener("click",L=>{if(L.stopPropagation(),t.enabled)fa(t.id),Js.delete(t.id),an(e,n);else{const D=wo();No(t.id).then(()=>{t.error&&n.toast("error",v("pmEnableFailed",{name:ha(t),msg:t.error})),Zo(t,D),an(e,n)})}}),b.append(k);const F=document.createElement("button");return F.type="button",F.className=`${me}-gear`,F.title=v("pmMoreActions"),F.innerHTML=a3,F.addEventListener("click",L=>{L.stopPropagation();const D=[{label:t.enabled?v("pmDisable"):v("pmEnable"),onClick:()=>{if(t.enabled)fa(t.id),Js.delete(t.id),an(e,n);else{const z=wo();No(t.id).then(()=>{t.error&&n.toast("error",v("pmEnableFailed",{name:ha(t),msg:t.error})),Zo(t,z),an(e,n)})}}}];t.source!=="builtin"&&D.push({label:v("pmRemove"),danger:!0,onClick:()=>{X8(t.id),an(e,n)}}),Zl(F,D)}),b.append(F),a.append(b),a}function Wc(t,e){const n=document.createElement("div");n.className=`${me}-root`;const a=document.createElement("div");a.className=`${me}-hdr`;const r=document.createElement("div");r.className=`${me}-title`,r.textContent=v("pmTitle");const d=document.createElement("div");d.className=`${me}-spacer`;const h=document.createElement("button");h.type="button",h.className=`${me}-tool`,h.title=v("pmSort"),h.innerHTML=l3,h.addEventListener("click",he=>{he.stopPropagation();const _e=(ge,ne)=>({label:ne,onClick:()=>{Ql=ge,an(n,e)}});Zl(h,[_e("install",v("pmSortInstall")),_e("name",v("pmSortName")),_e("source",v("pmSortSource"))])});const u=document.createElement("button");u.type="button",u.className=`${me}-tool`,u.title=v("pmManage"),u.textContent="⋯",a.append(r,d,h,u);const p=document.createElement("div");p.className=`${me}-search`;const w=document.createElement("div");w.className=`${me}-search-box`,w.innerHTML=i3;const b=document.createElement("input");b.type="text",b.className=`${me}-search-input`,b.placeholder=v("pmSearchPlaceholder"),b.addEventListener("input",()=>{Jl=b.value,an(n,e)}),w.append(b),p.append(w);const k=document.createElement("div");k.className=`${me}-listwrap`;const F=document.createElement("div");F.className=`${me}-section-head`;const L=document.createElement("span");L.className=`${me}-twist`,L.textContent="▾";const D=document.createElement("span");D.textContent=v("pmInstalled");const z=document.createElement("span");z.className=`${me}-section-count`,F.append(L,D,z),F.addEventListener("click",()=>{pa=!pa,an(n,e)});const H=document.createElement("div");H.className=`${me}-list`,k.append(F,H);const C=document.createElement("input");C.type="file",C.accept=".js,.cjs,.mjs,text/javascript",C.multiple=!0,C.style.display="none",C.addEventListener("change",async()=>{const he=[...C.files??[]];for(const _e of he){const ge=wo();try{const ne=await Y8(_e);if(!ne.ok)e.toast("error",v("pmImportFailed",{name:_e.name,msg:ne.error||""}));else if(ne.id){const ae=Us().find(Te=>Te.id===ne.id);ae&&Zo(ae,ge)}}catch(ne){e.toast("error",v("pmImportFailed",{name:_e.name,msg:ne instanceof Error?ne.message:String(ne)}))}}C.value="",an(n,e)});const Z=document.createElement("div");Z.className=`${me}-url-panel`;const G=document.createElement("div");G.className=`${me}-url-inner`;const R=document.createElement("input");R.type="text",R.className=`${me}-url-input`,R.placeholder=v("pmUrlPlaceholder");const ue=document.createElement("button");ue.type="button",ue.className=`${me}-url-go`,ue.textContent=v("pmPull");const V=async()=>{const he=R.value.trim();if(!he)return;ue.disabled=!0,ue.textContent=v("pmPulling");const _e=wo();try{const ge=await J8(he);if(ge.ok){if(R.value="",Z.classList.remove("open"),e.toast("ok",v("pmUrlImported")),ge.id){const ne=Us().find(ae=>ae.id===ge.id);ne&&Zo(ne,_e)}}else e.toast("error",v("pmUrlImportFailed",{msg:ge.error||""}))}catch(ge){e.toast("error",v("pmUrlImportFailed",{msg:ge instanceof Error?ge.message:String(ge)}))}finally{ue.disabled=!1,ue.textContent=v("pmPull"),an(n,e)}};return ue.addEventListener("click",()=>void V()),R.addEventListener("keydown",he=>{he.key==="Enter"&&V()}),G.append(R,ue),Z.append(G),u.addEventListener("click",he=>{he.stopPropagation(),Zl(u,[{label:v("pmImportFromFile"),onClick:()=>C.click()},{label:v("pmImportFromUrl"),onClick:()=>{Z.classList.toggle("open"),Z.classList.contains("open")&&setTimeout(()=>R.focus(),80)}},{label:v("pmEnableAll"),onClick:()=>{const _e=Us().filter(ne=>!ne.enabled),ge=wo();Promise.all(_e.map(ne=>No(ne.id))).then(()=>{for(const ne of _e)Zo(Us().find(ae=>ae.id===ne.id),ge);an(n,e)})}},{label:v("pmDisableAll"),onClick:()=>{for(const _e of Us())_e.enabled&&(fa(_e.id),Js.delete(_e.id));an(n,e)}}])}),n.append(a,p,Z,k,C),t.replaceChildren(n),an(n,e),{cleanup(){tf(),t.replaceChildren()},rerender(){an(n,e)}}}function h3(t,e){o3(),t.classList.add(`${me}-view`);const n=document.createElement("div");n.className=`${me}-inner`,n.style.cssText="display:flex;flex-direction:column;height:100%;min-height:0;",t.replaceChildren(n);let a=Wc(n,e);const{locale:r}=Ft(),d=Je(r,()=>{a.cleanup(),a=Wc(n,e)});return{cleanup(){d(),a.cleanup(),t.replaceChildren()},rerender(){a.rerender()}}}const v3=["data-theme"],m3=["title"],g3={class:"vs-topbar-txt"},y3=["title"],w3={class:"vs-topbar-txt"},b3=["title"],k3={class:"vs-topbar-txt vs-recent-name"},x3=["title"],_3=["title","disabled"],C3={class:"vs-quickopen-ph"},S3=["title"],$3=["disabled","title","onClick","onContextmenu"],T3={key:1,class:"vs-act-letter"},E3={class:"vs-left-main"},N3={key:1,class:"fw-empty vs-git-empty"},D3={class:"vs-right"},R3={class:"vs-editor-wrap"},A3={key:0,class:"vs-diffpane"},M3={key:1,class:"vs-empty"},P3={class:"vs-empty-title"},F3={class:"vs-empty-hint"},L3={class:"vs-empty-actions"},O3={key:2,class:"vs-loading-big"},I3={key:3,class:"vs-error"},V3={key:4,class:"vs-empty"},z3={class:"vs-empty-hint"},j3={class:"vs-status"},B3=["title"],U3={key:1,class:"vs-status-readonly"},H3=["title"],W3={class:"vs-status-seg"},G3=["disabled"],q3=["disabled"],K3={class:"vs-status-seg"},X3=["placeholder","onKeydown"],Y3={class:"vs-quickopen-list"},J3=["title","onMousedown","onMouseenter"],Q3={class:"vs-search-name"},Z3={class:"vs-search-dir"},eD={key:0,class:"vs-search-note"},tD={key:1,class:"vs-search-note"},Gc=new Set,qc=new Set,nD=vt({__name:"VSCodePane",setup(t){const e=tr(Ma)??Nr(),n=e.state,a=e.ready,r=I(()=>n.projectDir?Wt(n.projectDir)?Tl(n.projectDir):n.projectDir:v("vsNoProject")),d=e.rootKey,h=()=>e.init(),u=()=>e.persist(),p=f=>e.rememberProject(f),w=f=>e.fileViewOf(f),b=(f,x)=>e.rememberFileView(f,x),k=f=>e.stashOpenBuffers(f),F=()=>e.takeStashedBuffers(),L=`vscode:${e.slot}`,D=g(null),z=br(D),H=I(()=>({fontSize:`${Ue.fontSize??13}px`,"--vs-fs-scale":String((Ue.fontSize??13)/13)})),C=gt({}),Z=gt(new Set),G=gt({}),R=gt({}),ue=g(!1),V=g(!1),he=I(()=>{const f=n.projectDir;if(!f)return null;if(Wt(f))return ta(f)||null;const x=f.replace(/[\\/]+$/,""),X=Math.max(x.lastIndexOf("/"),x.lastIndexOf("\\"));if(X<=0)return null;const Fe=x.slice(0,X);return/^[A-Za-z]:$/.test(Fe)?null:Fe}),_e=g(!1),ge=g(null),ne=g(""),ae=g(null),Te="dsh-file-workbench.vscode.activeView";function je(){try{return localStorage.getItem(Te)??"files"}catch{return"files"}}const be=g(je()),Ae=g(!1);function W(f){be.value=f;try{localStorage.setItem(Te,f)}catch{}}Je(()=>n.projectDir,f=>{!f&&be.value!=="files"&&(be.value="files")});const J=g("");Je(()=>n.projectDir,async f=>{if(J.value="",!!f)try{const x=await ei(f);if(x.inRepo&&x.repo)J.value=x.branch||"HEAD";else{const X=await ps(f);X.inRepo&&X.svnAvailable&&(J.value=X.revision?`r${X.revision}`:"svn")}}catch{}},{immediate:!0});function B(f,x){n.projectDir&&os(to(f,n.projectDir),{line:x})}const ee=gt({line:1,col:1});let ye=null;function ze(f){return f.split(/[\\/]/).filter(Boolean).pop()??f}function Ke(f){const x=Math.max(f.lastIndexOf("/"),f.lastIndexOf("\\"));if(x<0)return"";const X=x===0?f.slice(0,1):f.slice(0,x);return/^[A-Za-z]:$/.test(X)?`${X}${f[x]}`:X}function Ze(f){return Wt(f)?ta(f)||f:Ke(f)||f}function we(f,x){if(!f)return!1;const X=f.replace(/[\\/]+$/,"").toLowerCase(),Fe=x.replace(/[\\/]+$/,"").toLowerCase();return Fe===X||Fe.startsWith(`${X}\\`)||Fe.startsWith(`${X}/`)}const ke="vs-diff://",Ye=I(()=>{const f=n.openTabs.map(x=>({path:x,dirty:C[x]?.dirty??!1,conflict:C[x]?.conflict??!1}));return nn.value&&f.push({path:ke+nn.value.title,dirty:!1,icon:"fileOut"}),f}),st=I(()=>nn.value?ke+nn.value.title:n.activeTab);function pe(f){return f.startsWith(ke)}const Ce=I(()=>n.activeTab?C[n.activeTab]:void 0),qe=I(()=>Ce.value?.content??""),ce=I(()=>n.activeTab?R[n.activeTab]??0:0),Ve=I(()=>n.activeTab?Z.has(n.activeTab):!1),rt=I(()=>n.activeTab?G[n.activeTab]:void 0),yt=I(()=>{const f=n.activeTab;return!f||!n.projectDir?!0:we(n.projectDir,f)?!1:!Ue.allowOutsideRoot}),dt=I(()=>Ce.value?.conflict===!0),it=I(()=>n.activeTab?IT(n.activeTab):"Plain Text"),Oe=I(()=>w(n.activeTab)),U=[{encoding:"utf8",hasBom:!1,label:"UTF-8"},{encoding:"utf8",hasBom:!0,label:"UTF-8 with BOM"},{encoding:"utf16le",hasBom:!0,label:"UTF-16 LE"},{encoding:"utf16be",hasBom:!0,label:"UTF-16 BE"},{encoding:"gb18030",hasBom:!1,label:"GB18030"},{encoding:"big5",hasBom:!1,label:"Big5"},{encoding:"latin1",hasBom:!1,label:"Latin-1"}],P={utf8:"UTF-8",utf16le:"UTF-16 LE",utf16be:"UTF-16 BE",gb18030:"GB18030",big5:"Big5",latin1:"Latin-1",binary:"Binary"},Q=I(()=>(Ce.value?.eol??"lf").toUpperCase()),Ee=I(()=>{const f=Ce.value;if(!f)return"UTF-8";const x=P[f.encoding],X=f.encoding==="utf8"||f.encoding==="utf16le"||f.encoding==="utf16be";return f.hasBom&&X?`${x} BOM`:x}),{cmOpen:O,cmX:E,cmY:K,openMenuAt:$}=hn();function q(f){const x=f.currentTarget?.getBoundingClientRect();$(x?.left??0,x?.top??0)}const Ne=I(()=>{const f=Ce.value;return U.map(x=>({label:x.label,checked:!!f&&f.encoding===x.encoding&&f.hasBom===x.hasBom,disabled:!f||f.binary,onClick:()=>void Qe(x.encoding,x.hasBom)}))}),{cmOpen:re,cmX:ct,cmY:wt,openMenuAt:Lt}=hn();function Ln(f){const x=f.currentTarget?.getBoundingClientRect();Lt(x?.left??0,x?.top??0)}const Gt=I(()=>{const f=Ce.value,x=(X,Fe)=>({label:Fe,checked:f?.eol===X,disabled:!f||f.binary,onClick:()=>Be(X)});return[x("lf","LF"),x("crlf","CRLF"),x("cr","CR")]});function Be(f){const x=n.activeTab,X=x?C[x]:void 0;!x||!X||X.eol===f||(X.eol=f,X.dirty=!0)}async function Qe(f,x){const X=n.activeTab,Fe=X?C[X]:void 0;!X||!Fe||Fe.encoding===f&&Fe.hasBom===x||Fe.dirty&&!await Pt({title:v("vsUnsavedTitle"),message:v("vsReopenLoseMsg")})||(await ys(X,{encoding:f,hasBom:x,force:!0}),Y("ok",v("vsEncodingSwitched",{enc:Ee.value})))}const et=g(null),{cmOpen:at,cmX:Cn,cmY:Sn,openMenuAt:Bt}=hn();function ot(){const f=et.value?.getBoundingClientRect();Bt(f?.left??0,(f?.bottom??0)+2)}const ft=I(()=>!!Ce.value&&!Ce.value.binary&&!yt.value),Ct=I(()=>n.openTabs.filter(f=>C[f]?.dirty)),On=I(()=>[{label:v("vsOpenFolder"),icon:"folderOpen",onClick:Ut},{label:v("vsNewFile"),icon:"fileOut",disabled:!n.projectDir,onClick:()=>ae.value?.createFileAtRoot()},{label:v("vsNewFolder"),icon:"folder",disabled:!n.projectDir,onClick:()=>ae.value?.createFolderAtRoot()},{label:v("vsMenuRecent"),icon:"clock",disabled:n.recentProjects.length===0,children:[...n.recentProjects.map(f=>({label:ze(f)||f,checked:f===n.projectDir,disabled:f===n.projectDir,onClick:()=>void Ls(f)})),{separator:!0},{label:v("vsRecentClearAll"),icon:"trash",disabled:n.recentProjects.length===0,onClick:()=>void yn()}]},{separator:!0},{label:v("menuCloneGit"),icon:"git",onClick:()=>void Nn("git")},{label:v("menuCloneSvn"),icon:"svn",onClick:()=>void Nn("svn")},{separator:!0},{label:v("vsNewWindow"),icon:"panellayout",onClick:gs},{label:v("vsFloatWindow"),icon:"float",disabled:!e.tabId,onClick:so},{label:v("vsNewTerminal"),icon:"terminal",onClick:ss},{separator:!0},{label:v("vsSave"),icon:"save",hint:"Ctrl+S",disabled:!ft.value,onClick:()=>void Ia()},{label:v("vsSaveAs"),icon:"save",hint:"Ctrl+Shift+S",disabled:!ft.value,onClick:()=>Va()},{label:v("vsSaveAll"),disabled:Ct.value.length===0,onClick:()=>void Fr()},{label:v("vsMenuLocalDiff"),icon:"fileOut",disabled:!(Ce.value?.dirty&&!Ce.value.binary),onClick:()=>void Fa()}]),$n=g(null),{cmOpen:Jn,cmX:gn,cmY:Tn,openMenuAt:eo}=hn(),Ds=I(()=>{const f=n.projectDir;if(!f)return v("vsNoProject");const x=ze(f);return x||(Wt(f)?Tl(f):f)}),En=I(()=>n.projectDir?`${r.value} · ${v("vsRecentProjects")}`:v("vsRecentProjects")),un=I(()=>[{label:v("vsOpenFolder"),icon:"folderOpen",onClick:Ut},{separator:!0},...n.recentProjects.map(f=>({label:ze(f)||f,checked:f===n.projectDir,disabled:f===n.projectDir,trailing:{icon:"close",title:v("vsRecentForgetTitle"),onClick:()=>void Gn(f)},onClick:()=>void Ls(f)})),{separator:!0},{label:v("vsRecentClearAll"),icon:"trash",disabled:n.recentProjects.length===0,onClick:()=>void yn()}]);function In(){const f=$n.value?.getBoundingClientRect();eo(f?.left??0,(f?.bottom??0)+2)}async function Gn(f){const x=ze(f)||f;await Pt({title:v("vsRecentForgetTitle"),message:v("vsRecentForgetConfirm",{name:x})})&&(e.forgetProject(f),Y("ok",v("vsRecentForgot",{name:x})))}function Nn(f){const X=he.value??n.projectDir??"";$r({kind:f,dir:X,key:d,onDone:({path:Fe})=>{Ls(Fe)}})}async function yn(){if(n.recentProjects.length===0)return;await Pt({title:v("vsRecentClearAllTitle"),message:v("vsRecentClearAllConfirm")})&&(e.clearRecentProjects(),Y("ok",v("vsRecentCleared")))}async function wn(f){Dn(f),Y("info",v("vsProjectGone"))}async function Qn(f){const x=n.projectDir===f&&Ct.value.length>0;await Pt({title:v(x?"vsUnsavedTitle":"vsRemoveProjectTitle"),message:x?v("vsSwitchLoseMsg",{n:String(Ct.value.length)}):v("vsRemoveProjectConfirm",{name:ze(f)||f})})&&(Dn(f),Y("ok",v("vsProjectRemoved")))}function Dn(f){e.forgetProject(f),n.projectDir===f&&(vi(),n.projectDir=null,u())}const N=50,ve=3e4,Ie=g(null),He=g(""),Me=g(!1),Ge=g(0),Et=g([]),St=g(""),bn=g(0),Vn=g(!1),Rn=g(!1);function to(f,x){const X=x.includes("\\")?"\\":"/";return`${x.replace(/[\\/]+$/,"")}${X}${f.split("/").join(X)}`}function Ro(f,x){const X=f.lastIndexOf("/");if(f.slice(X+1).includes(x))return 0;if(f.includes(x))return 1;let Fe=0;for(const pt of x){if(Fe=f.indexOf(pt,Fe),Fe<0)return null;Fe+=1}return 2}const fn=I(()=>{const f=n.projectDir;if(!f)return[];const x=Et.value,X=ht=>{const sn=ht.lastIndexOf("/");return{abs:to(ht,f),name:sn<0?ht:ht.slice(sn+1),dir:sn<0?"":ht.slice(0,sn)}},Fe=He.value.trim().toLowerCase();if(!Fe)return x.slice(0,N).map(X);const pt=[];for(const ht of x){const sn=Ro(ht.toLowerCase(),Fe);sn!==null&&pt.push({rel:ht,score:sn})}return pt.sort((ht,sn)=>ht.score-sn.score||ht.rel.length-sn.rel.length||(ht.rel<sn.rel?-1:1)),pt.slice(0,N).map(ht=>X(ht.rel))});async function Rs(){const f=n.projectDir;if(!(!f||Vn.value)&&!(St.value===f&&Date.now()-bn.value<ve)){Vn.value=!0;try{const x=await Ep(f,d);Et.value=x.files,Rn.value=x.truncated,St.value=f,bn.value=Date.now()}catch{Et.value=[],St.value=""}finally{Vn.value=!1}}}function As(){n.projectDir&&(Me.value=!0,Ge.value=0,Rs(),Nt(()=>Ie.value?.focus()))}function Zn(){Ge.value=0}function es(){Me.value=!1,He.value=""}function Ms(f){const x=fn.value.length;x!==0&&(Me.value=!0,Ge.value=(Ge.value+f+x)%x)}function no(f){const x=fn.value[f??Ge.value];x&&(Me.value=!1,He.value="",Ie.value?.blur(),os(x.abs))}const An=g(null),qn=new Set,ts=new Set,Ps=new Set;Je(()=>n.projectDir,f=>qn.forEach(x=>x(f))),Je(z,f=>ts.forEach(x=>x(f))),Je(()=>n.activeTab,f=>Ps.forEach(x=>x(f)));function tn(){return n.activeTab?nT(e.slot)??null:null}const Kt=new Set,ns=new Set;let zn=null,pn=null;const y={apiVersion:Ss,get projectDir(){return n.projectDir},get theme(){return z.value},get activeFile(){return n.activeTab},onProjectChange(f){return qn.add(f),f(n.projectDir),()=>qn.delete(f)},onThemeChange(f){return ts.add(f),f(z.value),()=>ts.delete(f)},onDidChangeActiveFile(f){return Ps.add(f),f(n.activeTab),()=>Ps.delete(f)},openFile:(f,x)=>os(f,x),listOpenFiles:()=>[...n.openTabs],openDiff:(f,x)=>oo({title:f,lines:x}),toast:(f,x)=>Y(f,x),editor:{get view(){return tn()},getText:()=>tn()?.state.doc.toString()??"",isDirty:()=>n.activeTab?C[n.activeTab]?.dirty??!1:!1,onDidChangeTextDocument(f){const x=(Fe,pt)=>f({text:Fe,changes:pt});Kt.add(x),zn||(zn=sT(e.slot,(Fe,pt)=>Kt.forEach(ht=>ht(Fe,pt))));const X=tn();return X&&f({text:X.state.doc.toString(),changes:null}),()=>{Kt.delete(x),Kt.size===0&&zn&&(zn(),zn=null)}},getSelection:()=>tn()?.state.selection??null,onDidChangeSelection(f){const x=Fe=>f(Fe);ns.add(x),pn||(pn=oT(e.slot,Fe=>ns.forEach(pt=>pt(Fe))));const X=tn();return X&&f(X.state.selection),()=>{ns.delete(x),ns.size===0&&pn&&(pn(),pn=null)}},applyEdit(f){const x=tn();return!x||!f.length?!1:(x.dispatch({changes:f}),!0)},setDecorations(f){tn()&&An.value?.setExtension(f)},createDecorations(f){return An.value?.setDecorationsSpec(f.items),{extension:[],update(x){An.value?.setDecorationsSpec(x)}}}}},{cmOpen:_,cmX:Se,cmY:fe,openMenuAt:Le}=hn(),A=I(()=>[{label:v("vsFormat"),icon:"code",disabled:!n.activeTab||yt.value||Ce.value?.binary===!0,onClick:Xt},{separator:!0},{label:v("vsSave"),icon:"save",hint:"Ctrl+S",disabled:!ft.value||ue.value,onClick:()=>void Ia()},{label:v("vsSaveAs"),icon:"save",disabled:!ft.value,onClick:()=>Va()},{label:v("vsSaveAll"),disabled:Ct.value.length===0,onClick:()=>void Fr()},{separator:!0},{label:v("vsMinimap"),checked:Ue.vsMinimap,onClick:()=>{Ue.vsMinimap=!Ue.vsMinimap,Hn()}},{separator:!0},{label:v("vsMultiCursorHint"),disabled:!0}]);function Re(f){Le(f.x,f.y)}function Xt(){if(!n.activeTab)return;An.value?.format()??!1?Y("ok",v("vsFormatOk")):Y("error",v("vsFormatFail",{msg:yt.value?v("vsReadonly"):""}))}function Ut(){V.value=!0}function gs(){u(),mr({fresh:!0})||Y("info",v("vsNewWindowLimit"))}function so(){e.tabId&&Zv(e.tabId)}function ss(){Uv(n.projectDir??"")}async function Fs(){await e.init();const f=e.projectRequest.value;if(!f)return;if(e.projectRequest.value=null,tm(),f.dir===n.projectDir){const X=yc();X&&await os(X);return}await Ls(f.dir);const x=yc();x&&await os(x)}Je(()=>e.projectRequest.value?.n,()=>void Fs());async function Ls(f){const x=f!==n.projectDir;if(!(x&&Ct.value.length>0&&!await Pt({title:v("vsUnsavedTitle"),message:v("vsSwitchLoseMsg",{n:String(Ct.value.length)})}))){n.projectDir=f,p(f),St.value="",bn.value=0;try{await or(f,d)}catch{}x&&vi(),u()}}function vi(){for(const f of Object.keys(C))delete C[f];for(const f of Object.keys(G))delete G[f];for(const f of Object.keys(R))delete R[f];eT(e.slot),n.openTabs=[],n.activeTab=null}async function Pa(){if(Gc.has(d))return;Gc.add(d);let f=!1;const x=n.projectDir;if(x){const ht=await hl(x);if(ht&&!ht.isDir){const sn=Ze(x);sn&&sn!==x&&(n.projectDir=sn,n.openTabs.includes(x)||n.openTabs.push(x),n.activeTab=x,f=!0)}}const X=[...n.openTabs];if(X.length===0){f&&u();return}const Fe=await Promise.all(X.map(async ht=>(await hl(ht))?.isDir?ht:null)),pt=new Set(Fe.filter(ht=>!!ht));if(pt.size===0){f&&u();return}for(const ht of pt)delete C[ht],delete G[ht],delete R[ht];n.openTabs=n.openTabs.filter(ht=>!pt.has(ht)),n.activeTab&&pt.has(n.activeTab)&&(n.activeTab=n.openTabs[n.openTabs.length-1]??null),u()}async function os(f,x){nn.value=null,Ae.value=!1,n.openTabs.includes(f)||n.openTabs.push(f),n.activeTab=f,C[f]||await ys(f),x?.line&&(await Nt(),An.value?.revealLine(x.line)),u()}async function ys(f,x={}){if(!Z.has(f)&&!(C[f]?.dirty&&!x.force)){Z.add(f),delete G[f];try{const X=await vl(f,{encoding:x.encoding,hasBom:x.hasBom});C[f]={content:X.content,dirty:!1,encoding:X.encoding,hasBom:X.hasBom,eol:X.eol,mtime:X.mtime,binary:X.binary,conflict:!1},R[f]=(R[f]??0)+1}catch(X){G[f]=X instanceof Xs&&X.status===413?v("vsTooLarge"):X.message}finally{Z.delete(f)}}}function mi(f){pe(f)||(nn.value=null,n.activeTab=f,!C[f]&&!G[f]&&ys(f),u())}const nn=g(null);function oo(f){Ae.value=!1,nn.value=f}async function Fa(){const f=n.activeTab,x=f?C[f]:void 0;if(!(!f||!x||x.binary))try{const X=await vl(f),Fe=e3(X.content,x.content);oo({title:`${ze(f)} · ${v("vsLocalDiffTitle")}`,lines:Fe?Fe.lines:[v("vsLocalDiffTooBig")]})}catch(X){Y("error",X.message)}}const La=1e3,Os=new Map;function Ao(f){if(!Ue.autoSave)return;const x=Os.get(f);x&&clearTimeout(x),Os.set(f,setTimeout(()=>{Os.delete(f),C[f]?.dirty&&ws(f,{quiet:!0})},La))}function Mo(f){const x=Os.get(f);x&&clearTimeout(x),Os.delete(f)}const Po=I(Ta),gi=g(null),yi=I(()=>Po.value.find(f=>f.id===be.value)),wi=I(()=>[{id:"files",title:v("vsLeftTabFiles"),icon:"folder"},{id:"search",title:v("vsLeftTabSearch"),icon:"search",disabled:!n.projectDir},{id:"git",title:v("vsLeftTabGit"),icon:"git",disabled:!n.projectDir},...Po.value.filter(f=>!f.when||f.when(y)).map(f=>({id:f.id,title:gu(f.title),icon:f.icon}))]),T=I(()=>wi.value.filter(f=>!n.activityBar.hidden.includes(f.id))),S=I(()=>{if(n.projectDir)return 0;const f=new Set(Po.value.filter(X=>typeof X.when=="function").map(X=>X.id));if(!f.size)return 0;let x=0;for(const X of Us())X.enabled&&Qu(X.id).some(Fe=>f.has(Fe))&&x++;return x});Je(T,f=>{f.some(x=>x.id===be.value)||(be.value="files")},{immediate:!0});function $e(f){n.activityBar.hidden.includes(f)||n.activityBar.hidden.push(f),be.value===f&&(be.value="files"),u()}function nt(f){n.activityBar.hidden=n.activityBar.hidden.filter(x=>x!==f),u()}function zt(f){n.activityBar.hidden.includes(f)?nt(f):$e(f)}const $t=g(!1),ut=g(0),j=g(0),lt=g("bar"),Yt=g(null),jn=I(()=>({label:n.activityBar.position==="top"?v("vsActBarBottom"):v("vsActBarTop"),icon:"panellayout",onClick:()=>{n.activityBar.position=n.activityBar.position==="top"?"bottom":"top",u()}})),Is=I(()=>({label:n.sidebarSide==="left"?v("vsSideRight"):v("vsSideLeft"),icon:"float",onClick:()=>{n.sidebarSide=n.sidebarSide==="left"?"right":"left",u()}})),bi=I(()=>({label:Ae.value?v("vsUnfoldEditor"):v("vsFoldEditor"),icon:Ae.value?"chevronsRight":"chevronsLeft",onClick:()=>{Ae.value=!Ae.value}})),ki=I(()=>{if(lt.value==="view"&&Yt.value){const f=Yt.value;return[{label:v("vsActHide",{name:f.title}),icon:"close",onClick:()=>$e(f.id)},{separator:!0},bi.value,{separator:!0},jn.value,Is.value]}return[...wi.value.map(f=>({label:f.title,icon:f.icon??"",checked:!n.activityBar.hidden.includes(f.id),onClick:()=>zt(f.id)})),{separator:!0},bi.value,{separator:!0},jn.value,Is.value]});function af(f,x){const X=x.currentTarget?.getBoundingClientRect();ut.value=X?.right??x.clientX,j.value=X?.bottom??x.clientY,lt.value="view",Yt.value=f,$t.value=!0}function lf(f){ut.value=f.clientX,j.value=f.clientY,lt.value="bar",Yt.value=null,$t.value=!0}const Mr=I(Da);function rf(){return{path:n.activeTab,projectDir:n.projectDir}}const Pr=g(null),{cmOpen:Oa,cmX:cf,cmY:df,openMenuAt:uf}=hn();function ff(){const f=Pr.value?.getBoundingClientRect();f&&uf(f.left,f.top-4)}const pf=I(()=>{n.activeTab,n.projectDir;const f=rf();return[...Mr.value,...ai()].sort((X,Fe)=>(X.order??0)-(Fe.order??0)).map(X=>({label:X.text,disabled:!!X.when&&!X.when(f),onClick:()=>{try{Ea(X.commandId,f)}catch(Fe){Y("error",Fe.message)}}}))}),hf=I(()=>Mr.value.length+ai().length>0);Ts(f=>{const x=yi.value,X=gi.value;if(!x||!X||x.when&&!x.when(y))return;const Fe=x.mount(X,y);sa(X);const pt=new ResizeObserver(()=>sa(X));pt.observe(X),f(()=>{if(pt.disconnect(),typeof Fe=="function")try{Fe()}catch{}X.replaceChildren()})},{flush:"post"});function vf(f){const x=n.activeTab?C[n.activeTab]:void 0;x&&(x.content=f,x.dirty=!0,n.activeTab&&Ao(n.activeTab))}function mf(f,x){ee.line=f,ee.col=x}function gf(f){n.activeTab&&b(n.activeTab,f)}async function Ia(){const f=n.activeTab;if(!f)return;const x=C[f];!x||!x.dirty||await ws(f)}async function ws(f,x={}){const X=C[f];if(!f||!X||X.binary)return!1;ue.value=!0;try{const Fe=await dl(f,X.content,{key:d,encoding:X.encoding,hasBom:X.hasBom,eol:X.eol,expectedMtime:X.mtime,force:x.force});return X.dirty=!1,X.conflict=!1,X.mtime=Fe.mtime,x.quiet||Y("ok",v("vsSaved")),!0}catch(Fe){return Fe instanceof Xs&&Fe.code==="mtime-conflict"?(ue.value=!1,await Pt({title:v("vsConflictTitle"),message:v("vsConflictMsg",{name:ze(f)})})?await ws(f,{...x,force:!0}):!1):(Y("error",Fe.message),!1)}finally{ue.value=!1}}async function Fr(){const f=Ct.value.slice();if(f.length===0){Y("info",v("vsNoDirty"));return}let x=0;for(const X of f)await ws(X,{quiet:!0})&&x++;x===f.length&&Y("ok",v("vsAllSaved",{n:String(x)}))}function Va(){const f=n.activeTab,x=f?C[f]:void 0;!f||!x||x.binary||(ge.value=Ke(f)||n.projectDir,ne.value=ze(f),_e.value=!0)}async function yf(f){const x=n.activeTab,X=x?C[x]:void 0;if(!x||!X||X.binary||f===x)return;if(n.openTabs.includes(f)&&C[f]?.dirty){Y("error",v("vsSaveAsBlockedDirty",{name:ze(f)}));return}let Fe=!1;try{Fe=await pl(f)}catch{return}if(!(Fe&&!await Pt({title:v("vsSaveAsTitle"),message:v("vsOverwriteMsg",{path:f})}))){ue.value=!0;try{await dl(f,X.content,{key:d,encoding:X.encoding,hasBom:X.hasBom,eol:X.eol}),Y("ok",v("vsSavedAs",{path:ze(f)})),delete C[x],delete G[x],delete R[x],delete C[f],delete G[f],delete R[f],n.openTabs=n.openTabs.filter(pt=>pt!==x&&pt!==f),await os(f)}catch(pt){Y("error",pt.message)}finally{ue.value=!1}}}async function wf(f,x){const X=C[f];if(!(!X||X.binary)&&x&&!(Math.abs(x.mtimeMs-X.mtime)<1)){if(X.dirty){X.conflict||(X.conflict=!0);return}await ys(f,{force:!0}),Y("info",v("vsReloadedExternal",{name:ze(f)}))}}function bf(){ye=Rv((f,x)=>{n.openTabs.includes(f)&&wf(f,x)}),Je(()=>n.openTabs.slice(),f=>Nv(L,f),{immediate:!0})}async function kf(){const f=n.activeTab,x=f?C[f]:void 0;!f||!x||!await Pt({title:v("vsConflictTitle"),message:v("vsConflictMsgReload",{name:ze(f)})})||await ys(f,{force:!0})}function xf(){const f=n.activeTab;if(f){if(Wt(f)){Y("error",v("remoteNoExternal"));return}md(f)}}async function xi(f){if(pe(f)){nn.value=null;return}if(C[f]?.dirty){const X=await Wr({title:v("vsUnsavedTitle"),message:v("vsUnsavedMsg"),choices:[{id:"save",text:v("vsCloseSave"),primary:!0},{id:"discard",text:v("vsCloseDiscard")},{id:"cancel",text:v("cancel")}]});if(X==="save"){if(!await ws(f,{quiet:!0}))return}else if(X!=="discard")return}delete C[f],delete G[f],delete R[f],Mo(f),nl(e.slot,f),n.openTabs=n.openTabs.filter(X=>X!==f),n.activeTab===f&&(n.activeTab=n.openTabs[n.openTabs.length-1]??null),u()}async function _f(f){await ws(f,{quiet:!0})&&await xi(f)}async function za(f){const x=f.filter(Fe=>C[Fe]?.dirty),X=Fe=>{delete C[Fe],delete G[Fe],delete R[Fe],Mo(Fe),nl(e.slot,Fe),n.openTabs=n.openTabs.filter(pt=>pt!==Fe)};if(x.length>1){const Fe=await Wr({title:v("vsUnsavedTitle"),message:v("vsCloseManyMsg",{n:String(x.length)}),choices:[{id:"save",text:v("vsCloseSaveAll"),primary:!0},{id:"discard",text:v("vsCloseDiscardAll")},{id:"cancel",text:v("cancel")}]});if(Fe!=="save"&&Fe!=="discard")return;const pt=new Set;if(Fe==="save")for(const ht of x)await ws(ht,{quiet:!0})||pt.add(ht);for(const ht of f)Fe==="save"&&pt.has(ht)||X(ht);n.activeTab&&!n.openTabs.includes(n.activeTab)&&(n.activeTab=n.openTabs[n.openTabs.length-1]??null),u();return}for(const Fe of f)await xi(Fe)}async function Cf(f){pe(f)||await za(n.openTabs.filter(x=>x!==f))}async function Sf(f){if(pe(f))return;const x=n.openTabs.indexOf(f);x<0||await za(n.openTabs.slice(x+1))}async function $f(){await za([...n.openTabs])}function Tf(f){delete C[f],delete G[f],delete R[f],Mo(f),nl(e.slot,f),n.openTabs=n.openTabs.filter(x=>x!==f),n.activeTab===f&&(n.activeTab=n.openTabs[n.openTabs.length-1]??null),u()}function Ef(f,x){const X=C[f];X&&(C[x]=X,delete C[f]);const Fe=Vu(e.slot),pt=Fe.get(f);pt&&(Fe.delete(f),Fe.set(x,pt)),R[f]!==void 0&&(R[x]=R[f],delete R[f]),delete G[f],G[x]&&delete G[x],n.openTabs=n.openTabs.map(ht=>ht===f?x:ht),n.activeTab===f&&(n.activeTab=x),u()}const Fo=g(!1),Nf=I(()=>({width:`calc(${Math.round(n.split*1e3)/10}% - 3px)`}));function ja(f){if(!Fo.value||!D.value)return;const x=D.value.getBoundingClientRect();if(x.width<=0)return;let X=(f.clientX-x.left)/x.width;n.sidebarSide==="right"&&(X=1-X),n.split=Math.min(.85,Math.max(.15,X))}function Ba(){Fo.value&&(Fo.value=!1,document.removeEventListener("mousemove",ja),document.removeEventListener("mouseup",Ba),document.body.style.userSelect="",document.body.style.cursor="",u())}function Df(){Fo.value=!0,document.addEventListener("mousemove",ja),document.addEventListener("mouseup",Ba),document.body.style.userSelect="none",document.body.style.cursor="col-resize"}function Rf(f){const x=f?.tagName;return x==="INPUT"||x==="TEXTAREA"||x==="SELECT"}function Lr(f){if(!(f.ctrlKey||f.metaKey))return;const x=f.key.toLowerCase();if(x==="p"){if(Rf(f.target))return;f.preventDefault(),As();return}if(x!=="s"){if(x==="w"){f.preventDefault(),nn.value?nn.value=null:n.activeTab&&xi(n.activeTab);return}if(x==="pagedown"||x==="pageup"){f.preventDefault(),Af(x==="pagedown"?1:-1);return}return}f.preventDefault(),f.shiftKey?Va():Ia()}function Af(f){const x=n.openTabs;if(x.length<2)return;const X=n.activeTab?x.indexOf(n.activeTab):-1,Fe=((X<0?0:X+f)+x.length)%x.length;mi(x[Fe])}function Or(f){Ct.value.length>0&&(f.preventDefault(),f.returnValue="")}const _i=g(null),Ir=g(!1);let Ci=null;function Vr(){const f=_i.value;if(!f)return;f.classList.remove("compact");const X=f.scrollWidth-f.clientWidth>1;f.classList.toggle("compact",X),Ir.value=X}const Mf=560,Pf=680;let Si=null;function zr(){const f=D.value?.clientWidth??0;f<=Mf&&n.projectDir?Ae.value=!0:f>=Pf&&(Ae.value=!1)}return cn(async()=>{s3(),_i.value&&(Ci=new ResizeObserver(()=>Vr()),Ci.observe(_i.value),Vr()),D.value&&(Si=new ResizeObserver(()=>zr()),Si.observe(D.value),zr()),await h();const f=F();for(const[Fe,pt]of Object.entries(f))n.openTabs.includes(Fe)&&(C[Fe]=pt);await Pa(),n.activeTab&&!C[n.activeTab]&&ys(n.activeTab),a.value=!0,await Nt(),await ae.value?.rebuild(),window.addEventListener("keydown",Lr),window.addEventListener("beforeunload",Or),window.addEventListener("beforeunload",u),bf();const x=`${d}:${n.projectDir??""}`;n.projectDir&&!qc.has(x)&&(qc.add(x),Rs());const X=em();X&&e.requestOpenProject(X),e.projectRequest.value&&await Fs()}),Mt(()=>{Ci?.disconnect(),Ci=null,Si?.disconnect(),Si=null,window.removeEventListener("keydown",Lr),window.removeEventListener("beforeunload",Or),window.removeEventListener("beforeunload",u),document.removeEventListener("mousemove",ja),document.removeEventListener("mouseup",Ba),ye?.(),ye=null,Dv(L),k({...C}),u()}),(f,x)=>(l(),c("div",{ref_key:"rootRef",ref:D,class:"vs-pane","data-theme":s(z),style:kt(H.value)},[o("div",{ref_key:"topbarRef",ref:_i,class:te(["vs-topbar",{compact:Ir.value}])},[o("span",{class:"vs-brand",title:s(v)("vsBrand")},[m(se,{class:"vs-topbar-ico",name:"code",size:14}),o("span",g3,i(s(v)("vsBrand")),1)],8,m3),x[19]||(x[19]=o("span",{class:"vs-sep"},null,-1)),o("button",{ref_key:"fileBtnRef",ref:et,class:te(["vs-btn vs-btn-menu",{open:s(at)}]),title:s(v)("vsMenuFile"),onClick:ot},[m(se,{class:"vs-topbar-ico",name:"folder",size:13}),o("span",w3,i(s(v)("vsMenuFile")),1),x[16]||(x[16]=o("span",{class:"vs-caret"},null,-1))],10,y3),x[20]||(x[20]=o("span",{class:"vs-sep"},null,-1)),o("button",{ref_key:"recentBtnRef",ref:$n,class:te(["vs-btn vs-btn-menu vs-recent-btn",{open:s(Jn)}]),title:En.value,onClick:In},[m(se,{class:"vs-topbar-ico",name:"clock",size:13}),o("span",k3,i(Ds.value),1),x[17]||(x[17]=o("span",{class:"vs-caret"},null,-1))],10,b3),x[21]||(x[21]=o("span",{class:"vs-sep"},null,-1)),o("span",{class:"vs-project-path",title:s(n).projectDir??s(v)("vsNoProject")},i(r.value),9,x3),x[22]||(x[22]=o("span",{class:"vs-spacer"},null,-1)),o("button",{class:"vs-quickopen-trigger",title:s(v)("vsQuickOpenPlaceholder"),disabled:!s(n).projectDir,onClick:As},[m(se,{name:"search",size:13}),o("span",C3,i(Vn.value?s(v)("vsSearchIndexing"):s(v)("vsQuickOpenPlaceholder")),1),x[18]||(x[18]=o("span",{class:"vs-quickopen-kbd"},"Ctrl+P",-1))],8,_3)],2),S.value>0?(l(),c("button",{key:0,class:"vs-exthint",type:"button",title:s(v)("vsOpenFolder"),onClick:Ut},[m(se,{name:"puzzle",size:13}),o("span",null,i(s(v)("vsExtNeedProject",{n:S.value})),1)],8,S3)):M("",!0),o("div",{class:te(["vs-body",{"right-folded":Ae.value,"side-right":s(n).sidebarSide==="right"}])},[o("div",{class:"vs-left",style:kt(Nf.value)},[o("div",{class:te(["vs-activity",{btm:s(n).activityBar.position==="bottom"}]),onContextmenu:xe(lf,["prevent"])},[(l(!0),c(ie,null,Pe(T.value,X=>(l(),c("button",{key:X.id,class:te(["vs-act-btn",{active:be.value===X.id}]),disabled:X.disabled,title:X.title,onClick:Fe=>W(X.id),onContextmenu:xe(Fe=>af(X,Fe),["prevent","stop"])},[s(Ho)(X.icon??"")?(l(),Xe(se,{key:0,name:X.icon??"",size:17},null,8,["name"])):(l(),c("span",T3,i(X.title.slice(0,1)),1))],42,$3))),128))],34),o("div",E3,[xt(m(kT,{ref_key:"treeRef",ref:ae,root:s(n).projectDir,"active-path":s(n).activeTab,onOpenFile:os,onFileRemoved:Tf,onFileRenamed:Ef,onProjectMissing:wn,onRemoveProject:Qn},null,8,["root","active-path"]),[[bo,be.value==="files"]]),be.value==="search"?(l(),Xe(V8,{key:0,"project-dir":s(n).projectDir||"",onOpen:B},null,8,["project-dir"])):M("",!0),xt(m(FN,{class:"vs-git-view",onOpenDiff:oo},null,512),[[bo,be.value==="git"]]),be.value==="git"&&!J.value?(l(),c("div",N3,i(s(v)("vsGitNoRepo")),1)):M("",!0),yi.value?(l(),c("div",{key:2,ref_key:"extHostRef",ref:gi,class:"vs-ext-view"},null,512)):M("",!0)])],4),o("div",{class:te(["vs-split",{dragging:Fo.value}]),role:"separator","aria-orientation":"vertical",onMousedown:xe(Df,["prevent"])},null,34),o("div",D3,[m(AT,{tabs:Ye.value,active:st.value,onSelect:mi,onClose:xi,onSave:ws,onCloseSave:_f,onCloseOthers:Cf,onCloseRight:Sf,onCloseAll:$f},null,8,["tabs","active"]),o("div",R3,[nn.value?(l(),c("div",A3,[m(Jo,{lines:nn.value.lines,empty:s(v)("gitDiffEmpty")},null,8,["lines","empty"])])):s(n).activeTab?Ve.value?(l(),c("div",O3,[x[23]||(x[23]=o("span",{class:"vs-loading-spin","aria-hidden":"true"},null,-1)),o("span",null,i(s(v)("vsLoading")),1)])):rt.value?(l(),c("div",I3,i(rt.value),1)):Ce.value?.binary?(l(),c("div",V3,[o("div",z3,i(s(v)("vsBinaryHint")),1),o("button",{class:"vs-btn",onClick:xf},i(s(v)("vsOpenExternal")),1)])):(l(),Xe(uE,{key:5,ref_key:"editorRef",ref:An,path:s(n).activeTab,slot:s(e).slot,"initial-content":qe.value,"initial-view":Oe.value,"doc-rev":ce.value,readonly:yt.value,dark:s(z)==="dark",onChange:vf,onCursor:mf,onView:gf,onContextmenu:Re},null,8,["path","slot","initial-content","initial-view","doc-rev","readonly","dark"])):(l(),c("div",M3,[m(se,{class:"vs-empty-ico",name:"code",size:44}),o("div",P3,i(s(v)("vsEmptyTitle")),1),o("div",F3,i(s(v)("vsEmptyHint")),1),o("div",L3,[o("button",{class:"vs-btn",onClick:Ut},i(s(v)("vsOpenFolder")),1),o("button",{class:"vs-btn",onClick:x[0]||(x[0]=X=>Nn("git"))},i(s(v)("menuCloneGit")),1)])]))]),o("div",j3,[J.value?(l(),c("button",{key:0,class:"vs-status-seg vs-status-btn",title:s(n).projectDir??"",onClick:x[1]||(x[1]=X=>W("git"))},[m(se,{name:"git",size:11}),de(" "+i(J.value),1)],8,B3)):M("",!0),yt.value?(l(),c("span",U3,i(s(v)("vsReadonly")),1)):M("",!0),dt.value?(l(),c("button",{key:2,class:"vs-status-conflict",onClick:kf},i(s(v)("vsConflictBadge")),1)):M("",!0),hf.value?(l(),c("button",{key:3,ref_key:"extMenuBtnRef",ref:Pr,class:te(["vs-status-seg vs-status-btn vs-status-ext",{open:s(Oa)}]),title:s(v)("vsMenuExtensions"),onClick:ff},[m(se,{name:"puzzle",size:11}),de(" "+i(s(v)("vsMenuExtensions")),1)],10,H3)):M("",!0),x[24]||(x[24]=o("span",{class:"vs-status-spacer"},null,-1)),o("span",W3,"Ln "+i(ee.line)+", Col "+i(ee.col),1),o("button",{class:"vs-status-seg vs-status-btn",disabled:!s(n).activeTab,onClick:q},i(Ee.value),9,G3),o("button",{class:"vs-status-seg vs-status-btn",disabled:!s(n).activeTab,onClick:Ln},i(Q.value),9,q3),o("span",K3,i(it.value),1)])])],2),s(at)?(l(),Xe(Zt,{key:1,items:On.value,x:s(Cn),y:s(Sn),onClose:x[2]||(x[2]=X=>at.value=!1)},null,8,["items","x","y"])):M("",!0),s(Oa)?(l(),Xe(Zt,{key:2,items:pf.value,x:s(cf),y:s(df),placement:"top",onClose:x[3]||(x[3]=X=>Oa.value=!1)},null,8,["items","x","y"])):M("",!0),s(Jn)?(l(),Xe(Zt,{key:3,items:un.value,x:s(gn),y:s(Tn),onClose:x[4]||(x[4]=X=>Jn.value=!1)},null,8,["items","x","y"])):M("",!0),Me.value?(l(),c("div",{key:4,class:"vs-quickopen-backdrop",onMousedown:xe(es,["self"])},[o("div",{class:"vs-quickopen",onMousedown:x[9]||(x[9]=xe(()=>{},["stop"]))},[xt(o("input",{ref_key:"searchInputRef",ref:Ie,"onUpdate:modelValue":x[5]||(x[5]=X=>He.value=X),class:"vs-quickopen-input",placeholder:Vn.value?s(v)("vsSearchIndexing"):s(v)("vsQuickOpenPlaceholder"),onInput:Zn,onKeydown:[x[6]||(x[6]=bt(xe(X=>Ms(1),["prevent"]),["down"])),x[7]||(x[7]=bt(xe(X=>Ms(-1),["prevent"]),["up"])),x[8]||(x[8]=bt(xe(X=>no(),["prevent"]),["enter"])),bt(xe(es,["prevent"]),["esc"])]},null,40,X3),[[Ot,He.value]]),o("div",Y3,[fn.value.length>0?(l(),c(ie,{key:0},[(l(!0),c(ie,null,Pe(fn.value,(X,Fe)=>(l(),c("div",{key:X.abs,class:te(["vs-search-row",{active:Fe===Ge.value}]),title:X.abs,onMousedown:xe(pt=>no(Fe),["prevent"]),onMouseenter:pt=>Ge.value=Fe},[o("span",Q3,i(X.name),1),o("span",Z3,i(X.dir),1)],42,J3))),128)),Rn.value?(l(),c("div",eD,i(s(v)("vsSearchTruncated")),1)):M("",!0)],64)):He.value.trim()&&!Vn.value?(l(),c("div",tD,i(s(v)("vsSearchNoResult")),1)):M("",!0)])],32)],32)):M("",!0),s(O)?(l(),Xe(Zt,{key:5,items:Ne.value,x:s(E),y:s(K),onClose:x[10]||(x[10]=X=>O.value=!1)},null,8,["items","x","y"])):M("",!0),s(re)?(l(),Xe(Zt,{key:6,items:Gt.value,x:s(ct),y:s(wt),onClose:x[11]||(x[11]=X=>re.value=!1)},null,8,["items","x","y"])):M("",!0),s(_)?(l(),Xe(Zt,{key:7,items:A.value,x:s(Se),y:s(fe),onClose:x[12]||(x[12]=X=>_.value=!1)},null,8,["items","x","y"])):M("",!0),$t.value?(l(),Xe(Zt,{key:8,items:ki.value,x:ut.value,y:j.value,onClose:x[13]||(x[13]=X=>$t.value=!1)},null,8,["items","x","y"])):M("",!0),m(ad),m(ca,{modelValue:V.value,"onUpdate:modelValue":x[14]||(x[14]=X=>V.value=X),"initial-dir":he.value,onConfirm:Ls},null,8,["modelValue","initial-dir"]),m(ca,{modelValue:_e.value,"onUpdate:modelValue":x[15]||(x[15]=X=>_e.value=X),mode:"file","initial-dir":ge.value,"initial-name":ne.value,onConfirm:yf},null,8,["modelValue","initial-dir","initial-name"])],12,v3))}}),sD=_t(nD,[["__scopeId","data-v-2b4bfc75"]]),oD={class:"fw-term-headicon"},iD={class:"fw-term-tag"},aD=["title"],lD={class:"fw-term-note"},rD=["title"],cD=["title"],dD={key:0,class:"fw-term-searchbar"},uD=["placeholder","onKeydown"],fD=["title"],pD=["title"],hD=["title"],vD=["title"],mD={class:"fw-term-footer"},gD=["title","disabled"],yD=["title","disabled"],wD=["title"],bD=["title"],kD=["title"],xD={class:"fw-term-shellhint"},_D=["title"],CD=["title"],ll=320,rl=240,Kc=10,Xc=24,SD=vt({__name:"TerminalWindow",props:{tab:{}},emits:["close"],setup(t,{emit:e}){const n=t,a=e,{t:r}=Ft(),d=g(680),h=g(460),u=g(0),p=g(0),w=g(null);let b=!1;const k=g(null),F=I(()=>{const Be=n.tab.cwd?.trim();return Be?Be.replace(/[\\/]$/,"").split(/[\\/]/).pop()??"":""}),L=I(()=>n.tab.shell==="powershell"?"PS":"cmd"),D=I(()=>!!n.tab.ssh&&!n.tab.sshDegraded),z=I(()=>!!n.tab.ssh),H=I(()=>{const Be=n.tab.ssh;return Be?Be.remote&&Be.remote!=="/"?`${Be.label} · ${Be.remote}`:Be.label:""}),C=I(()=>D.value?H.value:F.value||n.tab.cwd||r("terminalTitle")),Z=I(()=>D.value?H.value:`${L.value} · ${F.value||n.tab.cwd||r("terminal")}`);function G(Be){return Math.min(Math.max(0,Be),Math.max(0,window.innerWidth-d.value))}function R(Be){return Math.min(Math.max(0,Be),Math.max(0,window.innerHeight-h.value))}function ue(Be){d.value=Math.max(ll,Be.w),h.value=Math.max(rl,Be.h),u.value=G(Be.x),p.value=R(Be.y)}function V(){Ih(n.tab.id,{x:u.value,y:p.value,w:d.value,h:h.value})}const he=I(()=>({position:"fixed",left:`${u.value}px`,top:`${p.value}px`,width:`${d.value}px`,height:`${h.value}px`}));let _e=0;Je([u,p,d,h],()=>{b&&(window.clearTimeout(_e),_e=window.setTimeout(V,250))});let ge=!1,ne=0,ae=0;function Te(Be){Be.target.closest(".fw-term-headclose, .fw-term-headmin")||(b=!0,ge=!0,ne=Be.clientX-u.value,ae=Be.clientY-p.value,document.body.style.userSelect="none",document.addEventListener("mousemove",je),document.addEventListener("mouseup",be))}function je(Be){if(!ge)return;const Qe=w.value,et=Qe?.offsetWidth??d.value,at=Qe?.offsetHeight??h.value;u.value=Math.min(Math.max(0,Be.clientX-ne),window.innerWidth-et),p.value=Math.min(Math.max(0,Be.clientY-ae),Math.max(0,window.innerHeight-at))}function be(){ge&&(ge=!1,document.body.style.userSelect="",document.removeEventListener("mousemove",je),document.removeEventListener("mouseup",be),V())}Mt(be);let Ae=!1,W=0,J=0,B=0,ee=0;function ye(Be){b=!0,Ae=!0,W=Be.clientX,J=Be.clientY,B=d.value,ee=h.value,document.body.style.userSelect="none",document.addEventListener("mousemove",ze),document.addEventListener("mouseup",Ke)}function ze(Be){if(!Ae)return;const Qe=Math.max(ll,window.innerWidth-u.value-4),et=Math.max(rl,window.innerHeight-p.value-4);d.value=Math.min(Math.max(ll,B+(Be.clientX-W)),Qe),h.value=Math.min(Math.max(rl,ee+(Be.clientY-J)),et)}function Ke(){Ae&&(Ae=!1,document.body.style.userSelect="",document.removeEventListener("mousemove",ze),document.removeEventListener("mouseup",Ke),V())}Mt(Ke);function Ze(){b=!0,d.value=Math.min(680,window.innerWidth-12),h.value=Math.min(460,window.innerHeight-12),V()}let we=null,ke=null,Ye=null,st=null,pe=null;function Ce(Be){const Qe=Be??k.value,et=getComputedStyle(Qe||document.documentElement),at=(Cn,Sn)=>(et.getPropertyValue(Cn)||Sn).trim();return{background:at("--base","#1e1e2e"),foreground:at("--text","#cdd6f4"),cursor:at("--text","#cdd6f4"),cursorAccent:at("--base","#1e1e2e"),selectionBackground:at("--wt-sel-bg","rgba(137, 180, 250, 0.35)"),black:at("--wt-term-black","#11111b"),red:at("--red","#f38ba8"),green:at("--green","#a6e3a1"),yellow:at("--yellow","#f9e2af"),blue:at("--blue","#89b4fa"),magenta:at("--mauve","#cba6f7"),cyan:at("--teal","#94e2d5"),white:at("--wt-term-white","#bac2de"),brightBlack:at("--wt-term-brightblack","#585b70"),brightRed:at("--red","#f38ba8"),brightGreen:at("--green","#a6e3a1"),brightYellow:at("--yellow","#f9e2af"),brightBlue:at("--sapphire","#74c7ec"),brightMagenta:at("--mauve","#cba6f7"),brightCyan:at("--teal","#94e2d5"),brightWhite:at("--wt-term-brightwhite","#cdd6f4")}}function qe(Be,Qe){const et=k.value;return(getComputedStyle(et||document.documentElement).getPropertyValue(Be)||Qe).trim()}function ce(){const Be=k.value;if(!Be||we)return;const Qe=Hh(n.tab.id);st=document.createElement("div"),st.className="fw-term-xterm",Be.appendChild(st);const et=new rp({cursorBlink:!0,fontSize:Q.value,fontFamily:'Consolas, "Cascadia Code", "Courier New", monospace',scrollback:1e4,theme:Ce(st),allowTransparency:!1,allowProposedApi:!0});we=et,ke=new up,et.loadAddon(ke),et.loadAddon(new cp),Ye=new dp,et.loadAddon(Ye),et.attachCustomKeyEventHandler(Ne),et.open(st),et.write(n.tab.output),et.onData(at=>Ph(n.tab.session,at)),tc(n.tab.id,at=>we?.write(at)),Nt(()=>{Ve(),Qe&&we?.focus()})}function Ve(){try{ke?.fit()}catch{}rt()}function rt(){we&&(we.cols<2||we.rows<2||Fh(n.tab.session,we.cols,we.rows))}function yt(){we?.focus()}function dt(Be){Be.target?.closest("button, input, textarea, .fw-term-resizer, .fw-term-headmin, .fw-term-headclose")||we?.focus()}const it=g(!1),Oe=g(""),U=g(!1),P=g(null),Q=I(()=>Ue.termFontSize);function Ee(){return{caseSensitive:U.value,incremental:!0,decorations:{matchBackground:qe("--wt-search-match-bg","rgba(166, 173, 200, 0.4)"),matchBorder:qe("--wt-search-match-bg","rgba(166, 173, 200, 0)"),activeMatchBackground:qe("--wt-search-active-bg","rgba(166, 227, 161, 0.6)"),activeMatchBorder:qe("--wt-search-active-border","#a6e3a1"),matchOverviewRuler:qe("--wt-search-active-border","#a6e3a1"),activeMatchColorOverviewRuler:qe("--wt-search-active-border","#a6e3a1")}}}function O(Be){const Qe=Oe.value.trim();if(!Qe){Ye?.clearDecorations();return}Be?Ye?.findNext(Qe,Ee()):Ye?.findPrevious(Qe,Ee())}function E(){it.value=!0,Nt(()=>{P.value?.focus(),P.value?.select()}),O(!0)}function K(){it.value=!1,Oe.value="",Ye?.clearDecorations(),yt()}Je([Oe,U],()=>{it.value&&O(!0)});function $(Be){const Qe=Math.min(Math.max(Kc,Math.round(Be)),Xc);Qe!==Ue.termFontSize&&(Ue.termFontSize=Qe,Hn(),we&&(we.options.fontSize=Qe),Nt(Ve))}async function q(){try{const Be=await navigator.clipboard.readText();Be&&we?.paste(Be)}catch{}}function Ne(Be){if(Be.type!=="keydown"||!we)return!0;const Qe=Be.ctrlKey||Be.metaKey,et=Be.key.toLowerCase();if(Qe&&et==="f")return Be.preventDefault(),E(),!1;if(Qe&&et==="c"){const at=we.getSelection();return at?(Be.preventDefault(),navigator.clipboard.writeText(at).catch(()=>{}),we.clearSelection(),!1):!0}return Qe&&(et==="v"||et==="y")?(Be.preventDefault(),q(),!1):(Qe||Be.altKey)&&(et==="="||et==="+"||et==="-"||et==="_")?(Be.preventDefault(),$(Q.value+(et==="-"||et==="_"?-1:1)),!1):Qe&&et==="0"?(Be.preventDefault(),$(13),!1):!0}function re(){n.tab.shell=n.tab.shell==="powershell"?"cmd":"powershell",ic(n.tab,De.key),Nt(Ve)}function ct(){ic(n.tab,De.key),Nt(Ve)}function wt(){cs.value?Y("ok",r("terminalAdminOn")):Y("info",r("terminalAdminHint"))}function Lt(){n.tab.output="",we?.clear()}function Ln(){gh(n.tab.id)}Je(()=>ml(n.tab.id),Be=>{Be||Nt(()=>{Ve(),we?.focus()})});let Gt;return typeof MutationObserver<"u"&&(Gt=new MutationObserver(()=>{we&&st&&(we.options.theme=Ce(st))}),Gt.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]})),Mt(()=>Gt?.disconnect()),cn(()=>{const Be=Oh(n.tab.id);ue(Be??Bh()),xd(),ce(),k.value&&typeof ResizeObserver<"u"&&(pe=new ResizeObserver(()=>Ve()),pe.observe(k.value))}),Mt(()=>{pe?.disconnect(),pe=null,Rd(n.tab.session),tc(n.tab.id,null),we?.dispose(),we=null,ke=null,Ye=null,st?.remove(),st=null}),(Be,Qe)=>(l(),c("div",{ref_key:"rootEl",ref:w,class:"fw-term-window",style:kt(he.value),onMousedown:dt},[o("div",{class:"fw-term-head",onMousedown:xe(Te,["prevent"])},[o("span",oD,[m(se,{name:"terminal",size:13})]),o("span",iD,i(s(r)("terminal"))+" #"+i(t.tab.name),1),D.value?(l(),c("span",{key:0,class:"fw-term-sshbadge",title:s(r)("termSshBadge")},"SSH",8,aD)):M("",!0),o("span",lD,i(C.value),1),o("span",{class:"fw-term-headmin",title:s(r)("terminalMinimize"),onClick:xe(Ln,["stop"])},"–",8,rD),o("span",{class:"fw-term-headclose",title:s(r)("terminalCloseTitle"),onClick:Qe[0]||(Qe[0]=xe(et=>a("close"),["stop"]))},"✕",8,cD)],32),it.value?(l(),c("div",dD,[xt(o("input",{ref_key:"searchInputEl",ref:P,"onUpdate:modelValue":Qe[1]||(Qe[1]=et=>Oe.value=et),class:"fw-term-search-input",placeholder:s(r)("termSearchPlaceholder"),spellcheck:"false",onKeydown:[Qe[2]||(Qe[2]=bt(xe(et=>O(!0),["prevent"]),["enter"])),Qe[3]||(Qe[3]=bt(xe(et=>O(!1),["shift","prevent"]),["enter"])),bt(xe(K,["prevent"]),["esc"])]},null,40,uD),[[Ot,Oe.value]]),o("button",{class:te(["fw-term-search-case",{on:U.value}]),title:s(r)("termSearchCase"),onClick:Qe[4]||(Qe[4]=et=>U.value=!U.value)},"Aa",10,fD),o("button",{class:"fw-term-search-btn",title:s(r)("termSearchPrev"),onClick:Qe[5]||(Qe[5]=et=>O(!1))},"▲",8,pD),o("button",{class:"fw-term-search-btn",title:s(r)("termSearchNext"),onClick:Qe[6]||(Qe[6]=et=>O(!0))},"▼",8,hD),o("button",{class:"fw-term-search-btn fw-term-search-close",title:s(r)("termSearchClose"),onClick:K},"✕",8,vD)])):M("",!0),o("div",{ref_key:"outEl",ref:k,class:"fw-term-out","box-":"double",onClick:yt},null,512),o("div",mD,[o("button",{class:"fw-term-btn",onClick:Lt},i(s(r)("terminalClear")),1),o("button",{class:"fw-term-btn",title:s(r)("termFontSmaller"),disabled:Q.value<=Kc,onClick:Qe[7]||(Qe[7]=et=>$(Q.value-1))},"A−",8,gD),o("button",{class:"fw-term-btn",title:s(r)("termFontLarger"),disabled:Q.value>=Xc,onClick:Qe[8]||(Qe[8]=et=>$(Q.value+1))},"A+",8,yD),z.value?(l(),c("button",{key:1,class:"fw-term-btn",title:s(r)("termSshReconnectTitle"),onClick:ct},i(s(r)("termSshReconnect")),9,bD)):(l(),c("button",{key:0,class:"fw-term-btn",title:s(r)("terminalShellSwitch"),onClick:re},i(L.value),9,wD)),s(cs)!==null&&!D.value?(l(),c("button",{key:2,class:te(["fw-term-admin",{on:s(cs)}]),title:s(cs)?s(r)("terminalAdminOn"):s(r)("terminalAdminOff"),onClick:wt},[m(se,{name:"shield",size:11}),o("span",null,i(s(cs)?s(r)("terminalAdmin"):s(r)("terminalAdminNormal")),1)],10,kD)):M("",!0),Qe[9]||(Qe[9]=o("div",{class:"fw-spacer"},null,-1)),o("span",xD,i(Z.value),1),o("span",{class:"fw-term-kbdhint",title:s(r)("termCopyHint")},"Ctrl+C 复制 · Ctrl+V 粘贴 · Ctrl+F 搜索",8,_D)]),o("div",{class:"fw-term-resizer",title:s(r)("terminalResizeTitle"),onMousedown:xe(ye,["prevent"]),onDblclick:xe(Ze,["stop"])},null,40,CD)],36))}}),$D=_t(SD,[["__scopeId","data-v-6d3078d7"]]),TD=["title"],ED={class:"fw-term-card-head"},ND={class:"fw-term-card-ico"},DD={class:"fw-term-card-title"},RD=["title"],AD=["title"],MD=["title"],PD={class:"fw-term-card-body"},FD=vt({__name:"TerminalMiniWindow",props:{tab:{}},setup(t){const e=t,n=I(()=>{if(e.tab.ssh)return e.tab.ssh.label;const u=e.tab.cwd?.trim();if(u){const p=u.replace(/[\\/]$/,"").split(/[\\/]/).pop();if(p)return p}return v("terminal")}),a=I(()=>{const u=e.tab.ssh;return u?u.remote&&u.remote!=="/"?`${u.label} · ${u.remote}`:u.label:e.tab.cwd||v("terminal")}),r=I(()=>{const u=bh(e.tab.id);if(!u)return"";const p=u.replace(/\r/g,"").split(`
`);let w=p.length;for(;w>0&&!p[w-1].trim();)w--;return p.slice(Math.max(0,w-5),w).join(`
`)});function d(){Ys.value=e.tab.id,ar(e.tab.id)}function h(){Ad(e.tab.id),Tt.value.length||(De.termOpen=!1)}return(u,p)=>(l(),c("div",{class:te(["fw-term-card",{active:t.tab.id===s(Ys)}]),title:a.value,onClick:d},[o("div",ED,[o("span",ND,[m(se,{name:"terminal",size:12})]),o("span",DD,i(n.value),1),t.tab.ssh?(l(),c("span",{key:0,class:"fw-term-card-ssh",title:s(v)("termSshBadge")},"SSH",8,RD)):s(cs)?(l(),c("span",{key:1,class:"fw-term-card-admin",title:s(v)("terminalAdminOn")},[m(se,{name:"shield",size:10})],8,AD)):M("",!0),o("span",{class:"fw-term-card-close",title:s(v)("terminalCloseTitle"),onClick:xe(h,["stop"])},"✕",8,MD)]),o("pre",PD,i(r.value),1)],10,TD))}}),LD=_t(FD,[["__scopeId","data-v-cfbf612f"]]),OD=["title"],ID={key:0,class:"dsh-term-dock-count"},VD=["title"],zD={class:"dsh-term-dock-listhead"},jD=["title"],BD=9,Li=36,Jt=8,Yc=4,Oi=48,UD=vt({__name:"TerminalHost",setup(t){function e(){return document.documentElement.getAttribute("data-theme")==="light"?"light":"dark"}function n(){const B=document.getElementById("dsh-term-root");B&&B.setAttribute("data-term-theme",e())}n();let a;typeof MutationObserver<"u"&&(a=new MutationObserver(n),a.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]})),Mt(()=>a?.disconnect());const r=I(()=>Tt.value.filter(B=>ml(B.id))),d=g(null),h=g(!1),u=g(!1),p=I(()=>h.value),w=I(()=>{const B=kn.value;return!!B&&B.x<340}),b=I(()=>{const B=kn.value;return!!B&&B.y>window.innerHeight/2}),k=I(()=>{const B=kn.value;return B?{left:`${B.x}px`,top:`${B.y}px`}:void 0}),F=g(null),L=g(360);function D(){const B=d.value?.getBoundingClientRect();if(!B)return;const ee=b.value?B.bottom-Jt:window.innerHeight-B.top-Jt;L.value=Math.max(180,Math.min(Math.round(ee)-4,Math.round(window.innerHeight*.72)))}function z(B,ee){const ye=Math.max(Jt,window.innerWidth-Li-Jt),ze=Math.max(Jt,window.innerHeight-Li-Jt);return{x:Math.min(Math.max(Jt,B),ye),y:Math.min(Math.max(Jt,ee),ze)}}function H(B,ee){const ye=z(B,ee),ze=Math.max(Jt,window.innerWidth-Li-Jt),Ke=Math.max(Jt,window.innerHeight-Li-Jt);let Ze=ye.x,we=ye.y;return ye.x-Jt<=Oi?Ze=Jt:ze-ye.x<=Oi&&(Ze=ze),ye.y-Jt<=Oi?we=Jt:Ke-ye.y<=Oi&&(we=Ke),{x:Ze,y:we}}let C=null,Z=!1;function G(B){if(B.button!==0||!d.value)return;const ee=d.value.getBoundingClientRect();kn.value||(kn.value={x:ee.left,y:ee.top}),C={pid:B.pointerId,fromX:B.clientX,fromY:B.clientY,baseX:kn.value.x,baseY:kn.value.y,moved:!1},B.currentTarget.setPointerCapture(B.pointerId)}function R(B){if(!C||B.pointerId!==C.pid)return;const ee=B.clientX-C.fromX,ye=B.clientY-C.fromY;!C.moved&&Math.abs(ee)<Yc&&Math.abs(ye)<Yc||(C.moved=!0,u.value=!0,kn.value=z(C.baseX+ee,C.baseY+ye))}function ue(B){if(!C||B.pointerId!==C.pid)return;Z=C.moved;const ee=C.moved;if(C=null,u.value=!1,ee){const ye=kn.value;ye&&(kn.value=H(ye.x,ye.y))}}function V(){if(Z){Z=!1;return}h.value=!h.value}const he=g(!1),_e=g({x:0,y:0});function ge(B){h.value=!1,_e.value={x:B.clientX,y:B.clientY},he.value=!0}const ne=I(()=>{const B=r.value.map(ee=>({label:ae(ee),icon:"terminal",onClick:()=>{Ys.value=ee.id,ar(ee.id)},trailing:{icon:"close",title:v("terminalCloseTitle"),onClick:()=>void Te(ee.id)}}));return B.length&&B.push({separator:!0}),B.push({label:v("terminalDockCloseAll"),icon:"close",onClick:()=>void je()}),B});function ae(B){if(B.ssh)return B.ssh.label;const ee=B.cwd?.trim();if(ee){const ye=ee.replace(/[\\/]$/,"").split(/[\\/]/).pop();if(ye)return ye}return v("terminal")}async function Te(B){rc(B),Tt.value.length||(De.termOpen=!1)}async function je(){h.value=!1,await Lh(),De.termOpen=!1}function be(B){if(!p.value)return;const ee=d.value,ye=B.target;ee&&ye&&ee.contains(ye)||(h.value=!1)}function Ae(){const B=kn.value;B&&(kn.value=z(B.x,B.y)),Nt(D)}function W(B=!1){if(Tt.value.length>=BD)return;const ee=De.termRequestSsh,ye=ee?"":De.termRequestCwd||De.root||De.explorerPath||"",ze=De.termRequestCmd;De.termRequestCwd="",De.termRequestCmd="",De.termRequestSsh=null,Uh(De.key,{cwd:ye,initCmd:ee?void 0:ze||void 0,fallbackCmd:ee&&ze||void 0,shell:Ue.termShell,ssh:ee??void 0,focus:B})}function J(B){rc(B),Tt.value.length===0&&(De.termOpen=!1)}return Je(p,B=>{B&&Nt(D)}),Je(()=>r.value.length,B=>{B||(h.value=!1)}),Je(hr,()=>{De.termOpen||(De.termOpen=!0),W(!0)}),Je(()=>De.termOpen,B=>{B&&Tt.value.length===0&&W(!0)}),cn(()=>{xd(),window.addEventListener("resize",Ae),document.addEventListener("pointerdown",be,!0),Nt(D),De.termOpen&&Tt.value.length===0&&W(!1)}),Mt(()=>{window.removeEventListener("resize",Ae),document.removeEventListener("pointerdown",be,!0)}),(B,ee)=>(l(),c(ie,null,[(l(!0),c(ie,null,Pe(s(Tt),ye=>xt((l(),Xe($D,{key:ye.id,tab:ye,onClose:ze=>J(ye.id)},null,8,["tab","onClose"])),[[bo,s(De).termOpen&&!s(ml)(ye.id)]])),128)),s(De).termOpen&&r.value.length?(l(),c("div",{key:0,ref_key:"dockRef",ref:d,class:te(["dsh-term-dock",{"is-floating":!!s(kn),"is-dragging":u.value,"is-flip":w.value,"is-bottom":b.value}]),style:kt(k.value)},[o("div",{class:"dsh-term-dock-btn",title:s(v)("terminalDockDragTitle"),onClick:V,onContextmenu:xe(ge,["prevent"]),onPointerdown:G,onPointermove:R,onPointerup:ue,onPointercancel:ue},[m(se,{name:"terminal",size:15}),r.value.length>1?(l(),c("span",ID,i(r.value.length),1)):M("",!0),s(cs)?(l(),c("span",{key:1,class:"dsh-term-dock-dot",title:s(v)("terminalAdminOn")},null,8,VD)):M("",!0)],40,OD),p.value&&!u.value?(l(),c("div",{key:0,ref_key:"listRef",ref:F,class:"dsh-term-dock-list",style:kt({maxHeight:`${L.value}px`})},[o("div",zD,i(s(v)("terminalDockSessions")),1),(l(!0),c(ie,null,Pe(r.value,ye=>(l(),Xe(LD,{key:ye.id,tab:ye},null,8,["tab"]))),128)),o("button",{class:"dsh-term-dock-new",title:s(v)("terminalNew"),onClick:ee[0]||(ee[0]=xe(ye=>W(!0),["stop"]))},"＋ "+i(s(v)("terminalNew")),9,jD)],4)):M("",!0)],6)):M("",!0),he.value?(l(),Xe(Zt,{key:1,items:ne.value,x:_e.value.x,y:_e.value.y,onClose:ee[1]||(ee[1]=ye=>he.value=!1)},null,8,["items","x","y"])):M("",!0)],64))}}),HD=_t(UD,[["__scopeId","data-v-6b6a1886"]]),WD=/[<>:"|?*\u0000-\u001f]/g,Jc=120;function GD(t){let e=(t??"").trim().replace(/\\/g,"/");return!e||e.includes("/")||(e=e.replace(WD,"_").replace(/[. ]+$/,""),!e||e==="."||e==="..")?null:(e.length>Jc&&(e=e.slice(0,Jc).replace(/[. ]+$/,"")),e||null)}function cl(t){let e=(t??"").trim().replace(/\\/g,"/");if(!e)return"";const n=/^[^/\s]+@[^/:\s]+:(.*)$/.exec(e);n?e=n[1]:e=e.replace(/^[a-zA-Z][a-zA-Z0-9+.-]*:\/\/[^/]*/,""),e=e.split("?")[0].split("#")[0],e=e.replace(/\/+$/,"");const r=(e.split("/").filter(Boolean).pop()??"").replace(/\.git$/i,"");return GD(r)??""}const Qc="__new__";function nf(t){const{t:e}=Ft(),n=g({url:"",dir:qt.dir,name:"",shallow:!1,revision:"",accountId:""}),a=g(!1),r=g(!1),d=g(""),h=g(0),u=g(!1);let p=0,w=0;function b(be,Ae){const W=(be??"").trim();if(!W)return"";const J=W.includes("\\")?"\\":"/";return`${W.replace(/[\\/]+$/,"")}${J}${Ae}`}const k=I(()=>{const be=n.value.name.trim()||cl(n.value.url);return be?b(n.value.dir,be):""}),F=I(()=>!!n.value.url.trim()&&!!n.value.dir.trim()&&!!k.value);Je(()=>n.value.url,be=>{a.value||(n.value.name=cl(be))}),Je(()=>n.value.name,(be,Ae)=>{be!==cl(n.value.url)&&Ae!==void 0&&(a.value=!0)});const L=I(()=>Mn.value.filter(be=>be.kind===t)),D=I(()=>L.value.find(be=>be.id===n.value.accountId)??null),z=g(null);let H=0;async function C(){const be=n.value.url.trim();if(!be||n.value.accountId){z.value=null;return}const Ae=await bd(t,be).catch(()=>null);z.value=Ae?.account??null}Je(()=>n.value.url,()=>{H&&window.clearTimeout(H),H=window.setTimeout(()=>void C(),400)});const Z=I(()=>n.value.accountId?D.value:z.value),G=I(()=>n.value.dir.trim().startsWith("ssh://"));let R=[];const ue=g(!1);function V(){R=Mn.value.map(be=>be.id),ue.value=!0,Tr({kind:t,url:n.value.url.trim()})}function he(be){const Ae=be.target,W=Ae.value;if(W===Qc){Ae.value=n.value.accountId,V();return}n.value.accountId=W}Je(()=>_n.open,async be=>{if(be||!ue.value)return;ue.value=!1,await ho();const Ae=Mn.value.find(W=>W.kind===t&&!R.includes(W.id));Ae&&(n.value.accountId=Ae.id)}),Je(()=>qt.open,be=>{be&&(n.value={url:"",dir:qt.dir,name:"",shallow:!1,revision:"",accountId:""},a.value=!1,d.value="",h.value=0,r.value=!1,z.value=null,ho())},{immediate:!0});function _e(be){n.value.dir=be}function ge(be){be||r.value||_c()}function ne(){h.value=Math.round((Date.now()-w)/1e3)}async function ae(){if(r.value||!F.value)return;const{url:be,dir:Ae,shallow:W,revision:J}=n.value;d.value="",r.value=!0,w=Date.now(),h.value=0,p=window.setInterval(ne,1e3);try{const B=await ih(t,{url:be.trim(),dir:Ae.trim(),name:n.value.name.trim()||void 0,depth:t==="git"&&W?1:0,revision:t==="svn"&&J.trim()||void 0,accountId:n.value.accountId||void 0,key:qt.key||void 0}),ee=qt.onDone;_c(),Y("ok",e(t==="git"?"repoCloneDoneGit":"repoCloneDoneSvn",{name:B.name}));try{ee?.({path:B.path,name:B.name})}catch{}}catch(B){d.value=B?.message||String(B)}finally{r.value=!1,p&&(window.clearInterval(p),p=0)}}function Te(){p&&window.clearInterval(p),H&&window.clearTimeout(H),p=0,H=0}function je(be){return`${be.name} · ${be.url||e("accAllRepos")}`}return{t:e,state:n,busy:r,error:d,elapsed:h,pickerOpen:u,targetPath:k,canSubmit:F,accountOptions:L,effectiveAccount:Z,isRemoteDir:G,newAccountValue:Qc,accountLabel:je,onAccountChange:he,onDirPicked:_e,onModel:ge,submit:ae,dispose:Te}}const qD={class:"fw-clone-head"},KD={class:"fw-clone-badge"},XD={class:"fw-clone-headtext"},YD={class:"fw-clone-headtitle"},JD={class:"fw-clone-headsub"},QD={class:"fw-clone"},ZD={class:"fw-clone-field"},eR={class:"fw-clone-label"},tR=["placeholder","disabled"],nR={key:0,class:"fw-clone-field"},sR={class:"fw-clone-label"},oR=["value","disabled"],iR={value:""},aR=["value"],lR=["value"],rR={key:0,class:"fw-clone-tip"},cR={class:"fw-clone-field"},dR={class:"fw-clone-label"},uR={class:"fw-clone-row"},fR=["placeholder","disabled"],pR=["disabled"],hR={class:"fw-clone-field"},vR={class:"fw-clone-label"},mR=["placeholder","disabled"],gR={class:"fw-clone-check fw-clone-slot"},yR=["disabled"],wR={class:"fw-clone-checkhint"},bR=["title"],kR={class:"fw-clone-targetlabel"},xR={class:"fw-clone-targetval"},_R={key:1,class:"fw-clone-busy"},CR={class:"fw-clone-elapsed"},SR={key:2,class:"fw-clone-tip"},$R={key:3,class:"fw-clone-error"},TR=["disabled"],ER=["disabled"],NR=vt({__name:"GitCloneDialog",setup(t){const{t:e,state:n,busy:a,error:r,elapsed:d,pickerOpen:h,targetPath:u,canSubmit:p,accountOptions:w,effectiveAccount:b,isRemoteDir:k,newAccountValue:F,accountLabel:L,onAccountChange:D,onDirPicked:z,onModel:H,submit:C,dispose:Z}=nf("git");return Mt(Z),(G,R)=>{const ue=dn;return l(),c(ie,null,[m(ue,{"model-value":s(qt).open,width:"560px","append-to-body":"",class:"fw-clone-dialog fw-clone-git","close-on-click-modal":!1,"close-on-press-escape":!s(a),"show-close":!s(a),"onUpdate:modelValue":s(H)},{header:oe(()=>[o("div",qD,[o("span",KD,[m(se,{name:"git",size:20})]),o("div",XD,[o("div",YD,i(s(e)("repoCloneTitleGit")),1),o("div",JD,i(s(e)("repoCloneCaptionGit")),1)])])]),footer:oe(()=>[o("button",{class:"fw-clone-btn",disabled:s(a),onClick:R[7]||(R[7]=V=>s(H)(!1))},i(s(e)("cancel")),9,TR),o("button",{class:"fw-clone-btn primary",disabled:s(a)||!s(p),onClick:R[8]||(R[8]=(...V)=>s(C)&&s(C)(...V))},i(s(e)("repoCloneActionGit")),9,ER)]),default:oe(()=>[o("div",QD,[o("label",ZD,[o("span",eR,i(s(e)("repoCloneUrl")),1),xt(o("input",{"onUpdate:modelValue":R[0]||(R[0]=V=>s(n).url=V),class:"fw-clone-input",placeholder:s(e)("repoCloneUrlGitPlaceholder"),spellcheck:"false",disabled:s(a),onKeyup:R[1]||(R[1]=bt((...V)=>s(C)&&s(C)(...V),["enter"]))},null,40,tR),[[Ot,s(n).url]])]),s(k)?M("",!0):(l(),c("label",nR,[o("span",sR,i(s(e)("repoCloneAccount")),1),o("select",{class:"fw-clone-input fw-clone-select",value:s(n).accountId,disabled:s(a),onChange:R[2]||(R[2]=(...V)=>s(D)&&s(D)(...V))},[o("option",iR,i(s(e)("repoCloneAccountAuto")),1),(l(!0),c(ie,null,Pe(s(w),V=>(l(),c("option",{key:V.id,value:V.id},i(s(L)(V)),9,aR))),128)),o("option",{value:s(F)},i(s(e)("repoCloneAccountNew")),9,lR)],40,oR),s(n).url.trim()||s(n).accountId?(l(),c("span",rR,[s(b)?(l(),c(ie,{key:0},[de(i(s(e)("accEffective"))+" "+i(s(b).name)+"（"+i(s(b).username)+"@"+i(s(b).host)+"） ",1)],64)):(l(),c(ie,{key:1},[de(i(s(e)("accEffectiveNone")),1)],64))])):M("",!0)])),o("label",cR,[o("span",dR,i(s(e)("repoCloneDir")),1),o("div",uR,[xt(o("input",{"onUpdate:modelValue":R[3]||(R[3]=V=>s(n).dir=V),class:"fw-clone-input",placeholder:s(e)("repoCloneDirPlaceholder"),spellcheck:"false",disabled:s(a)},null,8,fR),[[Ot,s(n).dir]]),o("button",{class:"fw-clone-btn",disabled:s(a),onClick:R[4]||(R[4]=V=>h.value=!0)},i(s(e)("repoCloneBrowse")),9,pR)])]),o("label",hR,[o("span",vR,i(s(e)("repoCloneName")),1),xt(o("input",{"onUpdate:modelValue":R[5]||(R[5]=V=>s(n).name=V),class:"fw-clone-input",placeholder:s(e)("repoCloneNamePlaceholder"),spellcheck:"false",disabled:s(a)},null,8,mR),[[Ot,s(n).name]])]),o("label",gR,[xt(o("input",{"onUpdate:modelValue":R[6]||(R[6]=V=>s(n).shallow=V),type:"checkbox",disabled:s(a)},null,8,yR),[[zf,s(n).shallow]]),o("span",null,i(s(e)("repoCloneShallow")),1),o("span",wR,i(s(e)("repoCloneShallowHint")),1)]),o("div",{class:"fw-clone-target",title:s(u)||void 0},[m(se,{name:"folderOpen",size:13}),o("span",kR,i(s(e)("repoCloneTargetGit")),1),o("span",xR,i(s(u)||s(e)("repoCloneTargetEmpty")),1)],8,bR),s(a)?(l(),c("div",_R,[R[10]||(R[10]=o("span",{class:"fw-clone-spin","aria-hidden":"true"},null,-1)),o("span",null,i(s(e)("repoCloneRunningGit")),1),o("span",CR,i(s(e)("repoCloneElapsed",{s:s(d)})),1)])):M("",!0),s(a)?(l(),c("div",SR,i(s(e)("repoCloneKeepOpen")),1)):M("",!0),s(r)?(l(),c("div",$R,i(s(r)),1)):M("",!0)])]),_:1},8,["model-value","close-on-press-escape","show-close","onUpdate:modelValue"]),m(ca,{modelValue:s(h),"onUpdate:modelValue":R[9]||(R[9]=V=>td(h)?h.value=V:null),mode:"folder","initial-dir":s(n).dir,onConfirm:s(z)},null,8,["modelValue","initial-dir","onConfirm"])],64)}}}),DR={class:"fw-clone-head"},RR={class:"fw-clone-badge"},AR={class:"fw-clone-headtext"},MR={class:"fw-clone-headtitle"},PR={class:"fw-clone-headsub"},FR={class:"fw-clone"},LR={class:"fw-clone-field"},OR={class:"fw-clone-label"},IR=["placeholder","disabled"],VR={key:0,class:"fw-clone-field"},zR={class:"fw-clone-label"},jR=["value","disabled"],BR={value:""},UR=["value"],HR=["value"],WR={key:0,class:"fw-clone-tip"},GR={class:"fw-clone-field"},qR={class:"fw-clone-label"},KR={class:"fw-clone-row"},XR=["placeholder","disabled"],YR=["disabled"],JR={class:"fw-clone-field"},QR={class:"fw-clone-label"},ZR=["placeholder","disabled"],e4={class:"fw-clone-field"},t4={class:"fw-clone-label"},n4=["placeholder","disabled"],s4=["title"],o4={class:"fw-clone-targetlabel"},i4={class:"fw-clone-targetval"},a4={key:1,class:"fw-clone-busy"},l4={class:"fw-clone-elapsed"},r4={key:2,class:"fw-clone-tip"},c4={key:3,class:"fw-clone-error"},d4=["disabled"],u4=["disabled"],f4=vt({__name:"SvnCheckoutDialog",setup(t){const{t:e,state:n,busy:a,error:r,elapsed:d,pickerOpen:h,targetPath:u,canSubmit:p,accountOptions:w,effectiveAccount:b,isRemoteDir:k,newAccountValue:F,accountLabel:L,onAccountChange:D,onDirPicked:z,onModel:H,submit:C,dispose:Z}=nf("svn");return Mt(Z),(G,R)=>{const ue=dn;return l(),c(ie,null,[m(ue,{"model-value":s(qt).open,width:"560px","append-to-body":"",class:"fw-clone-dialog fw-clone-svn","close-on-click-modal":!1,"close-on-press-escape":!s(a),"show-close":!s(a),"onUpdate:modelValue":s(H)},{header:oe(()=>[o("div",DR,[o("span",RR,[m(se,{name:"svn",size:20})]),o("div",AR,[o("div",MR,i(s(e)("repoCloneTitleSvn")),1),o("div",PR,i(s(e)("repoCloneCaptionSvn")),1)])])]),footer:oe(()=>[o("button",{class:"fw-clone-btn",disabled:s(a),onClick:R[7]||(R[7]=V=>s(H)(!1))},i(s(e)("cancel")),9,d4),o("button",{class:"fw-clone-btn primary",disabled:s(a)||!s(p),onClick:R[8]||(R[8]=(...V)=>s(C)&&s(C)(...V))},i(s(e)("repoCloneActionSvn")),9,u4)]),default:oe(()=>[o("div",FR,[o("label",LR,[o("span",OR,i(s(e)("repoCloneUrl")),1),xt(o("input",{"onUpdate:modelValue":R[0]||(R[0]=V=>s(n).url=V),class:"fw-clone-input",placeholder:s(e)("svnCheckoutUrlPlaceholder"),spellcheck:"false",disabled:s(a),onKeyup:R[1]||(R[1]=bt((...V)=>s(C)&&s(C)(...V),["enter"]))},null,40,IR),[[Ot,s(n).url]])]),s(k)?M("",!0):(l(),c("label",VR,[o("span",zR,i(s(e)("repoCloneAccount")),1),o("select",{class:"fw-clone-input fw-clone-select",value:s(n).accountId,disabled:s(a),onChange:R[2]||(R[2]=(...V)=>s(D)&&s(D)(...V))},[o("option",BR,i(s(e)("repoCloneAccountAuto")),1),(l(!0),c(ie,null,Pe(s(w),V=>(l(),c("option",{key:V.id,value:V.id},i(s(L)(V)),9,UR))),128)),o("option",{value:s(F)},i(s(e)("repoCloneAccountNew")),9,HR)],40,jR),s(n).url.trim()||s(n).accountId?(l(),c("span",WR,[s(b)?(l(),c(ie,{key:0},[de(i(s(e)("accEffective"))+" "+i(s(b).name)+"（"+i(s(b).username)+"@"+i(s(b).host)+"） ",1)],64)):(l(),c(ie,{key:1},[de(i(s(e)("accEffectiveNone")),1)],64))])):M("",!0)])),o("label",GR,[o("span",qR,i(s(e)("repoCloneDir")),1),o("div",KR,[xt(o("input",{"onUpdate:modelValue":R[3]||(R[3]=V=>s(n).dir=V),class:"fw-clone-input",placeholder:s(e)("repoCloneDirPlaceholder"),spellcheck:"false",disabled:s(a)},null,8,XR),[[Ot,s(n).dir]]),o("button",{class:"fw-clone-btn",disabled:s(a),onClick:R[4]||(R[4]=V=>h.value=!0)},i(s(e)("repoCloneBrowse")),9,YR)])]),o("label",JR,[o("span",QR,i(s(e)("repoCloneName")),1),xt(o("input",{"onUpdate:modelValue":R[5]||(R[5]=V=>s(n).name=V),class:"fw-clone-input",placeholder:s(e)("repoCloneNamePlaceholder"),spellcheck:"false",disabled:s(a)},null,8,ZR),[[Ot,s(n).name]])]),o("label",e4,[o("span",t4,i(s(e)("repoCloneRevision")),1),xt(o("input",{"onUpdate:modelValue":R[6]||(R[6]=V=>s(n).revision=V),class:"fw-clone-input",placeholder:s(e)("repoCloneRevisionPlaceholder"),spellcheck:"false",disabled:s(a)},null,8,n4),[[Ot,s(n).revision]])]),o("div",{class:"fw-clone-target",title:s(u)||void 0},[m(se,{name:"folderOpen",size:13}),o("span",o4,i(s(e)("repoCloneTargetSvn")),1),o("span",i4,i(s(u)||s(e)("repoCloneTargetEmpty")),1)],8,s4),s(a)?(l(),c("div",a4,[R[10]||(R[10]=o("span",{class:"fw-clone-spin","aria-hidden":"true"},null,-1)),o("span",null,i(s(e)("repoCloneRunningSvn")),1),o("span",l4,i(s(e)("repoCloneElapsed",{s:s(d)})),1)])):M("",!0),s(a)?(l(),c("div",r4,i(s(e)("repoCloneKeepOpen")),1)):M("",!0),s(r)?(l(),c("div",c4,i(s(r)),1)):M("",!0)])]),_:1},8,["model-value","close-on-press-escape","show-close","onUpdate:modelValue"]),m(ca,{modelValue:s(h),"onUpdate:modelValue":R[9]||(R[9]=V=>td(h)?h.value=V:null),mode:"folder","initial-dir":s(n).dir,onConfirm:s(z)},null,8,["modelValue","initial-dir","onConfirm"])],64)}}}),p4=vt({__name:"RepoCloneDialog",setup(t){return(e,n)=>s(qt).open&&s(qt).kind==="git"?(l(),Xe(NR,{key:0})):s(qt).open?(l(),Xe(f4,{key:1})):M("",!0)}}),h4={class:"fw-clone-head"},v4={class:"fw-clone-badge"},m4={class:"fw-clone-headtext"},g4={class:"fw-clone-headtitle"},y4={class:"fw-clone-headsub"},w4={class:"fw-acc-split"},b4={class:"fw-acc-rail"},k4={class:"fw-acc-railhead"},x4={class:"fw-acc-count"},_4={key:0,class:"fw-acc-empty"},C4={key:1,class:"fw-acc-railist"},S4={key:0,class:"fw-acc-group"},$4=["onClick","onContextmenu"],T4=["data-kind"],E4={class:"fw-acc-itemtext"},N4=["title"],D4=["title"],R4=["title"],A4=["title"],M4={class:"fw-acc-efflabel"},P4={key:0,class:"fw-acc-effval"},F4={key:1,class:"fw-acc-effnone"},L4={class:"fw-acc-effhint"},O4={class:"fw-acc-detail"},I4={key:0,class:"fw-acc-blank"},V4={class:"fw-acc-detailhead"},z4={class:"fw-acc-detailtitle"},j4={key:0,class:"fw-acc-detailsub"},B4={class:"fw-acc-form"},U4={class:"fw-clone-field"},H4={class:"fw-clone-label"},W4={class:"fw-clone-field"},G4={class:"fw-clone-label"},q4={class:"fw-clone-field"},K4={class:"fw-clone-label"},X4={class:"fw-clone-field"},Y4={class:"fw-clone-label"},J4={class:"fw-clone-tip"},Q4={class:"fw-clone-field"},Z4={class:"fw-clone-label"},e6={class:"fw-clone-field"},t6={class:"fw-clone-label"},n6={class:"fw-clone-row"},s6={class:"fw-clone-field"},o6={class:"fw-clone-label"},i6={key:0,class:"fw-clone-error"},a6={class:"fw-acc-actions"},l6={class:"fw-clone-tip"},r6=vt({__name:"AccountDialog",setup(t){const{t:e}=Ft(),n=I({get:()=>_n.open,set:we=>{we||Ya()}}),a=g(null),r=g(!1),d=I(()=>!r.value&&a.value!==null),h=I(()=>r.value||a.value!==null),u=I(()=>Mn.value.find(we=>we.id===a.value)??null),p=gt({kind:"git",name:"",host:"",url:"",username:"",secretKind:"password",secret:"",note:""}),w=g(!1),b=g(!1),k=g(null),F=g(""),L=g(null);async function D(){const we=_n.url?.trim()??"";if(!we){L.value=null;return}const ke=await bd(_n.kind,we).catch(()=>null);L.value=ke?.account??null}const z=I(()=>["git","svn"].map(ke=>({kind:ke,list:Mn.value.filter(Ye=>Ye.kind===ke)}))),H=g(null),{cmOpen:C,cmX:Z,cmY:G,cmItems:R,openMenu:ue,closeMenu:V}=hn();function he(we,ke){const Ye=[{label:e("accTest"),icon:"refresh",onClick:()=>_e(ke)},{label:e("accApply"),icon:"check",onClick:()=>void ge(ke)},{separator:!0},{label:e("accDelete"),icon:"trash",onClick:()=>void ne(ke)},{separator:!0},{label:e("accCopyIdent"),icon:"copy",onClick:()=>void ae(ke)}];ue(we,Ye)}async function _e(we){Ae(we),await Ke()}async function ge(we){Ae(we),await ye()}async function ne(we){Ae(we),await ze(),k.value=null}async function ae(we){try{await navigator.clipboard.writeText(`${we.username}@${we.host}`)}catch{}}const Te=I(()=>(r.value?p.kind:u.value?.kind??p.kind)==="svn"?"fw-clone-svn":"fw-clone-git"),je=I(()=>{const we=p.username.trim()||"user",ke=p.host.trim()||"host";return`${we}@${ke}`});function be(we){p.kind=we.kind,p.name=we.name,p.host=we.host,p.url=we.url,p.username=we.username,p.secretKind=we.secretKind,p.secret="",p.note=we.note}function Ae(we){r.value=!1,a.value=we.id,k.value=null,F.value="",H.value=null,be(we)}Je(()=>_n.open,we=>{we&&(r.value=!1,a.value=null,k.value=null,F.value="",w.value=!1,b.value=!1,L.value=null,(async()=>{await ho(),await D();const ke=Mn.value[0];ke&&Ae(ke)})())},{immediate:!0});function W(){Ya()}function J(){Ya()}function B(){r.value=!0,a.value=null,k.value=null,F.value="",p.kind=_n.kind,p.name="",p.host="",p.url=_n.url,p.username="",p.secretKind="password",p.secret="",p.note=""}async function ee(we){w.value=!0,F.value="";try{await we()}catch(ke){F.value=ke instanceof Error?ke.message:String(ke)}finally{w.value=!1}}async function ye(){const we=u.value;if(we){b.value=!0;try{const ke=await fh(we.id);rs(`${e("accApplyOk")} · ${ke.detail}`)}catch(ke){fs(ke instanceof Error?ke.message:String(ke))}finally{b.value=!1}}}async function ze(){const we=u.value;if(we){if(k.value!==we.id){k.value=we.id;return}k.value=null;try{await dh(we.id),rs(e("accDeleted")),await ho(),await D();const ke=Mn.value[0];ke?Ae(ke):(a.value=null,r.value=!1)}catch(ke){fs(ke instanceof Error?ke.message:String(ke))}}}async function Ke(){if(!p.host.trim()||!p.username.trim()){co(e("accRequired"));return}const we=d.value&&!p.secret.trim();if(!we&&!p.secret.trim()){co(e("accSecretRequired"));return}await ee(async()=>{const ke=await uh(we?{id:a.value??void 0}:{kind:p.kind,host:p.host.trim(),url:p.url.trim(),username:p.username.trim(),secret:p.secret,secretKind:p.secretKind});H.value={ok:ke.ok,detail:ke.detail},ke.ok?rs(`${e("accTestOk")} · ${ke.detail}`):fs(`${e("accTestFail")} · ${ke.detail}`)})}async function Ze(){if(!p.host.trim()||!p.username.trim()){co(e("accRequired"));return}if(r.value&&!p.secret){co(e("accSecretRequired"));return}await ee(async()=>{const we={kind:p.kind,host:p.host.trim(),url:p.url.trim(),name:p.name.trim(),username:p.username.trim(),secret:p.secret||void 0,secretKind:p.secretKind,note:p.note.trim()};if(d.value&&a.value){await ch({id:a.value,...we}),rs(e("accSaved")),await ho(),await D();const ke=Mn.value.find(Ye=>Ye.id===a.value);ke&&be(ke)}else{const ke=await rh(we);rs(e("accSaved")),await ho(),await D();const Ye=Mn.value.find(st=>st.id===ke.account.id);Ye&&Ae(Ye)}})}return(we,ke)=>{const Ye=Fn,st=ma,pe=va,Ce=Es,qe=dn;return l(),Xe(qe,{modelValue:n.value,"onUpdate:modelValue":ke[8]||(ke[8]=ce=>n.value=ce),class:te(["fw-clone-dialog fw-acc-dlg",Te.value]),width:"800px","align-center":"","close-on-click-modal":!1,"append-to-body":"",onClosed:W},{header:oe(()=>[o("div",h4,[o("span",v4,[m(se,{name:"shield",size:20})]),o("div",m4,[o("div",g4,i(s(e)("accTitle")),1),o("div",y4,i(s(e)("accCaption")),1)])])]),footer:oe(()=>[m(Ye,{size:"small",onClick:J},{default:oe(()=>[de(i(s(e)("accCancel")),1)]),_:1}),m(Ye,{size:"small",type:"primary",loading:w.value,disabled:!h.value,onClick:Ze},{default:oe(()=>[de(i(s(e)("accSave")),1)]),_:1},8,["loading","disabled"])]),default:oe(()=>[o("div",w4,[o("div",b4,[o("div",k4,[o("span",x4,i(s(e)("accListTitle"))+" · "+i(s(Mn).length),1),m(Ye,{size:"small",class:"fw-acc-iconbtn",title:s(e)("accAdd"),onClick:B},{default:oe(()=>[m(se,{name:"plus",size:13})]),_:1},8,["title"])]),s(Mn).length?(l(),c("div",C4,[(l(!0),c(ie,null,Pe(z.value,ce=>(l(),c(ie,{key:ce.kind},[ce.list.length?(l(),c("div",S4,i(ce.kind==="svn"?"SVN":"Git"),1)):M("",!0),(l(!0),c(ie,null,Pe(ce.list,Ve=>(l(),c("button",{key:Ve.id,type:"button",class:te(["fw-acc-item",{on:!r.value&&Ve.id===a.value}]),onClick:rt=>Ae(Ve),onContextmenu:xe(rt=>he(rt,Ve),["prevent","stop"])},[o("span",{class:"fw-acc-kind","data-kind":Ve.kind},i(Ve.kind==="svn"?"SVN":"Git"),9,T4),o("span",E4,[o("span",{class:"fw-acc-itemname",title:Ve.name},i(Ve.name),9,N4),o("span",{class:"fw-acc-itemsub",title:`${Ve.username}@${Ve.host}`},i(Ve.username)+"@"+i(Ve.host),9,D4)]),Ve.hasSecret?(l(),Xe(se,{key:0,class:"fw-acc-lock",name:"shield",size:13,title:s(e)("accHasSecret")},null,8,["title"])):(l(),c("span",{key:1,class:"fw-acc-dot",title:s(e)("accNoSecret")},null,8,R4))],42,$4))),128))],64))),128))])):(l(),c("div",_4,i(s(e)("accEmpty")),1)),s(_n).url?(l(),c("div",{key:2,class:"fw-acc-effective",title:s(_n).url},[o("span",M4,i(s(e)("accEffective")),1),L.value?(l(),c("span",P4,i(L.value.name)+"（"+i(L.value.username)+"@"+i(L.value.host)+"）",1)):(l(),c("span",F4,i(s(e)("accEffectiveNone")),1)),o("span",L4,i(s(e)("accMatchHint")),1)],8,A4)):M("",!0)]),o("div",O4,[h.value?(l(),c(ie,{key:1},[o("div",V4,[o("span",z4,i(r.value?s(e)("accNewTitle"):s(e)("accEditTitle")),1),u.value?(l(),c("span",j4,i(u.value.username)+"@"+i(u.value.host),1)):M("",!0)]),o("div",B4,[o("div",U4,[o("span",H4,i(s(e)("accKind")),1),m(pe,{modelValue:p.kind,"onUpdate:modelValue":ke[0]||(ke[0]=ce=>p.kind=ce),size:"small",class:"fw-acc-kindsel","popper-class":"fw-acc-popper"},{default:oe(()=>[m(st,{value:"git",label:s(e)("accKindGit")},null,8,["label"]),m(st,{value:"svn",label:s(e)("accKindSvn")},null,8,["label"])]),_:1},8,["modelValue"])]),o("div",W4,[o("span",G4,i(s(e)("accName")),1),m(Ce,{modelValue:p.name,"onUpdate:modelValue":ke[1]||(ke[1]=ce=>p.name=ce),size:"small",placeholder:je.value},null,8,["modelValue","placeholder"])]),o("div",q4,[o("span",K4,i(s(e)("accHost")),1),m(Ce,{modelValue:p.host,"onUpdate:modelValue":ke[2]||(ke[2]=ce=>p.host=ce),size:"small",placeholder:s(e)("accHostPlaceholder")},null,8,["modelValue","placeholder"])]),o("div",X4,[o("span",Y4,i(s(e)("accUrl")),1),m(Ce,{modelValue:p.url,"onUpdate:modelValue":ke[3]||(ke[3]=ce=>p.url=ce),size:"small",placeholder:s(e)("accUrlPlaceholder")},null,8,["modelValue","placeholder"]),o("span",J4,i(s(e)("accUrlHint")),1)]),o("div",Q4,[o("span",Z4,i(s(e)("accUsername")),1),m(Ce,{modelValue:p.username,"onUpdate:modelValue":ke[4]||(ke[4]=ce=>p.username=ce),size:"small",placeholder:s(e)("accUsername")},null,8,["modelValue","placeholder"])]),o("div",e6,[o("span",t6,i(s(e)("accSecretKind")),1),o("div",n6,[m(pe,{modelValue:p.secretKind,"onUpdate:modelValue":ke[5]||(ke[5]=ce=>p.secretKind=ce),size:"small",class:"fw-acc-kindslim","popper-class":"fw-acc-popper"},{default:oe(()=>[m(st,{value:"password",label:s(e)("accSecretPassword")},null,8,["label"]),m(st,{value:"token",label:s(e)("accSecretToken")},null,8,["label"])]),_:1},8,["modelValue"]),m(Ce,{modelValue:p.secret,"onUpdate:modelValue":ke[6]||(ke[6]=ce=>p.secret=ce),size:"small",type:"password","show-password":"",class:"fw-acc-secretinput",placeholder:d.value&&u.value?.hasSecret?s(e)("accKeepSecret"):s(e)("accSecret")},null,8,["modelValue","placeholder"])])]),o("div",s6,[o("span",o6,i(s(e)("accNote")),1),m(Ce,{modelValue:p.note,"onUpdate:modelValue":ke[7]||(ke[7]=ce=>p.note=ce),size:"small"},null,8,["modelValue"])])]),F.value?(l(),c("div",i6,i(F.value),1)):M("",!0),H.value?(l(),c("div",{key:1,class:te(["fw-acc-testres",H.value.ok?"is-ok":"is-fail"])},[m(se,{name:H.value.ok?"check":"warning",size:13},null,8,["name"]),o("span",null,i(H.value.ok?s(e)("accTestOk"):s(e)("accTestFail"))+" · "+i(H.value.detail),1)],2)):M("",!0),o("div",a6,[m(Ye,{size:"small",loading:w.value,onClick:Ke},{default:oe(()=>[de(i(s(e)("accTest")),1)]),_:1},8,["loading"]),d.value?(l(),Xe(Ye,{key:0,size:"small",loading:b.value,onClick:ye},{default:oe(()=>[de(i(s(e)("accApply")),1)]),_:1},8,["loading"])):M("",!0),d.value?(l(),Xe(Ye,{key:1,size:"small",class:te({"fw-acc-danger":k.value===u.value?.id}),onClick:ze},{default:oe(()=>[de(i(k.value===u.value?.id?s(e)("accDeleteConfirm"):s(e)("accDelete")),1)]),_:1},8,["class"])):M("",!0)]),o("div",l6,i(s(e)("accApplyHint")),1)],64)):(l(),c("div",I4,i(s(e)("accPick")),1))])]),s(C)?(l(),Xe(Zt,{key:0,items:s(R),x:s(Z),y:s(G),onClose:s(V)},null,8,["items","x","y","onClose"])):M("",!0)]),_:1},8,["modelValue","class"])}}}),c6=_t(r6,[["__scopeId","data-v-d434fcb2"]]),d6={class:"fw-toast-host","aria-live":"polite","aria-atomic":"false"},u6=["onMouseenter","onMouseleave"],f6={class:"fw-toast-ico","aria-hidden":"true"},p6=["title","onClick"],h6=["title"],v6=["title","aria-label","onClick"],Zc=100,m6=48,g6=vt({__name:"ToastHost",setup(t){let e=null;function n(){if(Ha.value.length!==0)for(const w of[...Ha.value])w.paused||w.duration<=0||(w.remain-=Zc,w.remain<=0&&Kr(w.id))}cn(()=>{e=window.setInterval(n,Zc)}),Mt(()=>{e!==null&&window.clearInterval(e),e=null});const a={ok:"check",error:"warning",warning:"warning",info:"info"},r=gt(new Set);function d(w){r.has(w)?r.delete(w):r.add(w)}function h(w){return w.message.length>m6?w.message:void 0}function u(w){return Math.max(0,Math.ceil(w.remain/1e3))}function p(w){if(w.duration<=0)return"100%";const b=w.remain/w.duration*100;return`${Math.max(0,Math.min(100,b))}%`}return(w,b)=>(l(),c("div",d6,[(l(!0),c(ie,null,Pe(s(Ha),k=>(l(),c("div",{key:k.id,class:te(["fw-toast",`k-${k.kind}`]),role:"status",onMouseenter:F=>k.paused=!0,onMouseleave:F=>k.paused=!1},[o("span",f6,[m(se,{name:a[k.kind],size:15},null,8,["name"])]),o("span",{class:te(["fw-toast-msg",{"is-open":r.has(k.id)}]),title:h(k),onClick:F=>d(k.id)},i(k.message),11,p6),k.duration>0?(l(),c("span",{key:0,class:"fw-toast-count",title:`${u(k)}s`},i(u(k))+"s ",9,h6)):M("",!0),o("button",{class:"fw-toast-x",type:"button",title:s(v)("toastClose"),"aria-label":s(v)("toastClose"),onClick:F=>s(Kr)(k.id)},[m(se,{name:"close",size:13})],8,v6),k.duration>0?(l(),c("span",{key:1,class:"fw-toast-bar",style:kt({width:p(k)})},null,4)):M("",!0)],42,u6))),128))]))}}),js=new Map;function y6(){const t=window.__DSH_FILE_WORKBENCH__;if(!t)return;t.openExternalFile=n=>{fi(n).catch(a=>Y("error",a.message)),Dt()},t.openExternalFolder=n=>{jt(n)},t.syncSessionWorkspace=()=>{Yv()};const e=t.pendingOpens;if(e&&e.length>0){t.pendingOpens=[];for(const n of e)n.kind==="file"?t.openExternalFile(n.path):t.openExternalFolder?.(n.path)}}function sf(t,e,n="workbench"){e?.apiBase&&(window.__DSH_FILE_WORKBENCH__=window.__DSH_FILE_WORKBENCH__??{},window.__DSH_FILE_WORKBENCH__.apiBase=e.apiBase);const a=js.get(t);if(a){try{a.unmount()}catch{}js.delete(t)}const r=di(n==="vscode"?sD:K$);let d=null;n==="vscode"&&(d=Er(Iu(e?.instanceId)),e?.fresh&&d.markFresh(),d.bindTab(e?.instanceId??null,e?.panelId??null),r.provide(Ma,d)),r.mount(t),js.set(t,r),n==="workbench"&&y6(),Gh(),n==="workbench"&&kx();const h=r,u=d;return{unmount:()=>{try{h.unmount()}catch{}js.get(t)===h&&js.delete(t),js.size===0&&setTimeout(()=>{js.size===0&&Sp()},3e3)},openProject:u?p=>u.requestOpenProject(p):void 0}}function of(t,e){return sf(t,e,"workbench")}function w6(t,e){return sf(t,e,"vscode")}window.__dshFileWorkbenchMountPane__=of;window.__dshVSCodeMountPane__=w6;function b6(){if(typeof document>"u"||!document.body)return;const t=ya();if(t.app&&t.el?.isConnected)return;if(t.app){try{t.app.unmount()}catch{}t.app=null,t.el=null}document.getElementById("dsh-toast-root")?.remove();const e=document.createElement("div");e.id="dsh-toast-root",e.style.position="fixed",e.style.left="0",e.style.top="0",e.style.width="0",e.style.height="0",e.style.overflow="visible",e.style.zIndex="2147483000",e.style.pointerEvents="none",document.body.appendChild(e);try{const n=di(g6);n.mount(e),t.app=n,t.el=e}catch(n){console.error("[dsh-file-workbench] 提示宿主挂载失败：",n),e.remove()}}function k6(){if(typeof document>"u"||!document.body||document.getElementById("dsh-term-root"))return;const t=document.createElement("div");t.id="dsh-term-root",t.style.position="fixed",t.style.left="0",t.style.top="0",t.style.width="0",t.style.height="0",t.style.overflow="visible",t.style.zIndex="10000",document.body.appendChild(t);try{di(HD).mount(t)}catch(e){console.error("[dsh-file-workbench] 全局终端挂载失败：",e)}}b6();k6();x6();_6();function x6(){if(typeof document>"u"||!document.body||document.getElementById("dsh-clone-root"))return;const t=document.createElement("div");t.id="dsh-clone-root",t.style.position="fixed",t.style.left="0",t.style.top="0",t.style.width="0",t.style.height="0",t.style.overflow="visible",t.style.zIndex="10000",document.body.appendChild(t);try{di(p4).mount(t)}catch(e){console.error("[dsh-file-workbench] 全局克隆弹窗挂载失败：",e)}}if(typeof document<"u"){const t=document.getElementById("app");t&&of(t,{apiBase:""})}window.__dshTestProbeUrl=`${(window.__DSH_FILE_WORKBENCH__?.apiBase||"/api/dsh-file-workbench").replace(/\/$/,"")}/assets/__dsh-test-probe.js`;function _6(){if(typeof document>"u"||!document.body||document.getElementById("dsh-acc-root"))return;const t=document.createElement("div");t.id="dsh-acc-root",t.style.position="fixed",t.style.left="0",t.style.top="0",t.style.width="0",t.style.height="0",t.style.overflow="visible",t.style.zIndex="10000",document.body.appendChild(t);try{di(c6).mount(t)}catch(e){console.error("[dsh-file-workbench] 全局账号对话框挂载失败：",e)}}
