
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

// Fonction pour vérifier si un objet est un Fruit
const isFruit = (value: any): value is Fruit => {
  return (
    typeof value.id === "number" &&
    typeof value.name === "string" &&
    typeof value.availability === "number" &&
    typeof value.price === "number"
  );
};

// Exemple d'utilisation
const state: State = {
  fruitsStock: [
    { id: 1, name: "Apple", availability: 100, price: 1.22 },
    { id: 2, name: "Banana", availability: 50, price: 0.99 },
  ],
};

const result = readFruitByName(state, "Apple");

if (result instanceof Some) {
  console.log(`Fruit: ${result.value.name} | Quantity: ${result.value.availability}`);
} else {
  console.log("Fruit not found");
}