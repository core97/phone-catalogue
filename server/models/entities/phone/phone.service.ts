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
    const phonesCursor = await phoneRepository.find({});
    const phones = await phonesCursor.toArray();
    return phones.map(({ _id, ...rest }) => ({ id: _id.toString(), ...rest }));
  }

  async savePhone(phone: Phone) {
    await phoneRepository.save(phone);
  }
}

export const phoneService = PhoneService.getInstance(); 
