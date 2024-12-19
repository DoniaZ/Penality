
export type Team = "Team A" | "Team B";

export type PenaltyResult = {
  team: Team;
  scored: boolean;
};

export type Score = {
  teamA: number;
  teamB: number;
};

export type HistoryEntry = {
  shotNumber: number;
  score: Score;
  result: PenaltyResult;
};

type GameState = {
  history: HistoryEntry[];
  currentScore: Score;
};