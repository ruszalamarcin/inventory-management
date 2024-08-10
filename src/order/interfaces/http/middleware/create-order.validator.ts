import { body, ValidationChain } from 'express-validator';

export default class CreateOrderValidator {
  static validate(): ValidationChain[] {
    return [
      body('customerId').isString().withMessage('Customer ID must be a string').notEmpty().withMessage('Customer ID is required'),
      body('products').isArray({ min: 1 }).withMessage('Products must be an array with at least one product'),
      body('products.*.productId').isString().withMessage('Customer ID must be a string').notEmpty().withMessage('Customer ID is required'),
      body('products.*.quantity').isInt({ gt: 0 }).withMessage('Quantity must be a positive integer'),
    ];
  }
}
