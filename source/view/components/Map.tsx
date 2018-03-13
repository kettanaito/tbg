import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Sector from './Sector';

const MapContainer = styled.div`
display: flex;
align-items: self-end;
flex-wrap: wrap;
`;

class Map extends React.Component<any> {
  renderSectors = (road, roadIndex) => {
    const { type, figures, sectorsCount } = road;
    const sectors = [];

    for (let sectorIndex = 0; sectorIndex < sectorsCount; sectorIndex++) {
      const figure = figures.find((figure) => {
        return (figure.position[0] === roadIndex) && (figure.position[1] === sectorIndex);
      });

      sectors.push(
        <Sector
          key={ sectorIndex }
          type={ type }
          figure={ figure && figure.instance } />
      );
    }

    return sectors;
  }

  render() {
    const { roads } = this.props;

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
  roads: state.map.roads
}))(Map);
