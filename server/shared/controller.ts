import { injectable } from 'inversify';
import type { NextApiResponse, NextApiRequest } from 'next';

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
    } catch (err) {
      console.error(`[controller]: an unexpected error occurred in ${req.url}.`);
      console.error(err);
      this.fail(res, 'An unexpected error occurred');
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
    return this.jsonResponse(res, 400, message || 'Bad requests');
  }

  protected unauthorized(res: NextApiResponse, message?: string) {
    return this.jsonResponse(res, 401, message || 'Unauthorized');
  }

  protected forbidden(res: NextApiResponse, message?: string) {
    return this.jsonResponse(res, 403, message || 'Forbidden');
  }

  protected notFound(res: NextApiResponse, message?: string) {
    return this.jsonResponse(res, 404, message || 'Not found');
  }

  protected conflict(res: NextApiResponse, message?: string) {
    return this.jsonResponse(res, 409, message || 'Conflict');
  }

  protected invalidParams(res: NextApiResponse, message?: string) {
    return this.jsonResponse(res, 422, message || 'Unprocessable entity');
  }

  protected tooManyRequests(res: NextApiResponse, message?: string) {
    return this.jsonResponse(res, 429, message || 'Too many requests');
  }

  protected fail(res: NextApiResponse, error: Error | string) {
    return res.status(500).json({
      message: error.toString(),
    });
  }
}
