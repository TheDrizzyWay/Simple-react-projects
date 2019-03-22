import React, { Component } from 'react';

class CryptoCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      symbol: props.symbol
    }
  }

  render() {
    return (
      <div className="card">
        <div className="name">
        {this.state.name}
        <span>({this.state.symbol})</span>
        </div>
      </div>
    );
  }
}

export default CryptoCard;
