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

  
  

 

  test("readFruitById should return a fruit by ID", () => {
    expect(readFruitById(stock, apple.id)).toEqual(apple);
    expect(readFruitById(stock, 999)).toBeNull();
  });

  test("readFruitByName should return a fruit by name", () => {
    expect(readFruitByName(stock, "Apple")).toEqual(apple);
    expect(readFruitByName(stock, "Nonexistent")).toBeNull();
  });

  


  test("calculateStockAmount should calculate the total value of the stock", () => {
    expect(calculateStockAmount(stock)).toBe(161);
  });
});
function generateRandomNumberId() {
    throw new Error("Function not implemented.");
}

