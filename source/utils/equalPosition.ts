/**
 * Determines whether two provided positions are equal.
 */
export default function equalPosition(positionA: IPosition, positionB: IPosition): boolean {
  return (positionA[0] === positionB[0]) && (positionA[1] === positionB[1]);
}
