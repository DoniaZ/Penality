import { checkWinner } from "./checkWinner";
import { addToHistory, displayHistory } from "./history";
import { Team, PenaltyResult, GameState, Score } from "./types";

export const simulateShot = (team: Team): PenaltyResult => {
  const scored = Math.random() < 0.5;
  return { team, scored };
};
export const simulatePenaltyShootout = () => {
  let state: GameState = { history: [], currentScore: { teamA: 0, teamB: 0 } };
  let winner: Team | null = null;

  while (!winner) {
    const team = state.history.length % 2 === 0 ? "Team A" : "Team B";
    const result = simulateShot(team);
    state = addToHistory(state, result);
    winner = checkWinner(state.currentScore, state.history.length);
  }



simulatePenaltyShootout();

