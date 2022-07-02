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
}

export const phoneRepository = PhoneRepository.getInstance();
