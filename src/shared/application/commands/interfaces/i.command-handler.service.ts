import { ICommand } from './i.command.interface';

export interface ICommandHandler<T extends ICommand> {
  handle(command: T): Promise<void>;
}
