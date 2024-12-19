/*
import { checkWinner } from "./checkWinner";
import { displayHistory } from "./display";
import { addToHistory } from "./history";
import { simulateShot } from "./simulateShot";
import { GameState, Team } from "./types";

const simulatePenaltyShootout = () => {
  let state: GameState = { history: [], currentScore: { teamA: 0, teamB: 0 } };
  let winner: Team | null = null;

  while (!winner) {
    const team: Team = state.history.length % 2 === 0 ? "Team A" : "Team B";
    const result = simulateShot(team);
    state = addToHistory(state, result);
    winner = checkWinner(state.currentScore, state.history.length);
  }

  displayHistory(state.history);
  console.log(
    `Victoire: ${winner} (Score: ${state.currentScore.teamA}/${state.currentScore.teamB})`
  );
};

simulatePenaltyShootout();


*/
type Team = "Team A" | "Team B";

type PenaltyResult = {
  team: Team;
  scored: boolean;
};

type Score = {
  teamA: number;
  teamB: number;
};

type HistoryEntry = {
  shotNumber: number;
  score: Score;
  result: PenaltyResult;
};

type GameState = {
  history: HistoryEntry[];
  currentScore: Score;
};

// Simule un tir
const simulateShot = (team: Team): PenaltyResult => {
  const scored = Math.random() < 0.5; // 50% chance de marquer
  return { team, scored };
};

// Met à jour le score
const updateScore = (score: Score, result: PenaltyResult): Score => {
  return result.scored
    ? result.team === "Team A"
      ? { ...score, teamA: score.teamA + 1 }
      : { ...score, teamB: score.teamB + 1 }
    : score;
};

// Ajoute à l'historique
const addToHistory = (state: GameState, result: PenaltyResult): GameState => {
  const newScore = updateScore(state.currentScore, result);
  const newEntry: HistoryEntry = {
    shotNumber: state.history.length + 1,
    score: newScore,
    result,
  };
  return {
    history: [...state.history, newEntry],
    currentScore: newScore,
  };
};

// Affiche l'historique
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

// Vérifie le vainqueur
const checkWinner = (score: Score, shots: number): Team | null => {
  if (shots >= 5) {
    if (score.teamA > score.teamB) return "Team A";
    if (score.teamB > score.teamA) return "Team B";
  }
  return null;
};

// Simule la séance de tirs au but
const simulatePenaltyShootout = () => {
  let state: GameState = { history: [], currentScore: { teamA: 0, teamB: 0 } };
  let winner: Team | null = null;

  while (!winner) {
    const team: Team = state.history.length % 2 === 0 ? "Team A" : "Team B";
    const result = simulateShot(team);
    state = addToHistory(state, result);
    winner = checkWinner(state.currentScore, state.history.length);
  }

  displayHistory(state.history);
  console.log(
    `Victoire: ${winner} (Score: ${state.currentScore.teamA}/${state.currentScore.teamB})`
  );
};

simulatePenaltyShootout();