export enum Manufacter {
  APPLE = 'apple',
  SAMSUNG = 'samsung',
  XIAOMI = 'xiaomi',
}

export enum PhoneColor {
  BLACK = 'black',
  GRAY = 'gray',
  DARK_BLUE = 'dark-blue',
}

export interface Phone {
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
}
