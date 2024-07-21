import { Service } from 'typedi';
import { BaseMongoRepository } from '../../../shared/infrastructure/repositories/base.repository';
import { IOrder } from '../../domain/models/order.model';
import { IOrderRepository } from '../../domain/repositories/i.order.repository';
import { order } from '../models/order.model';

@Service()
export default class OrderRepository extends BaseMongoRepository<IOrder> implements IOrderRepository {
  constructor() {
    super(order);
  }
}
