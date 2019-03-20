import { combineReducers } from 'redux';

import coinsReducer from './coins.reducers';

const rootState = combineReducers({
  coins: coinsReducer,
});

export default rootState;
