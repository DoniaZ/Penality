const updateScore = (score: Score, result: PenaltyResult): Score => {
  return result.scored
    ? result.team === "Team A"
      ? { ...score, teamA: score.teamA + 1 }
      : { ...score, teamB: score.teamB + 1 }
    : score;
};