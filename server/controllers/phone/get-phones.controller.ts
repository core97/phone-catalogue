import { NextApiRequest, NextApiResponse } from 'next';
import { Controller } from 'server/shared/controller';
import { phoneService } from 'server/models/entities/phone/phone.service';
import { Phone } from 'server/models/entities/phone/phone.entity';

class GetPhonesController extends Controller {
  private static instance: GetPhonesController;

  public static getInstance(): GetPhonesController {
    if (!GetPhonesController.instance) {
      GetPhonesController.instance = new GetPhonesController();
    }

    return GetPhonesController.instance;
  }

  protected async executeImpl(req: NextApiRequest, res: NextApiResponse<any>) {
    const phones = await phoneService.getPhones();
    return this.ok<Phone[]>(res, phones);
  }
}

export const getPhonesCtrl = GetPhonesController.getInstance();
