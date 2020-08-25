import React from 'react';

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { owner: '', innerText: '', isClickable: true };
    this.character = { 0: 'X', 1: 'O' };
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    if (!this.state.isClickable) return;
    const { turn, id, onClick } = this.props;
    await this.setState({
      innerText: this.character[turn],
      owner: id,
      isClickable: false
    });
    onClick(id, turn);
  }

  render() {
    return (
      <div className='tile' id={this.props.id} onClick={this.handleClick}>
        {this.state.innerText}
      </div>
    );
  }
}

export default Tile;
