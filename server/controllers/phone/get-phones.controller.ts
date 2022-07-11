import { NextApiRequest, NextApiResponse } from 'next';
import { inject, injectable } from 'inversify';
import { Controller } from 'server/shared/controller';
import { PhoneService } from 'server/models/entities/phone/phone.service';
import { Phone } from 'server/models/entities/phone/phone.entity';
import { TYPES } from 'server/shared/container-types';

@injectable()
export class GetPhonesController extends Controller {
  constructor(@inject(TYPES.PhoneService) private phoneService: PhoneService) {
    super();
  }

  protected async executeImpl(_req: NextApiRequest, res: NextApiResponse) {
    const phones = await this.phoneService.getPhones();
    return this.ok<Phone[]>(res, phones);
  }
}
