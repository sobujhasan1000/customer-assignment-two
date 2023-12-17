import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { customerRoutes } from './app/modules/customer/customer.route';
const app: Application = express();

app.use(express.json());
app.use(cors());

// application routers
app.use('/v1/customers', customerRoutes);

const getControler = (req: Request, res: Response) => {
  res.send('Hello World! hi');
};

app.get('/', getControler);

export default app;
