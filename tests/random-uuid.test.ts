import { afterEach, describe, expect, it, vi } from 'vitest';

describe('randomUuid runtime helper', () => {
  const originalCrypto = globalThis.crypto;

  afterEach(() => {
    globalThis.crypto = originalCrypto;
    vi.resetModules();
    vi.restoreAllMocks();
    vi.clearAllMocks();
  });

  it('uses crypto.randomUUID when available', async () => {
    const randomUUID = vi.fn().mockReturnValue('12345678-1234-4000-8000-abcdefabcdef');
    globalThis.crypto = { randomUUID } as unknown as Crypto;

    const randomUuid = await loadRandomUuid();
    expect(randomUuid()).toBe('12345678-1234-4000-8000-abcdefabcdef');
    expect(randomUUID).toHaveBeenCalledTimes(1);
  });

  it('builds UUIDs via getRandomValues when randomUUID is missing', async () => {
    const bytes = new Uint8Array(16);
    bytes.set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    const getRandomValues = vi.fn().mockImplementation((array: Uint8Array) => {
      array.set(bytes);
      return array;
    });
    globalThis.crypto = { getRandomValues } as unknown as Crypto;

    const randomUuid = await loadRandomUuid();
    const token = randomUuid();

    expect(token).toMatch(/^[0-9a-f-]{36}$/);
    expect(token[14]).toBe('4'); // version
    expect(['8', '9', 'a', 'b']).toContain(token[19]); // variant
    expect(getRandomValues).toHaveBeenCalledTimes(1);
  });

  it('falls back to node:crypto randomUUID when global crypto is missing', async () => {
    globalThis.crypto = undefined as unknown as Crypto;
    const randomUUID = vi.fn().mockReturnValue('deadbeef-dead-4000-8000-feedfacecafe');
    vi.doMock('node:crypto', () => ({ randomUUID }));

    const randomUuid = await loadRandomUuid();
    expect(randomUuid()).toBe('deadbeef-dead-4000-8000-feedfacecafe');
    expect(randomUUID).toHaveBeenCalledTimes(1);
  });
});

async function loadRandomUuid(): Promise<() => string> {
  const mod = await import('@nimbus-cloud/sdk-core');
  return mod.randomUuid;
}
