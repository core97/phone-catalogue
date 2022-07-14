import { PhoneEntity, Manufacter, PhoneColor } from './phone.entity';

export class Phone implements PhoneEntity {
  id: string;

  color: PhoneColor;

  createdAt: Date;

  description: string;

  imageFileName: string;

  manufacturer: Manufacter;

  name: string;

  price: number;

  processor: string;

  ram: number;

  constructor(phone: Phone) {
    Object.assign(this, { ...phone, createdAt: new Date(phone.createdAt) });
  }
}
