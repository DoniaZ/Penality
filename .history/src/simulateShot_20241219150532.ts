export type Team = "Team A" | "Team B";

export type PenaltyResult = {
  team: Team;
  scored: boolean;
};

export const simulateShot = (team: Team): PenaltyResult => {
  const scored = Math.random() < 0.5;
  return { team, scored };
};
