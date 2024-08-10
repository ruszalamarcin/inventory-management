import { Request, Response, NextFunction } from 'express';

export class JsonTransform {
  private jsonArrayFields: string[];

  constructor(jsonArrayFields: string[]) {
    this.jsonArrayFields = jsonArrayFields;
  }

  private transform(req: Request): void {
    this.jsonArrayFields.forEach((field) => {
      if (req.body[field]) {
        try {
          req.body[field] = JSON.parse(req.body[field]);
        } catch (e) {
          req.body[field] = [];
        }
      }
    });
  }

  public handle = (req: Request, res: Response, next: NextFunction): void => {
    this.transform(req);
    next();
  };
}

export const jsonTransform = (req: Request, res: Response, next: NextFunction): void => {
  new JsonTransform(['products']).handle(req, res, next);
};
