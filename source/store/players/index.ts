import initialState from './initial-state';
import * as actions from './actions';

export default function players(state = initialState, action) {
  switch(action.type) {
    case actions.SET_HEARTS: {
      const { nextValue } = action;
      return state.map((player) => {
        player.hearts = nextValue;
        return player;
      });
    }

    case actions.MOVE_BY: {
      const { playerIndex, delta } = action;
      const player = state[playerIndex];

      if (!player) {
        return state;
      }

      const { position: prevPosition } = player;
      const nextPosition = [prevPosition[0], prevPosition[1] + delta];

      return state.map((player, index) => {
        if (playerIndex === index) {
          player.position = nextPosition as any;
          return player;
        }

        return player;
      });
    }

    default:
      return state;
  }
}
