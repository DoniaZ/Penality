import { Fruit, FruitsStock, OrderItem } from "marketplac";

//  ID aléatoire
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


};
