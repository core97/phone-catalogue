import { Repository } from 'server/shared/repository';
import { Schema } from 'server/shared/schema';
import { COLLECTION_NAME } from 'server/shared/constants';
import { Phone } from './phone.entity';
import { phoneSchema } from './phone.schema';

class PhoneRepository extends Repository<Phone> {
  private static instance: PhoneRepository;

  constructor(schema: Schema<Phone>) {
    super(COLLECTION_NAME.PHONE, schema);
  }

  public static getInstance(): PhoneRepository {
    if (!PhoneRepository.instance) {
      PhoneRepository.instance = new PhoneRepository(phoneSchema);
    }

    return PhoneRepository.instance;
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
}

export const phoneRepository = PhoneRepository.getInstance();
