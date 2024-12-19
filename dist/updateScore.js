"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateScore = void 0;
const updateScore = (score, result) => {
    return result.scored
        ? result.team === "Team A"
            ? Object.assign(Object.assign({}, score), { teamA: score.teamA + 1 }) : Object.assign(Object.assign({}, score), { teamB: score.teamB + 1 })
        : score;
};
exports.updateScore = updateScore;
