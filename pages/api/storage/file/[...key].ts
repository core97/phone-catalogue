import type { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import { StorageS3 } from 'server/modules/storage-s3';

const handler = nextConnect<NextApiRequest, NextApiResponse>();

handler.get((req, res) => {
  const { key } = req.query as { key: string | string[] };
  const fullKey = Array.isArray(key) ? key.join('/') : key;

  const readStream = StorageS3.getInstance().getFileStream(fullKey);

  return readStream.pipe(res);
});

export default handler;
