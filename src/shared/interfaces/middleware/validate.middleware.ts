import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

export default class Validator {
  static checkValidationResult(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
}

export const checkValidation = (req: Request, res: Response, next: NextFunction): void => {
  Validator.checkValidationResult(req, res, next);
};
