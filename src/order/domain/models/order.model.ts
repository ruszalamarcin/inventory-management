export interface IOrderProduct {
  productId: string;
  quantity: number;
}

export interface IOrder {
  _id?: string;
  customerId: string;
  products: IOrderProduct[];
}
