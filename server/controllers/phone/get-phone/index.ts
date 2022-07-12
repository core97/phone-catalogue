import { NextApiResponse } from 'next';
import { inject, injectable } from 'inversify';
import { Controller } from 'server/shared/controller';
import { PhoneService } from 'server/models/entities/phone/phone.service';
import { PhoneDetailDto } from 'server/models/entities/phone/dtos/phone-detail.dto';
import { TYPES } from 'server/shared/container-types';
import { GetPhoneRequest, querySchema } from './get-phone.request';

@injectable()
export class GetPhoneController extends Controller {
  constructor(@inject(TYPES.PhoneService) private phoneService: PhoneService) {
    super({ querySchema });
  }

  protected async executeImpl(req: GetPhoneRequest, res: NextApiResponse) {
    const phone = await this.phoneService.getPhone(req.query.id);
    return this.ok<PhoneDetailDto>(res, phone);
  }
}
