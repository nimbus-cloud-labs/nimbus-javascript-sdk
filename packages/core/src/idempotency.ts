import { randomUuid } from './runtime/random';

export interface IdempotencyTokenProvider {
  nextToken(): string;
}

export class DefaultIdempotencyTokenProvider implements IdempotencyTokenProvider {
  nextToken(): string {
    return randomUuid();
  }
}

export function defaultIdempotencyProvider(): IdempotencyTokenProvider {
  return new DefaultIdempotencyTokenProvider();
}
