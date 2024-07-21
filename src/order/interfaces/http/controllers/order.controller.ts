import { Request, Response } from 'express';
import { Service } from 'typedi';
import { CreateOrderCommand } from '../../../application/commands/create-order.command';
import { CreateOrderCommandHandler } from '../../../application/commands/handlers/create-order.command-handler';

@Service()
export default class OrderController {
  constructor(private readonly createOrderCommandHandler: CreateOrderCommandHandler) {}

  async create(req: Request, res: Response): Promise<Response> {
    const { customerId, products } = req.body;
    await this.createOrderCommandHandler.handle(new CreateOrderCommand(customerId, products));
    return res.status(201).json();
  }
}
