"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkWinner_1 = require("./checkWinner");
const display_1 = require("./display");
const history_1 = require("./history");
const simulateShot_1 = require("./simulateShot");
const replayFromHistory = (history) => {
    let state = { history: [], currentScore: { teamA: 0, teamB: 0 } };
    history.forEach((entry) => {
        state = (0, history_1.addToHistory)(state, entry.result);
    });
    (0, display_1.displayHistory)(state.history);
    const winner = (0, checkWinner_1.checkWinner)(state.currentScore, state.history.length);
    console.log(`Victoire: ${winner} (Score: ${state.currentScore.teamA}/${state.currentScore.teamB})`);
};
const simulatePenaltyShootout = () => {
    let state = { history: [], currentScore: { teamA: 0, teamB: 0 } };
    let winner = null;
    while (!winner) {
        const team = state.history.length % 2 === 0 ? "Team A" : "Team B";
        const result = (0, simulateShot_1.simulateShot)(team);
        state = (0, history_1.addToHistory)(state, result);
        winner = (0, checkWinner_1.checkWinner)(state.currentScore, state.history.length);
    }
    (0, display_1.displayHistory)(state.history);
    console.log(`Victoire: ${winner} (Score: ${state.currentScore.teamA}/${state.currentScore.teamB})`);
};
simulatePenaltyShootout();
