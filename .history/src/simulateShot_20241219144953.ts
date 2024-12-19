import { addToHistory } from "./history";
import { Team, PenaltyResult, GameState, Score } from "./types";

const simulateShot = (team: Team): PenaltyResult => {
  const scored = Math.random() < 0.5;
  return { team, scored };
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

