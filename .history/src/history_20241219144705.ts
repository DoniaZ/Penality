import { GameState, PenaltyResult, HistoryEntry, Score } from "./types";

export const addToHistory = (state: GameState, result: PenaltyResult): GameState => {
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
export const displayHistory = (history: HistoryEntry[]) => {
  history.forEach((entry) => {
    const { shotNumber, score, result } = entry;
    console.log(
      `Tir ${shotNumber}: Score: ${score.teamA}/${score.teamB} (${
        result.team
      }: ${result.scored ? "+1" : "0"})`
    );
  });
};
const updateScore = (score: Score, result: PenaltyResult): Score => {
  return result.scored
    ? result.team === "Team A"
      ? { ...score, teamA: score.teamA + 1 }
      : { ...score, teamB: score.teamB + 1 }
    : score;
};
