import { ObjectSchema } from 'joi';

export class Schema<T> {
  readonly objectSchema: ObjectSchema<T>;

  private readonly schemaName: string;

  constructor(objectSchema: ObjectSchema<T>, schemaName: string) {
    this.objectSchema = objectSchema;
    this.schemaName = schemaName;
  }

  getValidatedValue(data: Partial<T>): T {
    const { error, value, warning } = this.objectSchema.validate(data);

    if (error || warning) {
      const msg = error?.message || warning?.message;

      throw new Error(
        `[schema]: an error ocurred when validate value in ${this.schemaName}.\n${msg}`
      );
    }

    return value;
  }

  getSchema(): ObjectSchema<T> {
    return this.objectSchema;
  }
}
