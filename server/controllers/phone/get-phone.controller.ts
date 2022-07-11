import { NextApiRequest, NextApiResponse } from 'next';
import Joi from 'joi';
import { inject, injectable } from 'inversify';
import { Controller } from 'server/shared/controller';
import { PhoneService } from 'server/models/entities/phone/phone.service';
import { Phone } from 'server/models/entities/phone/phone.entity';
import { TYPES } from 'server/shared/container-types';
import { regexValidators } from 'utils/regex';

@injectable()
export class GetPhoneController extends Controller {
  constructor(@inject(TYPES.PhoneService) private phoneService: PhoneService) {
    super();
  }

  protected async executeImpl(req: NextApiRequest, res: NextApiResponse) {
    const queryValidator = Joi.object({
      id: Joi.string().pattern(regexValidators.objectId).required(),
    });

    const { error, warning } = queryValidator.validate(req.query);
    
    if (error || warning) {
      return this.invalidParams(res);
    }

    const phone = await this.phoneService.getPhone(req.query.id as string);

    return this.ok<Phone>(res, phone);
  }
}
