import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';

class Navigation extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <NavLink exact to='/'><h1>Top Coins</h1></NavLink>
        </header>
        <nav className={ styles.Navigation }>
          <ul>
            <li><NavLink exact to='/' activeClassName={styles.active}>Overview</NavLink></li>
            <li><NavLink exact to='/liquidity' activeClassName={styles.active}>Liquidity</NavLink></li>
          </ul>
        </nav>
      </Fragment>
    );
  }
}

export default Navigation;
