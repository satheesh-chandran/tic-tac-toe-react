import React from 'react';

class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.isGameOver) return <h2>Player {this.props.turn + 1} won</h2>;
    if (this.props.isGameDraw) return <h2>Match draw</h2>;
    return <h2>Player {this.props.turn + 1}'s turn</h2>;
  }
}

export default Status;
