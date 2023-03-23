export const randomArray = (step: number, max: number) =>
  Array.from({ length: step }, () => Math.floor(Math.random() * max));
