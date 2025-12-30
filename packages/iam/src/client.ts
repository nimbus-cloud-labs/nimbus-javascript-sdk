// Generated client – do not edit.
import { NimbusClient, OperationSpec, SdkConfig, SdkHttpMethod } from '@nimbus-cloud/sdk-core';
import type { ApiKeyListResponse, ApiKeyMetadata, ApiKeyResponse, AssumeRoleRequest, AuditEventEnvelope, AuditEventListResponse, AuditEventQuery, AuditEventResponse, AuditExportJobResponse, AuditExportQuery, CreatePolicy, GroupDto, GroupListResponse, GroupMembershipDto, GroupMembershipListResponse, GroupMembershipPayload, GroupMembershipResponse, GroupPayload, GroupResponse, GroupRoleBindingListResponse, GroupRoleBindingPayload, GroupRoleBindingResponse, GroupUpdatePayload, JsonValue, ManagedPolicyAttachmentListResponse, ManagedPolicyAttachmentPayload, ManagedPolicyListResponse, ManagedPolicyResponse, OidcProviderListResponse, OidcProviderPayload, OidcProviderQuery, OidcProviderResponse, OidcProviderUpdatePayload, Policy, PolicyAttachmentPayload, PolicyListQuery, PolicyListResponse, PolicyVersionListResponse, Principal, RoleListResponse, RolePayload, RoleQuery, RoleResponse, RoleUpdatePayload, ServiceAccountListResponse, ServiceAccountPayload, ServiceAccountQuery, ServiceAccountResponse, ServiceAccountTokenRevokePayload, ServiceAccountUpdatePayload, SessionListQuery, SessionListResponse, SessionRevokeAllPayload, SessionRevokePayload, SigningKeyResponse, TenantListResponse, TenantResponse, TenantSuspendPayload, TenantUpdatePayload, TokenRequest, TokenResponse, UpdatePolicy, UserDto, UserInvitePayload, UserKeyQuery, UserListResponse, UserMfaRequirementPayload, UserPayload, UserProvisioningResponse, UserResponse, UserSessionListResponse, UserSessionResponse, UserUpdatePayload } from './types';

export class IamServiceClient {
  constructor(private readonly inner: NimbusClient) {}

  static fromConfig(config: SdkConfig): IamServiceClient {
    return new IamServiceClient(new NimbusClient(config));
  }

  innerClient(): NimbusClient {
    return this.inner;
  }

  /**
   * Adds a role binding to a group.
   */
  async addGroupRole(params: AddGroupRolePathParams, body: GroupRoleBindingPayload): Promise<GroupRoleBindingResponse> {
    const pathParams: Array<[string, string]> = [
      ['group_id', String(params.group_id)]
    ];
    const result = await this.inner.invoke<GroupRoleBindingResponse>(ADD_GROUP_ROLE_SPEC, pathParams, body);
    return result.body;
  }

  /**
   * Adds a user to a group.
   */
  async addUserToGroup(params: AddUserToGroupPathParams, body: GroupMembershipPayload): Promise<GroupMembershipDto> {
    const pathParams: Array<[string, string]> = [
      ['tenant', String(params.tenant)],
      ['group_id', String(params.group_id)]
    ];
    const result = await this.inner.invoke<GroupMembershipDto>(ADD_USER_TO_GROUP_SPEC, pathParams, body);
    return result.body;
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
   * Attaches a managed policy to a principal.
   */
  async attachManagedPolicy(params: AttachManagedPolicyPathParams, body: ManagedPolicyAttachmentPayload): Promise<ManagedPolicyResponse> {
    const pathParams: Array<[string, string]> = [
      ['tenant', String(params.tenant)],
      ['type', String(params.type)],
      ['id', String(params.id)]
    ];
    const result = await this.inner.invoke<ManagedPolicyResponse>(ATTACH_MANAGED_POLICY_SPEC, pathParams, body);
    return result.body;
  }

  /**
   * Attaches a policy to a principal.
   */
  async attachPolicyToPrincipal(params: AttachPolicyToPrincipalPathParams, body: PolicyAttachmentPayload): Promise<Principal> {
    const pathParams: Array<[string, string]> = [
      ['tenant', String(params.tenant)],
      ['type', String(params.type)],
      ['id', String(params.id)]
    ];
    const result = await this.inner.invoke<Principal>(ATTACH_POLICY_TO_PRINCIPAL_SPEC, pathParams, body);
    return result.body;
  }

  /**
   * Creates a new OIDC provider.
   */
  async createOidcProvider(body: OidcProviderPayload): Promise<OidcProviderResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<OidcProviderResponse>(CREATE_OIDC_PROVIDER_SPEC, pathParams, body);
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
   * Creates a new role.
   */
  async createRole(body: RolePayload): Promise<RoleResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<RoleResponse>(CREATE_ROLE_SPEC, pathParams, body);
    return result.body;
  }

  /**
   * Creates a new service account.
   */
  async createServiceAccount(body: ServiceAccountPayload): Promise<ServiceAccountResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<ServiceAccountResponse>(CREATE_SERVICE_ACCOUNT_SPEC, pathParams, body);
    return result.body;
  }

  /**
   * Creates a new key for a service account.
   */
  async createServiceAccountKey(params: CreateServiceAccountKeyPathParams, body: ServiceAccountQuery): Promise<ApiKeyResponse> {
    const pathParams: Array<[string, string]> = [
      ['service_account_id', String(params.service_account_id)]
    ];
    const result = await this.inner.invoke<ApiKeyResponse>(CREATE_SERVICE_ACCOUNT_KEY_SPEC, pathParams, body);
    return result.body;
  }

  /**
   * Creates a signing key for a tenant.
   */
  async createSigningKey(params: CreateSigningKeyPathParams): Promise<SigningKeyResponse> {
    const pathParams: Array<[string, string]> = [
      ['tenant', String(params.tenant)]
    ];
    const result = await this.inner.invoke<SigningKeyResponse>(CREATE_SIGNING_KEY_SPEC, pathParams, undefined);
    return result.body;
  }

  /**
   * Creates a group for a tenant.
   */
  async createTenantGroup(params: CreateTenantGroupPathParams, body: GroupPayload): Promise<GroupDto> {
    const pathParams: Array<[string, string]> = [
      ['tenant', String(params.tenant)]
    ];
    const result = await this.inner.invoke<GroupDto>(CREATE_TENANT_GROUP_SPEC, pathParams, body);
    return result.body;
  }

  /**
   * Creates a user within a tenant.
   */
  async createTenantUser(params: CreateTenantUserPathParams, body: UserPayload): Promise<UserProvisioningResponse> {
    const pathParams: Array<[string, string]> = [
      ['tenant', String(params.tenant)]
    ];
    const result = await this.inner.invoke<UserProvisioningResponse>(CREATE_TENANT_USER_SPEC, pathParams, body);
    return result.body;
  }

  /**
   * Creates a new key for a user.
   */
  async createUserKey(params: CreateUserKeyPathParams, body: UserKeyQuery): Promise<ApiKeyResponse> {
    const pathParams: Array<[string, string]> = [
      ['user_id', String(params.user_id)]
    ];
    const result = await this.inner.invoke<ApiKeyResponse>(CREATE_USER_KEY_SPEC, pathParams, body);
    return result.body;
  }

  /**
   * Deletes a group.
   */
  async deleteGroup(params: DeleteGroupPathParams): Promise<GroupResponse> {
    const pathParams: Array<[string, string]> = [
      ['group_id', String(params.group_id)]
    ];
    const result = await this.inner.invoke<GroupResponse>(DELETE_GROUP_SPEC, pathParams, undefined);
    return result.body;
  }

  /**
   * Deletes an OIDC provider.
   */
  async deleteOidcProvider(params: DeleteOidcProviderPathParams): Promise<JsonValue> {
    const pathParams: Array<[string, string]> = [
      ['provider_id', String(params.provider_id)]
    ];
    const result = await this.inner.invoke<JsonValue>(DELETE_OIDC_PROVIDER_SPEC, pathParams, undefined);
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
   * Deletes a role.
   */
  async deleteRole(params: DeleteRolePathParams, body: RoleQuery): Promise<RoleResponse> {
    const pathParams: Array<[string, string]> = [
      ['role_id', String(params.role_id)]
    ];
    const result = await this.inner.invoke<RoleResponse>(DELETE_ROLE_SPEC, pathParams, body);
    return result.body;
  }

  /**
   * Deletes a service account.
   */
  async deleteServiceAccount(params: DeleteServiceAccountPathParams, body: ServiceAccountQuery): Promise<ServiceAccountResponse> {
    const pathParams: Array<[string, string]> = [
      ['service_account_id', String(params.service_account_id)]
    ];
    const result = await this.inner.invoke<ServiceAccountResponse>(DELETE_SERVICE_ACCOUNT_SPEC, pathParams, body);
    return result.body;
  }

  /**
   * Deletes a service account key.
   */
  async deleteServiceAccountKey(params: DeleteServiceAccountKeyPathParams, body: ServiceAccountQuery): Promise<ApiKeyMetadata> {
    const pathParams: Array<[string, string]> = [
      ['service_account_id', String(params.service_account_id)],
      ['key_id', String(params.key_id)]
    ];
    const result = await this.inner.invoke<ApiKeyMetadata>(DELETE_SERVICE_ACCOUNT_KEY_SPEC, pathParams, body);
    return result.body;
  }

  /**
   * Deletes a user.
   */
  async deleteUser(params: DeleteUserPathParams): Promise<UserResponse> {
    const pathParams: Array<[string, string]> = [
      ['user_id', String(params.user_id)]
    ];
    const result = await this.inner.invoke<UserResponse>(DELETE_USER_SPEC, pathParams, undefined);
    return result.body;
  }

  /**
   * Deletes a user key.
   */
  async deleteUserKey(params: DeleteUserKeyPathParams, body: UserKeyQuery): Promise<ApiKeyMetadata> {
    const pathParams: Array<[string, string]> = [
      ['user_id', String(params.user_id)],
      ['key_id', String(params.key_id)]
    ];
    const result = await this.inner.invoke<ApiKeyMetadata>(DELETE_USER_KEY_SPEC, pathParams, body);
    return result.body;
  }

  /**
   * Detaches a managed policy from a principal.
   */
  async detachManagedPolicy(params: DetachManagedPolicyPathParams): Promise<JsonValue> {
    const pathParams: Array<[string, string]> = [
      ['tenant', String(params.tenant)],
      ['type', String(params.type)],
      ['id', String(params.id)],
      ['policy_id', String(params.policy_id)]
    ];
    const result = await this.inner.invoke<JsonValue>(DETACH_MANAGED_POLICY_SPEC, pathParams, undefined);
    return result.body;
  }

  /**
   * Detaches a policy from a principal.
   */
  async detachPolicyFromPrincipal(params: DetachPolicyFromPrincipalPathParams): Promise<Principal> {
    const pathParams: Array<[string, string]> = [
      ['tenant', String(params.tenant)],
      ['type', String(params.type)],
      ['id', String(params.id)],
      ['policy_id', String(params.policy_id)]
    ];
    const result = await this.inner.invoke<Principal>(DETACH_POLICY_FROM_PRINCIPAL_SPEC, pathParams, undefined);
    return result.body;
  }

  /**
   * Disables a service account key.
   */
  async disableServiceAccountKey(params: DisableServiceAccountKeyPathParams, body: ServiceAccountQuery): Promise<ApiKeyMetadata> {
    const pathParams: Array<[string, string]> = [
      ['service_account_id', String(params.service_account_id)],
      ['key_id', String(params.key_id)]
    ];
    const result = await this.inner.invoke<ApiKeyMetadata>(DISABLE_SERVICE_ACCOUNT_KEY_SPEC, pathParams, body);
    return result.body;
  }

  /**
   * Disables a user login.
   */
  async disableUser(params: DisableUserPathParams): Promise<UserResponse> {
    const pathParams: Array<[string, string]> = [
      ['user_id', String(params.user_id)]
    ];
    const result = await this.inner.invoke<UserResponse>(DISABLE_USER_SPEC, pathParams, undefined);
    return result.body;
  }

  /**
   * Disables a user key.
   */
  async disableUserKey(params: DisableUserKeyPathParams, body: UserKeyQuery): Promise<ApiKeyMetadata> {
    const pathParams: Array<[string, string]> = [
      ['user_id', String(params.user_id)],
      ['key_id', String(params.key_id)]
    ];
    const result = await this.inner.invoke<ApiKeyMetadata>(DISABLE_USER_KEY_SPEC, pathParams, body);
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
   * Enables a service account key.
   */
  async enableServiceAccountKey(params: EnableServiceAccountKeyPathParams, body: ServiceAccountQuery): Promise<ApiKeyMetadata> {
    const pathParams: Array<[string, string]> = [
      ['service_account_id', String(params.service_account_id)],
      ['key_id', String(params.key_id)]
    ];
    const result = await this.inner.invoke<ApiKeyMetadata>(ENABLE_SERVICE_ACCOUNT_KEY_SPEC, pathParams, body);
    return result.body;
  }

  /**
   * Enables a user login.
   */
  async enableUser(params: EnableUserPathParams): Promise<UserResponse> {
    const pathParams: Array<[string, string]> = [
      ['user_id', String(params.user_id)]
    ];
    const result = await this.inner.invoke<UserResponse>(ENABLE_USER_SPEC, pathParams, undefined);
    return result.body;
  }

  /**
   * Enables a user key.
   */
  async enableUserKey(params: EnableUserKeyPathParams, body: UserKeyQuery): Promise<ApiKeyMetadata> {
    const pathParams: Array<[string, string]> = [
      ['user_id', String(params.user_id)],
      ['key_id', String(params.key_id)]
    ];
    const result = await this.inner.invoke<ApiKeyMetadata>(ENABLE_USER_KEY_SPEC, pathParams, body);
    return result.body;
  }

  /**
   * Exports audit events for the current tenant.
   */
  async exportAuditEvents(body: AuditExportQuery): Promise<AuditExportJobResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<AuditExportJobResponse>(EXPORT_AUDIT_EVENTS_SPEC, pathParams, body);
    return result.body;
  }

  /**
   * Loads a single audit event by identifier.
   */
  async getAuditEvent(params: GetAuditEventPathParams): Promise<AuditEventResponse> {
    const pathParams: Array<[string, string]> = [
      ['event_id', String(params.event_id)]
    ];
    const result = await this.inner.invoke<AuditEventResponse>(GET_AUDIT_EVENT_SPEC, pathParams, undefined);
    return result.body;
  }

  /**
   * Loads a group by identifier.
   */
  async getGroup(params: GetGroupPathParams): Promise<GroupResponse> {
    const pathParams: Array<[string, string]> = [
      ['group_id', String(params.group_id)]
    ];
    const result = await this.inner.invoke<GroupResponse>(GET_GROUP_SPEC, pathParams, undefined);
    return result.body;
  }

  /**
   * Loads a single managed policy by identifier.
   */
  async getManagedPolicy(params: GetManagedPolicyPathParams): Promise<ManagedPolicyResponse> {
    const pathParams: Array<[string, string]> = [
      ['policy_id', String(params.policy_id)]
    ];
    const result = await this.inner.invoke<ManagedPolicyResponse>(GET_MANAGED_POLICY_SPEC, pathParams, undefined);
    return result.body;
  }

  /**
   * Loads an OIDC provider by identifier.
   */
  async getOidcProvider(params: GetOidcProviderPathParams): Promise<OidcProviderResponse> {
    const pathParams: Array<[string, string]> = [
      ['provider_id', String(params.provider_id)]
    ];
    const result = await this.inner.invoke<OidcProviderResponse>(GET_OIDC_PROVIDER_SPEC, pathParams, undefined);
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
   * Loads a role by identifier.
   */
  async getRole(params: GetRolePathParams, body: RoleQuery): Promise<RoleResponse> {
    const pathParams: Array<[string, string]> = [
      ['role_id', String(params.role_id)]
    ];
    const result = await this.inner.invoke<RoleResponse>(GET_ROLE_SPEC, pathParams, body);
    return result.body;
  }

  /**
   * Loads a service account by identifier.
   */
  async getServiceAccount(params: GetServiceAccountPathParams, body: ServiceAccountQuery): Promise<ServiceAccountResponse> {
    const pathParams: Array<[string, string]> = [
      ['service_account_id', String(params.service_account_id)]
    ];
    const result = await this.inner.invoke<ServiceAccountResponse>(GET_SERVICE_ACCOUNT_SPEC, pathParams, body);
    return result.body;
  }

  /**
   * Loads a tenant by identifier.
   */
  async getTenant(params: GetTenantPathParams): Promise<TenantResponse> {
    const pathParams: Array<[string, string]> = [
      ['tenant_id', String(params.tenant_id)]
    ];
    const result = await this.inner.invoke<TenantResponse>(GET_TENANT_SPEC, pathParams, undefined);
    return result.body;
  }

  /**
   * Loads a user by identifier.
   */
  async getUser(params: GetUserPathParams): Promise<UserResponse> {
    const pathParams: Array<[string, string]> = [
      ['user_id', String(params.user_id)]
    ];
    const result = await this.inner.invoke<UserResponse>(GET_USER_SPEC, pathParams, undefined);
    return result.body;
  }

  /**
   * Invites a new user to the account.
   */
  async inviteUser(body: UserInvitePayload): Promise<UserResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<UserResponse>(INVITE_USER_SPEC, pathParams, body);
    return result.body;
  }

  /**
   * Lists audit events for the current tenant.
   */
  async listAuditEvents(body: AuditEventQuery): Promise<AuditEventListResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<AuditEventListResponse>(LIST_AUDIT_EVENTS_SPEC, pathParams, body);
    return result.body;
  }

  /**
   * Lists group members.
   */
  async listGroupMembers(params: ListGroupMembersPathParams): Promise<GroupMembershipListResponse> {
    const pathParams: Array<[string, string]> = [
      ['group_id', String(params.group_id)]
    ];
    const result = await this.inner.invoke<GroupMembershipListResponse>(LIST_GROUP_MEMBERS_SPEC, pathParams, undefined);
    return result.body;
  }

  /**
   * Lists role bindings for a group.
   */
  async listGroupRoles(params: ListGroupRolesPathParams): Promise<GroupRoleBindingListResponse> {
    const pathParams: Array<[string, string]> = [
      ['group_id', String(params.group_id)]
    ];
    const result = await this.inner.invoke<GroupRoleBindingListResponse>(LIST_GROUP_ROLES_SPEC, pathParams, undefined);
    return result.body;
  }

  /**
   * Lists groups for the current account.
   */
  async listGroups(): Promise<GroupListResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<GroupListResponse>(LIST_GROUPS_SPEC, pathParams, undefined);
    return result.body;
  }

  /**
   * Lists available managed policies.
   */
  async listManagedPolicies(): Promise<ManagedPolicyListResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<ManagedPolicyListResponse>(LIST_MANAGED_POLICIES_SPEC, pathParams, undefined);
    return result.body;
  }

  /**
   * Lists OIDC providers for the account.
   */
  async listOidcProviders(body: OidcProviderQuery): Promise<OidcProviderListResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<OidcProviderListResponse>(LIST_OIDC_PROVIDERS_SPEC, pathParams, body);
    return result.body;
  }

  /**
   * Lists policies for the resolved tenant.
   */
  async listPolicies(body: PolicyListQuery): Promise<PolicyListResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<PolicyListResponse>(LIST_POLICIES_SPEC, pathParams, body);
    return result.body;
  }

  /**
   * Lists versions for the specified policy.
   */
  async listPolicyVersions(params: ListPolicyVersionsPathParams): Promise<PolicyVersionListResponse> {
    const pathParams: Array<[string, string]> = [
      ['tenant', String(params.tenant)],
      ['policy_id', String(params.policy_id)]
    ];
    const result = await this.inner.invoke<PolicyVersionListResponse>(LIST_POLICY_VERSIONS_SPEC, pathParams, undefined);
    return result.body;
  }

  /**
   * Lists managed policies attached to a principal.
   */
  async listPrincipalManagedPolicies(params: ListPrincipalManagedPoliciesPathParams): Promise<ManagedPolicyAttachmentListResponse> {
    const pathParams: Array<[string, string]> = [
      ['tenant', String(params.tenant)],
      ['type', String(params.type)],
      ['id', String(params.id)]
    ];
    const result = await this.inner.invoke<ManagedPolicyAttachmentListResponse>(LIST_PRINCIPAL_MANAGED_POLICIES_SPEC, pathParams, undefined);
    return result.body;
  }

  /**
   * Lists roles for the account.
   */
  async listRoles(body: RoleQuery): Promise<RoleListResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<RoleListResponse>(LIST_ROLES_SPEC, pathParams, body);
    return result.body;
  }

  /**
   * Lists keys for a service account.
   */
  async listServiceAccountKeys(params: ListServiceAccountKeysPathParams, body: ServiceAccountQuery): Promise<ApiKeyListResponse> {
    const pathParams: Array<[string, string]> = [
      ['service_account_id', String(params.service_account_id)]
    ];
    const result = await this.inner.invoke<ApiKeyListResponse>(LIST_SERVICE_ACCOUNT_KEYS_SPEC, pathParams, body);
    return result.body;
  }

  /**
   * Lists service accounts for the current account.
   */
  async listServiceAccounts(body: ServiceAccountQuery): Promise<ServiceAccountListResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<ServiceAccountListResponse>(LIST_SERVICE_ACCOUNTS_SPEC, pathParams, body);
    return result.body;
  }

  /**
   * Lists console sessions for the account.
   */
  async listSessions(body: SessionListQuery): Promise<SessionListResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<SessionListResponse>(LIST_SESSIONS_SPEC, pathParams, body);
    return result.body;
  }

  /**
   * Lists tenants for the account.
   */
  async listTenants(): Promise<TenantListResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<TenantListResponse>(LIST_TENANTS_SPEC, pathParams, undefined);
    return result.body;
  }

  /**
   * Lists keys for a user.
   */
  async listUserKeys(params: ListUserKeysPathParams, body: UserKeyQuery): Promise<ApiKeyListResponse> {
    const pathParams: Array<[string, string]> = [
      ['user_id', String(params.user_id)]
    ];
    const result = await this.inner.invoke<ApiKeyListResponse>(LIST_USER_KEYS_SPEC, pathParams, body);
    return result.body;
  }

  /**
   * Lists sessions for a user.
   */
  async listUserSessions(params: ListUserSessionsPathParams): Promise<UserSessionListResponse> {
    const pathParams: Array<[string, string]> = [
      ['user_id', String(params.user_id)]
    ];
    const result = await this.inner.invoke<UserSessionListResponse>(LIST_USER_SESSIONS_SPEC, pathParams, undefined);
    return result.body;
  }

  /**
   * Lists users for the account.
   */
  async listUsers(): Promise<UserListResponse> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<UserListResponse>(LIST_USERS_SPEC, pathParams, undefined);
    return result.body;
  }

  /**
   * Accepts an audit event payload for storage.
   */
  async publishAuditEvent(body: AuditEventEnvelope): Promise<JsonValue> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<JsonValue>(PUBLISH_AUDIT_EVENT_SPEC, pathParams, body);
    return result.body;
  }

  /**
   * Removes a member from a group.
   */
  async removeGroupMember(params: RemoveGroupMemberPathParams): Promise<GroupMembershipResponse> {
    const pathParams: Array<[string, string]> = [
      ['group_id', String(params.group_id)],
      ['user_id', String(params.user_id)]
    ];
    const result = await this.inner.invoke<GroupMembershipResponse>(REMOVE_GROUP_MEMBER_SPEC, pathParams, undefined);
    return result.body;
  }

  /**
   * Removes a role binding from a group.
   */
  async removeGroupRole(params: RemoveGroupRolePathParams): Promise<GroupRoleBindingResponse> {
    const pathParams: Array<[string, string]> = [
      ['group_id', String(params.group_id)],
      ['role_id', String(params.role_id)]
    ];
    const result = await this.inner.invoke<GroupRoleBindingResponse>(REMOVE_GROUP_ROLE_SPEC, pathParams, undefined);
    return result.body;
  }

  /**
   * Revokes sessions matching the supplied filters.
   */
  async revokeAllSessions(body: SessionRevokeAllPayload): Promise<JsonValue> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<JsonValue>(REVOKE_ALL_SESSIONS_SPEC, pathParams, body);
    return result.body;
  }

  /**
   * Revokes a service account token.
   */
  async revokeServiceAccountToken(params: RevokeServiceAccountTokenPathParams, body: ServiceAccountTokenRevokePayload): Promise<JsonValue> {
    const pathParams: Array<[string, string]> = [
      ['service_account_id', String(params.service_account_id)]
    ];
    const result = await this.inner.invoke<JsonValue>(REVOKE_SERVICE_ACCOUNT_TOKEN_SPEC, pathParams, body);
    return result.body;
  }

  /**
   * Revokes specific sessions.
   */
  async revokeSessions(body: SessionRevokePayload): Promise<JsonValue> {
    const pathParams: Array<[string, string]> = [];
    const result = await this.inner.invoke<JsonValue>(REVOKE_SESSIONS_SPEC, pathParams, body);
    return result.body;
  }

  /**
   * Revokes a user session.
   */
  async revokeUserSession(params: RevokeUserSessionPathParams): Promise<UserSessionResponse> {
    const pathParams: Array<[string, string]> = [
      ['user_id', String(params.user_id)],
      ['session_id', String(params.session_id)]
    ];
    const result = await this.inner.invoke<UserSessionResponse>(REVOKE_USER_SESSION_SPEC, pathParams, undefined);
    return result.body;
  }

  /**
   * Sets MFA requirement for a user.
   */
  async setUserMfaRequirement(params: SetUserMfaRequirementPathParams, body: UserMfaRequirementPayload): Promise<UserDto> {
    const pathParams: Array<[string, string]> = [
      ['tenant', String(params.tenant)],
      ['user_id', String(params.user_id)]
    ];
    const result = await this.inner.invoke<UserDto>(SET_USER_MFA_REQUIREMENT_SPEC, pathParams, body);
    return result.body;
  }

  /**
   * Suspends a tenant.
   */
  async suspendTenant(params: SuspendTenantPathParams, body: TenantSuspendPayload): Promise<TenantResponse> {
    const pathParams: Array<[string, string]> = [
      ['tenant_id', String(params.tenant_id)]
    ];
    const result = await this.inner.invoke<TenantResponse>(SUSPEND_TENANT_SPEC, pathParams, body);
    return result.body;
  }

  /**
   * Updates a group.
   */
  async updateGroup(params: UpdateGroupPathParams, body: GroupUpdatePayload): Promise<GroupResponse> {
    const pathParams: Array<[string, string]> = [
      ['group_id', String(params.group_id)]
    ];
    const result = await this.inner.invoke<GroupResponse>(UPDATE_GROUP_SPEC, pathParams, body);
    return result.body;
  }

  /**
   * Updates an OIDC provider.
   */
  async updateOidcProvider(params: UpdateOidcProviderPathParams, body: OidcProviderUpdatePayload): Promise<OidcProviderResponse> {
    const pathParams: Array<[string, string]> = [
      ['provider_id', String(params.provider_id)]
    ];
    const result = await this.inner.invoke<OidcProviderResponse>(UPDATE_OIDC_PROVIDER_SPEC, pathParams, body);
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

  /**
   * Updates a role.
   */
  async updateRole(params: UpdateRolePathParams, body: RoleUpdatePayload): Promise<RoleResponse> {
    const pathParams: Array<[string, string]> = [
      ['role_id', String(params.role_id)]
    ];
    const result = await this.inner.invoke<RoleResponse>(UPDATE_ROLE_SPEC, pathParams, body);
    return result.body;
  }

  /**
   * Updates a service account.
   */
  async updateServiceAccount(params: UpdateServiceAccountPathParams, body: ServiceAccountUpdatePayload): Promise<ServiceAccountResponse> {
    const pathParams: Array<[string, string]> = [
      ['service_account_id', String(params.service_account_id)]
    ];
    const result = await this.inner.invoke<ServiceAccountResponse>(UPDATE_SERVICE_ACCOUNT_SPEC, pathParams, body);
    return result.body;
  }

  /**
   * Updates a tenant.
   */
  async updateTenant(params: UpdateTenantPathParams, body: TenantUpdatePayload): Promise<TenantResponse> {
    const pathParams: Array<[string, string]> = [
      ['tenant_id', String(params.tenant_id)]
    ];
    const result = await this.inner.invoke<TenantResponse>(UPDATE_TENANT_SPEC, pathParams, body);
    return result.body;
  }

  /**
   * Updates a user.
   */
  async updateUser(params: UpdateUserPathParams, body: UserUpdatePayload): Promise<UserResponse> {
    const pathParams: Array<[string, string]> = [
      ['user_id', String(params.user_id)]
    ];
    const result = await this.inner.invoke<UserResponse>(UPDATE_USER_SPEC, pathParams, body);
    return result.body;
  }

}

export interface AddGroupRolePathParams {
  group_id: string;
}

export interface AddUserToGroupPathParams {
  tenant: string;
  group_id: string;
}

export interface AttachManagedPolicyPathParams {
  tenant: string;
  type: string;
  id: string;
}

export interface AttachPolicyToPrincipalPathParams {
  tenant: string;
  type: string;
  id: string;
}

export interface CreateServiceAccountKeyPathParams {
  service_account_id: string;
}

export interface CreateSigningKeyPathParams {
  tenant: string;
}

export interface CreateTenantGroupPathParams {
  tenant: string;
}

export interface CreateTenantUserPathParams {
  tenant: string;
}

export interface CreateUserKeyPathParams {
  user_id: string;
}

export interface DeleteGroupPathParams {
  group_id: string;
}

export interface DeleteOidcProviderPathParams {
  provider_id: string;
}

export interface DeletePolicyPathParams {
  tenant: string;
  id: string;
}

export interface DeleteRolePathParams {
  role_id: string;
}

export interface DeleteServiceAccountPathParams {
  service_account_id: string;
}

export interface DeleteServiceAccountKeyPathParams {
  service_account_id: string;
  key_id: string;
}

export interface DeleteUserPathParams {
  user_id: string;
}

export interface DeleteUserKeyPathParams {
  user_id: string;
  key_id: string;
}

export interface DetachManagedPolicyPathParams {
  tenant: string;
  type: string;
  id: string;
  policy_id: string;
}

export interface DetachPolicyFromPrincipalPathParams {
  tenant: string;
  type: string;
  id: string;
  policy_id: string;
}

export interface DisableServiceAccountKeyPathParams {
  service_account_id: string;
  key_id: string;
}

export interface DisableUserPathParams {
  user_id: string;
}

export interface DisableUserKeyPathParams {
  user_id: string;
  key_id: string;
}

export interface EnableServiceAccountKeyPathParams {
  service_account_id: string;
  key_id: string;
}

export interface EnableUserPathParams {
  user_id: string;
}

export interface EnableUserKeyPathParams {
  user_id: string;
  key_id: string;
}

export interface GetAuditEventPathParams {
  event_id: string;
}

export interface GetGroupPathParams {
  group_id: string;
}

export interface GetManagedPolicyPathParams {
  policy_id: string;
}

export interface GetOidcProviderPathParams {
  provider_id: string;
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

export interface GetRolePathParams {
  role_id: string;
}

export interface GetServiceAccountPathParams {
  service_account_id: string;
}

export interface GetTenantPathParams {
  tenant_id: string;
}

export interface GetUserPathParams {
  user_id: string;
}

export interface ListGroupMembersPathParams {
  group_id: string;
}

export interface ListGroupRolesPathParams {
  group_id: string;
}

export interface ListPolicyVersionsPathParams {
  tenant: string;
  policy_id: string;
}

export interface ListPrincipalManagedPoliciesPathParams {
  tenant: string;
  type: string;
  id: string;
}

export interface ListServiceAccountKeysPathParams {
  service_account_id: string;
}

export interface ListUserKeysPathParams {
  user_id: string;
}

export interface ListUserSessionsPathParams {
  user_id: string;
}

export interface RemoveGroupMemberPathParams {
  group_id: string;
  user_id: string;
}

export interface RemoveGroupRolePathParams {
  group_id: string;
  role_id: string;
}

export interface RevokeServiceAccountTokenPathParams {
  service_account_id: string;
}

export interface RevokeUserSessionPathParams {
  user_id: string;
  session_id: string;
}

export interface SetUserMfaRequirementPathParams {
  tenant: string;
  user_id: string;
}

export interface SuspendTenantPathParams {
  tenant_id: string;
}

export interface UpdateGroupPathParams {
  group_id: string;
}

export interface UpdateOidcProviderPathParams {
  provider_id: string;
}

export interface UpdatePolicyPathParams {
  tenant: string;
  id: string;
}

export interface UpdateRolePathParams {
  role_id: string;
}

export interface UpdateServiceAccountPathParams {
  service_account_id: string;
}

export interface UpdateTenantPathParams {
  tenant_id: string;
}

export interface UpdateUserPathParams {
  user_id: string;
}

const ADD_GROUP_ROLE_SPEC: OperationSpec = {
  name: 'AddGroupRole',
  method: SdkHttpMethod.Post,
  uri: '/iam/groups/{group_id}/roles',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const ADD_USER_TO_GROUP_SPEC: OperationSpec = {
  name: 'AddUserToGroup',
  method: SdkHttpMethod.Post,
  uri: '/iam/tenants/{tenant}/groups/{group_id}/users',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: true,
  pagination: undefined,
  lro: false
};

const ASSUME_ROLE_SPEC: OperationSpec = {
  name: 'AssumeRole',
  method: SdkHttpMethod.Post,
  uri: '/iam/assume-role',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: true,
  pagination: undefined,
  lro: false
};

const ATTACH_MANAGED_POLICY_SPEC: OperationSpec = {
  name: 'AttachManagedPolicy',
  method: SdkHttpMethod.Post,
  uri: '/iam/tenants/{tenant}/principals/{type}/{id}/managed-policies',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: true,
  pagination: undefined,
  lro: false
};

const ATTACH_POLICY_TO_PRINCIPAL_SPEC: OperationSpec = {
  name: 'AttachPolicyToPrincipal',
  method: SdkHttpMethod.Post,
  uri: '/iam/tenants/{tenant}/principals/{type}/{id}/policies',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: true,
  pagination: undefined,
  lro: false
};

const CREATE_OIDC_PROVIDER_SPEC: OperationSpec = {
  name: 'CreateOidcProvider',
  method: SdkHttpMethod.Post,
  uri: '/iam/oidc/providers',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const CREATE_POLICY_SPEC: OperationSpec = {
  name: 'CreatePolicy',
  method: SdkHttpMethod.Post,
  uri: '/iam/policies',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: true,
  pagination: undefined,
  lro: false
};

const CREATE_PRINCIPAL_SPEC: OperationSpec = {
  name: 'CreatePrincipal',
  method: SdkHttpMethod.Post,
  uri: '/iam/principals',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: true,
  pagination: undefined,
  lro: false
};

const CREATE_ROLE_SPEC: OperationSpec = {
  name: 'CreateRole',
  method: SdkHttpMethod.Post,
  uri: '/iam/roles',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const CREATE_SERVICE_ACCOUNT_SPEC: OperationSpec = {
  name: 'CreateServiceAccount',
  method: SdkHttpMethod.Post,
  uri: '/iam/service-accounts',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const CREATE_SERVICE_ACCOUNT_KEY_SPEC: OperationSpec = {
  name: 'CreateServiceAccountKey',
  method: SdkHttpMethod.Post,
  uri: '/iam/service-accounts/{service_account_id}/keys',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const CREATE_SIGNING_KEY_SPEC: OperationSpec = {
  name: 'CreateSigningKey',
  method: SdkHttpMethod.Post,
  uri: '/iam/tenants/{tenant}/signing-keys',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: true,
  pagination: undefined,
  lro: false
};

const CREATE_TENANT_GROUP_SPEC: OperationSpec = {
  name: 'CreateTenantGroup',
  method: SdkHttpMethod.Post,
  uri: '/iam/tenants/{tenant}/groups',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: true,
  pagination: undefined,
  lro: false
};

const CREATE_TENANT_USER_SPEC: OperationSpec = {
  name: 'CreateTenantUser',
  method: SdkHttpMethod.Post,
  uri: '/iam/tenants/{tenant}/users',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: true,
  pagination: undefined,
  lro: false
};

const CREATE_USER_KEY_SPEC: OperationSpec = {
  name: 'CreateUserKey',
  method: SdkHttpMethod.Post,
  uri: '/iam/users/{user_id}/keys',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const DELETE_GROUP_SPEC: OperationSpec = {
  name: 'DeleteGroup',
  method: SdkHttpMethod.Delete,
  uri: '/iam/groups/{group_id}',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const DELETE_OIDC_PROVIDER_SPEC: OperationSpec = {
  name: 'DeleteOidcProvider',
  method: SdkHttpMethod.Delete,
  uri: '/iam/oidc/providers/{provider_id}',
  successCode: 204,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const DELETE_POLICY_SPEC: OperationSpec = {
  name: 'DeletePolicy',
  method: SdkHttpMethod.Delete,
  uri: '/iam/policies/{tenant}/{id}',
  successCode: 204,
  additionalSuccessResponses: [],
  idempotent: true,
  pagination: undefined,
  lro: false
};

const DELETE_ROLE_SPEC: OperationSpec = {
  name: 'DeleteRole',
  method: SdkHttpMethod.Delete,
  uri: '/iam/roles/{role_id}',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const DELETE_SERVICE_ACCOUNT_SPEC: OperationSpec = {
  name: 'DeleteServiceAccount',
  method: SdkHttpMethod.Delete,
  uri: '/iam/service-accounts/{service_account_id}',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const DELETE_SERVICE_ACCOUNT_KEY_SPEC: OperationSpec = {
  name: 'DeleteServiceAccountKey',
  method: SdkHttpMethod.Delete,
  uri: '/iam/service-accounts/{service_account_id}/keys/{key_id}',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const DELETE_USER_SPEC: OperationSpec = {
  name: 'DeleteUser',
  method: SdkHttpMethod.Delete,
  uri: '/iam/users/{user_id}',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const DELETE_USER_KEY_SPEC: OperationSpec = {
  name: 'DeleteUserKey',
  method: SdkHttpMethod.Delete,
  uri: '/iam/users/{user_id}/keys/{key_id}',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const DETACH_MANAGED_POLICY_SPEC: OperationSpec = {
  name: 'DetachManagedPolicy',
  method: SdkHttpMethod.Delete,
  uri: '/iam/tenants/{tenant}/principals/{type}/{id}/managed-policies/{policy_id}',
  successCode: 204,
  additionalSuccessResponses: [],
  idempotent: true,
  pagination: undefined,
  lro: false
};

const DETACH_POLICY_FROM_PRINCIPAL_SPEC: OperationSpec = {
  name: 'DetachPolicyFromPrincipal',
  method: SdkHttpMethod.Delete,
  uri: '/iam/tenants/{tenant}/principals/{type}/{id}/policies/{policy_id}',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: true,
  pagination: undefined,
  lro: false
};

const DISABLE_SERVICE_ACCOUNT_KEY_SPEC: OperationSpec = {
  name: 'DisableServiceAccountKey',
  method: SdkHttpMethod.Post,
  uri: '/iam/service-accounts/{service_account_id}/keys/{key_id}/disable',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const DISABLE_USER_SPEC: OperationSpec = {
  name: 'DisableUser',
  method: SdkHttpMethod.Post,
  uri: '/iam/users/{user_id}/disable',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const DISABLE_USER_KEY_SPEC: OperationSpec = {
  name: 'DisableUserKey',
  method: SdkHttpMethod.Post,
  uri: '/iam/users/{user_id}/keys/{key_id}/disable',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const EMIT_TOKEN_SPEC: OperationSpec = {
  name: 'EmitToken',
  method: SdkHttpMethod.Post,
  uri: '/iam/token',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: true,
  pagination: undefined,
  lro: false
};

const ENABLE_SERVICE_ACCOUNT_KEY_SPEC: OperationSpec = {
  name: 'EnableServiceAccountKey',
  method: SdkHttpMethod.Post,
  uri: '/iam/service-accounts/{service_account_id}/keys/{key_id}/enable',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const ENABLE_USER_SPEC: OperationSpec = {
  name: 'EnableUser',
  method: SdkHttpMethod.Post,
  uri: '/iam/users/{user_id}/enable',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const ENABLE_USER_KEY_SPEC: OperationSpec = {
  name: 'EnableUserKey',
  method: SdkHttpMethod.Post,
  uri: '/iam/users/{user_id}/keys/{key_id}/enable',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const EXPORT_AUDIT_EVENTS_SPEC: OperationSpec = {
  name: 'ExportAuditEvents',
  method: SdkHttpMethod.Get,
  uri: '/iam/audit/exports',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const GET_AUDIT_EVENT_SPEC: OperationSpec = {
  name: 'GetAuditEvent',
  method: SdkHttpMethod.Get,
  uri: '/iam/audit/events/{event_id}',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const GET_GROUP_SPEC: OperationSpec = {
  name: 'GetGroup',
  method: SdkHttpMethod.Get,
  uri: '/iam/groups/{group_id}',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const GET_MANAGED_POLICY_SPEC: OperationSpec = {
  name: 'GetManagedPolicy',
  method: SdkHttpMethod.Get,
  uri: '/iam/managed-policies/{policy_id}',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const GET_OIDC_PROVIDER_SPEC: OperationSpec = {
  name: 'GetOidcProvider',
  method: SdkHttpMethod.Get,
  uri: '/iam/oidc/providers/{provider_id}',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const GET_POLICY_SPEC: OperationSpec = {
  name: 'GetPolicy',
  method: SdkHttpMethod.Get,
  uri: '/iam/policies/{tenant}/{id}',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const GET_PRINCIPAL_SPEC: OperationSpec = {
  name: 'GetPrincipal',
  method: SdkHttpMethod.Get,
  uri: '/iam/principals/{tenant}/{type}/{id}',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const GET_ROLE_SPEC: OperationSpec = {
  name: 'GetRole',
  method: SdkHttpMethod.Get,
  uri: '/iam/roles/{role_id}',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const GET_SERVICE_ACCOUNT_SPEC: OperationSpec = {
  name: 'GetServiceAccount',
  method: SdkHttpMethod.Get,
  uri: '/iam/service-accounts/{service_account_id}',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const GET_TENANT_SPEC: OperationSpec = {
  name: 'GetTenant',
  method: SdkHttpMethod.Get,
  uri: '/iam/tenants/{tenant_id}',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const GET_USER_SPEC: OperationSpec = {
  name: 'GetUser',
  method: SdkHttpMethod.Get,
  uri: '/iam/users/{user_id}',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const INVITE_USER_SPEC: OperationSpec = {
  name: 'InviteUser',
  method: SdkHttpMethod.Post,
  uri: '/iam/users/invite',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const LIST_AUDIT_EVENTS_SPEC: OperationSpec = {
  name: 'ListAuditEvents',
  method: SdkHttpMethod.Get,
  uri: '/iam/audit/events',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const LIST_GROUP_MEMBERS_SPEC: OperationSpec = {
  name: 'ListGroupMembers',
  method: SdkHttpMethod.Get,
  uri: '/iam/groups/{group_id}/members',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const LIST_GROUP_ROLES_SPEC: OperationSpec = {
  name: 'ListGroupRoles',
  method: SdkHttpMethod.Get,
  uri: '/iam/groups/{group_id}/roles',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const LIST_GROUPS_SPEC: OperationSpec = {
  name: 'ListGroups',
  method: SdkHttpMethod.Get,
  uri: '/iam/groups',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const LIST_MANAGED_POLICIES_SPEC: OperationSpec = {
  name: 'ListManagedPolicies',
  method: SdkHttpMethod.Get,
  uri: '/iam/managed-policies',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const LIST_OIDC_PROVIDERS_SPEC: OperationSpec = {
  name: 'ListOidcProviders',
  method: SdkHttpMethod.Get,
  uri: '/iam/oidc/providers',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const LIST_POLICIES_SPEC: OperationSpec = {
  name: 'ListPolicies',
  method: SdkHttpMethod.Get,
  uri: '/iam/policies',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const LIST_POLICY_VERSIONS_SPEC: OperationSpec = {
  name: 'ListPolicyVersions',
  method: SdkHttpMethod.Get,
  uri: '/iam/policies/{tenant}/{policy_id}/versions',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const LIST_PRINCIPAL_MANAGED_POLICIES_SPEC: OperationSpec = {
  name: 'ListPrincipalManagedPolicies',
  method: SdkHttpMethod.Get,
  uri: '/iam/tenants/{tenant}/principals/{type}/{id}/managed-policies',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const LIST_ROLES_SPEC: OperationSpec = {
  name: 'ListRoles',
  method: SdkHttpMethod.Get,
  uri: '/iam/roles',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const LIST_SERVICE_ACCOUNT_KEYS_SPEC: OperationSpec = {
  name: 'ListServiceAccountKeys',
  method: SdkHttpMethod.Get,
  uri: '/iam/service-accounts/{service_account_id}/keys',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const LIST_SERVICE_ACCOUNTS_SPEC: OperationSpec = {
  name: 'ListServiceAccounts',
  method: SdkHttpMethod.Get,
  uri: '/iam/service-accounts',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const LIST_SESSIONS_SPEC: OperationSpec = {
  name: 'ListSessions',
  method: SdkHttpMethod.Get,
  uri: '/iam/sessions',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const LIST_TENANTS_SPEC: OperationSpec = {
  name: 'ListTenants',
  method: SdkHttpMethod.Get,
  uri: '/iam/tenants',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const LIST_USER_KEYS_SPEC: OperationSpec = {
  name: 'ListUserKeys',
  method: SdkHttpMethod.Get,
  uri: '/iam/users/{user_id}/keys',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const LIST_USER_SESSIONS_SPEC: OperationSpec = {
  name: 'ListUserSessions',
  method: SdkHttpMethod.Get,
  uri: '/iam/users/{user_id}/sessions',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const LIST_USERS_SPEC: OperationSpec = {
  name: 'ListUsers',
  method: SdkHttpMethod.Get,
  uri: '/iam/users',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const PUBLISH_AUDIT_EVENT_SPEC: OperationSpec = {
  name: 'PublishAuditEvent',
  method: SdkHttpMethod.Post,
  uri: '/iam/audit/events',
  successCode: 202,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const REMOVE_GROUP_MEMBER_SPEC: OperationSpec = {
  name: 'RemoveGroupMember',
  method: SdkHttpMethod.Delete,
  uri: '/iam/groups/{group_id}/members/{user_id}',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const REMOVE_GROUP_ROLE_SPEC: OperationSpec = {
  name: 'RemoveGroupRole',
  method: SdkHttpMethod.Delete,
  uri: '/iam/groups/{group_id}/roles/{role_id}',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const REVOKE_ALL_SESSIONS_SPEC: OperationSpec = {
  name: 'RevokeAllSessions',
  method: SdkHttpMethod.Post,
  uri: '/iam/sessions/revoke-all',
  successCode: 204,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const REVOKE_SERVICE_ACCOUNT_TOKEN_SPEC: OperationSpec = {
  name: 'RevokeServiceAccountToken',
  method: SdkHttpMethod.Post,
  uri: '/iam/service-accounts/{service_account_id}/tokens/revoke',
  successCode: 204,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const REVOKE_SESSIONS_SPEC: OperationSpec = {
  name: 'RevokeSessions',
  method: SdkHttpMethod.Post,
  uri: '/iam/sessions/revoke',
  successCode: 204,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const REVOKE_USER_SESSION_SPEC: OperationSpec = {
  name: 'RevokeUserSession',
  method: SdkHttpMethod.Delete,
  uri: '/iam/users/{user_id}/sessions/{session_id}',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const SET_USER_MFA_REQUIREMENT_SPEC: OperationSpec = {
  name: 'SetUserMfaRequirement',
  method: SdkHttpMethod.Put,
  uri: '/iam/tenants/{tenant}/users/{user_id}/mfa',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: true,
  pagination: undefined,
  lro: false
};

const SUSPEND_TENANT_SPEC: OperationSpec = {
  name: 'SuspendTenant',
  method: SdkHttpMethod.Post,
  uri: '/iam/tenants/{tenant_id}/suspend',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const UPDATE_GROUP_SPEC: OperationSpec = {
  name: 'UpdateGroup',
  method: SdkHttpMethod.Patch,
  uri: '/iam/groups/{group_id}',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const UPDATE_OIDC_PROVIDER_SPEC: OperationSpec = {
  name: 'UpdateOidcProvider',
  method: SdkHttpMethod.Patch,
  uri: '/iam/oidc/providers/{provider_id}',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const UPDATE_POLICY_SPEC: OperationSpec = {
  name: 'UpdatePolicy',
  method: SdkHttpMethod.Put,
  uri: '/iam/policies/{tenant}/{id}',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: true,
  pagination: undefined,
  lro: false
};

const UPDATE_ROLE_SPEC: OperationSpec = {
  name: 'UpdateRole',
  method: SdkHttpMethod.Patch,
  uri: '/iam/roles/{role_id}',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const UPDATE_SERVICE_ACCOUNT_SPEC: OperationSpec = {
  name: 'UpdateServiceAccount',
  method: SdkHttpMethod.Patch,
  uri: '/iam/service-accounts/{service_account_id}',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const UPDATE_TENANT_SPEC: OperationSpec = {
  name: 'UpdateTenant',
  method: SdkHttpMethod.Patch,
  uri: '/iam/tenants/{tenant_id}',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};

const UPDATE_USER_SPEC: OperationSpec = {
  name: 'UpdateUser',
  method: SdkHttpMethod.Patch,
  uri: '/iam/users/{user_id}',
  successCode: 200,
  additionalSuccessResponses: [],
  idempotent: false,
  pagination: undefined,
  lro: false
};
