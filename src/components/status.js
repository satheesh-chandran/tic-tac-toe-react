import React from 'react';

const Status = function (props) {
  if (props.isGameOver) return <h2>Player {props.turn + 1} won</h2>;
  if (props.isGameDraw) return <h2>Match draw</h2>;
  return <h2>Player {props.turn + 1}'s turn</h2>;
};

export default Status;
