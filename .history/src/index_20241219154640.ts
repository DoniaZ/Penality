import { checkWinner } from "./checkWinner";
import { displayHistory } from "./display";
import { addToHistory } from "./history";
import { simulateShot } from "./simulateShot";
import { GameState, HistoryEntry, Team } from "./types";

const replayFromHistory = (history: HistoryEntry[]) => {
  let state: GameState = { history: [], currentScore: { teamA: 0, teamB: 0 } };

  history.forEach((entry) => {
    state = addToHistory(state, entry.result);
  });

  displayHistory(state.history);
  const winner = checkWinner(state.currentScore, state.history.length);
  console.log(
    `Victoire: ${winner} (Score: ${state.currentScore.teamA}/${state.currentScore.teamB})`
  );
};

const simulatePenaltyShootout = () => {
  let state: GameState = { history: [], currentScore: { teamA: 0, teamB: 0 } };
  let winner: Team | null = null;

  while (!winner) {
    const team: Team = state.history.length % 2 === 0 ? "Team A" : "Team B";
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


