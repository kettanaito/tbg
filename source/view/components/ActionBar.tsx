import * as React from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import * as playerActions from '../../store/players/actions';

interface IActionBarProps {
  player: any
}

class ActionBar extends React.Component<IActionBarProps> {
  stepsInput: HTMLInputElement

  handlePlayerMove = () => {
    store.dispatch(playerActions.moveBy(0, parseFloat(this.stepsInput.value)));
  }

  render() {
    return (
      <div className="action-bar">
        Action bar
        <input ref={ i => this.stepsInput = i } name="steps" />
        <button onClick={ this.handlePlayerMove }>Move</button>
      </div>
    );
  }
}

export default connect((state: any) => ({
  player: state.players[0]
}))(ActionBar);
