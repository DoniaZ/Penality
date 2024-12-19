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
