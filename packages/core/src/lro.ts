import { OperationTimeoutError } from './errors';

export type OperationStatus = 'pending' | 'succeeded' | 'failed';

export interface OperationHandle {
  readonly id: string;
  readonly status: OperationStatus;
  readonly metadata?: unknown;
  readonly error?: unknown;
}

export interface OperationStatusClient {
  poll(handle: OperationHandle): Promise<OperationHandle>;
}

export class NoopOperationStatusClient implements OperationStatusClient {
  poll(handle: OperationHandle): Promise<OperationHandle> {
    return Promise.resolve(handle);
  }
}

export class LroWaiter {
  constructor(
    private readonly poller: OperationStatusClient,
    private readonly intervalMs = 2000,
    private readonly maxAttempts = 30
  ) {}

  withBackoff(intervalMs: number, maxAttempts: number): LroWaiter {
    return new LroWaiter(this.poller, intervalMs, maxAttempts);
  }

  async wait(handle: OperationHandle): Promise<OperationHandle> {
    for (let attempt = 0; attempt < this.maxAttempts; attempt += 1) {
      const next = await this.poller.poll(handle);
      if (next.status !== 'pending') {
        return next;
      }
      await new Promise((resolve) => setTimeout(resolve, this.intervalMs));
    }
    throw new OperationTimeoutError(handle.id, this.maxAttempts);
  }
}

export function noopWaiter(): LroWaiter {
  return new LroWaiter(new NoopOperationStatusClient());
}
