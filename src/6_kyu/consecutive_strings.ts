function combineConsecutiveStrings(
  words: string[],
  firstWordIdx: number,
  wordsToCombine: number
): string {
  const extractedWords = words.slice(
    firstWordIdx,
    firstWordIdx + wordsToCombine
  );
  const combined = extractedWords.join("");
  return combined;
}

function generateConsecutiveStrings(
  words: string[],
  wordsToCombine: number
): string[] {
  let consecutiveStrings: string[] = [];

  const maxIdx = words.length - wordsToCombine;
  for (let i = 0; i <= maxIdx; i++) {
    const combinedString = combineConsecutiveStrings(words, i, wordsToCombine);
    consecutiveStrings.push(combinedString);
  }

  return consecutiveStrings;
}

function getFirstLongestString(strings: string[]): string {
  let longestString = "";
  let longestStringLength = Number.NEGATIVE_INFINITY;

  strings.forEach((string) => {
    if (string.length > longestStringLength) {
      longestStringLength = string.length;
      longestString = string;
    }
  });

  return longestString;
}

export function longestConsec(words: string[], wordsToCombine: number): string {
  if (words.length === 0) {
    return "";
  }

  if (wordsToCombine <= 0) {
    return "";
  }

  if (words.length < wordsToCombine) {
    return "";
  }

  const consecutiveStrings = generateConsecutiveStrings(words, wordsToCombine);
  const longestString = getFirstLongestString(consecutiveStrings);
  return longestString;
}

console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 4)
);
