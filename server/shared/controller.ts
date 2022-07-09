import { NextApiResponse, NextApiRequest } from 'next';
import { injectable } from 'inversify';
import {
  INTERNAL_ERROR_MSG,
  CLIENT_ERROR_MESSAGE,
} from 'server/shared/constants';

@injectable()
export abstract class Controller {
  protected abstract executeImpl(
    req: NextApiRequest,
    res: NextApiResponse
  ): void | any;

  public async execute(
    req: NextApiRequest,
    res: NextApiResponse
  ): Promise<void> {
    try {
      await this.executeImpl(req, res);
    } catch (error) {
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

  protected jsonResponse(res: NextApiResponse, code: number, message: string) {
    return res.status(code).json({ message });
  }

  protected ok<T>(res: NextApiResponse, dto?: T) {
    if (dto) {
      return res.status(200).json(dto);
    }

    return res.status(200).end();
  }

  protected created(res: NextApiResponse) {
    return res.status(201).end();
  }

  protected clientError(res: NextApiResponse, message?: string) {
    return this.jsonResponse(
      res,
      400,
      message || CLIENT_ERROR_MESSAGE.BAD_REQUEST
    );
  }

  protected unauthorized(res: NextApiResponse, message?: string) {
    return this.jsonResponse(
      res,
      401,
      message || CLIENT_ERROR_MESSAGE.UNAUTHORIZATED
    );
  }

  protected forbidden(res: NextApiResponse, message?: string) {
    return this.jsonResponse(
      res,
      403,
      message || CLIENT_ERROR_MESSAGE.FORBIDDEN
    );
  }

  protected notFound(res: NextApiResponse, message?: string) {
    return this.jsonResponse(
      res,
      404,
      message || CLIENT_ERROR_MESSAGE.NOT_FOUND
    );
  }

  protected conflict(res: NextApiResponse, message?: string) {
    return this.jsonResponse(
      res,
      409,
      message || CLIENT_ERROR_MESSAGE.CONFLICT
    );
  }

  protected invalidParams(res: NextApiResponse, message?: string) {
    return this.jsonResponse(
      res,
      422,
      message || CLIENT_ERROR_MESSAGE.UNPROCESSABLE_ENTITY
    );
  }

  protected tooManyRequests(res: NextApiResponse, message?: string) {
    return this.jsonResponse(
      res,
      429,
      message || CLIENT_ERROR_MESSAGE.TOO_MANY_REQUEST
    );
  }

  protected fail(res: NextApiResponse, error?: Error | string) {
    return res.status(500).json({
      ...(error && { message: error.toString() }),
    });
  }
}
