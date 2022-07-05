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

  async getPhone(id: string): Promise<Phone | null> {
    const phone = await phoneRepository.findPhoneById(id);
    return phone;
  }

  async savePhone(phone: Phone) {
    await phoneRepository.savePhone(phone);
  }

  async deletePhone(id: string): Promise<void> {
    await phoneRepository.deletePhoneById(id);
  }
}

export const phoneService = PhoneService.getInstance(); 
