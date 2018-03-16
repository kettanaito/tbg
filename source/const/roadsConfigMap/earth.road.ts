import { BrokenSector, Portal } from '../../figures';

const earthRoad: IRoadConfig = {
  type: 'earth',
  sectorsCount: 10,
  figureConfigMap: [
    {
      figure: BrokenSector,
      chance: 100,
      minCount: 2,
      maxCount: 5
    },
    {
      figure: Portal,
      chance: 100
    }
  ]
};

export default earthRoad;
