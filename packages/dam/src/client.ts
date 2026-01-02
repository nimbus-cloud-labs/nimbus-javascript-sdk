// Generated client – do not edit.
import { NimbusClient, OperationSpec, SdkConfig, SdkHttpMethod } from '@nimbus-cloud/sdk-core';
import type { AssetSearchRequest, AssetSearchResponse, CollectionListResponse, CollectionMembershipChangeRequest, CollectionMembershipListResponse, CollectionResponse, CompleteIngestionRequest, CreateCollectionRequest, CreatePipelineRequest, CreateSmartAlbumRequest, IndexSnapshotRequest, IndexSnapshotResponse, IngestionRequest, IngestionResponse, JsonValue, LifecycleRequest, LifecycleResponse, OperationResponse, PipelineListResponse, PipelineRecordResponse, ProcessorCallbackPayload, SmartAlbumListResponse, SmartAlbumResponse, UpdateCollectionRequest, UpdatePipelineRequest, UpdateSmartAlbumRequest } from './types';

export class DamManagementServiceClient {
  constructor(private readonly inner: NimbusClient) {}

  static fromConfig(config: SdkConfig): DamManagementServiceClient {
    return new DamManagementServiceClient(new NimbusClient(config));
  }

  innerClient(): NimbusClient {
    return this.inner;
  }

  async archiveAsset(params: ArchiveAssetPathParams, body: LifecycleRequest): Promise<LifecycleResponse> {
    const pathParams: Array<[string, string]> = [
      ['asset_id', String(params.asset_id)]
    ];
    const result = await this.inner.invoke<LifecycleResponse>(ARCHIVE_ASSET_SPEC, pathParams, body);
    return result.body;
  }

  async beginAssetIngestion(body: IngestionRequest): Promise<IngestionResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<IngestionResponse>(BEGIN_ASSET_INGESTION_SPEC, pathParams, body);
    return result.body;
  }

  async completeAssetIngestion(body: CompleteIngestionRequest): Promise<OperationResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<OperationResponse>(COMPLETE_ASSET_INGESTION_SPEC, pathParams, body);
    return result.body;
  }

  async createCollection(body: CreateCollectionRequest): Promise<CollectionResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<CollectionResponse>(CREATE_COLLECTION_SPEC, pathParams, body);
    return result.body;
  }

  async createPipeline(body: CreatePipelineRequest): Promise<PipelineRecordResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<PipelineRecordResponse>(CREATE_PIPELINE_SPEC, pathParams, body);
    return result.body;
  }

  async createSmartAlbum(body: CreateSmartAlbumRequest): Promise<SmartAlbumResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<SmartAlbumResponse>(CREATE_SMART_ALBUM_SPEC, pathParams, body);
    return result.body;
  }

  async deleteCollection(params: DeleteCollectionPathParams): Promise<JsonValue> {
    const pathParams: Array<[string, string]> = [
      ['collection_id', String(params.collection_id)]
    ];
    const result = await this.inner.invoke<JsonValue>(DELETE_COLLECTION_SPEC, pathParams, undefined);
    return result.body;
  }

  async deletePipeline(params: DeletePipelinePathParams): Promise<JsonValue> {
    const pathParams: Array<[string, string]> = [
      ['pipeline_id', String(params.pipeline_id)]
    ];
    const result = await this.inner.invoke<JsonValue>(DELETE_PIPELINE_SPEC, pathParams, undefined);
    return result.body;
  }

  async deleteSmartAlbum(params: DeleteSmartAlbumPathParams): Promise<JsonValue> {
    const pathParams: Array<[string, string]> = [
      ['album_id', String(params.album_id)]
    ];
    const result = await this.inner.invoke<JsonValue>(DELETE_SMART_ALBUM_SPEC, pathParams, undefined);
    return result.body;
  }

  async getOperation(params: GetOperationPathParams): Promise<OperationResponse> {
    const pathParams: Array<[string, string]> = [
      ['operation_id', String(params.operation_id)]
    ];
    const result = await this.inner.invoke<OperationResponse>(GET_OPERATION_SPEC, pathParams, undefined);
    return result.body;
  }

  async listCollectionMemberships(params: ListCollectionMembershipsPathParams): Promise<CollectionMembershipListResponse> {
    const pathParams: Array<[string, string]> = [
      ['collection_id', String(params.collection_id)]
    ];
    const result = await this.inner.invoke<CollectionMembershipListResponse>(LIST_COLLECTION_MEMBERSHIPS_SPEC, pathParams, undefined);
    return result.body;
  }

  async listCollections(): Promise<CollectionListResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<CollectionListResponse>(LIST_COLLECTIONS_SPEC, pathParams, undefined);
    return result.body;
  }

  async listPipelines(): Promise<PipelineListResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<PipelineListResponse>(LIST_PIPELINES_SPEC, pathParams, undefined);
    return result.body;
  }

  async listSmartAlbums(): Promise<SmartAlbumListResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<SmartAlbumListResponse>(LIST_SMART_ALBUMS_SPEC, pathParams, undefined);
    return result.body;
  }

  async operationCallback(params: OperationCallbackPathParams, body: ProcessorCallbackPayload): Promise<JsonValue> {
    const pathParams: Array<[string, string]> = [
      ['token', String(params.token)]
    ];
    const result = await this.inner.invoke<JsonValue>(OPERATION_CALLBACK_SPEC, pathParams, body);
    return result.body;
  }

  async publishAsset(params: PublishAssetPathParams, body: LifecycleRequest): Promise<LifecycleResponse> {
    const pathParams: Array<[string, string]> = [
      ['asset_id', String(params.asset_id)]
    ];
    const result = await this.inner.invoke<LifecycleResponse>(PUBLISH_ASSET_SPEC, pathParams, body);
    return result.body;
  }

  async putCollectionMemberships(params: PutCollectionMembershipsPathParams, body: CollectionMembershipChangeRequest): Promise<CollectionMembershipListResponse> {
    const pathParams: Array<[string, string]> = [
      ['collection_id', String(params.collection_id)]
    ];
    const result = await this.inner.invoke<CollectionMembershipListResponse>(PUT_COLLECTION_MEMBERSHIPS_SPEC, pathParams, body);
    return result.body;
  }

  async recordIndexSnapshot(body: IndexSnapshotRequest): Promise<IndexSnapshotResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<IndexSnapshotResponse>(RECORD_INDEX_SNAPSHOT_SPEC, pathParams, body);
    return result.body;
  }

  async removeCollectionMembership(params: RemoveCollectionMembershipPathParams): Promise<JsonValue> {
    const pathParams: Array<[string, string]> = [
      ['collection_id', String(params.collection_id)],
      ['asset_id', String(params.asset_id)]
    ];
    const result = await this.inner.invoke<JsonValue>(REMOVE_COLLECTION_MEMBERSHIP_SPEC, pathParams, undefined);
    return result.body;
  }

  async restoreAsset(params: RestoreAssetPathParams, body: LifecycleRequest): Promise<LifecycleResponse> {
    const pathParams: Array<[string, string]> = [
      ['asset_id', String(params.asset_id)]
    ];
    const result = await this.inner.invoke<LifecycleResponse>(RESTORE_ASSET_SPEC, pathParams, body);
    return result.body;
  }

  async searchAssets(body: AssetSearchRequest): Promise<AssetSearchResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<AssetSearchResponse>(SEARCH_ASSETS_SPEC, pathParams, body);
    return result.body;
  }

  async searchAssetsWithBody(body: AssetSearchRequest): Promise<AssetSearchResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<AssetSearchResponse>(SEARCH_ASSETS_WITH_BODY_SPEC, pathParams, body);
    return result.body;
  }

  async updateCollection(params: UpdateCollectionPathParams, body: UpdateCollectionRequest): Promise<CollectionResponse> {
    const pathParams: Array<[string, string]> = [
      ['collection_id', String(params.collection_id)]
    ];
    const result = await this.inner.invoke<CollectionResponse>(UPDATE_COLLECTION_SPEC, pathParams, body);
    return result.body;
  }

  async updatePipeline(params: UpdatePipelinePathParams, body: UpdatePipelineRequest): Promise<PipelineRecordResponse> {
    const pathParams: Array<[string, string]> = [
      ['pipeline_id', String(params.pipeline_id)]
    ];
    const result = await this.inner.invoke<PipelineRecordResponse>(UPDATE_PIPELINE_SPEC, pathParams, body);
    return result.body;
  }

  async updateSmartAlbum(params: UpdateSmartAlbumPathParams, body: UpdateSmartAlbumRequest): Promise<SmartAlbumResponse> {
    const pathParams: Array<[string, string]> = [
      ['album_id', String(params.album_id)]
    ];
    const result = await this.inner.invoke<SmartAlbumResponse>(UPDATE_SMART_ALBUM_SPEC, pathParams, body);
    return result.body;
  }

}

export interface ArchiveAssetPathParams {
  asset_id: string;
}

export interface DeleteCollectionPathParams {
  collection_id: string;
}

export interface DeletePipelinePathParams {
  pipeline_id: string;
}

export interface DeleteSmartAlbumPathParams {
  album_id: string;
}

export interface GetOperationPathParams {
  operation_id: string;
}

export interface ListCollectionMembershipsPathParams {
  collection_id: string;
}

export interface OperationCallbackPathParams {
  token: string;
}

export interface PublishAssetPathParams {
  asset_id: string;
}

export interface PutCollectionMembershipsPathParams {
  collection_id: string;
}

export interface RemoveCollectionMembershipPathParams {
  collection_id: string;
  asset_id: string;
}

export interface RestoreAssetPathParams {
  asset_id: string;
}

export interface UpdateCollectionPathParams {
  collection_id: string;
}

export interface UpdatePipelinePathParams {
  pipeline_id: string;
}

export interface UpdateSmartAlbumPathParams {
  album_id: string;
}

const ARCHIVE_ASSET_SPEC: OperationSpec = {
  name: 'ArchiveAsset',
  method: SdkHttpMethod.Post,
  uri: '/assets/{asset_id}/archive',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const BEGIN_ASSET_INGESTION_SPEC: OperationSpec = {
  name: 'BeginAssetIngestion',
  method: SdkHttpMethod.Post,
  uri: '/assets/ingest',
  successCode: 202,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const COMPLETE_ASSET_INGESTION_SPEC: OperationSpec = {
  name: 'CompleteAssetIngestion',
  method: SdkHttpMethod.Post,
  uri: '/assets/ingest/complete',
  successCode: 202,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const CREATE_COLLECTION_SPEC: OperationSpec = {
  name: 'CreateCollection',
  method: SdkHttpMethod.Post,
  uri: '/collections',
  successCode: 201,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const CREATE_PIPELINE_SPEC: OperationSpec = {
  name: 'CreatePipeline',
  method: SdkHttpMethod.Post,
  uri: '/pipelines',
  successCode: 201,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const CREATE_SMART_ALBUM_SPEC: OperationSpec = {
  name: 'CreateSmartAlbum',
  method: SdkHttpMethod.Post,
  uri: '/albums',
  successCode: 201,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const DELETE_COLLECTION_SPEC: OperationSpec = {
  name: 'DeleteCollection',
  method: SdkHttpMethod.Delete,
  uri: '/collections/{collection_id}',
  successCode: 204,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const DELETE_PIPELINE_SPEC: OperationSpec = {
  name: 'DeletePipeline',
  method: SdkHttpMethod.Delete,
  uri: '/pipelines/{pipeline_id}',
  successCode: 204,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const DELETE_SMART_ALBUM_SPEC: OperationSpec = {
  name: 'DeleteSmartAlbum',
  method: SdkHttpMethod.Delete,
  uri: '/albums/{album_id}',
  successCode: 204,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const GET_OPERATION_SPEC: OperationSpec = {
  name: 'GetOperation',
  method: SdkHttpMethod.Get,
  uri: '/operations/{operation_id}',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const LIST_COLLECTION_MEMBERSHIPS_SPEC: OperationSpec = {
  name: 'ListCollectionMemberships',
  method: SdkHttpMethod.Get,
  uri: '/collections/{collection_id}/memberships',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const LIST_COLLECTIONS_SPEC: OperationSpec = {
  name: 'ListCollections',
  method: SdkHttpMethod.Get,
  uri: '/collections',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const LIST_PIPELINES_SPEC: OperationSpec = {
  name: 'ListPipelines',
  method: SdkHttpMethod.Get,
  uri: '/pipelines',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const LIST_SMART_ALBUMS_SPEC: OperationSpec = {
  name: 'ListSmartAlbums',
  method: SdkHttpMethod.Get,
  uri: '/albums',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const OPERATION_CALLBACK_SPEC: OperationSpec = {
  name: 'OperationCallback',
  method: SdkHttpMethod.Post,
  uri: '/operations/callbacks/{token}',
  successCode: 204,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const PUBLISH_ASSET_SPEC: OperationSpec = {
  name: 'PublishAsset',
  method: SdkHttpMethod.Post,
  uri: '/assets/{asset_id}/publish',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const PUT_COLLECTION_MEMBERSHIPS_SPEC: OperationSpec = {
  name: 'PutCollectionMemberships',
  method: SdkHttpMethod.Post,
  uri: '/collections/{collection_id}/memberships',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const RECORD_INDEX_SNAPSHOT_SPEC: OperationSpec = {
  name: 'RecordIndexSnapshot',
  method: SdkHttpMethod.Post,
  uri: '/index/snapshots',
  successCode: 201,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const REMOVE_COLLECTION_MEMBERSHIP_SPEC: OperationSpec = {
  name: 'RemoveCollectionMembership',
  method: SdkHttpMethod.Delete,
  uri: '/collections/{collection_id}/memberships/{asset_id}',
  successCode: 204,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const RESTORE_ASSET_SPEC: OperationSpec = {
  name: 'RestoreAsset',
  method: SdkHttpMethod.Post,
  uri: '/assets/{asset_id}/restore',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const SEARCH_ASSETS_SPEC: OperationSpec = {
  name: 'SearchAssets',
  method: SdkHttpMethod.Get,
  uri: '/assets/search',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const SEARCH_ASSETS_WITH_BODY_SPEC: OperationSpec = {
  name: 'SearchAssetsWithBody',
  method: SdkHttpMethod.Post,
  uri: '/assets/search',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const UPDATE_COLLECTION_SPEC: OperationSpec = {
  name: 'UpdateCollection',
  method: SdkHttpMethod.Post,
  uri: '/collections/{collection_id}',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const UPDATE_PIPELINE_SPEC: OperationSpec = {
  name: 'UpdatePipeline',
  method: SdkHttpMethod.Post,
  uri: '/pipelines/{pipeline_id}',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const UPDATE_SMART_ALBUM_SPEC: OperationSpec = {
  name: 'UpdateSmartAlbum',
  method: SdkHttpMethod.Post,
  uri: '/albums/{album_id}',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};
