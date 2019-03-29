import React from 'react';
import { connect } from 'react-redux';

import styles from './Amount.module.css';
import * as Actions from '../../../../store/actions';

const amount  = (props) => (
    <div className={ styles.Amount }>
      <p>How many coins?</p>
      <select className="select" onChange={ event => props.setAmount(event.target.value) }>
        <option value="100">All of them</option>
        <option value="50">50</option>
        <option value="10">10</option>
      </select>
    </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    setAmount: (amount) => dispatch(Actions.coinsSetAmount({ amount })),
  }
}

export default connect(undefined, mapDispatchToProps)(amount);

