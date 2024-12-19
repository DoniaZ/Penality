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

onst updateScore = (score: Score, result: PenaltyResult): Score => {
  return result.scored
    ? result.team === "Team A"
      ? { ...score, teamA: score.teamA + 1 }
      : { ...score, teamB: score.teamB + 1 }
    : score;
};
