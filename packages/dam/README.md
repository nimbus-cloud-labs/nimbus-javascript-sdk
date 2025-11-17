# Nimbus DAM JavaScript SDK

This package exposes the TypeScript client for the Nimbus Digital Asset Management
service along with helper utilities for ingestion flows.

## Browser compatibility

`DamIngestionUploader` runs in both Node.js and modern browsers:

- Ingestion payloads accept `ArrayBuffer`, `ArrayBufferView`, or `Blob` values so you can
  pass raw buffers, typed arrays, or `File` objects straight from `<input>` elements.
- Checksums are computed via the shared `sha256Hex` helper from `@nimbus-cloud/sdk-core`,
  which uses `crypto.subtle.digest` when present and falls back to Node’s `createHash`
  when running outside the browser.
- Uploads rely on the standard `fetch` API rather than Node-specific HTTP clients.

Import the uploader and pair it with an authenticated `DamManagementServiceClient`
instance to send high-level ingestion requests from either environment.
