import random from './random';

export default function meetsChance(chance: number) {
  return (random(0, 100) <= chance);
}
