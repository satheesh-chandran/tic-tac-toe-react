import React from 'react';

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '', isClickable: true };
    this.character = ['X', 'O'];
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    if (!this.state.isClickable) return;
    const { turn, id, onClick } = this.props;
    await this.setState({ text: this.character[turn], isClickable: false });
    onClick(id, turn);
  }

  render() {
    return (
      <div className='tile' id={this.props.id} onClick={this.handleClick}>
        {this.state.text}
      </div>
    );
  }
}

export default Tile;
