type CryptoLike = {
  randomUUID?: () => string;
  getRandomValues?: <T extends ArrayBufferView | null>(array: T) => T;
};

type NodeCryptoModule = {
  randomUUID?: () => string;
};

export function randomUuid(): string {
  const crypto = getCrypto();
  if (crypto?.randomUUID) {
    return crypto.randomUUID();
  }

  if (crypto?.getRandomValues) {
    const bytes = new Uint8Array(16);
    crypto.getRandomValues(bytes);
    bytes[6] = (bytes[6] & 0x0f) | 0x40;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;
    return formatUuid(bytes);
  }

  const nodeRandomUUID = loadNodeRandomUUID();
  if (nodeRandomUUID) {
    return nodeRandomUUID();
  }

  throw new Error('No crypto.randomUUID implementation is available.');
}

function formatUuid(bytes: Uint8Array): string {
  const hex = Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('');
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

function getCrypto(): CryptoLike | undefined {
  return (globalThis as Record<string, unknown>).crypto as CryptoLike | undefined;
}

function loadNodeRandomUUID(): (() => string) | undefined {
  const nodeRequire = getNodeRequire();
  if (!nodeRequire) {
    return undefined;
  }
  try {
    const nodeCrypto = nodeRequire('node:crypto') as NodeCryptoModule | undefined;
    if (typeof nodeCrypto?.randomUUID === 'function') {
      return nodeCrypto.randomUUID;
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
