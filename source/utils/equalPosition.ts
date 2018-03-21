/**
 * Determines whether the two provided positions are equal.
 */
export default function equalPosition(positionA: IPosition, positionB: IPosition): boolean {
  const [roadIndexA, sectorIndexA] = positionA;
  const [roadIndexB, sectorIndexB] = positionB;
  return (roadIndexA === roadIndexB) && (sectorIndexA === sectorIndexB);
}
