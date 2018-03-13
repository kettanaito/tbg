import initialState from './initial-state';
import * as actions from './actions';

export default function players(state = initialState, action) {
  switch(action.type) {
    case actions.MOVE: {
      const { delta } = action;
      // ...
      return state;
    }

    default:
      return state;
  }
}
