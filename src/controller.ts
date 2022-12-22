import express, { Express, Request, Response, Router } from 'express';
import { incomingWalletSchema } from './validation.zod';

const app: Express = express();
export const router: Router = Router();

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

router.post('/wallet', (req: Request, res: Response) => {
  try {
    const incomingWallet = incomingWalletSchema.parse(req.body);
    console.log(incomingWallet);
    res.send(incomingWallet);

  } catch (error) {
    res.send(error);
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
