// Generated client – do not edit.
import { NimbusClient, OperationHandle, OperationSpec, Paginator, SdkConfig, SdkHttpMethod } from '@nimbus-cloud/sdk-core';
import type { BootstrapCredentialsBody, BootstrapCredentialsResponse, CreateNetworkPayload, CreateNicPayload, CreateVmPayload, FailPayload, HeartbeatPayload, HostJobResponse, HostShutdownResponse, IdempotencyListResponse, InterfacePayload, JsonValue, RotateAgentCredentialsRequest, SwitchPayload, UpdateNetworkPayload, VmMigrationRequestPayload } from './types';

export class ComputeServiceClient {
  constructor(private readonly inner: NimbusClient) {}

  static fromConfig(config: SdkConfig): ComputeServiceClient {
    return new ComputeServiceClient(new NimbusClient(config));
  }

  innerClient(): NimbusClient {
    return this.inner;
  }

  async attachInterface(params: AttachInterfacePathParams, body: InterfacePayload): Promise<OperationHandle> {
    const pathParams: Array<[string, string]> = [
      ['switch', String(params.switch)]
    ];
    const result = await this.inner.invoke<OperationHandle>(ATTACH_INTERFACE_SPEC, pathParams, body);
    return result.body;
  }

  async attachInterfaceAndWait(params: AttachInterfacePathParams, body: InterfacePayload): Promise<OperationHandle> {
    const handle = await this.attachInterface(params, body);
    return this.inner.waiter().wait(handle);
  }

  async bootstrapAgentCredentials(params: BootstrapAgentCredentialsPathParams, body: BootstrapCredentialsBody): Promise<BootstrapCredentialsResponse> {
    const pathParams: Array<[string, string]> = [
      ['host_id', String(params.host_id)]
    ];
    const result = await this.inner.invoke<BootstrapCredentialsResponse>(BOOTSTRAP_AGENT_CREDENTIALS_SPEC, pathParams, body);
    return result.body;
  }

  async claimAgentJob(params: ClaimAgentJobPathParams): Promise<HostJobResponse> {
    const pathParams: Array<[string, string]> = [
      ['host_id', String(params.host_id)]
    ];
    const result = await this.inner.invoke<HostJobResponse>(CLAIM_AGENT_JOB_SPEC, pathParams, undefined);
    return result.body;
  }

  async completeAgentJob(params: CompleteAgentJobPathParams): Promise<JsonValue> {
    const pathParams: Array<[string, string]> = [
      ['host_id', String(params.host_id)],
      ['job_id', String(params.job_id)]
    ];
    const result = await this.inner.invoke<JsonValue>(COMPLETE_AGENT_JOB_SPEC, pathParams, undefined);
    return result.body;
  }

  async createNetwork(body: CreateNetworkPayload): Promise<OperationHandle> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<OperationHandle>(CREATE_NETWORK_SPEC, pathParams, body);
    return result.body;
  }

  async createNetworkAndWait(body: CreateNetworkPayload): Promise<OperationHandle> {
    const handle = await this.createNetwork(body);
    return this.inner.waiter().wait(handle);
  }

  async createNic(body: CreateNicPayload): Promise<OperationHandle> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<OperationHandle>(CREATE_NIC_SPEC, pathParams, body);
    return result.body;
  }

  async createNicAndWait(body: CreateNicPayload): Promise<OperationHandle> {
    const handle = await this.createNic(body);
    return this.inner.waiter().wait(handle);
  }

  async createSwitch(body: SwitchPayload): Promise<OperationHandle> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<OperationHandle>(CREATE_SWITCH_SPEC, pathParams, body);
    return result.body;
  }

  async createSwitchAndWait(body: SwitchPayload): Promise<OperationHandle> {
    const handle = await this.createSwitch(body);
    return this.inner.waiter().wait(handle);
  }

  async createVm(body: CreateVmPayload): Promise<OperationHandle> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<OperationHandle>(CREATE_VM_SPEC, pathParams, body);
    return result.body;
  }

  async createVmAndWait(body: CreateVmPayload): Promise<OperationHandle> {
    const handle = await this.createVm(body);
    return this.inner.waiter().wait(handle);
  }

  async deleteVm(params: DeleteVmPathParams): Promise<OperationHandle> {
    const pathParams: Array<[string, string]> = [
      ['id', String(params.id)]
    ];
    const result = await this.inner.invoke<OperationHandle>(DELETE_VM_SPEC, pathParams, undefined);
    return result.body;
  }

  async deleteVmAndWait(params: DeleteVmPathParams): Promise<OperationHandle> {
    const handle = await this.deleteVm(params);
    return this.inner.waiter().wait(handle);
  }

  async detachInterface(params: DetachInterfacePathParams, body: InterfacePayload): Promise<OperationHandle> {
    const pathParams: Array<[string, string]> = [
      ['switch', String(params.switch)]
    ];
    const result = await this.inner.invoke<OperationHandle>(DETACH_INTERFACE_SPEC, pathParams, body);
    return result.body;
  }

  async detachInterfaceAndWait(params: DetachInterfacePathParams, body: InterfacePayload): Promise<OperationHandle> {
    const handle = await this.detachInterface(params, body);
    return this.inner.waiter().wait(handle);
  }

  async failAgentJob(params: FailAgentJobPathParams, body: FailPayload): Promise<JsonValue> {
    const pathParams: Array<[string, string]> = [
      ['host_id', String(params.host_id)],
      ['job_id', String(params.job_id)]
    ];
    const result = await this.inner.invoke<JsonValue>(FAIL_AGENT_JOB_SPEC, pathParams, body);
    return result.body;
  }

  async getAgentMetadata(params: GetAgentMetadataPathParams): Promise<JsonValue> {
    const pathParams: Array<[string, string]> = [
      ['host_id', String(params.host_id)],
      ['path', String(params.path)]
    ];
    const result = await this.inner.invoke<JsonValue>(GET_AGENT_METADATA_SPEC, pathParams, undefined);
    return result.body;
  }

  async getMetrics(): Promise<JsonValue> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<JsonValue>(GET_METRICS_SPEC, pathParams, undefined);
    return result.body;
  }

  async heartbeat(body: HeartbeatPayload): Promise<JsonValue> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<JsonValue>(HEARTBEAT_SPEC, pathParams, body);
    return result.body;
  }

  async listIdempotencyRecords(): Promise<IdempotencyListResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<IdempotencyListResponse>(LIST_IDEMPOTENCY_RECORDS_SPEC, pathParams, undefined);
    return result.body;
  }

  async listNetworks(): Promise<JsonValue> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<JsonValue>(LIST_NETWORKS_SPEC, pathParams, undefined);
    return result.body;
  }

  paginateListNetworks(): Paginator<JsonValue> {
    const pathParams: Array<[string, string]> = [];
    return this.inner.paginator<JsonValue>(LIST_NETWORKS_SPEC, pathParams);
  }

  async listNics(): Promise<JsonValue> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<JsonValue>(LIST_NICS_SPEC, pathParams, undefined);
    return result.body;
  }

  paginateListNics(): Paginator<JsonValue> {
    const pathParams: Array<[string, string]> = [];
    return this.inner.paginator<JsonValue>(LIST_NICS_SPEC, pathParams);
  }

  async migrateVm(params: MigrateVmPathParams, body: VmMigrationRequestPayload): Promise<OperationHandle> {
    const pathParams: Array<[string, string]> = [
      ['id', String(params.id)]
    ];
    const result = await this.inner.invoke<OperationHandle>(MIGRATE_VM_SPEC, pathParams, body);
    return result.body;
  }

  async migrateVmAndWait(params: MigrateVmPathParams, body: VmMigrationRequestPayload): Promise<OperationHandle> {
    const handle = await this.migrateVm(params, body);
    return this.inner.waiter().wait(handle);
  }

  async reportAgentStatus(params: ReportAgentStatusPathParams, body: HeartbeatPayload): Promise<JsonValue> {
    const pathParams: Array<[string, string]> = [
      ['host_id', String(params.host_id)]
    ];
    const result = await this.inner.invoke<JsonValue>(REPORT_AGENT_STATUS_SPEC, pathParams, body);
    return result.body;
  }

  async rotateAgentCredentials(params: RotateAgentCredentialsPathParams, body: RotateAgentCredentialsRequest): Promise<JsonValue> {
    const pathParams: Array<[string, string]> = [
      ['host_id', String(params.host_id)]
    ];
    const result = await this.inner.invoke<JsonValue>(ROTATE_AGENT_CREDENTIALS_SPEC, pathParams, body);
    return result.body;
  }

  async shutdownHost(params: ShutdownHostPathParams): Promise<HostShutdownResponse> {
    const pathParams: Array<[string, string]> = [
      ['host_id', String(params.host_id)]
    ];
    const result = await this.inner.invoke<HostShutdownResponse>(SHUTDOWN_HOST_SPEC, pathParams, undefined);
    return result.body;
  }

  async startVm(params: StartVmPathParams): Promise<OperationHandle> {
    const pathParams: Array<[string, string]> = [
      ['id', String(params.id)]
    ];
    const result = await this.inner.invoke<OperationHandle>(START_VM_SPEC, pathParams, undefined);
    return result.body;
  }

  async startVmAndWait(params: StartVmPathParams): Promise<OperationHandle> {
    const handle = await this.startVm(params);
    return this.inner.waiter().wait(handle);
  }

  async stopVm(params: StopVmPathParams): Promise<OperationHandle> {
    const pathParams: Array<[string, string]> = [
      ['id', String(params.id)]
    ];
    const result = await this.inner.invoke<OperationHandle>(STOP_VM_SPEC, pathParams, undefined);
    return result.body;
  }

  async stopVmAndWait(params: StopVmPathParams): Promise<OperationHandle> {
    const handle = await this.stopVm(params);
    return this.inner.waiter().wait(handle);
  }

  async updateNetwork(params: UpdateNetworkPathParams, body: UpdateNetworkPayload): Promise<OperationHandle> {
    const pathParams: Array<[string, string]> = [
      ['network_id', String(params.network_id)]
    ];
    const result = await this.inner.invoke<OperationHandle>(UPDATE_NETWORK_SPEC, pathParams, body);
    return result.body;
  }

  async updateNetworkAndWait(params: UpdateNetworkPathParams, body: UpdateNetworkPayload): Promise<OperationHandle> {
    const handle = await this.updateNetwork(params, body);
    return this.inner.waiter().wait(handle);
  }

}

export interface AttachInterfacePathParams {
  switch: string;
}

export interface BootstrapAgentCredentialsPathParams {
  host_id: string;
}

export interface ClaimAgentJobPathParams {
  host_id: string;
}

export interface CompleteAgentJobPathParams {
  host_id: string;
  job_id: string;
}

export interface DeleteVmPathParams {
  id: string;
}

export interface DetachInterfacePathParams {
  switch: string;
}

export interface FailAgentJobPathParams {
  host_id: string;
  job_id: string;
}

export interface GetAgentMetadataPathParams {
  host_id: string;
  path: string;
}

export interface MigrateVmPathParams {
  id: string;
}

export interface ReportAgentStatusPathParams {
  host_id: string;
}

export interface RotateAgentCredentialsPathParams {
  host_id: string;
}

export interface ShutdownHostPathParams {
  host_id: string;
}

export interface StartVmPathParams {
  id: string;
}

export interface StopVmPathParams {
  id: string;
}

export interface UpdateNetworkPathParams {
  network_id: string;
}

const ATTACH_INTERFACE_SPEC: OperationSpec = {
  name: 'AttachInterface',
  method: SdkHttpMethod.Post,
  uri: '/switches/{switch}/attach',
  successCode: 202,
  additionalSuccessResponses: [],
  idempotent: true,
  pagination: undefined,
  lro: true
};

const BOOTSTRAP_AGENT_CREDENTIALS_SPEC: OperationSpec = {
  name: 'BootstrapAgentCredentials',
  method: SdkHttpMethod.Post,
  uri: '/agents/{host_id}/credentials/bootstrap',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const CLAIM_AGENT_JOB_SPEC: OperationSpec = {
  name: 'ClaimAgentJob',
  method: SdkHttpMethod.Post,
  uri: '/agents/{host_id}/jobs/next',
  successCode: 200,
  additionalSuccessResponses: [
    { code: 204, hasBody: false },
  ],
  idempotent: true,
  pagination: undefined,
  lro: false
};

const COMPLETE_AGENT_JOB_SPEC: OperationSpec = {
  name: 'CompleteAgentJob',
  method: SdkHttpMethod.Post,
  uri: '/agents/{host_id}/jobs/{job_id}/complete',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: true,
  pagination: undefined,
  lro: false
};

const CREATE_NETWORK_SPEC: OperationSpec = {
  name: 'CreateNetwork',
  method: SdkHttpMethod.Post,
  uri: '/networks',
  successCode: 202,
  additionalSuccessResponses: [],
  idempotent: true,
  pagination: undefined,
  lro: true
};

const CREATE_NIC_SPEC: OperationSpec = {
  name: 'CreateNic',
  method: SdkHttpMethod.Post,
  uri: '/nics',
  successCode: 202,
  additionalSuccessResponses: [],
  idempotent: true,
  pagination: undefined,
  lro: true
};

const CREATE_SWITCH_SPEC: OperationSpec = {
  name: 'CreateSwitch',
  method: SdkHttpMethod.Post,
  uri: '/switches',
  successCode: 202,
  additionalSuccessResponses: [],
  idempotent: true,
  pagination: undefined,
  lro: true
};

const CREATE_VM_SPEC: OperationSpec = {
  name: 'CreateVm',
  method: SdkHttpMethod.Post,
  uri: '/vms',
  successCode: 202,
  additionalSuccessResponses: [],
  idempotent: true,
  pagination: undefined,
  lro: true
};

const DELETE_VM_SPEC: OperationSpec = {
  name: 'DeleteVm',
  method: SdkHttpMethod.Delete,
  uri: '/vms/{id}',
  successCode: 202,
  additionalSuccessResponses: [],
  idempotent: true,
  pagination: undefined,
  lro: true
};

const DETACH_INTERFACE_SPEC: OperationSpec = {
  name: 'DetachInterface',
  method: SdkHttpMethod.Post,
  uri: '/switches/{switch}/detach',
  successCode: 202,
  additionalSuccessResponses: [],
  idempotent: true,
  pagination: undefined,
  lro: true
};

const FAIL_AGENT_JOB_SPEC: OperationSpec = {
  name: 'FailAgentJob',
  method: SdkHttpMethod.Post,
  uri: '/agents/{host_id}/jobs/{job_id}/fail',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: true,
  pagination: undefined,
  lro: false
};

const GET_AGENT_METADATA_SPEC: OperationSpec = {
  name: 'GetAgentMetadata',
  method: SdkHttpMethod.Get,
  uri: '/agents/{host_id}/metadata/{*path}',
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

const HEARTBEAT_SPEC: OperationSpec = {
  name: 'Heartbeat',
  method: SdkHttpMethod.Post,
  uri: '/heartbeat',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const LIST_IDEMPOTENCY_RECORDS_SPEC: OperationSpec = {
  name: 'ListIdempotencyRecords',
  method: SdkHttpMethod.Get,
  uri: '/internal/idempotency',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const LIST_NETWORKS_SPEC: OperationSpec = {
  name: 'ListNetworks',
  method: SdkHttpMethod.Get,
  uri: '/networks',
  successCode: 200,
  additionalSuccessResponses: [
    { code: 206, hasBody: false },
  ],
  idempotent: false,
  pagination: {
    requestHeader: 'Range',
    responseHeader: 'Content-Range',
  },
  lro: false
};

const LIST_NICS_SPEC: OperationSpec = {
  name: 'ListNics',
  method: SdkHttpMethod.Get,
  uri: '/nics',
  successCode: 200,
  additionalSuccessResponses: [
    { code: 206, hasBody: false },
  ],
  idempotent: false,
  pagination: {
    requestHeader: 'Range',
    responseHeader: 'Content-Range',
  },
  lro: false
};

const MIGRATE_VM_SPEC: OperationSpec = {
  name: 'MigrateVm',
  method: SdkHttpMethod.Post,
  uri: '/vms/{id}/migrate',
  successCode: 202,
  additionalSuccessResponses: [],
  idempotent: true,
  pagination: undefined,
  lro: true
};

const REPORT_AGENT_STATUS_SPEC: OperationSpec = {
  name: 'ReportAgentStatus',
  method: SdkHttpMethod.Post,
  uri: '/agents/{host_id}/status',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const ROTATE_AGENT_CREDENTIALS_SPEC: OperationSpec = {
  name: 'RotateAgentCredentials',
  method: SdkHttpMethod.Put,
  uri: '/agents/{host_id}/credentials',
  successCode: 202,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const SHUTDOWN_HOST_SPEC: OperationSpec = {
  name: 'ShutdownHost',
  method: SdkHttpMethod.Post,
  uri: '/hosts/{host_id}/shutdown',
  successCode: 202,
  additionalSuccessResponses: [],
  idempotent: true,
  pagination: undefined,
  lro: false
};

const START_VM_SPEC: OperationSpec = {
  name: 'StartVm',
  method: SdkHttpMethod.Post,
  uri: '/vms/{id}/start',
  successCode: 202,
  additionalSuccessResponses: [],
  idempotent: true,
  pagination: undefined,
  lro: true
};

const STOP_VM_SPEC: OperationSpec = {
  name: 'StopVm',
  method: SdkHttpMethod.Post,
  uri: '/vms/{id}/stop',
  successCode: 202,
  additionalSuccessResponses: [],
  idempotent: true,
  pagination: undefined,
  lro: true
};

const UPDATE_NETWORK_SPEC: OperationSpec = {
  name: 'UpdateNetwork',
  method: SdkHttpMethod.Put,
  uri: '/networks/{network_id}',
  successCode: 202,
  additionalSuccessResponses: [],
  idempotent: true,
  pagination: undefined,
  lro: true
};
