import { FruitsStock } from "./types";

  
// Exemple de stock initial
const initialStock: FruitsStock = [
  { id: 1, name: "Pomme", availability: 100, price: 1.22 },
  { id: 2, name: "Poire", availability: 50, price: 2.3 },
  { id: 3, name: "Ananas", availability: 30, price: 2.9 },
];

// Affichage du stock initial
console.log("Stock initial:", initialStock);

// Ajout de fraises au stock
const strawberries = { id: 4, name: "Fraise", availability: 30, price: 7.0 };
const updatedStock = addFruitToStock(initialStock, strawberries);
console.log("Stock après ajout de fraises:", updatedStock);

// Recherche d'un fruit par nom
const foundFruitByName = readFruitByName(updatedStock, "Fraise");
console.log("Recherche de 'Fraise':", foundFruitByName);

// Recherche d'un fruit par ID
const foundFruitById = readFruitById(updatedStock, 666);
console.log("Recherche de l'ID 666:", foundFruitById);

// Suppression des fraises
const stockWithoutStrawberries = removeFruitFromStock(updatedStock, 4);
console.log("Stock après suppression des fraises:", stockWithoutStrawberries);

// Mise à jour de la quantité d'ananas
const stockWithUpdatedAnanas = updateAvailableFruitQuantity(
  stockWithoutStrawberries,
  3,
  10
);
console.log("Stock après mise à jour des ananas:", stockWithUpdatedAnanas);

// Vente de 5 ananas
const resultAfterSale = sellFruit(stockWithUpdatedAnanas, 3, 5);
console.log("Stock après vente de 5 ananas:", resultAfterSale);

// Calcul de la valeur du stock
const stockValue = calculateStockAmount(stockWithUpdatedAnanas);
console.log("Valeur du stock:", stockValue);
function addFruitToStock(initialStock: FruitsStock, strawberries: { id: number; name: string; availability: number; price: number; }) {
  throw new Error("Function not implemented.");
}

function readFruitByName(updatedStock: any, arg1: string) {
  throw new Error("Function not implemented.");
}

function readFruitById(updatedStock: any, arg1: number) {
  throw new Error("Function not implemented.");
}

function removeFruitFromStock(updatedStock: any, arg1: number) {
  throw new Error("Function not implemented.");
}

function updateAvailableFruitQuantity(stockWithoutStrawberries: any, arg1: number, arg2: number) {
  throw new Error("Function not implemented.");
}

function sellFruit(stockWithUpdatedAnanas: any, arg1: number, arg2: number) {
  throw new Error("Function not implemented.");
}

function calculateStockAmount(stockWithUpdatedAnanas: any) {
  throw new Error("Function not implemented.");
}

