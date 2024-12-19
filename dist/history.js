"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayHistory = exports.addToHistory = void 0;
const updateScore_1 = require("./updateScore");
const addToHistory = (state, result) => {
    const newScore = (0, updateScore_1.updateScore)(state.currentScore, result);
    const newEntry = {
        shotNumber: state.history.length + 1,
        score: newScore,
        result,
    };
    return {
        history: [...state.history, newEntry],
        currentScore: newScore,
    };
};
exports.addToHistory = addToHistory;
const displayHistory = (history) => {
    history.forEach((entry) => {
        const { shotNumber, score, result } = entry;
        console.log(`Tir ${shotNumber}: Score: ${score.teamA}/${score.teamB} (${result.team}: ${result.scored ? "+1" : "0"})`);
    });
};
exports.displayHistory = displayHistory;
