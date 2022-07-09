import { injectable, unmanaged } from 'inversify';
import { ObjectSchema } from 'joi';

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
        `[schema]: an error ocurred when validate value in ${this.schemaName}.\n${msg}`
      );
    }

    return value;
  }

  getSchema() {
    return this.objectSchema;
  }
}
