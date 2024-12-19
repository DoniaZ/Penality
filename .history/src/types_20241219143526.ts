
type Team = "Team A" | "Team B";

type PenaltyResult = {
  team: Team;
  scored: boolean;
};

type Score = {
  teamA: number;
  teamB: number;
};

type HistoryEntry = {
  shotNumber: number;
  score: Score;
  result: PenaltyResult;
};

type GameState = {
  history: HistoryEntry[];
  currentScore: Score;
};