import { ObjectSchema } from 'joi';
import { NextApiResponse, NextApiRequest } from 'next';
import { injectable, unmanaged } from 'inversify';
import { CLIENT_ERROR_TO_HTTP_STATUS } from 'server/common/errors/client-errors';
import { INTERNAL_ERROR_MSG } from 'server/common/errors/error-messages';
import { HttpStatus } from 'server/common/http-status';
import { validateRequest } from 'server/common/helpers/validate-request.helper';
import { AppError } from 'server/shared/app-error';

@injectable()
export abstract class Controller {
  querySchema?: ObjectSchema;

  bodySchema?: ObjectSchema;

  constructor(
    @unmanaged()
    args: { bodySchema?: ObjectSchema; querySchema?: ObjectSchema } = {}
  ) {
    Object.assign(this, args);
  }

  protected abstract executeImpl(
    req: NextApiRequest,
    res: NextApiResponse
  ): Promise<void | NextApiResponse>;

  public async execute(
    req: NextApiRequest,
    res: NextApiResponse
  ): Promise<void> {
    try {
      if (this.bodySchema || this.querySchema) {
        const { bodySchema, querySchema } = this;
        validateRequest({
          req,
          ...(bodySchema && { bodySchema }),
          ...(querySchema && { querySchema }),
        });
      }

      await this.executeImpl(req, res);
    } catch (error) {
      if (error instanceof AppError) {
        const httpStatus = CLIENT_ERROR_TO_HTTP_STATUS[error.code];
        this.jsonResponse(res, httpStatus, error.message);
        return;
      }

      console.error(
        INTERNAL_ERROR_MSG.UNEXPECTED_ERROR_CONTROLLER({
          error,
          method: req.method,
          url: req.url,
        })
      );

      this.fail(res);
    }
  }

  protected jsonResponse(
    res: NextApiResponse,
    code: HttpStatus,
    message?: string
  ) {
    if (message) {
      return res.status(code).json({ message });
    }

    return res.status(code).end();
  }

  protected ok<T>(res: NextApiResponse, dto?: T) {
    if (dto) {
      return res.status(HttpStatus.OK).json(dto);
    }

    return res.status(HttpStatus.OK).end();
  }

  protected created(res: NextApiResponse) {
    return res.status(HttpStatus.CREATED).end();
  }

  protected clientError(res: NextApiResponse, message?: string) {
    return this.jsonResponse(res, HttpStatus.BAD_REQUEST, message);
  }

  protected unauthorized(res: NextApiResponse, message?: string) {
    return this.jsonResponse(res, HttpStatus.UNAUTHORIZATED, message);
  }

  protected forbidden(res: NextApiResponse, message?: string) {
    return this.jsonResponse(res, HttpStatus.FORBIDDEN, message);
  }

  protected notFound(res: NextApiResponse, message?: string) {
    return this.jsonResponse(res, HttpStatus.NOT_FOUND, message);
  }

  protected conflict(res: NextApiResponse, message?: string) {
    return this.jsonResponse(res, HttpStatus.CONFLICT, message);
  }

  protected invalidParams(res: NextApiResponse, message?: string) {
    return this.jsonResponse(res, HttpStatus.UNPROCESSABLE_ENTITY, message);
  }

  protected fail(res: NextApiResponse, error?: Error | string) {
    return res.status(HttpStatus.INTERNAL_ERROR).json({
      ...(error && { message: error.toString() }),
    });
  }
}
