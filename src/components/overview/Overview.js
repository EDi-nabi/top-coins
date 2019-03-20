import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './Overview.module.css';

class Overview extends Component {
  render() {

    const rows = this.props.coins.map(coin => {
      return (
        <tr>
          <td>{ coin['cmc_rank'] }</td>
          <td>{ coin.name }</td>
          <td>{ coin.quote.USD.price }</td>
          <td>{ coin.quote.USD['percent_change_24h'] }</td>
          <td>{ coin.quote.USD['market_cap'] }</td>
          <td>{ coin.quote.USD['volume_24h'] }</td>
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
    loaded: state.coins.loaded,
  }
}

export default withRouter(connect(mapStateToProps)(Overview));
