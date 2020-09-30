import React, { useState } from 'react';

const getPlayerChar = turn => (turn ? 'O' : 'X');

const Tile = function (props) {
  const { id, turn, onClick } = props;
  const [state, setState] = useState({ text: '', isClickable: true });

  const handleClick = () => {
    if (!state.isClickable) return;
    setState({ text: getPlayerChar(turn), isClickable: false });
    onClick(id, turn);
  };

  return (
    <div className='tile' id={id} onClick={handleClick}>
      {state.text}
    </div>
  );
};

export default Tile;
