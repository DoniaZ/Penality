import { describe, it, expect } from "vitest";
describe("Market Functions", () => {
  it("should add a fruit to the stock", () => {
    const stock = [];
    const fruit = { id: 1, name: "Apple", availability: 100, price: 1.22 };
    const updatedStock = addFruitToStock(stock, fruit);
    expect(updatedStock).toContain(fruit);
  });

  it("should remove a fruit from the stock", () => {
    const fruit = { id: 1, name: "Apple", availability: 100, price: 1.22 };
    const stock = [fruit];
    const updatedStock = removeFruitFromStock(stock, 1);
    expect(updatedStock).not.toContain(fruit);
  });
});
