type SubtleCryptoLike = {
  digest: (algorithm: AlgorithmIdentifier, data: BufferSource) => Promise<ArrayBuffer>;
};

type NodeCryptoModule = {
  createHash?: (algorithm: string) => NodeHash;
};

type NodeHash = {
  update(data: ArrayBufferView): NodeHash;
  digest(encoding: 'hex'): string;
};

export async function sha256Hex(payload: ArrayBuffer | ArrayBufferView): Promise<string> {
  const buffer = normalizePayload(payload);
  const bytes = new Uint8Array(buffer);
  const subtle = getSubtleCrypto();
  if (subtle) {
    const digest = await subtle.digest('SHA-256', buffer);
    return arrayBufferToHex(digest);
  }

  const createHash = loadNodeCreateHash();
  if (createHash) {
    return createHash('sha256').update(bytes).digest('hex');
  }

  throw new Error('SHA-256 digest is not available in this runtime.');
}

function normalizePayload(payload: ArrayBuffer | ArrayBufferView): ArrayBuffer {
  if (payload instanceof ArrayBuffer) {
    return payload;
  }
  if (ArrayBuffer.isView(payload)) {
    const buffer = payload.buffer;
    if (buffer instanceof ArrayBuffer) {
      if (payload.byteOffset === 0 && payload.byteLength === buffer.byteLength) {
        return buffer;
      }
      return buffer.slice(payload.byteOffset, payload.byteOffset + payload.byteLength);
    }
    const copy = new Uint8Array(payload.byteLength);
    copy.set(new Uint8Array(buffer, payload.byteOffset, payload.byteLength));
    return copy.buffer;
  }
  throw new TypeError('Unsupported payload type.');
}

function arrayBufferToHex(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('');
}

function getSubtleCrypto(): SubtleCryptoLike | undefined {
  const crypto = (globalThis as Record<string, unknown>).crypto as Crypto | undefined;
  if (crypto?.subtle) {
    return crypto.subtle;
  }
  return undefined;
}

function loadNodeCreateHash(): NodeCryptoModule['createHash'] | undefined {
  const nodeRequire = getNodeRequire();
  if (!nodeRequire) {
    return undefined;
  }
  try {
    const nodeCrypto = nodeRequire('node:crypto') as NodeCryptoModule | undefined;
    if (typeof nodeCrypto?.createHash === 'function') {
      return nodeCrypto.createHash;
    }
  } catch {
    return undefined;
  }
  return undefined;
}

function getNodeRequire(): ((id: string) => unknown) | undefined {
  try {
    // eslint-disable-next-line
    return Function('return typeof require === "function" ? require : undefined;')();
  } catch {
    return undefined;
  }
}
