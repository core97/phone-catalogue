import { Phone } from 'types/models';

export type PhoneDetailProps = Pick<
  Phone,
  | 'id'
  | 'color'
  | 'description'
  | 'imageFileName'
  | 'manufacturer'
  | 'name'
  | 'price'
  | 'processor'
  | 'ram'
>;
