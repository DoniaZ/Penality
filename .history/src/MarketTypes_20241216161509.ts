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

type Order = {
  orderItems: OrderItem[];
  amount: number;
};

type State = {
  fruitsStock: FruitsStock;
};
