export interface ProblemDetails {
  readonly type: string;
  readonly title: string;
  readonly status: number;
  readonly detail?: string;
  readonly errors?: unknown;
  readonly extensions?: Record<string, unknown>;
}

export class NimbusError extends Error {
  constructor(message: string) {
    super(message);
    this.name = new.target.name;
  }
}

export class AuthError extends NimbusError {}

export class TransportError extends NimbusError {}

export class UnexpectedStatusError extends NimbusError {
  constructor(
    public readonly operation: string,
    public readonly status: number
  ) {
    super(`Unexpected status ${status} for operation ${operation}`);
  }
}

export class InvalidPathError extends NimbusError {
  constructor(public readonly segment: string) {
    super(`Missing path parameter: ${segment}`);
  }
}

export class OperationTimeoutError extends NimbusError {
  constructor(
    public readonly operationId: string,
    public readonly attempts: number
  ) {
    super(`Operation ${operationId} timed out after ${attempts} polls`);
  }
}

export class ProblemDetailsError extends NimbusError {
  constructor(public readonly problem: ProblemDetails) {
    super(`${problem.title} (${problem.status})`);
  }
}
