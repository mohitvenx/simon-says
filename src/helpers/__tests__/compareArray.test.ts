import { compareArray } from 'helpers/compareArray';

describe('compareArray', () => {
  it('return false, when the values ​​on the same indexes are different.', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [2, 3, 1];

    expect(compareArray(arr1, arr2)).toBe(false);
  });

  it('return true, when the values ​​on the same indexes are same.', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];

    expect(compareArray(arr1, arr2)).toBe(true);
  });

  it('return true, when the arrays are of different length but have the same values ​​on index.', () => {
    const arr1 = [1, 2];
    const arr2 = [1, 2, 3, 4, 12];

    expect(compareArray(arr1, arr2)).toBe(true);
  });
});
