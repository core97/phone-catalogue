import { injectable, unmanaged } from 'inversify';
import {
  ObjectId,
  MongoClient,
  Collection,
  Document,
  Filter,
  FindOptions,
  WithId,
} from 'mongodb';
import { MongoDatabase } from 'server/modules/mongo-database';
import { Schema } from 'server/shared/schema';

@injectable()
export class Repository<T extends { id: string }> {
  private collection: Collection | undefined;

  private connection: MongoClient | undefined;

  constructor(
    @unmanaged() private collectionName: string,
    @unmanaged() private schema: Schema<T>
  ) {}

  async getCollection() {
    const mongoDB = MongoDatabase.getInstance();

    if (!this.connection) {
      this.connection = await mongoDB.connect();
    }

    if (!this.collection) {
      this.collection = this.connection.db().collection(this.collectionName);
    }

    return this.collection;
  }

  protected async exists(id: string) {
    const collection = await this.getCollection();
    const doc = await collection.findOne<T>({ _id: this.toObjectId(id) });
    return !!doc;
  }

  protected async save(aggregateRoot: T) {
    const collection = await this.getCollection();
    let doc: WithId<T>;

    try {
      doc = {
        ...this.schema.getValidatedValue(aggregateRoot),
        _id: this.toObjectId(aggregateRoot.id),
        id: undefined,
      };
    } catch (error) {
      throw Error(
        `[repository]: Aggregate root from ${this.collectionName} collection is invalid when the document is created or updated.\n${error}}`
      );
    }

    if (doc) {
      await collection.updateOne(
        { _id: doc._id },
        { $set: doc },
        { upsert: true }
      );
    }
  }

  protected async findOne(filter: Filter<T>) {
    const collection = await this.getCollection();
    const docWithId = await collection.findOne<WithId<T>>(filter);

    if (!docWithId) return null;

    const { _id, ...rest } = docWithId;

    return { ...rest, id: _id.toString() } as unknown as T;
  }

  protected async findById(id: string) {
    const collection = await this.getCollection();
    const docWithId = await collection.findOne<WithId<T>>({
      _id: this.toObjectId(id),
    });

    if (!docWithId) return null;

    const { _id, ...rest } = docWithId;

    return { ...rest, id: _id.toString() } as unknown as T;
  }

  protected async find(
    filter: Filter<T>,
    options?: FindOptions<Document> | undefined
  ) {
    const collection = await this.getCollection();
    const findCursor = collection.find<Omit<WithId<T>, 'id'>>(filter, options);

    return findCursor;
  }

  protected async deleteOne(filter: Filter<T>) {
    const collection = await this.getCollection();
    await collection.deleteOne(filter);
  }

  protected toObjectId(id?: string) {
    return new ObjectId(id);
  }
}
