import { CLIENT_ERROR_CODE } from 'server/common/errors/client-errors';

export class AppError extends Error {
  public readonly code: CLIENT_ERROR_CODE;

  constructor(message: string, code: CLIENT_ERROR_CODE) {
    super(message);
    this.code = code;
  }
}
