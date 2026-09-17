# DSH File Workbench Plugin (Vue 3 + Vite)

> 🌐 English | [简体中文](README.zh-CN.md)

Provides three capabilities inside the **right-side panel** of a DSH session view, all sharing the same workspace root:

- 🗂 **File Workbench** (tab kind `workbench`): a Windows 11 Explorer-style file manager
- 📝 **File Editor** (tab kind `vscode`): a CodeMirror multi-tab code editor + project tree
- ▶ **Terminal**: persistent shells via node-pty (ConPTY), a **global singleton** that survives panel close/reopen

On top of that: **Git / SVN management panels**, sending files into the session input box as official `@path` reference chips, a background-task panel, and handling selected files with a sub-agent.

File **viewing** is delegated to the **DSH native right-side viewer** (Markdown / syntax-highlighted code / images / PDF / HTML / plain text); use the file editor for in-place editing, or right-click "Edit" in the file list to open the built-in notepad.

## Panels & Entry Points

| Panel | Tab kind | Guide entry | Notes |
| --- | --- | --- | --- |
| File Workbench | `workbench` | order 100 | Open from the right-sidebar guide area; auto-navigates to the current session's workspace directory on first open |
| File Editor | `vscode` | order 101 | Same as above, listed below the File Workbench |
| Terminal | — | — | Toolbar terminal button, or right-click a directory → "Open in Terminal" |

> The only entries are the right-sidebar guide cards and tabs; there are no input-box buttons or top drawer anymore.

## Feature Overview

### 🗂 File Workbench (Explorer)

- **Single-window Win11 tree**: Home / Gallery / This PC drives / Recycle Bin / Favorites / Session files; draggable splitter (default 3:7), command bar + status bar, directory-first case-insensitive sorting.
- **Real drive volume labels**: reads system volume labels shown as `Label (C:)`, falling back to a localized "Local Disk (C:)".
- **View modes**: 8 modes — extra-large / large / medium / small icons, list, details, content, tiles; details-view column widths are draggable; toggle extension visibility.
- **Search**: recursive search of file names and content within the current directory, with case sensitivity / regex support and virtual scrolling; supports cross-file batch replace on content hits.
- **CRUD**: create file / directory, rename, delete (with confirmation), copy / cut / paste, rubber-band multi-select, batch operations, external drag-and-drop upload, compress / extract.
- **Recycle Bin**: shares the same UI as the file list (same 8 view modes / sorting / multi-select / rubber band), with operations switched to Restore / Delete permanently / Empty recycle bin.
- **Git badges**: file status (`?` / `A` / `M` / `D`) badges + right-click Git operations.
- **Notepad**: right-click "Edit" opens the built-in text editor (save-as / clipboard / unsaved-changes confirmation).
- **Background tasks**: long-running jobs like uploads and compression show progress and results in the background-task panel, with a history archive.
- **Sub-agent**: right-click "Handle with sub-agent" to start an official sub-agent session on the selected files / directories.
- **Navigation**: back / forward / up / back to session directory, breadcrumb address bar, favorites, session-touched files (real-time via SSE).

### 📝 File Editor

- **Project tree**: expansion state and scroll position persisted; single click selects, double click opens; right-click for new file / folder, rename, delete, refresh, add to session.
- **Multi-tab editing**: CodeMirror 6, languages **loaded on demand** by extension (TS/JS/JSON/HTML/CSS/Markdown/YAML/XML/Python/SQL/Java/C++/Rust/Go/PHP, plus legacy modes like C#/shell/Ruby; falls back to plain text when nothing matches).
- **Tab-bar context menu**: close / save & close / close others / close tabs to the right / close all.
- **Editor context menu**: format content, save; `Ctrl+S` saves; unsaved tabs confirm before closing; read-only files are clearly marked.
- **Open folder**: two-pane picker (left pane "My Computer + shortcuts", right pane the corresponding folder), supports **double-click to drill down, single click to select**, plus new-folder creation or direct path input.
- Shares the **same global terminal** as the file workbench.

### ▶ Terminal

- **Persistent ConPTY shells** (node-pty): real console semantics — per-character backspace, immediate enter execution, full-screen TTY programs and CJK output all work; switchable between `cmd` / `powershell`.
- **Multi-tab** (up to 9), one independent backend session per tab; sessions survive panel closes, and reconnecting resumes output.
- **Floating windows**: draggable, resizable from the bottom-right corner, double-click to reset; minimized windows collapse into the bottom-right **dock** (persistent across panels, restorable).
- **Cleanup on close**: on Windows the whole process tree is killed with `taskkill /T`, avoiding orphaned npm / python / node processes.
- **Search & display**: Ctrl+F to search output (case-sensitive), font size up/down, clear screen.
- **Key bindings**: `Ctrl+C` copies when there's a selection (otherwise passes SIGINT through), `Ctrl+V` paste, `Ctrl+F` search, `Ctrl±` / `Ctrl+0` font size.
- **Privilege badge**: shows whether the current terminal is "Administrator" or "Standard", see [Permission model](#permission-model-terminal-administrator-mode).
- **Official terminal backend**: for local shells, the process layer (PTY creation / reconnect / cleanup) is delegated to the host's official `ctx.webTerminals` service when available, with automatic fallback to the plugin's own backend; SSH terminals always use the plugin's own SSH channel.

### 🌿 Git / SVN Management Panels

Both panels open from the file workbench and the file editor (right-click → open management panel), each organized into sections in a narrow left column:

**Git** (7 sections)

| Section | Capabilities |
| --- | --- |
| Changes | staged / unstaged / untracked groups; inline stage, unstage, ignore, discard; stage all; commit (with quick commit) |
| History | commit graph (all / current branch) + commit details (hash / author / time / parents / refs / file list / patch); `reset` (soft / mixed / hard), `revert`, `cherry-pick` |
| Branches | create & switch, rename, local & remote branch list, switch, merge into current, push, delete, checkout remote branch |
| Tags | create, fetch all, publish Release, view, fetch remote tags, push, delete |
| Remotes | add, edit URL, delete |
| Stashes | create, view, apply / delete |
| Command line | built-in git CLI: run any git subcommand and see the output |

Plus per-file **diff view / file history / blame**, and upstream/downstream `↑ahead ↓behind` display.

**SVN** (3 sections: Changes / Log / Output)

- Update, cleanup, checkout (URL + target directory), add to version control, revert, resolve conflicts, commit (selected or all).
- Per-file diff / blame; working-copy URL and repository root display.
- **Ignore** uses `svn:ignore` (a directory property applied on the parent directory; read-then-idempotently-append).
- Clear guidance is shown when the svn CLI is missing or the current directory is not a working copy.

**Context menus** are generated uniformly by `composables/domain/repoMenu.ts` (single source of truth); Git offers stage / commit / diff / discard / ignore (writing the repo-root `.gitignore`), SVN offers open management panel / update / add to version control / ignore.

### 🔗 Session Integration

- **Session files**: files touched by the current session are pushed in real time via SSE and shown in the nav tree's "Session files" group.
- **Add to session**: writes a file / directory into the current session input draft as an **official DSH structured reference chip** (`@path`, `source: "reference"`) — not plain text.
- **Open redirect**: clicking files in the session (tool-line paths, artifact lines, body mentions) is redirected to this plugin; falls back to host-native behavior when the workbench isn't mounted.
- **Follows the session**: switching sessions or a session's working directory change moves the workspace root automatically.

### 🎨 Settings

Allow operations outside the workspace root (root switch), show hidden files, accent color, UI font size, font family, theme (follow host / dark / light), default view.

## Keyboard Shortcuts

Global:

| Key | Action |
| --- | --- |
| `?` | Open shortcut help (global) |

File list (while focused):

| Key | Action |
| --- | --- |
| `Ctrl/Cmd+A` | Select all |
| `Ctrl/Cmd+C / X / V` | Copy / cut / paste |
| `Ctrl/Cmd+F` | Focus the filter box |
| `Ctrl+Shift+N` | New folder |
| `Delete` / `F2` / `F5` | Delete (confirm) / rename / refresh |
| `Enter` | Open file / enter directory |
| `↑ ↓ Home End` | Move selection |
| `Backspace` / `Alt+↑` | Go to parent directory |
| `Alt+← / →` | Navigate history back / forward |

File editor & terminal:

| Key | Where | Action |
| --- | --- | --- |
| `Ctrl/Cmd+S` | Editor | Save current tab |
| Tab-bar right click | Editor | Close / save & close / close others / close to the right / close all |
| `Ctrl+C` | Terminal | Copy when there's a selection; otherwise passes `SIGINT` through |
| `Ctrl+V` | Terminal | Paste |
| `Ctrl+F` | Terminal | Search terminal output |
| `Ctrl±` / `Ctrl+0` | Terminal | Increase / decrease / reset font size |

## Project Structure

```
src/
  shared/
    types.ts             shared types (host ↔ client ↔ Vue)
    locales.ts           zh/en copy dictionary (both must be updated together)
    session-files.ts     session transcript file parsing
  host/                  server side (Cordis plugin)
    index.ts             apply: registers /api/dsh-file-workbench routes + static assets + self-update
    updater.ts           self-update after startup
    fs/
      fs-tree.ts         list / sort / symlinks / containment guard
      fs-search.ts       recursive search + cross-file replace
      fs-read.ts         open / save
      fs-zip.ts          compress / extract
      fs-drives.ts       drives & volume labels (Win32_LogicalDisk, 5-min TTL cache)
      recycle.ts         system recycle bin
    routes/
      routes.ts                route dispatch table
      routes-fs.ts             file system (list / search / read-write / compress / My Computer)
      routes-git.ts            Git (status / diff / add / discard / log / branch / tag / remote / stash / ignore)
      routes-svn.ts            SVN (info / status / run / log / blame)
      routes-terminal.ts       terminal: persistent ConPTY shells (SSE stream) + host privilege probe /term-env
      routes-recycle.ts        recycle bin
      routes-session-stream.ts session-touched-files SSE
      routes-subagent.ts       sub-agent
      routes-task-archives.ts  background task archives
      routes-persist.ts        preference persistence
      routes-util.ts           JSON envelope / body parsing / static assets / path validation
    store/
      root-store.ts      workspace root
      workbench-store.ts prefs / favorites / layout persistence
    subagent/subagent.ts official sub-agent sessions
  client/                DSH client bridge (TSX, registered into the right sidebar; injects Vue assets + mounts)
    index.tsx            apply: registers the two right-sidebar tabs, redirects file opens, injects Vue assets, reference channel
    RightPaneBridge.tsx  mounts the Vue workbench / editor body into the right-panel container
    ComposerBridge.tsx   session input reference seat (official `@path` chip writing)
    TabMenuBridge.tsx    right-sidebar tab menu additions (new editor / float window)
    OfficialTerminalBridge.ts official terminal bridge: local terminals via host ctx.webTerminals
    api.ts               "open tab" bridge
  vue/                   Vue 3 + Vite frontend
    main.ts              entry: right-panel mounting + global terminal mounted persistently (on body)
    App.vue              file workbench single-window shell
    styles.css           global theme variables & base styles
    components/
      common/            WinMenuBar / NavPathBar / Icon / ContextMenu / ConfirmDialog / ShortcutHelpDialog
      business/explorer/ ExplorerPane (two panes + splitter), CommandBar, NavPane, FileListPane (list / recycle bin),
                         ThisPcPane, SearchPane, StatusBar, BgTaskPanel, TxtEditor
      business/vscode/   VSCodePane, ProjectTree, TabBar, CodeEditor, FolderPickerDialog, langResolver
      business/git/      GitPanel, GitDiffView, GitGraphList, SvnPanel, QuickCommit
      business/terminal/ TerminalHost (global singleton host), TerminalDialog (floating / docked)
      settings/          SettingsDialog
    composables/
      core/              useApi, settings, theme, i18n, dialog, fileTaskMeta
      domain/            git, gitGraph, svn, repoMenu (single source for context menus), terminalStore,
                         officialTerm (official terminal bridge accessor), driveName
      session/           sessionSse, tasks, listStatus
      ui/                icons, clipboard, dnd, virtual
    stores/              workbench, explorer, fileCommands, vscode
    types/               auto-imports.d.ts, components.d.ts
```

## Development

Prerequisites: Node ≥ 20, npm (or pnpm).

| Command | Purpose |
| --- | --- |
| `npm run dev:vue` | Run the Vue app standalone for development (mounts `#app` itself; pair with a running host) |
| `npm run build:vue` | Build only the Vue bundle (`dist/`) |
| `npm run typecheck` | `vue-tsc --noEmit` |
| `npm run build` | Full build: Vite (Vue) + esbuild (host/client) → `lib/` |
| `npm run build:dev` | Same, with `--dev` |
| `npm run sync` | Sync `lib/` into the web profile |
| `npm run deploy` | `build:dev` + `sync` |

The API base defaults to `/api/dsh-file-workbench` and can be overridden with the `VITE_API_BASE`
environment variable (e.g. during development, point it at `http://localhost:xxxx/api/dsh-file-workbench`).

**What a change affects** (affects how you debug):

- Only `src/vue/**` or `src/shared/locales.ts` → build + sync, then **hard-refresh the browser**.
- Changes in `src/host/**` or `src/client/**` (e.g. new routes) → **must restart `dsh web`**.

## Installing into DSH (web profile)

```bash
npm run build && npm run sync   # build and sync the bundle into the web profile
```

After installing, run `npm install` inside the profile (so cordis.patch.yml takes effect),
**restart `dsh web`**, and hard-refresh the browser (Cmd/Ctrl+Shift+R).

> If `dsh web` doesn't already include the mount entry for this plugin, append the
> following to `~/.dsh/profiles/web/cordis.patch.yml`:
>
> ```yaml
> - insert:
>     - id: dsh-file-workbench
>       name: 'dsh-file-workbench'
> ```

## Usage

1. Click "File Workbench" or "File Editor" in the DSH right-sidebar guide area
   (the first open auto-navigates to the current session's workspace directory).
2. Workbench: pick a location in the left nav tree; double-click folders on the right to enter,
   double-click files to open them in the **DSH right-side viewer**.
3. Editor: pick a project directory via the toolbar "Open folder" → double-click files in the
   project tree → edit across tabs, `Ctrl+S` to save.
4. Terminal: open via the toolbar terminal button; minimized windows collapse into the
   bottom-right dock; click to restore.
5. `?` shows the shortcut help.

## Permission Model (Terminal Administrator Mode)

Terminal shells are spawned by the host via **ConPTY**, and **child processes inherit the token of
the `dsh web` process** — so "do commands in the terminal have administrator rights" equals
"was `dsh web` started as administrator".

- **Getting an administrator terminal**: run `dsh web` **as administrator** (right-click the
  terminal/shortcut → "Run as administrator"); then **all** terminals in the panel have
  administrator rights.
- **Badge**: the terminal tab bar shows "Administrator / Standard"; hover for details, click for
  guidance. The probe is provided by the host's `GET /term-env` (on Windows, determined by the
  integrity-level SID from `whoami /groups`; on POSIX, `uid === 0`).
- **Why the plugin can't spawn a single elevated terminal**: on Windows elevation must go through
  UAC, and a process elevated via ShellExecute / `runas` **cannot attach to a ConPTY pseudo-console**,
  so the plugin cannot elevate a single terminal; the only viable path is elevating the host itself.
- Alternatives (not implemented): per-command elevation via `sudo.exe` (requires Windows sudo
  enabled in inline mode), or a host-registered high-privilege helper bridged over a named pipe
  (introduces a self-built elevation channel with a large security surface).

## Security

- All read/write paths first pass a root containment guard (re-checked after symlink resolution),
  rejecting privilege escalation and path traversal.
- Outside the workspace root everything is read-only by default; the **root switch** in settings
  must be enabled to allow writes.
- Search does not descend into symlinked directories (loop-safe) and has budgets on visited and
  matched file counts.
- Terminal working directories go through the same protected-path validation; terminating a
  session cleans up the whole process tree.
- Persistence only writes whitelisted keys (prefs / favorites / layout) under
  `{DSH_HOME|~/.dsh}/fileworkbench/`.

## Dependencies

- **Vue 3 + Vite** (frontend); **React** (DSH right-sidebar bridge, provided by the host); **esbuild** (host/client build).
- `element-plus` (UI components); `@xterm/xterm` + fit / search / web-links addons (terminal rendering).
- **CodeMirror 6** (editor: `@codemirror/*` language packages loaded on demand).
- `node-pty` (ConPTY interactive terminal, a native module; the terminal is unavailable if missing).
- `fflate` (compress / extract); `fzstd` (decompress zstd session transcripts).
- Reuses peers `@deepseek-ai/cordis` and `@deepseek-ai/dsh-host-webserver`.

## License

MIT
