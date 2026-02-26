// Generated client – do not edit.
import { NimbusClient, OperationSpec, SdkConfig, SdkHttpMethod } from '@nimbus-cloud/sdk-core';
import type { CancelKeyDeletionRequest, CreateKeyRequest, DecryptDataKeyRequest, DecryptDataKeyResponse, DecryptRequest, DecryptResponse, DisableKeyRequest, EnableKeyRequest, EncryptRequest, EncryptResponse, GenerateDataKeyRequest, GenerateDataKeyResponse, KeyMetadataResponse, PurgeKeyRequest, RotateKeyRequest, ScheduleKeyDeletionRequest, SignRequest, SignResponse, VerifyRequest, VerifyResponse } from './types';

export class KmsServiceClient {
  constructor(private readonly inner: NimbusClient) {}

  static fromConfig(config: SdkConfig): KmsServiceClient {
    return new KmsServiceClient(new NimbusClient(config));
  }

  innerClient(): NimbusClient {
    return this.inner;
  }

  async cancelKeyDeletion(params: CancelKeyDeletionPathParams, body: CancelKeyDeletionRequest): Promise<KeyMetadataResponse> {
    const pathParams: Array<[string, string]> = [
      ['key_id', String(params.key_id)]
    ];
    const result = await this.inner.invoke<KeyMetadataResponse>(CANCEL_KEY_DELETION_SPEC, pathParams, body);
    return result.body;
  }

  async createKey(body: CreateKeyRequest): Promise<KeyMetadataResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<KeyMetadataResponse>(CREATE_KEY_SPEC, pathParams, body);
    return result.body;
  }

  async decrypt(body: DecryptRequest): Promise<DecryptResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<DecryptResponse>(DECRYPT_SPEC, pathParams, body);
    return result.body;
  }

  async decryptDataKey(body: DecryptDataKeyRequest): Promise<DecryptDataKeyResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<DecryptDataKeyResponse>(DECRYPT_DATA_KEY_SPEC, pathParams, body);
    return result.body;
  }

  async disableKey(params: DisableKeyPathParams, body: DisableKeyRequest): Promise<KeyMetadataResponse> {
    const pathParams: Array<[string, string]> = [
      ['key_id', String(params.key_id)]
    ];
    const result = await this.inner.invoke<KeyMetadataResponse>(DISABLE_KEY_SPEC, pathParams, body);
    return result.body;
  }

  async enableKey(params: EnableKeyPathParams, body: EnableKeyRequest): Promise<KeyMetadataResponse> {
    const pathParams: Array<[string, string]> = [
      ['key_id', String(params.key_id)]
    ];
    const result = await this.inner.invoke<KeyMetadataResponse>(ENABLE_KEY_SPEC, pathParams, body);
    return result.body;
  }

  async encrypt(body: EncryptRequest): Promise<EncryptResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<EncryptResponse>(ENCRYPT_SPEC, pathParams, body);
    return result.body;
  }

  async generateDataKey(body: GenerateDataKeyRequest): Promise<GenerateDataKeyResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<GenerateDataKeyResponse>(GENERATE_DATA_KEY_SPEC, pathParams, body);
    return result.body;
  }

  async purgeKey(params: PurgeKeyPathParams, body: PurgeKeyRequest): Promise<KeyMetadataResponse> {
    const pathParams: Array<[string, string]> = [
      ['key_id', String(params.key_id)]
    ];
    const result = await this.inner.invoke<KeyMetadataResponse>(PURGE_KEY_SPEC, pathParams, body);
    return result.body;
  }

  async rotateKey(params: RotateKeyPathParams, body: RotateKeyRequest): Promise<KeyMetadataResponse> {
    const pathParams: Array<[string, string]> = [
      ['key_id', String(params.key_id)]
    ];
    const result = await this.inner.invoke<KeyMetadataResponse>(ROTATE_KEY_SPEC, pathParams, body);
    return result.body;
  }

  async scheduleKeyDeletion(params: ScheduleKeyDeletionPathParams, body: ScheduleKeyDeletionRequest): Promise<KeyMetadataResponse> {
    const pathParams: Array<[string, string]> = [
      ['key_id', String(params.key_id)]
    ];
    const result = await this.inner.invoke<KeyMetadataResponse>(SCHEDULE_KEY_DELETION_SPEC, pathParams, body);
    return result.body;
  }

  async sign(body: SignRequest): Promise<SignResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<SignResponse>(SIGN_SPEC, pathParams, body);
    return result.body;
  }

  async verify(body: VerifyRequest): Promise<VerifyResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<VerifyResponse>(VERIFY_SPEC, pathParams, body);
    return result.body;
  }

}

export interface CancelKeyDeletionPathParams {
  key_id: string;
}

export interface DisableKeyPathParams {
  key_id: string;
}

export interface EnableKeyPathParams {
  key_id: string;
}

export interface PurgeKeyPathParams {
  key_id: string;
}

export interface RotateKeyPathParams {
  key_id: string;
}

export interface ScheduleKeyDeletionPathParams {
  key_id: string;
}

const CANCEL_KEY_DELETION_SPEC: OperationSpec = {
  name: 'CancelKeyDeletion',
  method: SdkHttpMethod.Post,
  uri: '/keys/{key_id}/cancel-deletion',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: true,
  pagination: undefined,
  lro: false
};

const CREATE_KEY_SPEC: OperationSpec = {
  name: 'CreateKey',
  method: SdkHttpMethod.Post,
  uri: '/keys',
  successCode: 201,
  additionalSuccessResponses: [],
  idempotent: true,
  pagination: undefined,
  lro: false
};

const DECRYPT_SPEC: OperationSpec = {
  name: 'Decrypt',
  method: SdkHttpMethod.Post,
  uri: '/crypto/decrypt',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: true,
  pagination: undefined,
  lro: false
};

const DECRYPT_DATA_KEY_SPEC: OperationSpec = {
  name: 'DecryptDataKey',
  method: SdkHttpMethod.Post,
  uri: '/crypto/decrypt-data-key',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: true,
  pagination: undefined,
  lro: false
};

const DISABLE_KEY_SPEC: OperationSpec = {
  name: 'DisableKey',
  method: SdkHttpMethod.Post,
  uri: '/keys/{key_id}/disable',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: true,
  pagination: undefined,
  lro: false
};

const ENABLE_KEY_SPEC: OperationSpec = {
  name: 'EnableKey',
  method: SdkHttpMethod.Post,
  uri: '/keys/{key_id}/enable',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: true,
  pagination: undefined,
  lro: false
};

const ENCRYPT_SPEC: OperationSpec = {
  name: 'Encrypt',
  method: SdkHttpMethod.Post,
  uri: '/crypto/encrypt',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: true,
  pagination: undefined,
  lro: false
};

const GENERATE_DATA_KEY_SPEC: OperationSpec = {
  name: 'GenerateDataKey',
  method: SdkHttpMethod.Post,
  uri: '/crypto/generate-data-key',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: true,
  pagination: undefined,
  lro: false
};

const PURGE_KEY_SPEC: OperationSpec = {
  name: 'PurgeKey',
  method: SdkHttpMethod.Post,
  uri: '/keys/{key_id}/purge',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: true,
  pagination: undefined,
  lro: false
};

const ROTATE_KEY_SPEC: OperationSpec = {
  name: 'RotateKey',
  method: SdkHttpMethod.Post,
  uri: '/keys/{key_id}/rotate',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: true,
  pagination: undefined,
  lro: false
};

const SCHEDULE_KEY_DELETION_SPEC: OperationSpec = {
  name: 'ScheduleKeyDeletion',
  method: SdkHttpMethod.Post,
  uri: '/keys/{key_id}/schedule-deletion',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: true,
  pagination: undefined,
  lro: false
};

const SIGN_SPEC: OperationSpec = {
  name: 'Sign',
  method: SdkHttpMethod.Post,
  uri: '/crypto/sign',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: true,
  pagination: undefined,
  lro: false
};

const VERIFY_SPEC: OperationSpec = {
  name: 'Verify',
  method: SdkHttpMethod.Post,
  uri: '/crypto/verify',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: true,
  pagination: undefined,
  lro: false
};
