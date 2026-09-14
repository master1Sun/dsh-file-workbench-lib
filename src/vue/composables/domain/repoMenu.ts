/**
 * Git / SVN 右键菜单构建器（**单一来源**）。
 *
 * 工作台的文件列表（FileListPane）与 VS Code 面板的项目树（ProjectTree）共用这里的
 * `gitMenuFor` / `svnMenuFor`，保证两处右键菜单里 Git / SVN 的入口、分组与文案完全一致
 * （避免各写一套「造轮子」）。真正涉及 UI 的动作（打开面板 / 提交弹窗 / diff 展示）
 * 由调用方通过 `RepoMenuActions` 注入，命令类动作（stage / discard / svn update…）在本模块内
 * 直接用 api + toast 完成。
 */
import type { MenuItem } from "../../../shared/types";
import * as api from "../core/useApi";
import { t } from "../core/i18n";
import { toast } from "../../stores/workbench";
import { confirmDialog } from "../core/dialog";
import { gitInRepo } from "./git";
import { svnInWc } from "./svn";

/** 调用方注入的 UI 动作（面板 / 提交 / diff / 变更后刷新）。 */
export interface RepoMenuActions {
  /** 打开完整 Git 管理面板。 */
  openGitPanel(): void;
  /** 打开 SVN 管理面板。 */
  openSvnPanel(): void;
  /** 打开提交弹窗（QuickCommit）。 */
  openCommit(): void;
  /** 展示 git diff 文本（由调用方决定容器，如弹窗）。 */
  showGitDiff(text: string): void;
  /** 命令执行后刷新：重探 `dir` 的 git/svn 状态并刷新列表。 */
  afterMutate(dir: string): void | Promise<void>;
}

/** 路径末段文件名。 */
function baseName(path: string): string {
  return path.slice(Math.max(path.lastIndexOf("/"), path.lastIndexOf("\\")) + 1);
}

/** 在工作副本/仓库目录直接跑 svn 命令，结果以 toast 反馈。 */
async function svnCli(path: string, args: string[]): Promise<void> {
  try {
    const info = await api.svnInfo(path);
    if (!info.svnAvailable) {
      toast("error", t("svnNoCli"));
      return;
    }
    const r = await api.svnRun(path, args);
    if (r.code === 0) {
      toast("ok", (r.stdout || t("svnDone")).split("\n")[0].slice(0, 200));
    } else {
      toast("error", (r.stderr || t("svnFailed")).split("\n")[0].slice(0, 200));
    }
  } catch (err) {
    toast("error", (err as Error).message);
  }
}

async function gitAddOne(path: string, dir: string, act: RepoMenuActions): Promise<void> {
  try {
    await api.gitAdd(path);
    toast("ok", t("gitAdded"));
  } catch (err) {
    toast("error", (err as Error).message);
  }
  await act.afterMutate(dir);
}

async function gitDiscardOne(path: string, dir: string, act: RepoMenuActions): Promise<void> {
  const name = baseName(path);
  const ok = await confirmDialog({ title: t("gitDiscardTitle"), message: t("gitDiscardMsg", { name }) });
  if (!ok) return;
  try {
    await api.gitDiscard(path);
    toast("ok", t("gitDiscarded"));
  } catch (err) {
    toast("error", (err as Error).message);
  }
  await act.afterMutate(dir);
}

async function gitShowDiff(path: string, act: RepoMenuActions): Promise<void> {
  try {
    const r = await api.gitDiff(path);
    act.showGitDiff(r.output ?? "");
  } catch (err) {
    toast("error", (err as Error).message);
  }
}

/**
 * Git 子菜单：`dir` 位于 git 仓库时返回，否则为空。
 * @param dir - 用于判断仓库归属与刷新状态的目录（列表当前目录 / 树节点的归属目录）。
 * @param path - 操作目标路径（文件或目录）。
 */
export function gitMenuFor(dir: string, path: string, act: RepoMenuActions): MenuItem[] {
  if (!gitInRepo(dir)) return [];
  return [
    { separator: true },
    {
      icon: "git",
      label: t("gitMenu"),
      children: [
        { label: t("gitPanel"), icon: "git", onClick: () => act.openGitPanel() },
        { separator: true },
        { label: t("gitAdd"), icon: "upload", onClick: () => void gitAddOne(path, dir, act) },
        { label: t("gitCommit"), icon: "check", onClick: () => act.openCommit() },
        { label: t("gitDiff"), icon: "code", onClick: () => void gitShowDiff(path, act) },
        { label: t("gitDiscard"), icon: "undo", onClick: () => void gitDiscardOne(path, dir, act) },
      ],
    },
  ];
}

/**
 * SVN 子菜单：`dir` 位于 SVN 工作副本时返回，否则为空。
 * @param dir - 判断工作副本归属与命令执行目录。
 * @param path - 操作目标路径。
 */
export function svnMenuFor(dir: string, path: string, act: RepoMenuActions): MenuItem[] {
  if (!svnInWc(dir)) return [];
  return [
    { separator: true },
    {
      icon: "svn",
      label: t("svnMenu"),
      children: [
        { label: t("svnPanel"), icon: "svn", onClick: () => act.openSvnPanel() },
        { label: t("svnUpdate"), icon: "sync", onClick: () => void svnCli(path, ["update"]) },
      ],
    },
  ];
}
