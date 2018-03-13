export default class Dice {
  sides: number

  constructor(sides: number = 6) {
    this.sides = sides;
    return this;
  }

  roll() {
    return Math.floor(Math.random() * this.sides) + 1;
  }
}
