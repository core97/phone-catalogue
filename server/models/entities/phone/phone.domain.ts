import { Manufacter, PhoneColor } from 'server/shared/types';
import { Phone as PhoneEntity } from './phone.entity';

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
    this.id = phone.id;
    this.createdAt = new Date(phone.createdAt);
    this.name = phone.name;
    this.manufacturer = phone.manufacturer;
    this.description = phone.description;
    this.color = phone.color;
    this.price = phone.price;
    this.imageFileName = phone.imageFileName;
    this.processor = phone.processor;
    this.ram = phone.ram;
  }
}
