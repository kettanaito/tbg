import * as React from 'react';
import styled from 'styled-components';

interface IPlayerProps {
  info: Object
}

const PlayerToken = styled.div`
  background-image: url('../../source/assets/textures/player.png');
  height: 100px;
  width: 100px;
`;

export default class Player extends React.Component<IPlayerProps> {
  render() {
    return (
      <PlayerToken />
    );
  }
}
