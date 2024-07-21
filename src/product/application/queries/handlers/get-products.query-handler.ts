import { Service } from 'typedi';
import { IQueryHandler } from '../../../../shared/application/queries/interfaces/i.query.handler.interface';
import { IProduct } from '../../../domain/models/i.product.model';
import ProductRepository from '../../../infrastructure/repositories/product.repository';
import { GetProductsQuery } from '../get-products.query';

@Service()
export class GetProductsQueryHandler implements IQueryHandler<GetProductsQuery, IProduct[]> {
  constructor(private readonly productRepository: ProductRepository) {}

  async handle(command: GetProductsQuery): Promise<IProduct[]> {
    const {} = command;
    return this.productRepository.findAll();
  }
}
