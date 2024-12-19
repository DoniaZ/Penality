const simulateShot = (team: Team): PenaltyResult => {
  const scored = Math.random() < 0.5;
  return { team, scored };
};
