import { randomArray } from 'helpers/randomArray';

describe('randomArray', () => {
  it('return random array with 10 elements', () => {
    const length = 10;
    const max = 16;
    const tempArr = randomArray(length, max);
    expect(tempArr.length).toBe(length);
  });
});
