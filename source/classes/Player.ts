type PlayerPosition = [number, number];

type PlayerOptions = {
  position?: PlayerOptions
}

export default class Player {
  hearts: number = 3
  position: PlayerPosition = [0, 0]

  constructor(options: PlayerOptions) {
    return this;
  }

  /**
   * Moves the player for the provided delta.
   */
  move(delta: number) {
    // ...
  }
}
