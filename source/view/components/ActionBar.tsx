import * as React from 'react';
import { connect } from 'react-redux';
import { movePlayer } from '../../store/players/actions';

interface IActionBarProps {
  activePlayerIndex: number,
  movePlayer: any
}

class ActionBar extends React.Component<IActionBarProps> {
  handlePlayerMove = () => {
    const { movePlayer, activePlayerIndex } = this.props;
    movePlayer(activePlayerIndex, 1);
  }

  render() {
    return (
      <div className="action-bar">
        Action bar
        <button onClick={ this.handlePlayerMove }>Move</button>
      </div>
    );
  }
}

export default connect((state: any) => ({
  activePlayerIndex: state.game.activePlayerIndex
}), { movePlayer })(ActionBar);
