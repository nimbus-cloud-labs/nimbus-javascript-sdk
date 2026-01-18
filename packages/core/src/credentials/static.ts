import type { AuthTokenProvider } from '../auth';
import { AuthError } from '../errors';
import { decodeBase64Json, encodeBase64 } from '../runtime/base64';

const ACCESS_KEY_REGEX = /^[A-Z0-9]{20}$/;
const SECRET_KEY_REGEX = /^[A-Za-z0-9_-]{44}$/;

export interface StaticKeyCredentialProviderOptions {
  accessKey: string;
  secretKey: string;
  sessionToken?: string;
}

export class StaticKeyCredentialProvider implements AuthTokenProvider {
  private readonly accessKey: string;
  private readonly secretKey: string;
  private readonly sessionToken?: string;

  constructor(options: StaticKeyCredentialProviderOptions) {
    const { accessKey, secretKey, sessionToken } = options;
    if (!ACCESS_KEY_REGEX.test(accessKey)) {
      throw new AuthError('Access key must be 20 uppercase alphanumeric characters.');
    }
    if (!SECRET_KEY_REGEX.test(secretKey)) {
      throw new AuthError('Secret key must be a 44-character URL-safe Base64 string without padding.');
    }
    if (sessionToken !== undefined) {
      if (sessionToken.length > 512) {
        throw new AuthError('Session token exceeds 512 characters.');
      }
      try {
        decodeBase64Json(sessionToken);
      } catch (error) {
        const reason = error instanceof Error ? error.message : String(error);
        throw new AuthError(`Session token must be Base64-encoded JSON (${reason}).`);
      }
    }
    this.accessKey = accessKey;
    this.secretKey = secretKey;
    this.sessionToken = sessionToken;
  }

  authorizationHeader(): Promise<string> {
    if (this.sessionToken) {
      return Promise.resolve(`Bearer ${this.sessionToken}`);
    }
    const raw = `${this.accessKey}:${this.secretKey}`;
    return Promise.resolve(`Basic ${encodeBase64(raw)}`);
  }
}
