/**
 * Returns a random number between min and max allowed thresholds.
 */
export default function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min - 1) + min);
}
