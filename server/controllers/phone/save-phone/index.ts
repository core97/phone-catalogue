import { NextApiResponse } from 'next';
import { inject, injectable } from 'inversify';
import { Controller } from 'server/shared/controller';
import { PhoneService } from 'server/models/entities/phone/phone.service';
import { TYPES } from 'server/shared/container-types';
import { SavePhoneRequest, bodySchema } from './save-phone.request';

@injectable()
export class SavePhoneController extends Controller {
  constructor(@inject(TYPES.PhoneService) private phoneService: PhoneService) {
    super({ bodySchema });
  }

  protected async executeImpl(req: SavePhoneRequest, res: NextApiResponse) {
    await this.phoneService.savePhone(req.body);
    return this.created(res);
  }
}
