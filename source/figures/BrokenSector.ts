import { Figure } from '../classes';

export default new Figure({
  type: 'unpassable',
  name: 'broken-sector',
  onEnter(player) {
    // TODO
    player.popHeart().move(-1);
  }
});
