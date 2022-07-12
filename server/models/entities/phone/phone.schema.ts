import { injectable } from 'inversify';
import Joi from 'joi';
import { Schema } from 'server/shared/schema';
import { SCHEMA_NAMES } from 'server/common/constants';
import { regexValidators } from 'utils/regex';
import { PhoneEntity, Manufacter, PhoneColor } from './phone.entity';

export const schema = Joi.object<PhoneEntity>({
  id: Joi.string().pattern(regexValidators.objectId).required(),
  color: Joi.valid(
    PhoneColor.BLACK,
    PhoneColor.GRAY,
    PhoneColor.DARK_BLUE
  ).required(),
  description: Joi.string().required(),
  createdAt: Joi.date().required(),
  imageFileName: Joi.string().required(),
  manufacturer: Joi.valid(
    Manufacter.APPLE,
    Manufacter.SAMSUNG,
    Manufacter.XIAOMI
  ).required(),
  name: Joi.string().required(),
  price: Joi.number().integer().max(5000).required(),
  processor: Joi.string().required(),
  ram: Joi.number().integer().max(64).required(),
});

@injectable()
export class PhoneSchema extends Schema<PhoneEntity> {
  constructor() {
    super(schema, SCHEMA_NAMES.PHONE);
  }
}
