import mongoose, { Schema } from 'mongoose';
import { IProduct } from '../../domain/models/i.product.model';

const ProductSchema: Schema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  name: { type: String, required: true, maxlength: 50 },
  description: { type: String, required: true, maxlength: 255 },
  price: { type: Number, required: true, min: [0, 'Price cannot be negative'] },
  stock: { type: Number, required: true, min: [0, 'Stock cannot be negative'] },
});

export const product = mongoose.model<IProduct>('Product', ProductSchema);
