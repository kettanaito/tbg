export const MOVE = 'MOVE';

export const movePlayer = (playerIndex: number, delta: number) => ({
  type: MOVE,
  playerIndex,
  delta
});
