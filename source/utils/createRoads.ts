import { random, meetsChance } from '../utils';
import { BrokenSector, Mercenary, Portal } from '../figures';

function placeFigure(roadIndex: number, roadLength: number, figureConfig: IFigureConfig, placedFigures: IPlacedFigure[]) {
  const { figure } = figureConfig;

  const figurePosition = figure.place(roadIndex, roadLength, placedFigures);

  const placedFigure: IPlacedFigure = {
    instance: figure,
    position: figurePosition
  };

  placedFigures.push(placedFigure);
  return placedFigure;
}

function placeFigures(roadIndex, roadLength, figureConfigMap: IFigureConfigMap) {
  return figureConfigMap.reduce((placedFigures: IPlacedFigure[], figureConfig) => {
    const { chance, minCount = 0, maxCount = 1 } = figureConfig;
    let figureInstances = 0;

    while (figureInstances < maxCount) {
      if (meetsChance(chance)) {
        placeFigure(roadIndex, roadLength, figureConfig, placedFigures);
        figureInstances++;
      }
    }

    if (figureInstances < minCount) {
      placeFigure(roadIndex, roadLength, figureConfig, placedFigures);
    }

    return placedFigures;
  }, []);
}

export default function createRoads(roads: IRoadConfig[]) {
  return roads.map((road, roadIndex) => {
    const { type, sectorsCount, figureConfigMap } = road;

    return {
      type,
      sectorsCount,
      figures: placeFigures(roadIndex, sectorsCount, figureConfigMap)
    };
  });
}
