type FigureType =
    'building'
  | 'unpassable'
  | 'encounter'
  | 'obstacle'
  | 'fortuneteller'
;

interface IFigure {
  type: FigureType
  name: string
  place: (roadIndex: number, roadLength: number, otherFigures: IPlacedFigure[]) => IPosition
}

interface IFigureConfig {
  figure: IFigure
  chance: number
  minCount?: number
  maxCount?: number
}

type IFigureConfigMap = IFigureConfig[]

interface IPlacedFigure {
  instance: IFigure
  position: IPosition
}
