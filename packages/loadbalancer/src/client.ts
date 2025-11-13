// Generated client – do not edit.
import { NimbusClient, OperationSpec, Paginator, SdkConfig, SdkHttpMethod } from '@nimbus-cloud/sdk-core';
import type { CommandResponse, HealthResponse, JsonValue, ListListenersResponse } from './types';

export class LoadBalancerServiceClient {
  constructor(private readonly inner: NimbusClient) {}

  static fromConfig(config: SdkConfig): LoadBalancerServiceClient {
    return new LoadBalancerServiceClient(new NimbusClient(config));
  }

  innerClient(): NimbusClient {
    return this.inner;
  }

  /**
   * Liveness probe for the load balancer management API.
   */
  async getHealth(): Promise<HealthResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<HealthResponse>(GET_HEALTH_SPEC, pathParams, undefined);
    return result.body;
  }

  /**
   * Prometheus metrics endpoint used by operators.
   */
  async getMetrics(): Promise<JsonValue> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<JsonValue>(GET_METRICS_SPEC, pathParams, undefined);
    return result.body;
  }

  /**
   * Returns listener statuses. Requires the lb:read scope and honors Range pagination.
   */
  async listListeners(): Promise<ListListenersResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<ListListenersResponse>(LIST_LISTENERS_SPEC, pathParams, undefined);
    return result.body;
  }

  paginateListListeners(): Paginator<ListListenersResponse> {
    const pathParams: Array<[string, string]> = [];
    return this.inner.paginator<ListListenersResponse>(LIST_LISTENERS_SPEC, pathParams);
  }

  /**
   * Reloads listener definitions. Requires the lb:manage scope.
   */
  async reloadListeners(): Promise<CommandResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<CommandResponse>(RELOAD_LISTENERS_SPEC, pathParams, undefined);
    return result.body;
  }

  /**
   * Schedules reconciliation against the control plane. Requires the lb:manage scope.
   */
  async scheduleSync(): Promise<CommandResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<CommandResponse>(SCHEDULE_SYNC_SPEC, pathParams, undefined);
    return result.body;
  }

}

const GET_HEALTH_SPEC: OperationSpec = {
  name: 'GetHealth',
  method: SdkHttpMethod.Get,
  uri: '/healthz',
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

const LIST_LISTENERS_SPEC: OperationSpec = {
  name: 'ListListeners',
  method: SdkHttpMethod.Get,
  uri: '/listeners',
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

const RELOAD_LISTENERS_SPEC: OperationSpec = {
  name: 'ReloadListeners',
  method: SdkHttpMethod.Post,
  uri: '/listeners/reload',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const SCHEDULE_SYNC_SPEC: OperationSpec = {
  name: 'ScheduleSync',
  method: SdkHttpMethod.Post,
  uri: '/listeners/sync',
  successCode: 202,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};
