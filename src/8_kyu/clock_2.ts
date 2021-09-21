export function past(h: number, m: number, s: number): number {
  const SECONDS_IN_MINUTE = 60;
  const MINUTES_IN_HOUR = 60;
  const MILLISECONDS_IN_SECOND = 1000;

  let secondsInTotal = s;
  secondsInTotal += h * MINUTES_IN_HOUR * SECONDS_IN_MINUTE;
  secondsInTotal += m * SECONDS_IN_MINUTE;

  const millisecondsInTotal = secondsInTotal * MILLISECONDS_IN_SECOND;
  return millisecondsInTotal;
}
