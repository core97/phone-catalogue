import { NextApiRequest, NextApiResponse } from 'next';
import { inject, injectable } from 'inversify';
import { Controller } from 'server/shared/controller';
import { PhoneService } from 'server/models/entities/phone/phone.service';
import { PhoneSchema } from 'server/models/entities/phone/phone.schema';
import { TYPES } from 'server/shared/container-types';

@injectable()
export class SavePhoneController extends Controller {
  constructor(
    @inject(TYPES.PhoneService) private phoneService: PhoneService,
    @inject(TYPES.PhoneSchema) private phoneSchema: PhoneSchema
  ) {
    super();
  }

  protected async executeImpl(req: NextApiRequest, res: NextApiResponse<any>) {
    try {
      this.phoneSchema.getValidatedValue(req.body);
    } catch (error) {
      return this.invalidParams(res);
    }

    await this.phoneService.savePhone(req.body);
    return this.created(res);
  }
}
