type Decremented = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
export type Decrement<n extends number> =
  Decremented[number] extends Decremented[n] ? never : Decremented[n];

/**
  forces TS to evaluate complex types & collapse them into a simpler
  representation (helpful for getting better messages in intellisense)

  Collapse does not alter the passed type (Collapse\<T\> ~= T)
*/
export type Collapse<T> = T extends (...args: any[]) => any
  ? T
  : T extends object
  ? T extends infer O
    ? { [K in keyof O]: Collapse<O[K]> }
    : never
  : T;
