import * as React from 'react';
import styled from 'styled-components';
import { random } from '../../utils';

type TSectorProps = {
  type: string,
  figure: IFigure,
  offsetTop?: number
}

const StyledSector = styled<TSectorProps, 'div'>('div')`
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
transition: background-position .3s ease-out;

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

const Sector = (props: TSectorProps) => {
  const offsetTop = random(0, 20);

  return (
    <StyledSector { ...props } offsetTop={ offsetTop } />
  );
}

export default Sector;
