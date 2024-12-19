import { Score, Team } from "./types";

export const checkWinner = (score: Score, shots: number): Team | null => {
  if (shots >= 5) {
    if (score.teamA > score.teamB) return "Team A";
    if (score.teamB > score.teamA) return "Team B";
  }
  return null;
};
