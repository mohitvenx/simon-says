export const compareArray = (userArr: number[], randArr: number[]) =>
  userArr.every((item, index) => {
    return randArr[index] === userArr[index];
  });
