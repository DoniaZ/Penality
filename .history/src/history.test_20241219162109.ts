import { addToHistory } from "../src/history";
import { GameState, PenaltyResult } from "../src/types";

describe("addToHistory", () => {
  it("should add a new entry to the history and update the score", () => {
    const initialState: GameState = {
      history: [],
      currentScore: { teamA: 0, teamB: 0 },
    };

    const result: PenaltyResult = { team: "Team A", scored: true };

    const newState = addToHistory(initialState, result);

    expect(newState.history.length).toBe(1);
    expect(newState.history[0].shotNumber).toBe(1);
    expect(newState.history[0].score.teamA).toBe(1);
    expect(newState.history[0].score.teamB).toBe(0);
    expect(newState.history[0].result).toEqual(result);
    expect(newState.currentScore.teamA).toBe(1);
    expect(newState.currentScore.teamB).toBe(0);
  });

  it("should handle multiple entries correctly", () => {
    const initialState: GameState = {
      history: [],
      currentScore: { teamA: 0, teamB: 0 },
    };

    const result1: PenaltyResult = { team: "Team A", scored: true };
    const result2: PenaltyResult = { team: "Team B", scored: false };

    let newState = addToHistory(initialState, result1);
    newState = addToHistory(newState, result2);

    expect(newState.history.length).toBe(2);
    expect(newState.history[1].shotNumber).toBe(2);
    expect(newState.history[1].score.teamA).toBe(1);
    expect(newState.history[1].score.teamB).toBe(0);
    expect(newState.currentScore.teamA).toBe(1);
    expect(newState.currentScore.teamB).toBe(0);
  });
});
