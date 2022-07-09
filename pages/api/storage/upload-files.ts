import type { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import { StorageS3 } from 'server/modules/storage-s3';
import { parseFiles } from 'server/middlewares/parse-files';
import { NextApiRequestWithFiles } from 'server/middlewares/parse-files/parse-files.interface';

const handler = nextConnect<NextApiRequest, NextApiResponse>();

handler.use(parseFiles);

handler.post(async (req: NextApiRequestWithFiles, res) => {
  const { path } = req.query as { path?: string };
  const files = Array.from(req.files);

  const uploads = await Promise.all(
    files.map(async eachFile => {
      const upload = await StorageS3.getInstance().uploadFile(eachFile, path);
      return `/api/storage/file/${upload}`;
    })
  );

  return res.status(200).json({ files: uploads });
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
