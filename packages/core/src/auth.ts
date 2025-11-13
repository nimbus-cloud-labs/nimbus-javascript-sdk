import { AuthError } from './errors';

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
