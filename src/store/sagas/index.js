import { takeLatest, all } from 'redux-saga/effects';

import * as ActionTypes from '../actions/action-types';
import * as CoinsSagas from './coins.sagas';

export function* watchCoins() {
  yield all([
    takeLatest(ActionTypes.COINS_LOAD, CoinsSagas.coinsLoad),
  ]);
}
