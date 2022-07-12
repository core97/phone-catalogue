import { AppError } from 'server/shared/app-error';
import { CLIENT_ERROR_CODE } from 'server/common/errors/client-errors';

export class InvalidParams extends AppError {
  constructor(message?: string) {
    const defaultMessage = 'Invalid params';
    super(message || defaultMessage, CLIENT_ERROR_CODE.INVALID_PARAMS);
  }
}
