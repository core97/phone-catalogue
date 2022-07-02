import { MongoClient } from 'mongodb';

export class MongoDatabase {
  private static instance: MongoDatabase;

  private cachedClient: MongoClient | undefined;

  public static getInstance(): MongoDatabase {
    if (!MongoDatabase.instance) {
      MongoDatabase.instance = new MongoDatabase();
    }

    return MongoDatabase.instance;
  }

  async connect(): Promise<MongoClient> {
    const { MONGODB_URI } = process.env;

    if (typeof MONGODB_URI !== 'string') {
      throw new Error('Define the MONGODB_URI environmental variable');
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
      throw Error(
        `[mongo-database]: an error ocurred when make connection with database.\n${JSON.stringify(
          error
        )}`
      );
    }

    return this.cachedClient;
  }
}
