import type { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import 'reflect-metadata';
import { deletePhoneCtrl, getPhoneCtrl } from 'server/controllers/phone';

const handler = nextConnect<NextApiRequest, NextApiResponse>();

handler.get(async (req, res) => getPhoneCtrl.execute(req, res));

handler.delete(async (req, res) => deletePhoneCtrl.execute(req, res));

export default handler;
