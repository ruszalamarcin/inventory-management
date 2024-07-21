import { Service } from 'typedi';
import { ICommandHandler } from '../../../../shared/application/commands/interfaces/i.command-handler.service';
import ProductRepository from '../../../infrastructure/repositories/product.repository';
import { CreateProductCommand } from '../create-product.command';

@Service()
export class CreateProductCommandHandler implements ICommandHandler<CreateProductCommand> {
  constructor(private readonly productRepository: ProductRepository) {}

  async handle(command: CreateProductCommand): Promise<void> {
    const { name, description, price, stock } = command;
    await this.productRepository.insert({ name, description, price, stock });
  }
}
