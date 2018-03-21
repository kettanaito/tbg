import { random, inheritOptions, findFigureAtPosition } from '../utils';

type FigureOptions = {
  type: FigureType,
  name: string,
  onPlace?: () => number,
  onEnter?: IFigureOnEnterHandler
}

export default class Figure implements IFigure {
  type: FigureType
  name: string
  onEnter: IFigureOnEnterHandler

  constructor(options: FigureOptions) {
    inheritOptions(this, options);
    return this;
  }

  place(roadIndex: number, roadLength: number, otherFigures: IPlacedFigure[]) {
    console.log('Sector: Must return figure position...');
    console.log({ roadIndex, roadLength, otherFigures });

    const position: IPosition = [roadIndex, random(1, roadLength)];

    /* Check if there is already some figure at the desired position */
    const existingFigure = findFigureAtPosition(position, otherFigures);
    if (existingFigure) {
      console.warn('Cannot place the figure', this, 'position already taken by:', existingFigure);
    }

    return position;
  }
}
