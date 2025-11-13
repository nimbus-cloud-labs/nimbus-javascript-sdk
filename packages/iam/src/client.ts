// Generated client – do not edit.
import { NimbusClient, OperationSpec, SdkConfig, SdkHttpMethod } from '@nimbus-cloud/sdk-core';
import type { AssumeRoleRequest, CreatePolicy, JsonValue, Policy, Principal, TokenRequest, TokenResponse, UpdatePolicy } from './types';

export class IamServiceClient {
  constructor(private readonly inner: NimbusClient) {}

  static fromConfig(config: SdkConfig): IamServiceClient {
    return new IamServiceClient(new NimbusClient(config));
  }

  innerClient(): NimbusClient {
    return this.inner;
  }

  /**
   * Assumes a role and returns temporary session credentials.
   */
  async assumeRole(body: AssumeRoleRequest): Promise<Principal> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<Principal>(ASSUME_ROLE_SPEC, pathParams, body);
    return result.body;
  }

  /**
   * Creates a new policy within the caller's tenant.
   */
  async createPolicy(body: CreatePolicy): Promise<Policy> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<Policy>(CREATE_POLICY_SPEC, pathParams, body);
    return result.body;
  }

  /**
   * Creates a new IAM principal.
   */
  async createPrincipal(body: Principal): Promise<Principal> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<Principal>(CREATE_PRINCIPAL_SPEC, pathParams, body);
    return result.body;
  }

  /**
   * Deletes a policy permanently.
   */
  async deletePolicy(params: DeletePolicyPathParams): Promise<JsonValue> {
    const pathParams: Array<[string, string]> = [
      ['tenant', String(params.tenant)],
      ['id', String(params.id)]
    ];
    const result = await this.inner.invoke<JsonValue>(DELETE_POLICY_SPEC, pathParams, undefined);
    return result.body;
  }

  /**
   * Issues a signed token for the requested principal.
   */
  async emitToken(body: TokenRequest): Promise<TokenResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<TokenResponse>(EMIT_TOKEN_SPEC, pathParams, body);
    return result.body;
  }

  /**
   * Loads a single policy by identifier.
   */
  async getPolicy(params: GetPolicyPathParams): Promise<Policy> {
    const pathParams: Array<[string, string]> = [
      ['tenant', String(params.tenant)],
      ['id', String(params.id)]
    ];
    const result = await this.inner.invoke<Policy>(GET_POLICY_SPEC, pathParams, undefined);
    return result.body;
  }

  /**
   * Retrieves a principal by tenant, type, and identifier.
   */
  async getPrincipal(params: GetPrincipalPathParams): Promise<Principal> {
    const pathParams: Array<[string, string]> = [
      ['tenant', String(params.tenant)],
      ['type', String(params.type)],
      ['id', String(params.id)]
    ];
    const result = await this.inner.invoke<Principal>(GET_PRINCIPAL_SPEC, pathParams, undefined);
    return result.body;
  }

  /**
   * Updates the attributes and statements attached to a policy.
   */
  async updatePolicy(params: UpdatePolicyPathParams, body: UpdatePolicy): Promise<Policy> {
    const pathParams: Array<[string, string]> = [
      ['tenant', String(params.tenant)],
      ['id', String(params.id)]
    ];
    const result = await this.inner.invoke<Policy>(UPDATE_POLICY_SPEC, pathParams, body);
    return result.body;
  }

}

export interface DeletePolicyPathParams {
  tenant: string;
  id: string;
}

export interface GetPolicyPathParams {
  tenant: string;
  id: string;
}

export interface GetPrincipalPathParams {
  tenant: string;
  type: string;
  id: string;
}

export interface UpdatePolicyPathParams {
  tenant: string;
  id: string;
}

const ASSUME_ROLE_SPEC: OperationSpec = {
  name: 'AssumeRole',
  method: SdkHttpMethod.Post,
  uri: '/assume-role',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const CREATE_POLICY_SPEC: OperationSpec = {
  name: 'CreatePolicy',
  method: SdkHttpMethod.Post,
  uri: '/policies',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const CREATE_PRINCIPAL_SPEC: OperationSpec = {
  name: 'CreatePrincipal',
  method: SdkHttpMethod.Post,
  uri: '/principals',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const DELETE_POLICY_SPEC: OperationSpec = {
  name: 'DeletePolicy',
  method: SdkHttpMethod.Delete,
  uri: '/policies/{tenant}/{id}',
  successCode: 204,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const EMIT_TOKEN_SPEC: OperationSpec = {
  name: 'EmitToken',
  method: SdkHttpMethod.Post,
  uri: '/token',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const GET_POLICY_SPEC: OperationSpec = {
  name: 'GetPolicy',
  method: SdkHttpMethod.Get,
  uri: '/policies/{tenant}/{id}',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const GET_PRINCIPAL_SPEC: OperationSpec = {
  name: 'GetPrincipal',
  method: SdkHttpMethod.Get,
  uri: '/principals/{tenant}/{type}/{id}',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const UPDATE_POLICY_SPEC: OperationSpec = {
  name: 'UpdatePolicy',
  method: SdkHttpMethod.Put,
  uri: '/policies/{tenant}/{id}',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};
