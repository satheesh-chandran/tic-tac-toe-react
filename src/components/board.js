import React from 'react';
import Tile from './tile';

const range = (start, end) =>
  Array.from(new Array(end - start), (_, index) => start + index);

const Board = function ({ isGameDraw, isGameOver, turn, onClick }) {
  const tiles = range(1, 10).map(id => (
    <Tile id={id} key={id} onClick={onClick} turn={turn} />
  ));
  const className = isGameOver || isGameDraw ? 'inActive' : '';
  return <div className={`board ${className}`}>{tiles}</div>;
};

export default Board;
