import React, { Component } from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import styles from './Overview.module.css';

export class Overview extends Component {
  render() {
    const rows = this.props.coins.slice(0, this.props.amount).map(coin => {

      let priceChange = coin.quote.USD['percent_change_24h'];
      if (priceChange > 0) {
        priceChange = <span className={ styles.green }>{numeral(coin.quote.USD['percent_change_24h'] / 100).format('0,0.00%')}</span>
      } else {
        priceChange = <span className={ styles.red }>{ numeral(coin.quote.USD['percent_change_24h'] / 100).format('0,0.00%') }</span>
      }

      return (
        <tr key={ coin.id }>
          <td>{ coin['cmc_rank'] }</td>
          <td>{ coin.name }</td>
          <td>{ numeral(coin.quote.USD.price.toFixed(2).toLocaleString()).format('$0,0.00') }</td>
          <td>{ priceChange }</td>
          <td>{ numeral(coin.quote.USD['market_cap']).format('$0,0.00') }</td>
          <td>{ numeral(coin.quote.USD['volume_24h']).format('$0,0.00') }</td>
        </tr>
      );
    });

    return (
      <div className={ styles.Overview }>
        <h1>Overview</h1>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Price</th>
              <th>Price change (24h)</th>
              <th>Market cap</th>
              <th>Volume (24h)</th>
            </tr>
          </thead>
          <tbody>
            { rows }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    coins: state.coins.coins,
    amount: state.coins.amount,
  }
}

export default connect(mapStateToProps)(Overview);
