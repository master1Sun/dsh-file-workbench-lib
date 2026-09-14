/**
 * 磁盘（驱动器）枚举 —— 「此电脑」右侧「设备和驱动器」视图的数据源。
 *
 * 与 listMyComputer 的区别：这里只枚举「盘符」，并且附带容量信息
 * （总容量 / 可用容量）与卷标，用于复刻 Win11 的磁盘卡片（进度条 + 「x GB 可用，共 y GB」）。
 *
 * 实现要点：
 *  - 容量统一走 node:fs 的 statfs（跨平台，win32 亦可用），失败时降级为未知（不阻塞枚举）；
 *  - 卷标 / 文件系统类型在 win32 上通过一次 PowerShell（Win32_LogicalDisk）批量取回，
 *    最佳努力 + 超时 + 短时缓存；取不到卷标就只给盘符，由前端本地化兜底（不影响容量展示）。
 */
import { statfs } from "node:fs/promises";
import { existsSync } from "node:fs";
import { execFile } from "node:child_process";

/** 单个驱动器的信息（与 shared/types 的 DriveInfo 形状一致）。 */
export interface DriveInfo {
  /** 盘符字母（win32：如 "C"；POSIX：空串）。 */
  letter: string;
  /** 挂载根绝对路径（win32：`C:\`；POSIX：`/`）。 */
  path: string;
  /** 卷标（无卷标或取不到时为空串）。 */
  label: string;
  /** 展示名：有卷标 → `卷标 (C:)`；无卷标 → `本地磁盘 (C:)`。 */
  name: string;
  /** 总容量（字节）；取不到时为 undefined。 */
  total?: number;
  /** 可用容量（字节）；取不到时为 undefined。 */
  free?: number;
  /** 文件系统类型（如 NTFS / APFS）；取不到时为空串。 */
  fsType: string;
  /** 是否为可移动介质（U 盘/移动硬盘/光驱等）。 */
  removable: boolean;
}

/** win32 卷标批量查询的缓存时长（毫秒）——避免频繁拉起 PowerShell。 */
const LABEL_CACHE_TTL = 5 * 60 * 1000;
/** 卷标查询超时（毫秒）；超时即放弃，仅影响卷标展示。 */
const LABEL_TIMEOUT = 2500;

interface WinVolume {
  letter: string;
  label: string;
  fsType: string;
  driveType: number;
}

let labelCache: { at: number; map: Map<string, WinVolume> } | null = null;

/** 列出 win32 上存在的盘符字母（A–Z）。 */
function win32Letters(): string[] {
  const out: string[] = [];
  for (let c = 67; c <= 90; c += 1) out.push(String.fromCharCode(c)); // C: 起，A/B 为软驱盘符一律忽略
  return out.filter((letter) => {
    try {
      return existsSync(`${letter}:\\`);
    } catch {
      return false;
    }
  });
}

/** PowerShell 批量读取卷信息（卷标 / 文件系统 / 驱动器类型），失败返回空 Map。 */
function queryWinVolumes(): Promise<Map<string, WinVolume>> {
  return new Promise((resolve) => {
    // 关键：Windows PowerShell 5.1 在重定向输出时按控制台代码页（中文系统为 GBK）写出，
    // 而 execFile 默认按 UTF-8 解码，中文卷标会变成 U+FFFD。先强制控制台输出为 UTF-8 再取数据。
    const script =
      "[Console]::OutputEncoding=[Text.Encoding]::UTF8; " +
      "Get-CimInstance Win32_LogicalDisk | " +
      "Select-Object DeviceID,VolumeName,FileSystem,DriveType | " +
      "ConvertTo-Json -Compress";
    execFile(
      "powershell.exe",
      ["-NoProfile", "-NonInteractive", "-Command", script],
      { timeout: LABEL_TIMEOUT, windowsHide: true, maxBuffer: 1 << 20 },
      (error, stdout) => {
        const map = new Map<string, WinVolume>();
        if (error || !stdout) {
          resolve(map);
          return;
        }
        try {
          const parsed = JSON.parse(stdout) as unknown;
          const rows = Array.isArray(parsed) ? parsed : [parsed];
          for (const row of rows) {
            const r = row as Record<string, unknown>;
            const deviceId = String(r.DeviceID ?? "");
            const letter = deviceId.replace(":", "").toUpperCase();
            if (letter.length !== 1) continue;
            map.set(letter, {
              letter,
              label: typeof r.VolumeName === "string" ? r.VolumeName.trim() : "",
              fsType: typeof r.FileSystem === "string" ? r.FileSystem : "",
              driveType: Number(r.DriveType ?? 3) || 3,
            });
          }
        } catch {
          /* 输出非预期 JSON：忽略，走兜底命名 */
        }
        resolve(map);
      },
    );
  });
}

/**
 * 取卷信息映射（带 TTL 缓存；仅在 win32 上有意义）。
 *
 * 对外暴露供 `listMyComputer` 复用：让「我的电脑」的盘符也显示真实卷标
 * （如 `系统 (C:)`、`数据 (D:)`），而不是一律「本地磁盘 (X:)」。
 */
export async function winVolumes(): Promise<Map<string, WinVolume>> {
  if (process.platform !== "win32") return new Map();
  const now = Date.now();
  if (labelCache && now - labelCache.at < LABEL_CACHE_TTL) return labelCache.map;
  const map = await queryWinVolumes();
  labelCache = { at: now, map };
  return map;
}

/** 读取某挂载点的容量（总/可用）；失败返回 undefined。 */
async function capacityOf(root: string): Promise<{ total?: number; free?: number }> {
  try {
    const st = await statfs(root);
    const total = st.bsize * st.blocks;
    const free = st.bsize * (st.bavail ?? st.bfree);
    return { total: total > 0 ? total : undefined, free: Number.isFinite(free) ? free : undefined };
  } catch {
    return {};
  }
}

/**
 * 组装展示名：有卷标用卷标，否则只给盘符（如 `C:`）。
 *
 * 这里**不再拼中文兜底名**（原来是「本地磁盘 (X:)」）：host 侧写死中文无法国际化，
 * 统一由前端按 `label` 决定——有卷标显示 `卷标 (X:)`，没有则本地化为「本地磁盘 (X:)」
 * /「Local Disk (X:)」（见 `composables/domain/driveName`）。
 */
export function displayName(letter: string, label: string): string {
  if (letter) return label ? `${label} (${letter}:)` : `${letter}:`;
  return label || "/";
}

/**
 * 枚举本机驱动器（含容量与卷标）。
 * 枚举仅做存在性探测；容量/卷标失败时降级为 undefined/空串，不抛异常。
 */
export async function listDrives(): Promise<DriveInfo[]> {
  const isWin = process.platform === "win32";
  const letters = isWin ? win32Letters() : [""];
  const volumes = isWin ? await winVolumes() : new Map<string, WinVolume>();

  const drives = await Promise.all(
    letters.map(async (letter): Promise<DriveInfo> => {
      const root = isWin ? `${letter}:\\` : existsSync("/") ? "/" : "";
      const vol = volumes.get(letter);
      const label = vol?.label ?? "";
      const { total, free } = root ? await capacityOf(root) : {};
      return {
        letter,
        path: root,
        label,
        name: displayName(letter, label),
        total,
        free,
        fsType: vol?.fsType ?? "",
        removable: isWin ? vol?.driveType === 2 || vol?.driveType === 5 : false,
      };
    }),
  );

  // 光驱等无介质的盘符容量为 0，过滤掉空挂载点之外仍保留（Win11 亦会展示空光驱）。
  return drives.filter((d) => d.path !== "");
}
