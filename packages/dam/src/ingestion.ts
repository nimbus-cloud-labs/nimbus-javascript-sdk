import { createHash } from 'node:crypto';

import { DamManagementServiceClient } from './client';
import type { IngestionResponse, JsonValue, OperationResponse } from './types';

/**
 * Canonical parameters required to begin an ingestion session.
 */
export interface IngestionParams {
  displayName: string;
  mediaType: string;
  metadata?: JsonValue;
  content: ArrayBuffer | Buffer | Uint8Array;
}

interface UploadTicketPayload {
  upload_url: string;
  upload_token: string;
}

/**
 * Orchestrates DAM ingestion flows by pairing the management API with the object storage upload endpoint.
 * The inner `DamManagementServiceClient` should be configured with an IAM-compatible auth provider.
 */
export class DamIngestionUploader {
  constructor(private readonly client: DamManagementServiceClient) {}

  async uploadBytes(params: IngestionParams): Promise<OperationResponse> {
    const payload = this.normalizeContent(params.content);
    const checksum = this.computeChecksum(payload);
    const ingestionRequest = {
      display_name: params.displayName,
      media_type: params.mediaType,
      content_length: payload.byteLength,
      checksum_algorithm: 'sha256',
      checksum,
      metadata: params.metadata ?? {}
    };

    const beginResponse = await this.client.beginAssetIngestion(ingestionRequest as JsonValue);
    const ticket = this.extractTicket(beginResponse);
    await this.putObject(ticket, payload, params.mediaType);

    const completeRequest = {
      upload_token: ticket.upload_token,
      checksum_algorithm: 'sha256',
      checksum,
      size_bytes: payload.byteLength
    };

    return this.client.completeAssetIngestion(completeRequest as JsonValue);
  }

  private normalizeContent(content: ArrayBuffer | Buffer | Uint8Array): Uint8Array {
    if (content instanceof Uint8Array) {
      return content;
    }
    if (typeof Buffer !== 'undefined' && Buffer.isBuffer(content)) {
      return new Uint8Array(content);
    }
    return new Uint8Array(content);
  }

  private computeChecksum(payload: Uint8Array): string {
    return createHash('sha256').update(payload).digest('hex');
  }

  private extractTicket(response: IngestionResponse): UploadTicketPayload {
    const upload = (response as Record<string, unknown>)?.upload as Record<string, unknown> | undefined;
    if (!upload) {
      throw new Error('beginAssetIngestion response missing upload ticket');
    }
    const uploadUrl = upload.upload_url;
    const uploadToken = upload.upload_token;
    if (typeof uploadUrl !== 'string' || typeof uploadToken !== 'string') {
      throw new Error('upload ticket is missing required fields');
    }
    return { upload_url: uploadUrl, upload_token: uploadToken };
  }

  private async putObject(ticket: UploadTicketPayload, payload: Uint8Array, mediaType: string): Promise<void> {
    if (typeof fetch !== 'function') {
      throw new Error('global fetch API is not available');
    }
    const body: BodyInit = new Uint8Array(payload).buffer;
    const response = await fetch(ticket.upload_url, {
      method: 'PUT',
      headers: {
        'x-nimbus-upload-token': ticket.upload_token,
        'content-type': mediaType
      },
      body
    });

    if (!response.ok) {
      throw new Error(`upload request failed with status ${response.status}`);
    }
  }

}
