import type { NextApiRequest, NextApiResponse } from 'next';
import { getPhonesCtrl } from 'server/controllers/phone/get-phones.controller';
import { savePhoneCtrl } from 'server/controllers/phone/save-phone.controller';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PUT') {
    return savePhoneCtrl.execute(req, res);
  }

  if (req.method === 'GET') {
    return getPhonesCtrl.execute(req, res);
  }

  return res.status(405).end();
}
