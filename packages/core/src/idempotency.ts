import { randomUUID } from 'node:crypto';

export interface IdempotencyTokenProvider {
  nextToken(): string;
}

export class DefaultIdempotencyTokenProvider implements IdempotencyTokenProvider {
  nextToken(): string {
    return randomUUID();
  }
}

export function defaultIdempotencyProvider(): IdempotencyTokenProvider {
  return new DefaultIdempotencyTokenProvider();
}
