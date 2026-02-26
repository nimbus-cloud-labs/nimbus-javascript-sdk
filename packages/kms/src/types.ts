// Generated types – do not edit.
export type JsonPrimitive = string | number | boolean | null;
export interface JsonObject { [key: string]: JsonValue; }
export type JsonValue = JsonPrimitive | JsonObject | JsonValue[];
export interface CancelKeyDeletionRequest {
  requestId: JsonValue;
  idempotencyKey: JsonValue;
  tenantId: JsonValue;
  principalId: JsonValue;
}
export interface CreateKeyRequest {
  requestId: JsonValue;
  idempotencyKey: JsonValue;
  tenantId: JsonValue;
  principalId: JsonValue;
  region: JsonValue;
  keySpec: KeySpec;
  keyUsage: KeyUsage;
  algorithm: EncryptionAlgorithm;
  alias?: JsonValue;
  tags?: KeyTagsMap;
}
export interface DecryptDataKeyRequest {
  requestId: JsonValue;
  idempotencyKey: JsonValue;
  tenantId: JsonValue;
  principalId: JsonValue;
  keyId: JsonValue;
  ciphertextFormat: JsonValue;
  encryptedDataKey: string;
  encryptionContext?: EncryptionContextMap;
}
export interface DecryptDataKeyResponse {
  requestId: JsonValue;
  keyId: JsonValue;
  plaintextDataKey: string;
}
export interface DecryptRequest {
  requestId: JsonValue;
  idempotencyKey: JsonValue;
  tenantId: JsonValue;
  principalId: JsonValue;
  keyId: JsonValue;
  algorithm: EncryptionAlgorithm;
  ciphertextFormat: JsonValue;
  ciphertext: string;
  nonce: string;
  encryptionContext?: EncryptionContextMap;
}
export interface DecryptResponse {
  requestId: JsonValue;
  keyId: JsonValue;
  plaintext: string;
}
export interface DisableKeyRequest {
  requestId: JsonValue;
  idempotencyKey: JsonValue;
  tenantId: JsonValue;
  principalId: JsonValue;
}
export interface EnableKeyRequest {
  requestId: JsonValue;
  idempotencyKey: JsonValue;
  tenantId: JsonValue;
  principalId: JsonValue;
}
export type EncryptionAlgorithm = 'AES_128_GCM' | 'AES_256_GCM' | 'CHACHA20_POLY1305';
export type EncryptionContextMap = Record<string, JsonValue>;
export interface EncryptRequest {
  requestId: JsonValue;
  idempotencyKey: JsonValue;
  tenantId: JsonValue;
  principalId: JsonValue;
  keyId: JsonValue;
  algorithm: EncryptionAlgorithm;
  plaintext: string;
  encryptionContext?: EncryptionContextMap;
}
export interface EncryptResponse {
  requestId: JsonValue;
  keyId: JsonValue;
  algorithm: EncryptionAlgorithm;
  ciphertextFormat: JsonValue;
  ciphertext: string;
  nonce: string;
  encryptionContextHash?: string;
}
export interface GenerateDataKeyRequest {
  requestId: JsonValue;
  idempotencyKey: JsonValue;
  tenantId: JsonValue;
  principalId: JsonValue;
  keyId: JsonValue;
  algorithm: EncryptionAlgorithm;
  keyBytes: number;
  encryptionContext?: EncryptionContextMap;
}
export interface GenerateDataKeyResponse {
  requestId: JsonValue;
  keyId: JsonValue;
  ciphertextFormat: JsonValue;
  plaintextDataKey: string;
  encryptedDataKey: string;
  encryptionContextHash?: string;
}
export interface KeyMetadataResponse {
  requestId: JsonValue;
  keyId: JsonValue;
  alias?: JsonValue;
  tenantId: JsonValue;
  region: JsonValue;
  state: KeyState;
  keySpec: KeySpec;
  keyUsage: KeyUsage;
  algorithm: EncryptionAlgorithm;
  pendingDeletionAt?: string;
  createdAt: string;
  updatedAt: string;
  tags?: KeyTagsMap;
}
export type KeySpec = 'SymmetricDefault';
export type KeyState = 'Pending' | 'Active' | 'Disabled' | 'ScheduledDeletion' | 'Deleted';
export type KeyTagsMap = Record<string, string>;
export type KeyUsage = 'EncryptDecrypt' | 'DataKeyWrapping' | 'SignVerify';
export interface PurgeKeyRequest {
  requestId: JsonValue;
  idempotencyKey: JsonValue;
  tenantId: JsonValue;
  principalId: JsonValue;
}
export interface RotateKeyRequest {
  requestId: JsonValue;
  idempotencyKey: JsonValue;
  tenantId: JsonValue;
  principalId: JsonValue;
}
export interface ScheduleKeyDeletionRequest {
  requestId: JsonValue;
  idempotencyKey: JsonValue;
  tenantId: JsonValue;
  principalId: JsonValue;
  pendingWindowDays: number;
}
export type SigningAlgorithm = 'HMAC_SHA256';
export interface SignRequest {
  requestId: JsonValue;
  idempotencyKey: JsonValue;
  tenantId: JsonValue;
  principalId: JsonValue;
  keyId: JsonValue;
  signingAlgorithm: SigningAlgorithm;
  message: string;
  signingContext?: EncryptionContextMap;
}
export interface SignResponse {
  requestId: JsonValue;
  keyId: JsonValue;
  signingAlgorithm: SigningAlgorithm;
  signatureFormat: string;
  signature: string;
  signingContextHash?: string;
}
export interface VerifyRequest {
  requestId: JsonValue;
  idempotencyKey: JsonValue;
  tenantId: JsonValue;
  principalId: JsonValue;
  keyId: JsonValue;
  signingAlgorithm: SigningAlgorithm;
  message: string;
  signature: string;
  signingContext?: EncryptionContextMap;
}
export interface VerifyResponse {
  requestId: JsonValue;
  keyId: JsonValue;
  signingAlgorithm: SigningAlgorithm;
  valid: boolean;
}
