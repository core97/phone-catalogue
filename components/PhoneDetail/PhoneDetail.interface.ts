import { Phone } from 'types/models';

export interface Props extends Omit<Phone, 'createdAt'> {}
