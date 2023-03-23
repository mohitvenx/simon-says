export const checkTurn = (currRound: number, currKey: number): boolean => {
  return currRound <= currKey;
};

export const hideItem = (element: HTMLDivElement): void => {
  element.removeAttribute('style');
};

export const showItem = (element: HTMLDivElement): void => {
  element.style.background = 'blue';
};
