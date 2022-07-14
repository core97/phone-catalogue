import Joi from 'joi';
import { NextApiRequest } from 'next';
import { regexValidators } from 'utils/regex';

export interface DeletePhoneRequest extends NextApiRequest {
  query: {
    id: string;
  };
}

export const querySchema = Joi.object({
  id: Joi.string().pattern(regexValidators.objectId).required(),
});
