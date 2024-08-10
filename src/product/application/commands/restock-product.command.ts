import { ICommand } from '../../../shared/application/commands/interfaces/i.command.interface';

export class RestockProductCommand implements ICommand {
  constructor(
    public productId: string,
    public quantity: number
  ) {}
}
