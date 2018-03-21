import { moveBy } from '../store/players/actions';
import { inheritOptions } from '../utils';

export default class Player implements IPlayer {
  index: number
  hearts: number = 3
  position: IPosition = [0, 0]

  constructor(options) {
    return inheritOptions(this, options);
  }

  moveBy(delta: number) {
    return moveBy(this.index, delta);
  }
}
