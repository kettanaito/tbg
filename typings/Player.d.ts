interface IPlayer {
  hearts: number
  position: IPosition

  moveBy(delta: number)
}
