// Generated types – do not edit.
export type JsonPrimitive = string | number | boolean | null;
export interface JsonObject { [key: string]: JsonValue; }
export type JsonValue = JsonPrimitive | JsonObject | JsonValue[];
export type CancelKeyDeletionRequest = Record<string, never>;
export interface CreateKeyRequest {
  keySpec: string;
  keyUsage: string;
  algorithm: string;
  alias?: string;
  tags?: CreateKeyRequestTagsMap;
  trustPolicy?: JsonValue;
}
export type CreateKeyRequestTagsMap = Record<string, string>;
export interface DecryptDataKeyRequest {
  keyId: string;
  ciphertextFormat: string;
  encryptedDataKey: string;
  encryptionContext?: DecryptDataKeyRequestEncryptionContextMap;
}
export type DecryptDataKeyRequestEncryptionContextMap = Record<string, string>;
export interface DecryptDataKeyResponse {
  keyId: string;
  plaintextDataKey: string;
}
export interface DecryptRequest {
  keyId: string;
  algorithm: string;
  ciphertextFormat: string;
  ciphertext: string;
  nonce: string;
  encryptionContext?: DecryptRequestEncryptionContextMap;
}
export type DecryptRequestEncryptionContextMap = Record<string, string>;
export interface DecryptResponse {
  keyId: string;
  plaintext: string;
}
export type DisableKeyRequest = Record<string, never>;
export type EnableKeyRequest = Record<string, never>;
export interface EncryptRequest {
  keyId: string;
  algorithm: string;
  plaintext: string;
  encryptionContext?: EncryptRequestEncryptionContextMap;
}
export type EncryptRequestEncryptionContextMap = Record<string, string>;
export interface EncryptResponse {
  keyId: string;
  algorithm: string;
  ciphertextFormat: string;
  ciphertext: string;
  nonce: string;
  encryptionContextHash?: string;
}
export interface GenerateDataKeyRequest {
  keyId: string;
  algorithm: string;
  keyBytes: number;
  encryptionContext?: GenerateDataKeyRequestEncryptionContextMap;
}
export type GenerateDataKeyRequestEncryptionContextMap = Record<string, string>;
export interface GenerateDataKeyResponse {
  keyId: string;
  ciphertextFormat: string;
  plaintextDataKey: string;
  encryptedDataKey: string;
  encryptionContextHash?: string;
}
export interface KeyMetadataResponse {
  keyId: string;
  alias?: string;
  state: string;
  keySpec: string;
  keyUsage: string;
  algorithm: string;
  pendingDeletionAt?: string;
  createdAt: string;
  updatedAt: string;
  tags?: KeyMetadataResponseTagsMap;
  trustPolicy?: JsonValue;
}
export type KeyMetadataResponseTagsMap = Record<string, string>;
export type PurgeKeyRequest = Record<string, never>;
export interface PutTenantAlgorithmPolicyRequestPayload {
  allowedAlgorithms: PutTenantAlgorithmPolicyRequestPayloadAllowedAlgorithmsList;
  defaultAlgorithm: string;
}
export type PutTenantAlgorithmPolicyRequestPayloadAllowedAlgorithmsList = string[];
export interface PutTenantQuotaPolicyRequestPayload {
  requestsPerSecond: number;
}
export type RotateKeyRequest = Record<string, never>;
export interface ScheduleKeyDeletionRequest {
  pendingWindowDays: number;
}
export interface SignRequest {
  keyId: string;
  signingAlgorithm: string;
  message: string;
  signingContext?: SignRequestSigningContextMap;
}
export type SignRequestSigningContextMap = Record<string, string>;
export interface SignResponse {
  keyId: string;
  signingAlgorithm: string;
  signatureFormat: string;
  signature: string;
  signingContextHash?: string;
}
export interface VerifyRequest {
  keyId: string;
  signingAlgorithm: string;
  message: string;
  signature: string;
  signingContext?: VerifyRequestSigningContextMap;
}
export type VerifyRequestSigningContextMap = Record<string, string>;
export interface VerifyResponse {
  keyId: string;
  signingAlgorithm: string;
  valid: boolean;
}
