import { injectable, inject } from 'inversify';
import { PhoneRepository } from 'server/models/entities/phone/phone.repository';
import { TYPES } from 'server/shared/container-types';
import { PhoneListDto } from './dtos/phone-list.dto';
import { PhoneDetailDto } from './dtos/phone-detail.dto';
import { PhoneEntity } from './phone.entity';

@injectable()
export class PhoneService {
  constructor(
    @inject(TYPES.PhoneRepository) private phoneRepository: PhoneRepository
  ) {}

  async getPhones() {
    const phones = await this.phoneRepository.findPhones();
    const phoneListDto: PhoneListDto[] = phones.map(phone => ({
      id: phone.id,
      imageFileName: phone.imageFileName,
      name: phone.name,
    }));

    return phoneListDto;
  }

  async getPhone(id: string) {
    const phone = await this.phoneRepository.findPhoneById(id);
    const phoneDetailDto: PhoneDetailDto = phone;
    return phoneDetailDto;
  }

  async savePhone(phone: PhoneEntity) {
    await this.phoneRepository.savePhone(phone);
  }

  async deletePhone(id: string) {
    await this.phoneRepository.deletePhoneById(id);
  }
}
