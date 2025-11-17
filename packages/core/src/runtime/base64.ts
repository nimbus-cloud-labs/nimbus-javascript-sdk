const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();

type BufferEncoding = 'utf8' | 'utf-8' | 'base64';

interface NodeBuffer {
  from(input: string | ArrayBuffer | ArrayBufferView, encoding?: BufferEncoding): NodeBufferInstance;
}

interface NodeBufferInstance {
  toString(encoding: BufferEncoding): string;
}

export function encodeBase64(value: string): string {
  const btoaFn = typeof globalThis.btoa === 'function' ? globalThis.btoa.bind(globalThis) : undefined;
  if (btoaFn) {
    const utf8 = textEncoder.encode(value);
    let binary = '';
    for (let i = 0; i < utf8.length; i += 1) {
      binary += String.fromCharCode(utf8[i]);
    }
    return btoaFn(binary);
  }

  const buffer = getNodeBuffer();
  if (buffer) {
    return buffer.from(value, 'utf8').toString('base64');
  }

  throw new Error('Base64 encoding is not supported in this runtime.');
}

export function decodeBase64Json<T = unknown>(value: string): T {
  const decoded = decodeBase64ToString(value);
  return JSON.parse(decoded) as T;
}

function decodeBase64ToString(value: string): string {
  const atobFn = typeof globalThis.atob === 'function' ? globalThis.atob.bind(globalThis) : undefined;
  if (atobFn) {
    const binary = atobFn(value);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) {
      bytes[i] = binary.charCodeAt(i);
    }
    return textDecoder.decode(bytes);
  }

  const buffer = getNodeBuffer();
  if (buffer) {
    return buffer.from(value, 'base64').toString('utf8');
  }

  throw new Error('Base64 decoding is not supported in this runtime.');
}

function getNodeBuffer(): NodeBuffer | undefined {
  const maybeBuffer = (globalThis as Record<string, unknown>).Buffer as NodeBuffer | undefined;
  if (maybeBuffer && typeof maybeBuffer.from === 'function') {
    return maybeBuffer;
  }
  return undefined;
}
