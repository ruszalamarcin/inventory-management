import { ICommand } from '../../../shared/application/commands/interfaces/i.command.interface';

export class CreateOrderCommand implements ICommand {
  constructor(
    public customerId: string,
    public products: CreateOrderProductCommand[]
  ) {}
}

class CreateOrderProductCommand implements ICommand {
  constructor(
    public productId: string,
    public quantity: number
  ) {}
}
