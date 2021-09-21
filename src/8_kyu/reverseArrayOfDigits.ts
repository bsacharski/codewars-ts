export const digitize = (n: number): number[] => {
  let processedNumber = n;
  let reversedDigits: number[] = [];

  while (processedNumber > 10) {
    const lastDigit = processedNumber % 10;
    reversedDigits.push(lastDigit);
    processedNumber = (processedNumber - lastDigit) / 10;
  }

  reversedDigits.push(processedNumber);

  return reversedDigits;
};
