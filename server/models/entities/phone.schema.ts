import Joi from 'joi';
import { Schema } from 'server/shared/schema';
import { regexValidators } from 'utils/regex';
import { Phone } from './phone.entity';

const schema = Joi.object<Phone>({
  id: Joi.string().pattern(regexValidators.objectId).required(),
  color: Joi.string().required(),
  description: Joi.string().required(),
  createdAt: Joi.date().required(),
  imageFileName: Joi.string().uri().required(),
  manufacturer: Joi.valid('apple').required(),
  name: Joi.string().required(),
  price: Joi.number().integer().max(5000).required(),
  processor: Joi.string().required(),
  ram: Joi.number().integer().max(64).required(),
});

export default new Schema(schema, 'phone-schema');
