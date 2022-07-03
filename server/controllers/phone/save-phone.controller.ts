import { NextApiRequest, NextApiResponse } from 'next';
import { Controller } from 'server/shared/controller';
import { phoneService } from 'server/models/entities/phone/phone.service';
import { phoneSchema } from 'server/models/entities/phone/phone.schema';

class SavePhoneController extends Controller {
  private static instance: SavePhoneController;

  public static getInstance(): SavePhoneController {
    if (!SavePhoneController.instance) {
      SavePhoneController.instance = new SavePhoneController();
    }

    return SavePhoneController.instance;
  }

  protected async executeImpl(req: NextApiRequest, res: NextApiResponse<any>) {
    try {
      phoneSchema.getValidatedValue(req.body);
    } catch (error) {
      return this.invalidParams(res);
    }

    await phoneService.savePhone(req.body);
    return this.created(res);
  }
}

export const savePhoneCtrl = SavePhoneController.getInstance();
