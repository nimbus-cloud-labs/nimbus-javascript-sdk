import type { AuthTokenProvider } from '../auth';
import { AuthError } from '../errors';
import { decodeBase64Json, encodeBase64 } from '../runtime/base64';

const PROFILE_ENV = 'NIMBUS_PROFILE';
const PROFILE_PREFIX = 'NIMBUS_PROFILE';
const GLOBAL_PREFIX = 'NIMBUS';
const ACCESS_KEY = 'ACCESS_KEY';
const SECRET_KEY = 'SECRET_KEY';
const REGION_KEY = 'REGION';
const SESSION_TOKEN_KEY = 'SESSION_TOKEN';
const ACCESS_KEY_REGEX = /^[A-Z0-9]{20}$/;
const SECRET_KEY_REGEX = /^[A-Za-z0-9_-]{44}$/;
const REGION_REGEX = /^[a-z]+-[a-z]+-[0-9]{1,2}$/;

type Logger = (message: string, context?: Record<string, unknown>) => void;

const defaultLogger: Logger = (message, context) => {
  if (typeof console?.debug !== 'function') {
    return;
  }
  if (context) {
    console.debug(`[nimbus-sdk:auth] ${message}`, context);
  } else {
    console.debug(`[nimbus-sdk:auth] ${message}`);
  }
};

export interface EnvironmentCredentialProviderOptions {
  env?: Record<string, string | undefined>;
  logger?: Logger;
}

interface CredentialScope {
  type: 'profile' | 'global';
  profile?: string;
}

interface Credentials {
  scope: CredentialScope;
  accessKey: string;
  secretKey: string;
  region: string;
  sessionToken?: string;
}

export class EnvironmentCredentialProvider implements AuthTokenProvider {
  private readonly env: Record<string, string | undefined>;
  private readonly logger: Logger;

  constructor(options: EnvironmentCredentialProviderOptions = {}) {
    this.env = options.env ?? process.env;
    this.logger = options.logger ?? defaultLogger;
  }

  authorizationHeader(): Promise<string> {
    try {
      const scope = this.resolveScope();
      this.logger('Attempting to resolve credentials from environment', {
        scope: describeScope(scope)
      });
      const credentials = this.loadCredentials(scope);
      if (credentials.sessionToken) {
        this.logger('Using session token for authorization header', {
          scope: describeScope(scope),
          hasSessionToken: true
        });
        return Promise.resolve(`Bearer ${credentials.sessionToken}`);
      }
      const raw = `${credentials.accessKey}:${credentials.secretKey}`;
      const encoded = encodeBase64(raw);
      this.logger('Using static access/secret key pair for authorization header', {
        scope: describeScope(scope),
        accessKey: redact(credentials.accessKey)
      });
      return Promise.resolve(`Basic ${encoded}`);
    } catch (error) {
      return Promise.reject(error as Error);
    }
  }

  private resolveScope(): CredentialScope {
    const profile = (this.env[PROFILE_ENV] ?? '').trim();
    if (!profile) {
      return { type: 'global' };
    }
    const normalized = profile.toUpperCase();
    if (!/^[A-Z0-9_]{1,16}$/.test(normalized)) {
      throw new AuthError(
        `Profile "${profile}" is invalid. Expected 1-16 characters matching [A-Z0-9_].`
      );
    }
    return { type: 'profile', profile: normalized };
  }

  private loadCredentials(scope: CredentialScope): Credentials {
    const accessKey = this.readRequired(scope, ACCESS_KEY, validateAccessKey);
    const secretKey = this.readRequired(scope, SECRET_KEY, validateSecretKey);
    const region = this.readRequired(scope, REGION_KEY, validateRegion);
    const sessionToken = this.readOptionalSessionToken(scope);

    this.logger('Successfully loaded credentials from environment', {
      scope: describeScope(scope),
      accessKey: redact(accessKey),
      region,
      hasSessionToken: Boolean(sessionToken)
    });

    return {
      scope,
      accessKey,
      secretKey,
      region,
      sessionToken
    };
  }

  private readRequired(
    scope: CredentialScope,
    suffix: string,
    validator: (value: string) => void
  ): string {
    const candidates = this.candidateKeys(scope, suffix);
    for (const key of candidates) {
      const value = this.env[key];
      if (value && value.trim()) {
        const trimmed = value.trim();
        try {
          validator(trimmed);
        } catch (error) {
          const reason = error instanceof Error ? error.message : String(error);
          this.logger('Environment variable failed validation', { key, reason });
          throw new AuthError(`Environment variable ${key} is invalid: ${reason}`);
        }
        if (key !== candidates[0]) {
          this.logger('Falling back to global credential after profile lookup', { key });
        }
        return trimmed;
      }
    }
    this.logger('Required environment variable missing', { keys: candidates });
    throw new AuthError(`Missing environment variable. Expected one of: ${candidates.join(', ')}`);
  }

  private readOptionalSessionToken(scope: CredentialScope): string | undefined {
    const candidates = this.candidateKeys(scope, SESSION_TOKEN_KEY);
    for (const key of candidates) {
      const value = this.env[key];
      if (!value || !value.trim()) {
        continue;
      }
      const trimmed = value.trim();
      if (trimmed.length > 512) {
        throw new AuthError(`Environment variable ${key} exceeds 512 characters.`);
      }
      try {
        decodeBase64Json(trimmed);
      } catch (error) {
        const reason = error instanceof Error ? error.message : String(error);
        throw new AuthError(
          `Environment variable ${key} must be Base64-encoded JSON (${reason}).`
        );
      }
      return trimmed;
    }
    return undefined;
  }

  private candidateKeys(scope: CredentialScope, suffix: string): string[] {
    const keys: string[] = [];
    if (scope.type === 'profile' && scope.profile) {
      keys.push(`${PROFILE_PREFIX}_${scope.profile}_${suffix}`);
    }
    keys.push(`${GLOBAL_PREFIX}_${suffix}`);
    return keys;
  }
}

function validateAccessKey(value: string): void {
  if (!ACCESS_KEY_REGEX.test(value)) {
    throw new Error('Must be 20 uppercase alphanumeric characters.');
  }
}

function validateSecretKey(value: string): void {
  if (!SECRET_KEY_REGEX.test(value)) {
    throw new Error('Must be a 44-character URL-safe Base64 string without padding.');
  }
}

function validateRegion(value: string): void {
  if (!REGION_REGEX.test(value)) {
    throw new Error('Must match <prefix>-<segment>-<digits> (e.g., eu-north-2).');
  }
}

function describeScope(scope: CredentialScope): string {
  if (scope.type === 'profile' && scope.profile) {
    return `profile:${scope.profile}`;
  }
  return 'global';
}

function redact(value: string): string {
  if (!value) {
    return '***';
  }
  return `${value.slice(0, 4)}***`;
}
