/* eslint-disable @typescript-eslint/no-unused-vars */
import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';

import './database';

import '@shared/container';

import { AppError } from '@errors/AppError';

import swaggerFile from '../swagger.json';
import { router } from './routes';

const app = express();

app.use(express.json());

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use(
  (error: Error, request: Request, response: Response, _: NextFunction) => {
    if (error instanceof AppError) {
      const { message, statusCode } = error;

      return response.status(statusCode).json({ message });
    }

    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${error.message}`
    });
  }
);

app.listen(3333, () => {
  console.log('🚀 Server is running!');
});
