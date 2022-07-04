import { phoneRepository } from './phone.repository';
import { Phone } from './phone.entity';

class PhoneService {
  private static instance: PhoneService;

  public static getInstance(): PhoneService {
    if (!PhoneService.instance) {
      PhoneService.instance = new PhoneService();
    }

    return PhoneService.instance;
  }

  async getPhones(): Promise<Phone[]> {
    const phones = await phoneRepository.findPhones();
    return phones;
  }

  async savePhone(phone: Phone) {
    await phoneRepository.savePhone(phone);
  }
}

export const phoneService = PhoneService.getInstance(); 
