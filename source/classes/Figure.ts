import { random, inheritOptions } from '../utils';

type FigureOptions = {
  type: FigureType,
  name: string,
  onPlace?: () => number,
  onEnter?: (player: any, sector: any) => void
}

export default class Figure implements IFigure {
  type: FigureType
  name: string

  constructor(options: FigureOptions) {
    inheritOptions(this, options);
    return this;
  }

  place(roadIndex: number, roadLength: number, otherFigures: IPlacedFigure[]) {
    console.log('Sector: Must return figure position...');
    console.log({ roadIndex, roadLength, otherFigures });

    const position: IPosition = [roadIndex, random(1, roadLength)];

    return position;
  }
}
