import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as Actions from '../actions/';
import Config from '../../config/top-coin.config';

export function* coinsLoad(action) {
  yield put(Actions.coinsSetLoading());
  try {
    const response = yield axios.get(Config.url);
    yield put(Actions.coinsSet({ coins: response.data.data }));
  } catch(error) {
    yield put(Actions.coinsSetError({ error }));
  }
}
