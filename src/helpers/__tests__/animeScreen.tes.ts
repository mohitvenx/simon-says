import { checkTurn } from 'helpers/animeScreen';

describe('is user turn', () => {
  it('return true, when current key is higher than current round', () => {
    const currentRound = 5;
    const currentKey = 6;

    expect(checkTurn(currentRound, currentKey)).toBe(true);
  });

  it('return true, when current key is equal current round', () => {
    const currentRound = 5;
    const currentKey = 5;

    expect(checkTurn(currentRound, currentKey)).toBe(true);
  });

  it('return false, when current key is lower than current round', () => {
    const currentRound = 5;
    const currentKey = 3;

    expect(checkTurn(currentRound, currentKey)).toBe(false);
  });
});
