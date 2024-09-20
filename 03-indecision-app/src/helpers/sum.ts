export function sum(a: number, b: number) {
  return a + b;
}

export const addArray = (arr: number[]): number => {
  return arr.reduce((arr, curr) => arr + curr, 0);
};
// [5, 5, 6]
