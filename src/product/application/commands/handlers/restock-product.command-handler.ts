import { Service } from 'typedi';
import { ICommandHandler } from '../../../../shared/application/commands/interfaces/i.command-handler.service';
import ProductRepository from '../../../infrastructure/repositories/product.repository';
import { RestockProductCommand } from '../restock-product.command';

@Service()
export class RestockProductCommandHandler implements ICommandHandler<RestockProductCommand> {
  constructor(private readonly productRepository: ProductRepository) {}

  async handle(command: RestockProductCommand): Promise<void> {
    const { productId, quantity } = command;
    await this.productRepository.updateOne({ _id: productId }, { $inc: { stock: quantity } });
  }
}
