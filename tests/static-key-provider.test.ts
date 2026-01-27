import { describe, expect, it } from 'vitest';

import { AuthError, StaticKeyCredentialProvider, encodeBase64 } from '@nimbus-cloud/sdk-core';

const ACCESS_KEY = '0123456789ABCDEFGHJKMNPQRS';
const SECRET_KEY = 'abcdEFGHijklMNOPqrstUVWXyz0123456789ABCDabcd';

describe('StaticKeyCredentialProvider', () => {
  it('uses basic auth when no session token is provided', async () => {
    const provider = new StaticKeyCredentialProvider({
      accessKey: ACCESS_KEY,
      secretKey: SECRET_KEY
    });

    const header = await provider.authorizationHeader();
    const expected = encodeBase64(`${ACCESS_KEY}:${SECRET_KEY}`);
    expect(header).toBe(`Basic ${expected}`);
  });

  it('uses bearer auth when a session token is provided', async () => {
    const sessionToken = encodeBase64(JSON.stringify({ token: 'demo' }));
    const provider = new StaticKeyCredentialProvider({
      accessKey: ACCESS_KEY,
      secretKey: SECRET_KEY,
      sessionToken
    });

    await expect(provider.authorizationHeader()).resolves.toBe(`Bearer ${sessionToken}`);
  });

  it('throws when access key validation fails', () => {
    expect(
      () =>
        new StaticKeyCredentialProvider({
          accessKey: 'invalid',
          secretKey: SECRET_KEY
        })
    ).toThrow(AuthError);
  });
});
