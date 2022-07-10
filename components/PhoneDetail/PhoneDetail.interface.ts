import { Phone } from 'types/models';

export interface PhoneDetailProps
  extends Pick<
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
  > {}
