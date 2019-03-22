import React, { Component, Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import styles from './App.module.css';
import * as Actions from './store/actions';
import Navigation from './components/common/navigation/Navigation';
import Overview from './components/overview/Overview';
import Liquidity from './components/liquidity/Liquidity';
import Spinner from './components/common/spinner/Spinner';
import withErrorHandler from './components/hoc/with-error-handler/withErrorHandler';

export class App extends Component {
  componentDidMount() {
    if (!this.props.loaded) {
      this.props.coinsLoad();
    }
  }

  render() {
    return (
      <Fragment>
        <Navigation loaded={ this.props.loaded } />
        <section className={ styles.Content }>
          <Switch>
            { this.props.loaded ? <Route path="/liquidity" component={ Liquidity } /> : <Spinner /> }
            { this.props.loaded ? <Route path="/" component={ Overview } /> : <Spinner /> }
          </Switch>
        </section>
      </Fragment>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(App, axios)));
