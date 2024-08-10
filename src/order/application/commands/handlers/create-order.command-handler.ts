import mongoose from 'mongoose';
import { Service } from 'typedi';
import ProductRepository from '../../../../product/infrastructure/repositories/product.repository';
import { ICommandHandler } from '../../../../shared/application/commands/interfaces/i.command-handler.service';
import OrderRepository from '../../../infrastructure/repositories/order.repository';
import { CreateOrderCommand } from '../create-order.command';

@Service()
export class CreateOrderCommandHandler implements ICommandHandler<CreateOrderCommand> {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly productRepository: ProductRepository
  ) {}

  async handle(command: CreateOrderCommand): Promise<void> {
    const { customerId, products } = command;
    const session = await mongoose.startSession();
    await session
      .withTransaction(async () => {
        await Promise.all([this.productRepository.updateProductsStock(products, session), this.orderRepository.insert({ customerId, products }, session)]);
      })
      .then(async () => await session.commitTransaction())
      .catch(async () => await session.abortTransaction())
      .finally(async () => await session.endSession());
  }
}
