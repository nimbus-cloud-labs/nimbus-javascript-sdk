# Nimbus TypeScript SDK

Generated service clients that mirror the Rust SDK feature set. Run `npm run gen`
after adding or updating Smithy models to refresh the per-service packages under
`packages/`.

## Credential environment variables
The JavaScript runtime loader resolves credentials from the environment using
the `NIMBUS_` keys described in
[`docs/sdk/glossary.md`](../../docs/sdk/glossary.md#credential-environment-variables).
By default the loader inspects the unsuffixed variables (for example,
`NIMBUS_ACCESS_KEY`) and falls back to profile-specific variants such as
`NIMBUS_SECRET_KEY_ANALYTICS` when the consuming client selects a profile.

Add credentials to a `.env` file when using tools like `npm run gen`:

```dotenv
# Default profile
NIMBUS_ACCESS_KEY=ZZYX1EXAMPLEKEY00001
NIMBUS_SECRET_KEY=Zm9vYmFyLXNlY3JldC1leGFtcGxlLXN0cmluZw==
NIMBUS_REGION=eu-north-2

# Profile named "analytics"
NIMBUS_ACCESS_KEY_ANALYTICS=QQQ45ANALYTICSPROFILE
NIMBUS_SECRET_KEY_ANALYTICS=YW5hbHl0aWNzLXNlY3JldC1iYXNlNjQ=
NIMBUS_REGION_ANALYTICS=ap-south-3
```

Use the optional `credentialPrefix` option (or the `NIMBUS_CREDENTIAL_PREFIX`
environment variable) to replace the `NIMBUS_` prefix when working alongside
other cloud providers. The suffix validation and required base keys remain the
same as documented in the glossary.

When troubleshooting credential resolution, refer to the
[glossary troubleshooting notes](../../docs/sdk/glossary.md#troubleshooting).
The [credential provider precedence overview](../../docs/sdk/credential-provider-strategy.md#credential-provider-precedence)
collects the shared diagram and comparison tables for overrides, caching, and error handling across SDKs.

## Runtime helpers
The core runtime exports lightweight utilities under `@nimbus-cloud/sdk-core` that work across
Node.js and browser contexts. Use `encodeBase64` and `decodeBase64Json` from
`packages/core/src/runtime/base64.ts` whenever a feature needs Base64 handling so that
credentials, payload tokens, and similar artifacts do not depend on Node-specific globals.

## Build targets
Tsup emits both ESM and CJS bundles targeting `es2022` with the `platform` set to `neutral`,
which keeps the generated code portable across runtimes. The SDK packages do not expose a
dedicated `"browser"` entry today because every bundle is already universal; add one only if
future Node-only optimizations require separate files.

## Static access keys
Applications can supply access key credentials directly, bypassing environment loading:

```ts
import { NimbusClient, StaticKeyCredentialProvider } from '@nimbus-cloud/sdk-core';

const config = NimbusClient.builder()
  .endpoint('https://api.nimbus.eu')
  .withAuth(
    new StaticKeyCredentialProvider({
      accessKey: 'ZZYX1EXAMPLEKEY00001',
      secretKey: 'Zm9vYmFyLXNlY3JldC1leGFtcGxlLXN0cmluZw=='
    })
  )
  .build();
```

## Instance metadata credentials

Code deployed on Nimbus compute instances should call the metadata service
outlined in [`docs/compute/metadata-service.md`](../../docs/compute/metadata-service.md)
when it needs managed, short-lived credentials. The specification documents the
mandatory headers, token TTL ceiling, allowed source networks, and per-instance
rate limits. The TypeScript credential provider wraps these constraints with the
standard retry and refresh logic exposed by the SDK runtime.
