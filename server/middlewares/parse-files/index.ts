import type { NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import formidable from 'formidable';
import {
  CLIENT_ERROR_CODE,
  CLIENT_ERROR_TO_HTTP_STATUS,
} from 'server/common/errors/client-errors';
import { NextApiRequestWithFiles } from './parse-files.interface';

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

  multiPartFormData.parse(req, async (err, _fields, files) => {
    if (err) {
      const existMsg = typeof err?.message === 'string';

      if (existMsg && err.message.includes('maxFileSize exceeded')) {
        return res
          .status(CLIENT_ERROR_TO_HTTP_STATUS.MAX_FILE_SIZE_EXCEEDED)
          .json({
            message: CLIENT_ERROR_CODE.MAX_FILE_SIZE_EXCEEDED,
          });
      }

      return res
        .status(CLIENT_ERROR_TO_HTTP_STATUS.UNKNOWN_ERROR_PARSING_FILES)
        .json({
          message: CLIENT_ERROR_CODE.UNKNOWN_ERROR_PARSING_FILES,
        });
    }

    const filesFormatParse = Array.from(Object.keys(files)).reduce(
      (acc: formidable.File[], key) => {
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
