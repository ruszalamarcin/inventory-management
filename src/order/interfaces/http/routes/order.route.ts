import { Request, Response, Router } from 'express';
import Container from 'typedi';
import { catchAsync } from '../../../../shared/interfaces/middleware/errors.middleware';
import { checkValidation } from '../../../../shared/interfaces/middleware/validate.middleware';
import OrderController from '../controllers/order.controller';
import CreateOrderValidator from '../middleware/create-order.validator';

export default () => {
  const api = Router();
  const orderController = Container.get(OrderController);

  api.post(
    '/',
    CreateOrderValidator.validate(),
    checkValidation,
    catchAsync((req: Request, res: Response) => orderController.create(req, res))
  );

  return api;
};
