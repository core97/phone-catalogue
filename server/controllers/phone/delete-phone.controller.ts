import { NextApiRequest, NextApiResponse } from 'next';
import { injectable, inject } from 'inversify';
import Joi from 'joi';
import { Controller } from 'server/shared/controller';
import { PhoneService } from 'server/models/entities/phone/phone.service';
import { TYPES } from 'server/shared/container-types';
import { regexValidators } from 'utils/regex';

@injectable()
export class DeletePhoneController extends Controller {
  constructor(@inject(TYPES.PhoneService) private phoneService: PhoneService) {
    super();
  }

  protected async executeImpl(req: NextApiRequest, res: NextApiResponse<any>) {
    const queryValidator = Joi.object({
      id: Joi.string().pattern(regexValidators.objectId).required(),
    });

    const { error, warning } = queryValidator.validate(req.query);

    if (error || warning) {
      return this.invalidParams(res);
    }

    await this.phoneService.deletePhone(req.query.id as string);

    return this.ok(res);
  }
}
