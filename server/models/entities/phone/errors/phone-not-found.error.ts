import { AppError } from 'server/shared/app-error';
import { CLIENT_ERROR_CODE } from 'server/common/errors/client-errors';

export class PhoneNotFound extends AppError {
  constructor(message?: string) {
    const defaultMessage = 'Phone not found';
    super(message || defaultMessage, CLIENT_ERROR_CODE.PHONE_NOT_FOUND);
  }
}
