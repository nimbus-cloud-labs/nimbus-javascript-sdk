// Generated types – do not edit.
export type JsonPrimitive = string | number | boolean | null;
export interface JsonObject { [key: string]: JsonValue; }
export type JsonValue = JsonPrimitive | JsonObject | JsonValue[];
export type BootDecision = 'offer' | 'ignore';
export interface BootLookupPayload {
  mac: string;
}
export interface BootLookupResponse {
  decision: BootDecision;
  status: BootRegistryStatus;
  bootScriptUrl?: string;
  bootImage?: string;
  pendingExpiresAt?: string;
}
export interface BootRegistryEntry {
  mac: string;
  status: BootRegistryStatus;
  bootImage?: string;
  bootScriptUrl?: string;
  pendingExpiresAt?: string;
  lastSeenAt?: string;
  createdAt: string;
  updatedAt: string;
}
export type BootRegistryStatus = 'active' | 'pending';
export interface BootRegistryUpsertPayload {
  bootImage?: string;
  bootScriptUrl?: string;
  status?: string;
  pendingTtlSeconds?: number;
}
export interface BootstrapCredentialsBody {
  ttlSecs?: number;
  secret?: string;
}
export interface BootstrapCredentialsResponse {
  token: string;
  expiresAt: string;
}
export interface CreateNetworkPayload {
  name: string;
  hosts: CreateNetworkPayloadHostsList;
  policy?: NetworkPolicyPayload;
}
export type CreateNetworkPayloadHostsList = string[];
export interface CreateNicPayload {
  vmId: string;
  networkId: string;
  hostId?: string;
  mac: string;
  allowedPorts: CreateNicPayloadAllowedPortsList;
  securityRules: CreateNicPayloadSecurityRulesList;
}
export type CreateNicPayloadAllowedPortsList = PortRangePayload[];
export type CreateNicPayloadSecurityRulesList = NicSecurityRulePayload[];
export interface CreateVmInterfacePayload {
  networkId: string;
  mac?: string;
  model?: string;
}
export interface CreateVmPayload {
  shapeId: string;
  interfaces?: CreateVmPayloadInterfacesList;
  disks?: CreateVmPayloadDisksList;
  tags?: CreateVmPayloadTagsMap;
  userData?: string;
}
export type CreateVmPayloadDisksList = DiskPayload[];
export type CreateVmPayloadInterfacesList = CreateVmInterfacePayload[];
export type CreateVmPayloadTagsMap = Record<string, string>;
export interface DiskPayload {
  path: string;
  bus?: string;
  sizeBytes?: number;
}
export interface FailPayload {
  error: string;
}
export interface GpuInfoPayload {
  index: number;
  type: string;
  availableVramKb?: number;
  totalVramKb?: number;
  totalVfs?: number;
  usedVfs?: number;
}
export interface HeartbeatPayload {
  hostname: string;
  totalMemory: number;
  usedMemory: number;
  physicalGpuCount: number;
  gpus: HeartbeatPayloadGpusList;
  vms: HeartbeatPayloadVmsList;
  cpuTopology: JsonValue;
}
export type HeartbeatPayloadGpusList = GpuInfoPayload[];
export type HeartbeatPayloadVmsList = VmInfoPayload[];
export interface HostJobResponse {
  id: string;
  job: JsonValue;
}
export interface HostShutdownResponse {
  stopJobIds: HostShutdownResponseStopJobIdsList;
}
export type HostShutdownResponseStopJobIdsList = string[];
export interface InterfacePayload {
  iface: string;
  hostId: string;
}
export interface NetworkPolicyPayload {
  allowedPorts: NetworkPolicyPayloadAllowedPortsList;
  allowedMacs: NetworkPolicyPayloadAllowedMacsList;
}
export type NetworkPolicyPayloadAllowedMacsList = string[];
export type NetworkPolicyPayloadAllowedPortsList = PortRangePayload[];
export interface NetworkProvisioningPayload {
  hostId: string;
  networkId: string;
  interface: WireGuardInterfacePayload;
}
export interface NicSecurityRulePayload {
  direction: RuleDirectionPayload;
  protocol: RuleProtocolPayload;
  ports: NicSecurityRulePayloadPortsList;
  remoteCidr?: string;
  action: RuleActionPayload;
}
export type NicSecurityRulePayloadPortsList = PortRangePayload[];
export interface OperationError {
  message: string;
  requiredAction?: string;
}
export interface OperationMetadata {
  vmId?: string;
  jobKind?: string;
  hostId?: string;
  initiatorUrn?: string;
  requiredAction?: string;
  resourceUrn?: string;
}
export interface PortRangePayload {
  from: number;
  to: number;
}
export interface PrivateNetworkPayload {
  id: string;
  tenant: string;
  name: string;
  hostIds?: PrivateNetworkPayloadHostIdsList;
  policy?: NetworkPolicyPayload;
}
export type PrivateNetworkPayloadHostIdsList = string[];
export interface RotateAgentCredentialsRequest {
  ttlSecs?: number;
}
export type RuleActionPayload = 'allow' | 'deny';
export type RuleDirectionPayload = 'ingress' | 'egress';
export type RuleProtocolPayload = 'tcp' | 'udp' | 'any';
export interface SwitchPayload {
  name: string;
  hostId: string;
}
export interface UpdateNetworkPayload {
  name?: string;
  hosts?: UpdateNetworkPayloadHostsList;
  policy?: NetworkPolicyPayload;
  rotateKeys?: boolean;
}
export type UpdateNetworkPayloadHostsList = string[];
export interface VirtualNicPayload {
  id: string;
  tenant: string;
  networkId: string;
  vmId: string;
  hostId?: string;
  mac: string;
  allowedPorts?: VirtualNicPayloadAllowedPortsList;
  securityRules?: VirtualNicPayloadSecurityRulesList;
}
export type VirtualNicPayloadAllowedPortsList = PortRangePayload[];
export type VirtualNicPayloadSecurityRulesList = NicSecurityRulePayload[];
export interface VmCpuPinPayload {
  vcpu: number;
  cpuset: string;
}
export interface VmInfoPayload {
  pid: number;
  id: string;
  memory: number;
  tags?: VmInfoPayloadTagsMap;
}
export type VmInfoPayloadTagsMap = Record<string, string>;
export interface VmInterfacePayload {
  networkId: string;
  mac?: string;
  model?: string;
  tapName?: string;
}
export interface VmMigrationRequestPayload {
  destinationHostId: string;
  destinationUri: string;
  migrationUri?: string;
  bandwidth?: number;
  flags?: number;
}
export interface VmPayload {
  id: string;
  tenant: string;
  hostId?: string;
  status?: VmStatus;
  shapeId: string;
  interfaces?: VmPayloadInterfacesList;
  arch?: string;
  disks?: VmPayloadDisksList;
  shape: VmResolvedShapePayload;
  cpuUnits?: number;
  sharedCoreMultiplier?: number;
  sharedCoreOvercommitRatio?: number;
  tags?: VmPayloadTagsMap;
  userData?: string;
  cpuset?: string;
  vcpuPins?: VmPayloadVcpuPinsList;
  numaNode?: number;
}
export type VmPayloadDisksList = DiskPayload[];
export type VmPayloadInterfacesList = VmInterfacePayload[];
export type VmPayloadTagsMap = Record<string, string>;
export type VmPayloadVcpuPinsList = VmCpuPinPayload[];
export interface VmResolvedShapePayload {
  memory: number;
  vcpu: number;
  cpuUnits: number;
  sharedCoreMultiplier?: number;
  sharedCoreOvercommitRatio?: number;
  gpuType?: string;
  gpuVramKb?: number;
}
export type VmStatus = 'stopped' | 'running' | 'stopping' | 'migrating' | 'deleting';
export interface WireGuardInterfacePayload {
  name: string;
  address: string;
  listenPort?: number;
  privateKey: string;
  publicKey: string;
  peers?: WireGuardInterfacePayloadPeersList;
  routes?: WireGuardInterfacePayloadRoutesList;
  bridge?: string;
  tap?: string;
}
export type WireGuardInterfacePayloadPeersList = WireGuardPeerPayload[];
export type WireGuardInterfacePayloadRoutesList = string[];
export interface WireGuardPeerPayload {
  publicKey: string;
  endpoint?: string;
  allowedIps?: WireGuardPeerPayloadAllowedIpsList;
}
export type WireGuardPeerPayloadAllowedIpsList = string[];
