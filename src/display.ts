import { HistoryEntry } from "./types";

export const displayHistory = (history: HistoryEntry[]) => {
  history.forEach((entry) => {
    const { shotNumber, score, result } = entry;
    const teamAScoreChange =
      result.team === "Team A" && result.scored ? "+1" : "0";
    const teamBScoreChange =
      result.team === "Team B" && result.scored ? "+1" : "0";
    console.log(
      `Tir ${shotNumber} : Score : ${score.teamA}/${score.teamB} (Équipe A : ${teamAScoreChange} | Équipe B : ${teamBScoreChange})`
    );
  });
};