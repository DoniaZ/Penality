imp
// Génère un ID aléatoire
const generateRandomNumberId = (): number => Math.floor(Math.random() * 1000);

// Vérifie si une valeur est un fruit
const isFruit = (value: any): value is Fruit => {
  return (
    typeof value.id === "number" &&
    typeof value.name === "string" &&
    typeof value.availability === "number" &&
    typeof value.price === "number"
  );
};

// Vérifie si une valeur est un stock de fruits
const isFruitsStock = (value: any): value is FruitsStock => {
  return Array.isArray(value) && value.every(isFruit);
};

// Ajoute un fruit au stock
const addFruitToStock = (stock: FruitsStock, fruit: Fruit): FruitsStock => {
  return [...stock, fruit];
};

// Supprime un fruit du stock
const removeFruitFromStock = (
  stock: FruitsStock,
  fruitId: number
): FruitsStock => {
  return stock.filter((fruit) => fruit.id !== fruitId);
};

// Vide le stock de fruits
const clearFruitsStock = (): FruitsStock => [];

// Met à jour la quantité disponible d'un fruit
const updateAvailableFruitQuantity = (
  stock: FruitsStock,
  fruitId: number,
  quantity: number
): FruitsStock => {
  return stock.map((fruit) =>
    fruit.id === fruitId ? { ...fruit, availability: quantity } : fruit
  );
};

// Retourne un fruit par ID
const readFruitById = (
  stock: FruitsStock,
  fruitId: number
): Fruit | undefined => {
  return stock.find((fruit) => fruit.id === fruitId);
};

// Retourne un fruit par nom
const readFruitByName = (
  stock: FruitsStock,
  name: string
): Fruit | undefined => {
  return stock.find((fruit) => fruit.name === name);
};

// Vend un fruit
const sellFruit = (
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
const calculateAmount = (orderItems: OrderItem[]): number => {
  return orderItems.reduce((total, item) => total + item.amount, 0);
};

// Calcule la valeur monétaire du stock
const calculateStockAmount = (stock: FruitsStock): number => {
  return stock.reduce(
    (total, fruit) => total + fruit.price * fruit.availability,
    0
  );
};
