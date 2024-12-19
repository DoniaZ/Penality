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


}

