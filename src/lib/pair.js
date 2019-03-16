// @flow
type Message = 'first' | 'second';
export type Pair = (message: Message) => any;

export const isPair = (pair: ?Pair): boolean => typeof pair === 'function' && pair.pair;

export const makePair = (first: any, second: any): Pair => {
  const actions = { first, second };
  const pair = (message: Message) => actions[message];
  pair.pair = true;
  return pair;
};

export const getFirstPairElement = (pair: Pair): any => {
  if (isPair(pair)) {
    return pair('first');
  }
  throw new Error(`The argument must be Pair! typeof = ${typeof pair}, pair = ${pair.pair}`);
};

export const getSecondPairElement = (pair: Pair): any => {
  if (isPair(pair)) {
    return pair('second');
  }
  throw new Error('The argument must be Pair!');
};

export const pairToString = (pair: Pair): string => {
  if (isPair(pair)) {
    const first = getFirstPairElement(pair);
    const second = getSecondPairElement(pair);
    return `[${pairToString(first)}], [${pairToString(second)}]`;
  }
  return String(pair);
};
