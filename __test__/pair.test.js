import Pair from '../src/lib/Pair';

describe('Test pair type.', () => {
  const first = 'first';
  const second = 'second';
  const newPair = new Pair(first, second);
  it('Should create the Pair data type', () => {
    expect(newPair instanceof Pair).toBeTruthy();
  });

  it('Should return first element by "car" method.', () => {
    expect(newPair.car()).toBe(first);
  });

  it('Should return second element by "cdr" method.', () => {
    expect(newPair.cdr()).toBe(second);
  });
});
