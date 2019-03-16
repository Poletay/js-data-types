import {
  makePair,
  getFirstPairElement,
  getSecondPairElement,
  isPair,
  pairToString,
} from '../src/lib/pair';

describe('Pair', () => {
  const first = 'first';
  const second = 'second';
  const pair = makePair(first, second);
  const anotherPair = makePair(second, pair);

  it('#isPair', () => {
    expect(isPair(pair)).toBeTruthy();
    expect(isPair(5)).toBeFalsy();
    expect(isPair({})).toBeFalsy();
  });

  it('#getFirstPairElement', () => {
    expect(getFirstPairElement(pair)).toBe(first);
  });

  it('#getSecondPairElement', () => {
    expect(getSecondPairElement(pair)).toBe(second);
  });

  it('#pairToString', () => {
    expect(pairToString(pair)).toBe(`[${first}], [${second}]`);
    expect(pairToString(anotherPair)).toBe(`[${second}], [[${first}], [${second}]]`);
  });
});
