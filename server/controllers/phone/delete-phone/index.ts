import { NextApiResponse } from 'next';
import { injectable, inject } from 'inversify';
import { Controller } from 'server/shared/controller';
import { PhoneService } from 'server/models/entities/phone/phone.service';
import { TYPES } from 'server/shared/container-types';
import { DeletePhoneRequest, querySchema } from './delete-phone.request';

@injectable()
export class DeletePhoneController extends Controller {
  constructor(@inject(TYPES.PhoneService) private phoneService: PhoneService) {
    super({ querySchema });
  }

  protected async executeImpl(req: DeletePhoneRequest, res: NextApiResponse) {
    await this.phoneService.deletePhone(req.query.id as string);

    return this.ok(res);
  }
}
