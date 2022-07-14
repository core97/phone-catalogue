import { NextApiRequest } from 'next';
import { PhoneEntity } from 'server/models/entities/phone/phone.entity';
import { schema } from 'server/models/entities/phone/phone.schema';

export interface SavePhoneRequest extends NextApiRequest {
  body: PhoneEntity;
}

export const bodySchema = schema;
