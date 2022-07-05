import type { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import { getPhoneCtrl } from 'server/controllers/phone/get-phone.controller';
import { deletePhoneCtrl } from 'server/controllers/phone/delete-phone.controller';

const handler = nextConnect<NextApiRequest, NextApiResponse>();

handler.get(async (req, res) => getPhoneCtrl.execute(req, res));

handler.delete(async (req, res) => deletePhoneCtrl.execute(req, res));

export default handler;
