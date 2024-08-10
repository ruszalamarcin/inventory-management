import 'reflect-metadata';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { catchErrors, notFound } from './shared/interfaces/middleware/errors.middleware';
import ordersRoutes from './order/interfaces/http/routes/order.route';
import productsRoutes from './product/interfaces/http/routes/product.route';
import { jsonTransform } from './shared/interfaces/middleware/json-transform.middleware';
import morgan from 'morgan';

dotenv.config({ path: '.env' });
const port = process.env.PORT || 3001;
mongoose.connect(process.env.MONGODB_URI as string, {});

express()
  .use(morgan('dev'))
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(jsonTransform)
  .use('/api/v1/orders', ordersRoutes())
  .use('/api/v1/products', productsRoutes())
  .use(notFound)
  .use(catchErrors)
  .listen(port);
