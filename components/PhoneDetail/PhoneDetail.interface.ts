import { PhoneEntity } from 'types/models';

export type PhoneDetailProps = Pick<
  PhoneEntity,
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
