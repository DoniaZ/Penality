"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayHistory = void 0;
const displayHistory = (history) => {
    history.forEach((entry) => {
        const { shotNumber, score, result } = entry;
        const teamAScoreChange = result.team === "Team A" && result.scored ? "+1" : "0";
        const teamBScoreChange = result.team === "Team B" && result.scored ? "+1" : "0";
        console.log(`Tir ${shotNumber} : Score : ${score.teamA}/${score.teamB} (Équipe A : ${teamAScoreChange} | Équipe B : ${teamBScoreChange})`);
    });
};
exports.displayHistory = displayHistory;
