// Generated client – do not edit.
import { NimbusClient, OperationSpec, Paginator, SdkConfig, SdkHttpMethod } from '@nimbus-cloud/sdk-core';
import type { CommandResponse, CreateRecordRequest, CreateZoneRequest, DeleteRecordQuery, DeleteZoneQuery, JsonValue, ListRecordsResponse, ListZonesResponse, RecordResponse, UpdateRecordRequest, UpdateZoneRequest, ZoneResponse } from './types';

export class DnsServiceClient {
  constructor(private readonly inner: NimbusClient) {}

  static fromConfig(config: SdkConfig): DnsServiceClient {
    return new DnsServiceClient(new NimbusClient(config));
  }

  innerClient(): NimbusClient {
    return this.inner;
  }

  async createRecord(params: CreateRecordPathParams, body: CreateRecordRequest): Promise<RecordResponse> {
    const pathParams: Array<[string, string]> = [
      ['zone_id', String(params.zone_id)]
    ];
    const result = await this.inner.invoke<RecordResponse>(CREATE_RECORD_SPEC, pathParams, body);
    return result.body;
  }

  async createZone(body: CreateZoneRequest): Promise<ZoneResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<ZoneResponse>(CREATE_ZONE_SPEC, pathParams, body);
    return result.body;
  }

  async deleteRecord(params: DeleteRecordPathParams, body: DeleteRecordQuery): Promise<RecordResponse> {
    const pathParams: Array<[string, string]> = [
      ['record_id', String(params.record_id)]
    ];
    const result = await this.inner.invoke<RecordResponse>(DELETE_RECORD_SPEC, pathParams, body);
    return result.body;
  }

  async deleteZone(params: DeleteZonePathParams, body: DeleteZoneQuery): Promise<ZoneResponse> {
    const pathParams: Array<[string, string]> = [
      ['zone_id', String(params.zone_id)]
    ];
    const result = await this.inner.invoke<ZoneResponse>(DELETE_ZONE_SPEC, pathParams, body);
    return result.body;
  }

  async getHealth(): Promise<JsonValue> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<JsonValue>(GET_HEALTH_SPEC, pathParams, undefined);
    return result.body;
  }

  async getMetrics(): Promise<JsonValue> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<JsonValue>(GET_METRICS_SPEC, pathParams, undefined);
    return result.body;
  }

  async listRecords(): Promise<ListRecordsResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<ListRecordsResponse>(LIST_RECORDS_SPEC, pathParams, undefined);
    return result.body;
  }

  paginateListRecords(): Paginator<ListRecordsResponse> {
    const pathParams: Array<[string, string]> = [];
    return this.inner.paginator<ListRecordsResponse>(LIST_RECORDS_SPEC, pathParams);
  }

  async listZoneRecords(params: ListZoneRecordsPathParams): Promise<ListRecordsResponse> {
    const pathParams: Array<[string, string]> = [
      ['zone_id', String(params.zone_id)]
    ];
    const result = await this.inner.invoke<ListRecordsResponse>(LIST_ZONE_RECORDS_SPEC, pathParams, undefined);
    return result.body;
  }

  paginateListZoneRecords(params: ListZoneRecordsPathParams): Paginator<ListRecordsResponse> {
    const pathParams: Array<[string, string]> = [
      ['zone_id', String(params.zone_id)]
    ];
    return this.inner.paginator<ListRecordsResponse>(LIST_ZONE_RECORDS_SPEC, pathParams);
  }

  async listZones(): Promise<ListZonesResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<ListZonesResponse>(LIST_ZONES_SPEC, pathParams, undefined);
    return result.body;
  }

  paginateListZones(): Paginator<ListZonesResponse> {
    const pathParams: Array<[string, string]> = [];
    return this.inner.paginator<ListZonesResponse>(LIST_ZONES_SPEC, pathParams);
  }

  async reloadRuntime(): Promise<CommandResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<CommandResponse>(RELOAD_RUNTIME_SPEC, pathParams, undefined);
    return result.body;
  }

  async reloadZone(params: ReloadZonePathParams): Promise<CommandResponse> {
    const pathParams: Array<[string, string]> = [
      ['zone_id', String(params.zone_id)]
    ];
    const result = await this.inner.invoke<CommandResponse>(RELOAD_ZONE_SPEC, pathParams, undefined);
    return result.body;
  }

  async scheduleRuntimeSync(): Promise<CommandResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<CommandResponse>(SCHEDULE_RUNTIME_SYNC_SPEC, pathParams, undefined);
    return result.body;
  }

  async scheduleZoneSync(params: ScheduleZoneSyncPathParams): Promise<CommandResponse> {
    const pathParams: Array<[string, string]> = [
      ['zone_id', String(params.zone_id)]
    ];
    const result = await this.inner.invoke<CommandResponse>(SCHEDULE_ZONE_SYNC_SPEC, pathParams, undefined);
    return result.body;
  }

  async updateRecord(params: UpdateRecordPathParams, body: UpdateRecordRequest): Promise<RecordResponse> {
    const pathParams: Array<[string, string]> = [
      ['record_id', String(params.record_id)]
    ];
    const result = await this.inner.invoke<RecordResponse>(UPDATE_RECORD_SPEC, pathParams, body);
    return result.body;
  }

  async updateZone(params: UpdateZonePathParams, body: UpdateZoneRequest): Promise<ZoneResponse> {
    const pathParams: Array<[string, string]> = [
      ['zone_id', String(params.zone_id)]
    ];
    const result = await this.inner.invoke<ZoneResponse>(UPDATE_ZONE_SPEC, pathParams, body);
    return result.body;
  }

}

export interface CreateRecordPathParams {
  zone_id: string;
}

export interface DeleteRecordPathParams {
  record_id: string;
}

export interface DeleteZonePathParams {
  zone_id: string;
}

export interface ListZoneRecordsPathParams {
  zone_id: string;
}

export interface ReloadZonePathParams {
  zone_id: string;
}

export interface ScheduleZoneSyncPathParams {
  zone_id: string;
}

export interface UpdateRecordPathParams {
  record_id: string;
}

export interface UpdateZonePathParams {
  zone_id: string;
}

const CREATE_RECORD_SPEC: OperationSpec = {
  name: 'CreateRecord',
  method: SdkHttpMethod.Post,
  uri: '/zones/{zone_id}/records',
  successCode: 201,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const CREATE_ZONE_SPEC: OperationSpec = {
  name: 'CreateZone',
  method: SdkHttpMethod.Post,
  uri: '/zones',
  successCode: 201,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const DELETE_RECORD_SPEC: OperationSpec = {
  name: 'DeleteRecord',
  method: SdkHttpMethod.Delete,
  uri: '/records/{record_id}',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const DELETE_ZONE_SPEC: OperationSpec = {
  name: 'DeleteZone',
  method: SdkHttpMethod.Delete,
  uri: '/zones/{zone_id}',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const GET_HEALTH_SPEC: OperationSpec = {
  name: 'GetHealth',
  method: SdkHttpMethod.Get,
  uri: '/health',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const GET_METRICS_SPEC: OperationSpec = {
  name: 'GetMetrics',
  method: SdkHttpMethod.Get,
  uri: '/metrics',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const LIST_RECORDS_SPEC: OperationSpec = {
  name: 'ListRecords',
  method: SdkHttpMethod.Get,
  uri: '/records',
  successCode: 200,
  additionalSuccessResponses: [
    { code: 206, hasBody: true },
  ],
  idempotent: false,
  pagination: {
    requestHeader: 'Range',
    responseHeader: 'Content-Range',
  },
  lro: false
};

const LIST_ZONE_RECORDS_SPEC: OperationSpec = {
  name: 'ListZoneRecords',
  method: SdkHttpMethod.Get,
  uri: '/zones/{zone_id}/records',
  successCode: 200,
  additionalSuccessResponses: [
    { code: 206, hasBody: true },
  ],
  idempotent: false,
  pagination: {
    requestHeader: 'Range',
    responseHeader: 'Content-Range',
  },
  lro: false
};

const LIST_ZONES_SPEC: OperationSpec = {
  name: 'ListZones',
  method: SdkHttpMethod.Get,
  uri: '/zones',
  successCode: 200,
  additionalSuccessResponses: [
    { code: 206, hasBody: true },
  ],
  idempotent: false,
  pagination: {
    requestHeader: 'Range',
    responseHeader: 'Content-Range',
  },
  lro: false
};

const RELOAD_RUNTIME_SPEC: OperationSpec = {
  name: 'ReloadRuntime',
  method: SdkHttpMethod.Post,
  uri: '/runtime/reload',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const RELOAD_ZONE_SPEC: OperationSpec = {
  name: 'ReloadZone',
  method: SdkHttpMethod.Post,
  uri: '/zones/{zone_id}/reload',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const SCHEDULE_RUNTIME_SYNC_SPEC: OperationSpec = {
  name: 'ScheduleRuntimeSync',
  method: SdkHttpMethod.Post,
  uri: '/runtime/sync',
  successCode: 202,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const SCHEDULE_ZONE_SYNC_SPEC: OperationSpec = {
  name: 'ScheduleZoneSync',
  method: SdkHttpMethod.Post,
  uri: '/zones/{zone_id}/sync',
  successCode: 202,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const UPDATE_RECORD_SPEC: OperationSpec = {
  name: 'UpdateRecord',
  method: SdkHttpMethod.Put,
  uri: '/records/{record_id}',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const UPDATE_ZONE_SPEC: OperationSpec = {
  name: 'UpdateZone',
  method: SdkHttpMethod.Put,
  uri: '/zones/{zone_id}',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};
