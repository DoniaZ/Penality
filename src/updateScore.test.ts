import { updateScore } from "../src/updateScore";
import { Score, PenaltyResult } from "../src/types";

describe("updateScore", () => {
  it("should increase Team A score when they score", () => {
    const initialScore: Score = { teamA: 0, teamB: 0 };
    const result: PenaltyResult = { team: "Team A", scored: true };
    const newScore = updateScore(initialScore, result);
    expect(newScore.teamA).toBe(1);
    expect(newScore.teamB).toBe(0);
  });

  it("should increase Team B score when they score", () => {
    const initialScore: Score = { teamA: 0, teamB: 0 };
    const result: PenaltyResult = { team: "Team B", scored: true };
    const newScore = updateScore(initialScore, result);
    expect(newScore.teamA).toBe(0);
    expect(newScore.teamB).toBe(1);
  });

  it("should not change score if no goal is scored", () => {
    const initialScore: Score = { teamA: 0, teamB: 0 };
    const result: PenaltyResult = { team: "Team A", scored: false };
    const newScore = updateScore(initialScore, result);
    expect(newScore.teamA).toBe(0);
    expect(newScore.teamB).toBe(0);
  });
});
