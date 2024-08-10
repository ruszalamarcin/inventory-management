import { Service } from 'typedi';
import { ICommandHandler } from '../../../../shared/application/commands/interfaces/i.command-handler.service';
import ProductRepository from '../../../infrastructure/repositories/product.repository';
import { SellProductCommand } from '../sell-product.command';

@Service()
export class SellProductCommandHandler implements ICommandHandler<SellProductCommand> {
  constructor(private readonly productRepository: ProductRepository) {}

  async handle(command: SellProductCommand): Promise<void> {
    const { productId, quantity } = command;
    await this.productRepository.updateOne({ _id: productId, stock: { $gte: quantity } }, { $inc: { stock: -quantity } });
  }
}
