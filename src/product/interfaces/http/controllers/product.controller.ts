import { Request, Response } from 'express';
import { Service } from 'typedi';
import { CreateProductCommand } from '../../../application/commands/create-product.command';
import { CreateProductCommandHandler } from '../../../application/commands/handlers/create-product.command-handler';
import { RestockProductCommandHandler } from '../../../application/commands/handlers/restock-product.command-handler';
import { SellProductCommandHandler } from '../../../application/commands/handlers/sell-product.command-handler';
import { RestockProductCommand } from '../../../application/commands/restock-product.command';
import { SellProductCommand } from '../../../application/commands/sell-product.command';
import { GetProductsQuery } from '../../../application/queries/get-products.query';
import { GetProductsQueryHandler } from '../../../application/queries/handlers/get-products.query-handler';
import { ProductFormatter } from '../formatters/product.formatter';

@Service()
export default class ProductController {
  constructor(
    private readonly getProductsQueryHandler: GetProductsQueryHandler,
    private readonly createProductCommandHandler: CreateProductCommandHandler,
    private readonly restockProductCommandHandler: RestockProductCommandHandler,
    private readonly sellProductCommandHandler: SellProductCommandHandler,
    private readonly productFormatter: ProductFormatter
  ) {}

  async list(req: Request, res: Response): Promise<Response> {
    const products = await this.getProductsQueryHandler.handle(new GetProductsQuery());
    const result = await this.productFormatter.list(products);
    return res.status(200).json(result);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { name, description, price, stock } = req.body;
    await this.createProductCommandHandler.handle(new CreateProductCommand(name, description, price, stock));
    return res.status(201).json();
  }

  async restock(req: Request, res: Response): Promise<Response> {
    await this.restockProductCommandHandler.handle(new RestockProductCommand(req.params.id, req.body.quantity));
    return res.status(204).json();
  }

  async sell(req: Request, res: Response): Promise<Response> {
    await this.sellProductCommandHandler.handle(new SellProductCommand(req.params.id, req.body.quantity));
    return res.status(204).json();
  }
}
