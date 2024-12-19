"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkWinner = void 0;
const checkWinner = (score, shots) => {
    if (shots >= 5) {
        if (score.teamA > score.teamB)
            return "Team A";
        if (score.teamB > score.teamA)
            return "Team B";
    }
    return null;
};
exports.checkWinner = checkWinner;
