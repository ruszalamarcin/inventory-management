import { ClientSession } from 'mongoose';
import { IOrderProduct } from '../../../order/domain/models/order.model';

export interface IProductRepository {
  updateProductsStock(products: IOrderProduct[], session?: ClientSession): Promise<void>;
}
