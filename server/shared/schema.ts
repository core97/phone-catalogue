import { injectable, unmanaged } from 'inversify';
import type { ObjectSchema } from 'joi';
import { INTERNAL_ERROR_MSG } from 'server/common/errors/error-messages';

@injectable()
export class Schema<T> {
  private readonly objectSchema: ObjectSchema<T>;

  private readonly schemaName: string;

  constructor(
    @unmanaged() objectSchema: ObjectSchema<T>,
    @unmanaged() schemaName: string
  ) {
    this.objectSchema = objectSchema;
    this.schemaName = schemaName;
  }

  getValidatedValue(data: Partial<T>) {
    const { error, value, warning } = this.objectSchema.validate(data);

    if (error || warning) {
      const msg = error?.message || warning?.message;

      throw new Error(
        INTERNAL_ERROR_MSG.INVALID_VALIDATION_SCHEMA(this.schemaName, msg)
      );
    }

    return value;
  }

  getSchema() {
    return this.objectSchema;
  }
}
