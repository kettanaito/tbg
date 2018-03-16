type PlayerOptions = {
  position?: PlayerOptions
}

export default class Player implements IPlayer {
  hearts: number = 3
  position: IPosition = [0, 0]

  constructor(options: PlayerOptions = null) {
    return this;
  }

  /**
   * Moves the player for the provided delta.
   */
  move(delta: number) {
    // ...
  }
}
