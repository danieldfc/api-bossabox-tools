import 'reflect-metadata';
import 'dotenv/config';

import express from 'express';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';

import 'express-async-errors';

import '@shared/container';
import '@shared/infra/typeorm';

import errorHandler from '@shared/errors/handler';

import swaggerDocument from './swagger.json';

import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(routes);
app.use(errorHandler);

export default app;
