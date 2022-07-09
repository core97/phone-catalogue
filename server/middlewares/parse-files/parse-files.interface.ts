import type { NextApiRequest } from 'next';
import formidable from 'formidable';

export interface NextApiRequestWithFiles extends NextApiRequest {
  files: formidable.File[];
}