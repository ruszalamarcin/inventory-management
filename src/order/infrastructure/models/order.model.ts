import mongoose, { Schema } from 'mongoose';
import { IOrder } from '../../domain/models/order.model';

const OrderSchema: Schema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  customerId: { type: String, required: true },
  products: [{ productId: String, quantity: Number }],
});

export const order = mongoose.model<IOrder>('Order', OrderSchema);
