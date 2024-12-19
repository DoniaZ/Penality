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

  // Génère un ID aléatoire
  generateRandomNumberId = (): number => Math.floor(Math.random() * 1000);

  // Vérifie si une valeur est un fruit
  isFruit = (value: any): value is Fruit => {
    return (
      typeof value.id === "number" &&
      typeof value.name === "string" &&
      typeof value.availability === "number" &&
      typeof value.price === "number"
    );
  };

  // Vérifie si une valeur est un stock de fruits
  isFruitsStock = (value: any): value is FruitsStock => {
    return Array.isArray(value) && value.every(isFruit);
  };

  // Ajoute un fruit au stock
  addFruitToStock = (stock: FruitsStock, fruit: Fruit): FruitsStock => {
    return [...stock, fruit];
  };

  // Supprime un fruit du stock
  removeFruitFromStock = (stock: FruitsStock, fruitId: number): FruitsStock => {
    return stock.filter((fruit) => fruit.id !== fruitId);
  };

  // Vide le stock de fruits
  clearFruitsStock = (): FruitsStock => [];

  // Met à jour la quantité disponible d'un fruit
  updateAvailableFruitQuantity = (
    stock: FruitsStock,
    fruitId: number,
    quantity: number
  ): FruitsStock => {
    return stock.map((fruit) =>
      fruit.id === fruitId ? { ...fruit, availability: quantity } : fruit
    );
  };

  // Retourne un fruit par ID
  readFruitById = (stock: FruitsStock, fruitId: number): Fruit | undefined => {
    return stock.find((fruit) => fruit.id === fruitId);
  };

  // Retourne un fruit par nom
  readFruitByName = (stock: FruitsStock, name: string): Fruit | undefined => {
    return stock.find((fruit) => fruit.name === name);
  };

  // Vend un fruit
  sellFruit = (
    stock: FruitsStock,
    fruitId: number,
    quantity: number
  ): FruitsStock => {
    return stock.map((fruit) =>
      fruit.id === fruitId
        ? { ...fruit, availability: fruit.availability - quantity }
        : fruit
    );
  };

  // Calcule le montant d'une vente
  calculateAmount = (orderItems: OrderItem[]): number => {
    return orderItems.reduce((total, item) => total + item.amount, 0);
  };

  // Calcule la valeur monétaire du stock
  calculateStockAmount = (stock: FruitsStock): number => {
    return stock.reduce(
      (total, fruit) => total + fruit.price * fruit.availability,
      0
    );
  };
}

