import { combineReducers } from 'redux';
import map from './map';
import players from './players';
import game from './game';

export default combineReducers({
  game,
  players,
  map
});
