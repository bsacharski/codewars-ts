export function countPositivesSumNegatives(input: number[] | null): number[] {
  const POSITIVES_COUNT_IDX = 0;
  const NEGATIVES_SUM_IDX = 1;

  if (!input || input.length === 0) {
    return [];
  }

  let output = [0, 0];

  input.forEach((el) => {
    if (el > 0) {
      output[POSITIVES_COUNT_IDX] = output[POSITIVES_COUNT_IDX] + 1;
    } else {
      output[NEGATIVES_SUM_IDX] += el;
    }
  });

  return output;
}

console.log(
  countPositivesSumNegatives([
    0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
  ])
);
