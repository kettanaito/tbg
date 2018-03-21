export const SET_HEARTS = 'SET_HEARTS';
export const setHearts = (nextValue: number) => ({
  type: SET_HEARTS,
  nextValue
});

export const MOVE_BY = 'MOVE_BY';
export const moveBy = (playerIndex: number, delta: number) => ({
  type: MOVE_BY,
  playerIndex,
  delta
});
