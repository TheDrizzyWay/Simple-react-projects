import React, { Component } from 'react';
import axios from 'axios';

class CryptoCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      symbol: props.symbol,
      price: null,
      lastPrice: null,
    }
  }

  pollPrice = () => {
    const { symbol } = this.state;
    axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=${symbol},USD`)
      .then(res => res.data)
      .then(data => {
        this.setState((prevState) => ({
          price: data.USD,
          lastPrice: prevState.price !== data.USD ? prevState.price : prevState.lastPrice
        }))
      })
      .catch(err => console.log(err));
  }

  priceChange = (lastPrice, price) => {
    const difference = price - lastPrice;
    const change = (difference/lastPrice) * 100;
    return change.toFixed(4);
  }

  componentDidMount() {
    this.pollPrice();
    setInterval(this.pollPrice, 10000);
  }

  render() {
    const { name, symbol, price, lastPrice } = this.state;
    const gainloss = lastPrice > price ? 'loss' : 'gain';
    return (
      <div className={`card ${gainloss}`}>
        <div className="name">
          {name}
          <span>({symbol})</span>
        </div>
        <div className="percent">
          {this.priceChange(lastPrice, price)}%
        </div>
        <div className="price">{price}</div>
      </div>
    );
  }
}

export default CryptoCard;
