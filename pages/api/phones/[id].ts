import type { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import { getPhonesCtrl } from 'server/controllers/phone/get-phone.controller';

const handler = nextConnect<NextApiRequest, NextApiResponse>();

handler.get(async (req, res) => getPhonesCtrl.execute(req, res));

export default handler;
