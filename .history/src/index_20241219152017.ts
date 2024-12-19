import { Team, PenaltyResult, Score, GameState, HistoryEntry } from "./types";

const simulateShot = (team: Team): PenaltyResult => {
  const scored = Math.random() < 0.5; // 50% chance de marquer
  return { team, scored };
};
const updateScore = (score: Score, result: PenaltyResult): Score => {
  return result.scored
    ? result.team === "Team A"
      ? { ...score, teamA: score.teamA + 1 }
      : { ...score, teamB: score.teamB + 1 }
    : score;
};
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
const displayHistory = (history: HistoryEntry[]) => {
  history.forEach((entry) => {
    const { shotNumber, score, result } = entry;
    console.log(
      `Tir ${shotNumber}: Score: ${score.teamA}/${score.teamB} (${
        result.team
      }: ${result.scored ? "+1" : "0"})`
    );
  });
};
const checkWinner = (score: Score, shots: number): Team | null => {
  if (shots >= 5) {
    if (score.teamA > score.teamB) return "Team A";
    if (score.teamB > score.teamA) return "Team B";
  }
  return null;
};
const checkWinner = (score: Score, shots: number): Team | null => {
  if (shots >= 5) {
    if (score.teamA > score.teamB) return "Team A";
    if (score.teamB > score.teamA) return "Team B";
  }
  return null;
};
const simulatePenaltyShootout = () => {
  let state: GameState = { history: [], currentScore: { teamA: 0, teamB: 0 } };
  let winner: Team | null = null;

  while (!winner) {
    const team = state.history.length % 2 === 0 ? "Team A" : "Team B";
    const result = simulateShot(team);
    state = addToHistory(state, result);
    winner = checkWinner(state.currentScore, state.history.length);
  }

  displayHistory(state.history);
  console.log(
    `Victoire: ${winner} (Score: ${state.currentScore.teamA}/${state.currentScore.teamB})`
  );
};

simulatePenaltyShootout();
