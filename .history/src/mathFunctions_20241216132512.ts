export type BinaryOperation = (x: number) => (y: number) => number;

export const addCurried: BinaryOperation = (x) => (y) => x + y;
export const multiplyCurried: BinaryOperation = (x) => (y) => x * y;
export const divideCurried: BinaryOperation = (x) => (y) => {
  if (y === 0) throw new Error("Division by zero");
  return x / y;
};
export const subtractCurried: BinaryOperation = (x) => (y) => x - y;

export const increment10 = addCurried(10);
