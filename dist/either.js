"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.right = exports.left = exports.Right = exports.Left = void 0;
class Left {
    constructor(value) {
        this.value = value;
    }
}
exports.Left = Left;
class Right {
    constructor(value) {
        this.value = value;
    }
}
exports.Right = Right;
const left = (l) => new Left(l);
exports.left = left;
const right = (r) => new Right(r);
exports.right = right;
