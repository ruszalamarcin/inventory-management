import { IQuery } from './i.query.interface';

export interface IQueryHandler<T extends IQuery<R>, R> {
  handle(query: T): Promise<R>;
}
