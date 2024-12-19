import { GameState, PenaltyResult, HistoryEntry, Score } from "./types";

const addToHistory = (state: GameState, result: PenaltyResult): GameState => {
  const newScore = updateScore(state.currentScore, result);
  const newEntry: HistoryEntry = {
    shotNumber: state.history.length + 1,
    score: newScore,
    result,
  };
  return {
    history: [...state.history, newEntry],
    currentScore: newScore,
  };
};

function updateScore(currentScore: Score, result: PenaltyResult) {
    throw new Error("Function not implemented.");
}

