import type { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import { StorageS3 } from 'server/modules/storage-s3';

const handler = nextConnect<NextApiRequest, NextApiResponse>();

handler.delete(async (req, res) => {
  const { path } = req.query;
  let urlFiles: string[] = [];

  if (!path) {
    return res.status(422).json({ message: 'File path required' });
  }

  urlFiles = Array.isArray(path) ? [...path] : [path];

  await Promise.all(
    urlFiles.map(url => StorageS3.getInstance().deleteFile(url))
  );

  return res.status(200).end();
});

export default handler;
