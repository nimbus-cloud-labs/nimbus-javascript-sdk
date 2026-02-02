# Nimbus TypeScript SDK

Nimbus TypeScript SDK ships generated clients and a shared runtime for Node.js and browser-compatible environments. Packages mirror the Rust SDK surface and Smithy models.

## Install

```bash
npm install @nimbus-cloud/sdk-core @nimbus-cloud/iam-client
```

## Quickstart

```ts
import { NimbusClient, StaticTokenProvider } from '@nimbus-cloud/sdk-core';
import { IamServiceClient } from '@nimbus-cloud/iam-client';

const config = NimbusClient.builder()
  .endpoint('https://api.nimbuscloudplatform.com')
  .withAuth(new StaticTokenProvider('token'))
  .build();

const client = IamServiceClient.fromConfig(config);
const result = await client.emitToken({
  urn: 'urn:nimbus:iam::123',
  typ: 'access'
});

console.log(result.token);
```

## Authentication
- **Environment provider (default):** Uses `NIMBUS_*` variables from the environment.
- **Static access keys:** Provide access/secret keys directly when you do not want environment resolution.

```ts
import { NimbusClient, StaticKeyCredentialProvider } from '@nimbus-cloud/sdk-core';

const config = NimbusClient.builder()
  .endpoint('https://api.nimbuscloudplatform.com')
  .withAuth(
    new StaticKeyCredentialProvider({
      accessKey: 'ZZYX1EXAMPLEKEY00001',
      secretKey: 'Zm9vYmFyLXNlY3JldC1leGFtcGxlLXN0cmluZw=='
    })
  )
  .build();
```

## mTLS (Node.js)
Client certificates are only supported in Node.js runtimes. Provide a custom `fetch` implementation
and request init options with a TLS-enabled dispatcher.

```ts
import { Agent, fetch as undiciFetch } from 'undici';
import { NimbusClient, StaticTokenProvider } from '@nimbus-cloud/sdk-core';

const dispatcher = new Agent({
  connect: {
    cert: Buffer.from(process.env.NIMBUS_CLIENT_CERT ?? '', 'utf8'),
    key: Buffer.from(process.env.NIMBUS_CLIENT_KEY ?? '', 'utf8'),
    ca: process.env.NIMBUS_MTLS_CA ? [Buffer.from(process.env.NIMBUS_MTLS_CA, 'utf8')] : undefined
  }
});

const config = NimbusClient.builder()
  .endpoint('https://api.nimbuscloudplatform.eu')
  .withAuth(new StaticTokenProvider('token'))
  .withTransportOptions({
    fetcher: undiciFetch,
    requestInit: { dispatcher }
  })
  .build();
```

## Pagination and LRO
Paginator helpers return `AsyncIterable` streams, and long-running operations expose `.wait()` helpers.

## Development
- Regenerate clients with the bundled generator script.
- Run tests with `pnpm test`.
