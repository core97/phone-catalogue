import { injectable, inject } from 'inversify';
import { Repository } from 'server/shared/repository';
import { COLLECTION_NAME } from 'server/shared/constants';
import { TYPES } from 'server/shared/container-types';
import { Phone } from './phone.entity';
import { PhoneSchema } from './phone.schema';

@injectable()
export class PhoneRepository extends Repository<Phone> {
  constructor(@inject(TYPES.PhoneSchema) schema: PhoneSchema) {
    super(COLLECTION_NAME.PHONE, schema);
  }

  async findPhones(): Promise<Phone[]> {
    const phonesCursor = await this.find({});
    const phones = await phonesCursor.toArray();
    return phones.map(({ _id, ...rest }) => ({ id: _id.toString(), ...rest }));
  }

  async findPhoneById(id: string): Promise<Phone | null> {
    const phone = await this.findById(id);
    return phone;
  }

  async savePhone(phone: Phone) {
    await this.save(phone);
  }

  async deletePhoneById(phoneId: string): Promise<void> {
    await this.deleteOne({
      _id: this.toObjectId(phoneId),
    });
  }
}
