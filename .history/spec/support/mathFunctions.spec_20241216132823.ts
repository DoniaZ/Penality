// spec/mathFunctions.spec.ts



describe("Math Functions", () => {
  it("should add two numbers", () => {
    expect(addCurried(2)(3)).toBe(5);
  });

  it("should multiply two numbers", () => {
    expect(multiplyCurried(2)(3)).toBe(6);
  });

  it("should divide two numbers", () => {
    expect(divideCurried(6)(3)).toBe(2);
    expect(() => divideCurried(6)(0)).toThrow("Division by zero");
  });

  it("should subtract two numbers", () => {
    expect(subtractCurried(5)(3)).toBe(2);
  });

  it("should increment a number by 10", () => {
    expect(increment10(5)).toBe(15);
  });
});
