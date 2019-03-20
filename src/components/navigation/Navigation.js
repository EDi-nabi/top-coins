import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';

class Navigation extends Component {
  render() {
    return (
      <div className={ styles.Navigation }>
        <ul>
          <li><NavLink exact to='/' activeClassName={styles.active}>Overview</NavLink></li>
          <li><NavLink exact to='/liquidity' activeClassName={styles.active}>Liquidity</NavLink></li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
