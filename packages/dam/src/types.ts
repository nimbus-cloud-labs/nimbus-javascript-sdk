// Generated types – do not edit.
export type JsonPrimitive = string | number | boolean | null;
export interface JsonObject { [key: string]: JsonValue; }
export type JsonValue = JsonPrimitive | JsonObject | JsonValue[];
export interface AssetDetailResponse {
  asset: AssetRecord;
  latestVersion?: UploadedAssetVersion;
}
export interface AssetDownloadResponse {
  downloadUrl: string;
  expiresAt: string;
}
export interface AssetFilterPayload {
  kind: string;
  value?: string;
  collectionId?: string;
  albumId?: string;
  path: AssetFilterPayloadPathList;
}
export type AssetFilterPayloadPathList = string[];
export interface AssetPrefixListResponse {
  items: AssetPrefixListResponseItemsList;
}
export type AssetPrefixListResponseItemsList = AssetPrefixRecord[];
export interface AssetPrefixRecord {
  tenantId: string;
  prefixId: string;
  prefix: string;
  createdAt: string;
  updatedAt: string;
}
export interface AssetPrefixResponse {
  prefix: AssetPrefixRecord;
}
export interface AssetRecord {
  assetId: string;
  displayName: string;
  description?: string;
  mediaType: string;
  lifecycleState: string;
  metadata: AssetRecordMetadataList;
  path?: string;
  createdAt: string;
  updatedAt: string;
}
export type AssetRecordMetadataList = MetadataEntry[];
export interface AssetRenditionListResponse {
  items: AssetRenditionListResponseItemsList;
}
export type AssetRenditionListResponseItemsList = AssetRenditionRecord[];
export interface AssetRenditionRecord {
  tenantId: string;
  assetId: string;
  renditionId: string;
  versionId: string;
  profile: string;
  pipelineRef: string;
  pipelineRevision?: string;
  storageKey: string;
  status: string;
  metadata: JsonValue;
  contentType?: string;
  createdAt: string;
  completedAt?: string;
}
export interface AssetSearchItem {
  assetId: string;
  displayName: string;
  description?: string;
  mediaType: string;
  lifecycleState: string;
  bucketName: string;
  path?: string;
  createdAt: string;
  updatedAt: string;
  score: number;
}
export interface AssetSearchRequest {
  term?: string;
  filters: AssetSearchRequestFiltersList;
  sorts: AssetSearchRequestSortsList;
  limit?: number;
  offset?: number;
}
export type AssetSearchRequestFiltersList = AssetFilterPayload[];
export type AssetSearchRequestSortsList = AssetSortPayload[];
export interface AssetSearchResponse {
  total: number;
  items: AssetSearchResponseItemsList;
}
export type AssetSearchResponseItemsList = AssetSearchItem[];
export interface AssetSortPayload {
  field: string;
  direction?: string;
}
export interface AssetVersionMetadataResponse {
  metadata: AssetVersionMetadataResponseMetadataList;
}
export type AssetVersionMetadataResponseMetadataList = MetadataEntry[];
export interface BucketListResponse {
  items: BucketListResponseItemsList;
}
export type BucketListResponseItemsList = BucketRecord[];
export interface BucketRecord {
  tenantId: string;
  bucketName: string;
  createdAt: string;
  updatedAt: string;
}
export interface CollectionListResponse {
  items: CollectionListResponseItemsList;
}
export type CollectionListResponseItemsList = CollectionResponse[];
export interface CollectionMembershipChangeRequest {
  members: CollectionMembershipChangeRequestMembersList;
}
export type CollectionMembershipChangeRequestMembersList = CollectionMembershipRequest[];
export interface CollectionMembershipListResponse {
  items: CollectionMembershipListResponseItemsList;
}
export type CollectionMembershipListResponseItemsList = CollectionMembershipResponse[];
export interface CollectionMembershipRequest {
  membershipId?: string;
  assetId: string;
  renditionId?: string;
  addedBy?: string;
}
export interface CollectionMembershipResponse {
  membershipId: string;
  tenantId: string;
  collectionId: string;
  assetId: string;
  renditionId?: string;
  addedAt: string;
  addedBy?: string;
}
export interface CollectionResponse {
  tenantId: string;
  collectionId: string;
  displayName: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  lockVersion: number;
}
export interface CompleteIngestionRequest {
  uploadToken: string;
  checksumAlgorithm: string;
  checksum: string;
  sizeBytes: number;
}
export interface CreateAssetPrefixRequest {
  prefix: string;
}
export interface CreateBucketRequest {
  bucketName: string;
}
export interface CreateCollectionRequest {
  collectionId: string;
  displayName: string;
  description?: string;
}
export interface CreatePipelineRequest {
  displayName: string;
  notes?: string;
  pipelinePrefix?: string;
  cdnHost?: string;
  enabled?: boolean;
  renditions: CreatePipelineRequestRenditionsList;
  rules: CreatePipelineRequestRulesList;
}
export type CreatePipelineRequestRenditionsList = PipelineRenditionRequest[];
export type CreatePipelineRequestRulesList = PipelineRuleRequest[];
export interface CreateSmartAlbumRequest {
  albumId: string;
  displayName: string;
  description?: string;
  definition: JsonValue;
  rules: CreateSmartAlbumRequestRulesList;
}
export type CreateSmartAlbumRequestRulesList = SmartAlbumRuleRequest[];
export interface CustomMetadataRequest {
  customMetadata: JsonValue;
}
export interface IndexSnapshotRequest {
  snapshotId: string;
  assetId: string;
  renditionId?: string;
  indexScope: string;
  document: string;
  metadata: JsonValue;
  materializedAt: string;
}
export interface IndexSnapshotResponse {
  snapshotId: string;
  tenantId: string;
  assetId: string;
  renditionId?: string;
  indexScope: string;
  document: string;
  metadata: JsonValue;
  materializedAt: string;
}
export interface IngestionRequest {
  displayName: string;
  mediaType: string;
  contentLength: number;
  checksumAlgorithm: string;
  checksum: string;
  metadata: JsonValue;
  pathPrefix?: string;
  bucketName?: string;
}
export interface IngestionResponse {
  asset: RegisteredAsset;
  version: PendingUploadVersion;
  upload: UploadTicket;
}
export interface LifecycleExposureRequest {
  pipelineRef: string;
  ruleSlug: string;
  path: string;
  contentType: string;
  storageKey?: string;
  cachePolicy?: string;
  schedule?: LifecycleExposureSchedule;
}
export interface LifecycleExposureSchedule {
  startsAt?: string;
  expiresAt?: string;
}
export interface LifecycleRequest {
  reason?: string;
  exposures?: LifecycleRequestExposuresList;
}
export type LifecycleRequestExposuresList = LifecycleExposureRequest[];
export interface LifecycleResponse {
  assetId: string;
  tenantId: string;
  previousState: string;
  state: string;
  lockVersion: number;
  updatedAt: string;
}
export interface MetadataEntry {
  key: string;
  kind: string;
  value: JsonValue;
}
export interface OperationContextPayload {
  initiator: string;
  action: string;
  resourceUrn: string;
}
export interface OperationResponse {
  operationId: string;
  status: JsonValue;
  createdAt: string;
  updatedAt: string;
  expiresAt?: string;
  context: OperationContextPayload;
  metadata?: JsonValue;
  result?: JsonValue;
  error?: JsonValue;
  progressStream?: string;
}
export interface PendingAssetVersion {
  tenantId: string;
  assetId: string;
  versionId: string;
  ordinal: number;
  storageKey: string;
  checksumAlgorithm: string;
  declaredChecksum: string;
  contentLength: number;
  status: string;
  createdAt: string;
}
export interface PendingUploadVersion {
  versionId: string;
  storageKey: string;
  status: string;
  checksumAlgorithm: string;
  checksum: string;
  contentLength: number;
  createdAt: string;
}
export interface PipelineListResponse {
  items: PipelineListResponseItemsList;
}
export type PipelineListResponseItemsList = PipelineRecordResponse[];
export interface PipelineRecordResponse {
  tenantId: string;
  pipelineId: string;
  pipelineRef: string;
  displayName: string;
  notes?: string;
  pipelinePrefix?: string;
  cdnHost?: string;
  enabled: boolean;
  renditions: PipelineRecordResponseRenditionsList;
  rules: PipelineRecordResponseRulesList;
  createdAt: string;
  updatedAt: string;
  lockVersion: number;
}
export type PipelineRecordResponseRenditionsList = PipelineRenditionResponse[];
export type PipelineRecordResponseRulesList = PipelineRuleResponse[];
export interface PipelineRenditionRequest {
  name: string;
  pipeline: string;
  contentType: string;
}
export interface PipelineRenditionResponse {
  name: string;
  pipeline: string;
  contentType: string;
}
export interface PipelineRerunRequest {
  pipelineRef?: string;
  profile?: string;
}
export interface PipelineRerunResponse {
  operations: PipelineRerunResponseOperationsList;
  matchedAssets: number;
  queuedJobs: number;
  skippedAssets: number;
  failedAssets: number;
}
export type PipelineRerunResponseOperationsList = OperationResponse[];
export interface PipelineRuleRequest {
  field: string;
  operator: string;
  value: JsonValue;
}
export interface PipelineRuleResponse {
  field: string;
  operator: string;
  value: JsonValue;
}
export interface ProcessorCallbackPayload {
  status: string;
  jobId: string;
  tenantId: string;
  pipelineRef: string;
  profile?: string;
  storageKey?: string;
  checksumSha256?: string;
  sizeBytes?: number;
  contentType?: string;
  assetId?: string;
  versionId?: string;
  metadata?: JsonValue;
  diagnostics?: JsonValue;
  pipelineFingerprint?: string;
  cacheHints?: JsonValue;
  error?: string;
  computeMillis?: number;
}
export interface RegisteredAsset {
  tenantId: string;
  bucketName: string;
  assetId: string;
  createdAt: string;
  updatedAt: string;
  metadata: JsonValue;
}
export interface SmartAlbumListResponse {
  items: SmartAlbumListResponseItemsList;
}
export type SmartAlbumListResponseItemsList = SmartAlbumResponse[];
export interface SmartAlbumRecordResponse {
  tenantId: string;
  albumId: string;
  displayName: string;
  description?: string;
  definition: JsonValue;
  createdAt: string;
  updatedAt: string;
  lockVersion: number;
}
export interface SmartAlbumResponse {
  album: SmartAlbumRecordResponse;
  rules: SmartAlbumResponseRulesList;
}
export type SmartAlbumResponseRulesList = SmartAlbumRuleResponse[];
export interface SmartAlbumRuleRequest {
  ruleId?: string;
  field: string;
  operator: string;
  value: JsonValue;
}
export interface SmartAlbumRuleResponse {
  tenantId: string;
  albumId: string;
  ruleId: string;
  field: string;
  operator: string;
  value: JsonValue;
  createdAt: string;
}
export interface UpdateCollectionRequest {
  displayName?: string;
  description?: string;
  expectedLockVersion?: number;
}
export interface UpdatePipelineRequest {
  displayName?: string;
  notes?: string;
  pipelinePrefix?: string;
  cdnHost?: string;
  enabled?: boolean;
  renditions?: UpdatePipelineRequestRenditionsList;
  rules?: UpdatePipelineRequestRulesList;
  expectedLockVersion?: number;
}
export type UpdatePipelineRequestRenditionsList = PipelineRenditionRequest[];
export type UpdatePipelineRequestRulesList = PipelineRuleRequest[];
export interface UpdateSmartAlbumRequest {
  displayName?: string;
  description?: string;
  definition?: JsonValue;
  expectedLockVersion?: number;
  rules: UpdateSmartAlbumRequestRulesList;
}
export type UpdateSmartAlbumRequestRulesList = SmartAlbumRuleRequest[];
export interface UploadedAssetVersion {
  tenantId: string;
  assetId: string;
  versionId: string;
  ordinal: number;
  storageKey: string;
  checksumAlgorithm: string;
  checksum: string;
  sizeBytes: number;
  status: string;
  createdAt: string;
}
export interface UploadedVersionPayload {
  versionId: string;
  ordinal: number;
  storageKey: string;
  checksumAlgorithm: string;
  checksum: string;
  sizeBytes: number;
  status: string;
  createdAt: string;
}
export interface UploadTicket {
  uploadUrl: string;
  uploadToken: string;
  expiresAt: string;
}
