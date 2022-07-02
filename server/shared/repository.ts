import {
  ObjectId,
  MongoClient,
  Collection,
  Document,
  Filter,
  FindOptions,
  FindCursor,
  WithId,
} from 'mongodb';
import { MongoDatabase } from 'server/modules/mongo-database';
import { Schema } from 'server/shared/schema';

export class Repository<T extends { id: string }> {
  private collection: Collection | undefined;

  private connection: MongoClient | undefined;

  constructor(private collectionName: string, private schema: Schema<T>) {}

  async getCollection(): Promise<Collection> {
    const mongoDB = MongoDatabase.getInstance();

    if (!this.connection) {
      this.connection = await mongoDB.connect();
    }

    if (!this.collection) {
      this.collection = this.connection.db().collection(this.collectionName);
    }

    return this.collection;
  }

  async exists(id: string): Promise<boolean> {
    const collection = await this.getCollection();
    const doc = await collection.findOne<T>({ _id: this.toObjectId(id) });
    return !!doc;
  }

  async save(aggregateRoot: T): Promise<void> {
    const collection = await this.getCollection();
    let doc: WithId<T> | undefined;

    try {
      doc = {
        ...this.schema.getValidatedValue(aggregateRoot),
        _id: this.toObjectId(aggregateRoot.id),
        id: undefined,
      };
    } catch (error) {
      throw Error(
        `[repository]: Aggregate root from ${
          this.collectionName
        } collection is invalid when the document is created or updated.\n${error}}`
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

  async findOne(filter: Filter<T>): Promise<T | null> {
    const collection = await this.getCollection();
    const docWithId = await collection.findOne<WithId<T>>(filter);

    if (!docWithId) return null;

    const { _id, ...rest } = docWithId;

    return { ...rest, id: _id.toString() } as unknown as T;
  }

  async findById(id: string): Promise<T | null> {
    const collection = await this.getCollection();
    const docWithId = await collection.findOne<WithId<T>>({
      _id: this.toObjectId(id),
    });

    if (!docWithId) return null;

    const { _id, ...rest } = docWithId;

    return { ...rest, id: _id.toString() } as unknown as T;
  }

  async find(
    filter: Filter<T>,
    options?: FindOptions<Document> | undefined
  ): Promise<FindCursor<Omit<WithId<T>, 'id'>>> {
    const collection = await this.getCollection();
    const findCursor = collection.find<Omit<WithId<T>, 'id'>>(
      filter,
      options
    );

    return findCursor;
  }

  async deleteOne(filter: Filter<T>): Promise<void> {
    const collection = await this.getCollection();
    await collection.deleteOne(filter);
  }

  toObjectId(id?: string): ObjectId {
    return new ObjectId(id);
  }
}
