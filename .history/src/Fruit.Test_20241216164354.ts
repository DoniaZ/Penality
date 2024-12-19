import { addFruitToStock, removeFruitFromStock } from "./marketFunctions";
import { describe, it, expect } from "vitest";
import { Fruit, State } from "./marketTypes";
import { some, none } from "./optionTypes";

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
 let state: State;

 beforeEach(() => {
   state = {
     fruitsStock: [
       { id: 1, name: "Pomme", availability: 100, price: 1.22 },
       { id: 2, name: "Poire", availability: 50, price: 2.3 },
       { id: 3, name: "Ananas", availability: 30, price: 2.9 },
     ],
   };
 });

 it("should calculate the initial stock value", () => {
   const stockValue = calculateStockAmount(state.fruitsStock);
   expect(stockValue).toBeCloseTo(100 * 1.22 + 50 * 2.3 + 30 * 2.9);
 });

 it("should add 30 strawberries to the stock", () => {
   const strawberries: Fruit = {
     id: 4,
     name: "Fraise",
     availability: 30,
     price: 7.0,
   };
   state.fruitsStock = addFruitToStock(state.fruitsStock, strawberries);
   expect(state.fruitsStock).toContain(strawberries);
 });

 it('should find a fruit by name "Fraise"', () => {
   const result = readFruitByName(state, "Fraise");
   expect(result).toEqual(
     some({ id: 4, name: "Fraise", availability: 30, price: 7.0 })
   );
 });

 it("should not find a fruit with id 666", () => {
   const result = state.fruitsStock.find((fruit) => fruit.id === 666);
   expect(result).toBeUndefined();
 });

 it("should remove all strawberries from the stock", () => {
   state.fruitsStock = removeFruitFromStock(state.fruitsStock, 4);
   expect(
     state.fruitsStock.find((fruit) => fruit.name === "Fraise")
   ).toBeUndefined();
 });

 it("should update the availability of pineapples to 10", () => {
   state.fruitsStock = updateAvailableFruitQuantity(state.fruitsStock, 3, 10);
   expect(
     state.fruitsStock.find((fruit) => fruit.name === "Ananas")?.availability
   ).toBe(10);
 });

 it("should sell 5 pineapples", () => {
   state.fruitsStock = sellFruit(state.fruitsStock, 3, 5);
   expect(
     state.fruitsStock.find((fruit) => fruit.name === "Ananas")?.availability
   ).toBe(5);
 });

 it("should add 10 melons to the stock", () => {
   const melons: Fruit = {
     id: 5,
     name: "Melon",
     availability: 10,
     price: 10.0,
   };
   state.fruitsStock = addFruitToStock(state.fruitsStock, melons);
   expect(state.fruitsStock).toContain(melons);
 });

 it("should sell 10 pineapples and 2 melons", () => {
   state.fruitsStock = sellFruit(state.fruitsStock, 3, 10);
   state.fruitsStock = sellFruit(state.fruitsStock, 5, 2);
   expect(
     state.fruitsStock.find((fruit) => fruit.name === "Ananas")?.availability
   ).toBe(-5);
   expect(
     state.fruitsStock.find((fruit) => fruit.name === "Melon")?.availability
   ).toBe(8);
 });

 it("should update the availability of apples to 10", () => {
   state.fruitsStock = updateAvailableFruitQuantity(state.fruitsStock, 1, 10);
   expect(
     state.fruitsStock.find((fruit) => fruit.name === "Pomme")?.availability
   ).toBe(10);
 });

 it("should remove pineapples from the stock", () => {
   state.fruitsStock = removeFruitFromStock(state.fruitsStock, 3);
   expect(
     state.fruitsStock.find((fruit) => fruit.name === "Ananas")
   ).toBeUndefined();
 });

 it("should sell 2 strawberries, 1 melon, and 1 pineapple", () => {
   state.fruitsStock = sellFruit(state.fruitsStock, 4, 2);
   state.fruitsStock = sellFruit(state.fruitsStock, 5, 1);
   state.fruitsStock = sellFruit(state.fruitsStock, 3, 1);
   expect(
     state.fruitsStock.find((fruit) => fruit.name === "Fraise")?.availability
   ).toBe(28);
   expect(
     state.fruitsStock.find((fruit) => fruit.name === "Melon")?.availability
   ).toBe(7);
   expect(
     state.fruitsStock.find((fruit) => fruit.name === "Ananas")?.availability
   ).toBe(-6);
 });

 

 it("should display the stock", () => {
   console.log(state.fruitsStock);
 });













});

