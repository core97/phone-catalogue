import type { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import 'reflect-metadata';
import { getPhonesCtrl, savePhoneCtrl } from 'server/controllers/phone';

const handler = nextConnect<NextApiRequest, NextApiResponse>();

handler.get(async (req, res) => getPhonesCtrl.execute(req, res));

handler.put(async (req, res) => savePhoneCtrl.execute(req, res));

export default handler;
