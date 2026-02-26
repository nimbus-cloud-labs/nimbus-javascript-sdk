// Generated types – do not edit.
export type JsonPrimitive = string | number | boolean | null;
export interface JsonObject { [key: string]: JsonValue; }
export type JsonValue = JsonPrimitive | JsonObject | JsonValue[];
export interface BackendStatus {
  id: string;
  name: string;
  version: number;
  protocol: TransportProtocol;
  targets: BackendStatusTargetsList;
}
export type BackendStatusTargetsList = TargetStatus[];
export interface CommandResponse {
  message: string;
}
export interface HealthResponse {
  status: string;
}
export interface ListenerStatus {
  id: string;
  host: string;
  port: number;
  version: number;
  protocol: TransportProtocol;
  backend?: BackendStatus;
}
export interface ListListenersResponse {
  listeners: ListListenersResponseListenersList;
}
export type ListListenersResponseListenersList = ListenerStatus[];
export interface TargetStatus {
  id: string;
  address: string;
  port: number;
  enabled: boolean;
  protocol: TransportProtocol;
  version: number;
}
export type TransportProtocol = 'tcp' | 'udp';
