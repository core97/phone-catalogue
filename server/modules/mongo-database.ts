import { MongoClient } from 'mongodb';
import { INTERNAL_ERROR_MSG } from 'server/common/errors/error-messages';

export class MongoDatabase {
  private static instance: MongoDatabase;

  private cachedClient?: MongoClient;

  public static getInstance(): MongoDatabase {
    if (!MongoDatabase.instance) {
      MongoDatabase.instance = new MongoDatabase();
    }

    return MongoDatabase.instance;
  }

  async connect(): Promise<MongoClient> {
    const { MONGODB_URI } = process.env;

    if (typeof MONGODB_URI !== 'string') {
      throw new Error(
        INTERNAL_ERROR_MSG.NOT_FOUND_ENVIRONMENTAL_VARIABLE('MONGODB_URI')
      );
    }

    if (this.cachedClient) {
      return this.cachedClient;
    }

    // Connect to cluster
    const client = new MongoClient(MONGODB_URI, {
      ignoreUndefined: true,
    });

    try {
      await client.connect();
      this.cachedClient = client;
    } catch (error) {
      throw Error(INTERNAL_ERROR_MSG.CONNECTION_ERROR_WITH_DATABASE(error));
    }

    return this.cachedClient;
  }
}
