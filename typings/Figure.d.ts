type FigureType =
    'unpassable'
  | 'building'
  | 'encounter'
  | 'obstacle'
  | 'fortuneteller'
;

interface IFigure {
  type: FigureType
  name: string
  place: (roadIndex: number, roadLength: number, otherFigures: IPlacedFigure[]) => IPosition
  onEnter?: IFigureOnEnterHandler
}

type IFigureOnEnterHandler = (player: IPlayer, actions: any) => void

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
