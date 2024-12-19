"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulateShot = void 0;
const simulateShot = (team) => {
    const scored = Math.random() < 0.5;
    return { team, scored };
};
exports.simulateShot = simulateShot;
