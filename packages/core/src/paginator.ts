import type { NimbusClient, OperationSpec } from './client';

export class Paginator<T> implements AsyncIterable<T> {
  constructor(
    private readonly client: NimbusClient,
    private readonly spec: OperationSpec,
    private readonly pathParams: Array<[string, string]>
  ) {}

  async *[Symbol.asyncIterator](): AsyncIterator<T> {
    let cursor: string | undefined;
    while (true) {
      const result = await this.client.invoke<T>(this.spec, this.pathParams, undefined, cursor);
      yield result.body;
      if (!result.nextCursor) {
        break;
      }
      cursor = result.nextCursor;
    }
  }
}
