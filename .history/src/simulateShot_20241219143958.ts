const simulateShot = (team: Team): PenaltyResult => {
  const scored = Math.random() < 0.5; // 50% chance de marquer
  return { team, scored };
};
