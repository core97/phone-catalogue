import { Manufacter } from 'server/shared/types';

export interface Phone {
  id: string;
  color: string;
  createdAt: Date;
  description: string;
  imageFileName: string;
  manufacturer: Manufacter;
  name: string;
  price: number;
  processor: string;
  ram: number;
}
