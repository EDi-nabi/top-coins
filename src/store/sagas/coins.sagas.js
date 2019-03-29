import { put } from 'redux-saga/effects';
// import { put, select } from 'redux-saga/effects';
import axios from 'axios';

import * as Actions from '../actions/';
import Config from '../../config/top-coin.config';

export function* coinsLoad(action) {
  yield put(Actions.coinsSetLoading());
  try {
    // const amount = yield select((state) => state.amount); // select from state
    const response = yield axios.get(Config.url);
    // const sliceOfData = response.data.data.slice(0, amount);
    // yield put(Actions.coinsSet({ coins: sliceOfData }));
    yield put(Actions.coinsSet({ coins: response.data.data }));
  } catch(error) {
    yield put(Actions.coinsSetError({ error }));
  }
}
