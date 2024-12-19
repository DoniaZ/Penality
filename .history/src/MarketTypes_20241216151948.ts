class MarketTypes {
  static Fruit = class {
    id: number;
    name: string;
    availability: number;
    price: number;
  };

  static OrderItem = class {
    fruitId: number;
    quantity: number;
    unitPrice: number;
    amount: number;
  };

  static Order = class {
    orderItems: MarketTypes.OrderItem[];
    amount: number;
  };

  static State = class {
    fruitsStock: MarketTypes.Fruit[];
  };
}
