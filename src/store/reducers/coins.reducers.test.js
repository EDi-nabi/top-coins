import reducer from './coins.reducers';
import * as ActionTypes from '../actions/action-types';

describe('coins.reducers', () => {
  it('[WRONG_ACTION] should return initial state', () => {
    expect(reducer({}, {})).toEqual({});
  });

  it('[COINS_SET] should set coins and loaded, reset loaded and error', () => {
    expect(reducer({
      coins: undefined,
      loading: true,
      loaded: false,
      error: true,
    }, {
      type: ActionTypes.COINS_SET,
      payload: { coins: 1 }
    })).toEqual({
        coins: 1,
        loading: false,
        loaded: true,
        error: false,
    });
  });

  it('[COINS_SET_LOADING] should set loading', () => {
    expect(reducer({
      loading: false,
      loaded: true,
      error: true,
    }, {
      type: ActionTypes.COINS_SET_LOADING
    })).toEqual({
      loading: true,
      loaded: false,
      error: false,
    });
  });

  it('[COINS_SET_ERROR] should set error', () => {
    expect(reducer({
      loading: true,
      loaded: true,
      error: false,
    }, {
      type: ActionTypes.COINS_SET_ERROR,
      payload: { error: true },
    })).toEqual({
      loading: false,
      loaded: false,
      error: true,
    });
  });

  it('[COINS_SET_AMOUNT] should set amount', () => {
    expect(reducer({
      loaded: true,
      amount: 100,
    }, {
      type: ActionTypes.COINS_SET_AMOUNT,
      payload: { amount: 10 },
    })).toEqual({
      loaded: true,
      amount: 10,
    });
  });
});
