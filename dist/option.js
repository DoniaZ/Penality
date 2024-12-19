"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.none = exports.some = exports.None = exports.Some = void 0;
class Some {
    constructor(value) {
        this.value = value;
    }
}
exports.Some = Some;
class None {
    constructor() { }
}
exports.None = None;
const some = (value) => new Some(value);
exports.some = some;
const none = () => new None();
exports.none = none;
