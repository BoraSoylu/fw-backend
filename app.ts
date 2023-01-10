console.log('********* SERVER RESTARTED *********');
import express, { Express, Request, Response } from 'express';
import { router } from './src/controllers';
import helmet from 'helmet';

const app: Express = express();

app.use(express.json());
app.use('/api/v1', router);
app.use(helmet());
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
