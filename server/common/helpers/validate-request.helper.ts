import { ObjectSchema, ValidationError } from 'joi';
import { NextApiRequest } from 'next';
import { InvalidParams } from 'server/common/errors/global-errors/invalid-params.error';

export const validateRequest = ({
  req,
  bodySchema,
  querySchema,
}: {
  req: NextApiRequest;
  querySchema?: ObjectSchema;
  bodySchema?: ObjectSchema;
}) => {
  const errors: ValidationError[] = [];
  const warnings: ValidationError[] = [];

  if (bodySchema) {
    const { error, warning } = bodySchema.validate(req.body);
    error && errors.push(error);
    warning && warnings.push(warning);
  }

  if (querySchema) {
    const { error, warning } = querySchema.validate(req.query);
    error && errors.push(error);
    warning && warnings.push(warning);
  }

  if (errors.length || warnings.length) throw new InvalidParams();
};
