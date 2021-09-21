export class Kata {
  private static convertToArrayOfNumbers(numbers: string): number[] {
    const convertedNumbers = numbers.split(" ").map((n) => parseInt(n));

    return convertedNumbers;
  }

  static highAndLow(numbers: string): string {
    const numbersArray = Kata.convertToArrayOfNumbers(numbers);
    let min = Number.POSITIVE_INFINITY;
    let max = Number.NEGATIVE_INFINITY;

    numbersArray.forEach((n) => {
      if (n < min) {
        min = n;
      }

      if (n > max) {
        max = n;
      }
    });

    return `${max} ${min}`;
  }
}

console.log(Kata.highAndLow("12 34 56 72 10 8 554 17 17 17"));
