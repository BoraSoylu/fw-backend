import { PrismaClient, Prisma } from '@prisma/client';
import express, { Express, Request, Response, Router } from 'express';
// import { createWallet } from './dbAccess';
import { incomingWalletSchema } from './validation.joi';
import { generateAddress } from './walletAddressGenerator';

const app: Express = express();
export const router: Router = Router();

const prisma = new PrismaClient();

router.use((req, res, next) => {
  console.log('---------------');
  console.log('---------------');
  console.log('---------------');
  console.log('---------------');
  console.log('---------------');
  console.log('---------------');
  console.log('---------------');
  console.log('---------------');
  console.log('---------------');
  next();
});

router.get('/wallet', (req: Request, res: Response) => {
  console.log(`hit get wallet - req.query: ${req.query}`);
  console.log(req.query);
  res.send(`hit get wallet - req.query: ${req.query}`);
});

router.post('/wallet', async (req: Request, res: Response) => {
  const { error, value } = await incomingWalletSchema.validate(req.body);
  if (error) {
    res.send(error);
  } else {
    const wallet: CreateWallet = {
      address: generateAddress(),
      contents: value.contents,
      title: value.title,
      note: value.note,
    };
    prisma.wallet.create({ data: wallet }).then((data) => {
      res.send(wallet);
    });
  }
});

router.get('/email', (req: Request, res: Response) => {
  console.log('Hit router.get');
  res.send('Express + TypeScript Server');
});

router.post('/email', (req: Request, res: Response) => {
  console.log('Hit router.post');
  res.send('Express + TypeScript Server');
});

router.delete('/email', (req: Request, res: Response) => {
  console.log('Hit router.delete');
  res.send('Express + TypeScript Server');
});
