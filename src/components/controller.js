import React, { useState } from 'react';
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
      turn: 0,
      player0: [],
      player1: [],
      isWon: false,
      isGameDraw: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.winningCombinations = [...winningCombinations];
    this.checkWinningCondition = this.checkWinningCondition.bind(this);
  }

  async checkWinningCondition() {
    const currentTurn = (1 + this.state.turn) % 2;
    const playerSet = this.state[`player${currentTurn}`];
    const isWon = this.winningCombinations.some(comb => {
      return comb.every(place => playerSet.includes(place));
    });
    isWon && (await this.setState({ isWon, turn: currentTurn }));
    const moves = this.state.player0.length + this.state.player1.length;
    moves === 9 && this.setState({ isGameDraw: true });
  }

  async handleClick(id, turn) {
    await this.setState(state => ({
      turn: 1 - state.turn,
      [`player${turn}`]: state[`player${turn}`].concat(id)
    }));
    this.checkWinningCondition();
  }

  render() {
    const { turn, isWon, isGameDraw } = this.state;
    return (
      <div>
        <Board
          turn={turn}
          isGameOver={isWon}
          isGameDraw={isGameDraw}
          onClick={this.handleClick}
        />
        <Status turn={turn} isGameOver={isWon} isGameDraw={isGameDraw} />
      </div>
    );
  }
}

export default Controller;
