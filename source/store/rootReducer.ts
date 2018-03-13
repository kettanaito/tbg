import { combineReducers } from 'redux';
import players from './players';
import map from './map';

export default combineReducers({
  players,
  map
});
