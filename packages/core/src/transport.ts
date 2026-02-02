import { TransportError } from './errors';

export type HeaderMap = Record<string, string>;

export interface TransportRequest {
  method: SdkHttpMethod;
  path: string;
  headers: HeaderMap;
  body?: unknown;
}

export interface TransportResponse {
  status: number;
  headers: HeaderMap;
  body: unknown;
}

export interface Transport {
  execute(request: TransportRequest): Promise<TransportResponse>;
}

export enum SdkHttpMethod {
  Delete = 'DELETE',
  Get = 'GET',
  Patch = 'PATCH',
  Post = 'POST',
  Put = 'PUT'
}

export interface FetchTransportOptions {
  defaultHeaders?: HeaderMap;
  fetcher?: typeof fetch;
  requestInit?: RequestInit;
}

export class FetchTransport implements Transport {
  private readonly baseUrl: URL;
  private readonly defaultHeaders: HeaderMap;
  private readonly fetcher: typeof fetch;
  private readonly requestInit?: RequestInit;

  constructor(baseUrl: string, options: FetchTransportOptions = {}) {
    this.baseUrl = new URL(baseUrl);
    this.defaultHeaders = {
      accept: 'application/json',
      ...options.defaultHeaders
    };
    this.fetcher = options.fetcher ?? fetch;
    this.requestInit = options.requestInit;
  }

  async execute(request: TransportRequest): Promise<TransportResponse> {
    const target = new URL(request.path, this.baseUrl);
    const headers: HeaderMap = {
      ...this.defaultHeaders,
      ...normalizeHeaders(this.requestInit?.headers),
      ...request.headers
    };
    const init: RequestInit = {
      ...this.requestInit,
      method: request.method,
      headers
    };

    if (request.method === SdkHttpMethod.Get && request.body !== undefined) {
      appendQuery(target, request.body);
    } else if (request.body !== undefined) {
      headers['content-type'] = headers['content-type'] ?? 'application/json';
      init.body = typeof request.body === 'string' ? request.body : JSON.stringify(request.body);
    } else if (this.requestInit?.body !== undefined) {
      init.body = this.requestInit.body;
    }

    let response: Response;
    try {
      response = await this.fetcher(target, init);
    } catch (error) {
      throw new TransportError(`HTTP error: ${(error as Error).message}`);
    }

    const status = response.status;
    const headerMap: HeaderMap = {};
    response.headers.forEach((value, key) => {
      headerMap[key.toLowerCase()] = value;
    });

    let body: unknown = null;
    if (status !== 204) {
      const contentType = response.headers.get('content-type') ?? '';
      if (contentType.includes('json')) {
        try {
          body = await response.json();
        } catch (error) {
          throw new TransportError(`Failed to parse JSON body: ${(error as Error).message}`);
        }
      } else {
        body = await response.text();
      }
    }

    return { status, headers: headerMap, body };
  }
}

function normalizeHeaders(source: HeadersInit | undefined): HeaderMap {
  if (!source) {
    return {};
  }
  if (source instanceof Headers) {
    const map: HeaderMap = {};
    source.forEach((value, key) => {
      map[key.toLowerCase()] = value;
    });
    return map;
  }
  if (Array.isArray(source)) {
    const map: HeaderMap = {};
    for (const [key, value] of source) {
      map[key.toLowerCase()] = value;
    }
    return map;
  }
  return Object.fromEntries(
    Object.entries(source).map(([key, value]) => [key.toLowerCase(), value])
  );
}

function appendQuery(url: URL, payload: unknown): void {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    return;
  }
  const params = new URLSearchParams(url.search);
  for (const [key, raw] of Object.entries(payload as Record<string, unknown>)) {
    if (raw === null || raw === undefined) {
      continue;
    }
    if (Array.isArray(raw)) {
      for (const item of raw) {
        if (item === null || item === undefined) {
          continue;
        }
        params.append(key, serializeQueryValue(item));
      }
      continue;
    }
    params.set(key, serializeQueryValue(raw));
  }
  const serialized = params.toString();
  url.search = serialized ? `?${serialized}` : '';
}

function serializeQueryValue(value: unknown): string {
  if (typeof value === 'string') {
    return value;
  }
  if (typeof value === 'number' || typeof value === 'boolean' || typeof value === 'bigint') {
    return value.toString();
  }
  if (value instanceof Date) {
    return value.toISOString();
  }
  return JSON.stringify(value);
}
