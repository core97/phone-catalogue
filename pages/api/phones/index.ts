import type { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import { getPhonesCtrl } from 'server/controllers/phone/get-phones.controller';
import { savePhoneCtrl } from 'server/controllers/phone/save-phone.controller';

const handler = nextConnect<NextApiRequest, NextApiResponse>();

handler.get(async (req, res) => getPhonesCtrl.execute(req, res));

handler.put(async (req, res) => savePhoneCtrl.execute(req, res));

export default handler;
