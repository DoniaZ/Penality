import { right, left } from "./Either";
import { Fruit, OrderItem } from "./types";


describe("Stock Management Functions", () => {
  const apple: Fruit = { id: 1, name: "Apple", availability: 100, price: 1.22 };
  const banana: Fruit = { id: 2, name: "Banana", availability: 50, price: 0.5 };
  const stock = [apple, banana];

  test("generateRandomNumberId should generate a positive number", () => {
    const id = generateRandomNumberId();
    expect(id).toBeGreaterThan(0);
  });

  test("isFruit should validate a fruit object", () => {
    expect(isFruit(apple)).toBe(true);
    expect(isFruit({
        id: 0,
        name: "",
        availability: 0,
        price: 0
    })).toBe(false);
  });

  test("isFruitsStock should validate a stock of fruits", () => {
    expect(isFruitsStock(stock)).toBe(true);
    expect(isFruitsStock([{
        id: 0,
        name: "",
        availability: 0,
        price: 0
    }])).toBe(false);
  });

  test("addFruitToStock should add a fruit to the stock", () => {
    const newFruit: Fruit = {
      id: 3,
      name: "Orange",
      availability: 30,
      price: 0.8,
    };
    const newStock = addFruitToStock(stock, newFruit);
    expect(newStock).toContain(newFruit);
  });

  test("removeFruitFromStock should remove a fruit from the stock", () => {
    const newStock = removeFruitFromStock(stock, apple.id);
    expect(newStock).not.toContain(apple);
  });

  test("clearFruitsStock should clear the stock", () => {
    const clearedStock = clearFruitsStock();
    expect(clearedStock).toEqual([]);
  });

  
  test("updateAvailableFruitQuantity should update the quantity of a fruit", () => {
    const updatedStock = updateAvailableFruitQuantity(stock, apple.id, 50);
    expect(
      updatedStock.find((fruit) => fruit.id === apple.id)?.availability
    ).toBe(50);
  });

  test("readFruitById should return a fruit by ID", () => {
    expect(readFruitById(stock, apple.id)).toEqual(apple);
    expect(readFruitById(stock, 999)).toBeNull();
  });

  test("readFruitByName should return a fruit by name", () => {
    expect(readFruitByName(stock, "Apple")).toEqual(apple);
    expect(readFruitByName(stock, "Nonexistent")).toBeNull();
  });

  test("sellFruit should sell a fruit and update stock", () => {
    const result = sellFruit(stock, apple.id, 10);
    expect(result).toEqual(right([{ ...apple, availability: 90 }, banana]));
  });

  test("sellFruit should return an error if stock is insufficient", () => {
    const result = sellFruit(stock, apple.id, 200);
    expect(result).toEqual(
      left(new Error("Insufficient stock or fruit not found"))
    );
  });

  test("calculateAmount should calculate the total amount of an order", () => {
    const orderItems: OrderItem[] = [
      { fruitId: 1, quantity: 10, unitPrice: 1.22, amount: 12.2 },
      { fruitId: 2, quantity: 5, unitPrice: 0.5, amount: 2.5 },
    ];
    expect(calculateAmount(orderItems)).toBe(14.7);
  });

  test("calculateStockAmount should calculate the total value of the stock", () => {
    expect(calculateStockAmount(stock)).toBe(161);
  });
});
function generateRandomNumberId() {
    throw new Error("Function not implemented.");
}

function isFruit(apple: Fruit): any {
    throw new Error("Function not implemented.");
}

function isFruitsStock(stock: Fruit[]): any {
    throw new Error("Function not implemented.");
}

function addFruitToStock(stock: Fruit[], newFruit: Fruit) {
    throw new Error("Function not implemented.");
}

function removeFruitFromStock(stock: Fruit[], id: number) {
    throw new Error("Function not implemented.");
}

function clearFruitsStock() {
    throw new Error("Function not implemented.");
}

function updateAvailableFruitQuantity(stock: Fruit[], id: number, arg2: number) {
    throw new Error("Function not implemented.");
}

function readFruitById(stock: Fruit[], id: number): any {
    throw new Error("Function not implemented.");
}

function readFruitByName(stock: Fruit[], arg1: string): any {
    throw new Error("Function not implemented.");
}

function sellFruit(stock: Fruit[], id: number, arg2: number) {
    throw new Error("Function not implemented.");
}

function calculateAmount(orderItems: OrderItem[]): any {
    throw new Error("Function not implemented.");
}

function calculateStockAmount(stock: Fruit[]): any {
    throw new Error("Function not implemented.");
}

