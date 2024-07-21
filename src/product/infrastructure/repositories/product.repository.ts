import { ClientSession } from 'mongoose';
import { Service } from 'typedi';
import { IOrderProduct } from '../../../order/domain/models/order.model';
import { BaseMongoRepository } from '../../../shared/infrastructure/repositories/base.repository';
import { IProduct } from '../../domain/models/i.product.model';
import { IProductRepository } from '../../domain/repositories/i.product.repository';
import { product } from '../model/product.model';

@Service()
export default class ProductRepository extends BaseMongoRepository<IProduct> implements IProductRepository {
  constructor() {
    super(product);
  }

  async updateProductsStock(products: IOrderProduct[], session?: ClientSession): Promise<void> {
    const bulkOps = products.map((product) => ({
      updateOne: {
        filter: { _id: product.productId, stock: { $gte: product.quantity } },
        update: { $inc: { stock: -product.quantity } },
      },
    }));

    await this.model.bulkWrite(bulkOps, { session }).then((res) => {
      if (res.matchedCount !== bulkOps.length) {
        throw new Error('unable to update record for conditions');
      }
    });
  }
}
