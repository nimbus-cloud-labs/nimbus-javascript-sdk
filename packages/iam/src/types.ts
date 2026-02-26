// Generated types – do not edit.
export type JsonPrimitive = string | number | boolean | null;
export interface JsonObject { [key: string]: JsonValue; }
export type JsonValue = JsonPrimitive | JsonObject | JsonValue[];
export interface AccountRegistrationPayload {
  slug: string;
  name: string;
  adminEmail: string;
  adminDisplayName?: string;
}
export interface ApiKeyListResponse {
  keys: ApiKeyListResponseKeysList;
}
export type ApiKeyListResponseKeysList = ApiKeyMetadata[];
export interface ApiKeyMetadata {
  keyId: string;
  createdAt: string;
  enabled: boolean;
}
export interface ApiKeyResponse {
  keyId: string;
  tenantId: string;
  secret: string;
  createdAt: string;
  enabled: boolean;
}
export interface AssumeRoleRequest {
  roleUrn: string;
  sessionName: string;
  ttl?: number;
}
export interface AuditEventEnvelope {
  occurredAt: string;
  event: AuditEventPayload;
}
export interface AuditEventListResponse {
  events: AuditEventListResponseEventsList;
}
export type AuditEventListResponseEventsList = AuditEventResponse[];
export interface AuditEventPayload {
  type: string;
  payload: JsonValue;
}
export interface AuditEventQuery {
  start?: string;
  end?: string;
  limit?: number;
  action?: string;
  principal?: string;
  resource?: string;
}
export interface AuditEventResponse {
  id: string;
  timestamp: string;
  tenantId: string;
  tenantSlug: string;
  accountId: string;
  accountSlug: string;
  principal: string;
  action: string;
  resource: string;
  decision?: string;
  reason?: string;
  ip?: string;
  userAgent?: string;
  extra?: JsonValue;
  hash?: string;
  prevHash?: string;
  signature?: string;
}
export interface AuditExportJobResponse {
  exportId: string;
  format: string;
  status: string;
  requestedAt: string;
  completedAt?: string;
  events?: AuditExportJobResponseEventsList;
  content?: string;
}
export type AuditExportJobResponseEventsList = AuditEventResponse[];
export interface AuditExportQuery {
  start?: string;
  end?: string;
  limit?: number;
  format?: string;
  action?: string;
  principal?: string;
  resource?: string;
}
export interface ConsoleSessionContextUpdatePayload {
  tenantId?: string;
  roleId?: string;
}
export interface ConsoleSessionStartRequest {
  ttlSecs?: number;
  scope?: ConsoleSessionStartRequestScopeList;
  audience?: string;
}
export type ConsoleSessionStartRequestScopeList = string[];
export interface CreatePolicy {
  name: string;
  version?: string;
  tenantId: string;
  statements: CreatePolicyStatementsList;
}
export type CreatePolicyStatementsList = Statement[];
export interface EvaluateRequest {
  principal: string;
  action: string;
  resource: string;
  context: JsonValue;
  trustPolicy?: JsonValue;
}
export interface EvaluateResponse {
  decision: EvaluationDecision;
  reason?: string;
  matchedStatements: EvaluateResponseMatchedStatementsList;
  evaluatedPolicies: EvaluateResponseEvaluatedPoliciesList;
  explain?: EvaluationExplanation;
}
export type EvaluateResponseEvaluatedPoliciesList = string[];
export type EvaluateResponseMatchedStatementsList = string[];
export interface EvaluationConditionFailure {
  statementId: string;
  failures: EvaluationConditionFailureFailuresList;
}
export interface EvaluationConditionFailureEntry {
  operator: string;
  failures: EvaluationConditionFailureEntryFailuresList;
}
export type EvaluationConditionFailureEntryFailuresList = EvaluationConditionFailureReason[];
export type EvaluationConditionFailureFailuresList = EvaluationConditionFailureEntry[];
export interface EvaluationConditionFailureReason {
  key: string;
  reason: string;
}
export type EvaluationDecision = 'Allow' | 'Deny';
export interface EvaluationExplanation {
  matchedStatements: EvaluationExplanationMatchedStatementsList;
  skippedPolicies: EvaluationExplanationSkippedPoliciesList;
  conditionFailures: EvaluationExplanationConditionFailuresList;
  explicitDeny: boolean;
}
export type EvaluationExplanationConditionFailuresList = EvaluationConditionFailure[];
export type EvaluationExplanationMatchedStatementsList = string[];
export type EvaluationExplanationSkippedPoliciesList = string[];
export interface EvaluationRequest {
  principal: string;
  action: string;
  resource: string;
  context: JsonValue;
  scope?: EvaluationRequestScopeList;
  trustPolicy?: JsonValue;
}
export type EvaluationRequestScopeList = string[];
export interface EvaluationResult {
  decision: EvaluationDecision;
  reason?: string;
  matchedStatements: EvaluationResultMatchedStatementsList;
  evaluatedPolicies: EvaluationResultEvaluatedPoliciesList;
}
export type EvaluationResultEvaluatedPoliciesList = string[];
export type EvaluationResultMatchedStatementsList = string[];
export type GroupDto = JsonObject;
export interface GroupListResponse {
  groups: GroupListResponseGroupsList;
}
export type GroupListResponseGroupsList = GroupResponse[];
export type GroupMembershipDto = JsonObject;
export interface GroupMembershipListResponse {
  members: GroupMembershipListResponseMembersList;
}
export type GroupMembershipListResponseMembersList = GroupMembershipResponse[];
export interface GroupMembershipPayload {
  userId: string;
}
export interface GroupMembershipResponse {
  groupId: string;
  userId: string;
  createdAt: string;
}
export interface GroupPayload {
  accountId: string;
  slug?: string;
  name: string;
}
export interface GroupResponse {
  id: string;
  accountId: string;
  slug: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  memberCount: number;
  roleIds: GroupResponseRoleIdsList;
}
export type GroupResponseRoleIdsList = string[];
export interface GroupRoleBindingListResponse {
  roles: GroupRoleBindingListResponseRolesList;
}
export type GroupRoleBindingListResponseRolesList = GroupRoleBindingResponse[];
export interface GroupRoleBindingPayload {
  tenantId: string;
  roleId: string;
}
export interface GroupRoleBindingResponse {
  groupId: string;
  tenantId: string;
  roleId: string;
  createdAt: string;
}
export interface GroupUpdatePayload {
  slug?: string;
  name?: string;
}
export interface ManagedPolicyAttachmentListResponse {
  policies: ManagedPolicyAttachmentListResponsePoliciesList;
}
export type ManagedPolicyAttachmentListResponsePoliciesList = ManagedPolicyResponse[];
export interface ManagedPolicyAttachmentPayload {
  policyId: string;
}
export interface ManagedPolicyListResponse {
  policies: ManagedPolicyListResponsePoliciesList;
}
export type ManagedPolicyListResponsePoliciesList = ManagedPolicyResponse[];
export interface ManagedPolicyResponse {
  id: string;
  name: string;
  version: string;
  status: JsonValue;
  description?: string;
  statements: ManagedPolicyResponseStatementsList;
  createdAt: string;
  updatedAt: string;
}
export type ManagedPolicyResponseStatementsList = Statement[];
export interface OidcProviderListResponse {
  providers: OidcProviderListResponseProvidersList;
}
export type OidcProviderListResponseProvidersList = OidcProviderResponse[];
export interface OidcProviderPayload {
  tenantId: string;
  provider: string;
  issuer: string;
  authorizationEndpoint: string;
  tokenEndpoint: string;
  userinfoEndpoint: string;
  clientId: string;
  clientSecret?: string;
  scope?: string;
}
export interface OidcProviderQuery {
  tenantId?: string;
}
export interface OidcProviderResponse {
  providerId: string;
  accountId: string;
  tenantId: string;
  provider: string;
  issuer: string;
  authorizationEndpoint: string;
  tokenEndpoint: string;
  userinfoEndpoint: string;
  clientId: string;
  clientSecret?: string;
  scope?: string;
  createdAt: string;
  updatedAt: string;
}
export interface OidcProviderUpdatePayload {
  tenantId?: string;
  provider?: string;
  issuer?: string;
  authorizationEndpoint?: string;
  tokenEndpoint?: string;
  userinfoEndpoint?: string;
  clientId?: string;
  clientSecret?: string;
  scope?: string;
}
export type Policy = JsonObject;
export interface PolicyAttachmentPayload {
  policyId: string;
}
export interface PolicyListQuery {
  tenantId?: string;
}
export interface PolicyListResponse {
  policies: PolicyListResponsePoliciesList;
}
export type PolicyListResponsePoliciesList = PolicyResponse[];
export interface PolicyResponse {
  id: string;
  name: string;
  version: string;
  tenantId: string;
  statements: PolicyResponseStatementsList;
  createdAt: string;
  updatedAt: string;
}
export type PolicyResponseStatementsList = Statement[];
export interface PolicyVersionListResponse {
  versions: PolicyVersionListResponseVersionsList;
}
export type PolicyVersionListResponseVersionsList = PolicyResponse[];
export type Principal = JsonObject;
export interface ReplicationAccountPayload {
  accountId: string;
  accountSlug: string;
  displayName: string;
  accountNumber: number;
  status: string;
  loginDisabled: boolean;
  revision: number;
  createdAt: string;
  updatedAt: string;
  originRegion: string;
}
export interface ReplicationTenantPayload {
  tenantId: string;
  accountId: string;
  tenantSlug: string;
  displayName: string;
  isPrimary: boolean;
  status: string;
  suspendedAt?: string;
  revision: number;
  createdAt: string;
  updatedAt: string;
  originRegion: string;
}
export interface RevokeTokenRequest {
  jti?: string;
  urn?: string;
  expiresAt?: string;
}
export interface RoleListResponse {
  roles: RoleListResponseRolesList;
}
export type RoleListResponseRolesList = RoleResponse[];
export interface RolePayload {
  tenantId: string;
  roleId: string;
  policyIds: RolePayloadPolicyIdsList;
  attributes?: RolePayloadAttributesMap;
}
export type RolePayloadAttributesMap = Record<string, string>;
export type RolePayloadPolicyIdsList = string[];
export interface RoleQuery {
  tenantId?: string;
}
export interface RoleResponse {
  roleId: string;
  tenantId: string;
  policyIds: RoleResponsePolicyIdsList;
  attributes: RoleResponseAttributesMap;
  createdAt: string;
  updatedAt: string;
}
export type RoleResponseAttributesMap = Record<string, string>;
export type RoleResponsePolicyIdsList = string[];
export interface RoleUpdatePayload {
  policyIds?: RoleUpdatePayloadPolicyIdsList;
  attributes?: RoleUpdatePayloadAttributesMap;
}
export type RoleUpdatePayloadAttributesMap = Record<string, string>;
export type RoleUpdatePayloadPolicyIdsList = string[];
export interface ServiceAccountListResponse {
  serviceAccounts: ServiceAccountListResponseServiceAccountsList;
}
export type ServiceAccountListResponseServiceAccountsList = ServiceAccountResponse[];
export interface ServiceAccountPayload {
  tenantId: string;
  serviceAccountId: string;
  policyIds: ServiceAccountPayloadPolicyIdsList;
  attributes?: ServiceAccountPayloadAttributesMap;
}
export type ServiceAccountPayloadAttributesMap = Record<string, string>;
export type ServiceAccountPayloadPolicyIdsList = string[];
export interface ServiceAccountQuery {
  tenantId?: string;
}
export interface ServiceAccountResponse {
  serviceAccountId: string;
  tenantId: string;
  policyIds: ServiceAccountResponsePolicyIdsList;
  attributes: ServiceAccountResponseAttributesMap;
  createdAt: string;
  updatedAt: string;
  keyEnabled: boolean;
  keyCreatedAt?: string;
}
export type ServiceAccountResponseAttributesMap = Record<string, string>;
export type ServiceAccountResponsePolicyIdsList = string[];
export interface ServiceAccountTokenRevokePayload {
  jti: string;
  expiresAt?: string;
}
export interface ServiceAccountUpdatePayload {
  policyIds?: ServiceAccountUpdatePayloadPolicyIdsList;
  attributes?: ServiceAccountUpdatePayloadAttributesMap;
}
export type ServiceAccountUpdatePayloadAttributesMap = Record<string, string>;
export type ServiceAccountUpdatePayloadPolicyIdsList = string[];
export interface SessionListQuery {
  tenantId?: string;
  userId?: string;
  status?: string;
}
export interface SessionListResponse {
  sessions: SessionListResponseSessionsList;
}
export type SessionListResponseSessionsList = SessionResponse[];
export interface SessionResponse {
  id: string;
  userId: string;
  tenantId: string;
  tokenJti: string;
  issuedAt: string;
  expiresAt: string;
  revokedAt?: string;
  scope?: SessionResponseScopeList;
  status: string;
}
export type SessionResponseScopeList = string[];
export interface SessionRevokeAllPayload {
  tenantId?: string;
  userId?: string;
  status?: string;
}
export interface SessionRevokePayload {
  sessionIds: SessionRevokePayloadSessionIdsList;
}
export type SessionRevokePayloadSessionIdsList = string[];
export interface SigningKeyResponse {
  tenantId: string;
  keyId: string;
  secret: string;
  active: boolean;
  createdAt: string;
}
export interface Statement {
  sid?: string;
  effect?: JsonValue;
  action: StatementActionList;
  resource: StatementResourceList;
  condition?: StatementConditionMap;
}
export type StatementActionList = string[];
export type StatementConditionMap = Record<string, JsonValue>;
export type StatementResourceList = string[];
export interface TenantListResponse {
  tenants: TenantListResponseTenantsList;
}
export type TenantListResponseTenantsList = TenantResponse[];
export interface TenantPayload {
  slug: string;
  name: string;
  isPrimary?: boolean;
}
export interface TenantResponse {
  id: string;
  accountId: string;
  accountSlug: string;
  slug: string;
  name: string;
  isPrimary: boolean;
  suspendedAt?: string;
  createdAt: string;
  updatedAt: string;
}
export interface TenantSecuritySettingsUpdatePayload {
  enforceMfa?: boolean;
  allowedIdentityProviders?: TenantSecuritySettingsUpdatePayloadAllowedIdentityProvidersList;
  trustedDomains?: TenantSecuritySettingsUpdatePayloadTrustedDomainsList;
}
export type TenantSecuritySettingsUpdatePayloadAllowedIdentityProvidersList = string[];
export type TenantSecuritySettingsUpdatePayloadTrustedDomainsList = string[];
export interface TenantSuspendPayload {
  reason?: string;
}
export interface TenantUpdatePayload {
  slug?: string;
  name?: string;
}
export interface TokenRequest {
  urn: string;
  typ: string;
  scope?: TokenRequestScopeList;
  aud?: string;
  ttlSecs?: number;
}
export type TokenRequestScopeList = string[];
export interface TokenResponse {
  token: string;
}
export interface UpdatePolicy {
  id: string;
  name: string;
  version?: string;
  tenantId: string;
  statements: UpdatePolicyStatementsList;
}
export type UpdatePolicyStatementsList = Statement[];
export type UserDto = JsonObject;
export interface UserInvitePayload {
  accountId: string;
  email: string;
  displayName?: string;
}
export interface UserKeyQuery {
  tenantId?: string;
}
export interface UserListResponse {
  users: UserListResponseUsersList;
}
export type UserListResponseUsersList = UserResponse[];
export interface UserMfaRequirementPayload {
  requiresMfa: boolean;
}
export interface UserPayload {
  accountId: string;
  email: string;
  displayName?: string;
}
export interface UserProvisioningResponse {
  user: UserDto;
  principal: Principal;
}
export interface UserResponse {
  id: string;
  accountId: string;
  email: string;
  loginState: string;
  loginDisabled: boolean;
  requiresMfa: boolean;
  displayName?: string;
  mfaCompletedAt?: string;
  createdAt: string;
  updatedAt: string;
}
export interface UserSessionListResponse {
  sessions: UserSessionListResponseSessionsList;
}
export type UserSessionListResponseSessionsList = UserSessionResponse[];
export interface UserSessionResponse {
  id: string;
  userId: string;
  tenantId: string;
  issuedAt: string;
  expiresAt: string;
  revokedAt?: string;
  scope?: UserSessionResponseScopeList;
}
export type UserSessionResponseScopeList = string[];
export interface UserUpdatePayload {
  email?: string;
  displayName?: string;
}
export interface ValidateAwsSigV4Request {
  method: string;
  path: string;
  query?: string;
  headers: ValidateAwsSigV4RequestHeadersList;
  authorization?: string;
}
export type ValidateAwsSigV4RequestHeadersList = ValidateHmacHeader[];
export interface ValidateHmacHeader {
  name: string;
  value: string;
}
export interface ValidateHmacRequest {
  signature: string;
  date: string;
  headers: ValidateHmacRequestHeadersList;
  body: string;
  bodyChecksum: string;
}
export type ValidateHmacRequestHeadersList = ValidateHmacHeader[];
export interface ValidateJwtRequest {
  token: string;
}
