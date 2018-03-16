import equalPosition from './equalPosition';

export default function findFigureAtPosition(position: IPosition, placedFigures: IPlacedFigure[]): IPlacedFigure {
  return placedFigures.find(placedFigure => equalPosition(position, placedFigure.position));
}
