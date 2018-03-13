type IRoadType = 'fire' | 'water' | 'earth' | 'air';

interface IRoadConfig {
  type: IRoadType
  sectorsCount: number
  figureConfigMap?: IFigureConfig[]
}

interface IRoad {
  type: IRoadType
  sectorsCount: number
  figures?: IFigure[]
}
