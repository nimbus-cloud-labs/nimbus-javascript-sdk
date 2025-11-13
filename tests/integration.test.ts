import { beforeEach, describe, expect, it } from 'vitest';
import {
  NimbusClient,
  OperationHandle,
  OperationStatusClient,
  ProblemDetailsError,
  SdkHttpMethod,
  StaticTokenProvider,
  Transport,
  TransportRequest,
  TransportResponse
} from '@nimbus-cloud/sdk-core';
import { ComputeServiceClient } from '../packages/compute/src';
import { IamServiceClient } from '../packages/iam/src';

interface RecordedRequest {
  method: SdkHttpMethod;
  path: string;
  headers: Record<string, string>;
  body?: unknown;
}

let backend: MockBackend;

describe('TypeScript SDK end-to-end surface', () => {
  beforeEach(() => {
    backend = new MockBackend();
  });

  it('invokes IAM operations with auth and JSON payloads', async () => {
    const client = IamServiceClient.fromConfig(buildConfig());
    const result = await client.assumeRole({ role: 'admin', session: 'default' });
    expect(result).toEqual({ principal: 'test-principal' });

    const assumeCall = backend.requests.find((req) => req.path === '/assume-role');
    expect(assumeCall?.headers.authorization).toBe('Bearer integration-token');
  });

  it('streams paginated results with AsyncIterable paginator', async () => {
    const compute = ComputeServiceClient.fromConfig(buildConfig());
    const networks: unknown[] = [];
    for await (const page of compute.paginateListNetworks()) {
      networks.push(page);
    }
    expect(networks).toHaveLength(2);
    expect(networks[0]).toEqual({ page: 1 });
    expect(networks[1]).toEqual({ page: 2 });

    const secondCall = backend.requests.filter((req) => req.path === '/networks')[1];
    expect(secondCall?.headers.range).toBe('cursor:page-two');
  });

  it('waits for long-running operations using LRO helpers', async () => {
    const poller = new StubOperationStatusClient([
      { id: 'op-123', status: 'pending' },
      { id: 'op-123', status: 'succeeded' }
    ]);
    const compute = ComputeServiceClient.fromConfig(buildConfig({ lro: poller }));
    const handle = await compute.createVmAndWait({ name: 'vm-1' });
    expect(handle.status).toBe('succeeded');
    expect(backend.state.lastIdempotencyKey).toBeDefined();
  });

  it('wraps RFC7807 errors as ProblemDetailsError instances', async () => {
    const client = IamServiceClient.fromConfig(buildConfig());
    let captured: ProblemDetailsError | undefined;
    await expect(
      client.emitToken({ urn: 'urn:test', typ: 'jwt' }).catch((error) => {
        captured = error as ProblemDetailsError;
        throw error;
      })
    ).rejects.toBeInstanceOf(ProblemDetailsError);
    expect(captured?.problem.status).toBe(429);
    expect(captured?.problem.title).toBe('Rate limited');
  });
});

function buildConfig(overrides?: { lro?: OperationStatusClient }) {
  const builder = NimbusClient.builder()
    .withTransport(backend)
    .withAuth(new StaticTokenProvider('integration-token'));
  if (overrides?.lro) {
    builder.withLroClient(overrides.lro);
  }
  return builder.build();
}

class StubOperationStatusClient implements OperationStatusClient {
  private readonly states: OperationHandle[];
  private index = 0;

  constructor(states: OperationHandle[]) {
    this.states = states;
  }

  poll(handle: OperationHandle): Promise<OperationHandle> {
    const result = this.states[Math.min(this.index, this.states.length - 1)] ?? handle;
    this.index += 1;
    return Promise.resolve(result);
  }
}

class MockBackend implements Transport {
  readonly requests: RecordedRequest[] = [];
  readonly state: { networkCalls: number; lastIdempotencyKey?: string } = { networkCalls: 0 };

  execute(request: TransportRequest): Promise<TransportResponse> {
    this.requests.push({
      method: request.method,
      path: request.path,
      headers: request.headers,
      body: request.body
    });

    if (request.method === SdkHttpMethod.Post && request.path === '/assume-role') {
      return Promise.resolve(this.respond(200, { principal: 'test-principal' }));
    }

    if (request.method === SdkHttpMethod.Post && request.path === '/token') {
      return Promise.resolve({
        status: 429,
        headers: { 'content-type': 'application/problem+json' },
        body: {
          type: 'about:blank',
          title: 'Rate limited',
          status: 429,
          detail: 'Too many requests'
        }
      });
    }

    if (request.method === SdkHttpMethod.Get && request.path === '/networks') {
      const page = this.state.networkCalls;
      this.state.networkCalls += 1;
      if (page === 0) {
        return Promise.resolve({
          status: 200,
          headers: { 'content-range': 'cursor:page-two' },
          body: { page: 1 }
        });
      }
      return Promise.resolve(this.respond(206, { page: 2 }));
    }

    if (request.method === SdkHttpMethod.Post && request.path === '/vms') {
      this.state.lastIdempotencyKey = request.headers['idempotency-key'];
      return Promise.resolve(this.respond(202, { id: 'op-123', status: 'pending' }));
    }

    return Promise.reject(new Error(`Unhandled request ${request.method} ${request.path}`));
  }

  private respond(status: number, body: unknown, headers: Record<string, string> = {}): TransportResponse {
    return { status, headers, body };
  }
}
