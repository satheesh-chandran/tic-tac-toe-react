import React from 'react';
import Board from './board';
import Status from './status';

const winningCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGameOver: false,
      turn: 0,
      player0: [],
      player1: [],
      moves: 0
    };
    this.winningCombinations = winningCombinations.slice();
    this.handleClick = this.handleClick.bind(this);
    this.checkWinningCondition = this.checkWinningCondition.bind(this);
  }

  async checkWinningCondition() {
    const currentTurn = (1 + this.state.turn) % 2;
    const playerSet = this.state[`player${currentTurn}`];
    const isWon = this.winningCombinations.some(comb => {
      return comb.every(place => playerSet.includes(place));
    });
    isWon && (await this.setState({ isGameOver: true, turn: currentTurn }));
  }

  async handleClick(id, turn) {
    await this.setState(state => ({
      [`player${turn}`]: state[`player${turn}`].concat(id),
      turn: 1 - state.turn,
      moves: state.moves + 1
    }));
    this.checkWinningCondition();
  }

  render() {
    return (
      <div>
        <Board
          onClick={this.handleClick}
          turn={this.state.turn}
          isGameOver={this.state.isGameOver}
        />
        <Status
          isGameOver={this.state.isGameOver}
          turn={this.state.turn}
          moves={this.state.moves}
        />
      </div>
    );
  }
}

export default Controller;
