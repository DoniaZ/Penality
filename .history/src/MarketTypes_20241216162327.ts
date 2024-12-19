import { Fruit, FruitsStock, OrderItem, Order, State } from "./marketTypes.";

export type Fruit = {
  id: number;
  name: string;
  availability: number;
  price: number;
};

export type FruitsStock = Fruit[];

export type OrderItem = {
  fruit_id: number;
  quantity: number;
  unitPrice: number;
  amount: number;
};

export type Order = {
  orderItems: OrderItem[];
  amount: number;
};

export type State = {
  fruitsStock: FruitsStock;
};
