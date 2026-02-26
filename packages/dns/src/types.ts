// Generated types – do not edit.
export type JsonPrimitive = string | number | boolean | null;
export interface JsonObject { [key: string]: JsonValue; }
export type JsonValue = JsonPrimitive | JsonObject | JsonValue[];
export interface CommandResponse {
  message: string;
}
export interface CreateRecordRequest {
  id?: string;
  tenantId: string;
  name: string;
  recordType: RecordTypePayload;
  ttl: number;
  data: JsonValue;
  version?: number;
}
export interface CreateZoneRequest {
  id?: string;
  tenantId: string;
  name: string;
  version?: number;
}
export interface DeleteRecordQuery {
  tenantId: string;
}
export interface DeleteZoneQuery {
  tenantId: string;
}
export interface ListRecordsResponse {
  records: ListRecordsResponseRecordsList;
}
export type ListRecordsResponseRecordsList = RecordResponse[];
export interface ListZonesResponse {
  zones: ListZonesResponseZonesList;
}
export type ListZonesResponseZonesList = ZoneResponse[];
export interface RecordResponse {
  id: string;
  zoneId: string;
  tenantId: string;
  name: string;
  recordType: RecordTypePayload;
  ttl: number;
  data: JsonValue;
  version: number;
  createdAt: string;
  updatedAt: string;
}
export type RecordTypePayload = 'A' | 'AAAA' | 'CNAME' | 'MX' | 'NS' | 'SOA' | 'SRV' | 'TXT';
export interface UpdateRecordRequest {
  tenantId: string;
  name?: string;
  recordType?: RecordTypePayload;
  ttl?: number;
  data?: JsonValue;
  version?: number;
}
export interface UpdateZoneRequest {
  tenantId: string;
  name?: string;
  version?: number;
}
export interface ZoneResponse {
  id: string;
  tenantId: string;
  name: string;
  version: number;
  createdAt: string;
  updatedAt: string;
  buckets: ZoneResponseBucketsList;
}
export type ZoneResponseBucketsList = number[];
