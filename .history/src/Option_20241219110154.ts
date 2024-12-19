export type Option<T> = Some<T> | None;

export class Some<T> {
  constructor(public readonly value: T) {}
}

export class None {
  constructor() {}
}

export const some = <T>(value: T): Option<T> => new Some(value);
export const none = <T>(): Option<T> => new None();
