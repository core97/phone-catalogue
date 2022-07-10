import { Phone } from 'types/models';

export interface PhoneDetailProps extends Omit<Phone, 'createdAt'> {}
