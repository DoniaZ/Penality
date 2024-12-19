import { simulateShot } from "./simulateShot";

describe("simulateShot", () => {
  it("should return a result for Team A", () => {
    const result = simulateShot("Team A");
    expect(result.team).toBe("Team A");
    expect(typeof result.scored).toBe("boolean");
  });

  it("should return a result for Team B", () => {
    const result = simulateShot("Team B");
    expect(result.team).toBe("Team B");
    expect(typeof result.scored).toBe("boolean");
  });
});
