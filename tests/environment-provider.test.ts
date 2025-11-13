import { Buffer } from 'node:buffer';

import { afterEach, describe, expect, it } from 'vitest';

import type { Transport, TransportRequest, TransportResponse } from '@nimbus-cloud/sdk-core';
import { AuthError, BuildError, EnvironmentCredentialProvider, NimbusClient } from '@nimbus-cloud/sdk-core';

const ACCESS_KEY = 'ABCDEFGHIJKLMNOPQRST';
const SECRET_KEY = 'abcdEFGHijklMNOPqrstUVWXyz0123456789ABCDabcd';
const REGION = 'eu-north-2';

describe('EnvironmentCredentialProvider', () => {
  it('prefers profile-scoped credentials and falls back to session tokens', async () => {
    const session = Buffer.from(JSON.stringify({ token: 'demo' }), 'utf8').toString('base64');
    const provider = new EnvironmentCredentialProvider({
      env: {
        NIMBUS_PROFILE: 'analytics',
        NIMBUS_PROFILE_ANALYTICS_ACCESS_KEY: ACCESS_KEY,
        NIMBUS_PROFILE_ANALYTICS_SECRET_KEY: SECRET_KEY,
        NIMBUS_PROFILE_ANALYTICS_REGION: REGION,
        NIMBUS_PROFILE_ANALYTICS_SESSION_TOKEN: session
      }
    });

    await expect(provider.authorizationHeader()).resolves.toBe(`Bearer ${session}`);
  });

  it('falls back to global credentials when scoped variables are missing', async () => {
    const provider = new EnvironmentCredentialProvider({
      env: {
        NIMBUS_PROFILE: 'analytics',
        NIMBUS_ACCESS_KEY: ACCESS_KEY,
        NIMBUS_SECRET_KEY: SECRET_KEY,
        NIMBUS_REGION: REGION
      }
    });

    const expected = Buffer.from(`${ACCESS_KEY}:${SECRET_KEY}`, 'utf8').toString('base64');
    await expect(provider.authorizationHeader()).resolves.toBe(`Basic ${expected}`);
  });

  it('fails when required variables are missing', async () => {
    const provider = new EnvironmentCredentialProvider({
      env: {
        NIMBUS_ACCESS_KEY: ACCESS_KEY,
        NIMBUS_REGION: REGION
      }
    });

    await expect(provider.authorizationHeader()).rejects.toBeInstanceOf(AuthError);
  });

  it('errors when a session token is not valid Base64 JSON', async () => {
    const provider = new EnvironmentCredentialProvider({
      env: {
        NIMBUS_ACCESS_KEY: ACCESS_KEY,
        NIMBUS_SECRET_KEY: SECRET_KEY,
        NIMBUS_REGION: REGION,
        NIMBUS_SESSION_TOKEN: '!!!invalid-token!!!'
      }
    });

    await expect(provider.authorizationHeader()).rejects.toBeInstanceOf(AuthError);
  });
});

describe('SdkConfigBuilder', () => {
  const originalValues = new Map<string, string | undefined>();

  afterEach(() => {
    for (const [key, value] of originalValues.entries()) {
      if (value === undefined) {
        delete process.env[key];
      } else {
        process.env[key] = value;
      }
    }
    originalValues.clear();
  });

  it('uses the environment provider by default', async () => {
    setEnv({
      NIMBUS_ACCESS_KEY: ACCESS_KEY,
      NIMBUS_SECRET_KEY: SECRET_KEY,
      NIMBUS_REGION: REGION
    });

    const config = NimbusClient.builder().withTransport(new NullTransport()).build();
    const header = await config.auth.authorizationHeader();
    const expected = Buffer.from(`${ACCESS_KEY}:${SECRET_KEY}`, 'utf8').toString('base64');
    expect(header).toBe(`Basic ${expected}`);
  });

  it('allows disabling the default environment provider', () => {
    setEnv({
      NIMBUS_ACCESS_KEY: ACCESS_KEY,
      NIMBUS_SECRET_KEY: SECRET_KEY,
      NIMBUS_REGION: REGION
    });

    expect(() =>
      NimbusClient.builder().withTransport(new NullTransport()).disableEnvProvider().build()
    ).toThrow(BuildError);
  });

  function setEnv(values: Record<string, string>): void {
    for (const [key, value] of Object.entries(values)) {
      if (!originalValues.has(key)) {
        originalValues.set(key, process.env[key]);
      }
      process.env[key] = value;
    }
  }
});

class NullTransport implements Transport {
  execute(request: TransportRequest): Promise<TransportResponse> {
    return Promise.reject(
      new Error(`transport should not be invoked (${request.method} ${request.path})`)
    );
  }
}
