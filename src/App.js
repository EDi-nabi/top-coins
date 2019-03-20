import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './App.module.css';
import * as Actions from './store/actions';
import Navigation from './components/navigation/Navigation';
import Overview from './components/overview/Overview';
import Liquidity from './components/liquidity/Liquidity';
import Spinner from './components/spinner/Spinner';

class App extends Component {
  componentDidMount() {
    if (!this.props.loaded) {
      this.props.coinsLoad();
    }
  }

  render() {
    return (
      <div className={ styles.App }>
        <h1>Top Coins</h1>
        <Navigation />
        <Switch>
          { this.props.loaded ? <Route path="/liquidity" component={ Liquidity } /> : <Spinner /> }
          { this.props.loaded ? <Route path="/" component={ Overview } /> : <Spinner /> }
        </Switch>
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

const mapDispatchToProps = (dispatch) => {
  return {
    coinsLoad: () => dispatch(Actions.coinsLoad()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
