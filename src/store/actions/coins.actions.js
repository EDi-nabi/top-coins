import * as ActionTypes from './action-types';

export const coinsLoad = () => {
  return {
    type: ActionTypes.COINS_LOAD,
  }
}

export const coinsSet = (payload) => {
  return {
    type: ActionTypes.COINS_SET,
    payload
  }
}

export const coinsSetLoading = () => {
  return {
    type: ActionTypes.COINS_SET_LOADING,
  }
}

export const coinsSetError = (payload) => {
  return {
    type: ActionTypes.COINS_SET_ERROR,
    payload
  }
}

export const coinsSetAmount = (payload) => {
  return {
    type: ActionTypes.COINS_SET_AMOUNT,
    payload
  }
}
