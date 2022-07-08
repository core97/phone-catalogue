import { injectable, inject } from 'inversify';
import { PhoneRepository } from 'server/models/entities/phone/phone.repository';
import { TYPES } from 'server/shared/container-types';
import { Phone } from './phone.entity';

@injectable()
export class PhoneService {
  constructor(
    @inject(TYPES.PhoneRepository) private phoneRepository: PhoneRepository
  ) {}

  async getPhones(): Promise<Phone[]> {
    const phones = await this.phoneRepository.findPhones();
    return phones;
  }

  async getPhone(id: string): Promise<Phone | null> {
    const phone = await this.phoneRepository.findPhoneById(id);
    return phone;
  }

  async savePhone(phone: Phone) {
    await this.phoneRepository.savePhone(phone);
  }

  async deletePhone(id: string): Promise<void> {
    await this.phoneRepository.deletePhoneById(id);
  }
}
