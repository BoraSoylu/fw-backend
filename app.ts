import express, { Express, Request, Response } from 'express';
import { router } from './src/controller';
import helmet from 'helmet';
const app: Express = express();

app.use(express.json());
app.use('/api/v1', router);
app.use(helmet())
const port = '3000';

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});