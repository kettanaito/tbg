import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { equalPosition } from '../../utils';
import Sector from './Sector';
import Player from './Player';

const MapContainer = styled.div`
display: flex;
align-items: self-end;
flex-wrap: wrap;
`;

interface IMapProps {
  roads: any
  players: any
}

class Map extends React.Component<IMapProps> {
  renderSectors = (road, roadIndex) => {
    const { players } = this.props;
    const { type, figures, sectorsCount } = road;
    const sectors = [];

    for (let sectorIndex = 0; sectorIndex < sectorsCount; sectorIndex++) {
      const sectorPosition: IPosition = [roadIndex, sectorIndex];

      sectors.push(
        <Sector
          key={ sectorIndex }
          type={ type }
          position={ sectorPosition }
          players={ players }
          figures={ figures } />
      );
    }

    return sectors;
  }

  render() {
    const { roads, players } = this.props;

    return (
      <MapContainer>
        { roads.map((road, roadIndex) => {
          return this.renderSectors(road, roadIndex);
        }) }
      </MapContainer>
    );
  }
}

export default connect((state: any) => ({
  roads: state.map.roads,
  players: state.players
}))(Map);
