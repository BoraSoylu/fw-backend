import express, { Express, Request, Response, Router } from 'express';

const app: Express = express();
export const router: Router = Router();

router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

router.get('/wallet', (req: Request, res: Response) => {
  console.log(`hit get wallet - req.query: ${req.query}`);
  console.log(req.query);
  res.send(`hit get wallet - req.query: ${req.query}`)
});

router.post('/wallet', (req: Request, res: Response) => {
  console.log(`hit create wallet - req.body: ${JSON.stringify(req.body)}`);
  res.send(req.body);
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
