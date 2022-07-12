import { injectable, inject } from 'inversify';
import { Repository } from 'server/shared/repository';
import { COLLECTION_NAME } from 'server/common/constants';
import { TYPES } from 'server/shared/container-types';
import { PhoneEntity } from './phone.entity';
import { PhoneSchema } from './phone.schema';
import { Phone } from './phone.domain';
import { PhoneNotFound } from './errors/phone-not-found.error';

@injectable()
export class PhoneRepository extends Repository<PhoneEntity> {
  constructor(@inject(TYPES.PhoneSchema) schema: PhoneSchema) {
    super(COLLECTION_NAME.PHONE, schema);
  }

  async findPhones() {
    const phonesCursor = await this.find({});
    const phones = await phonesCursor.toArray();
    return phones.map(
      ({ _id, ...rest }) => new Phone({ id: _id.toString(), ...rest })
    );
  }

  async findPhoneById(id: string) {
    const phone = await this.findById(id);
    if (!phone) throw new PhoneNotFound();
    return new Phone(phone);
  }

  async savePhone(phone: PhoneEntity) {
    await this.save(phone);
  }

  async deletePhoneById(phoneId: string) {
    await this.deleteOne({
      _id: this.toObjectId(phoneId),
    });
  }
}
