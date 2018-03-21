import * as React from 'react';
import styled from 'styled-components';
import Player from './Player';
import { random, equalPosition } from '../../utils';

type TSectorProps = {
  type: IRoadType
  position: IPosition
  players: IPlayer[]
  figures: IPlacedFigure[]
}

type TStyledSectorProps = {
  type: IRoadType
  figure: IFigure
  offsetTop?: number
}

const StyledSector = styled<TStyledSectorProps, 'div'>('div')`
position: relative;
display: inline-block;
margin: ${({ offsetTop }) => offsetTop}px .25rem;

background-image: ${({ type, figure }) =>
  [
    figure && `url(./source/assets/textures/figure.${figure.name}.png)`,
    `url(./source/assets/textures/sector.${type}.png)`
  ].filter(Boolean).join()
};

background-repeat: no-repeat;
background-position: 0 0;
height: 120px;
width: 100px;
transition: all .3s ease-out;

&:hover {
  background-position-y: 8px;

  &:after {
    background-color: rgba(0, 0, 0, .15);
    filter: blur(2px);
    width: 40px;
  }
}

&:after {
  content: '';
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 10px;
  width: 30px;
  background-color: rgba(0, 0, 0, .075);
  border-radius: 100%;
  transition: all .4s;
  filter: blur(4px);
}
`;

export default class Sector extends React.Component<TSectorProps> {
  componentDidUpdate() {
    const { position, players, figures } = this.props;
    const playerOnSector = players.find(player => equalPosition(player.position, position));
    const figureOnSector = figures.find(figure => equalPosition(figure.position, position));

    if (!playerOnSector || !figureOnSector) {
      return;
    }

    if (figureOnSector && figureOnSector.instance.onEnter) {
      figureOnSector.instance.onEnter(playerOnSector, position);
    }
  }

  render() {
    const { type, position, players, figures } = this.props;
    const offsetTop = random(0, 20);

    const playerOnSector = players.find(player => equalPosition(player.position, position));
    const figureOnSector = figures.find(figure => equalPosition(figure.position, position));

    return (
      <StyledSector
        type={ type }
        figure={ figureOnSector && figureOnSector.instance }
        offsetTop={ offsetTop }>
        { playerOnSector && (
          <Player info={ playerOnSector } />
        ) }
      </StyledSector>
    );
  }
}
