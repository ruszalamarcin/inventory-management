import { Request, Response, Router } from 'express';
import Container from 'typedi';
import { catchAsync } from '../../../../shared/interfaces/middleware/errors.middleware';
import { checkValidation } from '../../../../shared/interfaces/middleware/validate.middleware';
import ProductController from '../controllers/product.controller';
import CreateProductValidator from '../middleware/create-product.validator';
import RestockProductValidator from '../middleware/restock-product.validate';
import SellProductValidator from '../middleware/sell-product.validate';

export default () => {
  const api = Router();
  const productController = Container.get(ProductController);

  api.get(
    '/',
    catchAsync((req: Request, res: Response) => productController.list(req, res))
  );

  api.post(
    '/',
    CreateProductValidator.validate(),
    checkValidation,
    catchAsync((req: Request, res: Response) => productController.create(req, res))
  );

  api.patch(
    '/:id/restock',
    RestockProductValidator.validate(),
    checkValidation,
    catchAsync((req: Request, res: Response) => productController.restock(req, res))
  );

  api.patch(
    '/:id/sell',
    SellProductValidator.validate(),
    checkValidation,
    catchAsync((req: Request, res: Response) => productController.sell(req, res))
  );

  return api;
};
