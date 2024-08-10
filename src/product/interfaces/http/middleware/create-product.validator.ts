import { body, ValidationChain } from 'express-validator';

export default class CreateProductValidator {
  static validate(): ValidationChain[] {
    return [
      body('name').isString().withMessage('Name must be a string').isLength({ max: 50 }).withMessage('Name must be at most 50 characters long'),
      body('description').isString().withMessage('Description must be a string').isLength({ max: 255 }).withMessage('Description must be at most 255 characters long'),
      body('price').isFloat({ gt: 0 }).withMessage('Price must be a positive number'),
      body('stock').isInt({ min: 0 }).withMessage('Stock must be a non-negative integer'),
    ];
  }
}
