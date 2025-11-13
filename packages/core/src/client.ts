import { AuthTokenProvider, defaultAuthChain } from './auth';
import { defaultIdempotencyProvider, IdempotencyTokenProvider } from './idempotency';
import { LroWaiter, NoopOperationStatusClient, OperationStatusClient } from './lro';
import { Paginator } from './paginator';
import {
  InvalidPathError,
  ProblemDetails,
  ProblemDetailsError,
  UnexpectedStatusError
} from './errors';
import { FetchTransport, SdkHttpMethod, Transport, TransportRequest } from './transport';

export interface AdditionalSuccessResponseSpec {
  code: number;
  hasBody: boolean;
}

export interface PaginationSpec {
  requestHeader: string;
  responseHeader: string;
}

export interface OperationSpec {
  name: string;
  method: SdkHttpMethod;
  uri: string;
  successCode: number;
  additionalSuccessResponses: AdditionalSuccessResponseSpec[];
  idempotent: boolean;
  pagination?: PaginationSpec;
  lro: boolean;
}

export interface OperationResult<T = unknown> {
  status: number;
  body: T;
  nextCursor?: string;
}

export interface SdkConfig {
  transport: Transport;
  auth: AuthTokenProvider;
  idempotency: IdempotencyTokenProvider;
  lro: OperationStatusClient;
}

export class BuildError extends Error {}

export class SdkConfigBuilder {
  private endpointUrl?: string;
  private transport?: Transport;
  private auth?: AuthTokenProvider;
  private idempotency?: IdempotencyTokenProvider;
  private lro?: OperationStatusClient;
  private envProviderDisabled = false;

  endpoint(url: string): this {
    this.endpointUrl = url;
    return this;
  }

  withTransport(transport: Transport): this {
    this.transport = transport;
    return this;
  }

  withAuth(provider: AuthTokenProvider): this {
    this.auth = provider;
    return this;
  }

  withIdempotency(provider: IdempotencyTokenProvider): this {
    this.idempotency = provider;
    return this;
  }

  withLroClient(client: OperationStatusClient): this {
    this.lro = client;
    return this;
  }

  disableEnvProvider(disable = true): this {
    this.envProviderDisabled = disable;
    return this;
  }

  build(): SdkConfig {
    const auth = this.auth ?? this.buildDefaultAuthProvider();
    if (!auth) {
      throw new BuildError('Auth provider is required');
    }

    const transport = this.transport ?? this.buildTransport();
    if (!transport) {
      throw new BuildError('Either endpoint or transport must be provided');
    }

    return {
      transport,
      auth,
      idempotency: this.idempotency ?? defaultIdempotencyProvider(),
      lro: this.lro ?? new NoopOperationStatusClient()
    };
  }

  private buildTransport(): Transport | undefined {
    if (!this.endpointUrl) {
      return undefined;
    }
    return new FetchTransport(this.endpointUrl);
  }

  private buildDefaultAuthProvider(): AuthTokenProvider | undefined {
    if (this.envProviderDisabled) {
      return undefined;
    }
    return defaultAuthChain();
  }
}

export class NimbusClient {
  constructor(private readonly config: SdkConfig) {}

  static builder(): SdkConfigBuilder {
    return new SdkConfigBuilder();
  }

  async invoke<T = unknown>(
    spec: OperationSpec,
    pathParams: Array<[string, string]>,
    body?: unknown,
    cursor?: string
  ): Promise<OperationResult<T>> {
    const path = this.renderPath(spec.uri, pathParams);
    const headers: Record<string, string> = {};

    if (spec.idempotent) {
      headers['idempotency-key'] = this.config.idempotency.nextToken();
    }

    if (cursor && spec.pagination) {
      headers[spec.pagination.requestHeader.toLowerCase()] = cursor;
    }

    const authHeader = await this.config.auth.authorizationHeader();
    headers.authorization = authHeader;

    const request: TransportRequest = {
      method: spec.method,
      path,
      headers,
      body
    };

    const response = await this.config.transport.execute(request);
    const acceptable = this.acceptedStatus(spec, response.status);
    if (!acceptable) {
      const problem = asProblemDetails(response.body);
      if (problem) {
        throw new ProblemDetailsError(problem);
      }
      throw new UnexpectedStatusError(spec.name, response.status);
    }

    const nextCursor = spec.pagination
      ? response.headers[spec.pagination.responseHeader.toLowerCase()]
      : undefined;

    return {
      status: response.status,
      body: response.body as T,
      nextCursor
    };
  }

  paginator<T>(spec: OperationSpec, pathParams: Array<[string, string]>): Paginator<T> {
    return new Paginator<T>(this, spec, pathParams);
  }

  waiter(): LroWaiter {
    return new LroWaiter(this.config.lro);
  }

  deserialize<T>(value: unknown): T {
    return value as T;
  }

  private renderPath(template: string, pathParams: Array<[string, string]>): string {
    const provided = new Map(pathParams);
    return template.replace(/\{([^}]+)\}/g, (_, raw: string) => {
      const greedy = raw.startsWith('*');
      const key = greedy ? raw.slice(1) : raw;
      const value = provided.get(key);
      if (value === undefined) {
        throw new InvalidPathError(key);
      }
      return greedy ? value : encodeURIComponent(value);
    });
  }

  private acceptedStatus(spec: OperationSpec, status: number): boolean {
    if (spec.successCode === status) {
      return true;
    }
    return spec.additionalSuccessResponses.some((response) => response.code === status);
  }
}

function asProblemDetails(value: unknown): ProblemDetails | undefined {
  if (
    value &&
    typeof value === 'object' &&
    'type' in value &&
    'title' in value &&
    'status' in value
  ) {
    const problem = value as ProblemDetails;
    if (typeof problem.type === 'string' && typeof problem.title === 'string') {
      return problem;
    }
  }
  return undefined;
}

export { SdkHttpMethod } from './transport';
