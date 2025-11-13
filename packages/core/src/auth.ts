import { AuthError } from './errors';
import { EnvironmentCredentialProvider } from './credentials/environment';

type Logger = (message: string, context?: Record<string, unknown>) => void;

const logDebug: Logger = (message, context) => {
  if (typeof console?.debug !== 'function') {
    return;
  }
  if (context) {
    console.debug(`[nimbus-sdk:auth] ${message}`, context);
  } else {
    console.debug(`[nimbus-sdk:auth] ${message}`);
  }
};

export interface AuthTokenProvider {
  authorizationHeader(): Promise<string>;
}

export class StaticTokenProvider implements AuthTokenProvider {
  constructor(private readonly token: string) {}

  authorizationHeader(): Promise<string> {
    if (!this.token) {
      throw new AuthError('static token is empty');
    }
    return Promise.resolve(`Bearer ${this.token}`);
  }
}

export class AuthProviderChain implements AuthTokenProvider {
  constructor(private readonly providers: AuthTokenProvider[]) {
    if (!providers.length) {
      throw new AuthError('at least one auth provider must be configured');
    }
  }

  async authorizationHeader(): Promise<string> {
    let lastError: unknown;
    for (const [index, provider] of this.providers.entries()) {
      try {
        const value = await provider.authorizationHeader();
        logDebug('Authorization header resolved via provider', { index });
        return value;
      } catch (error) {
        lastError = error;
        const reason = error instanceof Error ? error.message : String(error);
        logDebug('Auth provider failed to resolve credentials', { index, reason });
      }
    }
    if (lastError instanceof AuthError) {
      throw lastError;
    }
    throw new AuthError('no authentication providers were able to supply credentials');
  }
}

export interface DefaultAuthChainOptions {
  disableEnvProvider?: boolean;
}

export function defaultAuthChain(options?: DefaultAuthChainOptions): AuthTokenProvider {
  const providers: AuthTokenProvider[] = [];
  if (!options?.disableEnvProvider) {
    providers.push(new EnvironmentCredentialProvider());
  }

  if (!providers.length) {
    throw new AuthError('no authentication providers have been configured');
  }
  if (providers.length === 1) {
    return providers[0];
  }
  return new AuthProviderChain(providers);
}
