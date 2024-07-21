import { IQuery } from '../../../shared/application/queries/interfaces/i.query.interface';
import { IProduct } from '../../domain/models/i.product.model';

export class GetProductsQuery implements IQuery<IProduct[]> {
  constructor() {}
}
