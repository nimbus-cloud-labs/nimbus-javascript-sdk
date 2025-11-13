import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import type { DamManagementServiceClient } from '../src/client';
import { DamIngestionUploader } from '../src/ingestion';

describe('DamIngestionUploader', () => {
  let originalFetch: typeof fetch | undefined;

  beforeEach(() => {
    originalFetch = globalThis.fetch;
    globalThis.fetch = vi.fn().mockResolvedValue(new Response(null, { status: 200 })) as typeof fetch;
  });

  afterEach(() => {
    if (originalFetch) {
      globalThis.fetch = originalFetch;
    } else {
      delete (globalThis as Record<string, unknown>).fetch;
    }
  });

  it('uploads bytes and completes ingestion', async () => {
    const client = {
      beginAssetIngestion: vi.fn().mockResolvedValue({
        upload: {
          upload_url: 'https://storage.example.invalid/upload',
          upload_token: 'token-123'
        }
      }),
      completeAssetIngestion: vi.fn().mockResolvedValue({ status: 'accepted' })
    } as unknown as DamManagementServiceClient;

    const uploader = new DamIngestionUploader(client);
    const result = await uploader.uploadBytes({
      displayName: 'example.png',
      mediaType: 'image/png',
      metadata: { tags: ['demo'] },
      content: Buffer.from('hello world')
    });

    expect(client.beginAssetIngestion).toHaveBeenCalledTimes(1); // eslint-disable-line
    expect(globalThis.fetch).toHaveBeenCalledWith(
      'https://storage.example.invalid/upload',
      expect.objectContaining({
        method: 'PUT',
        headers: expect.objectContaining({ // eslint-disable-line
          'x-nimbus-upload-token': 'token-123',
          'content-type': 'image/png'
        })
      })
    );
    expect(client.completeAssetIngestion).toHaveBeenCalledWith( // eslint-disable-line
      expect.objectContaining({
        upload_token: 'token-123',
        checksum_algorithm: 'sha256',
        size_bytes: 11
      })
    );
    expect(result).toEqual({ status: 'accepted' });
  });
});
