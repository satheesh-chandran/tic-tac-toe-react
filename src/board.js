import React from 'react';
import Tile from './tile';

const range = (start, end) =>
  Array.from(new Array(end - start), (_, index) => start + index);

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const tiles = range(1, 10).map(id => {
      return (
        <Tile
          id={id}
          key={id}
          onClick={this.props.onClick}
          turn={this.props.turn}
        />
      );
    });
    const { isGameDraw, isGameOver } = this.props;
    const className = isGameOver || isGameDraw ? 'inActive' : '';
    return <div className={`board ${className}`}>{tiles}</div>;
  }
}

export default Board;
