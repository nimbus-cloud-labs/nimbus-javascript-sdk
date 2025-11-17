import { sha256Hex } from '@nimbus-cloud/sdk-core';

import { DamManagementServiceClient } from './client';
import type { IngestionResponse, JsonValue, OperationResponse } from './types';

/**
 * Canonical parameters required to begin an ingestion session.
 */
export interface IngestionParams {
  displayName: string;
  mediaType: string;
  metadata?: JsonValue;
  content: ArrayBuffer | ArrayBufferView | Blob;
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
    const payload = await this.normalizeContent(params.content);
    const checksum = await this.computeChecksum(payload);
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

  private async normalizeContent(content: ArrayBuffer | ArrayBufferView | Blob): Promise<Uint8Array> {
    if (content instanceof Uint8Array) {
      return content;
    }
    if (content instanceof ArrayBuffer) {
      return new Uint8Array(content);
    }
    if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView(content)) {
      return new Uint8Array(content.buffer, content.byteOffset, content.byteLength);
    }
    if (typeof Blob !== 'undefined' && content instanceof Blob) {
      const buffer = await content.arrayBuffer();
      return new Uint8Array(buffer);
    }
    throw new TypeError('Unsupported ingestion content type.');
  }

  private computeChecksum(payload: Uint8Array): Promise<string> {
    return sha256Hex(payload);
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
    const body: BodyInit = this.toBodyBuffer(payload);
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

  private toBodyBuffer(payload: Uint8Array): ArrayBuffer {
    const buffer = payload.buffer;
    if (buffer instanceof ArrayBuffer) {
      if (payload.byteOffset === 0 && payload.byteLength === buffer.byteLength) {
        return buffer;
      }
      return buffer.slice(payload.byteOffset, payload.byteOffset + payload.byteLength);
    }
    const copy = new Uint8Array(payload.byteLength);
    copy.set(payload);
    return copy.buffer;
  }

}
