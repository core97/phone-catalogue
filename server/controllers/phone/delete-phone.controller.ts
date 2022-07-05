import { NextApiRequest, NextApiResponse } from 'next';
import Joi from 'joi';
import { Controller } from 'server/shared/controller';
import { phoneService } from 'server/models/entities/phone/phone.service';
import { regexValidators } from 'utils/regex';

class DeletePhoneController extends Controller {
  private static instance: DeletePhoneController;

  public static getInstance(): DeletePhoneController {
    if (!DeletePhoneController.instance) {
      DeletePhoneController.instance = new DeletePhoneController();
    }

    return DeletePhoneController.instance;
  }

  protected async executeImpl(req: NextApiRequest, res: NextApiResponse<any>) {
    const queryValidator = Joi.object({
      id: Joi.string().pattern(regexValidators.objectId).required(),
    });

    const { error, warning } = queryValidator.validate(req.query);

    if (error || warning) {
      return this.invalidParams(res);
    }

    await phoneService.deletePhone(req.query.id as string);

    return this.ok(res);
  }
}

export const deletePhoneCtrl = DeletePhoneController.getInstance();
