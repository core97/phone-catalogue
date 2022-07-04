import type { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import formidable from 'formidable';

export interface NextApiRequestWithFiles extends NextApiRequest {
  files: formidable.File[];
}

export const parseFiles = nextConnect<
  NextApiRequestWithFiles,
  NextApiResponse
>();

const MAX_SIZE = 10 * 1024 * 1024; // 10MB,

parseFiles.use((req, res, next) => {
  const multiPartFormData = formidable({
    multiples: true,
    maxFileSize: MAX_SIZE,
    keepExtensions: true,
  });

  multiPartFormData.parse(req, async (err, fields, files) => {
    if (err) {
      if ((err.message as string).includes('maxFileSize exceeded')) {
        return res.status(400).json({
          message: 'File too large',
        });
      }

      return res.status(400).json({
        message: 'Error when parsing the files.',
      });
    }

    const filesFormatParse = Array.from(Object.keys(files)).reduce(
      (acc: any[], key) => {
        const file = files[key];

        if (Array.isArray(file)) {
          Array.from(file).forEach(eachFile => acc.push(eachFile));
        } else {
          acc.push(file);
        }

        return acc;
      },
      []
    );

    req.files = filesFormatParse;

    return next();
  });
});
