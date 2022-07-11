import { injectable, inject } from 'inversify';
import { PhoneRepository } from 'server/models/entities/phone/phone.repository';
import { TYPES } from 'server/shared/container-types';
import { PhoneNotFound } from './errors/phone-not-found.error';
import { Phone } from './phone.entity';

@injectable()
export class PhoneService {
  constructor(
    @inject(TYPES.PhoneRepository) private phoneRepository: PhoneRepository
  ) {}

  async getPhones() {
    const phones = await this.phoneRepository.findPhones();
    return phones;
  }

  async getPhone(id: string) {
    const phone = await this.phoneRepository.findPhoneById(id);
    if (!phone) throw new PhoneNotFound();
    return phone;
  }

  async savePhone(phone: Phone) {
    await this.phoneRepository.savePhone(phone);
  }

  async deletePhone(id: string) {
    await this.phoneRepository.deletePhoneById(id);
  }
}
