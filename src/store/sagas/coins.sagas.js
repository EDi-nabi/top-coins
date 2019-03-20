import { put } from 'redux-saga/effects';
import axiosInstance from '../../tools/axios-instance';

import * as Actions from '../actions/';
import Config from '../../config/top-coin.config';

export function* coinsLoad(action) {
  yield put(Actions.coinsSetLoading());
  try {
    const response = yield axiosInstance.get(Config.url + Config.endpoint);
    yield put(Actions.coinsSet({ coins: response.data }));
  } catch(error) {
    yield put(Actions.coinsSetError({ error: error.response.data.status.error_message }));
  }
}
