import { ICommand } from '../../../shared/application/commands/interfaces/i.command.interface';

export class CreateProductCommand implements ICommand {
  constructor(
    public name: string,
    public description: string,
    public price: number,
    public stock: number
  ) {}
}
