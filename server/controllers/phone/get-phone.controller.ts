import { NextApiRequest, NextApiResponse } from 'next';
import Joi from 'joi';
import { Controller } from 'server/shared/controller';
import { phoneService } from 'server/models/entities/phone/phone.service';
import { Phone } from 'server/models/entities/phone/phone.entity';
import { regexValidators } from 'utils/regex';

class GetPhoneController extends Controller {
  private static instance: GetPhoneController;

  public static getInstance(): GetPhoneController {
    if (!GetPhoneController.instance) {
      GetPhoneController.instance = new GetPhoneController();
    }

    return GetPhoneController.instance;
  }

  protected async executeImpl(req: NextApiRequest, res: NextApiResponse<any>) {
    const queryValidator = Joi.object({
      id: Joi.string().pattern(regexValidators.objectId).required(),
    });

    const { error, warning } = queryValidator.validate(req.query);
    
    if (error || warning) {
      return this.invalidParams(res);
    }

    const phone = await phoneService.getPhone(req.query.id as string);

    if (!phone) {
      return this.notFound(res);
    }

    return this.ok<Phone>(res, phone);
  }
}

export const getPhonesCtrl = GetPhoneController.getInstance();
