import { injectable } from 'inversify';
import Joi from 'joi';
import { Schema } from 'server/shared/schema';
import { regexValidators } from 'utils/regex';
import { Phone } from './phone.entity';

const schema = Joi.object<Phone>({
  id: Joi.string().pattern(regexValidators.objectId).required(),
  color: Joi.valid('black', 'gray', 'dark-blue').required(),
  description: Joi.string().required(),
  createdAt: Joi.date().required(),
  imageFileName: Joi.string().required(),
  manufacturer: Joi.valid('apple', 'samsung', 'xiaomi').required(),
  name: Joi.string().required(),
  price: Joi.number().integer().max(5000).required(),
  processor: Joi.string().required(),
  ram: Joi.number().integer().max(64).required(),
});

@injectable()
export class PhoneSchema extends Schema<Phone> {
  constructor() {
    super(schema, 'phone-schema');
  }
}
