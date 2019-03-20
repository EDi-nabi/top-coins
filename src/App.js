import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import styles from './App.module.css';
import Navigation from './components/navigation/Navigation';
import Overview from './components/overview/Overview';
import Liquidity from './components/liquidity/Liquidity';

class App extends Component {
  render() {
    return (
      <div className={ styles.App }>
        <h1>Top Coins</h1>
        <Navigation />
        <Switch>
          <Route path="/liquidity" component={ Liquidity } />
          <Route path="/" component={ Overview } />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
