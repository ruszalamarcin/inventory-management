import { Service } from 'typedi';
import { IProductFormatter, IResponseProductsFormatter } from '../../../domain/formatters/i.product.formatter';
import { IProduct } from '../../../domain/models/i.product.model';

@Service()
export class ProductFormatter implements IProductFormatter {
  async list(products: IProduct[]): Promise<IResponseProductsFormatter> {
    return {
      data: products.map((product) => {
        const { _id, name, description, price, stock } = product;

        return {
          _id,
          name,
          description,
          price,
          stock,
        };
      }),
    };
  }
}
