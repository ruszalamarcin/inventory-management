import { Request, Response, NextFunction, ErrorRequestHandler } from 'express-serve-static-core';

interface IErrorWithStatus extends Error {
  status: number;
}

export class ErrorWithStatus extends Error {
  public status: number;
  public message: string;

  constructor(status: number, message: string) {
    super();
    this.status = status;
    this.message = message;
  }
}

export function catchAsync(fn: Function) {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch((err: Error) => {
      next(new ErrorWithStatus(500, err.message || 'internal error'));
    });
  };
}

export function notFound(req: Request, res: Response, next: NextFunction) {
  const err = new ErrorWithStatus(404, 'page not found');
  next(err);
}

export function catchErrors(err: IErrorWithStatus, req: Request, res: Response, next: NextFunction) {
  res.status(err.status).json({
    status: err.status,
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? {} : err.stack,
  });
}
