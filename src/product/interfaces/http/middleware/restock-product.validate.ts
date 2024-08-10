import { param, body, ValidationChain } from 'express-validator';

export default class RestockProductValidator {
  static validate(): ValidationChain[] {
    return [
      param('id').isString().withMessage('Product ID must be a string').notEmpty().withMessage('Product ID is required'),
      body('quantity').isInt({ gt: 0 }).withMessage('Quantity must be a positive integer'),
    ];
  }
}
