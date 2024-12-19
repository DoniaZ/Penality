import { displayHistory } from "./history";
import { HistoryEntry } from "./types";

const displayHistory = (history: HistoryEntry[]) => {
  history.forEach((entry) => {
    const { shotNumber, score, result } = entry;
    console.log(
      `Tir ${shotNumber}: Score: ${score.teamA}/${score.teamB} (${
        result.team
      }: ${result.scored ? "+1" : "0"})`
    );
  });
};