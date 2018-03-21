import { Figure } from '../classes';
import store from '../store'
import { moveBy, setHearts } from '../store/players/actions'

export default new Figure({
  type: 'unpassable',
  name: 'broken-sector',
  onEnter(player) {
    store.dispatch(moveBy(0, -1));
    store.dispatch(setHearts(player.hearts - 1));
  }
});
