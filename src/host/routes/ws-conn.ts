/**
 * RFC6455 WebSocket 服务端最小实现（握手帧编解码 + 单连接封装）。
 *
 * 独立成模块的原因：推送通道（ws-push.ts）与终端多路复用流（routes-terminal.ts 的
 * `/exec-mux-ws`）共用同一套帧编解码 —— 两处长连接都存在，复制两份迟早改岔。
 *
 * ⛔ 为什么自己实现握手与帧编解码：插件运行期只能依赖 `package.json` 里声明的依赖，`ws` 不在
 * 其中（宿主 profile 的 node_modules 里也装不到）。RFC6455 的服务端最小子集——握手 + 文本帧
 * 编码 + ping/pong/close——不到 200 行，独立实现比引入原生依赖链更稳。
 */
import { createHash } from "node:crypto";
import type { Duplex } from "node:stream";

/** WebSocket 握手用的固定 GUID（RFC6455 §1.3）。 */
const WS_GUID = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11";
/** 单帧上限：本协议的消息都很小，超过即视为异常并断开（防内存被撑爆）。 */
export const MAX_FRAME = 1 << 20;

/** 握手应答值：`base64(sha1(sec-websocket-key + GUID))`。 */
export function acceptKey(key: string): string {
  return createHash("sha1").update(key + WS_GUID).digest("base64");
}

/** 编码一个服务端→客户端的帧（服务端帧按规范不加掩码）。 */
export function encodeFrame(payload: Buffer, opcode = 0x1): Buffer {
  const len = payload.length;
  const head = Buffer.alloc(len < 126 ? 2 : len < 65536 ? 4 : 10);
  head[0] = 0x80 | opcode; // FIN + opcode
  if (len < 126) {
    head[1] = len;
  } else if (len < 65536) {
    head[1] = 126;
    head.writeUInt16BE(len, 2);
  } else {
    head[1] = 127;
    head.writeBigUInt64BE(BigInt(len), 2);
  }
  return Buffer.concat([head, payload]);
}

/** 解析出的一帧。 */
interface WsFrame {
  opcode: number;
  payload: Buffer;
}

/**
 * 对端 close 帧里回显状态码时允许使用的码位（RFC6455 §7.4.1 中端点**可以发送**的码）。
 *
 * 1004/1005/1006/1015 是保留码，**不允许出现在自己发出的 close 帧里** —— 回显它们本身就是
 * 新的协议错误，所以只回显明确合法的码（其余情况回空负载，对端记为 1005「未收到状态码」）。
 */
function echoableCloseCode(code: number): boolean {
  return (code >= 1000 && code <= 1003) || (code >= 1007 && code <= 1011) || (code >= 3000 && code <= 4999);
}

/** 一条已升级的连接：负责帧的增量解析、发送与关闭。 */
export class WsConn {
  /** 已收但尚未构成完整帧的字节（TCP 是字节流，帧可能跨多个 data 事件）。 */
  private buf: Buffer = Buffer.alloc(0);
  /** 已收尾：不再读写任何字节，`onDone` 已回调。 */
  private closed = false;
  /**
   * 是否已发出 close 帧。
   *
   * ⛔ RFC6455 §5.5.1：**一个端点只能发一次 close**。发第二次会被对端判为协议错误 ——
   * 浏览器控制台报 `WebSocket connection to '…' failed: Close received after close`，
   * 并因此触发 error 事件（本可干净关闭的连接变成「失败」）。
   * 本类里「回应对端的 close」与「主动关闭」都想发 close 帧，故必须由此标志统一收口。
   */
  private closeSent = false;

  constructor(
    private readonly socket: Duplex,
    /** 收到文本帧的回调。 */
    private readonly onMessage: (text: string) => void,
    /** 连接结束（关闭或出错）的回调。 */
    private readonly onDone: () => void,
  ) {
    socket.on("data", (chunk: Buffer) => this.feed(chunk));
    socket.on("error", () => this.destroy());
    socket.on("close", () => this.finish());
  }

  /** 送入一段收到的字节并尽可能多地解析出完整帧。 */
  feed(chunk: Buffer): void {
    if (this.closed) return;
    this.buf = this.buf.length ? Buffer.concat([this.buf, chunk]) : chunk;
    for (;;) {
      const frame = this.next();
      if (!frame) return;
      if (frame.opcode === 0x8) {
        // 收到对端 close：按 §5.5.1 回**一个** close（回显其状态码），随后收尾。
        // ⛔ 这里不能走 destroy() 的「发 close + 断 socket」路径：那会在已回过 close 之后再发一次，
        //    对端（浏览器）即判协议错误 —— 控制台报 "Close received after close"。
        this.writeClose(frame.payload);
        this.hangUp();
        return;
      }
      if (frame.opcode === 0x9) {
        // ping → pong（原样回传负载）
        this.send(frame.payload, 0xa);
        continue;
      }
      if (frame.opcode === 0x1) {
        this.onMessage(frame.payload.toString("utf8"));
        continue;
      }
      // pong（0xa）/ 分片（0x0）/ 二进制：本协议不用，忽略。
    }
  }

  /** 取下一帧；不足一帧时返回 null（等待更多字节）。 */
  private next(): WsFrame | null {
    const b = this.buf;
    if (b.length < 2) return null;
    const opcode = b[0] & 0x0f;
    const masked = (b[1] & 0x80) !== 0;
    let len = b[1] & 0x7f;
    let off = 2;
    if (len === 126) {
      if (b.length < 4) return null;
      len = b.readUInt16BE(2);
      off = 4;
    } else if (len === 127) {
      if (b.length < 10) return null;
      const big = b.readBigUInt64BE(2);
      if (big > BigInt(MAX_FRAME)) {
        this.destroy();
        return null;
      }
      len = Number(big);
      off = 10;
    }
    if (len > MAX_FRAME) {
      this.destroy();
      return null;
    }
    const maskLen = masked ? 4 : 0;
    const total = off + maskLen + len;
    if (b.length < total) return null;
    let payload = b.subarray(off + maskLen, total);
    if (masked) {
      // 客户端帧必须带掩码：按 4 字节循环异或还原。
      const mask = b.subarray(off, off + 4);
      const out = Buffer.allocUnsafe(len);
      for (let i = 0; i < len; i++) out[i] = payload[i] ^ mask[i & 3];
      payload = out;
    } else {
      // 拷贝一份：否则会与后续 concat 复用的内存相互影响。
      payload = Buffer.from(payload);
    }
    this.buf = b.subarray(total);
    return { opcode, payload };
  }

  /** 发送一个 JSON 文本帧（连接已关闭时静默忽略）。 */
  sendJson(value: unknown): void {
    this.send(Buffer.from(JSON.stringify(value), "utf8"), 0x1);
  }

  /** 发送一个空 ping 帧（服务端保活；浏览器会自动回 pong）。 */
  ping(): void {
    this.send(Buffer.alloc(0), 0x9);
  }

  private send(payload: Buffer, opcode: number): void {
    if (this.closed) return;
    if (opcode === 0x8) {
      // 统一收口：close 帧只能发一次（见 closeSent 注释）。
      if (this.closeSent) return;
      this.closeSent = true;
    }
    try {
      this.socket.write(encodeFrame(payload, opcode));
    } catch {
      /* 对端已断开：由 close/error 事件收尾 */
    }
  }

  /** 发出 close 帧（幂等）。`peerPayload` 为对端 close 的负载，用于回显状态码。 */
  private writeClose(peerPayload?: Buffer): void {
    if (this.closeSent || this.closed) return;
    // 回显对端状态码（§5.5.1 的常规做法）：不带码时对端记为 1005「未收到状态码」，
    // 带一个合法码（如 1000 正常关闭）语义更清楚。非法/保留码一律不回显。
    let payload = Buffer.alloc(0);
    if (peerPayload && peerPayload.length >= 2 && echoableCloseCode(peerPayload.readUInt16BE(0))) {
      // 复制而不是 subarray：既避开 Buffer<ArrayBufferLike> 的类型收窄问题，
      // 也避免让这个小帧长期引用对端那一整块读缓冲。
      payload = Buffer.from(peerPayload.subarray(0, 2));
    }
    this.send(payload, 0x8);
  }

  /** 主动关闭：先发 close 帧（若尚未发过），再收尾。 */
  destroy(): void {
    this.writeClose();
    this.hangUp();
  }

  /** 收尾：不再读写，关闭 socket 并通知 `onDone`。 */
  private hangUp(): void {
    if (this.closed) return;
    this.closed = true;
    try {
      // 用 end() 而不是 destroy()：close 帧可能仍在写缓冲里，destroy 会直接丢弃它，
      // 对端就永远等不到关闭握手（表现为异常断开 1006）。end() 先冲干净再发 FIN。
      this.socket.end();
    } catch {
      /* ignore */
    }
    // 对端若迟迟不关（半开连接），兜底强断，避免 socket 长期滞留。
    const t = setTimeout(() => {
      try {
        this.socket.destroy();
      } catch {
        /* ignore */
      }
    }, 1000);
    t.unref?.();
    this.onDone();
  }

  /** 对端已关闭：只做清理（不再写 socket）。 */
  private finish(): void {
    if (this.closed) return;
    this.closed = true;
    this.onDone();
  }
}
