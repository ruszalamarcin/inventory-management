import { IProduct } from '../models/i.product.model';

export interface IResponseDataProductsFormatter {
  _id?: string;
  name: string;
  description: string;
  price: number;
  stock: number;
}

export interface IResponseProductsFormatter {
  data: IResponseDataProductsFormatter[];
}

export interface IProductFormatter {
  list(products: IProduct[]): Promise<IResponseProductsFormatter>;
}
