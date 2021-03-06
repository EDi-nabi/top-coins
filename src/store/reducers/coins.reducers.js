import * as ActionTypes from '../actions/action-types';

const initialState = {
  coins: undefined,
  loading: false,
  loaded: false,
  error: false,
  amount: 100,
}

const coinsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.COINS_SET:
      return {
        ...state,
        coins: action.payload.coins,
        loading: false,
        loaded: true,
        error: false,
      };

    case ActionTypes.COINS_SET_LOADING:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: false,
      };

    case ActionTypes.COINS_SET_ERROR:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload.error,
      };

    case ActionTypes.COINS_SET_AMOUNT:
      return {
        ...state,
        amount: action.payload.amount,
      };

      default:
      return state;
  }
}

export default coinsReducer;
