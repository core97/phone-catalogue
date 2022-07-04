declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGODB_URI: string;
      AWS_MY_BUCKET_NAME: string;
      AWS_MY_BUCKET_REGION: string;
      AWS_MY_ACCESS_KEY: string;
      AWS_MY_SECRET_KEY: string;
    }
  }
}

export {};
