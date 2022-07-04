import internal from 'stream';
import S3 from 'aws-sdk/clients/s3';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import formidable from 'formidable';

const {
  AWS_MY_BUCKET_NAME,
  AWS_MY_BUCKET_REGION,
  AWS_MY_ACCESS_KEY,
  AWS_MY_SECRET_KEY,
} = process.env;

export class StorageS3 {
  private static instance: StorageS3;

  private s3: S3;

  public static getInstance(): StorageS3 {
    StorageS3.checkEnvironment();
    
    if (!StorageS3.instance) {
      StorageS3.instance = new StorageS3();
    }

    return StorageS3.instance;
  }

  static checkEnvironment() {
    if (
      typeof AWS_MY_BUCKET_NAME !== 'string' ||
      typeof AWS_MY_BUCKET_REGION !== 'string' ||
      typeof AWS_MY_ACCESS_KEY !== 'string' ||
      typeof AWS_MY_SECRET_KEY !== 'string'
    ) {
      throw new Error('Define the aws environmental variables');
    }
  }

  constructor() {
    this.s3 = new S3({
      region: AWS_MY_BUCKET_REGION,
      credentials: {
        accessKeyId: AWS_MY_ACCESS_KEY,
        secretAccessKey: AWS_MY_SECRET_KEY,
      },
    });
  }

  async uploadFile(file: formidable.File, path?: string): Promise<string> {
    const fileStream = fs.createReadStream(file.filepath);

    let pathToBucket = path || '';
    if (pathToBucket.length > 0 && pathToBucket.charAt(0) !== '/') {
      pathToBucket = `/${pathToBucket}`;
    }

    const upload = await this.s3
      .upload({
        Bucket: `${AWS_MY_BUCKET_NAME}${pathToBucket}`,
        Key: file.newFilename || uuidv4(),
        Body: fileStream,
      })
      .promise();

    return upload.Key;
  }

  getFileStream(fileKey: string): internal.Readable {
    return this.s3
      .getObject({
        Key: fileKey,
        Bucket: AWS_MY_BUCKET_NAME,
      })
      .createReadStream();
  }

  deleteFile(fileKey: string) {
    return this.s3
      .deleteObject({
        Bucket: AWS_MY_BUCKET_NAME,
        Key: fileKey,
      })
      .promise();
  }
}
