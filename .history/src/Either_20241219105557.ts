type Option<T> = T | null;

type Either<L, R> = { kind: "left"; value: L } | { kind: "right"; value: R };

const some = <T>(value: T): Option<T> => value;
const none = <T>(): Option<T> => null;

const left = <L, R>(value: L): Either<L, R> => ({ kind: "left", value });
const right = <L, R>(value: R): Either<L, R> => ({ kind: "right", value });
